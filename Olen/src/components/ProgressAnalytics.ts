// ============================================================
// Olen — Progress Analytics Component
// D | W | M | Y tabbed analytics section
// ============================================================

import type { OlenSettings, Category } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";

type AnalyticsPeriod = "D" | "W" | "M" | "Y";

export function renderProgressAnalytics(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number
): void {
  const label = settings.devConfig.labels.analytics_title ?? "PROGRESS";

  // Section title
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });

  // Card
  const card = container.createDiv({ cls: "olen-card" });
  card.style.setProperty("--i", String(staggerIndex));

  // Tab row
  const tabRow = card.createDiv({ cls: "olen-analytics-tabs" });
  const contentArea = card.createDiv({ cls: "olen-analytics-content" });

  const periods: AnalyticsPeriod[] = ["D", "W", "M", "Y"];
  const tabButtons: HTMLElement[] = [];
  let activePeriod: AnalyticsPeriod = "W";

  for (const period of periods) {
    const btn = tabRow.createEl("button", { cls: "olen-analytics-tab", text: period });
    if (period === activePeriod) btn.classList.add("active");
    tabButtons.push(btn);

    btn.addEventListener("click", () => {
      activePeriod = period;
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPeriod(contentArea, period, settings, engine);
    });
  }

  // Initial render
  renderPeriod(contentArea, activePeriod, settings, engine);
}

function renderPeriod(
  container: HTMLElement,
  period: AnalyticsPeriod,
  settings: OlenSettings,
  engine: OlenEngine
): void {
  container.empty();

  switch (period) {
    case "D": renderDailyView(container, settings, engine); break;
    case "W": renderWeeklyView(container, settings, engine); break;
    case "M": renderMonthlyView(container, settings, engine); break;
    case "Y": renderYearlyView(container, settings, engine); break;
  }
}

// ── Daily View ──

function renderDailyView(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine
): void {
  const stats = engine.getDailyStats();
  const total = stats.perActivity.length;
  const done = stats.sessions;
  const focusScore = total > 0 ? Math.round((done / total) * 100) : 0;

  // Stats row
  const row = container.createDiv({ cls: "olen-analytics-stats" });
  createStat(row, String(done), "Sessions");
  createStat(row, `${focusScore}%`, "Focus");
  createStat(row, String(total - done), "Remaining");

  // Divider
  container.createDiv({ cls: "olen-divider" });

  // Per-activity list
  for (const a of stats.perActivity) {
    const item = container.createDiv({ cls: "olen-analytics-activity-row" });
    item.createEl("span", { cls: "olen-analytics-activity-emoji", text: a.emoji });
    item.createEl("span", { cls: "olen-analytics-activity-name", text: a.name });

    const badge = item.createEl("span", { cls: "olen-analytics-activity-badge" });
    if (a.done) {
      badge.setText("\u2713");
      badge.classList.add("done");
    } else {
      badge.setText("\u2014");
    }
  }
}

// ── Weekly View ──

function renderWeeklyView(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine
): void {
  const stats = engine.getWeeklyStats();

  // Stats row
  const row = container.createDiv({ cls: "olen-analytics-stats" });
  createStat(row, String(stats.activeDays) + "/7", "Active days");
  createStat(row, stats.bestDay, "Best day");

  const wowStr = stats.weekOverWeek >= 0 ? `+${stats.weekOverWeek}` : String(stats.weekOverWeek);
  createStat(row, wowStr, "vs last week");

  // Divider
  container.createDiv({ cls: "olen-divider" });

  // Bar chart (reuse same pattern as WeeklyRhythm)
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const todayStr = new Date(now).toISOString().slice(0, 10);

  let maxTotal = 1;
  for (const day of stats.byDay) {
    let total = 0;
    day.completions.forEach((v) => { total += v; });
    if (total > maxTotal) maxTotal = total;
  }

  const barsContainer = container.createDiv({ cls: "olen-weekly-bars" });
  for (const day of stats.byDay) {
    const col = barsContainer.createDiv({ cls: "olen-weekly-bar-col" });
    let total = 0;
    day.completions.forEach((v) => { total += v; });

    const barHeight = maxTotal > 0 ? Math.max(4, (total / maxTotal) * 100) : 4;
    const barEl = col.createDiv({ cls: "olen-weekly-bar" });
    barEl.style.height = `${barHeight}px`;
    barEl.style.minHeight = "4px";

    if (day.date === todayStr) barEl.classList.add("olen-weekly-bar-today");

    const categories: Category[] = ["body", "mind", "spirit"];
    for (const cat of categories) {
      const catCount = day.completions.get(cat) ?? 0;
      if (catCount === 0) continue;
      const segHeight = total > 0 ? (catCount / total) * 100 : 0;
      const seg = barEl.createDiv({ cls: "olen-weekly-bar-segment" });
      seg.style.height = `${segHeight}%`;
      seg.style.background = getCategoryColor(cat, settings);
    }

    if (total === 0) barEl.style.background = "var(--card-border)";
    col.createEl("div", { cls: "olen-weekly-day-label", text: day.day.charAt(0) });
  }

  // Streak
  const streak = engine.getOverallStreak();
  if (streak > 0) {
    const streakEl = container.createDiv({ cls: "olen-analytics-streak" });
    streakEl.setText(`\u{1F525} ${streak}-day streak`);
  }
}

// ── Monthly View ──

function renderMonthlyView(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine
): void {
  const stats = engine.getMonthlyStats();

  // Stats row
  const row = container.createDiv({ cls: "olen-analytics-stats" });
  createStat(row, String(stats.totalSessions), "Sessions");
  createStat(row, String(stats.activeDays), "Active days");
  createStat(row, String(stats.avgDaily), "Avg/day");

  // Divider
  container.createDiv({ cls: "olen-divider" });

  // Calendar heatmap
  const heatmap = container.createDiv({ cls: "olen-analytics-heatmap" });
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDayOfWeek = new Date(year, month, 1).getDay(); // 0=Sun
  const adjustedFirst = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Mon=0

  // Day labels header
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
  const headerRow = heatmap.createDiv({ cls: "olen-analytics-heatmap-row" });
  for (const dl of dayLabels) {
    headerRow.createEl("div", { cls: "olen-analytics-heatmap-label", text: dl });
  }

  // Find max for scaling
  let maxDay = 1;
  for (const d of stats.calendarGrid) {
    if (d.total > maxDay) maxDay = d.total;
  }

  // Calendar grid
  let cellIdx = 0;
  let currentRow = heatmap.createDiv({ cls: "olen-analytics-heatmap-row" });

  // Empty cells for offset
  for (let i = 0; i < adjustedFirst; i++) {
    currentRow.createDiv({ cls: "olen-analytics-heatmap-cell empty" });
    cellIdx++;
  }

  const todayStr = now.toISOString().slice(0, 10);
  for (const day of stats.calendarGrid) {
    if (cellIdx > 0 && cellIdx % 7 === 0) {
      currentRow = heatmap.createDiv({ cls: "olen-analytics-heatmap-row" });
    }

    const cell = currentRow.createDiv({ cls: "olen-analytics-heatmap-cell" });
    const dateNum = parseInt(day.date.slice(-2));
    cell.createEl("span", { cls: "olen-analytics-heatmap-num", text: String(dateNum) });

    if (day.total > 0) {
      const intensity = Math.min(1, day.total / maxDay);
      const alpha = 0.08 + intensity * 0.35;
      cell.style.background = `color-mix(in srgb, var(--accent-gold) ${Math.round(alpha * 100)}%, transparent)`;
      cell.style.borderColor = `color-mix(in srgb, var(--accent-gold) ${Math.round((0.15 + intensity * 0.25) * 100)}%, transparent)`;
    }

    if (day.date === todayStr) cell.classList.add("today");
    cellIdx++;
  }

  // Weekly bar chart
  const subtitle = container.createDiv({ cls: "olen-analytics-subtitle" });
  subtitle.setText("BY WEEK");

  renderBarChart(container, stats.byWeek, settings);
}

// ── Yearly View ──

function renderYearlyView(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine
): void {
  const stats = engine.getYearlyStats();

  // Stats row
  const row = container.createDiv({ cls: "olen-analytics-stats" });
  createStat(row, String(stats.totalSessions), "Sessions");
  createStat(row, String(stats.activeDays), "Active days");

  // Divider
  container.createDiv({ cls: "olen-divider" });

  // Monthly bar chart
  const subtitle = container.createDiv({ cls: "olen-analytics-subtitle" });
  subtitle.setText("MONTH TRENDS");

  renderBarChart(container, stats.byMonth, settings);

  // Category distribution
  const catTitle = container.createDiv({ cls: "olen-analytics-subtitle" });
  catTitle.setText("CATEGORY SPLIT");

  const catTotal = Array.from(stats.categoryDistribution.values()).reduce((a, b) => a + b, 0);
  if (catTotal > 0) {
    const distBar = container.createDiv({ cls: "olen-analytics-dist-bar" });
    const categories: Category[] = ["body", "mind", "spirit"];
    for (const cat of categories) {
      const count = stats.categoryDistribution.get(cat) ?? 0;
      if (count === 0) continue;
      const pct = (count / catTotal) * 100;
      const seg = distBar.createDiv({ cls: "olen-analytics-dist-seg" });
      seg.style.width = `${pct}%`;
      seg.style.background = getCategoryColor(cat, settings);
    }

    // Labels
    const catLabels = container.createDiv({ cls: "olen-analytics-dist-labels" });
    for (const cat of categories) {
      const count = stats.categoryDistribution.get(cat) ?? 0;
      if (count === 0) continue;
      const pct = Math.round((count / catTotal) * 100);
      const lbl = catLabels.createDiv({ cls: "olen-analytics-dist-label" });
      const dot = lbl.createEl("span", { cls: "olen-analytics-dist-dot" });
      dot.style.background = getCategoryColor(cat, settings);
      lbl.createEl("span", { text: `${cat.charAt(0).toUpperCase() + cat.slice(1)} ${pct}%` });
    }
  } else {
    const empty = container.createDiv({ cls: "olen-analytics-empty" });
    empty.setText("Complete some activities to see distribution");
  }
}

// ── Helpers ──

function createStat(parent: HTMLElement, value: string, label: string): void {
  const stat = parent.createDiv({ cls: "olen-analytics-stat" });
  stat.createEl("div", { cls: "olen-analytics-stat-value", text: value });
  stat.createEl("div", { cls: "olen-analytics-stat-label", text: label });
}

function renderBarChart(
  parent: HTMLElement,
  data: Array<{ label: string; total: number; byCategory: Map<Category, number> }>,
  settings: OlenSettings
): void {
  let maxTotal = 1;
  for (const d of data) {
    if (d.total > maxTotal) maxTotal = d.total;
  }

  const bars = parent.createDiv({ cls: "olen-analytics-bars" });
  for (const d of data) {
    const col = bars.createDiv({ cls: "olen-analytics-bar-col" });
    const barHeight = maxTotal > 0 ? Math.max(4, (d.total / maxTotal) * 80) : 4;
    const barEl = col.createDiv({ cls: "olen-analytics-bar" });
    barEl.style.height = `${barHeight}px`;

    const categories: Category[] = ["body", "mind", "spirit"];
    for (const cat of categories) {
      const catCount = d.byCategory.get(cat) ?? 0;
      if (catCount === 0) continue;
      const segHeight = d.total > 0 ? (catCount / d.total) * 100 : 0;
      const seg = barEl.createDiv({ cls: "olen-analytics-bar-seg" });
      seg.style.height = `${segHeight}%`;
      seg.style.background = getCategoryColor(cat, settings);
    }

    if (d.total === 0) barEl.style.background = "var(--card-border)";
    col.createEl("div", { cls: "olen-analytics-bar-label", text: d.label });
  }
}

function getCategoryColor(category: Category, settings: OlenSettings): string {
  return settings.categoryColors[category] ?? "#928d85";
}
