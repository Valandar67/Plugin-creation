// ============================================================
// Olen — Finding Your Why Modal
// 9-screen branching guided flow using Sunday modal pattern
// ============================================================

import type OlenPlugin from "../main";
import { SCREENS, VISION_SUB_AREAS } from "../data/lifePhasesContent";
import type { Category } from "../types";
import { THEME_PRESETS } from "../data/themes";
import { applyAccentColor } from "../utils/accentColor";

export function openFindingWhyModal(plugin: OlenPlugin, onComplete?: () => void): void {
  const progress = plugin.settings.findingWhyProgress;
  let currentScreen = getFirstIncompleteScreen(plugin);

  // --- Overlay (Sunday modal pattern) ---
  const overlay = document.createElement("div");
  overlay.className = "olen-sunday-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "olen-sunday-modal";
  overlay.appendChild(modal);

  // Apply theme + accent color so modal inherits the correct CSS vars
  const mode = plugin.settings.themeMode ?? "dark";
  const preset = THEME_PRESETS[mode];
  const themeOverrides = plugin.settings.themeOverrides ?? {};
  const theme = { ...preset, ...themeOverrides };
  const varMap: Record<string, string> = {
    bgPrimary: "--bg-primary", bgSecondary: "--bg-secondary",
    cardBg: "--card-bg", cardBgSolid: "--card-bg-solid", cardBorder: "--card-border",
    textPrimary: "--text-primary", textSecondary: "--text-secondary",
    textMuted: "--text-muted", textDim: "--text-dim",
    accentGold: "--accent-gold", accentGoldBright: "--accent-gold-bright",
    accentGoldDim: "--accent-gold-dim", accentAmber: "--accent-amber",
    bodyColor: "--body-color", mindColor: "--mind-color", spiritColor: "--spirit-color",
  };
  for (const [key, cssVar] of Object.entries(varMap)) {
    if ((theme as any)[key]) overlay.style.setProperty(cssVar, (theme as any)[key]);
  }
  if (plugin.obsidianAccentColor) {
    applyAccentColor(overlay, plugin.obsidianAccentColor);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add("olen-sunday-modal-visible");
    });
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeModal();
  });

  function closeModal(): void {
    overlay.classList.add("olen-sunday-modal-fading");
    overlay.classList.remove("olen-sunday-modal-visible");
    setTimeout(() => {
      overlay.remove();
      if (onComplete) onComplete();
    }, 500);
  }

  function navigateTo(screenIndex: number): void {
    currentScreen = screenIndex;
    renderScreen(screenIndex);
  }

  function renderScreen(screenIndex: number): void {
    modal.innerHTML = "";
    const step = document.createElement("div");
    step.className = "olen-sunday-step";
    modal.appendChild(step);

    switch (screenIndex) {
      case 0: renderScreen0_Entry(step); break;
      case 1: renderScreen1_Intro(step); break;
      case 2: renderScreen2_Branch(step); break;
      case 3: renderScreen3_Confrontation(step); break;
      case 4: renderScreen4_Vision(step); break;
      case 5: renderScreen5_Write(step); break;
      case 6: renderScreen6_Structure(step); break;
      case 7: renderScreen7_OpenMind(step); break;
      case 8: renderScreen8_Evolve(step); break;
    }
  }

  // === Screen 0: Entry ===
  function renderScreen0_Entry(step: HTMLElement): void {
    const dialogue = document.createElement("div");
    dialogue.className = "olen-sunday-dialogue";
    dialogue.textContent = "Struggling to find your why?";
    step.appendChild(dialogue);

    const actions = document.createElement("div");
    actions.className = "olen-findwhy-yesno";
    step.appendChild(actions);

    const yesBtn = document.createElement("button");
    yesBtn.className = "olen-findwhy-btn";
    yesBtn.textContent = "Yes";
    yesBtn.addEventListener("click", () => {
      markScreenComplete(0);
      navigateTo(1);
    });
    actions.appendChild(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.className = "olen-findwhy-btn olen-findwhy-btn-secondary";
    noBtn.textContent = "No";
    noBtn.addEventListener("click", () => closeModal());
    actions.appendChild(noBtn);
  }

  // === Screen 1: Intro ===
  function renderScreen1_Intro(step: HTMLElement): void {
    const screen = SCREENS[1];
    const dialogue = document.createElement("div");
    dialogue.className = "olen-sunday-dialogue";
    dialogue.textContent = screen.dialogue!;
    step.appendChild(dialogue);

    const actions = document.createElement("div");
    actions.className = "olen-findwhy-yesno";
    step.appendChild(actions);

    const okBtn = document.createElement("button");
    okBtn.className = "olen-findwhy-btn";
    okBtn.textContent = "Ok";
    okBtn.addEventListener("click", () => {
      markScreenComplete(1);
      navigateTo(2);
    });
    actions.appendChild(okBtn);
  }

  // === Screen 2: Branch ===
  function renderScreen2_Branch(step: HTMLElement): void {
    const dialogue = document.createElement("div");
    dialogue.className = "olen-sunday-dialogue";
    dialogue.textContent = "Does any part of your current life feel like it\u2019s quietly sabotaging your future?";
    step.appendChild(dialogue);

    const actions = document.createElement("div");
    actions.className = "olen-findwhy-yesno";
    step.appendChild(actions);

    const yesBtn = document.createElement("button");
    yesBtn.className = "olen-findwhy-btn";
    yesBtn.textContent = "Yes";
    yesBtn.addEventListener("click", async () => {
      progress.tookConfrontationPath = true;
      markScreenComplete(2);
      await plugin.saveSettings();
      navigateTo(3);
    });
    actions.appendChild(yesBtn);

    const noBtn = document.createElement("button");
    noBtn.className = "olen-findwhy-btn olen-findwhy-btn-secondary";
    noBtn.textContent = "No";
    noBtn.addEventListener("click", async () => {
      progress.tookConfrontationPath = false;
      markScreenComplete(2);
      // Also mark confrontation as complete (skipped)
      markScreenComplete(3);
      await plugin.saveSettings();
      navigateTo(4);
    });
    actions.appendChild(noBtn);
  }

  // === Screen 3: Confrontation (gated) ===
  function renderScreen3_Confrontation(step: HTMLElement): void {
    const screen = SCREENS[3];

    const desc = document.createElement("div");
    desc.className = "olen-findwhy-description";
    desc.textContent = screen.description!;
    step.appendChild(desc);

    const { container, allChecked } = renderCheckboxes(step, 3, screen.commands!);

    // Transition text
    const transition = document.createElement("div");
    transition.className = "olen-findwhy-transition";
    transition.textContent = "You found the problem, and that you need to solve it. To solve that inertia, we need to find your why.";
    transition.style.display = allChecked() ? "block" : "none";
    step.appendChild(transition);

    // Nav
    const nav = createNav(step, {
      back: 2,
      next: 4,
      gated: true,
      allChecked,
      onNext: () => markScreenComplete(3),
    });

    container.addEventListener("change", () => {
      transition.style.display = allChecked() ? "block" : "none";
      updateNavState(nav, allChecked());
    });
  }

  // === Screen 4: Vision ===
  function renderScreen4_Vision(step: HTMLElement): void {
    const dialogue = document.createElement("div");
    dialogue.className = "olen-sunday-dialogue";
    dialogue.textContent = "Select the things you care about";
    step.appendChild(dialogue);

    const selectedAreas = new Set<string>(progress.selectedSubAreas ?? []);
    // Track custom sub-areas added by the user
    const customAreas = progress.customSubAreas ?? [];

    // Group sub-areas by category — use actual configured colors
    const categories: Category[] = ["body", "mind", "spirit"];
    const catColors = plugin.settings.categoryColors;
    const colorMap: Record<Category, string> = {
      body: catColors.body,
      mind: catColors.mind,
      spirit: catColors.spirit,
    };
    const catLabels: Record<Category, string> = {
      body: "BODY",
      mind: "MIND",
      spirit: "SPIRIT",
    };

    for (const cat of categories) {
      const group = document.createElement("div");
      group.className = "olen-findwhy-chip-group";

      const header = document.createElement("div");
      header.className = "olen-findwhy-chip-header";
      header.textContent = catLabels[cat];
      header.style.color = colorMap[cat];
      group.appendChild(header);

      const chipRow = document.createElement("div");
      chipRow.className = "olen-findwhy-chips";

      // Built-in areas
      const areas = VISION_SUB_AREAS.filter((a) => a.category === cat);
      // Custom areas for this category
      const customs = customAreas.filter((a) => a.category === cat);

      for (const area of [...areas, ...customs]) {
        const chip = document.createElement("button");
        chip.className = "olen-findwhy-chip";
        chip.textContent = area.label;
        chip.style.setProperty("--chip-color", colorMap[cat]);

        if (selectedAreas.has(area.id)) {
          chip.classList.add("selected");
        }

        chip.addEventListener("click", () => {
          if (selectedAreas.has(area.id)) {
            selectedAreas.delete(area.id);
            chip.classList.remove("selected");
          } else {
            selectedAreas.add(area.id);
            chip.classList.add("selected");
          }
          progress.selectedSubAreas = [...selectedAreas];
          plugin.saveSettings();
          updateNavState(nav, selectedAreas.size > 0);
        });
        chipRow.appendChild(chip);
      }

      // Add custom chip button (+)
      const addBtn = document.createElement("button");
      addBtn.className = "olen-findwhy-chip olen-findwhy-chip-add";
      addBtn.textContent = "+";
      addBtn.style.setProperty("--chip-color", colorMap[cat]);
      addBtn.addEventListener("click", () => {
        const name = prompt("Add a custom area:");
        if (!name || !name.trim()) return;
        const id = `custom-${cat}-${name.trim().toLowerCase().replace(/\s+/g, "-")}`;
        if (customAreas.some((a) => a.id === id)) return;
        const newArea = { id, label: name.trim(), category: cat };
        customAreas.push(newArea);
        progress.customSubAreas = customAreas;
        selectedAreas.add(id);
        progress.selectedSubAreas = [...selectedAreas];
        plugin.saveSettings();
        // Re-render to show the new chip
        navigateTo(4);
      });
      chipRow.appendChild(addBtn);

      group.appendChild(chipRow);
      step.appendChild(group);
    }

    // Nav
    const backScreen = progress.tookConfrontationPath ? 3 : 2;
    const nav = createNav(step, {
      back: backScreen,
      next: 5,
      gated: true,
      allChecked: () => selectedAreas.size > 0,
      onNext: () => markScreenComplete(4),
    });
  }

  // === Screen 5: Write Your Why (gated) ===
  function renderScreen5_Write(step: HTMLElement): void {
    // Tags showing selected sub-areas
    const selected = progress.selectedSubAreas ?? [];
    const customAreas = progress.customSubAreas ?? [];
    if (selected.length > 0) {
      const tagRow = document.createElement("div");
      tagRow.className = "olen-findwhy-tags";
      for (const areaId of selected) {
        const area = VISION_SUB_AREAS.find((a) => a.id === areaId)
          ?? customAreas.find((a) => a.id === areaId);
        if (!area) continue;
        const catColors = plugin.settings.categoryColors;
        const tag = document.createElement("span");
        tag.className = "olen-findwhy-tag";
        tag.textContent = area.label;
        tag.style.setProperty("--tag-color", catColors[area.category]);
        tagRow.appendChild(tag);
      }
      step.appendChild(tagRow);
    }

    const dialogue = document.createElement("div");
    dialogue.className = "olen-sunday-dialogue";
    dialogue.textContent = "Now that you know what truly matters, close your eyes and vividly imagine your future across each area.";
    step.appendChild(dialogue);

    const textarea = document.createElement("textarea");
    textarea.className = "olen-sunday-textarea";
    textarea.placeholder = "My purpose is...";
    textarea.rows = 5;
    textarea.value = plugin.settings.myWhy ?? "";
    step.appendChild(textarea);

    const desc = document.createElement("div");
    desc.className = "olen-findwhy-description";
    desc.textContent = "This vision must be a life you\u2019d be deeply proud of, one you\u2019d love living every day, and a future worth fighting for. Let this vision sink in deeply. Write it down now and make it your guiding purpose.";
    step.appendChild(desc);

    // Nav
    const nav = createNav(step, {
      back: 4,
      next: 6,
      gated: true,
      allChecked: () => textarea.value.trim().length > 0,
      onNext: async () => {
        plugin.settings.myWhy = textarea.value.trim();
        await plugin.saveSettings();
        markScreenComplete(5);
      },
    });

    textarea.addEventListener("input", () => {
      updateNavState(nav, textarea.value.trim().length > 0);
    });
  }

  // === Screen 6: Structure (gated) ===
  function renderScreen6_Structure(step: HTMLElement): void {
    const screen = SCREENS[6];

    const desc = document.createElement("div");
    desc.className = "olen-findwhy-description";
    desc.textContent = screen.description!;
    step.appendChild(desc);

    const { allChecked, container } = renderCheckboxes(step, 6, screen.commands!);

    const nav = createNav(step, {
      back: 5,
      next: 7,
      gated: true,
      allChecked,
      onNext: () => markScreenComplete(6),
    });

    container.addEventListener("change", () => {
      updateNavState(nav, allChecked());
    });
  }

  // === Screen 7: Open Your Mind (optional) ===
  function renderScreen7_OpenMind(step: HTMLElement): void {
    const screen = SCREENS[7];

    const desc = document.createElement("div");
    desc.className = "olen-findwhy-description";
    desc.textContent = screen.description!;
    step.appendChild(desc);

    renderCheckboxes(step, 7, screen.commands!);

    createNav(step, {
      back: 6,
      next: 8,
      gated: false,
      allChecked: () => true,
      onNext: () => markScreenComplete(7),
    });
  }

  // === Screen 8: Evolve (wisdom) ===
  function renderScreen8_Evolve(step: HTMLElement): void {
    const screen = SCREENS[8];

    const desc = document.createElement("div");
    desc.className = "olen-findwhy-description";
    desc.textContent = screen.description!;
    step.appendChild(desc);

    // Bullet points (not checkboxes)
    const list = document.createElement("div");
    list.className = "olen-findwhy-wisdom-list";
    for (const text of screen.commands!) {
      const item = document.createElement("div");
      item.className = "olen-findwhy-wisdom";
      item.textContent = "\u2022 " + text;
      list.appendChild(item);
    }
    step.appendChild(list);

    // Nav — Done button
    const nav = document.createElement("div");
    nav.className = "olen-findwhy-nav";

    const backBtn = document.createElement("button");
    backBtn.className = "olen-findwhy-nav-btn";
    backBtn.textContent = "\u2190 Previous";
    backBtn.addEventListener("click", () => navigateTo(7));
    nav.appendChild(backBtn);

    const doneBtn = document.createElement("button");
    doneBtn.className = "olen-findwhy-nav-btn olen-findwhy-nav-primary";
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", async () => {
      markScreenComplete(8);
      progress.flowComplete = true;
      await plugin.saveSettings();
      closeModal();
    });
    nav.appendChild(doneBtn);

    step.appendChild(nav);
  }

  // === Helpers ===

  function renderCheckboxes(
    parent: HTMLElement,
    screenIndex: number,
    commands: string[],
  ): { container: HTMLElement; allChecked: () => boolean } {
    const completed = progress.completedCommands[screenIndex] ?? [];
    const container = document.createElement("div");
    container.className = "olen-findwhy-commands";

    for (let i = 0; i < commands.length; i++) {
      const isChecked = completed.includes(i);
      const row = document.createElement("div");
      row.className = "olen-findwhy-command" + (isChecked ? " checked" : "");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = isChecked;
      checkbox.addEventListener("change", async () => {
        await toggleCommand(screenIndex, i);
        row.classList.toggle("checked", checkbox.checked);
      });

      const label = document.createElement("label");
      label.textContent = commands[i];
      label.addEventListener("click", () => checkbox.click());

      row.appendChild(checkbox);
      row.appendChild(label);
      container.appendChild(row);
    }
    parent.appendChild(container);

    const allChecked = (): boolean => {
      const curr = progress.completedCommands[screenIndex] ?? [];
      return curr.length >= commands.length;
    };

    return { container, allChecked };
  }

  function createNav(
    parent: HTMLElement,
    opts: {
      back?: number;
      next: number;
      gated: boolean;
      allChecked: () => boolean;
      onNext?: () => void | Promise<void>;
    },
  ): HTMLElement {
    const nav = document.createElement("div");
    nav.className = "olen-findwhy-nav";

    if (opts.back !== undefined) {
      const backBtn = document.createElement("button");
      backBtn.className = "olen-findwhy-nav-btn";
      backBtn.textContent = "\u2190 Previous";
      backBtn.addEventListener("click", () => navigateTo(opts.back!));
      nav.appendChild(backBtn);
    } else {
      nav.appendChild(document.createElement("div"));
    }

    const nextBtn = document.createElement("button");
    nextBtn.className = "olen-findwhy-nav-btn olen-findwhy-nav-primary";
    nextBtn.textContent = "Next \u2192";

    const enabled = !opts.gated || opts.allChecked();
    if (!enabled) {
      nextBtn.classList.add("disabled");
    }

    nextBtn.addEventListener("click", async () => {
      if (opts.gated && !opts.allChecked()) return;
      if (opts.onNext) await opts.onNext();
      navigateTo(opts.next);
    });
    nav.appendChild(nextBtn);

    parent.appendChild(nav);
    return nav;
  }

  function updateNavState(nav: HTMLElement, enabled: boolean): void {
    const nextBtn = nav.querySelector(".olen-findwhy-nav-primary");
    if (nextBtn) {
      nextBtn.classList.toggle("disabled", !enabled);
    }
  }

  async function toggleCommand(screenIndex: number, cmdIndex: number): Promise<void> {
    if (!progress.completedCommands[screenIndex]) {
      progress.completedCommands[screenIndex] = [];
    }
    const arr = progress.completedCommands[screenIndex];
    const idx = arr.indexOf(cmdIndex);
    if (idx >= 0) {
      arr.splice(idx, 1);
    } else {
      arr.push(cmdIndex);
    }
    await plugin.saveSettings();
  }

  function markScreenComplete(screenIndex: number): void {
    if (screenIndex > progress.lastCompletedScreen) {
      progress.lastCompletedScreen = screenIndex;
    }
    plugin.saveSettings();
  }

  function getFirstIncompleteScreen(plugin: OlenPlugin): number {
    const p = plugin.settings.findingWhyProgress;
    if (p.flowComplete) return 0;
    if (p.lastCompletedScreen < 0) return 0;

    // Walk through screens, skip completed
    for (let i = p.lastCompletedScreen + 1; i < SCREENS.length; i++) {
      // If they took the No path, skip confrontation
      if (i === 3 && !p.tookConfrontationPath) continue;
      return i;
    }
    return 0;
  }

  // Start
  renderScreen(currentScreen);
}
