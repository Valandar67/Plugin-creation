// ============================================================
// Olen — Task Modal
// Quick task creation with time + duration + title
// ============================================================

import { Notice } from "obsidian";
import type OlenPlugin from "../main";

/**
 * Shows a bottom-sheet modal for adding a quick task to the Day Map.
 */
export function showTaskModal(
  plugin: OlenPlugin,
  onCreated?: () => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });

  sheet.createEl("div", { cls: "olen-heading-lg", text: "ADD TASK" });

  // Title
  const titleWrap = sheet.createDiv({ cls: "olen-task-field" });
  titleWrap.createEl("label", { cls: "olen-data-sm", text: "Task name" });
  const titleInput = titleWrap.createEl("input", {
    cls: "olen-task-input",
    attr: { type: "text", placeholder: "What needs doing?" },
  });

  // Time
  const timeWrap = sheet.createDiv({ cls: "olen-task-field" });
  timeWrap.createEl("label", { cls: "olen-data-sm", text: "Time (optional)" });
  const timeInput = timeWrap.createEl("input", {
    cls: "olen-task-input",
    attr: { type: "time" },
  });

  // Duration
  const durWrap = sheet.createDiv({ cls: "olen-task-field" });
  durWrap.createEl("label", { cls: "olen-data-sm", text: "Duration (min)" });
  const durInput = durWrap.createEl("input", {
    cls: "olen-task-input",
    attr: { type: "number", min: "5", max: "480", value: "30", placeholder: "30" },
  });

  // Actions
  const actions = sheet.createDiv({
    cls: "olen-directive-actions",
    attr: { style: "margin-top: 20px;" },
  });

  const addBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: "ADD TASK",
  });

  addBtn.addEventListener("click", async () => {
    const title = titleInput.value.trim();
    if (!title) {
      new Notice("Please enter a task name");
      return;
    }

    const now = plugin.settings.simulatedDate
      ? new Date(plugin.settings.simulatedDate)
      : new Date();
    const today = now.toISOString().slice(0, 10);

    plugin.settings.calendar.quickTasks.push({
      id: `qt-${Date.now()}`,
      title,
      date: today,
      time: timeInput.value || undefined,
      duration: parseInt(durInput.value) || 30,
      done: false,
    });

    await plugin.saveSettings();
    new Notice(`⚡ Task added: ${title}`);
    closeSheet();
    onCreated?.();
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
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    titleInput.focus();
  });
}
