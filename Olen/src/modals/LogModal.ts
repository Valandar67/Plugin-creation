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
 * Shows a bottom-sheet style modal for logging activity completion.
 * Returns the chosen completion type via callback.
 */
export function showLogModal(
  plugin: OlenPlugin,
  activity: ActivityConfig,
  onComplete: (result: LogResult) => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });

  sheet.createEl("div", { cls: "olen-heading-lg", text: "LOG COMPLETION" });
  sheet.createEl("div", {
    cls: "olen-body-italic",
    attr: { style: "margin: 12px 0 20px;" },
    text: `${activity.emoji} ${activity.name}`,
  });

  // Aphorism
  const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
  const quoteEl = sheet.createDiv({ cls: "olen-log-quote" });
  quoteEl.createEl("div", {
    cls: "olen-body-italic",
    text: `"${quote.text}"`,
  });
  quoteEl.createEl("div", {
    cls: "olen-data-sm",
    text: `— ${quote.attribution}`,
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
    cls: "olen-btn olen-btn-secondary",
    text: "CANCEL",
    attr: { style: "margin-top: 16px; width: 100%;" },
  });
  cancelBtn.addEventListener("click", () => closeSheet());

  const closeSheet = () => {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  };

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}
