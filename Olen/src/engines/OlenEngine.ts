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

  getEffectiveToday(): string {
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
    const totalCompletions = this.getTotalCompletions();

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

    const tier = totalCompletions < 50 ? "light" : totalCompletions < 200 ? "mid" : "heavy";

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
    const all = this.getAllSuggestions();
    return all.length > 0 ? all[0] : null;
  }

  /**
   * Returns ALL ranked suggestions in priority order.
   * The directive card uses this to cycle through options on "Not now".
   */
  getAllSuggestions(): DirectiveSuggestion[] {
    const activities = this.getEnabledActivities();
    if (activities.length === 0) return [];

    const suggestions: DirectiveSuggestion[] = [];
    const used = new Set<string>();

    const addIfNew = (s: DirectiveSuggestion) => {
      if (!used.has(s.activityId)) {
        used.add(s.activityId);
        suggestions.push(s);
      }
    };

    // 1. DEATH CHECK
    if (this.settings.inTartarus && this.settings.enableTartarus !== false) {
      const neglected = this.getNeglectedActivitiesSorted(activities);
      const targets = neglected.length > 0 ? neglected : [...activities].sort((a, b) => b.priority - a.priority);
      for (const t of targets) {
        addIfNew(this.buildSuggestion(t, "death", "Escape Tartarus — complete your penance."));
      }
    }

    if (this.settings.failedThresholdDays >= 2) {
      const neglected = this.getNeglectedActivitiesSorted(activities);
      for (const n of neglected) {
        addIfNew(this.buildSuggestion(n, "death", "Death looms. Act now or descend to Tartarus."));
      }
    }

    // 2. BOSS FINISH
    if (this.bossEngine.isDangerZone()) {
      const notDone = activities.filter((a) => !this.isDoneToday(a.id))
        .sort((a, b) => b.damagePerCompletion - a.damagePerCompletion);
      for (const a of notDone) {
        addIfNew(this.buildSuggestion(a, "boss", "One final blow remains. Finish the beast."));
      }
    }

    // 3. NEGLECT + PRIORITY
    const neglected = this.getNeglectedActivitiesSorted(activities);
    for (const n of neglected) {
      if (used.has(n.id)) continue;
      const days = this.getDaysSinceLastDone(n.id);
      const lore = NEGLECT_LORE[n.id] ?? NEGLECT_LORE[n.category] ?? `${days} days since you last practiced. The skill atrophies.`;
      addIfNew(this.buildSuggestion(n, "neglect", lore));
    }

    // 4. WEEKLY CATCH-UP
    const behindSchedule = this.getBehindScheduleActivities(activities);
    for (const a of behindSchedule) {
      if (used.has(a.id)) continue;
      const progress = this.getWeeklyProgress(a.id);
      addIfNew(this.buildSuggestion(a, "weekly", `Behind schedule: ${progress.done}/${progress.target} this week.`));
    }

    // 5. CHAIN CHECK
    const chained = this.getChainedActivities(activities);
    for (const a of chained) {
      if (used.has(a.id)) continue;
      addIfNew(this.buildSuggestion(a, "chain", "Your prerequisite is done. Time for the next step."));
    }

    // 6. TIME-BASED
    const timeBased = this.getTimeBasedActivities(activities);
    for (const a of timeBased) {
      if (used.has(a.id)) continue;
      addIfNew(this.buildSuggestion(a, "time", "The time is right. Begin."));
    }

    // 7. BALANCED FALLBACK — all remaining not-done activities
    const remaining = activities
      .filter((a) => !this.isDoneToday(a.id) && !used.has(a.id))
      .sort((a, b) => this.getDaysSinceLastDone(b.id) - this.getDaysSinceLastDone(a.id));

    for (const a of remaining) {
      addIfNew(this.buildSuggestion(a, "balanced", "Balance your path. This has waited longest."));
    }

    return suggestions;
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
    // Activities with blocking rules get top priority — they suppress others
    const blockers = activities.filter((a) => a.blocks && a.blocks.length > 0);
    if (blockers.length > 0) return blockers[0];

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

      // Check if this activity is blocked by a neglected blocker
      const isBlocked = activities.some((other) =>
        other.blocks?.includes(activity.id) && other.id !== activity.id
      );
      if (isBlocked) continue; // skip — a blocker takes precedence

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
    const remainingDays = 7 - adjustedDay + 1; // including today

    return activities
      .filter((a) => {
        if (this.isDoneToday(a.id)) return false;
        const progress = this.getWeeklyProgress(a.id);
        const deficit = progress.target - progress.done;
        if (deficit <= 0) return false;
        // Behind if needed pace (deficit/remaining) exceeds average pace (target/7)
        // Equivalent: deficit * 7 > target * remainingDays
        return deficit * 7 > progress.target * remainingDays;
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
    const effectiveToday = this.getEffectiveToday();
    const skipped = this.settings.skippedToday?.date === effectiveToday
      ? new Set(this.settings.skippedToday.activityIds)
      : new Set<string>();
    const activities = this.getEnabledActivities().filter((a) => !this.isDoneToday(a.id) && !skipped.has(a.id));
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

    // Apply custom day order if set for today
    const dayOrder = this.settings.dayMapOrder;
    if (dayOrder && dayOrder.date === effectiveToday && dayOrder.order.length > 0) {
      const orderMap = new Map(dayOrder.order.map((id, i) => [id, i]));
      entries.sort((a, b) => {
        const ai = orderMap.has(a.activityId) ? orderMap.get(a.activityId)! : 9999;
        const bi = orderMap.has(b.activityId) ? orderMap.get(b.activityId)! : 9999;
        return ai - bi;
      });
      // Reassign time slots based on new order
      let cursor = entries.length > 0 ? entries[0].startHour : this.settings.devConfig.morningStart;
      for (const entry of entries) {
        const dur = entry.estimatedDuration / 60;
        entry.startHour = cursor;
        entry.endHour = cursor + dur;
        cursor = entry.endHour + this.settings.devConfig.bufferMinutes / 60;
      }
    }

    // Mark done activities (only for non-calendar entries)
    for (const entry of entries) {
      if (!entry.isCalendarTask && this.isDoneToday(entry.activityId)) {
        entry.status = "done";
      }
    }

    // Also filter out skipped calendar entries
    const filteredEntries = entries.filter((e) => {
      if (e.isCalendarTask && e.calendarTaskId && skipped.has(e.calendarTaskId)) return false;
      return true;
    });

    return filteredEntries;
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

  // --- Daily Stats ---

  getDailyStats(): { sessions: number; perActivity: Array<{ id: string; name: string; emoji: string; category: Category; done: boolean }> } {
    const activities = this.getEnabledActivities();
    let sessions = 0;
    const perActivity: Array<{ id: string; name: string; emoji: string; category: Category; done: boolean }> = [];

    for (const activity of activities) {
      const done = this.isDoneToday(activity.id);
      if (done) sessions++;
      perActivity.push({
        id: activity.id,
        name: activity.name,
        emoji: activity.emoji,
        category: activity.category,
        done,
      });
    }

    return { sessions, perActivity };
  }

  // --- Weekly Stats (enhanced) ---

  getWeeklyStats(): {
    activeDays: number;
    totalSessions: number;
    bestDay: string;
    weekOverWeek: number; // +/- difference vs last week
    byDay: Array<{ day: string; date: string; completions: Map<Category, number> }>;
  } {
    const byDay = this.getWeeklyCompletionsByDay();
    const activeDays = this.getActiveDaysThisWeek();
    const bestDay = this.getBestDayThisWeek();

    let totalSessions = 0;
    for (const d of byDay) {
      d.completions.forEach((v) => { totalSessions += v; });
    }

    // Last week's total for comparison
    const effectiveNow = this.getEffectiveNow();
    const lastWeekStart = new Date(this.getWeekStart(effectiveNow));
    lastWeekStart.setDate(lastWeekStart.getDate() - 7);

    let lastWeekTotal = 0;
    for (let i = 0; i < 7; i++) {
      const d = new Date(lastWeekStart);
      d.setDate(d.getDate() + i);
      const dateStr = d.toISOString().slice(0, 10);
      for (const activity of this.getEnabledActivities()) {
        const comps = this.getCompletionsForActivity(activity.id);
        if (comps.some((c) => c.date === dateStr && c.completed)) lastWeekTotal++;
      }
    }

    return {
      activeDays,
      totalSessions,
      bestDay,
      weekOverWeek: totalSessions - lastWeekTotal,
      byDay,
    };
  }

  // --- Monthly Stats ---

  getMonthlyStats(): {
    totalSessions: number;
    activeDays: number;
    avgDaily: number;
    byWeek: Array<{ label: string; total: number; byCategory: Map<Category, number> }>;
    calendarGrid: Array<{ date: string; total: number }>;
  } {
    const effectiveNow = this.getEffectiveNow();
    const year = effectiveNow.getFullYear();
    const month = effectiveNow.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayDate = effectiveNow.getDate();

    const activities = this.getEnabledActivities();
    const daysSet = new Set<string>();
    let totalSessions = 0;
    const calendarGrid: Array<{ date: string; total: number }> = [];

    // Per-day counts for the whole month
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      let dayTotal = 0;
      for (const activity of activities) {
        const comps = this.getCompletionsForActivity(activity.id);
        if (comps.some((c) => c.date === dateStr && c.completed)) dayTotal++;
      }
      if (dayTotal > 0) daysSet.add(dateStr);
      totalSessions += dayTotal;
      calendarGrid.push({ date: dateStr, total: dayTotal });
    }

    // Group into weeks
    const byWeek: Array<{ label: string; total: number; byCategory: Map<Category, number> }> = [];
    let weekNum = 1;
    for (let d = 1; d <= daysInMonth; d += 7) {
      const weekEnd = Math.min(d + 6, daysInMonth);
      let weekTotal = 0;
      const byCat = new Map<Category, number>();
      for (let wd = d; wd <= weekEnd; wd++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(wd).padStart(2, "0")}`;
        for (const activity of activities) {
          const comps = this.getCompletionsForActivity(activity.id);
          if (comps.some((c) => c.date === dateStr && c.completed)) {
            weekTotal++;
            byCat.set(activity.category, (byCat.get(activity.category) ?? 0) + 1);
          }
        }
      }
      byWeek.push({ label: `W${weekNum}`, total: weekTotal, byCategory: byCat });
      weekNum++;
    }

    return {
      totalSessions,
      activeDays: daysSet.size,
      avgDaily: todayDate > 0 ? Math.round((totalSessions / todayDate) * 10) / 10 : 0,
      byWeek,
      calendarGrid,
    };
  }

  // --- Yearly Stats ---

  getYearlyStats(): {
    totalSessions: number;
    activeDays: number;
    byMonth: Array<{ label: string; total: number; byCategory: Map<Category, number> }>;
    categoryDistribution: Map<Category, number>;
  } {
    const effectiveNow = this.getEffectiveNow();
    const year = effectiveNow.getFullYear();
    const activities = this.getEnabledActivities();
    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let totalSessions = 0;
    const daysSet = new Set<string>();
    const categoryDist = new Map<Category, number>();
    const byMonth: Array<{ label: string; total: number; byCategory: Map<Category, number> }> = [];

    for (let m = 0; m < 12; m++) {
      const daysInMonth = new Date(year, m + 1, 0).getDate();
      let monthTotal = 0;
      const byCat = new Map<Category, number>();

      for (let d = 1; d <= daysInMonth; d++) {
        const dateStr = `${year}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        for (const activity of activities) {
          const comps = this.getCompletionsForActivity(activity.id);
          if (comps.some((c) => c.date === dateStr && c.completed)) {
            monthTotal++;
            totalSessions++;
            daysSet.add(dateStr);
            byCat.set(activity.category, (byCat.get(activity.category) ?? 0) + 1);
            categoryDist.set(activity.category, (categoryDist.get(activity.category) ?? 0) + 1);
          }
        }
      }

      byMonth.push({ label: monthLabels[m], total: monthTotal, byCategory: byCat });
    }

    return {
      totalSessions,
      activeDays: daysSet.size,
      byMonth,
      categoryDistribution: categoryDist,
    };
  }
}
