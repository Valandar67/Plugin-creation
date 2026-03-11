// ============================================================
// Olen — Directive Card Component
// Olen speaks as an oracle — commanding, not reporting.
// Swipe right = accept (enter workspace), swipe left = reject (next)
// Includes due temple tasks as fallback suggestions.
// ============================================================

import type { OlenSettings, PriorityReason, DirectiveSuggestion, TempleTask } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import { FALLBACK_QUOTES } from "../constants";

/** A unified item that Olen can command — either an activity or a temple task. */
interface OlenCommand {
  type: "activity" | "temple";
  id: string;
  name: string;
  emoji: string;
  olenSpeaks: string;  // What Olen says about this
  activityId?: string; // only for activities
  templeTask?: TempleTask; // only for temple
}

export function renderDirectiveCard(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number,
  onEnterWorkspace?: (activityId: string) => void,
  onTempleComplete?: (taskId: string) => void
): void {
  const commands = buildCommandQueue(settings, engine);

  if (commands.length === 0) {
    renderAllDismissed(container, settings, staggerIndex);
    return;
  }

  let currentIndex = 0;
  let dismissed = new Set<number>();

  const wrapper = container.createDiv({ cls: "olen-directive-wrapper" });
  wrapper.style.setProperty("--i", String(staggerIndex));

  function getCurrentCommand(): OlenCommand | null {
    // Skip dismissed ones
    while (dismissed.has(currentIndex) && currentIndex < commands.length) {
      currentIndex++;
    }
    if (currentIndex >= commands.length) return null;
    return commands[currentIndex];
  }

  function renderCurrent(): void {
    wrapper.empty();
    const command = getCurrentCommand();

    if (!command) {
      // All dismissed — show the "no mood" message
      renderAllDismissedInline(wrapper, settings);
      return;
    }

    const card = wrapper.createDiv({ cls: "olen-card olen-directive-v2" });

    // Swipe hint
    const swipeHint = card.createDiv({ cls: "olen-directive-swipe-hint" });
    swipeHint.innerHTML = `<span class="olen-swipe-left">\u2190 reject</span><span class="olen-swipe-right">accept \u2192</span>`;

    // Olen speaks — the oracle's command
    card.createEl("div", {
      cls: "olen-directive-oracle",
      text: command.olenSpeaks,
    });

    // Activity name
    const activityEl = card.createDiv({ cls: "olen-directive-activity-v2" });
    activityEl.createEl("span", { cls: "olen-directive-emoji", text: command.emoji });
    activityEl.createEl("span", { text: command.name });

    // Type indicator for temple tasks
    if (command.type === "temple") {
      card.createEl("div", {
        cls: "olen-directive-temple-tag",
        text: "TEMPLE",
      });
    }

    // Swipe gesture handling
    let touchStartX = 0;
    let touchStartY = 0;
    let isDragging = false;

    card.addEventListener("touchstart", (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      isDragging = false;
    }, { passive: true });

    card.addEventListener("touchmove", (e) => {
      const dx = e.touches[0].clientX - touchStartX;
      const dy = e.touches[0].clientY - touchStartY;

      // Only track horizontal swipes
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        isDragging = true;
        // Visual drag feedback
        card.style.transform = `translateX(${dx * 0.6}px) rotate(${dx * 0.02}deg)`;
        card.style.opacity = String(Math.max(0.3, 1 - Math.abs(dx) / 300));
      }
    }, { passive: true });

    card.addEventListener("touchend", (e) => {
      const dx = (e.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;

      if (!isDragging || Math.abs(dx) < 60) {
        // Not a swipe — reset
        card.style.transform = "";
        card.style.opacity = "";
        return;
      }

      if (dx > 60) {
        // Swipe RIGHT — accept
        card.style.transform = "translateX(120%) rotate(5deg)";
        card.style.opacity = "0";
        card.style.transition = "all 0.3s ease";
        setTimeout(() => {
          if (command.type === "activity" && command.activityId) {
            onEnterWorkspace?.(command.activityId);
          } else if (command.type === "temple" && command.templeTask) {
            onTempleComplete?.(command.templeTask.id);
            dismissed.add(currentIndex);
            currentIndex++;
            renderCurrent();
          }
        }, 300);
      } else if (dx < -60) {
        // Swipe LEFT — reject, show next
        card.style.transform = "translateX(-120%) rotate(-5deg)";
        card.style.opacity = "0";
        card.style.transition = "all 0.3s ease";
        setTimeout(() => {
          dismissed.add(currentIndex);
          currentIndex++;
          renderCurrent();
        }, 250);
      }
    });

    // Mouse fallback for desktop
    let mouseStartX = 0;
    let mouseDown = false;

    card.addEventListener("mousedown", (e) => {
      mouseStartX = e.clientX;
      mouseDown = true;
      isDragging = false;
    });

    card.addEventListener("mousemove", (e) => {
      if (!mouseDown) return;
      const dx = e.clientX - mouseStartX;
      if (Math.abs(dx) > 10) {
        isDragging = true;
        card.style.transform = `translateX(${dx * 0.6}px) rotate(${dx * 0.02}deg)`;
        card.style.opacity = String(Math.max(0.3, 1 - Math.abs(dx) / 300));
      }
    });

    card.addEventListener("mouseup", (e) => {
      if (!mouseDown) return;
      mouseDown = false;
      const dx = e.clientX - mouseStartX;

      if (!isDragging || Math.abs(dx) < 60) {
        card.style.transform = "";
        card.style.opacity = "";
        return;
      }

      if (dx > 60) {
        card.style.transform = "translateX(120%) rotate(5deg)";
        card.style.opacity = "0";
        card.style.transition = "all 0.3s ease";
        setTimeout(() => {
          if (command.type === "activity" && command.activityId) {
            onEnterWorkspace?.(command.activityId);
          } else if (command.type === "temple" && command.templeTask) {
            onTempleComplete?.(command.templeTask.id);
            dismissed.add(currentIndex);
            currentIndex++;
            renderCurrent();
          }
        }, 300);
      } else if (dx < -60) {
        card.style.transform = "translateX(-120%) rotate(-5deg)";
        card.style.opacity = "0";
        card.style.transition = "all 0.3s ease";
        setTimeout(() => {
          dismissed.add(currentIndex);
          currentIndex++;
          renderCurrent();
        }, 250);
      }
    });

    card.addEventListener("mouseleave", () => {
      if (mouseDown) {
        mouseDown = false;
        card.style.transform = "";
        card.style.opacity = "";
      }
    });

    // Animate in
    requestAnimationFrame(() => {
      card.style.transition = "opacity 0.25s ease, transform 0.25s ease";
      card.style.opacity = "1";
      card.style.transform = "translateX(0)";
    });
  }

  renderCurrent();
}

// ── Build the command queue ──

function buildCommandQueue(settings: OlenSettings, engine: OlenEngine): OlenCommand[] {
  const commands: OlenCommand[] = [];

  // Activity suggestions from the engine
  const suggestions = engine.getAllSuggestions();
  for (const s of suggestions) {
    commands.push({
      type: "activity",
      id: s.activityId,
      name: s.activityName,
      emoji: s.emoji,
      olenSpeaks: getOlenNarrative(s, settings),
      activityId: s.activityId,
    });
  }

  // Due temple tasks as fallback
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  for (const task of settings.templeTasks ?? []) {
    if (isTempleDue(task, now)) {
      commands.push({
        type: "temple",
        id: task.id,
        name: task.name,
        emoji: task.emoji,
        olenSpeaks: getTempleNarrative(task, now),
        templeTask: task,
      });
    }
  }

  return commands;
}

function isTempleDue(task: TempleTask, now: Date): boolean {
  if (!task.lastCompleted) return true;
  const last = new Date(task.lastCompleted);
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysSince = Math.floor((now.getTime() - last.getTime()) / msPerDay);
  return daysSince >= task.intervalDays;
}

// ── Olen's voice — the oracle commands, not reports ──

const OLEN_COMMANDS: Record<string, string[]> = {
  death: [
    "You are spiraling. I won't watch you fall.",
    "This is not a suggestion. This is survival.",
    "The abyss is one step behind you. Move.",
  ],
  boss: [
    "The beast is wounded. Finish what you started.",
    "One strike away from victory. Do not hesitate.",
    "I see the opening. Strike now.",
  ],
  neglect: [
    "You've been avoiding this. I noticed.",
    "This has gone silent for too long. Speak through action.",
    "I waited. You didn't show up. Today, you will.",
    "Your absence here is louder than you think.",
  ],
  weekly: [
    "The week is slipping. Reclaim it.",
    "You're behind, and the days don't wait.",
    "Time is not your ally this week. Act.",
  ],
  chain: [
    "The momentum is there. Carry it forward.",
    "One thing leads to another. Follow the thread.",
  ],
  time: [
    "Now is the hour. I chose it for you.",
    "The timing is deliberate. Begin.",
    "This moment was made for this.",
  ],
  balanced: [
    "I see what you need, even if you don't.",
    "Balance requires intention. Here's yours.",
    "Not everything screams for attention. This whispers. Listen.",
  ],
};

function getOlenNarrative(suggestion: DirectiveSuggestion, settings: OlenSettings): string {
  const pool = OLEN_COMMANDS[suggestion.reason] ?? OLEN_COMMANDS.balanced;
  // Deterministic-ish based on activity + day
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const seed = suggestion.activityId.length + now.getDate() + now.getMonth();
  return pool[seed % pool.length];
}

function getTempleNarrative(task: TempleTask, now: Date): string {
  const TEMPLE_LINES = [
    "The temple needs tending. Small acts hold the structure.",
    "Discipline isn't only in the grand gestures.",
    "Your body is your temple. Maintain it.",
    "This is beneath no one. Do it.",
  ];
  const seed = task.id.length + now.getDate();
  return TEMPLE_LINES[seed % TEMPLE_LINES.length];
}

// ── All dismissed messages ──

const ALL_DISMISSED_LINES = [
  "Nothing suits you today?",
  "I offered everything I had.",
  "Even I can't help someone who won't be helped.",
  "Fine. But tomorrow, you answer to me.",
  "The day is yours to waste, then.",
  "I'll remember this when you wonder where the time went.",
];

function renderAllDismissed(container: HTMLElement, settings: OlenSettings, staggerIndex: number): void {
  const wrapper = container.createDiv({ cls: "olen-directive-wrapper" });
  wrapper.style.setProperty("--i", String(staggerIndex));
  renderAllDismissedInline(wrapper, settings);
}

function renderAllDismissedInline(wrapper: HTMLElement, settings: OlenSettings): void {
  const card = wrapper.createDiv({ cls: "olen-card olen-directive-v2 olen-directive-exhausted" });

  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const seed = now.getDate() + now.getMonth() + now.getFullYear();
  const line = ALL_DISMISSED_LINES[seed % ALL_DISMISSED_LINES.length];

  card.createEl("div", {
    cls: "olen-directive-oracle olen-directive-oracle-dim",
    text: line,
  });

  card.createEl("div", {
    cls: "olen-directive-oracle-sub",
    text: `\u2014 Olen`,
  });
}
