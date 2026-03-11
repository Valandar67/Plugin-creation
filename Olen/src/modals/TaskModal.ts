// ============================================================
// Olen — Task Modal
// Center-positioned, keyboard-aware quick task creation
// ============================================================

import { Notice } from "obsidian";
import type OlenPlugin from "../main";

export function showTaskModal(
  plugin: OlenPlugin,
  onCreated?: () => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-modal-overlay";

  const sheet = document.createElement("div");
  sheet.className = "olen-modal-sheet";
  overlay.appendChild(sheet);

  // Handle
  const handle = document.createElement("div");
  handle.className = "olen-modal-handle";
  sheet.appendChild(handle);

  // Title
  const title = document.createElement("div");
  title.className = "olen-modal-title";
  title.textContent = "Add Task";
  sheet.appendChild(title);

  // Task name
  const nameLabel = document.createElement("label");
  nameLabel.className = "olen-modal-label";
  nameLabel.textContent = "Task name";
  sheet.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.className = "olen-modal-input";
  nameInput.placeholder = "What needs doing?";
  sheet.appendChild(nameInput);

  // Time + Duration row
  const row = document.createElement("div");
  row.className = "olen-modal-row";
  sheet.appendChild(row);

  const timeWrap = document.createElement("div");
  timeWrap.className = "olen-modal-field";
  const timeLabel = document.createElement("label");
  timeLabel.className = "olen-modal-label";
  timeLabel.textContent = "Time";
  const timeInput = document.createElement("input");
  timeInput.type = "time";
  timeInput.className = "olen-modal-input";
  timeWrap.appendChild(timeLabel);
  timeWrap.appendChild(timeInput);

  const durWrap = document.createElement("div");
  durWrap.className = "olen-modal-field";
  const durLabel = document.createElement("label");
  durLabel.className = "olen-modal-label";
  durLabel.textContent = "Duration (min)";
  const durInput = document.createElement("input");
  durInput.type = "number";
  durInput.className = "olen-modal-input";
  durInput.min = "5";
  durInput.max = "480";
  durInput.value = "30";
  durWrap.appendChild(durLabel);
  durWrap.appendChild(durInput);

  row.appendChild(timeWrap);
  row.appendChild(durWrap);

  // Actions
  const actions = document.createElement("div");
  actions.className = "olen-modal-actions";
  sheet.appendChild(actions);

  const addBtn = document.createElement("button");
  addBtn.className = "olen-modal-btn-primary";
  addBtn.textContent = "Add Task";
  addBtn.addEventListener("click", async () => {
    const taskName = nameInput.value.trim();
    if (!taskName) {
      new Notice("Please enter a task name");
      return;
    }

    const now = plugin.settings.simulatedDate
      ? new Date(plugin.settings.simulatedDate)
      : new Date();
    const today = now.toISOString().slice(0, 10);

    plugin.settings.calendar.quickTasks.push({
      id: `qt-${Date.now()}`,
      title: taskName,
      date: today,
      time: timeInput.value || undefined,
      duration: parseInt(durInput.value) || 30,
      done: false,
    });

    await plugin.saveSettings();
    new Notice(`Task added: ${taskName}`);
    closeModal();
    onCreated?.();
  });

  const cancelBtn = document.createElement("button");
  cancelBtn.className = "olen-modal-btn-secondary";
  cancelBtn.textContent = "Cancel";
  cancelBtn.addEventListener("click", () => closeModal());

  actions.appendChild(addBtn);
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
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    nameInput.focus();
  });
}

function setupKeyboardAwareness(overlay: HTMLElement, sheet: HTMLElement): () => void {
  const vv = (window as any).visualViewport;
  if (!vv) return () => {};

  function onViewportChange() {
    const keyboardHeight = window.innerHeight - (vv.offsetTop + vv.height);

    if (keyboardHeight > 50) {
      overlay.style.height = `${vv.height}px`;
      overlay.style.top = `${vv.offsetTop}px`;
      sheet.style.maxHeight = `${vv.height - 40}px`;
    } else {
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
