// ============================================================
// Olen — My Why Modal
// Bottom-sheet modal for viewing/editing goals & aspirations
// ============================================================

import { Notice } from "obsidian";
import type OlenPlugin from "../main";

/**
 * Shows a bottom-sheet modal for managing the user's "My Why" + multiple goals.
 * Accessible from the dashboard hero card.
 */
export function showMyWhyModal(
  plugin: OlenPlugin,
  onSaved?: () => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet olen-mywhy-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });

  sheet.createEl("div", { cls: "olen-heading-lg", text: "MY WHY" });

  // Core motivation
  const whyField = sheet.createDiv({ cls: "olen-mywhy-field" });
  whyField.createEl("label", {
    cls: "olen-data-sm",
    text: "Core motivation",
  });
  const whyInput = whyField.createEl("textarea", {
    cls: "olen-mywhy-textarea",
    attr: {
      placeholder: "I pursue discipline because...",
      rows: "3",
    },
  });
  whyInput.value = plugin.settings.myWhy ?? "";

  // Goals list
  const goalsHeader = sheet.createDiv({ cls: "olen-mywhy-goals-header" });
  goalsHeader.createEl("label", { cls: "olen-data-sm", text: "Goals & aspirations" });

  const goalsContainer = sheet.createDiv({ cls: "olen-mywhy-goals" });

  // Track goals in a mutable array
  const currentGoals = [...(plugin.settings.goals ?? [])];

  function renderGoals(): void {
    goalsContainer.empty();

    if (currentGoals.length === 0) {
      goalsContainer.createEl("div", {
        cls: "olen-body-italic",
        text: "No goals yet. Add your first one below.",
        attr: { style: "padding: 8px 0;" },
      });
    }

    for (let i = 0; i < currentGoals.length; i++) {
      const row = goalsContainer.createDiv({ cls: "olen-mywhy-goal-row" });

      const goalInput = row.createEl("input", {
        cls: "olen-mywhy-goal-input",
        attr: { type: "text", value: currentGoals[i] },
      });

      goalInput.addEventListener("change", () => {
        currentGoals[i] = goalInput.value.trim();
      });
      goalInput.addEventListener("blur", () => {
        currentGoals[i] = goalInput.value.trim();
      });

      const removeBtn = row.createEl("button", {
        cls: "olen-mywhy-goal-remove",
        text: "\u00D7",
        attr: { "aria-label": "Remove goal" },
      });
      removeBtn.addEventListener("click", () => {
        currentGoals.splice(i, 1);
        renderGoals();
      });
    }
  }

  renderGoals();

  // Add goal button
  const addGoalBtn = sheet.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: "+ ADD GOAL",
    attr: { style: "margin-top: 8px; width: 100%;" },
  });
  addGoalBtn.addEventListener("click", () => {
    currentGoals.push("");
    renderGoals();
    // Focus the newly added input
    const inputs = goalsContainer.querySelectorAll(".olen-mywhy-goal-input");
    const last = inputs[inputs.length - 1] as HTMLInputElement | undefined;
    last?.focus();
  });

  // Actions
  const actions = sheet.createDiv({
    cls: "olen-directive-actions",
    attr: { style: "margin-top: 20px;" },
  });

  const saveBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: "SAVE",
  });
  saveBtn.addEventListener("click", async () => {
    plugin.settings.myWhy = whyInput.value.trim();
    plugin.settings.goals = currentGoals.filter((g) => g.trim().length > 0);
    await plugin.saveSettings();
    new Notice("Your Why has been saved.");
    closeSheet();
    onSaved?.();
  });

  const cancelBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: "CANCEL",
  });
  cancelBtn.addEventListener("click", () => closeSheet());

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSheet();
  });

  const closeSheet = () => {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  };

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}
