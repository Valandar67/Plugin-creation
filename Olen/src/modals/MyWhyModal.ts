// ============================================================
// Olen — My Why Modal
// Center-positioned, keyboard-aware modal for goals
// ============================================================

import { Notice } from "obsidian";
import type OlenPlugin from "../main";

export function showMyWhyModal(
  plugin: OlenPlugin,
  onSaved?: () => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-modal-overlay";

  const sheet = document.createElement("div");
  sheet.className = "olen-modal-sheet olen-mywhy-sheet";
  overlay.appendChild(sheet);

  // Handle bar
  const handle = document.createElement("div");
  handle.className = "olen-modal-handle";
  sheet.appendChild(handle);

  // Title
  const title = document.createElement("div");
  title.className = "olen-modal-title";
  title.textContent = "My Why";
  sheet.appendChild(title);

  // Core motivation
  const whyLabel = document.createElement("label");
  whyLabel.className = "olen-modal-label";
  whyLabel.textContent = "Core motivation";
  sheet.appendChild(whyLabel);

  const whyInput = document.createElement("textarea");
  whyInput.className = "olen-modal-textarea";
  whyInput.placeholder = "I pursue discipline because...";
  whyInput.rows = 3;
  whyInput.value = plugin.settings.myWhy ?? "";
  sheet.appendChild(whyInput);

  // Goals
  const goalsLabel = document.createElement("label");
  goalsLabel.className = "olen-modal-label";
  goalsLabel.textContent = "Goals & aspirations";
  goalsLabel.style.marginTop = "12px";
  sheet.appendChild(goalsLabel);

  const goalsContainer = document.createElement("div");
  goalsContainer.className = "olen-modal-goals";
  sheet.appendChild(goalsContainer);

  const currentGoals = [...(plugin.settings.goals ?? [])];

  function renderGoals(): void {
    goalsContainer.innerHTML = "";

    if (currentGoals.length === 0) {
      const empty = document.createElement("div");
      empty.className = "olen-modal-hint";
      empty.textContent = "No goals yet. Add your first one below.";
      goalsContainer.appendChild(empty);
    }

    for (let i = 0; i < currentGoals.length; i++) {
      const row = document.createElement("div");
      row.className = "olen-modal-goal-row";

      const input = document.createElement("input");
      input.type = "text";
      input.className = "olen-modal-input";
      input.value = currentGoals[i];
      input.addEventListener("input", () => { currentGoals[i] = input.value.trim(); });

      const removeBtn = document.createElement("button");
      removeBtn.className = "olen-modal-goal-remove";
      removeBtn.textContent = "\u00D7";
      removeBtn.addEventListener("click", () => {
        currentGoals.splice(i, 1);
        renderGoals();
      });

      row.appendChild(input);
      row.appendChild(removeBtn);
      goalsContainer.appendChild(row);
    }
  }

  renderGoals();

  // Add goal button
  const addBtn = document.createElement("button");
  addBtn.className = "olen-modal-btn-add";
  addBtn.textContent = "+ Add goal";
  addBtn.addEventListener("click", () => {
    currentGoals.push("");
    renderGoals();
    const inputs = goalsContainer.querySelectorAll(".olen-modal-input");
    const last = inputs[inputs.length - 1] as HTMLInputElement | undefined;
    last?.focus();
  });
  sheet.appendChild(addBtn);

  // Actions
  const actions = document.createElement("div");
  actions.className = "olen-modal-actions";
  sheet.appendChild(actions);

  const saveBtn = document.createElement("button");
  saveBtn.className = "olen-modal-btn-primary";
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", async () => {
    plugin.settings.myWhy = whyInput.value.trim();
    plugin.settings.goals = currentGoals.filter((g) => g.trim().length > 0);
    await plugin.saveSettings();
    new Notice("Your Why has been saved.");
    closeModal();
    onSaved?.();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "olen-modal-btn-secondary";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => closeModal());

  actions.appendChild(saveBtn);
  actions.appendChild(cancelBtn);

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  function closeModal(): void {
    overlay.classList.remove("visible");
    cleanupViewport();
    setTimeout(() => overlay.remove(), 300);
  }

  const cleanupViewport = setupKeyboardAwareness(overlay, sheet);

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}

/**
 * Positions the modal in the visible viewport and follows the keyboard.
 * When keyboard opens: sheet moves up so content stays visible.
 * When keyboard closes: sheet returns to center.
 */
function setupKeyboardAwareness(overlay: HTMLElement, sheet: HTMLElement): () => void {
  const vv = (window as any).visualViewport;
  if (!vv) return () => {};

  function onViewportChange() {
    const keyboardHeight = window.innerHeight - (vv.offsetTop + vv.height);

    if (keyboardHeight > 50) {
      // Keyboard is open — position the overlay to fit within visible area
      overlay.style.height = `${vv.height}px`;
      overlay.style.top = `${vv.offsetTop}px`;
      sheet.style.maxHeight = `${vv.height - 40}px`;
    } else {
      // Keyboard closed — reset
      overlay.style.height = "";
      overlay.style.top = "";
      sheet.style.maxHeight = "";
    }
  }

  vv.addEventListener("resize", onViewportChange);
  vv.addEventListener("scroll", onViewportChange);

  return () => {
    vv.removeEventListener("resize", onViewportChange);
    vv.removeEventListener("scroll", onViewportChange);
    overlay.style.height = "";
    overlay.style.top = "";
    sheet.style.maxHeight = "";
  };
}
