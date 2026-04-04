// ============================================================
// Olen — Momentum Indicator Component
// Rising / Steady / Falling arrow based on last 7 days
// ============================================================

import type { OlenSettings, ActivityConfig, CompletionMap } from "../types";
import { toLocalDateStr } from "../utils/completions";

type MomentumState = "rising" | "steady" | "falling";

export function renderMomentumIndicator(
  container: HTMLElement,
  activity: ActivityConfig,
  completions: CompletionMap,
  settings: OlenSettings,
  staggerIndex: number
): void {
  const card = container.createDiv({ cls: "olen-momentum" });
  card.style.setProperty("--i", String(staggerIndex));

  const momentum = calculateMomentum(activity, completions, settings);

  const icon =
    momentum.state === "rising" ? "↑" : momentum.state === "falling" ? "↓" : "→";

  const color =
    momentum.state === "rising"
      ? "var(--success)"
      : momentum.state === "falling"
        ? "var(--danger)"
        : "var(--text-muted)";

  const label =
    momentum.state === "rising"
      ? "Rising"
      : momentum.state === "falling"
        ? "Falling"
        : "Steady";

  card.createEl("span", {
    cls: "olen-momentum-icon",
    text: icon,
    attr: { style: `color: ${color}` },
  });
  card.createEl("span", {
    cls: "olen-momentum-label",
    text: label,
    attr: { style: `color: ${color}` },
  });
  card.createEl("span", {
    cls: "olen-data-sm",
    text: `${momentum.recentCount}/${momentum.avgCount} avg in 7d`,
  });
}

interface MomentumResult {
  state: MomentumState;
  recentCount: number;
  avgCount: number;
}

function calculateMomentum(
  activity: ActivityConfig,
  completions: CompletionMap,
  settings: OlenSettings
): MomentumResult {
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const activityCompletions = completions[activity.id] ?? [];
  const completedDates = new Set(
    activityCompletions.filter((c) => c.completed).map((c) => c.date)
  );

  // Count completions in last 7 days
  let recentCount = 0;
  for (let i = 0; i < 7; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = toLocalDateStr(d);
    if (completedDates.has(dateStr)) recentCount++;
  }

  // Count completions in the 7 days before that (days 7-13)
  let priorCount = 0;
  for (let i = 7; i < 14; i++) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = toLocalDateStr(d);
    if (completedDates.has(dateStr)) priorCount++;
  }

  // Average across both weeks
  const avgCount = Math.round(((recentCount + priorCount) / 2) * 10) / 10;

  let state: MomentumState;
  if (recentCount > priorCount) {
    state = "rising";
  } else if (recentCount < priorCount) {
    state = "falling";
  } else {
    state = "steady";
  }

  return { state, recentCount, avgCount };
}
