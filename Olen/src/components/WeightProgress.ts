// ============================================================
// Olen — Weight Progress Component
// Weight trend graph + log reminder notification
// ============================================================

import type { OlenSettings, WeightLogFrequency } from "../types";

export function renderWeightNotification(
  container: HTMLElement,
  settings: OlenSettings,
  staggerIndex: number,
  onLogWeight: () => void
): void {
  const stats = settings.personalStats;
  if (!stats.currentWeight || stats.weightLog.length === 0) return;

  const daysSinceLog = getDaysSinceLastLog(stats.lastWeightLogDate);
  const intervalDays = getIntervalDays(stats.weightLogFrequency, stats.weightLogCustomDays);

  if (daysSinceLog < intervalDays) return;

  // Show notification card
  const card = container.createDiv({ cls: "olen-card-compact olen-weight-notify" });
  card.style.setProperty("--i", String(staggerIndex));

  const row = card.createDiv({ cls: "olen-weight-notify-row" });
  row.createEl("span", { text: "Time to log your weight" });

  const btn = row.createEl("button", {
    cls: "olen-btn olen-btn-primary olen-weight-notify-btn",
    text: "Log",
  });
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    onLogWeight();
  });
}

function getDaysSinceLastLog(lastDate: string | null): number {
  if (!lastDate) return 999;
  const last = new Date(lastDate);
  const now = new Date();
  const ms = now.getTime() - last.getTime();
  return Math.floor(ms / (24 * 60 * 60 * 1000));
}

function getIntervalDays(freq: WeightLogFrequency, customDays: number): number {
  switch (freq) {
    case "twice-a-week": return 3;
    case "every-week": return 7;
    case "every-2-weeks": return 14;
    case "every-3-days": return 3;
    case "every-5-days": return 5;
    case "custom": return customDays;
    default: return 7;
  }
}
