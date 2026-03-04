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
    "heatmap",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvU3RyZW5ndGhIZWF0bWFwLnRzIiwgInNyYy9jb21wb25lbnRzL1dlaWdodFByb2dyZXNzLnRzIiwgInNyYy92aWV3cy9Xb3Jrc3BhY2VWaWV3LnRzIiwgInNyYy9zZXR0aW5ncy9PbGVuU2V0dGluZ3MudHMiLCAic3JjL3RlbXBsYXRlcy9UZW1wbGF0ZUVuZ2luZS50cyIsICJzcmMvdGVtcGxhdGVzL2J1aWx0aW5zL3dvcmtvdXQudHBsIiwgInNyYy90ZW1wbGF0ZXMvYnVpbHRpbnMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgUGx1Z2luIEVudHJ5IFBvaW50XG4vLyBSZWdpc3RlcnMgdmlld3MsIGNvbW1hbmRzLCByaWJib24gaWNvbiwgc2V0dGluZ3MgbWlncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgUGx1Z2luLCBkZWJvdW5jZSwgVEZpbGUsIE5vdGljZSwgTWFya2Rvd25WaWV3IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgVHJhY2tIYWJpdFJhbmtEYXRhLCBBY3Rpdml0eUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiwgVklFV19UWVBFX1dPUktTUEFDRSwgREVGQVVMVF9PTEVOX1NFVFRJTkdTLCBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsIERFRkFVTFRfUEVSU09OQUxfU1RBVFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERhc2hib2FyZFZpZXcgfSBmcm9tIFwiLi92aWV3cy9EYXNoYm9hcmRWaWV3XCI7XG5pbXBvcnQgeyBXb3Jrc3BhY2VWaWV3IH0gZnJvbSBcIi4vdmlld3MvV29ya3NwYWNlVmlld1wiO1xuaW1wb3J0IHsgT2xlblNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy9PbGVuU2V0dGluZ3NcIjtcbmltcG9ydCB7IFRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4vdGVtcGxhdGVzL1RlbXBsYXRlRW5naW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9sZW5QbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5ncyE6IE9sZW5TZXR0aW5ncztcbiAgdGVtcGxhdGVFbmdpbmUhOiBUZW1wbGF0ZUVuZ2luZTtcblxuICBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTG9hZCBzZXR0aW5ncyB3aXRoIGRlZmF1bHRzXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUyxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgICk7XG5cbiAgICAvLyBFbnN1cmUgZGVlcCBkZWZhdWx0cyBmb3IgbmVzdGVkIG9iamVjdHNcbiAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5kZXZDb25maWcsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZ1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcubGFiZWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmRldkNvbmZpZy5sYWJlbHMsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlDb2xvcnMsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFAgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlYUCxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUFxuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYWxlbmRhciA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX1BFUlNPTkFMX1NUQVRTLFxuICAgICAgdGhpcy5zZXR0aW5ncy5wZXJzb25hbFN0YXRzXG4gICAgKTtcblxuICAgIC8vIE1pZ3JhdGUgbGVnYWN5IGZpZWxkIG5hbWVzIGZyb20gc2Vzc2lvbiBcdTIxOTIgd29ya3NwYWNlXG4gICAgYXdhaXQgdGhpcy5taWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIFRlbXBsYXRlIEVuZ2luZVxuICAgIHRoaXMudGVtcGxhdGVFbmdpbmUgPSBuZXcgVGVtcGxhdGVFbmdpbmUodGhpcy5hcHAsIHRoaXMpO1xuXG4gICAgLy8gTWlncmF0ZSBmcm9tIFRyYWNrSGFiaXRSYW5rIG9uIGZpcnN0IHJ1blxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5taWdyYXRlZCkge1xuICAgICAgYXdhaXQgdGhpcy5taWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgbWFpbiBkYXNoYm9hcmQgdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX09MRU4sXG4gICAgICAobGVhZikgPT4gbmV3IERhc2hib2FyZFZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmVnaXN0ZXIgd29ya3NwYWNlIHZpZXdcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhcbiAgICAgIFZJRVdfVFlQRV9XT1JLU1BBQ0UsXG4gICAgICAobGVhZikgPT4gbmV3IFdvcmtzcGFjZVZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmliYm9uIGljb25cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oXCJjb21wYXNzXCIsIFwiT3BlbiBPbGVuXCIsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmRzXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcIm9wZW4tb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiT3BlbiBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJyZWZyZXNoLW9sZW4tZGFzaGJvYXJkXCIsXG4gICAgICBuYW1lOiBcIlJlZnJlc2ggT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJhZGQtcXVpY2stdGFza1wiLFxuICAgICAgbmFtZTogXCJBZGQgUXVpY2sgVGFza1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvd1F1aWNrVGFza0RpYWxvZygpLFxuICAgIH0pO1xuXG4gICAgLy8gQ2FsZW5kYXIgcGx1Z2luIGludGVncmF0aW9uIFx1MjAxNCBpbmplY3QgT2xlbiBtZXRhZGF0YSBpbnRvIENhbGVuZGFyIHBsdWdpblxuICAgIHRoaXMucmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpO1xuXG4gICAgLy8gRGVib3VuY2VkIGZpbGUgd2F0Y2hlciBmb3IgbWV0YWRhdGEgY2hhbmdlc1xuICAgIGNvbnN0IHJlZnJlc2ggPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICB9LCAzMDApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKCkgPT4gcmVmcmVzaCgpKVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcImNyZWF0ZVwiLCBhc3luYyAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSB0byBiZSBpbmRleGVkXG4gICAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCAxNSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcInJlbmFtZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2xlblNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogRnJvbnRtYXR0ZXItZHJpdmVuIHJlbmRlcmluZyAtLS1cbiAgICB0aGlzLnJlZ2lzdGVyVGVtcGxhdGVQb3N0UHJvY2Vzc29yKCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIHRlbXBsYXRlIGNhY2hlIHdoZW4gdGVtcGxhdGUgLmpzIGZpbGVzIGFyZSBtb2RpZmllZFxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwibW9kaWZ5XCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwianNcIikge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKGZpbGUucGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIC8vIENsZWFudXAgaGFuZGxlZCBieSBEYXNoYm9hcmRWaWV3Lm9uQ2xvc2UoKVxuICB9XG5cbiAgLy8gLS0tIFZpZXcgTWFuYWdlbWVudCAtLS1cblxuICBhc3luYyBhY3RpdmF0ZURhc2hib2FyZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG4gICAgbGV0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKVswXTtcblxuICAgIGlmICghbGVhZikge1xuICAgICAgY29uc3QgbmV3TGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgICAgaWYgKCFuZXdMZWFmKSByZXR1cm47XG4gICAgICBhd2FpdCBuZXdMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9PTEVOLCBhY3RpdmU6IHRydWUgfSk7XG4gICAgICBsZWFmID0gbmV3TGVhZjtcbiAgICB9XG5cbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIHJlZnJlc2hEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldyBhcyB1bmtub3duIGFzIERhc2hib2FyZFZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlV29ya3NwYWNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG5cbiAgICAvLyBDbG9zZSBleGlzdGluZyB3b3Jrc3BhY2Ugdmlld3NcbiAgICB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9XT1JLU1BBQ0UpLmZvckVhY2goKGxlYWYpID0+IGxlYWYuZGV0YWNoKCkpO1xuXG4gICAgLy8gT3BlbiB3b3Jrc3BhY2UgaW4gdGhlIHNhbWUgdGFiIGFzIHRoZSBkYXNoYm9hcmQgaWYgcG9zc2libGVcbiAgICBjb25zdCBkYXNoTGVhdmVzID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgY29uc3QgdGFyZ2V0TGVhZiA9IGRhc2hMZWF2ZXNbMF0gPz8gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgaWYgKCF0YXJnZXRMZWFmKSByZXR1cm47XG5cbiAgICBhd2FpdCB0YXJnZXRMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZih0YXJnZXRMZWFmKTtcbiAgfVxuXG4gIGFjdGl2YXRlRGFzaGJvYXJkVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlRGFzaGJvYXJkKCk7XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgUmVnaXN0cnk6IFBvc3QtUHJvY2Vzc29yIC0tLVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJUZW1wbGF0ZVBvc3RQcm9jZXNzb3IoKTogdm9pZCB7XG4gICAgLy8gVHJhY2sgd2hpY2ggZmlsZXMgd2UndmUgYWxyZWFkeSByZW5kZXJlZCB0ZW1wbGF0ZXMgZm9yIGluIHRoZSBjdXJyZW50XG4gICAgLy8gdmlldyBjeWNsZSwgdG8gYXZvaWQgZHVwbGljYXRlIHJlbmRlcmluZyBhY3Jvc3MgbXVsdGlwbGUgc2VjdGlvbnMuXG4gICAgY29uc3QgcmVuZGVyZWRGaWxlcyA9IG5ldyBXZWFrU2V0PEhUTUxFbGVtZW50PigpO1xuXG4gICAgdGhpcy5yZWdpc3Rlck1hcmtkb3duUG9zdFByb2Nlc3Nvcihhc3luYyAoZWwsIGN0eCkgPT4ge1xuICAgICAgLy8gRmluZCB0aGUgZmlsZSBiZWluZyByZW5kZXJlZFxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdHguc291cmNlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIC8vIENoZWNrIGZyb250bWF0dGVyIGZvciBhbiBcImFjdGl2aXR5XCIgZmllbGRcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBjb25zdCBhY3Rpdml0eVR5cGUgPSBjYWNoZT8uZnJvbnRtYXR0ZXI/LmFjdGl2aXR5IGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgIC8vIExvb2sgdXAgdGVtcGxhdGUgaW4gdGhlIHJlZ2lzdHJ5XG4gICAgICBjb25zdCBlbnRyeSA9IHRoaXMudGVtcGxhdGVFbmdpbmUuZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZSk7XG4gICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZSByZW5kZXJpbmc6IGNoZWNrIHRoZSBwYXJlbnQgcHJldmlldyBjb250YWluZXJcbiAgICAgIGNvbnN0IHByZXZpZXdTaXplciA9IGVsLmNsb3Nlc3QoXCIubWFya2Rvd24tcHJldmlldy1zaXplclwiKSA/PyBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHByZXZpZXdTaXplciAmJiByZW5kZXJlZEZpbGVzLmhhcyhwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpKSByZXR1cm47XG4gICAgICBpZiAocHJldmlld1NpemVyKSByZW5kZXJlZEZpbGVzLmFkZChwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgICAvLyBDbGVhciBkZWZhdWx0IHJlbmRlcmVkIGNvbnRlbnQgYW5kIGluamVjdCB0ZW1wbGF0ZVxuICAgICAgZWwuZW1wdHkoKTtcbiAgICAgIGVsLmFkZENsYXNzKFwib2xlbi10ZW1wbGF0ZS1ob3N0XCIpO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBlbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1yb290XCIgfSk7XG5cbiAgICAgIGF3YWl0IHRoaXMudGVtcGxhdGVFbmdpbmUucmVuZGVyKGVudHJ5LnRlbXBsYXRlSWQsIGZpbGUsIGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvLyBBbHNvIGhhbmRsZSBmaWxlLW9wZW4gZm9yIG5vdGVzIHdpdGggb25seSBmcm9udG1hdHRlciAobm8gYm9keSBzZWN0aW9ucylcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgYXN5bmMgKGxlYWYpID0+IHtcbiAgICAgICAgaWYgKCFsZWFmKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICAgIGlmICghKHZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmlsZSA9IHZpZXcuZmlsZTtcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgLy8gU21hbGwgZGVsYXkgdG8gbGV0IG1ldGFkYXRhIGNhY2hlIHBvcHVsYXRlXG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlUeXBlID0gY2FjaGU/LmZyb250bWF0dGVyPy5hY3Rpdml0eSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLnRlbXBsYXRlRW5naW5lLmZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGUpO1xuICAgICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYSB0ZW1wbGF0ZSBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ5IHRoZSBwb3N0LXByb2Nlc3NvclxuICAgICAgICBjb25zdCBjb250ZW50RWwgPSB2aWV3LmNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFya2Rvd24tcmVhZGluZy12aWV3IC5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpO1xuICAgICAgICBpZiAoY29udGVudEVsPy5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tdGVtcGxhdGUtcm9vdFwiKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIGluIHJlYWRpbmcgbW9kZSBidXQgbm8gdGVtcGxhdGUgd2FzIGluamVjdGVkIChlbXB0eSBib2R5IG5vdGUpLFxuICAgICAgICAvLyBpbmplY3QgaW50byB0aGUgcHJldmlldyBjb250ZW50XG4gICAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiO1xuICAgICAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVJZCwgZmlsZSwgY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIFBsdWdpbiBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsZW5kYXJQbHVnaW5Tb3VyY2UoKTogdm9pZCB7XG4gICAgLy8gTGlzdGVuIGZvciB0aGUgQ2FsZW5kYXIgcGx1Z2luJ3MgXCJjYWxlbmRhcjpvcGVuXCIgZXZlbnRcbiAgICAvLyBhbmQgaW5qZWN0IE9sZW4ncyBhY3Rpdml0eSBjb21wbGV0aW9uIGRhdGEgYXMgY29sb3JlZCBkb3RzXG4gICAgKHRoaXMuYXBwLndvcmtzcGFjZSBhcyBhbnkpLm9uKFwiY2FsZW5kYXI6b3BlblwiLCAoc291cmNlczogYW55W10pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkgcmV0dXJuO1xuXG4gICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICBnZXREYWlseU1ldGFkYXRhOiAoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUuZm9ybWF0Py4oXCJZWVlZLU1NLUREXCIpID8/IFwiXCI7XG4gICAgICAgICAgaWYgKCFkYXRlU3RyKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBDb3VudCBjb21wbGV0aW9ucyBmb3IgdGhpcyBkYXRlXG4gICAgICAgICAgbGV0IGNvbXBsZXRpb25zID0gMDtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXMuZmluZChcbiAgICAgICAgICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXI/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucysrO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGFjdGl2aXR5LmNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wbGV0aW9ucyA9PT0gMCkgcmV0dXJuIHt9O1xuXG4gICAgICAgICAgLy8gUmV0dXJuIGRvdHMgY29sb3JlZCBieSBkb21pbmFudCBjYXRlZ29yeVxuICAgICAgICAgIGNvbnN0IGRvdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBkb3RzLnB1c2goe1xuICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQgYXMga2V5b2YgdHlwZW9mIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNdID8/IFwiIzkyOGQ4NVwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGBvbGVuLWNhbC1kb3QtJHtjYXR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb3RzLFxuICAgICAgICAgICAgY2xhc3NlczogY29tcGxldGlvbnMgPj0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBcIm9sZW4tY2FsLWNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0V2Vla2x5TWV0YWRhdGE6ICgpID0+ICh7fSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBRdWljayBUYXNrIERpYWxvZyAtLS1cblxuICBwcml2YXRlIHNob3dRdWlja1Rhc2tEaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+QWRkIFF1aWNrIFRhc2s8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9mb2N1cyAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXJvd1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uIChtaW4pXCIgbWluPVwiNVwiIG1heD1cIjQ4MFwiIHZhbHVlPVwiMzBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYmFja2Ryb3BcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stY2FuY2VsXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFkZEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWFkZFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay10aW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZHVyYXRpb25JbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWR1cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBlbnRlciBhIHRhc2sgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3cgPSB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgcXQtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkYXRlOiB0b2RheSxcbiAgICAgICAgdGltZTogdGltZUlucHV0LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpIHx8IDMwLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICBuZXcgTm90aWNlKGBcXHUyNkExIFF1aWNrIHRhc2sgYWRkZWQ6ICR7dGl0bGV9YCk7XG4gICAgICBjbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRm9jdXMgdGhlIGlucHV0XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aXRsZUlucHV0LmZvY3VzKCksIDUwKTtcbiAgfVxuXG4gIC8vIC0tLSBTZXR0aW5ncyBQZXJzaXN0ZW5jZSAtLS1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBNaWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhUGF0aCA9IFwiLm9ic2lkaWFuL3BsdWdpbnMvbXl0aG9sb2dpY2FsLWhhYml0LXRyYWNrZXIvZGF0YS5qc29uXCI7XG4gICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyhkYXRhUGF0aCk7XG5cbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChkYXRhUGF0aCk7XG4gICAgICBjb25zdCBkYXRhOiBUcmFja0hhYml0UmFua0RhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIC8vIE1pZ3JhdGUgYm9zcyBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllciA9IGRhdGEuY3VycmVudFRpZXIgPz8gMTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc01heEhQID0gZGF0YS5ib3NzTWF4SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBkYXRhLmJvc3NDdXJyZW50SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID0gZGF0YS5jb25zZWN1dGl2ZVBlcmZlY3RXZWVrcyA/PyAwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzID0gZGF0YS5pblRhcnRhcnVzID8/IGZhbHNlO1xuICAgICAgdGhpcy5zZXR0aW5ncy50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA9IGRhdGEudGFydGFydXNQZW5hbmNlVGFza3MgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzU3RhcnREYXRlID0gZGF0YS50YXJ0YXJ1c1N0YXJ0RGF0ZSA/PyBudWxsO1xuICAgICAgdGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID0gZGF0YS5mYWlsZWRUaHJlc2hvbGREYXlzID8/IDA7XG5cbiAgICAgIC8vIE1pZ3JhdGUgdGVtcGxlIHRhc2tzXG4gICAgICBpZiAoZGF0YS50ZW1wbGVUYXNrcyAmJiBkYXRhLnRlbXBsZVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50ZW1wbGVUYXNrcyA9IGRhdGEudGVtcGxlVGFza3M7XG4gICAgICB9XG5cbiAgICAgIC8vIE1pZ3JhdGUgcmV3YXJkc1xuICAgICAgdGhpcy5zZXR0aW5ncy5wZW5kaW5nUmV3YXJkcyA9IGRhdGEucGVuZGluZ1Jld2FyZHMgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLmNsYWltZWRSZXdhcmRzID0gKGRhdGEuY2xhaW1lZFJld2FyZHMgPz8gW10pIGFzIGFueTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYmFua2VkUmV3YXJkcyA9IGRhdGEuYmFua2VkUmV3YXJkcyA/PyBbXTtcblxuICAgICAgLy8gTWlncmF0ZSBzeXN0ZW0gc3RhdGVcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSAoZGF0YS5zeXN0ZW1TdGF0ZSBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIikgPz8gXCJhY3RpdmVcIjtcbiAgICAgIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBkYXRhLnBhdXNlU3RhcnRUaW1lID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSA9IGRhdGEudG90YWxQYXVzZWRUaW1lID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSBkYXRhLnNpbXVsYXRlZERhdGUgPz8gbnVsbDtcblxuICAgICAgLy8gTWlncmF0ZSBoZXJvIGJhY2tncm91bmRcbiAgICAgIGlmIChkYXRhLmRhc2hib2FyZEJnSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IGRhdGEuZGFzaGJvYXJkQmdJbWFnZTtcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSBhY3Rpdml0aWVzIGZyb20gZW5hYmxlZEFjdGl2aXRpZXMgKyBjdXN0b21IYWJpdHNcbiAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcyA9IHRoaXMubWlncmF0ZUFjdGl2aXRpZXMoZGF0YSk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgbmV3IE5vdGljZShcIk9sZW46IFN1Y2Nlc3NmdWxseSBtaWdyYXRlZCBkYXRhIGZyb20gTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2xlbiBtaWdyYXRpb24gZXJyb3I6XCIsIGVycik7XG4gICAgICB0aGlzLnNldHRpbmdzLm1pZ3JhdGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtaWdyYXRlQWN0aXZpdGllcyhkYXRhOiBUcmFja0hhYml0UmFua0RhdGEpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFjdGl2aXR5Q29uZmlnW10gPSBbLi4uREVGQVVMVF9BQ1RJVklUSUVTXTtcblxuICAgIC8vIEFwcGx5IGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgICBpZiAoZGF0YS5lbmFibGVkQWN0aXZpdGllcykge1xuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN1bHQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aXZpdHkucHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSBpbiBkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICAgICAgYWN0aXZpdHkuZW5hYmxlZCA9IGRhdGEuZW5hYmxlZEFjdGl2aXRpZXNba2V5XSA/PyB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgb3ZlcnJpZGVzXG4gICAgaWYgKGRhdGEuYWN0aXZpdHlPdmVycmlkZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3ZlcnJpZGUgb2YgZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHJlc3VsdC5maW5kKChhKSA9PiBhLmlkID09PSBvdmVycmlkZS5pZCk7XG4gICAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICAgIGlmIChvdmVycmlkZS53ZWVrbHlUYXJnZXQgIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkud2Vla2x5VGFyZ2V0ID0gb3ZlcnJpZGUud2Vla2x5VGFyZ2V0O1xuICAgICAgICAgIGlmIChvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uICE9PSB1bmRlZmluZWQpIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb24gPSBvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGN1c3RvbSBoYWJpdHNcbiAgICBpZiAoZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgIGZvciAoY29uc3QgaGFiaXQgb2YgZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlc1xuICAgICAgICBpZiAocmVzdWx0LnNvbWUoKGEpID0+IGEuaWQgPT09IGhhYml0LmlkKSkgY29udGludWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGlkOiBoYWJpdC5pZCxcbiAgICAgICAgICBuYW1lOiBoYWJpdC5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBoYWJpdC5lbW9qaSA/PyBcIlxcdTJCNTBcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIiwgLy8gRGVmYXVsdCBjdXN0b20gaGFiaXRzIHRvIHNwaXJpdFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZm9sZGVyOiBoYWJpdC5mb2xkZXIsXG4gICAgICAgICAgcHJvcGVydHk6IGhhYml0LnByb3BlcnR5LFxuICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IGhhYml0LmRhbWFnZVBlckNvbXBsZXRpb24gPz8gMSxcbiAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IGhhYml0LndlZWtseVRhcmdldCA/PyAzLFxuICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgIGhhc1dvcmtzcGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJpb3JpdHk6IDUsXG4gICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICBwcmVmZXJyZWRUaW1lOiBcImFueXRpbWVcIixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogT25lLXRpbWUgbWlncmF0aW9uOiByZW5hbWUgbGVnYWN5IHNlc3Npb24gZmllbGRzIFx1MjE5MiB3b3Jrc3BhY2UsXG4gICAqIG1lcmdlIHdvcmtzcGFjZUZvbGRlciBpbnRvIGZvbGRlciwgYW5kIG1vdmUgdGVtcGxhdGVSZWdpc3RyeSBlbnRyaWVzXG4gICAqIGludG8gcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuc2V0dGluZ3MgYXMgYW55O1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBNaWdyYXRlIHRvcC1sZXZlbCBzZXR0aW5ncyBmaWVsZHNcbiAgICBpZiAocmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzICYmICFyYXcud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcykge1xuICAgICAgcmF3LndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMgPSByYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXM7XG4gICAgICBkZWxldGUgcmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyYXcuYWN0aXZlU2Vzc2lvbiAhPT0gdW5kZWZpbmVkICYmIHJhdy5hY3RpdmVXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmF3LmFjdGl2ZVdvcmtzcGFjZSA9IHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgZGVsZXRlIHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSBwZXItYWN0aXZpdHkgZmllbGRzXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgIGNvbnN0IGEgPSBhY3Rpdml0eSBhcyBhbnk7XG4gICAgICBpZiAoYS5oYXNTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgYS5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhLmhhc1dvcmtzcGFjZSA9IGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgZGVsZXRlIGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBNZXJnZSBzZXNzaW9uRm9sZGVyIC8gd29ya3NwYWNlRm9sZGVyIGludG8gZm9sZGVyXG4gICAgICBpZiAoYS5zZXNzaW9uRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGRlbGV0ZSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGEud29ya3NwYWNlRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLndvcmtzcGFjZUZvbGRlcjtcbiAgICAgICAgZGVsZXRlIGEud29ya3NwYWNlRm9sZGVyO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNaWdyYXRlIGFjdGl2ZVdvcmtzcGFjZSBpbm5lciBmaWVsZHNcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UpIHtcbiAgICAgIGNvbnN0IGF3ID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgYXMgYW55O1xuICAgICAgaWYgKGF3Lmhhc1Nlc3Npb24gIT09IHVuZGVmaW5lZCAmJiBhdy5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhdy5oYXNXb3Jrc3BhY2UgPSBhdy5oYXNTZXNzaW9uO1xuICAgICAgICBkZWxldGUgYXcuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB1cCBsZWdhY3kgZm9sZGVyIGZpZWxkcyBmcm9tIGFjdGl2ZVdvcmtzcGFjZVxuICAgICAgZGVsZXRlIGF3LnNlc3Npb25Gb2xkZXI7XG4gICAgICBkZWxldGUgYXcud29ya3NwYWNlRm9sZGVyO1xuICAgIH1cblxuICAgIC8vIE1pZ3JhdGUgdGVtcGxhdGVSZWdpc3RyeSBcdTIxOTIgcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlXG4gICAgaWYgKHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5ICYmIEFycmF5LmlzQXJyYXkocmF3LnRlbXBsYXRlUmVnaXN0cnkpICYmIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmF3LnRlbXBsYXRlUmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKCFlbnRyeS5lbmFibGVkIHx8ICFlbnRyeS50ZW1wbGF0ZVBhdGgpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhOiBhbnkpID0+IGEuaWQgPT09IGVudHJ5LmFjdGl2aXR5VHlwZSk7XG4gICAgICAgIGlmIChhY3Rpdml0eSAmJiAhYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgICAgICBhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSA9IGVudHJ5LnRlbXBsYXRlUGF0aDtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5O1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFV0aWxpdHlcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb25zdGFudHMgJiBEZWZhdWx0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgQm9zc0RlZmluaXRpb24sXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBPbGVuU2V0dGluZ3MsXG4gIERldkNvbmZpZyxcbiAgRWx5c2lhblRoZW1lLFxuICBXb3Jrc3BhY2VDb21wbGV0aW9uU3RhdGUsXG4gIENhbGVuZGFyU2V0dGluZ3MsXG4gIFBlcnNvbmFsU3RhdHMsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8vIC0tLSBWaWV3IFR5cGUgLS0tXG5cbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfT0xFTiA9IFwib2xlbi1kYXNoYm9hcmQtdmlld1wiO1xuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9XT1JLU1BBQ0UgPSBcIm9sZW4td29ya3NwYWNlLXZpZXdcIjtcblxuLy8gLS0tIEJvc3MgRGVmaW5pdGlvbnMgKDEzIHRpZXJzKSAtLS1cblxuZXhwb3J0IGNvbnN0IEJPU1NFUzogQm9zc0RlZmluaXRpb25bXSA9IFtcbiAgeyB0aWVyOiAxLCBuYW1lOiBcIlNoYWRvdyBvZiBBcGF0aHlcIiwgcmFuazogXCJEb29tc2Nyb2xsZXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHdlaWdodCBvZiBpbmVydGlhIHRoYXQga2VlcHMgeW91IHNjcm9sbGluZyBpbnN0ZWFkIG9mIHN0YXJ0aW5nXCIsIGxvcmU6IFwiQm9ybiBmcm9tIGZvcmdvdHRlbiBwcm9taXNlcyBhbmQgdW5vcGVuZWQgZ3ltIGJhZ3MsIHRoZSBTaGFkb3cgZmVlZHMgb24gcG90ZW50aWFsIHVucmVhbGl6ZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuMVwiIH0sXG4gIHsgdGllcjogMiwgbmFtZTogXCJTaXJlbidzIENhbGxcIiwgcmFuazogXCJBcm1jaGFpciBHZW5lcmFsXCIsIGRlc2NyaXB0aW9uOiBcIkRpc3RyYWN0aW9uJ3Mgc3dlZXQgc29uZyB0aGF0IHB1bGxzIGZvY3VzIGZyb20gY29tbWl0dGVkIHdvcmtcIiwgbG9yZTogXCJTaGUgc2luZ3Mgb2YgZWFzaWVyIHBhdGhzLCBvZiBqdXN0IG9uZSBtb3JlIHZpZGVvLCBvZiBzdGFydGluZyB0b21vcnJvdyBpbnN0ZWFkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjJcIiB9LFxuICB7IHRpZXI6IDMsIG5hbWU6IFwiSHlkcmEgb2YgSGFiaXRzXCIsIHJhbms6IFwiQXBwcmVudGljZVwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29tcGxleGl0eSBvZiBtYW5hZ2luZyBtdWx0aXBsZSByb3V0aW5lcyBzaW11bHRhbmVvdXNseVwiLCBsb3JlOiBcIkN1dCBvbmUgaGVhZCBhbmQgdHdvIGdyb3cgYmFjay4gRWFjaCBoYWJpdCBkZW1hbmRzIGl0cyBvd24gYXR0ZW50aW9uLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjNcIiB9LFxuICB7IHRpZXI6IDQsIG5hbWU6IFwiTWlub3RhdXIncyBNYXplXCIsIHJhbms6IFwiQ2l0aXplblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29uZnVzaW9uIGFuZCByb3V0aW5lIHRoYXQgdHJhcHMgZXZlbiBkZWRpY2F0ZWQgcHJhY3RpdGlvbmVyc1wiLCBsb3JlOiBcIkxvc3QgaW4gY29ycmlkb3JzIG9mIGhhYml0LCB0aGUgcGF0aCBmb3J3YXJkIGlzIG5ldmVyIGNsZWFyLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjdcIiB9LFxuICB7IHRpZXI6IDUsIG5hbWU6IFwiTWVkdXNhJ3MgR2F6ZVwiLCByYW5rOiBcIlNjaG9sYXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHBhcmFseXNpcyB0aGF0IGNvbWVzIGZyb20gb3ZlcnRoaW5raW5nIG9yIGZlYXIgb2YgZmFpbHVyZVwiLCBsb3JlOiBcIk9uZSBnbGFuY2UgYW5kIHlvdSBhcmUgZnJvemVuLCB1bmFibGUgdG8gYWN0LCB1bmFibGUgdG8gbW92ZS5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS45XCIgfSxcbiAgeyB0aWVyOiA2LCBuYW1lOiBcIk5lbWVhbiBMaW9uXCIsIHJhbms6IFwiU2FtdXJhaVwiLCBkZXNjcmlwdGlvbjogXCJTZWVtaW5nbHkgaW52dWxuZXJhYmxlIG9ic3RhY2xlcyB0aGF0IHJlcXVpcmUgcGVyc2lzdGVudCBlZmZvcnRcIiwgbG9yZTogXCJJdHMgaGlkZSBjYW5ub3QgYmUgcGllcmNlZCBieSBvcmRpbmFyeSBtZWFucy4gT25seSBkaXNjaXBsaW5lIGN1dHMgdGhyb3VnaC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4xXCIgfSxcbiAgeyB0aWVyOiA3LCBuYW1lOiBcIkNoaW1lcmFcIiwgcmFuazogXCJUZW1wbGFyXCIsIGRlc2NyaXB0aW9uOiBcIk11bHRpLWhlYWRlZCBiZWFzdCByZXF1aXJpbmcgYmFsYW5jZWQgYXR0ZW50aW9uIGFjcm9zcyBhbGwgZG9tYWluc1wiLCBsb3JlOiBcIkxpb24sIGdvYXQsIGFuZCBzZXJwZW50IFx1MjAxNCBlYWNoIGhlYWQgZGVtYW5kcyBtYXN0ZXJ5IG9mIGEgZGlmZmVyZW50IGFydC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4zXCIgfSxcbiAgeyB0aWVyOiA4LCBuYW1lOiBcIkNlcmJlcnVzXCIsIHJhbms6IFwiU3RvaWNcIiwgZGVzY3JpcHRpb246IFwiR3VhcmRpYW4gb2YgdHJhbnNmb3JtYXRpb24gdGVzdGluZyBpZiBoYWJpdHMgaGF2ZSBiZWNvbWUgaWRlbnRpdHlcIiwgbG9yZTogXCJUaHJlZSBoZWFkcywgdGhyZWUgdGVzdHMuIFBhc3QgdGhlIGdhdGUgbGllcyB0cmFuc2Zvcm1hdGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi41XCIgfSxcbiAgeyB0aWVyOiA5LCBuYW1lOiBcIlNjeWxsYSAmIENoYXJ5YmRpc1wiLCByYW5rOiBcIk9seW1waWFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBpbXBvc3NpYmxlIGNob2ljZSBiZXR3ZWVuIGNvbXBldGluZyBwcmlvcml0aWVzXCIsIGxvcmU6IFwiQmV0d2VlbiB0aGUgcm9jayBhbmQgdGhlIHdoaXJscG9vbCwgYm90aCBtdXN0IHNvbWVob3cgYmUgaG9ub3JlZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi43XCIgfSxcbiAgeyB0aWVyOiAxMCwgbmFtZTogXCJUaGUgRnVyaWVzXCIsIHJhbms6IFwiU2FnZVwiLCBkZXNjcmlwdGlvbjogXCJJbnRlcm5hbCB2b2ljZXMgb2YgZ3VpbHQgYW5kIHNoYW1lIGF0dGFja2luZyBldmVuIHRoZSBzdWNjZXNzZnVsXCIsIGxvcmU6IFwiVGhleSB3aGlzcGVyIHlvdXIgZmFpbHVyZXMsIHJlbWluZCB5b3Ugb2YgZXZlcnkgc2tpcCwgZXZlcnkgd2Vha25lc3MuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuOVwiIH0sXG4gIHsgdGllcjogMTEsIG5hbWU6IFwiVHlwaG9uXCIsIHJhbms6IFwiVGl0YW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGZvcmNlIG9mIGNoYW9zIHRocmVhdGVuaW5nIHRvIHVuZG8gYWxsIHByb2dyZXNzXCIsIGxvcmU6IFwiRmF0aGVyIG9mIGFsbCBtb25zdGVycywgaGUgc2Vla3MgdG8gcmV0dXJuIHlvdSB0byB0aGUgYmVnaW5uaW5nLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjFcIiB9LFxuICB7IHRpZXI6IDEyLCBuYW1lOiBcIktyb25vc1wiLCByYW5rOiBcIkFyY2hvblwiLCBkZXNjcmlwdGlvbjogXCJUaW1lIGl0c2VsZiBhcyBhbiBlbmVteSwgdGVzdGluZyBzdXN0YWluZWQgaW50ZW5zaXR5XCIsIGxvcmU6IFwiVGhlIFRpdGFuIHdobyBkZXZvdXJzIGhpcyBjaGlsZHJlbi4gQ2FuIHlvdSBtYWludGFpbiBhcyB3ZWVrcyBiZWNvbWUgbW9udGhzP1wiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjNcIiB9LFxuICB7IHRpZXI6IDEzLCBuYW1lOiBcIkNoYW9zIFByaW1vcmRpYWxcIiwgcmFuazogXCJNYXN0ZXIgb2YgQWxsXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB1bHRpbWF0ZSB0ZXN0IG9mIHVuc2hha2VhYmxlIGRpc2NpcGxpbmVcIiwgbG9yZTogXCJCZWZvcmUgY3JlYXRpb24sIGJlZm9yZSBvcmRlciwgb25seSBDaGFvcy4gVG8gbWFzdGVyIGl0IGlzIHRvIG1hc3RlciB5b3Vyc2VsZi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy42XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSQU5LX1RJRVJfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiM2QjcyODBcIiwgMjogXCIjRUY0NDQ0XCIsIDM6IFwiI0Y1OUUwQlwiLCA0OiBcIiMxMEI5ODFcIixcbiAgNTogXCIjM0I4MkY2XCIsIDY6IFwiIzhCNUNGNlwiLCA3OiBcIiNFQzQ4OTlcIiwgODogXCIjRjk3MzE2XCIsXG4gIDk6IFwiIzA2QjZENFwiLCAxMDogXCIjQTg1NUY3XCIsIDExOiBcIiNEQzI2MjZcIiwgMTI6IFwiIzdDM0FFRFwiLFxuICAxMzogXCIjYzlhMjI3XCIsXG59O1xuXG4vLyAtLS0gQ2hhcHRlciBQcm9ncmVzc2lvbiAtLS1cblxuZXhwb3J0IGNvbnN0IENIQVBURVJfTkFNRVM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gIDE6IFwiSW5pdGlhdGVcIixcbiAgMjogXCJFeHBsb3JlclwiLFxuICAzOiBcIkpvdXJuZXltYW5cIixcbiAgNDogXCJBZGVwdFwiLFxuICA1OiBcIlBoaWxvc29waGVyXCIsXG4gIDY6IFwiTWFzdGVyXCIsXG4gIDc6IFwiU2FnZVwiLFxuICA4OiBcIk9yYWNsZVwiLFxuICA5OiBcIlRpdGFuXCIsXG4gIDEwOiBcIk9seW1waWFuXCIsXG59O1xuXG4vLyAtLS0gRHluYW1pYyBUaXRsZSBUYWJsZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfRE9NSU5BTlRfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYm9keTogICB7IGxpZ2h0OiBcIkF0aGxldGVcIiwgICBtaWQ6IFwiV2FycmlvclwiLCAgaGVhdnk6IFwiVGl0YW5cIiB9LFxuICBtaW5kOiAgIHsgbGlnaHQ6IFwiU3R1ZGVudFwiLCAgIG1pZDogXCJTY2hvbGFyXCIsICBoZWF2eTogXCJQb2x5bWF0aFwiIH0sXG4gIHNwaXJpdDogeyBsaWdodDogXCJTZWVrZXJcIiwgICAgbWlkOiBcIlNhZ2VcIiwgICAgIGhlYXZ5OiBcIk9yYWNsZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVFdPX0NBVEVHT1JZX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiYm9keSttaW5kXCI6ICAgIHsgbGlnaHQ6IFwiRGlzY2lwbGluZWQgVGhpbmtlclwiLCBtaWQ6IFwiUGhpbG9zb3BoZXItS2luZ1wiLCBoZWF2eTogXCJSZW5haXNzYW5jZSBUaXRhblwiIH0sXG4gIFwiYm9keStzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQXNjZXRpY1wiLCAgICAgICAgICAgICBtaWQ6IFwiVGVtcGxhclwiLCAgICAgICAgICBoZWF2eTogXCJPbHltcGlhbiBNb25rXCIgfSxcbiAgXCJtaW5kK3NwaXJpdFwiOiAgeyBsaWdodDogXCJDb250ZW1wbGF0aXZlXCIsICAgICAgIG1pZDogXCJNeXN0aWMgU2Nob2xhclwiLCAgIGhlYXZ5OiBcIkVubGlnaHRlbmVkIE9uZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQkFMQU5DRURfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCIsXG4gIG1pZDogXCJSZW5haXNzYW5jZSBTb3VsXCIsXG4gIGhlYXZ5OiBcIkV1ZGFpbW9uXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBBY3Rpdml0aWVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVklUSUVTOiBBY3Rpdml0eUNvbmZpZ1tdID0gW1xuICB7XG4gICAgaWQ6IFwid29ya291dFwiLCBuYW1lOiBcIldvcmtvdXRcIiwgZW1vamk6IFwiXFx1ezFGNEFBfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiLCBwcm9wZXJ0eTogXCJXb3Jrb3V0XCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA3LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHdvcmtzcGFjZVRlbXBsYXRlOiBcIndvcmtvdXRcIixcbiAgICBwcmlvcml0eTogOCwgbmVnbGVjdFRocmVzaG9sZDogMixcbiAgICBwcmVmZXJyZWRUaW1lOiBcIm1vcm5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2FyZGlvXCIsIG5hbWU6IFwiQ2FyZGlvXCIsIGVtb2ppOiBcIlxcdXsxRjNDM31cIiwgY2F0ZWdvcnk6IFwiYm9keVwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAyIENhcmRpb1wiLCBwcm9wZXJ0eTogXCJDYXJkaW9cIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDQsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICBhbHRlcm5hdGVzV2l0aDogXCJ3b3Jrb3V0XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWFkaW5nXCIsIG5hbWU6IFwiUmVhZGluZ1wiLCBlbW9qaTogXCJcXHV7MUY0RDZ9XCIsIGNhdGVnb3J5OiBcIm1pbmRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMyBSZWFkaW5nXCIsIHByb3BlcnR5OiBcIlJlYWRpbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDYsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJldmVuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA0NSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRydW1taW5nXCIsIG5hbWU6IFwiRHJ1bW1pbmdcIiwgZW1vamk6IFwiXFx1ezFGOTQxfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNCBEcnVtbWluZ1wiLCBwcm9wZXJ0eTogXCJEcnVtbWluZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNiwgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJoZWFsdGgtc3R1ZHlcIiwgbmFtZTogXCJIZWFsdGggU3R1ZHlcIiwgZW1vamk6IFwiXFx1ezFGOUVDfVwiLCBjYXRlZ29yeTogXCJtaW5kXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDUgSGVhbHRoIFN0dWR5XCIsIHByb3BlcnR5OiBcIkhlYWx0aCBTdHVkeVwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMywgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNCwgbmVnbGVjdFRocmVzaG9sZDogNCxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2NpYWxcIiwgbmFtZTogXCJTb2NpYWxcIiwgZW1vamk6IFwiXFx1ezFGOTFEfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNiBTb2NpYWxcIiwgcHJvcGVydHk6IFwiU29jaWFsXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiAyLCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA1LCBuZWdsZWN0VGhyZXNob2xkOiA1LFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcmF3aW5nXCIsIG5hbWU6IFwiRHJhd2luZ1wiLCBlbW9qaTogXCJcXHV7MUYzQTh9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA3IERyYXdpbmdcIiwgcHJvcGVydHk6IFwiRHJhd2luZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNCwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNywgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG5dO1xuXG4vLyAtLS0gRGlyZWN0aXZlIExvcmUgVGVtcGxhdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgTkVHTEVDVF9MT1JFOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB3b3Jrb3V0OiBcIllvdXIgbXVzY2xlcyBmb3JnZXQgd2hhdCB0aGV5IG9uY2Uga25ldy4gVGhlIGJvZHkgY3JhdmVzIGRpc2NpcGxpbmUgXHUyMDE0IGFuc3dlciBpdC5cIixcbiAgY2FyZGlvOiBcIlRoZSBoZWFydCBncm93cyBzbHVnZ2lzaCB3aXRob3V0IHRoZSBwb3VuZGluZyByaHl0aG0gb2YgZWZmb3J0LlwiLFxuICByZWFkaW5nOiBcIlRoZSBtaW5kIHN0YXJ2ZXMgb24gZGlzdHJhY3Rpb24uIEZlZWQgaXQgd2l0aCBwYWdlcywgbm90IHBpeGVscy5cIixcbiAgZHJ1bW1pbmc6IFwiU2lsZW5jZSBpcyBub3QgcmVzdCBcdTIwMTQgaXQgaXMgdGhlIGRlYXRoIG9mIHJoeXRobS4gUGljayB1cCB0aGUgc3RpY2tzLlwiLFxuICBcImhlYWx0aC1zdHVkeVwiOiBcIktub3dsZWRnZSBvZiB0aGUgYm9keSBpcyBwb3dlciBvdmVyIGl0LiBOZWdsZWN0IGludml0ZXMgaWdub3JhbmNlLlwiLFxuICBzb2NpYWw6IFwiRXZlbiB3YXJyaW9ycyBuZWVkIGZlbGxvd3NoaXAuIElzb2xhdGlvbiBicmVlZHMgc3RhZ25hdGlvbi5cIixcbiAgZHJhd2luZzogXCJUaGUgYmVhc3Qgd2l0aGluIHlvdSBncm93cyB3ZWFrIHdpdGhvdXQgdGhlIGRpc2NpcGxpbmUgb2YgbGluZSBhbmQgZm9ybS5cIixcbn07XG5cbi8vIC0tLSBGYWxsYmFjayBRdW90ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBGQUxMQkFDS19RVU9URVM6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBhdHRyaWJ1dGlvbjogc3RyaW5nIH0+ID0gW1xuICB7IHRleHQ6IFwiWW91IGhhdmUgcG93ZXIgb3ZlciB5b3VyIG1pbmQgXHUyMDE0IG5vdCBvdXRzaWRlIGV2ZW50cy4gUmVhbGl6ZSB0aGlzLCBhbmQgeW91IHdpbGwgZmluZCBzdHJlbmd0aC5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIldlIHN1ZmZlciBtb3JlIG9mdGVuIGluIGltYWdpbmF0aW9uIHRoYW4gaW4gcmVhbGl0eS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBpbXBlZGltZW50IHRvIGFjdGlvbiBhZHZhbmNlcyBhY3Rpb24uIFdoYXQgc3RhbmRzIGluIHRoZSB3YXkgYmVjb21lcyB0aGUgd2F5LlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiTm8gbWFuIGlzIGZyZWUgd2hvIGlzIG5vdCBtYXN0ZXIgb2YgaGltc2VsZi5cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIldhc3RlIG5vIG1vcmUgdGltZSBhcmd1aW5nIGFib3V0IHdoYXQgYSBnb29kIG1hbiBzaG91bGQgYmUuIEJlIG9uZS5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIkl0IGlzIG5vdCB0aGF0IHdlIGhhdmUgYSBzaG9ydCB0aW1lIHRvIGxpdmUsIGJ1dCB0aGF0IHdlIHdhc3RlIGEgZ29vZCBkZWFsIG9mIGl0LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiRmlyc3Qgc2F5IHRvIHlvdXJzZWxmIHdoYXQgeW91IHdvdWxkIGJlOyBhbmQgdGhlbiBkbyB3aGF0IHlvdSBoYXZlIHRvIGRvLlwiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiVGhlIGhhcHBpbmVzcyBvZiB5b3VyIGxpZmUgZGVwZW5kcyB1cG9uIHRoZSBxdWFsaXR5IG9mIHlvdXIgdGhvdWdodHMuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJIZSB3aG8gZmVhcnMgZGVhdGggd2lsbCBuZXZlciBkbyBhbnl0aGluZyB3b3J0aCBvZiBhIG1hbiB3aG8gaXMgYWxpdmUuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJEaWZmaWN1bHRpZXMgc3RyZW5ndGhlbiB0aGUgbWluZCwgYXMgbGFib3IgZG9lcyB0aGUgYm9keS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkhvdyBsb25nIGFyZSB5b3UgZ29pbmcgdG8gd2FpdCBiZWZvcmUgeW91IGRlbWFuZCB0aGUgYmVzdCBmb3IgeW91cnNlbGY/XCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJUaGUgc291bCBiZWNvbWVzIGR5ZWQgd2l0aCB0aGUgY29sb3VyIG9mIGl0cyB0aG91Z2h0cy5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbl07XG5cbi8vIC0tLSBSb21hbiBOdW1lcmFscyBIZWxwZXIgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JvbWFuKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgdmFscyA9IFsxMDAwLCA5MDAsIDUwMCwgNDAwLCAxMDAsIDkwLCA1MCwgNDAsIDEwLCA5LCA1LCA0LCAxXTtcbiAgY29uc3Qgc3ltcyA9IFtcIk1cIiwgXCJDTVwiLCBcIkRcIiwgXCJDRFwiLCBcIkNcIiwgXCJYQ1wiLCBcIkxcIiwgXCJYTFwiLCBcIlhcIiwgXCJJWFwiLCBcIlZcIiwgXCJJVlwiLCBcIklcIl07XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICB3aGlsZSAobnVtID49IHZhbHNbaV0pIHtcbiAgICAgIHJlc3VsdCArPSBzeW1zW2ldO1xuICAgICAgbnVtIC09IHZhbHNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLSBEZWZhdWx0IFdvcmtzcGFjZSBDb21wbGV0aW9uIFN0YXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUzogV29ya3NwYWNlQ29tcGxldGlvblN0YXRlW10gPSBbXG4gIHsgaWQ6IFwiZGlzY2lwbGluZVwiLCBuYW1lOiBcIkRpc2NpcGxpbmVcIiwgaWNvbjogXCJcXHUyNUM2XCIsIGNvbG9yOiBcIiM5MjhkODVcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDEuMCB9LFxuICB7IGlkOiBcImZsb3dcIiwgbmFtZTogXCJGbG93XCIsIGljb246IFwiXFx1MjI0OFwiLCBjb2xvcjogXCIjYzlhODRjXCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAxLjUgfSxcbiAgeyBpZDogXCJza2lwcGVkXCIsIG5hbWU6IFwiU2tpcHBlZFwiLCBpY29uOiBcIlxcdTI1Q0JcIiwgY29sb3I6IFwiIzhiMmQzNVwiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMCB9LFxuXTtcblxuLy8gLS0tIERlZmF1bHQgRGV2IENvbmZpZyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVWX0NPTkZJRzogRGV2Q29uZmlnID0ge1xuICBsYWJlbHM6IHtcbiAgICBncmVldGluZ19tb3JuaW5nOiBcIkdvb2QgbW9ybmluZ1wiLFxuICAgIGdyZWV0aW5nX2FmdGVybm9vbjogXCJHb29kIGFmdGVybm9vblwiLFxuICAgIGdyZWV0aW5nX2V2ZW5pbmc6IFwiR29vZCBldmVuaW5nXCIsXG4gICAgZ3JlZXRpbmdfbmlnaHQ6IFwiR29vZCBuaWdodFwiLFxuICAgIGRpcmVjdGl2ZV90aXRsZTogXCJUSEUgRElSRUNUSVZFXCIsXG4gICAgYm9zc19zdGF0dXNfdGl0bGU6IFwiQk9TUyBTVEFUVVNcIixcbiAgICB3ZWVrbHlfcmh5dGhtX3RpdGxlOiBcIldFRUtMWSBSSFlUSE1cIixcbiAgICBhY3Rpdml0eV9ncmlkX3RpdGxlOiBcIkFDVElWSVRJRVNcIixcbiAgICB0ZW1wbGVfdGl0bGU6IFwiVEhFIFRFTVBMRVwiLFxuICAgIGV1ZGFpbW9uaWFfdGl0bGU6IFwiRXVkYWltb25pYSBJbmRleFwiLFxuICAgIGRheW1hcF90aXRsZTogXCJZT1VSIERBWVwiLFxuICAgIGJlZ2luX3dvcmtzcGFjZTogXCJFTlRFUiBXT1JLU1BBQ0VcIixcbiAgICBub3Rfbm93OiBcIk5PVCBOT1dcIixcbiAgfSxcbiAgeHBQZXJDb21wbGV0aW9uOiAxMCxcbiAgc3RyZWFrQm9udXNNdWx0aXBsaWVyOiAxLjUsXG4gIGJ1ZmZlck1pbnV0ZXM6IDE1LFxuICBtb3JuaW5nU3RhcnQ6IDYsXG4gIG1vcm5pbmdFbmQ6IDEyLFxuICBhZnRlcm5vb25FbmQ6IDE4LFxuICBldmVuaW5nRW5kOiAyMyxcbiAgdGhlbWVPdmVycmlkZXM6IHt9LFxuICBhbmltYXRpb25TdGFnZ2VyTXM6IDgwLFxuICBoZXJvSGVpZ2h0OiAzNTAsXG4gIHNlY3Rpb25PcmRlcjogW1xuICAgIFwiaGVyb1wiLCBcImhlYXRtYXBcIiwgXCJldWRhaW1vbmlhXCIsIFwiZGF5bWFwXCIsIFwiZGlyZWN0aXZlXCIsIFwiYm9zc1wiLFxuICAgIFwid2Vla2x5XCIsIFwiYWN0aXZpdGllc1wiLCBcInRlbXBsZVwiLCBcInF1b3RlXCIsXG4gIF0sXG4gIGhpZGRlblNlY3Rpb25zOiBbXSxcbiAgYWN0aXZpdHlHcmlkQ29sdW1uczogMixcbn07XG5cbi8vIC0tLSBEZWZhdWx0IFBlcnNvbmFsIFN0YXRzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTT05BTF9TVEFUUzogUGVyc29uYWxTdGF0cyA9IHtcbiAgZ2VuZGVyOiBcIm1hbGVcIixcbiAgaGVpZ2h0OiAxNzUsXG4gIGJpcnRoZGF0ZTogXCJcIixcbiAgY3VycmVudFdlaWdodDogMCxcbiAgd2VpZ2h0TG9nOiBbXSxcbiAgd2VpZ2h0TG9nRnJlcXVlbmN5OiBcImV2ZXJ5LXdlZWtcIixcbiAgd2VpZ2h0TG9nQ3VzdG9tRGF5czogNyxcbiAgbGFzdFdlaWdodExvZ0RhdGU6IG51bGwsXG59O1xuXG4vLyAtLS0gTXVzY2xlIEdyb3VwIERlZmluaXRpb25zIC0tLVxuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQUyA9IFtcbiAgXCJjaGVzdFwiLCBcImJhY2tcIiwgXCJzaG91bGRlcnNcIiwgXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIixcbiAgXCJhYnNcIiwgXCJvYmxpcXVlc1wiLCBcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiLFxuICBcInRyYXBzXCIsIFwibGF0c1wiLCBcIm5lY2tcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE11c2NsZUdyb3VwSWQgPSB0eXBlb2YgTVVTQ0xFX0dST1VQU1tudW1iZXJdO1xuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQX0xBQkVMUzogUmVjb3JkPE11c2NsZUdyb3VwSWQsIHN0cmluZz4gPSB7XG4gIGNoZXN0OiBcIkNoZXN0XCIsXG4gIGJhY2s6IFwiQmFja1wiLFxuICBzaG91bGRlcnM6IFwiU2hvdWxkZXJzXCIsXG4gIGJpY2VwczogXCJCaWNlcHNcIixcbiAgdHJpY2VwczogXCJUcmljZXBzXCIsXG4gIGZvcmVhcm1zOiBcIkZvcmVhcm1zXCIsXG4gIGFiczogXCJBYnNcIixcbiAgb2JsaXF1ZXM6IFwiT2JsaXF1ZXNcIixcbiAgcXVhZHM6IFwiUXVhZHNcIixcbiAgaGFtc3RyaW5nczogXCJIYW1zdHJpbmdzXCIsXG4gIGdsdXRlczogXCJHbHV0ZXNcIixcbiAgY2FsdmVzOiBcIkNhbHZlc1wiLFxuICB0cmFwczogXCJUcmFwc1wiLFxuICBsYXRzOiBcIkxhdHNcIixcbiAgbmVjazogXCJOZWNrXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBDYWxlbmRhciBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1M6IENhbGVuZGFyU2V0dGluZ3MgPSB7XG4gIGVuYWJsZURhaWx5Tm90ZXM6IHRydWUsXG4gIGRhaWx5Tm90ZXNGb2xkZXI6IFwiXCIsXG4gIGRhaWx5Tm90ZXNGb3JtYXQ6IFwiWVlZWS1NTS1ERFwiLFxuICBlbmFibGVUYXNrc1BsdWdpbjogZmFsc2UsXG4gIGVuYWJsZVF1aWNrVGFza3M6IHRydWUsXG4gIHF1aWNrVGFza3M6IFtdLFxufTtcblxuLy8gLS0tIERlZmF1bHQgT2xlbiBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0xFTl9TRVRUSU5HUzogT2xlblNldHRpbmdzID0ge1xuICAvLyBQcm9maWxlXG4gIHVzZXJOYW1lOiBcIldhcnJpb3JcIixcbiAgbXlXaHk6IFwiXCIsXG4gIGhlcm9CYWNrZ3JvdW5kOiBcIlwiLFxuICBob21lcGFnZTogXCJcIixcblxuICAvLyBBY3Rpdml0aWVzXG4gIGFjdGl2aXRpZXM6IERFRkFVTFRfQUNUSVZJVElFUyxcblxuICAvLyBDYXRlZ29yaWVzXG4gIGNhdGVnb3J5Q29sb3JzOiB7XG4gICAgYm9keTogXCIjYzlhODRjXCIsXG4gICAgbWluZDogXCIjNmI4Y2NlXCIsXG4gICAgc3Bpcml0OiBcIiM4YjdlYzhcIixcbiAgfSxcbiAgdGl0bGVPdmVycmlkZTogXCJcIixcblxuICAvLyBFdWRhaW1vbmlhXG4gIGNhdGVnb3J5WFA6IHtcbiAgICBib2R5OiAwLFxuICAgIG1pbmQ6IDAsXG4gICAgc3Bpcml0OiAwLFxuICB9LFxuXG4gIC8vIEJvc3NcbiAgY3VycmVudFRpZXI6IDEsXG4gIGJvc3NNYXhIUDogMzUsXG4gIGJvc3NDdXJyZW50SFA6IDM1LFxuICBpblRhcnRhcnVzOiBmYWxzZSxcbiAgdGFydGFydXNQZW5hbmNlVGFza3M6IFtdLFxuICB0YXJ0YXJ1c1N0YXJ0RGF0ZTogbnVsbCxcbiAgZmFpbGVkVGhyZXNob2xkRGF5czogMCxcbiAgY29uc2VjdXRpdmVQZXJmZWN0V2Vla3M6IDAsXG5cbiAgLy8gVGVtcGxlXG4gIHRlbXBsZVRhc2tzOiBbXG4gICAgeyBpZDogXCJiYXRoaW5nXCIsIG5hbWU6IFwiQmF0aGluZ1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDEsIGVtb2ppOiBcIlxcdXsxRjZCRn1cIiB9LFxuICAgIHsgaWQ6IFwiZmFjaWFsLWhhaXJcIiwgbmFtZTogXCJGYWNpYWwgaGFpclwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIsIGVtb2ppOiBcIlxcdXsxRkE5Mn1cIiB9LFxuICAgIHsgaWQ6IFwibmFpbHNcIiwgbmFtZTogXCJOYWlsc1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDcsIGVtb2ppOiBcIlxcdTI3MDJcXHVGRTBGXCIgfSxcbiAgICB7IGlkOiBcImhhaXJjdXRcIiwgbmFtZTogXCJIYWlyY3V0XCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogMjEsIGVtb2ppOiBcIlxcdXsxRjQ4OH1cIiB9LFxuICBdLFxuXG4gIC8vIFJld2FyZHNcbiAgcGVuZGluZ1Jld2FyZHM6IFtdLFxuICBjbGFpbWVkUmV3YXJkczogW10sXG4gIGJhbmtlZFJld2FyZHM6IFtdLFxuXG4gIC8vIFN5c3RlbVxuICBzeXN0ZW1TdGF0ZTogXCJhY3RpdmVcIixcbiAgcGF1c2VTdGFydFRpbWU6IG51bGwsXG4gIHRvdGFsUGF1c2VkVGltZTogMCxcbiAgbWlncmF0ZWQ6IGZhbHNlLFxuICBzaW11bGF0ZWREYXRlOiBudWxsLFxuXG4gIC8vIFRoZW1lXG4gIHRoZW1lT3ZlcnJpZGVzOiB7fSxcblxuICAvLyBEZXZcbiAgZGV2Q29uZmlnOiBERUZBVUxUX0RFVl9DT05GSUcsXG5cbiAgLy8gV29ya3NwYWNlXG4gIHdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXM6IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUyxcbiAgYWN0aXZlV29ya3NwYWNlOiBudWxsLFxuXG4gIC8vIENhbGVuZGFyXG4gIGNhbGVuZGFyOiBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuXG4gIC8vIFBlcnNvbmFsIFN0YXRzXG4gIHBlcnNvbmFsU3RhdHM6IERFRkFVTFRfUEVSU09OQUxfU1RBVFMsXG5cbiAgLy8gUXVvdGVcbiAgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLFxuICBsYXN0UXVvdGVJbmRleDogLTEsXG4gIHJlY2VudFF1b3RlSWRzOiBbXSxcbn07XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXNoYm9hcmQgVmlld1xuLy8gTWFpbiBzY3JvbGxhYmxlIEl0ZW1WaWV3IHJlbmRlcmluZyBhbGwgZGFzaGJvYXJkIHNlY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQ29tcGxldGlvbk1hcCwgQ29tcGxldGlvbiwgQ2FsZW5kYXJUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBDYWxlbmRhckVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0NhbGVuZGFyRW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJIZXJvQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9DYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJFdWRhaW1vbmlhQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXVkYWltb25pYUJhclwiO1xuaW1wb3J0IHsgcmVuZGVyRGlyZWN0aXZlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RpcmVjdGl2ZUNhcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvc3NTdGF0dXNDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9zc1N0YXR1c0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtseVJoeXRobSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlZWtseVJoeXRobVwiO1xuaW1wb3J0IHsgcmVuZGVyQWN0aXZpdHlHcmlkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aXZpdHlHcmlkXCI7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGVDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RlbXBsZUNoaXBzXCI7XG5pbXBvcnQgeyByZW5kZXJRdW90ZUZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlRm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXlUaW1lbGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RheVRpbWVsaW5lXCI7XG5pbXBvcnQgeyByZW5kZXJTdHJlbmd0aEhlYXRtYXAsIHNob3dNdXNjbGVQcm9ncmVzc1BvcHVwLCBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAsIHNob3dNdXNjbGVTZWxlY3RvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0cmVuZ3RoSGVhdG1hcFwiO1xuaW1wb3J0IHsgcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV2VpZ2h0UHJvZ3Jlc3NcIjtcbmltcG9ydCB0eXBlIHsgTXVzY2xlR3JvdXBJZCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSBpbnRlcnZhbHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfT0xFTjtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiT2xlblwiO1xuICB9XG5cbiAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImNvbXBhc3NcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBjbGVhbnVwKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5pbnRlcnZhbHMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZFwiIH0pO1xuXG4gICAgLy8gQXBwbHkgdGhlbWUgb3ZlcnJpZGVzXG4gICAgdGhpcy5hcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3QpO1xuXG4gICAgLy8gR2F0aGVyIGNvbXBsZXRpb24gZGF0YSBmcm9tIHZhdWx0XG4gICAgY29uc3QgY29tcGxldGlvbkRhdGEgPSB0aGlzLmdhdGhlckNvbXBsZXRpb25EYXRhKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGVuZ2luZXNcbiAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBPbGVuRW5naW5lKHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgbm93KTtcblxuICAgIC8vIENhbGVuZGFyIGludGVncmF0aW9uIFx1MjAxNCBnYXRoZXIgY2FsZW5kYXIgdGFza3MgYW5kIGZlZWQgaW50byBlbmdpbmVcbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZSh0aGlzLmFwcCwgc2V0dGluZ3MsIG5vdyk7XG4gICAgY29uc3QgY2FsZW5kYXJUYXNrcyA9IGF3YWl0IHRoaXMuZ2F0aGVyQ2FsZW5kYXJUYXNrcyhjYWxlbmRhckVuZ2luZSk7XG4gICAgY29uc3QgY2FsZW5kYXJFbnRyaWVzID0gY2FsZW5kYXJFbmdpbmUudG9EYXlNYXBFbnRyaWVzKGNhbGVuZGFyVGFza3MpO1xuICAgIGVuZ2luZS5zZXRDYWxlbmRhckVudHJpZXMoY2FsZW5kYXJFbnRyaWVzKTtcblxuICAgIC8vIEJ1aWxkIHNlY3Rpb24gb3JkZXIgZnJvbSBkZXZDb25maWdcbiAgICBjb25zdCBzZWN0aW9uT3JkZXIgPSBzZXR0aW5ncy5kZXZDb25maWcuc2VjdGlvbk9yZGVyO1xuICAgIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQoc2V0dGluZ3MuZGV2Q29uZmlnLmhpZGRlblNlY3Rpb25zKTtcblxuICAgIGxldCBzdGFnZ2VySWR4ID0gMDtcblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uT3JkZXIpIHtcbiAgICAgIGlmIChoaWRkZW4uaGFzKHNlY3Rpb24pKSBjb250aW51ZTtcblxuICAgICAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJoZXJvXCI6XG4gICAgICAgICAgcmVuZGVySGVyb0NhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiaGVhdG1hcFwiOlxuICAgICAgICAgIHJlbmRlclN0cmVuZ3RoSGVhdG1hcChyb290LCBzZXR0aW5ncywgZW5naW5lLCBjb21wbGV0aW9uRGF0YSwgc3RhZ2dlcklkeCsrLCB7XG4gICAgICAgICAgICBvbk11c2NsZUNsaWNrOiAobXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgc2hvd011c2NsZVByb2dyZXNzUG9wdXAobXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Qcm9ncmVzc0NsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dPdmVyYWxsUHJvZ3Jlc3NQb3B1cChzZXR0aW5ncywgY29tcGxldGlvbkRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dNdXNjbGVTZWxlY3Rvcigoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB3b3Jrb3V0IHdpdGggc2VsZWN0ZWQgbXVzY2xlcyBcdTIwMTQgZW50ZXIgd29ya291dCB3b3Jrc3BhY2VcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKFwid29ya291dFwiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sIHRoaXMuYXBwKTtcbiAgICAgICAgICAvLyBXZWlnaHQgbm90aWZpY2F0aW9uIChzaG93cyBvbmx5IHdoZW4gZHVlKVxuICAgICAgICAgIHJlbmRlcldlaWdodE5vdGlmaWNhdGlvbihyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVMb2dXZWlnaHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXVkYWltb25pYVwiOlxuICAgICAgICAgIHJlbmRlckV1ZGFpbW9uaWFCYXIocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCk7XG4gICAgICAgICAgc3RhZ2dlcklkeCArPSAzOyAvLyBldWRhaW1vbmlhIGNhcmQgKyBzdGF0IGNhcmRzICsgY2F0ZWdvcmllcyBjYXJkXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRheW1hcFwiOlxuICAgICAgICAgIHJlbmRlckRheVRpbWVsaW5lKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKywge1xuICAgICAgICAgICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkKSA9PiB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQpLFxuICAgICAgICAgICAgb25Ta2lwOiAoYWN0aXZpdHlJZCkgPT4gdGhpcy5oYW5kbGVTa2lwQWN0aXZpdHkoYWN0aXZpdHlJZCwgZW5naW5lKSxcbiAgICAgICAgICAgIG9uQ2FsZW5kYXJEb25lOiAoZW50cnkpID0+IHRoaXMuaGFuZGxlQ2FsZW5kYXJUYXNrRG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNhbGVuZGFyUG9zdHBvbmU6IChlbnRyeSkgPT4gdGhpcy5oYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNyZWF0ZUV2ZW50OiAoKSA9PiAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRpcmVjdGl2ZVwiOlxuICAgICAgICAgIHJlbmRlckRpcmVjdGl2ZUNhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrLCAoYWN0aXZpdHlJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRlcldvcmtzcGFjZShhY3Rpdml0eUlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYm9zc1wiOlxuICAgICAgICAgIHJlbmRlckJvc3NTdGF0dXNDYXJkKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ3ZWVrbHlcIjpcbiAgICAgICAgICByZW5kZXJXZWVrbHlSaHl0aG0ocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWN0aXZpdGllc1wiOlxuICAgICAgICAgIHJlbmRlckFjdGl2aXR5R3JpZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0ZW1wbGVcIjpcbiAgICAgICAgICByZW5kZXJUZW1wbGVDaGlwcyhyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAodGFza0lkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRlbXBsZVVwZGF0ZSh0YXNrSWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgIHJlbmRlclF1b3RlRm9vdGVyKHJvb3QsIHRoaXMuYXBwLCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAocGFydGlhbCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFydGlhbCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAtLS0gRGF0YSBHYXRoZXJpbmcgLS0tXG5cbiAgZ2F0aGVyQ29tcGxldGlvbkRhdGEoKTogQ29tcGxldGlvbk1hcCB7XG4gICAgY29uc3QgZGF0YTogQ29tcGxldGlvbk1hcCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LmVuYWJsZWQpIGNvbnRpbnVlO1xuICAgICAgZGF0YVthY3Rpdml0eS5pZF0gPSB0aGlzLmdldENvbXBsZXRpb25zRnJvbUZvbGRlcihhY3Rpdml0eS5mb2xkZXIsIGFjdGl2aXR5LnByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcGxldGlvbnNGcm9tRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZywgZmllbGROYW1lOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG5cbiAgICByZXR1cm4gZmlsZXNcbiAgICAgIC5maWx0ZXIoKGZpbGUpID0+IGZpbGUucGF0aCA9PT0gZm9sZGVyUGF0aCB8fCBmaWxlLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBjYWNoZT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGlmICghZnJvbnRtYXR0ZXIgfHwgdHlwZW9mIGZyb250bWF0dGVyW2ZpZWxkTmFtZV0gIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiBmaWxlLmJhc2VuYW1lLFxuICAgICAgICAgIGNvbXBsZXRlZDogZnJvbnRtYXR0ZXJbZmllbGROYW1lXSA9PT0gdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjKTogYyBpcyBDb21wbGV0aW9uID0+IGMgIT09IG51bGwpO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIEdhdGhlcmluZyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGdhdGhlckNhbGVuZGFyVGFza3MoY2FsZW5kYXJFbmdpbmU6IENhbGVuZGFyRW5naW5lKTogUHJvbWlzZTxDYWxlbmRhclRhc2tbXT4ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXMgXHUyMDE0IHJlYWQgdG9kYXkncyBub3RlIGNvbnRlbnRcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyAmJiBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyKSB7XG4gICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBmb2xkZXIgPSBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGYuYmFzZW5hbWUgPT09IHRvZGF5O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYWlseU5vdGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZGFpbHlOb3RlKTtcbiAgICAgICAgdGFza3MucHVzaCguLi5jYWxlbmRhckVuZ2luZS5nZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQsIGRhaWx5Tm90ZS5wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uIEI6IFRhc2tzIFBsdWdpbiBcdTIwMTQgc2NhbiBmb3IgdGFza3Mgd2l0aCB0b2RheSdzIGR1ZSBkYXRlXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKSB7XG4gICAgICBjb25zdCB0YXNrc1BsdWdpbiA9ICh0aGlzLmFwcCBhcyBhbnkpLnBsdWdpbnM/LnBsdWdpbnM/LltcIm9ic2lkaWFuLXRhc2tzLXBsdWdpblwiXTtcbiAgICAgIGlmICh0YXNrc1BsdWdpbikge1xuICAgICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc3QgZmlsZXNXaXRoVGFza3M6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgaWYgKCFjYWNoZT8ubGlzdEl0ZW1zPy5zb21lKChsaSkgPT4gbGkudGFzayAhPT0gdW5kZWZpbmVkKSkgY29udGludWU7XG5cbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgICAvLyBRdWljayBjaGVjazogZG9lcyB0aGUgY29udGVudCBtZW50aW9uIHRvZGF5J3MgZGF0ZSB3aXRoIGEgZHVlIGVtb2ppP1xuICAgICAgICAgIGlmIChjb250ZW50LmluY2x1ZGVzKHRvZGF5KSkge1xuICAgICAgICAgICAgZmlsZXNXaXRoVGFza3MucHVzaCh7IHBhdGg6IGZpbGUucGF0aCwgY29udGVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrcy5wdXNoKC4uLmNhbGVuZGFyRW5naW5lLmdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXNXaXRoVGFza3MpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpb24gQzogUXVpY2sgVGFza3MgXHUyMDE0IGFscmVhZHkgaGFuZGxlZCBieSBDYWxlbmRhckVuZ2luZS5nZXRBbGxUYXNrcygpXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIHRhc2tzLnB1c2goXG4gICAgICAgIC4uLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXkpXG4gICAgICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgICAgIHRpdGxlOiBxdC50aXRsZSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgY29uc3QsXG4gICAgICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBxdC5kdXJhdGlvbixcbiAgICAgICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBIYW5kbGVycyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm47XG5cbiAgICBpZiAoYWN0aXZpdHkuaGFzV29ya3NwYWNlKSB7XG4gICAgICAvLyBPcGVuIG5hdGl2ZSBPbGVuIFdvcmtzcGFjZVZpZXdcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IHtcbiAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBza2lsbHM6IFtdLFxuICAgICAgICBoYXNXb3Jrc3BhY2U6IHRydWUsXG4gICAgICAgIHNraWxsRm9sZGVyOiBhY3Rpdml0eS5za2lsbEZvbGRlcixcbiAgICAgIH07XG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIHRoaXMucGx1Z2luLmFjdGl2YXRlV29ya3NwYWNlVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb24td29ya3NwYWNlIGFjdGl2aXRpZXM6IG1hcmsgZG9uZSBpbW1lZGlhdGVseVxuICAgICAgYXdhaXQgdGhpcy5tYXJrQWN0aXZpdHlEb25lKGFjdGl2aXR5KTtcbiAgICAgIG5ldyBOb3RpY2UoYCR7YWN0aXZpdHkuZW1vaml9ICR7YWN0aXZpdHkubmFtZX0gbWFya2VkIGRvbmUhYCk7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlU2tpcEFjdGl2aXR5KGFjdGl2aXR5SWQ6IHN0cmluZywgZW5naW5lOiBPbGVuRW5naW5lKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTWFyayBhcyBza2lwcGVkIGluIHRoZSBkYXkgbWFwIChlbmdpbmUgc3RhdGUpXG4gICAgY29uc3QgZGF5TWFwID0gZW5naW5lLmdldERheU1hcCgpO1xuICAgIGNvbnN0IGVudHJ5ID0gZGF5TWFwLmZpbmQoKGUpID0+IGUuYWN0aXZpdHlJZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS5zdGF0dXMgPSBcInNraXBwZWRcIjtcbiAgICB9XG4gICAgbmV3IE5vdGljZShcIlNraXBwZWRcIik7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2FsZW5kYXJUYXNrRG9uZShlbnRyeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuRGF5TWFwRW50cnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWVudHJ5LmlzQ2FsZW5kYXJUYXNrIHx8ICFlbnRyeS5jYWxlbmRhclNvdXJjZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKVxuICAgICk7XG5cbiAgICBzd2l0Y2ggKGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOlxuICAgICAgICBpZiAoZW50cnkuZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS50b2dnbGVEYWlseU5vdGVUYXNrKGVudHJ5LmZpbGVQYXRoLCBlbnRyeS5saW5lTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOlxuICAgICAgICBpZiAoZW50cnkuZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS50b2dnbGVUYXNrc1BsdWdpblRhc2soZW50cnkuZmlsZVBhdGgsIGVudHJ5LmxpbmVOdW1iZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiB7XG4gICAgICAgIGNvbnN0IHF0SWQgPSBlbnRyeS5jYWxlbmRhclRhc2tJZD8ucmVwbGFjZShcInF0LVwiLCBcIlwiKTtcbiAgICAgICAgY29uc3QgcXQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbmQoKHEpID0+IHEuaWQgPT09IHF0SWQpO1xuICAgICAgICBpZiAocXQpIHtcbiAgICAgICAgICBxdC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXcgTm90aWNlKGBcXHUyNzEzICR7ZW50cnkuYWN0aXZpdHlOYW1lfWApO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUNhbGVuZGFyVGFza1Bvc3Rwb25lKGVudHJ5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5EYXlNYXBFbnRyeSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgfHwgIWVudHJ5LmNhbGVuZGFyU291cmNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZShcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpXG4gICAgKTtcblxuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHRhc2s6IGltcG9ydChcIi4uL3R5cGVzXCIpLkNhbGVuZGFyVGFzayA9IHtcbiAgICAgIGlkOiBlbnRyeS5jYWxlbmRhclRhc2tJZCA/PyBlbnRyeS5hY3Rpdml0eUlkLFxuICAgICAgdGl0bGU6IGVudHJ5LmFjdGl2aXR5TmFtZSxcbiAgICAgIHNvdXJjZTogZW50cnkuY2FsZW5kYXJTb3VyY2UsXG4gICAgICBkYXRlOiBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIGZpbGVQYXRoOiBlbnRyeS5maWxlUGF0aCxcbiAgICAgIGxpbmVOdW1iZXI6IGVudHJ5LmxpbmVOdW1iZXIsXG4gICAgfTtcblxuICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnBvc3Rwb25lVGFzayh0YXNrKTtcbiAgICBuZXcgTm90aWNlKGBcXHUyM0U5ICR7ZW50cnkuYWN0aXZpdHlOYW1lfSBwb3N0cG9uZWQgdG8gdG9tb3Jyb3dgKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYXJrQWN0aXZpdHlEb25lKGFjdGl2aXR5OiB7IGlkOiBzdHJpbmc7IGZvbGRlcjogc3RyaW5nOyBwcm9wZXJ0eTogc3RyaW5nOyBjYXRlZ29yeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuQ2F0ZWdvcnk7IGRhbWFnZVBlckNvbXBsZXRpb246IG51bWJlciB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgY29uc3QgZm9sZGVyID0gYWN0aXZpdHkuZm9sZGVyO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBMb29rIGZvciB0b2RheSdzIGZpbGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCB0b2RheUZpbGUgPSBmaWxlcy5maW5kKFxuICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICk7XG5cbiAgICBpZiAodG9kYXlGaWxlKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIodG9kYXlGaWxlLCAoZm0pID0+IHtcbiAgICAgICAgZm1bYWN0aXZpdHkucHJvcGVydHldID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHtkYXRlU3RyfS5tZGA7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZVBhdGgsIGAtLS1cXG4ke2FjdGl2aXR5LnByb3BlcnR5fTogdHJ1ZVxcbi0tLVxcbmApO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIE1heSBhbHJlYWR5IGV4aXN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gWFAgKyBib3NzIGRhbWFnZVxuICAgIGNvbnN0IHhwID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbjtcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeVhQW2FjdGl2aXR5LmNhdGVnb3J5XSArPSB4cDtcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAtIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb25cbiAgICApO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVMb2dXZWlnaHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+TG9nIFdlaWdodDwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiIHN0ZXA9XCIwLjFcIiBtaW49XCIyMFwiIG1heD1cIjMwMFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stYWN0aW9uc1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hZGRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYWRkQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYWRkXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuY3VycmVudFdlaWdodCB8fCBcIlwiKTtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdyA9IHBhcnNlRmxvYXQoaW5wdXQudmFsdWUpO1xuICAgICAgaWYgKGlzTmFOKHcpIHx8IHcgPD0gMCkge1xuICAgICAgICBuZXcgTm90aWNlKFwiRW50ZXIgYSB2YWxpZCB3ZWlnaHRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5maW5kKChlKSA9PiBlLmRhdGUgPT09IHRvZGF5KTtcbiAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICBleGlzdGluZy53ZWlnaHQgPSB3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2cucHVzaCh7IGRhdGU6IHRvZGF5LCB3ZWlnaHQ6IHcgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmN1cnJlbnRXZWlnaHQgPSB3O1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5sYXN0V2VpZ2h0TG9nRGF0ZSA9IHRvZGF5O1xuICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICBuZXcgTm90aWNlKGBXZWlnaHQgbG9nZ2VkOiAke3d9IGtnYCk7XG4gICAgICBjbG9zZSgpO1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXQuZm9jdXMoKSwgNTApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVUZW1wbGVVcGRhdGUodGFza0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MuZmluZCgodCkgPT4gdC5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAoIXRhc2spIHJldHVybjtcblxuICAgIHRhc2subGFzdENvbXBsZXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICBuZXcgTm90aWNlKGAke3Rhc2suZW1vaml9ICR7dGFzay5uYW1lfSBjb21wbGV0ZWQhYCk7XG5cbiAgICAvLyBSZS1yZW5kZXJcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLy8gLS0tIFRoZW1lIC0tLVxuXG4gIHByaXZhdGUgYXBwbHlUaGVtZU92ZXJyaWRlcyhyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJyaWRlcyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzO1xuICAgIGlmICghb3ZlcnJpZGVzKSByZXR1cm47XG5cbiAgICBpZiAob3ZlcnJpZGVzLmJnUHJpbWFyeSkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmctcHJpbWFyeVwiLCBvdmVycmlkZXMuYmdQcmltYXJ5KTtcbiAgICBpZiAob3ZlcnJpZGVzLmNhcmRCZykgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY2FyZC1iZ1wiLCBvdmVycmlkZXMuY2FyZEJnKTtcbiAgICBpZiAob3ZlcnJpZGVzLnRleHRQcmltYXJ5KSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LXByaW1hcnlcIiwgb3ZlcnJpZGVzLnRleHRQcmltYXJ5KTtcbiAgICBpZiAob3ZlcnJpZGVzLnRleHRNdXRlZCkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1tdXRlZFwiLCBvdmVycmlkZXMudGV4dE11dGVkKTtcbiAgICBpZiAob3ZlcnJpZGVzLmFjY2VudEdvbGQpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWFjY2VudC1nb2xkXCIsIG92ZXJyaWRlcy5hY2NlbnRHb2xkKTtcbiAgICBpZiAob3ZlcnJpZGVzLmRhbmdlcikgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZGFuZ2VyXCIsIG92ZXJyaWRlcy5kYW5nZXIpO1xuICAgIGlmIChvdmVycmlkZXMuc3VjY2Vzcykgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3VjY2Vzc1wiLCBvdmVycmlkZXMuc3VjY2Vzcyk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEJvc3MgRW5naW5lXG4vLyBSZWFkcyBib3NzIHN0YXRlIGFuZCBwcm92aWRlcyBib3NzLXJlbGF0ZWQgY2FsY3VsYXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIEJvc3NEZWZpbml0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBCT1NTRVMsIFJBTktfVElFUl9DT0xPUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9zc1N0YXR1cyB7XG4gIGJvc3M6IEJvc3NEZWZpbml0aW9uO1xuICBjdXJyZW50SFA6IG51bWJlcjtcbiAgbWF4SFA6IG51bWJlcjtcbiAgcGVyY2VudDogbnVtYmVyO1xuICB0aWVyOiBudW1iZXI7XG4gIHJhbms6IHN0cmluZztcbiAgdGllckNvbG9yOiBzdHJpbmc7XG4gIGluVGFydGFydXM6IGJvb2xlYW47XG4gIGlzRGFuZ2VyWm9uZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEJvc3NFbmdpbmUge1xuICBwcml2YXRlIHNldHRpbmdzOiBPbGVuU2V0dGluZ3M7XG5cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE9sZW5TZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIGdldEJvc3NGb3JUaWVyKHRpZXI6IG51bWJlcik6IEJvc3NEZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIEJPU1NFUy5maW5kKChiKSA9PiBiLnRpZXIgPT09IHRpZXIpID8/IG51bGw7XG4gIH1cblxuICBnZXRDdXJyZW50Qm9zcygpOiBCb3NzRGVmaW5pdGlvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmdldEJvc3NGb3JUaWVyKHRoaXMuc2V0dGluZ3MuY3VycmVudFRpZXIpO1xuICB9XG5cbiAgZ2V0Qm9zc1N0YXR1cygpOiBCb3NzU3RhdHVzIHtcbiAgICBjb25zdCB0aWVyID0gdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllcjtcbiAgICBjb25zdCBib3NzID0gdGhpcy5nZXRDdXJyZW50Qm9zcygpID8/IEJPU1NFU1swXTtcbiAgICBjb25zdCBjdXJyZW50SFAgPSB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFA7XG4gICAgY29uc3QgbWF4SFAgPSB0aGlzLnNldHRpbmdzLmJvc3NNYXhIUDtcbiAgICBjb25zdCBwZXJjZW50ID0gbWF4SFAgPiAwID8gTWF0aC5yb3VuZCgoY3VycmVudEhQIC8gbWF4SFApICogMTAwKSA6IDA7XG4gICAgY29uc3QgdGllckNvbG9yID0gUkFOS19USUVSX0NPTE9SU1t0aWVyXSA/PyBcIiM2QjcyODBcIjtcblxuICAgIHJldHVybiB7XG4gICAgICBib3NzLFxuICAgICAgY3VycmVudEhQLFxuICAgICAgbWF4SFAsXG4gICAgICBwZXJjZW50LFxuICAgICAgdGllcixcbiAgICAgIHJhbms6IGJvc3MucmFuayxcbiAgICAgIHRpZXJDb2xvcixcbiAgICAgIGluVGFydGFydXM6IHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cyxcbiAgICAgIGlzRGFuZ2VyWm9uZTogdGhpcy5pc0RhbmdlclpvbmUoKSxcbiAgICB9O1xuICB9XG5cbiAgaXNEYW5nZXJab25lKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgYm9zc0N1cnJlbnRIUCwgYm9zc01heEhQIH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGlmIChib3NzTWF4SFAgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoYm9zc0N1cnJlbnRIUCAvIGJvc3NNYXhIUCkgPCAwLjE1O1xuICB9XG5cbiAgaXNJblRhcnRhcnVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmluVGFydGFydXM7XG4gIH1cblxuICBnZXRIUENvbG9yKHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHBlcmNlbnQgPiA2MCkgcmV0dXJuIFwiIzIyYzU1ZVwiO1xuICAgIGlmIChwZXJjZW50ID4gMzApIHJldHVybiBcIiNlYWIzMDhcIjtcbiAgICBpZiAocGVyY2VudCA+IDE1KSByZXR1cm4gXCIjZjk3MzE2XCI7XG4gICAgcmV0dXJuIFwiI2VmNDQ0NFwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb3JlIEVuZ2luZVxuLy8gUHJpb3JpdHkgbG9naWMsIHN1Z2dlc3Rpb24gYWxnb3JpdGhtLCBkYXkgbWFwLCBhbmFseXRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7XG4gIE9sZW5TZXR0aW5ncyxcbiAgQWN0aXZpdHlDb25maWcsXG4gIENvbXBsZXRpb24sXG4gIENvbXBsZXRpb25NYXAsXG4gIERpcmVjdGl2ZVN1Z2dlc3Rpb24sXG4gIERheU1hcEVudHJ5LFxuICBDYXRlZ29yeUxldmVsLFxuICBDYXRlZ29yeSxcbiAgUHJpb3JpdHlSZWFzb24sXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgTkVHTEVDVF9MT1JFLFxuICBDSEFQVEVSX05BTUVTLFxuICBTSU5HTEVfRE9NSU5BTlRfVElUTEVTLFxuICBUV09fQ0FURUdPUllfVElUTEVTLFxuICBCQUxBTkNFRF9USVRMRVMsXG4gIHRvUm9tYW4sXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi9Cb3NzRW5naW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBPbGVuRW5naW5lIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuICBwcml2YXRlIGNvbXBsZXRpb25zOiBDb21wbGV0aW9uTWFwO1xuICBwcml2YXRlIG5vdzogRGF0ZTtcbiAgcHJpdmF0ZSB0b2RheTogc3RyaW5nO1xuICBwcml2YXRlIGJvc3NFbmdpbmU6IEJvc3NFbmdpbmU7XG5cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE9sZW5TZXR0aW5ncywgY29tcGxldGlvbnM6IENvbXBsZXRpb25NYXAsIG5vdzogRGF0ZSkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmNvbXBsZXRpb25zID0gY29tcGxldGlvbnM7XG4gICAgdGhpcy5ub3cgPSBub3c7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0aGlzLnRvZGF5ID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICB0aGlzLmJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG4gIH1cblxuICAvLyAtLS0gRWZmZWN0aXZlIERhdGUgKHN1cHBvcnRzIHNpbXVsYXRlZCBkYXRlICsgcGF1c2UpIC0tLVxuXG4gIHByaXZhdGUgZ2V0RWZmZWN0aXZlTm93KCk6IERhdGUge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIHtcbiAgICAgIGNvbnN0IHNpbSA9IG5ldyBEYXRlKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSk7XG4gICAgICBzaW0uc2V0SG91cnMoMTIsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIHNpbTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCIgJiYgdGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zZXR0aW5ncy50b3RhbFBhdXNlZFRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZmZlY3RpdmVUb2RheSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGQgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gIH1cblxuICAvLyAtLS0gRGF0YSBBY2Nlc3MgLS0tXG5cbiAgZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IGEuZW5hYmxlZCk7XG4gIH1cblxuICBnZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQ6IHN0cmluZyk6IENvbXBsZXRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGlvbnNbYWN0aXZpdHlJZF0gPz8gW107XG4gIH1cblxuICBnZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgdG9kYXlNcyA9IG5ldyBEYXRlKGVmZmVjdGl2ZU5vdykuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWREYXRlcyA9IGNvbXBzXG4gICAgICAuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZClcbiAgICAgIC5tYXAoKGMpID0+IG5ldyBEYXRlKGMuZGF0ZSkuZ2V0VGltZSgpKVxuICAgICAgLmZpbHRlcigodCkgPT4gIWlzTmFOKHQpICYmIHQgPD0gdG9kYXlNcylcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG5cbiAgICBpZiAoY29tcGxldGVkRGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gOTk5O1xuXG4gICAgY29uc3QgbXNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKCh0b2RheU1zIC0gY29tcGxldGVkRGF0ZXNbMF0pIC8gbXNQZXJEYXkpO1xuICB9XG5cbiAgaXNEb25lVG9kYXkoYWN0aXZpdHlJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWZmZWN0aXZlVG9kYXkgPSB0aGlzLmdldEVmZmVjdGl2ZVRvZGF5KCk7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgcmV0dXJuIGNvbXBzLnNvbWUoKGMpID0+IGMuZGF0ZSA9PT0gZWZmZWN0aXZlVG9kYXkgJiYgYy5jb21wbGV0ZWQpO1xuICB9XG5cbiAgLy8gLS0tIFdlZWtseSBQcm9ncmVzcyAtLS1cblxuICBnZXRXZWVrbHlQcm9ncmVzcyhhY3Rpdml0eUlkOiBzdHJpbmcpOiB7IGRvbmU6IG51bWJlcjsgdGFyZ2V0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuIHsgZG9uZTogMCwgdGFyZ2V0OiAwIH07XG5cbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3Qgd2Vla0VuZCA9IG5ldyBEYXRlKHdlZWtTdGFydCk7XG4gICAgd2Vla0VuZC5zZXREYXRlKHdlZWtFbmQuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBkb25lID0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICB9KS5sZW5ndGg7XG5cbiAgICByZXR1cm4geyBkb25lLCB0YXJnZXQ6IGFjdGl2aXR5LndlZWtseVRhcmdldCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXZWVrU3RhcnQoZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGlmZiA9IGQuZ2V0RGF0ZSgpIC0gZGF5ICsgKGRheSA9PT0gMCA/IC02IDogMSk7IC8vIE1vbmRheSBzdGFydFxuICAgIGQuc2V0RGF0ZShkaWZmKTtcbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIC8vIC0tLSBTdHJlYWtzIC0tLVxuXG4gIGdldEFjdGl2aXR5U3RyZWFrKGFjdGl2aXR5SWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKGVmZmVjdGl2ZU5vdyk7XG4gICAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWREYXRlcyA9IGNvbXBzXG4gICAgICAuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZClcbiAgICAgIC5tYXAoKGMpID0+IHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGQpID0+ICFpc05hTihkLmdldFRpbWUoKSkgJiYgZCA8PSB0b2RheSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmdldFRpbWUoKSAtIGEuZ2V0VGltZSgpKTtcblxuICAgIGlmIChjb21wbGV0ZWREYXRlcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xuXG4gICAgbGV0IHN0cmVhayA9IDA7XG4gICAgY29uc3QgY2hlY2tEYXRlID0gbmV3IERhdGUoY29tcGxldGVkRGF0ZXNbMF0pO1xuICAgIGZvciAoY29uc3QgZGF0ZSBvZiBjb21wbGV0ZWREYXRlcykge1xuICAgICAgaWYgKGRhdGUuZ2V0VGltZSgpID09PSBjaGVja0RhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgIHN0cmVhaysrO1xuICAgICAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGUgPCBjaGVja0RhdGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJlYWs7XG4gIH1cblxuICBnZXRPdmVyYWxsU3RyZWFrKCk6IG51bWJlciB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcbiAgICBjb25zdCBzdHJlYWtzID0gYWN0aXZpdGllcy5tYXAoKGEpID0+IHRoaXMuZ2V0QWN0aXZpdHlTdHJlYWsoYS5pZCkpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCAuLi5zdHJlYWtzKTtcbiAgfVxuXG4gIC8vIC0tLSBBbmFseXRpY3MgLS0tXG5cbiAgZ2V0VG90YWxDb21wbGV0aW9ucygpOiBudW1iZXIge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIHRvdGFsICs9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgZ2V0RGF5c09mUHJlc2VuY2UoKTogbnVtYmVyIHtcbiAgICBjb25zdCBkYXlzU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIGZvciAoY29uc3QgYyBvZiBjb21wcykge1xuICAgICAgICBpZiAoYy5jb21wbGV0ZWQpIGRheXNTZXQuYWRkKGMuZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXlzU2V0LnNpemU7XG4gIH1cblxuICAvLyAtLS0gQ2F0ZWdvcnkgWFAgJiBMZXZlbHMgLS0tXG5cbiAgZ2V0Q2F0ZWdvcnlYUChjYXRlZ29yeTogQ2F0ZWdvcnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHhwUGVyID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uO1xuICAgIGxldCB4cCA9IHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUFtjYXRlZ29yeV0gPz8gMDtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBpZiAoYWN0aXZpdHkuY2F0ZWdvcnkgIT09IGNhdGVnb3J5KSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIHhwID0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoICogeHBQZXI7XG4gICAgfVxuICAgIHJldHVybiB4cDtcbiAgfVxuXG4gIGdldENhdGVnb3J5TGV2ZWwoY2F0ZWdvcnk6IENhdGVnb3J5KTogQ2F0ZWdvcnlMZXZlbCB7XG4gICAgY29uc3QgeHAgPSB0aGlzLmdldENhdGVnb3J5WFAoY2F0ZWdvcnkpO1xuICAgIGNvbnN0IGxldmVsID0gTWF0aC5mbG9vcih4cCAvIDEwMCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NUb05leHQgPSB4cCAlIDEwMDtcbiAgICByZXR1cm4geyBjYXRlZ29yeSwgeHAsIGxldmVsLCBwcm9ncmVzc1RvTmV4dCB9O1xuICB9XG5cbiAgZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKTogQ2F0ZWdvcnlMZXZlbFtdIHtcbiAgICByZXR1cm4gKFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pLm1hcCgoYykgPT4gdGhpcy5nZXRDYXRlZ29yeUxldmVsKGMpKTtcbiAgfVxuXG4gIGdldEV1ZGFpbW9uaWFJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldEFsbENhdGVnb3J5TGV2ZWxzKCkucmVkdWNlKChzdW0sIGNsKSA9PiBzdW0gKyBjbC5sZXZlbCwgMCk7XG4gIH1cblxuICBnZXRDaGFwdGVyKCk6IHsgbnVtYmVyOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gICAgY29uc3QgY2hhcHRlck51bSA9IE1hdGgubWluKDEwLCBNYXRoLmZsb29yKGluZGV4IC8gMTApICsgMSk7XG4gICAgY29uc3QgbmFtZSA9IENIQVBURVJfTkFNRVNbY2hhcHRlck51bV0gPz8gXCJJbml0aWF0ZVwiO1xuICAgIHJldHVybiB7IG51bWJlcjogY2hhcHRlck51bSwgbmFtZSB9O1xuICB9XG5cbiAgZ2V0RXVkYWltb25pYVByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuICAgIHJldHVybiAoaW5kZXggJSAxMCkgKiAxMDsgLy8gMC0xMDAgcHJvZ3Jlc3Mgd2l0aGluIGNoYXB0ZXJcbiAgfVxuXG4gIC8vIC0tLSBEeW5hbWljIFRpdGxlIC0tLVxuXG4gIGdldER5bmFtaWNUaXRsZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGUpIHJldHVybiB0aGlzLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGU7XG5cbiAgICBjb25zdCBsZXZlbHMgPSB0aGlzLmdldEFsbENhdGVnb3J5TGV2ZWxzKCk7XG4gICAgY29uc3QgdG90YWxDb21wbGV0aW9ucyA9IHRoaXMuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlDb21wbGV0aW9uczogUmVjb3JkPENhdGVnb3J5LCBudW1iZXI+ID0geyBib2R5OiAwLCBtaW5kOiAwLCBzcGlyaXQ6IDAgfTtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgY2F0ZWdvcnlDb21wbGV0aW9uc1thY3Rpdml0eS5jYXRlZ29yeV0gKz0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsID0gT2JqZWN0LnZhbHVlcyhjYXRlZ29yeUNvbXBsZXRpb25zKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBpZiAodG90YWwgPT09IDApIHJldHVybiBcIkluaXRpYXRlXCI7XG5cbiAgICBjb25zdCB3ZWlnaHRzOiBSZWNvcmQ8Q2F0ZWdvcnksIG51bWJlcj4gPSB7XG4gICAgICBib2R5OiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLmJvZHkgLyB0b3RhbCA6IDAsXG4gICAgICBtaW5kOiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLm1pbmQgLyB0b3RhbCA6IDAsXG4gICAgICBzcGlyaXQ6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMuc3Bpcml0IC8gdG90YWwgOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCB0aWVyID0gdG90YWxDb21wbGV0aW9ucyA8IDUwID8gXCJsaWdodFwiIDogdG90YWxDb21wbGV0aW9ucyA8IDIwMCA/IFwibWlkXCIgOiBcImhlYXZ5XCI7XG5cbiAgICAvLyBDaGVjayBzaW5nbGUgZG9taW5hbnQgKD49IDcwJSlcbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKSB7XG4gICAgICBpZiAod2VpZ2h0c1tjYXRdID49IDAuNzApIHtcbiAgICAgICAgcmV0dXJuIFNJTkdMRV9ET01JTkFOVF9USVRMRVNbY2F0XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBiYWxhbmNlZCAoYWxsID49IDI1JSlcbiAgICBpZiAod2VpZ2h0cy5ib2R5ID49IDAuMjUgJiYgd2VpZ2h0cy5taW5kID49IDAuMjUgJiYgd2VpZ2h0cy5zcGlyaXQgPj0gMC4yNSkge1xuICAgICAgcmV0dXJuIEJBTEFOQ0VEX1RJVExFU1t0aWVyXSA/PyBcIkluaXRpYXRlIG9mIEJhbGFuY2VcIjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB0d28tY2F0ZWdvcnkgY29tYmluYXRpb25zIChlYWNoID49IDMwJSlcbiAgICBjb25zdCBjYXRzID0gKFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pXG4gICAgICAuZmlsdGVyKChjKSA9PiB3ZWlnaHRzW2NdID49IDAuMzApXG4gICAgICAuc29ydCgpO1xuXG4gICAgaWYgKGNhdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBrZXkgPSBjYXRzLmpvaW4oXCIrXCIpO1xuICAgICAgcmV0dXJuIFRXT19DQVRFR09SWV9USVRMRVNba2V5XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjazogdXNlIGRvbWluYW50IGNhdGVnb3J5XG4gICAgY29uc3QgZG9taW5hbnQgPSAoT2JqZWN0LmVudHJpZXMod2VpZ2h0cykgYXMgW0NhdGVnb3J5LCBudW1iZXJdW10pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pWzBdWzBdO1xuICAgIHJldHVybiBTSU5HTEVfRE9NSU5BTlRfVElUTEVTW2RvbWluYW50XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgfVxuXG4gIC8vIC0tLSBTdWdnZXN0aW9uIEFsZ29yaXRobSAoV2F0ZXJmYWxsKSAtLS1cblxuICBnZXRTdWdnZXN0aW9uKCk6IERpcmVjdGl2ZVN1Z2dlc3Rpb24gfCBudWxsIHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuICAgIGlmIChhY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyAxLiBERUFUSCBDSEVDS1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICAgIGNvbnN0IHRhcmdldCA9IG5lZ2xlY3RlZC5sZW5ndGggPiAwID8gbmVnbGVjdGVkWzBdIDogYWN0aXZpdGllcy5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSlbMF07XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odGFyZ2V0LCBcImRlYXRoXCIsIFwiRXNjYXBlIFRhcnRhcnVzIFx1MjAxNCBjb21wbGV0ZSB5b3VyIHBlbmFuY2UuXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmZhaWxlZFRocmVzaG9sZERheXMgPj0gMikge1xuICAgICAgY29uc3QgbmVnbGVjdGVkID0gdGhpcy5nZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXMpO1xuICAgICAgaWYgKG5lZ2xlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihuZWdsZWN0ZWRbMF0sIFwiZGVhdGhcIiwgXCJEZWF0aCBsb29tcy4gQWN0IG5vdyBvciBkZXNjZW5kIHRvIFRhcnRhcnVzLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBCT1NTIEZJTklTSFxuICAgIGlmICh0aGlzLmJvc3NFbmdpbmUuaXNEYW5nZXJab25lKCkpIHtcbiAgICAgIGNvbnN0IGJlc3QgPSB0aGlzLmdldEhpZ2hlc3REYW1hZ2VBY3Rpdml0eShhY3Rpdml0aWVzKTtcbiAgICAgIGlmIChiZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihiZXN0LCBcImJvc3NcIiwgXCJPbmUgZmluYWwgYmxvdyByZW1haW5zLiBGaW5pc2ggdGhlIGJlYXN0LlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBORUdMRUNUICsgUFJJT1JJVFlcbiAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcyk7XG4gICAgaWYgKG5lZ2xlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmFwcGx5UnVsZXMobmVnbGVjdGVkKTtcbiAgICAgIGlmICh0b3ApIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUodG9wLmlkKTtcbiAgICAgICAgY29uc3QgbG9yZSA9IE5FR0xFQ1RfTE9SRVt0b3AuaWRdID8/IGAke2RheXN9IGRheXMgc2luY2UgeW91IGxhc3QgcHJhY3RpY2VkLiBUaGUgc2tpbGwgYXRyb3BoaWVzLmA7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0b3AsIFwibmVnbGVjdFwiLCBsb3JlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiBXRUVLTFkgQ0FUQ0gtVVBcbiAgICBjb25zdCBiZWhpbmRTY2hlZHVsZSA9IHRoaXMuZ2V0QmVoaW5kU2NoZWR1bGVBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmIChiZWhpbmRTY2hlZHVsZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0b3AgPSBiZWhpbmRTY2hlZHVsZVswXTtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyh0b3AuaWQpO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRvcCwgXCJ3ZWVrbHlcIiwgYEJlaGluZCBzY2hlZHVsZTogJHtwcm9ncmVzcy5kb25lfS8ke3Byb2dyZXNzLnRhcmdldH0gdGhpcyB3ZWVrLmApO1xuICAgIH1cblxuICAgIC8vIDUuIENIQUlOIENIRUNLXG4gICAgY29uc3QgY2hhaW5lZCA9IHRoaXMuZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKGNoYWluZWQubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGNoYWluZWRbMF0sIFwiY2hhaW5cIiwgXCJZb3VyIHByZXJlcXVpc2l0ZSBpcyBkb25lLiBUaW1lIGZvciB0aGUgbmV4dCBzdGVwLlwiKTtcbiAgICB9XG5cbiAgICAvLyA2LiBUSU1FLUJBU0VEXG4gICAgY29uc3QgdGltZUJhc2VkID0gdGhpcy5nZXRUaW1lQmFzZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmICh0aW1lQmFzZWQubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRpbWVCYXNlZFswXSwgXCJ0aW1lXCIsIFwiVGhlIHRpbWUgaXMgcmlnaHQuIEJlZ2luLlwiKTtcbiAgICB9XG5cbiAgICAvLyA3LiBCQUxBTkNFRCBGQUxMQkFDS1xuICAgIGNvbnN0IGxvbmdlc3RHYXAgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGIuaWQpIC0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhLmlkKSk7XG5cbiAgICBpZiAobG9uZ2VzdEdhcC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24obG9uZ2VzdEdhcFswXSwgXCJiYWxhbmNlZFwiLCBcIkJhbGFuY2UgeW91ciBwYXRoLiBUaGlzIGhhcyB3YWl0ZWQgbG9uZ2VzdC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU3VnZ2VzdGlvbihcbiAgICBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsXG4gICAgcmVhc29uOiBQcmlvcml0eVJlYXNvbixcbiAgICBsb3JlVGV4dDogc3RyaW5nXG4gICk6IERpcmVjdGl2ZVN1Z2dlc3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgIHJlYXNvbixcbiAgICAgIGRheXNTaW5jZUxhc3REb25lOiB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKSxcbiAgICAgIGxvcmVUZXh0LFxuICAgICAgcHJpb3JpdHk6IGFjdGl2aXR5LnByaW9yaXR5LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGEuaWQpO1xuICAgICAgICByZXR1cm4gZGF5cyA+PSBhLm5lZ2xlY3RUaHJlc2hvbGQgJiYgIXRoaXMuaXNEb25lVG9kYXkoYS5pZCk7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlSdWxlcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWcgfCBudWxsIHtcbiAgICAvLyBBY3Rpdml0aWVzIHdpdGggYmxvY2tpbmcgcnVsZXMgZ2V0IHRvcCBwcmlvcml0eSBcdTIwMTQgdGhleSBzdXBwcmVzcyBvdGhlcnNcbiAgICBjb25zdCBibG9ja2VycyA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmJsb2NrcyAmJiBhLmJsb2Nrcy5sZW5ndGggPiAwKTtcbiAgICBpZiAoYmxvY2tlcnMubGVuZ3RoID4gMCkgcmV0dXJuIGJsb2NrZXJzWzBdO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICAvLyBDaGVjayBhbHRlcm5hdGluZyBydWxlXG4gICAgICBpZiAoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpIHtcbiAgICAgICAgY29uc3QgYWx0RGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICBjb25zdCB0aGlzRGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgICAgICAvLyBJZiB0aGlzIHdhcyBkb25lIG1vcmUgcmVjZW50bHkgdGhhbiBhbHRlcm5hdGUsIHByZWZlciBhbHRlcm5hdGVcbiAgICAgICAgaWYgKHRoaXNEYXlzIDwgYWx0RGF5cykge1xuICAgICAgICAgIGNvbnN0IGFsdCA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCk7XG4gICAgICAgICAgaWYgKGFsdCAmJiBhbHQuZW5hYmxlZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhbHQuaWQpKSByZXR1cm4gYWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgYWN0aXZpdHkgaXMgYmxvY2tlZCBieSBhIG5lZ2xlY3RlZCBibG9ja2VyXG4gICAgICBjb25zdCBpc0Jsb2NrZWQgPSBhY3Rpdml0aWVzLnNvbWUoKG90aGVyKSA9PlxuICAgICAgICBvdGhlci5ibG9ja3M/LmluY2x1ZGVzKGFjdGl2aXR5LmlkKSAmJiBvdGhlci5pZCAhPT0gYWN0aXZpdHkuaWRcbiAgICAgICk7XG4gICAgICBpZiAoaXNCbG9ja2VkKSBjb250aW51ZTsgLy8gc2tpcCBcdTIwMTQgYSBibG9ja2VyIHRha2VzIHByZWNlZGVuY2VcblxuICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZpdGllc1swXSA/PyBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgY29uc3Qgbm90RG9uZSA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgaWYgKG5vdERvbmUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbm90RG9uZS5zb3J0KChhLCBiKSA9PiBiLmRhbWFnZVBlckNvbXBsZXRpb24gLSBhLmRhbWFnZVBlckNvbXBsZXRpb24pWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZWZmZWN0aXZlTm93LmdldERheSgpOyAvLyAwPVN1blxuICAgIGNvbnN0IGFkanVzdGVkRGF5ID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlazsgLy8gTW9uPTFcbiAgICBjb25zdCByZW1haW5pbmdEYXlzID0gNyAtIGFkanVzdGVkRGF5ICsgMTsgLy8gaW5jbHVkaW5nIHRvZGF5XG5cbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3MoYS5pZCk7XG4gICAgICAgIGNvbnN0IGRlZmljaXQgPSBwcm9ncmVzcy50YXJnZXQgLSBwcm9ncmVzcy5kb25lO1xuICAgICAgICBpZiAoZGVmaWNpdCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIEJlaGluZCBpZiBuZWVkZWQgcGFjZSAoZGVmaWNpdC9yZW1haW5pbmcpIGV4Y2VlZHMgYXZlcmFnZSBwYWNlICh0YXJnZXQvNylcbiAgICAgICAgLy8gRXF1aXZhbGVudDogZGVmaWNpdCAqIDcgPiB0YXJnZXQgKiByZW1haW5pbmdEYXlzXG4gICAgICAgIHJldHVybiBkZWZpY2l0ICogNyA+IHByb2dyZXNzLnRhcmdldCAqIHJlbWFpbmluZ0RheXM7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKCFhLmNoYWluQWZ0ZXIgfHwgdGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuaXNEb25lVG9kYXkoYS5jaGFpbkFmdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgY29uc3QgaG91ciA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IGN1cnJlbnRQZXJpb2QgPSBob3VyIDwgbW9ybmluZ0VuZCA/IFwibW9ybmluZ1wiIDpcbiAgICAgIGhvdXIgPCBhZnRlcm5vb25FbmQgPyBcImFmdGVybm9vblwiIDpcbiAgICAgIGhvdXIgPCBldmVuaW5nRW5kID8gXCJldmVuaW5nXCIgOiBcImFueXRpbWVcIjtcblxuICAgIC8vIEZpcnN0IGNoZWNrIHRpbWUgb3ZlcnJpZGVzXG4gICAgY29uc3Qgb3ZlcnJpZGRlbiA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFhLnRpbWVPdmVycmlkZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGhvdXIgPj0gYS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyICYmIGhvdXIgPCBhLnRpbWVPdmVycmlkZS5lbmRIb3VyO1xuICAgIH0pO1xuICAgIGlmIChvdmVycmlkZGVuLmxlbmd0aCA+IDApIHJldHVybiBvdmVycmlkZGVuLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIC8vIFRoZW4gY2hlY2sgcHJlZmVycmVkIHRpbWVcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkgJiYgKGEucHJlZmVycmVkVGltZSA9PT0gY3VycmVudFBlcmlvZCB8fCBhLnByZWZlcnJlZFRpbWUgPT09IFwiYW55dGltZVwiKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICAvLyAtLS0gRGF5IE1hcCBHZW5lcmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgY2FsZW5kYXJFbnRyaWVzOiBEYXlNYXBFbnRyeVtdID0gW107XG5cbiAgc2V0Q2FsZW5kYXJFbnRyaWVzKGVudHJpZXM6IERheU1hcEVudHJ5W10pOiB2b2lkIHtcbiAgICB0aGlzLmNhbGVuZGFyRW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXREYXlNYXAoKTogRGF5TWFwRW50cnlbXSB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKS5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kLCBidWZmZXJNaW51dGVzIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IHRpbWVTbG90czogeyBwZXJpb2Q6IHN0cmluZzsgc3RhcnRIb3VyOiBudW1iZXI7IGVuZEhvdXI6IG51bWJlciB9W10gPSBbXG4gICAgICB7IHBlcmlvZDogXCJtb3JuaW5nXCIsIHN0YXJ0SG91cjogbW9ybmluZ1N0YXJ0LCBlbmRIb3VyOiBtb3JuaW5nRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJhZnRlcm5vb25cIiwgc3RhcnRIb3VyOiBtb3JuaW5nRW5kLCBlbmRIb3VyOiBhZnRlcm5vb25FbmQgfSxcbiAgICAgIHsgcGVyaW9kOiBcImV2ZW5pbmdcIiwgc3RhcnRIb3VyOiBhZnRlcm5vb25FbmQsIGVuZEhvdXI6IGV2ZW5pbmdFbmQgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgZW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gMS4gUGxhY2UgdGltZS1vdmVycmlkZSBhY3Rpdml0aWVzIGZpcnN0XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LnRpbWVPdmVycmlkZSkgY29udGludWU7XG4gICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgc3RhcnRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyLFxuICAgICAgICBlbmRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuZW5kSG91cixcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ0aW1lXCIsXG4gICAgICB9KTtcbiAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgIH1cblxuICAgIC8vIDIuIFBsYWNlIG5lZ2xlY3RlZCBhY3Rpdml0aWVzIGluIHRoZWlyIHByZWZlcnJlZCBzbG90c1xuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKVxuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBuZWdsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIm5lZ2xlY3RcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFBsYWNlIHJlbWFpbmluZyB3ZWVrbHktdGFyZ2V0IGFjdGl2aXRpZXNcbiAgICBjb25zdCByZW1haW5pbmcgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhc2NoZWR1bGVkLmhhcyhhLmlkKSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKGEuaWQpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MuZG9uZSA8IHByb2dyZXNzLnRhcmdldDtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZW1haW5pbmcpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIndlZWtseVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2NoZWR1bGVkLmFkZChhY3Rpdml0eS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgY2FsZW5kYXIgdGFzayBlbnRyaWVzXG4gICAgZm9yIChjb25zdCBjYWxFbnRyeSBvZiB0aGlzLmNhbGVuZGFyRW50cmllcykge1xuICAgICAgZW50cmllcy5wdXNoKGNhbEVudHJ5KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IGJ5IHN0YXJ0IHRpbWVcbiAgICBlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRIb3VyIC0gYi5zdGFydEhvdXIpO1xuXG4gICAgLy8gTWFyayBkb25lIGFjdGl2aXRpZXMgKG9ubHkgZm9yIG5vbi1jYWxlbmRhciBlbnRyaWVzKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayAmJiB0aGlzLmlzRG9uZVRvZGF5KGVudHJ5LmFjdGl2aXR5SWQpKSB7XG4gICAgICAgIGVudHJ5LnN0YXR1cyA9IFwiZG9uZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2xvdEZvckFjdGl2aXR5KFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdLFxuICAgIGV4aXN0aW5nOiBEYXlNYXBFbnRyeVtdLFxuICAgIGJ1ZmZlck1pbnV0ZXM6IG51bWJlclxuICApOiB7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfSB8IG51bGwge1xuICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbiAvIDYwO1xuICAgIGNvbnN0IGJ1ZmZlckhvdXJzID0gYnVmZmVyTWludXRlcyAvIDYwO1xuXG4gICAgLy8gRmluZCBwcmVmZXJyZWQgc2xvdFxuICAgIGNvbnN0IHByZWZlcnJlZFNsb3QgPSB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IGFjdGl2aXR5LnByZWZlcnJlZFRpbWUpXG4gICAgICA/PyB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IFwiYW55dGltZVwiKVxuICAgICAgPz8gdGltZVNsb3RzWzBdO1xuXG4gICAgLy8gRmluZCBmaXJzdCBhdmFpbGFibGUgdGltZSBpbiBwcmVmZXJyZWQgc2xvdFxuICAgIGxldCBjYW5kaWRhdGVTdGFydCA9IHByZWZlcnJlZFNsb3Quc3RhcnRIb3VyO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHByZWZlcnJlZFNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgY2FuZGlkYXRlU3RhcnQgPSBlbnRyeS5lbmRIb3VyICsgYnVmZmVySG91cnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FuZGlkYXRlRW5kID0gY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzO1xuICAgIGlmIChjYW5kaWRhdGVFbmQgPD0gcHJlZmVycmVkU2xvdC5lbmRIb3VyKSB7XG4gICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVFbmQgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgYW55IHNsb3RcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgdGltZVNsb3RzKSB7XG4gICAgICBpZiAoc2xvdCA9PT0gcHJlZmVycmVkU2xvdCkgY29udGludWU7XG4gICAgICBjYW5kaWRhdGVTdGFydCA9IHNsb3Quc3RhcnRIb3VyO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgICBpZiAoZW50cnkuc3RhcnRIb3VyIDwgc2xvdC5lbmRIb3VyICYmIGVudHJ5LmVuZEhvdXIgPiBjYW5kaWRhdGVTdGFydCkge1xuICAgICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIDw9IHNsb3QuZW5kSG91cikge1xuICAgICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVTdGFydCArIGR1cmF0aW9uSG91cnMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgRGF0YSBmb3IgQmFyIENoYXJ0IC0tLVxuXG4gIGdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTogQXJyYXk8eyBkYXk6IHN0cmluZzsgZGF0ZTogc3RyaW5nOyBjb21wbGV0aW9uczogTWFwPENhdGVnb3J5LCBudW1iZXI+IH0+IHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3QgZGF5cyA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgaSk7XG4gICAgICBjb25zdCBkYXRlU3RyID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGRheUNvbXBsZXRpb25zID0gbmV3IE1hcDxDYXRlZ29yeSwgbnVtYmVyPigpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGRhdGVTdHIgJiYgYy5jb21wbGV0ZWQpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYXlDb21wbGV0aW9ucy5nZXQoYWN0aXZpdHkuY2F0ZWdvcnkpID8/IDA7XG4gICAgICAgICAgZGF5Q29tcGxldGlvbnMuc2V0KGFjdGl2aXR5LmNhdGVnb3J5LCBjdXJyZW50ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goeyBkYXk6IGRheXNbaV0sIGRhdGU6IGRhdGVTdHIsIGNvbXBsZXRpb25zOiBkYXlDb21wbGV0aW9ucyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk6IG51bWJlciB7XG4gICAgY29uc3Qgd2Vla2x5ID0gdGhpcy5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gICAgcmV0dXJuIHdlZWtseS5maWx0ZXIoKGQpID0+IHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICByZXR1cm4gdG90YWwgPiAwO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuXG4gIGdldEJlc3REYXlUaGlzV2VlaygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIGxldCBiZXN0ID0gd2Vla2x5WzBdO1xuICAgIGxldCBiZXN0VG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgZCBvZiB3ZWVrbHkpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICBpZiAodG90YWwgPiBiZXN0VG90YWwpIHtcbiAgICAgICAgYmVzdFRvdGFsID0gdG90YWw7XG4gICAgICAgIGJlc3QgPSBkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVzdFRvdGFsID4gMCA/IGJlc3QuZGF5IDogXCItLVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDYWxlbmRhciBFbmdpbmVcbi8vIFJlYWRzIHRhc2tzIGZyb20gRGFpbHkgTm90ZXMsIFRhc2tzIHBsdWdpbiwgYW5kIFF1aWNrIFRhc2tzXG4vLyBNZXJnZXMgdGhlbSBpbnRvIENhbGVuZGFyVGFza1tdIGZvciBEYXkgTWFwIGludGVncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7XG4gIE9sZW5TZXR0aW5ncyxcbiAgQ2FsZW5kYXJUYXNrLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2FsZW5kYXJUYXNrU291cmNlLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRW5naW5lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuICBwcml2YXRlIHRvZGF5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIG5vdzogRGF0ZSkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRoaXMudG9kYXkgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIE1haW4gZW50cnk6IGdldCBhbGwgY2FsZW5kYXIgdGFza3MgZm9yIHRvZGF5IC0tLVxuXG4gIGdldEFsbFRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXREYWlseU5vdGVUYXNrcygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFRhc2tzUGx1Z2luVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFF1aWNrVGFza3MoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIENvbnZlcnQgQ2FsZW5kYXJUYXNrcyB0byBEYXlNYXBFbnRyaWVzIC0tLVxuXG4gIHRvRGF5TWFwRW50cmllcyh0YXNrczogQ2FsZW5kYXJUYXNrW10pOiBEYXlNYXBFbnRyeVtdIHtcbiAgICByZXR1cm4gdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBzdGFydEhvdXIgPSB0YXNrLnRpbWUgPyB0aGlzLnBhcnNlVGltZVRvSG91cih0YXNrLnRpbWUpIDogOTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSAodGFzay5kdXJhdGlvbiA/PyAzMCkgLyA2MDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZpdHlJZDogYGNhbC0ke3Rhc2suaWR9YCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiB0YXNrLnRpdGxlLFxuICAgICAgICBlbW9qaTogdGhpcy5nZXRTb3VyY2VFbW9qaSh0YXNrLnNvdXJjZSksXG4gICAgICAgIGNhdGVnb3J5OiBcIm1pbmRcIiBhcyBjb25zdCwgLy8gY2FsZW5kYXIgdGFza3MgZGVmYXVsdCB0byBtaW5kXG4gICAgICAgIHN0YXJ0SG91cixcbiAgICAgICAgZW5kSG91cjogc3RhcnRIb3VyICsgZHVyYXRpb25Ib3VycyxcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IHRhc2suZHVyYXRpb24gPz8gMzAsXG4gICAgICAgIHN0YXR1czogdGFzay5kb25lID8gXCJkb25lXCIgYXMgY29uc3QgOiBcInBlbmRpbmdcIiBhcyBjb25zdCxcbiAgICAgICAgaXNDYWxlbmRhclRhc2s6IHRydWUsXG4gICAgICAgIGNhbGVuZGFyU291cmNlOiB0YXNrLnNvdXJjZSxcbiAgICAgICAgY2FsZW5kYXJUYXNrSWQ6IHRhc2suaWQsXG4gICAgICAgIGZpbGVQYXRoOiB0YXNrLmZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiB0YXNrLmxpbmVOdW1iZXIsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBBOiBEYWlseSBOb3RlcyBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGdldERhaWx5Tm90ZVRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBmb2xkZXIgPSB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXI7XG4gICAgaWYgKCFmb2xkZXIpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBGaW5kIHRvZGF5J3MgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IGRhaWx5Tm90ZSA9IGZpbGVzLmZpbmQoKGYpID0+IHtcbiAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBmLmJhc2VuYW1lID09PSB0aGlzLnRvZGF5O1xuICAgIH0pO1xuXG4gICAgaWYgKCFkYWlseU5vdGUpIHJldHVybiBbXTtcblxuICAgIC8vIFJlYWQgY2FjaGVkIGNvbnRlbnQgYW5kIHBhcnNlIHRhc2tzXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShkYWlseU5vdGUpO1xuICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgaWYgKGxpc3RJdGVtLnRhc2sgPT09IHVuZGVmaW5lZCkgY29udGludWU7IC8vIG5vdCBhIGNoZWNrYm94XG5cbiAgICAgIGNvbnN0IGxpbmVTdGFydCA9IGxpc3RJdGVtLnBvc2l0aW9uLnN0YXJ0LmxpbmU7XG5cbiAgICAgIC8vIFJlYWQgdGhlIGxpbmUgY29udGVudCBmcm9tIGNhY2hlIHNlY3Rpb25zXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRMaW5lQ29udGVudChkYWlseU5vdGUsIGxpbmVTdGFydCk7XG4gICAgICBpZiAoIWNvbnRlbnQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUoY29udGVudCk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICBpZDogYGRuLSR7ZGFpbHlOb3RlLnBhdGh9LUwke2xpbmVTdGFydH1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogbGlzdEl0ZW0udGFzayA9PT0gXCJ4XCIgfHwgbGlzdEl0ZW0udGFzayA9PT0gXCJYXCIsXG4gICAgICAgIGZpbGVQYXRoOiBkYWlseU5vdGUucGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogbGluZVN0YXJ0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gUGFyc2UgXCItIFsgXSBUYXNrIG5hbWUgQDE0OjAwIH4zMG1cIiBmb3JtYXRcbiAgcHJpdmF0ZSBwYXJzZVRhc2tMaW5lKGxpbmU6IHN0cmluZyk6IHsgdGl0bGU6IHN0cmluZzsgdGltZT86IHN0cmluZzsgZHVyYXRpb24/OiBudW1iZXIgfSB8IG51bGwge1xuICAgIC8vIFJlbW92ZSBjaGVja2JveCBwcmVmaXg6IFwiLSBbIF0gXCIgb3IgXCItIFt4XSBcIlxuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXlstKl1cXHMqXFxbLj9cXF1cXHMqKC4rKSQvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0ZXh0ID0gbWF0Y2hbMV0udHJpbSgpO1xuXG4gICAgLy8gRXh0cmFjdCBAdGltZSAoZS5nLiwgQDE0OjAwIG9yIEAycG0pXG4gICAgbGV0IHRpbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB0aW1lTWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AKFxcZHsxLDJ9KTooXFxkezJ9KVxcYi8pO1xuICAgIGlmICh0aW1lTWF0Y2gpIHtcbiAgICAgIHRpbWUgPSBgJHt0aW1lTWF0Y2hbMV0ucGFkU3RhcnQoMiwgXCIwXCIpfToke3RpbWVNYXRjaFsyXX1gO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSh0aW1lTWF0Y2hbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJ5IEAycG0gLyBAMTQgZm9ybWF0XG4gICAgICBjb25zdCBzaW1wbGVUaW1lID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSlcXHMqKGFtfHBtKT9cXGIvaSk7XG4gICAgICBpZiAoc2ltcGxlVGltZSkge1xuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KHNpbXBsZVRpbWVbMV0pO1xuICAgICAgICBjb25zdCBwZXJpb2QgPSBzaW1wbGVUaW1lWzJdPy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcInBtXCIgJiYgaG91ciA8IDEyKSBob3VyICs9IDEyO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcImFtXCIgJiYgaG91ciA9PT0gMTIpIGhvdXIgPSAwO1xuICAgICAgICB0aW1lID0gYCR7U3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsIFwiMFwiKX06MDBgO1xuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHNpbXBsZVRpbWVbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IH5kdXJhdGlvbiAoZS5nLiwgfjMwbSwgfjFoLCB+MS41aClcbiAgICBsZXQgZHVyYXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBkdXJhdGlvbk1hdGNoID0gdGV4dC5tYXRjaCgvfihcXGQrKD86XFwuXFxkKyk/KVxccyoobXxtaW58aHxocnxob3VyKXM/XFxiL2kpO1xuICAgIGlmIChkdXJhdGlvbk1hdGNoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoZHVyYXRpb25NYXRjaFsxXSk7XG4gICAgICBjb25zdCB1bml0ID0gZHVyYXRpb25NYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgZHVyYXRpb24gPSB1bml0LnN0YXJ0c1dpdGgoXCJoXCIpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIDYwKSA6IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShkdXJhdGlvbk1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgYW55IHRyYWlsaW5nL2xlYWRpbmcgd2hpdGVzcGFjZSBvciBkYXNoZXNcbiAgICBjb25zdCB0aXRsZSA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xuICAgIGlmICghdGl0bGUpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHRpbWUsIGR1cmF0aW9uIH07XG4gIH1cblxuICBwcml2YXRlIGdldExpbmVDb250ZW50KGZpbGU6IFRGaWxlLCBsaW5lTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBVc2UgdGhlIG1ldGFkYXRhQ2FjaGUgc2VjdGlvbnMgdG8gcmVjb25zdHJ1Y3QgbGluZSBjb250ZW50XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBpZiAoIWNhY2hlKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIFdlIG5lZWQgdG8gcmVhZCBmcm9tIHRoZSB2YXVsdCBjYWNoZSBcdTIwMTQgdHJ5IGdldHRpbmcgY29udGVudCB2aWEgc2VjdGlvbnNcbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBzeW5jaHJvbm91c2x5IHJlYWQgZmlsZSBjb250ZW50LCB1c2UgdGhlIGNhY2hlZCBmcm9udG1hdHRlclxuICAgIC8vIGFuZCBsaXN0IGl0ZW1zIHRvIGJ1aWxkIHdoYXQgd2UgbmVlZFxuICAgIC8vIEFjdHVhbGx5LCBsaXN0IGl0ZW1zIGluIE9ic2lkaWFuIGNhY2hlIGRvbid0IGluY2x1ZGUgdGhlIHRleHQuXG4gICAgLy8gV2UnbGwgbmVlZCB0byByZWFkIHRoZSBmaWxlIGNvbnRlbnQuIFN0b3JlIGl0IGluIGEgbWFwIGR1cmluZyBnYXRoZXIgcGhhc2UuXG4gICAgLy8gRm9yIG5vdywgcmV0dXJuIG51bGwgXHUyMDE0IHRoZSBEYXNoYm9hcmRWaWV3IHdpbGwgcHJlLXJlYWQgZGFpbHkgbm90ZSBjb250ZW50XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDYWxsZWQgYnkgRGFzaGJvYXJkVmlldyB3aXRoIHByZS1yZWFkIGZpbGUgY29udGVudFxuICBnZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQ6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZyk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAvLyBNYXRjaCB0YXNrIGxpbmVzOiAtIFsgXSBvciAtIFt4XVxuICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2ZpbGVQYXRofS1MJHtpfWAsXG4gICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJkYWlseS1ub3RlXCIsXG4gICAgICAgIGRhdGU6IHRoaXMudG9kYXksXG4gICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBpc0RvbmUsXG4gICAgICAgIGZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiBpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW4gSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXRUYXNrc1BsdWdpblRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICAvLyBDaGVjayBpZiBUYXNrcyBwbHVnaW4gaXMgaW5zdGFsbGVkXG4gICAgY29uc3QgdGFza3NQbHVnaW4gPSAodGhpcy5hcHAgYXMgYW55KS5wbHVnaW5zPy5wbHVnaW5zPy5bXCJvYnNpZGlhbi10YXNrcy1wbHVnaW5cIl07XG4gICAgaWYgKCF0YXNrc1BsdWdpbikgcmV0dXJuIFtdO1xuXG4gICAgLy8gVGFza3MgcGx1Z2luIHN0b3JlcyB0YXNrcyB2aWEgbWV0YWRhdGEgY2FjaGVcbiAgICAvLyBXZSBzY2FuIGFsbCBmaWxlcyBmb3IgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgbWF0Y2hpbmcgdG9kYXlcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgY29udGludWU7XG5cbiAgICAgIGZvciAoY29uc3QgbGlzdEl0ZW0gb2YgY2FjaGUubGlzdEl0ZW1zKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFRhc2tzIHBsdWdpbiB1c2VzIGVtb2ppLWJhc2VkIGRhdGVzIGluIHRoZSB0ZXh0OlxuICAgICAgICAvLyBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERCBmb3IgZHVlIGRhdGVcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZWFkIHRoZSBmaWxlIHRvIGNoZWNrLCBidXQgd2UgY2FuIHVzZSB0aGUgZnJvbnRtYXR0ZXItYmFzZWRcbiAgICAgICAgLy8gYXBwcm9hY2ggb3IgdGhlIHBvc2l0aW9uIHRvIGdldCB0aGUgdGV4dC5cbiAgICAgICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luYy1yZWFkLCB3ZSdsbCBjaGVjayBpZiBwb3NpdGlvbnMgbWVudGlvbiB0b2RheS5cbiAgICAgICAgLy8gRm9yIG5vdywgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IGNoZWNrIHVzaW5nIGNhY2hlIGRhdGEuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtc2Nhbm5lZCB0YXNrIGRhdGFcbiAgZ2V0VGFza3NQbHVnaW5UYXNrc0Zyb21GaWxlcyhmaWxlczogeyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9W10pOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGxpbmVzID0gZmlsZS5jb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBUYXNrcyBwbHVnaW4gZHVlIGRhdGU6IFx1RDgzRFx1RENDNSBZWVlZLU1NLUREXG4gICAgICAgIGNvbnN0IGR1ZU1hdGNoID0gbGluZS5tYXRjaCgvXFx1ezFGNEM1fVxccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoIWR1ZU1hdGNoIHx8IGR1ZU1hdGNoWzFdICE9PSB0aGlzLnRvZGF5KSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICAgIGlmICghcGFyc2VkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBBbHNvIGNoZWNrIGZvciBzY2hlZHVsZWQgZGF0ZSBcdTIzRjNcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVkTWF0Y2ggPSBsaW5lLm1hdGNoKC9cXHUyM0YzXFxzKihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvdSk7XG4gICAgICAgIGlmIChzY2hlZHVsZWRNYXRjaCAmJiBzY2hlZHVsZWRNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgaXNEb25lID0gL15bLSpdXFxzKlxcW1t4WF1cXF0vLnRlc3QobGluZSk7XG5cbiAgICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgICAgaWQ6IGB0cC0ke2ZpbGUucGF0aH0tTCR7aX1gLFxuICAgICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUucmVwbGFjZSgvW1xcdXsxRjRDNX1cXHUyM0YzXVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS9ndSwgXCJcIikudHJpbSgpLFxuICAgICAgICAgIHNvdXJjZTogXCJ0YXNrcy1wbHVnaW5cIixcbiAgICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBDOiBCdWlsdC1pbiBRdWljayBUYXNrcyAtLS1cblxuICBwcml2YXRlIGdldFF1aWNrVGFza3MoKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgIC5maWx0ZXIoKHF0KSA9PiBxdC5kYXRlID09PSB0aGlzLnRvZGF5KVxuICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgIGlkOiBgcXQtJHtxdC5pZH1gLFxuICAgICAgICB0aXRsZTogcXQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgQ2FsZW5kYXJUYXNrU291cmNlLFxuICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICB0aW1lOiBxdC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcXQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICB9KSk7XG4gIH1cblxuICAvLyAtLS0gQ29tcGxldGlvbiBoYW5kbGVycyAtLS1cblxuICAvLyBUb2dnbGUgYSBkYWlseSBub3RlIHRhc2sgZG9uZS91bmRvbmUgYnkgcmV3cml0aW5nIHRoZSBjaGVja2JveFxuICBhc3luYyB0b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoOiBzdHJpbmcsIGxpbmVOdW1iZXI6IG51bWJlciwgZG9uZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgIGlmIChsaW5lTnVtYmVyID49IGxpbmVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVOdW1iZXJdO1xuICAgIGlmIChkb25lKSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiW3hdXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiWyBdXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBsaW5lcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBhIFRhc2tzIHBsdWdpbiB0YXNrXG4gIGFzeW5jIHRvZ2dsZVRhc2tzUGx1Z2luVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBTYW1lIG1lY2hhbmlzbSBhcyBkYWlseSBub3RlcyBcdTIwMTQganVzdCB0b2dnbGUgdGhlIGNoZWNrYm94XG4gICAgYXdhaXQgdGhpcy50b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoLCBsaW5lTnVtYmVyLCBkb25lKTtcbiAgfVxuXG4gIC8vIFBvc3Rwb25lIGEgdGFzayB0byB0b21vcnJvd1xuICBhc3luYyBwb3N0cG9uZVRhc2sodGFzazogQ2FsZW5kYXJUYXNrKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0aGlzLnRvZGF5KTtcbiAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuICAgIGNvbnN0IHRvbW9ycm93U3RyID0gdG9tb3Jyb3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICBpZiAodGFzay5zb3VyY2UgPT09IFwicXVpY2stdGFza1wiKSB7XG4gICAgICAvLyBVcGRhdGUgaW4gc2V0dGluZ3NcbiAgICAgIGNvbnN0IHF0ID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbmQoXG4gICAgICAgIChxKSA9PiBgcXQtJHtxLmlkfWAgPT09IHRhc2suaWQgfHwgcS5pZCA9PT0gdGFzay5pZC5yZXBsYWNlKFwicXQtXCIsIFwiXCIpXG4gICAgICApO1xuICAgICAgaWYgKHF0KSB7XG4gICAgICAgIHF0LnBvc3Rwb25lZEZyb20gPSBxdC5wb3N0cG9uZWRGcm9tID8/IHF0LmRhdGU7XG4gICAgICAgIHF0LmRhdGUgPSB0b21vcnJvd1N0cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhc2suc291cmNlID09PSBcInRhc2tzLXBsdWdpblwiICYmIHRhc2suZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0YXNrLmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZmlsZVxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0YXNrLmZpbGVQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgIGlmICh0YXNrLmxpbmVOdW1iZXIgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgbGluZXNbdGFzay5saW5lTnVtYmVyXSA9IGxpbmVzW3Rhc2subGluZU51bWJlcl0ucmVwbGFjZShcbiAgICAgICAgICAvXFx1ezFGNEM1fVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS91LFxuICAgICAgICAgIGBcXHV7MUY0QzV9ICR7dG9tb3Jyb3dTdHJ9YFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEhlbHBlcnMgLS0tXG5cbiAgcHJpdmF0ZSBwYXJzZVRpbWVUb0hvdXIodGltZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBbaCwgbV0gPSB0aW1lLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gaCArIChtID8/IDApIC8gNjA7XG4gIH1cblxuICBwcml2YXRlIGdldFNvdXJjZUVtb2ppKHNvdXJjZTogQ2FsZW5kYXJUYXNrU291cmNlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogcmV0dXJuIFwiXFx1ezFGNEREfVwiO1xuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOiByZXR1cm4gXCJcXHUyNjExXFx1RkUwRlwiO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogcmV0dXJuIFwiXFx1MjZBMVwiO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgSGVybyBDYXJkIENvbXBvbmVudFxuLy8gRnVsbC13aWR0aCBibHVycmVkIGJnIHdpdGggZ3JlZXRpbmcsIHJhbmsgYmFkZ2UsIGFjdGlvbiBidXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5pbXBvcnQgeyB0b1JvbWFuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVyb0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBoZXJvID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm9cIiB9KTtcbiAgaGVyby5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gQmFja2dyb3VuZCBpbWFnZVxuICBpZiAoc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpIHtcbiAgICBjb25zdCBiZyA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1iZ1wiIH0pO1xuICAgIGNvbnN0IHZhdWx0UGF0aCA9IHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kO1xuICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3ZhdWx0UGF0aH1cIilgO1xuICB9XG5cbiAgLy8gRGFyayB2aWduZXR0ZSBvdmVybGF5XG4gIGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1vdmVybGF5XCIgfSk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWNvbnRlbnRcIiB9KTtcblxuICAvLyBUaW1lLWJhc2VkIGdyZWV0aW5nXG4gIGNvbnN0IGdyZWV0aW5nID0gZ2V0R3JlZXRpbmcoc2V0dGluZ3MpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWdyZWV0aW5nXCIsXG4gICAgdGV4dDogYCR7Z3JlZXRpbmd9LCAke3NldHRpbmdzLnVzZXJOYW1lfS5gLFxuICB9KTtcblxuICAvLyBDb250ZXh0dWFsIHN1YnRpdGxlXG4gIGNvbnN0IHN1YnRpdGxlID0gZ2V0U3VidGl0bGUoc2V0dGluZ3MsIGVuZ2luZSk7XG4gIGNvbnRlbnQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tc3VidGl0bGVcIixcbiAgICB0ZXh0OiBzdWJ0aXRsZSxcbiAgfSk7XG5cbiAgLy8gUmFuayBiYWRnZSBwaWxsXG4gIGNvbnN0IHRpdGxlID0gZW5naW5lLmdldER5bmFtaWNUaXRsZSgpO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgY29uc3QgYmFkZ2UgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tcmFuay1iYWRnZVwiIH0pO1xuICBiYWRnZS5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tcmFuay10ZXh0XCIsXG4gICAgdGV4dDogYCR7dGl0bGV9IFx1MDBCNyAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYWN0aW9uc1wiIH0pO1xuXG4gIGNvbnN0IHByb2dyZXNzQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIllvdXIgcHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBldWRhaW1vbmlhIHNlY3Rpb25cbiAgICBjb25zdCBldWRTZWN0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1jYXJkXCIpO1xuICAgIGlmIChldWRTZWN0aW9uKSBldWRTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlZmxlY3RCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWJ0blwiLFxuICAgIHRleHQ6IFwiUmVmbGVjdFwiLFxuICB9KTtcbiAgcmVmbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgcXVvdGUgc2VjdGlvblxuICAgIGNvbnN0IHF1b3RlU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVvdGVcIik7XG4gICAgaWYgKHF1b3RlU2VjdGlvbikgcXVvdGVTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmVldGluZyhzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgY29uc3QgbGFiZWxzID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscztcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpO1xuXG4gIGlmIChob3VyID49IDUgJiYgaG91ciA8IDEyKSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX21vcm5pbmcgPz8gXCJHb29kIG1vcm5pbmdcIjtcbiAgaWYgKGhvdXIgPj0gMTIgJiYgaG91ciA8IDE3KSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX2FmdGVybm9vbiA/PyBcIkdvb2QgYWZ0ZXJub29uXCI7XG4gIGlmIChob3VyID49IDE3ICYmIGhvdXIgPCAyMSkgcmV0dXJuIGxhYmVscy5ncmVldGluZ19ldmVuaW5nID8/IFwiR29vZCBldmVuaW5nXCI7XG4gIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfbmlnaHQgPz8gXCJHb29kIG5pZ2h0XCI7XG59XG5cbmZ1bmN0aW9uIGdldFN1YnRpdGxlKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGVuZ2luZTogT2xlbkVuZ2luZSk6IHN0cmluZyB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG5cbiAgLy8gVGFydGFydXNcbiAgaWYgKHNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICByZXR1cm4gXCJUaGUgdW5kZXJ3b3JsZCBhd2FpdHMgeW91ciBwZW5hbmNlLlwiO1xuICB9XG5cbiAgLy8gQm9zcyBkYW5nZXIgem9uZVxuICBpZiAoYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgIHJldHVybiBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuXCI7XG4gIH1cblxuICAvLyBBY3RpdmUgc3RyZWFrXG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGlmIChzdHJlYWsgPj0gMykge1xuICAgIHJldHVybiBgJHtzdHJlYWt9IGRheXMgc3Ryb25nLiBLZWVwIHRoZSBmbGFtZS5gO1xuICB9XG5cbiAgLy8gRGVmYXVsdFxuICByZXR1cm4gXCJTdGVwIGJ5IHN0ZXAsIHlvdSBzaGFwZSB5b3VyIHBhdGguXCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBFdWRhaW1vbmlhIEJhciBDb21wb25lbnRcbi8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXIsIHN0YXQgY2FyZHMsIGNhdGVnb3J5IHJvd3Mgd2l0aCBpY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQ0FURUdPUllfSUNPTlM6IFJlY29yZDxDYXRlZ29yeSwgc3RyaW5nPiA9IHtcbiAgYm9keTogXCJcXHV7MUYzQ0J9XCIsIC8vIHdlaWdodGxpZnRlclxuICBtaW5kOiBcIlxcdXsxRjREQX1cIiwgLy8gYm9va3NcbiAgc3Bpcml0OiBcIlxcdXsxRjU0QX1cIiwgLy8gZG92ZVxufTtcblxuY29uc3QgVE9UQUxfU0VHTUVOVFMgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFCYXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICAvLyAtLS0gMS4gRXVkYWltb25pYSBDYXJkIChzZWdtZW50ZWQgYmFyICsgY2hhcHRlcikgLS0tXG4gIHJlbmRlckV1ZGFpbW9uaWFDYXJkKGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlckluZGV4KTtcblxuICAvLyAtLS0gMi4gU3RhdCBDYXJkcyBSb3cgKHNlcGFyYXRlIGZyb20gdGhlIGNhcmQpIC0tLVxuICByZW5kZXJTdGF0Q2FyZHMoY29udGFpbmVyLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDEpO1xuXG4gIC8vIC0tLSAzLiBDYXRlZ29yaWVzIENhcmQgKGljb24gcm93cyB3aXRoIGJhcnMpIC0tLVxuICByZW5kZXJDYXRlZ29yaWVzQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDIpO1xufVxuXG4vLyAtLS0tIEV1ZGFpbW9uaWEgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEhlYWRlcjogdGl0bGUgKyBYUFxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtaGVhZGVyXCIgfSk7XG4gIGNvbnN0IGV1ZEluZGV4ID0gZW5naW5lLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuXG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS10aXRsZVwiLFxuICAgIHRleHQ6IGBFdWRhaW1vbmlhICR7dG9Sb21hbihldWRJbmRleCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG90YWxYUCA9IGVuZ2luZS5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wueHAsIDApO1xuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEteHBcIixcbiAgICB0ZXh0OiBgJHt0b3RhbFhQfSBYUGAsXG4gIH0pO1xuXG4gIC8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBlbmdpbmUuZ2V0RXVkYWltb25pYVByb2dyZXNzKCk7IC8vIDAtMTAwXG4gIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcihwcm9ncmVzcyAvIFRPVEFMX1NFR01FTlRTKTtcbiAgY29uc3QgaGFzUGFydGlhbCA9IHByb2dyZXNzICUgVE9UQUxfU0VHTUVOVFMgPiAwO1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRzXCIgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUT1RBTF9TRUdNRU5UUzsgaSsrKSB7XG4gICAgbGV0IGNscyA9IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRcIjtcbiAgICBpZiAoaSA8IGZpbGxlZFNlZ21lbnRzKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtZmlsbGVkXCI7XG4gICAgfSBlbHNlIGlmIChpID09PSBmaWxsZWRTZWdtZW50cyAmJiBoYXNQYXJ0aWFsKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtcGFydGlhbFwiO1xuICAgIH1cbiAgICBzZWdtZW50cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gIH1cblxuICAvLyBDaGFwdGVyIGxhYmVsXG4gIGNvbnN0IGNoYXB0ZXIgPSBlbmdpbmUuZ2V0Q2hhcHRlcigpO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWNoYXB0ZXJcIixcbiAgICB0ZXh0OiBgQ2hhcHRlciAke3RvUm9tYW4oY2hhcHRlci5udW1iZXIpfTogJHtjaGFwdGVyLm5hbWV9YCxcbiAgfSk7XG59XG5cbi8vIC0tLS0gU3RhdCBDYXJkcyAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclN0YXRDYXJkcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdHMtZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCB0b3RhbFRhc2tzID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcbiAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldE92ZXJhbGxTdHJlYWsoKTtcbiAgY29uc3QgcHJlc2VuY2UgPSBlbmdpbmUuZ2V0RGF5c09mUHJlc2VuY2UoKTtcblxuICAvLyBPYmplY3RpdmVzIGNhcmRcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUYzQUZ9XCIsIHRvdGFsVGFza3MsIFwiT2JqZWN0aXZlc1wiKTtcblxuICAvLyBTdHJlYWsgY2FyZCAod2l0aCBzdHJlYWsgZG90cylcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUY1MjV9XCIsIHN0cmVhaywgXCJTdHJlYWtcIiwgc3RyZWFrKTtcblxuICAvLyBDb25zaXN0ZW5jeSBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezI3Mjh9XCIsIHByZXNlbmNlLCBcIkNvbnNpc3RlbmN5XCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0Q2FyZChcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgaWNvbjogc3RyaW5nLFxuICB2YWx1ZTogbnVtYmVyLFxuICBsYWJlbDogc3RyaW5nLFxuICBzdHJlYWtEYXlzPzogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zdGF0LWNhcmRcIiB9KTtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWljb25cIiwgdGV4dDogaWNvbiB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC12YWx1ZVwiLCB0ZXh0OiBTdHJpbmcodmFsdWUpIH0pO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFN0cmVhayBkb3RzIChzaG93IGxhc3QgNyBkYXlzKVxuICBpZiAoc3RyZWFrRGF5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG90cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWRvdHNcIiB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgbGV0IGNscyA9IFwib2xlbi1zdGF0LWRvdFwiO1xuICAgICAgaWYgKGkgPCBzdHJlYWtEYXlzKSB7XG4gICAgICAgIGNscyArPSBcIiBvbGVuLXN0YXQtZG90LWFjdGl2ZVwiO1xuICAgICAgfVxuICAgICAgZG90cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0gQ2F0ZWdvcmllcyBDYXJkIC0tLS1cblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllc0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gRHluYW1pYyB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWR5bmFtaWMtdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG5cbiAgLy8gRGl2aWRlclxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBDYXRlZ29yeSByb3dzXG4gIGNvbnN0IGdyaWQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3JpZXMtZ3JpZFwiIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICB7IGtleTogXCJtaW5kXCIsIGxhYmVsOiBcIk1pbmRcIiB9LFxuICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICBdO1xuXG4gIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9IGVuZ2luZS5nZXRDYXRlZ29yeUxldmVsKGNhdC5rZXkpO1xuICAgIGNvbnN0IGNvbG9yID0gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV07XG5cbiAgICBjb25zdCByb3cgPSBncmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LXJvd1wiIH0pO1xuXG4gICAgLy8gSWNvbiBib3hcbiAgICBjb25zdCBpY29uQm94ID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWljb25cIiB9KTtcbiAgICBpY29uQm94LnN0eWxlLmJhY2tncm91bmQgPSBgJHtjb2xvcn0yMmA7IC8vIDEzJSBvcGFjaXR5IHRpbnRcbiAgICBpY29uQm94LnRleHRDb250ZW50ID0gQ0FURUdPUllfSUNPTlNbY2F0LmtleV07XG5cbiAgICAvLyBJbmZvIGNvbHVtblxuICAgIGNvbnN0IGluZm8gPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktaW5mb1wiIH0pO1xuXG4gICAgLy8gTmFtZSArIGxldmVsIHJvd1xuICAgIGNvbnN0IG5hbWVSb3cgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LW5hbWUtcm93XCIgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lXCIsIHRleHQ6IGNhdC5sYWJlbCB9KTtcbiAgICBuYW1lUm93LmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1jYXRlZ29yeS1sZXZlbC10ZXh0XCIsXG4gICAgICB0ZXh0OiBgTHYgJHtsZXZlbC5sZXZlbH0gXHUwMEI3ICR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9LzEwMGAsXG4gICAgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyBiYXJcbiAgICBjb25zdCBiYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhclwiIH0pO1xuICAgIGNvbnN0IGZpbGwgPSBiYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktYmFyLWZpbGxcIiB9KTtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9JWA7XG4gICAgZmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERpcmVjdGl2ZSBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBjYXJkIG9uIGRhc2hib2FyZCArIGV4cGFuZGVkIGJvdHRvbS1zaGVldCBvdmVybGF5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFByaW9yaXR5UmVhc29uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXJlY3RpdmVDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvbkVudGVyV29ya3NwYWNlPzogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHN1Z2dlc3Rpb24gPSBlbmdpbmUuZ2V0U3VnZ2VzdGlvbigpO1xuICBpZiAoIXN1Z2dlc3Rpb24pIHJldHVybjtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGlyZWN0aXZlX3RpdGxlID8/IFwiVEhFIERJUkVDVElWRVwiO1xuICBjb25zdCBiZWdpbkxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5iZWdpbl93b3Jrc3BhY2UgPz8gXCJFTlRFUiBXT1JLU1BBQ0VcIjtcbiAgY29uc3Qgbm90Tm93TGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLm5vdF9ub3cgPz8gXCJOT1QgTk9XXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ29tcGFjdCBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZCBvbGVuLWRpcmVjdGl2ZVwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXIgd2l0aCBiYWRnZVxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1oZWFkZXJcIiB9KTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYmFkZ2VcIiB9KTtcbiAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhZGdlQ29sb3Ioc3VnZ2VzdGlvbi5yZWFzb24pO1xuXG4gIC8vIEFjdGl2aXR5IGluZm9cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGl2aXR5XCIsXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICBjb25zdCBuZWdsZWN0VGV4dCA9IHN1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmUgPCA5OTlcbiAgICA/IGAke3N1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmV9IGRheXMgbmVnbGVjdGVkYFxuICAgIDogXCJOb3QgeWV0IHN0YXJ0ZWRcIjtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLW5lZ2xlY3RcIiwgdGV4dDogbmVnbGVjdFRleHQgfSk7XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBiZWdpbkJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogYmVnaW5MYWJlbCxcbiAgfSk7XG4gIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25FbnRlcldvcmtzcGFjZT8uKHN1Z2dlc3Rpb24uYWN0aXZpdHlJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdE5vd0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBub3ROb3dMYWJlbCxcbiAgfSk7XG4gIG5vdE5vd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIERpc21pc3MgdGhpcyBjYXJkIHdpdGggYSBmYWRlXG4gICAgY2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTEwcHgpXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zcyBlYXNlXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LCAzMDApO1xuICB9KTtcblxuICAvLyBUYXAgY2FyZCB0byBleHBhbmRcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dFeHBhbmRlZERpcmVjdGl2ZShjb250YWluZXIsIHNldHRpbmdzLCBzdWdnZXN0aW9uLCBiZWdpbkxhYmVsLCBub3ROb3dMYWJlbCwgb25FbnRlcldvcmtzcGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RXhwYW5kZWREaXJlY3RpdmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN1Z2dlc3Rpb246IHsgYWN0aXZpdHlJZDogc3RyaW5nOyBhY3Rpdml0eU5hbWU6IHN0cmluZzsgZW1vamk6IHN0cmluZzsgcmVhc29uOiBQcmlvcml0eVJlYXNvbjsgZGF5c1NpbmNlTGFzdERvbmU6IG51bWJlcjsgbG9yZVRleHQ6IHN0cmluZyB9LFxuICBiZWdpbkxhYmVsOiBzdHJpbmcsXG4gIG5vdE5vd0xhYmVsOiBzdHJpbmcsXG4gIG9uRW50ZXJXb3Jrc3BhY2U/OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgLy8gQ3JlYXRlIG92ZXJsYXlcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcblxuICAvLyBIYW5kbGUgYmFyXG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIC8vIFRpdGxlXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsXG4gICAgdGV4dDogc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kaXJlY3RpdmVfdGl0bGUgPz8gXCJUSEUgRElSRUNUSVZFXCIsXG4gIH0pO1xuXG4gIC8vIEFjdGl2aXR5IG5hbWVcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAyMnB4OyBtYXJnaW46IDE2cHggMCA4cHg7XCIgfSxcbiAgICB0ZXh0OiBgJHtzdWdnZXN0aW9uLmVtb2ppfSAke3N1Z2dlc3Rpb24uYWN0aXZpdHlOYW1lfWAsXG4gIH0pO1xuXG4gIC8vIE5lZ2xlY3QgZGVzY3JpcHRpb25cbiAgY29uc3QgbmVnbGVjdERlc2MgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gXG4gICAgOiBcIkEgbmV3IHBhdGggYXdhaXRzLiBUYWtlIHRoZSBmaXJzdCBzdGVwLlwiO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib2R5LWl0YWxpY1wiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTJweDtcIiB9LFxuICAgIHRleHQ6IG5lZ2xlY3REZXNjLFxuICB9KTtcblxuICAvLyBMb3JlIHRleHRcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXNoZWV0LWxvcmVcIixcbiAgICB0ZXh0OiBgXCIke3N1Z2dlc3Rpb24ubG9yZVRleHR9XCJgLFxuICB9KTtcblxuICAvLyBSYW5kb20gcXVvdGVcbiAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICBjb25zdCBxdW90ZVNlY3Rpb24gPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1xdW90ZVwiIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgfSk7XG4gIHF1b3RlU2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgfSk7XG5cbiAgLy8gQWN0aW9uc1xuICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcbiAgYWN0aW9ucy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgYWN0aW9ucy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgICBvbkVudGVyV29ya3NwYWNlPy4oc3VnZ2VzdGlvbi5hY3Rpdml0eUlkKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90Tm93QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgIHRleHQ6IG5vdE5vd0xhYmVsLFxuICB9KTtcbiAgbm90Tm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICAvLyBDbG9zZSBvbiBvdmVybGF5IHRhcFxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVNoZWV0KCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgLy8gQXBwZW5kIGFuZCBhbmltYXRlIGluXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJhZGdlQ29sb3IocmVhc29uOiBQcmlvcml0eVJlYXNvbik6IHN0cmluZyB7XG4gIHN3aXRjaCAocmVhc29uKSB7XG4gICAgY2FzZSBcImRlYXRoXCI6IHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgICBjYXNlIFwiYm9zc1wiOiByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgY2FzZSBcIm5lZ2xlY3RcIjogcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIGNhc2UgXCJ3ZWVrbHlcIjogcmV0dXJuIFwiIzNiODJmNlwiO1xuICAgIGNhc2UgXCJjaGFpblwiOiByZXR1cm4gXCIjOGI1Y2Y2XCI7XG4gICAgY2FzZSBcInRpbWVcIjogcmV0dXJuIFwiIzA2YjZkNFwiO1xuICAgIGNhc2UgXCJiYWxhbmNlZFwiOiByZXR1cm4gXCIjZmZmZmZmXCI7XG4gICAgZGVmYXVsdDogcmV0dXJuIFwiIzkyOGQ4NVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIFN0YXR1cyBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBib3NzIEhQIGJhciB3aXRoIHRpZXIgYW5kIHJhbmtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0Jvc3NFbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvc3NTdGF0dXNDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG4gIGNvbnN0IHN0YXR1cyA9IGJvc3NFbmdpbmUuZ2V0Qm9zc1N0YXR1cygpO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5ib3NzX3N0YXR1c190aXRsZSA/PyBcIkJPU1MgU1RBVFVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2FyZFxuICBjb25zdCBjYXJkQ2xzID0gc3RhdHVzLmluVGFydGFydXMgPyBcIm9sZW4tY2FyZC1jb21wYWN0IG9sZW4tY2FyZC10YXJ0YXJ1c1wiIDogXCJvbGVuLWNhcmQtY29tcGFjdFwiO1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogY2FyZENscyB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gUm93OiBlbW9qaSArIGluZm9cbiAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ib3NzLXJvd1wiIH0pO1xuXG4gIHJvdy5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWJvc3MtZW1vamlcIiwgdGV4dDogZ2V0Qm9zc0Vtb2ppKHN0YXR1cy50aWVyKSB9KTtcblxuICBjb25zdCBpbmZvID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWJvc3MtaW5mb1wiIH0pO1xuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYm9zcy1uYW1lXCIsIHRleHQ6IHN0YXR1cy5ib3NzLm5hbWUgfSk7XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWJvc3MtdGllclwiLFxuICAgIHRleHQ6IGBUaWVyICR7c3RhdHVzLnRpZXJ9IFx1MDBCNyAke3N0YXR1cy5yYW5rfWAsXG4gIH0pO1xuXG4gIC8vIEhQIGJhclxuICBjb25zdCBocEJhciA9IGluZm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taHAtYmFyXCIgfSk7XG4gIGNvbnN0IGhwRmlsbCA9IGhwQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhwLWJhci1maWxsXCIgfSk7XG4gIGhwRmlsbC5zdHlsZS53aWR0aCA9IGAke3N0YXR1cy5wZXJjZW50fSVgO1xuICBocEZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGJvc3NFbmdpbmUuZ2V0SFBDb2xvcihzdGF0dXMucGVyY2VudCk7XG5cbiAgLy8gSFAgdGV4dFxuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib3NzLWhwLXRleHRcIixcbiAgICB0ZXh0OiBgJHtzdGF0dXMuY3VycmVudEhQfS8ke3N0YXR1cy5tYXhIUH0gSFAgKCR7c3RhdHVzLnBlcmNlbnR9JSlgLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9zc0Vtb2ppKHRpZXI6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGVtb2ppczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgICAxOiBcIlxcdXsxRjQ3Qn1cIiwgMjogXCJcXHV7MUY5REN9XCIsIDM6IFwiXFx1ezFGNDA5fVwiLCA0OiBcIlxcdXsxRjQwMn1cIixcbiAgICA1OiBcIlxcdXsxRjQwRH1cIiwgNjogXCJcXHV7MUY5ODF9XCIsIDc6IFwiXFx1ezFGNTI1fVwiLCA4OiBcIlxcdXsxRjQzQX1cIixcbiAgICA5OiBcIlxcdXsxRjMwQX1cIiwgMTA6IFwiXFx1ezFGNDdGfVwiLCAxMTogXCJcXHV7MUYzMjl9XCIsIDEyOiBcIlxcdTIzMUJcIixcbiAgICAxMzogXCJcXHV7MUYzMDB9XCIsXG4gIH07XG4gIHJldHVybiBlbW9qaXNbdGllcl0gPz8gXCJcXHUyNjk0XFx1RkUwRlwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgV2Vla2x5IFJoeXRobSBDb21wb25lbnRcbi8vIDctZGF5IGJhciBjaGFydCB3aXRoIGNhdGVnb3J5IHN0YWNraW5nICsgc3RhdHMgcm93XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXZWVrbHlSaHl0aG0oXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMud2Vla2x5X3JoeXRobV90aXRsZSA/PyBcIldFRUtMWSBSSFlUSE1cIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBTdGF0cyByb3dcbiAgY29uc3Qgc3RhdHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0c1wiIH0pO1xuXG4gIGNvbnN0IGFjdGl2ZURheXMgPSBlbmdpbmUuZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk7XG4gIGNvbnN0IGJlc3REYXkgPSBlbmdpbmUuZ2V0QmVzdERheVRoaXNXZWVrKCk7XG4gIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSBlbmdpbmUuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuXG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIFN0cmluZyhhY3RpdmVEYXlzKSArIFwiLzdcIiwgXCJBY3RpdmUgZGF5c1wiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgYmVzdERheSwgXCJCZXN0IGRheVwiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgU3RyaW5nKHRvdGFsQ29tcGxldGlvbnMpLCBcIlRvdGFsXCIpO1xuXG4gIC8vIERpdmlkZXJcbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQmFyIGNoYXJ0XG4gIGNvbnN0IHdlZWtseURhdGEgPSBlbmdpbmUuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheVN0ciA9IG5ldyBEYXRlKG5vdykudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgLy8gRmluZCBtYXggdG90YWwgZm9yIHNjYWxpbmdcbiAgbGV0IG1heFRvdGFsID0gMTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla2x5RGF0YSkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgaWYgKHRvdGFsID4gbWF4VG90YWwpIG1heFRvdGFsID0gdG90YWw7XG4gIH1cblxuICBjb25zdCBiYXJzQ29udGFpbmVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyc1wiIH0pO1xuXG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtseURhdGEpIHtcbiAgICBjb25zdCBjb2wgPSBiYXJzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItY29sXCIgfSk7XG5cbiAgICAvLyBTdGFja2VkIGJhclxuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG5cbiAgICBjb25zdCBiYXJIZWlnaHQgPSBtYXhUb3RhbCA+IDAgPyBNYXRoLm1heCg0LCAodG90YWwgLyBtYXhUb3RhbCkgKiAxMDApIDogNDtcbiAgICBjb25zdCBiYXJFbCA9IGNvbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyXCIgfSk7XG4gICAgYmFyRWwuc3R5bGUuaGVpZ2h0ID0gYCR7YmFySGVpZ2h0fXB4YDtcbiAgICBiYXJFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjRweFwiO1xuXG4gICAgaWYgKGRheS5kYXRlID09PSB0b2RheVN0cikge1xuICAgICAgYmFyRWwuY2xhc3NMaXN0LmFkZChcIm9sZW4td2Vla2x5LWJhci10b2RheVwiKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhY2tlZCBzZWdtZW50c1xuICAgIGNvbnN0IGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXTtcbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBjb25zdCBjYXRDb3VudCA9IGRheS5jb21wbGV0aW9ucy5nZXQoY2F0KSA/PyAwO1xuICAgICAgaWYgKGNhdENvdW50ID09PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHNlZ0hlaWdodCA9IHRvdGFsID4gMCA/IChjYXRDb3VudCAvIHRvdGFsKSAqIDEwMCA6IDA7XG4gICAgICBjb25zdCBzZWcgPSBiYXJFbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyLXNlZ21lbnRcIiB9KTtcbiAgICAgIHNlZy5zdHlsZS5oZWlnaHQgPSBgJHtzZWdIZWlnaHR9JWA7XG4gICAgICBzZWcuc3R5bGUuYmFja2dyb3VuZCA9IGdldENhdGVnb3J5Q29sb3IoY2F0LCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gY29tcGxldGlvbnMsIHNob3cgZW1wdHkgYmFyXG4gICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICBiYXJFbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXCI7XG4gICAgfVxuXG4gICAgLy8gRGF5IGxhYmVsXG4gICAgY29sLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LWRheS1sYWJlbFwiLCB0ZXh0OiBkYXkuZGF5LmNoYXJBdCgwKSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWVrbHlTdGF0KHBhcmVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3Qgc3RhdCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdFwiIH0pO1xuICBzdGF0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXQtdmFsdWVcIiwgdGV4dDogdmFsdWUgfSk7XG4gIHN0YXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdC1sYWJlbFwiLCB0ZXh0OiBsYWJlbCB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlDb2xvcihjYXRlZ29yeTogQ2F0ZWdvcnksIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpOiBzdHJpbmcge1xuICByZXR1cm4gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQWN0aXZpdHkgR3JpZCBDb21wb25lbnRcbi8vIDItY29sdW1uIGdyaWQgb2YgYWN0aXZpdHkgY2FyZHMgd2l0aCBwcm9ncmVzcyByaW5nc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWN0aXZpdHlHcmlkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmFjdGl2aXR5X2dyaWRfdGl0bGUgPz8gXCJBQ1RJVklUSUVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gR3JpZCBjb250YWluZXJcbiAgY29uc3QgZ3JpZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1ncmlkXCIgfSk7XG4gIGdyaWQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBzZXR0aW5ncy5kZXZDb25maWcuYWN0aXZpdHlHcmlkQ29sdW1ucyA/PyAyO1xuICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y29sdW1uc30sIDFmcilgO1xuXG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBlbmdpbmUuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcblxuICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICBjb25zdCBjYXJkID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1jYXJkXCIgfSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgYmFyXG4gICAgY29uc3QgYWNjZW50ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2FjdGl2aXR5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcblxuICAgIC8vIFRvcCByb3c6IGVtb2ppICsgc3RhdHVzIGRvdFxuICAgIGNvbnN0IHRvcCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktdG9wXCIgfSk7XG4gICAgdG9wLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktZW1vamlcIiwgdGV4dDogYWN0aXZpdHkuZW1vamkgfSk7XG5cbiAgICBjb25zdCBkYXlzU2luY2UgPSBlbmdpbmUuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgIGNvbnN0IGRvdENscyA9IGdldERvdENsYXNzKGRheXNTaW5jZSk7XG4gICAgdG9wLmNyZWF0ZURpdih7IGNsczogYG9sZW4tYWN0aXZpdHktZG90ICR7ZG90Q2xzfWAgfSk7XG5cbiAgICAvLyBBY3Rpdml0eSBuYW1lXG4gICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFjdGl2aXR5LW5hbWVcIiwgdGV4dDogYWN0aXZpdHkubmFtZSB9KTtcblxuICAgIC8vIFdlZWtseSBwcm9ncmVzc1xuICAgIGNvbnN0IHByb2dyZXNzID0gZW5naW5lLmdldFdlZWtseVByb2dyZXNzKGFjdGl2aXR5LmlkKTtcbiAgICBjb25zdCBwcm9ncmVzc1JvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3NcIiB9KTtcblxuICAgIC8vIFByb2dyZXNzIHJpbmcgKFNWRylcbiAgICBjb25zdCByaW5nID0gY3JlYXRlUHJvZ3Jlc3NSaW5nKHByb2dyZXNzLmRvbmUsIHByb2dyZXNzLnRhcmdldCwgc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbYWN0aXZpdHkuY2F0ZWdvcnldKTtcbiAgICBwcm9ncmVzc1Jvdy5hcHBlbmRDaGlsZChyaW5nKTtcblxuICAgIHByb2dyZXNzUm93LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzLXRleHRcIixcbiAgICAgIHRleHQ6IGAke3Byb2dyZXNzLmRvbmV9IG9mICR7cHJvZ3Jlc3MudGFyZ2V0fWAsXG4gICAgfSk7XG5cbiAgICAvLyBTdHJlYWtcbiAgICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0QWN0aXZpdHlTdHJlYWsoYWN0aXZpdHkuaWQpO1xuICAgIGlmIChzdHJlYWsgPiAwKSB7XG4gICAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tYWN0aXZpdHktc3RyZWFrXCIsXG4gICAgICAgIHRleHQ6IGAke3N0cmVha30gZGF5IHN0cmVha2AsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RG90Q2xhc3MoZGF5c1NpbmNlOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoZGF5c1NpbmNlID09PSAwKSByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1ncmVlblwiO1xuICBpZiAoZGF5c1NpbmNlIDw9IDEpIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LXllbGxvd1wiO1xuICByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1yZWRcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NSaW5nKGRvbmU6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcbiAgY29uc3Qgc2l6ZSA9IDI0O1xuICBjb25zdCBzdHJva2VXaWR0aCA9IDIuNTtcbiAgY29uc3QgcmFkaXVzID0gKHNpemUgLSBzdHJva2VXaWR0aCkgLyAyO1xuICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiByYWRpdXM7XG4gIGNvbnN0IHBlcmNlbnQgPSB0YXJnZXQgPiAwID8gTWF0aC5taW4oMSwgZG9uZSAvIHRhcmdldCkgOiAwO1xuICBjb25zdCBkYXNoT2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAqICgxIC0gcGVyY2VudCk7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoc2l6ZSkpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhzaXplKSk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHtzaXplfSAke3NpemV9YCk7XG4gIHN2Zy5jbGFzc0xpc3QuYWRkKFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzcy1yaW5nXCIpO1xuXG4gIC8vIEJhY2tncm91bmQgY2lyY2xlXG4gIGNvbnN0IGJnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHN2Zy5hcHBlbmRDaGlsZChiZ0NpcmNsZSk7XG5cbiAgLy8gUHJvZ3Jlc3MgY2lyY2xlXG4gIGNvbnN0IHByb2dyZXNzQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgY29sb3IpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgU3RyaW5nKGNpcmN1bWZlcmVuY2UpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgU3RyaW5nKGRhc2hPZmZzZXQpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoLTkwICR7c2l6ZSAvIDJ9ICR7c2l6ZSAvIDJ9KWApO1xuICBzdmcuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NDaXJjbGUpO1xuXG4gIHJldHVybiBzdmc7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGUgQ2hpcHMgQ29tcG9uZW50XG4vLyBIb3Jpem9udGFsIHNjcm9sbGFibGUgY2hpcHMgZm9yIHNlbGYtY2FyZSB0YXNrIHRyYWNraW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFRlbXBsZVRhc2sgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRlbXBsZUNoaXBzKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25UZW1wbGVVcGRhdGU6ICh0YXNrSWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGlmICghc2V0dGluZ3MudGVtcGxlVGFza3MgfHwgc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLnRlbXBsZV90aXRsZSA/PyBcIlRIRSBURU1QTEVcIjtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcblxuICAvLyBTZWN0aW9uXG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxlLXNlY3Rpb25cIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gVGl0bGVcbiAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2hpcHMgY29udGFpbmVyXG4gIGNvbnN0IGNoaXBzID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcHNcIiB9KTtcbiAgY2hpcHMuc3R5bGUubWFyZ2luVG9wID0gXCI4cHhcIjtcblxuICBmb3IgKGNvbnN0IHRhc2sgb2Ygc2V0dGluZ3MudGVtcGxlVGFza3MpIHtcbiAgICBjb25zdCBzdGF0dXMgPSBnZXRUYXNrU3RhdHVzKHRhc2ssIG5vdyk7XG5cbiAgICBjb25zdCBjaGlwQ2xzID0gYG9sZW4tdGVtcGxlLWNoaXAgJHtzdGF0dXMuY2hpcENsYXNzfWA7XG4gICAgY29uc3QgY2hpcCA9IGNoaXBzLmNyZWF0ZURpdih7IGNsczogY2hpcENscyB9KTtcblxuICAgIGNoaXAuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXAtZW1vamlcIiwgdGV4dDogdGFzay5lbW9qaSB9KTtcbiAgICBjaGlwLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwLXRleHRcIiwgdGV4dDogYCR7dGFzay5uYW1lfSBcdTAwQjcgJHtzdGF0dXMudGV4dH1gIH0pO1xuXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb25UZW1wbGVVcGRhdGUodGFzay5pZCk7XG4gICAgICAvLyBWaXN1YWwgZmVlZGJhY2tcbiAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwLjkpXCI7XG4gICAgICBjaGlwLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgY2hpcC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFRhc2tTdGF0dXMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNoaXBDbGFzczogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrU3RhdHVzKHRhc2s6IFRlbXBsZVRhc2ssIG5vdzogRGF0ZSk6IFRhc2tTdGF0dXMge1xuICBpZiAoIXRhc2subGFzdENvbXBsZXRlZCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZSh0YXNrLmxhc3RDb21wbGV0ZWQpO1xuICBjb25zdCBtc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gIGNvbnN0IGRheXNTaW5jZSA9IE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSBsYXN0LmdldFRpbWUoKSkgLyBtc1BlckRheSk7XG4gIGNvbnN0IGRheXNVbnRpbER1ZSA9IHRhc2suaW50ZXJ2YWxEYXlzIC0gZGF5c1NpbmNlO1xuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMSkge1xuICAgIHJldHVybiB7IHRleHQ6IFwiZHVlIHRvZGF5XCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLXdhcm5cIiB9O1xuICB9XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAyKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogYGR1ZSBpbiAke2RheXNVbnRpbER1ZX1kYCwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtd2FyblwiIH07XG4gIH1cblxuICByZXR1cm4geyB0ZXh0OiBgaW4gJHtkYXlzVW50aWxEdWV9ZGAsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW9rXCIgfTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFF1b3RlIEZvb3RlciBDb21wb25lbnRcbi8vIFJvdGF0aW5nIHN0b2ljIHF1b3RlIGF0IHRoZSBib3R0b20gb2YgdGhlIGRhc2hib2FyZFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJRdW90ZUZvb3RlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHF1b3RlID0gZ2V0UXVvdGUoYXBwLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1xdW90ZVwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgdGV4dDogYFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgfSk7XG5cbiAgaWYgKHF1b3RlLmF0dHJpYnV0aW9uKSB7XG4gICAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFF1b3RlIHtcbiAgdGV4dDogc3RyaW5nO1xuICBhdHRyaWJ1dGlvbjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRRdW90ZShcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiBRdW90ZSB7XG4gIC8vIFRyeSB2YXVsdCBmb2xkZXIgcXVvdGVzIGZpcnN0XG4gIGlmIChzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpIHtcbiAgICBjb25zdCB2YXVsdFF1b3RlcyA9IGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwLCBzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpO1xuICAgIGlmICh2YXVsdFF1b3Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcGlja1F1b3RlKHZhdWx0UXVvdGVzLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbGJhY2sgdG8gaGFyZGNvZGVkIHF1b3Rlc1xuICByZXR1cm4gcGlja1F1b3RlKEZBTExCQUNLX1FVT1RFUywgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xufVxuXG5mdW5jdGlvbiBwaWNrUXVvdGUoXG4gIHF1b3RlczogUXVvdGVbXSxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IFF1b3RlIHtcbiAgaWYgKHF1b3Rlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIlRoZSB1bmV4YW1pbmVkIGxpZmUgaXMgbm90IHdvcnRoIGxpdmluZy5cIiwgYXR0cmlidXRpb246IFwiU29jcmF0ZXNcIiB9O1xuICB9XG5cbiAgLy8gQXZvaWQgcmVjZW50bHkgc2hvd24gcXVvdGVzXG4gIGNvbnN0IHJlY2VudElkcyA9IHNldHRpbmdzLnJlY2VudFF1b3RlSWRzID8/IFtdO1xuICBjb25zdCBhdmFpbGFibGUgPSBxdW90ZXNcbiAgICAubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKVxuICAgIC5maWx0ZXIoKHsgaSB9KSA9PiAhcmVjZW50SWRzLmluY2x1ZGVzKGkpKTtcblxuICBjb25zdCBwb29sID0gYXZhaWxhYmxlLmxlbmd0aCA+IDAgPyBhdmFpbGFibGUgOiBxdW90ZXMubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKTtcbiAgY29uc3QgcGljayA9IHBvb2xbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9vbC5sZW5ndGgpXTtcblxuICAvLyBUcmFjayByZWNlbnQgKGtlZXAgbGFzdCA1KVxuICBjb25zdCBuZXdSZWNlbnQgPSBbLi4ucmVjZW50SWRzLCBwaWNrLmldLnNsaWNlKC1NYXRoLm1pbig1LCBNYXRoLmZsb29yKHF1b3Rlcy5sZW5ndGggLyAyKSkpO1xuICBvblNldHRpbmdzVXBkYXRlKHtcbiAgICBsYXN0UXVvdGVJbmRleDogcGljay5pLFxuICAgIHJlY2VudFF1b3RlSWRzOiBuZXdSZWNlbnQsXG4gIH0pO1xuXG4gIHJldHVybiBwaWNrLnE7XG59XG5cbmZ1bmN0aW9uIGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwOiBBcHAsIGZvbGRlclBhdGg6IHN0cmluZyk6IFF1b3RlW10ge1xuICBjb25zdCBxdW90ZXM6IFF1b3RlW10gPSBbXTtcbiAgY29uc3QgYWJzdHJhY3RGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXJQYXRoKTtcbiAgaWYgKCFhYnN0cmFjdEZpbGUpIHJldHVybiBxdW90ZXM7XG5cbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcigoZikgPT5cbiAgICBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpXG4gICk7XG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgY29udGludWU7XG5cbiAgICAvLyBPbmUgcXVvdGUgcGVyIGZpbGUgKGRlZmF1bHQgbW9kZSlcbiAgICBjb25zdCBuYW1lID0gZmlsZS5iYXNlbmFtZTtcbiAgICBjb25zdCBwYXJ0cyA9IHNwbGl0QXR0cmlidXRpb24obmFtZSk7XG4gICAgcXVvdGVzLnB1c2gocGFydHMpO1xuICB9XG5cbiAgcmV0dXJuIHF1b3Rlcztcbn1cblxuZnVuY3Rpb24gc3BsaXRBdHRyaWJ1dGlvbih0ZXh0OiBzdHJpbmcpOiBRdW90ZSB7XG4gIC8vIENoZWNrIGZvciBlbS1kYXNoIGF0dHJpYnV0aW9uXG4gIGNvbnN0IGRhc2hJbmRleCA9IHRleHQubGFzdEluZGV4T2YoXCIgXHUyMDE0IFwiKTtcbiAgaWYgKGRhc2hJbmRleCA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGV4dC5zbGljZSgwLCBkYXNoSW5kZXgpLnRyaW0oKSxcbiAgICAgIGF0dHJpYnV0aW9uOiB0ZXh0LnNsaWNlKGRhc2hJbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgaHlwaGVuSW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIC0gXCIpO1xuICBpZiAoaHlwaGVuSW5kZXggPiB0ZXh0Lmxlbmd0aCAqIDAuNSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0ZXh0LnNsaWNlKDAsIGh5cGhlbkluZGV4KS50cmltKCksXG4gICAgICBhdHRyaWJ1dGlvbjogdGV4dC5zbGljZShoeXBoZW5JbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogdGV4dC50cmltKCksIGF0dHJpYnV0aW9uOiBcIlwiIH07XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXkgVGltZWxpbmUgQ29tcG9uZW50XG4vLyBWZXJ0aWNhbCBjb2xvcmVkIHRpbWVsaW5lIG9mIHRoZSBkYXkncyBwbGFubmVkIGFjdGl2aXRpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgRGF5TWFwRW50cnksIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEYXlUaW1lbGluZShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiB7XG4gICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Ta2lwOiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJEb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyUG9zdHBvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ3JlYXRlRXZlbnQ/OiAoKSA9PiB2b2lkO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRheW1hcF90aXRsZSA/PyBcIllPVVIgREFZXCI7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldEhvdXJzKCkgKyBub3cuZ2V0TWludXRlcygpIC8gNjA7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gVGltZWxpbmUgY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQgb2xlbi10aW1lbGluZS1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEdldCBkYXkgbWFwIGVudHJpZXNcbiAgY29uc3QgZW50cmllcyA9IGVuZ2luZS5nZXREYXlNYXAoKTtcblxuICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWVtcHR5XCIsXG4gICAgICB0ZXh0OiBcIk5vIGFjdGl2aXRpZXMgc2NoZWR1bGVkLiBBIHJhcmUgZGF5IG9mIHJlc3QuXCIsXG4gICAgfSk7XG4gICAgcmVuZGVyVGltZWxpbmVGb290ZXIoY2FyZCwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3Mub25DcmVhdGVFdmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gVGltZWxpbmUgY29udGFpbmVyXG4gIGNvbnN0IHRpbWVsaW5lID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZVwiIH0pO1xuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIHJlbmRlclRpbWVsaW5lRW50cnkoXG4gICAgICB0aW1lbGluZSwgZW50cnksIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzXG4gICAgKTtcbiAgfVxuXG4gIC8vIEZvb3RlclxuICByZW5kZXJUaW1lbGluZUZvb3RlcihjYXJkLCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrcy5vbkNyZWF0ZUV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVFbnRyeShcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgZW50cnk6IERheU1hcEVudHJ5LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBjYWxsYmFja3M6IHtcbiAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblNraXA6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhckRvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJQb3N0cG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gIH1cbik6IHZvaWQge1xuICBjb25zdCBpc0NhbGVuZGFyID0gZW50cnkuaXNDYWxlbmRhclRhc2sgPT09IHRydWU7XG4gIGNvbnN0IGNvbG9yID0gaXNDYWxlbmRhciA/IFwiIzVlN2E5YVwiIDogKHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2VudHJ5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIik7XG4gIGNvbnN0IGlzQ3VycmVudCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LnN0YXJ0SG91ciAmJiBjdXJyZW50SG91ciA8IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzUGFzdCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzRG9uZSA9IGVudHJ5LnN0YXR1cyA9PT0gXCJkb25lXCI7XG4gIGNvbnN0IGlzU2tpcHBlZCA9IGVudHJ5LnN0YXR1cyA9PT0gXCJza2lwcGVkXCI7XG5cbiAgLy8gRGV0ZXJtaW5lIHZpc3VhbCBzdGF0ZVxuICBsZXQgc3RhdGVDbHMgPSBcIm9sZW4tdGltZWxpbmUtZW50cnlcIjtcbiAgaWYgKGlzQ2FsZW5kYXIpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtY2FsZW5kYXJcIjtcbiAgaWYgKGlzRG9uZSkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1kb25lXCI7XG4gIGVsc2UgaWYgKGlzU2tpcHBlZCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1za2lwcGVkXCI7XG4gIGVsc2UgaWYgKGlzQ3VycmVudCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1jdXJyZW50XCI7XG4gIGVsc2UgaWYgKGlzUGFzdCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1wYXN0XCI7XG5cbiAgY29uc3Qgcm93ID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogc3RhdGVDbHMgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgY29sb3IgYmFyIChjYWxlbmRhciB0YXNrcyBnZXQgYSBkaXN0aW5jdCBkYXNoZWQgc3R5bGUpXG4gIGNvbnN0IGJhciA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1iYXJcIiB9KTtcbiAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgaWYgKGlzQ2FsZW5kYXIgJiYgIWlzRG9uZSkge1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKFwib2xlbi10aW1lbGluZS1iYXItY2FsZW5kYXJcIik7XG4gIH1cbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBiYXIuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAxMnB4ICR7Y29sb3J9YDtcbiAgfVxuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1jb250ZW50XCIgfSk7XG5cbiAgLy8gVG9wIGxpbmU6IHRpbWUgKyBkdXJhdGlvbiArIHNvdXJjZSBiYWRnZSBmb3IgY2FsZW5kYXIgdGFza3NcbiAgY29uc3QgdGltZUxpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLXRpbWVcIiB9KTtcbiAgdGltZUxpbmUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXRIb3VyKGVudHJ5LnN0YXJ0SG91cil9IFx1MjAxMyAke2Zvcm1hdEhvdXIoZW50cnkuZW5kSG91cil9IFx1MDBCNyAke2VudHJ5LmVzdGltYXRlZER1cmF0aW9ufW1gO1xuXG4gIGlmIChpc0NhbGVuZGFyICYmIGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgY29uc3QgYmFkZ2UgPSB0aW1lTGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1zb3VyY2UtYmFkZ2VcIiB9KTtcbiAgICBzd2l0Y2ggKGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiTm90ZVwiOyBicmVhaztcbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIlRhc2tcIjsgYnJlYWs7XG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiUXVpY2tcIjsgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0aXZpdHkgbGluZTogZW1vamkgKyBuYW1lXG4gIGNvbnN0IGFjdExpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWFjdGl2aXR5XCIgfSk7XG4gIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtZW1vamlcIiwgdGV4dDogZW50cnkuZW1vamkgfSk7XG4gIGNvbnN0IG5hbWVFbCA9IGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICBjbHM6IFwib2xlbi10aW1lbGluZS1uYW1lXCIsXG4gICAgdGV4dDogZW50cnkuYWN0aXZpdHlOYW1lLFxuICB9KTtcblxuICAvLyBTdHJpa2V0aHJvdWdoIGZvciBkb25lL3NraXBwZWRcbiAgaWYgKGlzRG9uZSB8fCBpc1NraXBwZWQpIHtcbiAgICBuYW1lRWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgIG5hbWVFbC5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgfVxuXG4gIC8vIFN0YXR1cyBpbmRpY2F0b3JcbiAgaWYgKGlzRG9uZSkge1xuICAgIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtY2hlY2tcIiwgdGV4dDogXCJcXHUyNzEzXCIgfSk7XG4gIH0gZWxzZSBpZiAoaXNTa2lwcGVkKSB7XG4gICAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1za2lwLW1hcmtcIiwgdGV4dDogXCJcXHUyMDEzXCIgfSk7XG4gIH1cblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBpZiAoIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgaWYgKGlzQ2FsZW5kYXIpIHtcbiAgICAgIC8vIENhbGVuZGFyIHRhc2tzOiBEb25lICsgUG9zdHBvbmVcbiAgICAgIGNvbnN0IGRvbmVCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQ2FsZW5kYXJEb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBvc3Rwb25lQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1wb3N0cG9uZVwiLFxuICAgICAgICB0ZXh0OiBcIlxcdTIzRTlcIixcbiAgICAgICAgYXR0cjogeyB0aXRsZTogXCJQb3N0cG9uZSB0byB0b21vcnJvd1wiIH0sXG4gICAgICB9KTtcbiAgICAgIHBvc3Rwb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25DYWxlbmRhclBvc3Rwb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFjdGl2aXR5IGVudHJpZXM6IEJlZ2luL0RvbmUgKyBTa2lwXG4gICAgICBjb25zdCBhY2NlcHRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBpc0N1cnJlbnQgPyBcIkJlZ2luXCIgOiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgYWNjZXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25BY2NlcHQoZW50cnkuYWN0aXZpdHlJZCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2tpcEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tc2tpcFwiLFxuICAgICAgICB0ZXh0OiBcIlNraXBcIixcbiAgICAgIH0pO1xuICAgICAgc2tpcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uU2tpcChlbnRyeS5hY3Rpdml0eUlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEN1cnJlbnQgdGltZSBpbmRpY2F0b3JcbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBjb25zdCBpbmRpY2F0b3IgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtbm93XCIgfSk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAoY3VycmVudEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpIC8gKGVudHJ5LmVuZEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpO1xuICAgIGluZGljYXRvci5zdHlsZS50b3AgPSBgJHtNYXRoLm1pbigxMDAsIE1hdGgubWF4KDAsIHByb2dyZXNzICogMTAwKSl9JWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVGb290ZXIoXG4gIGNhcmQ6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBvbkNyZWF0ZUV2ZW50PzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IGVuZE9mRGF5ID0gc2V0dGluZ3MuZGV2Q29uZmlnLmV2ZW5pbmdFbmQ7XG4gIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIGVuZE9mRGF5IC0gY3VycmVudEhvdXIpO1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IocmVtYWluaW5nKTtcbiAgY29uc3QgbWlucyA9IE1hdGgucm91bmQoKHJlbWFpbmluZyAtIGhvdXJzKSAqIDYwKTtcblxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICBjb25zdCBmb290ZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3RlclwiIH0pO1xuICBmb290ZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3Rlci10ZXh0XCIsXG4gICAgdGV4dDogYEVuZCBvZiBkYXk6ICR7aG91cnN9aCAke21pbnN9bSByZW1haW5pbmdgLFxuICB9KTtcblxuICBpZiAob25DcmVhdGVFdmVudCkge1xuICAgIGNvbnN0IGJ0biA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tY3JlYXRlXCIsXG4gICAgICB0ZXh0OiBcIisgQ3JlYXRlIGV2ZW50XCIsXG4gICAgfSk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvbkNyZWF0ZUV2ZW50KCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIoaDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGgpO1xuICBjb25zdCBtaW5zID0gTWF0aC5yb3VuZCgoaCAtIGhvdXJzKSAqIDYwKTtcbiAgY29uc3QgcGVyaW9kID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gIGNvbnN0IGRpc3BsYXlIb3VyID0gaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycyA9PT0gMCA/IDEyIDogaG91cnM7XG4gIGlmIChtaW5zID09PSAwKSByZXR1cm4gYCR7ZGlzcGxheUhvdXJ9JHtwZXJpb2R9YDtcbiAgcmV0dXJuIGAke2Rpc3BsYXlIb3VyfToke1N0cmluZyhtaW5zKS5wYWRTdGFydCgyLCBcIjBcIil9JHtwZXJpb2R9YDtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFN0cmVuZ3RoIEhlYXRtYXAgQ29tcG9uZW50XG4vLyBJbnRlcmFjdGl2ZSBtdXNjbGUgZmlndXJlIHNob3dpbmcgd29ya291dCBpbnRlbnNpdHkgcGVyIG11c2NsZVxuLy8gQ2xpY2thYmxlIG11c2NsZXMgb3BlbiBwcm9ncmVzcyBncmFwaHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENvbXBsZXRpb25NYXAsIEdlbmRlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBNdXNjbGVHcm91cElkIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTVVTQ0xFX0dST1VQX0xBQkVMUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLy8gLS0tIE11c2NsZSByZWdpb24gaGl0LWJveGVzIChwZXJjZW50YWdlLWJhc2VkIGZvciBmcm9udC9iYWNrIHZpZXdzKSAtLS1cbi8vIEVhY2ggcmVnaW9uOiBbeCUsIHklLCB3aWR0aCUsIGhlaWdodCVdIHJlbGF0aXZlIHRvIGZpZ3VyZSBib3VuZGluZyBib3hcblxuaW50ZXJmYWNlIE11c2NsZVJlZ2lvbiB7XG4gIGlkOiBNdXNjbGVHcm91cElkO1xuICBmcm9udD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIGJhY2s/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xufVxuXG5jb25zdCBNVVNDTEVfUkVHSU9OUzogTXVzY2xlUmVnaW9uW10gPSBbXG4gIC8vIEhlYWQvbmVjayBhcmVhXG4gIHsgaWQ6IFwibmVja1wiLCAgICAgICBmcm9udDogeyB4OiA0MCwgeTogOCwgdzogMjAsIGg6IDUgfSB9LFxuICB7IGlkOiBcInRyYXBzXCIsICAgICAgYmFjazogIHsgeDogMzAsIHk6IDExLCB3OiA0MCwgaDogNyB9IH0sXG4gIC8vIFVwcGVyIGJvZHlcbiAgeyBpZDogXCJzaG91bGRlcnNcIiwgIGZyb250OiB7IHg6IDE4LCB5OiAxNCwgdzogMTQsIGg6IDggfSwgICBiYWNrOiB7IHg6IDE4LCB5OiAxNCwgdzogMTQsIGg6IDggfSB9LFxuICB7IGlkOiBcImNoZXN0XCIsICAgICAgZnJvbnQ6IHsgeDogMzAsIHk6IDE2LCB3OiA0MCwgaDogMTAgfSB9LFxuICB7IGlkOiBcImxhdHNcIiwgICAgICAgYmFjazogIHsgeDogMjQsIHk6IDE5LCB3OiA1MiwgaDogMTIgfSB9LFxuICB7IGlkOiBcImJhY2tcIiwgICAgICAgYmFjazogIHsgeDogMzIsIHk6IDMyLCB3OiAzNiwgaDogMTAgfSB9LFxuICAvLyBBcm1zXG4gIHsgaWQ6IFwiYmljZXBzXCIsICAgICBmcm9udDogeyB4OiAxNCwgeTogMjMsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwidHJpY2Vwc1wiLCAgICBiYWNrOiAgeyB4OiAxNCwgeTogMjMsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwiZm9yZWFybXNcIiwgICBmcm9udDogeyB4OiAxMCwgeTogMzYsIHc6IDEyLCBoOiAxMiB9LCAgYmFjazogeyB4OiAxMCwgeTogMzYsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIC8vIENvcmVcbiAgeyBpZDogXCJhYnNcIiwgICAgICAgIGZyb250OiB7IHg6IDM1LCB5OiAyNywgdzogMzAsIGg6IDE2IH0gfSxcbiAgeyBpZDogXCJvYmxpcXVlc1wiLCAgIGZyb250OiB7IHg6IDI0LCB5OiAzMCwgdzogMTAsIGg6IDEyIH0gfSxcbiAgeyBpZDogXCJnbHV0ZXNcIiwgICAgIGJhY2s6ICB7IHg6IDMwLCB5OiA0MywgdzogNDAsIGg6IDEwIH0gfSxcbiAgLy8gTGVnc1xuICB7IGlkOiBcInF1YWRzXCIsICAgICAgZnJvbnQ6IHsgeDogMjUsIHk6IDQ4LCB3OiA1MCwgaDogMTggfSB9LFxuICB7IGlkOiBcImhhbXN0cmluZ3NcIiwgYmFjazogIHsgeDogMjUsIHk6IDU0LCB3OiA1MCwgaDogMTYgfSB9LFxuICB7IGlkOiBcImNhbHZlc1wiLCAgICAgZnJvbnQ6IHsgeDogMjgsIHk6IDcyLCB3OiA0NCwgaDogMTQgfSwgIGJhY2s6IHsgeDogMjgsIHk6IDcyLCB3OiA0NCwgaDogMTQgfSB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBIZWF0bWFwQ2FsbGJhY2tzIHtcbiAgb25NdXNjbGVDbGljazogKG11c2NsZUlkOiBNdXNjbGVHcm91cElkKSA9PiB2b2lkO1xuICBvblByb2dyZXNzQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RyZW5ndGhIZWF0bWFwKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiBIZWF0bWFwQ2FsbGJhY2tzLFxuICBhcHA/OiBBcHBcbik6IHZvaWQge1xuICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlYXRtYXAtc2VjdGlvblwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBGaWd1cmUgY29udGFpbmVyXG4gIGNvbnN0IGdlbmRlciA9IHNldHRpbmdzLnBlcnNvbmFsU3RhdHMuZ2VuZGVyO1xuICBjb25zdCBmaWd1cmVXcmFwID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWZpZ3VyZXNcIiB9KTtcblxuICAvLyBHYXRoZXIgbXVzY2xlIGludGVuc2l0eSBkYXRhIGZyb20gd29ya291dCBjb21wbGV0aW9uc1xuICBjb25zdCBtdXNjbGVEYXRhID0gZ2F0aGVyTXVzY2xlSW50ZW5zaXR5KGVuZ2luZSwgY29tcGxldGlvbkRhdGEsIHNldHRpbmdzKTtcblxuICAvLyBUcnkgdG8gbG9hZCBhY3R1YWwgU1ZHIGZpbGUsIHRoZW4gcmVuZGVyIGZpZ3VyZVxuICBjb25zdCBzdmdGaWxlTmFtZSA9IGdlbmRlciA9PT0gXCJmZW1hbGVcIiA/IFwiTXVzY2xlIFdvbWFuLnN2Z1wiIDogXCJNdXNjbGUgTWFuLnN2Z1wiO1xuICBpZiAoYXBwKSB7XG4gICAgbG9hZFN2Z0Zyb21WYXVsdChhcHAsIHN2Z0ZpbGVOYW1lKS50aGVuKChzdmdDb250ZW50KSA9PiB7XG4gICAgICBpZiAoc3ZnQ29udGVudCkge1xuICAgICAgICByZW5kZXJTdmdGaWd1cmVXaXRoT3ZlcmxheShmaWd1cmVXcmFwLCBzdmdDb250ZW50LCBtdXNjbGVEYXRhLCBjYWxsYmFja3Mub25NdXNjbGVDbGljayk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGYWxsYmFjayB0byBwcm9ncmFtbWF0aWNcbiAgICAgICAgcmVuZGVyTXVzY2xlRmlndXJlKGZpZ3VyZVdyYXAsIFwiZnJvbnRcIiwgZ2VuZGVyLCBtdXNjbGVEYXRhLCBjYWxsYmFja3Mub25NdXNjbGVDbGljayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVuZGVyTXVzY2xlRmlndXJlKGZpZ3VyZVdyYXAsIFwiZnJvbnRcIiwgZ2VuZGVyLCBtdXNjbGVEYXRhLCBjYWxsYmFja3Mub25NdXNjbGVDbGljayk7XG4gIH1cblxuICAvLyBCdXR0b25zIGJlbG93IHRoZSBmaWd1cmVcbiAgY29uc3QgYWN0aW9ucyA9IHNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1hY3Rpb25zXCIgfSk7XG5cbiAgY29uc3QgcHJvZ3Jlc3NCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4taGVhdG1hcC1idG5cIixcbiAgICB0ZXh0OiBcIlByb2dyZXNzXCIsXG4gIH0pO1xuICBwcm9ncmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2tzLm9uUHJvZ3Jlc3NDbGljaygpKTtcblxuICBjb25zdCB3b3Jrb3V0QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1oZWF0bWFwLWJ0blwiLFxuICAgIHRleHQ6IFwiU3RhcnQgTmV3IFdvcmtvdXRcIixcbiAgfSk7XG4gIHdvcmtvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNhbGxiYWNrcy5vblN0YXJ0V29ya291dCgpKTtcbn1cblxuLy8gLS0tIExvYWQgYWN0dWFsIFNWRyBmcm9tIHZhdWx0IC0tLVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkU3ZnRnJvbVZhdWx0KGFwcDogQXBwLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gIHRyeSB7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IGFwcC52YXVsdC5hZGFwdGVyLnJlYWQoZmlsZU5hbWUpO1xuICAgIHJldHVybiBjb250ZW50IHx8IG51bGw7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbi8vIC0tLSBSZW5kZXIgYWN0dWFsIFNWRyB3aXRoIG92ZXJsYXkgaG90c3BvdHMgLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclN2Z0ZpZ3VyZVdpdGhPdmVybGF5KFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBzdmdDb250ZW50OiBzdHJpbmcsXG4gIG11c2NsZURhdGE6IE1hcDxNdXNjbGVHcm91cElkLCBudW1iZXI+LFxuICBvbk11c2NsZUNsaWNrOiAoaWQ6IE11c2NsZUdyb3VwSWQpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBmaWd1cmUgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1maWd1cmVcIiB9KTtcbiAgZmlndXJlLnN0eWxlLm1heFdpZHRoID0gXCIyNDBweFwiO1xuICBmaWd1cmUuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gIGZpZ3VyZS5zdHlsZS5tYXJnaW4gPSBcIjAgYXV0b1wiO1xuXG4gIC8vIEluc2VydCBhY3R1YWwgU1ZHIChkaW1tZWQsIGRlc2F0dXJhdGVkKVxuICBjb25zdCBzdmdIb2xkZXIgPSBmaWd1cmUuY3JlYXRlRGl2KCk7XG4gIHN2Z0hvbGRlci5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDoxMDAlO29wYWNpdHk6MC44O2ZpbHRlcjpzYXR1cmF0ZSgwLjIpIGJyaWdodG5lc3MoMC40NSk7XCI7XG4gIHN2Z0hvbGRlci5pbm5lckhUTUwgPSBzdmdDb250ZW50O1xuICBjb25zdCBzdmdFbCA9IHN2Z0hvbGRlci5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICBpZiAoc3ZnRWwpIHtcbiAgICBzdmdFbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIHN2Z0VsLnN0eWxlLmhlaWdodCA9IFwiYXV0b1wiO1xuICAgIHN2Z0VsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICAvLyBPdmVybGF5IGZvciBob3RzcG90c1xuICBjb25zdCBvdmVybGF5ID0gZmlndXJlLmNyZWF0ZURpdigpO1xuICBvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1wiO1xuXG4gIC8vIENyZWF0ZSBob3RzcG90cyBiYXNlZCBvbiBtdXNjbGUgcmVnaW9uc1xuICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiBNVVNDTEVfUkVHSU9OUykge1xuICAgIGNvbnN0IGJvdW5kcyA9IHJlZ2lvbi5mcm9udDtcbiAgICBpZiAoIWJvdW5kcykgY29udGludWU7XG5cbiAgICBjb25zdCBpbnRlbnNpdHkgPSBtdXNjbGVEYXRhLmdldChyZWdpb24uaWQpID8/IDA7XG4gICAgY29uc3QgY29sb3IgPSBnZXRJbnRlbnNpdHlDb2xvcihpbnRlbnNpdHkpO1xuXG4gICAgY29uc3QgaHMgPSBvdmVybGF5LmNyZWF0ZURpdigpO1xuICAgIGhzLnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246YWJzb2x1dGU7dG9wOiR7Ym91bmRzLnl9JTtsZWZ0OiR7Ym91bmRzLnh9JTt3aWR0aDoke2JvdW5kcy53fSU7aGVpZ2h0OiR7Ym91bmRzLmh9JTtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4xNXM7YmFja2dyb3VuZDoke2ludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMzBcIiA6IFwidHJhbnNwYXJlbnRcIn07Ym9yZGVyOjFweCBzb2xpZCAke2ludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMjBcIiA6IFwidHJhbnNwYXJlbnRcIn07YDtcbiAgICBocy50aXRsZSA9IE1VU0NMRV9HUk9VUF9MQUJFTFNbcmVnaW9uLmlkXSArIChpbnRlbnNpdHkgPiAwID8gYCBcdTIwMTQgJHtNYXRoLnJvdW5kKGludGVuc2l0eSAqIDEwMCl9JWAgOiBcIlwiKTtcblxuICAgIGhzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHsgaHMuc3R5bGUuYmFja2dyb3VuZCA9IChpbnRlbnNpdHkgPiAwID8gY29sb3IgOiBcIiM5YThjN2FcIikgKyBcIjUwXCI7IH0pO1xuICAgIGhzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHsgaHMuc3R5bGUuYmFja2dyb3VuZCA9IGludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMzBcIiA6IFwidHJhbnNwYXJlbnRcIjsgfSk7XG4gICAgaHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IG9uTXVzY2xlQ2xpY2socmVnaW9uLmlkKTsgfSk7XG5cbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKGhzKTtcblxuICAgIC8vIE1pcnJvciBmb3Igc3ltbWV0cmljIG11c2NsZXNcbiAgICBpZiAoaXNTeW1tZXRyaWNNdXNjbGUocmVnaW9uLmlkKSAmJiBib3VuZHMueCA8IDUwKSB7XG4gICAgICBjb25zdCBtaXJyb3JMZWZ0ID0gMTAwIC0gYm91bmRzLnggLSBib3VuZHMudztcbiAgICAgIGNvbnN0IG1pcnJvciA9IG92ZXJsYXkuY3JlYXRlRGl2KCk7XG4gICAgICBtaXJyb3Iuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjphYnNvbHV0ZTt0b3A6JHtib3VuZHMueX0lO2xlZnQ6JHttaXJyb3JMZWZ0fSU7d2lkdGg6JHtib3VuZHMud30lO2hlaWdodDoke2JvdW5kcy5ofSU7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLXJhZGl1czo0cHg7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMTVzO2JhY2tncm91bmQ6JHtpbnRlbnNpdHkgPiAwID8gY29sb3IgKyBcIjMwXCIgOiBcInRyYW5zcGFyZW50XCJ9O2JvcmRlcjoxcHggc29saWQgJHtpbnRlbnNpdHkgPiAwID8gY29sb3IgKyBcIjIwXCIgOiBcInRyYW5zcGFyZW50XCJ9O2A7XG4gICAgICBtaXJyb3IudGl0bGUgPSBocy50aXRsZTtcbiAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7IG1pcnJvci5zdHlsZS5iYWNrZ3JvdW5kID0gKGludGVuc2l0eSA+IDAgPyBjb2xvciA6IFwiIzlhOGM3YVwiKSArIFwiNTBcIjsgfSk7XG4gICAgICBtaXJyb3IuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4geyBtaXJyb3Iuc3R5bGUuYmFja2dyb3VuZCA9IGludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMzBcIiA6IFwidHJhbnNwYXJlbnRcIjsgfSk7XG4gICAgICBtaXJyb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7IGUuc3RvcFByb3BhZ2F0aW9uKCk7IG9uTXVzY2xlQ2xpY2socmVnaW9uLmlkKTsgfSk7XG4gICAgICBvdmVybGF5LmFwcGVuZENoaWxkKG1pcnJvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLSBGaWd1cmUgUmVuZGVyaW5nIC0tLVxuXG5mdW5jdGlvbiByZW5kZXJNdXNjbGVGaWd1cmUoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIHZpZXc6IFwiZnJvbnRcIiB8IFwiYmFja1wiLFxuICBnZW5kZXI6IEdlbmRlcixcbiAgbXVzY2xlRGF0YTogTWFwPE11c2NsZUdyb3VwSWQsIG51bWJlcj4sXG4gIG9uTXVzY2xlQ2xpY2s6IChpZDogTXVzY2xlR3JvdXBJZCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IGZpZ3VyZSA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWZpZ3VyZVwiIH0pO1xuXG4gIC8vIExhYmVsXG4gIGZpZ3VyZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVhdG1hcC12aWV3LWxhYmVsXCIsXG4gICAgdGV4dDogdmlldyA9PT0gXCJmcm9udFwiID8gXCJGcm9udFwiIDogXCJCYWNrXCIsXG4gIH0pO1xuXG4gIC8vIFNWRyBjb250YWluZXJcbiAgY29uc3Qgc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDIwMCA0MDBcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1zdmdcIik7XG5cbiAgLy8gRHJhdyBib2R5IHNpbGhvdWV0dGVcbiAgZHJhd0JvZHlTaWxob3VldHRlKHN2Zywgc3ZnTlMsIGdlbmRlciwgdmlldyk7XG5cbiAgLy8gRHJhdyBtdXNjbGUgcmVnaW9ucyBhcyBjb2xvcmVkIG92ZXJsYXlzXG4gIGZvciAoY29uc3QgcmVnaW9uIG9mIE1VU0NMRV9SRUdJT05TKSB7XG4gICAgY29uc3QgYm91bmRzID0gdmlldyA9PT0gXCJmcm9udFwiID8gcmVnaW9uLmZyb250IDogcmVnaW9uLmJhY2s7XG4gICAgaWYgKCFib3VuZHMpIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgaW50ZW5zaXR5ID0gbXVzY2xlRGF0YS5nZXQocmVnaW9uLmlkKSA/PyAwO1xuXG4gICAgLy8gTWFwIHBlcmNlbnRhZ2UgY29vcmRzIHRvIFNWRyB2aWV3Qm94XG4gICAgY29uc3QgeCA9IGJvdW5kcy54ICogMjtcbiAgICBjb25zdCB5ID0gYm91bmRzLnkgKiA0O1xuICAgIGNvbnN0IHcgPSBib3VuZHMudyAqIDI7XG4gICAgY29uc3QgaCA9IGJvdW5kcy5oICogNDtcblxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKGgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ5XCIsIFwiNlwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZ2V0SW50ZW5zaXR5Q29sb3IoaW50ZW5zaXR5KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIGludGVuc2l0eSA+IDAgPyBcIjAuN1wiIDogXCIwLjE1XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtbXVzY2xlXCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1tdXNjbGVcIiwgcmVnaW9uLmlkKTtcblxuICAgIC8vIFRvb2x0aXAgKyBjbGlja1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRpdGxlXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7TVVTQ0xFX0dST1VQX0xBQkVMU1tyZWdpb24uaWRdfSR7aW50ZW5zaXR5ID4gMCA/IGAgXHUyMDE0ICR7TWF0aC5yb3VuZChpbnRlbnNpdHkgKiAxMDApfSVgIDogXCJcIn1gO1xuICAgIHJlY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgcmVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBvbk11c2NsZUNsaWNrKHJlZ2lvbi5pZCk7XG4gICAgfSk7XG5cbiAgICBzdmcuYXBwZW5kQ2hpbGQocmVjdCk7XG5cbiAgICAvLyBBbHNvIG1pcnJvciBmb3IgcmlnaHQgc2lkZSAoc2hvdWxkZXJzLCBiaWNlcHMsIHRyaWNlcHMsIGZvcmVhcm1zLCBxdWFkcywgaGFtc3RyaW5ncywgY2FsdmVzKVxuICAgIGlmIChpc1N5bW1ldHJpY011c2NsZShyZWdpb24uaWQpICYmIGJvdW5kcy54IDwgNTApIHtcbiAgICAgIGNvbnN0IG1pcnJvclggPSAyMDAgLSB4IC0gdztcbiAgICAgIGNvbnN0IG1pcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJyZWN0XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKG1pcnJvclgpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyh5KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHcpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKGgpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjZcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwicnlcIiwgXCI2XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZ2V0SW50ZW5zaXR5Q29sb3IoaW50ZW5zaXR5KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBpbnRlbnNpdHkgPiAwID8gXCIwLjdcIiA6IFwiMC4xNVwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1tdXNjbGVcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiZGF0YS1tdXNjbGVcIiwgcmVnaW9uLmlkKTtcblxuICAgICAgY29uc3QgbWlycm9yVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGl0bGVcIik7XG4gICAgICBtaXJyb3JUaXRsZS50ZXh0Q29udGVudCA9IGAke01VU0NMRV9HUk9VUF9MQUJFTFNbcmVnaW9uLmlkXX0ke2ludGVuc2l0eSA+IDAgPyBgIFx1MjAxNCAke01hdGgucm91bmQoaW50ZW5zaXR5ICogMTAwKX0lYCA6IFwiXCJ9YDtcbiAgICAgIG1pcnJvci5hcHBlbmRDaGlsZChtaXJyb3JUaXRsZSk7XG5cbiAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgb25NdXNjbGVDbGljayhyZWdpb24uaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChtaXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGZpZ3VyZS5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG5mdW5jdGlvbiBpc1N5bW1ldHJpY011c2NsZShpZDogTXVzY2xlR3JvdXBJZCk6IGJvb2xlYW4ge1xuICByZXR1cm4gW1wic2hvdWxkZXJzXCIsIFwiYmljZXBzXCIsIFwidHJpY2Vwc1wiLCBcImZvcmVhcm1zXCIsIFwicXVhZHNcIiwgXCJoYW1zdHJpbmdzXCIsIFwiY2FsdmVzXCIsIFwib2JsaXF1ZXNcIl0uaW5jbHVkZXMoaWQpO1xufVxuXG5mdW5jdGlvbiBkcmF3Qm9keVNpbGhvdWV0dGUoc3ZnOiBTVkdTVkdFbGVtZW50LCBuczogc3RyaW5nLCBnZW5kZXI6IEdlbmRlciwgdmlldzogXCJmcm9udFwiIHwgXCJiYWNrXCIpOiB2b2lkIHtcbiAgLy8gU2ltcGxpZmllZCBodW1hbiBzaWxob3VldHRlIGFzIGEgcGF0aFxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInBhdGhcIik7XG5cbiAgLy8gQmFzZSBzaWxob3VldHRlIFx1MjAxNCBzbGlnaHRseSBkaWZmZXJlbnQgcHJvcG9ydGlvbnMgYnkgZ2VuZGVyXG4gIGNvbnN0IGlzRmVtYWxlID0gZ2VuZGVyID09PSBcImZlbWFsZVwiO1xuICBjb25zdCBzaG91bGRlclcgPSBpc0ZlbWFsZSA/IDYyIDogNjg7XG4gIGNvbnN0IGhpcFcgPSBpc0ZlbWFsZSA/IDU4IDogNDg7XG4gIGNvbnN0IHdhaXN0VyA9IGlzRmVtYWxlID8gMzggOiA0MjtcblxuICAvLyBCdWlsZCBzaWxob3VldHRlIHBhdGhcbiAgY29uc3QgZCA9IFtcbiAgICAvLyBIZWFkXG4gICAgYE0gMTAwIDEwYCxcbiAgICBgYSAxNiAxOCAwIDEgMSAwLjAxIDBgLFxuICAgIC8vIE5lY2tcbiAgICBgTSA5MiA0NCBMIDkyIDUyYCxcbiAgICBgTSAxMDggNDQgTCAxMDggNTJgLFxuICAgIC8vIFNob3VsZGVyc1xuICAgIGBNIDkyIDUyIEwgJHsxMDAgLSBzaG91bGRlcld9IDU4YCxcbiAgICBgTSAxMDggNTIgTCAkezEwMCArIHNob3VsZGVyV30gNThgLFxuICAgIC8vIFRvcnNvIGxlZnRcbiAgICBgTSAkezEwMCAtIHNob3VsZGVyV30gNTggTCAkezEwMCAtIHNob3VsZGVyVyArIDR9IDEwMGAsXG4gICAgYEwgJHsxMDAgLSB3YWlzdFd9IDE0MGAsXG4gICAgYEwgJHsxMDAgLSBoaXBXfSAxODBgLFxuICAgIC8vIFRvcnNvIHJpZ2h0XG4gICAgYE0gJHsxMDAgKyBzaG91bGRlcld9IDU4IEwgJHsxMDAgKyBzaG91bGRlclcgLSA0fSAxMDBgLFxuICAgIGBMICR7MTAwICsgd2Fpc3RXfSAxNDBgLFxuICAgIGBMICR7MTAwICsgaGlwV30gMTgwYCxcbiAgICAvLyBBcm1zIGxlZnRcbiAgICBgTSAkezEwMCAtIHNob3VsZGVyV30gNTggTCAkezEwMCAtIHNob3VsZGVyVyAtIDEyfSAxMTBgLFxuICAgIGBMICR7MTAwIC0gc2hvdWxkZXJXIC0gMTZ9IDE3MGAsXG4gICAgYE0gJHsxMDAgLSBzaG91bGRlclcgLSA2fSA1OCBMICR7MTAwIC0gc2hvdWxkZXJXIC0gMTh9IDExMGAsXG4gICAgYEwgJHsxMDAgLSBzaG91bGRlclcgLSAyMn0gMTcwYCxcbiAgICAvLyBBcm1zIHJpZ2h0XG4gICAgYE0gJHsxMDAgKyBzaG91bGRlcld9IDU4IEwgJHsxMDAgKyBzaG91bGRlclcgKyAxMn0gMTEwYCxcbiAgICBgTCAkezEwMCArIHNob3VsZGVyVyArIDE2fSAxNzBgLFxuICAgIGBNICR7MTAwICsgc2hvdWxkZXJXICsgNn0gNTggTCAkezEwMCArIHNob3VsZGVyVyArIDE4fSAxMTBgLFxuICAgIGBMICR7MTAwICsgc2hvdWxkZXJXICsgMjJ9IDE3MGAsXG4gICAgLy8gTGVncyBsZWZ0XG4gICAgYE0gJHsxMDAgLSBoaXBXfSAxODAgTCAkezEwMCAtIGhpcFcgKyA2fSAyODBgLFxuICAgIGBMICR7MTAwIC0gaGlwVyArIDEwfSAzNjBgLFxuICAgIGBNICR7MTAwIC0gNn0gMTgwIEwgJHsxMDAgLSAxMn0gMjgwYCxcbiAgICBgTCAkezEwMCAtIDE2fSAzNjBgLFxuICAgIC8vIExlZ3MgcmlnaHRcbiAgICBgTSAkezEwMCArIGhpcFd9IDE4MCBMICR7MTAwICsgaGlwVyAtIDZ9IDI4MGAsXG4gICAgYEwgJHsxMDAgKyBoaXBXIC0gMTB9IDM2MGAsXG4gICAgYE0gJHsxMDAgKyA2fSAxODAgTCAkezEwMCArIDEyfSAyODBgLFxuICAgIGBMICR7MTAwICsgMTZ9IDM2MGAsXG4gIF0uam9pbihcIiBcIik7XG5cbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIGQpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4xMilcIik7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMS41XCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbn1cblxuLy8gLS0tIE11c2NsZSBJbnRlbnNpdHkgQ2FsY3VsYXRpb24gLS0tXG5cbmZ1bmN0aW9uIGdhdGhlck11c2NsZUludGVuc2l0eShcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5nc1xuKTogTWFwPE11c2NsZUdyb3VwSWQsIG51bWJlcj4ge1xuICBjb25zdCBkYXRhID0gbmV3IE1hcDxNdXNjbGVHcm91cElkLCBudW1iZXI+KCk7XG5cbiAgLy8gUGFyc2Ugd29ya291dCBub3RlcyBmb3IgbXVzY2xlIGdyb3VwIG1lbnRpb25zXG4gIC8vIExvb2sgYXQgdGhlIGxhc3QgMzAgZGF5cyBvZiB3b3Jrb3V0IGNvbXBsZXRpb25zXG4gIGNvbnN0IHdvcmtvdXRBY3Rpdml0eSA9IHNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gXCJ3b3Jrb3V0XCIpO1xuICBpZiAoIXdvcmtvdXRBY3Rpdml0eSkgcmV0dXJuIGRhdGE7XG5cbiAgY29uc3QgY29tcHMgPSBjb21wbGV0aW9uRGF0YVt3b3Jrb3V0QWN0aXZpdHkuaWRdID8/IFtdO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCB0aGlydHlEYXlzQWdvID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIDMwICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG5cbiAgLy8gQ291bnQgY29tcGxldGlvbnMgaW4gdGhlIGxhc3QgMzAgZGF5cyBhcyBhIHByb3h5IGZvciBvdmVyYWxsIGFjdGl2aXR5XG4gIGNvbnN0IHJlY2VudENvbXBsZXRpb25zID0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgIHJldHVybiBkID49IHRoaXJ0eURheXNBZ287XG4gIH0pLmxlbmd0aDtcblxuICBpZiAocmVjZW50Q29tcGxldGlvbnMgPT09IDApIHJldHVybiBkYXRhO1xuXG4gIC8vIFNpbmNlIHdlIGNhbid0IHBhcnNlIHdoaWNoIG11c2NsZXMgd2VyZSB0cmFpbmVkIGZyb20gZnJvbnRtYXR0ZXIgYWxvbmUsXG4gIC8vIHVzZSB3b3Jrb3V0IGZyZXF1ZW5jeSBhcyBhIHVuaWZvcm0gYmFzZSBpbnRlbnNpdHkgYW5kIGZyb250bWF0dGVyXG4gIC8vIG11c2NsZV9ncm91cHMgZmllbGQgaWYgYXZhaWxhYmxlXG4gIGNvbnN0IGJhc2VJbnRlbnNpdHkgPSBNYXRoLm1pbigxLCByZWNlbnRDb21wbGV0aW9ucyAvIDIwKTtcblxuICAvLyBTZXQgYmFzZSBmb3IgYWxsIG11c2NsZSBncm91cHMgcHJvcG9ydGlvbmFsIHRvIHdvcmtvdXQgZnJlcXVlbmN5XG4gIGNvbnN0IGFsbE11c2NsZXM6IE11c2NsZUdyb3VwSWRbXSA9IFtcbiAgICBcImNoZXN0XCIsIFwiYmFja1wiLCBcInNob3VsZGVyc1wiLCBcImJpY2Vwc1wiLCBcInRyaWNlcHNcIiwgXCJmb3JlYXJtc1wiLFxuICAgIFwiYWJzXCIsIFwib2JsaXF1ZXNcIiwgXCJxdWFkc1wiLCBcImhhbXN0cmluZ3NcIiwgXCJnbHV0ZXNcIiwgXCJjYWx2ZXNcIixcbiAgICBcInRyYXBzXCIsIFwibGF0c1wiLCBcIm5lY2tcIixcbiAgXTtcblxuICBmb3IgKGNvbnN0IG0gb2YgYWxsTXVzY2xlcykge1xuICAgIGRhdGEuc2V0KG0sIGJhc2VJbnRlbnNpdHkgKiAwLjUpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59XG5cbi8vIC0tLSBDb2xvciBNYXBwaW5nIC0tLVxuXG5mdW5jdGlvbiBnZXRJbnRlbnNpdHlDb2xvcihpbnRlbnNpdHk6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChpbnRlbnNpdHkgPD0gMCkgcmV0dXJuIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjA2KVwiO1xuICBpZiAoaW50ZW5zaXR5IDwgMC4zKSByZXR1cm4gXCIjMmQ0YTFlXCI7ICAvLyBjb29sIGdyZWVuXG4gIGlmIChpbnRlbnNpdHkgPCAwLjYpIHJldHVybiBcIiM1YThhMmVcIjsgIC8vIG1lZGl1bSBncmVlblxuICBpZiAoaW50ZW5zaXR5IDwgMC44KSByZXR1cm4gXCIjZDRhODQzXCI7ICAvLyB3YXJtIGdvbGRcbiAgcmV0dXJuIFwiI2U4YzM1YVwiOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmlnaHQgZ29sZFxufVxuXG4vLyAtLS0gTXVzY2xlIFByb2dyZXNzIFBvcHVwIC0tLVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd011c2NsZVByb2dyZXNzUG9wdXAoXG4gIG11c2NsZUlkOiBNdXNjbGVHcm91cElkLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcFxuKTogdm9pZCB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0IG9sZW4tcHJvZ3Jlc3Mtc2hlZXRcIiB9KTtcbiAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgY29uc3QgbGFiZWwgPSBNVVNDTEVfR1JPVVBfTEFCRUxTW211c2NsZUlkXTtcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIE1vbnRobHkgcHJvZ3Jlc3MgY2hhcnQgKHNpbXBsZSBiYXIgY2hhcnQpXG4gIGNvbnN0IGNoYXJ0Q29udGFpbmVyID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtY2hhcnRcIiB9KTtcbiAgcmVuZGVyU2ltcGxlQmFyQ2hhcnQoY2hhcnRDb250YWluZXIsIG11c2NsZUlkLCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG5cbiAgLy8gVG9nZ2xlIGZvciB5ZWFybHkgdmlld1xuICBjb25zdCB0b2dnbGVSb3cgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy10b2dnbGVcIiB9KTtcbiAgY29uc3QgbW9udGhCdG4gPSB0b2dnbGVSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiLFxuICAgIHRleHQ6IFwiTW9udGhseVwiLFxuICB9KTtcbiAgY29uc3QgeWVhckJ0biA9IHRvZ2dsZVJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIixcbiAgICB0ZXh0OiBcIlllYXJseVwiLFxuICB9KTtcblxuICBtb250aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYXJ0Q29udGFpbmVyLmVtcHR5KCk7XG4gICAgcmVuZGVyU2ltcGxlQmFyQ2hhcnQoY2hhcnRDb250YWluZXIsIG11c2NsZUlkLCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG4gICAgbW9udGhCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICAgIHllYXJCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gIH0pO1xuXG4gIHllYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFydENvbnRhaW5lci5lbXB0eSgpO1xuICAgIHJlbmRlclNpbXBsZUJhckNoYXJ0KGNoYXJ0Q29udGFpbmVyLCBtdXNjbGVJZCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcInllYXJcIik7XG4gICAgeWVhckJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gICAgbW9udGhCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gIH0pO1xuXG4gIC8vIENsb3NlIG9uIG92ZXJsYXkgY2xpY2tcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlUG9wdXAoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VQb3B1cCgpOiB2b2lkIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbn1cblxuLy8gLS0tIE92ZXJhbGwgUHJvZ3Jlc3MgUG9wdXAgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAoXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwXG4pOiB2b2lkIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQgb2xlbi1wcm9ncmVzcy1zaGVldFwiIH0pO1xuICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJTdHJlbmd0aCBQcm9ncmVzc1wiIH0pO1xuXG4gIC8vIFRhYiB0b2dnbGVcbiAgY29uc3QgdG9nZ2xlUm93ID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtdG9nZ2xlXCIgfSk7XG4gIGNvbnN0IG1vbnRoQnRuID0gdG9nZ2xlUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIixcbiAgICB0ZXh0OiBcIk1vbnRobHlcIixcbiAgfSk7XG4gIGNvbnN0IHllYXJCdG4gPSB0b2dnbGVSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCIsXG4gICAgdGV4dDogXCJZZWFybHlcIixcbiAgfSk7XG5cbiAgLy8gQ2hhcnQgMTogT3ZlcmFsbCBzdHJlbmd0aCAoYWxsIGV4ZXJjaXNlcyBjb21iaW5lZCBhdmVyYWdlKVxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcHJvZ3Jlc3Mtc3VidGl0bGVcIixcbiAgICB0ZXh0OiBcIk92ZXJhbGwgU3RyZW5ndGhcIixcbiAgfSk7XG4gIGNvbnN0IG92ZXJhbGxDaGFydCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWNoYXJ0XCIgfSk7XG4gIHJlbmRlck92ZXJhbGxTdHJlbmd0aENoYXJ0KG92ZXJhbGxDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuXG4gIC8vIENoYXJ0IDI6IFBlci1tdXNjbGUgYnJlYWtkb3duIChtdWx0aS1saW5lKVxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcHJvZ3Jlc3Mtc3VidGl0bGVcIixcbiAgICB0ZXh0OiBcIkJ5IE11c2NsZSBHcm91cFwiLFxuICB9KTtcbiAgY29uc3QgbXVzY2xlQ2hhcnQgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1jaGFydFwiIH0pO1xuICByZW5kZXJNdXNjbGVCcmVha2Rvd25DaGFydChtdXNjbGVDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuXG4gIG1vbnRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmFsbENoYXJ0LmVtcHR5KCk7XG4gICAgbXVzY2xlQ2hhcnQuZW1wdHkoKTtcbiAgICByZW5kZXJPdmVyYWxsU3RyZW5ndGhDaGFydChvdmVyYWxsQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcbiAgICByZW5kZXJNdXNjbGVCcmVha2Rvd25DaGFydChtdXNjbGVDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgICB5ZWFyQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICB9KTtcblxuICB5ZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3ZlcmFsbENoYXJ0LmVtcHR5KCk7XG4gICAgbXVzY2xlQ2hhcnQuZW1wdHkoKTtcbiAgICByZW5kZXJPdmVyYWxsU3RyZW5ndGhDaGFydChvdmVyYWxsQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJ5ZWFyXCIpO1xuICAgIHJlbmRlck11c2NsZUJyZWFrZG93bkNoYXJ0KG11c2NsZUNoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwieWVhclwiKTtcbiAgICB5ZWFyQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgICBtb250aEJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgfSk7XG5cbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlUG9wdXAoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VQb3B1cCgpOiB2b2lkIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbn1cblxuLy8gLS0tIENoYXJ0IFJlbmRlcmluZyBIZWxwZXJzIC0tLVxuXG5mdW5jdGlvbiByZW5kZXJTaW1wbGVCYXJDaGFydChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgbXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBwZXJpb2Q6IFwibW9udGhcIiB8IFwieWVhclwiXG4pOiB2b2lkIHtcbiAgY29uc3Qgd29ya291dEFjdGl2aXR5ID0gc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBcIndvcmtvdXRcIik7XG4gIGlmICghd29ya291dEFjdGl2aXR5KSB7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtZW1wdHlcIiwgdGV4dDogXCJObyB3b3Jrb3V0IGRhdGEgYXZhaWxhYmxlXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY29tcHMgPSBjb21wbGV0aW9uRGF0YVt3b3Jrb3V0QWN0aXZpdHkuaWRdID8/IFtdO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHZhbHVlczogbnVtYmVyW10gPSBbXTtcblxuICBpZiAocGVyaW9kID09PSBcIm1vbnRoXCIpIHtcbiAgICAvLyBMYXN0IDMwIGRheXMsIGdyb3VwZWQgYnkgd2Vla1xuICAgIGZvciAobGV0IHcgPSAzOyB3ID49IDA7IHctLSkge1xuICAgICAgY29uc3Qgd2Vla0VuZCA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSB3ICogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUod2Vla0VuZC5nZXRUaW1lKCkgLSA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICBjb25zdCBjb3VudCA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICByZXR1cm4gZCA+PSB3ZWVrU3RhcnQgJiYgZCA8IHdlZWtFbmQ7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBsYWJlbHMucHVzaChgVyR7NCAtIHd9YCk7XG4gICAgICB2YWx1ZXMucHVzaChjb3VudCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIExhc3QgMTIgbW9udGhzXG4gICAgY29uc3QgbW9udGhOYW1lcyA9IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcbiAgICBmb3IgKGxldCBtID0gMTE7IG0gPj0gMDsgbS0tKSB7XG4gICAgICBjb25zdCBtb250aERhdGUgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgLSBtLCAxKTtcbiAgICAgIGNvbnN0IG1vbnRoRW5kID0gbmV3IERhdGUobW9udGhEYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoRGF0ZS5nZXRNb250aCgpICsgMSwgMCk7XG4gICAgICBjb25zdCBjb3VudCA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICByZXR1cm4gZCA+PSBtb250aERhdGUgJiYgZCA8PSBtb250aEVuZDtcbiAgICAgIH0pLmxlbmd0aDtcbiAgICAgIGxhYmVscy5wdXNoKG1vbnRoTmFtZXNbbW9udGhEYXRlLmdldE1vbnRoKCldKTtcbiAgICAgIHZhbHVlcy5wdXNoKGNvdW50KTtcbiAgICB9XG4gIH1cblxuICBkcmF3TGluZUNoYXJ0KGNvbnRhaW5lciwgbGFiZWxzLCB2YWx1ZXMsIFwiI2Q0YTg0M1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBwZXJpb2Q6IFwibW9udGhcIiB8IFwieWVhclwiXG4pOiB2b2lkIHtcbiAgY29uc3QgYm9keUFjdGl2aXRpZXMgPSBzZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkICYmIGEuY2F0ZWdvcnkgPT09IFwiYm9keVwiKTtcbiAgaWYgKGJvZHlBY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXByb2dyZXNzLWVtcHR5XCIsIHRleHQ6IFwiTm8gYm9keSBhY3Rpdml0aWVzIGNvbmZpZ3VyZWRcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHZhbHVlczogbnVtYmVyW10gPSBbXTtcblxuICBpZiAocGVyaW9kID09PSBcIm1vbnRoXCIpIHtcbiAgICBmb3IgKGxldCB3ID0gMzsgdyA+PSAwOyB3LS0pIHtcbiAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtFbmQuZ2V0VGltZSgpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIGZvciAoY29uc3QgYWN0IG9mIGJvZHlBY3Rpdml0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbYWN0LmlkXSA/PyBbXTtcbiAgICAgICAgdG90YWwgKz0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnB1c2goYFckezQgLSB3fWApO1xuICAgICAgdmFsdWVzLnB1c2godG90YWwpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuICAgIGZvciAobGV0IG0gPSAxMTsgbSA+PSAwOyBtLS0pIHtcbiAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIG0sIDEpO1xuICAgICAgY29uc3QgbW9udGhFbmQgPSBuZXcgRGF0ZShtb250aERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGhEYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGFjdCBvZiBib2R5QWN0aXZpdGllcykge1xuICAgICAgICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW2FjdC5pZF0gPz8gW107XG4gICAgICAgIHRvdGFsICs9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgICByZXR1cm4gZCA+PSBtb250aERhdGUgJiYgZCA8PSBtb250aEVuZDtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnB1c2gobW9udGhOYW1lc1ttb250aERhdGUuZ2V0TW9udGgoKV0pO1xuICAgICAgdmFsdWVzLnB1c2godG90YWwpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdMaW5lQ2hhcnQoY29udGFpbmVyLCBsYWJlbHMsIHZhbHVlcywgXCIjZDRhODQzXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJNdXNjbGVCcmVha2Rvd25DaGFydChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXAsXG4gIHBlcmlvZDogXCJtb250aFwiIHwgXCJ5ZWFyXCJcbik6IHZvaWQge1xuICAvLyBTaG93IGJvZHktY2F0ZWdvcnkgYWN0aXZpdGllcyBhcyBzZXBhcmF0ZSBsaW5lc1xuICBjb25zdCBib2R5QWN0aXZpdGllcyA9IHNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQgJiYgYS5jYXRlZ29yeSA9PT0gXCJib2R5XCIpO1xuICBpZiAoYm9keUFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtZW1wdHlcIiwgdGV4dDogXCJObyBib2R5IGFjdGl2aXRpZXMgY29uZmlndXJlZFwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGNvbG9ycyA9IFtcIiNkNGE4NDNcIiwgXCIjZThjMzVhXCIsIFwiIzdiOWRlMFwiLCBcIiNhMDhkZTBcIiwgXCIjNWU5YTdhXCIsIFwiI2M0ODgyMFwiXTtcblxuICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3Qgd2lkdGggPSAyODA7XG4gIGNvbnN0IGhlaWdodCA9IDEyMDtcbiAgY29uc3QgcGFkZGluZyA9IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDIwLCBsZWZ0OiAyNCB9O1xuICBjb25zdCBjaGFydFcgPSB3aWR0aCAtIHBhZGRpbmcubGVmdCAtIHBhZGRpbmcucmlnaHQ7XG4gIGNvbnN0IGNoYXJ0SCA9IGhlaWdodCAtIHBhZGRpbmcudG9wIC0gcGFkZGluZy5ib3R0b207XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1wcm9ncmVzcy1zdmdcIik7XG5cbiAgY29uc3QgYnVja2V0Q291bnQgPSBwZXJpb2QgPT09IFwibW9udGhcIiA/IDQgOiAxMjtcblxuICAvLyBDb21wdXRlIGRhdGEgc2VyaWVzIGZvciBlYWNoIGFjdGl2aXR5XG4gIGNvbnN0IGFsbFNlcmllczogeyBuYW1lOiBzdHJpbmc7IHZhbHVlczogbnVtYmVyW107IGNvbG9yOiBzdHJpbmcgfVtdID0gW107XG4gIGxldCBnbG9iYWxNYXggPSAxO1xuXG4gIGZvciAobGV0IGFpID0gMDsgYWkgPCBib2R5QWN0aXZpdGllcy5sZW5ndGg7IGFpKyspIHtcbiAgICBjb25zdCBhY3QgPSBib2R5QWN0aXZpdGllc1thaV07XG4gICAgY29uc3QgY29tcHMgPSBjb21wbGV0aW9uRGF0YVthY3QuaWRdID8/IFtdO1xuICAgIGNvbnN0IHZhbHM6IG51bWJlcltdID0gW107XG5cbiAgICBpZiAocGVyaW9kID09PSBcIm1vbnRoXCIpIHtcbiAgICAgIGZvciAobGV0IHcgPSAzOyB3ID49IDA7IHctLSkge1xuICAgICAgICBjb25zdCB3ZWVrRW5kID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIHcgKiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtFbmQuZ2V0VGltZSgpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgICB2YWxzLnB1c2goY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICAgICAgfSkubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgbSA9IDExOyBtID49IDA7IG0tLSkge1xuICAgICAgICBjb25zdCBtb250aERhdGUgPSBuZXcgRGF0ZShub3cuZ2V0RnVsbFllYXIoKSwgbm93LmdldE1vbnRoKCkgLSBtLCAxKTtcbiAgICAgICAgY29uc3QgbW9udGhFbmQgPSBuZXcgRGF0ZShtb250aERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGhEYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgICAgdmFscy5wdXNoKGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgICByZXR1cm4gZCA+PSBtb250aERhdGUgJiYgZCA8PSBtb250aEVuZDtcbiAgICAgICAgfSkubGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBtYXggPSBNYXRoLm1heCguLi52YWxzLCAxKTtcbiAgICBpZiAobWF4ID4gZ2xvYmFsTWF4KSBnbG9iYWxNYXggPSBtYXg7XG5cbiAgICBhbGxTZXJpZXMucHVzaCh7XG4gICAgICBuYW1lOiBhY3QubmFtZSxcbiAgICAgIHZhbHVlczogdmFscyxcbiAgICAgIGNvbG9yOiBjb2xvcnNbYWkgJSBjb2xvcnMubGVuZ3RoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERyYXcgbGluZXNcbiAgZm9yIChjb25zdCBzZXJpZXMgb2YgYWxsU2VyaWVzKSB7XG4gICAgY29uc3QgcG9pbnRzID0gc2VyaWVzLnZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICAgIGNvbnN0IHggPSBwYWRkaW5nLmxlZnQgKyAoaSAvIChidWNrZXRDb3VudCAtIDEpKSAqIGNoYXJ0VztcbiAgICAgIGNvbnN0IHkgPSBwYWRkaW5nLnRvcCArIGNoYXJ0SCAtICh2IC8gZ2xvYmFsTWF4KSAqIGNoYXJ0SDtcbiAgICAgIHJldHVybiBgJHt4fSwke3l9YDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicG9seWxpbmVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJwb2ludHNcIiwgcG9pbnRzLmpvaW4oXCIgXCIpKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIHNlcmllcy5jb2xvcik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVqb2luXCIsIFwicm91bmRcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICB9XG5cbiAgLy8gWCBheGlzIGxhYmVsc1xuICBjb25zdCB4TGFiZWxzID0gcGVyaW9kID09PSBcIm1vbnRoXCJcbiAgICA/IFtcIlcxXCIsIFwiVzJcIiwgXCJXM1wiLCBcIlc0XCJdXG4gICAgOiBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWNrZXRDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIChpIC8gKGJ1Y2tldENvdW50IC0gMSkpICogY2hhcnRXO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRleHRcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKGhlaWdodCAtIDQpKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjQpXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjhcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSB4TGFiZWxzW2ldO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsYWJlbCk7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAvLyBMZWdlbmRcbiAgY29uc3QgbGVnZW5kID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWxlZ2VuZFwiIH0pO1xuICBmb3IgKGNvbnN0IHNlcmllcyBvZiBhbGxTZXJpZXMpIHtcbiAgICBjb25zdCBpdGVtID0gbGVnZW5kLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWxlZ2VuZC1pdGVtXCIgfSk7XG4gICAgY29uc3QgZG90ID0gaXRlbS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1sZWdlbmQtZG90XCIgfSk7XG4gICAgZG90LnN0eWxlLmJhY2tncm91bmQgPSBzZXJpZXMuY29sb3I7XG4gICAgaXRlbS5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBzZXJpZXMubmFtZSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3TGluZUNoYXJ0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBsYWJlbHM6IHN0cmluZ1tdLFxuICB2YWx1ZXM6IG51bWJlcltdLFxuICBjb2xvcjogc3RyaW5nXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIGNvbnN0IHdpZHRoID0gMjgwO1xuICBjb25zdCBoZWlnaHQgPSAxMDA7XG4gIGNvbnN0IHBhZGRpbmcgPSB7IHRvcDogMTAsIHJpZ2h0OiAxMCwgYm90dG9tOiAxOCwgbGVmdDogMTAgfTtcbiAgY29uc3QgY2hhcnRXID0gd2lkdGggLSBwYWRkaW5nLmxlZnQgLSBwYWRkaW5nLnJpZ2h0O1xuICBjb25zdCBjaGFydEggPSBoZWlnaHQgLSBwYWRkaW5nLnRvcCAtIHBhZGRpbmcuYm90dG9tO1xuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi52YWx1ZXMsIDEpO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4tcHJvZ3Jlc3Mtc3ZnXCIpO1xuXG4gIC8vIEdyaWQgbGluZXNcbiAgZm9yIChsZXQgZyA9IDA7IGcgPD0gMjsgZysrKSB7XG4gICAgY29uc3QgZ3kgPSBwYWRkaW5nLnRvcCArIChnIC8gMikgKiBjaGFydEg7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJsaW5lXCIpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgU3RyaW5nKHBhZGRpbmcubGVmdCkpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDJcIiwgU3RyaW5nKHdpZHRoIC0gcGFkZGluZy5yaWdodCkpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieTFcIiwgU3RyaW5nKGd5KSk7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MlwiLCBTdHJpbmcoZ3kpKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIwLjVcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICB9XG5cbiAgLy8gQnVpbGQgcG9pbnRzXG4gIGNvbnN0IHBvaW50cyA9IHZhbHVlcy5tYXAoKHYsIGkpID0+ICh7XG4gICAgeDogcGFkZGluZy5sZWZ0ICsgKGkgLyBNYXRoLm1heCgxLCB2YWx1ZXMubGVuZ3RoIC0gMSkpICogY2hhcnRXLFxuICAgIHk6IHBhZGRpbmcudG9wICsgY2hhcnRIIC0gKHYgLyBtYXhWYWwpICogY2hhcnRILFxuICB9KSk7XG5cbiAgLy8gU21vb3RoIGN1cnZlIChDYXRtdWxsLVJvbSBcdTIxOTIgY3ViaWMgYmV6aWVyKVxuICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgZCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzW01hdGgubWF4KDAsIGkgLSAxKV07XG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXTtcbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzW2kgKyAxXTtcbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzW01hdGgubWluKHBvaW50cy5sZW5ndGggLSAxLCBpICsgMildO1xuICAgICAgY29uc3QgY3AxeCA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNjtcbiAgICAgIGNvbnN0IGNwMXkgPSBwMS55ICsgKHAyLnkgLSBwMC55KSAvIDY7XG4gICAgICBjb25zdCBjcDJ4ID0gcDIueCAtIChwMy54IC0gcDEueCkgLyA2O1xuICAgICAgY29uc3QgY3AyeSA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNjtcbiAgICAgIGQgKz0gYCBDICR7Y3AxeH0gJHtjcDF5fSwgJHtjcDJ4fSAke2NwMnl9LCAke3AyLnh9ICR7cDIueX1gO1xuICAgIH1cblxuICAgIC8vIEFyZWEgZmlsbFxuICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicGF0aFwiKTtcbiAgICBjb25zdCBhcmVhRCA9IGQgKyBgIEwgJHtwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdLnh9ICR7cGFkZGluZy50b3AgKyBjaGFydEh9IEwgJHtwb2ludHNbMF0ueH0gJHtwYWRkaW5nLnRvcCArIGNoYXJ0SH0gWmA7XG4gICAgYXJlYS5zZXRBdHRyaWJ1dGUoXCJkXCIsIGFyZWFEKTtcbiAgICBhcmVhLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgY29sb3IpO1xuICAgIGFyZWEuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBcIjAuMDhcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGFyZWEpO1xuXG4gICAgLy8gQ3VydmUgbGluZVxuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgZCk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBjb2xvcik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgfVxuXG4gIC8vIERhdGEgZG90c1xuICBmb3IgKGNvbnN0IHB0IG9mIHBvaW50cykge1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJjaXJjbGVcIik7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhwdC54KSk7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcImN5XCIsIFN0cmluZyhwdC55KSk7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcInJcIiwgXCIyLjVcIik7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgY29sb3IpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChkb3QpO1xuICB9XG5cbiAgLy8gWC1heGlzIGxhYmVsc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHggPSBwYWRkaW5nLmxlZnQgKyAoaSAvIE1hdGgubWF4KDEsIGxhYmVscy5sZW5ndGggLSAxKSkgKiBjaGFydFc7XG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0ZXh0XCIpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoaGVpZ2h0IC0gNCkpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjQpXCIpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiOFwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gbGFiZWxzW2ldO1xuICAgIHN2Zy5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG4vLyAtLS0gTXVzY2xlIFNlbGVjdG9yIGZvciBOZXcgV29ya291dCAtLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNdXNjbGVTZWxlY3RvcihcbiAgb25Db25maXJtOiAoc2VsZWN0ZWQ6IE11c2NsZUdyb3VwSWRbXSkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0IG9sZW4tbXVzY2xlLXNlbGVjdG9yLXNoZWV0XCIgfSk7XG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLCB0ZXh0OiBcIlNlbGVjdCBNdXNjbGVzXCIgfSk7XG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1wcm9ncmVzcy1zdWJ0aXRsZVwiLFxuICAgIHRleHQ6IFwiVGFwIHRoZSBtdXNjbGVzIHlvdSB3YW50IHRvIHRyYWluXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHNlbGVjdGVkID0gbmV3IFNldDxNdXNjbGVHcm91cElkPigpO1xuXG4gIC8vIFNWRyBmaWd1cmUgd2l0aCBjbGlja2FibGUgbXVzY2xlc1xuICBjb25zdCBmaWd1cmVXcmFwID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tbXVzY2xlLXNlbGVjdG9yLWZpZ3VyZVwiIH0pO1xuXG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyMDAgNDAwXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtc3ZnIG9sZW4tc2VsZWN0b3Itc3ZnXCIpO1xuXG4gIC8vIERyYXcgc2lsaG91ZXR0ZVxuICBkcmF3Qm9keVNpbGhvdWV0dGUoc3ZnLCBzdmdOUywgXCJtYWxlXCIsIFwiZnJvbnRcIik7XG5cbiAgLy8gRHJhdyBjbGlja2FibGUgbXVzY2xlIHJlZ2lvbnNcbiAgY29uc3QgcmVjdHM6IE1hcDxNdXNjbGVHcm91cElkLCBTVkdSZWN0RWxlbWVudFtdPiA9IG5ldyBNYXAoKTtcblxuICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiBNVVNDTEVfUkVHSU9OUykge1xuICAgIGNvbnN0IGJvdW5kcyA9IHJlZ2lvbi5mcm9udCA/PyByZWdpb24uYmFjaztcbiAgICBpZiAoIWJvdW5kcykgY29udGludWU7XG5cbiAgICBjb25zdCB4ID0gYm91bmRzLnggKiAyO1xuICAgIGNvbnN0IHkgPSBib3VuZHMueSAqIDQ7XG4gICAgY29uc3QgdyA9IGJvdW5kcy53ICogMjtcbiAgICBjb25zdCBoID0gYm91bmRzLmggKiA0O1xuXG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJyZWN0XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHcpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoaCkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwicnlcIiwgXCI2XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1tdXNjbGUgb2xlbi1zZWxlY3Rvci1tdXNjbGVcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW11c2NsZVwiLCByZWdpb24uaWQpO1xuXG4gICAgY29uc3QgZXhpc3RpbmdSZWN0cyA9IHJlY3RzLmdldChyZWdpb24uaWQpID8/IFtdO1xuICAgIGV4aXN0aW5nUmVjdHMucHVzaChyZWN0KTtcbiAgICByZWN0cy5zZXQocmVnaW9uLmlkLCBleGlzdGluZ1JlY3RzKTtcblxuICAgIHJlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdG9nZ2xlTXVzY2xlKHJlZ2lvbi5pZCk7XG4gICAgfSk7XG5cbiAgICBzdmcuYXBwZW5kQ2hpbGQocmVjdCk7XG5cbiAgICAvLyBNaXJyb3JcbiAgICBpZiAoaXNTeW1tZXRyaWNNdXNjbGUocmVnaW9uLmlkKSAmJiBib3VuZHMueCA8IDUwKSB7XG4gICAgICBjb25zdCBtaXJyb3JYID0gMjAwIC0geCAtIHc7XG4gICAgICBjb25zdCBtaXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhtaXJyb3JYKSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhoKSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInJ5XCIsIFwiNlwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjA2KVwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1tdXNjbGUgb2xlbi1zZWxlY3Rvci1tdXNjbGVcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiZGF0YS1tdXNjbGVcIiwgcmVnaW9uLmlkKTtcblxuICAgICAgZXhpc3RpbmdSZWN0cy5wdXNoKG1pcnJvcik7XG4gICAgICByZWN0cy5zZXQocmVnaW9uLmlkLCBleGlzdGluZ1JlY3RzKTtcblxuICAgICAgbWlycm9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0b2dnbGVNdXNjbGUocmVnaW9uLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQobWlycm9yKTtcbiAgICB9XG5cbiAgICAvLyBMYWJlbCB0ZXh0XG4gICAgY29uc3QgbGFiZWxUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRleHRcIik7XG4gICAgbGFiZWxUZXh0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHggKyB3IC8gMikpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyh5ICsgaCAvIDIgKyAzKSk7XG4gICAgbGFiZWxUZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjUpXCIpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgXCI3XCIpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJwb2ludGVyLWV2ZW50c1wiLCBcIm5vbmVcIik7XG4gICAgbGFiZWxUZXh0LnRleHRDb250ZW50ID0gTVVTQ0xFX0dST1VQX0xBQkVMU1tyZWdpb24uaWRdLnNsaWNlKDAsIDUpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChsYWJlbFRleHQpO1xuICB9XG5cbiAgZmlndXJlV3JhcC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIC8vIFNlbGVjdGVkIGNoaXBzIGFyZWFcbiAgY29uc3QgY2hpcHNBcmVhID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tbXVzY2xlLXNlbGVjdG9yLWNoaXBzXCIgfSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlTXVzY2xlKGlkOiBNdXNjbGVHcm91cElkKTogdm9pZCB7XG4gICAgaWYgKHNlbGVjdGVkLmhhcyhpZCkpIHtcbiAgICAgIHNlbGVjdGVkLmRlbGV0ZShpZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdGVkLmFkZChpZCk7XG4gICAgfVxuICAgIHVwZGF0ZVZpc3VhbCgpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlVmlzdWFsKCk6IHZvaWQge1xuICAgIC8vIFVwZGF0ZSByZWN0c1xuICAgIGZvciAoY29uc3QgW2lkLCByZWN0TGlzdF0gb2YgcmVjdHMpIHtcbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBzZWxlY3RlZC5oYXMoaWQpO1xuICAgICAgZm9yIChjb25zdCByIG9mIHJlY3RMaXN0KSB7XG4gICAgICAgIHIuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBpc1NlbGVjdGVkID8gXCJyZ2JhKDIxMiwgMTY4LCA2NywgMC41KVwiIDogXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuMDYpXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBjaGlwc1xuICAgIGNoaXBzQXJlYS5lbXB0eSgpO1xuICAgIGZvciAoY29uc3QgaWQgb2Ygc2VsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IGNoaXAgPSBjaGlwc0FyZWEuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tbXVzY2xlLXNlbGVjdG9yLWNoaXBcIiB9KTtcbiAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBNVVNDTEVfR1JPVVBfTEFCRUxTW2lkXTtcbiAgICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRvZ2dsZU11c2NsZShpZCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbmZpcm0gYnV0dG9uXG4gIGNvbnN0IGFjdGlvbnMgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWFjdGlvbnNcIiB9KTtcbiAgY29uc3QgY29uZmlybUJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogXCJCZWdpbiBXb3Jrb3V0XCIsXG4gIH0pO1xuICBjb25maXJtQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xvc2VQb3B1cCgpO1xuICAgIG9uQ29uZmlybShBcnJheS5mcm9tKHNlbGVjdGVkKSk7XG4gIH0pO1xuXG4gIGNvbnN0IGNhbmNlbEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBcIkNhbmNlbFwiLFxuICB9KTtcbiAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVBvcHVwKCkpO1xuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVBvcHVwKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKTogdm9pZCB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBXZWlnaHQgUHJvZ3Jlc3MgQ29tcG9uZW50XG4vLyBXZWlnaHQgdHJlbmQgZ3JhcGggKyBsb2cgcmVtaW5kZXIgbm90aWZpY2F0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFdlaWdodExvZ0ZyZXF1ZW5jeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25Mb2dXZWlnaHQ6ICgpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBzdGF0cyA9IHNldHRpbmdzLnBlcnNvbmFsU3RhdHM7XG4gIGlmICghc3RhdHMuY3VycmVudFdlaWdodCB8fCBzdGF0cy53ZWlnaHRMb2cubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgY29uc3QgZGF5c1NpbmNlTG9nID0gZ2V0RGF5c1NpbmNlTGFzdExvZyhzdGF0cy5sYXN0V2VpZ2h0TG9nRGF0ZSk7XG4gIGNvbnN0IGludGVydmFsRGF5cyA9IGdldEludGVydmFsRGF5cyhzdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3ksIHN0YXRzLndlaWdodExvZ0N1c3RvbURheXMpO1xuXG4gIGlmIChkYXlzU2luY2VMb2cgPCBpbnRlcnZhbERheXMpIHJldHVybjtcblxuICAvLyBTaG93IG5vdGlmaWNhdGlvbiBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZC1jb21wYWN0IG9sZW4td2VpZ2h0LW5vdGlmeVwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCByb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlaWdodC1ub3RpZnktcm93XCIgfSk7XG4gIHJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBcIlRpbWUgdG8gbG9nIHlvdXIgd2VpZ2h0XCIgfSk7XG5cbiAgY29uc3QgYnRuID0gcm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXdlaWdodC1ub3RpZnktYnRuXCIsXG4gICAgdGV4dDogXCJMb2dcIixcbiAgfSk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uTG9nV2VpZ2h0KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXREYXlzU2luY2VMYXN0TG9nKGxhc3REYXRlOiBzdHJpbmcgfCBudWxsKTogbnVtYmVyIHtcbiAgaWYgKCFsYXN0RGF0ZSkgcmV0dXJuIDk5OTtcbiAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKGxhc3REYXRlKTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbXMgPSBub3cuZ2V0VGltZSgpIC0gbGFzdC5nZXRUaW1lKCk7XG4gIHJldHVybiBNYXRoLmZsb29yKG1zIC8gKDI0ICogNjAgKiA2MCAqIDEwMDApKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW50ZXJ2YWxEYXlzKGZyZXE6IFdlaWdodExvZ0ZyZXF1ZW5jeSwgY3VzdG9tRGF5czogbnVtYmVyKTogbnVtYmVyIHtcbiAgc3dpdGNoIChmcmVxKSB7XG4gICAgY2FzZSBcInR3aWNlLWEtd2Vla1wiOiByZXR1cm4gMztcbiAgICBjYXNlIFwiZXZlcnktd2Vla1wiOiByZXR1cm4gNztcbiAgICBjYXNlIFwiZXZlcnktMi13ZWVrc1wiOiByZXR1cm4gMTQ7XG4gICAgY2FzZSBcImV2ZXJ5LTMtZGF5c1wiOiByZXR1cm4gMztcbiAgICBjYXNlIFwiZXZlcnktNS1kYXlzXCI6IHJldHVybiA1O1xuICAgIGNhc2UgXCJjdXN0b21cIjogcmV0dXJuIGN1c3RvbURheXM7XG4gICAgZGVmYXVsdDogcmV0dXJuIDc7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFdvcmtzcGFjZSBWaWV3XG4vLyBBY3RpdmUgd29ya3NwYWNlIHNjcmVlbiB3aXRoIHRpbWVyLCBza2lsbHMsIGZpbmlzaCBmbG93LlxuLy8gV2hlbiBhbiBhY3Rpdml0eSBoYXMgYSB3b3Jrc3BhY2VUZW1wbGF0ZSwgdGhlIHRlbXBsYXRlIGlzXG4vLyByZW5kZXJlZCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRpbWVyIFVJLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEl0ZW1WaWV3LCBXb3Jrc3BhY2VMZWFmLCBURmlsZSwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVdvcmtzcGFjZSwgQWN0aXZpdHlDb25maWcsIFdvcmtzcGFjZVR5cGUsIFdvcmtzcGFjZVJlc3VsdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgVklFV19UWVBFX1dPUktTUEFDRSwgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICBwcml2YXRlIHRpbWVySW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN0YXJ0VGltZTogRGF0ZTtcbiAgcHJpdmF0ZSBlbGFwc2VkID0gMDsgLy8gc2Vjb25kc1xuICAvKiogV2hlbiBpbiB0ZW1wbGF0ZSBtb2RlLCB0cmFja3MgdGhlIGRhaWx5IG5vdGUgZmlsZSB0aGUgdGVtcGxhdGUgaXMgYm91bmQgdG8gKi9cbiAgcHJpdmF0ZSB0ZW1wbGF0ZU5vdGVGaWxlOiBURmlsZSB8IG51bGwgPSBudWxsO1xuICAvKiogVHJhY2tzIHdoZXRoZXIgd2UgYWxyZWFkeSBwcm9jZXNzZWQgYSBjb21wbGV0aW9uIChwcmV2ZW50cyBkb3VibGUtYXBwbHkpICovXG4gIHByaXZhdGUgY29tcGxldGlvbkFwcGxpZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfV09SS1NQQUNFO1xuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2U7XG4gICAgcmV0dXJuIHdvcmtzcGFjZSA/IGBXb3Jrc3BhY2U6ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX1gIDogXCJXb3Jrc3BhY2VcIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJ0aW1lclwiO1xuICB9XG5cbiAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHdvcmtzcGFjZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZTtcbiAgICBpZiAoIXdvcmtzcGFjZSkge1xuICAgICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBcIk5vIGFjdGl2ZSB3b3Jrc3BhY2UuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoXG4gICAgICAoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQsXG4gICAgKTtcblxuICAgIGlmIChhY3Rpdml0eT8ud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgIC8vIFRlbXBsYXRlIG1vZGU6IHJlbmRlciB0aGUgYWN0aXZpdHkgdGVtcGxhdGUgYm91bmQgdG8gdG9kYXkncyBkYWlseSBub3RlXG4gICAgICBhd2FpdCB0aGlzLnJlbmRlclRlbXBsYXRlTW9kZSh3b3Jrc3BhY2UsIGFjdGl2aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmYXVsdCBtb2RlOiB0aW1lciArIHNraWxscyArIGZpbmlzaFxuICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSh3b3Jrc3BhY2Uuc3RhcnRUaW1lKTtcbiAgICAgIHRoaXMucmVuZGVyKHdvcmtzcGFjZSk7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgdGhpcy50ZW1wbGF0ZU5vdGVGaWxlID0gbnVsbDtcbiAgICB0aGlzLmNvbXBsZXRpb25BcHBsaWVkID0gZmFsc2U7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gVGVtcGxhdGUgTW9kZVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJUZW1wbGF0ZU1vZGUoXG4gICAgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIC8vIEZpbmQgb3IgY3JlYXRlIHRvZGF5J3MgZGFpbHkgbm90ZSBmb3IgdGhpcyBhY3Rpdml0eVxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmZpbmRPckNyZWF0ZURhaWx5Tm90ZShhY3Rpdml0eSk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBjb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICB0ZXh0OiBcIkNvdWxkIG5vdCBsb2FkIGFjdGl2aXR5IG5vdGUuXCIsXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY29sb3I6IHZhcigtLXRleHQtZXJyb3IpOyBwYWRkaW5nOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XCIgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGVtcGxhdGVOb3RlRmlsZSA9IGZpbGU7XG5cbiAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSBjYWNoZSB0byBwb3B1bGF0ZSAoaW1wb3J0YW50IGZvciBuZXdseSBjcmVhdGVkIGZpbGVzKVxuICAgIGF3YWl0IHRoaXMud2FpdEZvck1ldGFkYXRhKGZpbGUpO1xuXG4gICAgLy8gUmVuZGVyIHRlbXBsYXRlIGludG8gdGhlIHZpZXcncyBjb250ZW50IGFyZWFcbiAgICBjb25zdCB0ZW1wbGF0ZUNvbnRhaW5lciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1yb290XCIgfSk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4udGVtcGxhdGVFbmdpbmUucmVuZGVyKFxuICAgICAgYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUhLFxuICAgICAgZmlsZSxcbiAgICAgIHRlbXBsYXRlQ29udGFpbmVyLFxuICAgICk7XG5cbiAgICAvLyBXYXRjaCBmb3IgdGhlIHRlbXBsYXRlIG1hcmtpbmcgdGhlIGFjdGl2aXR5IGFzIGRvbmUgaW4gZnJvbnRtYXR0ZXIuXG4gICAgLy8gV2hlbiB0aGUgYWN0aXZpdHkgcHJvcGVydHkgYmVjb21lcyB0cnVlLCBhcHBseSBwbHVnaW4tbGV2ZWwgZWZmZWN0c1xuICAgIC8vIChYUCwgYm9zcyBkYW1hZ2UsIGNsZWFyIGFjdGl2ZVdvcmtzcGFjZSkuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKGNoYW5nZWRGaWxlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRpb25BcHBsaWVkKSByZXR1cm47XG4gICAgICAgIGlmIChjaGFuZ2VkRmlsZS5wYXRoICE9PSBmaWxlLnBhdGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGNoYW5nZWRGaWxlKTtcbiAgICAgICAgY29uc3QgZm0gPSBjYWNoZT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGlmIChmbT8uW2FjdGl2aXR5LnByb3BlcnR5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGlvbkFwcGxpZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGNvbXBsZXRpb25UeXBlID0gZm1bYCR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGVgXSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5hcHBseVRlbXBsYXRlQ29tcGxldGlvbih3b3Jrc3BhY2UsIGFjdGl2aXR5LCBjb21wbGV0aW9uVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0b2RheSdzIGRhaWx5IG5vdGUgaW4gdGhlIGFjdGl2aXR5IGZvbGRlciwgb3IgY3JlYXRlIG9uZS5cbiAgICogRW5zdXJlcyB0aGUgbm90ZSBoYXMgYGFjdGl2aXR5OiA8aWQ+YCBpbiBmcm9udG1hdHRlciBzbyB0aGVcbiAgICogdGVtcGxhdGUgcG9zdC1wcm9jZXNzb3IgYWxzbyB3b3JrcyB3aGVuIG9wZW5pbmcgdGhlIG5vdGUgZGlyZWN0bHkuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGZpbmRPckNyZWF0ZURhaWx5Tm90ZShhY3Rpdml0eTogQWN0aXZpdHlDb25maWcpOiBQcm9taXNlPFRGaWxlIHwgbnVsbD4ge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgZXhpc3RpbmcgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmXG4gICAgICAgIGYuYmFzZW5hbWUgPT09IGRhdGVTdHIsXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgLy8gRW5zdXJlIGl0IGhhcyB0aGUgYWN0aXZpdHkgZmllbGQgaW4gZnJvbnRtYXR0ZXJcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihleGlzdGluZywgKGZtKSA9PiB7XG4gICAgICAgIGlmICghZm0uYWN0aXZpdHkpIGZtLmFjdGl2aXR5ID0gYWN0aXZpdHkuaWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBleGlzdGluZztcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgZm9sZGVyIGV4aXN0c1xuICAgIGNvbnN0IGFic3RyYWN0Rm9sZGVyID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZvbGRlcik7XG4gICAgaWYgKCFhYnN0cmFjdEZvbGRlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGZvbGRlcik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gRm9sZGVyIG1heSBhbHJlYWR5IGV4aXN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIG5ldyBkYWlseSBub3RlIHdpdGggYWN0aXZpdHkgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHtkYXRlU3RyfS5tZGA7XG4gICAgY29uc3QgY29udGVudCA9IGAtLS1cXG5hY3Rpdml0eTogJHthY3Rpdml0eS5pZH1cXG4tLS1cXG5gO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEZpbGUgbWlnaHQgYWxyZWFkeSBleGlzdCB3aXRoIGEgZGlmZmVyZW50IGNhc2luZyBvciByYWNlIGNvbmRpdGlvblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhaXQgdW50aWwgdGhlIG1ldGFkYXRhIGNhY2hlIGhhcyBpbmRleGVkIGEgZmlsZSdzIGZyb250bWF0dGVyLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB3YWl0Rm9yTWV0YWRhdGEoZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIHdoaWxlIChhdHRlbXB0cyA8IDIwKSB7XG4gICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcikgcmV0dXJuO1xuICAgICAgYXdhaXQgc2xlZXAoNTApO1xuICAgICAgYXR0ZW1wdHMrKztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHRlbXBsYXRlIG1hcmtzIHRoZSBhY3Rpdml0eSBhcyBkb25lIGluIGZyb250bWF0dGVyLlxuICAgKiBBcHBsaWVzIHBsdWdpbi1sZXZlbCBlZmZlY3RzOiBYUCwgYm9zcyBkYW1hZ2UsIGNsZWFyIHdvcmtzcGFjZS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlUZW1wbGF0ZUNvbXBsZXRpb24oXG4gICAgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICAgIGNvbXBsZXRpb25UeXBlPzogc3RyaW5nLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBNYXAgdGhlIHRlbXBsYXRlJ3MgY29tcGxldGlvbiB0eXBlIHRvIGEgd29ya3NwYWNlIHN0YXRlXG4gICAgY29uc3Qgd3NUeXBlID0gY29tcGxldGlvblR5cGU/LnRvTG93ZXJDYXNlKCkgYXMgV29ya3NwYWNlVHlwZSB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdGF0ZSA9IHdzVHlwZVxuICAgICAgPyB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IHdzVHlwZSlcbiAgICAgIDogdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSBcImRpc2NpcGxpbmVcIik7XG5cbiAgICAvLyBBcHBseSBYUFxuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS54cE11bHRpcGxpZXIgPiAwKSB7XG4gICAgICBjb25zdCB4cEdhaW4gPSBNYXRoLnJvdW5kKFxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uICogc3RhdGUueHBNdWx0aXBsaWVyLFxuICAgICAgKTtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbd29ya3NwYWNlLmNhdGVnb3J5XSArPSB4cEdhaW47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgYm9zcyBkYW1hZ2UgKHVubGVzcyBza2lwcGVkKVxuICAgIGlmICh3c1R5cGUgIT09IFwic2tpcHBlZFwiKSB7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3Rpdml0eS5kYW1hZ2VQZXJDb21wbGV0aW9uLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciBhY3RpdmUgd29ya3NwYWNlXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gbnVsbDtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gRGVmYXVsdCBNb2RlICh0aW1lciArIHNraWxscyArIGZpbmlzaClcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgc3RhcnRUaW1lcigpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5lbGFwc2VkID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICAgIGNvbnN0IHRpbWVyRWwgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4td29ya3NwYWNlLXRpbWVyXCIpO1xuICAgICAgaWYgKHRpbWVyRWwpIHRpbWVyRWwudGV4dENvbnRlbnQgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5lbGFwc2VkKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVySW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIGNvbnN0IHJvb3QgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGFzaGJvYXJkIG9sZW4td29ya3NwYWNlLXJvb3RcIiB9KTtcblxuICAgIC8vIFRvcCBiYXJcbiAgICBjb25zdCB0b3BCYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS10b3BiYXJcIiB9KTtcblxuICAgIGNvbnN0IGFjdEluZm8gPSB0b3BCYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjdC1pbmZvXCIgfSk7XG4gICAgYWN0SW5mby5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtZW1vamlcIiwgdGV4dDogd29ya3NwYWNlLmVtb2ppIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjdC1uYW1lXCIsIHRleHQ6IHdvcmtzcGFjZS5hY3Rpdml0eU5hbWUgfSk7XG5cbiAgICBjb25zdCB0aW1lckVsID0gdG9wQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS10aW1lclwiLFxuICAgICAgdGV4dDogXCIwMDowMFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmluaXNoQnRuID0gdG9wQmFyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4td29ya3NwYWNlLWZpbmlzaC1idG5cIixcbiAgICAgIHRleHQ6IFwiRklOSVNIXCIsXG4gICAgfSk7XG4gICAgZmluaXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dGaW5pc2hNb2RhbCh3b3Jrc3BhY2UpKTtcblxuICAgIC8vIENhdGVnb3J5IGFjY2VudCBsaW5lXG4gICAgY29uc3QgYWNjZW50Q29sb3IgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1t3b3Jrc3BhY2UuY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xuICAgIGNvbnN0IGFjY2VudCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjY2VudFwiIH0pO1xuICAgIGFjY2VudC5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHthY2NlbnRDb2xvcn0sIHRyYW5zcGFyZW50KWA7XG5cbiAgICAvLyBNYWluIGNvbnRlbnQgYXJlYVxuICAgIGNvbnN0IGNvbnRlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1jb250ZW50XCIgfSk7XG5cbiAgICAvLyBTa2lsbHMgc2VjdGlvblxuICAgIGNvbnN0IHNraWxsc1NlY3Rpb24gPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbHMtc2VjdGlvblwiIH0pO1xuICAgIHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IFwiV09SS1NQQUNFIFNLSUxMU1wiIH0pO1xuXG4gICAgY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gc2tpbGxzU2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzXCIgfSk7XG5cbiAgICBpZiAod29ya3NwYWNlLnNraWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNraWxsc0NvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1uby1za2lsbHNcIixcbiAgICAgICAgdGV4dDogXCJObyBza2lsbHMgdGFnZ2VkIHlldFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qgc2tpbGwgb2Ygd29ya3NwYWNlLnNraWxscykge1xuICAgICAgICBjb25zdCBjaGlwID0gc2tpbGxzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1jaGlwXCIgfSk7XG4gICAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBza2lsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgc2tpbGxzIGJ1dHRvblxuICAgIGNvbnN0IGFkZFNraWxsQnRuID0gc2tpbGxzU2VjdGlvbi5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4td29ya3NwYWNlLWFkZC1za2lsbFwiLFxuICAgICAgdGV4dDogXCIrIEFERCBTS0lMTFwiLFxuICAgIH0pO1xuICAgIGFkZFNraWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dTa2lsbFBpY2tlcih3b3Jrc3BhY2UpKTtcblxuICAgIC8vIEZvY3VzIHpvbmUgXHUyMDE0IG1vdGl2YXRpb25hbCBhcmVhXG4gICAgY29uc3QgZm9jdXNab25lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtZm9jdXNcIiB9KTtcbiAgICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG4gICAgZm9jdXNab25lLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLXRleHRcIixcbiAgICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgfSk7XG4gICAgZm9jdXNab25lLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICB9KTtcblxuICAgIC8vIEJvdHRvbSBiYXJcbiAgICBjb25zdCBib3R0b21CYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1ib3R0b21iYXJcIiB9KTtcbiAgICBjb25zdCBjYXRMYWJlbCA9IHdvcmtzcGFjZS5jYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmtzcGFjZS5jYXRlZ29yeS5zbGljZSgxKTtcbiAgICBib3R0b21CYXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4td29ya3NwYWNlLWNhdGVnb3J5LWxhYmVsXCIsXG4gICAgICB0ZXh0OiBjYXRMYWJlbCxcbiAgICB9KTtcbiAgICBib3R0b21CYXIuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gYWNjZW50Q29sb3I7XG4gIH1cblxuICBwcml2YXRlIHNob3dTa2lsbFBpY2tlcih3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSk6IHZvaWQge1xuICAgIC8vIFByb21wdCBmb3Igc2tpbGwgbmFtZSB2aWEgYSBzaW1wbGUgaW5wdXRcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJBREQgU0tJTExcIiB9KTtcblxuICAgIGNvbnN0IGlucHV0V3JhcCA9IHNoZWV0LmNyZWF0ZURpdih7IGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiAyMHB4IDA7XCIgfSB9KTtcbiAgICBjb25zdCBpbnB1dCA9IGlucHV0V3JhcC5jcmVhdGVFbChcImlucHV0XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1pbnB1dFwiLFxuICAgICAgYXR0cjogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU2tpbGwgbmFtZS4uLlwiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBJZiBza2lsbCBmb2xkZXIgZXhpc3RzLCBsb2FkIGV4aXN0aW5nIHNraWxsc1xuICAgIGlmICh3b3Jrc3BhY2Uuc2tpbGxGb2xkZXIpIHtcbiAgICAgIGNvbnN0IHNraWxscyA9IHRoaXMubG9hZFNraWxsc0Zyb21Gb2xkZXIod29ya3NwYWNlLnNraWxsRm9sZGVyKTtcbiAgICAgIGlmIChza2lsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbHNcIiwgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiAxNnB4O1wiIH0gfSk7XG4gICAgICAgIGZvciAoY29uc3Qgc2tpbGwgb2Ygc2tpbGxzKSB7XG4gICAgICAgICAgY29uc3QgY2hpcCA9IGV4aXN0aW5nLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1jaGlwIG9sZW4tY2xpY2thYmxlXCIgfSk7XG4gICAgICAgICAgY2hpcC50ZXh0Q29udGVudCA9IHNraWxsO1xuICAgICAgICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFNraWxsKHNraWxsKTtcbiAgICAgICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbnMgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgY29uc3QgYWRkQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgICAgdGV4dDogXCJBRERcIixcbiAgICB9KTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgYWRkU2tpbGwodmFsKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgICB0ZXh0OiBcIkNBTkNFTFwiLFxuICAgIH0pO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VTaGVldCgpKTtcblxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlU2hlZXQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFNraWxsID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCF3b3Jrc3BhY2Uuc2tpbGxzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIHdvcmtzcGFjZS5za2lsbHMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gd29ya3NwYWNlO1xuICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIod29ya3NwYWNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VTaGVldCA9ICgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkU2tpbGxzRnJvbUZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIjtcbiAgICByZXR1cm4gZmlsZXNcbiAgICAgIC5maWx0ZXIoKGYpID0+IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKVxuICAgICAgLm1hcCgoZikgPT4gZi5iYXNlbmFtZSlcbiAgICAgIC5zb3J0KCk7XG4gIH1cblxuICBwcml2YXRlIHNob3dGaW5pc2hNb2RhbCh3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZCgoZW5kVGltZS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gNjAwMDApO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJIT1cgRElEIElUIEZFRUw/XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYm9keS1pdGFsaWNcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiAxMnB4IDAgMjBweDtcIiB9LFxuICAgICAgdGV4dDogYCR7d29ya3NwYWNlLmVtb2ppfSAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9IFx1MDBCNyAke2R1cmF0aW9uTWludXRlc30gbWludXRlc2AsXG4gICAgfSk7XG5cbiAgICAvLyBDb21wbGV0aW9uIHN0YXRlIGJ1dHRvbnNcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbHRlcigocykgPT4gcy5lbmFibGVkKTtcbiAgICBjb25zdCBzdGF0ZXNHcmlkID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlcy1ncmlkXCIgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgICAgY29uc3QgYnRuID0gc3RhdGVzR3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGUtYnRuXCIgfSk7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBzdGF0ZS5jb2xvcjtcblxuICAgICAgYnRuLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlLWljb25cIiwgdGV4dDogc3RhdGUuaWNvbiB9KTtcbiAgICAgIGJ0bi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZS1uYW1lXCIsIHRleHQ6IHN0YXRlLm5hbWUgfSk7XG5cbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCA9IHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiB3b3Jrc3BhY2UuYWN0aXZpdHlJZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IHdvcmtzcGFjZS5hY3Rpdml0eU5hbWUsXG4gICAgICAgICAgY2F0ZWdvcnk6IHdvcmtzcGFjZS5jYXRlZ29yeSxcbiAgICAgICAgICB0eXBlOiBzdGF0ZS5pZCxcbiAgICAgICAgICBzdGFydFRpbWU6IHdvcmtzcGFjZS5zdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZTogZW5kVGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIGR1cmF0aW9uTWludXRlcyxcbiAgICAgICAgICBza2lsbHM6IHdvcmtzcGFjZS5za2lsbHMsXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5maW5pc2hXb3Jrc3BhY2UocmVzdWx0LCB3b3Jrc3BhY2UpO1xuICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICAgIC8vIERvbid0IGNsb3NlIG9uIG92ZXJsYXkgdGFwIFx1MjAxNCB1c2VyIG11c3QgY2hvb3NlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZVNoZWV0ID0gKCkgPT4ge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGZpbmlzaFdvcmtzcGFjZShyZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCwgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyAxLiBDcmVhdGUgd29ya3NwYWNlIG1hcmtkb3duIGZpbGUgaW4gdGhlIGFjdGl2aXR5IGZvbGRlclxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgaWYgKGFjdGl2aXR5Py5mb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlV29ya3NwYWNlRmlsZShyZXN1bHQsIGFjdGl2aXR5LmZvbGRlcik7XG4gICAgfVxuXG4gICAgLy8gMi4gVXBkYXRlIHRoZSBhY3Rpdml0eSdzIGRhaWx5IG5vdGUgZnJvbnRtYXR0ZXJcbiAgICBhd2FpdCB0aGlzLm1hcmtBY3Rpdml0eURvbmUod29ya3NwYWNlLCByZXN1bHQpO1xuXG4gICAgLy8gMy4gQXBwbHkgWFBcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gcmVzdWx0LnR5cGUpO1xuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS54cE11bHRpcGxpZXIgPiAwKSB7XG4gICAgICBjb25zdCB4cEdhaW4gPSBNYXRoLnJvdW5kKHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb24gKiBzdGF0ZS54cE11bHRpcGxpZXIpO1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFt3b3Jrc3BhY2UuY2F0ZWdvcnldICs9IHhwR2FpbjtcbiAgICB9XG5cbiAgICAvLyA0LiBBcHBseSBib3NzIGRhbWFnZSAodW5sZXNzIHNraXBwZWQpXG4gICAgaWYgKHJlc3VsdC50eXBlICE9PSBcInNraXBwZWRcIikge1xuICAgICAgY29uc3QgYWN0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgICBpZiAoYWN0KSB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBNYXRoLm1heChcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3QuZGFtYWdlUGVyQ29tcGxldGlvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDUuIENsZWFyIGFjdGl2ZSB3b3Jrc3BhY2VcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgPSBudWxsO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgLy8gNi4gU2hvdyBub3RpY2VcbiAgICBjb25zdCBzdGF0ZUxhYmVsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSByZXN1bHQudHlwZSk/Lm5hbWUgPz8gcmVzdWx0LnR5cGU7XG4gICAgbmV3IE5vdGljZShgJHt3b3Jrc3BhY2UuZW1vaml9ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX0gXHUyMDE0ICR7c3RhdGVMYWJlbH0gXHUwMEI3ICR7cmVzdWx0LmR1cmF0aW9uTWludXRlc31tYCk7XG5cbiAgICAvLyA3LiBTd2l0Y2ggYmFjayB0byBkYXNoYm9hcmRcbiAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZURhc2hib2FyZFZpZXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlV29ya3NwYWNlRmlsZShyZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCwgZm9sZGVyOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gcmVzdWx0LmFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYWN0aXZpdHk/LnByb3BlcnR5ID8/IHJlc3VsdC5hY3Rpdml0eU5hbWU7XG5cbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUocmVzdWx0LmVuZFRpbWUpO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKHJlc3VsdC5zdGFydFRpbWUpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBlbmRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIC8vIE5hbWluZzogXCJXb3Jrc3BhY2UgWVlZWS1NTS1ERCBISE1NXCJcbiAgICBjb25zdCB0aW1lU3RyID0gYCR7U3RyaW5nKGVuZFRpbWUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpfSR7U3RyaW5nKGVuZFRpbWUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGBXb3Jrc3BhY2UgJHtkYXRlU3RyfSAke3RpbWVTdHJ9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0ubWRgO1xuXG4gICAgLy8gQnVpbGQgdGltZXpvbmUtYXdhcmUgdGltZXN0YW1wXG4gICAgY29uc3QgdHpPZmZzZXQgPSAtc3RhcnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgY29uc3QgdHpIb3VycyA9IFN0cmluZyhNYXRoLmZsb29yKE1hdGguYWJzKHR6T2Zmc2V0KSAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHR6TWlucyA9IFN0cmluZyhNYXRoLmFicyh0ek9mZnNldCkgJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHR6U2lnbiA9IHR6T2Zmc2V0ID49IDAgPyBcIitcIiA6IFwiLVwiO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IHN0YXJ0VGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKSArIHR6U2lnbiArIHR6SG91cnMgKyBcIjpcIiArIHR6TWlucztcblxuICAgIGNvbnN0IGVuZFRpbWVzdGFtcCA9IGVuZFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyB0elNpZ24gKyB0ekhvdXJzICsgXCI6XCIgKyB0ek1pbnM7XG5cbiAgICAvLyBQaWNrIGEgcXVvdGVcbiAgICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG5cbiAgICAvLyBDYXBpdGFsaXplIGNvbXBsZXRpb24gdHlwZSB0byBtYXRjaCBleGlzdGluZyBmb3JtYXQgKERpc2NpcGxpbmUvRmxvdy9Ta2lwcGVkKVxuICAgIGNvbnN0IHR5cGVOYW1lID0gcmVzdWx0LnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQudHlwZS5zbGljZSgxKTtcbiAgICBjb25zdCBkdXJhdGlvblN0ciA9IGAke01hdGguZmxvb3IocmVzdWx0LmR1cmF0aW9uTWludXRlcyAvIDYwKX1oICR7cmVzdWx0LmR1cmF0aW9uTWludXRlcyAlIDYwfW1gO1xuXG4gICAgLy8gQnVpbGQgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBmbUxpbmVzID0gW1xuICAgICAgXCItLS1cIixcbiAgICAgIFwiZWRpdG9yLXdpZHRoOiAxMDBcIixcbiAgICAgIGAke3Byb3BlcnR5fTogdHJ1ZWAsXG4gICAgICBgJHtwcm9wZXJ0eX0tVHlwZTogXCIke3R5cGVOYW1lfVwiYCxcbiAgICAgIGBUaW1lc3RhbXA6IFwiJHt0aW1lc3RhbXB9XCJgLFxuICAgICAgYGVuZFRpbWU6IFwiJHtlbmRUaW1lc3RhbXB9XCJgLFxuICAgICAgYGR1cmF0aW9uOiBcIiR7ZHVyYXRpb25TdHJ9XCJgLFxuICAgICAgYGNhdGVnb3J5OiBcIiR7cmVzdWx0LmNhdGVnb3J5fVwiYCxcbiAgICAgIHJlc3VsdC5za2lsbHMubGVuZ3RoID4gMFxuICAgICAgICA/IGBza2lsbHM6IFske3Jlc3VsdC5za2lsbHMubWFwKChzKSA9PiBgXCIke3N9XCJgKS5qb2luKFwiLCBcIil9XWBcbiAgICAgICAgOiBcInNraWxsczogW11cIixcbiAgICAgIFwiY3NzY2xhc3NlczpcIixcbiAgICAgIFwiICAtIGhpZGUtcHJvcGVydGllc1wiLFxuICAgICAgXCItLS1cIixcbiAgICBdO1xuXG4gICAgY29uc3QgYm9keSA9IFtcbiAgICAgIFwiXCIsXG4gICAgICBgIyAke2FjdGl2aXR5Py5lbW9qaSA/PyBcIlwifSAke3Jlc3VsdC5hY3Rpdml0eU5hbWV9IFdvcmtzcGFjZWAsXG4gICAgICBcIlwiLFxuICAgICAgYD4gXCIke3F1b3RlLnRleHR9XCJgLFxuICAgICAgYD4gXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICAgIFwiXCIsXG4gICAgICBcIiMjIE5vdGVzXCIsXG4gICAgICBcIlwiLFxuICAgICAgXCJcIixcbiAgICBdO1xuXG4gICAgY29uc3QgY29udGVudCA9IFsuLi5mbUxpbmVzLCAuLi5ib2R5XS5qb2luKFwiXFxuXCIpO1xuXG4gICAgLy8gRW5zdXJlIGZvbGRlciBleGlzdHNcbiAgICBjb25zdCBhYnN0cmFjdEZvbGRlciA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXIpO1xuICAgIGlmICghYWJzdHJhY3RGb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXIpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBkdXBsaWNhdGUgZmlsZW5hbWVzXG4gICAgbGV0IGZpbmFsUGF0aCA9IGZpbGVQYXRoO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMjtcbiAgICAgIHdoaWxlICh0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgKSkge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgICBmaW5hbFBhdGggPSBgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9ICgke2NvdW50ZXJ9KS5tZGA7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbmFsUGF0aCwgY29udGVudCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1hcmtBY3Rpdml0eURvbmUod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsIHJlc3VsdD86IFdvcmtzcGFjZVJlc3VsdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIEZpbmQgdG9kYXkncyBub3RlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXIgYW5kIHNldCB0aGUgcHJvcGVydHkgdG8gdHJ1ZVxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgY29uc3QgZm9sZGVyID0gYWN0aXZpdHkuZm9sZGVyO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBMb29rIGZvciBhIGZpbGUgbWF0Y2hpbmcgdG9kYXkncyBkYXRlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgdG9kYXlGaWxlID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PiAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmIGYuYmFzZW5hbWUgPT09IGRhdGVTdHJcbiAgICApO1xuXG4gICAgaWYgKHRvZGF5RmlsZSkge1xuICAgICAgLy8gVXBkYXRlIGZyb250bWF0dGVyIFx1MjAxNCBzZXQgcHJvcGVydHkgYW5kIGNvbXBsZXRpb24gdHlwZVxuICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKHRvZGF5RmlsZSwgKGZyb250bWF0dGVyKSA9PiB7XG4gICAgICAgIGZyb250bWF0dGVyW2FjdGl2aXR5LnByb3BlcnR5XSA9IHRydWU7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHJlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSk7XG4gICAgICAgICAgZnJvbnRtYXR0ZXJbYCR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGVgXSA9IHR5cGVOYW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBkYWlseSBub3RlIHdpdGggdGhlIHByb3BlcnR5IHNldFxuICAgICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgICAgY29uc3QgdHlwZUxpbmUgPSByZXN1bHRcbiAgICAgICAgPyBgXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX0tVHlwZTogXCIke3Jlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSl9XCJgXG4gICAgICAgIDogXCJcIjtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBgLS0tXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX06IHRydWUke3R5cGVMaW5lfVxcbi0tLVxcbmA7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZVBhdGgsIGNvbnRlbnQpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEZpbGUgbWlnaHQgYWxyZWFkeSBleGlzdCB3aXRoIGEgZGlmZmVyZW50IG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFRpbWUoc2Vjb25kczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKHNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICBjb25zdCBzID0gc2Vjb25kcyAlIDYwO1xuICAgIGlmIChoID4gMCkge1xuICAgICAgcmV0dXJuIGAke2h9OiR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtTdHJpbmcocykucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfToke1N0cmluZyhzKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgfVxufVxuXG4vLyBVdGlsaXR5XG5mdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgU2V0dGluZ3MgVGFiXG4vLyBDb2xsYXBzaWJsZSBzZWN0aW9ucyBmb3IgYWxsIHBsdWdpbiBjb25maWd1cmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBUZXh0Q29tcG9uZW50LCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZpdHlDb25maWcsIENhdGVnb3J5LCBUZW1wbGVUYXNrLCBHZW5kZXIsIFdlaWdodExvZ0ZyZXF1ZW5jeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9BQ1RJVklUSUVTLCBERUZBVUxUX0RFVl9DT05GSUcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBPbGVuU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgIGNvbnRhaW5lckVsLmFkZENsYXNzKFwib2xlbi1zZXR0aW5nc1wiKTtcblxuICAgIC8vIEhlYWRlclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiT2xlblwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDEuNGVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiA0cHg7IHBhZGRpbmc6IDhweCAwO1wiIH0sXG4gICAgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJNeXRob2xvZ2ljYWwgTGlmZS1PcGVyYXRpbmcgU3lzdGVtXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDE2cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIC8vIFF1aWNrIHN0YXR1cyBiYXJcbiAgICB0aGlzLnJlbmRlclN0YXR1c0Jhcihjb250YWluZXJFbCk7XG5cbiAgICAvLyBTZWN0aW9uc1xuICAgIHRoaXMucmVuZGVyUHJvZmlsZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyUGVyc29uYWxTdGF0c1NlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQWN0aXZpdGllc1NlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQ2F0ZWdvcmllc1NlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyVGVtcGxlU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJDYWxlbmRhclNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyVGhlbWVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFkdmFuY2VkU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJEZXZEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgfVxuXG4gIC8vIC0tLSBDb2xsYXBzaWJsZSBTZWN0aW9uIEhlbHBlciAtLS1cblxuICBwcml2YXRlIGNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgaWNvbjogc3RyaW5nLFxuICAgIGRlZmF1bHRPcGVuID0gZmFsc2VcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBwYXJlbnQuY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYXJyb3cgPSBoZWFkZXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGRlZmF1bHRPcGVuID8gXCJcXHUyNUJDXCIgOiBcIlxcdTI1QjZcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAxMHB4OyB3aWR0aDogMTJweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgaGVhZGVyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBpY29uID8gYCR7aWNvbn0gICR7dGl0bGV9YCA6IHRpdGxlLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOTVlbTtcIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IHNlY3Rpb24uY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHsgc3R5bGU6IGBwYWRkaW5nOiAwIDE2cHg7IGRpc3BsYXk6ICR7ZGVmYXVsdE9wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07YCB9LFxuICAgIH0pO1xuXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc09wZW4gPSBib2R5LnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiO1xuICAgICAgYm9keS5zdHlsZS5kaXNwbGF5ID0gaXNPcGVuID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgICBib2R5LnN0eWxlLnBhZGRpbmcgPSBpc09wZW4gPyBcIjAgMTZweFwiIDogXCIxMnB4IDE2cHhcIjtcbiAgICAgIGFycm93LnRleHRDb250ZW50ID0gaXNPcGVuID8gXCJcXHUyNUI2XCIgOiBcIlxcdTI1QkNcIjtcbiAgICB9KTtcblxuICAgIGlmIChkZWZhdWx0T3BlbikgYm9keS5zdHlsZS5wYWRkaW5nID0gXCIxMnB4IDE2cHhcIjtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIC8vIC0tLSBTdGF0dXMgQmFyIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBocFBlcmNlbnQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFAgPiAwXG4gICAgICA/IE1hdGgucm91bmQoKHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLyB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFApICogMTAwKVxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgYmFyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4OyBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTsgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogYFRpZXIgJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXJyZW50VGllcn0vMTNgIH0pO1xuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogYEhQICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUH0vJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFB9ICgke2hwUGVyY2VudH0lKWAsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmluVGFydGFydXNcbiAgICAgID8gXCJUQVJUQVJVU1wiXG4gICAgICA6IHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiXG4gICAgICAgID8gXCJQQVVTRURcIlxuICAgICAgICA6IFwiQUNUSVZFXCI7XG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBzdGF0ZSxcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBmb250LXdlaWdodDogNjAwOyBjb2xvcjogJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5pblRhcnRhcnVzID8gXCJ2YXIoLS10ZXh0LWVycm9yKVwiIDogXCJ2YXIoLS10ZXh0LW5vcm1hbClcIn07YCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IHRoaXMucGx1Z2luLnNldHRpbmdzLm1pZ3JhdGVkID8gXCJNaWdyYXRlZFwiIDogXCJOb3QgbWlncmF0ZWRcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zdHlsZTogaXRhbGljO1wiIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyAtLS0gUHJvZmlsZSAtLS1cblxuICBwcml2YXRlIHJlbmRlclByb2ZpbGVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlByb2ZpbGVcIiwgXCJcXHV7MUY0NjR9XCIpO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLnNldERlc2MoXCJZb3VyIG5hbWUgZm9yIHRoZSBkYXNoYm9hcmQgZ3JlZXRpbmdcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZXJOYW1lKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZXJOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIk15IFdoeVwiKVxuICAgICAgLnNldERlc2MoXCJZb3VyIGNvcmUgbW90aXZhdGlvbiBcdTIwMTQgc2hvd24gcGVyaW9kaWNhbGx5IG9uIHRoZSBkYXNoYm9hcmRcIilcbiAgICAgIC5hZGRUZXh0QXJlYSgoYXJlYSkgPT5cbiAgICAgICAgYXJlYVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVdoeSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVdoeSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIZXJvIGJhY2tncm91bmQgaW1hZ2VcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgcGF0aCB0byB0aGUgaGVybyBiYWNrZ3JvdW5kIGltYWdlIChlLmcuLCBpbWFnZXMvaGVyby5qcGcpXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcInBhdGgvdG8vaW1hZ2UuanBnXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkhvbWVwYWdlXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZpbGUgdG8gb3BlbiB3aGVuIGFjdGl2aXRpZXMgYXJlIHNldCB0byAnT3BlbiBob21lcGFnZScgYWZ0ZXIgY29tcGxldGlvbiAoZS5nLiBIb21lLm1kKVwiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIEhvbWUubWRcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaG9tZXBhZ2UpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaG9tZXBhZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIFBlcnNvbmFsIFN0YXRzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyUGVyc29uYWxTdGF0c1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiUGVyc29uYWwgU3RhdHNcIiwgXCJcXHV7MUY0Q0F9XCIpO1xuICAgIGNvbnN0IHN0YXRzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cztcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkdlbmRlclwiKVxuICAgICAgLnNldERlc2MoXCJVc2VkIHRvIHNob3cgdGhlIGNvcnJlY3QgbXVzY2xlIGZpZ3VyZSBvbiB0aGUgaGVhdG1hcFwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoeyBtYWxlOiBcIk1hbGVcIiwgZmVtYWxlOiBcIkZlbWFsZVwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKHN0YXRzLmdlbmRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuZ2VuZGVyID0gdiBhcyBHZW5kZXI7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkhlaWdodCAoY20pXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShzdGF0cy5oZWlnaHQgPyBTdHJpbmcoc3RhdHMuaGVpZ2h0KSA6IFwiXCIpXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiZS5nLiAxNzVcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUludCh2KTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5oZWlnaHQgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkJpcnRoZGF0ZVwiKVxuICAgICAgLnNldERlc2MoXCJVc2VkIHRvIGNhbGN1bGF0ZSB5b3VyIGFnZSBmb3IgdGhlIHN0cmVuZ3RoIGNhbGN1bGF0b3JcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKHN0YXRzLmJpcnRoZGF0ZSlcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJZWVlZLU1NLUREXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBpZiAoL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvLnRlc3QodikgfHwgdiA9PT0gXCJcIikge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmJpcnRoZGF0ZSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gQWdlIGRpc3BsYXlcbiAgICBpZiAoc3RhdHMuYmlydGhkYXRlKSB7XG4gICAgICBjb25zdCBhZ2UgPSB0aGlzLmNhbGN1bGF0ZUFnZShzdGF0cy5iaXJ0aGRhdGUpO1xuICAgICAgYm9keS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIHRleHQ6IGBBZ2U6ICR7YWdlfSB5ZWFyc2AsXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMTJweDsgcGFkZGluZy1sZWZ0OiA0cHg7XCIgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFdlaWdodCBzZWN0aW9uXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiQ3VycmVudCB3ZWlnaHQgKGtnKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoc3RhdHMuY3VycmVudFdlaWdodCA/IFN0cmluZyhzdGF0cy5jdXJyZW50V2VpZ2h0KSA6IFwiXCIpXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiZS5nLiA2MVwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlRmxvYXQodik7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuY3VycmVudFdlaWdodCA9IG47XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiV2VpZ2h0IGxvZ2dpbmcgZnJlcXVlbmN5XCIpXG4gICAgICAuc2V0RGVzYyhcIkhvdyBvZnRlbiB5b3Ugd2FudCB0byBiZSByZW1pbmRlZCB0byBsb2cgeW91ciB3ZWlnaHRcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBcInR3aWNlLWEtd2Vla1wiOiBcIlR3aWNlIGEgd2Vla1wiLFxuICAgICAgICAgIFwiZXZlcnktd2Vla1wiOiBcIkV2ZXJ5IHdlZWtcIixcbiAgICAgICAgICBcImV2ZXJ5LTItd2Vla3NcIjogXCJFdmVyeSAyIHdlZWtzXCIsXG4gICAgICAgICAgXCJldmVyeS0zLWRheXNcIjogXCJFdmVyeSAzIGRheXNcIixcbiAgICAgICAgICBcImV2ZXJ5LTUtZGF5c1wiOiBcIkV2ZXJ5IDUgZGF5c1wiLFxuICAgICAgICAgIFwiY3VzdG9tXCI6IFwiQ3VzdG9tIGludGVydmFsXCIsXG4gICAgICAgIH0pXG4gICAgICAgICAgLnNldFZhbHVlKHN0YXRzLndlaWdodExvZ0ZyZXF1ZW5jeSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMud2VpZ2h0TG9nRnJlcXVlbmN5ID0gdiBhcyBXZWlnaHRMb2dGcmVxdWVuY3k7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgaWYgKHN0YXRzLndlaWdodExvZ0ZyZXF1ZW5jeSA9PT0gXCJjdXN0b21cIikge1xuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoXCJDdXN0b20gaW50ZXJ2YWwgKGRheXMpXCIpXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0VmFsdWUoU3RyaW5nKHN0YXRzLndlaWdodExvZ0N1c3RvbURheXMpKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUludCh2KTtcbiAgICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMud2VpZ2h0TG9nQ3VzdG9tRGF5cyA9IG47XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gTG9nIHdlaWdodCBidXR0b25cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJMb2cgY3VycmVudCB3ZWlnaHRcIilcbiAgICAgIC5zZXREZXNjKFwiU2F2ZSB0b2RheSdzIHdlaWdodCB0byB5b3VyIHByb2dyZXNzIGhpc3RvcnlcIilcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJMb2cgV2VpZ2h0XCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHcgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmN1cnJlbnRXZWlnaHQ7XG4gICAgICAgICAgaWYgKCF3IHx8IHcgPD0gMCkge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkVudGVyIHlvdXIgY3VycmVudCB3ZWlnaHQgZmlyc3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgICAvLyBBdm9pZCBkdXBsaWNhdGUgZm9yIHRvZGF5XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5maW5kKChlKSA9PiBlLmRhdGUgPT09IHRvZGF5KTtcbiAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIGV4aXN0aW5nLndlaWdodCA9IHc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMud2VpZ2h0TG9nLnB1c2goeyBkYXRlOiB0b2RheSwgd2VpZ2h0OiB3IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmxhc3RXZWlnaHRMb2dEYXRlID0gdG9kYXk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgbmV3IE5vdGljZShgV2VpZ2h0IGxvZ2dlZDogJHt3fSBrZ2ApO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIFdlaWdodCBoaXN0b3J5IChsYXN0IDEwIGVudHJpZXMpXG4gICAgY29uc3QgbG9nID0gc3RhdHMud2VpZ2h0TG9nO1xuICAgIGlmIChsb2cubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgaGlzdG9yeUVsID0gYm9keS5jcmVhdGVEaXYoe1xuICAgICAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogOHB4IDA7IHBhZGRpbmc6IDhweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiA2cHg7XCIgfSxcbiAgICAgIH0pO1xuICAgICAgaGlzdG9yeUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgdGV4dDogXCJXZWlnaHQgSGlzdG9yeVwiLFxuICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45ZW07IG1hcmdpbi1ib3R0b206IDZweDtcIiB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNvcnRlZCA9IFsuLi5sb2ddLnNvcnQoKGEsIGIpID0+IGIuZGF0ZS5sb2NhbGVDb21wYXJlKGEuZGF0ZSkpO1xuICAgICAgY29uc3QgcmVjZW50ID0gc29ydGVkLnNsaWNlKDAsIDEwKTtcblxuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiByZWNlbnQpIHtcbiAgICAgICAgaGlzdG9yeUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgICB0ZXh0OiBgJHtlbnRyeS5kYXRlfTogJHtlbnRyeS53ZWlnaHR9IGtnYCxcbiAgICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgcGFkZGluZzogMnB4IDA7XCIgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChzb3J0ZWQubGVuZ3RoID4gMTApIHtcbiAgICAgICAgaGlzdG9yeUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgICB0ZXh0OiBgLi4uIGFuZCAke3NvcnRlZC5sZW5ndGggLSAxMH0gbW9yZSBlbnRyaWVzYCxcbiAgICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC43NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IGZvbnQtc3R5bGU6IGl0YWxpYztcIiB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUFnZShiaXJ0aGRhdGU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgYmlydGggPSBuZXcgRGF0ZShiaXJ0aGRhdGUpO1xuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGFnZSA9IG5vdy5nZXRGdWxsWWVhcigpIC0gYmlydGguZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBtb250aERpZmYgPSBub3cuZ2V0TW9udGgoKSAtIGJpcnRoLmdldE1vbnRoKCk7XG4gICAgaWYgKG1vbnRoRGlmZiA8IDAgfHwgKG1vbnRoRGlmZiA9PT0gMCAmJiBub3cuZ2V0RGF0ZSgpIDwgYmlydGguZ2V0RGF0ZSgpKSkge1xuICAgICAgYWdlLS07XG4gICAgfVxuICAgIHJldHVybiBhZ2U7XG4gIH1cblxuICAvLyAtLS0gQWN0aXZpdGllcyAtLS1cblxuICBwcml2YXRlIHJlbmRlckFjdGl2aXRpZXNTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkFjdGl2aXRpZXNcIiwgXCJcXHV7MUYzQUZ9XCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaV07XG4gICAgICB0aGlzLnJlbmRlckFjdGl2aXR5SXRlbShib2R5LCBhY3Rpdml0eSwgaSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGJ1dHRvblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgQWN0aXZpdHlcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbmV3QWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnID0ge1xuICAgICAgICAgICAgaWQ6IGBjdXN0b20tJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgICBuYW1lOiBcIk5ldyBBY3Rpdml0eVwiLFxuICAgICAgICAgICAgZW1vamk6IFwiXFx1MkI1MFwiLFxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgZm9sZGVyOiBcIlwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiXCIsXG4gICAgICAgICAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLFxuICAgICAgICAgICAgd2Vla2x5VGFyZ2V0OiAzLFxuICAgICAgICAgICAgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgICAgICAgICBoYXNXb3Jrc3BhY2U6IGZhbHNlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IDUsXG4gICAgICAgICAgICBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgICAgICAgICAgcHJlZmVycmVkVGltZTogXCJhbnl0aW1lXCIsXG4gICAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgICAgICAgfTtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLnB1c2gobmV3QWN0aXZpdHkpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyQWN0aXZpdHlJdGVtKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZywgaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHdyYXBwZXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8vIEhlYWRlciByb3cgd2l0aCB0b2dnbGVcbiAgICBuZXcgU2V0dGluZyh3cmFwcGVyKVxuICAgICAgLnNldE5hbWUoYCR7YWN0aXZpdHkuZW1vaml9ICR7YWN0aXZpdHkubmFtZX1gKVxuICAgICAgLnNldERlc2MoYCR7YWN0aXZpdHkuY2F0ZWdvcnl9IFx1MDBCNyAke2FjdGl2aXR5LmZvbGRlciB8fCBcIm5vIGZvbGRlciBzZXRcIn1gKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUoYWN0aXZpdHkuZW5hYmxlZCkub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIEV4cGFuZGFibGUgZGV0YWlsc1xuICAgIGNvbnN0IGRldGFpbHNUb2dnbGUgPSB3cmFwcGVyLmNyZWF0ZUVsKFwiZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzVG9nZ2xlLmNyZWF0ZUVsKFwic3VtbWFyeVwiLCB7XG4gICAgICB0ZXh0OiBcIkNvbmZpZ3VyZVwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDhweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRldGFpbHNUb2dnbGUuY3JlYXRlRGl2KCk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJOYW1lXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5uYW1lKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5uYW1lID0gdjtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJFbW9qaVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkuZW1vamkpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVtb2ppID0gdjtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJDYXRlZ29yeVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoeyBib2R5OiBcIkJvZHlcIiwgbWluZDogXCJNaW5kXCIsIHNwaXJpdDogXCJTcGlyaXRcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5jYXRlZ29yeSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmNhdGVnb3J5ID0gdiBhcyBDYXRlZ29yeTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQWN0aXZpdHkgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciB3aXRoIFlZWVktTU0tREQgbm90ZXMgYW5kIHdvcmtzcGFjZSBsb2dzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5mb2xkZXIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmZvbGRlciA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRnJvbnRtYXR0ZXIgcHJvcGVydHlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LnByb3BlcnR5KS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5wcm9wZXJ0eSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV2Vla2x5IHRhcmdldFwiKVxuICAgICAgLmFkZFNsaWRlcigocykgPT5cbiAgICAgICAgcy5zZXRMaW1pdHMoMSwgNywgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkud2Vla2x5VGFyZ2V0KVxuICAgICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS53ZWVrbHlUYXJnZXQgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJQcmlvcml0eSAoMS0xMClcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDEwLCAxKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5wcmlvcml0eSlcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJpb3JpdHkgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJQcmVmZXJyZWQgdGltZVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoe1xuICAgICAgICAgIG1vcm5pbmc6IFwiTW9ybmluZ1wiLCBhZnRlcm5vb246IFwiQWZ0ZXJub29uXCIsXG4gICAgICAgICAgZXZlbmluZzogXCJFdmVuaW5nXCIsIGFueXRpbWU6IFwiQW55dGltZVwiLFxuICAgICAgICB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5wcmVmZXJyZWRUaW1lKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJlZmVycmVkVGltZSA9IHYgYXMgYW55O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJOZWdsZWN0IHRocmVzaG9sZCAoZGF5cylcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDE0LCAxKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5uZWdsZWN0VGhyZXNob2xkKVxuICAgICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5uZWdsZWN0VGhyZXNob2xkID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRXN0aW1hdGVkIGR1cmF0aW9uIChtaW51dGVzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoU3RyaW5nKGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uZXN0aW1hdGVkRHVyYXRpb24gPSBuO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkhhcyB3b3Jrc3BhY2VcIilcbiAgICAgIC5zZXREZXNjKFwiT3BlbnMgd29ya3NwYWNlIHZpZXcgd2l0aCB0aW1lciB3aGVuIHN0YXJ0ZWQsIGluc3RlYWQgb2YgbWFya2luZyBkb25lIGltbWVkaWF0ZWx5XCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZShhY3Rpdml0eS5oYXNXb3Jrc3BhY2UpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uaGFzV29ya3NwYWNlID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJXb3Jrc3BhY2UgdGVtcGxhdGVcIilcbiAgICAgIC5zZXREZXNjKFwiQnVpbHQtaW4gdGVtcGxhdGUgSUQgKGUuZy4gJ3dvcmtvdXQnKSBvciB2YXVsdCBwYXRoIHRvIC5qcyBmaWxlLiBMZWF2ZSBlbXB0eSBmb3IgZGVmYXVsdCB3b3Jrc3BhY2UuXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gd29ya291dFwiKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud29ya3NwYWNlVGVtcGxhdGUgPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi50ZW1wbGF0ZUVuZ2luZS5pbnZhbGlkYXRlQ2FjaGUoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiU2tpbGwgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIHNraWxsIHRyZWUgbm90ZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiZS5nLiBIb21lL1N0YXJ0cy9EcmF3aW5nL1NraWxsIHRyZWVcIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuc2tpbGxGb2xkZXIgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnNraWxsRm9sZGVyID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBZnRlciBjb21wbGV0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIldoZXJlIHRvIGdvIGFmdGVyIGZpbmlzaGluZyB0aGlzIGFjdGl2aXR5XCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7XG4gICAgICAgICAgZGFzaGJvYXJkOiBcIlJldHVybiB0byBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgICAgIHN0YXk6IFwiU3RheSBvbiBub3RlXCIsXG4gICAgICAgICAgaG9tZXBhZ2U6IFwiT3BlbiBob21lcGFnZVwiLFxuICAgICAgICB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShcbiAgICAgICAgICAgICFhY3Rpdml0eS5jb21wbGV0aW9uUmV0dXJuVG8gfHwgYWN0aXZpdHkuY29tcGxldGlvblJldHVyblRvID09PSBcImRhc2hib2FyZFwiXG4gICAgICAgICAgICAgID8gXCJkYXNoYm9hcmRcIlxuICAgICAgICAgICAgICA6IGFjdGl2aXR5LmNvbXBsZXRpb25SZXR1cm5UbyA9PT0gXCJzdGF5XCJcbiAgICAgICAgICAgICAgICA/IFwic3RheVwiXG4gICAgICAgICAgICAgICAgOiBcImhvbWVwYWdlXCJcbiAgICAgICAgICApXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jb21wbGV0aW9uUmV0dXJuVG8gPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJCbG9ja3MgKGNvbW1hLXNlcGFyYXRlZCBhY3Rpdml0eSBJRHMpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZSgoYWN0aXZpdHkuYmxvY2tzID8/IFtdKS5qb2luKFwiLCBcIikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uYmxvY2tzID0gdi5zcGxpdChcIixcIikubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkFsdGVybmF0ZXMgd2l0aCAoYWN0aXZpdHkgSUQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCA/PyBcIlwiKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmFsdGVybmF0ZXNXaXRoID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkNoYWluIGFmdGVyIChhY3Rpdml0eSBJRClcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKGFjdGl2aXR5LmNoYWluQWZ0ZXIgPz8gXCJcIikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jaGFpbkFmdGVyID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIERlbGV0ZSBidXR0b25cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG5cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dChcIkRlbGV0ZSBBY3Rpdml0eVwiKVxuICAgICAgICAgIC5zZXRXYXJuaW5nKClcbiAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhdGVnb3JpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJDYXRlZ29yaWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJDYXRlZ29yaWVzXCIsIFwiXFx1ezFGM0E4fVwiKTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgICB7IGtleTogXCJib2R5XCIsIGxhYmVsOiBcIkJvZHlcIiB9LFxuICAgICAgeyBrZXk6IFwibWluZFwiLCBsYWJlbDogXCJNaW5kXCIgfSxcbiAgICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShgJHtjYXQubGFiZWx9IGNvbG9yYClcbiAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT5cbiAgICAgICAgICBjcFxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldID0gdjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlRpdGxlIG92ZXJyaWRlXCIpXG4gICAgICAuc2V0RGVzYyhcIk92ZXJyaWRlIHRoZSBkeW5hbWljIHRpdGxlIChsZWF2ZSBlbXB0eSBmb3IgYXV0bylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZU92ZXJyaWRlID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIFRlbXBsZSAtLS1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiVGVtcGxlIFVwa2VlcFwiLCBcIlxcdXsxRjNEQn1cXHVGRTBGXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFzayA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldO1xuXG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShgJHt0YXNrLmVtb2ppfSAke3Rhc2submFtZX1gKVxuICAgICAgICAuc2V0RGVzYyhgRXZlcnkgJHt0YXNrLmludGVydmFsRGF5c30gZGF5KHMpYClcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIk5hbWVcIikuc2V0VmFsdWUodGFzay5uYW1lKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0ubmFtZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJEYXlzXCIpLnNldFZhbHVlKFN0cmluZyh0YXNrLmludGVydmFsRGF5cykpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLmludGVydmFsRGF5cyA9IG47XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIkVtb2ppXCIpLnNldFZhbHVlKHRhc2suZW1vamkpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5lbW9qaSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBUZW1wbGUgVGFza1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MucHVzaCh7XG4gICAgICAgICAgaWQ6IGB0ZW1wbGUtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgbmFtZTogXCJOZXcgVGFza1wiLFxuICAgICAgICAgIGxhc3RDb21wbGV0ZWQ6IG51bGwsXG4gICAgICAgICAgaW50ZXJ2YWxEYXlzOiA3LFxuICAgICAgICAgIGVtb2ppOiBcIlxcdTI3MjhcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBDYWxlbmRhciBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlbmRlckNhbGVuZGFyU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJDYWxlbmRhciBJbnRlZ3JhdGlvblwiLCBcIlxcdXsxRjRDNX1cIik7XG5cbiAgICBib2R5LmNyZWF0ZUVsKFwicFwiLCB7XG4gICAgICB0ZXh0OiBcIk1lcmdlIGV4dGVybmFsIHRhc2tzIGludG8geW91ciBEYXkgTWFwIHRpbWVsaW5lLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIC8vIE9wdGlvbiBBOiBEYWlseSBOb3Rlc1xuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkRhaWx5IE5vdGVzIGludGVncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlBhcnNlIHRhc2tzIGZyb20geW91ciBkYWlseSBub3RlcyAoLSBbIF0gVGFzayBAdGltZSB+MzBtKVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3Rlcykub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJEYWlseSBOb3RlcyBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGNvbnRhaW5pbmcgWVlZWS1NTS1ERC5tZCBub3Rlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJEYWlseSBOb3Rlc1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlciA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJUYXNrcyBQbHVnaW4gaW50ZWdyYXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiUmVhZCB0YXNrcyB3aXRoIGR1ZSBkYXRlcyBmcm9tIHRoZSBUYXNrcyBwbHVnaW5cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBPcHRpb24gQzogUXVpY2sgVGFza3NcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJRdWljayBUYXNrc1wiKVxuICAgICAgLnNldERlc2MoXCJPbGVuJ3MgYnVpbHQtaW4gdGFzayBzeXN0ZW1cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcyA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gUXVpY2sgVGFza3MgbGlzdFxuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKSB7XG4gICAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbHRlcihcbiAgICAgICAgKHF0KSA9PiBxdC5kYXRlID09PSB0b2RheVxuICAgICAgKTtcblxuICAgICAgaWYgKHRvZGF5VGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsaXN0RWwgPSBib2R5LmNyZWF0ZURpdih7XG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW46IDhweCAwOyBwYWRkaW5nOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1wiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxpc3RFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogXCJUb2RheSdzIFF1aWNrIFRhc2tzXCIsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOWVtOyBtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcXQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzW2ldO1xuICAgICAgICAgIGlmIChxdC5kYXRlICE9PSB0b2RheSkgY29udGludWU7XG5cbiAgICAgICAgICBuZXcgU2V0dGluZyhsaXN0RWwpXG4gICAgICAgICAgICAuc2V0TmFtZShgJHtxdC5kb25lID8gXCJcXHUyNzEzXCIgOiBcIlxcdTI1Q0JcIn0gJHtxdC50aXRsZX1gKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgIFtxdC50aW1lLCBxdC5kdXJhdGlvbiA/IGAke3F0LmR1cmF0aW9ufW1gIDogXCJcIl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXHUwMEI3IFwiKSB8fCBcIk5vIHRpbWUgc2V0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJEZWxldGVcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBRdWljayBUYXNrXCIpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICh0aGlzLnBsdWdpbiBhcyBhbnkpLnNob3dRdWlja1Rhc2tEaWFsb2coKTtcbiAgICAgICAgICAvLyBDbG9zZSBzZXR0aW5ncyBcdTIwMTQgdGhlIGRpYWxvZyBhcHBlYXJzIG9uIHRvcFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gVGhlbWUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJUaGVtZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiVGhlbWVcIiwgXCJcXHV7MUYzQTh9XCIpO1xuXG4gICAgY29uc3QgdGhlbWVGaWVsZHM6IHsga2V5OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGRlZmF1bHRWYWw6IHN0cmluZyB9W10gPSBbXG4gICAgICB7IGtleTogXCJiZ1ByaW1hcnlcIiwgbGFiZWw6IFwiQmFja2dyb3VuZFwiLCBkZWZhdWx0VmFsOiBcIiMwYzBhMDlcIiB9LFxuICAgICAgeyBrZXk6IFwidGV4dFByaW1hcnlcIiwgbGFiZWw6IFwiVGV4dFwiLCBkZWZhdWx0VmFsOiBcIiNmNWYwZThcIiB9LFxuICAgICAgeyBrZXk6IFwidGV4dE11dGVkXCIsIGxhYmVsOiBcIk11dGVkIHRleHRcIiwgZGVmYXVsdFZhbDogXCIjOTI4ZDg1XCIgfSxcbiAgICAgIHsga2V5OiBcImFjY2VudEdvbGRcIiwgbGFiZWw6IFwiQWNjZW50IChnb2xkKVwiLCBkZWZhdWx0VmFsOiBcIiNjOWE4NGNcIiB9LFxuICAgICAgeyBrZXk6IFwiZGFuZ2VyXCIsIGxhYmVsOiBcIkRhbmdlclwiLCBkZWZhdWx0VmFsOiBcIiM4YjJkMzVcIiB9LFxuICAgICAgeyBrZXk6IFwic3VjY2Vzc1wiLCBsYWJlbDogXCJTdWNjZXNzXCIsIGRlZmF1bHRWYWw6IFwiI2Q0OTQwYVwiIH0sXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhlbWVGaWVsZHMpIHtcbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKGZpZWxkLmxhYmVsKVxuICAgICAgICAuYWRkQ29sb3JQaWNrZXIoKGNwKSA9PlxuICAgICAgICAgIGNwXG4gICAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyBhcyBhbnkpPy5bZmllbGQua2V5XSA/PyBmaWVsZC5kZWZhdWx0VmFsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgICAgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzIGFzIGFueSlbZmllbGQua2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gRWx5c2lhbiBEYXJrXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyA9IHt9O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIG5ldyBOb3RpY2UoXCJUaGVtZSByZXNldCB0byBFbHlzaWFuIERhcmsgZGVmYXVsdHNcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQWR2YW5jZWQgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBZHZhbmNlZFNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQWR2YW5jZWRcIiwgXCJcXHUyNjk5XFx1RkUwRlwiKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlNpbXVsYXRlZCBkYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIk92ZXJyaWRlIHRvZGF5J3MgZGF0ZSBmb3IgdGVzdGluZyAoWVlZWS1NTS1ERClcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiWVlZWS1NTS1ERFwiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID0gdi50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiU3lzdGVtIHN0YXRlXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGRcbiAgICAgICAgICAuYWRkT3B0aW9ucyh7IGFjdGl2ZTogXCJBY3RpdmVcIiwgcGF1c2VkOiBcIlBhdXNlZFwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB2IGFzIFwiYWN0aXZlXCIgfCBcInBhdXNlZFwiO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlID09PSBcInBhdXNlZFwiICYmIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZSA9PT0gXCJhY3RpdmVcIiAmJiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXVzZWRNcyA9IERhdGUubm93KCkgLSBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSArPSBwYXVzZWRNcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJRdW90ZSBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGNvbnRhaW5pbmcgcXVvdGUgZmlsZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiUXVvdGVzL1N0b2ljXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlJlLXJ1biBtaWdyYXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiUmUtaW1wb3J0IGRhdGEgZnJvbSB0aGUgTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXIgcGx1Z2luXCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiTWlncmF0ZVwiKS5zZXRXYXJuaW5nKCkub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWlncmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAvLyBSZWxvYWQgdGhlIHBsdWdpbiB0byB0cmlnZ2VyIG1pZ3JhdGlvblxuICAgICAgICAgIGF3YWl0ICh0aGlzLnBsdWdpbiBhcyBhbnkpLm9ubG9hZCgpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoXCJNaWdyYXRpb24gY29tcGxldGVcIik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIERldmVsb3BlciBEYXNoYm9hcmQgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJEZXZEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkRldmVsb3BlciBEYXNoYm9hcmRcIiwgXCJcXHV7MUY2RTB9XFx1RkUwRlwiKTtcblxuICAgIGJvZHkuY3JlYXRlRWwoXCJwXCIsIHtcbiAgICAgIHRleHQ6IFwiRWRpdCB0aGUgcmF3IGRldkNvbmZpZyBKU09OLiBDaGFuZ2VzIGFyZSBhcHBsaWVkIG9uIHNhdmUuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDhweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBib2R5LmNyZWF0ZUVsKFwidGV4dGFyZWFcIiwge1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OiAzMDBweDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7IGNvbG9yOiB2YXIoLS10ZXh0LW5vcm1hbCk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDsgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGV4dGFyZWEudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcsIG51bGwsIDIpO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJTYXZlIGRldkNvbmZpZ1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh0ZXh0YXJlYS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgREVGQVVMVF9ERVZfQ09ORklHLFxuICAgICAgICAgICAgICBwYXJzZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJkZXZDb25maWcgc2F2ZWQgYW5kIGFwcGxpZWRcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiSW52YWxpZCBKU09OIFx1MjAxNCBwbGVhc2UgY2hlY2sgc3ludGF4XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJSZXNldCB0byBkZWZhdWx0c1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcgPSB7IC4uLkRFRkFVTFRfREVWX0NPTkZJRyB9O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLCBudWxsLCAyKTtcbiAgICAgICAgICBuZXcgTm90aWNlKFwiZGV2Q29uZmlnIHJlc2V0IHRvIGRlZmF1bHRzXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIEV4cG9ydC9JbXBvcnRcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJFeHBvcnQgYWxsIHNldHRpbmdzXCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiQ29weSB0byBjbGlwYm9hcmRcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLCBudWxsLCAyKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoanNvbik7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiU2V0dGluZ3MgY29waWVkIHRvIGNsaXBib2FyZFwiKTtcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIGZvciBtb2JpbGUgXHUyMDE0IHNob3cgaW4gYSB0ZXh0YXJlYSBmb3IgbWFudWFsIGNvcHlcbiAgICAgICAgICAgIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgdGEudmFsdWUgPSBqc29uO1xuICAgICAgICAgICAgdGEuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjUwJTt6LWluZGV4Ojk5OTk7Zm9udC1zaXplOjExcHg7XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhKTtcbiAgICAgICAgICAgIHRhLnNlbGVjdCgpO1xuICAgICAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4gdGEucmVtb3ZlKCkpO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlRhcCB0aGUgdGV4dCBhcmVhIGFuZCBjb3B5IG1hbnVhbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJJbXBvcnQgc2V0dGluZ3NcIilcbiAgICAgIC5hZGRUZXh0QXJlYSgoYXJlYSkgPT4ge1xuICAgICAgICBhcmVhLnNldFBsYWNlaG9sZGVyKFwiUGFzdGUgSlNPTiBoZXJlLi4uXCIpO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLm1pbkhlaWdodCA9IFwiODBweFwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5mb250U2l6ZSA9IFwiMTFweFwiO1xuXG4gICAgICAgIC8vIFN0b3JlIHJlZmVyZW5jZSBmb3IgdGhlIGltcG9ydCBidXR0b25cbiAgICAgICAgKGJvZHkgYXMgYW55KS5faW1wb3J0QXJlYSA9IGFyZWE7XG4gICAgICB9KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkltcG9ydFwiKS5zZXRXYXJuaW5nKCkub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWEgPSAoYm9keSBhcyBhbnkpLl9pbXBvcnRBcmVhO1xuICAgICAgICAgICAgaWYgKCFhcmVhKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGFyZWEuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucGx1Z2luLnNldHRpbmdzLCBwYXJzZWQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJTZXR0aW5ncyBpbXBvcnRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiSW52YWxpZCBKU09OIFx1MjAxNCBwbGVhc2UgY2hlY2sgc3ludGF4XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFRlbXBsYXRlIEVuZ2luZVxuLy8gTG9hZHMgLmpzIHRlbXBsYXRlIGZpbGVzIGZyb20gdmF1bHQsIGNyZWF0ZXMgYSBzYW5kYm94ZWRcbi8vIGV4ZWN1dGlvbiBjb250ZXh0IHdpdGggZGF0YS1iaW5kaW5nIHRvIG5vdGUgZnJvbnRtYXR0ZXIsXG4vLyBhbmQgcmVuZGVycyBVSSBpbnRvIGEgY29udGFpbmVyIGVsZW1lbnQuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwLCBURmlsZSwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgeyBCVUlMVElOX1RFTVBMQVRFUyB9IGZyb20gXCIuL2J1aWx0aW5zXCI7XG5cbi8qKlxuICogVGhlIGNvbnRleHQgb2JqZWN0IHBhc3NlZCB0byBldmVyeSB0ZW1wbGF0ZSBhdCBydW50aW1lLlxuICogVGVtcGxhdGVzIHJlY2VpdmUgdGhpcyBhcyBgY3R4YCBhbmQgdXNlIGl0IHRvIHJlYWQvd3JpdGVcbiAqIGZyb250bWF0dGVyIGFuZCBidWlsZCB0aGVpciBVSS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUNvbnRleHQge1xuICAvKiogT2JzaWRpYW4gQXBwIGluc3RhbmNlICovXG4gIGFwcDogQXBwO1xuICAvKiogT2xlbiBwbHVnaW4gcmVmZXJlbmNlICovXG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgLyoqIFRoZSBkYXRhIG5vdGUgY3VycmVudGx5IGJlaW5nIHZpZXdlZCAqL1xuICBmaWxlOiBURmlsZTtcbiAgLyoqIERPTSBjb250YWluZXIgdG8gcmVuZGVyIGludG8gKi9cbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICAvLyAtLS0gRGF0YSBCaW5kaW5nIC0tLVxuXG4gIC8qKiBTbmFwc2hvdCBvZiB0aGUgbm90ZSdzIGN1cnJlbnQgZnJvbnRtYXR0ZXIgKHJlYWQtb25seSBvYmplY3QpICovXG4gIGZyb250bWF0dGVyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgLyoqIEdldCBhIHNpbmdsZSBmcm9udG1hdHRlciB2YWx1ZSwgb3IgYWxsIGZyb250bWF0dGVyIGlmIG5vIGtleSAqL1xuICBnZXREYXRhKGtleT86IHN0cmluZyk6IHVua25vd247XG4gIC8qKiBXcml0ZSBhIHNpbmdsZSBrZXkgYmFjayB0byB0aGUgbm90ZSdzIGZyb250bWF0dGVyICovXG4gIHNldERhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiB1bmtub3duKTogUHJvbWlzZTx2b2lkPjtcbiAgLyoqIEJhdGNoLXdyaXRlIG11bHRpcGxlIGtleXMgdG8gdGhlIG5vdGUncyBmcm9udG1hdHRlciAqL1xuICBzZXRNdWx0aXBsZURhdGEoZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8vIC0tLSBWYXVsdCBIZWxwZXJzIC0tLVxuXG4gIC8qKiBSZWFkIHJhdyB0ZXh0IG9mIGFueSB2YXVsdCBmaWxlIGJ5IHBhdGggKi9cbiAgcmVhZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPjtcbiAgLyoqIEdldCBhbGwgbWFya2Rvd24gZmlsZXMgaW5zaWRlIGEgZm9sZGVyICovXG4gIGdldEZpbGVzSW5Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nKTogVEZpbGVbXTtcbiAgLyoqIEdldCBmcm9udG1hdHRlciBvZiBhbnkgZmlsZSBieSBwYXRoICovXG4gIGdldEZpbGVNZXRhZGF0YShwYXRoOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGw7XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKiogT2JzaWRpYW4gTm90aWNlIGZvciB0b2FzdHMgKi9cbiAgbm90aWNlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IHZvaWQ7XG4gIC8qKiBtb21lbnQuanMgKHByb3ZpZGVkIGJ5IE9ic2lkaWFuIGdsb2JhbGx5KSAqL1xuICBtb21lbnQ6IHR5cGVvZiB3aW5kb3cubW9tZW50O1xuICAvKiogQ3JlYXRlIGFuIEhUTUwgZWxlbWVudCAoc2hvcnRoYW5kKSAqL1xuICBjcmVhdGVFbDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICB0YWc6IEssXG4gICAgYXR0cnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS107XG59XG5cbi8qKlxuICogQ29yZSBlbmdpbmUgdGhhdCBtYW5hZ2VzIHRlbXBsYXRlIGxvb2t1cCwgbG9hZGluZywgYW5kIGV4ZWN1dGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRW5naW5lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBwbHVnaW46IE9sZW5QbHVnaW47XG4gIC8qKiBDYWNoZSBvZiBsb2FkZWQgdGVtcGxhdGUgc291cmNlIGNvZGUgKHBhdGggXHUyMTkyIHNvdXJjZSkgKi9cbiAgcHJpdmF0ZSB0ZW1wbGF0ZUNhY2hlOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIC8vIC0tLSBBY3Rpdml0eSBMb29rdXAgLS0tXG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIHdvcmtzcGFjZSB0ZW1wbGF0ZSBmb3IgYSBnaXZlbiBhY3Rpdml0eSB0eXBlLlxuICAgKiBMb29rcyB1cCB0aGUgYWN0aXZpdHkgYnkgSUQgaW4gc2V0dGluZ3MgYW5kIHJldHVybnMgaXRzIHdvcmtzcGFjZVRlbXBsYXRlIElELlxuICAgKiBUaGUgSUQgbWF5IHJlZmVyIHRvIGEgYnVpbHQtaW4gdGVtcGxhdGUgKGUuZy4gXCJ3b3Jrb3V0XCIpIG9yIGEgdmF1bHQgcGF0aC5cbiAgICovXG4gIGZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGU6IHN0cmluZyk6IHsgdGVtcGxhdGVJZDogc3RyaW5nIH0gfCBudWxsIHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZChcbiAgICAgIChhKSA9PiBhLmlkID09PSBhY3Rpdml0eVR5cGUgJiYgYS5lbmFibGVkICYmIGEud29ya3NwYWNlVGVtcGxhdGUsXG4gICAgKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4geyB0ZW1wbGF0ZUlkOiBhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSEgfTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGF0ZSBMb2FkaW5nIC0tLVxuXG4gIC8qKlxuICAgKiBMb2FkIHRoZSB0ZW1wbGF0ZSBzb3VyY2UgZnJvbSB2YXVsdC4gQ2FjaGVzIHVudGlsIGludmFsaWRhdGVkLlxuICAgKi9cbiAgYXN5bmMgbG9hZFRlbXBsYXRlU291cmNlKHRlbXBsYXRlUGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgLy8gQ2hlY2sgY2FjaGUgZmlyc3RcbiAgICBpZiAodGhpcy50ZW1wbGF0ZUNhY2hlLmhhcyh0ZW1wbGF0ZVBhdGgpKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZUNhY2hlLmdldCh0ZW1wbGF0ZVBhdGgpITtcbiAgICB9XG5cbiAgICAvLyBOb3JtYWxpemUgcGF0aCBcdTIwMTQgYWRkIC5qcyBpZiBtaXNzaW5nXG4gICAgbGV0IHJlc29sdmVkUGF0aCA9IHRlbXBsYXRlUGF0aDtcbiAgICBpZiAoIXJlc29sdmVkUGF0aC5lbmRzV2l0aChcIi5qc1wiKSAmJiAhcmVzb2x2ZWRQYXRoLmVuZHNXaXRoKFwiLm1kXCIpKSB7XG4gICAgICByZXNvbHZlZFBhdGggKz0gXCIuanNcIjtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHJlc29sdmVkUGF0aCk7XG4gICAgaWYgKCFmaWxlIHx8ICEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICB0aGlzLnRlbXBsYXRlQ2FjaGUuc2V0KHRlbXBsYXRlUGF0aCwgc291cmNlKTtcbiAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBPbGVuIFRlbXBsYXRlRW5naW5lOiBGYWlsZWQgdG8gcmVhZCB0ZW1wbGF0ZSAke3Jlc29sdmVkUGF0aH06YCwgZXJyKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlIHRoZSBjYWNoZSBmb3IgYSBzcGVjaWZpYyB0ZW1wbGF0ZSAoZS5nLiBhZnRlciBlZGl0cykuXG4gICAqL1xuICBpbnZhbGlkYXRlQ2FjaGUodGVtcGxhdGVQYXRoPzogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRlbXBsYXRlUGF0aCkge1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLmRlbGV0ZSh0ZW1wbGF0ZVBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRlbXBsYXRlQ2FjaGUuY2xlYXIoKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gQ29udGV4dCBDcmVhdGlvbiAtLS1cblxuICAvKipcbiAgICogQnVpbGQgdGhlIFRlbXBsYXRlQ29udGV4dCB0aGF0IGdldHMgcGFzc2VkIHRvIHRoZSB0ZW1wbGF0ZSBmdW5jdGlvbi5cbiAgICovXG4gIHByaXZhdGUgYnVpbGRDb250ZXh0KFxuICAgIGZpbGU6IFRGaWxlLFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgZnJvbnRtYXR0ZXI6IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuICApOiBUZW1wbGF0ZUNvbnRleHQge1xuICAgIGNvbnN0IGFwcCA9IHRoaXMuYXBwO1xuICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucGx1Z2luO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGFwcCxcbiAgICAgIHBsdWdpbixcbiAgICAgIGZpbGUsXG4gICAgICBjb250YWluZXIsXG5cbiAgICAgIC8vIC0tLSBEYXRhIEJpbmRpbmcgLS0tXG5cbiAgICAgIGZyb250bWF0dGVyOiB7IC4uLmZyb250bWF0dGVyIH0sXG5cbiAgICAgIGdldERhdGEoa2V5Pzogc3RyaW5nKTogdW5rbm93biB7XG4gICAgICAgIGlmICgha2V5KSByZXR1cm4geyAuLi5mcm9udG1hdHRlciB9O1xuICAgICAgICByZXR1cm4gZnJvbnRtYXR0ZXJba2V5XTtcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIHNldERhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiB1bmtub3duKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgICAgICAgZm1ba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVXBkYXRlIG91ciBsb2NhbCBzbmFwc2hvdFxuICAgICAgICBmcm9udG1hdHRlcltrZXldID0gdmFsdWU7XG4gICAgICB9LFxuXG4gICAgICBhc3luYyBzZXRNdWx0aXBsZURhdGEoZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZm0pID0+IHtcbiAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgICAgICAgZm1ba10gPSB2O1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzbmFwc2hvdFxuICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhkYXRhKSkge1xuICAgICAgICAgIGZyb250bWF0dGVyW2tdID0gdjtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8gLS0tIFZhdWx0IEhlbHBlcnMgLS0tXG5cbiAgICAgIGFzeW5jIHJlYWRGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgICAgICBjb25zdCBmID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICAgICAgaWYgKCFmIHx8ICEoZiBpbnN0YW5jZW9mIFRGaWxlKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBhcHAudmF1bHQucmVhZChmKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEZpbGVzSW5Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nKTogVEZpbGVbXSB7XG4gICAgICAgIHJldHVybiBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcihcbiAgICAgICAgICAoZikgPT4gZi5wYXRoLnN0YXJ0c1dpdGgoZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiKSxcbiAgICAgICAgKTtcbiAgICAgIH0sXG5cbiAgICAgIGdldEZpbGVNZXRhZGF0YShwYXRoOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGwge1xuICAgICAgICBjb25zdCBmID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChwYXRoKTtcbiAgICAgICAgaWYgKCFmIHx8ICEoZiBpbnN0YW5jZW9mIFRGaWxlKSkgcmV0dXJuIG51bGw7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGYpO1xuICAgICAgICByZXR1cm4gKGNhY2hlPy5mcm9udG1hdHRlciBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPz8gbnVsbDtcbiAgICAgIH0sXG5cbiAgICAgIC8vIC0tLSBVdGlsaXRpZXMgLS0tXG5cbiAgICAgIG5vdGljZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbmV3IE5vdGljZShtZXNzYWdlLCB0aW1lb3V0KTtcbiAgICAgIH0sXG5cbiAgICAgIG1vbWVudDogd2luZG93Lm1vbWVudCxcblxuICAgICAgY3JlYXRlRWw8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgICAgIHRhZzogSyxcbiAgICAgICAgYXR0cnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICAgICAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICAgIGlmIChhdHRycykge1xuICAgICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJzKSkge1xuICAgICAgICAgICAgaWYgKGsgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gdjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoayA9PT0gXCJodG1sXCIpIHtcbiAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gdjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoayA9PT0gXCJjbHNcIiB8fCBrID09PSBcImNsYXNzXCIpIHtcbiAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gdjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoayA9PT0gXCJzdHlsZVwiKSB7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmNzc1RleHQgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKGssIHYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICAvLyAtLS0gUmVuZGVyaW5nIC0tLVxuXG4gIC8qKlxuICAgKiBNYWluIHJlbmRlciBtZXRob2QuIFJlc29sdmVzIGEgdGVtcGxhdGUgSUQgKGJ1aWx0LWluIG9yIHZhdWx0IHBhdGgpXG4gICAqIGFuZCByZW5kZXJzIGl0IGludG8gYSBjb250YWluZXIgYm91bmQgdG8gdGhlIGdpdmVuIG5vdGUncyBmcm9udG1hdHRlci5cbiAgICovXG4gIGFzeW5jIHJlbmRlcihcbiAgICB0ZW1wbGF0ZUlkOiBzdHJpbmcsXG4gICAgZmlsZTogVEZpbGUsXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy8gMS4gUmVzb2x2ZSB0ZW1wbGF0ZSBzb3VyY2U6IGNoZWNrIGJ1aWx0LWluIHRlbXBsYXRlcyBmaXJzdCwgdGhlbiB2YXVsdFxuICAgIGxldCBzb3VyY2U6IHN0cmluZyB8IG51bGwgPSBCVUlMVElOX1RFTVBMQVRFU1t0ZW1wbGF0ZUlkXSA/PyBudWxsO1xuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIC8vIEZhbGwgYmFjayB0byBsb2FkaW5nIGZyb20gdmF1bHQgYXMgYSAuanMgZmlsZSBwYXRoXG4gICAgICBzb3VyY2UgPSBhd2FpdCB0aGlzLmxvYWRUZW1wbGF0ZVNvdXJjZSh0ZW1wbGF0ZUlkKTtcbiAgICB9XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgdGhpcy5yZW5kZXJFcnJvcihcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBgVGVtcGxhdGUgbm90IGZvdW5kOiAke3RlbXBsYXRlSWR9YCxcbiAgICAgICAgXCJDaGVjayB0aGUgdGVtcGxhdGUgSUQgaW4gT2xlbiBTZXR0aW5ncyBcdTIxOTIgQWN0aXZpdGllcyBcdTIxOTIgQ29uZmlndXJlLiBCdWlsdC1pbiB0ZW1wbGF0ZXM6IHdvcmtvdXQuXCIsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBjdXJyZW50IGZyb250bWF0dGVyXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBjb25zdCBmcm9udG1hdHRlciA9IChjYWNoZT8uZnJvbnRtYXR0ZXIgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID8/IHt9O1xuXG4gICAgLy8gMy4gQnVpbGQgY29udGV4dFxuICAgIGNvbnN0IGN0eCA9IHRoaXMuYnVpbGRDb250ZXh0KGZpbGUsIGNvbnRhaW5lciwgZnJvbnRtYXR0ZXIpO1xuXG4gICAgLy8gNC4gRXhlY3V0ZSB0ZW1wbGF0ZVxuICAgIHRyeSB7XG4gICAgICAvLyBXZSB3cmFwIHRoZSB0ZW1wbGF0ZSBzb3VyY2Ugc28gdGhhdCBgY3R4YCBpcyBhdmFpbGFibGUgYXMgYSBsb2NhbCB2YXJpYWJsZS5cbiAgICAgIC8vIFRoZSB0ZW1wbGF0ZSBjb2RlIGNhbiBkZXN0cnVjdHVyZSBmcm9tIGN0eCBvciB1c2UgaXQgZGlyZWN0bHkuXG4gICAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcImN0eFwiLCBzb3VyY2UpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZm4oY3R4KTtcblxuICAgICAgLy8gSWYgdGhlIHRlbXBsYXRlIHJldHVybnMgYSBwcm9taXNlIChhc3luYyB0ZW1wbGF0ZSksIGF3YWl0IGl0XG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBPbGVuIFRlbXBsYXRlRW5naW5lOiBFcnJvciBleGVjdXRpbmcgdGVtcGxhdGUgJHt0ZW1wbGF0ZUlkfTpgLCBlcnIpO1xuICAgICAgdGhpcy5yZW5kZXJFcnJvcihcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBgVGVtcGxhdGUgZXJyb3I6ICR7KGVyciBhcyBFcnJvcikubWVzc2FnZX1gLFxuICAgICAgICBgSW4gdGVtcGxhdGU6ICR7dGVtcGxhdGVJZH1gLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGFuIGVycm9yIG1lc3NhZ2UgaW5zaWRlIHRoZSBjb250YWluZXIuXG4gICAqL1xuICBwcml2YXRlIHJlbmRlckVycm9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRpdGxlOiBzdHJpbmcsIGhpbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuICAgIGNvbnN0IGVycm9yRGl2ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsYXRlLWVycm9yXCIgfSk7XG4gICAgZXJyb3JEaXYuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvci10aXRsZVwiLCB0ZXh0OiB0aXRsZSB9KTtcbiAgICBlcnJvckRpdi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXRlbXBsYXRlLWVycm9yLWhpbnRcIiwgdGV4dDogaGludCB9KTtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBUZW1wbGF0ZSBcdTIwMTQgV29ya291dCBUcmFja2VyIHY2LjBcbi8vIFJlbmRlcnMgaW5zaWRlIHRoZSBPbGVuIHdvcmtzcGFjZSBmb3IgdGhlIFwid29ya291dFwiIGFjdGl2aXR5LlxuLy8gQWxsIFVJIGxpdmVzIGhlcmUgXHUyMDE0IGRhaWx5IG5vdGVzIG9ubHkgc3RvcmUgWUFNTCBmcm9udG1hdHRlci5cbi8vIERhdGEgaXMgcmVhZC93cml0dGVuIHZpYSBjdHguZ2V0RGF0YSAvIGN0eC5zZXREYXRhLlxuLy8gUGVyc29uYWwgc3RhdHMgbm93IHJlYWQgZnJvbSBwbHVnaW4gc2V0dGluZ3MgKHBlcnNvbmFsU3RhdHMpLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IHsgY29udGFpbmVyLCBnZXREYXRhLCBzZXREYXRhLCBzZXRNdWx0aXBsZURhdGEsIGFwcCwgbW9tZW50LCBub3RpY2UsXG4gICAgICAgIGNyZWF0ZUVsLCBmaWxlLCByZWFkRmlsZSwgZ2V0RmlsZXNJbkZvbGRlciwgZ2V0RmlsZU1ldGFkYXRhIH0gPSBjdHg7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0VUVElOR1MgXHUyMDE0IEVkaXQgdGhlc2UgdG8gbWF0Y2ggeW91ciB2YXVsdCBzdHJ1Y3R1cmVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgU0VUVElOR1MgPSB7XG4gIC8vIFdoZXJlIGRhaWx5IHdvcmtvdXQgbm90ZXMgYXJlIHN0b3JlZFxuICB3b3Jrb3V0Rm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiLFxuICAvLyBGb2xkZXIgY29udGFpbmluZyBleGVyY2lzZSBzdGFuZGFyZCAubWQgZmlsZXMgKGUuZy4gXCJCZW5jaCBQcmVzcy5tZFwiKVxuICBleGVyY2lzZURiRm9sZGVyOiBcIkhvbWUvQWN0aXZpdGllcy9FeGVyY2lzZXMgZGF0YWJhc2VcIixcbn07XG5cbi8vIFJlYWQgcGVyc29uYWwgc3RhdHMgZnJvbSBwbHVnaW4gc2V0dGluZ3MgKHNldCBpbiBPbGVuIFNldHRpbmdzID4gUGVyc29uYWwgU3RhdHMpXG5jb25zdCBfcGx1Z2luU3RhdHMgPSBjdHgucGx1Z2luPy5zZXR0aW5ncz8ucGVyc29uYWxTdGF0cyB8fCB7fTtcbmNvbnN0IFBFUlNPTkFMID0ge1xuICB3ZWlnaHQ6IF9wbHVnaW5TdGF0cy5jdXJyZW50V2VpZ2h0IHx8IDYxLFxuICBoZWlnaHQ6IF9wbHVnaW5TdGF0cy5oZWlnaHQgfHwgMTc1LFxuICBiaXJ0aGRhdGU6IF9wbHVnaW5TdGF0cy5iaXJ0aGRhdGUgfHwgXCIyMDA1LTExLTI5XCIsXG4gIGdlbmRlcjogX3BsdWdpblN0YXRzLmdlbmRlciB8fCBcIm1hbGVcIixcbn07XG5cbi8vIE11c2NsZSBncm91cHMgYXZhaWxhYmxlIGZvciBzZWxlY3Rpb24sIHdpdGggb3B0aW9uYWwgc3ViZ3JvdXBzXG5jb25zdCBNVVNDTEVfR1JPVVBTID0ge1xuICBcIk5lY2tcIjogICAgICB7IHN1Ymdyb3VwczogbnVsbCwgaWNvbjogXCJcXHVEODNFXFx1RERCNFwiIH0sXG4gIFwiQmFja1wiOiAgICAgIHsgc3ViZ3JvdXBzOiBbXCJMYXRzXCIsIFwiVHJhcHNcIiwgXCJSaG9tYm9pZHNcIiwgXCJMb3dlciBCYWNrXCIsIFwiUmVhciBEZWx0c1wiXSwgaWNvbjogXCJcXHVEODNEXFx1REQxOVwiIH0sXG4gIFwiQ2hlc3RcIjogICAgIHsgc3ViZ3JvdXBzOiBudWxsLCBpY29uOiBcIlxcdUQ4M0RcXHVEQ0FBXCIgfSxcbiAgXCJTaG91bGRlcnNcIjogeyBzdWJncm91cHM6IFtcIkZyb250IERlbHRzXCIsIFwiU2lkZSBEZWx0c1wiLCBcIlJlYXIgRGVsdHNcIl0sIGljb246IFwiXFx1RDgzQ1xcdURGQUZcIiB9LFxuICBcIkNvcmVcIjogICAgICB7IHN1Ymdyb3VwczogbnVsbCwgaWNvbjogXCJcXHVEODNDXFx1REZBRlwiIH0sXG4gIFwiTGVnc1wiOiAgICAgIHsgc3ViZ3JvdXBzOiBbXCJRdWFkc1wiLCBcIkhhbXN0cmluZ3NcIiwgXCJHbHV0ZXNcIiwgXCJDYWx2ZXNcIiwgXCJBZGR1Y3RvcnNcIl0sIGljb246IFwiXFx1RDgzRVxcdUREQjVcIiB9LFxuICBcIkFybXNcIjogICAgICB7IHN1Ymdyb3VwczogW1wiQmljZXBzXCIsIFwiVHJpY2Vwc1wiLCBcIkZvcmVhcm1zXCJdLCBpY29uOiBcIlxcdUQ4M0RcXHVEQ0FBXCIgfSxcbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVEhFTUUgJiBDT05TVEFOVFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgVEhFTUUgPSB7XG4gIGNvbG9yOiBcIiM5YThjN2FcIixcbiAgY29sb3JIb3ZlcjogXCIjYWE5YzhhXCIsXG4gIGNvbG9yQm9yZGVyOiBcIiMzYTM0MmFcIixcbiAgY29sb3JCb3JkZXJIb3ZlcjogXCIjNGE0NDNhXCIsXG4gIGNvbG9yTXV0ZWQ6IFwiIzZhNWE0YVwiLFxuICBjb2xvckxpZ2h0OiBcIiNiOGE4OTBcIixcbiAgY29sb3JEaXNjaXBsaW5lOiBcIiNhODk4NjBcIixcbiAgY29sb3JGbG93OiBcIiM2YThhOWFcIixcbiAgc3lzdGVtR3JlZW46IFwiIzdhOWE3ZFwiXG59O1xuXG5jb25zdCBTVFJFTkdUSF9MRVZFTFMgPSB7XG4gIFwiVW50cmFpbmVkXCI6ICAgIHsgY29sb3I6IFwiIzZhNmE2YVwiLCBpY29uOiBcIlxcdTI1Q0JcIiB9LFxuICBcIkJlZ2lubmVyXCI6ICAgICB7IGNvbG9yOiBcIiNhODk4NjBcIiwgaWNvbjogXCJcXHUyNUQwXCIgfSxcbiAgXCJOb3ZpY2VcIjogICAgICAgeyBjb2xvcjogXCIjN2E5YTdkXCIsIGljb246IFwiXFx1MjVEMVwiIH0sXG4gIFwiSW50ZXJtZWRpYXRlXCI6IHsgY29sb3I6IFwiIzZhOGE5YVwiLCBpY29uOiBcIlxcdTI1RDVcIiB9LFxuICBcIkFkdmFuY2VkXCI6ICAgICB7IGNvbG9yOiBcIiM4YTdhOWFcIiwgaWNvbjogXCJcXHUyNUNGXCIgfSxcbiAgXCJFbGl0ZVwiOiAgICAgICAgeyBjb2xvcjogXCIjOWE2YTdhXCIsIGljb246IFwiXFx1MjYwNVwiIH1cbn07XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU1RBVEUgKGZyb20gZnJvbnRtYXR0ZXIpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmxldCBleGVyY2lzZXMgPSBnZXREYXRhKFwiZXhlcmNpc2VzXCIpIHx8IFtdO1xubGV0IG11c2NsZUdyb3VwcyA9IGdldERhdGEoXCJtdXNjbGVHcm91cHNcIikgfHwgW107XG5sZXQgY3VycmVudE11c2NsZUluZGV4ID0gZ2V0RGF0YShcImN1cnJlbnRNdXNjbGVJbmRleFwiKSB8fCAwO1xuY29uc3QgaXNDb21wbGV0ZWQgPSBnZXREYXRhKFwiV29ya291dFwiKSA9PT0gdHJ1ZTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTVFlMRVNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sZW4tdHBsLXdvcmtvdXQtdjZcIikpIHtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlLmlkID0gXCJvbGVuLXRwbC13b3Jrb3V0LXY2XCI7XG4gIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgIC5vdHctY29udGFpbmVyICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLm90dy1jb250YWluZXIgeyBtYXgtd2lkdGg6IDUwMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMTBweCAwIDEyMHB4IDA7IGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBzZXJpZjsgY29sb3I6ICNjOGMwYjI7IH1cbiAgICAub3R3LWNvbnRhaW5lciBidXR0b24sIC5vdHctY29udGFpbmVyIGlucHV0LCAub3R3LW1vZGFsLW92ZXJsYXkgYnV0dG9uLCAub3R3LW1vZGFsLW92ZXJsYXkgaW5wdXQgeyBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctY29udGFpbmVyIGlucHV0W3R5cGU9XCJudW1iZXJcIl0geyAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgfVxuICAgIEBrZXlmcmFtZXMgb3R3LWJyZWF0aGUgeyAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IGluc2V0IDAgMCAxNnB4IHJnYmEoMTU0LDE0MCwxMjIsMC4wMik7IH0gNTAlIHsgYm94LXNoYWRvdzogaW5zZXQgMCAwIDI0cHggcmdiYSgxNTQsMTQwLDEyMiwwLjA0KTsgfSB9XG4gICAgQGtleWZyYW1lcyBvdHctcHVsc2UtZ2xvdyB7IDAlLCAxMDAlIHsgb3BhY2l0eTogMC40OyB9IDUwJSB7IG9wYWNpdHk6IDE7IH0gfVxuICAgIC5vdHctY2FyZCB7IGJhY2tncm91bmQ6IHJnYmEoMTIsMTAsMTYsMC42KTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIHNhdHVyYXRlKDE1MCUpOyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBzYXR1cmF0ZSgxNTAlKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjA4KTsgcGFkZGluZzogMTZweDsgcG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW4tYm90dG9tOiAxMnB4OyBib3JkZXItcmFkaXVzOiAxNnB4OyB9XG4gICAgLm90dy1jYXJkLWJyZWF0aGUgeyBhbmltYXRpb246IG90dy1icmVhdGhlIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlOyB9XG4gICAgLm90dy1oZWFkZXIgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDE2cHg7IH1cbiAgICAub3R3LXRpdGxlIHsgbWFyZ2luOiAwOyBjb2xvcjogIzlhOGM3YTsgZm9udC1zaXplOiAxOHB4OyBmb250LXdlaWdodDogNjAwOyBsZXR0ZXItc3BhY2luZzogNHB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLm90dy1wcm9ncmVzcy1sYWJlbCB7IGNvbG9yOiAjNGQ0NzNlOyBmb250LXNpemU6IDExcHg7IG1hcmdpbi10b3A6IDZweDsgfVxuICAgIC5vdHctc2VjdGlvbi1sYWJlbCB7IGNvbG9yOiAjNGQ0NzNlOyBmb250LXNpemU6IDlweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDNweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW46IDE2cHggMCA4cHg7IH1cbiAgICAub3R3LXdlZWstZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7IGdhcDogNHB4OyB9XG4gICAgLm90dy13ZWVrLWRheSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogM3B4OyBwYWRkaW5nOiA2cHggM3B4OyBiYWNrZ3JvdW5kOiByZ2JhKDEyLDEwLDE2LDAuNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4wNik7IGJvcmRlci1yYWRpdXM6IDhweDsgfVxuICAgIC5vdHctd2Vlay1kYXkudG9kYXkgeyBib3JkZXItY29sb3I6IHJnYmEoMTU0LDE0MCwxMjIsMC4yKTsgfVxuICAgIC5vdHctd2Vlay1kYXkgLm90dy1kYXktbGFiZWwgeyBmb250LXNpemU6IDhweDsgY29sb3I6ICM0ZDQ3M2U7IGxldHRlci1zcGFjaW5nOiAxcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAub3R3LXdlZWstZGF5IC5vdHctZGF5LW51bSB7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM0ZDQ3M2U7IH1cbiAgICAub3R3LXdlZWstZGF5IC5vdHctZGF5LWljb24geyBmb250LXNpemU6IDEzcHg7IG1pbi1oZWlnaHQ6IDE2cHg7IH1cbiAgICAub3R3LXdlZWstZGF5LmRvbmUgLm90dy1kYXktbnVtIHsgY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LWhlYXRtYXAtbGVnZW5kIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA2cHggMTJweDsgbWFyZ2luLXRvcDogNnB4OyBwYWRkaW5nOiAwIDhweDsgfVxuICAgIC5vdHctaGVhdG1hcC1sZWdlbmQtaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyBmb250LXNpemU6IDdweDsgY29sb3I6ICM0ZDQ3M2U7IGxldHRlci1zcGFjaW5nOiAxcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAub3R3LWhlYXRtYXAtbGVnZW5kLWRvdCB7IHdpZHRoOiA2cHg7IGhlaWdodDogNnB4OyBib3JkZXItcmFkaXVzOiAycHg7IH1cbiAgICAub3R3LWJ0biB7IHBhZGRpbmc6IDEycHggMjBweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LWJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzlhOGM3YSwgIzdhNmM1YSk7IGNvbG9yOiAjMGEwYTBhOyB3aWR0aDogMTAwJTsgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDE1NCwxNDAsMTIyLDAuMTUpOyB9XG4gICAgLm90dy1idG4tcHJpbWFyeTphY3RpdmUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDE1NCwxNDAsMTIyLDAuMik7IH1cbiAgICAub3R3LWJ0bi1zZWNvbmRhcnkgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMSk7IGNvbG9yOiAjNmE1YTRhOyB9XG4gICAgLm90dy1idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogcmdiYSgxNTQsMTQwLDEyMiwwLjMpOyBjb2xvcjogIzlhOGM3YTsgfVxuICAgIC5vdHctYnRuLWZpbmlzaCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3YTlhN2QsICM1YTdhNWQpOyBjb2xvcjogIzBhMGEwYTsgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDEyMiwxNTQsMTI1LDAuMTUpOyB9XG4gICAgLm90dy1idG4tZGFzaGVkIHsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgxNTQsMTQwLDEyMiwwLjEpOyBjb2xvcjogIzRkNDczZTsgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50OyB9XG4gICAgLm90dy1idG4tZGFzaGVkOmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogcmdiYSgxNTQsMTQwLDEyMiwwLjMpOyBjb2xvcjogIzlhOGM3YTsgfVxuICAgIC5vdHctbmF2LXJvdyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgbWFyZ2luLXRvcDogMjBweDsgfVxuICAgIC5vdHctbmF2LXJvdyAub3R3LWJ0biB7IGZsZXg6IDE7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5vdHctc2V0LXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IHBhZGRpbmc6IDEwcHggMTJweDsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDYpOyBtYXJnaW4tYm90dG9tOiA0cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cbiAgICAub3R3LXNldC1yb3cuY29tcGxldGVkIHsgb3BhY2l0eTogMC41OyB9XG4gICAgLm90dy1jaGVja2JveCB7IHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4xNSk7IGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogIzBhMGEwYTsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRyYW5zaXRpb246IGFsbCAwLjJzOyBmbGV4LXNocmluazogMDsgfVxuICAgIC5vdHctY2hlY2tib3guY2hlY2tlZCB7IGJhY2tncm91bmQ6ICM3YTlhN2Q7IGJvcmRlci1jb2xvcjogIzdhOWE3ZDsgfVxuICAgIC5vdHctaW5wdXQgeyBwYWRkaW5nOiA2cHg7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjEpOyBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDsgY29sb3I6ICM5YThjN2E7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyB3aWR0aDogNTBweDsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1jdHJsLWJ0biB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBiYWNrZ3JvdW5kOiByZ2JhKDEyLDEwLDE2LDAuNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBjb2xvcjogIzlhOGM3YTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDE1cHg7IGZsZXgtc2hyaW5rOiAwOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LWN0cmwtYnRuOmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTU0LDE0MCwxMjIsMC4yKTsgfVxuICAgIC5vdHctd2FybXVwLWJhZGdlIHsgZm9udC1zaXplOiA5cHg7IGNvbG9yOiAjNmE4YTlhOyBwYWRkaW5nOiAycHggNnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDEwNiwxMzgsMTU0LDAuMSk7IGJvcmRlci1yYWRpdXM6IDZweDsgfVxuICAgIC5vdHctc3RyZW5ndGgtYmFyIHsgaGVpZ2h0OiA0cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlci1yYWRpdXM6IDJweDsgb3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luLXRvcDogNnB4OyB9XG4gICAgLm90dy1zdHJlbmd0aC1maWxsIHsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiAycHg7IHRyYW5zaXRpb246IHdpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTsgfVxuICAgIC5vdHctc3RyZW5ndGgtYmFkZ2UgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IHBhZGRpbmc6IDVweCAxMHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctcHItYm94IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0cHg7IHBhZGRpbmc6IDhweCAxMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDE2OCwxNTIsOTYsMC4wNik7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY4LDE1Miw5NiwwLjE1KTsgYm9yZGVyLXJhZGl1czogOHB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgICAub3R3LW1vZGFsLW92ZXJsYXkgeyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHotaW5kZXg6IDk5OTk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgZWFzZSwgYmFja2Ryb3AtZmlsdGVyIDAuNHMgZWFzZTsgfVxuICAgIC5vdHctbW9kYWwtb3ZlcmxheS52aXNpYmxlIHsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjg1KTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpOyB9XG4gICAgLm90dy1tb2RhbC1jb250ZW50IHsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjk1KTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIHNhdHVyYXRlKDE1MCUpOyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBzYXR1cmF0ZSgxNTAlKTsgcGFkZGluZzogMjRweCAxOHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMSk7IGJvcmRlci1yYWRpdXM6IDE4cHg7IG1heC13aWR0aDogNTAwcHg7IHdpZHRoOiA5MCU7IG1heC1oZWlnaHQ6IDg1dmg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTRweDsgcG9zaXRpb246IHJlbGF0aXZlOyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlOyBvdmVyZmxvdy15OiBhdXRvOyB9XG4gICAgLm90dy1tb2RhbC1vdmVybGF5LnZpc2libGUgLm90dy1tb2RhbC1jb250ZW50IHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgLm90dy1mZWVsLWJ0biB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTZweDsgcGFkZGluZzogMTRweCAxOHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDEyLDEwLDE2LDAuNCk7IGJvcmRlci1yYWRpdXM6IDEycHg7IGN1cnNvcjogcG9pbnRlcjsgbWFyZ2luLWJvdHRvbTogOHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjA2KTsgfVxuICAgIC5vdHctZmVlbC1idG46YWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSgxNTQsMTQwLDEyMiwwLjA4KTsgfVxuICAgIC5vdHctbXVzY2xlLXRvZ2dsZSB7IHBhZGRpbmc6IDEwcHggMTZweDsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDgpOyBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7IGNvbG9yOiAjOWE4YzdhOyBmb250LXNpemU6IDEycHg7IGxldHRlci1zcGFjaW5nOiAxcHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1tdXNjbGUtdG9nZ2xlLmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTU0LDE0MCwxMjIsMC4yKSAhaW1wb3J0YW50OyBib3JkZXItY29sb3I6IHJnYmEoMTU0LDE0MCwxMjIsMC4zKSAhaW1wb3J0YW50OyB9XG4gICAgLm90dy1tdXNjbGUtdG9nZ2xlOmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgfVxuICAgIC5vdHctc3ViZ3JvdXAtY29udGFpbmVyIHsgbWF4LWhlaWdodDogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLCBwYWRkaW5nIDAuM3MgZWFzZTsgb3BhY2l0eTogMDsgcGFkZGluZzogMCAxMnB4OyB9XG4gICAgLm90dy1zdWJncm91cC1jb250YWluZXIuZXhwYW5kZWQgeyBtYXgtaGVpZ2h0OiAyMDBweDsgb3BhY2l0eTogMTsgcGFkZGluZzogMTJweDsgfVxuICAgIC5vdHctc3ViLXRvZ2dsZSB7IHBhZGRpbmc6IDdweCAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDEyLDEwLDE2LDAuNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBjb2xvcjogIzZhNWE0YTsgZm9udC1zaXplOiAxMXB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctc3ViLXRvZ2dsZS5hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwxNDAsMTIyLDAuMTUpOyBib3JkZXItY29sb3I6IHJnYmEoMTU0LDE0MCwxMjIsMC4yNSk7IGNvbG9yOiAjOWE4YzdhOyB9XG4gIGA7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVUSUxJVFkgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gYWRkQ29ybmVycyhlbCwgY29sb3IsIHNpemUgPSAxNCkge1xuICBbXCJUTFwiLCBcIlRSXCIsIFwiQkxcIiwgXCJCUlwiXS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpc1RvcCA9IHBvcy5pbmNsdWRlcyhcIlRcIiksIGlzTGVmdCA9IHBvcy5pbmNsdWRlcyhcIkxcIik7XG4gICAgYy5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOmFic29sdXRlOyR7aXNUb3A/XCJ0b3A6MFwiOlwiYm90dG9tOjBcIn07JHtpc0xlZnQ/XCJsZWZ0OjBcIjpcInJpZ2h0OjBcIn07d2lkdGg6JHtzaXplfXB4O2hlaWdodDoke3NpemV9cHg7Ym9yZGVyLSR7aXNUb3A/XCJ0b3BcIjpcImJvdHRvbVwifToxcHggc29saWQgJHtjb2xvcn07Ym9yZGVyLSR7aXNMZWZ0P1wibGVmdFwiOlwicmlnaHRcIn06MXB4IHNvbGlkICR7Y29sb3J9O3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZTtgO1xuICAgIGVsLmFwcGVuZENoaWxkKGMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlMVJNKHdlaWdodCwgcmVwcykge1xuICBpZiAocmVwcyA9PT0gMCB8fCB3ZWlnaHQgPT09IDApIHJldHVybiAwO1xuICBpZiAocmVwcyA9PT0gMSkgcmV0dXJuIHdlaWdodDtcbiAgcmV0dXJuIE1hdGgucm91bmQod2VpZ2h0ICogKDEgKyByZXBzIC8gMzApKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rmlyc3RXb3JraW5nU2V0SW5kZXgoc2V0cykge1xuICByZXR1cm4gc2V0cy5maW5kSW5kZXgoKHMpID0+ICFzLmlzV2FybXVwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2FybXVwV2VpZ2h0cyhleCwgbmV3Vykge1xuICBjb25zdCB3YXJtdXBzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+IHMuaXNXYXJtdXApO1xuICBbMC41LCAwLjcsIDAuODVdLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICBpZiAod2FybXVwc1tpXSkgd2FybXVwc1tpXS53ZWlnaHQgPSBNYXRoLnJvdW5kKG5ld1cgKiBwKTtcbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTVVTQ0xFIEdST1VQIFNUUkVOR1RIIFx1MjAxNCBBZ2dyZWdhdGUgcGVyLXJlZ2lvbiBkYXRhIGludG8gZ3JvdXBzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgTVVTQ0xFX0dST1VQX1JFR0lPTlMgPSB7XG4gIE5lY2s6ICAgICAgW1wibmVja1wiXSxcbiAgQ2hlc3Q6ICAgICBbXCJjaGVzdFwiXSxcbiAgQmFjazogICAgICBbXCJsYXRzXCIsIFwidHJhcHNcIiwgXCJsb3dlcl9iYWNrXCJdLFxuICBTaG91bGRlcnM6IFtcImZyb250X2RlbHRzXCIsIFwicmVhcl9kZWx0c1wiXSxcbiAgQ29yZTogICAgICBbXCJjb3JlXCJdLFxuICBMZWdzOiAgICAgIFtcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiXSxcbiAgQXJtczogICAgICBbXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIl0sXG59O1xuXG5jb25zdCBMRVZFTF9PUkRFUiA9IFtcIlVudHJhaW5lZFwiLCBcIkJlZ2lubmVyXCIsIFwiTm92aWNlXCIsIFwiSW50ZXJtZWRpYXRlXCIsIFwiQWR2YW5jZWRcIiwgXCJFbGl0ZVwiXTtcblxuZnVuY3Rpb24gZ2V0TXVzY2xlR3JvdXBTdHJlbmd0aChtdXNjbGVMZXZlbHMpIHtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoY29uc3QgW2dyb3VwLCByZWdpb25zXSBvZiBPYmplY3QuZW50cmllcyhNVVNDTEVfR1JPVVBfUkVHSU9OUykpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gcmVnaW9ucy5tYXAociA9PiBtdXNjbGVMZXZlbHNbcl0pLmZpbHRlcihCb29sZWFuKTtcbiAgICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJlc3VsdFtncm91cF0gPSB7IGxldmVsOiBcIlVudHJhaW5lZFwiLCBjb2xvcjogXCIjNmE2YTZhXCIsIHByb2dyZXNzOiAwLCBhdmdTY29yZTogMCB9O1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIC8vIEF2ZXJhZ2Ugc2NvcmU6IGxldmVsSW5kZXggKiAyMCArIHByb2dyZXNzLXdpdGhpbi1sZXZlbCAqIDAuMlxuICAgIGxldCB0b3RhbFNjb3JlID0gMDtcbiAgICBmb3IgKGNvbnN0IGUgb2YgZW50cmllcykge1xuICAgICAgY29uc3QgaWR4ID0gTEVWRUxfT1JERVIuaW5kZXhPZihlLmxldmVsKTtcbiAgICAgIHRvdGFsU2NvcmUgKz0gaWR4ICogMjAgKyAoZS5wcm9ncmVzcyB8fCAwKSAqIDAuMjtcbiAgICB9XG4gICAgY29uc3QgYXZnU2NvcmUgPSB0b3RhbFNjb3JlIC8gZW50cmllcy5sZW5ndGg7XG4gICAgY29uc3QgYXZnTGV2ZWxJZHggPSBNYXRoLm1pbig1LCBNYXRoLmZsb29yKGF2Z1Njb3JlIC8gMjApKTtcbiAgICBjb25zdCBhdmdMZXZlbCA9IExFVkVMX09SREVSW2F2Z0xldmVsSWR4XTtcbiAgICBjb25zdCBwcm9ncmVzc0luTGV2ZWwgPSAoKGF2Z1Njb3JlIC8gMjApIC0gYXZnTGV2ZWxJZHgpICogMTAwO1xuICAgIHJlc3VsdFtncm91cF0gPSB7XG4gICAgICBsZXZlbDogYXZnTGV2ZWwsXG4gICAgICBjb2xvcjogU1RSRU5HVEhfTEVWRUxTW2F2Z0xldmVsXT8uY29sb3IgfHwgXCIjNmE2YTZhXCIsXG4gICAgICBwcm9ncmVzczogTWF0aC5taW4oMTAwLCBNYXRoLm1heCgwLCBwcm9ncmVzc0luTGV2ZWwpKSxcbiAgICAgIGF2Z1Njb3JlLFxuICAgICAgcmVnaW9uQ291bnQ6IGVudHJpZXMubGVuZ3RoLFxuICAgICAgdG90YWxSZWdpb25zOiByZWdpb25zLmxlbmd0aCxcbiAgICB9O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEVSU09OQUwgU1RBVFMgJiBTVFJFTkdUSCBTVEFOREFSRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQZXJzb25hbFN0YXRzKCkge1xuICAvLyBSZWFkIGZyb20gcGx1Z2luIHNldHRpbmdzIChQZXJzb25hbCBTdGF0cyBzZWN0aW9uKVxuICByZXR1cm4ge1xuICAgIHdlaWdodDogUEVSU09OQUwud2VpZ2h0LFxuICAgIGhlaWdodDogUEVSU09OQUwuaGVpZ2h0LFxuICAgIGJpcnRoZGF0ZTogUEVSU09OQUwuYmlydGhkYXRlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBZ2UoYmQpIHtcbiAgaWYgKCFiZCkgcmV0dXJuIDIwO1xuICBjb25zdCBiID0gbmV3IERhdGUoYmQpLCB0ID0gbmV3IERhdGUoKTtcbiAgbGV0IGEgPSB0LmdldEZ1bGxZZWFyKCkgLSBiLmdldEZ1bGxZZWFyKCk7XG4gIGlmICh0LmdldE1vbnRoKCkgPCBiLmdldE1vbnRoKCkgfHwgKHQuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpICYmIHQuZ2V0RGF0ZSgpIDwgYi5nZXREYXRlKCkpKSBhLS07XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0YW5kYXJkVmFsdWUodmFsKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSBcInN0cmluZ1wiKSB2YWwgPSBTdHJpbmcodmFsKTtcbiAgdmFsID0gdmFsLnRyaW0oKTtcbiAgaWYgKHZhbC5pbmNsdWRlcyhcIjxcIikpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbC5yZXBsYWNlKC9bPFxcc10vZywgXCJcIikpO1xuICAgIHJldHVybiAhaXNOYU4obnVtKSAmJiBudW0gPiAwID8gbnVtICogMC41IDogMC4xO1xuICB9XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyAwIDogbnVtO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTdHJlbmd0aFN0YW5kYXJkKGV4ZXJjaXNlTmFtZSkge1xuICBjb25zdCBmaWxlUGF0aCA9IFNFVFRJTkdTLmV4ZXJjaXNlRGJGb2xkZXIgKyBcIi9cIiArIGV4ZXJjaXNlTmFtZSArIFwiLm1kXCI7XG4gIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKGZpbGVQYXRoKTtcbiAgY29uc3QgaXNCVyA9IGZtPy5UeXBlID09PSBcIkJvZHl3ZWlnaHRcIjtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGZpbGVQYXRoKTtcbiAgaWYgKCFjb250ZW50KSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuICBjb25zdCBid1RhYmxlID0gW10sIGFnZVRhYmxlID0gW107XG4gIGxldCBjdXJyZW50VGFibGUgPSBudWxsO1xuICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICBpZiAobGluZS5tYXRjaCgvXFx8XFxzKkJXXFxzKlxcfC9pKSkgeyBjdXJyZW50VGFibGUgPSBcImJ3XCI7IGNvbnRpbnVlOyB9XG4gICAgaWYgKGxpbmUubWF0Y2goL1xcfFxccypBZ2VcXHMqXFx8L2kpKSB7IGN1cnJlbnRUYWJsZSA9IFwiYWdlXCI7IGNvbnRpbnVlOyB9XG4gICAgaWYgKGxpbmUuc3RhcnRzV2l0aChcInwtLS1cIikgfHwgbGluZS5zdGFydHNXaXRoKFwifCAtLS1cIikpIGNvbnRpbnVlO1xuICAgIGNvbnN0IG0gPSBsaW5lLm1hdGNoKC9cXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHwvKTtcbiAgICBpZiAobSkge1xuICAgICAgY29uc3Qgcm93ID0geyBrZXk6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzFdKSwgYmVnaW5uZXI6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzJdKSwgbm92aWNlOiBwYXJzZVN0YW5kYXJkVmFsdWUobVszXSksIGludGVybWVkaWF0ZTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNF0pLCBhZHZhbmNlZDogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNV0pLCBlbGl0ZTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNl0pIH07XG4gICAgICBpZiAocm93LmtleSA+IDAgJiYgKHJvdy5iZWdpbm5lciA+IDAgfHwgcm93Lm5vdmljZSA+IDAgfHwgcm93LmludGVybWVkaWF0ZSA+IDApKSB7XG4gICAgICAgIGlmIChjdXJyZW50VGFibGUgPT09IFwiYndcIikgYndUYWJsZS5wdXNoKHJvdyk7XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRUYWJsZSA9PT0gXCJhZ2VcIikgYWdlVGFibGUucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4geyBid1RhYmxlLCBhZ2VUYWJsZSwgaXNCb2R5d2VpZ2h0OiBpc0JXLCBoYXNWYWxpZERhdGE6IGJ3VGFibGUubGVuZ3RoID4gMCB8fCBhZ2VUYWJsZS5sZW5ndGggPiAwIH07XG59XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlU3RhbmRhcmQodGFibGUsIHZhbHVlKSB7XG4gIGlmICghdGFibGUgfHwgdGFibGUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnRhYmxlXS5zb3J0KChhLCBiKSA9PiBhLmtleSAtIGIua2V5KTtcbiAgbGV0IGxvd2VyID0gc29ydGVkWzBdLCB1cHBlciA9IHNvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGlmIChzb3J0ZWRbaV0ua2V5IDw9IHZhbHVlICYmIHNvcnRlZFtpICsgMV0ua2V5ID49IHZhbHVlKSB7IGxvd2VyID0gc29ydGVkW2ldOyB1cHBlciA9IHNvcnRlZFtpICsgMV07IGJyZWFrOyB9XG4gIH1cbiAgaWYgKHZhbHVlIDw9IGxvd2VyLmtleSkgcmV0dXJuIHsgLi4ubG93ZXIgfTtcbiAgaWYgKHZhbHVlID49IHVwcGVyLmtleSkgcmV0dXJuIHsgLi4udXBwZXIgfTtcbiAgY29uc3QgcmF0aW8gPSAodmFsdWUgLSBsb3dlci5rZXkpIC8gKHVwcGVyLmtleSAtIGxvd2VyLmtleSk7XG4gIHJldHVybiB7IGtleTogdmFsdWUsIGJlZ2lubmVyOiBsb3dlci5iZWdpbm5lciArIHJhdGlvICogKHVwcGVyLmJlZ2lubmVyIC0gbG93ZXIuYmVnaW5uZXIpLCBub3ZpY2U6IGxvd2VyLm5vdmljZSArIHJhdGlvICogKHVwcGVyLm5vdmljZSAtIGxvd2VyLm5vdmljZSksIGludGVybWVkaWF0ZTogbG93ZXIuaW50ZXJtZWRpYXRlICsgcmF0aW8gKiAodXBwZXIuaW50ZXJtZWRpYXRlIC0gbG93ZXIuaW50ZXJtZWRpYXRlKSwgYWR2YW5jZWQ6IGxvd2VyLmFkdmFuY2VkICsgcmF0aW8gKiAodXBwZXIuYWR2YW5jZWQgLSBsb3dlci5hZHZhbmNlZCksIGVsaXRlOiBsb3dlci5lbGl0ZSArIHJhdGlvICogKHVwcGVyLmVsaXRlIC0gbG93ZXIuZWxpdGUpIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEF2ZXJhZ2VkU3RhbmRhcmRzKHN0ZCkge1xuICBjb25zdCBzdGF0cyA9IGF3YWl0IGdldFBlcnNvbmFsU3RhdHMoKTtcbiAgY29uc3QgYncgPSBpbnRlcnBvbGF0ZVN0YW5kYXJkKHN0ZC5id1RhYmxlLCBzdGF0cy53ZWlnaHQpO1xuICBjb25zdCBhZyA9IGludGVycG9sYXRlU3RhbmRhcmQoc3RkLmFnZVRhYmxlLCBjYWxjdWxhdGVBZ2Uoc3RhdHMuYmlydGhkYXRlKSk7XG4gIGlmIChidyAmJiBhZykgcmV0dXJuIHsgYmVnaW5uZXI6IChidy5iZWdpbm5lciArIGFnLmJlZ2lubmVyKSAvIDIsIG5vdmljZTogKGJ3Lm5vdmljZSArIGFnLm5vdmljZSkgLyAyLCBpbnRlcm1lZGlhdGU6IChidy5pbnRlcm1lZGlhdGUgKyBhZy5pbnRlcm1lZGlhdGUpIC8gMiwgYWR2YW5jZWQ6IChidy5hZHZhbmNlZCArIGFnLmFkdmFuY2VkKSAvIDIsIGVsaXRlOiAoYncuZWxpdGUgKyBhZy5lbGl0ZSkgLyAyIH07XG4gIHJldHVybiBidyB8fCBhZyB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVTdHJlbmd0aExldmVsKGN2LCBzdGQpIHtcbiAgaWYgKCFzdGQgfHwgY3YgPCAwKSByZXR1cm4geyBsZXZlbDogXCJVbnRyYWluZWRcIiwgY29sb3I6IFwiIzZhNmE2YVwiLCBwcm9ncmVzczogMCwgbmV4dFRhcmdldDogc3RkPy5iZWdpbm5lciB8fCAxIH07XG4gIGNvbnN0IHsgYmVnaW5uZXIsIG5vdmljZSwgaW50ZXJtZWRpYXRlLCBhZHZhbmNlZCwgZWxpdGUgfSA9IHN0ZDtcbiAgaWYgKGN2ID49IGVsaXRlKSByZXR1cm4geyBsZXZlbDogXCJFbGl0ZVwiLCBjb2xvcjogXCIjOWE2YTdhXCIsIHByb2dyZXNzOiAxMDAsIG5leHRUYXJnZXQ6IG51bGwgfTtcbiAgaWYgKGN2ID49IGFkdmFuY2VkKSByZXR1cm4geyBsZXZlbDogXCJBZHZhbmNlZFwiLCBjb2xvcjogXCIjOGE3YTlhXCIsIHByb2dyZXNzOiAoKGN2IC0gYWR2YW5jZWQpIC8gKGVsaXRlIC0gYWR2YW5jZWQpKSAqIDEwMCwgbmV4dFRhcmdldDogZWxpdGUgfTtcbiAgaWYgKGN2ID49IGludGVybWVkaWF0ZSkgcmV0dXJuIHsgbGV2ZWw6IFwiSW50ZXJtZWRpYXRlXCIsIGNvbG9yOiBcIiM2YThhOWFcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBpbnRlcm1lZGlhdGUpIC8gKGFkdmFuY2VkIC0gaW50ZXJtZWRpYXRlKSkgKiAxMDAsIG5leHRUYXJnZXQ6IGFkdmFuY2VkIH07XG4gIGlmIChjdiA+PSBub3ZpY2UpIHJldHVybiB7IGxldmVsOiBcIk5vdmljZVwiLCBjb2xvcjogXCIjN2E5YTdkXCIsIHByb2dyZXNzOiAoKGN2IC0gbm92aWNlKSAvIChpbnRlcm1lZGlhdGUgLSBub3ZpY2UpKSAqIDEwMCwgbmV4dFRhcmdldDogaW50ZXJtZWRpYXRlIH07XG4gIGlmIChjdiA+PSBiZWdpbm5lcikgcmV0dXJuIHsgbGV2ZWw6IFwiQmVnaW5uZXJcIiwgY29sb3I6IFwiI2E4OTg2MFwiLCBwcm9ncmVzczogKChjdiAtIGJlZ2lubmVyKSAvIChub3ZpY2UgLSBiZWdpbm5lcikpICogMTAwLCBuZXh0VGFyZ2V0OiBub3ZpY2UgfTtcbiAgcmV0dXJuIHsgbGV2ZWw6IFwiVW50cmFpbmVkXCIsIGNvbG9yOiBcIiM2YTZhNmFcIiwgcHJvZ3Jlc3M6IGJlZ2lubmVyID4gMCA/IE1hdGgubWF4KDAsIChjdiAvIGJlZ2lubmVyKSAqIDEwMCkgOiAwLCBuZXh0VGFyZ2V0OiBiZWdpbm5lciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVTdHJlbmd0aExldmVsKG5hbWUsIHcsIHIsIG1heFIpIHtcbiAgY29uc3Qgc3RkID0gYXdhaXQgZ2V0U3RyZW5ndGhTdGFuZGFyZChuYW1lKTtcbiAgaWYgKCFzdGQgfHwgIXN0ZC5oYXNWYWxpZERhdGEpIHJldHVybiBudWxsO1xuICBjb25zdCBhdmcgPSBhd2FpdCBnZXRBdmVyYWdlZFN0YW5kYXJkcyhzdGQpO1xuICBpZiAoIWF2ZykgcmV0dXJuIG51bGw7XG4gIGlmIChzdGQuaXNCb2R5d2VpZ2h0KSB7XG4gICAgY29uc3QgZWZmID0gbWF4UiAhPT0gbnVsbCAmJiBtYXhSICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChyLCBtYXhSKSA6IHI7XG4gICAgY29uc3QgcmVzID0gZGV0ZXJtaW5lU3RyZW5ndGhMZXZlbChlZmYsIGF2Zyk7XG4gICAgcmV0dXJuIHsgLi4ucmVzLCBjdXJyZW50VmFsdWU6IGVmZiwgaXNCb2R5d2VpZ2h0OiB0cnVlLCB1bml0OiBcInJlcHNcIiwgZGlzcGxheUxhYmVsOiBcIk1heCBSZXBzXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodyA8PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlc3QgPSBjYWxjdWxhdGUxUk0odywgcik7XG4gICAgY29uc3QgcmVzID0gZGV0ZXJtaW5lU3RyZW5ndGhMZXZlbChlc3QsIGF2Zyk7XG4gICAgcmV0dXJuIHsgLi4ucmVzLCBjdXJyZW50VmFsdWU6IGVzdCwgaXNCb2R5d2VpZ2h0OiBmYWxzZSwgdW5pdDogXCJrZ1wiLCBkaXNwbGF5TGFiZWw6IFwiRXN0LiAxUk1cIiB9O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc1N0cmVuZ3RoU3RhbmRhcmQobmFtZSkge1xuICBjb25zdCBzdGQgPSBhd2FpdCBnZXRTdHJlbmd0aFN0YW5kYXJkKG5hbWUpO1xuICByZXR1cm4gc3RkICE9PSBudWxsICYmIHN0ZC5oYXNWYWxpZERhdGE7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gV09SS09VVCBEQVRBIFx1MjAxNCBQUiBsb29rdXAsIHByZXZpb3VzIGV4ZXJjaXNlIGxvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZVBSKG5hbWUpIHtcbiAgY29uc3Qgc3RkID0gYXdhaXQgZ2V0U3RyZW5ndGhTdGFuZGFyZChuYW1lKTtcbiAgY29uc3QgaXNCVyA9IHN0ZD8uaXNCb2R5d2VpZ2h0IHx8IGZhbHNlO1xuICBjb25zdCBmaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gIGxldCBiZXN0ID0gbnVsbCwgYmVzdFYgPSAwO1xuICBmb3IgKGNvbnN0IGYgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YShmLnBhdGgpO1xuICAgIGlmIChmbT8uZXhlcmNpc2VzICYmIEFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSAmJiBmbS5Xb3Jrb3V0ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBleCA9IGZtLmV4ZXJjaXNlcy5maW5kKChlKSA9PiBlLm5hbWUgPT09IG5hbWUpO1xuICAgICAgaWYgKGV4Py5zZXRzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2V0IG9mIGV4LnNldHMpIHtcbiAgICAgICAgICBpZiAoIXNldC5pc1dhcm11cCAmJiBzZXQuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoaXNCVykge1xuICAgICAgICAgICAgICBpZiAoc2V0LnJlcHMgPiBiZXN0VikgeyBiZXN0ViA9IHNldC5yZXBzOyBiZXN0ID0geyAuLi5zZXQsIGRhdGU6IGYuYmFzZW5hbWUsIHByVmFsdWU6IGJlc3RWLCBpc0JvZHl3ZWlnaHQ6IHRydWUgfTsgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZXQud2VpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICBjb25zdCBlc3QgPSBjYWxjdWxhdGUxUk0oc2V0LndlaWdodCwgc2V0LnJlcHMpO1xuICAgICAgICAgICAgICBpZiAoZXN0ID4gYmVzdFYpIHsgYmVzdFYgPSBlc3Q7IGJlc3QgPSB7IC4uLnNldCwgZGF0ZTogZi5iYXNlbmFtZSwgZXN0aW1hdGVkMVJNOiBlc3QsIHByVmFsdWU6IGVzdCwgaXNCb2R5d2VpZ2h0OiBmYWxzZSB9OyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0O1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0V29ya291dEZvck11c2NsZUdyb3VwKG11c2NsZUdyb3VwKSB7XG4gIGNvbnN0IGZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmJhc2VuYW1lLmxvY2FsZUNvbXBhcmUoYS5iYXNlbmFtZSkpO1xuICBmb3IgKGNvbnN0IGYgb2YgZmlsZXMpIHtcbiAgICBpZiAoZi5wYXRoID09PSBmaWxlLnBhdGgpIGNvbnRpbnVlOyAvLyBza2lwIGN1cnJlbnQgbm90ZVxuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKGYucGF0aCk7XG4gICAgaWYgKGZtPy5leGVyY2lzZXMgJiYgQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSB7XG4gICAgICBjb25zdCByZWxldmFudCA9IGZtLmV4ZXJjaXNlcy5maWx0ZXIoZXggPT4gZXgubXVzY2xlID09PSBtdXNjbGVHcm91cCB8fCBleC5tdXNjbGVHcm91cCA9PT0gbXVzY2xlR3JvdXApO1xuICAgICAgaWYgKHJlbGV2YW50Lmxlbmd0aCA+IDApIHJldHVybiB7IGRhdGU6IGYuYmFzZW5hbWUsIGV4ZXJjaXNlczogcmVsZXZhbnQgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcmV2aW91c0V4ZXJjaXNlcyhzZWxlY3RlZE11c2NsZUdyb3Vwcykge1xuICBjb25zdCBleGVyY2lzZXNBcnJheSA9IFtdO1xuICBmb3IgKGNvbnN0IG11c2NsZSBvZiBzZWxlY3RlZE11c2NsZUdyb3Vwcykge1xuICAgIGNvbnN0IGxhc3RXb3Jrb3V0ID0gZ2V0TGFzdFdvcmtvdXRGb3JNdXNjbGVHcm91cChtdXNjbGUpO1xuICAgIGlmIChsYXN0V29ya291dCkge1xuICAgICAgZm9yIChjb25zdCBleCBvZiBsYXN0V29ya291dC5leGVyY2lzZXMpIHtcbiAgICAgICAgZXhlcmNpc2VzQXJyYXkucHVzaCh7XG4gICAgICAgICAgbmFtZTogZXgubmFtZSxcbiAgICAgICAgICBtdXNjbGU6IG11c2NsZSxcbiAgICAgICAgICBtdXNjbGVHcm91cDogbXVzY2xlLFxuICAgICAgICAgIHNldHM6IGV4LnNldHMgPyBleC5zZXRzLm1hcChzID0+ICh7XG4gICAgICAgICAgICB3ZWlnaHQ6IHMud2VpZ2h0IHx8IDAsXG4gICAgICAgICAgICByZXBzOiBzLnJlcHMgfHwgMTAsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNXYXJtdXA6IHMuaXNXYXJtdXAgfHwgZmFsc2VcbiAgICAgICAgICB9KSkgOiBbeyB3ZWlnaHQ6IDAsIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBleGVyY2lzZXNBcnJheTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTQVZFIFNUQVRFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZVN0YXRlKCkge1xuICBhd2FpdCBzZXRNdWx0aXBsZURhdGEoe1xuICAgIGV4ZXJjaXNlczogZXhlcmNpc2VzLFxuICAgIGN1cnJlbnRNdXNjbGVJbmRleDogY3VycmVudE11c2NsZUluZGV4LFxuICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBTWVNURU1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgYWN0aXZlTW9kYWwgPSBudWxsO1xuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBpZiAoIWFjdGl2ZU1vZGFsKSByZXR1cm47XG4gIGFjdGl2ZU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlTW9kYWw/LnBhcmVudE5vZGUpIGFjdGl2ZU1vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWN0aXZlTW9kYWwpO1xuICAgIGFjdGl2ZU1vZGFsID0gbnVsbDtcbiAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWwodGl0bGUsIGNvbnRlbnRCdWlsZGVyKSB7XG4gIGlmIChhY3RpdmVNb2RhbCkgeyBhY3RpdmVNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2ZU1vZGFsKTsgYWN0aXZlTW9kYWwgPSBudWxsOyB9XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NOYW1lID0gXCJvdHctbW9kYWwtb3ZlcmxheVwiO1xuICBhY3RpdmVNb2RhbCA9IG1vZGFsO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gXCJvdHctbW9kYWwtY29udGVudFwiO1xuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICBhZGRDb3JuZXJzKG1vZGFsQ29udGVudCwgVEhFTUUuY29sb3IpO1xuICBpZiAodGl0bGUpIHtcbiAgICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB0LnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjA7Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3BhY2l0eTowLjg7YDtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodCk7XG4gICAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjYwcHg7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZyx0cmFuc3BhcmVudCwke1RIRU1FLmNvbG9yfSx0cmFuc3BhcmVudCk7bWFyZ2luOjAgYXV0byAxMnB4O2A7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGQpO1xuICB9XG4gIGNvbnRlbnRCdWlsZGVyKG1vZGFsQ29udGVudCk7XG4gIG1vZGFsLm9uY2xpY2sgPSAoZSkgPT4geyBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSBjbG9zZU1vZGFsKCk7IH07XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xuICByZXR1cm4gbW9kYWw7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUE9TVC1DT01QTEVUSU9OIE5BVklHQVRJT05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBnZXRSZXR1cm5EZXN0aW5hdGlvbigpIHtcbiAgLy8gTG9vayB1cCB0aGUgY3VycmVudCBhY3Rpdml0eSdzIGNvbmZpZyBmcm9tIHBsdWdpbiBzZXR0aW5nc1xuICBjb25zdCBhY3Rpdml0eUlkID0gZ2V0RGF0YShcImFjdGl2aXR5XCIpO1xuICBjb25zdCBhY3Rpdml0aWVzID0gY3R4LnBsdWdpbj8uc2V0dGluZ3M/LmFjdGl2aXRpZXM7XG4gIGlmIChhY3Rpdml0aWVzICYmIGFjdGl2aXR5SWQpIHtcbiAgICBjb25zdCBhY3RDb25maWcgPSBhY3Rpdml0aWVzLmZpbmQoYSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoYWN0Q29uZmlnPy5jb21wbGV0aW9uUmV0dXJuVG8pIHJldHVybiBhY3RDb25maWcuY29tcGxldGlvblJldHVyblRvO1xuICB9XG4gIHJldHVybiBcImRhc2hib2FyZFwiOyAvLyBkZWZhdWx0XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRlQWZ0ZXJDb21wbGV0aW9uKCkge1xuICBjb25zdCBkZXN0ID0gZ2V0UmV0dXJuRGVzdGluYXRpb24oKTtcbiAgaWYgKGRlc3QgPT09IFwic3RheVwiKSByZXR1cm47IC8vIGRvIG5vdGhpbmcsIHN0YXkgb24gY29tcGxldGlvbiBzdW1tYXJ5XG4gIGlmIChkZXN0ID09PSBcImRhc2hib2FyZFwiKSB7XG4gICAgLy8gVXNlIE9sZW4ncyBidWlsdC1pbiBkYXNoYm9hcmQgYWN0aXZhdGlvblxuICAgIGlmIChjdHgucGx1Z2luPy5hY3RpdmF0ZURhc2hib2FyZFZpZXcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gY3R4LnBsdWdpbi5hY3RpdmF0ZURhc2hib2FyZFZpZXcoKSwgNjAwKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkZXN0ID09PSBcImhvbWVwYWdlXCIpIHtcbiAgICAvLyBPcGVuIHRoZSBnbG9iYWwgaG9tZXBhZ2UgZmlsZSBkZWZpbmVkIGluIFByb2ZpbGUgc2V0dGluZ3NcbiAgICBjb25zdCBob21lcGFnZVBhdGggPSBjdHgucGx1Z2luPy5zZXR0aW5ncz8uaG9tZXBhZ2U7XG4gICAgaWYgKCFob21lcGFnZVBhdGgpIHsgbm90aWNlKFwiTm8gaG9tZXBhZ2Ugc2V0IFx1MjAxNCBnbyB0byBPbGVuIFNldHRpbmdzID4gUHJvZmlsZSB0byBkZWZpbmUgb25lLlwiKTsgcmV0dXJuOyB9XG4gICAgY29uc3QgdGFyZ2V0RmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoaG9tZXBhZ2VQYXRoKTtcbiAgICBpZiAodGFyZ2V0RmlsZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBhcHAud29ya3NwYWNlLmdldExlYWYoZmFsc2UpLm9wZW5GaWxlKHRhcmdldEZpbGUpLCA2MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RpY2UoXCJIb21lcGFnZSBmaWxlIG5vdCBmb3VuZDogXCIgKyBob21lcGFnZVBhdGgpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGSU5JU0ggV09SS09VVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmlzaFdvcmtvdXQodHlwZSkge1xuICBhd2FpdCBzZXRNdWx0aXBsZURhdGEoe1xuICAgIFdvcmtvdXQ6IHRydWUsXG4gICAgXCJXb3Jrb3V0LVR5cGVcIjogdHlwZSxcbiAgICBUaW1lc3RhbXA6IG1vbWVudCgpLmZvcm1hdCgpLFxuICAgIGV4ZXJjaXNlczogZXhlcmNpc2VzLFxuICAgIGN1cnJlbnRNdXNjbGVJbmRleDogY3VycmVudE11c2NsZUluZGV4LFxuICB9KTtcbiAgbm90aWNlKFwiV29ya291dCBsb2dnZWQgYXMgXCIgKyAodHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIgPyBcIkRpc2NpcGxpbmUgV2luXCIgOiBcIkZsb3cgU3RhdGVcIikgKyBcIiFcIik7XG4gIG5hdmlnYXRlQWZ0ZXJDb21wbGV0aW9uKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5GaW5pc2hNb2RhbCgpIHtcbiAgLy8gQnVpbGQgc2Vzc2lvbiBhbmFseXRpY3MgZGF0YVxuICBjb25zdCBzdW1tYXJ5RGF0YSA9IFtdO1xuICBmb3IgKGNvbnN0IGV4IG9mIGV4ZXJjaXNlcykge1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGV4LnNldHMuZmlsdGVyKHMgPT4gIXMuaXNXYXJtdXAgJiYgcy5jb21wbGV0ZWQpO1xuICAgIGlmIChjb21wbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcHIgPSBhd2FpdCBnZXRFeGVyY2lzZVBSKGV4Lm5hbWUpO1xuICAgICAgbGV0IGJlc3RXID0gMCwgYmVzdFIgPSAwLCBtYXhSID0gMCwgc2Vzc2lvbkJlc3QgPSAwO1xuICAgICAgZm9yIChjb25zdCBzIG9mIGNvbXBsZXRlZCkge1xuICAgICAgICBpZiAocy5yZXBzID4gbWF4UikgbWF4UiA9IHMucmVwcztcbiAgICAgICAgaWYgKHMud2VpZ2h0ID4gMCkge1xuICAgICAgICAgIGNvbnN0IGVzdCA9IGNhbGN1bGF0ZTFSTShzLndlaWdodCwgcy5yZXBzKTtcbiAgICAgICAgICBpZiAoZXN0ID4gc2Vzc2lvbkJlc3QpIHsgc2Vzc2lvbkJlc3QgPSBlc3Q7IGJlc3RXID0gcy53ZWlnaHQ7IGJlc3RSID0gcy5yZXBzOyB9XG4gICAgICAgIH0gZWxzZSBpZiAocy5yZXBzID4gc2Vzc2lvbkJlc3QpIHsgc2Vzc2lvbkJlc3QgPSBzLnJlcHM7IGJlc3RSID0gcy5yZXBzOyB9XG4gICAgICB9XG4gICAgICBjb25zdCBzbCA9IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXgubmFtZSwgYmVzdFcsIGJlc3RSLCBtYXhSKTtcbiAgICAgIHN1bW1hcnlEYXRhLnB1c2goeyBuYW1lOiBleC5uYW1lLCBtdXNjbGU6IGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCwgYmVzdFcsIGJlc3RSLCBtYXhSLCBzZXNzaW9uQmVzdCwgc2wsIHByLCBjb21wbGV0ZWRTZXRzOiBjb21wbGV0ZWQubGVuZ3RoLCB0b3RhbFNldHM6IGV4LnNldHMuZmlsdGVyKHMgPT4gIXMuaXNXYXJtdXApLmxlbmd0aCB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVNb2RhbChudWxsLCAoY29udGVudCkgPT4ge1xuICAgIC8vIFNjcm9sbGFibGUgYXJlYVxuICAgIGNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Nyb2xsLnN0eWxlLmNzc1RleHQgPSBcIm92ZXJmbG93LXk6YXV0bztkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxNnB4O2ZsZXg6MTttYXgtaGVpZ2h0Ojcwdmg7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzY3JvbGwpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV09SS09VVCBDT01QTEVURVwiO1xuICAgIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjA7Y29sb3I6JHtUSEVNRS5zeXN0ZW1HcmVlbn07Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LWFsaWduOmNlbnRlcjtgO1xuICAgIHNjcm9sbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBTZXNzaW9uIHN1bW1hcnkgY2FyZHNcbiAgICBpZiAoc3VtbWFyeURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlYy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxMnB4O1wiO1xuICAgICAgc2Nyb2xsLmFwcGVuZENoaWxkKHNlYyk7XG5cbiAgICAgIGNvbnN0IHNlY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlY1RpdGxlLnRleHRDb250ZW50ID0gXCJTRVNTSU9OIFNVTU1BUllcIjtcbiAgICAgIHNlY1RpdGxlLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC1hbGlnbjpjZW50ZXI7YDtcbiAgICAgIHNlYy5hcHBlbmRDaGlsZChzZWNUaXRsZSk7XG5cbiAgICAgIGZvciAoY29uc3QgZXggb2Ygc3VtbWFyeURhdGEpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuc3R5bGUuY3NzVGV4dCA9IGBwYWRkaW5nOjE0cHg7YmFja2dyb3VuZDojMGMwYzBjO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgICAgICAgc2VjLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgICAgIC8vIEV4ZXJjaXNlIG5hbWUgKyBzdHJlbmd0aCBiYWRnZVxuICAgICAgICBjb25zdCBoZHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZHIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjEwcHg7XCI7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGRyKTtcblxuICAgICAgICBjb25zdCBubSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBubS50ZXh0Q29udGVudCA9IGV4Lm5hbWU7XG4gICAgICAgIG5tLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O2A7XG4gICAgICAgIGhkci5hcHBlbmRDaGlsZChubSk7XG5cbiAgICAgICAgaWYgKGV4LnNsKSB7XG4gICAgICAgICAgY29uc3QgbGkgPSBTVFJFTkdUSF9MRVZFTFNbZXguc2wubGV2ZWxdO1xuICAgICAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O3BhZGRpbmc6NHB4IDEwcHg7YmFja2dyb3VuZDoke2V4LnNsLmNvbG9yfTIwO2JvcmRlcjoxcHggc29saWQgJHtleC5zbC5jb2xvcn01MDtjb2xvcjoke2V4LnNsLmNvbG9yfTtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MXB4O2A7XG4gICAgICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSAobGk/Lmljb24gfHwgXCJcXHUyNUNCXCIpICsgXCIgXCIgKyBleC5zbC5sZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGhkci5hcHBlbmRDaGlsZChiYWRnZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZXN0IHNldCArIGVzdGltYXRlZCAxUk1cbiAgICAgICAgY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdGF0cy5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tYm90dG9tOjhweDtmb250LXNpemU6MTJweDtgO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHN0YXRzKTtcblxuICAgICAgICBjb25zdCBzZXRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNldEluZm8udGV4dENvbnRlbnQgPSBleC5zbD8uaXNCb2R5d2VpZ2h0ID8gXCJCZXN0OiBcIiArIGV4Lm1heFIgKyBcIiByZXBzXCIgOiBcIkJlc3Q6IFwiICsgZXguYmVzdFcgKyBcImtnIFxcdTAwRDcgXCIgKyBleC5iZXN0UjtcbiAgICAgICAgc2V0SW5mby5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07YDtcbiAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQoc2V0SW5mbyk7XG5cbiAgICAgICAgaWYgKGV4LnNsKSB7XG4gICAgICAgICAgY29uc3Qgcm1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgcm1JbmZvLnRleHRDb250ZW50ID0gZXguc2wuZGlzcGxheUxhYmVsICsgXCI6IFwiICsgZXguc2wuY3VycmVudFZhbHVlICsgZXguc2wudW5pdDtcbiAgICAgICAgICBybUluZm8uc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXdlaWdodDo2MDA7YDtcbiAgICAgICAgICBzdGF0cy5hcHBlbmRDaGlsZChybUluZm8pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0cyBjb21wbGV0ZWRcbiAgICAgICAgY29uc3Qgc2V0c0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZXRzSW5mby5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZToxMXB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bWFyZ2luLWJvdHRvbTo4cHg7YDtcbiAgICAgICAgc2V0c0luZm8udGV4dENvbnRlbnQgPSBleC5jb21wbGV0ZWRTZXRzICsgXCIvXCIgKyBleC50b3RhbFNldHMgKyBcIiB3b3JraW5nIHNldHMgY29tcGxldGVkXCI7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc2V0c0luZm8pO1xuXG4gICAgICAgIC8vIFBSIGNvbXBhcmlzb25cbiAgICAgICAgaWYgKGV4LnByKSB7XG4gICAgICAgICAgY29uc3QgcHJDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBwckMuc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTFweDttYXJnaW4tYm90dG9tOjhweDtwYWRkaW5nOjZweCA4cHg7YDtcbiAgICAgICAgICBjb25zdCBjdiA9IGV4LnNsPy5jdXJyZW50VmFsdWUgfHwgZXguc2Vzc2lvbkJlc3Q7XG4gICAgICAgICAgaWYgKGN2ID4gZXgucHIucHJWYWx1ZSkge1xuICAgICAgICAgICAgcHJDLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTIyLDE1NCwxMjUsMC4xNSlcIjtcbiAgICAgICAgICAgIHByQy5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjojN2E5YTdkO2ZvbnQtd2VpZ2h0OjcwMDtcIj5cXHVEODNDXFx1REY4OSBORVcgUFIhPC9zcGFuPiA8c3BhbiBzdHlsZT1cImNvbG9yOicgKyBUSEVNRS5jb2xvck11dGVkICsgJztcIj5QcmV2aW91czogJyArIGV4LnByLnByVmFsdWUgKyAnIFxcdTIxOTIgTm93OiAnICsgY3YgKyAnPC9zcGFuPic7XG4gICAgICAgICAgfSBlbHNlIGlmIChjdiA9PT0gZXgucHIucHJWYWx1ZSkge1xuICAgICAgICAgICAgcHJDLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTY4LDE1Miw5NiwwLjEpXCI7XG4gICAgICAgICAgICBwckMuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6I2E4OTg2MDtcIj5cXHVEODNDXFx1REZDNiBNYXRjaGVkIFBSOjwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgVEhFTUUuY29sb3JNdXRlZCArICc7XCI+JyArIGV4LnByLnByVmFsdWUgKyAnPC9zcGFuPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByQy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE2OCwxNTIsOTYsMC4xKVwiO1xuICAgICAgICAgICAgcHJDLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT1cImNvbG9yOicgKyBUSEVNRS5jb2xvck11dGVkICsgJztcIj5cXHVEODNDXFx1REZDNiBQUjogJyArIGV4LnByLnByVmFsdWUgKyAnPC9zcGFuPiA8c3BhbiBzdHlsZT1cImNvbG9yOiM2YTZhNmE7XCI+KHRvZGF5OiAnICsgY3YgKyAnKTwvc3Bhbj4nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByQyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9ncmVzcyBiYXIgdG8gbmV4dCBzdHJlbmd0aCBsZXZlbFxuICAgICAgICBpZiAoZXguc2wgJiYgZXguc2wubmV4dFRhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBwYi5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYXJcIjtcbiAgICAgICAgICBwYi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjhweFwiO1xuICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocGIpO1xuICAgICAgICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGZpbGwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgICAgICAgIGZpbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWluKDEwMCwgZXguc2wucHJvZ3Jlc3MpfSU7YmFja2dyb3VuZDoke2V4LnNsLmNvbG9yfTtgO1xuICAgICAgICAgIHBiLmFwcGVuZENoaWxkKGZpbGwpO1xuICAgICAgICAgIGNvbnN0IHRpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0aS5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtmb250LXNpemU6OXB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bWFyZ2luLXRvcDo0cHg7YDtcbiAgICAgICAgICB0aS5pbm5lckhUTUwgPSBcIjxzcGFuPkN1cnJlbnQ6IFwiICsgZXguc2wuY3VycmVudFZhbHVlICsgZXguc2wudW5pdCArIFwiPC9zcGFuPjxzcGFuPk5leHQ6IFwiICsgTWF0aC5yb3VuZChleC5zbC5uZXh0VGFyZ2V0KSArIGV4LnNsLnVuaXQgKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFwiSG93IGRpZCBpdCBmZWVsP1wiIHNlY3Rpb25cbiAgICBjb25zdCBmZWVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZmVlbFRpdGxlLnRleHRDb250ZW50ID0gXCJIb3cgZGlkIGl0IGZlZWw/XCI7XG4gICAgZmVlbFRpdGxlLnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjhweCAwIDAgMDtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTNweDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO29wYWNpdHk6MC44O2A7XG4gICAgc2Nyb2xsLmFwcGVuZENoaWxkKGZlZWxUaXRsZSk7XG5cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5zLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEwcHg7XCI7XG4gICAgc2Nyb2xsLmFwcGVuZENoaWxkKGJ0bnMpO1xuXG4gICAgLy8gRGlzY2lwbGluZSBidXR0b25cbiAgICBjb25zdCBkaXNjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXNjQnRuLmNsYXNzTmFtZSA9IFwib3R3LWZlZWwtYnRuXCI7XG4gICAgZGlzY0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gYDNweCBzb2xpZCAke1RIRU1FLmNvbG9yRGlzY2lwbGluZX1gO1xuICAgIGRpc2NCdG4uaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7d2lkdGg6NDBweDt0ZXh0LWFsaWduOmNlbnRlcjtcIj5cXHVEODNEXFx1REM4RTwvc3Bhbj48ZGl2IHN0eWxlPVwiZmxleDoxO1wiPjxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yRGlzY2lwbGluZX07Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO2xldHRlci1zcGFjaW5nOjEuNXB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjRweDtcIj5EaXNjaXBsaW5lPC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiM1YTVhNWE7Zm9udC1zaXplOjExcHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+UHVzaGVkIHRocm91Z2ggcmVzaXN0YW5jZTwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojNGE0MDMwO2ZvbnQtc2l6ZToxOHB4O29wYWNpdHk6MC41O1wiPlxcdTIxOTI8L2Rpdj5gO1xuICAgIGRpc2NCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY2xvc2VNb2RhbCgpOyBhd2FpdCBmaW5pc2hXb3Jrb3V0KFwiZGlzY2lwbGluZVwiKTsgfTtcbiAgICBidG5zLmFwcGVuZENoaWxkKGRpc2NCdG4pO1xuXG4gICAgLy8gRmxvdyBidXR0b25cbiAgICBjb25zdCBmbG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmbG93QnRuLmNsYXNzTmFtZSA9IFwib3R3LWZlZWwtYnRuXCI7XG4gICAgZmxvd0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gYDNweCBzb2xpZCAke1RIRU1FLmNvbG9yRmxvd31gO1xuICAgIGZsb3dCdG4uaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7d2lkdGg6NDBweDt0ZXh0LWFsaWduOmNlbnRlcjtcIj5cXHVEODNDXFx1REYwQTwvc3Bhbj48ZGl2IHN0eWxlPVwiZmxleDoxO1wiPjxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yRmxvd307Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO2xldHRlci1zcGFjaW5nOjEuNXB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjRweDtcIj5GbG93PC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiM1YTVhNWE7Zm9udC1zaXplOjExcHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+RmVsdCBuYXR1cmFsIGFuZCBlZmZvcnRsZXNzPC9kaXY+PC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiMzMDQwNTA7Zm9udC1zaXplOjE4cHg7b3BhY2l0eTowLjU7XCI+XFx1MjE5MjwvZGl2PmA7XG4gICAgZmxvd0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjbG9zZU1vZGFsKCk7IGF3YWl0IGZpbmlzaFdvcmtvdXQoXCJmbG93XCIpOyB9O1xuICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZmxvd0J0bik7XG4gIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFERCBFWEVSQ0lTRSBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIG9wZW5BZGRFeGVyY2lzZU1vZGFsKG11c2NsZSkge1xuICBjcmVhdGVNb2RhbChcIkFkZCBFeGVyY2lzZSAtIFwiICsgbXVzY2xlLCAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRXhlcmNpc2UgbmFtZS4uLlwiO1xuICAgIG5hbWVJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjEwMCU7cGFkZGluZzoxMnB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IHdhcm11cExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3YXJtdXBMYWJlbC50ZXh0Q29udGVudCA9IFwiSW5jbHVkZSB3YXJtdXAgc2V0cz9cIjtcbiAgICB3YXJtdXBMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDoxMnB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3YXJtdXBMYWJlbCk7XG5cbiAgICBsZXQgaW5jV2FybXVwID0gdHJ1ZTtcbiAgICBjb25zdCB3YXJtdXBSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdhcm11cFJvdy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7Z2FwOjhweDttYXJnaW4tdG9wOjhweDtcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdhcm11cFJvdyk7XG5cbiAgICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHllc0J0bi50ZXh0Q29udGVudCA9IFwiWWVzIChzdWdnZXN0ZWQpXCI7XG4gICAgeWVzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIHllc0J0bi5zdHlsZS5jc3NUZXh0ICs9IGBmbGV4OjE7YmFja2dyb3VuZDpyZ2JhKDE1NCwxNDAsMTIyLDAuMik7Ym9yZGVyLWNvbG9yOiR7VEhFTUUuY29sb3J9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2A7XG4gICAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5vQnRuLnRleHRDb250ZW50ID0gXCJOb1wiO1xuICAgIG5vQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIG5vQnRuLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgICB5ZXNCdG4ub25jbGljayA9ICgpID0+IHsgaW5jV2FybXVwID0gdHJ1ZTsgeWVzQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTU0LDE0MCwxMjIsMC4yKVwiOyB5ZXNCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvcjsgbm9CdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzBmMGYwZlwiOyBub0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFRIRU1FLmNvbG9yQm9yZGVyOyB9O1xuICAgIG5vQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGluY1dhcm11cCA9IGZhbHNlOyBub0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMilcIjsgbm9CdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvcjsgeWVzQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwZjBmMGZcIjsgeWVzQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3JCb3JkZXI7IH07XG4gICAgd2FybXVwUm93LmFwcGVuZENoaWxkKHllc0J0bik7XG4gICAgd2FybXVwUm93LmFwcGVuZENoaWxkKG5vQnRuKTtcblxuICAgIGNvbnN0IHdlaWdodExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWlnaHRMYWJlbC50ZXh0Q29udGVudCA9IFwiV29ya2luZyB3ZWlnaHQgKGtnKSAtIDAgZm9yIGJvZHl3ZWlnaHRcIjtcbiAgICB3ZWlnaHRMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDoxMnB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWlnaHRMYWJlbCk7XG5cbiAgICBjb25zdCB3ZWlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB3ZWlnaHRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICB3ZWlnaHRJbnB1dC5wbGFjZWhvbGRlciA9IFwiMFwiO1xuICAgIHdlaWdodElucHV0LnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MTAwJTtwYWRkaW5nOjEycHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi10b3A6OHB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWlnaHRJbnB1dCk7XG5cbiAgICBjb25zdCBidG5Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0blJvdy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7Z2FwOjEycHg7bWFyZ2luLXRvcDoxNnB4O1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuUm93KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gICAgY2FuY2VsQnRuLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IGNsb3NlTW9kYWwoKTtcbiAgICBidG5Sb3cuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgRXhlcmNpc2VcIjtcbiAgICBhZGRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICAgIGFkZEJ0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgYWRkQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghbmFtZSkgeyBub3RpY2UoXCJQbGVhc2UgZW50ZXIgYW4gZXhlcmNpc2UgbmFtZVwiKTsgcmV0dXJuOyB9XG4gICAgICBjb25zdCB3dyA9IHBhcnNlRmxvYXQod2VpZ2h0SW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBjb25zdCBzZXRzID0gW107XG4gICAgICBpZiAoaW5jV2FybXVwICYmIHd3ID4gMCkge1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjUpLCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IHRydWUgfSk7XG4gICAgICAgIHNldHMucHVzaCh7IHdlaWdodDogTWF0aC5yb3VuZCh3dyAqIDAuNyksIHJlcHM6IDYsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjg1KSwgcmVwczogMywgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IHd3LCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiB3dywgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICAgIHNldHMucHVzaCh7IHdlaWdodDogd3csIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgICBleGVyY2lzZXMucHVzaCh7IG5hbWUsIG11c2NsZSwgbXVzY2xlR3JvdXA6IG11c2NsZSwgc2V0cyB9KTtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICAgICAgcmVuZGVyKCk7XG4gICAgfTtcbiAgICBidG5Sb3cuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gbmFtZUlucHV0LmZvY3VzKCksIDEwMCk7XG4gIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFTkRFUjogU0VUIFJPV1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHJlbmRlclNldChzZXRzQ29udGFpbmVyLCBzZXQsIHNldElkeCwgZXgsIHdhcm11cFJlZnMpIHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93LmNsYXNzTmFtZSA9IFwib3R3LXNldC1yb3dcIiArIChzZXQuY29tcGxldGVkID8gXCIgY29tcGxldGVkXCIgOiBcIlwiKTtcbiAgc2V0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICBjb25zdCByZWZzID0geyB3ZWlnaHRJbnB1dDogbnVsbCB9O1xuXG4gIC8vIENoZWNrYm94XG4gIGNvbnN0IGNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2IuY2xhc3NOYW1lID0gXCJvdHctY2hlY2tib3hcIiArIChzZXQuY29tcGxldGVkID8gXCIgY2hlY2tlZFwiIDogXCJcIik7XG4gIGNiLnRleHRDb250ZW50ID0gc2V0LmNvbXBsZXRlZCA/IFwiXFx1MjcxM1wiIDogXCJcIjtcbiAgY2Iub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBzZXQuY29tcGxldGVkID0gIXNldC5jb21wbGV0ZWQ7XG4gICAgY2IuY2xhc3NOYW1lID0gXCJvdHctY2hlY2tib3hcIiArIChzZXQuY29tcGxldGVkID8gXCIgY2hlY2tlZFwiIDogXCJcIik7XG4gICAgY2IudGV4dENvbnRlbnQgPSBzZXQuY29tcGxldGVkID8gXCJcXHUyNzEzXCIgOiBcIlwiO1xuICAgIHJvdy5jbGFzc05hbWUgPSBcIm90dy1zZXQtcm93XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNvbXBsZXRlZFwiIDogXCJcIik7XG4gICAgYXdhaXQgc2F2ZVN0YXRlKCk7XG4gIH07XG4gIHJvdy5hcHBlbmRDaGlsZChjYik7XG5cbiAgLy8gTWlkZGxlOiB3ZWlnaHQgKyByZXBzXG4gIGNvbnN0IG1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pZC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O2ZsZXgtd3JhcDp3cmFwO1wiO1xuICByb3cuYXBwZW5kQ2hpbGQobWlkKTtcblxuICAvLyBXZWlnaHQgaW5wdXRcbiAgY29uc3Qgd1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3V3JhcC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo0cHg7XCI7XG4gIG1pZC5hcHBlbmRDaGlsZCh3V3JhcCk7XG4gIGNvbnN0IHdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgd0lucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICB3SW5wdXQudmFsdWUgPSBzZXQud2VpZ2h0O1xuICB3SW5wdXQuY2xhc3NOYW1lID0gXCJvdHctaW5wdXRcIjtcbiAgY29uc3QgZmlyc3RXID0gZ2V0Rmlyc3RXb3JraW5nU2V0SW5kZXgoZXguc2V0cyk7XG4gIGNvbnN0IGlzRmlyc3QgPSAhc2V0LmlzV2FybXVwICYmIHNldElkeCA9PT0gZmlyc3RXO1xuICB3SW5wdXQub25jaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IG53ID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgfHwgMDtcbiAgICBzZXQud2VpZ2h0ID0gbnc7XG4gICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgIHVwZGF0ZVdhcm11cFdlaWdodHMoZXgsIG53KTtcbiAgICAgIGNvbnN0IHdzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+IHMuaXNXYXJtdXApO1xuICAgICAgd2FybXVwUmVmcy5mb3JFYWNoKChpbnAsIGkpID0+IHsgaWYgKHdzW2ldKSBpbnAudmFsdWUgPSB3c1tpXS53ZWlnaHQ7IH0pO1xuICAgIH1cbiAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgfTtcbiAgd1dyYXAuYXBwZW5kQ2hpbGQod0lucHV0KTtcbiAgcmVmcy53ZWlnaHRJbnB1dCA9IHdJbnB1dDtcbiAgY29uc3Qga2dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrZ0xhYmVsLnRleHRDb250ZW50ID0gXCJrZ1wiO1xuICBrZ0xhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTJweDtgO1xuICB3V3JhcC5hcHBlbmRDaGlsZChrZ0xhYmVsKTtcblxuICAvLyBSZXBzIGNvbnRyb2xzXG4gIGNvbnN0IHJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcldyYXAuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O1wiO1xuICBtaWQuYXBwZW5kQ2hpbGQocldyYXApO1xuICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1pbnVzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWN0cmwtYnRuXCI7XG4gIG1pbnVzQnRuLnRleHRDb250ZW50ID0gXCJcXHUyMjEyXCI7XG4gIG1pbnVzQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGlmIChzZXQucmVwcyA+IDEpIHsgc2V0LnJlcHMtLTsgckRpc3AudGV4dENvbnRlbnQgPSBzZXQucmVwcyArIFwiXFx1MDBEN1wiOyBhd2FpdCBzYXZlU3RhdGUoKTsgfSB9O1xuICByV3JhcC5hcHBlbmRDaGlsZChtaW51c0J0bik7XG4gIGNvbnN0IHJEaXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHJEaXNwLnRleHRDb250ZW50ID0gc2V0LnJlcHMgKyBcIlxcdTAwRDdcIjtcbiAgckRpc3Auc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7bWluLXdpZHRoOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7YDtcbiAgcldyYXAuYXBwZW5kQ2hpbGQockRpc3ApO1xuICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGx1c0J0bi5jbGFzc05hbWUgPSBcIm90dy1jdHJsLWJ0blwiO1xuICBwbHVzQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIHBsdXNCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgc2V0LnJlcHMrKzsgckRpc3AudGV4dENvbnRlbnQgPSBzZXQucmVwcyArIFwiXFx1MDBEN1wiOyBhd2FpdCBzYXZlU3RhdGUoKTsgfTtcbiAgcldyYXAuYXBwZW5kQ2hpbGQocGx1c0J0bik7XG5cbiAgaWYgKHNldC5pc1dhcm11cCkge1xuICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYmFkZ2UuY2xhc3NOYW1lID0gXCJvdHctd2FybXVwLWJhZGdlXCI7XG4gICAgYmFkZ2UudGV4dENvbnRlbnQgPSBcIlxcdTI2QTEgV2FybXVwXCI7XG4gICAgbWlkLmFwcGVuZENoaWxkKGJhZGdlKTtcbiAgfVxuXG4gIC8vIERlbGV0ZSBzZXQgYnV0dG9uXG4gIGlmIChleC5zZXRzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1MDBEN1wiO1xuICAgIGRlbEJ0bi5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MXB4IHNvbGlkICMzYTI4Mjg7Y29sb3I6IzZhNGE0YTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTZweDtgO1xuICAgIGRlbEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBleC5zZXRzLnNwbGljZShzZXRJZHgsIDEpOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH07XG4gICAgcm93LmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBoLnN0eWxlLndpZHRoID0gXCIyOHB4XCI7XG4gICAgcm93LmFwcGVuZENoaWxkKHBoKTtcbiAgfVxuXG4gIHJldHVybiByZWZzO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFTkRFUjogRVhFUkNJU0UgQ0FSRFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckV4ZXJjaXNlKGV4Q29udGFpbmVyLCBleCkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZC5jbGFzc05hbWUgPSBcIm90dy1jYXJkXCI7XG4gIGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICBhZGRDb3JuZXJzKGNhcmQsIFRIRU1FLmNvbG9yLCAxMik7XG5cbiAgY29uc3QgZXhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBleEhlYWRlci5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O21hcmdpbi1ib3R0b206MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoZXhIZWFkZXIpO1xuXG4gIGNvbnN0IGxlZnRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0Q29sLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgZXhIZWFkZXIuYXBwZW5kQ2hpbGQobGVmdENvbCk7XG5cbiAgY29uc3QgZXhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZXhUaXRsZS50ZXh0Q29udGVudCA9IGV4Lm5hbWU7XG4gIGV4VGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBtYXJnaW46MCAwIDhweCAwO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNnB4O2xldHRlci1zcGFjaW5nOjFweDtgO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKGV4VGl0bGUpO1xuXG4gIC8vIFN0cmVuZ3RoIGxldmVsICsgUFIgaW5mb1xuICBjb25zdCBoYXNTdGQgPSBhd2FpdCBoYXNTdHJlbmd0aFN0YW5kYXJkKGV4Lm5hbWUpO1xuICBjb25zdCBwciA9IGF3YWl0IGdldEV4ZXJjaXNlUFIoZXgubmFtZSk7XG4gIGNvbnN0IHdvcmtpbmdTZXRzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+ICFzLmlzV2FybXVwKTtcbiAgbGV0IGJlc3RXID0gMCwgYmVzdFIgPSAwLCBtYXhSID0gMDtcbiAgd29ya2luZ1NldHMuZm9yRWFjaCgocykgPT4geyBpZiAocy5yZXBzID4gbWF4UikgbWF4UiA9IHMucmVwczsgaWYgKHMud2VpZ2h0ID4gYmVzdFcgfHwgKHMud2VpZ2h0ID09PSBiZXN0VyAmJiBzLnJlcHMgPiBiZXN0UikpIHsgYmVzdFcgPSBzLndlaWdodDsgYmVzdFIgPSBzLnJlcHM7IH0gfSk7XG5cbiAgaWYgKGhhc1N0ZCkge1xuICAgIGxldCBzbDtcbiAgICBpZiAocHIpIHsgc2wgPSBwci5pc0JvZHl3ZWlnaHQgPyBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIDAsIHByLnByVmFsdWUsIHByLnByVmFsdWUpIDogYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCBwci53ZWlnaHQsIHByLnJlcHMsIG51bGwpOyB9XG4gICAgZWxzZSBpZiAoYmVzdFcgPiAwIHx8IG1heFIgPiAwKSB7IHNsID0gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCBiZXN0VywgYmVzdFIsIG1heFIpOyB9XG4gICAgaWYgKHNsKSB7XG4gICAgICBjb25zdCBsaSA9IFNUUkVOR1RIX0xFVkVMU1tzbC5sZXZlbF07XG4gICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiYWRnZS5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYWRnZVwiO1xuICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCArPSBgYmFja2dyb3VuZDoke3NsLmNvbG9yfTI1O2JvcmRlcjoxcHggc29saWQgJHtzbC5jb2xvcn02MDtjb2xvcjoke3NsLmNvbG9yfTtgO1xuICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSAobGk/Lmljb24gfHwgXCJcXHUyNUNCXCIpICsgXCIgXCIgKyBzbC5sZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgbGVmdENvbC5hcHBlbmRDaGlsZChiYWRnZSk7XG5cbiAgICAgIGNvbnN0IHJtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBybUluZm8uc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTFweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbi10b3A6NnB4O2A7XG4gICAgICBybUluZm8uaW5uZXJIVE1MID0gYDxzdHJvbmcgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yfVwiPiR7c2wuZGlzcGxheUxhYmVsfTogJHtzbC5jdXJyZW50VmFsdWV9JHtzbC51bml0fTwvc3Ryb25nPmA7XG4gICAgICBpZiAoc2wubmV4dFRhcmdldCkgcm1JbmZvLmlubmVySFRNTCArPSBgIFxcdTIxOTIgTmV4dDogJHtNYXRoLnJvdW5kKHNsLm5leHRUYXJnZXQpfSR7c2wudW5pdH1gO1xuICAgICAgbGVmdENvbC5hcHBlbmRDaGlsZChybUluZm8pO1xuXG4gICAgICBjb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwYi5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYXJcIjtcbiAgICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQocGIpO1xuICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmaWxsLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWZpbGxcIjtcbiAgICAgIGZpbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWluKDEwMCwgc2wucHJvZ3Jlc3MpfSU7YmFja2dyb3VuZDoke3NsLmNvbG9yfTtgO1xuICAgICAgcGIuYXBwZW5kQ2hpbGQoZmlsbCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByKSB7XG4gICAgY29uc3QgcHJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByQm94LmNsYXNzTmFtZSA9IFwib3R3LXByLWJveFwiO1xuICAgIGNvbnN0IHByVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByVGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOjExcHg7Y29sb3I6I2E4OTg2MDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MXB4O1wiO1xuICAgIHByVGl0bGUudGV4dENvbnRlbnQgPSBwci5pc0JvZHl3ZWlnaHQgPyBcIlxcdUQ4M0NcXHVERkM2IEFMTC1USU1FIFBSOiBcIiArIHByLnByVmFsdWUgKyBcIiByZXBzXCIgOiBcIlxcdUQ4M0NcXHVERkM2IEFMTC1USU1FIFBSOiBcIiArIHByLmVzdGltYXRlZDFSTSArIFwia2cgKDFSTSlcIjtcbiAgICBwckJveC5hcHBlbmRDaGlsZChwclRpdGxlKTtcbiAgICBjb25zdCBwckRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJEZXRhaWwuc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTBweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2A7XG4gICAgcHJEZXRhaWwudGV4dENvbnRlbnQgPSBwci5pc0JvZHl3ZWlnaHQgPyBcIkJlc3Q6IFwiICsgcHIucmVwcyArIFwiIHJlcHNcIiA6IFwiU2V0OiBcIiArIHByLndlaWdodCArIFwia2cgXFx1MDBENyBcIiArIHByLnJlcHMgKyBcIiByZXBzXCI7XG4gICAgcHJCb3guYXBwZW5kQ2hpbGQocHJEZXRhaWwpO1xuICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQocHJCb3gpO1xuICB9XG5cbiAgLy8gRGVsZXRlIGV4ZXJjaXNlIGJ1dHRvblxuICBjb25zdCBkZWxFeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbEV4QnRuLnRleHRDb250ZW50ID0gXCJcXHVEODNEXFx1REREMVxcdUZFMEZcIjtcbiAgZGVsRXhCdG4uc3R5bGUuY3NzVGV4dCA9IFwiYmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTRweDtvcGFjaXR5OjAuNTtcIjtcbiAgZGVsRXhCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY29uc3QgaWR4ID0gZXhlcmNpc2VzLmluZGV4T2YoZXgpOyBpZiAoaWR4ID4gLTEpIHsgZXhlcmNpc2VzLnNwbGljZShpZHgsIDEpOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH0gfTtcbiAgZXhIZWFkZXIuYXBwZW5kQ2hpbGQoZGVsRXhCdG4pO1xuXG4gIC8vIFNldHNcbiAgY29uc3Qgc2V0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHNDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6NnB4O1wiO1xuICBjYXJkLmFwcGVuZENoaWxkKHNldHNDb250YWluZXIpO1xuICBjb25zdCB3YXJtdXBSZWZzID0gW107XG4gIGV4LnNldHMuZm9yRWFjaCgoc2V0LCBzZXRJZHgpID0+IHtcbiAgICBjb25zdCByZWZzID0gcmVuZGVyU2V0KHNldHNDb250YWluZXIsIHNldCwgc2V0SWR4LCBleCwgd2FybXVwUmVmcyk7XG4gICAgaWYgKHNldC5pc1dhcm11cCAmJiByZWZzLndlaWdodElucHV0KSB3YXJtdXBSZWZzLnB1c2gocmVmcy53ZWlnaHRJbnB1dCk7XG4gIH0pO1xuXG4gIC8vIEFkZCBzZXQgYnV0dG9uXG4gIGNvbnN0IGFkZFNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFNldEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgU2V0XCI7XG4gIGFkZFNldEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1kYXNoZWRcIjtcbiAgYWRkU2V0QnRuLnN0eWxlLmNzc1RleHQgKz0gXCJtYXJnaW4tdG9wOjhweDtwYWRkaW5nOjhweCAxMnB4O2ZvbnQtc2l6ZToxMnB4O1wiO1xuICBhZGRTZXRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsYXN0ID0gZXguc2V0c1tleC5zZXRzLmxlbmd0aCAtIDFdIHx8IHsgd2VpZ2h0OiAwLCByZXBzOiAxMCB9O1xuICAgIGV4LnNldHMucHVzaCh7IHdlaWdodDogbGFzdC53ZWlnaHQsIHJlcHM6IGxhc3QucmVwcywgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICAgIHJlbmRlcigpO1xuICB9O1xuICBjYXJkLmFwcGVuZENoaWxkKGFkZFNldEJ0bik7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU1RBVElTVElDUyAmIEhFQVRNQVAgREFUQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE1hcCBtdXNjbGUvc3ViZ3JvdXAgbmFtZXMgXHUyMTkyIGJvZHkgcmVnaW9ucyBmb3IgdGhlIGhlYXRtYXBcbmNvbnN0IE1VU0NMRV9UT19SRUdJT04gPSB7XG4gIE5lY2s6IFtcIm5lY2tcIl0sIENoZXN0OiBbXCJjaGVzdFwiXSwgQ29yZTogW1wiY29yZVwiXSxcbiAgQmFjazogW1wibGF0c1wiLCBcInRyYXBzXCIsIFwibG93ZXJfYmFja1wiXSwgTGF0czogW1wibGF0c1wiXSwgVHJhcHM6IFtcInRyYXBzXCJdLFxuICBSaG9tYm9pZHM6IFtcInRyYXBzXCJdLCBcIkxvd2VyIEJhY2tcIjogW1wibG93ZXJfYmFja1wiXSwgXCJSZWFyIERlbHRzXCI6IFtcInJlYXJfZGVsdHNcIl0sXG4gIFNob3VsZGVyczogW1wiZnJvbnRfZGVsdHNcIiwgXCJyZWFyX2RlbHRzXCJdLCBcIkZyb250IERlbHRzXCI6IFtcImZyb250X2RlbHRzXCJdLFxuICBcIlNpZGUgRGVsdHNcIjogW1wiZnJvbnRfZGVsdHNcIl0sXG4gIExlZ3M6IFtcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiXSwgUXVhZHM6IFtcInF1YWRzXCJdLFxuICBIYW1zdHJpbmdzOiBbXCJoYW1zdHJpbmdzXCJdLCBHbHV0ZXM6IFtcImdsdXRlc1wiXSwgQ2FsdmVzOiBbXCJjYWx2ZXNcIl0sXG4gIEFkZHVjdG9yczogW1wicXVhZHNcIl0sXG4gIEFybXM6IFtcImJpY2Vwc1wiLCBcInRyaWNlcHNcIiwgXCJmb3JlYXJtc1wiXSwgQmljZXBzOiBbXCJiaWNlcHNcIl0sXG4gIFRyaWNlcHM6IFtcInRyaWNlcHNcIl0sIEZvcmVhcm1zOiBbXCJmb3JlYXJtc1wiXSxcbn07XG5cbmZ1bmN0aW9uIGdldFdlZWtseUNhbGVuZGFyRGF0YSgpIHtcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoKS5zdGFydE9mKFwiZGF5XCIpO1xuICBjb25zdCB3ZWVrU3RhcnQgPSB0b2RheS5jbG9uZSgpLnN0YXJ0T2YoXCJpc29XZWVrXCIpO1xuICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gIGNvbnN0IGRheXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCBkYXkgPSB3ZWVrU3RhcnQuY2xvbmUoKS5hZGQoaSwgXCJkYXlzXCIpO1xuICAgIGNvbnN0IGRheVN0ciA9IGRheS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIGNvbnN0IGlzVG9kYXkgPSBkYXkuaXNTYW1lKHRvZGF5LCBcImRheVwiKTtcbiAgICBjb25zdCBpc1Bhc3QgPSBkYXkuaXNCZWZvcmUodG9kYXksIFwiZGF5XCIpO1xuICAgIGxldCBzdGF0dXMgPSBudWxsLCB0eXBlID0gbnVsbDtcbiAgICBmb3IgKGNvbnN0IHdGaWxlIG9mIGFsbEZpbGVzKSB7XG4gICAgICBpZiAod0ZpbGUuYmFzZW5hbWUgPT09IGRheVN0cikge1xuICAgICAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICAgICAgaWYgKGZtICYmIGZtLldvcmtvdXQgPT09IHRydWUpIHsgc3RhdHVzID0gXCJkb25lXCI7IHR5cGUgPSBmbVtcIldvcmtvdXQtVHlwZVwiXSB8fCBcImRvbmVcIjsgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZGF5cy5wdXNoKHsgbGFiZWw6IGRheS5mb3JtYXQoXCJkZFwiKVswXSwgbnVtOiBkYXkuZm9ybWF0KFwiRFwiKSwgaXNUb2RheSwgaXNQYXN0LCBzdGF0dXMsIHR5cGUgfSk7XG4gIH1cbiAgcmV0dXJuIGRheXM7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRobHlTdGF0cygpIHtcbiAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0ID0gbm93LmNsb25lKCkuc3RhcnRPZihcImlzb1dlZWtcIik7XG4gIGNvbnN0IG1vbnRoU3RhcnQgPSBub3cuY2xvbmUoKS5zdGFydE9mKFwibW9udGhcIik7XG4gIGxldCB0aGlzV2VlayA9IDAsIHRoaXNNb250aCA9IDAsIHRvdGFsID0gMCwgdG90YWxTZXRzID0gMCwgdG90YWxWb2x1bWUgPSAwO1xuICBmb3IgKGNvbnN0IHdGaWxlIG9mIGFsbEZpbGVzKSB7XG4gICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlKSBjb250aW51ZTtcbiAgICB0b3RhbCsrO1xuICAgIGNvbnN0IGRhdGVNYXRjaCA9IHdGaWxlLmJhc2VuYW1lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS8pO1xuICAgIGlmICghZGF0ZU1hdGNoKSBjb250aW51ZTtcbiAgICBjb25zdCBmaWxlRGF0ZSA9IG1vbWVudChkYXRlTWF0Y2hbMV0sIFwiWVlZWS1NTS1ERFwiKTtcbiAgICBpZiAoZmlsZURhdGUuaXNTYW1lT3JBZnRlcih3ZWVrU3RhcnQpKSB0aGlzV2VlaysrO1xuICAgIGlmIChmaWxlRGF0ZS5pc1NhbWVPckFmdGVyKG1vbnRoU3RhcnQpKSB0aGlzTW9udGgrKztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGV4IG9mIGZtLmV4ZXJjaXNlcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXguc2V0cykpIGNvbnRpbnVlO1xuICAgICAgICBmb3IgKGNvbnN0IHMgb2YgZXguc2V0cykge1xuICAgICAgICAgIGlmIChzLmNvbXBsZXRlZCAmJiAhcy5pc1dhcm11cCkgeyB0b3RhbFNldHMrKzsgdG90YWxWb2x1bWUgKz0gKHMud2VpZ2h0IHx8IDApICogKHMucmVwcyB8fCAwKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRoaXNXZWVrLCB0aGlzTW9udGgsIHRvdGFsLCB0b3RhbFNldHMsIHRvdGFsVm9sdW1lIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlY2VudFNlc3Npb25zKGxpbWl0KSB7XG4gIGxpbWl0ID0gbGltaXQgfHwgNDtcbiAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBjb25zdCBzb3J0ZWQgPSBhbGxGaWxlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGIuYmFzZW5hbWUubG9jYWxlQ29tcGFyZShhLmJhc2VuYW1lKTsgfSk7XG4gIGNvbnN0IHNlc3Npb25zID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNlc3Npb25zLmxlbmd0aCA+PSBsaW1pdCkgYnJlYWs7XG4gICAgdmFyIHdGaWxlID0gc29ydGVkW2ldO1xuICAgIGlmICh3RmlsZS5wYXRoID09PSBmaWxlLnBhdGgpIGNvbnRpbnVlO1xuICAgIHZhciBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICBpZiAoIWZtIHx8IGZtLldvcmtvdXQgIT09IHRydWUpIGNvbnRpbnVlO1xuICAgIHZhciBkYXRlTWF0Y2ggPSB3RmlsZS5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKTtcbiAgICBzZXNzaW9ucy5wdXNoKHtcbiAgICAgIGRhdGU6IGRhdGVNYXRjaCA/IGRhdGVNYXRjaFsxXSA6IHdGaWxlLmJhc2VuYW1lLFxuICAgICAgdHlwZTogZm1bXCJXb3Jrb3V0LVR5cGVcIl0gfHwgXCJkb25lXCIsXG4gICAgICBtdXNjbGVzOiBmbS5tdXNjbGVHcm91cHMgfHwgW10sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNlc3Npb25zO1xufVxuXG4vLyBCdWlsZCBzdHJlbmd0aCBsZXZlbCBkYXRhIHBlciBib2R5IHJlZ2lvbiBmcm9tIEFMTCBjb21wbGV0ZWQgd29ya291dHNcbmFzeW5jIGZ1bmN0aW9uIGdldE11c2NsZUxldmVsRGF0YSgpIHtcbiAgY29uc3QgZXhlcmNpc2VCZXN0ID0ge307IC8vIGV4ZXJjaXNlTmFtZSBcdTIxOTIgeyB3ZWlnaHQsIHJlcHMsIG1heFJlcHMsIG11c2NsZSB9XG4gIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgIGlmICh3RmlsZS5wYXRoID09PSBmaWxlLnBhdGgpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSB8fCAhQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSBjb250aW51ZTtcbiAgICBmb3IgKGNvbnN0IGV4IG9mIGZtLmV4ZXJjaXNlcykge1xuICAgICAgY29uc3QgZG9uZSA9IChleC5zZXRzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocykgeyByZXR1cm4gcy5jb21wbGV0ZWQgJiYgIXMuaXNXYXJtdXA7IH0pO1xuICAgICAgaWYgKGRvbmUubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgIGxldCBiZXN0VyA9IDAsIGJlc3RSID0gMCwgbWF4UiA9IDA7XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgZG9uZSkge1xuICAgICAgICBpZiAocy5yZXBzID4gbWF4UikgbWF4UiA9IHMucmVwcztcbiAgICAgICAgaWYgKHMud2VpZ2h0ID4gYmVzdFcgfHwgKHMud2VpZ2h0ID09PSBiZXN0VyAmJiBzLnJlcHMgPiBiZXN0UikpIHsgYmVzdFcgPSBzLndlaWdodDsgYmVzdFIgPSBzLnJlcHM7IH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gZXhlcmNpc2VCZXN0W2V4Lm5hbWVdO1xuICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICBleGVyY2lzZUJlc3RbZXgubmFtZV0gPSB7IHdlaWdodDogYmVzdFcsIHJlcHM6IGJlc3RSLCBtYXhSZXBzOiBtYXhSLCBtdXNjbGU6IGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsID0gZXhpc3Rpbmcud2VpZ2h0ID4gMCA/IGNhbGN1bGF0ZTFSTShleGlzdGluZy53ZWlnaHQsIGV4aXN0aW5nLnJlcHMpIDogZXhpc3RpbmcubWF4UmVwcztcbiAgICAgICAgY29uc3QgbmV3VmFsID0gYmVzdFcgPiAwID8gY2FsY3VsYXRlMVJNKGJlc3RXLCBiZXN0UikgOiBtYXhSO1xuICAgICAgICBpZiAobmV3VmFsID4gb2xkVmFsKSBleGVyY2lzZUJlc3RbZXgubmFtZV0gPSB7IHdlaWdodDogYmVzdFcsIHJlcHM6IGJlc3RSLCBtYXhSZXBzOiBtYXhSLCBtdXNjbGU6IGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBDYWxjdWxhdGUgc3RyZW5ndGggbGV2ZWwgcGVyIGV4ZXJjaXNlLCBtYXAgdG8gYm9keSByZWdpb25zXG4gIGNvbnN0IHJlZ2lvbkVudHJpZXMgPSB7fTtcbiAgZm9yIChjb25zdCBbZXhOYW1lLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhleGVyY2lzZUJlc3QpKSB7XG4gICAgY29uc3Qgc2wgPSBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4TmFtZSwgZGF0YS53ZWlnaHQsIGRhdGEucmVwcywgZGF0YS5tYXhSZXBzKTtcbiAgICBpZiAoIXNsKSBjb250aW51ZTtcbiAgICBjb25zdCByZWdpb25zID0gTVVTQ0xFX1RPX1JFR0lPTltkYXRhLm11c2NsZV0gfHwgW107XG4gICAgZm9yIChjb25zdCByZWdpb24gb2YgcmVnaW9ucykge1xuICAgICAgaWYgKCFyZWdpb25FbnRyaWVzW3JlZ2lvbl0pIHJlZ2lvbkVudHJpZXNbcmVnaW9uXSA9IFtdO1xuICAgICAgcmVnaW9uRW50cmllc1tyZWdpb25dLnB1c2goeyBsZXZlbDogc2wubGV2ZWwsIGNvbG9yOiBzbC5jb2xvciwgcHJvZ3Jlc3M6IHNsLnByb2dyZXNzIH0pO1xuICAgIH1cbiAgfVxuICAvLyBQaWNrIHRoZSBiZXN0IHN0cmVuZ3RoIGxldmVsIHBlciByZWdpb25cbiAgY29uc3QgbGV2ZWxPcmRlciA9IFtcIlVudHJhaW5lZFwiLCBcIkJlZ2lubmVyXCIsIFwiTm92aWNlXCIsIFwiSW50ZXJtZWRpYXRlXCIsIFwiQWR2YW5jZWRcIiwgXCJFbGl0ZVwiXTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoY29uc3QgW3JlZ2lvbiwgZW50cmllc10gb2YgT2JqZWN0LmVudHJpZXMocmVnaW9uRW50cmllcykpIHtcbiAgICBsZXQgYmVzdCA9IGVudHJpZXNbMF0sIGJlc3RJZHggPSBsZXZlbE9yZGVyLmluZGV4T2YoZW50cmllc1swXS5sZXZlbCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZHggPSBsZXZlbE9yZGVyLmluZGV4T2YoZW50cmllc1tpXS5sZXZlbCk7XG4gICAgICBpZiAoaWR4ID4gYmVzdElkeCkgeyBiZXN0SWR4ID0gaWR4OyBiZXN0ID0gZW50cmllc1tpXTsgfVxuICAgIH1cbiAgICByZXN1bHRbcmVnaW9uXSA9IGJlc3Q7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT0RZIEhFQVRNQVAgU1ZHIFx1MjAxNCBJbnRlcmFjdGl2ZSB3aXRoIGNsaWNrLXRvLXNob3ctcHJvZ3Jlc3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCBSRUdJT05fTEFCRUxTID0ge1xuICBuZWNrOiBcIk5lY2tcIiwgY2hlc3Q6IFwiQ2hlc3RcIiwgZnJvbnRfZGVsdHM6IFwiRnJvbnQgRGVsdHNcIiwgcmVhcl9kZWx0czogXCJSZWFyIERlbHRzXCIsXG4gIGJpY2VwczogXCJCaWNlcHNcIiwgdHJpY2VwczogXCJUcmljZXBzXCIsIGZvcmVhcm1zOiBcIkZvcmVhcm1zXCIsIGNvcmU6IFwiQ29yZVwiLFxuICBxdWFkczogXCJRdWFkc1wiLCBjYWx2ZXM6IFwiQ2FsdmVzXCIsIHRyYXBzOiBcIlRyYXBzXCIsIGxhdHM6IFwiTGF0c1wiLFxuICBsb3dlcl9iYWNrOiBcIkxvd2VyIEJhY2tcIiwgZ2x1dGVzOiBcIkdsdXRlc1wiLCBoYW1zdHJpbmdzOiBcIkhhbXN0cmluZ3NcIixcbn07XG5cbi8vIFx1MjUwMFx1MjUwMCBSZW5kZXIgcGVyLW11c2NsZSBzdHJlbmd0aCBncmlkIChyZXBsYWNlcyBib2R5IGZpZ3VyZSkgXHUyNTAwXHUyNTAwXG5cbmZ1bmN0aW9uIHJlbmRlck11c2NsZVN0cmVuZ3RoR3JpZChwYXJlbnQsIGdyb3VwU3RyZW5ndGgsIG11c2NsZUxldmVscykge1xuICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZ3JpZC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo2cHg7bWFyZ2luOjE0cHggMCA4cHg7XCI7XG5cbiAgZm9yIChjb25zdCBbZ3JvdXAsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKGdyb3VwU3RyZW5ndGgpKSB7XG4gICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByb3cuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMHB4O3BhZGRpbmc6MTBweCAxMnB4O2JhY2tncm91bmQ6cmdiYSgxMiwxMCwxNiwwLjQpO2JvcmRlcjoxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjA2KTtib3JkZXItcmFkaXVzOjEwcHg7Y3Vyc29yOnBvaW50ZXI7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgMC4xNXM7YDtcbiAgICByb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4geyByb3cuc3R5bGUuYm9yZGVyQ29sb3IgPSBcInJnYmEoMTU0LDE0MCwxMjIsMC4xOClcIjsgfSk7XG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHsgcm93LnN0eWxlLmJvcmRlckNvbG9yID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMDYpXCI7IH0pO1xuXG4gICAgLy8gTXVzY2xlIGdyb3VwIGljb24gKyBuYW1lXG4gICAgY29uc3QgaWNvbiA9IE1VU0NMRV9HUk9VUFNbZ3JvdXBdPy5pY29uIHx8IFwiXFx1MjVDQlwiO1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYWJlbC5zdHlsZS5jc3NUZXh0ID0gXCJtaW4td2lkdGg6OTBweDtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo2MDA7bGV0dGVyLXNwYWNpbmc6MXB4O2NvbG9yOiM2YTVhNGE7XCI7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBpY29uICsgXCIgXCIgKyBncm91cC50b1VwcGVyQ2FzZSgpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAvLyBQcm9ncmVzcyBiYXJcbiAgICBjb25zdCBiYXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiYXJXcmFwLnN0eWxlLmNzc1RleHQgPSBcImZsZXg6MTtoZWlnaHQ6NnB4O2JhY2tncm91bmQ6cmdiYSgyNTUsMjU1LDI1NSwwLjA0KTtib3JkZXItcmFkaXVzOjNweDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246cmVsYXRpdmU7XCI7XG5cbiAgICAvLyBUb3RhbCBwcm9ncmVzcyBhY3Jvc3MgYWxsIGxldmVscyAoMC0xMDAgbWFwcyB0byBVbnRyYWluZWRcdTIxOTJFbGl0ZSlcbiAgICBjb25zdCB0b3RhbFByb2dyZXNzID0gKExFVkVMX09SREVSLmluZGV4T2YoZGF0YS5sZXZlbCkgLyA1KSAqIDEwMCArIChkYXRhLnByb2dyZXNzIHx8IDApICogKDEvNSk7XG4gICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmlsbC5zdHlsZS5jc3NUZXh0ID0gYGhlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6M3B4O3RyYW5zaXRpb246d2lkdGggMC42cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpO3dpZHRoOiR7TWF0aC5taW4oMTAwLCBNYXRoLm1heCgyLCB0b3RhbFByb2dyZXNzKSl9JTtiYWNrZ3JvdW5kOiR7ZGF0YS5sZXZlbCA9PT0gXCJVbnRyYWluZWRcIiA/IFwiIzNhMzQyYVwiIDogZGF0YS5jb2xvcn07YDtcbiAgICBiYXJXcmFwLmFwcGVuZENoaWxkKGZpbGwpO1xuICAgIHJvdy5hcHBlbmRDaGlsZChiYXJXcmFwKTtcblxuICAgIC8vIFN0cmVuZ3RoIGxldmVsIGJhZGdlXG4gICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJhZGdlLnN0eWxlLmNzc1RleHQgPSBgZm9udC1zaXplOjhweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MS41cHg7Y29sb3I6JHtkYXRhLmxldmVsID09PSBcIlVudHJhaW5lZFwiID8gXCIjM2EzNDJhXCIgOiBkYXRhLmNvbG9yfTttaW4td2lkdGg6NjRweDt0ZXh0LWFsaWduOnJpZ2h0O2A7XG4gICAgYmFkZ2UudGV4dENvbnRlbnQgPSBkYXRhLmxldmVsID09PSBcIlVudHJhaW5lZFwiID8gXCJcdTIwMTRcIiA6IGRhdGEubGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuXG4gICAgLy8gQ2xpY2sgXHUyMTkyIHNob3cgcGVyLXJlZ2lvbiBicmVha2Rvd24gcG9wdXAgZm9yIHRoaXMgbXVzY2xlIGdyb3VwXG4gICAgcm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBzaG93TXVzY2xlR3JvdXBQb3B1cChncm91cCwgZGF0YSwgbXVzY2xlTGV2ZWxzKTtcbiAgICB9KTtcblxuICAgIGdyaWQuYXBwZW5kQ2hpbGQocm93KTtcbiAgfVxuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChncmlkKTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFBvcHVwIGZvciBhIHNwZWNpZmljIG11c2NsZSBncm91cCBzaG93aW5nIHBlci1yZWdpb24gYnJlYWtkb3duIFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiBzaG93TXVzY2xlR3JvdXBQb3B1cChncm91cCwgZ3JvdXBEYXRhLCBtdXNjbGVMZXZlbHMpIHtcbiAgY29uc3QgcmVnaW9ucyA9IE1VU0NMRV9HUk9VUF9SRUdJT05TW2dyb3VwXSB8fCBbXTtcbiAgY3JlYXRlTW9kYWwoZ3JvdXAudG9VcHBlckNhc2UoKSwgKGNvbnRlbnQpID0+IHtcbiAgICAvLyBPdmVyYWxsIGdyb3VwIHN0cmVuZ3RoIGJhZGdlXG4gICAgY29uc3QgbGkgPSBTVFJFTkdUSF9MRVZFTFNbZ3JvdXBEYXRhLmxldmVsXTtcbiAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFkZ2UuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFkZ2VcIjtcbiAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQ6JHtncm91cERhdGEuY29sb3J9MjU7Ym9yZGVyOjFweCBzb2xpZCAke2dyb3VwRGF0YS5jb2xvcn02MDtjb2xvcjoke2dyb3VwRGF0YS5jb2xvcn07bWFyZ2luOjhweCBhdXRvO2Rpc3BsYXk6aW5saW5lLWZsZXg7YDtcbiAgICBiYWRnZS50ZXh0Q29udGVudCA9IChsaT8uaWNvbiB8fCBcIlxcdTI1Q0JcIikgKyBcIiBcIiArIGdyb3VwRGF0YS5sZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuXG4gICAgLy8gUHJvZ3Jlc3MgYmFyXG4gICAgY29uc3QgdG90YWxQcm9ncmVzcyA9IChMRVZFTF9PUkRFUi5pbmRleE9mKGdyb3VwRGF0YS5sZXZlbCkgLyA1KSAqIDEwMCArIChncm91cERhdGEucHJvZ3Jlc3MgfHwgMCkgKiAoMS81KTtcbiAgICBjb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGIuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFyXCI7XG4gICAgcGIuc3R5bGUubWFyZ2luVG9wID0gXCIxMnB4XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYik7XG4gICAgY29uc3QgZmlsbEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWxsRWwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgIGZpbGxFbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7TWF0aC5taW4oMTAwLCB0b3RhbFByb2dyZXNzKX0lO2JhY2tncm91bmQ6JHtncm91cERhdGEuY29sb3J9O2A7XG4gICAgcGIuYXBwZW5kQ2hpbGQoZmlsbEVsKTtcblxuICAgIC8vIFBlci1yZWdpb24gYnJlYWtkb3duXG4gICAgaWYgKHJlZ2lvbnMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3ViTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3ViTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZTo5cHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOjE4cHg7bWFyZ2luLWJvdHRvbTo4cHg7YDtcbiAgICAgIHN1YkxhYmVsLnRleHRDb250ZW50ID0gXCJSRUdJT04gQlJFQUtET1dOXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHN1YkxhYmVsKTtcblxuICAgICAgZm9yIChjb25zdCByZWdpb24gb2YgcmVnaW9ucykge1xuICAgICAgICBjb25zdCByRGF0YSA9IG11c2NsZUxldmVsc1tyZWdpb25dO1xuICAgICAgICBjb25zdCByTGFiZWwgPSBSRUdJT05fTEFCRUxTW3JlZ2lvbl0gfHwgcmVnaW9uO1xuXG4gICAgICAgIGNvbnN0IHJSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByUm93LnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6OHB4O3BhZGRpbmc6OHB4IDEwcHg7bWFyZ2luLWJvdHRvbTo0cHg7YmFja2dyb3VuZDpyZ2JhKDEyLDEwLDE2LDAuNCk7Ym9yZGVyOjFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDYpO2JvcmRlci1yYWRpdXM6OHB4O2A7XG5cbiAgICAgICAgY29uc3Qgck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByTmFtZS5zdHlsZS5jc3NUZXh0ID0gYG1pbi13aWR0aDo4MHB4O2ZvbnQtc2l6ZToxMHB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bGV0dGVyLXNwYWNpbmc6MXB4O2A7XG4gICAgICAgIHJOYW1lLnRleHRDb250ZW50ID0gckxhYmVsO1xuICAgICAgICByUm93LmFwcGVuZENoaWxkKHJOYW1lKTtcblxuICAgICAgICBjb25zdCByQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgckJhci5zdHlsZS5jc3NUZXh0ID0gXCJmbGV4OjE7aGVpZ2h0OjRweDtiYWNrZ3JvdW5kOnJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7Ym9yZGVyLXJhZGl1czoycHg7b3ZlcmZsb3c6aGlkZGVuO1wiO1xuICAgICAgICBpZiAockRhdGEpIHtcbiAgICAgICAgICBjb25zdCByUHJvZ3Jlc3MgPSAoTEVWRUxfT1JERVIuaW5kZXhPZihyRGF0YS5sZXZlbCkgLyA1KSAqIDEwMCArIChyRGF0YS5wcm9ncmVzcyB8fCAwKSAqICgxLzUpO1xuICAgICAgICAgIGNvbnN0IHJGaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICByRmlsbC5zdHlsZS5jc3NUZXh0ID0gYGhlaWdodDoxMDAlO2JvcmRlci1yYWRpdXM6MnB4O3dpZHRoOiR7TWF0aC5taW4oMTAwLCBNYXRoLm1heCgyLCByUHJvZ3Jlc3MpKX0lO2JhY2tncm91bmQ6JHtyRGF0YS5jb2xvcn07YDtcbiAgICAgICAgICByQmFyLmFwcGVuZENoaWxkKHJGaWxsKTtcbiAgICAgICAgfVxuICAgICAgICByUm93LmFwcGVuZENoaWxkKHJCYXIpO1xuXG4gICAgICAgIGNvbnN0IHJCYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJCYWRnZS5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZTo4cHg7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjFweDttaW4td2lkdGg6NTVweDt0ZXh0LWFsaWduOnJpZ2h0O2NvbG9yOiR7ckRhdGEgPyByRGF0YS5jb2xvciA6IFwiIzNhMzQyYVwifTtgO1xuICAgICAgICByQmFkZ2UudGV4dENvbnRlbnQgPSByRGF0YSA/IHJEYXRhLmxldmVsLnRvVXBwZXJDYXNlKCkgOiBcIlx1MjAxNFwiO1xuICAgICAgICByUm93LmFwcGVuZENoaWxkKHJCYWRnZSk7XG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChyUm93KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNb250aGx5IHdvcmtvdXQgZnJlcXVlbmN5IGNoYXJ0IGZvciB0aGlzIG11c2NsZSBncm91cFxuICAgIGNvbnN0IGNoYXJ0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoYXJ0TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMHB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoyMHB4O2A7XG4gICAgY2hhcnRMYWJlbC50ZXh0Q29udGVudCA9IFwiTU9OVEhMWSBGUkVRVUVOQ1lcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNoYXJ0TGFiZWwpO1xuXG4gICAgY29uc3QgdGFyZ2V0TXVzY2xlcyA9IFtdO1xuICAgIGZvciAoY29uc3QgW211c2NsZSwgcmVnaW9uTGlzdF0gb2YgT2JqZWN0LmVudHJpZXMoTVVTQ0xFX1RPX1JFR0lPTikpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByZWdpb25MaXN0KSB7XG4gICAgICAgIGlmIChyZWdpb25zLmluY2x1ZGVzKHIpICYmICF0YXJnZXRNdXNjbGVzLmluY2x1ZGVzKG11c2NsZSkpIHRhcmdldE11c2NsZXMucHVzaChtdXNjbGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICBjb25zdCB3ZWVrQ291bnRzID0gWzAsIDAsIDAsIDBdO1xuICAgIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlIHx8ICFBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgICBjb25zdCBkYXlzQWdvID0gbm93LmRpZmYobW9tZW50KGRhdGVNYXRjaFsxXSwgXCJZWVlZLU1NLUREXCIpLCBcImRheXNcIik7XG4gICAgICBpZiAoZGF5c0FnbyA8IDAgfHwgZGF5c0FnbyA+IDI4KSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGhhc011c2NsZSA9IGZtLmV4ZXJjaXNlcy5zb21lKGV4ID0+IHRhcmdldE11c2NsZXMuaW5jbHVkZXMoZXgubXVzY2xlIHx8IGV4Lm11c2NsZUdyb3VwKSk7XG4gICAgICBpZiAoaGFzTXVzY2xlKSB7XG4gICAgICAgIGNvbnN0IHdlZWtJZHggPSBNYXRoLmZsb29yKGRheXNBZ28gLyA3KTtcbiAgICAgICAgaWYgKHdlZWtJZHggPCA0KSB3ZWVrQ291bnRzWzMgLSB3ZWVrSWR4XSsrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlckxpbmVDaGFydChjb250ZW50LCBbXCJXMVwiLCBcIlcyXCIsIFwiVzNcIiwgXCJXNFwiXSwgd2Vla0NvdW50cyk7XG4gIH0pO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgT3ZlcmFsbCBQcm9ncmVzcyBQb3B1cCAoYm90aCBvdmVyYWxsICsgcGVyLW11c2NsZSkgXHUyNTAwXHUyNTAwXG5cbmFzeW5jIGZ1bmN0aW9uIHNob3dPdmVyYWxsUHJvZ3Jlc3NQb3B1cChtdXNjbGVMZXZlbHMpIHtcbiAgY3JlYXRlTW9kYWwoXCJTVFJFTkdUSCBQUk9HUkVTU1wiLCAoY29udGVudCkgPT4ge1xuICAgIC8vIDEpIE92ZXJhbGwgc3RyZW5ndGggdHJlbmQgXHUyMDE0IGF2ZXJhZ2Ugc3RyZW5ndGggbGV2ZWwgYWNyb3NzIGFsbCByZWdpb25zXG4gICAgY29uc3Qgb3ZlckxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVyTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMHB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbTo4cHg7YDtcbiAgICBvdmVyTGFiZWwudGV4dENvbnRlbnQgPSBcIk9WRVJBTEwgU1RSRU5HVEhcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG92ZXJMYWJlbCk7XG5cbiAgICAvLyBTdW1tYXJpemUgY3VycmVudCBzdHJlbmd0aCBsZXZlbHNcbiAgICBjb25zdCBsZXZlbE9yZGVyID0gW1wiVW50cmFpbmVkXCIsIFwiQmVnaW5uZXJcIiwgXCJOb3ZpY2VcIiwgXCJJbnRlcm1lZGlhdGVcIiwgXCJBZHZhbmNlZFwiLCBcIkVsaXRlXCJdO1xuICAgIGNvbnN0IHJlZ2lvbkxldmVscyA9IE9iamVjdC5lbnRyaWVzKG11c2NsZUxldmVscyk7XG4gICAgaWYgKHJlZ2lvbkxldmVscy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IG5vRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBub0RhdGEuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtc3R5bGU6aXRhbGljO3BhZGRpbmc6MTJweDtgO1xuICAgICAgbm9EYXRhLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZSBzb21lIHdvcmtvdXRzIHRvIHNlZSB5b3VyIHN0cmVuZ3RoIHByb2dyZXNzXCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5vRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEF2ZXJhZ2UgcHJvZ3Jlc3MgdmFsdWVcbiAgICAgIGxldCB0b3RhbFByb2dyZXNzID0gMDtcbiAgICAgIGZvciAoY29uc3QgWywgZGF0YV0gb2YgcmVnaW9uTGV2ZWxzKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGxldmVsT3JkZXIuaW5kZXhPZihkYXRhLmxldmVsKTtcbiAgICAgICAgdG90YWxQcm9ncmVzcyArPSAoaWR4IC8gNSkgKiAxMDAgKyAoZGF0YS5wcm9ncmVzcyB8fCAwKSAqICgxLzUpO1xuICAgICAgfVxuICAgICAgY29uc3QgYXZnUHJvZ3Jlc3MgPSB0b3RhbFByb2dyZXNzIC8gcmVnaW9uTGV2ZWxzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGF2Z0xldmVsSWR4ID0gTWF0aC5taW4oNSwgTWF0aC5mbG9vcihhdmdQcm9ncmVzcyAvIDIwKSk7XG4gICAgICBjb25zdCBhdmdMZXZlbCA9IGxldmVsT3JkZXJbYXZnTGV2ZWxJZHhdO1xuICAgICAgY29uc3QgYXZnQ29sb3IgPSBTVFJFTkdUSF9MRVZFTFNbYXZnTGV2ZWxdPy5jb2xvciB8fCBcIiM2YTZhNmFcIjtcblxuICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYmFkZ2UuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFkZ2VcIjtcbiAgICAgIGJhZGdlLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZDoke2F2Z0NvbG9yfTI1O2JvcmRlcjoxcHggc29saWQgJHthdmdDb2xvcn02MDtjb2xvcjoke2F2Z0NvbG9yfTttYXJnaW46MCBhdXRvIDEycHg7ZGlzcGxheTppbmxpbmUtZmxleDtgO1xuICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSBhdmdMZXZlbC50b1VwcGVyQ2FzZSgpICsgXCIgKGF2ZylcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuXG4gICAgICBjb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwYi5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYXJcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGIpO1xuICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmaWxsLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWZpbGxcIjtcbiAgICAgIGZpbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWluKDEwMCwgYXZnUHJvZ3Jlc3MpfSU7YmFja2dyb3VuZDoke2F2Z0NvbG9yfTtgO1xuICAgICAgcGIuYXBwZW5kQ2hpbGQoZmlsbCk7XG4gICAgfVxuXG4gICAgLy8gTW9udGhseSBjb21wbGV0aW9ucyBjaGFydCAoYWxsIHdvcmtvdXRzKVxuICAgIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICBjb25zdCB3ZWVrQ291bnRzID0gWzAsIDAsIDAsIDBdO1xuICAgIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGRhdGVNYXRjaCA9IHdGaWxlLmJhc2VuYW1lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS8pO1xuICAgICAgaWYgKCFkYXRlTWF0Y2gpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZGF5c0FnbyA9IG5vdy5kaWZmKG1vbWVudChkYXRlTWF0Y2hbMV0sIFwiWVlZWS1NTS1ERFwiKSwgXCJkYXlzXCIpO1xuICAgICAgaWYgKGRheXNBZ28gPCAwIHx8IGRheXNBZ28gPiAyOCkgY29udGludWU7XG4gICAgICBjb25zdCB3ZWVrSWR4ID0gTWF0aC5mbG9vcihkYXlzQWdvIC8gNyk7XG4gICAgICBpZiAod2Vla0lkeCA8IDQpIHdlZWtDb3VudHNbMyAtIHdlZWtJZHhdKys7XG4gICAgfVxuXG4gICAgLy8gQ2hhcnQgMTogT3ZlcmFsbCBzdHJlbmd0aCBjdXJ2ZSAod29ya291dHMgcGVyIHdlZWsgYXMgYSB0cmVuZClcbiAgICBjb25zdCBjMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjMUxhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTBweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi10b3A6MTZweDtgO1xuICAgIGMxTGFiZWwudGV4dENvbnRlbnQgPSBcIk9WRVJBTEwgU1RSRU5HVEhcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGMxTGFiZWwpO1xuICAgIHJlbmRlckxpbmVDaGFydChjb250ZW50LCBbXCJXMVwiLCBcIlcyXCIsIFwiVzNcIiwgXCJXNFwiXSwgd2Vla0NvdW50cywgVEhFTUUuY29sb3IpO1xuXG4gICAgLy8gQ2hhcnQgMjogUGVyLW11c2NsZSBtdWx0aS1saW5lIGJyZWFrZG93blxuICAgIGNvbnN0IG11c0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtdXNMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEwcHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tdG9wOjIwcHg7YDtcbiAgICBtdXNMYWJlbC50ZXh0Q29udGVudCA9IFwiQlkgTVVTQ0xFIEdST1VQXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtdXNMYWJlbCk7XG5cbiAgICAvLyBCdWlsZCBwZXItbXVzY2xlIHdvcmtvdXQgZnJlcXVlbmN5IGRhdGEgKGxhc3QgNCB3ZWVrcylcbiAgICBjb25zdCBtdXNjbGVDb2xvcnMgPSBbXCIjOWE4YzdhXCIsIFwiI2E4OTg2MFwiLCBcIiM3YTlhN2RcIiwgXCIjNmE4YTlhXCIsIFwiIzhhN2E5YVwiLCBcIiM5YTZhN2FcIiwgXCIjNmE1YTRhXCJdO1xuICAgIGNvbnN0IG11c2NsZVNlcmllc0RhdGEgPSBbXTtcbiAgICBsZXQgY29sb3JJZHggPSAwO1xuICAgIGNvbnN0IHJldmVyc2VNYXBBbGwgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFttdXNjbGUsIHJlZ2lvbnNdIG9mIE9iamVjdC5lbnRyaWVzKE1VU0NMRV9UT19SRUdJT04pKSB7XG4gICAgICBmb3IgKGNvbnN0IHIgb2YgcmVnaW9ucykge1xuICAgICAgICBpZiAoIXJldmVyc2VNYXBBbGxbcl0pIHJldmVyc2VNYXBBbGxbcl0gPSBbXTtcbiAgICAgICAgcmV2ZXJzZU1hcEFsbFtyXS5wdXNoKG11c2NsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbcmVnaW9uLCBkYXRhXSBvZiByZWdpb25MZXZlbHMpIHtcbiAgICAgIGNvbnN0IHRhcmdldE11c2NsZXMgPSByZXZlcnNlTWFwQWxsW3JlZ2lvbl0gfHwgW107XG4gICAgICBjb25zdCB3a0NvdW50cyA9IFswLCAwLCAwLCAwXTtcbiAgICAgIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICAgICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSB8fCAhQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgICAgIGlmICghZGF0ZU1hdGNoKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgZGF5c0FnbyA9IG5vdy5kaWZmKG1vbWVudChkYXRlTWF0Y2hbMV0sIFwiWVlZWS1NTS1ERFwiKSwgXCJkYXlzXCIpO1xuICAgICAgICBpZiAoZGF5c0FnbyA8IDAgfHwgZGF5c0FnbyA+IDI4KSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgaGFzTXVzY2xlID0gZm0uZXhlcmNpc2VzLnNvbWUoZXggPT4gdGFyZ2V0TXVzY2xlcy5pbmNsdWRlcyhleC5tdXNjbGUgfHwgZXgubXVzY2xlR3JvdXApKTtcbiAgICAgICAgaWYgKGhhc011c2NsZSkge1xuICAgICAgICAgIGNvbnN0IHdlZWtJZHggPSBNYXRoLmZsb29yKGRheXNBZ28gLyA3KTtcbiAgICAgICAgICBpZiAod2Vla0lkeCA8IDQpIHdrQ291bnRzWzMgLSB3ZWVrSWR4XSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBtdXNjbGVTZXJpZXNEYXRhLnB1c2goe1xuICAgICAgICBuYW1lOiBSRUdJT05fTEFCRUxTW3JlZ2lvbl0gfHwgcmVnaW9uLFxuICAgICAgICB2YWx1ZXM6IHdrQ291bnRzLFxuICAgICAgICBjb2xvcjogbXVzY2xlQ29sb3JzW2NvbG9ySWR4ICUgbXVzY2xlQ29sb3JzLmxlbmd0aF0sXG4gICAgICB9KTtcbiAgICAgIGNvbG9ySWR4Kys7XG4gICAgfVxuXG4gICAgaWYgKG11c2NsZVNlcmllc0RhdGEubGVuZ3RoID4gMCkge1xuICAgICAgcmVuZGVyTXVsdGlMaW5lQ2hhcnQoY29udGVudCwgW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl0sIG11c2NsZVNlcmllc0RhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub0RhdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgbm9EYXRhLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTJweDtmb250LXN0eWxlOml0YWxpYztwYWRkaW5nOjEycHg7YDtcbiAgICAgIG5vRGF0YS50ZXh0Q29udGVudCA9IFwiQ29tcGxldGUgc29tZSB3b3Jrb3V0cyB0byBzZWUgcGVyLW11c2NsZSB0cmVuZHNcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9EYXRhKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgTGluZSBjaGFydCBoZWxwZXIgKHVzZWQgaW4gcHJvZ3Jlc3MgcG9wdXBzIFx1MjAxNCBzbW9vdGggY3VydmUpIFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiByZW5kZXJMaW5lQ2hhcnQocGFyZW50LCBsYWJlbHMsIHZhbHVlcywgY29sb3IpIHtcbiAgY29sb3IgPSBjb2xvciB8fCBUSEVNRS5jb2xvcjtcbiAgY29uc3QgbWF4VmFsID0gTWF0aC5tYXgoLi4udmFsdWVzLCAxKTtcbiAgY29uc3QgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIGNvbnN0IHcgPSAyNjAsIGggPSA4MDtcbiAgY29uc3QgcGFkTCA9IDQsIHBhZFIgPSA0LCBwYWRUID0gOCwgcGFkQiA9IDE2O1xuICBjb25zdCBjaGFydFcgPSB3IC0gcGFkTCAtIHBhZFI7XG4gIGNvbnN0IGNoYXJ0SCA9IGggLSBwYWRUIC0gcGFkQjtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7d30gJHtofWApO1xuICBzdmcuc3R5bGUuY3NzVGV4dCA9IFwid2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrO21hcmdpbjo4cHggMDtcIjtcblxuICAvLyBHcmlkIGxpbmVzXG4gIGZvciAobGV0IGcgPSAwOyBnIDw9IDI7IGcrKykge1xuICAgIGNvbnN0IGd5ID0gcGFkVCArIChnIC8gMikgKiBjaGFydEg7XG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJsaW5lXCIpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieDFcIiwgU3RyaW5nKHBhZEwpKTsgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBTdHJpbmcodyAtIHBhZFIpKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkxXCIsIFN0cmluZyhneSkpOyBsaW5lLnNldEF0dHJpYnV0ZShcInkyXCIsIFN0cmluZyhneSkpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwicmdiYSgxNTQsMTQwLDEyMiwwLjA4KVwiKTsgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIwLjVcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxpbmUpO1xuICB9XG5cbiAgLy8gQnVpbGQgcG9pbnRzXG4gIGNvbnN0IHBvaW50cyA9IHZhbHVlcy5tYXAoKHYsIGkpID0+IHtcbiAgICBjb25zdCB4ID0gcGFkTCArIChpIC8gTWF0aC5tYXgoMSwgdmFsdWVzLmxlbmd0aCAtIDEpKSAqIGNoYXJ0VztcbiAgICBjb25zdCB5ID0gcGFkVCArIGNoYXJ0SCAtICh2IC8gbWF4VmFsKSAqIGNoYXJ0SDtcbiAgICByZXR1cm4geyB4LCB5IH07XG4gIH0pO1xuXG4gIC8vIFNtb290aCBjdXJ2ZSAoQ2F0bXVsbC1Sb20gXHUyMTkyIGN1YmljIGJlemllcilcbiAgaWYgKHBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgbGV0IGQgPSBgTSAke3BvaW50c1swXS54fSAke3BvaW50c1swXS55fWA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICBjb25zdCBwMCA9IHBvaW50c1tNYXRoLm1heCgwLCBpIC0gMSldO1xuICAgICAgY29uc3QgcDEgPSBwb2ludHNbaV07XG4gICAgICBjb25zdCBwMiA9IHBvaW50c1tpICsgMV07XG4gICAgICBjb25zdCBwMyA9IHBvaW50c1tNYXRoLm1pbihwb2ludHMubGVuZ3RoIC0gMSwgaSArIDIpXTtcbiAgICAgIGNvbnN0IGNwMXggPSBwMS54ICsgKHAyLnggLSBwMC54KSAvIDY7XG4gICAgICBjb25zdCBjcDF5ID0gcDEueSArIChwMi55IC0gcDAueSkgLyA2O1xuICAgICAgY29uc3QgY3AyeCA9IHAyLnggLSAocDMueCAtIHAxLngpIC8gNjtcbiAgICAgIGNvbnN0IGNwMnkgPSBwMi55IC0gKHAzLnkgLSBwMS55KSAvIDY7XG4gICAgICBkICs9IGAgQyAke2NwMXh9ICR7Y3AxeX0sICR7Y3AyeH0gJHtjcDJ5fSwgJHtwMi54fSAke3AyLnl9YDtcbiAgICB9XG5cbiAgICAvLyBBcmVhIGZpbGxcbiAgICBjb25zdCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInBhdGhcIik7XG4gICAgY29uc3QgYXJlYUQgPSBkICsgYCBMICR7cG9pbnRzW3BvaW50cy5sZW5ndGgtMV0ueH0gJHtwYWRUICsgY2hhcnRIfSBMICR7cG9pbnRzWzBdLnh9ICR7cGFkVCArIGNoYXJ0SH0gWmA7XG4gICAgYXJlYS5zZXRBdHRyaWJ1dGUoXCJkXCIsIGFyZWFEKTtcbiAgICBhcmVhLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgY29sb3IpOyBhcmVhLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgXCIwLjA4XCIpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChhcmVhKTtcblxuICAgIC8vIEN1cnZlIGxpbmVcbiAgICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInBhdGhcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIGQpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgY29sb3IpOyBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICB9XG5cbiAgLy8gRGF0YSBkb3RzXG4gIGZvciAoY29uc3QgcHQgb2YgcG9pbnRzKSB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImNpcmNsZVwiKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKFwiY3hcIiwgU3RyaW5nKHB0LngpKTsgZG90LnNldEF0dHJpYnV0ZShcImN5XCIsIFN0cmluZyhwdC55KSk7XG4gICAgZG90LnNldEF0dHJpYnV0ZShcInJcIiwgXCIyLjVcIik7IGRvdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGNvbG9yKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfVxuXG4gIC8vIFgtYXhpcyBsYWJlbHNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB4ID0gcGFkTCArIChpIC8gTWF0aC5tYXgoMSwgbGFiZWxzLmxlbmd0aCAtIDEpKSAqIGNoYXJ0VztcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpOyB0eHQuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoaCAtIDIpKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG4gICAgdHh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDE1NCwxNDAsMTIyLDAuNClcIik7IHR4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgXCI3XCIpO1xuICAgIHR4dC50ZXh0Q29udGVudCA9IGxhYmVsc1tpXTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQodHh0KTtcbiAgfVxuXG4gIHBhcmVudC5hcHBlbmRDaGlsZChzdmcpO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgTXVsdGktbGluZSBjaGFydCBoZWxwZXIgKGZvciBwZXItbXVzY2xlIGJyZWFrZG93bikgXHUyNTAwXHUyNTAwXG5cbmZ1bmN0aW9uIHJlbmRlck11bHRpTGluZUNoYXJ0KHBhcmVudCwgbGFiZWxzLCBzZXJpZXMpIHtcbiAgY29uc3QgYWxsVmFscyA9IHNlcmllcy5mbGF0TWFwKHMgPT4gcy52YWx1ZXMpO1xuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi5hbGxWYWxzLCAxKTtcbiAgY29uc3QgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIGNvbnN0IHcgPSAyNjAsIGggPSA5MDtcbiAgY29uc3QgcGFkTCA9IDQsIHBhZFIgPSA0LCBwYWRUID0gOCwgcGFkQiA9IDE2O1xuICBjb25zdCBjaGFydFcgPSB3IC0gcGFkTCAtIHBhZFI7XG4gIGNvbnN0IGNoYXJ0SCA9IGggLSBwYWRUIC0gcGFkQjtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7d30gJHtofWApO1xuICBzdmcuc3R5bGUuY3NzVGV4dCA9IFwid2lkdGg6MTAwJTtoZWlnaHQ6YXV0bztkaXNwbGF5OmJsb2NrO21hcmdpbjo4cHggMDtcIjtcblxuICBmb3IgKGNvbnN0IHMgb2Ygc2VyaWVzKSB7XG4gICAgY29uc3QgcG9pbnRzID0gcy52YWx1ZXMubWFwKCh2LCBpKSA9PiAoe1xuICAgICAgeDogcGFkTCArIChpIC8gTWF0aC5tYXgoMSwgcy52YWx1ZXMubGVuZ3RoIC0gMSkpICogY2hhcnRXLFxuICAgICAgeTogcGFkVCArIGNoYXJ0SCAtICh2IC8gbWF4VmFsKSAqIGNoYXJ0SCxcbiAgICB9KSk7XG4gICAgaWYgKHBvaW50cy5sZW5ndGggPiAxKSB7XG4gICAgICBsZXQgZCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9YDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICBjb25zdCBwMCA9IHBvaW50c1tNYXRoLm1heCgwLCBpIC0gMSldO1xuICAgICAgICBjb25zdCBwMSA9IHBvaW50c1tpXTtcbiAgICAgICAgY29uc3QgcDIgPSBwb2ludHNbaSArIDFdO1xuICAgICAgICBjb25zdCBwMyA9IHBvaW50c1tNYXRoLm1pbihwb2ludHMubGVuZ3RoIC0gMSwgaSArIDIpXTtcbiAgICAgICAgZCArPSBgIEMgJHtwMS54KyhwMi54LXAwLngpLzZ9ICR7cDEueSsocDIueS1wMC55KS82fSwgJHtwMi54LShwMy54LXAxLngpLzZ9ICR7cDIueS0ocDMueS1wMS55KS82fSwgJHtwMi54fSAke3AyLnl9YDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicGF0aFwiKTtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBkKTsgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIHMuY29sb3IpOyBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuMlwiKTtcbiAgICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTsgcGF0aC5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIFwiMC44XCIpO1xuICAgICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFgtYXhpcyBsYWJlbHNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB4ID0gcGFkTCArIChpIC8gTWF0aC5tYXgoMSwgbGFiZWxzLmxlbmd0aCAtIDEpKSAqIGNoYXJ0VztcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpOyB0eHQuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoaCAtIDIpKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG4gICAgdHh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDE1NCwxNDAsMTIyLDAuNClcIik7IHR4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgXCI3XCIpO1xuICAgIHR4dC50ZXh0Q29udGVudCA9IGxhYmVsc1tpXTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQodHh0KTtcbiAgfVxuICBwYXJlbnQuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAvLyBMZWdlbmRcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVnZW5kLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6NnB4IDEycHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tdG9wOjRweDtcIjtcbiAgZm9yIChjb25zdCBzIG9mIHNlcmllcykge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGl0ZW0uc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O2ZvbnQtc2l6ZTo5cHg7Y29sb3I6IzZhNWE0YTtcIjtcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvdC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjZweDtoZWlnaHQ6NnB4O2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQ6JHtzLmNvbG9yfTtgO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZG90KTtcbiAgICBjb25zdCBubSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG5tLnRleHRDb250ZW50ID0gcy5uYW1lO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobm0pO1xuICAgIGxlZ2VuZC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuICBwYXJlbnQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRU5ERVI6IFNUQVRTIERBU0hCT0FSRFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlclN0YXRzU2VjdGlvbihyb290KSB7XG4gIC8vIE1pbmltYWwgd2Vla2x5IGNhbGVuZGFyXG4gIGNvbnN0IHdlZWtEYXRhID0gZ2V0V2Vla2x5Q2FsZW5kYXJEYXRhKCk7XG4gIGNvbnN0IHdlZWtHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2Vla0dyaWQuY2xhc3NOYW1lID0gXCJvdHctd2Vlay1ncmlkXCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQod2Vla0dyaWQpO1xuXG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtEYXRhKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VsbC5jbGFzc05hbWUgPSBcIm90dy13ZWVrLWRheVwiICsgKGRheS5pc1RvZGF5ID8gXCIgdG9kYXlcIiA6IFwiXCIpICsgKGRheS5zdGF0dXMgPyBcIiBkb25lXCIgOiBcIlwiKTtcbiAgICBjb25zdCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxibC5jbGFzc05hbWUgPSBcIm90dy1kYXktbGFiZWxcIjtcbiAgICBsYmwudGV4dENvbnRlbnQgPSBkYXkubGFiZWw7XG4gICAgY2VsbC5hcHBlbmRDaGlsZChsYmwpO1xuICAgIGNvbnN0IG51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbnVtLmNsYXNzTmFtZSA9IFwib3R3LWRheS1udW1cIjtcbiAgICBudW0udGV4dENvbnRlbnQgPSBkYXkubnVtO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQobnVtKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9IFwib3R3LWRheS1pY29uXCI7XG4gICAgaWYgKGRheS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XG4gICAgICBpZiAoZGF5LnR5cGUgPT09IFwiZGlzY2lwbGluZVwiKSB7IGljb24udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0RcXHVEQzhFXCI7IH1cbiAgICAgIGVsc2UgaWYgKGRheS50eXBlID09PSBcImZsb3dcIikgeyBpY29uLnRleHRDb250ZW50ID0gXCJcXHVEODNDXFx1REYwQVwiOyB9XG4gICAgICBlbHNlIHsgaWNvbi50ZXh0Q29udGVudCA9IFwiXFx1MjcxM1wiOyBpY29uLnN0eWxlLmNvbG9yID0gVEhFTUUuc3lzdGVtR3JlZW47IH1cbiAgICB9IGVsc2UgaWYgKGRheS5pc1RvZGF5KSB7XG4gICAgICBpY29uLnRleHRDb250ZW50ID0gXCJcXHUyMDIyXCI7IGljb24uc3R5bGUuY29sb3IgPSBUSEVNRS5jb2xvcjsgaWNvbi5zdHlsZS5hbmltYXRpb24gPSBcIm90dy1wdWxzZS1nbG93IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlXCI7XG4gICAgfSBlbHNlIGlmIChkYXkuaXNQYXN0KSB7XG4gICAgICBpY29uLnRleHRDb250ZW50ID0gXCJcXHUyMDE0XCI7IGljb24uc3R5bGUuY29sb3IgPSBcIiMyYTI1MjBcIjtcbiAgICB9XG4gICAgY2VsbC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB3ZWVrR3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxuXG4gIC8vIFBlci1tdXNjbGUgc3RyZW5ndGggZ3JpZFxuICBjb25zdCBtdXNjbGVMZXZlbHMgPSBhd2FpdCBnZXRNdXNjbGVMZXZlbERhdGEoKTtcbiAgY29uc3QgZ3JvdXBTdHJlbmd0aCA9IGdldE11c2NsZUdyb3VwU3RyZW5ndGgobXVzY2xlTGV2ZWxzKTtcblxuICBjb25zdCBzdHJlbmd0aExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RyZW5ndGhMYWJlbC5jbGFzc05hbWUgPSBcIm90dy1zZWN0aW9uLWxhYmVsXCI7XG4gIHN0cmVuZ3RoTGFiZWwudGV4dENvbnRlbnQgPSBcIk1VU0NMRSBTVFJFTkdUSFwiO1xuICByb290LmFwcGVuZENoaWxkKHN0cmVuZ3RoTGFiZWwpO1xuXG4gIHJlbmRlck11c2NsZVN0cmVuZ3RoR3JpZChyb290LCBncm91cFN0cmVuZ3RoLCBtdXNjbGVMZXZlbHMpO1xuXG4gIC8vIENvbXBhY3QgbGVnZW5kXG4gIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZ2VuZC5jbGFzc05hbWUgPSBcIm90dy1oZWF0bWFwLWxlZ2VuZFwiO1xuICBjb25zdCBsZWdlbmRJdGVtcyA9IFtcbiAgICB7IGxhYmVsOiBcIkJlZ2lubmVyXCIsIGNvbG9yOiBcIiNhODk4NjBcIiB9LFxuICAgIHsgbGFiZWw6IFwiTm92aWNlXCIsIGNvbG9yOiBcIiM3YTlhN2RcIiB9LFxuICAgIHsgbGFiZWw6IFwiSW50ZXJtZWRpYXRlXCIsIGNvbG9yOiBcIiM2YThhOWFcIiB9LFxuICAgIHsgbGFiZWw6IFwiQWR2YW5jZWRcIiwgY29sb3I6IFwiIzhhN2E5YVwiIH0sXG4gICAgeyBsYWJlbDogXCJFbGl0ZVwiLCBjb2xvcjogXCIjOWE2YTdhXCIgfSxcbiAgXTtcbiAgZm9yIChjb25zdCBpdGVtIG9mIGxlZ2VuZEl0ZW1zKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxpLmNsYXNzTmFtZSA9IFwib3R3LWhlYXRtYXAtbGVnZW5kLWl0ZW1cIjtcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRvdC5jbGFzc05hbWUgPSBcIm90dy1oZWF0bWFwLWxlZ2VuZC1kb3RcIjtcbiAgICBkb3Quc3R5bGUuYmFja2dyb3VuZCA9IGl0ZW0uY29sb3I7XG4gICAgbGkuYXBwZW5kQ2hpbGQoZG90KTtcbiAgICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB0eHQudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsO1xuICAgIGxpLmFwcGVuZENoaWxkKHR4dCk7XG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICByb290LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbiAgLy8gXCJQcm9ncmVzc1wiIGJ1dHRvblxuICBjb25zdCBwcm9ncmVzc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHByb2dyZXNzQnRuLnRleHRDb250ZW50ID0gXCJQUk9HUkVTU1wiO1xuICBwcm9ncmVzc0J0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgcHJvZ3Jlc3NCdG4uc3R5bGUuY3NzVGV4dCArPSBcIndpZHRoOjEwMCU7bWFyZ2luLXRvcDo4cHg7Zm9udC1zaXplOjExcHg7cGFkZGluZzoxMHB4O1wiO1xuICBwcm9ncmVzc0J0bi5vbmNsaWNrID0gKCkgPT4gc2hvd092ZXJhbGxQcm9ncmVzc1BvcHVwKG11c2NsZUxldmVscyk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCdG4pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFTkRFUjogTVVTQ0xFIEdST1VQIFNFTEVDVElPTiAoZmlyc3QtdGltZSBlbnRyeSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJNdXNjbGVTZWxlY3Rpb24ocm9vdCkge1xuICBjb25zdCBzZWxlY3RlZE11c2NsZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHNlbGVjdGVkU3ViZ3JvdXBzID0gbmV3IE1hcCgpO1xuXG4gIC8vIFx1MjUwMFx1MjUwMCBcIlN0YXJ0IE5ldyBXb3Jrb3V0XCIgYnV0dG9uIEhJR0ggYXQgdGhlIHRvcCBcdTI1MDBcdTI1MDBcbiAgY29uc3Qgc3RhcnRCdG5Ub3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEJ0blRvcC50ZXh0Q29udGVudCA9IFwiXFx1RDgzQ1xcdURGQ0JcXHVGRTBGIFNUQVJUIE5FVyBXT1JLT1VUXCI7XG4gIHN0YXJ0QnRuVG9wLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgc3RhcnRCdG5Ub3Auc3R5bGUuY3NzVGV4dCArPSBcInBhZGRpbmc6MTRweCAyNHB4O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjcwMDt3aWR0aDoxMDAlO21hcmdpbi1ib3R0b206MTZweDtcIjtcbiAgc3RhcnRCdG5Ub3Aub25jbGljayA9ICgpID0+IHNjcm9sbFRvTXVzY2xlU2VsZWN0KCk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc3RhcnRCdG5Ub3ApO1xuXG4gIC8vIFN0YXRzIGRhc2hib2FyZFxuICBhd2FpdCByZW5kZXJTdGF0c1NlY3Rpb24ocm9vdCk7XG5cbiAgLy8gXHUyNTAwXHUyNTAwIE11c2NsZSBTZWxlY3Rpb24gU2VjdGlvbiBcdTI1MDBcdTI1MDBcbiAgY29uc3Qgc2VsQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsQW5jaG9yLmlkID0gXCJvdHctbXVzY2xlLXNlbGVjdFwiO1xuICByb290LmFwcGVuZENoaWxkKHNlbEFuY2hvcik7XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG9NdXNjbGVTZWxlY3QoKSB7XG4gICAgc2VsQW5jaG9yLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIsIGJsb2NrOiBcInN0YXJ0XCIgfSk7XG4gIH1cblxuICBjb25zdCBzZWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlbExhYmVsLmNsYXNzTmFtZSA9IFwib3R3LXNlY3Rpb24tbGFiZWxcIjtcbiAgc2VsTGFiZWwuc3R5bGUubWFyZ2luVG9wID0gXCIyOHB4XCI7XG4gIHNlbExhYmVsLnRleHRDb250ZW50ID0gXCJTRUxFQ1QgTVVTQ0xFIEdST1VQU1wiO1xuICByb290LmFwcGVuZENoaWxkKHNlbExhYmVsKTtcblxuICBjb25zdCBzZWxEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsRGVzYy5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMnB4O2A7XG4gIHNlbERlc2MudGV4dENvbnRlbnQgPSBcIlNlbGVjdCB0aGUgbXVzY2xlIGdyb3VwcyB5b3Ugd2FudCB0byB0cmFpblwiO1xuICByb290LmFwcGVuZENoaWxkKHNlbERlc2MpO1xuXG4gIC8vIE11c2NsZSBncm91cCB0b2dnbGUgYnV0dG9uc1xuICBjb25zdCBtdXNjbGVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbXVzY2xlR3JpZC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjEwcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOjhweDtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChtdXNjbGVHcmlkKTtcblxuICBjb25zdCBzdWJncm91cEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJncm91cEFyZWEuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6OHB4O3dpZHRoOjEwMCU7XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc3ViZ3JvdXBBcmVhKTtcblxuICBjb25zdCB0b2dnbGVCdXR0b25zID0gbmV3IE1hcCgpO1xuXG4gIE9iamVjdC5lbnRyaWVzKE1VU0NMRV9HUk9VUFMpLmZvckVhY2goKFtuYW1lLCBjb25maWddKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uY2xhc3NOYW1lID0gXCJvdHctbXVzY2xlLXRvZ2dsZVwiO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGAke2NvbmZpZy5pY29ufSAke25hbWV9YDtcbiAgICBtdXNjbGVHcmlkLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgdG9nZ2xlQnV0dG9ucy5zZXQobmFtZSwgYnRuKTtcblxuICAgIGxldCBzdWJncm91cENvbnRhaW5lciA9IG51bGw7XG4gICAgaWYgKGNvbmZpZy5zdWJncm91cHMpIHtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3R3LXN1Ymdyb3VwLWNvbnRhaW5lclwiO1xuICAgICAgc3ViZ3JvdXBDb250YWluZXIuc3R5bGUuY3NzVGV4dCArPSBgZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo4cHg7YmFja2dyb3VuZDojMGMwYzBjO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Ym9yZGVyLXJhZGl1czo0cHg7YDtcbiAgICAgIGNvbnN0IHN1YkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1YkxhYmVsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MTAwJTtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O21hcmdpbi1ib3R0b206NHB4O2A7XG4gICAgICBzdWJMYWJlbC50ZXh0Q29udGVudCA9IG5hbWUgKyBcIiBzdWJncm91cHM6XCI7XG4gICAgICBzdWJncm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJMYWJlbCk7XG4gICAgICBzZWxlY3RlZFN1Ymdyb3Vwcy5zZXQobmFtZSwgbmV3IFNldCgpKTtcblxuICAgICAgY29uZmlnLnN1Ymdyb3Vwcy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN1YkJ0bi5jbGFzc05hbWUgPSBcIm90dy1zdWItdG9nZ2xlXCI7XG4gICAgICAgIHN1YkJ0bi50ZXh0Q29udGVudCA9IHN1YjtcbiAgICAgICAgc3ViQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY29uc3Qgc3VicyA9IHNlbGVjdGVkU3ViZ3JvdXBzLmdldChuYW1lKTtcbiAgICAgICAgICBpZiAoc3Vicy5oYXMoc3ViKSkgeyBzdWJzLmRlbGV0ZShzdWIpOyBzdWJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTsgfVxuICAgICAgICAgIGVsc2UgeyBzdWJzLmFkZChzdWIpOyBzdWJCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgfVxuICAgICAgICB9O1xuICAgICAgICBzdWJncm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdG4pO1xuICAgICAgfSk7XG4gICAgICBzdWJncm91cEFyZWEuYXBwZW5kQ2hpbGQoc3ViZ3JvdXBDb250YWluZXIpO1xuICAgIH1cblxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkTXVzY2xlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgc2VsZWN0ZWRNdXNjbGVzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChzdWJncm91cENvbnRhaW5lcikgc3ViZ3JvdXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWRNdXNjbGVzLmFkZChuYW1lKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChzdWJncm91cENvbnRhaW5lcikgc3ViZ3JvdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZVRvZ2dsZUJ1dHRvbnMoKSB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgYnRuXSBvZiB0b2dnbGVCdXR0b25zKSB7XG4gICAgICBpZiAoc2VsZWN0ZWRNdXNjbGVzLmhhcyhuYW1lKSkge1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN0YXJ0IGJ1dHRvbiAoYm90dG9tKVxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJcXHVEODNDXFx1REZDQlxcdUZFMEYgU1RBUlQgV09SS09VVFwiO1xuICBzdGFydEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1wcmltYXJ5XCI7XG4gIHN0YXJ0QnRuLnN0eWxlLmNzc1RleHQgKz0gXCJwYWRkaW5nOjE2cHggMjRweDtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo3MDA7bWFyZ2luLXRvcDoxNnB4O1wiO1xuICBzdGFydEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZE11c2NsZXMuc2l6ZSA9PT0gMCkgeyBub3RpY2UoXCJQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBtdXNjbGUgZ3JvdXBcIik7IHJldHVybjsgfVxuXG4gICAgLy8gQnVpbGQgZmluYWwgbXVzY2xlIGxpc3Q6IHVzZSBzdWJncm91cHMgaWYgc2VsZWN0ZWQsIG90aGVyd2lzZSB0aGUgcGFyZW50IGdyb3VwXG4gICAgY29uc3QgbXVzY2xlR3JvdXBzQXJyYXkgPSBbXTtcbiAgICBzZWxlY3RlZE11c2NsZXMuZm9yRWFjaChtdXNjbGUgPT4ge1xuICAgICAgY29uc3Qgc3VicyA9IHNlbGVjdGVkU3ViZ3JvdXBzLmdldChtdXNjbGUpO1xuICAgICAgaWYgKHN1YnMgJiYgc3Vicy5zaXplID4gMCkge1xuICAgICAgICBzdWJzLmZvckVhY2goc3ViID0+IG11c2NsZUdyb3Vwc0FycmF5LnB1c2goc3ViKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtdXNjbGVHcm91cHNBcnJheS5wdXNoKG11c2NsZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBMb2FkIHByZXZpb3VzIGV4ZXJjaXNlcyBmb3IgdGhlc2UgbXVzY2xlIGdyb3Vwc1xuICAgIGNvbnN0IGxvYWRlZEV4ZXJjaXNlcyA9IGxvYWRQcmV2aW91c0V4ZXJjaXNlcyhtdXNjbGVHcm91cHNBcnJheSk7XG5cbiAgICAvLyBTYXZlIHRvIGZyb250bWF0dGVyIGFuZCB1cGRhdGUgbG9jYWwgc3RhdGVcbiAgICBtdXNjbGVHcm91cHMgPSBtdXNjbGVHcm91cHNBcnJheTtcbiAgICBleGVyY2lzZXMgPSBsb2FkZWRFeGVyY2lzZXM7XG4gICAgY3VycmVudE11c2NsZUluZGV4ID0gMDtcblxuICAgIGF3YWl0IHNldE11bHRpcGxlRGF0YSh7XG4gICAgICBtdXNjbGVHcm91cHM6IG11c2NsZUdyb3VwcyxcbiAgICAgIGV4ZXJjaXNlczogZXhlcmNpc2VzLFxuICAgICAgY3VycmVudE11c2NsZUluZGV4OiAwLFxuICAgICAgV29ya291dDogZmFsc2UsXG4gICAgICBcIldvcmtvdXQtVHlwZVwiOiBcIlwiLFxuICAgICAgVGltZXN0YW1wOiBtb21lbnQoKS5mb3JtYXQoKSxcbiAgICB9KTtcblxuICAgIC8vIFJlLXJlbmRlciBcdTIwMTQgbm93IHdlJ2xsIGVudGVyIHdvcmtvdXQgdHJhY2tpbmcgbW9kZVxuICAgIHJlbmRlcigpO1xuICB9O1xuICByb290LmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNQUlOIFJFTkRFUlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb290LmNsYXNzTmFtZSA9IFwib3R3LWNvbnRhaW5lclwiO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm9vdCk7XG5cbiAgLy8gSWYgd29ya291dCBpcyBhbHJlYWR5IGNvbXBsZXRlZCwgc2hvdyBzdW1tYXJ5XG4gIGlmIChpc0NvbXBsZXRlZCAmJiBnZXREYXRhKFwiV29ya291dC1UeXBlXCIpKSB7XG4gICAgY29uc3Qgd1R5cGUgPSBnZXREYXRhKFwiV29ya291dC1UeXBlXCIpO1xuICAgIGNvbnN0IHN1bW1hcnlDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdW1tYXJ5Q2FyZC5jbGFzc05hbWUgPSBcIm90dy1jYXJkIG90dy1jYXJkLWJyZWF0aGVcIjtcbiAgICBzdW1tYXJ5Q2FyZC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgIHN1bW1hcnlDYXJkLnN0eWxlLnBhZGRpbmcgPSBcIjMycHhcIjtcbiAgICBhZGRDb3JuZXJzKHN1bW1hcnlDYXJkLCBUSEVNRS5zeXN0ZW1HcmVlbik7XG4gICAgc3VtbWFyeUNhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTozMnB4O21hcmdpbi1ib3R0b206MTJweDtcIj4ke3dUeXBlID09PSBcImRpc2NpcGxpbmVcIiA/IFwiXFx1RDgzRFxcdURDOEVcIiA6IFwiXFx1RDgzQ1xcdURGMEFcIn08L2Rpdj5cbiAgICAgIDxoMiBzdHlsZT1cIm1hcmdpbjowO2NvbG9yOiR7VEhFTUUuc3lzdGVtR3JlZW59O2ZvbnQtc2l6ZToxNnB4O2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XCI+V09SS09VVCBDT01QTEVURTwvaDI+XG4gICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTNweDttYXJnaW4tdG9wOjhweDtmb250LXN0eWxlOml0YWxpYztcIj4ke3dUeXBlID09PSBcImRpc2NpcGxpbmVcIiA/IFwiRGlzY2lwbGluZSBXaW5cIiA6IFwiRmxvdyBTdGF0ZVwifTwvZGl2PlxuICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7bWFyZ2luLXRvcDoxNnB4O1wiPiR7bW9tZW50KGdldERhdGEoXCJUaW1lc3RhbXBcIikpLmZvcm1hdChcIk1NTSBELCBZWVlZIFxcdTIwMTQgaDptbSBBXCIpfTwvZGl2PlxuICAgIGA7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChzdW1tYXJ5Q2FyZCk7XG5cbiAgICAvLyBTaG93IGV4ZXJjaXNlcyBzdW1tYXJ5XG4gICAgaWYgKGV4ZXJjaXNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBleFN1bW1hcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZXhTdW1tYXJ5LmNsYXNzTmFtZSA9IFwib3R3LWNhcmRcIjtcbiAgICAgIGFkZENvcm5lcnMoZXhTdW1tYXJ5LCBUSEVNRS5jb2xvcik7XG4gICAgICBjb25zdCBleFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGV4VGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMnB4O2A7XG4gICAgICBleFRpdGxlLnRleHRDb250ZW50ID0gXCJTRVNTSU9OIFNVTU1BUllcIjtcbiAgICAgIGV4U3VtbWFyeS5hcHBlbmRDaGlsZChleFRpdGxlKTtcbiAgICAgIGZvciAoY29uc3QgZXggb2YgZXhlcmNpc2VzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlZFNldHMgPSBleC5zZXRzLmZpbHRlcigocykgPT4gIXMuaXNXYXJtdXAgJiYgcy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdG90YWxTZXRzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+ICFzLmlzV2FybXVwKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHJvdy5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjtwYWRkaW5nOjhweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gICAgICAgIHJvdy5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXdlaWdodDo2MDA7XCI+JHtleC5uYW1lfTwvc3Bhbj48c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7XCI+JHtjb21wbGV0ZWRTZXRzfS8ke3RvdGFsU2V0c30gc2V0czwvc3Bhbj5gO1xuICAgICAgICBleFN1bW1hcnkuYXBwZW5kQ2hpbGQocm93KTtcbiAgICAgIH1cbiAgICAgIHJvb3QuYXBwZW5kQ2hpbGQoZXhTdW1tYXJ5KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gTm8gbXVzY2xlIGdyb3VwcyBzZWxlY3RlZCB5ZXQgXHUyMDE0IHNob3cgc2VsZWN0aW9uIHNjcmVlblxuICBpZiAobXVzY2xlR3JvdXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIGF3YWl0IHJlbmRlck11c2NsZVNlbGVjdGlvbihyb290KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBcdTI1MDBcdTI1MDAgQWN0aXZlIFdvcmtvdXQgVUkgXHUyNTAwXHUyNTAwXG4gIGNvbnN0IGN1cnJlbnRNdXNjbGUgPSBtdXNjbGVHcm91cHNbY3VycmVudE11c2NsZUluZGV4XSB8fCBtdXNjbGVHcm91cHNbMF07XG4gIGNvbnN0IG11c2NsZUV4ZXJjaXNlcyA9IGV4ZXJjaXNlcy5maWx0ZXIoKGUpID0+IGUubXVzY2xlID09PSBjdXJyZW50TXVzY2xlIHx8IGUubXVzY2xlR3JvdXAgPT09IGN1cnJlbnRNdXNjbGUpO1xuXG4gIC8vIEhlYWRlclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJvdHctY2FyZCBvdHctY2FyZC1icmVhdGhlIG90dy1oZWFkZXJcIjtcbiAgYWRkQ29ybmVycyhoZWFkZXIsIFRIRU1FLmNvbG9yKTtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlLmNsYXNzTmFtZSA9IFwib3R3LXRpdGxlXCI7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gY3VycmVudE11c2NsZS50b1VwcGVyQ2FzZSgpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICBjb25zdCBwcm9ncmVzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvZ3Jlc3NMYWJlbC5jbGFzc05hbWUgPSBcIm90dy1wcm9ncmVzcy1sYWJlbFwiO1xuICBwcm9ncmVzc0xhYmVsLnRleHRDb250ZW50ID0gKGN1cnJlbnRNdXNjbGVJbmRleCArIDEpICsgXCIgLyBcIiArIG11c2NsZUdyb3Vwcy5sZW5ndGg7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9ncmVzc0xhYmVsKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIEV4ZXJjaXNlc1xuICBjb25zdCBleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGV4Q29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE2cHg7XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoZXhDb250YWluZXIpO1xuXG4gIGlmIChtdXNjbGVFeGVyY2lzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVtcHR5LnN0eWxlLmNzc1RleHQgPSBgdGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzo0MHB4IDIwcHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggZGFzaGVkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gICAgZW1wdHkuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTttYXJnaW46MDtcIj5ObyBleGVyY2lzZXMgZm9yICR7Y3VycmVudE11c2NsZX0geWV0LjwvcD5gO1xuICAgIGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IGV4IG9mIG11c2NsZUV4ZXJjaXNlcykge1xuICAgICAgYXdhaXQgcmVuZGVyRXhlcmNpc2UoZXhDb250YWluZXIsIGV4KTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgZXhlcmNpc2UgYnV0dG9uXG4gIGNvbnN0IGFkZEV4QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkRXhCdG4udGV4dENvbnRlbnQgPSBcIisgQUREIEVYRVJDSVNFXCI7XG4gIGFkZEV4QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLWRhc2hlZFwiO1xuICBhZGRFeEJ0bi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjE2cHhcIjtcbiAgYWRkRXhCdG4ub25jbGljayA9ICgpID0+IG9wZW5BZGRFeGVyY2lzZU1vZGFsKGN1cnJlbnRNdXNjbGUpO1xuICByb290LmFwcGVuZENoaWxkKGFkZEV4QnRuKTtcblxuICAvLyBOYXZpZ2F0aW9uXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdi5jbGFzc05hbWUgPSBcIm90dy1uYXYtcm93XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBpZiAoY3VycmVudE11c2NsZUluZGV4ID4gMCkge1xuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByZXZCdG4udGV4dENvbnRlbnQgPSBcIlxcdTIxOTAgUFJFVklPVVNcIjtcbiAgICBwcmV2QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIHByZXZCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY3VycmVudE11c2NsZUluZGV4LS07IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJldkJ0bik7XG4gIH1cblxuICBpZiAoY3VycmVudE11c2NsZUluZGV4IDwgbXVzY2xlR3JvdXBzLmxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXh0QnRuLnRleHRDb250ZW50ID0gXCJORVhUIE1VU0NMRSBcXHUyMTkyXCI7XG4gICAgbmV4dEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1wcmltYXJ5XCI7XG4gICAgbmV4dEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjdXJyZW50TXVzY2xlSW5kZXgrKzsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9O1xuICAgIG5hdi5hcHBlbmRDaGlsZChuZXh0QnRuKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaW5pc2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbmlzaEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1MjcxMyBGSU5JU0ggV09SS09VVFwiO1xuICAgIGZpbmlzaEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1maW5pc2hcIjtcbiAgICBmaW5pc2hCdG4ub25jbGljayA9ICgpID0+IG9wZW5GaW5pc2hNb2RhbCgpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChmaW5pc2hCdG4pO1xuICB9XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBCb290IFx1MjUwMFx1MjUwMFxucmV0dXJuIHJlbmRlcigpO1xuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQnVpbHQtaW4gVGVtcGxhdGUgUmVnaXN0cnlcbi8vIE1hcHMgdGVtcGxhdGUgSURzIHRvIHRoZWlyIHNvdXJjZSBjb2RlIChidW5kbGVkIGF0IGJ1aWxkIHRpbWUpLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB3b3Jrb3V0U291cmNlIGZyb20gXCIuL3dvcmtvdXQudHBsXCI7XG5cbi8qKlxuICogQnVpbHQtaW4gdGVtcGxhdGVzIGJ1bmRsZWQgaW5zaWRlIHRoZSBwbHVnaW4uXG4gKiBLZXlzIGFyZSB0ZW1wbGF0ZSBJRHMgcmVmZXJlbmNlZCBpbiBBY3Rpdml0eUNvbmZpZy53b3Jrc3BhY2VUZW1wbGF0ZS5cbiAqIFZhbHVlcyBhcmUgdGhlIHJhdyBKUyBzb3VyY2UgZXhlY3V0ZWQgdmlhIG5ldyBGdW5jdGlvbihcImN0eFwiLCBzb3VyY2UpLlxuICovXG5leHBvcnQgY29uc3QgQlVJTFRJTl9URU1QTEFURVM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHdvcmtvdXQ6IHdvcmtvdXRTb3VyY2UsXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsSUFBQUEsbUJBQThEOzs7QUNZdkQsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxzQkFBc0I7QUFJNUIsSUFBTSxTQUEyQjtBQUFBLEVBQ3RDLEVBQUUsTUFBTSxHQUFHLE1BQU0sb0JBQW9CLE1BQU0sZ0JBQWdCLGFBQWEsc0VBQXNFLE1BQU0saUdBQWlHLFdBQVcsd0JBQXFCO0FBQUEsRUFDclIsRUFBRSxNQUFNLEdBQUcsTUFBTSxnQkFBZ0IsTUFBTSxvQkFBb0IsYUFBYSxpRUFBaUUsTUFBTSxvRkFBb0YsV0FBVyx3QkFBcUI7QUFBQSxFQUNuUSxFQUFFLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixNQUFNLGNBQWMsYUFBYSwrREFBK0QsTUFBTSx5RUFBeUUsV0FBVyx3QkFBcUI7QUFBQSxFQUNuUCxFQUFFLE1BQU0s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R0FBRyxFQUFFO0FBQUE7QUFBQSxFQUUxRCxFQUFFLElBQUksVUFBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksV0FBYyxNQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksWUFBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUksTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUE7QUFBQSxFQUVqRyxFQUFFLElBQUksT0FBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksWUFBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksVUFBYyxNQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQTtBQUFBLEVBRTFELEVBQUUsSUFBSSxTQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxjQUFjLE1BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxVQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBSSxNQUFNLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFDbkc7QUFRTyxTQUFTLHNCQUNkLFdBQ0EsVUFDQSxRQUNB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SUFBSTtBQUNWLFVBQUksRUFBRSxlQUFlLFVBQWEsRUFBRSxpQkFBaUIsUUFBVztBQUM5RCxVQUFFLGVBQWUsRUFBRTtBQUNuQixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFFQSxVQUFJLEVBQUUsa0JBQWtCLFFBQVc7QUFDakMsWUFBSSxDQUFDLEVBQUU7QUFBUSxZQUFFLFNBQVMsRUFBRTtBQUM1QixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFDQSxVQUFJLEVBQUUsb0JBQW9CLFFBQVc7QUFDbkMsWUFBSSxDQUFDLEVBQUU7QUFBUSxZQUFFLFNBQVMsRUFBRTtBQUM1QixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBR0EsUUFBSSxLQUFLLFNBQVMsaUJBQWlCO0FBQ2pDLFlBQU0sS0FBSyxLQUFLLFNBQVM7QUFDekIsVUFBSSxHQUFHLGVBQWUsVUFBYSxHQUFHLGlCQUFpQixRQUFXO0FBQ2hFLFdBQUcsZUFBZSxHQUFHO0FBQ3JCLGVBQU8sR0FBRztBQUNWLGtCQUFVO0FBQUEsTUFDWjtBQUVBLGFBQU8sR0FBRztBQUNWLGFBQU8sR0FBRztBQUFBLElBQ1o7QUFHQSxRQUFJLElBQUksb0JBQW9CLE1BQU0sUUFBUSxJQUFJLGdCQUFnQixLQUFLLElBQUksaUJBQWlCLFNBQVMsR0FBRztBQUNsRyxpQkFBVyxTQUFTLElBQUksa0JBQWtCO0FBQ3hDLFlBQUksQ0FBQyxNQUFNLFdBQVcsQ0FBQyxNQUFNO0FBQWM7QUFDM0MsY0FBTSxXQUFXLEtBQUssU0FBUyxXQUFXLEtBQUssQ0FBQyxNQUFXLEVBQUUsT0FBTyxNQUFNLFlBQVk7QUFDdEYsWUFBSSxZQUFZLENBQUMsU0FBUyxtQkFBbUI7QUFDM0MsbUJBQVMsb0JBQW9CLE1BQU07QUFDbkMsb0JBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUNBLGFBQU8sSUFBSTtBQUNYLGdCQUFVO0FBQUEsSUFDWjtBQUVBLFFBQUksU0FBUztBQUNYLFlBQU0sS0FBSyxhQUFhO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxTQUFTQSxPQUFNLElBQTJCO0FBQ3hDLFNBQU8sSUFBSSxRQUFRLENBQUMsWUFBWSxXQUFXLFNBQVMsRUFBRSxDQUFDO0FBQ3pEOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgIm5lZ2xlY3RlZCIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJzbGVlcCJdCn0K
