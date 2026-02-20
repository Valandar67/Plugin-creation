// ============================================================
// Olen — Plugin Entry Point
// Registers views, commands, ribbon icon, settings migration
// ============================================================

import { Plugin, debounce, TFile, Notice } from "obsidian";
import type { OlenSettings, TrackHabitRankData, ActivityConfig } from "./types";
import { VIEW_TYPE_OLEN, VIEW_TYPE_SESSION, DEFAULT_OLEN_SETTINGS, DEFAULT_ACTIVITIES, DEFAULT_CALENDAR_SETTINGS } from "./constants";
import { DashboardView } from "./views/DashboardView";
import { SessionView } from "./views/SessionView";
import { EmbeddedMdView, VIEW_TYPE_EMBEDDED } from "./views/EmbeddedMdView";
import type { EmbeddedViewState } from "./views/EmbeddedMdView";
import { OlenSettingTab } from "./settings/OlenSettings";

export default class OlenPlugin extends Plugin {
  settings!: OlenSettings;

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

    // Migrate from TrackHabitRank on first run
    if (!this.settings.migrated) {
      await this.migrateFromTrackHabitRank();
    }

    // Register main dashboard view
    this.registerView(
      VIEW_TYPE_OLEN,
      (leaf) => new DashboardView(leaf, this)
    );

    // Register session view
    this.registerView(
      VIEW_TYPE_SESSION,
      (leaf) => new SessionView(leaf, this)
    );

    // Register embedded markdown view
    this.registerView(
      VIEW_TYPE_EMBEDDED,
      (leaf) => new EmbeddedMdView(leaf, this)
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
  }

  onunload(): void {
    // Cleanup handled by DashboardView.onClose()
  }

  // --- View Management ---

  async activateDashboard(): Promise<void> {
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

  refreshDashboard(): void {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    for (const leaf of leaves) {
      const view = leaf.view as unknown as DashboardView;
      if (view && typeof view.render === "function") {
        view.render();
      }
    }
  }

  async activateSessionView(): Promise<void> {
    const { workspace } = this.app;

    // Close existing session views
    workspace.getLeavesOfType(VIEW_TYPE_SESSION).forEach((leaf) => leaf.detach());

    // Open session in the same tab as the dashboard if possible
    const dashLeaves = workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    const targetLeaf = dashLeaves[0] ?? workspace.getLeaf("tab");
    if (!targetLeaf) return;

    await targetLeaf.setViewState({ type: VIEW_TYPE_SESSION, active: true });
    await workspace.revealLeaf(targetLeaf);
  }

  activateDashboardView(): void {
    this.activateDashboard();
  }

  async activateEmbeddedView(state: EmbeddedViewState): Promise<void> {
    const { workspace } = this.app;

    // Close existing embedded views
    workspace.getLeavesOfType(VIEW_TYPE_EMBEDDED).forEach((leaf) => leaf.detach());

    // Open in the dashboard's tab
    const dashLeaves = workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    const targetLeaf = dashLeaves[0] ?? workspace.getLeaf("tab");
    if (!targetLeaf) return;

    await targetLeaf.setViewState({ type: VIEW_TYPE_EMBEDDED, active: true });

    // Set the state on the view instance
    const view = targetLeaf.view as unknown as EmbeddedMdView;
    if (view && typeof view.setEmbeddedState === "function") {
      view.setEmbeddedState(state);
      await view.render();
    }

    await workspace.revealLeaf(targetLeaf);
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

      // Migrate hero background
      if (data.dashboardBgImage) {
        this.settings.heroBackground = data.dashboardBgImage;
      }

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
          hasSession: false,
          priority: 5,
          neglectThreshold: 3,
          preferredTime: "anytime",
          estimatedDuration: 30,
          dashboardSource: "builtin",
          workspaceSource: "builtin",
        });
      }
    }

    return result;
  }
}

// Utility
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
