// ============================================================
// Olen — Discipline vs Flow Chart Component
// Donut chart: % Discipline vs % Flow vs % Skipped
// ============================================================

import { App } from "obsidian";
import type { OlenSettings, ActivityConfig } from "../types";

interface SessionTypeCounts {
  discipline: number;
  flow: number;
  skipped: number;
  total: number;
}

export function renderDisciplineFlowChart(
  container: HTMLElement,
  app: App,
  activity: ActivityConfig,
  settings: OlenSettings,
  staggerIndex: number
): void {
  const card = container.createDiv({ cls: "olen-card olen-disc-flow-chart" });
  card.style.setProperty("--i", String(staggerIndex));

  card.createEl("div", { cls: "olen-heading", text: "DISCIPLINE VS FLOW" });

  const counts = getSessionTypeCounts(app, activity);

  if (counts.total === 0) {
    card.createEl("div", { cls: "olen-body-italic", text: "No session data yet." });
    return;
  }

  const chartRow = card.createDiv({ cls: "olen-disc-flow-row" });

  // SVG Donut
  const size = 100;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svg.classList.add("olen-disc-flow-donut");

  // Resolve CSS custom properties for SVG attributes (which can't use var())
  const cs = getComputedStyle(card);
  const resolvedSpiritColor = cs.getPropertyValue("--spirit-color").trim() || "#928d85";
  const resolvedAccentGold = cs.getPropertyValue("--accent-gold").trim() || "#d4a843";
  const resolvedDanger = cs.getPropertyValue("--danger").trim() || "#a83240";
  const resolvedTextPrimary = cs.getPropertyValue("--text-primary").trim() || "#f2ece0";

  const segments = [
    { count: counts.discipline, color: resolvedSpiritColor, label: "Discipline" },
    { count: counts.flow, color: resolvedAccentGold, label: "Flow" },
    { count: counts.skipped, color: resolvedDanger, label: "Skipped" },
  ];

  let currentOffset = 0;
  for (const seg of segments) {
    if (seg.count === 0) continue;
    const fraction = seg.count / counts.total;
    const dashLen = fraction * circumference;

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", String(size / 2));
    circle.setAttribute("cy", String(size / 2));
    circle.setAttribute("r", String(radius));
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", seg.color);
    circle.setAttribute("stroke-width", String(strokeWidth));
    circle.setAttribute("stroke-dasharray", `${dashLen} ${circumference - dashLen}`);
    circle.setAttribute("stroke-dashoffset", String(-currentOffset));
    circle.setAttribute("transform", `rotate(-90 ${size / 2} ${size / 2})`);
    svg.appendChild(circle);

    currentOffset += dashLen;
  }

  // Center text
  const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  text.setAttribute("x", String(size / 2));
  text.setAttribute("y", String(size / 2 + 4));
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("fill", resolvedTextPrimary);
  text.setAttribute("font-size", "14");
  text.setAttribute("font-family", "SF Mono, Courier New, monospace");
  text.textContent = String(counts.total);
  svg.appendChild(text);

  chartRow.appendChild(svg);

  // Legend
  const legend = chartRow.createDiv({ cls: "olen-disc-flow-legend" });
  for (const seg of segments) {
    const pct = counts.total > 0 ? Math.round((seg.count / counts.total) * 100) : 0;
    const row = legend.createDiv({ cls: "olen-disc-flow-legend-item" });
    const dot = row.createEl("span", { cls: "olen-disc-flow-dot" });
    dot.style.background = seg.color;
    row.createEl("span", { text: `${seg.label} ` });
    row.createEl("span", { cls: "olen-data-sm", text: `${pct}% (${seg.count})` });
  }

  // Discipline win streak
  const winStreak = getDisciplineWinStreak(app, activity);
  if (winStreak > 0) {
    card.createEl("div", {
      cls: "olen-disc-flow-streak",
      text: `◆ ${winStreak} consecutive Discipline sessions`,
    });
  }
}

function getSessionTypeCounts(app: App, activity: ActivityConfig): SessionTypeCounts {
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";
  const counts: SessionTypeCounts = { discipline: 0, flow: 0, skipped: 0, total: 0 };

  for (const file of files) {
    if (!file.path.startsWith(normalizedFolder) && file.path !== activity.folder) continue;
    const cache = app.metadataCache.getFileCache(file);
    const fm = cache?.frontmatter;
    if (!fm || fm[activity.property] !== true) continue;

    const type = (fm[`${activity.property}-Type`] as string)?.toLowerCase();
    if (type === "discipline") counts.discipline++;
    else if (type === "flow") counts.flow++;
    else if (type === "skipped") counts.skipped++;
    else counts.discipline++; // default to discipline if type is missing

    counts.total++;
  }

  return counts;
}

function getDisciplineWinStreak(app: App, activity: ActivityConfig): number {
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";

  const sessions = files
    .filter((f) => {
      if (!f.path.startsWith(normalizedFolder) && f.path !== activity.folder) return false;
      const cache = app.metadataCache.getFileCache(f);
      return cache?.frontmatter?.[activity.property] === true;
    })
    .sort((a, b) => b.stat.mtime - a.stat.mtime);

  let streak = 0;
  for (const file of sessions) {
    const cache = app.metadataCache.getFileCache(file);
    const type = (cache?.frontmatter?.[`${activity.property}-Type`] as string)?.toLowerCase();
    if (type === "discipline" || (!type && true)) {
      streak++;
    } else {
      break;
    }
  }

  return streak;
}
