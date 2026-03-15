// ============================================================
// Olen — Consistency Calendar Component
// GitHub-style contribution graph for a single activity
// ============================================================

import type { OlenSettings, ActivityConfig, CompletionMap } from "../types";

export function renderConsistencyCalendar(
  container: HTMLElement,
  activity: ActivityConfig,
  completions: CompletionMap,
  settings: OlenSettings,
  staggerIndex: number
): void {
  const card = container.createDiv({ cls: "olen-card olen-consistency-cal" });
  card.style.setProperty("--i", String(staggerIndex));

  card.createEl("div", { cls: "olen-heading", text: "CONSISTENCY" });

  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthName = now.toLocaleString("en-US", { month: "long" });

  card.createEl("div", {
    cls: "olen-consistency-cal-label",
    text: monthName,
  });

  const grid = card.createDiv({ cls: "olen-consistency-grid" });

  // Day-of-week labels
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
  for (const dl of dayLabels) {
    grid.createEl("div", { cls: "olen-consistency-header", text: dl });
  }

  // Calculate offset for first day (Monday-based)
  const firstDay = new Date(year, month, 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  // Empty cells
  for (let i = 0; i < offset; i++) {
    grid.createDiv({ cls: "olen-consistency-cell olen-consistency-empty" });
  }

  // Get completion dates for this activity
  const activityCompletions = completions[activity.id] ?? [];
  const completedDates = new Set(
    activityCompletions.filter((c) => c.completed).map((c) => c.date)
  );

  // Day cells
  const accentColor = settings.categoryColors[activity.category] ?? "#c9a84c";
  const today = now.getDate();

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const cell = grid.createDiv({ cls: "olen-consistency-cell" });
    cell.textContent = String(d);

    const isDone = completedDates.has(dateStr);
    const isFuture = d > today;

    if (isDone) {
      cell.classList.add("olen-consistency-done");
      cell.style.background = accentColor;
      cell.style.color = "var(--bg-primary)";
    } else if (isFuture) {
      cell.classList.add("olen-consistency-future");
    } else {
      cell.classList.add("olen-consistency-missed");
    }

    if (d === today) {
      cell.classList.add("olen-consistency-today");
    }
  }

  // Weekly pattern summary
  const dayOfWeekCounts = new Array(7).fill(0);
  const dayOfWeekTotal = new Array(7).fill(0);

  for (let d = 1; d <= Math.min(daysInMonth, today); d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const dayIdx = (new Date(year, month, d).getDay() + 6) % 7; // Monday=0
    dayOfWeekTotal[dayIdx]++;
    if (completedDates.has(dateStr)) {
      dayOfWeekCounts[dayIdx]++;
    }
  }

  const patternRow = card.createDiv({ cls: "olen-consistency-pattern" });
  const patternDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  for (let i = 0; i < 7; i++) {
    const pct = dayOfWeekTotal[i] > 0
      ? Math.round((dayOfWeekCounts[i] / dayOfWeekTotal[i]) * 100)
      : 0;
    const dayEl = patternRow.createDiv({ cls: "olen-consistency-pattern-day" });
    dayEl.createEl("div", { cls: "olen-data-sm", text: patternDays[i] });
    dayEl.createEl("div", { cls: "olen-data-sm", text: `${pct}%` });
  }
}
