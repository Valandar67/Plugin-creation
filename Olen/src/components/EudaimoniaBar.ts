// ============================================================
// Olen — Eudaimonia Bar Component
// Segmented progress bar + stat cards
// ============================================================

import type { OlenSettings } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import { toRoman } from "../constants";

const TOTAL_SEGMENTS = 10;

export function renderEudaimoniaBar(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number
): void {
  // --- Eudaimonia Card (segmented bar + chapter) ---
  renderEudaimoniaCard(container, settings, engine, staggerIndex);
}

// ---- Eudaimonia Card ----

function renderEudaimoniaCard(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number
): void {
  const card = container.createDiv({ cls: "olen-card olen-eudaimonia-card" });
  card.style.setProperty("--i", String(staggerIndex));

  // Header: title + XP
  const header = card.createDiv({ cls: "olen-eudaimonia-header" });
  const eudIndex = engine.getEudaimoniaIndex();

  header.createEl("div", {
    cls: "olen-eudaimonia-title",
    text: `Eudaimonia ${toRoman(eudIndex)}`,
  });

  const totalXP = engine.getAllCategoryLevels().reduce((sum, cl) => sum + cl.xp, 0);
  header.createEl("div", {
    cls: "olen-eudaimonia-xp",
    text: `${totalXP} XP`,
  });

  // Segmented progress bar
  const progress = engine.getEudaimoniaProgress(); // 0-100
  const filledSegments = Math.floor(progress / TOTAL_SEGMENTS);
  const hasPartial = progress % TOTAL_SEGMENTS > 0;

  const segments = card.createDiv({ cls: "olen-eudaimonia-segments" });

  for (let i = 0; i < TOTAL_SEGMENTS; i++) {
    let cls = "olen-eudaimonia-segment";
    if (i < filledSegments) {
      cls += " olen-eudaimonia-segment-filled";
    } else if (i === filledSegments && hasPartial) {
      cls += " olen-eudaimonia-segment-partial";
    }
    segments.createDiv({ cls });
  }

  // Chapter label
  const chapter = engine.getChapter();
  card.createEl("div", {
    cls: "olen-eudaimonia-chapter",
    text: `Chapter ${toRoman(chapter.number)}: ${chapter.name}`,
  });
}

