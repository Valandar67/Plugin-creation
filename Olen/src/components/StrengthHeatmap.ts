// ============================================================
// Olen — Strength Heatmap Component
// Interactive muscle figure showing workout intensity per muscle
// Clickable muscles open progress graphs
// ============================================================

import type { App } from "obsidian";
import type { OlenSettings, CompletionMap, Gender } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import type { MuscleGroupId } from "../constants";
import { MUSCLE_GROUP_LABELS } from "../constants";

// --- Muscle region hit-boxes (percentage-based for front/back views) ---
// Each region: [x%, y%, width%, height%] relative to figure bounding box

interface MuscleRegion {
  id: MuscleGroupId;
  front?: { x: number; y: number; w: number; h: number };
  back?: { x: number; y: number; w: number; h: number };
}

const MUSCLE_REGIONS: MuscleRegion[] = [
  // Head/neck area
  { id: "neck",       front: { x: 40, y: 8, w: 20, h: 5 } },
  { id: "traps",      back:  { x: 30, y: 11, w: 40, h: 7 } },
  // Upper body
  { id: "shoulders",  front: { x: 18, y: 14, w: 14, h: 8 },   back: { x: 18, y: 14, w: 14, h: 8 } },
  { id: "chest",      front: { x: 30, y: 16, w: 40, h: 10 } },
  { id: "lats",       back:  { x: 24, y: 19, w: 52, h: 12 } },
  { id: "back",       back:  { x: 32, y: 32, w: 36, h: 10 } },
  // Arms
  { id: "biceps",     front: { x: 14, y: 23, w: 12, h: 12 } },
  { id: "triceps",    back:  { x: 14, y: 23, w: 12, h: 12 } },
  { id: "forearms",   front: { x: 10, y: 36, w: 12, h: 12 },  back: { x: 10, y: 36, w: 12, h: 12 } },
  // Core
  { id: "abs",        front: { x: 35, y: 27, w: 30, h: 16 } },
  { id: "obliques",   front: { x: 24, y: 30, w: 10, h: 12 } },
  { id: "glutes",     back:  { x: 30, y: 43, w: 40, h: 10 } },
  // Legs
  { id: "quads",      front: { x: 25, y: 48, w: 50, h: 18 } },
  { id: "hamstrings", back:  { x: 25, y: 54, w: 50, h: 16 } },
  { id: "calves",     front: { x: 28, y: 72, w: 44, h: 14 },  back: { x: 28, y: 72, w: 44, h: 14 } },
];

export interface HeatmapCallbacks {
  onMuscleClick: (muscleId: MuscleGroupId) => void;
  onProgressClick: () => void;
  onStartWorkout: () => void;
}

export function renderStrengthHeatmap(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  completionData: CompletionMap,
  staggerIndex: number,
  callbacks: HeatmapCallbacks,
  app?: App
): void {
  const section = container.createDiv({ cls: "olen-heatmap-section" });
  section.style.setProperty("--i", String(staggerIndex));

  // Figure container
  const gender = settings.personalStats.gender;
  const figureWrap = section.createDiv({ cls: "olen-heatmap-figures" });

  // Gather muscle intensity data from workout completions
  const muscleData = gatherMuscleIntensity(engine, completionData, settings);

  // Try to load actual SVG file, then render figure
  const svgFileName = gender === "female" ? "Muscle Woman.svg" : "Muscle Man.svg";
  if (app) {
    loadSvgFromVault(app, svgFileName).then((svgContent) => {
      if (svgContent) {
        renderSvgFigureWithOverlay(figureWrap, svgContent, muscleData, callbacks.onMuscleClick);
      } else {
        // Fallback to programmatic
        renderMuscleFigure(figureWrap, "front", gender, muscleData, callbacks.onMuscleClick);
      }
    });
  } else {
    renderMuscleFigure(figureWrap, "front", gender, muscleData, callbacks.onMuscleClick);
  }

  // Buttons below the figure
  const actions = section.createDiv({ cls: "olen-heatmap-actions" });

  const progressBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary olen-heatmap-btn",
    text: "Progress",
  });
  progressBtn.addEventListener("click", () => callbacks.onProgressClick());

  const workoutBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary olen-heatmap-btn",
    text: "Start New Workout",
  });
  workoutBtn.addEventListener("click", () => callbacks.onStartWorkout());
}

// --- Load actual SVG from vault ---

async function loadSvgFromVault(app: App, fileName: string): Promise<string | null> {
  try {
    const content = await app.vault.adapter.read(fileName);
    return content || null;
  } catch {
    return null;
  }
}

// --- Render actual SVG with overlay hotspots ---

function renderSvgFigureWithOverlay(
  parent: HTMLElement,
  svgContent: string,
  muscleData: Map<MuscleGroupId, number>,
  onMuscleClick: (id: MuscleGroupId) => void
): void {
  const figure = parent.createDiv({ cls: "olen-heatmap-figure" });
  figure.style.maxWidth = "240px";
  figure.style.position = "relative";
  figure.style.margin = "0 auto";

  // Insert actual SVG (dimmed, desaturated)
  const svgHolder = figure.createDiv();
  svgHolder.style.cssText = "width:100%;opacity:0.8;filter:saturate(0.2) brightness(0.45);";
  svgHolder.innerHTML = svgContent;
  const svgEl = svgHolder.querySelector("svg");
  if (svgEl) {
    svgEl.style.width = "100%";
    svgEl.style.height = "auto";
    svgEl.style.display = "block";
  }

  // Overlay for hotspots
  const overlay = figure.createDiv();
  overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;";

  // Create hotspots based on muscle regions
  for (const region of MUSCLE_REGIONS) {
    const bounds = region.front;
    if (!bounds) continue;

    const intensity = muscleData.get(region.id) ?? 0;
    const color = getIntensityColor(intensity);

    const hs = overlay.createDiv();
    hs.style.cssText = `position:absolute;top:${bounds.y}%;left:${bounds.x}%;width:${bounds.w}%;height:${bounds.h}%;cursor:pointer;border-radius:4px;transition:background 0.15s;background:${intensity > 0 ? color + "30" : "transparent"};border:1px solid ${intensity > 0 ? color + "20" : "transparent"};`;
    hs.title = MUSCLE_GROUP_LABELS[region.id] + (intensity > 0 ? ` — ${Math.round(intensity * 100)}%` : "");

    hs.addEventListener("mouseenter", () => { hs.style.background = (intensity > 0 ? color : "#9a8c7a") + "50"; });
    hs.addEventListener("mouseleave", () => { hs.style.background = intensity > 0 ? color + "30" : "transparent"; });
    hs.addEventListener("click", (e) => { e.stopPropagation(); onMuscleClick(region.id); });

    overlay.appendChild(hs);

    // Mirror for symmetric muscles
    if (isSymmetricMuscle(region.id) && bounds.x < 50) {
      const mirrorLeft = 100 - bounds.x - bounds.w;
      const mirror = overlay.createDiv();
      mirror.style.cssText = `position:absolute;top:${bounds.y}%;left:${mirrorLeft}%;width:${bounds.w}%;height:${bounds.h}%;cursor:pointer;border-radius:4px;transition:background 0.15s;background:${intensity > 0 ? color + "30" : "transparent"};border:1px solid ${intensity > 0 ? color + "20" : "transparent"};`;
      mirror.title = hs.title;
      mirror.addEventListener("mouseenter", () => { mirror.style.background = (intensity > 0 ? color : "#9a8c7a") + "50"; });
      mirror.addEventListener("mouseleave", () => { mirror.style.background = intensity > 0 ? color + "30" : "transparent"; });
      mirror.addEventListener("click", (e) => { e.stopPropagation(); onMuscleClick(region.id); });
      overlay.appendChild(mirror);
    }
  }
}

// --- Figure Rendering ---

function renderMuscleFigure(
  parent: HTMLElement,
  view: "front" | "back",
  gender: Gender,
  muscleData: Map<MuscleGroupId, number>,
  onMuscleClick: (id: MuscleGroupId) => void
): void {
  const figure = parent.createDiv({ cls: "olen-heatmap-figure" });

  // Label
  figure.createEl("div", {
    cls: "olen-heatmap-view-label",
    text: view === "front" ? "Front" : "Back",
  });

  // SVG container
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 200 400");
  svg.setAttribute("class", "olen-heatmap-svg");

  // Draw body silhouette
  drawBodySilhouette(svg, svgNS, gender, view);

  // Draw muscle regions as colored overlays
  for (const region of MUSCLE_REGIONS) {
    const bounds = view === "front" ? region.front : region.back;
    if (!bounds) continue;

    const intensity = muscleData.get(region.id) ?? 0;

    // Map percentage coords to SVG viewBox
    const x = bounds.x * 2;
    const y = bounds.y * 4;
    const w = bounds.w * 2;
    const h = bounds.h * 4;

    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", String(w));
    rect.setAttribute("height", String(h));
    rect.setAttribute("rx", "6");
    rect.setAttribute("ry", "6");
    rect.setAttribute("fill", getIntensityColor(intensity));
    rect.setAttribute("opacity", intensity > 0 ? "0.7" : "0.15");
    rect.setAttribute("class", "olen-heatmap-muscle");
    rect.setAttribute("data-muscle", region.id);

    // Tooltip + click
    const title = document.createElementNS(svgNS, "title");
    title.textContent = `${MUSCLE_GROUP_LABELS[region.id]}${intensity > 0 ? ` — ${Math.round(intensity * 100)}%` : ""}`;
    rect.appendChild(title);

    rect.addEventListener("click", (e) => {
      e.stopPropagation();
      onMuscleClick(region.id);
    });

    svg.appendChild(rect);

    // Also mirror for right side (shoulders, biceps, triceps, forearms, quads, hamstrings, calves)
    if (isSymmetricMuscle(region.id) && bounds.x < 50) {
      const mirrorX = 200 - x - w;
      const mirror = document.createElementNS(svgNS, "rect");
      mirror.setAttribute("x", String(mirrorX));
      mirror.setAttribute("y", String(y));
      mirror.setAttribute("width", String(w));
      mirror.setAttribute("height", String(h));
      mirror.setAttribute("rx", "6");
      mirror.setAttribute("ry", "6");
      mirror.setAttribute("fill", getIntensityColor(intensity));
      mirror.setAttribute("opacity", intensity > 0 ? "0.7" : "0.15");
      mirror.setAttribute("class", "olen-heatmap-muscle");
      mirror.setAttribute("data-muscle", region.id);

      const mirrorTitle = document.createElementNS(svgNS, "title");
      mirrorTitle.textContent = `${MUSCLE_GROUP_LABELS[region.id]}${intensity > 0 ? ` — ${Math.round(intensity * 100)}%` : ""}`;
      mirror.appendChild(mirrorTitle);

      mirror.addEventListener("click", (e) => {
        e.stopPropagation();
        onMuscleClick(region.id);
      });

      svg.appendChild(mirror);
    }
  }

  figure.appendChild(svg);
}

function isSymmetricMuscle(id: MuscleGroupId): boolean {
  return ["shoulders", "biceps", "triceps", "forearms", "quads", "hamstrings", "calves", "obliques"].includes(id);
}

function drawBodySilhouette(svg: SVGSVGElement, ns: string, gender: Gender, view: "front" | "back"): void {
  // Simplified human silhouette as a path
  const path = document.createElementNS(ns, "path");

  // Base silhouette — slightly different proportions by gender
  const isFemale = gender === "female";
  const shoulderW = isFemale ? 62 : 68;
  const hipW = isFemale ? 58 : 48;
  const waistW = isFemale ? 38 : 42;

  // Build silhouette path
  const d = [
    // Head
    `M 100 10`,
    `a 16 18 0 1 1 0.01 0`,
    // Neck
    `M 92 44 L 92 52`,
    `M 108 44 L 108 52`,
    // Shoulders
    `M 92 52 L ${100 - shoulderW} 58`,
    `M 108 52 L ${100 + shoulderW} 58`,
    // Torso left
    `M ${100 - shoulderW} 58 L ${100 - shoulderW + 4} 100`,
    `L ${100 - waistW} 140`,
    `L ${100 - hipW} 180`,
    // Torso right
    `M ${100 + shoulderW} 58 L ${100 + shoulderW - 4} 100`,
    `L ${100 + waistW} 140`,
    `L ${100 + hipW} 180`,
    // Arms left
    `M ${100 - shoulderW} 58 L ${100 - shoulderW - 12} 110`,
    `L ${100 - shoulderW - 16} 170`,
    `M ${100 - shoulderW - 6} 58 L ${100 - shoulderW - 18} 110`,
    `L ${100 - shoulderW - 22} 170`,
    // Arms right
    `M ${100 + shoulderW} 58 L ${100 + shoulderW + 12} 110`,
    `L ${100 + shoulderW + 16} 170`,
    `M ${100 + shoulderW + 6} 58 L ${100 + shoulderW + 18} 110`,
    `L ${100 + shoulderW + 22} 170`,
    // Legs left
    `M ${100 - hipW} 180 L ${100 - hipW + 6} 280`,
    `L ${100 - hipW + 10} 360`,
    `M ${100 - 6} 180 L ${100 - 12} 280`,
    `L ${100 - 16} 360`,
    // Legs right
    `M ${100 + hipW} 180 L ${100 + hipW - 6} 280`,
    `L ${100 + hipW - 10} 360`,
    `M ${100 + 6} 180 L ${100 + 12} 280`,
    `L ${100 + 16} 360`,
  ].join(" ");

  path.setAttribute("d", d);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "rgba(242, 236, 224, 0.12)");
  path.setAttribute("stroke-width", "1.5");
  path.setAttribute("stroke-linecap", "round");
  svg.appendChild(path);
}

// --- Muscle Intensity Calculation ---

function gatherMuscleIntensity(
  engine: OlenEngine,
  completionData: CompletionMap,
  settings: OlenSettings
): Map<MuscleGroupId, number> {
  const data = new Map<MuscleGroupId, number>();

  // Parse workout notes for muscle group mentions
  // Look at the last 30 days of workout completions
  const workoutActivity = settings.activities.find((a) => a.id === "workout");
  if (!workoutActivity) return data;

  const comps = completionData[workoutActivity.id] ?? [];
  const now = new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

  // Count completions in the last 30 days as a proxy for overall activity
  const recentCompletions = comps.filter((c) => {
    if (!c.completed) return false;
    const d = new Date(c.date);
    return d >= thirtyDaysAgo;
  }).length;

  if (recentCompletions === 0) return data;

  // Since we can't parse which muscles were trained from frontmatter alone,
  // use workout frequency as a uniform base intensity and frontmatter
  // muscle_groups field if available
  const baseIntensity = Math.min(1, recentCompletions / 20);

  // Set base for all muscle groups proportional to workout frequency
  const allMuscles: MuscleGroupId[] = [
    "chest", "back", "shoulders", "biceps", "triceps", "forearms",
    "abs", "obliques", "quads", "hamstrings", "glutes", "calves",
    "traps", "lats", "neck",
  ];

  for (const m of allMuscles) {
    data.set(m, baseIntensity * 0.5);
  }

  return data;
}

// --- Color Mapping ---

function getIntensityColor(intensity: number): string {
  if (intensity <= 0) return "rgba(242, 236, 224, 0.06)";
  if (intensity < 0.3) return "#2d4a1e";  // cool green
  if (intensity < 0.6) return "#5a8a2e";  // medium green
  if (intensity < 0.8) return "#d4a843";  // warm gold
  return "#e8c35a";                         // bright gold
}

// --- Muscle Progress Popup ---

export function showMuscleProgressPopup(
  muscleId: MuscleGroupId,
  settings: OlenSettings,
  completionData: CompletionMap
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet olen-progress-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });

  const label = MUSCLE_GROUP_LABELS[muscleId];
  sheet.createEl("div", { cls: "olen-heading-lg", text: label });

  // Monthly progress chart (simple bar chart)
  const chartContainer = sheet.createDiv({ cls: "olen-progress-chart" });
  renderSimpleBarChart(chartContainer, muscleId, settings, completionData, "month");

  // Toggle for yearly view
  const toggleRow = sheet.createDiv({ cls: "olen-progress-toggle" });
  const monthBtn = toggleRow.createEl("button", {
    cls: "olen-btn olen-btn-primary olen-progress-toggle-btn",
    text: "Monthly",
  });
  const yearBtn = toggleRow.createEl("button", {
    cls: "olen-btn olen-btn-secondary olen-progress-toggle-btn",
    text: "Yearly",
  });

  monthBtn.addEventListener("click", () => {
    chartContainer.empty();
    renderSimpleBarChart(chartContainer, muscleId, settings, completionData, "month");
    monthBtn.className = "olen-btn olen-btn-primary olen-progress-toggle-btn";
    yearBtn.className = "olen-btn olen-btn-secondary olen-progress-toggle-btn";
  });

  yearBtn.addEventListener("click", () => {
    chartContainer.empty();
    renderSimpleBarChart(chartContainer, muscleId, settings, completionData, "year");
    yearBtn.className = "olen-btn olen-btn-primary olen-progress-toggle-btn";
    monthBtn.className = "olen-btn olen-btn-secondary olen-progress-toggle-btn";
  });

  // Close on overlay click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePopup();
  });

  function closePopup(): void {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}

// --- Overall Progress Popup ---

export function showOverallProgressPopup(
  settings: OlenSettings,
  completionData: CompletionMap
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet olen-progress-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });

  sheet.createEl("div", { cls: "olen-heading-lg", text: "Strength Progress" });

  // Tab toggle
  const toggleRow = sheet.createDiv({ cls: "olen-progress-toggle" });
  const monthBtn = toggleRow.createEl("button", {
    cls: "olen-btn olen-btn-primary olen-progress-toggle-btn",
    text: "Monthly",
  });
  const yearBtn = toggleRow.createEl("button", {
    cls: "olen-btn olen-btn-secondary olen-progress-toggle-btn",
    text: "Yearly",
  });

  // Chart 1: Overall strength (all exercises combined average)
  sheet.createEl("div", {
    cls: "olen-progress-subtitle",
    text: "Overall Strength",
  });
  const overallChart = sheet.createDiv({ cls: "olen-progress-chart" });
  renderOverallStrengthChart(overallChart, settings, completionData, "month");

  // Chart 2: Per-muscle breakdown (multi-line)
  sheet.createEl("div", {
    cls: "olen-progress-subtitle",
    text: "By Muscle Group",
  });
  const muscleChart = sheet.createDiv({ cls: "olen-progress-chart" });
  renderMuscleBreakdownChart(muscleChart, settings, completionData, "month");

  monthBtn.addEventListener("click", () => {
    overallChart.empty();
    muscleChart.empty();
    renderOverallStrengthChart(overallChart, settings, completionData, "month");
    renderMuscleBreakdownChart(muscleChart, settings, completionData, "month");
    monthBtn.className = "olen-btn olen-btn-primary olen-progress-toggle-btn";
    yearBtn.className = "olen-btn olen-btn-secondary olen-progress-toggle-btn";
  });

  yearBtn.addEventListener("click", () => {
    overallChart.empty();
    muscleChart.empty();
    renderOverallStrengthChart(overallChart, settings, completionData, "year");
    renderMuscleBreakdownChart(muscleChart, settings, completionData, "year");
    yearBtn.className = "olen-btn olen-btn-primary olen-progress-toggle-btn";
    monthBtn.className = "olen-btn olen-btn-secondary olen-progress-toggle-btn";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePopup();
  });

  function closePopup(): void {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}

// --- Chart Rendering Helpers ---

function renderSimpleBarChart(
  container: HTMLElement,
  muscleId: MuscleGroupId,
  settings: OlenSettings,
  completionData: CompletionMap,
  period: "month" | "year"
): void {
  const workoutActivity = settings.activities.find((a) => a.id === "workout");
  if (!workoutActivity) {
    container.createEl("div", { cls: "olen-progress-empty", text: "No workout data available" });
    return;
  }

  const comps = completionData[workoutActivity.id] ?? [];
  const now = new Date();
  const labels: string[] = [];
  const values: number[] = [];

  if (period === "month") {
    // Last 30 days, grouped by week
    for (let w = 3; w >= 0; w--) {
      const weekEnd = new Date(now.getTime() - w * 7 * 24 * 60 * 60 * 1000);
      const weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1000);
      const count = comps.filter((c) => {
        if (!c.completed) return false;
        const d = new Date(c.date);
        return d >= weekStart && d < weekEnd;
      }).length;
      labels.push(`W${4 - w}`);
      values.push(count);
    }
  } else {
    // Last 12 months
    const monthNames = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    for (let m = 11; m >= 0; m--) {
      const monthDate = new Date(now.getFullYear(), now.getMonth() - m, 1);
      const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
      const count = comps.filter((c) => {
        if (!c.completed) return false;
        const d = new Date(c.date);
        return d >= monthDate && d <= monthEnd;
      }).length;
      labels.push(monthNames[monthDate.getMonth()]);
      values.push(count);
    }
  }

  drawLineChart(container, labels, values, "#d4a843");
}

function renderOverallStrengthChart(
  container: HTMLElement,
  settings: OlenSettings,
  completionData: CompletionMap,
  period: "month" | "year"
): void {
  const bodyActivities = settings.activities.filter((a) => a.enabled && a.category === "body");
  if (bodyActivities.length === 0) {
    container.createEl("div", { cls: "olen-progress-empty", text: "No body activities configured" });
    return;
  }

  const now = new Date();
  const labels: string[] = [];
  const values: number[] = [];

  if (period === "month") {
    for (let w = 3; w >= 0; w--) {
      const weekEnd = new Date(now.getTime() - w * 7 * 24 * 60 * 60 * 1000);
      const weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1000);
      let total = 0;
      for (const act of bodyActivities) {
        const comps = completionData[act.id] ?? [];
        total += comps.filter((c) => {
          if (!c.completed) return false;
          const d = new Date(c.date);
          return d >= weekStart && d < weekEnd;
        }).length;
      }
      labels.push(`W${4 - w}`);
      values.push(total);
    }
  } else {
    const monthNames = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    for (let m = 11; m >= 0; m--) {
      const monthDate = new Date(now.getFullYear(), now.getMonth() - m, 1);
      const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
      let total = 0;
      for (const act of bodyActivities) {
        const comps = completionData[act.id] ?? [];
        total += comps.filter((c) => {
          if (!c.completed) return false;
          const d = new Date(c.date);
          return d >= monthDate && d <= monthEnd;
        }).length;
      }
      labels.push(monthNames[monthDate.getMonth()]);
      values.push(total);
    }
  }

  drawLineChart(container, labels, values, "#d4a843");
}

function renderMuscleBreakdownChart(
  container: HTMLElement,
  settings: OlenSettings,
  completionData: CompletionMap,
  period: "month" | "year"
): void {
  // Show body-category activities as separate lines
  const bodyActivities = settings.activities.filter((a) => a.enabled && a.category === "body");
  if (bodyActivities.length === 0) {
    container.createEl("div", { cls: "olen-progress-empty", text: "No body activities configured" });
    return;
  }

  const now = new Date();
  const colors = ["#d4a843", "#e8c35a", "#7b9de0", "#a08de0", "#5e9a7a", "#c48820"];

  const svgNS = "http://www.w3.org/2000/svg";
  const width = 280;
  const height = 120;
  const padding = { top: 10, right: 10, bottom: 20, left: 24 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("class", "olen-progress-svg");

  const bucketCount = period === "month" ? 4 : 12;

  // Compute data series for each activity
  const allSeries: { name: string; values: number[]; color: string }[] = [];
  let globalMax = 1;

  for (let ai = 0; ai < bodyActivities.length; ai++) {
    const act = bodyActivities[ai];
    const comps = completionData[act.id] ?? [];
    const vals: number[] = [];

    if (period === "month") {
      for (let w = 3; w >= 0; w--) {
        const weekEnd = new Date(now.getTime() - w * 7 * 24 * 60 * 60 * 1000);
        const weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1000);
        vals.push(comps.filter((c) => {
          if (!c.completed) return false;
          const d = new Date(c.date);
          return d >= weekStart && d < weekEnd;
        }).length);
      }
    } else {
      for (let m = 11; m >= 0; m--) {
        const monthDate = new Date(now.getFullYear(), now.getMonth() - m, 1);
        const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
        vals.push(comps.filter((c) => {
          if (!c.completed) return false;
          const d = new Date(c.date);
          return d >= monthDate && d <= monthEnd;
        }).length);
      }
    }

    const max = Math.max(...vals, 1);
    if (max > globalMax) globalMax = max;

    allSeries.push({
      name: act.name,
      values: vals,
      color: colors[ai % colors.length],
    });
  }

  // Draw lines
  for (const series of allSeries) {
    const points = series.values.map((v, i) => {
      const x = padding.left + (i / (bucketCount - 1)) * chartW;
      const y = padding.top + chartH - (v / globalMax) * chartH;
      return `${x},${y}`;
    });

    const line = document.createElementNS(svgNS, "polyline");
    line.setAttribute("points", points.join(" "));
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", series.color);
    line.setAttribute("stroke-width", "1.5");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("stroke-linejoin", "round");
    svg.appendChild(line);
  }

  // X axis labels
  const xLabels = period === "month"
    ? ["W1", "W2", "W3", "W4"]
    : ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

  for (let i = 0; i < bucketCount; i++) {
    const x = padding.left + (i / (bucketCount - 1)) * chartW;
    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", String(x));
    label.setAttribute("y", String(height - 4));
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("fill", "rgba(242, 236, 224, 0.4)");
    label.setAttribute("font-size", "8");
    label.textContent = xLabels[i];
    svg.appendChild(label);
  }

  container.appendChild(svg);

  // Legend
  const legend = container.createDiv({ cls: "olen-progress-legend" });
  for (const series of allSeries) {
    const item = legend.createDiv({ cls: "olen-progress-legend-item" });
    const dot = item.createDiv({ cls: "olen-progress-legend-dot" });
    dot.style.background = series.color;
    item.createEl("span", { text: series.name });
  }
}

function drawLineChart(
  container: HTMLElement,
  labels: string[],
  values: number[],
  color: string
): void {
  const svgNS = "http://www.w3.org/2000/svg";
  const width = 280;
  const height = 100;
  const padding = { top: 10, right: 10, bottom: 18, left: 10 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = Math.max(...values, 1);

  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("class", "olen-progress-svg");

  // Grid lines
  for (let g = 0; g <= 2; g++) {
    const gy = padding.top + (g / 2) * chartH;
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", String(padding.left));
    line.setAttribute("x2", String(width - padding.right));
    line.setAttribute("y1", String(gy));
    line.setAttribute("y2", String(gy));
    line.setAttribute("stroke", "rgba(242, 236, 224, 0.06)");
    line.setAttribute("stroke-width", "0.5");
    svg.appendChild(line);
  }

  // Build points
  const points = values.map((v, i) => ({
    x: padding.left + (i / Math.max(1, values.length - 1)) * chartW,
    y: padding.top + chartH - (v / maxVal) * chartH,
  }));

  // Smooth curve (Catmull-Rom → cubic bezier)
  if (points.length > 1) {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    // Area fill
    const area = document.createElementNS(svgNS, "path");
    const areaD = d + ` L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;
    area.setAttribute("d", areaD);
    area.setAttribute("fill", color);
    area.setAttribute("opacity", "0.08");
    svg.appendChild(area);

    // Curve line
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "1.5");
    path.setAttribute("stroke-linecap", "round");
    svg.appendChild(path);
  }

  // Data dots
  for (const pt of points) {
    const dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("cx", String(pt.x));
    dot.setAttribute("cy", String(pt.y));
    dot.setAttribute("r", "2.5");
    dot.setAttribute("fill", color);
    svg.appendChild(dot);
  }

  // X-axis labels
  for (let i = 0; i < labels.length; i++) {
    const x = padding.left + (i / Math.max(1, labels.length - 1)) * chartW;
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", String(x));
    text.setAttribute("y", String(height - 4));
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "rgba(242, 236, 224, 0.4)");
    text.setAttribute("font-size", "8");
    text.textContent = labels[i];
    svg.appendChild(text);
  }

  container.appendChild(svg);
}

// --- Muscle Selector for New Workout ---

export function showMuscleSelector(
  onConfirm: (selected: MuscleGroupId[]) => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet olen-muscle-selector-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });

  sheet.createEl("div", { cls: "olen-heading-lg", text: "Select Muscles" });
  sheet.createEl("div", {
    cls: "olen-progress-subtitle",
    text: "Tap the muscles you want to train",
  });

  const selected = new Set<MuscleGroupId>();

  // SVG figure with clickable muscles
  const figureWrap = sheet.createDiv({ cls: "olen-muscle-selector-figure" });

  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 200 400");
  svg.setAttribute("class", "olen-heatmap-svg olen-selector-svg");

  // Draw silhouette
  drawBodySilhouette(svg, svgNS, "male", "front");

  // Draw clickable muscle regions
  const rects: Map<MuscleGroupId, SVGRectElement[]> = new Map();

  for (const region of MUSCLE_REGIONS) {
    const bounds = region.front ?? region.back;
    if (!bounds) continue;

    const x = bounds.x * 2;
    const y = bounds.y * 4;
    const w = bounds.w * 2;
    const h = bounds.h * 4;

    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", String(w));
    rect.setAttribute("height", String(h));
    rect.setAttribute("rx", "6");
    rect.setAttribute("ry", "6");
    rect.setAttribute("fill", "rgba(242, 236, 224, 0.06)");
    rect.setAttribute("class", "olen-heatmap-muscle olen-selector-muscle");
    rect.setAttribute("data-muscle", region.id);

    const existingRects = rects.get(region.id) ?? [];
    existingRects.push(rect);
    rects.set(region.id, existingRects);

    rect.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMuscle(region.id);
    });

    svg.appendChild(rect);

    // Mirror
    if (isSymmetricMuscle(region.id) && bounds.x < 50) {
      const mirrorX = 200 - x - w;
      const mirror = document.createElementNS(svgNS, "rect");
      mirror.setAttribute("x", String(mirrorX));
      mirror.setAttribute("y", String(y));
      mirror.setAttribute("width", String(w));
      mirror.setAttribute("height", String(h));
      mirror.setAttribute("rx", "6");
      mirror.setAttribute("ry", "6");
      mirror.setAttribute("fill", "rgba(242, 236, 224, 0.06)");
      mirror.setAttribute("class", "olen-heatmap-muscle olen-selector-muscle");
      mirror.setAttribute("data-muscle", region.id);

      existingRects.push(mirror);
      rects.set(region.id, existingRects);

      mirror.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMuscle(region.id);
      });

      svg.appendChild(mirror);
    }

    // Label text
    const labelText = document.createElementNS(svgNS, "text");
    labelText.setAttribute("x", String(x + w / 2));
    labelText.setAttribute("y", String(y + h / 2 + 3));
    labelText.setAttribute("text-anchor", "middle");
    labelText.setAttribute("fill", "rgba(242, 236, 224, 0.5)");
    labelText.setAttribute("font-size", "7");
    labelText.setAttribute("pointer-events", "none");
    labelText.textContent = MUSCLE_GROUP_LABELS[region.id].slice(0, 5);
    svg.appendChild(labelText);
  }

  figureWrap.appendChild(svg);

  // Selected chips area
  const chipsArea = sheet.createDiv({ cls: "olen-muscle-selector-chips" });

  function toggleMuscle(id: MuscleGroupId): void {
    if (selected.has(id)) {
      selected.delete(id);
    } else {
      selected.add(id);
    }
    updateVisual();
  }

  function updateVisual(): void {
    // Update rects
    for (const [id, rectList] of rects) {
      const isSelected = selected.has(id);
      for (const r of rectList) {
        r.setAttribute("fill", isSelected ? "rgba(212, 168, 67, 0.5)" : "rgba(242, 236, 224, 0.06)");
      }
    }

    // Update chips
    chipsArea.empty();
    for (const id of selected) {
      const chip = chipsArea.createDiv({ cls: "olen-muscle-selector-chip" });
      chip.textContent = MUSCLE_GROUP_LABELS[id];
      chip.addEventListener("click", () => toggleMuscle(id));
    }
  }

  // Confirm button
  const actions = sheet.createDiv({ cls: "olen-heatmap-actions" });
  const confirmBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: "Begin Workout",
  });
  confirmBtn.addEventListener("click", () => {
    closePopup();
    onConfirm(Array.from(selected));
  });

  const cancelBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: "Cancel",
  });
  cancelBtn.addEventListener("click", () => closePopup());

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePopup();
  });

  function closePopup(): void {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}
