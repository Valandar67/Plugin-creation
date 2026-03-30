// ============================================================
// Olen — Life Phases Guide Modal
// Card-based step navigation with persistent checkboxes
// ============================================================

import type OlenPlugin from "../main";
import { LIFE_PHASES_STEPS } from "../data/lifePhasesContent";

export function openLifePhasesModal(plugin: OlenPlugin): void {
  let currentStep = getFirstIncompleteStep(plugin);

  const overlay = document.createElement("div");
  overlay.className = "olen-modal-overlay";

  const sheet = document.createElement("div");
  sheet.className = "olen-modal-sheet olen-lifephases-sheet";
  overlay.appendChild(sheet);

  // Backdrop close
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  function closeModal(): void {
    overlay.classList.remove("visible");
    cleanupViewport();
    setTimeout(() => overlay.remove(), 300);
  }

  function renderStep(stepIndex: number): void {
    sheet.innerHTML = "";
    const step = LIFE_PHASES_STEPS[stepIndex];
    const progress = plugin.settings.lifePhasesProgress;
    const completed = progress.completedCommands[stepIndex] ?? [];

    // Handle bar
    const handle = document.createElement("div");
    handle.className = "olen-modal-handle";
    sheet.appendChild(handle);

    // Step dots
    const dots = document.createElement("div");
    dots.className = "olen-lifephases-step-indicator";
    for (let i = 0; i < LIFE_PHASES_STEPS.length; i++) {
      const dot = document.createElement("div");
      dot.className = "olen-lifephases-dot";
      if (i === stepIndex) dot.classList.add("active");
      else if (isStepComplete(plugin, i)) dot.classList.add("completed");
      dots.appendChild(dot);
    }
    sheet.appendChild(dots);

    // Title
    const title = document.createElement("div");
    title.className = "olen-modal-title";
    title.textContent = step.title;
    sheet.appendChild(title);

    // Description
    const desc = document.createElement("div");
    desc.className = "olen-lifephases-description";
    desc.textContent = step.description;
    sheet.appendChild(desc);

    // Commands with checkboxes
    const commandsContainer = document.createElement("div");
    commandsContainer.className = "olen-lifephases-commands";

    for (let ci = 0; ci < step.commands.length; ci++) {
      const isChecked = completed.includes(ci);

      const row = document.createElement("div");
      row.className = "olen-lifephases-command";
      if (isChecked) row.classList.add("checked");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = isChecked;
      checkbox.addEventListener("change", async () => {
        await toggleCommand(plugin, stepIndex, ci);
        renderStep(stepIndex);
      });

      const label = document.createElement("label");
      label.textContent = step.commands[ci];
      label.addEventListener("click", () => checkbox.click());

      row.appendChild(checkbox);
      row.appendChild(label);
      commandsContainer.appendChild(row);
    }
    sheet.appendChild(commandsContainer);

    // Completion badge
    if (isStepComplete(plugin, stepIndex)) {
      const badge = document.createElement("div");
      badge.className = "olen-lifephases-complete-badge";
      badge.textContent = "\u2713 STEP COMPLETE";
      sheet.appendChild(badge);
    }

    // Navigation
    const nav = document.createElement("div");
    nav.className = "olen-lifephases-nav";

    if (stepIndex > 0) {
      const prevBtn = document.createElement("button");
      prevBtn.className = "olen-modal-btn-secondary";
      prevBtn.textContent = "\u2190 Previous";
      prevBtn.addEventListener("click", () => {
        currentStep = stepIndex - 1;
        renderStep(currentStep);
      });
      nav.appendChild(prevBtn);
    } else {
      nav.appendChild(document.createElement("div")); // spacer
    }

    if (stepIndex < LIFE_PHASES_STEPS.length - 1) {
      const nextBtn = document.createElement("button");
      nextBtn.className = "olen-modal-btn-primary";
      nextBtn.textContent = "Next \u2192";
      nextBtn.addEventListener("click", () => {
        currentStep = stepIndex + 1;
        renderStep(currentStep);
      });
      nav.appendChild(nextBtn);
    } else {
      const doneBtn = document.createElement("button");
      doneBtn.className = "olen-modal-btn-primary";
      doneBtn.textContent = "Done";
      doneBtn.addEventListener("click", () => closeModal());
      nav.appendChild(doneBtn);
    }
    sheet.appendChild(nav);
  }

  const cleanupViewport = setupKeyboardAwareness(overlay, sheet);

  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
    renderStep(currentStep);
  });
}

function getFirstIncompleteStep(plugin: OlenPlugin): number {
  for (let i = 0; i < LIFE_PHASES_STEPS.length; i++) {
    if (!isStepComplete(plugin, i)) return i;
  }
  return 0; // All complete — show first
}

function isStepComplete(plugin: OlenPlugin, stepIndex: number): boolean {
  const completed = plugin.settings.lifePhasesProgress.completedCommands[stepIndex] ?? [];
  return completed.length >= LIFE_PHASES_STEPS[stepIndex].commands.length;
}

async function toggleCommand(plugin: OlenPlugin, stepIndex: number, cmdIndex: number): Promise<void> {
  const progress = plugin.settings.lifePhasesProgress;
  if (!progress.completedCommands[stepIndex]) {
    progress.completedCommands[stepIndex] = [];
  }
  const arr = progress.completedCommands[stepIndex];
  const idx = arr.indexOf(cmdIndex);
  if (idx >= 0) {
    arr.splice(idx, 1);
  } else {
    arr.push(cmdIndex);
  }
  await plugin.saveSettings();
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
