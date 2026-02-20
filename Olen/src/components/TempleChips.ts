// ============================================================
// Olen — Temple Chips Component
// Horizontal scrollable chips for self-care task tracking
// ============================================================

import type { OlenSettings, TempleTask } from "../types";

export function renderTempleChips(
  container: HTMLElement,
  settings: OlenSettings,
  staggerIndex: number,
  onTempleUpdate: (taskId: string) => void
): void {
  if (!settings.templeTasks || settings.templeTasks.length === 0) return;

  const label = settings.devConfig.labels.temple_title ?? "THE TEMPLE";
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();

  // Section
  const section = container.createDiv({ cls: "olen-temple-section" });
  section.style.setProperty("--i", String(staggerIndex));

  // Title
  section.createEl("div", { cls: "olen-heading", text: label });

  // Chips container
  const chips = section.createDiv({ cls: "olen-temple-chips" });
  chips.style.marginTop = "8px";

  for (const task of settings.templeTasks) {
    const status = getTaskStatus(task, now);

    const chipCls = `olen-temple-chip ${status.chipClass}`;
    const chip = chips.createDiv({ cls: chipCls });

    chip.createEl("span", { cls: "olen-temple-chip-emoji", text: task.emoji });
    chip.createEl("span", { cls: "olen-temple-chip-text", text: `${task.name} · ${status.text}` });

    chip.addEventListener("click", () => {
      onTempleUpdate(task.id);
      // Visual feedback
      chip.style.transform = "scale(0.9)";
      chip.style.opacity = "0.6";
      setTimeout(() => {
        chip.style.transform = "";
        chip.style.opacity = "";
      }, 200);
    });
  }
}

interface TaskStatus {
  text: string;
  chipClass: string;
}

function getTaskStatus(task: TempleTask, now: Date): TaskStatus {
  if (!task.lastCompleted) {
    return { text: "overdue", chipClass: "olen-temple-chip-overdue" };
  }

  const last = new Date(task.lastCompleted);
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysSince = Math.floor((now.getTime() - last.getTime()) / msPerDay);
  const daysUntilDue = task.intervalDays - daysSince;

  if (daysUntilDue <= 0) {
    return { text: "overdue", chipClass: "olen-temple-chip-overdue" };
  }

  if (daysUntilDue <= 1) {
    return { text: "due today", chipClass: "olen-temple-chip-warn" };
  }

  if (daysUntilDue <= 2) {
    return { text: `due in ${daysUntilDue}d`, chipClass: "olen-temple-chip-warn" };
  }

  return { text: `in ${daysUntilDue}d`, chipClass: "olen-temple-chip-ok" };
}
