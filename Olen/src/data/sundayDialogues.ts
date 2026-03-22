// ============================================================
// Olen — Sunday Check-in Dialogue Templates
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
}

export type PerformanceTier = "positive" | "mixed" | "negative";

const POSITIVE_DIALOGUES = [
  "You've been on fire this week, {name}. {completedCount} activities completed \u2014 that's discipline.",
  "I see you showed up every day. That consistency? It's building something.",
  "Strong week. {streak} day streak and counting. The compound effect is real.",
  "{name}, you crushed it. {bodyCount} body, {mindCount} mind, {spiritCount} spirit sessions. Balance.",
  "You didn't just show up \u2014 you dominated. Boss took {damage} damage this week.",
];

const MIXED_DIALOGUES = [
  "Decent week, {name}. Not your best, not your worst. What held you back?",
  "You showed up {completedDays} out of 7 days. The other days? Life happens. But let's talk about it.",
  "Some good momentum this week, but {neglectedCategory} is falling behind. What's going on there?",
  "{name}, I noticed {skippedActivity} hasn't seen action in {daysSince} days. Everything alright?",
  "Solid effort in {strongCategory}, but the balance is off. How do we fix that?",
];

const NEGATIVE_DIALOGUES = [
  "Rough week, {name}. {completedCount} out of {targetCount}. I'm not judging \u2014 I'm asking: what happened?",
  "You went quiet this week. That's not like you. Talk to me.",
  "I'll be straight with you \u2014 this week was a miss. But one bad week doesn't define you.",
  "{name}, the streak broke. That stings. But the question is: do you get back up tomorrow?",
  "Almost nothing landed this week. No shame in that \u2014 but let's figure out why before next week.",
];

export const FAREWELL_DIALOGUES = [
  "Good talk, see you next Sunday, {name}.",
  "That's the spirit. Go make this week count.",
  "Remember: discipline is a muscle. You're training it right now.",
  "Until next Sunday. I'll be watching.",
  "Go. Build. Return stronger.",
  "The world doesn't wait, {name}. Neither should you.",
  "See you in seven days. Make them matter.",
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
    .replace(/\{daysSince\}/g, String(ctx.daysSince));
}

export function getPerformanceTier(completionRate: number): PerformanceTier {
  if (completionRate >= 0.8) return "positive";
  if (completionRate >= 0.4) return "mixed";
  return "negative";
}

export function pickDialogue(tier: PerformanceTier, ctx: DialogueContext): string {
  const pool =
    tier === "positive" ? POSITIVE_DIALOGUES :
    tier === "mixed" ? MIXED_DIALOGUES :
    NEGATIVE_DIALOGUES;

  const template = pool[Math.floor(Math.random() * pool.length)];
  return interpolate(template, ctx);
}

export function pickFarewell(name: string): string {
  const template = FAREWELL_DIALOGUES[Math.floor(Math.random() * FAREWELL_DIALOGUES.length)];
  return template.replace(/\{name\}/g, name);
}
