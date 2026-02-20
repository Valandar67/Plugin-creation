// ============================================================
// Olen — Core Engine
// Priority logic, suggestion algorithm, day map, analytics
// ============================================================

import type {
  OlenSettings,
  ActivityConfig,
  Completion,
  CompletionMap,
  DirectiveSuggestion,
  DayMapEntry,
  CategoryLevel,
  Category,
  PriorityReason,
} from "../types";
import {
  NEGLECT_LORE,
  CHAPTER_NAMES,
  SINGLE_DOMINANT_TITLES,
  TWO_CATEGORY_TITLES,
  BALANCED_TITLES,
  toRoman,
} from "../constants";
import { BossEngine } from "./BossEngine";

export class OlenEngine {
  private settings: OlenSettings;
  private completions: CompletionMap;
  private now: Date;
  private today: string;
  private bossEngine: BossEngine;

  constructor(settings: OlenSettings, completions: CompletionMap, now: Date) {
    this.settings = settings;
    this.completions = completions;
    this.now = now;
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    this.today = d.toISOString().slice(0, 10);
    this.bossEngine = new BossEngine(settings);
  }

  // --- Effective Date (supports simulated date + pause) ---

  private getEffectiveNow(): Date {
    if (this.settings.simulatedDate) {
      const sim = new Date(this.settings.simulatedDate);
      sim.setHours(12, 0, 0, 0);
      return sim;
    }
    if (this.settings.systemState === "paused" && this.settings.pauseStartTime) {
      return new Date(this.settings.pauseStartTime);
    }
    return new Date(this.now.getTime() - this.settings.totalPausedTime);
  }

  private getEffectiveToday(): string {
    const d = this.getEffectiveNow();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
  }

  // --- Data Access ---

  getEnabledActivities(): ActivityConfig[] {
    return this.settings.activities.filter((a) => a.enabled);
  }

  getCompletionsForActivity(activityId: string): Completion[] {
    return this.completions[activityId] ?? [];
  }

  getDaysSinceLastDone(activityId: string): number {
    const comps = this.getCompletionsForActivity(activityId);
    const effectiveNow = this.getEffectiveNow();
    const todayMs = new Date(effectiveNow).setHours(0, 0, 0, 0);

    const completedDates = comps
      .filter((c) => c.completed)
      .map((c) => new Date(c.date).getTime())
      .filter((t) => !isNaN(t) && t <= todayMs)
      .sort((a, b) => b - a);

    if (completedDates.length === 0) return 999;

    const msPerDay = 24 * 60 * 60 * 1000;
    return Math.floor((todayMs - completedDates[0]) / msPerDay);
  }

  isDoneToday(activityId: string): boolean {
    const effectiveToday = this.getEffectiveToday();
    const comps = this.getCompletionsForActivity(activityId);
    return comps.some((c) => c.date === effectiveToday && c.completed);
  }

  // --- Weekly Progress ---

  getWeeklyProgress(activityId: string): { done: number; target: number } {
    const activity = this.settings.activities.find((a) => a.id === activityId);
    if (!activity) return { done: 0, target: 0 };

    const effectiveNow = this.getEffectiveNow();
    const weekStart = this.getWeekStart(effectiveNow);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);

    const comps = this.getCompletionsForActivity(activityId);
    const done = comps.filter((c) => {
      if (!c.completed) return false;
      const d = new Date(c.date);
      return d >= weekStart && d < weekEnd;
    }).length;

    return { done, target: activity.weeklyTarget };
  }

  private getWeekStart(date: Date): Date {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // Monday start
    d.setDate(diff);
    return d;
  }

  // --- Streaks ---

  getActivityStreak(activityId: string): number {
    const comps = this.getCompletionsForActivity(activityId);
    const effectiveNow = this.getEffectiveNow();
    const today = new Date(effectiveNow);
    today.setHours(0, 0, 0, 0);

    const completedDates = comps
      .filter((c) => c.completed)
      .map((c) => {
        const d = new Date(c.date);
        d.setHours(0, 0, 0, 0);
        return d;
      })
      .filter((d) => !isNaN(d.getTime()) && d <= today)
      .sort((a, b) => b.getTime() - a.getTime());

    if (completedDates.length === 0) return 0;

    let streak = 0;
    const checkDate = new Date(completedDates[0]);
    for (const date of completedDates) {
      if (date.getTime() === checkDate.getTime()) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (date < checkDate) {
        break;
      }
    }
    return streak;
  }

  getOverallStreak(): number {
    const activities = this.getEnabledActivities();
    const streaks = activities.map((a) => this.getActivityStreak(a.id));
    return Math.max(0, ...streaks);
  }

  // --- Analytics ---

  getTotalCompletions(): number {
    let total = 0;
    for (const activity of this.getEnabledActivities()) {
      const comps = this.getCompletionsForActivity(activity.id);
      total += comps.filter((c) => c.completed).length;
    }
    return total;
  }

  getDaysOfPresence(): number {
    const daysSet = new Set<string>();
    for (const activity of this.getEnabledActivities()) {
      const comps = this.getCompletionsForActivity(activity.id);
      for (const c of comps) {
        if (c.completed) daysSet.add(c.date);
      }
    }
    return daysSet.size;
  }

  // --- Category XP & Levels ---

  getCategoryXP(category: Category): number {
    const xpPer = this.settings.devConfig.xpPerCompletion;
    let xp = this.settings.categoryXP[category] ?? 0;

    for (const activity of this.getEnabledActivities()) {
      if (activity.category !== category) continue;
      const comps = this.getCompletionsForActivity(activity.id);
      xp = comps.filter((c) => c.completed).length * xpPer;
    }
    return xp;
  }

  getCategoryLevel(category: Category): CategoryLevel {
    const xp = this.getCategoryXP(category);
    const level = Math.floor(xp / 100);
    const progressToNext = xp % 100;
    return { category, xp, level, progressToNext };
  }

  getAllCategoryLevels(): CategoryLevel[] {
    return (["body", "mind", "spirit"] as Category[]).map((c) => this.getCategoryLevel(c));
  }

  getEudaimoniaIndex(): number {
    return this.getAllCategoryLevels().reduce((sum, cl) => sum + cl.level, 0);
  }

  getChapter(): { number: number; name: string } {
    const index = this.getEudaimoniaIndex();
    const chapterNum = Math.min(10, Math.floor(index / 10) + 1);
    const name = CHAPTER_NAMES[chapterNum] ?? "Initiate";
    return { number: chapterNum, name };
  }

  getEudaimoniaProgress(): number {
    const index = this.getEudaimoniaIndex();
    return (index % 10) * 10; // 0-100 progress within chapter
  }

  // --- Dynamic Title ---

  getDynamicTitle(): string {
    if (this.settings.titleOverride) return this.settings.titleOverride;

    const levels = this.getAllCategoryLevels();
    const totalSessions = this.getTotalCompletions();

    const categoryCompletions: Record<Category, number> = { body: 0, mind: 0, spirit: 0 };
    for (const activity of this.getEnabledActivities()) {
      const comps = this.getCompletionsForActivity(activity.id);
      categoryCompletions[activity.category] += comps.filter((c) => c.completed).length;
    }

    const total = Object.values(categoryCompletions).reduce((a, b) => a + b, 0);
    if (total === 0) return "Initiate";

    const weights: Record<Category, number> = {
      body: total > 0 ? categoryCompletions.body / total : 0,
      mind: total > 0 ? categoryCompletions.mind / total : 0,
      spirit: total > 0 ? categoryCompletions.spirit / total : 0,
    };

    const tier = totalSessions < 50 ? "light" : totalSessions < 200 ? "mid" : "heavy";

    // Check single dominant (>= 70%)
    for (const cat of ["body", "mind", "spirit"] as Category[]) {
      if (weights[cat] >= 0.70) {
        return SINGLE_DOMINANT_TITLES[cat]?.[tier] ?? "Initiate";
      }
    }

    // Check balanced (all >= 25%)
    if (weights.body >= 0.25 && weights.mind >= 0.25 && weights.spirit >= 0.25) {
      return BALANCED_TITLES[tier] ?? "Initiate of Balance";
    }

    // Check two-category combinations (each >= 30%)
    const cats = (["body", "mind", "spirit"] as Category[])
      .filter((c) => weights[c] >= 0.30)
      .sort();

    if (cats.length === 2) {
      const key = cats.join("+");
      return TWO_CATEGORY_TITLES[key]?.[tier] ?? "Initiate";
    }

    // Fallback: use dominant category
    const dominant = (Object.entries(weights) as [Category, number][])
      .sort((a, b) => b[1] - a[1])[0][0];
    return SINGLE_DOMINANT_TITLES[dominant]?.[tier] ?? "Initiate";
  }

  // --- Suggestion Algorithm (Waterfall) ---

  getSuggestion(): DirectiveSuggestion | null {
    const activities = this.getEnabledActivities();
    if (activities.length === 0) return null;

    // 1. DEATH CHECK
    if (this.settings.inTartarus) {
      return this.buildSuggestion(activities[0], "death", "Escape Tartarus — complete your penance.");
    }

    if (this.settings.failedThresholdDays >= 2) {
      const neglected = this.getNeglectedActivitiesSorted(activities);
      if (neglected.length > 0) {
        return this.buildSuggestion(neglected[0], "death", "Death looms. Act now or descend to Tartarus.");
      }
    }

    // 2. BOSS FINISH
    if (this.bossEngine.isDangerZone()) {
      const best = this.getHighestDamageActivity(activities);
      if (best) {
        return this.buildSuggestion(best, "boss", "One final blow remains. Finish the beast.");
      }
    }

    // 3. NEGLECT + PRIORITY
    const neglected = this.getNeglectedActivitiesSorted(activities);
    if (neglected.length > 0) {
      const top = this.applyRules(neglected);
      if (top) {
        const days = this.getDaysSinceLastDone(top.id);
        const lore = NEGLECT_LORE[top.id] ?? `${days} days since you last practiced. The skill atrophies.`;
        return this.buildSuggestion(top, "neglect", lore);
      }
    }

    // 4. WEEKLY CATCH-UP
    const behindSchedule = this.getBehindScheduleActivities(activities);
    if (behindSchedule.length > 0) {
      const top = behindSchedule[0];
      const progress = this.getWeeklyProgress(top.id);
      return this.buildSuggestion(top, "weekly", `Behind schedule: ${progress.done}/${progress.target} this week.`);
    }

    // 5. CHAIN CHECK
    const chained = this.getChainedActivities(activities);
    if (chained.length > 0) {
      return this.buildSuggestion(chained[0], "chain", "Your prerequisite is done. Time for the next step.");
    }

    // 6. TIME-BASED
    const timeBased = this.getTimeBasedActivities(activities);
    if (timeBased.length > 0) {
      return this.buildSuggestion(timeBased[0], "time", "The time is right. Begin.");
    }

    // 7. BALANCED FALLBACK
    const longestGap = activities
      .filter((a) => !this.isDoneToday(a.id))
      .sort((a, b) => this.getDaysSinceLastDone(b.id) - this.getDaysSinceLastDone(a.id));

    if (longestGap.length > 0) {
      return this.buildSuggestion(longestGap[0], "balanced", "Balance your path. This has waited longest.");
    }

    return null;
  }

  private buildSuggestion(
    activity: ActivityConfig,
    reason: PriorityReason,
    loreText: string
  ): DirectiveSuggestion {
    return {
      activityId: activity.id,
      activityName: activity.name,
      emoji: activity.emoji,
      category: activity.category,
      reason,
      daysSinceLastDone: this.getDaysSinceLastDone(activity.id),
      loreText,
      priority: activity.priority,
    };
  }

  private getNeglectedActivitiesSorted(activities: ActivityConfig[]): ActivityConfig[] {
    return activities
      .filter((a) => {
        const days = this.getDaysSinceLastDone(a.id);
        return days >= a.neglectThreshold && !this.isDoneToday(a.id);
      })
      .sort((a, b) => b.priority - a.priority);
  }

  private applyRules(activities: ActivityConfig[]): ActivityConfig | null {
    for (const activity of activities) {
      // Check alternating rule
      if (activity.alternatesWith) {
        const altDays = this.getDaysSinceLastDone(activity.alternatesWith);
        const thisDays = this.getDaysSinceLastDone(activity.id);
        // If this was done more recently than alternate, prefer alternate
        if (thisDays < altDays) {
          const alt = this.settings.activities.find((a) => a.id === activity.alternatesWith);
          if (alt && alt.enabled && !this.isDoneToday(alt.id)) return alt;
        }
      }

      // Check blocking rules
      if (activity.blocks && activity.blocks.length > 0) {
        // This activity blocks others when neglected — it should be prioritized
        return activity;
      }

      return activity;
    }
    return activities[0] ?? null;
  }

  private getHighestDamageActivity(activities: ActivityConfig[]): ActivityConfig | null {
    const notDone = activities.filter((a) => !this.isDoneToday(a.id));
    if (notDone.length === 0) return null;
    return notDone.sort((a, b) => b.damagePerCompletion - a.damagePerCompletion)[0];
  }

  private getBehindScheduleActivities(activities: ActivityConfig[]): ActivityConfig[] {
    const effectiveNow = this.getEffectiveNow();
    const dayOfWeek = effectiveNow.getDay(); // 0=Sun
    const adjustedDay = dayOfWeek === 0 ? 7 : dayOfWeek; // Mon=1
    const remainingDays = 7 - adjustedDay + 1;

    return activities
      .filter((a) => {
        if (this.isDoneToday(a.id)) return false;
        const progress = this.getWeeklyProgress(a.id);
        const remaining = progress.target - progress.done;
        return remaining > 0 && remaining >= remainingDays;
      })
      .sort((a, b) => b.priority - a.priority);
  }

  private getChainedActivities(activities: ActivityConfig[]): ActivityConfig[] {
    return activities.filter((a) => {
      if (!a.chainAfter || this.isDoneToday(a.id)) return false;
      return this.isDoneToday(a.chainAfter);
    });
  }

  private getTimeBasedActivities(activities: ActivityConfig[]): ActivityConfig[] {
    const hour = this.getEffectiveNow().getHours();
    const { morningStart, morningEnd, afternoonEnd, eveningEnd } = this.settings.devConfig;

    const currentPeriod = hour < morningEnd ? "morning" :
      hour < afternoonEnd ? "afternoon" :
      hour < eveningEnd ? "evening" : "anytime";

    // First check time overrides
    const overridden = activities.filter((a) => {
      if (this.isDoneToday(a.id)) return false;
      if (!a.timeOverride) return false;
      return hour >= a.timeOverride.startHour && hour < a.timeOverride.endHour;
    });
    if (overridden.length > 0) return overridden.sort((a, b) => b.priority - a.priority);

    // Then check preferred time
    return activities
      .filter((a) => !this.isDoneToday(a.id) && (a.preferredTime === currentPeriod || a.preferredTime === "anytime"))
      .sort((a, b) => b.priority - a.priority);
  }

  // --- Day Map Generation ---

  private calendarEntries: DayMapEntry[] = [];

  setCalendarEntries(entries: DayMapEntry[]): void {
    this.calendarEntries = entries;
  }

  getDayMap(): DayMapEntry[] {
    const activities = this.getEnabledActivities().filter((a) => !this.isDoneToday(a.id));
    const { morningStart, morningEnd, afternoonEnd, eveningEnd, bufferMinutes } = this.settings.devConfig;

    const timeSlots: { period: string; startHour: number; endHour: number }[] = [
      { period: "morning", startHour: morningStart, endHour: morningEnd },
      { period: "afternoon", startHour: morningEnd, endHour: afternoonEnd },
      { period: "evening", startHour: afternoonEnd, endHour: eveningEnd },
    ];

    const entries: DayMapEntry[] = [];
    const scheduled = new Set<string>();

    // 1. Place time-override activities first
    for (const activity of activities) {
      if (!activity.timeOverride) continue;
      entries.push({
        activityId: activity.id,
        activityName: activity.name,
        emoji: activity.emoji,
        category: activity.category,
        startHour: activity.timeOverride.startHour,
        endHour: activity.timeOverride.endHour,
        estimatedDuration: activity.estimatedDuration,
        status: "pending",
        priorityReason: "time",
      });
      scheduled.add(activity.id);
    }

    // 2. Place neglected activities in their preferred slots
    const neglected = this.getNeglectedActivitiesSorted(activities)
      .filter((a) => !scheduled.has(a.id));

    for (const activity of neglected) {
      const slot = this.findSlotForActivity(activity, timeSlots, entries, bufferMinutes);
      if (slot) {
        entries.push({
          activityId: activity.id,
          activityName: activity.name,
          emoji: activity.emoji,
          category: activity.category,
          startHour: slot.startHour,
          endHour: slot.endHour,
          estimatedDuration: activity.estimatedDuration,
          status: "pending",
          priorityReason: "neglect",
        });
        scheduled.add(activity.id);
      }
    }

    // 3. Place remaining weekly-target activities
    const remaining = activities
      .filter((a) => !scheduled.has(a.id))
      .filter((a) => {
        const progress = this.getWeeklyProgress(a.id);
        return progress.done < progress.target;
      })
      .sort((a, b) => b.priority - a.priority);

    for (const activity of remaining) {
      const slot = this.findSlotForActivity(activity, timeSlots, entries, bufferMinutes);
      if (slot) {
        entries.push({
          activityId: activity.id,
          activityName: activity.name,
          emoji: activity.emoji,
          category: activity.category,
          startHour: slot.startHour,
          endHour: slot.endHour,
          estimatedDuration: activity.estimatedDuration,
          status: "pending",
          priorityReason: "weekly",
        });
        scheduled.add(activity.id);
      }
    }

    // Merge calendar task entries
    for (const calEntry of this.calendarEntries) {
      entries.push(calEntry);
    }

    // Sort by start time
    entries.sort((a, b) => a.startHour - b.startHour);

    // Mark done activities (only for non-calendar entries)
    for (const entry of entries) {
      if (!entry.isCalendarTask && this.isDoneToday(entry.activityId)) {
        entry.status = "done";
      }
    }

    return entries;
  }

  private findSlotForActivity(
    activity: ActivityConfig,
    timeSlots: { period: string; startHour: number; endHour: number }[],
    existing: DayMapEntry[],
    bufferMinutes: number
  ): { startHour: number; endHour: number } | null {
    const durationHours = activity.estimatedDuration / 60;
    const bufferHours = bufferMinutes / 60;

    // Find preferred slot
    const preferredSlot = timeSlots.find((s) => s.period === activity.preferredTime)
      ?? timeSlots.find((s) => s.period === "anytime")
      ?? timeSlots[0];

    // Find first available time in preferred slot
    let candidateStart = preferredSlot.startHour;

    for (const entry of existing.sort((a, b) => a.startHour - b.startHour)) {
      if (entry.startHour < preferredSlot.endHour && entry.endHour > candidateStart) {
        candidateStart = entry.endHour + bufferHours;
      }
    }

    const candidateEnd = candidateStart + durationHours;
    if (candidateEnd <= preferredSlot.endHour) {
      return { startHour: candidateStart, endHour: candidateEnd };
    }

    // Try any slot
    for (const slot of timeSlots) {
      if (slot === preferredSlot) continue;
      candidateStart = slot.startHour;
      for (const entry of existing.sort((a, b) => a.startHour - b.startHour)) {
        if (entry.startHour < slot.endHour && entry.endHour > candidateStart) {
          candidateStart = entry.endHour + bufferHours;
        }
      }
      if (candidateStart + durationHours <= slot.endHour) {
        return { startHour: candidateStart, endHour: candidateStart + durationHours };
      }
    }

    return null;
  }

  // --- Weekly Data for Bar Chart ---

  getWeeklyCompletionsByDay(): Array<{ day: string; date: string; completions: Map<Category, number> }> {
    const effectiveNow = this.getEffectiveNow();
    const weekStart = this.getWeekStart(effectiveNow);
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const result: Array<{ day: string; date: string; completions: Map<Category, number> }> = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      const dateStr = d.toISOString().slice(0, 10);
      const dayCompletions = new Map<Category, number>();

      for (const activity of this.getEnabledActivities()) {
        const comps = this.getCompletionsForActivity(activity.id);
        const done = comps.some((c) => c.date === dateStr && c.completed);
        if (done) {
          const current = dayCompletions.get(activity.category) ?? 0;
          dayCompletions.set(activity.category, current + 1);
        }
      }

      result.push({ day: days[i], date: dateStr, completions: dayCompletions });
    }

    return result;
  }

  getActiveDaysThisWeek(): number {
    const weekly = this.getWeeklyCompletionsByDay();
    return weekly.filter((d) => {
      let total = 0;
      d.completions.forEach((v) => { total += v; });
      return total > 0;
    }).length;
  }

  getBestDayThisWeek(): string {
    const weekly = this.getWeeklyCompletionsByDay();
    let best = weekly[0];
    let bestTotal = 0;
    for (const d of weekly) {
      let total = 0;
      d.completions.forEach((v) => { total += v; });
      if (total > bestTotal) {
        bestTotal = total;
        best = d;
      }
    }
    return bestTotal > 0 ? best.day : "--";
  }
}
