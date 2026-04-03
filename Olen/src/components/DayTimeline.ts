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
    onReorder?: (orderedIds: string[]) => void;
  }
): void {
  const label = settings.devConfig.labels.daymap_title ?? "YOUR DAY";
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;

  // Section title with edit button
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.style.display = "flex";
  titleEl.style.alignItems = "center";
  titleEl.style.justifyContent = "space-between";
  titleEl.createEl("div", { cls: "olen-heading", text: label });

  // Timeline card
  const card = container.createDiv({ cls: "olen-card olen-timeline-card" });
  card.style.setProperty("--i", String(staggerIndex));

  // Get day map entries
  const entries = engine.getDayMap();

  // Edit/reorder button (only if there are entries to reorder)
  if (entries.length > 1 && callbacks.onReorder) {
    const editBtn = titleEl.createEl("button", {
      cls: "olen-day-edit-btn",
      attr: { title: "Reorder schedule" },
    });
    editBtn.innerHTML = "&#9776;"; // ☰ hamburger icon
    editBtn.addEventListener("click", () => {
      showReorderModal(container, entries, settings, callbacks.onReorder!);
    });
  }

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

  // Category color bar — progressively empties for current/past activities
  const bar = row.createDiv({ cls: "olen-timeline-bar" });
  if (isCalendar && !isDone) {
    bar.classList.add("olen-timeline-bar-calendar");
  }

  if (isCurrent && !isDone && !isSkipped) {
    // Bar empties from top as time passes: elapsed = dim, remaining = colored
    const progress = Math.min(1, Math.max(0,
      (currentHour - entry.startHour) / (entry.endHour - entry.startHour)
    ));
    const elapsedPct = Math.round(progress * 100);
    bar.style.background = `linear-gradient(to bottom, rgba(255,255,255,0.08) ${elapsedPct}%, ${color} ${elapsedPct}%)`;
    bar.style.boxShadow = `0 0 12px ${color}`;
  } else if (isPast && !isDone && !isSkipped) {
    // Past and not completed — empty/dim bar
    bar.style.background = "rgba(255,255,255,0.08)";
  } else {
    bar.style.background = color;
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
      // Activity entries: Begin + Skip
      const acceptBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-accept",
        text: "Begin",
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

  // (Red laser line removed — progress now shown via the category bar fill)
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

// ── Reorder Modal ──

function showReorderModal(
  anchor: HTMLElement,
  entries: DayMapEntry[],
  settings: OlenSettings,
  onSave: (orderedIds: string[]) => void
): void {
  // Build ordered list of entry IDs
  const orderedEntries = [...entries];
  let dragIdx: number | null = null;

  // Backdrop
  const backdrop = document.createElement("div");
  backdrop.className = "olen-reorder-backdrop";
  document.body.appendChild(backdrop);

  // Modal
  const modal = document.createElement("div");
  modal.className = "olen-reorder-modal";
  document.body.appendChild(modal);

  // Copy theme CSS variables from .olen-dashboard so modal inherits theme colors
  const dashboard = document.querySelector(".olen-dashboard") as HTMLElement | null;
  if (dashboard) {
    const cs = getComputedStyle(dashboard);
    const vars = [
      "--bg-primary", "--bg-secondary", "--card-bg", "--card-bg-solid",
      "--card-border", "--card-border-hover", "--text-primary", "--text-secondary",
      "--text-muted", "--text-dim", "--accent-gold", "--accent-gold-bright",
      "--accent-gold-dim", "--accent-amber", "--accent-warm", "--danger",
      "--danger-dim", "--success", "--success-dim", "--shadow-card", "--shadow-deep",
    ];
    for (const v of vars) {
      const val = cs.getPropertyValue(v);
      if (val) modal.style.setProperty(v, val);
    }
    backdrop.style.setProperty("--bg-primary", cs.getPropertyValue("--bg-primary"));
  }

  // Title
  const title = modal.createEl("div", { cls: "olen-reorder-title", text: "Reorder Schedule" });

  // List container
  const list = modal.createDiv({ cls: "olen-reorder-list" });

  function renderList() {
    list.empty();
    for (let i = 0; i < orderedEntries.length; i++) {
      const entry = orderedEntries[i];
      const row = list.createDiv({ cls: "olen-reorder-row" });
      row.setAttribute("data-index", String(i));

      // Drag handle
      const handle = row.createEl("span", { cls: "olen-reorder-handle", text: "\u2261" }); // ≡
      handle.style.cursor = "grab";

      // Entry info
      const info = row.createDiv({ cls: "olen-reorder-info" });
      info.createEl("span", { cls: "olen-reorder-emoji", text: entry.emoji });
      info.createEl("span", { cls: "olen-reorder-name", text: entry.activityName });
      info.createEl("span", {
        cls: "olen-reorder-time",
        text: `${entry.estimatedDuration}m`,
      });

      // Move buttons as fallback for non-touch
      const btnWrap = row.createDiv({ cls: "olen-reorder-btns" });
      if (i > 0) {
        const upBtn = btnWrap.createEl("button", { cls: "olen-reorder-arrow", text: "\u25B2" });
        upBtn.addEventListener("click", () => {
          [orderedEntries[i - 1], orderedEntries[i]] = [orderedEntries[i], orderedEntries[i - 1]];
          renderList();
        });
      }
      if (i < orderedEntries.length - 1) {
        const downBtn = btnWrap.createEl("button", { cls: "olen-reorder-arrow", text: "\u25BC" });
        downBtn.addEventListener("click", () => {
          [orderedEntries[i], orderedEntries[i + 1]] = [orderedEntries[i + 1], orderedEntries[i]];
          renderList();
        });
      }

      // Drag events
      row.draggable = true;
      row.addEventListener("dragstart", (e) => {
        dragIdx = i;
        row.classList.add("olen-reorder-dragging");
        e.dataTransfer?.setData("text/plain", String(i));
      });
      row.addEventListener("dragend", () => {
        row.classList.remove("olen-reorder-dragging");
        dragIdx = null;
      });
      row.addEventListener("dragover", (e) => {
        e.preventDefault();
        row.classList.add("olen-reorder-over");
      });
      row.addEventListener("dragleave", () => {
        row.classList.remove("olen-reorder-over");
      });
      row.addEventListener("drop", (e) => {
        e.preventDefault();
        row.classList.remove("olen-reorder-over");
        if (dragIdx !== null && dragIdx !== i) {
          const [moved] = orderedEntries.splice(dragIdx, 1);
          orderedEntries.splice(i, 0, moved);
          renderList();
        }
      });
    }
  }

  renderList();

  // Buttons
  const footer = modal.createDiv({ cls: "olen-reorder-footer" });
  const cancelBtn = footer.createEl("button", { cls: "olen-reorder-cancel", text: "Cancel" });
  const saveBtn = footer.createEl("button", { cls: "olen-reorder-save", text: "Save" });

  cancelBtn.addEventListener("click", close);
  backdrop.addEventListener("click", close);

  saveBtn.addEventListener("click", () => {
    const ids = orderedEntries.map((e) => e.isCalendarTask ? (e.calendarTaskId ?? e.activityId) : e.activityId);
    onSave(ids);
    close();
  });

  function close() {
    backdrop.remove();
    modal.remove();
  }
}
