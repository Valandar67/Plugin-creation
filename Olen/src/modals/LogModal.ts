// ============================================================
// Olen — Log Modal
// Discipline / Flow / Skip completion modal with aphorisms
// ============================================================

import type OlenPlugin from "../main";
import type { ActivityConfig, WorkspaceType } from "../types";
import { FALLBACK_QUOTES } from "../constants";

export interface LogResult {
  type: WorkspaceType;
  activityId: string;
}

/**
 * Shows a centered modal for logging activity completion.
 * Returns the chosen completion type via callback.
 */
export function showLogModal(
  plugin: OlenPlugin,
  activity: ActivityConfig,
  onComplete: (result: LogResult) => void
): void {
  const modal = document.createElement("div");
  modal.className = "olen-finish-modal";

  const backdrop = modal.createDiv({ cls: "olen-finish-backdrop" });
  const sheet = modal.createDiv({ cls: "olen-finish-sheet" });

  // Copy theme CSS vars from dashboard
  const dashboard = document.querySelector(".olen-dashboard") as HTMLElement | null;
  if (dashboard) {
    const cs = getComputedStyle(dashboard);
    const vars = [
      "--bg-primary", "--bg-secondary", "--card-bg", "--card-bg-solid",
      "--card-border", "--text-primary", "--text-secondary", "--text-muted",
      "--text-dim", "--accent-gold", "--accent-gold-bright", "--accent-gold-dim",
      "--accent-amber", "--shadow-card", "--glow-gold-strong",
    ];
    for (const v of vars) {
      const val = cs.getPropertyValue(v);
      if (val) sheet.style.setProperty(v, val);
    }
  }

  sheet.createEl("div", { cls: "olen-finish-title", text: "LOG COMPLETION" });
  sheet.createEl("div", {
    cls: "olen-finish-subtitle",
    text: `${activity.emoji} ${activity.name}`,
  });

  // Aphorism
  const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
  const quoteEl = sheet.createDiv({ cls: "olen-finish-quote" });
  quoteEl.createEl("div", {
    cls: "olen-finish-quote-text",
    text: `\u201C${quote.text}\u201D`,
  });
  quoteEl.createEl("div", {
    cls: "olen-finish-quote-attr",
    text: `\u2014 ${quote.attribution}`,
  });

  // Completion state buttons
  const states = plugin.settings.workspaceCompletionStates.filter((s) => s.enabled);
  const statesGrid = sheet.createDiv({ cls: "olen-workspace-states-grid" });

  for (const state of states) {
    const btn = statesGrid.createDiv({ cls: "olen-workspace-state-btn" });
    btn.style.borderColor = state.color;

    btn.createEl("div", { cls: "olen-workspace-state-icon", text: state.icon });
    btn.createEl("div", { cls: "olen-workspace-state-name", text: state.name });

    btn.addEventListener("click", () => {
      onComplete({ type: state.id, activityId: activity.id });
      closeSheet();
    });
  }

  // Cancel
  const cancelBtn = sheet.createEl("button", {
    cls: "olen-finish-cancel",
    text: "Cancel",
  });
  cancelBtn.addEventListener("click", () => closeSheet());
  backdrop.addEventListener("click", () => closeSheet());

  const closeSheet = () => {
    sheet.style.animation = "olen-finish-up 0.25s ease forwards";
    backdrop.style.opacity = "0";
    setTimeout(() => modal.remove(), 300);
  };

  document.body.appendChild(modal);
}
