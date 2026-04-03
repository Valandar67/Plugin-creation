// ============================================================
// Olen — Workspace View
// Active workspace screen with timer, skills, finish flow.
// When an activity has a workspaceTemplate, the template is
// rendered instead of the default timer UI.
// ============================================================

import { ItemView, WorkspaceLeaf, TFile, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { ActiveWorkspace, ActivityConfig, WorkspaceType, WorkspaceResult, PomodoroSettings } from "../types";
import { VIEW_TYPE_WORKSPACE, FALLBACK_QUOTES, DEFAULT_POMODORO_SETTINGS } from "../constants";
import { THEME_PRESETS } from "../data/themes";
import { applyAccentColor } from "../utils/accentColor";
import { playAlertSound, vibrateAlert, stopAlertSound } from "../utils/alertSound";

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
  private pomSettings: PomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
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

      // Load per-activity pomodoro settings
      this.pomSettings = {
        ...DEFAULT_POMODORO_SETTINGS,
        ...(activity?.pomodoroSettings ?? {}),
      };
      this.pomodoroTotalRounds = this.pomSettings.sessionsBeforeLong;

      // Restore persisted pomodoro state (survives view close/reopen)
      if (workspace.pomodoroActive) {
        this.pomodoroMode = true;
        this.pomodoroRound = workspace.pomodoroRound ?? 1;
        this.onBreak = workspace.pomodoroOnBreak ?? false;
        // Use persisted settings snapshot if available
        if (workspace.pomodoroSettings) {
          this.pomSettings = workspace.pomodoroSettings;
          this.pomodoroTotalRounds = this.pomSettings.sessionsBeforeLong;
        }
        this.countdownTotal = workspace.pomodoroCountdownTotal ?? this.pomSettings.focusMinutes * 60;
        if (this.onBreak) {
          this.breakDuration = this.countdownTotal;
          this.breakStartTime = new Date(workspace.startTime);
        }
      } else if (activity?.pomodoro) {
        // First time setup — always use pomSettings.focusMinutes (default 25)
        this.pomodoroMode = true;
        this.countdownTotal = this.pomSettings.focusMinutes * 60;
        await this.savePomodoroState();
      }

      this.render(workspace);
      this.startTimer();
    }
  }

  async onClose(): Promise<void> {
    this.stopTimer();
    stopAlertSound();
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

  private async savePomodoroState(): Promise<void> {
    const ws = this.plugin.settings.activeWorkspace;
    if (!ws || !this.pomodoroMode) return;
    ws.pomodoroActive = true;
    ws.pomodoroRound = this.pomodoroRound;
    ws.pomodoroOnBreak = this.onBreak;
    ws.pomodoroCountdownTotal = this.onBreak ? this.breakDuration : this.countdownTotal;
    ws.pomodoroSettings = { ...this.pomSettings };
    ws.startTime = this.onBreak && this.breakStartTime
      ? this.breakStartTime.toISOString()
      : this.startTime.toISOString();
    await this.plugin.saveSettings();
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
      const labelRow = timerArea.createDiv({ cls: "olen-workspace-timer-label-row" });
      labelRow.createEl("div", { cls: "olen-workspace-timer-label", text: this.onBreak ? "BREAK" : "WORK" });
      const gearBtn = labelRow.createEl("button", {
        cls: "olen-pom-settings-btn",
        attr: { "aria-label": "Pomodoro settings" },
      });
      gearBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
      gearBtn.addEventListener("click", () => this.showPomodoroSettingsPanel(workspace));

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

  private resolveResource(path: string): string {
    const adapter = this.app.vault.adapter;
    return (adapter as any).getResourcePath ? (adapter as any).getResourcePath(path) : path;
  }

  private showPomodoroAlert(workspace: ActiveWorkspace): void {
    playAlertSound(this.pomSettings, (p) => this.resolveResource(p));
    vibrateAlert(this.pomSettings);

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
    const breakLabel = isLastRound
      ? `LONG BREAK (${this.pomSettings.longBreakMinutes}m)`
      : `TAKE BREAK (${this.pomSettings.breakMinutes}m)`;

    const actions = sheet.createDiv({ attr: { style: "display: flex; gap: 12px; justify-content: center; margin-top: 20px; flex-wrap: wrap;" } });

    if (this.pomSettings.autoStartBreak) {
      // Auto-start break after a short delay
      setTimeout(() => {
        closeSheet();
        this.startBreak(workspace, isLastRound);
      }, 1500);
    }

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
      this.startTime = new Date(Date.now() - this.elapsed * 1000);
      this.savePomodoroState();
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
    this.breakDuration = isLongBreak
      ? this.pomSettings.longBreakMinutes * 60
      : this.pomSettings.breakMinutes * 60;
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

    // Update dots and persist state
    this.updatePomodoroDots();
    this.savePomodoroState();
  }

  private showBreakEndAlert(workspace: ActiveWorkspace): void {
    playAlertSound(this.pomSettings, (p) => this.resolveResource(p));
    vibrateAlert(this.pomSettings);

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

    const startNextRound = () => {
      this.pomodoroRound++;
      this.onBreak = false;
      this.breakStartTime = null;
      this.pomodoroExpired = false;
      this.startTime = new Date();
      this.elapsed = 0;

      this.countdownTotal = this.pomSettings.focusMinutes * 60;

      const timerEl = this.contentEl.querySelector(".olen-workspace-timer");
      if (timerEl) {
        timerEl.textContent = this.formatTime(this.countdownTotal);
        timerEl.classList.remove("olen-workspace-timer-break");
      }

      const labelEl = this.contentEl.querySelector(".olen-workspace-timer-label");
      if (labelEl) labelEl.textContent = "WORK";

      this.updatePomodoroDots();
      this.savePomodoroState();
      closeSheet();
    };

    if (!isLastRound) {
      if (this.pomSettings.autoStartFocus) {
        setTimeout(() => startNextRound(), 1500);
      }

      const nextBtn = actions.createEl("button", {
        cls: "olen-btn olen-btn-primary",
        text: "NEXT POMODORO",
      });
      nextBtn.addEventListener("click", () => startNextRound());
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

  private showPomodoroSettingsPanel(workspace: ActiveWorkspace): void {
    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";

    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });
    sheet.createEl("div", { cls: "olen-heading-lg", text: "TIMER SETTINGS" });

    const profileLabel = `${this.pomSettings.focusMinutes}/${this.pomSettings.breakMinutes}`;
    sheet.createEl("div", {
      cls: "olen-body-italic",
      attr: { style: "margin: 4px 0 16px; opacity: 0.6;" },
      text: `Profile: ${profileLabel}`,
    });

    const form = sheet.createDiv({ cls: "olen-pom-settings-form" });

    // Focus time
    const focusRow = form.createDiv({ cls: "olen-pom-settings-row" });
    focusRow.createEl("span", { cls: "olen-pom-settings-label", text: "Focus time" });
    const focusInput = focusRow.createEl("input", {
      cls: "olen-pom-settings-input",
      attr: { type: "number", min: "1", max: "120", value: String(this.pomSettings.focusMinutes) },
    });

    // Break time
    const breakRow = form.createDiv({ cls: "olen-pom-settings-row" });
    breakRow.createEl("span", { cls: "olen-pom-settings-label", text: "Break time" });
    const breakInput = breakRow.createEl("input", {
      cls: "olen-pom-settings-input",
      attr: { type: "number", min: "1", max: "60", value: String(this.pomSettings.breakMinutes) },
    });

    // Long break
    const longRow = form.createDiv({ cls: "olen-pom-settings-row" });
    longRow.createEl("span", { cls: "olen-pom-settings-label", text: "Long break" });
    const longInput = longRow.createEl("input", {
      cls: "olen-pom-settings-input",
      attr: { type: "number", min: "1", max: "60", value: String(this.pomSettings.longBreakMinutes) },
    });

    // Sessions before long break
    const sessionsRow = form.createDiv({ cls: "olen-pom-settings-row" });
    sessionsRow.createEl("span", { cls: "olen-pom-settings-label", text: "Sessions before long break" });
    const sessionsInput = sessionsRow.createEl("input", {
      cls: "olen-pom-settings-input",
      attr: { type: "number", min: "2", max: "10", value: String(this.pomSettings.sessionsBeforeLong) },
    });

    // Divider
    form.createDiv({ cls: "olen-pom-settings-divider" });

    // Auto start focus
    const autoFocusRow = form.createDiv({ cls: "olen-pom-settings-row" });
    const autoFocusLeft = autoFocusRow.createDiv({ cls: "olen-pom-settings-toggle-info" });
    autoFocusLeft.createEl("span", { cls: "olen-pom-settings-label", text: "Auto start focus" });
    autoFocusLeft.createEl("span", { cls: "olen-pom-settings-desc", text: "Start work after break ends" });
    const autoFocusToggle = autoFocusRow.createEl("div", {
      cls: `olen-pom-toggle ${this.pomSettings.autoStartFocus ? "olen-pom-toggle-on" : ""}`,
    });
    autoFocusToggle.createDiv({ cls: "olen-pom-toggle-knob" });
    autoFocusToggle.addEventListener("click", () => {
      this.pomSettings.autoStartFocus = !this.pomSettings.autoStartFocus;
      autoFocusToggle.classList.toggle("olen-pom-toggle-on", this.pomSettings.autoStartFocus);
    });

    // Auto start break
    const autoBreakRow = form.createDiv({ cls: "olen-pom-settings-row" });
    const autoBreakLeft = autoBreakRow.createDiv({ cls: "olen-pom-settings-toggle-info" });
    autoBreakLeft.createEl("span", { cls: "olen-pom-settings-label", text: "Auto start break" });
    autoBreakLeft.createEl("span", { cls: "olen-pom-settings-desc", text: "Start break after work ends" });
    const autoBreakToggle = autoBreakRow.createEl("div", {
      cls: `olen-pom-toggle ${this.pomSettings.autoStartBreak ? "olen-pom-toggle-on" : ""}`,
    });
    autoBreakToggle.createDiv({ cls: "olen-pom-toggle-knob" });
    autoBreakToggle.addEventListener("click", () => {
      this.pomSettings.autoStartBreak = !this.pomSettings.autoStartBreak;
      autoBreakToggle.classList.toggle("olen-pom-toggle-on", this.pomSettings.autoStartBreak);
    });

    // Another divider
    form.createDiv({ cls: "olen-pom-settings-divider" });

    // Sound enabled
    const soundRow = form.createDiv({ cls: "olen-pom-settings-row" });
    const soundLeft = soundRow.createDiv({ cls: "olen-pom-settings-toggle-info" });
    soundLeft.createEl("span", { cls: "olen-pom-settings-label", text: "Sound" });
    soundLeft.createEl("span", { cls: "olen-pom-settings-desc", text: "Play alert sound on timer end" });
    const soundToggle = soundRow.createEl("div", {
      cls: `olen-pom-toggle ${this.pomSettings.soundEnabled ? "olen-pom-toggle-on" : ""}`,
    });
    soundToggle.createDiv({ cls: "olen-pom-toggle-knob" });
    soundToggle.addEventListener("click", () => {
      this.pomSettings.soundEnabled = !this.pomSettings.soundEnabled;
      soundToggle.classList.toggle("olen-pom-toggle-on", this.pomSettings.soundEnabled);
      // Show/hide sound file picker
      soundFileRow.style.display = this.pomSettings.soundEnabled ? "flex" : "none";
    });

    // Sound file picker
    const soundFileRow = form.createDiv({ cls: "olen-pom-settings-row" });
    soundFileRow.style.display = this.pomSettings.soundEnabled ? "flex" : "none";
    soundFileRow.createEl("span", { cls: "olen-pom-settings-label", text: "Sound file" });
    const soundFileRight = soundFileRow.createDiv({ cls: "olen-pom-settings-file-pick" });
    const soundFileLabel = soundFileRight.createEl("span", {
      cls: "olen-pom-settings-file-name",
      text: this.pomSettings.soundFile || "Default beep",
    });
    const browseBtn = soundFileRight.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      attr: { style: "padding: 4px 10px; font-size: 10px;" },
      text: "BROWSE",
    });
    browseBtn.addEventListener("click", () => {
      // Show a file picker for audio files in the vault
      this.showSoundFilePicker(soundFileLabel);
    });
    if (this.pomSettings.soundFile) {
      const clearBtn = soundFileRight.createEl("button", {
        cls: "olen-btn olen-btn-secondary",
        attr: { style: "padding: 4px 10px; font-size: 10px;" },
        text: "RESET",
      });
      clearBtn.addEventListener("click", () => {
        this.pomSettings.soundFile = undefined;
        soundFileLabel.textContent = "Default beep";
        clearBtn.remove();
      });
    }

    // Vibration enabled
    const vibRow = form.createDiv({ cls: "olen-pom-settings-row" });
    const vibLeft = vibRow.createDiv({ cls: "olen-pom-settings-toggle-info" });
    vibLeft.createEl("span", { cls: "olen-pom-settings-label", text: "Vibration" });
    vibLeft.createEl("span", { cls: "olen-pom-settings-desc", text: "Vibrate on timer end" });
    const vibToggle = vibRow.createEl("div", {
      cls: `olen-pom-toggle ${this.pomSettings.vibrationEnabled ? "olen-pom-toggle-on" : ""}`,
    });
    vibToggle.createDiv({ cls: "olen-pom-toggle-knob" });
    vibToggle.addEventListener("click", () => {
      this.pomSettings.vibrationEnabled = !this.pomSettings.vibrationEnabled;
      vibToggle.classList.toggle("olen-pom-toggle-on", this.pomSettings.vibrationEnabled);
    });

    // Save button
    const actions = sheet.createDiv({ attr: { style: "display: flex; gap: 12px; justify-content: center; margin-top: 20px;" } });
    const saveBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary",
      text: "SAVE",
    });
    saveBtn.addEventListener("click", async () => {
      this.pomSettings.focusMinutes = Math.max(1, parseInt(focusInput.value) || 25);
      this.pomSettings.breakMinutes = Math.max(1, parseInt(breakInput.value) || 5);
      this.pomSettings.longBreakMinutes = Math.max(1, parseInt(longInput.value) || 15);
      this.pomSettings.sessionsBeforeLong = Math.max(2, parseInt(sessionsInput.value) || 4);
      this.pomodoroTotalRounds = this.pomSettings.sessionsBeforeLong;

      // Save to activity config for future sessions
      const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
      if (activity) {
        activity.pomodoroSettings = { ...this.pomSettings };
      }

      // If not mid-break, update the current countdown to new focus time
      if (!this.onBreak && this.pomodoroRound === 1 && this.elapsed < 5) {
        this.countdownTotal = this.pomSettings.focusMinutes * 60;
        const timerEl = this.contentEl.querySelector(".olen-workspace-timer");
        if (timerEl) timerEl.textContent = this.formatTime(this.countdownTotal);
      }

      await this.savePomodoroState();
      this.updatePomodoroDots();

      new Notice("Pomodoro settings saved");
      closeSheet();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "CANCEL",
    });
    cancelBtn.addEventListener("click", () => closeSheet());

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeSheet();
    });

    const closeSheet = () => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 350);
    };

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("visible"));
  }

  private showSoundFilePicker(labelEl: HTMLElement): void {
    const audioExtensions = new Set(["mp3", "wav", "ogg", "m4a", "flac", "aac", "webm"]);
    const files = this.app.vault.getFiles()
      .filter((f) => {
        const ext = f.extension.toLowerCase();
        return audioExtensions.has(ext);
      })
      .sort((a, b) => a.path.localeCompare(b.path));

    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";

    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });
    sheet.createEl("div", { cls: "olen-heading-lg", text: "SELECT SOUND FILE" });

    if (files.length === 0) {
      sheet.createEl("div", {
        cls: "olen-body-italic",
        attr: { style: "margin: 20px 0; text-align: center;" },
        text: "No audio files found in vault",
      });
    } else {
      const list = sheet.createDiv({ attr: { style: "max-height: 300px; overflow-y: auto; margin: 12px 0;" } });
      for (const file of files) {
        const item = list.createDiv({ cls: "olen-pom-sound-item" });
        item.textContent = file.path;
        item.addEventListener("click", () => {
          this.pomSettings.soundFile = file.path;
          labelEl.textContent = file.name;
          closeSheet();
        });
      }
    }

    const cancelBtn = sheet.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      attr: { style: "margin-top: 12px;" },
      text: "CANCEL",
    });
    cancelBtn.addEventListener("click", () => closeSheet());

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeSheet();
    });

    const closeSheet = () => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 350);
    };

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("visible"));
  }

  private showFinishModal(workspace: ActiveWorkspace): void {
    this.stopTimer();
    stopAlertSound();
    const endTime = new Date();
    const durationMinutes = Math.round((endTime.getTime() - this.startTime.getTime()) / 60000);

    // Modal (quick-task-sheet style)
    const modal = document.createElement("div");
    modal.className = "olen-finish-modal";

    const backdrop = modal.createDiv({ cls: "olen-finish-backdrop" });
    const sheet = modal.createDiv({ cls: "olen-finish-sheet" });

    // Copy theme CSS vars from dashboard
    const dashboard = document.querySelector(".olen-dashboard") as HTMLElement | null;
    if (dashboard) {
      const cs = getComputedStyle(dashboard);
      const vars = [
        "--bg-primary", "--bg-secondary", "--card-bg", "--card-bg-solid",
        "--card-border", "--text-primary", "--text-secondary", "--text-muted",
        "--text-dim", "--accent-gold", "--accent-gold-bright", "--accent-gold-dim",
        "--accent-amber", "--shadow-card", "--glow-gold-strong",
      ];
      for (const v of vars) {
        const val = cs.getPropertyValue(v);
        if (val) sheet.style.setProperty(v, val);
      }
    }

    sheet.createEl("div", { cls: "olen-finish-title", text: "HOW DID IT FEEL?" });
    sheet.createEl("div", {
      cls: "olen-finish-subtitle",
      text: `${workspace.emoji} ${workspace.activityName} \u00B7 ${durationMinutes} minutes`,
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

    const closeSheet = () => {
      sheet.style.animation = "olen-finish-up 0.25s ease forwards";
      backdrop.style.opacity = "0";
      setTimeout(() => modal.remove(), 300);
    };

    document.body.appendChild(modal);
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
