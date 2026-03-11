// ============================================================
// Olen — Directive Card Component
// Conversational style: "Olen suggests…" / "Olen: it's time for…"
// Weight logging as top priority override when due.
// Accept / Skip buttons (no outlines, transparent design)
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

    // Action buttons — no outlines, minimal, transparent design
    const actions = card.createDiv({ cls: "olen-directive-actions-v2" });

    const acceptBtn = actions.createEl("button", {
      cls: "olen-directive-btn olen-directive-btn-accept",
      text: command.type === "weight" ? "Log now" : "Begin",
    });
    acceptBtn.addEventListener("click", () => handleAccept(command));

    const skipBtn = actions.createEl("button", {
      cls: "olen-directive-btn olen-directive-btn-skip",
      text: "Skip",
    });
    skipBtn.addEventListener("click", () => {
      dismissed.add(currentIndex);
      currentIndex++;
      renderCurrent();
    });

    // Animate in
    requestAnimationFrame(() => {
      card.style.transition = "opacity 0.25s ease";
      card.style.opacity = "1";
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
  "Olen: time to log your weight.",
  "Olen suggests you log your weight today.",
  "Olen: track your progress. Log your weight.",
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

// ── Olen's voice — conversational, straightforward ──

const OLEN_CONVERSATIONAL: Record<string, string[]> = {
  death: [
    "Olen suggests to do {name} today.",
    "Olen: it's time for {name}.",
  ],
  boss: [
    "Olen: it's time for {name}.",
    "Olen suggests to do {name}.",
  ],
  neglect: [
    "Olen suggests to do a {name} session.",
    "Olen: it's time for {name}.",
    "Olen suggests you get back to {name}.",
  ],
  weekly: [
    "Olen: it's time for {name}.",
    "Olen suggests to fit in a {name} session.",
  ],
  chain: [
    "Olen suggests to continue with {name}.",
    "Olen: keep going. Do {name} next.",
  ],
  time: [
    "Olen: it's time for {name}.",
    "Olen suggests to do {name} now.",
  ],
  balanced: [
    "Olen suggests to do a {name} session.",
    "Olen: it's time for {name}.",
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
  ];
  const seed = task.id.length + now.getDate();
  return TEMPLE_LINES[seed % TEMPLE_LINES.length];
}

// ── All dismissed messages ──

const ALL_DISMISSED_LINES = [
  "Nothing more for now.",
  "All caught up.",
  "You're free for now.",
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
