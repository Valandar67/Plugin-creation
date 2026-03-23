// ============================================================
// Olen — Sunday Check-in Dialogue Templates
// Context-aware dialogue selection with ~40 variants
// ============================================================

export interface DialogueContext {
  name: string;
  completedCount: number;
  targetCount: number;
  completedDays: number;
  streak: number;
  bodyCount: number;
  mindCount: number;
  spiritCount: number;
  damage: number;
  neglectedCategory: string;
  strongCategory: string;
  skippedActivity: string;
  daysSince: number;
  completionRate: number;
  weekOverWeek: number;
  bestDay: string;
  bossName: string;
  bossHpPercent: number;
  chapter: number;
  chapterName: string;
  eudaimoniaIndex: number;
}

export type PerformanceTier = "positive" | "mixed" | "negative";

// --- Tier-based pools (15) ---

const POSITIVE_DIALOGUES = [
  "You've been on fire this week, {name}. {completedCount} activities completed — that's discipline.",
  "I see you showed up every day. That consistency? It's building something.",
  "Strong week. {streak} day streak and counting. The compound effect is real.",
  "{name}, you crushed it. {bodyCount} body, {mindCount} mind, {spiritCount} spirit sessions. Balance.",
  "You didn't just show up — you dominated. Boss took {damage} damage this week.",
];

const MIXED_DIALOGUES = [
  "Decent week, {name}. Not your best, not your worst. What held you back?",
  "You showed up {completedDays} out of 7 days. The other days? Life happens. But let's talk about it.",
  "Some good momentum this week, but {neglectedCategory} is falling behind. What's going on there?",
  "{name}, I noticed {skippedActivity} hasn't seen action in {daysSince} days. Everything alright?",
  "Solid effort in {strongCategory}, but the balance is off. How do we fix that?",
];

const NEGATIVE_DIALOGUES = [
  "Rough week, {name}. {completedCount} out of {targetCount}. I'm not judging — I'm asking: what happened?",
  "You went quiet this week. That's not like you. Talk to me.",
  "I'll be straight with you — this week was a miss. But one bad week doesn't define you.",
  "{name}, the streak broke. That stings. But the question is: do you get back up tomorrow?",
  "Almost nothing landed this week. No shame in that — but let's figure out why before next week.",
];

// --- Contextual pools (25) ---

const PERFECT_WEEK_DIALOGUES = [
  "Perfect week. {completedCount}/{targetCount}. I have nothing to critique, {name}. Just respect.",
  "100%. Every single target hit. {name}, that's mastery in motion.",
  "Not a single miss. {completedDays} days, all targets. This is what peak discipline looks like.",
  "Flawless execution this week. Body, mind, spirit — all fed. All honored.",
  "{name}, you went {completedDays} for {completedDays}. The {bossName} barely survived. {damage} damage dealt.",
];

const STREAK_DIALOGUES = [
  "{streak} days straight, {name}. That's not luck — that's identity.",
  "A {streak}-day streak. The compound effect is building something you can't see yet.",
  "Every single day for {streak} days. Most people can't do 3. You're different.",
  "{name}, {streak} days without a miss. The discipline *is* the reward.",
  "Streak: {streak}. At this point, you'd feel wrong *not* showing up.",
];

const COMEBACK_DIALOGUES = [
  "Now *that's* a comeback. {weekOverWeek} more sessions than last week. I see you, {name}.",
  "Last week was rough. This week? You answered. +{weekOverWeek} sessions. That's character.",
  "You could have stayed down. You didn't. {completedCount} completions this week — respect.",
  "{name}, the bounce-back is real. {weekOverWeek} sessions up from last week.",
  "Remember last Sunday? Different energy this time. +{weekOverWeek}. Keep that fire.",
];

const BOSS_DIALOGUES = [
  "The {bossName} is on its knees, {name}. {bossHpPercent}% HP left. Finish it.",
  "One more strong week and the {bossName} falls. Can you taste it?",
  "{bossName} at {bossHpPercent}%. You've been grinding it down all month. Don't stop now.",
  "The end is near for the {bossName}. {damage} damage this week alone.",
  "Almost there. {bossHpPercent}% left on the {bossName}. This is your moment, {name}.",
];

const MILESTONE_DIALOGUES = [
  "Chapter {chapterName}, {name}. You've earned a new title. Let that sink in.",
  "{name}, the Eudaimonia Index just crossed {eudaimoniaIndex}. You're not the same person who started.",
  "New chapter unlocked: {chapterName}. The old you wouldn't believe where you are now.",
  "Milestone reached. {eudaimoniaIndex} Eudaimonia. Most people never get here, {name}.",
  "The path is working. Chapter {chapterName} — and still climbing.",
];

// --- Farewell pools (tier-aware) ---

const POSITIVE_FAREWELLS = [
  "Absolute machine. See you next Sunday, {name}.",
  "Nothing to fix. Just keep being you.",
  "I'll be watching you dominate another week.",
  "Go. Build. Return stronger.",
];

const NEUTRAL_FAREWELLS = [
  "Good talk, see you next Sunday, {name}.",
  "That's the spirit. Go make this week count.",
  "Remember: discipline is a muscle. You're training it right now.",
  "Until next Sunday. I'll be watching.",
  "The world doesn't wait, {name}. Neither should you.",
  "See you in seven days. Make them matter.",
];

const NEGATIVE_FAREWELLS = [
  "It's not about the fall. It's about getting up. See you next week.",
  "Tomorrow is day one of a new streak. Make it count.",
  "I believe in you more than you believe in yourself right now. Prove me right.",
  "One foot in front of the other, {name}. That's all it takes.",
];

function interpolate(template: string, ctx: DialogueContext): string {
  return template
    .replace(/\{name\}/g, ctx.name)
    .replace(/\{completedCount\}/g, String(ctx.completedCount))
    .replace(/\{targetCount\}/g, String(ctx.targetCount))
    .replace(/\{completedDays\}/g, String(ctx.completedDays))
    .replace(/\{streak\}/g, String(ctx.streak))
    .replace(/\{bodyCount\}/g, String(ctx.bodyCount))
    .replace(/\{mindCount\}/g, String(ctx.mindCount))
    .replace(/\{spiritCount\}/g, String(ctx.spiritCount))
    .replace(/\{damage\}/g, String(ctx.damage))
    .replace(/\{neglectedCategory\}/g, ctx.neglectedCategory)
    .replace(/\{strongCategory\}/g, ctx.strongCategory)
    .replace(/\{skippedActivity\}/g, ctx.skippedActivity)
    .replace(/\{daysSince\}/g, String(ctx.daysSince))
    .replace(/\{weekOverWeek\}/g, String(ctx.weekOverWeek))
    .replace(/\{bestDay\}/g, ctx.bestDay)
    .replace(/\{bossName\}/g, ctx.bossName)
    .replace(/\{bossHpPercent\}/g, String(ctx.bossHpPercent))
    .replace(/\{chapter\}/g, String(ctx.chapter))
    .replace(/\{chapterName\}/g, ctx.chapterName)
    .replace(/\{eudaimoniaIndex\}/g, String(ctx.eudaimoniaIndex));
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getPerformanceTier(completionRate: number): PerformanceTier {
  if (completionRate >= 0.8) return "positive";
  if (completionRate >= 0.4) return "mixed";
  return "negative";
}

/**
 * Context-aware dialogue selection.
 * Checks contextual pools in priority order; falls back to tier pool.
 */
export function pickDialogue(tier: PerformanceTier, ctx: DialogueContext): string {
  let template: string;

  // Priority 1: Perfect week
  if (ctx.completionRate >= 1.0 && ctx.targetCount > 0) {
    template = pickRandom(PERFECT_WEEK_DIALOGUES);
  }
  // Priority 2: Boss nearly dead
  else if (ctx.bossHpPercent > 0 && ctx.bossHpPercent < 25) {
    template = pickRandom(BOSS_DIALOGUES);
  }
  // Priority 3: Long streak
  else if (ctx.streak >= 7) {
    template = pickRandom(STREAK_DIALOGUES);
  }
  // Priority 4: Comeback week
  else if (ctx.weekOverWeek > 3 && tier !== "negative") {
    template = pickRandom(COMEBACK_DIALOGUES);
  }
  // Priority 5: Milestone (eudaimonia crossed a 10-point mark recently)
  else if (ctx.eudaimoniaIndex > 0 && ctx.eudaimoniaIndex % 10 < 3 && tier === "positive") {
    template = pickRandom(MILESTONE_DIALOGUES);
  }
  // Default: tier-based pool
  else {
    const pool =
      tier === "positive" ? POSITIVE_DIALOGUES :
      tier === "mixed" ? MIXED_DIALOGUES :
      NEGATIVE_DIALOGUES;
    template = pickRandom(pool);
  }

  return interpolate(template, ctx);
}

/**
 * Tier-aware farewell selection.
 */
export function pickFarewell(name: string, tier: PerformanceTier = "mixed"): string {
  const pool =
    tier === "positive" ? POSITIVE_FAREWELLS :
    tier === "negative" ? NEGATIVE_FAREWELLS :
    NEUTRAL_FAREWELLS;

  const template = pickRandom(pool);
  return template.replace(/\{name\}/g, name);
}
