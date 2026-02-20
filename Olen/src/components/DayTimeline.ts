// ============================================================
// Olen — Day Timeline Component
// Vertical colored timeline of the day's planned activities
// ============================================================

import type { OlenSettings, DayMapEntry, Category } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";

export function renderDayTimeline(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number,
  callbacks: {
    onAccept: (activityId: string) => void;
    onSkip: (activityId: string) => void;
    onCalendarDone?: (entry: DayMapEntry) => void;
    onCalendarPostpone?: (entry: DayMapEntry) => void;
    onCreateEvent?: () => void;
  }
): void {
  const label = settings.devConfig.labels.daymap_title ?? "YOUR DAY";
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;

  // Section title
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });

  // Timeline card
  const card = container.createDiv({ cls: "olen-card olen-timeline-card" });
  card.style.setProperty("--i", String(staggerIndex));

  // Get day map entries
  const entries = engine.getDayMap();

  if (entries.length === 0) {
    card.createEl("div", {
      cls: "olen-timeline-empty",
      text: "No activities scheduled. A rare day of rest.",
    });
    renderTimelineFooter(card, settings, currentHour, callbacks.onCreateEvent);
    return;
  }

  // Timeline container
  const timeline = card.createDiv({ cls: "olen-timeline" });

  for (const entry of entries) {
    renderTimelineEntry(
      timeline, entry, settings, currentHour, callbacks
    );
  }

  // Footer
  renderTimelineFooter(card, settings, currentHour, callbacks.onCreateEvent);
}

function renderTimelineEntry(
  parent: HTMLElement,
  entry: DayMapEntry,
  settings: OlenSettings,
  currentHour: number,
  callbacks: {
    onAccept: (activityId: string) => void;
    onSkip: (activityId: string) => void;
    onCalendarDone?: (entry: DayMapEntry) => void;
    onCalendarPostpone?: (entry: DayMapEntry) => void;
  }
): void {
  const isCalendar = entry.isCalendarTask === true;
  const color = isCalendar ? "#5e7a9a" : (settings.categoryColors[entry.category] ?? "#928d85");
  const isCurrent = currentHour >= entry.startHour && currentHour < entry.endHour;
  const isPast = currentHour >= entry.endHour;
  const isDone = entry.status === "done";
  const isSkipped = entry.status === "skipped";

  // Determine visual state
  let stateCls = "olen-timeline-entry";
  if (isCalendar) stateCls += " olen-timeline-calendar";
  if (isDone) stateCls += " olen-timeline-done";
  else if (isSkipped) stateCls += " olen-timeline-skipped";
  else if (isCurrent) stateCls += " olen-timeline-current";
  else if (isPast) stateCls += " olen-timeline-past";

  const row = parent.createDiv({ cls: stateCls });

  // Category color bar (calendar tasks get a distinct dashed style)
  const bar = row.createDiv({ cls: "olen-timeline-bar" });
  bar.style.background = color;
  if (isCalendar && !isDone) {
    bar.classList.add("olen-timeline-bar-calendar");
  }
  if (isCurrent && !isDone && !isSkipped) {
    bar.style.boxShadow = `0 0 12px ${color}`;
  }

  // Content
  const content = row.createDiv({ cls: "olen-timeline-content" });

  // Top line: time + duration + source badge for calendar tasks
  const timeLine = content.createDiv({ cls: "olen-timeline-time" });
  timeLine.textContent = `${formatHour(entry.startHour)} – ${formatHour(entry.endHour)} · ${entry.estimatedDuration}m`;

  if (isCalendar && entry.calendarSource) {
    const badge = timeLine.createEl("span", { cls: "olen-timeline-source-badge" });
    switch (entry.calendarSource) {
      case "daily-note": badge.textContent = "Note"; break;
      case "tasks-plugin": badge.textContent = "Task"; break;
      case "quick-task": badge.textContent = "Quick"; break;
    }
  }

  // Activity line: emoji + name
  const actLine = content.createDiv({ cls: "olen-timeline-activity" });
  actLine.createEl("span", { cls: "olen-timeline-emoji", text: entry.emoji });
  const nameEl = actLine.createEl("span", {
    cls: "olen-timeline-name",
    text: entry.activityName,
  });

  // Strikethrough for done/skipped
  if (isDone || isSkipped) {
    nameEl.style.textDecoration = "line-through";
    nameEl.style.opacity = "0.5";
  }

  // Status indicator
  if (isDone) {
    actLine.createEl("span", { cls: "olen-timeline-check", text: "\u2713" });
  } else if (isSkipped) {
    actLine.createEl("span", { cls: "olen-timeline-skip-mark", text: "\u2013" });
  }

  // Action buttons
  if (!isDone && !isSkipped) {
    const actions = content.createDiv({ cls: "olen-timeline-actions" });

    if (isCalendar) {
      // Calendar tasks: Done + Postpone
      const doneBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-accept",
        text: "Done",
      });
      doneBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        callbacks.onCalendarDone?.(entry);
      });

      const postponeBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-postpone",
        text: "\u23E9",
        attr: { title: "Postpone to tomorrow" },
      });
      postponeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        callbacks.onCalendarPostpone?.(entry);
      });
    } else {
      // Activity entries: Begin/Done + Skip
      const acceptBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-accept",
        text: isCurrent ? "Begin" : "Done",
      });
      acceptBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        callbacks.onAccept(entry.activityId);
      });

      const skipBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-skip",
        text: "Skip",
      });
      skipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        callbacks.onSkip(entry.activityId);
      });
    }
  }

  // Current time indicator
  if (isCurrent && !isDone && !isSkipped) {
    const indicator = row.createDiv({ cls: "olen-timeline-now" });
    const progress = (currentHour - entry.startHour) / (entry.endHour - entry.startHour);
    indicator.style.top = `${Math.min(100, Math.max(0, progress * 100))}%`;
  }
}

function renderTimelineFooter(
  card: HTMLElement,
  settings: OlenSettings,
  currentHour: number,
  onCreateEvent?: () => void
): void {
  const endOfDay = settings.devConfig.eveningEnd;
  const remaining = Math.max(0, endOfDay - currentHour);
  const hours = Math.floor(remaining);
  const mins = Math.round((remaining - hours) * 60);

  card.createDiv({ cls: "olen-divider" });

  const footer = card.createDiv({ cls: "olen-timeline-footer" });
  footer.createEl("div", {
    cls: "olen-timeline-footer-text",
    text: `End of day: ${hours}h ${mins}m remaining`,
  });

  if (onCreateEvent) {
    const btn = footer.createEl("button", {
      cls: "olen-timeline-btn olen-timeline-btn-create",
      text: "+ Create event",
    });
    btn.addEventListener("click", () => onCreateEvent());
  }
}

function formatHour(h: number): string {
  const hours = Math.floor(h);
  const mins = Math.round((h - hours) * 60);
  const period = hours >= 12 ? "pm" : "am";
  const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  if (mins === 0) return `${displayHour}${period}`;
  return `${displayHour}:${String(mins).padStart(2, "0")}${period}`;
}
