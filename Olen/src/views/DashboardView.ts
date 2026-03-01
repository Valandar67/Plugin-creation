// ============================================================
// Olen — Dashboard View
// Main scrollable ItemView rendering all dashboard sections
// ============================================================

import { ItemView, WorkspaceLeaf, TFile, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { CompletionMap, Completion, CalendarTask } from "../types";
import { VIEW_TYPE_OLEN } from "../constants";
import { OlenEngine } from "../engines/OlenEngine";
import { CalendarEngine } from "../engines/CalendarEngine";
import { renderHeroCard } from "../components/HeroCard";
import { renderEudaimoniaBar } from "../components/EudaimoniaBar";
import { renderDirectiveCard } from "../components/DirectiveCard";
import { renderBossStatusCard } from "../components/BossStatusCard";
import { renderWeeklyRhythm } from "../components/WeeklyRhythm";
import { renderActivityGrid } from "../components/ActivityGrid";
import { renderTempleChips } from "../components/TempleChips";
import { renderQuoteFooter } from "../components/QuoteFooter";
import { renderDayTimeline } from "../components/DayTimeline";
import { renderStrengthHeatmap, showMuscleProgressPopup, showOverallProgressPopup, showMuscleSelector } from "../components/StrengthHeatmap";
import { renderWeightNotification } from "../components/WeightProgress";
import type { MuscleGroupId } from "../constants";

export class DashboardView extends ItemView {
  plugin: OlenPlugin;
  private intervals: number[];

  constructor(leaf: WorkspaceLeaf, plugin: OlenPlugin) {
    super(leaf);
    this.plugin = plugin;
    this.intervals = [];
  }

  getViewType(): string {
    return VIEW_TYPE_OLEN;
  }

  getDisplayText(): string {
    return "Olen";
  }

  getIcon(): string {
    return "compass";
  }

  async onOpen(): Promise<void> {
    this.intervals = [];
    await this.render();
  }

  async onClose(): Promise<void> {
    this.cleanup();
    this.contentEl.empty();
  }

  cleanup(): void {
    for (const id of this.intervals) {
      clearInterval(id);
    }
    this.intervals = [];
  }

  async render(): Promise<void> {
    this.cleanup();
    const container = this.contentEl;
    container.empty();

    const settings = this.plugin.settings;
    const root = container.createDiv({ cls: "olen-dashboard" });

    // Apply theme overrides
    this.applyThemeOverrides(root);

    // Gather completion data from vault
    const completionData = this.gatherCompletionData();

    // Initialize engines
    const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
    const engine = new OlenEngine(settings, completionData, now);

    // Calendar integration — gather calendar tasks and feed into engine
    const calendarEngine = new CalendarEngine(this.app, settings, now);
    const calendarTasks = await this.gatherCalendarTasks(calendarEngine);
    const calendarEntries = calendarEngine.toDayMapEntries(calendarTasks);
    engine.setCalendarEntries(calendarEntries);

    // Build section order from devConfig
    const sectionOrder = settings.devConfig.sectionOrder;
    const hidden = new Set(settings.devConfig.hiddenSections);

    let staggerIdx = 0;

    for (const section of sectionOrder) {
      if (hidden.has(section)) continue;

      switch (section) {
        case "hero":
          renderHeroCard(root, settings, engine, staggerIdx++);
          break;

        case "heatmap":
          renderStrengthHeatmap(root, settings, engine, completionData, staggerIdx++, {
            onMuscleClick: (muscleId: MuscleGroupId) => {
              showMuscleProgressPopup(muscleId, settings, completionData);
            },
            onProgressClick: () => {
              showOverallProgressPopup(settings, completionData);
            },
            onStartWorkout: () => {
              showMuscleSelector((selected) => {
                // Start workout with selected muscles — enter workout workspace
                this.handleEnterWorkspace("workout");
              });
            },
          }, this.app);
          // Weight notification (shows only when due)
          renderWeightNotification(root, settings, staggerIdx, () => {
            this.handleLogWeight();
          });
          break;

        case "eudaimonia":
          renderEudaimoniaBar(root, settings, engine, staggerIdx);
          staggerIdx += 3; // eudaimonia card + stat cards + categories card
          break;

        case "daymap":
          renderDayTimeline(root, settings, engine, staggerIdx++, {
            onAccept: (activityId) => this.handleEnterWorkspace(activityId),
            onSkip: (activityId) => this.handleSkipActivity(activityId, engine),
            onCalendarDone: (entry) => this.handleCalendarTaskDone(entry),
            onCalendarPostpone: (entry) => this.handleCalendarTaskPostpone(entry),
            onCreateEvent: () => (this.plugin as any).showQuickTaskDialog(),
          });
          break;

        case "directive":
          renderDirectiveCard(root, settings, engine, staggerIdx++, (activityId) => {
            this.handleEnterWorkspace(activityId);
          });
          break;

        case "boss":
          renderBossStatusCard(root, settings, staggerIdx++);
          break;

        case "weekly":
          renderWeeklyRhythm(root, settings, engine, staggerIdx++);
          break;

        case "activities":
          renderActivityGrid(root, settings, engine, staggerIdx++);
          break;

        case "temple":
          renderTempleChips(root, settings, staggerIdx++, (taskId) => {
            this.handleTempleUpdate(taskId);
          });
          break;

        case "quote":
          renderQuoteFooter(root, this.app, settings, staggerIdx++, (partial) => {
            Object.assign(this.plugin.settings, partial);
            this.plugin.saveSettings();
          });
          break;
      }
    }
  }

  // --- Data Gathering ---

  gatherCompletionData(): CompletionMap {
    const data: CompletionMap = {};

    for (const activity of this.plugin.settings.activities) {
      if (!activity.enabled) continue;
      data[activity.id] = this.getCompletionsFromFolder(activity.folder, activity.property);
    }

    return data;
  }

  private getCompletionsFromFolder(folderPath: string, fieldName: string): Completion[] {
    const files = this.app.vault.getMarkdownFiles();
    const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";

    return files
      .filter((file) => file.path === folderPath || file.path.startsWith(normalizedFolder))
      .map((file) => {
        const cache = this.app.metadataCache.getFileCache(file);
        const frontmatter = cache?.frontmatter;
        if (!frontmatter || typeof frontmatter[fieldName] !== "boolean") {
          return null;
        }
        return {
          date: file.basename,
          completed: frontmatter[fieldName] === true,
        };
      })
      .filter((c): c is Completion => c !== null);
  }

  // --- Calendar Gathering ---

  private async gatherCalendarTasks(calendarEngine: CalendarEngine): Promise<CalendarTask[]> {
    const tasks: CalendarTask[] = [];
    const settings = this.plugin.settings;

    // Option A: Daily Notes — read today's note content
    if (settings.calendar.enableDailyNotes && settings.calendar.dailyNotesFolder) {
      const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
      const today = now.toISOString().slice(0, 10);
      const folder = settings.calendar.dailyNotesFolder;
      const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";

      const files = this.app.vault.getMarkdownFiles();
      const dailyNote = files.find((f) => {
        if (!f.path.startsWith(normalizedFolder) && f.path !== folder) return false;
        return f.basename === today;
      });

      if (dailyNote) {
        const content = await this.app.vault.read(dailyNote);
        tasks.push(...calendarEngine.getDailyNoteTasksFromContent(content, dailyNote.path));
      }
    }

    // Option B: Tasks Plugin — scan for tasks with today's due date
    if (settings.calendar.enableTasksPlugin) {
      const tasksPlugin = (this.app as any).plugins?.plugins?.["obsidian-tasks-plugin"];
      if (tasksPlugin) {
        const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
        const today = now.toISOString().slice(0, 10);
        const filesWithTasks: { path: string; content: string }[] = [];

        for (const file of this.app.vault.getMarkdownFiles()) {
          const cache = this.app.metadataCache.getFileCache(file);
          if (!cache?.listItems?.some((li) => li.task !== undefined)) continue;

          const content = await this.app.vault.read(file);
          // Quick check: does the content mention today's date with a due emoji?
          if (content.includes(today)) {
            filesWithTasks.push({ path: file.path, content });
          }
        }

        tasks.push(...calendarEngine.getTasksPluginTasksFromFiles(filesWithTasks));
      }
    }

    // Option C: Quick Tasks — already handled by CalendarEngine.getAllTasks()
    if (settings.calendar.enableQuickTasks) {
      const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
      const today = now.toISOString().slice(0, 10);
      tasks.push(
        ...settings.calendar.quickTasks
          .filter((qt) => qt.date === today)
          .map((qt) => ({
            id: `qt-${qt.id}`,
            title: qt.title,
            source: "quick-task" as const,
            date: qt.date,
            time: qt.time,
            duration: qt.duration,
            done: qt.done,
          }))
      );
    }

    return tasks;
  }

  // --- Handlers ---

  private async handleEnterWorkspace(activityId: string): Promise<void> {
    const activity = this.plugin.settings.activities.find((a) => a.id === activityId);
    if (!activity) return;

    if (activity.hasWorkspace) {
      // Open native Olen WorkspaceView
      this.plugin.settings.activeWorkspace = {
        activityId: activity.id,
        activityName: activity.name,
        emoji: activity.emoji,
        category: activity.category,
        startTime: new Date().toISOString(),
        skills: [],
        hasWorkspace: true,
        skillFolder: activity.skillFolder,
      };
      await this.plugin.saveSettings();
      this.plugin.activateWorkspaceView();
    } else {
      // Non-workspace activities: mark done immediately
      await this.markActivityDone(activity);
      new Notice(`${activity.emoji} ${activity.name} marked done!`);
      await this.render();
    }
  }

  private async handleSkipActivity(activityId: string, engine: OlenEngine): Promise<void> {
    // Mark as skipped in the day map (engine state)
    const dayMap = engine.getDayMap();
    const entry = dayMap.find((e) => e.activityId === activityId);
    if (entry) {
      entry.status = "skipped";
    }
    new Notice("Skipped");
    await this.render();
  }

  private async handleCalendarTaskDone(entry: import("../types").DayMapEntry): Promise<void> {
    if (!entry.isCalendarTask || !entry.calendarSource) return;

    const calendarEngine = new CalendarEngine(
      this.app,
      this.plugin.settings,
      this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : new Date()
    );

    switch (entry.calendarSource) {
      case "daily-note":
        if (entry.filePath !== undefined && entry.lineNumber !== undefined) {
          await calendarEngine.toggleDailyNoteTask(entry.filePath, entry.lineNumber, true);
        }
        break;

      case "tasks-plugin":
        if (entry.filePath !== undefined && entry.lineNumber !== undefined) {
          await calendarEngine.toggleTasksPluginTask(entry.filePath, entry.lineNumber, true);
        }
        break;

      case "quick-task": {
        const qtId = entry.calendarTaskId?.replace("qt-", "");
        const qt = this.plugin.settings.calendar.quickTasks.find((q) => q.id === qtId);
        if (qt) {
          qt.done = true;
          await this.plugin.saveSettings();
        }
        break;
      }
    }

    new Notice(`\u2713 ${entry.activityName}`);
    await this.render();
  }

  private async handleCalendarTaskPostpone(entry: import("../types").DayMapEntry): Promise<void> {
    if (!entry.isCalendarTask || !entry.calendarSource) return;

    const calendarEngine = new CalendarEngine(
      this.app,
      this.plugin.settings,
      this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : new Date()
    );

    const now = this.plugin.settings.simulatedDate
      ? new Date(this.plugin.settings.simulatedDate)
      : new Date();

    const task: import("../types").CalendarTask = {
      id: entry.calendarTaskId ?? entry.activityId,
      title: entry.activityName,
      source: entry.calendarSource,
      date: now.toISOString().slice(0, 10),
      done: false,
      filePath: entry.filePath,
      lineNumber: entry.lineNumber,
    };

    await calendarEngine.postponeTask(task);
    new Notice(`\u23E9 ${entry.activityName} postponed to tomorrow`);
    await this.render();
  }

  private async markActivityDone(activity: { id: string; folder: string; property: string; category: import("../types").Category; damagePerCompletion: number }): Promise<void> {
    const now = this.plugin.settings.simulatedDate
      ? new Date(this.plugin.settings.simulatedDate)
      : new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const folder = activity.folder;
    const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";

    // Look for today's file
    const files = this.app.vault.getMarkdownFiles();
    const todayFile = files.find(
      (f) => (f.path === folder || f.path.startsWith(normalizedFolder)) && f.basename === dateStr
    );

    if (todayFile) {
      await this.app.fileManager.processFrontMatter(todayFile, (fm) => {
        fm[activity.property] = true;
      });
    } else {
      const filePath = `${normalizedFolder}${dateStr}.md`;
      try {
        await this.app.vault.create(filePath, `---\n${activity.property}: true\n---\n`);
      } catch {
        // May already exist
      }
    }

    // XP + boss damage
    const xp = this.plugin.settings.devConfig.xpPerCompletion;
    this.plugin.settings.categoryXP[activity.category] += xp;
    this.plugin.settings.bossCurrentHP = Math.max(
      0,
      this.plugin.settings.bossCurrentHP - activity.damagePerCompletion
    );
    await this.plugin.saveSettings();
  }

  private async handleLogWeight(): Promise<void> {
    const modal = document.createElement("div");
    modal.className = "olen-quick-task-modal";
    modal.innerHTML = `
      <div class="olen-quick-task-backdrop"></div>
      <div class="olen-quick-task-sheet">
        <div class="olen-quick-task-title">Log Weight</div>
        <input type="number" class="olen-quick-task-input" placeholder="Weight (kg)" step="0.1" min="20" max="300" />
        <div class="olen-quick-task-actions">
          <button class="olen-quick-task-cancel">Cancel</button>
          <button class="olen-quick-task-add">Save</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const backdrop = modal.querySelector(".olen-quick-task-backdrop") as HTMLElement;
    const cancelBtn = modal.querySelector(".olen-quick-task-cancel") as HTMLElement;
    const addBtn = modal.querySelector(".olen-quick-task-add") as HTMLElement;
    const input = modal.querySelector(".olen-quick-task-input") as HTMLInputElement;

    input.value = String(this.plugin.settings.personalStats.currentWeight || "");
    const close = () => modal.remove();

    backdrop.addEventListener("click", close);
    cancelBtn.addEventListener("click", close);

    addBtn.addEventListener("click", async () => {
      const w = parseFloat(input.value);
      if (isNaN(w) || w <= 0) {
        new Notice("Enter a valid weight");
        return;
      }

      const today = new Date().toISOString().slice(0, 10);
      const existing = this.plugin.settings.personalStats.weightLog.find((e) => e.date === today);
      if (existing) {
        existing.weight = w;
      } else {
        this.plugin.settings.personalStats.weightLog.push({ date: today, weight: w });
      }
      this.plugin.settings.personalStats.currentWeight = w;
      this.plugin.settings.personalStats.lastWeightLogDate = today;
      await this.plugin.saveSettings();
      new Notice(`Weight logged: ${w} kg`);
      close();
      await this.render();
    });

    setTimeout(() => input.focus(), 50);
  }

  private async handleTempleUpdate(taskId: string): Promise<void> {
    const task = this.plugin.settings.templeTasks.find((t) => t.id === taskId);
    if (!task) return;

    task.lastCompleted = new Date().toISOString();
    await this.plugin.saveSettings();
    new Notice(`${task.emoji} ${task.name} completed!`);

    // Re-render
    await this.render();
  }

  // --- Theme ---

  private applyThemeOverrides(root: HTMLElement): void {
    const overrides = this.plugin.settings.themeOverrides;
    if (!overrides) return;

    if (overrides.bgPrimary) root.style.setProperty("--bg-primary", overrides.bgPrimary);
    if (overrides.cardBg) root.style.setProperty("--card-bg", overrides.cardBg);
    if (overrides.textPrimary) root.style.setProperty("--text-primary", overrides.textPrimary);
    if (overrides.textMuted) root.style.setProperty("--text-muted", overrides.textMuted);
    if (overrides.accentGold) root.style.setProperty("--accent-gold", overrides.accentGold);
    if (overrides.danger) root.style.setProperty("--danger", overrides.danger);
    if (overrides.success) root.style.setProperty("--success", overrides.success);
  }
}
