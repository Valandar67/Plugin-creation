// ============================================================
// Olen — Calendar Engine
// Reads tasks from Daily Notes, Tasks plugin, and Quick Tasks
// Merges them into CalendarTask[] for Day Map integration
// ============================================================

import { TFile } from "obsidian";
import type { App } from "obsidian";
import type {
  OlenSettings,
  CalendarTask,
  DayMapEntry,
  CalendarTaskSource,
} from "../types";

export class CalendarEngine {
  private app: App;
  private settings: OlenSettings;
  private today: string;

  constructor(app: App, settings: OlenSettings, now: Date) {
    this.app = app;
    this.settings = settings;
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    this.today = d.toISOString().slice(0, 10);
  }

  // --- Main entry: get all calendar tasks for today ---

  getAllTasks(): CalendarTask[] {
    const tasks: CalendarTask[] = [];

    if (this.settings.calendar.enableDailyNotes) {
      tasks.push(...this.getDailyNoteTasks());
    }

    if (this.settings.calendar.enableTasksPlugin) {
      tasks.push(...this.getTasksPluginTasks());
    }

    if (this.settings.calendar.enableQuickTasks) {
      tasks.push(...this.getQuickTasks());
    }

    return tasks;
  }

  // --- Convert CalendarTasks to DayMapEntries ---

  toDayMapEntries(tasks: CalendarTask[]): DayMapEntry[] {
    return tasks.map((task) => {
      const startHour = task.time ? this.parseTimeToHour(task.time) : 9;
      const durationHours = (task.duration ?? 30) / 60;

      return {
        activityId: `cal-${task.id}`,
        activityName: task.title,
        emoji: this.getSourceEmoji(task.source),
        category: "mind" as const, // calendar tasks default to mind
        startHour,
        endHour: startHour + durationHours,
        estimatedDuration: task.duration ?? 30,
        status: task.done ? "done" as const : "pending" as const,
        isCalendarTask: true,
        calendarSource: task.source,
        calendarTaskId: task.id,
        filePath: task.filePath,
        lineNumber: task.lineNumber,
      };
    });
  }

  // --- Option A: Daily Notes Integration ---

  private getDailyNoteTasks(): CalendarTask[] {
    const folder = this.settings.calendar.dailyNotesFolder;
    if (!folder) return [];

    const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";

    // Find today's daily note
    const files = this.app.vault.getMarkdownFiles();
    const dailyNote = files.find((f) => {
      if (!f.path.startsWith(normalizedFolder) && f.path !== folder) return false;
      return f.basename === this.today;
    });

    if (!dailyNote) return [];

    // Read cached content and parse tasks
    const cache = this.app.metadataCache.getFileCache(dailyNote);
    if (!cache?.listItems) return [];

    const tasks: CalendarTask[] = [];

    for (const listItem of cache.listItems) {
      if (listItem.task === undefined) continue; // not a checkbox

      const lineStart = listItem.position.start.line;

      // Read the line content from cache sections
      const content = this.getLineContent(dailyNote, lineStart);
      if (!content) continue;

      const parsed = this.parseTaskLine(content);
      if (!parsed) continue;

      tasks.push({
        id: `dn-${dailyNote.path}-L${lineStart}`,
        title: parsed.title,
        source: "daily-note",
        date: this.today,
        time: parsed.time,
        duration: parsed.duration,
        done: listItem.task === "x" || listItem.task === "X",
        filePath: dailyNote.path,
        lineNumber: lineStart,
      });
    }

    return tasks;
  }

  // Parse "- [ ] Task name @14:00 ~30m" format
  private parseTaskLine(line: string): { title: string; time?: string; duration?: number } | null {
    // Remove checkbox prefix: "- [ ] " or "- [x] "
    const match = line.match(/^[-*]\s*\[.?\]\s*(.+)$/);
    if (!match) return null;

    let text = match[1].trim();

    // Extract @time (e.g., @14:00 or @2pm)
    let time: string | undefined;
    const timeMatch = text.match(/@(\d{1,2}):(\d{2})\b/);
    if (timeMatch) {
      time = `${timeMatch[1].padStart(2, "0")}:${timeMatch[2]}`;
      text = text.replace(timeMatch[0], "").trim();
    } else {
      // Try @2pm / @14 format
      const simpleTime = text.match(/@(\d{1,2})\s*(am|pm)?\b/i);
      if (simpleTime) {
        let hour = parseInt(simpleTime[1]);
        const period = simpleTime[2]?.toLowerCase();
        if (period === "pm" && hour < 12) hour += 12;
        if (period === "am" && hour === 12) hour = 0;
        time = `${String(hour).padStart(2, "0")}:00`;
        text = text.replace(simpleTime[0], "").trim();
      }
    }

    // Extract ~duration (e.g., ~30m, ~1h, ~1.5h)
    let duration: number | undefined;
    const durationMatch = text.match(/~(\d+(?:\.\d+)?)\s*(m|min|h|hr|hour)s?\b/i);
    if (durationMatch) {
      const value = parseFloat(durationMatch[1]);
      const unit = durationMatch[2].toLowerCase();
      duration = unit.startsWith("h") ? Math.round(value * 60) : Math.round(value);
      text = text.replace(durationMatch[0], "").trim();
    }

    // Clean up any trailing/leading whitespace or dashes
    const title = text.replace(/\s+/g, " ").trim();
    if (!title) return null;

    return { title, time, duration };
  }

  private getLineContent(file: TFile, lineNumber: number): string | null {
    // Use the metadataCache sections to reconstruct line content
    const cache = this.app.metadataCache.getFileCache(file);
    if (!cache) return null;

    // We need to read from the vault cache — try getting content via sections
    // Since we can't synchronously read file content, use the cached frontmatter
    // and list items to build what we need
    // Actually, list items in Obsidian cache don't include the text.
    // We'll need to read the file content. Store it in a map during gather phase.
    // For now, return null — the DashboardView will pre-read daily note content
    return null;
  }

  // Called by DashboardView with pre-read file content
  getDailyNoteTasksFromContent(content: string, filePath: string): CalendarTask[] {
    const lines = content.split("\n");
    const tasks: CalendarTask[] = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Match task lines: - [ ] or - [x]
      if (!/^[-*]\s*\[.?\]\s/.test(line)) continue;

      const parsed = this.parseTaskLine(line);
      if (!parsed) continue;

      const isDone = /^[-*]\s*\[[xX]\]/.test(line);

      tasks.push({
        id: `dn-${filePath}-L${i}`,
        title: parsed.title,
        source: "daily-note",
        date: this.today,
        time: parsed.time,
        duration: parsed.duration,
        done: isDone,
        filePath,
        lineNumber: i,
      });
    }

    return tasks;
  }

  // --- Option B: Tasks Plugin Integration ---

  private getTasksPluginTasks(): CalendarTask[] {
    // Check if Tasks plugin is installed
    const tasksPlugin = (this.app as any).plugins?.plugins?.["obsidian-tasks-plugin"];
    if (!tasksPlugin) return [];

    // Tasks plugin stores tasks via metadata cache
    // We scan all files for tasks with due dates matching today
    const tasks: CalendarTask[] = [];
    const files = this.app.vault.getMarkdownFiles();

    for (const file of files) {
      const cache = this.app.metadataCache.getFileCache(file);
      if (!cache?.listItems) continue;

      for (const listItem of cache.listItems) {
        if (listItem.task === undefined) continue;

        // Tasks plugin uses emoji-based dates in the text:
        // 📅 YYYY-MM-DD for due date
        // We need to read the file to check, but we can use the frontmatter-based
        // approach or the position to get the text.
        // Since we can't sync-read, we'll check if positions mention today.
        // For now, this is a best-effort check using cache data.
      }
    }

    return tasks;
  }

  // Called by DashboardView with pre-scanned task data
  getTasksPluginTasksFromFiles(files: { path: string; content: string }[]): CalendarTask[] {
    const tasks: CalendarTask[] = [];

    for (const file of files) {
      const lines = file.content.split("\n");

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!/^[-*]\s*\[.?\]\s/.test(line)) continue;

        // Check for Tasks plugin due date: 📅 YYYY-MM-DD
        const dueMatch = line.match(/\u{1F4C5}\s*(\d{4}-\d{2}-\d{2})/u);
        if (!dueMatch || dueMatch[1] !== this.today) continue;

        const parsed = this.parseTaskLine(line);
        if (!parsed) continue;

        // Also check for scheduled date ⏳
        const scheduledMatch = line.match(/\u23F3\s*(\d{4}-\d{2}-\d{2})/u);
        if (scheduledMatch && scheduledMatch[1] !== this.today) continue;

        const isDone = /^[-*]\s*\[[xX]\]/.test(line);

        tasks.push({
          id: `tp-${file.path}-L${i}`,
          title: parsed.title.replace(/[\u{1F4C5}\u23F3]\s*\d{4}-\d{2}-\d{2}/gu, "").trim(),
          source: "tasks-plugin",
          date: this.today,
          time: parsed.time,
          duration: parsed.duration,
          done: isDone,
          filePath: file.path,
          lineNumber: i,
        });
      }
    }

    return tasks;
  }

  // --- Option C: Built-in Quick Tasks ---

  private getQuickTasks(): CalendarTask[] {
    return this.settings.calendar.quickTasks
      .filter((qt) => qt.date === this.today)
      .map((qt) => ({
        id: `qt-${qt.id}`,
        title: qt.title,
        source: "quick-task" as CalendarTaskSource,
        date: qt.date,
        time: qt.time,
        duration: qt.duration,
        done: qt.done,
      }));
  }

  // --- Completion handlers ---

  // Toggle a daily note task done/undone by rewriting the checkbox
  async toggleDailyNoteTask(filePath: string, lineNumber: number, done: boolean): Promise<void> {
    const file = this.app.vault.getAbstractFileByPath(filePath);
    if (!file || !(file instanceof TFile)) return;

    const content = await this.app.vault.read(file);
    const lines = content.split("\n");

    if (lineNumber >= lines.length) return;

    const line = lines[lineNumber];
    if (done) {
      lines[lineNumber] = line.replace(/\[.\]/, "[x]");
    } else {
      lines[lineNumber] = line.replace(/\[.\]/, "[ ]");
    }

    await this.app.vault.modify(file, lines.join("\n"));
  }

  // Toggle a Tasks plugin task
  async toggleTasksPluginTask(filePath: string, lineNumber: number, done: boolean): Promise<void> {
    // Same mechanism as daily notes — just toggle the checkbox
    await this.toggleDailyNoteTask(filePath, lineNumber, done);
  }

  // Postpone a task to tomorrow
  async postponeTask(task: CalendarTask): Promise<void> {
    const tomorrow = new Date(this.today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().slice(0, 10);

    if (task.source === "quick-task") {
      // Update in settings
      const qt = this.settings.calendar.quickTasks.find(
        (q) => `qt-${q.id}` === task.id || q.id === task.id.replace("qt-", "")
      );
      if (qt) {
        qt.postponedFrom = qt.postponedFrom ?? qt.date;
        qt.date = tomorrowStr;
      }
    } else if (task.source === "tasks-plugin" && task.filePath !== undefined && task.lineNumber !== undefined) {
      // Update the due date in the file
      const file = this.app.vault.getAbstractFileByPath(task.filePath);
      if (!file || !(file instanceof TFile)) return;

      const content = await this.app.vault.read(file);
      const lines = content.split("\n");

      if (task.lineNumber < lines.length) {
        lines[task.lineNumber] = lines[task.lineNumber].replace(
          /\u{1F4C5}\s*\d{4}-\d{2}-\d{2}/u,
          `\u{1F4C5} ${tomorrowStr}`
        );
        await this.app.vault.modify(file, lines.join("\n"));
      }
    }
  }

  // --- Helpers ---

  private parseTimeToHour(time: string): number {
    const [h, m] = time.split(":").map(Number);
    return h + (m ?? 0) / 60;
  }

  private getSourceEmoji(source: CalendarTaskSource): string {
    switch (source) {
      case "daily-note": return "\u{1F4DD}";
      case "tasks-plugin": return "\u2611\uFE0F";
      case "quick-task": return "\u26A1";
    }
  }
}
