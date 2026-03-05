// ============================================================
// Olen — Stats Row Component
// Horizontal stat pills: tasks, streak, days presence
// ============================================================

import type { OlenSettings } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";

export function renderStatsRow(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number
): void {
  const row = container.createDiv({ cls: "olen-stats-row" });
  row.style.setProperty("--i", String(staggerIndex));

  const totalTasks = engine.getTotalCompletions();
  const overallStreak = engine.getOverallStreak();
  const daysPresence = engine.getDaysOfPresence();

  const pills: Array<{ icon: string; value: string; label: string }> = [
    { icon: "⊙", value: String(totalTasks), label: "tasks" },
    { icon: "🔥", value: String(overallStreak), label: "streak" },
    { icon: "📅", value: String(daysPresence), label: "days presence" },
  ];

  for (const pill of pills) {
    const el = row.createDiv({ cls: "olen-stat-pill" });
    el.createEl("span", { cls: "olen-stat-pill-icon", text: pill.icon });
    el.createEl("span", { cls: "olen-stat-pill-value olen-data", text: pill.value });
    el.createEl("span", { cls: "olen-stat-pill-label", text: pill.label });
  }
}
