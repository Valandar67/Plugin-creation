// ============================================================
// Olen — Directive Card Component
// Conversational style: "Olen suggests…" / "Olen: it's time for…"
// Weight logging as top priority override when due.
// Swipe right = accept, swipe left = reject (next)
// ============================================================

import type { OlenSettings, PriorityReason, DirectiveSuggestion, TempleTask, WeightLogFrequency } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";

/** A unified item that Olen can command. */
interface OlenCommand {
  type: "activity" | "temple" | "weight";
  id: string;
  name: string;
  emoji: string;
  olenSpeaks: string;
  activityId?: string;
  templeTask?: TempleTask;
}

export function renderDirectiveCard(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number,
  onEnterWorkspace?: (activityId: string) => void,
  onTempleComplete?: (taskId: string) => void,
  onLogWeight?: () => void
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
      renderAllDismissedInline(wrapper, settings);
      return;
    }

    // Transparent card with increased height
    const card = wrapper.createDiv({ cls: "olen-card olen-card-transparent olen-directive-v2 olen-directive-expanded" });

    // Swipe hint
    const swipeHint = card.createDiv({ cls: "olen-directive-swipe-hint" });
    swipeHint.innerHTML = `<span class="olen-swipe-left">\u2190 reject</span><span class="olen-swipe-right">accept \u2192</span>`;

    // Olen speaks — conversational style
    card.createEl("div", {
      cls: "olen-directive-oracle olen-directive-conversational",
      text: command.olenSpeaks,
    });

    // Activity / weight name
    const activityEl = card.createDiv({ cls: "olen-directive-activity-v2" });
    activityEl.createEl("span", { cls: "olen-directive-emoji", text: command.emoji });
    activityEl.createEl("span", { text: command.name });

    // Tag for temple or weight
    if (command.type === "temple") {
      card.createEl("div", { cls: "olen-directive-temple-tag", text: "TEMPLE" });
    } else if (command.type === "weight") {
      card.createEl("div", { cls: "olen-directive-temple-tag olen-directive-weight-tag", text: "HEALTH" });
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
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
        isDragging = true;
        card.style.transform = `translateX(${dx * 0.6}px) rotate(${dx * 0.02}deg)`;
        card.style.opacity = String(Math.max(0.3, 1 - Math.abs(dx) / 300));
      }
    }, { passive: true });

    card.addEventListener("touchend", (e) => {
      const dx = (e.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
      if (!isDragging || Math.abs(dx) < 60) {
        card.style.transform = "";
        card.style.opacity = "";
        return;
      }
      if (dx > 60) {
        card.style.transform = "translateX(120%) rotate(5deg)";
        card.style.opacity = "0";
        card.style.transition = "all 0.3s ease";
        setTimeout(() => handleAccept(command), 300);
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

    // Mouse fallback
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
        setTimeout(() => handleAccept(command), 300);
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

  function handleAccept(command: OlenCommand): void {
    if (command.type === "activity" && command.activityId) {
      onEnterWorkspace?.(command.activityId);
    } else if (command.type === "temple" && command.templeTask) {
      onTempleComplete?.(command.templeTask.id);
      dismissed.add(currentIndex);
      currentIndex++;
      renderCurrent();
    } else if (command.type === "weight") {
      onLogWeight?.();
      dismissed.add(currentIndex);
      currentIndex++;
      renderCurrent();
    }
  }

  renderCurrent();
}

// ── Build the command queue ──

function buildCommandQueue(settings: OlenSettings, engine: OlenEngine): OlenCommand[] {
  const commands: OlenCommand[] = [];

  // Weight logging as TOP PRIORITY — override everything when due
  if (isWeightLogDue(settings)) {
    commands.push({
      type: "weight",
      id: "weight-log",
      name: "Log your weight",
      emoji: "\u2696\uFE0F",
      olenSpeaks: getWeightNarrative(settings),
    });
  }

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

// ── Weight logging helpers ──

function isWeightLogDue(settings: OlenSettings): boolean {
  const stats = settings.personalStats;
  if (!stats.currentWeight || stats.currentWeight <= 0) return false;
  if (stats.weightLog.length === 0 && stats.lastWeightLogDate === null) return true;

  const daysSince = getDaysSinceLastLog(stats.lastWeightLogDate);
  const interval = getIntervalDays(stats.weightLogFrequency, stats.weightLogCustomDays);
  return daysSince >= interval;
}

function getDaysSinceLastLog(lastDate: string | null): number {
  if (!lastDate) return 999;
  const last = new Date(lastDate);
  const now = new Date();
  return Math.floor((now.getTime() - last.getTime()) / (24 * 60 * 60 * 1000));
}

function getIntervalDays(freq: WeightLogFrequency, customDays: number): number {
  switch (freq) {
    case "twice-a-week": return 3;
    case "every-week": return 7;
    case "every-2-weeks": return 14;
    case "every-3-days": return 3;
    case "every-5-days": return 5;
    case "custom": return customDays;
    default: return 7;
  }
}

const WEIGHT_NARRATIVES = [
  "Olen: it's time to step on the scale.",
  "Olen suggests you log your weight today.",
  "Olen: your body tells a story. Record it.",
  "Olen: tracking is discipline. Log your weight.",
];

function getWeightNarrative(settings: OlenSettings): string {
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const seed = now.getDate() + now.getMonth();
  return WEIGHT_NARRATIVES[seed % WEIGHT_NARRATIVES.length];
}

// ── Temple helpers ──

function isTempleDue(task: TempleTask, now: Date): boolean {
  if (!task.lastCompleted) return true;
  const last = new Date(task.lastCompleted);
  const msPerDay = 24 * 60 * 60 * 1000;
  const daysSince = Math.floor((now.getTime() - last.getTime()) / msPerDay);
  return daysSince >= task.intervalDays;
}

// ── Olen's voice — conversational style ──

const OLEN_CONVERSATIONAL: Record<string, string[]> = {
  death: [
    "Olen: you are spiraling. Do this now.",
    "Olen: this is not a suggestion. This is survival.",
    "Olen suggests you stop everything and do this.",
  ],
  boss: [
    "Olen: it's time for a final strike.",
    "Olen suggests to finish what you started.",
    "Olen: the beast is wounded. Go.",
  ],
  neglect: [
    "Olen suggests to do a session of {name}.",
    "Olen: it's time for {name}. You've been away too long.",
    "Olen: {name} misses you. Show up.",
    "Olen suggests you return to {name} today.",
  ],
  weekly: [
    "Olen: it's time for {name}. The week is slipping.",
    "Olen suggests to squeeze in a {name} session.",
    "Olen: you're behind on {name}. Reclaim this week.",
  ],
  chain: [
    "Olen suggests to carry the momentum with {name}.",
    "Olen: ride the wave. Do {name} next.",
  ],
  time: [
    "Olen: it's time for {name}.",
    "Olen suggests to do {name} right now.",
    "Olen: this is {name} hour. Begin.",
  ],
  balanced: [
    "Olen suggests to do a {name} session.",
    "Olen: it's time for {name}.",
    "Olen: balance demands {name} today.",
  ],
};

function getOlenNarrative(suggestion: DirectiveSuggestion, settings: OlenSettings): string {
  const pool = OLEN_CONVERSATIONAL[suggestion.reason] ?? OLEN_CONVERSATIONAL.balanced;
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const seed = suggestion.activityId.length + now.getDate() + now.getMonth();
  const template = pool[seed % pool.length];
  return template.replace(/\{name\}/g, suggestion.activityName);
}

function getTempleNarrative(task: TempleTask, now: Date): string {
  const TEMPLE_LINES = [
    `Olen: it's time for ${task.name}.`,
    `Olen suggests to take care of ${task.name}.`,
    `Olen: ${task.name} is overdue. Handle it.`,
    `Olen suggests you tend to ${task.name} today.`,
  ];
  const seed = task.id.length + now.getDate();
  return TEMPLE_LINES[seed % TEMPLE_LINES.length];
}

// ── All dismissed messages ──

const ALL_DISMISSED_LINES = [
  "Olen: nothing suits you today?",
  "Olen: I offered everything I had.",
  "Olen: fine. But tomorrow, you answer to me.",
  "Olen: the day is yours to waste, then.",
];

function renderAllDismissed(container: HTMLElement, settings: OlenSettings, staggerIndex: number): void {
  const wrapper = container.createDiv({ cls: "olen-directive-wrapper" });
  wrapper.style.setProperty("--i", String(staggerIndex));
  renderAllDismissedInline(wrapper, settings);
}

function renderAllDismissedInline(wrapper: HTMLElement, settings: OlenSettings): void {
  const card = wrapper.createDiv({ cls: "olen-card olen-card-transparent olen-directive-v2 olen-directive-exhausted olen-directive-expanded" });

  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const seed = now.getDate() + now.getMonth() + now.getFullYear();
  const line = ALL_DISMISSED_LINES[seed % ALL_DISMISSED_LINES.length];

  card.createEl("div", {
    cls: "olen-directive-oracle olen-directive-oracle-dim",
    text: line,
  });
}
