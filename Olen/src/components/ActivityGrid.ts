// ============================================================
// Olen — Activity Grid Component
// 2-column grid of activity cards with progress rings
// ============================================================

import type { OlenSettings, Category } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";

export function renderActivityGrid(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number
): void {
  const label = settings.devConfig.labels.activity_grid_title ?? "ACTIVITIES";

  // Section title
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });

  // Grid container
  const grid = container.createDiv({ cls: "olen-activity-grid" });
  grid.style.setProperty("--i", String(staggerIndex));

  const columns = settings.devConfig.activityGridColumns ?? 2;
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

  const activities = engine.getEnabledActivities();

  for (const activity of activities) {
    const card = grid.createDiv({ cls: "olen-activity-card" });

    // Category accent bar
    const accent = card.createDiv({ cls: "olen-activity-accent" });
    accent.style.background = settings.categoryColors[activity.category] ?? "#928d85";

    // Top row: emoji + status dot
    const top = card.createDiv({ cls: "olen-activity-top" });
    top.createEl("div", { cls: "olen-activity-emoji", text: activity.emoji });

    const daysSince = engine.getDaysSinceLastDone(activity.id);
    const dotCls = getDotClass(daysSince);
    top.createDiv({ cls: `olen-activity-dot ${dotCls}` });

    // Activity name
    card.createEl("div", { cls: "olen-activity-name", text: activity.name });

    // Weekly progress
    const progress = engine.getWeeklyProgress(activity.id);
    const progressRow = card.createDiv({ cls: "olen-activity-progress" });

    // Progress ring (SVG)
    const ring = createProgressRing(progress.done, progress.target, settings.categoryColors[activity.category]);
    progressRow.appendChild(ring);

    progressRow.createEl("div", {
      cls: "olen-activity-progress-text",
      text: `${progress.done} of ${progress.target}`,
    });

    // Streak
    const streak = engine.getActivityStreak(activity.id);
    if (streak > 0) {
      card.createEl("div", {
        cls: "olen-activity-streak",
        text: `${streak} day streak`,
      });
    }
  }
}

function getDotClass(daysSince: number): string {
  if (daysSince === 0) return "olen-activity-dot-green";
  if (daysSince <= 1) return "olen-activity-dot-yellow";
  return "olen-activity-dot-red";
}

function createProgressRing(done: number, target: number, color: string): SVGSVGElement {
  const size = 24;
  const strokeWidth = 2.5;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const percent = target > 0 ? Math.min(1, done / target) : 0;
  const dashOffset = circumference * (1 - percent);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", String(size));
  svg.setAttribute("height", String(size));
  svg.setAttribute("viewBox", `0 0 ${size} ${size}`);
  svg.classList.add("olen-activity-progress-ring");

  // Background circle
  const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  bgCircle.setAttribute("cx", String(size / 2));
  bgCircle.setAttribute("cy", String(size / 2));
  bgCircle.setAttribute("r", String(radius));
  bgCircle.setAttribute("fill", "none");
  bgCircle.setAttribute("stroke", "rgba(255,255,255,0.08)");
  bgCircle.setAttribute("stroke-width", String(strokeWidth));
  svg.appendChild(bgCircle);

  // Progress circle
  const progressCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  progressCircle.setAttribute("cx", String(size / 2));
  progressCircle.setAttribute("cy", String(size / 2));
  progressCircle.setAttribute("r", String(radius));
  progressCircle.setAttribute("fill", "none");
  progressCircle.setAttribute("stroke", color);
  progressCircle.setAttribute("stroke-width", String(strokeWidth));
  progressCircle.setAttribute("stroke-dasharray", String(circumference));
  progressCircle.setAttribute("stroke-dashoffset", String(dashOffset));
  progressCircle.setAttribute("stroke-linecap", "round");
  progressCircle.setAttribute("transform", `rotate(-90 ${size / 2} ${size / 2})`);
  svg.appendChild(progressCircle);

  return svg;
}
