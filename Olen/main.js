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
    analytics_title: "PROGRESS",
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
    "heatmap",
    "eudaimonia",
    "daymap",
    "directive",
    "boss",
    "weekly",
    "analytics",
    "activities",
    "temple",
    "quote"
  ],
  hiddenSections: [],
  activityGridColumns: 2
};
var DEFAULT_PERSONAL_STATS = {
  gender: "male",
  height: 175,
  birthdate: "",
  currentWeight: 0,
  weightLog: [],
  weightLogFrequency: "every-week",
  weightLogCustomDays: 7,
  lastWeightLogDate: null
};
var MUSCLE_GROUP_LABELS = {
  chest: "Chest",
  back: "Back",
  shoulders: "Shoulders",
  biceps: "Biceps",
  triceps: "Triceps",
  forearms: "Forearms",
  abs: "Abs",
  obliques: "Obliques",
  quads: "Quads",
  hamstrings: "Hamstrings",
  glutes: "Glutes",
  calves: "Calves",
  traps: "Traps",
  lats: "Lats",
  neck: "Neck"
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
  homepage: "",
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
  // Personal Stats
  personalStats: DEFAULT_PERSONAL_STATS,
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
      const neglected2 = this.getNeglectedActivitiesSorted(activities);
      const target = neglected2.length > 0 ? neglected2[0] : activities.sort((a, b) => b.priority - a.priority)[0];
      return this.buildSuggestion(target, "death", "Escape Tartarus \u2014 complete your penance.");
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
    const blockers = activities.filter((a) => a.blocks && a.blocks.length > 0);
    if (blockers.length > 0)
      return blockers[0];
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
      const isBlocked = activities.some(
        (other) => other.blocks?.includes(activity.id) && other.id !== activity.id
      );
      if (isBlocked)
        continue;
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
      const deficit = progress.target - progress.done;
      if (deficit <= 0)
        return false;
      return deficit * 7 > progress.target * remainingDays;
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
  // --- Daily Stats ---
  getDailyStats() {
    const activities = this.getEnabledActivities();
    let sessions = 0;
    const perActivity = [];
    for (const activity of activities) {
      const done = this.isDoneToday(activity.id);
      if (done)
        sessions++;
      perActivity.push({
        id: activity.id,
        name: activity.name,
        emoji: activity.emoji,
        category: activity.category,
        done
      });
    }
    return { sessions, perActivity };
  }
  // --- Weekly Stats (enhanced) ---
  getWeeklyStats() {
    const byDay = this.getWeeklyCompletionsByDay();
    const activeDays = this.getActiveDaysThisWeek();
    const bestDay = this.getBestDayThisWeek();
    let totalSessions = 0;
    for (const d of byDay) {
      d.completions.forEach((v) => {
        totalSessions += v;
      });
    }
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
        if (comps.some((c) => c.date === dateStr && c.completed))
          lastWeekTotal++;
      }
    }
    return {
      activeDays,
      totalSessions,
      bestDay,
      weekOverWeek: totalSessions - lastWeekTotal,
      byDay
    };
  }
  // --- Monthly Stats ---
  getMonthlyStats() {
    const effectiveNow = this.getEffectiveNow();
    const year = effectiveNow.getFullYear();
    const month = effectiveNow.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const todayDate = effectiveNow.getDate();
    const activities = this.getEnabledActivities();
    const daysSet = /* @__PURE__ */ new Set();
    let totalSessions = 0;
    const calendarGrid = [];
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      let dayTotal = 0;
      for (const activity of activities) {
        const comps = this.getCompletionsForActivity(activity.id);
        if (comps.some((c) => c.date === dateStr && c.completed))
          dayTotal++;
      }
      if (dayTotal > 0)
        daysSet.add(dateStr);
      totalSessions += dayTotal;
      calendarGrid.push({ date: dateStr, total: dayTotal });
    }
    const byWeek = [];
    let weekNum = 1;
    for (let d = 1; d <= daysInMonth; d += 7) {
      const weekEnd = Math.min(d + 6, daysInMonth);
      let weekTotal = 0;
      const byCat = /* @__PURE__ */ new Map();
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
      avgDaily: todayDate > 0 ? Math.round(totalSessions / todayDate * 10) / 10 : 0,
      byWeek,
      calendarGrid
    };
  }
  // --- Yearly Stats ---
  getYearlyStats() {
    const effectiveNow = this.getEffectiveNow();
    const year = effectiveNow.getFullYear();
    const activities = this.getEnabledActivities();
    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let totalSessions = 0;
    const daysSet = /* @__PURE__ */ new Set();
    const categoryDist = /* @__PURE__ */ new Map();
    const byMonth = [];
    for (let m = 0; m < 12; m++) {
      const daysInMonth = new Date(year, m + 1, 0).getDate();
      let monthTotal = 0;
      const byCat = /* @__PURE__ */ new Map();
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
      categoryDistribution: categoryDist
    };
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
    } else if (task.source === "daily-note" && task.filePath !== void 0 && task.lineNumber !== void 0) {
      const file = this.app.vault.getAbstractFileByPath(task.filePath);
      if (!file || !(file instanceof import_obsidian.TFile))
        return;
      const content = await this.app.vault.read(file);
      const lines = content.split("\n");
      if (task.lineNumber >= lines.length)
        return;
      const taskLine = lines[task.lineNumber];
      lines.splice(task.lineNumber, 1);
      await this.app.vault.modify(file, lines.join("\n"));
      const folder = this.settings.calendar.dailyNotesFolder;
      const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";
      const tomorrowPath = `${normalizedFolder}${tomorrowStr}.md`;
      const tomorrowFile = this.app.vault.getAbstractFileByPath(tomorrowPath);
      if (tomorrowFile && tomorrowFile instanceof import_obsidian.TFile) {
        const tomorrowContent = await this.app.vault.read(tomorrowFile);
        await this.app.vault.modify(tomorrowFile, tomorrowContent + "\n" + taskLine);
      } else {
        try {
          await this.app.vault.create(tomorrowPath, `---
---

${taskLine}
`);
        } catch {
        }
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

// src/components/StrengthHeatmap.ts
var MUSCLE_REGIONS = [
  // Head/neck area
  { id: "neck", front: { x: 40, y: 8, w: 20, h: 5 } },
  { id: "traps", back: { x: 30, y: 11, w: 40, h: 7 } },
  // Upper body
  { id: "shoulders", front: { x: 18, y: 14, w: 14, h: 8 }, back: { x: 18, y: 14, w: 14, h: 8 } },
  { id: "chest", front: { x: 30, y: 16, w: 40, h: 10 } },
  { id: "lats", back: { x: 24, y: 19, w: 52, h: 12 } },
  { id: "back", back: { x: 32, y: 32, w: 36, h: 10 } },
  // Arms
  { id: "biceps", front: { x: 14, y: 23, w: 12, h: 12 } },
  { id: "triceps", back: { x: 14, y: 23, w: 12, h: 12 } },
  { id: "forearms", front: { x: 10, y: 36, w: 12, h: 12 }, back: { x: 10, y: 36, w: 12, h: 12 } },
  // Core
  { id: "abs", front: { x: 35, y: 27, w: 30, h: 16 } },
  { id: "obliques", front: { x: 24, y: 30, w: 10, h: 12 } },
  { id: "glutes", back: { x: 30, y: 43, w: 40, h: 10 } },
  // Legs
  { id: "quads", front: { x: 25, y: 48, w: 50, h: 18 } },
  { id: "hamstrings", back: { x: 25, y: 54, w: 50, h: 16 } },
  { id: "calves", front: { x: 28, y: 72, w: 44, h: 14 }, back: { x: 28, y: 72, w: 44, h: 14 } }
];
function renderStrengthHeatmap(container, settings, engine, completionData, staggerIndex, callbacks, app) {
  const section = container.createDiv({ cls: "olen-heatmap-section" });
  section.style.setProperty("--i", String(staggerIndex));
  const gender = settings.personalStats.gender;
  const figureWrap = section.createDiv({ cls: "olen-heatmap-figures" });
  const muscleData = gatherMuscleIntensity(engine, completionData, settings);
  const svgFileName = gender === "female" ? "Muscle Woman.svg" : "Muscle Man.svg";
  if (app) {
    loadSvgFromVault(app, svgFileName).then((svgContent) => {
      if (svgContent) {
        renderSvgFigureWithOverlay(figureWrap, svgContent, muscleData, callbacks.onMuscleClick);
      } else {
        renderMuscleFigure(figureWrap, "front", gender, muscleData, callbacks.onMuscleClick);
      }
    });
  } else {
    renderMuscleFigure(figureWrap, "front", gender, muscleData, callbacks.onMuscleClick);
  }
  const actions = section.createDiv({ cls: "olen-heatmap-actions" });
  const progressBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary olen-heatmap-btn",
    text: "Progress"
  });
  progressBtn.addEventListener("click", () => callbacks.onProgressClick());
  const workoutBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary olen-heatmap-btn",
    text: "Start New Workout"
  });
  workoutBtn.addEventListener("click", () => callbacks.onStartWorkout());
}
async function loadSvgFromVault(app, fileName) {
  try {
    const content = await app.vault.adapter.read(fileName);
    return content || null;
  } catch {
    return null;
  }
}
function renderSvgFigureWithOverlay(parent, svgContent, muscleData, onMuscleClick) {
  const figure = parent.createDiv({ cls: "olen-heatmap-figure" });
  figure.style.maxWidth = "240px";
  figure.style.position = "relative";
  figure.style.margin = "0 auto";
  const svgHolder = figure.createDiv();
  svgHolder.style.cssText = "width:100%;opacity:0.8;filter:saturate(0.2) brightness(0.45);";
  svgHolder.innerHTML = svgContent;
  const svgEl = svgHolder.querySelector("svg");
  if (svgEl) {
    svgEl.style.width = "100%";
    svgEl.style.height = "auto";
    svgEl.style.display = "block";
  }
  const overlay = figure.createDiv();
  overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;";
  for (const region of MUSCLE_REGIONS) {
    const bounds = region.front;
    if (!bounds)
      continue;
    const intensity = muscleData.get(region.id) ?? 0;
    const color = getIntensityColor(intensity);
    const hs = overlay.createDiv();
    hs.style.cssText = `position:absolute;top:${bounds.y}%;left:${bounds.x}%;width:${bounds.w}%;height:${bounds.h}%;cursor:pointer;border-radius:4px;transition:background 0.15s;background:${intensity > 0 ? color + "30" : "transparent"};border:1px solid ${intensity > 0 ? color + "20" : "transparent"};`;
    hs.title = MUSCLE_GROUP_LABELS[region.id] + (intensity > 0 ? ` \u2014 ${Math.round(intensity * 100)}%` : "");
    hs.addEventListener("mouseenter", () => {
      hs.style.background = (intensity > 0 ? color : "#9a8c7a") + "50";
    });
    hs.addEventListener("mouseleave", () => {
      hs.style.background = intensity > 0 ? color + "30" : "transparent";
    });
    hs.addEventListener("click", (e) => {
      e.stopPropagation();
      onMuscleClick(region.id);
    });
    overlay.appendChild(hs);
    if (isSymmetricMuscle(region.id) && bounds.x < 50) {
      const mirrorLeft = 100 - bounds.x - bounds.w;
      const mirror = overlay.createDiv();
      mirror.style.cssText = `position:absolute;top:${bounds.y}%;left:${mirrorLeft}%;width:${bounds.w}%;height:${bounds.h}%;cursor:pointer;border-radius:4px;transition:background 0.15s;background:${intensity > 0 ? color + "30" : "transparent"};border:1px solid ${intensity > 0 ? color + "20" : "transparent"};`;
      mirror.title = hs.title;
      mirror.addEventListener("mouseenter", () => {
        mirror.style.background = (intensity > 0 ? color : "#9a8c7a") + "50";
      });
      mirror.addEventListener("mouseleave", () => {
        mirror.style.background = intensity > 0 ? color + "30" : "transparent";
      });
      mirror.addEventListener("click", (e) => {
        e.stopPropagation();
        onMuscleClick(region.id);
      });
      overlay.appendChild(mirror);
    }
  }
}
function renderMuscleFigure(parent, view, gender, muscleData, onMuscleClick) {
  const figure = parent.createDiv({ cls: "olen-heatmap-figure" });
  figure.createEl("div", {
    cls: "olen-heatmap-view-label",
    text: view === "front" ? "Front" : "Back"
  });
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 200 400");
  svg.setAttribute("class", "olen-heatmap-svg");
  drawBodySilhouette(svg, svgNS, gender, view);
  for (const region of MUSCLE_REGIONS) {
    const bounds = view === "front" ? region.front : region.back;
    if (!bounds)
      continue;
    const intensity = muscleData.get(region.id) ?? 0;
    const x = bounds.x * 2;
    const y = bounds.y * 4;
    const w = bounds.w * 2;
    const h = bounds.h * 4;
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", String(w));
    rect.setAttribute("height", String(h));
    rect.setAttribute("rx", "6");
    rect.setAttribute("ry", "6");
    rect.setAttribute("fill", getIntensityColor(intensity));
    rect.setAttribute("opacity", intensity > 0 ? "0.7" : "0.15");
    rect.setAttribute("class", "olen-heatmap-muscle");
    rect.setAttribute("data-muscle", region.id);
    const title = document.createElementNS(svgNS, "title");
    title.textContent = `${MUSCLE_GROUP_LABELS[region.id]}${intensity > 0 ? ` \u2014 ${Math.round(intensity * 100)}%` : ""}`;
    rect.appendChild(title);
    rect.addEventListener("click", (e) => {
      e.stopPropagation();
      onMuscleClick(region.id);
    });
    svg.appendChild(rect);
    if (isSymmetricMuscle(region.id) && bounds.x < 50) {
      const mirrorX = 200 - x - w;
      const mirror = document.createElementNS(svgNS, "rect");
      mirror.setAttribute("x", String(mirrorX));
      mirror.setAttribute("y", String(y));
      mirror.setAttribute("width", String(w));
      mirror.setAttribute("height", String(h));
      mirror.setAttribute("rx", "6");
      mirror.setAttribute("ry", "6");
      mirror.setAttribute("fill", getIntensityColor(intensity));
      mirror.setAttribute("opacity", intensity > 0 ? "0.7" : "0.15");
      mirror.setAttribute("class", "olen-heatmap-muscle");
      mirror.setAttribute("data-muscle", region.id);
      const mirrorTitle = document.createElementNS(svgNS, "title");
      mirrorTitle.textContent = `${MUSCLE_GROUP_LABELS[region.id]}${intensity > 0 ? ` \u2014 ${Math.round(intensity * 100)}%` : ""}`;
      mirror.appendChild(mirrorTitle);
      mirror.addEventListener("click", (e) => {
        e.stopPropagation();
        onMuscleClick(region.id);
      });
      svg.appendChild(mirror);
    }
  }
  figure.appendChild(svg);
}
function isSymmetricMuscle(id) {
  return ["shoulders", "biceps", "triceps", "forearms", "quads", "hamstrings", "calves", "obliques"].includes(id);
}
function drawBodySilhouette(svg, ns, gender, view) {
  const path = document.createElementNS(ns, "path");
  const isFemale = gender === "female";
  const shoulderW = isFemale ? 62 : 68;
  const hipW = isFemale ? 58 : 48;
  const waistW = isFemale ? 38 : 42;
  const d = [
    // Head
    `M 100 10`,
    `a 16 18 0 1 1 0.01 0`,
    // Neck
    `M 92 44 L 92 52`,
    `M 108 44 L 108 52`,
    // Shoulders
    `M 92 52 L ${100 - shoulderW} 58`,
    `M 108 52 L ${100 + shoulderW} 58`,
    // Torso left
    `M ${100 - shoulderW} 58 L ${100 - shoulderW + 4} 100`,
    `L ${100 - waistW} 140`,
    `L ${100 - hipW} 180`,
    // Torso right
    `M ${100 + shoulderW} 58 L ${100 + shoulderW - 4} 100`,
    `L ${100 + waistW} 140`,
    `L ${100 + hipW} 180`,
    // Arms left
    `M ${100 - shoulderW} 58 L ${100 - shoulderW - 12} 110`,
    `L ${100 - shoulderW - 16} 170`,
    `M ${100 - shoulderW - 6} 58 L ${100 - shoulderW - 18} 110`,
    `L ${100 - shoulderW - 22} 170`,
    // Arms right
    `M ${100 + shoulderW} 58 L ${100 + shoulderW + 12} 110`,
    `L ${100 + shoulderW + 16} 170`,
    `M ${100 + shoulderW + 6} 58 L ${100 + shoulderW + 18} 110`,
    `L ${100 + shoulderW + 22} 170`,
    // Legs left
    `M ${100 - hipW} 180 L ${100 - hipW + 6} 280`,
    `L ${100 - hipW + 10} 360`,
    `M ${100 - 6} 180 L ${100 - 12} 280`,
    `L ${100 - 16} 360`,
    // Legs right
    `M ${100 + hipW} 180 L ${100 + hipW - 6} 280`,
    `L ${100 + hipW - 10} 360`,
    `M ${100 + 6} 180 L ${100 + 12} 280`,
    `L ${100 + 16} 360`
  ].join(" ");
  path.setAttribute("d", d);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "rgba(242, 236, 224, 0.12)");
  path.setAttribute("stroke-width", "1.5");
  path.setAttribute("stroke-linecap", "round");
  svg.appendChild(path);
}
function gatherMuscleIntensity(engine, completionData, settings) {
  const data = /* @__PURE__ */ new Map();
  const workoutActivity = settings.activities.find((a) => a.id === "workout");
  if (!workoutActivity)
    return data;
  const comps = completionData[workoutActivity.id] ?? [];
  const now = /* @__PURE__ */ new Date();
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1e3);
  const recentCompletions = comps.filter((c) => {
    if (!c.completed)
      return false;
    const d = new Date(c.date);
    return d >= thirtyDaysAgo;
  }).length;
  if (recentCompletions === 0)
    return data;
  const baseIntensity = Math.min(1, recentCompletions / 20);
  const allMuscles = [
    "chest",
    "back",
    "shoulders",
    "biceps",
    "triceps",
    "forearms",
    "abs",
    "obliques",
    "quads",
    "hamstrings",
    "glutes",
    "calves",
    "traps",
    "lats",
    "neck"
  ];
  for (const m of allMuscles) {
    data.set(m, baseIntensity * 0.5);
  }
  return data;
}
function getIntensityColor(intensity) {
  if (intensity <= 0)
    return "rgba(242, 236, 224, 0.06)";
  if (intensity < 0.3)
    return "#2d4a1e";
  if (intensity < 0.6)
    return "#5a8a2e";
  if (intensity < 0.8)
    return "#d4a843";
  return "#e8c35a";
}
function showMuscleProgressPopup(muscleId, settings, completionData) {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";
  const sheet = overlay.createDiv({ cls: "olen-sheet olen-progress-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });
  const label = MUSCLE_GROUP_LABELS[muscleId];
  sheet.createEl("div", { cls: "olen-heading-lg", text: label });
  const chartContainer = sheet.createDiv({ cls: "olen-progress-chart" });
  renderSimpleBarChart(chartContainer, muscleId, settings, completionData, "month");
  const toggleRow = sheet.createDiv({ cls: "olen-progress-toggle" });
  const monthBtn = toggleRow.createEl("button", {
    cls: "olen-btn olen-btn-primary olen-progress-toggle-btn",
    text: "Monthly"
  });
  const yearBtn = toggleRow.createEl("button", {
    cls: "olen-btn olen-btn-secondary olen-progress-toggle-btn",
    text: "Yearly"
  });
  monthBtn.addEventListener("click", () => {
    chartContainer.empty();
    renderSimpleBarChart(chartContainer, muscleId, settings, completionData, "month");
    monthBtn.className = "olen-btn olen-btn-primary olen-progress-toggle-btn";
    yearBtn.className = "olen-btn olen-btn-secondary olen-progress-toggle-btn";
  });
  yearBtn.addEventListener("click", () => {
    chartContainer.empty();
    renderSimpleBarChart(chartContainer, muscleId, settings, completionData, "year");
    yearBtn.className = "olen-btn olen-btn-primary olen-progress-toggle-btn";
    monthBtn.className = "olen-btn olen-btn-secondary olen-progress-toggle-btn";
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay)
      closePopup();
  });
  function closePopup() {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}
function showOverallProgressPopup(settings, completionData) {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";
  const sheet = overlay.createDiv({ cls: "olen-sheet olen-progress-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });
  sheet.createEl("div", { cls: "olen-heading-lg", text: "Strength Progress" });
  const toggleRow = sheet.createDiv({ cls: "olen-progress-toggle" });
  const monthBtn = toggleRow.createEl("button", {
    cls: "olen-btn olen-btn-primary olen-progress-toggle-btn",
    text: "Monthly"
  });
  const yearBtn = toggleRow.createEl("button", {
    cls: "olen-btn olen-btn-secondary olen-progress-toggle-btn",
    text: "Yearly"
  });
  sheet.createEl("div", {
    cls: "olen-progress-subtitle",
    text: "Overall Strength"
  });
  const overallChart = sheet.createDiv({ cls: "olen-progress-chart" });
  renderOverallStrengthChart(overallChart, settings, completionData, "month");
  sheet.createEl("div", {
    cls: "olen-progress-subtitle",
    text: "By Muscle Group"
  });
  const muscleChart = sheet.createDiv({ cls: "olen-progress-chart" });
  renderMuscleBreakdownChart(muscleChart, settings, completionData, "month");
  monthBtn.addEventListener("click", () => {
    overallChart.empty();
    muscleChart.empty();
    renderOverallStrengthChart(overallChart, settings, completionData, "month");
    renderMuscleBreakdownChart(muscleChart, settings, completionData, "month");
    monthBtn.className = "olen-btn olen-btn-primary olen-progress-toggle-btn";
    yearBtn.className = "olen-btn olen-btn-secondary olen-progress-toggle-btn";
  });
  yearBtn.addEventListener("click", () => {
    overallChart.empty();
    muscleChart.empty();
    renderOverallStrengthChart(overallChart, settings, completionData, "year");
    renderMuscleBreakdownChart(muscleChart, settings, completionData, "year");
    yearBtn.className = "olen-btn olen-btn-primary olen-progress-toggle-btn";
    monthBtn.className = "olen-btn olen-btn-secondary olen-progress-toggle-btn";
  });
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay)
      closePopup();
  });
  function closePopup() {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}
function renderSimpleBarChart(container, muscleId, settings, completionData, period) {
  const workoutActivity = settings.activities.find((a) => a.id === "workout");
  if (!workoutActivity) {
    container.createEl("div", { cls: "olen-progress-empty", text: "No workout data available" });
    return;
  }
  const comps = completionData[workoutActivity.id] ?? [];
  const now = /* @__PURE__ */ new Date();
  const labels = [];
  const values = [];
  if (period === "month") {
    for (let w = 3; w >= 0; w--) {
      const weekEnd = new Date(now.getTime() - w * 7 * 24 * 60 * 60 * 1e3);
      const weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1e3);
      const count = comps.filter((c) => {
        if (!c.completed)
          return false;
        const d = new Date(c.date);
        return d >= weekStart && d < weekEnd;
      }).length;
      labels.push(`W${4 - w}`);
      values.push(count);
    }
  } else {
    const monthNames = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    for (let m = 11; m >= 0; m--) {
      const monthDate = new Date(now.getFullYear(), now.getMonth() - m, 1);
      const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
      const count = comps.filter((c) => {
        if (!c.completed)
          return false;
        const d = new Date(c.date);
        return d >= monthDate && d <= monthEnd;
      }).length;
      labels.push(monthNames[monthDate.getMonth()]);
      values.push(count);
    }
  }
  drawLineChart(container, labels, values, "#d4a843");
}
function renderOverallStrengthChart(container, settings, completionData, period) {
  const bodyActivities = settings.activities.filter((a) => a.enabled && a.category === "body");
  if (bodyActivities.length === 0) {
    container.createEl("div", { cls: "olen-progress-empty", text: "No body activities configured" });
    return;
  }
  const now = /* @__PURE__ */ new Date();
  const labels = [];
  const values = [];
  if (period === "month") {
    for (let w = 3; w >= 0; w--) {
      const weekEnd = new Date(now.getTime() - w * 7 * 24 * 60 * 60 * 1e3);
      const weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1e3);
      let total = 0;
      for (const act of bodyActivities) {
        const comps = completionData[act.id] ?? [];
        total += comps.filter((c) => {
          if (!c.completed)
            return false;
          const d = new Date(c.date);
          return d >= weekStart && d < weekEnd;
        }).length;
      }
      labels.push(`W${4 - w}`);
      values.push(total);
    }
  } else {
    const monthNames = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
    for (let m = 11; m >= 0; m--) {
      const monthDate = new Date(now.getFullYear(), now.getMonth() - m, 1);
      const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
      let total = 0;
      for (const act of bodyActivities) {
        const comps = completionData[act.id] ?? [];
        total += comps.filter((c) => {
          if (!c.completed)
            return false;
          const d = new Date(c.date);
          return d >= monthDate && d <= monthEnd;
        }).length;
      }
      labels.push(monthNames[monthDate.getMonth()]);
      values.push(total);
    }
  }
  drawLineChart(container, labels, values, "#d4a843");
}
function renderMuscleBreakdownChart(container, settings, completionData, period) {
  const bodyActivities = settings.activities.filter((a) => a.enabled && a.category === "body");
  if (bodyActivities.length === 0) {
    container.createEl("div", { cls: "olen-progress-empty", text: "No body activities configured" });
    return;
  }
  const now = /* @__PURE__ */ new Date();
  const colors = ["#d4a843", "#e8c35a", "#7b9de0", "#a08de0", "#5e9a7a", "#c48820"];
  const svgNS = "http://www.w3.org/2000/svg";
  const width = 280;
  const height = 120;
  const padding = { top: 10, right: 10, bottom: 20, left: 24 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("class", "olen-progress-svg");
  const bucketCount = period === "month" ? 4 : 12;
  const allSeries = [];
  let globalMax = 1;
  for (let ai = 0; ai < bodyActivities.length; ai++) {
    const act = bodyActivities[ai];
    const comps = completionData[act.id] ?? [];
    const vals = [];
    if (period === "month") {
      for (let w = 3; w >= 0; w--) {
        const weekEnd = new Date(now.getTime() - w * 7 * 24 * 60 * 60 * 1e3);
        const weekStart = new Date(weekEnd.getTime() - 7 * 24 * 60 * 60 * 1e3);
        vals.push(comps.filter((c) => {
          if (!c.completed)
            return false;
          const d = new Date(c.date);
          return d >= weekStart && d < weekEnd;
        }).length);
      }
    } else {
      for (let m = 11; m >= 0; m--) {
        const monthDate = new Date(now.getFullYear(), now.getMonth() - m, 1);
        const monthEnd = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
        vals.push(comps.filter((c) => {
          if (!c.completed)
            return false;
          const d = new Date(c.date);
          return d >= monthDate && d <= monthEnd;
        }).length);
      }
    }
    const max = Math.max(...vals, 1);
    if (max > globalMax)
      globalMax = max;
    allSeries.push({
      name: act.name,
      values: vals,
      color: colors[ai % colors.length]
    });
  }
  for (const series of allSeries) {
    const points = series.values.map((v, i) => {
      const x = padding.left + i / (bucketCount - 1) * chartW;
      const y = padding.top + chartH - v / globalMax * chartH;
      return `${x},${y}`;
    });
    const line = document.createElementNS(svgNS, "polyline");
    line.setAttribute("points", points.join(" "));
    line.setAttribute("fill", "none");
    line.setAttribute("stroke", series.color);
    line.setAttribute("stroke-width", "1.5");
    line.setAttribute("stroke-linecap", "round");
    line.setAttribute("stroke-linejoin", "round");
    svg.appendChild(line);
  }
  const xLabels = period === "month" ? ["W1", "W2", "W3", "W4"] : ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
  for (let i = 0; i < bucketCount; i++) {
    const x = padding.left + i / (bucketCount - 1) * chartW;
    const label = document.createElementNS(svgNS, "text");
    label.setAttribute("x", String(x));
    label.setAttribute("y", String(height - 4));
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("fill", "rgba(242, 236, 224, 0.4)");
    label.setAttribute("font-size", "8");
    label.textContent = xLabels[i];
    svg.appendChild(label);
  }
  container.appendChild(svg);
  const legend = container.createDiv({ cls: "olen-progress-legend" });
  for (const series of allSeries) {
    const item = legend.createDiv({ cls: "olen-progress-legend-item" });
    const dot = item.createDiv({ cls: "olen-progress-legend-dot" });
    dot.style.background = series.color;
    item.createEl("span", { text: series.name });
  }
}
function drawLineChart(container, labels, values, color) {
  const svgNS = "http://www.w3.org/2000/svg";
  const width = 280;
  const height = 100;
  const padding = { top: 10, right: 10, bottom: 18, left: 10 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = Math.max(...values, 1);
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("class", "olen-progress-svg");
  for (let g = 0; g <= 2; g++) {
    const gy = padding.top + g / 2 * chartH;
    const line = document.createElementNS(svgNS, "line");
    line.setAttribute("x1", String(padding.left));
    line.setAttribute("x2", String(width - padding.right));
    line.setAttribute("y1", String(gy));
    line.setAttribute("y2", String(gy));
    line.setAttribute("stroke", "rgba(242, 236, 224, 0.06)");
    line.setAttribute("stroke-width", "0.5");
    svg.appendChild(line);
  }
  const points = values.map((v, i) => ({
    x: padding.left + i / Math.max(1, values.length - 1) * chartW,
    y: padding.top + chartH - v / maxVal * chartH
  }));
  if (points.length > 1) {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }
    const area = document.createElementNS(svgNS, "path");
    const areaD = d + ` L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z`;
    area.setAttribute("d", areaD);
    area.setAttribute("fill", color);
    area.setAttribute("opacity", "0.08");
    svg.appendChild(area);
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color);
    path.setAttribute("stroke-width", "1.5");
    path.setAttribute("stroke-linecap", "round");
    svg.appendChild(path);
  }
  for (const pt of points) {
    const dot = document.createElementNS(svgNS, "circle");
    dot.setAttribute("cx", String(pt.x));
    dot.setAttribute("cy", String(pt.y));
    dot.setAttribute("r", "2.5");
    dot.setAttribute("fill", color);
    svg.appendChild(dot);
  }
  for (let i = 0; i < labels.length; i++) {
    const x = padding.left + i / Math.max(1, labels.length - 1) * chartW;
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", String(x));
    text.setAttribute("y", String(height - 4));
    text.setAttribute("text-anchor", "middle");
    text.setAttribute("fill", "rgba(242, 236, 224, 0.4)");
    text.setAttribute("font-size", "8");
    text.textContent = labels[i];
    svg.appendChild(text);
  }
  container.appendChild(svg);
}
function showMuscleSelector(onConfirm) {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";
  const sheet = overlay.createDiv({ cls: "olen-sheet olen-muscle-selector-sheet" });
  sheet.createDiv({ cls: "olen-sheet-handle" });
  sheet.createEl("div", { cls: "olen-heading-lg", text: "Select Muscles" });
  sheet.createEl("div", {
    cls: "olen-progress-subtitle",
    text: "Tap the muscles you want to train"
  });
  const selected = /* @__PURE__ */ new Set();
  const figureWrap = sheet.createDiv({ cls: "olen-muscle-selector-figure" });
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 200 400");
  svg.setAttribute("class", "olen-heatmap-svg olen-selector-svg");
  drawBodySilhouette(svg, svgNS, "male", "front");
  const rects = /* @__PURE__ */ new Map();
  for (const region of MUSCLE_REGIONS) {
    const bounds = region.front ?? region.back;
    if (!bounds)
      continue;
    const x = bounds.x * 2;
    const y = bounds.y * 4;
    const w = bounds.w * 2;
    const h = bounds.h * 4;
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", String(w));
    rect.setAttribute("height", String(h));
    rect.setAttribute("rx", "6");
    rect.setAttribute("ry", "6");
    rect.setAttribute("fill", "rgba(242, 236, 224, 0.06)");
    rect.setAttribute("class", "olen-heatmap-muscle olen-selector-muscle");
    rect.setAttribute("data-muscle", region.id);
    const existingRects = rects.get(region.id) ?? [];
    existingRects.push(rect);
    rects.set(region.id, existingRects);
    rect.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleMuscle(region.id);
    });
    svg.appendChild(rect);
    if (isSymmetricMuscle(region.id) && bounds.x < 50) {
      const mirrorX = 200 - x - w;
      const mirror = document.createElementNS(svgNS, "rect");
      mirror.setAttribute("x", String(mirrorX));
      mirror.setAttribute("y", String(y));
      mirror.setAttribute("width", String(w));
      mirror.setAttribute("height", String(h));
      mirror.setAttribute("rx", "6");
      mirror.setAttribute("ry", "6");
      mirror.setAttribute("fill", "rgba(242, 236, 224, 0.06)");
      mirror.setAttribute("class", "olen-heatmap-muscle olen-selector-muscle");
      mirror.setAttribute("data-muscle", region.id);
      existingRects.push(mirror);
      rects.set(region.id, existingRects);
      mirror.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleMuscle(region.id);
      });
      svg.appendChild(mirror);
    }
    const labelText = document.createElementNS(svgNS, "text");
    labelText.setAttribute("x", String(x + w / 2));
    labelText.setAttribute("y", String(y + h / 2 + 3));
    labelText.setAttribute("text-anchor", "middle");
    labelText.setAttribute("fill", "rgba(242, 236, 224, 0.5)");
    labelText.setAttribute("font-size", "7");
    labelText.setAttribute("pointer-events", "none");
    labelText.textContent = MUSCLE_GROUP_LABELS[region.id].slice(0, 5);
    svg.appendChild(labelText);
  }
  figureWrap.appendChild(svg);
  const chipsArea = sheet.createDiv({ cls: "olen-muscle-selector-chips" });
  function toggleMuscle(id) {
    if (selected.has(id)) {
      selected.delete(id);
    } else {
      selected.add(id);
    }
    updateVisual();
  }
  function updateVisual() {
    for (const [id, rectList] of rects) {
      const isSelected = selected.has(id);
      for (const r of rectList) {
        r.setAttribute("fill", isSelected ? "rgba(212, 168, 67, 0.5)" : "rgba(242, 236, 224, 0.06)");
      }
    }
    chipsArea.empty();
    for (const id of selected) {
      const chip = chipsArea.createDiv({ cls: "olen-muscle-selector-chip" });
      chip.textContent = MUSCLE_GROUP_LABELS[id];
      chip.addEventListener("click", () => toggleMuscle(id));
    }
  }
  const actions = sheet.createDiv({ cls: "olen-heatmap-actions" });
  const confirmBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: "Begin Workout"
  });
  confirmBtn.addEventListener("click", () => {
    closePopup();
    onConfirm(Array.from(selected));
  });
  const cancelBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: "Cancel"
  });
  cancelBtn.addEventListener("click", () => closePopup());
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay)
      closePopup();
  });
  function closePopup() {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}

// src/components/WeightProgress.ts
function renderWeightNotification(container, settings, staggerIndex, onLogWeight) {
  const stats = settings.personalStats;
  if (!stats.currentWeight || stats.weightLog.length === 0)
    return;
  const daysSinceLog = getDaysSinceLastLog(stats.lastWeightLogDate);
  const intervalDays = getIntervalDays(stats.weightLogFrequency, stats.weightLogCustomDays);
  if (daysSinceLog < intervalDays)
    return;
  const card = container.createDiv({ cls: "olen-card-compact olen-weight-notify" });
  card.style.setProperty("--i", String(staggerIndex));
  const row = card.createDiv({ cls: "olen-weight-notify-row" });
  row.createEl("span", { text: "Time to log your weight" });
  const btn = row.createEl("button", {
    cls: "olen-btn olen-btn-primary olen-weight-notify-btn",
    text: "Log"
  });
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    onLogWeight();
  });
}
function getDaysSinceLastLog(lastDate) {
  if (!lastDate)
    return 999;
  const last = new Date(lastDate);
  const now = /* @__PURE__ */ new Date();
  const ms = now.getTime() - last.getTime();
  return Math.floor(ms / (24 * 60 * 60 * 1e3));
}
function getIntervalDays(freq, customDays) {
  switch (freq) {
    case "twice-a-week":
      return 3;
    case "every-week":
      return 7;
    case "every-2-weeks":
      return 14;
    case "every-3-days":
      return 3;
    case "every-5-days":
      return 5;
    case "custom":
      return customDays;
    default:
      return 7;
  }
}

// src/components/ProgressAnalytics.ts
function renderProgressAnalytics(container, settings, engine, staggerIndex) {
  const label = settings.devConfig.labels.analytics_title ?? "PROGRESS";
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });
  const card = container.createDiv({ cls: "olen-card" });
  card.style.setProperty("--i", String(staggerIndex));
  const tabRow = card.createDiv({ cls: "olen-analytics-tabs" });
  const contentArea = card.createDiv({ cls: "olen-analytics-content" });
  const periods = ["D", "W", "M", "Y"];
  const tabButtons = [];
  let activePeriod = "W";
  for (const period of periods) {
    const btn = tabRow.createEl("button", { cls: "olen-analytics-tab", text: period });
    if (period === activePeriod)
      btn.classList.add("active");
    tabButtons.push(btn);
    btn.addEventListener("click", () => {
      activePeriod = period;
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderPeriod(contentArea, period, settings, engine);
    });
  }
  renderPeriod(contentArea, activePeriod, settings, engine);
}
function renderPeriod(container, period, settings, engine) {
  container.empty();
  switch (period) {
    case "D":
      renderDailyView(container, settings, engine);
      break;
    case "W":
      renderWeeklyView(container, settings, engine);
      break;
    case "M":
      renderMonthlyView(container, settings, engine);
      break;
    case "Y":
      renderYearlyView(container, settings, engine);
      break;
  }
}
function renderDailyView(container, settings, engine) {
  const stats = engine.getDailyStats();
  const total = stats.perActivity.length;
  const done = stats.sessions;
  const focusScore = total > 0 ? Math.round(done / total * 100) : 0;
  const row = container.createDiv({ cls: "olen-analytics-stats" });
  createStat(row, String(done), "Sessions");
  createStat(row, `${focusScore}%`, "Focus");
  createStat(row, String(total - done), "Remaining");
  container.createDiv({ cls: "olen-divider" });
  for (const a of stats.perActivity) {
    const item = container.createDiv({ cls: "olen-analytics-activity-row" });
    item.createEl("span", { cls: "olen-analytics-activity-emoji", text: a.emoji });
    item.createEl("span", { cls: "olen-analytics-activity-name", text: a.name });
    const badge = item.createEl("span", { cls: "olen-analytics-activity-badge" });
    if (a.done) {
      badge.setText("\u2713");
      badge.classList.add("done");
    } else {
      badge.setText("\u2014");
    }
  }
}
function renderWeeklyView(container, settings, engine) {
  const stats = engine.getWeeklyStats();
  const row = container.createDiv({ cls: "olen-analytics-stats" });
  createStat(row, String(stats.activeDays) + "/7", "Active days");
  createStat(row, stats.bestDay, "Best day");
  const wowStr = stats.weekOverWeek >= 0 ? `+${stats.weekOverWeek}` : String(stats.weekOverWeek);
  createStat(row, wowStr, "vs last week");
  container.createDiv({ cls: "olen-divider" });
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
  const todayStr = new Date(now).toISOString().slice(0, 10);
  let maxTotal = 1;
  for (const day of stats.byDay) {
    let total = 0;
    day.completions.forEach((v) => {
      total += v;
    });
    if (total > maxTotal)
      maxTotal = total;
  }
  const barsContainer = container.createDiv({ cls: "olen-weekly-bars" });
  for (const day of stats.byDay) {
    const col = barsContainer.createDiv({ cls: "olen-weekly-bar-col" });
    let total = 0;
    day.completions.forEach((v) => {
      total += v;
    });
    const barHeight = maxTotal > 0 ? Math.max(4, total / maxTotal * 100) : 4;
    const barEl = col.createDiv({ cls: "olen-weekly-bar" });
    barEl.style.height = `${barHeight}px`;
    barEl.style.minHeight = "4px";
    if (day.date === todayStr)
      barEl.classList.add("olen-weekly-bar-today");
    const categories = ["body", "mind", "spirit"];
    for (const cat of categories) {
      const catCount = day.completions.get(cat) ?? 0;
      if (catCount === 0)
        continue;
      const segHeight = total > 0 ? catCount / total * 100 : 0;
      const seg = barEl.createDiv({ cls: "olen-weekly-bar-segment" });
      seg.style.height = `${segHeight}%`;
      seg.style.background = getCategoryColor2(cat, settings);
    }
    if (total === 0)
      barEl.style.background = "rgba(255, 255, 255, 0.05)";
    col.createEl("div", { cls: "olen-weekly-day-label", text: day.day.charAt(0) });
  }
  const streak = engine.getOverallStreak();
  if (streak > 0) {
    const streakEl = container.createDiv({ cls: "olen-analytics-streak" });
    streakEl.setText(`\u{1F525} ${streak}-day streak`);
  }
}
function renderMonthlyView(container, settings, engine) {
  const stats = engine.getMonthlyStats();
  const row = container.createDiv({ cls: "olen-analytics-stats" });
  createStat(row, String(stats.totalSessions), "Sessions");
  createStat(row, String(stats.activeDays), "Active days");
  createStat(row, String(stats.avgDaily), "Avg/day");
  container.createDiv({ cls: "olen-divider" });
  const heatmap = container.createDiv({ cls: "olen-analytics-heatmap" });
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : /* @__PURE__ */ new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const adjustedFirst = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;
  const dayLabels = ["M", "T", "W", "T", "F", "S", "S"];
  const headerRow = heatmap.createDiv({ cls: "olen-analytics-heatmap-row" });
  for (const dl of dayLabels) {
    headerRow.createEl("div", { cls: "olen-analytics-heatmap-label", text: dl });
  }
  let maxDay = 1;
  for (const d of stats.calendarGrid) {
    if (d.total > maxDay)
      maxDay = d.total;
  }
  let cellIdx = 0;
  let currentRow = heatmap.createDiv({ cls: "olen-analytics-heatmap-row" });
  for (let i = 0; i < adjustedFirst; i++) {
    currentRow.createDiv({ cls: "olen-analytics-heatmap-cell empty" });
    cellIdx++;
  }
  const todayStr = now.toISOString().slice(0, 10);
  for (const day of stats.calendarGrid) {
    if (cellIdx > 0 && cellIdx % 7 === 0) {
      currentRow = heatmap.createDiv({ cls: "olen-analytics-heatmap-row" });
    }
    const cell = currentRow.createDiv({ cls: "olen-analytics-heatmap-cell" });
    const dateNum = parseInt(day.date.slice(-2));
    cell.createEl("span", { cls: "olen-analytics-heatmap-num", text: String(dateNum) });
    if (day.total > 0) {
      const intensity = Math.min(1, day.total / maxDay);
      cell.style.background = `rgba(212, 168, 67, ${0.08 + intensity * 0.35})`;
      cell.style.borderColor = `rgba(212, 168, 67, ${0.15 + intensity * 0.25})`;
    }
    if (day.date === todayStr)
      cell.classList.add("today");
    cellIdx++;
  }
  const subtitle = container.createDiv({ cls: "olen-analytics-subtitle" });
  subtitle.setText("BY WEEK");
  renderBarChart(container, stats.byWeek, settings);
}
function renderYearlyView(container, settings, engine) {
  const stats = engine.getYearlyStats();
  const row = container.createDiv({ cls: "olen-analytics-stats" });
  createStat(row, String(stats.totalSessions), "Sessions");
  createStat(row, String(stats.activeDays), "Active days");
  container.createDiv({ cls: "olen-divider" });
  const subtitle = container.createDiv({ cls: "olen-analytics-subtitle" });
  subtitle.setText("MONTH TRENDS");
  renderBarChart(container, stats.byMonth, settings);
  const catTitle = container.createDiv({ cls: "olen-analytics-subtitle" });
  catTitle.setText("CATEGORY SPLIT");
  const catTotal = Array.from(stats.categoryDistribution.values()).reduce((a, b) => a + b, 0);
  if (catTotal > 0) {
    const distBar = container.createDiv({ cls: "olen-analytics-dist-bar" });
    const categories = ["body", "mind", "spirit"];
    for (const cat of categories) {
      const count = stats.categoryDistribution.get(cat) ?? 0;
      if (count === 0)
        continue;
      const pct = count / catTotal * 100;
      const seg = distBar.createDiv({ cls: "olen-analytics-dist-seg" });
      seg.style.width = `${pct}%`;
      seg.style.background = getCategoryColor2(cat, settings);
    }
    const catLabels = container.createDiv({ cls: "olen-analytics-dist-labels" });
    for (const cat of categories) {
      const count = stats.categoryDistribution.get(cat) ?? 0;
      if (count === 0)
        continue;
      const pct = Math.round(count / catTotal * 100);
      const lbl = catLabels.createDiv({ cls: "olen-analytics-dist-label" });
      const dot = lbl.createEl("span", { cls: "olen-analytics-dist-dot" });
      dot.style.background = getCategoryColor2(cat, settings);
      lbl.createEl("span", { text: `${cat.charAt(0).toUpperCase() + cat.slice(1)} ${pct}%` });
    }
  } else {
    const empty = container.createDiv({ cls: "olen-analytics-empty" });
    empty.setText("Complete some activities to see distribution");
  }
}
function createStat(parent, value, label) {
  const stat = parent.createDiv({ cls: "olen-analytics-stat" });
  stat.createEl("div", { cls: "olen-analytics-stat-value", text: value });
  stat.createEl("div", { cls: "olen-analytics-stat-label", text: label });
}
function renderBarChart(parent, data, settings) {
  let maxTotal = 1;
  for (const d of data) {
    if (d.total > maxTotal)
      maxTotal = d.total;
  }
  const bars = parent.createDiv({ cls: "olen-analytics-bars" });
  for (const d of data) {
    const col = bars.createDiv({ cls: "olen-analytics-bar-col" });
    const barHeight = maxTotal > 0 ? Math.max(4, d.total / maxTotal * 80) : 4;
    const barEl = col.createDiv({ cls: "olen-analytics-bar" });
    barEl.style.height = `${barHeight}px`;
    const categories = ["body", "mind", "spirit"];
    for (const cat of categories) {
      const catCount = d.byCategory.get(cat) ?? 0;
      if (catCount === 0)
        continue;
      const segHeight = d.total > 0 ? catCount / d.total * 100 : 0;
      const seg = barEl.createDiv({ cls: "olen-analytics-bar-seg" });
      seg.style.height = `${segHeight}%`;
      seg.style.background = getCategoryColor2(cat, settings);
    }
    if (d.total === 0)
      barEl.style.background = "rgba(255, 255, 255, 0.05)";
    col.createEl("div", { cls: "olen-analytics-bar-label", text: d.label });
  }
}
function getCategoryColor2(category, settings) {
  return settings.categoryColors[category] ?? "#928d85";
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
        case "heatmap":
          renderStrengthHeatmap(root, settings, engine, completionData, staggerIdx++, {
            onMuscleClick: (muscleId) => {
              showMuscleProgressPopup(muscleId, settings, completionData);
            },
            onProgressClick: () => {
              showOverallProgressPopup(settings, completionData);
            },
            onStartWorkout: () => {
              showMuscleSelector((selected) => {
                this.handleEnterWorkspace("workout");
              });
            }
          }, this.app);
          renderWeightNotification(root, settings, staggerIdx, () => {
            this.handleLogWeight();
          });
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
        case "analytics":
          renderProgressAnalytics(root, settings, engine, staggerIdx++);
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
  async handleLogWeight() {
    const modal = document.createElement("div");
    modal.className = "olen-quick-task-modal";
    modal.innerHTML = `
      <div class="olen-quick-task-backdrop"></div>
      <div class="olen-quick-task-sheet">
        <div class="olen-quick-task-title">Log Weight</div>
        <input type="number" class="olen-quick-task-input" placeholder="Weight (kg)" step="0.1" min="20" max="300" />
        <div class="olen-quick-task-actions">
          <button class="olen-quick-task-cancel">Cancel</button>
          <button class="olen-quick-task-add">Save</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const backdrop = modal.querySelector(".olen-quick-task-backdrop");
    const cancelBtn = modal.querySelector(".olen-quick-task-cancel");
    const addBtn = modal.querySelector(".olen-quick-task-add");
    const input = modal.querySelector(".olen-quick-task-input");
    input.value = String(this.plugin.settings.personalStats.currentWeight || "");
    const close = () => modal.remove();
    backdrop.addEventListener("click", close);
    cancelBtn.addEventListener("click", close);
    addBtn.addEventListener("click", async () => {
      const w = parseFloat(input.value);
      if (isNaN(w) || w <= 0) {
        new import_obsidian2.Notice("Enter a valid weight");
        return;
      }
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      const existing = this.plugin.settings.personalStats.weightLog.find((e) => e.date === today);
      if (existing) {
        existing.weight = w;
      } else {
        this.plugin.settings.personalStats.weightLog.push({ date: today, weight: w });
      }
      this.plugin.settings.personalStats.currentWeight = w;
      this.plugin.settings.personalStats.lastWeightLogDate = today;
      await this.plugin.saveSettings();
      new import_obsidian2.Notice(`Weight logged: ${w} kg`);
      close();
      await this.render();
    });
    setTimeout(() => input.focus(), 50);
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
    this.renderPersonalStatsSection(containerEl);
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
    new import_obsidian4.Setting(body).setName("Homepage").setDesc("Vault file to open when activities are set to 'Open homepage' after completion (e.g. Home.md)").addText(
      (text) => text.setPlaceholder("e.g. Home.md").setValue(this.plugin.settings.homepage).onChange(async (value) => {
        this.plugin.settings.homepage = value;
        await this.plugin.saveSettings();
      })
    );
  }
  // --- Personal Stats ---
  renderPersonalStatsSection(container) {
    const body = this.createCollapsibleSection(container, "Personal Stats", "\u{1F4CA}");
    const stats = this.plugin.settings.personalStats;
    new import_obsidian4.Setting(body).setName("Gender").setDesc("Used to show the correct muscle figure on the heatmap").addDropdown(
      (d) => d.addOptions({ male: "Male", female: "Female" }).setValue(stats.gender).onChange(async (v) => {
        this.plugin.settings.personalStats.gender = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("Height (cm)").addText(
      (t) => t.setValue(stats.height ? String(stats.height) : "").setPlaceholder("e.g. 175").onChange(async (v) => {
        const n = parseInt(v);
        if (!isNaN(n) && n > 0) {
          this.plugin.settings.personalStats.height = n;
          await this.plugin.saveSettings();
        }
      })
    );
    new import_obsidian4.Setting(body).setName("Birthdate").setDesc("Used to calculate your age for the strength calculator").addText(
      (t) => t.setValue(stats.birthdate).setPlaceholder("YYYY-MM-DD").onChange(async (v) => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(v) || v === "") {
          this.plugin.settings.personalStats.birthdate = v;
          await this.plugin.saveSettings();
        }
      })
    );
    if (stats.birthdate) {
      const age = this.calculateAge(stats.birthdate);
      body.createEl("div", {
        text: `Age: ${age} years`,
        attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 12px; padding-left: 4px;" }
      });
    }
    new import_obsidian4.Setting(body).setName("Current weight (kg)").addText(
      (t) => t.setValue(stats.currentWeight ? String(stats.currentWeight) : "").setPlaceholder("e.g. 61").onChange(async (v) => {
        const n = parseFloat(v);
        if (!isNaN(n) && n > 0) {
          this.plugin.settings.personalStats.currentWeight = n;
          await this.plugin.saveSettings();
        }
      })
    );
    new import_obsidian4.Setting(body).setName("Weight logging frequency").setDesc("How often you want to be reminded to log your weight").addDropdown(
      (d) => d.addOptions({
        "twice-a-week": "Twice a week",
        "every-week": "Every week",
        "every-2-weeks": "Every 2 weeks",
        "every-3-days": "Every 3 days",
        "every-5-days": "Every 5 days",
        "custom": "Custom interval"
      }).setValue(stats.weightLogFrequency).onChange(async (v) => {
        this.plugin.settings.personalStats.weightLogFrequency = v;
        await this.plugin.saveSettings();
        this.display();
      })
    );
    if (stats.weightLogFrequency === "custom") {
      new import_obsidian4.Setting(body).setName("Custom interval (days)").addText(
        (t) => t.setValue(String(stats.weightLogCustomDays)).onChange(async (v) => {
          const n = parseInt(v);
          if (!isNaN(n) && n > 0) {
            this.plugin.settings.personalStats.weightLogCustomDays = n;
            await this.plugin.saveSettings();
          }
        })
      );
    }
    new import_obsidian4.Setting(body).setName("Log current weight").setDesc("Save today's weight to your progress history").addButton(
      (btn) => btn.setButtonText("Log Weight").onClick(async () => {
        const w = this.plugin.settings.personalStats.currentWeight;
        if (!w || w <= 0) {
          new import_obsidian4.Notice("Enter your current weight first");
          return;
        }
        const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const existing = this.plugin.settings.personalStats.weightLog.find((e) => e.date === today);
        if (existing) {
          existing.weight = w;
        } else {
          this.plugin.settings.personalStats.weightLog.push({ date: today, weight: w });
        }
        this.plugin.settings.personalStats.lastWeightLogDate = today;
        await this.plugin.saveSettings();
        new import_obsidian4.Notice(`Weight logged: ${w} kg`);
        this.display();
      })
    );
    const log = stats.weightLog;
    if (log.length > 0) {
      const historyEl = body.createDiv({
        attr: { style: "margin: 8px 0; padding: 8px; border: 1px solid var(--background-modifier-border); border-radius: 6px;" }
      });
      historyEl.createEl("div", {
        text: "Weight History",
        attr: { style: "font-weight: 600; font-size: 0.9em; margin-bottom: 6px;" }
      });
      const sorted = [...log].sort((a, b) => b.date.localeCompare(a.date));
      const recent = sorted.slice(0, 10);
      for (const entry of recent) {
        historyEl.createEl("div", {
          text: `${entry.date}: ${entry.weight} kg`,
          attr: { style: "font-size: 0.8em; color: var(--text-muted); padding: 2px 0;" }
        });
      }
      if (sorted.length > 10) {
        historyEl.createEl("div", {
          text: `... and ${sorted.length - 10} more entries`,
          attr: { style: "font-size: 0.75em; color: var(--text-muted); font-style: italic;" }
        });
      }
    }
  }
  calculateAge(birthdate) {
    const birth = new Date(birthdate);
    const now = /* @__PURE__ */ new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();
    if (monthDiff < 0 || monthDiff === 0 && now.getDate() < birth.getDate()) {
      age--;
    }
    return age;
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
    new import_obsidian4.Setting(details).setName("After completion").setDesc("Where to go after finishing this activity").addDropdown(
      (d) => d.addOptions({
        dashboard: "Return to Olen Dashboard",
        stay: "Stay on note",
        homepage: "Open homepage"
      }).setValue(
        !activity.completionReturnTo || activity.completionReturnTo === "dashboard" ? "dashboard" : activity.completionReturnTo === "stay" ? "stay" : "homepage"
      ).onChange(async (v) => {
        this.plugin.settings.activities[index].completionReturnTo = v;
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
var workout_default = '// ============================================================\n// Olen Template \u2014 Workout Tracker v6.0\n// Renders inside the Olen workspace for the "workout" activity.\n// All UI lives here \u2014 daily notes only store YAML frontmatter.\n// Data is read/written via ctx.getData / ctx.setData.\n// Personal stats now read from plugin settings (personalStats).\n// ============================================================\n\nconst { container, getData, setData, setMultipleData, app, moment, notice,\n        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;\n\n// ============================================================\n// SETTINGS \u2014 Edit these to match your vault structure\n// ============================================================\nconst SETTINGS = {\n  // Where daily workout notes are stored\n  workoutFolder: "Personal Life/01 Workout",\n  // Folder containing exercise standard .md files (e.g. "Bench Press.md")\n  exerciseDbFolder: "Home/Activities/Exercises database",\n};\n\n// Read personal stats from plugin settings (set in Olen Settings > Personal Stats)\nconst _pluginStats = ctx.plugin?.settings?.personalStats || {};\nconst PERSONAL = {\n  weight: _pluginStats.currentWeight || 61,\n  height: _pluginStats.height || 175,\n  birthdate: _pluginStats.birthdate || "2005-11-29",\n  gender: _pluginStats.gender || "male",\n};\n\n// Muscle groups available for selection, with optional subgroups\nconst MUSCLE_GROUPS = {\n  "Neck":      { subgroups: null, icon: "\\uD83E\\uDDB4" },\n  "Back":      { subgroups: ["Lats", "Traps", "Rhomboids", "Lower Back", "Rear Delts"], icon: "\\uD83D\\uDD19" },\n  "Chest":     { subgroups: null, icon: "\\uD83D\\uDCAA" },\n  "Shoulders": { subgroups: ["Front Delts", "Side Delts", "Rear Delts"], icon: "\\uD83C\\uDFAF" },\n  "Core":      { subgroups: null, icon: "\\uD83C\\uDFAF" },\n  "Legs":      { subgroups: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"], icon: "\\uD83E\\uDDB5" },\n  "Arms":      { subgroups: ["Biceps", "Triceps", "Forearms"], icon: "\\uD83D\\uDCAA" },\n};\n\n// ============================================================\n// THEME & CONSTANTS\n// ============================================================\nconst THEME = {\n  color: "#9a8c7a",\n  colorHover: "#aa9c8a",\n  colorBorder: "#3a342a",\n  colorBorderHover: "#4a443a",\n  colorMuted: "#6a5a4a",\n  colorLight: "#b8a890",\n  colorDiscipline: "#a89860",\n  colorFlow: "#6a8a9a",\n  systemGreen: "#7a9a7d"\n};\n\nconst STRENGTH_LEVELS = {\n  "Untrained":    { color: "#6a6a6a", icon: "\\u25CB" },\n  "Beginner":     { color: "#a89860", icon: "\\u25D0" },\n  "Novice":       { color: "#7a9a7d", icon: "\\u25D1" },\n  "Intermediate": { color: "#6a8a9a", icon: "\\u25D5" },\n  "Advanced":     { color: "#8a7a9a", icon: "\\u25CF" },\n  "Elite":        { color: "#9a6a7a", icon: "\\u2605" }\n};\n\n// ============================================================\n// STATE (from frontmatter)\n// ============================================================\nlet exercises = getData("exercises") || [];\nlet muscleGroups = getData("muscleGroups") || [];\nlet currentMuscleIndex = getData("currentMuscleIndex") || 0;\nconst isCompleted = getData("Workout") === true;\n\n// ============================================================\n// STYLES\n// ============================================================\nif (!document.getElementById("olen-tpl-workout-v6")) {\n  const style = document.createElement("style");\n  style.id = "olen-tpl-workout-v6";\n  style.textContent = `\n    .otw-container * { box-sizing: border-box; }\n    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0 120px 0; font-family: Georgia, serif; color: #c8c0b2; }\n    .otw-container button, .otw-container input, .otw-modal-overlay button, .otw-modal-overlay input { border-radius: 10px !important; -webkit-appearance: none; appearance: none; }\n    .otw-container input[type="number"] { -moz-appearance: textfield; }\n    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 16px rgba(154,140,122,0.02); } 50% { box-shadow: inset 0 0 24px rgba(154,140,122,0.04); } }\n    @keyframes otw-pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }\n    .otw-card { background: rgba(12,10,16,0.6); backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%); border: 1px solid rgba(154,140,122,0.08); padding: 16px; position: relative; margin-bottom: 12px; border-radius: 16px; }\n    .otw-card-breathe { animation: otw-breathe 6s ease-in-out infinite; }\n    .otw-header { text-align: center; padding: 16px; }\n    .otw-title { margin: 0; color: #9a8c7a; font-size: 18px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }\n    .otw-progress-label { color: #4d473e; font-size: 11px; margin-top: 6px; }\n    .otw-section-label { color: #4d473e; font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-align: center; margin: 16px 0 8px; }\n    .otw-week-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }\n    .otw-week-day { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 3px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.06); border-radius: 8px; }\n    .otw-week-day.today { border-color: rgba(154,140,122,0.2); }\n    .otw-week-day .otw-day-label { font-size: 8px; color: #4d473e; letter-spacing: 1px; text-transform: uppercase; }\n    .otw-week-day .otw-day-num { font-size: 12px; font-weight: 600; color: #4d473e; }\n    .otw-week-day .otw-day-icon { font-size: 13px; min-height: 16px; }\n    .otw-week-day.done .otw-day-num { color: #9a8c7a; }\n    .otw-heatmap-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px 12px; margin-top: 6px; padding: 0 8px; }\n    .otw-heatmap-legend-item { display: flex; align-items: center; gap: 4px; font-size: 7px; color: #4d473e; letter-spacing: 1px; text-transform: uppercase; }\n    .otw-heatmap-legend-dot { width: 6px; height: 6px; border-radius: 2px; }\n    .otw-btn { padding: 12px 20px; border: none; border-radius: 10px !important; font-size: 12px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; -webkit-appearance: none; appearance: none; }\n    .otw-btn-primary { background: linear-gradient(180deg, #9a8c7a, #7a6c5a); color: #0a0a0a; width: 100%; box-shadow: 0 2px 12px rgba(154,140,122,0.15); }\n    .otw-btn-primary:active { transform: scale(0.98); box-shadow: 0 0 20px rgba(154,140,122,0.2); }\n    .otw-btn-secondary { background: rgba(255,255,255,0.03); border: 1px solid rgba(154,140,122,0.1); color: #6a5a4a; }\n    .otw-btn-secondary:active { border-color: rgba(154,140,122,0.3); color: #9a8c7a; }\n    .otw-btn-finish { background: linear-gradient(180deg, #7a9a7d, #5a7a5d); color: #0a0a0a; box-shadow: 0 2px 12px rgba(122,154,125,0.15); }\n    .otw-btn-dashed { width: 100%; background: transparent; border: 1px dashed rgba(154,140,122,0.1); color: #4d473e; border-radius: 10px !important; }\n    .otw-btn-dashed:active { border-color: rgba(154,140,122,0.3); color: #9a8c7a; }\n    .otw-nav-row { display: flex; gap: 10px; margin-top: 20px; }\n    .otw-nav-row .otw-btn { flex: 1; text-align: center; }\n    .otw-set-row { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 10px; padding: 10px 12px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.06); margin-bottom: 4px; border-radius: 10px; }\n    .otw-set-row.completed { opacity: 0.5; }\n    .otw-checkbox { width: 24px; height: 24px; border: 1px solid rgba(154,140,122,0.15); border-radius: 8px !important; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0a0a0a; font-weight: bold; transition: all 0.2s; flex-shrink: 0; }\n    .otw-checkbox.checked { background: #7a9a7d; border-color: #7a9a7d; }\n    .otw-input { padding: 6px; background: rgba(0,0,0,0.3); border: 1px solid rgba(154,140,122,0.1); border-radius: 8px !important; color: #9a8c7a; text-align: center; font-size: 14px; font-weight: 600; width: 50px; -webkit-appearance: none; appearance: none; }\n    .otw-ctrl-btn { width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 8px !important; color: #9a8c7a; cursor: pointer; font-size: 15px; flex-shrink: 0; -webkit-appearance: none; appearance: none; }\n    .otw-ctrl-btn:active { background: rgba(154,140,122,0.2); }\n    .otw-warmup-badge { font-size: 9px; color: #6a8a9a; padding: 2px 6px; background: rgba(106,138,154,0.1); border-radius: 6px; }\n    .otw-strength-bar { height: 4px; background: rgba(255,255,255,0.04); border-radius: 2px; overflow: hidden; margin-top: 6px; }\n    .otw-strength-fill { height: 100%; border-radius: 2px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }\n    .otw-strength-badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }\n    .otw-pr-box { display: flex; flex-direction: column; gap: 4px; padding: 8px 10px; background: rgba(168,152,96,0.06); border: 1px solid rgba(168,152,96,0.15); border-radius: 8px; margin-top: 8px; }\n    .otw-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.4s ease, backdrop-filter 0.4s ease; }\n    .otw-modal-overlay.visible { background: rgba(0,0,0,0.85); backdrop-filter: blur(12px); }\n    .otw-modal-content { background: rgba(12,10,16,0.95); backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%); padding: 24px 18px; border: 1px solid rgba(154,140,122,0.1); border-radius: 18px; max-width: 500px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 14px; position: relative; opacity: 0; transform: translateY(20px); transition: opacity 0.4s ease, transform 0.4s ease; overflow-y: auto; }\n    .otw-modal-overlay.visible .otw-modal-content { opacity: 1; transform: translateY(0); }\n    .otw-feel-btn { display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: rgba(12,10,16,0.4); border-radius: 12px; cursor: pointer; margin-bottom: 8px; transition: all 0.2s; border: 1px solid rgba(154,140,122,0.06); }\n    .otw-feel-btn:active { background: rgba(154,140,122,0.08); }\n    .otw-muscle-toggle { padding: 10px 16px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 10px !important; color: #9a8c7a; font-size: 12px; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }\n    .otw-muscle-toggle.active { background: rgba(154,140,122,0.2) !important; border-color: rgba(154,140,122,0.3) !important; }\n    .otw-muscle-toggle:active { transform: translateY(-1px); }\n    .otw-subgroup-container { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease; opacity: 0; padding: 0 12px; }\n    .otw-subgroup-container.expanded { max-height: 200px; opacity: 1; padding: 12px; }\n    .otw-sub-toggle { padding: 7px 12px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 8px !important; color: #6a5a4a; font-size: 11px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }\n    .otw-sub-toggle.active { background: rgba(154,140,122,0.15); border-color: rgba(154,140,122,0.25); color: #9a8c7a; }\n  `;\n  document.head.appendChild(style);\n}\n\n// ============================================================\n// UTILITY FUNCTIONS\n// ============================================================\n\nfunction addCorners(el, color, size = 14) {\n  ["TL", "TR", "BL", "BR"].forEach((pos) => {\n    const c = document.createElement("div");\n    const isTop = pos.includes("T"), isLeft = pos.includes("L");\n    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;\n    el.appendChild(c);\n  });\n}\n\nfunction calculate1RM(weight, reps) {\n  if (reps === 0 || weight === 0) return 0;\n  if (reps === 1) return weight;\n  return Math.round(weight * (1 + reps / 30));\n}\n\nfunction getFirstWorkingSetIndex(sets) {\n  return sets.findIndex((s) => !s.isWarmup);\n}\n\nfunction updateWarmupWeights(ex, newW) {\n  const warmups = ex.sets.filter((s) => s.isWarmup);\n  [0.5, 0.7, 0.85].forEach((p, i) => {\n    if (warmups[i]) warmups[i].weight = Math.round(newW * p);\n  });\n}\n\n// ============================================================\n// MUSCLE GROUP STRENGTH \u2014 Aggregate per-region data into groups\n// ============================================================\n\nconst MUSCLE_GROUP_REGIONS = {\n  Neck:      ["neck"],\n  Chest:     ["chest"],\n  Back:      ["lats", "traps", "lower_back"],\n  Shoulders: ["front_delts", "rear_delts"],\n  Core:      ["core"],\n  Legs:      ["quads", "hamstrings", "glutes", "calves"],\n  Arms:      ["biceps", "triceps", "forearms"],\n};\n\nconst LEVEL_ORDER = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];\n\nfunction getMuscleGroupStrength(muscleLevels) {\n  const result = {};\n  for (const [group, regions] of Object.entries(MUSCLE_GROUP_REGIONS)) {\n    const entries = regions.map(r => muscleLevels[r]).filter(Boolean);\n    if (entries.length === 0) {\n      result[group] = { level: "Untrained", color: "#6a6a6a", progress: 0, avgScore: 0 };\n      continue;\n    }\n    // Average score: levelIndex * 20 + progress-within-level * 0.2\n    let totalScore = 0;\n    for (const e of entries) {\n      const idx = LEVEL_ORDER.indexOf(e.level);\n      totalScore += idx * 20 + (e.progress || 0) * 0.2;\n    }\n    const avgScore = totalScore / entries.length;\n    const avgLevelIdx = Math.min(5, Math.floor(avgScore / 20));\n    const avgLevel = LEVEL_ORDER[avgLevelIdx];\n    const progressInLevel = ((avgScore / 20) - avgLevelIdx) * 100;\n    result[group] = {\n      level: avgLevel,\n      color: STRENGTH_LEVELS[avgLevel]?.color || "#6a6a6a",\n      progress: Math.min(100, Math.max(0, progressInLevel)),\n      avgScore,\n      regionCount: entries.length,\n      totalRegions: regions.length,\n    };\n  }\n  return result;\n}\n\n// ============================================================\n// PERSONAL STATS & STRENGTH STANDARDS\n// ============================================================\n\nasync function getPersonalStats() {\n  // Read from plugin settings (Personal Stats section)\n  return {\n    weight: PERSONAL.weight,\n    height: PERSONAL.height,\n    birthdate: PERSONAL.birthdate,\n  };\n}\n\nfunction calculateAge(bd) {\n  if (!bd) return 20;\n  const b = new Date(bd), t = new Date();\n  let a = t.getFullYear() - b.getFullYear();\n  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;\n  return a;\n}\n\nfunction parseStandardValue(val) {\n  if (typeof val !== "string") val = String(val);\n  val = val.trim();\n  if (val.includes("<")) {\n    const num = parseFloat(val.replace(/[<\\s]/g, ""));\n    return !isNaN(num) && num > 0 ? num * 0.5 : 0.1;\n  }\n  const num = parseFloat(val);\n  return isNaN(num) ? 0 : num;\n}\n\nasync function getStrengthStandard(exerciseName) {\n  const filePath = SETTINGS.exerciseDbFolder + "/" + exerciseName + ".md";\n  const fm = getFileMetadata(filePath);\n  const isBW = fm?.Type === "Bodyweight";\n  const content = await readFile(filePath);\n  if (!content) return null;\n  const lines = content.split("\\n");\n  const bwTable = [], ageTable = [];\n  let currentTable = null;\n  for (const line of lines) {\n    if (line.match(/\\|\\s*BW\\s*\\|/i)) { currentTable = "bw"; continue; }\n    if (line.match(/\\|\\s*Age\\s*\\|/i)) { currentTable = "age"; continue; }\n    if (line.startsWith("|---") || line.startsWith("| ---")) continue;\n    const m = line.match(/\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|/);\n    if (m) {\n      const row = { key: parseStandardValue(m[1]), beginner: parseStandardValue(m[2]), novice: parseStandardValue(m[3]), intermediate: parseStandardValue(m[4]), advanced: parseStandardValue(m[5]), elite: parseStandardValue(m[6]) };\n      if (row.key > 0 && (row.beginner > 0 || row.novice > 0 || row.intermediate > 0)) {\n        if (currentTable === "bw") bwTable.push(row);\n        else if (currentTable === "age") ageTable.push(row);\n      }\n    }\n  }\n  return { bwTable, ageTable, isBodyweight: isBW, hasValidData: bwTable.length > 0 || ageTable.length > 0 };\n}\n\nfunction interpolateStandard(table, value) {\n  if (!table || table.length === 0) return null;\n  const sorted = [...table].sort((a, b) => a.key - b.key);\n  let lower = sorted[0], upper = sorted[sorted.length - 1];\n  for (let i = 0; i < sorted.length - 1; i++) {\n    if (sorted[i].key <= value && sorted[i + 1].key >= value) { lower = sorted[i]; upper = sorted[i + 1]; break; }\n  }\n  if (value <= lower.key) return { ...lower };\n  if (value >= upper.key) return { ...upper };\n  const ratio = (value - lower.key) / (upper.key - lower.key);\n  return { key: value, beginner: lower.beginner + ratio * (upper.beginner - lower.beginner), novice: lower.novice + ratio * (upper.novice - lower.novice), intermediate: lower.intermediate + ratio * (upper.intermediate - lower.intermediate), advanced: lower.advanced + ratio * (upper.advanced - lower.advanced), elite: lower.elite + ratio * (upper.elite - lower.elite) };\n}\n\nasync function getAveragedStandards(std) {\n  const stats = await getPersonalStats();\n  const bw = interpolateStandard(std.bwTable, stats.weight);\n  const ag = interpolateStandard(std.ageTable, calculateAge(stats.birthdate));\n  if (bw && ag) return { beginner: (bw.beginner + ag.beginner) / 2, novice: (bw.novice + ag.novice) / 2, intermediate: (bw.intermediate + ag.intermediate) / 2, advanced: (bw.advanced + ag.advanced) / 2, elite: (bw.elite + ag.elite) / 2 };\n  return bw || ag || null;\n}\n\nfunction determineStrengthLevel(cv, std) {\n  if (!std || cv < 0) return { level: "Untrained", color: "#6a6a6a", progress: 0, nextTarget: std?.beginner || 1 };\n  const { beginner, novice, intermediate, advanced, elite } = std;\n  if (cv >= elite) return { level: "Elite", color: "#9a6a7a", progress: 100, nextTarget: null };\n  if (cv >= advanced) return { level: "Advanced", color: "#8a7a9a", progress: ((cv - advanced) / (elite - advanced)) * 100, nextTarget: elite };\n  if (cv >= intermediate) return { level: "Intermediate", color: "#6a8a9a", progress: ((cv - intermediate) / (advanced - intermediate)) * 100, nextTarget: advanced };\n  if (cv >= novice) return { level: "Novice", color: "#7a9a7d", progress: ((cv - novice) / (intermediate - novice)) * 100, nextTarget: intermediate };\n  if (cv >= beginner) return { level: "Beginner", color: "#a89860", progress: ((cv - beginner) / (novice - beginner)) * 100, nextTarget: novice };\n  return { level: "Untrained", color: "#6a6a6a", progress: beginner > 0 ? Math.max(0, (cv / beginner) * 100) : 0, nextTarget: beginner };\n}\n\nasync function calculateStrengthLevel(name, w, r, maxR) {\n  const std = await getStrengthStandard(name);\n  if (!std || !std.hasValidData) return null;\n  const avg = await getAveragedStandards(std);\n  if (!avg) return null;\n  if (std.isBodyweight) {\n    const eff = maxR !== null && maxR !== undefined ? Math.max(r, maxR) : r;\n    const res = determineStrengthLevel(eff, avg);\n    return { ...res, currentValue: eff, isBodyweight: true, unit: "reps", displayLabel: "Max Reps" };\n  } else {\n    if (w <= 0) return null;\n    const est = calculate1RM(w, r);\n    const res = determineStrengthLevel(est, avg);\n    return { ...res, currentValue: est, isBodyweight: false, unit: "kg", displayLabel: "Est. 1RM" };\n  }\n}\n\nasync function hasStrengthStandard(name) {\n  const std = await getStrengthStandard(name);\n  return std !== null && std.hasValidData;\n}\n\n// ============================================================\n// WORKOUT DATA \u2014 PR lookup, previous exercise loading\n// ============================================================\n\nasync function getExercisePR(name) {\n  const std = await getStrengthStandard(name);\n  const isBW = std?.isBodyweight || false;\n  const files = getFilesInFolder(SETTINGS.workoutFolder);\n  let best = null, bestV = 0;\n  for (const f of files) {\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises) && fm.Workout === true) {\n      const ex = fm.exercises.find((e) => e.name === name);\n      if (ex?.sets) {\n        for (const set of ex.sets) {\n          if (!set.isWarmup && set.completed) {\n            if (isBW) {\n              if (set.reps > bestV) { bestV = set.reps; best = { ...set, date: f.basename, prValue: bestV, isBodyweight: true }; }\n            } else if (set.weight > 0) {\n              const est = calculate1RM(set.weight, set.reps);\n              if (est > bestV) { bestV = est; best = { ...set, date: f.basename, estimated1RM: est, prValue: est, isBodyweight: false }; }\n            }\n          }\n        }\n      }\n    }\n  }\n  return best;\n}\n\nfunction getLastWorkoutForMuscleGroup(muscleGroup) {\n  const files = getFilesInFolder(SETTINGS.workoutFolder)\n    .sort((a, b) => b.basename.localeCompare(a.basename));\n  for (const f of files) {\n    if (f.path === file.path) continue; // skip current note\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises)) {\n      const relevant = fm.exercises.filter(ex => ex.muscle === muscleGroup || ex.muscleGroup === muscleGroup);\n      if (relevant.length > 0) return { date: f.basename, exercises: relevant };\n    }\n  }\n  return null;\n}\n\nfunction loadPreviousExercises(selectedMuscleGroups) {\n  const exercisesArray = [];\n  for (const muscle of selectedMuscleGroups) {\n    const lastWorkout = getLastWorkoutForMuscleGroup(muscle);\n    if (lastWorkout) {\n      for (const ex of lastWorkout.exercises) {\n        exercisesArray.push({\n          name: ex.name,\n          muscle: muscle,\n          muscleGroup: muscle,\n          sets: ex.sets ? ex.sets.map(s => ({\n            weight: s.weight || 0,\n            reps: s.reps || 10,\n            completed: false,\n            isWarmup: s.isWarmup || false\n          })) : [{ weight: 0, reps: 10, completed: false, isWarmup: false }]\n        });\n      }\n    }\n  }\n  return exercisesArray;\n}\n\n// ============================================================\n// SAVE STATE\n// ============================================================\n\nasync function saveState() {\n  await setMultipleData({\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n}\n\n// ============================================================\n// MODAL SYSTEM\n// ============================================================\n\nlet activeModal = null;\n\nfunction closeModal() {\n  if (!activeModal) return;\n  activeModal.classList.remove("visible");\n  setTimeout(() => {\n    if (activeModal?.parentNode) activeModal.parentNode.removeChild(activeModal);\n    activeModal = null;\n  }, 500);\n}\n\nfunction createModal(title, contentBuilder) {\n  if (activeModal) { activeModal.parentNode.removeChild(activeModal); activeModal = null; }\n  const modal = document.createElement("div");\n  modal.className = "otw-modal-overlay";\n  activeModal = modal;\n  const modalContent = document.createElement("div");\n  modalContent.className = "otw-modal-content";\n  modal.appendChild(modalContent);\n  addCorners(modalContent, THEME.color);\n  if (title) {\n    const t = document.createElement("h2");\n    t.textContent = title;\n    t.style.cssText = `margin:0;color:${THEME.color};font-size:14px;font-weight:500;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    modalContent.appendChild(t);\n    const d = document.createElement("div");\n    d.style.cssText = `width:60px;height:1px;background:linear-gradient(90deg,transparent,${THEME.color},transparent);margin:0 auto 12px;`;\n    modalContent.appendChild(d);\n  }\n  contentBuilder(modalContent);\n  modal.onclick = (e) => { if (e.target === modal) closeModal(); };\n  document.body.appendChild(modal);\n  requestAnimationFrame(() => modal.classList.add("visible"));\n  return modal;\n}\n\n// ============================================================\n// POST-COMPLETION NAVIGATION\n// ============================================================\n\nfunction getReturnDestination() {\n  // Look up the current activity\'s config from plugin settings\n  const activityId = getData("activity");\n  const activities = ctx.plugin?.settings?.activities;\n  if (activities && activityId) {\n    const actConfig = activities.find(a => a.id === activityId);\n    if (actConfig?.completionReturnTo) return actConfig.completionReturnTo;\n  }\n  return "dashboard"; // default\n}\n\nfunction navigateAfterCompletion() {\n  const dest = getReturnDestination();\n  if (dest === "stay") return; // do nothing, stay on completion summary\n  if (dest === "dashboard") {\n    // Use Olen\'s built-in dashboard activation\n    if (ctx.plugin?.activateDashboardView) {\n      setTimeout(() => ctx.plugin.activateDashboardView(), 600);\n    }\n    return;\n  }\n  if (dest === "homepage") {\n    // Open the global homepage file defined in Profile settings\n    const homepagePath = ctx.plugin?.settings?.homepage;\n    if (!homepagePath) { notice("No homepage set \u2014 go to Olen Settings > Profile to define one."); return; }\n    const targetFile = app.vault.getAbstractFileByPath(homepagePath);\n    if (targetFile) {\n      setTimeout(() => app.workspace.getLeaf(false).openFile(targetFile), 600);\n    } else {\n      notice("Homepage file not found: " + homepagePath);\n    }\n    return;\n  }\n}\n\n// ============================================================\n// FINISH WORKOUT\n// ============================================================\n\nasync function finishWorkout(type) {\n  await setMultipleData({\n    Workout: true,\n    "Workout-Type": type,\n    Timestamp: moment().format(),\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n  notice("Workout logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");\n  navigateAfterCompletion();\n}\n\nasync function openFinishModal() {\n  // Build session analytics data\n  const summaryData = [];\n  for (const ex of exercises) {\n    const completed = ex.sets.filter(s => !s.isWarmup && s.completed);\n    if (completed.length > 0) {\n      const pr = await getExercisePR(ex.name);\n      let bestW = 0, bestR = 0, maxR = 0, sessionBest = 0;\n      for (const s of completed) {\n        if (s.reps > maxR) maxR = s.reps;\n        if (s.weight > 0) {\n          const est = calculate1RM(s.weight, s.reps);\n          if (est > sessionBest) { sessionBest = est; bestW = s.weight; bestR = s.reps; }\n        } else if (s.reps > sessionBest) { sessionBest = s.reps; bestR = s.reps; }\n      }\n      const sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR);\n      summaryData.push({ name: ex.name, muscle: ex.muscle || ex.muscleGroup, bestW, bestR, maxR, sessionBest, sl, pr, completedSets: completed.length, totalSets: ex.sets.filter(s => !s.isWarmup).length });\n    }\n  }\n\n  createModal(null, (content) => {\n    // Scrollable area\n    const scroll = document.createElement("div");\n    scroll.style.cssText = "overflow-y:auto;display:flex;flex-direction:column;gap:16px;flex:1;max-height:70vh;";\n    content.appendChild(scroll);\n\n    // Title\n    const title = document.createElement("h2");\n    title.textContent = "WORKOUT COMPLETE";\n    title.style.cssText = `margin:0;color:${THEME.systemGreen};font-size:16px;font-weight:700;letter-spacing:3px;text-align:center;`;\n    scroll.appendChild(title);\n\n    // Session summary cards\n    if (summaryData.length > 0) {\n      const sec = document.createElement("div");\n      sec.style.cssText = "display:flex;flex-direction:column;gap:12px;";\n      scroll.appendChild(sec);\n\n      const secTitle = document.createElement("div");\n      secTitle.textContent = "SESSION SUMMARY";\n      secTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;`;\n      sec.appendChild(secTitle);\n\n      for (const ex of summaryData) {\n        const card = document.createElement("div");\n        card.style.cssText = `padding:14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};`;\n        sec.appendChild(card);\n\n        // Exercise name + strength badge\n        const hdr = document.createElement("div");\n        hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;";\n        card.appendChild(hdr);\n\n        const nm = document.createElement("span");\n        nm.textContent = ex.name;\n        nm.style.cssText = `color:${THEME.color};font-weight:600;font-size:14px;`;\n        hdr.appendChild(nm);\n\n        if (ex.sl) {\n          const li = STRENGTH_LEVELS[ex.sl.level];\n          const badge = document.createElement("span");\n          badge.style.cssText = `display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:${ex.sl.color}20;border:1px solid ${ex.sl.color}50;color:${ex.sl.color};font-size:11px;font-weight:700;letter-spacing:1px;`;\n          badge.textContent = (li?.icon || "\\u25CB") + " " + ex.sl.level.toUpperCase();\n          hdr.appendChild(badge);\n        }\n\n        // Best set + estimated 1RM\n        const stats = document.createElement("div");\n        stats.style.cssText = `display:flex;justify-content:space-between;margin-bottom:8px;font-size:12px;`;\n        card.appendChild(stats);\n\n        const setInfo = document.createElement("span");\n        setInfo.textContent = ex.sl?.isBodyweight ? "Best: " + ex.maxR + " reps" : "Best: " + ex.bestW + "kg \\u00D7 " + ex.bestR;\n        setInfo.style.cssText = `color:${THEME.colorMuted};`;\n        stats.appendChild(setInfo);\n\n        if (ex.sl) {\n          const rmInfo = document.createElement("span");\n          rmInfo.textContent = ex.sl.displayLabel + ": " + ex.sl.currentValue + ex.sl.unit;\n          rmInfo.style.cssText = `color:${THEME.color};font-weight:600;`;\n          stats.appendChild(rmInfo);\n        }\n\n        // Sets completed\n        const setsInfo = document.createElement("div");\n        setsInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-bottom:8px;`;\n        setsInfo.textContent = ex.completedSets + "/" + ex.totalSets + " working sets completed";\n        card.appendChild(setsInfo);\n\n        // PR comparison\n        if (ex.pr) {\n          const prC = document.createElement("div");\n          prC.style.cssText = `font-size:11px;margin-bottom:8px;padding:6px 8px;`;\n          const cv = ex.sl?.currentValue || ex.sessionBest;\n          if (cv > ex.pr.prValue) {\n            prC.style.background = "rgba(122,154,125,0.15)";\n            prC.innerHTML = \'<span style="color:#7a9a7d;font-weight:700;">\\uD83C\\uDF89 NEW PR!</span> <span style="color:\' + THEME.colorMuted + \';">Previous: \' + ex.pr.prValue + \' \\u2192 Now: \' + cv + \'</span>\';\n          } else if (cv === ex.pr.prValue) {\n            prC.style.background = "rgba(168,152,96,0.1)";\n            prC.innerHTML = \'<span style="color:#a89860;">\\uD83C\\uDFC6 Matched PR:</span> <span style="color:\' + THEME.colorMuted + \';">\' + ex.pr.prValue + \'</span>\';\n          } else {\n            prC.style.background = "rgba(168,152,96,0.1)";\n            prC.innerHTML = \'<span style="color:\' + THEME.colorMuted + \';">\\uD83C\\uDFC6 PR: \' + ex.pr.prValue + \'</span> <span style="color:#6a6a6a;">(today: \' + cv + \')</span>\';\n          }\n          card.appendChild(prC);\n        }\n\n        // Progress bar to next strength level\n        if (ex.sl && ex.sl.nextTarget) {\n          const pb = document.createElement("div");\n          pb.className = "otw-strength-bar";\n          pb.style.marginTop = "8px";\n          card.appendChild(pb);\n          const fill = document.createElement("div");\n          fill.className = "otw-strength-fill";\n          fill.style.cssText = `width:${Math.min(100, ex.sl.progress)}%;background:${ex.sl.color};`;\n          pb.appendChild(fill);\n          const ti = document.createElement("div");\n          ti.style.cssText = `display:flex;justify-content:space-between;font-size:9px;color:${THEME.colorMuted};margin-top:4px;`;\n          ti.innerHTML = "<span>Current: " + ex.sl.currentValue + ex.sl.unit + "</span><span>Next: " + Math.round(ex.sl.nextTarget) + ex.sl.unit + "</span>";\n          card.appendChild(ti);\n        }\n      }\n    }\n\n    // "How did it feel?" section\n    const feelTitle = document.createElement("h3");\n    feelTitle.textContent = "How did it feel?";\n    feelTitle.style.cssText = `margin:8px 0 0 0;color:${THEME.color};font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    scroll.appendChild(feelTitle);\n\n    const btns = document.createElement("div");\n    btns.style.cssText = "display:flex;flex-direction:column;gap:10px;";\n    scroll.appendChild(btns);\n\n    // Discipline button\n    const discBtn = document.createElement("div");\n    discBtn.className = "otw-feel-btn";\n    discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;\n    discBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\\uD83D\\uDC8E</span><div style="flex:1;"><div style="color:${THEME.colorDiscipline};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through resistance</div></div><div style="color:#4a4030;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    discBtn.onclick = async () => { closeModal(); await finishWorkout("discipline"); };\n    btns.appendChild(discBtn);\n\n    // Flow button\n    const flowBtn = document.createElement("div");\n    flowBtn.className = "otw-feel-btn";\n    flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;\n    flowBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\\uD83C\\uDF0A</span><div style="flex:1;"><div style="color:${THEME.colorFlow};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Felt natural and effortless</div></div><div style="color:#304050;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    flowBtn.onclick = async () => { closeModal(); await finishWorkout("flow"); };\n    btns.appendChild(flowBtn);\n  });\n}\n\n// ============================================================\n// ADD EXERCISE MODAL\n// ============================================================\n\nfunction openAddExerciseModal(muscle) {\n  createModal("Add Exercise - " + muscle, (content) => {\n    const nameInput = document.createElement("input");\n    nameInput.type = "text";\n    nameInput.placeholder = "Exercise name...";\n    nameInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;`;\n    content.appendChild(nameInput);\n\n    const warmupLabel = document.createElement("div");\n    warmupLabel.textContent = "Include warmup sets?";\n    warmupLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(warmupLabel);\n\n    let incWarmup = true;\n    const warmupRow = document.createElement("div");\n    warmupRow.style.cssText = "display:flex;gap:8px;margin-top:8px;";\n    content.appendChild(warmupRow);\n\n    const yesBtn = document.createElement("button");\n    yesBtn.textContent = "Yes (suggested)";\n    yesBtn.className = "otw-btn otw-btn-secondary";\n    yesBtn.style.cssText += `flex:1;background:rgba(154,140,122,0.2);border-color:${THEME.color};color:${THEME.color};`;\n    const noBtn = document.createElement("button");\n    noBtn.textContent = "No";\n    noBtn.className = "otw-btn otw-btn-secondary";\n    noBtn.style.flex = "1";\n    yesBtn.onclick = () => { incWarmup = true; yesBtn.style.background = "rgba(154,140,122,0.2)"; yesBtn.style.borderColor = THEME.color; noBtn.style.background = "#0f0f0f"; noBtn.style.borderColor = THEME.colorBorder; };\n    noBtn.onclick = () => { incWarmup = false; noBtn.style.background = "rgba(154,140,122,0.2)"; noBtn.style.borderColor = THEME.color; yesBtn.style.background = "#0f0f0f"; yesBtn.style.borderColor = THEME.colorBorder; };\n    warmupRow.appendChild(yesBtn);\n    warmupRow.appendChild(noBtn);\n\n    const weightLabel = document.createElement("div");\n    weightLabel.textContent = "Working weight (kg) - 0 for bodyweight";\n    weightLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(weightLabel);\n\n    const weightInput = document.createElement("input");\n    weightInput.type = "number";\n    weightInput.placeholder = "0";\n    weightInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;margin-top:8px;`;\n    content.appendChild(weightInput);\n\n    const btnRow = document.createElement("div");\n    btnRow.style.cssText = "display:flex;gap:12px;margin-top:16px;";\n    content.appendChild(btnRow);\n\n    const cancelBtn = document.createElement("button");\n    cancelBtn.textContent = "Cancel";\n    cancelBtn.className = "otw-btn otw-btn-secondary";\n    cancelBtn.style.flex = "1";\n    cancelBtn.onclick = () => closeModal();\n    btnRow.appendChild(cancelBtn);\n\n    const addBtn = document.createElement("button");\n    addBtn.textContent = "Add Exercise";\n    addBtn.className = "otw-btn otw-btn-primary";\n    addBtn.style.flex = "1";\n    addBtn.onclick = async () => {\n      const name = nameInput.value.trim();\n      if (!name) { notice("Please enter an exercise name"); return; }\n      const ww = parseFloat(weightInput.value) || 0;\n      const sets = [];\n      if (incWarmup && ww > 0) {\n        sets.push({ weight: Math.round(ww * 0.5), reps: 10, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.7), reps: 6, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.85), reps: 3, completed: false, isWarmup: true });\n      }\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      exercises.push({ name, muscle, muscleGroup: muscle, sets });\n      closeModal();\n      await saveState();\n      render();\n    };\n    btnRow.appendChild(addBtn);\n\n    setTimeout(() => nameInput.focus(), 100);\n  });\n}\n\n// ============================================================\n// RENDER: SET ROW\n// ============================================================\n\nfunction renderSet(setsContainer, set, setIdx, ex, warmupRefs) {\n  const row = document.createElement("div");\n  row.className = "otw-set-row" + (set.completed ? " completed" : "");\n  setsContainer.appendChild(row);\n  const refs = { weightInput: null };\n\n  // Checkbox\n  const cb = document.createElement("div");\n  cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n  cb.textContent = set.completed ? "\\u2713" : "";\n  cb.onclick = async () => {\n    set.completed = !set.completed;\n    cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n    cb.textContent = set.completed ? "\\u2713" : "";\n    row.className = "otw-set-row" + (set.completed ? " completed" : "");\n    await saveState();\n  };\n  row.appendChild(cb);\n\n  // Middle: weight + reps\n  const mid = document.createElement("div");\n  mid.style.cssText = "display:flex;align-items:center;gap:12px;flex-wrap:wrap;";\n  row.appendChild(mid);\n\n  // Weight input\n  const wWrap = document.createElement("div");\n  wWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(wWrap);\n  const wInput = document.createElement("input");\n  wInput.type = "number";\n  wInput.value = set.weight;\n  wInput.className = "otw-input";\n  const firstW = getFirstWorkingSetIndex(ex.sets);\n  const isFirst = !set.isWarmup && setIdx === firstW;\n  wInput.onchange = async (e) => {\n    const nw = parseFloat(e.target.value) || 0;\n    set.weight = nw;\n    if (isFirst) {\n      updateWarmupWeights(ex, nw);\n      const ws = ex.sets.filter((s) => s.isWarmup);\n      warmupRefs.forEach((inp, i) => { if (ws[i]) inp.value = ws[i].weight; });\n    }\n    await saveState();\n  };\n  wWrap.appendChild(wInput);\n  refs.weightInput = wInput;\n  const kgLabel = document.createElement("span");\n  kgLabel.textContent = "kg";\n  kgLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;`;\n  wWrap.appendChild(kgLabel);\n\n  // Reps controls\n  const rWrap = document.createElement("div");\n  rWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(rWrap);\n  const minusBtn = document.createElement("button");\n  minusBtn.className = "otw-ctrl-btn";\n  minusBtn.textContent = "\\u2212";\n  minusBtn.onclick = async () => { if (set.reps > 1) { set.reps--; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); } };\n  rWrap.appendChild(minusBtn);\n  const rDisp = document.createElement("span");\n  rDisp.textContent = set.reps + "\\u00D7";\n  rDisp.style.cssText = `color:${THEME.color};font-size:14px;font-weight:600;min-width:30px;text-align:center;`;\n  rWrap.appendChild(rDisp);\n  const plusBtn = document.createElement("button");\n  plusBtn.className = "otw-ctrl-btn";\n  plusBtn.textContent = "+";\n  plusBtn.onclick = async () => { set.reps++; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); };\n  rWrap.appendChild(plusBtn);\n\n  if (set.isWarmup) {\n    const badge = document.createElement("span");\n    badge.className = "otw-warmup-badge";\n    badge.textContent = "\\u26A1 Warmup";\n    mid.appendChild(badge);\n  }\n\n  // Delete set button\n  if (ex.sets.length > 1) {\n    const delBtn = document.createElement("button");\n    delBtn.textContent = "\\u00D7";\n    delBtn.style.cssText = `width:28px;height:28px;background:transparent;border:1px solid #3a2828;color:#6a4a4a;cursor:pointer;font-size:16px;`;\n    delBtn.onclick = async () => { ex.sets.splice(setIdx, 1); await saveState(); render(); };\n    row.appendChild(delBtn);\n  } else {\n    const ph = document.createElement("div");\n    ph.style.width = "28px";\n    row.appendChild(ph);\n  }\n\n  return refs;\n}\n\n// ============================================================\n// RENDER: EXERCISE CARD\n// ============================================================\n\nasync function renderExercise(exContainer, ex) {\n  const card = document.createElement("div");\n  card.className = "otw-card";\n  exContainer.appendChild(card);\n  addCorners(card, THEME.color, 12);\n\n  const exHeader = document.createElement("div");\n  exHeader.style.cssText = `display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid ${THEME.colorBorder};`;\n  card.appendChild(exHeader);\n\n  const leftCol = document.createElement("div");\n  leftCol.style.flex = "1";\n  exHeader.appendChild(leftCol);\n\n  const exTitle = document.createElement("h3");\n  exTitle.textContent = ex.name;\n  exTitle.style.cssText = `margin:0 0 8px 0;color:${THEME.color};font-size:16px;letter-spacing:1px;`;\n  leftCol.appendChild(exTitle);\n\n  // Strength level + PR info\n  const hasStd = await hasStrengthStandard(ex.name);\n  const pr = await getExercisePR(ex.name);\n  const workingSets = ex.sets.filter((s) => !s.isWarmup);\n  let bestW = 0, bestR = 0, maxR = 0;\n  workingSets.forEach((s) => { if (s.reps > maxR) maxR = s.reps; if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; } });\n\n  if (hasStd) {\n    let sl;\n    if (pr) { sl = pr.isBodyweight ? await calculateStrengthLevel(ex.name, 0, pr.prValue, pr.prValue) : await calculateStrengthLevel(ex.name, pr.weight, pr.reps, null); }\n    else if (bestW > 0 || maxR > 0) { sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR); }\n    if (sl) {\n      const li = STRENGTH_LEVELS[sl.level];\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText += `background:${sl.color}25;border:1px solid ${sl.color}60;color:${sl.color};`;\n      badge.textContent = (li?.icon || "\\u25CB") + " " + sl.level.toUpperCase();\n      leftCol.appendChild(badge);\n\n      const rmInfo = document.createElement("div");\n      rmInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-top:6px;`;\n      rmInfo.innerHTML = `<strong style="color:${THEME.color}">${sl.displayLabel}: ${sl.currentValue}${sl.unit}</strong>`;\n      if (sl.nextTarget) rmInfo.innerHTML += ` \\u2192 Next: ${Math.round(sl.nextTarget)}${sl.unit}`;\n      leftCol.appendChild(rmInfo);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      leftCol.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, sl.progress)}%;background:${sl.color};`;\n      pb.appendChild(fill);\n    }\n  }\n\n  if (pr) {\n    const prBox = document.createElement("div");\n    prBox.className = "otw-pr-box";\n    const prTitle = document.createElement("div");\n    prTitle.style.cssText = "font-size:11px;color:#a89860;font-weight:700;letter-spacing:1px;";\n    prTitle.textContent = pr.isBodyweight ? "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.prValue + " reps" : "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.estimated1RM + "kg (1RM)";\n    prBox.appendChild(prTitle);\n    const prDetail = document.createElement("div");\n    prDetail.style.cssText = `font-size:10px;color:${THEME.colorMuted};`;\n    prDetail.textContent = pr.isBodyweight ? "Best: " + pr.reps + " reps" : "Set: " + pr.weight + "kg \\u00D7 " + pr.reps + " reps";\n    prBox.appendChild(prDetail);\n    leftCol.appendChild(prBox);\n  }\n\n  // Delete exercise button\n  const delExBtn = document.createElement("button");\n  delExBtn.textContent = "\\uD83D\\uDDD1\\uFE0F";\n  delExBtn.style.cssText = "background:transparent;border:none;cursor:pointer;font-size:14px;opacity:0.5;";\n  delExBtn.onclick = async () => { const idx = exercises.indexOf(ex); if (idx > -1) { exercises.splice(idx, 1); await saveState(); render(); } };\n  exHeader.appendChild(delExBtn);\n\n  // Sets\n  const setsContainer = document.createElement("div");\n  setsContainer.style.cssText = "display:flex;flex-direction:column;gap:6px;";\n  card.appendChild(setsContainer);\n  const warmupRefs = [];\n  ex.sets.forEach((set, setIdx) => {\n    const refs = renderSet(setsContainer, set, setIdx, ex, warmupRefs);\n    if (set.isWarmup && refs.weightInput) warmupRefs.push(refs.weightInput);\n  });\n\n  // Add set button\n  const addSetBtn = document.createElement("button");\n  addSetBtn.textContent = "+ Add Set";\n  addSetBtn.className = "otw-btn otw-btn-dashed";\n  addSetBtn.style.cssText += "margin-top:8px;padding:8px 12px;font-size:12px;";\n  addSetBtn.onclick = async () => {\n    const last = ex.sets[ex.sets.length - 1] || { weight: 0, reps: 10 };\n    ex.sets.push({ weight: last.weight, reps: last.reps, completed: false, isWarmup: false });\n    await saveState();\n    render();\n  };\n  card.appendChild(addSetBtn);\n}\n\n// ============================================================\n// STATISTICS & HEATMAP DATA\n// ============================================================\n\n// Map muscle/subgroup names \u2192 body regions for the heatmap\nconst MUSCLE_TO_REGION = {\n  Neck: ["neck"], Chest: ["chest"], Core: ["core"],\n  Back: ["lats", "traps", "lower_back"], Lats: ["lats"], Traps: ["traps"],\n  Rhomboids: ["traps"], "Lower Back": ["lower_back"], "Rear Delts": ["rear_delts"],\n  Shoulders: ["front_delts", "rear_delts"], "Front Delts": ["front_delts"],\n  "Side Delts": ["front_delts"],\n  Legs: ["quads", "hamstrings", "glutes", "calves"], Quads: ["quads"],\n  Hamstrings: ["hamstrings"], Glutes: ["glutes"], Calves: ["calves"],\n  Adductors: ["quads"],\n  Arms: ["biceps", "triceps", "forearms"], Biceps: ["biceps"],\n  Triceps: ["triceps"], Forearms: ["forearms"],\n};\n\nfunction getWeeklyCalendarData() {\n  const today = moment().startOf("day");\n  const weekStart = today.clone().startOf("isoWeek");\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const days = [];\n  for (let i = 0; i < 7; i++) {\n    const day = weekStart.clone().add(i, "days");\n    const dayStr = day.format("YYYY-MM-DD");\n    const isToday = day.isSame(today, "day");\n    const isPast = day.isBefore(today, "day");\n    let status = null, type = null;\n    for (const wFile of allFiles) {\n      if (wFile.basename === dayStr) {\n        const fm = getFileMetadata(wFile.path);\n        if (fm && fm.Workout === true) { status = "done"; type = fm["Workout-Type"] || "done"; }\n        break;\n      }\n    }\n    days.push({ label: day.format("dd")[0], num: day.format("D"), isToday, isPast, status, type });\n  }\n  return days;\n}\n\nfunction getMonthlyStats() {\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const now = moment();\n  const weekStart = now.clone().startOf("isoWeek");\n  const monthStart = now.clone().startOf("month");\n  let thisWeek = 0, thisMonth = 0, total = 0, totalSets = 0, totalVolume = 0;\n  for (const wFile of allFiles) {\n    const fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true) continue;\n    total++;\n    const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n    if (!dateMatch) continue;\n    const fileDate = moment(dateMatch[1], "YYYY-MM-DD");\n    if (fileDate.isSameOrAfter(weekStart)) thisWeek++;\n    if (fileDate.isSameOrAfter(monthStart)) thisMonth++;\n    if (Array.isArray(fm.exercises)) {\n      for (const ex of fm.exercises) {\n        if (!Array.isArray(ex.sets)) continue;\n        for (const s of ex.sets) {\n          if (s.completed && !s.isWarmup) { totalSets++; totalVolume += (s.weight || 0) * (s.reps || 0); }\n        }\n      }\n    }\n  }\n  return { thisWeek, thisMonth, total, totalSets, totalVolume };\n}\n\nfunction getRecentSessions(limit) {\n  limit = limit || 4;\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const sorted = allFiles.sort(function(a, b) { return b.basename.localeCompare(a.basename); });\n  const sessions = [];\n  for (var i = 0; i < sorted.length; i++) {\n    if (sessions.length >= limit) break;\n    var wFile = sorted[i];\n    if (wFile.path === file.path) continue;\n    var fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true) continue;\n    var dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n    sessions.push({\n      date: dateMatch ? dateMatch[1] : wFile.basename,\n      type: fm["Workout-Type"] || "done",\n      muscles: fm.muscleGroups || [],\n    });\n  }\n  return sessions;\n}\n\n// Build strength level data per body region from ALL completed workouts\nasync function getMuscleLevelData() {\n  const exerciseBest = {}; // exerciseName \u2192 { weight, reps, maxReps, muscle }\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  for (const wFile of allFiles) {\n    if (wFile.path === file.path) continue;\n    const fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n    for (const ex of fm.exercises) {\n      const done = (ex.sets || []).filter(function(s) { return s.completed && !s.isWarmup; });\n      if (done.length === 0) continue;\n      let bestW = 0, bestR = 0, maxR = 0;\n      for (const s of done) {\n        if (s.reps > maxR) maxR = s.reps;\n        if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; }\n      }\n      const existing = exerciseBest[ex.name];\n      if (!existing) {\n        exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };\n      } else {\n        const oldVal = existing.weight > 0 ? calculate1RM(existing.weight, existing.reps) : existing.maxReps;\n        const newVal = bestW > 0 ? calculate1RM(bestW, bestR) : maxR;\n        if (newVal > oldVal) exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };\n      }\n    }\n  }\n  // Calculate strength level per exercise, map to body regions\n  const regionEntries = {};\n  for (const [exName, data] of Object.entries(exerciseBest)) {\n    const sl = await calculateStrengthLevel(exName, data.weight, data.reps, data.maxReps);\n    if (!sl) continue;\n    const regions = MUSCLE_TO_REGION[data.muscle] || [];\n    for (const region of regions) {\n      if (!regionEntries[region]) regionEntries[region] = [];\n      regionEntries[region].push({ level: sl.level, color: sl.color, progress: sl.progress });\n    }\n  }\n  // Pick the best strength level per region\n  const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];\n  const result = {};\n  for (const [region, entries] of Object.entries(regionEntries)) {\n    let best = entries[0], bestIdx = levelOrder.indexOf(entries[0].level);\n    for (let i = 1; i < entries.length; i++) {\n      const idx = levelOrder.indexOf(entries[i].level);\n      if (idx > bestIdx) { bestIdx = idx; best = entries[i]; }\n    }\n    result[region] = best;\n  }\n  return result;\n}\n\n// ============================================================\n// BODY HEATMAP SVG \u2014 Interactive with click-to-show-progress\n// ============================================================\n\nconst REGION_LABELS = {\n  neck: "Neck", chest: "Chest", front_delts: "Front Delts", rear_delts: "Rear Delts",\n  biceps: "Biceps", triceps: "Triceps", forearms: "Forearms", core: "Core",\n  quads: "Quads", calves: "Calves", traps: "Traps", lats: "Lats",\n  lower_back: "Lower Back", glutes: "Glutes", hamstrings: "Hamstrings",\n};\n\n// \u2500\u2500 Render per-muscle strength grid (replaces body figure) \u2500\u2500\n\nfunction renderMuscleStrengthGrid(parent, groupStrength, muscleLevels) {\n  const grid = document.createElement("div");\n  grid.style.cssText = "display:flex;flex-direction:column;gap:6px;margin:14px 0 8px;";\n\n  for (const [group, data] of Object.entries(groupStrength)) {\n    const row = document.createElement("div");\n    row.style.cssText = `display:flex;align-items:center;gap:10px;padding:10px 12px;background:rgba(12,10,16,0.4);border:1px solid rgba(154,140,122,0.06);border-radius:10px;cursor:pointer;transition:border-color 0.15s;`;\n    row.addEventListener("mouseenter", () => { row.style.borderColor = "rgba(154,140,122,0.18)"; });\n    row.addEventListener("mouseleave", () => { row.style.borderColor = "rgba(154,140,122,0.06)"; });\n\n    // Muscle group icon + name\n    const icon = MUSCLE_GROUPS[group]?.icon || "\\u25CB";\n    const label = document.createElement("div");\n    label.style.cssText = "min-width:90px;font-size:11px;font-weight:600;letter-spacing:1px;color:#6a5a4a;";\n    label.textContent = icon + " " + group.toUpperCase();\n    row.appendChild(label);\n\n    // Progress bar\n    const barWrap = document.createElement("div");\n    barWrap.style.cssText = "flex:1;height:6px;background:rgba(255,255,255,0.04);border-radius:3px;overflow:hidden;position:relative;";\n\n    // Total progress across all levels (0-100 maps to Untrained\u2192Elite)\n    const totalProgress = (LEVEL_ORDER.indexOf(data.level) / 5) * 100 + (data.progress || 0) * (1/5);\n    const fill = document.createElement("div");\n    fill.style.cssText = `height:100%;border-radius:3px;transition:width 0.6s cubic-bezier(0.4,0,0.2,1);width:${Math.min(100, Math.max(2, totalProgress))}%;background:${data.level === "Untrained" ? "#3a342a" : data.color};`;\n    barWrap.appendChild(fill);\n    row.appendChild(barWrap);\n\n    // Strength level badge\n    const badge = document.createElement("div");\n    badge.style.cssText = `font-size:8px;font-weight:700;letter-spacing:1.5px;color:${data.level === "Untrained" ? "#3a342a" : data.color};min-width:64px;text-align:right;`;\n    badge.textContent = data.level === "Untrained" ? "\u2014" : data.level.toUpperCase();\n    row.appendChild(badge);\n\n    // Click \u2192 show per-region breakdown popup for this muscle group\n    row.addEventListener("click", () => {\n      showMuscleGroupPopup(group, data, muscleLevels);\n    });\n\n    grid.appendChild(row);\n  }\n\n  parent.appendChild(grid);\n}\n\n// \u2500\u2500 Popup for a specific muscle group showing per-region breakdown \u2500\u2500\n\nfunction showMuscleGroupPopup(group, groupData, muscleLevels) {\n  const regions = MUSCLE_GROUP_REGIONS[group] || [];\n  createModal(group.toUpperCase(), (content) => {\n    // Overall group strength badge\n    const li = STRENGTH_LEVELS[groupData.level];\n    const badge = document.createElement("div");\n    badge.className = "otw-strength-badge";\n    badge.style.cssText = `background:${groupData.color}25;border:1px solid ${groupData.color}60;color:${groupData.color};margin:8px auto;display:inline-flex;`;\n    badge.textContent = (li?.icon || "\\u25CB") + " " + groupData.level.toUpperCase();\n    content.appendChild(badge);\n\n    // Progress bar\n    const totalProgress = (LEVEL_ORDER.indexOf(groupData.level) / 5) * 100 + (groupData.progress || 0) * (1/5);\n    const pb = document.createElement("div");\n    pb.className = "otw-strength-bar";\n    pb.style.marginTop = "12px";\n    content.appendChild(pb);\n    const fillEl = document.createElement("div");\n    fillEl.className = "otw-strength-fill";\n    fillEl.style.cssText = `width:${Math.min(100, totalProgress)}%;background:${groupData.color};`;\n    pb.appendChild(fillEl);\n\n    // Per-region breakdown\n    if (regions.length > 1) {\n      const subLabel = document.createElement("div");\n      subLabel.style.cssText = `color:${THEME.colorMuted};font-size:9px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:18px;margin-bottom:8px;`;\n      subLabel.textContent = "REGION BREAKDOWN";\n      content.appendChild(subLabel);\n\n      for (const region of regions) {\n        const rData = muscleLevels[region];\n        const rLabel = REGION_LABELS[region] || region;\n\n        const rRow = document.createElement("div");\n        rRow.style.cssText = `display:flex;align-items:center;gap:8px;padding:8px 10px;margin-bottom:4px;background:rgba(12,10,16,0.4);border:1px solid rgba(154,140,122,0.06);border-radius:8px;`;\n\n        const rName = document.createElement("div");\n        rName.style.cssText = `min-width:80px;font-size:10px;color:${THEME.colorMuted};letter-spacing:1px;`;\n        rName.textContent = rLabel;\n        rRow.appendChild(rName);\n\n        const rBar = document.createElement("div");\n        rBar.style.cssText = "flex:1;height:4px;background:rgba(255,255,255,0.04);border-radius:2px;overflow:hidden;";\n        if (rData) {\n          const rProgress = (LEVEL_ORDER.indexOf(rData.level) / 5) * 100 + (rData.progress || 0) * (1/5);\n          const rFill = document.createElement("div");\n          rFill.style.cssText = `height:100%;border-radius:2px;width:${Math.min(100, Math.max(2, rProgress))}%;background:${rData.color};`;\n          rBar.appendChild(rFill);\n        }\n        rRow.appendChild(rBar);\n\n        const rBadge = document.createElement("div");\n        rBadge.style.cssText = `font-size:8px;font-weight:700;letter-spacing:1px;min-width:55px;text-align:right;color:${rData ? rData.color : "#3a342a"};`;\n        rBadge.textContent = rData ? rData.level.toUpperCase() : "\u2014";\n        rRow.appendChild(rBadge);\n\n        content.appendChild(rRow);\n      }\n    }\n\n    // Monthly workout frequency chart for this muscle group\n    const chartLabel = document.createElement("div");\n    chartLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:20px;`;\n    chartLabel.textContent = "MONTHLY FREQUENCY";\n    content.appendChild(chartLabel);\n\n    const targetMuscles = [];\n    for (const [muscle, regionList] of Object.entries(MUSCLE_TO_REGION)) {\n      for (const r of regionList) {\n        if (regions.includes(r) && !targetMuscles.includes(muscle)) targetMuscles.push(muscle);\n      }\n    }\n\n    const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n    const now = moment();\n    const weekCounts = [0, 0, 0, 0];\n    for (const wFile of allFiles) {\n      const fm = getFileMetadata(wFile.path);\n      if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n      const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n      if (!dateMatch) continue;\n      const daysAgo = now.diff(moment(dateMatch[1], "YYYY-MM-DD"), "days");\n      if (daysAgo < 0 || daysAgo > 28) continue;\n      const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));\n      if (hasMuscle) {\n        const weekIdx = Math.floor(daysAgo / 7);\n        if (weekIdx < 4) weekCounts[3 - weekIdx]++;\n      }\n    }\n\n    renderLineChart(content, ["W1", "W2", "W3", "W4"], weekCounts);\n  });\n}\n\n// \u2500\u2500 Overall Progress Popup (both overall + per-muscle) \u2500\u2500\n\nasync function showOverallProgressPopup(muscleLevels) {\n  createModal("STRENGTH PROGRESS", (content) => {\n    // 1) Overall strength trend \u2014 average strength level across all regions\n    const overLabel = document.createElement("div");\n    overLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:8px;`;\n    overLabel.textContent = "OVERALL STRENGTH";\n    content.appendChild(overLabel);\n\n    // Summarize current strength levels\n    const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];\n    const regionLevels = Object.entries(muscleLevels);\n    if (regionLevels.length === 0) {\n      const noData = document.createElement("div");\n      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-size:12px;font-style:italic;padding:12px;`;\n      noData.textContent = "Complete some workouts to see your strength progress";\n      content.appendChild(noData);\n    } else {\n      // Average progress value\n      let totalProgress = 0;\n      for (const [, data] of regionLevels) {\n        const idx = levelOrder.indexOf(data.level);\n        totalProgress += (idx / 5) * 100 + (data.progress || 0) * (1/5);\n      }\n      const avgProgress = totalProgress / regionLevels.length;\n      const avgLevelIdx = Math.min(5, Math.floor(avgProgress / 20));\n      const avgLevel = levelOrder[avgLevelIdx];\n      const avgColor = STRENGTH_LEVELS[avgLevel]?.color || "#6a6a6a";\n\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText = `background:${avgColor}25;border:1px solid ${avgColor}60;color:${avgColor};margin:0 auto 12px;display:inline-flex;`;\n      badge.textContent = avgLevel.toUpperCase() + " (avg)";\n      content.appendChild(badge);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      content.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, avgProgress)}%;background:${avgColor};`;\n      pb.appendChild(fill);\n    }\n\n    // Monthly completions chart (all workouts)\n    const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n    const now = moment();\n    const weekCounts = [0, 0, 0, 0];\n    for (const wFile of allFiles) {\n      const fm = getFileMetadata(wFile.path);\n      if (!fm || fm.Workout !== true) continue;\n      const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n      if (!dateMatch) continue;\n      const daysAgo = now.diff(moment(dateMatch[1], "YYYY-MM-DD"), "days");\n      if (daysAgo < 0 || daysAgo > 28) continue;\n      const weekIdx = Math.floor(daysAgo / 7);\n      if (weekIdx < 4) weekCounts[3 - weekIdx]++;\n    }\n\n    // Chart 1: Overall strength curve (workouts per week as a trend)\n    const c1Label = document.createElement("div");\n    c1Label.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:16px;`;\n    c1Label.textContent = "OVERALL STRENGTH";\n    content.appendChild(c1Label);\n    renderLineChart(content, ["W1", "W2", "W3", "W4"], weekCounts, THEME.color);\n\n    // Chart 2: Per-muscle multi-line breakdown\n    const musLabel = document.createElement("div");\n    musLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:20px;`;\n    musLabel.textContent = "BY MUSCLE GROUP";\n    content.appendChild(musLabel);\n\n    // Build per-muscle workout frequency data (last 4 weeks)\n    const muscleColors = ["#9a8c7a", "#a89860", "#7a9a7d", "#6a8a9a", "#8a7a9a", "#9a6a7a", "#6a5a4a"];\n    const muscleSeriesData = [];\n    let colorIdx = 0;\n    const reverseMapAll = {};\n    for (const [muscle, regions] of Object.entries(MUSCLE_TO_REGION)) {\n      for (const r of regions) {\n        if (!reverseMapAll[r]) reverseMapAll[r] = [];\n        reverseMapAll[r].push(muscle);\n      }\n    }\n\n    for (const [region, data] of regionLevels) {\n      const targetMuscles = reverseMapAll[region] || [];\n      const wkCounts = [0, 0, 0, 0];\n      for (const wFile of allFiles) {\n        const fm = getFileMetadata(wFile.path);\n        if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n        const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n        if (!dateMatch) continue;\n        const daysAgo = now.diff(moment(dateMatch[1], "YYYY-MM-DD"), "days");\n        if (daysAgo < 0 || daysAgo > 28) continue;\n        const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));\n        if (hasMuscle) {\n          const weekIdx = Math.floor(daysAgo / 7);\n          if (weekIdx < 4) wkCounts[3 - weekIdx]++;\n        }\n      }\n      muscleSeriesData.push({\n        name: REGION_LABELS[region] || region,\n        values: wkCounts,\n        color: muscleColors[colorIdx % muscleColors.length],\n      });\n      colorIdx++;\n    }\n\n    if (muscleSeriesData.length > 0) {\n      renderMultiLineChart(content, ["W1", "W2", "W3", "W4"], muscleSeriesData);\n    } else {\n      const noData = document.createElement("div");\n      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-size:12px;font-style:italic;padding:12px;`;\n      noData.textContent = "Complete some workouts to see per-muscle trends";\n      content.appendChild(noData);\n    }\n  });\n}\n\n// \u2500\u2500 Line chart helper (used in progress popups \u2014 smooth curve) \u2500\u2500\n\nfunction renderLineChart(parent, labels, values, color) {\n  color = color || THEME.color;\n  const maxVal = Math.max(...values, 1);\n  const ns = "http://www.w3.org/2000/svg";\n  const w = 260, h = 80;\n  const padL = 4, padR = 4, padT = 8, padB = 16;\n  const chartW = w - padL - padR;\n  const chartH = h - padT - padB;\n\n  const svg = document.createElementNS(ns, "svg");\n  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);\n  svg.style.cssText = "width:100%;height:auto;display:block;margin:8px 0;";\n\n  // Grid lines\n  for (let g = 0; g <= 2; g++) {\n    const gy = padT + (g / 2) * chartH;\n    const line = document.createElementNS(ns, "line");\n    line.setAttribute("x1", String(padL)); line.setAttribute("x2", String(w - padR));\n    line.setAttribute("y1", String(gy)); line.setAttribute("y2", String(gy));\n    line.setAttribute("stroke", "rgba(154,140,122,0.08)"); line.setAttribute("stroke-width", "0.5");\n    svg.appendChild(line);\n  }\n\n  // Build points\n  const points = values.map((v, i) => {\n    const x = padL + (i / Math.max(1, values.length - 1)) * chartW;\n    const y = padT + chartH - (v / maxVal) * chartH;\n    return { x, y };\n  });\n\n  // Smooth curve (Catmull-Rom \u2192 cubic bezier)\n  if (points.length > 1) {\n    let d = `M ${points[0].x} ${points[0].y}`;\n    for (let i = 0; i < points.length - 1; i++) {\n      const p0 = points[Math.max(0, i - 1)];\n      const p1 = points[i];\n      const p2 = points[i + 1];\n      const p3 = points[Math.min(points.length - 1, i + 2)];\n      const cp1x = p1.x + (p2.x - p0.x) / 6;\n      const cp1y = p1.y + (p2.y - p0.y) / 6;\n      const cp2x = p2.x - (p3.x - p1.x) / 6;\n      const cp2y = p2.y - (p3.y - p1.y) / 6;\n      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;\n    }\n\n    // Area fill\n    const area = document.createElementNS(ns, "path");\n    const areaD = d + ` L ${points[points.length-1].x} ${padT + chartH} L ${points[0].x} ${padT + chartH} Z`;\n    area.setAttribute("d", areaD);\n    area.setAttribute("fill", color); area.setAttribute("opacity", "0.08");\n    svg.appendChild(area);\n\n    // Curve line\n    const path = document.createElementNS(ns, "path");\n    path.setAttribute("d", d);\n    path.setAttribute("fill", "none");\n    path.setAttribute("stroke", color); path.setAttribute("stroke-width", "1.5");\n    path.setAttribute("stroke-linecap", "round");\n    svg.appendChild(path);\n  }\n\n  // Data dots\n  for (const pt of points) {\n    const dot = document.createElementNS(ns, "circle");\n    dot.setAttribute("cx", String(pt.x)); dot.setAttribute("cy", String(pt.y));\n    dot.setAttribute("r", "2.5"); dot.setAttribute("fill", color);\n    svg.appendChild(dot);\n  }\n\n  // X-axis labels\n  for (let i = 0; i < labels.length; i++) {\n    const x = padL + (i / Math.max(1, labels.length - 1)) * chartW;\n    const txt = document.createElementNS(ns, "text");\n    txt.setAttribute("x", String(x)); txt.setAttribute("y", String(h - 2));\n    txt.setAttribute("text-anchor", "middle");\n    txt.setAttribute("fill", "rgba(154,140,122,0.4)"); txt.setAttribute("font-size", "7");\n    txt.textContent = labels[i];\n    svg.appendChild(txt);\n  }\n\n  parent.appendChild(svg);\n}\n\n// \u2500\u2500 Multi-line chart helper (for per-muscle breakdown) \u2500\u2500\n\nfunction renderMultiLineChart(parent, labels, series) {\n  const allVals = series.flatMap(s => s.values);\n  const maxVal = Math.max(...allVals, 1);\n  const ns = "http://www.w3.org/2000/svg";\n  const w = 260, h = 90;\n  const padL = 4, padR = 4, padT = 8, padB = 16;\n  const chartW = w - padL - padR;\n  const chartH = h - padT - padB;\n\n  const svg = document.createElementNS(ns, "svg");\n  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);\n  svg.style.cssText = "width:100%;height:auto;display:block;margin:8px 0;";\n\n  for (const s of series) {\n    const points = s.values.map((v, i) => ({\n      x: padL + (i / Math.max(1, s.values.length - 1)) * chartW,\n      y: padT + chartH - (v / maxVal) * chartH,\n    }));\n    if (points.length > 1) {\n      let d = `M ${points[0].x} ${points[0].y}`;\n      for (let i = 0; i < points.length - 1; i++) {\n        const p0 = points[Math.max(0, i - 1)];\n        const p1 = points[i];\n        const p2 = points[i + 1];\n        const p3 = points[Math.min(points.length - 1, i + 2)];\n        d += ` C ${p1.x+(p2.x-p0.x)/6} ${p1.y+(p2.y-p0.y)/6}, ${p2.x-(p3.x-p1.x)/6} ${p2.y-(p3.y-p1.y)/6}, ${p2.x} ${p2.y}`;\n      }\n      const path = document.createElementNS(ns, "path");\n      path.setAttribute("d", d); path.setAttribute("fill", "none");\n      path.setAttribute("stroke", s.color); path.setAttribute("stroke-width", "1.2");\n      path.setAttribute("stroke-linecap", "round"); path.setAttribute("opacity", "0.8");\n      svg.appendChild(path);\n    }\n  }\n\n  // X-axis labels\n  for (let i = 0; i < labels.length; i++) {\n    const x = padL + (i / Math.max(1, labels.length - 1)) * chartW;\n    const txt = document.createElementNS(ns, "text");\n    txt.setAttribute("x", String(x)); txt.setAttribute("y", String(h - 2));\n    txt.setAttribute("text-anchor", "middle");\n    txt.setAttribute("fill", "rgba(154,140,122,0.4)"); txt.setAttribute("font-size", "7");\n    txt.textContent = labels[i];\n    svg.appendChild(txt);\n  }\n  parent.appendChild(svg);\n\n  // Legend\n  const legend = document.createElement("div");\n  legend.style.cssText = "display:flex;flex-wrap:wrap;gap:6px 12px;justify-content:center;margin-top:4px;";\n  for (const s of series) {\n    const item = document.createElement("div");\n    item.style.cssText = "display:flex;align-items:center;gap:4px;font-size:9px;color:#6a5a4a;";\n    const dot = document.createElement("div");\n    dot.style.cssText = `width:6px;height:6px;border-radius:50%;background:${s.color};`;\n    item.appendChild(dot);\n    const nm = document.createElement("span");\n    nm.textContent = s.name;\n    item.appendChild(nm);\n    legend.appendChild(item);\n  }\n  parent.appendChild(legend);\n}\n\n// ============================================================\n// RENDER: STATS DASHBOARD\n// ============================================================\n\nasync function renderStatsSection(root) {\n  // Minimal weekly calendar\n  const weekData = getWeeklyCalendarData();\n  const weekGrid = document.createElement("div");\n  weekGrid.className = "otw-week-grid";\n  root.appendChild(weekGrid);\n\n  for (const day of weekData) {\n    const cell = document.createElement("div");\n    cell.className = "otw-week-day" + (day.isToday ? " today" : "") + (day.status ? " done" : "");\n    const lbl = document.createElement("div");\n    lbl.className = "otw-day-label";\n    lbl.textContent = day.label;\n    cell.appendChild(lbl);\n    const num = document.createElement("div");\n    num.className = "otw-day-num";\n    num.textContent = day.num;\n    cell.appendChild(num);\n    const icon = document.createElement("div");\n    icon.className = "otw-day-icon";\n    if (day.status === "done") {\n      if (day.type === "discipline") { icon.textContent = "\\uD83D\\uDC8E"; }\n      else if (day.type === "flow") { icon.textContent = "\\uD83C\\uDF0A"; }\n      else { icon.textContent = "\\u2713"; icon.style.color = THEME.systemGreen; }\n    } else if (day.isToday) {\n      icon.textContent = "\\u2022"; icon.style.color = THEME.color; icon.style.animation = "otw-pulse-glow 2s ease-in-out infinite";\n    } else if (day.isPast) {\n      icon.textContent = "\\u2014"; icon.style.color = "#2a2520";\n    }\n    cell.appendChild(icon);\n    weekGrid.appendChild(cell);\n  }\n\n  // Per-muscle strength grid\n  const muscleLevels = await getMuscleLevelData();\n  const groupStrength = getMuscleGroupStrength(muscleLevels);\n\n  const strengthLabel = document.createElement("div");\n  strengthLabel.className = "otw-section-label";\n  strengthLabel.textContent = "MUSCLE STRENGTH";\n  root.appendChild(strengthLabel);\n\n  renderMuscleStrengthGrid(root, groupStrength, muscleLevels);\n\n  // Compact legend\n  const legend = document.createElement("div");\n  legend.className = "otw-heatmap-legend";\n  const legendItems = [\n    { label: "Beginner", color: "#a89860" },\n    { label: "Novice", color: "#7a9a7d" },\n    { label: "Intermediate", color: "#6a8a9a" },\n    { label: "Advanced", color: "#8a7a9a" },\n    { label: "Elite", color: "#9a6a7a" },\n  ];\n  for (const item of legendItems) {\n    const li = document.createElement("div");\n    li.className = "otw-heatmap-legend-item";\n    const dot = document.createElement("div");\n    dot.className = "otw-heatmap-legend-dot";\n    dot.style.background = item.color;\n    li.appendChild(dot);\n    const txt = document.createElement("span");\n    txt.textContent = item.label;\n    li.appendChild(txt);\n    legend.appendChild(li);\n  }\n  root.appendChild(legend);\n\n  // "Progress" button\n  const progressBtn = document.createElement("button");\n  progressBtn.textContent = "PROGRESS";\n  progressBtn.className = "otw-btn otw-btn-secondary";\n  progressBtn.style.cssText += "width:100%;margin-top:8px;font-size:11px;padding:10px;";\n  progressBtn.onclick = () => showOverallProgressPopup(muscleLevels);\n  root.appendChild(progressBtn);\n}\n\n// ============================================================\n// RENDER: MUSCLE GROUP SELECTION (first-time entry)\n// ============================================================\n\nasync function renderMuscleSelection(root) {\n  const selectedMuscles = new Set();\n  const selectedSubgroups = new Map();\n\n  // \u2500\u2500 "Start New Workout" button HIGH at the top \u2500\u2500\n  const startBtnTop = document.createElement("button");\n  startBtnTop.textContent = "\\uD83C\\uDFCB\\uFE0F START NEW WORKOUT";\n  startBtnTop.className = "otw-btn otw-btn-primary";\n  startBtnTop.style.cssText += "padding:14px 24px;font-size:14px;font-weight:700;width:100%;margin-bottom:16px;";\n  startBtnTop.onclick = () => scrollToMuscleSelect();\n  root.appendChild(startBtnTop);\n\n  // Stats dashboard\n  await renderStatsSection(root);\n\n  // \u2500\u2500 Muscle Selection Section \u2500\u2500\n  const selAnchor = document.createElement("div");\n  selAnchor.id = "otw-muscle-select";\n  root.appendChild(selAnchor);\n\n  function scrollToMuscleSelect() {\n    selAnchor.scrollIntoView({ behavior: "smooth", block: "start" });\n  }\n\n  const selLabel = document.createElement("div");\n  selLabel.className = "otw-section-label";\n  selLabel.style.marginTop = "28px";\n  selLabel.textContent = "SELECT MUSCLE GROUPS";\n  root.appendChild(selLabel);\n\n  const selDesc = document.createElement("div");\n  selDesc.style.cssText = `color:${THEME.colorMuted};font-size:11px;text-align:center;margin-bottom:12px;`;\n  selDesc.textContent = "Select the muscle groups you want to train";\n  root.appendChild(selDesc);\n\n  // Muscle group toggle buttons\n  const muscleGrid = document.createElement("div");\n  muscleGrid.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:8px;";\n  root.appendChild(muscleGrid);\n\n  const subgroupArea = document.createElement("div");\n  subgroupArea.style.cssText = "display:flex;flex-direction:column;gap:8px;width:100%;";\n  root.appendChild(subgroupArea);\n\n  const toggleButtons = new Map();\n\n  Object.entries(MUSCLE_GROUPS).forEach(([name, config]) => {\n    const btn = document.createElement("button");\n    btn.className = "otw-muscle-toggle";\n    btn.textContent = `${config.icon} ${name}`;\n    muscleGrid.appendChild(btn);\n    toggleButtons.set(name, btn);\n\n    let subgroupContainer = null;\n    if (config.subgroups) {\n      subgroupContainer = document.createElement("div");\n      subgroupContainer.className = "otw-subgroup-container";\n      subgroupContainer.style.cssText += `display:flex;flex-wrap:wrap;gap:8px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:4px;`;\n      const subLabel = document.createElement("div");\n      subLabel.style.cssText = `width:100%;color:${THEME.colorMuted};font-size:11px;margin-bottom:4px;`;\n      subLabel.textContent = name + " subgroups:";\n      subgroupContainer.appendChild(subLabel);\n      selectedSubgroups.set(name, new Set());\n\n      config.subgroups.forEach(sub => {\n        const subBtn = document.createElement("button");\n        subBtn.className = "otw-sub-toggle";\n        subBtn.textContent = sub;\n        subBtn.onclick = (e) => {\n          e.stopPropagation();\n          const subs = selectedSubgroups.get(name);\n          if (subs.has(sub)) { subs.delete(sub); subBtn.classList.remove("active"); }\n          else { subs.add(sub); subBtn.classList.add("active"); }\n        };\n        subgroupContainer.appendChild(subBtn);\n      });\n      subgroupArea.appendChild(subgroupContainer);\n    }\n\n    btn.onclick = () => {\n      if (selectedMuscles.has(name)) {\n        selectedMuscles.delete(name);\n        btn.classList.remove("active");\n        if (subgroupContainer) subgroupContainer.classList.remove("expanded");\n      } else {\n        selectedMuscles.add(name);\n        btn.classList.add("active");\n        if (subgroupContainer) subgroupContainer.classList.add("expanded");\n      }\n    };\n  });\n\n  function updateToggleButtons() {\n    for (const [name, btn] of toggleButtons) {\n      if (selectedMuscles.has(name)) {\n        btn.classList.add("active");\n      } else {\n        btn.classList.remove("active");\n      }\n    }\n  }\n\n  // Start button (bottom)\n  const startBtn = document.createElement("button");\n  startBtn.textContent = "\\uD83C\\uDFCB\\uFE0F START WORKOUT";\n  startBtn.className = "otw-btn otw-btn-primary";\n  startBtn.style.cssText += "padding:16px 24px;font-size:15px;font-weight:700;margin-top:16px;";\n  startBtn.onclick = async () => {\n    if (selectedMuscles.size === 0) { notice("Please select at least one muscle group"); return; }\n\n    // Build final muscle list: use subgroups if selected, otherwise the parent group\n    const muscleGroupsArray = [];\n    selectedMuscles.forEach(muscle => {\n      const subs = selectedSubgroups.get(muscle);\n      if (subs && subs.size > 0) {\n        subs.forEach(sub => muscleGroupsArray.push(sub));\n      } else {\n        muscleGroupsArray.push(muscle);\n      }\n    });\n\n    // Load previous exercises for these muscle groups\n    const loadedExercises = loadPreviousExercises(muscleGroupsArray);\n\n    // Save to frontmatter and update local state\n    muscleGroups = muscleGroupsArray;\n    exercises = loadedExercises;\n    currentMuscleIndex = 0;\n\n    await setMultipleData({\n      muscleGroups: muscleGroups,\n      exercises: exercises,\n      currentMuscleIndex: 0,\n      Workout: false,\n      "Workout-Type": "",\n      Timestamp: moment().format(),\n    });\n\n    // Re-render \u2014 now we\'ll enter workout tracking mode\n    render();\n  };\n  root.appendChild(startBtn);\n}\n\n// ============================================================\n// MAIN RENDER\n// ============================================================\n\nasync function render() {\n  container.innerHTML = "";\n  const root = document.createElement("div");\n  root.className = "otw-container";\n  container.appendChild(root);\n\n  // If workout is already completed, show summary\n  if (isCompleted && getData("Workout-Type")) {\n    const wType = getData("Workout-Type");\n    const summaryCard = document.createElement("div");\n    summaryCard.className = "otw-card otw-card-breathe";\n    summaryCard.style.textAlign = "center";\n    summaryCard.style.padding = "32px";\n    addCorners(summaryCard, THEME.systemGreen);\n    summaryCard.innerHTML = `\n      <div style="font-size:32px;margin-bottom:12px;">${wType === "discipline" ? "\\uD83D\\uDC8E" : "\\uD83C\\uDF0A"}</div>\n      <h2 style="margin:0;color:${THEME.systemGreen};font-size:16px;letter-spacing:3px;text-transform:uppercase;">WORKOUT COMPLETE</h2>\n      <div style="color:${THEME.colorMuted};font-size:13px;margin-top:8px;font-style:italic;">${wType === "discipline" ? "Discipline Win" : "Flow State"}</div>\n      <div style="color:${THEME.colorMuted};font-size:11px;margin-top:16px;">${moment(getData("Timestamp")).format("MMM D, YYYY \\u2014 h:mm A")}</div>\n    `;\n    root.appendChild(summaryCard);\n\n    // Show exercises summary\n    if (exercises.length > 0) {\n      const exSummary = document.createElement("div");\n      exSummary.className = "otw-card";\n      addCorners(exSummary, THEME.color);\n      const exTitle = document.createElement("div");\n      exTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:12px;`;\n      exTitle.textContent = "SESSION SUMMARY";\n      exSummary.appendChild(exTitle);\n      for (const ex of exercises) {\n        const completedSets = ex.sets.filter((s) => !s.isWarmup && s.completed).length;\n        const totalSets = ex.sets.filter((s) => !s.isWarmup).length;\n        const row = document.createElement("div");\n        row.style.cssText = `display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${THEME.colorBorder};`;\n        row.innerHTML = `<span style="color:${THEME.color};font-weight:600;">${ex.name}</span><span style="color:${THEME.colorMuted};font-size:12px;">${completedSets}/${totalSets} sets</span>`;\n        exSummary.appendChild(row);\n      }\n      root.appendChild(exSummary);\n    }\n    return;\n  }\n\n  // No muscle groups selected yet \u2014 show selection screen\n  if (muscleGroups.length === 0) {\n    await renderMuscleSelection(root);\n    return;\n  }\n\n  // \u2500\u2500 Active Workout UI \u2500\u2500\n  const currentMuscle = muscleGroups[currentMuscleIndex] || muscleGroups[0];\n  const muscleExercises = exercises.filter((e) => e.muscle === currentMuscle || e.muscleGroup === currentMuscle);\n\n  // Header\n  const header = document.createElement("div");\n  header.className = "otw-card otw-card-breathe otw-header";\n  addCorners(header, THEME.color);\n  const title = document.createElement("h2");\n  title.className = "otw-title";\n  title.textContent = currentMuscle.toUpperCase();\n  header.appendChild(title);\n  const progressLabel = document.createElement("div");\n  progressLabel.className = "otw-progress-label";\n  progressLabel.textContent = (currentMuscleIndex + 1) + " / " + muscleGroups.length;\n  header.appendChild(progressLabel);\n  root.appendChild(header);\n\n  // Exercises\n  const exContainer = document.createElement("div");\n  exContainer.style.cssText = "display:flex;flex-direction:column;gap:16px;";\n  root.appendChild(exContainer);\n\n  if (muscleExercises.length === 0) {\n    const empty = document.createElement("div");\n    empty.style.cssText = `text-align:center;padding:40px 20px;background:#0f0f0f;border:1px dashed ${THEME.colorBorder};`;\n    empty.innerHTML = `<p style="color:${THEME.colorMuted};margin:0;">No exercises for ${currentMuscle} yet.</p>`;\n    exContainer.appendChild(empty);\n  } else {\n    for (const ex of muscleExercises) {\n      await renderExercise(exContainer, ex);\n    }\n  }\n\n  // Add exercise button\n  const addExBtn = document.createElement("button");\n  addExBtn.textContent = "+ ADD EXERCISE";\n  addExBtn.className = "otw-btn otw-btn-dashed";\n  addExBtn.style.marginTop = "16px";\n  addExBtn.onclick = () => openAddExerciseModal(currentMuscle);\n  root.appendChild(addExBtn);\n\n  // Navigation\n  const nav = document.createElement("div");\n  nav.className = "otw-nav-row";\n  root.appendChild(nav);\n\n  if (currentMuscleIndex > 0) {\n    const prevBtn = document.createElement("button");\n    prevBtn.textContent = "\\u2190 PREVIOUS";\n    prevBtn.className = "otw-btn otw-btn-secondary";\n    prevBtn.onclick = async () => { currentMuscleIndex--; await saveState(); render(); };\n    nav.appendChild(prevBtn);\n  }\n\n  if (currentMuscleIndex < muscleGroups.length - 1) {\n    const nextBtn = document.createElement("button");\n    nextBtn.textContent = "NEXT MUSCLE \\u2192";\n    nextBtn.className = "otw-btn otw-btn-primary";\n    nextBtn.onclick = async () => { currentMuscleIndex++; await saveState(); render(); };\n    nav.appendChild(nextBtn);\n  } else {\n    const finishBtn = document.createElement("button");\n    finishBtn.textContent = "\\u2713 FINISH WORKOUT";\n    finishBtn.className = "otw-btn otw-btn-finish";\n    finishBtn.onclick = () => openFinishModal();\n    nav.appendChild(finishBtn);\n  }\n}\n\n// \u2500\u2500 Boot \u2500\u2500\nreturn render();\n';

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
    this.settings.personalStats = Object.assign(
      {},
      DEFAULT_PERSONAL_STATS,
      this.settings.personalStats
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvU3RyZW5ndGhIZWF0bWFwLnRzIiwgInNyYy9jb21wb25lbnRzL1dlaWdodFByb2dyZXNzLnRzIiwgInNyYy9jb21wb25lbnRzL1Byb2dyZXNzQW5hbHl0aWNzLnRzIiwgInNyYy92aWV3cy9Xb3Jrc3BhY2VWaWV3LnRzIiwgInNyYy9zZXR0aW5ncy9PbGVuU2V0dGluZ3MudHMiLCAic3JjL3RlbXBsYXRlcy9UZW1wbGF0ZUVuZ2luZS50cyIsICJzcmMvdGVtcGxhdGVzL2J1aWx0aW5zL3dvcmtvdXQudHBsIiwgInNyYy90ZW1wbGF0ZXMvYnVpbHRpbnMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgUGx1Z2luIEVudHJ5IFBvaW50XG4vLyBSZWdpc3RlcnMgdmlld3MsIGNvbW1hbmRzLCByaWJib24gaWNvbiwgc2V0dGluZ3MgbWlncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgUGx1Z2luLCBkZWJvdW5jZSwgVEZpbGUsIE5vdGljZSwgTWFya2Rvd25WaWV3IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgVHJhY2tIYWJpdFJhbmtEYXRhLCBBY3Rpdml0eUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiwgVklFV19UWVBFX1dPUktTUEFDRSwgREVGQVVMVF9PTEVOX1NFVFRJTkdTLCBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsIERFRkFVTFRfUEVSU09OQUxfU1RBVFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERhc2hib2FyZFZpZXcgfSBmcm9tIFwiLi92aWV3cy9EYXNoYm9hcmRWaWV3XCI7XG5pbXBvcnQgeyBXb3Jrc3BhY2VWaWV3IH0gZnJvbSBcIi4vdmlld3MvV29ya3NwYWNlVmlld1wiO1xuaW1wb3J0IHsgT2xlblNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy9PbGVuU2V0dGluZ3NcIjtcbmltcG9ydCB7IFRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4vdGVtcGxhdGVzL1RlbXBsYXRlRW5naW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9sZW5QbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5ncyE6IE9sZW5TZXR0aW5ncztcbiAgdGVtcGxhdGVFbmdpbmUhOiBUZW1wbGF0ZUVuZ2luZTtcblxuICBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTG9hZCBzZXR0aW5ncyB3aXRoIGRlZmF1bHRzXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUyxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgICk7XG5cbiAgICAvLyBFbnN1cmUgZGVlcCBkZWZhdWx0cyBmb3IgbmVzdGVkIG9iamVjdHNcbiAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5kZXZDb25maWcsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZ1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcubGFiZWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmRldkNvbmZpZy5sYWJlbHMsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlDb2xvcnMsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFAgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlYUCxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUFxuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYWxlbmRhciA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX1BFUlNPTkFMX1NUQVRTLFxuICAgICAgdGhpcy5zZXR0aW5ncy5wZXJzb25hbFN0YXRzXG4gICAgKTtcblxuICAgIC8vIE1pZ3JhdGUgbGVnYWN5IGZpZWxkIG5hbWVzIGZyb20gc2Vzc2lvbiBcdTIxOTIgd29ya3NwYWNlXG4gICAgYXdhaXQgdGhpcy5taWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIFRlbXBsYXRlIEVuZ2luZVxuICAgIHRoaXMudGVtcGxhdGVFbmdpbmUgPSBuZXcgVGVtcGxhdGVFbmdpbmUodGhpcy5hcHAsIHRoaXMpO1xuXG4gICAgLy8gTWlncmF0ZSBmcm9tIFRyYWNrSGFiaXRSYW5rIG9uIGZpcnN0IHJ1blxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5taWdyYXRlZCkge1xuICAgICAgYXdhaXQgdGhpcy5taWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgbWFpbiBkYXNoYm9hcmQgdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX09MRU4sXG4gICAgICAobGVhZikgPT4gbmV3IERhc2hib2FyZFZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmVnaXN0ZXIgd29ya3NwYWNlIHZpZXdcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhcbiAgICAgIFZJRVdfVFlQRV9XT1JLU1BBQ0UsXG4gICAgICAobGVhZikgPT4gbmV3IFdvcmtzcGFjZVZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmliYm9uIGljb25cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oXCJjb21wYXNzXCIsIFwiT3BlbiBPbGVuXCIsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmRzXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcIm9wZW4tb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiT3BlbiBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJyZWZyZXNoLW9sZW4tZGFzaGJvYXJkXCIsXG4gICAgICBuYW1lOiBcIlJlZnJlc2ggT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJhZGQtcXVpY2stdGFza1wiLFxuICAgICAgbmFtZTogXCJBZGQgUXVpY2sgVGFza1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvd1F1aWNrVGFza0RpYWxvZygpLFxuICAgIH0pO1xuXG4gICAgLy8gQ2FsZW5kYXIgcGx1Z2luIGludGVncmF0aW9uIFx1MjAxNCBpbmplY3QgT2xlbiBtZXRhZGF0YSBpbnRvIENhbGVuZGFyIHBsdWdpblxuICAgIHRoaXMucmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpO1xuXG4gICAgLy8gRGVib3VuY2VkIGZpbGUgd2F0Y2hlciBmb3IgbWV0YWRhdGEgY2hhbmdlc1xuICAgIGNvbnN0IHJlZnJlc2ggPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICB9LCAzMDApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKCkgPT4gcmVmcmVzaCgpKVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcImNyZWF0ZVwiLCBhc3luYyAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSB0byBiZSBpbmRleGVkXG4gICAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCAxNSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcInJlbmFtZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2xlblNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogRnJvbnRtYXR0ZXItZHJpdmVuIHJlbmRlcmluZyAtLS1cbiAgICB0aGlzLnJlZ2lzdGVyVGVtcGxhdGVQb3N0UHJvY2Vzc29yKCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIHRlbXBsYXRlIGNhY2hlIHdoZW4gdGVtcGxhdGUgLmpzIGZpbGVzIGFyZSBtb2RpZmllZFxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwibW9kaWZ5XCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwianNcIikge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKGZpbGUucGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIC8vIENsZWFudXAgaGFuZGxlZCBieSBEYXNoYm9hcmRWaWV3Lm9uQ2xvc2UoKVxuICB9XG5cbiAgLy8gLS0tIFZpZXcgTWFuYWdlbWVudCAtLS1cblxuICBhc3luYyBhY3RpdmF0ZURhc2hib2FyZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG4gICAgbGV0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKVswXTtcblxuICAgIGlmICghbGVhZikge1xuICAgICAgY29uc3QgbmV3TGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgICAgaWYgKCFuZXdMZWFmKSByZXR1cm47XG4gICAgICBhd2FpdCBuZXdMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9PTEVOLCBhY3RpdmU6IHRydWUgfSk7XG4gICAgICBsZWFmID0gbmV3TGVhZjtcbiAgICB9XG5cbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIHJlZnJlc2hEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldyBhcyB1bmtub3duIGFzIERhc2hib2FyZFZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlV29ya3NwYWNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG5cbiAgICAvLyBDbG9zZSBleGlzdGluZyB3b3Jrc3BhY2Ugdmlld3NcbiAgICB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9XT1JLU1BBQ0UpLmZvckVhY2goKGxlYWYpID0+IGxlYWYuZGV0YWNoKCkpO1xuXG4gICAgLy8gT3BlbiB3b3Jrc3BhY2UgaW4gdGhlIHNhbWUgdGFiIGFzIHRoZSBkYXNoYm9hcmQgaWYgcG9zc2libGVcbiAgICBjb25zdCBkYXNoTGVhdmVzID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgY29uc3QgdGFyZ2V0TGVhZiA9IGRhc2hMZWF2ZXNbMF0gPz8gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgaWYgKCF0YXJnZXRMZWFmKSByZXR1cm47XG5cbiAgICBhd2FpdCB0YXJnZXRMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZih0YXJnZXRMZWFmKTtcbiAgfVxuXG4gIGFjdGl2YXRlRGFzaGJvYXJkVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlRGFzaGJvYXJkKCk7XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgUmVnaXN0cnk6IFBvc3QtUHJvY2Vzc29yIC0tLVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJUZW1wbGF0ZVBvc3RQcm9jZXNzb3IoKTogdm9pZCB7XG4gICAgLy8gVHJhY2sgd2hpY2ggZmlsZXMgd2UndmUgYWxyZWFkeSByZW5kZXJlZCB0ZW1wbGF0ZXMgZm9yIGluIHRoZSBjdXJyZW50XG4gICAgLy8gdmlldyBjeWNsZSwgdG8gYXZvaWQgZHVwbGljYXRlIHJlbmRlcmluZyBhY3Jvc3MgbXVsdGlwbGUgc2VjdGlvbnMuXG4gICAgY29uc3QgcmVuZGVyZWRGaWxlcyA9IG5ldyBXZWFrU2V0PEhUTUxFbGVtZW50PigpO1xuXG4gICAgdGhpcy5yZWdpc3Rlck1hcmtkb3duUG9zdFByb2Nlc3Nvcihhc3luYyAoZWwsIGN0eCkgPT4ge1xuICAgICAgLy8gRmluZCB0aGUgZmlsZSBiZWluZyByZW5kZXJlZFxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdHguc291cmNlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIC8vIENoZWNrIGZyb250bWF0dGVyIGZvciBhbiBcImFjdGl2aXR5XCIgZmllbGRcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBjb25zdCBhY3Rpdml0eVR5cGUgPSBjYWNoZT8uZnJvbnRtYXR0ZXI/LmFjdGl2aXR5IGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgIC8vIExvb2sgdXAgdGVtcGxhdGUgaW4gdGhlIHJlZ2lzdHJ5XG4gICAgICBjb25zdCBlbnRyeSA9IHRoaXMudGVtcGxhdGVFbmdpbmUuZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZSk7XG4gICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZSByZW5kZXJpbmc6IGNoZWNrIHRoZSBwYXJlbnQgcHJldmlldyBjb250YWluZXJcbiAgICAgIGNvbnN0IHByZXZpZXdTaXplciA9IGVsLmNsb3Nlc3QoXCIubWFya2Rvd24tcHJldmlldy1zaXplclwiKSA/PyBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHByZXZpZXdTaXplciAmJiByZW5kZXJlZEZpbGVzLmhhcyhwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpKSByZXR1cm47XG4gICAgICBpZiAocHJldmlld1NpemVyKSByZW5kZXJlZEZpbGVzLmFkZChwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgICAvLyBDbGVhciBkZWZhdWx0IHJlbmRlcmVkIGNvbnRlbnQgYW5kIGluamVjdCB0ZW1wbGF0ZVxuICAgICAgZWwuZW1wdHkoKTtcbiAgICAgIGVsLmFkZENsYXNzKFwib2xlbi10ZW1wbGF0ZS1ob3N0XCIpO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBlbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1yb290XCIgfSk7XG5cbiAgICAgIGF3YWl0IHRoaXMudGVtcGxhdGVFbmdpbmUucmVuZGVyKGVudHJ5LnRlbXBsYXRlSWQsIGZpbGUsIGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvLyBBbHNvIGhhbmRsZSBmaWxlLW9wZW4gZm9yIG5vdGVzIHdpdGggb25seSBmcm9udG1hdHRlciAobm8gYm9keSBzZWN0aW9ucylcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgYXN5bmMgKGxlYWYpID0+IHtcbiAgICAgICAgaWYgKCFsZWFmKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICAgIGlmICghKHZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmlsZSA9IHZpZXcuZmlsZTtcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgLy8gU21hbGwgZGVsYXkgdG8gbGV0IG1ldGFkYXRhIGNhY2hlIHBvcHVsYXRlXG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlUeXBlID0gY2FjaGU/LmZyb250bWF0dGVyPy5hY3Rpdml0eSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLnRlbXBsYXRlRW5naW5lLmZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGUpO1xuICAgICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYSB0ZW1wbGF0ZSBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ5IHRoZSBwb3N0LXByb2Nlc3NvclxuICAgICAgICBjb25zdCBjb250ZW50RWwgPSB2aWV3LmNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFya2Rvd24tcmVhZGluZy12aWV3IC5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpO1xuICAgICAgICBpZiAoY29udGVudEVsPy5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tdGVtcGxhdGUtcm9vdFwiKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIGluIHJlYWRpbmcgbW9kZSBidXQgbm8gdGVtcGxhdGUgd2FzIGluamVjdGVkIChlbXB0eSBib2R5IG5vdGUpLFxuICAgICAgICAvLyBpbmplY3QgaW50byB0aGUgcHJldmlldyBjb250ZW50XG4gICAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiO1xuICAgICAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVJZCwgZmlsZSwgY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIFBsdWdpbiBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsZW5kYXJQbHVnaW5Tb3VyY2UoKTogdm9pZCB7XG4gICAgLy8gTGlzdGVuIGZvciB0aGUgQ2FsZW5kYXIgcGx1Z2luJ3MgXCJjYWxlbmRhcjpvcGVuXCIgZXZlbnRcbiAgICAvLyBhbmQgaW5qZWN0IE9sZW4ncyBhY3Rpdml0eSBjb21wbGV0aW9uIGRhdGEgYXMgY29sb3JlZCBkb3RzXG4gICAgKHRoaXMuYXBwLndvcmtzcGFjZSBhcyBhbnkpLm9uKFwiY2FsZW5kYXI6b3BlblwiLCAoc291cmNlczogYW55W10pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkgcmV0dXJuO1xuXG4gICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICBnZXREYWlseU1ldGFkYXRhOiAoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUuZm9ybWF0Py4oXCJZWVlZLU1NLUREXCIpID8/IFwiXCI7XG4gICAgICAgICAgaWYgKCFkYXRlU3RyKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBDb3VudCBjb21wbGV0aW9ucyBmb3IgdGhpcyBkYXRlXG4gICAgICAgICAgbGV0IGNvbXBsZXRpb25zID0gMDtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXMuZmluZChcbiAgICAgICAgICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXI/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucysrO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGFjdGl2aXR5LmNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wbGV0aW9ucyA9PT0gMCkgcmV0dXJuIHt9O1xuXG4gICAgICAgICAgLy8gUmV0dXJuIGRvdHMgY29sb3JlZCBieSBkb21pbmFudCBjYXRlZ29yeVxuICAgICAgICAgIGNvbnN0IGRvdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBkb3RzLnB1c2goe1xuICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQgYXMga2V5b2YgdHlwZW9mIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNdID8/IFwiIzkyOGQ4NVwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGBvbGVuLWNhbC1kb3QtJHtjYXR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb3RzLFxuICAgICAgICAgICAgY2xhc3NlczogY29tcGxldGlvbnMgPj0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBcIm9sZW4tY2FsLWNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0V2Vla2x5TWV0YWRhdGE6ICgpID0+ICh7fSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBRdWljayBUYXNrIERpYWxvZyAtLS1cblxuICBwcml2YXRlIHNob3dRdWlja1Rhc2tEaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+QWRkIFF1aWNrIFRhc2s8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9mb2N1cyAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXJvd1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uIChtaW4pXCIgbWluPVwiNVwiIG1heD1cIjQ4MFwiIHZhbHVlPVwiMzBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYmFja2Ryb3BcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stY2FuY2VsXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFkZEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWFkZFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay10aW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZHVyYXRpb25JbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWR1cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBlbnRlciBhIHRhc2sgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3cgPSB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgcXQtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkYXRlOiB0b2RheSxcbiAgICAgICAgdGltZTogdGltZUlucHV0LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpIHx8IDMwLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICBuZXcgTm90aWNlKGBcXHUyNkExIFF1aWNrIHRhc2sgYWRkZWQ6ICR7dGl0bGV9YCk7XG4gICAgICBjbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRm9jdXMgdGhlIGlucHV0XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aXRsZUlucHV0LmZvY3VzKCksIDUwKTtcbiAgfVxuXG4gIC8vIC0tLSBTZXR0aW5ncyBQZXJzaXN0ZW5jZSAtLS1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBNaWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhUGF0aCA9IFwiLm9ic2lkaWFuL3BsdWdpbnMvbXl0aG9sb2dpY2FsLWhhYml0LXRyYWNrZXIvZGF0YS5qc29uXCI7XG4gICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyhkYXRhUGF0aCk7XG5cbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChkYXRhUGF0aCk7XG4gICAgICBjb25zdCBkYXRhOiBUcmFja0hhYml0UmFua0RhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIC8vIE1pZ3JhdGUgYm9zcyBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllciA9IGRhdGEuY3VycmVudFRpZXIgPz8gMTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc01heEhQID0gZGF0YS5ib3NzTWF4SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBkYXRhLmJvc3NDdXJyZW50SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID0gZGF0YS5jb25zZWN1dGl2ZVBlcmZlY3RXZWVrcyA/PyAwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzID0gZGF0YS5pblRhcnRhcnVzID8/IGZhbHNlO1xuICAgICAgdGhpcy5zZXR0aW5ncy50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA9IGRhdGEudGFydGFydXNQZW5hbmNlVGFza3MgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzU3RhcnREYXRlID0gZGF0YS50YXJ0YXJ1c1N0YXJ0RGF0ZSA/PyBudWxsO1xuICAgICAgdGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID0gZGF0YS5mYWlsZWRUaHJlc2hvbGREYXlzID8/IDA7XG5cbiAgICAgIC8vIE1pZ3JhdGUgdGVtcGxlIHRhc2tzXG4gICAgICBpZiAoZGF0YS50ZW1wbGVUYXNrcyAmJiBkYXRhLnRlbXBsZVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50ZW1wbGVUYXNrcyA9IGRhdGEudGVtcGxlVGFza3M7XG4gICAgICB9XG5cbiAgICAgIC8vIE1pZ3JhdGUgcmV3YXJkc1xuICAgICAgdGhpcy5zZXR0aW5ncy5wZW5kaW5nUmV3YXJkcyA9IGRhdGEucGVuZGluZ1Jld2FyZHMgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLmNsYWltZWRSZXdhcmRzID0gKGRhdGEuY2xhaW1lZFJld2FyZHMgPz8gW10pIGFzIGFueTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYmFua2VkUmV3YXJkcyA9IGRhdGEuYmFua2VkUmV3YXJkcyA/PyBbXTtcblxuICAgICAgLy8gTWlncmF0ZSBzeXN0ZW0gc3RhdGVcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSAoZGF0YS5zeXN0ZW1TdGF0ZSBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIikgPz8gXCJhY3RpdmVcIjtcbiAgICAgIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBkYXRhLnBhdXNlU3RhcnRUaW1lID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSA9IGRhdGEudG90YWxQYXVzZWRUaW1lID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSBkYXRhLnNpbXVsYXRlZERhdGUgPz8gbnVsbDtcblxuICAgICAgLy8gTWlncmF0ZSBoZXJvIGJhY2tncm91bmRcbiAgICAgIGlmIChkYXRhLmRhc2hib2FyZEJnSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IGRhdGEuZGFzaGJvYXJkQmdJbWFnZTtcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSBhY3Rpdml0aWVzIGZyb20gZW5hYmxlZEFjdGl2aXRpZXMgKyBjdXN0b21IYWJpdHNcbiAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcyA9IHRoaXMubWlncmF0ZUFjdGl2aXRpZXMoZGF0YSk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgbmV3IE5vdGljZShcIk9sZW46IFN1Y2Nlc3NmdWxseSBtaWdyYXRlZCBkYXRhIGZyb20gTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2xlbiBtaWdyYXRpb24gZXJyb3I6XCIsIGVycik7XG4gICAgICB0aGlzLnNldHRpbmdzLm1pZ3JhdGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtaWdyYXRlQWN0aXZpdGllcyhkYXRhOiBUcmFja0hhYml0UmFua0RhdGEpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFjdGl2aXR5Q29uZmlnW10gPSBbLi4uREVGQVVMVF9BQ1RJVklUSUVTXTtcblxuICAgIC8vIEFwcGx5IGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgICBpZiAoZGF0YS5lbmFibGVkQWN0aXZpdGllcykge1xuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN1bHQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aXZpdHkucHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSBpbiBkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICAgICAgYWN0aXZpdHkuZW5hYmxlZCA9IGRhdGEuZW5hYmxlZEFjdGl2aXRpZXNba2V5XSA/PyB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgb3ZlcnJpZGVzXG4gICAgaWYgKGRhdGEuYWN0aXZpdHlPdmVycmlkZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3ZlcnJpZGUgb2YgZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHJlc3VsdC5maW5kKChhKSA9PiBhLmlkID09PSBvdmVycmlkZS5pZCk7XG4gICAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICAgIGlmIChvdmVycmlkZS53ZWVrbHlUYXJnZXQgIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkud2Vla2x5VGFyZ2V0ID0gb3ZlcnJpZGUud2Vla2x5VGFyZ2V0O1xuICAgICAgICAgIGlmIChvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uICE9PSB1bmRlZmluZWQpIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb24gPSBvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGN1c3RvbSBoYWJpdHNcbiAgICBpZiAoZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgIGZvciAoY29uc3QgaGFiaXQgb2YgZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlc1xuICAgICAgICBpZiAocmVzdWx0LnNvbWUoKGEpID0+IGEuaWQgPT09IGhhYml0LmlkKSkgY29udGludWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGlkOiBoYWJpdC5pZCxcbiAgICAgICAgICBuYW1lOiBoYWJpdC5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBoYWJpdC5lbW9qaSA/PyBcIlxcdTJCNTBcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIiwgLy8gRGVmYXVsdCBjdXN0b20gaGFiaXRzIHRvIHNwaXJpdFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZm9sZGVyOiBoYWJpdC5mb2xkZXIsXG4gICAgICAgICAgcHJvcGVydHk6IGhhYml0LnByb3BlcnR5LFxuICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IGhhYml0LmRhbWFnZVBlckNvbXBsZXRpb24gPz8gMSxcbiAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IGhhYml0LndlZWtseVRhcmdldCA/PyAzLFxuICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgIGhhc1dvcmtzcGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJpb3JpdHk6IDUsXG4gICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICBwcmVmZXJyZWRUaW1lOiBcImFueXRpbWVcIixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogT25lLXRpbWUgbWlncmF0aW9uOiByZW5hbWUgbGVnYWN5IHNlc3Npb24gZmllbGRzIFx1MjE5MiB3b3Jrc3BhY2UsXG4gICAqIG1lcmdlIHdvcmtzcGFjZUZvbGRlciBpbnRvIGZvbGRlciwgYW5kIG1vdmUgdGVtcGxhdGVSZWdpc3RyeSBlbnRyaWVzXG4gICAqIGludG8gcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuc2V0dGluZ3MgYXMgYW55O1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBNaWdyYXRlIHRvcC1sZXZlbCBzZXR0aW5ncyBmaWVsZHNcbiAgICBpZiAocmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzICYmICFyYXcud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcykge1xuICAgICAgcmF3LndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMgPSByYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXM7XG4gICAgICBkZWxldGUgcmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyYXcuYWN0aXZlU2Vzc2lvbiAhPT0gdW5kZWZpbmVkICYmIHJhdy5hY3RpdmVXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmF3LmFjdGl2ZVdvcmtzcGFjZSA9IHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgZGVsZXRlIHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSBwZXItYWN0aXZpdHkgZmllbGRzXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgIGNvbnN0IGEgPSBhY3Rpdml0eSBhcyBhbnk7XG4gICAgICBpZiAoYS5oYXNTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgYS5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhLmhhc1dvcmtzcGFjZSA9IGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgZGVsZXRlIGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBNZXJnZSBzZXNzaW9uRm9sZGVyIC8gd29ya3NwYWNlRm9sZGVyIGludG8gZm9sZGVyXG4gICAgICBpZiAoYS5zZXNzaW9uRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGRlbGV0ZSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGEud29ya3NwYWNlRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLndvcmtzcGFjZUZvbGRlcjtcbiAgICAgICAgZGVsZXRlIGEud29ya3NwYWNlRm9sZGVyO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNaWdyYXRlIGFjdGl2ZVdvcmtzcGFjZSBpbm5lciBmaWVsZHNcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UpIHtcbiAgICAgIGNvbnN0IGF3ID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgYXMgYW55O1xuICAgICAgaWYgKGF3Lmhhc1Nlc3Npb24gIT09IHVuZGVmaW5lZCAmJiBhdy5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhdy5oYXNXb3Jrc3BhY2UgPSBhdy5oYXNTZXNzaW9uO1xuICAgICAgICBkZWxldGUgYXcuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB1cCBsZWdhY3kgZm9sZGVyIGZpZWxkcyBmcm9tIGFjdGl2ZVdvcmtzcGFjZVxuICAgICAgZGVsZXRlIGF3LnNlc3Npb25Gb2xkZXI7XG4gICAgICBkZWxldGUgYXcud29ya3NwYWNlRm9sZGVyO1xuICAgIH1cblxuICAgIC8vIE1pZ3JhdGUgdGVtcGxhdGVSZWdpc3RyeSBcdTIxOTIgcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlXG4gICAgaWYgKHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5ICYmIEFycmF5LmlzQXJyYXkocmF3LnRlbXBsYXRlUmVnaXN0cnkpICYmIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmF3LnRlbXBsYXRlUmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKCFlbnRyeS5lbmFibGVkIHx8ICFlbnRyeS50ZW1wbGF0ZVBhdGgpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhOiBhbnkpID0+IGEuaWQgPT09IGVudHJ5LmFjdGl2aXR5VHlwZSk7XG4gICAgICAgIGlmIChhY3Rpdml0eSAmJiAhYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgICAgICBhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSA9IGVudHJ5LnRlbXBsYXRlUGF0aDtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5O1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFV0aWxpdHlcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb25zdGFudHMgJiBEZWZhdWx0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgQm9zc0RlZmluaXRpb24sXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBPbGVuU2V0dGluZ3MsXG4gIERldkNvbmZpZyxcbiAgRWx5c2lhblRoZW1lLFxuICBXb3Jrc3BhY2VDb21wbGV0aW9uU3RhdGUsXG4gIENhbGVuZGFyU2V0dGluZ3MsXG4gIFBlcnNvbmFsU3RhdHMsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8vIC0tLSBWaWV3IFR5cGUgLS0tXG5cbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfT0xFTiA9IFwib2xlbi1kYXNoYm9hcmQtdmlld1wiO1xuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9XT1JLU1BBQ0UgPSBcIm9sZW4td29ya3NwYWNlLXZpZXdcIjtcblxuLy8gLS0tIEJvc3MgRGVmaW5pdGlvbnMgKDEzIHRpZXJzKSAtLS1cblxuZXhwb3J0IGNvbnN0IEJPU1NFUzogQm9zc0RlZmluaXRpb25bXSA9IFtcbiAgeyB0aWVyOiAxLCBuYW1lOiBcIlNoYWRvdyBvZiBBcGF0aHlcIiwgcmFuazogXCJEb29tc2Nyb2xsZXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHdlaWdodCBvZiBpbmVydGlhIHRoYXQga2VlcHMgeW91IHNjcm9sbGluZyBpbnN0ZWFkIG9mIHN0YXJ0aW5nXCIsIGxvcmU6IFwiQm9ybiBmcm9tIGZvcmdvdHRlbiBwcm9taXNlcyBhbmQgdW5vcGVuZWQgZ3ltIGJhZ3MsIHRoZSBTaGFkb3cgZmVlZHMgb24gcG90ZW50aWFsIHVucmVhbGl6ZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuMVwiIH0sXG4gIHsgdGllcjogMiwgbmFtZTogXCJTaXJlbidzIENhbGxcIiwgcmFuazogXCJBcm1jaGFpciBHZW5lcmFsXCIsIGRlc2NyaXB0aW9uOiBcIkRpc3RyYWN0aW9uJ3Mgc3dlZXQgc29uZyB0aGF0IHB1bGxzIGZvY3VzIGZyb20gY29tbWl0dGVkIHdvcmtcIiwgbG9yZTogXCJTaGUgc2luZ3Mgb2YgZWFzaWVyIHBhdGhzLCBvZiBqdXN0IG9uZSBtb3JlIHZpZGVvLCBvZiBzdGFydGluZyB0b21vcnJvdyBpbnN0ZWFkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjJcIiB9LFxuICB7IHRpZXI6IDMsIG5hbWU6IFwiSHlkcmEgb2YgSGFiaXRzXCIsIHJhbms6IFwiQXBwcmVudGljZVwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29tcGxleGl0eSBvZiBtYW5hZ2luZyBtdWx0aXBsZSByb3V0aW5lcyBzaW11bHRhbmVvdXNseVwiLCBsb3JlOiBcIkN1dCBvbmUgaGVhZCBhbmQgdHdvIGdyb3cgYmFjay4gRWFjaCBoYWJpdCBkZW1hbmRzIGl0cyBvd24gYXR0ZW50aW9uLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjNcIiB9LFxuICB7IHRpZXI6IDQsIG5hbWU6IFwiTWlub3RhdXIncyBNYXplXCIsIHJhbms6IFwiQ2l0aXplblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29uZnVzaW9uIGFuZCByb3V0aW5lIHRoYXQgdHJhcHMgZXZlbiBkZWRpY2F0ZWQgcHJhY3RpdGlvbmVyc1wiLCBsb3JlOiBcIkxvc3QgaW4gY29ycmlkb3JzIG9mIGhhYml0LCB0aGUgcGF0aCBmb3J3YXJkIGlzIG5ldmVyIGNsZWFyLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjdcIiB9LFxuICB7IHRpZXI6IDUsIG5hbWU6IFwiTWVkdXNhJ3MgR2F6ZVwiLCByYW5rOiBcIlNjaG9sYXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHBhcmFseXNpcyB0aGF0IGNvbWVzIGZyb20gb3ZlcnRoaW5raW5nIG9yIGZlYXIgb2YgZmFpbHVyZVwiLCBsb3JlOiBcIk9uZSBnbGFuY2UgYW5kIHlvdSBhcmUgZnJvemVuLCB1bmFibGUgdG8gYWN0LCB1bmFibGUgdG8gbW92ZS5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS45XCIgfSxcbiAgeyB0aWVyOiA2LCBuYW1lOiBcIk5lbWVhbiBMaW9uXCIsIHJhbms6IFwiU2FtdXJhaVwiLCBkZXNjcmlwdGlvbjogXCJTZWVtaW5nbHkgaW52dWxuZXJhYmxlIG9ic3RhY2xlcyB0aGF0IHJlcXVpcmUgcGVyc2lzdGVudCBlZmZvcnRcIiwgbG9yZTogXCJJdHMgaGlkZSBjYW5ub3QgYmUgcGllcmNlZCBieSBvcmRpbmFyeSBtZWFucy4gT25seSBkaXNjaXBsaW5lIGN1dHMgdGhyb3VnaC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4xXCIgfSxcbiAgeyB0aWVyOiA3LCBuYW1lOiBcIkNoaW1lcmFcIiwgcmFuazogXCJUZW1wbGFyXCIsIGRlc2NyaXB0aW9uOiBcIk11bHRpLWhlYWRlZCBiZWFzdCByZXF1aXJpbmcgYmFsYW5jZWQgYXR0ZW50aW9uIGFjcm9zcyBhbGwgZG9tYWluc1wiLCBsb3JlOiBcIkxpb24sIGdvYXQsIGFuZCBzZXJwZW50IFx1MjAxNCBlYWNoIGhlYWQgZGVtYW5kcyBtYXN0ZXJ5IG9mIGEgZGlmZmVyZW50IGFydC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4zXCIgfSxcbiAgeyB0aWVyOiA4LCBuYW1lOiBcIkNlcmJlcnVzXCIsIHJhbms6IFwiU3RvaWNcIiwgZGVzY3JpcHRpb246IFwiR3VhcmRpYW4gb2YgdHJhbnNmb3JtYXRpb24gdGVzdGluZyBpZiBoYWJpdHMgaGF2ZSBiZWNvbWUgaWRlbnRpdHlcIiwgbG9yZTogXCJUaHJlZSBoZWFkcywgdGhyZWUgdGVzdHMuIFBhc3QgdGhlIGdhdGUgbGllcyB0cmFuc2Zvcm1hdGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi41XCIgfSxcbiAgeyB0aWVyOiA5LCBuYW1lOiBcIlNjeWxsYSAmIENoYXJ5YmRpc1wiLCByYW5rOiBcIk9seW1waWFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBpbXBvc3NpYmxlIGNob2ljZSBiZXR3ZWVuIGNvbXBldGluZyBwcmlvcml0aWVzXCIsIGxvcmU6IFwiQmV0d2VlbiB0aGUgcm9jayBhbmQgdGhlIHdoaXJscG9vbCwgYm90aCBtdXN0IHNvbWVob3cgYmUgaG9ub3JlZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi43XCIgfSxcbiAgeyB0aWVyOiAxMCwgbmFtZTogXCJUaGUgRnVyaWVzXCIsIHJhbms6IFwiU2FnZVwiLCBkZXNjcmlwdGlvbjogXCJJbnRlcm5hbCB2b2ljZXMgb2YgZ3VpbHQgYW5kIHNoYW1lIGF0dGFja2luZyBldmVuIHRoZSBzdWNjZXNzZnVsXCIsIGxvcmU6IFwiVGhleSB3aGlzcGVyIHlvdXIgZmFpbHVyZXMsIHJlbWluZCB5b3Ugb2YgZXZlcnkgc2tpcCwgZXZlcnkgd2Vha25lc3MuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuOVwiIH0sXG4gIHsgdGllcjogMTEsIG5hbWU6IFwiVHlwaG9uXCIsIHJhbms6IFwiVGl0YW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGZvcmNlIG9mIGNoYW9zIHRocmVhdGVuaW5nIHRvIHVuZG8gYWxsIHByb2dyZXNzXCIsIGxvcmU6IFwiRmF0aGVyIG9mIGFsbCBtb25zdGVycywgaGUgc2Vla3MgdG8gcmV0dXJuIHlvdSB0byB0aGUgYmVnaW5uaW5nLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjFcIiB9LFxuICB7IHRpZXI6IDEyLCBuYW1lOiBcIktyb25vc1wiLCByYW5rOiBcIkFyY2hvblwiLCBkZXNjcmlwdGlvbjogXCJUaW1lIGl0c2VsZiBhcyBhbiBlbmVteSwgdGVzdGluZyBzdXN0YWluZWQgaW50ZW5zaXR5XCIsIGxvcmU6IFwiVGhlIFRpdGFuIHdobyBkZXZvdXJzIGhpcyBjaGlsZHJlbi4gQ2FuIHlvdSBtYWludGFpbiBhcyB3ZWVrcyBiZWNvbWUgbW9udGhzP1wiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjNcIiB9LFxuICB7IHRpZXI6IDEzLCBuYW1lOiBcIkNoYW9zIFByaW1vcmRpYWxcIiwgcmFuazogXCJNYXN0ZXIgb2YgQWxsXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB1bHRpbWF0ZSB0ZXN0IG9mIHVuc2hha2VhYmxlIGRpc2NpcGxpbmVcIiwgbG9yZTogXCJCZWZvcmUgY3JlYXRpb24sIGJlZm9yZSBvcmRlciwgb25seSBDaGFvcy4gVG8gbWFzdGVyIGl0IGlzIHRvIG1hc3RlciB5b3Vyc2VsZi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy42XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSQU5LX1RJRVJfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiM2QjcyODBcIiwgMjogXCIjRUY0NDQ0XCIsIDM6IFwiI0Y1OUUwQlwiLCA0OiBcIiMxMEI5ODFcIixcbiAgNTogXCIjM0I4MkY2XCIsIDY6IFwiIzhCNUNGNlwiLCA3OiBcIiNFQzQ4OTlcIiwgODogXCIjRjk3MzE2XCIsXG4gIDk6IFwiIzA2QjZENFwiLCAxMDogXCIjQTg1NUY3XCIsIDExOiBcIiNEQzI2MjZcIiwgMTI6IFwiIzdDM0FFRFwiLFxuICAxMzogXCIjYzlhMjI3XCIsXG59O1xuXG4vLyAtLS0gQ2hhcHRlciBQcm9ncmVzc2lvbiAtLS1cblxuZXhwb3J0IGNvbnN0IENIQVBURVJfTkFNRVM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gIDE6IFwiSW5pdGlhdGVcIixcbiAgMjogXCJFeHBsb3JlclwiLFxuICAzOiBcIkpvdXJuZXltYW5cIixcbiAgNDogXCJBZGVwdFwiLFxuICA1OiBcIlBoaWxvc29waGVyXCIsXG4gIDY6IFwiTWFzdGVyXCIsXG4gIDc6IFwiU2FnZVwiLFxuICA4OiBcIk9yYWNsZVwiLFxuICA5OiBcIlRpdGFuXCIsXG4gIDEwOiBcIk9seW1waWFuXCIsXG59O1xuXG4vLyAtLS0gRHluYW1pYyBUaXRsZSBUYWJsZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfRE9NSU5BTlRfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYm9keTogICB7IGxpZ2h0OiBcIkF0aGxldGVcIiwgICBtaWQ6IFwiV2FycmlvclwiLCAgaGVhdnk6IFwiVGl0YW5cIiB9LFxuICBtaW5kOiAgIHsgbGlnaHQ6IFwiU3R1ZGVudFwiLCAgIG1pZDogXCJTY2hvbGFyXCIsICBoZWF2eTogXCJQb2x5bWF0aFwiIH0sXG4gIHNwaXJpdDogeyBsaWdodDogXCJTZWVrZXJcIiwgICAgbWlkOiBcIlNhZ2VcIiwgICAgIGhlYXZ5OiBcIk9yYWNsZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVFdPX0NBVEVHT1JZX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiYm9keSttaW5kXCI6ICAgIHsgbGlnaHQ6IFwiRGlzY2lwbGluZWQgVGhpbmtlclwiLCBtaWQ6IFwiUGhpbG9zb3BoZXItS2luZ1wiLCBoZWF2eTogXCJSZW5haXNzYW5jZSBUaXRhblwiIH0sXG4gIFwiYm9keStzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQXNjZXRpY1wiLCAgICAgICAgICAgICBtaWQ6IFwiVGVtcGxhclwiLCAgICAgICAgICBoZWF2eTogXCJPbHltcGlhbiBNb25rXCIgfSxcbiAgXCJtaW5kK3NwaXJpdFwiOiAgeyBsaWdodDogXCJDb250ZW1wbGF0aXZlXCIsICAgICAgIG1pZDogXCJNeXN0aWMgU2Nob2xhclwiLCAgIGhlYXZ5OiBcIkVubGlnaHRlbmVkIE9uZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQkFMQU5DRURfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCIsXG4gIG1pZDogXCJSZW5haXNzYW5jZSBTb3VsXCIsXG4gIGhlYXZ5OiBcIkV1ZGFpbW9uXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBBY3Rpdml0aWVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVklUSUVTOiBBY3Rpdml0eUNvbmZpZ1tdID0gW1xuICB7XG4gICAgaWQ6IFwid29ya291dFwiLCBuYW1lOiBcIldvcmtvdXRcIiwgZW1vamk6IFwiXFx1ezFGNEFBfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiLCBwcm9wZXJ0eTogXCJXb3Jrb3V0XCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA3LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHdvcmtzcGFjZVRlbXBsYXRlOiBcIndvcmtvdXRcIixcbiAgICBwcmlvcml0eTogOCwgbmVnbGVjdFRocmVzaG9sZDogMixcbiAgICBwcmVmZXJyZWRUaW1lOiBcIm1vcm5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2FyZGlvXCIsIG5hbWU6IFwiQ2FyZGlvXCIsIGVtb2ppOiBcIlxcdXsxRjNDM31cIiwgY2F0ZWdvcnk6IFwiYm9keVwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAyIENhcmRpb1wiLCBwcm9wZXJ0eTogXCJDYXJkaW9cIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDQsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICBhbHRlcm5hdGVzV2l0aDogXCJ3b3Jrb3V0XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWFkaW5nXCIsIG5hbWU6IFwiUmVhZGluZ1wiLCBlbW9qaTogXCJcXHV7MUY0RDZ9XCIsIGNhdGVnb3J5OiBcIm1pbmRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMyBSZWFkaW5nXCIsIHByb3BlcnR5OiBcIlJlYWRpbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDYsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJldmVuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA0NSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRydW1taW5nXCIsIG5hbWU6IFwiRHJ1bW1pbmdcIiwgZW1vamk6IFwiXFx1ezFGOTQxfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNCBEcnVtbWluZ1wiLCBwcm9wZXJ0eTogXCJEcnVtbWluZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNiwgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJoZWFsdGgtc3R1ZHlcIiwgbmFtZTogXCJIZWFsdGggU3R1ZHlcIiwgZW1vamk6IFwiXFx1ezFGOUVDfVwiLCBjYXRlZ29yeTogXCJtaW5kXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDUgSGVhbHRoIFN0dWR5XCIsIHByb3BlcnR5OiBcIkhlYWx0aCBTdHVkeVwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMywgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNCwgbmVnbGVjdFRocmVzaG9sZDogNCxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2NpYWxcIiwgbmFtZTogXCJTb2NpYWxcIiwgZW1vamk6IFwiXFx1ezFGOTFEfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNiBTb2NpYWxcIiwgcHJvcGVydHk6IFwiU29jaWFsXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiAyLCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA1LCBuZWdsZWN0VGhyZXNob2xkOiA1LFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcmF3aW5nXCIsIG5hbWU6IFwiRHJhd2luZ1wiLCBlbW9qaTogXCJcXHV7MUYzQTh9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA3IERyYXdpbmdcIiwgcHJvcGVydHk6IFwiRHJhd2luZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNCwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNywgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG5dO1xuXG4vLyAtLS0gRGlyZWN0aXZlIExvcmUgVGVtcGxhdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgTkVHTEVDVF9MT1JFOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB3b3Jrb3V0OiBcIllvdXIgbXVzY2xlcyBmb3JnZXQgd2hhdCB0aGV5IG9uY2Uga25ldy4gVGhlIGJvZHkgY3JhdmVzIGRpc2NpcGxpbmUgXHUyMDE0IGFuc3dlciBpdC5cIixcbiAgY2FyZGlvOiBcIlRoZSBoZWFydCBncm93cyBzbHVnZ2lzaCB3aXRob3V0IHRoZSBwb3VuZGluZyByaHl0aG0gb2YgZWZmb3J0LlwiLFxuICByZWFkaW5nOiBcIlRoZSBtaW5kIHN0YXJ2ZXMgb24gZGlzdHJhY3Rpb24uIEZlZWQgaXQgd2l0aCBwYWdlcywgbm90IHBpeGVscy5cIixcbiAgZHJ1bW1pbmc6IFwiU2lsZW5jZSBpcyBub3QgcmVzdCBcdTIwMTQgaXQgaXMgdGhlIGRlYXRoIG9mIHJoeXRobS4gUGljayB1cCB0aGUgc3RpY2tzLlwiLFxuICBcImhlYWx0aC1zdHVkeVwiOiBcIktub3dsZWRnZSBvZiB0aGUgYm9keSBpcyBwb3dlciBvdmVyIGl0LiBOZWdsZWN0IGludml0ZXMgaWdub3JhbmNlLlwiLFxuICBzb2NpYWw6IFwiRXZlbiB3YXJyaW9ycyBuZWVkIGZlbGxvd3NoaXAuIElzb2xhdGlvbiBicmVlZHMgc3RhZ25hdGlvbi5cIixcbiAgZHJhd2luZzogXCJUaGUgYmVhc3Qgd2l0aGluIHlvdSBncm93cyB3ZWFrIHdpdGhvdXQgdGhlIGRpc2NpcGxpbmUgb2YgbGluZSBhbmQgZm9ybS5cIixcbn07XG5cbi8vIC0tLSBGYWxsYmFjayBRdW90ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBGQUxMQkFDS19RVU9URVM6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBhdHRyaWJ1dGlvbjogc3RyaW5nIH0+ID0gW1xuICB7IHRleHQ6IFwiWW91IGhhdmUgcG93ZXIgb3ZlciB5b3VyIG1pbmQgXHUyMDE0IG5vdCBvdXRzaWRlIGV2ZW50cy4gUmVhbGl6ZSB0aGlzLCBhbmQgeW91IHdpbGwgZmluZCBzdHJlbmd0aC5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIldlIHN1ZmZlciBtb3JlIG9mdGVuIGluIGltYWdpbmF0aW9uIHRoYW4gaW4gcmVhbGl0eS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBpbXBlZGltZW50IHRvIGFjdGlvbiBhZHZhbmNlcyBhY3Rpb24uIFdoYXQgc3RhbmRzIGluIHRoZSB3YXkgYmVjb21lcyB0aGUgd2F5LlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiTm8gbWFuIGlzIGZyZWUgd2hvIGlzIG5vdCBtYXN0ZXIgb2YgaGltc2VsZi5cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIldhc3RlIG5vIG1vcmUgdGltZSBhcmd1aW5nIGFib3V0IHdoYXQgYSBnb29kIG1hbiBzaG91bGQgYmUuIEJlIG9uZS5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIkl0IGlzIG5vdCB0aGF0IHdlIGhhdmUgYSBzaG9ydCB0aW1lIHRvIGxpdmUsIGJ1dCB0aGF0IHdlIHdhc3RlIGEgZ29vZCBkZWFsIG9mIGl0LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiRmlyc3Qgc2F5IHRvIHlvdXJzZWxmIHdoYXQgeW91IHdvdWxkIGJlOyBhbmQgdGhlbiBkbyB3aGF0IHlvdSBoYXZlIHRvIGRvLlwiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiVGhlIGhhcHBpbmVzcyBvZiB5b3VyIGxpZmUgZGVwZW5kcyB1cG9uIHRoZSBxdWFsaXR5IG9mIHlvdXIgdGhvdWdodHMuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJIZSB3aG8gZmVhcnMgZGVhdGggd2lsbCBuZXZlciBkbyBhbnl0aGluZyB3b3J0aCBvZiBhIG1hbiB3aG8gaXMgYWxpdmUuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJEaWZmaWN1bHRpZXMgc3RyZW5ndGhlbiB0aGUgbWluZCwgYXMgbGFib3IgZG9lcyB0aGUgYm9keS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkhvdyBsb25nIGFyZSB5b3UgZ29pbmcgdG8gd2FpdCBiZWZvcmUgeW91IGRlbWFuZCB0aGUgYmVzdCBmb3IgeW91cnNlbGY/XCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJUaGUgc291bCBiZWNvbWVzIGR5ZWQgd2l0aCB0aGUgY29sb3VyIG9mIGl0cyB0aG91Z2h0cy5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbl07XG5cbi8vIC0tLSBSb21hbiBOdW1lcmFscyBIZWxwZXIgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JvbWFuKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgdmFscyA9IFsxMDAwLCA5MDAsIDUwMCwgNDAwLCAxMDAsIDkwLCA1MCwgNDAsIDEwLCA5LCA1LCA0LCAxXTtcbiAgY29uc3Qgc3ltcyA9IFtcIk1cIiwgXCJDTVwiLCBcIkRcIiwgXCJDRFwiLCBcIkNcIiwgXCJYQ1wiLCBcIkxcIiwgXCJYTFwiLCBcIlhcIiwgXCJJWFwiLCBcIlZcIiwgXCJJVlwiLCBcIklcIl07XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICB3aGlsZSAobnVtID49IHZhbHNbaV0pIHtcbiAgICAgIHJlc3VsdCArPSBzeW1zW2ldO1xuICAgICAgbnVtIC09IHZhbHNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLSBEZWZhdWx0IFdvcmtzcGFjZSBDb21wbGV0aW9uIFN0YXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUzogV29ya3NwYWNlQ29tcGxldGlvblN0YXRlW10gPSBbXG4gIHsgaWQ6IFwiZGlzY2lwbGluZVwiLCBuYW1lOiBcIkRpc2NpcGxpbmVcIiwgaWNvbjogXCJcXHUyNUM2XCIsIGNvbG9yOiBcIiM5MjhkODVcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDEuMCB9LFxuICB7IGlkOiBcImZsb3dcIiwgbmFtZTogXCJGbG93XCIsIGljb246IFwiXFx1MjI0OFwiLCBjb2xvcjogXCIjYzlhODRjXCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAxLjUgfSxcbiAgeyBpZDogXCJza2lwcGVkXCIsIG5hbWU6IFwiU2tpcHBlZFwiLCBpY29uOiBcIlxcdTI1Q0JcIiwgY29sb3I6IFwiIzhiMmQzNVwiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMCB9LFxuXTtcblxuLy8gLS0tIERlZmF1bHQgRGV2IENvbmZpZyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVWX0NPTkZJRzogRGV2Q29uZmlnID0ge1xuICBsYWJlbHM6IHtcbiAgICBncmVldGluZ19tb3JuaW5nOiBcIkdvb2QgbW9ybmluZ1wiLFxuICAgIGdyZWV0aW5nX2FmdGVybm9vbjogXCJHb29kIGFmdGVybm9vblwiLFxuICAgIGdyZWV0aW5nX2V2ZW5pbmc6IFwiR29vZCBldmVuaW5nXCIsXG4gICAgZ3JlZXRpbmdfbmlnaHQ6IFwiR29vZCBuaWdodFwiLFxuICAgIGRpcmVjdGl2ZV90aXRsZTogXCJUSEUgRElSRUNUSVZFXCIsXG4gICAgYm9zc19zdGF0dXNfdGl0bGU6IFwiQk9TUyBTVEFUVVNcIixcbiAgICB3ZWVrbHlfcmh5dGhtX3RpdGxlOiBcIldFRUtMWSBSSFlUSE1cIixcbiAgICBhbmFseXRpY3NfdGl0bGU6IFwiUFJPR1JFU1NcIixcbiAgICBhY3Rpdml0eV9ncmlkX3RpdGxlOiBcIkFDVElWSVRJRVNcIixcbiAgICB0ZW1wbGVfdGl0bGU6IFwiVEhFIFRFTVBMRVwiLFxuICAgIGV1ZGFpbW9uaWFfdGl0bGU6IFwiRXVkYWltb25pYSBJbmRleFwiLFxuICAgIGRheW1hcF90aXRsZTogXCJZT1VSIERBWVwiLFxuICAgIGJlZ2luX3dvcmtzcGFjZTogXCJFTlRFUiBXT1JLU1BBQ0VcIixcbiAgICBub3Rfbm93OiBcIk5PVCBOT1dcIixcbiAgfSxcbiAgeHBQZXJDb21wbGV0aW9uOiAxMCxcbiAgc3RyZWFrQm9udXNNdWx0aXBsaWVyOiAxLjUsXG4gIGJ1ZmZlck1pbnV0ZXM6IDE1LFxuICBtb3JuaW5nU3RhcnQ6IDYsXG4gIG1vcm5pbmdFbmQ6IDEyLFxuICBhZnRlcm5vb25FbmQ6IDE4LFxuICBldmVuaW5nRW5kOiAyMyxcbiAgdGhlbWVPdmVycmlkZXM6IHt9LFxuICBhbmltYXRpb25TdGFnZ2VyTXM6IDgwLFxuICBoZXJvSGVpZ2h0OiAzNTAsXG4gIHNlY3Rpb25PcmRlcjogW1xuICAgIFwiaGVyb1wiLCBcImhlYXRtYXBcIiwgXCJldWRhaW1vbmlhXCIsIFwiZGF5bWFwXCIsIFwiZGlyZWN0aXZlXCIsIFwiYm9zc1wiLFxuICAgIFwid2Vla2x5XCIsIFwiYW5hbHl0aWNzXCIsIFwiYWN0aXZpdGllc1wiLCBcInRlbXBsZVwiLCBcInF1b3RlXCIsXG4gIF0sXG4gIGhpZGRlblNlY3Rpb25zOiBbXSxcbiAgYWN0aXZpdHlHcmlkQ29sdW1uczogMixcbn07XG5cbi8vIC0tLSBEZWZhdWx0IFBlcnNvbmFsIFN0YXRzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTT05BTF9TVEFUUzogUGVyc29uYWxTdGF0cyA9IHtcbiAgZ2VuZGVyOiBcIm1hbGVcIixcbiAgaGVpZ2h0OiAxNzUsXG4gIGJpcnRoZGF0ZTogXCJcIixcbiAgY3VycmVudFdlaWdodDogMCxcbiAgd2VpZ2h0TG9nOiBbXSxcbiAgd2VpZ2h0TG9nRnJlcXVlbmN5OiBcImV2ZXJ5LXdlZWtcIixcbiAgd2VpZ2h0TG9nQ3VzdG9tRGF5czogNyxcbiAgbGFzdFdlaWdodExvZ0RhdGU6IG51bGwsXG59O1xuXG4vLyAtLS0gTXVzY2xlIEdyb3VwIERlZmluaXRpb25zIC0tLVxuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQUyA9IFtcbiAgXCJjaGVzdFwiLCBcImJhY2tcIiwgXCJzaG91bGRlcnNcIiwgXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIixcbiAgXCJhYnNcIiwgXCJvYmxpcXVlc1wiLCBcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiLFxuICBcInRyYXBzXCIsIFwibGF0c1wiLCBcIm5lY2tcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE11c2NsZUdyb3VwSWQgPSB0eXBlb2YgTVVTQ0xFX0dST1VQU1tudW1iZXJdO1xuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQX0xBQkVMUzogUmVjb3JkPE11c2NsZUdyb3VwSWQsIHN0cmluZz4gPSB7XG4gIGNoZXN0OiBcIkNoZXN0XCIsXG4gIGJhY2s6IFwiQmFja1wiLFxuICBzaG91bGRlcnM6IFwiU2hvdWxkZXJzXCIsXG4gIGJpY2VwczogXCJCaWNlcHNcIixcbiAgdHJpY2VwczogXCJUcmljZXBzXCIsXG4gIGZvcmVhcm1zOiBcIkZvcmVhcm1zXCIsXG4gIGFiczogXCJBYnNcIixcbiAgb2JsaXF1ZXM6IFwiT2JsaXF1ZXNcIixcbiAgcXVhZHM6IFwiUXVhZHNcIixcbiAgaGFtc3RyaW5nczogXCJIYW1zdHJpbmdzXCIsXG4gIGdsdXRlczogXCJHbHV0ZXNcIixcbiAgY2FsdmVzOiBcIkNhbHZlc1wiLFxuICB0cmFwczogXCJUcmFwc1wiLFxuICBsYXRzOiBcIkxhdHNcIixcbiAgbmVjazogXCJOZWNrXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBDYWxlbmRhciBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1M6IENhbGVuZGFyU2V0dGluZ3MgPSB7XG4gIGVuYWJsZURhaWx5Tm90ZXM6IHRydWUsXG4gIGRhaWx5Tm90ZXNGb2xkZXI6IFwiXCIsXG4gIGRhaWx5Tm90ZXNGb3JtYXQ6IFwiWVlZWS1NTS1ERFwiLFxuICBlbmFibGVUYXNrc1BsdWdpbjogZmFsc2UsXG4gIGVuYWJsZVF1aWNrVGFza3M6IHRydWUsXG4gIHF1aWNrVGFza3M6IFtdLFxufTtcblxuLy8gLS0tIERlZmF1bHQgT2xlbiBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0xFTl9TRVRUSU5HUzogT2xlblNldHRpbmdzID0ge1xuICAvLyBQcm9maWxlXG4gIHVzZXJOYW1lOiBcIldhcnJpb3JcIixcbiAgbXlXaHk6IFwiXCIsXG4gIGhlcm9CYWNrZ3JvdW5kOiBcIlwiLFxuICBob21lcGFnZTogXCJcIixcblxuICAvLyBBY3Rpdml0aWVzXG4gIGFjdGl2aXRpZXM6IERFRkFVTFRfQUNUSVZJVElFUyxcblxuICAvLyBDYXRlZ29yaWVzXG4gIGNhdGVnb3J5Q29sb3JzOiB7XG4gICAgYm9keTogXCIjYzlhODRjXCIsXG4gICAgbWluZDogXCIjNmI4Y2NlXCIsXG4gICAgc3Bpcml0OiBcIiM4YjdlYzhcIixcbiAgfSxcbiAgdGl0bGVPdmVycmlkZTogXCJcIixcblxuICAvLyBFdWRhaW1vbmlhXG4gIGNhdGVnb3J5WFA6IHtcbiAgICBib2R5OiAwLFxuICAgIG1pbmQ6IDAsXG4gICAgc3Bpcml0OiAwLFxuICB9LFxuXG4gIC8vIEJvc3NcbiAgY3VycmVudFRpZXI6IDEsXG4gIGJvc3NNYXhIUDogMzUsXG4gIGJvc3NDdXJyZW50SFA6IDM1LFxuICBpblRhcnRhcnVzOiBmYWxzZSxcbiAgdGFydGFydXNQZW5hbmNlVGFza3M6IFtdLFxuICB0YXJ0YXJ1c1N0YXJ0RGF0ZTogbnVsbCxcbiAgZmFpbGVkVGhyZXNob2xkRGF5czogMCxcbiAgY29uc2VjdXRpdmVQZXJmZWN0V2Vla3M6IDAsXG5cbiAgLy8gVGVtcGxlXG4gIHRlbXBsZVRhc2tzOiBbXG4gICAgeyBpZDogXCJiYXRoaW5nXCIsIG5hbWU6IFwiQmF0aGluZ1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDEsIGVtb2ppOiBcIlxcdXsxRjZCRn1cIiB9LFxuICAgIHsgaWQ6IFwiZmFjaWFsLWhhaXJcIiwgbmFtZTogXCJGYWNpYWwgaGFpclwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIsIGVtb2ppOiBcIlxcdXsxRkE5Mn1cIiB9LFxuICAgIHsgaWQ6IFwibmFpbHNcIiwgbmFtZTogXCJOYWlsc1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDcsIGVtb2ppOiBcIlxcdTI3MDJcXHVGRTBGXCIgfSxcbiAgICB7IGlkOiBcImhhaXJjdXRcIiwgbmFtZTogXCJIYWlyY3V0XCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogMjEsIGVtb2ppOiBcIlxcdXsxRjQ4OH1cIiB9LFxuICBdLFxuXG4gIC8vIFJld2FyZHNcbiAgcGVuZGluZ1Jld2FyZHM6IFtdLFxuICBjbGFpbWVkUmV3YXJkczogW10sXG4gIGJhbmtlZFJld2FyZHM6IFtdLFxuXG4gIC8vIFN5c3RlbVxuICBzeXN0ZW1TdGF0ZTogXCJhY3RpdmVcIixcbiAgcGF1c2VTdGFydFRpbWU6IG51bGwsXG4gIHRvdGFsUGF1c2VkVGltZTogMCxcbiAgbWlncmF0ZWQ6IGZhbHNlLFxuICBzaW11bGF0ZWREYXRlOiBudWxsLFxuXG4gIC8vIFRoZW1lXG4gIHRoZW1lT3ZlcnJpZGVzOiB7fSxcblxuICAvLyBEZXZcbiAgZGV2Q29uZmlnOiBERUZBVUxUX0RFVl9DT05GSUcsXG5cbiAgLy8gV29ya3NwYWNlXG4gIHdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXM6IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUyxcbiAgYWN0aXZlV29ya3NwYWNlOiBudWxsLFxuXG4gIC8vIENhbGVuZGFyXG4gIGNhbGVuZGFyOiBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuXG4gIC8vIFBlcnNvbmFsIFN0YXRzXG4gIHBlcnNvbmFsU3RhdHM6IERFRkFVTFRfUEVSU09OQUxfU1RBVFMsXG5cbiAgLy8gUXVvdGVcbiAgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLFxuICBsYXN0UXVvdGVJbmRleDogLTEsXG4gIHJlY2VudFF1b3RlSWRzOiBbXSxcbn07XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXNoYm9hcmQgVmlld1xuLy8gTWFpbiBzY3JvbGxhYmxlIEl0ZW1WaWV3IHJlbmRlcmluZyBhbGwgZGFzaGJvYXJkIHNlY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQ29tcGxldGlvbk1hcCwgQ29tcGxldGlvbiwgQ2FsZW5kYXJUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBDYWxlbmRhckVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0NhbGVuZGFyRW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJIZXJvQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9DYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJFdWRhaW1vbmlhQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXVkYWltb25pYUJhclwiO1xuaW1wb3J0IHsgcmVuZGVyRGlyZWN0aXZlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RpcmVjdGl2ZUNhcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvc3NTdGF0dXNDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9zc1N0YXR1c0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtseVJoeXRobSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlZWtseVJoeXRobVwiO1xuaW1wb3J0IHsgcmVuZGVyQWN0aXZpdHlHcmlkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aXZpdHlHcmlkXCI7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGVDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RlbXBsZUNoaXBzXCI7XG5pbXBvcnQgeyByZW5kZXJRdW90ZUZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlRm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXlUaW1lbGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RheVRpbWVsaW5lXCI7XG5pbXBvcnQgeyByZW5kZXJTdHJlbmd0aEhlYXRtYXAsIHNob3dNdXNjbGVQcm9ncmVzc1BvcHVwLCBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAsIHNob3dNdXNjbGVTZWxlY3RvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0cmVuZ3RoSGVhdG1hcFwiO1xuaW1wb3J0IHsgcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV2VpZ2h0UHJvZ3Jlc3NcIjtcbmltcG9ydCB7IHJlbmRlclByb2dyZXNzQW5hbHl0aWNzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NBbmFseXRpY3NcIjtcbmltcG9ydCB0eXBlIHsgTXVzY2xlR3JvdXBJZCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSBpbnRlcnZhbHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfT0xFTjtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiT2xlblwiO1xuICB9XG5cbiAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImNvbXBhc3NcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBjbGVhbnVwKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5pbnRlcnZhbHMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZFwiIH0pO1xuXG4gICAgLy8gQXBwbHkgdGhlbWUgb3ZlcnJpZGVzXG4gICAgdGhpcy5hcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3QpO1xuXG4gICAgLy8gR2F0aGVyIGNvbXBsZXRpb24gZGF0YSBmcm9tIHZhdWx0XG4gICAgY29uc3QgY29tcGxldGlvbkRhdGEgPSB0aGlzLmdhdGhlckNvbXBsZXRpb25EYXRhKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGVuZ2luZXNcbiAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBPbGVuRW5naW5lKHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgbm93KTtcblxuICAgIC8vIENhbGVuZGFyIGludGVncmF0aW9uIFx1MjAxNCBnYXRoZXIgY2FsZW5kYXIgdGFza3MgYW5kIGZlZWQgaW50byBlbmdpbmVcbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZSh0aGlzLmFwcCwgc2V0dGluZ3MsIG5vdyk7XG4gICAgY29uc3QgY2FsZW5kYXJUYXNrcyA9IGF3YWl0IHRoaXMuZ2F0aGVyQ2FsZW5kYXJUYXNrcyhjYWxlbmRhckVuZ2luZSk7XG4gICAgY29uc3QgY2FsZW5kYXJFbnRyaWVzID0gY2FsZW5kYXJFbmdpbmUudG9EYXlNYXBFbnRyaWVzKGNhbGVuZGFyVGFza3MpO1xuICAgIGVuZ2luZS5zZXRDYWxlbmRhckVudHJpZXMoY2FsZW5kYXJFbnRyaWVzKTtcblxuICAgIC8vIEJ1aWxkIHNlY3Rpb24gb3JkZXIgZnJvbSBkZXZDb25maWdcbiAgICBjb25zdCBzZWN0aW9uT3JkZXIgPSBzZXR0aW5ncy5kZXZDb25maWcuc2VjdGlvbk9yZGVyO1xuICAgIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQoc2V0dGluZ3MuZGV2Q29uZmlnLmhpZGRlblNlY3Rpb25zKTtcblxuICAgIGxldCBzdGFnZ2VySWR4ID0gMDtcblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uT3JkZXIpIHtcbiAgICAgIGlmIChoaWRkZW4uaGFzKHNlY3Rpb24pKSBjb250aW51ZTtcblxuICAgICAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJoZXJvXCI6XG4gICAgICAgICAgcmVuZGVySGVyb0NhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiaGVhdG1hcFwiOlxuICAgICAgICAgIHJlbmRlclN0cmVuZ3RoSGVhdG1hcChyb290LCBzZXR0aW5ncywgZW5naW5lLCBjb21wbGV0aW9uRGF0YSwgc3RhZ2dlcklkeCsrLCB7XG4gICAgICAgICAgICBvbk11c2NsZUNsaWNrOiAobXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgc2hvd011c2NsZVByb2dyZXNzUG9wdXAobXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Qcm9ncmVzc0NsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dPdmVyYWxsUHJvZ3Jlc3NQb3B1cChzZXR0aW5ncywgY29tcGxldGlvbkRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dNdXNjbGVTZWxlY3Rvcigoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB3b3Jrb3V0IHdpdGggc2VsZWN0ZWQgbXVzY2xlcyBcdTIwMTQgZW50ZXIgd29ya291dCB3b3Jrc3BhY2VcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKFwid29ya291dFwiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sIHRoaXMuYXBwKTtcbiAgICAgICAgICAvLyBXZWlnaHQgbm90aWZpY2F0aW9uIChzaG93cyBvbmx5IHdoZW4gZHVlKVxuICAgICAgICAgIHJlbmRlcldlaWdodE5vdGlmaWNhdGlvbihyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVMb2dXZWlnaHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXVkYWltb25pYVwiOlxuICAgICAgICAgIHJlbmRlckV1ZGFpbW9uaWFCYXIocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCk7XG4gICAgICAgICAgc3RhZ2dlcklkeCArPSAzOyAvLyBldWRhaW1vbmlhIGNhcmQgKyBzdGF0IGNhcmRzICsgY2F0ZWdvcmllcyBjYXJkXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRheW1hcFwiOlxuICAgICAgICAgIHJlbmRlckRheVRpbWVsaW5lKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKywge1xuICAgICAgICAgICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkKSA9PiB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQpLFxuICAgICAgICAgICAgb25Ta2lwOiAoYWN0aXZpdHlJZCkgPT4gdGhpcy5oYW5kbGVTa2lwQWN0aXZpdHkoYWN0aXZpdHlJZCwgZW5naW5lKSxcbiAgICAgICAgICAgIG9uQ2FsZW5kYXJEb25lOiAoZW50cnkpID0+IHRoaXMuaGFuZGxlQ2FsZW5kYXJUYXNrRG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNhbGVuZGFyUG9zdHBvbmU6IChlbnRyeSkgPT4gdGhpcy5oYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNyZWF0ZUV2ZW50OiAoKSA9PiAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRpcmVjdGl2ZVwiOlxuICAgICAgICAgIHJlbmRlckRpcmVjdGl2ZUNhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrLCAoYWN0aXZpdHlJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRlcldvcmtzcGFjZShhY3Rpdml0eUlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYm9zc1wiOlxuICAgICAgICAgIHJlbmRlckJvc3NTdGF0dXNDYXJkKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ3ZWVrbHlcIjpcbiAgICAgICAgICByZW5kZXJXZWVrbHlSaHl0aG0ocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYW5hbHl0aWNzXCI6XG4gICAgICAgICAgcmVuZGVyUHJvZ3Jlc3NBbmFseXRpY3Mocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWN0aXZpdGllc1wiOlxuICAgICAgICAgIHJlbmRlckFjdGl2aXR5R3JpZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0ZW1wbGVcIjpcbiAgICAgICAgICByZW5kZXJUZW1wbGVDaGlwcyhyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAodGFza0lkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRlbXBsZVVwZGF0ZSh0YXNrSWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgIHJlbmRlclF1b3RlRm9vdGVyKHJvb3QsIHRoaXMuYXBwLCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAocGFydGlhbCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFydGlhbCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAtLS0gRGF0YSBHYXRoZXJpbmcgLS0tXG5cbiAgZ2F0aGVyQ29tcGxldGlvbkRhdGEoKTogQ29tcGxldGlvbk1hcCB7XG4gICAgY29uc3QgZGF0YTogQ29tcGxldGlvbk1hcCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LmVuYWJsZWQpIGNvbnRpbnVlO1xuICAgICAgZGF0YVthY3Rpdml0eS5pZF0gPSB0aGlzLmdldENvbXBsZXRpb25zRnJvbUZvbGRlcihhY3Rpdml0eS5mb2xkZXIsIGFjdGl2aXR5LnByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcGxldGlvbnNGcm9tRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZywgZmllbGROYW1lOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG5cbiAgICByZXR1cm4gZmlsZXNcbiAgICAgIC5maWx0ZXIoKGZpbGUpID0+IGZpbGUucGF0aCA9PT0gZm9sZGVyUGF0aCB8fCBmaWxlLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBjYWNoZT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGlmICghZnJvbnRtYXR0ZXIgfHwgdHlwZW9mIGZyb250bWF0dGVyW2ZpZWxkTmFtZV0gIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiBmaWxlLmJhc2VuYW1lLFxuICAgICAgICAgIGNvbXBsZXRlZDogZnJvbnRtYXR0ZXJbZmllbGROYW1lXSA9PT0gdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjKTogYyBpcyBDb21wbGV0aW9uID0+IGMgIT09IG51bGwpO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIEdhdGhlcmluZyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGdhdGhlckNhbGVuZGFyVGFza3MoY2FsZW5kYXJFbmdpbmU6IENhbGVuZGFyRW5naW5lKTogUHJvbWlzZTxDYWxlbmRhclRhc2tbXT4ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXMgXHUyMDE0IHJlYWQgdG9kYXkncyBub3RlIGNvbnRlbnRcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyAmJiBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyKSB7XG4gICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBmb2xkZXIgPSBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGYuYmFzZW5hbWUgPT09IHRvZGF5O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYWlseU5vdGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZGFpbHlOb3RlKTtcbiAgICAgICAgdGFza3MucHVzaCguLi5jYWxlbmRhckVuZ2luZS5nZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQsIGRhaWx5Tm90ZS5wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uIEI6IFRhc2tzIFBsdWdpbiBcdTIwMTQgc2NhbiBmb3IgdGFza3Mgd2l0aCB0b2RheSdzIGR1ZSBkYXRlXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKSB7XG4gICAgICBjb25zdCB0YXNrc1BsdWdpbiA9ICh0aGlzLmFwcCBhcyBhbnkpLnBsdWdpbnM/LnBsdWdpbnM/LltcIm9ic2lkaWFuLXRhc2tzLXBsdWdpblwiXTtcbiAgICAgIGlmICh0YXNrc1BsdWdpbikge1xuICAgICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc3QgZmlsZXNXaXRoVGFza3M6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgaWYgKCFjYWNoZT8ubGlzdEl0ZW1zPy5zb21lKChsaSkgPT4gbGkudGFzayAhPT0gdW5kZWZpbmVkKSkgY29udGludWU7XG5cbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgICAvLyBRdWljayBjaGVjazogZG9lcyB0aGUgY29udGVudCBtZW50aW9uIHRvZGF5J3MgZGF0ZSB3aXRoIGEgZHVlIGVtb2ppP1xuICAgICAgICAgIGlmIChjb250ZW50LmluY2x1ZGVzKHRvZGF5KSkge1xuICAgICAgICAgICAgZmlsZXNXaXRoVGFza3MucHVzaCh7IHBhdGg6IGZpbGUucGF0aCwgY29udGVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrcy5wdXNoKC4uLmNhbGVuZGFyRW5naW5lLmdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXNXaXRoVGFza3MpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpb24gQzogUXVpY2sgVGFza3MgXHUyMDE0IGFscmVhZHkgaGFuZGxlZCBieSBDYWxlbmRhckVuZ2luZS5nZXRBbGxUYXNrcygpXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIHRhc2tzLnB1c2goXG4gICAgICAgIC4uLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXkpXG4gICAgICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgICAgIHRpdGxlOiBxdC50aXRsZSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgY29uc3QsXG4gICAgICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBxdC5kdXJhdGlvbixcbiAgICAgICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBIYW5kbGVycyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm47XG5cbiAgICBpZiAoYWN0aXZpdHkuaGFzV29ya3NwYWNlKSB7XG4gICAgICAvLyBPcGVuIG5hdGl2ZSBPbGVuIFdvcmtzcGFjZVZpZXdcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IHtcbiAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBza2lsbHM6IFtdLFxuICAgICAgICBoYXNXb3Jrc3BhY2U6IHRydWUsXG4gICAgICAgIHNraWxsRm9sZGVyOiBhY3Rpdml0eS5za2lsbEZvbGRlcixcbiAgICAgIH07XG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIHRoaXMucGx1Z2luLmFjdGl2YXRlV29ya3NwYWNlVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb24td29ya3NwYWNlIGFjdGl2aXRpZXM6IG1hcmsgZG9uZSBpbW1lZGlhdGVseVxuICAgICAgYXdhaXQgdGhpcy5tYXJrQWN0aXZpdHlEb25lKGFjdGl2aXR5KTtcbiAgICAgIG5ldyBOb3RpY2UoYCR7YWN0aXZpdHkuZW1vaml9ICR7YWN0aXZpdHkubmFtZX0gbWFya2VkIGRvbmUhYCk7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlU2tpcEFjdGl2aXR5KGFjdGl2aXR5SWQ6IHN0cmluZywgZW5naW5lOiBPbGVuRW5naW5lKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTWFyayBhcyBza2lwcGVkIGluIHRoZSBkYXkgbWFwIChlbmdpbmUgc3RhdGUpXG4gICAgY29uc3QgZGF5TWFwID0gZW5naW5lLmdldERheU1hcCgpO1xuICAgIGNvbnN0IGVudHJ5ID0gZGF5TWFwLmZpbmQoKGUpID0+IGUuYWN0aXZpdHlJZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS5zdGF0dXMgPSBcInNraXBwZWRcIjtcbiAgICB9XG4gICAgbmV3IE5vdGljZShcIlNraXBwZWRcIik7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2FsZW5kYXJUYXNrRG9uZShlbnRyeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuRGF5TWFwRW50cnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWVudHJ5LmlzQ2FsZW5kYXJUYXNrIHx8ICFlbnRyeS5jYWxlbmRhclNvdXJjZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKVxuICAgICk7XG5cbiAgICBzd2l0Y2ggKGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOlxuICAgICAgICBpZiAoZW50cnkuZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS50b2dnbGVEYWlseU5vdGVUYXNrKGVudHJ5LmZpbGVQYXRoLCBlbnRyeS5saW5lTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOlxuICAgICAgICBpZiAoZW50cnkuZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS50b2dnbGVUYXNrc1BsdWdpblRhc2soZW50cnkuZmlsZVBhdGgsIGVudHJ5LmxpbmVOdW1iZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiB7XG4gICAgICAgIGNvbnN0IHF0SWQgPSBlbnRyeS5jYWxlbmRhclRhc2tJZD8ucmVwbGFjZShcInF0LVwiLCBcIlwiKTtcbiAgICAgICAgY29uc3QgcXQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbmQoKHEpID0+IHEuaWQgPT09IHF0SWQpO1xuICAgICAgICBpZiAocXQpIHtcbiAgICAgICAgICBxdC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXcgTm90aWNlKGBcXHUyNzEzICR7ZW50cnkuYWN0aXZpdHlOYW1lfWApO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUNhbGVuZGFyVGFza1Bvc3Rwb25lKGVudHJ5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5EYXlNYXBFbnRyeSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgfHwgIWVudHJ5LmNhbGVuZGFyU291cmNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZShcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpXG4gICAgKTtcblxuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHRhc2s6IGltcG9ydChcIi4uL3R5cGVzXCIpLkNhbGVuZGFyVGFzayA9IHtcbiAgICAgIGlkOiBlbnRyeS5jYWxlbmRhclRhc2tJZCA/PyBlbnRyeS5hY3Rpdml0eUlkLFxuICAgICAgdGl0bGU6IGVudHJ5LmFjdGl2aXR5TmFtZSxcbiAgICAgIHNvdXJjZTogZW50cnkuY2FsZW5kYXJTb3VyY2UsXG4gICAgICBkYXRlOiBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIGZpbGVQYXRoOiBlbnRyeS5maWxlUGF0aCxcbiAgICAgIGxpbmVOdW1iZXI6IGVudHJ5LmxpbmVOdW1iZXIsXG4gICAgfTtcblxuICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnBvc3Rwb25lVGFzayh0YXNrKTtcbiAgICBuZXcgTm90aWNlKGBcXHUyM0U5ICR7ZW50cnkuYWN0aXZpdHlOYW1lfSBwb3N0cG9uZWQgdG8gdG9tb3Jyb3dgKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYXJrQWN0aXZpdHlEb25lKGFjdGl2aXR5OiB7IGlkOiBzdHJpbmc7IGZvbGRlcjogc3RyaW5nOyBwcm9wZXJ0eTogc3RyaW5nOyBjYXRlZ29yeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuQ2F0ZWdvcnk7IGRhbWFnZVBlckNvbXBsZXRpb246IG51bWJlciB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgY29uc3QgZm9sZGVyID0gYWN0aXZpdHkuZm9sZGVyO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBMb29rIGZvciB0b2RheSdzIGZpbGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCB0b2RheUZpbGUgPSBmaWxlcy5maW5kKFxuICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICk7XG5cbiAgICBpZiAodG9kYXlGaWxlKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIodG9kYXlGaWxlLCAoZm0pID0+IHtcbiAgICAgICAgZm1bYWN0aXZpdHkucHJvcGVydHldID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHtkYXRlU3RyfS5tZGA7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZVBhdGgsIGAtLS1cXG4ke2FjdGl2aXR5LnByb3BlcnR5fTogdHJ1ZVxcbi0tLVxcbmApO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIE1heSBhbHJlYWR5IGV4aXN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gWFAgKyBib3NzIGRhbWFnZVxuICAgIGNvbnN0IHhwID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbjtcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeVhQW2FjdGl2aXR5LmNhdGVnb3J5XSArPSB4cDtcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAtIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb25cbiAgICApO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVMb2dXZWlnaHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+TG9nIFdlaWdodDwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiIHN0ZXA9XCIwLjFcIiBtaW49XCIyMFwiIG1heD1cIjMwMFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stYWN0aW9uc1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hZGRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYWRkQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYWRkXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuY3VycmVudFdlaWdodCB8fCBcIlwiKTtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdyA9IHBhcnNlRmxvYXQoaW5wdXQudmFsdWUpO1xuICAgICAgaWYgKGlzTmFOKHcpIHx8IHcgPD0gMCkge1xuICAgICAgICBuZXcgTm90aWNlKFwiRW50ZXIgYSB2YWxpZCB3ZWlnaHRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5maW5kKChlKSA9PiBlLmRhdGUgPT09IHRvZGF5KTtcbiAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICBleGlzdGluZy53ZWlnaHQgPSB3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2cucHVzaCh7IGRhdGU6IHRvZGF5LCB3ZWlnaHQ6IHcgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmN1cnJlbnRXZWlnaHQgPSB3O1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5sYXN0V2VpZ2h0TG9nRGF0ZSA9IHRvZGF5O1xuICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICBuZXcgTm90aWNlKGBXZWlnaHQgbG9nZ2VkOiAke3d9IGtnYCk7XG4gICAgICBjbG9zZSgpO1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXQuZm9jdXMoKSwgNTApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVUZW1wbGVVcGRhdGUodGFza0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MuZmluZCgodCkgPT4gdC5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAoIXRhc2spIHJldHVybjtcblxuICAgIHRhc2subGFzdENvbXBsZXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICBuZXcgTm90aWNlKGAke3Rhc2suZW1vaml9ICR7dGFzay5uYW1lfSBjb21wbGV0ZWQhYCk7XG5cbiAgICAvLyBSZS1yZW5kZXJcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLy8gLS0tIFRoZW1lIC0tLVxuXG4gIHByaXZhdGUgYXBwbHlUaGVtZU92ZXJyaWRlcyhyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJyaWRlcyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzO1xuICAgIGlmICghb3ZlcnJpZGVzKSByZXR1cm47XG5cbiAgICBpZiAob3ZlcnJpZGVzLmJnUHJpbWFyeSkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmctcHJpbWFyeVwiLCBvdmVycmlkZXMuYmdQcmltYXJ5KTtcbiAgICBpZiAob3ZlcnJpZGVzLmNhcmRCZykgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY2FyZC1iZ1wiLCBvdmVycmlkZXMuY2FyZEJnKTtcbiAgICBpZiAob3ZlcnJpZGVzLnRleHRQcmltYXJ5KSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LXByaW1hcnlcIiwgb3ZlcnJpZGVzLnRleHRQcmltYXJ5KTtcbiAgICBpZiAob3ZlcnJpZGVzLnRleHRNdXRlZCkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1tdXRlZFwiLCBvdmVycmlkZXMudGV4dE11dGVkKTtcbiAgICBpZiAob3ZlcnJpZGVzLmFjY2VudEdvbGQpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWFjY2VudC1nb2xkXCIsIG92ZXJyaWRlcy5hY2NlbnRHb2xkKTtcbiAgICBpZiAob3ZlcnJpZGVzLmRhbmdlcikgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZGFuZ2VyXCIsIG92ZXJyaWRlcy5kYW5nZXIpO1xuICAgIGlmIChvdmVycmlkZXMuc3VjY2Vzcykgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3VjY2Vzc1wiLCBvdmVycmlkZXMuc3VjY2Vzcyk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEJvc3MgRW5naW5lXG4vLyBSZWFkcyBib3NzIHN0YXRlIGFuZCBwcm92aWRlcyBib3NzLXJlbGF0ZWQgY2FsY3VsYXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIEJvc3NEZWZpbml0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBCT1NTRVMsIFJBTktfVElFUl9DT0xPUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9zc1N0YXR1cyB7XG4gIGJvc3M6IEJvc3NEZWZpbml0aW9uO1xuICBjdXJyZW50SFA6IG51bWJlcjtcbiAgbWF4SFA6IG51bWJlcjtcbiAgcGVyY2VudDogbnVtYmVyO1xuICB0aWVyOiBudW1iZXI7XG4gIHJhbms6IHN0cmluZztcbiAgdGllckNvbG9yOiBzdHJpbmc7XG4gIGluVGFydGFydXM6IGJvb2xlYW47XG4gIGlzRGFuZ2VyWm9uZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEJvc3NFbmdpbmUge1xuICBwcml2YXRlIHNldHRpbmdzOiBPbGVuU2V0dGluZ3M7XG5cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE9sZW5TZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIGdldEJvc3NGb3JUaWVyKHRpZXI6IG51bWJlcik6IEJvc3NEZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIEJPU1NFUy5maW5kKChiKSA9PiBiLnRpZXIgPT09IHRpZXIpID8/IG51bGw7XG4gIH1cblxuICBnZXRDdXJyZW50Qm9zcygpOiBCb3NzRGVmaW5pdGlvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmdldEJvc3NGb3JUaWVyKHRoaXMuc2V0dGluZ3MuY3VycmVudFRpZXIpO1xuICB9XG5cbiAgZ2V0Qm9zc1N0YXR1cygpOiBCb3NzU3RhdHVzIHtcbiAgICBjb25zdCB0aWVyID0gdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllcjtcbiAgICBjb25zdCBib3NzID0gdGhpcy5nZXRDdXJyZW50Qm9zcygpID8/IEJPU1NFU1swXTtcbiAgICBjb25zdCBjdXJyZW50SFAgPSB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFA7XG4gICAgY29uc3QgbWF4SFAgPSB0aGlzLnNldHRpbmdzLmJvc3NNYXhIUDtcbiAgICBjb25zdCBwZXJjZW50ID0gbWF4SFAgPiAwID8gTWF0aC5yb3VuZCgoY3VycmVudEhQIC8gbWF4SFApICogMTAwKSA6IDA7XG4gICAgY29uc3QgdGllckNvbG9yID0gUkFOS19USUVSX0NPTE9SU1t0aWVyXSA/PyBcIiM2QjcyODBcIjtcblxuICAgIHJldHVybiB7XG4gICAgICBib3NzLFxuICAgICAgY3VycmVudEhQLFxuICAgICAgbWF4SFAsXG4gICAgICBwZXJjZW50LFxuICAgICAgdGllcixcbiAgICAgIHJhbms6IGJvc3MucmFuayxcbiAgICAgIHRpZXJDb2xvcixcbiAgICAgIGluVGFydGFydXM6IHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cyxcbiAgICAgIGlzRGFuZ2VyWm9uZTogdGhpcy5pc0RhbmdlclpvbmUoKSxcbiAgICB9O1xuICB9XG5cbiAgaXNEYW5nZXJab25lKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgYm9zc0N1cnJlbnRIUCwgYm9zc01heEhQIH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGlmIChib3NzTWF4SFAgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoYm9zc0N1cnJlbnRIUCAvIGJvc3NNYXhIUCkgPCAwLjE1O1xuICB9XG5cbiAgaXNJblRhcnRhcnVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmluVGFydGFydXM7XG4gIH1cblxuICBnZXRIUENvbG9yKHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHBlcmNlbnQgPiA2MCkgcmV0dXJuIFwiIzIyYzU1ZVwiO1xuICAgIGlmIChwZXJjZW50ID4gMzApIHJldHVybiBcIiNlYWIzMDhcIjtcbiAgICBpZiAocGVyY2VudCA+IDE1KSByZXR1cm4gXCIjZjk3MzE2XCI7XG4gICAgcmV0dXJuIFwiI2VmNDQ0NFwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb3JlIEVuZ2luZVxuLy8gUHJpb3JpdHkgbG9naWMsIHN1Z2dlc3Rpb24gYWxnb3JpdGhtLCBkYXkgbWFwLCBhbmFseXRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7XG4gIE9sZW5TZXR0aW5ncyxcbiAgQWN0aXZpdHlDb25maWcsXG4gIENvbXBsZXRpb24sXG4gIENvbXBsZXRpb25NYXAsXG4gIERpcmVjdGl2ZVN1Z2dlc3Rpb24sXG4gIERheU1hcEVudHJ5LFxuICBDYXRlZ29yeUxldmVsLFxuICBDYXRlZ29yeSxcbiAgUHJpb3JpdHlSZWFzb24sXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgTkVHTEVDVF9MT1JFLFxuICBDSEFQVEVSX05BTUVTLFxuICBTSU5HTEVfRE9NSU5BTlRfVElUTEVTLFxuICBUV09fQ0FURUdPUllfVElUTEVTLFxuICBCQUxBTkNFRF9USVRMRVMsXG4gIHRvUm9tYW4sXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi9Cb3NzRW5naW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBPbGVuRW5naW5lIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuICBwcml2YXRlIGNvbXBsZXRpb25zOiBDb21wbGV0aW9uTWFwO1xuICBwcml2YXRlIG5vdzogRGF0ZTtcbiAgcHJpdmF0ZSB0b2RheTogc3RyaW5nO1xuICBwcml2YXRlIGJvc3NFbmdpbmU6IEJvc3NFbmdpbmU7XG5cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE9sZW5TZXR0aW5ncywgY29tcGxldGlvbnM6IENvbXBsZXRpb25NYXAsIG5vdzogRGF0ZSkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmNvbXBsZXRpb25zID0gY29tcGxldGlvbnM7XG4gICAgdGhpcy5ub3cgPSBub3c7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0aGlzLnRvZGF5ID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICB0aGlzLmJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG4gIH1cblxuICAvLyAtLS0gRWZmZWN0aXZlIERhdGUgKHN1cHBvcnRzIHNpbXVsYXRlZCBkYXRlICsgcGF1c2UpIC0tLVxuXG4gIHByaXZhdGUgZ2V0RWZmZWN0aXZlTm93KCk6IERhdGUge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIHtcbiAgICAgIGNvbnN0IHNpbSA9IG5ldyBEYXRlKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSk7XG4gICAgICBzaW0uc2V0SG91cnMoMTIsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIHNpbTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCIgJiYgdGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zZXR0aW5ncy50b3RhbFBhdXNlZFRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZmZlY3RpdmVUb2RheSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGQgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gIH1cblxuICAvLyAtLS0gRGF0YSBBY2Nlc3MgLS0tXG5cbiAgZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IGEuZW5hYmxlZCk7XG4gIH1cblxuICBnZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQ6IHN0cmluZyk6IENvbXBsZXRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGlvbnNbYWN0aXZpdHlJZF0gPz8gW107XG4gIH1cblxuICBnZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgdG9kYXlNcyA9IG5ldyBEYXRlKGVmZmVjdGl2ZU5vdykuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWREYXRlcyA9IGNvbXBzXG4gICAgICAuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZClcbiAgICAgIC5tYXAoKGMpID0+IG5ldyBEYXRlKGMuZGF0ZSkuZ2V0VGltZSgpKVxuICAgICAgLmZpbHRlcigodCkgPT4gIWlzTmFOKHQpICYmIHQgPD0gdG9kYXlNcylcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG5cbiAgICBpZiAoY29tcGxldGVkRGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gOTk5O1xuXG4gICAgY29uc3QgbXNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKCh0b2RheU1zIC0gY29tcGxldGVkRGF0ZXNbMF0pIC8gbXNQZXJEYXkpO1xuICB9XG5cbiAgaXNEb25lVG9kYXkoYWN0aXZpdHlJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWZmZWN0aXZlVG9kYXkgPSB0aGlzLmdldEVmZmVjdGl2ZVRvZGF5KCk7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgcmV0dXJuIGNvbXBzLnNvbWUoKGMpID0+IGMuZGF0ZSA9PT0gZWZmZWN0aXZlVG9kYXkgJiYgYy5jb21wbGV0ZWQpO1xuICB9XG5cbiAgLy8gLS0tIFdlZWtseSBQcm9ncmVzcyAtLS1cblxuICBnZXRXZWVrbHlQcm9ncmVzcyhhY3Rpdml0eUlkOiBzdHJpbmcpOiB7IGRvbmU6IG51bWJlcjsgdGFyZ2V0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuIHsgZG9uZTogMCwgdGFyZ2V0OiAwIH07XG5cbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3Qgd2Vla0VuZCA9IG5ldyBEYXRlKHdlZWtTdGFydCk7XG4gICAgd2Vla0VuZC5zZXREYXRlKHdlZWtFbmQuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBkb25lID0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICB9KS5sZW5ndGg7XG5cbiAgICByZXR1cm4geyBkb25lLCB0YXJnZXQ6IGFjdGl2aXR5LndlZWtseVRhcmdldCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXZWVrU3RhcnQoZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGlmZiA9IGQuZ2V0RGF0ZSgpIC0gZGF5ICsgKGRheSA9PT0gMCA/IC02IDogMSk7IC8vIE1vbmRheSBzdGFydFxuICAgIGQuc2V0RGF0ZShkaWZmKTtcbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIC8vIC0tLSBTdHJlYWtzIC0tLVxuXG4gIGdldEFjdGl2aXR5U3RyZWFrKGFjdGl2aXR5SWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKGVmZmVjdGl2ZU5vdyk7XG4gICAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWREYXRlcyA9IGNvbXBzXG4gICAgICAuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZClcbiAgICAgIC5tYXAoKGMpID0+IHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGQpID0+ICFpc05hTihkLmdldFRpbWUoKSkgJiYgZCA8PSB0b2RheSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmdldFRpbWUoKSAtIGEuZ2V0VGltZSgpKTtcblxuICAgIGlmIChjb21wbGV0ZWREYXRlcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xuXG4gICAgbGV0IHN0cmVhayA9IDA7XG4gICAgY29uc3QgY2hlY2tEYXRlID0gbmV3IERhdGUoY29tcGxldGVkRGF0ZXNbMF0pO1xuICAgIGZvciAoY29uc3QgZGF0ZSBvZiBjb21wbGV0ZWREYXRlcykge1xuICAgICAgaWYgKGRhdGUuZ2V0VGltZSgpID09PSBjaGVja0RhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgIHN0cmVhaysrO1xuICAgICAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGUgPCBjaGVja0RhdGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJlYWs7XG4gIH1cblxuICBnZXRPdmVyYWxsU3RyZWFrKCk6IG51bWJlciB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcbiAgICBjb25zdCBzdHJlYWtzID0gYWN0aXZpdGllcy5tYXAoKGEpID0+IHRoaXMuZ2V0QWN0aXZpdHlTdHJlYWsoYS5pZCkpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCAuLi5zdHJlYWtzKTtcbiAgfVxuXG4gIC8vIC0tLSBBbmFseXRpY3MgLS0tXG5cbiAgZ2V0VG90YWxDb21wbGV0aW9ucygpOiBudW1iZXIge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIHRvdGFsICs9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgZ2V0RGF5c09mUHJlc2VuY2UoKTogbnVtYmVyIHtcbiAgICBjb25zdCBkYXlzU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIGZvciAoY29uc3QgYyBvZiBjb21wcykge1xuICAgICAgICBpZiAoYy5jb21wbGV0ZWQpIGRheXNTZXQuYWRkKGMuZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXlzU2V0LnNpemU7XG4gIH1cblxuICAvLyAtLS0gQ2F0ZWdvcnkgWFAgJiBMZXZlbHMgLS0tXG5cbiAgZ2V0Q2F0ZWdvcnlYUChjYXRlZ29yeTogQ2F0ZWdvcnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHhwUGVyID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uO1xuICAgIGxldCB4cCA9IHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUFtjYXRlZ29yeV0gPz8gMDtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBpZiAoYWN0aXZpdHkuY2F0ZWdvcnkgIT09IGNhdGVnb3J5KSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIHhwID0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoICogeHBQZXI7XG4gICAgfVxuICAgIHJldHVybiB4cDtcbiAgfVxuXG4gIGdldENhdGVnb3J5TGV2ZWwoY2F0ZWdvcnk6IENhdGVnb3J5KTogQ2F0ZWdvcnlMZXZlbCB7XG4gICAgY29uc3QgeHAgPSB0aGlzLmdldENhdGVnb3J5WFAoY2F0ZWdvcnkpO1xuICAgIGNvbnN0IGxldmVsID0gTWF0aC5mbG9vcih4cCAvIDEwMCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NUb05leHQgPSB4cCAlIDEwMDtcbiAgICByZXR1cm4geyBjYXRlZ29yeSwgeHAsIGxldmVsLCBwcm9ncmVzc1RvTmV4dCB9O1xuICB9XG5cbiAgZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKTogQ2F0ZWdvcnlMZXZlbFtdIHtcbiAgICByZXR1cm4gKFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pLm1hcCgoYykgPT4gdGhpcy5nZXRDYXRlZ29yeUxldmVsKGMpKTtcbiAgfVxuXG4gIGdldEV1ZGFpbW9uaWFJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldEFsbENhdGVnb3J5TGV2ZWxzKCkucmVkdWNlKChzdW0sIGNsKSA9PiBzdW0gKyBjbC5sZXZlbCwgMCk7XG4gIH1cblxuICBnZXRDaGFwdGVyKCk6IHsgbnVtYmVyOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gICAgY29uc3QgY2hhcHRlck51bSA9IE1hdGgubWluKDEwLCBNYXRoLmZsb29yKGluZGV4IC8gMTApICsgMSk7XG4gICAgY29uc3QgbmFtZSA9IENIQVBURVJfTkFNRVNbY2hhcHRlck51bV0gPz8gXCJJbml0aWF0ZVwiO1xuICAgIHJldHVybiB7IG51bWJlcjogY2hhcHRlck51bSwgbmFtZSB9O1xuICB9XG5cbiAgZ2V0RXVkYWltb25pYVByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuICAgIHJldHVybiAoaW5kZXggJSAxMCkgKiAxMDsgLy8gMC0xMDAgcHJvZ3Jlc3Mgd2l0aGluIGNoYXB0ZXJcbiAgfVxuXG4gIC8vIC0tLSBEeW5hbWljIFRpdGxlIC0tLVxuXG4gIGdldER5bmFtaWNUaXRsZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGUpIHJldHVybiB0aGlzLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGU7XG5cbiAgICBjb25zdCBsZXZlbHMgPSB0aGlzLmdldEFsbENhdGVnb3J5TGV2ZWxzKCk7XG4gICAgY29uc3QgdG90YWxDb21wbGV0aW9ucyA9IHRoaXMuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlDb21wbGV0aW9uczogUmVjb3JkPENhdGVnb3J5LCBudW1iZXI+ID0geyBib2R5OiAwLCBtaW5kOiAwLCBzcGlyaXQ6IDAgfTtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgY2F0ZWdvcnlDb21wbGV0aW9uc1thY3Rpdml0eS5jYXRlZ29yeV0gKz0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsID0gT2JqZWN0LnZhbHVlcyhjYXRlZ29yeUNvbXBsZXRpb25zKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBpZiAodG90YWwgPT09IDApIHJldHVybiBcIkluaXRpYXRlXCI7XG5cbiAgICBjb25zdCB3ZWlnaHRzOiBSZWNvcmQ8Q2F0ZWdvcnksIG51bWJlcj4gPSB7XG4gICAgICBib2R5OiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLmJvZHkgLyB0b3RhbCA6IDAsXG4gICAgICBtaW5kOiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLm1pbmQgLyB0b3RhbCA6IDAsXG4gICAgICBzcGlyaXQ6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMuc3Bpcml0IC8gdG90YWwgOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCB0aWVyID0gdG90YWxDb21wbGV0aW9ucyA8IDUwID8gXCJsaWdodFwiIDogdG90YWxDb21wbGV0aW9ucyA8IDIwMCA/IFwibWlkXCIgOiBcImhlYXZ5XCI7XG5cbiAgICAvLyBDaGVjayBzaW5nbGUgZG9taW5hbnQgKD49IDcwJSlcbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKSB7XG4gICAgICBpZiAod2VpZ2h0c1tjYXRdID49IDAuNzApIHtcbiAgICAgICAgcmV0dXJuIFNJTkdMRV9ET01JTkFOVF9USVRMRVNbY2F0XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBiYWxhbmNlZCAoYWxsID49IDI1JSlcbiAgICBpZiAod2VpZ2h0cy5ib2R5ID49IDAuMjUgJiYgd2VpZ2h0cy5taW5kID49IDAuMjUgJiYgd2VpZ2h0cy5zcGlyaXQgPj0gMC4yNSkge1xuICAgICAgcmV0dXJuIEJBTEFOQ0VEX1RJVExFU1t0aWVyXSA/PyBcIkluaXRpYXRlIG9mIEJhbGFuY2VcIjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB0d28tY2F0ZWdvcnkgY29tYmluYXRpb25zIChlYWNoID49IDMwJSlcbiAgICBjb25zdCBjYXRzID0gKFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pXG4gICAgICAuZmlsdGVyKChjKSA9PiB3ZWlnaHRzW2NdID49IDAuMzApXG4gICAgICAuc29ydCgpO1xuXG4gICAgaWYgKGNhdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBrZXkgPSBjYXRzLmpvaW4oXCIrXCIpO1xuICAgICAgcmV0dXJuIFRXT19DQVRFR09SWV9USVRMRVNba2V5XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjazogdXNlIGRvbWluYW50IGNhdGVnb3J5XG4gICAgY29uc3QgZG9taW5hbnQgPSAoT2JqZWN0LmVudHJpZXMod2VpZ2h0cykgYXMgW0NhdGVnb3J5LCBudW1iZXJdW10pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pWzBdWzBdO1xuICAgIHJldHVybiBTSU5HTEVfRE9NSU5BTlRfVElUTEVTW2RvbWluYW50XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgfVxuXG4gIC8vIC0tLSBTdWdnZXN0aW9uIEFsZ29yaXRobSAoV2F0ZXJmYWxsKSAtLS1cblxuICBnZXRTdWdnZXN0aW9uKCk6IERpcmVjdGl2ZVN1Z2dlc3Rpb24gfCBudWxsIHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuICAgIGlmIChhY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyAxLiBERUFUSCBDSEVDS1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IG5lZ2xlY3RlZC5sZW5ndGggPiAwID8gbmVnbGVjdGVkWzBdIDogYWN0aXZpdGllcy5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSlbMF07XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odGFyZ2V0LCBcImRlYXRoXCIsIFwiRXNjYXBlIFRhcnRhcnVzIFx1MjAxNCBjb21wbGV0ZSB5b3VyIHBlbmFuY2UuXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmZhaWxlZFRocmVzaG9sZERheXMgPj0gMikge1xuICAgICAgY29uc3QgbmVnbGVjdGVkID0gdGhpcy5nZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXMpO1xuICAgICAgaWYgKG5lZ2xlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihuZWdsZWN0ZWRbMF0sIFwiZGVhdGhcIiwgXCJEZWF0aCBsb29tcy4gQWN0IG5vdyBvciBkZXNjZW5kIHRvIFRhcnRhcnVzLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBCT1NTIEZJTklTSFxuICAgIGlmICh0aGlzLmJvc3NFbmdpbmUuaXNEYW5nZXJab25lKCkpIHtcbiAgICAgIGNvbnN0IGJlc3QgPSB0aGlzLmdldEhpZ2hlc3REYW1hZ2VBY3Rpdml0eShhY3Rpdml0aWVzKTtcbiAgICAgIGlmIChiZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihiZXN0LCBcImJvc3NcIiwgXCJPbmUgZmluYWwgYmxvdyByZW1haW5zLiBGaW5pc2ggdGhlIGJlYXN0LlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBORUdMRUNUICsgUFJJT1JJVFlcbiAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcyk7XG4gICAgaWYgKG5lZ2xlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmFwcGx5UnVsZXMobmVnbGVjdGVkKTtcbiAgICAgIGlmICh0b3ApIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUodG9wLmlkKTtcbiAgICAgICAgY29uc3QgbG9yZSA9IE5FR0xFQ1RfTE9SRVt0b3AuaWRdID8/IGAke2RheXN9IGRheXMgc2luY2UgeW91IGxhc3QgcHJhY3RpY2VkLiBUaGUgc2tpbGwgYXRyb3BoaWVzLmA7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0b3AsIFwibmVnbGVjdFwiLCBsb3JlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiBXRUVLTFkgQ0FUQ0gtVVBcbiAgICBjb25zdCBiZWhpbmRTY2hlZHVsZSA9IHRoaXMuZ2V0QmVoaW5kU2NoZWR1bGVBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmIChiZWhpbmRTY2hlZHVsZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0b3AgPSBiZWhpbmRTY2hlZHVsZVswXTtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyh0b3AuaWQpO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRvcCwgXCJ3ZWVrbHlcIiwgYEJlaGluZCBzY2hlZHVsZTogJHtwcm9ncmVzcy5kb25lfS8ke3Byb2dyZXNzLnRhcmdldH0gdGhpcyB3ZWVrLmApO1xuICAgIH1cblxuICAgIC8vIDUuIENIQUlOIENIRUNLXG4gICAgY29uc3QgY2hhaW5lZCA9IHRoaXMuZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKGNoYWluZWQubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGNoYWluZWRbMF0sIFwiY2hhaW5cIiwgXCJZb3VyIHByZXJlcXVpc2l0ZSBpcyBkb25lLiBUaW1lIGZvciB0aGUgbmV4dCBzdGVwLlwiKTtcbiAgICB9XG5cbiAgICAvLyA2LiBUSU1FLUJBU0VEXG4gICAgY29uc3QgdGltZUJhc2VkID0gdGhpcy5nZXRUaW1lQmFzZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmICh0aW1lQmFzZWQubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRpbWVCYXNlZFswXSwgXCJ0aW1lXCIsIFwiVGhlIHRpbWUgaXMgcmlnaHQuIEJlZ2luLlwiKTtcbiAgICB9XG5cbiAgICAvLyA3LiBCQUxBTkNFRCBGQUxMQkFDS1xuICAgIGNvbnN0IGxvbmdlc3RHYXAgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGIuaWQpIC0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhLmlkKSk7XG5cbiAgICBpZiAobG9uZ2VzdEdhcC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24obG9uZ2VzdEdhcFswXSwgXCJiYWxhbmNlZFwiLCBcIkJhbGFuY2UgeW91ciBwYXRoLiBUaGlzIGhhcyB3YWl0ZWQgbG9uZ2VzdC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU3VnZ2VzdGlvbihcbiAgICBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsXG4gICAgcmVhc29uOiBQcmlvcml0eVJlYXNvbixcbiAgICBsb3JlVGV4dDogc3RyaW5nXG4gICk6IERpcmVjdGl2ZVN1Z2dlc3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgIHJlYXNvbixcbiAgICAgIGRheXNTaW5jZUxhc3REb25lOiB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKSxcbiAgICAgIGxvcmVUZXh0LFxuICAgICAgcHJpb3JpdHk6IGFjdGl2aXR5LnByaW9yaXR5LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGEuaWQpO1xuICAgICAgICByZXR1cm4gZGF5cyA+PSBhLm5lZ2xlY3RUaHJlc2hvbGQgJiYgIXRoaXMuaXNEb25lVG9kYXkoYS5pZCk7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlSdWxlcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWcgfCBudWxsIHtcbiAgICAvLyBBY3Rpdml0aWVzIHdpdGggYmxvY2tpbmcgcnVsZXMgZ2V0IHRvcCBwcmlvcml0eSBcdTIwMTQgdGhleSBzdXBwcmVzcyBvdGhlcnNcbiAgICBjb25zdCBibG9ja2VycyA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmJsb2NrcyAmJiBhLmJsb2Nrcy5sZW5ndGggPiAwKTtcbiAgICBpZiAoYmxvY2tlcnMubGVuZ3RoID4gMCkgcmV0dXJuIGJsb2NrZXJzWzBdO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICAvLyBDaGVjayBhbHRlcm5hdGluZyBydWxlXG4gICAgICBpZiAoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpIHtcbiAgICAgICAgY29uc3QgYWx0RGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICBjb25zdCB0aGlzRGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgICAgICAvLyBJZiB0aGlzIHdhcyBkb25lIG1vcmUgcmVjZW50bHkgdGhhbiBhbHRlcm5hdGUsIHByZWZlciBhbHRlcm5hdGVcbiAgICAgICAgaWYgKHRoaXNEYXlzIDwgYWx0RGF5cykge1xuICAgICAgICAgIGNvbnN0IGFsdCA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCk7XG4gICAgICAgICAgaWYgKGFsdCAmJiBhbHQuZW5hYmxlZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhbHQuaWQpKSByZXR1cm4gYWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgYWN0aXZpdHkgaXMgYmxvY2tlZCBieSBhIG5lZ2xlY3RlZCBibG9ja2VyXG4gICAgICBjb25zdCBpc0Jsb2NrZWQgPSBhY3Rpdml0aWVzLnNvbWUoKG90aGVyKSA9PlxuICAgICAgICBvdGhlci5ibG9ja3M/LmluY2x1ZGVzKGFjdGl2aXR5LmlkKSAmJiBvdGhlci5pZCAhPT0gYWN0aXZpdHkuaWRcbiAgICAgICk7XG4gICAgICBpZiAoaXNCbG9ja2VkKSBjb250aW51ZTsgLy8gc2tpcCBcdTIwMTQgYSBibG9ja2VyIHRha2VzIHByZWNlZGVuY2VcblxuICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZpdGllc1swXSA/PyBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgY29uc3Qgbm90RG9uZSA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgaWYgKG5vdERvbmUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbm90RG9uZS5zb3J0KChhLCBiKSA9PiBiLmRhbWFnZVBlckNvbXBsZXRpb24gLSBhLmRhbWFnZVBlckNvbXBsZXRpb24pWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZWZmZWN0aXZlTm93LmdldERheSgpOyAvLyAwPVN1blxuICAgIGNvbnN0IGFkanVzdGVkRGF5ID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlazsgLy8gTW9uPTFcbiAgICBjb25zdCByZW1haW5pbmdEYXlzID0gNyAtIGFkanVzdGVkRGF5ICsgMTsgLy8gaW5jbHVkaW5nIHRvZGF5XG5cbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3MoYS5pZCk7XG4gICAgICAgIGNvbnN0IGRlZmljaXQgPSBwcm9ncmVzcy50YXJnZXQgLSBwcm9ncmVzcy5kb25lO1xuICAgICAgICBpZiAoZGVmaWNpdCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIEJlaGluZCBpZiBuZWVkZWQgcGFjZSAoZGVmaWNpdC9yZW1haW5pbmcpIGV4Y2VlZHMgYXZlcmFnZSBwYWNlICh0YXJnZXQvNylcbiAgICAgICAgLy8gRXF1aXZhbGVudDogZGVmaWNpdCAqIDcgPiB0YXJnZXQgKiByZW1haW5pbmdEYXlzXG4gICAgICAgIHJldHVybiBkZWZpY2l0ICogNyA+IHByb2dyZXNzLnRhcmdldCAqIHJlbWFpbmluZ0RheXM7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKCFhLmNoYWluQWZ0ZXIgfHwgdGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuaXNEb25lVG9kYXkoYS5jaGFpbkFmdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgY29uc3QgaG91ciA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IGN1cnJlbnRQZXJpb2QgPSBob3VyIDwgbW9ybmluZ0VuZCA/IFwibW9ybmluZ1wiIDpcbiAgICAgIGhvdXIgPCBhZnRlcm5vb25FbmQgPyBcImFmdGVybm9vblwiIDpcbiAgICAgIGhvdXIgPCBldmVuaW5nRW5kID8gXCJldmVuaW5nXCIgOiBcImFueXRpbWVcIjtcblxuICAgIC8vIEZpcnN0IGNoZWNrIHRpbWUgb3ZlcnJpZGVzXG4gICAgY29uc3Qgb3ZlcnJpZGRlbiA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFhLnRpbWVPdmVycmlkZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGhvdXIgPj0gYS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyICYmIGhvdXIgPCBhLnRpbWVPdmVycmlkZS5lbmRIb3VyO1xuICAgIH0pO1xuICAgIGlmIChvdmVycmlkZGVuLmxlbmd0aCA+IDApIHJldHVybiBvdmVycmlkZGVuLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIC8vIFRoZW4gY2hlY2sgcHJlZmVycmVkIHRpbWVcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkgJiYgKGEucHJlZmVycmVkVGltZSA9PT0gY3VycmVudFBlcmlvZCB8fCBhLnByZWZlcnJlZFRpbWUgPT09IFwiYW55dGltZVwiKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICAvLyAtLS0gRGF5IE1hcCBHZW5lcmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgY2FsZW5kYXJFbnRyaWVzOiBEYXlNYXBFbnRyeVtdID0gW107XG5cbiAgc2V0Q2FsZW5kYXJFbnRyaWVzKGVudHJpZXM6IERheU1hcEVudHJ5W10pOiB2b2lkIHtcbiAgICB0aGlzLmNhbGVuZGFyRW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXREYXlNYXAoKTogRGF5TWFwRW50cnlbXSB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKS5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kLCBidWZmZXJNaW51dGVzIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IHRpbWVTbG90czogeyBwZXJpb2Q6IHN0cmluZzsgc3RhcnRIb3VyOiBudW1iZXI7IGVuZEhvdXI6IG51bWJlciB9W10gPSBbXG4gICAgICB7IHBlcmlvZDogXCJtb3JuaW5nXCIsIHN0YXJ0SG91cjogbW9ybmluZ1N0YXJ0LCBlbmRIb3VyOiBtb3JuaW5nRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJhZnRlcm5vb25cIiwgc3RhcnRIb3VyOiBtb3JuaW5nRW5kLCBlbmRIb3VyOiBhZnRlcm5vb25FbmQgfSxcbiAgICAgIHsgcGVyaW9kOiBcImV2ZW5pbmdcIiwgc3RhcnRIb3VyOiBhZnRlcm5vb25FbmQsIGVuZEhvdXI6IGV2ZW5pbmdFbmQgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgZW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gMS4gUGxhY2UgdGltZS1vdmVycmlkZSBhY3Rpdml0aWVzIGZpcnN0XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LnRpbWVPdmVycmlkZSkgY29udGludWU7XG4gICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgc3RhcnRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyLFxuICAgICAgICBlbmRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuZW5kSG91cixcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ0aW1lXCIsXG4gICAgICB9KTtcbiAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgIH1cblxuICAgIC8vIDIuIFBsYWNlIG5lZ2xlY3RlZCBhY3Rpdml0aWVzIGluIHRoZWlyIHByZWZlcnJlZCBzbG90c1xuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKVxuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBuZWdsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIm5lZ2xlY3RcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFBsYWNlIHJlbWFpbmluZyB3ZWVrbHktdGFyZ2V0IGFjdGl2aXRpZXNcbiAgICBjb25zdCByZW1haW5pbmcgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhc2NoZWR1bGVkLmhhcyhhLmlkKSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKGEuaWQpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MuZG9uZSA8IHByb2dyZXNzLnRhcmdldDtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZW1haW5pbmcpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIndlZWtseVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2NoZWR1bGVkLmFkZChhY3Rpdml0eS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgY2FsZW5kYXIgdGFzayBlbnRyaWVzXG4gICAgZm9yIChjb25zdCBjYWxFbnRyeSBvZiB0aGlzLmNhbGVuZGFyRW50cmllcykge1xuICAgICAgZW50cmllcy5wdXNoKGNhbEVudHJ5KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IGJ5IHN0YXJ0IHRpbWVcbiAgICBlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRIb3VyIC0gYi5zdGFydEhvdXIpO1xuXG4gICAgLy8gTWFyayBkb25lIGFjdGl2aXRpZXMgKG9ubHkgZm9yIG5vbi1jYWxlbmRhciBlbnRyaWVzKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayAmJiB0aGlzLmlzRG9uZVRvZGF5KGVudHJ5LmFjdGl2aXR5SWQpKSB7XG4gICAgICAgIGVudHJ5LnN0YXR1cyA9IFwiZG9uZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2xvdEZvckFjdGl2aXR5KFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdLFxuICAgIGV4aXN0aW5nOiBEYXlNYXBFbnRyeVtdLFxuICAgIGJ1ZmZlck1pbnV0ZXM6IG51bWJlclxuICApOiB7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfSB8IG51bGwge1xuICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbiAvIDYwO1xuICAgIGNvbnN0IGJ1ZmZlckhvdXJzID0gYnVmZmVyTWludXRlcyAvIDYwO1xuXG4gICAgLy8gRmluZCBwcmVmZXJyZWQgc2xvdFxuICAgIGNvbnN0IHByZWZlcnJlZFNsb3QgPSB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IGFjdGl2aXR5LnByZWZlcnJlZFRpbWUpXG4gICAgICA/PyB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IFwiYW55dGltZVwiKVxuICAgICAgPz8gdGltZVNsb3RzWzBdO1xuXG4gICAgLy8gRmluZCBmaXJzdCBhdmFpbGFibGUgdGltZSBpbiBwcmVmZXJyZWQgc2xvdFxuICAgIGxldCBjYW5kaWRhdGVTdGFydCA9IHByZWZlcnJlZFNsb3Quc3RhcnRIb3VyO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHByZWZlcnJlZFNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgY2FuZGlkYXRlU3RhcnQgPSBlbnRyeS5lbmRIb3VyICsgYnVmZmVySG91cnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FuZGlkYXRlRW5kID0gY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzO1xuICAgIGlmIChjYW5kaWRhdGVFbmQgPD0gcHJlZmVycmVkU2xvdC5lbmRIb3VyKSB7XG4gICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVFbmQgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgYW55IHNsb3RcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgdGltZVNsb3RzKSB7XG4gICAgICBpZiAoc2xvdCA9PT0gcHJlZmVycmVkU2xvdCkgY29udGludWU7XG4gICAgICBjYW5kaWRhdGVTdGFydCA9IHNsb3Quc3RhcnRIb3VyO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgICBpZiAoZW50cnkuc3RhcnRIb3VyIDwgc2xvdC5lbmRIb3VyICYmIGVudHJ5LmVuZEhvdXIgPiBjYW5kaWRhdGVTdGFydCkge1xuICAgICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIDw9IHNsb3QuZW5kSG91cikge1xuICAgICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVTdGFydCArIGR1cmF0aW9uSG91cnMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgRGF0YSBmb3IgQmFyIENoYXJ0IC0tLVxuXG4gIGdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTogQXJyYXk8eyBkYXk6IHN0cmluZzsgZGF0ZTogc3RyaW5nOyBjb21wbGV0aW9uczogTWFwPENhdGVnb3J5LCBudW1iZXI+IH0+IHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3QgZGF5cyA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgaSk7XG4gICAgICBjb25zdCBkYXRlU3RyID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGRheUNvbXBsZXRpb25zID0gbmV3IE1hcDxDYXRlZ29yeSwgbnVtYmVyPigpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGRhdGVTdHIgJiYgYy5jb21wbGV0ZWQpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYXlDb21wbGV0aW9ucy5nZXQoYWN0aXZpdHkuY2F0ZWdvcnkpID8/IDA7XG4gICAgICAgICAgZGF5Q29tcGxldGlvbnMuc2V0KGFjdGl2aXR5LmNhdGVnb3J5LCBjdXJyZW50ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goeyBkYXk6IGRheXNbaV0sIGRhdGU6IGRhdGVTdHIsIGNvbXBsZXRpb25zOiBkYXlDb21wbGV0aW9ucyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk6IG51bWJlciB7XG4gICAgY29uc3Qgd2Vla2x5ID0gdGhpcy5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gICAgcmV0dXJuIHdlZWtseS5maWx0ZXIoKGQpID0+IHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICByZXR1cm4gdG90YWwgPiAwO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuXG4gIGdldEJlc3REYXlUaGlzV2VlaygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIGxldCBiZXN0ID0gd2Vla2x5WzBdO1xuICAgIGxldCBiZXN0VG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgZCBvZiB3ZWVrbHkpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICBpZiAodG90YWwgPiBiZXN0VG90YWwpIHtcbiAgICAgICAgYmVzdFRvdGFsID0gdG90YWw7XG4gICAgICAgIGJlc3QgPSBkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVzdFRvdGFsID4gMCA/IGJlc3QuZGF5IDogXCItLVwiO1xuICB9XG5cbiAgLy8gLS0tIERhaWx5IFN0YXRzIC0tLVxuXG4gIGdldERhaWx5U3RhdHMoKTogeyBzZXNzaW9uczogbnVtYmVyOyBwZXJBY3Rpdml0eTogQXJyYXk8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmc7IGVtb2ppOiBzdHJpbmc7IGNhdGVnb3J5OiBDYXRlZ29yeTsgZG9uZTogYm9vbGVhbiB9PiB9IHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuICAgIGxldCBzZXNzaW9ucyA9IDA7XG4gICAgY29uc3QgcGVyQWN0aXZpdHk6IEFycmF5PHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nOyBlbW9qaTogc3RyaW5nOyBjYXRlZ29yeTogQ2F0ZWdvcnk7IGRvbmU6IGJvb2xlYW4gfT4gPSBbXTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgICAgY29uc3QgZG9uZSA9IHRoaXMuaXNEb25lVG9kYXkoYWN0aXZpdHkuaWQpO1xuICAgICAgaWYgKGRvbmUpIHNlc3Npb25zKys7XG4gICAgICBwZXJBY3Rpdml0eS5wdXNoKHtcbiAgICAgICAgaWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICBuYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgZG9uZSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7IHNlc3Npb25zLCBwZXJBY3Rpdml0eSB9O1xuICB9XG5cbiAgLy8gLS0tIFdlZWtseSBTdGF0cyAoZW5oYW5jZWQpIC0tLVxuXG4gIGdldFdlZWtseVN0YXRzKCk6IHtcbiAgICBhY3RpdmVEYXlzOiBudW1iZXI7XG4gICAgdG90YWxTZXNzaW9uczogbnVtYmVyO1xuICAgIGJlc3REYXk6IHN0cmluZztcbiAgICB3ZWVrT3ZlcldlZWs6IG51bWJlcjsgLy8gKy8tIGRpZmZlcmVuY2UgdnMgbGFzdCB3ZWVrXG4gICAgYnlEYXk6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PjtcbiAgfSB7XG4gICAgY29uc3QgYnlEYXkgPSB0aGlzLmdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTtcbiAgICBjb25zdCBhY3RpdmVEYXlzID0gdGhpcy5nZXRBY3RpdmVEYXlzVGhpc1dlZWsoKTtcbiAgICBjb25zdCBiZXN0RGF5ID0gdGhpcy5nZXRCZXN0RGF5VGhpc1dlZWsoKTtcblxuICAgIGxldCB0b3RhbFNlc3Npb25zID0gMDtcbiAgICBmb3IgKGNvbnN0IGQgb2YgYnlEYXkpIHtcbiAgICAgIGQuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbFNlc3Npb25zICs9IHY7IH0pO1xuICAgIH1cblxuICAgIC8vIExhc3Qgd2VlaydzIHRvdGFsIGZvciBjb21wYXJpc29uXG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCBsYXN0V2Vla1N0YXJ0ID0gbmV3IERhdGUodGhpcy5nZXRXZWVrU3RhcnQoZWZmZWN0aXZlTm93KSk7XG4gICAgbGFzdFdlZWtTdGFydC5zZXREYXRlKGxhc3RXZWVrU3RhcnQuZ2V0RGF0ZSgpIC0gNyk7XG5cbiAgICBsZXQgbGFzdFdlZWtUb3RhbCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShsYXN0V2Vla1N0YXJ0KTtcbiAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xuICAgICAgY29uc3QgZGF0ZVN0ciA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICAgIGlmIChjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGRhdGVTdHIgJiYgYy5jb21wbGV0ZWQpKSBsYXN0V2Vla1RvdGFsKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2ZURheXMsXG4gICAgICB0b3RhbFNlc3Npb25zLFxuICAgICAgYmVzdERheSxcbiAgICAgIHdlZWtPdmVyV2VlazogdG90YWxTZXNzaW9ucyAtIGxhc3RXZWVrVG90YWwsXG4gICAgICBieURheSxcbiAgICB9O1xuICB9XG5cbiAgLy8gLS0tIE1vbnRobHkgU3RhdHMgLS0tXG5cbiAgZ2V0TW9udGhseVN0YXRzKCk6IHtcbiAgICB0b3RhbFNlc3Npb25zOiBudW1iZXI7XG4gICAgYWN0aXZlRGF5czogbnVtYmVyO1xuICAgIGF2Z0RhaWx5OiBudW1iZXI7XG4gICAgYnlXZWVrOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHRvdGFsOiBudW1iZXI7IGJ5Q2F0ZWdvcnk6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PjtcbiAgICBjYWxlbmRhckdyaWQ6IEFycmF5PHsgZGF0ZTogc3RyaW5nOyB0b3RhbDogbnVtYmVyIH0+O1xuICB9IHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHllYXIgPSBlZmZlY3RpdmVOb3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aCA9IGVmZmVjdGl2ZU5vdy5nZXRNb250aCgpO1xuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gbmV3IERhdGUoeWVhciwgbW9udGggKyAxLCAwKS5nZXREYXRlKCk7XG4gICAgY29uc3QgdG9kYXlEYXRlID0gZWZmZWN0aXZlTm93LmdldERhdGUoKTtcblxuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG4gICAgY29uc3QgZGF5c1NldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGxldCB0b3RhbFNlc3Npb25zID0gMDtcbiAgICBjb25zdCBjYWxlbmRhckdyaWQ6IEFycmF5PHsgZGF0ZTogc3RyaW5nOyB0b3RhbDogbnVtYmVyIH0+ID0gW107XG5cbiAgICAvLyBQZXItZGF5IGNvdW50cyBmb3IgdGhlIHdob2xlIG1vbnRoXG4gICAgZm9yIChsZXQgZCA9IDE7IGQgPD0gZGF5c0luTW9udGg7IGQrKykge1xuICAgICAgY29uc3QgZGF0ZVN0ciA9IGAke3llYXJ9LSR7U3RyaW5nKG1vbnRoICsgMSkucGFkU3RhcnQoMiwgXCIwXCIpfS0ke1N0cmluZyhkKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICAgIGxldCBkYXlUb3RhbCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgICBpZiAoY29tcHMuc29tZSgoYykgPT4gYy5kYXRlID09PSBkYXRlU3RyICYmIGMuY29tcGxldGVkKSkgZGF5VG90YWwrKztcbiAgICAgIH1cbiAgICAgIGlmIChkYXlUb3RhbCA+IDApIGRheXNTZXQuYWRkKGRhdGVTdHIpO1xuICAgICAgdG90YWxTZXNzaW9ucyArPSBkYXlUb3RhbDtcbiAgICAgIGNhbGVuZGFyR3JpZC5wdXNoKHsgZGF0ZTogZGF0ZVN0ciwgdG90YWw6IGRheVRvdGFsIH0pO1xuICAgIH1cblxuICAgIC8vIEdyb3VwIGludG8gd2Vla3NcbiAgICBjb25zdCBieVdlZWs6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdG90YWw6IG51bWJlcjsgYnlDYXRlZ29yeTogTWFwPENhdGVnb3J5LCBudW1iZXI+IH0+ID0gW107XG4gICAgbGV0IHdlZWtOdW0gPSAxO1xuICAgIGZvciAobGV0IGQgPSAxOyBkIDw9IGRheXNJbk1vbnRoOyBkICs9IDcpIHtcbiAgICAgIGNvbnN0IHdlZWtFbmQgPSBNYXRoLm1pbihkICsgNiwgZGF5c0luTW9udGgpO1xuICAgICAgbGV0IHdlZWtUb3RhbCA9IDA7XG4gICAgICBjb25zdCBieUNhdCA9IG5ldyBNYXA8Q2F0ZWdvcnksIG51bWJlcj4oKTtcbiAgICAgIGZvciAobGV0IHdkID0gZDsgd2QgPD0gd2Vla0VuZDsgd2QrKykge1xuICAgICAgICBjb25zdCBkYXRlU3RyID0gYCR7eWVhcn0tJHtTdHJpbmcobW9udGggKyAxKS5wYWRTdGFydCgyLCBcIjBcIil9LSR7U3RyaW5nKHdkKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgICAgIGlmIChjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGRhdGVTdHIgJiYgYy5jb21wbGV0ZWQpKSB7XG4gICAgICAgICAgICB3ZWVrVG90YWwrKztcbiAgICAgICAgICAgIGJ5Q2F0LnNldChhY3Rpdml0eS5jYXRlZ29yeSwgKGJ5Q2F0LmdldChhY3Rpdml0eS5jYXRlZ29yeSkgPz8gMCkgKyAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGJ5V2Vlay5wdXNoKHsgbGFiZWw6IGBXJHt3ZWVrTnVtfWAsIHRvdGFsOiB3ZWVrVG90YWwsIGJ5Q2F0ZWdvcnk6IGJ5Q2F0IH0pO1xuICAgICAgd2Vla051bSsrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b3RhbFNlc3Npb25zLFxuICAgICAgYWN0aXZlRGF5czogZGF5c1NldC5zaXplLFxuICAgICAgYXZnRGFpbHk6IHRvZGF5RGF0ZSA+IDAgPyBNYXRoLnJvdW5kKCh0b3RhbFNlc3Npb25zIC8gdG9kYXlEYXRlKSAqIDEwKSAvIDEwIDogMCxcbiAgICAgIGJ5V2VlayxcbiAgICAgIGNhbGVuZGFyR3JpZCxcbiAgICB9O1xuICB9XG5cbiAgLy8gLS0tIFllYXJseSBTdGF0cyAtLS1cblxuICBnZXRZZWFybHlTdGF0cygpOiB7XG4gICAgdG90YWxTZXNzaW9uczogbnVtYmVyO1xuICAgIGFjdGl2ZURheXM6IG51bWJlcjtcbiAgICBieU1vbnRoOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHRvdGFsOiBudW1iZXI7IGJ5Q2F0ZWdvcnk6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PjtcbiAgICBjYXRlZ29yeURpc3RyaWJ1dGlvbjogTWFwPENhdGVnb3J5LCBudW1iZXI+O1xuICB9IHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHllYXIgPSBlZmZlY3RpdmVOb3cuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuICAgIGNvbnN0IG1vbnRoTGFiZWxzID0gW1wiSmFuXCIsIFwiRmViXCIsIFwiTWFyXCIsIFwiQXByXCIsIFwiTWF5XCIsIFwiSnVuXCIsIFwiSnVsXCIsIFwiQXVnXCIsIFwiU2VwXCIsIFwiT2N0XCIsIFwiTm92XCIsIFwiRGVjXCJdO1xuXG4gICAgbGV0IHRvdGFsU2Vzc2lvbnMgPSAwO1xuICAgIGNvbnN0IGRheXNTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBjb25zdCBjYXRlZ29yeURpc3QgPSBuZXcgTWFwPENhdGVnb3J5LCBudW1iZXI+KCk7XG4gICAgY29uc3QgYnlNb250aDogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB0b3RhbDogbnVtYmVyOyBieUNhdGVnb3J5OiBNYXA8Q2F0ZWdvcnksIG51bWJlcj4gfT4gPSBbXTtcblxuICAgIGZvciAobGV0IG0gPSAwOyBtIDwgMTI7IG0rKykge1xuICAgICAgY29uc3QgZGF5c0luTW9udGggPSBuZXcgRGF0ZSh5ZWFyLCBtICsgMSwgMCkuZ2V0RGF0ZSgpO1xuICAgICAgbGV0IG1vbnRoVG90YWwgPSAwO1xuICAgICAgY29uc3QgYnlDYXQgPSBuZXcgTWFwPENhdGVnb3J5LCBudW1iZXI+KCk7XG5cbiAgICAgIGZvciAobGV0IGQgPSAxOyBkIDw9IGRheXNJbk1vbnRoOyBkKyspIHtcbiAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGAke3llYXJ9LSR7U3RyaW5nKG0gKyAxKS5wYWRTdGFydCgyLCBcIjBcIil9LSR7U3RyaW5nKGQpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICAgICAgaWYgKGNvbXBzLnNvbWUoKGMpID0+IGMuZGF0ZSA9PT0gZGF0ZVN0ciAmJiBjLmNvbXBsZXRlZCkpIHtcbiAgICAgICAgICAgIG1vbnRoVG90YWwrKztcbiAgICAgICAgICAgIHRvdGFsU2Vzc2lvbnMrKztcbiAgICAgICAgICAgIGRheXNTZXQuYWRkKGRhdGVTdHIpO1xuICAgICAgICAgICAgYnlDYXQuc2V0KGFjdGl2aXR5LmNhdGVnb3J5LCAoYnlDYXQuZ2V0KGFjdGl2aXR5LmNhdGVnb3J5KSA/PyAwKSArIDEpO1xuICAgICAgICAgICAgY2F0ZWdvcnlEaXN0LnNldChhY3Rpdml0eS5jYXRlZ29yeSwgKGNhdGVnb3J5RGlzdC5nZXQoYWN0aXZpdHkuY2F0ZWdvcnkpID8/IDApICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGJ5TW9udGgucHVzaCh7IGxhYmVsOiBtb250aExhYmVsc1ttXSwgdG90YWw6IG1vbnRoVG90YWwsIGJ5Q2F0ZWdvcnk6IGJ5Q2F0IH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB0b3RhbFNlc3Npb25zLFxuICAgICAgYWN0aXZlRGF5czogZGF5c1NldC5zaXplLFxuICAgICAgYnlNb250aCxcbiAgICAgIGNhdGVnb3J5RGlzdHJpYnV0aW9uOiBjYXRlZ29yeURpc3QsXG4gICAgfTtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ2FsZW5kYXIgRW5naW5lXG4vLyBSZWFkcyB0YXNrcyBmcm9tIERhaWx5IE5vdGVzLCBUYXNrcyBwbHVnaW4sIGFuZCBRdWljayBUYXNrc1xuLy8gTWVyZ2VzIHRoZW0gaW50byBDYWxlbmRhclRhc2tbXSBmb3IgRGF5IE1hcCBpbnRlZ3JhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUge1xuICBPbGVuU2V0dGluZ3MsXG4gIENhbGVuZGFyVGFzayxcbiAgRGF5TWFwRW50cnksXG4gIENhbGVuZGFyVGFza1NvdXJjZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckVuZ2luZSB7XG4gIHByaXZhdGUgYXBwOiBBcHA7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcbiAgcHJpdmF0ZSB0b2RheTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBzZXR0aW5nczogT2xlblNldHRpbmdzLCBub3c6IERhdGUpIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0aGlzLnRvZGF5ID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgfVxuXG4gIC8vIC0tLSBNYWluIGVudHJ5OiBnZXQgYWxsIGNhbGVuZGFyIHRhc2tzIGZvciB0b2RheSAtLS1cblxuICBnZXRBbGxUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzKSB7XG4gICAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZ2V0RGFpbHlOb3RlVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4pIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXRUYXNrc1BsdWdpblRhc2tzKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXRRdWlja1Rhc2tzKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBDb252ZXJ0IENhbGVuZGFyVGFza3MgdG8gRGF5TWFwRW50cmllcyAtLS1cblxuICB0b0RheU1hcEVudHJpZXModGFza3M6IENhbGVuZGFyVGFza1tdKTogRGF5TWFwRW50cnlbXSB7XG4gICAgcmV0dXJuIHRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRIb3VyID0gdGFzay50aW1lID8gdGhpcy5wYXJzZVRpbWVUb0hvdXIodGFzay50aW1lKSA6IDk7XG4gICAgICBjb25zdCBkdXJhdGlvbkhvdXJzID0gKHRhc2suZHVyYXRpb24gPz8gMzApIC8gNjA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2aXR5SWQ6IGBjYWwtJHt0YXNrLmlkfWAsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogdGFzay50aXRsZSxcbiAgICAgICAgZW1vamk6IHRoaXMuZ2V0U291cmNlRW1vamkodGFzay5zb3VyY2UpLFxuICAgICAgICBjYXRlZ29yeTogXCJtaW5kXCIgYXMgY29uc3QsIC8vIGNhbGVuZGFyIHRhc2tzIGRlZmF1bHQgdG8gbWluZFxuICAgICAgICBzdGFydEhvdXIsXG4gICAgICAgIGVuZEhvdXI6IHN0YXJ0SG91ciArIGR1cmF0aW9uSG91cnMsXG4gICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiB0YXNrLmR1cmF0aW9uID8/IDMwLFxuICAgICAgICBzdGF0dXM6IHRhc2suZG9uZSA/IFwiZG9uZVwiIGFzIGNvbnN0IDogXCJwZW5kaW5nXCIgYXMgY29uc3QsXG4gICAgICAgIGlzQ2FsZW5kYXJUYXNrOiB0cnVlLFxuICAgICAgICBjYWxlbmRhclNvdXJjZTogdGFzay5zb3VyY2UsXG4gICAgICAgIGNhbGVuZGFyVGFza0lkOiB0YXNrLmlkLFxuICAgICAgICBmaWxlUGF0aDogdGFzay5maWxlUGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogdGFzay5saW5lTnVtYmVyLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQTogRGFpbHkgTm90ZXMgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXREYWlseU5vdGVUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgZm9sZGVyID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgIGlmICghZm9sZGVyKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gRmluZCB0b2RheSdzIGRhaWx5IG5vdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICBpZiAoIWYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpICYmIGYucGF0aCAhPT0gZm9sZGVyKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gZi5iYXNlbmFtZSA9PT0gdGhpcy50b2RheTtcbiAgICB9KTtcblxuICAgIGlmICghZGFpbHlOb3RlKSByZXR1cm4gW107XG5cbiAgICAvLyBSZWFkIGNhY2hlZCBjb250ZW50IGFuZCBwYXJzZSB0YXNrc1xuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZGFpbHlOb3RlKTtcbiAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXMpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBsaXN0SXRlbSBvZiBjYWNoZS5saXN0SXRlbXMpIHtcbiAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlOyAvLyBub3QgYSBjaGVja2JveFxuXG4gICAgICBjb25zdCBsaW5lU3RhcnQgPSBsaXN0SXRlbS5wb3NpdGlvbi5zdGFydC5saW5lO1xuXG4gICAgICAvLyBSZWFkIHRoZSBsaW5lIGNvbnRlbnQgZnJvbSBjYWNoZSBzZWN0aW9uc1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0TGluZUNvbnRlbnQoZGFpbHlOb3RlLCBsaW5lU3RhcnQpO1xuICAgICAgaWYgKCFjb250ZW50KSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGNvbnRlbnQpO1xuICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2RhaWx5Tm90ZS5wYXRofS1MJHtsaW5lU3RhcnR9YCxcbiAgICAgICAgdGl0bGU6IHBhcnNlZC50aXRsZSxcbiAgICAgICAgc291cmNlOiBcImRhaWx5LW5vdGVcIixcbiAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgdGltZTogcGFyc2VkLnRpbWUsXG4gICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IGxpc3RJdGVtLnRhc2sgPT09IFwieFwiIHx8IGxpc3RJdGVtLnRhc2sgPT09IFwiWFwiLFxuICAgICAgICBmaWxlUGF0aDogZGFpbHlOb3RlLnBhdGgsXG4gICAgICAgIGxpbmVOdW1iZXI6IGxpbmVTdGFydCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIFBhcnNlIFwiLSBbIF0gVGFzayBuYW1lIEAxNDowMCB+MzBtXCIgZm9ybWF0XG4gIHByaXZhdGUgcGFyc2VUYXNrTGluZShsaW5lOiBzdHJpbmcpOiB7IHRpdGxlOiBzdHJpbmc7IHRpbWU/OiBzdHJpbmc7IGR1cmF0aW9uPzogbnVtYmVyIH0gfCBudWxsIHtcbiAgICAvLyBSZW1vdmUgY2hlY2tib3ggcHJlZml4OiBcIi0gWyBdIFwiIG9yIFwiLSBbeF0gXCJcbiAgICBjb25zdCBtYXRjaCA9IGxpbmUubWF0Y2goL15bLSpdXFxzKlxcWy4/XFxdXFxzKiguKykkLyk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdGV4dCA9IG1hdGNoWzFdLnRyaW0oKTtcblxuICAgIC8vIEV4dHJhY3QgQHRpbWUgKGUuZy4sIEAxNDowMCBvciBAMnBtKVxuICAgIGxldCB0aW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGltZU1hdGNoID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSk6KFxcZHsyfSlcXGIvKTtcbiAgICBpZiAodGltZU1hdGNoKSB7XG4gICAgICB0aW1lID0gYCR7dGltZU1hdGNoWzFdLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHt0aW1lTWF0Y2hbMl19YDtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UodGltZU1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSBAMnBtIC8gQDE0IGZvcm1hdFxuICAgICAgY29uc3Qgc2ltcGxlVGltZSA9IHRleHQubWF0Y2goL0AoXFxkezEsMn0pXFxzKihhbXxwbSk/XFxiL2kpO1xuICAgICAgaWYgKHNpbXBsZVRpbWUpIHtcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChzaW1wbGVUaW1lWzFdKTtcbiAgICAgICAgY29uc3QgcGVyaW9kID0gc2ltcGxlVGltZVsyXT8udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gXCJwbVwiICYmIGhvdXIgPCAxMikgaG91ciArPSAxMjtcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gXCJhbVwiICYmIGhvdXIgPT09IDEyKSBob3VyID0gMDtcbiAgICAgICAgdGltZSA9IGAke1N0cmluZyhob3VyKS5wYWRTdGFydCgyLCBcIjBcIil9OjAwYDtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShzaW1wbGVUaW1lWzBdLCBcIlwiKS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCB+ZHVyYXRpb24gKGUuZy4sIH4zMG0sIH4xaCwgfjEuNWgpXG4gICAgbGV0IGR1cmF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgZHVyYXRpb25NYXRjaCA9IHRleHQubWF0Y2goL34oXFxkKyg/OlxcLlxcZCspPylcXHMqKG18bWlufGh8aHJ8aG91cilzP1xcYi9pKTtcbiAgICBpZiAoZHVyYXRpb25NYXRjaCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KGR1cmF0aW9uTWF0Y2hbMV0pO1xuICAgICAgY29uc3QgdW5pdCA9IGR1cmF0aW9uTWF0Y2hbMl0udG9Mb3dlckNhc2UoKTtcbiAgICAgIGR1cmF0aW9uID0gdW5pdC5zdGFydHNXaXRoKFwiaFwiKSA/IE1hdGgucm91bmQodmFsdWUgKiA2MCkgOiBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoZHVyYXRpb25NYXRjaFswXSwgXCJcIikudHJpbSgpO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIGFueSB0cmFpbGluZy9sZWFkaW5nIHdoaXRlc3BhY2Ugb3IgZGFzaGVzXG4gICAgY29uc3QgdGl0bGUgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbiAgICBpZiAoIXRpdGxlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7IHRpdGxlLCB0aW1lLCBkdXJhdGlvbiB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW5lQ29udGVudChmaWxlOiBURmlsZSwgbGluZU51bWJlcjogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgLy8gVXNlIHRoZSBtZXRhZGF0YUNhY2hlIHNlY3Rpb25zIHRvIHJlY29uc3RydWN0IGxpbmUgY29udGVudFxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlYWQgZnJvbSB0aGUgdmF1bHQgY2FjaGUgXHUyMDE0IHRyeSBnZXR0aW5nIGNvbnRlbnQgdmlhIHNlY3Rpb25zXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luY2hyb25vdXNseSByZWFkIGZpbGUgY29udGVudCwgdXNlIHRoZSBjYWNoZWQgZnJvbnRtYXR0ZXJcbiAgICAvLyBhbmQgbGlzdCBpdGVtcyB0byBidWlsZCB3aGF0IHdlIG5lZWRcbiAgICAvLyBBY3R1YWxseSwgbGlzdCBpdGVtcyBpbiBPYnNpZGlhbiBjYWNoZSBkb24ndCBpbmNsdWRlIHRoZSB0ZXh0LlxuICAgIC8vIFdlJ2xsIG5lZWQgdG8gcmVhZCB0aGUgZmlsZSBjb250ZW50LiBTdG9yZSBpdCBpbiBhIG1hcCBkdXJpbmcgZ2F0aGVyIHBoYXNlLlxuICAgIC8vIEZvciBub3csIHJldHVybiBudWxsIFx1MjAxNCB0aGUgRGFzaGJvYXJkVmlldyB3aWxsIHByZS1yZWFkIGRhaWx5IG5vdGUgY29udGVudFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtcmVhZCBmaWxlIGNvbnRlbnRcbiAgZ2V0RGFpbHlOb3RlVGFza3NGcm9tQ29udGVudChjb250ZW50OiBzdHJpbmcsIGZpbGVQYXRoOiBzdHJpbmcpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgLy8gTWF0Y2ggdGFzayBsaW5lczogLSBbIF0gb3IgLSBbeF1cbiAgICAgIGlmICghL15bLSpdXFxzKlxcWy4/XFxdXFxzLy50ZXN0KGxpbmUpKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGxpbmUpO1xuICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBpc0RvbmUgPSAvXlstKl1cXHMqXFxbW3hYXVxcXS8udGVzdChsaW5lKTtcblxuICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgZG4tJHtmaWxlUGF0aH0tTCR7aX1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQjogVGFza3MgUGx1Z2luIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgZ2V0VGFza3NQbHVnaW5UYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgLy8gQ2hlY2sgaWYgVGFza3MgcGx1Z2luIGlzIGluc3RhbGxlZFxuICAgIGNvbnN0IHRhc2tzUGx1Z2luID0gKHRoaXMuYXBwIGFzIGFueSkucGx1Z2lucz8ucGx1Z2lucz8uW1wib2JzaWRpYW4tdGFza3MtcGx1Z2luXCJdO1xuICAgIGlmICghdGFza3NQbHVnaW4pIHJldHVybiBbXTtcblxuICAgIC8vIFRhc2tzIHBsdWdpbiBzdG9yZXMgdGFza3MgdmlhIG1ldGFkYXRhIGNhY2hlXG4gICAgLy8gV2Ugc2NhbiBhbGwgZmlsZXMgZm9yIHRhc2tzIHdpdGggZHVlIGRhdGVzIG1hdGNoaW5nIHRvZGF5XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXMpIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgICBpZiAobGlzdEl0ZW0udGFzayA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBUYXNrcyBwbHVnaW4gdXNlcyBlbW9qaS1iYXNlZCBkYXRlcyBpbiB0aGUgdGV4dDpcbiAgICAgICAgLy8gXHVEODNEXHVEQ0M1IFlZWVktTU0tREQgZm9yIGR1ZSBkYXRlXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVhZCB0aGUgZmlsZSB0byBjaGVjaywgYnV0IHdlIGNhbiB1c2UgdGhlIGZyb250bWF0dGVyLWJhc2VkXG4gICAgICAgIC8vIGFwcHJvYWNoIG9yIHRoZSBwb3NpdGlvbiB0byBnZXQgdGhlIHRleHQuXG4gICAgICAgIC8vIFNpbmNlIHdlIGNhbid0IHN5bmMtcmVhZCwgd2UnbGwgY2hlY2sgaWYgcG9zaXRpb25zIG1lbnRpb24gdG9kYXkuXG4gICAgICAgIC8vIEZvciBub3csIHRoaXMgaXMgYSBiZXN0LWVmZm9ydCBjaGVjayB1c2luZyBjYWNoZSBkYXRhLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIENhbGxlZCBieSBEYXNoYm9hcmRWaWV3IHdpdGggcHJlLXNjYW5uZWQgdGFzayBkYXRhXG4gIGdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXM6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGZpbGUuY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGlmICghL15bLSpdXFxzKlxcWy4/XFxdXFxzLy50ZXN0KGxpbmUpKSBjb250aW51ZTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgVGFza3MgcGx1Z2luIGR1ZSBkYXRlOiBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERFxuICAgICAgICBjb25zdCBkdWVNYXRjaCA9IGxpbmUubWF0Y2goL1xcdXsxRjRDNX1cXHMqKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS91KTtcbiAgICAgICAgaWYgKCFkdWVNYXRjaCB8fCBkdWVNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGxpbmUpO1xuICAgICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgICAgLy8gQWxzbyBjaGVjayBmb3Igc2NoZWR1bGVkIGRhdGUgXHUyM0YzXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlZE1hdGNoID0gbGluZS5tYXRjaCgvXFx1MjNGM1xccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoc2NoZWR1bGVkTWF0Y2ggJiYgc2NoZWR1bGVkTWF0Y2hbMV0gIT09IHRoaXMudG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdHAtJHtmaWxlLnBhdGh9LUwke2l9YCxcbiAgICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLnJlcGxhY2UoL1tcXHV7MUY0QzV9XFx1MjNGM11cXHMqXFxkezR9LVxcZHsyfS1cXGR7Mn0vZ3UsIFwiXCIpLnRyaW0oKSxcbiAgICAgICAgICBzb3VyY2U6IFwidGFza3MtcGx1Z2luXCIsXG4gICAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICAgIGRvbmU6IGlzRG9uZSxcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IGksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQzogQnVpbHQtaW4gUXVpY2sgVGFza3MgLS0tXG5cbiAgcHJpdmF0ZSBnZXRRdWlja1Rhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzXG4gICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdGhpcy50b2RheSlcbiAgICAgIC5tYXAoKHF0KSA9PiAoe1xuICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgdGl0bGU6IHF0LnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwicXVpY2stdGFza1wiIGFzIENhbGVuZGFyVGFza1NvdXJjZSxcbiAgICAgICAgZGF0ZTogcXQuZGF0ZSxcbiAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHF0LmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBxdC5kb25lLFxuICAgICAgfSkpO1xuICB9XG5cbiAgLy8gLS0tIENvbXBsZXRpb24gaGFuZGxlcnMgLS0tXG5cbiAgLy8gVG9nZ2xlIGEgZGFpbHkgbm90ZSB0YXNrIGRvbmUvdW5kb25lIGJ5IHJld3JpdGluZyB0aGUgY2hlY2tib3hcbiAgYXN5bmMgdG9nZ2xlRGFpbHlOb3RlVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBpZiAobGluZU51bWJlciA+PSBsaW5lcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tsaW5lTnVtYmVyXTtcbiAgICBpZiAoZG9uZSkge1xuICAgICAgbGluZXNbbGluZU51bWJlcl0gPSBsaW5lLnJlcGxhY2UoL1xcWy5cXF0vLCBcIlt4XVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZXNbbGluZU51bWJlcl0gPSBsaW5lLnJlcGxhY2UoL1xcWy5cXF0vLCBcIlsgXVwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYSBUYXNrcyBwbHVnaW4gdGFza1xuICBhc3luYyB0b2dnbGVUYXNrc1BsdWdpblRhc2soZmlsZVBhdGg6IHN0cmluZywgbGluZU51bWJlcjogbnVtYmVyLCBkb25lOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2FtZSBtZWNoYW5pc20gYXMgZGFpbHkgbm90ZXMgXHUyMDE0IGp1c3QgdG9nZ2xlIHRoZSBjaGVja2JveFxuICAgIGF3YWl0IHRoaXMudG9nZ2xlRGFpbHlOb3RlVGFzayhmaWxlUGF0aCwgbGluZU51bWJlciwgZG9uZSk7XG4gIH1cblxuICAvLyBQb3N0cG9uZSBhIHRhc2sgdG8gdG9tb3Jyb3dcbiAgYXN5bmMgcG9zdHBvbmVUYXNrKHRhc2s6IENhbGVuZGFyVGFzayk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodGhpcy50b2RheSk7XG4gICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcbiAgICBjb25zdCB0b21vcnJvd1N0ciA9IHRvbW9ycm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgaWYgKHRhc2suc291cmNlID09PSBcInF1aWNrLXRhc2tcIikge1xuICAgICAgLy8gVXBkYXRlIGluIHNldHRpbmdzXG4gICAgICBjb25zdCBxdCA9IHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maW5kKFxuICAgICAgICAocSkgPT4gYHF0LSR7cS5pZH1gID09PSB0YXNrLmlkIHx8IHEuaWQgPT09IHRhc2suaWQucmVwbGFjZShcInF0LVwiLCBcIlwiKVxuICAgICAgKTtcbiAgICAgIGlmIChxdCkge1xuICAgICAgICBxdC5wb3N0cG9uZWRGcm9tID0gcXQucG9zdHBvbmVkRnJvbSA/PyBxdC5kYXRlO1xuICAgICAgICBxdC5kYXRlID0gdG9tb3Jyb3dTdHI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YXNrLnNvdXJjZSA9PT0gXCJkYWlseS1ub3RlXCIgJiYgdGFzay5maWxlUGF0aCAhPT0gdW5kZWZpbmVkICYmIHRhc2subGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBNb3ZlIHRhc2sgbGluZSBmcm9tIHRvZGF5J3Mgbm90ZSB0byB0b21vcnJvdydzIG5vdGVcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGFzay5maWxlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuICAgICAgaWYgKHRhc2subGluZU51bWJlciA+PSBsaW5lcy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgLy8gRXh0cmFjdCB0aGUgdGFzayBsaW5lIGFuZCByZW1vdmUgZnJvbSB0b2RheSdzIG5vdGVcbiAgICAgIGNvbnN0IHRhc2tMaW5lID0gbGluZXNbdGFzay5saW5lTnVtYmVyXTtcbiAgICAgIGxpbmVzLnNwbGljZSh0YXNrLmxpbmVOdW1iZXIsIDEpO1xuICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIGxpbmVzLmpvaW4oXCJcXG5cIikpO1xuXG4gICAgICAvLyBBcHBlbmQgdG8gdG9tb3Jyb3cncyBub3RlIChjcmVhdGUgaWYgbmVlZGVkKVxuICAgICAgY29uc3QgZm9sZGVyID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcbiAgICAgIGNvbnN0IHRvbW9ycm93UGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHt0b21vcnJvd1N0cn0ubWRgO1xuXG4gICAgICBjb25zdCB0b21vcnJvd0ZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodG9tb3Jyb3dQYXRoKTtcbiAgICAgIGlmICh0b21vcnJvd0ZpbGUgJiYgdG9tb3Jyb3dGaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgY29uc3QgdG9tb3Jyb3dDb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZCh0b21vcnJvd0ZpbGUpO1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkodG9tb3Jyb3dGaWxlLCB0b21vcnJvd0NvbnRlbnQgKyBcIlxcblwiICsgdGFza0xpbmUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUodG9tb3Jyb3dQYXRoLCBgLS0tXFxuLS0tXFxuXFxuJHt0YXNrTGluZX1cXG5gKTtcbiAgICAgICAgfSBjYXRjaCB7IC8qIG1heSBhbHJlYWR5IGV4aXN0ICovIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhc2suc291cmNlID09PSBcInRhc2tzLXBsdWdpblwiICYmIHRhc2suZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0YXNrLmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZmlsZVxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0YXNrLmZpbGVQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgIGlmICh0YXNrLmxpbmVOdW1iZXIgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgbGluZXNbdGFzay5saW5lTnVtYmVyXSA9IGxpbmVzW3Rhc2subGluZU51bWJlcl0ucmVwbGFjZShcbiAgICAgICAgICAvXFx1ezFGNEM1fVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS91LFxuICAgICAgICAgIGBcXHV7MUY0QzV9ICR7dG9tb3Jyb3dTdHJ9YFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEhlbHBlcnMgLS0tXG5cbiAgcHJpdmF0ZSBwYXJzZVRpbWVUb0hvdXIodGltZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBbaCwgbV0gPSB0aW1lLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gaCArIChtID8/IDApIC8gNjA7XG4gIH1cblxuICBwcml2YXRlIGdldFNvdXJjZUVtb2ppKHNvdXJjZTogQ2FsZW5kYXJUYXNrU291cmNlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogcmV0dXJuIFwiXFx1ezFGNEREfVwiO1xuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOiByZXR1cm4gXCJcXHUyNjExXFx1RkUwRlwiO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogcmV0dXJuIFwiXFx1MjZBMVwiO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgSGVybyBDYXJkIENvbXBvbmVudFxuLy8gRnVsbC13aWR0aCBibHVycmVkIGJnIHdpdGggZ3JlZXRpbmcsIHJhbmsgYmFkZ2UsIGFjdGlvbiBidXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5pbXBvcnQgeyB0b1JvbWFuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVyb0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBoZXJvID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm9cIiB9KTtcbiAgaGVyby5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gQmFja2dyb3VuZCBpbWFnZVxuICBpZiAoc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpIHtcbiAgICBjb25zdCBiZyA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1iZ1wiIH0pO1xuICAgIGNvbnN0IHZhdWx0UGF0aCA9IHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kO1xuICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3ZhdWx0UGF0aH1cIilgO1xuICB9XG5cbiAgLy8gRGFyayB2aWduZXR0ZSBvdmVybGF5XG4gIGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1vdmVybGF5XCIgfSk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWNvbnRlbnRcIiB9KTtcblxuICAvLyBUaW1lLWJhc2VkIGdyZWV0aW5nXG4gIGNvbnN0IGdyZWV0aW5nID0gZ2V0R3JlZXRpbmcoc2V0dGluZ3MpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWdyZWV0aW5nXCIsXG4gICAgdGV4dDogYCR7Z3JlZXRpbmd9LCAke3NldHRpbmdzLnVzZXJOYW1lfS5gLFxuICB9KTtcblxuICAvLyBDb250ZXh0dWFsIHN1YnRpdGxlXG4gIGNvbnN0IHN1YnRpdGxlID0gZ2V0U3VidGl0bGUoc2V0dGluZ3MsIGVuZ2luZSk7XG4gIGNvbnRlbnQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tc3VidGl0bGVcIixcbiAgICB0ZXh0OiBzdWJ0aXRsZSxcbiAgfSk7XG5cbiAgLy8gUmFuayBiYWRnZSBwaWxsXG4gIGNvbnN0IHRpdGxlID0gZW5naW5lLmdldER5bmFtaWNUaXRsZSgpO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgY29uc3QgYmFkZ2UgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tcmFuay1iYWRnZVwiIH0pO1xuICBiYWRnZS5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tcmFuay10ZXh0XCIsXG4gICAgdGV4dDogYCR7dGl0bGV9IFx1MDBCNyAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYWN0aW9uc1wiIH0pO1xuXG4gIGNvbnN0IHByb2dyZXNzQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIllvdXIgcHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBldWRhaW1vbmlhIHNlY3Rpb25cbiAgICBjb25zdCBldWRTZWN0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1jYXJkXCIpO1xuICAgIGlmIChldWRTZWN0aW9uKSBldWRTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlZmxlY3RCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWJ0blwiLFxuICAgIHRleHQ6IFwiUmVmbGVjdFwiLFxuICB9KTtcbiAgcmVmbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgcXVvdGUgc2VjdGlvblxuICAgIGNvbnN0IHF1b3RlU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVvdGVcIik7XG4gICAgaWYgKHF1b3RlU2VjdGlvbikgcXVvdGVTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmVldGluZyhzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgY29uc3QgbGFiZWxzID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscztcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpO1xuXG4gIGlmIChob3VyID49IDUgJiYgaG91ciA8IDEyKSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX21vcm5pbmcgPz8gXCJHb29kIG1vcm5pbmdcIjtcbiAgaWYgKGhvdXIgPj0gMTIgJiYgaG91ciA8IDE3KSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX2FmdGVybm9vbiA/PyBcIkdvb2QgYWZ0ZXJub29uXCI7XG4gIGlmIChob3VyID49IDE3ICYmIGhvdXIgPCAyMSkgcmV0dXJuIGxhYmVscy5ncmVldGluZ19ldmVuaW5nID8/IFwiR29vZCBldmVuaW5nXCI7XG4gIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfbmlnaHQgPz8gXCJHb29kIG5pZ2h0XCI7XG59XG5cbmZ1bmN0aW9uIGdldFN1YnRpdGxlKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGVuZ2luZTogT2xlbkVuZ2luZSk6IHN0cmluZyB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG5cbiAgLy8gVGFydGFydXNcbiAgaWYgKHNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICByZXR1cm4gXCJUaGUgdW5kZXJ3b3JsZCBhd2FpdHMgeW91ciBwZW5hbmNlLlwiO1xuICB9XG5cbiAgLy8gQm9zcyBkYW5nZXIgem9uZVxuICBpZiAoYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgIHJldHVybiBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuXCI7XG4gIH1cblxuICAvLyBBY3RpdmUgc3RyZWFrXG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGlmIChzdHJlYWsgPj0gMykge1xuICAgIHJldHVybiBgJHtzdHJlYWt9IGRheXMgc3Ryb25nLiBLZWVwIHRoZSBmbGFtZS5gO1xuICB9XG5cbiAgLy8gRGVmYXVsdFxuICByZXR1cm4gXCJTdGVwIGJ5IHN0ZXAsIHlvdSBzaGFwZSB5b3VyIHBhdGguXCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBFdWRhaW1vbmlhIEJhciBDb21wb25lbnRcbi8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXIsIHN0YXQgY2FyZHMsIGNhdGVnb3J5IHJvd3Mgd2l0aCBpY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQ0FURUdPUllfSUNPTlM6IFJlY29yZDxDYXRlZ29yeSwgc3RyaW5nPiA9IHtcbiAgYm9keTogXCJcXHV7MUYzQ0J9XCIsIC8vIHdlaWdodGxpZnRlclxuICBtaW5kOiBcIlxcdXsxRjREQX1cIiwgLy8gYm9va3NcbiAgc3Bpcml0OiBcIlxcdXsxRjU0QX1cIiwgLy8gZG92ZVxufTtcblxuY29uc3QgVE9UQUxfU0VHTUVOVFMgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFCYXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICAvLyAtLS0gMS4gRXVkYWltb25pYSBDYXJkIChzZWdtZW50ZWQgYmFyICsgY2hhcHRlcikgLS0tXG4gIHJlbmRlckV1ZGFpbW9uaWFDYXJkKGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlckluZGV4KTtcblxuICAvLyAtLS0gMi4gU3RhdCBDYXJkcyBSb3cgKHNlcGFyYXRlIGZyb20gdGhlIGNhcmQpIC0tLVxuICByZW5kZXJTdGF0Q2FyZHMoY29udGFpbmVyLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDEpO1xuXG4gIC8vIC0tLSAzLiBDYXRlZ29yaWVzIENhcmQgKGljb24gcm93cyB3aXRoIGJhcnMpIC0tLVxuICByZW5kZXJDYXRlZ29yaWVzQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDIpO1xufVxuXG4vLyAtLS0tIEV1ZGFpbW9uaWEgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEhlYWRlcjogdGl0bGUgKyBYUFxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtaGVhZGVyXCIgfSk7XG4gIGNvbnN0IGV1ZEluZGV4ID0gZW5naW5lLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuXG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS10aXRsZVwiLFxuICAgIHRleHQ6IGBFdWRhaW1vbmlhICR7dG9Sb21hbihldWRJbmRleCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG90YWxYUCA9IGVuZ2luZS5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wueHAsIDApO1xuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEteHBcIixcbiAgICB0ZXh0OiBgJHt0b3RhbFhQfSBYUGAsXG4gIH0pO1xuXG4gIC8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBlbmdpbmUuZ2V0RXVkYWltb25pYVByb2dyZXNzKCk7IC8vIDAtMTAwXG4gIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcihwcm9ncmVzcyAvIFRPVEFMX1NFR01FTlRTKTtcbiAgY29uc3QgaGFzUGFydGlhbCA9IHByb2dyZXNzICUgVE9UQUxfU0VHTUVOVFMgPiAwO1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRzXCIgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUT1RBTF9TRUdNRU5UUzsgaSsrKSB7XG4gICAgbGV0IGNscyA9IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRcIjtcbiAgICBpZiAoaSA8IGZpbGxlZFNlZ21lbnRzKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtZmlsbGVkXCI7XG4gICAgfSBlbHNlIGlmIChpID09PSBmaWxsZWRTZWdtZW50cyAmJiBoYXNQYXJ0aWFsKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtcGFydGlhbFwiO1xuICAgIH1cbiAgICBzZWdtZW50cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gIH1cblxuICAvLyBDaGFwdGVyIGxhYmVsXG4gIGNvbnN0IGNoYXB0ZXIgPSBlbmdpbmUuZ2V0Q2hhcHRlcigpO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWNoYXB0ZXJcIixcbiAgICB0ZXh0OiBgQ2hhcHRlciAke3RvUm9tYW4oY2hhcHRlci5udW1iZXIpfTogJHtjaGFwdGVyLm5hbWV9YCxcbiAgfSk7XG59XG5cbi8vIC0tLS0gU3RhdCBDYXJkcyAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclN0YXRDYXJkcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdHMtZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCB0b3RhbFRhc2tzID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcbiAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldE92ZXJhbGxTdHJlYWsoKTtcbiAgY29uc3QgcHJlc2VuY2UgPSBlbmdpbmUuZ2V0RGF5c09mUHJlc2VuY2UoKTtcblxuICAvLyBPYmplY3RpdmVzIGNhcmRcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUYzQUZ9XCIsIHRvdGFsVGFza3MsIFwiT2JqZWN0aXZlc1wiKTtcblxuICAvLyBTdHJlYWsgY2FyZCAod2l0aCBzdHJlYWsgZG90cylcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUY1MjV9XCIsIHN0cmVhaywgXCJTdHJlYWtcIiwgc3RyZWFrKTtcblxuICAvLyBDb25zaXN0ZW5jeSBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezI3Mjh9XCIsIHByZXNlbmNlLCBcIkNvbnNpc3RlbmN5XCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0Q2FyZChcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgaWNvbjogc3RyaW5nLFxuICB2YWx1ZTogbnVtYmVyLFxuICBsYWJlbDogc3RyaW5nLFxuICBzdHJlYWtEYXlzPzogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zdGF0LWNhcmRcIiB9KTtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWljb25cIiwgdGV4dDogaWNvbiB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC12YWx1ZVwiLCB0ZXh0OiBTdHJpbmcodmFsdWUpIH0pO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFN0cmVhayBkb3RzIChzaG93IGxhc3QgNyBkYXlzKVxuICBpZiAoc3RyZWFrRGF5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG90cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWRvdHNcIiB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgbGV0IGNscyA9IFwib2xlbi1zdGF0LWRvdFwiO1xuICAgICAgaWYgKGkgPCBzdHJlYWtEYXlzKSB7XG4gICAgICAgIGNscyArPSBcIiBvbGVuLXN0YXQtZG90LWFjdGl2ZVwiO1xuICAgICAgfVxuICAgICAgZG90cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0gQ2F0ZWdvcmllcyBDYXJkIC0tLS1cblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllc0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gRHluYW1pYyB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWR5bmFtaWMtdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG5cbiAgLy8gRGl2aWRlclxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBDYXRlZ29yeSByb3dzXG4gIGNvbnN0IGdyaWQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3JpZXMtZ3JpZFwiIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICB7IGtleTogXCJtaW5kXCIsIGxhYmVsOiBcIk1pbmRcIiB9LFxuICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICBdO1xuXG4gIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9IGVuZ2luZS5nZXRDYXRlZ29yeUxldmVsKGNhdC5rZXkpO1xuICAgIGNvbnN0IGNvbG9yID0gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV07XG5cbiAgICBjb25zdCByb3cgPSBncmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LXJvd1wiIH0pO1xuXG4gICAgLy8gSWNvbiBib3hcbiAgICBjb25zdCBpY29uQm94ID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWljb25cIiB9KTtcbiAgICBpY29uQm94LnN0eWxlLmJhY2tncm91bmQgPSBgJHtjb2xvcn0yMmA7IC8vIDEzJSBvcGFjaXR5IHRpbnRcbiAgICBpY29uQm94LnRleHRDb250ZW50ID0gQ0FURUdPUllfSUNPTlNbY2F0LmtleV07XG5cbiAgICAvLyBJbmZvIGNvbHVtblxuICAgIGNvbnN0IGluZm8gPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktaW5mb1wiIH0pO1xuXG4gICAgLy8gTmFtZSArIGxldmVsIHJvd1xuICAgIGNvbnN0IG5hbWVSb3cgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LW5hbWUtcm93XCIgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lXCIsIHRleHQ6IGNhdC5sYWJlbCB9KTtcbiAgICBuYW1lUm93LmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1jYXRlZ29yeS1sZXZlbC10ZXh0XCIsXG4gICAgICB0ZXh0OiBgTHYgJHtsZXZlbC5sZXZlbH0gXHUwMEI3ICR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9LzEwMGAsXG4gICAgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyBiYXJcbiAgICBjb25zdCBiYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhclwiIH0pO1xuICAgIGNvbnN0IGZpbGwgPSBiYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktYmFyLWZpbGxcIiB9KTtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9JWA7XG4gICAgZmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERpcmVjdGl2ZSBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBjYXJkIG9uIGRhc2hib2FyZCArIGV4cGFuZGVkIGJvdHRvbS1zaGVldCBvdmVybGF5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFByaW9yaXR5UmVhc29uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXJlY3RpdmVDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvbkVudGVyV29ya3NwYWNlPzogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHN1Z2dlc3Rpb24gPSBlbmdpbmUuZ2V0U3VnZ2VzdGlvbigpO1xuICBpZiAoIXN1Z2dlc3Rpb24pIHJldHVybjtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGlyZWN0aXZlX3RpdGxlID8/IFwiVEhFIERJUkVDVElWRVwiO1xuICBjb25zdCBiZWdpbkxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5iZWdpbl93b3Jrc3BhY2UgPz8gXCJFTlRFUiBXT1JLU1BBQ0VcIjtcbiAgY29uc3Qgbm90Tm93TGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLm5vdF9ub3cgPz8gXCJOT1QgTk9XXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ29tcGFjdCBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZCBvbGVuLWRpcmVjdGl2ZVwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXIgd2l0aCBiYWRnZVxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1oZWFkZXJcIiB9KTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYmFkZ2VcIiB9KTtcbiAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhZGdlQ29sb3Ioc3VnZ2VzdGlvbi5yZWFzb24pO1xuXG4gIC8vIEFjdGl2aXR5IGluZm9cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGl2aXR5XCIsXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICBjb25zdCBuZWdsZWN0VGV4dCA9IHN1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmUgPCA5OTlcbiAgICA/IGAke3N1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmV9IGRheXMgbmVnbGVjdGVkYFxuICAgIDogXCJOb3QgeWV0IHN0YXJ0ZWRcIjtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLW5lZ2xlY3RcIiwgdGV4dDogbmVnbGVjdFRleHQgfSk7XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBiZWdpbkJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogYmVnaW5MYWJlbCxcbiAgfSk7XG4gIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25FbnRlcldvcmtzcGFjZT8uKHN1Z2dlc3Rpb24uYWN0aXZpdHlJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdE5vd0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBub3ROb3dMYWJlbCxcbiAgfSk7XG4gIG5vdE5vd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIERpc21pc3MgdGhpcyBjYXJkIHdpdGggYSBmYWRlXG4gICAgY2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTEwcHgpXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zcyBlYXNlXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LCAzMDApO1xuICB9KTtcblxuICAvLyBUYXAgY2FyZCB0byBleHBhbmRcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dFeHBhbmRlZERpcmVjdGl2ZShjb250YWluZXIsIHNldHRpbmdzLCBzdWdnZXN0aW9uLCBiZWdpbkxhYmVsLCBub3ROb3dMYWJlbCwgb25FbnRlcldvcmtzcGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RXhwYW5kZWREaXJlY3RpdmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN1Z2dlc3Rpb246IHsgYWN0aXZpdHlJZDogc3RyaW5nOyBhY3Rpdml0eU5hbWU6IHN0cmluZzsgZW1vamk6IHN0cmluZzsgcmVhc29uOiBQcmlvcml0eVJlYXNvbjsgZGF5c1NpbmNlTGFzdERvbmU6IG51bWJlcjsgbG9yZVRleHQ6IHN0cmluZyB9LFxuICBiZWdpbkxhYmVsOiBzdHJpbmcsXG4gIG5vdE5vd0xhYmVsOiBzdHJpbmcsXG4gIG9uRW50ZXJXb3Jrc3BhY2U/OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgLy8gQ3JlYXRlIG92ZXJsYXlcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcblxuICAvLyBIYW5kbGUgYmFyXG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIC8vIFRpdGxlXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsXG4gICAgdGV4dDogc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kaXJlY3RpdmVfdGl0bGUgPz8gXCJUSEUgRElSRUNUSVZFXCIsXG4gIH0pO1xuXG4gIC8vIEFjdGl2aXR5IG5hbWVcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAyMnB4OyBtYXJnaW46IDE2cHggMCA4cHg7XCIgfSxcbiAgICB0ZXh0OiBgJHtzdWdnZXN0aW9uLmVtb2ppfSAke3N1Z2dlc3Rpb24uYWN0aXZpdHlOYW1lfWAsXG4gIH0pO1xuXG4gIC8vIE5lZ2xlY3QgZGVzY3JpcHRpb25cbiAgY29uc3QgbmVnbGVjdERlc2MgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gXG4gICAgOiBcIkEgbmV3IHBhdGggYXdhaXRzLiBUYWtlIHRoZSBmaXJzdCBzdGVwLlwiO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib2R5LWl0YWxpY1wiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTJweDtcIiB9LFxuICAgIHRleHQ6IG5lZ2xlY3REZXNjLFxuICB9KTtcblxuICAvLyBMb3JlIHRleHRcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXNoZWV0LWxvcmVcIixcbiAgICB0ZXh0OiBgXCIke3N1Z2dlc3Rpb24ubG9yZVRleHR9XCJgLFxuICB9KTtcblxuICAvLyBSYW5kb20gcXVvdGVcbiAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICBjb25zdCBxdW90ZVNlY3Rpb24gPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1xdW90ZVwiIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgfSk7XG4gIHF1b3RlU2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgfSk7XG5cbiAgLy8gQWN0aW9uc1xuICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcbiAgYWN0aW9ucy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgYWN0aW9ucy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgICBvbkVudGVyV29ya3NwYWNlPy4oc3VnZ2VzdGlvbi5hY3Rpdml0eUlkKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90Tm93QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgIHRleHQ6IG5vdE5vd0xhYmVsLFxuICB9KTtcbiAgbm90Tm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICAvLyBDbG9zZSBvbiBvdmVybGF5IHRhcFxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVNoZWV0KCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgLy8gQXBwZW5kIGFuZCBhbmltYXRlIGluXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJhZGdlQ29sb3IocmVhc29uOiBQcmlvcml0eVJlYXNvbik6IHN0cmluZyB7XG4gIHN3aXRjaCAocmVhc29uKSB7XG4gICAgY2FzZSBcImRlYXRoXCI6IHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgICBjYXNlIFwiYm9zc1wiOiByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgY2FzZSBcIm5lZ2xlY3RcIjogcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIGNhc2UgXCJ3ZWVrbHlcIjogcmV0dXJuIFwiIzNiODJmNlwiO1xuICAgIGNhc2UgXCJjaGFpblwiOiByZXR1cm4gXCIjOGI1Y2Y2XCI7XG4gICAgY2FzZSBcInRpbWVcIjogcmV0dXJuIFwiIzA2YjZkNFwiO1xuICAgIGNhc2UgXCJiYWxhbmNlZFwiOiByZXR1cm4gXCIjZmZmZmZmXCI7XG4gICAgZGVmYXVsdDogcmV0dXJuIFwiIzkyOGQ4NVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIFN0YXR1cyBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBib3NzIEhQIGJhciB3aXRoIHRpZXIgYW5kIHJhbmtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0Jvc3NFbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvc3NTdGF0dXNDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG4gIGNvbnN0IHN0YXR1cyA9IGJvc3NFbmdpbmUuZ2V0Qm9zc1N0YXR1cygpO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5ib3NzX3N0YXR1c190aXRsZSA/PyBcIkJPU1MgU1RBVFVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2FyZFxuICBjb25zdCBjYXJkQ2xzID0gc3RhdHVzLmluVGFydGFydXMgPyBcIm9sZW4tY2FyZC1jb21wYWN0IG9sZW4tY2FyZC10YXJ0YXJ1c1wiIDogXCJvbGVuLWNhcmQtY29tcGFjdFwiO1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogY2FyZENscyB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gUm93OiBlbW9qaSArIGluZm9cbiAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ib3NzLXJvd1wiIH0pO1xuXG4gIHJvdy5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWJvc3MtZW1vamlcIiwgdGV4dDogZ2V0Qm9zc0Vtb2ppKHN0YXR1cy50aWVyKSB9KTtcblxuICBjb25zdCBpbmZvID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWJvc3MtaW5mb1wiIH0pO1xuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYm9zcy1uYW1lXCIsIHRleHQ6IHN0YXR1cy5ib3NzLm5hbWUgfSk7XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWJvc3MtdGllclwiLFxuICAgIHRleHQ6IGBUaWVyICR7c3RhdHVzLnRpZXJ9IFx1MDBCNyAke3N0YXR1cy5yYW5rfWAsXG4gIH0pO1xuXG4gIC8vIEhQIGJhclxuICBjb25zdCBocEJhciA9IGluZm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taHAtYmFyXCIgfSk7XG4gIGNvbnN0IGhwRmlsbCA9IGhwQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhwLWJhci1maWxsXCIgfSk7XG4gIGhwRmlsbC5zdHlsZS53aWR0aCA9IGAke3N0YXR1cy5wZXJjZW50fSVgO1xuICBocEZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGJvc3NFbmdpbmUuZ2V0SFBDb2xvcihzdGF0dXMucGVyY2VudCk7XG5cbiAgLy8gSFAgdGV4dFxuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib3NzLWhwLXRleHRcIixcbiAgICB0ZXh0OiBgJHtzdGF0dXMuY3VycmVudEhQfS8ke3N0YXR1cy5tYXhIUH0gSFAgKCR7c3RhdHVzLnBlcmNlbnR9JSlgLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9zc0Vtb2ppKHRpZXI6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGVtb2ppczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgICAxOiBcIlxcdXsxRjQ3Qn1cIiwgMjogXCJcXHV7MUY5REN9XCIsIDM6IFwiXFx1ezFGNDA5fVwiLCA0OiBcIlxcdXsxRjQwMn1cIixcbiAgICA1OiBcIlxcdXsxRjQwRH1cIiwgNjogXCJcXHV7MUY5ODF9XCIsIDc6IFwiXFx1ezFGNTI1fVwiLCA4OiBcIlxcdXsxRjQzQX1cIixcbiAgICA5OiBcIlxcdXsxRjMwQX1cIiwgMTA6IFwiXFx1ezFGNDdGfVwiLCAxMTogXCJcXHV7MUYzMjl9XCIsIDEyOiBcIlxcdTIzMUJcIixcbiAgICAxMzogXCJcXHV7MUYzMDB9XCIsXG4gIH07XG4gIHJldHVybiBlbW9qaXNbdGllcl0gPz8gXCJcXHUyNjk0XFx1RkUwRlwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgV2Vla2x5IFJoeXRobSBDb21wb25lbnRcbi8vIDctZGF5IGJhciBjaGFydCB3aXRoIGNhdGVnb3J5IHN0YWNraW5nICsgc3RhdHMgcm93XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXZWVrbHlSaHl0aG0oXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMud2Vla2x5X3JoeXRobV90aXRsZSA/PyBcIldFRUtMWSBSSFlUSE1cIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBTdGF0cyByb3dcbiAgY29uc3Qgc3RhdHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0c1wiIH0pO1xuXG4gIGNvbnN0IGFjdGl2ZURheXMgPSBlbmdpbmUuZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk7XG4gIGNvbnN0IGJlc3REYXkgPSBlbmdpbmUuZ2V0QmVzdERheVRoaXNXZWVrKCk7XG4gIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSBlbmdpbmUuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuXG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIFN0cmluZyhhY3RpdmVEYXlzKSArIFwiLzdcIiwgXCJBY3RpdmUgZGF5c1wiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgYmVzdERheSwgXCJCZXN0IGRheVwiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgU3RyaW5nKHRvdGFsQ29tcGxldGlvbnMpLCBcIlRvdGFsXCIpO1xuXG4gIC8vIERpdmlkZXJcbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQmFyIGNoYXJ0XG4gIGNvbnN0IHdlZWtseURhdGEgPSBlbmdpbmUuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheVN0ciA9IG5ldyBEYXRlKG5vdykudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgLy8gRmluZCBtYXggdG90YWwgZm9yIHNjYWxpbmdcbiAgbGV0IG1heFRvdGFsID0gMTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla2x5RGF0YSkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgaWYgKHRvdGFsID4gbWF4VG90YWwpIG1heFRvdGFsID0gdG90YWw7XG4gIH1cblxuICBjb25zdCBiYXJzQ29udGFpbmVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyc1wiIH0pO1xuXG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtseURhdGEpIHtcbiAgICBjb25zdCBjb2wgPSBiYXJzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItY29sXCIgfSk7XG5cbiAgICAvLyBTdGFja2VkIGJhclxuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG5cbiAgICBjb25zdCBiYXJIZWlnaHQgPSBtYXhUb3RhbCA+IDAgPyBNYXRoLm1heCg0LCAodG90YWwgLyBtYXhUb3RhbCkgKiAxMDApIDogNDtcbiAgICBjb25zdCBiYXJFbCA9IGNvbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyXCIgfSk7XG4gICAgYmFyRWwuc3R5bGUuaGVpZ2h0ID0gYCR7YmFySGVpZ2h0fXB4YDtcbiAgICBiYXJFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjRweFwiO1xuXG4gICAgaWYgKGRheS5kYXRlID09PSB0b2RheVN0cikge1xuICAgICAgYmFyRWwuY2xhc3NMaXN0LmFkZChcIm9sZW4td2Vla2x5LWJhci10b2RheVwiKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhY2tlZCBzZWdtZW50c1xuICAgIGNvbnN0IGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXTtcbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBjb25zdCBjYXRDb3VudCA9IGRheS5jb21wbGV0aW9ucy5nZXQoY2F0KSA/PyAwO1xuICAgICAgaWYgKGNhdENvdW50ID09PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHNlZ0hlaWdodCA9IHRvdGFsID4gMCA/IChjYXRDb3VudCAvIHRvdGFsKSAqIDEwMCA6IDA7XG4gICAgICBjb25zdCBzZWcgPSBiYXJFbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyLXNlZ21lbnRcIiB9KTtcbiAgICAgIHNlZy5zdHlsZS5oZWlnaHQgPSBgJHtzZWdIZWlnaHR9JWA7XG4gICAgICBzZWcuc3R5bGUuYmFja2dyb3VuZCA9IGdldENhdGVnb3J5Q29sb3IoY2F0LCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gY29tcGxldGlvbnMsIHNob3cgZW1wdHkgYmFyXG4gICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICBiYXJFbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXCI7XG4gICAgfVxuXG4gICAgLy8gRGF5IGxhYmVsXG4gICAgY29sLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LWRheS1sYWJlbFwiLCB0ZXh0OiBkYXkuZGF5LmNoYXJBdCgwKSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWVrbHlTdGF0KHBhcmVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3Qgc3RhdCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdFwiIH0pO1xuICBzdGF0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXQtdmFsdWVcIiwgdGV4dDogdmFsdWUgfSk7XG4gIHN0YXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdC1sYWJlbFwiLCB0ZXh0OiBsYWJlbCB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlDb2xvcihjYXRlZ29yeTogQ2F0ZWdvcnksIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpOiBzdHJpbmcge1xuICByZXR1cm4gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQWN0aXZpdHkgR3JpZCBDb21wb25lbnRcbi8vIDItY29sdW1uIGdyaWQgb2YgYWN0aXZpdHkgY2FyZHMgd2l0aCBwcm9ncmVzcyByaW5nc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWN0aXZpdHlHcmlkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmFjdGl2aXR5X2dyaWRfdGl0bGUgPz8gXCJBQ1RJVklUSUVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gR3JpZCBjb250YWluZXJcbiAgY29uc3QgZ3JpZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1ncmlkXCIgfSk7XG4gIGdyaWQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBzZXR0aW5ncy5kZXZDb25maWcuYWN0aXZpdHlHcmlkQ29sdW1ucyA/PyAyO1xuICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y29sdW1uc30sIDFmcilgO1xuXG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBlbmdpbmUuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcblxuICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICBjb25zdCBjYXJkID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1jYXJkXCIgfSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgYmFyXG4gICAgY29uc3QgYWNjZW50ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2FjdGl2aXR5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcblxuICAgIC8vIFRvcCByb3c6IGVtb2ppICsgc3RhdHVzIGRvdFxuICAgIGNvbnN0IHRvcCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktdG9wXCIgfSk7XG4gICAgdG9wLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktZW1vamlcIiwgdGV4dDogYWN0aXZpdHkuZW1vamkgfSk7XG5cbiAgICBjb25zdCBkYXlzU2luY2UgPSBlbmdpbmUuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgIGNvbnN0IGRvdENscyA9IGdldERvdENsYXNzKGRheXNTaW5jZSk7XG4gICAgdG9wLmNyZWF0ZURpdih7IGNsczogYG9sZW4tYWN0aXZpdHktZG90ICR7ZG90Q2xzfWAgfSk7XG5cbiAgICAvLyBBY3Rpdml0eSBuYW1lXG4gICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFjdGl2aXR5LW5hbWVcIiwgdGV4dDogYWN0aXZpdHkubmFtZSB9KTtcblxuICAgIC8vIFdlZWtseSBwcm9ncmVzc1xuICAgIGNvbnN0IHByb2dyZXNzID0gZW5naW5lLmdldFdlZWtseVByb2dyZXNzKGFjdGl2aXR5LmlkKTtcbiAgICBjb25zdCBwcm9ncmVzc1JvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3NcIiB9KTtcblxuICAgIC8vIFByb2dyZXNzIHJpbmcgKFNWRylcbiAgICBjb25zdCByaW5nID0gY3JlYXRlUHJvZ3Jlc3NSaW5nKHByb2dyZXNzLmRvbmUsIHByb2dyZXNzLnRhcmdldCwgc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbYWN0aXZpdHkuY2F0ZWdvcnldKTtcbiAgICBwcm9ncmVzc1Jvdy5hcHBlbmRDaGlsZChyaW5nKTtcblxuICAgIHByb2dyZXNzUm93LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzLXRleHRcIixcbiAgICAgIHRleHQ6IGAke3Byb2dyZXNzLmRvbmV9IG9mICR7cHJvZ3Jlc3MudGFyZ2V0fWAsXG4gICAgfSk7XG5cbiAgICAvLyBTdHJlYWtcbiAgICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0QWN0aXZpdHlTdHJlYWsoYWN0aXZpdHkuaWQpO1xuICAgIGlmIChzdHJlYWsgPiAwKSB7XG4gICAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tYWN0aXZpdHktc3RyZWFrXCIsXG4gICAgICAgIHRleHQ6IGAke3N0cmVha30gZGF5IHN0cmVha2AsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RG90Q2xhc3MoZGF5c1NpbmNlOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoZGF5c1NpbmNlID09PSAwKSByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1ncmVlblwiO1xuICBpZiAoZGF5c1NpbmNlIDw9IDEpIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LXllbGxvd1wiO1xuICByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1yZWRcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NSaW5nKGRvbmU6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcbiAgY29uc3Qgc2l6ZSA9IDI0O1xuICBjb25zdCBzdHJva2VXaWR0aCA9IDIuNTtcbiAgY29uc3QgcmFkaXVzID0gKHNpemUgLSBzdHJva2VXaWR0aCkgLyAyO1xuICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiByYWRpdXM7XG4gIGNvbnN0IHBlcmNlbnQgPSB0YXJnZXQgPiAwID8gTWF0aC5taW4oMSwgZG9uZSAvIHRhcmdldCkgOiAwO1xuICBjb25zdCBkYXNoT2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAqICgxIC0gcGVyY2VudCk7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoc2l6ZSkpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhzaXplKSk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHtzaXplfSAke3NpemV9YCk7XG4gIHN2Zy5jbGFzc0xpc3QuYWRkKFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzcy1yaW5nXCIpO1xuXG4gIC8vIEJhY2tncm91bmQgY2lyY2xlXG4gIGNvbnN0IGJnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHN2Zy5hcHBlbmRDaGlsZChiZ0NpcmNsZSk7XG5cbiAgLy8gUHJvZ3Jlc3MgY2lyY2xlXG4gIGNvbnN0IHByb2dyZXNzQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgY29sb3IpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgU3RyaW5nKGNpcmN1bWZlcmVuY2UpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgU3RyaW5nKGRhc2hPZmZzZXQpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoLTkwICR7c2l6ZSAvIDJ9ICR7c2l6ZSAvIDJ9KWApO1xuICBzdmcuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NDaXJjbGUpO1xuXG4gIHJldHVybiBzdmc7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGUgQ2hpcHMgQ29tcG9uZW50XG4vLyBIb3Jpem9udGFsIHNjcm9sbGFibGUgY2hpcHMgZm9yIHNlbGYtY2FyZSB0YXNrIHRyYWNraW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFRlbXBsZVRhc2sgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRlbXBsZUNoaXBzKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25UZW1wbGVVcGRhdGU6ICh0YXNrSWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGlmICghc2V0dGluZ3MudGVtcGxlVGFza3MgfHwgc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLnRlbXBsZV90aXRsZSA/PyBcIlRIRSBURU1QTEVcIjtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcblxuICAvLyBTZWN0aW9uXG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxlLXNlY3Rpb25cIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gVGl0bGVcbiAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2hpcHMgY29udGFpbmVyXG4gIGNvbnN0IGNoaXBzID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcHNcIiB9KTtcbiAgY2hpcHMuc3R5bGUubWFyZ2luVG9wID0gXCI4cHhcIjtcblxuICBmb3IgKGNvbnN0IHRhc2sgb2Ygc2V0dGluZ3MudGVtcGxlVGFza3MpIHtcbiAgICBjb25zdCBzdGF0dXMgPSBnZXRUYXNrU3RhdHVzKHRhc2ssIG5vdyk7XG5cbiAgICBjb25zdCBjaGlwQ2xzID0gYG9sZW4tdGVtcGxlLWNoaXAgJHtzdGF0dXMuY2hpcENsYXNzfWA7XG4gICAgY29uc3QgY2hpcCA9IGNoaXBzLmNyZWF0ZURpdih7IGNsczogY2hpcENscyB9KTtcblxuICAgIGNoaXAuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXAtZW1vamlcIiwgdGV4dDogdGFzay5lbW9qaSB9KTtcbiAgICBjaGlwLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwLXRleHRcIiwgdGV4dDogYCR7dGFzay5uYW1lfSBcdTAwQjcgJHtzdGF0dXMudGV4dH1gIH0pO1xuXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb25UZW1wbGVVcGRhdGUodGFzay5pZCk7XG4gICAgICAvLyBWaXN1YWwgZmVlZGJhY2tcbiAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwLjkpXCI7XG4gICAgICBjaGlwLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgY2hpcC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFRhc2tTdGF0dXMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNoaXBDbGFzczogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrU3RhdHVzKHRhc2s6IFRlbXBsZVRhc2ssIG5vdzogRGF0ZSk6IFRhc2tTdGF0dXMge1xuICBpZiAoIXRhc2subGFzdENvbXBsZXRlZCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZSh0YXNrLmxhc3RDb21wbGV0ZWQpO1xuICBjb25zdCBtc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gIGNvbnN0IGRheXNTaW5jZSA9IE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSBsYXN0LmdldFRpbWUoKSkgLyBtc1BlckRheSk7XG4gIGNvbnN0IGRheXNVbnRpbER1ZSA9IHRhc2suaW50ZXJ2YWxEYXlzIC0gZGF5c1NpbmNlO1xuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMSkge1xuICAgIHJldHVybiB7IHRleHQ6IFwiZHVlIHRvZGF5XCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLXdhcm5cIiB9O1xuICB9XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAyKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogYGR1ZSBpbiAke2RheXNVbnRpbER1ZX1kYCwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtd2FyblwiIH07XG4gIH1cblxuICByZXR1cm4geyB0ZXh0OiBgaW4gJHtkYXlzVW50aWxEdWV9ZGAsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW9rXCIgfTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFF1b3RlIEZvb3RlciBDb21wb25lbnRcbi8vIFJvdGF0aW5nIHN0b2ljIHF1b3RlIGF0IHRoZSBib3R0b20gb2YgdGhlIGRhc2hib2FyZFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJRdW90ZUZvb3RlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHF1b3RlID0gZ2V0UXVvdGUoYXBwLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1xdW90ZVwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgdGV4dDogYFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgfSk7XG5cbiAgaWYgKHF1b3RlLmF0dHJpYnV0aW9uKSB7XG4gICAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFF1b3RlIHtcbiAgdGV4dDogc3RyaW5nO1xuICBhdHRyaWJ1dGlvbjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRRdW90ZShcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiBRdW90ZSB7XG4gIC8vIFRyeSB2YXVsdCBmb2xkZXIgcXVvdGVzIGZpcnN0XG4gIGlmIChzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpIHtcbiAgICBjb25zdCB2YXVsdFF1b3RlcyA9IGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwLCBzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpO1xuICAgIGlmICh2YXVsdFF1b3Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcGlja1F1b3RlKHZhdWx0UXVvdGVzLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbGJhY2sgdG8gaGFyZGNvZGVkIHF1b3Rlc1xuICByZXR1cm4gcGlja1F1b3RlKEZBTExCQUNLX1FVT1RFUywgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xufVxuXG5mdW5jdGlvbiBwaWNrUXVvdGUoXG4gIHF1b3RlczogUXVvdGVbXSxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IFF1b3RlIHtcbiAgaWYgKHF1b3Rlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIlRoZSB1bmV4YW1pbmVkIGxpZmUgaXMgbm90IHdvcnRoIGxpdmluZy5cIiwgYXR0cmlidXRpb246IFwiU29jcmF0ZXNcIiB9O1xuICB9XG5cbiAgLy8gQXZvaWQgcmVjZW50bHkgc2hvd24gcXVvdGVzXG4gIGNvbnN0IHJlY2VudElkcyA9IHNldHRpbmdzLnJlY2VudFF1b3RlSWRzID8/IFtdO1xuICBjb25zdCBhdmFpbGFibGUgPSBxdW90ZXNcbiAgICAubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKVxuICAgIC5maWx0ZXIoKHsgaSB9KSA9PiAhcmVjZW50SWRzLmluY2x1ZGVzKGkpKTtcblxuICBjb25zdCBwb29sID0gYXZhaWxhYmxlLmxlbmd0aCA+IDAgPyBhdmFpbGFibGUgOiBxdW90ZXMubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKTtcbiAgY29uc3QgcGljayA9IHBvb2xbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9vbC5sZW5ndGgpXTtcblxuICAvLyBUcmFjayByZWNlbnQgKGtlZXAgbGFzdCA1KVxuICBjb25zdCBuZXdSZWNlbnQgPSBbLi4ucmVjZW50SWRzLCBwaWNrLmldLnNsaWNlKC1NYXRoLm1pbig1LCBNYXRoLmZsb29yKHF1b3Rlcy5sZW5ndGggLyAyKSkpO1xuICBvblNldHRpbmdzVXBkYXRlKHtcbiAgICBsYXN0UXVvdGVJbmRleDogcGljay5pLFxuICAgIHJlY2VudFF1b3RlSWRzOiBuZXdSZWNlbnQsXG4gIH0pO1xuXG4gIHJldHVybiBwaWNrLnE7XG59XG5cbmZ1bmN0aW9uIGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwOiBBcHAsIGZvbGRlclBhdGg6IHN0cmluZyk6IFF1b3RlW10ge1xuICBjb25zdCBxdW90ZXM6IFF1b3RlW10gPSBbXTtcbiAgY29uc3QgYWJzdHJhY3RGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXJQYXRoKTtcbiAgaWYgKCFhYnN0cmFjdEZpbGUpIHJldHVybiBxdW90ZXM7XG5cbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcigoZikgPT5cbiAgICBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpXG4gICk7XG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgY29udGludWU7XG5cbiAgICAvLyBPbmUgcXVvdGUgcGVyIGZpbGUgKGRlZmF1bHQgbW9kZSlcbiAgICBjb25zdCBuYW1lID0gZmlsZS5iYXNlbmFtZTtcbiAgICBjb25zdCBwYXJ0cyA9IHNwbGl0QXR0cmlidXRpb24obmFtZSk7XG4gICAgcXVvdGVzLnB1c2gocGFydHMpO1xuICB9XG5cbiAgcmV0dXJuIHF1b3Rlcztcbn1cblxuZnVuY3Rpb24gc3BsaXRBdHRyaWJ1dGlvbih0ZXh0OiBzdHJpbmcpOiBRdW90ZSB7XG4gIC8vIENoZWNrIGZvciBlbS1kYXNoIGF0dHJpYnV0aW9uXG4gIGNvbnN0IGRhc2hJbmRleCA9IHRleHQubGFzdEluZGV4T2YoXCIgXHUyMDE0IFwiKTtcbiAgaWYgKGRhc2hJbmRleCA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGV4dC5zbGljZSgwLCBkYXNoSW5kZXgpLnRyaW0oKSxcbiAgICAgIGF0dHJpYnV0aW9uOiB0ZXh0LnNsaWNlKGRhc2hJbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgaHlwaGVuSW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIC0gXCIpO1xuICBpZiAoaHlwaGVuSW5kZXggPiB0ZXh0Lmxlbmd0aCAqIDAuNSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0ZXh0LnNsaWNlKDAsIGh5cGhlbkluZGV4KS50cmltKCksXG4gICAgICBhdHRyaWJ1dGlvbjogdGV4dC5zbGljZShoeXBoZW5JbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogdGV4dC50cmltKCksIGF0dHJpYnV0aW9uOiBcIlwiIH07XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXkgVGltZWxpbmUgQ29tcG9uZW50XG4vLyBWZXJ0aWNhbCBjb2xvcmVkIHRpbWVsaW5lIG9mIHRoZSBkYXkncyBwbGFubmVkIGFjdGl2aXRpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgRGF5TWFwRW50cnksIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEYXlUaW1lbGluZShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiB7XG4gICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Ta2lwOiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJEb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyUG9zdHBvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ3JlYXRlRXZlbnQ/OiAoKSA9PiB2b2lkO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRheW1hcF90aXRsZSA/PyBcIllPVVIgREFZXCI7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldEhvdXJzKCkgKyBub3cuZ2V0TWludXRlcygpIC8gNjA7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gVGltZWxpbmUgY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQgb2xlbi10aW1lbGluZS1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEdldCBkYXkgbWFwIGVudHJpZXNcbiAgY29uc3QgZW50cmllcyA9IGVuZ2luZS5nZXREYXlNYXAoKTtcblxuICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWVtcHR5XCIsXG4gICAgICB0ZXh0OiBcIk5vIGFjdGl2aXRpZXMgc2NoZWR1bGVkLiBBIHJhcmUgZGF5IG9mIHJlc3QuXCIsXG4gICAgfSk7XG4gICAgcmVuZGVyVGltZWxpbmVGb290ZXIoY2FyZCwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3Mub25DcmVhdGVFdmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gVGltZWxpbmUgY29udGFpbmVyXG4gIGNvbnN0IHRpbWVsaW5lID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZVwiIH0pO1xuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIHJlbmRlclRpbWVsaW5lRW50cnkoXG4gICAgICB0aW1lbGluZSwgZW50cnksIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzXG4gICAgKTtcbiAgfVxuXG4gIC8vIEZvb3RlclxuICByZW5kZXJUaW1lbGluZUZvb3RlcihjYXJkLCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrcy5vbkNyZWF0ZUV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVFbnRyeShcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgZW50cnk6IERheU1hcEVudHJ5LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBjYWxsYmFja3M6IHtcbiAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblNraXA6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhckRvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJQb3N0cG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gIH1cbik6IHZvaWQge1xuICBjb25zdCBpc0NhbGVuZGFyID0gZW50cnkuaXNDYWxlbmRhclRhc2sgPT09IHRydWU7XG4gIGNvbnN0IGNvbG9yID0gaXNDYWxlbmRhciA/IFwiIzVlN2E5YVwiIDogKHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2VudHJ5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIik7XG4gIGNvbnN0IGlzQ3VycmVudCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LnN0YXJ0SG91ciAmJiBjdXJyZW50SG91ciA8IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzUGFzdCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzRG9uZSA9IGVudHJ5LnN0YXR1cyA9PT0gXCJkb25lXCI7XG4gIGNvbnN0IGlzU2tpcHBlZCA9IGVudHJ5LnN0YXR1cyA9PT0gXCJza2lwcGVkXCI7XG5cbiAgLy8gRGV0ZXJtaW5lIHZpc3VhbCBzdGF0ZVxuICBsZXQgc3RhdGVDbHMgPSBcIm9sZW4tdGltZWxpbmUtZW50cnlcIjtcbiAgaWYgKGlzQ2FsZW5kYXIpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtY2FsZW5kYXJcIjtcbiAgaWYgKGlzRG9uZSkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1kb25lXCI7XG4gIGVsc2UgaWYgKGlzU2tpcHBlZCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1za2lwcGVkXCI7XG4gIGVsc2UgaWYgKGlzQ3VycmVudCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1jdXJyZW50XCI7XG4gIGVsc2UgaWYgKGlzUGFzdCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1wYXN0XCI7XG5cbiAgY29uc3Qgcm93ID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogc3RhdGVDbHMgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgY29sb3IgYmFyIChjYWxlbmRhciB0YXNrcyBnZXQgYSBkaXN0aW5jdCBkYXNoZWQgc3R5bGUpXG4gIGNvbnN0IGJhciA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1iYXJcIiB9KTtcbiAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgaWYgKGlzQ2FsZW5kYXIgJiYgIWlzRG9uZSkge1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKFwib2xlbi10aW1lbGluZS1iYXItY2FsZW5kYXJcIik7XG4gIH1cbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBiYXIuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAxMnB4ICR7Y29sb3J9YDtcbiAgfVxuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1jb250ZW50XCIgfSk7XG5cbiAgLy8gVG9wIGxpbmU6IHRpbWUgKyBkdXJhdGlvbiArIHNvdXJjZSBiYWRnZSBmb3IgY2FsZW5kYXIgdGFza3NcbiAgY29uc3QgdGltZUxpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLXRpbWVcIiB9KTtcbiAgdGltZUxpbmUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXRIb3VyKGVudHJ5LnN0YXJ0SG91cil9IFx1MjAxMyAke2Zvcm1hdEhvdXIoZW50cnkuZW5kSG91cil9IFx1MDBCNyAke2VudHJ5LmVzdGltYXRlZER1cmF0aW9ufW1gO1xuXG4gIGlmIChpc0NhbGVuZGFyICYmIGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgY29uc3QgYmFkZ2UgPSB0aW1lTGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1zb3VyY2UtYmFkZ2VcIiB9KTtcbiAgICBzd2l0Y2ggKGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiTm90ZVwiOyBicmVhaztcbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIlRhc2tcIjsgYnJlYWs7XG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiUXVpY2tcIjsgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0aXZpdHkgbGluZTogZW1vamkgKyBuYW1lXG4gIGNvbnN0IGFjdExpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWFjdGl2aXR5XCIgfSk7XG4gIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtZW1vamlcIiwgdGV4dDogZW50cnkuZW1vamkgfSk7XG4gIGNvbnN0IG5hbWVFbCA9IGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICBjbHM6IFwib2xlbi10aW1lbGluZS1uYW1lXCIsXG4gICAgdGV4dDogZW50cnkuYWN0aXZpdHlOYW1lLFxuICB9KTtcblxuICAvLyBTdHJpa2V0aHJvdWdoIGZvciBkb25lL3NraXBwZWRcbiAgaWYgKGlzRG9uZSB8fCBpc1NraXBwZWQpIHtcbiAgICBuYW1lRWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgIG5hbWVFbC5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgfVxuXG4gIC8vIFN0YXR1cyBpbmRpY2F0b3JcbiAgaWYgKGlzRG9uZSkge1xuICAgIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtY2hlY2tcIiwgdGV4dDogXCJcXHUyNzEzXCIgfSk7XG4gIH0gZWxzZSBpZiAoaXNTa2lwcGVkKSB7XG4gICAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1za2lwLW1hcmtcIiwgdGV4dDogXCJcXHUyMDEzXCIgfSk7XG4gIH1cblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBpZiAoIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgaWYgKGlzQ2FsZW5kYXIpIHtcbiAgICAgIC8vIENhbGVuZGFyIHRhc2tzOiBEb25lICsgUG9zdHBvbmVcbiAgICAgIGNvbnN0IGRvbmVCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQ2FsZW5kYXJEb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBvc3Rwb25lQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1wb3N0cG9uZVwiLFxuICAgICAgICB0ZXh0OiBcIlxcdTIzRTlcIixcbiAgICAgICAgYXR0cjogeyB0aXRsZTogXCJQb3N0cG9uZSB0byB0b21vcnJvd1wiIH0sXG4gICAgICB9KTtcbiAgICAgIHBvc3Rwb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25DYWxlbmRhclBvc3Rwb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFjdGl2aXR5IGVudHJpZXM6IEJlZ2luL0RvbmUgKyBTa2lwXG4gICAgICBjb25zdCBhY2NlcHRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBpc0N1cnJlbnQgPyBcIkJlZ2luXCIgOiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgYWNjZXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25BY2NlcHQoZW50cnkuYWN0aXZpdHlJZCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2tpcEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tc2tpcFwiLFxuICAgICAgICB0ZXh0OiBcIlNraXBcIixcbiAgICAgIH0pO1xuICAgICAgc2tpcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uU2tpcChlbnRyeS5hY3Rpdml0eUlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEN1cnJlbnQgdGltZSBpbmRpY2F0b3JcbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBjb25zdCBpbmRpY2F0b3IgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtbm93XCIgfSk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAoY3VycmVudEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpIC8gKGVudHJ5LmVuZEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpO1xuICAgIGluZGljYXRvci5zdHlsZS50b3AgPSBgJHtNYXRoLm1pbigxMDAsIE1hdGgubWF4KDAsIHByb2dyZXNzICogMTAwKSl9JWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVGb290ZXIoXG4gIGNhcmQ6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBvbkNyZWF0ZUV2ZW50PzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IGVuZE9mRGF5ID0gc2V0dGluZ3MuZGV2Q29uZmlnLmV2ZW5pbmdFbmQ7XG4gIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIGVuZE9mRGF5IC0gY3VycmVudEhvdXIpO1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IocmVtYWluaW5nKTtcbiAgY29uc3QgbWlucyA9IE1hdGgucm91bmQoKHJlbWFpbmluZyAtIGhvdXJzKSAqIDYwKTtcblxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICBjb25zdCBmb290ZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3RlclwiIH0pO1xuICBmb290ZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3Rlci10ZXh0XCIsXG4gICAgdGV4dDogYEVuZCBvZiBkYXk6ICR7aG91cnN9aCAke21pbnN9bSByZW1haW5pbmdgLFxuICB9KTtcblxuICBpZiAob25DcmVhdGVFdmVudCkge1xuICAgIGNvbnN0IGJ0biA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tY3JlYXRlXCIsXG4gICAgICB0ZXh0OiBcIisgQ3JlYXRlIGV2ZW50XCIsXG4gICAgfSk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvbkNyZWF0ZUV2ZW50KCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIoaDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGgpO1xuICBjb25zdCBtaW5zID0gTWF0aC5yb3VuZCgoaCAtIGhvdXJzKSAqIDYwKTtcbiAgY29uc3QgcGVyaW9kID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gIGNvbnN0IGRpc3BsYXlIb3VyID0gaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycyA9PT0gMCA/IDEyIDogaG91cnM7XG4gIGlmIChtaW5zID09PSAwKSByZXR1cm4gYCR7ZGlzcGxheUhvdXJ9JHtwZXJpb2R9YDtcbiAgcmV0dXJuIGAke2Rpc3BsYXlIb3VyfToke1N0cmluZyhtaW5zKS5wYWRTdGFydCgyLCBcIjBcIil9JHtwZXJpb2R9YDtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFN0cmVuZ3RoIEhlYXRtYXAgQ29tcG9uZW50XG4vLyBJbnRlcmFjdGl2ZSBtdXNjbGUgZmlndXJlIHNob3dpbmcgd29ya291dCBpbnRlbnNpdHkgcGVyIG11c2NsZVxuLy8gQ2xpY2thYmxlIG11c2NsZXMgb3BlbiBwcm9ncmVzcyBncmFwaHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENvbXBsZXRpb25NYXAsIEdlbmRlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBNdXNjbGVHcm91cElkIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTVVTQ0xFX0dST1VQX0xBQkVMUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLy8gLS0tIE11c2NsZSByZWdpb24gaGl0LWJveGVzIChwZXJjZW50YWdlLWJhc2VkIGZvciBmcm9udC9iYWNrIHZpZXdzKSAtLS1cbi8vIEVhY2ggcmVnaW9uOiBbeCUsIHklLCB3aWR0aCUsIGhlaWdodCVdIHJlbGF0aXZlIHRvIGZpZ3VyZSBib3VuZGluZyBib3hcblxuaW50ZXJmYWNlIE11c2NsZVJlZ2lvbiB7XG4gIGlkOiBNdXNjbGVHcm91cElkO1xuICBmcm9udD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIGJhY2s/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xufVxuXG5jb25zdCBNVVNDTEVfUkVHSU9OUzogTXVzY2xlUmVnaW9uW10gPSBbXG4gIC8vIEhlYWQvbmVjayBhcmVhXG4gIHsgaWQ6IFwibmVja1wiLCAgICAgICBmcm9udDogeyB4OiA0MCwgeTogOCwgdzogMjAsIGg6IDUgfSB9LFxuICB7IGlkOiBcInRyYXBzXCIsICAgICAgYmFjazogIHsgeDogMzAsIHk6IDExLCB3OiA0MCwgaDogNyB9IH0sXG4gIC8vIFVwcGVyIGJvZHlcbiAgeyBpZDogXCJzaG91bGRlcnNcIiwgIGZyb250OiB7IHg6IDE4LCB5OiAxNCwgdzogMTQsIGg6IDggfSwgICBiYWNrOiB7IHg6IDE4LCB5OiAxNCwgdzogMTQsIGg6IDggfSB9LFxuICB7IGlkOiBcImNoZXN0XCIsICAgICAgZnJvbnQ6IHsgeDogMzAsIHk6IDE2LCB3OiA0MCwgaDogMTAgfSB9LFxuICB7IGlkOiBcImxhdHNcIiwgICAgICAgYmFjazogIHsgeDogMjQsIHk6IDE5LCB3OiA1MiwgaDogMTIgfSB9LFxuICB7IGlkOiBcImJhY2tcIiwgICAgICAgYmFjazogIHsgeDogMzIsIHk6IDMyLCB3OiAzNiwgaDogMTAgfSB9LFxuICAvLyBBcm1zXG4gIHsgaWQ6IFwiYmljZXBzXCIsICAgICBmcm9udDogeyB4OiAxNCwgeTogMjMsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwidHJpY2Vwc1wiLCAgICBiYWNrOiAgeyB4OiAxNCwgeTogMjMsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwiZm9yZWFybXNcIiwgICBmcm9udDogeyB4OiAxMCwgeTogMzYsIHc6IDEyLCBoOiAxMiB9LCAgYmFjazogeyB4OiAxMCwgeTogMzYsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIC8vIENvcmVcbiAgeyBpZDogXCJhYnNcIiwgICAgICAgIGZyb250OiB7IHg6IDM1LCB5OiAyNywgdzogMzAsIGg6IDE2IH0gfSxcbiAgeyBpZDogXCJvYmxpcXVlc1wiLCAgIGZyb250OiB7IHg6IDI0LCB5OiAzMCwgdzogMTAsIGg6IDEyIH0gfSxcbiAgeyBpZDogXCJnbHV0ZXNcIiwgICAgIGJhY2s6ICB7IHg6IDMwLCB5OiA0MywgdzogNDAsIGg6IDEwIH0gfSxcbiAgLy8gTGVnc1xuICB7IGlkOiBcInF1YWRzXCIsICAgICAgZnJvbnQ6IHsgeDogMjUsIHk6IDQ4LCB3OiA1MCwgaDogMTggfSB9LFxuICB7IGlkOiBcImhhbXN0cmluZ3NcIiwgYmFjazogIHsgeDogMjUsIHk6IDU0LCB3OiA1MCwgaDogMTYgfSB9LFxuICB7IGlkOiBcImNhbHZlc1wiLCAgICAgZnJvbnQ6IHsgeDogMjgsIHk6IDcyLCB3OiA0NCwgaDogMTQgfSwgIGJhY2s6IHsgeDogMjgsIHk6IDcyLCB3OiA0NCwgaDogMTQgfSB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBIZWF0bWFwQ2FsbGJhY2tzIHtcbiAgb25NdXNjbGVDbGljazogKG11c2NsZUlkOiBNdXNjbGVHcm91cElkKSA9PiB2b2lkO1xuICBvblByb2dyZXNzQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RyZW5ndGhIZWF0bWFwKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiBIZWF0bWFwQ2FsbGJhY2tzLFxuICBhcHA/OiBBcHBcbik6IHZvaWQge1xuICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlYXRtYXAtc2VjdGlvblwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBGaWd1cmUgY29udGFpbmVyXG4gIGNvbnN0IGdlbmRlciA9IHNldHRpbmdzLnBlcnNvbmFsU3RhdHMuZ2VuZGVyO1xuICBjb25zdCBmaWd1cmVXcmFwID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWZpZ3VyZXNcIiB9KTtcblxuICAvLyBHYXRoZXIgbXVzY2xlIGludGVuc2l0eSBkYXRhIGZyb20gd29ya291dCBjb21wbGV0aW9uc1xuICBjb25zdCBtdXNjbGVEYXRhID0gZ2F0aGVyTXVzY2xlSW50ZW5zaXR5KGVuZ2luZSwgY29tcGxldGlvbkRhdGEsIHNldHRpbmdzKTtcblxuICAvLyBUcnkgdG8gbG9hZCBhY3R1YWwgU1ZHIGZpbGUsIHRoZW4gcmVuZGVyIGZpZ3VyZVxuICBjb25zdCBzdmdGaWxlTmFtZSA9IGdlbmRlciA9PT0gXCJmZW1hbGVcIiA/IFwiTXVzY2xlIFdvbWFuLnN2Z1wiIDogXCJNdXNjbGUgTWFuLnN2Z1wiO1xuICBpZiAoYXBwKSB7XG4gICAgbG9hZFN2Z0Zyb21WYXVsdChhcHAsIHN2Z0ZpbGVOYW1lKS50aGVuKChzdmdDb250ZW50KSA9PiB7XG4gICAgICBpZiAoc3ZnQ29udGVudCkge1xuICAgICAgICByZW5kZXJTdmdGaWd1cmVXaXRoT3ZlcmxheShmaWd1cmVXcmFwLCBzdmdDb250ZW50LCBtdXNjbGVEYXRhLCBjYWxsYmFja3Mub25NdXNjbGVDbGljayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGYWxsYmFjayB0byBwcm9ncmFtbWF0aWNcbiAgICAgICAgcmVuZGVyTXVzY2xlRmlndXJlKGZpZ3VyZVdyYXAsIFwiZnJvbnRcIiwgZ2VuZGVyLCBtdXNjbGVEYXRhLCBjYWxsYmFja3Mub25NdXNjbGVDbGljayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyTXVzY2xlRmlndXJlKGZpZ3VyZVdyYXAsIFwiZnJvbnRcIiwgZ2VuZGVyLCBtdXNjbGVEYXRhLCBjYWxsYmFja3Mub25NdXNjbGVDbGljayk7XG4gIH1cblxuICAvLyBCdXR0b25zIGJlbG93IHRoZSBmaWd1cmVcbiAgY29uc3QgYWN0aW9ucyA9IHNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1hY3Rpb25zXCIgfSk7XG5cbiAgY29uc3QgcHJvZ3Jlc3NCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4taGVhdG1hcC1idG5cIixcbiAgICB0ZXh0OiBcIlByb2dyZXNzXCIsXG4gIH0pO1xuICBwcm9ncmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2tzLm9uUHJvZ3Jlc3NDbGljaygpKTtcblxuICBjb25zdCB3b3Jrb3V0QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1oZWF0bWFwLWJ0blwiLFxuICAgIHRleHQ6IFwiU3RhcnQgTmV3IFdvcmtvdXRcIixcbiAgfSk7XG4gIHdvcmtvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNhbGxiYWNrcy5vblN0YXJ0V29ya291dCgpKTtcbn1cblxuLy8gLS0tIExvYWQgYWN0dWFsIFNWRyBmcm9tIHZhdWx0IC0tLVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkU3ZnRnJvbVZhdWx0KGFwcDogQXBwLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5hZGFwdGVyLnJlYWQoZmlsZU5hbWUpO1xuICAgIHJldHVybiBjb250ZW50IHx8IG51bGw7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIC0tLSBSZW5kZXIgYWN0dWFsIFNWRyB3aXRoIG92ZXJsYXkgaG90c3BvdHMgLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclN2Z0ZpZ3VyZVdpdGhPdmVybGF5KFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBzdmdDb250ZW50OiBzdHJpbmcsXG4gIG11c2NsZURhdGE6IE1hcDxNdXNjbGVHcm91cElkLCBudW1iZXI+LFxuICBvbk11c2NsZUNsaWNrOiAoaWQ6IE11c2NsZUdyb3VwSWQpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBmaWd1cmUgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1maWd1cmVcIiB9KTtcbiAgZmlndXJlLnN0eWxlLm1heFdpZHRoID0gXCIyNDBweFwiO1xuICBmaWd1cmUuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gIGZpZ3VyZS5zdHlsZS5tYXJnaW4gPSBcIjAgYXV0b1wiO1xuXG4gIC8vIEluc2VydCBhY3R1YWwgU1ZHIChkaW1tZWQsIGRlc2F0dXJhdGVkKVxuICBjb25zdCBzdmdIb2xkZXIgPSBmaWd1cmUuY3JlYXRlRGl2KCk7XG4gIHN2Z0hvbGRlci5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDoxMDAlO29wYWNpdHk6MC44O2ZpbHRlcjpzYXR1cmF0ZSgwLjIpIGJyaWdodG5lc3MoMC40NSk7XCI7XG4gIHN2Z0hvbGRlci5pbm5lckhUTUwgPSBzdmdDb250ZW50O1xuICBjb25zdCBzdmdFbCA9IHN2Z0hvbGRlci5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICBpZiAoc3ZnRWwpIHtcbiAgICBzdmdFbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIHN2Z0VsLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIHN2Z0VsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICAvLyBPdmVybGF5IGZvciBob3RzcG90c1xuICBjb25zdCBvdmVybGF5ID0gZmlndXJlLmNyZWF0ZURpdigpO1xuICBvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1wiO1xuXG4gIC8vIENyZWF0ZSBob3RzcG90cyBiYXNlZCBvbiBtdXNjbGUgcmVnaW9uc1xuICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiBNVVNDTEVfUkVHSU9OUykge1xuICAgIGNvbnN0IGJvdW5kcyA9IHJlZ2lvbi5mcm9udDtcbiAgICBpZiAoIWJvdW5kcykgY29udGludWU7XG5cbiAgICBjb25zdCBpbnRlbnNpdHkgPSBtdXNjbGVEYXRhLmdldChyZWdpb24uaWQpID8/IDA7XG4gICAgY29uc3QgY29sb3IgPSBnZXRJbnRlbnNpdHlDb2xvcihpbnRlbnNpdHkpO1xuXG4gICAgY29uc3QgaHMgPSBvdmVybGF5LmNyZWF0ZURpdigpO1xuICAgIGhzLnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246YWJzb2x1dGU7dG9wOiR7Ym91bmRzLnl9JTtsZWZ0OiR7Ym91bmRzLnh9JTt3aWR0aDoke2JvdW5kcy53fSU7aGVpZ2h0OiR7Ym91bmRzLmh9JTtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4xNXM7YmFja2dyb3VuZDoke2ludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMzBcIiA6IFwidHJhbnNwYXJlbnRcIn07Ym9yZGVyOjFweCBzb2xpZCAke2ludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMjBcIiA6IFwidHJhbnNwYXJlbnRcIn07YDtcbiAgICBocy50aXRsZSA9IE1VU0NMRV9HUk9VUF9MQUJFTFNbcmVnaW9uLmlkXSArIChpbnRlbnNpdHkgPiAwID8gYCBcdTIwMTQgJHtNYXRoLnJvdW5kKGludGVuc2l0eSAqIDEwMCl9JWAgOiBcIlwiKTtcblxuICAgIGhzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHsgaHMuc3R5bGUuYmFja2dyb3VuZCA9IChpbnRlbnNpdHkgPiAwID8gY29sb3IgOiBcIiM5YThjN2FcIikgKyBcIjUwXCI7IH0pO1xuICAgIGhzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHsgaHMuc3R5bGUuYmFja2dyb3VuZCA9IGludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMzBcIiA6IFwidHJhbnNwYXJlbnRcIjsgfSk7XG4gICAgaHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IG9uTXVzY2xlQ2xpY2socmVnaW9uLmlkKTsgfSk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKGhzKTtcblxuICAgIC8vIE1pcnJvciBmb3Igc3ltbWV0cmljIG11c2NsZXNcbiAgICBpZiAoaXNTeW1tZXRyaWNNdXNjbGUocmVnaW9uLmlkKSAmJiBib3VuZHMueCA8IDUwKSB7XG4gICAgICBjb25zdCBtaXJyb3JMZWZ0ID0gMTAwIC0gYm91bmRzLnggLSBib3VuZHMudztcbiAgICAgIGNvbnN0IG1pcnJvciA9IG92ZXJsYXkuY3JlYXRlRGl2KCk7XG4gICAgICBtaXJyb3Iuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjphYnNvbHV0ZTt0b3A6JHtib3VuZHMueX0lO2xlZnQ6JHttaXJyb3JMZWZ0fSU7d2lkdGg6JHtib3VuZHMud30lO2hlaWdodDoke2JvdW5kcy5ofSU7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czo0cHg7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMTVzO2JhY2tncm91bmQ6JHtpbnRlbnNpdHkgPiAwID8gY29sb3IgKyBcIjMwXCIgOiBcInRyYW5zcGFyZW50XCJ9O2JvcmRlcjoxcHggc29saWQgJHtpbnRlbnNpdHkgPiAwID8gY29sb3IgKyBcIjIwXCIgOiBcInRyYW5zcGFyZW50XCJ9O2A7XG4gICAgICBtaXJyb3IudGl0bGUgPSBocy50aXRsZTtcbiAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7IG1pcnJvci5zdHlsZS5iYWNrZ3JvdW5kID0gKGludGVuc2l0eSA+IDAgPyBjb2xvciA6IFwiIzlhOGM3YVwiKSArIFwiNTBcIjsgfSk7XG4gICAgICBtaXJyb3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4geyBtaXJyb3Iuc3R5bGUuYmFja2dyb3VuZCA9IGludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMzBcIiA6IFwidHJhbnNwYXJlbnRcIjsgfSk7XG4gICAgICBtaXJyb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IG9uTXVzY2xlQ2xpY2socmVnaW9uLmlkKTsgfSk7XG4gICAgICBvdmVybGF5LmFwcGVuZENoaWxkKG1pcnJvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLSBGaWd1cmUgUmVuZGVyaW5nIC0tLVxuXG5mdW5jdGlvbiByZW5kZXJNdXNjbGVGaWd1cmUoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIHZpZXc6IFwiZnJvbnRcIiB8IFwiYmFja1wiLFxuICBnZW5kZXI6IEdlbmRlcixcbiAgbXVzY2xlRGF0YTogTWFwPE11c2NsZUdyb3VwSWQsIG51bWJlcj4sXG4gIG9uTXVzY2xlQ2xpY2s6IChpZDogTXVzY2xlR3JvdXBJZCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IGZpZ3VyZSA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWZpZ3VyZVwiIH0pO1xuXG4gIC8vIExhYmVsXG4gIGZpZ3VyZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVhdG1hcC12aWV3LWxhYmVsXCIsXG4gICAgdGV4dDogdmlldyA9PT0gXCJmcm9udFwiID8gXCJGcm9udFwiIDogXCJCYWNrXCIsXG4gIH0pO1xuXG4gIC8vIFNWRyBjb250YWluZXJcbiAgY29uc3Qgc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDIwMCA0MDBcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1zdmdcIik7XG5cbiAgLy8gRHJhdyBib2R5IHNpbGhvdWV0dGVcbiAgZHJhd0JvZHlTaWxob3VldHRlKHN2Zywgc3ZnTlMsIGdlbmRlciwgdmlldyk7XG5cbiAgLy8gRHJhdyBtdXNjbGUgcmVnaW9ucyBhcyBjb2xvcmVkIG92ZXJsYXlzXG4gIGZvciAoY29uc3QgcmVnaW9uIG9mIE1VU0NMRV9SRUdJT05TKSB7XG4gICAgY29uc3QgYm91bmRzID0gdmlldyA9PT0gXCJmcm9udFwiID8gcmVnaW9uLmZyb250IDogcmVnaW9uLmJhY2s7XG4gICAgaWYgKCFib3VuZHMpIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgaW50ZW5zaXR5ID0gbXVzY2xlRGF0YS5nZXQocmVnaW9uLmlkKSA/PyAwO1xuXG4gICAgLy8gTWFwIHBlcmNlbnRhZ2UgY29vcmRzIHRvIFNWRyB2aWV3Qm94XG4gICAgY29uc3QgeCA9IGJvdW5kcy54ICogMjtcbiAgICBjb25zdCB5ID0gYm91bmRzLnkgKiA0O1xuICAgIGNvbnN0IHcgPSBib3VuZHMudyAqIDI7XG4gICAgY29uc3QgaCA9IGJvdW5kcy5oICogNDtcblxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKGgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ5XCIsIFwiNlwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZ2V0SW50ZW5zaXR5Q29sb3IoaW50ZW5zaXR5KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIGludGVuc2l0eSA+IDAgPyBcIjAuN1wiIDogXCIwLjE1XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtbXVzY2xlXCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1tdXNjbGVcIiwgcmVnaW9uLmlkKTtcblxuICAgIC8vIFRvb2x0aXAgKyBjbGlja1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7TVVTQ0xFX0dST1VQX0xBQkVMU1tyZWdpb24uaWRdfSR7aW50ZW5zaXR5ID4gMCA/IGAgXHUyMDE0ICR7TWF0aC5yb3VuZChpbnRlbnNpdHkgKiAxMDApfSVgIDogXCJcIn1gO1xuICAgIHJlY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvbk11c2NsZUNsaWNrKHJlZ2lvbi5pZCk7XG4gICAgfSk7XG5cbiAgICBzdmcuYXBwZW5kQ2hpbGQocmVjdCk7XG5cbiAgICAvLyBBbHNvIG1pcnJvciBmb3IgcmlnaHQgc2lkZSAoc2hvdWxkZXJzLCBiaWNlcHMsIHRyaWNlcHMsIGZvcmVhcm1zLCBxdWFkcywgaGFtc3RyaW5ncywgY2FsdmVzKVxuICAgIGlmIChpc1N5bW1ldHJpY011c2NsZShyZWdpb24uaWQpICYmIGJvdW5kcy54IDwgNTApIHtcbiAgICAgIGNvbnN0IG1pcnJvclggPSAyMDAgLSB4IC0gdztcbiAgICAgIGNvbnN0IG1pcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJyZWN0XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKG1pcnJvclgpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyh5KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHcpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKGgpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjZcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwicnlcIiwgXCI2XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZ2V0SW50ZW5zaXR5Q29sb3IoaW50ZW5zaXR5KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBpbnRlbnNpdHkgPiAwID8gXCIwLjdcIiA6IFwiMC4xNVwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1tdXNjbGVcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiZGF0YS1tdXNjbGVcIiwgcmVnaW9uLmlkKTtcblxuICAgICAgY29uc3QgbWlycm9yVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGl0bGVcIik7XG4gICAgICBtaXJyb3JUaXRsZS50ZXh0Q29udGVudCA9IGAke01VU0NMRV9HUk9VUF9MQUJFTFNbcmVnaW9uLmlkXX0ke2ludGVuc2l0eSA+IDAgPyBgIFx1MjAxNCAke01hdGgucm91bmQoaW50ZW5zaXR5ICogMTAwKX0lYCA6IFwiXCJ9YDtcbiAgICAgIG1pcnJvci5hcHBlbmRDaGlsZChtaXJyb3JUaXRsZSk7XG5cbiAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25NdXNjbGVDbGljayhyZWdpb24uaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChtaXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZpZ3VyZS5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG5mdW5jdGlvbiBpc1N5bW1ldHJpY011c2NsZShpZDogTXVzY2xlR3JvdXBJZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gW1wic2hvdWxkZXJzXCIsIFwiYmljZXBzXCIsIFwidHJpY2Vwc1wiLCBcImZvcmVhcm1zXCIsIFwicXVhZHNcIiwgXCJoYW1zdHJpbmdzXCIsIFwiY2FsdmVzXCIsIFwib2JsaXF1ZXNcIl0uaW5jbHVkZXMoaWQpO1xufVxuXG5mdW5jdGlvbiBkcmF3Qm9keVNpbGhvdWV0dGUoc3ZnOiBTVkdTVkdFbGVtZW50LCBuczogc3RyaW5nLCBnZW5kZXI6IEdlbmRlciwgdmlldzogXCJmcm9udFwiIHwgXCJiYWNrXCIpOiB2b2lkIHtcbiAgLy8gU2ltcGxpZmllZCBodW1hbiBzaWxob3VldHRlIGFzIGEgcGF0aFxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInBhdGhcIik7XG5cbiAgLy8gQmFzZSBzaWxob3VldHRlIFx1MjAxNCBzbGlnaHRseSBkaWZmZXJlbnQgcHJvcG9ydGlvbnMgYnkgZ2VuZGVyXG4gIGNvbnN0IGlzRmVtYWxlID0gZ2VuZGVyID09PSBcImZlbWFsZVwiO1xuICBjb25zdCBzaG91bGRlclcgPSBpc0ZlbWFsZSA/IDYyIDogNjg7XG4gIGNvbnN0IGhpcFcgPSBpc0ZlbWFsZSA/IDU4IDogNDg7XG4gIGNvbnN0IHdhaXN0VyA9IGlzRmVtYWxlID8gMzggOiA0MjtcblxuICAvLyBCdWlsZCBzaWxob3VldHRlIHBhdGhcbiAgY29uc3QgZCA9IFtcbiAgICAvLyBIZWFkXG4gICAgYE0gMTAwIDEwYCxcbiAgICBgYSAxNiAxOCAwIDEgMSAwLjAxIDBgLFxuICAgIC8vIE5lY2tcbiAgICBgTSA5MiA0NCBMIDkyIDUyYCxcbiAgICBgTSAxMDggNDQgTCAxMDggNTJgLFxuICAgIC8vIFNob3VsZGVyc1xuICAgIGBNIDkyIDUyIEwgJHsxMDAgLSBzaG91bGRlcld9IDU4YCxcbiAgICBgTSAxMDggNTIgTCAkezEwMCArIHNob3VsZGVyV30gNThgLFxuICAgIC8vIFRvcnNvIGxlZnRcbiAgICBgTSAkezEwMCAtIHNob3VsZGVyV30gNTggTCAkezEwMCAtIHNob3VsZGVyVyArIDR9IDEwMGAsXG4gICAgYEwgJHsxMDAgLSB3YWlzdFd9IDE0MGAsXG4gICAgYEwgJHsxMDAgLSBoaXBXfSAxODBgLFxuICAgIC8vIFRvcnNvIHJpZ2h0XG4gICAgYE0gJHsxMDAgKyBzaG91bGRlcld9IDU4IEwgJHsxMDAgKyBzaG91bGRlclcgLSA0fSAxMDBgLFxuICAgIGBMICR7MTAwICsgd2Fpc3RXfSAxNDBgLFxuICAgIGBMICR7MTAwICsgaGlwV30gMTgwYCxcbiAgICAvLyBBcm1zIGxlZnRcbiAgICBgTSAkezEwMCAtIHNob3VsZGVyV30gNTggTCAkezEwMCAtIHNob3VsZGVyVyAtIDEyfSAxMTBgLFxuICAgIGBMICR7MTAwIC0gc2hvdWxkZXJXIC0gMTZ9IDE3MGAsXG4gICAgYE0gJHsxMDAgLSBzaG91bGRlclcgLSA2fSA1OCBMICR7MTAwIC0gc2hvdWxkZXJXIC0gMTh9IDExMGAsXG4gICAgYEwgJHsxMDAgLSBzaG91bGRlclcgLSAyMn0gMTcwYCxcbiAgICAvLyBBcm1zIHJpZ2h0XG4gICAgYE0gJHsxMDAgKyBzaG91bGRlcld9IDU4IEwgJHsxMDAgKyBzaG91bGRlclcgKyAxMn0gMTEwYCxcbiAgICBgTCAkezEwMCArIHNob3VsZGVyVyArIDE2fSAxNzBgLFxuICAgIGBNICR7MTAwICsgc2hvdWxkZXJXICsgNn0gNTggTCAkezEwMCArIHNob3VsZGVyVyArIDE4fSAxMTBgLFxuICAgIGBMICR7MTAwICsgc2hvdWxkZXJXICsgMjJ9IDE3MGAsXG4gICAgLy8gTGVncyBsZWZ0XG4gICAgYE0gJHsxMDAgLSBoaXBXfSAxODAgTCAkezEwMCAtIGhpcFcgKyA2fSAyODBgLFxuICAgIGBMICR7MTAwIC0gaGlwVyArIDEwfSAzNjBgLFxuICAgIGBNICR7MTAwIC0gNn0gMTgwIEwgJHsxMDAgLSAxMn0gMjgwYCxcbiAgICBgTCAkezEwMCAtIDE2fSAzNjBgLFxuICAgIC8vIExlZ3MgcmlnaHRcbiAgICBgTSAkezEwMCArIGhpcFd9IDE4MCBMICR7MTAwICsgaGlwVyAtIDZ9IDI4MGAsXG4gICAgYEwgJHsxMDAgKyBoaXBXIC0gMTB9IDM2MGAsXG4gICAgYE0gJHsxMDAgKyA2fSAxODAgTCAkezEwMCArIDEyfSAyODBgLFxuICAgIGBMICR7MTAwICsgMTZ9IDM2MGAsXG4gIF0uam9pbihcIiBcIik7XG5cbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIGQpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4xMilcIik7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMS41XCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbn1cblxuLy8gLS0tIE11c2NsZSBJbnRlbnNpdHkgQ2FsY3VsYXRpb24gLS0tXG5cbmZ1bmN0aW9uIGdhdGhlck11c2NsZUludGVuc2l0eShcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5nc1xuKTogTWFwPE11c2NsZUdyb3VwSWQsIG51bWJlcj4ge1xuICBjb25zdCBkYXRhID0gbmV3IE1hcDxNdXNjbGVHcm91cElkLCBudW1iZXI+KCk7XG5cbiAgLy8gUGFyc2Ugd29ya291dCBub3RlcyBmb3IgbXVzY2xlIGdyb3VwIG1lbnRpb25zXG4gIC8vIExvb2sgYXQgdGhlIGxhc3QgMzAgZGF5cyBvZiB3b3Jrb3V0IGNvbXBsZXRpb25zXG4gIGNvbnN0IHdvcmtvdXRBY3Rpdml0eSA9IHNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gXCJ3b3Jrb3V0XCIpO1xuICBpZiAoIXdvcmtvdXRBY3Rpdml0eSkgcmV0dXJuIGRhdGE7XG5cbiAgY29uc3QgY29tcHMgPSBjb21wbGV0aW9uRGF0YVt3b3Jrb3V0QWN0aXZpdHkuaWRdID8/IFtdO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aGlydHlEYXlzQWdvID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIDMwICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgLy8gQ291bnQgY29tcGxldGlvbnMgaW4gdGhlIGxhc3QgMzAgZGF5cyBhcyBhIHByb3h5IGZvciBvdmVyYWxsIGFjdGl2aXR5XG4gIGNvbnN0IHJlY2VudENvbXBsZXRpb25zID0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgIHJldHVybiBkID49IHRoaXJ0eURheXNBZ287XG4gIH0pLmxlbmd0aDtcblxuICBpZiAocmVjZW50Q29tcGxldGlvbnMgPT09IDApIHJldHVybiBkYXRhO1xuXG4gIC8vIFNpbmNlIHdlIGNhbid0IHBhcnNlIHdoaWNoIG11c2NsZXMgd2VyZSB0cmFpbmVkIGZyb20gZnJvbnRtYXR0ZXIgYWxvbmUsXG4gIC8vIHVzZSB3b3Jrb3V0IGZyZXF1ZW5jeSBhcyBhIHVuaWZvcm0gYmFzZSBpbnRlbnNpdHkgYW5kIGZyb250bWF0dGVyXG4gIC8vIG11c2NsZV9ncm91cHMgZmllbGQgaWYgYXZhaWxhYmxlXG4gIGNvbnN0IGJhc2VJbnRlbnNpdHkgPSBNYXRoLm1pbigxLCByZWNlbnRDb21wbGV0aW9ucyAvIDIwKTtcblxuICAvLyBTZXQgYmFzZSBmb3IgYWxsIG11c2NsZSBncm91cHMgcHJvcG9ydGlvbmFsIHRvIHdvcmtvdXQgZnJlcXVlbmN5XG4gIGNvbnN0IGFsbE11c2NsZXM6IE11c2NsZUdyb3VwSWRbXSA9IFtcbiAgICBcImNoZXN0XCIsIFwiYmFja1wiLCBcInNob3VsZGVyc1wiLCBcImJpY2Vwc1wiLCBcInRyaWNlcHNcIiwgXCJmb3JlYXJtc1wiLFxuICAgIFwiYWJzXCIsIFwib2JsaXF1ZXNcIiwgXCJxdWFkc1wiLCBcImhhbXN0cmluZ3NcIiwgXCJnbHV0ZXNcIiwgXCJjYWx2ZXNcIixcbiAgICBcInRyYXBzXCIsIFwibGF0c1wiLCBcIm5lY2tcIixcbiAgXTtcblxuICBmb3IgKGNvbnN0IG0gb2YgYWxsTXVzY2xlcykge1xuICAgIGRhdGEuc2V0KG0sIGJhc2VJbnRlbnNpdHkgKiAwLjUpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIC0tLSBDb2xvciBNYXBwaW5nIC0tLVxuXG5mdW5jdGlvbiBnZXRJbnRlbnNpdHlDb2xvcihpbnRlbnNpdHk6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChpbnRlbnNpdHkgPD0gMCkgcmV0dXJuIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjA2KVwiO1xuICBpZiAoaW50ZW5zaXR5IDwgMC4zKSByZXR1cm4gXCIjMmQ0YTFlXCI7ICAvLyBjb29sIGdyZWVuXG4gIGlmIChpbnRlbnNpdHkgPCAwLjYpIHJldHVybiBcIiM1YThhMmVcIjsgIC8vIG1lZGl1bSBncmVlblxuICBpZiAoaW50ZW5zaXR5IDwgMC44KSByZXR1cm4gXCIjZDRhODQzXCI7ICAvLyB3YXJtIGdvbGRcbiAgcmV0dXJuIFwiI2U4YzM1YVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmlnaHQgZ29sZFxufVxuXG4vLyAtLS0gTXVzY2xlIFByb2dyZXNzIFBvcHVwIC0tLVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd011c2NsZVByb2dyZXNzUG9wdXAoXG4gIG11c2NsZUlkOiBNdXNjbGVHcm91cElkLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcFxuKTogdm9pZCB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0IG9sZW4tcHJvZ3Jlc3Mtc2hlZXRcIiB9KTtcbiAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgY29uc3QgbGFiZWwgPSBNVVNDTEVfR1JPVVBfTEFCRUxTW211c2NsZUlkXTtcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIE1vbnRobHkgcHJvZ3Jlc3MgY2hhcnQgKHNpbXBsZSBiYXIgY2hhcnQpXG4gIGNvbnN0IGNoYXJ0Q29udGFpbmVyID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtY2hhcnRcIiB9KTtcbiAgcmVuZGVyU2ltcGxlQmFyQ2hhcnQoY2hhcnRDb250YWluZXIsIG11c2NsZUlkLCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG5cbiAgLy8gVG9nZ2xlIGZvciB5ZWFybHkgdmlld1xuICBjb25zdCB0b2dnbGVSb3cgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy10b2dnbGVcIiB9KTtcbiAgY29uc3QgbW9udGhCdG4gPSB0b2dnbGVSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiLFxuICAgIHRleHQ6IFwiTW9udGhseVwiLFxuICB9KTtcbiAgY29uc3QgeWVhckJ0biA9IHRvZ2dsZVJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIixcbiAgICB0ZXh0OiBcIlllYXJseVwiLFxuICB9KTtcblxuICBtb250aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYXJ0Q29udGFpbmVyLmVtcHR5KCk7XG4gICAgcmVuZGVyU2ltcGxlQmFyQ2hhcnQoY2hhcnRDb250YWluZXIsIG11c2NsZUlkLCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG4gICAgbW9udGhCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICAgIHllYXJCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gIH0pO1xuXG4gIHllYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFydENvbnRhaW5lci5lbXB0eSgpO1xuICAgIHJlbmRlclNpbXBsZUJhckNoYXJ0KGNoYXJ0Q29udGFpbmVyLCBtdXNjbGVJZCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcInllYXJcIik7XG4gICAgeWVhckJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gICAgbW9udGhCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gIH0pO1xuXG4gIC8vIENsb3NlIG9uIG92ZXJsYXkgY2xpY2tcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlUG9wdXAoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VQb3B1cCgpOiB2b2lkIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbn1cblxuLy8gLS0tIE92ZXJhbGwgUHJvZ3Jlc3MgUG9wdXAgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAoXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwXG4pOiB2b2lkIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQgb2xlbi1wcm9ncmVzcy1zaGVldFwiIH0pO1xuICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJTdHJlbmd0aCBQcm9ncmVzc1wiIH0pO1xuXG4gIC8vIFRhYiB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlUm93ID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtdG9nZ2xlXCIgfSk7XG4gIGNvbnN0IG1vbnRoQnRuID0gdG9nZ2xlUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIixcbiAgICB0ZXh0OiBcIk1vbnRobHlcIixcbiAgfSk7XG4gIGNvbnN0IHllYXJCdG4gPSB0b2dnbGVSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCIsXG4gICAgdGV4dDogXCJZZWFybHlcIixcbiAgfSk7XG5cbiAgLy8gQ2hhcnQgMTogT3ZlcmFsbCBzdHJlbmd0aCAoYWxsIGV4ZXJjaXNlcyBjb21iaW5lZCBhdmVyYWdlKVxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcHJvZ3Jlc3Mtc3VidGl0bGVcIixcbiAgICB0ZXh0OiBcIk92ZXJhbGwgU3RyZW5ndGhcIixcbiAgfSk7XG4gIGNvbnN0IG92ZXJhbGxDaGFydCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWNoYXJ0XCIgfSk7XG4gIHJlbmRlck92ZXJhbGxTdHJlbmd0aENoYXJ0KG92ZXJhbGxDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuXG4gIC8vIENoYXJ0IDI6IFBlci1tdXNjbGUgYnJlYWtkb3duIChtdWx0aS1saW5lKVxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcHJvZ3Jlc3Mtc3VidGl0bGVcIixcbiAgICB0ZXh0OiBcIkJ5IE11c2NsZSBHcm91cFwiLFxuICB9KTtcbiAgY29uc3QgbXVzY2xlQ2hhcnQgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1jaGFydFwiIH0pO1xuICByZW5kZXJNdXNjbGVCcmVha2Rvd25DaGFydChtdXNjbGVDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuXG4gIG1vbnRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmFsbENoYXJ0LmVtcHR5KCk7XG4gICAgbXVzY2xlQ2hhcnQuZW1wdHkoKTtcbiAgICByZW5kZXJPdmVyYWxsU3RyZW5ndGhDaGFydChvdmVyYWxsQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcbiAgICByZW5kZXJNdXNjbGVCcmVha2Rvd25DaGFydChtdXNjbGVDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgICB5ZWFyQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICB9KTtcblxuICB5ZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmFsbENoYXJ0LmVtcHR5KCk7XG4gICAgbXVzY2xlQ2hhcnQuZW1wdHkoKTtcbiAgICByZW5kZXJPdmVyYWxsU3RyZW5ndGhDaGFydChvdmVyYWxsQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJ5ZWFyXCIpO1xuICAgIHJlbmRlck11c2NsZUJyZWFrZG93bkNoYXJ0KG11c2NsZUNoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwieWVhclwiKTtcbiAgICB5ZWFyQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgICBtb250aEJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgfSk7XG5cbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlUG9wdXAoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VQb3B1cCgpOiB2b2lkIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbn1cblxuLy8gLS0tIENoYXJ0IFJlbmRlcmluZyBIZWxwZXJzIC0tLVxuXG5mdW5jdGlvbiByZW5kZXJTaW1wbGVCYXJDaGFydChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgbXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBwZXJpb2Q6IFwibW9udGhcIiB8IFwieWVhclwiXG4pOiB2b2lkIHtcbiAgY29uc3Qgd29ya291dEFjdGl2aXR5ID0gc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBcIndvcmtvdXRcIik7XG4gIGlmICghd29ya291dEFjdGl2aXR5KSB7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtZW1wdHlcIiwgdGV4dDogXCJObyB3b3Jrb3V0IGRhdGEgYXZhaWxhYmxlXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29tcHMgPSBjb21wbGV0aW9uRGF0YVt3b3Jrb3V0QWN0aXZpdHkuaWRdID8/IFtdO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHZhbHVlczogbnVtYmVyW10gPSBbXTtcblxuICBpZiAocGVyaW9kID09PSBcIm1vbnRoXCIpIHtcbiAgICAvLyBMYXN0IDMwIGRheXMsIGdyb3VwZWQgYnkgd2Vla1xuICAgIGZvciAobGV0IHcgPSAzOyB3ID49IDA7IHctLSkge1xuICAgICAgY29uc3Qgd2Vla0VuZCA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSB3ICogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUod2Vla0VuZC5nZXRUaW1lKCkgLSA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICBjb25zdCBjb3VudCA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICByZXR1cm4gZCA+PSB3ZWVrU3RhcnQgJiYgZCA8IHdlZWtFbmQ7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBsYWJlbHMucHVzaChgVyR7NCAtIHd9YCk7XG4gICAgICB2YWx1ZXMucHVzaChjb3VudCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIExhc3QgMTIgbW9udGhzXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcbiAgICBmb3IgKGxldCBtID0gMTE7IG0gPj0gMDsgbS0tKSB7XG4gICAgICBjb25zdCBtb250aERhdGUgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgLSBtLCAxKTtcbiAgICAgIGNvbnN0IG1vbnRoRW5kID0gbmV3IERhdGUobW9udGhEYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoRGF0ZS5nZXRNb250aCgpICsgMSwgMCk7XG4gICAgICBjb25zdCBjb3VudCA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICByZXR1cm4gZCA+PSBtb250aERhdGUgJiYgZCA8PSBtb250aEVuZDtcbiAgICAgIH0pLmxlbmd0aDtcbiAgICAgIGxhYmVscy5wdXNoKG1vbnRoTmFtZXNbbW9udGhEYXRlLmdldE1vbnRoKCldKTtcbiAgICAgIHZhbHVlcy5wdXNoKGNvdW50KTtcbiAgICB9XG4gIH1cblxuICBkcmF3TGluZUNoYXJ0KGNvbnRhaW5lciwgbGFiZWxzLCB2YWx1ZXMsIFwiI2Q0YTg0M1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBwZXJpb2Q6IFwibW9udGhcIiB8IFwieWVhclwiXG4pOiB2b2lkIHtcbiAgY29uc3QgYm9keUFjdGl2aXRpZXMgPSBzZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkICYmIGEuY2F0ZWdvcnkgPT09IFwiYm9keVwiKTtcbiAgaWYgKGJvZHlBY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXByb2dyZXNzLWVtcHR5XCIsIHRleHQ6IFwiTm8gYm9keSBhY3Rpdml0aWVzIGNvbmZpZ3VyZWRcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHZhbHVlczogbnVtYmVyW10gPSBbXTtcblxuICBpZiAocGVyaW9kID09PSBcIm1vbnRoXCIpIHtcbiAgICBmb3IgKGxldCB3ID0gMzsgdyA+PSAwOyB3LS0pIHtcbiAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtFbmQuZ2V0VGltZSgpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIGZvciAoY29uc3QgYWN0IG9mIGJvZHlBY3Rpdml0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbYWN0LmlkXSA/PyBbXTtcbiAgICAgICAgdG90YWwgKz0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnB1c2goYFckezQgLSB3fWApO1xuICAgICAgdmFsdWVzLnB1c2godG90YWwpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuICAgIGZvciAobGV0IG0gPSAxMTsgbSA+PSAwOyBtLS0pIHtcbiAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIG0sIDEpO1xuICAgICAgY29uc3QgbW9udGhFbmQgPSBuZXcgRGF0ZShtb250aERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGhEYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGFjdCBvZiBib2R5QWN0aXZpdGllcykge1xuICAgICAgICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW2FjdC5pZF0gPz8gW107XG4gICAgICAgIHRvdGFsICs9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgICByZXR1cm4gZCA+PSBtb250aERhdGUgJiYgZCA8PSBtb250aEVuZDtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnB1c2gobW9udGhOYW1lc1ttb250aERhdGUuZ2V0TW9udGgoKV0pO1xuICAgICAgdmFsdWVzLnB1c2godG90YWwpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdMaW5lQ2hhcnQoY29udGFpbmVyLCBsYWJlbHMsIHZhbHVlcywgXCIjZDRhODQzXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJNdXNjbGVCcmVha2Rvd25DaGFydChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXAsXG4gIHBlcmlvZDogXCJtb250aFwiIHwgXCJ5ZWFyXCJcbik6IHZvaWQge1xuICAvLyBTaG93IGJvZHktY2F0ZWdvcnkgYWN0aXZpdGllcyBhcyBzZXBhcmF0ZSBsaW5lc1xuICBjb25zdCBib2R5QWN0aXZpdGllcyA9IHNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQgJiYgYS5jYXRlZ29yeSA9PT0gXCJib2R5XCIpO1xuICBpZiAoYm9keUFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtZW1wdHlcIiwgdGV4dDogXCJObyBib2R5IGFjdGl2aXRpZXMgY29uZmlndXJlZFwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGNvbG9ycyA9IFtcIiNkNGE4NDNcIiwgXCIjZThjMzVhXCIsIFwiIzdiOWRlMFwiLCBcIiNhMDhkZTBcIiwgXCIjNWU5YTdhXCIsIFwiI2M0ODgyMFwiXTtcblxuICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3Qgd2lkdGggPSAyODA7XG4gIGNvbnN0IGhlaWdodCA9IDEyMDtcbiAgY29uc3QgcGFkZGluZyA9IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDIwLCBsZWZ0OiAyNCB9O1xuICBjb25zdCBjaGFydFcgPSB3aWR0aCAtIHBhZGRpbmcubGVmdCAtIHBhZGRpbmcucmlnaHQ7XG4gIGNvbnN0IGNoYXJ0SCA9IGhlaWdodCAtIHBhZGRpbmcudG9wIC0gcGFkZGluZy5ib3R0b207XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1wcm9ncmVzcy1zdmdcIik7XG5cbiAgY29uc3QgYnVja2V0Q291bnQgPSBwZXJpb2QgPT09IFwibW9udGhcIiA/IDQgOiAxMjtcblxuICAvLyBDb21wdXRlIGRhdGEgc2VyaWVzIGZvciBlYWNoIGFjdGl2aXR5XG4gIGNvbnN0IGFsbFNlcmllczogeyBuYW1lOiBzdHJpbmc7IHZhbHVlczogbnVtYmVyW107IGNvbG9yOiBzdHJpbmcgfVtdID0gW107XG4gIGxldCBnbG9iYWxNYXggPSAxO1xuXG4gIGZvciAobGV0IGFpID0gMDsgYWkgPCBib2R5QWN0aXZpdGllcy5sZW5ndGg7IGFpKyspIHtcbiAgICBjb25zdCBhY3QgPSBib2R5QWN0aXZpdGllc1thaV07XG4gICAgY29uc3QgY29tcHMgPSBjb21wbGV0aW9uRGF0YVthY3QuaWRdID8/IFtdO1xuICAgIGNvbnN0IHZhbHM6IG51bWJlcltdID0gW107XG5cbiAgICBpZiAocGVyaW9kID09PSBcIm1vbnRoXCIpIHtcbiAgICAgIGZvciAobGV0IHcgPSAzOyB3ID49IDA7IHctLSkge1xuICAgICAgICBjb25zdCB3ZWVrRW5kID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIHcgKiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtFbmQuZ2V0VGltZSgpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICB2YWxzLnB1c2goY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICAgICAgfSkubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgbSA9IDExOyBtID49IDA7IG0tLSkge1xuICAgICAgICBjb25zdCBtb250aERhdGUgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgLSBtLCAxKTtcbiAgICAgICAgY29uc3QgbW9udGhFbmQgPSBuZXcgRGF0ZShtb250aERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGhEYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgICAgdmFscy5wdXNoKGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgICByZXR1cm4gZCA+PSBtb250aERhdGUgJiYgZCA8PSBtb250aEVuZDtcbiAgICAgICAgfSkubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWxzLCAxKTtcbiAgICBpZiAobWF4ID4gZ2xvYmFsTWF4KSBnbG9iYWxNYXggPSBtYXg7XG5cbiAgICBhbGxTZXJpZXMucHVzaCh7XG4gICAgICBuYW1lOiBhY3QubmFtZSxcbiAgICAgIHZhbHVlczogdmFscyxcbiAgICAgIGNvbG9yOiBjb2xvcnNbYWkgJSBjb2xvcnMubGVuZ3RoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERyYXcgbGluZXNcbiAgZm9yIChjb25zdCBzZXJpZXMgb2YgYWxsU2VyaWVzKSB7XG4gICAgY29uc3QgcG9pbnRzID0gc2VyaWVzLnZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgIGNvbnN0IHggPSBwYWRkaW5nLmxlZnQgKyAoaSAvIChidWNrZXRDb3VudCAtIDEpKSAqIGNoYXJ0VztcbiAgICAgIGNvbnN0IHkgPSBwYWRkaW5nLnRvcCArIGNoYXJ0SCAtICh2IC8gZ2xvYmFsTWF4KSAqIGNoYXJ0SDtcbiAgICAgIHJldHVybiBgJHt4fSwke3l9YDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicG9seWxpbmVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgcG9pbnRzLmpvaW4oXCIgXCIpKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIHNlcmllcy5jb2xvcik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVqb2luXCIsIFwicm91bmRcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICB9XG5cbiAgLy8gWCBheGlzIGxhYmVsc1xuICBjb25zdCB4TGFiZWxzID0gcGVyaW9kID09PSBcIm1vbnRoXCJcbiAgICA/IFtcIlcxXCIsIFwiVzJcIiwgXCJXM1wiLCBcIlc0XCJdXG4gICAgOiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWNrZXRDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIChpIC8gKGJ1Y2tldENvdW50IC0gMSkpICogY2hhcnRXO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRleHRcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKGhlaWdodCAtIDQpKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjQpXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjhcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB4TGFiZWxzW2ldO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAvLyBMZWdlbmRcbiAgY29uc3QgbGVnZW5kID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWxlZ2VuZFwiIH0pO1xuICBmb3IgKGNvbnN0IHNlcmllcyBvZiBhbGxTZXJpZXMpIHtcbiAgICBjb25zdCBpdGVtID0gbGVnZW5kLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWxlZ2VuZC1pdGVtXCIgfSk7XG4gICAgY29uc3QgZG90ID0gaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1sZWdlbmQtZG90XCIgfSk7XG4gICAgZG90LnN0eWxlLmJhY2tncm91bmQgPSBzZXJpZXMuY29sb3I7XG4gICAgaXRlbS5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBzZXJpZXMubmFtZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3TGluZUNoYXJ0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBsYWJlbHM6IHN0cmluZ1tdLFxuICB2YWx1ZXM6IG51bWJlcltdLFxuICBjb2xvcjogc3RyaW5nXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIGNvbnN0IHdpZHRoID0gMjgwO1xuICBjb25zdCBoZWlnaHQgPSAxMDA7XG4gIGNvbnN0IHBhZGRpbmcgPSB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAxOCwgbGVmdDogMTAgfTtcbiAgY29uc3QgY2hhcnRXID0gd2lkdGggLSBwYWRkaW5nLmxlZnQgLSBwYWRkaW5nLnJpZ2h0O1xuICBjb25zdCBjaGFydEggPSBoZWlnaHQgLSBwYWRkaW5nLnRvcCAtIHBhZGRpbmcuYm90dG9tO1xuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi52YWx1ZXMsIDEpO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4tcHJvZ3Jlc3Mtc3ZnXCIpO1xuXG4gIC8vIEdyaWQgbGluZXNcbiAgZm9yIChsZXQgZyA9IDA7IGcgPD0gMjsgZysrKSB7XG4gICAgY29uc3QgZ3kgPSBwYWRkaW5nLnRvcCArIChnIC8gMikgKiBjaGFydEg7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJsaW5lXCIpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgU3RyaW5nKHBhZGRpbmcubGVmdCkpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgU3RyaW5nKHdpZHRoIC0gcGFkZGluZy5yaWdodCkpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieTFcIiwgU3RyaW5nKGd5KSk7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBTdHJpbmcoZ3kpKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIwLjVcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICB9XG5cbiAgLy8gQnVpbGQgcG9pbnRzXG4gIGNvbnN0IHBvaW50cyA9IHZhbHVlcy5tYXAoKHYsIGkpID0+ICh7XG4gICAgeDogcGFkZGluZy5sZWZ0ICsgKGkgLyBNYXRoLm1heCgxLCB2YWx1ZXMubGVuZ3RoIC0gMSkpICogY2hhcnRXLFxuICAgIHk6IHBhZGRpbmcudG9wICsgY2hhcnRIIC0gKHYgLyBtYXhWYWwpICogY2hhcnRILFxuICB9KSk7XG5cbiAgLy8gU21vb3RoIGN1cnZlIChDYXRtdWxsLVJvbSBcdTIxOTIgY3ViaWMgYmV6aWVyKVxuICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgZCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzW01hdGgubWF4KDAsIGkgLSAxKV07XG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXTtcbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzW2kgKyAxXTtcbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzW01hdGgubWluKHBvaW50cy5sZW5ndGggLSAxLCBpICsgMildO1xuICAgICAgY29uc3QgY3AxeCA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNjtcbiAgICAgIGNvbnN0IGNwMXkgPSBwMS55ICsgKHAyLnkgLSBwMC55KSAvIDY7XG4gICAgICBjb25zdCBjcDJ4ID0gcDIueCAtIChwMy54IC0gcDEueCkgLyA2O1xuICAgICAgY29uc3QgY3AyeSA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNjtcbiAgICAgIGQgKz0gYCBDICR7Y3AxeH0gJHtjcDF5fSwgJHtjcDJ4fSAke2NwMnl9LCAke3AyLnh9ICR7cDIueX1gO1xuICAgIH1cblxuICAgIC8vIEFyZWEgZmlsbFxuICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicGF0aFwiKTtcbiAgICBjb25zdCBhcmVhRCA9IGQgKyBgIEwgJHtwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdLnh9ICR7cGFkZGluZy50b3AgKyBjaGFydEh9IEwgJHtwb2ludHNbMF0ueH0gJHtwYWRkaW5nLnRvcCArIGNoYXJ0SH0gWmA7XG4gICAgYXJlYS5zZXRBdHRyaWJ1dGUoXCJkXCIsIGFyZWFEKTtcbiAgICBhcmVhLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgY29sb3IpO1xuICAgIGFyZWEuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBcIjAuMDhcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGFyZWEpO1xuXG4gICAgLy8gQ3VydmUgbGluZVxuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgZCk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBjb2xvcik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgfVxuXG4gIC8vIERhdGEgZG90c1xuICBmb3IgKGNvbnN0IHB0IG9mIHBvaW50cykge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJjaXJjbGVcIik7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhwdC54KSk7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcImN5XCIsIFN0cmluZyhwdC55KSk7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcInJcIiwgXCIyLjVcIik7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgY29sb3IpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChkb3QpO1xuICB9XG5cbiAgLy8gWC1heGlzIGxhYmVsc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHggPSBwYWRkaW5nLmxlZnQgKyAoaSAvIE1hdGgubWF4KDEsIGxhYmVscy5sZW5ndGggLSAxKSkgKiBjaGFydFc7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0ZXh0XCIpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoaGVpZ2h0IC0gNCkpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjQpXCIpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiOFwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gbGFiZWxzW2ldO1xuICAgIHN2Zy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG4vLyAtLS0gTXVzY2xlIFNlbGVjdG9yIGZvciBOZXcgV29ya291dCAtLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNdXNjbGVTZWxlY3RvcihcbiAgb25Db25maXJtOiAoc2VsZWN0ZWQ6IE11c2NsZUdyb3VwSWRbXSkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0IG9sZW4tbXVzY2xlLXNlbGVjdG9yLXNoZWV0XCIgfSk7XG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLCB0ZXh0OiBcIlNlbGVjdCBNdXNjbGVzXCIgfSk7XG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1wcm9ncmVzcy1zdWJ0aXRsZVwiLFxuICAgIHRleHQ6IFwiVGFwIHRoZSBtdXNjbGVzIHlvdSB3YW50IHRvIHRyYWluXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHNlbGVjdGVkID0gbmV3IFNldDxNdXNjbGVHcm91cElkPigpO1xuXG4gIC8vIFNWRyBmaWd1cmUgd2l0aCBjbGlja2FibGUgbXVzY2xlc1xuICBjb25zdCBmaWd1cmVXcmFwID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tbXVzY2xlLXNlbGVjdG9yLWZpZ3VyZVwiIH0pO1xuXG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyMDAgNDAwXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtc3ZnIG9sZW4tc2VsZWN0b3Itc3ZnXCIpO1xuXG4gIC8vIERyYXcgc2lsaG91ZXR0ZVxuICBkcmF3Qm9keVNpbGhvdWV0dGUoc3ZnLCBzdmdOUywgXCJtYWxlXCIsIFwiZnJvbnRcIik7XG5cbiAgLy8gRHJhdyBjbGlja2FibGUgbXVzY2xlIHJlZ2lvbnNcbiAgY29uc3QgcmVjdHM6IE1hcDxNdXNjbGVHcm91cElkLCBTVkdSZWN0RWxlbWVudFtdPiA9IG5ldyBNYXAoKTtcblxuICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiBNVVNDTEVfUkVHSU9OUykge1xuICAgIGNvbnN0IGJvdW5kcyA9IHJlZ2lvbi5mcm9udCA/PyByZWdpb24uYmFjaztcbiAgICBpZiAoIWJvdW5kcykgY29udGludWU7XG5cbiAgICBjb25zdCB4ID0gYm91bmRzLnggKiAyO1xuICAgIGNvbnN0IHkgPSBib3VuZHMueSAqIDQ7XG4gICAgY29uc3QgdyA9IGJvdW5kcy53ICogMjtcbiAgICBjb25zdCBoID0gYm91bmRzLmggKiA0O1xuXG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJyZWN0XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHcpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoaCkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwicnlcIiwgXCI2XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1tdXNjbGUgb2xlbi1zZWxlY3Rvci1tdXNjbGVcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW11c2NsZVwiLCByZWdpb24uaWQpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdSZWN0cyA9IHJlY3RzLmdldChyZWdpb24uaWQpID8/IFtdO1xuICAgIGV4aXN0aW5nUmVjdHMucHVzaChyZWN0KTtcbiAgICByZWN0cy5zZXQocmVnaW9uLmlkLCBleGlzdGluZ1JlY3RzKTtcblxuICAgIHJlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdG9nZ2xlTXVzY2xlKHJlZ2lvbi5pZCk7XG4gICAgfSk7XG5cbiAgICBzdmcuYXBwZW5kQ2hpbGQocmVjdCk7XG5cbiAgICAvLyBNaXJyb3JcbiAgICBpZiAoaXNTeW1tZXRyaWNNdXNjbGUocmVnaW9uLmlkKSAmJiBib3VuZHMueCA8IDUwKSB7XG4gICAgICBjb25zdCBtaXJyb3JYID0gMjAwIC0geCAtIHc7XG4gICAgICBjb25zdCBtaXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhtaXJyb3JYKSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhoKSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInJ5XCIsIFwiNlwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjA2KVwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1tdXNjbGUgb2xlbi1zZWxlY3Rvci1tdXNjbGVcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiZGF0YS1tdXNjbGVcIiwgcmVnaW9uLmlkKTtcblxuICAgICAgZXhpc3RpbmdSZWN0cy5wdXNoKG1pcnJvcik7XG4gICAgICByZWN0cy5zZXQocmVnaW9uLmlkLCBleGlzdGluZ1JlY3RzKTtcblxuICAgICAgbWlycm9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0b2dnbGVNdXNjbGUocmVnaW9uLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQobWlycm9yKTtcbiAgICB9XG5cbiAgICAvLyBMYWJlbCB0ZXh0XG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRleHRcIik7XG4gICAgbGFiZWxUZXh0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHggKyB3IC8gMikpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyh5ICsgaCAvIDIgKyAzKSk7XG4gICAgbGFiZWxUZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjUpXCIpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgXCI3XCIpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIik7XG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gTVVTQ0xFX0dST1VQX0xBQkVMU1tyZWdpb24uaWRdLnNsaWNlKDAsIDUpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICB9XG5cbiAgZmlndXJlV3JhcC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIC8vIFNlbGVjdGVkIGNoaXBzIGFyZWFcbiAgY29uc3QgY2hpcHNBcmVhID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tbXVzY2xlLXNlbGVjdG9yLWNoaXBzXCIgfSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTXVzY2xlKGlkOiBNdXNjbGVHcm91cElkKTogdm9pZCB7XG4gICAgaWYgKHNlbGVjdGVkLmhhcyhpZCkpIHtcbiAgICAgIHNlbGVjdGVkLmRlbGV0ZShpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkLmFkZChpZCk7XG4gICAgfVxuICAgIHVwZGF0ZVZpc3VhbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVmlzdWFsKCk6IHZvaWQge1xuICAgIC8vIFVwZGF0ZSByZWN0c1xuICAgIGZvciAoY29uc3QgW2lkLCByZWN0TGlzdF0gb2YgcmVjdHMpIHtcbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZC5oYXMoaWQpO1xuICAgICAgZm9yIChjb25zdCByIG9mIHJlY3RMaXN0KSB7XG4gICAgICAgIHIuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBpc1NlbGVjdGVkID8gXCJyZ2JhKDIxMiwgMTY4LCA2NywgMC41KVwiIDogXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuMDYpXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjaGlwc1xuICAgIGNoaXBzQXJlYS5lbXB0eSgpO1xuICAgIGZvciAoY29uc3QgaWQgb2Ygc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGNoaXAgPSBjaGlwc0FyZWEuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tbXVzY2xlLXNlbGVjdG9yLWNoaXBcIiB9KTtcbiAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBNVVNDTEVfR1JPVVBfTEFCRUxTW2lkXTtcbiAgICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZU11c2NsZShpZCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbmZpcm0gYnV0dG9uXG4gIGNvbnN0IGFjdGlvbnMgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWFjdGlvbnNcIiB9KTtcbiAgY29uc3QgY29uZmlybUJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogXCJCZWdpbiBXb3Jrb3V0XCIsXG4gIH0pO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xvc2VQb3B1cCgpO1xuICAgIG9uQ29uZmlybShBcnJheS5mcm9tKHNlbGVjdGVkKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBcIkNhbmNlbFwiLFxuICB9KTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKCkpO1xuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVBvcHVwKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKTogdm9pZCB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBXZWlnaHQgUHJvZ3Jlc3MgQ29tcG9uZW50XG4vLyBXZWlnaHQgdHJlbmQgZ3JhcGggKyBsb2cgcmVtaW5kZXIgbm90aWZpY2F0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFdlaWdodExvZ0ZyZXF1ZW5jeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25Mb2dXZWlnaHQ6ICgpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBzdGF0cyA9IHNldHRpbmdzLnBlcnNvbmFsU3RhdHM7XG4gIGlmICghc3RhdHMuY3VycmVudFdlaWdodCB8fCBzdGF0cy53ZWlnaHRMb2cubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgY29uc3QgZGF5c1NpbmNlTG9nID0gZ2V0RGF5c1NpbmNlTGFzdExvZyhzdGF0cy5sYXN0V2VpZ2h0TG9nRGF0ZSk7XG4gIGNvbnN0IGludGVydmFsRGF5cyA9IGdldEludGVydmFsRGF5cyhzdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3ksIHN0YXRzLndlaWdodExvZ0N1c3RvbURheXMpO1xuXG4gIGlmIChkYXlzU2luY2VMb2cgPCBpbnRlcnZhbERheXMpIHJldHVybjtcblxuICAvLyBTaG93IG5vdGlmaWNhdGlvbiBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZC1jb21wYWN0IG9sZW4td2VpZ2h0LW5vdGlmeVwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCByb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlaWdodC1ub3RpZnktcm93XCIgfSk7XG4gIHJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBcIlRpbWUgdG8gbG9nIHlvdXIgd2VpZ2h0XCIgfSk7XG5cbiAgY29uc3QgYnRuID0gcm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXdlaWdodC1ub3RpZnktYnRuXCIsXG4gICAgdGV4dDogXCJMb2dcIixcbiAgfSk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uTG9nV2VpZ2h0KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREYXlzU2luY2VMYXN0TG9nKGxhc3REYXRlOiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcbiAgaWYgKCFsYXN0RGF0ZSkgcmV0dXJuIDk5OTtcbiAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKGxhc3REYXRlKTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbXMgPSBub3cuZ2V0VGltZSgpIC0gbGFzdC5nZXRUaW1lKCk7XG4gIHJldHVybiBNYXRoLmZsb29yKG1zIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW50ZXJ2YWxEYXlzKGZyZXE6IFdlaWdodExvZ0ZyZXF1ZW5jeSwgY3VzdG9tRGF5czogbnVtYmVyKTogbnVtYmVyIHtcbiAgc3dpdGNoIChmcmVxKSB7XG4gICAgY2FzZSBcInR3aWNlLWEtd2Vla1wiOiByZXR1cm4gMztcbiAgICBjYXNlIFwiZXZlcnktd2Vla1wiOiByZXR1cm4gNztcbiAgICBjYXNlIFwiZXZlcnktMi13ZWVrc1wiOiByZXR1cm4gMTQ7XG4gICAgY2FzZSBcImV2ZXJ5LTMtZGF5c1wiOiByZXR1cm4gMztcbiAgICBjYXNlIFwiZXZlcnktNS1kYXlzXCI6IHJldHVybiA1O1xuICAgIGNhc2UgXCJjdXN0b21cIjogcmV0dXJuIGN1c3RvbURheXM7XG4gICAgZGVmYXVsdDogcmV0dXJuIDc7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFByb2dyZXNzIEFuYWx5dGljcyBDb21wb25lbnRcbi8vIEQgfCBXIHwgTSB8IFkgdGFiYmVkIGFuYWx5dGljcyBzZWN0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbnR5cGUgQW5hbHl0aWNzUGVyaW9kID0gXCJEXCIgfCBcIldcIiB8IFwiTVwiIHwgXCJZXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9ncmVzc0FuYWx5dGljcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5hbmFseXRpY3NfdGl0bGUgPz8gXCJQUk9HUkVTU1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENhcmRcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFRhYiByb3dcbiAgY29uc3QgdGFiUm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtdGFic1wiIH0pO1xuICBjb25zdCBjb250ZW50QXJlYSA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLWNvbnRlbnRcIiB9KTtcblxuICBjb25zdCBwZXJpb2RzOiBBbmFseXRpY3NQZXJpb2RbXSA9IFtcIkRcIiwgXCJXXCIsIFwiTVwiLCBcIllcIl07XG4gIGNvbnN0IHRhYkJ1dHRvbnM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgbGV0IGFjdGl2ZVBlcmlvZDogQW5hbHl0aWNzUGVyaW9kID0gXCJXXCI7XG5cbiAgZm9yIChjb25zdCBwZXJpb2Qgb2YgcGVyaW9kcykge1xuICAgIGNvbnN0IGJ0biA9IHRhYlJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7IGNsczogXCJvbGVuLWFuYWx5dGljcy10YWJcIiwgdGV4dDogcGVyaW9kIH0pO1xuICAgIGlmIChwZXJpb2QgPT09IGFjdGl2ZVBlcmlvZCkgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgdGFiQnV0dG9ucy5wdXNoKGJ0bik7XG5cbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFjdGl2ZVBlcmlvZCA9IHBlcmlvZDtcbiAgICAgIHRhYkJ1dHRvbnMuZm9yRWFjaCgoYikgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKTtcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgcmVuZGVyUGVyaW9kKGNvbnRlbnRBcmVhLCBwZXJpb2QsIHNldHRpbmdzLCBlbmdpbmUpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gSW5pdGlhbCByZW5kZXJcbiAgcmVuZGVyUGVyaW9kKGNvbnRlbnRBcmVhLCBhY3RpdmVQZXJpb2QsIHNldHRpbmdzLCBlbmdpbmUpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQZXJpb2QoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHBlcmlvZDogQW5hbHl0aWNzUGVyaW9kLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmVcbik6IHZvaWQge1xuICBjb250YWluZXIuZW1wdHkoKTtcblxuICBzd2l0Y2ggKHBlcmlvZCkge1xuICAgIGNhc2UgXCJEXCI6IHJlbmRlckRhaWx5Vmlldyhjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUpOyBicmVhaztcbiAgICBjYXNlIFwiV1wiOiByZW5kZXJXZWVrbHlWaWV3KGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSk7IGJyZWFrO1xuICAgIGNhc2UgXCJNXCI6IHJlbmRlck1vbnRobHlWaWV3KGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSk7IGJyZWFrO1xuICAgIGNhc2UgXCJZXCI6IHJlbmRlclllYXJseVZpZXcoY29udGFpbmVyLCBzZXR0aW5ncywgZW5naW5lKTsgYnJlYWs7XG4gIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwIERhaWx5IFZpZXcgXHUyNTAwXHUyNTAwXG5cbmZ1bmN0aW9uIHJlbmRlckRhaWx5VmlldyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3RhdHMgPSBlbmdpbmUuZ2V0RGFpbHlTdGF0cygpO1xuICBjb25zdCB0b3RhbCA9IHN0YXRzLnBlckFjdGl2aXR5Lmxlbmd0aDtcbiAgY29uc3QgZG9uZSA9IHN0YXRzLnNlc3Npb25zO1xuICBjb25zdCBmb2N1c1Njb3JlID0gdG90YWwgPiAwID8gTWF0aC5yb3VuZCgoZG9uZSAvIHRvdGFsKSAqIDEwMCkgOiAwO1xuXG4gIC8vIFN0YXRzIHJvd1xuICBjb25zdCByb3cgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLXN0YXRzXCIgfSk7XG4gIGNyZWF0ZVN0YXQocm93LCBTdHJpbmcoZG9uZSksIFwiU2Vzc2lvbnNcIik7XG4gIGNyZWF0ZVN0YXQocm93LCBgJHtmb2N1c1Njb3JlfSVgLCBcIkZvY3VzXCIpO1xuICBjcmVhdGVTdGF0KHJvdywgU3RyaW5nKHRvdGFsIC0gZG9uZSksIFwiUmVtYWluaW5nXCIpO1xuXG4gIC8vIERpdmlkZXJcbiAgY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBQZXItYWN0aXZpdHkgbGlzdFxuICBmb3IgKGNvbnN0IGEgb2Ygc3RhdHMucGVyQWN0aXZpdHkpIHtcbiAgICBjb25zdCBpdGVtID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1hY3Rpdml0eS1yb3dcIiB9KTtcbiAgICBpdGVtLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLWFuYWx5dGljcy1hY3Rpdml0eS1lbW9qaVwiLCB0ZXh0OiBhLmVtb2ppIH0pO1xuICAgIGl0ZW0uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLWFjdGl2aXR5LW5hbWVcIiwgdGV4dDogYS5uYW1lIH0pO1xuXG4gICAgY29uc3QgYmFkZ2UgPSBpdGVtLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLWFuYWx5dGljcy1hY3Rpdml0eS1iYWRnZVwiIH0pO1xuICAgIGlmIChhLmRvbmUpIHtcbiAgICAgIGJhZGdlLnNldFRleHQoXCJcXHUyNzEzXCIpO1xuICAgICAgYmFkZ2UuY2xhc3NMaXN0LmFkZChcImRvbmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhZGdlLnNldFRleHQoXCJcXHUyMDE0XCIpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgV2Vla2x5IFZpZXcgXHUyNTAwXHUyNTAwXG5cbmZ1bmN0aW9uIHJlbmRlcldlZWtseVZpZXcoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZVxuKTogdm9pZCB7XG4gIGNvbnN0IHN0YXRzID0gZW5naW5lLmdldFdlZWtseVN0YXRzKCk7XG5cbiAgLy8gU3RhdHMgcm93XG4gIGNvbnN0IHJvdyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3Mtc3RhdHNcIiB9KTtcbiAgY3JlYXRlU3RhdChyb3csIFN0cmluZyhzdGF0cy5hY3RpdmVEYXlzKSArIFwiLzdcIiwgXCJBY3RpdmUgZGF5c1wiKTtcbiAgY3JlYXRlU3RhdChyb3csIHN0YXRzLmJlc3REYXksIFwiQmVzdCBkYXlcIik7XG5cbiAgY29uc3Qgd293U3RyID0gc3RhdHMud2Vla092ZXJXZWVrID49IDAgPyBgKyR7c3RhdHMud2Vla092ZXJXZWVrfWAgOiBTdHJpbmcoc3RhdHMud2Vla092ZXJXZWVrKTtcbiAgY3JlYXRlU3RhdChyb3csIHdvd1N0ciwgXCJ2cyBsYXN0IHdlZWtcIik7XG5cbiAgLy8gRGl2aWRlclxuICBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGl2aWRlclwiIH0pO1xuXG4gIC8vIEJhciBjaGFydCAocmV1c2Ugc2FtZSBwYXR0ZXJuIGFzIFdlZWtseVJoeXRobSlcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgdG9kYXlTdHIgPSBuZXcgRGF0ZShub3cpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gIGxldCBtYXhUb3RhbCA9IDE7XG4gIGZvciAoY29uc3QgZGF5IG9mIHN0YXRzLmJ5RGF5KSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBkYXkuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbCArPSB2OyB9KTtcbiAgICBpZiAodG90YWwgPiBtYXhUb3RhbCkgbWF4VG90YWwgPSB0b3RhbDtcbiAgfVxuXG4gIGNvbnN0IGJhcnNDb250YWluZXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhcnNcIiB9KTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygc3RhdHMuYnlEYXkpIHtcbiAgICBjb25zdCBjb2wgPSBiYXJzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItY29sXCIgfSk7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBkYXkuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbCArPSB2OyB9KTtcblxuICAgIGNvbnN0IGJhckhlaWdodCA9IG1heFRvdGFsID4gMCA/IE1hdGgubWF4KDQsICh0b3RhbCAvIG1heFRvdGFsKSAqIDEwMCkgOiA0O1xuICAgIGNvbnN0IGJhckVsID0gY29sLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXJcIiB9KTtcbiAgICBiYXJFbC5zdHlsZS5oZWlnaHQgPSBgJHtiYXJIZWlnaHR9cHhgO1xuICAgIGJhckVsLnN0eWxlLm1pbkhlaWdodCA9IFwiNHB4XCI7XG5cbiAgICBpZiAoZGF5LmRhdGUgPT09IHRvZGF5U3RyKSBiYXJFbC5jbGFzc0xpc3QuYWRkKFwib2xlbi13ZWVrbHktYmFyLXRvZGF5XCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdO1xuICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgIGNvbnN0IGNhdENvdW50ID0gZGF5LmNvbXBsZXRpb25zLmdldChjYXQpID8/IDA7XG4gICAgICBpZiAoY2F0Q291bnQgPT09IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3Qgc2VnSGVpZ2h0ID0gdG90YWwgPiAwID8gKGNhdENvdW50IC8gdG90YWwpICogMTAwIDogMDtcbiAgICAgIGNvbnN0IHNlZyA9IGJhckVsLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItc2VnbWVudFwiIH0pO1xuICAgICAgc2VnLnN0eWxlLmhlaWdodCA9IGAke3NlZ0hlaWdodH0lYDtcbiAgICAgIHNlZy5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0Q2F0ZWdvcnlDb2xvcihjYXQsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAodG90YWwgPT09IDApIGJhckVsLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIjtcbiAgICBjb2wuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktZGF5LWxhYmVsXCIsIHRleHQ6IGRheS5kYXkuY2hhckF0KDApIH0pO1xuICB9XG5cbiAgLy8gU3RyZWFrXG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGlmIChzdHJlYWsgPiAwKSB7XG4gICAgY29uc3Qgc3RyZWFrRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLXN0cmVha1wiIH0pO1xuICAgIHN0cmVha0VsLnNldFRleHQoYFxcdXsxRjUyNX0gJHtzdHJlYWt9LWRheSBzdHJlYWtgKTtcbiAgfVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgTW9udGhseSBWaWV3IFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiByZW5kZXJNb250aGx5VmlldyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3RhdHMgPSBlbmdpbmUuZ2V0TW9udGhseVN0YXRzKCk7XG5cbiAgLy8gU3RhdHMgcm93XG4gIGNvbnN0IHJvdyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3Mtc3RhdHNcIiB9KTtcbiAgY3JlYXRlU3RhdChyb3csIFN0cmluZyhzdGF0cy50b3RhbFNlc3Npb25zKSwgXCJTZXNzaW9uc1wiKTtcbiAgY3JlYXRlU3RhdChyb3csIFN0cmluZyhzdGF0cy5hY3RpdmVEYXlzKSwgXCJBY3RpdmUgZGF5c1wiKTtcbiAgY3JlYXRlU3RhdChyb3csIFN0cmluZyhzdGF0cy5hdmdEYWlseSksIFwiQXZnL2RheVwiKTtcblxuICAvLyBEaXZpZGVyXG4gIGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQ2FsZW5kYXIgaGVhdG1hcFxuICBjb25zdCBoZWF0bWFwID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1oZWF0bWFwXCIgfSk7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKTtcbiAgY29uc3QgbW9udGggPSBub3cuZ2V0TW9udGgoKTtcbiAgY29uc3QgZmlyc3REYXlPZldlZWsgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMSkuZ2V0RGF5KCk7IC8vIDA9U3VuXG4gIGNvbnN0IGFkanVzdGVkRmlyc3QgPSBmaXJzdERheU9mV2VlayA9PT0gMCA/IDYgOiBmaXJzdERheU9mV2VlayAtIDE7IC8vIE1vbj0wXG5cbiAgLy8gRGF5IGxhYmVscyBoZWFkZXJcbiAgY29uc3QgZGF5TGFiZWxzID0gW1wiTVwiLCBcIlRcIiwgXCJXXCIsIFwiVFwiLCBcIkZcIiwgXCJTXCIsIFwiU1wiXTtcbiAgY29uc3QgaGVhZGVyUm93ID0gaGVhdG1hcC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtaGVhdG1hcC1yb3dcIiB9KTtcbiAgZm9yIChjb25zdCBkbCBvZiBkYXlMYWJlbHMpIHtcbiAgICBoZWFkZXJSb3cuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtaGVhdG1hcC1sYWJlbFwiLCB0ZXh0OiBkbCB9KTtcbiAgfVxuXG4gIC8vIEZpbmQgbWF4IGZvciBzY2FsaW5nXG4gIGxldCBtYXhEYXkgPSAxO1xuICBmb3IgKGNvbnN0IGQgb2Ygc3RhdHMuY2FsZW5kYXJHcmlkKSB7XG4gICAgaWYgKGQudG90YWwgPiBtYXhEYXkpIG1heERheSA9IGQudG90YWw7XG4gIH1cblxuICAvLyBDYWxlbmRhciBncmlkXG4gIGxldCBjZWxsSWR4ID0gMDtcbiAgbGV0IGN1cnJlbnRSb3cgPSBoZWF0bWFwLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1oZWF0bWFwLXJvd1wiIH0pO1xuXG4gIC8vIEVtcHR5IGNlbGxzIGZvciBvZmZzZXRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGp1c3RlZEZpcnN0OyBpKyspIHtcbiAgICBjdXJyZW50Um93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1oZWF0bWFwLWNlbGwgZW1wdHlcIiB9KTtcbiAgICBjZWxsSWR4Kys7XG4gIH1cblxuICBjb25zdCB0b2RheVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygc3RhdHMuY2FsZW5kYXJHcmlkKSB7XG4gICAgaWYgKGNlbGxJZHggPiAwICYmIGNlbGxJZHggJSA3ID09PSAwKSB7XG4gICAgICBjdXJyZW50Um93ID0gaGVhdG1hcC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtaGVhdG1hcC1yb3dcIiB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBjZWxsID0gY3VycmVudFJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtaGVhdG1hcC1jZWxsXCIgfSk7XG4gICAgY29uc3QgZGF0ZU51bSA9IHBhcnNlSW50KGRheS5kYXRlLnNsaWNlKC0yKSk7XG4gICAgY2VsbC5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtaGVhdG1hcC1udW1cIiwgdGV4dDogU3RyaW5nKGRhdGVOdW0pIH0pO1xuXG4gICAgaWYgKGRheS50b3RhbCA+IDApIHtcbiAgICAgIGNvbnN0IGludGVuc2l0eSA9IE1hdGgubWluKDEsIGRheS50b3RhbCAvIG1heERheSk7XG4gICAgICBjZWxsLnN0eWxlLmJhY2tncm91bmQgPSBgcmdiYSgyMTIsIDE2OCwgNjcsICR7MC4wOCArIGludGVuc2l0eSAqIDAuMzV9KWA7XG4gICAgICBjZWxsLnN0eWxlLmJvcmRlckNvbG9yID0gYHJnYmEoMjEyLCAxNjgsIDY3LCAkezAuMTUgKyBpbnRlbnNpdHkgKiAwLjI1fSlgO1xuICAgIH1cblxuICAgIGlmIChkYXkuZGF0ZSA9PT0gdG9kYXlTdHIpIGNlbGwuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xuICAgIGNlbGxJZHgrKztcbiAgfVxuXG4gIC8vIFdlZWtseSBiYXIgY2hhcnRcbiAgY29uc3Qgc3VidGl0bGUgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLXN1YnRpdGxlXCIgfSk7XG4gIHN1YnRpdGxlLnNldFRleHQoXCJCWSBXRUVLXCIpO1xuXG4gIHJlbmRlckJhckNoYXJ0KGNvbnRhaW5lciwgc3RhdHMuYnlXZWVrLCBzZXR0aW5ncyk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBZZWFybHkgVmlldyBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gcmVuZGVyWWVhcmx5VmlldyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3RhdHMgPSBlbmdpbmUuZ2V0WWVhcmx5U3RhdHMoKTtcblxuICAvLyBTdGF0cyByb3dcbiAgY29uc3Qgcm93ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1zdGF0c1wiIH0pO1xuICBjcmVhdGVTdGF0KHJvdywgU3RyaW5nKHN0YXRzLnRvdGFsU2Vzc2lvbnMpLCBcIlNlc3Npb25zXCIpO1xuICBjcmVhdGVTdGF0KHJvdywgU3RyaW5nKHN0YXRzLmFjdGl2ZURheXMpLCBcIkFjdGl2ZSBkYXlzXCIpO1xuXG4gIC8vIERpdmlkZXJcbiAgY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBNb250aGx5IGJhciBjaGFydFxuICBjb25zdCBzdWJ0aXRsZSA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3Mtc3VidGl0bGVcIiB9KTtcbiAgc3VidGl0bGUuc2V0VGV4dChcIk1PTlRIIFRSRU5EU1wiKTtcblxuICByZW5kZXJCYXJDaGFydChjb250YWluZXIsIHN0YXRzLmJ5TW9udGgsIHNldHRpbmdzKTtcblxuICAvLyBDYXRlZ29yeSBkaXN0cmlidXRpb25cbiAgY29uc3QgY2F0VGl0bGUgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLXN1YnRpdGxlXCIgfSk7XG4gIGNhdFRpdGxlLnNldFRleHQoXCJDQVRFR09SWSBTUExJVFwiKTtcblxuICBjb25zdCBjYXRUb3RhbCA9IEFycmF5LmZyb20oc3RhdHMuY2F0ZWdvcnlEaXN0cmlidXRpb24udmFsdWVzKCkpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICBpZiAoY2F0VG90YWwgPiAwKSB7XG4gICAgY29uc3QgZGlzdEJhciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtZGlzdC1iYXJcIiB9KTtcbiAgICBjb25zdCBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl07XG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgY291bnQgPSBzdGF0cy5jYXRlZ29yeURpc3RyaWJ1dGlvbi5nZXQoY2F0KSA/PyAwO1xuICAgICAgaWYgKGNvdW50ID09PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHBjdCA9IChjb3VudCAvIGNhdFRvdGFsKSAqIDEwMDtcbiAgICAgIGNvbnN0IHNlZyA9IGRpc3RCYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLWRpc3Qtc2VnXCIgfSk7XG4gICAgICBzZWcuc3R5bGUud2lkdGggPSBgJHtwY3R9JWA7XG4gICAgICBzZWcuc3R5bGUuYmFja2dyb3VuZCA9IGdldENhdGVnb3J5Q29sb3IoY2F0LCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gTGFiZWxzXG4gICAgY29uc3QgY2F0TGFiZWxzID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1kaXN0LWxhYmVsc1wiIH0pO1xuICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gc3RhdHMuY2F0ZWdvcnlEaXN0cmlidXRpb24uZ2V0KGNhdCkgPz8gMDtcbiAgICAgIGlmIChjb3VudCA9PT0gMCkgY29udGludWU7XG4gICAgICBjb25zdCBwY3QgPSBNYXRoLnJvdW5kKChjb3VudCAvIGNhdFRvdGFsKSAqIDEwMCk7XG4gICAgICBjb25zdCBsYmwgPSBjYXRMYWJlbHMuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLWRpc3QtbGFiZWxcIiB9KTtcbiAgICAgIGNvbnN0IGRvdCA9IGxibC5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtZGlzdC1kb3RcIiB9KTtcbiAgICAgIGRvdC5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0Q2F0ZWdvcnlDb2xvcihjYXQsIHNldHRpbmdzKTtcbiAgICAgIGxibC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBgJHtjYXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBjYXQuc2xpY2UoMSl9ICR7cGN0fSVgIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBlbXB0eSA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtZW1wdHlcIiB9KTtcbiAgICBlbXB0eS5zZXRUZXh0KFwiQ29tcGxldGUgc29tZSBhY3Rpdml0aWVzIHRvIHNlZSBkaXN0cmlidXRpb25cIik7XG4gIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwIEhlbHBlcnMgXHUyNTAwXHUyNTAwXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXQocGFyZW50OiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBzdGF0ID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1zdGF0XCIgfSk7XG4gIHN0YXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1hbmFseXRpY3Mtc3RhdC12YWx1ZVwiLCB0ZXh0OiB2YWx1ZSB9KTtcbiAgc3RhdC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFuYWx5dGljcy1zdGF0LWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCYXJDaGFydChcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgZGF0YTogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB0b3RhbDogbnVtYmVyOyBieUNhdGVnb3J5OiBNYXA8Q2F0ZWdvcnksIG51bWJlcj4gfT4sXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3Ncbik6IHZvaWQge1xuICBsZXQgbWF4VG90YWwgPSAxO1xuICBmb3IgKGNvbnN0IGQgb2YgZGF0YSkge1xuICAgIGlmIChkLnRvdGFsID4gbWF4VG90YWwpIG1heFRvdGFsID0gZC50b3RhbDtcbiAgfVxuXG4gIGNvbnN0IGJhcnMgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYW5hbHl0aWNzLWJhcnNcIiB9KTtcbiAgZm9yIChjb25zdCBkIG9mIGRhdGEpIHtcbiAgICBjb25zdCBjb2wgPSBiYXJzLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1iYXItY29sXCIgfSk7XG4gICAgY29uc3QgYmFySGVpZ2h0ID0gbWF4VG90YWwgPiAwID8gTWF0aC5tYXgoNCwgKGQudG90YWwgLyBtYXhUb3RhbCkgKiA4MCkgOiA0O1xuICAgIGNvbnN0IGJhckVsID0gY29sLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFuYWx5dGljcy1iYXJcIiB9KTtcbiAgICBiYXJFbC5zdHlsZS5oZWlnaHQgPSBgJHtiYXJIZWlnaHR9cHhgO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdO1xuICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgIGNvbnN0IGNhdENvdW50ID0gZC5ieUNhdGVnb3J5LmdldChjYXQpID8/IDA7XG4gICAgICBpZiAoY2F0Q291bnQgPT09IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3Qgc2VnSGVpZ2h0ID0gZC50b3RhbCA+IDAgPyAoY2F0Q291bnQgLyBkLnRvdGFsKSAqIDEwMCA6IDA7XG4gICAgICBjb25zdCBzZWcgPSBiYXJFbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hbmFseXRpY3MtYmFyLXNlZ1wiIH0pO1xuICAgICAgc2VnLnN0eWxlLmhlaWdodCA9IGAke3NlZ0hlaWdodH0lYDtcbiAgICAgIHNlZy5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0Q2F0ZWdvcnlDb2xvcihjYXQsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBpZiAoZC50b3RhbCA9PT0gMCkgYmFyRWwuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVwiO1xuICAgIGNvbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFuYWx5dGljcy1iYXItbGFiZWxcIiwgdGV4dDogZC5sYWJlbCB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRDYXRlZ29yeUNvbG9yKGNhdGVnb3J5OiBDYXRlZ29yeSwgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyk6IHN0cmluZyB7XG4gIHJldHVybiBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBXb3Jrc3BhY2UgVmlld1xuLy8gQWN0aXZlIHdvcmtzcGFjZSBzY3JlZW4gd2l0aCB0aW1lciwgc2tpbGxzLCBmaW5pc2ggZmxvdy5cbi8vIFdoZW4gYW4gYWN0aXZpdHkgaGFzIGEgd29ya3NwYWNlVGVtcGxhdGUsIHRoZSB0ZW1wbGF0ZSBpc1xuLy8gcmVuZGVyZWQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0aW1lciBVSS5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHR5cGUgeyBBY3RpdmVXb3Jrc3BhY2UsIEFjdGl2aXR5Q29uZmlnLCBXb3Jrc3BhY2VUeXBlLCBXb3Jrc3BhY2VSZXN1bHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIEZBTExCQUNLX1FVT1RFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSB0aW1lckludGVydmFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGFydFRpbWU6IERhdGU7XG4gIHByaXZhdGUgZWxhcHNlZCA9IDA7IC8vIHNlY29uZHNcbiAgLyoqIFdoZW4gaW4gdGVtcGxhdGUgbW9kZSwgdHJhY2tzIHRoZSBkYWlseSBub3RlIGZpbGUgdGhlIHRlbXBsYXRlIGlzIGJvdW5kIHRvICovXG4gIHByaXZhdGUgdGVtcGxhdGVOb3RlRmlsZTogVEZpbGUgfCBudWxsID0gbnVsbDtcbiAgLyoqIFRyYWNrcyB3aGV0aGVyIHdlIGFscmVhZHkgcHJvY2Vzc2VkIGEgY29tcGxldGlvbiAocHJldmVudHMgZG91YmxlLWFwcGx5KSAqL1xuICBwcml2YXRlIGNvbXBsZXRpb25BcHBsaWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVklFV19UWVBFX1dPUktTUEFDRTtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlO1xuICAgIHJldHVybiB3b3Jrc3BhY2UgPyBgV29ya3NwYWNlOiAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9YCA6IFwiV29ya3NwYWNlXCI7XG4gIH1cblxuICBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwidGltZXJcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2U7XG4gICAgaWYgKCF3b3Jrc3BhY2UpIHtcbiAgICAgIHRoaXMuY29udGVudEVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgdGV4dDogXCJObyBhY3RpdmUgd29ya3NwYWNlLlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKFxuICAgICAgKGEpID0+IGEuaWQgPT09IHdvcmtzcGFjZS5hY3Rpdml0eUlkLFxuICAgICk7XG5cbiAgICBpZiAoYWN0aXZpdHk/LndvcmtzcGFjZVRlbXBsYXRlKSB7XG4gICAgICAvLyBUZW1wbGF0ZSBtb2RlOiByZW5kZXIgdGhlIGFjdGl2aXR5IHRlbXBsYXRlIGJvdW5kIHRvIHRvZGF5J3MgZGFpbHkgbm90ZVxuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUZW1wbGF0ZU1vZGUod29ya3NwYWNlLCBhY3Rpdml0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQgbW9kZTogdGltZXIgKyBza2lsbHMgKyBmaW5pc2hcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUod29ya3NwYWNlLnN0YXJ0VGltZSk7XG4gICAgICB0aGlzLnJlbmRlcih3b3Jrc3BhY2UpO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIHRoaXMudGVtcGxhdGVOb3RlRmlsZSA9IG51bGw7XG4gICAgdGhpcy5jb21wbGV0aW9uQXBwbGllZCA9IGZhbHNlO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFRlbXBsYXRlIE1vZGVcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyVGVtcGxhdGVNb2RlKFxuICAgIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICAvLyBGaW5kIG9yIGNyZWF0ZSB0b2RheSdzIGRhaWx5IG5vdGUgZm9yIHRoaXMgYWN0aXZpdHlcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5maW5kT3JDcmVhdGVEYWlseU5vdGUoYWN0aXZpdHkpO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgY29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgdGV4dDogXCJDb3VsZCBub3QgbG9hZCBhY3Rpdml0eSBub3RlLlwiLFxuICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImNvbG9yOiB2YXIoLS10ZXh0LWVycm9yKTsgcGFkZGluZzogMjBweDsgdGV4dC1hbGlnbjogY2VudGVyO1wiIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRlbXBsYXRlTm90ZUZpbGUgPSBmaWxlO1xuXG4gICAgLy8gV2FpdCBmb3IgbWV0YWRhdGEgY2FjaGUgdG8gcG9wdWxhdGUgKGltcG9ydGFudCBmb3IgbmV3bHkgY3JlYXRlZCBmaWxlcylcbiAgICBhd2FpdCB0aGlzLndhaXRGb3JNZXRhZGF0YShmaWxlKTtcblxuICAgIC8vIFJlbmRlciB0ZW1wbGF0ZSBpbnRvIHRoZSB2aWV3J3MgY29udGVudCBhcmVhXG4gICAgY29uc3QgdGVtcGxhdGVDb250YWluZXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiIH0pO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnRlbXBsYXRlRW5naW5lLnJlbmRlcihcbiAgICAgIGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlISxcbiAgICAgIGZpbGUsXG4gICAgICB0ZW1wbGF0ZUNvbnRhaW5lcixcbiAgICApO1xuXG4gICAgLy8gV2F0Y2ggZm9yIHRoZSB0ZW1wbGF0ZSBtYXJraW5nIHRoZSBhY3Rpdml0eSBhcyBkb25lIGluIGZyb250bWF0dGVyLlxuICAgIC8vIFdoZW4gdGhlIGFjdGl2aXR5IHByb3BlcnR5IGJlY29tZXMgdHJ1ZSwgYXBwbHkgcGx1Z2luLWxldmVsIGVmZmVjdHNcbiAgICAvLyAoWFAsIGJvc3MgZGFtYWdlLCBjbGVhciBhY3RpdmVXb3Jrc3BhY2UpLlxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUub24oXCJjaGFuZ2VkXCIsIChjaGFuZ2VkRmlsZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0aW9uQXBwbGllZCkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hhbmdlZEZpbGUucGF0aCAhPT0gZmlsZS5wYXRoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShjaGFuZ2VkRmlsZSk7XG4gICAgICAgIGNvbnN0IGZtID0gY2FjaGU/LmZyb250bWF0dGVyO1xuICAgICAgICBpZiAoZm0/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRpb25BcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjb21wbGV0aW9uVHlwZSA9IGZtW2Ake2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlYF0gYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMuYXBwbHlUZW1wbGF0ZUNvbXBsZXRpb24od29ya3NwYWNlLCBhY3Rpdml0eSwgY29tcGxldGlvblR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdG9kYXkncyBkYWlseSBub3RlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXIsIG9yIGNyZWF0ZSBvbmUuXG4gICAqIEVuc3VyZXMgdGhlIG5vdGUgaGFzIGBhY3Rpdml0eTogPGlkPmAgaW4gZnJvbnRtYXR0ZXIgc28gdGhlXG4gICAqIHRlbXBsYXRlIHBvc3QtcHJvY2Vzc29yIGFsc28gd29ya3Mgd2hlbiBvcGVuaW5nIHRoZSBub3RlIGRpcmVjdGx5LlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBmaW5kT3JDcmVhdGVEYWlseU5vdGUoYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnKTogUHJvbWlzZTxURmlsZSB8IG51bGw+IHtcbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIExvb2sgZm9yIGV4aXN0aW5nIGRhaWx5IG5vdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBleGlzdGluZyA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJlxuICAgICAgICBmLmJhc2VuYW1lID09PSBkYXRlU3RyLFxuICAgICk7XG5cbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIC8vIEVuc3VyZSBpdCBoYXMgdGhlIGFjdGl2aXR5IGZpZWxkIGluIGZyb250bWF0dGVyXG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZXhpc3RpbmcsIChmbSkgPT4ge1xuICAgICAgICBpZiAoIWZtLmFjdGl2aXR5KSBmbS5hY3Rpdml0eSA9IGFjdGl2aXR5LmlkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIGZvbGRlciBleGlzdHNcbiAgICBjb25zdCBhYnN0cmFjdEZvbGRlciA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXIpO1xuICAgIGlmICghYWJzdHJhY3RGb2xkZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXIpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEZvbGRlciBtYXkgYWxyZWFkeSBleGlzdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBuZXcgZGFpbHkgbm90ZSB3aXRoIGFjdGl2aXR5IGZyb250bWF0dGVyXG4gICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgLS0tXFxuYWN0aXZpdHk6ICR7YWN0aXZpdHkuaWR9XFxuLS0tXFxuYDtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgY29udGVudCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBGaWxlIG1pZ2h0IGFscmVhZHkgZXhpc3Qgd2l0aCBhIGRpZmZlcmVudCBjYXNpbmcgb3IgcmFjZSBjb25kaXRpb25cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXYWl0IHVudGlsIHRoZSBtZXRhZGF0YSBjYWNoZSBoYXMgaW5kZXhlZCBhIGZpbGUncyBmcm9udG1hdHRlci5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgd2FpdEZvck1ldGFkYXRhKGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICB3aGlsZSAoYXR0ZW1wdHMgPCAyMCkge1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHJldHVybjtcbiAgICAgIGF3YWl0IHNsZWVwKDUwKTtcbiAgICAgIGF0dGVtcHRzKys7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB0ZW1wbGF0ZSBtYXJrcyB0aGUgYWN0aXZpdHkgYXMgZG9uZSBpbiBmcm9udG1hdHRlci5cbiAgICogQXBwbGllcyBwbHVnaW4tbGV2ZWwgZWZmZWN0czogWFAsIGJvc3MgZGFtYWdlLCBjbGVhciB3b3Jrc3BhY2UuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGFwcGx5VGVtcGxhdGVDb21wbGV0aW9uKFxuICAgIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICBjb21wbGV0aW9uVHlwZT86IHN0cmluZyxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTWFwIHRoZSB0ZW1wbGF0ZSdzIGNvbXBsZXRpb24gdHlwZSB0byBhIHdvcmtzcGFjZSBzdGF0ZVxuICAgIGNvbnN0IHdzVHlwZSA9IGNvbXBsZXRpb25UeXBlPy50b0xvd2VyQ2FzZSgpIGFzIFdvcmtzcGFjZVR5cGUgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3RhdGUgPSB3c1R5cGVcbiAgICAgID8gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSB3c1R5cGUpXG4gICAgICA6IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gXCJkaXNjaXBsaW5lXCIpO1xuXG4gICAgLy8gQXBwbHkgWFBcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUueHBNdWx0aXBsaWVyID4gMCkge1xuICAgICAgY29uc3QgeHBHYWluID0gTWF0aC5yb3VuZChcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbiAqIHN0YXRlLnhwTXVsdGlwbGllcixcbiAgICAgICk7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeVhQW3dvcmtzcGFjZS5jYXRlZ29yeV0gKz0geHBHYWluO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGJvc3MgZGFtYWdlICh1bmxlc3Mgc2tpcHBlZClcbiAgICBpZiAod3NUeXBlICE9PSBcInNraXBwZWRcIikge1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvbixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgYWN0aXZlIHdvcmtzcGFjZVxuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IG51bGw7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIERlZmF1bHQgTW9kZSAodGltZXIgKyBza2lsbHMgKyBmaW5pc2gpXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwcml2YXRlIHN0YXJ0VGltZXIoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lckludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICBjb25zdCB0aW1lckVsID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXdvcmtzcGFjZS10aW1lclwiKTtcbiAgICAgIGlmICh0aW1lckVsKSB0aW1lckVsLnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuZWxhcHNlZCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHN0b3BUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lckludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbCk7XG4gICAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZCBvbGVuLXdvcmtzcGFjZS1yb290XCIgfSk7XG5cbiAgICAvLyBUb3AgYmFyXG4gICAgY29uc3QgdG9wQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtdG9wYmFyXCIgfSk7XG5cbiAgICBjb25zdCBhY3RJbmZvID0gdG9wQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY3QtaW5mb1wiIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWVtb2ppXCIsIHRleHQ6IHdvcmtzcGFjZS5lbW9qaSB9KTtcbiAgICBhY3RJbmZvLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY3QtbmFtZVwiLCB0ZXh0OiB3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lIH0pO1xuXG4gICAgY29uc3QgdGltZXJFbCA9IHRvcEJhci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2UtdGltZXJcIixcbiAgICAgIHRleHQ6IFwiMDA6MDBcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbmlzaEJ0biA9IHRvcEJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXdvcmtzcGFjZS1maW5pc2gtYnRuXCIsXG4gICAgICB0ZXh0OiBcIkZJTklTSFwiLFxuICAgIH0pO1xuICAgIGZpbmlzaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93RmluaXNoTW9kYWwod29ya3NwYWNlKSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgbGluZVxuICAgIGNvbnN0IGFjY2VudENvbG9yID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbd29ya3NwYWNlLmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcbiAgICBjb25zdCBhY2NlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7YWNjZW50Q29sb3J9LCB0cmFuc3BhcmVudClgO1xuXG4gICAgLy8gTWFpbiBjb250ZW50IGFyZWFcbiAgICBjb25zdCBjb250ZW50ID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtY29udGVudFwiIH0pO1xuXG4gICAgLy8gU2tpbGxzIHNlY3Rpb25cbiAgICBjb25zdCBza2lsbHNTZWN0aW9uID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzLXNlY3Rpb25cIiB9KTtcbiAgICBza2lsbHNTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBcIldPUktTUEFDRSBTS0lMTFNcIiB9KTtcblxuICAgIGNvbnN0IHNraWxsc0NvbnRhaW5lciA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxsc1wiIH0pO1xuXG4gICAgaWYgKHdvcmtzcGFjZS5za2lsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBza2lsbHNDb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2Utbm8tc2tpbGxzXCIsXG4gICAgICAgIHRleHQ6IFwiTm8gc2tpbGxzIHRhZ2dlZCB5ZXRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHdvcmtzcGFjZS5za2lsbHMpIHtcbiAgICAgICAgY29uc3QgY2hpcCA9IHNraWxsc0NvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtY2hpcFwiIH0pO1xuICAgICAgICBjaGlwLnRleHRDb250ZW50ID0gc2tpbGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHNraWxscyBidXR0b25cbiAgICBjb25zdCBhZGRTa2lsbEJ0biA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXdvcmtzcGFjZS1hZGQtc2tpbGxcIixcbiAgICAgIHRleHQ6IFwiKyBBREQgU0tJTExcIixcbiAgICB9KTtcbiAgICBhZGRTa2lsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93U2tpbGxQaWNrZXIod29ya3NwYWNlKSk7XG5cbiAgICAvLyBGb2N1cyB6b25lIFx1MjAxNCBtb3RpdmF0aW9uYWwgYXJlYVxuICAgIGNvbnN0IGZvY3VzWm9uZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWZvY3VzXCIgfSk7XG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICAgIH0pO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG5cbiAgICAvLyBCb3R0b20gYmFyXG4gICAgY29uc3QgYm90dG9tQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtYm90dG9tYmFyXCIgfSk7XG4gICAgY29uc3QgY2F0TGFiZWwgPSB3b3Jrc3BhY2UuY2F0ZWdvcnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3Jrc3BhY2UuY2F0ZWdvcnkuc2xpY2UoMSk7XG4gICAgYm90dG9tQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1jYXRlZ29yeS1sYWJlbFwiLFxuICAgICAgdGV4dDogY2F0TGFiZWwsXG4gICAgfSk7XG4gICAgYm90dG9tQmFyLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGFjY2VudENvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93U2tpbGxQaWNrZXIod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICAvLyBQcm9tcHQgZm9yIHNraWxsIG5hbWUgdmlhIGEgc2ltcGxlIGlucHV0XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiQUREIFNLSUxMXCIgfSk7XG5cbiAgICBjb25zdCBpbnB1dFdyYXAgPSBzaGVldC5jcmVhdGVEaXYoeyBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMjBweCAwO1wiIH0gfSk7XG4gICAgY29uc3QgaW5wdXQgPSBpbnB1dFdyYXAuY3JlYXRlRWwoXCJpbnB1dFwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtaW5wdXRcIixcbiAgICAgIGF0dHI6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNraWxsIG5hbWUuLi5cIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2tpbGwgZm9sZGVyIGV4aXN0cywgbG9hZCBleGlzdGluZyBza2lsbHNcbiAgICBpZiAod29ya3NwYWNlLnNraWxsRm9sZGVyKSB7XG4gICAgICBjb25zdCBza2lsbHMgPSB0aGlzLmxvYWRTa2lsbHNGcm9tRm9sZGVyKHdvcmtzcGFjZS5za2lsbEZvbGRlcik7XG4gICAgICBpZiAoc2tpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzXCIsIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTZweDtcIiB9IH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHNraWxscykge1xuICAgICAgICAgIGNvbnN0IGNoaXAgPSBleGlzdGluZy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtY2hpcCBvbGVuLWNsaWNrYWJsZVwiIH0pO1xuICAgICAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBza2lsbDtcbiAgICAgICAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRTa2lsbChza2lsbCk7XG4gICAgICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICAgIHRleHQ6IFwiQUREXCIsXG4gICAgfSk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGFkZFNraWxsKHZhbCk7XG4gICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgICAgdGV4dDogXCJDQU5DRUxcIixcbiAgICB9KTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlU2hlZXQoKSk7XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVNoZWV0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRTa2lsbCA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghd29ya3NwYWNlLnNraWxscy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICB3b3Jrc3BhY2Uuc2tpbGxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IHdvcmtzcGFjZTtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKHdvcmtzcGFjZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlU2hlZXQgPSAoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFNraWxsc0Zyb21Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG4gICAgcmV0dXJuIGZpbGVzXG4gICAgICAuZmlsdGVyKChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGYpID0+IGYuYmFzZW5hbWUpXG4gICAgICAuc29ydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RmluaXNoTW9kYWwod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoKGVuZFRpbWUuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUuZ2V0VGltZSgpKSAvIDYwMDAwKTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICAgIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldFwiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiSE9XIERJRCBJVCBGRUVMP1wiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJvZHktaXRhbGljXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMTJweCAwIDIwcHg7XCIgfSxcbiAgICAgIHRleHQ6IGAke3dvcmtzcGFjZS5lbW9qaX0gJHt3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lfSBcdTAwQjcgJHtkdXJhdGlvbk1pbnV0ZXN9IG1pbnV0ZXNgLFxuICAgIH0pO1xuXG4gICAgLy8gQ29tcGxldGlvbiBzdGF0ZSBidXR0b25zXG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maWx0ZXIoKHMpID0+IHMuZW5hYmxlZCk7XG4gICAgY29uc3Qgc3RhdGVzR3JpZCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZXMtZ3JpZFwiIH0pO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGNvbnN0IGJ0biA9IHN0YXRlc0dyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlLWJ0blwiIH0pO1xuICAgICAgYnRuLnN0eWxlLmJvcmRlckNvbG9yID0gc3RhdGUuY29sb3I7XG5cbiAgICAgIGJ0bi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZS1pY29uXCIsIHRleHQ6IHN0YXRlLmljb24gfSk7XG4gICAgICBidG4uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGUtbmFtZVwiLCB0ZXh0OiBzdGF0ZS5uYW1lIH0pO1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQgPSB7XG4gICAgICAgICAgYWN0aXZpdHlJZDogd29ya3NwYWNlLmFjdGl2aXR5SWQsXG4gICAgICAgICAgYWN0aXZpdHlOYW1lOiB3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lLFxuICAgICAgICAgIGNhdGVnb3J5OiB3b3Jrc3BhY2UuY2F0ZWdvcnksXG4gICAgICAgICAgdHlwZTogc3RhdGUuaWQsXG4gICAgICAgICAgc3RhcnRUaW1lOiB3b3Jrc3BhY2Uuc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWU6IGVuZFRpbWUudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBkdXJhdGlvbk1pbnV0ZXMsXG4gICAgICAgICAgc2tpbGxzOiB3b3Jrc3BhY2Uuc2tpbGxzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZmluaXNoV29ya3NwYWNlKHJlc3VsdCwgd29ya3NwYWNlKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgICAvLyBEb24ndCBjbG9zZSBvbiBvdmVybGF5IHRhcCBcdTIwMTQgdXNlciBtdXN0IGNob29zZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VTaGVldCA9ICgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmaW5pc2hXb3Jrc3BhY2UocmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQsIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gMS4gQ3JlYXRlIHdvcmtzcGFjZSBtYXJrZG93biBmaWxlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXJcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgIGlmIChhY3Rpdml0eT8uZm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZVdvcmtzcGFjZUZpbGUocmVzdWx0LCBhY3Rpdml0eS5mb2xkZXIpO1xuICAgIH1cblxuICAgIC8vIDIuIFVwZGF0ZSB0aGUgYWN0aXZpdHkncyBkYWlseSBub3RlIGZyb250bWF0dGVyXG4gICAgYXdhaXQgdGhpcy5tYXJrQWN0aXZpdHlEb25lKHdvcmtzcGFjZSwgcmVzdWx0KTtcblxuICAgIC8vIDMuIEFwcGx5IFhQXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IHJlc3VsdC50eXBlKTtcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUueHBNdWx0aXBsaWVyID4gMCkge1xuICAgICAgY29uc3QgeHBHYWluID0gTWF0aC5yb3VuZCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uICogc3RhdGUueHBNdWx0aXBsaWVyKTtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbd29ya3NwYWNlLmNhdGVnb3J5XSArPSB4cEdhaW47XG4gICAgfVxuXG4gICAgLy8gNC4gQXBwbHkgYm9zcyBkYW1hZ2UgKHVubGVzcyBza2lwcGVkKVxuICAgIGlmIChyZXN1bHQudHlwZSAhPT0gXCJza2lwcGVkXCIpIHtcbiAgICAgIGNvbnN0IGFjdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgICAgaWYgKGFjdCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0LmRhbWFnZVBlckNvbXBsZXRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA1LiBDbGVhciBhY3RpdmUgd29ya3NwYWNlXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gbnVsbDtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblxuICAgIC8vIDYuIFNob3cgbm90aWNlXG4gICAgY29uc3Qgc3RhdGVMYWJlbCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gcmVzdWx0LnR5cGUpPy5uYW1lID8/IHJlc3VsdC50eXBlO1xuICAgIG5ldyBOb3RpY2UoYCR7d29ya3NwYWNlLmVtb2ppfSAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9IFx1MjAxNCAke3N0YXRlTGFiZWx9IFx1MDBCNyAke3Jlc3VsdC5kdXJhdGlvbk1pbnV0ZXN9bWApO1xuXG4gICAgLy8gNy4gU3dpdGNoIGJhY2sgdG8gZGFzaGJvYXJkXG4gICAgdGhpcy5wbHVnaW4uYWN0aXZhdGVEYXNoYm9hcmRWaWV3KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZVdvcmtzcGFjZUZpbGUocmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQsIGZvbGRlcjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IHJlc3VsdC5hY3Rpdml0eUlkKTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFjdGl2aXR5Py5wcm9wZXJ0eSA/PyByZXN1bHQuYWN0aXZpdHlOYW1lO1xuXG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKHJlc3VsdC5lbmRUaW1lKTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShyZXN1bHQuc3RhcnRUaW1lKTtcbiAgICBjb25zdCBkYXRlU3RyID0gZW5kVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAvLyBOYW1pbmc6IFwiV29ya3NwYWNlIFlZWVktTU0tREQgSEhNTVwiXG4gICAgY29uc3QgdGltZVN0ciA9IGAke1N0cmluZyhlbmRUaW1lLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKX0ke1N0cmluZyhlbmRUaW1lLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgV29ya3NwYWNlICR7ZGF0ZVN0cn0gJHt0aW1lU3RyfWA7XG4gICAgY29uc3QgZmlsZVBhdGggPSBgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9Lm1kYDtcblxuICAgIC8vIEJ1aWxkIHRpbWV6b25lLWF3YXJlIHRpbWVzdGFtcFxuICAgIGNvbnN0IHR6T2Zmc2V0ID0gLXN0YXJ0VGltZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGNvbnN0IHR6SG91cnMgPSBTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyh0ek9mZnNldCkgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0ek1pbnMgPSBTdHJpbmcoTWF0aC5hYnModHpPZmZzZXQpICUgNjApLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0elNpZ24gPSB0ek9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBzdGFydFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyB0elNpZ24gKyB0ekhvdXJzICsgXCI6XCIgKyB0ek1pbnM7XG5cbiAgICBjb25zdCBlbmRUaW1lc3RhbXAgPSBlbmRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgdHpTaWduICsgdHpIb3VycyArIFwiOlwiICsgdHpNaW5zO1xuXG4gICAgLy8gUGljayBhIHF1b3RlXG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuXG4gICAgLy8gQ2FwaXRhbGl6ZSBjb21wbGV0aW9uIHR5cGUgdG8gbWF0Y2ggZXhpc3RpbmcgZm9ybWF0IChEaXNjaXBsaW5lL0Zsb3cvU2tpcHBlZClcbiAgICBjb25zdCB0eXBlTmFtZSA9IHJlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSk7XG4gICAgY29uc3QgZHVyYXRpb25TdHIgPSBgJHtNYXRoLmZsb29yKHJlc3VsdC5kdXJhdGlvbk1pbnV0ZXMgLyA2MCl9aCAke3Jlc3VsdC5kdXJhdGlvbk1pbnV0ZXMgJSA2MH1tYDtcblxuICAgIC8vIEJ1aWxkIGZyb250bWF0dGVyXG4gICAgY29uc3QgZm1MaW5lcyA9IFtcbiAgICAgIFwiLS0tXCIsXG4gICAgICBcImVkaXRvci13aWR0aDogMTAwXCIsXG4gICAgICBgJHtwcm9wZXJ0eX06IHRydWVgLFxuICAgICAgYCR7cHJvcGVydHl9LVR5cGU6IFwiJHt0eXBlTmFtZX1cImAsXG4gICAgICBgVGltZXN0YW1wOiBcIiR7dGltZXN0YW1wfVwiYCxcbiAgICAgIGBlbmRUaW1lOiBcIiR7ZW5kVGltZXN0YW1wfVwiYCxcbiAgICAgIGBkdXJhdGlvbjogXCIke2R1cmF0aW9uU3RyfVwiYCxcbiAgICAgIGBjYXRlZ29yeTogXCIke3Jlc3VsdC5jYXRlZ29yeX1cImAsXG4gICAgICByZXN1bHQuc2tpbGxzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBgc2tpbGxzOiBbJHtyZXN1bHQuc2tpbGxzLm1hcCgocykgPT4gYFwiJHtzfVwiYCkuam9pbihcIiwgXCIpfV1gXG4gICAgICAgIDogXCJza2lsbHM6IFtdXCIsXG4gICAgICBcImNzc2NsYXNzZXM6XCIsXG4gICAgICBcIiAgLSBoaWRlLXByb3BlcnRpZXNcIixcbiAgICAgIFwiLS0tXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGJvZHkgPSBbXG4gICAgICBcIlwiLFxuICAgICAgYCMgJHthY3Rpdml0eT8uZW1vamkgPz8gXCJcIn0gJHtyZXN1bHQuYWN0aXZpdHlOYW1lfSBXb3Jrc3BhY2VgLFxuICAgICAgXCJcIixcbiAgICAgIGA+IFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgICAgIGA+IFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgICBcIlwiLFxuICAgICAgXCIjIyBOb3Rlc1wiLFxuICAgICAgXCJcIixcbiAgICAgIFwiXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbLi4uZm1MaW5lcywgLi4uYm9keV0uam9pbihcIlxcblwiKTtcblxuICAgIC8vIEVuc3VyZSBmb2xkZXIgZXhpc3RzXG4gICAgY29uc3QgYWJzdHJhY3RGb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyKTtcbiAgICBpZiAoIWFic3RyYWN0Rm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZHVwbGljYXRlIGZpbGVuYW1lc1xuICAgIGxldCBmaW5hbFBhdGggPSBmaWxlUGF0aDtcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aCk7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBsZXQgY291bnRlciA9IDI7XG4gICAgICB3aGlsZSAodGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0gKCR7Y291bnRlcn0pLm1kYCkpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfVxuICAgICAgZmluYWxQYXRoID0gYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaW5hbFBhdGgsIGNvbnRlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYXJrQWN0aXZpdHlEb25lKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLCByZXN1bHQ/OiBXb3Jrc3BhY2VSZXN1bHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBGaW5kIHRvZGF5J3Mgbm90ZSBpbiB0aGUgYWN0aXZpdHkgZm9sZGVyIGFuZCBzZXQgdGhlIHByb3BlcnR5IHRvIHRydWVcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybjtcblxuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgYSBmaWxlIG1hdGNoaW5nIHRvZGF5J3MgZGF0ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IHRvZGF5RmlsZSA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgKTtcblxuICAgIGlmICh0b2RheUZpbGUpIHtcbiAgICAgIC8vIFVwZGF0ZSBmcm9udG1hdHRlciBcdTIwMTQgc2V0IHByb3BlcnR5IGFuZCBjb21wbGV0aW9uIHR5cGVcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcih0b2RheUZpbGUsIChmcm9udG1hdHRlcikgPT4ge1xuICAgICAgICBmcm9udG1hdHRlclthY3Rpdml0eS5wcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSByZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpO1xuICAgICAgICAgIGZyb250bWF0dGVyW2Ake2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlYF0gPSB0eXBlTmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGFpbHkgbm90ZSB3aXRoIHRoZSBwcm9wZXJ0eSBzZXRcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICAgIGNvbnN0IHR5cGVMaW5lID0gcmVzdWx0XG4gICAgICAgID8gYFxcbiR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGU6IFwiJHtyZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpfVwiYFxuICAgICAgICA6IFwiXCI7XG4gICAgICBjb25zdCBjb250ZW50ID0gYC0tLVxcbiR7YWN0aXZpdHkucHJvcGVydHl9OiB0cnVlJHt0eXBlTGluZX1cXG4tLS1cXG5gO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBGaWxlIG1pZ2h0IGFscmVhZHkgZXhpc3Qgd2l0aCBhIGRpZmZlcmVudCBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lKHNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChzZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3QgcyA9IHNlY29uZHMgJSA2MDtcbiAgICBpZiAoaCA+IDApIHtcbiAgICAgIHJldHVybiBgJHtofToke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7U3RyaW5nKHMpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtTdHJpbmcocykucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH1cbn1cblxuLy8gVXRpbGl0eVxuZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFNldHRpbmdzIFRhYlxuLy8gQ29sbGFwc2libGUgc2VjdGlvbnMgZm9yIGFsbCBwbHVnaW4gY29uZmlndXJhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgVGV4dENvbXBvbmVudCwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2aXR5Q29uZmlnLCBDYXRlZ29yeSwgVGVtcGxlVGFzaywgR2VuZGVyLCBXZWlnaHRMb2dGcmVxdWVuY3kgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfQUNUSVZJVElFUywgREVGQVVMVF9ERVZfQ09ORklHIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgT2xlblNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcbiAgICBjb250YWluZXJFbC5hZGRDbGFzcyhcIm9sZW4tc2V0dGluZ3NcIik7XG5cbiAgICAvLyBIZWFkZXJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICB0ZXh0OiBcIk9sZW5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAxLjRlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWJvdHRvbTogNHB4OyBwYWRkaW5nOiA4cHggMDtcIiB9LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiTXl0aG9sb2dpY2FsIExpZmUtT3BlcmF0aW5nIFN5c3RlbVwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiAxNnB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBRdWljayBzdGF0dXMgYmFyXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNCYXIoY29udGFpbmVyRWwpO1xuXG4gICAgLy8gU2VjdGlvbnNcbiAgICB0aGlzLnJlbmRlclByb2ZpbGVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclBlcnNvbmFsU3RhdHNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFjdGl2aXRpZXNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckNhdGVnb3JpZXNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclRlbXBsZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQ2FsZW5kYXJTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclRoZW1lU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBZHZhbmNlZFNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyRGV2RGFzaGJvYXJkU2VjdGlvbihjb250YWluZXJFbCk7XG4gIH1cblxuICAvLyAtLS0gQ29sbGFwc2libGUgU2VjdGlvbiBIZWxwZXIgLS0tXG5cbiAgcHJpdmF0ZSBjcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGljb246IHN0cmluZyxcbiAgICBkZWZhdWx0T3BlbiA9IGZhbHNlXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWN0aW9uID0gcGFyZW50LmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVyID0gc2VjdGlvbi5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBkZWZhdWx0T3BlbiA/IFwiXFx1MjVCQ1wiIDogXCJcXHUyNUI2XCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMTBweDsgd2lkdGg6IDEycHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGhlYWRlci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogaWNvbiA/IGAke2ljb259ICAke3RpdGxlfWAgOiB0aXRsZSxcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjk1ZW07XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvZHkgPSBzZWN0aW9uLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7IHN0eWxlOiBgcGFkZGluZzogMCAxNnB4OyBkaXNwbGF5OiAke2RlZmF1bHRPcGVuID8gXCJibG9ja1wiIDogXCJub25lXCJ9O2AgfSxcbiAgICB9KTtcblxuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaXNPcGVuID0gYm9keS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcbiAgICAgIGJvZHkuc3R5bGUuZGlzcGxheSA9IGlzT3BlbiA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgYm9keS5zdHlsZS5wYWRkaW5nID0gaXNPcGVuID8gXCIwIDE2cHhcIiA6IFwiMTJweCAxNnB4XCI7XG4gICAgICBhcnJvdy50ZXh0Q29udGVudCA9IGlzT3BlbiA/IFwiXFx1MjVCNlwiIDogXCJcXHUyNUJDXCI7XG4gICAgfSk7XG5cbiAgICBpZiAoZGVmYXVsdE9wZW4pIGJvZHkuc3R5bGUucGFkZGluZyA9IFwiMTJweCAxNnB4XCI7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICAvLyAtLS0gU3RhdHVzIEJhciAtLS1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0Jhcihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgaHBQZXJjZW50ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQID4gMFxuICAgICAgPyBNYXRoLnJvdW5kKCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC8gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQKSAqIDEwMClcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IGJhciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDsgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGBUaWVyICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VycmVudFRpZXJ9LzEzYCB9KTtcbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGBIUCAke3RoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFB9LyR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQfSAoJHtocFBlcmNlbnR9JSlgLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5pblRhcnRhcnVzXG4gICAgICA/IFwiVEFSVEFSVVNcIlxuICAgICAgOiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIlxuICAgICAgICA/IFwiUEFVU0VEXCJcbiAgICAgICAgOiBcIkFDVElWRVwiO1xuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogc3RhdGUsXG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuaW5UYXJ0YXJ1cyA/IFwidmFyKC0tdGV4dC1lcnJvcilcIiA6IFwidmFyKC0tdGV4dC1ub3JtYWwpXCJ9O2AsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5taWdyYXRlZCA/IFwiTWlncmF0ZWRcIiA6IFwiTm90IG1pZ3JhdGVkXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc3R5bGU6IGl0YWxpYztcIiB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIFByb2ZpbGUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJQcm9maWxlU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJQcm9maWxlXCIsIFwiXFx1ezFGNDY0fVwiKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIk5hbWVcIilcbiAgICAgIC5zZXREZXNjKFwiWW91ciBuYW1lIGZvciB0aGUgZGFzaGJvYXJkIGdyZWV0aW5nXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VyTmFtZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VyTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJNeSBXaHlcIilcbiAgICAgIC5zZXREZXNjKFwiWW91ciBjb3JlIG1vdGl2YXRpb24gXHUyMDE0IHNob3duIHBlcmlvZGljYWxseSBvbiB0aGUgZGFzaGJvYXJkXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKGFyZWEpID0+XG4gICAgICAgIGFyZWFcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubXlXaHkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubXlXaHkgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSGVybyBiYWNrZ3JvdW5kIGltYWdlXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IHBhdGggdG8gdGhlIGhlcm8gYmFja2dyb3VuZCBpbWFnZSAoZS5nLiwgaW1hZ2VzL2hlcm8uanBnKVwiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJwYXRoL3RvL2ltYWdlLmpwZ1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIb21lcGFnZVwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmaWxlIHRvIG9wZW4gd2hlbiBhY3Rpdml0aWVzIGFyZSBzZXQgdG8gJ09wZW4gaG9tZXBhZ2UnIGFmdGVyIGNvbXBsZXRpb24gKGUuZy4gSG9tZS5tZClcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiZS5nLiBIb21lLm1kXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmhvbWVwYWdlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmhvbWVwYWdlID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBQZXJzb25hbCBTdGF0cyAtLS1cblxuICBwcml2YXRlIHJlbmRlclBlcnNvbmFsU3RhdHNTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlBlcnNvbmFsIFN0YXRzXCIsIFwiXFx1ezFGNENBfVwiKTtcbiAgICBjb25zdCBzdGF0cyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHM7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJHZW5kZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVXNlZCB0byBzaG93IHRoZSBjb3JyZWN0IG11c2NsZSBmaWd1cmUgb24gdGhlIGhlYXRtYXBcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgbWFsZTogXCJNYWxlXCIsIGZlbWFsZTogXCJGZW1hbGVcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShzdGF0cy5nZW5kZXIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmdlbmRlciA9IHYgYXMgR2VuZGVyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIZWlnaHQgKGNtKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoc3RhdHMuaGVpZ2h0ID8gU3RyaW5nKHN0YXRzLmhlaWdodCkgOiBcIlwiKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImUuZy4gMTc1XCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuaGVpZ2h0ID0gbjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJCaXJ0aGRhdGVcIilcbiAgICAgIC5zZXREZXNjKFwiVXNlZCB0byBjYWxjdWxhdGUgeW91ciBhZ2UgZm9yIHRoZSBzdHJlbmd0aCBjYWxjdWxhdG9yXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShzdGF0cy5iaXJ0aGRhdGUpXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiWVlZWS1NTS1ERFwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgaWYgKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHYpIHx8IHYgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5iaXJ0aGRhdGUgPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIEFnZSBkaXNwbGF5XG4gICAgaWYgKHN0YXRzLmJpcnRoZGF0ZSkge1xuICAgICAgY29uc3QgYWdlID0gdGhpcy5jYWxjdWxhdGVBZ2Uoc3RhdHMuYmlydGhkYXRlKTtcbiAgICAgIGJvZHkuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICB0ZXh0OiBgQWdlOiAke2FnZX0geWVhcnNgLFxuICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDEycHg7IHBhZGRpbmctbGVmdDogNHB4O1wiIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBXZWlnaHQgc2VjdGlvblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkN1cnJlbnQgd2VpZ2h0IChrZylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKHN0YXRzLmN1cnJlbnRXZWlnaHQgPyBTdHJpbmcoc3RhdHMuY3VycmVudFdlaWdodCkgOiBcIlwiKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImUuZy4gNjFcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmN1cnJlbnRXZWlnaHQgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIldlaWdodCBsb2dnaW5nIGZyZXF1ZW5jeVwiKVxuICAgICAgLnNldERlc2MoXCJIb3cgb2Z0ZW4geW91IHdhbnQgdG8gYmUgcmVtaW5kZWQgdG8gbG9nIHlvdXIgd2VpZ2h0XCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7XG4gICAgICAgICAgXCJ0d2ljZS1hLXdlZWtcIjogXCJUd2ljZSBhIHdlZWtcIixcbiAgICAgICAgICBcImV2ZXJ5LXdlZWtcIjogXCJFdmVyeSB3ZWVrXCIsXG4gICAgICAgICAgXCJldmVyeS0yLXdlZWtzXCI6IFwiRXZlcnkgMiB3ZWVrc1wiLFxuICAgICAgICAgIFwiZXZlcnktMy1kYXlzXCI6IFwiRXZlcnkgMyBkYXlzXCIsXG4gICAgICAgICAgXCJldmVyeS01LWRheXNcIjogXCJFdmVyeSA1IGRheXNcIixcbiAgICAgICAgICBcImN1c3RvbVwiOiBcIkN1c3RvbSBpbnRlcnZhbFwiLFxuICAgICAgICB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShzdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3kpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZ0ZyZXF1ZW5jeSA9IHYgYXMgV2VpZ2h0TG9nRnJlcXVlbmN5O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGlmIChzdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3kgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKFwiQ3VzdG9tIGludGVydmFsIChkYXlzKVwiKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhzdGF0cy53ZWlnaHRMb2dDdXN0b21EYXlzKSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZ0N1c3RvbURheXMgPSBuO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIExvZyB3ZWlnaHQgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTG9nIGN1cnJlbnQgd2VpZ2h0XCIpXG4gICAgICAuc2V0RGVzYyhcIlNhdmUgdG9kYXkncyB3ZWlnaHQgdG8geW91ciBwcm9ncmVzcyBoaXN0b3J5XCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiTG9nIFdlaWdodFwiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB3ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5jdXJyZW50V2VpZ2h0O1xuICAgICAgICAgIGlmICghdyB8fCB3IDw9IDApIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJFbnRlciB5b3VyIGN1cnJlbnQgd2VpZ2h0IGZpcnN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIGZvciB0b2RheVxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2cuZmluZCgoZSkgPT4gZS5kYXRlID09PSB0b2RheSk7XG4gICAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBleGlzdGluZy53ZWlnaHQgPSB3O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5wdXNoKHsgZGF0ZTogdG9kYXksIHdlaWdodDogdyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5sYXN0V2VpZ2h0TG9nRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoYFdlaWdodCBsb2dnZWQ6ICR7d30ga2dgKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBXZWlnaHQgaGlzdG9yeSAobGFzdCAxMCBlbnRyaWVzKVxuICAgIGNvbnN0IGxvZyA9IHN0YXRzLndlaWdodExvZztcbiAgICBpZiAobG9nLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGhpc3RvcnlFbCA9IGJvZHkuY3JlYXRlRGl2KHtcbiAgICAgICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW46IDhweCAwOyBwYWRkaW5nOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1wiIH0sXG4gICAgICB9KTtcbiAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIHRleHQ6IFwiV2VpZ2h0IEhpc3RvcnlcIixcbiAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOWVtOyBtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzb3J0ZWQgPSBbLi4ubG9nXS5zb3J0KChhLCBiKSA9PiBiLmRhdGUubG9jYWxlQ29tcGFyZShhLmRhdGUpKTtcbiAgICAgIGNvbnN0IHJlY2VudCA9IHNvcnRlZC5zbGljZSgwLCAxMCk7XG5cbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmVjZW50KSB7XG4gICAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogYCR7ZW50cnkuZGF0ZX06ICR7ZW50cnkud2VpZ2h0fSBrZ2AsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuOGVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IHBhZGRpbmc6IDJweCAwO1wiIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc29ydGVkLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogYC4uLiBhbmQgJHtzb3J0ZWQubGVuZ3RoIC0gMTB9IG1vcmUgZW50cmllc2AsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuNzVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXN0eWxlOiBpdGFsaWM7XCIgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBZ2UoYmlydGhkYXRlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGJpcnRoID0gbmV3IERhdGUoYmlydGhkYXRlKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBhZ2UgPSBub3cuZ2V0RnVsbFllYXIoKSAtIGJpcnRoLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGhEaWZmID0gbm93LmdldE1vbnRoKCkgLSBiaXJ0aC5nZXRNb250aCgpO1xuICAgIGlmIChtb250aERpZmYgPCAwIHx8IChtb250aERpZmYgPT09IDAgJiYgbm93LmdldERhdGUoKSA8IGJpcnRoLmdldERhdGUoKSkpIHtcbiAgICAgIGFnZS0tO1xuICAgIH1cbiAgICByZXR1cm4gYWdlO1xuICB9XG5cbiAgLy8gLS0tIEFjdGl2aXRpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJBY3Rpdml0aWVzXCIsIFwiXFx1ezFGM0FGfVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2ldO1xuICAgICAgdGhpcy5yZW5kZXJBY3Rpdml0eUl0ZW0oYm9keSwgYWN0aXZpdHksIGkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBidXR0b25cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIEFjdGl2aXR5XCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0FjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGlkOiBgY3VzdG9tLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgbmFtZTogXCJOZXcgQWN0aXZpdHlcIixcbiAgICAgICAgICAgIGVtb2ppOiBcIlxcdTJCNTBcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIlwiLFxuICAgICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSxcbiAgICAgICAgICAgIHdlZWtseVRhcmdldDogMyxcbiAgICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgICAgaGFzV29ya3NwYWNlOiBmYWxzZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiA1LFxuICAgICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICAgIHByZWZlcnJlZFRpbWU6IFwiYW55dGltZVwiLFxuICAgICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5wdXNoKG5ld0FjdGl2aXR5KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckFjdGl2aXR5SXRlbShjb250YWluZXI6IEhUTUxFbGVtZW50LCBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBIZWFkZXIgcm93IHdpdGggdG9nZ2xlXG4gICAgbmV3IFNldHRpbmcod3JhcHBlcilcbiAgICAgIC5zZXROYW1lKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9YClcbiAgICAgIC5zZXREZXNjKGAke2FjdGl2aXR5LmNhdGVnb3J5fSBcdTAwQjcgJHthY3Rpdml0eS5mb2xkZXIgfHwgXCJubyBmb2xkZXIgc2V0XCJ9YClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKGFjdGl2aXR5LmVuYWJsZWQpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBhbmRhYmxlIGRldGFpbHNcbiAgICBjb25zdCBkZXRhaWxzVG9nZ2xlID0gd3JhcHBlci5jcmVhdGVFbChcImRldGFpbHNcIik7XG4gICAgZGV0YWlsc1RvZ2dsZS5jcmVhdGVFbChcInN1bW1hcnlcIiwge1xuICAgICAgdGV4dDogXCJDb25maWd1cmVcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzVG9nZ2xlLmNyZWF0ZURpdigpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkubmFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmFtZSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRW1vamlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbW9qaSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQ2F0ZWdvcnlcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgYm9keTogXCJCb2R5XCIsIG1pbmQ6IFwiTWluZFwiLCBzcGlyaXQ6IFwiU3Bpcml0XCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuY2F0ZWdvcnkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jYXRlZ29yeSA9IHYgYXMgQ2F0ZWdvcnk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkFjdGl2aXR5IGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgd2l0aCBZWVlZLU1NLUREIG5vdGVzIGFuZCB3b3Jrc3BhY2UgbG9nc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkuZm9sZGVyKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5mb2xkZXIgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkZyb250bWF0dGVyIHByb3BlcnR5XCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5wcm9wZXJ0eSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJvcGVydHkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldlZWtseSB0YXJnZXRcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDcsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LndlZWtseVRhcmdldClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud2Vla2x5VGFyZ2V0ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJpb3JpdHkgKDEtMTApXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxMCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJpb3JpdHkpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByaW9yaXR5ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJlZmVycmVkIHRpbWVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBtb3JuaW5nOiBcIk1vcm5pbmdcIiwgYWZ0ZXJub29uOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIGV2ZW5pbmc6IFwiRXZlbmluZ1wiLCBhbnl0aW1lOiBcIkFueXRpbWVcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJlZmVycmVkVGltZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByZWZlcnJlZFRpbWUgPSB2IGFzIGFueTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmVnbGVjdCB0aHJlc2hvbGQgKGRheXMpXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxNCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkubmVnbGVjdFRocmVzaG9sZClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmVnbGVjdFRocmVzaG9sZCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVzdGltYXRlZCBkdXJhdGlvbiAobWludXRlcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVzdGltYXRlZER1cmF0aW9uID0gbjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJIYXMgd29ya3NwYWNlXCIpXG4gICAgICAuc2V0RGVzYyhcIk9wZW5zIHdvcmtzcGFjZSB2aWV3IHdpdGggdGltZXIgd2hlbiBzdGFydGVkLCBpbnN0ZWFkIG9mIG1hcmtpbmcgZG9uZSBpbW1lZGlhdGVseVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUoYWN0aXZpdHkuaGFzV29ya3NwYWNlKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmhhc1dvcmtzcGFjZSA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIHRlbXBsYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIkJ1aWx0LWluIHRlbXBsYXRlIElEIChlLmcuICd3b3Jrb3V0Jykgb3IgdmF1bHQgcGF0aCB0byAuanMgZmlsZS4gTGVhdmUgZW1wdHkgZm9yIGRlZmF1bHQgd29ya3NwYWNlLlwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIHdvcmtvdXRcIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLndvcmtzcGFjZVRlbXBsYXRlID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlNraWxsIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBza2lsbCB0cmVlIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gSG9tZS9TdGFydHMvRHJhd2luZy9Ta2lsbCB0cmVlXCIpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnNraWxsRm9sZGVyID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5za2lsbEZvbGRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQWZ0ZXIgY29tcGxldGlvblwiKVxuICAgICAgLnNldERlc2MoXCJXaGVyZSB0byBnbyBhZnRlciBmaW5pc2hpbmcgdGhpcyBhY3Rpdml0eVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoe1xuICAgICAgICAgIGRhc2hib2FyZDogXCJSZXR1cm4gdG8gT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgICAgICBzdGF5OiBcIlN0YXkgb24gbm90ZVwiLFxuICAgICAgICAgIGhvbWVwYWdlOiBcIk9wZW4gaG9tZXBhZ2VcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAhYWN0aXZpdHkuY29tcGxldGlvblJldHVyblRvIHx8IGFjdGl2aXR5LmNvbXBsZXRpb25SZXR1cm5UbyA9PT0gXCJkYXNoYm9hcmRcIlxuICAgICAgICAgICAgICA/IFwiZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgOiBhY3Rpdml0eS5jb21wbGV0aW9uUmV0dXJuVG8gPT09IFwic3RheVwiXG4gICAgICAgICAgICAgICAgPyBcInN0YXlcIlxuICAgICAgICAgICAgICAgIDogXCJob21lcGFnZVwiXG4gICAgICAgICAgKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY29tcGxldGlvblJldHVyblRvID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQmxvY2tzIChjb21tYS1zZXBhcmF0ZWQgYWN0aXZpdHkgSURzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoKGFjdGl2aXR5LmJsb2NrcyA/PyBbXSkuam9pbihcIiwgXCIpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmJsb2NrcyA9IHYuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBbHRlcm5hdGVzIHdpdGggKGFjdGl2aXR5IElEKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGggPz8gXCJcIikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5hbHRlcm5hdGVzV2l0aCA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJDaGFpbiBhZnRlciAoYWN0aXZpdHkgSUQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShhY3Rpdml0eS5jaGFpbkFmdGVyID8/IFwiXCIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2hhaW5BZnRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBEZWxldGUgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoXCJEZWxldGUgQWN0aXZpdHlcIilcbiAgICAgICAgICAuc2V0V2FybmluZygpXG4gICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBDYXRlZ29yaWVzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQ2F0ZWdvcmllc1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2F0ZWdvcmllc1wiLCBcIlxcdXsxRjNBOH1cIik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzOiB7IGtleTogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICAgIHsga2V5OiBcIm1pbmRcIiwgbGFiZWw6IFwiTWluZFwiIH0sXG4gICAgICB7IGtleTogXCJzcGlyaXRcIiwgbGFiZWw6IFwiU3Bpcml0XCIgfSxcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7Y2F0LmxhYmVsfSBjb2xvcmApXG4gICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+XG4gICAgICAgICAgY3BcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJUaXRsZSBvdmVycmlkZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0aGUgZHluYW1pYyB0aXRsZSAobGVhdmUgZW1wdHkgZm9yIGF1dG8pXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGl0bGVPdmVycmlkZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRlbXBsZSBVcGtlZXBcIiwgXCJcXHV7MUYzREJ9XFx1RkUwRlwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXTtcblxuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7dGFzay5lbW9qaX0gJHt0YXNrLm5hbWV9YClcbiAgICAgICAgLnNldERlc2MoYEV2ZXJ5ICR7dGFzay5pbnRlcnZhbERheXN9IGRheShzKWApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJOYW1lXCIpLnNldFZhbHVlKHRhc2submFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLm5hbWUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiRGF5c1wiKS5zZXRWYWx1ZShTdHJpbmcodGFzay5pbnRlcnZhbERheXMpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5pbnRlcnZhbERheXMgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJFbW9qaVwiKS5zZXRWYWx1ZSh0YXNrLmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0uZW1vamkgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgVGVtcGxlIFRhc2tcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdGVtcGxlLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgIG5hbWU6IFwiTmV3IFRhc2tcIixcbiAgICAgICAgICBsYXN0Q29tcGxldGVkOiBudWxsLFxuICAgICAgICAgIGludGVydmFsRGF5czogNyxcbiAgICAgICAgICBlbW9qaTogXCJcXHUyNzI4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJDYWxlbmRhclNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2FsZW5kYXIgSW50ZWdyYXRpb25cIiwgXCJcXHV7MUY0QzV9XCIpO1xuXG4gICAgYm9keS5jcmVhdGVFbChcInBcIiwge1xuICAgICAgdGV4dDogXCJNZXJnZSBleHRlcm5hbCB0YXNrcyBpbnRvIHlvdXIgRGF5IE1hcCB0aW1lbGluZS5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXNcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJEYWlseSBOb3RlcyBpbnRlZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJQYXJzZSB0YXNrcyBmcm9tIHlvdXIgZGFpbHkgbm90ZXMgKC0gWyBdIFRhc2sgQHRpbWUgfjMwbSlcIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRGFpbHkgTm90ZXMgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIFlZWVktTU0tREQubWQgbm90ZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiRGFpbHkgTm90ZXNcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBPcHRpb24gQjogVGFza3MgUGx1Z2luXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiVGFza3MgUGx1Z2luIGludGVncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlYWQgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgZnJvbSB0aGUgVGFza3MgcGx1Z2luXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbiA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gT3B0aW9uIEM6IFF1aWNrIFRhc2tzXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVpY2sgVGFza3NcIilcbiAgICAgIC5zZXREZXNjKFwiT2xlbidzIGJ1aWx0LWluIHRhc2sgc3lzdGVtXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MgPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIFF1aWNrIFRhc2tzIGxpc3RcbiAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICBjb25zdCB0b2RheVRhc2tzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maWx0ZXIoXG4gICAgICAgIChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXlcbiAgICAgICk7XG5cbiAgICAgIGlmICh0b2RheVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gYm9keS5jcmVhdGVEaXYoe1xuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiA4cHggMDsgcGFkZGluZzogOHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDZweDtcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0RWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgIHRleHQ6IFwiVG9kYXkncyBRdWljayBUYXNrc1wiLFxuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjllbTsgbWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrc1tpXTtcbiAgICAgICAgICBpZiAocXQuZGF0ZSAhPT0gdG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbmV3IFNldHRpbmcobGlzdEVsKVxuICAgICAgICAgICAgLnNldE5hbWUoYCR7cXQuZG9uZSA/IFwiXFx1MjcxM1wiIDogXCJcXHUyNUNCXCJ9ICR7cXQudGl0bGV9YClcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICBbcXQudGltZSwgcXQuZHVyYXRpb24gPyBgJHtxdC5kdXJhdGlvbn1tYCA6IFwiXCJdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFx1MDBCNyBcIikgfHwgXCJObyB0aW1lIHNldFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiRGVsZXRlXCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgUXVpY2sgVGFza1wiKS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCk7XG4gICAgICAgICAgLy8gQ2xvc2Ugc2V0dGluZ3MgXHUyMDE0IHRoZSBkaWFsb2cgYXBwZWFycyBvbiB0b3BcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRoZW1lIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyVGhlbWVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRoZW1lXCIsIFwiXFx1ezFGM0E4fVwiKTtcblxuICAgIGNvbnN0IHRoZW1lRmllbGRzOiB7IGtleTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBkZWZhdWx0VmFsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYmdQcmltYXJ5XCIsIGxhYmVsOiBcIkJhY2tncm91bmRcIiwgZGVmYXVsdFZhbDogXCIjMGMwYTA5XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRQcmltYXJ5XCIsIGxhYmVsOiBcIlRleHRcIiwgZGVmYXVsdFZhbDogXCIjZjVmMGU4XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRNdXRlZFwiLCBsYWJlbDogXCJNdXRlZCB0ZXh0XCIsIGRlZmF1bHRWYWw6IFwiIzkyOGQ4NVwiIH0sXG4gICAgICB7IGtleTogXCJhY2NlbnRHb2xkXCIsIGxhYmVsOiBcIkFjY2VudCAoZ29sZClcIiwgZGVmYXVsdFZhbDogXCIjYzlhODRjXCIgfSxcbiAgICAgIHsga2V5OiBcImRhbmdlclwiLCBsYWJlbDogXCJEYW5nZXJcIiwgZGVmYXVsdFZhbDogXCIjOGIyZDM1XCIgfSxcbiAgICAgIHsga2V5OiBcInN1Y2Nlc3NcIiwgbGFiZWw6IFwiU3VjY2Vzc1wiLCBkZWZhdWx0VmFsOiBcIiNkNDk0MGFcIiB9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoZW1lRmllbGRzKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShmaWVsZC5sYWJlbClcbiAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT5cbiAgICAgICAgICBjcFxuICAgICAgICAgICAgLnNldFZhbHVlKFxuICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgYXMgYW55KT8uW2ZpZWxkLmtleV0gPz8gZmllbGQuZGVmYXVsdFZhbFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyBhcyBhbnkpW2ZpZWxkLmtleV0gPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlJlc2V0IHRvIEVseXNpYW4gRGFya1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgPSB7fTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICBuZXcgTm90aWNlKFwiVGhlbWUgcmVzZXQgdG8gRWx5c2lhbiBEYXJrIGRlZmF1bHRzXCIpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIEFkdmFuY2VkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkFkdmFuY2VkXCIsIFwiXFx1MjY5OVxcdUZFMEZcIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJTaW11bGF0ZWQgZGF0ZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0b2RheSdzIGRhdGUgZm9yIHRlc3RpbmcgKFlZWVktTU0tREQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIllZWVktTU0tRERcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA9IHYudHJpbSgpIHx8IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlN5c3RlbSBzdGF0ZVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkXG4gICAgICAgICAgLmFkZE9wdGlvbnMoeyBhY3RpdmU6IFwiQWN0aXZlXCIsIHBhdXNlZDogXCJQYXVzZWRcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdiBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIjtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gXCJwYXVzZWRcIiAmJiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT09IFwiYWN0aXZlXCIgJiYgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF1c2VkTXMgPSBEYXRlLm5vdygpIC0gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50b3RhbFBhdXNlZFRpbWUgKz0gcGF1c2VkTXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVvdGUgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIHF1b3RlIGZpbGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIlF1b3Rlcy9TdG9pY1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGggPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJSZS1ydW4gbWlncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlLWltcG9ydCBkYXRhIGZyb20gdGhlIE15dGhvbG9naWNhbCBIYWJpdCBUcmFja2VyIHBsdWdpblwiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIk1pZ3JhdGVcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1pZ3JhdGVkID0gZmFsc2U7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgLy8gUmVsb2FkIHRoZSBwbHVnaW4gdG8gdHJpZ2dlciBtaWdyYXRpb25cbiAgICAgICAgICBhd2FpdCAodGhpcy5wbHVnaW4gYXMgYW55KS5vbmxvYWQoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICBuZXcgTm90aWNlKFwiTWlncmF0aW9uIGNvbXBsZXRlXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBEZXZlbG9wZXIgRGFzaGJvYXJkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyRGV2RGFzaGJvYXJkU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJEZXZlbG9wZXIgRGFzaGJvYXJkXCIsIFwiXFx1ezFGNkUwfVxcdUZFMEZcIik7XG5cbiAgICBib2R5LmNyZWF0ZUVsKFwicFwiLCB7XG4gICAgICB0ZXh0OiBcIkVkaXQgdGhlIHJhdyBkZXZDb25maWcgSlNPTi4gQ2hhbmdlcyBhcmUgYXBwbGllZCBvbiBzYXZlLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHRhcmVhID0gYm9keS5jcmVhdGVFbChcInRleHRhcmVhXCIsIHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMzAwcHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpOyBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLCBudWxsLCAyKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiU2F2ZSBkZXZDb25maWdcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodGV4dGFyZWEudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIERFRkFVTFRfREVWX0NPTkZJRyxcbiAgICAgICAgICAgICAgcGFyc2VkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiZGV2Q29uZmlnIHNhdmVkIGFuZCBhcHBsaWVkXCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gZGVmYXVsdHNcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0geyAuLi5ERUZBVUxUX0RFVl9DT05GSUcgfTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZywgbnVsbCwgMik7XG4gICAgICAgICAgbmV3IE5vdGljZShcImRldkNvbmZpZyByZXNldCB0byBkZWZhdWx0c1wiKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBvcnQvSW1wb3J0XG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRXhwb3J0IGFsbCBzZXR0aW5nc1wiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkNvcHkgdG8gY2xpcGJvYXJkXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncywgbnVsbCwgMik7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGpzb24pO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlNldHRpbmdzIGNvcGllZCB0byBjbGlwYm9hcmRcIik7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgbW9iaWxlIFx1MjAxNCBzaG93IGluIGEgdGV4dGFyZWEgZm9yIG1hbnVhbCBjb3B5XG4gICAgICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIHRhLnZhbHVlID0ganNvbjtcbiAgICAgICAgICAgIHRhLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo1MCU7ei1pbmRleDo5OTk5O2ZvbnQtc2l6ZToxMXB4O1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YSk7XG4gICAgICAgICAgICB0YS5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRhLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJUYXAgdGhlIHRleHQgYXJlYSBhbmQgY29weSBtYW51YWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSW1wb3J0IHNldHRpbmdzXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKGFyZWEpID0+IHtcbiAgICAgICAgYXJlYS5zZXRQbGFjZWhvbGRlcihcIlBhc3RlIEpTT04gaGVyZS4uLlwiKTtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjgwcHhcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUuZm9udFNpemUgPSBcIjExcHhcIjtcblxuICAgICAgICAvLyBTdG9yZSByZWZlcmVuY2UgZm9yIHRoZSBpbXBvcnQgYnV0dG9uXG4gICAgICAgIChib2R5IGFzIGFueSkuX2ltcG9ydEFyZWEgPSBhcmVhO1xuICAgICAgfSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJJbXBvcnRcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcmVhID0gKGJvZHkgYXMgYW55KS5faW1wb3J0QXJlYTtcbiAgICAgICAgICAgIGlmICghYXJlYSkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShhcmVhLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFyc2VkKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiU2V0dGluZ3MgaW1wb3J0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGF0ZSBFbmdpbmVcbi8vIExvYWRzIC5qcyB0ZW1wbGF0ZSBmaWxlcyBmcm9tIHZhdWx0LCBjcmVhdGVzIGEgc2FuZGJveGVkXG4vLyBleGVjdXRpb24gY29udGV4dCB3aXRoIGRhdGEtYmluZGluZyB0byBub3RlIGZyb250bWF0dGVyLFxuLy8gYW5kIHJlbmRlcnMgVUkgaW50byBhIGNvbnRhaW5lciBlbGVtZW50LlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHsgQlVJTFRJTl9URU1QTEFURVMgfSBmcm9tIFwiLi9idWlsdGluc1wiO1xuXG4vKipcbiAqIFRoZSBjb250ZXh0IG9iamVjdCBwYXNzZWQgdG8gZXZlcnkgdGVtcGxhdGUgYXQgcnVudGltZS5cbiAqIFRlbXBsYXRlcyByZWNlaXZlIHRoaXMgYXMgYGN0eGAgYW5kIHVzZSBpdCB0byByZWFkL3dyaXRlXG4gKiBmcm9udG1hdHRlciBhbmQgYnVpbGQgdGhlaXIgVUkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVDb250ZXh0IHtcbiAgLyoqIE9ic2lkaWFuIEFwcCBpbnN0YW5jZSAqL1xuICBhcHA6IEFwcDtcbiAgLyoqIE9sZW4gcGx1Z2luIHJlZmVyZW5jZSAqL1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG4gIC8qKiBUaGUgZGF0YSBub3RlIGN1cnJlbnRseSBiZWluZyB2aWV3ZWQgKi9cbiAgZmlsZTogVEZpbGU7XG4gIC8qKiBET00gY29udGFpbmVyIHRvIHJlbmRlciBpbnRvICovXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gLS0tIERhdGEgQmluZGluZyAtLS1cblxuICAvKiogU25hcHNob3Qgb2YgdGhlIG5vdGUncyBjdXJyZW50IGZyb250bWF0dGVyIChyZWFkLW9ubHkgb2JqZWN0KSAqL1xuICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIC8qKiBHZXQgYSBzaW5nbGUgZnJvbnRtYXR0ZXIgdmFsdWUsIG9yIGFsbCBmcm9udG1hdHRlciBpZiBubyBrZXkgKi9cbiAgZ2V0RGF0YShrZXk/OiBzdHJpbmcpOiB1bmtub3duO1xuICAvKiogV3JpdGUgYSBzaW5nbGUga2V5IGJhY2sgdG8gdGhlIG5vdGUncyBmcm9udG1hdHRlciAqL1xuICBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD47XG4gIC8qKiBCYXRjaC13cml0ZSBtdWx0aXBsZSBrZXlzIHRvIHRoZSBub3RlJ3MgZnJvbnRtYXR0ZXIgKi9cbiAgc2V0TXVsdGlwbGVEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx2b2lkPjtcblxuICAvLyAtLS0gVmF1bHQgSGVscGVycyAtLS1cblxuICAvKiogUmVhZCByYXcgdGV4dCBvZiBhbnkgdmF1bHQgZmlsZSBieSBwYXRoICovXG4gIHJlYWRGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XG4gIC8qKiBHZXQgYWxsIG1hcmtkb3duIGZpbGVzIGluc2lkZSBhIGZvbGRlciAqL1xuICBnZXRGaWxlc0luRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IFRGaWxlW107XG4gIC8qKiBHZXQgZnJvbnRtYXR0ZXIgb2YgYW55IGZpbGUgYnkgcGF0aCAqL1xuICBnZXRGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuXG4gIC8vIC0tLSBVdGlsaXRpZXMgLS0tXG5cbiAgLyoqIE9ic2lkaWFuIE5vdGljZSBmb3IgdG9hc3RzICovXG4gIG5vdGljZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkO1xuICAvKiogbW9tZW50LmpzIChwcm92aWRlZCBieSBPYnNpZGlhbiBnbG9iYWxseSkgKi9cbiAgbW9tZW50OiB0eXBlb2Ygd2luZG93Lm1vbWVudDtcbiAgLyoqIENyZWF0ZSBhbiBIVE1MIGVsZW1lbnQgKHNob3J0aGFuZCkgKi9cbiAgY3JlYXRlRWw8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgdGFnOiBLLFxuICAgIGF0dHJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdO1xufVxuXG4vKipcbiAqIENvcmUgZW5naW5lIHRoYXQgbWFuYWdlcyB0ZW1wbGF0ZSBsb29rdXAsIGxvYWRpbmcsIGFuZCBleGVjdXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUVuZ2luZSB7XG4gIHByaXZhdGUgYXBwOiBBcHA7XG4gIHByaXZhdGUgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICAvKiogQ2FjaGUgb2YgbG9hZGVkIHRlbXBsYXRlIHNvdXJjZSBjb2RlIChwYXRoIFx1MjE5MiBzb3VyY2UpICovXG4gIHByaXZhdGUgdGVtcGxhdGVDYWNoZTogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvLyAtLS0gQWN0aXZpdHkgTG9va3VwIC0tLVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB3b3Jrc3BhY2UgdGVtcGxhdGUgZm9yIGEgZ2l2ZW4gYWN0aXZpdHkgdHlwZS5cbiAgICogTG9va3MgdXAgdGhlIGFjdGl2aXR5IGJ5IElEIGluIHNldHRpbmdzIGFuZCByZXR1cm5zIGl0cyB3b3Jrc3BhY2VUZW1wbGF0ZSBJRC5cbiAgICogVGhlIElEIG1heSByZWZlciB0byBhIGJ1aWx0LWluIHRlbXBsYXRlIChlLmcuIFwid29ya291dFwiKSBvciBhIHZhdWx0IHBhdGguXG4gICAqL1xuICBmaW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlOiBzdHJpbmcpOiB7IHRlbXBsYXRlSWQ6IHN0cmluZyB9IHwgbnVsbCB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoXG4gICAgICAoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlUeXBlICYmIGEuZW5hYmxlZCAmJiBhLndvcmtzcGFjZVRlbXBsYXRlLFxuICAgICk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHsgdGVtcGxhdGVJZDogYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUhIH07XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgTG9hZGluZyAtLS1cblxuICAvKipcbiAgICogTG9hZCB0aGUgdGVtcGxhdGUgc291cmNlIGZyb20gdmF1bHQuIENhY2hlcyB1bnRpbCBpbnZhbGlkYXRlZC5cbiAgICovXG4gIGFzeW5jIGxvYWRUZW1wbGF0ZVNvdXJjZSh0ZW1wbGF0ZVBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIC8vIENoZWNrIGNhY2hlIGZpcnN0XG4gICAgaWYgKHRoaXMudGVtcGxhdGVDYWNoZS5oYXModGVtcGxhdGVQYXRoKSkge1xuICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVDYWNoZS5nZXQodGVtcGxhdGVQYXRoKSE7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIHBhdGggXHUyMDE0IGFkZCAuanMgaWYgbWlzc2luZ1xuICAgIGxldCByZXNvbHZlZFBhdGggPSB0ZW1wbGF0ZVBhdGg7XG4gICAgaWYgKCFyZXNvbHZlZFBhdGguZW5kc1dpdGgoXCIuanNcIikgJiYgIXJlc29sdmVkUGF0aC5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgcmVzb2x2ZWRQYXRoICs9IFwiLmpzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChyZXNvbHZlZFBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLnNldCh0ZW1wbGF0ZVBhdGgsIHNvdXJjZSk7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgT2xlbiBUZW1wbGF0ZUVuZ2luZTogRmFpbGVkIHRvIHJlYWQgdGVtcGxhdGUgJHtyZXNvbHZlZFBhdGh9OmAsIGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZSB0aGUgY2FjaGUgZm9yIGEgc3BlY2lmaWMgdGVtcGxhdGUgKGUuZy4gYWZ0ZXIgZWRpdHMpLlxuICAgKi9cbiAgaW52YWxpZGF0ZUNhY2hlKHRlbXBsYXRlUGF0aD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0ZW1wbGF0ZVBhdGgpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5kZWxldGUodGVtcGxhdGVQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIENvbnRleHQgQ3JlYXRpb24gLS0tXG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBUZW1wbGF0ZUNvbnRleHQgdGhhdCBnZXRzIHBhc3NlZCB0byB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkQ29udGV4dChcbiAgICBmaWxlOiBURmlsZSxcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIGZyb250bWF0dGVyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgKTogVGVtcGxhdGVDb250ZXh0IHtcbiAgICBjb25zdCBhcHAgPSB0aGlzLmFwcDtcbiAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnBsdWdpbjtcblxuICAgIHJldHVybiB7XG4gICAgICBhcHAsXG4gICAgICBwbHVnaW4sXG4gICAgICBmaWxlLFxuICAgICAgY29udGFpbmVyLFxuXG4gICAgICAvLyAtLS0gRGF0YSBCaW5kaW5nIC0tLVxuXG4gICAgICBmcm9udG1hdHRlcjogeyAuLi5mcm9udG1hdHRlciB9LFxuXG4gICAgICBnZXREYXRhKGtleT86IHN0cmluZyk6IHVua25vd24ge1xuICAgICAgICBpZiAoIWtleSkgcmV0dXJuIHsgLi4uZnJvbnRtYXR0ZXIgfTtcbiAgICAgICAgcmV0dXJuIGZyb250bWF0dGVyW2tleV07XG4gICAgICB9LFxuXG4gICAgICBhc3luYyBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgICAgIGZtW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFVwZGF0ZSBvdXIgbG9jYWwgc25hcHNob3RcbiAgICAgICAgZnJvbnRtYXR0ZXJba2V5XSA9IHZhbHVlO1xuICAgICAgfSxcblxuICAgICAgYXN5bmMgc2V0TXVsdGlwbGVEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICAgIGZtW2tdID0gdjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc25hcHNob3RcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICBmcm9udG1hdHRlcltrXSA9IHY7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIC0tLSBWYXVsdCBIZWxwZXJzIC0tLVxuXG4gICAgICBhc3luYyByZWFkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAgICAgY29uc3QgZiA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghZiB8fCAhKGYgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gYXBwLnZhdWx0LnJlYWQoZik7XG4gICAgICB9LFxuXG4gICAgICBnZXRGaWxlc0luRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IFRGaWxlW10ge1xuICAgICAgICByZXR1cm4gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoXG4gICAgICAgICAgKGYpID0+IGYucGF0aC5zdGFydHNXaXRoKGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIiksXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICBnZXRGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsIHtcbiAgICAgICAgY29uc3QgZiA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghZiB8fCAhKGYgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBjYWNoZSA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmKTtcbiAgICAgICAgcmV0dXJuIChjYWNoZT8uZnJvbnRtYXR0ZXIgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID8/IG51bGw7XG4gICAgICB9LFxuXG4gICAgICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gICAgICBub3RpY2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIG5ldyBOb3RpY2UobWVzc2FnZSwgdGltZW91dCk7XG4gICAgICB9LFxuXG4gICAgICBtb21lbnQ6IHdpbmRvdy5tb21lbnQsXG5cbiAgICAgIGNyZWF0ZUVsPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgICAgICB0YWc6IEssXG4gICAgICAgIGF0dHJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICAgICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRycykpIHtcbiAgICAgICAgICAgIGlmIChrID09PSBcInRleHRcIikge1xuICAgICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwiaHRtbFwiKSB7XG4gICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwiY2xzXCIgfHwgayA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gdjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gLS0tIFJlbmRlcmluZyAtLS1cblxuICAvKipcbiAgICogTWFpbiByZW5kZXIgbWV0aG9kLiBSZXNvbHZlcyBhIHRlbXBsYXRlIElEIChidWlsdC1pbiBvciB2YXVsdCBwYXRoKVxuICAgKiBhbmQgcmVuZGVycyBpdCBpbnRvIGEgY29udGFpbmVyIGJvdW5kIHRvIHRoZSBnaXZlbiBub3RlJ3MgZnJvbnRtYXR0ZXIuXG4gICAqL1xuICBhc3luYyByZW5kZXIoXG4gICAgdGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGZpbGU6IFRGaWxlLFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vIDEuIFJlc29sdmUgdGVtcGxhdGUgc291cmNlOiBjaGVjayBidWlsdC1pbiB0ZW1wbGF0ZXMgZmlyc3QsIHRoZW4gdmF1bHRcbiAgICBsZXQgc291cmNlOiBzdHJpbmcgfCBudWxsID0gQlVJTFRJTl9URU1QTEFURVNbdGVtcGxhdGVJZF0gPz8gbnVsbDtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAvLyBGYWxsIGJhY2sgdG8gbG9hZGluZyBmcm9tIHZhdWx0IGFzIGEgLmpzIGZpbGUgcGF0aFxuICAgICAgc291cmNlID0gYXdhaXQgdGhpcy5sb2FkVGVtcGxhdGVTb3VyY2UodGVtcGxhdGVJZCk7XG4gICAgfVxuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIG5vdCBmb3VuZDogJHt0ZW1wbGF0ZUlkfWAsXG4gICAgICAgIFwiQ2hlY2sgdGhlIHRlbXBsYXRlIElEIGluIE9sZW4gU2V0dGluZ3MgXHUyMTkyIEFjdGl2aXRpZXMgXHUyMTkyIENvbmZpZ3VyZS4gQnVpbHQtaW4gdGVtcGxhdGVzOiB3b3Jrb3V0LlwiLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgY3VycmVudCBmcm9udG1hdHRlclxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSAoY2FjaGU/LmZyb250bWF0dGVyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyB7fTtcblxuICAgIC8vIDMuIEJ1aWxkIGNvbnRleHRcbiAgICBjb25zdCBjdHggPSB0aGlzLmJ1aWxkQ29udGV4dChmaWxlLCBjb250YWluZXIsIGZyb250bWF0dGVyKTtcblxuICAgIC8vIDQuIEV4ZWN1dGUgdGVtcGxhdGVcbiAgICB0cnkge1xuICAgICAgLy8gV2Ugd3JhcCB0aGUgdGVtcGxhdGUgc291cmNlIHNvIHRoYXQgYGN0eGAgaXMgYXZhaWxhYmxlIGFzIGEgbG9jYWwgdmFyaWFibGUuXG4gICAgICAvLyBUaGUgdGVtcGxhdGUgY29kZSBjYW4gZGVzdHJ1Y3R1cmUgZnJvbSBjdHggb3IgdXNlIGl0IGRpcmVjdGx5LlxuICAgICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXCJjdHhcIiwgc291cmNlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKGN0eCk7XG5cbiAgICAgIC8vIElmIHRoZSB0ZW1wbGF0ZSByZXR1cm5zIGEgcHJvbWlzZSAoYXN5bmMgdGVtcGxhdGUpLCBhd2FpdCBpdFxuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgT2xlbiBUZW1wbGF0ZUVuZ2luZTogRXJyb3IgZXhlY3V0aW5nIHRlbXBsYXRlICR7dGVtcGxhdGVJZH06YCwgZXJyKTtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIGVycm9yOiAkeyhlcnIgYXMgRXJyb3IpLm1lc3NhZ2V9YCxcbiAgICAgICAgYEluIHRlbXBsYXRlOiAke3RlbXBsYXRlSWR9YCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBlcnJvciBtZXNzYWdlIGluc2lkZSB0aGUgY29udGFpbmVyLlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJFcnJvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCB0aXRsZTogc3RyaW5nLCBoaW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBlcnJvckRpdiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvclwiIH0pO1xuICAgIGVycm9yRGl2LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3ItdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG4gICAgZXJyb3JEaXYuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvci1oaW50XCIsIHRleHQ6IGhpbnQgfSk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gVGVtcGxhdGUgXHUyMDE0IFdvcmtvdXQgVHJhY2tlciB2Ni4wXG4vLyBSZW5kZXJzIGluc2lkZSB0aGUgT2xlbiB3b3Jrc3BhY2UgZm9yIHRoZSBcIndvcmtvdXRcIiBhY3Rpdml0eS5cbi8vIEFsbCBVSSBsaXZlcyBoZXJlIFx1MjAxNCBkYWlseSBub3RlcyBvbmx5IHN0b3JlIFlBTUwgZnJvbnRtYXR0ZXIuXG4vLyBEYXRhIGlzIHJlYWQvd3JpdHRlbiB2aWEgY3R4LmdldERhdGEgLyBjdHguc2V0RGF0YS5cbi8vIFBlcnNvbmFsIHN0YXRzIG5vdyByZWFkIGZyb20gcGx1Z2luIHNldHRpbmdzIChwZXJzb25hbFN0YXRzKS5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCB7IGNvbnRhaW5lciwgZ2V0RGF0YSwgc2V0RGF0YSwgc2V0TXVsdGlwbGVEYXRhLCBhcHAsIG1vbWVudCwgbm90aWNlLFxuICAgICAgICBjcmVhdGVFbCwgZmlsZSwgcmVhZEZpbGUsIGdldEZpbGVzSW5Gb2xkZXIsIGdldEZpbGVNZXRhZGF0YSB9ID0gY3R4O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFVFRJTkdTIFx1MjAxNCBFZGl0IHRoZXNlIHRvIG1hdGNoIHlvdXIgdmF1bHQgc3RydWN0dXJlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IFNFVFRJTkdTID0ge1xuICAvLyBXaGVyZSBkYWlseSB3b3Jrb3V0IG5vdGVzIGFyZSBzdG9yZWRcbiAgd29ya291dEZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAxIFdvcmtvdXRcIixcbiAgLy8gRm9sZGVyIGNvbnRhaW5pbmcgZXhlcmNpc2Ugc3RhbmRhcmQgLm1kIGZpbGVzIChlLmcuIFwiQmVuY2ggUHJlc3MubWRcIilcbiAgZXhlcmNpc2VEYkZvbGRlcjogXCJIb21lL0FjdGl2aXRpZXMvRXhlcmNpc2VzIGRhdGFiYXNlXCIsXG59O1xuXG4vLyBSZWFkIHBlcnNvbmFsIHN0YXRzIGZyb20gcGx1Z2luIHNldHRpbmdzIChzZXQgaW4gT2xlbiBTZXR0aW5ncyA+IFBlcnNvbmFsIFN0YXRzKVxuY29uc3QgX3BsdWdpblN0YXRzID0gY3R4LnBsdWdpbj8uc2V0dGluZ3M/LnBlcnNvbmFsU3RhdHMgfHwge307XG5jb25zdCBQRVJTT05BTCA9IHtcbiAgd2VpZ2h0OiBfcGx1Z2luU3RhdHMuY3VycmVudFdlaWdodCB8fCA2MSxcbiAgaGVpZ2h0OiBfcGx1Z2luU3RhdHMuaGVpZ2h0IHx8IDE3NSxcbiAgYmlydGhkYXRlOiBfcGx1Z2luU3RhdHMuYmlydGhkYXRlIHx8IFwiMjAwNS0xMS0yOVwiLFxuICBnZW5kZXI6IF9wbHVnaW5TdGF0cy5nZW5kZXIgfHwgXCJtYWxlXCIsXG59O1xuXG4vLyBNdXNjbGUgZ3JvdXBzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uLCB3aXRoIG9wdGlvbmFsIHN1Ymdyb3Vwc1xuY29uc3QgTVVTQ0xFX0dST1VQUyA9IHtcbiAgXCJOZWNrXCI6ICAgICAgeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzRVxcdUREQjRcIiB9LFxuICBcIkJhY2tcIjogICAgICB7IHN1Ymdyb3VwczogW1wiTGF0c1wiLCBcIlRyYXBzXCIsIFwiUmhvbWJvaWRzXCIsIFwiTG93ZXIgQmFja1wiLCBcIlJlYXIgRGVsdHNcIl0sIGljb246IFwiXFx1RDgzRFxcdUREMTlcIiB9LFxuICBcIkNoZXN0XCI6ICAgICB7IHN1Ymdyb3VwczogbnVsbCwgaWNvbjogXCJcXHVEODNEXFx1RENBQVwiIH0sXG4gIFwiU2hvdWxkZXJzXCI6IHsgc3ViZ3JvdXBzOiBbXCJGcm9udCBEZWx0c1wiLCBcIlNpZGUgRGVsdHNcIiwgXCJSZWFyIERlbHRzXCJdLCBpY29uOiBcIlxcdUQ4M0NcXHVERkFGXCIgfSxcbiAgXCJDb3JlXCI6ICAgICAgeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzQ1xcdURGQUZcIiB9LFxuICBcIkxlZ3NcIjogICAgICB7IHN1Ymdyb3VwczogW1wiUXVhZHNcIiwgXCJIYW1zdHJpbmdzXCIsIFwiR2x1dGVzXCIsIFwiQ2FsdmVzXCIsIFwiQWRkdWN0b3JzXCJdLCBpY29uOiBcIlxcdUQ4M0VcXHVEREI1XCIgfSxcbiAgXCJBcm1zXCI6ICAgICAgeyBzdWJncm91cHM6IFtcIkJpY2Vwc1wiLCBcIlRyaWNlcHNcIiwgXCJGb3JlYXJtc1wiXSwgaWNvbjogXCJcXHVEODNEXFx1RENBQVwiIH0sXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRIRU1FICYgQ09OU1RBTlRTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IFRIRU1FID0ge1xuICBjb2xvcjogXCIjOWE4YzdhXCIsXG4gIGNvbG9ySG92ZXI6IFwiI2FhOWM4YVwiLFxuICBjb2xvckJvcmRlcjogXCIjM2EzNDJhXCIsXG4gIGNvbG9yQm9yZGVySG92ZXI6IFwiIzRhNDQzYVwiLFxuICBjb2xvck11dGVkOiBcIiM2YTVhNGFcIixcbiAgY29sb3JMaWdodDogXCIjYjhhODkwXCIsXG4gIGNvbG9yRGlzY2lwbGluZTogXCIjYTg5ODYwXCIsXG4gIGNvbG9yRmxvdzogXCIjNmE4YTlhXCIsXG4gIHN5c3RlbUdyZWVuOiBcIiM3YTlhN2RcIlxufTtcblxuY29uc3QgU1RSRU5HVEhfTEVWRUxTID0ge1xuICBcIlVudHJhaW5lZFwiOiAgICB7IGNvbG9yOiBcIiM2YTZhNmFcIiwgaWNvbjogXCJcXHUyNUNCXCIgfSxcbiAgXCJCZWdpbm5lclwiOiAgICAgeyBjb2xvcjogXCIjYTg5ODYwXCIsIGljb246IFwiXFx1MjVEMFwiIH0sXG4gIFwiTm92aWNlXCI6ICAgICAgIHsgY29sb3I6IFwiIzdhOWE3ZFwiLCBpY29uOiBcIlxcdTI1RDFcIiB9LFxuICBcIkludGVybWVkaWF0ZVwiOiB7IGNvbG9yOiBcIiM2YThhOWFcIiwgaWNvbjogXCJcXHUyNUQ1XCIgfSxcbiAgXCJBZHZhbmNlZFwiOiAgICAgeyBjb2xvcjogXCIjOGE3YTlhXCIsIGljb246IFwiXFx1MjVDRlwiIH0sXG4gIFwiRWxpdGVcIjogICAgICAgIHsgY29sb3I6IFwiIzlhNmE3YVwiLCBpY29uOiBcIlxcdTI2MDVcIiB9XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNUQVRFIChmcm9tIGZyb250bWF0dGVyKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5sZXQgZXhlcmNpc2VzID0gZ2V0RGF0YShcImV4ZXJjaXNlc1wiKSB8fCBbXTtcbmxldCBtdXNjbGVHcm91cHMgPSBnZXREYXRhKFwibXVzY2xlR3JvdXBzXCIpIHx8IFtdO1xubGV0IGN1cnJlbnRNdXNjbGVJbmRleCA9IGdldERhdGEoXCJjdXJyZW50TXVzY2xlSW5kZXhcIikgfHwgMDtcbmNvbnN0IGlzQ29tcGxldGVkID0gZ2V0RGF0YShcIldvcmtvdXRcIikgPT09IHRydWU7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU1RZTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbGVuLXRwbC13b3Jrb3V0LXY2XCIpKSB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBzdHlsZS5pZCA9IFwib2xlbi10cGwtd29ya291dC12NlwiO1xuICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAub3R3LWNvbnRhaW5lciAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5vdHctY29udGFpbmVyIHsgbWF4LXdpZHRoOiA1MDBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDEwcHggMCAxMjBweCAwOyBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IGNvbG9yOiAjYzhjMGIyOyB9XG4gICAgLm90dy1jb250YWluZXIgYnV0dG9uLCAub3R3LWNvbnRhaW5lciBpbnB1dCwgLm90dy1tb2RhbC1vdmVybGF5IGJ1dHRvbiwgLm90dy1tb2RhbC1vdmVybGF5IGlucHV0IHsgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50OyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LWNvbnRhaW5lciBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHsgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IH1cbiAgICBAa2V5ZnJhbWVzIG90dy1icmVhdGhlIHsgMCUsIDEwMCUgeyBib3gtc2hhZG93OiBpbnNldCAwIDAgMTZweCByZ2JhKDE1NCwxNDAsMTIyLDAuMDIpOyB9IDUwJSB7IGJveC1zaGFkb3c6IGluc2V0IDAgMCAyNHB4IHJnYmEoMTU0LDE0MCwxMjIsMC4wNCk7IH0gfVxuICAgIEBrZXlmcmFtZXMgb3R3LXB1bHNlLWdsb3cgeyAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuNDsgfSA1MCUgeyBvcGFjaXR5OiAxOyB9IH1cbiAgICAub3R3LWNhcmQgeyBiYWNrZ3JvdW5kOiByZ2JhKDEyLDEwLDE2LDAuNik7IGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBzYXR1cmF0ZSgxNTAlKTsgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgc2F0dXJhdGUoMTUwJSk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IHBhZGRpbmc6IDE2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLWJvdHRvbTogMTJweDsgYm9yZGVyLXJhZGl1czogMTZweDsgfVxuICAgIC5vdHctY2FyZC1icmVhdGhlIHsgYW5pbWF0aW9uOiBvdHctYnJlYXRoZSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxuICAgIC5vdHctaGVhZGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAxNnB4OyB9XG4gICAgLm90dy10aXRsZSB7IG1hcmdpbjogMDsgY29sb3I6ICM5YThjN2E7IGZvbnQtc2l6ZTogMThweDsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDRweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctcHJvZ3Jlc3MtbGFiZWwgeyBjb2xvcjogIzRkNDczZTsgZm9udC1zaXplOiAxMXB4OyBtYXJnaW4tdG9wOiA2cHg7IH1cbiAgICAub3R3LXNlY3Rpb24tbGFiZWwgeyBjb2xvcjogIzRkNDczZTsgZm9udC1zaXplOiA5cHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAzcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IHRleHQtYWxpZ246IGNlbnRlcjsgbWFyZ2luOiAxNnB4IDAgOHB4OyB9XG4gICAgLm90dy13ZWVrLWdyaWQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpOyBnYXA6IDRweDsgfVxuICAgIC5vdHctd2Vlay1kYXkgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDNweDsgcGFkZGluZzogNnB4IDNweDsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDYpOyBib3JkZXItcmFkaXVzOiA4cHg7IH1cbiAgICAub3R3LXdlZWstZGF5LnRvZGF5IHsgYm9yZGVyLWNvbG9yOiByZ2JhKDE1NCwxNDAsMTIyLDAuMik7IH1cbiAgICAub3R3LXdlZWstZGF5IC5vdHctZGF5LWxhYmVsIHsgZm9udC1zaXplOiA4cHg7IGNvbG9yOiAjNGQ0NzNlOyBsZXR0ZXItc3BhY2luZzogMXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLm90dy13ZWVrLWRheSAub3R3LWRheS1udW0geyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNGQ0NzNlOyB9XG4gICAgLm90dy13ZWVrLWRheSAub3R3LWRheS1pY29uIHsgZm9udC1zaXplOiAxM3B4OyBtaW4taGVpZ2h0OiAxNnB4OyB9XG4gICAgLm90dy13ZWVrLWRheS5kb25lIC5vdHctZGF5LW51bSB7IGNvbG9yOiAjOWE4YzdhOyB9XG4gICAgLm90dy1oZWF0bWFwLWxlZ2VuZCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogNnB4IDEycHg7IG1hcmdpbi10b3A6IDZweDsgcGFkZGluZzogMCA4cHg7IH1cbiAgICAub3R3LWhlYXRtYXAtbGVnZW5kLWl0ZW0geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgZm9udC1zaXplOiA3cHg7IGNvbG9yOiAjNGQ0NzNlOyBsZXR0ZXItc3BhY2luZzogMXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLm90dy1oZWF0bWFwLWxlZ2VuZC1kb3QgeyB3aWR0aDogNnB4OyBoZWlnaHQ6IDZweDsgYm9yZGVyLXJhZGl1czogMnB4OyB9XG4gICAgLm90dy1idG4geyBwYWRkaW5nOiAxMnB4IDIwcHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50OyBmb250LXNpemU6IDEycHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAycHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM5YThjN2EsICM3YTZjNWEpOyBjb2xvcjogIzBhMGEwYTsgd2lkdGg6IDEwMCU7IGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgxNTQsMTQwLDEyMiwwLjE1KTsgfVxuICAgIC5vdHctYnRuLXByaW1hcnk6YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgYm94LXNoYWRvdzogMCAwIDIwcHggcmdiYSgxNTQsMTQwLDEyMiwwLjIpOyB9XG4gICAgLm90dy1idG4tc2Vjb25kYXJ5IHsgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjAzKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjEpOyBjb2xvcjogIzZhNWE0YTsgfVxuICAgIC5vdHctYnRuLXNlY29uZGFyeTphY3RpdmUgeyBib3JkZXItY29sb3I6IHJnYmEoMTU0LDE0MCwxMjIsMC4zKTsgY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LWJ0bi1maW5pc2ggeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjN2E5YTdkLCAjNWE3YTVkKTsgY29sb3I6ICMwYTBhMGE7IGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgxMjIsMTU0LDEyNSwwLjE1KTsgfVxuICAgIC5vdHctYnRuLWRhc2hlZCB7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYm9yZGVyOiAxcHggZGFzaGVkIHJnYmEoMTU0LDE0MCwxMjIsMC4xKTsgY29sb3I6ICM0ZDQ3M2U7IGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDsgfVxuICAgIC5vdHctYnRuLWRhc2hlZDphY3RpdmUgeyBib3JkZXItY29sb3I6IHJnYmEoMTU0LDE0MCwxMjIsMC4zKTsgY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LW5hdi1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEwcHg7IG1hcmdpbi10b3A6IDIwcHg7IH1cbiAgICAub3R3LW5hdi1yb3cgLm90dy1idG4geyBmbGV4OiAxOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAub3R3LXNldC1yb3cgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMHB4OyBwYWRkaW5nOiAxMHB4IDEycHg7IGJhY2tncm91bmQ6IHJnYmEoMTIsMTAsMTYsMC40KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjA2KTsgbWFyZ2luLWJvdHRvbTogNHB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyB9XG4gICAgLm90dy1zZXQtcm93LmNvbXBsZXRlZCB7IG9wYWNpdHk6IDAuNTsgfVxuICAgIC5vdHctY2hlY2tib3ggeyB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMTUpOyBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGN1cnNvcjogcG9pbnRlcjsgY29sb3I6ICMwYTBhMGE7IGZvbnQtd2VpZ2h0OiBib2xkOyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgZmxleC1zaHJpbms6IDA7IH1cbiAgICAub3R3LWNoZWNrYm94LmNoZWNrZWQgeyBiYWNrZ3JvdW5kOiAjN2E5YTdkOyBib3JkZXItY29sb3I6ICM3YTlhN2Q7IH1cbiAgICAub3R3LWlucHV0IHsgcGFkZGluZzogNnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4xKTsgYm9yZGVyLXJhZGl1czogOHB4ICFpbXBvcnRhbnQ7IGNvbG9yOiAjOWE4YzdhOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgd2lkdGg6IDUwcHg7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctY3RybC1idG4geyB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDgpOyBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDsgY29sb3I6ICM5YThjN2E7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxNXB4OyBmbGV4LXNocmluazogMDsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1jdHJsLWJ0bjphY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwxNDAsMTIyLDAuMik7IH1cbiAgICAub3R3LXdhcm11cC1iYWRnZSB7IGZvbnQtc2l6ZTogOXB4OyBjb2xvcjogIzZhOGE5YTsgcGFkZGluZzogMnB4IDZweDsgYmFja2dyb3VuZDogcmdiYSgxMDYsMTM4LDE1NCwwLjEpOyBib3JkZXItcmFkaXVzOiA2cHg7IH1cbiAgICAub3R3LXN0cmVuZ3RoLWJhciB7IGhlaWdodDogNHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDQpOyBib3JkZXItcmFkaXVzOiAycHg7IG92ZXJmbG93OiBoaWRkZW47IG1hcmdpbi10b3A6IDZweDsgfVxuICAgIC5vdHctc3RyZW5ndGgtZmlsbCB7IGhlaWdodDogMTAwJTsgYm9yZGVyLXJhZGl1czogMnB4OyB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGN1YmljLWJlemllcigwLjQsMCwwLjIsMSk7IH1cbiAgICAub3R3LXN0cmVuZ3RoLWJhZGdlIHsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNnB4OyBwYWRkaW5nOiA1cHggMTBweDsgYm9yZGVyLXJhZGl1czogOHB4OyBmb250LXNpemU6IDExcHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAycHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAub3R3LXByLWJveCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogNHB4OyBwYWRkaW5nOiA4cHggMTBweDsgYmFja2dyb3VuZDogcmdiYSgxNjgsMTUyLDk2LDAuMDYpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE2OCwxNTIsOTYsMC4xNSk7IGJvcmRlci1yYWRpdXM6IDhweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gICAgLm90dy1tb2RhbC1vdmVybGF5IHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB6LWluZGV4OiA5OTk5OyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjRzIGVhc2UsIGJhY2tkcm9wLWZpbHRlciAwLjRzIGVhc2U7IH1cbiAgICAub3R3LW1vZGFsLW92ZXJsYXkudmlzaWJsZSB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC44NSk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KTsgfVxuICAgIC5vdHctbW9kYWwtY29udGVudCB7IGJhY2tncm91bmQ6IHJnYmEoMTIsMTAsMTYsMC45NSk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBzYXR1cmF0ZSgxNTAlKTsgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgc2F0dXJhdGUoMTUwJSk7IHBhZGRpbmc6IDI0cHggMThweDsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjEpOyBib3JkZXItcmFkaXVzOiAxOHB4OyBtYXgtd2lkdGg6IDUwMHB4OyB3aWR0aDogOTAlOyBtYXgtaGVpZ2h0OiA4NXZoOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE0cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNHMgZWFzZSwgdHJhbnNmb3JtIDAuNHMgZWFzZTsgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAgIC5vdHctbW9kYWwtb3ZlcmxheS52aXNpYmxlIC5vdHctbW9kYWwtY29udGVudCB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIC5vdHctZmVlbC1idG4geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDE0cHggMThweDsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjQpOyBib3JkZXItcmFkaXVzOiAxMnB4OyBjdXJzb3I6IHBvaW50ZXI7IG1hcmdpbi1ib3R0b206IDhweDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4wNik7IH1cbiAgICAub3R3LWZlZWwtYnRuOmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IH1cbiAgICAub3R3LW11c2NsZS10b2dnbGUgeyBwYWRkaW5nOiAxMHB4IDE2cHg7IGJhY2tncm91bmQ6IHJnYmEoMTIsMTAsMTYsMC40KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjA4KTsgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50OyBjb2xvcjogIzlhOGM3YTsgZm9udC1zaXplOiAxMnB4OyBsZXR0ZXItc3BhY2luZzogMXB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctbXVzY2xlLXRvZ2dsZS5hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwxNDAsMTIyLDAuMikgIWltcG9ydGFudDsgYm9yZGVyLWNvbG9yOiByZ2JhKDE1NCwxNDAsMTIyLDAuMykgIWltcG9ydGFudDsgfVxuICAgIC5vdHctbXVzY2xlLXRvZ2dsZTphY3RpdmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH1cbiAgICAub3R3LXN1Ymdyb3VwLWNvbnRhaW5lciB7IG1heC1oZWlnaHQ6IDA7IG92ZXJmbG93OiBoaWRkZW47IHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgcGFkZGluZyAwLjNzIGVhc2U7IG9wYWNpdHk6IDA7IHBhZGRpbmc6IDAgMTJweDsgfVxuICAgIC5vdHctc3ViZ3JvdXAtY29udGFpbmVyLmV4cGFuZGVkIHsgbWF4LWhlaWdodDogMjAwcHg7IG9wYWNpdHk6IDE7IHBhZGRpbmc6IDEycHg7IH1cbiAgICAub3R3LXN1Yi10b2dnbGUgeyBwYWRkaW5nOiA3cHggMTJweDsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDgpOyBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDsgY29sb3I6ICM2YTVhNGE7IGZvbnQtc2l6ZTogMTFweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LXN1Yi10b2dnbGUuYWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSgxNTQsMTQwLDEyMiwwLjE1KTsgYm9yZGVyLWNvbG9yOiByZ2JhKDE1NCwxNDAsMTIyLDAuMjUpOyBjb2xvcjogIzlhOGM3YTsgfVxuICBgO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBVVElMSVRZIEZVTkNUSU9OU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGFkZENvcm5lcnMoZWwsIGNvbG9yLCBzaXplID0gMTQpIHtcbiAgW1wiVExcIiwgXCJUUlwiLCBcIkJMXCIsIFwiQlJcIl0uZm9yRWFjaCgocG9zKSA9PiB7XG4gICAgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaXNUb3AgPSBwb3MuaW5jbHVkZXMoXCJUXCIpLCBpc0xlZnQgPSBwb3MuaW5jbHVkZXMoXCJMXCIpO1xuICAgIGMuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjphYnNvbHV0ZTske2lzVG9wP1widG9wOjBcIjpcImJvdHRvbTowXCJ9OyR7aXNMZWZ0P1wibGVmdDowXCI6XCJyaWdodDowXCJ9O3dpZHRoOiR7c2l6ZX1weDtoZWlnaHQ6JHtzaXplfXB4O2JvcmRlci0ke2lzVG9wP1widG9wXCI6XCJib3R0b21cIn06MXB4IHNvbGlkICR7Y29sb3J9O2JvcmRlci0ke2lzTGVmdD9cImxlZnRcIjpcInJpZ2h0XCJ9OjFweCBzb2xpZCAke2NvbG9yfTt6LWluZGV4OjEwO3BvaW50ZXItZXZlbnRzOm5vbmU7YDtcbiAgICBlbC5hcHBlbmRDaGlsZChjKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZTFSTSh3ZWlnaHQsIHJlcHMpIHtcbiAgaWYgKHJlcHMgPT09IDAgfHwgd2VpZ2h0ID09PSAwKSByZXR1cm4gMDtcbiAgaWYgKHJlcHMgPT09IDEpIHJldHVybiB3ZWlnaHQ7XG4gIHJldHVybiBNYXRoLnJvdW5kKHdlaWdodCAqICgxICsgcmVwcyAvIDMwKSk7XG59XG5cbmZ1bmN0aW9uIGdldEZpcnN0V29ya2luZ1NldEluZGV4KHNldHMpIHtcbiAgcmV0dXJuIHNldHMuZmluZEluZGV4KChzKSA9PiAhcy5pc1dhcm11cCk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdhcm11cFdlaWdodHMoZXgsIG5ld1cpIHtcbiAgY29uc3Qgd2FybXVwcyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiBzLmlzV2FybXVwKTtcbiAgWzAuNSwgMC43LCAwLjg1XS5mb3JFYWNoKChwLCBpKSA9PiB7XG4gICAgaWYgKHdhcm11cHNbaV0pIHdhcm11cHNbaV0ud2VpZ2h0ID0gTWF0aC5yb3VuZChuZXdXICogcCk7XG4gIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1VU0NMRSBHUk9VUCBTVFJFTkdUSCBcdTIwMTQgQWdncmVnYXRlIHBlci1yZWdpb24gZGF0YSBpbnRvIGdyb3Vwc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IE1VU0NMRV9HUk9VUF9SRUdJT05TID0ge1xuICBOZWNrOiAgICAgIFtcIm5lY2tcIl0sXG4gIENoZXN0OiAgICAgW1wiY2hlc3RcIl0sXG4gIEJhY2s6ICAgICAgW1wibGF0c1wiLCBcInRyYXBzXCIsIFwibG93ZXJfYmFja1wiXSxcbiAgU2hvdWxkZXJzOiBbXCJmcm9udF9kZWx0c1wiLCBcInJlYXJfZGVsdHNcIl0sXG4gIENvcmU6ICAgICAgW1wiY29yZVwiXSxcbiAgTGVnczogICAgICBbXCJxdWFkc1wiLCBcImhhbXN0cmluZ3NcIiwgXCJnbHV0ZXNcIiwgXCJjYWx2ZXNcIl0sXG4gIEFybXM6ICAgICAgW1wiYmljZXBzXCIsIFwidHJpY2Vwc1wiLCBcImZvcmVhcm1zXCJdLFxufTtcblxuY29uc3QgTEVWRUxfT1JERVIgPSBbXCJVbnRyYWluZWRcIiwgXCJCZWdpbm5lclwiLCBcIk5vdmljZVwiLCBcIkludGVybWVkaWF0ZVwiLCBcIkFkdmFuY2VkXCIsIFwiRWxpdGVcIl07XG5cbmZ1bmN0aW9uIGdldE11c2NsZUdyb3VwU3RyZW5ndGgobXVzY2xlTGV2ZWxzKSB7XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IFtncm91cCwgcmVnaW9uc10gb2YgT2JqZWN0LmVudHJpZXMoTVVTQ0xFX0dST1VQX1JFR0lPTlMpKSB7XG4gICAgY29uc3QgZW50cmllcyA9IHJlZ2lvbnMubWFwKHIgPT4gbXVzY2xlTGV2ZWxzW3JdKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXN1bHRbZ3JvdXBdID0geyBsZXZlbDogXCJVbnRyYWluZWRcIiwgY29sb3I6IFwiIzZhNmE2YVwiLCBwcm9ncmVzczogMCwgYXZnU2NvcmU6IDAgfTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICAvLyBBdmVyYWdlIHNjb3JlOiBsZXZlbEluZGV4ICogMjAgKyBwcm9ncmVzcy13aXRoaW4tbGV2ZWwgKiAwLjJcbiAgICBsZXQgdG90YWxTY29yZSA9IDA7XG4gICAgZm9yIChjb25zdCBlIG9mIGVudHJpZXMpIHtcbiAgICAgIGNvbnN0IGlkeCA9IExFVkVMX09SREVSLmluZGV4T2YoZS5sZXZlbCk7XG4gICAgICB0b3RhbFNjb3JlICs9IGlkeCAqIDIwICsgKGUucHJvZ3Jlc3MgfHwgMCkgKiAwLjI7XG4gICAgfVxuICAgIGNvbnN0IGF2Z1Njb3JlID0gdG90YWxTY29yZSAvIGVudHJpZXMubGVuZ3RoO1xuICAgIGNvbnN0IGF2Z0xldmVsSWR4ID0gTWF0aC5taW4oNSwgTWF0aC5mbG9vcihhdmdTY29yZSAvIDIwKSk7XG4gICAgY29uc3QgYXZnTGV2ZWwgPSBMRVZFTF9PUkRFUlthdmdMZXZlbElkeF07XG4gICAgY29uc3QgcHJvZ3Jlc3NJbkxldmVsID0gKChhdmdTY29yZSAvIDIwKSAtIGF2Z0xldmVsSWR4KSAqIDEwMDtcbiAgICByZXN1bHRbZ3JvdXBdID0ge1xuICAgICAgbGV2ZWw6IGF2Z0xldmVsLFxuICAgICAgY29sb3I6IFNUUkVOR1RIX0xFVkVMU1thdmdMZXZlbF0/LmNvbG9yIHx8IFwiIzZhNmE2YVwiLFxuICAgICAgcHJvZ3Jlc3M6IE1hdGgubWluKDEwMCwgTWF0aC5tYXgoMCwgcHJvZ3Jlc3NJbkxldmVsKSksXG4gICAgICBhdmdTY29yZSxcbiAgICAgIHJlZ2lvbkNvdW50OiBlbnRyaWVzLmxlbmd0aCxcbiAgICAgIHRvdGFsUmVnaW9uczogcmVnaW9ucy5sZW5ndGgsXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBFUlNPTkFMIFNUQVRTICYgU1RSRU5HVEggU1RBTkRBUkRTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UGVyc29uYWxTdGF0cygpIHtcbiAgLy8gUmVhZCBmcm9tIHBsdWdpbiBzZXR0aW5ncyAoUGVyc29uYWwgU3RhdHMgc2VjdGlvbilcbiAgcmV0dXJuIHtcbiAgICB3ZWlnaHQ6IFBFUlNPTkFMLndlaWdodCxcbiAgICBoZWlnaHQ6IFBFUlNPTkFMLmhlaWdodCxcbiAgICBiaXJ0aGRhdGU6IFBFUlNPTkFMLmJpcnRoZGF0ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQWdlKGJkKSB7XG4gIGlmICghYmQpIHJldHVybiAyMDtcbiAgY29uc3QgYiA9IG5ldyBEYXRlKGJkKSwgdCA9IG5ldyBEYXRlKCk7XG4gIGxldCBhID0gdC5nZXRGdWxsWWVhcigpIC0gYi5nZXRGdWxsWWVhcigpO1xuICBpZiAodC5nZXRNb250aCgpIDwgYi5nZXRNb250aCgpIHx8ICh0LmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKSAmJiB0LmdldERhdGUoKSA8IGIuZ2V0RGF0ZSgpKSkgYS0tO1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdGFuZGFyZFZhbHVlKHZhbCkge1xuICBpZiAodHlwZW9mIHZhbCAhPT0gXCJzdHJpbmdcIikgdmFsID0gU3RyaW5nKHZhbCk7XG4gIHZhbCA9IHZhbC50cmltKCk7XG4gIGlmICh2YWwuaW5jbHVkZXMoXCI8XCIpKSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWwucmVwbGFjZSgvWzxcXHNdL2csIFwiXCIpKTtcbiAgICByZXR1cm4gIWlzTmFOKG51bSkgJiYgbnVtID4gMCA/IG51bSAqIDAuNSA6IDAuMTtcbiAgfVxuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbCk7XG4gIHJldHVybiBpc05hTihudW0pID8gMCA6IG51bTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyZW5ndGhTdGFuZGFyZChleGVyY2lzZU5hbWUpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBTRVRUSU5HUy5leGVyY2lzZURiRm9sZGVyICsgXCIvXCIgKyBleGVyY2lzZU5hbWUgKyBcIi5tZFwiO1xuICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YShmaWxlUGF0aCk7XG4gIGNvbnN0IGlzQlcgPSBmbT8uVHlwZSA9PT0gXCJCb2R5d2VpZ2h0XCI7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShmaWxlUGF0aCk7XG4gIGlmICghY29udGVudCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcbiAgY29uc3QgYndUYWJsZSA9IFtdLCBhZ2VUYWJsZSA9IFtdO1xuICBsZXQgY3VycmVudFRhYmxlID0gbnVsbDtcbiAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgaWYgKGxpbmUubWF0Y2goL1xcfFxccypCV1xccypcXHwvaSkpIHsgY3VycmVudFRhYmxlID0gXCJid1wiOyBjb250aW51ZTsgfVxuICAgIGlmIChsaW5lLm1hdGNoKC9cXHxcXHMqQWdlXFxzKlxcfC9pKSkgeyBjdXJyZW50VGFibGUgPSBcImFnZVwiOyBjb250aW51ZTsgfVxuICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJ8LS0tXCIpIHx8IGxpbmUuc3RhcnRzV2l0aChcInwgLS0tXCIpKSBjb250aW51ZTtcbiAgICBjb25zdCBtID0gbGluZS5tYXRjaCgvXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8Lyk7XG4gICAgaWYgKG0pIHtcbiAgICAgIGNvbnN0IHJvdyA9IHsga2V5OiBwYXJzZVN0YW5kYXJkVmFsdWUobVsxXSksIGJlZ2lubmVyOiBwYXJzZVN0YW5kYXJkVmFsdWUobVsyXSksIG5vdmljZTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bM10pLCBpbnRlcm1lZGlhdGU6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzRdKSwgYWR2YW5jZWQ6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzVdKSwgZWxpdGU6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzZdKSB9O1xuICAgICAgaWYgKHJvdy5rZXkgPiAwICYmIChyb3cuYmVnaW5uZXIgPiAwIHx8IHJvdy5ub3ZpY2UgPiAwIHx8IHJvdy5pbnRlcm1lZGlhdGUgPiAwKSkge1xuICAgICAgICBpZiAoY3VycmVudFRhYmxlID09PSBcImJ3XCIpIGJ3VGFibGUucHVzaChyb3cpO1xuICAgICAgICBlbHNlIGlmIChjdXJyZW50VGFibGUgPT09IFwiYWdlXCIpIGFnZVRhYmxlLnB1c2gocm93KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgYndUYWJsZSwgYWdlVGFibGUsIGlzQm9keXdlaWdodDogaXNCVywgaGFzVmFsaWREYXRhOiBid1RhYmxlLmxlbmd0aCA+IDAgfHwgYWdlVGFibGUubGVuZ3RoID4gMCB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVN0YW5kYXJkKHRhYmxlLCB2YWx1ZSkge1xuICBpZiAoIXRhYmxlIHx8IHRhYmxlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi50YWJsZV0uc29ydCgoYSwgYikgPT4gYS5rZXkgLSBiLmtleSk7XG4gIGxldCBsb3dlciA9IHNvcnRlZFswXSwgdXBwZXIgPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBpZiAoc29ydGVkW2ldLmtleSA8PSB2YWx1ZSAmJiBzb3J0ZWRbaSArIDFdLmtleSA+PSB2YWx1ZSkgeyBsb3dlciA9IHNvcnRlZFtpXTsgdXBwZXIgPSBzb3J0ZWRbaSArIDFdOyBicmVhazsgfVxuICB9XG4gIGlmICh2YWx1ZSA8PSBsb3dlci5rZXkpIHJldHVybiB7IC4uLmxvd2VyIH07XG4gIGlmICh2YWx1ZSA+PSB1cHBlci5rZXkpIHJldHVybiB7IC4uLnVwcGVyIH07XG4gIGNvbnN0IHJhdGlvID0gKHZhbHVlIC0gbG93ZXIua2V5KSAvICh1cHBlci5rZXkgLSBsb3dlci5rZXkpO1xuICByZXR1cm4geyBrZXk6IHZhbHVlLCBiZWdpbm5lcjogbG93ZXIuYmVnaW5uZXIgKyByYXRpbyAqICh1cHBlci5iZWdpbm5lciAtIGxvd2VyLmJlZ2lubmVyKSwgbm92aWNlOiBsb3dlci5ub3ZpY2UgKyByYXRpbyAqICh1cHBlci5ub3ZpY2UgLSBsb3dlci5ub3ZpY2UpLCBpbnRlcm1lZGlhdGU6IGxvd2VyLmludGVybWVkaWF0ZSArIHJhdGlvICogKHVwcGVyLmludGVybWVkaWF0ZSAtIGxvd2VyLmludGVybWVkaWF0ZSksIGFkdmFuY2VkOiBsb3dlci5hZHZhbmNlZCArIHJhdGlvICogKHVwcGVyLmFkdmFuY2VkIC0gbG93ZXIuYWR2YW5jZWQpLCBlbGl0ZTogbG93ZXIuZWxpdGUgKyByYXRpbyAqICh1cHBlci5lbGl0ZSAtIGxvd2VyLmVsaXRlKSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBdmVyYWdlZFN0YW5kYXJkcyhzdGQpIHtcbiAgY29uc3Qgc3RhdHMgPSBhd2FpdCBnZXRQZXJzb25hbFN0YXRzKCk7XG4gIGNvbnN0IGJ3ID0gaW50ZXJwb2xhdGVTdGFuZGFyZChzdGQuYndUYWJsZSwgc3RhdHMud2VpZ2h0KTtcbiAgY29uc3QgYWcgPSBpbnRlcnBvbGF0ZVN0YW5kYXJkKHN0ZC5hZ2VUYWJsZSwgY2FsY3VsYXRlQWdlKHN0YXRzLmJpcnRoZGF0ZSkpO1xuICBpZiAoYncgJiYgYWcpIHJldHVybiB7IGJlZ2lubmVyOiAoYncuYmVnaW5uZXIgKyBhZy5iZWdpbm5lcikgLyAyLCBub3ZpY2U6IChidy5ub3ZpY2UgKyBhZy5ub3ZpY2UpIC8gMiwgaW50ZXJtZWRpYXRlOiAoYncuaW50ZXJtZWRpYXRlICsgYWcuaW50ZXJtZWRpYXRlKSAvIDIsIGFkdmFuY2VkOiAoYncuYWR2YW5jZWQgKyBhZy5hZHZhbmNlZCkgLyAyLCBlbGl0ZTogKGJ3LmVsaXRlICsgYWcuZWxpdGUpIC8gMiB9O1xuICByZXR1cm4gYncgfHwgYWcgfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lU3RyZW5ndGhMZXZlbChjdiwgc3RkKSB7XG4gIGlmICghc3RkIHx8IGN2IDwgMCkgcmV0dXJuIHsgbGV2ZWw6IFwiVW50cmFpbmVkXCIsIGNvbG9yOiBcIiM2YTZhNmFcIiwgcHJvZ3Jlc3M6IDAsIG5leHRUYXJnZXQ6IHN0ZD8uYmVnaW5uZXIgfHwgMSB9O1xuICBjb25zdCB7IGJlZ2lubmVyLCBub3ZpY2UsIGludGVybWVkaWF0ZSwgYWR2YW5jZWQsIGVsaXRlIH0gPSBzdGQ7XG4gIGlmIChjdiA+PSBlbGl0ZSkgcmV0dXJuIHsgbGV2ZWw6IFwiRWxpdGVcIiwgY29sb3I6IFwiIzlhNmE3YVwiLCBwcm9ncmVzczogMTAwLCBuZXh0VGFyZ2V0OiBudWxsIH07XG4gIGlmIChjdiA+PSBhZHZhbmNlZCkgcmV0dXJuIHsgbGV2ZWw6IFwiQWR2YW5jZWRcIiwgY29sb3I6IFwiIzhhN2E5YVwiLCBwcm9ncmVzczogKChjdiAtIGFkdmFuY2VkKSAvIChlbGl0ZSAtIGFkdmFuY2VkKSkgKiAxMDAsIG5leHRUYXJnZXQ6IGVsaXRlIH07XG4gIGlmIChjdiA+PSBpbnRlcm1lZGlhdGUpIHJldHVybiB7IGxldmVsOiBcIkludGVybWVkaWF0ZVwiLCBjb2xvcjogXCIjNmE4YTlhXCIsIHByb2dyZXNzOiAoKGN2IC0gaW50ZXJtZWRpYXRlKSAvIChhZHZhbmNlZCAtIGludGVybWVkaWF0ZSkpICogMTAwLCBuZXh0VGFyZ2V0OiBhZHZhbmNlZCB9O1xuICBpZiAoY3YgPj0gbm92aWNlKSByZXR1cm4geyBsZXZlbDogXCJOb3ZpY2VcIiwgY29sb3I6IFwiIzdhOWE3ZFwiLCBwcm9ncmVzczogKChjdiAtIG5vdmljZSkgLyAoaW50ZXJtZWRpYXRlIC0gbm92aWNlKSkgKiAxMDAsIG5leHRUYXJnZXQ6IGludGVybWVkaWF0ZSB9O1xuICBpZiAoY3YgPj0gYmVnaW5uZXIpIHJldHVybiB7IGxldmVsOiBcIkJlZ2lubmVyXCIsIGNvbG9yOiBcIiNhODk4NjBcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBiZWdpbm5lcikgLyAobm92aWNlIC0gYmVnaW5uZXIpKSAqIDEwMCwgbmV4dFRhcmdldDogbm92aWNlIH07XG4gIHJldHVybiB7IGxldmVsOiBcIlVudHJhaW5lZFwiLCBjb2xvcjogXCIjNmE2YTZhXCIsIHByb2dyZXNzOiBiZWdpbm5lciA+IDAgPyBNYXRoLm1heCgwLCAoY3YgLyBiZWdpbm5lcikgKiAxMDApIDogMCwgbmV4dFRhcmdldDogYmVnaW5uZXIgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChuYW1lLCB3LCByLCBtYXhSKSB7XG4gIGNvbnN0IHN0ZCA9IGF3YWl0IGdldFN0cmVuZ3RoU3RhbmRhcmQobmFtZSk7XG4gIGlmICghc3RkIHx8ICFzdGQuaGFzVmFsaWREYXRhKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXZnID0gYXdhaXQgZ2V0QXZlcmFnZWRTdGFuZGFyZHMoc3RkKTtcbiAgaWYgKCFhdmcpIHJldHVybiBudWxsO1xuICBpZiAoc3RkLmlzQm9keXdlaWdodCkge1xuICAgIGNvbnN0IGVmZiA9IG1heFIgIT09IG51bGwgJiYgbWF4UiAhPT0gdW5kZWZpbmVkID8gTWF0aC5tYXgociwgbWF4UikgOiByO1xuICAgIGNvbnN0IHJlcyA9IGRldGVybWluZVN0cmVuZ3RoTGV2ZWwoZWZmLCBhdmcpO1xuICAgIHJldHVybiB7IC4uLnJlcywgY3VycmVudFZhbHVlOiBlZmYsIGlzQm9keXdlaWdodDogdHJ1ZSwgdW5pdDogXCJyZXBzXCIsIGRpc3BsYXlMYWJlbDogXCJNYXggUmVwc1wiIH07XG4gIH0gZWxzZSB7XG4gICAgaWYgKHcgPD0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZXN0ID0gY2FsY3VsYXRlMVJNKHcsIHIpO1xuICAgIGNvbnN0IHJlcyA9IGRldGVybWluZVN0cmVuZ3RoTGV2ZWwoZXN0LCBhdmcpO1xuICAgIHJldHVybiB7IC4uLnJlcywgY3VycmVudFZhbHVlOiBlc3QsIGlzQm9keXdlaWdodDogZmFsc2UsIHVuaXQ6IFwia2dcIiwgZGlzcGxheUxhYmVsOiBcIkVzdC4gMVJNXCIgfTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYXNTdHJlbmd0aFN0YW5kYXJkKG5hbWUpIHtcbiAgY29uc3Qgc3RkID0gYXdhaXQgZ2V0U3RyZW5ndGhTdGFuZGFyZChuYW1lKTtcbiAgcmV0dXJuIHN0ZCAhPT0gbnVsbCAmJiBzdGQuaGFzVmFsaWREYXRhO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFdPUktPVVQgREFUQSBcdTIwMTQgUFIgbG9va3VwLCBwcmV2aW91cyBleGVyY2lzZSBsb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VQUihuYW1lKSB7XG4gIGNvbnN0IHN0ZCA9IGF3YWl0IGdldFN0cmVuZ3RoU3RhbmRhcmQobmFtZSk7XG4gIGNvbnN0IGlzQlcgPSBzdGQ/LmlzQm9keXdlaWdodCB8fCBmYWxzZTtcbiAgY29uc3QgZmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBsZXQgYmVzdCA9IG51bGwsIGJlc3RWID0gMDtcbiAgZm9yIChjb25zdCBmIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEoZi5wYXRoKTtcbiAgICBpZiAoZm0/LmV4ZXJjaXNlcyAmJiBBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykgJiYgZm0uV29ya291dCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZXggPSBmbS5leGVyY2lzZXMuZmluZCgoZSkgPT4gZS5uYW1lID09PSBuYW1lKTtcbiAgICAgIGlmIChleD8uc2V0cykge1xuICAgICAgICBmb3IgKGNvbnN0IHNldCBvZiBleC5zZXRzKSB7XG4gICAgICAgICAgaWYgKCFzZXQuaXNXYXJtdXAgJiYgc2V0LmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgaWYgKGlzQlcpIHtcbiAgICAgICAgICAgICAgaWYgKHNldC5yZXBzID4gYmVzdFYpIHsgYmVzdFYgPSBzZXQucmVwczsgYmVzdCA9IHsgLi4uc2V0LCBkYXRlOiBmLmJhc2VuYW1lLCBwclZhbHVlOiBiZXN0ViwgaXNCb2R5d2VpZ2h0OiB0cnVlIH07IH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0LndlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgY29uc3QgZXN0ID0gY2FsY3VsYXRlMVJNKHNldC53ZWlnaHQsIHNldC5yZXBzKTtcbiAgICAgICAgICAgICAgaWYgKGVzdCA+IGJlc3RWKSB7IGJlc3RWID0gZXN0OyBiZXN0ID0geyAuLi5zZXQsIGRhdGU6IGYuYmFzZW5hbWUsIGVzdGltYXRlZDFSTTogZXN0LCBwclZhbHVlOiBlc3QsIGlzQm9keXdlaWdodDogZmFsc2UgfTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmVzdDtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFdvcmtvdXRGb3JNdXNjbGVHcm91cChtdXNjbGVHcm91cCkge1xuICBjb25zdCBmaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcilcbiAgICAuc29ydCgoYSwgYikgPT4gYi5iYXNlbmFtZS5sb2NhbGVDb21wYXJlKGEuYmFzZW5hbWUpKTtcbiAgZm9yIChjb25zdCBmIG9mIGZpbGVzKSB7XG4gICAgaWYgKGYucGF0aCA9PT0gZmlsZS5wYXRoKSBjb250aW51ZTsgLy8gc2tpcCBjdXJyZW50IG5vdGVcbiAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YShmLnBhdGgpO1xuICAgIGlmIChmbT8uZXhlcmNpc2VzICYmIEFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSkge1xuICAgICAgY29uc3QgcmVsZXZhbnQgPSBmbS5leGVyY2lzZXMuZmlsdGVyKGV4ID0+IGV4Lm11c2NsZSA9PT0gbXVzY2xlR3JvdXAgfHwgZXgubXVzY2xlR3JvdXAgPT09IG11c2NsZUdyb3VwKTtcbiAgICAgIGlmIChyZWxldmFudC5sZW5ndGggPiAwKSByZXR1cm4geyBkYXRlOiBmLmJhc2VuYW1lLCBleGVyY2lzZXM6IHJlbGV2YW50IH07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJldmlvdXNFeGVyY2lzZXMoc2VsZWN0ZWRNdXNjbGVHcm91cHMpIHtcbiAgY29uc3QgZXhlcmNpc2VzQXJyYXkgPSBbXTtcbiAgZm9yIChjb25zdCBtdXNjbGUgb2Ygc2VsZWN0ZWRNdXNjbGVHcm91cHMpIHtcbiAgICBjb25zdCBsYXN0V29ya291dCA9IGdldExhc3RXb3Jrb3V0Rm9yTXVzY2xlR3JvdXAobXVzY2xlKTtcbiAgICBpZiAobGFzdFdvcmtvdXQpIHtcbiAgICAgIGZvciAoY29uc3QgZXggb2YgbGFzdFdvcmtvdXQuZXhlcmNpc2VzKSB7XG4gICAgICAgIGV4ZXJjaXNlc0FycmF5LnB1c2goe1xuICAgICAgICAgIG5hbWU6IGV4Lm5hbWUsXG4gICAgICAgICAgbXVzY2xlOiBtdXNjbGUsXG4gICAgICAgICAgbXVzY2xlR3JvdXA6IG11c2NsZSxcbiAgICAgICAgICBzZXRzOiBleC5zZXRzID8gZXguc2V0cy5tYXAocyA9PiAoe1xuICAgICAgICAgICAgd2VpZ2h0OiBzLndlaWdodCB8fCAwLFxuICAgICAgICAgICAgcmVwczogcy5yZXBzIHx8IDEwLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzV2FybXVwOiBzLmlzV2FybXVwIHx8IGZhbHNlXG4gICAgICAgICAgfSkpIDogW3sgd2VpZ2h0OiAwLCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXhlcmNpc2VzQXJyYXk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0FWRSBTVEFURVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVTdGF0ZSgpIHtcbiAgYXdhaXQgc2V0TXVsdGlwbGVEYXRhKHtcbiAgICBleGVyY2lzZXM6IGV4ZXJjaXNlcyxcbiAgICBjdXJyZW50TXVzY2xlSW5kZXg6IGN1cnJlbnRNdXNjbGVJbmRleCxcbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgU1lTVEVNXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IGFjdGl2ZU1vZGFsID0gbnVsbDtcblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgaWYgKCFhY3RpdmVNb2RhbCkgcmV0dXJuO1xuICBhY3RpdmVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZU1vZGFsPy5wYXJlbnROb2RlKSBhY3RpdmVNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2ZU1vZGFsKTtcbiAgICBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRpdGxlLCBjb250ZW50QnVpbGRlcikge1xuICBpZiAoYWN0aXZlTW9kYWwpIHsgYWN0aXZlTW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhY3RpdmVNb2RhbCk7IGFjdGl2ZU1vZGFsID0gbnVsbDsgfVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwib3R3LW1vZGFsLW92ZXJsYXlcIjtcbiAgYWN0aXZlTW9kYWwgPSBtb2RhbDtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9IFwib3R3LW1vZGFsLWNvbnRlbnRcIjtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgYWRkQ29ybmVycyhtb2RhbENvbnRlbnQsIFRIRU1FLmNvbG9yKTtcbiAgaWYgKHRpdGxlKSB7XG4gICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdC5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjowO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO29wYWNpdHk6MC44O2A7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHQpO1xuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDo2MHB4O2hlaWdodDoxcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsdHJhbnNwYXJlbnQsJHtUSEVNRS5jb2xvcn0sdHJhbnNwYXJlbnQpO21hcmdpbjowIGF1dG8gMTJweDtgO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkKTtcbiAgfVxuICBjb250ZW50QnVpbGRlcihtb2RhbENvbnRlbnQpO1xuICBtb2RhbC5vbmNsaWNrID0gKGUpID0+IHsgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkgY2xvc2VNb2RhbCgpOyB9O1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBPU1QtQ09NUExFVElPTiBOQVZJR0FUSU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gZ2V0UmV0dXJuRGVzdGluYXRpb24oKSB7XG4gIC8vIExvb2sgdXAgdGhlIGN1cnJlbnQgYWN0aXZpdHkncyBjb25maWcgZnJvbSBwbHVnaW4gc2V0dGluZ3NcbiAgY29uc3QgYWN0aXZpdHlJZCA9IGdldERhdGEoXCJhY3Rpdml0eVwiKTtcbiAgY29uc3QgYWN0aXZpdGllcyA9IGN0eC5wbHVnaW4/LnNldHRpbmdzPy5hY3Rpdml0aWVzO1xuICBpZiAoYWN0aXZpdGllcyAmJiBhY3Rpdml0eUlkKSB7XG4gICAgY29uc3QgYWN0Q29uZmlnID0gYWN0aXZpdGllcy5maW5kKGEgPT4gYS5pZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKGFjdENvbmZpZz8uY29tcGxldGlvblJldHVyblRvKSByZXR1cm4gYWN0Q29uZmlnLmNvbXBsZXRpb25SZXR1cm5UbztcbiAgfVxuICByZXR1cm4gXCJkYXNoYm9hcmRcIjsgLy8gZGVmYXVsdFxufVxuXG5mdW5jdGlvbiBuYXZpZ2F0ZUFmdGVyQ29tcGxldGlvbigpIHtcbiAgY29uc3QgZGVzdCA9IGdldFJldHVybkRlc3RpbmF0aW9uKCk7XG4gIGlmIChkZXN0ID09PSBcInN0YXlcIikgcmV0dXJuOyAvLyBkbyBub3RoaW5nLCBzdGF5IG9uIGNvbXBsZXRpb24gc3VtbWFyeVxuICBpZiAoZGVzdCA9PT0gXCJkYXNoYm9hcmRcIikge1xuICAgIC8vIFVzZSBPbGVuJ3MgYnVpbHQtaW4gZGFzaGJvYXJkIGFjdGl2YXRpb25cbiAgICBpZiAoY3R4LnBsdWdpbj8uYWN0aXZhdGVEYXNoYm9hcmRWaWV3KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGN0eC5wbHVnaW4uYWN0aXZhdGVEYXNoYm9hcmRWaWV3KCksIDYwMCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGVzdCA9PT0gXCJob21lcGFnZVwiKSB7XG4gICAgLy8gT3BlbiB0aGUgZ2xvYmFsIGhvbWVwYWdlIGZpbGUgZGVmaW5lZCBpbiBQcm9maWxlIHNldHRpbmdzXG4gICAgY29uc3QgaG9tZXBhZ2VQYXRoID0gY3R4LnBsdWdpbj8uc2V0dGluZ3M/LmhvbWVwYWdlO1xuICAgIGlmICghaG9tZXBhZ2VQYXRoKSB7IG5vdGljZShcIk5vIGhvbWVwYWdlIHNldCBcdTIwMTQgZ28gdG8gT2xlbiBTZXR0aW5ncyA+IFByb2ZpbGUgdG8gZGVmaW5lIG9uZS5cIik7IHJldHVybjsgfVxuICAgIGNvbnN0IHRhcmdldEZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGhvbWVwYWdlUGF0aCk7XG4gICAgaWYgKHRhcmdldEZpbGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXBwLndvcmtzcGFjZS5nZXRMZWFmKGZhbHNlKS5vcGVuRmlsZSh0YXJnZXRGaWxlKSwgNjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm90aWNlKFwiSG9tZXBhZ2UgZmlsZSBub3QgZm91bmQ6IFwiICsgaG9tZXBhZ2VQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRklOSVNIIFdPUktPVVRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBmaW5pc2hXb3Jrb3V0KHR5cGUpIHtcbiAgYXdhaXQgc2V0TXVsdGlwbGVEYXRhKHtcbiAgICBXb3Jrb3V0OiB0cnVlLFxuICAgIFwiV29ya291dC1UeXBlXCI6IHR5cGUsXG4gICAgVGltZXN0YW1wOiBtb21lbnQoKS5mb3JtYXQoKSxcbiAgICBleGVyY2lzZXM6IGV4ZXJjaXNlcyxcbiAgICBjdXJyZW50TXVzY2xlSW5kZXg6IGN1cnJlbnRNdXNjbGVJbmRleCxcbiAgfSk7XG4gIG5vdGljZShcIldvcmtvdXQgbG9nZ2VkIGFzIFwiICsgKHR5cGUgPT09IFwiZGlzY2lwbGluZVwiID8gXCJEaXNjaXBsaW5lIFdpblwiIDogXCJGbG93IFN0YXRlXCIpICsgXCIhXCIpO1xuICBuYXZpZ2F0ZUFmdGVyQ29tcGxldGlvbigpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuRmluaXNoTW9kYWwoKSB7XG4gIC8vIEJ1aWxkIHNlc3Npb24gYW5hbHl0aWNzIGRhdGFcbiAgY29uc3Qgc3VtbWFyeURhdGEgPSBbXTtcbiAgZm9yIChjb25zdCBleCBvZiBleGVyY2lzZXMpIHtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBleC5zZXRzLmZpbHRlcihzID0+ICFzLmlzV2FybXVwICYmIHMuY29tcGxldGVkKTtcbiAgICBpZiAoY29tcGxldGVkLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHByID0gYXdhaXQgZ2V0RXhlcmNpc2VQUihleC5uYW1lKTtcbiAgICAgIGxldCBiZXN0VyA9IDAsIGJlc3RSID0gMCwgbWF4UiA9IDAsIHNlc3Npb25CZXN0ID0gMDtcbiAgICAgIGZvciAoY29uc3QgcyBvZiBjb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKHMucmVwcyA+IG1heFIpIG1heFIgPSBzLnJlcHM7XG4gICAgICAgIGlmIChzLndlaWdodCA+IDApIHtcbiAgICAgICAgICBjb25zdCBlc3QgPSBjYWxjdWxhdGUxUk0ocy53ZWlnaHQsIHMucmVwcyk7XG4gICAgICAgICAgaWYgKGVzdCA+IHNlc3Npb25CZXN0KSB7IHNlc3Npb25CZXN0ID0gZXN0OyBiZXN0VyA9IHMud2VpZ2h0OyBiZXN0UiA9IHMucmVwczsgfVxuICAgICAgICB9IGVsc2UgaWYgKHMucmVwcyA+IHNlc3Npb25CZXN0KSB7IHNlc3Npb25CZXN0ID0gcy5yZXBzOyBiZXN0UiA9IHMucmVwczsgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc2wgPSBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIGJlc3RXLCBiZXN0UiwgbWF4Uik7XG4gICAgICBzdW1tYXJ5RGF0YS5wdXNoKHsgbmFtZTogZXgubmFtZSwgbXVzY2xlOiBleC5tdXNjbGUgfHwgZXgubXVzY2xlR3JvdXAsIGJlc3RXLCBiZXN0UiwgbWF4Uiwgc2Vzc2lvbkJlc3QsIHNsLCBwciwgY29tcGxldGVkU2V0czogY29tcGxldGVkLmxlbmd0aCwgdG90YWxTZXRzOiBleC5zZXRzLmZpbHRlcihzID0+ICFzLmlzV2FybXVwKS5sZW5ndGggfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTW9kYWwobnVsbCwgKGNvbnRlbnQpID0+IHtcbiAgICAvLyBTY3JvbGxhYmxlIGFyZWFcbiAgICBjb25zdCBzY3JvbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjcm9sbC5zdHlsZS5jc3NUZXh0ID0gXCJvdmVyZmxvdy15OmF1dG87ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTZweDtmbGV4OjE7bWF4LWhlaWdodDo3MHZoO1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2Nyb2xsKTtcblxuICAgIC8vIFRpdGxlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldPUktPVVQgQ09NUExFVEVcIjtcbiAgICB0aXRsZS5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjowO2NvbG9yOiR7VEhFTUUuc3lzdGVtR3JlZW59O2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7YDtcbiAgICBzY3JvbGwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gU2Vzc2lvbiBzdW1tYXJ5IGNhcmRzXG4gICAgaWYgKHN1bW1hcnlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzZWMuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTJweDtcIjtcbiAgICAgIHNjcm9sbC5hcHBlbmRDaGlsZChzZWMpO1xuXG4gICAgICBjb25zdCBzZWNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzZWNUaXRsZS50ZXh0Q29udGVudCA9IFwiU0VTU0lPTiBTVU1NQVJZXCI7XG4gICAgICBzZWNUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtYWxpZ246Y2VudGVyO2A7XG4gICAgICBzZWMuYXBwZW5kQ2hpbGQoc2VjVGl0bGUpO1xuXG4gICAgICBmb3IgKGNvbnN0IGV4IG9mIHN1bW1hcnlEYXRhKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLnN0eWxlLmNzc1RleHQgPSBgcGFkZGluZzoxNHB4O2JhY2tncm91bmQ6IzBjMGMwYztib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gICAgICAgIHNlYy5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgICAgICAvLyBFeGVyY2lzZSBuYW1lICsgc3RyZW5ndGggYmFkZ2VcbiAgICAgICAgY29uc3QgaGRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGRyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMHB4O1wiO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGhkcik7XG5cbiAgICAgICAgY29uc3Qgbm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbm0udGV4dENvbnRlbnQgPSBleC5uYW1lO1xuICAgICAgICBubS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDtgO1xuICAgICAgICBoZHIuYXBwZW5kQ2hpbGQobm0pO1xuXG4gICAgICAgIGlmIChleC5zbCkge1xuICAgICAgICAgIGNvbnN0IGxpID0gU1RSRU5HVEhfTEVWRUxTW2V4LnNsLmxldmVsXTtcbiAgICAgICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIGJhZGdlLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtwYWRkaW5nOjRweCAxMHB4O2JhY2tncm91bmQ6JHtleC5zbC5jb2xvcn0yMDtib3JkZXI6MXB4IHNvbGlkICR7ZXguc2wuY29sb3J9NTA7Y29sb3I6JHtleC5zbC5jb2xvcn07Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjFweDtgO1xuICAgICAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gKGxpPy5pY29uIHx8IFwiXFx1MjVDQlwiKSArIFwiIFwiICsgZXguc2wubGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBoZHIuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmVzdCBzZXQgKyBlc3RpbWF0ZWQgMVJNXG4gICAgICAgIGNvbnN0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3RhdHMuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLWJvdHRvbTo4cHg7Zm9udC1zaXplOjEycHg7YDtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChzdGF0cyk7XG5cbiAgICAgICAgY29uc3Qgc2V0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzZXRJbmZvLnRleHRDb250ZW50ID0gZXguc2w/LmlzQm9keXdlaWdodCA/IFwiQmVzdDogXCIgKyBleC5tYXhSICsgXCIgcmVwc1wiIDogXCJCZXN0OiBcIiArIGV4LmJlc3RXICsgXCJrZyBcXHUwMEQ3IFwiICsgZXguYmVzdFI7XG4gICAgICAgIHNldEluZm8uc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2A7XG4gICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKHNldEluZm8pO1xuXG4gICAgICAgIGlmIChleC5zbCkge1xuICAgICAgICAgIGNvbnN0IHJtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIHJtSW5mby50ZXh0Q29udGVudCA9IGV4LnNsLmRpc3BsYXlMYWJlbCArIFwiOiBcIiArIGV4LnNsLmN1cnJlbnRWYWx1ZSArIGV4LnNsLnVuaXQ7XG4gICAgICAgICAgcm1JbmZvLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC13ZWlnaHQ6NjAwO2A7XG4gICAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQocm1JbmZvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHMgY29tcGxldGVkXG4gICAgICAgIGNvbnN0IHNldHNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2V0c0luZm8uc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTFweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbi1ib3R0b206OHB4O2A7XG4gICAgICAgIHNldHNJbmZvLnRleHRDb250ZW50ID0gZXguY29tcGxldGVkU2V0cyArIFwiL1wiICsgZXgudG90YWxTZXRzICsgXCIgd29ya2luZyBzZXRzIGNvbXBsZXRlZFwiO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHNldHNJbmZvKTtcblxuICAgICAgICAvLyBQUiBjb21wYXJpc29uXG4gICAgICAgIGlmIChleC5wcikge1xuICAgICAgICAgIGNvbnN0IHByQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcHJDLnN0eWxlLmNzc1RleHQgPSBgZm9udC1zaXplOjExcHg7bWFyZ2luLWJvdHRvbTo4cHg7cGFkZGluZzo2cHggOHB4O2A7XG4gICAgICAgICAgY29uc3QgY3YgPSBleC5zbD8uY3VycmVudFZhbHVlIHx8IGV4LnNlc3Npb25CZXN0O1xuICAgICAgICAgIGlmIChjdiA+IGV4LnByLnByVmFsdWUpIHtcbiAgICAgICAgICAgIHByQy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEyMiwxNTQsMTI1LDAuMTUpXCI7XG4gICAgICAgICAgICBwckMuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6IzdhOWE3ZDtmb250LXdlaWdodDo3MDA7XCI+XFx1RDgzQ1xcdURGODkgTkVXIFBSITwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgVEhFTUUuY29sb3JNdXRlZCArICc7XCI+UHJldmlvdXM6ICcgKyBleC5wci5wclZhbHVlICsgJyBcXHUyMTkyIE5vdzogJyArIGN2ICsgJzwvc3Bhbj4nO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3YgPT09IGV4LnByLnByVmFsdWUpIHtcbiAgICAgICAgICAgIHByQy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE2OCwxNTIsOTYsMC4xKVwiO1xuICAgICAgICAgICAgcHJDLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT1cImNvbG9yOiNhODk4NjA7XCI+XFx1RDgzQ1xcdURGQzYgTWF0Y2hlZCBQUjo8L3NwYW4+IDxzcGFuIHN0eWxlPVwiY29sb3I6JyArIFRIRU1FLmNvbG9yTXV0ZWQgKyAnO1wiPicgKyBleC5wci5wclZhbHVlICsgJzwvc3Bhbj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwckMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxNjgsMTUyLDk2LDAuMSlcIjtcbiAgICAgICAgICAgIHByQy5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgVEhFTUUuY29sb3JNdXRlZCArICc7XCI+XFx1RDgzQ1xcdURGQzYgUFI6ICcgKyBleC5wci5wclZhbHVlICsgJzwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJjb2xvcjojNmE2YTZhO1wiPih0b2RheTogJyArIGN2ICsgJyk8L3NwYW4+JztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwckMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3MgYmFyIHRvIG5leHQgc3RyZW5ndGggbGV2ZWxcbiAgICAgICAgaWYgKGV4LnNsICYmIGV4LnNsLm5leHRUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcGIuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFyXCI7XG4gICAgICAgICAgcGIuc3R5bGUubWFyZ2luVG9wID0gXCI4cHhcIjtcbiAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHBiKTtcbiAgICAgICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBmaWxsLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWZpbGxcIjtcbiAgICAgICAgICBmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1pbigxMDAsIGV4LnNsLnByb2dyZXNzKX0lO2JhY2tncm91bmQ6JHtleC5zbC5jb2xvcn07YDtcbiAgICAgICAgICBwYi5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICAgICAgICBjb25zdCB0aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGkuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Zm9udC1zaXplOjlweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbi10b3A6NHB4O2A7XG4gICAgICAgICAgdGkuaW5uZXJIVE1MID0gXCI8c3Bhbj5DdXJyZW50OiBcIiArIGV4LnNsLmN1cnJlbnRWYWx1ZSArIGV4LnNsLnVuaXQgKyBcIjwvc3Bhbj48c3Bhbj5OZXh0OiBcIiArIE1hdGgucm91bmQoZXguc2wubmV4dFRhcmdldCkgKyBleC5zbC51bml0ICsgXCI8L3NwYW4+XCI7XG4gICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBcIkhvdyBkaWQgaXQgZmVlbD9cIiBzZWN0aW9uXG4gICAgY29uc3QgZmVlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGZlZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiSG93IGRpZCBpdCBmZWVsP1wiO1xuICAgIGZlZWxUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjo4cHggMCAwIDA7Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjEzcHg7bGV0dGVyLXNwYWNpbmc6M3B4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtvcGFjaXR5OjAuODtgO1xuICAgIHNjcm9sbC5hcHBlbmRDaGlsZChmZWVsVGl0bGUpO1xuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRucy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxMHB4O1wiO1xuICAgIHNjcm9sbC5hcHBlbmRDaGlsZChidG5zKTtcblxuICAgIC8vIERpc2NpcGxpbmUgYnV0dG9uXG4gICAgY29uc3QgZGlzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzY0J0bi5jbGFzc05hbWUgPSBcIm90dy1mZWVsLWJ0blwiO1xuICAgIGRpc2NCdG4uc3R5bGUuYm9yZGVyTGVmdCA9IGAzcHggc29saWQgJHtUSEVNRS5jb2xvckRpc2NpcGxpbmV9YDtcbiAgICBkaXNjQnRuLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O3dpZHRoOjQwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCI+XFx1RDgzRFxcdURDOEU8L3NwYW4+PGRpdiBzdHlsZT1cImZsZXg6MTtcIj48ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvckRpc2NpcGxpbmV9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtsZXR0ZXItc3BhY2luZzoxLjVweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTo0cHg7XCI+RGlzY2lwbGluZTwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojNWE1YTVhO2ZvbnQtc2l6ZToxMXB4O2ZvbnQtc3R5bGU6aXRhbGljO1wiPlB1c2hlZCB0aHJvdWdoIHJlc2lzdGFuY2U8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPVwiY29sb3I6IzRhNDAzMDtmb250LXNpemU6MThweDtvcGFjaXR5OjAuNTtcIj5cXHUyMTkyPC9kaXY+YDtcbiAgICBkaXNjQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGNsb3NlTW9kYWwoKTsgYXdhaXQgZmluaXNoV29ya291dChcImRpc2NpcGxpbmVcIik7IH07XG4gICAgYnRucy5hcHBlbmRDaGlsZChkaXNjQnRuKTtcblxuICAgIC8vIEZsb3cgYnV0dG9uXG4gICAgY29uc3QgZmxvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmxvd0J0bi5jbGFzc05hbWUgPSBcIm90dy1mZWVsLWJ0blwiO1xuICAgIGZsb3dCdG4uc3R5bGUuYm9yZGVyTGVmdCA9IGAzcHggc29saWQgJHtUSEVNRS5jb2xvckZsb3d9YDtcbiAgICBmbG93QnRuLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O3dpZHRoOjQwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCI+XFx1RDgzQ1xcdURGMEE8L3NwYW4+PGRpdiBzdHlsZT1cImZsZXg6MTtcIj48ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvckZsb3d9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtsZXR0ZXItc3BhY2luZzoxLjVweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTo0cHg7XCI+RmxvdzwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojNWE1YTVhO2ZvbnQtc2l6ZToxMXB4O2ZvbnQtc3R5bGU6aXRhbGljO1wiPkZlbHQgbmF0dXJhbCBhbmQgZWZmb3J0bGVzczwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojMzA0MDUwO2ZvbnQtc2l6ZToxOHB4O29wYWNpdHk6MC41O1wiPlxcdTIxOTI8L2Rpdj5gO1xuICAgIGZsb3dCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY2xvc2VNb2RhbCgpOyBhd2FpdCBmaW5pc2hXb3Jrb3V0KFwiZmxvd1wiKTsgfTtcbiAgICBidG5zLmFwcGVuZENoaWxkKGZsb3dCdG4pO1xuICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBREQgRVhFUkNJU0UgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBvcGVuQWRkRXhlcmNpc2VNb2RhbChtdXNjbGUpIHtcbiAgY3JlYXRlTW9kYWwoXCJBZGQgRXhlcmNpc2UgLSBcIiArIG11c2NsZSwgKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV4ZXJjaXNlIG5hbWUuLi5cIjtcbiAgICBuYW1lSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoxMDAlO3BhZGRpbmc6MTJweDtiYWNrZ3JvdW5kOiMwZjBmMGY7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTRweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCB3YXJtdXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2FybXVwTGFiZWwudGV4dENvbnRlbnQgPSBcIkluY2x1ZGUgd2FybXVwIHNldHM/XCI7XG4gICAgd2FybXVwTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O21hcmdpbi10b3A6MTJweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2FybXVwTGFiZWwpO1xuXG4gICAgbGV0IGluY1dhcm11cCA9IHRydWU7XG4gICAgY29uc3Qgd2FybXVwUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3YXJtdXBSb3cuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2dhcDo4cHg7bWFyZ2luLXRvcDo4cHg7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3YXJtdXBSb3cpO1xuXG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIlllcyAoc3VnZ2VzdGVkKVwiO1xuICAgIHllc0J0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICB5ZXNCdG4uc3R5bGUuY3NzVGV4dCArPSBgZmxleDoxO2JhY2tncm91bmQ6cmdiYSgxNTQsMTQwLDEyMiwwLjIpO2JvcmRlci1jb2xvcjoke1RIRU1FLmNvbG9yfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtgO1xuICAgIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBub0J0bi50ZXh0Q29udGVudCA9IFwiTm9cIjtcbiAgICBub0J0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICBub0J0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgeWVzQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGluY1dhcm11cCA9IHRydWU7IHllc0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMilcIjsgeWVzQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3I7IG5vQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwZjBmMGZcIjsgbm9CdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvckJvcmRlcjsgfTtcbiAgICBub0J0bi5vbmNsaWNrID0gKCkgPT4geyBpbmNXYXJtdXAgPSBmYWxzZTsgbm9CdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxNTQsMTQwLDEyMiwwLjIpXCI7IG5vQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3I7IHllc0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMGYwZjBmXCI7IHllc0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFRIRU1FLmNvbG9yQm9yZGVyOyB9O1xuICAgIHdhcm11cFJvdy5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuICAgIHdhcm11cFJvdy5hcHBlbmRDaGlsZChub0J0bik7XG5cbiAgICBjb25zdCB3ZWlnaHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VpZ2h0TGFiZWwudGV4dENvbnRlbnQgPSBcIldvcmtpbmcgd2VpZ2h0IChrZykgLSAwIGZvciBib2R5d2VpZ2h0XCI7XG4gICAgd2VpZ2h0TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O21hcmdpbi10b3A6MTJweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VpZ2h0TGFiZWwpO1xuXG4gICAgY29uc3Qgd2VpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgd2VpZ2h0SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgd2VpZ2h0SW5wdXQucGxhY2Vob2xkZXIgPSBcIjBcIjtcbiAgICB3ZWlnaHRJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjEwMCU7cGFkZGluZzoxMnB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tdG9wOjhweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VpZ2h0SW5wdXQpO1xuXG4gICAgY29uc3QgYnRuUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5Sb3cuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2dhcDoxMnB4O21hcmdpbi10b3A6MTZweDtcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ0blJvdyk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIGNhbmNlbEJ0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiBjbG9zZU1vZGFsKCk7XG4gICAgYnRuUm93LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIEV4ZXJjaXNlXCI7XG4gICAgYWRkQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICBhZGRCdG4uc3R5bGUuZmxleCA9IFwiMVwiO1xuICAgIGFkZEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIW5hbWUpIHsgbm90aWNlKFwiUGxlYXNlIGVudGVyIGFuIGV4ZXJjaXNlIG5hbWVcIik7IHJldHVybjsgfVxuICAgICAgY29uc3Qgd3cgPSBwYXJzZUZsb2F0KHdlaWdodElucHV0LnZhbHVlKSB8fCAwO1xuICAgICAgY29uc3Qgc2V0cyA9IFtdO1xuICAgICAgaWYgKGluY1dhcm11cCAmJiB3dyA+IDApIHtcbiAgICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiBNYXRoLnJvdW5kKHd3ICogMC41KSwgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjcpLCByZXBzOiA2LCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogdHJ1ZSB9KTtcbiAgICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiBNYXRoLnJvdW5kKHd3ICogMC44NSksIHJlcHM6IDMsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiB3dywgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICAgIHNldHMucHVzaCh7IHdlaWdodDogd3csIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IHd3LCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgICAgZXhlcmNpc2VzLnB1c2goeyBuYW1lLCBtdXNjbGUsIG11c2NsZUdyb3VwOiBtdXNjbGUsIHNldHMgfSk7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgICAgIHJlbmRlcigpO1xuICAgIH07XG4gICAgYnRuUm93LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IG5hbWVJbnB1dC5mb2N1cygpLCAxMDApO1xuICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRU5ERVI6IFNFVCBST1dcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiByZW5kZXJTZXQoc2V0c0NvbnRhaW5lciwgc2V0LCBzZXRJZHgsIGV4LCB3YXJtdXBSZWZzKSB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvdy5jbGFzc05hbWUgPSBcIm90dy1zZXQtcm93XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNvbXBsZXRlZFwiIDogXCJcIik7XG4gIHNldHNDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgY29uc3QgcmVmcyA9IHsgd2VpZ2h0SW5wdXQ6IG51bGwgfTtcblxuICAvLyBDaGVja2JveFxuICBjb25zdCBjYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNiLmNsYXNzTmFtZSA9IFwib3R3LWNoZWNrYm94XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNoZWNrZWRcIiA6IFwiXCIpO1xuICBjYi50ZXh0Q29udGVudCA9IHNldC5jb21wbGV0ZWQgPyBcIlxcdTI3MTNcIiA6IFwiXCI7XG4gIGNiLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0LmNvbXBsZXRlZCA9ICFzZXQuY29tcGxldGVkO1xuICAgIGNiLmNsYXNzTmFtZSA9IFwib3R3LWNoZWNrYm94XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNoZWNrZWRcIiA6IFwiXCIpO1xuICAgIGNiLnRleHRDb250ZW50ID0gc2V0LmNvbXBsZXRlZCA/IFwiXFx1MjcxM1wiIDogXCJcIjtcbiAgICByb3cuY2xhc3NOYW1lID0gXCJvdHctc2V0LXJvd1wiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjb21wbGV0ZWRcIiA6IFwiXCIpO1xuICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICB9O1xuICByb3cuYXBwZW5kQ2hpbGQoY2IpO1xuXG4gIC8vIE1pZGRsZTogd2VpZ2h0ICsgcmVwc1xuICBjb25zdCBtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaWQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTJweDtmbGV4LXdyYXA6d3JhcDtcIjtcbiAgcm93LmFwcGVuZENoaWxkKG1pZCk7XG5cbiAgLy8gV2VpZ2h0IGlucHV0XG4gIGNvbnN0IHdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd1dyYXAuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O1wiO1xuICBtaWQuYXBwZW5kQ2hpbGQod1dyYXApO1xuICBjb25zdCB3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHdJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgd0lucHV0LnZhbHVlID0gc2V0LndlaWdodDtcbiAgd0lucHV0LmNsYXNzTmFtZSA9IFwib3R3LWlucHV0XCI7XG4gIGNvbnN0IGZpcnN0VyA9IGdldEZpcnN0V29ya2luZ1NldEluZGV4KGV4LnNldHMpO1xuICBjb25zdCBpc0ZpcnN0ID0gIXNldC5pc1dhcm11cCAmJiBzZXRJZHggPT09IGZpcnN0VztcbiAgd0lucHV0Lm9uY2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCBudyA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpIHx8IDA7XG4gICAgc2V0LndlaWdodCA9IG53O1xuICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICB1cGRhdGVXYXJtdXBXZWlnaHRzKGV4LCBudyk7XG4gICAgICBjb25zdCB3cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiBzLmlzV2FybXVwKTtcbiAgICAgIHdhcm11cFJlZnMuZm9yRWFjaCgoaW5wLCBpKSA9PiB7IGlmICh3c1tpXSkgaW5wLnZhbHVlID0gd3NbaV0ud2VpZ2h0OyB9KTtcbiAgICB9XG4gICAgYXdhaXQgc2F2ZVN0YXRlKCk7XG4gIH07XG4gIHdXcmFwLmFwcGVuZENoaWxkKHdJbnB1dCk7XG4gIHJlZnMud2VpZ2h0SW5wdXQgPSB3SW5wdXQ7XG4gIGNvbnN0IGtnTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2dMYWJlbC50ZXh0Q29udGVudCA9IFwia2dcIjtcbiAga2dMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7YDtcbiAgd1dyYXAuYXBwZW5kQ2hpbGQoa2dMYWJlbCk7XG5cbiAgLy8gUmVwcyBjb250cm9sc1xuICBjb25zdCByV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJXcmFwLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtcIjtcbiAgbWlkLmFwcGVuZENoaWxkKHJXcmFwKTtcbiAgY29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtaW51c0J0bi5jbGFzc05hbWUgPSBcIm90dy1jdHJsLWJ0blwiO1xuICBtaW51c0J0bi50ZXh0Q29udGVudCA9IFwiXFx1MjIxMlwiO1xuICBtaW51c0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBpZiAoc2V0LnJlcHMgPiAxKSB7IHNldC5yZXBzLS07IHJEaXNwLnRleHRDb250ZW50ID0gc2V0LnJlcHMgKyBcIlxcdTAwRDdcIjsgYXdhaXQgc2F2ZVN0YXRlKCk7IH0gfTtcbiAgcldyYXAuYXBwZW5kQ2hpbGQobWludXNCdG4pO1xuICBjb25zdCByRGlzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICByRGlzcC50ZXh0Q29udGVudCA9IHNldC5yZXBzICsgXCJcXHUwMEQ3XCI7XG4gIHJEaXNwLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO21pbi13aWR0aDozMHB4O3RleHQtYWxpZ246Y2VudGVyO2A7XG4gIHJXcmFwLmFwcGVuZENoaWxkKHJEaXNwKTtcbiAgY29uc3QgcGx1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsdXNCdG4uY2xhc3NOYW1lID0gXCJvdHctY3RybC1idG5cIjtcbiAgcGx1c0J0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICBwbHVzQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IHNldC5yZXBzKys7IHJEaXNwLnRleHRDb250ZW50ID0gc2V0LnJlcHMgKyBcIlxcdTAwRDdcIjsgYXdhaXQgc2F2ZVN0YXRlKCk7IH07XG4gIHJXcmFwLmFwcGVuZENoaWxkKHBsdXNCdG4pO1xuXG4gIGlmIChzZXQuaXNXYXJtdXApIHtcbiAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXdhcm11cC1iYWRnZVwiO1xuICAgIGJhZGdlLnRleHRDb250ZW50ID0gXCJcXHUyNkExIFdhcm11cFwiO1xuICAgIG1pZC5hcHBlbmRDaGlsZChiYWRnZSk7XG4gIH1cblxuICAvLyBEZWxldGUgc2V0IGJ1dHRvblxuICBpZiAoZXguc2V0cy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIlxcdTAwRDdcIjtcbiAgICBkZWxCdG4uc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjFweCBzb2xpZCAjM2EyODI4O2NvbG9yOiM2YTRhNGE7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE2cHg7YDtcbiAgICBkZWxCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgZXguc2V0cy5zcGxpY2Uoc2V0SWR4LCAxKTsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9O1xuICAgIHJvdy5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaC5zdHlsZS53aWR0aCA9IFwiMjhweFwiO1xuICAgIHJvdy5hcHBlbmRDaGlsZChwaCk7XG4gIH1cblxuICByZXR1cm4gcmVmcztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRU5ERVI6IEVYRVJDSVNFIENBUkRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJFeGVyY2lzZShleENvbnRhaW5lciwgZXgpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NOYW1lID0gXCJvdHctY2FyZFwiO1xuICBleENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgYWRkQ29ybmVycyhjYXJkLCBUSEVNRS5jb2xvciwgMTIpO1xuXG4gIGNvbnN0IGV4SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXhIZWFkZXIuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDttYXJnaW4tYm90dG9tOjEycHg7cGFkZGluZy1ib3R0b206MTJweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICBjYXJkLmFwcGVuZENoaWxkKGV4SGVhZGVyKTtcblxuICBjb25zdCBsZWZ0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdENvbC5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gIGV4SGVhZGVyLmFwcGVuZENoaWxkKGxlZnRDb2wpO1xuXG4gIGNvbnN0IGV4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGV4VGl0bGUudGV4dENvbnRlbnQgPSBleC5uYW1lO1xuICBleFRpdGxlLnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjAgMCA4cHggMDtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTZweDtsZXR0ZXItc3BhY2luZzoxcHg7YDtcbiAgbGVmdENvbC5hcHBlbmRDaGlsZChleFRpdGxlKTtcblxuICAvLyBTdHJlbmd0aCBsZXZlbCArIFBSIGluZm9cbiAgY29uc3QgaGFzU3RkID0gYXdhaXQgaGFzU3RyZW5ndGhTdGFuZGFyZChleC5uYW1lKTtcbiAgY29uc3QgcHIgPSBhd2FpdCBnZXRFeGVyY2lzZVBSKGV4Lm5hbWUpO1xuICBjb25zdCB3b3JraW5nU2V0cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiAhcy5pc1dhcm11cCk7XG4gIGxldCBiZXN0VyA9IDAsIGJlc3RSID0gMCwgbWF4UiA9IDA7XG4gIHdvcmtpbmdTZXRzLmZvckVhY2goKHMpID0+IHsgaWYgKHMucmVwcyA+IG1heFIpIG1heFIgPSBzLnJlcHM7IGlmIChzLndlaWdodCA+IGJlc3RXIHx8IChzLndlaWdodCA9PT0gYmVzdFcgJiYgcy5yZXBzID4gYmVzdFIpKSB7IGJlc3RXID0gcy53ZWlnaHQ7IGJlc3RSID0gcy5yZXBzOyB9IH0pO1xuXG4gIGlmIChoYXNTdGQpIHtcbiAgICBsZXQgc2w7XG4gICAgaWYgKHByKSB7IHNsID0gcHIuaXNCb2R5d2VpZ2h0ID8gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCAwLCBwci5wclZhbHVlLCBwci5wclZhbHVlKSA6IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXgubmFtZSwgcHIud2VpZ2h0LCBwci5yZXBzLCBudWxsKTsgfVxuICAgIGVsc2UgaWYgKGJlc3RXID4gMCB8fCBtYXhSID4gMCkgeyBzbCA9IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXgubmFtZSwgYmVzdFcsIGJlc3RSLCBtYXhSKTsgfVxuICAgIGlmIChzbCkge1xuICAgICAgY29uc3QgbGkgPSBTVFJFTkdUSF9MRVZFTFNbc2wubGV2ZWxdO1xuICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYmFkZ2UuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFkZ2VcIjtcbiAgICAgIGJhZGdlLnN0eWxlLmNzc1RleHQgKz0gYGJhY2tncm91bmQ6JHtzbC5jb2xvcn0yNTtib3JkZXI6MXB4IHNvbGlkICR7c2wuY29sb3J9NjA7Y29sb3I6JHtzbC5jb2xvcn07YDtcbiAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gKGxpPy5pY29uIHx8IFwiXFx1MjVDQlwiKSArIFwiIFwiICsgc2wubGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuXG4gICAgICBjb25zdCBybUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm1JbmZvLnN0eWxlLmNzc1RleHQgPSBgZm9udC1zaXplOjExcHg7Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTttYXJnaW4tdG9wOjZweDtgO1xuICAgICAgcm1JbmZvLmlubmVySFRNTCA9IGA8c3Ryb25nIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvcn1cIj4ke3NsLmRpc3BsYXlMYWJlbH06ICR7c2wuY3VycmVudFZhbHVlfSR7c2wudW5pdH08L3N0cm9uZz5gO1xuICAgICAgaWYgKHNsLm5leHRUYXJnZXQpIHJtSW5mby5pbm5lckhUTUwgKz0gYCBcXHUyMTkyIE5leHQ6ICR7TWF0aC5yb3VuZChzbC5uZXh0VGFyZ2V0KX0ke3NsLnVuaXR9YDtcbiAgICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQocm1JbmZvKTtcblxuICAgICAgY29uc3QgcGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGIuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFyXCI7XG4gICAgICBsZWZ0Q29sLmFwcGVuZENoaWxkKHBiKTtcbiAgICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZmlsbC5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1maWxsXCI7XG4gICAgICBmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1pbigxMDAsIHNsLnByb2dyZXNzKX0lO2JhY2tncm91bmQ6JHtzbC5jb2xvcn07YDtcbiAgICAgIHBiLmFwcGVuZENoaWxkKGZpbGwpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcikge1xuICAgIGNvbnN0IHByQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwckJveC5jbGFzc05hbWUgPSBcIm90dy1wci1ib3hcIjtcbiAgICBjb25zdCBwclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwclRpdGxlLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZToxMXB4O2NvbG9yOiNhODk4NjA7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjFweDtcIjtcbiAgICBwclRpdGxlLnRleHRDb250ZW50ID0gcHIuaXNCb2R5d2VpZ2h0ID8gXCJcXHVEODNDXFx1REZDNiBBTEwtVElNRSBQUjogXCIgKyBwci5wclZhbHVlICsgXCIgcmVwc1wiIDogXCJcXHVEODNDXFx1REZDNiBBTEwtVElNRSBQUjogXCIgKyBwci5lc3RpbWF0ZWQxUk0gKyBcImtnICgxUk0pXCI7XG4gICAgcHJCb3guYXBwZW5kQ2hpbGQocHJUaXRsZSk7XG4gICAgY29uc3QgcHJEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByRGV0YWlsLnN0eWxlLmNzc1RleHQgPSBgZm9udC1zaXplOjEwcHg7Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtgO1xuICAgIHByRGV0YWlsLnRleHRDb250ZW50ID0gcHIuaXNCb2R5d2VpZ2h0ID8gXCJCZXN0OiBcIiArIHByLnJlcHMgKyBcIiByZXBzXCIgOiBcIlNldDogXCIgKyBwci53ZWlnaHQgKyBcImtnIFxcdTAwRDcgXCIgKyBwci5yZXBzICsgXCIgcmVwc1wiO1xuICAgIHByQm94LmFwcGVuZENoaWxkKHByRGV0YWlsKTtcbiAgICBsZWZ0Q29sLmFwcGVuZENoaWxkKHByQm94KTtcbiAgfVxuXG4gIC8vIERlbGV0ZSBleGVyY2lzZSBidXR0b25cbiAgY29uc3QgZGVsRXhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxFeEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1RDgzRFxcdURERDFcXHVGRTBGXCI7XG4gIGRlbEV4QnRuLnN0eWxlLmNzc1RleHQgPSBcImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE0cHg7b3BhY2l0eTowLjU7XCI7XG4gIGRlbEV4QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGNvbnN0IGlkeCA9IGV4ZXJjaXNlcy5pbmRleE9mKGV4KTsgaWYgKGlkeCA+IC0xKSB7IGV4ZXJjaXNlcy5zcGxpY2UoaWR4LCAxKTsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9IH07XG4gIGV4SGVhZGVyLmFwcGVuZENoaWxkKGRlbEV4QnRuKTtcblxuICAvLyBTZXRzXG4gIGNvbnN0IHNldHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXRzQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjZweDtcIjtcbiAgY2FyZC5hcHBlbmRDaGlsZChzZXRzQ29udGFpbmVyKTtcbiAgY29uc3Qgd2FybXVwUmVmcyA9IFtdO1xuICBleC5zZXRzLmZvckVhY2goKHNldCwgc2V0SWR4KSA9PiB7XG4gICAgY29uc3QgcmVmcyA9IHJlbmRlclNldChzZXRzQ29udGFpbmVyLCBzZXQsIHNldElkeCwgZXgsIHdhcm11cFJlZnMpO1xuICAgIGlmIChzZXQuaXNXYXJtdXAgJiYgcmVmcy53ZWlnaHRJbnB1dCkgd2FybXVwUmVmcy5wdXNoKHJlZnMud2VpZ2h0SW5wdXQpO1xuICB9KTtcblxuICAvLyBBZGQgc2V0IGJ1dHRvblxuICBjb25zdCBhZGRTZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRTZXRCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFNldFwiO1xuICBhZGRTZXRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tZGFzaGVkXCI7XG4gIGFkZFNldEJ0bi5zdHlsZS5jc3NUZXh0ICs9IFwibWFyZ2luLXRvcDo4cHg7cGFkZGluZzo4cHggMTJweDtmb250LXNpemU6MTJweDtcIjtcbiAgYWRkU2V0QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IGV4LnNldHNbZXguc2V0cy5sZW5ndGggLSAxXSB8fCB7IHdlaWdodDogMCwgcmVwczogMTAgfTtcbiAgICBleC5zZXRzLnB1c2goeyB3ZWlnaHQ6IGxhc3Qud2VpZ2h0LCByZXBzOiBsYXN0LnJlcHMsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgICByZW5kZXIoKTtcbiAgfTtcbiAgY2FyZC5hcHBlbmRDaGlsZChhZGRTZXRCdG4pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNUQVRJU1RJQ1MgJiBIRUFUTUFQIERBVEFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBNYXAgbXVzY2xlL3N1Ymdyb3VwIG5hbWVzIFx1MjE5MiBib2R5IHJlZ2lvbnMgZm9yIHRoZSBoZWF0bWFwXG5jb25zdCBNVVNDTEVfVE9fUkVHSU9OID0ge1xuICBOZWNrOiBbXCJuZWNrXCJdLCBDaGVzdDogW1wiY2hlc3RcIl0sIENvcmU6IFtcImNvcmVcIl0sXG4gIEJhY2s6IFtcImxhdHNcIiwgXCJ0cmFwc1wiLCBcImxvd2VyX2JhY2tcIl0sIExhdHM6IFtcImxhdHNcIl0sIFRyYXBzOiBbXCJ0cmFwc1wiXSxcbiAgUmhvbWJvaWRzOiBbXCJ0cmFwc1wiXSwgXCJMb3dlciBCYWNrXCI6IFtcImxvd2VyX2JhY2tcIl0sIFwiUmVhciBEZWx0c1wiOiBbXCJyZWFyX2RlbHRzXCJdLFxuICBTaG91bGRlcnM6IFtcImZyb250X2RlbHRzXCIsIFwicmVhcl9kZWx0c1wiXSwgXCJGcm9udCBEZWx0c1wiOiBbXCJmcm9udF9kZWx0c1wiXSxcbiAgXCJTaWRlIERlbHRzXCI6IFtcImZyb250X2RlbHRzXCJdLFxuICBMZWdzOiBbXCJxdWFkc1wiLCBcImhhbXN0cmluZ3NcIiwgXCJnbHV0ZXNcIiwgXCJjYWx2ZXNcIl0sIFF1YWRzOiBbXCJxdWFkc1wiXSxcbiAgSGFtc3RyaW5nczogW1wiaGFtc3RyaW5nc1wiXSwgR2x1dGVzOiBbXCJnbHV0ZXNcIl0sIENhbHZlczogW1wiY2FsdmVzXCJdLFxuICBBZGR1Y3RvcnM6IFtcInF1YWRzXCJdLFxuICBBcm1zOiBbXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIl0sIEJpY2VwczogW1wiYmljZXBzXCJdLFxuICBUcmljZXBzOiBbXCJ0cmljZXBzXCJdLCBGb3JlYXJtczogW1wiZm9yZWFybXNcIl0sXG59O1xuXG5mdW5jdGlvbiBnZXRXZWVrbHlDYWxlbmRhckRhdGEoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkuc3RhcnRPZihcImRheVwiKTtcbiAgY29uc3Qgd2Vla1N0YXJ0ID0gdG9kYXkuY2xvbmUoKS5zdGFydE9mKFwiaXNvV2Vla1wiKTtcbiAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBjb25zdCBkYXlzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgY29uc3QgZGF5ID0gd2Vla1N0YXJ0LmNsb25lKCkuYWRkKGksIFwiZGF5c1wiKTtcbiAgICBjb25zdCBkYXlTdHIgPSBkYXkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBjb25zdCBpc1RvZGF5ID0gZGF5LmlzU2FtZSh0b2RheSwgXCJkYXlcIik7XG4gICAgY29uc3QgaXNQYXN0ID0gZGF5LmlzQmVmb3JlKHRvZGF5LCBcImRheVwiKTtcbiAgICBsZXQgc3RhdHVzID0gbnVsbCwgdHlwZSA9IG51bGw7XG4gICAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgICAgaWYgKHdGaWxlLmJhc2VuYW1lID09PSBkYXlTdHIpIHtcbiAgICAgICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgICAgIGlmIChmbSAmJiBmbS5Xb3Jrb3V0ID09PSB0cnVlKSB7IHN0YXR1cyA9IFwiZG9uZVwiOyB0eXBlID0gZm1bXCJXb3Jrb3V0LVR5cGVcIl0gfHwgXCJkb25lXCI7IH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGRheXMucHVzaCh7IGxhYmVsOiBkYXkuZm9ybWF0KFwiZGRcIilbMF0sIG51bTogZGF5LmZvcm1hdChcIkRcIiksIGlzVG9kYXksIGlzUGFzdCwgc3RhdHVzLCB0eXBlIH0pO1xuICB9XG4gIHJldHVybiBkYXlzO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aGx5U3RhdHMoKSB7XG4gIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gIGNvbnN0IHdlZWtTdGFydCA9IG5vdy5jbG9uZSgpLnN0YXJ0T2YoXCJpc29XZWVrXCIpO1xuICBjb25zdCBtb250aFN0YXJ0ID0gbm93LmNsb25lKCkuc3RhcnRPZihcIm1vbnRoXCIpO1xuICBsZXQgdGhpc1dlZWsgPSAwLCB0aGlzTW9udGggPSAwLCB0b3RhbCA9IDAsIHRvdGFsU2V0cyA9IDAsIHRvdGFsVm9sdW1lID0gMDtcbiAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSkgY29udGludWU7XG4gICAgdG90YWwrKztcbiAgICBjb25zdCBkYXRlTWF0Y2ggPSB3RmlsZS5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKTtcbiAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgY29uc3QgZmlsZURhdGUgPSBtb21lbnQoZGF0ZU1hdGNoWzFdLCBcIllZWVktTU0tRERcIik7XG4gICAgaWYgKGZpbGVEYXRlLmlzU2FtZU9yQWZ0ZXIod2Vla1N0YXJ0KSkgdGhpc1dlZWsrKztcbiAgICBpZiAoZmlsZURhdGUuaXNTYW1lT3JBZnRlcihtb250aFN0YXJ0KSkgdGhpc01vbnRoKys7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSkge1xuICAgICAgZm9yIChjb25zdCBleCBvZiBmbS5leGVyY2lzZXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4LnNldHMpKSBjb250aW51ZTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIGV4LnNldHMpIHtcbiAgICAgICAgICBpZiAocy5jb21wbGV0ZWQgJiYgIXMuaXNXYXJtdXApIHsgdG90YWxTZXRzKys7IHRvdGFsVm9sdW1lICs9IChzLndlaWdodCB8fCAwKSAqIChzLnJlcHMgfHwgMCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4geyB0aGlzV2VlaywgdGhpc01vbnRoLCB0b3RhbCwgdG90YWxTZXRzLCB0b3RhbFZvbHVtZSB9O1xufVxuXG5mdW5jdGlvbiBnZXRSZWNlbnRTZXNzaW9ucyhsaW1pdCkge1xuICBsaW1pdCA9IGxpbWl0IHx8IDQ7XG4gIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgY29uc3Qgc29ydGVkID0gYWxsRmlsZXMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBiLmJhc2VuYW1lLmxvY2FsZUNvbXBhcmUoYS5iYXNlbmFtZSk7IH0pO1xuICBjb25zdCBzZXNzaW9ucyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzZXNzaW9ucy5sZW5ndGggPj0gbGltaXQpIGJyZWFrO1xuICAgIHZhciB3RmlsZSA9IHNvcnRlZFtpXTtcbiAgICBpZiAod0ZpbGUucGF0aCA9PT0gZmlsZS5wYXRoKSBjb250aW51ZTtcbiAgICB2YXIgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlKSBjb250aW51ZTtcbiAgICB2YXIgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgc2Vzc2lvbnMucHVzaCh7XG4gICAgICBkYXRlOiBkYXRlTWF0Y2ggPyBkYXRlTWF0Y2hbMV0gOiB3RmlsZS5iYXNlbmFtZSxcbiAgICAgIHR5cGU6IGZtW1wiV29ya291dC1UeXBlXCJdIHx8IFwiZG9uZVwiLFxuICAgICAgbXVzY2xlczogZm0ubXVzY2xlR3JvdXBzIHx8IFtdLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzZXNzaW9ucztcbn1cblxuLy8gQnVpbGQgc3RyZW5ndGggbGV2ZWwgZGF0YSBwZXIgYm9keSByZWdpb24gZnJvbSBBTEwgY29tcGxldGVkIHdvcmtvdXRzXG5hc3luYyBmdW5jdGlvbiBnZXRNdXNjbGVMZXZlbERhdGEoKSB7XG4gIGNvbnN0IGV4ZXJjaXNlQmVzdCA9IHt9OyAvLyBleGVyY2lzZU5hbWUgXHUyMTkyIHsgd2VpZ2h0LCByZXBzLCBtYXhSZXBzLCBtdXNjbGUgfVxuICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICBpZiAod0ZpbGUucGF0aCA9PT0gZmlsZS5wYXRoKSBjb250aW51ZTtcbiAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICBpZiAoIWZtIHx8IGZtLldvcmtvdXQgIT09IHRydWUgfHwgIUFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSkgY29udGludWU7XG4gICAgZm9yIChjb25zdCBleCBvZiBmbS5leGVyY2lzZXMpIHtcbiAgICAgIGNvbnN0IGRvbmUgPSAoZXguc2V0cyB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMuY29tcGxldGVkICYmICFzLmlzV2FybXVwOyB9KTtcbiAgICAgIGlmIChkb25lLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG4gICAgICBsZXQgYmVzdFcgPSAwLCBiZXN0UiA9IDAsIG1heFIgPSAwO1xuICAgICAgZm9yIChjb25zdCBzIG9mIGRvbmUpIHtcbiAgICAgICAgaWYgKHMucmVwcyA+IG1heFIpIG1heFIgPSBzLnJlcHM7XG4gICAgICAgIGlmIChzLndlaWdodCA+IGJlc3RXIHx8IChzLndlaWdodCA9PT0gYmVzdFcgJiYgcy5yZXBzID4gYmVzdFIpKSB7IGJlc3RXID0gcy53ZWlnaHQ7IGJlc3RSID0gcy5yZXBzOyB9XG4gICAgICB9XG4gICAgICBjb25zdCBleGlzdGluZyA9IGV4ZXJjaXNlQmVzdFtleC5uYW1lXTtcbiAgICAgIGlmICghZXhpc3RpbmcpIHtcbiAgICAgICAgZXhlcmNpc2VCZXN0W2V4Lm5hbWVdID0geyB3ZWlnaHQ6IGJlc3RXLCByZXBzOiBiZXN0UiwgbWF4UmVwczogbWF4UiwgbXVzY2xlOiBleC5tdXNjbGUgfHwgZXgubXVzY2xlR3JvdXAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbCA9IGV4aXN0aW5nLndlaWdodCA+IDAgPyBjYWxjdWxhdGUxUk0oZXhpc3Rpbmcud2VpZ2h0LCBleGlzdGluZy5yZXBzKSA6IGV4aXN0aW5nLm1heFJlcHM7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IGJlc3RXID4gMCA/IGNhbGN1bGF0ZTFSTShiZXN0VywgYmVzdFIpIDogbWF4UjtcbiAgICAgICAgaWYgKG5ld1ZhbCA+IG9sZFZhbCkgZXhlcmNpc2VCZXN0W2V4Lm5hbWVdID0geyB3ZWlnaHQ6IGJlc3RXLCByZXBzOiBiZXN0UiwgbWF4UmVwczogbWF4UiwgbXVzY2xlOiBleC5tdXNjbGUgfHwgZXgubXVzY2xlR3JvdXAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gQ2FsY3VsYXRlIHN0cmVuZ3RoIGxldmVsIHBlciBleGVyY2lzZSwgbWFwIHRvIGJvZHkgcmVnaW9uc1xuICBjb25zdCByZWdpb25FbnRyaWVzID0ge307XG4gIGZvciAoY29uc3QgW2V4TmFtZSwgZGF0YV0gb2YgT2JqZWN0LmVudHJpZXMoZXhlcmNpc2VCZXN0KSkge1xuICAgIGNvbnN0IHNsID0gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleE5hbWUsIGRhdGEud2VpZ2h0LCBkYXRhLnJlcHMsIGRhdGEubWF4UmVwcyk7XG4gICAgaWYgKCFzbCkgY29udGludWU7XG4gICAgY29uc3QgcmVnaW9ucyA9IE1VU0NMRV9UT19SRUdJT05bZGF0YS5tdXNjbGVdIHx8IFtdO1xuICAgIGZvciAoY29uc3QgcmVnaW9uIG9mIHJlZ2lvbnMpIHtcbiAgICAgIGlmICghcmVnaW9uRW50cmllc1tyZWdpb25dKSByZWdpb25FbnRyaWVzW3JlZ2lvbl0gPSBbXTtcbiAgICAgIHJlZ2lvbkVudHJpZXNbcmVnaW9uXS5wdXNoKHsgbGV2ZWw6IHNsLmxldmVsLCBjb2xvcjogc2wuY29sb3IsIHByb2dyZXNzOiBzbC5wcm9ncmVzcyB9KTtcbiAgICB9XG4gIH1cbiAgLy8gUGljayB0aGUgYmVzdCBzdHJlbmd0aCBsZXZlbCBwZXIgcmVnaW9uXG4gIGNvbnN0IGxldmVsT3JkZXIgPSBbXCJVbnRyYWluZWRcIiwgXCJCZWdpbm5lclwiLCBcIk5vdmljZVwiLCBcIkludGVybWVkaWF0ZVwiLCBcIkFkdmFuY2VkXCIsIFwiRWxpdGVcIl07XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IFtyZWdpb24sIGVudHJpZXNdIG9mIE9iamVjdC5lbnRyaWVzKHJlZ2lvbkVudHJpZXMpKSB7XG4gICAgbGV0IGJlc3QgPSBlbnRyaWVzWzBdLCBiZXN0SWR4ID0gbGV2ZWxPcmRlci5pbmRleE9mKGVudHJpZXNbMF0ubGV2ZWwpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaWR4ID0gbGV2ZWxPcmRlci5pbmRleE9mKGVudHJpZXNbaV0ubGV2ZWwpO1xuICAgICAgaWYgKGlkeCA+IGJlc3RJZHgpIHsgYmVzdElkeCA9IGlkeDsgYmVzdCA9IGVudHJpZXNbaV07IH1cbiAgICB9XG4gICAgcmVzdWx0W3JlZ2lvbl0gPSBiZXN0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9EWSBIRUFUTUFQIFNWRyBcdTIwMTQgSW50ZXJhY3RpdmUgd2l0aCBjbGljay10by1zaG93LXByb2dyZXNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgUkVHSU9OX0xBQkVMUyA9IHtcbiAgbmVjazogXCJOZWNrXCIsIGNoZXN0OiBcIkNoZXN0XCIsIGZyb250X2RlbHRzOiBcIkZyb250IERlbHRzXCIsIHJlYXJfZGVsdHM6IFwiUmVhciBEZWx0c1wiLFxuICBiaWNlcHM6IFwiQmljZXBzXCIsIHRyaWNlcHM6IFwiVHJpY2Vwc1wiLCBmb3JlYXJtczogXCJGb3JlYXJtc1wiLCBjb3JlOiBcIkNvcmVcIixcbiAgcXVhZHM6IFwiUXVhZHNcIiwgY2FsdmVzOiBcIkNhbHZlc1wiLCB0cmFwczogXCJUcmFwc1wiLCBsYXRzOiBcIkxhdHNcIixcbiAgbG93ZXJfYmFjazogXCJMb3dlciBCYWNrXCIsIGdsdXRlczogXCJHbHV0ZXNcIiwgaGFtc3RyaW5nczogXCJIYW1zdHJpbmdzXCIsXG59O1xuXG4vLyBcdTI1MDBcdTI1MDAgUmVuZGVyIHBlci1tdXNjbGUgc3RyZW5ndGggZ3JpZCAocmVwbGFjZXMgYm9keSBmaWd1cmUpIFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiByZW5kZXJNdXNjbGVTdHJlbmd0aEdyaWQocGFyZW50LCBncm91cFN0cmVuZ3RoLCBtdXNjbGVMZXZlbHMpIHtcbiAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGdyaWQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6NnB4O21hcmdpbjoxNHB4IDAgOHB4O1wiO1xuXG4gIGZvciAoY29uc3QgW2dyb3VwLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhncm91cFN0cmVuZ3RoKSkge1xuICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcm93LnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTBweDtwYWRkaW5nOjEwcHggMTJweDtiYWNrZ3JvdW5kOnJnYmEoMTIsMTAsMTYsMC40KTtib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4wNik7Ym9yZGVyLXJhZGl1czoxMHB4O2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246Ym9yZGVyLWNvbG9yIDAuMTVzO2A7XG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHsgcm93LnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMTgpXCI7IH0pO1xuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7IHJvdy5zdHlsZS5ib3JkZXJDb2xvciA9IFwicmdiYSgxNTQsMTQwLDEyMiwwLjA2KVwiOyB9KTtcblxuICAgIC8vIE11c2NsZSBncm91cCBpY29uICsgbmFtZVxuICAgIGNvbnN0IGljb24gPSBNVVNDTEVfR1JPVVBTW2dyb3VwXT8uaWNvbiB8fCBcIlxcdTI1Q0JcIjtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGFiZWwuc3R5bGUuY3NzVGV4dCA9IFwibWluLXdpZHRoOjkwcHg7Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NjAwO2xldHRlci1zcGFjaW5nOjFweDtjb2xvcjojNmE1YTRhO1wiO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gaWNvbiArIFwiIFwiICsgZ3JvdXAudG9VcHBlckNhc2UoKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgLy8gUHJvZ3Jlc3MgYmFyXG4gICAgY29uc3QgYmFyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFyV3JhcC5zdHlsZS5jc3NUZXh0ID0gXCJmbGV4OjE7aGVpZ2h0OjZweDtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7Ym9yZGVyLXJhZGl1czozcHg7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO1wiO1xuXG4gICAgLy8gVG90YWwgcHJvZ3Jlc3MgYWNyb3NzIGFsbCBsZXZlbHMgKDAtMTAwIG1hcHMgdG8gVW50cmFpbmVkXHUyMTkyRWxpdGUpXG4gICAgY29uc3QgdG90YWxQcm9ncmVzcyA9IChMRVZFTF9PUkRFUi5pbmRleE9mKGRhdGEubGV2ZWwpIC8gNSkgKiAxMDAgKyAoZGF0YS5wcm9ncmVzcyB8fCAwKSAqICgxLzUpO1xuICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpbGwuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjNweDt0cmFuc2l0aW9uOndpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTt3aWR0aDoke01hdGgubWluKDEwMCwgTWF0aC5tYXgoMiwgdG90YWxQcm9ncmVzcykpfSU7YmFja2dyb3VuZDoke2RhdGEubGV2ZWwgPT09IFwiVW50cmFpbmVkXCIgPyBcIiMzYTM0MmFcIiA6IGRhdGEuY29sb3J9O2A7XG4gICAgYmFyV3JhcC5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoYmFyV3JhcCk7XG5cbiAgICAvLyBTdHJlbmd0aCBsZXZlbCBiYWRnZVxuICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZTo4cHg7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjEuNXB4O2NvbG9yOiR7ZGF0YS5sZXZlbCA9PT0gXCJVbnRyYWluZWRcIiA/IFwiIzNhMzQyYVwiIDogZGF0YS5jb2xvcn07bWluLXdpZHRoOjY0cHg7dGV4dC1hbGlnbjpyaWdodDtgO1xuICAgIGJhZGdlLnRleHRDb250ZW50ID0gZGF0YS5sZXZlbCA9PT0gXCJVbnRyYWluZWRcIiA/IFwiXHUyMDE0XCIgOiBkYXRhLmxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgcm93LmFwcGVuZENoaWxkKGJhZGdlKTtcblxuICAgIC8vIENsaWNrIFx1MjE5MiBzaG93IHBlci1yZWdpb24gYnJlYWtkb3duIHBvcHVwIGZvciB0aGlzIG11c2NsZSBncm91cFxuICAgIHJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgc2hvd011c2NsZUdyb3VwUG9wdXAoZ3JvdXAsIGRhdGEsIG11c2NsZUxldmVscyk7XG4gICAgfSk7XG5cbiAgICBncmlkLmFwcGVuZENoaWxkKHJvdyk7XG4gIH1cblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoZ3JpZCk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBQb3B1cCBmb3IgYSBzcGVjaWZpYyBtdXNjbGUgZ3JvdXAgc2hvd2luZyBwZXItcmVnaW9uIGJyZWFrZG93biBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gc2hvd011c2NsZUdyb3VwUG9wdXAoZ3JvdXAsIGdyb3VwRGF0YSwgbXVzY2xlTGV2ZWxzKSB7XG4gIGNvbnN0IHJlZ2lvbnMgPSBNVVNDTEVfR1JPVVBfUkVHSU9OU1tncm91cF0gfHwgW107XG4gIGNyZWF0ZU1vZGFsKGdyb3VwLnRvVXBwZXJDYXNlKCksIChjb250ZW50KSA9PiB7XG4gICAgLy8gT3ZlcmFsbCBncm91cCBzdHJlbmd0aCBiYWRnZVxuICAgIGNvbnN0IGxpID0gU1RSRU5HVEhfTEVWRUxTW2dyb3VwRGF0YS5sZXZlbF07XG4gICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhZGdlXCI7XG4gICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kOiR7Z3JvdXBEYXRhLmNvbG9yfTI1O2JvcmRlcjoxcHggc29saWQgJHtncm91cERhdGEuY29sb3J9NjA7Y29sb3I6JHtncm91cERhdGEuY29sb3J9O21hcmdpbjo4cHggYXV0bztkaXNwbGF5OmlubGluZS1mbGV4O2A7XG4gICAgYmFkZ2UudGV4dENvbnRlbnQgPSAobGk/Lmljb24gfHwgXCJcXHUyNUNCXCIpICsgXCIgXCIgKyBncm91cERhdGEubGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhZGdlKTtcblxuICAgIC8vIFByb2dyZXNzIGJhclxuICAgIGNvbnN0IHRvdGFsUHJvZ3Jlc3MgPSAoTEVWRUxfT1JERVIuaW5kZXhPZihncm91cERhdGEubGV2ZWwpIC8gNSkgKiAxMDAgKyAoZ3JvdXBEYXRhLnByb2dyZXNzIHx8IDApICogKDEvNSk7XG4gICAgY29uc3QgcGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBiLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhclwiO1xuICAgIHBiLnN0eWxlLm1hcmdpblRvcCA9IFwiMTJweFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGIpO1xuICAgIGNvbnN0IGZpbGxFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsbEVsLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWZpbGxcIjtcbiAgICBmaWxsRWwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWluKDEwMCwgdG90YWxQcm9ncmVzcyl9JTtiYWNrZ3JvdW5kOiR7Z3JvdXBEYXRhLmNvbG9yfTtgO1xuICAgIHBiLmFwcGVuZENoaWxkKGZpbGxFbCk7XG5cbiAgICAvLyBQZXItcmVnaW9uIGJyZWFrZG93blxuICAgIGlmIChyZWdpb25zLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHN1YkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1YkxhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6OXB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoxOHB4O21hcmdpbi1ib3R0b206OHB4O2A7XG4gICAgICBzdWJMYWJlbC50ZXh0Q29udGVudCA9IFwiUkVHSU9OIEJSRUFLRE9XTlwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChzdWJMYWJlbCk7XG5cbiAgICAgIGZvciAoY29uc3QgcmVnaW9uIG9mIHJlZ2lvbnMpIHtcbiAgICAgICAgY29uc3QgckRhdGEgPSBtdXNjbGVMZXZlbHNbcmVnaW9uXTtcbiAgICAgICAgY29uc3QgckxhYmVsID0gUkVHSU9OX0xBQkVMU1tyZWdpb25dIHx8IHJlZ2lvbjtcblxuICAgICAgICBjb25zdCByUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgclJvdy5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjhweDtwYWRkaW5nOjhweCAxMHB4O21hcmdpbi1ib3R0b206NHB4O2JhY2tncm91bmQ6cmdiYSgxMiwxMCwxNiwwLjQpO2JvcmRlcjoxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjA2KTtib3JkZXItcmFkaXVzOjhweDtgO1xuXG4gICAgICAgIGNvbnN0IHJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgck5hbWUuc3R5bGUuY3NzVGV4dCA9IGBtaW4td2lkdGg6ODBweDtmb250LXNpemU6MTBweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2xldHRlci1zcGFjaW5nOjFweDtgO1xuICAgICAgICByTmFtZS50ZXh0Q29udGVudCA9IHJMYWJlbDtcbiAgICAgICAgclJvdy5hcHBlbmRDaGlsZChyTmFtZSk7XG5cbiAgICAgICAgY29uc3QgckJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJCYXIuc3R5bGUuY3NzVGV4dCA9IFwiZmxleDoxO2hlaWdodDo0cHg7YmFja2dyb3VuZDpyZ2JhKDI1NSwyNTUsMjU1LDAuMDQpO2JvcmRlci1yYWRpdXM6MnB4O292ZXJmbG93OmhpZGRlbjtcIjtcbiAgICAgICAgaWYgKHJEYXRhKSB7XG4gICAgICAgICAgY29uc3QgclByb2dyZXNzID0gKExFVkVMX09SREVSLmluZGV4T2YockRhdGEubGV2ZWwpIC8gNSkgKiAxMDAgKyAockRhdGEucHJvZ3Jlc3MgfHwgMCkgKiAoMS81KTtcbiAgICAgICAgICBjb25zdCByRmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgckZpbGwuc3R5bGUuY3NzVGV4dCA9IGBoZWlnaHQ6MTAwJTtib3JkZXItcmFkaXVzOjJweDt3aWR0aDoke01hdGgubWluKDEwMCwgTWF0aC5tYXgoMiwgclByb2dyZXNzKSl9JTtiYWNrZ3JvdW5kOiR7ckRhdGEuY29sb3J9O2A7XG4gICAgICAgICAgckJhci5hcHBlbmRDaGlsZChyRmlsbCk7XG4gICAgICAgIH1cbiAgICAgICAgclJvdy5hcHBlbmRDaGlsZChyQmFyKTtcblxuICAgICAgICBjb25zdCByQmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByQmFkZ2Uuc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6OHB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzoxcHg7bWluLXdpZHRoOjU1cHg7dGV4dC1hbGlnbjpyaWdodDtjb2xvcjoke3JEYXRhID8gckRhdGEuY29sb3IgOiBcIiMzYTM0MmFcIn07YDtcbiAgICAgICAgckJhZGdlLnRleHRDb250ZW50ID0gckRhdGEgPyByRGF0YS5sZXZlbC50b1VwcGVyQ2FzZSgpIDogXCJcdTIwMTRcIjtcbiAgICAgICAgclJvdy5hcHBlbmRDaGlsZChyQmFkZ2UpO1xuXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoclJvdyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTW9udGhseSB3b3Jrb3V0IGZyZXF1ZW5jeSBjaGFydCBmb3IgdGhpcyBtdXNjbGUgZ3JvdXBcbiAgICBjb25zdCBjaGFydExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGFydExhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTBweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi10b3A6MjBweDtgO1xuICAgIGNoYXJ0TGFiZWwudGV4dENvbnRlbnQgPSBcIk1PTlRITFkgRlJFUVVFTkNZXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjaGFydExhYmVsKTtcblxuICAgIGNvbnN0IHRhcmdldE11c2NsZXMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IFttdXNjbGUsIHJlZ2lvbkxpc3RdIG9mIE9iamVjdC5lbnRyaWVzKE1VU0NMRV9UT19SRUdJT04pKSB7XG4gICAgICBmb3IgKGNvbnN0IHIgb2YgcmVnaW9uTGlzdCkge1xuICAgICAgICBpZiAocmVnaW9ucy5pbmNsdWRlcyhyKSAmJiAhdGFyZ2V0TXVzY2xlcy5pbmNsdWRlcyhtdXNjbGUpKSB0YXJnZXRNdXNjbGVzLnB1c2gobXVzY2xlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gICAgY29uc3Qgd2Vla0NvdW50cyA9IFswLCAwLCAwLCAwXTtcbiAgICBmb3IgKGNvbnN0IHdGaWxlIG9mIGFsbEZpbGVzKSB7XG4gICAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSB8fCAhQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGRhdGVNYXRjaCA9IHdGaWxlLmJhc2VuYW1lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS8pO1xuICAgICAgaWYgKCFkYXRlTWF0Y2gpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZGF5c0FnbyA9IG5vdy5kaWZmKG1vbWVudChkYXRlTWF0Y2hbMV0sIFwiWVlZWS1NTS1ERFwiKSwgXCJkYXlzXCIpO1xuICAgICAgaWYgKGRheXNBZ28gPCAwIHx8IGRheXNBZ28gPiAyOCkgY29udGludWU7XG4gICAgICBjb25zdCBoYXNNdXNjbGUgPSBmbS5leGVyY2lzZXMuc29tZShleCA9PiB0YXJnZXRNdXNjbGVzLmluY2x1ZGVzKGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCkpO1xuICAgICAgaWYgKGhhc011c2NsZSkge1xuICAgICAgICBjb25zdCB3ZWVrSWR4ID0gTWF0aC5mbG9vcihkYXlzQWdvIC8gNyk7XG4gICAgICAgIGlmICh3ZWVrSWR4IDwgNCkgd2Vla0NvdW50c1szIC0gd2Vla0lkeF0rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJMaW5lQ2hhcnQoY29udGVudCwgW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl0sIHdlZWtDb3VudHMpO1xuICB9KTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIE92ZXJhbGwgUHJvZ3Jlc3MgUG9wdXAgKGJvdGggb3ZlcmFsbCArIHBlci1tdXNjbGUpIFx1MjUwMFx1MjUwMFxuXG5hc3luYyBmdW5jdGlvbiBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAobXVzY2xlTGV2ZWxzKSB7XG4gIGNyZWF0ZU1vZGFsKFwiU1RSRU5HVEggUFJPR1JFU1NcIiwgKGNvbnRlbnQpID0+IHtcbiAgICAvLyAxKSBPdmVyYWxsIHN0cmVuZ3RoIHRyZW5kIFx1MjAxNCBhdmVyYWdlIHN0cmVuZ3RoIGxldmVsIGFjcm9zcyBhbGwgcmVnaW9uc1xuICAgIGNvbnN0IG92ZXJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlckxhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTBweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206OHB4O2A7XG4gICAgb3ZlckxhYmVsLnRleHRDb250ZW50ID0gXCJPVkVSQUxMIFNUUkVOR1RIXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChvdmVyTGFiZWwpO1xuXG4gICAgLy8gU3VtbWFyaXplIGN1cnJlbnQgc3RyZW5ndGggbGV2ZWxzXG4gICAgY29uc3QgbGV2ZWxPcmRlciA9IFtcIlVudHJhaW5lZFwiLCBcIkJlZ2lubmVyXCIsIFwiTm92aWNlXCIsIFwiSW50ZXJtZWRpYXRlXCIsIFwiQWR2YW5jZWRcIiwgXCJFbGl0ZVwiXTtcbiAgICBjb25zdCByZWdpb25MZXZlbHMgPSBPYmplY3QuZW50cmllcyhtdXNjbGVMZXZlbHMpO1xuICAgIGlmIChyZWdpb25MZXZlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBub0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbm9EYXRhLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTJweDtmb250LXN0eWxlOml0YWxpYztwYWRkaW5nOjEycHg7YDtcbiAgICAgIG5vRGF0YS50ZXh0Q29udGVudCA9IFwiQ29tcGxldGUgc29tZSB3b3Jrb3V0cyB0byBzZWUgeW91ciBzdHJlbmd0aCBwcm9ncmVzc1wiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChub0RhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBdmVyYWdlIHByb2dyZXNzIHZhbHVlXG4gICAgICBsZXQgdG90YWxQcm9ncmVzcyA9IDA7XG4gICAgICBmb3IgKGNvbnN0IFssIGRhdGFdIG9mIHJlZ2lvbkxldmVscykge1xuICAgICAgICBjb25zdCBpZHggPSBsZXZlbE9yZGVyLmluZGV4T2YoZGF0YS5sZXZlbCk7XG4gICAgICAgIHRvdGFsUHJvZ3Jlc3MgKz0gKGlkeCAvIDUpICogMTAwICsgKGRhdGEucHJvZ3Jlc3MgfHwgMCkgKiAoMS81KTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF2Z1Byb2dyZXNzID0gdG90YWxQcm9ncmVzcyAvIHJlZ2lvbkxldmVscy5sZW5ndGg7XG4gICAgICBjb25zdCBhdmdMZXZlbElkeCA9IE1hdGgubWluKDUsIE1hdGguZmxvb3IoYXZnUHJvZ3Jlc3MgLyAyMCkpO1xuICAgICAgY29uc3QgYXZnTGV2ZWwgPSBsZXZlbE9yZGVyW2F2Z0xldmVsSWR4XTtcbiAgICAgIGNvbnN0IGF2Z0NvbG9yID0gU1RSRU5HVEhfTEVWRUxTW2F2Z0xldmVsXT8uY29sb3IgfHwgXCIjNmE2YTZhXCI7XG5cbiAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhZGdlXCI7XG4gICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQ6JHthdmdDb2xvcn0yNTtib3JkZXI6MXB4IHNvbGlkICR7YXZnQ29sb3J9NjA7Y29sb3I6JHthdmdDb2xvcn07bWFyZ2luOjAgYXV0byAxMnB4O2Rpc3BsYXk6aW5saW5lLWZsZXg7YDtcbiAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gYXZnTGV2ZWwudG9VcHBlckNhc2UoKSArIFwiIChhdmcpXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhZGdlKTtcblxuICAgICAgY29uc3QgcGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGIuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFyXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBiKTtcbiAgICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZmlsbC5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1maWxsXCI7XG4gICAgICBmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1pbigxMDAsIGF2Z1Byb2dyZXNzKX0lO2JhY2tncm91bmQ6JHthdmdDb2xvcn07YDtcbiAgICAgIHBiLmFwcGVuZENoaWxkKGZpbGwpO1xuICAgIH1cblxuICAgIC8vIE1vbnRobHkgY29tcGxldGlvbnMgY2hhcnQgKGFsbCB3b3Jrb3V0cylcbiAgICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gICAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gICAgY29uc3Qgd2Vla0NvdW50cyA9IFswLCAwLCAwLCAwXTtcbiAgICBmb3IgKGNvbnN0IHdGaWxlIG9mIGFsbEZpbGVzKSB7XG4gICAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSkgY29udGludWU7XG4gICAgICBjb25zdCBkYXRlTWF0Y2ggPSB3RmlsZS5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKTtcbiAgICAgIGlmICghZGF0ZU1hdGNoKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGRheXNBZ28gPSBub3cuZGlmZihtb21lbnQoZGF0ZU1hdGNoWzFdLCBcIllZWVktTU0tRERcIiksIFwiZGF5c1wiKTtcbiAgICAgIGlmIChkYXlzQWdvIDwgMCB8fCBkYXlzQWdvID4gMjgpIGNvbnRpbnVlO1xuICAgICAgY29uc3Qgd2Vla0lkeCA9IE1hdGguZmxvb3IoZGF5c0FnbyAvIDcpO1xuICAgICAgaWYgKHdlZWtJZHggPCA0KSB3ZWVrQ291bnRzWzMgLSB3ZWVrSWR4XSsrO1xuICAgIH1cblxuICAgIC8vIENoYXJ0IDE6IE92ZXJhbGwgc3RyZW5ndGggY3VydmUgKHdvcmtvdXRzIHBlciB3ZWVrIGFzIGEgdHJlbmQpXG4gICAgY29uc3QgYzFMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYzFMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEwcHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOjE2cHg7YDtcbiAgICBjMUxhYmVsLnRleHRDb250ZW50ID0gXCJPVkVSQUxMIFNUUkVOR1RIXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjMUxhYmVsKTtcbiAgICByZW5kZXJMaW5lQ2hhcnQoY29udGVudCwgW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl0sIHdlZWtDb3VudHMsIFRIRU1FLmNvbG9yKTtcblxuICAgIC8vIENoYXJ0IDI6IFBlci1tdXNjbGUgbXVsdGktbGluZSBicmVha2Rvd25cbiAgICBjb25zdCBtdXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXVzTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMHB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoyMHB4O2A7XG4gICAgbXVzTGFiZWwudGV4dENvbnRlbnQgPSBcIkJZIE1VU0NMRSBHUk9VUFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXVzTGFiZWwpO1xuXG4gICAgLy8gQnVpbGQgcGVyLW11c2NsZSB3b3Jrb3V0IGZyZXF1ZW5jeSBkYXRhIChsYXN0IDQgd2Vla3MpXG4gICAgY29uc3QgbXVzY2xlQ29sb3JzID0gW1wiIzlhOGM3YVwiLCBcIiNhODk4NjBcIiwgXCIjN2E5YTdkXCIsIFwiIzZhOGE5YVwiLCBcIiM4YTdhOWFcIiwgXCIjOWE2YTdhXCIsIFwiIzZhNWE0YVwiXTtcbiAgICBjb25zdCBtdXNjbGVTZXJpZXNEYXRhID0gW107XG4gICAgbGV0IGNvbG9ySWR4ID0gMDtcbiAgICBjb25zdCByZXZlcnNlTWFwQWxsID0ge307XG4gICAgZm9yIChjb25zdCBbbXVzY2xlLCByZWdpb25zXSBvZiBPYmplY3QuZW50cmllcyhNVVNDTEVfVE9fUkVHSU9OKSkge1xuICAgICAgZm9yIChjb25zdCByIG9mIHJlZ2lvbnMpIHtcbiAgICAgICAgaWYgKCFyZXZlcnNlTWFwQWxsW3JdKSByZXZlcnNlTWFwQWxsW3JdID0gW107XG4gICAgICAgIHJldmVyc2VNYXBBbGxbcl0ucHVzaChtdXNjbGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgW3JlZ2lvbiwgZGF0YV0gb2YgcmVnaW9uTGV2ZWxzKSB7XG4gICAgICBjb25zdCB0YXJnZXRNdXNjbGVzID0gcmV2ZXJzZU1hcEFsbFtyZWdpb25dIHx8IFtdO1xuICAgICAgY29uc3Qgd2tDb3VudHMgPSBbMCwgMCwgMCwgMF07XG4gICAgICBmb3IgKGNvbnN0IHdGaWxlIG9mIGFsbEZpbGVzKSB7XG4gICAgICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgICAgICBpZiAoIWZtIHx8IGZtLldvcmtvdXQgIT09IHRydWUgfHwgIUFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGRhdGVNYXRjaCA9IHdGaWxlLmJhc2VuYW1lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS8pO1xuICAgICAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGRheXNBZ28gPSBub3cuZGlmZihtb21lbnQoZGF0ZU1hdGNoWzFdLCBcIllZWVktTU0tRERcIiksIFwiZGF5c1wiKTtcbiAgICAgICAgaWYgKGRheXNBZ28gPCAwIHx8IGRheXNBZ28gPiAyOCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGhhc011c2NsZSA9IGZtLmV4ZXJjaXNlcy5zb21lKGV4ID0+IHRhcmdldE11c2NsZXMuaW5jbHVkZXMoZXgubXVzY2xlIHx8IGV4Lm11c2NsZUdyb3VwKSk7XG4gICAgICAgIGlmIChoYXNNdXNjbGUpIHtcbiAgICAgICAgICBjb25zdCB3ZWVrSWR4ID0gTWF0aC5mbG9vcihkYXlzQWdvIC8gNyk7XG4gICAgICAgICAgaWYgKHdlZWtJZHggPCA0KSB3a0NvdW50c1szIC0gd2Vla0lkeF0rKztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbXVzY2xlU2VyaWVzRGF0YS5wdXNoKHtcbiAgICAgICAgbmFtZTogUkVHSU9OX0xBQkVMU1tyZWdpb25dIHx8IHJlZ2lvbixcbiAgICAgICAgdmFsdWVzOiB3a0NvdW50cyxcbiAgICAgICAgY29sb3I6IG11c2NsZUNvbG9yc1tjb2xvcklkeCAlIG11c2NsZUNvbG9ycy5sZW5ndGhdLFxuICAgICAgfSk7XG4gICAgICBjb2xvcklkeCsrO1xuICAgIH1cblxuICAgIGlmIChtdXNjbGVTZXJpZXNEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIHJlbmRlck11bHRpTGluZUNoYXJ0KGNvbnRlbnQsIFtcIlcxXCIsIFwiVzJcIiwgXCJXM1wiLCBcIlc0XCJdLCBtdXNjbGVTZXJpZXNEYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5vRGF0YS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjEycHg7Zm9udC1zdHlsZTppdGFsaWM7cGFkZGluZzoxMnB4O2A7XG4gICAgICBub0RhdGEudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlIHNvbWUgd29ya291dHMgdG8gc2VlIHBlci1tdXNjbGUgdHJlbmRzXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5vRGF0YSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIExpbmUgY2hhcnQgaGVscGVyICh1c2VkIGluIHByb2dyZXNzIHBvcHVwcyBcdTIwMTQgc21vb3RoIGN1cnZlKSBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gcmVuZGVyTGluZUNoYXJ0KHBhcmVudCwgbGFiZWxzLCB2YWx1ZXMsIGNvbG9yKSB7XG4gIGNvbG9yID0gY29sb3IgfHwgVEhFTUUuY29sb3I7XG4gIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4KC4uLnZhbHVlcywgMSk7XG4gIGNvbnN0IG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCB3ID0gMjYwLCBoID0gODA7XG4gIGNvbnN0IHBhZEwgPSA0LCBwYWRSID0gNCwgcGFkVCA9IDgsIHBhZEIgPSAxNjtcbiAgY29uc3QgY2hhcnRXID0gdyAtIHBhZEwgLSBwYWRSO1xuICBjb25zdCBjaGFydEggPSBoIC0gcGFkVCAtIHBhZEI7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke3d9ICR7aH1gKTtcbiAgc3ZnLnN0eWxlLmNzc1RleHQgPSBcIndpZHRoOjEwMCU7aGVpZ2h0OmF1dG87ZGlzcGxheTpibG9jazttYXJnaW46OHB4IDA7XCI7XG5cbiAgLy8gR3JpZCBsaW5lc1xuICBmb3IgKGxldCBnID0gMDsgZyA8PSAyOyBnKyspIHtcbiAgICBjb25zdCBneSA9IHBhZFQgKyAoZyAvIDIpICogY2hhcnRIO1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwibGluZVwiKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcIngxXCIsIFN0cmluZyhwYWRMKSk7IGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgU3RyaW5nKHcgLSBwYWRSKSk7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBTdHJpbmcoZ3kpKTsgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBTdHJpbmcoZ3kpKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcInJnYmEoMTU0LDE0MCwxMjIsMC4wOClcIik7IGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMC41XCIpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsaW5lKTtcbiAgfVxuXG4gIC8vIEJ1aWxkIHBvaW50c1xuICBjb25zdCBwb2ludHMgPSB2YWx1ZXMubWFwKCh2LCBpKSA9PiB7XG4gICAgY29uc3QgeCA9IHBhZEwgKyAoaSAvIE1hdGgubWF4KDEsIHZhbHVlcy5sZW5ndGggLSAxKSkgKiBjaGFydFc7XG4gICAgY29uc3QgeSA9IHBhZFQgKyBjaGFydEggLSAodiAvIG1heFZhbCkgKiBjaGFydEg7XG4gICAgcmV0dXJuIHsgeCwgeSB9O1xuICB9KTtcblxuICAvLyBTbW9vdGggY3VydmUgKENhdG11bGwtUm9tIFx1MjE5MiBjdWJpYyBiZXppZXIpXG4gIGlmIChwb2ludHMubGVuZ3RoID4gMSkge1xuICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX1gO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbTWF0aC5tYXgoMCwgaSAtIDEpXTtcbiAgICAgIGNvbnN0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgY29uc3QgcDIgPSBwb2ludHNbaSArIDFdO1xuICAgICAgY29uc3QgcDMgPSBwb2ludHNbTWF0aC5taW4ocG9pbnRzLmxlbmd0aCAtIDEsIGkgKyAyKV07XG4gICAgICBjb25zdCBjcDF4ID0gcDEueCArIChwMi54IC0gcDAueCkgLyA2O1xuICAgICAgY29uc3QgY3AxeSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNjtcbiAgICAgIGNvbnN0IGNwMnggPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDY7XG4gICAgICBjb25zdCBjcDJ5ID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2O1xuICAgICAgZCArPSBgIEMgJHtjcDF4fSAke2NwMXl9LCAke2NwMnh9ICR7Y3AyeX0sICR7cDIueH0gJHtwMi55fWA7XG4gICAgfVxuXG4gICAgLy8gQXJlYSBmaWxsXG4gICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xuICAgIGNvbnN0IGFyZWFEID0gZCArIGAgTCAke3BvaW50c1twb2ludHMubGVuZ3RoLTFdLnh9ICR7cGFkVCArIGNoYXJ0SH0gTCAke3BvaW50c1swXS54fSAke3BhZFQgKyBjaGFydEh9IFpgO1xuICAgIGFyZWEuc2V0QXR0cmlidXRlKFwiZFwiLCBhcmVhRCk7XG4gICAgYXJlYS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGNvbG9yKTsgYXJlYS5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIFwiMC4wOFwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQoYXJlYSk7XG5cbiAgICAvLyBDdXJ2ZSBsaW5lXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBkKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGNvbG9yKTsgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgfVxuXG4gIC8vIERhdGEgZG90c1xuICBmb3IgKGNvbnN0IHB0IG9mIHBvaW50cykge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJjaXJjbGVcIik7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhwdC54KSk7IGRvdC5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcocHQueSkpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoXCJyXCIsIFwiMi41XCIpOyBkb3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvcik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGRvdCk7XG4gIH1cblxuICAvLyBYLWF4aXMgbGFiZWxzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHBhZEwgKyAoaSAvIE1hdGgubWF4KDEsIGxhYmVscy5sZW5ndGggLSAxKSkgKiBjaGFydFc7XG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRleHRcIik7XG4gICAgdHh0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHgpKTsgdHh0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKGggLSAyKSk7XG4gICAgdHh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgxNTQsMTQwLDEyMiwwLjQpXCIpOyB0eHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiN1wiKTtcbiAgICB0eHQudGV4dENvbnRlbnQgPSBsYWJlbHNbaV07XG4gICAgc3ZnLmFwcGVuZENoaWxkKHR4dCk7XG4gIH1cblxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIE11bHRpLWxpbmUgY2hhcnQgaGVscGVyIChmb3IgcGVyLW11c2NsZSBicmVha2Rvd24pIFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiByZW5kZXJNdWx0aUxpbmVDaGFydChwYXJlbnQsIGxhYmVscywgc2VyaWVzKSB7XG4gIGNvbnN0IGFsbFZhbHMgPSBzZXJpZXMuZmxhdE1hcChzID0+IHMudmFsdWVzKTtcbiAgY29uc3QgbWF4VmFsID0gTWF0aC5tYXgoLi4uYWxsVmFscywgMSk7XG4gIGNvbnN0IG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCB3ID0gMjYwLCBoID0gOTA7XG4gIGNvbnN0IHBhZEwgPSA0LCBwYWRSID0gNCwgcGFkVCA9IDgsIHBhZEIgPSAxNjtcbiAgY29uc3QgY2hhcnRXID0gdyAtIHBhZEwgLSBwYWRSO1xuICBjb25zdCBjaGFydEggPSBoIC0gcGFkVCAtIHBhZEI7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke3d9ICR7aH1gKTtcbiAgc3ZnLnN0eWxlLmNzc1RleHQgPSBcIndpZHRoOjEwMCU7aGVpZ2h0OmF1dG87ZGlzcGxheTpibG9jazttYXJnaW46OHB4IDA7XCI7XG5cbiAgZm9yIChjb25zdCBzIG9mIHNlcmllcykge1xuICAgIGNvbnN0IHBvaW50cyA9IHMudmFsdWVzLm1hcCgodiwgaSkgPT4gKHtcbiAgICAgIHg6IHBhZEwgKyAoaSAvIE1hdGgubWF4KDEsIHMudmFsdWVzLmxlbmd0aCAtIDEpKSAqIGNoYXJ0VyxcbiAgICAgIHk6IHBhZFQgKyBjaGFydEggLSAodiAvIG1heFZhbCkgKiBjaGFydEgsXG4gICAgfSkpO1xuICAgIGlmIChwb2ludHMubGVuZ3RoID4gMSkge1xuICAgICAgbGV0IGQgPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fWA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgY29uc3QgcDAgPSBwb2ludHNbTWF0aC5tYXgoMCwgaSAtIDEpXTtcbiAgICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV07XG4gICAgICAgIGNvbnN0IHAyID0gcG9pbnRzW2kgKyAxXTtcbiAgICAgICAgY29uc3QgcDMgPSBwb2ludHNbTWF0aC5taW4ocG9pbnRzLmxlbmd0aCAtIDEsIGkgKyAyKV07XG4gICAgICAgIGQgKz0gYCBDICR7cDEueCsocDIueC1wMC54KS82fSAke3AxLnkrKHAyLnktcDAueSkvNn0sICR7cDIueC0ocDMueC1wMS54KS82fSAke3AyLnktKHAzLnktcDEueSkvNn0sICR7cDIueH0gJHtwMi55fWA7XG4gICAgICB9XG4gICAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInBhdGhcIik7XG4gICAgICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgZCk7IHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBzLmNvbG9yKTsgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjJcIik7XG4gICAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7IHBhdGguc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBcIjAuOFwiKTtcbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgICB9XG4gIH1cblxuICAvLyBYLWF4aXMgbGFiZWxzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHBhZEwgKyAoaSAvIE1hdGgubWF4KDEsIGxhYmVscy5sZW5ndGggLSAxKSkgKiBjaGFydFc7XG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInRleHRcIik7XG4gICAgdHh0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHgpKTsgdHh0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKGggLSAyKSk7XG4gICAgdHh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgxNTQsMTQwLDEyMiwwLjQpXCIpOyB0eHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiN1wiKTtcbiAgICB0eHQudGV4dENvbnRlbnQgPSBsYWJlbHNbaV07XG4gICAgc3ZnLmFwcGVuZENoaWxkKHR4dCk7XG4gIH1cbiAgcGFyZW50LmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgLy8gTGVnZW5kXG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZ2VuZC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjZweCAxMnB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLXRvcDo0cHg7XCI7XG4gIGZvciAoY29uc3QgcyBvZiBzZXJpZXMpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtmb250LXNpemU6OXB4O2NvbG9yOiM2YTVhNGE7XCI7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb3Quc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDo2cHg7aGVpZ2h0OjZweDtib3JkZXItcmFkaXVzOjUwJTtiYWNrZ3JvdW5kOiR7cy5jb2xvcn07YDtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGRvdCk7XG4gICAgY29uc3Qgbm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBubS50ZXh0Q29udGVudCA9IHMubmFtZTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKG5tKTtcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQoaXRlbSk7XG4gIH1cbiAgcGFyZW50LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVOREVSOiBTVEFUUyBEQVNIQk9BUkRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJTdGF0c1NlY3Rpb24ocm9vdCkge1xuICAvLyBNaW5pbWFsIHdlZWtseSBjYWxlbmRhclxuICBjb25zdCB3ZWVrRGF0YSA9IGdldFdlZWtseUNhbGVuZGFyRGF0YSgpO1xuICBjb25zdCB3ZWVrR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlZWtHcmlkLmNsYXNzTmFtZSA9IFwib3R3LXdlZWstZ3JpZFwiO1xuICByb290LmFwcGVuZENoaWxkKHdlZWtHcmlkKTtcblxuICBmb3IgKGNvbnN0IGRheSBvZiB3ZWVrRGF0YSkge1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNlbGwuY2xhc3NOYW1lID0gXCJvdHctd2Vlay1kYXlcIiArIChkYXkuaXNUb2RheSA/IFwiIHRvZGF5XCIgOiBcIlwiKSArIChkYXkuc3RhdHVzID8gXCIgZG9uZVwiIDogXCJcIik7XG4gICAgY29uc3QgbGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYmwuY2xhc3NOYW1lID0gXCJvdHctZGF5LWxhYmVsXCI7XG4gICAgbGJsLnRleHRDb250ZW50ID0gZGF5LmxhYmVsO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQobGJsKTtcbiAgICBjb25zdCBudW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG51bS5jbGFzc05hbWUgPSBcIm90dy1kYXktbnVtXCI7XG4gICAgbnVtLnRleHRDb250ZW50ID0gZGF5Lm51bTtcbiAgICBjZWxsLmFwcGVuZENoaWxkKG51bSk7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaWNvbi5jbGFzc05hbWUgPSBcIm90dy1kYXktaWNvblwiO1xuICAgIGlmIChkYXkuc3RhdHVzID09PSBcImRvbmVcIikge1xuICAgICAgaWYgKGRheS50eXBlID09PSBcImRpc2NpcGxpbmVcIikgeyBpY29uLnRleHRDb250ZW50ID0gXCJcXHVEODNEXFx1REM4RVwiOyB9XG4gICAgICBlbHNlIGlmIChkYXkudHlwZSA9PT0gXCJmbG93XCIpIHsgaWNvbi50ZXh0Q29udGVudCA9IFwiXFx1RDgzQ1xcdURGMEFcIjsgfVxuICAgICAgZWxzZSB7IGljb24udGV4dENvbnRlbnQgPSBcIlxcdTI3MTNcIjsgaWNvbi5zdHlsZS5jb2xvciA9IFRIRU1FLnN5c3RlbUdyZWVuOyB9XG4gICAgfSBlbHNlIGlmIChkYXkuaXNUb2RheSkge1xuICAgICAgaWNvbi50ZXh0Q29udGVudCA9IFwiXFx1MjAyMlwiOyBpY29uLnN0eWxlLmNvbG9yID0gVEhFTUUuY29sb3I7IGljb24uc3R5bGUuYW5pbWF0aW9uID0gXCJvdHctcHVsc2UtZ2xvdyAycyBlYXNlLWluLW91dCBpbmZpbml0ZVwiO1xuICAgIH0gZWxzZSBpZiAoZGF5LmlzUGFzdCkge1xuICAgICAgaWNvbi50ZXh0Q29udGVudCA9IFwiXFx1MjAxNFwiOyBpY29uLnN0eWxlLmNvbG9yID0gXCIjMmEyNTIwXCI7XG4gICAgfVxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgd2Vla0dyaWQuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gIH1cblxuICAvLyBQZXItbXVzY2xlIHN0cmVuZ3RoIGdyaWRcbiAgY29uc3QgbXVzY2xlTGV2ZWxzID0gYXdhaXQgZ2V0TXVzY2xlTGV2ZWxEYXRhKCk7XG4gIGNvbnN0IGdyb3VwU3RyZW5ndGggPSBnZXRNdXNjbGVHcm91cFN0cmVuZ3RoKG11c2NsZUxldmVscyk7XG5cbiAgY29uc3Qgc3RyZW5ndGhMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0cmVuZ3RoTGFiZWwuY2xhc3NOYW1lID0gXCJvdHctc2VjdGlvbi1sYWJlbFwiO1xuICBzdHJlbmd0aExhYmVsLnRleHRDb250ZW50ID0gXCJNVVNDTEUgU1RSRU5HVEhcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdHJlbmd0aExhYmVsKTtcblxuICByZW5kZXJNdXNjbGVTdHJlbmd0aEdyaWQocm9vdCwgZ3JvdXBTdHJlbmd0aCwgbXVzY2xlTGV2ZWxzKTtcblxuICAvLyBDb21wYWN0IGxlZ2VuZFxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWdlbmQuY2xhc3NOYW1lID0gXCJvdHctaGVhdG1hcC1sZWdlbmRcIjtcbiAgY29uc3QgbGVnZW5kSXRlbXMgPSBbXG4gICAgeyBsYWJlbDogXCJCZWdpbm5lclwiLCBjb2xvcjogXCIjYTg5ODYwXCIgfSxcbiAgICB7IGxhYmVsOiBcIk5vdmljZVwiLCBjb2xvcjogXCIjN2E5YTdkXCIgfSxcbiAgICB7IGxhYmVsOiBcIkludGVybWVkaWF0ZVwiLCBjb2xvcjogXCIjNmE4YTlhXCIgfSxcbiAgICB7IGxhYmVsOiBcIkFkdmFuY2VkXCIsIGNvbG9yOiBcIiM4YTdhOWFcIiB9LFxuICAgIHsgbGFiZWw6IFwiRWxpdGVcIiwgY29sb3I6IFwiIzlhNmE3YVwiIH0sXG4gIF07XG4gIGZvciAoY29uc3QgaXRlbSBvZiBsZWdlbmRJdGVtcykge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsaS5jbGFzc05hbWUgPSBcIm90dy1oZWF0bWFwLWxlZ2VuZC1pdGVtXCI7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkb3QuY2xhc3NOYW1lID0gXCJvdHctaGVhdG1hcC1sZWdlbmQtZG90XCI7XG4gICAgZG90LnN0eWxlLmJhY2tncm91bmQgPSBpdGVtLmNvbG9yO1xuICAgIGxpLmFwcGVuZENoaWxkKGRvdCk7XG4gICAgY29uc3QgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdHh0LnRleHRDb250ZW50ID0gaXRlbS5sYWJlbDtcbiAgICBsaS5hcHBlbmRDaGlsZCh0eHQpO1xuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgcm9vdC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIC8vIFwiUHJvZ3Jlc3NcIiBidXR0b25cbiAgY29uc3QgcHJvZ3Jlc3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwcm9ncmVzc0J0bi50ZXh0Q29udGVudCA9IFwiUFJPR1JFU1NcIjtcbiAgcHJvZ3Jlc3NCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gIHByb2dyZXNzQnRuLnN0eWxlLmNzc1RleHQgKz0gXCJ3aWR0aDoxMDAlO21hcmdpbi10b3A6OHB4O2ZvbnQtc2l6ZToxMXB4O3BhZGRpbmc6MTBweDtcIjtcbiAgcHJvZ3Jlc3NCdG4ub25jbGljayA9ICgpID0+IHNob3dPdmVyYWxsUHJvZ3Jlc3NQb3B1cChtdXNjbGVMZXZlbHMpO1xuICByb290LmFwcGVuZENoaWxkKHByb2dyZXNzQnRuKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRU5ERVI6IE1VU0NMRSBHUk9VUCBTRUxFQ1RJT04gKGZpcnN0LXRpbWUgZW50cnkpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyTXVzY2xlU2VsZWN0aW9uKHJvb3QpIHtcbiAgY29uc3Qgc2VsZWN0ZWRNdXNjbGVzID0gbmV3IFNldCgpO1xuICBjb25zdCBzZWxlY3RlZFN1Ymdyb3VwcyA9IG5ldyBNYXAoKTtcblxuICAvLyBcdTI1MDBcdTI1MDAgXCJTdGFydCBOZXcgV29ya291dFwiIGJ1dHRvbiBISUdIIGF0IHRoZSB0b3AgXHUyNTAwXHUyNTAwXG4gIGNvbnN0IHN0YXJ0QnRuVG9wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3RhcnRCdG5Ub3AudGV4dENvbnRlbnQgPSBcIlxcdUQ4M0NcXHVERkNCXFx1RkUwRiBTVEFSVCBORVcgV09SS09VVFwiO1xuICBzdGFydEJ0blRvcC5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1wcmltYXJ5XCI7XG4gIHN0YXJ0QnRuVG9wLnN0eWxlLmNzc1RleHQgKz0gXCJwYWRkaW5nOjE0cHggMjRweDtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo3MDA7d2lkdGg6MTAwJTttYXJnaW4tYm90dG9tOjE2cHg7XCI7XG4gIHN0YXJ0QnRuVG9wLm9uY2xpY2sgPSAoKSA9PiBzY3JvbGxUb011c2NsZVNlbGVjdCgpO1xuICByb290LmFwcGVuZENoaWxkKHN0YXJ0QnRuVG9wKTtcblxuICAvLyBTdGF0cyBkYXNoYm9hcmRcbiAgYXdhaXQgcmVuZGVyU3RhdHNTZWN0aW9uKHJvb3QpO1xuXG4gIC8vIFx1MjUwMFx1MjUwMCBNdXNjbGUgU2VsZWN0aW9uIFNlY3Rpb24gXHUyNTAwXHUyNTAwXG4gIGNvbnN0IHNlbEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlbEFuY2hvci5pZCA9IFwib3R3LW11c2NsZS1zZWxlY3RcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzZWxBbmNob3IpO1xuXG4gIGZ1bmN0aW9uIHNjcm9sbFRvTXVzY2xlU2VsZWN0KCkge1xuICAgIHNlbEFuY2hvci5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiLCBibG9jazogXCJzdGFydFwiIH0pO1xuICB9XG5cbiAgY29uc3Qgc2VsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxMYWJlbC5jbGFzc05hbWUgPSBcIm90dy1zZWN0aW9uLWxhYmVsXCI7XG4gIHNlbExhYmVsLnN0eWxlLm1hcmdpblRvcCA9IFwiMjhweFwiO1xuICBzZWxMYWJlbC50ZXh0Q29udGVudCA9IFwiU0VMRUNUIE1VU0NMRSBHUk9VUFNcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzZWxMYWJlbCk7XG5cbiAgY29uc3Qgc2VsRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlbERlc2Muc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MTJweDtgO1xuICBzZWxEZXNjLnRleHRDb250ZW50ID0gXCJTZWxlY3QgdGhlIG11c2NsZSBncm91cHMgeW91IHdhbnQgdG8gdHJhaW5cIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzZWxEZXNjKTtcblxuICAvLyBNdXNjbGUgZ3JvdXAgdG9nZ2xlIGJ1dHRvbnNcbiAgY29uc3QgbXVzY2xlR3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG11c2NsZUdyaWQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDoxMHB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLWJvdHRvbTo4cHg7XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobXVzY2xlR3JpZCk7XG5cbiAgY29uc3Qgc3ViZ3JvdXBBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3ViZ3JvdXBBcmVhLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjhweDt3aWR0aDoxMDAlO1wiO1xuICByb290LmFwcGVuZENoaWxkKHN1Ymdyb3VwQXJlYSk7XG5cbiAgY29uc3QgdG9nZ2xlQnV0dG9ucyA9IG5ldyBNYXAoKTtcblxuICBPYmplY3QuZW50cmllcyhNVVNDTEVfR1JPVVBTKS5mb3JFYWNoKChbbmFtZSwgY29uZmlnXSkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYnRuLmNsYXNzTmFtZSA9IFwib3R3LW11c2NsZS10b2dnbGVcIjtcbiAgICBidG4udGV4dENvbnRlbnQgPSBgJHtjb25maWcuaWNvbn0gJHtuYW1lfWA7XG4gICAgbXVzY2xlR3JpZC5hcHBlbmRDaGlsZChidG4pO1xuICAgIHRvZ2dsZUJ1dHRvbnMuc2V0KG5hbWUsIGJ0bik7XG5cbiAgICBsZXQgc3ViZ3JvdXBDb250YWluZXIgPSBudWxsO1xuICAgIGlmIChjb25maWcuc3ViZ3JvdXBzKSB7XG4gICAgICBzdWJncm91cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzdWJncm91cENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm90dy1zdWJncm91cC1jb250YWluZXJcIjtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgKz0gYGRpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6OHB4O2JhY2tncm91bmQ6IzBjMGMwYztib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2JvcmRlci1yYWRpdXM6NHB4O2A7XG4gICAgICBjb25zdCBzdWJMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzdWJMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjEwMCU7Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDttYXJnaW4tYm90dG9tOjRweDtgO1xuICAgICAgc3ViTGFiZWwudGV4dENvbnRlbnQgPSBuYW1lICsgXCIgc3ViZ3JvdXBzOlwiO1xuICAgICAgc3ViZ3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViTGFiZWwpO1xuICAgICAgc2VsZWN0ZWRTdWJncm91cHMuc2V0KG5hbWUsIG5ldyBTZXQoKSk7XG5cbiAgICAgIGNvbmZpZy5zdWJncm91cHMuZm9yRWFjaChzdWIgPT4ge1xuICAgICAgICBjb25zdCBzdWJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzdWJCdG4uY2xhc3NOYW1lID0gXCJvdHctc3ViLXRvZ2dsZVwiO1xuICAgICAgICBzdWJCdG4udGV4dENvbnRlbnQgPSBzdWI7XG4gICAgICAgIHN1YkJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGNvbnN0IHN1YnMgPSBzZWxlY3RlZFN1Ymdyb3Vwcy5nZXQobmFtZSk7XG4gICAgICAgICAgaWYgKHN1YnMuaGFzKHN1YikpIHsgc3Vicy5kZWxldGUoc3ViKTsgc3ViQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IH1cbiAgICAgICAgICBlbHNlIHsgc3Vicy5hZGQoc3ViKTsgc3ViQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IH1cbiAgICAgICAgfTtcbiAgICAgICAgc3ViZ3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnRuKTtcbiAgICAgIH0pO1xuICAgICAgc3ViZ3JvdXBBcmVhLmFwcGVuZENoaWxkKHN1Ymdyb3VwQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZE11c2NsZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIHNlbGVjdGVkTXVzY2xlcy5kZWxldGUobmFtZSk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZiAoc3ViZ3JvdXBDb250YWluZXIpIHN1Ymdyb3VwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkTXVzY2xlcy5hZGQobmFtZSk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZiAoc3ViZ3JvdXBDb250YWluZXIpIHN1Ymdyb3VwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZFwiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVUb2dnbGVCdXR0b25zKCkge1xuICAgIGZvciAoY29uc3QgW25hbWUsIGJ0bl0gb2YgdG9nZ2xlQnV0dG9ucykge1xuICAgICAgaWYgKHNlbGVjdGVkTXVzY2xlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGFydCBidXR0b24gKGJvdHRvbSlcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1RDgzQ1xcdURGQ0JcXHVGRTBGIFNUQVJUIFdPUktPVVRcIjtcbiAgc3RhcnRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICBzdGFydEJ0bi5zdHlsZS5jc3NUZXh0ICs9IFwicGFkZGluZzoxNnB4IDI0cHg7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NzAwO21hcmdpbi10b3A6MTZweDtcIjtcbiAgc3RhcnRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRNdXNjbGVzLnNpemUgPT09IDApIHsgbm90aWNlKFwiUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgbXVzY2xlIGdyb3VwXCIpOyByZXR1cm47IH1cblxuICAgIC8vIEJ1aWxkIGZpbmFsIG11c2NsZSBsaXN0OiB1c2Ugc3ViZ3JvdXBzIGlmIHNlbGVjdGVkLCBvdGhlcndpc2UgdGhlIHBhcmVudCBncm91cFxuICAgIGNvbnN0IG11c2NsZUdyb3Vwc0FycmF5ID0gW107XG4gICAgc2VsZWN0ZWRNdXNjbGVzLmZvckVhY2gobXVzY2xlID0+IHtcbiAgICAgIGNvbnN0IHN1YnMgPSBzZWxlY3RlZFN1Ymdyb3Vwcy5nZXQobXVzY2xlKTtcbiAgICAgIGlmIChzdWJzICYmIHN1YnMuc2l6ZSA+IDApIHtcbiAgICAgICAgc3Vicy5mb3JFYWNoKHN1YiA9PiBtdXNjbGVHcm91cHNBcnJheS5wdXNoKHN1YikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVzY2xlR3JvdXBzQXJyYXkucHVzaChtdXNjbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBwcmV2aW91cyBleGVyY2lzZXMgZm9yIHRoZXNlIG11c2NsZSBncm91cHNcbiAgICBjb25zdCBsb2FkZWRFeGVyY2lzZXMgPSBsb2FkUHJldmlvdXNFeGVyY2lzZXMobXVzY2xlR3JvdXBzQXJyYXkpO1xuXG4gICAgLy8gU2F2ZSB0byBmcm9udG1hdHRlciBhbmQgdXBkYXRlIGxvY2FsIHN0YXRlXG4gICAgbXVzY2xlR3JvdXBzID0gbXVzY2xlR3JvdXBzQXJyYXk7XG4gICAgZXhlcmNpc2VzID0gbG9hZGVkRXhlcmNpc2VzO1xuICAgIGN1cnJlbnRNdXNjbGVJbmRleCA9IDA7XG5cbiAgICBhd2FpdCBzZXRNdWx0aXBsZURhdGEoe1xuICAgICAgbXVzY2xlR3JvdXBzOiBtdXNjbGVHcm91cHMsXG4gICAgICBleGVyY2lzZXM6IGV4ZXJjaXNlcyxcbiAgICAgIGN1cnJlbnRNdXNjbGVJbmRleDogMCxcbiAgICAgIFdvcmtvdXQ6IGZhbHNlLFxuICAgICAgXCJXb3Jrb3V0LVR5cGVcIjogXCJcIixcbiAgICAgIFRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KCksXG4gICAgfSk7XG5cbiAgICAvLyBSZS1yZW5kZXIgXHUyMDE0IG5vdyB3ZSdsbCBlbnRlciB3b3Jrb3V0IHRyYWNraW5nIG1vZGVcbiAgICByZW5kZXIoKTtcbiAgfTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTUFJTiBSRU5ERVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm9vdC5jbGFzc05hbWUgPSBcIm90dy1jb250YWluZXJcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3QpO1xuXG4gIC8vIElmIHdvcmtvdXQgaXMgYWxyZWFkeSBjb21wbGV0ZWQsIHNob3cgc3VtbWFyeVxuICBpZiAoaXNDb21wbGV0ZWQgJiYgZ2V0RGF0YShcIldvcmtvdXQtVHlwZVwiKSkge1xuICAgIGNvbnN0IHdUeXBlID0gZ2V0RGF0YShcIldvcmtvdXQtVHlwZVwiKTtcbiAgICBjb25zdCBzdW1tYXJ5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VtbWFyeUNhcmQuY2xhc3NOYW1lID0gXCJvdHctY2FyZCBvdHctY2FyZC1icmVhdGhlXCI7XG4gICAgc3VtbWFyeUNhcmQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBzdW1tYXJ5Q2FyZC5zdHlsZS5wYWRkaW5nID0gXCIzMnB4XCI7XG4gICAgYWRkQ29ybmVycyhzdW1tYXJ5Q2FyZCwgVEhFTUUuc3lzdGVtR3JlZW4pO1xuICAgIHN1bW1hcnlDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6MzJweDttYXJnaW4tYm90dG9tOjEycHg7XCI+JHt3VHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIgPyBcIlxcdUQ4M0RcXHVEQzhFXCIgOiBcIlxcdUQ4M0NcXHVERjBBXCJ9PC9kaXY+XG4gICAgICA8aDIgc3R5bGU9XCJtYXJnaW46MDtjb2xvcjoke1RIRU1FLnN5c3RlbUdyZWVufTtmb250LXNpemU6MTZweDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1wiPldPUktPVVQgQ09NUExFVEU8L2gyPlxuICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEzcHg7bWFyZ2luLXRvcDo4cHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+JHt3VHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIgPyBcIkRpc2NpcGxpbmUgV2luXCIgOiBcIkZsb3cgU3RhdGVcIn08L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O21hcmdpbi10b3A6MTZweDtcIj4ke21vbWVudChnZXREYXRhKFwiVGltZXN0YW1wXCIpKS5mb3JtYXQoXCJNTU0gRCwgWVlZWSBcXHUyMDE0IGg6bW0gQVwiKX08L2Rpdj5cbiAgICBgO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoc3VtbWFyeUNhcmQpO1xuXG4gICAgLy8gU2hvdyBleGVyY2lzZXMgc3VtbWFyeVxuICAgIGlmIChleGVyY2lzZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZXhTdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGV4U3VtbWFyeS5jbGFzc05hbWUgPSBcIm90dy1jYXJkXCI7XG4gICAgICBhZGRDb3JuZXJzKGV4U3VtbWFyeSwgVEhFTUUuY29sb3IpO1xuICAgICAgY29uc3QgZXhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBleFRpdGxlLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MTJweDtgO1xuICAgICAgZXhUaXRsZS50ZXh0Q29udGVudCA9IFwiU0VTU0lPTiBTVU1NQVJZXCI7XG4gICAgICBleFN1bW1hcnkuYXBwZW5kQ2hpbGQoZXhUaXRsZSk7XG4gICAgICBmb3IgKGNvbnN0IGV4IG9mIGV4ZXJjaXNlcykge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRTZXRzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+ICFzLmlzV2FybXVwICYmIHMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRvdGFsU2V0cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiAhcy5pc1dhcm11cCkubGVuZ3RoO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzo4cHggMDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICAgICAgICByb3cuaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC13ZWlnaHQ6NjAwO1wiPiR7ZXgubmFtZX08L3NwYW4+PHNwYW4gc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O1wiPiR7Y29tcGxldGVkU2V0c30vJHt0b3RhbFNldHN9IHNldHM8L3NwYW4+YDtcbiAgICAgICAgZXhTdW1tYXJ5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9XG4gICAgICByb290LmFwcGVuZENoaWxkKGV4U3VtbWFyeSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIE5vIG11c2NsZSBncm91cHMgc2VsZWN0ZWQgeWV0IFx1MjAxNCBzaG93IHNlbGVjdGlvbiBzY3JlZW5cbiAgaWYgKG11c2NsZUdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICBhd2FpdCByZW5kZXJNdXNjbGVTZWxlY3Rpb24ocm9vdCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIEFjdGl2ZSBXb3Jrb3V0IFVJIFx1MjUwMFx1MjUwMFxuICBjb25zdCBjdXJyZW50TXVzY2xlID0gbXVzY2xlR3JvdXBzW2N1cnJlbnRNdXNjbGVJbmRleF0gfHwgbXVzY2xlR3JvdXBzWzBdO1xuICBjb25zdCBtdXNjbGVFeGVyY2lzZXMgPSBleGVyY2lzZXMuZmlsdGVyKChlKSA9PiBlLm11c2NsZSA9PT0gY3VycmVudE11c2NsZSB8fCBlLm11c2NsZUdyb3VwID09PSBjdXJyZW50TXVzY2xlKTtcblxuICAvLyBIZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwib3R3LWNhcmQgb3R3LWNhcmQtYnJlYXRoZSBvdHctaGVhZGVyXCI7XG4gIGFkZENvcm5lcnMoaGVhZGVyLCBUSEVNRS5jb2xvcik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc05hbWUgPSBcIm90dy10aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRNdXNjbGUudG9VcHBlckNhc2UoKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29uc3QgcHJvZ3Jlc3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2dyZXNzTGFiZWwuY2xhc3NOYW1lID0gXCJvdHctcHJvZ3Jlc3MtbGFiZWxcIjtcbiAgcHJvZ3Jlc3NMYWJlbC50ZXh0Q29udGVudCA9IChjdXJyZW50TXVzY2xlSW5kZXggKyAxKSArIFwiIC8gXCIgKyBtdXNjbGVHcm91cHMubGVuZ3RoO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NMYWJlbCk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyBFeGVyY2lzZXNcbiAgY29uc3QgZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBleENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxNnB4O1wiO1xuICByb290LmFwcGVuZENoaWxkKGV4Q29udGFpbmVyKTtcblxuICBpZiAobXVzY2xlRXhlcmNpc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbXB0eS5zdHlsZS5jc3NUZXh0ID0gYHRleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6NDBweCAyMHB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IGRhc2hlZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICAgIGVtcHR5LmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bWFyZ2luOjA7XCI+Tm8gZXhlcmNpc2VzIGZvciAke2N1cnJlbnRNdXNjbGV9IHlldC48L3A+YDtcbiAgICBleENvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBleCBvZiBtdXNjbGVFeGVyY2lzZXMpIHtcbiAgICAgIGF3YWl0IHJlbmRlckV4ZXJjaXNlKGV4Q29udGFpbmVyLCBleCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGV4ZXJjaXNlIGJ1dHRvblxuICBjb25zdCBhZGRFeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEV4QnRuLnRleHRDb250ZW50ID0gXCIrIEFERCBFWEVSQ0lTRVwiO1xuICBhZGRFeEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1kYXNoZWRcIjtcbiAgYWRkRXhCdG4uc3R5bGUubWFyZ2luVG9wID0gXCIxNnB4XCI7XG4gIGFkZEV4QnRuLm9uY2xpY2sgPSAoKSA9PiBvcGVuQWRkRXhlcmNpc2VNb2RhbChjdXJyZW50TXVzY2xlKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChhZGRFeEJ0bik7XG5cbiAgLy8gTmF2aWdhdGlvblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXYuY2xhc3NOYW1lID0gXCJvdHctbmF2LXJvd1wiO1xuICByb290LmFwcGVuZENoaWxkKG5hdik7XG5cbiAgaWYgKGN1cnJlbnRNdXNjbGVJbmRleCA+IDApIHtcbiAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcmV2QnRuLnRleHRDb250ZW50ID0gXCJcXHUyMTkwIFBSRVZJT1VTXCI7XG4gICAgcHJldkJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICBwcmV2QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGN1cnJlbnRNdXNjbGVJbmRleC0tOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH07XG4gICAgbmF2LmFwcGVuZENoaWxkKHByZXZCdG4pO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRNdXNjbGVJbmRleCA8IG11c2NsZUdyb3Vwcy5sZW5ndGggLSAxKSB7XG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV4dEJ0bi50ZXh0Q29udGVudCA9IFwiTkVYVCBNVVNDTEUgXFx1MjE5MlwiO1xuICAgIG5leHRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICAgIG5leHRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY3VycmVudE11c2NsZUluZGV4Kys7IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmluaXNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaW5pc2hCdG4udGV4dENvbnRlbnQgPSBcIlxcdTI3MTMgRklOSVNIIFdPUktPVVRcIjtcbiAgICBmaW5pc2hCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tZmluaXNoXCI7XG4gICAgZmluaXNoQnRuLm9uY2xpY2sgPSAoKSA9PiBvcGVuRmluaXNoTW9kYWwoKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZmluaXNoQnRuKTtcbiAgfVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgQm9vdCBcdTI1MDBcdTI1MDBcbnJldHVybiByZW5kZXIoKTtcbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEJ1aWx0LWluIFRlbXBsYXRlIFJlZ2lzdHJ5XG4vLyBNYXBzIHRlbXBsYXRlIElEcyB0byB0aGVpciBzb3VyY2UgY29kZSAoYnVuZGxlZCBhdCBidWlsZCB0aW1lKS5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgd29ya291dFNvdXJjZSBmcm9tIFwiLi93b3Jrb3V0LnRwbFwiO1xuXG4vKipcbiAqIEJ1aWx0LWluIHRlbXBsYXRlcyBidW5kbGVkIGluc2lkZSB0aGUgcGx1Z2luLlxuICogS2V5cyBhcmUgdGVtcGxhdGUgSURzIHJlZmVyZW5jZWQgaW4gQWN0aXZpdHlDb25maWcud29ya3NwYWNlVGVtcGxhdGUuXG4gKiBWYWx1ZXMgYXJlIHRoZSByYXcgSlMgc291cmNlIGV4ZWN1dGVkIHZpYSBuZXcgRnVuY3Rpb24oXCJjdHhcIiwgc291cmNlKS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJVSUxUSU5fVEVNUExBVEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB3b3Jrb3V0OiB3b3Jrb3V0U291cmNlLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLElBQUFBLG1CQUE4RDs7O0FDWXZELElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sc0JBQXNCO0FBSTVCLElBQU0sU0FBMkI7QUFBQSxFQUN0QyxFQUFFLE1BQU0sR0FBRyxNQUFNLG9CQUFvQixNQUFNLGdCQUFnQixhQUFhLHNFQUFzRSxNQUFNLGlHQUFpRyxXQUFXLHdCQUFxQjtBQUFBLEVBQ3JSLEVBQUUsTUFBTSxHQUFHLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CLGFBQWEsaUVBQWlFLE1BQU0sb0ZBQW9GLFdBQVcsd0JBQXFCO0FBQUEsRUFDblEsRUFBRSxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsTUFBTSxjQUFjLGFBQWEsK0RBQStELE1BQU0seUVBQXlFLFdBQVcsd0JBQXFCO0FBQUEsRUFDblAsRUFBRSxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsTUFBTSxXQUFXLGFBQWEscUVBQXFFLE1BQU0sZ0VBQWdFLFdBQVcsd0JBQXFCO0FBQUEsRUFDN08sRUFBRSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsTUFBTSxXQUFXLGFBQWEsaUVBQWlFLE1BQU0saUVBQWlFLFdBQVcsd0JBQXFCO0FBQUEsRUFDeE8sRUFBRSxNQUFNLEdBQUcsTUFBTSxlQUFlLE1BQU0sV0FBVyxhQUFhLG1FQUFtRSxNQUFNLCtFQUErRSxXQUFXLHdCQUFxQjtBQUFBLEVBQ3RQLEVBQUUsTUFBTSxHQUFHLE1BQU0sV0FBVyxNQUFNLFdBQVcsYUFBYSxzRUFBc0UsTUFBTSxnRkFBMkUsV0FBVyx3QkFBcUI7QUFBQSxFQUNqUCxFQUFFLE1BQU0sR0FBRyxNQUFNLFlBQVksTUFBTSxTQUFTLGFBQWEscUVBQXFFLE1BQU0sZ0VBQWdFLFdBQVcsd0JBQXFCO0FBQUEsRUFDcE8sRUFBRSxNQUFNLEdBQUcsTUFBTSxzQkFBc0IsTUFBTSxZQUFZLGFBQWEsc0RBQXNELE1BQU0scUVBQXFFLFdBQVcsd0JBQXFCO0FBQUEsRUFDdk8sRUFBRSxNQUFNLElBQUksTUFBTSxjQUFjLE1BQU0sUUFBUSxhQUFhLG9FQUFvRSxNQUFNLHlFQUF5RSxXQUFXLHdCQUFxQjtBQUFBLEVBQzlPLEVBQUUsTUFBTSxJQUFJLE1BQU0sVUFBVSxNQUFNLFNBQVMsYUFBYSx1REFBdUQsTUFBTSxvRUFBb0UsV0FBVyx3QkFBcUI7QUFBQSxFQUN6TixFQUFFLE1BQU0sSUFBSSxNQUFNLFVBQVUsTUFBTSxVQUFVLGFBQWEsd0RBQXdELE1BQU0sZ0ZBQWdGLFdBQVcsd0JBQXFCO0FBQUEsRUFDdk8sRUFBRSxNQUFNLElBQUksTUFBTSxvQkFBb0IsTUFBTSxpQkFBaUIsYUFBYSwrQ0FBK0MsTUFBTSxrRkFBa0YsV0FBVyx3QkFBcUI7QUFDblA7QUFFTyxJQUFNLG1CQUEyQztBQUFBLEVBQ3RELEdBQUc7QUFBQSxFQUFXLEdBQUc7QUFBQSxFQUFXLEdBQUc7QUFBQSxFQUFXLEdBQUc7QUFBQSxFQUM3QyxHQUFHO0FBQUEsRUFBVyxHQUFHO0FBQUEsRUFBVyxHQUFHO0FBQUEsRUFBVyxHQUFHO0FBQUEsRUFDN0MsR0FBRztBQUFBLEVBQVcsSUFBSTtBQUFBLEVBQVcsSUFBSTtBQUFBLEVBQVcsSUFBSTtBQUFBLEVBQ2hELElBQUk7QUFDTjtBQUlPLElBQU0sZ0JBQXdDO0FBQUEsRUFDbkQsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsR0FBRztBQUFBLEVBQ0gsSUFBSTtBQUNOO0FBSU8sSUFBTSx5QkFBaUU7QUFBQSxFQUM1RSxNQUFRLEVBQUUsT0FBTyxXQUFhLEtBQUssV0FBWSxPQUFPLFFBQVE7QUFBQSxFQUM5RCxNQUFRLEVBQUUsT0FBTyxXQUFhLEtBQUssV0FBWSxPQUFPLFdBQVc7QUFBQSxFQUNqRSxRQUFRLEVBQUUsT0FBTyxVQUFhLEtBQUssUUFBWSxPQUFPLFNBQVM7QUFDakU7QUFFTyxJQUFNLHNCQUE4RDtBQUFBLEVBQ3pFLGFBQWdCLEVBQUUsT0FBTyx1QkFBdUIsS0FBSyxvQkFBb0IsT0FBTyxvQkFBb0I7QUFBQSxFQUNwRyxlQUFnQixFQUFFLE9BQU8sV0FBdUIsS0FBSyxXQUFvQixPQUFPLGdCQUFnQjtBQUFBLEVBQ2hHLGVBQWdCLEVBQUUsT0FBTyxpQkFBdUIsS0FBSyxrQkFBb0IsT0FBTyxrQkFBa0I7QUFDcEc7QUFFTyxJQUFNLGtCQUEwQztBQUFBLEVBQ3JELE9BQU87QUFBQSxFQUNQLEtBQUs7QUFBQSxFQUNMLE9BQU87QUFDVDtBQUlPLElBQU0scUJBQXVDO0FBQUEsRUFDbEQ7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUFXLE1BQU07QUFBQSxJQUFXLE9BQU87QUFBQSxJQUFhLFVBQVU7QUFBQSxJQUM5RCxTQUFTO0FBQUEsSUFBTSxRQUFRO0FBQUEsSUFBNEIsVUFBVTtBQUFBLElBQzdELHFCQUFxQjtBQUFBLElBQUcsY0FBYztBQUFBLElBQUcsY0FBYztBQUFBLElBQ3ZELGNBQWM7QUFBQSxJQUFNLG1CQUFtQjtBQUFBLElBQ3ZDLFVBQVU7QUFBQSxJQUFHLGtCQUFrQjtBQUFBLElBQy9CLGVBQWU7QUFBQSxJQUFXLG1CQUFtQjtBQUFBLEVBQy9DO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQVUsTUFBTTtBQUFBLElBQVUsT0FBTztBQUFBLElBQWEsVUFBVTtBQUFBLElBQzVELFNBQVM7QUFBQSxJQUFNLFFBQVE7QUFBQSxJQUEyQixVQUFVO0FBQUEsSUFDNUQscUJBQXFCO0FBQUEsSUFBRyxjQUFjO0FBQUEsSUFBRyxjQUFjO0FBQUEsSUFDdkQsY0FBYztBQUFBLElBQU0sVUFBVTtBQUFBLElBQUcsa0JBQWtCO0FBQUEsSUFDbkQsZUFBZTtBQUFBLElBQVcsbUJBQW1CO0FBQUEsSUFDN0MsZ0JBQWdCO0FBQUEsRUFDbEI7QUFBQSxFQUNBO0FBQUEsSUFDRSxJQUFJO0FBQUEsSUFBVyxNQUFNO0FBQUEsSUFBVyxPQUFPO0FBQUEsSUFBYSxVQUFVO0FBQUEsSUFDOUQsU0FBUztBQUFBLElBQU0sUUFBUTtBQUFBLElBQTRCLFVBQVU7QUFBQSxJQUM3RCxxQkFBcUI7QUFBQSxJQUFHLGNBQWM7QUFBQSxJQUFHLGNBQWM7QUFBQSxJQUN2RCxjQUFjO0FBQUEsSUFBTSxVQUFVO0FBQUEsSUFBRyxrQkFBa0I7QUFBQSxJQUNuRCxlQUFlO0FBQUEsSUFBVyxtQkFBbUI7QUFBQSxFQUMvQztBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUFZLE1BQU07QUFBQSxJQUFZLE9BQU87QUFBQSxJQUFhLFVBQVU7QUFBQSxJQUNoRSxTQUFTO0FBQUEsSUFBTSxRQUFRO0FBQUEsSUFBNkIsVUFBVTtBQUFBLElBQzlELHFCQUFxQjtBQUFBLElBQUcsY0FBYztBQUFBLElBQUcsY0FBYztBQUFBLElBQ3ZELGNBQWM7QUFBQSxJQUFNLFVBQVU7QUFBQSxJQUFHLGtCQUFrQjtBQUFBLElBQ25ELGVBQWU7QUFBQSxJQUFhLG1CQUFtQjtBQUFBLEVBQ2pEO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQWdCLE1BQU07QUFBQSxJQUFnQixPQUFPO0FBQUEsSUFBYSxVQUFVO0FBQUEsSUFDeEUsU0FBUztBQUFBLElBQU0sUUFBUTtBQUFBLElBQWlDLFVBQVU7QUFBQSxJQUNsRSxxQkFBcUI7QUFBQSxJQUFHLGNBQWM7QUFBQSxJQUFHLGNBQWM7QUFBQSxJQUN2RCxjQUFjO0FBQUEsSUFBTSxVQUFVO0FBQUEsSUFBRyxrQkFBa0I7QUFBQSxJQUNuRCxlQUFlO0FBQUEsSUFBYSxtQkFBbUI7QUFBQSxFQUNqRDtBQUFBLEVBQ0E7QUFBQSxJQUNFLElBQUk7QUFBQSxJQUFVLE1BQU07QUFBQSxJQUFVLE9BQU87QUFBQSxJQUFhLFVBQVU7QUFBQSxJQUM1RCxTQUFTO0FBQUEsSUFBTSxRQUFRO0FBQUEsSUFBMkIsVUFBVTtBQUFBLElBQzVELHFCQUFxQjtBQUFBLElBQUcsY0FBYztBQUFBLElBQUcsY0FBYztBQUFBLElBQ3ZELGNBQWM7QUFBQSxJQUFNLFVBQVU7QUFBQSxJQUFHLGtCQUFrQjtBQUFBLElBQ25ELGVBQWU7QUFBQSxJQUFXLG1CQUFtQjtBQUFBLEVBQy9DO0FBQUEsRUFDQTtBQUFBLElBQ0UsSUFBSTtBQUFBLElBQVcsTUFBTTtBQUFBLElBQVcsT0FBTztBQUFBLElBQWEsVUFBVTtBQUFBLElBQzlELFNBQVM7QUFBQSxJQUFNLFFBQVE7QUFBQSxJQUE0QixVQUFVO0FBQUEsSUFDN0QscUJBQXFCO0FBQUEsSUFBRyxjQUFjO0FBQUEsSUFBRyxjQUFjO0FBQUEsSUFDdkQsY0FBYztBQUFBLElBQU0sVUFBVTtBQUFBLElBQUcsa0JBQWtCO0FBQUEsSUFDbkQsZUFBZTtBQUFBLElBQWEsbUJBQW1CO0FBQUEsRUFDakQ7QUFDRjtBQUlPLElBQU0sZUFBdUM7QUFBQSxFQUNsRCxTQUFTO0FBQUEsRUFDVCxRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixnQkFBZ0I7QUFBQSxFQUNoQixRQUFRO0FBQUEsRUFDUixTQUFTO0FBQ1g7QUFJTyxJQUFNLGtCQUFnRTtBQUFBLEVBQzNFLEVBQUUsTUFBTSxzR0FBaUcsYUFBYSxrQkFBa0I7QUFBQSxFQUN4SSxFQUFFLE1BQU0sd0RBQXdELGFBQWEsU0FBUztBQUFBLEVBQ3RGLEVBQUUsTUFBTSxxRkFBcUYsYUFBYSxrQkFBa0I7QUFBQSxFQUM1SCxFQUFFLE1BQU0sZ0RBQWdELGFBQWEsWUFBWTtBQUFBLEVBQ2pGLEVBQUUsTUFBTSx1RUFBdUUsYUFBYSxrQkFBa0I7QUFBQSxFQUM5RyxFQUFFLE1BQU0scUZBQXFGLGFBQWEsU0FBUztBQUFBLEVBQ25ILEVBQUUsTUFBTSw2RUFBNkUsYUFBYSxZQUFZO0FBQUEsRUFDOUcsRUFBRSxNQUFNLHlFQUF5RSxhQUFhLGtCQUFrQjtBQUFBLEVBQ2hILEVBQUUsTUFBTSwwRUFBMEUsYUFBYSxTQUFTO0FBQUEsRUFDeEcsRUFBRSxNQUFNLDZEQUE2RCxhQUFhLFNBQVM7QUFBQSxFQUMzRixFQUFFLE1BQU0sMkVBQTJFLGFBQWEsWUFBWTtBQUFBLEVBQzVHLEVBQUUsTUFBTSwwREFBMEQsYUFBYSxrQkFBa0I7QUFDbkc7QUFJTyxTQUFTLFFBQVEsS0FBcUI7QUFDM0MsUUFBTSxPQUFPLENBQUMsS0FBTSxLQUFLLEtBQUssS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUNsRSxRQUFNLE9BQU8sQ0FBQyxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxHQUFHO0FBQ25GLE1BQUksU0FBUztBQUNiLFdBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxRQUFRLEtBQUs7QUFDcEMsV0FBTyxPQUFPLEtBQUssQ0FBQyxHQUFHO0FBQ3JCLGdCQUFVLEtBQUssQ0FBQztBQUNoQixhQUFPLEtBQUssQ0FBQztBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBSU8sSUFBTSwyQkFBdUQ7QUFBQSxFQUNsRSxFQUFFLElBQUksY0FBYyxNQUFNLGNBQWMsTUFBTSxVQUFVLE9BQU8sV0FBVyxTQUFTLE1BQU0saUJBQWlCLElBQUksY0FBYyxFQUFJO0FBQUEsRUFDaEksRUFBRSxJQUFJLFFBQVEsTUFBTSxRQUFRLE1BQU0sVUFBVSxPQUFPLFdBQVcsU0FBUyxNQUFNLGlCQUFpQixJQUFJLGNBQWMsSUFBSTtBQUFBLEVBQ3BILEVBQUUsSUFBSSxXQUFXLE1BQU0sV0FBVyxNQUFNLFVBQVUsT0FBTyxXQUFXLFNBQVMsTUFBTSxpQkFBaUIsSUFBSSxjQUFjLEVBQUU7QUFDMUg7QUFJTyxJQUFNLHFCQUFnQztBQUFBLEVBQzNDLFFBQVE7QUFBQSxJQUNOLGtCQUFrQjtBQUFBLElBQ2xCLG9CQUFvQjtBQUFBLElBQ3BCLGtCQUFrQjtBQUFBLElBQ2xCLGdCQUFnQjtBQUFBLElBQ2hCLGlCQUFpQjtBQUFBLElBQ2pCLG1CQUFtQjtBQUFBLElBQ25CLHFCQUFxQjtBQUFBLElBQ3JCLGlCQUFpQjtBQUFBLElBQ2pCLHFCQUFxQjtBQUFBLElBQ3JCLGNBQWM7QUFBQSxJQUNkLGtCQUFrQjtBQUFBLElBQ2xCLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLElBQ2pCLFNBQVM7QUFBQSxFQUNYO0FBQUEsRUFDQSxpQkFBaUI7QUFBQSxFQUNqQix1QkFBdUI7QUFBQSxFQUN2QixlQUFlO0FBQUEsRUFDZixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixnQkFBZ0IsQ0FBQztBQUFBLEVBQ2pCLG9CQUFvQjtBQUFBLEVBQ3BCLFlBQVk7QUFBQSxFQUNaLGNBQWM7QUFBQSxJQUNaO0FBQUEsSUFBUTtBQUFBLElBQVc7QUFBQSxJQUFjO0FBQUEsSUFBVTtBQUFBLElBQWE7QUFBQSxJQUN4RDtBQUFBLElBQVU7QUFBQSxJQUFhO0FBQUEsSUFBYztBQUFBLElBQVU7QUFBQSxFQUNqRDtBQUFBLEVBQ0EsZ0JBQWdCLENBQUM7QUFBQSxFQUNqQixxQkFBcUI7QUFDdkI7QUFJTyxJQUFNLHlCQUF3QztBQUFBLEVBQ25ELFFBQVE7QUFBQSxFQUNSLFFBQVE7QUFBQSxFQUNSLFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFdBQVcsQ0FBQztBQUFBLEVBQ1osb0JBQW9CO0FBQUEsRUFDcEIscUJBQXFCO0FBQUEsRUFDckIsbUJBQW1CO0FBQ3JCO0FBWU8sSUFBTSxzQkFBcUQ7QUFBQSxFQUNoRSxPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixXQUFXO0FBQUEsRUFDWCxRQUFRO0FBQUEsRUFDUixTQUFTO0FBQUEsRUFDVCxVQUFVO0FBQUEsRUFDVixLQUFLO0FBQUEsRUFDTCxVQUFVO0FBQUEsRUFDVixPQUFPO0FBQUEsRUFDUCxZQUFZO0FBQUEsRUFDWixRQUFRO0FBQUEsRUFDUixRQUFRO0FBQUEsRUFDUixPQUFPO0FBQUEsRUFDUCxNQUFNO0FBQUEsRUFDTixNQUFNO0FBQ1I7QUFJTyxJQUFNLDRCQUE4QztBQUFBLEVBQ3pELGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLGtCQUFrQjtBQUFBLEVBQ2xCLFlBQVksQ0FBQztBQUNmO0FBSU8sSUFBTSx3QkFBc0M7QUFBQTtBQUFBLEVBRWpELFVBQVU7QUFBQSxFQUNWLE9BQU87QUFBQSxFQUNQLGdCQUFnQjtBQUFBLEVBQ2hCLFVBQVU7QUFBQTtBQUFBLEVBR1YsWUFBWTtBQUFBO0FBQUEsRUFHWixnQkFBZ0I7QUFBQSxJQUNkLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxlQUFlO0FBQUE7QUFBQSxFQUdmLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxFQUNWO0FBQUE7QUFBQSxFQUdBLGFBQWE7QUFBQSxFQUNiLFdBQVc7QUFBQSxFQUNYLGVBQWU7QUFBQSxFQUNmLFlBQVk7QUFBQSxFQUNaLHNCQUFzQixDQUFDO0FBQUEsRUFDdkIsbUJBQW1CO0FBQUEsRUFDbkIscUJBQXFCO0FBQUEsRUFDckIseUJBQXlCO0FBQUE7QUFBQSxFQUd6QixhQUFhO0FBQUEsSUFDWCxFQUFFLElBQUksV0FBVyxNQUFNLFdBQVcsZUFBZSxNQUFNLGNBQWMsR0FBRyxPQUFPLFlBQVk7QUFBQSxJQUMzRixFQUFFLElBQUksZUFBZSxNQUFNLGVBQWUsZUFBZSxNQUFNLGNBQWMsR0FBRyxPQUFPLFlBQVk7QUFBQSxJQUNuRyxFQUFFLElBQUksU0FBUyxNQUFNLFNBQVMsZUFBZSxNQUFNLGNBQWMsR0FBRyxPQUFPLGVBQWU7QUFBQSxJQUMxRixFQUFFLElBQUksV0FBVyxNQUFNLFdBQVcsZUFBZSxNQUFNLGNBQWMsSUFBSSxPQUFPLFlBQVk7QUFBQSxFQUM5RjtBQUFBO0FBQUEsRUFHQSxnQkFBZ0IsQ0FBQztBQUFBLEVBQ2pCLGdCQUFnQixDQUFDO0FBQUEsRUFDakIsZUFBZSxDQUFDO0FBQUE7QUFBQSxFQUdoQixhQUFhO0FBQUEsRUFDYixnQkFBZ0I7QUFBQSxFQUNoQixpQkFBaUI7QUFBQSxFQUNqQixVQUFVO0FBQUEsRUFDVixlQUFlO0FBQUE7QUFBQSxFQUdmLGdCQUFnQixDQUFDO0FBQUE7QUFBQSxFQUdqQixXQUFXO0FBQUE7QUFBQSxFQUdYLDJCQUEyQjtBQUFBLEVBQzNCLGlCQUFpQjtBQUFBO0FBQUEsRUFHakIsVUFBVTtBQUFBO0FBQUEsRUFHVixlQUFlO0FBQUE7QUFBQSxFQUdmLGlCQUFpQjtBQUFBLEVBQ2pCLGdCQUFnQjtBQUFBLEVBQ2hCLGdCQUFnQixDQUFDO0FBQ25COzs7QUM3VkEsSUFBQUMsbUJBQXVEOzs7QUNlaEQsSUFBTSxhQUFOLE1BQWlCO0FBQUEsRUFHdEIsWUFBWSxVQUF3QjtBQUNsQyxTQUFLLFdBQVc7QUFBQSxFQUNsQjtBQUFBLEVBRUEsZUFBZSxNQUFxQztBQUNsRCxXQUFPLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLElBQUksS0FBSztBQUFBLEVBQ2hEO0FBQUEsRUFFQSxpQkFBd0M7QUFDdEMsV0FBTyxLQUFLLGVBQWUsS0FBSyxTQUFTLFdBQVc7QUFBQSxFQUN0RDtBQUFBLEVBRUEsZ0JBQTRCO0FBQzFCLFVBQU0sT0FBTyxLQUFLLFNBQVM7QUFDM0IsVUFBTSxPQUFPLEtBQUssZUFBZSxLQUFLLE9BQU8sQ0FBQztBQUM5QyxVQUFNLFlBQVksS0FBSyxTQUFTO0FBQ2hDLFVBQU0sUUFBUSxLQUFLLFNBQVM7QUFDNUIsVUFBTSxVQUFVLFFBQVEsSUFBSSxLQUFLLE1BQU8sWUFBWSxRQUFTLEdBQUcsSUFBSTtBQUNwRSxVQUFNLFlBQVksaUJBQWlCLElBQUksS0FBSztBQUU1QyxXQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBLE1BQU0sS0FBSztBQUFBLE1BQ1g7QUFBQSxNQUNBLFlBQVksS0FBSyxTQUFTO0FBQUEsTUFDMUIsY0FBYyxLQUFLLGFBQWE7QUFBQSxJQUNsQztBQUFBLEVBQ0Y7QUFBQSxFQUVBLGVBQXdCO0FBQ3RCLFVBQU0sRUFBRSxlQUFlLFVBQVUsSUFBSSxLQUFLO0FBQzFDLFFBQUksYUFBYTtBQUFHLGFBQU87QUFDM0IsV0FBUSxnQkFBZ0IsWUFBYTtBQUFBLEVBQ3ZDO0FBQUEsRUFFQSxlQUF3QjtBQUN0QixXQUFPLEtBQUssU0FBUztBQUFBLEVBQ3ZCO0FBQUEsRUFFQSxXQUFXLFNBQXlCO0FBQ2xDLFFBQUksVUFBVTtBQUFJLGFBQU87QUFDekIsUUFBSSxVQUFVO0FBQUksYUFBTztBQUN6QixRQUFJLFVBQVU7QUFBSSxhQUFPO0FBQ3pCLFdBQU87QUFBQSxFQUNUO0FBQ0Y7OztBQzlDTyxJQUFNLGFBQU4sTUFBaUI7QUFBQSxFQU90QixZQUFZLFVBQXdCLGFBQTRCLEtBQVc7QUE2YTNFO0FBQUEsU0FBUSxrQkFBaUMsQ0FBQztBQTVheEMsU0FBSyxXQUFXO0FBQ2hCLFNBQUssY0FBYztBQUNuQixTQUFLLE1BQU07QUFDWCxVQUFNLElBQUksSUFBSSxLQUFLLEdBQUc7QUFDdEIsTUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDckIsU0FBSyxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQ3hDLFNBQUssYUFBYSxJQUFJLFdBQVcsUUFBUTtBQUFBLEVBQzNDO0FBQUE7QUFBQSxFQUlRLGtCQUF3QjtBQUM5QixRQUFJLEtBQUssU0FBUyxlQUFlO0FBQy9CLFlBQU0sTUFBTSxJQUFJLEtBQUssS0FBSyxTQUFTLGFBQWE7QUFDaEQsVUFBSSxTQUFTLElBQUksR0FBRyxHQUFHLENBQUM7QUFDeEIsYUFBTztBQUFBLElBQ1Q7QUFDQSxRQUFJLEtBQUssU0FBUyxnQkFBZ0IsWUFBWSxLQUFLLFNBQVMsZ0JBQWdCO0FBQzFFLGFBQU8sSUFBSSxLQUFLLEtBQUssU0FBUyxjQUFjO0FBQUEsSUFDOUM7QUFDQSxXQUFPLElBQUksS0FBSyxLQUFLLElBQUksUUFBUSxJQUFJLEtBQUssU0FBUyxlQUFlO0FBQUEsRUFDcEU7QUFBQSxFQUVRLG9CQUE0QjtBQUNsQyxVQUFNLElBQUksS0FBSyxnQkFBZ0I7QUFDL0IsTUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDckIsV0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUFBLEVBQ3BDO0FBQUE7QUFBQSxFQUlBLHVCQUF5QztBQUN2QyxXQUFPLEtBQUssU0FBUyxXQUFXLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTztBQUFBLEVBQ3pEO0FBQUEsRUFFQSwwQkFBMEIsWUFBa0M7QUFDMUQsV0FBTyxLQUFLLFlBQVksVUFBVSxLQUFLLENBQUM7QUFBQSxFQUMxQztBQUFBLEVBRUEscUJBQXFCLFlBQTRCO0FBQy9DLFVBQU0sUUFBUSxLQUFLLDBCQUEwQixVQUFVO0FBQ3ZELFVBQU0sZUFBZSxLQUFLLGdCQUFnQjtBQUMxQyxVQUFNLFVBQVUsSUFBSSxLQUFLLFlBQVksRUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFFMUQsVUFBTSxpQkFBaUIsTUFDcEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQ3pCLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsRUFDckMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLE9BQU8sRUFDdkMsS0FBSyxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUM7QUFFdkIsUUFBSSxlQUFlLFdBQVc7QUFBRyxhQUFPO0FBRXhDLFVBQU0sV0FBVyxLQUFLLEtBQUssS0FBSztBQUNoQyxXQUFPLEtBQUssT0FBTyxVQUFVLGVBQWUsQ0FBQyxLQUFLLFFBQVE7QUFBQSxFQUM1RDtBQUFBLEVBRUEsWUFBWSxZQUE2QjtBQUN2QyxVQUFNLGlCQUFpQixLQUFLLGtCQUFrQjtBQUM5QyxVQUFNLFFBQVEsS0FBSywwQkFBMEIsVUFBVTtBQUN2RCxXQUFPLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLGtCQUFrQixFQUFFLFNBQVM7QUFBQSxFQUNuRTtBQUFBO0FBQUEsRUFJQSxrQkFBa0IsWUFBc0Q7QUFDdEUsVUFBTSxXQUFXLEtBQUssU0FBUyxXQUFXLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxVQUFVO0FBQ3pFLFFBQUksQ0FBQztBQUFVLGFBQU8sRUFBRSxNQUFNLEdBQUcsUUFBUSxFQUFFO0FBRTNDLFVBQU0sZUFBZSxLQUFLLGdCQUFnQjtBQUMxQyxVQUFNLFlBQVksS0FBSyxhQUFhLFlBQVk7QUFDaEQsVUFBTSxVQUFVLElBQUksS0FBSyxTQUFTO0FBQ2xDLFlBQVEsUUFBUSxRQUFRLFFBQVEsSUFBSSxDQUFDO0FBRXJDLFVBQU0sUUFBUSxLQUFLLDBCQUEwQixVQUFVO0FBQ3ZELFVBQU0sT0FBTyxNQUFNLE9BQU8sQ0FBQyxNQUFNO0FBQy9CLFVBQUksQ0FBQyxFQUFFO0FBQVcsZUFBTztBQUN6QixZQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSTtBQUN6QixhQUFPLEtBQUssYUFBYSxJQUFJO0FBQUEsSUFDL0IsQ0FBQyxFQUFFO0FBRUgsV0FBTyxFQUFFLE1BQU0sUUFBUSxTQUFTLGFBQWE7QUFBQSxFQUMvQztBQUFBLEVBRVEsYUFBYSxNQUFrQjtBQUNyQyxVQUFNLElBQUksSUFBSSxLQUFLLElBQUk7QUFDdkIsTUFBRSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDckIsVUFBTSxNQUFNLEVBQUUsT0FBTztBQUNyQixVQUFNLE9BQU8sRUFBRSxRQUFRLElBQUksT0FBTyxRQUFRLElBQUksS0FBSztBQUNuRCxNQUFFLFFBQVEsSUFBSTtBQUNkLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQSxFQUlBLGtCQUFrQixZQUE0QjtBQUM1QyxVQUFNLFFBQVEsS0FBSywwQkFBMEIsVUFBVTtBQUN2RCxVQUFNLGVBQWUsS0FBSyxnQkFBZ0I7QUFDMUMsVUFBTSxRQUFRLElBQUksS0FBSyxZQUFZO0FBQ25DLFVBQU0sU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBRXpCLFVBQU0saUJBQWlCLE1BQ3BCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUN6QixJQUFJLENBQUMsTUFBTTtBQUNWLFlBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJO0FBQ3pCLFFBQUUsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLGFBQU87QUFBQSxJQUNULENBQUMsRUFDQSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsS0FBSyxLQUFLLEtBQUssRUFDL0MsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFFBQVEsSUFBSSxFQUFFLFFBQVEsQ0FBQztBQUUzQyxRQUFJLGVBQWUsV0FBVztBQUFHLGFBQU87QUFFeEMsUUFBSSxTQUFTO0FBQ2IsVUFBTSxZQUFZLElBQUksS0FBSyxlQUFlLENBQUMsQ0FBQztBQUM1QyxlQUFXLFFBQVEsZ0JBQWdCO0FBQ2pDLFVBQUksS0FBSyxRQUFRLE1BQU0sVUFBVSxRQUFRLEdBQUc7QUFDMUM7QUFDQSxrQkFBVSxRQUFRLFVBQVUsUUFBUSxJQUFJLENBQUM7QUFBQSxNQUMzQyxXQUFXLE9BQU8sV0FBVztBQUMzQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLG1CQUEyQjtBQUN6QixVQUFNLGFBQWEsS0FBSyxxQkFBcUI7QUFDN0MsVUFBTSxVQUFVLFdBQVcsSUFBSSxDQUFDLE1BQU0sS0FBSyxrQkFBa0IsRUFBRSxFQUFFLENBQUM7QUFDbEUsV0FBTyxLQUFLLElBQUksR0FBRyxHQUFHLE9BQU87QUFBQSxFQUMvQjtBQUFBO0FBQUEsRUFJQSxzQkFBOEI7QUFDNUIsUUFBSSxRQUFRO0FBQ1osZUFBVyxZQUFZLEtBQUsscUJBQXFCLEdBQUc7QUFDbEQsWUFBTSxRQUFRLEtBQUssMEJBQTBCLFNBQVMsRUFBRTtBQUN4RCxlQUFTLE1BQU0sT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFBQSxJQUM1QztBQUNBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxvQkFBNEI7QUFDMUIsVUFBTSxVQUFVLG9CQUFJLElBQVk7QUFDaEMsZUFBVyxZQUFZLEtBQUsscUJBQXFCLEdBQUc7QUFDbEQsWUFBTSxRQUFRLEtBQUssMEJBQTBCLFNBQVMsRUFBRTtBQUN4RCxpQkFBVyxLQUFLLE9BQU87QUFDckIsWUFBSSxFQUFFO0FBQVcsa0JBQVEsSUFBSSxFQUFFLElBQUk7QUFBQSxNQUNyQztBQUFBLElBQ0Y7QUFDQSxXQUFPLFFBQVE7QUFBQSxFQUNqQjtBQUFBO0FBQUEsRUFJQSxjQUFjLFVBQTRCO0FBQ3hDLFVBQU0sUUFBUSxLQUFLLFNBQVMsVUFBVTtBQUN0QyxRQUFJLEtBQUssS0FBSyxTQUFTLFdBQVcsUUFBUSxLQUFLO0FBRS9DLGVBQVcsWUFBWSxLQUFLLHFCQUFxQixHQUFHO0FBQ2xELFVBQUksU0FBUyxhQUFhO0FBQVU7QUFDcEMsWUFBTSxRQUFRLEtBQUssMEJBQTBCLFNBQVMsRUFBRTtBQUN4RCxXQUFLLE1BQU0sT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsU0FBUztBQUFBLElBQ2pEO0FBQ0EsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLGlCQUFpQixVQUFtQztBQUNsRCxVQUFNLEtBQUssS0FBSyxjQUFjLFFBQVE7QUFDdEMsVUFBTSxRQUFRLEtBQUssTUFBTSxLQUFLLEdBQUc7QUFDakMsVUFBTSxpQkFBaUIsS0FBSztBQUM1QixXQUFPLEVBQUUsVUFBVSxJQUFJLE9BQU8sZUFBZTtBQUFBLEVBQy9DO0FBQUEsRUFFQSx1QkFBd0M7QUFDdEMsV0FBUSxDQUFDLFFBQVEsUUFBUSxRQUFRLEVBQWlCLElBQUksQ0FBQyxNQUFNLEtBQUssaUJBQWlCLENBQUMsQ0FBQztBQUFBLEVBQ3ZGO0FBQUEsRUFFQSxxQkFBNkI7QUFDM0IsV0FBTyxLQUFLLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxLQUFLLE9BQU8sTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUFBLEVBQzFFO0FBQUEsRUFFQSxhQUErQztBQUM3QyxVQUFNLFFBQVEsS0FBSyxtQkFBbUI7QUFDdEMsVUFBTSxhQUFhLEtBQUssSUFBSSxJQUFJLEtBQUssTUFBTSxRQUFRLEVBQUUsSUFBSSxDQUFDO0FBQzFELFVBQU0sT0FBTyxjQUFjLFVBQVUsS0FBSztBQUMxQyxXQUFPLEVBQUUsUUFBUSxZQUFZLEtBQUs7QUFBQSxFQUNwQztBQUFBLEVBRUEsd0JBQWdDO0FBQzlCLFVBQU0sUUFBUSxLQUFLLG1CQUFtQjtBQUN0QyxXQUFRLFFBQVEsS0FBTTtBQUFBLEVBQ3hCO0FBQUE7QUFBQSxFQUlBLGtCQUEwQjtBQUN4QixRQUFJLEtBQUssU0FBUztBQUFlLGFBQU8sS0FBSyxTQUFTO0FBRXRELFVBQU0sU0FBUyxLQUFLLHFCQUFxQjtBQUN6QyxVQUFNLG1CQUFtQixLQUFLLG9CQUFvQjtBQUVsRCxVQUFNLHNCQUFnRCxFQUFFLE1BQU0sR0FBRyxNQUFNLEdBQUcsUUFBUSxFQUFFO0FBQ3BGLGVBQVcsWUFBWSxLQUFLLHFCQUFxQixHQUFHO0FBQ2xELFlBQU0sUUFBUSxLQUFLLDBCQUEwQixTQUFTLEVBQUU7QUFDeEQsMEJBQW9CLFNBQVMsUUFBUSxLQUFLLE1BQU0sT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFBQSxJQUM3RTtBQUVBLFVBQU0sUUFBUSxPQUFPLE9BQU8sbUJBQW1CLEVBQUUsT0FBTyxDQUFDLEdBQUcsTUFBTSxJQUFJLEdBQUcsQ0FBQztBQUMxRSxRQUFJLFVBQVU7QUFBRyxhQUFPO0FBRXhCLFVBQU0sVUFBb0M7QUFBQSxNQUN4QyxNQUFNLFFBQVEsSUFBSSxvQkFBb0IsT0FBTyxRQUFRO0FBQUEsTUFDckQsTUFBTSxRQUFRLElBQUksb0JBQW9CLE9BQU8sUUFBUTtBQUFBLE1BQ3JELFFBQVEsUUFBUSxJQUFJLG9CQUFvQixTQUFTLFFBQVE7QUFBQSxJQUMzRDtBQUVBLFVBQU0sT0FBTyxtQkFBbUIsS0FBSyxVQUFVLG1CQUFtQixNQUFNLFFBQVE7QUFHaEYsZUFBVyxPQUFPLENBQUMsUUFBUSxRQUFRLFFBQVEsR0FBaUI7QUFDMUQsVUFBSSxRQUFRLEdBQUcsS0FBSyxLQUFNO0FBQ3hCLGVBQU8sdUJBQXVCLEdBQUcsSUFBSSxJQUFJLEtBQUs7QUFBQSxNQUNoRDtBQUFBLElBQ0Y7QUFHQSxRQUFJLFFBQVEsUUFBUSxRQUFRLFFBQVEsUUFBUSxRQUFRLFFBQVEsVUFBVSxNQUFNO0FBQzFFLGFBQU8sZ0JBQWdCLElBQUksS0FBSztBQUFBLElBQ2xDO0FBR0EsVUFBTSxPQUFRLENBQUMsUUFBUSxRQUFRLFFBQVEsRUFDcEMsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDLEtBQUssR0FBSSxFQUNoQyxLQUFLO0FBRVIsUUFBSSxLQUFLLFdBQVcsR0FBRztBQUNyQixZQUFNLE1BQU0sS0FBSyxLQUFLLEdBQUc7QUFDekIsYUFBTyxvQkFBb0IsR0FBRyxJQUFJLElBQUksS0FBSztBQUFBLElBQzdDO0FBR0EsVUFBTSxXQUFZLE9BQU8sUUFBUSxPQUFPLEVBQ3JDLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUNuQyxXQUFPLHVCQUF1QixRQUFRLElBQUksSUFBSSxLQUFLO0FBQUEsRUFDckQ7QUFBQTtBQUFBLEVBSUEsZ0JBQTRDO0FBQzFDLFVBQU0sYUFBYSxLQUFLLHFCQUFxQjtBQUM3QyxRQUFJLFdBQVcsV0FBVztBQUFHLGFBQU87QUFHcEMsUUFBSSxLQUFLLFNBQVMsWUFBWTtBQUM1QixZQUFNQyxhQUFZLEtBQUssNkJBQTZCLFVBQVU7QUFDOUQsWUFBTSxTQUFTQSxXQUFVLFNBQVMsSUFBSUEsV0FBVSxDQUFDLElBQUksV0FBVyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDO0FBQ3pHLGFBQU8sS0FBSyxnQkFBZ0IsUUFBUSxTQUFTLCtDQUEwQztBQUFBLElBQ3pGO0FBRUEsUUFBSSxLQUFLLFNBQVMsdUJBQXVCLEdBQUc7QUFDMUMsWUFBTUEsYUFBWSxLQUFLLDZCQUE2QixVQUFVO0FBQzlELFVBQUlBLFdBQVUsU0FBUyxHQUFHO0FBQ3hCLGVBQU8sS0FBSyxnQkFBZ0JBLFdBQVUsQ0FBQyxHQUFHLFNBQVMsOENBQThDO0FBQUEsTUFDbkc7QUFBQSxJQUNGO0FBR0EsUUFBSSxLQUFLLFdBQVcsYUFBYSxHQUFHO0FBQ2xDLFlBQU0sT0FBTyxLQUFLLHlCQUF5QixVQUFVO0FBQ3JELFVBQUksTUFBTTtBQUNSLGVBQU8sS0FBSyxnQkFBZ0IsTUFBTSxRQUFRLDJDQUEyQztBQUFBLE1BQ3ZGO0FBQUEsSUFDRjtBQUdBLFVBQU0sWUFBWSxLQUFLLDZCQUE2QixVQUFVO0FBQzlELFFBQUksVUFBVSxTQUFTLEdBQUc7QUFDeEIsWUFBTSxNQUFNLEtBQUssV0FBVyxTQUFTO0FBQ3JDLFVBQUksS0FBSztBQUNQLGNBQU0sT0FBTyxLQUFLLHFCQUFxQixJQUFJLEVBQUU7QUFDN0MsY0FBTSxPQUFPLGFBQWEsSUFBSSxFQUFFLEtBQUssR0FBRyxJQUFJO0FBQzVDLGVBQU8sS0FBSyxnQkFBZ0IsS0FBSyxXQUFXLElBQUk7QUFBQSxNQUNsRDtBQUFBLElBQ0Y7QUFHQSxVQUFNLGlCQUFpQixLQUFLLDRCQUE0QixVQUFVO0FBQ2xFLFFBQUksZUFBZSxTQUFTLEdBQUc7QUFDN0IsWUFBTSxNQUFNLGVBQWUsQ0FBQztBQUM1QixZQUFNLFdBQVcsS0FBSyxrQkFBa0IsSUFBSSxFQUFFO0FBQzlDLGFBQU8sS0FBSyxnQkFBZ0IsS0FBSyxVQUFVLG9CQUFvQixTQUFTLElBQUksSUFBSSxTQUFTLE1BQU0sYUFBYTtBQUFBLElBQzlHO0FBR0EsVUFBTSxVQUFVLEtBQUsscUJBQXFCLFVBQVU7QUFDcEQsUUFBSSxRQUFRLFNBQVMsR0FBRztBQUN0QixhQUFPLEtBQUssZ0JBQWdCLFFBQVEsQ0FBQyxHQUFHLFNBQVMsb0RBQW9EO0FBQUEsSUFDdkc7QUFHQSxVQUFNLFlBQVksS0FBSyx1QkFBdUIsVUFBVTtBQUN4RCxRQUFJLFVBQVUsU0FBUyxHQUFHO0FBQ3hCLGFBQU8sS0FBSyxnQkFBZ0IsVUFBVSxDQUFDLEdBQUcsUUFBUSwyQkFBMkI7QUFBQSxJQUMvRTtBQUdBLFVBQU0sYUFBYSxXQUNoQixPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssWUFBWSxFQUFFLEVBQUUsQ0FBQyxFQUNyQyxLQUFLLENBQUMsR0FBRyxNQUFNLEtBQUsscUJBQXFCLEVBQUUsRUFBRSxJQUFJLEtBQUsscUJBQXFCLEVBQUUsRUFBRSxDQUFDO0FBRW5GLFFBQUksV0FBVyxTQUFTLEdBQUc7QUFDekIsYUFBTyxLQUFLLGdCQUFnQixXQUFXLENBQUMsR0FBRyxZQUFZLDZDQUE2QztBQUFBLElBQ3RHO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVRLGdCQUNOLFVBQ0EsUUFDQSxVQUNxQjtBQUNyQixXQUFPO0FBQUEsTUFDTCxZQUFZLFNBQVM7QUFBQSxNQUNyQixjQUFjLFNBQVM7QUFBQSxNQUN2QixPQUFPLFNBQVM7QUFBQSxNQUNoQixVQUFVLFNBQVM7QUFBQSxNQUNuQjtBQUFBLE1BQ0EsbUJBQW1CLEtBQUsscUJBQXFCLFNBQVMsRUFBRTtBQUFBLE1BQ3hEO0FBQUEsTUFDQSxVQUFVLFNBQVM7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFBQSxFQUVRLDZCQUE2QixZQUFnRDtBQUNuRixXQUFPLFdBQ0osT0FBTyxDQUFDLE1BQU07QUFDYixZQUFNLE9BQU8sS0FBSyxxQkFBcUIsRUFBRSxFQUFFO0FBQzNDLGFBQU8sUUFBUSxFQUFFLG9CQUFvQixDQUFDLEtBQUssWUFBWSxFQUFFLEVBQUU7QUFBQSxJQUM3RCxDQUFDLEVBQ0EsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFdBQVcsRUFBRSxRQUFRO0FBQUEsRUFDM0M7QUFBQSxFQUVRLFdBQVcsWUFBcUQ7QUFFdEUsVUFBTSxXQUFXLFdBQVcsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsT0FBTyxTQUFTLENBQUM7QUFDekUsUUFBSSxTQUFTLFNBQVM7QUFBRyxhQUFPLFNBQVMsQ0FBQztBQUUxQyxlQUFXLFlBQVksWUFBWTtBQUVqQyxVQUFJLFNBQVMsZ0JBQWdCO0FBQzNCLGNBQU0sVUFBVSxLQUFLLHFCQUFxQixTQUFTLGNBQWM7QUFDakUsY0FBTSxXQUFXLEtBQUsscUJBQXFCLFNBQVMsRUFBRTtBQUV0RCxZQUFJLFdBQVcsU0FBUztBQUN0QixnQkFBTSxNQUFNLEtBQUssU0FBUyxXQUFXLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxTQUFTLGNBQWM7QUFDakYsY0FBSSxPQUFPLElBQUksV0FBVyxDQUFDLEtBQUssWUFBWSxJQUFJLEVBQUU7QUFBRyxtQkFBTztBQUFBLFFBQzlEO0FBQUEsTUFDRjtBQUdBLFlBQU0sWUFBWSxXQUFXO0FBQUEsUUFBSyxDQUFDLFVBQ2pDLE1BQU0sUUFBUSxTQUFTLFNBQVMsRUFBRSxLQUFLLE1BQU0sT0FBTyxTQUFTO0FBQUEsTUFDL0Q7QUFDQSxVQUFJO0FBQVc7QUFFZixhQUFPO0FBQUEsSUFDVDtBQUNBLFdBQU8sV0FBVyxDQUFDLEtBQUs7QUFBQSxFQUMxQjtBQUFBLEVBRVEseUJBQXlCLFlBQXFEO0FBQ3BGLFVBQU0sVUFBVSxXQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxZQUFZLEVBQUUsRUFBRSxDQUFDO0FBQ2hFLFFBQUksUUFBUSxXQUFXO0FBQUcsYUFBTztBQUNqQyxXQUFPLFFBQVEsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLHNCQUFzQixFQUFFLG1CQUFtQixFQUFFLENBQUM7QUFBQSxFQUNoRjtBQUFBLEVBRVEsNEJBQTRCLFlBQWdEO0FBQ2xGLFVBQU0sZUFBZSxLQUFLLGdCQUFnQjtBQUMxQyxVQUFNLFlBQVksYUFBYSxPQUFPO0FBQ3RDLFVBQU0sY0FBYyxjQUFjLElBQUksSUFBSTtBQUMxQyxVQUFNLGdCQUFnQixJQUFJLGNBQWM7QUFFeEMsV0FBTyxXQUNKLE9BQU8sQ0FBQyxNQUFNO0FBQ2IsVUFBSSxLQUFLLFlBQVksRUFBRSxFQUFFO0FBQUcsZUFBTztBQUNuQyxZQUFNLFdBQVcsS0FBSyxrQkFBa0IsRUFBRSxFQUFFO0FBQzVDLFlBQU0sVUFBVSxTQUFTLFNBQVMsU0FBUztBQUMzQyxVQUFJLFdBQVc7QUFBRyxlQUFPO0FBR3pCLGFBQU8sVUFBVSxJQUFJLFNBQVMsU0FBUztBQUFBLElBQ3pDLENBQUMsRUFDQSxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVE7QUFBQSxFQUMzQztBQUFBLEVBRVEscUJBQXFCLFlBQWdEO0FBQzNFLFdBQU8sV0FBVyxPQUFPLENBQUMsTUFBTTtBQUM5QixVQUFJLENBQUMsRUFBRSxjQUFjLEtBQUssWUFBWSxFQUFFLEVBQUU7QUFBRyxlQUFPO0FBQ3BELGFBQU8sS0FBSyxZQUFZLEVBQUUsVUFBVTtBQUFBLElBQ3RDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFFUSx1QkFBdUIsWUFBZ0Q7QUFDN0UsVUFBTSxPQUFPLEtBQUssZ0JBQWdCLEVBQUUsU0FBUztBQUM3QyxVQUFNLEVBQUUsY0FBYyxZQUFZLGNBQWMsV0FBVyxJQUFJLEtBQUssU0FBUztBQUU3RSxVQUFNLGdCQUFnQixPQUFPLGFBQWEsWUFDeEMsT0FBTyxlQUFlLGNBQ3RCLE9BQU8sYUFBYSxZQUFZO0FBR2xDLFVBQU0sYUFBYSxXQUFXLE9BQU8sQ0FBQyxNQUFNO0FBQzFDLFVBQUksS0FBSyxZQUFZLEVBQUUsRUFBRTtBQUFHLGVBQU87QUFDbkMsVUFBSSxDQUFDLEVBQUU7QUFBYyxlQUFPO0FBQzVCLGFBQU8sUUFBUSxFQUFFLGFBQWEsYUFBYSxPQUFPLEVBQUUsYUFBYTtBQUFBLElBQ25FLENBQUM7QUFDRCxRQUFJLFdBQVcsU0FBUztBQUFHLGFBQU8sV0FBVyxLQUFLLENBQUMsR0FBRyxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVE7QUFHbkYsV0FBTyxXQUNKLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLGlCQUFpQixFQUFFLGtCQUFrQixVQUFVLEVBQzdHLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUTtBQUFBLEVBQzNDO0FBQUEsRUFNQSxtQkFBbUIsU0FBOEI7QUFDL0MsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBLEVBRUEsWUFBMkI7QUFDekIsVUFBTSxhQUFhLEtBQUsscUJBQXFCLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLFlBQVksRUFBRSxFQUFFLENBQUM7QUFDcEYsVUFBTSxFQUFFLGNBQWMsWUFBWSxjQUFjLFlBQVksY0FBYyxJQUFJLEtBQUssU0FBUztBQUU1RixVQUFNLFlBQXNFO0FBQUEsTUFDMUUsRUFBRSxRQUFRLFdBQVcsV0FBVyxjQUFjLFNBQVMsV0FBVztBQUFBLE1BQ2xFLEVBQUUsUUFBUSxhQUFhLFdBQVcsWUFBWSxTQUFTLGFBQWE7QUFBQSxNQUNwRSxFQUFFLFFBQVEsV0FBVyxXQUFXLGNBQWMsU0FBUyxXQUFXO0FBQUEsSUFDcEU7QUFFQSxVQUFNLFVBQXlCLENBQUM7QUFDaEMsVUFBTSxZQUFZLG9CQUFJLElBQVk7QUFHbEMsZUFBVyxZQUFZLFlBQVk7QUFDakMsVUFBSSxDQUFDLFNBQVM7QUFBYztBQUM1QixjQUFRLEtBQUs7QUFBQSxRQUNYLFlBQVksU0FBUztBQUFBLFFBQ3JCLGNBQWMsU0FBUztBQUFBLFFBQ3ZCLE9BQU8sU0FBUztBQUFBLFFBQ2hCLFVBQVUsU0FBUztBQUFBLFFBQ25CLFdBQVcsU0FBUyxhQUFhO0FBQUEsUUFDakMsU0FBUyxTQUFTLGFBQWE7QUFBQSxRQUMvQixtQkFBbUIsU0FBUztBQUFBLFFBQzVCLFFBQVE7QUFBQSxRQUNSLGdCQUFnQjtBQUFBLE1BQ2xCLENBQUM7QUFDRCxnQkFBVSxJQUFJLFNBQVMsRUFBRTtBQUFBLElBQzNCO0FBR0EsVUFBTSxZQUFZLEtBQUssNkJBQTZCLFVBQVUsRUFDM0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFLENBQUM7QUFFckMsZUFBVyxZQUFZLFdBQVc7QUFDaEMsWUFBTSxPQUFPLEtBQUssb0JBQW9CLFVBQVUsV0FBVyxTQUFTLGFBQWE7QUFDakYsVUFBSSxNQUFNO0FBQ1IsZ0JBQVEsS0FBSztBQUFBLFVBQ1gsWUFBWSxTQUFTO0FBQUEsVUFDckIsY0FBYyxTQUFTO0FBQUEsVUFDdkIsT0FBTyxTQUFTO0FBQUEsVUFDaEIsVUFBVSxTQUFTO0FBQUEsVUFDbkIsV0FBVyxLQUFLO0FBQUEsVUFDaEIsU0FBUyxLQUFLO0FBQUEsVUFDZCxtQkFBbUIsU0FBUztBQUFBLFVBQzVCLFFBQVE7QUFBQSxVQUNSLGdCQUFnQjtBQUFBLFFBQ2xCLENBQUM7QUFDRCxrQkFBVSxJQUFJLFNBQVMsRUFBRTtBQUFBLE1BQzNCO0FBQUEsSUFDRjtBQUdBLFVBQU0sWUFBWSxXQUNmLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQ2xDLE9BQU8sQ0FBQyxNQUFNO0FBQ2IsWUFBTSxXQUFXLEtBQUssa0JBQWtCLEVBQUUsRUFBRTtBQUM1QyxhQUFPLFNBQVMsT0FBTyxTQUFTO0FBQUEsSUFDbEMsQ0FBQyxFQUNBLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUTtBQUV6QyxlQUFXLFlBQVksV0FBVztBQUNoQyxZQUFNLE9BQU8sS0FBSyxvQkFBb0IsVUFBVSxXQUFXLFNBQVMsYUFBYTtBQUNqRixVQUFJLE1BQU07QUFDUixnQkFBUSxLQUFLO0FBQUEsVUFDWCxZQUFZLFNBQVM7QUFBQSxVQUNyQixjQUFjLFNBQVM7QUFBQSxVQUN2QixPQUFPLFNBQVM7QUFBQSxVQUNoQixVQUFVLFNBQVM7QUFBQSxVQUNuQixXQUFXLEtBQUs7QUFBQSxVQUNoQixTQUFTLEtBQUs7QUFBQSxVQUNkLG1CQUFtQixTQUFTO0FBQUEsVUFDNUIsUUFBUTtBQUFBLFVBQ1IsZ0JBQWdCO0FBQUEsUUFDbEIsQ0FBQztBQUNELGtCQUFVLElBQUksU0FBUyxFQUFFO0FBQUEsTUFDM0I7QUFBQSxJQUNGO0FBR0EsZUFBVyxZQUFZLEtBQUssaUJBQWlCO0FBQzNDLGNBQVEsS0FBSyxRQUFRO0FBQUEsSUFDdkI7QUFHQSxZQUFRLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUztBQUdoRCxlQUFXLFNBQVMsU0FBUztBQUMzQixVQUFJLENBQUMsTUFBTSxrQkFBa0IsS0FBSyxZQUFZLE1BQU0sVUFBVSxHQUFHO0FBQy9ELGNBQU0sU0FBUztBQUFBLE1BQ2pCO0FBQUEsSUFDRjtBQUVBLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFUSxvQkFDTixVQUNBLFdBQ0EsVUFDQSxlQUMrQztBQUMvQyxVQUFNLGdCQUFnQixTQUFTLG9CQUFvQjtBQUNuRCxVQUFNLGNBQWMsZ0JBQWdCO0FBR3BDLFVBQU0sZ0JBQWdCLFVBQVUsS0FBSyxDQUFDLE1BQU0sRUFBRSxXQUFXLFNBQVMsYUFBYSxLQUMxRSxVQUFVLEtBQUssQ0FBQyxNQUFNLEVBQUUsV0FBVyxTQUFTLEtBQzVDLFVBQVUsQ0FBQztBQUdoQixRQUFJLGlCQUFpQixjQUFjO0FBRW5DLGVBQVcsU0FBUyxTQUFTLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxZQUFZLEVBQUUsU0FBUyxHQUFHO0FBQ3RFLFVBQUksTUFBTSxZQUFZLGNBQWMsV0FBVyxNQUFNLFVBQVUsZ0JBQWdCO0FBQzdFLHlCQUFpQixNQUFNLFVBQVU7QUFBQSxNQUNuQztBQUFBLElBQ0Y7QUFFQSxVQUFNLGVBQWUsaUJBQWlCO0FBQ3RDLFFBQUksZ0JBQWdCLGNBQWMsU0FBUztBQUN6QyxhQUFPLEVBQUUsV0FBVyxnQkFBZ0IsU0FBUyxhQUFhO0FBQUEsSUFDNUQ7QUFHQSxlQUFXLFFBQVEsV0FBVztBQUM1QixVQUFJLFNBQVM7QUFBZTtBQUM1Qix1QkFBaUIsS0FBSztBQUN0QixpQkFBVyxTQUFTLFNBQVMsS0FBSyxDQUFDLEdBQUcsTUFBTSxFQUFFLFlBQVksRUFBRSxTQUFTLEdBQUc7QUFDdEUsWUFBSSxNQUFNLFlBQVksS0FBSyxXQUFXLE1BQU0sVUFBVSxnQkFBZ0I7QUFDcEUsMkJBQWlCLE1BQU0sVUFBVTtBQUFBLFFBQ25DO0FBQUEsTUFDRjtBQUNBLFVBQUksaUJBQWlCLGlCQUFpQixLQUFLLFNBQVM7QUFDbEQsZUFBTyxFQUFFLFdBQVcsZ0JBQWdCLFNBQVMsaUJBQWlCLGNBQWM7QUFBQSxNQUM5RTtBQUFBLElBQ0Y7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFJQSw0QkFBc0c7QUFDcEcsVUFBTSxlQUFlLEtBQUssZ0JBQWdCO0FBQzFDLFVBQU0sWUFBWSxLQUFLLGFBQWEsWUFBWTtBQUNoRCxVQUFNLE9BQU8sQ0FBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxLQUFLO0FBQzdELFVBQU0sU0FBbUYsQ0FBQztBQUUxRixhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixZQUFNLElBQUksSUFBSSxLQUFLLFNBQVM7QUFDNUIsUUFBRSxRQUFRLEVBQUUsUUFBUSxJQUFJLENBQUM7QUFDekIsWUFBTSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQzNDLFlBQU0saUJBQWlCLG9CQUFJLElBQXNCO0FBRWpELGlCQUFXLFlBQVksS0FBSyxxQkFBcUIsR0FBRztBQUNsRCxjQUFNLFFBQVEsS0FBSywwQkFBMEIsU0FBUyxFQUFFO0FBQ3hELGNBQU0sT0FBTyxNQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxXQUFXLEVBQUUsU0FBUztBQUNoRSxZQUFJLE1BQU07QUFDUixnQkFBTSxVQUFVLGVBQWUsSUFBSSxTQUFTLFFBQVEsS0FBSztBQUN6RCx5QkFBZSxJQUFJLFNBQVMsVUFBVSxVQUFVLENBQUM7QUFBQSxRQUNuRDtBQUFBLE1BQ0Y7QUFFQSxhQUFPLEtBQUssRUFBRSxLQUFLLEtBQUssQ0FBQyxHQUFHLE1BQU0sU0FBUyxhQUFhLGVBQWUsQ0FBQztBQUFBLElBQzFFO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLHdCQUFnQztBQUM5QixVQUFNLFNBQVMsS0FBSywwQkFBMEI7QUFDOUMsV0FBTyxPQUFPLE9BQU8sQ0FBQyxNQUFNO0FBQzFCLFVBQUksUUFBUTtBQUNaLFFBQUUsWUFBWSxRQUFRLENBQUMsTUFBTTtBQUFFLGlCQUFTO0FBQUEsTUFBRyxDQUFDO0FBQzVDLGFBQU8sUUFBUTtBQUFBLElBQ2pCLENBQUMsRUFBRTtBQUFBLEVBQ0w7QUFBQSxFQUVBLHFCQUE2QjtBQUMzQixVQUFNLFNBQVMsS0FBSywwQkFBMEI7QUFDOUMsUUFBSSxPQUFPLE9BQU8sQ0FBQztBQUNuQixRQUFJLFlBQVk7QUFDaEIsZUFBVyxLQUFLLFFBQVE7QUFDdEIsVUFBSSxRQUFRO0FBQ1osUUFBRSxZQUFZLFFBQVEsQ0FBQyxNQUFNO0FBQUUsaUJBQVM7QUFBQSxNQUFHLENBQUM7QUFDNUMsVUFBSSxRQUFRLFdBQVc7QUFDckIsb0JBQVk7QUFDWixlQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFDQSxXQUFPLFlBQVksSUFBSSxLQUFLLE1BQU07QUFBQSxFQUNwQztBQUFBO0FBQUEsRUFJQSxnQkFBMEk7QUFDeEksVUFBTSxhQUFhLEtBQUsscUJBQXFCO0FBQzdDLFFBQUksV0FBVztBQUNmLFVBQU0sY0FBcUcsQ0FBQztBQUU1RyxlQUFXLFlBQVksWUFBWTtBQUNqQyxZQUFNLE9BQU8sS0FBSyxZQUFZLFNBQVMsRUFBRTtBQUN6QyxVQUFJO0FBQU07QUFDVixrQkFBWSxLQUFLO0FBQUEsUUFDZixJQUFJLFNBQVM7QUFBQSxRQUNiLE1BQU0sU0FBUztBQUFBLFFBQ2YsT0FBTyxTQUFTO0FBQUEsUUFDaEIsVUFBVSxTQUFTO0FBQUEsUUFDbkI7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBRUEsV0FBTyxFQUFFLFVBQVUsWUFBWTtBQUFBLEVBQ2pDO0FBQUE7QUFBQSxFQUlBLGlCQU1FO0FBQ0EsVUFBTSxRQUFRLEtBQUssMEJBQTBCO0FBQzdDLFVBQU0sYUFBYSxLQUFLLHNCQUFzQjtBQUM5QyxVQUFNLFVBQVUsS0FBSyxtQkFBbUI7QUFFeEMsUUFBSSxnQkFBZ0I7QUFDcEIsZUFBVyxLQUFLLE9BQU87QUFDckIsUUFBRSxZQUFZLFFBQVEsQ0FBQyxNQUFNO0FBQUUseUJBQWlCO0FBQUEsTUFBRyxDQUFDO0FBQUEsSUFDdEQ7QUFHQSxVQUFNLGVBQWUsS0FBSyxnQkFBZ0I7QUFDMUMsVUFBTSxnQkFBZ0IsSUFBSSxLQUFLLEtBQUssYUFBYSxZQUFZLENBQUM7QUFDOUQsa0JBQWMsUUFBUSxjQUFjLFFBQVEsSUFBSSxDQUFDO0FBRWpELFFBQUksZ0JBQWdCO0FBQ3BCLGFBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLO0FBQzFCLFlBQU0sSUFBSSxJQUFJLEtBQUssYUFBYTtBQUNoQyxRQUFFLFFBQVEsRUFBRSxRQUFRLElBQUksQ0FBQztBQUN6QixZQUFNLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFDM0MsaUJBQVcsWUFBWSxLQUFLLHFCQUFxQixHQUFHO0FBQ2xELGNBQU0sUUFBUSxLQUFLLDBCQUEwQixTQUFTLEVBQUU7QUFDeEQsWUFBSSxNQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxXQUFXLEVBQUUsU0FBUztBQUFHO0FBQUEsTUFDNUQ7QUFBQSxJQUNGO0FBRUEsV0FBTztBQUFBLE1BQ0w7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0EsY0FBYyxnQkFBZ0I7QUFBQSxNQUM5QjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUlBLGtCQU1FO0FBQ0EsVUFBTSxlQUFlLEtBQUssZ0JBQWdCO0FBQzFDLFVBQU0sT0FBTyxhQUFhLFlBQVk7QUFDdEMsVUFBTSxRQUFRLGFBQWEsU0FBUztBQUNwQyxVQUFNLGNBQWMsSUFBSSxLQUFLLE1BQU0sUUFBUSxHQUFHLENBQUMsRUFBRSxRQUFRO0FBQ3pELFVBQU0sWUFBWSxhQUFhLFFBQVE7QUFFdkMsVUFBTSxhQUFhLEtBQUsscUJBQXFCO0FBQzdDLFVBQU0sVUFBVSxvQkFBSSxJQUFZO0FBQ2hDLFFBQUksZ0JBQWdCO0FBQ3BCLFVBQU0sZUFBdUQsQ0FBQztBQUc5RCxhQUFTLElBQUksR0FBRyxLQUFLLGFBQWEsS0FBSztBQUNyQyxZQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksT0FBTyxRQUFRLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUMzRixVQUFJLFdBQVc7QUFDZixpQkFBVyxZQUFZLFlBQVk7QUFDakMsY0FBTSxRQUFRLEtBQUssMEJBQTBCLFNBQVMsRUFBRTtBQUN4RCxZQUFJLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLFdBQVcsRUFBRSxTQUFTO0FBQUc7QUFBQSxNQUM1RDtBQUNBLFVBQUksV0FBVztBQUFHLGdCQUFRLElBQUksT0FBTztBQUNyQyx1QkFBaUI7QUFDakIsbUJBQWEsS0FBSyxFQUFFLE1BQU0sU0FBUyxPQUFPLFNBQVMsQ0FBQztBQUFBLElBQ3REO0FBR0EsVUFBTSxTQUFxRixDQUFDO0FBQzVGLFFBQUksVUFBVTtBQUNkLGFBQVMsSUFBSSxHQUFHLEtBQUssYUFBYSxLQUFLLEdBQUc7QUFDeEMsWUFBTSxVQUFVLEtBQUssSUFBSSxJQUFJLEdBQUcsV0FBVztBQUMzQyxVQUFJLFlBQVk7QUFDaEIsWUFBTSxRQUFRLG9CQUFJLElBQXNCO0FBQ3hDLGVBQVMsS0FBSyxHQUFHLE1BQU0sU0FBUyxNQUFNO0FBQ3BDLGNBQU0sVUFBVSxHQUFHLElBQUksSUFBSSxPQUFPLFFBQVEsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUMsSUFBSSxPQUFPLEVBQUUsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBQzVGLG1CQUFXLFlBQVksWUFBWTtBQUNqQyxnQkFBTSxRQUFRLEtBQUssMEJBQTBCLFNBQVMsRUFBRTtBQUN4RCxjQUFJLE1BQU0sS0FBSyxDQUFDLE1BQU0sRUFBRSxTQUFTLFdBQVcsRUFBRSxTQUFTLEdBQUc7QUFDeEQ7QUFDQSxrQkFBTSxJQUFJLFNBQVMsV0FBVyxNQUFNLElBQUksU0FBUyxRQUFRLEtBQUssS0FBSyxDQUFDO0FBQUEsVUFDdEU7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUNBLGFBQU8sS0FBSyxFQUFFLE9BQU8sSUFBSSxPQUFPLElBQUksT0FBTyxXQUFXLFlBQVksTUFBTSxDQUFDO0FBQ3pFO0FBQUEsSUFDRjtBQUVBLFdBQU87QUFBQSxNQUNMO0FBQUEsTUFDQSxZQUFZLFFBQVE7QUFBQSxNQUNwQixVQUFVLFlBQVksSUFBSSxLQUFLLE1BQU8sZ0JBQWdCLFlBQWEsRUFBRSxJQUFJLEtBQUs7QUFBQSxNQUM5RTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFJQSxpQkFLRTtBQUNBLFVBQU0sZUFBZSxLQUFLLGdCQUFnQjtBQUMxQyxVQUFNLE9BQU8sYUFBYSxZQUFZO0FBQ3RDLFVBQU0sYUFBYSxLQUFLLHFCQUFxQjtBQUM3QyxVQUFNLGNBQWMsQ0FBQyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sT0FBTyxPQUFPLE9BQU8sS0FBSztBQUV2RyxRQUFJLGdCQUFnQjtBQUNwQixVQUFNLFVBQVUsb0JBQUksSUFBWTtBQUNoQyxVQUFNLGVBQWUsb0JBQUksSUFBc0I7QUFDL0MsVUFBTSxVQUFzRixDQUFDO0FBRTdGLGFBQVMsSUFBSSxHQUFHLElBQUksSUFBSSxLQUFLO0FBQzNCLFlBQU0sY0FBYyxJQUFJLEtBQUssTUFBTSxJQUFJLEdBQUcsQ0FBQyxFQUFFLFFBQVE7QUFDckQsVUFBSSxhQUFhO0FBQ2pCLFlBQU0sUUFBUSxvQkFBSSxJQUFzQjtBQUV4QyxlQUFTLElBQUksR0FBRyxLQUFLLGFBQWEsS0FBSztBQUNyQyxjQUFNLFVBQVUsR0FBRyxJQUFJLElBQUksT0FBTyxJQUFJLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUN2RixtQkFBVyxZQUFZLFlBQVk7QUFDakMsZ0JBQU0sUUFBUSxLQUFLLDBCQUEwQixTQUFTLEVBQUU7QUFDeEQsY0FBSSxNQUFNLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxXQUFXLEVBQUUsU0FBUyxHQUFHO0FBQ3hEO0FBQ0E7QUFDQSxvQkFBUSxJQUFJLE9BQU87QUFDbkIsa0JBQU0sSUFBSSxTQUFTLFdBQVcsTUFBTSxJQUFJLFNBQVMsUUFBUSxLQUFLLEtBQUssQ0FBQztBQUNwRSx5QkFBYSxJQUFJLFNBQVMsV0FBVyxhQUFhLElBQUksU0FBUyxRQUFRLEtBQUssS0FBSyxDQUFDO0FBQUEsVUFDcEY7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUVBLGNBQVEsS0FBSyxFQUFFLE9BQU8sWUFBWSxDQUFDLEdBQUcsT0FBTyxZQUFZLFlBQVksTUFBTSxDQUFDO0FBQUEsSUFDOUU7QUFFQSxXQUFPO0FBQUEsTUFDTDtBQUFBLE1BQ0EsWUFBWSxRQUFRO0FBQUEsTUFDcEI7QUFBQSxNQUNBLHNCQUFzQjtBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUNGOzs7QUNoMEJBLHNCQUFzQjtBQVNmLElBQU0saUJBQU4sTUFBcUI7QUFBQSxFQUsxQixZQUFZLEtBQVUsVUFBd0IsS0FBVztBQUN2RCxTQUFLLE1BQU07QUFDWCxTQUFLLFdBQVc7QUFDaEIsVUFBTSxJQUFJLElBQUksS0FBSyxHQUFHO0FBQ3RCLE1BQUUsU0FBUyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ3JCLFNBQUssUUFBUSxFQUFFLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUFBLEVBQzFDO0FBQUE7QUFBQSxFQUlBLGNBQThCO0FBQzVCLFVBQU0sUUFBd0IsQ0FBQztBQUUvQixRQUFJLEtBQUssU0FBUyxTQUFTLGtCQUFrQjtBQUMzQyxZQUFNLEtBQUssR0FBRyxLQUFLLGtCQUFrQixDQUFDO0FBQUEsSUFDeEM7QUFFQSxRQUFJLEtBQUssU0FBUyxTQUFTLG1CQUFtQjtBQUM1QyxZQUFNLEtBQUssR0FBRyxLQUFLLG9CQUFvQixDQUFDO0FBQUEsSUFDMUM7QUFFQSxRQUFJLEtBQUssU0FBUyxTQUFTLGtCQUFrQjtBQUMzQyxZQUFNLEtBQUssR0FBRyxLQUFLLGNBQWMsQ0FBQztBQUFBLElBQ3BDO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFBQTtBQUFBLEVBSUEsZ0JBQWdCLE9BQXNDO0FBQ3BELFdBQU8sTUFBTSxJQUFJLENBQUMsU0FBUztBQUN6QixZQUFNLFlBQVksS0FBSyxPQUFPLEtBQUssZ0JBQWdCLEtBQUssSUFBSSxJQUFJO0FBQ2hFLFlBQU0saUJBQWlCLEtBQUssWUFBWSxNQUFNO0FBRTlDLGFBQU87QUFBQSxRQUNMLFlBQVksT0FBTyxLQUFLLEVBQUU7QUFBQSxRQUMxQixjQUFjLEtBQUs7QUFBQSxRQUNuQixPQUFPLEtBQUssZUFBZSxLQUFLLE1BQU07QUFBQSxRQUN0QyxVQUFVO0FBQUE7QUFBQSxRQUNWO0FBQUEsUUFDQSxTQUFTLFlBQVk7QUFBQSxRQUNyQixtQkFBbUIsS0FBSyxZQUFZO0FBQUEsUUFDcEMsUUFBUSxLQUFLLE9BQU8sU0FBa0I7QUFBQSxRQUN0QyxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0IsS0FBSztBQUFBLFFBQ3JCLGdCQUFnQixLQUFLO0FBQUEsUUFDckIsVUFBVSxLQUFLO0FBQUEsUUFDZixZQUFZLEtBQUs7QUFBQSxNQUNuQjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBLEVBSVEsb0JBQW9DO0FBQzFDLFVBQU0sU0FBUyxLQUFLLFNBQVMsU0FBUztBQUN0QyxRQUFJLENBQUM7QUFBUSxhQUFPLENBQUM7QUFFckIsVUFBTSxtQkFBbUIsT0FBTyxTQUFTLEdBQUcsSUFBSSxTQUFTLFNBQVM7QUFHbEUsVUFBTSxRQUFRLEtBQUssSUFBSSxNQUFNLGlCQUFpQjtBQUM5QyxVQUFNLFlBQVksTUFBTSxLQUFLLENBQUMsTUFBTTtBQUNsQyxVQUFJLENBQUMsRUFBRSxLQUFLLFdBQVcsZ0JBQWdCLEtBQUssRUFBRSxTQUFTO0FBQVEsZUFBTztBQUN0RSxhQUFPLEVBQUUsYUFBYSxLQUFLO0FBQUEsSUFDN0IsQ0FBQztBQUVELFFBQUksQ0FBQztBQUFXLGFBQU8sQ0FBQztBQUd4QixVQUFNLFFBQVEsS0FBSyxJQUFJLGNBQWMsYUFBYSxTQUFTO0FBQzNELFFBQUksQ0FBQyxPQUFPO0FBQVcsYUFBTyxDQUFDO0FBRS9CLFVBQU0sUUFBd0IsQ0FBQztBQUUvQixlQUFXLFlBQVksTUFBTSxXQUFXO0FBQ3RDLFVBQUksU0FBUyxTQUFTO0FBQVc7QUFFakMsWUFBTSxZQUFZLFNBQVMsU0FBUyxNQUFNO0FBRzFDLFlBQU0sVUFBVSxLQUFLLGVBQWUsV0FBVyxTQUFTO0FBQ3hELFVBQUksQ0FBQztBQUFTO0FBRWQsWUFBTSxTQUFTLEtBQUssY0FBYyxPQUFPO0FBQ3pDLFVBQUksQ0FBQztBQUFRO0FBRWIsWUFBTSxLQUFLO0FBQUEsUUFDVCxJQUFJLE1BQU0sVUFBVSxJQUFJLEtBQUssU0FBUztBQUFBLFFBQ3RDLE9BQU8sT0FBTztBQUFBLFFBQ2QsUUFBUTtBQUFBLFFBQ1IsTUFBTSxLQUFLO0FBQUEsUUFDWCxNQUFNLE9BQU87QUFBQSxRQUNiLFVBQVUsT0FBTztBQUFBLFFBQ2pCLE1BQU0sU0FBUyxTQUFTLE9BQU8sU0FBUyxTQUFTO0FBQUEsUUFDakQsVUFBVSxVQUFVO0FBQUEsUUFDcEIsWUFBWTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0g7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFHUSxjQUFjLE1BQTBFO0FBRTlGLFVBQU0sUUFBUSxLQUFLLE1BQU0sd0JBQXdCO0FBQ2pELFFBQUksQ0FBQztBQUFPLGFBQU87QUFFbkIsUUFBSSxPQUFPLE1BQU0sQ0FBQyxFQUFFLEtBQUs7QUFHekIsUUFBSTtBQUNKLFVBQU0sWUFBWSxLQUFLLE1BQU0sc0JBQXNCO0FBQ25ELFFBQUksV0FBVztBQUNiLGFBQU8sR0FBRyxVQUFVLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksVUFBVSxDQUFDLENBQUM7QUFDdkQsYUFBTyxLQUFLLFFBQVEsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUs7QUFBQSxJQUM3QyxPQUFPO0FBRUwsWUFBTSxhQUFhLEtBQUssTUFBTSwwQkFBMEI7QUFDeEQsVUFBSSxZQUFZO0FBQ2QsWUFBSSxPQUFPLFNBQVMsV0FBVyxDQUFDLENBQUM7QUFDakMsY0FBTSxTQUFTLFdBQVcsQ0FBQyxHQUFHLFlBQVk7QUFDMUMsWUFBSSxXQUFXLFFBQVEsT0FBTztBQUFJLGtCQUFRO0FBQzFDLFlBQUksV0FBVyxRQUFRLFNBQVM7QUFBSSxpQkFBTztBQUMzQyxlQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUN2QyxlQUFPLEtBQUssUUFBUSxXQUFXLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSztBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUdBLFFBQUk7QUFDSixVQUFNLGdCQUFnQixLQUFLLE1BQU0sMkNBQTJDO0FBQzVFLFFBQUksZUFBZTtBQUNqQixZQUFNLFFBQVEsV0FBVyxjQUFjLENBQUMsQ0FBQztBQUN6QyxZQUFNLE9BQU8sY0FBYyxDQUFDLEVBQUUsWUFBWTtBQUMxQyxpQkFBVyxLQUFLLFdBQVcsR0FBRyxJQUFJLEtBQUssTUFBTSxRQUFRLEVBQUUsSUFBSSxLQUFLLE1BQU0sS0FBSztBQUMzRSxhQUFPLEtBQUssUUFBUSxjQUFjLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSztBQUFBLElBQ2pEO0FBR0EsVUFBTSxRQUFRLEtBQUssUUFBUSxRQUFRLEdBQUcsRUFBRSxLQUFLO0FBQzdDLFFBQUksQ0FBQztBQUFPLGFBQU87QUFFbkIsV0FBTyxFQUFFLE9BQU8sTUFBTSxTQUFTO0FBQUEsRUFDakM7QUFBQSxFQUVRLGVBQWUsTUFBYSxZQUFtQztBQUVyRSxVQUFNLFFBQVEsS0FBSyxJQUFJLGNBQWMsYUFBYSxJQUFJO0FBQ3RELFFBQUksQ0FBQztBQUFPLGFBQU87QUFRbkIsV0FBTztBQUFBLEVBQ1Q7QUFBQTtBQUFBLEVBR0EsNkJBQTZCLFNBQWlCLFVBQWtDO0FBQzlFLFVBQU0sUUFBUSxRQUFRLE1BQU0sSUFBSTtBQUNoQyxVQUFNLFFBQXdCLENBQUM7QUFFL0IsYUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxZQUFNLE9BQU8sTUFBTSxDQUFDO0FBRXBCLFVBQUksQ0FBQyxtQkFBbUIsS0FBSyxJQUFJO0FBQUc7QUFFcEMsWUFBTSxTQUFTLEtBQUssY0FBYyxJQUFJO0FBQ3RDLFVBQUksQ0FBQztBQUFRO0FBRWIsWUFBTSxTQUFTLG1CQUFtQixLQUFLLElBQUk7QUFFM0MsWUFBTSxLQUFLO0FBQUEsUUFDVCxJQUFJLE1BQU0sUUFBUSxLQUFLLENBQUM7QUFBQSxRQUN4QixPQUFPLE9BQU87QUFBQSxRQUNkLFFBQVE7QUFBQSxRQUNSLE1BQU0sS0FBSztBQUFBLFFBQ1gsTUFBTSxPQUFPO0FBQUEsUUFDYixVQUFVLE9BQU87QUFBQSxRQUNqQixNQUFNO0FBQUEsUUFDTjtBQUFBLFFBQ0EsWUFBWTtBQUFBLE1BQ2QsQ0FBQztBQUFBLElBQ0g7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFJUSxzQkFBc0M7QUFFNUMsVUFBTSxjQUFlLEtBQUssSUFBWSxTQUFTLFVBQVUsdUJBQXVCO0FBQ2hGLFFBQUksQ0FBQztBQUFhLGFBQU8sQ0FBQztBQUkxQixVQUFNLFFBQXdCLENBQUM7QUFDL0IsVUFBTSxRQUFRLEtBQUssSUFBSSxNQUFNLGlCQUFpQjtBQUU5QyxlQUFXLFFBQVEsT0FBTztBQUN4QixZQUFNLFFBQVEsS0FBSyxJQUFJLGNBQWMsYUFBYSxJQUFJO0FBQ3RELFVBQUksQ0FBQyxPQUFPO0FBQVc7QUFFdkIsaUJBQVcsWUFBWSxNQUFNLFdBQVc7QUFDdEMsWUFBSSxTQUFTLFNBQVM7QUFBVztBQUFBLE1BUW5DO0FBQUEsSUFDRjtBQUVBLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQSxFQUdBLDZCQUE2QixPQUE0RDtBQUN2RixVQUFNLFFBQXdCLENBQUM7QUFFL0IsZUFBVyxRQUFRLE9BQU87QUFDeEIsWUFBTSxRQUFRLEtBQUssUUFBUSxNQUFNLElBQUk7QUFFckMsZUFBUyxJQUFJLEdBQUcsSUFBSSxNQUFNLFFBQVEsS0FBSztBQUNyQyxjQUFNLE9BQU8sTUFBTSxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxtQkFBbUIsS0FBSyxJQUFJO0FBQUc7QUFHcEMsY0FBTSxXQUFXLEtBQUssTUFBTSxrQ0FBa0M7QUFDOUQsWUFBSSxDQUFDLFlBQVksU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFPO0FBRTdDLGNBQU0sU0FBUyxLQUFLLGNBQWMsSUFBSTtBQUN0QyxZQUFJLENBQUM7QUFBUTtBQUdiLGNBQU0saUJBQWlCLEtBQUssTUFBTSwrQkFBK0I7QUFDakUsWUFBSSxrQkFBa0IsZUFBZSxDQUFDLE1BQU0sS0FBSztBQUFPO0FBRXhELGNBQU0sU0FBUyxtQkFBbUIsS0FBSyxJQUFJO0FBRTNDLGNBQU0sS0FBSztBQUFBLFVBQ1QsSUFBSSxNQUFNLEtBQUssSUFBSSxLQUFLLENBQUM7QUFBQSxVQUN6QixPQUFPLE9BQU8sTUFBTSxRQUFRLDJDQUEyQyxFQUFFLEVBQUUsS0FBSztBQUFBLFVBQ2hGLFFBQVE7QUFBQSxVQUNSLE1BQU0sS0FBSztBQUFBLFVBQ1gsTUFBTSxPQUFPO0FBQUEsVUFDYixVQUFVLE9BQU87QUFBQSxVQUNqQixNQUFNO0FBQUEsVUFDTixVQUFVLEtBQUs7QUFBQSxVQUNmLFlBQVk7QUFBQSxRQUNkLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRjtBQUVBLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQSxFQUlRLGdCQUFnQztBQUN0QyxXQUFPLEtBQUssU0FBUyxTQUFTLFdBQzNCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyxLQUFLLEtBQUssRUFDckMsSUFBSSxDQUFDLFFBQVE7QUFBQSxNQUNaLElBQUksTUFBTSxHQUFHLEVBQUU7QUFBQSxNQUNmLE9BQU8sR0FBRztBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsTUFBTSxHQUFHO0FBQUEsTUFDVCxNQUFNLEdBQUc7QUFBQSxNQUNULFVBQVUsR0FBRztBQUFBLE1BQ2IsTUFBTSxHQUFHO0FBQUEsSUFDWCxFQUFFO0FBQUEsRUFDTjtBQUFBO0FBQUE7QUFBQSxFQUtBLE1BQU0sb0JBQW9CLFVBQWtCLFlBQW9CLE1BQThCO0FBQzVGLFVBQU0sT0FBTyxLQUFLLElBQUksTUFBTSxzQkFBc0IsUUFBUTtBQUMxRCxRQUFJLENBQUMsUUFBUSxFQUFFLGdCQUFnQjtBQUFRO0FBRXZDLFVBQU0sVUFBVSxNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSTtBQUM5QyxVQUFNLFFBQVEsUUFBUSxNQUFNLElBQUk7QUFFaEMsUUFBSSxjQUFjLE1BQU07QUFBUTtBQUVoQyxVQUFNLE9BQU8sTUFBTSxVQUFVO0FBQzdCLFFBQUksTUFBTTtBQUNSLFlBQU0sVUFBVSxJQUFJLEtBQUssUUFBUSxTQUFTLEtBQUs7QUFBQSxJQUNqRCxPQUFPO0FBQ0wsWUFBTSxVQUFVLElBQUksS0FBSyxRQUFRLFNBQVMsS0FBSztBQUFBLElBQ2pEO0FBRUEsVUFBTSxLQUFLLElBQUksTUFBTSxPQUFPLE1BQU0sTUFBTSxLQUFLLElBQUksQ0FBQztBQUFBLEVBQ3BEO0FBQUE7QUFBQSxFQUdBLE1BQU0sc0JBQXNCLFVBQWtCLFlBQW9CLE1BQThCO0FBRTlGLFVBQU0sS0FBSyxvQkFBb0IsVUFBVSxZQUFZLElBQUk7QUFBQSxFQUMzRDtBQUFBO0FBQUEsRUFHQSxNQUFNLGFBQWEsTUFBbUM7QUFDcEQsVUFBTSxXQUFXLElBQUksS0FBSyxLQUFLLEtBQUs7QUFDcEMsYUFBUyxRQUFRLFNBQVMsUUFBUSxJQUFJLENBQUM7QUFDdkMsVUFBTSxjQUFjLFNBQVMsWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBRXRELFFBQUksS0FBSyxXQUFXLGNBQWM7QUFFaEMsWUFBTSxLQUFLLEtBQUssU0FBUyxTQUFTLFdBQVc7QUFBQSxRQUMzQyxDQUFDLE1BQU0sTUFBTSxFQUFFLEVBQUUsT0FBTyxLQUFLLE1BQU0sRUFBRSxPQUFPLEtBQUssR0FBRyxRQUFRLE9BQU8sRUFBRTtBQUFBLE1BQ3ZFO0FBQ0EsVUFBSSxJQUFJO0FBQ04sV0FBRyxnQkFBZ0IsR0FBRyxpQkFBaUIsR0FBRztBQUMxQyxXQUFHLE9BQU87QUFBQSxNQUNaO0FBQUEsSUFDRixXQUFXLEtBQUssV0FBVyxnQkFBZ0IsS0FBSyxhQUFhLFVBQWEsS0FBSyxlQUFlLFFBQVc7QUFFdkcsWUFBTSxPQUFPLEtBQUssSUFBSSxNQUFNLHNCQUFzQixLQUFLLFFBQVE7QUFDL0QsVUFBSSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0I7QUFBUTtBQUV2QyxZQUFNLFVBQVUsTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUk7QUFDOUMsWUFBTSxRQUFRLFFBQVEsTUFBTSxJQUFJO0FBQ2hDLFVBQUksS0FBSyxjQUFjLE1BQU07QUFBUTtBQUdyQyxZQUFNLFdBQVcsTUFBTSxLQUFLLFVBQVU7QUFDdEMsWUFBTSxPQUFPLEtBQUssWUFBWSxDQUFDO0FBQy9CLFlBQU0sS0FBSyxJQUFJLE1BQU0sT0FBTyxNQUFNLE1BQU0sS0FBSyxJQUFJLENBQUM7QUFHbEQsWUFBTSxTQUFTLEtBQUssU0FBUyxTQUFTO0FBQ3RDLFlBQU0sbUJBQW1CLE9BQU8sU0FBUyxHQUFHLElBQUksU0FBUyxTQUFTO0FBQ2xFLFlBQU0sZUFBZSxHQUFHLGdCQUFnQixHQUFHLFdBQVc7QUFFdEQsWUFBTSxlQUFlLEtBQUssSUFBSSxNQUFNLHNCQUFzQixZQUFZO0FBQ3RFLFVBQUksZ0JBQWdCLHdCQUF3Qix1QkFBTztBQUNqRCxjQUFNLGtCQUFrQixNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssWUFBWTtBQUM5RCxjQUFNLEtBQUssSUFBSSxNQUFNLE9BQU8sY0FBYyxrQkFBa0IsT0FBTyxRQUFRO0FBQUEsTUFDN0UsT0FBTztBQUNMLFlBQUk7QUFDRixnQkFBTSxLQUFLLElBQUksTUFBTSxPQUFPLGNBQWM7QUFBQTtBQUFBO0FBQUEsRUFBZSxRQUFRO0FBQUEsQ0FBSTtBQUFBLFFBQ3ZFLFFBQVE7QUFBQSxRQUEwQjtBQUFBLE1BQ3BDO0FBQUEsSUFDRixXQUFXLEtBQUssV0FBVyxrQkFBa0IsS0FBSyxhQUFhLFVBQWEsS0FBSyxlQUFlLFFBQVc7QUFFekcsWUFBTSxPQUFPLEtBQUssSUFBSSxNQUFNLHNCQUFzQixLQUFLLFFBQVE7QUFDL0QsVUFBSSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0I7QUFBUTtBQUV2QyxZQUFNLFVBQVUsTUFBTSxLQUFLLElBQUksTUFBTSxLQUFLLElBQUk7QUFDOUMsWUFBTSxRQUFRLFFBQVEsTUFBTSxJQUFJO0FBRWhDLFVBQUksS0FBSyxhQUFhLE1BQU0sUUFBUTtBQUNsQyxjQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sS0FBSyxVQUFVLEVBQUU7QUFBQSxVQUM5QztBQUFBLFVBQ0EsYUFBYSxXQUFXO0FBQUEsUUFDMUI7QUFDQSxjQUFNLEtBQUssSUFBSSxNQUFNLE9BQU8sTUFBTSxNQUFNLEtBQUssSUFBSSxDQUFDO0FBQUEsTUFDcEQ7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFJUSxnQkFBZ0IsTUFBc0I7QUFDNUMsVUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssTUFBTSxHQUFHLEVBQUUsSUFBSSxNQUFNO0FBQ3pDLFdBQU8sS0FBSyxLQUFLLEtBQUs7QUFBQSxFQUN4QjtBQUFBLEVBRVEsZUFBZSxRQUFvQztBQUN6RCxZQUFRLFFBQVE7QUFBQSxNQUNkLEtBQUs7QUFBYyxlQUFPO0FBQUEsTUFDMUIsS0FBSztBQUFnQixlQUFPO0FBQUEsTUFDNUIsS0FBSztBQUFjLGVBQU87QUFBQSxJQUM1QjtBQUFBLEVBQ0Y7QUFDRjs7O0FDMVlPLFNBQVMsZUFDZCxXQUNBLFVBQ0EsUUFDQSxjQUNNO0FBQ04sUUFBTSxPQUFPLFVBQVUsVUFBVSxFQUFFLEtBQUssWUFBWSxDQUFDO0FBQ3JELE9BQUssTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLENBQUM7QUFHbEQsTUFBSSxTQUFTLGdCQUFnQjtBQUMzQixVQUFNLEtBQUssS0FBSyxVQUFVLEVBQUUsS0FBSyxlQUFlLENBQUM7QUFDakQsVUFBTSxZQUFZLFNBQVM7QUFDM0IsT0FBRyxNQUFNLGtCQUFrQixRQUFRLFNBQVM7QUFBQSxFQUM5QztBQUdBLE9BQUssVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFHM0MsUUFBTSxVQUFVLEtBQUssVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFHM0QsUUFBTSxXQUFXLFlBQVksUUFBUTtBQUNyQyxVQUFRLFNBQVMsT0FBTztBQUFBLElBQ3RCLEtBQUs7QUFBQSxJQUNMLE1BQU0sR0FBRyxRQUFRLEtBQUssU0FBUyxRQUFRO0FBQUEsRUFDekMsQ0FBQztBQUdELFFBQU0sV0FBVyxZQUFZLFVBQVUsTUFBTTtBQUM3QyxVQUFRLFNBQVMsT0FBTztBQUFBLElBQ3RCLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxFQUNSLENBQUM7QUFHRCxRQUFNLFFBQVEsT0FBTyxnQkFBZ0I7QUFDckMsUUFBTSxXQUFXLE9BQU8sbUJBQW1CO0FBQzNDLFFBQU0sUUFBUSxRQUFRLFVBQVUsRUFBRSxLQUFLLHVCQUF1QixDQUFDO0FBQy9ELFFBQU0sU0FBUyxRQUFRO0FBQUEsSUFDckIsS0FBSztBQUFBLElBQ0wsTUFBTSxHQUFHLEtBQUssU0FBTSxRQUFRLFFBQVEsQ0FBQztBQUFBLEVBQ3ZDLENBQUM7QUFHRCxRQUFNLFVBQVUsS0FBSyxVQUFVLEVBQUUsS0FBSyxvQkFBb0IsQ0FBQztBQUUzRCxRQUFNLGNBQWMsUUFBUSxTQUFTLFVBQVU7QUFBQSxJQUM3QyxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsY0FBWSxpQkFBaUIsU0FBUyxNQUFNO0FBRTFDLFVBQU0sYUFBYSxVQUFVLGNBQWMsWUFBWTtBQUN2RCxRQUFJO0FBQVksaUJBQVcsZUFBZSxFQUFFLFVBQVUsU0FBUyxDQUFDO0FBQUEsRUFDbEUsQ0FBQztBQUVELFFBQU0sYUFBYSxRQUFRLFNBQVMsVUFBVTtBQUFBLElBQzVDLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxFQUNSLENBQUM7QUFDRCxhQUFXLGlCQUFpQixTQUFTLE1BQU07QUFFekMsVUFBTSxlQUFlLFVBQVUsY0FBYyxhQUFhO0FBQzFELFFBQUk7QUFBYyxtQkFBYSxlQUFlLEVBQUUsVUFBVSxTQUFTLENBQUM7QUFBQSxFQUN0RSxDQUFDO0FBQ0g7QUFFQSxTQUFTLFlBQVksVUFBZ0M7QUFDbkQsUUFBTSxTQUFTLFNBQVMsVUFBVTtBQUNsQyxRQUFNLE1BQU0sU0FBUyxnQkFBZ0IsSUFBSSxLQUFLLFNBQVMsYUFBYSxJQUFJLG9CQUFJLEtBQUs7QUFDakYsUUFBTSxPQUFPLElBQUksU0FBUztBQUUxQixNQUFJLFFBQVEsS0FBSyxPQUFPO0FBQUksV0FBTyxPQUFPLG9CQUFvQjtBQUM5RCxNQUFJLFFBQVEsTUFBTSxPQUFPO0FBQUksV0FBTyxPQUFPLHNCQUFzQjtBQUNqRSxNQUFJLFFBQVEsTUFBTSxPQUFPO0FBQUksV0FBTyxPQUFPLG9CQUFvQjtBQUMvRCxTQUFPLE9BQU8sa0JBQWtCO0FBQ2xDO0FBRUEsU0FBUyxZQUFZLFVBQXdCLFFBQTRCO0FBQ3ZFLFFBQU0sYUFBYSxJQUFJLFdBQVcsUUFBUTtBQUcxQyxNQUFJLFNBQVMsWUFBWTtBQUN2QixXQUFPO0FBQUEsRUFDVDtBQUdBLE1BQUksV0FBVyxhQUFhLEdBQUc7QUFDN0IsV0FBTztBQUFBLEVBQ1Q7QUFHQSxRQUFNLFNBQVMsT0FBTyxpQkFBaUI7QUFDdkMsTUFBSSxVQUFVLEdBQUc7QUFDZixXQUFPLEdBQUcsTUFBTTtBQUFBLEVBQ2xCO0FBR0EsU0FBTztBQUNUOzs7QUN0R0EsSUFBTSxpQkFBMkM7QUFBQSxFQUMvQyxNQUFNO0FBQUE7QUFBQSxFQUNOLE1BQU07QUFBQTtBQUFBLEVBQ04sUUFBUTtBQUFBO0FBQ1Y7QUFFQSxJQUFNLGlCQUFpQjtBQUVoQixTQUFTLG9CQUNkLFdBQ0EsVUFDQSxRQUNBLGNBQ007QUFFTix1QkFBcUIsV0FBVyxVQUFVLFFBQVEsWUFBWTtBQUc5RCxrQkFBZ0IsV0FBVyxRQUFRLGVBQWUsQ0FBQztBQUduRCx1QkFBcUIsV0FBVyxVQUFVLFFBQVEsZUFBZSxDQUFDO0FBQ3BFO0FBSUEsU0FBUyxxQkFDUCxXQUNBLFVBQ0EsUUFDQSxjQUNNO0FBQ04sUUFBTSxPQUFPLFVBQVUsVUFBVSxFQUFFLEtBQUssWUFBWSxDQUFDO0FBQ3JELE9BQUssTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLENBQUM7QUFHbEQsUUFBTSxTQUFTLEtBQUssVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFDL0QsUUFBTSxXQUFXLE9BQU8sbUJBQW1CO0FBRTNDLFNBQU8sU0FBUyxPQUFPO0FBQUEsSUFDckIsS0FBSztBQUFBLElBQ0wsTUFBTSxjQUFjLFFBQVEsUUFBUSxDQUFDO0FBQUEsRUFDdkMsQ0FBQztBQUVELFFBQU0sVUFBVSxPQUFPLHFCQUFxQixFQUFFLE9BQU8sQ0FBQyxLQUFLLE9BQU8sTUFBTSxHQUFHLElBQUksQ0FBQztBQUNoRixTQUFPLFNBQVMsT0FBTztBQUFBLElBQ3JCLEtBQUs7QUFBQSxJQUNMLE1BQU0sR0FBRyxPQUFPO0FBQUEsRUFDbEIsQ0FBQztBQUdELFFBQU0sV0FBVyxPQUFPLHNCQUFzQjtBQUM5QyxRQUFNLGlCQUFpQixLQUFLLE1BQU0sV0FBVyxjQUFjO0FBQzNELFFBQU0sYUFBYSxXQUFXLGlCQUFpQjtBQUUvQyxRQUFNLFdBQVcsS0FBSyxVQUFVLEVBQUUsS0FBSywyQkFBMkIsQ0FBQztBQUVuRSxXQUFTLElBQUksR0FBRyxJQUFJLGdCQUFnQixLQUFLO0FBQ3ZDLFFBQUksTUFBTTtBQUNWLFFBQUksSUFBSSxnQkFBZ0I7QUFDdEIsYUFBTztBQUFBLElBQ1QsV0FBVyxNQUFNLGtCQUFrQixZQUFZO0FBQzdDLGFBQU87QUFBQSxJQUNUO0FBQ0EsYUFBUyxVQUFVLEVBQUUsSUFBSSxDQUFDO0FBQUEsRUFDNUI7QUFHQSxRQUFNLFVBQVUsT0FBTyxXQUFXO0FBQ2xDLE9BQUssU0FBUyxPQUFPO0FBQUEsSUFDbkIsS0FBSztBQUFBLElBQ0wsTUFBTSxXQUFXLFFBQVEsUUFBUSxNQUFNLENBQUMsS0FBSyxRQUFRLElBQUk7QUFBQSxFQUMzRCxDQUFDO0FBQ0g7QUFJQSxTQUFTLGdCQUNQLFdBQ0EsUUFDQSxjQUNNO0FBQ04sUUFBTSxPQUFPLFVBQVUsVUFBVSxFQUFFLEtBQUssa0JBQWtCLENBQUM7QUFDM0QsT0FBSyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksQ0FBQztBQUVsRCxRQUFNLGFBQWEsT0FBTyxvQkFBb0I7QUFDOUMsUUFBTSxTQUFTLE9BQU8saUJBQWlCO0FBQ3ZDLFFBQU0sV0FBVyxPQUFPLGtCQUFrQjtBQUcxQyxpQkFBZSxNQUFNLGFBQWEsWUFBWSxZQUFZO0FBRzFELGlCQUFlLE1BQU0sYUFBYSxRQUFRLFVBQVUsTUFBTTtBQUcxRCxpQkFBZSxNQUFNLFVBQVksVUFBVSxhQUFhO0FBQzFEO0FBRUEsU0FBUyxlQUNQLFFBQ0EsTUFDQSxPQUNBLE9BQ0EsWUFDTTtBQUNOLFFBQU0sT0FBTyxPQUFPLFVBQVUsRUFBRSxLQUFLLGlCQUFpQixDQUFDO0FBRXZELE9BQUssU0FBUyxPQUFPLEVBQUUsS0FBSyx1QkFBdUIsTUFBTSxLQUFLLENBQUM7QUFDL0QsT0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLHdCQUF3QixNQUFNLE9BQU8sS0FBSyxFQUFFLENBQUM7QUFDekUsT0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLHdCQUF3QixNQUFNLE1BQU0sQ0FBQztBQUdqRSxNQUFJLGVBQWUsUUFBVztBQUM1QixVQUFNLE9BQU8sS0FBSyxVQUFVLEVBQUUsS0FBSyxzQkFBc0IsQ0FBQztBQUMxRCxhQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsS0FBSztBQUMxQixVQUFJLE1BQU07QUFDVixVQUFJLElBQUksWUFBWTtBQUNsQixlQUFPO0FBQUEsTUFDVDtBQUNBLFdBQUssVUFBVSxFQUFFLElBQUksQ0FBQztBQUFBLElBQ3hCO0FBQUEsRUFDRjtBQUNGO0FBSUEsU0FBUyxxQkFDUCxXQUNBLFVBQ0EsUUFDQSxjQUNNO0FBQ04sUUFBTSxPQUFPLFVBQVUsVUFBVSxFQUFFLEtBQUssWUFBWSxDQUFDO0FBQ3JELE9BQUssTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLENBQUM7QUFHbEQsUUFBTSxRQUFRLE9BQU8sZ0JBQWdCO0FBQ3JDLE9BQUssU0FBUyxPQUFPLEVBQUUsS0FBSyxzQkFBc0IsTUFBTSxNQUFNLENBQUM7QUFHL0QsT0FBSyxVQUFVLEVBQUUsS0FBSyxlQUFlLENBQUM7QUFHdEMsUUFBTSxPQUFPLEtBQUssVUFBVSxFQUFFLEtBQUssdUJBQXVCLENBQUM7QUFFM0QsUUFBTSxhQUFpRDtBQUFBLElBQ3JELEVBQUUsS0FBSyxRQUFRLE9BQU8sT0FBTztBQUFBLElBQzdCLEVBQUUsS0FBSyxRQUFRLE9BQU8sT0FBTztBQUFBLElBQzdCLEVBQUUsS0FBSyxVQUFVLE9BQU8sU0FBUztBQUFBLEVBQ25DO0FBRUEsYUFBVyxPQUFPLFlBQVk7QUFDNUIsVUFBTSxRQUFRLE9BQU8saUJBQWlCLElBQUksR0FBRztBQUM3QyxVQUFNLFFBQVEsU0FBUyxlQUFlLElBQUksR0FBRztBQUU3QyxVQUFNLE1BQU0sS0FBSyxVQUFVLEVBQUUsS0FBSyxvQkFBb0IsQ0FBQztBQUd2RCxVQUFNLFVBQVUsSUFBSSxVQUFVLEVBQUUsS0FBSyxxQkFBcUIsQ0FBQztBQUMzRCxZQUFRLE1BQU0sYUFBYSxHQUFHLEtBQUs7QUFDbkMsWUFBUSxjQUFjLGVBQWUsSUFBSSxHQUFHO0FBRzVDLFVBQU0sT0FBTyxJQUFJLFVBQVUsRUFBRSxLQUFLLHFCQUFxQixDQUFDO0FBR3hELFVBQU0sVUFBVSxLQUFLLFVBQVUsRUFBRSxLQUFLLHlCQUF5QixDQUFDO0FBQ2hFLFlBQVEsU0FBUyxRQUFRLEVBQUUsS0FBSyxzQkFBc0IsTUFBTSxJQUFJLE1BQU0sQ0FBQztBQUN2RSxZQUFRLFNBQVMsUUFBUTtBQUFBLE1BQ3ZCLEtBQUs7QUFBQSxNQUNMLE1BQU0sTUFBTSxNQUFNLEtBQUssU0FBTSxNQUFNLGNBQWM7QUFBQSxJQUNuRCxDQUFDO0FBR0QsVUFBTSxNQUFNLEtBQUssVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFDdkQsVUFBTSxPQUFPLElBQUksVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFDNUQsU0FBSyxNQUFNLFFBQVEsR0FBRyxNQUFNLGNBQWM7QUFDMUMsU0FBSyxNQUFNLGFBQWE7QUFBQSxFQUMxQjtBQUNGOzs7QUNwTE8sU0FBUyxvQkFDZCxXQUNBLFVBQ0EsUUFDQSxjQUNBLGtCQUNNO0FBQ04sUUFBTSxhQUFhLE9BQU8sY0FBYztBQUN4QyxNQUFJLENBQUM7QUFBWTtBQUVqQixRQUFNLFFBQVEsU0FBUyxVQUFVLE9BQU8sbUJBQW1CO0FBQzNELFFBQU0sYUFBYSxTQUFTLFVBQVUsT0FBTyxtQkFBbUI7QUFDaEUsUUFBTSxjQUFjLFNBQVMsVUFBVSxPQUFPLFdBQVc7QUFHekQsUUFBTSxVQUFVLFVBQVUsVUFBVSxFQUFFLEtBQUsscUJBQXFCLENBQUM7QUFDakUsVUFBUSxTQUFTLE9BQU8sRUFBRSxLQUFLLGdCQUFnQixNQUFNLE1BQU0sQ0FBQztBQUc1RCxRQUFNLE9BQU8sVUFBVSxVQUFVLEVBQUUsS0FBSywyQkFBMkIsQ0FBQztBQUNwRSxPQUFLLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxDQUFDO0FBR2xELFFBQU0sU0FBUyxLQUFLLFVBQVUsRUFBRSxLQUFLLHdCQUF3QixDQUFDO0FBQzlELFNBQU8sU0FBUyxPQUFPLEVBQUUsS0FBSyxnQkFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFM0QsUUFBTSxRQUFRLE9BQU8sVUFBVSxFQUFFLEtBQUssdUJBQXVCLENBQUM7QUFDOUQsUUFBTSxNQUFNLGFBQWEsY0FBYyxXQUFXLE1BQU07QUFHeEQsT0FBSyxTQUFTLE9BQU87QUFBQSxJQUNuQixLQUFLO0FBQUEsSUFDTCxNQUFNLEdBQUcsV0FBVyxLQUFLLElBQUksV0FBVyxZQUFZO0FBQUEsRUFDdEQsQ0FBQztBQUVELFFBQU0sY0FBYyxXQUFXLG9CQUFvQixNQUMvQyxHQUFHLFdBQVcsaUJBQWlCLG9CQUMvQjtBQUVKLE9BQUssU0FBUyxPQUFPLEVBQUUsS0FBSywwQkFBMEIsTUFBTSxZQUFZLENBQUM7QUFHekUsUUFBTSxVQUFVLEtBQUssVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFFaEUsUUFBTSxXQUFXLFFBQVEsU0FBUyxVQUFVO0FBQUEsSUFDMUMsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUNELFdBQVMsaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3hDLE1BQUUsZ0JBQWdCO0FBQ2xCLHVCQUFtQixXQUFXLFVBQVU7QUFBQSxFQUMxQyxDQUFDO0FBRUQsUUFBTSxZQUFZLFFBQVEsU0FBUyxVQUFVO0FBQUEsSUFDM0MsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUNELFlBQVUsaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3pDLE1BQUUsZ0JBQWdCO0FBRWxCLFNBQUssTUFBTSxVQUFVO0FBQ3JCLFNBQUssTUFBTSxZQUFZO0FBQ3ZCLFNBQUssTUFBTSxhQUFhO0FBQ3hCLGVBQVcsTUFBTTtBQUNmLFdBQUssTUFBTSxVQUFVO0FBQUEsSUFDdkIsR0FBRyxHQUFHO0FBQUEsRUFDUixDQUFDO0FBR0QsT0FBSyxpQkFBaUIsU0FBUyxNQUFNO0FBQ25DLDBCQUFzQixXQUFXLFVBQVUsWUFBWSxZQUFZLGFBQWEsZ0JBQWdCO0FBQUEsRUFDbEcsQ0FBQztBQUNIO0FBRUEsU0FBUyxzQkFDUCxXQUNBLFVBQ0EsWUFDQSxZQUNBLGFBQ0Esa0JBQ007QUFFTixRQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsVUFBUSxZQUFZO0FBRXBCLFFBQU0sUUFBUSxRQUFRLFVBQVUsRUFBRSxLQUFLLGFBQWEsQ0FBQztBQUdyRCxRQUFNLFVBQVUsRUFBRSxLQUFLLG9CQUFvQixDQUFDO0FBRzVDLFFBQU0sU0FBUyxPQUFPO0FBQUEsSUFDcEIsS0FBSztBQUFBLElBQ0wsTUFBTSxTQUFTLFVBQVUsT0FBTyxtQkFBbUI7QUFBQSxFQUNyRCxDQUFDO0FBR0QsUUFBTSxTQUFTLE9BQU87QUFBQSxJQUNwQixLQUFLO0FBQUEsSUFDTCxNQUFNLEVBQUUsT0FBTyx1Q0FBdUM7QUFBQSxJQUN0RCxNQUFNLEdBQUcsV0FBVyxLQUFLLElBQUksV0FBVyxZQUFZO0FBQUEsRUFDdEQsQ0FBQztBQUdELFFBQU0sY0FBYyxXQUFXLG9CQUFvQixNQUMvQyxHQUFHLFdBQVcsaUJBQWlCLHlEQUMvQjtBQUVKLFFBQU0sU0FBUyxPQUFPO0FBQUEsSUFDcEIsS0FBSztBQUFBLElBQ0wsTUFBTSxFQUFFLE9BQU8sdUJBQXVCO0FBQUEsSUFDdEMsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUdELFFBQU0sU0FBUyxPQUFPO0FBQUEsSUFDcEIsS0FBSztBQUFBLElBQ0wsTUFBTSxJQUFJLFdBQVcsUUFBUTtBQUFBLEVBQy9CLENBQUM7QUFHRCxRQUFNLFFBQVEsZ0JBQWdCLEtBQUssTUFBTSxLQUFLLE9BQU8sSUFBSSxnQkFBZ0IsTUFBTSxDQUFDO0FBQ2hGLFFBQU0sZUFBZSxNQUFNLFVBQVUsRUFBRSxLQUFLLG1CQUFtQixDQUFDO0FBQ2hFLGVBQWEsU0FBUyxPQUFPO0FBQUEsSUFDM0IsTUFBTSxJQUFJLE1BQU0sSUFBSTtBQUFBLElBQ3BCLE1BQU0sRUFBRSxPQUFPLHNCQUFzQjtBQUFBLEVBQ3ZDLENBQUM7QUFDRCxlQUFhLFNBQVMsT0FBTztBQUFBLElBQzNCLEtBQUs7QUFBQSxJQUNMLE1BQU0sVUFBSyxNQUFNLFdBQVc7QUFBQSxFQUM5QixDQUFDO0FBR0QsUUFBTSxVQUFVLE1BQU0sVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFDakUsVUFBUSxNQUFNLFlBQVk7QUFDMUIsVUFBUSxNQUFNLGlCQUFpQjtBQUUvQixRQUFNLFdBQVcsUUFBUSxTQUFTLFVBQVU7QUFBQSxJQUMxQyxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsV0FBUyxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDeEMsTUFBRSxnQkFBZ0I7QUFDbEIsZUFBVztBQUNYLHVCQUFtQixXQUFXLFVBQVU7QUFBQSxFQUMxQyxDQUFDO0FBRUQsUUFBTSxZQUFZLFFBQVEsU0FBUyxVQUFVO0FBQUEsSUFDM0MsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUNELFlBQVUsaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3pDLE1BQUUsZ0JBQWdCO0FBQ2xCLGVBQVc7QUFBQSxFQUNiLENBQUM7QUFHRCxVQUFRLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUN2QyxRQUFJLEVBQUUsV0FBVztBQUFTLGlCQUFXO0FBQUEsRUFDdkMsQ0FBQztBQUVELFdBQVMsYUFBbUI7QUFDMUIsWUFBUSxVQUFVLE9BQU8sU0FBUztBQUNsQyxlQUFXLE1BQU0sUUFBUSxPQUFPLEdBQUcsR0FBRztBQUFBLEVBQ3hDO0FBR0EsV0FBUyxLQUFLLFlBQVksT0FBTztBQUNqQyx3QkFBc0IsTUFBTTtBQUMxQixZQUFRLFVBQVUsSUFBSSxTQUFTO0FBQUEsRUFDakMsQ0FBQztBQUNIO0FBRUEsU0FBUyxjQUFjLFFBQWdDO0FBQ3JELFVBQVEsUUFBUTtBQUFBLElBQ2QsS0FBSztBQUFTLGFBQU87QUFBQSxJQUNyQixLQUFLO0FBQVEsYUFBTztBQUFBLElBQ3BCLEtBQUs7QUFBVyxhQUFPO0FBQUEsSUFDdkIsS0FBSztBQUFVLGFBQU87QUFBQSxJQUN0QixLQUFLO0FBQVMsYUFBTztBQUFBLElBQ3JCLEtBQUs7QUFBUSxhQUFPO0FBQUEsSUFDcEIsS0FBSztBQUFZLGFBQU87QUFBQSxJQUN4QjtBQUFTLGFBQU87QUFBQSxFQUNsQjtBQUNGOzs7QUMxTE8sU0FBUyxxQkFDZCxXQUNBLFVBQ0EsY0FDTTtBQUNOLFFBQU0sYUFBYSxJQUFJLFdBQVcsUUFBUTtBQUMxQyxRQUFNLFNBQVMsV0FBVyxjQUFjO0FBRXhDLFFBQU0sUUFBUSxTQUFTLFVBQVUsT0FBTyxxQkFBcUI7QUFHN0QsUUFBTSxVQUFVLFVBQVUsVUFBVSxFQUFFLEtBQUsscUJBQXFCLENBQUM7QUFDakUsVUFBUSxTQUFTLE9BQU8sRUFBRSxLQUFLLGdCQUFnQixNQUFNLE1BQU0sQ0FBQztBQUc1RCxRQUFNLFVBQVUsT0FBTyxhQUFhLHlDQUF5QztBQUM3RSxRQUFNLE9BQU8sVUFBVSxVQUFVLEVBQUUsS0FBSyxRQUFRLENBQUM7QUFDakQsT0FBSyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksQ0FBQztBQUdsRCxRQUFNLE1BQU0sS0FBSyxVQUFVLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQztBQUVuRCxNQUFJLFNBQVMsT0FBTyxFQUFFLEtBQUssbUJBQW1CLE1BQU0sYUFBYSxPQUFPLElBQUksRUFBRSxDQUFDO0FBRS9FLFFBQU0sT0FBTyxJQUFJLFVBQVUsRUFBRSxLQUFLLGlCQUFpQixDQUFDO0FBQ3BELE9BQUssU0FBUyxPQUFPLEVBQUUsS0FBSyxrQkFBa0IsTUFBTSxPQUFPLEtBQUssS0FBSyxDQUFDO0FBQ3RFLE9BQUssU0FBUyxPQUFPO0FBQUEsSUFDbkIsS0FBSztBQUFBLElBQ0wsTUFBTSxRQUFRLE9BQU8sSUFBSSxTQUFNLE9BQU8sSUFBSTtBQUFBLEVBQzVDLENBQUM7QUFHRCxRQUFNLFFBQVEsS0FBSyxVQUFVLEVBQUUsS0FBSyxjQUFjLENBQUM7QUFDbkQsUUFBTSxTQUFTLE1BQU0sVUFBVSxFQUFFLEtBQUssbUJBQW1CLENBQUM7QUFDMUQsU0FBTyxNQUFNLFFBQVEsR0FBRyxPQUFPLE9BQU87QUFDdEMsU0FBTyxNQUFNLGFBQWEsV0FBVyxXQUFXLE9BQU8sT0FBTztBQUc5RCxPQUFLLFNBQVMsT0FBTztBQUFBLElBQ25CLEtBQUs7QUFBQSxJQUNMLE1BQU0sR0FBRyxPQUFPLFNBQVMsSUFBSSxPQUFPLEtBQUssUUFBUSxPQUFPLE9BQU87QUFBQSxFQUNqRSxDQUFDO0FBQ0g7QUFFQSxTQUFTLGFBQWEsTUFBc0I7QUFDMUMsUUFBTSxTQUFpQztBQUFBLElBQ3JDLEdBQUc7QUFBQSxJQUFhLEdBQUc7QUFBQSxJQUFhLEdBQUc7QUFBQSxJQUFhLEdBQUc7QUFBQSxJQUNuRCxHQUFHO0FBQUEsSUFBYSxHQUFHO0FBQUEsSUFBYSxHQUFHO0FBQUEsSUFBYSxHQUFHO0FBQUEsSUFDbkQsR0FBRztBQUFBLElBQWEsSUFBSTtBQUFBLElBQWEsSUFBSTtBQUFBLElBQWEsSUFBSTtBQUFBLElBQ3RELElBQUk7QUFBQSxFQUNOO0FBQ0EsU0FBTyxPQUFPLElBQUksS0FBSztBQUN6Qjs7O0FDcERPLFNBQVMsbUJBQ2QsV0FDQSxVQUNBLFFBQ0EsY0FDTTtBQUNOLFFBQU0sUUFBUSxTQUFTLFVBQVUsT0FBTyx1QkFBdUI7QUFHL0QsUUFBTSxVQUFVLFVBQVUsVUFBVSxFQUFFLEtBQUsscUJBQXFCLENBQUM7QUFDakUsVUFBUSxTQUFTLE9BQU8sRUFBRSxLQUFLLGdCQUFnQixNQUFNLE1BQU0sQ0FBQztBQUc1RCxRQUFNLE9BQU8sVUFBVSxVQUFVLEVBQUUsS0FBSyxZQUFZLENBQUM7QUFDckQsT0FBSyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksQ0FBQztBQUdsRCxRQUFNLFFBQVEsS0FBSyxVQUFVLEVBQUUsS0FBSyxvQkFBb0IsQ0FBQztBQUV6RCxRQUFNLGFBQWEsT0FBTyxzQkFBc0I7QUFDaEQsUUFBTSxVQUFVLE9BQU8sbUJBQW1CO0FBQzFDLFFBQU0sbUJBQW1CLE9BQU8sb0JBQW9CO0FBRXBELG1CQUFpQixPQUFPLE9BQU8sVUFBVSxJQUFJLE1BQU0sYUFBYTtBQUNoRSxtQkFBaUIsT0FBTyxTQUFTLFVBQVU7QUFDM0MsbUJBQWlCLE9BQU8sT0FBTyxnQkFBZ0IsR0FBRyxPQUFPO0FBR3pELE9BQUssVUFBVSxFQUFFLEtBQUssZUFBZSxDQUFDO0FBR3RDLFFBQU0sYUFBYSxPQUFPLDBCQUEwQjtBQUNwRCxRQUFNLE1BQU0sU0FBUyxnQkFBZ0IsSUFBSSxLQUFLLFNBQVMsYUFBYSxJQUFJLG9CQUFJLEtBQUs7QUFDakYsUUFBTSxXQUFXLElBQUksS0FBSyxHQUFHLEVBQUUsWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBR3hELE1BQUksV0FBVztBQUNmLGFBQVcsT0FBTyxZQUFZO0FBQzVCLFFBQUksUUFBUTtBQUNaLFFBQUksWUFBWSxRQUFRLENBQUMsTUFBTTtBQUFFLGVBQVM7QUFBQSxJQUFHLENBQUM7QUFDOUMsUUFBSSxRQUFRO0FBQVUsaUJBQVc7QUFBQSxFQUNuQztBQUVBLFFBQU0sZ0JBQWdCLEtBQUssVUFBVSxFQUFFLEtBQUssbUJBQW1CLENBQUM7QUFFaEUsYUFBVyxPQUFPLFlBQVk7QUFDNUIsVUFBTSxNQUFNLGNBQWMsVUFBVSxFQUFFLEtBQUssc0JBQXNCLENBQUM7QUFHbEUsUUFBSSxRQUFRO0FBQ1osUUFBSSxZQUFZLFFBQVEsQ0FBQyxNQUFNO0FBQUUsZUFBUztBQUFBLElBQUcsQ0FBQztBQUU5QyxVQUFNLFlBQVksV0FBVyxJQUFJLEtBQUssSUFBSSxHQUFJLFFBQVEsV0FBWSxHQUFHLElBQUk7QUFDekUsVUFBTSxRQUFRLElBQUksVUFBVSxFQUFFLEtBQUssa0JBQWtCLENBQUM7QUFDdEQsVUFBTSxNQUFNLFNBQVMsR0FBRyxTQUFTO0FBQ2pDLFVBQU0sTUFBTSxZQUFZO0FBRXhCLFFBQUksSUFBSSxTQUFTLFVBQVU7QUFDekIsWUFBTSxVQUFVLElBQUksdUJBQXVCO0FBQUEsSUFDN0M7QUFHQSxVQUFNLGFBQXlCLENBQUMsUUFBUSxRQUFRLFFBQVE7QUFDeEQsZUFBVyxPQUFPLFlBQVk7QUFDNUIsWUFBTSxXQUFXLElBQUksWUFBWSxJQUFJLEdBQUcsS0FBSztBQUM3QyxVQUFJLGFBQWE7QUFBRztBQUNwQixZQUFNLFlBQVksUUFBUSxJQUFLLFdBQVcsUUFBUyxNQUFNO0FBQ3pELFlBQU0sTUFBTSxNQUFNLFVBQVUsRUFBRSxLQUFLLDBCQUEwQixDQUFDO0FBQzlELFVBQUksTUFBTSxTQUFTLEdBQUcsU0FBUztBQUMvQixVQUFJLE1BQU0sYUFBYSxpQkFBaUIsS0FBSyxRQUFRO0FBQUEsSUFDdkQ7QUFHQSxRQUFJLFVBQVUsR0FBRztBQUNmLFlBQU0sTUFBTSxhQUFhO0FBQUEsSUFDM0I7QUFHQSxRQUFJLFNBQVMsT0FBTyxFQUFFLEtBQUsseUJBQXlCLE1BQU0sSUFBSSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFBQSxFQUMvRTtBQUNGO0FBRUEsU0FBUyxpQkFBaUIsUUFBcUIsT0FBZSxPQUFxQjtBQUNqRixRQUFNLE9BQU8sT0FBTyxVQUFVLEVBQUUsS0FBSyxtQkFBbUIsQ0FBQztBQUN6RCxPQUFLLFNBQVMsT0FBTyxFQUFFLEtBQUssMEJBQTBCLE1BQU0sTUFBTSxDQUFDO0FBQ25FLE9BQUssU0FBUyxPQUFPLEVBQUUsS0FBSywwQkFBMEIsTUFBTSxNQUFNLENBQUM7QUFDckU7QUFFQSxTQUFTLGlCQUFpQixVQUFvQixVQUFnQztBQUM1RSxTQUFPLFNBQVMsZUFBZSxRQUFRLEtBQUs7QUFDOUM7OztBQzFGTyxTQUFTLG1CQUNkLFdBQ0EsVUFDQSxRQUNBLGNBQ007QUFDTixRQUFNLFFBQVEsU0FBUyxVQUFVLE9BQU8sdUJBQXVCO0FBRy9ELFFBQU0sVUFBVSxVQUFVLFVBQVUsRUFBRSxLQUFLLHFCQUFxQixDQUFDO0FBQ2pFLFVBQVEsU0FBUyxPQUFPLEVBQUUsS0FBSyxnQkFBZ0IsTUFBTSxNQUFNLENBQUM7QUFHNUQsUUFBTSxPQUFPLFVBQVUsVUFBVSxFQUFFLEtBQUsscUJBQXFCLENBQUM7QUFDOUQsT0FBSyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksQ0FBQztBQUVsRCxRQUFNLFVBQVUsU0FBUyxVQUFVLHVCQUF1QjtBQUMxRCxPQUFLLE1BQU0sc0JBQXNCLFVBQVUsT0FBTztBQUVsRCxRQUFNLGFBQWEsT0FBTyxxQkFBcUI7QUFFL0MsYUFBVyxZQUFZLFlBQVk7QUFDakMsVUFBTSxPQUFPLEtBQUssVUFBVSxFQUFFLEtBQUsscUJBQXFCLENBQUM7QUFHekQsVUFBTSxTQUFTLEtBQUssVUFBVSxFQUFFLEtBQUssdUJBQXVCLENBQUM7QUFDN0QsV0FBTyxNQUFNLGFBQWEsU0FBUyxlQUFlLFNBQVMsUUFBUSxLQUFLO0FBR3hFLFVBQU0sTUFBTSxLQUFLLFVBQVUsRUFBRSxLQUFLLG9CQUFvQixDQUFDO0FBQ3ZELFFBQUksU0FBUyxPQUFPLEVBQUUsS0FBSyx1QkFBdUIsTUFBTSxTQUFTLE1BQU0sQ0FBQztBQUV4RSxVQUFNLFlBQVksT0FBTyxxQkFBcUIsU0FBUyxFQUFFO0FBQ3pELFVBQU0sU0FBUyxZQUFZLFNBQVM7QUFDcEMsUUFBSSxVQUFVLEVBQUUsS0FBSyxxQkFBcUIsTUFBTSxHQUFHLENBQUM7QUFHcEQsU0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLHNCQUFzQixNQUFNLFNBQVMsS0FBSyxDQUFDO0FBR3ZFLFVBQU0sV0FBVyxPQUFPLGtCQUFrQixTQUFTLEVBQUU7QUFDckQsVUFBTSxjQUFjLEtBQUssVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFHcEUsVUFBTSxPQUFPLG1CQUFtQixTQUFTLE1BQU0sU0FBUyxRQUFRLFNBQVMsZUFBZSxTQUFTLFFBQVEsQ0FBQztBQUMxRyxnQkFBWSxZQUFZLElBQUk7QUFFNUIsZ0JBQVksU0FBUyxPQUFPO0FBQUEsTUFDMUIsS0FBSztBQUFBLE1BQ0wsTUFBTSxHQUFHLFNBQVMsSUFBSSxPQUFPLFNBQVMsTUFBTTtBQUFBLElBQzlDLENBQUM7QUFHRCxVQUFNLFNBQVMsT0FBTyxrQkFBa0IsU0FBUyxFQUFFO0FBQ25ELFFBQUksU0FBUyxHQUFHO0FBQ2QsV0FBSyxTQUFTLE9BQU87QUFBQSxRQUNuQixLQUFLO0FBQUEsUUFDTCxNQUFNLEdBQUcsTUFBTTtBQUFBLE1BQ2pCLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUNGO0FBRUEsU0FBUyxZQUFZLFdBQTJCO0FBQzlDLE1BQUksY0FBYztBQUFHLFdBQU87QUFDNUIsTUFBSSxhQUFhO0FBQUcsV0FBTztBQUMzQixTQUFPO0FBQ1Q7QUFFQSxTQUFTLG1CQUFtQixNQUFjLFFBQWdCLE9BQThCO0FBQ3RGLFFBQU0sT0FBTztBQUNiLFFBQU0sY0FBYztBQUNwQixRQUFNLFVBQVUsT0FBTyxlQUFlO0FBQ3RDLFFBQU0sZ0JBQWdCLElBQUksS0FBSyxLQUFLO0FBQ3BDLFFBQU0sVUFBVSxTQUFTLElBQUksS0FBSyxJQUFJLEdBQUcsT0FBTyxNQUFNLElBQUk7QUFDMUQsUUFBTSxhQUFhLGlCQUFpQixJQUFJO0FBRXhDLFFBQU0sTUFBTSxTQUFTLGdCQUFnQiw4QkFBOEIsS0FBSztBQUN4RSxNQUFJLGFBQWEsU0FBUyxPQUFPLElBQUksQ0FBQztBQUN0QyxNQUFJLGFBQWEsVUFBVSxPQUFPLElBQUksQ0FBQztBQUN2QyxNQUFJLGFBQWEsV0FBVyxPQUFPLElBQUksSUFBSSxJQUFJLEVBQUU7QUFDakQsTUFBSSxVQUFVLElBQUksNkJBQTZCO0FBRy9DLFFBQU0sV0FBVyxTQUFTLGdCQUFnQiw4QkFBOEIsUUFBUTtBQUNoRixXQUFTLGFBQWEsTUFBTSxPQUFPLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLFdBQVMsYUFBYSxNQUFNLE9BQU8sT0FBTyxDQUFDLENBQUM7QUFDNUMsV0FBUyxhQUFhLEtBQUssT0FBTyxNQUFNLENBQUM7QUFDekMsV0FBUyxhQUFhLFFBQVEsTUFBTTtBQUNwQyxXQUFTLGFBQWEsVUFBVSx3QkFBd0I7QUFDeEQsV0FBUyxhQUFhLGdCQUFnQixPQUFPLFdBQVcsQ0FBQztBQUN6RCxNQUFJLFlBQVksUUFBUTtBQUd4QixRQUFNLGlCQUFpQixTQUFTLGdCQUFnQiw4QkFBOEIsUUFBUTtBQUN0RixpQkFBZSxhQUFhLE1BQU0sT0FBTyxPQUFPLENBQUMsQ0FBQztBQUNsRCxpQkFBZSxhQUFhLE1BQU0sT0FBTyxPQUFPLENBQUMsQ0FBQztBQUNsRCxpQkFBZSxhQUFhLEtBQUssT0FBTyxNQUFNLENBQUM7QUFDL0MsaUJBQWUsYUFBYSxRQUFRLE1BQU07QUFDMUMsaUJBQWUsYUFBYSxVQUFVLEtBQUs7QUFDM0MsaUJBQWUsYUFBYSxnQkFBZ0IsT0FBTyxXQUFXLENBQUM7QUFDL0QsaUJBQWUsYUFBYSxvQkFBb0IsT0FBTyxhQUFhLENBQUM7QUFDckUsaUJBQWUsYUFBYSxxQkFBcUIsT0FBTyxVQUFVLENBQUM7QUFDbkUsaUJBQWUsYUFBYSxrQkFBa0IsT0FBTztBQUNyRCxpQkFBZSxhQUFhLGFBQWEsY0FBYyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsR0FBRztBQUM5RSxNQUFJLFlBQVksY0FBYztBQUU5QixTQUFPO0FBQ1Q7OztBQzdHTyxTQUFTLGtCQUNkLFdBQ0EsVUFDQSxjQUNBLGdCQUNNO0FBQ04sTUFBSSxDQUFDLFNBQVMsZUFBZSxTQUFTLFlBQVksV0FBVztBQUFHO0FBRWhFLFFBQU0sUUFBUSxTQUFTLFVBQVUsT0FBTyxnQkFBZ0I7QUFDeEQsUUFBTSxNQUFNLFNBQVMsZ0JBQWdCLElBQUksS0FBSyxTQUFTLGFBQWEsSUFBSSxvQkFBSSxLQUFLO0FBR2pGLFFBQU0sVUFBVSxVQUFVLFVBQVUsRUFBRSxLQUFLLHNCQUFzQixDQUFDO0FBQ2xFLFVBQVEsTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLENBQUM7QUFHckQsVUFBUSxTQUFTLE9BQU8sRUFBRSxLQUFLLGdCQUFnQixNQUFNLE1BQU0sQ0FBQztBQUc1RCxRQUFNLFFBQVEsUUFBUSxVQUFVLEVBQUUsS0FBSyxvQkFBb0IsQ0FBQztBQUM1RCxRQUFNLE1BQU0sWUFBWTtBQUV4QixhQUFXLFFBQVEsU0FBUyxhQUFhO0FBQ3ZDLFVBQU0sU0FBUyxjQUFjLE1BQU0sR0FBRztBQUV0QyxVQUFNLFVBQVUsb0JBQW9CLE9BQU8sU0FBUztBQUNwRCxVQUFNLE9BQU8sTUFBTSxVQUFVLEVBQUUsS0FBSyxRQUFRLENBQUM7QUFFN0MsU0FBSyxTQUFTLFFBQVEsRUFBRSxLQUFLLDBCQUEwQixNQUFNLEtBQUssTUFBTSxDQUFDO0FBQ3pFLFNBQUssU0FBUyxRQUFRLEVBQUUsS0FBSyx5QkFBeUIsTUFBTSxHQUFHLEtBQUssSUFBSSxTQUFNLE9BQU8sSUFBSSxHQUFHLENBQUM7QUFFN0YsU0FBSyxpQkFBaUIsU0FBUyxNQUFNO0FBQ25DLHFCQUFlLEtBQUssRUFBRTtBQUV0QixXQUFLLE1BQU0sWUFBWTtBQUN2QixXQUFLLE1BQU0sVUFBVTtBQUNyQixpQkFBVyxNQUFNO0FBQ2YsYUFBSyxNQUFNLFlBQVk7QUFDdkIsYUFBSyxNQUFNLFVBQVU7QUFBQSxNQUN2QixHQUFHLEdBQUc7QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFPQSxTQUFTLGNBQWMsTUFBa0IsS0FBdUI7QUFDOUQsTUFBSSxDQUFDLEtBQUssZUFBZTtBQUN2QixXQUFPLEVBQUUsTUFBTSxXQUFXLFdBQVcsMkJBQTJCO0FBQUEsRUFDbEU7QUFFQSxRQUFNLE9BQU8sSUFBSSxLQUFLLEtBQUssYUFBYTtBQUN4QyxRQUFNLFdBQVcsS0FBSyxLQUFLLEtBQUs7QUFDaEMsUUFBTSxZQUFZLEtBQUssT0FBTyxJQUFJLFFBQVEsSUFBSSxLQUFLLFFBQVEsS0FBSyxRQUFRO0FBQ3hFLFFBQU0sZUFBZSxLQUFLLGVBQWU7QUFFekMsTUFBSSxnQkFBZ0IsR0FBRztBQUNyQixXQUFPLEVBQUUsTUFBTSxXQUFXLFdBQVcsMkJBQTJCO0FBQUEsRUFDbEU7QUFFQSxNQUFJLGdCQUFnQixHQUFHO0FBQ3JCLFdBQU8sRUFBRSxNQUFNLGFBQWEsV0FBVyx3QkFBd0I7QUFBQSxFQUNqRTtBQUVBLE1BQUksZ0JBQWdCLEdBQUc7QUFDckIsV0FBTyxFQUFFLE1BQU0sVUFBVSxZQUFZLEtBQUssV0FBVyx3QkFBd0I7QUFBQSxFQUMvRTtBQUVBLFNBQU8sRUFBRSxNQUFNLE1BQU0sWUFBWSxLQUFLLFdBQVcsc0JBQXNCO0FBQ3pFOzs7QUN0RU8sU0FBUyxrQkFDZCxXQUNBLEtBQ0EsVUFDQSxjQUNBLGtCQUNNO0FBQ04sUUFBTSxRQUFRLFNBQVMsS0FBSyxVQUFVLGdCQUFnQjtBQUV0RCxRQUFNLFVBQVUsVUFBVSxVQUFVLEVBQUUsS0FBSyxhQUFhLENBQUM7QUFDekQsVUFBUSxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksQ0FBQztBQUVyRCxVQUFRLFNBQVMsT0FBTztBQUFBLElBQ3RCLEtBQUs7QUFBQSxJQUNMLE1BQU0sSUFBSSxNQUFNLElBQUk7QUFBQSxFQUN0QixDQUFDO0FBRUQsTUFBSSxNQUFNLGFBQWE7QUFDckIsWUFBUSxTQUFTLE9BQU87QUFBQSxNQUN0QixLQUFLO0FBQUEsTUFDTCxNQUFNLFVBQUssTUFBTSxXQUFXO0FBQUEsSUFDOUIsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQU9BLFNBQVMsU0FDUCxLQUNBLFVBQ0Esa0JBQ087QUFFUCxNQUFJLFNBQVMsaUJBQWlCO0FBQzVCLFVBQU0sY0FBYyxvQkFBb0IsS0FBSyxTQUFTLGVBQWU7QUFDckUsUUFBSSxZQUFZLFNBQVMsR0FBRztBQUMxQixhQUFPLFVBQVUsYUFBYSxVQUFVLGdCQUFnQjtBQUFBLElBQzFEO0FBQUEsRUFDRjtBQUdBLFNBQU8sVUFBVSxpQkFBaUIsVUFBVSxnQkFBZ0I7QUFDOUQ7QUFFQSxTQUFTLFVBQ1AsUUFDQSxVQUNBLGtCQUNPO0FBQ1AsTUFBSSxPQUFPLFdBQVcsR0FBRztBQUN2QixXQUFPLEVBQUUsTUFBTSw0Q0FBNEMsYUFBYSxXQUFXO0FBQUEsRUFDckY7QUFHQSxRQUFNLFlBQVksU0FBUyxrQkFBa0IsQ0FBQztBQUM5QyxRQUFNLFlBQVksT0FDZixJQUFJLENBQUMsR0FBRyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFDeEIsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsVUFBVSxTQUFTLENBQUMsQ0FBQztBQUUzQyxRQUFNLE9BQU8sVUFBVSxTQUFTLElBQUksWUFBWSxPQUFPLElBQUksQ0FBQyxHQUFHLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRTtBQUMvRSxRQUFNLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxPQUFPLElBQUksS0FBSyxNQUFNLENBQUM7QUFHekQsUUFBTSxZQUFZLENBQUMsR0FBRyxXQUFXLEtBQUssQ0FBQyxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRyxLQUFLLE1BQU0sT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDO0FBQzFGLG1CQUFpQjtBQUFBLElBQ2YsZ0JBQWdCLEtBQUs7QUFBQSxJQUNyQixnQkFBZ0I7QUFBQSxFQUNsQixDQUFDO0FBRUQsU0FBTyxLQUFLO0FBQ2Q7QUFFQSxTQUFTLG9CQUFvQixLQUFVLFlBQTZCO0FBQ2xFLFFBQU0sU0FBa0IsQ0FBQztBQUN6QixRQUFNLGVBQWUsSUFBSSxNQUFNLHNCQUFzQixVQUFVO0FBQy9ELE1BQUksQ0FBQztBQUFjLFdBQU87QUFFMUIsUUFBTSxRQUFRLElBQUksTUFBTSxpQkFBaUIsRUFBRTtBQUFBLElBQU8sQ0FBQyxNQUNqRCxFQUFFLEtBQUssV0FBVyxXQUFXLFNBQVMsR0FBRyxJQUFJLGFBQWEsYUFBYSxHQUFHO0FBQUEsRUFDNUU7QUFFQSxhQUFXLFFBQVEsT0FBTztBQUN4QixVQUFNLFFBQVEsSUFBSSxjQUFjLGFBQWEsSUFBSTtBQUNqRCxRQUFJLENBQUM7QUFBTztBQUdaLFVBQU0sT0FBTyxLQUFLO0FBQ2xCLFVBQU0sUUFBUSxpQkFBaUIsSUFBSTtBQUNuQyxXQUFPLEtBQUssS0FBSztBQUFBLEVBQ25CO0FBRUEsU0FBTztBQUNUO0FBRUEsU0FBUyxpQkFBaUIsTUFBcUI7QUFFN0MsUUFBTSxZQUFZLEtBQUssWUFBWSxVQUFLO0FBQ3hDLE1BQUksWUFBWSxHQUFHO0FBQ2pCLFdBQU87QUFBQSxNQUNMLE1BQU0sS0FBSyxNQUFNLEdBQUcsU0FBUyxFQUFFLEtBQUs7QUFBQSxNQUNwQyxhQUFhLEtBQUssTUFBTSxZQUFZLENBQUMsRUFBRSxLQUFLO0FBQUEsSUFDOUM7QUFBQSxFQUNGO0FBRUEsUUFBTSxjQUFjLEtBQUssWUFBWSxLQUFLO0FBQzFDLE1BQUksY0FBYyxLQUFLLFNBQVMsS0FBSztBQUNuQyxXQUFPO0FBQUEsTUFDTCxNQUFNLEtBQUssTUFBTSxHQUFHLFdBQVcsRUFBRSxLQUFLO0FBQUEsTUFDdEMsYUFBYSxLQUFLLE1BQU0sY0FBYyxDQUFDLEVBQUUsS0FBSztBQUFBLElBQ2hEO0FBQUEsRUFDRjtBQUVBLFNBQU8sRUFBRSxNQUFNLEtBQUssS0FBSyxHQUFHLGFBQWEsR0FBRztBQUM5Qzs7O0FDckhPLFNBQVMsa0JBQ2QsV0FDQSxVQUNBLFFBQ0EsY0FDQSxXQU9NO0FBQ04sUUFBTSxRQUFRLFNBQVMsVUFBVSxPQUFPLGdCQUFnQjtBQUN4RCxRQUFNLE1BQU0sU0FBUyxnQkFBZ0IsSUFBSSxLQUFLLFNBQVMsYUFBYSxJQUFJLG9CQUFJLEtBQUs7QUFDakYsUUFBTSxjQUFjLElBQUksU0FBUyxJQUFJLElBQUksV0FBVyxJQUFJO0FBR3hELFFBQU0sVUFBVSxVQUFVLFVBQVUsRUFBRSxLQUFLLHFCQUFxQixDQUFDO0FBQ2pFLFVBQVEsU0FBUyxPQUFPLEVBQUUsS0FBSyxnQkFBZ0IsTUFBTSxNQUFNLENBQUM7QUFHNUQsUUFBTSxPQUFPLFVBQVUsVUFBVSxFQUFFLEtBQUssK0JBQStCLENBQUM7QUFDeEUsT0FBSyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksQ0FBQztBQUdsRCxRQUFNLFVBQVUsT0FBTyxVQUFVO0FBRWpDLE1BQUksUUFBUSxXQUFXLEdBQUc7QUFDeEIsU0FBSyxTQUFTLE9BQU87QUFBQSxNQUNuQixLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsSUFDUixDQUFDO0FBQ0QseUJBQXFCLE1BQU0sVUFBVSxhQUFhLFVBQVUsYUFBYTtBQUN6RTtBQUFBLEVBQ0Y7QUFHQSxRQUFNLFdBQVcsS0FBSyxVQUFVLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQztBQUV4RCxhQUFXLFNBQVMsU0FBUztBQUMzQjtBQUFBLE1BQ0U7QUFBQSxNQUFVO0FBQUEsTUFBTztBQUFBLE1BQVU7QUFBQSxNQUFhO0FBQUEsSUFDMUM7QUFBQSxFQUNGO0FBR0EsdUJBQXFCLE1BQU0sVUFBVSxhQUFhLFVBQVUsYUFBYTtBQUMzRTtBQUVBLFNBQVMsb0JBQ1AsUUFDQSxPQUNBLFVBQ0EsYUFDQSxXQU1NO0FBQ04sUUFBTSxhQUFhLE1BQU0sbUJBQW1CO0FBQzVDLFFBQU0sUUFBUSxhQUFhLFlBQWEsU0FBUyxlQUFlLE1BQU0sUUFBUSxLQUFLO0FBQ25GLFFBQU0sWUFBWSxlQUFlLE1BQU0sYUFBYSxjQUFjLE1BQU07QUFDeEUsUUFBTSxTQUFTLGVBQWUsTUFBTTtBQUNwQyxRQUFNLFNBQVMsTUFBTSxXQUFXO0FBQ2hDLFFBQU0sWUFBWSxNQUFNLFdBQVc7QUFHbkMsTUFBSSxXQUFXO0FBQ2YsTUFBSTtBQUFZLGdCQUFZO0FBQzVCLE1BQUk7QUFBUSxnQkFBWTtBQUFBLFdBQ2Y7QUFBVyxnQkFBWTtBQUFBLFdBQ3ZCO0FBQVcsZ0JBQVk7QUFBQSxXQUN2QjtBQUFRLGdCQUFZO0FBRTdCLFFBQU0sTUFBTSxPQUFPLFVBQVUsRUFBRSxLQUFLLFNBQVMsQ0FBQztBQUc5QyxRQUFNLE1BQU0sSUFBSSxVQUFVLEVBQUUsS0FBSyxvQkFBb0IsQ0FBQztBQUN0RCxNQUFJLE1BQU0sYUFBYTtBQUN2QixNQUFJLGNBQWMsQ0FBQyxRQUFRO0FBQ3pCLFFBQUksVUFBVSxJQUFJLDRCQUE0QjtBQUFBLEVBQ2hEO0FBQ0EsTUFBSSxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVc7QUFDdEMsUUFBSSxNQUFNLFlBQVksWUFBWSxLQUFLO0FBQUEsRUFDekM7QUFHQSxRQUFNLFVBQVUsSUFBSSxVQUFVLEVBQUUsS0FBSyx3QkFBd0IsQ0FBQztBQUc5RCxRQUFNLFdBQVcsUUFBUSxVQUFVLEVBQUUsS0FBSyxxQkFBcUIsQ0FBQztBQUNoRSxXQUFTLGNBQWMsR0FBRyxXQUFXLE1BQU0sU0FBUyxDQUFDLFdBQU0sV0FBVyxNQUFNLE9BQU8sQ0FBQyxTQUFNLE1BQU0saUJBQWlCO0FBRWpILE1BQUksY0FBYyxNQUFNLGdCQUFnQjtBQUN0QyxVQUFNLFFBQVEsU0FBUyxTQUFTLFFBQVEsRUFBRSxLQUFLLDZCQUE2QixDQUFDO0FBQzdFLFlBQVEsTUFBTSxnQkFBZ0I7QUFBQSxNQUM1QixLQUFLO0FBQWMsY0FBTSxjQUFjO0FBQVE7QUFBQSxNQUMvQyxLQUFLO0FBQWdCLGNBQU0sY0FBYztBQUFRO0FBQUEsTUFDakQsS0FBSztBQUFjLGNBQU0sY0FBYztBQUFTO0FBQUEsSUFDbEQ7QUFBQSxFQUNGO0FBR0EsUUFBTSxVQUFVLFFBQVEsVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFDbkUsVUFBUSxTQUFTLFFBQVEsRUFBRSxLQUFLLHVCQUF1QixNQUFNLE1BQU0sTUFBTSxDQUFDO0FBQzFFLFFBQU0sU0FBUyxRQUFRLFNBQVMsUUFBUTtBQUFBLElBQ3RDLEtBQUs7QUFBQSxJQUNMLE1BQU0sTUFBTTtBQUFBLEVBQ2QsQ0FBQztBQUdELE1BQUksVUFBVSxXQUFXO0FBQ3ZCLFdBQU8sTUFBTSxpQkFBaUI7QUFDOUIsV0FBTyxNQUFNLFVBQVU7QUFBQSxFQUN6QjtBQUdBLE1BQUksUUFBUTtBQUNWLFlBQVEsU0FBUyxRQUFRLEVBQUUsS0FBSyx1QkFBdUIsTUFBTSxTQUFTLENBQUM7QUFBQSxFQUN6RSxXQUFXLFdBQVc7QUFDcEIsWUFBUSxTQUFTLFFBQVEsRUFBRSxLQUFLLDJCQUEyQixNQUFNLFNBQVMsQ0FBQztBQUFBLEVBQzdFO0FBR0EsTUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO0FBQ3pCLFVBQU0sVUFBVSxRQUFRLFVBQVUsRUFBRSxLQUFLLHdCQUF3QixDQUFDO0FBRWxFLFFBQUksWUFBWTtBQUVkLFlBQU0sVUFBVSxRQUFRLFNBQVMsVUFBVTtBQUFBLFFBQ3pDLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxNQUNSLENBQUM7QUFDRCxjQUFRLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUN2QyxVQUFFLGdCQUFnQjtBQUNsQixrQkFBVSxpQkFBaUIsS0FBSztBQUFBLE1BQ2xDLENBQUM7QUFFRCxZQUFNLGNBQWMsUUFBUSxTQUFTLFVBQVU7QUFBQSxRQUM3QyxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNLEVBQUUsT0FBTyx1QkFBdUI7QUFBQSxNQUN4QyxDQUFDO0FBQ0Qsa0JBQVksaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQzNDLFVBQUUsZ0JBQWdCO0FBQ2xCLGtCQUFVLHFCQUFxQixLQUFLO0FBQUEsTUFDdEMsQ0FBQztBQUFBLElBQ0gsT0FBTztBQUVMLFlBQU0sWUFBWSxRQUFRLFNBQVMsVUFBVTtBQUFBLFFBQzNDLEtBQUs7QUFBQSxRQUNMLE1BQU0sWUFBWSxVQUFVO0FBQUEsTUFDOUIsQ0FBQztBQUNELGdCQUFVLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUN6QyxVQUFFLGdCQUFnQjtBQUNsQixrQkFBVSxTQUFTLE1BQU0sVUFBVTtBQUFBLE1BQ3JDLENBQUM7QUFFRCxZQUFNLFVBQVUsUUFBUSxTQUFTLFVBQVU7QUFBQSxRQUN6QyxLQUFLO0FBQUEsUUFDTCxNQUFNO0FBQUEsTUFDUixDQUFDO0FBQ0QsY0FBUSxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDdkMsVUFBRSxnQkFBZ0I7QUFDbEIsa0JBQVUsT0FBTyxNQUFNLFVBQVU7QUFBQSxNQUNuQyxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFHQSxNQUFJLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVztBQUN0QyxVQUFNLFlBQVksSUFBSSxVQUFVLEVBQUUsS0FBSyxvQkFBb0IsQ0FBQztBQUM1RCxVQUFNLFlBQVksY0FBYyxNQUFNLGNBQWMsTUFBTSxVQUFVLE1BQU07QUFDMUUsY0FBVSxNQUFNLE1BQU0sR0FBRyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQUEsRUFDckU7QUFDRjtBQUVBLFNBQVMscUJBQ1AsTUFDQSxVQUNBLGFBQ0EsZUFDTTtBQUNOLFFBQU0sV0FBVyxTQUFTLFVBQVU7QUFDcEMsUUFBTSxZQUFZLEtBQUssSUFBSSxHQUFHLFdBQVcsV0FBVztBQUNwRCxRQUFNLFFBQVEsS0FBSyxNQUFNLFNBQVM7QUFDbEMsUUFBTSxPQUFPLEtBQUssT0FBTyxZQUFZLFNBQVMsRUFBRTtBQUVoRCxPQUFLLFVBQVUsRUFBRSxLQUFLLGVBQWUsQ0FBQztBQUV0QyxRQUFNLFNBQVMsS0FBSyxVQUFVLEVBQUUsS0FBSyx1QkFBdUIsQ0FBQztBQUM3RCxTQUFPLFNBQVMsT0FBTztBQUFBLElBQ3JCLEtBQUs7QUFBQSxJQUNMLE1BQU0sZUFBZSxLQUFLLEtBQUssSUFBSTtBQUFBLEVBQ3JDLENBQUM7QUFFRCxNQUFJLGVBQWU7QUFDakIsVUFBTSxNQUFNLE9BQU8sU0FBUyxVQUFVO0FBQUEsTUFDcEMsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUNELFFBQUksaUJBQWlCLFNBQVMsTUFBTSxjQUFjLENBQUM7QUFBQSxFQUNyRDtBQUNGO0FBRUEsU0FBUyxXQUFXLEdBQW1CO0FBQ3JDLFFBQU0sUUFBUSxLQUFLLE1BQU0sQ0FBQztBQUMxQixRQUFNLE9BQU8sS0FBSyxPQUFPLElBQUksU0FBUyxFQUFFO0FBQ3hDLFFBQU0sU0FBUyxTQUFTLEtBQUssT0FBTztBQUNwQyxRQUFNLGNBQWMsUUFBUSxLQUFLLFFBQVEsS0FBSyxVQUFVLElBQUksS0FBSztBQUNqRSxNQUFJLFNBQVM7QUFBRyxXQUFPLEdBQUcsV0FBVyxHQUFHLE1BQU07QUFDOUMsU0FBTyxHQUFHLFdBQVcsSUFBSSxPQUFPLElBQUksRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsTUFBTTtBQUNqRTs7O0FDMU1BLElBQU0saUJBQWlDO0FBQUE7QUFBQSxFQUVyQyxFQUFFLElBQUksUUFBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUU7QUFBQSxFQUN4RCxFQUFFLElBQUksU0FBYyxNQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUU7QUFBQTtBQUFBLEVBRXpELEVBQUUsSUFBSSxhQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBSyxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxFQUFFLEVBQUU7QUFBQSxFQUNoRyxFQUFFLElBQUksU0FBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksUUFBYyxNQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksUUFBYyxNQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQTtBQUFBLEVBRTFELEVBQUUsSUFBSSxVQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxXQUFjLE1BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxZQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBSSxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQTtBQUFBLEVBRWpHLEVBQUUsSUFBSSxPQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxZQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxVQUFjLE1BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBO0FBQUEsRUFFMUQsRUFBRSxJQUFJLFNBQWMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDMUQsRUFBRSxJQUFJLGNBQWMsTUFBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDMUQsRUFBRSxJQUFJLFVBQWMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFJLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUNuRztBQVFPLFNBQVMsc0JBQ2QsV0FDQSxVQUNBLFFBQ0EsZ0JBQ0EsY0FDQSxXQUNBLEtBQ007QUFDTixRQUFNLFVBQVUsVUFBVSxVQUFVLEVBQUUsS0FBSyx1QkFBdUIsQ0FBQztBQUNuRSxVQUFRLE1BQU0sWUFBWSxPQUFPLE9BQU8sWUFBWSxDQUFDO0FBR3JELFFBQU0sU0FBUyxTQUFTLGNBQWM7QUFDdEMsUUFBTSxhQUFhLFFBQVEsVUFBVSxFQUFFLEtBQUssdUJBQXVCLENBQUM7QUFHcEUsUUFBTSxhQUFhLHNCQUFzQixRQUFRLGdCQUFnQixRQUFRO0FBR3pFLFFBQU0sY0FBYyxXQUFXLFdBQVcscUJBQXFCO0FBQy9ELE1BQUksS0FBSztBQUNQLHFCQUFpQixLQUFLLFdBQVcsRUFBRSxLQUFLLENBQUMsZUFBZTtBQUN0RCxVQUFJLFlBQVk7QUFDZCxtQ0FBMkIsWUFBWSxZQUFZLFlBQVksVUFBVSxhQUFhO0FBQUEsTUFDeEYsT0FBTztBQUVMLDJCQUFtQixZQUFZLFNBQVMsUUFBUSxZQUFZLFVBQVUsYUFBYTtBQUFBLE1BQ3JGO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSCxPQUFPO0FBQ0wsdUJBQW1CLFlBQVksU0FBUyxRQUFRLFlBQVksVUFBVSxhQUFhO0FBQUEsRUFDckY7QUFHQSxRQUFNLFVBQVUsUUFBUSxVQUFVLEVBQUUsS0FBSyx1QkFBdUIsQ0FBQztBQUVqRSxRQUFNLGNBQWMsUUFBUSxTQUFTLFVBQVU7QUFBQSxJQUM3QyxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsY0FBWSxpQkFBaUIsU0FBUyxNQUFNLFVBQVUsZ0JBQWdCLENBQUM7QUFFdkUsUUFBTSxhQUFhLFFBQVEsU0FBUyxVQUFVO0FBQUEsSUFDNUMsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUNELGFBQVcsaUJBQWlCLFNBQVMsTUFBTSxVQUFVLGVBQWUsQ0FBQztBQUN2RTtBQUlBLGVBQWUsaUJBQWlCLEtBQVUsVUFBMEM7QUFDbEYsTUFBSTtBQUNGLFVBQU0sVUFBVSxNQUFNLElBQUksTUFBTSxRQUFRLEtBQUssUUFBUTtBQUNyRCxXQUFPLFdBQVc7QUFBQSxFQUNwQixRQUFRO0FBQ04sV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUlBLFNBQVMsMkJBQ1AsUUFDQSxZQUNBLFlBQ0EsZUFDTTtBQUNOLFFBQU0sU0FBUyxPQUFPLFVBQVUsRUFBRSxLQUFLLHNCQUFzQixDQUFDO0FBQzlELFNBQU8sTUFBTSxXQUFXO0FBQ3hCLFNBQU8sTUFBTSxXQUFXO0FBQ3hCLFNBQU8sTUFBTSxTQUFTO0FBR3RCLFFBQU0sWUFBWSxPQUFPLFVBQVU7QUFDbkMsWUFBVSxNQUFNLFVBQVU7QUFDMUIsWUFBVSxZQUFZO0FBQ3RCLFFBQU0sUUFBUSxVQUFVLGNBQWMsS0FBSztBQUMzQyxNQUFJLE9BQU87QUFDVCxVQUFNLE1BQU0sUUFBUTtBQUNwQixVQUFNLE1BQU0sU0FBUztBQUNyQixVQUFNLE1BQU0sVUFBVTtBQUFBLEVBQ3hCO0FBR0EsUUFBTSxVQUFVLE9BQU8sVUFBVTtBQUNqQyxVQUFRLE1BQU0sVUFBVTtBQUd4QixhQUFXLFVBQVUsZ0JBQWdCO0FBQ25DLFVBQU0sU0FBUyxPQUFPO0FBQ3RCLFFBQUksQ0FBQztBQUFRO0FBRWIsVUFBTSxZQUFZLFdBQVcsSUFBSSxPQUFPLEVBQUUsS0FBSztBQUMvQyxVQUFNLFFBQVEsa0JBQWtCLFNBQVM7QUFFekMsVUFBTSxLQUFLLFFBQVEsVUFBVTtBQUM3QixPQUFHLE1BQU0sVUFBVSx5QkFBeUIsT0FBTyxDQUFDLFVBQVUsT0FBTyxDQUFDLFdBQVcsT0FBTyxDQUFDLFlBQVksT0FBTyxDQUFDLDZFQUE2RSxZQUFZLElBQUksUUFBUSxPQUFPLGFBQWEscUJBQXFCLFlBQVksSUFBSSxRQUFRLE9BQU8sYUFBYTtBQUN2UyxPQUFHLFFBQVEsb0JBQW9CLE9BQU8sRUFBRSxLQUFLLFlBQVksSUFBSSxXQUFNLEtBQUssTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNO0FBRXBHLE9BQUcsaUJBQWlCLGNBQWMsTUFBTTtBQUFFLFNBQUcsTUFBTSxjQUFjLFlBQVksSUFBSSxRQUFRLGFBQWE7QUFBQSxJQUFNLENBQUM7QUFDN0csT0FBRyxpQkFBaUIsY0FBYyxNQUFNO0FBQUUsU0FBRyxNQUFNLGFBQWEsWUFBWSxJQUFJLFFBQVEsT0FBTztBQUFBLElBQWUsQ0FBQztBQUMvRyxPQUFHLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUFFLFFBQUUsZ0JBQWdCO0FBQUcsb0JBQWMsT0FBTyxFQUFFO0FBQUEsSUFBRyxDQUFDO0FBRXRGLFlBQVEsWUFBWSxFQUFFO0FBR3RCLFFBQUksa0JBQWtCLE9BQU8sRUFBRSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQ2pELFlBQU0sYUFBYSxNQUFNLE9BQU8sSUFBSSxPQUFPO0FBQzNDLFlBQU0sU0FBUyxRQUFRLFVBQVU7QUFDakMsYUFBTyxNQUFNLFVBQVUseUJBQXlCLE9BQU8sQ0FBQyxVQUFVLFVBQVUsV0FBVyxPQUFPLENBQUMsWUFBWSxPQUFPLENBQUMsNkVBQTZFLFlBQVksSUFBSSxRQUFRLE9BQU8sYUFBYSxxQkFBcUIsWUFBWSxJQUFJLFFBQVEsT0FBTyxhQUFhO0FBQzdTLGFBQU8sUUFBUSxHQUFHO0FBQ2xCLGFBQU8saUJBQWlCLGNBQWMsTUFBTTtBQUFFLGVBQU8sTUFBTSxjQUFjLFlBQVksSUFBSSxRQUFRLGFBQWE7QUFBQSxNQUFNLENBQUM7QUFDckgsYUFBTyxpQkFBaUIsY0FBYyxNQUFNO0FBQUUsZUFBTyxNQUFNLGFBQWEsWUFBWSxJQUFJLFFBQVEsT0FBTztBQUFBLE1BQWUsQ0FBQztBQUN2SCxhQUFPLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUFFLFVBQUUsZ0JBQWdCO0FBQUcsc0JBQWMsT0FBTyxFQUFFO0FBQUEsTUFBRyxDQUFDO0FBQzFGLGNBQVEsWUFBWSxNQUFNO0FBQUEsSUFDNUI7QUFBQSxFQUNGO0FBQ0Y7QUFJQSxTQUFTLG1CQUNQLFFBQ0EsTUFDQSxRQUNBLFlBQ0EsZUFDTTtBQUNOLFFBQU0sU0FBUyxPQUFPLFVBQVUsRUFBRSxLQUFLLHNCQUFzQixDQUFDO0FBRzlELFNBQU8sU0FBUyxPQUFPO0FBQUEsSUFDckIsS0FBSztBQUFBLElBQ0wsTUFBTSxTQUFTLFVBQVUsVUFBVTtBQUFBLEVBQ3JDLENBQUM7QUFHRCxRQUFNLFFBQVE7QUFDZCxRQUFNLE1BQU0sU0FBUyxnQkFBZ0IsT0FBTyxLQUFLO0FBQ2pELE1BQUksYUFBYSxXQUFXLGFBQWE7QUFDekMsTUFBSSxhQUFhLFNBQVMsa0JBQWtCO0FBRzVDLHFCQUFtQixLQUFLLE9BQU8sUUFBUSxJQUFJO0FBRzNDLGFBQVcsVUFBVSxnQkFBZ0I7QUFDbkMsVUFBTSxTQUFTLFNBQVMsVUFBVSxPQUFPLFFBQVEsT0FBTztBQUN4RCxRQUFJLENBQUM7QUFBUTtBQUViLFVBQU0sWUFBWSxXQUFXLElBQUksT0FBTyxFQUFFLEtBQUs7QUFHL0MsVUFBTSxJQUFJLE9BQU8sSUFBSTtBQUNyQixVQUFNLElBQUksT0FBTyxJQUFJO0FBQ3JCLFVBQU0sSUFBSSxPQUFPLElBQUk7QUFDckIsVUFBTSxJQUFJLE9BQU8sSUFBSTtBQUVyQixVQUFNLE9BQU8sU0FBUyxnQkFBZ0IsT0FBTyxNQUFNO0FBQ25ELFNBQUssYUFBYSxLQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLFNBQUssYUFBYSxLQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLFNBQUssYUFBYSxTQUFTLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLFNBQUssYUFBYSxVQUFVLE9BQU8sQ0FBQyxDQUFDO0FBQ3JDLFNBQUssYUFBYSxNQUFNLEdBQUc7QUFDM0IsU0FBSyxhQUFhLE1BQU0sR0FBRztBQUMzQixTQUFLLGFBQWEsUUFBUSxrQkFBa0IsU0FBUyxDQUFDO0FBQ3RELFNBQUssYUFBYSxXQUFXLFlBQVksSUFBSSxRQUFRLE1BQU07QUFDM0QsU0FBSyxhQUFhLFNBQVMscUJBQXFCO0FBQ2hELFNBQUssYUFBYSxlQUFlLE9BQU8sRUFBRTtBQUcxQyxVQUFNLFFBQVEsU0FBUyxnQkFBZ0IsT0FBTyxPQUFPO0FBQ3JELFVBQU0sY0FBYyxHQUFHLG9CQUFvQixPQUFPLEVBQUUsQ0FBQyxHQUFHLFlBQVksSUFBSSxXQUFNLEtBQUssTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUU7QUFDakgsU0FBSyxZQUFZLEtBQUs7QUFFdEIsU0FBSyxpQkFBaUIsU0FBUyxDQUFDLE1BQU07QUFDcEMsUUFBRSxnQkFBZ0I7QUFDbEIsb0JBQWMsT0FBTyxFQUFFO0FBQUEsSUFDekIsQ0FBQztBQUVELFFBQUksWUFBWSxJQUFJO0FBR3BCLFFBQUksa0JBQWtCLE9BQU8sRUFBRSxLQUFLLE9BQU8sSUFBSSxJQUFJO0FBQ2pELFlBQU0sVUFBVSxNQUFNLElBQUk7QUFDMUIsWUFBTSxTQUFTLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTTtBQUNyRCxhQUFPLGFBQWEsS0FBSyxPQUFPLE9BQU8sQ0FBQztBQUN4QyxhQUFPLGFBQWEsS0FBSyxPQUFPLENBQUMsQ0FBQztBQUNsQyxhQUFPLGFBQWEsU0FBUyxPQUFPLENBQUMsQ0FBQztBQUN0QyxhQUFPLGFBQWEsVUFBVSxPQUFPLENBQUMsQ0FBQztBQUN2QyxhQUFPLGFBQWEsTUFBTSxHQUFHO0FBQzdCLGFBQU8sYUFBYSxNQUFNLEdBQUc7QUFDN0IsYUFBTyxhQUFhLFFBQVEsa0JBQWtCLFNBQVMsQ0FBQztBQUN4RCxhQUFPLGFBQWEsV0FBVyxZQUFZLElBQUksUUFBUSxNQUFNO0FBQzdELGFBQU8sYUFBYSxTQUFTLHFCQUFxQjtBQUNsRCxhQUFPLGFBQWEsZUFBZSxPQUFPLEVBQUU7QUFFNUMsWUFBTSxjQUFjLFNBQVMsZ0JBQWdCLE9BQU8sT0FBTztBQUMzRCxrQkFBWSxjQUFjLEdBQUcsb0JBQW9CLE9BQU8sRUFBRSxDQUFDLEdBQUcsWUFBWSxJQUFJLFdBQU0sS0FBSyxNQUFNLFlBQVksR0FBRyxDQUFDLE1BQU0sRUFBRTtBQUN2SCxhQUFPLFlBQVksV0FBVztBQUU5QixhQUFPLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUN0QyxVQUFFLGdCQUFnQjtBQUNsQixzQkFBYyxPQUFPLEVBQUU7QUFBQSxNQUN6QixDQUFDO0FBRUQsVUFBSSxZQUFZLE1BQU07QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFFQSxTQUFPLFlBQVksR0FBRztBQUN4QjtBQUVBLFNBQVMsa0JBQWtCLElBQTRCO0FBQ3JELFNBQU8sQ0FBQyxhQUFhLFVBQVUsV0FBVyxZQUFZLFNBQVMsY0FBYyxVQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUU7QUFDaEg7QUFFQSxTQUFTLG1CQUFtQixLQUFvQixJQUFZLFFBQWdCLE1BQThCO0FBRXhHLFFBQU0sT0FBTyxTQUFTLGdCQUFnQixJQUFJLE1BQU07QUFHaEQsUUFBTSxXQUFXLFdBQVc7QUFDNUIsUUFBTSxZQUFZLFdBQVcsS0FBSztBQUNsQyxRQUFNLE9BQU8sV0FBVyxLQUFLO0FBQzdCLFFBQU0sU0FBUyxXQUFXLEtBQUs7QUFHL0IsUUFBTSxJQUFJO0FBQUE7QUFBQSxJQUVSO0FBQUEsSUFDQTtBQUFBO0FBQUEsSUFFQTtBQUFBLElBQ0E7QUFBQTtBQUFBLElBRUEsYUFBYSxNQUFNLFNBQVM7QUFBQSxJQUM1QixjQUFjLE1BQU0sU0FBUztBQUFBO0FBQUEsSUFFN0IsS0FBSyxNQUFNLFNBQVMsU0FBUyxNQUFNLFlBQVksQ0FBQztBQUFBLElBQ2hELEtBQUssTUFBTSxNQUFNO0FBQUEsSUFDakIsS0FBSyxNQUFNLElBQUk7QUFBQTtBQUFBLElBRWYsS0FBSyxNQUFNLFNBQVMsU0FBUyxNQUFNLFlBQVksQ0FBQztBQUFBLElBQ2hELEtBQUssTUFBTSxNQUFNO0FBQUEsSUFDakIsS0FBSyxNQUFNLElBQUk7QUFBQTtBQUFBLElBRWYsS0FBSyxNQUFNLFNBQVMsU0FBUyxNQUFNLFlBQVksRUFBRTtBQUFBLElBQ2pELEtBQUssTUFBTSxZQUFZLEVBQUU7QUFBQSxJQUN6QixLQUFLLE1BQU0sWUFBWSxDQUFDLFNBQVMsTUFBTSxZQUFZLEVBQUU7QUFBQSxJQUNyRCxLQUFLLE1BQU0sWUFBWSxFQUFFO0FBQUE7QUFBQSxJQUV6QixLQUFLLE1BQU0sU0FBUyxTQUFTLE1BQU0sWUFBWSxFQUFFO0FBQUEsSUFDakQsS0FBSyxNQUFNLFlBQVksRUFBRTtBQUFBLElBQ3pCLEtBQUssTUFBTSxZQUFZLENBQUMsU0FBUyxNQUFNLFlBQVksRUFBRTtBQUFBLElBQ3JELEtBQUssTUFBTSxZQUFZLEVBQUU7QUFBQTtBQUFBLElBRXpCLEtBQUssTUFBTSxJQUFJLFVBQVUsTUFBTSxPQUFPLENBQUM7QUFBQSxJQUN2QyxLQUFLLE1BQU0sT0FBTyxFQUFFO0FBQUEsSUFDcEIsS0FBSyxNQUFNLENBQUMsVUFBVSxNQUFNLEVBQUU7QUFBQSxJQUM5QixLQUFLLE1BQU0sRUFBRTtBQUFBO0FBQUEsSUFFYixLQUFLLE1BQU0sSUFBSSxVQUFVLE1BQU0sT0FBTyxDQUFDO0FBQUEsSUFDdkMsS0FBSyxNQUFNLE9BQU8sRUFBRTtBQUFBLElBQ3BCLEtBQUssTUFBTSxDQUFDLFVBQVUsTUFBTSxFQUFFO0FBQUEsSUFDOUIsS0FBSyxNQUFNLEVBQUU7QUFBQSxFQUNmLEVBQUUsS0FBSyxHQUFHO0FBRVYsT0FBSyxhQUFhLEtBQUssQ0FBQztBQUN4QixPQUFLLGFBQWEsUUFBUSxNQUFNO0FBQ2hDLE9BQUssYUFBYSxVQUFVLDJCQUEyQjtBQUN2RCxPQUFLLGFBQWEsZ0JBQWdCLEtBQUs7QUFDdkMsT0FBSyxhQUFhLGtCQUFrQixPQUFPO0FBQzNDLE1BQUksWUFBWSxJQUFJO0FBQ3RCO0FBSUEsU0FBUyxzQkFDUCxRQUNBLGdCQUNBLFVBQzRCO0FBQzVCLFFBQU0sT0FBTyxvQkFBSSxJQUEyQjtBQUk1QyxRQUFNLGtCQUFrQixTQUFTLFdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLFNBQVM7QUFDMUUsTUFBSSxDQUFDO0FBQWlCLFdBQU87QUFFN0IsUUFBTSxRQUFRLGVBQWUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO0FBQ3JELFFBQU0sTUFBTSxvQkFBSSxLQUFLO0FBQ3JCLFFBQU0sZ0JBQWdCLElBQUksS0FBSyxJQUFJLFFBQVEsSUFBSSxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUk7QUFHdkUsUUFBTSxvQkFBb0IsTUFBTSxPQUFPLENBQUMsTUFBTTtBQUM1QyxRQUFJLENBQUMsRUFBRTtBQUFXLGFBQU87QUFDekIsVUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUk7QUFDekIsV0FBTyxLQUFLO0FBQUEsRUFDZCxDQUFDLEVBQUU7QUFFSCxNQUFJLHNCQUFzQjtBQUFHLFdBQU87QUFLcEMsUUFBTSxnQkFBZ0IsS0FBSyxJQUFJLEdBQUcsb0JBQW9CLEVBQUU7QUFHeEQsUUFBTSxhQUE4QjtBQUFBLElBQ2xDO0FBQUEsSUFBUztBQUFBLElBQVE7QUFBQSxJQUFhO0FBQUEsSUFBVTtBQUFBLElBQVc7QUFBQSxJQUNuRDtBQUFBLElBQU87QUFBQSxJQUFZO0FBQUEsSUFBUztBQUFBLElBQWM7QUFBQSxJQUFVO0FBQUEsSUFDcEQ7QUFBQSxJQUFTO0FBQUEsSUFBUTtBQUFBLEVBQ25CO0FBRUEsYUFBVyxLQUFLLFlBQVk7QUFDMUIsU0FBSyxJQUFJLEdBQUcsZ0JBQWdCLEdBQUc7QUFBQSxFQUNqQztBQUVBLFNBQU87QUFDVDtBQUlBLFNBQVMsa0JBQWtCLFdBQTJCO0FBQ3BELE1BQUksYUFBYTtBQUFHLFdBQU87QUFDM0IsTUFBSSxZQUFZO0FBQUssV0FBTztBQUM1QixNQUFJLFlBQVk7QUFBSyxXQUFPO0FBQzVCLE1BQUksWUFBWTtBQUFLLFdBQU87QUFDNUIsU0FBTztBQUNUO0FBSU8sU0FBUyx3QkFDZCxVQUNBLFVBQ0EsZ0JBQ007QUFDTixRQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsVUFBUSxZQUFZO0FBRXBCLFFBQU0sUUFBUSxRQUFRLFVBQVUsRUFBRSxLQUFLLGlDQUFpQyxDQUFDO0FBQ3pFLFFBQU0sVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFFNUMsUUFBTSxRQUFRLG9CQUFvQixRQUFRO0FBQzFDLFFBQU0sU0FBUyxPQUFPLEVBQUUsS0FBSyxtQkFBbUIsTUFBTSxNQUFNLENBQUM7QUFHN0QsUUFBTSxpQkFBaUIsTUFBTSxVQUFVLEVBQUUsS0FBSyxzQkFBc0IsQ0FBQztBQUNyRSx1QkFBcUIsZ0JBQWdCLFVBQVUsVUFBVSxnQkFBZ0IsT0FBTztBQUdoRixRQUFNLFlBQVksTUFBTSxVQUFVLEVBQUUsS0FBSyx1QkFBdUIsQ0FBQztBQUNqRSxRQUFNLFdBQVcsVUFBVSxTQUFTLFVBQVU7QUFBQSxJQUM1QyxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsUUFBTSxVQUFVLFVBQVUsU0FBUyxVQUFVO0FBQUEsSUFDM0MsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUVELFdBQVMsaUJBQWlCLFNBQVMsTUFBTTtBQUN2QyxtQkFBZSxNQUFNO0FBQ3JCLHlCQUFxQixnQkFBZ0IsVUFBVSxVQUFVLGdCQUFnQixPQUFPO0FBQ2hGLGFBQVMsWUFBWTtBQUNyQixZQUFRLFlBQVk7QUFBQSxFQUN0QixDQUFDO0FBRUQsVUFBUSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3RDLG1CQUFlLE1BQU07QUFDckIseUJBQXFCLGdCQUFnQixVQUFVLFVBQVUsZ0JBQWdCLE1BQU07QUFDL0UsWUFBUSxZQUFZO0FBQ3BCLGFBQVMsWUFBWTtBQUFBLEVBQ3ZCLENBQUM7QUFHRCxVQUFRLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUN2QyxRQUFJLEVBQUUsV0FBVztBQUFTLGlCQUFXO0FBQUEsRUFDdkMsQ0FBQztBQUVELFdBQVMsYUFBbUI7QUFDMUIsWUFBUSxVQUFVLE9BQU8sU0FBUztBQUNsQyxlQUFXLE1BQU0sUUFBUSxPQUFPLEdBQUcsR0FBRztBQUFBLEVBQ3hDO0FBRUEsV0FBUyxLQUFLLFlBQVksT0FBTztBQUNqQyx3QkFBc0IsTUFBTSxRQUFRLFVBQVUsSUFBSSxTQUFTLENBQUM7QUFDOUQ7QUFJTyxTQUFTLHlCQUNkLFVBQ0EsZ0JBQ007QUFDTixRQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsVUFBUSxZQUFZO0FBRXBCLFFBQU0sUUFBUSxRQUFRLFVBQVUsRUFBRSxLQUFLLGlDQUFpQyxDQUFDO0FBQ3pFLFFBQU0sVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFFNUMsUUFBTSxTQUFTLE9BQU8sRUFBRSxLQUFLLG1CQUFtQixNQUFNLG9CQUFvQixDQUFDO0FBRzNFLFFBQU0sWUFBWSxNQUFNLFVBQVUsRUFBRSxLQUFLLHVCQUF1QixDQUFDO0FBQ2pFLFFBQU0sV0FBVyxVQUFVLFNBQVMsVUFBVTtBQUFBLElBQzVDLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxFQUNSLENBQUM7QUFDRCxRQUFNLFVBQVUsVUFBVSxTQUFTLFVBQVU7QUFBQSxJQUMzQyxLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUixDQUFDO0FBR0QsUUFBTSxTQUFTLE9BQU87QUFBQSxJQUNwQixLQUFLO0FBQUEsSUFDTCxNQUFNO0FBQUEsRUFDUixDQUFDO0FBQ0QsUUFBTSxlQUFlLE1BQU0sVUFBVSxFQUFFLEtBQUssc0JBQXNCLENBQUM7QUFDbkUsNkJBQTJCLGNBQWMsVUFBVSxnQkFBZ0IsT0FBTztBQUcxRSxRQUFNLFNBQVMsT0FBTztBQUFBLElBQ3BCLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxFQUNSLENBQUM7QUFDRCxRQUFNLGNBQWMsTUFBTSxVQUFVLEVBQUUsS0FBSyxzQkFBc0IsQ0FBQztBQUNsRSw2QkFBMkIsYUFBYSxVQUFVLGdCQUFnQixPQUFPO0FBRXpFLFdBQVMsaUJBQWlCLFNBQVMsTUFBTTtBQUN2QyxpQkFBYSxNQUFNO0FBQ25CLGdCQUFZLE1BQU07QUFDbEIsK0JBQTJCLGNBQWMsVUFBVSxnQkFBZ0IsT0FBTztBQUMxRSwrQkFBMkIsYUFBYSxVQUFVLGdCQUFnQixPQUFPO0FBQ3pFLGFBQVMsWUFBWTtBQUNyQixZQUFRLFlBQVk7QUFBQSxFQUN0QixDQUFDO0FBRUQsVUFBUSxpQkFBaUIsU0FBUyxNQUFNO0FBQ3RDLGlCQUFhLE1BQU07QUFDbkIsZ0JBQVksTUFBTTtBQUNsQiwrQkFBMkIsY0FBYyxVQUFVLGdCQUFnQixNQUFNO0FBQ3pFLCtCQUEyQixhQUFhLFVBQVUsZ0JBQWdCLE1BQU07QUFDeEUsWUFBUSxZQUFZO0FBQ3BCLGFBQVMsWUFBWTtBQUFBLEVBQ3ZCLENBQUM7QUFFRCxVQUFRLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUN2QyxRQUFJLEVBQUUsV0FBVztBQUFTLGlCQUFXO0FBQUEsRUFDdkMsQ0FBQztBQUVELFdBQVMsYUFBbUI7QUFDMUIsWUFBUSxVQUFVLE9BQU8sU0FBUztBQUNsQyxlQUFXLE1BQU0sUUFBUSxPQUFPLEdBQUcsR0FBRztBQUFBLEVBQ3hDO0FBRUEsV0FBUyxLQUFLLFlBQVksT0FBTztBQUNqQyx3QkFBc0IsTUFBTSxRQUFRLFVBQVUsSUFBSSxTQUFTLENBQUM7QUFDOUQ7QUFJQSxTQUFTLHFCQUNQLFdBQ0EsVUFDQSxVQUNBLGdCQUNBLFFBQ007QUFDTixRQUFNLGtCQUFrQixTQUFTLFdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLFNBQVM7QUFDMUUsTUFBSSxDQUFDLGlCQUFpQjtBQUNwQixjQUFVLFNBQVMsT0FBTyxFQUFFLEtBQUssdUJBQXVCLE1BQU0sNEJBQTRCLENBQUM7QUFDM0Y7QUFBQSxFQUNGO0FBRUEsUUFBTSxRQUFRLGVBQWUsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO0FBQ3JELFFBQU0sTUFBTSxvQkFBSSxLQUFLO0FBQ3JCLFFBQU0sU0FBbUIsQ0FBQztBQUMxQixRQUFNLFNBQW1CLENBQUM7QUFFMUIsTUFBSSxXQUFXLFNBQVM7QUFFdEIsYUFBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDM0IsWUFBTSxVQUFVLElBQUksS0FBSyxJQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssR0FBSTtBQUNwRSxZQUFNLFlBQVksSUFBSSxLQUFLLFFBQVEsUUFBUSxJQUFJLElBQUksS0FBSyxLQUFLLEtBQUssR0FBSTtBQUN0RSxZQUFNLFFBQVEsTUFBTSxPQUFPLENBQUMsTUFBTTtBQUNoQyxZQUFJLENBQUMsRUFBRTtBQUFXLGlCQUFPO0FBQ3pCLGNBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJO0FBQ3pCLGVBQU8sS0FBSyxhQUFhLElBQUk7QUFBQSxNQUMvQixDQUFDLEVBQUU7QUFDSCxhQUFPLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRTtBQUN2QixhQUFPLEtBQUssS0FBSztBQUFBLElBQ25CO0FBQUEsRUFDRixPQUFPO0FBRUwsVUFBTSxhQUFhLENBQUMsS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDOUUsYUFBUyxJQUFJLElBQUksS0FBSyxHQUFHLEtBQUs7QUFDNUIsWUFBTSxZQUFZLElBQUksS0FBSyxJQUFJLFlBQVksR0FBRyxJQUFJLFNBQVMsSUFBSSxHQUFHLENBQUM7QUFDbkUsWUFBTSxXQUFXLElBQUksS0FBSyxVQUFVLFlBQVksR0FBRyxVQUFVLFNBQVMsSUFBSSxHQUFHLENBQUM7QUFDOUUsWUFBTSxRQUFRLE1BQU0sT0FBTyxDQUFDLE1BQU07QUFDaEMsWUFBSSxDQUFDLEVBQUU7QUFBVyxpQkFBTztBQUN6QixjQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsSUFBSTtBQUN6QixlQUFPLEtBQUssYUFBYSxLQUFLO0FBQUEsTUFDaEMsQ0FBQyxFQUFFO0FBQ0gsYUFBTyxLQUFLLFdBQVcsVUFBVSxTQUFTLENBQUMsQ0FBQztBQUM1QyxhQUFPLEtBQUssS0FBSztBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUVBLGdCQUFjLFdBQVcsUUFBUSxRQUFRLFNBQVM7QUFDcEQ7QUFFQSxTQUFTLDJCQUNQLFdBQ0EsVUFDQSxnQkFDQSxRQUNNO0FBQ04sUUFBTSxpQkFBaUIsU0FBUyxXQUFXLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsTUFBTTtBQUMzRixNQUFJLGVBQWUsV0FBVyxHQUFHO0FBQy9CLGNBQVUsU0FBUyxPQUFPLEVBQUUsS0FBSyx1QkFBdUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE1BQU0sb0JBQUksS0FBSztBQUNyQixRQUFNLFNBQW1CLENBQUM7QUFDMUIsUUFBTSxTQUFtQixDQUFDO0FBRTFCLE1BQUksV0FBVyxTQUFTO0FBQ3RCLGFBQVMsSUFBSSxHQUFHLEtBQUssR0FBRyxLQUFLO0FBQzNCLFlBQU0sVUFBVSxJQUFJLEtBQUssSUFBSSxRQUFRLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLEdBQUk7QUFDcEUsWUFBTSxZQUFZLElBQUksS0FBSyxRQUFRLFFBQVEsSUFBSSxJQUFJLEtBQUssS0FBSyxLQUFLLEdBQUk7QUFDdEUsVUFBSSxRQUFRO0FBQ1osaUJBQVcsT0FBTyxnQkFBZ0I7QUFDaEMsY0FBTSxRQUFRLGVBQWUsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUN6QyxpQkFBUyxNQUFNLE9BQU8sQ0FBQyxNQUFNO0FBQzNCLGNBQUksQ0FBQyxFQUFFO0FBQVcsbUJBQU87QUFDekIsZ0JBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJO0FBQ3pCLGlCQUFPLEtBQUssYUFBYSxJQUFJO0FBQUEsUUFDL0IsQ0FBQyxFQUFFO0FBQUEsTUFDTDtBQUNBLGFBQU8sS0FBSyxJQUFJLElBQUksQ0FBQyxFQUFFO0FBQ3ZCLGFBQU8sS0FBSyxLQUFLO0FBQUEsSUFDbkI7QUFBQSxFQUNGLE9BQU87QUFDTCxVQUFNLGFBQWEsQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBRztBQUM5RSxhQUFTLElBQUksSUFBSSxLQUFLLEdBQUcsS0FBSztBQUM1QixZQUFNLFlBQVksSUFBSSxLQUFLLElBQUksWUFBWSxHQUFHLElBQUksU0FBUyxJQUFJLEdBQUcsQ0FBQztBQUNuRSxZQUFNLFdBQVcsSUFBSSxLQUFLLFVBQVUsWUFBWSxHQUFHLFVBQVUsU0FBUyxJQUFJLEdBQUcsQ0FBQztBQUM5RSxVQUFJLFFBQVE7QUFDWixpQkFBVyxPQUFPLGdCQUFnQjtBQUNoQyxjQUFNLFFBQVEsZUFBZSxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQ3pDLGlCQUFTLE1BQU0sT0FBTyxDQUFDLE1BQU07QUFDM0IsY0FBSSxDQUFDLEVBQUU7QUFBVyxtQkFBTztBQUN6QixnQkFBTSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUk7QUFDekIsaUJBQU8sS0FBSyxhQUFhLEtBQUs7QUFBQSxRQUNoQyxDQUFDLEVBQUU7QUFBQSxNQUNMO0FBQ0EsYUFBTyxLQUFLLFdBQVcsVUFBVSxTQUFTLENBQUMsQ0FBQztBQUM1QyxhQUFPLEtBQUssS0FBSztBQUFBLElBQ25CO0FBQUEsRUFDRjtBQUVBLGdCQUFjLFdBQVcsUUFBUSxRQUFRLFNBQVM7QUFDcEQ7QUFFQSxTQUFTLDJCQUNQLFdBQ0EsVUFDQSxnQkFDQSxRQUNNO0FBRU4sUUFBTSxpQkFBaUIsU0FBUyxXQUFXLE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsTUFBTTtBQUMzRixNQUFJLGVBQWUsV0FBVyxHQUFHO0FBQy9CLGNBQVUsU0FBUyxPQUFPLEVBQUUsS0FBSyx1QkFBdUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMvRjtBQUFBLEVBQ0Y7QUFFQSxRQUFNLE1BQU0sb0JBQUksS0FBSztBQUNyQixRQUFNLFNBQVMsQ0FBQyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsU0FBUztBQUVoRixRQUFNLFFBQVE7QUFDZCxRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVM7QUFDZixRQUFNLFVBQVUsRUFBRSxLQUFLLElBQUksT0FBTyxJQUFJLFFBQVEsSUFBSSxNQUFNLEdBQUc7QUFDM0QsUUFBTSxTQUFTLFFBQVEsUUFBUSxPQUFPLFFBQVE7QUFDOUMsUUFBTSxTQUFTLFNBQVMsUUFBUSxNQUFNLFFBQVE7QUFFOUMsUUFBTSxNQUFNLFNBQVMsZ0JBQWdCLE9BQU8sS0FBSztBQUNqRCxNQUFJLGFBQWEsV0FBVyxPQUFPLEtBQUssSUFBSSxNQUFNLEVBQUU7QUFDcEQsTUFBSSxhQUFhLFNBQVMsbUJBQW1CO0FBRTdDLFFBQU0sY0FBYyxXQUFXLFVBQVUsSUFBSTtBQUc3QyxRQUFNLFlBQWlFLENBQUM7QUFDeEUsTUFBSSxZQUFZO0FBRWhCLFdBQVMsS0FBSyxHQUFHLEtBQUssZUFBZSxRQUFRLE1BQU07QUFDakQsVUFBTSxNQUFNLGVBQWUsRUFBRTtBQUM3QixVQUFNLFFBQVEsZUFBZSxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQ3pDLFVBQU0sT0FBaUIsQ0FBQztBQUV4QixRQUFJLFdBQVcsU0FBUztBQUN0QixlQUFTLElBQUksR0FBRyxLQUFLLEdBQUcsS0FBSztBQUMzQixjQUFNLFVBQVUsSUFBSSxLQUFLLElBQUksUUFBUSxJQUFJLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxHQUFJO0FBQ3BFLGNBQU0sWUFBWSxJQUFJLEtBQUssUUFBUSxRQUFRLElBQUksSUFBSSxLQUFLLEtBQUssS0FBSyxHQUFJO0FBQ3RFLGFBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQyxNQUFNO0FBQzVCLGNBQUksQ0FBQyxFQUFFO0FBQVcsbUJBQU87QUFDekIsZ0JBQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxJQUFJO0FBQ3pCLGlCQUFPLEtBQUssYUFBYSxJQUFJO0FBQUEsUUFDL0IsQ0FBQyxFQUFFLE1BQU07QUFBQSxNQUNYO0FBQUEsSUFDRixPQUFPO0FBQ0wsZUFBUyxJQUFJLElBQUksS0FBSyxHQUFHLEtBQUs7QUFDNUIsY0FBTSxZQUFZLElBQUksS0FBSyxJQUFJLFlBQVksR0FBRyxJQUFJLFNBQVMsSUFBSSxHQUFHLENBQUM7QUFDbkUsY0FBTSxXQUFXLElBQUksS0FBSyxVQUFVLFlBQVksR0FBRyxVQUFVLFNBQVMsSUFBSSxHQUFHLENBQUM7QUFDOUUsYUFBSyxLQUFLLE1BQU0sT0FBTyxDQUFDLE1BQU07QUFDNUIsY0FBSSxDQUFDLEVBQUU7QUFBVyxtQkFBTztBQUN6QixnQkFBTSxJQUFJLElBQUksS0FBSyxFQUFFLElBQUk7QUFDekIsaUJBQU8sS0FBSyxhQUFhLEtBQUs7QUFBQSxRQUNoQyxDQUFDLEVBQUUsTUFBTTtBQUFBLE1BQ1g7QUFBQSxJQUNGO0FBRUEsVUFBTSxNQUFNLEtBQUssSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUMvQixRQUFJLE1BQU07QUFBVyxrQkFBWTtBQUVqQyxjQUFVLEtBQUs7QUFBQSxNQUNiLE1BQU0sSUFBSTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsT0FBTyxPQUFPLEtBQUssT0FBTyxNQUFNO0FBQUEsSUFDbEMsQ0FBQztBQUFBLEVBQ0g7QUFHQSxhQUFXLFVBQVUsV0FBVztBQUM5QixVQUFNLFNBQVMsT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLE1BQU07QUFDekMsWUFBTSxJQUFJLFFBQVEsT0FBUSxLQUFLLGNBQWMsS0FBTTtBQUNuRCxZQUFNLElBQUksUUFBUSxNQUFNLFNBQVUsSUFBSSxZQUFhO0FBQ25ELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQztBQUFBLElBQ2xCLENBQUM7QUFFRCxVQUFNLE9BQU8sU0FBUyxnQkFBZ0IsT0FBTyxVQUFVO0FBQ3ZELFNBQUssYUFBYSxVQUFVLE9BQU8sS0FBSyxHQUFHLENBQUM7QUFDNUMsU0FBSyxhQUFhLFFBQVEsTUFBTTtBQUNoQyxTQUFLLGFBQWEsVUFBVSxPQUFPLEtBQUs7QUFDeEMsU0FBSyxhQUFhLGdCQUFnQixLQUFLO0FBQ3ZDLFNBQUssYUFBYSxrQkFBa0IsT0FBTztBQUMzQyxTQUFLLGFBQWEsbUJBQW1CLE9BQU87QUFDNUMsUUFBSSxZQUFZLElBQUk7QUFBQSxFQUN0QjtBQUdBLFFBQU0sVUFBVSxXQUFXLFVBQ3ZCLENBQUMsTUFBTSxNQUFNLE1BQU0sSUFBSSxJQUN2QixDQUFDLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBRS9ELFdBQVMsSUFBSSxHQUFHLElBQUksYUFBYSxLQUFLO0FBQ3BDLFVBQU0sSUFBSSxRQUFRLE9BQVEsS0FBSyxjQUFjLEtBQU07QUFDbkQsVUFBTSxRQUFRLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTTtBQUNwRCxVQUFNLGFBQWEsS0FBSyxPQUFPLENBQUMsQ0FBQztBQUNqQyxVQUFNLGFBQWEsS0FBSyxPQUFPLFNBQVMsQ0FBQyxDQUFDO0FBQzFDLFVBQU0sYUFBYSxlQUFlLFFBQVE7QUFDMUMsVUFBTSxhQUFhLFFBQVEsMEJBQTBCO0FBQ3JELFVBQU0sYUFBYSxhQUFhLEdBQUc7QUFDbkMsVUFBTSxjQUFjLFFBQVEsQ0FBQztBQUM3QixRQUFJLFlBQVksS0FBSztBQUFBLEVBQ3ZCO0FBRUEsWUFBVSxZQUFZLEdBQUc7QUFHekIsUUFBTSxTQUFTLFVBQVUsVUFBVSxFQUFFLEtBQUssdUJBQXVCLENBQUM7QUFDbEUsYUFBVyxVQUFVLFdBQVc7QUFDOUIsVUFBTSxPQUFPLE9BQU8sVUFBVSxFQUFFLEtBQUssNEJBQTRCLENBQUM7QUFDbEUsVUFBTSxNQUFNLEtBQUssVUFBVSxFQUFFLEtBQUssMkJBQTJCLENBQUM7QUFDOUQsUUFBSSxNQUFNLGFBQWEsT0FBTztBQUM5QixTQUFLLFNBQVMsUUFBUSxFQUFFLE1BQU0sT0FBTyxLQUFLLENBQUM7QUFBQSxFQUM3QztBQUNGO0FBRUEsU0FBUyxjQUNQLFdBQ0EsUUFDQSxRQUNBLE9BQ007QUFDTixRQUFNLFFBQVE7QUFDZCxRQUFNLFFBQVE7QUFDZCxRQUFNLFNBQVM7QUFDZixRQUFNLFVBQVUsRUFBRSxLQUFLLElBQUksT0FBTyxJQUFJLFFBQVEsSUFBSSxNQUFNLEdBQUc7QUFDM0QsUUFBTSxTQUFTLFFBQVEsUUFBUSxPQUFPLFFBQVE7QUFDOUMsUUFBTSxTQUFTLFNBQVMsUUFBUSxNQUFNLFFBQVE7QUFDOUMsUUFBTSxTQUFTLEtBQUssSUFBSSxHQUFHLFFBQVEsQ0FBQztBQUVwQyxRQUFNLE1BQU0sU0FBUyxnQkFBZ0IsT0FBTyxLQUFLO0FBQ2pELE1BQUksYUFBYSxXQUFXLE9BQU8sS0FBSyxJQUFJLE1BQU0sRUFBRTtBQUNwRCxNQUFJLGFBQWEsU0FBUyxtQkFBbUI7QUFHN0MsV0FBUyxJQUFJLEdBQUcsS0FBSyxHQUFHLEtBQUs7QUFDM0IsVUFBTSxLQUFLLFFBQVEsTUFBTyxJQUFJLElBQUs7QUFDbkMsVUFBTSxPQUFPLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTTtBQUNuRCxTQUFLLGFBQWEsTUFBTSxPQUFPLFFBQVEsSUFBSSxDQUFDO0FBQzVDLFNBQUssYUFBYSxNQUFNLE9BQU8sUUFBUSxRQUFRLEtBQUssQ0FBQztBQUNyRCxTQUFLLGFBQWEsTUFBTSxPQUFPLEVBQUUsQ0FBQztBQUNsQyxTQUFLLGFBQWEsTUFBTSxPQUFPLEVBQUUsQ0FBQztBQUNsQyxTQUFLLGFBQWEsVUFBVSwyQkFBMkI7QUFDdkQsU0FBSyxhQUFhLGdCQUFnQixLQUFLO0FBQ3ZDLFFBQUksWUFBWSxJQUFJO0FBQUEsRUFDdEI7QUFHQSxRQUFNLFNBQVMsT0FBTyxJQUFJLENBQUMsR0FBRyxPQUFPO0FBQUEsSUFDbkMsR0FBRyxRQUFRLE9BQVEsSUFBSSxLQUFLLElBQUksR0FBRyxPQUFPLFNBQVMsQ0FBQyxJQUFLO0FBQUEsSUFDekQsR0FBRyxRQUFRLE1BQU0sU0FBVSxJQUFJLFNBQVU7QUFBQSxFQUMzQyxFQUFFO0FBR0YsTUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQixRQUFJLElBQUksS0FBSyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUN2QyxhQUFTLElBQUksR0FBRyxJQUFJLE9BQU8sU0FBUyxHQUFHLEtBQUs7QUFDMUMsWUFBTSxLQUFLLE9BQU8sS0FBSyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDcEMsWUFBTSxLQUFLLE9BQU8sQ0FBQztBQUNuQixZQUFNLEtBQUssT0FBTyxJQUFJLENBQUM7QUFDdkIsWUFBTSxLQUFLLE9BQU8sS0FBSyxJQUFJLE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQ3BELFlBQU0sT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSztBQUNwQyxZQUFNLE9BQU8sR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEtBQUs7QUFDcEMsWUFBTSxPQUFPLEdBQUcsS0FBSyxHQUFHLElBQUksR0FBRyxLQUFLO0FBQ3BDLFlBQU0sT0FBTyxHQUFHLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSztBQUNwQyxXQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQztBQUFBLElBQzNEO0FBR0EsVUFBTSxPQUFPLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTTtBQUNuRCxVQUFNLFFBQVEsSUFBSSxNQUFNLE9BQU8sT0FBTyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxNQUFNLE1BQU0sTUFBTSxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksUUFBUSxNQUFNLE1BQU07QUFDcEgsU0FBSyxhQUFhLEtBQUssS0FBSztBQUM1QixTQUFLLGFBQWEsUUFBUSxLQUFLO0FBQy9CLFNBQUssYUFBYSxXQUFXLE1BQU07QUFDbkMsUUFBSSxZQUFZLElBQUk7QUFHcEIsVUFBTSxPQUFPLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTTtBQUNuRCxTQUFLLGFBQWEsS0FBSyxDQUFDO0FBQ3hCLFNBQUssYUFBYSxRQUFRLE1BQU07QUFDaEMsU0FBSyxhQUFhLFVBQVUsS0FBSztBQUNqQyxTQUFLLGFBQWEsZ0JBQWdCLEtBQUs7QUFDdkMsU0FBSyxhQUFhLGtCQUFrQixPQUFPO0FBQzNDLFFBQUksWUFBWSxJQUFJO0FBQUEsRUFDdEI7QUFHQSxhQUFXLE1BQU0sUUFBUTtBQUN2QixVQUFNLE1BQU0sU0FBUyxnQkFBZ0IsT0FBTyxRQUFRO0FBQ3BELFFBQUksYUFBYSxNQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7QUFDbkMsUUFBSSxhQUFhLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNuQyxRQUFJLGFBQWEsS0FBSyxLQUFLO0FBQzNCLFFBQUksYUFBYSxRQUFRLEtBQUs7QUFDOUIsUUFBSSxZQUFZLEdBQUc7QUFBQSxFQUNyQjtBQUdBLFdBQVMsSUFBSSxHQUFHLElBQUksT0FBTyxRQUFRLEtBQUs7QUFDdEMsVUFBTSxJQUFJLFFBQVEsT0FBUSxJQUFJLEtBQUssSUFBSSxHQUFHLE9BQU8sU0FBUyxDQUFDLElBQUs7QUFDaEUsVUFBTSxPQUFPLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTTtBQUNuRCxTQUFLLGFBQWEsS0FBSyxPQUFPLENBQUMsQ0FBQztBQUNoQyxTQUFLLGFBQWEsS0FBSyxPQUFPLFNBQVMsQ0FBQyxDQUFDO0FBQ3pDLFNBQUssYUFBYSxlQUFlLFFBQVE7QUFDekMsU0FBSyxhQUFhLFFBQVEsMEJBQTBCO0FBQ3BELFNBQUssYUFBYSxhQUFhLEdBQUc7QUFDbEMsU0FBSyxjQUFjLE9BQU8sQ0FBQztBQUMzQixRQUFJLFlBQVksSUFBSTtBQUFBLEVBQ3RCO0FBRUEsWUFBVSxZQUFZLEdBQUc7QUFDM0I7QUFJTyxTQUFTLG1CQUNkLFdBQ007QUFDTixRQUFNLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFDNUMsVUFBUSxZQUFZO0FBRXBCLFFBQU0sUUFBUSxRQUFRLFVBQVUsRUFBRSxLQUFLLHdDQUF3QyxDQUFDO0FBQ2hGLFFBQU0sVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFFNUMsUUFBTSxTQUFTLE9BQU8sRUFBRSxLQUFLLG1CQUFtQixNQUFNLGlCQUFpQixDQUFDO0FBQ3hFLFFBQU0sU0FBUyxPQUFPO0FBQUEsSUFDcEIsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUVELFFBQU0sV0FBVyxvQkFBSSxJQUFtQjtBQUd4QyxRQUFNLGFBQWEsTUFBTSxVQUFVLEVBQUUsS0FBSyw4QkFBOEIsQ0FBQztBQUV6RSxRQUFNLFFBQVE7QUFDZCxRQUFNLE1BQU0sU0FBUyxnQkFBZ0IsT0FBTyxLQUFLO0FBQ2pELE1BQUksYUFBYSxXQUFXLGFBQWE7QUFDekMsTUFBSSxhQUFhLFNBQVMsb0NBQW9DO0FBRzlELHFCQUFtQixLQUFLLE9BQU8sUUFBUSxPQUFPO0FBRzlDLFFBQU0sUUFBOEMsb0JBQUksSUFBSTtBQUU1RCxhQUFXLFVBQVUsZ0JBQWdCO0FBQ25DLFVBQU0sU0FBUyxPQUFPLFNBQVMsT0FBTztBQUN0QyxRQUFJLENBQUM7QUFBUTtBQUViLFVBQU0sSUFBSSxPQUFPLElBQUk7QUFDckIsVUFBTSxJQUFJLE9BQU8sSUFBSTtBQUNyQixVQUFNLElBQUksT0FBTyxJQUFJO0FBQ3JCLFVBQU0sSUFBSSxPQUFPLElBQUk7QUFFckIsVUFBTSxPQUFPLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTTtBQUNuRCxTQUFLLGFBQWEsS0FBSyxPQUFPLENBQUMsQ0FBQztBQUNoQyxTQUFLLGFBQWEsS0FBSyxPQUFPLENBQUMsQ0FBQztBQUNoQyxTQUFLLGFBQWEsU0FBUyxPQUFPLENBQUMsQ0FBQztBQUNwQyxTQUFLLGFBQWEsVUFBVSxPQUFPLENBQUMsQ0FBQztBQUNyQyxTQUFLLGFBQWEsTUFBTSxHQUFHO0FBQzNCLFNBQUssYUFBYSxNQUFNLEdBQUc7QUFDM0IsU0FBSyxhQUFhLFFBQVEsMkJBQTJCO0FBQ3JELFNBQUssYUFBYSxTQUFTLDBDQUEwQztBQUNyRSxTQUFLLGFBQWEsZUFBZSxPQUFPLEVBQUU7QUFFMUMsVUFBTSxnQkFBZ0IsTUFBTSxJQUFJLE9BQU8sRUFBRSxLQUFLLENBQUM7QUFDL0Msa0JBQWMsS0FBSyxJQUFJO0FBQ3ZCLFVBQU0sSUFBSSxPQUFPLElBQUksYUFBYTtBQUVsQyxTQUFLLGlCQUFpQixTQUFTLENBQUMsTUFBTTtBQUNwQyxRQUFFLGdCQUFnQjtBQUNsQixtQkFBYSxPQUFPLEVBQUU7QUFBQSxJQUN4QixDQUFDO0FBRUQsUUFBSSxZQUFZLElBQUk7QUFHcEIsUUFBSSxrQkFBa0IsT0FBTyxFQUFFLEtBQUssT0FBTyxJQUFJLElBQUk7QUFDakQsWUFBTSxVQUFVLE1BQU0sSUFBSTtBQUMxQixZQUFNLFNBQVMsU0FBUyxnQkFBZ0IsT0FBTyxNQUFNO0FBQ3JELGFBQU8sYUFBYSxLQUFLLE9BQU8sT0FBTyxDQUFDO0FBQ3hDLGFBQU8sYUFBYSxLQUFLLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLGFBQU8sYUFBYSxTQUFTLE9BQU8sQ0FBQyxDQUFDO0FBQ3RDLGFBQU8sYUFBYSxVQUFVLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZDLGFBQU8sYUFBYSxNQUFNLEdBQUc7QUFDN0IsYUFBTyxhQUFhLE1BQU0sR0FBRztBQUM3QixhQUFPLGFBQWEsUUFBUSwyQkFBMkI7QUFDdkQsYUFBTyxhQUFhLFNBQVMsMENBQTBDO0FBQ3ZFLGFBQU8sYUFBYSxlQUFlLE9BQU8sRUFBRTtBQUU1QyxvQkFBYyxLQUFLLE1BQU07QUFDekIsWUFBTSxJQUFJLE9BQU8sSUFBSSxhQUFhO0FBRWxDLGFBQU8saUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3RDLFVBQUUsZ0JBQWdCO0FBQ2xCLHFCQUFhLE9BQU8sRUFBRTtBQUFBLE1BQ3hCLENBQUM7QUFFRCxVQUFJLFlBQVksTUFBTTtBQUFBLElBQ3hCO0FBR0EsVUFBTSxZQUFZLFNBQVMsZ0JBQWdCLE9BQU8sTUFBTTtBQUN4RCxjQUFVLGFBQWEsS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7QUFDN0MsY0FBVSxhQUFhLEtBQUssT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUM7QUFDakQsY0FBVSxhQUFhLGVBQWUsUUFBUTtBQUM5QyxjQUFVLGFBQWEsUUFBUSwwQkFBMEI7QUFDekQsY0FBVSxhQUFhLGFBQWEsR0FBRztBQUN2QyxjQUFVLGFBQWEsa0JBQWtCLE1BQU07QUFDL0MsY0FBVSxjQUFjLG9CQUFvQixPQUFPLEVBQUUsRUFBRSxNQUFNLEdBQUcsQ0FBQztBQUNqRSxRQUFJLFlBQVksU0FBUztBQUFBLEVBQzNCO0FBRUEsYUFBVyxZQUFZLEdBQUc7QUFHMUIsUUFBTSxZQUFZLE1BQU0sVUFBVSxFQUFFLEtBQUssNkJBQTZCLENBQUM7QUFFdkUsV0FBUyxhQUFhLElBQXlCO0FBQzdDLFFBQUksU0FBUyxJQUFJLEVBQUUsR0FBRztBQUNwQixlQUFTLE9BQU8sRUFBRTtBQUFBLElBQ3BCLE9BQU87QUFDTCxlQUFTLElBQUksRUFBRTtBQUFBLElBQ2pCO0FBQ0EsaUJBQWE7QUFBQSxFQUNmO0FBRUEsV0FBUyxlQUFxQjtBQUU1QixlQUFXLENBQUMsSUFBSSxRQUFRLEtBQUssT0FBTztBQUNsQyxZQUFNLGFBQWEsU0FBUyxJQUFJLEVBQUU7QUFDbEMsaUJBQVcsS0FBSyxVQUFVO0FBQ3hCLFVBQUUsYUFBYSxRQUFRLGFBQWEsNEJBQTRCLDJCQUEyQjtBQUFBLE1BQzdGO0FBQUEsSUFDRjtBQUdBLGNBQVUsTUFBTTtBQUNoQixlQUFXLE1BQU0sVUFBVTtBQUN6QixZQUFNLE9BQU8sVUFBVSxVQUFVLEVBQUUsS0FBSyw0QkFBNEIsQ0FBQztBQUNyRSxXQUFLLGNBQWMsb0JBQW9CLEVBQUU7QUFDekMsV0FBSyxpQkFBaUIsU0FBUyxNQUFNLGFBQWEsRUFBRSxDQUFDO0FBQUEsSUFDdkQ7QUFBQSxFQUNGO0FBR0EsUUFBTSxVQUFVLE1BQU0sVUFBVSxFQUFFLEtBQUssdUJBQXVCLENBQUM7QUFDL0QsUUFBTSxhQUFhLFFBQVEsU0FBUyxVQUFVO0FBQUEsSUFDNUMsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUNELGFBQVcsaUJBQWlCLFNBQVMsTUFBTTtBQUN6QyxlQUFXO0FBQ1gsY0FBVSxNQUFNLEtBQUssUUFBUSxDQUFDO0FBQUEsRUFDaEMsQ0FBQztBQUVELFFBQU0sWUFBWSxRQUFRLFNBQVMsVUFBVTtBQUFBLElBQzNDLEtBQUs7QUFBQSxJQUNMLE1BQU07QUFBQSxFQUNSLENBQUM7QUFDRCxZQUFVLGlCQUFpQixTQUFTLE1BQU0sV0FBVyxDQUFDO0FBRXRELFVBQVEsaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLFFBQUksRUFBRSxXQUFXO0FBQVMsaUJBQVc7QUFBQSxFQUN2QyxDQUFDO0FBRUQsV0FBUyxhQUFtQjtBQUMxQixZQUFRLFVBQVUsT0FBTyxTQUFTO0FBQ2xDLGVBQVcsTUFBTSxRQUFRLE9BQU8sR0FBRyxHQUFHO0FBQUEsRUFDeEM7QUFFQSxXQUFTLEtBQUssWUFBWSxPQUFPO0FBQ2pDLHdCQUFzQixNQUFNLFFBQVEsVUFBVSxJQUFJLFNBQVMsQ0FBQztBQUM5RDs7O0FDNTlCTyxTQUFTLHlCQUNkLFdBQ0EsVUFDQSxjQUNBLGFBQ007QUFDTixRQUFNLFFBQVEsU0FBUztBQUN2QixNQUFJLENBQUMsTUFBTSxpQkFBaUIsTUFBTSxVQUFVLFdBQVc7QUFBRztBQUUxRCxRQUFNLGVBQWUsb0JBQW9CLE1BQU0saUJBQWlCO0FBQ2hFLFFBQU0sZUFBZSxnQkFBZ0IsTUFBTSxvQkFBb0IsTUFBTSxtQkFBbUI7QUFFeEYsTUFBSSxlQUFlO0FBQWM7QUFHakMsUUFBTSxPQUFPLFVBQVUsVUFBVSxFQUFFLEtBQUssdUNBQXVDLENBQUM7QUFDaEYsT0FBSyxNQUFNLFlBQVksT0FBTyxPQUFPLFlBQVksQ0FBQztBQUVsRCxRQUFNLE1BQU0sS0FBSyxVQUFVLEVBQUUsS0FBSyx5QkFBeUIsQ0FBQztBQUM1RCxNQUFJLFNBQVMsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFeEQsUUFBTSxNQUFNLElBQUksU0FBUyxVQUFVO0FBQUEsSUFDakMsS0FBSztBQUFBLElBQ0wsTUFBTTtBQUFBLEVBQ1IsQ0FBQztBQUNELE1BQUksaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ25DLE1BQUUsZ0JBQWdCO0FBQ2xCLGdCQUFZO0FBQUEsRUFDZCxDQUFDO0FBQ0g7QUFFQSxTQUFTLG9CQUFvQixVQUFpQztBQUM1RCxNQUFJLENBQUM7QUFBVSxXQUFPO0FBQ3RCLFFBQU0sT0FBTyxJQUFJLEtBQUssUUFBUTtBQUM5QixRQUFNLE1BQU0sb0JBQUksS0FBSztBQUNyQixRQUFNLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxRQUFRO0FBQ3hDLFNBQU8sS0FBSyxNQUFNLE1BQU0sS0FBSyxLQUFLLEtBQUssSUFBSztBQUM5QztBQUVBLFNBQVMsZ0JBQWdCLE1BQTBCLFlBQTRCO0FBQzdFLFVBQVEsTUFBTTtBQUFBLElBQ1osS0FBSztBQUFnQixhQUFPO0FBQUEsSUFDNUIsS0FBSztBQUFjLGFBQU87QUFBQSxJQUMxQixLQUFLO0FBQWlCLGFBQU87QUFBQSxJQUM3QixLQUFLO0FBQWdCLGFBQU87QUFBQSxJQUM1QixLQUFLO0FBQWdCLGFBQU87QUFBQSxJQUM1QixLQUFLO0FBQVUsYUFBTztBQUFBLElBQ3RCO0FBQVMsYUFBTztBQUFBLEVBQ2xCO0FBQ0Y7OztBQzlDTyxTQUFTLHdCQUNkLFdBQ0EsVUFDQSxRQUNBLGNBQ007QUFDTixRQUFNLFFBQVEsU0FBUyxVQUFVLE9BQU8sbUJBQW1CO0FBRzNELFFBQU0sVUFBVSxVQUFVLFVBQVUsRUFBRSxLQUFLLHFCQUFxQixDQUFDO0FBQ2pFLFVBQVEsU0FBUyxPQUFPLEVBQUUsS0FBSyxnQkFBZ0IsTUFBTSxNQUFNLENBQUM7QUFHNUQsUUFBTSxPQUFPLFVBQVUsVUFBVSxFQUFFLEtBQUssWUFBWSxDQUFDO0FBQ3JELE9BQUssTUFBTSxZQUFZLE9BQU8sT0FBTyxZQUFZLENBQUM7QUFHbEQsUUFBTSxTQUFTLEtBQUssVUFBVSxFQUFFLEtBQUssc0JBQXNCLENBQUM7QUFDNUQsUUFBTSxjQUFjLEtBQUssVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFFcEUsUUFBTSxVQUE2QixDQUFDLEtBQUssS0FBSyxLQUFLLEdBQUc7QUFDdEQsUUFBTSxhQUE0QixDQUFDO0FBQ25DLE1BQUksZUFBZ0M7QUFFcEMsYUFBVyxVQUFVLFNBQVM7QUFDNUIsVUFBTSxNQUFNLE9BQU8sU0FBUyxVQUFVLEVBQUUsS0FBSyxzQkFBc0IsTUFBTSxPQUFPLENBQUM7QUFDakYsUUFBSSxXQUFXO0FBQWMsVUFBSSxVQUFVLElBQUksUUFBUTtBQUN2RCxlQUFXLEtBQUssR0FBRztBQUVuQixRQUFJLGlCQUFpQixTQUFTLE1BQU07QUFDbEMscUJBQWU7QUFDZixpQkFBVyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsT0FBTyxRQUFRLENBQUM7QUFDdEQsVUFBSSxVQUFVLElBQUksUUFBUTtBQUMxQixtQkFBYSxhQUFhLFFBQVEsVUFBVSxNQUFNO0FBQUEsSUFDcEQsQ0FBQztBQUFBLEVBQ0g7QUFHQSxlQUFhLGFBQWEsY0FBYyxVQUFVLE1BQU07QUFDMUQ7QUFFQSxTQUFTLGFBQ1AsV0FDQSxRQUNBLFVBQ0EsUUFDTTtBQUNOLFlBQVUsTUFBTTtBQUVoQixVQUFRLFFBQVE7QUFBQSxJQUNkLEtBQUs7QUFBSyxzQkFBZ0IsV0FBVyxVQUFVLE1BQU07QUFBRztBQUFBLElBQ3hELEtBQUs7QUFBSyx1QkFBaUIsV0FBVyxVQUFVLE1BQU07QUFBRztBQUFBLElBQ3pELEtBQUs7QUFBSyx3QkFBa0IsV0FBVyxVQUFVLE1BQU07QUFBRztBQUFBLElBQzFELEtBQUs7QUFBSyx1QkFBaUIsV0FBVyxVQUFVLE1BQU07QUFBRztBQUFBLEVBQzNEO0FBQ0Y7QUFJQSxTQUFTLGdCQUNQLFdBQ0EsVUFDQSxRQUNNO0FBQ04sUUFBTSxRQUFRLE9BQU8sY0FBYztBQUNuQyxRQUFNLFFBQVEsTUFBTSxZQUFZO0FBQ2hDLFFBQU0sT0FBTyxNQUFNO0FBQ25CLFFBQU0sYUFBYSxRQUFRLElBQUksS0FBSyxNQUFPLE9BQU8sUUFBUyxHQUFHLElBQUk7QUFHbEUsUUFBTSxNQUFNLFVBQVUsVUFBVSxFQUFFLEtBQUssdUJBQXVCLENBQUM7QUFDL0QsYUFBVyxLQUFLLE9BQU8sSUFBSSxHQUFHLFVBQVU7QUFDeEMsYUFBVyxLQUFLLEdBQUcsVUFBVSxLQUFLLE9BQU87QUFDekMsYUFBVyxLQUFLLE9BQU8sUUFBUSxJQUFJLEdBQUcsV0FBVztBQUdqRCxZQUFVLFVBQVUsRUFBRSxLQUFLLGVBQWUsQ0FBQztBQUczQyxhQUFXLEtBQUssTUFBTSxhQUFhO0FBQ2pDLFVBQU0sT0FBTyxVQUFVLFVBQVUsRUFBRSxLQUFLLDhCQUE4QixDQUFDO0FBQ3ZFLFNBQUssU0FBUyxRQUFRLEVBQUUsS0FBSyxpQ0FBaUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztBQUM3RSxTQUFLLFNBQVMsUUFBUSxFQUFFLEtBQUssZ0NBQWdDLE1BQU0sRUFBRSxLQUFLLENBQUM7QUFFM0UsVUFBTSxRQUFRLEtBQUssU0FBUyxRQUFRLEVBQUUsS0FBSyxnQ0FBZ0MsQ0FBQztBQUM1RSxRQUFJLEVBQUUsTUFBTTtBQUNWLFlBQU0sUUFBUSxRQUFRO0FBQ3RCLFlBQU0sVUFBVSxJQUFJLE1BQU07QUFBQSxJQUM1QixPQUFPO0FBQ0wsWUFBTSxRQUFRLFFBQVE7QUFBQSxJQUN4QjtBQUFBLEVBQ0Y7QUFDRjtBQUlBLFNBQVMsaUJBQ1AsV0FDQSxVQUNBLFFBQ007QUFDTixRQUFNLFFBQVEsT0FBTyxlQUFlO0FBR3BDLFFBQU0sTUFBTSxVQUFVLFVBQVUsRUFBRSxLQUFLLHVCQUF1QixDQUFDO0FBQy9ELGFBQVcsS0FBSyxPQUFPLE1BQU0sVUFBVSxJQUFJLE1BQU0sYUFBYTtBQUM5RCxhQUFXLEtBQUssTUFBTSxTQUFTLFVBQVU7QUFFekMsUUFBTSxTQUFTLE1BQU0sZ0JBQWdCLElBQUksSUFBSSxNQUFNLFlBQVksS0FBSyxPQUFPLE1BQU0sWUFBWTtBQUM3RixhQUFXLEtBQUssUUFBUSxjQUFjO0FBR3RDLFlBQVUsVUFBVSxFQUFFLEtBQUssZUFBZSxDQUFDO0FBRzNDLFFBQU0sTUFBTSxTQUFTLGdCQUFnQixJQUFJLEtBQUssU0FBUyxhQUFhLElBQUksb0JBQUksS0FBSztBQUNqRixRQUFNLFdBQVcsSUFBSSxLQUFLLEdBQUcsRUFBRSxZQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFFeEQsTUFBSSxXQUFXO0FBQ2YsYUFBVyxPQUFPLE1BQU0sT0FBTztBQUM3QixRQUFJLFFBQVE7QUFDWixRQUFJLFlBQVksUUFBUSxDQUFDLE1BQU07QUFBRSxlQUFTO0FBQUEsSUFBRyxDQUFDO0FBQzlDLFFBQUksUUFBUTtBQUFVLGlCQUFXO0FBQUEsRUFDbkM7QUFFQSxRQUFNLGdCQUFnQixVQUFVLFVBQVUsRUFBRSxLQUFLLG1CQUFtQixDQUFDO0FBQ3JFLGFBQVcsT0FBTyxNQUFNLE9BQU87QUFDN0IsVUFBTSxNQUFNLGNBQWMsVUFBVSxFQUFFLEtBQUssc0JBQXNCLENBQUM7QUFDbEUsUUFBSSxRQUFRO0FBQ1osUUFBSSxZQUFZLFFBQVEsQ0FBQyxNQUFNO0FBQUUsZUFBUztBQUFBLElBQUcsQ0FBQztBQUU5QyxVQUFNLFlBQVksV0FBVyxJQUFJLEtBQUssSUFBSSxHQUFJLFFBQVEsV0FBWSxHQUFHLElBQUk7QUFDekUsVUFBTSxRQUFRLElBQUksVUFBVSxFQUFFLEtBQUssa0JBQWtCLENBQUM7QUFDdEQsVUFBTSxNQUFNLFNBQVMsR0FBRyxTQUFTO0FBQ2pDLFVBQU0sTUFBTSxZQUFZO0FBRXhCLFFBQUksSUFBSSxTQUFTO0FBQVUsWUFBTSxVQUFVLElBQUksdUJBQXVCO0FBRXRFLFVBQU0sYUFBeUIsQ0FBQyxRQUFRLFFBQVEsUUFBUTtBQUN4RCxlQUFXLE9BQU8sWUFBWTtBQUM1QixZQUFNLFdBQVcsSUFBSSxZQUFZLElBQUksR0FBRyxLQUFLO0FBQzdDLFVBQUksYUFBYTtBQUFHO0FBQ3BCLFlBQU0sWUFBWSxRQUFRLElBQUssV0FBVyxRQUFTLE1BQU07QUFDekQsWUFBTSxNQUFNLE1BQU0sVUFBVSxFQUFFLEtBQUssMEJBQTBCLENBQUM7QUFDOUQsVUFBSSxNQUFNLFNBQVMsR0FBRyxTQUFTO0FBQy9CLFVBQUksTUFBTSxhQUFhQyxrQkFBaUIsS0FBSyxRQUFRO0FBQUEsSUFDdkQ7QUFFQSxRQUFJLFVBQVU7QUFBRyxZQUFNLE1BQU0sYUFBYTtBQUMxQyxRQUFJLFNBQVMsT0FBTyxFQUFFLEtBQUsseUJBQXlCLE1BQU0sSUFBSSxJQUFJLE9BQU8sQ0FBQyxFQUFFLENBQUM7QUFBQSxFQUMvRTtBQUdBLFFBQU0sU0FBUyxPQUFPLGlCQUFpQjtBQUN2QyxNQUFJLFNBQVMsR0FBRztBQUNkLFVBQU0sV0FBVyxVQUFVLFVBQVUsRUFBRSxLQUFLLHdCQUF3QixDQUFDO0FBQ3JFLGFBQVMsUUFBUSxhQUFhLE1BQU0sYUFBYTtBQUFBLEVBQ25EO0FBQ0Y7QUFJQSxTQUFTLGtCQUNQLFdBQ0EsVUFDQSxRQUNNO0FBQ04sUUFBTSxRQUFRLE9BQU8sZ0JBQWdCO0FBR3JDLFFBQU0sTUFBTSxVQUFVLFVBQVUsRUFBRSxLQUFLLHVCQUF1QixDQUFDO0FBQy9ELGFBQVcsS0FBSyxPQUFPLE1BQU0sYUFBYSxHQUFHLFVBQVU7QUFDdkQsYUFBVyxLQUFLLE9BQU8sTUFBTSxVQUFVLEdBQUcsYUFBYTtBQUN2RCxhQUFXLEtBQUssT0FBTyxNQUFNLFFBQVEsR0FBRyxTQUFTO0FBR2pELFlBQVUsVUFBVSxFQUFFLEtBQUssZUFBZSxDQUFDO0FBRzNDLFFBQU0sVUFBVSxVQUFVLFVBQVUsRUFBRSxLQUFLLHlCQUF5QixDQUFDO0FBQ3JFLFFBQU0sTUFBTSxTQUFTLGdCQUFnQixJQUFJLEtBQUssU0FBUyxhQUFhLElBQUksb0JBQUksS0FBSztBQUNqRixRQUFNLE9BQU8sSUFBSSxZQUFZO0FBQzdCLFFBQU0sUUFBUSxJQUFJLFNBQVM7QUFDM0IsUUFBTSxpQkFBaUIsSUFBSSxLQUFLLE1BQU0sT0FBTyxDQUFDLEVBQUUsT0FBTztBQUN2RCxRQUFNLGdCQUFnQixtQkFBbUIsSUFBSSxJQUFJLGlCQUFpQjtBQUdsRSxRQUFNLFlBQVksQ0FBQyxLQUFLLEtBQUssS0FBSyxLQUFLLEtBQUssS0FBSyxHQUFHO0FBQ3BELFFBQU0sWUFBWSxRQUFRLFVBQVUsRUFBRSxLQUFLLDZCQUE2QixDQUFDO0FBQ3pFLGFBQVcsTUFBTSxXQUFXO0FBQzFCLGNBQVUsU0FBUyxPQUFPLEVBQUUsS0FBSyxnQ0FBZ0MsTUFBTSxHQUFHLENBQUM7QUFBQSxFQUM3RTtBQUdBLE1BQUksU0FBUztBQUNiLGFBQVcsS0FBSyxNQUFNLGNBQWM7QUFDbEMsUUFBSSxFQUFFLFFBQVE7QUFBUSxlQUFTLEVBQUU7QUFBQSxFQUNuQztBQUdBLE1BQUksVUFBVTtBQUNkLE1BQUksYUFBYSxRQUFRLFVBQVUsRUFBRSxLQUFLLDZCQUE2QixDQUFDO0FBR3hFLFdBQVMsSUFBSSxHQUFHLElBQUksZUFBZSxLQUFLO0FBQ3RDLGVBQVcsVUFBVSxFQUFFLEtBQUssb0NBQW9DLENBQUM7QUFDakU7QUFBQSxFQUNGO0FBRUEsUUFBTSxXQUFXLElBQUksWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQzlDLGFBQVcsT0FBTyxNQUFNLGNBQWM7QUFDcEMsUUFBSSxVQUFVLEtBQUssVUFBVSxNQUFNLEdBQUc7QUFDcEMsbUJBQWEsUUFBUSxVQUFVLEVBQUUsS0FBSyw2QkFBNkIsQ0FBQztBQUFBLElBQ3RFO0FBRUEsVUFBTSxPQUFPLFdBQVcsVUFBVSxFQUFFLEtBQUssOEJBQThCLENBQUM7QUFDeEUsVUFBTSxVQUFVLFNBQVMsSUFBSSxLQUFLLE1BQU0sRUFBRSxDQUFDO0FBQzNDLFNBQUssU0FBUyxRQUFRLEVBQUUsS0FBSyw4QkFBOEIsTUFBTSxPQUFPLE9BQU8sRUFBRSxDQUFDO0FBRWxGLFFBQUksSUFBSSxRQUFRLEdBQUc7QUFDakIsWUFBTSxZQUFZLEtBQUssSUFBSSxHQUFHLElBQUksUUFBUSxNQUFNO0FBQ2hELFdBQUssTUFBTSxhQUFhLHNCQUFzQixPQUFPLFlBQVksSUFBSTtBQUNyRSxXQUFLLE1BQU0sY0FBYyxzQkFBc0IsT0FBTyxZQUFZLElBQUk7QUFBQSxJQUN4RTtBQUVBLFFBQUksSUFBSSxTQUFTO0FBQVUsV0FBSyxVQUFVLElBQUksT0FBTztBQUNyRDtBQUFBLEVBQ0Y7QUFHQSxRQUFNLFdBQVcsVUFBVSxVQUFVLEVBQUUsS0FBSywwQkFBMEIsQ0FBQztBQUN2RSxXQUFTLFFBQVEsU0FBUztBQUUxQixpQkFBZSxXQUFXLE1BQU0sUUFBUSxRQUFRO0FBQ2xEO0FBSUEsU0FBUyxpQkFDUCxXQUNBLFVBQ0EsUUFDTTtBQUNOLFFBQU0sUUFBUSxPQUFPLGVBQWU7QUFHcEMsUUFBTSxNQUFNLFVBQVUsVUFBVSxFQUFFLEtBQUssdUJBQXVCLENBQUM7QUFDL0QsYUFBVyxLQUFLLE9BQU8sTUFBTSxhQUFhLEdBQUcsVUFBVTtBQUN2RCxhQUFXLEtBQUssT0FBTyxNQUFNLFVBQVUsR0FBRyxhQUFhO0FBR3ZELFlBQVUsVUFBVSxFQUFFLEtBQUssZUFBZSxDQUFDO0FBRzNDLFFBQU0sV0FBVyxVQUFVLFVBQVUsRUFBRSxLQUFLLDBCQUEwQixDQUFDO0FBQ3ZFLFdBQVMsUUFBUSxjQUFjO0FBRS9CLGlCQUFlLFdBQVcsTUFBTSxTQUFTLFFBQVE7QUFHakQsUUFBTSxXQUFXLFVBQVUsVUFBVSxFQUFFLEtBQUssMEJBQTBCLENBQUM7QUFDdkUsV0FBUyxRQUFRLGdCQUFnQjtBQUVqQyxRQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0scUJBQXFCLE9BQU8sQ0FBQyxFQUFFLE9BQU8sQ0FBQyxHQUFHLE1BQU0sSUFBSSxHQUFHLENBQUM7QUFDMUYsTUFBSSxXQUFXLEdBQUc7QUFDaEIsVUFBTSxVQUFVLFVBQVUsVUFBVSxFQUFFLEtBQUssMEJBQTBCLENBQUM7QUFDdEUsVUFBTSxhQUF5QixDQUFDLFFBQVEsUUFBUSxRQUFRO0FBQ3hELGVBQVcsT0FBTyxZQUFZO0FBQzVCLFlBQU0sUUFBUSxNQUFNLHFCQUFxQixJQUFJLEdBQUcsS0FBSztBQUNyRCxVQUFJLFVBQVU7QUFBRztBQUNqQixZQUFNLE1BQU8sUUFBUSxXQUFZO0FBQ2pDLFlBQU0sTUFBTSxRQUFRLFVBQVUsRUFBRSxLQUFLLDBCQUEwQixDQUFDO0FBQ2hFLFVBQUksTUFBTSxRQUFRLEdBQUcsR0FBRztBQUN4QixVQUFJLE1BQU0sYUFBYUEsa0JBQWlCLEtBQUssUUFBUTtBQUFBLElBQ3ZEO0FBR0EsVUFBTSxZQUFZLFVBQVUsVUFBVSxFQUFFLEtBQUssNkJBQTZCLENBQUM7QUFDM0UsZUFBVyxPQUFPLFlBQVk7QUFDNUIsWUFBTSxRQUFRLE1BQU0scUJBQXFCLElBQUksR0FBRyxLQUFLO0FBQ3JELFVBQUksVUFBVTtBQUFHO0FBQ2pCLFlBQU0sTUFBTSxLQUFLLE1BQU8sUUFBUSxXQUFZLEdBQUc7QUFDL0MsWUFBTSxNQUFNLFVBQVUsVUFBVSxFQUFFLEtBQUssNEJBQTRCLENBQUM7QUFDcEUsWUFBTSxNQUFNLElBQUksU0FBUyxRQUFRLEVBQUUsS0FBSywwQkFBMEIsQ0FBQztBQUNuRSxVQUFJLE1BQU0sYUFBYUEsa0JBQWlCLEtBQUssUUFBUTtBQUNyRCxVQUFJLFNBQVMsUUFBUSxFQUFFLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxJQUN4RjtBQUFBLEVBQ0YsT0FBTztBQUNMLFVBQU0sUUFBUSxVQUFVLFVBQVUsRUFBRSxLQUFLLHVCQUF1QixDQUFDO0FBQ2pFLFVBQU0sUUFBUSw4Q0FBOEM7QUFBQSxFQUM5RDtBQUNGO0FBSUEsU0FBUyxXQUFXLFFBQXFCLE9BQWUsT0FBcUI7QUFDM0UsUUFBTSxPQUFPLE9BQU8sVUFBVSxFQUFFLEtBQUssc0JBQXNCLENBQUM7QUFDNUQsT0FBSyxTQUFTLE9BQU8sRUFBRSxLQUFLLDZCQUE2QixNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFLLFNBQVMsT0FBTyxFQUFFLEtBQUssNkJBQTZCLE1BQU0sTUFBTSxDQUFDO0FBQ3hFO0FBRUEsU0FBUyxlQUNQLFFBQ0EsTUFDQSxVQUNNO0FBQ04sTUFBSSxXQUFXO0FBQ2YsYUFBVyxLQUFLLE1BQU07QUFDcEIsUUFBSSxFQUFFLFFBQVE7QUFBVSxpQkFBVyxFQUFFO0FBQUEsRUFDdkM7QUFFQSxRQUFNLE9BQU8sT0FBTyxVQUFVLEVBQUUsS0FBSyxzQkFBc0IsQ0FBQztBQUM1RCxhQUFXLEtBQUssTUFBTTtBQUNwQixVQUFNLE1BQU0sS0FBSyxVQUFVLEVBQUUsS0FBSyx5QkFBeUIsQ0FBQztBQUM1RCxVQUFNLFlBQVksV0FBVyxJQUFJLEtBQUssSUFBSSxHQUFJLEVBQUUsUUFBUSxXQUFZLEVBQUUsSUFBSTtBQUMxRSxVQUFNLFFBQVEsSUFBSSxVQUFVLEVBQUUsS0FBSyxxQkFBcUIsQ0FBQztBQUN6RCxVQUFNLE1BQU0sU0FBUyxHQUFHLFNBQVM7QUFFakMsVUFBTSxhQUF5QixDQUFDLFFBQVEsUUFBUSxRQUFRO0FBQ3hELGVBQVcsT0FBTyxZQUFZO0FBQzVCLFlBQU0sV0FBVyxFQUFFLFdBQVcsSUFBSSxHQUFHLEtBQUs7QUFDMUMsVUFBSSxhQUFhO0FBQUc7QUFDcEIsWUFBTSxZQUFZLEVBQUUsUUFBUSxJQUFLLFdBQVcsRUFBRSxRQUFTLE1BQU07QUFDN0QsWUFBTSxNQUFNLE1BQU0sVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFDN0QsVUFBSSxNQUFNLFNBQVMsR0FBRyxTQUFTO0FBQy9CLFVBQUksTUFBTSxhQUFhQSxrQkFBaUIsS0FBSyxRQUFRO0FBQUEsSUFDdkQ7QUFFQSxRQUFJLEVBQUUsVUFBVTtBQUFHLFlBQU0sTUFBTSxhQUFhO0FBQzVDLFFBQUksU0FBUyxPQUFPLEVBQUUsS0FBSyw0QkFBNEIsTUFBTSxFQUFFLE1BQU0sQ0FBQztBQUFBLEVBQ3hFO0FBQ0Y7QUFFQSxTQUFTQSxrQkFBaUIsVUFBb0IsVUFBZ0M7QUFDNUUsU0FBTyxTQUFTLGVBQWUsUUFBUSxLQUFLO0FBQzlDOzs7QWZoVU8sSUFBTSxnQkFBTixjQUE0QiwwQkFBUztBQUFBLEVBSTFDLFlBQVksTUFBcUIsUUFBb0I7QUFDbkQsVUFBTSxJQUFJO0FBQ1YsU0FBSyxTQUFTO0FBQ2QsU0FBSyxZQUFZLENBQUM7QUFBQSxFQUNwQjtBQUFBLEVBRUEsY0FBc0I7QUFDcEIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLGlCQUF5QjtBQUN2QixXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRUEsVUFBa0I7QUFDaEIsV0FBTztBQUFBLEVBQ1Q7QUFBQSxFQUVBLE1BQU0sU0FBd0I7QUFDNUIsU0FBSyxZQUFZLENBQUM7QUFDbEIsVUFBTSxLQUFLLE9BQU87QUFBQSxFQUNwQjtBQUFBLEVBRUEsTUFBTSxVQUF5QjtBQUM3QixTQUFLLFFBQVE7QUFDYixTQUFLLFVBQVUsTUFBTTtBQUFBLEVBQ3ZCO0FBQUEsRUFFQSxVQUFnQjtBQUNkLGVBQVcsTUFBTSxLQUFLLFdBQVc7QUFDL0Isb0JBQWMsRUFBRTtBQUFBLElBQ2xCO0FBQ0EsU0FBSyxZQUFZLENBQUM7QUFBQSxFQUNwQjtBQUFBLEVBRUEsTUFBTSxTQUF3QjtBQUM1QixTQUFLLFFBQVE7QUFDYixVQUFNLFlBQVksS0FBSztBQUN2QixjQUFVLE1BQU07QUFFaEIsVUFBTSxXQUFXLEtBQUssT0FBTztBQUM3QixVQUFNLE9BQU8sVUFBVSxVQUFVLEVBQUUsS0FBSyxpQkFBaUIsQ0FBQztBQUcxRCxTQUFLLG9CQUFvQixJQUFJO0FBRzdCLFVBQU0saUJBQWlCLEtBQUsscUJBQXFCO0FBR2pELFVBQU0sTUFBTSxTQUFTLGdCQUFnQixJQUFJLEtBQUssU0FBUyxhQUFhLElBQUksb0JBQUksS0FBSztBQUNqRixVQUFNLFNBQVMsSUFBSSxXQUFXLFVBQVUsZ0JBQWdCLEdBQUc7QUFHM0QsVUFBTSxpQkFBaUIsSUFBSSxlQUFlLEtBQUssS0FBSyxVQUFVLEdBQUc7QUFDakUsVUFBTSxnQkFBZ0IsTUFBTSxLQUFLLG9CQUFvQixjQUFjO0FBQ25FLFVBQU0sa0JBQWtCLGVBQWUsZ0JBQWdCLGFBQWE7QUFDcEUsV0FBTyxtQkFBbUIsZUFBZTtBQUd6QyxVQUFNLGVBQWUsU0FBUyxVQUFVO0FBQ3hDLFVBQU0sU0FBUyxJQUFJLElBQUksU0FBUyxVQUFVLGNBQWM7QUFFeEQsUUFBSSxhQUFhO0FBRWpCLGVBQVcsV0FBVyxjQUFjO0FBQ2xDLFVBQUksT0FBTyxJQUFJLE9BQU87QUFBRztBQUV6QixjQUFRLFNBQVM7QUFBQSxRQUNmLEtBQUs7QUFDSCx5QkFBZSxNQUFNLFVBQVUsUUFBUSxZQUFZO0FBQ25EO0FBQUEsUUFFRixLQUFLO0FBQ0gsZ0NBQXNCLE1BQU0sVUFBVSxRQUFRLGdCQUFnQixjQUFjO0FBQUEsWUFDMUUsZUFBZSxDQUFDLGFBQTRCO0FBQzFDLHNDQUF3QixVQUFVLFVBQVUsY0FBYztBQUFBLFlBQzVEO0FBQUEsWUFDQSxpQkFBaUIsTUFBTTtBQUNyQix1Q0FBeUIsVUFBVSxjQUFjO0FBQUEsWUFDbkQ7QUFBQSxZQUNBLGdCQUFnQixNQUFNO0FBQ3BCLGlDQUFtQixDQUFDLGFBQWE7QUFFL0IscUJBQUsscUJBQXFCLFNBQVM7QUFBQSxjQUNyQyxDQUFDO0FBQUEsWUFDSDtBQUFBLFVBQ0YsR0FBRyxLQUFLLEdBQUc7QUFFWCxtQ0FBeUIsTUFBTSxVQUFVLFlBQVksTUFBTTtBQUN6RCxpQkFBSyxnQkFBZ0I7QUFBQSxVQUN2QixDQUFDO0FBQ0Q7QUFBQSxRQUVGLEtBQUs7QUFDSCw4QkFBb0IsTUFBTSxVQUFVLFFBQVEsVUFBVTtBQUN0RCx3QkFBYztBQUNkO0FBQUEsUUFFRixLQUFLO0FBQ0gsNEJBQWtCLE1BQU0sVUFBVSxRQUFRLGNBQWM7QUFBQSxZQUN0RCxVQUFVLENBQUMsZUFBZSxLQUFLLHFCQUFxQixVQUFVO0FBQUEsWUFDOUQsUUFBUSxDQUFDLGVBQWUsS0FBSyxtQkFBbUIsWUFBWSxNQUFNO0FBQUEsWUFDbEUsZ0JBQWdCLENBQUMsVUFBVSxLQUFLLHVCQUF1QixLQUFLO0FBQUEsWUFDNUQsb0JBQW9CLENBQUMsVUFBVSxLQUFLLDJCQUEyQixLQUFLO0FBQUEsWUFDcEUsZUFBZSxNQUFPLEtBQUssT0FBZSxvQkFBb0I7QUFBQSxVQUNoRSxDQUFDO0FBQ0Q7QUFBQSxRQUVGLEtBQUs7QUFDSCw4QkFBb0IsTUFBTSxVQUFVLFFBQVEsY0FBYyxDQUFDLGVBQWU7QUFDeEUsaUJBQUsscUJBQXFCLFVBQVU7QUFBQSxVQUN0QyxDQUFDO0FBQ0Q7QUFBQSxRQUVGLEtBQUs7QUFDSCwrQkFBcUIsTUFBTSxVQUFVLFlBQVk7QUFDakQ7QUFBQSxRQUVGLEtBQUs7QUFDSCw2QkFBbUIsTUFBTSxVQUFVLFFBQVEsWUFBWTtBQUN2RDtBQUFBLFFBRUYsS0FBSztBQUNILGtDQUF3QixNQUFNLFVBQVUsUUFBUSxZQUFZO0FBQzVEO0FBQUEsUUFFRixLQUFLO0FBQ0gsNkJBQW1CLE1BQU0sVUFBVSxRQUFRLFlBQVk7QUFDdkQ7QUFBQSxRQUVGLEtBQUs7QUFDSCw0QkFBa0IsTUFBTSxVQUFVLGNBQWMsQ0FBQyxXQUFXO0FBQzFELGlCQUFLLG1CQUFtQixNQUFNO0FBQUEsVUFDaEMsQ0FBQztBQUNEO0FBQUEsUUFFRixLQUFLO0FBQ0gsNEJBQWtCLE1BQU0sS0FBSyxLQUFLLFVBQVUsY0FBYyxDQUFDLFlBQVk7QUFDckUsbUJBQU8sT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPO0FBQzNDLGlCQUFLLE9BQU8sYUFBYTtBQUFBLFVBQzNCLENBQUM7QUFDRDtBQUFBLE1BQ0o7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFJQSx1QkFBc0M7QUFDcEMsVUFBTSxPQUFzQixDQUFDO0FBRTdCLGVBQVcsWUFBWSxLQUFLLE9BQU8sU0FBUyxZQUFZO0FBQ3RELFVBQUksQ0FBQyxTQUFTO0FBQVM7QUFDdkIsV0FBSyxTQUFTLEVBQUUsSUFBSSxLQUFLLHlCQUF5QixTQUFTLFFBQVEsU0FBUyxRQUFRO0FBQUEsSUFDdEY7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUFBLEVBRVEseUJBQXlCLFlBQW9CLFdBQWlDO0FBQ3BGLFVBQU0sUUFBUSxLQUFLLElBQUksTUFBTSxpQkFBaUI7QUFDOUMsVUFBTSxtQkFBbUIsV0FBVyxTQUFTLEdBQUcsSUFBSSxhQUFhLGFBQWE7QUFFOUUsV0FBTyxNQUNKLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxjQUFjLEtBQUssS0FBSyxXQUFXLGdCQUFnQixDQUFDLEVBQ25GLElBQUksQ0FBQyxTQUFTO0FBQ2IsWUFBTSxRQUFRLEtBQUssSUFBSSxjQUFjLGFBQWEsSUFBSTtBQUN0RCxZQUFNLGNBQWMsT0FBTztBQUMzQixVQUFJLENBQUMsZUFBZSxPQUFPLFlBQVksU0FBUyxNQUFNLFdBQVc7QUFDL0QsZUFBTztBQUFBLE1BQ1Q7QUFDQSxhQUFPO0FBQUEsUUFDTCxNQUFNLEtBQUs7QUFBQSxRQUNYLFdBQVcsWUFBWSxTQUFTLE1BQU07QUFBQSxNQUN4QztBQUFBLElBQ0YsQ0FBQyxFQUNBLE9BQU8sQ0FBQyxNQUF1QixNQUFNLElBQUk7QUFBQSxFQUM5QztBQUFBO0FBQUEsRUFJQSxNQUFjLG9CQUFvQixnQkFBeUQ7QUFDekYsVUFBTSxRQUF3QixDQUFDO0FBQy9CLFVBQU0sV0FBVyxLQUFLLE9BQU87QUFHN0IsUUFBSSxTQUFTLFNBQVMsb0JBQW9CLFNBQVMsU0FBUyxrQkFBa0I7QUFDNUUsWUFBTSxNQUFNLFNBQVMsZ0JBQWdCLElBQUksS0FBSyxTQUFTLGFBQWEsSUFBSSxvQkFBSSxLQUFLO0FBQ2pGLFlBQU0sUUFBUSxJQUFJLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUMzQyxZQUFNLFNBQVMsU0FBUyxTQUFTO0FBQ2pDLFlBQU0sbUJBQW1CLE9BQU8sU0FBUyxHQUFHLElBQUksU0FBUyxTQUFTO0FBRWxFLFlBQU0sUUFBUSxLQUFLLElBQUksTUFBTSxpQkFBaUI7QUFDOUMsWUFBTSxZQUFZLE1BQU0sS0FBSyxDQUFDLE1BQU07QUFDbEMsWUFBSSxDQUFDLEVBQUUsS0FBSyxXQUFXLGdCQUFnQixLQUFLLEVBQUUsU0FBUztBQUFRLGlCQUFPO0FBQ3RFLGVBQU8sRUFBRSxhQUFhO0FBQUEsTUFDeEIsQ0FBQztBQUVELFVBQUksV0FBVztBQUNiLGNBQU0sVUFBVSxNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssU0FBUztBQUNuRCxjQUFNLEtBQUssR0FBRyxlQUFlLDZCQUE2QixTQUFTLFVBQVUsSUFBSSxDQUFDO0FBQUEsTUFDcEY7QUFBQSxJQUNGO0FBR0EsUUFBSSxTQUFTLFNBQVMsbUJBQW1CO0FBQ3ZDLFlBQU0sY0FBZSxLQUFLLElBQVksU0FBUyxVQUFVLHVCQUF1QjtBQUNoRixVQUFJLGFBQWE7QUFDZixjQUFNLE1BQU0sU0FBUyxnQkFBZ0IsSUFBSSxLQUFLLFNBQVMsYUFBYSxJQUFJLG9CQUFJLEtBQUs7QUFDakYsY0FBTSxRQUFRLElBQUksWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQzNDLGNBQU0saUJBQXNELENBQUM7QUFFN0QsbUJBQVcsUUFBUSxLQUFLLElBQUksTUFBTSxpQkFBaUIsR0FBRztBQUNwRCxnQkFBTSxRQUFRLEtBQUssSUFBSSxjQUFjLGFBQWEsSUFBSTtBQUN0RCxjQUFJLENBQUMsT0FBTyxXQUFXLEtBQUssQ0FBQyxPQUFPLEdBQUcsU0FBUyxNQUFTO0FBQUc7QUFFNUQsZ0JBQU0sVUFBVSxNQUFNLEtBQUssSUFBSSxNQUFNLEtBQUssSUFBSTtBQUU5QyxjQUFJLFFBQVEsU0FBUyxLQUFLLEdBQUc7QUFDM0IsMkJBQWUsS0FBSyxFQUFFLE1BQU0sS0FBSyxNQUFNLFFBQVEsQ0FBQztBQUFBLFVBQ2xEO0FBQUEsUUFDRjtBQUVBLGNBQU0sS0FBSyxHQUFHLGVBQWUsNkJBQTZCLGNBQWMsQ0FBQztBQUFBLE1BQzNFO0FBQUEsSUFDRjtBQUdBLFFBQUksU0FBUyxTQUFTLGtCQUFrQjtBQUN0QyxZQUFNLE1BQU0sU0FBUyxnQkFBZ0IsSUFBSSxLQUFLLFNBQVMsYUFBYSxJQUFJLG9CQUFJLEtBQUs7QUFDakYsWUFBTSxRQUFRLElBQUksWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBQzNDLFlBQU07QUFBQSxRQUNKLEdBQUcsU0FBUyxTQUFTLFdBQ2xCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsU0FBUyxLQUFLLEVBQ2hDLElBQUksQ0FBQyxRQUFRO0FBQUEsVUFDWixJQUFJLE1BQU0sR0FBRyxFQUFFO0FBQUEsVUFDZixPQUFPLEdBQUc7QUFBQSxVQUNWLFFBQVE7QUFBQSxVQUNSLE1BQU0sR0FBRztBQUFBLFVBQ1QsTUFBTSxHQUFHO0FBQUEsVUFDVCxVQUFVLEdBQUc7QUFBQSxVQUNiLE1BQU0sR0FBRztBQUFBLFFBQ1gsRUFBRTtBQUFBLE1BQ047QUFBQSxJQUNGO0FBRUEsV0FBTztBQUFBLEVBQ1Q7QUFBQTtBQUFBLEVBSUEsTUFBYyxxQkFBcUIsWUFBbUM7QUFDcEUsVUFBTSxXQUFXLEtBQUssT0FBTyxTQUFTLFdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLFVBQVU7QUFDaEYsUUFBSSxDQUFDO0FBQVU7QUFFZixRQUFJLFNBQVMsY0FBYztBQUV6QixXQUFLLE9BQU8sU0FBUyxrQkFBa0I7QUFBQSxRQUNyQyxZQUFZLFNBQVM7QUFBQSxRQUNyQixjQUFjLFNBQVM7QUFBQSxRQUN2QixPQUFPLFNBQVM7QUFBQSxRQUNoQixVQUFVLFNBQVM7QUFBQSxRQUNuQixZQUFXLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBQUEsUUFDbEMsUUFBUSxDQUFDO0FBQUEsUUFDVCxjQUFjO0FBQUEsUUFDZCxhQUFhLFNBQVM7QUFBQSxNQUN4QjtBQUNBLFlBQU0sS0FBSyxPQUFPLGFBQWE7QUFDL0IsV0FBSyxPQUFPLHNCQUFzQjtBQUFBLElBQ3BDLE9BQU87QUFFTCxZQUFNLEtBQUssaUJBQWlCLFFBQVE7QUFDcEMsVUFBSSx3QkFBTyxHQUFHLFNBQVMsS0FBSyxJQUFJLFNBQVMsSUFBSSxlQUFlO0FBQzVELFlBQU0sS0FBSyxPQUFPO0FBQUEsSUFDcEI7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFjLG1CQUFtQixZQUFvQixRQUFtQztBQUV0RixVQUFNLFNBQVMsT0FBTyxVQUFVO0FBQ2hDLFVBQU0sUUFBUSxPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUUsZUFBZSxVQUFVO0FBQzVELFFBQUksT0FBTztBQUNULFlBQU0sU0FBUztBQUFBLElBQ2pCO0FBQ0EsUUFBSSx3QkFBTyxTQUFTO0FBQ3BCLFVBQU0sS0FBSyxPQUFPO0FBQUEsRUFDcEI7QUFBQSxFQUVBLE1BQWMsdUJBQXVCLE9BQXNEO0FBQ3pGLFFBQUksQ0FBQyxNQUFNLGtCQUFrQixDQUFDLE1BQU07QUFBZ0I7QUFFcEQsVUFBTSxpQkFBaUIsSUFBSTtBQUFBLE1BQ3pCLEtBQUs7QUFBQSxNQUNMLEtBQUssT0FBTztBQUFBLE1BQ1osS0FBSyxPQUFPLFNBQVMsZ0JBQWdCLElBQUksS0FBSyxLQUFLLE9BQU8sU0FBUyxhQUFhLElBQUksb0JBQUksS0FBSztBQUFBLElBQy9GO0FBRUEsWUFBUSxNQUFNLGdCQUFnQjtBQUFBLE1BQzVCLEtBQUs7QUFDSCxZQUFJLE1BQU0sYUFBYSxVQUFhLE1BQU0sZUFBZSxRQUFXO0FBQ2xFLGdCQUFNLGVBQWUsb0JBQW9CLE1BQU0sVUFBVSxNQUFNLFlBQVksSUFBSTtBQUFBLFFBQ2pGO0FBQ0E7QUFBQSxNQUVGLEtBQUs7QUFDSCxZQUFJLE1BQU0sYUFBYSxVQUFhLE1BQU0sZUFBZSxRQUFXO0FBQ2xFLGdCQUFNLGVBQWUsc0JBQXNCLE1BQU0sVUFBVSxNQUFNLFlBQVksSUFBSTtBQUFBLFFBQ25GO0FBQ0E7QUFBQSxNQUVGLEtBQUssY0FBYztBQUNqQixjQUFNLE9BQU8sTUFBTSxnQkFBZ0IsUUFBUSxPQUFPLEVBQUU7QUFDcEQsY0FBTSxLQUFLLEtBQUssT0FBTyxTQUFTLFNBQVMsV0FBVyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sSUFBSTtBQUM3RSxZQUFJLElBQUk7QUFDTixhQUFHLE9BQU87QUFDVixnQkFBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLFFBQ2pDO0FBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUVBLFFBQUksd0JBQU8sVUFBVSxNQUFNLFlBQVksRUFBRTtBQUN6QyxVQUFNLEtBQUssT0FBTztBQUFBLEVBQ3BCO0FBQUEsRUFFQSxNQUFjLDJCQUEyQixPQUFzRDtBQUM3RixRQUFJLENBQUMsTUFBTSxrQkFBa0IsQ0FBQyxNQUFNO0FBQWdCO0FBRXBELFVBQU0saUJBQWlCLElBQUk7QUFBQSxNQUN6QixLQUFLO0FBQUEsTUFDTCxLQUFLLE9BQU87QUFBQSxNQUNaLEtBQUssT0FBTyxTQUFTLGdCQUFnQixJQUFJLEtBQUssS0FBSyxPQUFPLFNBQVMsYUFBYSxJQUFJLG9CQUFJLEtBQUs7QUFBQSxJQUMvRjtBQUVBLFVBQU0sTUFBTSxLQUFLLE9BQU8sU0FBUyxnQkFDN0IsSUFBSSxLQUFLLEtBQUssT0FBTyxTQUFTLGFBQWEsSUFDM0Msb0JBQUksS0FBSztBQUViLFVBQU0sT0FBd0M7QUFBQSxNQUM1QyxJQUFJLE1BQU0sa0JBQWtCLE1BQU07QUFBQSxNQUNsQyxPQUFPLE1BQU07QUFBQSxNQUNiLFFBQVEsTUFBTTtBQUFBLE1BQ2QsTUFBTSxJQUFJLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUFBLE1BQ25DLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTTtBQUFBLE1BQ2hCLFlBQVksTUFBTTtBQUFBLElBQ3BCO0FBRUEsVUFBTSxlQUFlLGFBQWEsSUFBSTtBQUN0QyxRQUFJLHdCQUFPLFVBQVUsTUFBTSxZQUFZLHdCQUF3QjtBQUMvRCxVQUFNLEtBQUssT0FBTztBQUFBLEVBQ3BCO0FBQUEsRUFFQSxNQUFjLGlCQUFpQixVQUErSTtBQUM1SyxVQUFNLE1BQU0sS0FBSyxPQUFPLFNBQVMsZ0JBQzdCLElBQUksS0FBSyxLQUFLLE9BQU8sU0FBUyxhQUFhLElBQzNDLG9CQUFJLEtBQUs7QUFDYixVQUFNLFVBQVUsSUFBSSxZQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFDN0MsVUFBTSxTQUFTLFNBQVM7QUFDeEIsVUFBTSxtQkFBbUIsT0FBTyxTQUFTLEdBQUcsSUFBSSxTQUFTLFNBQVM7QUFHbEUsVUFBTSxRQUFRLEtBQUssSUFBSSxNQUFNLGlCQUFpQjtBQUM5QyxVQUFNLFlBQVksTUFBTTtBQUFBLE1BQ3RCLENBQUMsT0FBTyxFQUFFLFNBQVMsVUFBVSxFQUFFLEtBQUssV0FBVyxnQkFBZ0IsTUFBTSxFQUFFLGFBQWE7QUFBQSxJQUN0RjtBQUVBLFFBQUksV0FBVztBQUNiLFlBQU0sS0FBSyxJQUFJLFlBQVksbUJBQW1CLFdBQVcsQ0FBQyxPQUFPO0FBQy9ELFdBQUcsU0FBUyxRQUFRLElBQUk7QUFBQSxNQUMxQixDQUFDO0FBQUEsSUFDSCxPQUFPO0FBQ0wsWUFBTSxXQUFXLEdBQUcsZ0JBQWdCLEdBQUcsT0FBTztBQUM5QyxVQUFJO0FBQ0YsY0FBTSxLQUFLLElBQUksTUFBTSxPQUFPLFVBQVU7QUFBQSxFQUFRLFNBQVMsUUFBUTtBQUFBO0FBQUEsQ0FBZTtBQUFBLE1BQ2hGLFFBQVE7QUFBQSxNQUVSO0FBQUEsSUFDRjtBQUdBLFVBQU0sS0FBSyxLQUFLLE9BQU8sU0FBUyxVQUFVO0FBQzFDLFNBQUssT0FBTyxTQUFTLFdBQVcsU0FBUyxRQUFRLEtBQUs7QUFDdEQsU0FBSyxPQUFPLFNBQVMsZ0JBQWdCLEtBQUs7QUFBQSxNQUN4QztBQUFBLE1BQ0EsS0FBSyxPQUFPLFNBQVMsZ0JBQWdCLFNBQVM7QUFBQSxJQUNoRDtBQUNBLFVBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxFQUNqQztBQUFBLEVBRUEsTUFBYyxrQkFBaUM7QUFDN0MsVUFBTSxRQUFRLFNBQVMsY0FBYyxLQUFLO0FBQzFDLFVBQU0sWUFBWTtBQUNsQixVQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVlsQixhQUFTLEtBQUssWUFBWSxLQUFLO0FBRS9CLFVBQU0sV0FBVyxNQUFNLGNBQWMsMkJBQTJCO0FBQ2hFLFVBQU0sWUFBWSxNQUFNLGNBQWMseUJBQXlCO0FBQy9ELFVBQU0sU0FBUyxNQUFNLGNBQWMsc0JBQXNCO0FBQ3pELFVBQU0sUUFBUSxNQUFNLGNBQWMsd0JBQXdCO0FBRTFELFVBQU0sUUFBUSxPQUFPLEtBQUssT0FBTyxTQUFTLGNBQWMsaUJBQWlCLEVBQUU7QUFDM0UsVUFBTSxRQUFRLE1BQU0sTUFBTSxPQUFPO0FBRWpDLGFBQVMsaUJBQWlCLFNBQVMsS0FBSztBQUN4QyxjQUFVLGlCQUFpQixTQUFTLEtBQUs7QUFFekMsV0FBTyxpQkFBaUIsU0FBUyxZQUFZO0FBQzNDLFlBQU0sSUFBSSxXQUFXLE1BQU0sS0FBSztBQUNoQyxVQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssR0FBRztBQUN0QixZQUFJLHdCQUFPLHNCQUFzQjtBQUNqQztBQUFBLE1BQ0Y7QUFFQSxZQUFNLFNBQVEsb0JBQUksS0FBSyxHQUFFLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUNsRCxZQUFNLFdBQVcsS0FBSyxPQUFPLFNBQVMsY0FBYyxVQUFVLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxLQUFLO0FBQzFGLFVBQUksVUFBVTtBQUNaLGlCQUFTLFNBQVM7QUFBQSxNQUNwQixPQUFPO0FBQ0wsYUFBSyxPQUFPLFNBQVMsY0FBYyxVQUFVLEtBQUssRUFBRSxNQUFNLE9BQU8sUUFBUSxFQUFFLENBQUM7QUFBQSxNQUM5RTtBQUNBLFdBQUssT0FBTyxTQUFTLGNBQWMsZ0JBQWdCO0FBQ25ELFdBQUssT0FBTyxTQUFTLGNBQWMsb0JBQW9CO0FBQ3ZELFlBQU0sS0FBSyxPQUFPLGFBQWE7QUFDL0IsVUFBSSx3QkFBTyxrQkFBa0IsQ0FBQyxLQUFLO0FBQ25DLFlBQU07QUFDTixZQUFNLEtBQUssT0FBTztBQUFBLElBQ3BCLENBQUM7QUFFRCxlQUFXLE1BQU0sTUFBTSxNQUFNLEdBQUcsRUFBRTtBQUFBLEVBQ3BDO0FBQUEsRUFFQSxNQUFjLG1CQUFtQixRQUErQjtBQUM5RCxVQUFNLE9BQU8sS0FBSyxPQUFPLFNBQVMsWUFBWSxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sTUFBTTtBQUN6RSxRQUFJLENBQUM7QUFBTTtBQUVYLFNBQUssaUJBQWdCLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBQzVDLFVBQU0sS0FBSyxPQUFPLGFBQWE7QUFDL0IsUUFBSSx3QkFBTyxHQUFHLEtBQUssS0FBSyxJQUFJLEtBQUssSUFBSSxhQUFhO0FBR2xELFVBQU0sS0FBSyxPQUFPO0FBQUEsRUFDcEI7QUFBQTtBQUFBLEVBSVEsb0JBQW9CLE1BQXlCO0FBQ25ELFVBQU0sWUFBWSxLQUFLLE9BQU8sU0FBUztBQUN2QyxRQUFJLENBQUM7QUFBVztBQUVoQixRQUFJLFVBQVU7QUFBVyxXQUFLLE1BQU0sWUFBWSxnQkFBZ0IsVUFBVSxTQUFTO0FBQ25GLFFBQUksVUFBVTtBQUFRLFdBQUssTUFBTSxZQUFZLGFBQWEsVUFBVSxNQUFNO0FBQzFFLFFBQUksVUFBVTtBQUFhLFdBQUssTUFBTSxZQUFZLGtCQUFrQixVQUFVLFdBQVc7QUFDekYsUUFBSSxVQUFVO0FBQVcsV0FBSyxNQUFNLFlBQVksZ0JBQWdCLFVBQVUsU0FBUztBQUNuRixRQUFJLFVBQVU7QUFBWSxXQUFLLE1BQU0sWUFBWSxpQkFBaUIsVUFBVSxVQUFVO0FBQ3RGLFFBQUksVUFBVTtBQUFRLFdBQUssTUFBTSxZQUFZLFlBQVksVUFBVSxNQUFNO0FBQ3pFLFFBQUksVUFBVTtBQUFTLFdBQUssTUFBTSxZQUFZLGFBQWEsVUFBVSxPQUFPO0FBQUEsRUFDOUU7QUFDRjs7O0FnQjVlQSxJQUFBQyxtQkFBdUQ7QUFLaEQsSUFBTSxnQkFBTixjQUE0QiwwQkFBUztBQUFBLEVBVTFDLFlBQVksTUFBcUIsUUFBb0I7QUFDbkQsVUFBTSxJQUFJO0FBVFosU0FBUSxnQkFBK0I7QUFFdkMsU0FBUSxVQUFVO0FBRWxCO0FBQUE7QUFBQSxTQUFRLG1CQUFpQztBQUV6QztBQUFBLFNBQVEsb0JBQW9CO0FBSTFCLFNBQUssU0FBUztBQUNkLFNBQUssWUFBWSxvQkFBSSxLQUFLO0FBQUEsRUFDNUI7QUFBQSxFQUVBLGNBQXNCO0FBQ3BCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxpQkFBeUI7QUFDdkIsVUFBTSxZQUFZLEtBQUssT0FBTyxTQUFTO0FBQ3ZDLFdBQU8sWUFBWSxjQUFjLFVBQVUsWUFBWSxLQUFLO0FBQUEsRUFDOUQ7QUFBQSxFQUVBLFVBQWtCO0FBQ2hCLFdBQU87QUFBQSxFQUNUO0FBQUEsRUFFQSxNQUFNLFNBQXdCO0FBQzVCLFVBQU0sWUFBWSxLQUFLLE9BQU8sU0FBUztBQUN2QyxRQUFJLENBQUMsV0FBVztBQUNkLFdBQUssVUFBVSxTQUFTLE9BQU8sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQy9EO0FBQUEsSUFDRjtBQUVBLFVBQU0sV0FBVyxLQUFLLE9BQU8sU0FBUyxXQUFXO0FBQUEsTUFDL0MsQ0FBQyxNQUFNLEVBQUUsT0FBTyxVQUFVO0FBQUEsSUFDNUI7QUFFQSxRQUFJLFVBQVUsbUJBQW1CO0FBRS9CLFlBQU0sS0FBSyxtQkFBbUIsV0FBVyxRQUFRO0FBQUEsSUFDbkQsT0FBTztBQUVMLFdBQUssWUFBWSxJQUFJLEtBQUssVUFBVSxTQUFTO0FBQzdDLFdBQUssT0FBTyxTQUFTO0FBQ3JCLFdBQUssV0FBVztBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTSxVQUF5QjtBQUM3QixTQUFLLFVBQVU7QUFDZixTQUFLLG1CQUFtQjtBQUN4QixTQUFLLG9CQUFvQjtBQUN6QixTQUFLLFVBQVUsTUFBTTtBQUFBLEVBQ3ZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNQSxNQUFjLG1CQUNaLFdBQ0EsVUFDZTtBQUNmLFVBQU0sWUFBWSxLQUFLO0FBQ3ZCLGNBQVUsTUFBTTtBQUdoQixVQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQixRQUFRO0FBQ3RELFFBQUksQ0FBQyxNQUFNO0FBQ1QsZ0JBQVUsU0FBUyxPQUFPO0FBQUEsUUFDeEIsTUFBTTtBQUFBLFFBQ04sTUFBTSxFQUFFLE9BQU8sK0RBQStEO0FBQUEsTUFDaEYsQ0FBQztBQUNEO0FBQUEsSUFDRjtBQUVBLFNBQUssbUJBQW1CO0FBR3hCLFVBQU0sS0FBSyxnQkFBZ0IsSUFBSTtBQUcvQixVQUFNLG9CQUFvQixVQUFVLFVBQVUsRUFBRSxLQUFLLHFCQUFxQixDQUFDO0FBQzNFLFVBQU0sS0FBSyxPQUFPLGVBQWU7QUFBQSxNQUMvQixTQUFTO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBS0EsU0FBSztBQUFBLE1BQ0gsS0FBSyxJQUFJLGNBQWMsR0FBRyxXQUFXLENBQUMsZ0JBQWdCO0FBQ3BELFlBQUksS0FBSztBQUFtQjtBQUM1QixZQUFJLFlBQVksU0FBUyxLQUFLO0FBQU07QUFFcEMsY0FBTSxRQUFRLEtBQUssSUFBSSxjQUFjLGFBQWEsV0FBVztBQUM3RCxjQUFNLEtBQUssT0FBTztBQUNsQixZQUFJLEtBQUssU0FBUyxRQUFRLE1BQU0sTUFBTTtBQUNwQyxlQUFLLG9CQUFvQjtBQUN6QixnQkFBTSxpQkFBaUIsR0FBRyxHQUFHLFNBQVMsUUFBUSxPQUFPO0FBQ3JELGVBQUssd0JBQXdCLFdBQVcsVUFBVSxjQUFjO0FBQUEsUUFDbEU7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLE1BQWMsc0JBQXNCLFVBQWlEO0FBQ25GLFVBQU0sTUFBTSxLQUFLLE9BQU8sU0FBUyxnQkFDN0IsSUFBSSxLQUFLLEtBQUssT0FBTyxTQUFTLGFBQWEsSUFDM0Msb0JBQUksS0FBSztBQUNiLFVBQU0sVUFBVSxJQUFJLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUM3QyxVQUFNLFNBQVMsU0FBUztBQUN4QixVQUFNLG1CQUFtQixPQUFPLFNBQVMsR0FBRyxJQUFJLFNBQVMsU0FBUztBQUdsRSxVQUFNLFFBQVEsS0FBSyxJQUFJLE1BQU0saUJBQWlCO0FBQzlDLFVBQU0sV0FBVyxNQUFNO0FBQUEsTUFDckIsQ0FBQyxPQUNFLEVBQUUsU0FBUyxVQUFVLEVBQUUsS0FBSyxXQUFXLGdCQUFnQixNQUN4RCxFQUFFLGFBQWE7QUFBQSxJQUNuQjtBQUVBLFFBQUksVUFBVTtBQUVaLFlBQU0sS0FBSyxJQUFJLFlBQVksbUJBQW1CLFVBQVUsQ0FBQyxPQUFPO0FBQzlELFlBQUksQ0FBQyxHQUFHO0FBQVUsYUFBRyxXQUFXLFNBQVM7QUFBQSxNQUMzQyxDQUFDO0FBQ0QsYUFBTztBQUFBLElBQ1Q7QUFHQSxVQUFNLGlCQUFpQixLQUFLLElBQUksTUFBTSxzQkFBc0IsTUFBTTtBQUNsRSxRQUFJLENBQUMsZ0JBQWdCO0FBQ25CLFVBQUk7QUFDRixjQUFNLEtBQUssSUFBSSxNQUFNLGFBQWEsTUFBTTtBQUFBLE1BQzFDLFFBQVE7QUFBQSxNQUVSO0FBQUEsSUFDRjtBQUdBLFVBQU0sV0FBVyxHQUFHLGdCQUFnQixHQUFHLE9BQU87QUFDOUMsVUFBTSxVQUFVO0FBQUEsWUFBa0IsU0FBUyxFQUFFO0FBQUE7QUFBQTtBQUM3QyxRQUFJO0FBQ0YsYUFBTyxNQUFNLEtBQUssSUFBSSxNQUFNLE9BQU8sVUFBVSxPQUFPO0FBQUEsSUFDdEQsUUFBUTtBQUVOLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsTUFBYyxnQkFBZ0IsTUFBNEI7QUFDeEQsUUFBSSxXQUFXO0FBQ2YsV0FBTyxXQUFXLElBQUk7QUFDcEIsWUFBTSxRQUFRLEtBQUssSUFBSSxjQUFjLGFBQWEsSUFBSTtBQUN0RCxVQUFJLE9BQU87QUFBYTtBQUN4QixZQUFNLE1BQU0sRUFBRTtBQUNkO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsTUFBYyx3QkFDWixXQUNBLFVBQ0EsZ0JBQ2U7QUFFZixVQUFNLFNBQVMsZ0JBQWdCLFlBQVk7QUFDM0MsVUFBTSxRQUFRLFNBQ1YsS0FBSyxPQUFPLFNBQVMsMEJBQTBCLEtBQUssQ0FBQyxNQUFNLEVBQUUsT0FBTyxNQUFNLElBQzFFLEtBQUssT0FBTyxTQUFTLDBCQUEwQixLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sWUFBWTtBQUdwRixRQUFJLFNBQVMsTUFBTSxlQUFlLEdBQUc7QUFDbkMsWUFBTSxTQUFTLEtBQUs7QUFBQSxRQUNsQixLQUFLLE9BQU8sU0FBUyxVQUFVLGtCQUFrQixNQUFNO0FBQUEsTUFDekQ7QUFDQSxXQUFLLE9BQU8sU0FBUyxXQUFXLFVBQVUsUUFBUSxLQUFLO0FBQUEsSUFDekQ7QUFHQSxRQUFJLFdBQVcsV0FBVztBQUN4QixXQUFLLE9BQU8sU0FBUyxnQkFBZ0IsS0FBSztBQUFBLFFBQ3hDO0FBQUEsUUFDQSxLQUFLLE9BQU8sU0FBUyxnQkFBZ0IsU0FBUztBQUFBLE1BQ2hEO0FBQUEsSUFDRjtBQUdBLFNBQUssT0FBTyxTQUFTLGtCQUFrQjtBQUN2QyxVQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsRUFDakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1RLGFBQW1CO0FBQ3pCLFNBQUssZ0JBQWdCLE9BQU8sWUFBWSxNQUFNO0FBQzVDLFdBQUssVUFBVSxLQUFLLE9BQU8sS0FBSyxJQUFJLElBQUksS0FBSyxVQUFVLFFBQVEsS0FBSyxHQUFJO0FBQ3hFLFlBQU0sVUFBVSxLQUFLLFVBQVUsY0FBYyx1QkFBdUI7QUFDcEUsVUFBSTtBQUFTLGdCQUFRLGNBQWMsS0FBSyxXQUFXLEtBQUssT0FBTztBQUFBLElBQ2pFLEdBQUcsR0FBSTtBQUFBLEVBQ1Q7QUFBQSxFQUVRLFlBQWtCO0FBQ3hCLFFBQUksS0FBSyxrQkFBa0IsTUFBTTtBQUMvQixvQkFBYyxLQUFLLGFBQWE7QUFDaEMsV0FBSyxnQkFBZ0I7QUFBQSxJQUN2QjtBQUFBLEVBQ0Y7QUFBQSxFQUVRLE9BQU8sV0FBa0M7QUFDL0MsVUFBTSxZQUFZLEtBQUs7QUFDdkIsY0FBVSxNQUFNO0FBRWhCLFVBQU0sT0FBTyxVQUFVLFVBQVUsRUFBRSxLQUFLLHFDQUFxQyxDQUFDO0FBRzlFLFVBQU0sU0FBUyxLQUFLLFVBQVUsRUFBRSxLQUFLLHdCQUF3QixDQUFDO0FBRTlELFVBQU0sVUFBVSxPQUFPLFVBQVUsRUFBRSxLQUFLLDBCQUEwQixDQUFDO0FBQ25FLFlBQVEsU0FBUyxRQUFRLEVBQUUsS0FBSyx3QkFBd0IsTUFBTSxVQUFVLE1BQU0sQ0FBQztBQUMvRSxZQUFRLFNBQVMsUUFBUSxFQUFFLEtBQUssMkJBQTJCLE1BQU0sVUFBVSxhQUFhLENBQUM7QUFFekYsVUFBTSxVQUFVLE9BQU8sU0FBUyxPQUFPO0FBQUEsTUFDckMsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUVELFVBQU0sWUFBWSxPQUFPLFNBQVMsVUFBVTtBQUFBLE1BQzFDLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSLENBQUM7QUFDRCxjQUFVLGlCQUFpQixTQUFTLE1BQU0sS0FBSyxnQkFBZ0IsU0FBUyxDQUFDO0FBR3pFLFVBQU0sY0FBYyxLQUFLLE9BQU8sU0FBUyxlQUFlLFVBQVUsUUFBUSxLQUFLO0FBQy9FLFVBQU0sU0FBUyxLQUFLLFVBQVUsRUFBRSxLQUFLLHdCQUF3QixDQUFDO0FBQzlELFdBQU8sTUFBTSxhQUFhLDBCQUEwQixXQUFXO0FBRy9ELFVBQU0sVUFBVSxLQUFLLFVBQVUsRUFBRSxLQUFLLHlCQUF5QixDQUFDO0FBR2hFLFVBQU0sZ0JBQWdCLFFBQVEsVUFBVSxFQUFFLEtBQUssZ0NBQWdDLENBQUM7QUFDaEYsa0JBQWMsU0FBUyxPQUFPLEVBQUUsS0FBSyxnQkFBZ0IsTUFBTSxtQkFBbUIsQ0FBQztBQUUvRSxVQUFNLGtCQUFrQixjQUFjLFVBQVUsRUFBRSxLQUFLLHdCQUF3QixDQUFDO0FBRWhGLFFBQUksVUFBVSxPQUFPLFdBQVcsR0FBRztBQUNqQyxzQkFBZ0IsU0FBUyxPQUFPO0FBQUEsUUFDOUIsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLE1BQ1IsQ0FBQztBQUFBLElBQ0gsT0FBTztBQUNMLGlCQUFXLFNBQVMsVUFBVSxRQUFRO0FBQ3BDLGNBQU0sT0FBTyxnQkFBZ0IsVUFBVSxFQUFFLEtBQUssNEJBQTRCLENBQUM7QUFDM0UsYUFBSyxjQUFjO0FBQUEsTUFDckI7QUFBQSxJQUNGO0FBR0EsVUFBTSxjQUFjLGNBQWMsU0FBUyxVQUFVO0FBQUEsTUFDbkQsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUNELGdCQUFZLGlCQUFpQixTQUFTLE1BQU0sS0FBSyxnQkFBZ0IsU0FBUyxDQUFDO0FBRzNFLFVBQU0sWUFBWSxRQUFRLFVBQVUsRUFBRSxLQUFLLHVCQUF1QixDQUFDO0FBQ25FLFVBQU0sUUFBUSxnQkFBZ0IsS0FBSyxNQUFNLEtBQUssT0FBTyxJQUFJLGdCQUFnQixNQUFNLENBQUM7QUFDaEYsY0FBVSxTQUFTLE9BQU87QUFBQSxNQUN4QixLQUFLO0FBQUEsTUFDTCxNQUFNLElBQUksTUFBTSxJQUFJO0FBQUEsSUFDdEIsQ0FBQztBQUNELGNBQVUsU0FBUyxPQUFPO0FBQUEsTUFDeEIsS0FBSztBQUFBLE1BQ0wsTUFBTSxVQUFLLE1BQU0sV0FBVztBQUFBLElBQzlCLENBQUM7QUFHRCxVQUFNLFlBQVksS0FBSyxVQUFVLEVBQUUsS0FBSywyQkFBMkIsQ0FBQztBQUNwRSxVQUFNLFdBQVcsVUFBVSxTQUFTLE9BQU8sQ0FBQyxFQUFFLFlBQVksSUFBSSxVQUFVLFNBQVMsTUFBTSxDQUFDO0FBQ3hGLGNBQVUsU0FBUyxPQUFPO0FBQUEsTUFDeEIsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUNELGNBQVUsTUFBTSxrQkFBa0I7QUFBQSxFQUNwQztBQUFBLEVBRVEsZ0JBQWdCLFdBQWtDO0FBRXhELFVBQU0sVUFBVSxTQUFTLGNBQWMsS0FBSztBQUM1QyxZQUFRLFlBQVk7QUFFcEIsVUFBTSxRQUFRLFFBQVEsVUFBVSxFQUFFLEtBQUssYUFBYSxDQUFDO0FBQ3JELFVBQU0sVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFDNUMsVUFBTSxTQUFTLE9BQU8sRUFBRSxLQUFLLG1CQUFtQixNQUFNLFlBQVksQ0FBQztBQUVuRSxVQUFNLFlBQVksTUFBTSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsQ0FBQztBQUN4RSxVQUFNLFFBQVEsVUFBVSxTQUFTLFNBQVM7QUFBQSxNQUN4QyxLQUFLO0FBQUEsTUFDTCxNQUFNLEVBQUUsTUFBTSxRQUFRLGFBQWEsZ0JBQWdCO0FBQUEsSUFDckQsQ0FBQztBQUdELFFBQUksVUFBVSxhQUFhO0FBQ3pCLFlBQU0sU0FBUyxLQUFLLHFCQUFxQixVQUFVLFdBQVc7QUFDOUQsVUFBSSxPQUFPLFNBQVMsR0FBRztBQUNyQixjQUFNLFdBQVcsTUFBTSxVQUFVLEVBQUUsS0FBSyx5QkFBeUIsTUFBTSxFQUFFLE9BQU8sdUJBQXVCLEVBQUUsQ0FBQztBQUMxRyxtQkFBVyxTQUFTLFFBQVE7QUFDMUIsZ0JBQU0sT0FBTyxTQUFTLFVBQVUsRUFBRSxLQUFLLDJDQUEyQyxDQUFDO0FBQ25GLGVBQUssY0FBYztBQUNuQixlQUFLLGlCQUFpQixTQUFTLE1BQU07QUFDbkMscUJBQVMsS0FBSztBQUNkLHVCQUFXO0FBQUEsVUFDYixDQUFDO0FBQUEsUUFDSDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBRUEsVUFBTSxVQUFVLE1BQU0sVUFBVSxFQUFFLEtBQUsseUJBQXlCLENBQUM7QUFFakUsVUFBTSxTQUFTLFFBQVEsU0FBUyxVQUFVO0FBQUEsTUFDeEMsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUNELFdBQU8saUJBQWlCLFNBQVMsTUFBTTtBQUNyQyxZQUFNLE1BQU0sTUFBTSxNQUFNLEtBQUs7QUFDN0IsVUFBSSxLQUFLO0FBQ1AsaUJBQVMsR0FBRztBQUNaLG1CQUFXO0FBQUEsTUFDYjtBQUFBLElBQ0YsQ0FBQztBQUVELFVBQU0sWUFBWSxRQUFRLFNBQVMsVUFBVTtBQUFBLE1BQzNDLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxJQUNSLENBQUM7QUFDRCxjQUFVLGlCQUFpQixTQUFTLE1BQU0sV0FBVyxDQUFDO0FBRXRELFlBQVEsaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLFVBQUksRUFBRSxXQUFXO0FBQVMsbUJBQVc7QUFBQSxJQUN2QyxDQUFDO0FBRUQsVUFBTSxXQUFXLENBQUMsU0FBaUI7QUFDakMsVUFBSSxDQUFDLFVBQVUsT0FBTyxTQUFTLElBQUksR0FBRztBQUNwQyxrQkFBVSxPQUFPLEtBQUssSUFBSTtBQUMxQixhQUFLLE9BQU8sU0FBUyxrQkFBa0I7QUFDdkMsYUFBSyxPQUFPLGFBQWE7QUFDekIsYUFBSyxPQUFPLFNBQVM7QUFBQSxNQUN2QjtBQUFBLElBQ0Y7QUFFQSxVQUFNLGFBQWEsTUFBTTtBQUN2QixjQUFRLFVBQVUsT0FBTyxTQUFTO0FBQ2xDLGlCQUFXLE1BQU0sUUFBUSxPQUFPLEdBQUcsR0FBRztBQUFBLElBQ3hDO0FBRUEsYUFBUyxLQUFLLFlBQVksT0FBTztBQUNqQywwQkFBc0IsTUFBTTtBQUMxQixjQUFRLFVBQVUsSUFBSSxTQUFTO0FBQy9CLFlBQU0sTUFBTTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUVRLHFCQUFxQixZQUE4QjtBQUN6RCxVQUFNLFFBQVEsS0FBSyxJQUFJLE1BQU0saUJBQWlCO0FBQzlDLFVBQU0sbUJBQW1CLFdBQVcsU0FBUyxHQUFHLElBQUksYUFBYSxhQUFhO0FBQzlFLFdBQU8sTUFDSixPQUFPLENBQUMsTUFBTSxFQUFFLEtBQUssV0FBVyxnQkFBZ0IsQ0FBQyxFQUNqRCxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFDckIsS0FBSztBQUFBLEVBQ1Y7QUFBQSxFQUVRLGdCQUFnQixXQUFrQztBQUN4RCxTQUFLLFVBQVU7QUFDZixVQUFNLFVBQVUsb0JBQUksS0FBSztBQUN6QixVQUFNLGtCQUFrQixLQUFLLE9BQU8sUUFBUSxRQUFRLElBQUksS0FBSyxVQUFVLFFBQVEsS0FBSyxHQUFLO0FBRXpGLFVBQU0sVUFBVSxTQUFTLGNBQWMsS0FBSztBQUM1QyxZQUFRLFlBQVk7QUFFcEIsVUFBTSxRQUFRLFFBQVEsVUFBVSxFQUFFLEtBQUssYUFBYSxDQUFDO0FBQ3JELFVBQU0sVUFBVSxFQUFFLEtBQUssb0JBQW9CLENBQUM7QUFFNUMsVUFBTSxTQUFTLE9BQU8sRUFBRSxLQUFLLG1CQUFtQixNQUFNLG1CQUFtQixDQUFDO0FBQzFFLFVBQU0sU0FBUyxPQUFPO0FBQUEsTUFDcEIsS0FBSztBQUFBLE1BQ0wsTUFBTSxFQUFFLE9BQU8sdUJBQXVCO0FBQUEsTUFDdEMsTUFBTSxHQUFHLFVBQVUsS0FBSyxJQUFJLFVBQVUsWUFBWSxTQUFNLGVBQWU7QUFBQSxJQUN6RSxDQUFDO0FBR0QsVUFBTSxTQUFTLEtBQUssT0FBTyxTQUFTLDBCQUEwQixPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU87QUFDckYsVUFBTSxhQUFhLE1BQU0sVUFBVSxFQUFFLEtBQUssNkJBQTZCLENBQUM7QUFFeEUsZUFBVyxTQUFTLFFBQVE7QUFDMUIsWUFBTSxNQUFNLFdBQVcsVUFBVSxFQUFFLEtBQUssMkJBQTJCLENBQUM7QUFDcEUsVUFBSSxNQUFNLGNBQWMsTUFBTTtBQUU5QixVQUFJLFNBQVMsT0FBTyxFQUFFLEtBQUssNkJBQTZCLE1BQU0sTUFBTSxLQUFLLENBQUM7QUFDMUUsVUFBSSxTQUFTLE9BQU8sRUFBRSxLQUFLLDZCQUE2QixNQUFNLE1BQU0sS0FBSyxDQUFDO0FBRTFFLFVBQUksaUJBQWlCLFNBQVMsWUFBWTtBQUN4QyxjQUFNLFNBQTBCO0FBQUEsVUFDOUIsWUFBWSxVQUFVO0FBQUEsVUFDdEIsY0FBYyxVQUFVO0FBQUEsVUFDeEIsVUFBVSxVQUFVO0FBQUEsVUFDcEIsTUFBTSxNQUFNO0FBQUEsVUFDWixXQUFXLFVBQVU7QUFBQSxVQUNyQixTQUFTLFFBQVEsWUFBWTtBQUFBLFVBQzdCO0FBQUEsVUFDQSxRQUFRLFVBQVU7QUFBQSxRQUNwQjtBQUVBLGNBQU0sS0FBSyxnQkFBZ0IsUUFBUSxTQUFTO0FBQzVDLG1CQUFXO0FBQUEsTUFDYixDQUFDO0FBQUEsSUFDSDtBQUVBLFlBQVEsaUJBQWlCLFNBQVMsQ0FBQyxNQUFNO0FBQ3ZDLFVBQUksRUFBRSxXQUFXLFNBQVM7QUFBQSxNQUUxQjtBQUFBLElBQ0YsQ0FBQztBQUVELFVBQU0sYUFBYSxNQUFNO0FBQ3ZCLGNBQVEsVUFBVSxPQUFPLFNBQVM7QUFDbEMsaUJBQVcsTUFBTSxRQUFRLE9BQU8sR0FBRyxHQUFHO0FBQUEsSUFDeEM7QUFFQSxhQUFTLEtBQUssWUFBWSxPQUFPO0FBQ2pDLDBCQUFzQixNQUFNLFFBQVEsVUFBVSxJQUFJLFNBQVMsQ0FBQztBQUFBLEVBQzlEO0FBQUEsRUFFQSxNQUFjLGdCQUFnQixRQUF5QixXQUEyQztBQUVoRyxVQUFNLFdBQVcsS0FBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sVUFBVSxVQUFVO0FBQzFGLFFBQUksVUFBVSxRQUFRO0FBQ3BCLFlBQU0sS0FBSyxvQkFBb0IsUUFBUSxTQUFTLE1BQU07QUFBQSxJQUN4RDtBQUdBLFVBQU0sS0FBSyxpQkFBaUIsV0FBVyxNQUFNO0FBRzdDLFVBQU0sUUFBUSxLQUFLLE9BQU8sU0FBUywwQkFBMEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLE9BQU8sSUFBSTtBQUM3RixRQUFJLFNBQVMsTUFBTSxlQUFlLEdBQUc7QUFDbkMsWUFBTSxTQUFTLEtBQUssTUFBTSxLQUFLLE9BQU8sU0FBUyxVQUFVLGtCQUFrQixNQUFNLFlBQVk7QUFDN0YsV0FBSyxPQUFPLFNBQVMsV0FBVyxVQUFVLFFBQVEsS0FBSztBQUFBLElBQ3pEO0FBR0EsUUFBSSxPQUFPLFNBQVMsV0FBVztBQUM3QixZQUFNLE1BQU0sS0FBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLENBQUMsTUFBTSxFQUFFLE9BQU8sVUFBVSxVQUFVO0FBQ3JGLFVBQUksS0FBSztBQUNQLGFBQUssT0FBTyxTQUFTLGdCQUFnQixLQUFLO0FBQUEsVUFDeEM7QUFBQSxVQUNBLEtBQUssT0FBTyxTQUFTLGdCQUFnQixJQUFJO0FBQUEsUUFDM0M7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUdBLFNBQUssT0FBTyxTQUFTLGtCQUFrQjtBQUN2QyxVQUFNLEtBQUssT0FBTyxhQUFhO0FBRy9CLFVBQU0sYUFBYSxLQUFLLE9BQU8sU0FBUywwQkFBMEIsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLE9BQU8sSUFBSSxHQUFHLFFBQVEsT0FBTztBQUNwSCxRQUFJLHdCQUFPLEdBQUcsVUFBVSxLQUFLLElBQUksVUFBVSxZQUFZLFdBQU0sVUFBVSxTQUFNLE9BQU8sZUFBZSxHQUFHO0FBR3RHLFNBQUssT0FBTyxzQkFBc0I7QUFBQSxFQUNwQztBQUFBLEVBRUEsTUFBYyxvQkFBb0IsUUFBeUIsUUFBK0I7QUFDeEYsVUFBTSxXQUFXLEtBQUssT0FBTyxTQUFTLFdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLE9BQU8sVUFBVTtBQUN2RixVQUFNLFdBQVcsVUFBVSxZQUFZLE9BQU87QUFFOUMsVUFBTSxVQUFVLElBQUksS0FBSyxPQUFPLE9BQU87QUFDdkMsVUFBTSxZQUFZLElBQUksS0FBSyxPQUFPLFNBQVM7QUFDM0MsVUFBTSxVQUFVLFFBQVEsWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBRWpELFVBQU0sVUFBVSxHQUFHLE9BQU8sUUFBUSxTQUFTLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLEdBQUcsT0FBTyxRQUFRLFdBQVcsQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFDOUcsVUFBTSxXQUFXLGFBQWEsT0FBTyxJQUFJLE9BQU87QUFDaEQsVUFBTSxXQUFXLEdBQUcsTUFBTSxJQUFJLFFBQVE7QUFHdEMsVUFBTSxXQUFXLENBQUMsVUFBVSxrQkFBa0I7QUFDOUMsVUFBTSxVQUFVLE9BQU8sS0FBSyxNQUFNLEtBQUssSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDM0UsVUFBTSxTQUFTLE9BQU8sS0FBSyxJQUFJLFFBQVEsSUFBSSxFQUFFLEVBQUUsU0FBUyxHQUFHLEdBQUc7QUFDOUQsVUFBTSxTQUFTLFlBQVksSUFBSSxNQUFNO0FBQ3JDLFVBQU0sWUFBWSxVQUFVLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRSxJQUFJLFNBQVMsVUFBVSxNQUFNO0FBRWxGLFVBQU0sZUFBZSxRQUFRLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRSxJQUFJLFNBQVMsVUFBVSxNQUFNO0FBR25GLFVBQU0sUUFBUSxnQkFBZ0IsS0FBSyxNQUFNLEtBQUssT0FBTyxJQUFJLGdCQUFnQixNQUFNLENBQUM7QUFHaEYsVUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUksT0FBTyxLQUFLLE1BQU0sQ0FBQztBQUMxRSxVQUFNLGNBQWMsR0FBRyxLQUFLLE1BQU0sT0FBTyxrQkFBa0IsRUFBRSxDQUFDLEtBQUssT0FBTyxrQkFBa0IsRUFBRTtBQUc5RixVQUFNLFVBQVU7QUFBQSxNQUNkO0FBQUEsTUFDQTtBQUFBLE1BQ0EsR0FBRyxRQUFRO0FBQUEsTUFDWCxHQUFHLFFBQVEsV0FBVyxRQUFRO0FBQUEsTUFDOUIsZUFBZSxTQUFTO0FBQUEsTUFDeEIsYUFBYSxZQUFZO0FBQUEsTUFDekIsY0FBYyxXQUFXO0FBQUEsTUFDekIsY0FBYyxPQUFPLFFBQVE7QUFBQSxNQUM3QixPQUFPLE9BQU8sU0FBUyxJQUNuQixZQUFZLE9BQU8sT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLE1BQ3pEO0FBQUEsTUFDSjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUVBLFVBQU0sT0FBTztBQUFBLE1BQ1g7QUFBQSxNQUNBLEtBQUssVUFBVSxTQUFTLEVBQUUsSUFBSSxPQUFPLFlBQVk7QUFBQSxNQUNqRDtBQUFBLE1BQ0EsTUFBTSxNQUFNLElBQUk7QUFBQSxNQUNoQixZQUFPLE1BQU0sV0FBVztBQUFBLE1BQ3hCO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUVBLFVBQU0sVUFBVSxDQUFDLEdBQUcsU0FBUyxHQUFHLElBQUksRUFBRSxLQUFLLElBQUk7QUFHL0MsVUFBTSxpQkFBaUIsS0FBSyxJQUFJLE1BQU0sc0JBQXNCLE1BQU07QUFDbEUsUUFBSSxDQUFDLGdCQUFnQjtBQUNuQixZQUFNLEtBQUssSUFBSSxNQUFNLGFBQWEsTUFBTTtBQUFBLElBQzFDO0FBR0EsUUFBSSxZQUFZO0FBQ2hCLFVBQU0sV0FBVyxLQUFLLElBQUksTUFBTSxzQkFBc0IsUUFBUTtBQUM5RCxRQUFJLFVBQVU7QUFDWixVQUFJLFVBQVU7QUFDZCxhQUFPLEtBQUssSUFBSSxNQUFNLHNCQUFzQixHQUFHLE1BQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxNQUFNLEdBQUc7QUFDcEY7QUFBQSxNQUNGO0FBQ0Esa0JBQVksR0FBRyxNQUFNLElBQUksUUFBUSxLQUFLLE9BQU87QUFBQSxJQUMvQztBQUVBLFVBQU0sS0FBSyxJQUFJLE1BQU0sT0FBTyxXQUFXLE9BQU87QUFBQSxFQUNoRDtBQUFBLEVBRUEsTUFBYyxpQkFBaUIsV0FBNEIsUUFBeUM7QUFFbEcsVUFBTSxXQUFXLEtBQUssT0FBTyxTQUFTLFdBQVcsS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLFVBQVUsVUFBVTtBQUMxRixRQUFJLENBQUM7QUFBVTtBQUVmLFVBQU0sTUFBTSxLQUFLLE9BQU8sU0FBUyxnQkFDN0IsSUFBSSxLQUFLLEtBQUssT0FBTyxTQUFTLGFBQWEsSUFDM0Msb0JBQUksS0FBSztBQUNiLFVBQU0sVUFBVSxJQUFJLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUM3QyxVQUFNLFNBQVMsU0FBUztBQUN4QixVQUFNLG1CQUFtQixPQUFPLFNBQVMsR0FBRyxJQUFJLFNBQVMsU0FBUztBQUdsRSxVQUFNLFFBQVEsS0FBSyxJQUFJLE1BQU0saUJBQWlCO0FBQzlDLFVBQU0sWUFBWSxNQUFNO0FBQUEsTUFDdEIsQ0FBQyxPQUFPLEVBQUUsU0FBUyxVQUFVLEVBQUUsS0FBSyxXQUFXLGdCQUFnQixNQUFNLEVBQUUsYUFBYTtBQUFBLElBQ3RGO0FBRUEsUUFBSSxXQUFXO0FBRWIsWUFBTSxLQUFLLElBQUksWUFBWSxtQkFBbUIsV0FBVyxDQUFDLGdCQUFnQjtBQUN4RSxvQkFBWSxTQUFTLFFBQVEsSUFBSTtBQUNqQyxZQUFJLFFBQVE7QUFDVixnQkFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUksT0FBTyxLQUFLLE1BQU0sQ0FBQztBQUMxRSxzQkFBWSxHQUFHLFNBQVMsUUFBUSxPQUFPLElBQUk7QUFBQSxRQUM3QztBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0gsT0FBTztBQUVMLFlBQU0sV0FBVyxHQUFHLGdCQUFnQixHQUFHLE9BQU87QUFDOUMsWUFBTSxXQUFXLFNBQ2I7QUFBQSxFQUFLLFNBQVMsUUFBUSxXQUFXLE9BQU8sS0FBSyxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUksT0FBTyxLQUFLLE1BQU0sQ0FBQyxDQUFDLE1BQzNGO0FBQ0osWUFBTSxVQUFVO0FBQUEsRUFBUSxTQUFTLFFBQVEsU0FBUyxRQUFRO0FBQUE7QUFBQTtBQUMxRCxVQUFJO0FBQ0YsY0FBTSxLQUFLLElBQUksTUFBTSxPQUFPLFVBQVUsT0FBTztBQUFBLE1BQy9DLFFBQVE7QUFBQSxNQUVSO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUVRLFdBQVcsU0FBeUI7QUFDMUMsVUFBTSxJQUFJLEtBQUssTUFBTSxVQUFVLElBQUk7QUFDbkMsVUFBTSxJQUFJLEtBQUssTUFBTyxVQUFVLE9BQVEsRUFBRTtBQUMxQyxVQUFNLElBQUksVUFBVTtBQUNwQixRQUFJLElBQUksR0FBRztBQUNULGFBQU8sR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUM7QUFBQSxJQUN6RTtBQUNBLFdBQU8sR0FBRyxPQUFPLENBQUMsRUFBRSxTQUFTLEdBQUcsR0FBRyxDQUFDLElBQUksT0FBTyxDQUFDLEVBQUUsU0FBUyxHQUFHLEdBQUcsQ0FBQztBQUFBLEVBQ3BFO0FBQ0Y7QUFHQSxTQUFTLE1BQU0sSUFBMkI7QUFDeEMsU0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFZLFdBQVcsU0FBUyxFQUFFLENBQUM7QUFDekQ7OztBQzduQkEsSUFBQUMsbUJBQXNFO0FBSy9ELElBQU0saUJBQU4sY0FBNkIsa0NBQWlCO0FBQUEsRUFHbkQsWUFBWSxLQUFVLFFBQW9CO0FBQ3hDLFVBQU0sS0FBSyxNQUFNO0FBQ2pCLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUEsRUFFQSxVQUFnQjtBQUNkLFVBQU0sRUFBRSxZQUFZLElBQUk7QUFDeEIsZ0JBQVksTUFBTTtBQUNsQixnQkFBWSxTQUFTLGVBQWU7QUFHcEMsZ0JBQVksU0FBUyxPQUFPO0FBQUEsTUFDMUIsTUFBTTtBQUFBLE1BQ04sTUFBTSxFQUFFLE9BQU8sMEVBQTBFO0FBQUEsSUFDM0YsQ0FBQztBQUNELGdCQUFZLFNBQVMsT0FBTztBQUFBLE1BQzFCLE1BQU07QUFBQSxNQUNOLE1BQU0sRUFBRSxPQUFPLG9FQUFvRTtBQUFBLElBQ3JGLENBQUM7QUFHRCxTQUFLLGdCQUFnQixXQUFXO0FBR2hDLFNBQUsscUJBQXFCLFdBQVc7QUFDckMsU0FBSywyQkFBMkIsV0FBVztBQUMzQyxTQUFLLHdCQUF3QixXQUFXO0FBQ3hDLFNBQUssd0JBQXdCLFdBQVc7QUFDeEMsU0FBSyxvQkFBb0IsV0FBVztBQUNwQyxTQUFLLHNCQUFzQixXQUFXO0FBQ3RDLFNBQUssbUJBQW1CLFdBQVc7QUFDbkMsU0FBSyxzQkFBc0IsV0FBVztBQUN0QyxTQUFLLDBCQUEwQixXQUFXO0FBQUEsRUFDNUM7QUFBQTtBQUFBLEVBSVEseUJBQ04sUUFDQSxPQUNBLE1BQ0EsY0FBYyxPQUNEO0FBQ2IsVUFBTSxVQUFVLE9BQU8sVUFBVTtBQUFBLE1BQy9CLE1BQU07QUFBQSxRQUNKLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFNVDtBQUFBLElBQ0YsQ0FBQztBQUVELFVBQU0sU0FBUyxRQUFRLFVBQVU7QUFBQSxNQUMvQixNQUFNO0FBQUEsUUFDSixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFVVDtBQUFBLElBQ0YsQ0FBQztBQUVELFVBQU0sUUFBUSxPQUFPLFNBQVMsUUFBUTtBQUFBLE1BQ3BDLE1BQU0sY0FBYyxXQUFXO0FBQUEsTUFDL0IsTUFBTSxFQUFFLE9BQU8sZ0NBQWdDO0FBQUEsSUFDakQsQ0FBQztBQUVELFdBQU8sU0FBUyxRQUFRO0FBQUEsTUFDdEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEtBQUssS0FBSztBQUFBLE1BQ25DLE1BQU0sRUFBRSxPQUFPLHVDQUF1QztBQUFBLElBQ3hELENBQUM7QUFFRCxVQUFNLE9BQU8sUUFBUSxVQUFVO0FBQUEsTUFDN0IsTUFBTSxFQUFFLE9BQU8sNkJBQTZCLGNBQWMsVUFBVSxNQUFNLElBQUk7QUFBQSxJQUNoRixDQUFDO0FBRUQsV0FBTyxpQkFBaUIsU0FBUyxNQUFNO0FBQ3JDLFlBQU0sU0FBUyxLQUFLLE1BQU0sWUFBWTtBQUN0QyxXQUFLLE1BQU0sVUFBVSxTQUFTLFNBQVM7QUFDdkMsV0FBSyxNQUFNLFVBQVUsU0FBUyxXQUFXO0FBQ3pDLFlBQU0sY0FBYyxTQUFTLFdBQVc7QUFBQSxJQUMxQyxDQUFDO0FBRUQsUUFBSTtBQUFhLFdBQUssTUFBTSxVQUFVO0FBQ3RDLFdBQU87QUFBQSxFQUNUO0FBQUE7QUFBQSxFQUlRLGdCQUFnQixXQUE4QjtBQUNwRCxVQUFNLFlBQVksS0FBSyxPQUFPLFNBQVMsWUFBWSxJQUMvQyxLQUFLLE1BQU8sS0FBSyxPQUFPLFNBQVMsZ0JBQWdCLEtBQUssT0FBTyxTQUFTLFlBQWEsR0FBRyxJQUN0RjtBQUVKLFVBQU0sTUFBTSxVQUFVLFVBQVU7QUFBQSxNQUM5QixNQUFNO0FBQUEsUUFDSixPQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTVQ7QUFBQSxJQUNGLENBQUM7QUFFRCxRQUFJLFNBQVMsUUFBUSxFQUFFLE1BQU0sUUFBUSxLQUFLLE9BQU8sU0FBUyxXQUFXLE1BQU0sQ0FBQztBQUM1RSxRQUFJLFNBQVMsUUFBUTtBQUFBLE1BQ25CLE1BQU0sTUFBTSxLQUFLLE9BQU8sU0FBUyxhQUFhLElBQUksS0FBSyxPQUFPLFNBQVMsU0FBUyxLQUFLLFNBQVM7QUFBQSxJQUNoRyxDQUFDO0FBRUQsVUFBTSxRQUFRLEtBQUssT0FBTyxTQUFTLGFBQy9CLGFBQ0EsS0FBSyxPQUFPLFNBQVMsZ0JBQWdCLFdBQ25DLFdBQ0E7QUFDTixRQUFJLFNBQVMsUUFBUTtBQUFBLE1BQ25CLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxRQUNKLE9BQU8sNEJBQTRCLEtBQUssT0FBTyxTQUFTLGFBQWEsc0JBQXNCLG9CQUFvQjtBQUFBLE1BQ2pIO0FBQUEsSUFDRixDQUFDO0FBRUQsUUFBSSxTQUFTLFFBQVE7QUFBQSxNQUNuQixNQUFNLEtBQUssT0FBTyxTQUFTLFdBQVcsYUFBYTtBQUFBLE1BQ25ELE1BQU0sRUFBRSxPQUFPLHNCQUFzQjtBQUFBLElBQ3ZDLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQSxFQUlRLHFCQUFxQixXQUE4QjtBQUN6RCxVQUFNLE9BQU8sS0FBSyx5QkFBeUIsV0FBVyxXQUFXLFdBQVc7QUFFNUUsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxNQUFNLEVBQ2QsUUFBUSxzQ0FBc0MsRUFDOUM7QUFBQSxNQUFRLENBQUMsU0FDUixLQUNHLFNBQVMsS0FBSyxPQUFPLFNBQVMsUUFBUSxFQUN0QyxTQUFTLE9BQU8sVUFBVTtBQUN6QixhQUFLLE9BQU8sU0FBUyxXQUFXO0FBQ2hDLGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUkseUJBQVEsSUFBSSxFQUNiLFFBQVEsUUFBUSxFQUNoQixRQUFRLGlFQUE0RCxFQUNwRTtBQUFBLE1BQVksQ0FBQyxTQUNaLEtBQ0csU0FBUyxLQUFLLE9BQU8sU0FBUyxLQUFLLEVBQ25DLFNBQVMsT0FBTyxVQUFVO0FBQ3pCLGFBQUssT0FBTyxTQUFTLFFBQVE7QUFDN0IsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNMO0FBRUYsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSx1QkFBdUIsRUFDL0IsUUFBUSxpRUFBaUUsRUFDekU7QUFBQSxNQUFRLENBQUMsU0FDUixLQUNHLGVBQWUsbUJBQW1CLEVBQ2xDLFNBQVMsS0FBSyxPQUFPLFNBQVMsY0FBYyxFQUM1QyxTQUFTLE9BQU8sVUFBVTtBQUN6QixhQUFLLE9BQU8sU0FBUyxpQkFBaUI7QUFDdEMsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNMO0FBRUYsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxVQUFVLEVBQ2xCLFFBQVEsK0ZBQStGLEVBQ3ZHO0FBQUEsTUFBUSxDQUFDLFNBQ1IsS0FDRyxlQUFlLGNBQWMsRUFDN0IsU0FBUyxLQUFLLE9BQU8sU0FBUyxRQUFRLEVBQ3RDLFNBQVMsT0FBTyxVQUFVO0FBQ3pCLGFBQUssT0FBTyxTQUFTLFdBQVc7QUFDaEMsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNMO0FBQUEsRUFDSjtBQUFBO0FBQUEsRUFJUSwyQkFBMkIsV0FBOEI7QUFDL0QsVUFBTSxPQUFPLEtBQUsseUJBQXlCLFdBQVcsa0JBQWtCLFdBQVc7QUFDbkYsVUFBTSxRQUFRLEtBQUssT0FBTyxTQUFTO0FBRW5DLFFBQUkseUJBQVEsSUFBSSxFQUNiLFFBQVEsUUFBUSxFQUNoQixRQUFRLHVEQUF1RCxFQUMvRDtBQUFBLE1BQVksQ0FBQyxNQUNaLEVBQUUsV0FBVyxFQUFFLE1BQU0sUUFBUSxRQUFRLFNBQVMsQ0FBQyxFQUM1QyxTQUFTLE1BQU0sTUFBTSxFQUNyQixTQUFTLE9BQU8sTUFBTTtBQUNyQixhQUFLLE9BQU8sU0FBUyxjQUFjLFNBQVM7QUFDNUMsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNMO0FBRUYsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxhQUFhLEVBQ3JCO0FBQUEsTUFBUSxDQUFDLE1BQ1IsRUFBRSxTQUFTLE1BQU0sU0FBUyxPQUFPLE1BQU0sTUFBTSxJQUFJLEVBQUUsRUFDaEQsZUFBZSxVQUFVLEVBQ3pCLFNBQVMsT0FBTyxNQUFNO0FBQ3JCLGNBQU0sSUFBSSxTQUFTLENBQUM7QUFDcEIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksR0FBRztBQUN0QixlQUFLLE9BQU8sU0FBUyxjQUFjLFNBQVM7QUFDNUMsZ0JBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxRQUNqQztBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0w7QUFFRixRQUFJLHlCQUFRLElBQUksRUFDYixRQUFRLFdBQVcsRUFDbkIsUUFBUSx3REFBd0QsRUFDaEU7QUFBQSxNQUFRLENBQUMsTUFDUixFQUFFLFNBQVMsTUFBTSxTQUFTLEVBQ3ZCLGVBQWUsWUFBWSxFQUMzQixTQUFTLE9BQU8sTUFBTTtBQUNyQixZQUFJLHNCQUFzQixLQUFLLENBQUMsS0FBSyxNQUFNLElBQUk7QUFDN0MsZUFBSyxPQUFPLFNBQVMsY0FBYyxZQUFZO0FBQy9DLGdCQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsUUFDakM7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNMO0FBR0YsUUFBSSxNQUFNLFdBQVc7QUFDbkIsWUFBTSxNQUFNLEtBQUssYUFBYSxNQUFNLFNBQVM7QUFDN0MsV0FBSyxTQUFTLE9BQU87QUFBQSxRQUNuQixNQUFNLFFBQVEsR0FBRztBQUFBLFFBQ2pCLE1BQU0sRUFBRSxPQUFPLHVGQUF1RjtBQUFBLE1BQ3hHLENBQUM7QUFBQSxJQUNIO0FBR0EsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxxQkFBcUIsRUFDN0I7QUFBQSxNQUFRLENBQUMsTUFDUixFQUFFLFNBQVMsTUFBTSxnQkFBZ0IsT0FBTyxNQUFNLGFBQWEsSUFBSSxFQUFFLEVBQzlELGVBQWUsU0FBUyxFQUN4QixTQUFTLE9BQU8sTUFBTTtBQUNyQixjQUFNLElBQUksV0FBVyxDQUFDO0FBQ3RCLFlBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUc7QUFDdEIsZUFBSyxPQUFPLFNBQVMsY0FBYyxnQkFBZ0I7QUFDbkQsZ0JBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxRQUNqQztBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0w7QUFFRixRQUFJLHlCQUFRLElBQUksRUFDYixRQUFRLDBCQUEwQixFQUNsQyxRQUFRLHNEQUFzRCxFQUM5RDtBQUFBLE1BQVksQ0FBQyxNQUNaLEVBQUUsV0FBVztBQUFBLFFBQ1gsZ0JBQWdCO0FBQUEsUUFDaEIsY0FBYztBQUFBLFFBQ2QsaUJBQWlCO0FBQUEsUUFDakIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsVUFBVTtBQUFBLE1BQ1osQ0FBQyxFQUNFLFNBQVMsTUFBTSxrQkFBa0IsRUFDakMsU0FBUyxPQUFPLE1BQU07QUFDckIsYUFBSyxPQUFPLFNBQVMsY0FBYyxxQkFBcUI7QUFDeEQsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUMvQixhQUFLLFFBQVE7QUFBQSxNQUNmLENBQUM7QUFBQSxJQUNMO0FBRUYsUUFBSSxNQUFNLHVCQUF1QixVQUFVO0FBQ3pDLFVBQUkseUJBQVEsSUFBSSxFQUNiLFFBQVEsd0JBQXdCLEVBQ2hDO0FBQUEsUUFBUSxDQUFDLE1BQ1IsRUFBRSxTQUFTLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQyxFQUN6QyxTQUFTLE9BQU8sTUFBTTtBQUNyQixnQkFBTSxJQUFJLFNBQVMsQ0FBQztBQUNwQixjQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHO0FBQ3RCLGlCQUFLLE9BQU8sU0FBUyxjQUFjLHNCQUFzQjtBQUN6RCxrQkFBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLFVBQ2pDO0FBQUEsUUFDRixDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFHQSxRQUFJLHlCQUFRLElBQUksRUFDYixRQUFRLG9CQUFvQixFQUM1QixRQUFRLDhDQUE4QyxFQUN0RDtBQUFBLE1BQVUsQ0FBQyxRQUNWLElBQUksY0FBYyxZQUFZLEVBQUUsUUFBUSxZQUFZO0FBQ2xELGNBQU0sSUFBSSxLQUFLLE9BQU8sU0FBUyxjQUFjO0FBQzdDLFlBQUksQ0FBQyxLQUFLLEtBQUssR0FBRztBQUNoQixjQUFJLHdCQUFPLGlDQUFpQztBQUM1QztBQUFBLFFBQ0Y7QUFDQSxjQUFNLFNBQVEsb0JBQUksS0FBSyxHQUFFLFlBQVksRUFBRSxNQUFNLEdBQUcsRUFBRTtBQUVsRCxjQUFNLFdBQVcsS0FBSyxPQUFPLFNBQVMsY0FBYyxVQUFVLEtBQUssQ0FBQyxNQUFNLEVBQUUsU0FBUyxLQUFLO0FBQzFGLFlBQUksVUFBVTtBQUNaLG1CQUFTLFNBQVM7QUFBQSxRQUNwQixPQUFPO0FBQ0wsZUFBSyxPQUFPLFNBQVMsY0FBYyxVQUFVLEtBQUssRUFBRSxNQUFNLE9BQU8sUUFBUSxFQUFFLENBQUM7QUFBQSxRQUM5RTtBQUNBLGFBQUssT0FBTyxTQUFTLGNBQWMsb0JBQW9CO0FBQ3ZELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFDL0IsWUFBSSx3QkFBTyxrQkFBa0IsQ0FBQyxLQUFLO0FBQ25DLGFBQUssUUFBUTtBQUFBLE1BQ2YsQ0FBQztBQUFBLElBQ0g7QUFHRixVQUFNLE1BQU0sTUFBTTtBQUNsQixRQUFJLElBQUksU0FBUyxHQUFHO0FBQ2xCLFlBQU0sWUFBWSxLQUFLLFVBQVU7QUFBQSxRQUMvQixNQUFNLEVBQUUsT0FBTyx3R0FBd0c7QUFBQSxNQUN6SCxDQUFDO0FBQ0QsZ0JBQVUsU0FBUyxPQUFPO0FBQUEsUUFDeEIsTUFBTTtBQUFBLFFBQ04sTUFBTSxFQUFFLE9BQU8sMERBQTBEO0FBQUEsTUFDM0UsQ0FBQztBQUVELFlBQU0sU0FBUyxDQUFDLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLGNBQWMsRUFBRSxJQUFJLENBQUM7QUFDbkUsWUFBTSxTQUFTLE9BQU8sTUFBTSxHQUFHLEVBQUU7QUFFakMsaUJBQVcsU0FBUyxRQUFRO0FBQzFCLGtCQUFVLFNBQVMsT0FBTztBQUFBLFVBQ3hCLE1BQU0sR0FBRyxNQUFNLElBQUksS0FBSyxNQUFNLE1BQU07QUFBQSxVQUNwQyxNQUFNLEVBQUUsT0FBTyw4REFBOEQ7QUFBQSxRQUMvRSxDQUFDO0FBQUEsTUFDSDtBQUVBLFVBQUksT0FBTyxTQUFTLElBQUk7QUFDdEIsa0JBQVUsU0FBUyxPQUFPO0FBQUEsVUFDeEIsTUFBTSxXQUFXLE9BQU8sU0FBUyxFQUFFO0FBQUEsVUFDbkMsTUFBTSxFQUFFLE9BQU8sbUVBQW1FO0FBQUEsUUFDcEYsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBRVEsYUFBYSxXQUEyQjtBQUM5QyxVQUFNLFFBQVEsSUFBSSxLQUFLLFNBQVM7QUFDaEMsVUFBTSxNQUFNLG9CQUFJLEtBQUs7QUFDckIsUUFBSSxNQUFNLElBQUksWUFBWSxJQUFJLE1BQU0sWUFBWTtBQUNoRCxVQUFNLFlBQVksSUFBSSxTQUFTLElBQUksTUFBTSxTQUFTO0FBQ2xELFFBQUksWUFBWSxLQUFNLGNBQWMsS0FBSyxJQUFJLFFBQVEsSUFBSSxNQUFNLFFBQVEsR0FBSTtBQUN6RTtBQUFBLElBQ0Y7QUFDQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUEsRUFJUSx3QkFBd0IsV0FBOEI7QUFDNUQsVUFBTSxPQUFPLEtBQUsseUJBQXlCLFdBQVcsY0FBYyxXQUFXO0FBRS9FLGFBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLFNBQVMsV0FBVyxRQUFRLEtBQUs7QUFDL0QsWUFBTSxXQUFXLEtBQUssT0FBTyxTQUFTLFdBQVcsQ0FBQztBQUNsRCxXQUFLLG1CQUFtQixNQUFNLFVBQVUsQ0FBQztBQUFBLElBQzNDO0FBR0EsUUFBSSx5QkFBUSxJQUFJLEVBQ2I7QUFBQSxNQUFVLENBQUMsUUFDVixJQUFJLGNBQWMsZ0JBQWdCLEVBQUUsUUFBUSxZQUFZO0FBQ3RELGNBQU0sY0FBOEI7QUFBQSxVQUNsQyxJQUFJLFVBQVUsS0FBSyxJQUFJLENBQUM7QUFBQSxVQUN4QixNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxVQUFVO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsVUFDVixxQkFBcUI7QUFBQSxVQUNyQixjQUFjO0FBQUEsVUFDZCxjQUFjO0FBQUEsVUFDZCxjQUFjO0FBQUEsVUFDZCxVQUFVO0FBQUEsVUFDVixrQkFBa0I7QUFBQSxVQUNsQixlQUFlO0FBQUEsVUFDZixtQkFBbUI7QUFBQSxRQUNyQjtBQUNBLGFBQUssT0FBTyxTQUFTLFdBQVcsS0FBSyxXQUFXO0FBQ2hELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFDL0IsYUFBSyxRQUFRO0FBQUEsTUFDZixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0o7QUFBQSxFQUVRLG1CQUFtQixXQUF3QixVQUEwQixPQUFxQjtBQUNoRyxVQUFNLFVBQVUsVUFBVSxVQUFVO0FBQUEsTUFDbEMsTUFBTTtBQUFBLFFBQ0osT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1UO0FBQUEsSUFDRixDQUFDO0FBR0QsUUFBSSx5QkFBUSxPQUFPLEVBQ2hCLFFBQVEsR0FBRyxTQUFTLEtBQUssSUFBSSxTQUFTLElBQUksRUFBRSxFQUM1QyxRQUFRLEdBQUcsU0FBUyxRQUFRLFNBQU0sU0FBUyxVQUFVLGVBQWUsRUFBRSxFQUN0RTtBQUFBLE1BQVUsQ0FBQyxXQUNWLE9BQU8sU0FBUyxTQUFTLE9BQU8sRUFBRSxTQUFTLE9BQU8sVUFBVTtBQUMxRCxhQUFLLE9BQU8sU0FBUyxXQUFXLEtBQUssRUFBRSxVQUFVO0FBQ2pELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDSDtBQUdGLFVBQU0sZ0JBQWdCLFFBQVEsU0FBUyxTQUFTO0FBQ2hELGtCQUFjLFNBQVMsV0FBVztBQUFBLE1BQ2hDLE1BQU07QUFBQSxNQUNOLE1BQU0sRUFBRSxPQUFPLG9GQUFvRjtBQUFBLElBQ3JHLENBQUM7QUFFRCxVQUFNLFVBQVUsY0FBYyxVQUFVO0FBRXhDLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLE1BQU0sRUFDZCxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsU0FBUyxJQUFJLEVBQUUsU0FBUyxPQUFPLE1BQU07QUFDOUQsV0FBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUsT0FBTztBQUM5QyxZQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsSUFDakMsQ0FBQyxDQUFDO0FBRUosUUFBSSx5QkFBUSxPQUFPLEVBQ2hCLFFBQVEsT0FBTyxFQUNmLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxTQUFTLEtBQUssRUFBRSxTQUFTLE9BQU8sTUFBTTtBQUMvRCxXQUFLLE9BQU8sU0FBUyxXQUFXLEtBQUssRUFBRSxRQUFRO0FBQy9DLFlBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxJQUNqQyxDQUFDLENBQUM7QUFFSixRQUFJLHlCQUFRLE9BQU8sRUFDaEIsUUFBUSxVQUFVLEVBQ2xCO0FBQUEsTUFBWSxDQUFDLE1BQ1osRUFBRSxXQUFXLEVBQUUsTUFBTSxRQUFRLE1BQU0sUUFBUSxRQUFRLFNBQVMsQ0FBQyxFQUMxRCxTQUFTLFNBQVMsUUFBUSxFQUMxQixTQUFTLE9BQU8sTUFBTTtBQUNyQixhQUFLLE9BQU8sU0FBUyxXQUFXLEtBQUssRUFBRSxXQUFXO0FBQ2xELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLGlCQUFpQixFQUN6QixRQUFRLHVEQUF1RCxFQUMvRCxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsU0FBUyxNQUFNLEVBQUUsU0FBUyxPQUFPLE1BQU07QUFDaEUsV0FBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUsU0FBUztBQUNoRCxZQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsSUFDakMsQ0FBQyxDQUFDO0FBRUosUUFBSSx5QkFBUSxPQUFPLEVBQ2hCLFFBQVEsc0JBQXNCLEVBQzlCLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxTQUFTLFFBQVEsRUFBRSxTQUFTLE9BQU8sTUFBTTtBQUNsRSxXQUFLLE9BQU8sU0FBUyxXQUFXLEtBQUssRUFBRSxXQUFXO0FBQ2xELFlBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxJQUNqQyxDQUFDLENBQUM7QUFFSixRQUFJLHlCQUFRLE9BQU8sRUFDaEIsUUFBUSxlQUFlLEVBQ3ZCO0FBQUEsTUFBVSxDQUFDLE1BQ1YsRUFBRSxVQUFVLEdBQUcsR0FBRyxDQUFDLEVBQ2hCLFNBQVMsU0FBUyxZQUFZLEVBQzlCLGtCQUFrQixFQUNsQixTQUFTLE9BQU8sTUFBTTtBQUNyQixhQUFLLE9BQU8sU0FBUyxXQUFXLEtBQUssRUFBRSxlQUFlO0FBQ3RELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLGlCQUFpQixFQUN6QjtBQUFBLE1BQVUsQ0FBQyxNQUNWLEVBQUUsVUFBVSxHQUFHLElBQUksQ0FBQyxFQUNqQixTQUFTLFNBQVMsUUFBUSxFQUMxQixrQkFBa0IsRUFDbEIsU0FBUyxPQUFPLE1BQU07QUFDckIsYUFBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUsV0FBVztBQUNsRCxjQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsTUFDakMsQ0FBQztBQUFBLElBQ0w7QUFFRixRQUFJLHlCQUFRLE9BQU8sRUFDaEIsUUFBUSxnQkFBZ0IsRUFDeEI7QUFBQSxNQUFZLENBQUMsTUFDWixFQUFFLFdBQVc7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUFXLFdBQVc7QUFBQSxRQUMvQixTQUFTO0FBQUEsUUFBVyxTQUFTO0FBQUEsTUFDL0IsQ0FBQyxFQUNFLFNBQVMsU0FBUyxhQUFhLEVBQy9CLFNBQVMsT0FBTyxNQUFNO0FBQ3JCLGFBQUssT0FBTyxTQUFTLFdBQVcsS0FBSyxFQUFFLGdCQUFnQjtBQUN2RCxjQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsTUFDakMsQ0FBQztBQUFBLElBQ0w7QUFFRixRQUFJLHlCQUFRLE9BQU8sRUFDaEIsUUFBUSwwQkFBMEIsRUFDbEM7QUFBQSxNQUFVLENBQUMsTUFDVixFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFDakIsU0FBUyxTQUFTLGdCQUFnQixFQUNsQyxrQkFBa0IsRUFDbEIsU0FBUyxPQUFPLE1BQU07QUFDckIsYUFBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUsbUJBQW1CO0FBQzFELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLDhCQUE4QixFQUN0QztBQUFBLE1BQVEsQ0FBQyxNQUNSLEVBQUUsU0FBUyxPQUFPLFNBQVMsaUJBQWlCLENBQUMsRUFBRSxTQUFTLE9BQU8sTUFBTTtBQUNuRSxjQUFNLElBQUksU0FBUyxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEdBQUc7QUFDdEIsZUFBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUsb0JBQW9CO0FBQzNELGdCQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsUUFDakM7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBRUYsUUFBSSx5QkFBUSxPQUFPLEVBQ2hCLFFBQVEsZUFBZSxFQUN2QixRQUFRLG1GQUFtRixFQUMzRjtBQUFBLE1BQVUsQ0FBQyxXQUNWLE9BQU8sU0FBUyxTQUFTLFlBQVksRUFBRSxTQUFTLE9BQU8sTUFBTTtBQUMzRCxhQUFLLE9BQU8sU0FBUyxXQUFXLEtBQUssRUFBRSxlQUFlO0FBQ3RELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDSDtBQUVGLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLG9CQUFvQixFQUM1QixRQUFRLHFHQUFxRyxFQUM3RztBQUFBLE1BQVEsQ0FBQyxNQUNSLEVBQUUsZUFBZSxjQUFjLEVBQzVCLFNBQVMsU0FBUyxxQkFBcUIsRUFBRSxFQUN6QyxTQUFTLE9BQU8sTUFBTTtBQUNyQixhQUFLLE9BQU8sU0FBUyxXQUFXLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEtBQUs7QUFDdkUsYUFBSyxPQUFPLGVBQWUsZ0JBQWdCO0FBQzNDLGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLGNBQWMsRUFDdEIsUUFBUSwwQ0FBMEMsRUFDbEQ7QUFBQSxNQUFRLENBQUMsTUFDUixFQUFFLGVBQWUscUNBQXFDLEVBQ25ELFNBQVMsU0FBUyxlQUFlLEVBQUUsRUFDbkMsU0FBUyxPQUFPLE1BQU07QUFDckIsYUFBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUsY0FBYyxFQUFFLEtBQUssS0FBSztBQUNqRSxjQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsTUFDakMsQ0FBQztBQUFBLElBQ0w7QUFFRixRQUFJLHlCQUFRLE9BQU8sRUFDaEIsUUFBUSxrQkFBa0IsRUFDMUIsUUFBUSwyQ0FBMkMsRUFDbkQ7QUFBQSxNQUFZLENBQUMsTUFDWixFQUFFLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaLENBQUMsRUFDRTtBQUFBLFFBQ0MsQ0FBQyxTQUFTLHNCQUFzQixTQUFTLHVCQUF1QixjQUM1RCxjQUNBLFNBQVMsdUJBQXVCLFNBQzlCLFNBQ0E7QUFBQSxNQUNSLEVBQ0MsU0FBUyxPQUFPLE1BQU07QUFDckIsYUFBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUscUJBQXFCO0FBQzVELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLHVDQUF1QyxFQUMvQztBQUFBLE1BQVEsQ0FBQyxNQUNSLEVBQUUsVUFBVSxTQUFTLFVBQVUsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEVBQUUsU0FBUyxPQUFPLE1BQU07QUFDbkUsYUFBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxPQUFPO0FBQ2hHLGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDSDtBQUVGLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLCtCQUErQixFQUN2QztBQUFBLE1BQVEsQ0FBQyxNQUNSLEVBQUUsU0FBUyxTQUFTLGtCQUFrQixFQUFFLEVBQUUsU0FBUyxPQUFPLE1BQU07QUFDOUQsYUFBSyxPQUFPLFNBQVMsV0FBVyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsS0FBSyxLQUFLO0FBQ3BFLGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDSDtBQUVGLFFBQUkseUJBQVEsT0FBTyxFQUNoQixRQUFRLDJCQUEyQixFQUNuQztBQUFBLE1BQVEsQ0FBQyxNQUNSLEVBQUUsU0FBUyxTQUFTLGNBQWMsRUFBRSxFQUFFLFNBQVMsT0FBTyxNQUFNO0FBQzFELGFBQUssT0FBTyxTQUFTLFdBQVcsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEtBQUs7QUFDaEUsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNIO0FBR0YsUUFBSSx5QkFBUSxPQUFPLEVBQ2hCO0FBQUEsTUFBVSxDQUFDLFFBQ1YsSUFDRyxjQUFjLGlCQUFpQixFQUMvQixXQUFXLEVBQ1gsUUFBUSxZQUFZO0FBQ25CLGFBQUssT0FBTyxTQUFTLFdBQVcsT0FBTyxPQUFPLENBQUM7QUFDL0MsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUMvQixhQUFLLFFBQVE7QUFBQSxNQUNmLENBQUM7QUFBQSxJQUNMO0FBQUEsRUFDSjtBQUFBO0FBQUEsRUFJUSx3QkFBd0IsV0FBOEI7QUFDNUQsVUFBTSxPQUFPLEtBQUsseUJBQXlCLFdBQVcsY0FBYyxXQUFXO0FBRS9FLFVBQU0sYUFBaUQ7QUFBQSxNQUNyRCxFQUFFLEtBQUssUUFBUSxPQUFPLE9BQU87QUFBQSxNQUM3QixFQUFFLEtBQUssUUFBUSxPQUFPLE9BQU87QUFBQSxNQUM3QixFQUFFLEtBQUssVUFBVSxPQUFPLFNBQVM7QUFBQSxJQUNuQztBQUVBLGVBQVcsT0FBTyxZQUFZO0FBQzVCLFVBQUkseUJBQVEsSUFBSSxFQUNiLFFBQVEsR0FBRyxJQUFJLEtBQUssUUFBUSxFQUM1QjtBQUFBLFFBQWUsQ0FBQyxPQUNmLEdBQ0csU0FBUyxLQUFLLE9BQU8sU0FBUyxlQUFlLElBQUksR0FBRyxDQUFDLEVBQ3JELFNBQVMsT0FBTyxNQUFNO0FBQ3JCLGVBQUssT0FBTyxTQUFTLGVBQWUsSUFBSSxHQUFHLElBQUk7QUFDL0MsZ0JBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxRQUNqQyxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFFQSxRQUFJLHlCQUFRLElBQUksRUFDYixRQUFRLGdCQUFnQixFQUN4QixRQUFRLG1EQUFtRCxFQUMzRDtBQUFBLE1BQVEsQ0FBQyxNQUNSLEVBQ0csU0FBUyxLQUFLLE9BQU8sU0FBUyxhQUFhLEVBQzNDLFNBQVMsT0FBTyxNQUFNO0FBQ3JCLGFBQUssT0FBTyxTQUFTLGdCQUFnQjtBQUNyQyxjQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsTUFDakMsQ0FBQztBQUFBLElBQ0w7QUFBQSxFQUNKO0FBQUE7QUFBQSxFQUlRLG9CQUFvQixXQUE4QjtBQUN4RCxVQUFNLE9BQU8sS0FBSyx5QkFBeUIsV0FBVyxpQkFBaUIsaUJBQWlCO0FBRXhGLGFBQVMsSUFBSSxHQUFHLElBQUksS0FBSyxPQUFPLFNBQVMsWUFBWSxRQUFRLEtBQUs7QUFDaEUsWUFBTSxPQUFPLEtBQUssT0FBTyxTQUFTLFlBQVksQ0FBQztBQUUvQyxVQUFJLHlCQUFRLElBQUksRUFDYixRQUFRLEdBQUcsS0FBSyxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUUsRUFDcEMsUUFBUSxTQUFTLEtBQUssWUFBWSxTQUFTLEVBQzNDO0FBQUEsUUFBUSxDQUFDLE1BQ1IsRUFBRSxlQUFlLE1BQU0sRUFBRSxTQUFTLEtBQUssSUFBSSxFQUFFLFNBQVMsT0FBTyxNQUFNO0FBQ2pFLGVBQUssT0FBTyxTQUFTLFlBQVksQ0FBQyxFQUFFLE9BQU87QUFDM0MsZ0JBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxRQUNqQyxDQUFDO0FBQUEsTUFDSCxFQUNDO0FBQUEsUUFBUSxDQUFDLE1BQ1IsRUFBRSxlQUFlLE1BQU0sRUFBRSxTQUFTLE9BQU8sS0FBSyxZQUFZLENBQUMsRUFBRSxTQUFTLE9BQU8sTUFBTTtBQUNqRixnQkFBTSxJQUFJLFNBQVMsQ0FBQztBQUNwQixjQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxHQUFHO0FBQ3RCLGlCQUFLLE9BQU8sU0FBUyxZQUFZLENBQUMsRUFBRSxlQUFlO0FBQ25ELGtCQUFNLEtBQUssT0FBTyxhQUFhO0FBQUEsVUFDakM7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNILEVBQ0M7QUFBQSxRQUFRLENBQUMsTUFDUixFQUFFLGVBQWUsT0FBTyxFQUFFLFNBQVMsS0FBSyxLQUFLLEVBQUUsU0FBUyxPQUFPLE1BQU07QUFDbkUsZUFBSyxPQUFPLFNBQVMsWUFBWSxDQUFDLEVBQUUsUUFBUTtBQUM1QyxnQkFBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLFFBQ2pDLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDSjtBQUVBLFFBQUkseUJBQVEsSUFBSSxFQUFFO0FBQUEsTUFBVSxDQUFDLFFBQzNCLElBQUksY0FBYyxtQkFBbUIsRUFBRSxRQUFRLFlBQVk7QUFDekQsYUFBSyxPQUFPLFNBQVMsWUFBWSxLQUFLO0FBQUEsVUFDcEMsSUFBSSxVQUFVLEtBQUssSUFBSSxDQUFDO0FBQUEsVUFDeEIsTUFBTTtBQUFBLFVBQ04sZUFBZTtBQUFBLFVBQ2YsY0FBYztBQUFBLFVBQ2QsT0FBTztBQUFBLFFBQ1QsQ0FBQztBQUNELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFDL0IsYUFBSyxRQUFRO0FBQUEsTUFDZixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQTtBQUFBLEVBSVEsc0JBQXNCLFdBQThCO0FBQzFELFVBQU0sT0FBTyxLQUFLLHlCQUF5QixXQUFXLHdCQUF3QixXQUFXO0FBRXpGLFNBQUssU0FBUyxLQUFLO0FBQUEsTUFDakIsTUFBTTtBQUFBLE1BQ04sTUFBTSxFQUFFLE9BQU8sbUVBQW1FO0FBQUEsSUFDcEYsQ0FBQztBQUdELFFBQUkseUJBQVEsSUFBSSxFQUNiLFFBQVEseUJBQXlCLEVBQ2pDLFFBQVEsMkRBQTJELEVBQ25FO0FBQUEsTUFBVSxDQUFDLFdBQ1YsT0FBTyxTQUFTLEtBQUssT0FBTyxTQUFTLFNBQVMsZ0JBQWdCLEVBQUUsU0FBUyxPQUFPLE1BQU07QUFDcEYsYUFBSyxPQUFPLFNBQVMsU0FBUyxtQkFBbUI7QUFDakQsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNIO0FBRUYsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxvQkFBb0IsRUFDNUIsUUFBUSw2Q0FBNkMsRUFDckQ7QUFBQSxNQUFRLENBQUMsTUFDUixFQUNHLGVBQWUsYUFBYSxFQUM1QixTQUFTLEtBQUssT0FBTyxTQUFTLFNBQVMsZ0JBQWdCLEVBQ3ZELFNBQVMsT0FBTyxNQUFNO0FBQ3JCLGFBQUssT0FBTyxTQUFTLFNBQVMsbUJBQW1CO0FBQ2pELGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUdGLFFBQUkseUJBQVEsSUFBSSxFQUNiLFFBQVEsMEJBQTBCLEVBQ2xDLFFBQVEsaURBQWlELEVBQ3pEO0FBQUEsTUFBVSxDQUFDLFdBQ1YsT0FBTyxTQUFTLEtBQUssT0FBTyxTQUFTLFNBQVMsaUJBQWlCLEVBQUUsU0FBUyxPQUFPLE1BQU07QUFDckYsYUFBSyxPQUFPLFNBQVMsU0FBUyxvQkFBb0I7QUFDbEQsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNIO0FBR0YsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxhQUFhLEVBQ3JCLFFBQVEsNkJBQTZCLEVBQ3JDO0FBQUEsTUFBVSxDQUFDLFdBQ1YsT0FBTyxTQUFTLEtBQUssT0FBTyxTQUFTLFNBQVMsZ0JBQWdCLEVBQUUsU0FBUyxPQUFPLE1BQU07QUFDcEYsYUFBSyxPQUFPLFNBQVMsU0FBUyxtQkFBbUI7QUFDakQsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNIO0FBR0YsUUFBSSxLQUFLLE9BQU8sU0FBUyxTQUFTLGtCQUFrQjtBQUNsRCxZQUFNLE1BQU0sS0FBSyxPQUFPLFNBQVMsZ0JBQzdCLElBQUksS0FBSyxLQUFLLE9BQU8sU0FBUyxhQUFhLElBQzNDLG9CQUFJLEtBQUs7QUFDYixZQUFNLFFBQVEsSUFBSSxZQUFZLEVBQUUsTUFBTSxHQUFHLEVBQUU7QUFFM0MsWUFBTSxhQUFhLEtBQUssT0FBTyxTQUFTLFNBQVMsV0FBVztBQUFBLFFBQzFELENBQUMsT0FBTyxHQUFHLFNBQVM7QUFBQSxNQUN0QjtBQUVBLFVBQUksV0FBVyxTQUFTLEdBQUc7QUFDekIsY0FBTSxTQUFTLEtBQUssVUFBVTtBQUFBLFVBQzVCLE1BQU0sRUFBRSxPQUFPLHdHQUF3RztBQUFBLFFBQ3pILENBQUM7QUFFRCxlQUFPLFNBQVMsT0FBTztBQUFBLFVBQ3JCLE1BQU07QUFBQSxVQUNOLE1BQU0sRUFBRSxPQUFPLDBEQUEwRDtBQUFBLFFBQzNFLENBQUM7QUFFRCxpQkFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLE9BQU8sU0FBUyxTQUFTLFdBQVcsUUFBUSxLQUFLO0FBQ3hFLGdCQUFNLEtBQUssS0FBSyxPQUFPLFNBQVMsU0FBUyxXQUFXLENBQUM7QUFDckQsY0FBSSxHQUFHLFNBQVM7QUFBTztBQUV2QixjQUFJLHlCQUFRLE1BQU0sRUFDZixRQUFRLEdBQUcsR0FBRyxPQUFPLFdBQVcsUUFBUSxJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQ3REO0FBQUEsWUFDQyxDQUFDLEdBQUcsTUFBTSxHQUFHLFdBQVcsR0FBRyxHQUFHLFFBQVEsTUFBTSxFQUFFLEVBQUUsT0FBTyxPQUFPLEVBQUUsS0FBSyxRQUFLLEtBQUs7QUFBQSxVQUNqRixFQUNDO0FBQUEsWUFBVSxDQUFDLFFBQ1YsSUFBSSxjQUFjLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxZQUFZO0FBQzNELG1CQUFLLE9BQU8sU0FBUyxTQUFTLFdBQVcsT0FBTyxHQUFHLENBQUM7QUFDcEQsb0JBQU0sS0FBSyxPQUFPLGFBQWE7QUFDL0IsbUJBQUssUUFBUTtBQUFBLFlBQ2YsQ0FBQztBQUFBLFVBQ0g7QUFBQSxRQUNKO0FBQUEsTUFDRjtBQUVBLFVBQUkseUJBQVEsSUFBSSxFQUFFO0FBQUEsUUFBVSxDQUFDLFFBQzNCLElBQUksY0FBYyxrQkFBa0IsRUFBRSxRQUFRLE1BQU07QUFDbEQsVUFBQyxLQUFLLE9BQWUsb0JBQW9CO0FBQUEsUUFFM0MsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFJUSxtQkFBbUIsV0FBOEI7QUFDdkQsVUFBTSxPQUFPLEtBQUsseUJBQXlCLFdBQVcsU0FBUyxXQUFXO0FBRTFFLFVBQU0sY0FBb0U7QUFBQSxNQUN4RSxFQUFFLEtBQUssYUFBYSxPQUFPLGNBQWMsWUFBWSxVQUFVO0FBQUEsTUFDL0QsRUFBRSxLQUFLLGVBQWUsT0FBTyxRQUFRLFlBQVksVUFBVTtBQUFBLE1BQzNELEVBQUUsS0FBSyxhQUFhLE9BQU8sY0FBYyxZQUFZLFVBQVU7QUFBQSxNQUMvRCxFQUFFLEtBQUssY0FBYyxPQUFPLGlCQUFpQixZQUFZLFVBQVU7QUFBQSxNQUNuRSxFQUFFLEtBQUssVUFBVSxPQUFPLFVBQVUsWUFBWSxVQUFVO0FBQUEsTUFDeEQsRUFBRSxLQUFLLFdBQVcsT0FBTyxXQUFXLFlBQVksVUFBVTtBQUFBLElBQzVEO0FBRUEsZUFBVyxTQUFTLGFBQWE7QUFDL0IsVUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxNQUFNLEtBQUssRUFDbkI7QUFBQSxRQUFlLENBQUMsT0FDZixHQUNHO0FBQUEsVUFDRSxLQUFLLE9BQU8sU0FBUyxpQkFBeUIsTUFBTSxHQUFHLEtBQUssTUFBTTtBQUFBLFFBQ3JFLEVBQ0MsU0FBUyxPQUFPLE1BQU07QUFDckIsVUFBQyxLQUFLLE9BQU8sU0FBUyxlQUF1QixNQUFNLEdBQUcsSUFBSTtBQUMxRCxnQkFBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLFFBQ2pDLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDSjtBQUVBLFFBQUkseUJBQVEsSUFBSSxFQUFFO0FBQUEsTUFBVSxDQUFDLFFBQzNCLElBQUksY0FBYyx1QkFBdUIsRUFBRSxRQUFRLFlBQVk7QUFDN0QsYUFBSyxPQUFPLFNBQVMsaUJBQWlCLENBQUM7QUFDdkMsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUMvQixhQUFLLFFBQVE7QUFDYixZQUFJLHdCQUFPLHNDQUFzQztBQUFBLE1BQ25ELENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFJUSxzQkFBc0IsV0FBOEI7QUFDMUQsVUFBTSxPQUFPLEtBQUsseUJBQXlCLFdBQVcsWUFBWSxjQUFjO0FBRWhGLFFBQUkseUJBQVEsSUFBSSxFQUNiLFFBQVEsZ0JBQWdCLEVBQ3hCLFFBQVEsZ0RBQWdELEVBQ3hEO0FBQUEsTUFBUSxDQUFDLE1BQ1IsRUFDRyxlQUFlLFlBQVksRUFDM0IsU0FBUyxLQUFLLE9BQU8sU0FBUyxpQkFBaUIsRUFBRSxFQUNqRCxTQUFTLE9BQU8sTUFBTTtBQUNyQixhQUFLLE9BQU8sU0FBUyxnQkFBZ0IsRUFBRSxLQUFLLEtBQUs7QUFDakQsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNMO0FBRUYsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxjQUFjLEVBQ3RCO0FBQUEsTUFBWSxDQUFDLE1BQ1osRUFDRyxXQUFXLEVBQUUsUUFBUSxVQUFVLFFBQVEsU0FBUyxDQUFDLEVBQ2pELFNBQVMsS0FBSyxPQUFPLFNBQVMsV0FBVyxFQUN6QyxTQUFTLE9BQU8sTUFBTTtBQUNyQixjQUFNLFdBQVc7QUFDakIsWUFBSSxhQUFhLFlBQVksS0FBSyxPQUFPLFNBQVMsZ0JBQWdCLFVBQVU7QUFDMUUsZUFBSyxPQUFPLFNBQVMsa0JBQWlCLG9CQUFJLEtBQUssR0FBRSxZQUFZO0FBQUEsUUFDL0QsV0FBVyxhQUFhLFlBQVksS0FBSyxPQUFPLFNBQVMsZ0JBQWdCLFVBQVU7QUFDakYsY0FBSSxLQUFLLE9BQU8sU0FBUyxnQkFBZ0I7QUFDdkMsa0JBQU0sV0FBVyxLQUFLLElBQUksSUFBSSxJQUFJLEtBQUssS0FBSyxPQUFPLFNBQVMsY0FBYyxFQUFFLFFBQVE7QUFDcEYsaUJBQUssT0FBTyxTQUFTLG1CQUFtQjtBQUFBLFVBQzFDO0FBQ0EsZUFBSyxPQUFPLFNBQVMsaUJBQWlCO0FBQUEsUUFDeEM7QUFDQSxhQUFLLE9BQU8sU0FBUyxjQUFjO0FBQ25DLGNBQU0sS0FBSyxPQUFPLGFBQWE7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDTDtBQUVGLFFBQUkseUJBQVEsSUFBSSxFQUNiLFFBQVEsY0FBYyxFQUN0QixRQUFRLHFDQUFxQyxFQUM3QztBQUFBLE1BQVEsQ0FBQyxNQUNSLEVBQ0csZUFBZSxjQUFjLEVBQzdCLFNBQVMsS0FBSyxPQUFPLFNBQVMsZUFBZSxFQUM3QyxTQUFTLE9BQU8sTUFBTTtBQUNyQixhQUFLLE9BQU8sU0FBUyxrQkFBa0I7QUFDdkMsY0FBTSxLQUFLLE9BQU8sYUFBYTtBQUFBLE1BQ2pDLENBQUM7QUFBQSxJQUNMO0FBRUYsUUFBSSx5QkFBUSxJQUFJLEVBQ2IsUUFBUSxrQkFBa0IsRUFDMUIsUUFBUSwyREFBMkQsRUFDbkU7QUFBQSxNQUFVLENBQUMsUUFDVixJQUFJLGNBQWMsU0FBUyxFQUFFLFdBQVcsRUFBRSxRQUFRLFlBQVk7QUFDNUQsYUFBSyxPQUFPLFNBQVMsV0FBVztBQUNoQyxjQUFNLEtBQUssT0FBTyxhQUFhO0FBRS9CLGNBQU8sS0FBSyxPQUFlLE9BQU87QUFDbEMsYUFBSyxRQUFRO0FBQ2IsWUFBSSx3QkFBTyxvQkFBb0I7QUFBQSxNQUNqQyxDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0o7QUFBQTtBQUFBLEVBSVEsMEJBQTBCLFdBQThCO0FBQzlELFVBQU0sT0FBTyxLQUFLLHlCQUF5QixXQUFXLHVCQUF1QixpQkFBaUI7QUFFOUYsU0FBSyxTQUFTLEtBQUs7QUFBQSxNQUNqQixNQUFNO0FBQUEsTUFDTixNQUFNLEVBQUUsT0FBTyxtRUFBbUU7QUFBQSxJQUNwRixDQUFDO0FBRUQsVUFBTSxXQUFXLEtBQUssU0FBUyxZQUFZO0FBQUEsTUFDekMsTUFBTTtBQUFBLFFBQ0osT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU1UO0FBQUEsSUFDRixDQUFDO0FBQ0QsYUFBUyxRQUFRLEtBQUssVUFBVSxLQUFLLE9BQU8sU0FBUyxXQUFXLE1BQU0sQ0FBQztBQUV2RSxRQUFJLHlCQUFRLElBQUksRUFDYjtBQUFBLE1BQVUsQ0FBQyxRQUNWLElBQUksY0FBYyxnQkFBZ0IsRUFBRSxRQUFRLFlBQVk7QUFDdEQsWUFBSTtBQUNGLGdCQUFNLFNBQVMsS0FBSyxNQUFNLFNBQVMsS0FBSztBQUN4QyxlQUFLLE9BQU8sU0FBUyxZQUFZLE9BQU87QUFBQSxZQUN0QyxDQUFDO0FBQUEsWUFDRDtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQ0EsZ0JBQU0sS0FBSyxPQUFPLGFBQWE7QUFDL0IsZUFBSyxPQUFPLGlCQUFpQjtBQUM3QixjQUFJLHdCQUFPLDZCQUE2QjtBQUFBLFFBQzFDLFNBQVMsS0FBSztBQUNaLGNBQUksd0JBQU8seUNBQW9DO0FBQUEsUUFDakQ7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNILEVBQ0M7QUFBQSxNQUFVLENBQUMsUUFDVixJQUFJLGNBQWMsbUJBQW1CLEVBQUUsUUFBUSxZQUFZO0FBQ3pELGFBQUssT0FBTyxTQUFTLFlBQVksRUFBRSxHQUFHLG1CQUFtQjtBQUN6RCxjQUFNLEtBQUssT0FBTyxhQUFhO0FBQy9CLGlCQUFTLFFBQVEsS0FBSyxVQUFVLEtBQUssT0FBTyxTQUFTLFdBQVcsTUFBTSxDQUFDO0FBQ3ZFLFlBQUksd0JBQU8sNkJBQTZCO0FBQUEsTUFDMUMsQ0FBQztBQUFBLElBQ0g7QUFHRixRQUFJLHlCQUFRLElBQUksRUFDYixRQUFRLHFCQUFxQixFQUM3QjtBQUFBLE1BQVUsQ0FBQyxRQUNWLElBQUksY0FBYyxtQkFBbUIsRUFBRSxRQUFRLFlBQVk7QUFDekQsY0FBTSxPQUFPLEtBQUssVUFBVSxLQUFLLE9BQU8sVUFBVSxNQUFNLENBQUM7QUFDekQsWUFBSTtBQUNGLGdCQUFNLFVBQVUsVUFBVSxVQUFVLElBQUk7QUFDeEMsY0FBSSx3QkFBTyw4QkFBOEI7QUFBQSxRQUMzQyxRQUFRO0FBRU4sZ0JBQU0sS0FBSyxTQUFTLGNBQWMsVUFBVTtBQUM1QyxhQUFHLFFBQVE7QUFDWCxhQUFHLE1BQU0sVUFBVTtBQUNuQixtQkFBUyxLQUFLLFlBQVksRUFBRTtBQUM1QixhQUFHLE9BQU87QUFDVixhQUFHLGlCQUFpQixRQUFRLE1BQU0sR0FBRyxPQUFPLENBQUM7QUFDN0MsY0FBSSx3QkFBTyxxQ0FBcUM7QUFBQSxRQUNsRDtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFFRixRQUFJLHlCQUFRLElBQUksRUFDYixRQUFRLGlCQUFpQixFQUN6QixZQUFZLENBQUMsU0FBUztBQUNyQixXQUFLLGVBQWUsb0JBQW9CO0FBQ3hDLFdBQUssUUFBUSxNQUFNLFFBQVE7QUFDM0IsV0FBSyxRQUFRLE1BQU0sWUFBWTtBQUMvQixXQUFLLFFBQVEsTUFBTSxhQUFhO0FBQ2hDLFdBQUssUUFBUSxNQUFNLFdBQVc7QUFHOUIsTUFBQyxLQUFhLGNBQWM7QUFBQSxJQUM5QixDQUFDLEVBQ0E7QUFBQSxNQUFVLENBQUMsUUFDVixJQUFJLGNBQWMsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLFlBQVk7QUFDM0QsWUFBSTtBQUNGLGdCQUFNLE9BQVEsS0FBYTtBQUMzQixjQUFJLENBQUM7QUFBTTtBQUNYLGdCQUFNLFNBQVMsS0FBSyxNQUFNLEtBQUssU0FBUyxDQUFDO0FBQ3pDLGlCQUFPLE9BQU8sS0FBSyxPQUFPLFVBQVUsTUFBTTtBQUMxQyxnQkFBTSxLQUFLLE9BQU8sYUFBYTtBQUMvQixlQUFLLFFBQVE7QUFDYixjQUFJLHdCQUFPLGdDQUFnQztBQUFBLFFBQzdDLFNBQVMsS0FBSztBQUNaLGNBQUksd0JBQU8seUNBQW9DO0FBQUEsUUFDakQ7QUFBQSxNQUNGLENBQUM7QUFBQSxJQUNIO0FBQUEsRUFDSjtBQUNGOzs7QUM1Z0NBLElBQUFDLG1CQUFtQzs7O0FDUG5DOzs7QUNZTyxJQUFNLG9CQUE0QztBQUFBLEVBQ3ZELFNBQVM7QUFDWDs7O0FGZ0RPLElBQU0saUJBQU4sTUFBcUI7QUFBQSxFQU0xQixZQUFZLEtBQVUsUUFBb0I7QUFGMUM7QUFBQSxTQUFRLGdCQUFxQyxvQkFBSSxJQUFJO0FBR25ELFNBQUssTUFBTTtBQUNYLFNBQUssU0FBUztBQUFBLEVBQ2hCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTQSxhQUFhLGNBQXFEO0FBQ2hFLFVBQU0sV0FBVyxLQUFLLE9BQU8sU0FBUyxXQUFXO0FBQUEsTUFDL0MsQ0FBQyxNQUFNLEVBQUUsT0FBTyxnQkFBZ0IsRUFBRSxXQUFXLEVBQUU7QUFBQSxJQUNqRDtBQUNBLFFBQUksQ0FBQztBQUFVLGFBQU87QUFDdEIsV0FBTyxFQUFFLFlBQVksU0FBUyxrQkFBbUI7QUFBQSxFQUNuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFPQSxNQUFNLG1CQUFtQixjQUE4QztBQUVyRSxRQUFJLEtBQUssY0FBYyxJQUFJLFlBQVksR0FBRztBQUN4QyxhQUFPLEtBQUssY0FBYyxJQUFJLFlBQVk7QUFBQSxJQUM1QztBQUdBLFFBQUksZUFBZTtBQUNuQixRQUFJLENBQUMsYUFBYSxTQUFTLEtBQUssS0FBSyxDQUFDLGFBQWEsU0FBUyxLQUFLLEdBQUc7QUFDbEUsc0JBQWdCO0FBQUEsSUFDbEI7QUFFQSxVQUFNLE9BQU8sS0FBSyxJQUFJLE1BQU0sc0JBQXNCLFlBQVk7QUFDOUQsUUFBSSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0IseUJBQVE7QUFDckMsYUFBTztBQUFBLElBQ1Q7QUFFQSxRQUFJO0FBQ0YsWUFBTSxTQUFTLE1BQU0sS0FBSyxJQUFJLE1BQU0sS0FBSyxJQUFJO0FBQzdDLFdBQUssY0FBYyxJQUFJLGNBQWMsTUFBTTtBQUMzQyxhQUFPO0FBQUEsSUFDVCxTQUFTLEtBQUs7QUFDWixjQUFRLE1BQU0sZ0RBQWdELFlBQVksS0FBSyxHQUFHO0FBQ2xGLGFBQU87QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBS0EsZ0JBQWdCLGNBQTZCO0FBQzNDLFFBQUksY0FBYztBQUNoQixXQUFLLGNBQWMsT0FBTyxZQUFZO0FBQUEsSUFDeEMsT0FBTztBQUNMLFdBQUssY0FBYyxNQUFNO0FBQUEsSUFDM0I7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9RLGFBQ04sTUFDQSxXQUNBLGFBQ2lCO0FBQ2pCLFVBQU0sTUFBTSxLQUFLO0FBQ2pCLFVBQU0sU0FBUyxLQUFLO0FBRXBCLFdBQU87QUFBQSxNQUNMO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUE7QUFBQSxNQUlBLGFBQWEsRUFBRSxHQUFHLFlBQVk7QUFBQSxNQUU5QixRQUFRLEtBQXVCO0FBQzdCLFlBQUksQ0FBQztBQUFLLGlCQUFPLEVBQUUsR0FBRyxZQUFZO0FBQ2xDLGVBQU8sWUFBWSxHQUFHO0FBQUEsTUFDeEI7QUFBQSxNQUVBLE1BQU0sUUFBUSxLQUFhLE9BQStCO0FBQ3hELGNBQU0sSUFBSSxZQUFZLG1CQUFtQixNQUFNLENBQUMsT0FBTztBQUNyRCxhQUFHLEdBQUcsSUFBSTtBQUFBLFFBQ1osQ0FBQztBQUVELG9CQUFZLEdBQUcsSUFBSTtBQUFBLE1BQ3JCO0FBQUEsTUFFQSxNQUFNLGdCQUFnQixNQUE4QztBQUNsRSxjQUFNLElBQUksWUFBWSxtQkFBbUIsTUFBTSxDQUFDLE9BQU87QUFDckQscUJBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxPQUFPLFFBQVEsSUFBSSxHQUFHO0FBQ3pDLGVBQUcsQ0FBQyxJQUFJO0FBQUEsVUFDVjtBQUFBLFFBQ0YsQ0FBQztBQUVELG1CQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssT0FBTyxRQUFRLElBQUksR0FBRztBQUN6QyxzQkFBWSxDQUFDLElBQUk7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQTtBQUFBLE1BSUEsTUFBTSxTQUFTLE1BQXNDO0FBQ25ELGNBQU0sSUFBSSxJQUFJLE1BQU0sc0JBQXNCLElBQUk7QUFDOUMsWUFBSSxDQUFDLEtBQUssRUFBRSxhQUFhO0FBQVEsaUJBQU87QUFDeEMsZUFBTyxJQUFJLE1BQU0sS0FBSyxDQUFDO0FBQUEsTUFDekI7QUFBQSxNQUVBLGlCQUFpQixZQUE2QjtBQUM1QyxlQUFPLElBQUksTUFBTSxpQkFBaUIsRUFBRTtBQUFBLFVBQ2xDLENBQUMsTUFBTSxFQUFFLEtBQUssV0FBVyxXQUFXLFNBQVMsR0FBRyxJQUFJLGFBQWEsYUFBYSxHQUFHO0FBQUEsUUFDbkY7QUFBQSxNQUNGO0FBQUEsTUFFQSxnQkFBZ0IsTUFBOEM7QUFDNUQsY0FBTSxJQUFJLElBQUksTUFBTSxzQkFBc0IsSUFBSTtBQUM5QyxZQUFJLENBQUMsS0FBSyxFQUFFLGFBQWE7QUFBUSxpQkFBTztBQUN4QyxjQUFNLFFBQVEsSUFBSSxjQUFjLGFBQWEsQ0FBQztBQUM5QyxlQUFRLE9BQU8sZUFBMkM7QUFBQSxNQUM1RDtBQUFBO0FBQUEsTUFJQSxPQUFPLFNBQWlCLFNBQXdCO0FBQzlDLFlBQUksd0JBQU8sU0FBUyxPQUFPO0FBQUEsTUFDN0I7QUFBQSxNQUVBLFFBQVEsT0FBTztBQUFBLE1BRWYsU0FDRSxLQUNBLE9BQzBCO0FBQzFCLGNBQU0sS0FBSyxTQUFTLGNBQWMsR0FBRztBQUNyQyxZQUFJLE9BQU87QUFDVCxxQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLE9BQU8sUUFBUSxLQUFLLEdBQUc7QUFDMUMsZ0JBQUksTUFBTSxRQUFRO0FBQ2hCLGlCQUFHLGNBQWM7QUFBQSxZQUNuQixXQUFXLE1BQU0sUUFBUTtBQUN2QixpQkFBRyxZQUFZO0FBQUEsWUFDakIsV0FBVyxNQUFNLFNBQVMsTUFBTSxTQUFTO0FBQ3ZDLGlCQUFHLFlBQVk7QUFBQSxZQUNqQixXQUFXLE1BQU0sU0FBUztBQUN4QixpQkFBRyxNQUFNLFVBQVU7QUFBQSxZQUNyQixPQUFPO0FBQ0wsaUJBQUcsYUFBYSxHQUFHLENBQUM7QUFBQSxZQUN0QjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQ0EsZUFBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVFBLE1BQU0sT0FDSixZQUNBLE1BQ0EsV0FDa0I7QUFFbEIsUUFBSSxTQUF3QixrQkFBa0IsVUFBVSxLQUFLO0FBRTdELFFBQUksQ0FBQyxRQUFRO0FBRVgsZUFBUyxNQUFNLEtBQUssbUJBQW1CLFVBQVU7QUFBQSxJQUNuRDtBQUVBLFFBQUksQ0FBQyxRQUFRO0FBQ1gsV0FBSztBQUFBLFFBQ0g7QUFBQSxRQUNBLHVCQUF1QixVQUFVO0FBQUEsUUFDakM7QUFBQSxNQUNGO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFHQSxVQUFNLFFBQVEsS0FBSyxJQUFJLGNBQWMsYUFBYSxJQUFJO0FBQ3RELFVBQU0sY0FBZSxPQUFPLGVBQTJDLENBQUM7QUFHeEUsVUFBTSxNQUFNLEtBQUssYUFBYSxNQUFNLFdBQVcsV0FBVztBQUcxRCxRQUFJO0FBR0YsWUFBTSxLQUFLLElBQUksU0FBUyxPQUFPLE1BQU07QUFDckMsWUFBTSxTQUFTLEdBQUcsR0FBRztBQUdyQixVQUFJLFVBQVUsT0FBTyxPQUFPLFNBQVMsWUFBWTtBQUMvQyxjQUFNO0FBQUEsTUFDUjtBQUVBLGFBQU87QUFBQSxJQUNULFNBQVMsS0FBSztBQUNaLGNBQVEsTUFBTSxpREFBaUQsVUFBVSxLQUFLLEdBQUc7QUFDakYsV0FBSztBQUFBLFFBQ0g7QUFBQSxRQUNBLG1CQUFvQixJQUFjLE9BQU87QUFBQSxRQUN6QyxnQkFBZ0IsVUFBVTtBQUFBLE1BQzVCO0FBQ0EsYUFBTztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFLUSxZQUFZLFdBQXdCLE9BQWUsTUFBb0I7QUFDN0UsY0FBVSxNQUFNO0FBQ2hCLFVBQU0sV0FBVyxVQUFVLFVBQVUsRUFBRSxLQUFLLHNCQUFzQixDQUFDO0FBQ25FLGFBQVMsU0FBUyxPQUFPLEVBQUUsS0FBSyw2QkFBNkIsTUFBTSxNQUFNLENBQUM7QUFDMUUsYUFBUyxTQUFTLE9BQU8sRUFBRSxLQUFLLDRCQUE0QixNQUFNLEtBQUssQ0FBQztBQUFBLEVBQzFFO0FBQ0Y7OztBcEJoU0EsSUFBcUIsYUFBckIsY0FBd0Msd0JBQU87QUFBQSxFQUk3QyxNQUFNLFNBQXdCO0FBRTVCLFNBQUssV0FBVyxPQUFPO0FBQUEsTUFDckIsQ0FBQztBQUFBLE1BQ0Q7QUFBQSxNQUNBLE1BQU0sS0FBSyxTQUFTO0FBQUEsSUFDdEI7QUFHQSxTQUFLLFNBQVMsWUFBWSxPQUFPO0FBQUEsTUFDL0IsQ0FBQztBQUFBLE1BQ0Qsc0JBQXNCO0FBQUEsTUFDdEIsS0FBSyxTQUFTO0FBQUEsSUFDaEI7QUFDQSxTQUFLLFNBQVMsVUFBVSxTQUFTLE9BQU87QUFBQSxNQUN0QyxDQUFDO0FBQUEsTUFDRCxzQkFBc0IsVUFBVTtBQUFBLE1BQ2hDLEtBQUssU0FBUyxVQUFVO0FBQUEsSUFDMUI7QUFDQSxTQUFLLFNBQVMsaUJBQWlCLE9BQU87QUFBQSxNQUNwQyxDQUFDO0FBQUEsTUFDRCxzQkFBc0I7QUFBQSxNQUN0QixLQUFLLFNBQVM7QUFBQSxJQUNoQjtBQUNBLFNBQUssU0FBUyxhQUFhLE9BQU87QUFBQSxNQUNoQyxDQUFDO0FBQUEsTUFDRCxzQkFBc0I7QUFBQSxNQUN0QixLQUFLLFNBQVM7QUFBQSxJQUNoQjtBQUNBLFNBQUssU0FBUyxXQUFXLE9BQU87QUFBQSxNQUM5QixDQUFDO0FBQUEsTUFDRDtBQUFBLE1BQ0EsS0FBSyxTQUFTO0FBQUEsSUFDaEI7QUFDQSxTQUFLLFNBQVMsZ0JBQWdCLE9BQU87QUFBQSxNQUNuQyxDQUFDO0FBQUEsTUFDRDtBQUFBLE1BQ0EsS0FBSyxTQUFTO0FBQUEsSUFDaEI7QUFHQSxVQUFNLEtBQUssMEJBQTBCO0FBR3JDLFNBQUssaUJBQWlCLElBQUksZUFBZSxLQUFLLEtBQUssSUFBSTtBQUd2RCxRQUFJLENBQUMsS0FBSyxTQUFTLFVBQVU7QUFDM0IsWUFBTSxLQUFLLDBCQUEwQjtBQUFBLElBQ3ZDO0FBR0EsU0FBSztBQUFBLE1BQ0g7QUFBQSxNQUNBLENBQUMsU0FBUyxJQUFJLGNBQWMsTUFBTSxJQUFJO0FBQUEsSUFDeEM7QUFHQSxTQUFLO0FBQUEsTUFDSDtBQUFBLE1BQ0EsQ0FBQyxTQUFTLElBQUksY0FBYyxNQUFNLElBQUk7QUFBQSxJQUN4QztBQUdBLFNBQUssY0FBYyxXQUFXLGFBQWEsTUFBTTtBQUMvQyxXQUFLLGtCQUFrQjtBQUFBLElBQ3pCLENBQUM7QUFHRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTSxLQUFLLGtCQUFrQjtBQUFBLElBQ3pDLENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTSxLQUFLLGlCQUFpQjtBQUFBLElBQ3hDLENBQUM7QUFFRCxTQUFLLFdBQVc7QUFBQSxNQUNkLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLFVBQVUsTUFBTSxLQUFLLG9CQUFvQjtBQUFBLElBQzNDLENBQUM7QUFHRCxTQUFLLDZCQUE2QjtBQUdsQyxVQUFNLGNBQVUsMkJBQVMsTUFBTTtBQUM3QixXQUFLLGlCQUFpQjtBQUFBLElBQ3hCLEdBQUcsR0FBRztBQUVOLFNBQUs7QUFBQSxNQUNILEtBQUssSUFBSSxjQUFjLEdBQUcsV0FBVyxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQ3REO0FBRUEsU0FBSztBQUFBLE1BQ0gsS0FBSyxJQUFJLE1BQU0sR0FBRyxVQUFVLE9BQU8sU0FBUztBQUMxQyxZQUFJLGdCQUFnQiwwQkFBUyxLQUFLLGNBQWMsTUFBTTtBQUVwRCxjQUFJLFdBQVc7QUFDZixpQkFBTyxXQUFXLElBQUk7QUFDcEIsa0JBQU0sUUFBUSxLQUFLLElBQUksY0FBYyxhQUFhLElBQUk7QUFDdEQsZ0JBQUksT0FBTyxhQUFhO0FBQ3RCLHNCQUFRO0FBQ1I7QUFBQSxZQUNGO0FBQ0Esa0JBQU1DLE9BQU0sR0FBRztBQUNmO0FBQUEsVUFDRjtBQUNBLGtCQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFFQSxTQUFLO0FBQUEsTUFDSCxLQUFLLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxTQUFTO0FBQ3BDLFlBQUksZ0JBQWdCLDBCQUFTLEtBQUssY0FBYyxNQUFNO0FBQ3BELGtCQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFHQSxTQUFLLGNBQWMsSUFBSSxlQUFlLEtBQUssS0FBSyxJQUFJLENBQUM7QUFHckQsU0FBSyw4QkFBOEI7QUFHbkMsU0FBSztBQUFBLE1BQ0gsS0FBSyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsU0FBUztBQUNwQyxZQUFJLGdCQUFnQiwwQkFBUyxLQUFLLGNBQWMsTUFBTTtBQUNwRCxlQUFLLGVBQWUsZ0JBQWdCLEtBQUssSUFBSTtBQUFBLFFBQy9DO0FBQUEsTUFDRixDQUFDO0FBQUEsSUFDSDtBQUFBLEVBQ0Y7QUFBQSxFQUVBLFdBQWlCO0FBQUEsRUFFakI7QUFBQTtBQUFBLEVBSUEsTUFBTSxvQkFBbUM7QUFDdkMsVUFBTSxFQUFFLFVBQVUsSUFBSSxLQUFLO0FBQzNCLFFBQUksT0FBTyxVQUFVLGdCQUFnQixjQUFjLEVBQUUsQ0FBQztBQUV0RCxRQUFJLENBQUMsTUFBTTtBQUNULFlBQU0sVUFBVSxVQUFVLFFBQVEsS0FBSztBQUN2QyxVQUFJLENBQUM7QUFBUztBQUNkLFlBQU0sUUFBUSxhQUFhLEVBQUUsTUFBTSxnQkFBZ0IsUUFBUSxLQUFLLENBQUM7QUFDakUsYUFBTztBQUFBLElBQ1Q7QUFFQSxVQUFNLFVBQVUsV0FBVyxJQUFJO0FBQUEsRUFDakM7QUFBQSxFQUVBLG1CQUF5QjtBQUN2QixVQUFNLFNBQVMsS0FBSyxJQUFJLFVBQVUsZ0JBQWdCLGNBQWM7QUFDaEUsZUFBVyxRQUFRLFFBQVE7QUFDekIsWUFBTSxPQUFPLEtBQUs7QUFDbEIsVUFBSSxRQUFRLE9BQU8sS0FBSyxXQUFXLFlBQVk7QUFDN0MsYUFBSyxPQUFPO0FBQUEsTUFDZDtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxNQUFNLHdCQUF1QztBQUMzQyxVQUFNLEVBQUUsVUFBVSxJQUFJLEtBQUs7QUFHM0IsY0FBVSxnQkFBZ0IsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLFNBQVMsS0FBSyxPQUFPLENBQUM7QUFHOUUsVUFBTSxhQUFhLFVBQVUsZ0JBQWdCLGNBQWM7QUFDM0QsVUFBTSxhQUFhLFdBQVcsQ0FBQyxLQUFLLFVBQVUsUUFBUSxLQUFLO0FBQzNELFFBQUksQ0FBQztBQUFZO0FBRWpCLFVBQU0sV0FBVyxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsUUFBUSxLQUFLLENBQUM7QUFDekUsVUFBTSxVQUFVLFdBQVcsVUFBVTtBQUFBLEVBQ3ZDO0FBQUEsRUFFQSx3QkFBOEI7QUFDNUIsU0FBSyxrQkFBa0I7QUFBQSxFQUN6QjtBQUFBO0FBQUEsRUFJUSxnQ0FBc0M7QUFHNUMsVUFBTSxnQkFBZ0Isb0JBQUksUUFBcUI7QUFFL0MsU0FBSyw4QkFBOEIsT0FBTyxJQUFJLFFBQVE7QUFFcEQsWUFBTSxPQUFPLEtBQUssSUFBSSxNQUFNLHNCQUFzQixJQUFJLFVBQVU7QUFDaEUsVUFBSSxDQUFDLFFBQVEsRUFBRSxnQkFBZ0I7QUFBUTtBQUd2QyxZQUFNLFFBQVEsS0FBSyxJQUFJLGNBQWMsYUFBYSxJQUFJO0FBQ3RELFlBQU0sZUFBZSxPQUFPLGFBQWE7QUFDekMsVUFBSSxDQUFDO0FBQWM7QUFHbkIsWUFBTSxRQUFRLEtBQUssZUFBZSxhQUFhLFlBQVk7QUFDM0QsVUFBSSxDQUFDO0FBQU87QUFHWixZQUFNLGVBQWUsR0FBRyxRQUFRLHlCQUF5QixLQUFLLEdBQUc7QUFDakUsVUFBSSxnQkFBZ0IsY0FBYyxJQUFJLFlBQTJCO0FBQUc7QUFDcEUsVUFBSTtBQUFjLHNCQUFjLElBQUksWUFBMkI7QUFHL0QsU0FBRyxNQUFNO0FBQ1QsU0FBRyxTQUFTLG9CQUFvQjtBQUVoQyxZQUFNLFlBQVksR0FBRyxVQUFVLEVBQUUsS0FBSyxxQkFBcUIsQ0FBQztBQUU1RCxZQUFNLEtBQUssZUFBZSxPQUFPLE1BQU0sWUFBWSxNQUFNLFNBQVM7QUFBQSxJQUNwRSxDQUFDO0FBR0QsU0FBSztBQUFBLE1BQ0gsS0FBSyxJQUFJLFVBQVUsR0FBRyxzQkFBc0IsT0FBTyxTQUFTO0FBQzFELFlBQUksQ0FBQztBQUFNO0FBQ1gsY0FBTSxPQUFPLEtBQUs7QUFDbEIsWUFBSSxFQUFFLGdCQUFnQjtBQUFlO0FBRXJDLGNBQU0sT0FBTyxLQUFLO0FBQ2xCLFlBQUksQ0FBQztBQUFNO0FBR1gsY0FBTUEsT0FBTSxHQUFHO0FBRWYsY0FBTSxRQUFRLEtBQUssSUFBSSxjQUFjLGFBQWEsSUFBSTtBQUN0RCxjQUFNLGVBQWUsT0FBTyxhQUFhO0FBQ3pDLFlBQUksQ0FBQztBQUFjO0FBRW5CLGNBQU0sUUFBUSxLQUFLLGVBQWUsYUFBYSxZQUFZO0FBQzNELFlBQUksQ0FBQztBQUFPO0FBR1osY0FBTSxZQUFZLEtBQUssWUFBWSxjQUFjLGdEQUFnRDtBQUNqRyxZQUFJLFdBQVcsY0FBYyxxQkFBcUI7QUFBRztBQUlyRCxZQUFJLFdBQVc7QUFDYixnQkFBTSxZQUFZLFNBQVMsY0FBYyxLQUFLO0FBQzlDLG9CQUFVLFlBQVk7QUFDdEIsb0JBQVUsWUFBWSxTQUFTO0FBRS9CLGdCQUFNLEtBQUssZUFBZSxPQUFPLE1BQU0sWUFBWSxNQUFNLFNBQVM7QUFBQSxRQUNwRTtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUlRLCtCQUFxQztBQUczQyxJQUFDLEtBQUssSUFBSSxVQUFrQixHQUFHLGlCQUFpQixDQUFDLFlBQW1CO0FBQ2xFLFVBQUksQ0FBQyxNQUFNLFFBQVEsT0FBTztBQUFHO0FBRTdCLGNBQVEsS0FBSztBQUFBLFFBQ1gsa0JBQWtCLENBQUMsU0FBYztBQUMvQixnQkFBTSxVQUFVLEtBQUssU0FBUyxZQUFZLEtBQUs7QUFDL0MsY0FBSSxDQUFDO0FBQVMsbUJBQU8sQ0FBQztBQUd0QixjQUFJLGNBQWM7QUFDbEIsZ0JBQU0sYUFBYSxvQkFBSSxJQUFZO0FBQ25DLHFCQUFXLFlBQVksS0FBSyxTQUFTLFlBQVk7QUFDL0MsZ0JBQUksQ0FBQyxTQUFTO0FBQVM7QUFDdkIsa0JBQU0sU0FBUyxTQUFTO0FBQ3hCLGtCQUFNLG1CQUFtQixPQUFPLFNBQVMsR0FBRyxJQUFJLFNBQVMsU0FBUztBQUNsRSxrQkFBTSxRQUFRLEtBQUssSUFBSSxNQUFNLGlCQUFpQjtBQUM5QyxrQkFBTSxPQUFPLE1BQU07QUFBQSxjQUNqQixDQUFDLE9BQU8sRUFBRSxTQUFTLFVBQVUsRUFBRSxLQUFLLFdBQVcsZ0JBQWdCLE1BQU0sRUFBRSxhQUFhO0FBQUEsWUFDdEY7QUFDQSxnQkFBSSxNQUFNO0FBQ1Isb0JBQU0sUUFBUSxLQUFLLElBQUksY0FBYyxhQUFhLElBQUk7QUFDdEQsa0JBQUksT0FBTyxjQUFjLFNBQVMsUUFBUSxNQUFNLE1BQU07QUFDcEQ7QUFDQSwyQkFBVyxJQUFJLFNBQVMsUUFBUTtBQUFBLGNBQ2xDO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFFQSxjQUFJLGdCQUFnQjtBQUFHLG1CQUFPLENBQUM7QUFHL0IsZ0JBQU0sT0FBTyxDQUFDO0FBQ2QscUJBQVcsT0FBTyxZQUFZO0FBQzVCLGlCQUFLLEtBQUs7QUFBQSxjQUNSLE9BQU8sS0FBSyxTQUFTLGVBQWUsR0FBZ0QsS0FBSztBQUFBLGNBQ3pGLFdBQVcsZ0JBQWdCLEdBQUc7QUFBQSxZQUNoQyxDQUFDO0FBQUEsVUFDSDtBQUVBLGlCQUFPO0FBQUEsWUFDTDtBQUFBLFlBQ0EsU0FBUyxlQUFlLEtBQUssU0FBUyxXQUFXLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLFNBQ3RFLHNCQUNBO0FBQUEsVUFDTjtBQUFBLFFBQ0Y7QUFBQSxRQUVBLG1CQUFtQixPQUFPLENBQUM7QUFBQSxNQUM3QixDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQUEsRUFDSDtBQUFBO0FBQUEsRUFJUSxzQkFBNEI7QUFDbEMsVUFBTSxRQUFRLFNBQVMsY0FBYyxLQUFLO0FBQzFDLFVBQU0sWUFBWTtBQUNsQixVQUFNLFlBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0JsQixhQUFTLEtBQUssWUFBWSxLQUFLO0FBRS9CLFVBQU0sV0FBVyxNQUFNLGNBQWMsMkJBQTJCO0FBQ2hFLFVBQU0sWUFBWSxNQUFNLGNBQWMseUJBQXlCO0FBQy9ELFVBQU0sU0FBUyxNQUFNLGNBQWMsc0JBQXNCO0FBQ3pELFVBQU0sYUFBYSxNQUFNLGNBQWMsd0JBQXdCO0FBQy9ELFVBQU0sWUFBWSxNQUFNLGNBQWMsdUJBQXVCO0FBQzdELFVBQU0sZ0JBQWdCLE1BQU0sY0FBYywyQkFBMkI7QUFFckUsVUFBTSxRQUFRLE1BQU0sTUFBTSxPQUFPO0FBRWpDLGFBQVMsaUJBQWlCLFNBQVMsS0FBSztBQUN4QyxjQUFVLGlCQUFpQixTQUFTLEtBQUs7QUFFekMsV0FBTyxpQkFBaUIsU0FBUyxZQUFZO0FBQzNDLFlBQU0sUUFBUSxXQUFXLE1BQU0sS0FBSztBQUNwQyxVQUFJLENBQUMsT0FBTztBQUNWLFlBQUksd0JBQU8sMEJBQTBCO0FBQ3JDO0FBQUEsTUFDRjtBQUVBLFlBQU0sTUFBTSxLQUFLLFNBQVMsZ0JBQ3RCLElBQUksS0FBSyxLQUFLLFNBQVMsYUFBYSxJQUNwQyxvQkFBSSxLQUFLO0FBQ2IsWUFBTSxRQUFRLElBQUksWUFBWSxFQUFFLE1BQU0sR0FBRyxFQUFFO0FBRTNDLFdBQUssU0FBUyxTQUFTLFdBQVcsS0FBSztBQUFBLFFBQ3JDLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQztBQUFBLFFBQ3BCO0FBQUEsUUFDQSxNQUFNO0FBQUEsUUFDTixNQUFNLFVBQVUsU0FBUztBQUFBLFFBQ3pCLFVBQVUsU0FBUyxjQUFjLEtBQUssS0FBSztBQUFBLFFBQzNDLE1BQU07QUFBQSxNQUNSLENBQUM7QUFFRCxZQUFNLEtBQUssYUFBYTtBQUN4QixXQUFLLGlCQUFpQjtBQUN0QixVQUFJLHdCQUFPLDRCQUE0QixLQUFLLEVBQUU7QUFDOUMsWUFBTTtBQUFBLElBQ1IsQ0FBQztBQUdELGVBQVcsTUFBTSxXQUFXLE1BQU0sR0FBRyxFQUFFO0FBQUEsRUFDekM7QUFBQTtBQUFBLEVBSUEsTUFBTSxlQUE4QjtBQUNsQyxVQUFNLEtBQUssU0FBUyxLQUFLLFFBQVE7QUFBQSxFQUNuQztBQUFBO0FBQUEsRUFJQSxNQUFjLDRCQUEyQztBQUN2RCxRQUFJO0FBQ0YsWUFBTSxXQUFXO0FBQ2pCLFlBQU0sU0FBUyxNQUFNLEtBQUssSUFBSSxNQUFNLFFBQVEsT0FBTyxRQUFRO0FBRTNELFVBQUksQ0FBQyxRQUFRO0FBQ1gsYUFBSyxTQUFTLFdBQVc7QUFDekIsY0FBTSxLQUFLLGFBQWE7QUFDeEI7QUFBQSxNQUNGO0FBRUEsWUFBTSxNQUFNLE1BQU0sS0FBSyxJQUFJLE1BQU0sUUFBUSxLQUFLLFFBQVE7QUFDdEQsWUFBTSxPQUEyQixLQUFLLE1BQU0sR0FBRztBQUcvQyxXQUFLLFNBQVMsY0FBYyxLQUFLLGVBQWU7QUFDaEQsV0FBSyxTQUFTLFlBQVksS0FBSyxhQUFhO0FBQzVDLFdBQUssU0FBUyxnQkFBZ0IsS0FBSyxpQkFBaUI7QUFDcEQsV0FBSyxTQUFTLDBCQUEwQixLQUFLLDJCQUEyQjtBQUN4RSxXQUFLLFNBQVMsYUFBYSxLQUFLLGNBQWM7QUFDOUMsV0FBSyxTQUFTLHVCQUF1QixLQUFLLHdCQUF3QixDQUFDO0FBQ25FLFdBQUssU0FBUyxvQkFBb0IsS0FBSyxxQkFBcUI7QUFDNUQsV0FBSyxTQUFTLHNCQUFzQixLQUFLLHVCQUF1QjtBQUdoRSxVQUFJLEtBQUssZUFBZSxLQUFLLFlBQVksU0FBUyxHQUFHO0FBQ25ELGFBQUssU0FBUyxjQUFjLEtBQUs7QUFBQSxNQUNuQztBQUdBLFdBQUssU0FBUyxpQkFBaUIsS0FBSyxrQkFBa0IsQ0FBQztBQUN2RCxXQUFLLFNBQVMsaUJBQWtCLEtBQUssa0JBQWtCLENBQUM7QUFDeEQsV0FBSyxTQUFTLGdCQUFnQixLQUFLLGlCQUFpQixDQUFDO0FBR3JELFdBQUssU0FBUyxjQUFlLEtBQUssZUFBdUM7QUFDekUsV0FBSyxTQUFTLGlCQUFpQixLQUFLLGtCQUFrQjtBQUN0RCxXQUFLLFNBQVMsa0JBQWtCLEtBQUssbUJBQW1CO0FBQ3hELFdBQUssU0FBUyxnQkFBZ0IsS0FBSyxpQkFBaUI7QUFHcEQsVUFBSSxLQUFLLGtCQUFrQjtBQUN6QixhQUFLLFNBQVMsaUJBQWlCLEtBQUs7QUFBQSxNQUN0QztBQUdBLFdBQUssU0FBUyxhQUFhLEtBQUssa0JBQWtCLElBQUk7QUFFdEQsV0FBSyxTQUFTLFdBQVc7QUFDekIsWUFBTSxLQUFLLGFBQWE7QUFFeEIsVUFBSSx3QkFBTyxrRUFBa0U7QUFBQSxJQUMvRSxTQUFTLEtBQUs7QUFDWixjQUFRLE1BQU0seUJBQXlCLEdBQUc7QUFDMUMsV0FBSyxTQUFTLFdBQVc7QUFDekIsWUFBTSxLQUFLLGFBQWE7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFBQSxFQUVRLGtCQUFrQixNQUE0QztBQUNwRSxVQUFNLFNBQTJCLENBQUMsR0FBRyxrQkFBa0I7QUFHdkQsUUFBSSxLQUFLLG1CQUFtQjtBQUMxQixpQkFBVyxZQUFZLFFBQVE7QUFDN0IsY0FBTSxNQUFNLFNBQVMsU0FBUyxZQUFZO0FBQzFDLFlBQUksT0FBTyxLQUFLLG1CQUFtQjtBQUNqQyxtQkFBUyxVQUFVLEtBQUssa0JBQWtCLEdBQUcsS0FBSztBQUFBLFFBQ3BEO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFHQSxRQUFJLEtBQUssbUJBQW1CO0FBQzFCLGlCQUFXLFlBQVksS0FBSyxtQkFBbUI7QUFDN0MsY0FBTSxXQUFXLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLFNBQVMsRUFBRTtBQUN4RCxZQUFJLFVBQVU7QUFDWixjQUFJLFNBQVMsaUJBQWlCO0FBQVcscUJBQVMsZUFBZSxTQUFTO0FBQzFFLGNBQUksU0FBUyx3QkFBd0I7QUFBVyxxQkFBUyxzQkFBc0IsU0FBUztBQUFBLFFBQzFGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFHQSxRQUFJLEtBQUssY0FBYztBQUNyQixpQkFBVyxTQUFTLEtBQUssY0FBYztBQUVyQyxZQUFJLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLE1BQU0sRUFBRTtBQUFHO0FBRTNDLGVBQU8sS0FBSztBQUFBLFVBQ1YsSUFBSSxNQUFNO0FBQUEsVUFDVixNQUFNLE1BQU07QUFBQSxVQUNaLE9BQU8sTUFBTSxTQUFTO0FBQUEsVUFDdEIsVUFBVTtBQUFBO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxRQUFRLE1BQU07QUFBQSxVQUNkLFVBQVUsTUFBTTtBQUFBLFVBQ2hCLHFCQUFxQixNQUFNLHVCQUF1QjtBQUFBLFVBQ2xELGNBQWMsTUFBTSxnQkFBZ0I7QUFBQSxVQUNwQyxjQUFjO0FBQUEsVUFDZCxjQUFjO0FBQUEsVUFDZCxVQUFVO0FBQUEsVUFDVixrQkFBa0I7QUFBQSxVQUNsQixlQUFlO0FBQUEsVUFDZixtQkFBbUI7QUFBQSxRQUNyQixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU9BLE1BQWMsNEJBQTJDO0FBQ3ZELFVBQU0sTUFBTSxLQUFLO0FBQ2pCLFFBQUksVUFBVTtBQUdkLFFBQUksSUFBSSwyQkFBMkIsQ0FBQyxJQUFJLDJCQUEyQjtBQUNqRSxVQUFJLDRCQUE0QixJQUFJO0FBQ3BDLGFBQU8sSUFBSTtBQUNYLGdCQUFVO0FBQUEsSUFDWjtBQUNBLFFBQUksSUFBSSxrQkFBa0IsVUFBYSxJQUFJLG9CQUFvQixRQUFXO0FBQ3hFLFVBQUksa0JBQWtCLElBQUk7QUFDMUIsYUFBTyxJQUFJO0FBQ1gsZ0JBQVU7QUFBQSxJQUNaO0FBR0EsZUFBVyxZQUFZLEtBQUssU0FBUyxZQUFZO0FBQy9DLFlBQU0sSUFBSTtBQUNWLFVBQUksRUFBRSxlQUFlLFVBQWEsRUFBRSxpQkFBaUIsUUFBVztBQUM5RCxVQUFFLGVBQWUsRUFBRTtBQUNuQixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFFQSxVQUFJLEVBQUUsa0JBQWtCLFFBQVc7QUFDakMsWUFBSSxDQUFDLEVBQUU7QUFBUSxZQUFFLFNBQVMsRUFBRTtBQUM1QixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFDQSxVQUFJLEVBQUUsb0JBQW9CLFFBQVc7QUFDbkMsWUFBSSxDQUFDLEVBQUU7QUFBUSxZQUFFLFNBQVMsRUFBRTtBQUM1QixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBR0EsUUFBSSxLQUFLLFNBQVMsaUJBQWlCO0FBQ2pDLFlBQU0sS0FBSyxLQUFLLFNBQVM7QUFDekIsVUFBSSxHQUFHLGVBQWUsVUFBYSxHQUFHLGlCQUFpQixRQUFXO0FBQ2hFLFdBQUcsZUFBZSxHQUFHO0FBQ3JCLGVBQU8sR0FBRztBQUNWLGtCQUFVO0FBQUEsTUFDWjtBQUVBLGFBQU8sR0FBRztBQUNWLGFBQU8sR0FBRztBQUFBLElBQ1o7QUFHQSxRQUFJLElBQUksb0JBQW9CLE1BQU0sUUFBUSxJQUFJLGdCQUFnQixLQUFLLElBQUksaUJBQWlCLFNBQVMsR0FBRztBQUNsRyxpQkFBVyxTQUFTLElBQUksa0JBQWtCO0FBQ3hDLFlBQUksQ0FBQyxNQUFNLFdBQVcsQ0FBQyxNQUFNO0FBQWM7QUFDM0MsY0FBTSxXQUFXLEtBQUssU0FBUyxXQUFXLEtBQUssQ0FBQyxNQUFXLEVBQUUsT0FBTyxNQUFNLFlBQVk7QUFDdEYsWUFBSSxZQUFZLENBQUMsU0FBUyxtQkFBbUI7QUFDM0MsbUJBQVMsb0JBQW9CLE1BQU07QUFDbkMsb0JBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUNBLGFBQU8sSUFBSTtBQUNYLGdCQUFVO0FBQUEsSUFDWjtBQUVBLFFBQUksU0FBUztBQUNYLFlBQU0sS0FBSyxhQUFhO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxTQUFTQSxPQUFNLElBQTJCO0FBQ3hDLFNBQU8sSUFBSSxRQUFRLENBQUMsWUFBWSxXQUFXLFNBQVMsRUFBRSxDQUFDO0FBQ3pEOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgIm5lZ2xlY3RlZCIsICJnZXRDYXRlZ29yeUNvbG9yIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgInNsZWVwIl0KfQo=
