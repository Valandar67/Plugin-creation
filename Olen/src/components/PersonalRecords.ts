// ============================================================
// Olen — Personal Records Component
// Longest streak, most sessions in a week, discipline records
// ============================================================

import { App } from "obsidian";
import type { OlenSettings, ActivityConfig, CompletionMap } from "../types";

export function renderPersonalRecords(
  container: HTMLElement,
  app: App,
  activity: ActivityConfig,
  completions: CompletionMap,
  settings: OlenSettings,
  staggerIndex: number
): void {
  const card = container.createDiv({ cls: "olen-card olen-personal-records" });
  card.style.setProperty("--i", String(staggerIndex));

  card.createEl("div", { cls: "olen-heading", text: "PERSONAL RECORDS" });

  const records = calculateRecords(app, activity, completions);
  const grid = card.createDiv({ cls: "olen-records-grid" });

  const items: Array<{ label: string; value: string; icon: string }> = [
    { label: "Longest Streak", value: `${records.longestStreak} days`, icon: "🔥" },
    { label: "Best Week", value: `${records.bestWeekSessions} sessions`, icon: "📊" },
    { label: "Discipline Wins", value: `${records.maxDisciplineStreak} in a row`, icon: "◆" },
    { label: "Total Sessions", value: String(records.totalSessions), icon: "⊙" },
  ];

  for (const item of items) {
    const el = grid.createDiv({ cls: "olen-record-item" });
    el.createEl("div", { cls: "olen-record-icon", text: item.icon });
    el.createEl("div", { cls: "olen-data", text: item.value });
    el.createEl("div", { cls: "olen-data-sm", text: item.label });
  }
}

interface Records {
  longestStreak: number;
  bestWeekSessions: number;
  maxDisciplineStreak: number;
  totalSessions: number;
}

function calculateRecords(
  app: App,
  activity: ActivityConfig,
  completions: CompletionMap
): Records {
  const activityCompletions = completions[activity.id] ?? [];
  const completedDates = activityCompletions
    .filter((c) => c.completed)
    .map((c) => c.date)
    .sort();

  // Total sessions
  const totalSessions = completedDates.length;

  // Longest streak
  let longestStreak = 0;
  let currentStreak = 0;
  let prevDate: Date | null = null;

  for (const dateStr of completedDates) {
    const d = new Date(dateStr);
    if (prevDate) {
      const diffDays = Math.round(
        (d.getTime() - prevDate.getTime()) / (24 * 60 * 60 * 1000)
      );
      if (diffDays === 1) {
        currentStreak++;
      } else {
        currentStreak = 1;
      }
    } else {
      currentStreak = 1;
    }
    longestStreak = Math.max(longestStreak, currentStreak);
    prevDate = d;
  }

  // Best week (most sessions in any 7-day window)
  let bestWeekSessions = 0;
  if (completedDates.length > 0) {
    const dateSet = new Set(completedDates);
    const allDates = completedDates.map((d) => new Date(d));

    for (const startDate of allDates) {
      let weekCount = 0;
      for (let i = 0; i < 7; i++) {
        const checkDate = new Date(startDate);
        checkDate.setDate(checkDate.getDate() + i);
        const checkStr = checkDate.toISOString().slice(0, 10);
        if (dateSet.has(checkStr)) weekCount++;
      }
      bestWeekSessions = Math.max(bestWeekSessions, weekCount);
    }
  }

  // Max discipline win streak
  let maxDisciplineStreak = 0;
  let disciplineStreak = 0;
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";

  const sessionFiles = files
    .filter((f) => {
      if (!f.path.startsWith(normalizedFolder) && f.path !== activity.folder) return false;
      const cache = app.metadataCache.getFileCache(f);
      return cache?.frontmatter?.[activity.property] === true;
    })
    .sort((a, b) => a.stat.mtime - b.stat.mtime);

  for (const file of sessionFiles) {
    const cache = app.metadataCache.getFileCache(file);
    const type = (cache?.frontmatter?.[`${activity.property}-Type`] as string)?.toLowerCase();
    if (type === "discipline" || !type) {
      disciplineStreak++;
      maxDisciplineStreak = Math.max(maxDisciplineStreak, disciplineStreak);
    } else {
      disciplineStreak = 0;
    }
  }

  return {
    longestStreak,
    bestWeekSessions,
    maxDisciplineStreak,
    totalSessions,
  };
}
