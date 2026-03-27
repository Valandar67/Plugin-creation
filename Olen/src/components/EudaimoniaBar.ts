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
  // --- 1. Eudaimonia Card (segmented bar + chapter) ---
  renderEudaimoniaCard(container, settings, engine, staggerIndex);

  // --- 2. Stat Cards Row (separate from the card) ---
  renderStatCards(container, engine, staggerIndex + 1);
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

// ---- Stat Cards ----

function renderStatCards(
  container: HTMLElement,
  engine: OlenEngine,
  staggerIndex: number
): void {
  const grid = container.createDiv({ cls: "olen-stats-grid" });
  grid.style.setProperty("--i", String(staggerIndex));

  const totalTasks = engine.getTotalCompletions();
  const streak = engine.getOverallStreak();
  const presence = engine.getDaysOfPresence();

  // Objectives card
  createStatCard(grid, "\u{1F3AF}", totalTasks, "Objectives");

  // Streak card (with streak dots)
  createStatCard(grid, "\u{1F525}", streak, "Streak", streak);

  // Consistency card
  createStatCard(grid, "\u{2728}", presence, "Consistency");
}

function createStatCard(
  parent: HTMLElement,
  icon: string,
  value: number,
  label: string,
  streakDays?: number
): void {
  const card = parent.createDiv({ cls: "olen-stat-card" });

  card.createEl("div", { cls: "olen-stat-card-icon", text: icon });
  card.createEl("div", { cls: "olen-stat-card-value", text: String(value) });
  card.createEl("div", { cls: "olen-stat-card-label", text: label });

  // Streak dots (show last 7 days)
  if (streakDays !== undefined) {
    const dots = card.createDiv({ cls: "olen-stat-card-dots" });
    for (let i = 0; i < 7; i++) {
      let cls = "olen-stat-dot";
      if (i < streakDays) {
        cls += " olen-stat-dot-active";
      }
      dots.createDiv({ cls });
    }
  }
}
