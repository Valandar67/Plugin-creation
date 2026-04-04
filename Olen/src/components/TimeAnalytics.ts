// ============================================================
// Olen — Time Analytics Component
// Average session duration, total hours, duration trend
// ============================================================

import { App } from "obsidian";
import type { OlenSettings, ActivityConfig } from "../types";
import { toLocalDateStr } from "../utils/completions";

interface TimeStats {
  avgDuration: number; // minutes
  totalHoursThisWeek: number;
  totalHoursThisMonth: number;
  totalHoursAllTime: number;
  bestSession: { duration: number; date: string; type: string } | null;
  trend: "longer" | "shorter" | "stable";
  recentDurations: Array<{ date: string; minutes: number }>;
}

export function renderTimeAnalytics(
  container: HTMLElement,
  app: App,
  activity: ActivityConfig,
  settings: OlenSettings,
  staggerIndex: number
): void {
  const card = container.createDiv({ cls: "olen-card olen-time-analytics" });
  card.style.setProperty("--i", String(staggerIndex));

  card.createEl("div", { cls: "olen-heading", text: "TIME ANALYTICS" });

  const stats = getTimeStats(app, activity, settings);

  if (stats.totalHoursAllTime === 0) {
    card.createEl("div", { cls: "olen-body-italic", text: "No timed sessions yet." });
    return;
  }

  // Stats row
  const statsRow = card.createDiv({ cls: "olen-time-stats-row" });

  const statItems: Array<{ value: string; label: string }> = [
    { value: `${stats.avgDuration}m`, label: "avg duration" },
    { value: `${stats.totalHoursThisWeek.toFixed(1)}h`, label: "this week" },
    { value: `${stats.totalHoursThisMonth.toFixed(1)}h`, label: "this month" },
    { value: `${stats.totalHoursAllTime.toFixed(1)}h`, label: "all time" },
  ];

  for (const item of statItems) {
    const el = statsRow.createDiv({ cls: "olen-time-stat" });
    el.createEl("div", { cls: "olen-data", text: item.value });
    el.createEl("div", { cls: "olen-data-sm", text: item.label });
  }

  // Trend indicator
  const trendLabel =
    stats.trend === "longer" ? "↑ Getting longer"
    : stats.trend === "shorter" ? "↓ Getting shorter"
    : "→ Stable";
  const trendColor =
    stats.trend === "longer" ? "var(--success)"
    : stats.trend === "shorter" ? "var(--danger)"
    : "var(--text-muted)";

  card.createEl("div", {
    cls: "olen-time-trend",
    text: trendLabel,
    attr: { style: `color: ${trendColor}` },
  });

  // Duration bar chart (last 10 sessions)
  if (stats.recentDurations.length > 1) {
    const chartWrap = card.createDiv({ cls: "olen-time-chart" });
    const maxDur = Math.max(1, ...stats.recentDurations.map((d) => d.minutes));

    for (const session of stats.recentDurations) {
      const barCol = chartWrap.createDiv({ cls: "olen-time-bar-col" });
      const bar = barCol.createDiv({ cls: "olen-time-bar" });
      const height = Math.max(4, (session.minutes / maxDur) * 60);
      bar.style.height = `${height}px`;

      barCol.createEl("div", {
        cls: "olen-data-sm",
        text: session.date.slice(5), // MM-DD
      });
    }
  }

  // Best session
  if (stats.bestSession) {
    card.createEl("div", {
      cls: "olen-time-best",
      text: `🏆 Best: ${stats.bestSession.duration}m (${stats.bestSession.type}) on ${stats.bestSession.date}`,
    });
  }
}

function getTimeStats(app: App, activity: ActivityConfig, settings: OlenSettings): TimeStats {
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const weekAgo = toLocalDateStr(new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000));
  const monthStart = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;

  const durations: Array<{ date: string; minutes: number; type: string }> = [];

  for (const file of files) {
    if (!file.path.startsWith(normalizedFolder) && file.path !== activity.folder) continue;

    const cache = app.metadataCache.getFileCache(file);
    const fm = cache?.frontmatter;
    if (!fm) continue;

    const durationStr = fm.duration as string | undefined;
    if (!durationStr) continue;

    const minutes = parseDuration(durationStr);
    if (minutes <= 0) continue;

    const date = fm.Timestamp
      ? toLocalDateStr(new Date(fm.Timestamp))
      : file.basename;

    const type = (fm[`${activity.property}-Type`] as string) ?? "Discipline";

    durations.push({ date, minutes, type });
  }

  durations.sort((a, b) => a.date.localeCompare(b.date));

  const totalMinutes = durations.reduce((sum, d) => sum + d.minutes, 0);
  const avgDuration = durations.length > 0 ? Math.round(totalMinutes / durations.length) : 0;

  const weekMinutes = durations
    .filter((d) => d.date >= weekAgo)
    .reduce((sum, d) => sum + d.minutes, 0);

  const monthMinutes = durations
    .filter((d) => d.date >= monthStart)
    .reduce((sum, d) => sum + d.minutes, 0);

  // Best session (longest discipline session)
  const disciplineSessions = durations.filter((d) => d.type.toLowerCase() === "discipline");
  const bestSession = disciplineSessions.length > 0
    ? disciplineSessions.reduce((best, d) => (d.minutes > best.minutes ? d : best))
    : durations.length > 0
      ? durations.reduce((best, d) => (d.minutes > best.minutes ? d : best))
      : null;

  // Trend: compare average of last 5 vs previous 5
  let trend: "longer" | "shorter" | "stable" = "stable";
  if (durations.length >= 6) {
    const recent5 = durations.slice(-5);
    const prev5 = durations.slice(-10, -5);
    if (prev5.length > 0) {
      const recentAvg = recent5.reduce((s, d) => s + d.minutes, 0) / recent5.length;
      const prevAvg = prev5.reduce((s, d) => s + d.minutes, 0) / prev5.length;
      if (recentAvg > prevAvg * 1.1) trend = "longer";
      else if (recentAvg < prevAvg * 0.9) trend = "shorter";
    }
  }

  return {
    avgDuration,
    totalHoursThisWeek: weekMinutes / 60,
    totalHoursThisMonth: monthMinutes / 60,
    totalHoursAllTime: totalMinutes / 60,
    bestSession: bestSession
      ? { duration: bestSession.minutes, date: bestSession.date, type: bestSession.type }
      : null,
    trend,
    recentDurations: durations.slice(-10),
  };
}

function parseDuration(str: string): number {
  // Parse "1h 30m" or "45m" or "1h" format
  let totalMinutes = 0;
  const hourMatch = str.match(/(\d+)\s*h/);
  const minMatch = str.match(/(\d+)\s*m/);

  if (hourMatch) totalMinutes += parseInt(hourMatch[1]) * 60;
  if (minMatch) totalMinutes += parseInt(minMatch[1]);

  return totalMinutes;
}
