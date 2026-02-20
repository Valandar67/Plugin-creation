// ============================================================
// Olen — Weekly Rhythm Component
// 7-day bar chart with category stacking + stats row
// ============================================================

import type { OlenSettings, Category } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";

export function renderWeeklyRhythm(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number
): void {
  const label = settings.devConfig.labels.weekly_rhythm_title ?? "WEEKLY RHYTHM";

  // Section title
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });

  // Card
  const card = container.createDiv({ cls: "olen-card" });
  card.style.setProperty("--i", String(staggerIndex));

  // Stats row
  const stats = card.createDiv({ cls: "olen-weekly-stats" });

  const activeDays = engine.getActiveDaysThisWeek();
  const bestDay = engine.getBestDayThisWeek();
  const totalCompletions = engine.getTotalCompletions();

  createWeeklyStat(stats, String(activeDays) + "/7", "Active days");
  createWeeklyStat(stats, bestDay, "Best day");
  createWeeklyStat(stats, String(totalCompletions), "Total");

  // Divider
  card.createDiv({ cls: "olen-divider" });

  // Bar chart
  const weeklyData = engine.getWeeklyCompletionsByDay();
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const todayStr = new Date(now).toISOString().slice(0, 10);

  // Find max total for scaling
  let maxTotal = 1;
  for (const day of weeklyData) {
    let total = 0;
    day.completions.forEach((v) => { total += v; });
    if (total > maxTotal) maxTotal = total;
  }

  const barsContainer = card.createDiv({ cls: "olen-weekly-bars" });

  for (const day of weeklyData) {
    const col = barsContainer.createDiv({ cls: "olen-weekly-bar-col" });

    // Stacked bar
    let total = 0;
    day.completions.forEach((v) => { total += v; });

    const barHeight = maxTotal > 0 ? Math.max(4, (total / maxTotal) * 100) : 4;
    const barEl = col.createDiv({ cls: "olen-weekly-bar" });
    barEl.style.height = `${barHeight}px`;
    barEl.style.minHeight = "4px";

    if (day.date === todayStr) {
      barEl.classList.add("olen-weekly-bar-today");
    }

    // Create stacked segments
    const categories: Category[] = ["body", "mind", "spirit"];
    for (const cat of categories) {
      const catCount = day.completions.get(cat) ?? 0;
      if (catCount === 0) continue;
      const segHeight = total > 0 ? (catCount / total) * 100 : 0;
      const seg = barEl.createDiv({ cls: "olen-weekly-bar-segment" });
      seg.style.height = `${segHeight}%`;
      seg.style.background = getCategoryColor(cat, settings);
    }

    // If no completions, show empty bar
    if (total === 0) {
      barEl.style.background = "rgba(255, 255, 255, 0.05)";
    }

    // Day label
    col.createEl("div", { cls: "olen-weekly-day-label", text: day.day.charAt(0) });
  }
}

function createWeeklyStat(parent: HTMLElement, value: string, label: string): void {
  const stat = parent.createDiv({ cls: "olen-weekly-stat" });
  stat.createEl("div", { cls: "olen-weekly-stat-value", text: value });
  stat.createEl("div", { cls: "olen-weekly-stat-label", text: label });
}

function getCategoryColor(category: Category, settings: OlenSettings): string {
  return settings.categoryColors[category] ?? "#928d85";
}
