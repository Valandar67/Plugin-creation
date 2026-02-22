// ============================================================
// Olen — Workspace View
// Active workspace screen with timer, skills, finish flow
// ============================================================

import { ItemView, WorkspaceLeaf, TFile, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { ActiveWorkspace, WorkspaceType, WorkspaceResult } from "../types";
import { VIEW_TYPE_WORKSPACE, FALLBACK_QUOTES } from "../constants";

export class WorkspaceView extends ItemView {
  plugin: OlenPlugin;
  private timerInterval: number | null = null;
  private startTime: Date;
  private elapsed = 0; // seconds

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

    this.startTime = new Date(workspace.startTime);
    this.render(workspace);
    this.startTimer();
  }

  async onClose(): Promise<void> {
    this.stopTimer();
    this.contentEl.empty();
  }

  private startTimer(): void {
    this.timerInterval = window.setInterval(() => {
      this.elapsed = Math.floor((Date.now() - this.startTime.getTime()) / 1000);
      const timerEl = this.contentEl.querySelector(".olen-workspace-timer");
      if (timerEl) timerEl.textContent = this.formatTime(this.elapsed);
    }, 1000);
  }

  private stopTimer(): void {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  private render(workspace: ActiveWorkspace): void {
    const container = this.contentEl;
    container.empty();

    const root = container.createDiv({ cls: "olen-dashboard olen-workspace-root" });

    // Top bar
    const topBar = root.createDiv({ cls: "olen-workspace-topbar" });

    const actInfo = topBar.createDiv({ cls: "olen-workspace-act-info" });
    actInfo.createEl("span", { cls: "olen-workspace-emoji", text: workspace.emoji });
    actInfo.createEl("span", { cls: "olen-workspace-act-name", text: workspace.activityName });

    const timerEl = topBar.createEl("div", {
      cls: "olen-workspace-timer",
      text: "00:00",
    });

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
      const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
      if (activity) {
        this.plugin.settings.bossCurrentHP = Math.max(
          0,
          this.plugin.settings.bossCurrentHP - activity.damagePerCompletion
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
