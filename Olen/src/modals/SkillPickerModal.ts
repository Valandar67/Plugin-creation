// ============================================================
// Olen — Skill Picker Modal
// Shows existing skills from folder + text input for new skills
// ============================================================

import { App, TFile } from "obsidian";

/**
 * Shows a bottom-sheet modal for picking skills.
 * Lists skills from the skill folder and allows adding custom ones.
 */
export function showSkillPickerModal(
  app: App,
  skillFolder: string | undefined,
  currentSkills: string[],
  onSelect: (skills: string[]) => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });

  sheet.createEl("div", { cls: "olen-heading-lg", text: "SELECT SKILLS" });

  const selectedSkills = new Set<string>(currentSkills);

  // Load existing skills from folder
  const availableSkills: string[] = [];
  if (skillFolder) {
    const normalizedFolder = skillFolder.endsWith("/") ? skillFolder : skillFolder + "/";
    const files = app.vault.getMarkdownFiles();
    for (const file of files) {
      if (file.path.startsWith(normalizedFolder)) {
        availableSkills.push(file.basename);
      }
    }
    availableSkills.sort();
  }

  // Skill chips (toggle selection)
  if (availableSkills.length > 0) {
    const chipsContainer = sheet.createDiv({ cls: "olen-skill-picker-chips" });

    for (const skill of availableSkills) {
      const chip = chipsContainer.createDiv({
        cls: `olen-skill-picker-chip ${selectedSkills.has(skill) ? "olen-skill-picker-selected" : ""}`,
      });
      chip.textContent = skill;

      chip.addEventListener("click", () => {
        if (selectedSkills.has(skill)) {
          selectedSkills.delete(skill);
          chip.classList.remove("olen-skill-picker-selected");
        } else {
          selectedSkills.add(skill);
          chip.classList.add("olen-skill-picker-selected");
        }
      });
    }
  }

  // Custom skill input
  const inputRow = sheet.createDiv({ cls: "olen-skill-picker-input-row" });
  const input = inputRow.createEl("input", {
    cls: "olen-skill-picker-input",
    attr: { type: "text", placeholder: "Add custom skill..." },
  });

  const addBtn = inputRow.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: "+",
  });

  const addCustomSkill = () => {
    const val = input.value.trim();
    if (val && !selectedSkills.has(val)) {
      selectedSkills.add(val);

      // Add chip to the container
      const chipsContainer = sheet.querySelector(".olen-skill-picker-chips");
      if (chipsContainer) {
        const chip = chipsContainer.createDiv({
          cls: "olen-skill-picker-chip olen-skill-picker-selected",
        });
        chip.textContent = val;
        chip.addEventListener("click", () => {
          selectedSkills.delete(val);
          chip.classList.remove("olen-skill-picker-selected");
        });
      }

      input.value = "";
    }
  };

  addBtn.addEventListener("click", addCustomSkill);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addCustomSkill();
  });

  // Actions
  const actions = sheet.createDiv({
    cls: "olen-directive-actions",
    attr: { style: "margin-top: 20px;" },
  });

  const doneBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: "DONE",
  });
  doneBtn.addEventListener("click", () => {
    onSelect(Array.from(selectedSkills));
    closeSheet();
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
    input.focus();
  });
}
