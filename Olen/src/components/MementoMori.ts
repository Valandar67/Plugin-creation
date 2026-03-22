// ============================================================
// Olen — Memento Mori (Life in Weeks)
// Full grid + compact dashboard version
// ============================================================

import type { OlenSettings } from "../types";
import { LIFE_EXPECTANCY_MALE, LIFE_EXPECTANCY_FEMALE } from "../constants";

/** Resolve life expectancy from settings */
function resolveExpectancy(settings: OlenSettings): number {
  const stats = settings.personalStats;
  if (stats.lifeExpectancy > 0) return stats.lifeExpectancy;
  return stats.gender === "female" ? LIFE_EXPECTANCY_FEMALE : LIFE_EXPECTANCY_MALE;
}

interface MementoData {
  totalWeeks: number;
  weeksLived: number;
  weeksLeft: number;
  expectancy: number;
  birthDate: Date;
}

function calculateMementoData(settings: OlenSettings): MementoData | null {
  const stats = settings.personalStats;
  if (!stats.birthdate) return null;

  const expectancy = resolveExpectancy(settings);
  const totalWeeks = Math.floor(expectancy * 52.1775);
  const birthDate = new Date(stats.birthdate);
  if (isNaN(birthDate.getTime())) return null;

  const weeksLived = Math.floor(
    (Date.now() - birthDate.getTime()) / (7 * 24 * 60 * 60 * 1000)
  );
  const weeksLeft = Math.max(0, totalWeeks - weeksLived);

  return { totalWeeks, weeksLived, weeksLeft, expectancy, birthDate };
}

/**
 * Full Memento Mori grid for DreamBoardView.
 * Grid of tiny squares (one per week), rows = years.
 */
export function renderMementoMoriFull(
  root: HTMLElement,
  settings: OlenSettings,
  staggerIdx: number,
  onEditExpectancy?: () => void,
): void {
  const data = calculateMementoData(settings);

  const section = root.createDiv({ cls: "olen-card olen-memento-mori-card" });
  section.style.setProperty("--i", String(staggerIdx));

  // Header
  const header = section.createDiv({ cls: "olen-memento-mori-header" });
  header.createEl("div", { cls: "olen-heading", text: "MEMENTO MORI" });

  if (onEditExpectancy) {
    const gear = header.createEl("button", {
      cls: "olen-memento-mori-gear",
      text: "\u2699",
    });
    gear.setAttribute("aria-label", "Override life expectancy");
    gear.addEventListener("click", (e) => {
      e.stopPropagation();
      onEditExpectancy();
    });
  }

  if (!data) {
    section.createEl("div", {
      cls: "olen-data-sm",
      text: "Set your birthdate in Settings → Personal Stats to see your life in weeks.",
      attr: { style: "opacity: 0.6; padding: 16px 0;" },
    });
    return;
  }

  // Stats line
  const statsLine = section.createDiv({ cls: "olen-memento-mori-stats" });
  statsLine.createEl("span", {
    text: `You have lived ${data.weeksLived.toLocaleString()} weeks.`,
  });
  statsLine.createEl("span", {
    text: ` You have ~${data.weeksLeft.toLocaleString()} weeks left.`,
    attr: { style: "opacity: 0.7;" },
  });

  // Grid: rows = years, cols = 52 weeks
  const yearsTotal = Math.ceil(data.totalWeeks / 52);
  const grid = section.createDiv({ cls: "olen-memento-mori-grid" });

  for (let year = 0; year < yearsTotal; year++) {
    for (let week = 0; week < 52; week++) {
      const weekIndex = year * 52 + week;
      if (weekIndex >= data.totalWeeks) break;

      const dot = grid.createDiv({ cls: "olen-memento-mori-dot" });

      if (weekIndex < data.weeksLived) {
        dot.classList.add("olen-memento-mori-dot-lived");
      } else if (weekIndex === data.weeksLived) {
        dot.classList.add("olen-memento-mori-dot-current");
      }
    }
  }

  // Countdown clock
  const countdown = section.createDiv({ cls: "olen-memento-mori-countdown" });
  const remainingMs = data.weeksLeft * 7 * 24 * 60 * 60 * 1000;
  const targetDate = new Date(Date.now() + remainingMs);

  const diffMs = targetDate.getTime() - Date.now();
  const years = Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000));
  const months = Math.floor(
    (diffMs % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000)
  );
  const days = Math.floor(
    (diffMs % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  const hours = Math.floor(
    (diffMs % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );

  const units = [
    { value: years, label: "years" },
    { value: months, label: "months" },
    { value: days, label: "days" },
    { value: hours, label: "hours" },
  ];

  for (const unit of units) {
    const cell = countdown.createDiv({ cls: "olen-memento-mori-countdown-cell" });
    cell.createEl("div", { cls: "olen-memento-mori-countdown-value", text: String(unit.value) });
    cell.createEl("div", { cls: "olen-memento-mori-countdown-label", text: unit.label });
  }
}

/**
 * Compact Memento Mori for the dashboard section order.
 * Single row showing percentage bar + "X weeks left" text.
 */
export function renderMementoMoriCompact(
  root: HTMLElement,
  settings: OlenSettings,
  staggerIdx: number,
): void {
  const data = calculateMementoData(settings);
  if (!data) return;

  const card = root.createDiv({ cls: "olen-card olen-memento-mori-compact" });
  card.style.setProperty("--i", String(staggerIdx));

  const percent = Math.min(100, Math.round((data.weeksLived / data.totalWeeks) * 100));

  const row = card.createDiv({ cls: "olen-memento-mori-compact-row" });

  row.createEl("span", {
    cls: "olen-heading",
    text: "MEMENTO MORI",
  });

  const barWrap = row.createDiv({ cls: "olen-memento-mori-compact-bar" });
  const fill = barWrap.createDiv({ cls: "olen-memento-mori-compact-fill" });
  fill.style.width = `${percent}%`;

  row.createEl("span", {
    cls: "olen-data-sm",
    text: `${data.weeksLeft.toLocaleString()} weeks left`,
    attr: { style: "white-space: nowrap;" },
  });
}
