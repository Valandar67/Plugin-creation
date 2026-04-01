// ============================================================
// Olen — Plugin Entry Point
// Registers views, commands, ribbon icon, settings migration
// ============================================================

import { Plugin, debounce, TFile, Notice, MarkdownView, Modal } from "obsidian";
import type { OlenSettings, TrackHabitRankData, ActivityConfig } from "./types";
import { VIEW_TYPE_OLEN, VIEW_TYPE_WORKSPACE, VIEW_TYPE_ACTIVITY_DASHBOARD, VIEW_TYPE_ONBOARDING, VIEW_TYPE_DREAMBOARD, DEFAULT_OLEN_SETTINGS, DEFAULT_ACTIVITIES, DEFAULT_CALENDAR_SETTINGS, DEFAULT_PERSONAL_STATS, DEFAULT_SUNDAY_CHECKIN } from "./constants";
import { DashboardView } from "./views/DashboardView";
import { WorkspaceView } from "./views/WorkspaceView";
import { ActivityDashboardView } from "./views/ActivityDashboardView";
import { OnboardingView } from "./views/OnboardingView";
import { DreamBoardView } from "./views/DreamBoardView";
import { OlenSettingTab } from "./settings/OlenSettings";
import { TemplateEngine } from "./templates/TemplateEngine";
import { getTracker, getTrackerBossState } from "./tracker-bridge";
import { THEME_PRESETS } from "./data/themes";
import { readObsidianAccentColor, applyAccentColor } from "./utils/accentColor";
import { playAlertSound, vibrateAlert, stopAlertSound } from "./utils/alertSound";

export default class OlenPlugin extends Plugin {
  settings!: OlenSettings;
  templateEngine!: TemplateEngine;
  obsidianAccentColor: string | null = null;
  private backgroundAlertFired = false;

  async onload(): Promise<void> {
    // Load settings with defaults
    this.settings = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS,
      await this.loadData()
    );

    // Ensure deep defaults for nested objects
    this.settings.devConfig = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS.devConfig,
      this.settings.devConfig
    );
    this.settings.devConfig.labels = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS.devConfig.labels,
      this.settings.devConfig.labels
    );
    this.settings.categoryColors = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS.categoryColors,
      this.settings.categoryColors
    );
    this.settings.categoryXP = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS.categoryXP,
      this.settings.categoryXP
    );
    this.settings.calendar = Object.assign(
      {},
      DEFAULT_CALENDAR_SETTINGS,
      this.settings.calendar
    );
    this.settings.personalStats = Object.assign(
      {},
      DEFAULT_PERSONAL_STATS,
      this.settings.personalStats
    );
    this.settings.sundayCheckin = Object.assign(
      {},
      DEFAULT_SUNDAY_CHECKIN,
      this.settings.sundayCheckin
    );
    this.settings.findingWhyProgress = Object.assign(
      {},
      {
        lastCompletedScreen: -1,
        tookConfrontationPath: false,
        completedCommands: {},
        selectedSubAreas: [],
        customSubAreas: [],
        flowComplete: false,
      },
      this.settings.findingWhyProgress
    );
    // Migrate old lifePhasesProgress → reset to new structure
    if ((this.settings as any).lifePhasesProgress) {
      delete (this.settings as any).lifePhasesProgress;
    }

    // Migrate legacy field names from session → workspace
    await this.migrateSessionToWorkspace();

    // Migrate string[] goals to Goal[] format
    await this.migrateGoalsFormat();

    // Initialize Template Engine
    this.templateEngine = new TemplateEngine(this.app, this);

    // Migrate from TrackHabitRank on first run
    if (!this.settings.migrated) {
      await this.migrateFromTrackHabitRank();
    }

    // Read Obsidian accent color
    this.obsidianAccentColor = await readObsidianAccentColor(this.app);

    // Sync state from TrackHabitRank (Mythological Habit Tracker)
    this.syncFromTracker();

    // Register main dashboard view
    this.registerView(
      VIEW_TYPE_OLEN,
      (leaf) => new DashboardView(leaf, this)
    );

    // Register workspace view
    this.registerView(
      VIEW_TYPE_WORKSPACE,
      (leaf) => new WorkspaceView(leaf, this)
    );

    // Register activity dashboard view
    this.registerView(
      VIEW_TYPE_ACTIVITY_DASHBOARD,
      (leaf) => new ActivityDashboardView(leaf, this)
    );

    // Register onboarding view
    this.registerView(
      VIEW_TYPE_ONBOARDING,
      (leaf) => new OnboardingView(leaf, this)
    );

    // Register dream board view
    this.registerView(
      VIEW_TYPE_DREAMBOARD,
      (leaf) => new DreamBoardView(leaf, this)
    );

    // Ribbon icon
    this.addRibbonIcon("compass", "Open Olen", () => {
      this.activateDashboard();
    });

    // Commands
    this.addCommand({
      id: "open-olen-dashboard",
      name: "Open Olen Dashboard",
      callback: () => this.activateDashboard(),
    });

    this.addCommand({
      id: "refresh-olen-dashboard",
      name: "Refresh Olen Dashboard",
      callback: () => this.refreshDashboard(),
    });

    this.addCommand({
      id: "add-quick-task",
      name: "Add Quick Task",
      callback: () => this.showQuickTaskDialog(),
    });

    this.addCommand({
      id: "start-olen-wizard",
      name: "Olen: Start Wizard (Reset All Settings)",
      callback: () => this.confirmAndResetWizard(),
    });

    this.addCommand({
      id: "resume-olen-wizard",
      name: "Olen: Resume Wizard",
      callback: () => this.activateOnboarding(),
    });

    // Calendar plugin integration — inject Olen metadata into Calendar plugin
    this.registerCalendarPluginSource();

    // Debounced file watcher for metadata changes
    const refresh = debounce(() => {
      this.refreshDashboard();
    }, 300);

    this.registerEvent(
      this.app.metadataCache.on("changed", () => refresh())
    );

    this.registerEvent(
      this.app.vault.on("create", async (file) => {
        if (file instanceof TFile && file.extension === "md") {
          // Wait for metadata to be indexed
          let attempts = 0;
          while (attempts < 15) {
            const cache = this.app.metadataCache.getFileCache(file);
            if (cache?.frontmatter) {
              refresh();
              return;
            }
            await sleep(100);
            attempts++;
          }
          refresh();
        }
      })
    );

    this.registerEvent(
      this.app.vault.on("rename", (file) => {
        if (file instanceof TFile && file.extension === "md") {
          refresh();
        }
      })
    );

    // Settings tab
    this.addSettingTab(new OlenSettingTab(this.app, this));

    // --- Template Registry: Frontmatter-driven rendering ---
    this.registerTemplatePostProcessor();

    // --- Embeddable Widgets ---
    this.registerWidgets();

    // Invalidate template cache when template .js files are modified
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof TFile && file.extension === "js") {
          this.templateEngine.invalidateCache(file.path);
        }
      })
    );

    // Background pomodoro timer — fires alerts even when WorkspaceView is closed
    this.startBackgroundTimer();
  }

  onunload(): void {
    // Cleanup handled by DashboardView.onClose()
  }

  // --- TrackHabitRank Sync ---

  /**
   * Read live state from the Mythological Habit Tracker plugin.
   * Syncs boss HP, tier, Tartarus, rewards, and activity data.
   */
  syncFromTracker(): void {
    const tracker = getTracker(this.app);
    if (!tracker) return;

    const s = tracker.settings;

    // Boss state — use getTrackerBossState for proper name resolution
    const bossState = getTrackerBossState(this.app);
    if (bossState) {
      this.settings.currentTier = bossState.currentTier;
      this.settings.bossMaxHP = bossState.bossMaxHP;
      this.settings.bossCurrentHP = bossState.bossCurrentHP;
      this.settings.inTartarus = bossState.inTartarus;
      this.settings.titansWrathApplied = bossState.titansWrathApplied;
      this.settings.bossName = bossState.bossName;
      this.settings.bossRank = bossState.bossRank;
    }

    // Tartarus details
    if (s.tartarusPenanceTasks !== undefined) this.settings.tartarusPenanceTasks = s.tartarusPenanceTasks;
    if (s.tartarusStartDate !== undefined) this.settings.tartarusStartDate = s.tartarusStartDate;

    // Streak data
    if (s.consecutivePerfectWeeks !== undefined) this.settings.consecutivePerfectWeeks = s.consecutivePerfectWeeks;

    // System state
    if (s.systemState !== undefined) this.settings.systemState = s.systemState;
    if (s.pauseStartTime !== undefined) this.settings.pauseStartTime = s.pauseStartTime;
    if (s.totalPausedTime !== undefined) this.settings.totalPausedTime = s.totalPausedTime;

    // Rewards
    if (s.pendingRewards !== undefined) this.settings.pendingRewards = s.pendingRewards;
    if (s.claimedRewards !== undefined) this.settings.claimedRewards = s.claimedRewards;
    if (s.bankedRewards !== undefined) this.settings.bankedRewards = s.bankedRewards;

    // Simulated date (share between plugins)
    if (s.simulatedDate !== undefined && s.simulatedDate) {
      this.settings.simulatedDate = s.simulatedDate;
    }

    // Sync activity enabled states and overrides from tracker
    if (s.enabledActivities && typeof s.enabledActivities === "object") {
      for (const activity of this.settings.activities) {
        // The tracker uses activity names as keys (e.g. "Workout": true)
        const trackerKey = activity.name;
        if (trackerKey in s.enabledActivities) {
          activity.enabled = s.enabledActivities[trackerKey] !== false;
        }
      }
    }

    // Sync damage values from activity overrides if available
    if (s.activityOverrides && typeof s.activityOverrides === "object") {
      for (const activity of this.settings.activities) {
        const override = s.activityOverrides[activity.name];
        if (override) {
          if (override.damagePerCompletion !== undefined) {
            activity.damagePerCompletion = override.damagePerCompletion;
          }
          if (override.weeklyTarget !== undefined) {
            activity.weeklyTarget = override.weeklyTarget;
          }
        }
      }
    }

    // Sync custom habits from tracker (only add truly new ones — skip
    // activities that already exist by name to prevent circular duplication
    // when Tartarus imports activities from Olen and Olen re-syncs them back)
    if (Array.isArray(s.customHabits)) {
      for (const custom of s.customHabits) {
        if (!custom.name || !custom.folder || !custom.field) continue;
        const trackerId = `tracker-${custom.name.toLowerCase().replace(/\s+/g, "-")}`;
        const existingById = this.settings.activities.find((a) => a.id === trackerId);
        const existingByName = this.settings.activities.find(
          (a) => a.name.toLowerCase() === custom.name.toLowerCase()
        );
        if (!existingById && !existingByName) {
          this.settings.activities.push({
            id: trackerId,
            name: custom.name,
            emoji: custom.emoji ?? "\u2B50",
            category: custom.category ?? "spirit",
            enabled: custom.enabled !== false,
            folder: custom.folder,
            property: custom.field,
            damagePerCompletion: custom.damagePerCompletion ?? 1,
            weeklyTarget: custom.weeklyTarget ?? 3,
            trackingMode: "daily",
            hasWorkspace: true,
            priority: 5,
            neglectThreshold: 3,
            preferredTime: "anytime",
            estimatedDuration: 30,
          });
        }
      }
    }
  }

  // --- View Management ---

  async activateDashboard(): Promise<void> {
    // Check if onboarding is needed
    if (!this.settings.onboardingComplete && !this.settings.migrated) {
      await this.activateOnboarding();
      return;
    }

    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE_OLEN)[0];

    if (!leaf) {
      const newLeaf = workspace.getLeaf("tab");
      if (!newLeaf) return;
      await newLeaf.setViewState({ type: VIEW_TYPE_OLEN, active: true });
      leaf = newLeaf;
    }

    await workspace.revealLeaf(leaf);
  }

  async activateOnboarding(): Promise<void> {
    const { workspace } = this.app;

    // Close existing onboarding views
    workspace.getLeavesOfType(VIEW_TYPE_ONBOARDING).forEach((leaf) => leaf.detach());

    const leaf = workspace.getLeaf("tab");
    if (!leaf) return;
    await leaf.setViewState({ type: VIEW_TYPE_ONBOARDING, active: true });
    await workspace.revealLeaf(leaf);
  }

  /** Show a warning modal, then reset all settings and launch the wizard from screen 0 */
  confirmAndResetWizard(): void {
    const modal = new Modal(this.app);
    modal.titleEl.setText("Reset All Settings?");

    modal.contentEl.createEl("p", {
      text: "This will delete ALL your preferences, activities, goals, stats, and theme choices. You will start the setup wizard from scratch.",
      attr: { style: "margin-bottom: 12px;" },
    });
    modal.contentEl.createEl("p", {
      text: "This action cannot be undone.",
      attr: { style: "font-weight: 600; color: var(--text-error, #e03e3e); margin-bottom: 16px;" },
    });

    const btnRow = modal.contentEl.createDiv({ attr: { style: "display: flex; gap: 8px; justify-content: flex-end;" } });

    const cancelBtn = btnRow.createEl("button", { text: "Cancel" });
    cancelBtn.addEventListener("click", () => modal.close());

    const confirmBtn = btnRow.createEl("button", {
      text: "Reset & Start Wizard",
      cls: "mod-warning",
    });
    confirmBtn.addEventListener("click", async () => {
      modal.close();
      // Reset to defaults
      Object.assign(this.settings, structuredClone(DEFAULT_OLEN_SETTINGS));
      this.settings.onboardingComplete = false;
      await this.saveSettings();
      new Notice("Settings reset. Starting wizard...");
      await this.activateOnboarding();
    });
  }

  async activateActivityDashboard(activityId: string): Promise<void> {
    const { workspace } = this.app;

    // Close existing activity dashboards
    workspace.getLeavesOfType(VIEW_TYPE_ACTIVITY_DASHBOARD).forEach((leaf) => leaf.detach());

    // Open in the same tab as the main dashboard if possible
    const dashLeaves = workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    const targetLeaf = dashLeaves[0] ?? workspace.getLeaf("tab");
    if (!targetLeaf) return;

    await targetLeaf.setViewState({ type: VIEW_TYPE_ACTIVITY_DASHBOARD, active: true });

    const view = targetLeaf.view as unknown as ActivityDashboardView;
    if (view && typeof view.setActivityId === "function") {
      view.setActivityId(activityId);
      await view.render();
    }

    await workspace.revealLeaf(targetLeaf);
  }

  refreshDashboard(): void {
    // Sync latest state from TrackHabitRank before re-rendering
    this.syncFromTracker();

    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    for (const leaf of leaves) {
      const view = leaf.view as unknown as DashboardView;
      if (view && typeof view.render === "function") {
        view.render();
      }
    }
  }

  // --- Background Pomodoro Timer ---

  private startBackgroundTimer(): void {
    const id = window.setInterval(() => this.checkBackgroundTimer(), 1000);
    this.registerInterval(id);
  }

  private checkBackgroundTimer(): void {
    const ws = this.settings.activeWorkspace;
    if (!ws?.pomodoroActive) {
      this.backgroundAlertFired = false;
      return;
    }

    // Don't fire if WorkspaceView is currently open (it handles its own alerts)
    const wsLeaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_WORKSPACE);
    if (wsLeaves.length > 0) {
      if (this.backgroundAlertFired) stopAlertSound();
      this.backgroundAlertFired = false;
      return;
    }

    const startTime = new Date(ws.startTime).getTime();
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const total = ws.pomodoroCountdownTotal ?? 0;
    const remaining = total - elapsed;

    if (remaining <= 0 && !this.backgroundAlertFired) {
      this.backgroundAlertFired = true;
      this.fireBackgroundAlert(ws);
    }
  }

  private fireBackgroundAlert(ws: NonNullable<OlenSettings["activeWorkspace"]>): void {
    const pomS = ws.pomodoroSettings;
    const resolveResource = (path: string): string => {
      const adapter = this.app.vault.adapter;
      return (adapter as any).getResourcePath ? (adapter as any).getResourcePath(path) : path;
    };
    playAlertSound(pomS, resolveResource);
    vibrateAlert(pomS);

    const totalRounds = pomS?.sessionsBeforeLong ?? 4;
    const label = ws.pomodoroOnBreak
      ? "Break"
      : `Pomodoro ${ws.pomodoroRound ?? 1}/${totalRounds}`;
    new Notice(`${ws.emoji} ${ws.activityName} \u2014 ${label} complete!`, 10000);
  }

  async activateWorkspaceView(): Promise<void> {
    const { workspace } = this.app;

    // Close existing workspace views
    workspace.getLeavesOfType(VIEW_TYPE_WORKSPACE).forEach((leaf) => leaf.detach());

    // Open workspace in the same tab as the dashboard if possible
    const dashLeaves = workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    const targetLeaf = dashLeaves[0] ?? workspace.getLeaf("tab");
    if (!targetLeaf) return;

    await targetLeaf.setViewState({ type: VIEW_TYPE_WORKSPACE, active: true });
    await workspace.revealLeaf(targetLeaf);
  }

  activateDashboardView(): void {
    this.activateDashboard();
  }

  async activateDreamBoard(): Promise<void> {
    const { workspace } = this.app;

    // Close existing dream board views
    workspace.getLeavesOfType(VIEW_TYPE_DREAMBOARD).forEach((leaf) => leaf.detach());

    // Open in the same tab as the main dashboard if possible
    const dashLeaves = workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    const targetLeaf = dashLeaves[0] ?? workspace.getLeaf("tab");
    if (!targetLeaf) return;

    await targetLeaf.setViewState({ type: VIEW_TYPE_DREAMBOARD, active: true });
    await workspace.revealLeaf(targetLeaf);
  }

  // --- Embeddable Widgets (code block processors) ---

  private registerWidgets(): void {
    // ```olen-directive``` — renders the DirectiveCard on any note
    this.registerMarkdownCodeBlockProcessor("olen-directive", async (_source, el) => {
      el.addClass("olen-widget");
      const root = el.createDiv({ cls: "olen-dashboard" });
      this.applyWidgetTheme(root);

      const { renderDirectiveCard } = await import("./components/DirectiveCard");
      const { OlenEngine } = await import("./engines/OlenEngine");

      const completionData = this.gatherCompletionDataForWidgets();
      const now = this.settings.simulatedDate ? new Date(this.settings.simulatedDate) : new Date();
      const engine = new OlenEngine(this.settings, completionData, now);

      renderDirectiveCard(
        root, this.settings, engine, 0,
        () => this.activateDashboard(), // onEnterWorkspace
        () => {},                        // onTempleComplete
        () => {}                         // onLogWeight
      );
    });

    // ```olen-day``` — renders the DayTimeline on any note
    this.registerMarkdownCodeBlockProcessor("olen-day", async (_source, el) => {
      el.addClass("olen-widget");
      const root = el.createDiv({ cls: "olen-dashboard" });
      this.applyWidgetTheme(root);

      const { renderDayTimeline } = await import("./components/DayTimeline");
      const { OlenEngine } = await import("./engines/OlenEngine");

      const completionData = this.gatherCompletionDataForWidgets();
      const now = this.settings.simulatedDate ? new Date(this.settings.simulatedDate) : new Date();
      const engine = new OlenEngine(this.settings, completionData, now);

      renderDayTimeline(root, this.settings, engine, 0, {
        onAccept: () => this.activateDashboard(),
        onSkip: () => this.activateDashboard(),
      });
    });

    // ```olen-stats``` — renders the stat cards (Objectives, Streak, Consistency)
    this.registerMarkdownCodeBlockProcessor("olen-stats", async (_source, el) => {
      el.addClass("olen-widget");
      const root = el.createDiv({ cls: "olen-dashboard" });
      this.applyWidgetTheme(root);

      const { renderEudaimoniaBar } = await import("./components/EudaimoniaBar");
      const { OlenEngine } = await import("./engines/OlenEngine");

      const completionData = this.gatherCompletionDataForWidgets();
      const now = this.settings.simulatedDate ? new Date(this.settings.simulatedDate) : new Date();
      const engine = new OlenEngine(this.settings, completionData, now);

      renderEudaimoniaBar(root, this.settings, engine, 0);
    });

    // ```open-olen``` — renders a button that opens the Olen dashboard
    this.registerMarkdownCodeBlockProcessor("open-olen", async (source, el) => {
      el.addClass("olen-widget olen-widget-open-btn");

      const root = el.createDiv({ cls: "olen-dashboard" });
      this.applyWidgetTheme(root);

      const btn = root.createEl("button", {
        cls: "olen-btn-primary",
        text: source.trim() || "Open Olen",
      });
      btn.style.width = "100%";
      btn.addEventListener("click", () => {
        this.activateDashboard();
      });
    });
  }

  private applyWidgetTheme(root: HTMLElement): void {
    const mode = this.settings.themeMode ?? "dark";
    const preset = THEME_PRESETS[mode];
    const overrides = this.settings.themeOverrides ?? {};
    const theme = { ...preset, ...overrides };

    const cssMap: Record<string, string> = {
      bgPrimary: "--bg-primary",
      bgSecondary: "--bg-secondary",
      cardBg: "--card-bg",
      cardBgSolid: "--card-bg-solid",
      cardBorder: "--card-border",
      textPrimary: "--text-primary",
      textSecondary: "--text-secondary",
      textMuted: "--text-muted",
      textDim: "--text-dim",
      accentGold: "--accent-gold",
      accentGoldBright: "--accent-gold-bright",
      shadowCard: "--shadow-card",
    };

    for (const [key, cssVar] of Object.entries(cssMap)) {
      const val = (theme as any)[key];
      if (val) root.style.setProperty(cssVar, val);
    }

    // Override with Obsidian accent color
    if (this.obsidianAccentColor) {
      applyAccentColor(root, this.obsidianAccentColor);
    }
  }

  /**
   * Lightweight version of gatherCompletionData for widgets.
   * Reads completion data from vault folders.
   */
  private gatherCompletionDataForWidgets(): Record<string, Array<{ date: string; completed: boolean }>> {
    const data: Record<string, Array<{ date: string; completed: boolean }>> = {};

    for (const activity of this.settings.activities) {
      if (!activity.enabled || !activity.folder) continue;

      const folder = this.app.vault.getAbstractFileByPath(activity.folder);
      if (!folder) continue;

      const completions: Array<{ date: string; completed: boolean }> = [];

      // Get all files in the activity folder
      const files = this.app.vault.getFiles().filter((f) =>
        f.path.startsWith(activity.folder + "/") && f.extension === "md"
      );

      for (const file of files) {
        const cache = this.app.metadataCache.getFileCache(file);
        const fm = cache?.frontmatter;
        if (!fm) continue;

        const dateStr = fm.date as string | undefined;
        const completed = fm[activity.property] as boolean | undefined;
        if (dateStr) {
          completions.push({ date: dateStr, completed: completed === true });
        }
      }

      data[activity.id] = completions;
    }

    return data;
  }

  // --- Template Registry: Post-Processor ---

  private registerTemplatePostProcessor(): void {
    // Track which files we've already rendered templates for in the current
    // view cycle, to avoid duplicate rendering across multiple sections.
    const renderedFiles = new WeakSet<HTMLElement>();

    this.registerMarkdownPostProcessor(async (el, ctx) => {
      // Find the file being rendered
      const file = this.app.vault.getAbstractFileByPath(ctx.sourcePath);
      if (!file || !(file instanceof TFile)) return;

      // Check frontmatter for an "activity" field
      const cache = this.app.metadataCache.getFileCache(file);
      const activityType = cache?.frontmatter?.activity as string | undefined;
      if (!activityType) return;

      // Look up template in the registry
      const entry = this.templateEngine.findTemplate(activityType);
      if (!entry) return;

      // Avoid duplicate rendering: check the parent preview container
      const previewSizer = el.closest(".markdown-preview-sizer") ?? el.parentElement;
      if (previewSizer && renderedFiles.has(previewSizer as HTMLElement)) return;
      if (previewSizer) renderedFiles.add(previewSizer as HTMLElement);

      // Clear default rendered content and inject template
      el.empty();
      el.addClass("olen-template-host");

      const container = el.createDiv({ cls: "olen-template-root" });

      await this.templateEngine.render(entry.templateId, file, container);
    });

    // Also handle file-open for notes with only frontmatter (no body sections)
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", async (leaf) => {
        if (!leaf) return;
        const view = leaf.view;
        if (!(view instanceof MarkdownView)) return;

        const file = view.file;
        if (!file) return;

        // Small delay to let metadata cache populate
        await sleep(100);

        const cache = this.app.metadataCache.getFileCache(file);
        const activityType = cache?.frontmatter?.activity as string | undefined;
        if (!activityType) return;

        const entry = this.templateEngine.findTemplate(activityType);
        if (!entry) return;

        // Check if a template has already been rendered by the post-processor
        const contentEl = view.containerEl.querySelector(".markdown-reading-view .markdown-preview-sizer");
        if (contentEl?.querySelector(".olen-template-root")) return;

        // If in reading mode but no template was injected (empty body note),
        // inject into the preview content
        if (contentEl) {
          const container = document.createElement("div");
          container.className = "olen-template-root";
          contentEl.appendChild(container);

          await this.templateEngine.render(entry.templateId, file, container);
        }
      })
    );
  }

  // --- Calendar Plugin Integration ---

  private registerCalendarPluginSource(): void {
    // Listen for the Calendar plugin's "calendar:open" event
    // and inject Olen's activity completion data as colored dots
    (this.app.workspace as any).on("calendar:open", (sources: any[]) => {
      if (!Array.isArray(sources)) return;

      sources.push({
        getDailyMetadata: (date: any) => {
          const dateStr = date.format?.("YYYY-MM-DD") ?? "";
          if (!dateStr) return {};

          // Count completions for this date
          let completions = 0;
          const categories = new Set<string>();
          for (const activity of this.settings.activities) {
            if (!activity.enabled) continue;
            const folder = activity.folder;
            const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";
            const files = this.app.vault.getMarkdownFiles();
            const file = files.find(
              (f) => (f.path === folder || f.path.startsWith(normalizedFolder)) && f.basename === dateStr
            );
            if (file) {
              const cache = this.app.metadataCache.getFileCache(file);
              if (cache?.frontmatter?.[activity.property] === true) {
                completions++;
                categories.add(activity.category);
              }
            }
          }

          if (completions === 0) return {};

          // Return dots colored by dominant category
          const dots = [];
          for (const cat of categories) {
            dots.push({
              color: this.settings.categoryColors[cat as keyof typeof this.settings.categoryColors] ?? "#928d85",
              className: `olen-cal-dot-${cat}`,
            });
          }

          return {
            dots,
            classes: completions >= this.settings.activities.filter((a) => a.enabled).length
              ? "olen-cal-complete"
              : "",
          };
        },

        getWeeklyMetadata: () => ({}),
      });
    });
  }

  // --- Quick Task Dialog ---

  private showQuickTaskDialog(): void {
    const modal = document.createElement("div");
    modal.className = "olen-quick-task-modal";
    modal.innerHTML = `
      <div class="olen-quick-task-backdrop"></div>
      <div class="olen-quick-task-sheet">
        <div class="olen-quick-task-title">Add Quick Task</div>
        <input type="text" class="olen-quick-task-input" placeholder="Task name" autofocus />
        <div class="olen-quick-task-row">
          <input type="time" class="olen-quick-task-time" />
          <input type="number" class="olen-quick-task-duration" placeholder="Duration (min)" min="5" max="480" value="30" />
        </div>
        <div class="olen-quick-task-actions">
          <button class="olen-quick-task-cancel">Cancel</button>
          <button class="olen-quick-task-add">Add</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const backdrop = modal.querySelector(".olen-quick-task-backdrop") as HTMLElement;
    const cancelBtn = modal.querySelector(".olen-quick-task-cancel") as HTMLElement;
    const addBtn = modal.querySelector(".olen-quick-task-add") as HTMLElement;
    const titleInput = modal.querySelector(".olen-quick-task-input") as HTMLInputElement;
    const timeInput = modal.querySelector(".olen-quick-task-time") as HTMLInputElement;
    const durationInput = modal.querySelector(".olen-quick-task-duration") as HTMLInputElement;

    const close = () => modal.remove();

    backdrop.addEventListener("click", close);
    cancelBtn.addEventListener("click", close);

    addBtn.addEventListener("click", async () => {
      const title = titleInput.value.trim();
      if (!title) {
        new Notice("Please enter a task name");
        return;
      }

      const now = this.settings.simulatedDate
        ? new Date(this.settings.simulatedDate)
        : new Date();
      const today = now.toISOString().slice(0, 10);

      this.settings.calendar.quickTasks.push({
        id: `qt-${Date.now()}`,
        title,
        date: today,
        time: timeInput.value || undefined,
        duration: parseInt(durationInput.value) || 30,
        done: false,
      });

      await this.saveSettings();
      this.refreshDashboard();
      new Notice(`\u26A1 Quick task added: ${title}`);
      close();
    });

    // Focus the input
    setTimeout(() => titleInput.focus(), 50);
  }

  // --- Settings Persistence ---

  async saveSettings(): Promise<void> {
    await this.saveData(this.settings);
  }

  // --- Migration ---

  private async migrateFromTrackHabitRank(): Promise<void> {
    try {
      const dataPath = ".obsidian/plugins/mythological-habit-tracker/data.json";
      const exists = await this.app.vault.adapter.exists(dataPath);

      if (!exists) {
        this.settings.migrated = true;
        await this.saveSettings();
        return;
      }

      const raw = await this.app.vault.adapter.read(dataPath);
      const data: TrackHabitRankData = JSON.parse(raw);

      // Migrate boss state
      this.settings.currentTier = data.currentTier ?? 1;
      this.settings.bossMaxHP = data.bossMaxHP ?? 35;
      this.settings.bossCurrentHP = data.bossCurrentHP ?? 35;
      this.settings.consecutivePerfectWeeks = data.consecutivePerfectWeeks ?? 0;
      this.settings.inTartarus = data.inTartarus ?? false;
      this.settings.tartarusPenanceTasks = data.tartarusPenanceTasks ?? [];
      this.settings.tartarusStartDate = data.tartarusStartDate ?? null;
      this.settings.failedThresholdDays = data.failedThresholdDays ?? 0;

      // Migrate temple tasks
      if (data.templeTasks && data.templeTasks.length > 0) {
        this.settings.templeTasks = data.templeTasks;
      }

      // Migrate rewards
      this.settings.pendingRewards = data.pendingRewards ?? [];
      this.settings.claimedRewards = (data.claimedRewards ?? []) as any;
      this.settings.bankedRewards = data.bankedRewards ?? [];

      // Migrate system state
      this.settings.systemState = (data.systemState as "active" | "paused") ?? "active";
      this.settings.pauseStartTime = data.pauseStartTime ?? null;
      this.settings.totalPausedTime = data.totalPausedTime ?? 0;
      this.settings.simulatedDate = data.simulatedDate ?? null;

      // Migrate activities from enabledActivities + customHabits
      this.settings.activities = this.migrateActivities(data);

      this.settings.migrated = true;
      await this.saveSettings();

      new Notice("Olen: Successfully migrated data from Mythological Habit Tracker");
    } catch (err) {
      console.error("Olen migration error:", err);
      this.settings.migrated = true;
      await this.saveSettings();
    }
  }

  private migrateActivities(data: TrackHabitRankData): ActivityConfig[] {
    const result: ActivityConfig[] = [...DEFAULT_ACTIVITIES];

    // Apply enabled/disabled state
    if (data.enabledActivities) {
      for (const activity of result) {
        const key = activity.property.toLowerCase();
        if (key in data.enabledActivities) {
          activity.enabled = data.enabledActivities[key] ?? true;
        }
      }
    }

    // Apply overrides
    if (data.activityOverrides) {
      for (const override of data.activityOverrides) {
        const activity = result.find((a) => a.id === override.id);
        if (activity) {
          if (override.weeklyTarget !== undefined) activity.weeklyTarget = override.weeklyTarget;
          if (override.damagePerCompletion !== undefined) activity.damagePerCompletion = override.damagePerCompletion;
        }
      }
    }

    // Add custom habits
    if (data.customHabits) {
      for (const habit of data.customHabits) {
        // Avoid duplicates
        if (result.some((a) => a.id === habit.id)) continue;

        result.push({
          id: habit.id,
          name: habit.name,
          emoji: habit.emoji ?? "\u2B50",
          category: "spirit", // Default custom habits to spirit
          enabled: true,
          folder: habit.folder,
          property: habit.property,
          damagePerCompletion: habit.damagePerCompletion ?? 1,
          weeklyTarget: habit.weeklyTarget ?? 3,
          trackingMode: "daily",
          hasWorkspace: false,
          priority: 5,
          neglectThreshold: 3,
          preferredTime: "anytime",
          estimatedDuration: 30,
        });
      }
    }

    return result;
  }

  /**
   * One-time migration: rename legacy session fields → workspace,
   * merge workspaceFolder into folder, and move templateRegistry entries
   * into per-activity workspaceTemplate.
   */
  private async migrateSessionToWorkspace(): Promise<void> {
    const raw = this.settings as any;
    let changed = false;

    // Migrate top-level settings fields
    if (raw.sessionCompletionStates && !raw.workspaceCompletionStates) {
      raw.workspaceCompletionStates = raw.sessionCompletionStates;
      delete raw.sessionCompletionStates;
      changed = true;
    }
    if (raw.activeSession !== undefined && raw.activeWorkspace === undefined) {
      raw.activeWorkspace = raw.activeSession;
      delete raw.activeSession;
      changed = true;
    }

    // Migrate per-activity fields
    for (const activity of this.settings.activities) {
      const a = activity as any;
      if (a.hasSession !== undefined && a.hasWorkspace === undefined) {
        a.hasWorkspace = a.hasSession;
        delete a.hasSession;
        changed = true;
      }
      // Merge sessionFolder / workspaceFolder into folder
      if (a.sessionFolder !== undefined) {
        if (!a.folder) a.folder = a.sessionFolder;
        delete a.sessionFolder;
        changed = true;
      }
      if (a.workspaceFolder !== undefined) {
        if (!a.folder) a.folder = a.workspaceFolder;
        delete a.workspaceFolder;
        changed = true;
      }
    }

    // Migrate activeWorkspace inner fields
    if (this.settings.activeWorkspace) {
      const aw = this.settings.activeWorkspace as any;
      if (aw.hasSession !== undefined && aw.hasWorkspace === undefined) {
        aw.hasWorkspace = aw.hasSession;
        delete aw.hasSession;
        changed = true;
      }
      // Clean up legacy folder fields from activeWorkspace
      delete aw.sessionFolder;
      delete aw.workspaceFolder;
    }

    // Migrate templateRegistry → per-activity workspaceTemplate
    if (raw.templateRegistry && Array.isArray(raw.templateRegistry) && raw.templateRegistry.length > 0) {
      for (const entry of raw.templateRegistry) {
        if (!entry.enabled || !entry.templatePath) continue;
        const activity = this.settings.activities.find((a: any) => a.id === entry.activityType);
        if (activity && !activity.workspaceTemplate) {
          activity.workspaceTemplate = entry.templatePath;
          changed = true;
        }
      }
      delete raw.templateRegistry;
      changed = true;
    }

    if (changed) {
      await this.saveSettings();
    }
  }

  /**
   * Migrate goals from old string[] format to new Goal[] format.
   */
  private async migrateGoalsFormat(): Promise<void> {
    const raw = this.settings as any;
    if (!Array.isArray(raw.goals) || raw.goals.length === 0) {
      if (!raw.completedGoals) {
        raw.completedGoals = [];
        await this.saveSettings();
      }
      return;
    }

    // Check if first element is a string (old format)
    if (typeof raw.goals[0] === "string") {
      raw.goals = (raw.goals as string[]).map((text: string, i: number) => ({
        id: `goal-migrated-${Date.now()}-${i}`,
        text,
        type: "title",
        category: "personal-growth",
        completed: false,
        subgoals: [],
      }));
      if (!raw.completedGoals) raw.completedGoals = [];
      await this.saveSettings();
    }

    // Ensure completedGoals exists
    if (!raw.completedGoals) {
      raw.completedGoals = [];
      await this.saveSettings();
    }
  }
}

// Utility
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
