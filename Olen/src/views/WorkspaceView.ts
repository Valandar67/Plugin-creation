// ============================================================
// Olen — Workspace View
// Active workspace screen with timer, skills, finish flow.
// When an activity has a workspaceTemplate, the template is
// rendered instead of the default timer UI.
// ============================================================

import { ItemView, WorkspaceLeaf, TFile, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { ActiveWorkspace, ActivityConfig, WorkspaceType, WorkspaceResult } from "../types";
import { VIEW_TYPE_WORKSPACE, FALLBACK_QUOTES } from "../constants";
import { THEME_PRESETS } from "../data/themes";
import { applyAccentColor } from "../utils/accentColor";

export class WorkspaceView extends ItemView {
  plugin: OlenPlugin;
  private timerInterval: number | null = null;
  private startTime: Date;
  private elapsed = 0; // seconds
  private pomodoroMode = false;
  private countdownTotal = 0; // seconds
  private pomodoroExpired = false;
  private pomodoroRound = 1;
  private pomodoroTotalRounds = 4;
  private onBreak = false;
  private breakDuration = 0; // seconds
  private breakStartTime: Date | null = null;
  /** When in template mode, tracks the daily note file the template is bound to */
  private templateNoteFile: TFile | null = null;
  /** Tracks whether we already processed a completion (prevents double-apply) */
  private completionApplied = false;

  constructor(leaf: WorkspaceLeaf, plugin: OlenPlugin) {
    super(leaf);
    this.plugin = plugin;
    this.startTime = new Date();
  }

  getViewType(): string {
    return VIEW_TYPE_WORKSPACE;
  }

  getDisplayText(): string {
    const workspace = this.plugin.settings.activeWorkspace;
    return workspace ? `Workspace: ${workspace.activityName}` : "Workspace";
  }

  getIcon(): string {
    return "timer";
  }

  async onOpen(): Promise<void> {
    const workspace = this.plugin.settings.activeWorkspace;
    if (!workspace) {
      this.contentEl.createEl("div", { text: "No active workspace." });
      return;
    }

    const activity = this.plugin.settings.activities.find(
      (a) => a.id === workspace.activityId,
    );

    if (activity?.workspaceTemplate) {
      // Template mode: render the activity template bound to today's daily note
      await this.renderTemplateMode(workspace, activity);
    } else {
      // Default mode: timer + skills + finish
      this.startTime = new Date(workspace.startTime);
      if (activity?.pomodoro && activity.estimatedDuration > 0) {
        this.pomodoroMode = true;
        this.countdownTotal = activity.estimatedDuration * 60;
      }
      this.render(workspace);
      this.startTimer();
    }
  }

  async onClose(): Promise<void> {
    this.stopTimer();
    this.templateNoteFile = null;
    this.completionApplied = false;
    this.contentEl.empty();
  }

  // ================================================================
  // Template Mode
  // ================================================================

  private async renderTemplateMode(
    workspace: ActiveWorkspace,
    activity: ActivityConfig,
  ): Promise<void> {
    const container = this.contentEl;
    container.empty();

    // Find or create today's daily note for this activity
    const file = await this.findOrCreateDailyNote(activity);
    if (!file) {
      container.createEl("div", {
        text: "Could not load activity note.",
        attr: { style: "color: var(--text-error); padding: 20px; text-align: center;" },
      });
      return;
    }

    this.templateNoteFile = file;

    // Wait for metadata cache to populate (important for newly created files)
    await this.waitForMetadata(file);

    // Render template into the view's content area
    const templateContainer = container.createDiv({ cls: "olen-dashboard olen-template-root" });
    this.applyThemeOverrides(templateContainer);
    await this.plugin.templateEngine.render(
      activity.workspaceTemplate!,
      file,
      templateContainer,
    );

    // Watch for the template marking the activity as done in frontmatter.
    // When the activity property becomes true, apply plugin-level effects
    // (XP, boss damage, clear activeWorkspace).
    this.registerEvent(
      this.app.metadataCache.on("changed", (changedFile) => {
        if (this.completionApplied) return;
        if (changedFile.path !== file.path) return;

        const cache = this.app.metadataCache.getFileCache(changedFile);
        const fm = cache?.frontmatter;
        if (fm?.[activity.property] === true) {
          this.completionApplied = true;
          const completionType = fm[`${activity.property}-Type`] as string | undefined;
          this.applyTemplateCompletion(workspace, activity, completionType);
        }
      }),
    );
  }

  /**
   * Find today's daily note in the activity folder, or create one.
   * Ensures the note has `activity: <id>` in frontmatter so the
   * template post-processor also works when opening the note directly.
   */
  private async findOrCreateDailyNote(activity: ActivityConfig): Promise<TFile | null> {
    const now = this.plugin.settings.simulatedDate
      ? new Date(this.plugin.settings.simulatedDate)
      : new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const folder = activity.folder;
    const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";

    // Look for existing daily note
    const files = this.app.vault.getMarkdownFiles();
    const existing = files.find(
      (f) =>
        (f.path === folder || f.path.startsWith(normalizedFolder)) &&
        f.basename === dateStr,
    );

    if (existing) {
      // Ensure it has the activity field in frontmatter
      await this.app.fileManager.processFrontMatter(existing, (fm) => {
        if (!fm.activity) fm.activity = activity.id;
      });
      return existing;
    }

    // Ensure folder exists
    const abstractFolder = this.app.vault.getAbstractFileByPath(folder);
    if (!abstractFolder) {
      try {
        await this.app.vault.createFolder(folder);
      } catch {
        // Folder may already exist
      }
    }

    // Create new daily note with activity frontmatter
    const filePath = `${normalizedFolder}${dateStr}.md`;
    const content = `---\nactivity: ${activity.id}\n---\n`;
    try {
      return await this.app.vault.create(filePath, content);
    } catch {
      // File might already exist with a different casing or race condition
      return null;
    }
  }

  /**
   * Wait until the metadata cache has indexed a file's frontmatter.
   */
  private async waitForMetadata(file: TFile): Promise<void> {
    let attempts = 0;
    while (attempts < 20) {
      const cache = this.app.metadataCache.getFileCache(file);
      if (cache?.frontmatter) return;
      await sleep(50);
      attempts++;
    }
  }

  /**
   * Called when the template marks the activity as done in frontmatter.
   * Applies plugin-level effects: XP, boss damage, clear workspace.
   */
  private async applyTemplateCompletion(
    workspace: ActiveWorkspace,
    activity: ActivityConfig,
    completionType?: string,
  ): Promise<void> {
    // Map the template's completion type to a workspace state
    const wsType = completionType?.toLowerCase() as WorkspaceType | undefined;
    const state = wsType
      ? this.plugin.settings.workspaceCompletionStates.find((s) => s.id === wsType)
      : this.plugin.settings.workspaceCompletionStates.find((s) => s.id === "discipline");

    // Apply XP
    if (state && state.xpMultiplier > 0) {
      const xpGain = Math.round(
        this.plugin.settings.devConfig.xpPerCompletion * state.xpMultiplier,
      );
      this.plugin.settings.categoryXP[workspace.category] += xpGain;
    }

    // Apply boss damage (unless skipped)
    if (wsType !== "skipped") {
      this.plugin.settings.bossCurrentHP = Math.max(
        0,
        this.plugin.settings.bossCurrentHP - activity.damagePerCompletion,
      );
    }

    // Clear active workspace
    this.plugin.settings.activeWorkspace = null;
    await this.plugin.saveSettings();
  }

  // ================================================================
  // Default Mode (timer + skills + finish)
  // ================================================================

  private startTimer(): void {
    const workspace = this.plugin.settings.activeWorkspace;
    this.timerInterval = window.setInterval(() => {
      this.elapsed = Math.floor((Date.now() - this.startTime.getTime()) / 1000);
      const timerEl = this.contentEl.querySelector(".olen-workspace-timer");
      if (!timerEl) return;

      if (this.pomodoroMode && this.onBreak && this.breakStartTime) {
        // Break countdown
        const breakElapsed = Math.floor((Date.now() - this.breakStartTime.getTime()) / 1000);
        const breakRemaining = this.breakDuration - breakElapsed;
        timerEl.textContent = this.formatTime(Math.max(0, breakRemaining));

        if (breakRemaining <= 0 && !this.pomodoroExpired) {
          this.pomodoroExpired = true;
          if (workspace) this.showBreakEndAlert(workspace);
        }
      } else if (this.pomodoroMode) {
        // Work countdown
        const remaining = this.countdownTotal - this.elapsed;
        timerEl.textContent = this.formatTime(Math.max(0, remaining));

        if (remaining <= 60 && remaining > 0) {
          timerEl.classList.add("olen-workspace-timer-warning");
        } else {
          timerEl.classList.remove("olen-workspace-timer-warning");
        }

        if (remaining <= 0 && !this.pomodoroExpired) {
          this.pomodoroExpired = true;
          timerEl.classList.add("olen-workspace-timer-warning");
          if (workspace) this.showPomodoroAlert(workspace);
        }
      } else {
        timerEl.textContent = this.formatTime(this.elapsed);
      }
    }, 1000);
  }

  private stopTimer(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  private applyThemeOverrides(root: HTMLElement): void {
    const mode = this.plugin.settings.themeMode ?? "dark";
    const preset = THEME_PRESETS[mode];
    const overrides = this.plugin.settings.themeOverrides ?? {};
    const theme = { ...preset, ...overrides };
    const cssMap: Record<string, string> = {
      bgPrimary: "--bg-primary", bgSecondary: "--bg-secondary",
      cardBg: "--card-bg", cardBgSolid: "--card-bg-solid",
      cardBorder: "--card-border", cardBorderHover: "--card-border-hover",
      textPrimary: "--text-primary", textSecondary: "--text-secondary",
      textMuted: "--text-muted", textDim: "--text-dim",
      accentGold: "--accent-gold", accentGoldBright: "--accent-gold-bright",
      accentGoldDim: "--accent-gold-dim", accentAmber: "--accent-amber",
      accentWarm: "--accent-warm",
      danger: "--danger", dangerDim: "--danger-dim",
      success: "--success", successDim: "--success-dim",
      bodyColor: "--body-color", mindColor: "--mind-color", spiritColor: "--spirit-color",
      cardBlur: "--card-blur", glassSheen: "--glass-sheen", divider: "--divider",
      glowGold: "--glow-gold", glowGoldStrong: "--glow-gold-strong",
      glowDanger: "--glow-danger",
      shadowCard: "--shadow-card", shadowDeep: "--shadow-deep",
    };
    for (const [key, prop] of Object.entries(cssMap)) {
      const val = (theme as any)[key];
      if (val) root.style.setProperty(prop, val);
    }

    // Override with Obsidian accent color
    if (this.plugin.obsidianAccentColor) {
      applyAccentColor(root, this.plugin.obsidianAccentColor);
    }
  }

  private render(workspace: ActiveWorkspace): void {
    const container = this.contentEl;
    container.empty();

    const root = container.createDiv({ cls: "olen-dashboard olen-workspace-root" });
    this.applyThemeOverrides(root);

    // Top bar
    const topBar = root.createDiv({ cls: "olen-workspace-topbar" });

    const actInfo = topBar.createDiv({ cls: "olen-workspace-act-info" });
    actInfo.createEl("span", { cls: "olen-workspace-emoji", text: workspace.emoji });
    actInfo.createEl("span", { cls: "olen-workspace-act-name", text: workspace.activityName });

    const timerArea = topBar.createDiv({ cls: "olen-workspace-timer-area" });
    const timerEl = timerArea.createEl("div", {
      cls: "olen-workspace-timer",
      text: this.pomodoroMode ? this.formatTime(this.countdownTotal) : "00:00",
    });
    if (this.pomodoroMode) {
      timerArea.createEl("div", { cls: "olen-workspace-timer-label", text: "WORK" });
      const pomInfo = timerArea.createDiv({ cls: "olen-workspace-pom-info" });
      for (let i = 1; i <= this.pomodoroTotalRounds; i++) {
        pomInfo.createEl("span", {
          cls: i < this.pomodoroRound ? "olen-pom-dot olen-pom-dot-done" :
               i === this.pomodoroRound ? "olen-pom-dot olen-pom-dot-active" :
               "olen-pom-dot",
          text: i < this.pomodoroRound ? "\u25CF" : i === this.pomodoroRound ? "\u25CF" : "\u25CB",
        });
      }
    }

    const finishBtn = topBar.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-workspace-finish-btn",
      text: "FINISH",
    });
    finishBtn.addEventListener("click", () => this.showFinishModal(workspace));

    // Category accent line
    const accentColor = this.plugin.settings.categoryColors[workspace.category] ?? "#928d85";
    const accent = root.createDiv({ cls: "olen-workspace-accent" });
    accent.style.background = `linear-gradient(90deg, ${accentColor}, transparent)`;

    // Main content area
    const content = root.createDiv({ cls: "olen-workspace-content" });

    // Skills section
    const skillsSection = content.createDiv({ cls: "olen-workspace-skills-section" });
    skillsSection.createEl("div", { cls: "olen-heading", text: "WORKSPACE SKILLS" });

    const skillsContainer = skillsSection.createDiv({ cls: "olen-workspace-skills" });

    if (workspace.skills.length === 0) {
      skillsContainer.createEl("div", {
        cls: "olen-workspace-no-skills",
        text: "No skills tagged yet",
      });
    } else {
      for (const skill of workspace.skills) {
        const chip = skillsContainer.createDiv({ cls: "olen-workspace-skill-chip" });
        chip.textContent = skill;
      }
    }

    // Add skills button
    const addSkillBtn = skillsSection.createEl("button", {
      cls: "olen-btn olen-btn-secondary olen-workspace-add-skill",
      text: "+ ADD SKILL",
    });
    addSkillBtn.addEventListener("click", () => this.showSkillPicker(workspace));

    // Focus zone — motivational area
    const focusZone = content.createDiv({ cls: "olen-workspace-focus" });
    const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    focusZone.createEl("div", {
      cls: "olen-quote-text",
      text: `"${quote.text}"`,
    });
    focusZone.createEl("div", {
      cls: "olen-quote-attribution",
      text: `— ${quote.attribution}`,
    });

    // Bottom bar
    const bottomBar = root.createDiv({ cls: "olen-workspace-bottombar" });
    const catLabel = workspace.category.charAt(0).toUpperCase() + workspace.category.slice(1);
    bottomBar.createEl("div", {
      cls: "olen-workspace-category-label",
      text: catLabel,
    });
    bottomBar.style.borderLeftColor = accentColor;
  }

  private showSkillPicker(workspace: ActiveWorkspace): void {
    // Prompt for skill name via a simple input
    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";

    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });
    sheet.createEl("div", { cls: "olen-heading-lg", text: "ADD SKILL" });

    const inputWrap = sheet.createDiv({ attr: { style: "margin: 20px 0;" } });
    const input = inputWrap.createEl("input", {
      cls: "olen-workspace-skill-input",
      attr: { type: "text", placeholder: "Skill name..." },
    });

    // If skill folder exists, load existing skills
    if (workspace.skillFolder) {
      const skills = this.loadSkillsFromFolder(workspace.skillFolder);
      if (skills.length > 0) {
        const existing = sheet.createDiv({ cls: "olen-workspace-skills", attr: { style: "margin-bottom: 16px;" } });
        for (const skill of skills) {
          const chip = existing.createDiv({ cls: "olen-workspace-skill-chip olen-clickable" });
          chip.textContent = skill;
          chip.addEventListener("click", () => {
            addSkill(skill);
            closeSheet();
          });
        }
      }
    }

    const actions = sheet.createDiv({ cls: "olen-directive-actions" });

    const addBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary",
      text: "ADD",
    });
    addBtn.addEventListener("click", () => {
      const val = input.value.trim();
      if (val) {
        addSkill(val);
        closeSheet();
      }
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "CANCEL",
    });
    cancelBtn.addEventListener("click", () => closeSheet());

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeSheet();
    });

    const addSkill = (name: string) => {
      if (!workspace.skills.includes(name)) {
        workspace.skills.push(name);
        this.plugin.settings.activeWorkspace = workspace;
        this.plugin.saveSettings();
        this.render(workspace);
      }
    };

    const closeSheet = () => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 350);
    };

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  }

  private loadSkillsFromFolder(folderPath: string): string[] {
    const files = this.app.vault.getMarkdownFiles();
    const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";
    return files
      .filter((f) => f.path.startsWith(normalizedFolder))
      .map((f) => f.basename)
      .sort();
  }

  private playAlertSound(): void {
    try {
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 880;
      osc.type = "sine";
      gain.gain.value = 0.3;
      osc.start();
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
      osc.stop(ctx.currentTime + 1.5);
    } catch { /* Web Audio not available */ }
  }

  private renderPomodoroDots(container: HTMLElement): void {
    const dots = container.createDiv({ cls: "olen-workspace-pom-info" });
    for (let i = 1; i <= this.pomodoroTotalRounds; i++) {
      dots.createEl("span", {
        cls: i < this.pomodoroRound ? "olen-pom-dot olen-pom-dot-done" :
             i === this.pomodoroRound ? "olen-pom-dot olen-pom-dot-active" :
             "olen-pom-dot",
        text: i < this.pomodoroRound ? "\u25CF" : i === this.pomodoroRound ? "\u25CF" : "\u25CB",
      });
    }
  }

  private showPomodoroAlert(workspace: ActiveWorkspace): void {
    this.playAlertSound();
    (navigator as any).vibrate?.([200, 100, 200]);

    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";

    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });

    sheet.createEl("div", { cls: "olen-heading-lg", text: `POMODORO ${this.pomodoroRound} COMPLETE!` });
    const durationMinutes = Math.round(this.countdownTotal / 60);
    sheet.createEl("div", {
      cls: "olen-body-italic",
      attr: { style: "margin: 12px 0 8px;" },
      text: `${workspace.emoji} ${workspace.activityName} \u00B7 ${durationMinutes} minutes`,
    });

    this.renderPomodoroDots(sheet);

    const isLastRound = this.pomodoroRound >= this.pomodoroTotalRounds;
    const breakLabel = isLastRound ? "LONG BREAK (20m)" : "TAKE BREAK (5m)";

    const actions = sheet.createDiv({ attr: { style: "display: flex; gap: 12px; justify-content: center; margin-top: 20px; flex-wrap: wrap;" } });

    const breakBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary",
      text: breakLabel,
    });
    breakBtn.addEventListener("click", () => {
      closeSheet();
      this.startBreak(workspace, isLastRound);
    });

    const extendBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "+5 MIN",
    });
    extendBtn.addEventListener("click", () => {
      this.countdownTotal = this.elapsed + 300;
      this.pomodoroExpired = false;
      const timerEl = this.contentEl.querySelector(".olen-workspace-timer");
      if (timerEl) timerEl.classList.remove("olen-workspace-timer-warning");
      closeSheet();
    });

    const finishBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "FINISH",
    });
    finishBtn.addEventListener("click", () => {
      closeSheet();
      this.showFinishModal(workspace);
    });

    const closeSheet = () => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 350);
    };

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("visible"));
  }

  private startBreak(workspace: ActiveWorkspace, isLongBreak: boolean): void {
    this.onBreak = true;
    this.breakDuration = isLongBreak ? 20 * 60 : 5 * 60;
    this.breakStartTime = new Date();
    this.pomodoroExpired = false;

    // Update timer display for break mode
    const timerEl = this.contentEl.querySelector(".olen-workspace-timer");
    if (timerEl) {
      timerEl.textContent = this.formatTime(this.breakDuration);
      timerEl.classList.remove("olen-workspace-timer-warning");
      timerEl.classList.add("olen-workspace-timer-break");
    }

    // Update label
    const labelEl = this.contentEl.querySelector(".olen-workspace-timer-label");
    if (labelEl) labelEl.textContent = "BREAK";

    // Update dots
    this.updatePomodoroDots();
  }

  private showBreakEndAlert(workspace: ActiveWorkspace): void {
    this.playAlertSound();
    (navigator as any).vibrate?.([200, 100, 200]);

    const isLastRound = this.pomodoroRound >= this.pomodoroTotalRounds;

    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";

    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });

    sheet.createEl("div", {
      cls: "olen-heading-lg",
      text: isLastRound ? "SESSION COMPLETE!" : "BREAK'S OVER!",
    });
    sheet.createEl("div", {
      cls: "olen-body-italic",
      attr: { style: "margin: 12px 0 8px;" },
      text: isLastRound
        ? `All ${this.pomodoroTotalRounds} pomodoros done \u2014 great work!`
        : `Ready for pomodoro ${this.pomodoroRound + 1} of ${this.pomodoroTotalRounds}`,
    });

    this.renderPomodoroDots(sheet);

    const actions = sheet.createDiv({ attr: { style: "display: flex; gap: 12px; justify-content: center; margin-top: 20px; flex-wrap: wrap;" } });

    if (!isLastRound) {
      const nextBtn = actions.createEl("button", {
        cls: "olen-btn olen-btn-primary",
        text: "NEXT POMODORO",
      });
      nextBtn.addEventListener("click", () => {
        this.pomodoroRound++;
        this.onBreak = false;
        this.breakStartTime = null;
        this.pomodoroExpired = false;
        this.startTime = new Date();
        this.elapsed = 0;

        // Restore work timer display
        const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
        this.countdownTotal = (activity?.estimatedDuration ?? 25) * 60;

        const timerEl = this.contentEl.querySelector(".olen-workspace-timer");
        if (timerEl) {
          timerEl.textContent = this.formatTime(this.countdownTotal);
          timerEl.classList.remove("olen-workspace-timer-break");
        }

        const labelEl = this.contentEl.querySelector(".olen-workspace-timer-label");
        if (labelEl) labelEl.textContent = "WORK";

        this.updatePomodoroDots();
        closeSheet();
      });
    }

    const finishBtn = actions.createEl("button", {
      cls: isLastRound ? "olen-btn olen-btn-primary" : "olen-btn olen-btn-secondary",
      text: "FINISH",
    });
    finishBtn.addEventListener("click", () => {
      closeSheet();
      this.showFinishModal(workspace);
    });

    const closeSheet = () => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 350);
    };

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("visible"));
  }

  private updatePomodoroDots(): void {
    const existing = this.contentEl.querySelector(".olen-workspace-pom-info");
    if (!existing) return;
    existing.empty();
    for (let i = 1; i <= this.pomodoroTotalRounds; i++) {
      (existing as HTMLElement).createEl("span", {
        cls: i < this.pomodoroRound ? "olen-pom-dot olen-pom-dot-done" :
             i === this.pomodoroRound ? "olen-pom-dot olen-pom-dot-active" :
             "olen-pom-dot",
        text: i < this.pomodoroRound ? "\u25CF" : i === this.pomodoroRound ? "\u25CF" : "\u25CB",
      });
    }
  }

  private showFinishModal(workspace: ActiveWorkspace): void {
    this.stopTimer();
    const endTime = new Date();
    const durationMinutes = Math.round((endTime.getTime() - this.startTime.getTime()) / 60000);

    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";

    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });

    sheet.createEl("div", { cls: "olen-heading-lg", text: "HOW DID IT FEEL?" });
    sheet.createEl("div", {
      cls: "olen-body-italic",
      attr: { style: "margin: 12px 0 20px;" },
      text: `${workspace.emoji} ${workspace.activityName} · ${durationMinutes} minutes`,
    });

    // Completion state buttons
    const states = this.plugin.settings.workspaceCompletionStates.filter((s) => s.enabled);
    const statesGrid = sheet.createDiv({ cls: "olen-workspace-states-grid" });

    for (const state of states) {
      const btn = statesGrid.createDiv({ cls: "olen-workspace-state-btn" });
      btn.style.borderColor = state.color;

      btn.createEl("div", { cls: "olen-workspace-state-icon", text: state.icon });
      btn.createEl("div", { cls: "olen-workspace-state-name", text: state.name });

      btn.addEventListener("click", async () => {
        const result: WorkspaceResult = {
          activityId: workspace.activityId,
          activityName: workspace.activityName,
          category: workspace.category,
          type: state.id,
          startTime: workspace.startTime,
          endTime: endTime.toISOString(),
          durationMinutes,
          skills: workspace.skills,
        };

        await this.finishWorkspace(result, workspace);
        closeSheet();
      });
    }

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        // Don't close on overlay tap — user must choose
      }
    });

    const closeSheet = () => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 350);
    };

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("visible"));
  }

  private async finishWorkspace(result: WorkspaceResult, workspace: ActiveWorkspace): Promise<void> {
    // 1. Create workspace markdown file in the activity folder
    const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
    if (activity?.folder) {
      await this.createWorkspaceFile(result, activity.folder);
    }

    // 2. Update the activity's daily note frontmatter
    await this.markActivityDone(workspace, result);

    // 3. Apply XP
    const state = this.plugin.settings.workspaceCompletionStates.find((s) => s.id === result.type);
    if (state && state.xpMultiplier > 0) {
      const xpGain = Math.round(this.plugin.settings.devConfig.xpPerCompletion * state.xpMultiplier);
      this.plugin.settings.categoryXP[workspace.category] += xpGain;
    }

    // 4. Apply boss damage (unless skipped)
    if (result.type !== "skipped") {
      const act = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
      if (act) {
        this.plugin.settings.bossCurrentHP = Math.max(
          0,
          this.plugin.settings.bossCurrentHP - act.damagePerCompletion
        );
      }
    }

    // 5. Clear active workspace
    this.plugin.settings.activeWorkspace = null;
    await this.plugin.saveSettings();

    // 6. Show notice
    const stateLabel = this.plugin.settings.workspaceCompletionStates.find((s) => s.id === result.type)?.name ?? result.type;
    new Notice(`${workspace.emoji} ${workspace.activityName} — ${stateLabel} · ${result.durationMinutes}m`);

    // 7. Switch back to dashboard
    this.plugin.activateDashboardView();
  }

  private async createWorkspaceFile(result: WorkspaceResult, folder: string): Promise<void> {
    const activity = this.plugin.settings.activities.find((a) => a.id === result.activityId);
    const property = activity?.property ?? result.activityName;

    const endTime = new Date(result.endTime);
    const startTime = new Date(result.startTime);
    const dateStr = endTime.toISOString().slice(0, 10);
    // Naming: "Workspace YYYY-MM-DD HHMM"
    const timeStr = `${String(endTime.getHours()).padStart(2, "0")}${String(endTime.getMinutes()).padStart(2, "0")}`;
    const fileName = `Workspace ${dateStr} ${timeStr}`;
    const filePath = `${folder}/${fileName}.md`;

    // Build timezone-aware timestamp
    const tzOffset = -startTime.getTimezoneOffset();
    const tzHours = String(Math.floor(Math.abs(tzOffset) / 60)).padStart(2, "0");
    const tzMins = String(Math.abs(tzOffset) % 60).padStart(2, "0");
    const tzSign = tzOffset >= 0 ? "+" : "-";
    const timestamp = startTime.toISOString().slice(0, -1) + tzSign + tzHours + ":" + tzMins;

    const endTimestamp = endTime.toISOString().slice(0, -1) + tzSign + tzHours + ":" + tzMins;

    // Pick a quote
    const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];

    // Capitalize completion type to match existing format (Discipline/Flow/Skipped)
    const typeName = result.type.charAt(0).toUpperCase() + result.type.slice(1);
    const durationStr = `${Math.floor(result.durationMinutes / 60)}h ${result.durationMinutes % 60}m`;

    // Build frontmatter
    const fmLines = [
      "---",
      "editor-width: 100",
      `${property}: true`,
      `${property}-Type: "${typeName}"`,
      `Timestamp: "${timestamp}"`,
      `endTime: "${endTimestamp}"`,
      `duration: "${durationStr}"`,
      `category: "${result.category}"`,
      result.skills.length > 0
        ? `skills: [${result.skills.map((s) => `"${s}"`).join(", ")}]`
        : "skills: []",
      "cssclasses:",
      "  - hide-properties",
      "---",
    ];

    const body = [
      "",
      `# ${activity?.emoji ?? ""} ${result.activityName} Workspace`,
      "",
      `> "${quote.text}"`,
      `> — ${quote.attribution}`,
      "",
      "## Notes",
      "",
      "",
    ];

    const content = [...fmLines, ...body].join("\n");

    // Ensure folder exists
    const abstractFolder = this.app.vault.getAbstractFileByPath(folder);
    if (!abstractFolder) {
      await this.app.vault.createFolder(folder);
    }

    // Handle duplicate filenames
    let finalPath = filePath;
    const existing = this.app.vault.getAbstractFileByPath(filePath);
    if (existing) {
      let counter = 2;
      while (this.app.vault.getAbstractFileByPath(`${folder}/${fileName} (${counter}).md`)) {
        counter++;
      }
      finalPath = `${folder}/${fileName} (${counter}).md`;
    }

    await this.app.vault.create(finalPath, content);
  }

  private async markActivityDone(workspace: ActiveWorkspace, result?: WorkspaceResult): Promise<void> {
    // Find today's note in the activity folder and set the property to true
    const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
    if (!activity) return;

    const now = this.plugin.settings.simulatedDate
      ? new Date(this.plugin.settings.simulatedDate)
      : new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const folder = activity.folder;
    const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";

    // Look for a file matching today's date
    const files = this.app.vault.getMarkdownFiles();
    const todayFile = files.find(
      (f) => (f.path === folder || f.path.startsWith(normalizedFolder)) && f.basename === dateStr
    );

    if (todayFile) {
      // Update frontmatter — set property and completion type
      await this.app.fileManager.processFrontMatter(todayFile, (frontmatter) => {
        frontmatter[activity.property] = true;
        if (result) {
          const typeName = result.type.charAt(0).toUpperCase() + result.type.slice(1);
          frontmatter[`${activity.property}-Type`] = typeName;
        }
      });
    } else {
      // Create the daily note with the property set
      const filePath = `${normalizedFolder}${dateStr}.md`;
      const typeLine = result
        ? `\n${activity.property}-Type: "${result.type.charAt(0).toUpperCase() + result.type.slice(1)}"`
        : "";
      const content = `---\n${activity.property}: true${typeLine}\n---\n`;
      try {
        await this.app.vault.create(filePath, content);
      } catch {
        // File might already exist with a different name
      }
    }
  }

  private formatTime(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
}

// Utility
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
