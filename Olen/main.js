"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => OlenPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/constants.ts
var VIEW_TYPE_OLEN = "olen-dashboard-view";
var VIEW_TYPE_WORKSPACE = "olen-workspace-view";
var BOSSES = [
  { tier: 1, name: "Shadow of Apathy", rank: "Doomscroller", description: "The weight of inertia that keeps you scrolling instead of starting", lore: "Born from forgotten promises and unopened gym bags, the Shadow feeds on potential unrealized.", hpFormula: "weeklyTarget \xD7 1.1" },
  { tier: 2, name: "Siren's Call", rank: "Armchair General", description: "Distraction's sweet song that pulls focus from committed work", lore: "She sings of easier paths, of just one more video, of starting tomorrow instead.", hpFormula: "weeklyTarget \xD7 1.2" },
  { tier: 3, name: "Hydra of Habits", rank: "Apprentice", description: "The complexity of managing multiple routines simultaneously", lore: "Cut one head and two grow back. Each habit demands its own attention.", hpFormula: "weeklyTarget \xD7 1.3" },
  { tier: 4, name: "Minotaur's Maze", rank: "Citizen", description: "The confusion and routine that traps even dedicated practitioners", lore: "Lost in corridors of habit, the path forward is never clear.", hpFormula: "weeklyTarget \xD7 1.7" },
  { tier: 5, name: "Medusa's Gaze", rank: "Scholar", description: "The paralysis that comes from overthinking or fear of failure", lore: "One glance and you are frozen, unable to act, unable to move.", hpFormula: "weeklyTarget \xD7 1.9" },
  { tier: 6, name: "Nemean Lion", rank: "Samurai", description: "Seemingly invulnerable obstacles that require persistent effort", lore: "Its hide cannot be pierced by ordinary means. Only discipline cuts through.", hpFormula: "weeklyTarget \xD7 2.1" },
  { tier: 7, name: "Chimera", rank: "Templar", description: "Multi-headed beast requiring balanced attention across all domains", lore: "Lion, goat, and serpent \u2014 each head demands mastery of a different art.", hpFormula: "weeklyTarget \xD7 2.3" },
  { tier: 8, name: "Cerberus", rank: "Stoic", description: "Guardian of transformation testing if habits have become identity", lore: "Three heads, three tests. Past the gate lies transformation.", hpFormula: "weeklyTarget \xD7 2.5" },
  { tier: 9, name: "Scylla & Charybdis", rank: "Olympian", description: "The impossible choice between competing priorities", lore: "Between the rock and the whirlpool, both must somehow be honored.", hpFormula: "weeklyTarget \xD7 2.7" },
  { tier: 10, name: "The Furies", rank: "Sage", description: "Internal voices of guilt and shame attacking even the successful", lore: "They whisper your failures, remind you of every skip, every weakness.", hpFormula: "weeklyTarget \xD7 2.9" },
  { tier: 11, name: "Typhon", rank: "Titan", description: "The force of chaos threatening to undo all progress", lore: "Father of all monsters, he seeks to return you to the beginning.", hpFormula: "weeklyTarget \xD7 3.1" },
  { tier: 12, name: "Kronos", rank: "Archon", description: "Time itself as an enemy, testing sustained intensity", lore: "The Titan who devours his children. Can you maintain as weeks become months?", hpFormula: "weeklyTarget \xD7 3.3" },
  { tier: 13, name: "Chaos Primordial", rank: "Master of All", description: "The ultimate test of unshakeable discipline", lore: "Before creation, before order, only Chaos. To master it is to master yourself.", hpFormula: "weeklyTarget \xD7 3.6" }
];
var RANK_TIER_COLORS = {
  1: "#6B7280",
  2: "#EF4444",
  3: "#F59E0B",
  4: "#10B981",
  5: "#3B82F6",
  6: "#8B5CF6",
  7: "#EC4899",
  8: "#F97316",
  9: "#06B6D4",
  10: "#A855F7",
  11: "#DC2626",
  12: "#7C3AED",
  13: "#c9a227"
};
var CHAPTER_NAMES = {
  1: "Initiate",
  2: "Explorer",
  3: "Journeyman",
  4: "Adept",
  5: "Philosopher",
  6: "Master",
  7: "Sage",
  8: "Oracle",
  9: "Titan",
  10: "Olympian"
};
var SINGLE_DOMINANT_TITLES = {
  body: { light: "Athlete", mid: "Warrior", heavy: "Titan" },
  mind: { light: "Student", mid: "Scholar", heavy: "Polymath" },
  spirit: { light: "Seeker", mid: "Sage", heavy: "Oracle" }
};
var TWO_CATEGORY_TITLES = {
  "body+mind": { light: "Disciplined Thinker", mid: "Philosopher-King", heavy: "Renaissance Titan" },
  "body+spirit": { light: "Ascetic", mid: "Templar", heavy: "Olympian Monk" },
  "mind+spirit": { light: "Contemplative", mid: "Mystic Scholar", heavy: "Enlightened One" }
};
var BALANCED_TITLES = {
  light: "Initiate of Balance",
  mid: "Renaissance Soul",
  heavy: "Eudaimon"
};
var DEFAULT_ACTIVITIES = [
  {
    id: "workout",
    name: "Workout",
    emoji: "\u{1F4AA}",
    category: "body",
    enabled: true,
    folder: "Personal Life/01 Workout",
    property: "Workout",
    damagePerCompletion: 1,
    weeklyTarget: 7,
    trackingMode: "daily",
    hasWorkspace: true,
    workspaceTemplate: "workout",
    priority: 8,
    neglectThreshold: 2,
    preferredTime: "morning",
    estimatedDuration: 60
  },
  {
    id: "cardio",
    name: "Cardio",
    emoji: "\u{1F3C3}",
    category: "body",
    enabled: true,
    folder: "Personal Life/02 Cardio",
    property: "Cardio",
    damagePerCompletion: 1,
    weeklyTarget: 4,
    trackingMode: "daily",
    hasWorkspace: true,
    priority: 7,
    neglectThreshold: 3,
    preferredTime: "morning",
    estimatedDuration: 30,
    alternatesWith: "workout"
  },
  {
    id: "reading",
    name: "Reading",
    emoji: "\u{1F4D6}",
    category: "mind",
    enabled: true,
    folder: "Personal Life/03 Reading",
    property: "Reading",
    damagePerCompletion: 1,
    weeklyTarget: 6,
    trackingMode: "daily",
    hasWorkspace: true,
    priority: 6,
    neglectThreshold: 3,
    preferredTime: "evening",
    estimatedDuration: 45
  },
  {
    id: "drumming",
    name: "Drumming",
    emoji: "\u{1F941}",
    category: "spirit",
    enabled: true,
    folder: "Personal Life/04 Drumming",
    property: "Drumming",
    damagePerCompletion: 1,
    weeklyTarget: 6,
    trackingMode: "daily",
    hasWorkspace: true,
    priority: 6,
    neglectThreshold: 3,
    preferredTime: "afternoon",
    estimatedDuration: 45
  },
  {
    id: "health-study",
    name: "Health Study",
    emoji: "\u{1F9EC}",
    category: "mind",
    enabled: true,
    folder: "Personal Life/05 Health Study",
    property: "Health Study",
    damagePerCompletion: 1,
    weeklyTarget: 3,
    trackingMode: "daily",
    hasWorkspace: true,
    priority: 4,
    neglectThreshold: 4,
    preferredTime: "afternoon",
    estimatedDuration: 30
  },
  {
    id: "social",
    name: "Social",
    emoji: "\u{1F91D}",
    category: "spirit",
    enabled: true,
    folder: "Personal Life/06 Social",
    property: "Social",
    damagePerCompletion: 1,
    weeklyTarget: 2,
    trackingMode: "daily",
    hasWorkspace: true,
    priority: 5,
    neglectThreshold: 5,
    preferredTime: "evening",
    estimatedDuration: 60
  },
  {
    id: "drawing",
    name: "Drawing",
    emoji: "\u{1F3A8}",
    category: "spirit",
    enabled: true,
    folder: "Personal Life/07 Drawing",
    property: "Drawing",
    damagePerCompletion: 1,
    weeklyTarget: 4,
    trackingMode: "daily",
    hasWorkspace: true,
    priority: 7,
    neglectThreshold: 3,
    preferredTime: "afternoon",
    estimatedDuration: 60
  }
];
var NEGLECT_LORE = {
  workout: "Your muscles forget what they once knew. The body craves discipline \u2014 answer it.",
  cardio: "The heart grows sluggish without the pounding rhythm of effort.",
  reading: "The mind starves on distraction. Feed it with pages, not pixels.",
  drumming: "Silence is not rest \u2014 it is the death of rhythm. Pick up the sticks.",
  "health-study": "Knowledge of the body is power over it. Neglect invites ignorance.",
  social: "Even warriors need fellowship. Isolation breeds stagnation.",
  drawing: "The beast within you grows weak without the discipline of line and form."
};
var FALLBACK_QUOTES = [
  { text: "You have power over your mind \u2014 not outside events. Realize this, and you will find strength.", attribution: "Marcus Aurelius" },
  { text: "We suffer more often in imagination than in reality.", attribution: "Seneca" },
  { text: "The impediment to action advances action. What stands in the way becomes the way.", attribution: "Marcus Aurelius" },
  { text: "No man is free who is not master of himself.", attribution: "Epictetus" },
  { text: "Waste no more time arguing about what a good man should be. Be one.", attribution: "Marcus Aurelius" },
  { text: "It is not that we have a short time to live, but that we waste a good deal of it.", attribution: "Seneca" },
  { text: "First say to yourself what you would be; and then do what you have to do.", attribution: "Epictetus" },
  { text: "The happiness of your life depends upon the quality of your thoughts.", attribution: "Marcus Aurelius" },
  { text: "He who fears death will never do anything worth of a man who is alive.", attribution: "Seneca" },
  { text: "Difficulties strengthen the mind, as labor does the body.", attribution: "Seneca" },
  { text: "How long are you going to wait before you demand the best for yourself?", attribution: "Epictetus" },
  { text: "The soul becomes dyed with the colour of its thoughts.", attribution: "Marcus Aurelius" }
];
function toRoman(num) {
  const vals = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";
  for (let i = 0; i < vals.length; i++) {
    while (num >= vals[i]) {
      result += syms[i];
      num -= vals[i];
    }
  }
  return result;
}
var DEFAULT_WORKSPACE_STATES = [
  { id: "discipline", name: "Discipline", icon: "\u25C6", color: "#928d85", enabled: true, quoteFolderPath: "", xpMultiplier: 1 },
  { id: "flow", name: "Flow", icon: "\u2248", color: "#c9a84c", enabled: true, quoteFolderPath: "", xpMultiplier: 1.5 },
  { id: "skipped", name: "Skipped", icon: "\u25CB", color: "#8b2d35", enabled: true, quoteFolderPath: "", xpMultiplier: 0 }
];
var DEFAULT_DEV_CONFIG = {
  labels: {
    greeting_morning: "Good morning",
    greeting_afternoon: "Good afternoon",
    greeting_evening: "Good evening",
    greeting_night: "Good night",
    directive_title: "THE DIRECTIVE",
    boss_status_title: "BOSS STATUS",
    weekly_rhythm_title: "WEEKLY RHYTHM",
    activity_grid_title: "ACTIVITIES",
    temple_title: "THE TEMPLE",
    eudaimonia_title: "Eudaimonia Index",
    daymap_title: "YOUR DAY",
    begin_workspace: "ENTER WORKSPACE",
    not_now: "NOT NOW"
  },
  xpPerCompletion: 10,
  streakBonusMultiplier: 1.5,
  bufferMinutes: 15,
  morningStart: 6,
  morningEnd: 12,
  afternoonEnd: 18,
  eveningEnd: 23,
  themeOverrides: {},
  animationStaggerMs: 80,
  heroHeight: 350,
  sectionOrder: [
    "hero",
    "eudaimonia",
    "daymap",
    "directive",
    "boss",
    "weekly",
    "activities",
    "temple",
    "quote"
  ],
  hiddenSections: [],
  activityGridColumns: 2
};
var DEFAULT_CALENDAR_SETTINGS = {
  enableDailyNotes: true,
  dailyNotesFolder: "",
  dailyNotesFormat: "YYYY-MM-DD",
  enableTasksPlugin: false,
  enableQuickTasks: true,
  quickTasks: []
};
var DEFAULT_OLEN_SETTINGS = {
  // Profile
  userName: "Warrior",
  myWhy: "",
  heroBackground: "",
  // Activities
  activities: DEFAULT_ACTIVITIES,
  // Categories
  categoryColors: {
    body: "#c9a84c",
    mind: "#6b8cce",
    spirit: "#8b7ec8"
  },
  titleOverride: "",
  // Eudaimonia
  categoryXP: {
    body: 0,
    mind: 0,
    spirit: 0
  },
  // Boss
  currentTier: 1,
  bossMaxHP: 35,
  bossCurrentHP: 35,
  inTartarus: false,
  tartarusPenanceTasks: [],
  tartarusStartDate: null,
  failedThresholdDays: 0,
  consecutivePerfectWeeks: 0,
  // Temple
  templeTasks: [
    { id: "bathing", name: "Bathing", lastCompleted: null, intervalDays: 1, emoji: "\u{1F6BF}" },
    { id: "facial-hair", name: "Facial hair", lastCompleted: null, intervalDays: 2, emoji: "\u{1FA92}" },
    { id: "nails", name: "Nails", lastCompleted: null, intervalDays: 7, emoji: "\u2702\uFE0F" },
    { id: "haircut", name: "Haircut", lastCompleted: null, intervalDays: 21, emoji: "\u{1F488}" }
  ],
  // Rewards
  pendingRewards: [],
  claimedRewards: [],
  bankedRewards: [],
  // System
  systemState: "active",
  pauseStartTime: null,
  totalPausedTime: 0,
  migrated: false,
  simulatedDate: null,
  // Theme
  themeOverrides: {},
  // Dev
  devConfig: DEFAULT_DEV_CONFIG,
  // Workspace
  workspaceCompletionStates: DEFAULT_WORKSPACE_STATES,
  activeWorkspace: null,
  // Calendar
  calendar: DEFAULT_CALENDAR_SETTINGS,
  // Quote
  quoteFolderPath: "",
  lastQuoteIndex: -1,
  recentQuoteIds: []
};

// src/views/DashboardView.ts
var import_obsidian2 = require("obsidian");

// src/engines/BossEngine.ts
var BossEngine = class {
  constructor(settings) {
    this.settings = settings;
  }
  getBossForTier(tier) {
    return BOSSES.find((b) => b.tier === tier) ?? null;
  }
  getCurrentBoss() {
    return this.getBossForTier(this.settings.currentTier);
  }
  getBossStatus() {
    const tier = this.settings.currentTier;
    const boss = this.getCurrentBoss() ?? BOSSES[0];
    const currentHP = this.settings.bossCurrentHP;
    const maxHP = this.settings.bossMaxHP;
    const percent = maxHP > 0 ? Math.round(currentHP / maxHP * 100) : 0;
    const tierColor = RANK_TIER_COLORS[tier] ?? "#6B7280";
    return {
      boss,
      currentHP,
      maxHP,
      percent,
      tier,
      rank: boss.rank,
      tierColor,
      inTartarus: this.settings.inTartarus,
      isDangerZone: this.isDangerZone()
    };
  }
  isDangerZone() {
    const { bossCurrentHP, bossMaxHP } = this.settings;
    if (bossMaxHP <= 0)
      return false;
    return bossCurrentHP / bossMaxHP < 0.15;
  }
  isInTartarus() {
    return this.settings.inTartarus;
  }
  getHPColor(percent) {
    if (percent > 60)
      return "#22c55e";
    if (percent > 30)
      return "#eab308";
    if (percent > 15)
      return "#f97316";
    return "#ef4444";
  }
};

// src/engines/OlenEngine.ts
var OlenEngine = class {
  constructor(settings, completions, now) {
    // --- Day Map Generation ---
    this.calendarEntries = [];
    this.settings = settings;
    this.completions = completions;
    this.now = now;
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    this.today = d.toISOString().slice(0, 10);
    this.bossEngine = new BossEngine(settings);
  }
  // --- Effective Date (supports simulated date + pause) ---
  getEffectiveNow() {
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
  getEffectiveToday() {
    const d = this.getEffectiveNow();
    d.setHours(0, 0, 0, 0);
    return d.toISOString().slice(0, 10);
  }
  // --- Data Access ---
  getEnabledActivities() {
    return this.settings.activities.filter((a) => a.enabled);
  }
  getCompletionsForActivity(activityId) {
    return this.completions[activityId] ?? [];
  }
  getDaysSinceLastDone(activityId) {
    const comps = this.getCompletionsForActivity(activityId);
    const effectiveNow = this.getEffectiveNow();
    const todayMs = new Date(effectiveNow).setHours(0, 0, 0, 0);
    const completedDates = comps.filter((c) => c.completed).map((c) => new Date(c.date).getTime()).filter((t) => !isNaN(t) && t <= todayMs).sort((a, b) => b - a);
    if (completedDates.length === 0)
      return 999;
    const msPerDay = 24 * 60 * 60 * 1e3;
    return Math.floor((todayMs - completedDates[0]) / msPerDay);
  }
  isDoneToday(activityId) {
    const effectiveToday = this.getEffectiveToday();
    const comps = this.getCompletionsForActivity(activityId);
    return comps.some((c) => c.date === effectiveToday && c.completed);
  }
  // --- Weekly Progress ---
  getWeeklyProgress(activityId) {
    const activity = this.settings.activities.find((a) => a.id === activityId);
    if (!activity)
      return { done: 0, target: 0 };
    const effectiveNow = this.getEffectiveNow();
    const weekStart = this.getWeekStart(effectiveNow);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);
    const comps = this.getCompletionsForActivity(activityId);
    const done = comps.filter((c) => {
      if (!c.completed)
        return false;
      const d = new Date(c.date);
      return d >= weekStart && d < weekEnd;
    }).length;
    return { done, target: activity.weeklyTarget };
  }
  getWeekStart(date) {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    d.setDate(diff);
    return d;
  }
  // --- Streaks ---
  getActivityStreak(activityId) {
    const comps = this.getCompletionsForActivity(activityId);
    const effectiveNow = this.getEffectiveNow();
    const today = new Date(effectiveNow);
    today.setHours(0, 0, 0, 0);
    const completedDates = comps.filter((c) => c.completed).map((c) => {
      const d = new Date(c.date);
      d.setHours(0, 0, 0, 0);
      return d;
    }).filter((d) => !isNaN(d.getTime()) && d <= today).sort((a, b) => b.getTime() - a.getTime());
    if (completedDates.length === 0)
      return 0;
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
  getOverallStreak() {
    const activities = this.getEnabledActivities();
    const streaks = activities.map((a) => this.getActivityStreak(a.id));
    return Math.max(0, ...streaks);
  }
  // --- Analytics ---
  getTotalCompletions() {
    let total = 0;
    for (const activity of this.getEnabledActivities()) {
      const comps = this.getCompletionsForActivity(activity.id);
      total += comps.filter((c) => c.completed).length;
    }
    return total;
  }
  getDaysOfPresence() {
    const daysSet = /* @__PURE__ */ new Set();
    for (const activity of this.getEnabledActivities()) {
      const comps = this.getCompletionsForActivity(activity.id);
      for (const c of comps) {
        if (c.completed)
          daysSet.add(c.date);
      }
    }
    return daysSet.size;
  }
  // --- Category XP & Levels ---
  getCategoryXP(category) {
    const xpPer = this.settings.devConfig.xpPerCompletion;
    let xp = this.settings.categoryXP[category] ?? 0;
    for (const activity of this.getEnabledActivities()) {
      if (activity.category !== category)
        continue;
      const comps = this.getCompletionsForActivity(activity.id);
      xp = comps.filter((c) => c.completed).length * xpPer;
    }
    return xp;
  }
  getCategoryLevel(category) {
    const xp = this.getCategoryXP(category);
    const level = Math.floor(xp / 100);
    const progressToNext = xp % 100;
    return { category, xp, level, progressToNext };
  }
  getAllCategoryLevels() {
    return ["body", "mind", "spirit"].map((c) => this.getCategoryLevel(c));
  }
  getEudaimoniaIndex() {
    return this.getAllCategoryLevels().reduce((sum, cl) => sum + cl.level, 0);
  }
  getChapter() {
    const index = this.getEudaimoniaIndex();
    const chapterNum = Math.min(10, Math.floor(index / 10) + 1);
    const name = CHAPTER_NAMES[chapterNum] ?? "Initiate";
    return { number: chapterNum, name };
  }
  getEudaimoniaProgress() {
    const index = this.getEudaimoniaIndex();
    return index % 10 * 10;
  }
  // --- Dynamic Title ---
  getDynamicTitle() {
    if (this.settings.titleOverride)
      return this.settings.titleOverride;
    const levels = this.getAllCategoryLevels();
    const totalCompletions = this.getTotalCompletions();
    const categoryCompletions = { body: 0, mind: 0, spirit: 0 };
    for (const activity of this.getEnabledActivities()) {
      const comps = this.getCompletionsForActivity(activity.id);
      categoryCompletions[activity.category] += comps.filter((c) => c.completed).length;
    }
    const total = Object.values(categoryCompletions).reduce((a, b) => a + b, 0);
    if (total === 0)
      return "Initiate";
    const weights = {
      body: total > 0 ? categoryCompletions.body / total : 0,
      mind: total > 0 ? categoryCompletions.mind / total : 0,
      spirit: total > 0 ? categoryCompletions.spirit / total : 0
    };
    const tier = totalCompletions < 50 ? "light" : totalCompletions < 200 ? "mid" : "heavy";
    for (const cat of ["body", "mind", "spirit"]) {
      if (weights[cat] >= 0.7) {
        return SINGLE_DOMINANT_TITLES[cat]?.[tier] ?? "Initiate";
      }
    }
    if (weights.body >= 0.25 && weights.mind >= 0.25 && weights.spirit >= 0.25) {
      return BALANCED_TITLES[tier] ?? "Initiate of Balance";
    }
    const cats = ["body", "mind", "spirit"].filter((c) => weights[c] >= 0.3).sort();
    if (cats.length === 2) {
      const key = cats.join("+");
      return TWO_CATEGORY_TITLES[key]?.[tier] ?? "Initiate";
    }
    const dominant = Object.entries(weights).sort((a, b) => b[1] - a[1])[0][0];
    return SINGLE_DOMINANT_TITLES[dominant]?.[tier] ?? "Initiate";
  }
  // --- Suggestion Algorithm (Waterfall) ---
  getSuggestion() {
    const activities = this.getEnabledActivities();
    if (activities.length === 0)
      return null;
    if (this.settings.inTartarus) {
      return this.buildSuggestion(activities[0], "death", "Escape Tartarus \u2014 complete your penance.");
    }
    if (this.settings.failedThresholdDays >= 2) {
      const neglected2 = this.getNeglectedActivitiesSorted(activities);
      if (neglected2.length > 0) {
        return this.buildSuggestion(neglected2[0], "death", "Death looms. Act now or descend to Tartarus.");
      }
    }
    if (this.bossEngine.isDangerZone()) {
      const best = this.getHighestDamageActivity(activities);
      if (best) {
        return this.buildSuggestion(best, "boss", "One final blow remains. Finish the beast.");
      }
    }
    const neglected = this.getNeglectedActivitiesSorted(activities);
    if (neglected.length > 0) {
      const top = this.applyRules(neglected);
      if (top) {
        const days = this.getDaysSinceLastDone(top.id);
        const lore = NEGLECT_LORE[top.id] ?? `${days} days since you last practiced. The skill atrophies.`;
        return this.buildSuggestion(top, "neglect", lore);
      }
    }
    const behindSchedule = this.getBehindScheduleActivities(activities);
    if (behindSchedule.length > 0) {
      const top = behindSchedule[0];
      const progress = this.getWeeklyProgress(top.id);
      return this.buildSuggestion(top, "weekly", `Behind schedule: ${progress.done}/${progress.target} this week.`);
    }
    const chained = this.getChainedActivities(activities);
    if (chained.length > 0) {
      return this.buildSuggestion(chained[0], "chain", "Your prerequisite is done. Time for the next step.");
    }
    const timeBased = this.getTimeBasedActivities(activities);
    if (timeBased.length > 0) {
      return this.buildSuggestion(timeBased[0], "time", "The time is right. Begin.");
    }
    const longestGap = activities.filter((a) => !this.isDoneToday(a.id)).sort((a, b) => this.getDaysSinceLastDone(b.id) - this.getDaysSinceLastDone(a.id));
    if (longestGap.length > 0) {
      return this.buildSuggestion(longestGap[0], "balanced", "Balance your path. This has waited longest.");
    }
    return null;
  }
  buildSuggestion(activity, reason, loreText) {
    return {
      activityId: activity.id,
      activityName: activity.name,
      emoji: activity.emoji,
      category: activity.category,
      reason,
      daysSinceLastDone: this.getDaysSinceLastDone(activity.id),
      loreText,
      priority: activity.priority
    };
  }
  getNeglectedActivitiesSorted(activities) {
    return activities.filter((a) => {
      const days = this.getDaysSinceLastDone(a.id);
      return days >= a.neglectThreshold && !this.isDoneToday(a.id);
    }).sort((a, b) => b.priority - a.priority);
  }
  applyRules(activities) {
    for (const activity of activities) {
      if (activity.alternatesWith) {
        const altDays = this.getDaysSinceLastDone(activity.alternatesWith);
        const thisDays = this.getDaysSinceLastDone(activity.id);
        if (thisDays < altDays) {
          const alt = this.settings.activities.find((a) => a.id === activity.alternatesWith);
          if (alt && alt.enabled && !this.isDoneToday(alt.id))
            return alt;
        }
      }
      if (activity.blocks && activity.blocks.length > 0) {
        return activity;
      }
      return activity;
    }
    return activities[0] ?? null;
  }
  getHighestDamageActivity(activities) {
    const notDone = activities.filter((a) => !this.isDoneToday(a.id));
    if (notDone.length === 0)
      return null;
    return notDone.sort((a, b) => b.damagePerCompletion - a.damagePerCompletion)[0];
  }
  getBehindScheduleActivities(activities) {
    const effectiveNow = this.getEffectiveNow();
    const dayOfWeek = effectiveNow.getDay();
    const adjustedDay = dayOfWeek === 0 ? 7 : dayOfWeek;
    const remainingDays = 7 - adjustedDay + 1;
    return activities.filter((a) => {
      if (this.isDoneToday(a.id))
        return false;
      const progress = this.getWeeklyProgress(a.id);
      const remaining = progress.target - progress.done;
      return remaining > 0 && remaining >= remainingDays;
    }).sort((a, b) => b.priority - a.priority);
  }
  getChainedActivities(activities) {
    return activities.filter((a) => {
      if (!a.chainAfter || this.isDoneToday(a.id))
        return false;
      return this.isDoneToday(a.chainAfter);
    });
  }
  getTimeBasedActivities(activities) {
    const hour = this.getEffectiveNow().getHours();
    const { morningStart, morningEnd, afternoonEnd, eveningEnd } = this.settings.devConfig;
    const currentPeriod = hour < morningEnd ? "morning" : hour < afternoonEnd ? "afternoon" : hour < eveningEnd ? "evening" : "anytime";
    const overridden = activities.filter((a) => {
      if (this.isDoneToday(a.id))
        return false;
      if (!a.timeOverride)
        return false;
      return hour >= a.timeOverride.startHour && hour < a.timeOverride.endHour;
    });
    if (overridden.length > 0)
      return overridden.sort((a, b) => b.priority - a.priority);
    return activities.filter((a) => !this.isDoneToday(a.id) && (a.preferredTime === currentPeriod || a.preferredTime === "anytime")).sort((a, b) => b.priority - a.priority);
  }
  setCalendarEntries(entries) {
    this.calendarEntries = entries;
  }
  getDayMap() {
    const activities = this.getEnabledActivities().filter((a) => !this.isDoneToday(a.id));
    const { morningStart, morningEnd, afternoonEnd, eveningEnd, bufferMinutes } = this.settings.devConfig;
    const timeSlots = [
      { period: "morning", startHour: morningStart, endHour: morningEnd },
      { period: "afternoon", startHour: morningEnd, endHour: afternoonEnd },
      { period: "evening", startHour: afternoonEnd, endHour: eveningEnd }
    ];
    const entries = [];
    const scheduled = /* @__PURE__ */ new Set();
    for (const activity of activities) {
      if (!activity.timeOverride)
        continue;
      entries.push({
        activityId: activity.id,
        activityName: activity.name,
        emoji: activity.emoji,
        category: activity.category,
        startHour: activity.timeOverride.startHour,
        endHour: activity.timeOverride.endHour,
        estimatedDuration: activity.estimatedDuration,
        status: "pending",
        priorityReason: "time"
      });
      scheduled.add(activity.id);
    }
    const neglected = this.getNeglectedActivitiesSorted(activities).filter((a) => !scheduled.has(a.id));
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
          priorityReason: "neglect"
        });
        scheduled.add(activity.id);
      }
    }
    const remaining = activities.filter((a) => !scheduled.has(a.id)).filter((a) => {
      const progress = this.getWeeklyProgress(a.id);
      return progress.done < progress.target;
    }).sort((a, b) => b.priority - a.priority);
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
          priorityReason: "weekly"
        });
        scheduled.add(activity.id);
      }
    }
    for (const calEntry of this.calendarEntries) {
      entries.push(calEntry);
    }
    entries.sort((a, b) => a.startHour - b.startHour);
    for (const entry of entries) {
      if (!entry.isCalendarTask && this.isDoneToday(entry.activityId)) {
        entry.status = "done";
      }
    }
    return entries;
  }
  findSlotForActivity(activity, timeSlots, existing, bufferMinutes) {
    const durationHours = activity.estimatedDuration / 60;
    const bufferHours = bufferMinutes / 60;
    const preferredSlot = timeSlots.find((s) => s.period === activity.preferredTime) ?? timeSlots.find((s) => s.period === "anytime") ?? timeSlots[0];
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
    for (const slot of timeSlots) {
      if (slot === preferredSlot)
        continue;
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
  getWeeklyCompletionsByDay() {
    const effectiveNow = this.getEffectiveNow();
    const weekStart = this.getWeekStart(effectiveNow);
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const result = [];
    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      const dateStr = d.toISOString().slice(0, 10);
      const dayCompletions = /* @__PURE__ */ new Map();
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
  getActiveDaysThisWeek() {
    const weekly = this.getWeeklyCompletionsByDay();
    return weekly.filter((d) => {
      let total = 0;
      d.completions.forEach((v) => {
        total += v;
      });
      return total > 0;
    }).length;
  }
  getBestDayThisWeek() {
    const weekly = this.getWeeklyCompletionsByDay();
    let best = weekly[0];
    let bestTotal = 0;
    for (const d of weekly) {
      let total = 0;
      d.completions.forEach((v) => {
        total += v;
      });
      if (total > bestTotal) {
        bestTotal = total;
        best = d;
      }
    }
    return bestTotal > 0 ? best.day : "--";
  }
};

// src/engines/CalendarEngine.ts
var import_obsidian = require("obsidian");
var CalendarEngine = class {
  constructor(app, settings, now) {
    this.app = app;
    this.settings = settings;
    const d = new Date(now);
    d.setHours(0, 0, 0, 0);
    this.today = d.toISOString().slice(0, 10);
  }
  // --- Main entry: get all calendar tasks for today ---
  getAllTasks() {
    const tasks = [];
    if (this.settings.calendar.enableDailyNotes) {
      tasks.push(...this.getDailyNoteTasks());
    }
    if (this.settings.calendar.enableTasksPlugin) {
      tasks.push(...this.getTasksPluginTasks());
    }
    if (this.settings.calendar.enableQuickTasks) {
      tasks.push(...this.getQuickTasks());
    }
    return tasks;
  }
  // --- Convert CalendarTasks to DayMapEntries ---
  toDayMapEntries(tasks) {
    return tasks.map((task) => {
      const startHour = task.time ? this.parseTimeToHour(task.time) : 9;
      const durationHours = (task.duration ?? 30) / 60;
      return {
        activityId: `cal-${task.id}`,
        activityName: task.title,
        emoji: this.getSourceEmoji(task.source),
        category: "mind",
        // calendar tasks default to mind
        startHour,
        endHour: startHour + durationHours,
        estimatedDuration: task.duration ?? 30,
        status: task.done ? "done" : "pending",
        isCalendarTask: true,
        calendarSource: task.source,
        calendarTaskId: task.id,
        filePath: task.filePath,
        lineNumber: task.lineNumber
      };
    });
  }
  // --- Option A: Daily Notes Integration ---
  getDailyNoteTasks() {
    const folder = this.settings.calendar.dailyNotesFolder;
    if (!folder)
      return [];
    const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";
    const files = this.app.vault.getMarkdownFiles();
    const dailyNote = files.find((f) => {
      if (!f.path.startsWith(normalizedFolder) && f.path !== folder)
        return false;
      return f.basename === this.today;
    });
    if (!dailyNote)
      return [];
    const cache = this.app.metadataCache.getFileCache(dailyNote);
    if (!cache?.listItems)
      return [];
    const tasks = [];
    for (const listItem of cache.listItems) {
      if (listItem.task === void 0)
        continue;
      const lineStart = listItem.position.start.line;
      const content = this.getLineContent(dailyNote, lineStart);
      if (!content)
        continue;
      const parsed = this.parseTaskLine(content);
      if (!parsed)
        continue;
      tasks.push({
        id: `dn-${dailyNote.path}-L${lineStart}`,
        title: parsed.title,
        source: "daily-note",
        date: this.today,
        time: parsed.time,
        duration: parsed.duration,
        done: listItem.task === "x" || listItem.task === "X",
        filePath: dailyNote.path,
        lineNumber: lineStart
      });
    }
    return tasks;
  }
  // Parse "- [ ] Task name @14:00 ~30m" format
  parseTaskLine(line) {
    const match = line.match(/^[-*]\s*\[.?\]\s*(.+)$/);
    if (!match)
      return null;
    let text = match[1].trim();
    let time;
    const timeMatch = text.match(/@(\d{1,2}):(\d{2})\b/);
    if (timeMatch) {
      time = `${timeMatch[1].padStart(2, "0")}:${timeMatch[2]}`;
      text = text.replace(timeMatch[0], "").trim();
    } else {
      const simpleTime = text.match(/@(\d{1,2})\s*(am|pm)?\b/i);
      if (simpleTime) {
        let hour = parseInt(simpleTime[1]);
        const period = simpleTime[2]?.toLowerCase();
        if (period === "pm" && hour < 12)
          hour += 12;
        if (period === "am" && hour === 12)
          hour = 0;
        time = `${String(hour).padStart(2, "0")}:00`;
        text = text.replace(simpleTime[0], "").trim();
      }
    }
    let duration;
    const durationMatch = text.match(/~(\d+(?:\.\d+)?)\s*(m|min|h|hr|hour)s?\b/i);
    if (durationMatch) {
      const value = parseFloat(durationMatch[1]);
      const unit = durationMatch[2].toLowerCase();
      duration = unit.startsWith("h") ? Math.round(value * 60) : Math.round(value);
      text = text.replace(durationMatch[0], "").trim();
    }
    const title = text.replace(/\s+/g, " ").trim();
    if (!title)
      return null;
    return { title, time, duration };
  }
  getLineContent(file, lineNumber) {
    const cache = this.app.metadataCache.getFileCache(file);
    if (!cache)
      return null;
    return null;
  }
  // Called by DashboardView with pre-read file content
  getDailyNoteTasksFromContent(content, filePath) {
    const lines = content.split("\n");
    const tasks = [];
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!/^[-*]\s*\[.?\]\s/.test(line))
        continue;
      const parsed = this.parseTaskLine(line);
      if (!parsed)
        continue;
      const isDone = /^[-*]\s*\[[xX]\]/.test(line);
      tasks.push({
        id: `dn-${filePath}-L${i}`,
        title: parsed.title,
        source: "daily-note",
        date: this.today,
        time: parsed.time,
        duration: parsed.duration,
        done: isDone,
        filePath,
        lineNumber: i
      });
    }
    return tasks;
  }
  // --- Option B: Tasks Plugin Integration ---
  getTasksPluginTasks() {
    const tasksPlugin = this.app.plugins?.plugins?.["obsidian-tasks-plugin"];
    if (!tasksPlugin)
      return [];
    const tasks = [];
    const files = this.app.vault.getMarkdownFiles();
    for (const file of files) {
      const cache = this.app.metadataCache.getFileCache(file);
      if (!cache?.listItems)
        continue;
      for (const listItem of cache.listItems) {
        if (listItem.task === void 0)
          continue;
      }
    }
    return tasks;
  }
  // Called by DashboardView with pre-scanned task data
  getTasksPluginTasksFromFiles(files) {
    const tasks = [];
    for (const file of files) {
      const lines = file.content.split("\n");
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (!/^[-*]\s*\[.?\]\s/.test(line))
          continue;
        const dueMatch = line.match(/\u{1F4C5}\s*(\d{4}-\d{2}-\d{2})/u);
        if (!dueMatch || dueMatch[1] !== this.today)
          continue;
        const parsed = this.parseTaskLine(line);
        if (!parsed)
          continue;
        const scheduledMatch = line.match(/\u23F3\s*(\d{4}-\d{2}-\d{2})/u);
        if (scheduledMatch && scheduledMatch[1] !== this.today)
          continue;
        const isDone = /^[-*]\s*\[[xX]\]/.test(line);
        tasks.push({
          id: `tp-${file.path}-L${i}`,
          title: parsed.title.replace(/[\u{1F4C5}\u23F3]\s*\d{4}-\d{2}-\d{2}/gu, "").trim(),
          source: "tasks-plugin",
          date: this.today,
          time: parsed.time,
          duration: parsed.duration,
          done: isDone,
          filePath: file.path,
          lineNumber: i
        });
      }
    }
    return tasks;
  }
  // --- Option C: Built-in Quick Tasks ---
  getQuickTasks() {
    return this.settings.calendar.quickTasks.filter((qt) => qt.date === this.today).map((qt) => ({
      id: `qt-${qt.id}`,
      title: qt.title,
      source: "quick-task",
      date: qt.date,
      time: qt.time,
      duration: qt.duration,
      done: qt.done
    }));
  }
  // --- Completion handlers ---
  // Toggle a daily note task done/undone by rewriting the checkbox
  async toggleDailyNoteTask(filePath, lineNumber, done) {
    const file = this.app.vault.getAbstractFileByPath(filePath);
    if (!file || !(file instanceof import_obsidian.TFile))
      return;
    const content = await this.app.vault.read(file);
    const lines = content.split("\n");
    if (lineNumber >= lines.length)
      return;
    const line = lines[lineNumber];
    if (done) {
      lines[lineNumber] = line.replace(/\[.\]/, "[x]");
    } else {
      lines[lineNumber] = line.replace(/\[.\]/, "[ ]");
    }
    await this.app.vault.modify(file, lines.join("\n"));
  }
  // Toggle a Tasks plugin task
  async toggleTasksPluginTask(filePath, lineNumber, done) {
    await this.toggleDailyNoteTask(filePath, lineNumber, done);
  }
  // Postpone a task to tomorrow
  async postponeTask(task) {
    const tomorrow = new Date(this.today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().slice(0, 10);
    if (task.source === "quick-task") {
      const qt = this.settings.calendar.quickTasks.find(
        (q) => `qt-${q.id}` === task.id || q.id === task.id.replace("qt-", "")
      );
      if (qt) {
        qt.postponedFrom = qt.postponedFrom ?? qt.date;
        qt.date = tomorrowStr;
      }
    } else if (task.source === "tasks-plugin" && task.filePath !== void 0 && task.lineNumber !== void 0) {
      const file = this.app.vault.getAbstractFileByPath(task.filePath);
      if (!file || !(file instanceof import_obsidian.TFile))
        return;
      const content = await this.app.vault.read(file);
      const lines = content.split("\n");
      if (task.lineNumber < lines.length) {
        lines[task.lineNumber] = lines[task.lineNumber].replace(
          /\u{1F4C5}\s*\d{4}-\d{2}-\d{2}/u,
          `\u{1F4C5} ${tomorrowStr}`
        );
        await this.app.vault.modify(file, lines.join("\n"));
      }
    }
  }
  // --- Helpers ---
  parseTimeToHour(time) {
    const [h, m] = time.split(":").map(Number);
    return h + (m ?? 0) / 60;
  }
  getSourceEmoji(source) {
    switch (source) {
      case "daily-note":
        return "\u{1F4DD}";
      case "tasks-plugin":
        return "\u2611\uFE0F";
      case "quick-task":
        return "\u26A1";
    }
  }
};

// src/components/HeroCard.ts
function renderHeroCard(container, settings, engine, staggerIndex) {
  const hero = container.createDiv({ cls: "olen-hero" });
  hero.style.setProperty("--i", String(staggerIndex));
  if (settings.heroBackground) {
    const bg = hero.createDiv({ cls: "olen-hero-bg" });
    const vaultPath = settings.heroBackground;
    bg.style.backgroundImage = `url("${vaultPath}")`;
  }
  hero.createDiv({ cls: "olen-hero-overlay" });
  const content = hero.createDiv({ cls: "olen-hero-content" });
  const greeting = getGreeting(settings);
  content.createEl("div", {
    cls: "olen-hero-greeting",
    text: `${greeting}, ${settings.userName}.`
  });
  const subtitle = getSubtitle(settings, engine);
  content.createEl("div", {
    cls: "olen-hero-subtitle",
    text: subtitle
  });
  const title = engine.getDynamicTitle();
  const eudIndex = engine.getEudaimoniaIndex();
  const badge = content.createDiv({ cls: "olen-hero-rank-badge" });
  badge.createEl("span", {
    cls: "olen-hero-rank-text",
    text: `${title} \xB7 ${toRoman(eudIndex)}`
  });
  const actions = hero.createDiv({ cls: "olen-hero-actions" });
  const progressBtn = actions.createEl("button", {
    cls: "olen-hero-btn",
    text: "Your progress"
  });
  progressBtn.addEventListener("click", () => {
    const eudSection = container.querySelector(".olen-card");
    if (eudSection)
      eudSection.scrollIntoView({ behavior: "smooth" });
  });
  const reflectBtn = actions.createEl("button", {
    cls: "olen-hero-btn",
    text: "Reflect"
  });
  reflectBtn.addEventListener("click", () => {
    const quoteSection = container.querySelector(".olen-quote");
    if (quoteSection)
      quoteSection.scrollIntoView({ behavior: "smooth" });
  });
}
function getGreeting(settings) {
  const labels = settings.devConfig.labels;
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
  const hour = now.getHours();
  if (hour >= 5 && hour < 12)
    return labels.greeting_morning ?? "Good morning";
  if (hour >= 12 && hour < 17)
    return labels.greeting_afternoon ?? "Good afternoon";
  if (hour >= 17 && hour < 21)
    return labels.greeting_evening ?? "Good evening";
  return labels.greeting_night ?? "Good night";
}
function getSubtitle(settings, engine) {
  const bossEngine = new BossEngine(settings);
  if (settings.inTartarus) {
    return "The underworld awaits your penance.";
  }
  if (bossEngine.isDangerZone()) {
    return "One final blow remains.";
  }
  const streak = engine.getOverallStreak();
  if (streak >= 3) {
    return `${streak} days strong. Keep the flame.`;
  }
  return "Step by step, you shape your path.";
}

// src/components/EudaimoniaBar.ts
var CATEGORY_ICONS = {
  body: "\u{1F3CB}",
  // weightlifter
  mind: "\u{1F4DA}",
  // books
  spirit: "\u{1F54A}"
  // dove
};
var TOTAL_SEGMENTS = 10;
function renderEudaimoniaBar(container, settings, engine, staggerIndex) {
  renderEudaimoniaCard(container, settings, engine, staggerIndex);
  renderStatCards(container, engine, staggerIndex + 1);
  renderCategoriesCard(container, settings, engine, staggerIndex + 2);
}
function renderEudaimoniaCard(container, settings, engine, staggerIndex) {
  const card = container.createDiv({ cls: "olen-card" });
  card.style.setProperty("--i", String(staggerIndex));
  const header = card.createDiv({ cls: "olen-eudaimonia-header" });
  const eudIndex = engine.getEudaimoniaIndex();
  header.createEl("div", {
    cls: "olen-eudaimonia-title",
    text: `Eudaimonia ${toRoman(eudIndex)}`
  });
  const totalXP = engine.getAllCategoryLevels().reduce((sum, cl) => sum + cl.xp, 0);
  header.createEl("div", {
    cls: "olen-eudaimonia-xp",
    text: `${totalXP} XP`
  });
  const progress = engine.getEudaimoniaProgress();
  const filledSegments = Math.floor(progress / TOTAL_SEGMENTS);
  const hasPartial = progress % TOTAL_SEGMENTS > 0;
  const segments = card.createDiv({ cls: "olen-eudaimonia-segments" });
  for (let i = 0; i < TOTAL_SEGMENTS; i++) {
    let cls = "olen-eudaimonia-segment";
    if (i < filledSegments) {
      cls += " olen-eudaimonia-segment-filled";
    } else if (i === filledSegments && hasPartial) {
      cls += " olen-eudaimonia-segment-partial";
    }
    segments.createDiv({ cls });
  }
  const chapter = engine.getChapter();
  card.createEl("div", {
    cls: "olen-eudaimonia-chapter",
    text: `Chapter ${toRoman(chapter.number)}: ${chapter.name}`
  });
}
function renderStatCards(container, engine, staggerIndex) {
  const grid = container.createDiv({ cls: "olen-stats-grid" });
  grid.style.setProperty("--i", String(staggerIndex));
  const totalTasks = engine.getTotalCompletions();
  const streak = engine.getOverallStreak();
  const presence = engine.getDaysOfPresence();
  createStatCard(grid, "\u{1F3AF}", totalTasks, "Objectives");
  createStatCard(grid, "\u{1F525}", streak, "Streak", streak);
  createStatCard(grid, "\u2728", presence, "Consistency");
}
function createStatCard(parent, icon, value, label, streakDays) {
  const card = parent.createDiv({ cls: "olen-stat-card" });
  card.createEl("div", { cls: "olen-stat-card-icon", text: icon });
  card.createEl("div", { cls: "olen-stat-card-value", text: String(value) });
  card.createEl("div", { cls: "olen-stat-card-label", text: label });
  if (streakDays !== void 0) {
    const dots = card.createDiv({ cls: "olen-stat-card-dots" });
    for (let i = 0; i < 7; i++) {
      let cls = "olen-stat-dot";
      if (i < streakDays) {
        cls += " olen-stat-dot-active";
      }
      dots.createDiv({ cls });
    }
  }
}
function renderCategoriesCard(container, settings, engine, staggerIndex) {
  const card = container.createDiv({ cls: "olen-card" });
  card.style.setProperty("--i", String(staggerIndex));
  const title = engine.getDynamicTitle();
  card.createEl("div", { cls: "olen-dynamic-title", text: title });
  card.createDiv({ cls: "olen-divider" });
  const grid = card.createDiv({ cls: "olen-categories-grid" });
  const categories = [
    { key: "body", label: "Body" },
    { key: "mind", label: "Mind" },
    { key: "spirit", label: "Spirit" }
  ];
  for (const cat of categories) {
    const level = engine.getCategoryLevel(cat.key);
    const color = settings.categoryColors[cat.key];
    const row = grid.createDiv({ cls: "olen-category-row" });
    const iconBox = row.createDiv({ cls: "olen-category-icon" });
    iconBox.style.background = `${color}22`;
    iconBox.textContent = CATEGORY_ICONS[cat.key];
    const info = row.createDiv({ cls: "olen-category-info" });
    const nameRow = info.createDiv({ cls: "olen-category-name-row" });
    nameRow.createEl("span", { cls: "olen-category-name", text: cat.label });
    nameRow.createEl("span", {
      cls: "olen-category-level-text",
      text: `Lv ${level.level} \xB7 ${level.progressToNext}/100`
    });
    const bar = info.createDiv({ cls: "olen-category-bar" });
    const fill = bar.createDiv({ cls: "olen-category-bar-fill" });
    fill.style.width = `${level.progressToNext}%`;
    fill.style.background = color;
  }
}

// src/components/DirectiveCard.ts
function renderDirectiveCard(container, settings, engine, staggerIndex, onEnterWorkspace) {
  const suggestion = engine.getSuggestion();
  if (!suggestion)
    return;
  const label = settings.devConfig.labels.directive_title ?? "THE DIRECTIVE";
  const beginLabel = settings.devConfig.labels.begin_workspace ?? "ENTER WORKSPACE";
  const notNowLabel = settings.devConfig.labels.not_now ?? "NOT NOW";
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });
  const card = container.createDiv({ cls: "olen-card olen-directive" });
  card.style.setProperty("--i", String(staggerIndex));
  const header = card.createDiv({ cls: "olen-directive-header" });
  header.createEl("div", { cls: "olen-heading", text: label });
  const badge = header.createDiv({ cls: "olen-directive-badge" });
  badge.style.background = getBadgeColor(suggestion.reason);
  card.createEl("div", {
    cls: "olen-directive-activity",
    text: `${suggestion.emoji} ${suggestion.activityName}`
  });
  const neglectText = suggestion.daysSinceLastDone < 999 ? `${suggestion.daysSinceLastDone} days neglected` : "Not yet started";
  card.createEl("div", { cls: "olen-directive-neglect", text: neglectText });
  const actions = card.createDiv({ cls: "olen-directive-actions" });
  const beginBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: beginLabel
  });
  beginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    onEnterWorkspace?.(suggestion.activityId);
  });
  const notNowBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: notNowLabel
  });
  notNowBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    card.style.opacity = "0";
    card.style.transform = "translateY(-10px)";
    card.style.transition = "all 0.3s ease";
    setTimeout(() => {
      card.style.display = "none";
    }, 300);
  });
  card.addEventListener("click", () => {
    showExpandedDirective(container, settings, suggestion, beginLabel, notNowLabel, onEnterWorkspace);
  });
}
function showExpandedDirective(container, settings, suggestion, beginLabel, notNowLabel, onEnterWorkspace) {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";
  const sheet = overlay.createDiv({ cls: "olen-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });
  sheet.createEl("div", {
    cls: "olen-heading-lg",
    text: settings.devConfig.labels.directive_title ?? "THE DIRECTIVE"
  });
  sheet.createEl("div", {
    cls: "olen-directive-activity",
    attr: { style: "font-size: 22px; margin: 16px 0 8px;" },
    text: `${suggestion.emoji} ${suggestion.activityName}`
  });
  const neglectDesc = suggestion.daysSinceLastDone < 999 ? `${suggestion.daysSinceLastDone} days since you last practiced. The skill atrophies.` : "A new path awaits. Take the first step.";
  sheet.createEl("div", {
    cls: "olen-body-italic",
    attr: { style: "margin-bottom: 12px;" },
    text: neglectDesc
  });
  sheet.createEl("div", {
    cls: "olen-sheet-lore",
    text: `"${suggestion.loreText}"`
  });
  const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
  const quoteSection = sheet.createDiv({ cls: "olen-sheet-quote" });
  quoteSection.createEl("div", {
    text: `"${quote.text}"`,
    attr: { style: "margin-bottom: 6px;" }
  });
  quoteSection.createEl("div", {
    cls: "olen-quote-attribution",
    text: `\u2014 ${quote.attribution}`
  });
  const actions = sheet.createDiv({ cls: "olen-directive-actions" });
  actions.style.marginTop = "20px";
  actions.style.justifyContent = "center";
  const beginBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: beginLabel
  });
  beginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSheet();
    onEnterWorkspace?.(suggestion.activityId);
  });
  const notNowBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: notNowLabel
  });
  notNowBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSheet();
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay)
      closeSheet();
  });
  function closeSheet() {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }
  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
  });
}
function getBadgeColor(reason) {
  switch (reason) {
    case "death":
      return "#ef4444";
    case "boss":
      return "#eab308";
    case "neglect":
      return "#f97316";
    case "weekly":
      return "#3b82f6";
    case "chain":
      return "#8b5cf6";
    case "time":
      return "#06b6d4";
    case "balanced":
      return "#ffffff";
    default:
      return "#928d85";
  }
}

// src/components/BossStatusCard.ts
function renderBossStatusCard(container, settings, staggerIndex) {
  const bossEngine = new BossEngine(settings);
  const status = bossEngine.getBossStatus();
  const label = settings.devConfig.labels.boss_status_title ?? "BOSS STATUS";
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });
  const cardCls = status.inTartarus ? "olen-card-compact olen-card-tartarus" : "olen-card-compact";
  const card = container.createDiv({ cls: cardCls });
  card.style.setProperty("--i", String(staggerIndex));
  const row = card.createDiv({ cls: "olen-boss-row" });
  row.createEl("div", { cls: "olen-boss-emoji", text: getBossEmoji(status.tier) });
  const info = row.createDiv({ cls: "olen-boss-info" });
  info.createEl("div", { cls: "olen-boss-name", text: status.boss.name });
  info.createEl("div", {
    cls: "olen-boss-tier",
    text: `Tier ${status.tier} \xB7 ${status.rank}`
  });
  const hpBar = info.createDiv({ cls: "olen-hp-bar" });
  const hpFill = hpBar.createDiv({ cls: "olen-hp-bar-fill" });
  hpFill.style.width = `${status.percent}%`;
  hpFill.style.background = bossEngine.getHPColor(status.percent);
  info.createEl("div", {
    cls: "olen-boss-hp-text",
    text: `${status.currentHP}/${status.maxHP} HP (${status.percent}%)`
  });
}
function getBossEmoji(tier) {
  const emojis = {
    1: "\u{1F47B}",
    2: "\u{1F9DC}",
    3: "\u{1F409}",
    4: "\u{1F402}",
    5: "\u{1F40D}",
    6: "\u{1F981}",
    7: "\u{1F525}",
    8: "\u{1F43A}",
    9: "\u{1F30A}",
    10: "\u{1F47F}",
    11: "\u{1F329}",
    12: "\u231B",
    13: "\u{1F300}"
  };
  return emojis[tier] ?? "\u2694\uFE0F";
}

// src/components/WeeklyRhythm.ts
function renderWeeklyRhythm(container, settings, engine, staggerIndex) {
  const label = settings.devConfig.labels.weekly_rhythm_title ?? "WEEKLY RHYTHM";
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });
  const card = container.createDiv({ cls: "olen-card" });
  card.style.setProperty("--i", String(staggerIndex));
  const stats = card.createDiv({ cls: "olen-weekly-stats" });
  const activeDays = engine.getActiveDaysThisWeek();
  const bestDay = engine.getBestDayThisWeek();
  const totalCompletions = engine.getTotalCompletions();
  createWeeklyStat(stats, String(activeDays) + "/7", "Active days");
  createWeeklyStat(stats, bestDay, "Best day");
  createWeeklyStat(stats, String(totalCompletions), "Total");
  card.createDiv({ cls: "olen-divider" });
  const weeklyData = engine.getWeeklyCompletionsByDay();
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
  const todayStr = new Date(now).toISOString().slice(0, 10);
  let maxTotal = 1;
  for (const day of weeklyData) {
    let total = 0;
    day.completions.forEach((v) => {
      total += v;
    });
    if (total > maxTotal)
      maxTotal = total;
  }
  const barsContainer = card.createDiv({ cls: "olen-weekly-bars" });
  for (const day of weeklyData) {
    const col = barsContainer.createDiv({ cls: "olen-weekly-bar-col" });
    let total = 0;
    day.completions.forEach((v) => {
      total += v;
    });
    const barHeight = maxTotal > 0 ? Math.max(4, total / maxTotal * 100) : 4;
    const barEl = col.createDiv({ cls: "olen-weekly-bar" });
    barEl.style.height = `${barHeight}px`;
    barEl.style.minHeight = "4px";
    if (day.date === todayStr) {
      barEl.classList.add("olen-weekly-bar-today");
    }
    const categories = ["body", "mind", "spirit"];
    for (const cat of categories) {
      const catCount = day.completions.get(cat) ?? 0;
      if (catCount === 0)
        continue;
      const segHeight = total > 0 ? catCount / total * 100 : 0;
      const seg = barEl.createDiv({ cls: "olen-weekly-bar-segment" });
      seg.style.height = `${segHeight}%`;
      seg.style.background = getCategoryColor(cat, settings);
    }
    if (total === 0) {
      barEl.style.background = "rgba(255, 255, 255, 0.05)";
    }
    col.createEl("div", { cls: "olen-weekly-day-label", text: day.day.charAt(0) });
  }
}
function createWeeklyStat(parent, value, label) {
  const stat = parent.createDiv({ cls: "olen-weekly-stat" });
  stat.createEl("div", { cls: "olen-weekly-stat-value", text: value });
  stat.createEl("div", { cls: "olen-weekly-stat-label", text: label });
}
function getCategoryColor(category, settings) {
  return settings.categoryColors[category] ?? "#928d85";
}

// src/components/ActivityGrid.ts
function renderActivityGrid(container, settings, engine, staggerIndex) {
  const label = settings.devConfig.labels.activity_grid_title ?? "ACTIVITIES";
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });
  const grid = container.createDiv({ cls: "olen-activity-grid" });
  grid.style.setProperty("--i", String(staggerIndex));
  const columns = settings.devConfig.activityGridColumns ?? 2;
  grid.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  const activities = engine.getEnabledActivities();
  for (const activity of activities) {
    const card = grid.createDiv({ cls: "olen-activity-card" });
    const accent = card.createDiv({ cls: "olen-activity-accent" });
    accent.style.background = settings.categoryColors[activity.category] ?? "#928d85";
    const top = card.createDiv({ cls: "olen-activity-top" });
    top.createEl("div", { cls: "olen-activity-emoji", text: activity.emoji });
    const daysSince = engine.getDaysSinceLastDone(activity.id);
    const dotCls = getDotClass(daysSince);
    top.createDiv({ cls: `olen-activity-dot ${dotCls}` });
    card.createEl("div", { cls: "olen-activity-name", text: activity.name });
    const progress = engine.getWeeklyProgress(activity.id);
    const progressRow = card.createDiv({ cls: "olen-activity-progress" });
    const ring = createProgressRing(progress.done, progress.target, settings.categoryColors[activity.category]);
    progressRow.appendChild(ring);
    progressRow.createEl("div", {
      cls: "olen-activity-progress-text",
      text: `${progress.done} of ${progress.target}`
    });
    const streak = engine.getActivityStreak(activity.id);
    if (streak > 0) {
      card.createEl("div", {
        cls: "olen-activity-streak",
        text: `${streak} day streak`
      });
    }
  }
}
function getDotClass(daysSince) {
  if (daysSince === 0)
    return "olen-activity-dot-green";
  if (daysSince <= 1)
    return "olen-activity-dot-yellow";
  return "olen-activity-dot-red";
}
function createProgressRing(done, target, color) {
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
  const bgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  bgCircle.setAttribute("cx", String(size / 2));
  bgCircle.setAttribute("cy", String(size / 2));
  bgCircle.setAttribute("r", String(radius));
  bgCircle.setAttribute("fill", "none");
  bgCircle.setAttribute("stroke", "rgba(255,255,255,0.08)");
  bgCircle.setAttribute("stroke-width", String(strokeWidth));
  svg.appendChild(bgCircle);
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

// src/components/TempleChips.ts
function renderTempleChips(container, settings, staggerIndex, onTempleUpdate) {
  if (!settings.templeTasks || settings.templeTasks.length === 0)
    return;
  const label = settings.devConfig.labels.temple_title ?? "THE TEMPLE";
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
  const section = container.createDiv({ cls: "olen-temple-section" });
  section.style.setProperty("--i", String(staggerIndex));
  section.createEl("div", { cls: "olen-heading", text: label });
  const chips = section.createDiv({ cls: "olen-temple-chips" });
  chips.style.marginTop = "8px";
  for (const task of settings.templeTasks) {
    const status = getTaskStatus(task, now);
    const chipCls = `olen-temple-chip ${status.chipClass}`;
    const chip = chips.createDiv({ cls: chipCls });
    chip.createEl("span", { cls: "olen-temple-chip-emoji", text: task.emoji });
    chip.createEl("span", { cls: "olen-temple-chip-text", text: `${task.name} \xB7 ${status.text}` });
    chip.addEventListener("click", () => {
      onTempleUpdate(task.id);
      chip.style.transform = "scale(0.9)";
      chip.style.opacity = "0.6";
      setTimeout(() => {
        chip.style.transform = "";
        chip.style.opacity = "";
      }, 200);
    });
  }
}
function getTaskStatus(task, now) {
  if (!task.lastCompleted) {
    return { text: "overdue", chipClass: "olen-temple-chip-overdue" };
  }
  const last = new Date(task.lastCompleted);
  const msPerDay = 24 * 60 * 60 * 1e3;
  const daysSince = Math.floor((now.getTime() - last.getTime()) / msPerDay);
  const daysUntilDue = task.intervalDays - daysSince;
  if (daysUntilDue <= 0) {
    return { text: "overdue", chipClass: "olen-temple-chip-overdue" };
  }
  if (daysUntilDue <= 1) {
    return { text: "due today", chipClass: "olen-temple-chip-warn" };
  }
  if (daysUntilDue <= 2) {
    return { text: `due in ${daysUntilDue}d`, chipClass: "olen-temple-chip-warn" };
  }
  return { text: `in ${daysUntilDue}d`, chipClass: "olen-temple-chip-ok" };
}

// src/components/QuoteFooter.ts
function renderQuoteFooter(container, app, settings, staggerIndex, onSettingsUpdate) {
  const quote = getQuote(app, settings, onSettingsUpdate);
  const section = container.createDiv({ cls: "olen-quote" });
  section.style.setProperty("--i", String(staggerIndex));
  section.createEl("div", {
    cls: "olen-quote-text",
    text: `"${quote.text}"`
  });
  if (quote.attribution) {
    section.createEl("div", {
      cls: "olen-quote-attribution",
      text: `\u2014 ${quote.attribution}`
    });
  }
}
function getQuote(app, settings, onSettingsUpdate) {
  if (settings.quoteFolderPath) {
    const vaultQuotes = loadQuotesFromVault(app, settings.quoteFolderPath);
    if (vaultQuotes.length > 0) {
      return pickQuote(vaultQuotes, settings, onSettingsUpdate);
    }
  }
  return pickQuote(FALLBACK_QUOTES, settings, onSettingsUpdate);
}
function pickQuote(quotes, settings, onSettingsUpdate) {
  if (quotes.length === 0) {
    return { text: "The unexamined life is not worth living.", attribution: "Socrates" };
  }
  const recentIds = settings.recentQuoteIds ?? [];
  const available = quotes.map((q, i) => ({ q, i })).filter(({ i }) => !recentIds.includes(i));
  const pool = available.length > 0 ? available : quotes.map((q, i) => ({ q, i }));
  const pick = pool[Math.floor(Math.random() * pool.length)];
  const newRecent = [...recentIds, pick.i].slice(-Math.min(5, Math.floor(quotes.length / 2)));
  onSettingsUpdate({
    lastQuoteIndex: pick.i,
    recentQuoteIds: newRecent
  });
  return pick.q;
}
function loadQuotesFromVault(app, folderPath) {
  const quotes = [];
  const abstractFile = app.vault.getAbstractFileByPath(folderPath);
  if (!abstractFile)
    return quotes;
  const files = app.vault.getMarkdownFiles().filter(
    (f) => f.path.startsWith(folderPath.endsWith("/") ? folderPath : folderPath + "/")
  );
  for (const file of files) {
    const cache = app.metadataCache.getFileCache(file);
    if (!cache)
      continue;
    const name = file.basename;
    const parts = splitAttribution(name);
    quotes.push(parts);
  }
  return quotes;
}
function splitAttribution(text) {
  const dashIndex = text.lastIndexOf(" \u2014 ");
  if (dashIndex > 0) {
    return {
      text: text.slice(0, dashIndex).trim(),
      attribution: text.slice(dashIndex + 3).trim()
    };
  }
  const hyphenIndex = text.lastIndexOf(" - ");
  if (hyphenIndex > text.length * 0.5) {
    return {
      text: text.slice(0, hyphenIndex).trim(),
      attribution: text.slice(hyphenIndex + 3).trim()
    };
  }
  return { text: text.trim(), attribution: "" };
}

// src/components/DayTimeline.ts
function renderDayTimeline(container, settings, engine, staggerIndex, callbacks) {
  const label = settings.devConfig.labels.daymap_title ?? "YOUR DAY";
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
  const currentHour = now.getHours() + now.getMinutes() / 60;
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });
  const card = container.createDiv({ cls: "olen-card olen-timeline-card" });
  card.style.setProperty("--i", String(staggerIndex));
  const entries = engine.getDayMap();
  if (entries.length === 0) {
    card.createEl("div", {
      cls: "olen-timeline-empty",
      text: "No activities scheduled. A rare day of rest."
    });
    renderTimelineFooter(card, settings, currentHour, callbacks.onCreateEvent);
    return;
  }
  const timeline = card.createDiv({ cls: "olen-timeline" });
  for (const entry of entries) {
    renderTimelineEntry(
      timeline,
      entry,
      settings,
      currentHour,
      callbacks
    );
  }
  renderTimelineFooter(card, settings, currentHour, callbacks.onCreateEvent);
}
function renderTimelineEntry(parent, entry, settings, currentHour, callbacks) {
  const isCalendar = entry.isCalendarTask === true;
  const color = isCalendar ? "#5e7a9a" : settings.categoryColors[entry.category] ?? "#928d85";
  const isCurrent = currentHour >= entry.startHour && currentHour < entry.endHour;
  const isPast = currentHour >= entry.endHour;
  const isDone = entry.status === "done";
  const isSkipped = entry.status === "skipped";
  let stateCls = "olen-timeline-entry";
  if (isCalendar)
    stateCls += " olen-timeline-calendar";
  if (isDone)
    stateCls += " olen-timeline-done";
  else if (isSkipped)
    stateCls += " olen-timeline-skipped";
  else if (isCurrent)
    stateCls += " olen-timeline-current";
  else if (isPast)
    stateCls += " olen-timeline-past";
  const row = parent.createDiv({ cls: stateCls });
  const bar = row.createDiv({ cls: "olen-timeline-bar" });
  bar.style.background = color;
  if (isCalendar && !isDone) {
    bar.classList.add("olen-timeline-bar-calendar");
  }
  if (isCurrent && !isDone && !isSkipped) {
    bar.style.boxShadow = `0 0 12px ${color}`;
  }
  const content = row.createDiv({ cls: "olen-timeline-content" });
  const timeLine = content.createDiv({ cls: "olen-timeline-time" });
  timeLine.textContent = `${formatHour(entry.startHour)} \u2013 ${formatHour(entry.endHour)} \xB7 ${entry.estimatedDuration}m`;
  if (isCalendar && entry.calendarSource) {
    const badge = timeLine.createEl("span", { cls: "olen-timeline-source-badge" });
    switch (entry.calendarSource) {
      case "daily-note":
        badge.textContent = "Note";
        break;
      case "tasks-plugin":
        badge.textContent = "Task";
        break;
      case "quick-task":
        badge.textContent = "Quick";
        break;
    }
  }
  const actLine = content.createDiv({ cls: "olen-timeline-activity" });
  actLine.createEl("span", { cls: "olen-timeline-emoji", text: entry.emoji });
  const nameEl = actLine.createEl("span", {
    cls: "olen-timeline-name",
    text: entry.activityName
  });
  if (isDone || isSkipped) {
    nameEl.style.textDecoration = "line-through";
    nameEl.style.opacity = "0.5";
  }
  if (isDone) {
    actLine.createEl("span", { cls: "olen-timeline-check", text: "\u2713" });
  } else if (isSkipped) {
    actLine.createEl("span", { cls: "olen-timeline-skip-mark", text: "\u2013" });
  }
  if (!isDone && !isSkipped) {
    const actions = content.createDiv({ cls: "olen-timeline-actions" });
    if (isCalendar) {
      const doneBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-accept",
        text: "Done"
      });
      doneBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        callbacks.onCalendarDone?.(entry);
      });
      const postponeBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-postpone",
        text: "\u23E9",
        attr: { title: "Postpone to tomorrow" }
      });
      postponeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        callbacks.onCalendarPostpone?.(entry);
      });
    } else {
      const acceptBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-accept",
        text: isCurrent ? "Begin" : "Done"
      });
      acceptBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        callbacks.onAccept(entry.activityId);
      });
      const skipBtn = actions.createEl("button", {
        cls: "olen-timeline-btn olen-timeline-btn-skip",
        text: "Skip"
      });
      skipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        callbacks.onSkip(entry.activityId);
      });
    }
  }
  if (isCurrent && !isDone && !isSkipped) {
    const indicator = row.createDiv({ cls: "olen-timeline-now" });
    const progress = (currentHour - entry.startHour) / (entry.endHour - entry.startHour);
    indicator.style.top = `${Math.min(100, Math.max(0, progress * 100))}%`;
  }
}
function renderTimelineFooter(card, settings, currentHour, onCreateEvent) {
  const endOfDay = settings.devConfig.eveningEnd;
  const remaining = Math.max(0, endOfDay - currentHour);
  const hours = Math.floor(remaining);
  const mins = Math.round((remaining - hours) * 60);
  card.createDiv({ cls: "olen-divider" });
  const footer = card.createDiv({ cls: "olen-timeline-footer" });
  footer.createEl("div", {
    cls: "olen-timeline-footer-text",
    text: `End of day: ${hours}h ${mins}m remaining`
  });
  if (onCreateEvent) {
    const btn = footer.createEl("button", {
      cls: "olen-timeline-btn olen-timeline-btn-create",
      text: "+ Create event"
    });
    btn.addEventListener("click", () => onCreateEvent());
  }
}
function formatHour(h) {
  const hours = Math.floor(h);
  const mins = Math.round((h - hours) * 60);
  const period = hours >= 12 ? "pm" : "am";
  const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  if (mins === 0)
    return `${displayHour}${period}`;
  return `${displayHour}:${String(mins).padStart(2, "0")}${period}`;
}

// src/views/DashboardView.ts
var DashboardView = class extends import_obsidian2.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.plugin = plugin;
    this.intervals = [];
  }
  getViewType() {
    return VIEW_TYPE_OLEN;
  }
  getDisplayText() {
    return "Olen";
  }
  getIcon() {
    return "compass";
  }
  async onOpen() {
    this.intervals = [];
    await this.render();
  }
  async onClose() {
    this.cleanup();
    this.contentEl.empty();
  }
  cleanup() {
    for (const id of this.intervals) {
      clearInterval(id);
    }
    this.intervals = [];
  }
  async render() {
    this.cleanup();
    const container = this.contentEl;
    container.empty();
    const settings = this.plugin.settings;
    const root = container.createDiv({ cls: "olen-dashboard" });
    this.applyThemeOverrides(root);
    const completionData = this.gatherCompletionData();
    const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
    const engine = new OlenEngine(settings, completionData, now);
    const calendarEngine = new CalendarEngine(this.app, settings, now);
    const calendarTasks = await this.gatherCalendarTasks(calendarEngine);
    const calendarEntries = calendarEngine.toDayMapEntries(calendarTasks);
    engine.setCalendarEntries(calendarEntries);
    const sectionOrder = settings.devConfig.sectionOrder;
    const hidden = new Set(settings.devConfig.hiddenSections);
    let staggerIdx = 0;
    for (const section of sectionOrder) {
      if (hidden.has(section))
        continue;
      switch (section) {
        case "hero":
          renderHeroCard(root, settings, engine, staggerIdx++);
          break;
        case "eudaimonia":
          renderEudaimoniaBar(root, settings, engine, staggerIdx);
          staggerIdx += 3;
          break;
        case "daymap":
          renderDayTimeline(root, settings, engine, staggerIdx++, {
            onAccept: (activityId) => this.handleEnterWorkspace(activityId),
            onSkip: (activityId) => this.handleSkipActivity(activityId, engine),
            onCalendarDone: (entry) => this.handleCalendarTaskDone(entry),
            onCalendarPostpone: (entry) => this.handleCalendarTaskPostpone(entry),
            onCreateEvent: () => this.plugin.showQuickTaskDialog()
          });
          break;
        case "directive":
          renderDirectiveCard(root, settings, engine, staggerIdx++, (activityId) => {
            this.handleEnterWorkspace(activityId);
          });
          break;
        case "boss":
          renderBossStatusCard(root, settings, staggerIdx++);
          break;
        case "weekly":
          renderWeeklyRhythm(root, settings, engine, staggerIdx++);
          break;
        case "activities":
          renderActivityGrid(root, settings, engine, staggerIdx++);
          break;
        case "temple":
          renderTempleChips(root, settings, staggerIdx++, (taskId) => {
            this.handleTempleUpdate(taskId);
          });
          break;
        case "quote":
          renderQuoteFooter(root, this.app, settings, staggerIdx++, (partial) => {
            Object.assign(this.plugin.settings, partial);
            this.plugin.saveSettings();
          });
          break;
      }
    }
  }
  // --- Data Gathering ---
  gatherCompletionData() {
    const data = {};
    for (const activity of this.plugin.settings.activities) {
      if (!activity.enabled)
        continue;
      data[activity.id] = this.getCompletionsFromFolder(activity.folder, activity.property);
    }
    return data;
  }
  getCompletionsFromFolder(folderPath, fieldName) {
    const files = this.app.vault.getMarkdownFiles();
    const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";
    return files.filter((file) => file.path === folderPath || file.path.startsWith(normalizedFolder)).map((file) => {
      const cache = this.app.metadataCache.getFileCache(file);
      const frontmatter = cache?.frontmatter;
      if (!frontmatter || typeof frontmatter[fieldName] !== "boolean") {
        return null;
      }
      return {
        date: file.basename,
        completed: frontmatter[fieldName] === true
      };
    }).filter((c) => c !== null);
  }
  // --- Calendar Gathering ---
  async gatherCalendarTasks(calendarEngine) {
    const tasks = [];
    const settings = this.plugin.settings;
    if (settings.calendar.enableDailyNotes && settings.calendar.dailyNotesFolder) {
      const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
      const today = now.toISOString().slice(0, 10);
      const folder = settings.calendar.dailyNotesFolder;
      const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";
      const files = this.app.vault.getMarkdownFiles();
      const dailyNote = files.find((f) => {
        if (!f.path.startsWith(normalizedFolder) && f.path !== folder)
          return false;
        return f.basename === today;
      });
      if (dailyNote) {
        const content = await this.app.vault.read(dailyNote);
        tasks.push(...calendarEngine.getDailyNoteTasksFromContent(content, dailyNote.path));
      }
    }
    if (settings.calendar.enableTasksPlugin) {
      const tasksPlugin = this.app.plugins?.plugins?.["obsidian-tasks-plugin"];
      if (tasksPlugin) {
        const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
        const today = now.toISOString().slice(0, 10);
        const filesWithTasks = [];
        for (const file of this.app.vault.getMarkdownFiles()) {
          const cache = this.app.metadataCache.getFileCache(file);
          if (!cache?.listItems?.some((li) => li.task !== void 0))
            continue;
          const content = await this.app.vault.read(file);
          if (content.includes(today)) {
            filesWithTasks.push({ path: file.path, content });
          }
        }
        tasks.push(...calendarEngine.getTasksPluginTasksFromFiles(filesWithTasks));
      }
    }
    if (settings.calendar.enableQuickTasks) {
      const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
      const today = now.toISOString().slice(0, 10);
      tasks.push(
        ...settings.calendar.quickTasks.filter((qt) => qt.date === today).map((qt) => ({
          id: `qt-${qt.id}`,
          title: qt.title,
          source: "quick-task",
          date: qt.date,
          time: qt.time,
          duration: qt.duration,
          done: qt.done
        }))
      );
    }
    return tasks;
  }
  // --- Handlers ---
  async handleEnterWorkspace(activityId) {
    const activity = this.plugin.settings.activities.find((a) => a.id === activityId);
    if (!activity)
      return;
    if (activity.hasWorkspace) {
      this.plugin.settings.activeWorkspace = {
        activityId: activity.id,
        activityName: activity.name,
        emoji: activity.emoji,
        category: activity.category,
        startTime: (/* @__PURE__ */ new Date()).toISOString(),
        skills: [],
        hasWorkspace: true,
        skillFolder: activity.skillFolder
      };
      await this.plugin.saveSettings();
      this.plugin.activateWorkspaceView();
    } else {
      await this.markActivityDone(activity);
      new import_obsidian2.Notice(`${activity.emoji} ${activity.name} marked done!`);
      await this.render();
    }
  }
  async handleSkipActivity(activityId, engine) {
    const dayMap = engine.getDayMap();
    const entry = dayMap.find((e) => e.activityId === activityId);
    if (entry) {
      entry.status = "skipped";
    }
    new import_obsidian2.Notice("Skipped");
    await this.render();
  }
  async handleCalendarTaskDone(entry) {
    if (!entry.isCalendarTask || !entry.calendarSource)
      return;
    const calendarEngine = new CalendarEngine(
      this.app,
      this.plugin.settings,
      this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : /* @__PURE__ */ new Date()
    );
    switch (entry.calendarSource) {
      case "daily-note":
        if (entry.filePath !== void 0 && entry.lineNumber !== void 0) {
          await calendarEngine.toggleDailyNoteTask(entry.filePath, entry.lineNumber, true);
        }
        break;
      case "tasks-plugin":
        if (entry.filePath !== void 0 && entry.lineNumber !== void 0) {
          await calendarEngine.toggleTasksPluginTask(entry.filePath, entry.lineNumber, true);
        }
        break;
      case "quick-task": {
        const qtId = entry.calendarTaskId?.replace("qt-", "");
        const qt = this.plugin.settings.calendar.quickTasks.find((q) => q.id === qtId);
        if (qt) {
          qt.done = true;
          await this.plugin.saveSettings();
        }
        break;
      }
    }
    new import_obsidian2.Notice(`\u2713 ${entry.activityName}`);
    await this.render();
  }
  async handleCalendarTaskPostpone(entry) {
    if (!entry.isCalendarTask || !entry.calendarSource)
      return;
    const calendarEngine = new CalendarEngine(
      this.app,
      this.plugin.settings,
      this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : /* @__PURE__ */ new Date()
    );
    const now = this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : /* @__PURE__ */ new Date();
    const task = {
      id: entry.calendarTaskId ?? entry.activityId,
      title: entry.activityName,
      source: entry.calendarSource,
      date: now.toISOString().slice(0, 10),
      done: false,
      filePath: entry.filePath,
      lineNumber: entry.lineNumber
    };
    await calendarEngine.postponeTask(task);
    new import_obsidian2.Notice(`\u23E9 ${entry.activityName} postponed to tomorrow`);
    await this.render();
  }
  async markActivityDone(activity) {
    const now = this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : /* @__PURE__ */ new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const folder = activity.folder;
    const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";
    const files = this.app.vault.getMarkdownFiles();
    const todayFile = files.find(
      (f) => (f.path === folder || f.path.startsWith(normalizedFolder)) && f.basename === dateStr
    );
    if (todayFile) {
      await this.app.fileManager.processFrontMatter(todayFile, (fm) => {
        fm[activity.property] = true;
      });
    } else {
      const filePath = `${normalizedFolder}${dateStr}.md`;
      try {
        await this.app.vault.create(filePath, `---
${activity.property}: true
---
`);
      } catch {
      }
    }
    const xp = this.plugin.settings.devConfig.xpPerCompletion;
    this.plugin.settings.categoryXP[activity.category] += xp;
    this.plugin.settings.bossCurrentHP = Math.max(
      0,
      this.plugin.settings.bossCurrentHP - activity.damagePerCompletion
    );
    await this.plugin.saveSettings();
  }
  async handleTempleUpdate(taskId) {
    const task = this.plugin.settings.templeTasks.find((t) => t.id === taskId);
    if (!task)
      return;
    task.lastCompleted = (/* @__PURE__ */ new Date()).toISOString();
    await this.plugin.saveSettings();
    new import_obsidian2.Notice(`${task.emoji} ${task.name} completed!`);
    await this.render();
  }
  // --- Theme ---
  applyThemeOverrides(root) {
    const overrides = this.plugin.settings.themeOverrides;
    if (!overrides)
      return;
    if (overrides.bgPrimary)
      root.style.setProperty("--bg-primary", overrides.bgPrimary);
    if (overrides.cardBg)
      root.style.setProperty("--card-bg", overrides.cardBg);
    if (overrides.textPrimary)
      root.style.setProperty("--text-primary", overrides.textPrimary);
    if (overrides.textMuted)
      root.style.setProperty("--text-muted", overrides.textMuted);
    if (overrides.accentGold)
      root.style.setProperty("--accent-gold", overrides.accentGold);
    if (overrides.danger)
      root.style.setProperty("--danger", overrides.danger);
    if (overrides.success)
      root.style.setProperty("--success", overrides.success);
  }
};

// src/views/WorkspaceView.ts
var import_obsidian3 = require("obsidian");
var WorkspaceView = class extends import_obsidian3.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.timerInterval = null;
    this.elapsed = 0;
    // seconds
    /** When in template mode, tracks the daily note file the template is bound to */
    this.templateNoteFile = null;
    /** Tracks whether we already processed a completion (prevents double-apply) */
    this.completionApplied = false;
    this.plugin = plugin;
    this.startTime = /* @__PURE__ */ new Date();
  }
  getViewType() {
    return VIEW_TYPE_WORKSPACE;
  }
  getDisplayText() {
    const workspace = this.plugin.settings.activeWorkspace;
    return workspace ? `Workspace: ${workspace.activityName}` : "Workspace";
  }
  getIcon() {
    return "timer";
  }
  async onOpen() {
    const workspace = this.plugin.settings.activeWorkspace;
    if (!workspace) {
      this.contentEl.createEl("div", { text: "No active workspace." });
      return;
    }
    const activity = this.plugin.settings.activities.find(
      (a) => a.id === workspace.activityId
    );
    if (activity?.workspaceTemplate) {
      await this.renderTemplateMode(workspace, activity);
    } else {
      this.startTime = new Date(workspace.startTime);
      this.render(workspace);
      this.startTimer();
    }
  }
  async onClose() {
    this.stopTimer();
    this.templateNoteFile = null;
    this.completionApplied = false;
    this.contentEl.empty();
  }
  // ================================================================
  // Template Mode
  // ================================================================
  async renderTemplateMode(workspace, activity) {
    const container = this.contentEl;
    container.empty();
    const file = await this.findOrCreateDailyNote(activity);
    if (!file) {
      container.createEl("div", {
        text: "Could not load activity note.",
        attr: { style: "color: var(--text-error); padding: 20px; text-align: center;" }
      });
      return;
    }
    this.templateNoteFile = file;
    await this.waitForMetadata(file);
    const templateContainer = container.createDiv({ cls: "olen-template-root" });
    await this.plugin.templateEngine.render(
      activity.workspaceTemplate,
      file,
      templateContainer
    );
    this.registerEvent(
      this.app.metadataCache.on("changed", (changedFile) => {
        if (this.completionApplied)
          return;
        if (changedFile.path !== file.path)
          return;
        const cache = this.app.metadataCache.getFileCache(changedFile);
        const fm = cache?.frontmatter;
        if (fm?.[activity.property] === true) {
          this.completionApplied = true;
          const completionType = fm[`${activity.property}-Type`];
          this.applyTemplateCompletion(workspace, activity, completionType);
        }
      })
    );
  }
  /**
   * Find today's daily note in the activity folder, or create one.
   * Ensures the note has `activity: <id>` in frontmatter so the
   * template post-processor also works when opening the note directly.
   */
  async findOrCreateDailyNote(activity) {
    const now = this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : /* @__PURE__ */ new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const folder = activity.folder;
    const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";
    const files = this.app.vault.getMarkdownFiles();
    const existing = files.find(
      (f) => (f.path === folder || f.path.startsWith(normalizedFolder)) && f.basename === dateStr
    );
    if (existing) {
      await this.app.fileManager.processFrontMatter(existing, (fm) => {
        if (!fm.activity)
          fm.activity = activity.id;
      });
      return existing;
    }
    const abstractFolder = this.app.vault.getAbstractFileByPath(folder);
    if (!abstractFolder) {
      try {
        await this.app.vault.createFolder(folder);
      } catch {
      }
    }
    const filePath = `${normalizedFolder}${dateStr}.md`;
    const content = `---
activity: ${activity.id}
---
`;
    try {
      return await this.app.vault.create(filePath, content);
    } catch {
      return null;
    }
  }
  /**
   * Wait until the metadata cache has indexed a file's frontmatter.
   */
  async waitForMetadata(file) {
    let attempts = 0;
    while (attempts < 20) {
      const cache = this.app.metadataCache.getFileCache(file);
      if (cache?.frontmatter)
        return;
      await sleep(50);
      attempts++;
    }
  }
  /**
   * Called when the template marks the activity as done in frontmatter.
   * Applies plugin-level effects: XP, boss damage, clear workspace.
   */
  async applyTemplateCompletion(workspace, activity, completionType) {
    const wsType = completionType?.toLowerCase();
    const state = wsType ? this.plugin.settings.workspaceCompletionStates.find((s) => s.id === wsType) : this.plugin.settings.workspaceCompletionStates.find((s) => s.id === "discipline");
    if (state && state.xpMultiplier > 0) {
      const xpGain = Math.round(
        this.plugin.settings.devConfig.xpPerCompletion * state.xpMultiplier
      );
      this.plugin.settings.categoryXP[workspace.category] += xpGain;
    }
    if (wsType !== "skipped") {
      this.plugin.settings.bossCurrentHP = Math.max(
        0,
        this.plugin.settings.bossCurrentHP - activity.damagePerCompletion
      );
    }
    this.plugin.settings.activeWorkspace = null;
    await this.plugin.saveSettings();
  }
  // ================================================================
  // Default Mode (timer + skills + finish)
  // ================================================================
  startTimer() {
    this.timerInterval = window.setInterval(() => {
      this.elapsed = Math.floor((Date.now() - this.startTime.getTime()) / 1e3);
      const timerEl = this.contentEl.querySelector(".olen-workspace-timer");
      if (timerEl)
        timerEl.textContent = this.formatTime(this.elapsed);
    }, 1e3);
  }
  stopTimer() {
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }
  render(workspace) {
    const container = this.contentEl;
    container.empty();
    const root = container.createDiv({ cls: "olen-dashboard olen-workspace-root" });
    const topBar = root.createDiv({ cls: "olen-workspace-topbar" });
    const actInfo = topBar.createDiv({ cls: "olen-workspace-act-info" });
    actInfo.createEl("span", { cls: "olen-workspace-emoji", text: workspace.emoji });
    actInfo.createEl("span", { cls: "olen-workspace-act-name", text: workspace.activityName });
    const timerEl = topBar.createEl("div", {
      cls: "olen-workspace-timer",
      text: "00:00"
    });
    const finishBtn = topBar.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-workspace-finish-btn",
      text: "FINISH"
    });
    finishBtn.addEventListener("click", () => this.showFinishModal(workspace));
    const accentColor = this.plugin.settings.categoryColors[workspace.category] ?? "#928d85";
    const accent = root.createDiv({ cls: "olen-workspace-accent" });
    accent.style.background = `linear-gradient(90deg, ${accentColor}, transparent)`;
    const content = root.createDiv({ cls: "olen-workspace-content" });
    const skillsSection = content.createDiv({ cls: "olen-workspace-skills-section" });
    skillsSection.createEl("div", { cls: "olen-heading", text: "WORKSPACE SKILLS" });
    const skillsContainer = skillsSection.createDiv({ cls: "olen-workspace-skills" });
    if (workspace.skills.length === 0) {
      skillsContainer.createEl("div", {
        cls: "olen-workspace-no-skills",
        text: "No skills tagged yet"
      });
    } else {
      for (const skill of workspace.skills) {
        const chip = skillsContainer.createDiv({ cls: "olen-workspace-skill-chip" });
        chip.textContent = skill;
      }
    }
    const addSkillBtn = skillsSection.createEl("button", {
      cls: "olen-btn olen-btn-secondary olen-workspace-add-skill",
      text: "+ ADD SKILL"
    });
    addSkillBtn.addEventListener("click", () => this.showSkillPicker(workspace));
    const focusZone = content.createDiv({ cls: "olen-workspace-focus" });
    const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    focusZone.createEl("div", {
      cls: "olen-quote-text",
      text: `"${quote.text}"`
    });
    focusZone.createEl("div", {
      cls: "olen-quote-attribution",
      text: `\u2014 ${quote.attribution}`
    });
    const bottomBar = root.createDiv({ cls: "olen-workspace-bottombar" });
    const catLabel = workspace.category.charAt(0).toUpperCase() + workspace.category.slice(1);
    bottomBar.createEl("div", {
      cls: "olen-workspace-category-label",
      text: catLabel
    });
    bottomBar.style.borderLeftColor = accentColor;
  }
  showSkillPicker(workspace) {
    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";
    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });
    sheet.createEl("div", { cls: "olen-heading-lg", text: "ADD SKILL" });
    const inputWrap = sheet.createDiv({ attr: { style: "margin: 20px 0;" } });
    const input = inputWrap.createEl("input", {
      cls: "olen-workspace-skill-input",
      attr: { type: "text", placeholder: "Skill name..." }
    });
    if (workspace.skillFolder) {
      const skills = this.loadSkillsFromFolder(workspace.skillFolder);
      if (skills.length > 0) {
        const existing = sheet.createDiv({ cls: "olen-workspace-skills", attr: { style: "margin-bottom: 16px;" } });
        for (const skill of skills) {
          const chip = existing.createDiv({ cls: "olen-workspace-skill-chip olen-clickable" });
          chip.textContent = skill;
          chip.addEventListener("click", () => {
            addSkill(skill);
            closeSheet();
          });
        }
      }
    }
    const actions = sheet.createDiv({ cls: "olen-directive-actions" });
    const addBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary",
      text: "ADD"
    });
    addBtn.addEventListener("click", () => {
      const val = input.value.trim();
      if (val) {
        addSkill(val);
        closeSheet();
      }
    });
    const cancelBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "CANCEL"
    });
    cancelBtn.addEventListener("click", () => closeSheet());
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay)
        closeSheet();
    });
    const addSkill = (name) => {
      if (!workspace.skills.includes(name)) {
        workspace.skills.push(name);
        this.plugin.settings.activeWorkspace = workspace;
        this.plugin.saveSettings();
        this.render(workspace);
      }
    };
    const closeSheet = () => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 350);
    };
    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  }
  loadSkillsFromFolder(folderPath) {
    const files = this.app.vault.getMarkdownFiles();
    const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";
    return files.filter((f) => f.path.startsWith(normalizedFolder)).map((f) => f.basename).sort();
  }
  showFinishModal(workspace) {
    this.stopTimer();
    const endTime = /* @__PURE__ */ new Date();
    const durationMinutes = Math.round((endTime.getTime() - this.startTime.getTime()) / 6e4);
    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";
    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });
    sheet.createEl("div", { cls: "olen-heading-lg", text: "HOW DID IT FEEL?" });
    sheet.createEl("div", {
      cls: "olen-body-italic",
      attr: { style: "margin: 12px 0 20px;" },
      text: `${workspace.emoji} ${workspace.activityName} \xB7 ${durationMinutes} minutes`
    });
    const states = this.plugin.settings.workspaceCompletionStates.filter((s) => s.enabled);
    const statesGrid = sheet.createDiv({ cls: "olen-workspace-states-grid" });
    for (const state of states) {
      const btn = statesGrid.createDiv({ cls: "olen-workspace-state-btn" });
      btn.style.borderColor = state.color;
      btn.createEl("div", { cls: "olen-workspace-state-icon", text: state.icon });
      btn.createEl("div", { cls: "olen-workspace-state-name", text: state.name });
      btn.addEventListener("click", async () => {
        const result = {
          activityId: workspace.activityId,
          activityName: workspace.activityName,
          category: workspace.category,
          type: state.id,
          startTime: workspace.startTime,
          endTime: endTime.toISOString(),
          durationMinutes,
          skills: workspace.skills
        };
        await this.finishWorkspace(result, workspace);
        closeSheet();
      });
    }
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
      }
    });
    const closeSheet = () => {
      overlay.classList.remove("visible");
      setTimeout(() => overlay.remove(), 350);
    };
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("visible"));
  }
  async finishWorkspace(result, workspace) {
    const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
    if (activity?.folder) {
      await this.createWorkspaceFile(result, activity.folder);
    }
    await this.markActivityDone(workspace, result);
    const state = this.plugin.settings.workspaceCompletionStates.find((s) => s.id === result.type);
    if (state && state.xpMultiplier > 0) {
      const xpGain = Math.round(this.plugin.settings.devConfig.xpPerCompletion * state.xpMultiplier);
      this.plugin.settings.categoryXP[workspace.category] += xpGain;
    }
    if (result.type !== "skipped") {
      const act = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
      if (act) {
        this.plugin.settings.bossCurrentHP = Math.max(
          0,
          this.plugin.settings.bossCurrentHP - act.damagePerCompletion
        );
      }
    }
    this.plugin.settings.activeWorkspace = null;
    await this.plugin.saveSettings();
    const stateLabel = this.plugin.settings.workspaceCompletionStates.find((s) => s.id === result.type)?.name ?? result.type;
    new import_obsidian3.Notice(`${workspace.emoji} ${workspace.activityName} \u2014 ${stateLabel} \xB7 ${result.durationMinutes}m`);
    this.plugin.activateDashboardView();
  }
  async createWorkspaceFile(result, folder) {
    const activity = this.plugin.settings.activities.find((a) => a.id === result.activityId);
    const property = activity?.property ?? result.activityName;
    const endTime = new Date(result.endTime);
    const startTime = new Date(result.startTime);
    const dateStr = endTime.toISOString().slice(0, 10);
    const timeStr = `${String(endTime.getHours()).padStart(2, "0")}${String(endTime.getMinutes()).padStart(2, "0")}`;
    const fileName = `Workspace ${dateStr} ${timeStr}`;
    const filePath = `${folder}/${fileName}.md`;
    const tzOffset = -startTime.getTimezoneOffset();
    const tzHours = String(Math.floor(Math.abs(tzOffset) / 60)).padStart(2, "0");
    const tzMins = String(Math.abs(tzOffset) % 60).padStart(2, "0");
    const tzSign = tzOffset >= 0 ? "+" : "-";
    const timestamp = startTime.toISOString().slice(0, -1) + tzSign + tzHours + ":" + tzMins;
    const endTimestamp = endTime.toISOString().slice(0, -1) + tzSign + tzHours + ":" + tzMins;
    const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    const typeName = result.type.charAt(0).toUpperCase() + result.type.slice(1);
    const durationStr = `${Math.floor(result.durationMinutes / 60)}h ${result.durationMinutes % 60}m`;
    const fmLines = [
      "---",
      "editor-width: 100",
      `${property}: true`,
      `${property}-Type: "${typeName}"`,
      `Timestamp: "${timestamp}"`,
      `endTime: "${endTimestamp}"`,
      `duration: "${durationStr}"`,
      `category: "${result.category}"`,
      result.skills.length > 0 ? `skills: [${result.skills.map((s) => `"${s}"`).join(", ")}]` : "skills: []",
      "cssclasses:",
      "  - hide-properties",
      "---"
    ];
    const body = [
      "",
      `# ${activity?.emoji ?? ""} ${result.activityName} Workspace`,
      "",
      `> "${quote.text}"`,
      `> \u2014 ${quote.attribution}`,
      "",
      "## Notes",
      "",
      ""
    ];
    const content = [...fmLines, ...body].join("\n");
    const abstractFolder = this.app.vault.getAbstractFileByPath(folder);
    if (!abstractFolder) {
      await this.app.vault.createFolder(folder);
    }
    let finalPath = filePath;
    const existing = this.app.vault.getAbstractFileByPath(filePath);
    if (existing) {
      let counter = 2;
      while (this.app.vault.getAbstractFileByPath(`${folder}/${fileName} (${counter}).md`)) {
        counter++;
      }
      finalPath = `${folder}/${fileName} (${counter}).md`;
    }
    await this.app.vault.create(finalPath, content);
  }
  async markActivityDone(workspace, result) {
    const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
    if (!activity)
      return;
    const now = this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : /* @__PURE__ */ new Date();
    const dateStr = now.toISOString().slice(0, 10);
    const folder = activity.folder;
    const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";
    const files = this.app.vault.getMarkdownFiles();
    const todayFile = files.find(
      (f) => (f.path === folder || f.path.startsWith(normalizedFolder)) && f.basename === dateStr
    );
    if (todayFile) {
      await this.app.fileManager.processFrontMatter(todayFile, (frontmatter) => {
        frontmatter[activity.property] = true;
        if (result) {
          const typeName = result.type.charAt(0).toUpperCase() + result.type.slice(1);
          frontmatter[`${activity.property}-Type`] = typeName;
        }
      });
    } else {
      const filePath = `${normalizedFolder}${dateStr}.md`;
      const typeLine = result ? `
${activity.property}-Type: "${result.type.charAt(0).toUpperCase() + result.type.slice(1)}"` : "";
      const content = `---
${activity.property}: true${typeLine}
---
`;
      try {
        await this.app.vault.create(filePath, content);
      } catch {
      }
    }
  }
  formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor(seconds % 3600 / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// src/settings/OlenSettings.ts
var import_obsidian4 = require("obsidian");
var OlenSettingTab = class extends import_obsidian4.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("olen-settings");
    containerEl.createEl("div", {
      text: "Olen",
      attr: { style: "font-size: 1.4em; font-weight: 700; margin-bottom: 4px; padding: 8px 0;" }
    });
    containerEl.createEl("div", {
      text: "Mythological Life-Operating System",
      attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 16px;" }
    });
    this.renderStatusBar(containerEl);
    this.renderProfileSection(containerEl);
    this.renderActivitiesSection(containerEl);
    this.renderCategoriesSection(containerEl);
    this.renderTempleSection(containerEl);
    this.renderCalendarSection(containerEl);
    this.renderThemeSection(containerEl);
    this.renderAdvancedSection(containerEl);
    this.renderDevDashboardSection(containerEl);
  }
  // --- Collapsible Section Helper ---
  createCollapsibleSection(parent, title, icon, defaultOpen = false) {
    const section = parent.createDiv({
      attr: {
        style: `
          margin: 8px 0;
          border: 1px solid var(--background-modifier-border);
          border-radius: 8px;
          overflow: hidden;
        `
      }
    });
    const header = section.createDiv({
      attr: {
        style: `
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--background-secondary);
          cursor: pointer;
          user-select: none;
          min-height: 44px;
        `
      }
    });
    const arrow = header.createEl("span", {
      text: defaultOpen ? "\u25BC" : "\u25B6",
      attr: { style: "font-size: 10px; width: 12px;" }
    });
    header.createEl("span", {
      text: icon ? `${icon}  ${title}` : title,
      attr: { style: "font-weight: 600; font-size: 0.95em;" }
    });
    const body = section.createDiv({
      attr: { style: `padding: 0 16px; display: ${defaultOpen ? "block" : "none"};` }
    });
    header.addEventListener("click", () => {
      const isOpen = body.style.display !== "none";
      body.style.display = isOpen ? "none" : "block";
      body.style.padding = isOpen ? "0 16px" : "12px 16px";
      arrow.textContent = isOpen ? "\u25B6" : "\u25BC";
    });
    if (defaultOpen)
      body.style.padding = "12px 16px";
    return body;
  }
  // --- Status Bar ---
  renderStatusBar(container) {
    const hpPercent = this.plugin.settings.bossMaxHP > 0 ? Math.round(this.plugin.settings.bossCurrentHP / this.plugin.settings.bossMaxHP * 100) : 0;
    const bar = container.createDiv({
      attr: {
        style: `
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
          padding: 8px 12px; margin-bottom: 12px;
          background: var(--background-secondary); border-radius: 6px;
          font-size: 0.8em; color: var(--text-muted);
        `
      }
    });
    bar.createEl("span", { text: `Tier ${this.plugin.settings.currentTier}/13` });
    bar.createEl("span", {
      text: `HP ${this.plugin.settings.bossCurrentHP}/${this.plugin.settings.bossMaxHP} (${hpPercent}%)`
    });
    const state = this.plugin.settings.inTartarus ? "TARTARUS" : this.plugin.settings.systemState === "paused" ? "PAUSED" : "ACTIVE";
    bar.createEl("span", {
      text: state,
      attr: {
        style: `font-weight: 600; color: ${this.plugin.settings.inTartarus ? "var(--text-error)" : "var(--text-normal)"};`
      }
    });
    bar.createEl("span", {
      text: this.plugin.settings.migrated ? "Migrated" : "Not migrated",
      attr: { style: "font-style: italic;" }
    });
  }
  // --- Profile ---
  renderProfileSection(container) {
    const body = this.createCollapsibleSection(container, "Profile", "\u{1F464}");
    new import_obsidian4.Setting(body).setName("Name").setDesc("Your name for the dashboard greeting").addText(
      (text) => text.setValue(this.plugin.settings.userName).onChange(async (value) => {
        this.plugin.settings.userName = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("My Why").setDesc("Your core motivation \u2014 shown periodically on the dashboard").addTextArea(
      (area) => area.setValue(this.plugin.settings.myWhy).onChange(async (value) => {
        this.plugin.settings.myWhy = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("Hero background image").setDesc("Vault path to the hero background image (e.g., images/hero.jpg)").addText(
      (text) => text.setPlaceholder("path/to/image.jpg").setValue(this.plugin.settings.heroBackground).onChange(async (value) => {
        this.plugin.settings.heroBackground = value;
        await this.plugin.saveSettings();
      })
    );
  }
  // --- Activities ---
  renderActivitiesSection(container) {
    const body = this.createCollapsibleSection(container, "Activities", "\u{1F3AF}");
    for (let i = 0; i < this.plugin.settings.activities.length; i++) {
      const activity = this.plugin.settings.activities[i];
      this.renderActivityItem(body, activity, i);
    }
    new import_obsidian4.Setting(body).addButton(
      (btn) => btn.setButtonText("+ Add Activity").onClick(async () => {
        const newActivity = {
          id: `custom-${Date.now()}`,
          name: "New Activity",
          emoji: "\u2B50",
          category: "spirit",
          enabled: true,
          folder: "",
          property: "",
          damagePerCompletion: 1,
          weeklyTarget: 3,
          trackingMode: "daily",
          hasWorkspace: false,
          priority: 5,
          neglectThreshold: 3,
          preferredTime: "anytime",
          estimatedDuration: 30
        };
        this.plugin.settings.activities.push(newActivity);
        await this.plugin.saveSettings();
        this.display();
      })
    );
  }
  renderActivityItem(container, activity, index) {
    const wrapper = container.createDiv({
      attr: {
        style: `
          border: 1px solid var(--background-modifier-border);
          border-radius: 6px;
          padding: 10px;
          margin-bottom: 8px;
        `
      }
    });
    new import_obsidian4.Setting(wrapper).setName(`${activity.emoji} ${activity.name}`).setDesc(`${activity.category} \xB7 ${activity.folder || "no folder set"}`).addToggle(
      (toggle) => toggle.setValue(activity.enabled).onChange(async (value) => {
        this.plugin.settings.activities[index].enabled = value;
        await this.plugin.saveSettings();
      })
    );
    const detailsToggle = wrapper.createEl("details");
    detailsToggle.createEl("summary", {
      text: "Configure",
      attr: { style: "cursor: pointer; font-size: 0.85em; color: var(--text-muted); margin-bottom: 8px;" }
    });
    const details = detailsToggle.createDiv();
    new import_obsidian4.Setting(details).setName("Name").addText((t) => t.setValue(activity.name).onChange(async (v) => {
      this.plugin.settings.activities[index].name = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian4.Setting(details).setName("Emoji").addText((t) => t.setValue(activity.emoji).onChange(async (v) => {
      this.plugin.settings.activities[index].emoji = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian4.Setting(details).setName("Category").addDropdown(
      (d) => d.addOptions({ body: "Body", mind: "Mind", spirit: "Spirit" }).setValue(activity.category).onChange(async (v) => {
        this.plugin.settings.activities[index].category = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Activity folder").setDesc("Vault folder with YYYY-MM-DD notes and workspace logs").addText((t) => t.setValue(activity.folder).onChange(async (v) => {
      this.plugin.settings.activities[index].folder = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian4.Setting(details).setName("Frontmatter property").addText((t) => t.setValue(activity.property).onChange(async (v) => {
      this.plugin.settings.activities[index].property = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian4.Setting(details).setName("Weekly target").addSlider(
      (s) => s.setLimits(1, 7, 1).setValue(activity.weeklyTarget).setDynamicTooltip().onChange(async (v) => {
        this.plugin.settings.activities[index].weeklyTarget = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Priority (1-10)").addSlider(
      (s) => s.setLimits(1, 10, 1).setValue(activity.priority).setDynamicTooltip().onChange(async (v) => {
        this.plugin.settings.activities[index].priority = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Preferred time").addDropdown(
      (d) => d.addOptions({
        morning: "Morning",
        afternoon: "Afternoon",
        evening: "Evening",
        anytime: "Anytime"
      }).setValue(activity.preferredTime).onChange(async (v) => {
        this.plugin.settings.activities[index].preferredTime = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Neglect threshold (days)").addSlider(
      (s) => s.setLimits(1, 14, 1).setValue(activity.neglectThreshold).setDynamicTooltip().onChange(async (v) => {
        this.plugin.settings.activities[index].neglectThreshold = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Estimated duration (minutes)").addText(
      (t) => t.setValue(String(activity.estimatedDuration)).onChange(async (v) => {
        const n = parseInt(v);
        if (!isNaN(n) && n > 0) {
          this.plugin.settings.activities[index].estimatedDuration = n;
          await this.plugin.saveSettings();
        }
      })
    );
    new import_obsidian4.Setting(details).setName("Has workspace").setDesc("Opens workspace view with timer when started, instead of marking done immediately").addToggle(
      (toggle) => toggle.setValue(activity.hasWorkspace).onChange(async (v) => {
        this.plugin.settings.activities[index].hasWorkspace = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Workspace template").setDesc("Built-in template ID (e.g. 'workout') or vault path to .js file. Leave empty for default workspace.").addText(
      (t) => t.setPlaceholder("e.g. workout").setValue(activity.workspaceTemplate ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].workspaceTemplate = v.trim() || void 0;
        this.plugin.templateEngine.invalidateCache();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Skill folder").setDesc("Vault folder containing skill tree notes").addText(
      (t) => t.setPlaceholder("e.g. Home/Starts/Drawing/Skill tree").setValue(activity.skillFolder ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].skillFolder = v.trim() || void 0;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Blocks (comma-separated activity IDs)").addText(
      (t) => t.setValue((activity.blocks ?? []).join(", ")).onChange(async (v) => {
        this.plugin.settings.activities[index].blocks = v.split(",").map((s) => s.trim()).filter(Boolean);
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Alternates with (activity ID)").addText(
      (t) => t.setValue(activity.alternatesWith ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].alternatesWith = v.trim() || void 0;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Chain after (activity ID)").addText(
      (t) => t.setValue(activity.chainAfter ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].chainAfter = v.trim() || void 0;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).addButton(
      (btn) => btn.setButtonText("Delete Activity").setWarning().onClick(async () => {
        this.plugin.settings.activities.splice(index, 1);
        await this.plugin.saveSettings();
        this.display();
      })
    );
  }
  // --- Categories ---
  renderCategoriesSection(container) {
    const body = this.createCollapsibleSection(container, "Categories", "\u{1F3A8}");
    const categories = [
      { key: "body", label: "Body" },
      { key: "mind", label: "Mind" },
      { key: "spirit", label: "Spirit" }
    ];
    for (const cat of categories) {
      new import_obsidian4.Setting(body).setName(`${cat.label} color`).addColorPicker(
        (cp) => cp.setValue(this.plugin.settings.categoryColors[cat.key]).onChange(async (v) => {
          this.plugin.settings.categoryColors[cat.key] = v;
          await this.plugin.saveSettings();
        })
      );
    }
    new import_obsidian4.Setting(body).setName("Title override").setDesc("Override the dynamic title (leave empty for auto)").addText(
      (t) => t.setValue(this.plugin.settings.titleOverride).onChange(async (v) => {
        this.plugin.settings.titleOverride = v;
        await this.plugin.saveSettings();
      })
    );
  }
  // --- Temple ---
  renderTempleSection(container) {
    const body = this.createCollapsibleSection(container, "Temple Upkeep", "\u{1F3DB}\uFE0F");
    for (let i = 0; i < this.plugin.settings.templeTasks.length; i++) {
      const task = this.plugin.settings.templeTasks[i];
      new import_obsidian4.Setting(body).setName(`${task.emoji} ${task.name}`).setDesc(`Every ${task.intervalDays} day(s)`).addText(
        (t) => t.setPlaceholder("Name").setValue(task.name).onChange(async (v) => {
          this.plugin.settings.templeTasks[i].name = v;
          await this.plugin.saveSettings();
        })
      ).addText(
        (t) => t.setPlaceholder("Days").setValue(String(task.intervalDays)).onChange(async (v) => {
          const n = parseInt(v);
          if (!isNaN(n) && n > 0) {
            this.plugin.settings.templeTasks[i].intervalDays = n;
            await this.plugin.saveSettings();
          }
        })
      ).addText(
        (t) => t.setPlaceholder("Emoji").setValue(task.emoji).onChange(async (v) => {
          this.plugin.settings.templeTasks[i].emoji = v;
          await this.plugin.saveSettings();
        })
      );
    }
    new import_obsidian4.Setting(body).addButton(
      (btn) => btn.setButtonText("+ Add Temple Task").onClick(async () => {
        this.plugin.settings.templeTasks.push({
          id: `temple-${Date.now()}`,
          name: "New Task",
          lastCompleted: null,
          intervalDays: 7,
          emoji: "\u2728"
        });
        await this.plugin.saveSettings();
        this.display();
      })
    );
  }
  // --- Calendar Integration ---
  renderCalendarSection(container) {
    const body = this.createCollapsibleSection(container, "Calendar Integration", "\u{1F4C5}");
    body.createEl("p", {
      text: "Merge external tasks into your Day Map timeline.",
      attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 8px;" }
    });
    new import_obsidian4.Setting(body).setName("Daily Notes integration").setDesc("Parse tasks from your daily notes (- [ ] Task @time ~30m)").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.calendar.enableDailyNotes).onChange(async (v) => {
        this.plugin.settings.calendar.enableDailyNotes = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("Daily Notes folder").setDesc("Vault folder containing YYYY-MM-DD.md notes").addText(
      (t) => t.setPlaceholder("Daily Notes").setValue(this.plugin.settings.calendar.dailyNotesFolder).onChange(async (v) => {
        this.plugin.settings.calendar.dailyNotesFolder = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("Tasks Plugin integration").setDesc("Read tasks with due dates from the Tasks plugin").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.calendar.enableTasksPlugin).onChange(async (v) => {
        this.plugin.settings.calendar.enableTasksPlugin = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("Quick Tasks").setDesc("Olen's built-in task system").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.calendar.enableQuickTasks).onChange(async (v) => {
        this.plugin.settings.calendar.enableQuickTasks = v;
        await this.plugin.saveSettings();
      })
    );
    if (this.plugin.settings.calendar.enableQuickTasks) {
      const now = this.plugin.settings.simulatedDate ? new Date(this.plugin.settings.simulatedDate) : /* @__PURE__ */ new Date();
      const today = now.toISOString().slice(0, 10);
      const todayTasks = this.plugin.settings.calendar.quickTasks.filter(
        (qt) => qt.date === today
      );
      if (todayTasks.length > 0) {
        const listEl = body.createDiv({
          attr: { style: "margin: 8px 0; padding: 8px; border: 1px solid var(--background-modifier-border); border-radius: 6px;" }
        });
        listEl.createEl("div", {
          text: "Today's Quick Tasks",
          attr: { style: "font-weight: 600; font-size: 0.9em; margin-bottom: 6px;" }
        });
        for (let i = 0; i < this.plugin.settings.calendar.quickTasks.length; i++) {
          const qt = this.plugin.settings.calendar.quickTasks[i];
          if (qt.date !== today)
            continue;
          new import_obsidian4.Setting(listEl).setName(`${qt.done ? "\u2713" : "\u25CB"} ${qt.title}`).setDesc(
            [qt.time, qt.duration ? `${qt.duration}m` : ""].filter(Boolean).join(" \xB7 ") || "No time set"
          ).addButton(
            (btn) => btn.setButtonText("Delete").setWarning().onClick(async () => {
              this.plugin.settings.calendar.quickTasks.splice(i, 1);
              await this.plugin.saveSettings();
              this.display();
            })
          );
        }
      }
      new import_obsidian4.Setting(body).addButton(
        (btn) => btn.setButtonText("+ Add Quick Task").onClick(() => {
          this.plugin.showQuickTaskDialog();
        })
      );
    }
  }
  // --- Theme ---
  renderThemeSection(container) {
    const body = this.createCollapsibleSection(container, "Theme", "\u{1F3A8}");
    const themeFields = [
      { key: "bgPrimary", label: "Background", defaultVal: "#0c0a09" },
      { key: "textPrimary", label: "Text", defaultVal: "#f5f0e8" },
      { key: "textMuted", label: "Muted text", defaultVal: "#928d85" },
      { key: "accentGold", label: "Accent (gold)", defaultVal: "#c9a84c" },
      { key: "danger", label: "Danger", defaultVal: "#8b2d35" },
      { key: "success", label: "Success", defaultVal: "#d4940a" }
    ];
    for (const field of themeFields) {
      new import_obsidian4.Setting(body).setName(field.label).addColorPicker(
        (cp) => cp.setValue(
          this.plugin.settings.themeOverrides?.[field.key] ?? field.defaultVal
        ).onChange(async (v) => {
          this.plugin.settings.themeOverrides[field.key] = v;
          await this.plugin.saveSettings();
        })
      );
    }
    new import_obsidian4.Setting(body).addButton(
      (btn) => btn.setButtonText("Reset to Elysian Dark").onClick(async () => {
        this.plugin.settings.themeOverrides = {};
        await this.plugin.saveSettings();
        this.display();
        new import_obsidian4.Notice("Theme reset to Elysian Dark defaults");
      })
    );
  }
  // --- Advanced ---
  renderAdvancedSection(container) {
    const body = this.createCollapsibleSection(container, "Advanced", "\u2699\uFE0F");
    new import_obsidian4.Setting(body).setName("Simulated date").setDesc("Override today's date for testing (YYYY-MM-DD)").addText(
      (t) => t.setPlaceholder("YYYY-MM-DD").setValue(this.plugin.settings.simulatedDate ?? "").onChange(async (v) => {
        this.plugin.settings.simulatedDate = v.trim() || null;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("System state").addDropdown(
      (d) => d.addOptions({ active: "Active", paused: "Paused" }).setValue(this.plugin.settings.systemState).onChange(async (v) => {
        const newState = v;
        if (newState === "paused" && this.plugin.settings.systemState === "active") {
          this.plugin.settings.pauseStartTime = (/* @__PURE__ */ new Date()).toISOString();
        } else if (newState === "active" && this.plugin.settings.systemState === "paused") {
          if (this.plugin.settings.pauseStartTime) {
            const pausedMs = Date.now() - new Date(this.plugin.settings.pauseStartTime).getTime();
            this.plugin.settings.totalPausedTime += pausedMs;
          }
          this.plugin.settings.pauseStartTime = null;
        }
        this.plugin.settings.systemState = newState;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("Quote folder").setDesc("Vault folder containing quote files").addText(
      (t) => t.setPlaceholder("Quotes/Stoic").setValue(this.plugin.settings.quoteFolderPath).onChange(async (v) => {
        this.plugin.settings.quoteFolderPath = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("Re-run migration").setDesc("Re-import data from the Mythological Habit Tracker plugin").addButton(
      (btn) => btn.setButtonText("Migrate").setWarning().onClick(async () => {
        this.plugin.settings.migrated = false;
        await this.plugin.saveSettings();
        await this.plugin.onload();
        this.display();
        new import_obsidian4.Notice("Migration complete");
      })
    );
  }
  // --- Developer Dashboard ---
  renderDevDashboardSection(container) {
    const body = this.createCollapsibleSection(container, "Developer Dashboard", "\u{1F6E0}\uFE0F");
    body.createEl("p", {
      text: "Edit the raw devConfig JSON. Changes are applied on save.",
      attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 8px;" }
    });
    const textarea = body.createEl("textarea", {
      attr: {
        style: `
          width: 100%; min-height: 300px; font-family: monospace; font-size: 12px;
          background: var(--background-primary); color: var(--text-normal);
          border: 1px solid var(--background-modifier-border); border-radius: 6px;
          padding: 10px; resize: vertical;
        `
      }
    });
    textarea.value = JSON.stringify(this.plugin.settings.devConfig, null, 2);
    new import_obsidian4.Setting(body).addButton(
      (btn) => btn.setButtonText("Save devConfig").onClick(async () => {
        try {
          const parsed = JSON.parse(textarea.value);
          this.plugin.settings.devConfig = Object.assign(
            {},
            DEFAULT_DEV_CONFIG,
            parsed
          );
          await this.plugin.saveSettings();
          this.plugin.refreshDashboard();
          new import_obsidian4.Notice("devConfig saved and applied");
        } catch (err) {
          new import_obsidian4.Notice("Invalid JSON \u2014 please check syntax");
        }
      })
    ).addButton(
      (btn) => btn.setButtonText("Reset to defaults").onClick(async () => {
        this.plugin.settings.devConfig = { ...DEFAULT_DEV_CONFIG };
        await this.plugin.saveSettings();
        textarea.value = JSON.stringify(this.plugin.settings.devConfig, null, 2);
        new import_obsidian4.Notice("devConfig reset to defaults");
      })
    );
    new import_obsidian4.Setting(body).setName("Export all settings").addButton(
      (btn) => btn.setButtonText("Copy to clipboard").onClick(async () => {
        const json = JSON.stringify(this.plugin.settings, null, 2);
        try {
          await navigator.clipboard.writeText(json);
          new import_obsidian4.Notice("Settings copied to clipboard");
        } catch {
          const ta = document.createElement("textarea");
          ta.value = json;
          ta.style.cssText = "position:fixed;top:0;left:0;width:100%;height:50%;z-index:9999;font-size:11px;";
          document.body.appendChild(ta);
          ta.select();
          ta.addEventListener("blur", () => ta.remove());
          new import_obsidian4.Notice("Tap the text area and copy manually");
        }
      })
    );
    new import_obsidian4.Setting(body).setName("Import settings").addTextArea((area) => {
      area.setPlaceholder("Paste JSON here...");
      area.inputEl.style.width = "100%";
      area.inputEl.style.minHeight = "80px";
      area.inputEl.style.fontFamily = "monospace";
      area.inputEl.style.fontSize = "11px";
      body._importArea = area;
    }).addButton(
      (btn) => btn.setButtonText("Import").setWarning().onClick(async () => {
        try {
          const area = body._importArea;
          if (!area)
            return;
          const parsed = JSON.parse(area.getValue());
          Object.assign(this.plugin.settings, parsed);
          await this.plugin.saveSettings();
          this.display();
          new import_obsidian4.Notice("Settings imported successfully");
        } catch (err) {
          new import_obsidian4.Notice("Invalid JSON \u2014 please check syntax");
        }
      })
    );
  }
};

// src/templates/TemplateEngine.ts
var import_obsidian5 = require("obsidian");

// src/templates/builtins/workout.tpl
var workout_default = '// ============================================================\n// Olen Template \u2014 Workout Tracker\n// Renders inside any note with `activity: workout` in frontmatter.\n// All data is read/written via ctx.getData / ctx.setData \u2014 the\n// note body stays empty; the UI is generated entirely here.\n// ============================================================\n\nconst { container, getData, setData, setMultipleData, app, moment, notice,\n        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;\n\n// \u2500\u2500 Configuration \u2500\u2500\nconst WORKOUT_FOLDER = "Personal Life/01 Workout";\nconst STATS_FILE = "Personal Life/Personal Stats.md";\nconst EXERCISE_DB_FOLDER = "Home/Activities/Exercises database";\n\nconst THEME = {\n  color: "#9a8c7a",\n  colorHover: "#aa9c8a",\n  colorBorder: "#3a342a",\n  colorBorderHover: "#4a443a",\n  colorMuted: "#6a5a4a",\n  colorLight: "#b8a890",\n  colorDiscipline: "#a89860",\n  colorFlow: "#6a8a9a",\n  systemGreen: "#7a9a7d"\n};\n\nconst STRENGTH_LEVELS = {\n  "Untrained": { color: "#6a6a6a", icon: "\\u25CB" },\n  "Beginner":  { color: "#a89860", icon: "\\u25D0" },\n  "Novice":    { color: "#7a9a7d", icon: "\\u25D1" },\n  "Intermediate": { color: "#6a8a9a", icon: "\\u25D5" },\n  "Advanced":  { color: "#8a7a9a", icon: "\\u25CF" },\n  "Elite":     { color: "#9a6a7a", icon: "\\u2605" }\n};\n\n// \u2500\u2500 State (from frontmatter) \u2500\u2500\nlet exercises = getData("exercises") || [];\nlet muscleGroups = getData("muscleGroups") || [];\nlet currentMuscleIndex = getData("currentMuscleIndex") || 0;\nconst isCompleted = getData("Workout") === true;\n\n// \u2500\u2500 Inject styles once \u2500\u2500\nif (!document.getElementById("olen-tpl-workout-v1")) {\n  const style = document.createElement("style");\n  style.id = "olen-tpl-workout-v1";\n  style.textContent = `\n    .otw-container * { box-sizing: border-box; }\n    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0; font-family: Georgia, serif; }\n    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 20px rgba(154,140,122,0.03); } 50% { box-shadow: inset 0 0 40px rgba(154,140,122,0.08); } }\n    .otw-card { background: #0a0a0a; border: 1px solid #3a342a; padding: 16px; position: relative; margin-bottom: 16px; }\n    .otw-card-breathe { animation: otw-breathe 6s ease-in-out infinite; }\n    .otw-header { text-align: center; padding: 20px; }\n    .otw-title { margin: 0; color: #9a8c7a; font-size: 24px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }\n    .otw-progress-label { color: #6a5a4a; font-size: 12px; margin-top: 8px; }\n    .otw-btn { padding: 14px 24px; border: none; font-size: 13px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; }\n    .otw-btn-primary { background: #9a8c7a; color: #0a0a0a; width: 100%; }\n    .otw-btn-primary:active { transform: scale(0.98); }\n    .otw-btn-secondary { background: #0f0f0f; border: 1px solid #3a342a; color: #6a5a4a; }\n    .otw-btn-secondary:active { border-color: #9a8c7a; color: #9a8c7a; }\n    .otw-btn-finish { background: #7a9a7d; color: #0a0a0a; }\n    .otw-btn-dashed { width: 100%; background: transparent; border: 1px dashed #3a342a; color: #6a5a4a; }\n    .otw-btn-dashed:active { border-color: #9a8c7a; color: #9a8c7a; }\n    .otw-nav-row { display: flex; gap: 12px; margin-top: 24px; }\n    .otw-nav-row .otw-btn { flex: 1; text-align: center; }\n    .otw-set-row { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 12px; padding: 12px; background: #0f0f0f; border: 1px solid #3a342a; margin-bottom: 6px; }\n    .otw-set-row.completed { opacity: 0.6; }\n    .otw-checkbox { width: 24px; height: 24px; border: 2px solid #3a342a; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0a0a0a; font-weight: bold; transition: all 0.2s; flex-shrink: 0; }\n    .otw-checkbox.checked { background: #7a9a7d; border-color: #7a9a7d; }\n    .otw-input { padding: 6px; background: #0a0a0a; border: 1px solid #3a342a; color: #9a8c7a; text-align: center; font-size: 14px; font-weight: 600; width: 50px; }\n    .otw-ctrl-btn { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: #0f0f0f; border: 1px solid #3a342a; color: #9a8c7a; cursor: pointer; font-size: 16px; flex-shrink: 0; }\n    .otw-ctrl-btn:active { background: #9a8c7a; color: #0a0a0a; }\n    .otw-warmup-badge { font-size: 9px; color: #6a8a9a; padding: 2px 6px; background: rgba(106,138,154,0.15); border-radius: 3px; }\n    .otw-strength-bar { height: 6px; background: #1a1a1a; border-radius: 3px; overflow: hidden; margin-top: 6px; }\n    .otw-strength-fill { height: 100%; border-radius: 3px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }\n    .otw-strength-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }\n    .otw-pr-box { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; background: rgba(168,152,96,0.1); border: 1px solid rgba(168,152,96,0.3); border-radius: 4px; margin-top: 8px; }\n    .otw-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.5s ease, backdrop-filter 0.5s ease; }\n    .otw-modal-overlay.visible { background: rgba(0,0,0,0.95); backdrop-filter: blur(4px); }\n    .otw-modal-content { background: #0a0a0a; padding: 28px 20px; border: 1px solid #3a342a; max-width: 550px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 16px; position: relative; opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease, transform 0.5s ease; overflow-y: auto; }\n    .otw-modal-overlay.visible .otw-modal-content { opacity: 1; transform: translateY(0); }\n    .otw-summary-complete { text-align: center; padding: 24px 0; }\n    .otw-summary-complete h2 { margin: 0; color: #7a9a7d; font-size: 16px; font-weight: 700; letter-spacing: 3px; }\n    .otw-feel-btn { display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: #0c0c0c; cursor: pointer; margin-bottom: 10px; transition: all 0.2s; }\n    .otw-feel-btn:active { background: #101010; }\n    .otw-corners { position: absolute; pointer-events: none; }\n  `;\n  document.head.appendChild(style);\n}\n\n// \u2500\u2500 Utility Functions \u2500\u2500\n\nfunction addCorners(el, color, size = 14) {\n  ["TL", "TR", "BL", "BR"].forEach((pos) => {\n    const c = document.createElement("div");\n    const isTop = pos.includes("T"), isLeft = pos.includes("L");\n    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;\n    el.appendChild(c);\n  });\n}\n\nfunction calculate1RM(weight, reps) {\n  if (reps === 0 || weight === 0) return 0;\n  if (reps === 1) return weight;\n  return Math.round(weight * (1 + reps / 30));\n}\n\nfunction getFirstWorkingSetIndex(sets) {\n  return sets.findIndex((s) => !s.isWarmup);\n}\n\nfunction updateWarmupWeights(ex, newW) {\n  const warmups = ex.sets.filter((s) => s.isWarmup);\n  [0.5, 0.7, 0.85].forEach((p, i) => {\n    if (warmups[i]) warmups[i].weight = Math.round(newW * p);\n  });\n}\n\nasync function getPersonalStats() {\n  const fm = getFileMetadata(STATS_FILE);\n  if (!fm) return { weight: 61, height: 175, birthdate: "2005-11-29" };\n  return { weight: fm.Weight || 61, height: fm.Height || 175, birthdate: fm.Birthdate || "2005-11-29" };\n}\n\nfunction calculateAge(bd) {\n  if (!bd) return 20;\n  const b = new Date(bd), t = new Date();\n  let a = t.getFullYear() - b.getFullYear();\n  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;\n  return a;\n}\n\nfunction parseStandardValue(val) {\n  if (typeof val !== "string") val = String(val);\n  val = val.trim();\n  if (val.includes("<")) {\n    const num = parseFloat(val.replace(/[<\\s]/g, ""));\n    return !isNaN(num) && num > 0 ? num * 0.5 : 0.1;\n  }\n  const num = parseFloat(val);\n  return isNaN(num) ? 0 : num;\n}\n\nasync function getStrengthStandard(exerciseName) {\n  const filePath = EXERCISE_DB_FOLDER + "/" + exerciseName + ".md";\n  const fm = getFileMetadata(filePath);\n  const isBW = fm?.Type === "Bodyweight";\n  const content = await readFile(filePath);\n  if (!content) return null;\n  const lines = content.split("\\n");\n  const bwTable = [], ageTable = [];\n  let currentTable = null;\n  for (const line of lines) {\n    if (line.match(/\\|\\s*BW\\s*\\|/i)) { currentTable = "bw"; continue; }\n    if (line.match(/\\|\\s*Age\\s*\\|/i)) { currentTable = "age"; continue; }\n    if (line.startsWith("|---") || line.startsWith("| ---")) continue;\n    const m = line.match(/\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|/);\n    if (m) {\n      const row = { key: parseStandardValue(m[1]), beginner: parseStandardValue(m[2]), novice: parseStandardValue(m[3]), intermediate: parseStandardValue(m[4]), advanced: parseStandardValue(m[5]), elite: parseStandardValue(m[6]) };\n      if (row.key > 0 && (row.beginner > 0 || row.novice > 0 || row.intermediate > 0)) {\n        if (currentTable === "bw") bwTable.push(row);\n        else if (currentTable === "age") ageTable.push(row);\n      }\n    }\n  }\n  return { bwTable, ageTable, isBodyweight: isBW, hasValidData: bwTable.length > 0 || ageTable.length > 0 };\n}\n\nfunction interpolateStandard(table, value) {\n  if (!table || table.length === 0) return null;\n  const sorted = [...table].sort((a, b) => a.key - b.key);\n  let lower = sorted[0], upper = sorted[sorted.length - 1];\n  for (let i = 0; i < sorted.length - 1; i++) {\n    if (sorted[i].key <= value && sorted[i + 1].key >= value) { lower = sorted[i]; upper = sorted[i + 1]; break; }\n  }\n  if (value <= lower.key) return { ...lower };\n  if (value >= upper.key) return { ...upper };\n  const ratio = (value - lower.key) / (upper.key - lower.key);\n  return { key: value, beginner: lower.beginner + ratio * (upper.beginner - lower.beginner), novice: lower.novice + ratio * (upper.novice - lower.novice), intermediate: lower.intermediate + ratio * (upper.intermediate - lower.intermediate), advanced: lower.advanced + ratio * (upper.advanced - lower.advanced), elite: lower.elite + ratio * (upper.elite - lower.elite) };\n}\n\nasync function getAveragedStandards(std) {\n  const stats = await getPersonalStats();\n  const bw = interpolateStandard(std.bwTable, stats.weight);\n  const ag = interpolateStandard(std.ageTable, calculateAge(stats.birthdate));\n  if (bw && ag) return { beginner: (bw.beginner + ag.beginner) / 2, novice: (bw.novice + ag.novice) / 2, intermediate: (bw.intermediate + ag.intermediate) / 2, advanced: (bw.advanced + ag.advanced) / 2, elite: (bw.elite + ag.elite) / 2 };\n  return bw || ag || null;\n}\n\nfunction determineStrengthLevel(cv, std) {\n  if (!std || cv < 0) return { level: "Untrained", color: "#6a6a6a", progress: 0, nextTarget: std?.beginner || 1 };\n  const { beginner, novice, intermediate, advanced, elite } = std;\n  if (cv >= elite) return { level: "Elite", color: "#9a6a7a", progress: 100, nextTarget: null };\n  if (cv >= advanced) return { level: "Advanced", color: "#8a7a9a", progress: ((cv - advanced) / (elite - advanced)) * 100, nextTarget: elite };\n  if (cv >= intermediate) return { level: "Intermediate", color: "#6a8a9a", progress: ((cv - intermediate) / (advanced - intermediate)) * 100, nextTarget: advanced };\n  if (cv >= novice) return { level: "Novice", color: "#7a9a7d", progress: ((cv - novice) / (intermediate - novice)) * 100, nextTarget: intermediate };\n  if (cv >= beginner) return { level: "Beginner", color: "#a89860", progress: ((cv - beginner) / (novice - beginner)) * 100, nextTarget: novice };\n  return { level: "Untrained", color: "#6a6a6a", progress: beginner > 0 ? Math.max(0, (cv / beginner) * 100) : 0, nextTarget: beginner };\n}\n\nasync function calculateStrengthLevel(name, w, r, maxR) {\n  const std = await getStrengthStandard(name);\n  if (!std || !std.hasValidData) return null;\n  const avg = await getAveragedStandards(std);\n  if (!avg) return null;\n  if (std.isBodyweight) {\n    const eff = maxR !== null && maxR !== undefined ? Math.max(r, maxR) : r;\n    const res = determineStrengthLevel(eff, avg);\n    return { ...res, currentValue: eff, isBodyweight: true, unit: "reps", displayLabel: "Max Reps" };\n  } else {\n    if (w <= 0) return null;\n    const est = calculate1RM(w, r);\n    const res = determineStrengthLevel(est, avg);\n    return { ...res, currentValue: est, isBodyweight: false, unit: "kg", displayLabel: "Est. 1RM" };\n  }\n}\n\nasync function hasStrengthStandard(name) {\n  const std = await getStrengthStandard(name);\n  return std !== null && std.hasValidData;\n}\n\nasync function getExercisePR(name) {\n  const std = await getStrengthStandard(name);\n  const isBW = std?.isBodyweight || false;\n  const files = getFilesInFolder(WORKOUT_FOLDER);\n  let best = null, bestV = 0;\n  for (const f of files) {\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises) && fm.Workout === true) {\n      const ex = fm.exercises.find((e) => e.name === name);\n      if (ex?.sets) {\n        for (const set of ex.sets) {\n          if (!set.isWarmup && set.completed) {\n            if (isBW) {\n              if (set.reps > bestV) { bestV = set.reps; best = { ...set, date: f.basename, prValue: bestV, isBodyweight: true }; }\n            } else if (set.weight > 0) {\n              const est = calculate1RM(set.weight, set.reps);\n              if (est > bestV) { bestV = est; best = { ...set, date: f.basename, estimated1RM: est, prValue: est, isBodyweight: false }; }\n            }\n          }\n        }\n      }\n    }\n  }\n  return best;\n}\n\n// \u2500\u2500 Save current state to frontmatter \u2500\u2500\nasync function saveState() {\n  await setMultipleData({\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n}\n\n// \u2500\u2500 Modal System \u2500\u2500\nlet activeModal = null;\n\nfunction closeModal() {\n  if (!activeModal) return;\n  activeModal.classList.remove("visible");\n  setTimeout(() => {\n    if (activeModal?.parentNode) activeModal.parentNode.removeChild(activeModal);\n    activeModal = null;\n  }, 500);\n}\n\nfunction createModal(title, contentBuilder) {\n  if (activeModal) { activeModal.parentNode.removeChild(activeModal); activeModal = null; }\n  const modal = document.createElement("div");\n  modal.className = "otw-modal-overlay";\n  activeModal = modal;\n  const modalContent = document.createElement("div");\n  modalContent.className = "otw-modal-content";\n  modal.appendChild(modalContent);\n  addCorners(modalContent, THEME.color);\n  if (title) {\n    const t = document.createElement("h2");\n    t.textContent = title;\n    t.style.cssText = `margin:0;color:${THEME.color};font-size:14px;font-weight:500;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    modalContent.appendChild(t);\n    const d = document.createElement("div");\n    d.style.cssText = `width:60px;height:1px;background:linear-gradient(90deg,transparent,${THEME.color},transparent);margin:0 auto 12px;`;\n    modalContent.appendChild(d);\n  }\n  contentBuilder(modalContent);\n  modal.onclick = (e) => { if (e.target === modal) closeModal(); };\n  document.body.appendChild(modal);\n  requestAnimationFrame(() => modal.classList.add("visible"));\n  return modal;\n}\n\n// \u2500\u2500 Finish Workout \u2500\u2500\nasync function finishWorkout(type) {\n  await setMultipleData({\n    Workout: true,\n    "Workout-Type": type,\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n  notice("Workout logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");\n  // Re-render to show completion state\n  render();\n}\n\nfunction openFinishModal() {\n  createModal("Workout Complete", (content) => {\n    const summaryDiv = document.createElement("div");\n    summaryDiv.className = "otw-summary-complete";\n    summaryDiv.innerHTML = "<h2>WORKOUT COMPLETE</h2>";\n    content.appendChild(summaryDiv);\n\n    const feelTitle = document.createElement("h3");\n    feelTitle.textContent = "How did it feel?";\n    feelTitle.style.cssText = `margin:12px 0;color:${THEME.color};font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    content.appendChild(feelTitle);\n\n    // Discipline button\n    const discBtn = document.createElement("div");\n    discBtn.className = "otw-feel-btn";\n    discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;\n    discBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">&#x1F48E;</span><div style="flex:1;"><div style="color:${THEME.colorDiscipline};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through resistance</div></div><div style="color:#4a4030;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    discBtn.onclick = async () => { closeModal(); await finishWorkout("discipline"); };\n    content.appendChild(discBtn);\n\n    // Flow button\n    const flowBtn = document.createElement("div");\n    flowBtn.className = "otw-feel-btn";\n    flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;\n    flowBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">&#x1F30A;</span><div style="flex:1;"><div style="color:${THEME.colorFlow};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Felt natural and effortless</div></div><div style="color:#304050;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    flowBtn.onclick = async () => { closeModal(); await finishWorkout("flow"); };\n    content.appendChild(flowBtn);\n  });\n}\n\n// \u2500\u2500 Add Exercise Modal \u2500\u2500\nfunction openAddExerciseModal(muscle) {\n  createModal("Add Exercise - " + muscle, (content) => {\n    const nameInput = document.createElement("input");\n    nameInput.type = "text";\n    nameInput.placeholder = "Exercise name...";\n    nameInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;`;\n    content.appendChild(nameInput);\n\n    const warmupLabel = document.createElement("div");\n    warmupLabel.textContent = "Include warmup sets?";\n    warmupLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(warmupLabel);\n\n    let incWarmup = true;\n    const warmupRow = document.createElement("div");\n    warmupRow.style.cssText = "display:flex;gap:8px;margin-top:8px;";\n    content.appendChild(warmupRow);\n\n    const yesBtn = document.createElement("button");\n    yesBtn.textContent = "Yes (suggested)";\n    yesBtn.className = "otw-btn otw-btn-secondary";\n    yesBtn.style.cssText += `flex:1;background:rgba(154,140,122,0.2);border-color:${THEME.color};color:${THEME.color};`;\n    const noBtn = document.createElement("button");\n    noBtn.textContent = "No";\n    noBtn.className = "otw-btn otw-btn-secondary";\n    noBtn.style.flex = "1";\n    yesBtn.onclick = () => { incWarmup = true; yesBtn.style.background = "rgba(154,140,122,0.2)"; yesBtn.style.borderColor = THEME.color; noBtn.style.background = "#0f0f0f"; noBtn.style.borderColor = THEME.colorBorder; };\n    noBtn.onclick = () => { incWarmup = false; noBtn.style.background = "rgba(154,140,122,0.2)"; noBtn.style.borderColor = THEME.color; yesBtn.style.background = "#0f0f0f"; yesBtn.style.borderColor = THEME.colorBorder; };\n    warmupRow.appendChild(yesBtn);\n    warmupRow.appendChild(noBtn);\n\n    const weightLabel = document.createElement("div");\n    weightLabel.textContent = "Working weight (kg) - 0 for bodyweight";\n    weightLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(weightLabel);\n\n    const weightInput = document.createElement("input");\n    weightInput.type = "number";\n    weightInput.placeholder = "0";\n    weightInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;margin-top:8px;`;\n    content.appendChild(weightInput);\n\n    const btnRow = document.createElement("div");\n    btnRow.style.cssText = "display:flex;gap:12px;margin-top:16px;";\n    content.appendChild(btnRow);\n\n    const cancelBtn = document.createElement("button");\n    cancelBtn.textContent = "Cancel";\n    cancelBtn.className = "otw-btn otw-btn-secondary";\n    cancelBtn.style.flex = "1";\n    cancelBtn.onclick = () => closeModal();\n    btnRow.appendChild(cancelBtn);\n\n    const addBtn = document.createElement("button");\n    addBtn.textContent = "Add Exercise";\n    addBtn.className = "otw-btn otw-btn-primary";\n    addBtn.style.flex = "1";\n    addBtn.onclick = async () => {\n      const name = nameInput.value.trim();\n      if (!name) { notice("Please enter an exercise name"); return; }\n      const ww = parseFloat(weightInput.value) || 0;\n      const sets = [];\n      if (incWarmup && ww > 0) {\n        sets.push({ weight: Math.round(ww * 0.5), reps: 10, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.7), reps: 6, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.85), reps: 3, completed: false, isWarmup: true });\n      }\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      exercises.push({ name, muscle, muscleGroup: muscle, sets });\n      closeModal();\n      await saveState();\n      render();\n    };\n    btnRow.appendChild(addBtn);\n\n    setTimeout(() => nameInput.focus(), 100);\n  });\n}\n\n// \u2500\u2500 Render a single set row \u2500\u2500\nfunction renderSet(setsContainer, set, setIdx, ex, warmupRefs) {\n  const row = document.createElement("div");\n  row.className = "otw-set-row" + (set.completed ? " completed" : "");\n  setsContainer.appendChild(row);\n  const refs = { weightInput: null };\n\n  // Checkbox\n  const cb = document.createElement("div");\n  cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n  cb.textContent = set.completed ? "\\u2713" : "";\n  cb.onclick = async () => {\n    set.completed = !set.completed;\n    cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n    cb.textContent = set.completed ? "\\u2713" : "";\n    row.className = "otw-set-row" + (set.completed ? " completed" : "");\n    await saveState();\n  };\n  row.appendChild(cb);\n\n  // Middle: weight + reps\n  const mid = document.createElement("div");\n  mid.style.cssText = "display:flex;align-items:center;gap:12px;flex-wrap:wrap;";\n  row.appendChild(mid);\n\n  // Weight input\n  const wWrap = document.createElement("div");\n  wWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(wWrap);\n  const wInput = document.createElement("input");\n  wInput.type = "number";\n  wInput.value = set.weight;\n  wInput.className = "otw-input";\n  const firstW = getFirstWorkingSetIndex(ex.sets);\n  const isFirst = !set.isWarmup && setIdx === firstW;\n  wInput.onchange = async (e) => {\n    const nw = parseFloat(e.target.value) || 0;\n    set.weight = nw;\n    if (isFirst) {\n      updateWarmupWeights(ex, nw);\n      const ws = ex.sets.filter((s) => s.isWarmup);\n      warmupRefs.forEach((inp, i) => { if (ws[i]) inp.value = ws[i].weight; });\n    }\n    await saveState();\n  };\n  wWrap.appendChild(wInput);\n  refs.weightInput = wInput;\n  const kgLabel = document.createElement("span");\n  kgLabel.textContent = "kg";\n  kgLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;`;\n  wWrap.appendChild(kgLabel);\n\n  // Reps controls\n  const rWrap = document.createElement("div");\n  rWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(rWrap);\n  const minusBtn = document.createElement("button");\n  minusBtn.className = "otw-ctrl-btn";\n  minusBtn.textContent = "\\u2212";\n  minusBtn.onclick = async () => { if (set.reps > 1) { set.reps--; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); } };\n  rWrap.appendChild(minusBtn);\n  const rDisp = document.createElement("span");\n  rDisp.textContent = set.reps + "\\u00D7";\n  rDisp.style.cssText = `color:${THEME.color};font-size:14px;font-weight:600;min-width:30px;text-align:center;`;\n  rWrap.appendChild(rDisp);\n  const plusBtn = document.createElement("button");\n  plusBtn.className = "otw-ctrl-btn";\n  plusBtn.textContent = "+";\n  plusBtn.onclick = async () => { set.reps++; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); };\n  rWrap.appendChild(plusBtn);\n\n  if (set.isWarmup) {\n    const badge = document.createElement("span");\n    badge.className = "otw-warmup-badge";\n    badge.textContent = "\\u26A1 Warmup";\n    mid.appendChild(badge);\n  }\n\n  // Delete set button\n  if (ex.sets.length > 1) {\n    const delBtn = document.createElement("button");\n    delBtn.textContent = "\\u00D7";\n    delBtn.style.cssText = `width:28px;height:28px;background:transparent;border:1px solid #3a2828;color:#6a4a4a;cursor:pointer;font-size:16px;`;\n    delBtn.onclick = async () => { ex.sets.splice(setIdx, 1); await saveState(); render(); };\n    row.appendChild(delBtn);\n  } else {\n    const ph = document.createElement("div");\n    ph.style.width = "28px";\n    row.appendChild(ph);\n  }\n\n  return refs;\n}\n\n// \u2500\u2500 Render Exercise Card \u2500\u2500\nasync function renderExercise(exContainer, ex) {\n  const card = document.createElement("div");\n  card.className = "otw-card";\n  exContainer.appendChild(card);\n  addCorners(card, THEME.color, 12);\n\n  const exHeader = document.createElement("div");\n  exHeader.style.cssText = `display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid ${THEME.colorBorder};`;\n  card.appendChild(exHeader);\n\n  const leftCol = document.createElement("div");\n  leftCol.style.flex = "1";\n  exHeader.appendChild(leftCol);\n\n  const exTitle = document.createElement("h3");\n  exTitle.textContent = ex.name;\n  exTitle.style.cssText = `margin:0 0 8px 0;color:${THEME.color};font-size:16px;letter-spacing:1px;`;\n  leftCol.appendChild(exTitle);\n\n  // Strength level + PR info\n  const hasStd = await hasStrengthStandard(ex.name);\n  const pr = await getExercisePR(ex.name);\n  const workingSets = ex.sets.filter((s) => !s.isWarmup);\n  let bestW = 0, bestR = 0, maxR = 0;\n  workingSets.forEach((s) => { if (s.reps > maxR) maxR = s.reps; if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; } });\n\n  if (hasStd) {\n    let sl;\n    if (pr) { sl = pr.isBodyweight ? await calculateStrengthLevel(ex.name, 0, pr.prValue, pr.prValue) : await calculateStrengthLevel(ex.name, pr.weight, pr.reps, null); }\n    else if (bestW > 0 || maxR > 0) { sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR); }\n    if (sl) {\n      const li = STRENGTH_LEVELS[sl.level];\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText += `background:${sl.color}25;border:1px solid ${sl.color}60;color:${sl.color};`;\n      badge.textContent = (li?.icon || "\\u25CB") + " " + sl.level.toUpperCase();\n      leftCol.appendChild(badge);\n\n      const rmInfo = document.createElement("div");\n      rmInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-top:6px;`;\n      rmInfo.innerHTML = `<strong style="color:${THEME.color}">${sl.displayLabel}: ${sl.currentValue}${sl.unit}</strong>`;\n      if (sl.nextTarget) rmInfo.innerHTML += ` \\u2192 Next: ${Math.round(sl.nextTarget)}${sl.unit}`;\n      leftCol.appendChild(rmInfo);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      leftCol.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, sl.progress)}%;background:${sl.color};`;\n      pb.appendChild(fill);\n    }\n  }\n\n  if (pr) {\n    const prBox = document.createElement("div");\n    prBox.className = "otw-pr-box";\n    const prTitle = document.createElement("div");\n    prTitle.style.cssText = "font-size:11px;color:#a89860;font-weight:700;letter-spacing:1px;";\n    prTitle.textContent = pr.isBodyweight ? "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.prValue + " reps" : "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.estimated1RM + "kg (1RM)";\n    prBox.appendChild(prTitle);\n    const prDetail = document.createElement("div");\n    prDetail.style.cssText = `font-size:10px;color:${THEME.colorMuted};`;\n    prDetail.textContent = pr.isBodyweight ? "Best: " + pr.reps + " reps" : "Set: " + pr.weight + "kg \\u00D7 " + pr.reps + " reps";\n    prBox.appendChild(prDetail);\n    leftCol.appendChild(prBox);\n  }\n\n  // Delete exercise button\n  const delExBtn = document.createElement("button");\n  delExBtn.textContent = "\\uD83D\\uDDD1\\uFE0F";\n  delExBtn.style.cssText = "background:transparent;border:none;cursor:pointer;font-size:14px;opacity:0.5;";\n  delExBtn.onclick = async () => { const idx = exercises.indexOf(ex); if (idx > -1) { exercises.splice(idx, 1); await saveState(); render(); } };\n  exHeader.appendChild(delExBtn);\n\n  // Sets\n  const setsContainer = document.createElement("div");\n  setsContainer.style.cssText = "display:flex;flex-direction:column;gap:6px;";\n  card.appendChild(setsContainer);\n  const warmupRefs = [];\n  ex.sets.forEach((set, setIdx) => {\n    const refs = renderSet(setsContainer, set, setIdx, ex, warmupRefs);\n    if (set.isWarmup && refs.weightInput) warmupRefs.push(refs.weightInput);\n  });\n\n  // Add set button\n  const addSetBtn = document.createElement("button");\n  addSetBtn.textContent = "+ Add Set";\n  addSetBtn.className = "otw-btn otw-btn-dashed";\n  addSetBtn.style.cssText += "margin-top:8px;padding:8px 12px;font-size:12px;";\n  addSetBtn.onclick = async () => {\n    const last = ex.sets[ex.sets.length - 1] || { weight: 0, reps: 10 };\n    ex.sets.push({ weight: last.weight, reps: last.reps, completed: false, isWarmup: false });\n    await saveState();\n    render();\n  };\n  card.appendChild(addSetBtn);\n}\n\n// \u2500\u2500 Main Render \u2500\u2500\nasync function render() {\n  container.innerHTML = "";\n  const root = document.createElement("div");\n  root.className = "otw-container";\n  container.appendChild(root);\n\n  // If workout is already completed, show summary\n  if (isCompleted && getData("Workout-Type")) {\n    const wType = getData("Workout-Type");\n    const summaryCard = document.createElement("div");\n    summaryCard.className = "otw-card otw-card-breathe";\n    summaryCard.style.textAlign = "center";\n    summaryCard.style.padding = "32px";\n    addCorners(summaryCard, THEME.systemGreen);\n    summaryCard.innerHTML = `\n      <div style="font-size:32px;margin-bottom:12px;">${wType === "discipline" ? "\\uD83D\\uDC8E" : "\\uD83C\\uDF0A"}</div>\n      <h2 style="margin:0;color:${THEME.systemGreen};font-size:16px;letter-spacing:3px;text-transform:uppercase;">WORKOUT COMPLETE</h2>\n      <div style="color:${THEME.colorMuted};font-size:13px;margin-top:8px;font-style:italic;">${wType === "discipline" ? "Discipline Win" : "Flow State"}</div>\n      <div style="color:${THEME.colorMuted};font-size:11px;margin-top:16px;">${moment(getData("Timestamp")).format("MMM D, YYYY \\u2014 h:mm A")}</div>\n    `;\n    root.appendChild(summaryCard);\n\n    // Show exercises summary\n    if (exercises.length > 0) {\n      const exSummary = document.createElement("div");\n      exSummary.className = "otw-card";\n      addCorners(exSummary, THEME.color);\n      const exTitle = document.createElement("div");\n      exTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:12px;`;\n      exTitle.textContent = "SESSION SUMMARY";\n      exSummary.appendChild(exTitle);\n      for (const ex of exercises) {\n        const completedSets = ex.sets.filter((s) => !s.isWarmup && s.completed).length;\n        const totalSets = ex.sets.filter((s) => !s.isWarmup).length;\n        const row = document.createElement("div");\n        row.style.cssText = `display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${THEME.colorBorder};`;\n        row.innerHTML = `<span style="color:${THEME.color};font-weight:600;">${ex.name}</span><span style="color:${THEME.colorMuted};font-size:12px;">${completedSets}/${totalSets} sets</span>`;\n        exSummary.appendChild(row);\n      }\n      root.appendChild(exSummary);\n    }\n    return;\n  }\n\n  // \u2500\u2500 Active Workout UI \u2500\u2500\n  if (muscleGroups.length === 0) {\n    // No muscle groups selected \u2014 show empty state\n    const empty = document.createElement("div");\n    empty.className = "otw-card";\n    empty.style.textAlign = "center";\n    empty.style.padding = "40px 20px";\n    addCorners(empty, THEME.color);\n    empty.innerHTML = `\n      <div style="font-size:32px;margin-bottom:12px;">\\uD83C\\uDFCB\\uFE0F</div>\n      <h2 style="margin:0;color:${THEME.color};font-size:16px;letter-spacing:3px;">WORKOUT</h2>\n      <p style="color:${THEME.colorMuted};font-size:13px;margin-top:12px;font-style:italic;">This note has activity: workout but no muscle groups defined.</p>\n      <p style="color:${THEME.colorMuted};font-size:12px;margin-top:8px;">Add <code>muscleGroups</code> to the frontmatter to begin tracking.</p>\n    `;\n    root.appendChild(empty);\n    return;\n  }\n\n  const currentMuscle = muscleGroups[currentMuscleIndex] || muscleGroups[0];\n  const muscleExercises = exercises.filter((e) => e.muscle === currentMuscle || e.muscleGroup === currentMuscle);\n\n  // Header\n  const header = document.createElement("div");\n  header.className = "otw-card otw-card-breathe otw-header";\n  addCorners(header, THEME.color);\n  const title = document.createElement("h2");\n  title.className = "otw-title";\n  title.textContent = currentMuscle.toUpperCase();\n  header.appendChild(title);\n  const progressLabel = document.createElement("div");\n  progressLabel.className = "otw-progress-label";\n  progressLabel.textContent = (currentMuscleIndex + 1) + " / " + muscleGroups.length;\n  header.appendChild(progressLabel);\n  root.appendChild(header);\n\n  // Exercises\n  const exContainer = document.createElement("div");\n  exContainer.style.cssText = "display:flex;flex-direction:column;gap:16px;";\n  root.appendChild(exContainer);\n\n  if (muscleExercises.length === 0) {\n    const empty = document.createElement("div");\n    empty.style.cssText = `text-align:center;padding:40px 20px;background:#0f0f0f;border:1px dashed ${THEME.colorBorder};`;\n    empty.innerHTML = `<p style="color:${THEME.colorMuted};margin:0;">No exercises for ${currentMuscle} yet.</p>`;\n    exContainer.appendChild(empty);\n  } else {\n    for (const ex of muscleExercises) {\n      await renderExercise(exContainer, ex);\n    }\n  }\n\n  // Add exercise button\n  const addExBtn = document.createElement("button");\n  addExBtn.textContent = "+ ADD EXERCISE";\n  addExBtn.className = "otw-btn otw-btn-dashed";\n  addExBtn.style.marginTop = "16px";\n  addExBtn.onclick = () => openAddExerciseModal(currentMuscle);\n  root.appendChild(addExBtn);\n\n  // Navigation\n  const nav = document.createElement("div");\n  nav.className = "otw-nav-row";\n  root.appendChild(nav);\n\n  if (currentMuscleIndex > 0) {\n    const prevBtn = document.createElement("button");\n    prevBtn.textContent = "\\u2190 PREVIOUS";\n    prevBtn.className = "otw-btn otw-btn-secondary";\n    prevBtn.onclick = async () => { currentMuscleIndex--; await saveState(); render(); };\n    nav.appendChild(prevBtn);\n  }\n\n  if (currentMuscleIndex < muscleGroups.length - 1) {\n    const nextBtn = document.createElement("button");\n    nextBtn.textContent = "NEXT MUSCLE \\u2192";\n    nextBtn.className = "otw-btn otw-btn-primary";\n    nextBtn.onclick = async () => { currentMuscleIndex++; await saveState(); render(); };\n    nav.appendChild(nextBtn);\n  } else {\n    const finishBtn = document.createElement("button");\n    finishBtn.textContent = "\\u2713 FINISH WORKOUT";\n    finishBtn.className = "otw-btn otw-btn-finish";\n    finishBtn.onclick = () => openFinishModal();\n    nav.appendChild(finishBtn);\n  }\n}\n\n// \u2500\u2500 Boot \u2500\u2500\nreturn render();\n';

// src/templates/builtins/index.ts
var BUILTIN_TEMPLATES = {
  workout: workout_default
};

// src/templates/TemplateEngine.ts
var TemplateEngine = class {
  constructor(app, plugin) {
    /** Cache of loaded template source code (path → source) */
    this.templateCache = /* @__PURE__ */ new Map();
    this.app = app;
    this.plugin = plugin;
  }
  // --- Activity Lookup ---
  /**
   * Find the workspace template for a given activity type.
   * Looks up the activity by ID in settings and returns its workspaceTemplate ID.
   * The ID may refer to a built-in template (e.g. "workout") or a vault path.
   */
  findTemplate(activityType) {
    const activity = this.plugin.settings.activities.find(
      (a) => a.id === activityType && a.enabled && a.workspaceTemplate
    );
    if (!activity)
      return null;
    return { templateId: activity.workspaceTemplate };
  }
  // --- Template Loading ---
  /**
   * Load the template source from vault. Caches until invalidated.
   */
  async loadTemplateSource(templatePath) {
    if (this.templateCache.has(templatePath)) {
      return this.templateCache.get(templatePath);
    }
    let resolvedPath = templatePath;
    if (!resolvedPath.endsWith(".js") && !resolvedPath.endsWith(".md")) {
      resolvedPath += ".js";
    }
    const file = this.app.vault.getAbstractFileByPath(resolvedPath);
    if (!file || !(file instanceof import_obsidian5.TFile)) {
      return null;
    }
    try {
      const source = await this.app.vault.read(file);
      this.templateCache.set(templatePath, source);
      return source;
    } catch (err) {
      console.error(`Olen TemplateEngine: Failed to read template ${resolvedPath}:`, err);
      return null;
    }
  }
  /**
   * Invalidate the cache for a specific template (e.g. after edits).
   */
  invalidateCache(templatePath) {
    if (templatePath) {
      this.templateCache.delete(templatePath);
    } else {
      this.templateCache.clear();
    }
  }
  // --- Context Creation ---
  /**
   * Build the TemplateContext that gets passed to the template function.
   */
  buildContext(file, container, frontmatter) {
    const app = this.app;
    const plugin = this.plugin;
    return {
      app,
      plugin,
      file,
      container,
      // --- Data Binding ---
      frontmatter: { ...frontmatter },
      getData(key) {
        if (!key)
          return { ...frontmatter };
        return frontmatter[key];
      },
      async setData(key, value) {
        await app.fileManager.processFrontMatter(file, (fm) => {
          fm[key] = value;
        });
        frontmatter[key] = value;
      },
      async setMultipleData(data) {
        await app.fileManager.processFrontMatter(file, (fm) => {
          for (const [k, v] of Object.entries(data)) {
            fm[k] = v;
          }
        });
        for (const [k, v] of Object.entries(data)) {
          frontmatter[k] = v;
        }
      },
      // --- Vault Helpers ---
      async readFile(path) {
        const f = app.vault.getAbstractFileByPath(path);
        if (!f || !(f instanceof import_obsidian5.TFile))
          return null;
        return app.vault.read(f);
      },
      getFilesInFolder(folderPath) {
        return app.vault.getMarkdownFiles().filter(
          (f) => f.path.startsWith(folderPath.endsWith("/") ? folderPath : folderPath + "/")
        );
      },
      getFileMetadata(path) {
        const f = app.vault.getAbstractFileByPath(path);
        if (!f || !(f instanceof import_obsidian5.TFile))
          return null;
        const cache = app.metadataCache.getFileCache(f);
        return cache?.frontmatter ?? null;
      },
      // --- Utilities ---
      notice(message, timeout) {
        new import_obsidian5.Notice(message, timeout);
      },
      moment: window.moment,
      createEl(tag, attrs) {
        const el = document.createElement(tag);
        if (attrs) {
          for (const [k, v] of Object.entries(attrs)) {
            if (k === "text") {
              el.textContent = v;
            } else if (k === "html") {
              el.innerHTML = v;
            } else if (k === "cls" || k === "class") {
              el.className = v;
            } else if (k === "style") {
              el.style.cssText = v;
            } else {
              el.setAttribute(k, v);
            }
          }
        }
        return el;
      }
    };
  }
  // --- Rendering ---
  /**
   * Main render method. Resolves a template ID (built-in or vault path)
   * and renders it into a container bound to the given note's frontmatter.
   */
  async render(templateId, file, container) {
    let source = BUILTIN_TEMPLATES[templateId] ?? null;
    if (!source) {
      source = await this.loadTemplateSource(templateId);
    }
    if (!source) {
      this.renderError(
        container,
        `Template not found: ${templateId}`,
        "Check the template ID in Olen Settings \u2192 Activities \u2192 Configure. Built-in templates: workout."
      );
      return false;
    }
    const cache = this.app.metadataCache.getFileCache(file);
    const frontmatter = cache?.frontmatter ?? {};
    const ctx = this.buildContext(file, container, frontmatter);
    try {
      const fn = new Function("ctx", source);
      const result = fn(ctx);
      if (result && typeof result.then === "function") {
        await result;
      }
      return true;
    } catch (err) {
      console.error(`Olen TemplateEngine: Error executing template ${templateId}:`, err);
      this.renderError(
        container,
        `Template error: ${err.message}`,
        `In template: ${templateId}`
      );
      return false;
    }
  }
  /**
   * Render an error message inside the container.
   */
  renderError(container, title, hint) {
    container.empty();
    const errorDiv = container.createDiv({ cls: "olen-template-error" });
    errorDiv.createEl("div", { cls: "olen-template-error-title", text: title });
    errorDiv.createEl("div", { cls: "olen-template-error-hint", text: hint });
  }
};

// src/main.ts
var OlenPlugin = class extends import_obsidian6.Plugin {
  async onload() {
    this.settings = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS,
      await this.loadData()
    );
    this.settings.devConfig = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS.devConfig,
      this.settings.devConfig
    );
    this.settings.devConfig.labels = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS.devConfig.labels,
      this.settings.devConfig.labels
    );
    this.settings.categoryColors = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS.categoryColors,
      this.settings.categoryColors
    );
    this.settings.categoryXP = Object.assign(
      {},
      DEFAULT_OLEN_SETTINGS.categoryXP,
      this.settings.categoryXP
    );
    this.settings.calendar = Object.assign(
      {},
      DEFAULT_CALENDAR_SETTINGS,
      this.settings.calendar
    );
    await this.migrateSessionToWorkspace();
    this.templateEngine = new TemplateEngine(this.app, this);
    if (!this.settings.migrated) {
      await this.migrateFromTrackHabitRank();
    }
    this.registerView(
      VIEW_TYPE_OLEN,
      (leaf) => new DashboardView(leaf, this)
    );
    this.registerView(
      VIEW_TYPE_WORKSPACE,
      (leaf) => new WorkspaceView(leaf, this)
    );
    this.addRibbonIcon("compass", "Open Olen", () => {
      this.activateDashboard();
    });
    this.addCommand({
      id: "open-olen-dashboard",
      name: "Open Olen Dashboard",
      callback: () => this.activateDashboard()
    });
    this.addCommand({
      id: "refresh-olen-dashboard",
      name: "Refresh Olen Dashboard",
      callback: () => this.refreshDashboard()
    });
    this.addCommand({
      id: "add-quick-task",
      name: "Add Quick Task",
      callback: () => this.showQuickTaskDialog()
    });
    this.registerCalendarPluginSource();
    const refresh = (0, import_obsidian6.debounce)(() => {
      this.refreshDashboard();
    }, 300);
    this.registerEvent(
      this.app.metadataCache.on("changed", () => refresh())
    );
    this.registerEvent(
      this.app.vault.on("create", async (file) => {
        if (file instanceof import_obsidian6.TFile && file.extension === "md") {
          let attempts = 0;
          while (attempts < 15) {
            const cache = this.app.metadataCache.getFileCache(file);
            if (cache?.frontmatter) {
              refresh();
              return;
            }
            await sleep2(100);
            attempts++;
          }
          refresh();
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file) => {
        if (file instanceof import_obsidian6.TFile && file.extension === "md") {
          refresh();
        }
      })
    );
    this.addSettingTab(new OlenSettingTab(this.app, this));
    this.registerTemplatePostProcessor();
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof import_obsidian6.TFile && file.extension === "js") {
          this.templateEngine.invalidateCache(file.path);
        }
      })
    );
  }
  onunload() {
  }
  // --- View Management ---
  async activateDashboard() {
    const { workspace } = this.app;
    let leaf = workspace.getLeavesOfType(VIEW_TYPE_OLEN)[0];
    if (!leaf) {
      const newLeaf = workspace.getLeaf("tab");
      if (!newLeaf)
        return;
      await newLeaf.setViewState({ type: VIEW_TYPE_OLEN, active: true });
      leaf = newLeaf;
    }
    await workspace.revealLeaf(leaf);
  }
  refreshDashboard() {
    const leaves = this.app.workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    for (const leaf of leaves) {
      const view = leaf.view;
      if (view && typeof view.render === "function") {
        view.render();
      }
    }
  }
  async activateWorkspaceView() {
    const { workspace } = this.app;
    workspace.getLeavesOfType(VIEW_TYPE_WORKSPACE).forEach((leaf) => leaf.detach());
    const dashLeaves = workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    const targetLeaf = dashLeaves[0] ?? workspace.getLeaf("tab");
    if (!targetLeaf)
      return;
    await targetLeaf.setViewState({ type: VIEW_TYPE_WORKSPACE, active: true });
    await workspace.revealLeaf(targetLeaf);
  }
  activateDashboardView() {
    this.activateDashboard();
  }
  // --- Template Registry: Post-Processor ---
  registerTemplatePostProcessor() {
    const renderedFiles = /* @__PURE__ */ new WeakSet();
    this.registerMarkdownPostProcessor(async (el, ctx) => {
      const file = this.app.vault.getAbstractFileByPath(ctx.sourcePath);
      if (!file || !(file instanceof import_obsidian6.TFile))
        return;
      const cache = this.app.metadataCache.getFileCache(file);
      const activityType = cache?.frontmatter?.activity;
      if (!activityType)
        return;
      const entry = this.templateEngine.findTemplate(activityType);
      if (!entry)
        return;
      const previewSizer = el.closest(".markdown-preview-sizer") ?? el.parentElement;
      if (previewSizer && renderedFiles.has(previewSizer))
        return;
      if (previewSizer)
        renderedFiles.add(previewSizer);
      el.empty();
      el.addClass("olen-template-host");
      const container = el.createDiv({ cls: "olen-template-root" });
      await this.templateEngine.render(entry.templateId, file, container);
    });
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", async (leaf) => {
        if (!leaf)
          return;
        const view = leaf.view;
        if (!(view instanceof import_obsidian6.MarkdownView))
          return;
        const file = view.file;
        if (!file)
          return;
        await sleep2(100);
        const cache = this.app.metadataCache.getFileCache(file);
        const activityType = cache?.frontmatter?.activity;
        if (!activityType)
          return;
        const entry = this.templateEngine.findTemplate(activityType);
        if (!entry)
          return;
        const contentEl = view.containerEl.querySelector(".markdown-reading-view .markdown-preview-sizer");
        if (contentEl?.querySelector(".olen-template-root"))
          return;
        if (contentEl) {
          const container = document.createElement("div");
          container.className = "olen-template-root";
          contentEl.appendChild(container);
          await this.templateEngine.render(entry.templateId, file, container);
        }
      })
    );
  }
  // --- Calendar Plugin Integration ---
  registerCalendarPluginSource() {
    this.app.workspace.on("calendar:open", (sources) => {
      if (!Array.isArray(sources))
        return;
      sources.push({
        getDailyMetadata: (date) => {
          const dateStr = date.format?.("YYYY-MM-DD") ?? "";
          if (!dateStr)
            return {};
          let completions = 0;
          const categories = /* @__PURE__ */ new Set();
          for (const activity of this.settings.activities) {
            if (!activity.enabled)
              continue;
            const folder = activity.folder;
            const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";
            const files = this.app.vault.getMarkdownFiles();
            const file = files.find(
              (f) => (f.path === folder || f.path.startsWith(normalizedFolder)) && f.basename === dateStr
            );
            if (file) {
              const cache = this.app.metadataCache.getFileCache(file);
              if (cache?.frontmatter?.[activity.property] === true) {
                completions++;
                categories.add(activity.category);
              }
            }
          }
          if (completions === 0)
            return {};
          const dots = [];
          for (const cat of categories) {
            dots.push({
              color: this.settings.categoryColors[cat] ?? "#928d85",
              className: `olen-cal-dot-${cat}`
            });
          }
          return {
            dots,
            classes: completions >= this.settings.activities.filter((a) => a.enabled).length ? "olen-cal-complete" : ""
          };
        },
        getWeeklyMetadata: () => ({})
      });
    });
  }
  // --- Quick Task Dialog ---
  showQuickTaskDialog() {
    const modal = document.createElement("div");
    modal.className = "olen-quick-task-modal";
    modal.innerHTML = `
      <div class="olen-quick-task-backdrop"></div>
      <div class="olen-quick-task-sheet">
        <div class="olen-quick-task-title">Add Quick Task</div>
        <input type="text" class="olen-quick-task-input" placeholder="Task name" autofocus />
        <div class="olen-quick-task-row">
          <input type="time" class="olen-quick-task-time" />
          <input type="number" class="olen-quick-task-duration" placeholder="Duration (min)" min="5" max="480" value="30" />
        </div>
        <div class="olen-quick-task-actions">
          <button class="olen-quick-task-cancel">Cancel</button>
          <button class="olen-quick-task-add">Add</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const backdrop = modal.querySelector(".olen-quick-task-backdrop");
    const cancelBtn = modal.querySelector(".olen-quick-task-cancel");
    const addBtn = modal.querySelector(".olen-quick-task-add");
    const titleInput = modal.querySelector(".olen-quick-task-input");
    const timeInput = modal.querySelector(".olen-quick-task-time");
    const durationInput = modal.querySelector(".olen-quick-task-duration");
    const close = () => modal.remove();
    backdrop.addEventListener("click", close);
    cancelBtn.addEventListener("click", close);
    addBtn.addEventListener("click", async () => {
      const title = titleInput.value.trim();
      if (!title) {
        new import_obsidian6.Notice("Please enter a task name");
        return;
      }
      const now = this.settings.simulatedDate ? new Date(this.settings.simulatedDate) : /* @__PURE__ */ new Date();
      const today = now.toISOString().slice(0, 10);
      this.settings.calendar.quickTasks.push({
        id: `qt-${Date.now()}`,
        title,
        date: today,
        time: timeInput.value || void 0,
        duration: parseInt(durationInput.value) || 30,
        done: false
      });
      await this.saveSettings();
      this.refreshDashboard();
      new import_obsidian6.Notice(`\u26A1 Quick task added: ${title}`);
      close();
    });
    setTimeout(() => titleInput.focus(), 50);
  }
  // --- Settings Persistence ---
  async saveSettings() {
    await this.saveData(this.settings);
  }
  // --- Migration ---
  async migrateFromTrackHabitRank() {
    try {
      const dataPath = ".obsidian/plugins/mythological-habit-tracker/data.json";
      const exists = await this.app.vault.adapter.exists(dataPath);
      if (!exists) {
        this.settings.migrated = true;
        await this.saveSettings();
        return;
      }
      const raw = await this.app.vault.adapter.read(dataPath);
      const data = JSON.parse(raw);
      this.settings.currentTier = data.currentTier ?? 1;
      this.settings.bossMaxHP = data.bossMaxHP ?? 35;
      this.settings.bossCurrentHP = data.bossCurrentHP ?? 35;
      this.settings.consecutivePerfectWeeks = data.consecutivePerfectWeeks ?? 0;
      this.settings.inTartarus = data.inTartarus ?? false;
      this.settings.tartarusPenanceTasks = data.tartarusPenanceTasks ?? [];
      this.settings.tartarusStartDate = data.tartarusStartDate ?? null;
      this.settings.failedThresholdDays = data.failedThresholdDays ?? 0;
      if (data.templeTasks && data.templeTasks.length > 0) {
        this.settings.templeTasks = data.templeTasks;
      }
      this.settings.pendingRewards = data.pendingRewards ?? [];
      this.settings.claimedRewards = data.claimedRewards ?? [];
      this.settings.bankedRewards = data.bankedRewards ?? [];
      this.settings.systemState = data.systemState ?? "active";
      this.settings.pauseStartTime = data.pauseStartTime ?? null;
      this.settings.totalPausedTime = data.totalPausedTime ?? 0;
      this.settings.simulatedDate = data.simulatedDate ?? null;
      if (data.dashboardBgImage) {
        this.settings.heroBackground = data.dashboardBgImage;
      }
      this.settings.activities = this.migrateActivities(data);
      this.settings.migrated = true;
      await this.saveSettings();
      new import_obsidian6.Notice("Olen: Successfully migrated data from Mythological Habit Tracker");
    } catch (err) {
      console.error("Olen migration error:", err);
      this.settings.migrated = true;
      await this.saveSettings();
    }
  }
  migrateActivities(data) {
    const result = [...DEFAULT_ACTIVITIES];
    if (data.enabledActivities) {
      for (const activity of result) {
        const key = activity.property.toLowerCase();
        if (key in data.enabledActivities) {
          activity.enabled = data.enabledActivities[key] ?? true;
        }
      }
    }
    if (data.activityOverrides) {
      for (const override of data.activityOverrides) {
        const activity = result.find((a) => a.id === override.id);
        if (activity) {
          if (override.weeklyTarget !== void 0)
            activity.weeklyTarget = override.weeklyTarget;
          if (override.damagePerCompletion !== void 0)
            activity.damagePerCompletion = override.damagePerCompletion;
        }
      }
    }
    if (data.customHabits) {
      for (const habit of data.customHabits) {
        if (result.some((a) => a.id === habit.id))
          continue;
        result.push({
          id: habit.id,
          name: habit.name,
          emoji: habit.emoji ?? "\u2B50",
          category: "spirit",
          // Default custom habits to spirit
          enabled: true,
          folder: habit.folder,
          property: habit.property,
          damagePerCompletion: habit.damagePerCompletion ?? 1,
          weeklyTarget: habit.weeklyTarget ?? 3,
          trackingMode: "daily",
          hasWorkspace: false,
          priority: 5,
          neglectThreshold: 3,
          preferredTime: "anytime",
          estimatedDuration: 30
        });
      }
    }
    return result;
  }
  /**
   * One-time migration: rename legacy session fields → workspace,
   * merge workspaceFolder into folder, and move templateRegistry entries
   * into per-activity workspaceTemplate.
   */
  async migrateSessionToWorkspace() {
    const raw = this.settings;
    let changed = false;
    if (raw.sessionCompletionStates && !raw.workspaceCompletionStates) {
      raw.workspaceCompletionStates = raw.sessionCompletionStates;
      delete raw.sessionCompletionStates;
      changed = true;
    }
    if (raw.activeSession !== void 0 && raw.activeWorkspace === void 0) {
      raw.activeWorkspace = raw.activeSession;
      delete raw.activeSession;
      changed = true;
    }
    for (const activity of this.settings.activities) {
      const a = activity;
      if (a.hasSession !== void 0 && a.hasWorkspace === void 0) {
        a.hasWorkspace = a.hasSession;
        delete a.hasSession;
        changed = true;
      }
      if (a.sessionFolder !== void 0) {
        if (!a.folder)
          a.folder = a.sessionFolder;
        delete a.sessionFolder;
        changed = true;
      }
      if (a.workspaceFolder !== void 0) {
        if (!a.folder)
          a.folder = a.workspaceFolder;
        delete a.workspaceFolder;
        changed = true;
      }
    }
    if (this.settings.activeWorkspace) {
      const aw = this.settings.activeWorkspace;
      if (aw.hasSession !== void 0 && aw.hasWorkspace === void 0) {
        aw.hasWorkspace = aw.hasSession;
        delete aw.hasSession;
        changed = true;
      }
      delete aw.sessionFolder;
      delete aw.workspaceFolder;
    }
    if (raw.templateRegistry && Array.isArray(raw.templateRegistry) && raw.templateRegistry.length > 0) {
      for (const entry of raw.templateRegistry) {
        if (!entry.enabled || !entry.templatePath)
          continue;
        const activity = this.settings.activities.find((a) => a.id === entry.activityType);
        if (activity && !activity.workspaceTemplate) {
          activity.workspaceTemplate = entry.templatePath;
          changed = true;
        }
      }
      delete raw.templateRegistry;
      changed = true;
    }
    if (changed) {
      await this.saveSettings();
    }
  }
};
function sleep2(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL3ZpZXdzL1dvcmtzcGFjZVZpZXcudHMiLCAic3JjL3NldHRpbmdzL09sZW5TZXR0aW5ncy50cyIsICJzcmMvdGVtcGxhdGVzL1RlbXBsYXRlRW5naW5lLnRzIiwgInNyYy90ZW1wbGF0ZXMvYnVpbHRpbnMvd29ya291dC50cGwiLCAic3JjL3RlbXBsYXRlcy9idWlsdGlucy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBQbHVnaW4gRW50cnkgUG9pbnRcbi8vIFJlZ2lzdGVycyB2aWV3cywgY29tbWFuZHMsIHJpYmJvbiBpY29uLCBzZXR0aW5ncyBtaWdyYXRpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBQbHVnaW4sIGRlYm91bmNlLCBURmlsZSwgTm90aWNlLCBNYXJrZG93blZpZXcgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBUcmFja0hhYml0UmFua0RhdGEsIEFjdGl2aXR5Q29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9PTEVOLCBWSUVXX1RZUEVfV09SS1NQQUNFLCBERUZBVUxUX09MRU5fU0VUVElOR1MsIERFRkFVTFRfQUNUSVZJVElFUywgREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRGFzaGJvYXJkVmlldyB9IGZyb20gXCIuL3ZpZXdzL0Rhc2hib2FyZFZpZXdcIjtcbmltcG9ydCB7IFdvcmtzcGFjZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9Xb3Jrc3BhY2VWaWV3XCI7XG5pbXBvcnQgeyBPbGVuU2V0dGluZ1RhYiB9IGZyb20gXCIuL3NldHRpbmdzL09sZW5TZXR0aW5nc1wiO1xuaW1wb3J0IHsgVGVtcGxhdGVFbmdpbmUgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvVGVtcGxhdGVFbmdpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2xlblBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzITogT2xlblNldHRpbmdzO1xuICB0ZW1wbGF0ZUVuZ2luZSE6IFRlbXBsYXRlRW5naW5lO1xuXG4gIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBMb2FkIHNldHRpbmdzIHdpdGggZGVmYXVsdHNcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLFxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgKTtcblxuICAgIC8vIEVuc3VyZSBkZWVwIGRlZmF1bHRzIGZvciBuZXN0ZWQgb2JqZWN0c1xuICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmRldkNvbmZpZyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuZGV2Q29uZmlnLmxhYmVscyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVsc1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9ycyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5jYXRlZ29yeUNvbG9ycyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5jYXRlZ29yeVhQLFxuICAgICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeVhQXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXJcbiAgICApO1xuXG4gICAgLy8gTWlncmF0ZSBsZWdhY3kgZmllbGQgbmFtZXMgZnJvbSBzZXNzaW9uIFx1MjE5MiB3b3Jrc3BhY2VcbiAgICBhd2FpdCB0aGlzLm1pZ3JhdGVTZXNzaW9uVG9Xb3Jrc3BhY2UoKTtcblxuICAgIC8vIEluaXRpYWxpemUgVGVtcGxhdGUgRW5naW5lXG4gICAgdGhpcy50ZW1wbGF0ZUVuZ2luZSA9IG5ldyBUZW1wbGF0ZUVuZ2luZSh0aGlzLmFwcCwgdGhpcyk7XG5cbiAgICAvLyBNaWdyYXRlIGZyb20gVHJhY2tIYWJpdFJhbmsgb24gZmlyc3QgcnVuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLm1pZ3JhdGVkKSB7XG4gICAgICBhd2FpdCB0aGlzLm1pZ3JhdGVGcm9tVHJhY2tIYWJpdFJhbmsoKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciBtYWluIGRhc2hib2FyZCB2aWV3XG4gICAgdGhpcy5yZWdpc3RlclZpZXcoXG4gICAgICBWSUVXX1RZUEVfT0xFTixcbiAgICAgIChsZWFmKSA9PiBuZXcgRGFzaGJvYXJkVmlldyhsZWFmLCB0aGlzKVxuICAgICk7XG5cbiAgICAvLyBSZWdpc3RlciB3b3Jrc3BhY2Ugdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX1dPUktTUEFDRSxcbiAgICAgIChsZWFmKSA9PiBuZXcgV29ya3NwYWNlVmlldyhsZWFmLCB0aGlzKVxuICAgICk7XG5cbiAgICAvLyBSaWJib24gaWNvblxuICAgIHRoaXMuYWRkUmliYm9uSWNvbihcImNvbXBhc3NcIiwgXCJPcGVuIE9sZW5cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZURhc2hib2FyZCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29tbWFuZHNcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwib3Blbi1vbGVuLWRhc2hib2FyZFwiLFxuICAgICAgbmFtZTogXCJPcGVuIE9sZW4gRGFzaGJvYXJkXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5hY3RpdmF0ZURhc2hib2FyZCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInJlZnJlc2gtb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiUmVmcmVzaCBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucmVmcmVzaERhc2hib2FyZCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImFkZC1xdWljay10YXNrXCIsXG4gICAgICBuYW1lOiBcIkFkZCBRdWljayBUYXNrXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG93UXVpY2tUYXNrRGlhbG9nKCksXG4gICAgfSk7XG5cbiAgICAvLyBDYWxlbmRhciBwbHVnaW4gaW50ZWdyYXRpb24gXHUyMDE0IGluamVjdCBPbGVuIG1ldGFkYXRhIGludG8gQ2FsZW5kYXIgcGx1Z2luXG4gICAgdGhpcy5yZWdpc3RlckNhbGVuZGFyUGx1Z2luU291cmNlKCk7XG5cbiAgICAvLyBEZWJvdW5jZWQgZmlsZSB3YXRjaGVyIGZvciBtZXRhZGF0YSBjaGFuZ2VzXG4gICAgY29uc3QgcmVmcmVzaCA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaERhc2hib2FyZCgpO1xuICAgIH0sIDMwMCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uKFwiY2hhbmdlZFwiLCAoKSA9PiByZWZyZXNoKCkpXG4gICAgKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwiY3JlYXRlXCIsIGFzeW5jIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwibWRcIikge1xuICAgICAgICAgIC8vIFdhaXQgZm9yIG1ldGFkYXRhIHRvIGJlIGluZGV4ZWRcbiAgICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IDE1KSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcikge1xuICAgICAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG4gICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwicmVuYW1lXCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwibWRcIikge1xuICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gU2V0dGluZ3MgdGFiXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBPbGVuU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgLy8gLS0tIFRlbXBsYXRlIFJlZ2lzdHJ5OiBGcm9udG1hdHRlci1kcml2ZW4gcmVuZGVyaW5nIC0tLVxuICAgIHRoaXMucmVnaXN0ZXJUZW1wbGF0ZVBvc3RQcm9jZXNzb3IoKTtcblxuICAgIC8vIEludmFsaWRhdGUgdGVtcGxhdGUgY2FjaGUgd2hlbiB0ZW1wbGF0ZSAuanMgZmlsZXMgYXJlIG1vZGlmaWVkXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oXCJtb2RpZnlcIiwgKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiBmaWxlLmV4dGVuc2lvbiA9PT0gXCJqc1wiKSB7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZUVuZ2luZS5pbnZhbGlkYXRlQ2FjaGUoZmlsZS5wYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb251bmxvYWQoKTogdm9pZCB7XG4gICAgLy8gQ2xlYW51cCBoYW5kbGVkIGJ5IERhc2hib2FyZFZpZXcub25DbG9zZSgpXG4gIH1cblxuICAvLyAtLS0gVmlldyBNYW5hZ2VtZW50IC0tLVxuXG4gIGFzeW5jIGFjdGl2YXRlRGFzaGJvYXJkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB0aGlzLmFwcDtcbiAgICBsZXQgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX09MRU4pWzBdO1xuXG4gICAgaWYgKCFsZWFmKSB7XG4gICAgICBjb25zdCBuZXdMZWFmID0gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgICBpZiAoIW5ld0xlYWYpIHJldHVybjtcbiAgICAgIGF3YWl0IG5ld0xlYWYuc2V0Vmlld1N0YXRlKHsgdHlwZTogVklFV19UWVBFX09MRU4sIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgIGxlYWYgPSBuZXdMZWFmO1xuICAgIH1cblxuICAgIGF3YWl0IHdvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpO1xuICB9XG5cbiAgcmVmcmVzaERhc2hib2FyZCgpOiB2b2lkIHtcbiAgICBjb25zdCBsZWF2ZXMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKTtcbiAgICBmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG4gICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3IGFzIHVua25vd24gYXMgRGFzaGJvYXJkVmlldztcbiAgICAgIGlmICh2aWV3ICYmIHR5cGVvZiB2aWV3LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYWN0aXZhdGVXb3Jrc3BhY2VWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB0aGlzLmFwcDtcblxuICAgIC8vIENsb3NlIGV4aXN0aW5nIHdvcmtzcGFjZSB2aWV3c1xuICAgIHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX1dPUktTUEFDRSkuZm9yRWFjaCgobGVhZikgPT4gbGVhZi5kZXRhY2goKSk7XG5cbiAgICAvLyBPcGVuIHdvcmtzcGFjZSBpbiB0aGUgc2FtZSB0YWIgYXMgdGhlIGRhc2hib2FyZCBpZiBwb3NzaWJsZVxuICAgIGNvbnN0IGRhc2hMZWF2ZXMgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKTtcbiAgICBjb25zdCB0YXJnZXRMZWFmID0gZGFzaExlYXZlc1swXSA/PyB3b3Jrc3BhY2UuZ2V0TGVhZihcInRhYlwiKTtcbiAgICBpZiAoIXRhcmdldExlYWYpIHJldHVybjtcblxuICAgIGF3YWl0IHRhcmdldExlYWYuc2V0Vmlld1N0YXRlKHsgdHlwZTogVklFV19UWVBFX1dPUktTUEFDRSwgYWN0aXZlOiB0cnVlIH0pO1xuICAgIGF3YWl0IHdvcmtzcGFjZS5yZXZlYWxMZWFmKHRhcmdldExlYWYpO1xuICB9XG5cbiAgYWN0aXZhdGVEYXNoYm9hcmRWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogUG9zdC1Qcm9jZXNzb3IgLS0tXG5cbiAgcHJpdmF0ZSByZWdpc3RlclRlbXBsYXRlUG9zdFByb2Nlc3NvcigpOiB2b2lkIHtcbiAgICAvLyBUcmFjayB3aGljaCBmaWxlcyB3ZSd2ZSBhbHJlYWR5IHJlbmRlcmVkIHRlbXBsYXRlcyBmb3IgaW4gdGhlIGN1cnJlbnRcbiAgICAvLyB2aWV3IGN5Y2xlLCB0byBhdm9pZCBkdXBsaWNhdGUgcmVuZGVyaW5nIGFjcm9zcyBtdWx0aXBsZSBzZWN0aW9ucy5cbiAgICBjb25zdCByZW5kZXJlZEZpbGVzID0gbmV3IFdlYWtTZXQ8SFRNTEVsZW1lbnQ+KCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyTWFya2Rvd25Qb3N0UHJvY2Vzc29yKGFzeW5jIChlbCwgY3R4KSA9PiB7XG4gICAgICAvLyBGaW5kIHRoZSBmaWxlIGJlaW5nIHJlbmRlcmVkXG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN0eC5zb3VyY2VQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgLy8gQ2hlY2sgZnJvbnRtYXR0ZXIgZm9yIGFuIFwiYWN0aXZpdHlcIiBmaWVsZFxuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGNvbnN0IGFjdGl2aXR5VHlwZSA9IGNhY2hlPy5mcm9udG1hdHRlcj8uYWN0aXZpdHkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKCFhY3Rpdml0eVR5cGUpIHJldHVybjtcblxuICAgICAgLy8gTG9vayB1cCB0ZW1wbGF0ZSBpbiB0aGUgcmVnaXN0cnlcbiAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy50ZW1wbGF0ZUVuZ2luZS5maW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlKTtcbiAgICAgIGlmICghZW50cnkpIHJldHVybjtcblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIHJlbmRlcmluZzogY2hlY2sgdGhlIHBhcmVudCBwcmV2aWV3IGNvbnRhaW5lclxuICAgICAgY29uc3QgcHJldmlld1NpemVyID0gZWwuY2xvc2VzdChcIi5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpID8/IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAocHJldmlld1NpemVyICYmIHJlbmRlcmVkRmlsZXMuaGFzKHByZXZpZXdTaXplciBhcyBIVE1MRWxlbWVudCkpIHJldHVybjtcbiAgICAgIGlmIChwcmV2aWV3U2l6ZXIpIHJlbmRlcmVkRmlsZXMuYWRkKHByZXZpZXdTaXplciBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgIC8vIENsZWFyIGRlZmF1bHQgcmVuZGVyZWQgY29udGVudCBhbmQgaW5qZWN0IHRlbXBsYXRlXG4gICAgICBlbC5lbXB0eSgpO1xuICAgICAgZWwuYWRkQ2xhc3MoXCJvbGVuLXRlbXBsYXRlLWhvc3RcIik7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsYXRlLXJvb3RcIiB9KTtcblxuICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVJZCwgZmlsZSwgY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIC8vIEFsc28gaGFuZGxlIGZpbGUtb3BlbiBmb3Igbm90ZXMgd2l0aCBvbmx5IGZyb250bWF0dGVyIChubyBib2R5IHNlY3Rpb25zKVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImFjdGl2ZS1sZWFmLWNoYW5nZVwiLCBhc3luYyAobGVhZikgPT4ge1xuICAgICAgICBpZiAoIWxlYWYpIHJldHVybjtcbiAgICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldztcbiAgICAgICAgaWYgKCEodmlldyBpbnN0YW5jZW9mIE1hcmtkb3duVmlldykpIHJldHVybjtcblxuICAgICAgICBjb25zdCBmaWxlID0gdmlldy5maWxlO1xuICAgICAgICBpZiAoIWZpbGUpIHJldHVybjtcblxuICAgICAgICAvLyBTbWFsbCBkZWxheSB0byBsZXQgbWV0YWRhdGEgY2FjaGUgcG9wdWxhdGVcbiAgICAgICAgYXdhaXQgc2xlZXAoMTAwKTtcblxuICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICBjb25zdCBhY3Rpdml0eVR5cGUgPSBjYWNoZT8uZnJvbnRtYXR0ZXI/LmFjdGl2aXR5IGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFhY3Rpdml0eVR5cGUpIHJldHVybjtcblxuICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMudGVtcGxhdGVFbmdpbmUuZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZSk7XG4gICAgICAgIGlmICghZW50cnkpIHJldHVybjtcblxuICAgICAgICAvLyBDaGVjayBpZiBhIHRlbXBsYXRlIGhhcyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQgYnkgdGhlIHBvc3QtcHJvY2Vzc29yXG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHZpZXcuY29udGFpbmVyRWwucXVlcnlTZWxlY3RvcihcIi5tYXJrZG93bi1yZWFkaW5nLXZpZXcgLm1hcmtkb3duLXByZXZpZXctc2l6ZXJcIik7XG4gICAgICAgIGlmIChjb250ZW50RWw/LnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi10ZW1wbGF0ZS1yb290XCIpKSByZXR1cm47XG5cbiAgICAgICAgLy8gSWYgaW4gcmVhZGluZyBtb2RlIGJ1dCBubyB0ZW1wbGF0ZSB3YXMgaW5qZWN0ZWQgKGVtcHR5IGJvZHkgbm90ZSksXG4gICAgICAgIC8vIGluamVjdCBpbnRvIHRoZSBwcmV2aWV3IGNvbnRlbnRcbiAgICAgICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwib2xlbi10ZW1wbGF0ZS1yb290XCI7XG4gICAgICAgICAgY29udGVudEVsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICBhd2FpdCB0aGlzLnRlbXBsYXRlRW5naW5lLnJlbmRlcihlbnRyeS50ZW1wbGF0ZUlkLCBmaWxlLCBjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgUGx1Z2luIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpOiB2b2lkIHtcbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSBDYWxlbmRhciBwbHVnaW4ncyBcImNhbGVuZGFyOm9wZW5cIiBldmVudFxuICAgIC8vIGFuZCBpbmplY3QgT2xlbidzIGFjdGl2aXR5IGNvbXBsZXRpb24gZGF0YSBhcyBjb2xvcmVkIGRvdHNcbiAgICAodGhpcy5hcHAud29ya3NwYWNlIGFzIGFueSkub24oXCJjYWxlbmRhcjpvcGVuXCIsIChzb3VyY2VzOiBhbnlbXSkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZXMpKSByZXR1cm47XG5cbiAgICAgIHNvdXJjZXMucHVzaCh7XG4gICAgICAgIGdldERhaWx5TWV0YWRhdGE6IChkYXRlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlU3RyID0gZGF0ZS5mb3JtYXQ/LihcIllZWVktTU0tRERcIikgPz8gXCJcIjtcbiAgICAgICAgICBpZiAoIWRhdGVTdHIpIHJldHVybiB7fTtcblxuICAgICAgICAgIC8vIENvdW50IGNvbXBsZXRpb25zIGZvciB0aGlzIGRhdGVcbiAgICAgICAgICBsZXQgY29tcGxldGlvbnMgPSAwO1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcykge1xuICAgICAgICAgICAgaWYgKCFhY3Rpdml0eS5lbmFibGVkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlcy5maW5kKFxuICAgICAgICAgICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcj8uW2FjdGl2aXR5LnByb3BlcnR5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zKys7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoYWN0aXZpdHkuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbXBsZXRpb25zID09PSAwKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBSZXR1cm4gZG90cyBjb2xvcmVkIGJ5IGRvbWluYW50IGNhdGVnb3J5XG4gICAgICAgICAgY29uc3QgZG90cyA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIGRvdHMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdCBhcyBrZXlvZiB0eXBlb2YgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc10gPz8gXCIjOTI4ZDg1XCIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogYG9sZW4tY2FsLWRvdC0ke2NhdH1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvdHMsXG4gICAgICAgICAgICBjbGFzc2VzOiBjb21wbGV0aW9ucyA+PSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQpLmxlbmd0aFxuICAgICAgICAgICAgICA/IFwib2xlbi1jYWwtY29tcGxldGVcIlxuICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRXZWVrbHlNZXRhZGF0YTogKCkgPT4gKHt9KSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIFF1aWNrIFRhc2sgRGlhbG9nIC0tLVxuXG4gIHByaXZhdGUgc2hvd1F1aWNrVGFza0RpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gXCJvbGVuLXF1aWNrLXRhc2stbW9kYWxcIjtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLWJhY2tkcm9wXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXNoZWV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stdGl0bGVcIj5BZGQgUXVpY2sgVGFzazwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stcm93XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stdGltZVwiIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1kdXJhdGlvblwiIHBsYWNlaG9sZGVyPVwiRHVyYXRpb24gKG1pbilcIiBtaW49XCI1XCIgbWF4PVwiNDgwXCIgdmFsdWU9XCIzMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stYWRkXCI+QWRkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYWRkQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYWRkXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLXRpbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBkdXJhdGlvbklucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gbW9kYWwucmVtb3ZlKCk7XG5cbiAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIGVudGVyIGEgdGFzayBuYW1lXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdyA9IHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgICA/IG5ldyBEYXRlKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBxdC0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRhdGU6IHRvZGF5LFxuICAgICAgICB0aW1lOiB0aW1lSW5wdXQudmFsdWUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VJbnQoZHVyYXRpb25JbnB1dC52YWx1ZSkgfHwgMzAsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICAgIG5ldyBOb3RpY2UoYFxcdTI2QTEgUXVpY2sgdGFzayBhZGRlZDogJHt0aXRsZX1gKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBGb2N1cyB0aGUgaW5wdXRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRpdGxlSW5wdXQuZm9jdXMoKSwgNTApO1xuICB9XG5cbiAgLy8gLS0tIFNldHRpbmdzIFBlcnNpc3RlbmNlIC0tLVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gLS0tIE1pZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGFzeW5jIG1pZ3JhdGVGcm9tVHJhY2tIYWJpdFJhbmsoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFQYXRoID0gXCIub2JzaWRpYW4vcGx1Z2lucy9teXRob2xvZ2ljYWwtaGFiaXQtdHJhY2tlci9kYXRhLmpzb25cIjtcbiAgICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIuZXhpc3RzKGRhdGFQYXRoKTtcblxuICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5taWdyYXRlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKGRhdGFQYXRoKTtcbiAgICAgIGNvbnN0IGRhdGE6IFRyYWNrSGFiaXRSYW5rRGF0YSA9IEpTT04ucGFyc2UocmF3KTtcblxuICAgICAgLy8gTWlncmF0ZSBib3NzIHN0YXRlXG4gICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyID0gZGF0YS5jdXJyZW50VGllciA/PyAxO1xuICAgICAgdGhpcy5zZXR0aW5ncy5ib3NzTWF4SFAgPSBkYXRhLmJvc3NNYXhIUCA/PyAzNTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IGRhdGEuYm9zc0N1cnJlbnRIUCA/PyAzNTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuY29uc2VjdXRpdmVQZXJmZWN0V2Vla3MgPSBkYXRhLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLmluVGFydGFydXMgPSBkYXRhLmluVGFydGFydXMgPz8gZmFsc2U7XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzUGVuYW5jZVRhc2tzID0gZGF0YS50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA/PyBbXTtcbiAgICAgIHRoaXMuc2V0dGluZ3MudGFydGFydXNTdGFydERhdGUgPSBkYXRhLnRhcnRhcnVzU3RhcnREYXRlID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLmZhaWxlZFRocmVzaG9sZERheXMgPSBkYXRhLmZhaWxlZFRocmVzaG9sZERheXMgPz8gMDtcblxuICAgICAgLy8gTWlncmF0ZSB0ZW1wbGUgdGFza3NcbiAgICAgIGlmIChkYXRhLnRlbXBsZVRhc2tzICYmIGRhdGEudGVtcGxlVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRlbXBsZVRhc2tzID0gZGF0YS50ZW1wbGVUYXNrcztcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSByZXdhcmRzXG4gICAgICB0aGlzLnNldHRpbmdzLnBlbmRpbmdSZXdhcmRzID0gZGF0YS5wZW5kaW5nUmV3YXJkcyA/PyBbXTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2xhaW1lZFJld2FyZHMgPSAoZGF0YS5jbGFpbWVkUmV3YXJkcyA/PyBbXSkgYXMgYW55O1xuICAgICAgdGhpcy5zZXR0aW5ncy5iYW5rZWRSZXdhcmRzID0gZGF0YS5iYW5rZWRSZXdhcmRzID8/IFtdO1xuXG4gICAgICAvLyBNaWdyYXRlIHN5c3RlbSBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9IChkYXRhLnN5c3RlbVN0YXRlIGFzIFwiYWN0aXZlXCIgfCBcInBhdXNlZFwiKSA/PyBcImFjdGl2ZVwiO1xuICAgICAgdGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IGRhdGEucGF1c2VTdGFydFRpbWUgPz8gbnVsbDtcbiAgICAgIHRoaXMuc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lID0gZGF0YS50b3RhbFBhdXNlZFRpbWUgPz8gMDtcbiAgICAgIHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA9IGRhdGEuc2ltdWxhdGVkRGF0ZSA/PyBudWxsO1xuXG4gICAgICAvLyBNaWdyYXRlIGhlcm8gYmFja2dyb3VuZFxuICAgICAgaWYgKGRhdGEuZGFzaGJvYXJkQmdJbWFnZSkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kID0gZGF0YS5kYXNoYm9hcmRCZ0ltYWdlO1xuICAgICAgfVxuXG4gICAgICAvLyBNaWdyYXRlIGFjdGl2aXRpZXMgZnJvbSBlbmFibGVkQWN0aXZpdGllcyArIGN1c3RvbUhhYml0c1xuICAgICAgdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzID0gdGhpcy5taWdyYXRlQWN0aXZpdGllcyhkYXRhKTtcblxuICAgICAgdGhpcy5zZXR0aW5ncy5taWdyYXRlZCA9IHRydWU7XG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgICBuZXcgTm90aWNlKFwiT2xlbjogU3VjY2Vzc2Z1bGx5IG1pZ3JhdGVkIGRhdGEgZnJvbSBNeXRob2xvZ2ljYWwgSGFiaXQgVHJhY2tlclwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJPbGVuIG1pZ3JhdGlvbiBlcnJvcjpcIiwgZXJyKTtcbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1pZ3JhdGVBY3Rpdml0aWVzKGRhdGE6IFRyYWNrSGFiaXRSYW5rRGF0YSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IHJlc3VsdDogQWN0aXZpdHlDb25maWdbXSA9IFsuLi5ERUZBVUxUX0FDVElWSVRJRVNdO1xuXG4gICAgLy8gQXBwbHkgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZVxuICAgIGlmIChkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBrZXkgPSBhY3Rpdml0eS5wcm9wZXJ0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoa2V5IGluIGRhdGEuZW5hYmxlZEFjdGl2aXRpZXMpIHtcbiAgICAgICAgICBhY3Rpdml0eS5lbmFibGVkID0gZGF0YS5lbmFibGVkQWN0aXZpdGllc1trZXldID8/IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBvdmVycmlkZXNcbiAgICBpZiAoZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgZm9yIChjb25zdCBvdmVycmlkZSBvZiBkYXRhLmFjdGl2aXR5T3ZlcnJpZGVzKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gcmVzdWx0LmZpbmQoKGEpID0+IGEuaWQgPT09IG92ZXJyaWRlLmlkKTtcbiAgICAgICAgaWYgKGFjdGl2aXR5KSB7XG4gICAgICAgICAgaWYgKG92ZXJyaWRlLndlZWtseVRhcmdldCAhPT0gdW5kZWZpbmVkKSBhY3Rpdml0eS53ZWVrbHlUYXJnZXQgPSBvdmVycmlkZS53ZWVrbHlUYXJnZXQ7XG4gICAgICAgICAgaWYgKG92ZXJyaWRlLmRhbWFnZVBlckNvbXBsZXRpb24gIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvbiA9IG92ZXJyaWRlLmRhbWFnZVBlckNvbXBsZXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgY3VzdG9tIGhhYml0c1xuICAgIGlmIChkYXRhLmN1c3RvbUhhYml0cykge1xuICAgICAgZm9yIChjb25zdCBoYWJpdCBvZiBkYXRhLmN1c3RvbUhhYml0cykge1xuICAgICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzXG4gICAgICAgIGlmIChyZXN1bHQuc29tZSgoYSkgPT4gYS5pZCA9PT0gaGFiaXQuaWQpKSBjb250aW51ZTtcblxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgaWQ6IGhhYml0LmlkLFxuICAgICAgICAgIG5hbWU6IGhhYml0Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGhhYml0LmVtb2ppID8/IFwiXFx1MkI1MFwiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLCAvLyBEZWZhdWx0IGN1c3RvbSBoYWJpdHMgdG8gc3Bpcml0XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBmb2xkZXI6IGhhYml0LmZvbGRlcixcbiAgICAgICAgICBwcm9wZXJ0eTogaGFiaXQucHJvcGVydHksXG4gICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogaGFiaXQuZGFtYWdlUGVyQ29tcGxldGlvbiA/PyAxLFxuICAgICAgICAgIHdlZWtseVRhcmdldDogaGFiaXQud2Vla2x5VGFyZ2V0ID8/IDMsXG4gICAgICAgICAgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgICAgICAgaGFzV29ya3NwYWNlOiBmYWxzZSxcbiAgICAgICAgICBwcmlvcml0eTogNSxcbiAgICAgICAgICBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgICAgICAgIHByZWZlcnJlZFRpbWU6IFwiYW55dGltZVwiLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmUtdGltZSBtaWdyYXRpb246IHJlbmFtZSBsZWdhY3kgc2Vzc2lvbiBmaWVsZHMgXHUyMTkyIHdvcmtzcGFjZSxcbiAgICogbWVyZ2Ugd29ya3NwYWNlRm9sZGVyIGludG8gZm9sZGVyLCBhbmQgbW92ZSB0ZW1wbGF0ZVJlZ2lzdHJ5IGVudHJpZXNcbiAgICogaW50byBwZXItYWN0aXZpdHkgd29ya3NwYWNlVGVtcGxhdGUuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIG1pZ3JhdGVTZXNzaW9uVG9Xb3Jrc3BhY2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmF3ID0gdGhpcy5zZXR0aW5ncyBhcyBhbnk7XG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIC8vIE1pZ3JhdGUgdG9wLWxldmVsIHNldHRpbmdzIGZpZWxkc1xuICAgIGlmIChyYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXMgJiYgIXJhdy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzKSB7XG4gICAgICByYXcud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcyA9IHJhdy5zZXNzaW9uQ29tcGxldGlvblN0YXRlcztcbiAgICAgIGRlbGV0ZSByYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXM7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJhdy5hY3RpdmVTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgcmF3LmFjdGl2ZVdvcmtzcGFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByYXcuYWN0aXZlV29ya3NwYWNlID0gcmF3LmFjdGl2ZVNlc3Npb247XG4gICAgICBkZWxldGUgcmF3LmFjdGl2ZVNlc3Npb247XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBNaWdyYXRlIHBlci1hY3Rpdml0eSBmaWVsZHNcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcykge1xuICAgICAgY29uc3QgYSA9IGFjdGl2aXR5IGFzIGFueTtcbiAgICAgIGlmIChhLmhhc1Nlc3Npb24gIT09IHVuZGVmaW5lZCAmJiBhLmhhc1dvcmtzcGFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGEuaGFzV29ya3NwYWNlID0gYS5oYXNTZXNzaW9uO1xuICAgICAgICBkZWxldGUgYS5oYXNTZXNzaW9uO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIE1lcmdlIHNlc3Npb25Gb2xkZXIgLyB3b3Jrc3BhY2VGb2xkZXIgaW50byBmb2xkZXJcbiAgICAgIGlmIChhLnNlc3Npb25Gb2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIWEuZm9sZGVyKSBhLmZvbGRlciA9IGEuc2Vzc2lvbkZvbGRlcjtcbiAgICAgICAgZGVsZXRlIGEuc2Vzc2lvbkZvbGRlcjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoYS53b3Jrc3BhY2VGb2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIWEuZm9sZGVyKSBhLmZvbGRlciA9IGEud29ya3NwYWNlRm9sZGVyO1xuICAgICAgICBkZWxldGUgYS53b3Jrc3BhY2VGb2xkZXI7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1pZ3JhdGUgYWN0aXZlV29ya3NwYWNlIGlubmVyIGZpZWxkc1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSkge1xuICAgICAgY29uc3QgYXcgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSBhcyBhbnk7XG4gICAgICBpZiAoYXcuaGFzU2Vzc2lvbiAhPT0gdW5kZWZpbmVkICYmIGF3Lmhhc1dvcmtzcGFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGF3Lmhhc1dvcmtzcGFjZSA9IGF3Lmhhc1Nlc3Npb247XG4gICAgICAgIGRlbGV0ZSBhdy5oYXNTZXNzaW9uO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIENsZWFuIHVwIGxlZ2FjeSBmb2xkZXIgZmllbGRzIGZyb20gYWN0aXZlV29ya3NwYWNlXG4gICAgICBkZWxldGUgYXcuc2Vzc2lvbkZvbGRlcjtcbiAgICAgIGRlbGV0ZSBhdy53b3Jrc3BhY2VGb2xkZXI7XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSB0ZW1wbGF0ZVJlZ2lzdHJ5IFx1MjE5MiBwZXItYWN0aXZpdHkgd29ya3NwYWNlVGVtcGxhdGVcbiAgICBpZiAocmF3LnRlbXBsYXRlUmVnaXN0cnkgJiYgQXJyYXkuaXNBcnJheShyYXcudGVtcGxhdGVSZWdpc3RyeSkgJiYgcmF3LnRlbXBsYXRlUmVnaXN0cnkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiByYXcudGVtcGxhdGVSZWdpc3RyeSkge1xuICAgICAgICBpZiAoIWVudHJ5LmVuYWJsZWQgfHwgIWVudHJ5LnRlbXBsYXRlUGF0aCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGE6IGFueSkgPT4gYS5pZCA9PT0gZW50cnkuYWN0aXZpdHlUeXBlKTtcbiAgICAgICAgaWYgKGFjdGl2aXR5ICYmICFhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSkge1xuICAgICAgICAgIGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlID0gZW50cnkudGVtcGxhdGVQYXRoO1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgcmF3LnRlbXBsYXRlUmVnaXN0cnk7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXRpbGl0eVxuZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IENvbnN0YW50cyAmIERlZmF1bHRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUge1xuICBCb3NzRGVmaW5pdGlvbixcbiAgQWN0aXZpdHlDb25maWcsXG4gIE9sZW5TZXR0aW5ncyxcbiAgRGV2Q29uZmlnLFxuICBFbHlzaWFuVGhlbWUsXG4gIFdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZSxcbiAgQ2FsZW5kYXJTZXR0aW5ncyxcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLy8gLS0tIFZpZXcgVHlwZSAtLS1cblxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9PTEVOID0gXCJvbGVuLWRhc2hib2FyZC12aWV3XCI7XG5leHBvcnQgY29uc3QgVklFV19UWVBFX1dPUktTUEFDRSA9IFwib2xlbi13b3Jrc3BhY2Utdmlld1wiO1xuXG4vLyAtLS0gQm9zcyBEZWZpbml0aW9ucyAoMTMgdGllcnMpIC0tLVxuXG5leHBvcnQgY29uc3QgQk9TU0VTOiBCb3NzRGVmaW5pdGlvbltdID0gW1xuICB7IHRpZXI6IDEsIG5hbWU6IFwiU2hhZG93IG9mIEFwYXRoeVwiLCByYW5rOiBcIkRvb21zY3JvbGxlclwiLCBkZXNjcmlwdGlvbjogXCJUaGUgd2VpZ2h0IG9mIGluZXJ0aWEgdGhhdCBrZWVwcyB5b3Ugc2Nyb2xsaW5nIGluc3RlYWQgb2Ygc3RhcnRpbmdcIiwgbG9yZTogXCJCb3JuIGZyb20gZm9yZ290dGVuIHByb21pc2VzIGFuZCB1bm9wZW5lZCBneW0gYmFncywgdGhlIFNoYWRvdyBmZWVkcyBvbiBwb3RlbnRpYWwgdW5yZWFsaXplZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS4xXCIgfSxcbiAgeyB0aWVyOiAyLCBuYW1lOiBcIlNpcmVuJ3MgQ2FsbFwiLCByYW5rOiBcIkFybWNoYWlyIEdlbmVyYWxcIiwgZGVzY3JpcHRpb246IFwiRGlzdHJhY3Rpb24ncyBzd2VldCBzb25nIHRoYXQgcHVsbHMgZm9jdXMgZnJvbSBjb21taXR0ZWQgd29ya1wiLCBsb3JlOiBcIlNoZSBzaW5ncyBvZiBlYXNpZXIgcGF0aHMsIG9mIGp1c3Qgb25lIG1vcmUgdmlkZW8sIG9mIHN0YXJ0aW5nIHRvbW9ycm93IGluc3RlYWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuMlwiIH0sXG4gIHsgdGllcjogMywgbmFtZTogXCJIeWRyYSBvZiBIYWJpdHNcIiwgcmFuazogXCJBcHByZW50aWNlXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBjb21wbGV4aXR5IG9mIG1hbmFnaW5nIG11bHRpcGxlIHJvdXRpbmVzIHNpbXVsdGFuZW91c2x5XCIsIGxvcmU6IFwiQ3V0IG9uZSBoZWFkIGFuZCB0d28gZ3JvdyBiYWNrLiBFYWNoIGhhYml0IGRlbWFuZHMgaXRzIG93biBhdHRlbnRpb24uXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuM1wiIH0sXG4gIHsgdGllcjogNCwgbmFtZTogXCJNaW5vdGF1cidzIE1hemVcIiwgcmFuazogXCJDaXRpemVuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBjb25mdXNpb24gYW5kIHJvdXRpbmUgdGhhdCB0cmFwcyBldmVuIGRlZGljYXRlZCBwcmFjdGl0aW9uZXJzXCIsIGxvcmU6IFwiTG9zdCBpbiBjb3JyaWRvcnMgb2YgaGFiaXQsIHRoZSBwYXRoIGZvcndhcmQgaXMgbmV2ZXIgY2xlYXIuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuN1wiIH0sXG4gIHsgdGllcjogNSwgbmFtZTogXCJNZWR1c2EncyBHYXplXCIsIHJhbms6IFwiU2Nob2xhclwiLCBkZXNjcmlwdGlvbjogXCJUaGUgcGFyYWx5c2lzIHRoYXQgY29tZXMgZnJvbSBvdmVydGhpbmtpbmcgb3IgZmVhciBvZiBmYWlsdXJlXCIsIGxvcmU6IFwiT25lIGdsYW5jZSBhbmQgeW91IGFyZSBmcm96ZW4sIHVuYWJsZSB0byBhY3QsIHVuYWJsZSB0byBtb3ZlLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjlcIiB9LFxuICB7IHRpZXI6IDYsIG5hbWU6IFwiTmVtZWFuIExpb25cIiwgcmFuazogXCJTYW11cmFpXCIsIGRlc2NyaXB0aW9uOiBcIlNlZW1pbmdseSBpbnZ1bG5lcmFibGUgb2JzdGFjbGVzIHRoYXQgcmVxdWlyZSBwZXJzaXN0ZW50IGVmZm9ydFwiLCBsb3JlOiBcIkl0cyBoaWRlIGNhbm5vdCBiZSBwaWVyY2VkIGJ5IG9yZGluYXJ5IG1lYW5zLiBPbmx5IGRpc2NpcGxpbmUgY3V0cyB0aHJvdWdoLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAyLjFcIiB9LFxuICB7IHRpZXI6IDcsIG5hbWU6IFwiQ2hpbWVyYVwiLCByYW5rOiBcIlRlbXBsYXJcIiwgZGVzY3JpcHRpb246IFwiTXVsdGktaGVhZGVkIGJlYXN0IHJlcXVpcmluZyBiYWxhbmNlZCBhdHRlbnRpb24gYWNyb3NzIGFsbCBkb21haW5zXCIsIGxvcmU6IFwiTGlvbiwgZ29hdCwgYW5kIHNlcnBlbnQgXHUyMDE0IGVhY2ggaGVhZCBkZW1hbmRzIG1hc3Rlcnkgb2YgYSBkaWZmZXJlbnQgYXJ0LlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAyLjNcIiB9LFxuICB7IHRpZXI6IDgsIG5hbWU6IFwiQ2VyYmVydXNcIiwgcmFuazogXCJTdG9pY1wiLCBkZXNjcmlwdGlvbjogXCJHdWFyZGlhbiBvZiB0cmFuc2Zvcm1hdGlvbiB0ZXN0aW5nIGlmIGhhYml0cyBoYXZlIGJlY29tZSBpZGVudGl0eVwiLCBsb3JlOiBcIlRocmVlIGhlYWRzLCB0aHJlZSB0ZXN0cy4gUGFzdCB0aGUgZ2F0ZSBsaWVzIHRyYW5zZm9ybWF0aW9uLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAyLjVcIiB9LFxuICB7IHRpZXI6IDksIG5hbWU6IFwiU2N5bGxhICYgQ2hhcnliZGlzXCIsIHJhbms6IFwiT2x5bXBpYW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGltcG9zc2libGUgY2hvaWNlIGJldHdlZW4gY29tcGV0aW5nIHByaW9yaXRpZXNcIiwgbG9yZTogXCJCZXR3ZWVuIHRoZSByb2NrIGFuZCB0aGUgd2hpcmxwb29sLCBib3RoIG11c3Qgc29tZWhvdyBiZSBob25vcmVkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAyLjdcIiB9LFxuICB7IHRpZXI6IDEwLCBuYW1lOiBcIlRoZSBGdXJpZXNcIiwgcmFuazogXCJTYWdlXCIsIGRlc2NyaXB0aW9uOiBcIkludGVybmFsIHZvaWNlcyBvZiBndWlsdCBhbmQgc2hhbWUgYXR0YWNraW5nIGV2ZW4gdGhlIHN1Y2Nlc3NmdWxcIiwgbG9yZTogXCJUaGV5IHdoaXNwZXIgeW91ciBmYWlsdXJlcywgcmVtaW5kIHlvdSBvZiBldmVyeSBza2lwLCBldmVyeSB3ZWFrbmVzcy5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi45XCIgfSxcbiAgeyB0aWVyOiAxMSwgbmFtZTogXCJUeXBob25cIiwgcmFuazogXCJUaXRhblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgZm9yY2Ugb2YgY2hhb3MgdGhyZWF0ZW5pbmcgdG8gdW5kbyBhbGwgcHJvZ3Jlc3NcIiwgbG9yZTogXCJGYXRoZXIgb2YgYWxsIG1vbnN0ZXJzLCBoZSBzZWVrcyB0byByZXR1cm4geW91IHRvIHRoZSBiZWdpbm5pbmcuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDMuMVwiIH0sXG4gIHsgdGllcjogMTIsIG5hbWU6IFwiS3Jvbm9zXCIsIHJhbms6IFwiQXJjaG9uXCIsIGRlc2NyaXB0aW9uOiBcIlRpbWUgaXRzZWxmIGFzIGFuIGVuZW15LCB0ZXN0aW5nIHN1c3RhaW5lZCBpbnRlbnNpdHlcIiwgbG9yZTogXCJUaGUgVGl0YW4gd2hvIGRldm91cnMgaGlzIGNoaWxkcmVuLiBDYW4geW91IG1haW50YWluIGFzIHdlZWtzIGJlY29tZSBtb250aHM/XCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDMuM1wiIH0sXG4gIHsgdGllcjogMTMsIG5hbWU6IFwiQ2hhb3MgUHJpbW9yZGlhbFwiLCByYW5rOiBcIk1hc3RlciBvZiBBbGxcIiwgZGVzY3JpcHRpb246IFwiVGhlIHVsdGltYXRlIHRlc3Qgb2YgdW5zaGFrZWFibGUgZGlzY2lwbGluZVwiLCBsb3JlOiBcIkJlZm9yZSBjcmVhdGlvbiwgYmVmb3JlIG9yZGVyLCBvbmx5IENoYW9zLiBUbyBtYXN0ZXIgaXQgaXMgdG8gbWFzdGVyIHlvdXJzZWxmLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjZcIiB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFJBTktfVElFUl9DT0xPUlM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gIDE6IFwiIzZCNzI4MFwiLCAyOiBcIiNFRjQ0NDRcIiwgMzogXCIjRjU5RTBCXCIsIDQ6IFwiIzEwQjk4MVwiLFxuICA1OiBcIiMzQjgyRjZcIiwgNjogXCIjOEI1Q0Y2XCIsIDc6IFwiI0VDNDg5OVwiLCA4OiBcIiNGOTczMTZcIixcbiAgOTogXCIjMDZCNkQ0XCIsIDEwOiBcIiNBODU1RjdcIiwgMTE6IFwiI0RDMjYyNlwiLCAxMjogXCIjN0MzQUVEXCIsXG4gIDEzOiBcIiNjOWEyMjdcIixcbn07XG5cbi8vIC0tLSBDaGFwdGVyIFByb2dyZXNzaW9uIC0tLVxuXG5leHBvcnQgY29uc3QgQ0hBUFRFUl9OQU1FUzogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgMTogXCJJbml0aWF0ZVwiLFxuICAyOiBcIkV4cGxvcmVyXCIsXG4gIDM6IFwiSm91cm5leW1hblwiLFxuICA0OiBcIkFkZXB0XCIsXG4gIDU6IFwiUGhpbG9zb3BoZXJcIixcbiAgNjogXCJNYXN0ZXJcIixcbiAgNzogXCJTYWdlXCIsXG4gIDg6IFwiT3JhY2xlXCIsXG4gIDk6IFwiVGl0YW5cIixcbiAgMTA6IFwiT2x5bXBpYW5cIixcbn07XG5cbi8vIC0tLSBEeW5hbWljIFRpdGxlIFRhYmxlcyAtLS1cblxuZXhwb3J0IGNvbnN0IFNJTkdMRV9ET01JTkFOVF9USVRMRVM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBib2R5OiAgIHsgbGlnaHQ6IFwiQXRobGV0ZVwiLCAgIG1pZDogXCJXYXJyaW9yXCIsICBoZWF2eTogXCJUaXRhblwiIH0sXG4gIG1pbmQ6ICAgeyBsaWdodDogXCJTdHVkZW50XCIsICAgbWlkOiBcIlNjaG9sYXJcIiwgIGhlYXZ5OiBcIlBvbHltYXRoXCIgfSxcbiAgc3Bpcml0OiB7IGxpZ2h0OiBcIlNlZWtlclwiLCAgICBtaWQ6IFwiU2FnZVwiLCAgICAgaGVhdnk6IFwiT3JhY2xlXCIgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBUV09fQ0FURUdPUllfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgXCJib2R5K21pbmRcIjogICAgeyBsaWdodDogXCJEaXNjaXBsaW5lZCBUaGlua2VyXCIsIG1pZDogXCJQaGlsb3NvcGhlci1LaW5nXCIsIGhlYXZ5OiBcIlJlbmFpc3NhbmNlIFRpdGFuXCIgfSxcbiAgXCJib2R5K3NwaXJpdFwiOiAgeyBsaWdodDogXCJBc2NldGljXCIsICAgICAgICAgICAgIG1pZDogXCJUZW1wbGFyXCIsICAgICAgICAgIGhlYXZ5OiBcIk9seW1waWFuIE1vbmtcIiB9LFxuICBcIm1pbmQrc3Bpcml0XCI6ICB7IGxpZ2h0OiBcIkNvbnRlbXBsYXRpdmVcIiwgICAgICAgbWlkOiBcIk15c3RpYyBTY2hvbGFyXCIsICAgaGVhdnk6IFwiRW5saWdodGVuZWQgT25lXCIgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBCQUxBTkNFRF9USVRMRVM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIGxpZ2h0OiBcIkluaXRpYXRlIG9mIEJhbGFuY2VcIixcbiAgbWlkOiBcIlJlbmFpc3NhbmNlIFNvdWxcIixcbiAgaGVhdnk6IFwiRXVkYWltb25cIixcbn07XG5cbi8vIC0tLSBEZWZhdWx0IEFjdGl2aXRpZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0FDVElWSVRJRVM6IEFjdGl2aXR5Q29uZmlnW10gPSBbXG4gIHtcbiAgICBpZDogXCJ3b3Jrb3V0XCIsIG5hbWU6IFwiV29ya291dFwiLCBlbW9qaTogXCJcXHV7MUY0QUF9XCIsIGNhdGVnb3J5OiBcImJvZHlcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMSBXb3Jrb3V0XCIsIHByb3BlcnR5OiBcIldvcmtvdXRcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDcsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgd29ya3NwYWNlVGVtcGxhdGU6IFwid29ya291dFwiLFxuICAgIHByaW9yaXR5OiA4LCBuZWdsZWN0VGhyZXNob2xkOiAyLFxuICAgIHByZWZlcnJlZFRpbWU6IFwibW9ybmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjYXJkaW9cIiwgbmFtZTogXCJDYXJkaW9cIiwgZW1vamk6IFwiXFx1ezFGM0MzfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDIgQ2FyZGlvXCIsIHByb3BlcnR5OiBcIkNhcmRpb1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNCwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNywgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcIm1vcm5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgIGFsdGVybmF0ZXNXaXRoOiBcIndvcmtvdXRcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlYWRpbmdcIiwgbmFtZTogXCJSZWFkaW5nXCIsIGVtb2ppOiBcIlxcdXsxRjRENn1cIiwgY2F0ZWdvcnk6IFwibWluZFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAzIFJlYWRpbmdcIiwgcHJvcGVydHk6IFwiUmVhZGluZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNiwgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImV2ZW5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDQ1LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZHJ1bW1pbmdcIiwgbmFtZTogXCJEcnVtbWluZ1wiLCBlbW9qaTogXCJcXHV7MUY5NDF9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA0IERydW1taW5nXCIsIHByb3BlcnR5OiBcIkRydW1taW5nXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA2LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA2LCBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgIHByZWZlcnJlZFRpbWU6IFwiYWZ0ZXJub29uXCIsIGVzdGltYXRlZER1cmF0aW9uOiA0NSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImhlYWx0aC1zdHVkeVwiLCBuYW1lOiBcIkhlYWx0aCBTdHVkeVwiLCBlbW9qaTogXCJcXHV7MUY5RUN9XCIsIGNhdGVnb3J5OiBcIm1pbmRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNSBIZWFsdGggU3R1ZHlcIiwgcHJvcGVydHk6IFwiSGVhbHRoIFN0dWR5XCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiAzLCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA0LCBuZWdsZWN0VGhyZXNob2xkOiA0LFxuICAgIHByZWZlcnJlZFRpbWU6IFwiYWZ0ZXJub29uXCIsIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgfSxcbiAge1xuICAgIGlkOiBcInNvY2lhbFwiLCBuYW1lOiBcIlNvY2lhbFwiLCBlbW9qaTogXCJcXHV7MUY5MUR9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA2IFNvY2lhbFwiLCBwcm9wZXJ0eTogXCJTb2NpYWxcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDIsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDUsIG5lZ2xlY3RUaHJlc2hvbGQ6IDUsXG4gICAgcHJlZmVycmVkVGltZTogXCJldmVuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA2MCxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRyYXdpbmdcIiwgbmFtZTogXCJEcmF3aW5nXCIsIGVtb2ppOiBcIlxcdXsxRjNBOH1cIiwgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDcgRHJhd2luZ1wiLCBwcm9wZXJ0eTogXCJEcmF3aW5nXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA0LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA3LCBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgIHByZWZlcnJlZFRpbWU6IFwiYWZ0ZXJub29uXCIsIGVzdGltYXRlZER1cmF0aW9uOiA2MCxcbiAgfSxcbl07XG5cbi8vIC0tLSBEaXJlY3RpdmUgTG9yZSBUZW1wbGF0ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBORUdMRUNUX0xPUkU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHdvcmtvdXQ6IFwiWW91ciBtdXNjbGVzIGZvcmdldCB3aGF0IHRoZXkgb25jZSBrbmV3LiBUaGUgYm9keSBjcmF2ZXMgZGlzY2lwbGluZSBcdTIwMTQgYW5zd2VyIGl0LlwiLFxuICBjYXJkaW86IFwiVGhlIGhlYXJ0IGdyb3dzIHNsdWdnaXNoIHdpdGhvdXQgdGhlIHBvdW5kaW5nIHJoeXRobSBvZiBlZmZvcnQuXCIsXG4gIHJlYWRpbmc6IFwiVGhlIG1pbmQgc3RhcnZlcyBvbiBkaXN0cmFjdGlvbi4gRmVlZCBpdCB3aXRoIHBhZ2VzLCBub3QgcGl4ZWxzLlwiLFxuICBkcnVtbWluZzogXCJTaWxlbmNlIGlzIG5vdCByZXN0IFx1MjAxNCBpdCBpcyB0aGUgZGVhdGggb2Ygcmh5dGhtLiBQaWNrIHVwIHRoZSBzdGlja3MuXCIsXG4gIFwiaGVhbHRoLXN0dWR5XCI6IFwiS25vd2xlZGdlIG9mIHRoZSBib2R5IGlzIHBvd2VyIG92ZXIgaXQuIE5lZ2xlY3QgaW52aXRlcyBpZ25vcmFuY2UuXCIsXG4gIHNvY2lhbDogXCJFdmVuIHdhcnJpb3JzIG5lZWQgZmVsbG93c2hpcC4gSXNvbGF0aW9uIGJyZWVkcyBzdGFnbmF0aW9uLlwiLFxuICBkcmF3aW5nOiBcIlRoZSBiZWFzdCB3aXRoaW4geW91IGdyb3dzIHdlYWsgd2l0aG91dCB0aGUgZGlzY2lwbGluZSBvZiBsaW5lIGFuZCBmb3JtLlwiLFxufTtcblxuLy8gLS0tIEZhbGxiYWNrIFF1b3RlcyAtLS1cblxuZXhwb3J0IGNvbnN0IEZBTExCQUNLX1FVT1RFUzogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IGF0dHJpYnV0aW9uOiBzdHJpbmcgfT4gPSBbXG4gIHsgdGV4dDogXCJZb3UgaGF2ZSBwb3dlciBvdmVyIHlvdXIgbWluZCBcdTIwMTQgbm90IG91dHNpZGUgZXZlbnRzLiBSZWFsaXplIHRoaXMsIGFuZCB5b3Ugd2lsbCBmaW5kIHN0cmVuZ3RoLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiV2Ugc3VmZmVyIG1vcmUgb2Z0ZW4gaW4gaW1hZ2luYXRpb24gdGhhbiBpbiByZWFsaXR5LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiVGhlIGltcGVkaW1lbnQgdG8gYWN0aW9uIGFkdmFuY2VzIGFjdGlvbi4gV2hhdCBzdGFuZHMgaW4gdGhlIHdheSBiZWNvbWVzIHRoZSB3YXkuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJObyBtYW4gaXMgZnJlZSB3aG8gaXMgbm90IG1hc3RlciBvZiBoaW1zZWxmLlwiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiV2FzdGUgbm8gbW9yZSB0aW1lIGFyZ3VpbmcgYWJvdXQgd2hhdCBhIGdvb2QgbWFuIHNob3VsZCBiZS4gQmUgb25lLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiSXQgaXMgbm90IHRoYXQgd2UgaGF2ZSBhIHNob3J0IHRpbWUgdG8gbGl2ZSwgYnV0IHRoYXQgd2Ugd2FzdGUgYSBnb29kIGRlYWwgb2YgaXQuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJGaXJzdCBzYXkgdG8geW91cnNlbGYgd2hhdCB5b3Ugd291bGQgYmU7IGFuZCB0aGVuIGRvIHdoYXQgeW91IGhhdmUgdG8gZG8uXCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJUaGUgaGFwcGluZXNzIG9mIHlvdXIgbGlmZSBkZXBlbmRzIHVwb24gdGhlIHF1YWxpdHkgb2YgeW91ciB0aG91Z2h0cy5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIkhlIHdobyBmZWFycyBkZWF0aCB3aWxsIG5ldmVyIGRvIGFueXRoaW5nIHdvcnRoIG9mIGEgbWFuIHdobyBpcyBhbGl2ZS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkRpZmZpY3VsdGllcyBzdHJlbmd0aGVuIHRoZSBtaW5kLCBhcyBsYWJvciBkb2VzIHRoZSBib2R5LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiSG93IGxvbmcgYXJlIHlvdSBnb2luZyB0byB3YWl0IGJlZm9yZSB5b3UgZGVtYW5kIHRoZSBiZXN0IGZvciB5b3Vyc2VsZj9cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBzb3VsIGJlY29tZXMgZHllZCB3aXRoIHRoZSBjb2xvdXIgb2YgaXRzIHRob3VnaHRzLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuXTtcblxuLy8gLS0tIFJvbWFuIE51bWVyYWxzIEhlbHBlciAtLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUm9tYW4obnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCB2YWxzID0gWzEwMDAsIDkwMCwgNTAwLCA0MDAsIDEwMCwgOTAsIDUwLCA0MCwgMTAsIDksIDUsIDQsIDFdO1xuICBjb25zdCBzeW1zID0gW1wiTVwiLCBcIkNNXCIsIFwiRFwiLCBcIkNEXCIsIFwiQ1wiLCBcIlhDXCIsIFwiTFwiLCBcIlhMXCIsIFwiWFwiLCBcIklYXCIsIFwiVlwiLCBcIklWXCIsIFwiSVwiXTtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgIHdoaWxlIChudW0gPj0gdmFsc1tpXSkge1xuICAgICAgcmVzdWx0ICs9IHN5bXNbaV07XG4gICAgICBudW0gLT0gdmFsc1tpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gLS0tIERlZmF1bHQgV29ya3NwYWNlIENvbXBsZXRpb24gU3RhdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9XT1JLU1BBQ0VfU1RBVEVTOiBXb3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVbXSA9IFtcbiAgeyBpZDogXCJkaXNjaXBsaW5lXCIsIG5hbWU6IFwiRGlzY2lwbGluZVwiLCBpY29uOiBcIlxcdTI1QzZcIiwgY29sb3I6IFwiIzkyOGQ4NVwiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMS4wIH0sXG4gIHsgaWQ6IFwiZmxvd1wiLCBuYW1lOiBcIkZsb3dcIiwgaWNvbjogXCJcXHUyMjQ4XCIsIGNvbG9yOiBcIiNjOWE4NGNcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDEuNSB9LFxuICB7IGlkOiBcInNraXBwZWRcIiwgbmFtZTogXCJTa2lwcGVkXCIsIGljb246IFwiXFx1MjVDQlwiLCBjb2xvcjogXCIjOGIyZDM1XCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAwIH0sXG5dO1xuXG4vLyAtLS0gRGVmYXVsdCBEZXYgQ29uZmlnIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ERVZfQ09ORklHOiBEZXZDb25maWcgPSB7XG4gIGxhYmVsczoge1xuICAgIGdyZWV0aW5nX21vcm5pbmc6IFwiR29vZCBtb3JuaW5nXCIsXG4gICAgZ3JlZXRpbmdfYWZ0ZXJub29uOiBcIkdvb2QgYWZ0ZXJub29uXCIsXG4gICAgZ3JlZXRpbmdfZXZlbmluZzogXCJHb29kIGV2ZW5pbmdcIixcbiAgICBncmVldGluZ19uaWdodDogXCJHb29kIG5pZ2h0XCIsXG4gICAgZGlyZWN0aXZlX3RpdGxlOiBcIlRIRSBESVJFQ1RJVkVcIixcbiAgICBib3NzX3N0YXR1c190aXRsZTogXCJCT1NTIFNUQVRVU1wiLFxuICAgIHdlZWtseV9yaHl0aG1fdGl0bGU6IFwiV0VFS0xZIFJIWVRITVwiLFxuICAgIGFjdGl2aXR5X2dyaWRfdGl0bGU6IFwiQUNUSVZJVElFU1wiLFxuICAgIHRlbXBsZV90aXRsZTogXCJUSEUgVEVNUExFXCIsXG4gICAgZXVkYWltb25pYV90aXRsZTogXCJFdWRhaW1vbmlhIEluZGV4XCIsXG4gICAgZGF5bWFwX3RpdGxlOiBcIllPVVIgREFZXCIsXG4gICAgYmVnaW5fd29ya3NwYWNlOiBcIkVOVEVSIFdPUktTUEFDRVwiLFxuICAgIG5vdF9ub3c6IFwiTk9UIE5PV1wiLFxuICB9LFxuICB4cFBlckNvbXBsZXRpb246IDEwLFxuICBzdHJlYWtCb251c011bHRpcGxpZXI6IDEuNSxcbiAgYnVmZmVyTWludXRlczogMTUsXG4gIG1vcm5pbmdTdGFydDogNixcbiAgbW9ybmluZ0VuZDogMTIsXG4gIGFmdGVybm9vbkVuZDogMTgsXG4gIGV2ZW5pbmdFbmQ6IDIzLFxuICB0aGVtZU92ZXJyaWRlczoge30sXG4gIGFuaW1hdGlvblN0YWdnZXJNczogODAsXG4gIGhlcm9IZWlnaHQ6IDM1MCxcbiAgc2VjdGlvbk9yZGVyOiBbXG4gICAgXCJoZXJvXCIsIFwiZXVkYWltb25pYVwiLCBcImRheW1hcFwiLCBcImRpcmVjdGl2ZVwiLCBcImJvc3NcIixcbiAgICBcIndlZWtseVwiLCBcImFjdGl2aXRpZXNcIiwgXCJ0ZW1wbGVcIiwgXCJxdW90ZVwiLFxuICBdLFxuICBoaWRkZW5TZWN0aW9uczogW10sXG4gIGFjdGl2aXR5R3JpZENvbHVtbnM6IDIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBDYWxlbmRhciBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1M6IENhbGVuZGFyU2V0dGluZ3MgPSB7XG4gIGVuYWJsZURhaWx5Tm90ZXM6IHRydWUsXG4gIGRhaWx5Tm90ZXNGb2xkZXI6IFwiXCIsXG4gIGRhaWx5Tm90ZXNGb3JtYXQ6IFwiWVlZWS1NTS1ERFwiLFxuICBlbmFibGVUYXNrc1BsdWdpbjogZmFsc2UsXG4gIGVuYWJsZVF1aWNrVGFza3M6IHRydWUsXG4gIHF1aWNrVGFza3M6IFtdLFxufTtcblxuLy8gLS0tIERlZmF1bHQgT2xlbiBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0xFTl9TRVRUSU5HUzogT2xlblNldHRpbmdzID0ge1xuICAvLyBQcm9maWxlXG4gIHVzZXJOYW1lOiBcIldhcnJpb3JcIixcbiAgbXlXaHk6IFwiXCIsXG4gIGhlcm9CYWNrZ3JvdW5kOiBcIlwiLFxuXG4gIC8vIEFjdGl2aXRpZXNcbiAgYWN0aXZpdGllczogREVGQVVMVF9BQ1RJVklUSUVTLFxuXG4gIC8vIENhdGVnb3JpZXNcbiAgY2F0ZWdvcnlDb2xvcnM6IHtcbiAgICBib2R5OiBcIiNjOWE4NGNcIixcbiAgICBtaW5kOiBcIiM2YjhjY2VcIixcbiAgICBzcGlyaXQ6IFwiIzhiN2VjOFwiLFxuICB9LFxuICB0aXRsZU92ZXJyaWRlOiBcIlwiLFxuXG4gIC8vIEV1ZGFpbW9uaWFcbiAgY2F0ZWdvcnlYUDoge1xuICAgIGJvZHk6IDAsXG4gICAgbWluZDogMCxcbiAgICBzcGlyaXQ6IDAsXG4gIH0sXG5cbiAgLy8gQm9zc1xuICBjdXJyZW50VGllcjogMSxcbiAgYm9zc01heEhQOiAzNSxcbiAgYm9zc0N1cnJlbnRIUDogMzUsXG4gIGluVGFydGFydXM6IGZhbHNlLFxuICB0YXJ0YXJ1c1BlbmFuY2VUYXNrczogW10sXG4gIHRhcnRhcnVzU3RhcnREYXRlOiBudWxsLFxuICBmYWlsZWRUaHJlc2hvbGREYXlzOiAwLFxuICBjb25zZWN1dGl2ZVBlcmZlY3RXZWVrczogMCxcblxuICAvLyBUZW1wbGVcbiAgdGVtcGxlVGFza3M6IFtcbiAgICB7IGlkOiBcImJhdGhpbmdcIiwgbmFtZTogXCJCYXRoaW5nXCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogMSwgZW1vamk6IFwiXFx1ezFGNkJGfVwiIH0sXG4gICAgeyBpZDogXCJmYWNpYWwtaGFpclwiLCBuYW1lOiBcIkZhY2lhbCBoYWlyXCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogMiwgZW1vamk6IFwiXFx1ezFGQTkyfVwiIH0sXG4gICAgeyBpZDogXCJuYWlsc1wiLCBuYW1lOiBcIk5haWxzXCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogNywgZW1vamk6IFwiXFx1MjcwMlxcdUZFMEZcIiB9LFxuICAgIHsgaWQ6IFwiaGFpcmN1dFwiLCBuYW1lOiBcIkhhaXJjdXRcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiAyMSwgZW1vamk6IFwiXFx1ezFGNDg4fVwiIH0sXG4gIF0sXG5cbiAgLy8gUmV3YXJkc1xuICBwZW5kaW5nUmV3YXJkczogW10sXG4gIGNsYWltZWRSZXdhcmRzOiBbXSxcbiAgYmFua2VkUmV3YXJkczogW10sXG5cbiAgLy8gU3lzdGVtXG4gIHN5c3RlbVN0YXRlOiBcImFjdGl2ZVwiLFxuICBwYXVzZVN0YXJ0VGltZTogbnVsbCxcbiAgdG90YWxQYXVzZWRUaW1lOiAwLFxuICBtaWdyYXRlZDogZmFsc2UsXG4gIHNpbXVsYXRlZERhdGU6IG51bGwsXG5cbiAgLy8gVGhlbWVcbiAgdGhlbWVPdmVycmlkZXM6IHt9LFxuXG4gIC8vIERldlxuICBkZXZDb25maWc6IERFRkFVTFRfREVWX0NPTkZJRyxcblxuICAvLyBXb3Jrc3BhY2VcbiAgd29ya3NwYWNlQ29tcGxldGlvblN0YXRlczogREVGQVVMVF9XT1JLU1BBQ0VfU1RBVEVTLFxuICBhY3RpdmVXb3Jrc3BhY2U6IG51bGwsXG5cbiAgLy8gQ2FsZW5kYXJcbiAgY2FsZW5kYXI6IERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsXG5cbiAgLy8gUXVvdGVcbiAgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLFxuICBsYXN0UXVvdGVJbmRleDogLTEsXG4gIHJlY2VudFF1b3RlSWRzOiBbXSxcbn07XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXNoYm9hcmQgVmlld1xuLy8gTWFpbiBzY3JvbGxhYmxlIEl0ZW1WaWV3IHJlbmRlcmluZyBhbGwgZGFzaGJvYXJkIHNlY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQ29tcGxldGlvbk1hcCwgQ29tcGxldGlvbiwgQ2FsZW5kYXJUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBDYWxlbmRhckVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0NhbGVuZGFyRW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJIZXJvQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9DYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJFdWRhaW1vbmlhQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXVkYWltb25pYUJhclwiO1xuaW1wb3J0IHsgcmVuZGVyRGlyZWN0aXZlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RpcmVjdGl2ZUNhcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvc3NTdGF0dXNDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9zc1N0YXR1c0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtseVJoeXRobSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlZWtseVJoeXRobVwiO1xuaW1wb3J0IHsgcmVuZGVyQWN0aXZpdHlHcmlkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aXZpdHlHcmlkXCI7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGVDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RlbXBsZUNoaXBzXCI7XG5pbXBvcnQgeyByZW5kZXJRdW90ZUZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlRm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXlUaW1lbGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RheVRpbWVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG4gIHByaXZhdGUgaW50ZXJ2YWxzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVklFV19UWVBFX09MRU47XG4gIH1cblxuICBnZXREaXNwbGF5VGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIk9sZW5cIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJjb21wYXNzXCI7XG4gIH1cblxuICBhc3luYyBvbk9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pbnRlcnZhbHMgPSBbXTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgY2xlYW51cCgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuaW50ZXJ2YWxzKSB7XG4gICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnZhbHMgPSBbXTtcbiAgfVxuXG4gIGFzeW5jIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG4gICAgY29uc3Qgcm9vdCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kYXNoYm9hcmRcIiB9KTtcblxuICAgIC8vIEFwcGx5IHRoZW1lIG92ZXJyaWRlc1xuICAgIHRoaXMuYXBwbHlUaGVtZU92ZXJyaWRlcyhyb290KTtcblxuICAgIC8vIEdhdGhlciBjb21wbGV0aW9uIGRhdGEgZnJvbSB2YXVsdFxuICAgIGNvbnN0IGNvbXBsZXRpb25EYXRhID0gdGhpcy5nYXRoZXJDb21wbGV0aW9uRGF0YSgpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBlbmdpbmVzXG4gICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBlbmdpbmUgPSBuZXcgT2xlbkVuZ2luZShzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIG5vdyk7XG5cbiAgICAvLyBDYWxlbmRhciBpbnRlZ3JhdGlvbiBcdTIwMTQgZ2F0aGVyIGNhbGVuZGFyIHRhc2tzIGFuZCBmZWVkIGludG8gZW5naW5lXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUodGhpcy5hcHAsIHNldHRpbmdzLCBub3cpO1xuICAgIGNvbnN0IGNhbGVuZGFyVGFza3MgPSBhd2FpdCB0aGlzLmdhdGhlckNhbGVuZGFyVGFza3MoY2FsZW5kYXJFbmdpbmUpO1xuICAgIGNvbnN0IGNhbGVuZGFyRW50cmllcyA9IGNhbGVuZGFyRW5naW5lLnRvRGF5TWFwRW50cmllcyhjYWxlbmRhclRhc2tzKTtcbiAgICBlbmdpbmUuc2V0Q2FsZW5kYXJFbnRyaWVzKGNhbGVuZGFyRW50cmllcyk7XG5cbiAgICAvLyBCdWlsZCBzZWN0aW9uIG9yZGVyIGZyb20gZGV2Q29uZmlnXG4gICAgY29uc3Qgc2VjdGlvbk9yZGVyID0gc2V0dGluZ3MuZGV2Q29uZmlnLnNlY3Rpb25PcmRlcjtcbiAgICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KHNldHRpbmdzLmRldkNvbmZpZy5oaWRkZW5TZWN0aW9ucyk7XG5cbiAgICBsZXQgc3RhZ2dlcklkeCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbk9yZGVyKSB7XG4gICAgICBpZiAoaGlkZGVuLmhhcyhzZWN0aW9uKSkgY29udGludWU7XG5cbiAgICAgIHN3aXRjaCAoc2VjdGlvbikge1xuICAgICAgICBjYXNlIFwiaGVyb1wiOlxuICAgICAgICAgIHJlbmRlckhlcm9DYXJkKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImV1ZGFpbW9uaWFcIjpcbiAgICAgICAgICByZW5kZXJFdWRhaW1vbmlhQmFyKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgpO1xuICAgICAgICAgIHN0YWdnZXJJZHggKz0gMzsgLy8gZXVkYWltb25pYSBjYXJkICsgc3RhdCBjYXJkcyArIGNhdGVnb3JpZXMgY2FyZFxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJkYXltYXBcIjpcbiAgICAgICAgICByZW5kZXJEYXlUaW1lbGluZShyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyssIHtcbiAgICAgICAgICAgIG9uQWNjZXB0OiAoYWN0aXZpdHlJZCkgPT4gdGhpcy5oYW5kbGVFbnRlcldvcmtzcGFjZShhY3Rpdml0eUlkKSxcbiAgICAgICAgICAgIG9uU2tpcDogKGFjdGl2aXR5SWQpID0+IHRoaXMuaGFuZGxlU2tpcEFjdGl2aXR5KGFjdGl2aXR5SWQsIGVuZ2luZSksXG4gICAgICAgICAgICBvbkNhbGVuZGFyRG9uZTogKGVudHJ5KSA9PiB0aGlzLmhhbmRsZUNhbGVuZGFyVGFza0RvbmUoZW50cnkpLFxuICAgICAgICAgICAgb25DYWxlbmRhclBvc3Rwb25lOiAoZW50cnkpID0+IHRoaXMuaGFuZGxlQ2FsZW5kYXJUYXNrUG9zdHBvbmUoZW50cnkpLFxuICAgICAgICAgICAgb25DcmVhdGVFdmVudDogKCkgPT4gKHRoaXMucGx1Z2luIGFzIGFueSkuc2hvd1F1aWNrVGFza0RpYWxvZygpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpdmVcIjpcbiAgICAgICAgICByZW5kZXJEaXJlY3RpdmVDYXJkKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKywgKGFjdGl2aXR5SWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50ZXJXb3Jrc3BhY2UoYWN0aXZpdHlJZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImJvc3NcIjpcbiAgICAgICAgICByZW5kZXJCb3NzU3RhdHVzQ2FyZChyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwid2Vla2x5XCI6XG4gICAgICAgICAgcmVuZGVyV2Vla2x5Umh5dGhtKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImFjdGl2aXRpZXNcIjpcbiAgICAgICAgICByZW5kZXJBY3Rpdml0eUdyaWQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGVtcGxlXCI6XG4gICAgICAgICAgcmVuZGVyVGVtcGxlQ2hpcHMocm9vdCwgc2V0dGluZ3MsIHN0YWdnZXJJZHgrKywgKHRhc2tJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUZW1wbGVVcGRhdGUodGFza0lkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICByZW5kZXJRdW90ZUZvb3Rlcihyb290LCB0aGlzLmFwcCwgc2V0dGluZ3MsIHN0YWdnZXJJZHgrKywgKHBhcnRpYWwpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wbHVnaW4uc2V0dGluZ3MsIHBhcnRpYWwpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIERhdGEgR2F0aGVyaW5nIC0tLVxuXG4gIGdhdGhlckNvbXBsZXRpb25EYXRhKCk6IENvbXBsZXRpb25NYXAge1xuICAgIGNvbnN0IGRhdGE6IENvbXBsZXRpb25NYXAgPSB7fTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcykge1xuICAgICAgaWYgKCFhY3Rpdml0eS5lbmFibGVkKSBjb250aW51ZTtcbiAgICAgIGRhdGFbYWN0aXZpdHkuaWRdID0gdGhpcy5nZXRDb21wbGV0aW9uc0Zyb21Gb2xkZXIoYWN0aXZpdHkuZm9sZGVyLCBhY3Rpdml0eS5wcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBsZXRpb25zRnJvbUZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nKTogQ29tcGxldGlvbltdIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiO1xuXG4gICAgcmV0dXJuIGZpbGVzXG4gICAgICAuZmlsdGVyKChmaWxlKSA9PiBmaWxlLnBhdGggPT09IGZvbGRlclBhdGggfHwgZmlsZS5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpXG4gICAgICAubWFwKChmaWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgIGNvbnN0IGZyb250bWF0dGVyID0gY2FjaGU/LmZyb250bWF0dGVyO1xuICAgICAgICBpZiAoIWZyb250bWF0dGVyIHx8IHR5cGVvZiBmcm9udG1hdHRlcltmaWVsZE5hbWVdICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0ZTogZmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZyb250bWF0dGVyW2ZpZWxkTmFtZV0gPT09IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYyk6IGMgaXMgQ29tcGxldGlvbiA9PiBjICE9PSBudWxsKTtcbiAgfVxuXG4gIC8vIC0tLSBDYWxlbmRhciBHYXRoZXJpbmcgLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBnYXRoZXJDYWxlbmRhclRhc2tzKGNhbGVuZGFyRW5naW5lOiBDYWxlbmRhckVuZ2luZSk6IFByb21pc2U8Q2FsZW5kYXJUYXNrW10+IHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmdzO1xuXG4gICAgLy8gT3B0aW9uIEE6IERhaWx5IE5vdGVzIFx1MjAxNCByZWFkIHRvZGF5J3Mgbm90ZSBjb250ZW50XG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMgJiYgc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcikge1xuICAgICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgY29uc3QgZm9sZGVyID0gc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcjtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgICAgY29uc3QgZGFpbHlOb3RlID0gZmlsZXMuZmluZCgoZikgPT4ge1xuICAgICAgICBpZiAoIWYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpICYmIGYucGF0aCAhPT0gZm9sZGVyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBmLmJhc2VuYW1lID09PSB0b2RheTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGFpbHlOb3RlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGRhaWx5Tm90ZSk7XG4gICAgICAgIHRhc2tzLnB1c2goLi4uY2FsZW5kYXJFbmdpbmUuZ2V0RGFpbHlOb3RlVGFza3NGcm9tQ29udGVudChjb250ZW50LCBkYWlseU5vdGUucGF0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW4gXHUyMDE0IHNjYW4gZm9yIHRhc2tzIHdpdGggdG9kYXkncyBkdWUgZGF0ZVxuICAgIGlmIChzZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikge1xuICAgICAgY29uc3QgdGFza3NQbHVnaW4gPSAodGhpcy5hcHAgYXMgYW55KS5wbHVnaW5zPy5wbHVnaW5zPy5bXCJvYnNpZGlhbi10YXNrcy1wbHVnaW5cIl07XG4gICAgICBpZiAodGFza3NQbHVnaW4pIHtcbiAgICAgICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICAgIGNvbnN0IGZpbGVzV2l0aFRhc2tzOiB7IHBhdGg6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH1bXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkpIHtcbiAgICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcz8uc29tZSgobGkpID0+IGxpLnRhc2sgIT09IHVuZGVmaW5lZCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICAgICAgLy8gUXVpY2sgY2hlY2s6IGRvZXMgdGhlIGNvbnRlbnQgbWVudGlvbiB0b2RheSdzIGRhdGUgd2l0aCBhIGR1ZSBlbW9qaT9cbiAgICAgICAgICBpZiAoY29udGVudC5pbmNsdWRlcyh0b2RheSkpIHtcbiAgICAgICAgICAgIGZpbGVzV2l0aFRhc2tzLnB1c2goeyBwYXRoOiBmaWxlLnBhdGgsIGNvbnRlbnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFza3MucHVzaCguLi5jYWxlbmRhckVuZ2luZS5nZXRUYXNrc1BsdWdpblRhc2tzRnJvbUZpbGVzKGZpbGVzV2l0aFRhc2tzKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uIEM6IFF1aWNrIFRhc2tzIFx1MjAxNCBhbHJlYWR5IGhhbmRsZWQgYnkgQ2FsZW5kYXJFbmdpbmUuZ2V0QWxsVGFza3MoKVxuICAgIGlmIChzZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKSB7XG4gICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICB0YXNrcy5wdXNoKFxuICAgICAgICAuLi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzXG4gICAgICAgICAgLmZpbHRlcigocXQpID0+IHF0LmRhdGUgPT09IHRvZGF5KVxuICAgICAgICAgIC5tYXAoKHF0KSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGBxdC0ke3F0LmlkfWAsXG4gICAgICAgICAgICB0aXRsZTogcXQudGl0bGUsXG4gICAgICAgICAgICBzb3VyY2U6IFwicXVpY2stdGFza1wiIGFzIGNvbnN0LFxuICAgICAgICAgICAgZGF0ZTogcXQuZGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IHF0LnRpbWUsXG4gICAgICAgICAgICBkdXJhdGlvbjogcXQuZHVyYXRpb24sXG4gICAgICAgICAgICBkb25lOiBxdC5kb25lLFxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICAvLyAtLS0gSGFuZGxlcnMgLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVFbnRlcldvcmtzcGFjZShhY3Rpdml0eUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuO1xuXG4gICAgaWYgKGFjdGl2aXR5Lmhhc1dvcmtzcGFjZSkge1xuICAgICAgLy8gT3BlbiBuYXRpdmUgT2xlbiBXb3Jrc3BhY2VWaWV3XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgPSB7XG4gICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgc2tpbGxzOiBbXSxcbiAgICAgICAgaGFzV29ya3NwYWNlOiB0cnVlLFxuICAgICAgICBza2lsbEZvbGRlcjogYWN0aXZpdHkuc2tpbGxGb2xkZXIsXG4gICAgICB9O1xuICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZVdvcmtzcGFjZVZpZXcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9uLXdvcmtzcGFjZSBhY3Rpdml0aWVzOiBtYXJrIGRvbmUgaW1tZWRpYXRlbHlcbiAgICAgIGF3YWl0IHRoaXMubWFya0FjdGl2aXR5RG9uZShhY3Rpdml0eSk7XG4gICAgICBuZXcgTm90aWNlKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9IG1hcmtlZCBkb25lIWApO1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVNraXBBY3Rpdml0eShhY3Rpdml0eUlkOiBzdHJpbmcsIGVuZ2luZTogT2xlbkVuZ2luZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE1hcmsgYXMgc2tpcHBlZCBpbiB0aGUgZGF5IG1hcCAoZW5naW5lIHN0YXRlKVxuICAgIGNvbnN0IGRheU1hcCA9IGVuZ2luZS5nZXREYXlNYXAoKTtcbiAgICBjb25zdCBlbnRyeSA9IGRheU1hcC5maW5kKChlKSA9PiBlLmFjdGl2aXR5SWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkuc3RhdHVzID0gXCJza2lwcGVkXCI7XG4gICAgfVxuICAgIG5ldyBOb3RpY2UoXCJTa2lwcGVkXCIpO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUNhbGVuZGFyVGFza0RvbmUoZW50cnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkRheU1hcEVudHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayB8fCAhZW50cnkuY2FsZW5kYXJTb3VyY2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNhbGVuZGFyRW5naW5lID0gbmV3IENhbGVuZGFyRW5naW5lKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncyxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgc3dpdGNoIChlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjpcbiAgICAgICAgaWYgKGVudHJ5LmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgZW50cnkubGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUudG9nZ2xlRGFpbHlOb3RlVGFzayhlbnRyeS5maWxlUGF0aCwgZW50cnkubGluZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjpcbiAgICAgICAgaWYgKGVudHJ5LmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgZW50cnkubGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUudG9nZ2xlVGFza3NQbHVnaW5UYXNrKGVudHJ5LmZpbGVQYXRoLCBlbnRyeS5saW5lTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjoge1xuICAgICAgICBjb25zdCBxdElkID0gZW50cnkuY2FsZW5kYXJUYXNrSWQ/LnJlcGxhY2UoXCJxdC1cIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maW5kKChxKSA9PiBxLmlkID09PSBxdElkKTtcbiAgICAgICAgaWYgKHF0KSB7XG4gICAgICAgICAgcXQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3IE5vdGljZShgXFx1MjcxMyAke2VudHJ5LmFjdGl2aXR5TmFtZX1gKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuRGF5TWFwRW50cnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWVudHJ5LmlzQ2FsZW5kYXJUYXNrIHx8ICFlbnRyeS5jYWxlbmRhclNvdXJjZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKVxuICAgICk7XG5cbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCB0YXNrOiBpbXBvcnQoXCIuLi90eXBlc1wiKS5DYWxlbmRhclRhc2sgPSB7XG4gICAgICBpZDogZW50cnkuY2FsZW5kYXJUYXNrSWQgPz8gZW50cnkuYWN0aXZpdHlJZCxcbiAgICAgIHRpdGxlOiBlbnRyeS5hY3Rpdml0eU5hbWUsXG4gICAgICBzb3VyY2U6IGVudHJ5LmNhbGVuZGFyU291cmNlLFxuICAgICAgZGF0ZTogbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBmaWxlUGF0aDogZW50cnkuZmlsZVBhdGgsXG4gICAgICBsaW5lTnVtYmVyOiBlbnRyeS5saW5lTnVtYmVyLFxuICAgIH07XG5cbiAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS5wb3N0cG9uZVRhc2sodGFzayk7XG4gICAgbmV3IE5vdGljZShgXFx1MjNFOSAke2VudHJ5LmFjdGl2aXR5TmFtZX0gcG9zdHBvbmVkIHRvIHRvbW9ycm93YCk7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbWFya0FjdGl2aXR5RG9uZShhY3Rpdml0eTogeyBpZDogc3RyaW5nOyBmb2xkZXI6IHN0cmluZzsgcHJvcGVydHk6IHN0cmluZzsgY2F0ZWdvcnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkNhdGVnb3J5OyBkYW1hZ2VQZXJDb21wbGV0aW9uOiBudW1iZXIgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgdG9kYXkncyBmaWxlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgdG9kYXlGaWxlID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PiAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmIGYuYmFzZW5hbWUgPT09IGRhdGVTdHJcbiAgICApO1xuXG4gICAgaWYgKHRvZGF5RmlsZSkge1xuICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKHRvZGF5RmlsZSwgKGZtKSA9PiB7XG4gICAgICAgIGZtW2FjdGl2aXR5LnByb3BlcnR5XSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBgLS0tXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX06IHRydWVcXG4tLS1cXG5gKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBNYXkgYWxyZWFkeSBleGlzdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFhQICsgYm9zcyBkYW1hZ2VcbiAgICBjb25zdCB4cCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb247XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFthY3Rpdml0eS5jYXRlZ29yeV0gKz0geHA7XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3Rpdml0eS5kYW1hZ2VQZXJDb21wbGV0aW9uXG4gICAgKTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlVGVtcGxlVXBkYXRlKHRhc2tJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGFzayA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLmZpbmQoKHQpID0+IHQuaWQgPT09IHRhc2tJZCk7XG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG5cbiAgICB0YXNrLmxhc3RDb21wbGV0ZWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgbmV3IE5vdGljZShgJHt0YXNrLmVtb2ppfSAke3Rhc2submFtZX0gY29tcGxldGVkIWApO1xuXG4gICAgLy8gUmUtcmVuZGVyXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8vIC0tLSBUaGVtZSAtLS1cblxuICBwcml2YXRlIGFwcGx5VGhlbWVPdmVycmlkZXMocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcztcbiAgICBpZiAoIW92ZXJyaWRlcykgcmV0dXJuO1xuXG4gICAgaWYgKG92ZXJyaWRlcy5iZ1ByaW1hcnkpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnLXByaW1hcnlcIiwgb3ZlcnJpZGVzLmJnUHJpbWFyeSk7XG4gICAgaWYgKG92ZXJyaWRlcy5jYXJkQmcpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtYmdcIiwgb3ZlcnJpZGVzLmNhcmRCZyk7XG4gICAgaWYgKG92ZXJyaWRlcy50ZXh0UHJpbWFyeSkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1wcmltYXJ5XCIsIG92ZXJyaWRlcy50ZXh0UHJpbWFyeSk7XG4gICAgaWYgKG92ZXJyaWRlcy50ZXh0TXV0ZWQpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRleHQtbXV0ZWRcIiwgb3ZlcnJpZGVzLnRleHRNdXRlZCk7XG4gICAgaWYgKG92ZXJyaWRlcy5hY2NlbnRHb2xkKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1hY2NlbnQtZ29sZFwiLCBvdmVycmlkZXMuYWNjZW50R29sZCk7XG4gICAgaWYgKG92ZXJyaWRlcy5kYW5nZXIpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWRhbmdlclwiLCBvdmVycmlkZXMuZGFuZ2VyKTtcbiAgICBpZiAob3ZlcnJpZGVzLnN1Y2Nlc3MpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXN1Y2Nlc3NcIiwgb3ZlcnJpZGVzLnN1Y2Nlc3MpO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIEVuZ2luZVxuLy8gUmVhZHMgYm9zcyBzdGF0ZSBhbmQgcHJvdmlkZXMgYm9zcy1yZWxhdGVkIGNhbGN1bGF0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBCb3NzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQk9TU0VTLCBSQU5LX1RJRVJfQ09MT1JTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvc3NTdGF0dXMge1xuICBib3NzOiBCb3NzRGVmaW5pdGlvbjtcbiAgY3VycmVudEhQOiBudW1iZXI7XG4gIG1heEhQOiBudW1iZXI7XG4gIHBlcmNlbnQ6IG51bWJlcjtcbiAgdGllcjogbnVtYmVyO1xuICByYW5rOiBzdHJpbmc7XG4gIHRpZXJDb2xvcjogc3RyaW5nO1xuICBpblRhcnRhcnVzOiBib29sZWFuO1xuICBpc0RhbmdlclpvbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCb3NzRW5naW5lIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBnZXRCb3NzRm9yVGllcih0aWVyOiBudW1iZXIpOiBCb3NzRGVmaW5pdGlvbiB8IG51bGwge1xuICAgIHJldHVybiBCT1NTRVMuZmluZCgoYikgPT4gYi50aWVyID09PSB0aWVyKSA/PyBudWxsO1xuICB9XG5cbiAgZ2V0Q3VycmVudEJvc3MoKTogQm9zc0RlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb3NzRm9yVGllcih0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyKTtcbiAgfVxuXG4gIGdldEJvc3NTdGF0dXMoKTogQm9zc1N0YXR1cyB7XG4gICAgY29uc3QgdGllciA9IHRoaXMuc2V0dGluZ3MuY3VycmVudFRpZXI7XG4gICAgY29uc3QgYm9zcyA9IHRoaXMuZ2V0Q3VycmVudEJvc3MoKSA/PyBCT1NTRVNbMF07XG4gICAgY29uc3QgY3VycmVudEhQID0gdGhpcy5zZXR0aW5ncy5ib3NzQ3VycmVudEhQO1xuICAgIGNvbnN0IG1heEhQID0gdGhpcy5zZXR0aW5ncy5ib3NzTWF4SFA7XG4gICAgY29uc3QgcGVyY2VudCA9IG1heEhQID4gMCA/IE1hdGgucm91bmQoKGN1cnJlbnRIUCAvIG1heEhQKSAqIDEwMCkgOiAwO1xuICAgIGNvbnN0IHRpZXJDb2xvciA9IFJBTktfVElFUl9DT0xPUlNbdGllcl0gPz8gXCIjNkI3MjgwXCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9zcyxcbiAgICAgIGN1cnJlbnRIUCxcbiAgICAgIG1heEhQLFxuICAgICAgcGVyY2VudCxcbiAgICAgIHRpZXIsXG4gICAgICByYW5rOiBib3NzLnJhbmssXG4gICAgICB0aWVyQ29sb3IsXG4gICAgICBpblRhcnRhcnVzOiB0aGlzLnNldHRpbmdzLmluVGFydGFydXMsXG4gICAgICBpc0RhbmdlclpvbmU6IHRoaXMuaXNEYW5nZXJab25lKCksXG4gICAgfTtcbiAgfVxuXG4gIGlzRGFuZ2VyWm9uZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IGJvc3NDdXJyZW50SFAsIGJvc3NNYXhIUCB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBpZiAoYm9zc01heEhQIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKGJvc3NDdXJyZW50SFAgLyBib3NzTWF4SFApIDwgMC4xNTtcbiAgfVxuXG4gIGlzSW5UYXJ0YXJ1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzO1xuICB9XG5cbiAgZ2V0SFBDb2xvcihwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChwZXJjZW50ID4gNjApIHJldHVybiBcIiMyMmM1NWVcIjtcbiAgICBpZiAocGVyY2VudCA+IDMwKSByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgaWYgKHBlcmNlbnQgPiAxNSkgcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ29yZSBFbmdpbmVcbi8vIFByaW9yaXR5IGxvZ2ljLCBzdWdnZXN0aW9uIGFsZ29yaXRobSwgZGF5IG1hcCwgYW5hbHl0aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUge1xuICBPbGVuU2V0dGluZ3MsXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBDb21wbGV0aW9uLFxuICBDb21wbGV0aW9uTWFwLFxuICBEaXJlY3RpdmVTdWdnZXN0aW9uLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2F0ZWdvcnlMZXZlbCxcbiAgQ2F0ZWdvcnksXG4gIFByaW9yaXR5UmVhc29uLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIE5FR0xFQ1RfTE9SRSxcbiAgQ0hBUFRFUl9OQU1FUyxcbiAgU0lOR0xFX0RPTUlOQU5UX1RJVExFUyxcbiAgVFdPX0NBVEVHT1JZX1RJVExFUyxcbiAgQkFMQU5DRURfVElUTEVTLFxuICB0b1JvbWFuLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4vQm9zc0VuZ2luZVwiO1xuXG5leHBvcnQgY2xhc3MgT2xlbkVuZ2luZSB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcbiAgcHJpdmF0ZSBjb21wbGV0aW9uczogQ29tcGxldGlvbk1hcDtcbiAgcHJpdmF0ZSBub3c6IERhdGU7XG4gIHByaXZhdGUgdG9kYXk6IHN0cmluZztcbiAgcHJpdmF0ZSBib3NzRW5naW5lOiBCb3NzRW5naW5lO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGNvbXBsZXRpb25zOiBDb21wbGV0aW9uTWFwLCBub3c6IERhdGUpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5jb21wbGV0aW9ucyA9IGNvbXBsZXRpb25zO1xuICAgIHRoaXMubm93ID0gbm93O1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgdGhpcy50b2RheSA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5ib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gLS0tIEVmZmVjdGl2ZSBEYXRlIChzdXBwb3J0cyBzaW11bGF0ZWQgZGF0ZSArIHBhdXNlKSAtLS1cblxuICBwcml2YXRlIGdldEVmZmVjdGl2ZU5vdygpOiBEYXRlIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSB7XG4gICAgICBjb25zdCBzaW0gPSBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpO1xuICAgICAgc2ltLnNldEhvdXJzKDEyLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBzaW07XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiICYmIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWZmZWN0aXZlVG9kYXkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBkID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIERhdGEgQWNjZXNzIC0tLVxuXG4gIGdldEVuYWJsZWRBY3Rpdml0aWVzKCk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQpO1xuICB9XG5cbiAgZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRpb25zW2FjdGl2aXR5SWRdID8/IFtdO1xuICB9XG5cbiAgZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHlJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHRvZGF5TXMgPSBuZXcgRGF0ZShlZmZlY3RpdmVOb3cpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgY29uc3QgY29tcGxldGVkRGF0ZXMgPSBjb21wc1xuICAgICAgLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpXG4gICAgICAubWFwKChjKSA9PiBuZXcgRGF0ZShjLmRhdGUpLmdldFRpbWUoKSlcbiAgICAgIC5maWx0ZXIoKHQpID0+ICFpc05hTih0KSAmJiB0IDw9IHRvZGF5TXMpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuXG4gICAgaWYgKGNvbXBsZXRlZERhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDk5OTtcblxuICAgIGNvbnN0IG1zUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigodG9kYXlNcyAtIGNvbXBsZXRlZERhdGVzWzBdKSAvIG1zUGVyRGF5KTtcbiAgfVxuXG4gIGlzRG9uZVRvZGF5KGFjdGl2aXR5SWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZVRvZGF5ID0gdGhpcy5nZXRFZmZlY3RpdmVUb2RheSgpO1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIHJldHVybiBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGVmZmVjdGl2ZVRvZGF5ICYmIGMuY29tcGxldGVkKTtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgUHJvZ3Jlc3MgLS0tXG5cbiAgZ2V0V2Vla2x5UHJvZ3Jlc3MoYWN0aXZpdHlJZDogc3RyaW5nKTogeyBkb25lOiBudW1iZXI7IHRhcmdldDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybiB7IGRvbmU6IDAsIHRhcmdldDogMCB9O1xuXG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSB0aGlzLmdldFdlZWtTdGFydChlZmZlY3RpdmVOb3cpO1xuICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgIHdlZWtFbmQuc2V0RGF0ZSh3ZWVrRW5kLmdldERhdGUoKSArIDcpO1xuXG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZG9uZSA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICByZXR1cm4gZCA+PSB3ZWVrU3RhcnQgJiYgZCA8IHdlZWtFbmQ7XG4gICAgfSkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHsgZG9uZSwgdGFyZ2V0OiBhY3Rpdml0eS53ZWVrbHlUYXJnZXQgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2Vla1N0YXJ0KGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xuICAgIGNvbnN0IGRpZmYgPSBkLmdldERhdGUoKSAtIGRheSArIChkYXkgPT09IDAgPyAtNiA6IDEpOyAvLyBNb25kYXkgc3RhcnRcbiAgICBkLnNldERhdGUoZGlmZik7XG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICAvLyAtLS0gU3RyZWFrcyAtLS1cblxuICBnZXRBY3Rpdml0eVN0cmVhayhhY3Rpdml0eUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShlZmZlY3RpdmVOb3cpO1xuICAgIHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgY29uc3QgY29tcGxldGVkRGF0ZXMgPSBjb21wc1xuICAgICAgLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpXG4gICAgICAubWFwKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkKSA9PiAhaXNOYU4oZC5nZXRUaW1lKCkpICYmIGQgPD0gdG9kYXkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5nZXRUaW1lKCkgLSBhLmdldFRpbWUoKSk7XG5cbiAgICBpZiAoY29tcGxldGVkRGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcblxuICAgIGxldCBzdHJlYWsgPSAwO1xuICAgIGNvbnN0IGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGNvbXBsZXRlZERhdGVzWzBdKTtcbiAgICBmb3IgKGNvbnN0IGRhdGUgb2YgY29tcGxldGVkRGF0ZXMpIHtcbiAgICAgIGlmIChkYXRlLmdldFRpbWUoKSA9PT0gY2hlY2tEYXRlLmdldFRpbWUoKSkge1xuICAgICAgICBzdHJlYWsrKztcbiAgICAgICAgY2hlY2tEYXRlLnNldERhdGUoY2hlY2tEYXRlLmdldERhdGUoKSAtIDEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRlIDwgY2hlY2tEYXRlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyZWFrO1xuICB9XG5cbiAgZ2V0T3ZlcmFsbFN0cmVhaygpOiBudW1iZXIge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG4gICAgY29uc3Qgc3RyZWFrcyA9IGFjdGl2aXRpZXMubWFwKChhKSA9PiB0aGlzLmdldEFjdGl2aXR5U3RyZWFrKGEuaWQpKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgLi4uc3RyZWFrcyk7XG4gIH1cblxuICAvLyAtLS0gQW5hbHl0aWNzIC0tLVxuXG4gIGdldFRvdGFsQ29tcGxldGlvbnMoKTogbnVtYmVyIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICB0b3RhbCArPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIGdldERheXNPZlByZXNlbmNlKCk6IG51bWJlciB7XG4gICAgY29uc3QgZGF5c1NldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICBmb3IgKGNvbnN0IGMgb2YgY29tcHMpIHtcbiAgICAgICAgaWYgKGMuY29tcGxldGVkKSBkYXlzU2V0LmFkZChjLmRhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF5c1NldC5zaXplO1xuICB9XG5cbiAgLy8gLS0tIENhdGVnb3J5IFhQICYgTGV2ZWxzIC0tLVxuXG4gIGdldENhdGVnb3J5WFAoY2F0ZWdvcnk6IENhdGVnb3J5KTogbnVtYmVyIHtcbiAgICBjb25zdCB4cFBlciA9IHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbjtcbiAgICBsZXQgeHAgPSB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFBbY2F0ZWdvcnldID8/IDA7XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgaWYgKGFjdGl2aXR5LmNhdGVnb3J5ICE9PSBjYXRlZ29yeSkgY29udGludWU7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICB4cCA9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aCAqIHhwUGVyO1xuICAgIH1cbiAgICByZXR1cm4geHA7XG4gIH1cblxuICBnZXRDYXRlZ29yeUxldmVsKGNhdGVnb3J5OiBDYXRlZ29yeSk6IENhdGVnb3J5TGV2ZWwge1xuICAgIGNvbnN0IHhwID0gdGhpcy5nZXRDYXRlZ29yeVhQKGNhdGVnb3J5KTtcbiAgICBjb25zdCBsZXZlbCA9IE1hdGguZmxvb3IoeHAgLyAxMDApO1xuICAgIGNvbnN0IHByb2dyZXNzVG9OZXh0ID0geHAgJSAxMDA7XG4gICAgcmV0dXJuIHsgY2F0ZWdvcnksIHhwLCBsZXZlbCwgcHJvZ3Jlc3NUb05leHQgfTtcbiAgfVxuXG4gIGdldEFsbENhdGVnb3J5TGV2ZWxzKCk6IENhdGVnb3J5TGV2ZWxbXSB7XG4gICAgcmV0dXJuIChbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKS5tYXAoKGMpID0+IHRoaXMuZ2V0Q2F0ZWdvcnlMZXZlbChjKSk7XG4gIH1cblxuICBnZXRFdWRhaW1vbmlhSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wubGV2ZWwsIDApO1xuICB9XG5cbiAgZ2V0Q2hhcHRlcigpOiB7IG51bWJlcjogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuICAgIGNvbnN0IGNoYXB0ZXJOdW0gPSBNYXRoLm1pbigxMCwgTWF0aC5mbG9vcihpbmRleCAvIDEwKSArIDEpO1xuICAgIGNvbnN0IG5hbWUgPSBDSEFQVEVSX05BTUVTW2NoYXB0ZXJOdW1dID8/IFwiSW5pdGlhdGVcIjtcbiAgICByZXR1cm4geyBudW1iZXI6IGNoYXB0ZXJOdW0sIG5hbWUgfTtcbiAgfVxuXG4gIGdldEV1ZGFpbW9uaWFQcm9ncmVzcygpOiBudW1iZXIge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgICByZXR1cm4gKGluZGV4ICUgMTApICogMTA7IC8vIDAtMTAwIHByb2dyZXNzIHdpdGhpbiBjaGFwdGVyXG4gIH1cblxuICAvLyAtLS0gRHluYW1pYyBUaXRsZSAtLS1cblxuICBnZXREeW5hbWljVGl0bGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKSByZXR1cm4gdGhpcy5zZXR0aW5ncy50aXRsZU92ZXJyaWRlO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gdGhpcy5nZXRBbGxDYXRlZ29yeUxldmVscygpO1xuICAgIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSB0aGlzLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5Q29tcGxldGlvbnM6IFJlY29yZDxDYXRlZ29yeSwgbnVtYmVyPiA9IHsgYm9keTogMCwgbWluZDogMCwgc3Bpcml0OiAwIH07XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIGNhdGVnb3J5Q29tcGxldGlvbnNbYWN0aXZpdHkuY2F0ZWdvcnldICs9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbCA9IE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlDb21wbGV0aW9ucykucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgaWYgKHRvdGFsID09PSAwKSByZXR1cm4gXCJJbml0aWF0ZVwiO1xuXG4gICAgY29uc3Qgd2VpZ2h0czogUmVjb3JkPENhdGVnb3J5LCBudW1iZXI+ID0ge1xuICAgICAgYm9keTogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5ib2R5IC8gdG90YWwgOiAwLFxuICAgICAgbWluZDogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5taW5kIC8gdG90YWwgOiAwLFxuICAgICAgc3Bpcml0OiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLnNwaXJpdCAvIHRvdGFsIDogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgdGllciA9IHRvdGFsQ29tcGxldGlvbnMgPCA1MCA/IFwibGlnaHRcIiA6IHRvdGFsQ29tcGxldGlvbnMgPCAyMDAgPyBcIm1pZFwiIDogXCJoZWF2eVwiO1xuXG4gICAgLy8gQ2hlY2sgc2luZ2xlIGRvbWluYW50ICg+PSA3MCUpXG4gICAgZm9yIChjb25zdCBjYXQgb2YgW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSkge1xuICAgICAgaWYgKHdlaWdodHNbY2F0XSA+PSAwLjcwKSB7XG4gICAgICAgIHJldHVybiBTSU5HTEVfRE9NSU5BTlRfVElUTEVTW2NhdF0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYmFsYW5jZWQgKGFsbCA+PSAyNSUpXG4gICAgaWYgKHdlaWdodHMuYm9keSA+PSAwLjI1ICYmIHdlaWdodHMubWluZCA+PSAwLjI1ICYmIHdlaWdodHMuc3Bpcml0ID49IDAuMjUpIHtcbiAgICAgIHJldHVybiBCQUxBTkNFRF9USVRMRVNbdGllcl0gPz8gXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCI7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdHdvLWNhdGVnb3J5IGNvbWJpbmF0aW9ucyAoZWFjaCA+PSAzMCUpXG4gICAgY29uc3QgY2F0cyA9IChbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKVxuICAgICAgLmZpbHRlcigoYykgPT4gd2VpZ2h0c1tjXSA+PSAwLjMwKVxuICAgICAgLnNvcnQoKTtcblxuICAgIGlmIChjYXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3Qga2V5ID0gY2F0cy5qb2luKFwiK1wiKTtcbiAgICAgIHJldHVybiBUV09fQ0FURUdPUllfVElUTEVTW2tleV0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2s6IHVzZSBkb21pbmFudCBjYXRlZ29yeVxuICAgIGNvbnN0IGRvbWluYW50ID0gKE9iamVjdC5lbnRyaWVzKHdlaWdodHMpIGFzIFtDYXRlZ29yeSwgbnVtYmVyXVtdKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVswXVswXTtcbiAgICByZXR1cm4gU0lOR0xFX0RPTUlOQU5UX1RJVExFU1tkb21pbmFudF0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gIH1cblxuICAvLyAtLS0gU3VnZ2VzdGlvbiBBbGdvcml0aG0gKFdhdGVyZmFsbCkgLS0tXG5cbiAgZ2V0U3VnZ2VzdGlvbigpOiBEaXJlY3RpdmVTdWdnZXN0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcbiAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgLy8gMS4gREVBVEggQ0hFQ0tcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oYWN0aXZpdGllc1swXSwgXCJkZWF0aFwiLCBcIkVzY2FwZSBUYXJ0YXJ1cyBcdTIwMTQgY29tcGxldGUgeW91ciBwZW5hbmNlLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID49IDIpIHtcbiAgICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICAgIGlmIChuZWdsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24obmVnbGVjdGVkWzBdLCBcImRlYXRoXCIsIFwiRGVhdGggbG9vbXMuIEFjdCBub3cgb3IgZGVzY2VuZCB0byBUYXJ0YXJ1cy5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gQk9TUyBGSU5JU0hcbiAgICBpZiAodGhpcy5ib3NzRW5naW5lLmlzRGFuZ2VyWm9uZSgpKSB7XG4gICAgICBjb25zdCBiZXN0ID0gdGhpcy5nZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllcyk7XG4gICAgICBpZiAoYmVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oYmVzdCwgXCJib3NzXCIsIFwiT25lIGZpbmFsIGJsb3cgcmVtYWlucy4gRmluaXNoIHRoZSBiZWFzdC5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gTkVHTEVDVCArIFBSSU9SSVRZXG4gICAgY29uc3QgbmVnbGVjdGVkID0gdGhpcy5nZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXMpO1xuICAgIGlmIChuZWdsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wID0gdGhpcy5hcHBseVJ1bGVzKG5lZ2xlY3RlZCk7XG4gICAgICBpZiAodG9wKSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKHRvcC5pZCk7XG4gICAgICAgIGNvbnN0IGxvcmUgPSBORUdMRUNUX0xPUkVbdG9wLmlkXSA/PyBgJHtkYXlzfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gO1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odG9wLCBcIm5lZ2xlY3RcIiwgbG9yZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gV0VFS0xZIENBVENILVVQXG4gICAgY29uc3QgYmVoaW5kU2NoZWR1bGUgPSB0aGlzLmdldEJlaGluZFNjaGVkdWxlQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAoYmVoaW5kU2NoZWR1bGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wID0gYmVoaW5kU2NoZWR1bGVbMF07XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3ModG9wLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0b3AsIFwid2Vla2x5XCIsIGBCZWhpbmQgc2NoZWR1bGU6ICR7cHJvZ3Jlc3MuZG9uZX0vJHtwcm9ncmVzcy50YXJnZXR9IHRoaXMgd2Vlay5gKTtcbiAgICB9XG5cbiAgICAvLyA1LiBDSEFJTiBDSEVDS1xuICAgIGNvbnN0IGNoYWluZWQgPSB0aGlzLmdldENoYWluZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmIChjaGFpbmVkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihjaGFpbmVkWzBdLCBcImNoYWluXCIsIFwiWW91ciBwcmVyZXF1aXNpdGUgaXMgZG9uZS4gVGltZSBmb3IgdGhlIG5leHQgc3RlcC5cIik7XG4gICAgfVxuXG4gICAgLy8gNi4gVElNRS1CQVNFRFxuICAgIGNvbnN0IHRpbWVCYXNlZCA9IHRoaXMuZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAodGltZUJhc2VkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0aW1lQmFzZWRbMF0sIFwidGltZVwiLCBcIlRoZSB0aW1lIGlzIHJpZ2h0LiBCZWdpbi5cIik7XG4gICAgfVxuXG4gICAgLy8gNy4gQkFMQU5DRUQgRkFMTEJBQ0tcbiAgICBjb25zdCBsb25nZXN0R2FwID0gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShiLmlkKSAtIHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYS5pZCkpO1xuXG4gICAgaWYgKGxvbmdlc3RHYXAubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGxvbmdlc3RHYXBbMF0sIFwiYmFsYW5jZWRcIiwgXCJCYWxhbmNlIHlvdXIgcGF0aC4gVGhpcyBoYXMgd2FpdGVkIGxvbmdlc3QuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFN1Z2dlc3Rpb24oXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICAgIHJlYXNvbjogUHJpb3JpdHlSZWFzb24sXG4gICAgbG9yZVRleHQ6IHN0cmluZ1xuICApOiBEaXJlY3RpdmVTdWdnZXN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICByZWFzb24sXG4gICAgICBkYXlzU2luY2VMYXN0RG9uZTogdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eS5pZCksXG4gICAgICBsb3JlVGV4dCxcbiAgICAgIHByaW9yaXR5OiBhY3Rpdml0eS5wcmlvcml0eSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhLmlkKTtcbiAgICAgICAgcmV0dXJuIGRheXMgPj0gYS5uZWdsZWN0VGhyZXNob2xkICYmICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UnVsZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICAvLyBDaGVjayBhbHRlcm5hdGluZyBydWxlXG4gICAgICBpZiAoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpIHtcbiAgICAgICAgY29uc3QgYWx0RGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICBjb25zdCB0aGlzRGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgICAgICAvLyBJZiB0aGlzIHdhcyBkb25lIG1vcmUgcmVjZW50bHkgdGhhbiBhbHRlcm5hdGUsIHByZWZlciBhbHRlcm5hdGVcbiAgICAgICAgaWYgKHRoaXNEYXlzIDwgYWx0RGF5cykge1xuICAgICAgICAgIGNvbnN0IGFsdCA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCk7XG4gICAgICAgICAgaWYgKGFsdCAmJiBhbHQuZW5hYmxlZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhbHQuaWQpKSByZXR1cm4gYWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGJsb2NraW5nIHJ1bGVzXG4gICAgICBpZiAoYWN0aXZpdHkuYmxvY2tzICYmIGFjdGl2aXR5LmJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRoaXMgYWN0aXZpdHkgYmxvY2tzIG90aGVycyB3aGVuIG5lZ2xlY3RlZCBcdTIwMTQgaXQgc2hvdWxkIGJlIHByaW9yaXRpemVkXG4gICAgICAgIHJldHVybiBhY3Rpdml0eTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZpdGllc1swXSA/PyBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgY29uc3Qgbm90RG9uZSA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgaWYgKG5vdERvbmUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbm90RG9uZS5zb3J0KChhLCBiKSA9PiBiLmRhbWFnZVBlckNvbXBsZXRpb24gLSBhLmRhbWFnZVBlckNvbXBsZXRpb24pWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZWZmZWN0aXZlTm93LmdldERheSgpOyAvLyAwPVN1blxuICAgIGNvbnN0IGFkanVzdGVkRGF5ID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlazsgLy8gTW9uPTFcbiAgICBjb25zdCByZW1haW5pbmdEYXlzID0gNyAtIGFkanVzdGVkRGF5ICsgMTtcblxuICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyhhLmlkKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gcHJvZ3Jlc3MudGFyZ2V0IC0gcHJvZ3Jlc3MuZG9uZTtcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZyA+IDAgJiYgcmVtYWluaW5nID49IHJlbWFpbmluZ0RheXM7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKCFhLmNoYWluQWZ0ZXIgfHwgdGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuaXNEb25lVG9kYXkoYS5jaGFpbkFmdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgY29uc3QgaG91ciA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IGN1cnJlbnRQZXJpb2QgPSBob3VyIDwgbW9ybmluZ0VuZCA/IFwibW9ybmluZ1wiIDpcbiAgICAgIGhvdXIgPCBhZnRlcm5vb25FbmQgPyBcImFmdGVybm9vblwiIDpcbiAgICAgIGhvdXIgPCBldmVuaW5nRW5kID8gXCJldmVuaW5nXCIgOiBcImFueXRpbWVcIjtcblxuICAgIC8vIEZpcnN0IGNoZWNrIHRpbWUgb3ZlcnJpZGVzXG4gICAgY29uc3Qgb3ZlcnJpZGRlbiA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFhLnRpbWVPdmVycmlkZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGhvdXIgPj0gYS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyICYmIGhvdXIgPCBhLnRpbWVPdmVycmlkZS5lbmRIb3VyO1xuICAgIH0pO1xuICAgIGlmIChvdmVycmlkZGVuLmxlbmd0aCA+IDApIHJldHVybiBvdmVycmlkZGVuLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIC8vIFRoZW4gY2hlY2sgcHJlZmVycmVkIHRpbWVcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkgJiYgKGEucHJlZmVycmVkVGltZSA9PT0gY3VycmVudFBlcmlvZCB8fCBhLnByZWZlcnJlZFRpbWUgPT09IFwiYW55dGltZVwiKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICAvLyAtLS0gRGF5IE1hcCBHZW5lcmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgY2FsZW5kYXJFbnRyaWVzOiBEYXlNYXBFbnRyeVtdID0gW107XG5cbiAgc2V0Q2FsZW5kYXJFbnRyaWVzKGVudHJpZXM6IERheU1hcEVudHJ5W10pOiB2b2lkIHtcbiAgICB0aGlzLmNhbGVuZGFyRW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXREYXlNYXAoKTogRGF5TWFwRW50cnlbXSB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKS5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kLCBidWZmZXJNaW51dGVzIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IHRpbWVTbG90czogeyBwZXJpb2Q6IHN0cmluZzsgc3RhcnRIb3VyOiBudW1iZXI7IGVuZEhvdXI6IG51bWJlciB9W10gPSBbXG4gICAgICB7IHBlcmlvZDogXCJtb3JuaW5nXCIsIHN0YXJ0SG91cjogbW9ybmluZ1N0YXJ0LCBlbmRIb3VyOiBtb3JuaW5nRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJhZnRlcm5vb25cIiwgc3RhcnRIb3VyOiBtb3JuaW5nRW5kLCBlbmRIb3VyOiBhZnRlcm5vb25FbmQgfSxcbiAgICAgIHsgcGVyaW9kOiBcImV2ZW5pbmdcIiwgc3RhcnRIb3VyOiBhZnRlcm5vb25FbmQsIGVuZEhvdXI6IGV2ZW5pbmdFbmQgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgZW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gMS4gUGxhY2UgdGltZS1vdmVycmlkZSBhY3Rpdml0aWVzIGZpcnN0XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LnRpbWVPdmVycmlkZSkgY29udGludWU7XG4gICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgc3RhcnRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyLFxuICAgICAgICBlbmRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuZW5kSG91cixcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ0aW1lXCIsXG4gICAgICB9KTtcbiAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgIH1cblxuICAgIC8vIDIuIFBsYWNlIG5lZ2xlY3RlZCBhY3Rpdml0aWVzIGluIHRoZWlyIHByZWZlcnJlZCBzbG90c1xuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKVxuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBuZWdsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIm5lZ2xlY3RcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFBsYWNlIHJlbWFpbmluZyB3ZWVrbHktdGFyZ2V0IGFjdGl2aXRpZXNcbiAgICBjb25zdCByZW1haW5pbmcgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhc2NoZWR1bGVkLmhhcyhhLmlkKSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKGEuaWQpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MuZG9uZSA8IHByb2dyZXNzLnRhcmdldDtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZW1haW5pbmcpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIndlZWtseVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2NoZWR1bGVkLmFkZChhY3Rpdml0eS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgY2FsZW5kYXIgdGFzayBlbnRyaWVzXG4gICAgZm9yIChjb25zdCBjYWxFbnRyeSBvZiB0aGlzLmNhbGVuZGFyRW50cmllcykge1xuICAgICAgZW50cmllcy5wdXNoKGNhbEVudHJ5KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IGJ5IHN0YXJ0IHRpbWVcbiAgICBlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRIb3VyIC0gYi5zdGFydEhvdXIpO1xuXG4gICAgLy8gTWFyayBkb25lIGFjdGl2aXRpZXMgKG9ubHkgZm9yIG5vbi1jYWxlbmRhciBlbnRyaWVzKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayAmJiB0aGlzLmlzRG9uZVRvZGF5KGVudHJ5LmFjdGl2aXR5SWQpKSB7XG4gICAgICAgIGVudHJ5LnN0YXR1cyA9IFwiZG9uZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2xvdEZvckFjdGl2aXR5KFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdLFxuICAgIGV4aXN0aW5nOiBEYXlNYXBFbnRyeVtdLFxuICAgIGJ1ZmZlck1pbnV0ZXM6IG51bWJlclxuICApOiB7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfSB8IG51bGwge1xuICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbiAvIDYwO1xuICAgIGNvbnN0IGJ1ZmZlckhvdXJzID0gYnVmZmVyTWludXRlcyAvIDYwO1xuXG4gICAgLy8gRmluZCBwcmVmZXJyZWQgc2xvdFxuICAgIGNvbnN0IHByZWZlcnJlZFNsb3QgPSB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IGFjdGl2aXR5LnByZWZlcnJlZFRpbWUpXG4gICAgICA/PyB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IFwiYW55dGltZVwiKVxuICAgICAgPz8gdGltZVNsb3RzWzBdO1xuXG4gICAgLy8gRmluZCBmaXJzdCBhdmFpbGFibGUgdGltZSBpbiBwcmVmZXJyZWQgc2xvdFxuICAgIGxldCBjYW5kaWRhdGVTdGFydCA9IHByZWZlcnJlZFNsb3Quc3RhcnRIb3VyO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHByZWZlcnJlZFNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgY2FuZGlkYXRlU3RhcnQgPSBlbnRyeS5lbmRIb3VyICsgYnVmZmVySG91cnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FuZGlkYXRlRW5kID0gY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzO1xuICAgIGlmIChjYW5kaWRhdGVFbmQgPD0gcHJlZmVycmVkU2xvdC5lbmRIb3VyKSB7XG4gICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVFbmQgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgYW55IHNsb3RcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgdGltZVNsb3RzKSB7XG4gICAgICBpZiAoc2xvdCA9PT0gcHJlZmVycmVkU2xvdCkgY29udGludWU7XG4gICAgICBjYW5kaWRhdGVTdGFydCA9IHNsb3Quc3RhcnRIb3VyO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgICBpZiAoZW50cnkuc3RhcnRIb3VyIDwgc2xvdC5lbmRIb3VyICYmIGVudHJ5LmVuZEhvdXIgPiBjYW5kaWRhdGVTdGFydCkge1xuICAgICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIDw9IHNsb3QuZW5kSG91cikge1xuICAgICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVTdGFydCArIGR1cmF0aW9uSG91cnMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgRGF0YSBmb3IgQmFyIENoYXJ0IC0tLVxuXG4gIGdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTogQXJyYXk8eyBkYXk6IHN0cmluZzsgZGF0ZTogc3RyaW5nOyBjb21wbGV0aW9uczogTWFwPENhdGVnb3J5LCBudW1iZXI+IH0+IHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3QgZGF5cyA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgaSk7XG4gICAgICBjb25zdCBkYXRlU3RyID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGRheUNvbXBsZXRpb25zID0gbmV3IE1hcDxDYXRlZ29yeSwgbnVtYmVyPigpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGRhdGVTdHIgJiYgYy5jb21wbGV0ZWQpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYXlDb21wbGV0aW9ucy5nZXQoYWN0aXZpdHkuY2F0ZWdvcnkpID8/IDA7XG4gICAgICAgICAgZGF5Q29tcGxldGlvbnMuc2V0KGFjdGl2aXR5LmNhdGVnb3J5LCBjdXJyZW50ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goeyBkYXk6IGRheXNbaV0sIGRhdGU6IGRhdGVTdHIsIGNvbXBsZXRpb25zOiBkYXlDb21wbGV0aW9ucyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk6IG51bWJlciB7XG4gICAgY29uc3Qgd2Vla2x5ID0gdGhpcy5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gICAgcmV0dXJuIHdlZWtseS5maWx0ZXIoKGQpID0+IHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICByZXR1cm4gdG90YWwgPiAwO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuXG4gIGdldEJlc3REYXlUaGlzV2VlaygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIGxldCBiZXN0ID0gd2Vla2x5WzBdO1xuICAgIGxldCBiZXN0VG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgZCBvZiB3ZWVrbHkpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICBpZiAodG90YWwgPiBiZXN0VG90YWwpIHtcbiAgICAgICAgYmVzdFRvdGFsID0gdG90YWw7XG4gICAgICAgIGJlc3QgPSBkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVzdFRvdGFsID4gMCA/IGJlc3QuZGF5IDogXCItLVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDYWxlbmRhciBFbmdpbmVcbi8vIFJlYWRzIHRhc2tzIGZyb20gRGFpbHkgTm90ZXMsIFRhc2tzIHBsdWdpbiwgYW5kIFF1aWNrIFRhc2tzXG4vLyBNZXJnZXMgdGhlbSBpbnRvIENhbGVuZGFyVGFza1tdIGZvciBEYXkgTWFwIGludGVncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7XG4gIE9sZW5TZXR0aW5ncyxcbiAgQ2FsZW5kYXJUYXNrLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2FsZW5kYXJUYXNrU291cmNlLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRW5naW5lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuICBwcml2YXRlIHRvZGF5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIG5vdzogRGF0ZSkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRoaXMudG9kYXkgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIE1haW4gZW50cnk6IGdldCBhbGwgY2FsZW5kYXIgdGFza3MgZm9yIHRvZGF5IC0tLVxuXG4gIGdldEFsbFRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXREYWlseU5vdGVUYXNrcygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFRhc2tzUGx1Z2luVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFF1aWNrVGFza3MoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIENvbnZlcnQgQ2FsZW5kYXJUYXNrcyB0byBEYXlNYXBFbnRyaWVzIC0tLVxuXG4gIHRvRGF5TWFwRW50cmllcyh0YXNrczogQ2FsZW5kYXJUYXNrW10pOiBEYXlNYXBFbnRyeVtdIHtcbiAgICByZXR1cm4gdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBzdGFydEhvdXIgPSB0YXNrLnRpbWUgPyB0aGlzLnBhcnNlVGltZVRvSG91cih0YXNrLnRpbWUpIDogOTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSAodGFzay5kdXJhdGlvbiA/PyAzMCkgLyA2MDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZpdHlJZDogYGNhbC0ke3Rhc2suaWR9YCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiB0YXNrLnRpdGxlLFxuICAgICAgICBlbW9qaTogdGhpcy5nZXRTb3VyY2VFbW9qaSh0YXNrLnNvdXJjZSksXG4gICAgICAgIGNhdGVnb3J5OiBcIm1pbmRcIiBhcyBjb25zdCwgLy8gY2FsZW5kYXIgdGFza3MgZGVmYXVsdCB0byBtaW5kXG4gICAgICAgIHN0YXJ0SG91cixcbiAgICAgICAgZW5kSG91cjogc3RhcnRIb3VyICsgZHVyYXRpb25Ib3VycyxcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IHRhc2suZHVyYXRpb24gPz8gMzAsXG4gICAgICAgIHN0YXR1czogdGFzay5kb25lID8gXCJkb25lXCIgYXMgY29uc3QgOiBcInBlbmRpbmdcIiBhcyBjb25zdCxcbiAgICAgICAgaXNDYWxlbmRhclRhc2s6IHRydWUsXG4gICAgICAgIGNhbGVuZGFyU291cmNlOiB0YXNrLnNvdXJjZSxcbiAgICAgICAgY2FsZW5kYXJUYXNrSWQ6IHRhc2suaWQsXG4gICAgICAgIGZpbGVQYXRoOiB0YXNrLmZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiB0YXNrLmxpbmVOdW1iZXIsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBBOiBEYWlseSBOb3RlcyBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGdldERhaWx5Tm90ZVRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBmb2xkZXIgPSB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXI7XG4gICAgaWYgKCFmb2xkZXIpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBGaW5kIHRvZGF5J3MgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IGRhaWx5Tm90ZSA9IGZpbGVzLmZpbmQoKGYpID0+IHtcbiAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBmLmJhc2VuYW1lID09PSB0aGlzLnRvZGF5O1xuICAgIH0pO1xuXG4gICAgaWYgKCFkYWlseU5vdGUpIHJldHVybiBbXTtcblxuICAgIC8vIFJlYWQgY2FjaGVkIGNvbnRlbnQgYW5kIHBhcnNlIHRhc2tzXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShkYWlseU5vdGUpO1xuICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgaWYgKGxpc3RJdGVtLnRhc2sgPT09IHVuZGVmaW5lZCkgY29udGludWU7IC8vIG5vdCBhIGNoZWNrYm94XG5cbiAgICAgIGNvbnN0IGxpbmVTdGFydCA9IGxpc3RJdGVtLnBvc2l0aW9uLnN0YXJ0LmxpbmU7XG5cbiAgICAgIC8vIFJlYWQgdGhlIGxpbmUgY29udGVudCBmcm9tIGNhY2hlIHNlY3Rpb25zXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRMaW5lQ29udGVudChkYWlseU5vdGUsIGxpbmVTdGFydCk7XG4gICAgICBpZiAoIWNvbnRlbnQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUoY29udGVudCk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICBpZDogYGRuLSR7ZGFpbHlOb3RlLnBhdGh9LUwke2xpbmVTdGFydH1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogbGlzdEl0ZW0udGFzayA9PT0gXCJ4XCIgfHwgbGlzdEl0ZW0udGFzayA9PT0gXCJYXCIsXG4gICAgICAgIGZpbGVQYXRoOiBkYWlseU5vdGUucGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogbGluZVN0YXJ0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gUGFyc2UgXCItIFsgXSBUYXNrIG5hbWUgQDE0OjAwIH4zMG1cIiBmb3JtYXRcbiAgcHJpdmF0ZSBwYXJzZVRhc2tMaW5lKGxpbmU6IHN0cmluZyk6IHsgdGl0bGU6IHN0cmluZzsgdGltZT86IHN0cmluZzsgZHVyYXRpb24/OiBudW1iZXIgfSB8IG51bGwge1xuICAgIC8vIFJlbW92ZSBjaGVja2JveCBwcmVmaXg6IFwiLSBbIF0gXCIgb3IgXCItIFt4XSBcIlxuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXlstKl1cXHMqXFxbLj9cXF1cXHMqKC4rKSQvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0ZXh0ID0gbWF0Y2hbMV0udHJpbSgpO1xuXG4gICAgLy8gRXh0cmFjdCBAdGltZSAoZS5nLiwgQDE0OjAwIG9yIEAycG0pXG4gICAgbGV0IHRpbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB0aW1lTWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AKFxcZHsxLDJ9KTooXFxkezJ9KVxcYi8pO1xuICAgIGlmICh0aW1lTWF0Y2gpIHtcbiAgICAgIHRpbWUgPSBgJHt0aW1lTWF0Y2hbMV0ucGFkU3RhcnQoMiwgXCIwXCIpfToke3RpbWVNYXRjaFsyXX1gO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSh0aW1lTWF0Y2hbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJ5IEAycG0gLyBAMTQgZm9ybWF0XG4gICAgICBjb25zdCBzaW1wbGVUaW1lID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSlcXHMqKGFtfHBtKT9cXGIvaSk7XG4gICAgICBpZiAoc2ltcGxlVGltZSkge1xuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KHNpbXBsZVRpbWVbMV0pO1xuICAgICAgICBjb25zdCBwZXJpb2QgPSBzaW1wbGVUaW1lWzJdPy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcInBtXCIgJiYgaG91ciA8IDEyKSBob3VyICs9IDEyO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcImFtXCIgJiYgaG91ciA9PT0gMTIpIGhvdXIgPSAwO1xuICAgICAgICB0aW1lID0gYCR7U3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsIFwiMFwiKX06MDBgO1xuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHNpbXBsZVRpbWVbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IH5kdXJhdGlvbiAoZS5nLiwgfjMwbSwgfjFoLCB+MS41aClcbiAgICBsZXQgZHVyYXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBkdXJhdGlvbk1hdGNoID0gdGV4dC5tYXRjaCgvfihcXGQrKD86XFwuXFxkKyk/KVxccyoobXxtaW58aHxocnxob3VyKXM/XFxiL2kpO1xuICAgIGlmIChkdXJhdGlvbk1hdGNoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoZHVyYXRpb25NYXRjaFsxXSk7XG4gICAgICBjb25zdCB1bml0ID0gZHVyYXRpb25NYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgZHVyYXRpb24gPSB1bml0LnN0YXJ0c1dpdGgoXCJoXCIpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIDYwKSA6IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShkdXJhdGlvbk1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgYW55IHRyYWlsaW5nL2xlYWRpbmcgd2hpdGVzcGFjZSBvciBkYXNoZXNcbiAgICBjb25zdCB0aXRsZSA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xuICAgIGlmICghdGl0bGUpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHRpbWUsIGR1cmF0aW9uIH07XG4gIH1cblxuICBwcml2YXRlIGdldExpbmVDb250ZW50KGZpbGU6IFRGaWxlLCBsaW5lTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBVc2UgdGhlIG1ldGFkYXRhQ2FjaGUgc2VjdGlvbnMgdG8gcmVjb25zdHJ1Y3QgbGluZSBjb250ZW50XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBpZiAoIWNhY2hlKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIFdlIG5lZWQgdG8gcmVhZCBmcm9tIHRoZSB2YXVsdCBjYWNoZSBcdTIwMTQgdHJ5IGdldHRpbmcgY29udGVudCB2aWEgc2VjdGlvbnNcbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBzeW5jaHJvbm91c2x5IHJlYWQgZmlsZSBjb250ZW50LCB1c2UgdGhlIGNhY2hlZCBmcm9udG1hdHRlclxuICAgIC8vIGFuZCBsaXN0IGl0ZW1zIHRvIGJ1aWxkIHdoYXQgd2UgbmVlZFxuICAgIC8vIEFjdHVhbGx5LCBsaXN0IGl0ZW1zIGluIE9ic2lkaWFuIGNhY2hlIGRvbid0IGluY2x1ZGUgdGhlIHRleHQuXG4gICAgLy8gV2UnbGwgbmVlZCB0byByZWFkIHRoZSBmaWxlIGNvbnRlbnQuIFN0b3JlIGl0IGluIGEgbWFwIGR1cmluZyBnYXRoZXIgcGhhc2UuXG4gICAgLy8gRm9yIG5vdywgcmV0dXJuIG51bGwgXHUyMDE0IHRoZSBEYXNoYm9hcmRWaWV3IHdpbGwgcHJlLXJlYWQgZGFpbHkgbm90ZSBjb250ZW50XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDYWxsZWQgYnkgRGFzaGJvYXJkVmlldyB3aXRoIHByZS1yZWFkIGZpbGUgY29udGVudFxuICBnZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQ6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZyk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAvLyBNYXRjaCB0YXNrIGxpbmVzOiAtIFsgXSBvciAtIFt4XVxuICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2ZpbGVQYXRofS1MJHtpfWAsXG4gICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJkYWlseS1ub3RlXCIsXG4gICAgICAgIGRhdGU6IHRoaXMudG9kYXksXG4gICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBpc0RvbmUsXG4gICAgICAgIGZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiBpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW4gSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXRUYXNrc1BsdWdpblRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICAvLyBDaGVjayBpZiBUYXNrcyBwbHVnaW4gaXMgaW5zdGFsbGVkXG4gICAgY29uc3QgdGFza3NQbHVnaW4gPSAodGhpcy5hcHAgYXMgYW55KS5wbHVnaW5zPy5wbHVnaW5zPy5bXCJvYnNpZGlhbi10YXNrcy1wbHVnaW5cIl07XG4gICAgaWYgKCF0YXNrc1BsdWdpbikgcmV0dXJuIFtdO1xuXG4gICAgLy8gVGFza3MgcGx1Z2luIHN0b3JlcyB0YXNrcyB2aWEgbWV0YWRhdGEgY2FjaGVcbiAgICAvLyBXZSBzY2FuIGFsbCBmaWxlcyBmb3IgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgbWF0Y2hpbmcgdG9kYXlcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgY29udGludWU7XG5cbiAgICAgIGZvciAoY29uc3QgbGlzdEl0ZW0gb2YgY2FjaGUubGlzdEl0ZW1zKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFRhc2tzIHBsdWdpbiB1c2VzIGVtb2ppLWJhc2VkIGRhdGVzIGluIHRoZSB0ZXh0OlxuICAgICAgICAvLyBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERCBmb3IgZHVlIGRhdGVcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZWFkIHRoZSBmaWxlIHRvIGNoZWNrLCBidXQgd2UgY2FuIHVzZSB0aGUgZnJvbnRtYXR0ZXItYmFzZWRcbiAgICAgICAgLy8gYXBwcm9hY2ggb3IgdGhlIHBvc2l0aW9uIHRvIGdldCB0aGUgdGV4dC5cbiAgICAgICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luYy1yZWFkLCB3ZSdsbCBjaGVjayBpZiBwb3NpdGlvbnMgbWVudGlvbiB0b2RheS5cbiAgICAgICAgLy8gRm9yIG5vdywgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IGNoZWNrIHVzaW5nIGNhY2hlIGRhdGEuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtc2Nhbm5lZCB0YXNrIGRhdGFcbiAgZ2V0VGFza3NQbHVnaW5UYXNrc0Zyb21GaWxlcyhmaWxlczogeyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9W10pOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGxpbmVzID0gZmlsZS5jb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBUYXNrcyBwbHVnaW4gZHVlIGRhdGU6IFx1RDgzRFx1RENDNSBZWVlZLU1NLUREXG4gICAgICAgIGNvbnN0IGR1ZU1hdGNoID0gbGluZS5tYXRjaCgvXFx1ezFGNEM1fVxccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoIWR1ZU1hdGNoIHx8IGR1ZU1hdGNoWzFdICE9PSB0aGlzLnRvZGF5KSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICAgIGlmICghcGFyc2VkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBBbHNvIGNoZWNrIGZvciBzY2hlZHVsZWQgZGF0ZSBcdTIzRjNcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVkTWF0Y2ggPSBsaW5lLm1hdGNoKC9cXHUyM0YzXFxzKihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvdSk7XG4gICAgICAgIGlmIChzY2hlZHVsZWRNYXRjaCAmJiBzY2hlZHVsZWRNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgaXNEb25lID0gL15bLSpdXFxzKlxcW1t4WF1cXF0vLnRlc3QobGluZSk7XG5cbiAgICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgICAgaWQ6IGB0cC0ke2ZpbGUucGF0aH0tTCR7aX1gLFxuICAgICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUucmVwbGFjZSgvW1xcdXsxRjRDNX1cXHUyM0YzXVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS9ndSwgXCJcIikudHJpbSgpLFxuICAgICAgICAgIHNvdXJjZTogXCJ0YXNrcy1wbHVnaW5cIixcbiAgICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBDOiBCdWlsdC1pbiBRdWljayBUYXNrcyAtLS1cblxuICBwcml2YXRlIGdldFF1aWNrVGFza3MoKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgIC5maWx0ZXIoKHF0KSA9PiBxdC5kYXRlID09PSB0aGlzLnRvZGF5KVxuICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgIGlkOiBgcXQtJHtxdC5pZH1gLFxuICAgICAgICB0aXRsZTogcXQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgQ2FsZW5kYXJUYXNrU291cmNlLFxuICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICB0aW1lOiBxdC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcXQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICB9KSk7XG4gIH1cblxuICAvLyAtLS0gQ29tcGxldGlvbiBoYW5kbGVycyAtLS1cblxuICAvLyBUb2dnbGUgYSBkYWlseSBub3RlIHRhc2sgZG9uZS91bmRvbmUgYnkgcmV3cml0aW5nIHRoZSBjaGVja2JveFxuICBhc3luYyB0b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoOiBzdHJpbmcsIGxpbmVOdW1iZXI6IG51bWJlciwgZG9uZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgIGlmIChsaW5lTnVtYmVyID49IGxpbmVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVOdW1iZXJdO1xuICAgIGlmIChkb25lKSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiW3hdXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiWyBdXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBsaW5lcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBhIFRhc2tzIHBsdWdpbiB0YXNrXG4gIGFzeW5jIHRvZ2dsZVRhc2tzUGx1Z2luVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBTYW1lIG1lY2hhbmlzbSBhcyBkYWlseSBub3RlcyBcdTIwMTQganVzdCB0b2dnbGUgdGhlIGNoZWNrYm94XG4gICAgYXdhaXQgdGhpcy50b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoLCBsaW5lTnVtYmVyLCBkb25lKTtcbiAgfVxuXG4gIC8vIFBvc3Rwb25lIGEgdGFzayB0byB0b21vcnJvd1xuICBhc3luYyBwb3N0cG9uZVRhc2sodGFzazogQ2FsZW5kYXJUYXNrKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0aGlzLnRvZGF5KTtcbiAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuICAgIGNvbnN0IHRvbW9ycm93U3RyID0gdG9tb3Jyb3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICBpZiAodGFzay5zb3VyY2UgPT09IFwicXVpY2stdGFza1wiKSB7XG4gICAgICAvLyBVcGRhdGUgaW4gc2V0dGluZ3NcbiAgICAgIGNvbnN0IHF0ID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbmQoXG4gICAgICAgIChxKSA9PiBgcXQtJHtxLmlkfWAgPT09IHRhc2suaWQgfHwgcS5pZCA9PT0gdGFzay5pZC5yZXBsYWNlKFwicXQtXCIsIFwiXCIpXG4gICAgICApO1xuICAgICAgaWYgKHF0KSB7XG4gICAgICAgIHF0LnBvc3Rwb25lZEZyb20gPSBxdC5wb3N0cG9uZWRGcm9tID8/IHF0LmRhdGU7XG4gICAgICAgIHF0LmRhdGUgPSB0b21vcnJvd1N0cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhc2suc291cmNlID09PSBcInRhc2tzLXBsdWdpblwiICYmIHRhc2suZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0YXNrLmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZmlsZVxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0YXNrLmZpbGVQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgIGlmICh0YXNrLmxpbmVOdW1iZXIgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgbGluZXNbdGFzay5saW5lTnVtYmVyXSA9IGxpbmVzW3Rhc2subGluZU51bWJlcl0ucmVwbGFjZShcbiAgICAgICAgICAvXFx1ezFGNEM1fVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS91LFxuICAgICAgICAgIGBcXHV7MUY0QzV9ICR7dG9tb3Jyb3dTdHJ9YFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEhlbHBlcnMgLS0tXG5cbiAgcHJpdmF0ZSBwYXJzZVRpbWVUb0hvdXIodGltZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBbaCwgbV0gPSB0aW1lLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gaCArIChtID8/IDApIC8gNjA7XG4gIH1cblxuICBwcml2YXRlIGdldFNvdXJjZUVtb2ppKHNvdXJjZTogQ2FsZW5kYXJUYXNrU291cmNlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogcmV0dXJuIFwiXFx1ezFGNEREfVwiO1xuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOiByZXR1cm4gXCJcXHUyNjExXFx1RkUwRlwiO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogcmV0dXJuIFwiXFx1MjZBMVwiO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgSGVybyBDYXJkIENvbXBvbmVudFxuLy8gRnVsbC13aWR0aCBibHVycmVkIGJnIHdpdGggZ3JlZXRpbmcsIHJhbmsgYmFkZ2UsIGFjdGlvbiBidXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5pbXBvcnQgeyB0b1JvbWFuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVyb0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBoZXJvID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm9cIiB9KTtcbiAgaGVyby5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gQmFja2dyb3VuZCBpbWFnZVxuICBpZiAoc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpIHtcbiAgICBjb25zdCBiZyA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1iZ1wiIH0pO1xuICAgIGNvbnN0IHZhdWx0UGF0aCA9IHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kO1xuICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3ZhdWx0UGF0aH1cIilgO1xuICB9XG5cbiAgLy8gRGFyayB2aWduZXR0ZSBvdmVybGF5XG4gIGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1vdmVybGF5XCIgfSk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWNvbnRlbnRcIiB9KTtcblxuICAvLyBUaW1lLWJhc2VkIGdyZWV0aW5nXG4gIGNvbnN0IGdyZWV0aW5nID0gZ2V0R3JlZXRpbmcoc2V0dGluZ3MpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWdyZWV0aW5nXCIsXG4gICAgdGV4dDogYCR7Z3JlZXRpbmd9LCAke3NldHRpbmdzLnVzZXJOYW1lfS5gLFxuICB9KTtcblxuICAvLyBDb250ZXh0dWFsIHN1YnRpdGxlXG4gIGNvbnN0IHN1YnRpdGxlID0gZ2V0U3VidGl0bGUoc2V0dGluZ3MsIGVuZ2luZSk7XG4gIGNvbnRlbnQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tc3VidGl0bGVcIixcbiAgICB0ZXh0OiBzdWJ0aXRsZSxcbiAgfSk7XG5cbiAgLy8gUmFuayBiYWRnZSBwaWxsXG4gIGNvbnN0IHRpdGxlID0gZW5naW5lLmdldER5bmFtaWNUaXRsZSgpO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgY29uc3QgYmFkZ2UgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tcmFuay1iYWRnZVwiIH0pO1xuICBiYWRnZS5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tcmFuay10ZXh0XCIsXG4gICAgdGV4dDogYCR7dGl0bGV9IFx1MDBCNyAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYWN0aW9uc1wiIH0pO1xuXG4gIGNvbnN0IHByb2dyZXNzQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIllvdXIgcHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBldWRhaW1vbmlhIHNlY3Rpb25cbiAgICBjb25zdCBldWRTZWN0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1jYXJkXCIpO1xuICAgIGlmIChldWRTZWN0aW9uKSBldWRTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlZmxlY3RCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWJ0blwiLFxuICAgIHRleHQ6IFwiUmVmbGVjdFwiLFxuICB9KTtcbiAgcmVmbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgcXVvdGUgc2VjdGlvblxuICAgIGNvbnN0IHF1b3RlU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVvdGVcIik7XG4gICAgaWYgKHF1b3RlU2VjdGlvbikgcXVvdGVTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmVldGluZyhzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgY29uc3QgbGFiZWxzID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscztcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpO1xuXG4gIGlmIChob3VyID49IDUgJiYgaG91ciA8IDEyKSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX21vcm5pbmcgPz8gXCJHb29kIG1vcm5pbmdcIjtcbiAgaWYgKGhvdXIgPj0gMTIgJiYgaG91ciA8IDE3KSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX2FmdGVybm9vbiA/PyBcIkdvb2QgYWZ0ZXJub29uXCI7XG4gIGlmIChob3VyID49IDE3ICYmIGhvdXIgPCAyMSkgcmV0dXJuIGxhYmVscy5ncmVldGluZ19ldmVuaW5nID8/IFwiR29vZCBldmVuaW5nXCI7XG4gIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfbmlnaHQgPz8gXCJHb29kIG5pZ2h0XCI7XG59XG5cbmZ1bmN0aW9uIGdldFN1YnRpdGxlKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGVuZ2luZTogT2xlbkVuZ2luZSk6IHN0cmluZyB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG5cbiAgLy8gVGFydGFydXNcbiAgaWYgKHNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICByZXR1cm4gXCJUaGUgdW5kZXJ3b3JsZCBhd2FpdHMgeW91ciBwZW5hbmNlLlwiO1xuICB9XG5cbiAgLy8gQm9zcyBkYW5nZXIgem9uZVxuICBpZiAoYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgIHJldHVybiBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuXCI7XG4gIH1cblxuICAvLyBBY3RpdmUgc3RyZWFrXG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGlmIChzdHJlYWsgPj0gMykge1xuICAgIHJldHVybiBgJHtzdHJlYWt9IGRheXMgc3Ryb25nLiBLZWVwIHRoZSBmbGFtZS5gO1xuICB9XG5cbiAgLy8gRGVmYXVsdFxuICByZXR1cm4gXCJTdGVwIGJ5IHN0ZXAsIHlvdSBzaGFwZSB5b3VyIHBhdGguXCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBFdWRhaW1vbmlhIEJhciBDb21wb25lbnRcbi8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXIsIHN0YXQgY2FyZHMsIGNhdGVnb3J5IHJvd3Mgd2l0aCBpY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQ0FURUdPUllfSUNPTlM6IFJlY29yZDxDYXRlZ29yeSwgc3RyaW5nPiA9IHtcbiAgYm9keTogXCJcXHV7MUYzQ0J9XCIsIC8vIHdlaWdodGxpZnRlclxuICBtaW5kOiBcIlxcdXsxRjREQX1cIiwgLy8gYm9va3NcbiAgc3Bpcml0OiBcIlxcdXsxRjU0QX1cIiwgLy8gZG92ZVxufTtcblxuY29uc3QgVE9UQUxfU0VHTUVOVFMgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFCYXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICAvLyAtLS0gMS4gRXVkYWltb25pYSBDYXJkIChzZWdtZW50ZWQgYmFyICsgY2hhcHRlcikgLS0tXG4gIHJlbmRlckV1ZGFpbW9uaWFDYXJkKGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlckluZGV4KTtcblxuICAvLyAtLS0gMi4gU3RhdCBDYXJkcyBSb3cgKHNlcGFyYXRlIGZyb20gdGhlIGNhcmQpIC0tLVxuICByZW5kZXJTdGF0Q2FyZHMoY29udGFpbmVyLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDEpO1xuXG4gIC8vIC0tLSAzLiBDYXRlZ29yaWVzIENhcmQgKGljb24gcm93cyB3aXRoIGJhcnMpIC0tLVxuICByZW5kZXJDYXRlZ29yaWVzQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDIpO1xufVxuXG4vLyAtLS0tIEV1ZGFpbW9uaWEgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEhlYWRlcjogdGl0bGUgKyBYUFxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtaGVhZGVyXCIgfSk7XG4gIGNvbnN0IGV1ZEluZGV4ID0gZW5naW5lLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuXG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS10aXRsZVwiLFxuICAgIHRleHQ6IGBFdWRhaW1vbmlhICR7dG9Sb21hbihldWRJbmRleCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG90YWxYUCA9IGVuZ2luZS5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wueHAsIDApO1xuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEteHBcIixcbiAgICB0ZXh0OiBgJHt0b3RhbFhQfSBYUGAsXG4gIH0pO1xuXG4gIC8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBlbmdpbmUuZ2V0RXVkYWltb25pYVByb2dyZXNzKCk7IC8vIDAtMTAwXG4gIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcihwcm9ncmVzcyAvIFRPVEFMX1NFR01FTlRTKTtcbiAgY29uc3QgaGFzUGFydGlhbCA9IHByb2dyZXNzICUgVE9UQUxfU0VHTUVOVFMgPiAwO1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRzXCIgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUT1RBTF9TRUdNRU5UUzsgaSsrKSB7XG4gICAgbGV0IGNscyA9IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRcIjtcbiAgICBpZiAoaSA8IGZpbGxlZFNlZ21lbnRzKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtZmlsbGVkXCI7XG4gICAgfSBlbHNlIGlmIChpID09PSBmaWxsZWRTZWdtZW50cyAmJiBoYXNQYXJ0aWFsKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtcGFydGlhbFwiO1xuICAgIH1cbiAgICBzZWdtZW50cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gIH1cblxuICAvLyBDaGFwdGVyIGxhYmVsXG4gIGNvbnN0IGNoYXB0ZXIgPSBlbmdpbmUuZ2V0Q2hhcHRlcigpO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWNoYXB0ZXJcIixcbiAgICB0ZXh0OiBgQ2hhcHRlciAke3RvUm9tYW4oY2hhcHRlci5udW1iZXIpfTogJHtjaGFwdGVyLm5hbWV9YCxcbiAgfSk7XG59XG5cbi8vIC0tLS0gU3RhdCBDYXJkcyAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclN0YXRDYXJkcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdHMtZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCB0b3RhbFRhc2tzID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcbiAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldE92ZXJhbGxTdHJlYWsoKTtcbiAgY29uc3QgcHJlc2VuY2UgPSBlbmdpbmUuZ2V0RGF5c09mUHJlc2VuY2UoKTtcblxuICAvLyBPYmplY3RpdmVzIGNhcmRcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUYzQUZ9XCIsIHRvdGFsVGFza3MsIFwiT2JqZWN0aXZlc1wiKTtcblxuICAvLyBTdHJlYWsgY2FyZCAod2l0aCBzdHJlYWsgZG90cylcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUY1MjV9XCIsIHN0cmVhaywgXCJTdHJlYWtcIiwgc3RyZWFrKTtcblxuICAvLyBDb25zaXN0ZW5jeSBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezI3Mjh9XCIsIHByZXNlbmNlLCBcIkNvbnNpc3RlbmN5XCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0Q2FyZChcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgaWNvbjogc3RyaW5nLFxuICB2YWx1ZTogbnVtYmVyLFxuICBsYWJlbDogc3RyaW5nLFxuICBzdHJlYWtEYXlzPzogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zdGF0LWNhcmRcIiB9KTtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWljb25cIiwgdGV4dDogaWNvbiB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC12YWx1ZVwiLCB0ZXh0OiBTdHJpbmcodmFsdWUpIH0pO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFN0cmVhayBkb3RzIChzaG93IGxhc3QgNyBkYXlzKVxuICBpZiAoc3RyZWFrRGF5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG90cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWRvdHNcIiB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgbGV0IGNscyA9IFwib2xlbi1zdGF0LWRvdFwiO1xuICAgICAgaWYgKGkgPCBzdHJlYWtEYXlzKSB7XG4gICAgICAgIGNscyArPSBcIiBvbGVuLXN0YXQtZG90LWFjdGl2ZVwiO1xuICAgICAgfVxuICAgICAgZG90cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0gQ2F0ZWdvcmllcyBDYXJkIC0tLS1cblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllc0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gRHluYW1pYyB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWR5bmFtaWMtdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG5cbiAgLy8gRGl2aWRlclxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBDYXRlZ29yeSByb3dzXG4gIGNvbnN0IGdyaWQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3JpZXMtZ3JpZFwiIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICB7IGtleTogXCJtaW5kXCIsIGxhYmVsOiBcIk1pbmRcIiB9LFxuICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICBdO1xuXG4gIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9IGVuZ2luZS5nZXRDYXRlZ29yeUxldmVsKGNhdC5rZXkpO1xuICAgIGNvbnN0IGNvbG9yID0gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV07XG5cbiAgICBjb25zdCByb3cgPSBncmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LXJvd1wiIH0pO1xuXG4gICAgLy8gSWNvbiBib3hcbiAgICBjb25zdCBpY29uQm94ID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWljb25cIiB9KTtcbiAgICBpY29uQm94LnN0eWxlLmJhY2tncm91bmQgPSBgJHtjb2xvcn0yMmA7IC8vIDEzJSBvcGFjaXR5IHRpbnRcbiAgICBpY29uQm94LnRleHRDb250ZW50ID0gQ0FURUdPUllfSUNPTlNbY2F0LmtleV07XG5cbiAgICAvLyBJbmZvIGNvbHVtblxuICAgIGNvbnN0IGluZm8gPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktaW5mb1wiIH0pO1xuXG4gICAgLy8gTmFtZSArIGxldmVsIHJvd1xuICAgIGNvbnN0IG5hbWVSb3cgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LW5hbWUtcm93XCIgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lXCIsIHRleHQ6IGNhdC5sYWJlbCB9KTtcbiAgICBuYW1lUm93LmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1jYXRlZ29yeS1sZXZlbC10ZXh0XCIsXG4gICAgICB0ZXh0OiBgTHYgJHtsZXZlbC5sZXZlbH0gXHUwMEI3ICR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9LzEwMGAsXG4gICAgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyBiYXJcbiAgICBjb25zdCBiYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhclwiIH0pO1xuICAgIGNvbnN0IGZpbGwgPSBiYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktYmFyLWZpbGxcIiB9KTtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9JWA7XG4gICAgZmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERpcmVjdGl2ZSBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBjYXJkIG9uIGRhc2hib2FyZCArIGV4cGFuZGVkIGJvdHRvbS1zaGVldCBvdmVybGF5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFByaW9yaXR5UmVhc29uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXJlY3RpdmVDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvbkVudGVyV29ya3NwYWNlPzogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHN1Z2dlc3Rpb24gPSBlbmdpbmUuZ2V0U3VnZ2VzdGlvbigpO1xuICBpZiAoIXN1Z2dlc3Rpb24pIHJldHVybjtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGlyZWN0aXZlX3RpdGxlID8/IFwiVEhFIERJUkVDVElWRVwiO1xuICBjb25zdCBiZWdpbkxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5iZWdpbl93b3Jrc3BhY2UgPz8gXCJFTlRFUiBXT1JLU1BBQ0VcIjtcbiAgY29uc3Qgbm90Tm93TGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLm5vdF9ub3cgPz8gXCJOT1QgTk9XXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ29tcGFjdCBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZCBvbGVuLWRpcmVjdGl2ZVwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXIgd2l0aCBiYWRnZVxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1oZWFkZXJcIiB9KTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYmFkZ2VcIiB9KTtcbiAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhZGdlQ29sb3Ioc3VnZ2VzdGlvbi5yZWFzb24pO1xuXG4gIC8vIEFjdGl2aXR5IGluZm9cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGl2aXR5XCIsXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICBjb25zdCBuZWdsZWN0VGV4dCA9IHN1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmUgPCA5OTlcbiAgICA/IGAke3N1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmV9IGRheXMgbmVnbGVjdGVkYFxuICAgIDogXCJOb3QgeWV0IHN0YXJ0ZWRcIjtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLW5lZ2xlY3RcIiwgdGV4dDogbmVnbGVjdFRleHQgfSk7XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBiZWdpbkJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogYmVnaW5MYWJlbCxcbiAgfSk7XG4gIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25FbnRlcldvcmtzcGFjZT8uKHN1Z2dlc3Rpb24uYWN0aXZpdHlJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdE5vd0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBub3ROb3dMYWJlbCxcbiAgfSk7XG4gIG5vdE5vd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIERpc21pc3MgdGhpcyBjYXJkIHdpdGggYSBmYWRlXG4gICAgY2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTEwcHgpXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zcyBlYXNlXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LCAzMDApO1xuICB9KTtcblxuICAvLyBUYXAgY2FyZCB0byBleHBhbmRcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dFeHBhbmRlZERpcmVjdGl2ZShjb250YWluZXIsIHNldHRpbmdzLCBzdWdnZXN0aW9uLCBiZWdpbkxhYmVsLCBub3ROb3dMYWJlbCwgb25FbnRlcldvcmtzcGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RXhwYW5kZWREaXJlY3RpdmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN1Z2dlc3Rpb246IHsgYWN0aXZpdHlJZDogc3RyaW5nOyBhY3Rpdml0eU5hbWU6IHN0cmluZzsgZW1vamk6IHN0cmluZzsgcmVhc29uOiBQcmlvcml0eVJlYXNvbjsgZGF5c1NpbmNlTGFzdERvbmU6IG51bWJlcjsgbG9yZVRleHQ6IHN0cmluZyB9LFxuICBiZWdpbkxhYmVsOiBzdHJpbmcsXG4gIG5vdE5vd0xhYmVsOiBzdHJpbmcsXG4gIG9uRW50ZXJXb3Jrc3BhY2U/OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgLy8gQ3JlYXRlIG92ZXJsYXlcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcblxuICAvLyBIYW5kbGUgYmFyXG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIC8vIFRpdGxlXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsXG4gICAgdGV4dDogc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kaXJlY3RpdmVfdGl0bGUgPz8gXCJUSEUgRElSRUNUSVZFXCIsXG4gIH0pO1xuXG4gIC8vIEFjdGl2aXR5IG5hbWVcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAyMnB4OyBtYXJnaW46IDE2cHggMCA4cHg7XCIgfSxcbiAgICB0ZXh0OiBgJHtzdWdnZXN0aW9uLmVtb2ppfSAke3N1Z2dlc3Rpb24uYWN0aXZpdHlOYW1lfWAsXG4gIH0pO1xuXG4gIC8vIE5lZ2xlY3QgZGVzY3JpcHRpb25cbiAgY29uc3QgbmVnbGVjdERlc2MgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gXG4gICAgOiBcIkEgbmV3IHBhdGggYXdhaXRzLiBUYWtlIHRoZSBmaXJzdCBzdGVwLlwiO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib2R5LWl0YWxpY1wiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTJweDtcIiB9LFxuICAgIHRleHQ6IG5lZ2xlY3REZXNjLFxuICB9KTtcblxuICAvLyBMb3JlIHRleHRcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXNoZWV0LWxvcmVcIixcbiAgICB0ZXh0OiBgXCIke3N1Z2dlc3Rpb24ubG9yZVRleHR9XCJgLFxuICB9KTtcblxuICAvLyBSYW5kb20gcXVvdGVcbiAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICBjb25zdCBxdW90ZVNlY3Rpb24gPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1xdW90ZVwiIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgfSk7XG4gIHF1b3RlU2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgfSk7XG5cbiAgLy8gQWN0aW9uc1xuICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcbiAgYWN0aW9ucy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgYWN0aW9ucy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgICBvbkVudGVyV29ya3NwYWNlPy4oc3VnZ2VzdGlvbi5hY3Rpdml0eUlkKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90Tm93QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgIHRleHQ6IG5vdE5vd0xhYmVsLFxuICB9KTtcbiAgbm90Tm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICAvLyBDbG9zZSBvbiBvdmVybGF5IHRhcFxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVNoZWV0KCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgLy8gQXBwZW5kIGFuZCBhbmltYXRlIGluXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJhZGdlQ29sb3IocmVhc29uOiBQcmlvcml0eVJlYXNvbik6IHN0cmluZyB7XG4gIHN3aXRjaCAocmVhc29uKSB7XG4gICAgY2FzZSBcImRlYXRoXCI6IHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgICBjYXNlIFwiYm9zc1wiOiByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgY2FzZSBcIm5lZ2xlY3RcIjogcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIGNhc2UgXCJ3ZWVrbHlcIjogcmV0dXJuIFwiIzNiODJmNlwiO1xuICAgIGNhc2UgXCJjaGFpblwiOiByZXR1cm4gXCIjOGI1Y2Y2XCI7XG4gICAgY2FzZSBcInRpbWVcIjogcmV0dXJuIFwiIzA2YjZkNFwiO1xuICAgIGNhc2UgXCJiYWxhbmNlZFwiOiByZXR1cm4gXCIjZmZmZmZmXCI7XG4gICAgZGVmYXVsdDogcmV0dXJuIFwiIzkyOGQ4NVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIFN0YXR1cyBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBib3NzIEhQIGJhciB3aXRoIHRpZXIgYW5kIHJhbmtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0Jvc3NFbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvc3NTdGF0dXNDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG4gIGNvbnN0IHN0YXR1cyA9IGJvc3NFbmdpbmUuZ2V0Qm9zc1N0YXR1cygpO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5ib3NzX3N0YXR1c190aXRsZSA/PyBcIkJPU1MgU1RBVFVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2FyZFxuICBjb25zdCBjYXJkQ2xzID0gc3RhdHVzLmluVGFydGFydXMgPyBcIm9sZW4tY2FyZC1jb21wYWN0IG9sZW4tY2FyZC10YXJ0YXJ1c1wiIDogXCJvbGVuLWNhcmQtY29tcGFjdFwiO1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogY2FyZENscyB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gUm93OiBlbW9qaSArIGluZm9cbiAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ib3NzLXJvd1wiIH0pO1xuXG4gIHJvdy5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWJvc3MtZW1vamlcIiwgdGV4dDogZ2V0Qm9zc0Vtb2ppKHN0YXR1cy50aWVyKSB9KTtcblxuICBjb25zdCBpbmZvID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWJvc3MtaW5mb1wiIH0pO1xuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYm9zcy1uYW1lXCIsIHRleHQ6IHN0YXR1cy5ib3NzLm5hbWUgfSk7XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWJvc3MtdGllclwiLFxuICAgIHRleHQ6IGBUaWVyICR7c3RhdHVzLnRpZXJ9IFx1MDBCNyAke3N0YXR1cy5yYW5rfWAsXG4gIH0pO1xuXG4gIC8vIEhQIGJhclxuICBjb25zdCBocEJhciA9IGluZm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taHAtYmFyXCIgfSk7XG4gIGNvbnN0IGhwRmlsbCA9IGhwQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhwLWJhci1maWxsXCIgfSk7XG4gIGhwRmlsbC5zdHlsZS53aWR0aCA9IGAke3N0YXR1cy5wZXJjZW50fSVgO1xuICBocEZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGJvc3NFbmdpbmUuZ2V0SFBDb2xvcihzdGF0dXMucGVyY2VudCk7XG5cbiAgLy8gSFAgdGV4dFxuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib3NzLWhwLXRleHRcIixcbiAgICB0ZXh0OiBgJHtzdGF0dXMuY3VycmVudEhQfS8ke3N0YXR1cy5tYXhIUH0gSFAgKCR7c3RhdHVzLnBlcmNlbnR9JSlgLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9zc0Vtb2ppKHRpZXI6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGVtb2ppczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgICAxOiBcIlxcdXsxRjQ3Qn1cIiwgMjogXCJcXHV7MUY5REN9XCIsIDM6IFwiXFx1ezFGNDA5fVwiLCA0OiBcIlxcdXsxRjQwMn1cIixcbiAgICA1OiBcIlxcdXsxRjQwRH1cIiwgNjogXCJcXHV7MUY5ODF9XCIsIDc6IFwiXFx1ezFGNTI1fVwiLCA4OiBcIlxcdXsxRjQzQX1cIixcbiAgICA5OiBcIlxcdXsxRjMwQX1cIiwgMTA6IFwiXFx1ezFGNDdGfVwiLCAxMTogXCJcXHV7MUYzMjl9XCIsIDEyOiBcIlxcdTIzMUJcIixcbiAgICAxMzogXCJcXHV7MUYzMDB9XCIsXG4gIH07XG4gIHJldHVybiBlbW9qaXNbdGllcl0gPz8gXCJcXHUyNjk0XFx1RkUwRlwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgV2Vla2x5IFJoeXRobSBDb21wb25lbnRcbi8vIDctZGF5IGJhciBjaGFydCB3aXRoIGNhdGVnb3J5IHN0YWNraW5nICsgc3RhdHMgcm93XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXZWVrbHlSaHl0aG0oXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMud2Vla2x5X3JoeXRobV90aXRsZSA/PyBcIldFRUtMWSBSSFlUSE1cIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBTdGF0cyByb3dcbiAgY29uc3Qgc3RhdHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0c1wiIH0pO1xuXG4gIGNvbnN0IGFjdGl2ZURheXMgPSBlbmdpbmUuZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk7XG4gIGNvbnN0IGJlc3REYXkgPSBlbmdpbmUuZ2V0QmVzdERheVRoaXNXZWVrKCk7XG4gIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSBlbmdpbmUuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuXG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIFN0cmluZyhhY3RpdmVEYXlzKSArIFwiLzdcIiwgXCJBY3RpdmUgZGF5c1wiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgYmVzdERheSwgXCJCZXN0IGRheVwiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgU3RyaW5nKHRvdGFsQ29tcGxldGlvbnMpLCBcIlRvdGFsXCIpO1xuXG4gIC8vIERpdmlkZXJcbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQmFyIGNoYXJ0XG4gIGNvbnN0IHdlZWtseURhdGEgPSBlbmdpbmUuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheVN0ciA9IG5ldyBEYXRlKG5vdykudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgLy8gRmluZCBtYXggdG90YWwgZm9yIHNjYWxpbmdcbiAgbGV0IG1heFRvdGFsID0gMTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla2x5RGF0YSkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgaWYgKHRvdGFsID4gbWF4VG90YWwpIG1heFRvdGFsID0gdG90YWw7XG4gIH1cblxuICBjb25zdCBiYXJzQ29udGFpbmVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyc1wiIH0pO1xuXG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtseURhdGEpIHtcbiAgICBjb25zdCBjb2wgPSBiYXJzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItY29sXCIgfSk7XG5cbiAgICAvLyBTdGFja2VkIGJhclxuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG5cbiAgICBjb25zdCBiYXJIZWlnaHQgPSBtYXhUb3RhbCA+IDAgPyBNYXRoLm1heCg0LCAodG90YWwgLyBtYXhUb3RhbCkgKiAxMDApIDogNDtcbiAgICBjb25zdCBiYXJFbCA9IGNvbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyXCIgfSk7XG4gICAgYmFyRWwuc3R5bGUuaGVpZ2h0ID0gYCR7YmFySGVpZ2h0fXB4YDtcbiAgICBiYXJFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjRweFwiO1xuXG4gICAgaWYgKGRheS5kYXRlID09PSB0b2RheVN0cikge1xuICAgICAgYmFyRWwuY2xhc3NMaXN0LmFkZChcIm9sZW4td2Vla2x5LWJhci10b2RheVwiKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhY2tlZCBzZWdtZW50c1xuICAgIGNvbnN0IGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXTtcbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBjb25zdCBjYXRDb3VudCA9IGRheS5jb21wbGV0aW9ucy5nZXQoY2F0KSA/PyAwO1xuICAgICAgaWYgKGNhdENvdW50ID09PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHNlZ0hlaWdodCA9IHRvdGFsID4gMCA/IChjYXRDb3VudCAvIHRvdGFsKSAqIDEwMCA6IDA7XG4gICAgICBjb25zdCBzZWcgPSBiYXJFbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyLXNlZ21lbnRcIiB9KTtcbiAgICAgIHNlZy5zdHlsZS5oZWlnaHQgPSBgJHtzZWdIZWlnaHR9JWA7XG4gICAgICBzZWcuc3R5bGUuYmFja2dyb3VuZCA9IGdldENhdGVnb3J5Q29sb3IoY2F0LCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gY29tcGxldGlvbnMsIHNob3cgZW1wdHkgYmFyXG4gICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICBiYXJFbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXCI7XG4gICAgfVxuXG4gICAgLy8gRGF5IGxhYmVsXG4gICAgY29sLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LWRheS1sYWJlbFwiLCB0ZXh0OiBkYXkuZGF5LmNoYXJBdCgwKSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWVrbHlTdGF0KHBhcmVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3Qgc3RhdCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdFwiIH0pO1xuICBzdGF0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXQtdmFsdWVcIiwgdGV4dDogdmFsdWUgfSk7XG4gIHN0YXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdC1sYWJlbFwiLCB0ZXh0OiBsYWJlbCB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlDb2xvcihjYXRlZ29yeTogQ2F0ZWdvcnksIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpOiBzdHJpbmcge1xuICByZXR1cm4gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQWN0aXZpdHkgR3JpZCBDb21wb25lbnRcbi8vIDItY29sdW1uIGdyaWQgb2YgYWN0aXZpdHkgY2FyZHMgd2l0aCBwcm9ncmVzcyByaW5nc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWN0aXZpdHlHcmlkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmFjdGl2aXR5X2dyaWRfdGl0bGUgPz8gXCJBQ1RJVklUSUVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gR3JpZCBjb250YWluZXJcbiAgY29uc3QgZ3JpZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1ncmlkXCIgfSk7XG4gIGdyaWQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBzZXR0aW5ncy5kZXZDb25maWcuYWN0aXZpdHlHcmlkQ29sdW1ucyA/PyAyO1xuICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y29sdW1uc30sIDFmcilgO1xuXG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBlbmdpbmUuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcblxuICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICBjb25zdCBjYXJkID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1jYXJkXCIgfSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgYmFyXG4gICAgY29uc3QgYWNjZW50ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2FjdGl2aXR5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcblxuICAgIC8vIFRvcCByb3c6IGVtb2ppICsgc3RhdHVzIGRvdFxuICAgIGNvbnN0IHRvcCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktdG9wXCIgfSk7XG4gICAgdG9wLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktZW1vamlcIiwgdGV4dDogYWN0aXZpdHkuZW1vamkgfSk7XG5cbiAgICBjb25zdCBkYXlzU2luY2UgPSBlbmdpbmUuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgIGNvbnN0IGRvdENscyA9IGdldERvdENsYXNzKGRheXNTaW5jZSk7XG4gICAgdG9wLmNyZWF0ZURpdih7IGNsczogYG9sZW4tYWN0aXZpdHktZG90ICR7ZG90Q2xzfWAgfSk7XG5cbiAgICAvLyBBY3Rpdml0eSBuYW1lXG4gICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFjdGl2aXR5LW5hbWVcIiwgdGV4dDogYWN0aXZpdHkubmFtZSB9KTtcblxuICAgIC8vIFdlZWtseSBwcm9ncmVzc1xuICAgIGNvbnN0IHByb2dyZXNzID0gZW5naW5lLmdldFdlZWtseVByb2dyZXNzKGFjdGl2aXR5LmlkKTtcbiAgICBjb25zdCBwcm9ncmVzc1JvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3NcIiB9KTtcblxuICAgIC8vIFByb2dyZXNzIHJpbmcgKFNWRylcbiAgICBjb25zdCByaW5nID0gY3JlYXRlUHJvZ3Jlc3NSaW5nKHByb2dyZXNzLmRvbmUsIHByb2dyZXNzLnRhcmdldCwgc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbYWN0aXZpdHkuY2F0ZWdvcnldKTtcbiAgICBwcm9ncmVzc1Jvdy5hcHBlbmRDaGlsZChyaW5nKTtcblxuICAgIHByb2dyZXNzUm93LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzLXRleHRcIixcbiAgICAgIHRleHQ6IGAke3Byb2dyZXNzLmRvbmV9IG9mICR7cHJvZ3Jlc3MudGFyZ2V0fWAsXG4gICAgfSk7XG5cbiAgICAvLyBTdHJlYWtcbiAgICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0QWN0aXZpdHlTdHJlYWsoYWN0aXZpdHkuaWQpO1xuICAgIGlmIChzdHJlYWsgPiAwKSB7XG4gICAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tYWN0aXZpdHktc3RyZWFrXCIsXG4gICAgICAgIHRleHQ6IGAke3N0cmVha30gZGF5IHN0cmVha2AsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RG90Q2xhc3MoZGF5c1NpbmNlOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoZGF5c1NpbmNlID09PSAwKSByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1ncmVlblwiO1xuICBpZiAoZGF5c1NpbmNlIDw9IDEpIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LXllbGxvd1wiO1xuICByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1yZWRcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NSaW5nKGRvbmU6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcbiAgY29uc3Qgc2l6ZSA9IDI0O1xuICBjb25zdCBzdHJva2VXaWR0aCA9IDIuNTtcbiAgY29uc3QgcmFkaXVzID0gKHNpemUgLSBzdHJva2VXaWR0aCkgLyAyO1xuICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiByYWRpdXM7XG4gIGNvbnN0IHBlcmNlbnQgPSB0YXJnZXQgPiAwID8gTWF0aC5taW4oMSwgZG9uZSAvIHRhcmdldCkgOiAwO1xuICBjb25zdCBkYXNoT2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAqICgxIC0gcGVyY2VudCk7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoc2l6ZSkpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhzaXplKSk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHtzaXplfSAke3NpemV9YCk7XG4gIHN2Zy5jbGFzc0xpc3QuYWRkKFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzcy1yaW5nXCIpO1xuXG4gIC8vIEJhY2tncm91bmQgY2lyY2xlXG4gIGNvbnN0IGJnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHN2Zy5hcHBlbmRDaGlsZChiZ0NpcmNsZSk7XG5cbiAgLy8gUHJvZ3Jlc3MgY2lyY2xlXG4gIGNvbnN0IHByb2dyZXNzQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgY29sb3IpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgU3RyaW5nKGNpcmN1bWZlcmVuY2UpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgU3RyaW5nKGRhc2hPZmZzZXQpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoLTkwICR7c2l6ZSAvIDJ9ICR7c2l6ZSAvIDJ9KWApO1xuICBzdmcuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NDaXJjbGUpO1xuXG4gIHJldHVybiBzdmc7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGUgQ2hpcHMgQ29tcG9uZW50XG4vLyBIb3Jpem9udGFsIHNjcm9sbGFibGUgY2hpcHMgZm9yIHNlbGYtY2FyZSB0YXNrIHRyYWNraW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFRlbXBsZVRhc2sgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRlbXBsZUNoaXBzKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25UZW1wbGVVcGRhdGU6ICh0YXNrSWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGlmICghc2V0dGluZ3MudGVtcGxlVGFza3MgfHwgc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLnRlbXBsZV90aXRsZSA/PyBcIlRIRSBURU1QTEVcIjtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcblxuICAvLyBTZWN0aW9uXG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxlLXNlY3Rpb25cIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gVGl0bGVcbiAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2hpcHMgY29udGFpbmVyXG4gIGNvbnN0IGNoaXBzID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcHNcIiB9KTtcbiAgY2hpcHMuc3R5bGUubWFyZ2luVG9wID0gXCI4cHhcIjtcblxuICBmb3IgKGNvbnN0IHRhc2sgb2Ygc2V0dGluZ3MudGVtcGxlVGFza3MpIHtcbiAgICBjb25zdCBzdGF0dXMgPSBnZXRUYXNrU3RhdHVzKHRhc2ssIG5vdyk7XG5cbiAgICBjb25zdCBjaGlwQ2xzID0gYG9sZW4tdGVtcGxlLWNoaXAgJHtzdGF0dXMuY2hpcENsYXNzfWA7XG4gICAgY29uc3QgY2hpcCA9IGNoaXBzLmNyZWF0ZURpdih7IGNsczogY2hpcENscyB9KTtcblxuICAgIGNoaXAuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXAtZW1vamlcIiwgdGV4dDogdGFzay5lbW9qaSB9KTtcbiAgICBjaGlwLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwLXRleHRcIiwgdGV4dDogYCR7dGFzay5uYW1lfSBcdTAwQjcgJHtzdGF0dXMudGV4dH1gIH0pO1xuXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb25UZW1wbGVVcGRhdGUodGFzay5pZCk7XG4gICAgICAvLyBWaXN1YWwgZmVlZGJhY2tcbiAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwLjkpXCI7XG4gICAgICBjaGlwLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgY2hpcC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFRhc2tTdGF0dXMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNoaXBDbGFzczogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrU3RhdHVzKHRhc2s6IFRlbXBsZVRhc2ssIG5vdzogRGF0ZSk6IFRhc2tTdGF0dXMge1xuICBpZiAoIXRhc2subGFzdENvbXBsZXRlZCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZSh0YXNrLmxhc3RDb21wbGV0ZWQpO1xuICBjb25zdCBtc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gIGNvbnN0IGRheXNTaW5jZSA9IE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSBsYXN0LmdldFRpbWUoKSkgLyBtc1BlckRheSk7XG4gIGNvbnN0IGRheXNVbnRpbER1ZSA9IHRhc2suaW50ZXJ2YWxEYXlzIC0gZGF5c1NpbmNlO1xuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMSkge1xuICAgIHJldHVybiB7IHRleHQ6IFwiZHVlIHRvZGF5XCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLXdhcm5cIiB9O1xuICB9XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAyKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogYGR1ZSBpbiAke2RheXNVbnRpbER1ZX1kYCwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtd2FyblwiIH07XG4gIH1cblxuICByZXR1cm4geyB0ZXh0OiBgaW4gJHtkYXlzVW50aWxEdWV9ZGAsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW9rXCIgfTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFF1b3RlIEZvb3RlciBDb21wb25lbnRcbi8vIFJvdGF0aW5nIHN0b2ljIHF1b3RlIGF0IHRoZSBib3R0b20gb2YgdGhlIGRhc2hib2FyZFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJRdW90ZUZvb3RlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHF1b3RlID0gZ2V0UXVvdGUoYXBwLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1xdW90ZVwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgdGV4dDogYFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgfSk7XG5cbiAgaWYgKHF1b3RlLmF0dHJpYnV0aW9uKSB7XG4gICAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFF1b3RlIHtcbiAgdGV4dDogc3RyaW5nO1xuICBhdHRyaWJ1dGlvbjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRRdW90ZShcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiBRdW90ZSB7XG4gIC8vIFRyeSB2YXVsdCBmb2xkZXIgcXVvdGVzIGZpcnN0XG4gIGlmIChzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpIHtcbiAgICBjb25zdCB2YXVsdFF1b3RlcyA9IGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwLCBzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpO1xuICAgIGlmICh2YXVsdFF1b3Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcGlja1F1b3RlKHZhdWx0UXVvdGVzLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbGJhY2sgdG8gaGFyZGNvZGVkIHF1b3Rlc1xuICByZXR1cm4gcGlja1F1b3RlKEZBTExCQUNLX1FVT1RFUywgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xufVxuXG5mdW5jdGlvbiBwaWNrUXVvdGUoXG4gIHF1b3RlczogUXVvdGVbXSxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IFF1b3RlIHtcbiAgaWYgKHF1b3Rlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIlRoZSB1bmV4YW1pbmVkIGxpZmUgaXMgbm90IHdvcnRoIGxpdmluZy5cIiwgYXR0cmlidXRpb246IFwiU29jcmF0ZXNcIiB9O1xuICB9XG5cbiAgLy8gQXZvaWQgcmVjZW50bHkgc2hvd24gcXVvdGVzXG4gIGNvbnN0IHJlY2VudElkcyA9IHNldHRpbmdzLnJlY2VudFF1b3RlSWRzID8/IFtdO1xuICBjb25zdCBhdmFpbGFibGUgPSBxdW90ZXNcbiAgICAubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKVxuICAgIC5maWx0ZXIoKHsgaSB9KSA9PiAhcmVjZW50SWRzLmluY2x1ZGVzKGkpKTtcblxuICBjb25zdCBwb29sID0gYXZhaWxhYmxlLmxlbmd0aCA+IDAgPyBhdmFpbGFibGUgOiBxdW90ZXMubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKTtcbiAgY29uc3QgcGljayA9IHBvb2xbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9vbC5sZW5ndGgpXTtcblxuICAvLyBUcmFjayByZWNlbnQgKGtlZXAgbGFzdCA1KVxuICBjb25zdCBuZXdSZWNlbnQgPSBbLi4ucmVjZW50SWRzLCBwaWNrLmldLnNsaWNlKC1NYXRoLm1pbig1LCBNYXRoLmZsb29yKHF1b3Rlcy5sZW5ndGggLyAyKSkpO1xuICBvblNldHRpbmdzVXBkYXRlKHtcbiAgICBsYXN0UXVvdGVJbmRleDogcGljay5pLFxuICAgIHJlY2VudFF1b3RlSWRzOiBuZXdSZWNlbnQsXG4gIH0pO1xuXG4gIHJldHVybiBwaWNrLnE7XG59XG5cbmZ1bmN0aW9uIGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwOiBBcHAsIGZvbGRlclBhdGg6IHN0cmluZyk6IFF1b3RlW10ge1xuICBjb25zdCBxdW90ZXM6IFF1b3RlW10gPSBbXTtcbiAgY29uc3QgYWJzdHJhY3RGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXJQYXRoKTtcbiAgaWYgKCFhYnN0cmFjdEZpbGUpIHJldHVybiBxdW90ZXM7XG5cbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcigoZikgPT5cbiAgICBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpXG4gICk7XG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgY29udGludWU7XG5cbiAgICAvLyBPbmUgcXVvdGUgcGVyIGZpbGUgKGRlZmF1bHQgbW9kZSlcbiAgICBjb25zdCBuYW1lID0gZmlsZS5iYXNlbmFtZTtcbiAgICBjb25zdCBwYXJ0cyA9IHNwbGl0QXR0cmlidXRpb24obmFtZSk7XG4gICAgcXVvdGVzLnB1c2gocGFydHMpO1xuICB9XG5cbiAgcmV0dXJuIHF1b3Rlcztcbn1cblxuZnVuY3Rpb24gc3BsaXRBdHRyaWJ1dGlvbih0ZXh0OiBzdHJpbmcpOiBRdW90ZSB7XG4gIC8vIENoZWNrIGZvciBlbS1kYXNoIGF0dHJpYnV0aW9uXG4gIGNvbnN0IGRhc2hJbmRleCA9IHRleHQubGFzdEluZGV4T2YoXCIgXHUyMDE0IFwiKTtcbiAgaWYgKGRhc2hJbmRleCA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGV4dC5zbGljZSgwLCBkYXNoSW5kZXgpLnRyaW0oKSxcbiAgICAgIGF0dHJpYnV0aW9uOiB0ZXh0LnNsaWNlKGRhc2hJbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgaHlwaGVuSW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIC0gXCIpO1xuICBpZiAoaHlwaGVuSW5kZXggPiB0ZXh0Lmxlbmd0aCAqIDAuNSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0ZXh0LnNsaWNlKDAsIGh5cGhlbkluZGV4KS50cmltKCksXG4gICAgICBhdHRyaWJ1dGlvbjogdGV4dC5zbGljZShoeXBoZW5JbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogdGV4dC50cmltKCksIGF0dHJpYnV0aW9uOiBcIlwiIH07XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXkgVGltZWxpbmUgQ29tcG9uZW50XG4vLyBWZXJ0aWNhbCBjb2xvcmVkIHRpbWVsaW5lIG9mIHRoZSBkYXkncyBwbGFubmVkIGFjdGl2aXRpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgRGF5TWFwRW50cnksIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEYXlUaW1lbGluZShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiB7XG4gICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Ta2lwOiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJEb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyUG9zdHBvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ3JlYXRlRXZlbnQ/OiAoKSA9PiB2b2lkO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRheW1hcF90aXRsZSA/PyBcIllPVVIgREFZXCI7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldEhvdXJzKCkgKyBub3cuZ2V0TWludXRlcygpIC8gNjA7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gVGltZWxpbmUgY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQgb2xlbi10aW1lbGluZS1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEdldCBkYXkgbWFwIGVudHJpZXNcbiAgY29uc3QgZW50cmllcyA9IGVuZ2luZS5nZXREYXlNYXAoKTtcblxuICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWVtcHR5XCIsXG4gICAgICB0ZXh0OiBcIk5vIGFjdGl2aXRpZXMgc2NoZWR1bGVkLiBBIHJhcmUgZGF5IG9mIHJlc3QuXCIsXG4gICAgfSk7XG4gICAgcmVuZGVyVGltZWxpbmVGb290ZXIoY2FyZCwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3Mub25DcmVhdGVFdmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gVGltZWxpbmUgY29udGFpbmVyXG4gIGNvbnN0IHRpbWVsaW5lID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZVwiIH0pO1xuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIHJlbmRlclRpbWVsaW5lRW50cnkoXG4gICAgICB0aW1lbGluZSwgZW50cnksIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzXG4gICAgKTtcbiAgfVxuXG4gIC8vIEZvb3RlclxuICByZW5kZXJUaW1lbGluZUZvb3RlcihjYXJkLCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrcy5vbkNyZWF0ZUV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVFbnRyeShcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgZW50cnk6IERheU1hcEVudHJ5LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBjYWxsYmFja3M6IHtcbiAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblNraXA6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhckRvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJQb3N0cG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gIH1cbik6IHZvaWQge1xuICBjb25zdCBpc0NhbGVuZGFyID0gZW50cnkuaXNDYWxlbmRhclRhc2sgPT09IHRydWU7XG4gIGNvbnN0IGNvbG9yID0gaXNDYWxlbmRhciA/IFwiIzVlN2E5YVwiIDogKHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2VudHJ5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIik7XG4gIGNvbnN0IGlzQ3VycmVudCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LnN0YXJ0SG91ciAmJiBjdXJyZW50SG91ciA8IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzUGFzdCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzRG9uZSA9IGVudHJ5LnN0YXR1cyA9PT0gXCJkb25lXCI7XG4gIGNvbnN0IGlzU2tpcHBlZCA9IGVudHJ5LnN0YXR1cyA9PT0gXCJza2lwcGVkXCI7XG5cbiAgLy8gRGV0ZXJtaW5lIHZpc3VhbCBzdGF0ZVxuICBsZXQgc3RhdGVDbHMgPSBcIm9sZW4tdGltZWxpbmUtZW50cnlcIjtcbiAgaWYgKGlzQ2FsZW5kYXIpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtY2FsZW5kYXJcIjtcbiAgaWYgKGlzRG9uZSkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1kb25lXCI7XG4gIGVsc2UgaWYgKGlzU2tpcHBlZCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1za2lwcGVkXCI7XG4gIGVsc2UgaWYgKGlzQ3VycmVudCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1jdXJyZW50XCI7XG4gIGVsc2UgaWYgKGlzUGFzdCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1wYXN0XCI7XG5cbiAgY29uc3Qgcm93ID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogc3RhdGVDbHMgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgY29sb3IgYmFyIChjYWxlbmRhciB0YXNrcyBnZXQgYSBkaXN0aW5jdCBkYXNoZWQgc3R5bGUpXG4gIGNvbnN0IGJhciA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1iYXJcIiB9KTtcbiAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgaWYgKGlzQ2FsZW5kYXIgJiYgIWlzRG9uZSkge1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKFwib2xlbi10aW1lbGluZS1iYXItY2FsZW5kYXJcIik7XG4gIH1cbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBiYXIuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAxMnB4ICR7Y29sb3J9YDtcbiAgfVxuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1jb250ZW50XCIgfSk7XG5cbiAgLy8gVG9wIGxpbmU6IHRpbWUgKyBkdXJhdGlvbiArIHNvdXJjZSBiYWRnZSBmb3IgY2FsZW5kYXIgdGFza3NcbiAgY29uc3QgdGltZUxpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLXRpbWVcIiB9KTtcbiAgdGltZUxpbmUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXRIb3VyKGVudHJ5LnN0YXJ0SG91cil9IFx1MjAxMyAke2Zvcm1hdEhvdXIoZW50cnkuZW5kSG91cil9IFx1MDBCNyAke2VudHJ5LmVzdGltYXRlZER1cmF0aW9ufW1gO1xuXG4gIGlmIChpc0NhbGVuZGFyICYmIGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgY29uc3QgYmFkZ2UgPSB0aW1lTGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1zb3VyY2UtYmFkZ2VcIiB9KTtcbiAgICBzd2l0Y2ggKGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiTm90ZVwiOyBicmVhaztcbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIlRhc2tcIjsgYnJlYWs7XG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiUXVpY2tcIjsgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0aXZpdHkgbGluZTogZW1vamkgKyBuYW1lXG4gIGNvbnN0IGFjdExpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWFjdGl2aXR5XCIgfSk7XG4gIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtZW1vamlcIiwgdGV4dDogZW50cnkuZW1vamkgfSk7XG4gIGNvbnN0IG5hbWVFbCA9IGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICBjbHM6IFwib2xlbi10aW1lbGluZS1uYW1lXCIsXG4gICAgdGV4dDogZW50cnkuYWN0aXZpdHlOYW1lLFxuICB9KTtcblxuICAvLyBTdHJpa2V0aHJvdWdoIGZvciBkb25lL3NraXBwZWRcbiAgaWYgKGlzRG9uZSB8fCBpc1NraXBwZWQpIHtcbiAgICBuYW1lRWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgIG5hbWVFbC5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgfVxuXG4gIC8vIFN0YXR1cyBpbmRpY2F0b3JcbiAgaWYgKGlzRG9uZSkge1xuICAgIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtY2hlY2tcIiwgdGV4dDogXCJcXHUyNzEzXCIgfSk7XG4gIH0gZWxzZSBpZiAoaXNTa2lwcGVkKSB7XG4gICAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1za2lwLW1hcmtcIiwgdGV4dDogXCJcXHUyMDEzXCIgfSk7XG4gIH1cblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBpZiAoIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgaWYgKGlzQ2FsZW5kYXIpIHtcbiAgICAgIC8vIENhbGVuZGFyIHRhc2tzOiBEb25lICsgUG9zdHBvbmVcbiAgICAgIGNvbnN0IGRvbmVCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQ2FsZW5kYXJEb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBvc3Rwb25lQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1wb3N0cG9uZVwiLFxuICAgICAgICB0ZXh0OiBcIlxcdTIzRTlcIixcbiAgICAgICAgYXR0cjogeyB0aXRsZTogXCJQb3N0cG9uZSB0byB0b21vcnJvd1wiIH0sXG4gICAgICB9KTtcbiAgICAgIHBvc3Rwb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25DYWxlbmRhclBvc3Rwb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFjdGl2aXR5IGVudHJpZXM6IEJlZ2luL0RvbmUgKyBTa2lwXG4gICAgICBjb25zdCBhY2NlcHRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBpc0N1cnJlbnQgPyBcIkJlZ2luXCIgOiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgYWNjZXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25BY2NlcHQoZW50cnkuYWN0aXZpdHlJZCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2tpcEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tc2tpcFwiLFxuICAgICAgICB0ZXh0OiBcIlNraXBcIixcbiAgICAgIH0pO1xuICAgICAgc2tpcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uU2tpcChlbnRyeS5hY3Rpdml0eUlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEN1cnJlbnQgdGltZSBpbmRpY2F0b3JcbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBjb25zdCBpbmRpY2F0b3IgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtbm93XCIgfSk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAoY3VycmVudEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpIC8gKGVudHJ5LmVuZEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpO1xuICAgIGluZGljYXRvci5zdHlsZS50b3AgPSBgJHtNYXRoLm1pbigxMDAsIE1hdGgubWF4KDAsIHByb2dyZXNzICogMTAwKSl9JWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVGb290ZXIoXG4gIGNhcmQ6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBvbkNyZWF0ZUV2ZW50PzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IGVuZE9mRGF5ID0gc2V0dGluZ3MuZGV2Q29uZmlnLmV2ZW5pbmdFbmQ7XG4gIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIGVuZE9mRGF5IC0gY3VycmVudEhvdXIpO1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IocmVtYWluaW5nKTtcbiAgY29uc3QgbWlucyA9IE1hdGgucm91bmQoKHJlbWFpbmluZyAtIGhvdXJzKSAqIDYwKTtcblxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICBjb25zdCBmb290ZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3RlclwiIH0pO1xuICBmb290ZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3Rlci10ZXh0XCIsXG4gICAgdGV4dDogYEVuZCBvZiBkYXk6ICR7aG91cnN9aCAke21pbnN9bSByZW1haW5pbmdgLFxuICB9KTtcblxuICBpZiAob25DcmVhdGVFdmVudCkge1xuICAgIGNvbnN0IGJ0biA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tY3JlYXRlXCIsXG4gICAgICB0ZXh0OiBcIisgQ3JlYXRlIGV2ZW50XCIsXG4gICAgfSk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvbkNyZWF0ZUV2ZW50KCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIoaDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGgpO1xuICBjb25zdCBtaW5zID0gTWF0aC5yb3VuZCgoaCAtIGhvdXJzKSAqIDYwKTtcbiAgY29uc3QgcGVyaW9kID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gIGNvbnN0IGRpc3BsYXlIb3VyID0gaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycyA9PT0gMCA/IDEyIDogaG91cnM7XG4gIGlmIChtaW5zID09PSAwKSByZXR1cm4gYCR7ZGlzcGxheUhvdXJ9JHtwZXJpb2R9YDtcbiAgcmV0dXJuIGAke2Rpc3BsYXlIb3VyfToke1N0cmluZyhtaW5zKS5wYWRTdGFydCgyLCBcIjBcIil9JHtwZXJpb2R9YDtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFdvcmtzcGFjZSBWaWV3XG4vLyBBY3RpdmUgd29ya3NwYWNlIHNjcmVlbiB3aXRoIHRpbWVyLCBza2lsbHMsIGZpbmlzaCBmbG93LlxuLy8gV2hlbiBhbiBhY3Rpdml0eSBoYXMgYSB3b3Jrc3BhY2VUZW1wbGF0ZSwgdGhlIHRlbXBsYXRlIGlzXG4vLyByZW5kZXJlZCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRpbWVyIFVJLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEl0ZW1WaWV3LCBXb3Jrc3BhY2VMZWFmLCBURmlsZSwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVdvcmtzcGFjZSwgQWN0aXZpdHlDb25maWcsIFdvcmtzcGFjZVR5cGUsIFdvcmtzcGFjZVJlc3VsdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgVklFV19UWVBFX1dPUktTUEFDRSwgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICBwcml2YXRlIHRpbWVySW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN0YXJ0VGltZTogRGF0ZTtcbiAgcHJpdmF0ZSBlbGFwc2VkID0gMDsgLy8gc2Vjb25kc1xuICAvKiogV2hlbiBpbiB0ZW1wbGF0ZSBtb2RlLCB0cmFja3MgdGhlIGRhaWx5IG5vdGUgZmlsZSB0aGUgdGVtcGxhdGUgaXMgYm91bmQgdG8gKi9cbiAgcHJpdmF0ZSB0ZW1wbGF0ZU5vdGVGaWxlOiBURmlsZSB8IG51bGwgPSBudWxsO1xuICAvKiogVHJhY2tzIHdoZXRoZXIgd2UgYWxyZWFkeSBwcm9jZXNzZWQgYSBjb21wbGV0aW9uIChwcmV2ZW50cyBkb3VibGUtYXBwbHkpICovXG4gIHByaXZhdGUgY29tcGxldGlvbkFwcGxpZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfV09SS1NQQUNFO1xuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2U7XG4gICAgcmV0dXJuIHdvcmtzcGFjZSA/IGBXb3Jrc3BhY2U6ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX1gIDogXCJXb3Jrc3BhY2VcIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJ0aW1lclwiO1xuICB9XG5cbiAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHdvcmtzcGFjZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZTtcbiAgICBpZiAoIXdvcmtzcGFjZSkge1xuICAgICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBcIk5vIGFjdGl2ZSB3b3Jrc3BhY2UuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoXG4gICAgICAoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQsXG4gICAgKTtcblxuICAgIGlmIChhY3Rpdml0eT8ud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgIC8vIFRlbXBsYXRlIG1vZGU6IHJlbmRlciB0aGUgYWN0aXZpdHkgdGVtcGxhdGUgYm91bmQgdG8gdG9kYXkncyBkYWlseSBub3RlXG4gICAgICBhd2FpdCB0aGlzLnJlbmRlclRlbXBsYXRlTW9kZSh3b3Jrc3BhY2UsIGFjdGl2aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmYXVsdCBtb2RlOiB0aW1lciArIHNraWxscyArIGZpbmlzaFxuICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSh3b3Jrc3BhY2Uuc3RhcnRUaW1lKTtcbiAgICAgIHRoaXMucmVuZGVyKHdvcmtzcGFjZSk7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgdGhpcy50ZW1wbGF0ZU5vdGVGaWxlID0gbnVsbDtcbiAgICB0aGlzLmNvbXBsZXRpb25BcHBsaWVkID0gZmFsc2U7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gVGVtcGxhdGUgTW9kZVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJUZW1wbGF0ZU1vZGUoXG4gICAgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIC8vIEZpbmQgb3IgY3JlYXRlIHRvZGF5J3MgZGFpbHkgbm90ZSBmb3IgdGhpcyBhY3Rpdml0eVxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmZpbmRPckNyZWF0ZURhaWx5Tm90ZShhY3Rpdml0eSk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBjb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICB0ZXh0OiBcIkNvdWxkIG5vdCBsb2FkIGFjdGl2aXR5IG5vdGUuXCIsXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY29sb3I6IHZhcigtLXRleHQtZXJyb3IpOyBwYWRkaW5nOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XCIgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGVtcGxhdGVOb3RlRmlsZSA9IGZpbGU7XG5cbiAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSBjYWNoZSB0byBwb3B1bGF0ZSAoaW1wb3J0YW50IGZvciBuZXdseSBjcmVhdGVkIGZpbGVzKVxuICAgIGF3YWl0IHRoaXMud2FpdEZvck1ldGFkYXRhKGZpbGUpO1xuXG4gICAgLy8gUmVuZGVyIHRlbXBsYXRlIGludG8gdGhlIHZpZXcncyBjb250ZW50IGFyZWFcbiAgICBjb25zdCB0ZW1wbGF0ZUNvbnRhaW5lciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1yb290XCIgfSk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4udGVtcGxhdGVFbmdpbmUucmVuZGVyKFxuICAgICAgYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUhLFxuICAgICAgZmlsZSxcbiAgICAgIHRlbXBsYXRlQ29udGFpbmVyLFxuICAgICk7XG5cbiAgICAvLyBXYXRjaCBmb3IgdGhlIHRlbXBsYXRlIG1hcmtpbmcgdGhlIGFjdGl2aXR5IGFzIGRvbmUgaW4gZnJvbnRtYXR0ZXIuXG4gICAgLy8gV2hlbiB0aGUgYWN0aXZpdHkgcHJvcGVydHkgYmVjb21lcyB0cnVlLCBhcHBseSBwbHVnaW4tbGV2ZWwgZWZmZWN0c1xuICAgIC8vIChYUCwgYm9zcyBkYW1hZ2UsIGNsZWFyIGFjdGl2ZVdvcmtzcGFjZSkuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKGNoYW5nZWRGaWxlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRpb25BcHBsaWVkKSByZXR1cm47XG4gICAgICAgIGlmIChjaGFuZ2VkRmlsZS5wYXRoICE9PSBmaWxlLnBhdGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGNoYW5nZWRGaWxlKTtcbiAgICAgICAgY29uc3QgZm0gPSBjYWNoZT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGlmIChmbT8uW2FjdGl2aXR5LnByb3BlcnR5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGlvbkFwcGxpZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGNvbXBsZXRpb25UeXBlID0gZm1bYCR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGVgXSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5hcHBseVRlbXBsYXRlQ29tcGxldGlvbih3b3Jrc3BhY2UsIGFjdGl2aXR5LCBjb21wbGV0aW9uVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0b2RheSdzIGRhaWx5IG5vdGUgaW4gdGhlIGFjdGl2aXR5IGZvbGRlciwgb3IgY3JlYXRlIG9uZS5cbiAgICogRW5zdXJlcyB0aGUgbm90ZSBoYXMgYGFjdGl2aXR5OiA8aWQ+YCBpbiBmcm9udG1hdHRlciBzbyB0aGVcbiAgICogdGVtcGxhdGUgcG9zdC1wcm9jZXNzb3IgYWxzbyB3b3JrcyB3aGVuIG9wZW5pbmcgdGhlIG5vdGUgZGlyZWN0bHkuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGZpbmRPckNyZWF0ZURhaWx5Tm90ZShhY3Rpdml0eTogQWN0aXZpdHlDb25maWcpOiBQcm9taXNlPFRGaWxlIHwgbnVsbD4ge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgZXhpc3RpbmcgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmXG4gICAgICAgIGYuYmFzZW5hbWUgPT09IGRhdGVTdHIsXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgLy8gRW5zdXJlIGl0IGhhcyB0aGUgYWN0aXZpdHkgZmllbGQgaW4gZnJvbnRtYXR0ZXJcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihleGlzdGluZywgKGZtKSA9PiB7XG4gICAgICAgIGlmICghZm0uYWN0aXZpdHkpIGZtLmFjdGl2aXR5ID0gYWN0aXZpdHkuaWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBleGlzdGluZztcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgZm9sZGVyIGV4aXN0c1xuICAgIGNvbnN0IGFic3RyYWN0Rm9sZGVyID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZvbGRlcik7XG4gICAgaWYgKCFhYnN0cmFjdEZvbGRlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGZvbGRlcik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gRm9sZGVyIG1heSBhbHJlYWR5IGV4aXN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIG5ldyBkYWlseSBub3RlIHdpdGggYWN0aXZpdHkgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHtkYXRlU3RyfS5tZGA7XG4gICAgY29uc3QgY29udGVudCA9IGAtLS1cXG5hY3Rpdml0eTogJHthY3Rpdml0eS5pZH1cXG4tLS1cXG5gO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEZpbGUgbWlnaHQgYWxyZWFkeSBleGlzdCB3aXRoIGEgZGlmZmVyZW50IGNhc2luZyBvciByYWNlIGNvbmRpdGlvblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhaXQgdW50aWwgdGhlIG1ldGFkYXRhIGNhY2hlIGhhcyBpbmRleGVkIGEgZmlsZSdzIGZyb250bWF0dGVyLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB3YWl0Rm9yTWV0YWRhdGEoZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIHdoaWxlIChhdHRlbXB0cyA8IDIwKSB7XG4gICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcikgcmV0dXJuO1xuICAgICAgYXdhaXQgc2xlZXAoNTApO1xuICAgICAgYXR0ZW1wdHMrKztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHRlbXBsYXRlIG1hcmtzIHRoZSBhY3Rpdml0eSBhcyBkb25lIGluIGZyb250bWF0dGVyLlxuICAgKiBBcHBsaWVzIHBsdWdpbi1sZXZlbCBlZmZlY3RzOiBYUCwgYm9zcyBkYW1hZ2UsIGNsZWFyIHdvcmtzcGFjZS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlUZW1wbGF0ZUNvbXBsZXRpb24oXG4gICAgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICAgIGNvbXBsZXRpb25UeXBlPzogc3RyaW5nLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBNYXAgdGhlIHRlbXBsYXRlJ3MgY29tcGxldGlvbiB0eXBlIHRvIGEgd29ya3NwYWNlIHN0YXRlXG4gICAgY29uc3Qgd3NUeXBlID0gY29tcGxldGlvblR5cGU/LnRvTG93ZXJDYXNlKCkgYXMgV29ya3NwYWNlVHlwZSB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdGF0ZSA9IHdzVHlwZVxuICAgICAgPyB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IHdzVHlwZSlcbiAgICAgIDogdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSBcImRpc2NpcGxpbmVcIik7XG5cbiAgICAvLyBBcHBseSBYUFxuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS54cE11bHRpcGxpZXIgPiAwKSB7XG4gICAgICBjb25zdCB4cEdhaW4gPSBNYXRoLnJvdW5kKFxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uICogc3RhdGUueHBNdWx0aXBsaWVyLFxuICAgICAgKTtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbd29ya3NwYWNlLmNhdGVnb3J5XSArPSB4cEdhaW47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgYm9zcyBkYW1hZ2UgKHVubGVzcyBza2lwcGVkKVxuICAgIGlmICh3c1R5cGUgIT09IFwic2tpcHBlZFwiKSB7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3Rpdml0eS5kYW1hZ2VQZXJDb21wbGV0aW9uLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciBhY3RpdmUgd29ya3NwYWNlXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gbnVsbDtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gRGVmYXVsdCBNb2RlICh0aW1lciArIHNraWxscyArIGZpbmlzaClcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgc3RhcnRUaW1lcigpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5lbGFwc2VkID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICAgIGNvbnN0IHRpbWVyRWwgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4td29ya3NwYWNlLXRpbWVyXCIpO1xuICAgICAgaWYgKHRpbWVyRWwpIHRpbWVyRWwudGV4dENvbnRlbnQgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5lbGFwc2VkKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVySW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIGNvbnN0IHJvb3QgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGFzaGJvYXJkIG9sZW4td29ya3NwYWNlLXJvb3RcIiB9KTtcblxuICAgIC8vIFRvcCBiYXJcbiAgICBjb25zdCB0b3BCYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS10b3BiYXJcIiB9KTtcblxuICAgIGNvbnN0IGFjdEluZm8gPSB0b3BCYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjdC1pbmZvXCIgfSk7XG4gICAgYWN0SW5mby5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtZW1vamlcIiwgdGV4dDogd29ya3NwYWNlLmVtb2ppIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjdC1uYW1lXCIsIHRleHQ6IHdvcmtzcGFjZS5hY3Rpdml0eU5hbWUgfSk7XG5cbiAgICBjb25zdCB0aW1lckVsID0gdG9wQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS10aW1lclwiLFxuICAgICAgdGV4dDogXCIwMDowMFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmluaXNoQnRuID0gdG9wQmFyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4td29ya3NwYWNlLWZpbmlzaC1idG5cIixcbiAgICAgIHRleHQ6IFwiRklOSVNIXCIsXG4gICAgfSk7XG4gICAgZmluaXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dGaW5pc2hNb2RhbCh3b3Jrc3BhY2UpKTtcblxuICAgIC8vIENhdGVnb3J5IGFjY2VudCBsaW5lXG4gICAgY29uc3QgYWNjZW50Q29sb3IgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1t3b3Jrc3BhY2UuY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xuICAgIGNvbnN0IGFjY2VudCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjY2VudFwiIH0pO1xuICAgIGFjY2VudC5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHthY2NlbnRDb2xvcn0sIHRyYW5zcGFyZW50KWA7XG5cbiAgICAvLyBNYWluIGNvbnRlbnQgYXJlYVxuICAgIGNvbnN0IGNvbnRlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1jb250ZW50XCIgfSk7XG5cbiAgICAvLyBTa2lsbHMgc2VjdGlvblxuICAgIGNvbnN0IHNraWxsc1NlY3Rpb24gPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbHMtc2VjdGlvblwiIH0pO1xuICAgIHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IFwiV09SS1NQQUNFIFNLSUxMU1wiIH0pO1xuXG4gICAgY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gc2tpbGxzU2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzXCIgfSk7XG5cbiAgICBpZiAod29ya3NwYWNlLnNraWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNraWxsc0NvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1uby1za2lsbHNcIixcbiAgICAgICAgdGV4dDogXCJObyBza2lsbHMgdGFnZ2VkIHlldFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qgc2tpbGwgb2Ygd29ya3NwYWNlLnNraWxscykge1xuICAgICAgICBjb25zdCBjaGlwID0gc2tpbGxzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1jaGlwXCIgfSk7XG4gICAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBza2lsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgc2tpbGxzIGJ1dHRvblxuICAgIGNvbnN0IGFkZFNraWxsQnRuID0gc2tpbGxzU2VjdGlvbi5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4td29ya3NwYWNlLWFkZC1za2lsbFwiLFxuICAgICAgdGV4dDogXCIrIEFERCBTS0lMTFwiLFxuICAgIH0pO1xuICAgIGFkZFNraWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dTa2lsbFBpY2tlcih3b3Jrc3BhY2UpKTtcblxuICAgIC8vIEZvY3VzIHpvbmUgXHUyMDE0IG1vdGl2YXRpb25hbCBhcmVhXG4gICAgY29uc3QgZm9jdXNab25lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtZm9jdXNcIiB9KTtcbiAgICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG4gICAgZm9jdXNab25lLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLXRleHRcIixcbiAgICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgfSk7XG4gICAgZm9jdXNab25lLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICB9KTtcblxuICAgIC8vIEJvdHRvbSBiYXJcbiAgICBjb25zdCBib3R0b21CYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1ib3R0b21iYXJcIiB9KTtcbiAgICBjb25zdCBjYXRMYWJlbCA9IHdvcmtzcGFjZS5jYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmtzcGFjZS5jYXRlZ29yeS5zbGljZSgxKTtcbiAgICBib3R0b21CYXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4td29ya3NwYWNlLWNhdGVnb3J5LWxhYmVsXCIsXG4gICAgICB0ZXh0OiBjYXRMYWJlbCxcbiAgICB9KTtcbiAgICBib3R0b21CYXIuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gYWNjZW50Q29sb3I7XG4gIH1cblxuICBwcml2YXRlIHNob3dTa2lsbFBpY2tlcih3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSk6IHZvaWQge1xuICAgIC8vIFByb21wdCBmb3Igc2tpbGwgbmFtZSB2aWEgYSBzaW1wbGUgaW5wdXRcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJBREQgU0tJTExcIiB9KTtcblxuICAgIGNvbnN0IGlucHV0V3JhcCA9IHNoZWV0LmNyZWF0ZURpdih7IGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiAyMHB4IDA7XCIgfSB9KTtcbiAgICBjb25zdCBpbnB1dCA9IGlucHV0V3JhcC5jcmVhdGVFbChcImlucHV0XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1pbnB1dFwiLFxuICAgICAgYXR0cjogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU2tpbGwgbmFtZS4uLlwiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBJZiBza2lsbCBmb2xkZXIgZXhpc3RzLCBsb2FkIGV4aXN0aW5nIHNraWxsc1xuICAgIGlmICh3b3Jrc3BhY2Uuc2tpbGxGb2xkZXIpIHtcbiAgICAgIGNvbnN0IHNraWxscyA9IHRoaXMubG9hZFNraWxsc0Zyb21Gb2xkZXIod29ya3NwYWNlLnNraWxsRm9sZGVyKTtcbiAgICAgIGlmIChza2lsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbHNcIiwgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiAxNnB4O1wiIH0gfSk7XG4gICAgICAgIGZvciAoY29uc3Qgc2tpbGwgb2Ygc2tpbGxzKSB7XG4gICAgICAgICAgY29uc3QgY2hpcCA9IGV4aXN0aW5nLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1jaGlwIG9sZW4tY2xpY2thYmxlXCIgfSk7XG4gICAgICAgICAgY2hpcC50ZXh0Q29udGVudCA9IHNraWxsO1xuICAgICAgICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFNraWxsKHNraWxsKTtcbiAgICAgICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbnMgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgY29uc3QgYWRkQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgICAgdGV4dDogXCJBRERcIixcbiAgICB9KTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgYWRkU2tpbGwodmFsKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgICB0ZXh0OiBcIkNBTkNFTFwiLFxuICAgIH0pO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VTaGVldCgpKTtcblxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlU2hlZXQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFNraWxsID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCF3b3Jrc3BhY2Uuc2tpbGxzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIHdvcmtzcGFjZS5za2lsbHMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gd29ya3NwYWNlO1xuICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIod29ya3NwYWNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VTaGVldCA9ICgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkU2tpbGxzRnJvbUZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIjtcbiAgICByZXR1cm4gZmlsZXNcbiAgICAgIC5maWx0ZXIoKGYpID0+IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKVxuICAgICAgLm1hcCgoZikgPT4gZi5iYXNlbmFtZSlcbiAgICAgIC5zb3J0KCk7XG4gIH1cblxuICBwcml2YXRlIHNob3dGaW5pc2hNb2RhbCh3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZCgoZW5kVGltZS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gNjAwMDApO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJIT1cgRElEIElUIEZFRUw/XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYm9keS1pdGFsaWNcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiAxMnB4IDAgMjBweDtcIiB9LFxuICAgICAgdGV4dDogYCR7d29ya3NwYWNlLmVtb2ppfSAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9IFx1MDBCNyAke2R1cmF0aW9uTWludXRlc30gbWludXRlc2AsXG4gICAgfSk7XG5cbiAgICAvLyBDb21wbGV0aW9uIHN0YXRlIGJ1dHRvbnNcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbHRlcigocykgPT4gcy5lbmFibGVkKTtcbiAgICBjb25zdCBzdGF0ZXNHcmlkID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlcy1ncmlkXCIgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgICAgY29uc3QgYnRuID0gc3RhdGVzR3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGUtYnRuXCIgfSk7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBzdGF0ZS5jb2xvcjtcblxuICAgICAgYnRuLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlLWljb25cIiwgdGV4dDogc3RhdGUuaWNvbiB9KTtcbiAgICAgIGJ0bi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZS1uYW1lXCIsIHRleHQ6IHN0YXRlLm5hbWUgfSk7XG5cbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCA9IHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiB3b3Jrc3BhY2UuYWN0aXZpdHlJZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IHdvcmtzcGFjZS5hY3Rpdml0eU5hbWUsXG4gICAgICAgICAgY2F0ZWdvcnk6IHdvcmtzcGFjZS5jYXRlZ29yeSxcbiAgICAgICAgICB0eXBlOiBzdGF0ZS5pZCxcbiAgICAgICAgICBzdGFydFRpbWU6IHdvcmtzcGFjZS5zdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZTogZW5kVGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIGR1cmF0aW9uTWludXRlcyxcbiAgICAgICAgICBza2lsbHM6IHdvcmtzcGFjZS5za2lsbHMsXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5maW5pc2hXb3Jrc3BhY2UocmVzdWx0LCB3b3Jrc3BhY2UpO1xuICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICAgIC8vIERvbid0IGNsb3NlIG9uIG92ZXJsYXkgdGFwIFx1MjAxNCB1c2VyIG11c3QgY2hvb3NlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZVNoZWV0ID0gKCkgPT4ge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGZpbmlzaFdvcmtzcGFjZShyZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCwgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyAxLiBDcmVhdGUgd29ya3NwYWNlIG1hcmtkb3duIGZpbGUgaW4gdGhlIGFjdGl2aXR5IGZvbGRlclxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgaWYgKGFjdGl2aXR5Py5mb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlV29ya3NwYWNlRmlsZShyZXN1bHQsIGFjdGl2aXR5LmZvbGRlcik7XG4gICAgfVxuXG4gICAgLy8gMi4gVXBkYXRlIHRoZSBhY3Rpdml0eSdzIGRhaWx5IG5vdGUgZnJvbnRtYXR0ZXJcbiAgICBhd2FpdCB0aGlzLm1hcmtBY3Rpdml0eURvbmUod29ya3NwYWNlLCByZXN1bHQpO1xuXG4gICAgLy8gMy4gQXBwbHkgWFBcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gcmVzdWx0LnR5cGUpO1xuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS54cE11bHRpcGxpZXIgPiAwKSB7XG4gICAgICBjb25zdCB4cEdhaW4gPSBNYXRoLnJvdW5kKHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb24gKiBzdGF0ZS54cE11bHRpcGxpZXIpO1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFt3b3Jrc3BhY2UuY2F0ZWdvcnldICs9IHhwR2FpbjtcbiAgICB9XG5cbiAgICAvLyA0LiBBcHBseSBib3NzIGRhbWFnZSAodW5sZXNzIHNraXBwZWQpXG4gICAgaWYgKHJlc3VsdC50eXBlICE9PSBcInNraXBwZWRcIikge1xuICAgICAgY29uc3QgYWN0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgICBpZiAoYWN0KSB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBNYXRoLm1heChcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3QuZGFtYWdlUGVyQ29tcGxldGlvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDUuIENsZWFyIGFjdGl2ZSB3b3Jrc3BhY2VcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgPSBudWxsO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgLy8gNi4gU2hvdyBub3RpY2VcbiAgICBjb25zdCBzdGF0ZUxhYmVsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSByZXN1bHQudHlwZSk/Lm5hbWUgPz8gcmVzdWx0LnR5cGU7XG4gICAgbmV3IE5vdGljZShgJHt3b3Jrc3BhY2UuZW1vaml9ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX0gXHUyMDE0ICR7c3RhdGVMYWJlbH0gXHUwMEI3ICR7cmVzdWx0LmR1cmF0aW9uTWludXRlc31tYCk7XG5cbiAgICAvLyA3LiBTd2l0Y2ggYmFjayB0byBkYXNoYm9hcmRcbiAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZURhc2hib2FyZFZpZXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlV29ya3NwYWNlRmlsZShyZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCwgZm9sZGVyOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gcmVzdWx0LmFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYWN0aXZpdHk/LnByb3BlcnR5ID8/IHJlc3VsdC5hY3Rpdml0eU5hbWU7XG5cbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUocmVzdWx0LmVuZFRpbWUpO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKHJlc3VsdC5zdGFydFRpbWUpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBlbmRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIC8vIE5hbWluZzogXCJXb3Jrc3BhY2UgWVlZWS1NTS1ERCBISE1NXCJcbiAgICBjb25zdCB0aW1lU3RyID0gYCR7U3RyaW5nKGVuZFRpbWUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpfSR7U3RyaW5nKGVuZFRpbWUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGBXb3Jrc3BhY2UgJHtkYXRlU3RyfSAke3RpbWVTdHJ9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0ubWRgO1xuXG4gICAgLy8gQnVpbGQgdGltZXpvbmUtYXdhcmUgdGltZXN0YW1wXG4gICAgY29uc3QgdHpPZmZzZXQgPSAtc3RhcnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgY29uc3QgdHpIb3VycyA9IFN0cmluZyhNYXRoLmZsb29yKE1hdGguYWJzKHR6T2Zmc2V0KSAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHR6TWlucyA9IFN0cmluZyhNYXRoLmFicyh0ek9mZnNldCkgJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHR6U2lnbiA9IHR6T2Zmc2V0ID49IDAgPyBcIitcIiA6IFwiLVwiO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IHN0YXJ0VGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKSArIHR6U2lnbiArIHR6SG91cnMgKyBcIjpcIiArIHR6TWlucztcblxuICAgIGNvbnN0IGVuZFRpbWVzdGFtcCA9IGVuZFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyB0elNpZ24gKyB0ekhvdXJzICsgXCI6XCIgKyB0ek1pbnM7XG5cbiAgICAvLyBQaWNrIGEgcXVvdGVcbiAgICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG5cbiAgICAvLyBDYXBpdGFsaXplIGNvbXBsZXRpb24gdHlwZSB0byBtYXRjaCBleGlzdGluZyBmb3JtYXQgKERpc2NpcGxpbmUvRmxvdy9Ta2lwcGVkKVxuICAgIGNvbnN0IHR5cGVOYW1lID0gcmVzdWx0LnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQudHlwZS5zbGljZSgxKTtcbiAgICBjb25zdCBkdXJhdGlvblN0ciA9IGAke01hdGguZmxvb3IocmVzdWx0LmR1cmF0aW9uTWludXRlcyAvIDYwKX1oICR7cmVzdWx0LmR1cmF0aW9uTWludXRlcyAlIDYwfW1gO1xuXG4gICAgLy8gQnVpbGQgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBmbUxpbmVzID0gW1xuICAgICAgXCItLS1cIixcbiAgICAgIFwiZWRpdG9yLXdpZHRoOiAxMDBcIixcbiAgICAgIGAke3Byb3BlcnR5fTogdHJ1ZWAsXG4gICAgICBgJHtwcm9wZXJ0eX0tVHlwZTogXCIke3R5cGVOYW1lfVwiYCxcbiAgICAgIGBUaW1lc3RhbXA6IFwiJHt0aW1lc3RhbXB9XCJgLFxuICAgICAgYGVuZFRpbWU6IFwiJHtlbmRUaW1lc3RhbXB9XCJgLFxuICAgICAgYGR1cmF0aW9uOiBcIiR7ZHVyYXRpb25TdHJ9XCJgLFxuICAgICAgYGNhdGVnb3J5OiBcIiR7cmVzdWx0LmNhdGVnb3J5fVwiYCxcbiAgICAgIHJlc3VsdC5za2lsbHMubGVuZ3RoID4gMFxuICAgICAgICA/IGBza2lsbHM6IFske3Jlc3VsdC5za2lsbHMubWFwKChzKSA9PiBgXCIke3N9XCJgKS5qb2luKFwiLCBcIil9XWBcbiAgICAgICAgOiBcInNraWxsczogW11cIixcbiAgICAgIFwiY3NzY2xhc3NlczpcIixcbiAgICAgIFwiICAtIGhpZGUtcHJvcGVydGllc1wiLFxuICAgICAgXCItLS1cIixcbiAgICBdO1xuXG4gICAgY29uc3QgYm9keSA9IFtcbiAgICAgIFwiXCIsXG4gICAgICBgIyAke2FjdGl2aXR5Py5lbW9qaSA/PyBcIlwifSAke3Jlc3VsdC5hY3Rpdml0eU5hbWV9IFdvcmtzcGFjZWAsXG4gICAgICBcIlwiLFxuICAgICAgYD4gXCIke3F1b3RlLnRleHR9XCJgLFxuICAgICAgYD4gXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICAgIFwiXCIsXG4gICAgICBcIiMjIE5vdGVzXCIsXG4gICAgICBcIlwiLFxuICAgICAgXCJcIixcbiAgICBdO1xuXG4gICAgY29uc3QgY29udGVudCA9IFsuLi5mbUxpbmVzLCAuLi5ib2R5XS5qb2luKFwiXFxuXCIpO1xuXG4gICAgLy8gRW5zdXJlIGZvbGRlciBleGlzdHNcbiAgICBjb25zdCBhYnN0cmFjdEZvbGRlciA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXIpO1xuICAgIGlmICghYWJzdHJhY3RGb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXIpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBkdXBsaWNhdGUgZmlsZW5hbWVzXG4gICAgbGV0IGZpbmFsUGF0aCA9IGZpbGVQYXRoO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMjtcbiAgICAgIHdoaWxlICh0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgKSkge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgICBmaW5hbFBhdGggPSBgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9ICgke2NvdW50ZXJ9KS5tZGA7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbmFsUGF0aCwgY29udGVudCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1hcmtBY3Rpdml0eURvbmUod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsIHJlc3VsdD86IFdvcmtzcGFjZVJlc3VsdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIEZpbmQgdG9kYXkncyBub3RlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXIgYW5kIHNldCB0aGUgcHJvcGVydHkgdG8gdHJ1ZVxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgY29uc3QgZm9sZGVyID0gYWN0aXZpdHkuZm9sZGVyO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBMb29rIGZvciBhIGZpbGUgbWF0Y2hpbmcgdG9kYXkncyBkYXRlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgdG9kYXlGaWxlID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PiAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmIGYuYmFzZW5hbWUgPT09IGRhdGVTdHJcbiAgICApO1xuXG4gICAgaWYgKHRvZGF5RmlsZSkge1xuICAgICAgLy8gVXBkYXRlIGZyb250bWF0dGVyIFx1MjAxNCBzZXQgcHJvcGVydHkgYW5kIGNvbXBsZXRpb24gdHlwZVxuICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKHRvZGF5RmlsZSwgKGZyb250bWF0dGVyKSA9PiB7XG4gICAgICAgIGZyb250bWF0dGVyW2FjdGl2aXR5LnByb3BlcnR5XSA9IHRydWU7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHJlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSk7XG4gICAgICAgICAgZnJvbnRtYXR0ZXJbYCR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGVgXSA9IHR5cGVOYW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBkYWlseSBub3RlIHdpdGggdGhlIHByb3BlcnR5IHNldFxuICAgICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgICAgY29uc3QgdHlwZUxpbmUgPSByZXN1bHRcbiAgICAgICAgPyBgXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX0tVHlwZTogXCIke3Jlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSl9XCJgXG4gICAgICAgIDogXCJcIjtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBgLS0tXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX06IHRydWUke3R5cGVMaW5lfVxcbi0tLVxcbmA7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZVBhdGgsIGNvbnRlbnQpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEZpbGUgbWlnaHQgYWxyZWFkeSBleGlzdCB3aXRoIGEgZGlmZmVyZW50IG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFRpbWUoc2Vjb25kczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKHNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICBjb25zdCBzID0gc2Vjb25kcyAlIDYwO1xuICAgIGlmIChoID4gMCkge1xuICAgICAgcmV0dXJuIGAke2h9OiR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtTdHJpbmcocykucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfToke1N0cmluZyhzKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgfVxufVxuXG4vLyBVdGlsaXR5XG5mdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgU2V0dGluZ3MgVGFiXG4vLyBDb2xsYXBzaWJsZSBzZWN0aW9ucyBmb3IgYWxsIHBsdWdpbiBjb25maWd1cmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBUZXh0Q29tcG9uZW50LCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZpdHlDb25maWcsIENhdGVnb3J5LCBUZW1wbGVUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfREVWX0NPTkZJRyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIE9sZW5TZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgY29udGFpbmVyRWwuYWRkQ2xhc3MoXCJvbGVuLXNldHRpbmdzXCIpO1xuXG4gICAgLy8gSGVhZGVyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJPbGVuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMS40ZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi1ib3R0b206IDRweDsgcGFkZGluZzogOHB4IDA7XCIgfSxcbiAgICB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICB0ZXh0OiBcIk15dGhvbG9naWNhbCBMaWZlLU9wZXJhdGluZyBTeXN0ZW1cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMTZweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gUXVpY2sgc3RhdHVzIGJhclxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFyKGNvbnRhaW5lckVsKTtcblxuICAgIC8vIFNlY3Rpb25zXG4gICAgdGhpcy5yZW5kZXJQcm9maWxlU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJDYXRlZ29yaWVzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckNhbGVuZGFyU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUaGVtZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckRldkRhc2hib2FyZFNlY3Rpb24oY29udGFpbmVyRWwpO1xuICB9XG5cbiAgLy8gLS0tIENvbGxhcHNpYmxlIFNlY3Rpb24gSGVscGVyIC0tLVxuXG4gIHByaXZhdGUgY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKFxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBpY29uOiBzdHJpbmcsXG4gICAgZGVmYXVsdE9wZW4gPSBmYWxzZVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHBhcmVudC5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlciA9IHNlY3Rpb24uY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogZGVmYXVsdE9wZW4gPyBcIlxcdTI1QkNcIiA6IFwiXFx1MjVCNlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDEwcHg7IHdpZHRoOiAxMnB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGljb24gPyBgJHtpY29ufSAgJHt0aXRsZX1gIDogdGl0bGUsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45NWVtO1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBib2R5ID0gc2VjdGlvbi5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjogeyBzdHlsZTogYHBhZGRpbmc6IDAgMTZweDsgZGlzcGxheTogJHtkZWZhdWx0T3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtgIH0sXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IGJvZHkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG4gICAgICBib2R5LnN0eWxlLmRpc3BsYXkgPSBpc09wZW4gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgIGJvZHkuc3R5bGUucGFkZGluZyA9IGlzT3BlbiA/IFwiMCAxNnB4XCIgOiBcIjEycHggMTZweFwiO1xuICAgICAgYXJyb3cudGV4dENvbnRlbnQgPSBpc09wZW4gPyBcIlxcdTI1QjZcIiA6IFwiXFx1MjVCQ1wiO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlZmF1bHRPcGVuKSBib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjEycHggMTZweFwiO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgLy8gLS0tIFN0YXR1cyBCYXIgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNCYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGhwUGVyY2VudCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUCA+IDBcbiAgICAgID8gTWF0aC5yb3VuZCgodGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAvIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUCkgKiAxMDApXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCBiYXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7IG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpOyBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBgVGllciAke3RoaXMucGx1Z2luLnNldHRpbmdzLmN1cnJlbnRUaWVyfS8xM2AgfSk7XG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBgSFAgJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQfS8ke3RoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUH0gKCR7aHBQZXJjZW50fSUpYCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuaW5UYXJ0YXJ1c1xuICAgICAgPyBcIlRBUlRBUlVTXCJcbiAgICAgIDogdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCJcbiAgICAgICAgPyBcIlBBVVNFRFwiXG4gICAgICAgIDogXCJBQ1RJVkVcIjtcbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IHN0YXRlLFxuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAke3RoaXMucGx1Z2luLnNldHRpbmdzLmluVGFydGFydXMgPyBcInZhcigtLXRleHQtZXJyb3IpXCIgOiBcInZhcigtLXRleHQtbm9ybWFsKVwifTtgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogdGhpcy5wbHVnaW4uc2V0dGluZ3MubWlncmF0ZWQgPyBcIk1pZ3JhdGVkXCIgOiBcIk5vdCBtaWdyYXRlZFwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXN0eWxlOiBpdGFsaWM7XCIgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBQcm9maWxlIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyUHJvZmlsZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiUHJvZmlsZVwiLCBcIlxcdXsxRjQ2NH1cIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJOYW1lXCIpXG4gICAgICAuc2V0RGVzYyhcIllvdXIgbmFtZSBmb3IgdGhlIGRhc2hib2FyZCBncmVldGluZ1wiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlck5hbWUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlck5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTXkgV2h5XCIpXG4gICAgICAuc2V0RGVzYyhcIllvdXIgY29yZSBtb3RpdmF0aW9uIFx1MjAxNCBzaG93biBwZXJpb2RpY2FsbHkgb24gdGhlIGRhc2hib2FyZFwiKVxuICAgICAgLmFkZFRleHRBcmVhKChhcmVhKSA9PlxuICAgICAgICBhcmVhXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm15V2h5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm15V2h5ID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkhlcm8gYmFja2dyb3VuZCBpbWFnZVwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBwYXRoIHRvIHRoZSBoZXJvIGJhY2tncm91bmQgaW1hZ2UgKGUuZy4sIGltYWdlcy9oZXJvLmpwZylcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwicGF0aC90by9pbWFnZS5qcGdcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVyb0JhY2tncm91bmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIEFjdGl2aXRpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJBY3Rpdml0aWVzXCIsIFwiXFx1ezFGM0FGfVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2ldO1xuICAgICAgdGhpcy5yZW5kZXJBY3Rpdml0eUl0ZW0oYm9keSwgYWN0aXZpdHksIGkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBidXR0b25cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIEFjdGl2aXR5XCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0FjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGlkOiBgY3VzdG9tLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgbmFtZTogXCJOZXcgQWN0aXZpdHlcIixcbiAgICAgICAgICAgIGVtb2ppOiBcIlxcdTJCNTBcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIlwiLFxuICAgICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSxcbiAgICAgICAgICAgIHdlZWtseVRhcmdldDogMyxcbiAgICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgICAgaGFzV29ya3NwYWNlOiBmYWxzZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiA1LFxuICAgICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICAgIHByZWZlcnJlZFRpbWU6IFwiYW55dGltZVwiLFxuICAgICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5wdXNoKG5ld0FjdGl2aXR5KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckFjdGl2aXR5SXRlbShjb250YWluZXI6IEhUTUxFbGVtZW50LCBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBIZWFkZXIgcm93IHdpdGggdG9nZ2xlXG4gICAgbmV3IFNldHRpbmcod3JhcHBlcilcbiAgICAgIC5zZXROYW1lKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9YClcbiAgICAgIC5zZXREZXNjKGAke2FjdGl2aXR5LmNhdGVnb3J5fSBcdTAwQjcgJHthY3Rpdml0eS5mb2xkZXIgfHwgXCJubyBmb2xkZXIgc2V0XCJ9YClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKGFjdGl2aXR5LmVuYWJsZWQpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBhbmRhYmxlIGRldGFpbHNcbiAgICBjb25zdCBkZXRhaWxzVG9nZ2xlID0gd3JhcHBlci5jcmVhdGVFbChcImRldGFpbHNcIik7XG4gICAgZGV0YWlsc1RvZ2dsZS5jcmVhdGVFbChcInN1bW1hcnlcIiwge1xuICAgICAgdGV4dDogXCJDb25maWd1cmVcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzVG9nZ2xlLmNyZWF0ZURpdigpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkubmFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmFtZSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRW1vamlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbW9qaSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQ2F0ZWdvcnlcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgYm9keTogXCJCb2R5XCIsIG1pbmQ6IFwiTWluZFwiLCBzcGlyaXQ6IFwiU3Bpcml0XCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuY2F0ZWdvcnkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jYXRlZ29yeSA9IHYgYXMgQ2F0ZWdvcnk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkFjdGl2aXR5IGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgd2l0aCBZWVlZLU1NLUREIG5vdGVzIGFuZCB3b3Jrc3BhY2UgbG9nc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkuZm9sZGVyKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5mb2xkZXIgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkZyb250bWF0dGVyIHByb3BlcnR5XCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5wcm9wZXJ0eSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJvcGVydHkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldlZWtseSB0YXJnZXRcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDcsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LndlZWtseVRhcmdldClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud2Vla2x5VGFyZ2V0ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJpb3JpdHkgKDEtMTApXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxMCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJpb3JpdHkpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByaW9yaXR5ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJlZmVycmVkIHRpbWVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBtb3JuaW5nOiBcIk1vcm5pbmdcIiwgYWZ0ZXJub29uOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIGV2ZW5pbmc6IFwiRXZlbmluZ1wiLCBhbnl0aW1lOiBcIkFueXRpbWVcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJlZmVycmVkVGltZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByZWZlcnJlZFRpbWUgPSB2IGFzIGFueTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmVnbGVjdCB0aHJlc2hvbGQgKGRheXMpXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxNCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkubmVnbGVjdFRocmVzaG9sZClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmVnbGVjdFRocmVzaG9sZCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVzdGltYXRlZCBkdXJhdGlvbiAobWludXRlcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVzdGltYXRlZER1cmF0aW9uID0gbjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJIYXMgd29ya3NwYWNlXCIpXG4gICAgICAuc2V0RGVzYyhcIk9wZW5zIHdvcmtzcGFjZSB2aWV3IHdpdGggdGltZXIgd2hlbiBzdGFydGVkLCBpbnN0ZWFkIG9mIG1hcmtpbmcgZG9uZSBpbW1lZGlhdGVseVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUoYWN0aXZpdHkuaGFzV29ya3NwYWNlKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmhhc1dvcmtzcGFjZSA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIHRlbXBsYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIkJ1aWx0LWluIHRlbXBsYXRlIElEIChlLmcuICd3b3Jrb3V0Jykgb3IgdmF1bHQgcGF0aCB0byAuanMgZmlsZS4gTGVhdmUgZW1wdHkgZm9yIGRlZmF1bHQgd29ya3NwYWNlLlwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIHdvcmtvdXRcIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLndvcmtzcGFjZVRlbXBsYXRlID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlNraWxsIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBza2lsbCB0cmVlIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gSG9tZS9TdGFydHMvRHJhd2luZy9Ta2lsbCB0cmVlXCIpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnNraWxsRm9sZGVyID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5za2lsbEZvbGRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQmxvY2tzIChjb21tYS1zZXBhcmF0ZWQgYWN0aXZpdHkgSURzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoKGFjdGl2aXR5LmJsb2NrcyA/PyBbXSkuam9pbihcIiwgXCIpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmJsb2NrcyA9IHYuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBbHRlcm5hdGVzIHdpdGggKGFjdGl2aXR5IElEKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGggPz8gXCJcIikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5hbHRlcm5hdGVzV2l0aCA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJDaGFpbiBhZnRlciAoYWN0aXZpdHkgSUQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShhY3Rpdml0eS5jaGFpbkFmdGVyID8/IFwiXCIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2hhaW5BZnRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBEZWxldGUgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoXCJEZWxldGUgQWN0aXZpdHlcIilcbiAgICAgICAgICAuc2V0V2FybmluZygpXG4gICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBDYXRlZ29yaWVzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQ2F0ZWdvcmllc1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2F0ZWdvcmllc1wiLCBcIlxcdXsxRjNBOH1cIik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzOiB7IGtleTogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICAgIHsga2V5OiBcIm1pbmRcIiwgbGFiZWw6IFwiTWluZFwiIH0sXG4gICAgICB7IGtleTogXCJzcGlyaXRcIiwgbGFiZWw6IFwiU3Bpcml0XCIgfSxcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7Y2F0LmxhYmVsfSBjb2xvcmApXG4gICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+XG4gICAgICAgICAgY3BcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJUaXRsZSBvdmVycmlkZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0aGUgZHluYW1pYyB0aXRsZSAobGVhdmUgZW1wdHkgZm9yIGF1dG8pXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGl0bGVPdmVycmlkZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRlbXBsZSBVcGtlZXBcIiwgXCJcXHV7MUYzREJ9XFx1RkUwRlwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXTtcblxuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7dGFzay5lbW9qaX0gJHt0YXNrLm5hbWV9YClcbiAgICAgICAgLnNldERlc2MoYEV2ZXJ5ICR7dGFzay5pbnRlcnZhbERheXN9IGRheShzKWApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJOYW1lXCIpLnNldFZhbHVlKHRhc2submFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLm5hbWUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiRGF5c1wiKS5zZXRWYWx1ZShTdHJpbmcodGFzay5pbnRlcnZhbERheXMpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5pbnRlcnZhbERheXMgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJFbW9qaVwiKS5zZXRWYWx1ZSh0YXNrLmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0uZW1vamkgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgVGVtcGxlIFRhc2tcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdGVtcGxlLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgIG5hbWU6IFwiTmV3IFRhc2tcIixcbiAgICAgICAgICBsYXN0Q29tcGxldGVkOiBudWxsLFxuICAgICAgICAgIGludGVydmFsRGF5czogNyxcbiAgICAgICAgICBlbW9qaTogXCJcXHUyNzI4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJDYWxlbmRhclNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2FsZW5kYXIgSW50ZWdyYXRpb25cIiwgXCJcXHV7MUY0QzV9XCIpO1xuXG4gICAgYm9keS5jcmVhdGVFbChcInBcIiwge1xuICAgICAgdGV4dDogXCJNZXJnZSBleHRlcm5hbCB0YXNrcyBpbnRvIHlvdXIgRGF5IE1hcCB0aW1lbGluZS5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXNcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJEYWlseSBOb3RlcyBpbnRlZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJQYXJzZSB0YXNrcyBmcm9tIHlvdXIgZGFpbHkgbm90ZXMgKC0gWyBdIFRhc2sgQHRpbWUgfjMwbSlcIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRGFpbHkgTm90ZXMgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIFlZWVktTU0tREQubWQgbm90ZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiRGFpbHkgTm90ZXNcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBPcHRpb24gQjogVGFza3MgUGx1Z2luXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiVGFza3MgUGx1Z2luIGludGVncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlYWQgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgZnJvbSB0aGUgVGFza3MgcGx1Z2luXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbiA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gT3B0aW9uIEM6IFF1aWNrIFRhc2tzXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVpY2sgVGFza3NcIilcbiAgICAgIC5zZXREZXNjKFwiT2xlbidzIGJ1aWx0LWluIHRhc2sgc3lzdGVtXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MgPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIFF1aWNrIFRhc2tzIGxpc3RcbiAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICBjb25zdCB0b2RheVRhc2tzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maWx0ZXIoXG4gICAgICAgIChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXlcbiAgICAgICk7XG5cbiAgICAgIGlmICh0b2RheVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gYm9keS5jcmVhdGVEaXYoe1xuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiA4cHggMDsgcGFkZGluZzogOHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDZweDtcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0RWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgIHRleHQ6IFwiVG9kYXkncyBRdWljayBUYXNrc1wiLFxuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjllbTsgbWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrc1tpXTtcbiAgICAgICAgICBpZiAocXQuZGF0ZSAhPT0gdG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbmV3IFNldHRpbmcobGlzdEVsKVxuICAgICAgICAgICAgLnNldE5hbWUoYCR7cXQuZG9uZSA/IFwiXFx1MjcxM1wiIDogXCJcXHUyNUNCXCJ9ICR7cXQudGl0bGV9YClcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICBbcXQudGltZSwgcXQuZHVyYXRpb24gPyBgJHtxdC5kdXJhdGlvbn1tYCA6IFwiXCJdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFx1MDBCNyBcIikgfHwgXCJObyB0aW1lIHNldFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiRGVsZXRlXCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgUXVpY2sgVGFza1wiKS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCk7XG4gICAgICAgICAgLy8gQ2xvc2Ugc2V0dGluZ3MgXHUyMDE0IHRoZSBkaWFsb2cgYXBwZWFycyBvbiB0b3BcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRoZW1lIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyVGhlbWVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRoZW1lXCIsIFwiXFx1ezFGM0E4fVwiKTtcblxuICAgIGNvbnN0IHRoZW1lRmllbGRzOiB7IGtleTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBkZWZhdWx0VmFsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYmdQcmltYXJ5XCIsIGxhYmVsOiBcIkJhY2tncm91bmRcIiwgZGVmYXVsdFZhbDogXCIjMGMwYTA5XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRQcmltYXJ5XCIsIGxhYmVsOiBcIlRleHRcIiwgZGVmYXVsdFZhbDogXCIjZjVmMGU4XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRNdXRlZFwiLCBsYWJlbDogXCJNdXRlZCB0ZXh0XCIsIGRlZmF1bHRWYWw6IFwiIzkyOGQ4NVwiIH0sXG4gICAgICB7IGtleTogXCJhY2NlbnRHb2xkXCIsIGxhYmVsOiBcIkFjY2VudCAoZ29sZClcIiwgZGVmYXVsdFZhbDogXCIjYzlhODRjXCIgfSxcbiAgICAgIHsga2V5OiBcImRhbmdlclwiLCBsYWJlbDogXCJEYW5nZXJcIiwgZGVmYXVsdFZhbDogXCIjOGIyZDM1XCIgfSxcbiAgICAgIHsga2V5OiBcInN1Y2Nlc3NcIiwgbGFiZWw6IFwiU3VjY2Vzc1wiLCBkZWZhdWx0VmFsOiBcIiNkNDk0MGFcIiB9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoZW1lRmllbGRzKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShmaWVsZC5sYWJlbClcbiAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT5cbiAgICAgICAgICBjcFxuICAgICAgICAgICAgLnNldFZhbHVlKFxuICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgYXMgYW55KT8uW2ZpZWxkLmtleV0gPz8gZmllbGQuZGVmYXVsdFZhbFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyBhcyBhbnkpW2ZpZWxkLmtleV0gPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlJlc2V0IHRvIEVseXNpYW4gRGFya1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgPSB7fTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICBuZXcgTm90aWNlKFwiVGhlbWUgcmVzZXQgdG8gRWx5c2lhbiBEYXJrIGRlZmF1bHRzXCIpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIEFkdmFuY2VkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkFkdmFuY2VkXCIsIFwiXFx1MjY5OVxcdUZFMEZcIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJTaW11bGF0ZWQgZGF0ZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0b2RheSdzIGRhdGUgZm9yIHRlc3RpbmcgKFlZWVktTU0tREQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIllZWVktTU0tRERcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA9IHYudHJpbSgpIHx8IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlN5c3RlbSBzdGF0ZVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkXG4gICAgICAgICAgLmFkZE9wdGlvbnMoeyBhY3RpdmU6IFwiQWN0aXZlXCIsIHBhdXNlZDogXCJQYXVzZWRcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdiBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIjtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gXCJwYXVzZWRcIiAmJiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT09IFwiYWN0aXZlXCIgJiYgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF1c2VkTXMgPSBEYXRlLm5vdygpIC0gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50b3RhbFBhdXNlZFRpbWUgKz0gcGF1c2VkTXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVvdGUgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIHF1b3RlIGZpbGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIlF1b3Rlcy9TdG9pY1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGggPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJSZS1ydW4gbWlncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlLWltcG9ydCBkYXRhIGZyb20gdGhlIE15dGhvbG9naWNhbCBIYWJpdCBUcmFja2VyIHBsdWdpblwiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIk1pZ3JhdGVcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1pZ3JhdGVkID0gZmFsc2U7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgLy8gUmVsb2FkIHRoZSBwbHVnaW4gdG8gdHJpZ2dlciBtaWdyYXRpb25cbiAgICAgICAgICBhd2FpdCAodGhpcy5wbHVnaW4gYXMgYW55KS5vbmxvYWQoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICBuZXcgTm90aWNlKFwiTWlncmF0aW9uIGNvbXBsZXRlXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBEZXZlbG9wZXIgRGFzaGJvYXJkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyRGV2RGFzaGJvYXJkU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJEZXZlbG9wZXIgRGFzaGJvYXJkXCIsIFwiXFx1ezFGNkUwfVxcdUZFMEZcIik7XG5cbiAgICBib2R5LmNyZWF0ZUVsKFwicFwiLCB7XG4gICAgICB0ZXh0OiBcIkVkaXQgdGhlIHJhdyBkZXZDb25maWcgSlNPTi4gQ2hhbmdlcyBhcmUgYXBwbGllZCBvbiBzYXZlLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHRhcmVhID0gYm9keS5jcmVhdGVFbChcInRleHRhcmVhXCIsIHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMzAwcHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpOyBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLCBudWxsLCAyKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiU2F2ZSBkZXZDb25maWdcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodGV4dGFyZWEudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIERFRkFVTFRfREVWX0NPTkZJRyxcbiAgICAgICAgICAgICAgcGFyc2VkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiZGV2Q29uZmlnIHNhdmVkIGFuZCBhcHBsaWVkXCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gZGVmYXVsdHNcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0geyAuLi5ERUZBVUxUX0RFVl9DT05GSUcgfTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZywgbnVsbCwgMik7XG4gICAgICAgICAgbmV3IE5vdGljZShcImRldkNvbmZpZyByZXNldCB0byBkZWZhdWx0c1wiKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBvcnQvSW1wb3J0XG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRXhwb3J0IGFsbCBzZXR0aW5nc1wiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkNvcHkgdG8gY2xpcGJvYXJkXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncywgbnVsbCwgMik7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGpzb24pO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlNldHRpbmdzIGNvcGllZCB0byBjbGlwYm9hcmRcIik7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgbW9iaWxlIFx1MjAxNCBzaG93IGluIGEgdGV4dGFyZWEgZm9yIG1hbnVhbCBjb3B5XG4gICAgICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIHRhLnZhbHVlID0ganNvbjtcbiAgICAgICAgICAgIHRhLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo1MCU7ei1pbmRleDo5OTk5O2ZvbnQtc2l6ZToxMXB4O1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YSk7XG4gICAgICAgICAgICB0YS5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRhLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJUYXAgdGhlIHRleHQgYXJlYSBhbmQgY29weSBtYW51YWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSW1wb3J0IHNldHRpbmdzXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKGFyZWEpID0+IHtcbiAgICAgICAgYXJlYS5zZXRQbGFjZWhvbGRlcihcIlBhc3RlIEpTT04gaGVyZS4uLlwiKTtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjgwcHhcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUuZm9udFNpemUgPSBcIjExcHhcIjtcblxuICAgICAgICAvLyBTdG9yZSByZWZlcmVuY2UgZm9yIHRoZSBpbXBvcnQgYnV0dG9uXG4gICAgICAgIChib2R5IGFzIGFueSkuX2ltcG9ydEFyZWEgPSBhcmVhO1xuICAgICAgfSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJJbXBvcnRcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcmVhID0gKGJvZHkgYXMgYW55KS5faW1wb3J0QXJlYTtcbiAgICAgICAgICAgIGlmICghYXJlYSkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShhcmVhLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFyc2VkKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiU2V0dGluZ3MgaW1wb3J0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGF0ZSBFbmdpbmVcbi8vIExvYWRzIC5qcyB0ZW1wbGF0ZSBmaWxlcyBmcm9tIHZhdWx0LCBjcmVhdGVzIGEgc2FuZGJveGVkXG4vLyBleGVjdXRpb24gY29udGV4dCB3aXRoIGRhdGEtYmluZGluZyB0byBub3RlIGZyb250bWF0dGVyLFxuLy8gYW5kIHJlbmRlcnMgVUkgaW50byBhIGNvbnRhaW5lciBlbGVtZW50LlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHsgQlVJTFRJTl9URU1QTEFURVMgfSBmcm9tIFwiLi9idWlsdGluc1wiO1xuXG4vKipcbiAqIFRoZSBjb250ZXh0IG9iamVjdCBwYXNzZWQgdG8gZXZlcnkgdGVtcGxhdGUgYXQgcnVudGltZS5cbiAqIFRlbXBsYXRlcyByZWNlaXZlIHRoaXMgYXMgYGN0eGAgYW5kIHVzZSBpdCB0byByZWFkL3dyaXRlXG4gKiBmcm9udG1hdHRlciBhbmQgYnVpbGQgdGhlaXIgVUkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVDb250ZXh0IHtcbiAgLyoqIE9ic2lkaWFuIEFwcCBpbnN0YW5jZSAqL1xuICBhcHA6IEFwcDtcbiAgLyoqIE9sZW4gcGx1Z2luIHJlZmVyZW5jZSAqL1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG4gIC8qKiBUaGUgZGF0YSBub3RlIGN1cnJlbnRseSBiZWluZyB2aWV3ZWQgKi9cbiAgZmlsZTogVEZpbGU7XG4gIC8qKiBET00gY29udGFpbmVyIHRvIHJlbmRlciBpbnRvICovXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gLS0tIERhdGEgQmluZGluZyAtLS1cblxuICAvKiogU25hcHNob3Qgb2YgdGhlIG5vdGUncyBjdXJyZW50IGZyb250bWF0dGVyIChyZWFkLW9ubHkgb2JqZWN0KSAqL1xuICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIC8qKiBHZXQgYSBzaW5nbGUgZnJvbnRtYXR0ZXIgdmFsdWUsIG9yIGFsbCBmcm9udG1hdHRlciBpZiBubyBrZXkgKi9cbiAgZ2V0RGF0YShrZXk/OiBzdHJpbmcpOiB1bmtub3duO1xuICAvKiogV3JpdGUgYSBzaW5nbGUga2V5IGJhY2sgdG8gdGhlIG5vdGUncyBmcm9udG1hdHRlciAqL1xuICBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD47XG4gIC8qKiBCYXRjaC13cml0ZSBtdWx0aXBsZSBrZXlzIHRvIHRoZSBub3RlJ3MgZnJvbnRtYXR0ZXIgKi9cbiAgc2V0TXVsdGlwbGVEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx2b2lkPjtcblxuICAvLyAtLS0gVmF1bHQgSGVscGVycyAtLS1cblxuICAvKiogUmVhZCByYXcgdGV4dCBvZiBhbnkgdmF1bHQgZmlsZSBieSBwYXRoICovXG4gIHJlYWRGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XG4gIC8qKiBHZXQgYWxsIG1hcmtkb3duIGZpbGVzIGluc2lkZSBhIGZvbGRlciAqL1xuICBnZXRGaWxlc0luRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IFRGaWxlW107XG4gIC8qKiBHZXQgZnJvbnRtYXR0ZXIgb2YgYW55IGZpbGUgYnkgcGF0aCAqL1xuICBnZXRGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuXG4gIC8vIC0tLSBVdGlsaXRpZXMgLS0tXG5cbiAgLyoqIE9ic2lkaWFuIE5vdGljZSBmb3IgdG9hc3RzICovXG4gIG5vdGljZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkO1xuICAvKiogbW9tZW50LmpzIChwcm92aWRlZCBieSBPYnNpZGlhbiBnbG9iYWxseSkgKi9cbiAgbW9tZW50OiB0eXBlb2Ygd2luZG93Lm1vbWVudDtcbiAgLyoqIENyZWF0ZSBhbiBIVE1MIGVsZW1lbnQgKHNob3J0aGFuZCkgKi9cbiAgY3JlYXRlRWw8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgdGFnOiBLLFxuICAgIGF0dHJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdO1xufVxuXG4vKipcbiAqIENvcmUgZW5naW5lIHRoYXQgbWFuYWdlcyB0ZW1wbGF0ZSBsb29rdXAsIGxvYWRpbmcsIGFuZCBleGVjdXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUVuZ2luZSB7XG4gIHByaXZhdGUgYXBwOiBBcHA7XG4gIHByaXZhdGUgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICAvKiogQ2FjaGUgb2YgbG9hZGVkIHRlbXBsYXRlIHNvdXJjZSBjb2RlIChwYXRoIFx1MjE5MiBzb3VyY2UpICovXG4gIHByaXZhdGUgdGVtcGxhdGVDYWNoZTogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvLyAtLS0gQWN0aXZpdHkgTG9va3VwIC0tLVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB3b3Jrc3BhY2UgdGVtcGxhdGUgZm9yIGEgZ2l2ZW4gYWN0aXZpdHkgdHlwZS5cbiAgICogTG9va3MgdXAgdGhlIGFjdGl2aXR5IGJ5IElEIGluIHNldHRpbmdzIGFuZCByZXR1cm5zIGl0cyB3b3Jrc3BhY2VUZW1wbGF0ZSBJRC5cbiAgICogVGhlIElEIG1heSByZWZlciB0byBhIGJ1aWx0LWluIHRlbXBsYXRlIChlLmcuIFwid29ya291dFwiKSBvciBhIHZhdWx0IHBhdGguXG4gICAqL1xuICBmaW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlOiBzdHJpbmcpOiB7IHRlbXBsYXRlSWQ6IHN0cmluZyB9IHwgbnVsbCB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoXG4gICAgICAoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlUeXBlICYmIGEuZW5hYmxlZCAmJiBhLndvcmtzcGFjZVRlbXBsYXRlLFxuICAgICk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHsgdGVtcGxhdGVJZDogYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUhIH07XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgTG9hZGluZyAtLS1cblxuICAvKipcbiAgICogTG9hZCB0aGUgdGVtcGxhdGUgc291cmNlIGZyb20gdmF1bHQuIENhY2hlcyB1bnRpbCBpbnZhbGlkYXRlZC5cbiAgICovXG4gIGFzeW5jIGxvYWRUZW1wbGF0ZVNvdXJjZSh0ZW1wbGF0ZVBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIC8vIENoZWNrIGNhY2hlIGZpcnN0XG4gICAgaWYgKHRoaXMudGVtcGxhdGVDYWNoZS5oYXModGVtcGxhdGVQYXRoKSkge1xuICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVDYWNoZS5nZXQodGVtcGxhdGVQYXRoKSE7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIHBhdGggXHUyMDE0IGFkZCAuanMgaWYgbWlzc2luZ1xuICAgIGxldCByZXNvbHZlZFBhdGggPSB0ZW1wbGF0ZVBhdGg7XG4gICAgaWYgKCFyZXNvbHZlZFBhdGguZW5kc1dpdGgoXCIuanNcIikgJiYgIXJlc29sdmVkUGF0aC5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgcmVzb2x2ZWRQYXRoICs9IFwiLmpzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChyZXNvbHZlZFBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLnNldCh0ZW1wbGF0ZVBhdGgsIHNvdXJjZSk7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgT2xlbiBUZW1wbGF0ZUVuZ2luZTogRmFpbGVkIHRvIHJlYWQgdGVtcGxhdGUgJHtyZXNvbHZlZFBhdGh9OmAsIGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZSB0aGUgY2FjaGUgZm9yIGEgc3BlY2lmaWMgdGVtcGxhdGUgKGUuZy4gYWZ0ZXIgZWRpdHMpLlxuICAgKi9cbiAgaW52YWxpZGF0ZUNhY2hlKHRlbXBsYXRlUGF0aD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0ZW1wbGF0ZVBhdGgpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5kZWxldGUodGVtcGxhdGVQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIENvbnRleHQgQ3JlYXRpb24gLS0tXG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBUZW1wbGF0ZUNvbnRleHQgdGhhdCBnZXRzIHBhc3NlZCB0byB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkQ29udGV4dChcbiAgICBmaWxlOiBURmlsZSxcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIGZyb250bWF0dGVyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgKTogVGVtcGxhdGVDb250ZXh0IHtcbiAgICBjb25zdCBhcHAgPSB0aGlzLmFwcDtcbiAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnBsdWdpbjtcblxuICAgIHJldHVybiB7XG4gICAgICBhcHAsXG4gICAgICBwbHVnaW4sXG4gICAgICBmaWxlLFxuICAgICAgY29udGFpbmVyLFxuXG4gICAgICAvLyAtLS0gRGF0YSBCaW5kaW5nIC0tLVxuXG4gICAgICBmcm9udG1hdHRlcjogeyAuLi5mcm9udG1hdHRlciB9LFxuXG4gICAgICBnZXREYXRhKGtleT86IHN0cmluZyk6IHVua25vd24ge1xuICAgICAgICBpZiAoIWtleSkgcmV0dXJuIHsgLi4uZnJvbnRtYXR0ZXIgfTtcbiAgICAgICAgcmV0dXJuIGZyb250bWF0dGVyW2tleV07XG4gICAgICB9LFxuXG4gICAgICBhc3luYyBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgICAgIGZtW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFVwZGF0ZSBvdXIgbG9jYWwgc25hcHNob3RcbiAgICAgICAgZnJvbnRtYXR0ZXJba2V5XSA9IHZhbHVlO1xuICAgICAgfSxcblxuICAgICAgYXN5bmMgc2V0TXVsdGlwbGVEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICAgIGZtW2tdID0gdjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc25hcHNob3RcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICBmcm9udG1hdHRlcltrXSA9IHY7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIC0tLSBWYXVsdCBIZWxwZXJzIC0tLVxuXG4gICAgICBhc3luYyByZWFkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAgICAgY29uc3QgZiA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghZiB8fCAhKGYgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gYXBwLnZhdWx0LnJlYWQoZik7XG4gICAgICB9LFxuXG4gICAgICBnZXRGaWxlc0luRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IFRGaWxlW10ge1xuICAgICAgICByZXR1cm4gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoXG4gICAgICAgICAgKGYpID0+IGYucGF0aC5zdGFydHNXaXRoKGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIiksXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICBnZXRGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsIHtcbiAgICAgICAgY29uc3QgZiA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghZiB8fCAhKGYgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBjYWNoZSA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmKTtcbiAgICAgICAgcmV0dXJuIChjYWNoZT8uZnJvbnRtYXR0ZXIgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID8/IG51bGw7XG4gICAgICB9LFxuXG4gICAgICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gICAgICBub3RpY2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIG5ldyBOb3RpY2UobWVzc2FnZSwgdGltZW91dCk7XG4gICAgICB9LFxuXG4gICAgICBtb21lbnQ6IHdpbmRvdy5tb21lbnQsXG5cbiAgICAgIGNyZWF0ZUVsPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgICAgICB0YWc6IEssXG4gICAgICAgIGF0dHJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICAgICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRycykpIHtcbiAgICAgICAgICAgIGlmIChrID09PSBcInRleHRcIikge1xuICAgICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwiaHRtbFwiKSB7XG4gICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwiY2xzXCIgfHwgayA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gdjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gLS0tIFJlbmRlcmluZyAtLS1cblxuICAvKipcbiAgICogTWFpbiByZW5kZXIgbWV0aG9kLiBSZXNvbHZlcyBhIHRlbXBsYXRlIElEIChidWlsdC1pbiBvciB2YXVsdCBwYXRoKVxuICAgKiBhbmQgcmVuZGVycyBpdCBpbnRvIGEgY29udGFpbmVyIGJvdW5kIHRvIHRoZSBnaXZlbiBub3RlJ3MgZnJvbnRtYXR0ZXIuXG4gICAqL1xuICBhc3luYyByZW5kZXIoXG4gICAgdGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGZpbGU6IFRGaWxlLFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vIDEuIFJlc29sdmUgdGVtcGxhdGUgc291cmNlOiBjaGVjayBidWlsdC1pbiB0ZW1wbGF0ZXMgZmlyc3QsIHRoZW4gdmF1bHRcbiAgICBsZXQgc291cmNlOiBzdHJpbmcgfCBudWxsID0gQlVJTFRJTl9URU1QTEFURVNbdGVtcGxhdGVJZF0gPz8gbnVsbDtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAvLyBGYWxsIGJhY2sgdG8gbG9hZGluZyBmcm9tIHZhdWx0IGFzIGEgLmpzIGZpbGUgcGF0aFxuICAgICAgc291cmNlID0gYXdhaXQgdGhpcy5sb2FkVGVtcGxhdGVTb3VyY2UodGVtcGxhdGVJZCk7XG4gICAgfVxuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIG5vdCBmb3VuZDogJHt0ZW1wbGF0ZUlkfWAsXG4gICAgICAgIFwiQ2hlY2sgdGhlIHRlbXBsYXRlIElEIGluIE9sZW4gU2V0dGluZ3MgXHUyMTkyIEFjdGl2aXRpZXMgXHUyMTkyIENvbmZpZ3VyZS4gQnVpbHQtaW4gdGVtcGxhdGVzOiB3b3Jrb3V0LlwiLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgY3VycmVudCBmcm9udG1hdHRlclxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSAoY2FjaGU/LmZyb250bWF0dGVyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyB7fTtcblxuICAgIC8vIDMuIEJ1aWxkIGNvbnRleHRcbiAgICBjb25zdCBjdHggPSB0aGlzLmJ1aWxkQ29udGV4dChmaWxlLCBjb250YWluZXIsIGZyb250bWF0dGVyKTtcblxuICAgIC8vIDQuIEV4ZWN1dGUgdGVtcGxhdGVcbiAgICB0cnkge1xuICAgICAgLy8gV2Ugd3JhcCB0aGUgdGVtcGxhdGUgc291cmNlIHNvIHRoYXQgYGN0eGAgaXMgYXZhaWxhYmxlIGFzIGEgbG9jYWwgdmFyaWFibGUuXG4gICAgICAvLyBUaGUgdGVtcGxhdGUgY29kZSBjYW4gZGVzdHJ1Y3R1cmUgZnJvbSBjdHggb3IgdXNlIGl0IGRpcmVjdGx5LlxuICAgICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXCJjdHhcIiwgc291cmNlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKGN0eCk7XG5cbiAgICAgIC8vIElmIHRoZSB0ZW1wbGF0ZSByZXR1cm5zIGEgcHJvbWlzZSAoYXN5bmMgdGVtcGxhdGUpLCBhd2FpdCBpdFxuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgT2xlbiBUZW1wbGF0ZUVuZ2luZTogRXJyb3IgZXhlY3V0aW5nIHRlbXBsYXRlICR7dGVtcGxhdGVJZH06YCwgZXJyKTtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIGVycm9yOiAkeyhlcnIgYXMgRXJyb3IpLm1lc3NhZ2V9YCxcbiAgICAgICAgYEluIHRlbXBsYXRlOiAke3RlbXBsYXRlSWR9YCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBlcnJvciBtZXNzYWdlIGluc2lkZSB0aGUgY29udGFpbmVyLlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJFcnJvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCB0aXRsZTogc3RyaW5nLCBoaW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBlcnJvckRpdiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvclwiIH0pO1xuICAgIGVycm9yRGl2LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3ItdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG4gICAgZXJyb3JEaXYuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvci1oaW50XCIsIHRleHQ6IGhpbnQgfSk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gVGVtcGxhdGUgXHUyMDE0IFdvcmtvdXQgVHJhY2tlclxuLy8gUmVuZGVycyBpbnNpZGUgYW55IG5vdGUgd2l0aCBgYWN0aXZpdHk6IHdvcmtvdXRgIGluIGZyb250bWF0dGVyLlxuLy8gQWxsIGRhdGEgaXMgcmVhZC93cml0dGVuIHZpYSBjdHguZ2V0RGF0YSAvIGN0eC5zZXREYXRhIFx1MjAxNCB0aGVcbi8vIG5vdGUgYm9keSBzdGF5cyBlbXB0eTsgdGhlIFVJIGlzIGdlbmVyYXRlZCBlbnRpcmVseSBoZXJlLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHsgY29udGFpbmVyLCBnZXREYXRhLCBzZXREYXRhLCBzZXRNdWx0aXBsZURhdGEsIGFwcCwgbW9tZW50LCBub3RpY2UsXG4gICAgICAgIGNyZWF0ZUVsLCBmaWxlLCByZWFkRmlsZSwgZ2V0RmlsZXNJbkZvbGRlciwgZ2V0RmlsZU1ldGFkYXRhIH0gPSBjdHg7XG5cbi8vIFx1MjUwMFx1MjUwMCBDb25maWd1cmF0aW9uIFx1MjUwMFx1MjUwMFxuY29uc3QgV09SS09VVF9GT0xERVIgPSBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiO1xuY29uc3QgU1RBVFNfRklMRSA9IFwiUGVyc29uYWwgTGlmZS9QZXJzb25hbCBTdGF0cy5tZFwiO1xuY29uc3QgRVhFUkNJU0VfREJfRk9MREVSID0gXCJIb21lL0FjdGl2aXRpZXMvRXhlcmNpc2VzIGRhdGFiYXNlXCI7XG5cbmNvbnN0IFRIRU1FID0ge1xuICBjb2xvcjogXCIjOWE4YzdhXCIsXG4gIGNvbG9ySG92ZXI6IFwiI2FhOWM4YVwiLFxuICBjb2xvckJvcmRlcjogXCIjM2EzNDJhXCIsXG4gIGNvbG9yQm9yZGVySG92ZXI6IFwiIzRhNDQzYVwiLFxuICBjb2xvck11dGVkOiBcIiM2YTVhNGFcIixcbiAgY29sb3JMaWdodDogXCIjYjhhODkwXCIsXG4gIGNvbG9yRGlzY2lwbGluZTogXCIjYTg5ODYwXCIsXG4gIGNvbG9yRmxvdzogXCIjNmE4YTlhXCIsXG4gIHN5c3RlbUdyZWVuOiBcIiM3YTlhN2RcIlxufTtcblxuY29uc3QgU1RSRU5HVEhfTEVWRUxTID0ge1xuICBcIlVudHJhaW5lZFwiOiB7IGNvbG9yOiBcIiM2YTZhNmFcIiwgaWNvbjogXCJcXHUyNUNCXCIgfSxcbiAgXCJCZWdpbm5lclwiOiAgeyBjb2xvcjogXCIjYTg5ODYwXCIsIGljb246IFwiXFx1MjVEMFwiIH0sXG4gIFwiTm92aWNlXCI6ICAgIHsgY29sb3I6IFwiIzdhOWE3ZFwiLCBpY29uOiBcIlxcdTI1RDFcIiB9LFxuICBcIkludGVybWVkaWF0ZVwiOiB7IGNvbG9yOiBcIiM2YThhOWFcIiwgaWNvbjogXCJcXHUyNUQ1XCIgfSxcbiAgXCJBZHZhbmNlZFwiOiAgeyBjb2xvcjogXCIjOGE3YTlhXCIsIGljb246IFwiXFx1MjVDRlwiIH0sXG4gIFwiRWxpdGVcIjogICAgIHsgY29sb3I6IFwiIzlhNmE3YVwiLCBpY29uOiBcIlxcdTI2MDVcIiB9XG59O1xuXG4vLyBcdTI1MDBcdTI1MDAgU3RhdGUgKGZyb20gZnJvbnRtYXR0ZXIpIFx1MjUwMFx1MjUwMFxubGV0IGV4ZXJjaXNlcyA9IGdldERhdGEoXCJleGVyY2lzZXNcIikgfHwgW107XG5sZXQgbXVzY2xlR3JvdXBzID0gZ2V0RGF0YShcIm11c2NsZUdyb3Vwc1wiKSB8fCBbXTtcbmxldCBjdXJyZW50TXVzY2xlSW5kZXggPSBnZXREYXRhKFwiY3VycmVudE11c2NsZUluZGV4XCIpIHx8IDA7XG5jb25zdCBpc0NvbXBsZXRlZCA9IGdldERhdGEoXCJXb3Jrb3V0XCIpID09PSB0cnVlO1xuXG4vLyBcdTI1MDBcdTI1MDAgSW5qZWN0IHN0eWxlcyBvbmNlIFx1MjUwMFx1MjUwMFxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sZW4tdHBsLXdvcmtvdXQtdjFcIikpIHtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlLmlkID0gXCJvbGVuLXRwbC13b3Jrb3V0LXYxXCI7XG4gIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgIC5vdHctY29udGFpbmVyICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLm90dy1jb250YWluZXIgeyBtYXgtd2lkdGg6IDUwMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMTBweCAwOyBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IH1cbiAgICBAa2V5ZnJhbWVzIG90dy1icmVhdGhlIHsgMCUsIDEwMCUgeyBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCByZ2JhKDE1NCwxNDAsMTIyLDAuMDMpOyB9IDUwJSB7IGJveC1zaGFkb3c6IGluc2V0IDAgMCA0MHB4IHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IH0gfVxuICAgIC5vdHctY2FyZCB7IGJhY2tncm91bmQ6ICMwYTBhMGE7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IHBhZGRpbmc6IDE2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuICAgIC5vdHctY2FyZC1icmVhdGhlIHsgYW5pbWF0aW9uOiBvdHctYnJlYXRoZSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxuICAgIC5vdHctaGVhZGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAyMHB4OyB9XG4gICAgLm90dy10aXRsZSB7IG1hcmdpbjogMDsgY29sb3I6ICM5YThjN2E7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDRweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctcHJvZ3Jlc3MtbGFiZWwgeyBjb2xvcjogIzZhNWE0YTsgZm9udC1zaXplOiAxMnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgICAub3R3LWJ0biB7IHBhZGRpbmc6IDE0cHggMjRweDsgYm9yZGVyOiBub25lOyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAycHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctYnRuLXByaW1hcnkgeyBiYWNrZ3JvdW5kOiAjOWE4YzdhOyBjb2xvcjogIzBhMGEwYTsgd2lkdGg6IDEwMCU7IH1cbiAgICAub3R3LWJ0bi1wcmltYXJ5OmFjdGl2ZSB7IHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IH1cbiAgICAub3R3LWJ0bi1zZWNvbmRhcnkgeyBiYWNrZ3JvdW5kOiAjMGYwZjBmOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBjb2xvcjogIzZhNWE0YTsgfVxuICAgIC5vdHctYnRuLXNlY29uZGFyeTphY3RpdmUgeyBib3JkZXItY29sb3I6ICM5YThjN2E7IGNvbG9yOiAjOWE4YzdhOyB9XG4gICAgLm90dy1idG4tZmluaXNoIHsgYmFja2dyb3VuZDogIzdhOWE3ZDsgY29sb3I6ICMwYTBhMGE7IH1cbiAgICAub3R3LWJ0bi1kYXNoZWQgeyB3aWR0aDogMTAwJTsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGJvcmRlcjogMXB4IGRhc2hlZCAjM2EzNDJhOyBjb2xvcjogIzZhNWE0YTsgfVxuICAgIC5vdHctYnRuLWRhc2hlZDphY3RpdmUgeyBib3JkZXItY29sb3I6ICM5YThjN2E7IGNvbG9yOiAjOWE4YzdhOyB9XG4gICAgLm90dy1uYXYtcm93IHsgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBtYXJnaW4tdG9wOiAyNHB4OyB9XG4gICAgLm90dy1uYXYtcm93IC5vdHctYnRuIHsgZmxleDogMTsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gICAgLm90dy1zZXQtcm93IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTJweDsgcGFkZGluZzogMTJweDsgYmFja2dyb3VuZDogIzBmMGYwZjsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgbWFyZ2luLWJvdHRvbTogNnB4OyB9XG4gICAgLm90dy1zZXQtcm93LmNvbXBsZXRlZCB7IG9wYWNpdHk6IDAuNjsgfVxuICAgIC5vdHctY2hlY2tib3ggeyB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBib3JkZXI6IDJweCBzb2xpZCAjM2EzNDJhOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogIzBhMGEwYTsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRyYW5zaXRpb246IGFsbCAwLjJzOyBmbGV4LXNocmluazogMDsgfVxuICAgIC5vdHctY2hlY2tib3guY2hlY2tlZCB7IGJhY2tncm91bmQ6ICM3YTlhN2Q7IGJvcmRlci1jb2xvcjogIzdhOWE3ZDsgfVxuICAgIC5vdHctaW5wdXQgeyBwYWRkaW5nOiA2cHg7IGJhY2tncm91bmQ6ICMwYTBhMGE7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IGNvbG9yOiAjOWE4YzdhOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgd2lkdGg6IDUwcHg7IH1cbiAgICAub3R3LWN0cmwtYnRuIHsgd2lkdGg6IDMycHg7IGhlaWdodDogMzJweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGJhY2tncm91bmQ6ICMwZjBmMGY7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IGNvbG9yOiAjOWE4YzdhOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTZweDsgZmxleC1zaHJpbms6IDA7IH1cbiAgICAub3R3LWN0cmwtYnRuOmFjdGl2ZSB7IGJhY2tncm91bmQ6ICM5YThjN2E7IGNvbG9yOiAjMGEwYTBhOyB9XG4gICAgLm90dy13YXJtdXAtYmFkZ2UgeyBmb250LXNpemU6IDlweDsgY29sb3I6ICM2YThhOWE7IHBhZGRpbmc6IDJweCA2cHg7IGJhY2tncm91bmQ6IHJnYmEoMTA2LDEzOCwxNTQsMC4xNSk7IGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgIC5vdHctc3RyZW5ndGgtYmFyIHsgaGVpZ2h0OiA2cHg7IGJhY2tncm91bmQ6ICMxYTFhMWE7IGJvcmRlci1yYWRpdXM6IDNweDsgb3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luLXRvcDogNnB4OyB9XG4gICAgLm90dy1zdHJlbmd0aC1maWxsIHsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiAzcHg7IHRyYW5zaXRpb246IHdpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTsgfVxuICAgIC5vdHctc3RyZW5ndGgtYmFkZ2UgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IHBhZGRpbmc6IDZweCAxMnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctcHItYm94IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0cHg7IHBhZGRpbmc6IDEwcHggMTJweDsgYmFja2dyb3VuZDogcmdiYSgxNjgsMTUyLDk2LDAuMSk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY4LDE1Miw5NiwwLjMpOyBib3JkZXItcmFkaXVzOiA0cHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAgIC5vdHctbW9kYWwtb3ZlcmxheSB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgei1pbmRleDogOTk5OTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCk7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlLCBiYWNrZHJvcC1maWx0ZXIgMC41cyBlYXNlOyB9XG4gICAgLm90dy1tb2RhbC1vdmVybGF5LnZpc2libGUgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOTUpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTsgfVxuICAgIC5vdHctbW9kYWwtY29udGVudCB7IGJhY2tncm91bmQ6ICMwYTBhMGE7IHBhZGRpbmc6IDI4cHggMjBweDsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgbWF4LXdpZHRoOiA1NTBweDsgd2lkdGg6IDkwJTsgbWF4LWhlaWdodDogODV2aDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxNnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjVzIGVhc2U7IG92ZXJmbG93LXk6IGF1dG87IH1cbiAgICAub3R3LW1vZGFsLW92ZXJsYXkudmlzaWJsZSAub3R3LW1vZGFsLWNvbnRlbnQgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAub3R3LXN1bW1hcnktY29tcGxldGUgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDI0cHggMDsgfVxuICAgIC5vdHctc3VtbWFyeS1jb21wbGV0ZSBoMiB7IG1hcmdpbjogMDsgY29sb3I6ICM3YTlhN2Q7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDNweDsgfVxuICAgIC5vdHctZmVlbC1idG4geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDE2cHggMjBweDsgYmFja2dyb3VuZDogIzBjMGMwYzsgY3Vyc29yOiBwb2ludGVyOyBtYXJnaW4tYm90dG9tOiAxMHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxuICAgIC5vdHctZmVlbC1idG46YWN0aXZlIHsgYmFja2dyb3VuZDogIzEwMTAxMDsgfVxuICAgIC5vdHctY29ybmVycyB7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBVdGlsaXR5IEZ1bmN0aW9ucyBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gYWRkQ29ybmVycyhlbCwgY29sb3IsIHNpemUgPSAxNCkge1xuICBbXCJUTFwiLCBcIlRSXCIsIFwiQkxcIiwgXCJCUlwiXS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpc1RvcCA9IHBvcy5pbmNsdWRlcyhcIlRcIiksIGlzTGVmdCA9IHBvcy5pbmNsdWRlcyhcIkxcIik7XG4gICAgYy5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOmFic29sdXRlOyR7aXNUb3A/XCJ0b3A6MFwiOlwiYm90dG9tOjBcIn07JHtpc0xlZnQ/XCJsZWZ0OjBcIjpcInJpZ2h0OjBcIn07d2lkdGg6JHtzaXplfXB4O2hlaWdodDoke3NpemV9cHg7Ym9yZGVyLSR7aXNUb3A/XCJ0b3BcIjpcImJvdHRvbVwifToxcHggc29saWQgJHtjb2xvcn07Ym9yZGVyLSR7aXNMZWZ0P1wibGVmdFwiOlwicmlnaHRcIn06MXB4IHNvbGlkICR7Y29sb3J9O3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZTtgO1xuICAgIGVsLmFwcGVuZENoaWxkKGMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlMVJNKHdlaWdodCwgcmVwcykge1xuICBpZiAocmVwcyA9PT0gMCB8fCB3ZWlnaHQgPT09IDApIHJldHVybiAwO1xuICBpZiAocmVwcyA9PT0gMSkgcmV0dXJuIHdlaWdodDtcbiAgcmV0dXJuIE1hdGgucm91bmQod2VpZ2h0ICogKDEgKyByZXBzIC8gMzApKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rmlyc3RXb3JraW5nU2V0SW5kZXgoc2V0cykge1xuICByZXR1cm4gc2V0cy5maW5kSW5kZXgoKHMpID0+ICFzLmlzV2FybXVwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2FybXVwV2VpZ2h0cyhleCwgbmV3Vykge1xuICBjb25zdCB3YXJtdXBzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+IHMuaXNXYXJtdXApO1xuICBbMC41LCAwLjcsIDAuODVdLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICBpZiAod2FybXVwc1tpXSkgd2FybXVwc1tpXS53ZWlnaHQgPSBNYXRoLnJvdW5kKG5ld1cgKiBwKTtcbiAgfSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBlcnNvbmFsU3RhdHMoKSB7XG4gIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKFNUQVRTX0ZJTEUpO1xuICBpZiAoIWZtKSByZXR1cm4geyB3ZWlnaHQ6IDYxLCBoZWlnaHQ6IDE3NSwgYmlydGhkYXRlOiBcIjIwMDUtMTEtMjlcIiB9O1xuICByZXR1cm4geyB3ZWlnaHQ6IGZtLldlaWdodCB8fCA2MSwgaGVpZ2h0OiBmbS5IZWlnaHQgfHwgMTc1LCBiaXJ0aGRhdGU6IGZtLkJpcnRoZGF0ZSB8fCBcIjIwMDUtMTEtMjlcIiB9O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBZ2UoYmQpIHtcbiAgaWYgKCFiZCkgcmV0dXJuIDIwO1xuICBjb25zdCBiID0gbmV3IERhdGUoYmQpLCB0ID0gbmV3IERhdGUoKTtcbiAgbGV0IGEgPSB0LmdldEZ1bGxZZWFyKCkgLSBiLmdldEZ1bGxZZWFyKCk7XG4gIGlmICh0LmdldE1vbnRoKCkgPCBiLmdldE1vbnRoKCkgfHwgKHQuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpICYmIHQuZ2V0RGF0ZSgpIDwgYi5nZXREYXRlKCkpKSBhLS07XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0YW5kYXJkVmFsdWUodmFsKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSBcInN0cmluZ1wiKSB2YWwgPSBTdHJpbmcodmFsKTtcbiAgdmFsID0gdmFsLnRyaW0oKTtcbiAgaWYgKHZhbC5pbmNsdWRlcyhcIjxcIikpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbC5yZXBsYWNlKC9bPFxcc10vZywgXCJcIikpO1xuICAgIHJldHVybiAhaXNOYU4obnVtKSAmJiBudW0gPiAwID8gbnVtICogMC41IDogMC4xO1xuICB9XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyAwIDogbnVtO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTdHJlbmd0aFN0YW5kYXJkKGV4ZXJjaXNlTmFtZSkge1xuICBjb25zdCBmaWxlUGF0aCA9IEVYRVJDSVNFX0RCX0ZPTERFUiArIFwiL1wiICsgZXhlcmNpc2VOYW1lICsgXCIubWRcIjtcbiAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEoZmlsZVBhdGgpO1xuICBjb25zdCBpc0JXID0gZm0/LlR5cGUgPT09IFwiQm9keXdlaWdodFwiO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoZmlsZVBhdGgpO1xuICBpZiAoIWNvbnRlbnQpIHJldHVybiBudWxsO1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gIGNvbnN0IGJ3VGFibGUgPSBbXSwgYWdlVGFibGUgPSBbXTtcbiAgbGV0IGN1cnJlbnRUYWJsZSA9IG51bGw7XG4gIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgIGlmIChsaW5lLm1hdGNoKC9cXHxcXHMqQldcXHMqXFx8L2kpKSB7IGN1cnJlbnRUYWJsZSA9IFwiYndcIjsgY29udGludWU7IH1cbiAgICBpZiAobGluZS5tYXRjaCgvXFx8XFxzKkFnZVxccypcXHwvaSkpIHsgY3VycmVudFRhYmxlID0gXCJhZ2VcIjsgY29udGludWU7IH1cbiAgICBpZiAobGluZS5zdGFydHNXaXRoKFwifC0tLVwiKSB8fCBsaW5lLnN0YXJ0c1dpdGgoXCJ8IC0tLVwiKSkgY29udGludWU7XG4gICAgY29uc3QgbSA9IGxpbmUubWF0Y2goL1xcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfC8pO1xuICAgIGlmIChtKSB7XG4gICAgICBjb25zdCByb3cgPSB7IGtleTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bMV0pLCBiZWdpbm5lcjogcGFyc2VTdGFuZGFyZFZhbHVlKG1bMl0pLCBub3ZpY2U6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzNdKSwgaW50ZXJtZWRpYXRlOiBwYXJzZVN0YW5kYXJkVmFsdWUobVs0XSksIGFkdmFuY2VkOiBwYXJzZVN0YW5kYXJkVmFsdWUobVs1XSksIGVsaXRlOiBwYXJzZVN0YW5kYXJkVmFsdWUobVs2XSkgfTtcbiAgICAgIGlmIChyb3cua2V5ID4gMCAmJiAocm93LmJlZ2lubmVyID4gMCB8fCByb3cubm92aWNlID4gMCB8fCByb3cuaW50ZXJtZWRpYXRlID4gMCkpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYWJsZSA9PT0gXCJid1wiKSBid1RhYmxlLnB1c2gocm93KTtcbiAgICAgICAgZWxzZSBpZiAoY3VycmVudFRhYmxlID09PSBcImFnZVwiKSBhZ2VUYWJsZS5wdXNoKHJvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGJ3VGFibGUsIGFnZVRhYmxlLCBpc0JvZHl3ZWlnaHQ6IGlzQlcsIGhhc1ZhbGlkRGF0YTogYndUYWJsZS5sZW5ndGggPiAwIHx8IGFnZVRhYmxlLmxlbmd0aCA+IDAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVTdGFuZGFyZCh0YWJsZSwgdmFsdWUpIHtcbiAgaWYgKCF0YWJsZSB8fCB0YWJsZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICBjb25zdCBzb3J0ZWQgPSBbLi4udGFibGVdLnNvcnQoKGEsIGIpID0+IGEua2V5IC0gYi5rZXkpO1xuICBsZXQgbG93ZXIgPSBzb3J0ZWRbMF0sIHVwcGVyID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWQubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgaWYgKHNvcnRlZFtpXS5rZXkgPD0gdmFsdWUgJiYgc29ydGVkW2kgKyAxXS5rZXkgPj0gdmFsdWUpIHsgbG93ZXIgPSBzb3J0ZWRbaV07IHVwcGVyID0gc29ydGVkW2kgKyAxXTsgYnJlYWs7IH1cbiAgfVxuICBpZiAodmFsdWUgPD0gbG93ZXIua2V5KSByZXR1cm4geyAuLi5sb3dlciB9O1xuICBpZiAodmFsdWUgPj0gdXBwZXIua2V5KSByZXR1cm4geyAuLi51cHBlciB9O1xuICBjb25zdCByYXRpbyA9ICh2YWx1ZSAtIGxvd2VyLmtleSkgLyAodXBwZXIua2V5IC0gbG93ZXIua2V5KTtcbiAgcmV0dXJuIHsga2V5OiB2YWx1ZSwgYmVnaW5uZXI6IGxvd2VyLmJlZ2lubmVyICsgcmF0aW8gKiAodXBwZXIuYmVnaW5uZXIgLSBsb3dlci5iZWdpbm5lciksIG5vdmljZTogbG93ZXIubm92aWNlICsgcmF0aW8gKiAodXBwZXIubm92aWNlIC0gbG93ZXIubm92aWNlKSwgaW50ZXJtZWRpYXRlOiBsb3dlci5pbnRlcm1lZGlhdGUgKyByYXRpbyAqICh1cHBlci5pbnRlcm1lZGlhdGUgLSBsb3dlci5pbnRlcm1lZGlhdGUpLCBhZHZhbmNlZDogbG93ZXIuYWR2YW5jZWQgKyByYXRpbyAqICh1cHBlci5hZHZhbmNlZCAtIGxvd2VyLmFkdmFuY2VkKSwgZWxpdGU6IGxvd2VyLmVsaXRlICsgcmF0aW8gKiAodXBwZXIuZWxpdGUgLSBsb3dlci5lbGl0ZSkgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXZlcmFnZWRTdGFuZGFyZHMoc3RkKSB7XG4gIGNvbnN0IHN0YXRzID0gYXdhaXQgZ2V0UGVyc29uYWxTdGF0cygpO1xuICBjb25zdCBidyA9IGludGVycG9sYXRlU3RhbmRhcmQoc3RkLmJ3VGFibGUsIHN0YXRzLndlaWdodCk7XG4gIGNvbnN0IGFnID0gaW50ZXJwb2xhdGVTdGFuZGFyZChzdGQuYWdlVGFibGUsIGNhbGN1bGF0ZUFnZShzdGF0cy5iaXJ0aGRhdGUpKTtcbiAgaWYgKGJ3ICYmIGFnKSByZXR1cm4geyBiZWdpbm5lcjogKGJ3LmJlZ2lubmVyICsgYWcuYmVnaW5uZXIpIC8gMiwgbm92aWNlOiAoYncubm92aWNlICsgYWcubm92aWNlKSAvIDIsIGludGVybWVkaWF0ZTogKGJ3LmludGVybWVkaWF0ZSArIGFnLmludGVybWVkaWF0ZSkgLyAyLCBhZHZhbmNlZDogKGJ3LmFkdmFuY2VkICsgYWcuYWR2YW5jZWQpIC8gMiwgZWxpdGU6IChidy5lbGl0ZSArIGFnLmVsaXRlKSAvIDIgfTtcbiAgcmV0dXJuIGJ3IHx8IGFnIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZVN0cmVuZ3RoTGV2ZWwoY3YsIHN0ZCkge1xuICBpZiAoIXN0ZCB8fCBjdiA8IDApIHJldHVybiB7IGxldmVsOiBcIlVudHJhaW5lZFwiLCBjb2xvcjogXCIjNmE2YTZhXCIsIHByb2dyZXNzOiAwLCBuZXh0VGFyZ2V0OiBzdGQ/LmJlZ2lubmVyIHx8IDEgfTtcbiAgY29uc3QgeyBiZWdpbm5lciwgbm92aWNlLCBpbnRlcm1lZGlhdGUsIGFkdmFuY2VkLCBlbGl0ZSB9ID0gc3RkO1xuICBpZiAoY3YgPj0gZWxpdGUpIHJldHVybiB7IGxldmVsOiBcIkVsaXRlXCIsIGNvbG9yOiBcIiM5YTZhN2FcIiwgcHJvZ3Jlc3M6IDEwMCwgbmV4dFRhcmdldDogbnVsbCB9O1xuICBpZiAoY3YgPj0gYWR2YW5jZWQpIHJldHVybiB7IGxldmVsOiBcIkFkdmFuY2VkXCIsIGNvbG9yOiBcIiM4YTdhOWFcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBhZHZhbmNlZCkgLyAoZWxpdGUgLSBhZHZhbmNlZCkpICogMTAwLCBuZXh0VGFyZ2V0OiBlbGl0ZSB9O1xuICBpZiAoY3YgPj0gaW50ZXJtZWRpYXRlKSByZXR1cm4geyBsZXZlbDogXCJJbnRlcm1lZGlhdGVcIiwgY29sb3I6IFwiIzZhOGE5YVwiLCBwcm9ncmVzczogKChjdiAtIGludGVybWVkaWF0ZSkgLyAoYWR2YW5jZWQgLSBpbnRlcm1lZGlhdGUpKSAqIDEwMCwgbmV4dFRhcmdldDogYWR2YW5jZWQgfTtcbiAgaWYgKGN2ID49IG5vdmljZSkgcmV0dXJuIHsgbGV2ZWw6IFwiTm92aWNlXCIsIGNvbG9yOiBcIiM3YTlhN2RcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBub3ZpY2UpIC8gKGludGVybWVkaWF0ZSAtIG5vdmljZSkpICogMTAwLCBuZXh0VGFyZ2V0OiBpbnRlcm1lZGlhdGUgfTtcbiAgaWYgKGN2ID49IGJlZ2lubmVyKSByZXR1cm4geyBsZXZlbDogXCJCZWdpbm5lclwiLCBjb2xvcjogXCIjYTg5ODYwXCIsIHByb2dyZXNzOiAoKGN2IC0gYmVnaW5uZXIpIC8gKG5vdmljZSAtIGJlZ2lubmVyKSkgKiAxMDAsIG5leHRUYXJnZXQ6IG5vdmljZSB9O1xuICByZXR1cm4geyBsZXZlbDogXCJVbnRyYWluZWRcIiwgY29sb3I6IFwiIzZhNmE2YVwiLCBwcm9ncmVzczogYmVnaW5uZXIgPiAwID8gTWF0aC5tYXgoMCwgKGN2IC8gYmVnaW5uZXIpICogMTAwKSA6IDAsIG5leHRUYXJnZXQ6IGJlZ2lubmVyIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwobmFtZSwgdywgciwgbWF4Uikge1xuICBjb25zdCBzdGQgPSBhd2FpdCBnZXRTdHJlbmd0aFN0YW5kYXJkKG5hbWUpO1xuICBpZiAoIXN0ZCB8fCAhc3RkLmhhc1ZhbGlkRGF0YSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGF2ZyA9IGF3YWl0IGdldEF2ZXJhZ2VkU3RhbmRhcmRzKHN0ZCk7XG4gIGlmICghYXZnKSByZXR1cm4gbnVsbDtcbiAgaWYgKHN0ZC5pc0JvZHl3ZWlnaHQpIHtcbiAgICBjb25zdCBlZmYgPSBtYXhSICE9PSBudWxsICYmIG1heFIgIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KHIsIG1heFIpIDogcjtcbiAgICBjb25zdCByZXMgPSBkZXRlcm1pbmVTdHJlbmd0aExldmVsKGVmZiwgYXZnKTtcbiAgICByZXR1cm4geyAuLi5yZXMsIGN1cnJlbnRWYWx1ZTogZWZmLCBpc0JvZHl3ZWlnaHQ6IHRydWUsIHVuaXQ6IFwicmVwc1wiLCBkaXNwbGF5TGFiZWw6IFwiTWF4IFJlcHNcIiB9O1xuICB9IGVsc2Uge1xuICAgIGlmICh3IDw9IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVzdCA9IGNhbGN1bGF0ZTFSTSh3LCByKTtcbiAgICBjb25zdCByZXMgPSBkZXRlcm1pbmVTdHJlbmd0aExldmVsKGVzdCwgYXZnKTtcbiAgICByZXR1cm4geyAuLi5yZXMsIGN1cnJlbnRWYWx1ZTogZXN0LCBpc0JvZHl3ZWlnaHQ6IGZhbHNlLCB1bml0OiBcImtnXCIsIGRpc3BsYXlMYWJlbDogXCJFc3QuIDFSTVwiIH07XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFzU3RyZW5ndGhTdGFuZGFyZChuYW1lKSB7XG4gIGNvbnN0IHN0ZCA9IGF3YWl0IGdldFN0cmVuZ3RoU3RhbmRhcmQobmFtZSk7XG4gIHJldHVybiBzdGQgIT09IG51bGwgJiYgc3RkLmhhc1ZhbGlkRGF0YTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VQUihuYW1lKSB7XG4gIGNvbnN0IHN0ZCA9IGF3YWl0IGdldFN0cmVuZ3RoU3RhbmRhcmQobmFtZSk7XG4gIGNvbnN0IGlzQlcgPSBzdGQ/LmlzQm9keXdlaWdodCB8fCBmYWxzZTtcbiAgY29uc3QgZmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFdPUktPVVRfRk9MREVSKTtcbiAgbGV0IGJlc3QgPSBudWxsLCBiZXN0ViA9IDA7XG4gIGZvciAoY29uc3QgZiBvZiBmaWxlcykge1xuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKGYucGF0aCk7XG4gICAgaWYgKGZtPy5leGVyY2lzZXMgJiYgQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpICYmIGZtLldvcmtvdXQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGV4ID0gZm0uZXhlcmNpc2VzLmZpbmQoKGUpID0+IGUubmFtZSA9PT0gbmFtZSk7XG4gICAgICBpZiAoZXg/LnNldHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBzZXQgb2YgZXguc2V0cykge1xuICAgICAgICAgIGlmICghc2V0LmlzV2FybXVwICYmIHNldC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChpc0JXKSB7XG4gICAgICAgICAgICAgIGlmIChzZXQucmVwcyA+IGJlc3RWKSB7IGJlc3RWID0gc2V0LnJlcHM7IGJlc3QgPSB7IC4uLnNldCwgZGF0ZTogZi5iYXNlbmFtZSwgcHJWYWx1ZTogYmVzdFYsIGlzQm9keXdlaWdodDogdHJ1ZSB9OyB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNldC53ZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVzdCA9IGNhbGN1bGF0ZTFSTShzZXQud2VpZ2h0LCBzZXQucmVwcyk7XG4gICAgICAgICAgICAgIGlmIChlc3QgPiBiZXN0VikgeyBiZXN0ViA9IGVzdDsgYmVzdCA9IHsgLi4uc2V0LCBkYXRlOiBmLmJhc2VuYW1lLCBlc3RpbWF0ZWQxUk06IGVzdCwgcHJWYWx1ZTogZXN0LCBpc0JvZHl3ZWlnaHQ6IGZhbHNlIH07IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJlc3Q7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBTYXZlIGN1cnJlbnQgc3RhdGUgdG8gZnJvbnRtYXR0ZXIgXHUyNTAwXHUyNTAwXG5hc3luYyBmdW5jdGlvbiBzYXZlU3RhdGUoKSB7XG4gIGF3YWl0IHNldE11bHRpcGxlRGF0YSh7XG4gICAgZXhlcmNpc2VzOiBleGVyY2lzZXMsXG4gICAgY3VycmVudE11c2NsZUluZGV4OiBjdXJyZW50TXVzY2xlSW5kZXgsXG4gIH0pO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgTW9kYWwgU3lzdGVtIFx1MjUwMFx1MjUwMFxubGV0IGFjdGl2ZU1vZGFsID0gbnVsbDtcblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgaWYgKCFhY3RpdmVNb2RhbCkgcmV0dXJuO1xuICBhY3RpdmVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZU1vZGFsPy5wYXJlbnROb2RlKSBhY3RpdmVNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2ZU1vZGFsKTtcbiAgICBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRpdGxlLCBjb250ZW50QnVpbGRlcikge1xuICBpZiAoYWN0aXZlTW9kYWwpIHsgYWN0aXZlTW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhY3RpdmVNb2RhbCk7IGFjdGl2ZU1vZGFsID0gbnVsbDsgfVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwib3R3LW1vZGFsLW92ZXJsYXlcIjtcbiAgYWN0aXZlTW9kYWwgPSBtb2RhbDtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9IFwib3R3LW1vZGFsLWNvbnRlbnRcIjtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgYWRkQ29ybmVycyhtb2RhbENvbnRlbnQsIFRIRU1FLmNvbG9yKTtcbiAgaWYgKHRpdGxlKSB7XG4gICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdC5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjowO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO29wYWNpdHk6MC44O2A7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHQpO1xuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDo2MHB4O2hlaWdodDoxcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsdHJhbnNwYXJlbnQsJHtUSEVNRS5jb2xvcn0sdHJhbnNwYXJlbnQpO21hcmdpbjowIGF1dG8gMTJweDtgO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkKTtcbiAgfVxuICBjb250ZW50QnVpbGRlcihtb2RhbENvbnRlbnQpO1xuICBtb2RhbC5vbmNsaWNrID0gKGUpID0+IHsgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkgY2xvc2VNb2RhbCgpOyB9O1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgRmluaXNoIFdvcmtvdXQgXHUyNTAwXHUyNTAwXG5hc3luYyBmdW5jdGlvbiBmaW5pc2hXb3Jrb3V0KHR5cGUpIHtcbiAgYXdhaXQgc2V0TXVsdGlwbGVEYXRhKHtcbiAgICBXb3Jrb3V0OiB0cnVlLFxuICAgIFwiV29ya291dC1UeXBlXCI6IHR5cGUsXG4gICAgZXhlcmNpc2VzOiBleGVyY2lzZXMsXG4gICAgY3VycmVudE11c2NsZUluZGV4OiBjdXJyZW50TXVzY2xlSW5kZXgsXG4gIH0pO1xuICBub3RpY2UoXCJXb3Jrb3V0IGxvZ2dlZCBhcyBcIiArICh0eXBlID09PSBcImRpc2NpcGxpbmVcIiA/IFwiRGlzY2lwbGluZSBXaW5cIiA6IFwiRmxvdyBTdGF0ZVwiKSArIFwiIVwiKTtcbiAgLy8gUmUtcmVuZGVyIHRvIHNob3cgY29tcGxldGlvbiBzdGF0ZVxuICByZW5kZXIoKTtcbn1cblxuZnVuY3Rpb24gb3BlbkZpbmlzaE1vZGFsKCkge1xuICBjcmVhdGVNb2RhbChcIldvcmtvdXQgQ29tcGxldGVcIiwgKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBzdW1tYXJ5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdW1tYXJ5RGl2LmNsYXNzTmFtZSA9IFwib3R3LXN1bW1hcnktY29tcGxldGVcIjtcbiAgICBzdW1tYXJ5RGl2LmlubmVySFRNTCA9IFwiPGgyPldPUktPVVQgQ09NUExFVEU8L2gyPlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VtbWFyeURpdik7XG5cbiAgICBjb25zdCBmZWVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZmVlbFRpdGxlLnRleHRDb250ZW50ID0gXCJIb3cgZGlkIGl0IGZlZWw/XCI7XG4gICAgZmVlbFRpdGxlLnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjEycHggMDtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTNweDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO29wYWNpdHk6MC44O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmZWVsVGl0bGUpO1xuXG4gICAgLy8gRGlzY2lwbGluZSBidXR0b25cbiAgICBjb25zdCBkaXNjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXNjQnRuLmNsYXNzTmFtZSA9IFwib3R3LWZlZWwtYnRuXCI7XG4gICAgZGlzY0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gYDNweCBzb2xpZCAke1RIRU1FLmNvbG9yRGlzY2lwbGluZX1gO1xuICAgIGRpc2NCdG4uaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7d2lkdGg6NDBweDt0ZXh0LWFsaWduOmNlbnRlcjtcIj4mI3gxRjQ4RTs8L3NwYW4+PGRpdiBzdHlsZT1cImZsZXg6MTtcIj48ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvckRpc2NpcGxpbmV9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtsZXR0ZXItc3BhY2luZzoxLjVweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTo0cHg7XCI+RGlzY2lwbGluZTwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojNWE1YTVhO2ZvbnQtc2l6ZToxMXB4O2ZvbnQtc3R5bGU6aXRhbGljO1wiPlB1c2hlZCB0aHJvdWdoIHJlc2lzdGFuY2U8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPVwiY29sb3I6IzRhNDAzMDtmb250LXNpemU6MThweDtvcGFjaXR5OjAuNTtcIj5cXHUyMTkyPC9kaXY+YDtcbiAgICBkaXNjQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGNsb3NlTW9kYWwoKTsgYXdhaXQgZmluaXNoV29ya291dChcImRpc2NpcGxpbmVcIik7IH07XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNjQnRuKTtcblxuICAgIC8vIEZsb3cgYnV0dG9uXG4gICAgY29uc3QgZmxvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmxvd0J0bi5jbGFzc05hbWUgPSBcIm90dy1mZWVsLWJ0blwiO1xuICAgIGZsb3dCdG4uc3R5bGUuYm9yZGVyTGVmdCA9IGAzcHggc29saWQgJHtUSEVNRS5jb2xvckZsb3d9YDtcbiAgICBmbG93QnRuLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O3dpZHRoOjQwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCI+JiN4MUYzMEE7PC9zcGFuPjxkaXYgc3R5bGU9XCJmbGV4OjE7XCI+PGRpdiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JGbG93fTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7bGV0dGVyLXNwYWNpbmc6MS41cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO21hcmdpbi1ib3R0b206NHB4O1wiPkZsb3c8L2Rpdj48ZGl2IHN0eWxlPVwiY29sb3I6IzVhNWE1YTtmb250LXNpemU6MTFweDtmb250LXN0eWxlOml0YWxpYztcIj5GZWx0IG5hdHVyYWwgYW5kIGVmZm9ydGxlc3M8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPVwiY29sb3I6IzMwNDA1MDtmb250LXNpemU6MThweDtvcGFjaXR5OjAuNTtcIj5cXHUyMTkyPC9kaXY+YDtcbiAgICBmbG93QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGNsb3NlTW9kYWwoKTsgYXdhaXQgZmluaXNoV29ya291dChcImZsb3dcIik7IH07XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmbG93QnRuKTtcbiAgfSk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBBZGQgRXhlcmNpc2UgTW9kYWwgXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiBvcGVuQWRkRXhlcmNpc2VNb2RhbChtdXNjbGUpIHtcbiAgY3JlYXRlTW9kYWwoXCJBZGQgRXhlcmNpc2UgLSBcIiArIG11c2NsZSwgKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV4ZXJjaXNlIG5hbWUuLi5cIjtcbiAgICBuYW1lSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoxMDAlO3BhZGRpbmc6MTJweDtiYWNrZ3JvdW5kOiMwZjBmMGY7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTRweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCB3YXJtdXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2FybXVwTGFiZWwudGV4dENvbnRlbnQgPSBcIkluY2x1ZGUgd2FybXVwIHNldHM/XCI7XG4gICAgd2FybXVwTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O21hcmdpbi10b3A6MTJweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2FybXVwTGFiZWwpO1xuXG4gICAgbGV0IGluY1dhcm11cCA9IHRydWU7XG4gICAgY29uc3Qgd2FybXVwUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3YXJtdXBSb3cuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2dhcDo4cHg7bWFyZ2luLXRvcDo4cHg7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3YXJtdXBSb3cpO1xuXG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIlllcyAoc3VnZ2VzdGVkKVwiO1xuICAgIHllc0J0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICB5ZXNCdG4uc3R5bGUuY3NzVGV4dCArPSBgZmxleDoxO2JhY2tncm91bmQ6cmdiYSgxNTQsMTQwLDEyMiwwLjIpO2JvcmRlci1jb2xvcjoke1RIRU1FLmNvbG9yfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtgO1xuICAgIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBub0J0bi50ZXh0Q29udGVudCA9IFwiTm9cIjtcbiAgICBub0J0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICBub0J0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgeWVzQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGluY1dhcm11cCA9IHRydWU7IHllc0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMilcIjsgeWVzQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3I7IG5vQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwZjBmMGZcIjsgbm9CdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvckJvcmRlcjsgfTtcbiAgICBub0J0bi5vbmNsaWNrID0gKCkgPT4geyBpbmNXYXJtdXAgPSBmYWxzZTsgbm9CdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxNTQsMTQwLDEyMiwwLjIpXCI7IG5vQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3I7IHllc0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMGYwZjBmXCI7IHllc0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFRIRU1FLmNvbG9yQm9yZGVyOyB9O1xuICAgIHdhcm11cFJvdy5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuICAgIHdhcm11cFJvdy5hcHBlbmRDaGlsZChub0J0bik7XG5cbiAgICBjb25zdCB3ZWlnaHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VpZ2h0TGFiZWwudGV4dENvbnRlbnQgPSBcIldvcmtpbmcgd2VpZ2h0IChrZykgLSAwIGZvciBib2R5d2VpZ2h0XCI7XG4gICAgd2VpZ2h0TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O21hcmdpbi10b3A6MTJweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VpZ2h0TGFiZWwpO1xuXG4gICAgY29uc3Qgd2VpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgd2VpZ2h0SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgd2VpZ2h0SW5wdXQucGxhY2Vob2xkZXIgPSBcIjBcIjtcbiAgICB3ZWlnaHRJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjEwMCU7cGFkZGluZzoxMnB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tdG9wOjhweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VpZ2h0SW5wdXQpO1xuXG4gICAgY29uc3QgYnRuUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5Sb3cuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2dhcDoxMnB4O21hcmdpbi10b3A6MTZweDtcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ0blJvdyk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIGNhbmNlbEJ0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiBjbG9zZU1vZGFsKCk7XG4gICAgYnRuUm93LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIEV4ZXJjaXNlXCI7XG4gICAgYWRkQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICBhZGRCdG4uc3R5bGUuZmxleCA9IFwiMVwiO1xuICAgIGFkZEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIW5hbWUpIHsgbm90aWNlKFwiUGxlYXNlIGVudGVyIGFuIGV4ZXJjaXNlIG5hbWVcIik7IHJldHVybjsgfVxuICAgICAgY29uc3Qgd3cgPSBwYXJzZUZsb2F0KHdlaWdodElucHV0LnZhbHVlKSB8fCAwO1xuICAgICAgY29uc3Qgc2V0cyA9IFtdO1xuICAgICAgaWYgKGluY1dhcm11cCAmJiB3dyA+IDApIHtcbiAgICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiBNYXRoLnJvdW5kKHd3ICogMC41KSwgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjcpLCByZXBzOiA2LCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogdHJ1ZSB9KTtcbiAgICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiBNYXRoLnJvdW5kKHd3ICogMC44NSksIHJlcHM6IDMsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiB3dywgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICAgIHNldHMucHVzaCh7IHdlaWdodDogd3csIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IHd3LCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgICAgZXhlcmNpc2VzLnB1c2goeyBuYW1lLCBtdXNjbGUsIG11c2NsZUdyb3VwOiBtdXNjbGUsIHNldHMgfSk7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgICAgIHJlbmRlcigpO1xuICAgIH07XG4gICAgYnRuUm93LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IG5hbWVJbnB1dC5mb2N1cygpLCAxMDApO1xuICB9KTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFJlbmRlciBhIHNpbmdsZSBzZXQgcm93IFx1MjUwMFx1MjUwMFxuZnVuY3Rpb24gcmVuZGVyU2V0KHNldHNDb250YWluZXIsIHNldCwgc2V0SWR4LCBleCwgd2FybXVwUmVmcykge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3cuY2xhc3NOYW1lID0gXCJvdHctc2V0LXJvd1wiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjb21wbGV0ZWRcIiA6IFwiXCIpO1xuICBzZXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gIGNvbnN0IHJlZnMgPSB7IHdlaWdodElucHV0OiBudWxsIH07XG5cbiAgLy8gQ2hlY2tib3hcbiAgY29uc3QgY2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYi5jbGFzc05hbWUgPSBcIm90dy1jaGVja2JveFwiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjaGVja2VkXCIgOiBcIlwiKTtcbiAgY2IudGV4dENvbnRlbnQgPSBzZXQuY29tcGxldGVkID8gXCJcXHUyNzEzXCIgOiBcIlwiO1xuICBjYi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldC5jb21wbGV0ZWQgPSAhc2V0LmNvbXBsZXRlZDtcbiAgICBjYi5jbGFzc05hbWUgPSBcIm90dy1jaGVja2JveFwiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjaGVja2VkXCIgOiBcIlwiKTtcbiAgICBjYi50ZXh0Q29udGVudCA9IHNldC5jb21wbGV0ZWQgPyBcIlxcdTI3MTNcIiA6IFwiXCI7XG4gICAgcm93LmNsYXNzTmFtZSA9IFwib3R3LXNldC1yb3dcIiArIChzZXQuY29tcGxldGVkID8gXCIgY29tcGxldGVkXCIgOiBcIlwiKTtcbiAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgfTtcbiAgcm93LmFwcGVuZENoaWxkKGNiKTtcblxuICAvLyBNaWRkbGU6IHdlaWdodCArIHJlcHNcbiAgY29uc3QgbWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWlkLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEycHg7ZmxleC13cmFwOndyYXA7XCI7XG4gIHJvdy5hcHBlbmRDaGlsZChtaWQpO1xuXG4gIC8vIFdlaWdodCBpbnB1dFxuICBjb25zdCB3V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdXcmFwLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtcIjtcbiAgbWlkLmFwcGVuZENoaWxkKHdXcmFwKTtcbiAgY29uc3Qgd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB3SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gIHdJbnB1dC52YWx1ZSA9IHNldC53ZWlnaHQ7XG4gIHdJbnB1dC5jbGFzc05hbWUgPSBcIm90dy1pbnB1dFwiO1xuICBjb25zdCBmaXJzdFcgPSBnZXRGaXJzdFdvcmtpbmdTZXRJbmRleChleC5zZXRzKTtcbiAgY29uc3QgaXNGaXJzdCA9ICFzZXQuaXNXYXJtdXAgJiYgc2V0SWR4ID09PSBmaXJzdFc7XG4gIHdJbnB1dC5vbmNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgbncgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSB8fCAwO1xuICAgIHNldC53ZWlnaHQgPSBudztcbiAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgdXBkYXRlV2FybXVwV2VpZ2h0cyhleCwgbncpO1xuICAgICAgY29uc3Qgd3MgPSBleC5zZXRzLmZpbHRlcigocykgPT4gcy5pc1dhcm11cCk7XG4gICAgICB3YXJtdXBSZWZzLmZvckVhY2goKGlucCwgaSkgPT4geyBpZiAod3NbaV0pIGlucC52YWx1ZSA9IHdzW2ldLndlaWdodDsgfSk7XG4gICAgfVxuICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICB9O1xuICB3V3JhcC5hcHBlbmRDaGlsZCh3SW5wdXQpO1xuICByZWZzLndlaWdodElucHV0ID0gd0lucHV0O1xuICBjb25zdCBrZ0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGtnTGFiZWwudGV4dENvbnRlbnQgPSBcImtnXCI7XG4gIGtnTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O2A7XG4gIHdXcmFwLmFwcGVuZENoaWxkKGtnTGFiZWwpO1xuXG4gIC8vIFJlcHMgY29udHJvbHNcbiAgY29uc3QgcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByV3JhcC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo0cHg7XCI7XG4gIG1pZC5hcHBlbmRDaGlsZChyV3JhcCk7XG4gIGNvbnN0IG1pbnVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWludXNCdG4uY2xhc3NOYW1lID0gXCJvdHctY3RybC1idG5cIjtcbiAgbWludXNCdG4udGV4dENvbnRlbnQgPSBcIlxcdTIyMTJcIjtcbiAgbWludXNCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgaWYgKHNldC5yZXBzID4gMSkgeyBzZXQucmVwcy0tOyByRGlzcC50ZXh0Q29udGVudCA9IHNldC5yZXBzICsgXCJcXHUwMEQ3XCI7IGF3YWl0IHNhdmVTdGF0ZSgpOyB9IH07XG4gIHJXcmFwLmFwcGVuZENoaWxkKG1pbnVzQnRuKTtcbiAgY29uc3QgckRpc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgckRpc3AudGV4dENvbnRlbnQgPSBzZXQucmVwcyArIFwiXFx1MDBEN1wiO1xuICByRGlzcC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDttaW4td2lkdGg6MzBweDt0ZXh0LWFsaWduOmNlbnRlcjtgO1xuICByV3JhcC5hcHBlbmRDaGlsZChyRGlzcCk7XG4gIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbHVzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWN0cmwtYnRuXCI7XG4gIHBsdXNCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgcGx1c0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBzZXQucmVwcysrOyByRGlzcC50ZXh0Q29udGVudCA9IHNldC5yZXBzICsgXCJcXHUwMEQ3XCI7IGF3YWl0IHNhdmVTdGF0ZSgpOyB9O1xuICByV3JhcC5hcHBlbmRDaGlsZChwbHVzQnRuKTtcblxuICBpZiAoc2V0LmlzV2FybXVwKSB7XG4gICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBiYWRnZS5jbGFzc05hbWUgPSBcIm90dy13YXJtdXAtYmFkZ2VcIjtcbiAgICBiYWRnZS50ZXh0Q29udGVudCA9IFwiXFx1MjZBMSBXYXJtdXBcIjtcbiAgICBtaWQuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICB9XG5cbiAgLy8gRGVsZXRlIHNldCBidXR0b25cbiAgaWYgKGV4LnNldHMubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJcXHUwMEQ3XCI7XG4gICAgZGVsQnRuLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MjhweDtoZWlnaHQ6MjhweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjoxcHggc29saWQgIzNhMjgyODtjb2xvcjojNmE0YTRhO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxNnB4O2A7XG4gICAgZGVsQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGV4LnNldHMuc3BsaWNlKHNldElkeCwgMSk7IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGguc3R5bGUud2lkdGggPSBcIjI4cHhcIjtcbiAgICByb3cuYXBwZW5kQ2hpbGQocGgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZnM7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBSZW5kZXIgRXhlcmNpc2UgQ2FyZCBcdTI1MDBcdTI1MDBcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckV4ZXJjaXNlKGV4Q29udGFpbmVyLCBleCkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZC5jbGFzc05hbWUgPSBcIm90dy1jYXJkXCI7XG4gIGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICBhZGRDb3JuZXJzKGNhcmQsIFRIRU1FLmNvbG9yLCAxMik7XG5cbiAgY29uc3QgZXhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBleEhlYWRlci5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O21hcmdpbi1ib3R0b206MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoZXhIZWFkZXIpO1xuXG4gIGNvbnN0IGxlZnRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0Q29sLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgZXhIZWFkZXIuYXBwZW5kQ2hpbGQobGVmdENvbCk7XG5cbiAgY29uc3QgZXhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZXhUaXRsZS50ZXh0Q29udGVudCA9IGV4Lm5hbWU7XG4gIGV4VGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBtYXJnaW46MCAwIDhweCAwO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNnB4O2xldHRlci1zcGFjaW5nOjFweDtgO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKGV4VGl0bGUpO1xuXG4gIC8vIFN0cmVuZ3RoIGxldmVsICsgUFIgaW5mb1xuICBjb25zdCBoYXNTdGQgPSBhd2FpdCBoYXNTdHJlbmd0aFN0YW5kYXJkKGV4Lm5hbWUpO1xuICBjb25zdCBwciA9IGF3YWl0IGdldEV4ZXJjaXNlUFIoZXgubmFtZSk7XG4gIGNvbnN0IHdvcmtpbmdTZXRzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+ICFzLmlzV2FybXVwKTtcbiAgbGV0IGJlc3RXID0gMCwgYmVzdFIgPSAwLCBtYXhSID0gMDtcbiAgd29ya2luZ1NldHMuZm9yRWFjaCgocykgPT4geyBpZiAocy5yZXBzID4gbWF4UikgbWF4UiA9IHMucmVwczsgaWYgKHMud2VpZ2h0ID4gYmVzdFcgfHwgKHMud2VpZ2h0ID09PSBiZXN0VyAmJiBzLnJlcHMgPiBiZXN0UikpIHsgYmVzdFcgPSBzLndlaWdodDsgYmVzdFIgPSBzLnJlcHM7IH0gfSk7XG5cbiAgaWYgKGhhc1N0ZCkge1xuICAgIGxldCBzbDtcbiAgICBpZiAocHIpIHsgc2wgPSBwci5pc0JvZHl3ZWlnaHQgPyBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIDAsIHByLnByVmFsdWUsIHByLnByVmFsdWUpIDogYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCBwci53ZWlnaHQsIHByLnJlcHMsIG51bGwpOyB9XG4gICAgZWxzZSBpZiAoYmVzdFcgPiAwIHx8IG1heFIgPiAwKSB7IHNsID0gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCBiZXN0VywgYmVzdFIsIG1heFIpOyB9XG4gICAgaWYgKHNsKSB7XG4gICAgICBjb25zdCBsaSA9IFNUUkVOR1RIX0xFVkVMU1tzbC5sZXZlbF07XG4gICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiYWRnZS5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYWRnZVwiO1xuICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCArPSBgYmFja2dyb3VuZDoke3NsLmNvbG9yfTI1O2JvcmRlcjoxcHggc29saWQgJHtzbC5jb2xvcn02MDtjb2xvcjoke3NsLmNvbG9yfTtgO1xuICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSAobGk/Lmljb24gfHwgXCJcXHUyNUNCXCIpICsgXCIgXCIgKyBzbC5sZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgbGVmdENvbC5hcHBlbmRDaGlsZChiYWRnZSk7XG5cbiAgICAgIGNvbnN0IHJtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBybUluZm8uc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTFweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbi10b3A6NnB4O2A7XG4gICAgICBybUluZm8uaW5uZXJIVE1MID0gYDxzdHJvbmcgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yfVwiPiR7c2wuZGlzcGxheUxhYmVsfTogJHtzbC5jdXJyZW50VmFsdWV9JHtzbC51bml0fTwvc3Ryb25nPmA7XG4gICAgICBpZiAoc2wubmV4dFRhcmdldCkgcm1JbmZvLmlubmVySFRNTCArPSBgIFxcdTIxOTIgTmV4dDogJHtNYXRoLnJvdW5kKHNsLm5leHRUYXJnZXQpfSR7c2wudW5pdH1gO1xuICAgICAgbGVmdENvbC5hcHBlbmRDaGlsZChybUluZm8pO1xuXG4gICAgICBjb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwYi5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYXJcIjtcbiAgICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQocGIpO1xuICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmaWxsLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWZpbGxcIjtcbiAgICAgIGZpbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWluKDEwMCwgc2wucHJvZ3Jlc3MpfSU7YmFja2dyb3VuZDoke3NsLmNvbG9yfTtgO1xuICAgICAgcGIuYXBwZW5kQ2hpbGQoZmlsbCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByKSB7XG4gICAgY29uc3QgcHJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByQm94LmNsYXNzTmFtZSA9IFwib3R3LXByLWJveFwiO1xuICAgIGNvbnN0IHByVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByVGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOjExcHg7Y29sb3I6I2E4OTg2MDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MXB4O1wiO1xuICAgIHByVGl0bGUudGV4dENvbnRlbnQgPSBwci5pc0JvZHl3ZWlnaHQgPyBcIlxcdUQ4M0NcXHVERkM2IEFMTC1USU1FIFBSOiBcIiArIHByLnByVmFsdWUgKyBcIiByZXBzXCIgOiBcIlxcdUQ4M0NcXHVERkM2IEFMTC1USU1FIFBSOiBcIiArIHByLmVzdGltYXRlZDFSTSArIFwia2cgKDFSTSlcIjtcbiAgICBwckJveC5hcHBlbmRDaGlsZChwclRpdGxlKTtcbiAgICBjb25zdCBwckRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJEZXRhaWwuc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTBweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2A7XG4gICAgcHJEZXRhaWwudGV4dENvbnRlbnQgPSBwci5pc0JvZHl3ZWlnaHQgPyBcIkJlc3Q6IFwiICsgcHIucmVwcyArIFwiIHJlcHNcIiA6IFwiU2V0OiBcIiArIHByLndlaWdodCArIFwia2cgXFx1MDBENyBcIiArIHByLnJlcHMgKyBcIiByZXBzXCI7XG4gICAgcHJCb3guYXBwZW5kQ2hpbGQocHJEZXRhaWwpO1xuICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQocHJCb3gpO1xuICB9XG5cbiAgLy8gRGVsZXRlIGV4ZXJjaXNlIGJ1dHRvblxuICBjb25zdCBkZWxFeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbEV4QnRuLnRleHRDb250ZW50ID0gXCJcXHVEODNEXFx1REREMVxcdUZFMEZcIjtcbiAgZGVsRXhCdG4uc3R5bGUuY3NzVGV4dCA9IFwiYmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTRweDtvcGFjaXR5OjAuNTtcIjtcbiAgZGVsRXhCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY29uc3QgaWR4ID0gZXhlcmNpc2VzLmluZGV4T2YoZXgpOyBpZiAoaWR4ID4gLTEpIHsgZXhlcmNpc2VzLnNwbGljZShpZHgsIDEpOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH0gfTtcbiAgZXhIZWFkZXIuYXBwZW5kQ2hpbGQoZGVsRXhCdG4pO1xuXG4gIC8vIFNldHNcbiAgY29uc3Qgc2V0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHNDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6NnB4O1wiO1xuICBjYXJkLmFwcGVuZENoaWxkKHNldHNDb250YWluZXIpO1xuICBjb25zdCB3YXJtdXBSZWZzID0gW107XG4gIGV4LnNldHMuZm9yRWFjaCgoc2V0LCBzZXRJZHgpID0+IHtcbiAgICBjb25zdCByZWZzID0gcmVuZGVyU2V0KHNldHNDb250YWluZXIsIHNldCwgc2V0SWR4LCBleCwgd2FybXVwUmVmcyk7XG4gICAgaWYgKHNldC5pc1dhcm11cCAmJiByZWZzLndlaWdodElucHV0KSB3YXJtdXBSZWZzLnB1c2gocmVmcy53ZWlnaHRJbnB1dCk7XG4gIH0pO1xuXG4gIC8vIEFkZCBzZXQgYnV0dG9uXG4gIGNvbnN0IGFkZFNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFNldEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgU2V0XCI7XG4gIGFkZFNldEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1kYXNoZWRcIjtcbiAgYWRkU2V0QnRuLnN0eWxlLmNzc1RleHQgKz0gXCJtYXJnaW4tdG9wOjhweDtwYWRkaW5nOjhweCAxMnB4O2ZvbnQtc2l6ZToxMnB4O1wiO1xuICBhZGRTZXRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsYXN0ID0gZXguc2V0c1tleC5zZXRzLmxlbmd0aCAtIDFdIHx8IHsgd2VpZ2h0OiAwLCByZXBzOiAxMCB9O1xuICAgIGV4LnNldHMucHVzaCh7IHdlaWdodDogbGFzdC53ZWlnaHQsIHJlcHM6IGxhc3QucmVwcywgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICAgIHJlbmRlcigpO1xuICB9O1xuICBjYXJkLmFwcGVuZENoaWxkKGFkZFNldEJ0bik7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBNYWluIFJlbmRlciBcdTI1MDBcdTI1MDBcbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb290LmNsYXNzTmFtZSA9IFwib3R3LWNvbnRhaW5lclwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdCk7XG5cbiAgLy8gSWYgd29ya291dCBpcyBhbHJlYWR5IGNvbXBsZXRlZCwgc2hvdyBzdW1tYXJ5XG4gIGlmIChpc0NvbXBsZXRlZCAmJiBnZXREYXRhKFwiV29ya291dC1UeXBlXCIpKSB7XG4gICAgY29uc3Qgd1R5cGUgPSBnZXREYXRhKFwiV29ya291dC1UeXBlXCIpO1xuICAgIGNvbnN0IHN1bW1hcnlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdW1tYXJ5Q2FyZC5jbGFzc05hbWUgPSBcIm90dy1jYXJkIG90dy1jYXJkLWJyZWF0aGVcIjtcbiAgICBzdW1tYXJ5Q2FyZC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIHN1bW1hcnlDYXJkLnN0eWxlLnBhZGRpbmcgPSBcIjMycHhcIjtcbiAgICBhZGRDb3JuZXJzKHN1bW1hcnlDYXJkLCBUSEVNRS5zeXN0ZW1HcmVlbik7XG4gICAgc3VtbWFyeUNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTozMnB4O21hcmdpbi1ib3R0b206MTJweDtcIj4ke3dUeXBlID09PSBcImRpc2NpcGxpbmVcIiA/IFwiXFx1RDgzRFxcdURDOEVcIiA6IFwiXFx1RDgzQ1xcdURGMEFcIn08L2Rpdj5cbiAgICAgIDxoMiBzdHlsZT1cIm1hcmdpbjowO2NvbG9yOiR7VEhFTUUuc3lzdGVtR3JlZW59O2ZvbnQtc2l6ZToxNnB4O2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XCI+V09SS09VVCBDT01QTEVURTwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTNweDttYXJnaW4tdG9wOjhweDtmb250LXN0eWxlOml0YWxpYztcIj4ke3dUeXBlID09PSBcImRpc2NpcGxpbmVcIiA/IFwiRGlzY2lwbGluZSBXaW5cIiA6IFwiRmxvdyBTdGF0ZVwifTwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7bWFyZ2luLXRvcDoxNnB4O1wiPiR7bW9tZW50KGdldERhdGEoXCJUaW1lc3RhbXBcIikpLmZvcm1hdChcIk1NTSBELCBZWVlZIFxcdTIwMTQgaDptbSBBXCIpfTwvZGl2PlxuICAgIGA7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChzdW1tYXJ5Q2FyZCk7XG5cbiAgICAvLyBTaG93IGV4ZXJjaXNlcyBzdW1tYXJ5XG4gICAgaWYgKGV4ZXJjaXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBleFN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZXhTdW1tYXJ5LmNsYXNzTmFtZSA9IFwib3R3LWNhcmRcIjtcbiAgICAgIGFkZENvcm5lcnMoZXhTdW1tYXJ5LCBUSEVNRS5jb2xvcik7XG4gICAgICBjb25zdCBleFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGV4VGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMnB4O2A7XG4gICAgICBleFRpdGxlLnRleHRDb250ZW50ID0gXCJTRVNTSU9OIFNVTU1BUllcIjtcbiAgICAgIGV4U3VtbWFyeS5hcHBlbmRDaGlsZChleFRpdGxlKTtcbiAgICAgIGZvciAoY29uc3QgZXggb2YgZXhlcmNpc2VzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFNldHMgPSBleC5zZXRzLmZpbHRlcigocykgPT4gIXMuaXNXYXJtdXAgJiYgcy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdG90YWxTZXRzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+ICFzLmlzV2FybXVwKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJvdy5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOjhweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXdlaWdodDo2MDA7XCI+JHtleC5uYW1lfTwvc3Bhbj48c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7XCI+JHtjb21wbGV0ZWRTZXRzfS8ke3RvdGFsU2V0c30gc2V0czwvc3Bhbj5gO1xuICAgICAgICBleFN1bW1hcnkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgIH1cbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZXhTdW1tYXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIEFjdGl2ZSBXb3Jrb3V0IFVJIFx1MjUwMFx1MjUwMFxuICBpZiAobXVzY2xlR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIC8vIE5vIG11c2NsZSBncm91cHMgc2VsZWN0ZWQgXHUyMDE0IHNob3cgZW1wdHkgc3RhdGVcbiAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW1wdHkuY2xhc3NOYW1lID0gXCJvdHctY2FyZFwiO1xuICAgIGVtcHR5LnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgZW1wdHkuc3R5bGUucGFkZGluZyA9IFwiNDBweCAyMHB4XCI7XG4gICAgYWRkQ29ybmVycyhlbXB0eSwgVEhFTUUuY29sb3IpO1xuICAgIGVtcHR5LmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6MzJweDttYXJnaW4tYm90dG9tOjEycHg7XCI+XFx1RDgzQ1xcdURGQ0JcXHVGRTBGPC9kaXY+XG4gICAgICA8aDIgc3R5bGU9XCJtYXJnaW46MDtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTZweDtsZXR0ZXItc3BhY2luZzozcHg7XCI+V09SS09VVDwvaDI+XG4gICAgICA8cCBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEzcHg7bWFyZ2luLXRvcDoxMnB4O2ZvbnQtc3R5bGU6aXRhbGljO1wiPlRoaXMgbm90ZSBoYXMgYWN0aXZpdHk6IHdvcmtvdXQgYnV0IG5vIG11c2NsZSBncm91cHMgZGVmaW5lZC48L3A+XG4gICAgICA8cCBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDo4cHg7XCI+QWRkIDxjb2RlPm11c2NsZUdyb3VwczwvY29kZT4gdG8gdGhlIGZyb250bWF0dGVyIHRvIGJlZ2luIHRyYWNraW5nLjwvcD5cbiAgICBgO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZW1wdHkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRNdXNjbGUgPSBtdXNjbGVHcm91cHNbY3VycmVudE11c2NsZUluZGV4XSB8fCBtdXNjbGVHcm91cHNbMF07XG4gIGNvbnN0IG11c2NsZUV4ZXJjaXNlcyA9IGV4ZXJjaXNlcy5maWx0ZXIoKGUpID0+IGUubXVzY2xlID09PSBjdXJyZW50TXVzY2xlIHx8IGUubXVzY2xlR3JvdXAgPT09IGN1cnJlbnRNdXNjbGUpO1xuXG4gIC8vIEhlYWRlclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJvdHctY2FyZCBvdHctY2FyZC1icmVhdGhlIG90dy1oZWFkZXJcIjtcbiAgYWRkQ29ybmVycyhoZWFkZXIsIFRIRU1FLmNvbG9yKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLmNsYXNzTmFtZSA9IFwib3R3LXRpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudE11c2NsZS50b1VwcGVyQ2FzZSgpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCBwcm9ncmVzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvZ3Jlc3NMYWJlbC5jbGFzc05hbWUgPSBcIm90dy1wcm9ncmVzcy1sYWJlbFwiO1xuICBwcm9ncmVzc0xhYmVsLnRleHRDb250ZW50ID0gKGN1cnJlbnRNdXNjbGVJbmRleCArIDEpICsgXCIgLyBcIiArIG11c2NsZUdyb3Vwcy5sZW5ndGg7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9ncmVzc0xhYmVsKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIEV4ZXJjaXNlc1xuICBjb25zdCBleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGV4Q29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE2cHg7XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoZXhDb250YWluZXIpO1xuXG4gIGlmIChtdXNjbGVFeGVyY2lzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVtcHR5LnN0eWxlLmNzc1RleHQgPSBgdGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzo0MHB4IDIwcHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggZGFzaGVkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gICAgZW1wdHkuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTttYXJnaW46MDtcIj5ObyBleGVyY2lzZXMgZm9yICR7Y3VycmVudE11c2NsZX0geWV0LjwvcD5gO1xuICAgIGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IGV4IG9mIG11c2NsZUV4ZXJjaXNlcykge1xuICAgICAgYXdhaXQgcmVuZGVyRXhlcmNpc2UoZXhDb250YWluZXIsIGV4KTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgZXhlcmNpc2UgYnV0dG9uXG4gIGNvbnN0IGFkZEV4QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkRXhCdG4udGV4dENvbnRlbnQgPSBcIisgQUREIEVYRVJDSVNFXCI7XG4gIGFkZEV4QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLWRhc2hlZFwiO1xuICBhZGRFeEJ0bi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjE2cHhcIjtcbiAgYWRkRXhCdG4ub25jbGljayA9ICgpID0+IG9wZW5BZGRFeGVyY2lzZU1vZGFsKGN1cnJlbnRNdXNjbGUpO1xuICByb290LmFwcGVuZENoaWxkKGFkZEV4QnRuKTtcblxuICAvLyBOYXZpZ2F0aW9uXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdi5jbGFzc05hbWUgPSBcIm90dy1uYXYtcm93XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBpZiAoY3VycmVudE11c2NsZUluZGV4ID4gMCkge1xuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByZXZCdG4udGV4dENvbnRlbnQgPSBcIlxcdTIxOTAgUFJFVklPVVNcIjtcbiAgICBwcmV2QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIHByZXZCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY3VycmVudE11c2NsZUluZGV4LS07IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJldkJ0bik7XG4gIH1cblxuICBpZiAoY3VycmVudE11c2NsZUluZGV4IDwgbXVzY2xlR3JvdXBzLmxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXh0QnRuLnRleHRDb250ZW50ID0gXCJORVhUIE1VU0NMRSBcXHUyMTkyXCI7XG4gICAgbmV4dEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1wcmltYXJ5XCI7XG4gICAgbmV4dEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjdXJyZW50TXVzY2xlSW5kZXgrKzsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9O1xuICAgIG5hdi5hcHBlbmRDaGlsZChuZXh0QnRuKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaW5pc2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbmlzaEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1MjcxMyBGSU5JU0ggV09SS09VVFwiO1xuICAgIGZpbmlzaEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1maW5pc2hcIjtcbiAgICBmaW5pc2hCdG4ub25jbGljayA9ICgpID0+IG9wZW5GaW5pc2hNb2RhbCgpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChmaW5pc2hCdG4pO1xuICB9XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBCb290IFx1MjUwMFx1MjUwMFxucmV0dXJuIHJlbmRlcigpO1xuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQnVpbHQtaW4gVGVtcGxhdGUgUmVnaXN0cnlcbi8vIE1hcHMgdGVtcGxhdGUgSURzIHRvIHRoZWlyIHNvdXJjZSBjb2RlIChidW5kbGVkIGF0IGJ1aWxkIHRpbWUpLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB3b3Jrb3V0U291cmNlIGZyb20gXCIuL3dvcmtvdXQudHBsXCI7XG5cbi8qKlxuICogQnVpbHQtaW4gdGVtcGxhdGVzIGJ1bmRsZWQgaW5zaWRlIHRoZSBwbHVnaW4uXG4gKiBLZXlzIGFyZSB0ZW1wbGF0ZSBJRHMgcmVmZXJlbmNlZCBpbiBBY3Rpdml0eUNvbmZpZy53b3Jrc3BhY2VUZW1wbGF0ZS5cbiAqIFZhbHVlcyBhcmUgdGhlIHJhdyBKUyBzb3VyY2UgZXhlY3V0ZWQgdmlhIG5ldyBGdW5jdGlvbihcImN0eFwiLCBzb3VyY2UpLlxuICovXG5leHBvcnQgY29uc3QgQlVJTFRJTl9URU1QTEFURVM6IFJlY29yZDxzdHJpbmcs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ZSxFQUFFO0FBQ25CLGVBQU8sRUFBRTtBQUNULGtCQUFVO0FBQUEsTUFDWjtBQUVBLFVBQUksRUFBRSxrQkFBa0IsUUFBVztBQUNqQyxZQUFJLENBQUMsRUFBRTtBQUFRLFlBQUUsU0FBUyxFQUFFO0FBQzVCLGVBQU8sRUFBRTtBQUNULGtCQUFVO0FBQUEsTUFDWjtBQUNBLFVBQUksRUFBRSxvQkFBb0IsUUFBVztBQUNuQyxZQUFJLENBQUMsRUFBRTtBQUFRLFlBQUUsU0FBUyxFQUFFO0FBQzVCLGVBQU8sRUFBRTtBQUNULGtCQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFHQSxRQUFJLEtBQUssU0FBUyxpQkFBaUI7QUFDakMsWUFBTSxLQUFLLEtBQUssU0FBUztBQUN6QixVQUFJLEdBQUcsZUFBZSxVQUFhLEdBQUcsaUJBQWlCLFFBQVc7QUFDaEUsV0FBRyxlQUFlLEdBQUc7QUFDckIsZUFBTyxHQUFHO0FBQ1Ysa0JBQVU7QUFBQSxNQUNaO0FBRUEsYUFBTyxHQUFHO0FBQ1YsYUFBTyxHQUFHO0FBQUEsSUFDWjtBQUdBLFFBQUksSUFBSSxvQkFBb0IsTUFBTSxRQUFRLElBQUksZ0JBQWdCLEtBQUssSUFBSSxpQkFBaUIsU0FBUyxHQUFHO0FBQ2xHLGlCQUFXLFNBQVMsSUFBSSxrQkFBa0I7QUFDeEMsWUFBSSxDQUFDLE1BQU0sV0FBVyxDQUFDLE1BQU07QUFBYztBQUMzQyxjQUFNLFdBQVcsS0FBSyxTQUFTLFdBQVcsS0FBSyxDQUFDLE1BQVcsRUFBRSxPQUFPLE1BQU0sWUFBWTtBQUN0RixZQUFJLFlBQVksQ0FBQyxTQUFTLG1CQUFtQjtBQUMzQyxtQkFBUyxvQkFBb0IsTUFBTTtBQUNuQyxvQkFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGO0FBQ0EsYUFBTyxJQUFJO0FBQ1gsZ0JBQVU7QUFBQSxJQUNaO0FBRUEsUUFBSSxTQUFTO0FBQ1gsWUFBTSxLQUFLLGFBQWE7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFDRjtBQUdBLFNBQVNBLE9BQU0sSUFBMkI7QUFDeEMsU0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFZLFdBQVcsU0FBUyxFQUFFLENBQUM7QUFDekQ7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAibmVnbGVjdGVkIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgInNsZWVwIl0KfQo=
