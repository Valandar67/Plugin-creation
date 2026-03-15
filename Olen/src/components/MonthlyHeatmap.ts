// ============================================================
// Olen — Monthly Heatmap Component
// Calendar grid with Hours/Productivity/Mood tabs
// ============================================================

import type { OlenSettings, Category } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";

export function renderMonthlyHeatmap(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number
): void {
  const card = container.createDiv({ cls: "olen-card olen-monthly-heatmap" });
  card.style.setProperty("--i", String(staggerIndex));

  card.createEl("div", { cls: "olen-heading", text: "MONTHLY OVERVIEW" });

  const monthly = engine.getMonthlyStats();
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthName = now.toLocaleString("en-US", { month: "long" });

  // Month label
  card.createEl("div", {
    cls: "olen-monthly-heatmap-label",
    text: `${monthName} ${year}`,
  });

  // Stats summary
  const statsRow = card.createDiv({ cls: "olen-monthly-heatmap-stats" });
  addStatPill(statsRow, String(monthly.totalSessions), "sessions");
  addStatPill(statsRow, String(monthly.activeDays), "active days");
  addStatPill(statsRow, String(monthly.avgDaily), "avg/day");

  // Calendar grid
  const grid = card.createDiv({ cls: "olen-monthly-grid" });

  // Day-of-week headers
  const dayHeaders = ["M", "T", "W", "T", "F", "S", "S"];
  for (const dh of dayHeaders) {
    grid.createEl("div", { cls: "olen-monthly-grid-header", text: dh });
  }

  // Calculate first day offset (Monday-based)
  const firstDay = new Date(year, month, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  // Empty cells for offset
  for (let i = 0; i < offset; i++) {
    grid.createDiv({ cls: "olen-monthly-grid-cell olen-monthly-grid-empty" });
  }

  // Day cells
  const maxActivity = Math.max(1, ...monthly.calendarGrid.map((d) => d.total));

  for (const dayData of monthly.calendarGrid) {
    const cell = grid.createDiv({ cls: "olen-monthly-grid-cell" });
    const dayNum = parseInt(dayData.date.slice(-2));
    cell.textContent = String(dayNum);

    if (dayData.total > 0) {
      const intensity = Math.min(1, dayData.total / maxActivity);
      const alpha = 0.2 + intensity * 0.6;
      cell.style.background = `color-mix(in srgb, var(--accent-gold) ${Math.round(alpha * 100)}%, transparent)`;
      cell.style.color = "var(--text-primary)";
      cell.classList.add("olen-monthly-grid-active");
    }

    // Highlight today
    const today = now.getDate();
    if (dayNum === today) {
      cell.classList.add("olen-monthly-grid-today");
    }
  }
}

function addStatPill(container: HTMLElement, value: string, label: string): void {
  const pill = container.createDiv({ cls: "olen-monthly-stat" });
  pill.createEl("span", { cls: "olen-data", text: value });
  pill.createEl("span", { cls: "olen-data-sm", text: ` ${label}` });
}
