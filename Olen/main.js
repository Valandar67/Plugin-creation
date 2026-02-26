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
function renderStrengthHeatmap(container, settings, engine, completionData, staggerIndex, callbacks) {
  const section = container.createDiv({ cls: "olen-heatmap-section" });
  section.style.setProperty("--i", String(staggerIndex));
  const gender = settings.personalStats.gender;
  const figureWrap = section.createDiv({ cls: "olen-heatmap-figures" });
  const muscleData = gatherMuscleIntensity(engine, completionData, settings);
  renderMuscleFigure(figureWrap, "front", gender, muscleData, callbacks.onMuscleClick);
  renderMuscleFigure(figureWrap, "back", gender, muscleData, callbacks.onMuscleClick);
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
  drawBarChart(container, labels, values, "#d4a843");
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
  drawBarChart(container, labels, values, "#d4a843");
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
function drawBarChart(container, labels, values, color) {
  const svgNS = "http://www.w3.org/2000/svg";
  const width = 280;
  const height = 100;
  const padding = { top: 8, right: 8, bottom: 18, left: 8 };
  const chartW = width - padding.left - padding.right;
  const chartH = height - padding.top - padding.bottom;
  const maxVal = Math.max(...values, 1);
  const barGap = 4;
  const barWidth = (chartW - barGap * (labels.length - 1)) / labels.length;
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("class", "olen-progress-svg");
  for (let i = 0; i < labels.length; i++) {
    const x = padding.left + i * (barWidth + barGap);
    const barH = Math.max(2, values[i] / maxVal * chartH);
    const y = padding.top + chartH - barH;
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", String(x));
    rect.setAttribute("y", String(y));
    rect.setAttribute("width", String(barWidth));
    rect.setAttribute("height", String(barH));
    rect.setAttribute("rx", "3");
    rect.setAttribute("fill", values[i] > 0 ? color : "rgba(255,255,255,0.06)");
    svg.appendChild(rect);
    const text = document.createElementNS(svgNS, "text");
    text.setAttribute("x", String(x + barWidth / 2));
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
          });
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
var workout_default = '// ============================================================\n// Olen Template \u2014 Workout Tracker v5.0\n// Renders inside the Olen workspace for the "workout" activity.\n// All UI lives here \u2014 daily notes only store YAML frontmatter.\n// Data is read/written via ctx.getData / ctx.setData.\n// ============================================================\n\nconst { container, getData, setData, setMultipleData, app, moment, notice,\n        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;\n\n// ============================================================\n// SETTINGS \u2014 Edit these to match your vault structure\n// ============================================================\nconst SETTINGS = {\n  // Where daily workout notes are stored\n  workoutFolder: "Personal Life/01 Workout",\n  // File containing Weight, Height, Birthdate in frontmatter\n  personalStatsFile: "Personal Life/Personal Stats.md",\n  // Folder containing exercise standard .md files (e.g. "Bench Press.md")\n  exerciseDbFolder: "Home/Activities/Exercises database",\n  // Default personal stats (used when stats file is missing)\n  defaultWeight: 61,\n  defaultHeight: 175,\n  defaultBirthdate: "2005-11-29",\n};\n\n// Muscle groups available for selection, with optional subgroups\nconst MUSCLE_GROUPS = {\n  "Neck":      { subgroups: null, icon: "\\uD83E\\uDDB4" },\n  "Back":      { subgroups: ["Lats", "Traps", "Rhomboids", "Lower Back", "Rear Delts"], icon: "\\uD83D\\uDD19" },\n  "Chest":     { subgroups: null, icon: "\\uD83D\\uDCAA" },\n  "Shoulders": { subgroups: ["Front Delts", "Side Delts", "Rear Delts"], icon: "\\uD83C\\uDFAF" },\n  "Core":      { subgroups: null, icon: "\\uD83C\\uDFAF" },\n  "Legs":      { subgroups: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"], icon: "\\uD83E\\uDDB5" },\n  "Arms":      { subgroups: ["Biceps", "Triceps", "Forearms"], icon: "\\uD83D\\uDCAA" },\n};\n\n// ============================================================\n// THEME & CONSTANTS\n// ============================================================\nconst THEME = {\n  color: "#9a8c7a",\n  colorHover: "#aa9c8a",\n  colorBorder: "#3a342a",\n  colorBorderHover: "#4a443a",\n  colorMuted: "#6a5a4a",\n  colorLight: "#b8a890",\n  colorDiscipline: "#a89860",\n  colorFlow: "#6a8a9a",\n  systemGreen: "#7a9a7d"\n};\n\nconst STRENGTH_LEVELS = {\n  "Untrained":    { color: "#6a6a6a", icon: "\\u25CB" },\n  "Beginner":     { color: "#a89860", icon: "\\u25D0" },\n  "Novice":       { color: "#7a9a7d", icon: "\\u25D1" },\n  "Intermediate": { color: "#6a8a9a", icon: "\\u25D5" },\n  "Advanced":     { color: "#8a7a9a", icon: "\\u25CF" },\n  "Elite":        { color: "#9a6a7a", icon: "\\u2605" }\n};\n\n// ============================================================\n// STATE (from frontmatter)\n// ============================================================\nlet exercises = getData("exercises") || [];\nlet muscleGroups = getData("muscleGroups") || [];\nlet currentMuscleIndex = getData("currentMuscleIndex") || 0;\nconst isCompleted = getData("Workout") === true;\n\n// ============================================================\n// STYLES\n// ============================================================\nif (!document.getElementById("olen-tpl-workout-v5")) {\n  const style = document.createElement("style");\n  style.id = "olen-tpl-workout-v5";\n  style.textContent = `\n    .otw-container * { box-sizing: border-box; }\n    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0; font-family: Georgia, serif; }\n    .otw-container button, .otw-container input, .otw-modal-overlay button, .otw-modal-overlay input { border-radius: 0 !important; -webkit-appearance: none; appearance: none; }\n    .otw-container input[type="number"] { -moz-appearance: textfield; }\n    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 20px rgba(154,140,122,0.03); } 50% { box-shadow: inset 0 0 40px rgba(154,140,122,0.08); } }\n    @keyframes otw-pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }\n    .otw-card { background: #0a0a0a; border: 1px solid #3a342a; padding: 16px; position: relative; margin-bottom: 16px; }\n    .otw-card-breathe { animation: otw-breathe 6s ease-in-out infinite; }\n    .otw-header { text-align: center; padding: 20px; }\n    .otw-title { margin: 0; color: #9a8c7a; font-size: 24px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }\n    .otw-progress-label { color: #6a5a4a; font-size: 12px; margin-top: 8px; }\n    .otw-section-label { color: #6a5a4a; font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-align: center; margin: 20px 0 10px; }\n    .otw-week-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }\n    .otw-week-day { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 8px 4px; background: #0c0c0c; border: 1px solid #2a2520; }\n    .otw-week-day.today { border-color: #9a8c7a; }\n    .otw-week-day .otw-day-label { font-size: 9px; color: #6a5a4a; letter-spacing: 1px; text-transform: uppercase; }\n    .otw-week-day .otw-day-num { font-size: 13px; font-weight: 600; color: #6a5a4a; }\n    .otw-week-day .otw-day-icon { font-size: 14px; min-height: 18px; }\n    .otw-week-day.done .otw-day-num { color: #9a8c7a; }\n    .otw-stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }\n    .otw-stat-box { display: flex; flex-direction: column; align-items: center; padding: 12px 8px; background: #0c0c0c; border: 1px solid #2a2520; }\n    .otw-stat-value { font-size: 22px; font-weight: 700; color: #9a8c7a; line-height: 1; }\n    .otw-stat-label { font-size: 9px; color: #6a5a4a; letter-spacing: 1px; text-transform: uppercase; margin-top: 6px; }\n    .otw-recent-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: #0c0c0c; border: 1px solid #2a2520; margin-bottom: 4px; }\n    .otw-recent-date { font-size: 12px; color: #6a5a4a; }\n    .otw-recent-muscles { font-size: 11px; color: #9a8c7a; flex: 1; margin: 0 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n    .otw-recent-badge { font-size: 10px; padding: 3px 8px; font-weight: 700; letter-spacing: 1px; }\n    .otw-heatmap-wrap { display: flex; justify-content: center; gap: 16px; padding: 8px 0; }\n    .otw-heatmap-svg { width: 130px; height: auto; }\n    .otw-heatmap-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 14px; margin-top: 8px; padding: 0 8px; }\n    .otw-heatmap-legend-item { display: flex; align-items: center; gap: 5px; font-size: 8px; color: #6a5a4a; letter-spacing: 1px; text-transform: uppercase; }\n    .otw-heatmap-legend-dot { width: 8px; height: 8px; }\n    .otw-btn { padding: 14px 24px; border: none; border-radius: 0 !important; font-size: 13px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; -webkit-appearance: none; appearance: none; }\n    .otw-btn-primary { background: #9a8c7a; color: #0a0a0a; width: 100%; }\n    .otw-btn-primary:active { transform: scale(0.98); }\n    .otw-btn-secondary { background: #0f0f0f; border: 1px solid #3a342a; color: #6a5a4a; }\n    .otw-btn-secondary:active { border-color: #9a8c7a; color: #9a8c7a; }\n    .otw-btn-finish { background: #7a9a7d; color: #0a0a0a; }\n    .otw-btn-dashed { width: 100%; background: transparent; border: 1px dashed #3a342a; color: #6a5a4a; }\n    .otw-btn-dashed:active { border-color: #9a8c7a; color: #9a8c7a; }\n    .otw-nav-row { display: flex; gap: 12px; margin-top: 24px; }\n    .otw-nav-row .otw-btn { flex: 1; text-align: center; }\n    .otw-set-row { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 12px; padding: 12px; background: #0f0f0f; border: 1px solid #3a342a; margin-bottom: 6px; }\n    .otw-set-row.completed { opacity: 0.6; }\n    .otw-checkbox { width: 24px; height: 24px; border: 2px solid #3a342a; border-radius: 0 !important; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0a0a0a; font-weight: bold; transition: all 0.2s; flex-shrink: 0; }\n    .otw-checkbox.checked { background: #7a9a7d; border-color: #7a9a7d; }\n    .otw-input { padding: 6px; background: #0a0a0a; border: 1px solid #3a342a; border-radius: 0 !important; color: #9a8c7a; text-align: center; font-size: 14px; font-weight: 600; width: 50px; -webkit-appearance: none; appearance: none; }\n    .otw-ctrl-btn { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: #0f0f0f; border: 1px solid #3a342a; border-radius: 0 !important; color: #9a8c7a; cursor: pointer; font-size: 16px; flex-shrink: 0; -webkit-appearance: none; appearance: none; }\n    .otw-ctrl-btn:active { background: #9a8c7a; color: #0a0a0a; }\n    .otw-warmup-badge { font-size: 9px; color: #6a8a9a; padding: 2px 6px; background: rgba(106,138,154,0.15); border-radius: 3px; }\n    .otw-strength-bar { height: 6px; background: #1a1a1a; border-radius: 3px; overflow: hidden; margin-top: 6px; }\n    .otw-strength-fill { height: 100%; border-radius: 3px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }\n    .otw-strength-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }\n    .otw-pr-box { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; background: rgba(168,152,96,0.1); border: 1px solid rgba(168,152,96,0.3); border-radius: 4px; margin-top: 8px; }\n    .otw-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.5s ease, backdrop-filter 0.5s ease; }\n    .otw-modal-overlay.visible { background: rgba(0,0,0,0.95); backdrop-filter: blur(4px); }\n    .otw-modal-content { background: #0a0a0a; padding: 28px 20px; border: 1px solid #3a342a; max-width: 550px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 16px; position: relative; opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease, transform 0.5s ease; overflow-y: auto; }\n    .otw-modal-overlay.visible .otw-modal-content { opacity: 1; transform: translateY(0); }\n    .otw-summary-complete { text-align: center; padding: 24px 0; }\n    .otw-summary-complete h2 { margin: 0; color: #7a9a7d; font-size: 16px; font-weight: 700; letter-spacing: 3px; }\n    .otw-feel-btn { display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: #0c0c0c; cursor: pointer; margin-bottom: 10px; transition: all 0.2s; }\n    .otw-feel-btn:active { background: #101010; }\n    .otw-muscle-toggle { padding: 12px 18px; background: #0f0f0f; border: 1px solid #3a342a; border-radius: 0 !important; color: #9a8c7a; font-size: 13px; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }\n    .otw-muscle-toggle.active { background: rgba(154,140,122,0.3) !important; border-color: #9a8c7a !important; }\n    .otw-muscle-toggle:active { transform: translateY(-1px); }\n    .otw-subgroup-container { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease; opacity: 0; padding: 0 12px; }\n    .otw-subgroup-container.expanded { max-height: 200px; opacity: 1; padding: 12px; }\n    .otw-sub-toggle { padding: 8px 14px; background: #0f0f0f; border: 1px solid #3a342a; border-radius: 0 !important; color: #6a5a4a; font-size: 12px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }\n    .otw-sub-toggle.active { background: rgba(154,140,122,0.2); border-color: #9a8c7a; color: #9a8c7a; }\n  `;\n  document.head.appendChild(style);\n}\n\n// ============================================================\n// UTILITY FUNCTIONS\n// ============================================================\n\nfunction addCorners(el, color, size = 14) {\n  ["TL", "TR", "BL", "BR"].forEach((pos) => {\n    const c = document.createElement("div");\n    const isTop = pos.includes("T"), isLeft = pos.includes("L");\n    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;\n    el.appendChild(c);\n  });\n}\n\nfunction calculate1RM(weight, reps) {\n  if (reps === 0 || weight === 0) return 0;\n  if (reps === 1) return weight;\n  return Math.round(weight * (1 + reps / 30));\n}\n\nfunction getFirstWorkingSetIndex(sets) {\n  return sets.findIndex((s) => !s.isWarmup);\n}\n\nfunction updateWarmupWeights(ex, newW) {\n  const warmups = ex.sets.filter((s) => s.isWarmup);\n  [0.5, 0.7, 0.85].forEach((p, i) => {\n    if (warmups[i]) warmups[i].weight = Math.round(newW * p);\n  });\n}\n\n// ============================================================\n// PERSONAL STATS & STRENGTH STANDARDS\n// ============================================================\n\nasync function getPersonalStats() {\n  const fm = getFileMetadata(SETTINGS.personalStatsFile);\n  if (!fm) return { weight: SETTINGS.defaultWeight, height: SETTINGS.defaultHeight, birthdate: SETTINGS.defaultBirthdate };\n  return {\n    weight: fm.Weight || SETTINGS.defaultWeight,\n    height: fm.Height || SETTINGS.defaultHeight,\n    birthdate: fm.Birthdate || SETTINGS.defaultBirthdate\n  };\n}\n\nfunction calculateAge(bd) {\n  if (!bd) return 20;\n  const b = new Date(bd), t = new Date();\n  let a = t.getFullYear() - b.getFullYear();\n  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;\n  return a;\n}\n\nfunction parseStandardValue(val) {\n  if (typeof val !== "string") val = String(val);\n  val = val.trim();\n  if (val.includes("<")) {\n    const num = parseFloat(val.replace(/[<\\s]/g, ""));\n    return !isNaN(num) && num > 0 ? num * 0.5 : 0.1;\n  }\n  const num = parseFloat(val);\n  return isNaN(num) ? 0 : num;\n}\n\nasync function getStrengthStandard(exerciseName) {\n  const filePath = SETTINGS.exerciseDbFolder + "/" + exerciseName + ".md";\n  const fm = getFileMetadata(filePath);\n  const isBW = fm?.Type === "Bodyweight";\n  const content = await readFile(filePath);\n  if (!content) return null;\n  const lines = content.split("\\n");\n  const bwTable = [], ageTable = [];\n  let currentTable = null;\n  for (const line of lines) {\n    if (line.match(/\\|\\s*BW\\s*\\|/i)) { currentTable = "bw"; continue; }\n    if (line.match(/\\|\\s*Age\\s*\\|/i)) { currentTable = "age"; continue; }\n    if (line.startsWith("|---") || line.startsWith("| ---")) continue;\n    const m = line.match(/\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|/);\n    if (m) {\n      const row = { key: parseStandardValue(m[1]), beginner: parseStandardValue(m[2]), novice: parseStandardValue(m[3]), intermediate: parseStandardValue(m[4]), advanced: parseStandardValue(m[5]), elite: parseStandardValue(m[6]) };\n      if (row.key > 0 && (row.beginner > 0 || row.novice > 0 || row.intermediate > 0)) {\n        if (currentTable === "bw") bwTable.push(row);\n        else if (currentTable === "age") ageTable.push(row);\n      }\n    }\n  }\n  return { bwTable, ageTable, isBodyweight: isBW, hasValidData: bwTable.length > 0 || ageTable.length > 0 };\n}\n\nfunction interpolateStandard(table, value) {\n  if (!table || table.length === 0) return null;\n  const sorted = [...table].sort((a, b) => a.key - b.key);\n  let lower = sorted[0], upper = sorted[sorted.length - 1];\n  for (let i = 0; i < sorted.length - 1; i++) {\n    if (sorted[i].key <= value && sorted[i + 1].key >= value) { lower = sorted[i]; upper = sorted[i + 1]; break; }\n  }\n  if (value <= lower.key) return { ...lower };\n  if (value >= upper.key) return { ...upper };\n  const ratio = (value - lower.key) / (upper.key - lower.key);\n  return { key: value, beginner: lower.beginner + ratio * (upper.beginner - lower.beginner), novice: lower.novice + ratio * (upper.novice - lower.novice), intermediate: lower.intermediate + ratio * (upper.intermediate - lower.intermediate), advanced: lower.advanced + ratio * (upper.advanced - lower.advanced), elite: lower.elite + ratio * (upper.elite - lower.elite) };\n}\n\nasync function getAveragedStandards(std) {\n  const stats = await getPersonalStats();\n  const bw = interpolateStandard(std.bwTable, stats.weight);\n  const ag = interpolateStandard(std.ageTable, calculateAge(stats.birthdate));\n  if (bw && ag) return { beginner: (bw.beginner + ag.beginner) / 2, novice: (bw.novice + ag.novice) / 2, intermediate: (bw.intermediate + ag.intermediate) / 2, advanced: (bw.advanced + ag.advanced) / 2, elite: (bw.elite + ag.elite) / 2 };\n  return bw || ag || null;\n}\n\nfunction determineStrengthLevel(cv, std) {\n  if (!std || cv < 0) return { level: "Untrained", color: "#6a6a6a", progress: 0, nextTarget: std?.beginner || 1 };\n  const { beginner, novice, intermediate, advanced, elite } = std;\n  if (cv >= elite) return { level: "Elite", color: "#9a6a7a", progress: 100, nextTarget: null };\n  if (cv >= advanced) return { level: "Advanced", color: "#8a7a9a", progress: ((cv - advanced) / (elite - advanced)) * 100, nextTarget: elite };\n  if (cv >= intermediate) return { level: "Intermediate", color: "#6a8a9a", progress: ((cv - intermediate) / (advanced - intermediate)) * 100, nextTarget: advanced };\n  if (cv >= novice) return { level: "Novice", color: "#7a9a7d", progress: ((cv - novice) / (intermediate - novice)) * 100, nextTarget: intermediate };\n  if (cv >= beginner) return { level: "Beginner", color: "#a89860", progress: ((cv - beginner) / (novice - beginner)) * 100, nextTarget: novice };\n  return { level: "Untrained", color: "#6a6a6a", progress: beginner > 0 ? Math.max(0, (cv / beginner) * 100) : 0, nextTarget: beginner };\n}\n\nasync function calculateStrengthLevel(name, w, r, maxR) {\n  const std = await getStrengthStandard(name);\n  if (!std || !std.hasValidData) return null;\n  const avg = await getAveragedStandards(std);\n  if (!avg) return null;\n  if (std.isBodyweight) {\n    const eff = maxR !== null && maxR !== undefined ? Math.max(r, maxR) : r;\n    const res = determineStrengthLevel(eff, avg);\n    return { ...res, currentValue: eff, isBodyweight: true, unit: "reps", displayLabel: "Max Reps" };\n  } else {\n    if (w <= 0) return null;\n    const est = calculate1RM(w, r);\n    const res = determineStrengthLevel(est, avg);\n    return { ...res, currentValue: est, isBodyweight: false, unit: "kg", displayLabel: "Est. 1RM" };\n  }\n}\n\nasync function hasStrengthStandard(name) {\n  const std = await getStrengthStandard(name);\n  return std !== null && std.hasValidData;\n}\n\n// ============================================================\n// WORKOUT DATA \u2014 PR lookup, previous exercise loading\n// ============================================================\n\nasync function getExercisePR(name) {\n  const std = await getStrengthStandard(name);\n  const isBW = std?.isBodyweight || false;\n  const files = getFilesInFolder(SETTINGS.workoutFolder);\n  let best = null, bestV = 0;\n  for (const f of files) {\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises) && fm.Workout === true) {\n      const ex = fm.exercises.find((e) => e.name === name);\n      if (ex?.sets) {\n        for (const set of ex.sets) {\n          if (!set.isWarmup && set.completed) {\n            if (isBW) {\n              if (set.reps > bestV) { bestV = set.reps; best = { ...set, date: f.basename, prValue: bestV, isBodyweight: true }; }\n            } else if (set.weight > 0) {\n              const est = calculate1RM(set.weight, set.reps);\n              if (est > bestV) { bestV = est; best = { ...set, date: f.basename, estimated1RM: est, prValue: est, isBodyweight: false }; }\n            }\n          }\n        }\n      }\n    }\n  }\n  return best;\n}\n\nfunction getLastWorkoutForMuscleGroup(muscleGroup) {\n  const files = getFilesInFolder(SETTINGS.workoutFolder)\n    .sort((a, b) => b.basename.localeCompare(a.basename));\n  for (const f of files) {\n    if (f.path === file.path) continue; // skip current note\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises)) {\n      const relevant = fm.exercises.filter(ex => ex.muscle === muscleGroup || ex.muscleGroup === muscleGroup);\n      if (relevant.length > 0) return { date: f.basename, exercises: relevant };\n    }\n  }\n  return null;\n}\n\nfunction loadPreviousExercises(selectedMuscleGroups) {\n  const exercisesArray = [];\n  for (const muscle of selectedMuscleGroups) {\n    const lastWorkout = getLastWorkoutForMuscleGroup(muscle);\n    if (lastWorkout) {\n      for (const ex of lastWorkout.exercises) {\n        exercisesArray.push({\n          name: ex.name,\n          muscle: muscle,\n          muscleGroup: muscle,\n          sets: ex.sets ? ex.sets.map(s => ({\n            weight: s.weight || 0,\n            reps: s.reps || 10,\n            completed: false,\n            isWarmup: s.isWarmup || false\n          })) : [{ weight: 0, reps: 10, completed: false, isWarmup: false }]\n        });\n      }\n    }\n  }\n  return exercisesArray;\n}\n\n// ============================================================\n// SAVE STATE\n// ============================================================\n\nasync function saveState() {\n  await setMultipleData({\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n}\n\n// ============================================================\n// MODAL SYSTEM\n// ============================================================\n\nlet activeModal = null;\n\nfunction closeModal() {\n  if (!activeModal) return;\n  activeModal.classList.remove("visible");\n  setTimeout(() => {\n    if (activeModal?.parentNode) activeModal.parentNode.removeChild(activeModal);\n    activeModal = null;\n  }, 500);\n}\n\nfunction createModal(title, contentBuilder) {\n  if (activeModal) { activeModal.parentNode.removeChild(activeModal); activeModal = null; }\n  const modal = document.createElement("div");\n  modal.className = "otw-modal-overlay";\n  activeModal = modal;\n  const modalContent = document.createElement("div");\n  modalContent.className = "otw-modal-content";\n  modal.appendChild(modalContent);\n  addCorners(modalContent, THEME.color);\n  if (title) {\n    const t = document.createElement("h2");\n    t.textContent = title;\n    t.style.cssText = `margin:0;color:${THEME.color};font-size:14px;font-weight:500;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    modalContent.appendChild(t);\n    const d = document.createElement("div");\n    d.style.cssText = `width:60px;height:1px;background:linear-gradient(90deg,transparent,${THEME.color},transparent);margin:0 auto 12px;`;\n    modalContent.appendChild(d);\n  }\n  contentBuilder(modalContent);\n  modal.onclick = (e) => { if (e.target === modal) closeModal(); };\n  document.body.appendChild(modal);\n  requestAnimationFrame(() => modal.classList.add("visible"));\n  return modal;\n}\n\n// ============================================================\n// POST-COMPLETION NAVIGATION\n// ============================================================\n\nfunction getReturnDestination() {\n  // Look up the current activity\'s config from plugin settings\n  const activityId = getData("activity");\n  const activities = ctx.plugin?.settings?.activities;\n  if (activities && activityId) {\n    const actConfig = activities.find(a => a.id === activityId);\n    if (actConfig?.completionReturnTo) return actConfig.completionReturnTo;\n  }\n  return "dashboard"; // default\n}\n\nfunction navigateAfterCompletion() {\n  const dest = getReturnDestination();\n  if (dest === "stay") return; // do nothing, stay on completion summary\n  if (dest === "dashboard") {\n    // Use Olen\'s built-in dashboard activation\n    if (ctx.plugin?.activateDashboardView) {\n      setTimeout(() => ctx.plugin.activateDashboardView(), 600);\n    }\n    return;\n  }\n  if (dest === "homepage") {\n    // Open the global homepage file defined in Profile settings\n    const homepagePath = ctx.plugin?.settings?.homepage;\n    if (!homepagePath) { notice("No homepage set \u2014 go to Olen Settings > Profile to define one."); return; }\n    const targetFile = app.vault.getAbstractFileByPath(homepagePath);\n    if (targetFile) {\n      setTimeout(() => app.workspace.getLeaf(false).openFile(targetFile), 600);\n    } else {\n      notice("Homepage file not found: " + homepagePath);\n    }\n    return;\n  }\n}\n\n// ============================================================\n// FINISH WORKOUT\n// ============================================================\n\nasync function finishWorkout(type) {\n  await setMultipleData({\n    Workout: true,\n    "Workout-Type": type,\n    Timestamp: moment().format(),\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n  notice("Workout logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");\n  navigateAfterCompletion();\n}\n\nasync function openFinishModal() {\n  // Build session analytics data\n  const summaryData = [];\n  for (const ex of exercises) {\n    const completed = ex.sets.filter(s => !s.isWarmup && s.completed);\n    if (completed.length > 0) {\n      const pr = await getExercisePR(ex.name);\n      let bestW = 0, bestR = 0, maxR = 0, sessionBest = 0;\n      for (const s of completed) {\n        if (s.reps > maxR) maxR = s.reps;\n        if (s.weight > 0) {\n          const est = calculate1RM(s.weight, s.reps);\n          if (est > sessionBest) { sessionBest = est; bestW = s.weight; bestR = s.reps; }\n        } else if (s.reps > sessionBest) { sessionBest = s.reps; bestR = s.reps; }\n      }\n      const sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR);\n      summaryData.push({ name: ex.name, muscle: ex.muscle || ex.muscleGroup, bestW, bestR, maxR, sessionBest, sl, pr, completedSets: completed.length, totalSets: ex.sets.filter(s => !s.isWarmup).length });\n    }\n  }\n\n  createModal(null, (content) => {\n    // Scrollable area\n    const scroll = document.createElement("div");\n    scroll.style.cssText = "overflow-y:auto;display:flex;flex-direction:column;gap:16px;flex:1;max-height:70vh;";\n    content.appendChild(scroll);\n\n    // Title\n    const title = document.createElement("h2");\n    title.textContent = "WORKOUT COMPLETE";\n    title.style.cssText = `margin:0;color:${THEME.systemGreen};font-size:16px;font-weight:700;letter-spacing:3px;text-align:center;`;\n    scroll.appendChild(title);\n\n    // Session summary cards\n    if (summaryData.length > 0) {\n      const sec = document.createElement("div");\n      sec.style.cssText = "display:flex;flex-direction:column;gap:12px;";\n      scroll.appendChild(sec);\n\n      const secTitle = document.createElement("div");\n      secTitle.textContent = "SESSION SUMMARY";\n      secTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;`;\n      sec.appendChild(secTitle);\n\n      for (const ex of summaryData) {\n        const card = document.createElement("div");\n        card.style.cssText = `padding:14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};`;\n        sec.appendChild(card);\n\n        // Exercise name + strength badge\n        const hdr = document.createElement("div");\n        hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;";\n        card.appendChild(hdr);\n\n        const nm = document.createElement("span");\n        nm.textContent = ex.name;\n        nm.style.cssText = `color:${THEME.color};font-weight:600;font-size:14px;`;\n        hdr.appendChild(nm);\n\n        if (ex.sl) {\n          const li = STRENGTH_LEVELS[ex.sl.level];\n          const badge = document.createElement("span");\n          badge.style.cssText = `display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:${ex.sl.color}20;border:1px solid ${ex.sl.color}50;color:${ex.sl.color};font-size:11px;font-weight:700;letter-spacing:1px;`;\n          badge.textContent = (li?.icon || "\\u25CB") + " " + ex.sl.level.toUpperCase();\n          hdr.appendChild(badge);\n        }\n\n        // Best set + estimated 1RM\n        const stats = document.createElement("div");\n        stats.style.cssText = `display:flex;justify-content:space-between;margin-bottom:8px;font-size:12px;`;\n        card.appendChild(stats);\n\n        const setInfo = document.createElement("span");\n        setInfo.textContent = ex.sl?.isBodyweight ? "Best: " + ex.maxR + " reps" : "Best: " + ex.bestW + "kg \\u00D7 " + ex.bestR;\n        setInfo.style.cssText = `color:${THEME.colorMuted};`;\n        stats.appendChild(setInfo);\n\n        if (ex.sl) {\n          const rmInfo = document.createElement("span");\n          rmInfo.textContent = ex.sl.displayLabel + ": " + ex.sl.currentValue + ex.sl.unit;\n          rmInfo.style.cssText = `color:${THEME.color};font-weight:600;`;\n          stats.appendChild(rmInfo);\n        }\n\n        // Sets completed\n        const setsInfo = document.createElement("div");\n        setsInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-bottom:8px;`;\n        setsInfo.textContent = ex.completedSets + "/" + ex.totalSets + " working sets completed";\n        card.appendChild(setsInfo);\n\n        // PR comparison\n        if (ex.pr) {\n          const prC = document.createElement("div");\n          prC.style.cssText = `font-size:11px;margin-bottom:8px;padding:6px 8px;`;\n          const cv = ex.sl?.currentValue || ex.sessionBest;\n          if (cv > ex.pr.prValue) {\n            prC.style.background = "rgba(122,154,125,0.15)";\n            prC.innerHTML = \'<span style="color:#7a9a7d;font-weight:700;">\\uD83C\\uDF89 NEW PR!</span> <span style="color:\' + THEME.colorMuted + \';">Previous: \' + ex.pr.prValue + \' \\u2192 Now: \' + cv + \'</span>\';\n          } else if (cv === ex.pr.prValue) {\n            prC.style.background = "rgba(168,152,96,0.1)";\n            prC.innerHTML = \'<span style="color:#a89860;">\\uD83C\\uDFC6 Matched PR:</span> <span style="color:\' + THEME.colorMuted + \';">\' + ex.pr.prValue + \'</span>\';\n          } else {\n            prC.style.background = "rgba(168,152,96,0.1)";\n            prC.innerHTML = \'<span style="color:\' + THEME.colorMuted + \';">\\uD83C\\uDFC6 PR: \' + ex.pr.prValue + \'</span> <span style="color:#6a6a6a;">(today: \' + cv + \')</span>\';\n          }\n          card.appendChild(prC);\n        }\n\n        // Progress bar to next strength level\n        if (ex.sl && ex.sl.nextTarget) {\n          const pb = document.createElement("div");\n          pb.className = "otw-strength-bar";\n          pb.style.marginTop = "8px";\n          card.appendChild(pb);\n          const fill = document.createElement("div");\n          fill.className = "otw-strength-fill";\n          fill.style.cssText = `width:${Math.min(100, ex.sl.progress)}%;background:${ex.sl.color};`;\n          pb.appendChild(fill);\n          const ti = document.createElement("div");\n          ti.style.cssText = `display:flex;justify-content:space-between;font-size:9px;color:${THEME.colorMuted};margin-top:4px;`;\n          ti.innerHTML = "<span>Current: " + ex.sl.currentValue + ex.sl.unit + "</span><span>Next: " + Math.round(ex.sl.nextTarget) + ex.sl.unit + "</span>";\n          card.appendChild(ti);\n        }\n      }\n    }\n\n    // "How did it feel?" section\n    const feelTitle = document.createElement("h3");\n    feelTitle.textContent = "How did it feel?";\n    feelTitle.style.cssText = `margin:8px 0 0 0;color:${THEME.color};font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    scroll.appendChild(feelTitle);\n\n    const btns = document.createElement("div");\n    btns.style.cssText = "display:flex;flex-direction:column;gap:10px;";\n    scroll.appendChild(btns);\n\n    // Discipline button\n    const discBtn = document.createElement("div");\n    discBtn.className = "otw-feel-btn";\n    discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;\n    discBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\\uD83D\\uDC8E</span><div style="flex:1;"><div style="color:${THEME.colorDiscipline};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through resistance</div></div><div style="color:#4a4030;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    discBtn.onclick = async () => { closeModal(); await finishWorkout("discipline"); };\n    btns.appendChild(discBtn);\n\n    // Flow button\n    const flowBtn = document.createElement("div");\n    flowBtn.className = "otw-feel-btn";\n    flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;\n    flowBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\\uD83C\\uDF0A</span><div style="flex:1;"><div style="color:${THEME.colorFlow};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Felt natural and effortless</div></div><div style="color:#304050;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    flowBtn.onclick = async () => { closeModal(); await finishWorkout("flow"); };\n    btns.appendChild(flowBtn);\n  });\n}\n\n// ============================================================\n// ADD EXERCISE MODAL\n// ============================================================\n\nfunction openAddExerciseModal(muscle) {\n  createModal("Add Exercise - " + muscle, (content) => {\n    const nameInput = document.createElement("input");\n    nameInput.type = "text";\n    nameInput.placeholder = "Exercise name...";\n    nameInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;`;\n    content.appendChild(nameInput);\n\n    const warmupLabel = document.createElement("div");\n    warmupLabel.textContent = "Include warmup sets?";\n    warmupLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(warmupLabel);\n\n    let incWarmup = true;\n    const warmupRow = document.createElement("div");\n    warmupRow.style.cssText = "display:flex;gap:8px;margin-top:8px;";\n    content.appendChild(warmupRow);\n\n    const yesBtn = document.createElement("button");\n    yesBtn.textContent = "Yes (suggested)";\n    yesBtn.className = "otw-btn otw-btn-secondary";\n    yesBtn.style.cssText += `flex:1;background:rgba(154,140,122,0.2);border-color:${THEME.color};color:${THEME.color};`;\n    const noBtn = document.createElement("button");\n    noBtn.textContent = "No";\n    noBtn.className = "otw-btn otw-btn-secondary";\n    noBtn.style.flex = "1";\n    yesBtn.onclick = () => { incWarmup = true; yesBtn.style.background = "rgba(154,140,122,0.2)"; yesBtn.style.borderColor = THEME.color; noBtn.style.background = "#0f0f0f"; noBtn.style.borderColor = THEME.colorBorder; };\n    noBtn.onclick = () => { incWarmup = false; noBtn.style.background = "rgba(154,140,122,0.2)"; noBtn.style.borderColor = THEME.color; yesBtn.style.background = "#0f0f0f"; yesBtn.style.borderColor = THEME.colorBorder; };\n    warmupRow.appendChild(yesBtn);\n    warmupRow.appendChild(noBtn);\n\n    const weightLabel = document.createElement("div");\n    weightLabel.textContent = "Working weight (kg) - 0 for bodyweight";\n    weightLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(weightLabel);\n\n    const weightInput = document.createElement("input");\n    weightInput.type = "number";\n    weightInput.placeholder = "0";\n    weightInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;margin-top:8px;`;\n    content.appendChild(weightInput);\n\n    const btnRow = document.createElement("div");\n    btnRow.style.cssText = "display:flex;gap:12px;margin-top:16px;";\n    content.appendChild(btnRow);\n\n    const cancelBtn = document.createElement("button");\n    cancelBtn.textContent = "Cancel";\n    cancelBtn.className = "otw-btn otw-btn-secondary";\n    cancelBtn.style.flex = "1";\n    cancelBtn.onclick = () => closeModal();\n    btnRow.appendChild(cancelBtn);\n\n    const addBtn = document.createElement("button");\n    addBtn.textContent = "Add Exercise";\n    addBtn.className = "otw-btn otw-btn-primary";\n    addBtn.style.flex = "1";\n    addBtn.onclick = async () => {\n      const name = nameInput.value.trim();\n      if (!name) { notice("Please enter an exercise name"); return; }\n      const ww = parseFloat(weightInput.value) || 0;\n      const sets = [];\n      if (incWarmup && ww > 0) {\n        sets.push({ weight: Math.round(ww * 0.5), reps: 10, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.7), reps: 6, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.85), reps: 3, completed: false, isWarmup: true });\n      }\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      exercises.push({ name, muscle, muscleGroup: muscle, sets });\n      closeModal();\n      await saveState();\n      render();\n    };\n    btnRow.appendChild(addBtn);\n\n    setTimeout(() => nameInput.focus(), 100);\n  });\n}\n\n// ============================================================\n// RENDER: SET ROW\n// ============================================================\n\nfunction renderSet(setsContainer, set, setIdx, ex, warmupRefs) {\n  const row = document.createElement("div");\n  row.className = "otw-set-row" + (set.completed ? " completed" : "");\n  setsContainer.appendChild(row);\n  const refs = { weightInput: null };\n\n  // Checkbox\n  const cb = document.createElement("div");\n  cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n  cb.textContent = set.completed ? "\\u2713" : "";\n  cb.onclick = async () => {\n    set.completed = !set.completed;\n    cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n    cb.textContent = set.completed ? "\\u2713" : "";\n    row.className = "otw-set-row" + (set.completed ? " completed" : "");\n    await saveState();\n  };\n  row.appendChild(cb);\n\n  // Middle: weight + reps\n  const mid = document.createElement("div");\n  mid.style.cssText = "display:flex;align-items:center;gap:12px;flex-wrap:wrap;";\n  row.appendChild(mid);\n\n  // Weight input\n  const wWrap = document.createElement("div");\n  wWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(wWrap);\n  const wInput = document.createElement("input");\n  wInput.type = "number";\n  wInput.value = set.weight;\n  wInput.className = "otw-input";\n  const firstW = getFirstWorkingSetIndex(ex.sets);\n  const isFirst = !set.isWarmup && setIdx === firstW;\n  wInput.onchange = async (e) => {\n    const nw = parseFloat(e.target.value) || 0;\n    set.weight = nw;\n    if (isFirst) {\n      updateWarmupWeights(ex, nw);\n      const ws = ex.sets.filter((s) => s.isWarmup);\n      warmupRefs.forEach((inp, i) => { if (ws[i]) inp.value = ws[i].weight; });\n    }\n    await saveState();\n  };\n  wWrap.appendChild(wInput);\n  refs.weightInput = wInput;\n  const kgLabel = document.createElement("span");\n  kgLabel.textContent = "kg";\n  kgLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;`;\n  wWrap.appendChild(kgLabel);\n\n  // Reps controls\n  const rWrap = document.createElement("div");\n  rWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(rWrap);\n  const minusBtn = document.createElement("button");\n  minusBtn.className = "otw-ctrl-btn";\n  minusBtn.textContent = "\\u2212";\n  minusBtn.onclick = async () => { if (set.reps > 1) { set.reps--; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); } };\n  rWrap.appendChild(minusBtn);\n  const rDisp = document.createElement("span");\n  rDisp.textContent = set.reps + "\\u00D7";\n  rDisp.style.cssText = `color:${THEME.color};font-size:14px;font-weight:600;min-width:30px;text-align:center;`;\n  rWrap.appendChild(rDisp);\n  const plusBtn = document.createElement("button");\n  plusBtn.className = "otw-ctrl-btn";\n  plusBtn.textContent = "+";\n  plusBtn.onclick = async () => { set.reps++; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); };\n  rWrap.appendChild(plusBtn);\n\n  if (set.isWarmup) {\n    const badge = document.createElement("span");\n    badge.className = "otw-warmup-badge";\n    badge.textContent = "\\u26A1 Warmup";\n    mid.appendChild(badge);\n  }\n\n  // Delete set button\n  if (ex.sets.length > 1) {\n    const delBtn = document.createElement("button");\n    delBtn.textContent = "\\u00D7";\n    delBtn.style.cssText = `width:28px;height:28px;background:transparent;border:1px solid #3a2828;color:#6a4a4a;cursor:pointer;font-size:16px;`;\n    delBtn.onclick = async () => { ex.sets.splice(setIdx, 1); await saveState(); render(); };\n    row.appendChild(delBtn);\n  } else {\n    const ph = document.createElement("div");\n    ph.style.width = "28px";\n    row.appendChild(ph);\n  }\n\n  return refs;\n}\n\n// ============================================================\n// RENDER: EXERCISE CARD\n// ============================================================\n\nasync function renderExercise(exContainer, ex) {\n  const card = document.createElement("div");\n  card.className = "otw-card";\n  exContainer.appendChild(card);\n  addCorners(card, THEME.color, 12);\n\n  const exHeader = document.createElement("div");\n  exHeader.style.cssText = `display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid ${THEME.colorBorder};`;\n  card.appendChild(exHeader);\n\n  const leftCol = document.createElement("div");\n  leftCol.style.flex = "1";\n  exHeader.appendChild(leftCol);\n\n  const exTitle = document.createElement("h3");\n  exTitle.textContent = ex.name;\n  exTitle.style.cssText = `margin:0 0 8px 0;color:${THEME.color};font-size:16px;letter-spacing:1px;`;\n  leftCol.appendChild(exTitle);\n\n  // Strength level + PR info\n  const hasStd = await hasStrengthStandard(ex.name);\n  const pr = await getExercisePR(ex.name);\n  const workingSets = ex.sets.filter((s) => !s.isWarmup);\n  let bestW = 0, bestR = 0, maxR = 0;\n  workingSets.forEach((s) => { if (s.reps > maxR) maxR = s.reps; if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; } });\n\n  if (hasStd) {\n    let sl;\n    if (pr) { sl = pr.isBodyweight ? await calculateStrengthLevel(ex.name, 0, pr.prValue, pr.prValue) : await calculateStrengthLevel(ex.name, pr.weight, pr.reps, null); }\n    else if (bestW > 0 || maxR > 0) { sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR); }\n    if (sl) {\n      const li = STRENGTH_LEVELS[sl.level];\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText += `background:${sl.color}25;border:1px solid ${sl.color}60;color:${sl.color};`;\n      badge.textContent = (li?.icon || "\\u25CB") + " " + sl.level.toUpperCase();\n      leftCol.appendChild(badge);\n\n      const rmInfo = document.createElement("div");\n      rmInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-top:6px;`;\n      rmInfo.innerHTML = `<strong style="color:${THEME.color}">${sl.displayLabel}: ${sl.currentValue}${sl.unit}</strong>`;\n      if (sl.nextTarget) rmInfo.innerHTML += ` \\u2192 Next: ${Math.round(sl.nextTarget)}${sl.unit}`;\n      leftCol.appendChild(rmInfo);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      leftCol.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, sl.progress)}%;background:${sl.color};`;\n      pb.appendChild(fill);\n    }\n  }\n\n  if (pr) {\n    const prBox = document.createElement("div");\n    prBox.className = "otw-pr-box";\n    const prTitle = document.createElement("div");\n    prTitle.style.cssText = "font-size:11px;color:#a89860;font-weight:700;letter-spacing:1px;";\n    prTitle.textContent = pr.isBodyweight ? "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.prValue + " reps" : "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.estimated1RM + "kg (1RM)";\n    prBox.appendChild(prTitle);\n    const prDetail = document.createElement("div");\n    prDetail.style.cssText = `font-size:10px;color:${THEME.colorMuted};`;\n    prDetail.textContent = pr.isBodyweight ? "Best: " + pr.reps + " reps" : "Set: " + pr.weight + "kg \\u00D7 " + pr.reps + " reps";\n    prBox.appendChild(prDetail);\n    leftCol.appendChild(prBox);\n  }\n\n  // Delete exercise button\n  const delExBtn = document.createElement("button");\n  delExBtn.textContent = "\\uD83D\\uDDD1\\uFE0F";\n  delExBtn.style.cssText = "background:transparent;border:none;cursor:pointer;font-size:14px;opacity:0.5;";\n  delExBtn.onclick = async () => { const idx = exercises.indexOf(ex); if (idx > -1) { exercises.splice(idx, 1); await saveState(); render(); } };\n  exHeader.appendChild(delExBtn);\n\n  // Sets\n  const setsContainer = document.createElement("div");\n  setsContainer.style.cssText = "display:flex;flex-direction:column;gap:6px;";\n  card.appendChild(setsContainer);\n  const warmupRefs = [];\n  ex.sets.forEach((set, setIdx) => {\n    const refs = renderSet(setsContainer, set, setIdx, ex, warmupRefs);\n    if (set.isWarmup && refs.weightInput) warmupRefs.push(refs.weightInput);\n  });\n\n  // Add set button\n  const addSetBtn = document.createElement("button");\n  addSetBtn.textContent = "+ Add Set";\n  addSetBtn.className = "otw-btn otw-btn-dashed";\n  addSetBtn.style.cssText += "margin-top:8px;padding:8px 12px;font-size:12px;";\n  addSetBtn.onclick = async () => {\n    const last = ex.sets[ex.sets.length - 1] || { weight: 0, reps: 10 };\n    ex.sets.push({ weight: last.weight, reps: last.reps, completed: false, isWarmup: false });\n    await saveState();\n    render();\n  };\n  card.appendChild(addSetBtn);\n}\n\n// ============================================================\n// STATISTICS & HEATMAP DATA\n// ============================================================\n\n// Map muscle/subgroup names \u2192 body regions for the heatmap\nconst MUSCLE_TO_REGION = {\n  Neck: ["neck"], Chest: ["chest"], Core: ["core"],\n  Back: ["lats", "traps", "lower_back"], Lats: ["lats"], Traps: ["traps"],\n  Rhomboids: ["traps"], "Lower Back": ["lower_back"], "Rear Delts": ["rear_delts"],\n  Shoulders: ["front_delts", "rear_delts"], "Front Delts": ["front_delts"],\n  "Side Delts": ["front_delts"],\n  Legs: ["quads", "hamstrings", "glutes", "calves"], Quads: ["quads"],\n  Hamstrings: ["hamstrings"], Glutes: ["glutes"], Calves: ["calves"],\n  Adductors: ["quads"],\n  Arms: ["biceps", "triceps", "forearms"], Biceps: ["biceps"],\n  Triceps: ["triceps"], Forearms: ["forearms"],\n};\n\nfunction getWeeklyCalendarData() {\n  const today = moment().startOf("day");\n  const weekStart = today.clone().startOf("isoWeek");\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const days = [];\n  for (let i = 0; i < 7; i++) {\n    const day = weekStart.clone().add(i, "days");\n    const dayStr = day.format("YYYY-MM-DD");\n    const isToday = day.isSame(today, "day");\n    const isPast = day.isBefore(today, "day");\n    let status = null, type = null;\n    for (const wFile of allFiles) {\n      if (wFile.basename === dayStr) {\n        const fm = getFileMetadata(wFile.path);\n        if (fm && fm.Workout === true) { status = "done"; type = fm["Workout-Type"] || "done"; }\n        break;\n      }\n    }\n    days.push({ label: day.format("dd")[0], num: day.format("D"), isToday, isPast, status, type });\n  }\n  return days;\n}\n\nfunction getMonthlyStats() {\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const now = moment();\n  const weekStart = now.clone().startOf("isoWeek");\n  const monthStart = now.clone().startOf("month");\n  let thisWeek = 0, thisMonth = 0, total = 0, totalSets = 0, totalVolume = 0;\n  for (const wFile of allFiles) {\n    const fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true) continue;\n    total++;\n    const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n    if (!dateMatch) continue;\n    const fileDate = moment(dateMatch[1], "YYYY-MM-DD");\n    if (fileDate.isSameOrAfter(weekStart)) thisWeek++;\n    if (fileDate.isSameOrAfter(monthStart)) thisMonth++;\n    if (Array.isArray(fm.exercises)) {\n      for (const ex of fm.exercises) {\n        if (!Array.isArray(ex.sets)) continue;\n        for (const s of ex.sets) {\n          if (s.completed && !s.isWarmup) { totalSets++; totalVolume += (s.weight || 0) * (s.reps || 0); }\n        }\n      }\n    }\n  }\n  return { thisWeek, thisMonth, total, totalSets, totalVolume };\n}\n\nfunction getRecentSessions(limit) {\n  limit = limit || 4;\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const sorted = allFiles.sort(function(a, b) { return b.basename.localeCompare(a.basename); });\n  const sessions = [];\n  for (var i = 0; i < sorted.length; i++) {\n    if (sessions.length >= limit) break;\n    var wFile = sorted[i];\n    if (wFile.path === file.path) continue;\n    var fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true) continue;\n    var dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n    sessions.push({\n      date: dateMatch ? dateMatch[1] : wFile.basename,\n      type: fm["Workout-Type"] || "done",\n      muscles: fm.muscleGroups || [],\n    });\n  }\n  return sessions;\n}\n\n// Build strength level data per body region from ALL completed workouts\nasync function getMuscleLevelData() {\n  const exerciseBest = {}; // exerciseName \u2192 { weight, reps, maxReps, muscle }\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  for (const wFile of allFiles) {\n    if (wFile.path === file.path) continue;\n    const fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n    for (const ex of fm.exercises) {\n      const done = (ex.sets || []).filter(function(s) { return s.completed && !s.isWarmup; });\n      if (done.length === 0) continue;\n      let bestW = 0, bestR = 0, maxR = 0;\n      for (const s of done) {\n        if (s.reps > maxR) maxR = s.reps;\n        if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; }\n      }\n      const existing = exerciseBest[ex.name];\n      if (!existing) {\n        exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };\n      } else {\n        const oldVal = existing.weight > 0 ? calculate1RM(existing.weight, existing.reps) : existing.maxReps;\n        const newVal = bestW > 0 ? calculate1RM(bestW, bestR) : maxR;\n        if (newVal > oldVal) exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };\n      }\n    }\n  }\n  // Calculate strength level per exercise, map to body regions\n  const regionEntries = {};\n  for (const [exName, data] of Object.entries(exerciseBest)) {\n    const sl = await calculateStrengthLevel(exName, data.weight, data.reps, data.maxReps);\n    if (!sl) continue;\n    const regions = MUSCLE_TO_REGION[data.muscle] || [];\n    for (const region of regions) {\n      if (!regionEntries[region]) regionEntries[region] = [];\n      regionEntries[region].push({ level: sl.level, color: sl.color, progress: sl.progress });\n    }\n  }\n  // Pick the best strength level per region\n  const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];\n  const result = {};\n  for (const [region, entries] of Object.entries(regionEntries)) {\n    let best = entries[0], bestIdx = levelOrder.indexOf(entries[0].level);\n    for (let i = 1; i < entries.length; i++) {\n      const idx = levelOrder.indexOf(entries[i].level);\n      if (idx > bestIdx) { bestIdx = idx; best = entries[i]; }\n    }\n    result[region] = best;\n  }\n  return result;\n}\n\n// ============================================================\n// BODY HEATMAP SVG\n// ============================================================\n\nfunction buildBodySvg(view, muscleLevels) {\n  // view: "front" or "back"\n  // muscleLevels: { region: { level, color, progress } }\n  const untrained = "#1a1816";\n  function fill(region) {\n    const d = muscleLevels[region];\n    return d ? d.color + "90" : untrained; // 90 = ~56% alpha hex\n  }\n  function stroke(region) {\n    const d = muscleLevels[region];\n    return d ? d.color + "40" : "#2a2520";\n  }\n\n  // SVG paths for each region \u2014 stylized anatomical figure\n  // ViewBox: 0 0 100 210\n  const head = \'<ellipse cx="50" cy="14" rx="10" ry="11" fill="#0c0c0c" stroke="#2a2520" stroke-width="0.8"/>\';\n\n  // \u2500\u2500 FRONT VIEW REGIONS \u2500\u2500\n  const frontPaths = {\n    neck:       \'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>\',\n    front_delts:\'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>\',\n    chest:      \'<path d="M31,37 L49,37 L49,55 C49,57 42,60 33,58 L31,56 Z"/><path d="M51,37 L69,37 L69,56 L67,58 C58,60 51,57 51,55 Z"/>\',\n    biceps:     \'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>\',\n    forearms:   \'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>\',\n    core:       \'<path d="M33,58 L67,58 L65,82 L35,82 Z"/>\',\n    quads:      \'<path d="M35,84 L49,84 L48,136 L34,136 Z"/><path d="M51,84 L65,84 L66,136 L52,136 Z"/>\',\n    calves:     \'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>\',\n  };\n\n  // \u2500\u2500 BACK VIEW REGIONS \u2500\u2500\n  const backPaths = {\n    neck:       \'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>\',\n    traps:      \'<path d="M39,33 L50,27 L61,33 L59,43 L50,39 L41,43 Z"/>\',\n    rear_delts: \'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>\',\n    lats:       \'<path d="M33,43 L41,43 L50,39 L59,43 L67,43 L65,66 L50,70 L35,66 Z"/>\',\n    triceps:    \'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>\',\n    forearms:   \'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>\',\n    lower_back: \'<path d="M35,66 L50,70 L65,66 L65,82 L35,82 Z"/>\',\n    glutes:     \'<path d="M35,82 L49,82 L49,94 C47,98 37,98 35,94 Z"/><path d="M51,82 L65,82 L65,94 C63,98 53,98 51,94 Z"/>\',\n    hamstrings: \'<path d="M35,96 L49,96 L48,136 L34,136 Z"/><path d="M51,96 L65,96 L66,136 L52,136 Z"/>\',\n    calves:     \'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>\',\n  };\n\n  const regions = view === "front" ? frontPaths : backPaths;\n  let paths = "";\n  for (const [region, pathData] of Object.entries(regions)) {\n    paths += \'<g fill="\' + fill(region) + \'" stroke="\' + stroke(region) + \'" stroke-width="0.6">\' + pathData + \'</g>\';\n  }\n\n  const label = view === "front" ? "FRONT" : "BACK";\n  return \'<svg class="otw-heatmap-svg" viewBox="0 0 100 210" xmlns="http://www.w3.org/2000/svg">\'\n    + head + paths\n    + \'<text x="50" y="207" text-anchor="middle" fill="#4a4030" font-size="8" font-family="Georgia,serif" letter-spacing="2">\' + label + \'</text>\'\n    + \'</svg>\';\n}\n\n// ============================================================\n// RENDER: STATS DASHBOARD\n// ============================================================\n\nasync function renderStatsSection(root) {\n  // Weekly calendar\n  const weekLabel = document.createElement("div");\n  weekLabel.className = "otw-section-label";\n  weekLabel.textContent = "THIS WEEK";\n  root.appendChild(weekLabel);\n\n  const weekData = getWeeklyCalendarData();\n  const weekGrid = document.createElement("div");\n  weekGrid.className = "otw-week-grid";\n  root.appendChild(weekGrid);\n\n  for (const day of weekData) {\n    const cell = document.createElement("div");\n    cell.className = "otw-week-day" + (day.isToday ? " today" : "") + (day.status ? " done" : "");\n    const lbl = document.createElement("div");\n    lbl.className = "otw-day-label";\n    lbl.textContent = day.label;\n    cell.appendChild(lbl);\n    const num = document.createElement("div");\n    num.className = "otw-day-num";\n    num.textContent = day.num;\n    cell.appendChild(num);\n    const icon = document.createElement("div");\n    icon.className = "otw-day-icon";\n    if (day.status === "done") {\n      if (day.type === "discipline") { icon.textContent = "\\uD83D\\uDC8E"; }\n      else if (day.type === "flow") { icon.textContent = "\\uD83C\\uDF0A"; }\n      else { icon.textContent = "\\u2713"; icon.style.color = THEME.systemGreen; }\n    } else if (day.isToday) {\n      icon.textContent = "\\u2022"; icon.style.color = THEME.color; icon.style.animation = "otw-pulse-glow 2s ease-in-out infinite";\n    } else if (day.isPast) {\n      icon.textContent = "\\u2014"; icon.style.color = "#2a2520";\n    }\n    cell.appendChild(icon);\n    weekGrid.appendChild(cell);\n  }\n\n  // Stat counters\n  const stats = getMonthlyStats();\n  const statRow = document.createElement("div");\n  statRow.className = "otw-stat-row";\n  statRow.style.marginTop = "10px";\n  root.appendChild(statRow);\n\n  const statItems = [\n    { value: stats.thisWeek, label: "This week" },\n    { value: stats.thisMonth, label: "This month" },\n    { value: stats.total, label: "All time" },\n  ];\n  for (const item of statItems) {\n    const box = document.createElement("div");\n    box.className = "otw-stat-box";\n    const val = document.createElement("div");\n    val.className = "otw-stat-value";\n    val.textContent = item.value;\n    box.appendChild(val);\n    const lbl = document.createElement("div");\n    lbl.className = "otw-stat-label";\n    lbl.textContent = item.label;\n    box.appendChild(lbl);\n    statRow.appendChild(box);\n  }\n\n  // Volume row\n  if (stats.totalVolume > 0) {\n    const volRow = document.createElement("div");\n    volRow.className = "otw-stat-row";\n    volRow.style.cssText = "margin-top:6px;grid-template-columns:1fr 1fr;";\n    root.appendChild(volRow);\n    const volBox = document.createElement("div");\n    volBox.className = "otw-stat-box";\n    const volVal = document.createElement("div");\n    volVal.className = "otw-stat-value";\n    volVal.style.fontSize = "18px";\n    volVal.textContent = stats.totalVolume >= 1000 ? Math.round(stats.totalVolume / 1000) + "k" : stats.totalVolume;\n    volBox.appendChild(volVal);\n    const volLbl = document.createElement("div");\n    volLbl.className = "otw-stat-label";\n    volLbl.textContent = "Total kg lifted";\n    volBox.appendChild(volLbl);\n    volRow.appendChild(volBox);\n\n    const setsBox = document.createElement("div");\n    setsBox.className = "otw-stat-box";\n    const setsVal = document.createElement("div");\n    setsVal.className = "otw-stat-value";\n    setsVal.style.fontSize = "18px";\n    setsVal.textContent = stats.totalSets;\n    setsBox.appendChild(setsVal);\n    const setsLbl = document.createElement("div");\n    setsLbl.className = "otw-stat-label";\n    setsLbl.textContent = "Total sets";\n    setsBox.appendChild(setsLbl);\n    volRow.appendChild(setsBox);\n  }\n\n  // Body Strength Heatmap\n  const hmLabel = document.createElement("div");\n  hmLabel.className = "otw-section-label";\n  hmLabel.style.marginTop = "24px";\n  hmLabel.textContent = "BODY STRENGTH MAP";\n  root.appendChild(hmLabel);\n\n  const muscleLevels = await getMuscleLevelData();\n  const hmWrap = document.createElement("div");\n  hmWrap.className = "otw-heatmap-wrap";\n  hmWrap.innerHTML = buildBodySvg("front", muscleLevels) + buildBodySvg("back", muscleLevels);\n  root.appendChild(hmWrap);\n\n  // Legend\n  const legend = document.createElement("div");\n  legend.className = "otw-heatmap-legend";\n  const legendItems = [\n    { label: "Untrained", color: "#6a6a6a" },\n    { label: "Beginner", color: "#a89860" },\n    { label: "Novice", color: "#7a9a7d" },\n    { label: "Intermediate", color: "#6a8a9a" },\n    { label: "Advanced", color: "#8a7a9a" },\n    { label: "Elite", color: "#9a6a7a" },\n  ];\n  for (const item of legendItems) {\n    const li = document.createElement("div");\n    li.className = "otw-heatmap-legend-item";\n    const dot = document.createElement("div");\n    dot.className = "otw-heatmap-legend-dot";\n    dot.style.background = item.color;\n    li.appendChild(dot);\n    const txt = document.createElement("span");\n    txt.textContent = item.label;\n    li.appendChild(txt);\n    legend.appendChild(li);\n  }\n  root.appendChild(legend);\n\n  // Recent sessions\n  const recent = getRecentSessions(4);\n  if (recent.length > 0) {\n    const recLabel = document.createElement("div");\n    recLabel.className = "otw-section-label";\n    recLabel.style.marginTop = "24px";\n    recLabel.textContent = "RECENT SESSIONS";\n    root.appendChild(recLabel);\n    for (const s of recent) {\n      const row = document.createElement("div");\n      row.className = "otw-recent-row";\n      const dateEl = document.createElement("span");\n      dateEl.className = "otw-recent-date";\n      dateEl.textContent = moment(s.date, "YYYY-MM-DD").format("MMM D");\n      row.appendChild(dateEl);\n      const musclesEl = document.createElement("span");\n      musclesEl.className = "otw-recent-muscles";\n      musclesEl.textContent = s.muscles.join(", ") || "\\u2014";\n      row.appendChild(musclesEl);\n      const badge = document.createElement("span");\n      badge.className = "otw-recent-badge";\n      if (s.type === "discipline") {\n        badge.textContent = "\\uD83D\\uDC8E";\n        badge.style.cssText += "background:rgba(168,152,96,0.15);color:" + THEME.colorDiscipline + ";";\n      } else if (s.type === "flow") {\n        badge.textContent = "\\uD83C\\uDF0A";\n        badge.style.cssText += "background:rgba(106,138,154,0.15);color:" + THEME.colorFlow + ";";\n      } else {\n        badge.textContent = "\\u2713";\n        badge.style.cssText += "background:rgba(122,154,125,0.15);color:" + THEME.systemGreen + ";";\n      }\n      row.appendChild(badge);\n      root.appendChild(row);\n    }\n  }\n}\n\n// ============================================================\n// RENDER: MUSCLE GROUP SELECTION (first-time entry)\n// ============================================================\n\nasync function renderMuscleSelection(root) {\n  const selectedMuscles = new Set();\n  const selectedSubgroups = new Map();\n\n  // Header\n  const header = document.createElement("div");\n  header.className = "otw-card otw-card-breathe otw-header";\n  addCorners(header, THEME.color);\n  header.innerHTML = `\n    <div style="font-size:32px;margin-bottom:12px;">\\uD83C\\uDFCB\\uFE0F</div>\n    <h2 class="otw-title">NEW WORKOUT</h2>\n    <div class="otw-progress-label">Select muscle groups to train</div>\n  `;\n  root.appendChild(header);\n\n  // Stats dashboard\n  await renderStatsSection(root);\n\n  // Divider before muscle selection\n  const selLabel = document.createElement("div");\n  selLabel.className = "otw-section-label";\n  selLabel.style.marginTop = "28px";\n  selLabel.textContent = "SELECT MUSCLE GROUPS";\n  root.appendChild(selLabel);\n\n  // Muscle group grid\n  const muscleGrid = document.createElement("div");\n  muscleGrid.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:8px;";\n  root.appendChild(muscleGrid);\n\n  // Subgroup area (below the grid)\n  const subgroupArea = document.createElement("div");\n  subgroupArea.style.cssText = "display:flex;flex-direction:column;gap:8px;width:100%;";\n  root.appendChild(subgroupArea);\n\n  Object.entries(MUSCLE_GROUPS).forEach(([name, config]) => {\n    const btn = document.createElement("button");\n    btn.className = "otw-muscle-toggle";\n    btn.textContent = `${config.icon} ${name}`;\n    muscleGrid.appendChild(btn);\n\n    let subgroupContainer = null;\n    if (config.subgroups) {\n      subgroupContainer = document.createElement("div");\n      subgroupContainer.className = "otw-subgroup-container";\n      subgroupContainer.style.cssText += `display:flex;flex-wrap:wrap;gap:8px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:4px;`;\n      const subLabel = document.createElement("div");\n      subLabel.style.cssText = `width:100%;color:${THEME.colorMuted};font-size:11px;margin-bottom:4px;`;\n      subLabel.textContent = name + " subgroups:";\n      subgroupContainer.appendChild(subLabel);\n      selectedSubgroups.set(name, new Set());\n\n      config.subgroups.forEach(sub => {\n        const subBtn = document.createElement("button");\n        subBtn.className = "otw-sub-toggle";\n        subBtn.textContent = sub;\n        subBtn.onclick = (e) => {\n          e.stopPropagation();\n          const subs = selectedSubgroups.get(name);\n          if (subs.has(sub)) { subs.delete(sub); subBtn.classList.remove("active"); }\n          else { subs.add(sub); subBtn.classList.add("active"); }\n        };\n        subgroupContainer.appendChild(subBtn);\n      });\n      subgroupArea.appendChild(subgroupContainer);\n    }\n\n    btn.onclick = () => {\n      if (selectedMuscles.has(name)) {\n        selectedMuscles.delete(name);\n        btn.classList.remove("active");\n        if (subgroupContainer) subgroupContainer.classList.remove("expanded");\n      } else {\n        selectedMuscles.add(name);\n        btn.classList.add("active");\n        if (subgroupContainer) subgroupContainer.classList.add("expanded");\n      }\n    };\n  });\n\n  // Quote\n  const quote = document.createElement("div");\n  quote.style.cssText = `padding:16px;background:#0c0c0c;border-left:2px solid ${THEME.color};margin:16px 0;`;\n  quote.innerHTML = `<p style="color:${THEME.colorMuted};font-style:italic;font-size:12px;margin:0;">"There is a general principle here: <strong style="color:${THEME.color};">perform any amount of warming-up that you believe to be minimally required.</strong>"</p><p style="color:${THEME.colorMuted};font-size:11px;margin:8px 0 0 0;text-align:right;">\\u2014 Mike Mentzer</p>`;\n  root.appendChild(quote);\n\n  // Start button\n  const startBtn = document.createElement("button");\n  startBtn.textContent = "\\uD83C\\uDFCB\\uFE0F START WORKOUT";\n  startBtn.className = "otw-btn otw-btn-primary";\n  startBtn.style.cssText += "padding:16px 24px;font-size:15px;font-weight:700;";\n  startBtn.onclick = async () => {\n    if (selectedMuscles.size === 0) { notice("Please select at least one muscle group"); return; }\n\n    // Build final muscle list: use subgroups if selected, otherwise the parent group\n    const muscleGroupsArray = [];\n    selectedMuscles.forEach(muscle => {\n      const subs = selectedSubgroups.get(muscle);\n      if (subs && subs.size > 0) {\n        subs.forEach(sub => muscleGroupsArray.push(sub));\n      } else {\n        muscleGroupsArray.push(muscle);\n      }\n    });\n\n    // Load previous exercises for these muscle groups\n    const loadedExercises = loadPreviousExercises(muscleGroupsArray);\n\n    // Save to frontmatter and update local state\n    muscleGroups = muscleGroupsArray;\n    exercises = loadedExercises;\n    currentMuscleIndex = 0;\n\n    await setMultipleData({\n      muscleGroups: muscleGroups,\n      exercises: exercises,\n      currentMuscleIndex: 0,\n      Workout: false,\n      "Workout-Type": "",\n      Timestamp: moment().format(),\n    });\n\n    // Re-render \u2014 now we\'ll enter workout tracking mode\n    render();\n  };\n  root.appendChild(startBtn);\n}\n\n// ============================================================\n// MAIN RENDER\n// ============================================================\n\nasync function render() {\n  container.innerHTML = "";\n  const root = document.createElement("div");\n  root.className = "otw-container";\n  container.appendChild(root);\n\n  // If workout is already completed, show summary\n  if (isCompleted && getData("Workout-Type")) {\n    const wType = getData("Workout-Type");\n    const summaryCard = document.createElement("div");\n    summaryCard.className = "otw-card otw-card-breathe";\n    summaryCard.style.textAlign = "center";\n    summaryCard.style.padding = "32px";\n    addCorners(summaryCard, THEME.systemGreen);\n    summaryCard.innerHTML = `\n      <div style="font-size:32px;margin-bottom:12px;">${wType === "discipline" ? "\\uD83D\\uDC8E" : "\\uD83C\\uDF0A"}</div>\n      <h2 style="margin:0;color:${THEME.systemGreen};font-size:16px;letter-spacing:3px;text-transform:uppercase;">WORKOUT COMPLETE</h2>\n      <div style="color:${THEME.colorMuted};font-size:13px;margin-top:8px;font-style:italic;">${wType === "discipline" ? "Discipline Win" : "Flow State"}</div>\n      <div style="color:${THEME.colorMuted};font-size:11px;margin-top:16px;">${moment(getData("Timestamp")).format("MMM D, YYYY \\u2014 h:mm A")}</div>\n    `;\n    root.appendChild(summaryCard);\n\n    // Show exercises summary\n    if (exercises.length > 0) {\n      const exSummary = document.createElement("div");\n      exSummary.className = "otw-card";\n      addCorners(exSummary, THEME.color);\n      const exTitle = document.createElement("div");\n      exTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:12px;`;\n      exTitle.textContent = "SESSION SUMMARY";\n      exSummary.appendChild(exTitle);\n      for (const ex of exercises) {\n        const completedSets = ex.sets.filter((s) => !s.isWarmup && s.completed).length;\n        const totalSets = ex.sets.filter((s) => !s.isWarmup).length;\n        const row = document.createElement("div");\n        row.style.cssText = `display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${THEME.colorBorder};`;\n        row.innerHTML = `<span style="color:${THEME.color};font-weight:600;">${ex.name}</span><span style="color:${THEME.colorMuted};font-size:12px;">${completedSets}/${totalSets} sets</span>`;\n        exSummary.appendChild(row);\n      }\n      root.appendChild(exSummary);\n    }\n    return;\n  }\n\n  // No muscle groups selected yet \u2014 show selection screen\n  if (muscleGroups.length === 0) {\n    await renderMuscleSelection(root);\n    return;\n  }\n\n  // \u2500\u2500 Active Workout UI \u2500\u2500\n  const currentMuscle = muscleGroups[currentMuscleIndex] || muscleGroups[0];\n  const muscleExercises = exercises.filter((e) => e.muscle === currentMuscle || e.muscleGroup === currentMuscle);\n\n  // Header\n  const header = document.createElement("div");\n  header.className = "otw-card otw-card-breathe otw-header";\n  addCorners(header, THEME.color);\n  const title = document.createElement("h2");\n  title.className = "otw-title";\n  title.textContent = currentMuscle.toUpperCase();\n  header.appendChild(title);\n  const progressLabel = document.createElement("div");\n  progressLabel.className = "otw-progress-label";\n  progressLabel.textContent = (currentMuscleIndex + 1) + " / " + muscleGroups.length;\n  header.appendChild(progressLabel);\n  root.appendChild(header);\n\n  // Exercises\n  const exContainer = document.createElement("div");\n  exContainer.style.cssText = "display:flex;flex-direction:column;gap:16px;";\n  root.appendChild(exContainer);\n\n  if (muscleExercises.length === 0) {\n    const empty = document.createElement("div");\n    empty.style.cssText = `text-align:center;padding:40px 20px;background:#0f0f0f;border:1px dashed ${THEME.colorBorder};`;\n    empty.innerHTML = `<p style="color:${THEME.colorMuted};margin:0;">No exercises for ${currentMuscle} yet.</p>`;\n    exContainer.appendChild(empty);\n  } else {\n    for (const ex of muscleExercises) {\n      await renderExercise(exContainer, ex);\n    }\n  }\n\n  // Add exercise button\n  const addExBtn = document.createElement("button");\n  addExBtn.textContent = "+ ADD EXERCISE";\n  addExBtn.className = "otw-btn otw-btn-dashed";\n  addExBtn.style.marginTop = "16px";\n  addExBtn.onclick = () => openAddExerciseModal(currentMuscle);\n  root.appendChild(addExBtn);\n\n  // Navigation\n  const nav = document.createElement("div");\n  nav.className = "otw-nav-row";\n  root.appendChild(nav);\n\n  if (currentMuscleIndex > 0) {\n    const prevBtn = document.createElement("button");\n    prevBtn.textContent = "\\u2190 PREVIOUS";\n    prevBtn.className = "otw-btn otw-btn-secondary";\n    prevBtn.onclick = async () => { currentMuscleIndex--; await saveState(); render(); };\n    nav.appendChild(prevBtn);\n  }\n\n  if (currentMuscleIndex < muscleGroups.length - 1) {\n    const nextBtn = document.createElement("button");\n    nextBtn.textContent = "NEXT MUSCLE \\u2192";\n    nextBtn.className = "otw-btn otw-btn-primary";\n    nextBtn.onclick = async () => { currentMuscleIndex++; await saveState(); render(); };\n    nav.appendChild(nextBtn);\n  } else {\n    const finishBtn = document.createElement("button");\n    finishBtn.textContent = "\\u2713 FINISH WORKOUT";\n    finishBtn.className = "otw-btn otw-btn-finish";\n    finishBtn.onclick = () => openFinishModal();\n    nav.appendChild(finishBtn);\n  }\n}\n\n// \u2500\u2500 Boot \u2500\u2500\nreturn render();\n';

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvU3RyZW5ndGhIZWF0bWFwLnRzIiwgInNyYy9jb21wb25lbnRzL1dlaWdodFByb2dyZXNzLnRzIiwgInNyYy92aWV3cy9Xb3Jrc3BhY2VWaWV3LnRzIiwgInNyYy9zZXR0aW5ncy9PbGVuU2V0dGluZ3MudHMiLCAic3JjL3RlbXBsYXRlcy9UZW1wbGF0ZUVuZ2luZS50cyIsICJzcmMvdGVtcGxhdGVzL2J1aWx0aW5zL3dvcmtvdXQudHBsIiwgInNyYy90ZW1wbGF0ZXMvYnVpbHRpbnMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgUGx1Z2luIEVudHJ5IFBvaW50XG4vLyBSZWdpc3RlcnMgdmlld3MsIGNvbW1hbmRzLCByaWJib24gaWNvbiwgc2V0dGluZ3MgbWlncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgUGx1Z2luLCBkZWJvdW5jZSwgVEZpbGUsIE5vdGljZSwgTWFya2Rvd25WaWV3IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgVHJhY2tIYWJpdFJhbmtEYXRhLCBBY3Rpdml0eUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiwgVklFV19UWVBFX1dPUktTUEFDRSwgREVGQVVMVF9PTEVOX1NFVFRJTkdTLCBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsIERFRkFVTFRfUEVSU09OQUxfU1RBVFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERhc2hib2FyZFZpZXcgfSBmcm9tIFwiLi92aWV3cy9EYXNoYm9hcmRWaWV3XCI7XG5pbXBvcnQgeyBXb3Jrc3BhY2VWaWV3IH0gZnJvbSBcIi4vdmlld3MvV29ya3NwYWNlVmlld1wiO1xuaW1wb3J0IHsgT2xlblNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy9PbGVuU2V0dGluZ3NcIjtcbmltcG9ydCB7IFRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4vdGVtcGxhdGVzL1RlbXBsYXRlRW5naW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9sZW5QbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5ncyE6IE9sZW5TZXR0aW5ncztcbiAgdGVtcGxhdGVFbmdpbmUhOiBUZW1wbGF0ZUVuZ2luZTtcblxuICBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTG9hZCBzZXR0aW5ncyB3aXRoIGRlZmF1bHRzXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUyxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgICk7XG5cbiAgICAvLyBFbnN1cmUgZGVlcCBkZWZhdWx0cyBmb3IgbmVzdGVkIG9iamVjdHNcbiAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5kZXZDb25maWcsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZ1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcubGFiZWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmRldkNvbmZpZy5sYWJlbHMsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlDb2xvcnMsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFAgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlYUCxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUFxuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYWxlbmRhciA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX1BFUlNPTkFMX1NUQVRTLFxuICAgICAgdGhpcy5zZXR0aW5ncy5wZXJzb25hbFN0YXRzXG4gICAgKTtcblxuICAgIC8vIE1pZ3JhdGUgbGVnYWN5IGZpZWxkIG5hbWVzIGZyb20gc2Vzc2lvbiBcdTIxOTIgd29ya3NwYWNlXG4gICAgYXdhaXQgdGhpcy5taWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIFRlbXBsYXRlIEVuZ2luZVxuICAgIHRoaXMudGVtcGxhdGVFbmdpbmUgPSBuZXcgVGVtcGxhdGVFbmdpbmUodGhpcy5hcHAsIHRoaXMpO1xuXG4gICAgLy8gTWlncmF0ZSBmcm9tIFRyYWNrSGFiaXRSYW5rIG9uIGZpcnN0IHJ1blxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5taWdyYXRlZCkge1xuICAgICAgYXdhaXQgdGhpcy5taWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgbWFpbiBkYXNoYm9hcmQgdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX09MRU4sXG4gICAgICAobGVhZikgPT4gbmV3IERhc2hib2FyZFZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmVnaXN0ZXIgd29ya3NwYWNlIHZpZXdcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhcbiAgICAgIFZJRVdfVFlQRV9XT1JLU1BBQ0UsXG4gICAgICAobGVhZikgPT4gbmV3IFdvcmtzcGFjZVZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmliYm9uIGljb25cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oXCJjb21wYXNzXCIsIFwiT3BlbiBPbGVuXCIsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmRzXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcIm9wZW4tb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiT3BlbiBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJyZWZyZXNoLW9sZW4tZGFzaGJvYXJkXCIsXG4gICAgICBuYW1lOiBcIlJlZnJlc2ggT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJhZGQtcXVpY2stdGFza1wiLFxuICAgICAgbmFtZTogXCJBZGQgUXVpY2sgVGFza1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvd1F1aWNrVGFza0RpYWxvZygpLFxuICAgIH0pO1xuXG4gICAgLy8gQ2FsZW5kYXIgcGx1Z2luIGludGVncmF0aW9uIFx1MjAxNCBpbmplY3QgT2xlbiBtZXRhZGF0YSBpbnRvIENhbGVuZGFyIHBsdWdpblxuICAgIHRoaXMucmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpO1xuXG4gICAgLy8gRGVib3VuY2VkIGZpbGUgd2F0Y2hlciBmb3IgbWV0YWRhdGEgY2hhbmdlc1xuICAgIGNvbnN0IHJlZnJlc2ggPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICB9LCAzMDApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKCkgPT4gcmVmcmVzaCgpKVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcImNyZWF0ZVwiLCBhc3luYyAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSB0byBiZSBpbmRleGVkXG4gICAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCAxNSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcInJlbmFtZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2xlblNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogRnJvbnRtYXR0ZXItZHJpdmVuIHJlbmRlcmluZyAtLS1cbiAgICB0aGlzLnJlZ2lzdGVyVGVtcGxhdGVQb3N0UHJvY2Vzc29yKCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIHRlbXBsYXRlIGNhY2hlIHdoZW4gdGVtcGxhdGUgLmpzIGZpbGVzIGFyZSBtb2RpZmllZFxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwibW9kaWZ5XCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwianNcIikge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKGZpbGUucGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIC8vIENsZWFudXAgaGFuZGxlZCBieSBEYXNoYm9hcmRWaWV3Lm9uQ2xvc2UoKVxuICB9XG5cbiAgLy8gLS0tIFZpZXcgTWFuYWdlbWVudCAtLS1cblxuICBhc3luYyBhY3RpdmF0ZURhc2hib2FyZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG4gICAgbGV0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKVswXTtcblxuICAgIGlmICghbGVhZikge1xuICAgICAgY29uc3QgbmV3TGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgICAgaWYgKCFuZXdMZWFmKSByZXR1cm47XG4gICAgICBhd2FpdCBuZXdMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9PTEVOLCBhY3RpdmU6IHRydWUgfSk7XG4gICAgICBsZWFmID0gbmV3TGVhZjtcbiAgICB9XG5cbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIHJlZnJlc2hEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldyBhcyB1bmtub3duIGFzIERhc2hib2FyZFZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlV29ya3NwYWNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG5cbiAgICAvLyBDbG9zZSBleGlzdGluZyB3b3Jrc3BhY2Ugdmlld3NcbiAgICB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9XT1JLU1BBQ0UpLmZvckVhY2goKGxlYWYpID0+IGxlYWYuZGV0YWNoKCkpO1xuXG4gICAgLy8gT3BlbiB3b3Jrc3BhY2UgaW4gdGhlIHNhbWUgdGFiIGFzIHRoZSBkYXNoYm9hcmQgaWYgcG9zc2libGVcbiAgICBjb25zdCBkYXNoTGVhdmVzID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgY29uc3QgdGFyZ2V0TGVhZiA9IGRhc2hMZWF2ZXNbMF0gPz8gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgaWYgKCF0YXJnZXRMZWFmKSByZXR1cm47XG5cbiAgICBhd2FpdCB0YXJnZXRMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZih0YXJnZXRMZWFmKTtcbiAgfVxuXG4gIGFjdGl2YXRlRGFzaGJvYXJkVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlRGFzaGJvYXJkKCk7XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgUmVnaXN0cnk6IFBvc3QtUHJvY2Vzc29yIC0tLVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJUZW1wbGF0ZVBvc3RQcm9jZXNzb3IoKTogdm9pZCB7XG4gICAgLy8gVHJhY2sgd2hpY2ggZmlsZXMgd2UndmUgYWxyZWFkeSByZW5kZXJlZCB0ZW1wbGF0ZXMgZm9yIGluIHRoZSBjdXJyZW50XG4gICAgLy8gdmlldyBjeWNsZSwgdG8gYXZvaWQgZHVwbGljYXRlIHJlbmRlcmluZyBhY3Jvc3MgbXVsdGlwbGUgc2VjdGlvbnMuXG4gICAgY29uc3QgcmVuZGVyZWRGaWxlcyA9IG5ldyBXZWFrU2V0PEhUTUxFbGVtZW50PigpO1xuXG4gICAgdGhpcy5yZWdpc3Rlck1hcmtkb3duUG9zdFByb2Nlc3Nvcihhc3luYyAoZWwsIGN0eCkgPT4ge1xuICAgICAgLy8gRmluZCB0aGUgZmlsZSBiZWluZyByZW5kZXJlZFxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdHguc291cmNlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIC8vIENoZWNrIGZyb250bWF0dGVyIGZvciBhbiBcImFjdGl2aXR5XCIgZmllbGRcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBjb25zdCBhY3Rpdml0eVR5cGUgPSBjYWNoZT8uZnJvbnRtYXR0ZXI/LmFjdGl2aXR5IGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgIC8vIExvb2sgdXAgdGVtcGxhdGUgaW4gdGhlIHJlZ2lzdHJ5XG4gICAgICBjb25zdCBlbnRyeSA9IHRoaXMudGVtcGxhdGVFbmdpbmUuZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZSk7XG4gICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZSByZW5kZXJpbmc6IGNoZWNrIHRoZSBwYXJlbnQgcHJldmlldyBjb250YWluZXJcbiAgICAgIGNvbnN0IHByZXZpZXdTaXplciA9IGVsLmNsb3Nlc3QoXCIubWFya2Rvd24tcHJldmlldy1zaXplclwiKSA/PyBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHByZXZpZXdTaXplciAmJiByZW5kZXJlZEZpbGVzLmhhcyhwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpKSByZXR1cm47XG4gICAgICBpZiAocHJldmlld1NpemVyKSByZW5kZXJlZEZpbGVzLmFkZChwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgICAvLyBDbGVhciBkZWZhdWx0IHJlbmRlcmVkIGNvbnRlbnQgYW5kIGluamVjdCB0ZW1wbGF0ZVxuICAgICAgZWwuZW1wdHkoKTtcbiAgICAgIGVsLmFkZENsYXNzKFwib2xlbi10ZW1wbGF0ZS1ob3N0XCIpO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBlbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1yb290XCIgfSk7XG5cbiAgICAgIGF3YWl0IHRoaXMudGVtcGxhdGVFbmdpbmUucmVuZGVyKGVudHJ5LnRlbXBsYXRlSWQsIGZpbGUsIGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvLyBBbHNvIGhhbmRsZSBmaWxlLW9wZW4gZm9yIG5vdGVzIHdpdGggb25seSBmcm9udG1hdHRlciAobm8gYm9keSBzZWN0aW9ucylcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgYXN5bmMgKGxlYWYpID0+IHtcbiAgICAgICAgaWYgKCFsZWFmKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICAgIGlmICghKHZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmlsZSA9IHZpZXcuZmlsZTtcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgLy8gU21hbGwgZGVsYXkgdG8gbGV0IG1ldGFkYXRhIGNhY2hlIHBvcHVsYXRlXG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlUeXBlID0gY2FjaGU/LmZyb250bWF0dGVyPy5hY3Rpdml0eSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLnRlbXBsYXRlRW5naW5lLmZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGUpO1xuICAgICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYSB0ZW1wbGF0ZSBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ5IHRoZSBwb3N0LXByb2Nlc3NvclxuICAgICAgICBjb25zdCBjb250ZW50RWwgPSB2aWV3LmNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFya2Rvd24tcmVhZGluZy12aWV3IC5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpO1xuICAgICAgICBpZiAoY29udGVudEVsPy5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tdGVtcGxhdGUtcm9vdFwiKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIGluIHJlYWRpbmcgbW9kZSBidXQgbm8gdGVtcGxhdGUgd2FzIGluamVjdGVkIChlbXB0eSBib2R5IG5vdGUpLFxuICAgICAgICAvLyBpbmplY3QgaW50byB0aGUgcHJldmlldyBjb250ZW50XG4gICAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiO1xuICAgICAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVJZCwgZmlsZSwgY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIFBsdWdpbiBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsZW5kYXJQbHVnaW5Tb3VyY2UoKTogdm9pZCB7XG4gICAgLy8gTGlzdGVuIGZvciB0aGUgQ2FsZW5kYXIgcGx1Z2luJ3MgXCJjYWxlbmRhcjpvcGVuXCIgZXZlbnRcbiAgICAvLyBhbmQgaW5qZWN0IE9sZW4ncyBhY3Rpdml0eSBjb21wbGV0aW9uIGRhdGEgYXMgY29sb3JlZCBkb3RzXG4gICAgKHRoaXMuYXBwLndvcmtzcGFjZSBhcyBhbnkpLm9uKFwiY2FsZW5kYXI6b3BlblwiLCAoc291cmNlczogYW55W10pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkgcmV0dXJuO1xuXG4gICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICBnZXREYWlseU1ldGFkYXRhOiAoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUuZm9ybWF0Py4oXCJZWVlZLU1NLUREXCIpID8/IFwiXCI7XG4gICAgICAgICAgaWYgKCFkYXRlU3RyKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBDb3VudCBjb21wbGV0aW9ucyBmb3IgdGhpcyBkYXRlXG4gICAgICAgICAgbGV0IGNvbXBsZXRpb25zID0gMDtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXMuZmluZChcbiAgICAgICAgICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXI/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucysrO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGFjdGl2aXR5LmNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wbGV0aW9ucyA9PT0gMCkgcmV0dXJuIHt9O1xuXG4gICAgICAgICAgLy8gUmV0dXJuIGRvdHMgY29sb3JlZCBieSBkb21pbmFudCBjYXRlZ29yeVxuICAgICAgICAgIGNvbnN0IGRvdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBkb3RzLnB1c2goe1xuICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQgYXMga2V5b2YgdHlwZW9mIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNdID8/IFwiIzkyOGQ4NVwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGBvbGVuLWNhbC1kb3QtJHtjYXR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb3RzLFxuICAgICAgICAgICAgY2xhc3NlczogY29tcGxldGlvbnMgPj0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBcIm9sZW4tY2FsLWNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0V2Vla2x5TWV0YWRhdGE6ICgpID0+ICh7fSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBRdWljayBUYXNrIERpYWxvZyAtLS1cblxuICBwcml2YXRlIHNob3dRdWlja1Rhc2tEaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+QWRkIFF1aWNrIFRhc2s8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9mb2N1cyAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXJvd1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uIChtaW4pXCIgbWluPVwiNVwiIG1heD1cIjQ4MFwiIHZhbHVlPVwiMzBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYmFja2Ryb3BcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stY2FuY2VsXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFkZEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWFkZFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay10aW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZHVyYXRpb25JbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWR1cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBlbnRlciBhIHRhc2sgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3cgPSB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgcXQtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkYXRlOiB0b2RheSxcbiAgICAgICAgdGltZTogdGltZUlucHV0LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpIHx8IDMwLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICBuZXcgTm90aWNlKGBcXHUyNkExIFF1aWNrIHRhc2sgYWRkZWQ6ICR7dGl0bGV9YCk7XG4gICAgICBjbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRm9jdXMgdGhlIGlucHV0XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aXRsZUlucHV0LmZvY3VzKCksIDUwKTtcbiAgfVxuXG4gIC8vIC0tLSBTZXR0aW5ncyBQZXJzaXN0ZW5jZSAtLS1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBNaWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhUGF0aCA9IFwiLm9ic2lkaWFuL3BsdWdpbnMvbXl0aG9sb2dpY2FsLWhhYml0LXRyYWNrZXIvZGF0YS5qc29uXCI7XG4gICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyhkYXRhUGF0aCk7XG5cbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChkYXRhUGF0aCk7XG4gICAgICBjb25zdCBkYXRhOiBUcmFja0hhYml0UmFua0RhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIC8vIE1pZ3JhdGUgYm9zcyBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllciA9IGRhdGEuY3VycmVudFRpZXIgPz8gMTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc01heEhQID0gZGF0YS5ib3NzTWF4SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBkYXRhLmJvc3NDdXJyZW50SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID0gZGF0YS5jb25zZWN1dGl2ZVBlcmZlY3RXZWVrcyA/PyAwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzID0gZGF0YS5pblRhcnRhcnVzID8/IGZhbHNlO1xuICAgICAgdGhpcy5zZXR0aW5ncy50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA9IGRhdGEudGFydGFydXNQZW5hbmNlVGFza3MgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzU3RhcnREYXRlID0gZGF0YS50YXJ0YXJ1c1N0YXJ0RGF0ZSA/PyBudWxsO1xuICAgICAgdGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID0gZGF0YS5mYWlsZWRUaHJlc2hvbGREYXlzID8/IDA7XG5cbiAgICAgIC8vIE1pZ3JhdGUgdGVtcGxlIHRhc2tzXG4gICAgICBpZiAoZGF0YS50ZW1wbGVUYXNrcyAmJiBkYXRhLnRlbXBsZVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50ZW1wbGVUYXNrcyA9IGRhdGEudGVtcGxlVGFza3M7XG4gICAgICB9XG5cbiAgICAgIC8vIE1pZ3JhdGUgcmV3YXJkc1xuICAgICAgdGhpcy5zZXR0aW5ncy5wZW5kaW5nUmV3YXJkcyA9IGRhdGEucGVuZGluZ1Jld2FyZHMgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLmNsYWltZWRSZXdhcmRzID0gKGRhdGEuY2xhaW1lZFJld2FyZHMgPz8gW10pIGFzIGFueTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYmFua2VkUmV3YXJkcyA9IGRhdGEuYmFua2VkUmV3YXJkcyA/PyBbXTtcblxuICAgICAgLy8gTWlncmF0ZSBzeXN0ZW0gc3RhdGVcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSAoZGF0YS5zeXN0ZW1TdGF0ZSBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIikgPz8gXCJhY3RpdmVcIjtcbiAgICAgIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBkYXRhLnBhdXNlU3RhcnRUaW1lID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSA9IGRhdGEudG90YWxQYXVzZWRUaW1lID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSBkYXRhLnNpbXVsYXRlZERhdGUgPz8gbnVsbDtcblxuICAgICAgLy8gTWlncmF0ZSBoZXJvIGJhY2tncm91bmRcbiAgICAgIGlmIChkYXRhLmRhc2hib2FyZEJnSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IGRhdGEuZGFzaGJvYXJkQmdJbWFnZTtcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSBhY3Rpdml0aWVzIGZyb20gZW5hYmxlZEFjdGl2aXRpZXMgKyBjdXN0b21IYWJpdHNcbiAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcyA9IHRoaXMubWlncmF0ZUFjdGl2aXRpZXMoZGF0YSk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgbmV3IE5vdGljZShcIk9sZW46IFN1Y2Nlc3NmdWxseSBtaWdyYXRlZCBkYXRhIGZyb20gTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2xlbiBtaWdyYXRpb24gZXJyb3I6XCIsIGVycik7XG4gICAgICB0aGlzLnNldHRpbmdzLm1pZ3JhdGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtaWdyYXRlQWN0aXZpdGllcyhkYXRhOiBUcmFja0hhYml0UmFua0RhdGEpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFjdGl2aXR5Q29uZmlnW10gPSBbLi4uREVGQVVMVF9BQ1RJVklUSUVTXTtcblxuICAgIC8vIEFwcGx5IGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgICBpZiAoZGF0YS5lbmFibGVkQWN0aXZpdGllcykge1xuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN1bHQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aXZpdHkucHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSBpbiBkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICAgICAgYWN0aXZpdHkuZW5hYmxlZCA9IGRhdGEuZW5hYmxlZEFjdGl2aXRpZXNba2V5XSA/PyB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgb3ZlcnJpZGVzXG4gICAgaWYgKGRhdGEuYWN0aXZpdHlPdmVycmlkZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3ZlcnJpZGUgb2YgZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHJlc3VsdC5maW5kKChhKSA9PiBhLmlkID09PSBvdmVycmlkZS5pZCk7XG4gICAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICAgIGlmIChvdmVycmlkZS53ZWVrbHlUYXJnZXQgIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkud2Vla2x5VGFyZ2V0ID0gb3ZlcnJpZGUud2Vla2x5VGFyZ2V0O1xuICAgICAgICAgIGlmIChvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uICE9PSB1bmRlZmluZWQpIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb24gPSBvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGN1c3RvbSBoYWJpdHNcbiAgICBpZiAoZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgIGZvciAoY29uc3QgaGFiaXQgb2YgZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlc1xuICAgICAgICBpZiAocmVzdWx0LnNvbWUoKGEpID0+IGEuaWQgPT09IGhhYml0LmlkKSkgY29udGludWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGlkOiBoYWJpdC5pZCxcbiAgICAgICAgICBuYW1lOiBoYWJpdC5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBoYWJpdC5lbW9qaSA/PyBcIlxcdTJCNTBcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIiwgLy8gRGVmYXVsdCBjdXN0b20gaGFiaXRzIHRvIHNwaXJpdFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZm9sZGVyOiBoYWJpdC5mb2xkZXIsXG4gICAgICAgICAgcHJvcGVydHk6IGhhYml0LnByb3BlcnR5LFxuICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IGhhYml0LmRhbWFnZVBlckNvbXBsZXRpb24gPz8gMSxcbiAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IGhhYml0LndlZWtseVRhcmdldCA/PyAzLFxuICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgIGhhc1dvcmtzcGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJpb3JpdHk6IDUsXG4gICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICBwcmVmZXJyZWRUaW1lOiBcImFueXRpbWVcIixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogT25lLXRpbWUgbWlncmF0aW9uOiByZW5hbWUgbGVnYWN5IHNlc3Npb24gZmllbGRzIFx1MjE5MiB3b3Jrc3BhY2UsXG4gICAqIG1lcmdlIHdvcmtzcGFjZUZvbGRlciBpbnRvIGZvbGRlciwgYW5kIG1vdmUgdGVtcGxhdGVSZWdpc3RyeSBlbnRyaWVzXG4gICAqIGludG8gcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuc2V0dGluZ3MgYXMgYW55O1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBNaWdyYXRlIHRvcC1sZXZlbCBzZXR0aW5ncyBmaWVsZHNcbiAgICBpZiAocmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzICYmICFyYXcud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcykge1xuICAgICAgcmF3LndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMgPSByYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXM7XG4gICAgICBkZWxldGUgcmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyYXcuYWN0aXZlU2Vzc2lvbiAhPT0gdW5kZWZpbmVkICYmIHJhdy5hY3RpdmVXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmF3LmFjdGl2ZVdvcmtzcGFjZSA9IHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgZGVsZXRlIHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSBwZXItYWN0aXZpdHkgZmllbGRzXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgIGNvbnN0IGEgPSBhY3Rpdml0eSBhcyBhbnk7XG4gICAgICBpZiAoYS5oYXNTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgYS5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhLmhhc1dvcmtzcGFjZSA9IGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgZGVsZXRlIGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBNZXJnZSBzZXNzaW9uRm9sZGVyIC8gd29ya3NwYWNlRm9sZGVyIGludG8gZm9sZGVyXG4gICAgICBpZiAoYS5zZXNzaW9uRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGRlbGV0ZSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGEud29ya3NwYWNlRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLndvcmtzcGFjZUZvbGRlcjtcbiAgICAgICAgZGVsZXRlIGEud29ya3NwYWNlRm9sZGVyO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNaWdyYXRlIGFjdGl2ZVdvcmtzcGFjZSBpbm5lciBmaWVsZHNcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UpIHtcbiAgICAgIGNvbnN0IGF3ID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgYXMgYW55O1xuICAgICAgaWYgKGF3Lmhhc1Nlc3Npb24gIT09IHVuZGVmaW5lZCAmJiBhdy5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhdy5oYXNXb3Jrc3BhY2UgPSBhdy5oYXNTZXNzaW9uO1xuICAgICAgICBkZWxldGUgYXcuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB1cCBsZWdhY3kgZm9sZGVyIGZpZWxkcyBmcm9tIGFjdGl2ZVdvcmtzcGFjZVxuICAgICAgZGVsZXRlIGF3LnNlc3Npb25Gb2xkZXI7XG4gICAgICBkZWxldGUgYXcud29ya3NwYWNlRm9sZGVyO1xuICAgIH1cblxuICAgIC8vIE1pZ3JhdGUgdGVtcGxhdGVSZWdpc3RyeSBcdTIxOTIgcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlXG4gICAgaWYgKHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5ICYmIEFycmF5LmlzQXJyYXkocmF3LnRlbXBsYXRlUmVnaXN0cnkpICYmIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmF3LnRlbXBsYXRlUmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKCFlbnRyeS5lbmFibGVkIHx8ICFlbnRyeS50ZW1wbGF0ZVBhdGgpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhOiBhbnkpID0+IGEuaWQgPT09IGVudHJ5LmFjdGl2aXR5VHlwZSk7XG4gICAgICAgIGlmIChhY3Rpdml0eSAmJiAhYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgICAgICBhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSA9IGVudHJ5LnRlbXBsYXRlUGF0aDtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5O1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFV0aWxpdHlcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb25zdGFudHMgJiBEZWZhdWx0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgQm9zc0RlZmluaXRpb24sXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBPbGVuU2V0dGluZ3MsXG4gIERldkNvbmZpZyxcbiAgRWx5c2lhblRoZW1lLFxuICBXb3Jrc3BhY2VDb21wbGV0aW9uU3RhdGUsXG4gIENhbGVuZGFyU2V0dGluZ3MsXG4gIFBlcnNvbmFsU3RhdHMsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8vIC0tLSBWaWV3IFR5cGUgLS0tXG5cbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfT0xFTiA9IFwib2xlbi1kYXNoYm9hcmQtdmlld1wiO1xuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9XT1JLU1BBQ0UgPSBcIm9sZW4td29ya3NwYWNlLXZpZXdcIjtcblxuLy8gLS0tIEJvc3MgRGVmaW5pdGlvbnMgKDEzIHRpZXJzKSAtLS1cblxuZXhwb3J0IGNvbnN0IEJPU1NFUzogQm9zc0RlZmluaXRpb25bXSA9IFtcbiAgeyB0aWVyOiAxLCBuYW1lOiBcIlNoYWRvdyBvZiBBcGF0aHlcIiwgcmFuazogXCJEb29tc2Nyb2xsZXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHdlaWdodCBvZiBpbmVydGlhIHRoYXQga2VlcHMgeW91IHNjcm9sbGluZyBpbnN0ZWFkIG9mIHN0YXJ0aW5nXCIsIGxvcmU6IFwiQm9ybiBmcm9tIGZvcmdvdHRlbiBwcm9taXNlcyBhbmQgdW5vcGVuZWQgZ3ltIGJhZ3MsIHRoZSBTaGFkb3cgZmVlZHMgb24gcG90ZW50aWFsIHVucmVhbGl6ZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuMVwiIH0sXG4gIHsgdGllcjogMiwgbmFtZTogXCJTaXJlbidzIENhbGxcIiwgcmFuazogXCJBcm1jaGFpciBHZW5lcmFsXCIsIGRlc2NyaXB0aW9uOiBcIkRpc3RyYWN0aW9uJ3Mgc3dlZXQgc29uZyB0aGF0IHB1bGxzIGZvY3VzIGZyb20gY29tbWl0dGVkIHdvcmtcIiwgbG9yZTogXCJTaGUgc2luZ3Mgb2YgZWFzaWVyIHBhdGhzLCBvZiBqdXN0IG9uZSBtb3JlIHZpZGVvLCBvZiBzdGFydGluZyB0b21vcnJvdyBpbnN0ZWFkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjJcIiB9LFxuICB7IHRpZXI6IDMsIG5hbWU6IFwiSHlkcmEgb2YgSGFiaXRzXCIsIHJhbms6IFwiQXBwcmVudGljZVwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29tcGxleGl0eSBvZiBtYW5hZ2luZyBtdWx0aXBsZSByb3V0aW5lcyBzaW11bHRhbmVvdXNseVwiLCBsb3JlOiBcIkN1dCBvbmUgaGVhZCBhbmQgdHdvIGdyb3cgYmFjay4gRWFjaCBoYWJpdCBkZW1hbmRzIGl0cyBvd24gYXR0ZW50aW9uLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjNcIiB9LFxuICB7IHRpZXI6IDQsIG5hbWU6IFwiTWlub3RhdXIncyBNYXplXCIsIHJhbms6IFwiQ2l0aXplblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29uZnVzaW9uIGFuZCByb3V0aW5lIHRoYXQgdHJhcHMgZXZlbiBkZWRpY2F0ZWQgcHJhY3RpdGlvbmVyc1wiLCBsb3JlOiBcIkxvc3QgaW4gY29ycmlkb3JzIG9mIGhhYml0LCB0aGUgcGF0aCBmb3J3YXJkIGlzIG5ldmVyIGNsZWFyLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjdcIiB9LFxuICB7IHRpZXI6IDUsIG5hbWU6IFwiTWVkdXNhJ3MgR2F6ZVwiLCByYW5rOiBcIlNjaG9sYXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHBhcmFseXNpcyB0aGF0IGNvbWVzIGZyb20gb3ZlcnRoaW5raW5nIG9yIGZlYXIgb2YgZmFpbHVyZVwiLCBsb3JlOiBcIk9uZSBnbGFuY2UgYW5kIHlvdSBhcmUgZnJvemVuLCB1bmFibGUgdG8gYWN0LCB1bmFibGUgdG8gbW92ZS5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS45XCIgfSxcbiAgeyB0aWVyOiA2LCBuYW1lOiBcIk5lbWVhbiBMaW9uXCIsIHJhbms6IFwiU2FtdXJhaVwiLCBkZXNjcmlwdGlvbjogXCJTZWVtaW5nbHkgaW52dWxuZXJhYmxlIG9ic3RhY2xlcyB0aGF0IHJlcXVpcmUgcGVyc2lzdGVudCBlZmZvcnRcIiwgbG9yZTogXCJJdHMgaGlkZSBjYW5ub3QgYmUgcGllcmNlZCBieSBvcmRpbmFyeSBtZWFucy4gT25seSBkaXNjaXBsaW5lIGN1dHMgdGhyb3VnaC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4xXCIgfSxcbiAgeyB0aWVyOiA3LCBuYW1lOiBcIkNoaW1lcmFcIiwgcmFuazogXCJUZW1wbGFyXCIsIGRlc2NyaXB0aW9uOiBcIk11bHRpLWhlYWRlZCBiZWFzdCByZXF1aXJpbmcgYmFsYW5jZWQgYXR0ZW50aW9uIGFjcm9zcyBhbGwgZG9tYWluc1wiLCBsb3JlOiBcIkxpb24sIGdvYXQsIGFuZCBzZXJwZW50IFx1MjAxNCBlYWNoIGhlYWQgZGVtYW5kcyBtYXN0ZXJ5IG9mIGEgZGlmZmVyZW50IGFydC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4zXCIgfSxcbiAgeyB0aWVyOiA4LCBuYW1lOiBcIkNlcmJlcnVzXCIsIHJhbms6IFwiU3RvaWNcIiwgZGVzY3JpcHRpb246IFwiR3VhcmRpYW4gb2YgdHJhbnNmb3JtYXRpb24gdGVzdGluZyBpZiBoYWJpdHMgaGF2ZSBiZWNvbWUgaWRlbnRpdHlcIiwgbG9yZTogXCJUaHJlZSBoZWFkcywgdGhyZWUgdGVzdHMuIFBhc3QgdGhlIGdhdGUgbGllcyB0cmFuc2Zvcm1hdGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi41XCIgfSxcbiAgeyB0aWVyOiA5LCBuYW1lOiBcIlNjeWxsYSAmIENoYXJ5YmRpc1wiLCByYW5rOiBcIk9seW1waWFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBpbXBvc3NpYmxlIGNob2ljZSBiZXR3ZWVuIGNvbXBldGluZyBwcmlvcml0aWVzXCIsIGxvcmU6IFwiQmV0d2VlbiB0aGUgcm9jayBhbmQgdGhlIHdoaXJscG9vbCwgYm90aCBtdXN0IHNvbWVob3cgYmUgaG9ub3JlZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi43XCIgfSxcbiAgeyB0aWVyOiAxMCwgbmFtZTogXCJUaGUgRnVyaWVzXCIsIHJhbms6IFwiU2FnZVwiLCBkZXNjcmlwdGlvbjogXCJJbnRlcm5hbCB2b2ljZXMgb2YgZ3VpbHQgYW5kIHNoYW1lIGF0dGFja2luZyBldmVuIHRoZSBzdWNjZXNzZnVsXCIsIGxvcmU6IFwiVGhleSB3aGlzcGVyIHlvdXIgZmFpbHVyZXMsIHJlbWluZCB5b3Ugb2YgZXZlcnkgc2tpcCwgZXZlcnkgd2Vha25lc3MuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuOVwiIH0sXG4gIHsgdGllcjogMTEsIG5hbWU6IFwiVHlwaG9uXCIsIHJhbms6IFwiVGl0YW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGZvcmNlIG9mIGNoYW9zIHRocmVhdGVuaW5nIHRvIHVuZG8gYWxsIHByb2dyZXNzXCIsIGxvcmU6IFwiRmF0aGVyIG9mIGFsbCBtb25zdGVycywgaGUgc2Vla3MgdG8gcmV0dXJuIHlvdSB0byB0aGUgYmVnaW5uaW5nLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjFcIiB9LFxuICB7IHRpZXI6IDEyLCBuYW1lOiBcIktyb25vc1wiLCByYW5rOiBcIkFyY2hvblwiLCBkZXNjcmlwdGlvbjogXCJUaW1lIGl0c2VsZiBhcyBhbiBlbmVteSwgdGVzdGluZyBzdXN0YWluZWQgaW50ZW5zaXR5XCIsIGxvcmU6IFwiVGhlIFRpdGFuIHdobyBkZXZvdXJzIGhpcyBjaGlsZHJlbi4gQ2FuIHlvdSBtYWludGFpbiBhcyB3ZWVrcyBiZWNvbWUgbW9udGhzP1wiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjNcIiB9LFxuICB7IHRpZXI6IDEzLCBuYW1lOiBcIkNoYW9zIFByaW1vcmRpYWxcIiwgcmFuazogXCJNYXN0ZXIgb2YgQWxsXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB1bHRpbWF0ZSB0ZXN0IG9mIHVuc2hha2VhYmxlIGRpc2NpcGxpbmVcIiwgbG9yZTogXCJCZWZvcmUgY3JlYXRpb24sIGJlZm9yZSBvcmRlciwgb25seSBDaGFvcy4gVG8gbWFzdGVyIGl0IGlzIHRvIG1hc3RlciB5b3Vyc2VsZi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy42XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSQU5LX1RJRVJfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiM2QjcyODBcIiwgMjogXCIjRUY0NDQ0XCIsIDM6IFwiI0Y1OUUwQlwiLCA0OiBcIiMxMEI5ODFcIixcbiAgNTogXCIjM0I4MkY2XCIsIDY6IFwiIzhCNUNGNlwiLCA3OiBcIiNFQzQ4OTlcIiwgODogXCIjRjk3MzE2XCIsXG4gIDk6IFwiIzA2QjZENFwiLCAxMDogXCIjQTg1NUY3XCIsIDExOiBcIiNEQzI2MjZcIiwgMTI6IFwiIzdDM0FFRFwiLFxuICAxMzogXCIjYzlhMjI3XCIsXG59O1xuXG4vLyAtLS0gQ2hhcHRlciBQcm9ncmVzc2lvbiAtLS1cblxuZXhwb3J0IGNvbnN0IENIQVBURVJfTkFNRVM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gIDE6IFwiSW5pdGlhdGVcIixcbiAgMjogXCJFeHBsb3JlclwiLFxuICAzOiBcIkpvdXJuZXltYW5cIixcbiAgNDogXCJBZGVwdFwiLFxuICA1OiBcIlBoaWxvc29waGVyXCIsXG4gIDY6IFwiTWFzdGVyXCIsXG4gIDc6IFwiU2FnZVwiLFxuICA4OiBcIk9yYWNsZVwiLFxuICA5OiBcIlRpdGFuXCIsXG4gIDEwOiBcIk9seW1waWFuXCIsXG59O1xuXG4vLyAtLS0gRHluYW1pYyBUaXRsZSBUYWJsZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfRE9NSU5BTlRfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYm9keTogICB7IGxpZ2h0OiBcIkF0aGxldGVcIiwgICBtaWQ6IFwiV2FycmlvclwiLCAgaGVhdnk6IFwiVGl0YW5cIiB9LFxuICBtaW5kOiAgIHsgbGlnaHQ6IFwiU3R1ZGVudFwiLCAgIG1pZDogXCJTY2hvbGFyXCIsICBoZWF2eTogXCJQb2x5bWF0aFwiIH0sXG4gIHNwaXJpdDogeyBsaWdodDogXCJTZWVrZXJcIiwgICAgbWlkOiBcIlNhZ2VcIiwgICAgIGhlYXZ5OiBcIk9yYWNsZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVFdPX0NBVEVHT1JZX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiYm9keSttaW5kXCI6ICAgIHsgbGlnaHQ6IFwiRGlzY2lwbGluZWQgVGhpbmtlclwiLCBtaWQ6IFwiUGhpbG9zb3BoZXItS2luZ1wiLCBoZWF2eTogXCJSZW5haXNzYW5jZSBUaXRhblwiIH0sXG4gIFwiYm9keStzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQXNjZXRpY1wiLCAgICAgICAgICAgICBtaWQ6IFwiVGVtcGxhclwiLCAgICAgICAgICBoZWF2eTogXCJPbHltcGlhbiBNb25rXCIgfSxcbiAgXCJtaW5kK3NwaXJpdFwiOiAgeyBsaWdodDogXCJDb250ZW1wbGF0aXZlXCIsICAgICAgIG1pZDogXCJNeXN0aWMgU2Nob2xhclwiLCAgIGhlYXZ5OiBcIkVubGlnaHRlbmVkIE9uZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQkFMQU5DRURfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCIsXG4gIG1pZDogXCJSZW5haXNzYW5jZSBTb3VsXCIsXG4gIGhlYXZ5OiBcIkV1ZGFpbW9uXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBBY3Rpdml0aWVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVklUSUVTOiBBY3Rpdml0eUNvbmZpZ1tdID0gW1xuICB7XG4gICAgaWQ6IFwid29ya291dFwiLCBuYW1lOiBcIldvcmtvdXRcIiwgZW1vamk6IFwiXFx1ezFGNEFBfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiLCBwcm9wZXJ0eTogXCJXb3Jrb3V0XCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA3LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHdvcmtzcGFjZVRlbXBsYXRlOiBcIndvcmtvdXRcIixcbiAgICBwcmlvcml0eTogOCwgbmVnbGVjdFRocmVzaG9sZDogMixcbiAgICBwcmVmZXJyZWRUaW1lOiBcIm1vcm5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2FyZGlvXCIsIG5hbWU6IFwiQ2FyZGlvXCIsIGVtb2ppOiBcIlxcdXsxRjNDM31cIiwgY2F0ZWdvcnk6IFwiYm9keVwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAyIENhcmRpb1wiLCBwcm9wZXJ0eTogXCJDYXJkaW9cIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDQsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICBhbHRlcm5hdGVzV2l0aDogXCJ3b3Jrb3V0XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWFkaW5nXCIsIG5hbWU6IFwiUmVhZGluZ1wiLCBlbW9qaTogXCJcXHV7MUY0RDZ9XCIsIGNhdGVnb3J5OiBcIm1pbmRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMyBSZWFkaW5nXCIsIHByb3BlcnR5OiBcIlJlYWRpbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDYsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJldmVuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA0NSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRydW1taW5nXCIsIG5hbWU6IFwiRHJ1bW1pbmdcIiwgZW1vamk6IFwiXFx1ezFGOTQxfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNCBEcnVtbWluZ1wiLCBwcm9wZXJ0eTogXCJEcnVtbWluZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNiwgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJoZWFsdGgtc3R1ZHlcIiwgbmFtZTogXCJIZWFsdGggU3R1ZHlcIiwgZW1vamk6IFwiXFx1ezFGOUVDfVwiLCBjYXRlZ29yeTogXCJtaW5kXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDUgSGVhbHRoIFN0dWR5XCIsIHByb3BlcnR5OiBcIkhlYWx0aCBTdHVkeVwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMywgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNCwgbmVnbGVjdFRocmVzaG9sZDogNCxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2NpYWxcIiwgbmFtZTogXCJTb2NpYWxcIiwgZW1vamk6IFwiXFx1ezFGOTFEfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNiBTb2NpYWxcIiwgcHJvcGVydHk6IFwiU29jaWFsXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiAyLCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA1LCBuZWdsZWN0VGhyZXNob2xkOiA1LFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcmF3aW5nXCIsIG5hbWU6IFwiRHJhd2luZ1wiLCBlbW9qaTogXCJcXHV7MUYzQTh9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA3IERyYXdpbmdcIiwgcHJvcGVydHk6IFwiRHJhd2luZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNCwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNywgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG5dO1xuXG4vLyAtLS0gRGlyZWN0aXZlIExvcmUgVGVtcGxhdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgTkVHTEVDVF9MT1JFOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB3b3Jrb3V0OiBcIllvdXIgbXVzY2xlcyBmb3JnZXQgd2hhdCB0aGV5IG9uY2Uga25ldy4gVGhlIGJvZHkgY3JhdmVzIGRpc2NpcGxpbmUgXHUyMDE0IGFuc3dlciBpdC5cIixcbiAgY2FyZGlvOiBcIlRoZSBoZWFydCBncm93cyBzbHVnZ2lzaCB3aXRob3V0IHRoZSBwb3VuZGluZyByaHl0aG0gb2YgZWZmb3J0LlwiLFxuICByZWFkaW5nOiBcIlRoZSBtaW5kIHN0YXJ2ZXMgb24gZGlzdHJhY3Rpb24uIEZlZWQgaXQgd2l0aCBwYWdlcywgbm90IHBpeGVscy5cIixcbiAgZHJ1bW1pbmc6IFwiU2lsZW5jZSBpcyBub3QgcmVzdCBcdTIwMTQgaXQgaXMgdGhlIGRlYXRoIG9mIHJoeXRobS4gUGljayB1cCB0aGUgc3RpY2tzLlwiLFxuICBcImhlYWx0aC1zdHVkeVwiOiBcIktub3dsZWRnZSBvZiB0aGUgYm9keSBpcyBwb3dlciBvdmVyIGl0LiBOZWdsZWN0IGludml0ZXMgaWdub3JhbmNlLlwiLFxuICBzb2NpYWw6IFwiRXZlbiB3YXJyaW9ycyBuZWVkIGZlbGxvd3NoaXAuIElzb2xhdGlvbiBicmVlZHMgc3RhZ25hdGlvbi5cIixcbiAgZHJhd2luZzogXCJUaGUgYmVhc3Qgd2l0aGluIHlvdSBncm93cyB3ZWFrIHdpdGhvdXQgdGhlIGRpc2NpcGxpbmUgb2YgbGluZSBhbmQgZm9ybS5cIixcbn07XG5cbi8vIC0tLSBGYWxsYmFjayBRdW90ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBGQUxMQkFDS19RVU9URVM6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBhdHRyaWJ1dGlvbjogc3RyaW5nIH0+ID0gW1xuICB7IHRleHQ6IFwiWW91IGhhdmUgcG93ZXIgb3ZlciB5b3VyIG1pbmQgXHUyMDE0IG5vdCBvdXRzaWRlIGV2ZW50cy4gUmVhbGl6ZSB0aGlzLCBhbmQgeW91IHdpbGwgZmluZCBzdHJlbmd0aC5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIldlIHN1ZmZlciBtb3JlIG9mdGVuIGluIGltYWdpbmF0aW9uIHRoYW4gaW4gcmVhbGl0eS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBpbXBlZGltZW50IHRvIGFjdGlvbiBhZHZhbmNlcyBhY3Rpb24uIFdoYXQgc3RhbmRzIGluIHRoZSB3YXkgYmVjb21lcyB0aGUgd2F5LlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiTm8gbWFuIGlzIGZyZWUgd2hvIGlzIG5vdCBtYXN0ZXIgb2YgaGltc2VsZi5cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIldhc3RlIG5vIG1vcmUgdGltZSBhcmd1aW5nIGFib3V0IHdoYXQgYSBnb29kIG1hbiBzaG91bGQgYmUuIEJlIG9uZS5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIkl0IGlzIG5vdCB0aGF0IHdlIGhhdmUgYSBzaG9ydCB0aW1lIHRvIGxpdmUsIGJ1dCB0aGF0IHdlIHdhc3RlIGEgZ29vZCBkZWFsIG9mIGl0LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiRmlyc3Qgc2F5IHRvIHlvdXJzZWxmIHdoYXQgeW91IHdvdWxkIGJlOyBhbmQgdGhlbiBkbyB3aGF0IHlvdSBoYXZlIHRvIGRvLlwiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiVGhlIGhhcHBpbmVzcyBvZiB5b3VyIGxpZmUgZGVwZW5kcyB1cG9uIHRoZSBxdWFsaXR5IG9mIHlvdXIgdGhvdWdodHMuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJIZSB3aG8gZmVhcnMgZGVhdGggd2lsbCBuZXZlciBkbyBhbnl0aGluZyB3b3J0aCBvZiBhIG1hbiB3aG8gaXMgYWxpdmUuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJEaWZmaWN1bHRpZXMgc3RyZW5ndGhlbiB0aGUgbWluZCwgYXMgbGFib3IgZG9lcyB0aGUgYm9keS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkhvdyBsb25nIGFyZSB5b3UgZ29pbmcgdG8gd2FpdCBiZWZvcmUgeW91IGRlbWFuZCB0aGUgYmVzdCBmb3IgeW91cnNlbGY/XCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJUaGUgc291bCBiZWNvbWVzIGR5ZWQgd2l0aCB0aGUgY29sb3VyIG9mIGl0cyB0aG91Z2h0cy5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbl07XG5cbi8vIC0tLSBSb21hbiBOdW1lcmFscyBIZWxwZXIgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JvbWFuKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgdmFscyA9IFsxMDAwLCA5MDAsIDUwMCwgNDAwLCAxMDAsIDkwLCA1MCwgNDAsIDEwLCA5LCA1LCA0LCAxXTtcbiAgY29uc3Qgc3ltcyA9IFtcIk1cIiwgXCJDTVwiLCBcIkRcIiwgXCJDRFwiLCBcIkNcIiwgXCJYQ1wiLCBcIkxcIiwgXCJYTFwiLCBcIlhcIiwgXCJJWFwiLCBcIlZcIiwgXCJJVlwiLCBcIklcIl07XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICB3aGlsZSAobnVtID49IHZhbHNbaV0pIHtcbiAgICAgIHJlc3VsdCArPSBzeW1zW2ldO1xuICAgICAgbnVtIC09IHZhbHNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLSBEZWZhdWx0IFdvcmtzcGFjZSBDb21wbGV0aW9uIFN0YXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUzogV29ya3NwYWNlQ29tcGxldGlvblN0YXRlW10gPSBbXG4gIHsgaWQ6IFwiZGlzY2lwbGluZVwiLCBuYW1lOiBcIkRpc2NpcGxpbmVcIiwgaWNvbjogXCJcXHUyNUM2XCIsIGNvbG9yOiBcIiM5MjhkODVcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDEuMCB9LFxuICB7IGlkOiBcImZsb3dcIiwgbmFtZTogXCJGbG93XCIsIGljb246IFwiXFx1MjI0OFwiLCBjb2xvcjogXCIjYzlhODRjXCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAxLjUgfSxcbiAgeyBpZDogXCJza2lwcGVkXCIsIG5hbWU6IFwiU2tpcHBlZFwiLCBpY29uOiBcIlxcdTI1Q0JcIiwgY29sb3I6IFwiIzhiMmQzNVwiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMCB9LFxuXTtcblxuLy8gLS0tIERlZmF1bHQgRGV2IENvbmZpZyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVWX0NPTkZJRzogRGV2Q29uZmlnID0ge1xuICBsYWJlbHM6IHtcbiAgICBncmVldGluZ19tb3JuaW5nOiBcIkdvb2QgbW9ybmluZ1wiLFxuICAgIGdyZWV0aW5nX2FmdGVybm9vbjogXCJHb29kIGFmdGVybm9vblwiLFxuICAgIGdyZWV0aW5nX2V2ZW5pbmc6IFwiR29vZCBldmVuaW5nXCIsXG4gICAgZ3JlZXRpbmdfbmlnaHQ6IFwiR29vZCBuaWdodFwiLFxuICAgIGRpcmVjdGl2ZV90aXRsZTogXCJUSEUgRElSRUNUSVZFXCIsXG4gICAgYm9zc19zdGF0dXNfdGl0bGU6IFwiQk9TUyBTVEFUVVNcIixcbiAgICB3ZWVrbHlfcmh5dGhtX3RpdGxlOiBcIldFRUtMWSBSSFlUSE1cIixcbiAgICBhY3Rpdml0eV9ncmlkX3RpdGxlOiBcIkFDVElWSVRJRVNcIixcbiAgICB0ZW1wbGVfdGl0bGU6IFwiVEhFIFRFTVBMRVwiLFxuICAgIGV1ZGFpbW9uaWFfdGl0bGU6IFwiRXVkYWltb25pYSBJbmRleFwiLFxuICAgIGRheW1hcF90aXRsZTogXCJZT1VSIERBWVwiLFxuICAgIGJlZ2luX3dvcmtzcGFjZTogXCJFTlRFUiBXT1JLU1BBQ0VcIixcbiAgICBub3Rfbm93OiBcIk5PVCBOT1dcIixcbiAgfSxcbiAgeHBQZXJDb21wbGV0aW9uOiAxMCxcbiAgc3RyZWFrQm9udXNNdWx0aXBsaWVyOiAxLjUsXG4gIGJ1ZmZlck1pbnV0ZXM6IDE1LFxuICBtb3JuaW5nU3RhcnQ6IDYsXG4gIG1vcm5pbmdFbmQ6IDEyLFxuICBhZnRlcm5vb25FbmQ6IDE4LFxuICBldmVuaW5nRW5kOiAyMyxcbiAgdGhlbWVPdmVycmlkZXM6IHt9LFxuICBhbmltYXRpb25TdGFnZ2VyTXM6IDgwLFxuICBoZXJvSGVpZ2h0OiAzNTAsXG4gIHNlY3Rpb25PcmRlcjogW1xuICAgIFwiaGVyb1wiLCBcImhlYXRtYXBcIiwgXCJldWRhaW1vbmlhXCIsIFwiZGF5bWFwXCIsIFwiZGlyZWN0aXZlXCIsIFwiYm9zc1wiLFxuICAgIFwid2Vla2x5XCIsIFwiYWN0aXZpdGllc1wiLCBcInRlbXBsZVwiLCBcInF1b3RlXCIsXG4gIF0sXG4gIGhpZGRlblNlY3Rpb25zOiBbXSxcbiAgYWN0aXZpdHlHcmlkQ29sdW1uczogMixcbn07XG5cbi8vIC0tLSBEZWZhdWx0IFBlcnNvbmFsIFN0YXRzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTT05BTF9TVEFUUzogUGVyc29uYWxTdGF0cyA9IHtcbiAgZ2VuZGVyOiBcIm1hbGVcIixcbiAgaGVpZ2h0OiAxNzUsXG4gIGJpcnRoZGF0ZTogXCJcIixcbiAgY3VycmVudFdlaWdodDogMCxcbiAgd2VpZ2h0TG9nOiBbXSxcbiAgd2VpZ2h0TG9nRnJlcXVlbmN5OiBcImV2ZXJ5LXdlZWtcIixcbiAgd2VpZ2h0TG9nQ3VzdG9tRGF5czogNyxcbiAgbGFzdFdlaWdodExvZ0RhdGU6IG51bGwsXG59O1xuXG4vLyAtLS0gTXVzY2xlIEdyb3VwIERlZmluaXRpb25zIC0tLVxuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQUyA9IFtcbiAgXCJjaGVzdFwiLCBcImJhY2tcIiwgXCJzaG91bGRlcnNcIiwgXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIixcbiAgXCJhYnNcIiwgXCJvYmxpcXVlc1wiLCBcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiLFxuICBcInRyYXBzXCIsIFwibGF0c1wiLCBcIm5lY2tcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE11c2NsZUdyb3VwSWQgPSB0eXBlb2YgTVVTQ0xFX0dST1VQU1tudW1iZXJdO1xuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQX0xBQkVMUzogUmVjb3JkPE11c2NsZUdyb3VwSWQsIHN0cmluZz4gPSB7XG4gIGNoZXN0OiBcIkNoZXN0XCIsXG4gIGJhY2s6IFwiQmFja1wiLFxuICBzaG91bGRlcnM6IFwiU2hvdWxkZXJzXCIsXG4gIGJpY2VwczogXCJCaWNlcHNcIixcbiAgdHJpY2VwczogXCJUcmljZXBzXCIsXG4gIGZvcmVhcm1zOiBcIkZvcmVhcm1zXCIsXG4gIGFiczogXCJBYnNcIixcbiAgb2JsaXF1ZXM6IFwiT2JsaXF1ZXNcIixcbiAgcXVhZHM6IFwiUXVhZHNcIixcbiAgaGFtc3RyaW5nczogXCJIYW1zdHJpbmdzXCIsXG4gIGdsdXRlczogXCJHbHV0ZXNcIixcbiAgY2FsdmVzOiBcIkNhbHZlc1wiLFxuICB0cmFwczogXCJUcmFwc1wiLFxuICBsYXRzOiBcIkxhdHNcIixcbiAgbmVjazogXCJOZWNrXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBDYWxlbmRhciBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1M6IENhbGVuZGFyU2V0dGluZ3MgPSB7XG4gIGVuYWJsZURhaWx5Tm90ZXM6IHRydWUsXG4gIGRhaWx5Tm90ZXNGb2xkZXI6IFwiXCIsXG4gIGRhaWx5Tm90ZXNGb3JtYXQ6IFwiWVlZWS1NTS1ERFwiLFxuICBlbmFibGVUYXNrc1BsdWdpbjogZmFsc2UsXG4gIGVuYWJsZVF1aWNrVGFza3M6IHRydWUsXG4gIHF1aWNrVGFza3M6IFtdLFxufTtcblxuLy8gLS0tIERlZmF1bHQgT2xlbiBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0xFTl9TRVRUSU5HUzogT2xlblNldHRpbmdzID0ge1xuICAvLyBQcm9maWxlXG4gIHVzZXJOYW1lOiBcIldhcnJpb3JcIixcbiAgbXlXaHk6IFwiXCIsXG4gIGhlcm9CYWNrZ3JvdW5kOiBcIlwiLFxuICBob21lcGFnZTogXCJcIixcblxuICAvLyBBY3Rpdml0aWVzXG4gIGFjdGl2aXRpZXM6IERFRkFVTFRfQUNUSVZJVElFUyxcblxuICAvLyBDYXRlZ29yaWVzXG4gIGNhdGVnb3J5Q29sb3JzOiB7XG4gICAgYm9keTogXCIjYzlhODRjXCIsXG4gICAgbWluZDogXCIjNmI4Y2NlXCIsXG4gICAgc3Bpcml0OiBcIiM4YjdlYzhcIixcbiAgfSxcbiAgdGl0bGVPdmVycmlkZTogXCJcIixcblxuICAvLyBFdWRhaW1vbmlhXG4gIGNhdGVnb3J5WFA6IHtcbiAgICBib2R5OiAwLFxuICAgIG1pbmQ6IDAsXG4gICAgc3Bpcml0OiAwLFxuICB9LFxuXG4gIC8vIEJvc3NcbiAgY3VycmVudFRpZXI6IDEsXG4gIGJvc3NNYXhIUDogMzUsXG4gIGJvc3NDdXJyZW50SFA6IDM1LFxuICBpblRhcnRhcnVzOiBmYWxzZSxcbiAgdGFydGFydXNQZW5hbmNlVGFza3M6IFtdLFxuICB0YXJ0YXJ1c1N0YXJ0RGF0ZTogbnVsbCxcbiAgZmFpbGVkVGhyZXNob2xkRGF5czogMCxcbiAgY29uc2VjdXRpdmVQZXJmZWN0V2Vla3M6IDAsXG5cbiAgLy8gVGVtcGxlXG4gIHRlbXBsZVRhc2tzOiBbXG4gICAgeyBpZDogXCJiYXRoaW5nXCIsIG5hbWU6IFwiQmF0aGluZ1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDEsIGVtb2ppOiBcIlxcdXsxRjZCRn1cIiB9LFxuICAgIHsgaWQ6IFwiZmFjaWFsLWhhaXJcIiwgbmFtZTogXCJGYWNpYWwgaGFpclwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIsIGVtb2ppOiBcIlxcdXsxRkE5Mn1cIiB9LFxuICAgIHsgaWQ6IFwibmFpbHNcIiwgbmFtZTogXCJOYWlsc1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDcsIGVtb2ppOiBcIlxcdTI3MDJcXHVGRTBGXCIgfSxcbiAgICB7IGlkOiBcImhhaXJjdXRcIiwgbmFtZTogXCJIYWlyY3V0XCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogMjEsIGVtb2ppOiBcIlxcdXsxRjQ4OH1cIiB9LFxuICBdLFxuXG4gIC8vIFJld2FyZHNcbiAgcGVuZGluZ1Jld2FyZHM6IFtdLFxuICBjbGFpbWVkUmV3YXJkczogW10sXG4gIGJhbmtlZFJld2FyZHM6IFtdLFxuXG4gIC8vIFN5c3RlbVxuICBzeXN0ZW1TdGF0ZTogXCJhY3RpdmVcIixcbiAgcGF1c2VTdGFydFRpbWU6IG51bGwsXG4gIHRvdGFsUGF1c2VkVGltZTogMCxcbiAgbWlncmF0ZWQ6IGZhbHNlLFxuICBzaW11bGF0ZWREYXRlOiBudWxsLFxuXG4gIC8vIFRoZW1lXG4gIHRoZW1lT3ZlcnJpZGVzOiB7fSxcblxuICAvLyBEZXZcbiAgZGV2Q29uZmlnOiBERUZBVUxUX0RFVl9DT05GSUcsXG5cbiAgLy8gV29ya3NwYWNlXG4gIHdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXM6IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUyxcbiAgYWN0aXZlV29ya3NwYWNlOiBudWxsLFxuXG4gIC8vIENhbGVuZGFyXG4gIGNhbGVuZGFyOiBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuXG4gIC8vIFBlcnNvbmFsIFN0YXRzXG4gIHBlcnNvbmFsU3RhdHM6IERFRkFVTFRfUEVSU09OQUxfU1RBVFMsXG5cbiAgLy8gUXVvdGVcbiAgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLFxuICBsYXN0UXVvdGVJbmRleDogLTEsXG4gIHJlY2VudFF1b3RlSWRzOiBbXSxcbn07XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXNoYm9hcmQgVmlld1xuLy8gTWFpbiBzY3JvbGxhYmxlIEl0ZW1WaWV3IHJlbmRlcmluZyBhbGwgZGFzaGJvYXJkIHNlY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQ29tcGxldGlvbk1hcCwgQ29tcGxldGlvbiwgQ2FsZW5kYXJUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBDYWxlbmRhckVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0NhbGVuZGFyRW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJIZXJvQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9DYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJFdWRhaW1vbmlhQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXVkYWltb25pYUJhclwiO1xuaW1wb3J0IHsgcmVuZGVyRGlyZWN0aXZlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RpcmVjdGl2ZUNhcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvc3NTdGF0dXNDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9zc1N0YXR1c0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtseVJoeXRobSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlZWtseVJoeXRobVwiO1xuaW1wb3J0IHsgcmVuZGVyQWN0aXZpdHlHcmlkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aXZpdHlHcmlkXCI7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGVDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RlbXBsZUNoaXBzXCI7XG5pbXBvcnQgeyByZW5kZXJRdW90ZUZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlRm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXlUaW1lbGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RheVRpbWVsaW5lXCI7XG5pbXBvcnQgeyByZW5kZXJTdHJlbmd0aEhlYXRtYXAsIHNob3dNdXNjbGVQcm9ncmVzc1BvcHVwLCBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAsIHNob3dNdXNjbGVTZWxlY3RvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0cmVuZ3RoSGVhdG1hcFwiO1xuaW1wb3J0IHsgcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV2VpZ2h0UHJvZ3Jlc3NcIjtcbmltcG9ydCB0eXBlIHsgTXVzY2xlR3JvdXBJZCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSBpbnRlcnZhbHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfT0xFTjtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiT2xlblwiO1xuICB9XG5cbiAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImNvbXBhc3NcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBjbGVhbnVwKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5pbnRlcnZhbHMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZFwiIH0pO1xuXG4gICAgLy8gQXBwbHkgdGhlbWUgb3ZlcnJpZGVzXG4gICAgdGhpcy5hcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3QpO1xuXG4gICAgLy8gR2F0aGVyIGNvbXBsZXRpb24gZGF0YSBmcm9tIHZhdWx0XG4gICAgY29uc3QgY29tcGxldGlvbkRhdGEgPSB0aGlzLmdhdGhlckNvbXBsZXRpb25EYXRhKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGVuZ2luZXNcbiAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBPbGVuRW5naW5lKHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgbm93KTtcblxuICAgIC8vIENhbGVuZGFyIGludGVncmF0aW9uIFx1MjAxNCBnYXRoZXIgY2FsZW5kYXIgdGFza3MgYW5kIGZlZWQgaW50byBlbmdpbmVcbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZSh0aGlzLmFwcCwgc2V0dGluZ3MsIG5vdyk7XG4gICAgY29uc3QgY2FsZW5kYXJUYXNrcyA9IGF3YWl0IHRoaXMuZ2F0aGVyQ2FsZW5kYXJUYXNrcyhjYWxlbmRhckVuZ2luZSk7XG4gICAgY29uc3QgY2FsZW5kYXJFbnRyaWVzID0gY2FsZW5kYXJFbmdpbmUudG9EYXlNYXBFbnRyaWVzKGNhbGVuZGFyVGFza3MpO1xuICAgIGVuZ2luZS5zZXRDYWxlbmRhckVudHJpZXMoY2FsZW5kYXJFbnRyaWVzKTtcblxuICAgIC8vIEJ1aWxkIHNlY3Rpb24gb3JkZXIgZnJvbSBkZXZDb25maWdcbiAgICBjb25zdCBzZWN0aW9uT3JkZXIgPSBzZXR0aW5ncy5kZXZDb25maWcuc2VjdGlvbk9yZGVyO1xuICAgIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQoc2V0dGluZ3MuZGV2Q29uZmlnLmhpZGRlblNlY3Rpb25zKTtcblxuICAgIGxldCBzdGFnZ2VySWR4ID0gMDtcblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uT3JkZXIpIHtcbiAgICAgIGlmIChoaWRkZW4uaGFzKHNlY3Rpb24pKSBjb250aW51ZTtcblxuICAgICAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJoZXJvXCI6XG4gICAgICAgICAgcmVuZGVySGVyb0NhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiaGVhdG1hcFwiOlxuICAgICAgICAgIHJlbmRlclN0cmVuZ3RoSGVhdG1hcChyb290LCBzZXR0aW5ncywgZW5naW5lLCBjb21wbGV0aW9uRGF0YSwgc3RhZ2dlcklkeCsrLCB7XG4gICAgICAgICAgICBvbk11c2NsZUNsaWNrOiAobXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgc2hvd011c2NsZVByb2dyZXNzUG9wdXAobXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Qcm9ncmVzc0NsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dPdmVyYWxsUHJvZ3Jlc3NQb3B1cChzZXR0aW5ncywgY29tcGxldGlvbkRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dNdXNjbGVTZWxlY3Rvcigoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB3b3Jrb3V0IHdpdGggc2VsZWN0ZWQgbXVzY2xlcyBcdTIwMTQgZW50ZXIgd29ya291dCB3b3Jrc3BhY2VcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKFwid29ya291dFwiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFdlaWdodCBub3RpZmljYXRpb24gKHNob3dzIG9ubHkgd2hlbiBkdWUpXG4gICAgICAgICAgcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxvZ1dlaWdodCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJldWRhaW1vbmlhXCI6XG4gICAgICAgICAgcmVuZGVyRXVkYWltb25pYUJhcihyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KTtcbiAgICAgICAgICBzdGFnZ2VySWR4ICs9IDM7IC8vIGV1ZGFpbW9uaWEgY2FyZCArIHN0YXQgY2FyZHMgKyBjYXRlZ29yaWVzIGNhcmRcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZGF5bWFwXCI6XG4gICAgICAgICAgcmVuZGVyRGF5VGltZWxpbmUocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrLCB7XG4gICAgICAgICAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQpID0+IHRoaXMuaGFuZGxlRW50ZXJXb3Jrc3BhY2UoYWN0aXZpdHlJZCksXG4gICAgICAgICAgICBvblNraXA6IChhY3Rpdml0eUlkKSA9PiB0aGlzLmhhbmRsZVNraXBBY3Rpdml0eShhY3Rpdml0eUlkLCBlbmdpbmUpLFxuICAgICAgICAgICAgb25DYWxlbmRhckRvbmU6IChlbnRyeSkgPT4gdGhpcy5oYW5kbGVDYWxlbmRhclRhc2tEb25lKGVudHJ5KSxcbiAgICAgICAgICAgIG9uQ2FsZW5kYXJQb3N0cG9uZTogKGVudHJ5KSA9PiB0aGlzLmhhbmRsZUNhbGVuZGFyVGFza1Bvc3Rwb25lKGVudHJ5KSxcbiAgICAgICAgICAgIG9uQ3JlYXRlRXZlbnQ6ICgpID0+ICh0aGlzLnBsdWdpbiBhcyBhbnkpLnNob3dRdWlja1Rhc2tEaWFsb2coKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZGlyZWN0aXZlXCI6XG4gICAgICAgICAgcmVuZGVyRGlyZWN0aXZlQ2FyZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyssIChhY3Rpdml0eUlkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJib3NzXCI6XG4gICAgICAgICAgcmVuZGVyQm9zc1N0YXR1c0NhcmQocm9vdCwgc2V0dGluZ3MsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIndlZWtseVwiOlxuICAgICAgICAgIHJlbmRlcldlZWtseVJoeXRobShyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJhY3Rpdml0aWVzXCI6XG4gICAgICAgICAgcmVuZGVyQWN0aXZpdHlHcmlkKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInRlbXBsZVwiOlxuICAgICAgICAgIHJlbmRlclRlbXBsZUNoaXBzKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyssICh0YXNrSWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGVtcGxlVXBkYXRlKHRhc2tJZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInF1b3RlXCI6XG4gICAgICAgICAgcmVuZGVyUXVvdGVGb290ZXIocm9vdCwgdGhpcy5hcHAsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyssIChwYXJ0aWFsKSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucGx1Z2luLnNldHRpbmdzLCBwYXJ0aWFsKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBEYXRhIEdhdGhlcmluZyAtLS1cblxuICBnYXRoZXJDb21wbGV0aW9uRGF0YSgpOiBDb21wbGV0aW9uTWFwIHtcbiAgICBjb25zdCBkYXRhOiBDb21wbGV0aW9uTWFwID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICBkYXRhW2FjdGl2aXR5LmlkXSA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGcm9tRm9sZGVyKGFjdGl2aXR5LmZvbGRlciwgYWN0aXZpdHkucHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21wbGV0aW9uc0Zyb21Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZyk6IENvbXBsZXRpb25bXSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIjtcblxuICAgIHJldHVybiBmaWxlc1xuICAgICAgLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5wYXRoID09PSBmb2xkZXJQYXRoIHx8IGZpbGUucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKVxuICAgICAgLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICBjb25zdCBmcm9udG1hdHRlciA9IGNhY2hlPy5mcm9udG1hdHRlcjtcbiAgICAgICAgaWYgKCFmcm9udG1hdHRlciB8fCB0eXBlb2YgZnJvbnRtYXR0ZXJbZmllbGROYW1lXSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGU6IGZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgY29tcGxldGVkOiBmcm9udG1hdHRlcltmaWVsZE5hbWVdID09PSB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGMpOiBjIGlzIENvbXBsZXRpb24gPT4gYyAhPT0gbnVsbCk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgR2F0aGVyaW5nIC0tLVxuXG4gIHByaXZhdGUgYXN5bmMgZ2F0aGVyQ2FsZW5kYXJUYXNrcyhjYWxlbmRhckVuZ2luZTogQ2FsZW5kYXJFbmdpbmUpOiBQcm9taXNlPENhbGVuZGFyVGFza1tdPiB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcblxuICAgIC8vIE9wdGlvbiBBOiBEYWlseSBOb3RlcyBcdTIwMTQgcmVhZCB0b2RheSdzIG5vdGUgY29udGVudFxuICAgIGlmIChzZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzICYmIHNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGZvbGRlciA9IHNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXI7XG4gICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICAgIGNvbnN0IGRhaWx5Tm90ZSA9IGZpbGVzLmZpbmQoKGYpID0+IHtcbiAgICAgICAgaWYgKCFmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSAmJiBmLnBhdGggIT09IGZvbGRlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gZi5iYXNlbmFtZSA9PT0gdG9kYXk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhaWx5Tm90ZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChkYWlseU5vdGUpO1xuICAgICAgICB0YXNrcy5wdXNoKC4uLmNhbGVuZGFyRW5naW5lLmdldERhaWx5Tm90ZVRhc2tzRnJvbUNvbnRlbnQoY29udGVudCwgZGFpbHlOb3RlLnBhdGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpb24gQjogVGFza3MgUGx1Z2luIFx1MjAxNCBzY2FuIGZvciB0YXNrcyB3aXRoIHRvZGF5J3MgZHVlIGRhdGVcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4pIHtcbiAgICAgIGNvbnN0IHRhc2tzUGx1Z2luID0gKHRoaXMuYXBwIGFzIGFueSkucGx1Z2lucz8ucGx1Z2lucz8uW1wib2JzaWRpYW4tdGFza3MtcGx1Z2luXCJdO1xuICAgICAgaWYgKHRhc2tzUGx1Z2luKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgICBjb25zdCBmaWxlc1dpdGhUYXNrczogeyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9W10gPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpKSB7XG4gICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXM/LnNvbWUoKGxpKSA9PiBsaS50YXNrICE9PSB1bmRlZmluZWQpKSBjb250aW51ZTtcblxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgIC8vIFF1aWNrIGNoZWNrOiBkb2VzIHRoZSBjb250ZW50IG1lbnRpb24gdG9kYXkncyBkYXRlIHdpdGggYSBkdWUgZW1vamk/XG4gICAgICAgICAgaWYgKGNvbnRlbnQuaW5jbHVkZXModG9kYXkpKSB7XG4gICAgICAgICAgICBmaWxlc1dpdGhUYXNrcy5wdXNoKHsgcGF0aDogZmlsZS5wYXRoLCBjb250ZW50IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tzLnB1c2goLi4uY2FsZW5kYXJFbmdpbmUuZ2V0VGFza3NQbHVnaW5UYXNrc0Zyb21GaWxlcyhmaWxlc1dpdGhUYXNrcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9wdGlvbiBDOiBRdWljayBUYXNrcyBcdTIwMTQgYWxyZWFkeSBoYW5kbGVkIGJ5IENhbGVuZGFyRW5naW5lLmdldEFsbFRhc2tzKClcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgdGFza3MucHVzaChcbiAgICAgICAgLi4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrc1xuICAgICAgICAgIC5maWx0ZXIoKHF0KSA9PiBxdC5kYXRlID09PSB0b2RheSlcbiAgICAgICAgICAubWFwKChxdCkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBgcXQtJHtxdC5pZH1gLFxuICAgICAgICAgICAgdGl0bGU6IHF0LnRpdGxlLFxuICAgICAgICAgICAgc291cmNlOiBcInF1aWNrLXRhc2tcIiBhcyBjb25zdCxcbiAgICAgICAgICAgIGRhdGU6IHF0LmRhdGUsXG4gICAgICAgICAgICB0aW1lOiBxdC50aW1lLFxuICAgICAgICAgICAgZHVyYXRpb246IHF0LmR1cmF0aW9uLFxuICAgICAgICAgICAgZG9uZTogcXQuZG9uZSxcbiAgICAgICAgICB9KSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIEhhbmRsZXJzIC0tLVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlRW50ZXJXb3Jrc3BhY2UoYWN0aXZpdHlJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybjtcblxuICAgIGlmIChhY3Rpdml0eS5oYXNXb3Jrc3BhY2UpIHtcbiAgICAgIC8vIE9wZW4gbmF0aXZlIE9sZW4gV29ya3NwYWNlVmlld1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0ge1xuICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHNraWxsczogW10sXG4gICAgICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSxcbiAgICAgICAgc2tpbGxGb2xkZXI6IGFjdGl2aXR5LnNraWxsRm9sZGVyLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5wbHVnaW4uYWN0aXZhdGVXb3Jrc3BhY2VWaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vbi13b3Jrc3BhY2UgYWN0aXZpdGllczogbWFyayBkb25lIGltbWVkaWF0ZWx5XG4gICAgICBhd2FpdCB0aGlzLm1hcmtBY3Rpdml0eURvbmUoYWN0aXZpdHkpO1xuICAgICAgbmV3IE5vdGljZShgJHthY3Rpdml0eS5lbW9qaX0gJHthY3Rpdml0eS5uYW1lfSBtYXJrZWQgZG9uZSFgKTtcbiAgICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVTa2lwQWN0aXZpdHkoYWN0aXZpdHlJZDogc3RyaW5nLCBlbmdpbmU6IE9sZW5FbmdpbmUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBNYXJrIGFzIHNraXBwZWQgaW4gdGhlIGRheSBtYXAgKGVuZ2luZSBzdGF0ZSlcbiAgICBjb25zdCBkYXlNYXAgPSBlbmdpbmUuZ2V0RGF5TWFwKCk7XG4gICAgY29uc3QgZW50cnkgPSBkYXlNYXAuZmluZCgoZSkgPT4gZS5hY3Rpdml0eUlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnN0YXR1cyA9IFwic2tpcHBlZFwiO1xuICAgIH1cbiAgICBuZXcgTm90aWNlKFwiU2tpcHBlZFwiKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDYWxlbmRhclRhc2tEb25lKGVudHJ5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5EYXlNYXBFbnRyeSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgfHwgIWVudHJ5LmNhbGVuZGFyU291cmNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZShcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpXG4gICAgKTtcblxuICAgIHN3aXRjaCAoZW50cnkuY2FsZW5kYXJTb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJkYWlseS1ub3RlXCI6XG4gICAgICAgIGlmIChlbnRyeS5maWxlUGF0aCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnRvZ2dsZURhaWx5Tm90ZVRhc2soZW50cnkuZmlsZVBhdGgsIGVudHJ5LmxpbmVOdW1iZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGFza3MtcGx1Z2luXCI6XG4gICAgICAgIGlmIChlbnRyeS5maWxlUGF0aCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnRvZ2dsZVRhc2tzUGx1Z2luVGFzayhlbnRyeS5maWxlUGF0aCwgZW50cnkubGluZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJxdWljay10YXNrXCI6IHtcbiAgICAgICAgY29uc3QgcXRJZCA9IGVudHJ5LmNhbGVuZGFyVGFza0lkPy5yZXBsYWNlKFwicXQtXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBxdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MuZmluZCgocSkgPT4gcS5pZCA9PT0gcXRJZCk7XG4gICAgICAgIGlmIChxdCkge1xuICAgICAgICAgIHF0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoYFxcdTI3MTMgJHtlbnRyeS5hY3Rpdml0eU5hbWV9YCk7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2FsZW5kYXJUYXNrUG9zdHBvbmUoZW50cnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkRheU1hcEVudHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayB8fCAhZW50cnkuY2FsZW5kYXJTb3VyY2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNhbGVuZGFyRW5naW5lID0gbmV3IENhbGVuZGFyRW5naW5lKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncyxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgdGFzazogaW1wb3J0KFwiLi4vdHlwZXNcIikuQ2FsZW5kYXJUYXNrID0ge1xuICAgICAgaWQ6IGVudHJ5LmNhbGVuZGFyVGFza0lkID8/IGVudHJ5LmFjdGl2aXR5SWQsXG4gICAgICB0aXRsZTogZW50cnkuYWN0aXZpdHlOYW1lLFxuICAgICAgc291cmNlOiBlbnRyeS5jYWxlbmRhclNvdXJjZSxcbiAgICAgIGRhdGU6IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgZmlsZVBhdGg6IGVudHJ5LmZpbGVQYXRoLFxuICAgICAgbGluZU51bWJlcjogZW50cnkubGluZU51bWJlcixcbiAgICB9O1xuXG4gICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUucG9zdHBvbmVUYXNrKHRhc2spO1xuICAgIG5ldyBOb3RpY2UoYFxcdTIzRTkgJHtlbnRyeS5hY3Rpdml0eU5hbWV9IHBvc3Rwb25lZCB0byB0b21vcnJvd2ApO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1hcmtBY3Rpdml0eURvbmUoYWN0aXZpdHk6IHsgaWQ6IHN0cmluZzsgZm9sZGVyOiBzdHJpbmc7IHByb3BlcnR5OiBzdHJpbmc7IGNhdGVnb3J5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5DYXRlZ29yeTsgZGFtYWdlUGVyQ29tcGxldGlvbjogbnVtYmVyIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIExvb2sgZm9yIHRvZGF5J3MgZmlsZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IHRvZGF5RmlsZSA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgKTtcblxuICAgIGlmICh0b2RheUZpbGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcih0b2RheUZpbGUsIChmbSkgPT4ge1xuICAgICAgICBmbVthY3Rpdml0eS5wcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgYC0tLVxcbiR7YWN0aXZpdHkucHJvcGVydHl9OiB0cnVlXFxuLS0tXFxuYCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gTWF5IGFscmVhZHkgZXhpc3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBYUCArIGJvc3MgZGFtYWdlXG4gICAgY29uc3QgeHAgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uO1xuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbYWN0aXZpdHkuY2F0ZWdvcnldICs9IHhwO1xuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBNYXRoLm1heChcbiAgICAgIDAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvblxuICAgICk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUxvZ1dlaWdodCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gXCJvbGVuLXF1aWNrLXRhc2stbW9kYWxcIjtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLWJhY2tkcm9wXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXNoZWV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stdGl0bGVcIj5Mb2cgV2VpZ2h0PC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIldlaWdodCAoa2cpXCIgc3RlcD1cIjAuMVwiIG1pbj1cIjIwXCIgbWF4PVwiMzAwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICBjb25zdCBiYWNrZHJvcCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWJhY2tkcm9wXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWNhbmNlbFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBhZGRCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1hZGRcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgaW5wdXQudmFsdWUgPSBTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5jdXJyZW50V2VpZ2h0IHx8IFwiXCIpO1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gbW9kYWwucmVtb3ZlKCk7XG5cbiAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB3ID0gcGFyc2VGbG9hdChpbnB1dC52YWx1ZSk7XG4gICAgICBpZiAoaXNOYU4odykgfHwgdyA8PSAwKSB7XG4gICAgICAgIG5ldyBOb3RpY2UoXCJFbnRlciBhIHZhbGlkIHdlaWdodFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMud2VpZ2h0TG9nLmZpbmQoKGUpID0+IGUuZGF0ZSA9PT0gdG9kYXkpO1xuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIGV4aXN0aW5nLndlaWdodCA9IHc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5wdXNoKHsgZGF0ZTogdG9kYXksIHdlaWdodDogdyB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuY3VycmVudFdlaWdodCA9IHc7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmxhc3RXZWlnaHRMb2dEYXRlID0gdG9kYXk7XG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIG5ldyBOb3RpY2UoYFdlaWdodCBsb2dnZWQ6ICR7d30ga2dgKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBpbnB1dC5mb2N1cygpLCA1MCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVRlbXBsZVVwZGF0ZSh0YXNrSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrcy5maW5kKCh0KSA9PiB0LmlkID09PSB0YXNrSWQpO1xuICAgIGlmICghdGFzaykgcmV0dXJuO1xuXG4gICAgdGFzay5sYXN0Q29tcGxldGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgIG5ldyBOb3RpY2UoYCR7dGFzay5lbW9qaX0gJHt0YXNrLm5hbWV9IGNvbXBsZXRlZCFgKTtcblxuICAgIC8vIFJlLXJlbmRlclxuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvLyAtLS0gVGhlbWUgLS0tXG5cbiAgcHJpdmF0ZSBhcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXM7XG4gICAgaWYgKCFvdmVycmlkZXMpIHJldHVybjtcblxuICAgIGlmIChvdmVycmlkZXMuYmdQcmltYXJ5KSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZy1wcmltYXJ5XCIsIG92ZXJyaWRlcy5iZ1ByaW1hcnkpO1xuICAgIGlmIChvdmVycmlkZXMuY2FyZEJnKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLWJnXCIsIG92ZXJyaWRlcy5jYXJkQmcpO1xuICAgIGlmIChvdmVycmlkZXMudGV4dFByaW1hcnkpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRleHQtcHJpbWFyeVwiLCBvdmVycmlkZXMudGV4dFByaW1hcnkpO1xuICAgIGlmIChvdmVycmlkZXMudGV4dE11dGVkKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LW11dGVkXCIsIG92ZXJyaWRlcy50ZXh0TXV0ZWQpO1xuICAgIGlmIChvdmVycmlkZXMuYWNjZW50R29sZCkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYWNjZW50LWdvbGRcIiwgb3ZlcnJpZGVzLmFjY2VudEdvbGQpO1xuICAgIGlmIChvdmVycmlkZXMuZGFuZ2VyKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1kYW5nZXJcIiwgb3ZlcnJpZGVzLmRhbmdlcik7XG4gICAgaWYgKG92ZXJyaWRlcy5zdWNjZXNzKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zdWNjZXNzXCIsIG92ZXJyaWRlcy5zdWNjZXNzKTtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQm9zcyBFbmdpbmVcbi8vIFJlYWRzIGJvc3Mgc3RhdGUgYW5kIHByb3ZpZGVzIGJvc3MtcmVsYXRlZCBjYWxjdWxhdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQm9zc0RlZmluaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEJPU1NFUywgUkFOS19USUVSX0NPTE9SUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb3NzU3RhdHVzIHtcbiAgYm9zczogQm9zc0RlZmluaXRpb247XG4gIGN1cnJlbnRIUDogbnVtYmVyO1xuICBtYXhIUDogbnVtYmVyO1xuICBwZXJjZW50OiBudW1iZXI7XG4gIHRpZXI6IG51bWJlcjtcbiAgcmFuazogc3RyaW5nO1xuICB0aWVyQ29sb3I6IHN0cmluZztcbiAgaW5UYXJ0YXJ1czogYm9vbGVhbjtcbiAgaXNEYW5nZXJab25lOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQm9zc0VuZ2luZSB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcblxuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogT2xlblNldHRpbmdzKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgZ2V0Qm9zc0ZvclRpZXIodGllcjogbnVtYmVyKTogQm9zc0RlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gQk9TU0VTLmZpbmQoKGIpID0+IGIudGllciA9PT0gdGllcikgPz8gbnVsbDtcbiAgfVxuXG4gIGdldEN1cnJlbnRCb3NzKCk6IEJvc3NEZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9zc0ZvclRpZXIodGhpcy5zZXR0aW5ncy5jdXJyZW50VGllcik7XG4gIH1cblxuICBnZXRCb3NzU3RhdHVzKCk6IEJvc3NTdGF0dXMge1xuICAgIGNvbnN0IHRpZXIgPSB0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyO1xuICAgIGNvbnN0IGJvc3MgPSB0aGlzLmdldEN1cnJlbnRCb3NzKCkgPz8gQk9TU0VTWzBdO1xuICAgIGNvbnN0IGN1cnJlbnRIUCA9IHRoaXMuc2V0dGluZ3MuYm9zc0N1cnJlbnRIUDtcbiAgICBjb25zdCBtYXhIUCA9IHRoaXMuc2V0dGluZ3MuYm9zc01heEhQO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBtYXhIUCA+IDAgPyBNYXRoLnJvdW5kKChjdXJyZW50SFAgLyBtYXhIUCkgKiAxMDApIDogMDtcbiAgICBjb25zdCB0aWVyQ29sb3IgPSBSQU5LX1RJRVJfQ09MT1JTW3RpZXJdID8/IFwiIzZCNzI4MFwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvc3MsXG4gICAgICBjdXJyZW50SFAsXG4gICAgICBtYXhIUCxcbiAgICAgIHBlcmNlbnQsXG4gICAgICB0aWVyLFxuICAgICAgcmFuazogYm9zcy5yYW5rLFxuICAgICAgdGllckNvbG9yLFxuICAgICAgaW5UYXJ0YXJ1czogdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzLFxuICAgICAgaXNEYW5nZXJab25lOiB0aGlzLmlzRGFuZ2VyWm9uZSgpLFxuICAgIH07XG4gIH1cblxuICBpc0RhbmdlclpvbmUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBib3NzQ3VycmVudEhQLCBib3NzTWF4SFAgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgaWYgKGJvc3NNYXhIUCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIChib3NzQ3VycmVudEhQIC8gYm9zc01heEhQKSA8IDAuMTU7XG4gIH1cblxuICBpc0luVGFydGFydXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cztcbiAgfVxuXG4gIGdldEhQQ29sb3IocGVyY2VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAocGVyY2VudCA+IDYwKSByZXR1cm4gXCIjMjJjNTVlXCI7XG4gICAgaWYgKHBlcmNlbnQgPiAzMCkgcmV0dXJuIFwiI2VhYjMwOFwiO1xuICAgIGlmIChwZXJjZW50ID4gMTUpIHJldHVybiBcIiNmOTczMTZcIjtcbiAgICByZXR1cm4gXCIjZWY0NDQ0XCI7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IENvcmUgRW5naW5lXG4vLyBQcmlvcml0eSBsb2dpYywgc3VnZ2VzdGlvbiBhbGdvcml0aG0sIGRheSBtYXAsIGFuYWx5dGljc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgT2xlblNldHRpbmdzLFxuICBBY3Rpdml0eUNvbmZpZyxcbiAgQ29tcGxldGlvbixcbiAgQ29tcGxldGlvbk1hcCxcbiAgRGlyZWN0aXZlU3VnZ2VzdGlvbixcbiAgRGF5TWFwRW50cnksXG4gIENhdGVnb3J5TGV2ZWwsXG4gIENhdGVnb3J5LFxuICBQcmlvcml0eVJlYXNvbixcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBORUdMRUNUX0xPUkUsXG4gIENIQVBURVJfTkFNRVMsXG4gIFNJTkdMRV9ET01JTkFOVF9USVRMRVMsXG4gIFRXT19DQVRFR09SWV9USVRMRVMsXG4gIEJBTEFOQ0VEX1RJVExFUyxcbiAgdG9Sb21hbixcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuL0Jvc3NFbmdpbmVcIjtcblxuZXhwb3J0IGNsYXNzIE9sZW5FbmdpbmUge1xuICBwcml2YXRlIHNldHRpbmdzOiBPbGVuU2V0dGluZ3M7XG4gIHByaXZhdGUgY29tcGxldGlvbnM6IENvbXBsZXRpb25NYXA7XG4gIHByaXZhdGUgbm93OiBEYXRlO1xuICBwcml2YXRlIHRvZGF5OiBzdHJpbmc7XG4gIHByaXZhdGUgYm9zc0VuZ2luZTogQm9zc0VuZ2luZTtcblxuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogT2xlblNldHRpbmdzLCBjb21wbGV0aW9uczogQ29tcGxldGlvbk1hcCwgbm93OiBEYXRlKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuY29tcGxldGlvbnMgPSBjb21wbGV0aW9ucztcbiAgICB0aGlzLm5vdyA9IG5vdztcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRoaXMudG9kYXkgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIHRoaXMuYm9zc0VuZ2luZSA9IG5ldyBCb3NzRW5naW5lKHNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBFZmZlY3RpdmUgRGF0ZSAoc3VwcG9ydHMgc2ltdWxhdGVkIGRhdGUgKyBwYXVzZSkgLS0tXG5cbiAgcHJpdmF0ZSBnZXRFZmZlY3RpdmVOb3coKTogRGF0ZSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkge1xuICAgICAgY29uc3Qgc2ltID0gbmV3IERhdGUodGhpcy5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKTtcbiAgICAgIHNpbS5zZXRIb3VycygxMiwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gc2ltO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIiAmJiB0aGlzLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSk7XG4gIH1cblxuICBwcml2YXRlIGdldEVmZmVjdGl2ZVRvZGF5KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZCA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgfVxuXG4gIC8vIC0tLSBEYXRhIEFjY2VzcyAtLS1cblxuICBnZXRFbmFibGVkQWN0aXZpdGllcygpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKTtcbiAgfVxuXG4gIGdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZDogc3RyaW5nKTogQ29tcGxldGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9uc1thY3Rpdml0eUlkXSA/PyBbXTtcbiAgfVxuXG4gIGdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5SWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB0b2RheU1zID0gbmV3IERhdGUoZWZmZWN0aXZlTm93KS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZERhdGVzID0gY29tcHNcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKVxuICAgICAgLm1hcCgoYykgPT4gbmV3IERhdGUoYy5kYXRlKS5nZXRUaW1lKCkpXG4gICAgICAuZmlsdGVyKCh0KSA9PiAhaXNOYU4odCkgJiYgdCA8PSB0b2RheU1zKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcblxuICAgIGlmIChjb21wbGV0ZWREYXRlcy5sZW5ndGggPT09IDApIHJldHVybiA5OTk7XG5cbiAgICBjb25zdCBtc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKHRvZGF5TXMgLSBjb21wbGV0ZWREYXRlc1swXSkgLyBtc1BlckRheSk7XG4gIH1cblxuICBpc0RvbmVUb2RheShhY3Rpdml0eUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBlZmZlY3RpdmVUb2RheSA9IHRoaXMuZ2V0RWZmZWN0aXZlVG9kYXkoKTtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICByZXR1cm4gY29tcHMuc29tZSgoYykgPT4gYy5kYXRlID09PSBlZmZlY3RpdmVUb2RheSAmJiBjLmNvbXBsZXRlZCk7XG4gIH1cblxuICAvLyAtLS0gV2Vla2x5IFByb2dyZXNzIC0tLVxuXG4gIGdldFdlZWtseVByb2dyZXNzKGFjdGl2aXR5SWQ6IHN0cmluZyk6IHsgZG9uZTogbnVtYmVyOyB0YXJnZXQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm4geyBkb25lOiAwLCB0YXJnZXQ6IDAgfTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3Qgd2Vla1N0YXJ0ID0gdGhpcy5nZXRXZWVrU3RhcnQoZWZmZWN0aXZlTm93KTtcbiAgICBjb25zdCB3ZWVrRW5kID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcbiAgICB3ZWVrRW5kLnNldERhdGUod2Vla0VuZC5nZXREYXRlKCkgKyA3KTtcblxuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGRvbmUgPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgIH0pLmxlbmd0aDtcblxuICAgIHJldHVybiB7IGRvbmUsIHRhcmdldDogYWN0aXZpdHkud2Vla2x5VGFyZ2V0IH07XG4gIH1cblxuICBwcml2YXRlIGdldFdlZWtTdGFydChkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgY29uc3QgZGF5ID0gZC5nZXREYXkoKTtcbiAgICBjb25zdCBkaWZmID0gZC5nZXREYXRlKCkgLSBkYXkgKyAoZGF5ID09PSAwID8gLTYgOiAxKTsgLy8gTW9uZGF5IHN0YXJ0XG4gICAgZC5zZXREYXRlKGRpZmYpO1xuICAgIHJldHVybiBkO1xuICB9XG5cbiAgLy8gLS0tIFN0cmVha3MgLS0tXG5cbiAgZ2V0QWN0aXZpdHlTdHJlYWsoYWN0aXZpdHlJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZWZmZWN0aXZlTm93KTtcbiAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZERhdGVzID0gY29tcHNcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKVxuICAgICAgLm1hcCgoYykgPT4ge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoZCkgPT4gIWlzTmFOKGQuZ2V0VGltZSgpKSAmJiBkIDw9IHRvZGF5KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCkpO1xuXG4gICAgaWYgKGNvbXBsZXRlZERhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG5cbiAgICBsZXQgc3RyZWFrID0gMDtcbiAgICBjb25zdCBjaGVja0RhdGUgPSBuZXcgRGF0ZShjb21wbGV0ZWREYXRlc1swXSk7XG4gICAgZm9yIChjb25zdCBkYXRlIG9mIGNvbXBsZXRlZERhdGVzKSB7XG4gICAgICBpZiAoZGF0ZS5nZXRUaW1lKCkgPT09IGNoZWNrRGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgc3RyZWFrKys7XG4gICAgICAgIGNoZWNrRGF0ZS5zZXREYXRlKGNoZWNrRGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IGNoZWNrRGF0ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmVhaztcbiAgfVxuXG4gIGdldE92ZXJhbGxTdHJlYWsoKTogbnVtYmVyIHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuICAgIGNvbnN0IHN0cmVha3MgPSBhY3Rpdml0aWVzLm1hcCgoYSkgPT4gdGhpcy5nZXRBY3Rpdml0eVN0cmVhayhhLmlkKSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIC4uLnN0cmVha3MpO1xuICB9XG5cbiAgLy8gLS0tIEFuYWx5dGljcyAtLS1cblxuICBnZXRUb3RhbENvbXBsZXRpb25zKCk6IG51bWJlciB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgdG90YWwgKz0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBnZXREYXlzT2ZQcmVzZW5jZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IGRheXNTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgZm9yIChjb25zdCBjIG9mIGNvbXBzKSB7XG4gICAgICAgIGlmIChjLmNvbXBsZXRlZCkgZGF5c1NldC5hZGQoYy5kYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRheXNTZXQuc2l6ZTtcbiAgfVxuXG4gIC8vIC0tLSBDYXRlZ29yeSBYUCAmIExldmVscyAtLS1cblxuICBnZXRDYXRlZ29yeVhQKGNhdGVnb3J5OiBDYXRlZ29yeSk6IG51bWJlciB7XG4gICAgY29uc3QgeHBQZXIgPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb247XG4gICAgbGV0IHhwID0gdGhpcy5zZXR0aW5ncy5jYXRlZ29yeVhQW2NhdGVnb3J5XSA/PyAwO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGlmIChhY3Rpdml0eS5jYXRlZ29yeSAhPT0gY2F0ZWdvcnkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgeHAgPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGggKiB4cFBlcjtcbiAgICB9XG4gICAgcmV0dXJuIHhwO1xuICB9XG5cbiAgZ2V0Q2F0ZWdvcnlMZXZlbChjYXRlZ29yeTogQ2F0ZWdvcnkpOiBDYXRlZ29yeUxldmVsIHtcbiAgICBjb25zdCB4cCA9IHRoaXMuZ2V0Q2F0ZWdvcnlYUChjYXRlZ29yeSk7XG4gICAgY29uc3QgbGV2ZWwgPSBNYXRoLmZsb29yKHhwIC8gMTAwKTtcbiAgICBjb25zdCBwcm9ncmVzc1RvTmV4dCA9IHhwICUgMTAwO1xuICAgIHJldHVybiB7IGNhdGVnb3J5LCB4cCwgbGV2ZWwsIHByb2dyZXNzVG9OZXh0IH07XG4gIH1cblxuICBnZXRBbGxDYXRlZ29yeUxldmVscygpOiBDYXRlZ29yeUxldmVsW10ge1xuICAgIHJldHVybiAoW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSkubWFwKChjKSA9PiB0aGlzLmdldENhdGVnb3J5TGV2ZWwoYykpO1xuICB9XG5cbiAgZ2V0RXVkYWltb25pYUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKS5yZWR1Y2UoKHN1bSwgY2wpID0+IHN1bSArIGNsLmxldmVsLCAwKTtcbiAgfVxuXG4gIGdldENoYXB0ZXIoKTogeyBudW1iZXI6IG51bWJlcjsgbmFtZTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgICBjb25zdCBjaGFwdGVyTnVtID0gTWF0aC5taW4oMTAsIE1hdGguZmxvb3IoaW5kZXggLyAxMCkgKyAxKTtcbiAgICBjb25zdCBuYW1lID0gQ0hBUFRFUl9OQU1FU1tjaGFwdGVyTnVtXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgcmV0dXJuIHsgbnVtYmVyOiBjaGFwdGVyTnVtLCBuYW1lIH07XG4gIH1cblxuICBnZXRFdWRhaW1vbmlhUHJvZ3Jlc3MoKTogbnVtYmVyIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gICAgcmV0dXJuIChpbmRleCAlIDEwKSAqIDEwOyAvLyAwLTEwMCBwcm9ncmVzcyB3aXRoaW4gY2hhcHRlclxuICB9XG5cbiAgLy8gLS0tIER5bmFtaWMgVGl0bGUgLS0tXG5cbiAgZ2V0RHluYW1pY1RpdGxlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudGl0bGVPdmVycmlkZSkgcmV0dXJuIHRoaXMuc2V0dGluZ3MudGl0bGVPdmVycmlkZTtcblxuICAgIGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKTtcbiAgICBjb25zdCB0b3RhbENvbXBsZXRpb25zID0gdGhpcy5nZXRUb3RhbENvbXBsZXRpb25zKCk7XG5cbiAgICBjb25zdCBjYXRlZ29yeUNvbXBsZXRpb25zOiBSZWNvcmQ8Q2F0ZWdvcnksIG51bWJlcj4gPSB7IGJvZHk6IDAsIG1pbmQ6IDAsIHNwaXJpdDogMCB9O1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICBjYXRlZ29yeUNvbXBsZXRpb25zW2FjdGl2aXR5LmNhdGVnb3J5XSArPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWwgPSBPYmplY3QudmFsdWVzKGNhdGVnb3J5Q29tcGxldGlvbnMpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgIGlmICh0b3RhbCA9PT0gMCkgcmV0dXJuIFwiSW5pdGlhdGVcIjtcblxuICAgIGNvbnN0IHdlaWdodHM6IFJlY29yZDxDYXRlZ29yeSwgbnVtYmVyPiA9IHtcbiAgICAgIGJvZHk6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMuYm9keSAvIHRvdGFsIDogMCxcbiAgICAgIG1pbmQ6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMubWluZCAvIHRvdGFsIDogMCxcbiAgICAgIHNwaXJpdDogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5zcGlyaXQgLyB0b3RhbCA6IDAsXG4gICAgfTtcblxuICAgIGNvbnN0IHRpZXIgPSB0b3RhbENvbXBsZXRpb25zIDwgNTAgPyBcImxpZ2h0XCIgOiB0b3RhbENvbXBsZXRpb25zIDwgMjAwID8gXCJtaWRcIiA6IFwiaGVhdnlcIjtcblxuICAgIC8vIENoZWNrIHNpbmdsZSBkb21pbmFudCAoPj0gNzAlKVxuICAgIGZvciAoY29uc3QgY2F0IG9mIFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pIHtcbiAgICAgIGlmICh3ZWlnaHRzW2NhdF0gPj0gMC43MCkge1xuICAgICAgICByZXR1cm4gU0lOR0xFX0RPTUlOQU5UX1RJVExFU1tjYXRdPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGJhbGFuY2VkIChhbGwgPj0gMjUlKVxuICAgIGlmICh3ZWlnaHRzLmJvZHkgPj0gMC4yNSAmJiB3ZWlnaHRzLm1pbmQgPj0gMC4yNSAmJiB3ZWlnaHRzLnNwaXJpdCA+PSAwLjI1KSB7XG4gICAgICByZXR1cm4gQkFMQU5DRURfVElUTEVTW3RpZXJdID8/IFwiSW5pdGlhdGUgb2YgQmFsYW5jZVwiO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHR3by1jYXRlZ29yeSBjb21iaW5hdGlvbnMgKGVhY2ggPj0gMzAlKVxuICAgIGNvbnN0IGNhdHMgPSAoW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSlcbiAgICAgIC5maWx0ZXIoKGMpID0+IHdlaWdodHNbY10gPj0gMC4zMClcbiAgICAgIC5zb3J0KCk7XG5cbiAgICBpZiAoY2F0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IGtleSA9IGNhdHMuam9pbihcIitcIik7XG4gICAgICByZXR1cm4gVFdPX0NBVEVHT1JZX1RJVExFU1trZXldPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrOiB1c2UgZG9taW5hbnQgY2F0ZWdvcnlcbiAgICBjb25zdCBkb21pbmFudCA9IChPYmplY3QuZW50cmllcyh3ZWlnaHRzKSBhcyBbQ2F0ZWdvcnksIG51bWJlcl1bXSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlbMF1bMF07XG4gICAgcmV0dXJuIFNJTkdMRV9ET01JTkFOVF9USVRMRVNbZG9taW5hbnRdPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICB9XG5cbiAgLy8gLS0tIFN1Z2dlc3Rpb24gQWxnb3JpdGhtIChXYXRlcmZhbGwpIC0tLVxuXG4gIGdldFN1Z2dlc3Rpb24oKTogRGlyZWN0aXZlU3VnZ2VzdGlvbiB8IG51bGwge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG4gICAgaWYgKGFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIDEuIERFQVRIIENIRUNLXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cykge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGFjdGl2aXRpZXNbMF0sIFwiZGVhdGhcIiwgXCJFc2NhcGUgVGFydGFydXMgXHUyMDE0IGNvbXBsZXRlIHlvdXIgcGVuYW5jZS5cIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZmFpbGVkVGhyZXNob2xkRGF5cyA+PSAyKSB7XG4gICAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcyk7XG4gICAgICBpZiAobmVnbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKG5lZ2xlY3RlZFswXSwgXCJkZWF0aFwiLCBcIkRlYXRoIGxvb21zLiBBY3Qgbm93IG9yIGRlc2NlbmQgdG8gVGFydGFydXMuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEJPU1MgRklOSVNIXG4gICAgaWYgKHRoaXMuYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgICAgY29uc3QgYmVzdCA9IHRoaXMuZ2V0SGlnaGVzdERhbWFnZUFjdGl2aXR5KGFjdGl2aXRpZXMpO1xuICAgICAgaWYgKGJlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGJlc3QsIFwiYm9zc1wiLCBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuIEZpbmlzaCB0aGUgYmVhc3QuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIE5FR0xFQ1QgKyBQUklPUklUWVxuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICBpZiAobmVnbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMuYXBwbHlSdWxlcyhuZWdsZWN0ZWQpO1xuICAgICAgaWYgKHRvcCkge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZSh0b3AuaWQpO1xuICAgICAgICBjb25zdCBsb3JlID0gTkVHTEVDVF9MT1JFW3RvcC5pZF0gPz8gYCR7ZGF5c30gZGF5cyBzaW5jZSB5b3UgbGFzdCBwcmFjdGljZWQuIFRoZSBza2lsbCBhdHJvcGhpZXMuYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRvcCwgXCJuZWdsZWN0XCIsIGxvcmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIFdFRUtMWSBDQVRDSC1VUFxuICAgIGNvbnN0IGJlaGluZFNjaGVkdWxlID0gdGhpcy5nZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKGJlaGluZFNjaGVkdWxlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvcCA9IGJlaGluZFNjaGVkdWxlWzBdO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKHRvcC5pZCk7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odG9wLCBcIndlZWtseVwiLCBgQmVoaW5kIHNjaGVkdWxlOiAke3Byb2dyZXNzLmRvbmV9LyR7cHJvZ3Jlc3MudGFyZ2V0fSB0aGlzIHdlZWsuYCk7XG4gICAgfVxuXG4gICAgLy8gNS4gQ0hBSU4gQ0hFQ0tcbiAgICBjb25zdCBjaGFpbmVkID0gdGhpcy5nZXRDaGFpbmVkQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAoY2hhaW5lZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oY2hhaW5lZFswXSwgXCJjaGFpblwiLCBcIllvdXIgcHJlcmVxdWlzaXRlIGlzIGRvbmUuIFRpbWUgZm9yIHRoZSBuZXh0IHN0ZXAuXCIpO1xuICAgIH1cblxuICAgIC8vIDYuIFRJTUUtQkFTRURcbiAgICBjb25zdCB0aW1lQmFzZWQgPSB0aGlzLmdldFRpbWVCYXNlZEFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKHRpbWVCYXNlZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odGltZUJhc2VkWzBdLCBcInRpbWVcIiwgXCJUaGUgdGltZSBpcyByaWdodC4gQmVnaW4uXCIpO1xuICAgIH1cblxuICAgIC8vIDcuIEJBTEFOQ0VEIEZBTExCQUNLXG4gICAgY29uc3QgbG9uZ2VzdEdhcCA9IGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYi5pZCkgLSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGEuaWQpKTtcblxuICAgIGlmIChsb25nZXN0R2FwLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihsb25nZXN0R2FwWzBdLCBcImJhbGFuY2VkXCIsIFwiQmFsYW5jZSB5b3VyIHBhdGguIFRoaXMgaGFzIHdhaXRlZCBsb25nZXN0LlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdWdnZXN0aW9uKFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICByZWFzb246IFByaW9yaXR5UmVhc29uLFxuICAgIGxvcmVUZXh0OiBzdHJpbmdcbiAgKTogRGlyZWN0aXZlU3VnZ2VzdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgcmVhc29uLFxuICAgICAgZGF5c1NpbmNlTGFzdERvbmU6IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpLFxuICAgICAgbG9yZVRleHQsXG4gICAgICBwcmlvcml0eTogYWN0aXZpdHkucHJpb3JpdHksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgcmV0dXJuIGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYS5pZCk7XG4gICAgICAgIHJldHVybiBkYXlzID49IGEubmVnbGVjdFRocmVzaG9sZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVJ1bGVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZyB8IG51bGwge1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgICAgLy8gQ2hlY2sgYWx0ZXJuYXRpbmcgcnVsZVxuICAgICAgaWYgKGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoKSB7XG4gICAgICAgIGNvbnN0IGFsdERheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoKTtcbiAgICAgICAgY29uc3QgdGhpc0RheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKTtcbiAgICAgICAgLy8gSWYgdGhpcyB3YXMgZG9uZSBtb3JlIHJlY2VudGx5IHRoYW4gYWx0ZXJuYXRlLCBwcmVmZXIgYWx0ZXJuYXRlXG4gICAgICAgIGlmICh0aGlzRGF5cyA8IGFsdERheXMpIHtcbiAgICAgICAgICBjb25zdCBhbHQgPSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICAgIGlmIChhbHQgJiYgYWx0LmVuYWJsZWQgJiYgIXRoaXMuaXNEb25lVG9kYXkoYWx0LmlkKSkgcmV0dXJuIGFsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBibG9ja2luZyBydWxlc1xuICAgICAgaWYgKGFjdGl2aXR5LmJsb2NrcyAmJiBhY3Rpdml0eS5ibG9ja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUaGlzIGFjdGl2aXR5IGJsb2NrcyBvdGhlcnMgd2hlbiBuZWdsZWN0ZWQgXHUyMDE0IGl0IHNob3VsZCBiZSBwcmlvcml0aXplZFxuICAgICAgICByZXR1cm4gYWN0aXZpdHk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY3Rpdml0eTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2aXRpZXNbMF0gPz8gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGlnaGVzdERhbWFnZUFjdGl2aXR5KGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZyB8IG51bGwge1xuICAgIGNvbnN0IG5vdERvbmUgPSBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkpO1xuICAgIGlmIChub3REb25lLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG5vdERvbmUuc29ydCgoYSwgYikgPT4gYi5kYW1hZ2VQZXJDb21wbGV0aW9uIC0gYS5kYW1hZ2VQZXJDb21wbGV0aW9uKVswXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QmVoaW5kU2NoZWR1bGVBY3Rpdml0aWVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGVmZmVjdGl2ZU5vdy5nZXREYXkoKTsgLy8gMD1TdW5cbiAgICBjb25zdCBhZGp1c3RlZERheSA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7IC8vIE1vbj0xXG4gICAgY29uc3QgcmVtYWluaW5nRGF5cyA9IDcgLSBhZGp1c3RlZERheSArIDE7XG5cbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3MoYS5pZCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHByb2dyZXNzLnRhcmdldCAtIHByb2dyZXNzLmRvbmU7XG4gICAgICAgIHJldHVybiByZW1haW5pbmcgPiAwICYmIHJlbWFpbmluZyA+PSByZW1haW5pbmdEYXlzO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGdldENoYWluZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IHtcbiAgICAgIGlmICghYS5jaGFpbkFmdGVyIHx8IHRoaXMuaXNEb25lVG9kYXkoYS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLmlzRG9uZVRvZGF5KGEuY2hhaW5BZnRlcik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpbWVCYXNlZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGhvdXIgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpLmdldEhvdXJzKCk7XG4gICAgY29uc3QgeyBtb3JuaW5nU3RhcnQsIG1vcm5pbmdFbmQsIGFmdGVybm9vbkVuZCwgZXZlbmluZ0VuZCB9ID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWc7XG5cbiAgICBjb25zdCBjdXJyZW50UGVyaW9kID0gaG91ciA8IG1vcm5pbmdFbmQgPyBcIm1vcm5pbmdcIiA6XG4gICAgICBob3VyIDwgYWZ0ZXJub29uRW5kID8gXCJhZnRlcm5vb25cIiA6XG4gICAgICBob3VyIDwgZXZlbmluZ0VuZCA/IFwiZXZlbmluZ1wiIDogXCJhbnl0aW1lXCI7XG5cbiAgICAvLyBGaXJzdCBjaGVjayB0aW1lIG92ZXJyaWRlc1xuICAgIGNvbnN0IG92ZXJyaWRkZW4gPSBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNEb25lVG9kYXkoYS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghYS50aW1lT3ZlcnJpZGUpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBob3VyID49IGEudGltZU92ZXJyaWRlLnN0YXJ0SG91ciAmJiBob3VyIDwgYS50aW1lT3ZlcnJpZGUuZW5kSG91cjtcbiAgICB9KTtcbiAgICBpZiAob3ZlcnJpZGRlbi5sZW5ndGggPiAwKSByZXR1cm4gb3ZlcnJpZGRlbi5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG5cbiAgICAvLyBUaGVuIGNoZWNrIHByZWZlcnJlZCB0aW1lXG4gICAgcmV0dXJuIGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpICYmIChhLnByZWZlcnJlZFRpbWUgPT09IGN1cnJlbnRQZXJpb2QgfHwgYS5wcmVmZXJyZWRUaW1lID09PSBcImFueXRpbWVcIikpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICB9XG5cbiAgLy8gLS0tIERheSBNYXAgR2VuZXJhdGlvbiAtLS1cblxuICBwcml2YXRlIGNhbGVuZGFyRW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuXG4gIHNldENhbGVuZGFyRW50cmllcyhlbnRyaWVzOiBEYXlNYXBFbnRyeVtdKTogdm9pZCB7XG4gICAgdGhpcy5jYWxlbmRhckVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0RGF5TWFwKCk6IERheU1hcEVudHJ5W10ge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgY29uc3QgeyBtb3JuaW5nU3RhcnQsIG1vcm5pbmdFbmQsIGFmdGVybm9vbkVuZCwgZXZlbmluZ0VuZCwgYnVmZmVyTWludXRlcyB9ID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWc7XG5cbiAgICBjb25zdCB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdID0gW1xuICAgICAgeyBwZXJpb2Q6IFwibW9ybmluZ1wiLCBzdGFydEhvdXI6IG1vcm5pbmdTdGFydCwgZW5kSG91cjogbW9ybmluZ0VuZCB9LFxuICAgICAgeyBwZXJpb2Q6IFwiYWZ0ZXJub29uXCIsIHN0YXJ0SG91cjogbW9ybmluZ0VuZCwgZW5kSG91cjogYWZ0ZXJub29uRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJldmVuaW5nXCIsIHN0YXJ0SG91cjogYWZ0ZXJub29uRW5kLCBlbmRIb3VyOiBldmVuaW5nRW5kIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IGVudHJpZXM6IERheU1hcEVudHJ5W10gPSBbXTtcbiAgICBjb25zdCBzY2hlZHVsZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIC8vIDEuIFBsYWNlIHRpbWUtb3ZlcnJpZGUgYWN0aXZpdGllcyBmaXJzdFxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgICAgaWYgKCFhY3Rpdml0eS50aW1lT3ZlcnJpZGUpIGNvbnRpbnVlO1xuICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgIHN0YXJ0SG91cjogYWN0aXZpdHkudGltZU92ZXJyaWRlLnN0YXJ0SG91cixcbiAgICAgICAgZW5kSG91cjogYWN0aXZpdHkudGltZU92ZXJyaWRlLmVuZEhvdXIsXG4gICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHlSZWFzb246IFwidGltZVwiLFxuICAgICAgfSk7XG4gICAgICBzY2hlZHVsZWQuYWRkKGFjdGl2aXR5LmlkKTtcbiAgICB9XG5cbiAgICAvLyAyLiBQbGFjZSBuZWdsZWN0ZWQgYWN0aXZpdGllcyBpbiB0aGVpciBwcmVmZXJyZWQgc2xvdHNcbiAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcylcbiAgICAgIC5maWx0ZXIoKGEpID0+ICFzY2hlZHVsZWQuaGFzKGEuaWQpKTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgbmVnbGVjdGVkKSB7XG4gICAgICBjb25zdCBzbG90ID0gdGhpcy5maW5kU2xvdEZvckFjdGl2aXR5KGFjdGl2aXR5LCB0aW1lU2xvdHMsIGVudHJpZXMsIGJ1ZmZlck1pbnV0ZXMpO1xuICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgICBzdGFydEhvdXI6IHNsb3Quc3RhcnRIb3VyLFxuICAgICAgICAgIGVuZEhvdXI6IHNsb3QuZW5kSG91cixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24sXG4gICAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJuZWdsZWN0XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBzY2hlZHVsZWQuYWRkKGFjdGl2aXR5LmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBQbGFjZSByZW1haW5pbmcgd2Vla2x5LXRhcmdldCBhY3Rpdml0aWVzXG4gICAgY29uc3QgcmVtYWluaW5nID0gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyhhLmlkKTtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzLmRvbmUgPCBwcm9ncmVzcy50YXJnZXQ7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgcmVtYWluaW5nKSB7XG4gICAgICBjb25zdCBzbG90ID0gdGhpcy5maW5kU2xvdEZvckFjdGl2aXR5KGFjdGl2aXR5LCB0aW1lU2xvdHMsIGVudHJpZXMsIGJ1ZmZlck1pbnV0ZXMpO1xuICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgICBzdGFydEhvdXI6IHNsb3Quc3RhcnRIb3VyLFxuICAgICAgICAgIGVuZEhvdXI6IHNsb3QuZW5kSG91cixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24sXG4gICAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ3ZWVrbHlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGNhbGVuZGFyIHRhc2sgZW50cmllc1xuICAgIGZvciAoY29uc3QgY2FsRW50cnkgb2YgdGhpcy5jYWxlbmRhckVudHJpZXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChjYWxFbnRyeSk7XG4gICAgfVxuXG4gICAgLy8gU29ydCBieSBzdGFydCB0aW1lXG4gICAgZW50cmllcy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKTtcblxuICAgIC8vIE1hcmsgZG9uZSBhY3Rpdml0aWVzIChvbmx5IGZvciBub24tY2FsZW5kYXIgZW50cmllcylcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgJiYgdGhpcy5pc0RvbmVUb2RheShlbnRyeS5hY3Rpdml0eUlkKSkge1xuICAgICAgICBlbnRyeS5zdGF0dXMgPSBcImRvbmVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHByaXZhdGUgZmluZFNsb3RGb3JBY3Rpdml0eShcbiAgICBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsXG4gICAgdGltZVNsb3RzOiB7IHBlcmlvZDogc3RyaW5nOyBzdGFydEhvdXI6IG51bWJlcjsgZW5kSG91cjogbnVtYmVyIH1bXSxcbiAgICBleGlzdGluZzogRGF5TWFwRW50cnlbXSxcbiAgICBidWZmZXJNaW51dGVzOiBudW1iZXJcbiAgKTogeyBzdGFydEhvdXI6IG51bWJlcjsgZW5kSG91cjogbnVtYmVyIH0gfCBudWxsIHtcbiAgICBjb25zdCBkdXJhdGlvbkhvdXJzID0gYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24gLyA2MDtcbiAgICBjb25zdCBidWZmZXJIb3VycyA9IGJ1ZmZlck1pbnV0ZXMgLyA2MDtcblxuICAgIC8vIEZpbmQgcHJlZmVycmVkIHNsb3RcbiAgICBjb25zdCBwcmVmZXJyZWRTbG90ID0gdGltZVNsb3RzLmZpbmQoKHMpID0+IHMucGVyaW9kID09PSBhY3Rpdml0eS5wcmVmZXJyZWRUaW1lKVxuICAgICAgPz8gdGltZVNsb3RzLmZpbmQoKHMpID0+IHMucGVyaW9kID09PSBcImFueXRpbWVcIilcbiAgICAgID8/IHRpbWVTbG90c1swXTtcblxuICAgIC8vIEZpbmQgZmlyc3QgYXZhaWxhYmxlIHRpbWUgaW4gcHJlZmVycmVkIHNsb3RcbiAgICBsZXQgY2FuZGlkYXRlU3RhcnQgPSBwcmVmZXJyZWRTbG90LnN0YXJ0SG91cjtcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZXhpc3Rpbmcuc29ydCgoYSwgYikgPT4gYS5zdGFydEhvdXIgLSBiLnN0YXJ0SG91cikpIHtcbiAgICAgIGlmIChlbnRyeS5zdGFydEhvdXIgPCBwcmVmZXJyZWRTbG90LmVuZEhvdXIgJiYgZW50cnkuZW5kSG91ciA+IGNhbmRpZGF0ZVN0YXJ0KSB7XG4gICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmRpZGF0ZUVuZCA9IGNhbmRpZGF0ZVN0YXJ0ICsgZHVyYXRpb25Ib3VycztcbiAgICBpZiAoY2FuZGlkYXRlRW5kIDw9IHByZWZlcnJlZFNsb3QuZW5kSG91cikge1xuICAgICAgcmV0dXJuIHsgc3RhcnRIb3VyOiBjYW5kaWRhdGVTdGFydCwgZW5kSG91cjogY2FuZGlkYXRlRW5kIH07XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFueSBzbG90XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHRpbWVTbG90cykge1xuICAgICAgaWYgKHNsb3QgPT09IHByZWZlcnJlZFNsb3QpIGNvbnRpbnVlO1xuICAgICAgY2FuZGlkYXRlU3RhcnQgPSBzbG90LnN0YXJ0SG91cjtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZXhpc3Rpbmcuc29ydCgoYSwgYikgPT4gYS5zdGFydEhvdXIgLSBiLnN0YXJ0SG91cikpIHtcbiAgICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgICBjYW5kaWRhdGVTdGFydCA9IGVudHJ5LmVuZEhvdXIgKyBidWZmZXJIb3VycztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNhbmRpZGF0ZVN0YXJ0ICsgZHVyYXRpb25Ib3VycyA8PSBzbG90LmVuZEhvdXIpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRIb3VyOiBjYW5kaWRhdGVTdGFydCwgZW5kSG91cjogY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyAtLS0gV2Vla2x5IERhdGEgZm9yIEJhciBDaGFydCAtLS1cblxuICBnZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiB7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSB0aGlzLmdldFdlZWtTdGFydChlZmZlY3RpdmVOb3cpO1xuICAgIGNvbnN0IGRheXMgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTx7IGRheTogc3RyaW5nOyBkYXRlOiBzdHJpbmc7IGNvbXBsZXRpb25zOiBNYXA8Q2F0ZWdvcnksIG51bWJlcj4gfT4gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcbiAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xuICAgICAgY29uc3QgZGF0ZVN0ciA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBkYXlDb21wbGV0aW9ucyA9IG5ldyBNYXA8Q2F0ZWdvcnksIG51bWJlcj4oKTtcblxuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgICBjb25zdCBkb25lID0gY29tcHMuc29tZSgoYykgPT4gYy5kYXRlID09PSBkYXRlU3RyICYmIGMuY29tcGxldGVkKTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZGF5Q29tcGxldGlvbnMuZ2V0KGFjdGl2aXR5LmNhdGVnb3J5KSA/PyAwO1xuICAgICAgICAgIGRheUNvbXBsZXRpb25zLnNldChhY3Rpdml0eS5jYXRlZ29yeSwgY3VycmVudCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKHsgZGF5OiBkYXlzW2ldLCBkYXRlOiBkYXRlU3RyLCBjb21wbGV0aW9uczogZGF5Q29tcGxldGlvbnMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldEFjdGl2ZURheXNUaGlzV2VlaygpOiBudW1iZXIge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIHJldHVybiB3ZWVrbHkuZmlsdGVyKChkKSA9PiB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZC5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgICAgcmV0dXJuIHRvdGFsID4gMDtcbiAgICB9KS5sZW5ndGg7XG4gIH1cblxuICBnZXRCZXN0RGF5VGhpc1dlZWsoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3ZWVrbHkgPSB0aGlzLmdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTtcbiAgICBsZXQgYmVzdCA9IHdlZWtseVswXTtcbiAgICBsZXQgYmVzdFRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGQgb2Ygd2Vla2x5KSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZC5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgICAgaWYgKHRvdGFsID4gYmVzdFRvdGFsKSB7XG4gICAgICAgIGJlc3RUb3RhbCA9IHRvdGFsO1xuICAgICAgICBiZXN0ID0gZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlc3RUb3RhbCA+IDAgPyBiZXN0LmRheSA6IFwiLS1cIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ2FsZW5kYXIgRW5naW5lXG4vLyBSZWFkcyB0YXNrcyBmcm9tIERhaWx5IE5vdGVzLCBUYXNrcyBwbHVnaW4sIGFuZCBRdWljayBUYXNrc1xuLy8gTWVyZ2VzIHRoZW0gaW50byBDYWxlbmRhclRhc2tbXSBmb3IgRGF5IE1hcCBpbnRlZ3JhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUge1xuICBPbGVuU2V0dGluZ3MsXG4gIENhbGVuZGFyVGFzayxcbiAgRGF5TWFwRW50cnksXG4gIENhbGVuZGFyVGFza1NvdXJjZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckVuZ2luZSB7XG4gIHByaXZhdGUgYXBwOiBBcHA7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcbiAgcHJpdmF0ZSB0b2RheTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBzZXR0aW5nczogT2xlblNldHRpbmdzLCBub3c6IERhdGUpIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0aGlzLnRvZGF5ID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgfVxuXG4gIC8vIC0tLSBNYWluIGVudHJ5OiBnZXQgYWxsIGNhbGVuZGFyIHRhc2tzIGZvciB0b2RheSAtLS1cblxuICBnZXRBbGxUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzKSB7XG4gICAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZ2V0RGFpbHlOb3RlVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4pIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXRUYXNrc1BsdWdpblRhc2tzKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXRRdWlja1Rhc2tzKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBDb252ZXJ0IENhbGVuZGFyVGFza3MgdG8gRGF5TWFwRW50cmllcyAtLS1cblxuICB0b0RheU1hcEVudHJpZXModGFza3M6IENhbGVuZGFyVGFza1tdKTogRGF5TWFwRW50cnlbXSB7XG4gICAgcmV0dXJuIHRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRIb3VyID0gdGFzay50aW1lID8gdGhpcy5wYXJzZVRpbWVUb0hvdXIodGFzay50aW1lKSA6IDk7XG4gICAgICBjb25zdCBkdXJhdGlvbkhvdXJzID0gKHRhc2suZHVyYXRpb24gPz8gMzApIC8gNjA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2aXR5SWQ6IGBjYWwtJHt0YXNrLmlkfWAsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogdGFzay50aXRsZSxcbiAgICAgICAgZW1vamk6IHRoaXMuZ2V0U291cmNlRW1vamkodGFzay5zb3VyY2UpLFxuICAgICAgICBjYXRlZ29yeTogXCJtaW5kXCIgYXMgY29uc3QsIC8vIGNhbGVuZGFyIHRhc2tzIGRlZmF1bHQgdG8gbWluZFxuICAgICAgICBzdGFydEhvdXIsXG4gICAgICAgIGVuZEhvdXI6IHN0YXJ0SG91ciArIGR1cmF0aW9uSG91cnMsXG4gICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiB0YXNrLmR1cmF0aW9uID8/IDMwLFxuICAgICAgICBzdGF0dXM6IHRhc2suZG9uZSA/IFwiZG9uZVwiIGFzIGNvbnN0IDogXCJwZW5kaW5nXCIgYXMgY29uc3QsXG4gICAgICAgIGlzQ2FsZW5kYXJUYXNrOiB0cnVlLFxuICAgICAgICBjYWxlbmRhclNvdXJjZTogdGFzay5zb3VyY2UsXG4gICAgICAgIGNhbGVuZGFyVGFza0lkOiB0YXNrLmlkLFxuICAgICAgICBmaWxlUGF0aDogdGFzay5maWxlUGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogdGFzay5saW5lTnVtYmVyLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQTogRGFpbHkgTm90ZXMgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXREYWlseU5vdGVUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgZm9sZGVyID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgIGlmICghZm9sZGVyKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gRmluZCB0b2RheSdzIGRhaWx5IG5vdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICBpZiAoIWYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpICYmIGYucGF0aCAhPT0gZm9sZGVyKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gZi5iYXNlbmFtZSA9PT0gdGhpcy50b2RheTtcbiAgICB9KTtcblxuICAgIGlmICghZGFpbHlOb3RlKSByZXR1cm4gW107XG5cbiAgICAvLyBSZWFkIGNhY2hlZCBjb250ZW50IGFuZCBwYXJzZSB0YXNrc1xuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZGFpbHlOb3RlKTtcbiAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXMpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBsaXN0SXRlbSBvZiBjYWNoZS5saXN0SXRlbXMpIHtcbiAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlOyAvLyBub3QgYSBjaGVja2JveFxuXG4gICAgICBjb25zdCBsaW5lU3RhcnQgPSBsaXN0SXRlbS5wb3NpdGlvbi5zdGFydC5saW5lO1xuXG4gICAgICAvLyBSZWFkIHRoZSBsaW5lIGNvbnRlbnQgZnJvbSBjYWNoZSBzZWN0aW9uc1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0TGluZUNvbnRlbnQoZGFpbHlOb3RlLCBsaW5lU3RhcnQpO1xuICAgICAgaWYgKCFjb250ZW50KSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGNvbnRlbnQpO1xuICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2RhaWx5Tm90ZS5wYXRofS1MJHtsaW5lU3RhcnR9YCxcbiAgICAgICAgdGl0bGU6IHBhcnNlZC50aXRsZSxcbiAgICAgICAgc291cmNlOiBcImRhaWx5LW5vdGVcIixcbiAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgdGltZTogcGFyc2VkLnRpbWUsXG4gICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IGxpc3RJdGVtLnRhc2sgPT09IFwieFwiIHx8IGxpc3RJdGVtLnRhc2sgPT09IFwiWFwiLFxuICAgICAgICBmaWxlUGF0aDogZGFpbHlOb3RlLnBhdGgsXG4gICAgICAgIGxpbmVOdW1iZXI6IGxpbmVTdGFydCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIFBhcnNlIFwiLSBbIF0gVGFzayBuYW1lIEAxNDowMCB+MzBtXCIgZm9ybWF0XG4gIHByaXZhdGUgcGFyc2VUYXNrTGluZShsaW5lOiBzdHJpbmcpOiB7IHRpdGxlOiBzdHJpbmc7IHRpbWU/OiBzdHJpbmc7IGR1cmF0aW9uPzogbnVtYmVyIH0gfCBudWxsIHtcbiAgICAvLyBSZW1vdmUgY2hlY2tib3ggcHJlZml4OiBcIi0gWyBdIFwiIG9yIFwiLSBbeF0gXCJcbiAgICBjb25zdCBtYXRjaCA9IGxpbmUubWF0Y2goL15bLSpdXFxzKlxcWy4/XFxdXFxzKiguKykkLyk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdGV4dCA9IG1hdGNoWzFdLnRyaW0oKTtcblxuICAgIC8vIEV4dHJhY3QgQHRpbWUgKGUuZy4sIEAxNDowMCBvciBAMnBtKVxuICAgIGxldCB0aW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGltZU1hdGNoID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSk6KFxcZHsyfSlcXGIvKTtcbiAgICBpZiAodGltZU1hdGNoKSB7XG4gICAgICB0aW1lID0gYCR7dGltZU1hdGNoWzFdLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHt0aW1lTWF0Y2hbMl19YDtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UodGltZU1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSBAMnBtIC8gQDE0IGZvcm1hdFxuICAgICAgY29uc3Qgc2ltcGxlVGltZSA9IHRleHQubWF0Y2goL0AoXFxkezEsMn0pXFxzKihhbXxwbSk/XFxiL2kpO1xuICAgICAgaWYgKHNpbXBsZVRpbWUpIHtcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChzaW1wbGVUaW1lWzFdKTtcbiAgICAgICAgY29uc3QgcGVyaW9kID0gc2ltcGxlVGltZVsyXT8udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gXCJwbVwiICYmIGhvdXIgPCAxMikgaG91ciArPSAxMjtcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gXCJhbVwiICYmIGhvdXIgPT09IDEyKSBob3VyID0gMDtcbiAgICAgICAgdGltZSA9IGAke1N0cmluZyhob3VyKS5wYWRTdGFydCgyLCBcIjBcIil9OjAwYDtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShzaW1wbGVUaW1lWzBdLCBcIlwiKS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCB+ZHVyYXRpb24gKGUuZy4sIH4zMG0sIH4xaCwgfjEuNWgpXG4gICAgbGV0IGR1cmF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgZHVyYXRpb25NYXRjaCA9IHRleHQubWF0Y2goL34oXFxkKyg/OlxcLlxcZCspPylcXHMqKG18bWlufGh8aHJ8aG91cilzP1xcYi9pKTtcbiAgICBpZiAoZHVyYXRpb25NYXRjaCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KGR1cmF0aW9uTWF0Y2hbMV0pO1xuICAgICAgY29uc3QgdW5pdCA9IGR1cmF0aW9uTWF0Y2hbMl0udG9Mb3dlckNhc2UoKTtcbiAgICAgIGR1cmF0aW9uID0gdW5pdC5zdGFydHNXaXRoKFwiaFwiKSA/IE1hdGgucm91bmQodmFsdWUgKiA2MCkgOiBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoZHVyYXRpb25NYXRjaFswXSwgXCJcIikudHJpbSgpO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIGFueSB0cmFpbGluZy9sZWFkaW5nIHdoaXRlc3BhY2Ugb3IgZGFzaGVzXG4gICAgY29uc3QgdGl0bGUgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbiAgICBpZiAoIXRpdGxlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7IHRpdGxlLCB0aW1lLCBkdXJhdGlvbiB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW5lQ29udGVudChmaWxlOiBURmlsZSwgbGluZU51bWJlcjogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgLy8gVXNlIHRoZSBtZXRhZGF0YUNhY2hlIHNlY3Rpb25zIHRvIHJlY29uc3RydWN0IGxpbmUgY29udGVudFxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlYWQgZnJvbSB0aGUgdmF1bHQgY2FjaGUgXHUyMDE0IHRyeSBnZXR0aW5nIGNvbnRlbnQgdmlhIHNlY3Rpb25zXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luY2hyb25vdXNseSByZWFkIGZpbGUgY29udGVudCwgdXNlIHRoZSBjYWNoZWQgZnJvbnRtYXR0ZXJcbiAgICAvLyBhbmQgbGlzdCBpdGVtcyB0byBidWlsZCB3aGF0IHdlIG5lZWRcbiAgICAvLyBBY3R1YWxseSwgbGlzdCBpdGVtcyBpbiBPYnNpZGlhbiBjYWNoZSBkb24ndCBpbmNsdWRlIHRoZSB0ZXh0LlxuICAgIC8vIFdlJ2xsIG5lZWQgdG8gcmVhZCB0aGUgZmlsZSBjb250ZW50LiBTdG9yZSBpdCBpbiBhIG1hcCBkdXJpbmcgZ2F0aGVyIHBoYXNlLlxuICAgIC8vIEZvciBub3csIHJldHVybiBudWxsIFx1MjAxNCB0aGUgRGFzaGJvYXJkVmlldyB3aWxsIHByZS1yZWFkIGRhaWx5IG5vdGUgY29udGVudFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtcmVhZCBmaWxlIGNvbnRlbnRcbiAgZ2V0RGFpbHlOb3RlVGFza3NGcm9tQ29udGVudChjb250ZW50OiBzdHJpbmcsIGZpbGVQYXRoOiBzdHJpbmcpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgLy8gTWF0Y2ggdGFzayBsaW5lczogLSBbIF0gb3IgLSBbeF1cbiAgICAgIGlmICghL15bLSpdXFxzKlxcWy4/XFxdXFxzLy50ZXN0KGxpbmUpKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGxpbmUpO1xuICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBpc0RvbmUgPSAvXlstKl1cXHMqXFxbW3hYXVxcXS8udGVzdChsaW5lKTtcblxuICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgZG4tJHtmaWxlUGF0aH0tTCR7aX1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQjogVGFza3MgUGx1Z2luIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgZ2V0VGFza3NQbHVnaW5UYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgLy8gQ2hlY2sgaWYgVGFza3MgcGx1Z2luIGlzIGluc3RhbGxlZFxuICAgIGNvbnN0IHRhc2tzUGx1Z2luID0gKHRoaXMuYXBwIGFzIGFueSkucGx1Z2lucz8ucGx1Z2lucz8uW1wib2JzaWRpYW4tdGFza3MtcGx1Z2luXCJdO1xuICAgIGlmICghdGFza3NQbHVnaW4pIHJldHVybiBbXTtcblxuICAgIC8vIFRhc2tzIHBsdWdpbiBzdG9yZXMgdGFza3MgdmlhIG1ldGFkYXRhIGNhY2hlXG4gICAgLy8gV2Ugc2NhbiBhbGwgZmlsZXMgZm9yIHRhc2tzIHdpdGggZHVlIGRhdGVzIG1hdGNoaW5nIHRvZGF5XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXMpIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgICBpZiAobGlzdEl0ZW0udGFzayA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBUYXNrcyBwbHVnaW4gdXNlcyBlbW9qaS1iYXNlZCBkYXRlcyBpbiB0aGUgdGV4dDpcbiAgICAgICAgLy8gXHVEODNEXHVEQ0M1IFlZWVktTU0tREQgZm9yIGR1ZSBkYXRlXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVhZCB0aGUgZmlsZSB0byBjaGVjaywgYnV0IHdlIGNhbiB1c2UgdGhlIGZyb250bWF0dGVyLWJhc2VkXG4gICAgICAgIC8vIGFwcHJvYWNoIG9yIHRoZSBwb3NpdGlvbiB0byBnZXQgdGhlIHRleHQuXG4gICAgICAgIC8vIFNpbmNlIHdlIGNhbid0IHN5bmMtcmVhZCwgd2UnbGwgY2hlY2sgaWYgcG9zaXRpb25zIG1lbnRpb24gdG9kYXkuXG4gICAgICAgIC8vIEZvciBub3csIHRoaXMgaXMgYSBiZXN0LWVmZm9ydCBjaGVjayB1c2luZyBjYWNoZSBkYXRhLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIENhbGxlZCBieSBEYXNoYm9hcmRWaWV3IHdpdGggcHJlLXNjYW5uZWQgdGFzayBkYXRhXG4gIGdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXM6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGZpbGUuY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGlmICghL15bLSpdXFxzKlxcWy4/XFxdXFxzLy50ZXN0KGxpbmUpKSBjb250aW51ZTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgVGFza3MgcGx1Z2luIGR1ZSBkYXRlOiBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERFxuICAgICAgICBjb25zdCBkdWVNYXRjaCA9IGxpbmUubWF0Y2goL1xcdXsxRjRDNX1cXHMqKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS91KTtcbiAgICAgICAgaWYgKCFkdWVNYXRjaCB8fCBkdWVNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGxpbmUpO1xuICAgICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgICAgLy8gQWxzbyBjaGVjayBmb3Igc2NoZWR1bGVkIGRhdGUgXHUyM0YzXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlZE1hdGNoID0gbGluZS5tYXRjaCgvXFx1MjNGM1xccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoc2NoZWR1bGVkTWF0Y2ggJiYgc2NoZWR1bGVkTWF0Y2hbMV0gIT09IHRoaXMudG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdHAtJHtmaWxlLnBhdGh9LUwke2l9YCxcbiAgICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLnJlcGxhY2UoL1tcXHV7MUY0QzV9XFx1MjNGM11cXHMqXFxkezR9LVxcZHsyfS1cXGR7Mn0vZ3UsIFwiXCIpLnRyaW0oKSxcbiAgICAgICAgICBzb3VyY2U6IFwidGFza3MtcGx1Z2luXCIsXG4gICAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICAgIGRvbmU6IGlzRG9uZSxcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IGksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQzogQnVpbHQtaW4gUXVpY2sgVGFza3MgLS0tXG5cbiAgcHJpdmF0ZSBnZXRRdWlja1Rhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzXG4gICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdGhpcy50b2RheSlcbiAgICAgIC5tYXAoKHF0KSA9PiAoe1xuICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgdGl0bGU6IHF0LnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwicXVpY2stdGFza1wiIGFzIENhbGVuZGFyVGFza1NvdXJjZSxcbiAgICAgICAgZGF0ZTogcXQuZGF0ZSxcbiAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHF0LmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBxdC5kb25lLFxuICAgICAgfSkpO1xuICB9XG5cbiAgLy8gLS0tIENvbXBsZXRpb24gaGFuZGxlcnMgLS0tXG5cbiAgLy8gVG9nZ2xlIGEgZGFpbHkgbm90ZSB0YXNrIGRvbmUvdW5kb25lIGJ5IHJld3JpdGluZyB0aGUgY2hlY2tib3hcbiAgYXN5bmMgdG9nZ2xlRGFpbHlOb3RlVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBpZiAobGluZU51bWJlciA+PSBsaW5lcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tsaW5lTnVtYmVyXTtcbiAgICBpZiAoZG9uZSkge1xuICAgICAgbGluZXNbbGluZU51bWJlcl0gPSBsaW5lLnJlcGxhY2UoL1xcWy5cXF0vLCBcIlt4XVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZXNbbGluZU51bWJlcl0gPSBsaW5lLnJlcGxhY2UoL1xcWy5cXF0vLCBcIlsgXVwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYSBUYXNrcyBwbHVnaW4gdGFza1xuICBhc3luYyB0b2dnbGVUYXNrc1BsdWdpblRhc2soZmlsZVBhdGg6IHN0cmluZywgbGluZU51bWJlcjogbnVtYmVyLCBkb25lOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2FtZSBtZWNoYW5pc20gYXMgZGFpbHkgbm90ZXMgXHUyMDE0IGp1c3QgdG9nZ2xlIHRoZSBjaGVja2JveFxuICAgIGF3YWl0IHRoaXMudG9nZ2xlRGFpbHlOb3RlVGFzayhmaWxlUGF0aCwgbGluZU51bWJlciwgZG9uZSk7XG4gIH1cblxuICAvLyBQb3N0cG9uZSBhIHRhc2sgdG8gdG9tb3Jyb3dcbiAgYXN5bmMgcG9zdHBvbmVUYXNrKHRhc2s6IENhbGVuZGFyVGFzayk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodGhpcy50b2RheSk7XG4gICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcbiAgICBjb25zdCB0b21vcnJvd1N0ciA9IHRvbW9ycm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgaWYgKHRhc2suc291cmNlID09PSBcInF1aWNrLXRhc2tcIikge1xuICAgICAgLy8gVXBkYXRlIGluIHNldHRpbmdzXG4gICAgICBjb25zdCBxdCA9IHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maW5kKFxuICAgICAgICAocSkgPT4gYHF0LSR7cS5pZH1gID09PSB0YXNrLmlkIHx8IHEuaWQgPT09IHRhc2suaWQucmVwbGFjZShcInF0LVwiLCBcIlwiKVxuICAgICAgKTtcbiAgICAgIGlmIChxdCkge1xuICAgICAgICBxdC5wb3N0cG9uZWRGcm9tID0gcXQucG9zdHBvbmVkRnJvbSA/PyBxdC5kYXRlO1xuICAgICAgICBxdC5kYXRlID0gdG9tb3Jyb3dTdHI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YXNrLnNvdXJjZSA9PT0gXCJ0YXNrcy1wbHVnaW5cIiAmJiB0YXNrLmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgdGFzay5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgZHVlIGRhdGUgaW4gdGhlIGZpbGVcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGFzay5maWxlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICBpZiAodGFzay5saW5lTnVtYmVyIDwgbGluZXMubGVuZ3RoKSB7XG4gICAgICAgIGxpbmVzW3Rhc2subGluZU51bWJlcl0gPSBsaW5lc1t0YXNrLmxpbmVOdW1iZXJdLnJlcGxhY2UoXG4gICAgICAgICAgL1xcdXsxRjRDNX1cXHMqXFxkezR9LVxcZHsyfS1cXGR7Mn0vdSxcbiAgICAgICAgICBgXFx1ezFGNEM1fSAke3RvbW9ycm93U3RyfWBcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIGxpbmVzLmpvaW4oXCJcXG5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBIZWxwZXJzIC0tLVxuXG4gIHByaXZhdGUgcGFyc2VUaW1lVG9Ib3VyKHRpbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgW2gsIG1dID0gdGltZS5zcGxpdChcIjpcIikubWFwKE51bWJlcik7XG4gICAgcmV0dXJuIGggKyAobSA/PyAwKSAvIDYwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3VyY2VFbW9qaShzb3VyY2U6IENhbGVuZGFyVGFza1NvdXJjZSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChzb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJkYWlseS1ub3RlXCI6IHJldHVybiBcIlxcdXsxRjRERH1cIjtcbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjogcmV0dXJuIFwiXFx1MjYxMVxcdUZFMEZcIjtcbiAgICAgIGNhc2UgXCJxdWljay10YXNrXCI6IHJldHVybiBcIlxcdTI2QTFcIjtcbiAgICB9XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEhlcm8gQ2FyZCBDb21wb25lbnRcbi8vIEZ1bGwtd2lkdGggYmx1cnJlZCBiZyB3aXRoIGdyZWV0aW5nLCByYW5rIGJhZGdlLCBhY3Rpb24gYnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvQm9zc0VuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhlcm9DYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgaGVybyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvXCIgfSk7XG4gIGhlcm8uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEJhY2tncm91bmQgaW1hZ2VcbiAgaWYgKHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kKSB7XG4gICAgY29uc3QgYmcgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYmdcIiB9KTtcbiAgICBjb25zdCB2YXVsdFBhdGggPSBzZXR0aW5ncy5oZXJvQmFja2dyb3VuZDtcbiAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt2YXVsdFBhdGh9XCIpYDtcbiAgfVxuXG4gIC8vIERhcmsgdmlnbmV0dGUgb3ZlcmxheVxuICBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tb3ZlcmxheVwiIH0pO1xuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1jb250ZW50XCIgfSk7XG5cbiAgLy8gVGltZS1iYXNlZCBncmVldGluZ1xuICBjb25zdCBncmVldGluZyA9IGdldEdyZWV0aW5nKHNldHRpbmdzKTtcbiAgY29udGVudC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1ncmVldGluZ1wiLFxuICAgIHRleHQ6IGAke2dyZWV0aW5nfSwgJHtzZXR0aW5ncy51c2VyTmFtZX0uYCxcbiAgfSk7XG5cbiAgLy8gQ29udGV4dHVhbCBzdWJ0aXRsZVxuICBjb25zdCBzdWJ0aXRsZSA9IGdldFN1YnRpdGxlKHNldHRpbmdzLCBlbmdpbmUpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLXN1YnRpdGxlXCIsXG4gICAgdGV4dDogc3VidGl0bGUsXG4gIH0pO1xuXG4gIC8vIFJhbmsgYmFkZ2UgcGlsbFxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY29uc3QgZXVkSW5kZXggPSBlbmdpbmUuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gIGNvbnN0IGJhZGdlID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLXJhbmstYmFkZ2VcIiB9KTtcbiAgYmFkZ2UuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLXJhbmstdGV4dFwiLFxuICAgIHRleHQ6IGAke3RpdGxlfSBcdTAwQjcgJHt0b1JvbWFuKGV1ZEluZGV4KX1gLFxuICB9KTtcblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBjb25zdCBhY3Rpb25zID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBwcm9ncmVzc0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tYnRuXCIsXG4gICAgdGV4dDogXCJZb3VyIHByb2dyZXNzXCIsXG4gIH0pO1xuICBwcm9ncmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgZXVkYWltb25pYSBzZWN0aW9uXG4gICAgY29uc3QgZXVkU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tY2FyZFwiKTtcbiAgICBpZiAoZXVkU2VjdGlvbikgZXVkU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9KTtcblxuICBjb25zdCByZWZsZWN0QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIlJlZmxlY3RcIixcbiAgfSk7XG4gIHJlZmxlY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTY3JvbGwgdG8gdGhlIHF1b3RlIHNlY3Rpb25cbiAgICBjb25zdCBxdW90ZVNlY3Rpb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1b3RlXCIpO1xuICAgIGlmIChxdW90ZVNlY3Rpb24pIHF1b3RlU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JlZXRpbmcoc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyk6IHN0cmluZyB7XG4gIGNvbnN0IGxhYmVscyA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHM7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXIgPSBub3cuZ2V0SG91cnMoKTtcblxuICBpZiAoaG91ciA+PSA1ICYmIGhvdXIgPCAxMikgcmV0dXJuIGxhYmVscy5ncmVldGluZ19tb3JuaW5nID8/IFwiR29vZCBtb3JuaW5nXCI7XG4gIGlmIChob3VyID49IDEyICYmIGhvdXIgPCAxNykgcmV0dXJuIGxhYmVscy5ncmVldGluZ19hZnRlcm5vb24gPz8gXCJHb29kIGFmdGVybm9vblwiO1xuICBpZiAoaG91ciA+PSAxNyAmJiBob3VyIDwgMjEpIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfZXZlbmluZyA/PyBcIkdvb2QgZXZlbmluZ1wiO1xuICByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX25pZ2h0ID8/IFwiR29vZCBuaWdodFwiO1xufVxuXG5mdW5jdGlvbiBnZXRTdWJ0aXRsZShzZXR0aW5nczogT2xlblNldHRpbmdzLCBlbmdpbmU6IE9sZW5FbmdpbmUpOiBzdHJpbmcge1xuICBjb25zdCBib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuXG4gIC8vIFRhcnRhcnVzXG4gIGlmIChzZXR0aW5ncy5pblRhcnRhcnVzKSB7XG4gICAgcmV0dXJuIFwiVGhlIHVuZGVyd29ybGQgYXdhaXRzIHlvdXIgcGVuYW5jZS5cIjtcbiAgfVxuXG4gIC8vIEJvc3MgZGFuZ2VyIHpvbmVcbiAgaWYgKGJvc3NFbmdpbmUuaXNEYW5nZXJab25lKCkpIHtcbiAgICByZXR1cm4gXCJPbmUgZmluYWwgYmxvdyByZW1haW5zLlwiO1xuICB9XG5cbiAgLy8gQWN0aXZlIHN0cmVha1xuICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0T3ZlcmFsbFN0cmVhaygpO1xuICBpZiAoc3RyZWFrID49IDMpIHtcbiAgICByZXR1cm4gYCR7c3RyZWFrfSBkYXlzIHN0cm9uZy4gS2VlcCB0aGUgZmxhbWUuYDtcbiAgfVxuXG4gIC8vIERlZmF1bHRcbiAgcmV0dXJuIFwiU3RlcCBieSBzdGVwLCB5b3Ugc2hhcGUgeW91ciBwYXRoLlwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgRXVkYWltb25pYSBCYXIgQ29tcG9uZW50XG4vLyBTZWdtZW50ZWQgcHJvZ3Jlc3MgYmFyLCBzdGF0IGNhcmRzLCBjYXRlZ29yeSByb3dzIHdpdGggaWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IHRvUm9tYW4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IENBVEVHT1JZX0lDT05TOiBSZWNvcmQ8Q2F0ZWdvcnksIHN0cmluZz4gPSB7XG4gIGJvZHk6IFwiXFx1ezFGM0NCfVwiLCAvLyB3ZWlnaHRsaWZ0ZXJcbiAgbWluZDogXCJcXHV7MUY0REF9XCIsIC8vIGJvb2tzXG4gIHNwaXJpdDogXCJcXHV7MUY1NEF9XCIsIC8vIGRvdmVcbn07XG5cbmNvbnN0IFRPVEFMX1NFR01FTlRTID0gMTA7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFdWRhaW1vbmlhQmFyKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgLy8gLS0tIDEuIEV1ZGFpbW9uaWEgQ2FyZCAoc2VnbWVudGVkIGJhciArIGNoYXB0ZXIpIC0tLVxuICByZW5kZXJFdWRhaW1vbmlhQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCk7XG5cbiAgLy8gLS0tIDIuIFN0YXQgQ2FyZHMgUm93IChzZXBhcmF0ZSBmcm9tIHRoZSBjYXJkKSAtLS1cbiAgcmVuZGVyU3RhdENhcmRzKGNvbnRhaW5lciwgZW5naW5lLCBzdGFnZ2VySW5kZXggKyAxKTtcblxuICAvLyAtLS0gMy4gQ2F0ZWdvcmllcyBDYXJkIChpY29uIHJvd3Mgd2l0aCBiYXJzKSAtLS1cbiAgcmVuZGVyQ2F0ZWdvcmllc0NhcmQoY29udGFpbmVyLCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySW5kZXggKyAyKTtcbn1cblxuLy8gLS0tLSBFdWRhaW1vbmlhIENhcmQgLS0tLVxuXG5mdW5jdGlvbiByZW5kZXJFdWRhaW1vbmlhQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXI6IHRpdGxlICsgWFBcbiAgY29uc3QgaGVhZGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWhlYWRlclwiIH0pO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcblxuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtdGl0bGVcIixcbiAgICB0ZXh0OiBgRXVkYWltb25pYSAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIGNvbnN0IHRvdGFsWFAgPSBlbmdpbmUuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKS5yZWR1Y2UoKHN1bSwgY2wpID0+IHN1bSArIGNsLnhwLCAwKTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXhwXCIsXG4gICAgdGV4dDogYCR7dG90YWxYUH0gWFBgLFxuICB9KTtcblxuICAvLyBTZWdtZW50ZWQgcHJvZ3Jlc3MgYmFyXG4gIGNvbnN0IHByb2dyZXNzID0gZW5naW5lLmdldEV1ZGFpbW9uaWFQcm9ncmVzcygpOyAvLyAwLTEwMFxuICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IocHJvZ3Jlc3MgLyBUT1RBTF9TRUdNRU5UUyk7XG4gIGNvbnN0IGhhc1BhcnRpYWwgPSBwcm9ncmVzcyAlIFRPVEFMX1NFR01FTlRTID4gMDtcblxuICBjb25zdCBzZWdtZW50cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZXVkYWltb25pYS1zZWdtZW50c1wiIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgVE9UQUxfU0VHTUVOVFM7IGkrKykge1xuICAgIGxldCBjbHMgPSBcIm9sZW4tZXVkYWltb25pYS1zZWdtZW50XCI7XG4gICAgaWYgKGkgPCBmaWxsZWRTZWdtZW50cykge1xuICAgICAgY2xzICs9IFwiIG9sZW4tZXVkYWltb25pYS1zZWdtZW50LWZpbGxlZFwiO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gZmlsbGVkU2VnbWVudHMgJiYgaGFzUGFydGlhbCkge1xuICAgICAgY2xzICs9IFwiIG9sZW4tZXVkYWltb25pYS1zZWdtZW50LXBhcnRpYWxcIjtcbiAgICB9XG4gICAgc2VnbWVudHMuY3JlYXRlRGl2KHsgY2xzIH0pO1xuICB9XG5cbiAgLy8gQ2hhcHRlciBsYWJlbFxuICBjb25zdCBjaGFwdGVyID0gZW5naW5lLmdldENoYXB0ZXIoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS1jaGFwdGVyXCIsXG4gICAgdGV4dDogYENoYXB0ZXIgJHt0b1JvbWFuKGNoYXB0ZXIubnVtYmVyKX06ICR7Y2hhcHRlci5uYW1lfWAsXG4gIH0pO1xufVxuXG4vLyAtLS0tIFN0YXQgQ2FyZHMgLS0tLVxuXG5mdW5jdGlvbiByZW5kZXJTdGF0Q2FyZHMoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBncmlkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXN0YXRzLWdyaWRcIiB9KTtcbiAgZ3JpZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgY29uc3QgdG90YWxUYXNrcyA9IGVuZ2luZS5nZXRUb3RhbENvbXBsZXRpb25zKCk7XG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGNvbnN0IHByZXNlbmNlID0gZW5naW5lLmdldERheXNPZlByZXNlbmNlKCk7XG5cbiAgLy8gT2JqZWN0aXZlcyBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezFGM0FGfVwiLCB0b3RhbFRhc2tzLCBcIk9iamVjdGl2ZXNcIik7XG5cbiAgLy8gU3RyZWFrIGNhcmQgKHdpdGggc3RyZWFrIGRvdHMpXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezFGNTI1fVwiLCBzdHJlYWssIFwiU3RyZWFrXCIsIHN0cmVhayk7XG5cbiAgLy8gQ29uc2lzdGVuY3kgY2FyZFxuICBjcmVhdGVTdGF0Q2FyZChncmlkLCBcIlxcdXsyNzI4fVwiLCBwcmVzZW5jZSwgXCJDb25zaXN0ZW5jeVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhdENhcmQoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIGljb246IHN0cmluZyxcbiAgdmFsdWU6IG51bWJlcixcbiAgbGFiZWw6IHN0cmluZyxcbiAgc3RyZWFrRGF5cz86IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGNhcmQgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkXCIgfSk7XG5cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1pY29uXCIsIHRleHQ6IGljb24gfSk7XG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1zdGF0LWNhcmQtdmFsdWVcIiwgdGV4dDogU3RyaW5nKHZhbHVlKSB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1sYWJlbFwiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBTdHJlYWsgZG90cyAoc2hvdyBsYXN0IDcgZGF5cylcbiAgaWYgKHN0cmVha0RheXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGRvdHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1kb3RzXCIgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGxldCBjbHMgPSBcIm9sZW4tc3RhdC1kb3RcIjtcbiAgICAgIGlmIChpIDwgc3RyZWFrRGF5cykge1xuICAgICAgICBjbHMgKz0gXCIgb2xlbi1zdGF0LWRvdC1hY3RpdmVcIjtcbiAgICAgIH1cbiAgICAgIGRvdHMuY3JlYXRlRGl2KHsgY2xzIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tIENhdGVnb3JpZXMgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXNDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIER5bmFtaWMgdGl0bGVcbiAgY29uc3QgdGl0bGUgPSBlbmdpbmUuZ2V0RHluYW1pY1RpdGxlKCk7XG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1keW5hbWljLXRpdGxlXCIsIHRleHQ6IHRpdGxlIH0pO1xuXG4gIC8vIERpdmlkZXJcbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgcm93c1xuICBjb25zdCBncmlkID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yaWVzLWdyaWRcIiB9KTtcblxuICBjb25zdCBjYXRlZ29yaWVzOiB7IGtleTogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICAgIHsga2V5OiBcImJvZHlcIiwgbGFiZWw6IFwiQm9keVwiIH0sXG4gICAgeyBrZXk6IFwibWluZFwiLCBsYWJlbDogXCJNaW5kXCIgfSxcbiAgICB7IGtleTogXCJzcGlyaXRcIiwgbGFiZWw6IFwiU3Bpcml0XCIgfSxcbiAgXTtcblxuICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBlbmdpbmUuZ2V0Q2F0ZWdvcnlMZXZlbChjYXQua2V5KTtcbiAgICBjb25zdCBjb2xvciA9IHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldO1xuXG4gICAgY29uc3Qgcm93ID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1yb3dcIiB9KTtcblxuICAgIC8vIEljb24gYm94XG4gICAgY29uc3QgaWNvbkJveCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1pY29uXCIgfSk7XG4gICAgaWNvbkJveC5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7Y29sb3J9MjJgOyAvLyAxMyUgb3BhY2l0eSB0aW50XG4gICAgaWNvbkJveC50ZXh0Q29udGVudCA9IENBVEVHT1JZX0lDT05TW2NhdC5rZXldO1xuXG4gICAgLy8gSW5mbyBjb2x1bW5cbiAgICBjb25zdCBpbmZvID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWluZm9cIiB9KTtcblxuICAgIC8vIE5hbWUgKyBsZXZlbCByb3dcbiAgICBjb25zdCBuYW1lUm93ID0gaW5mby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lLXJvd1wiIH0pO1xuICAgIG5hbWVSb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktbmFtZVwiLCB0ZXh0OiBjYXQubGFiZWwgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tY2F0ZWdvcnktbGV2ZWwtdGV4dFwiLFxuICAgICAgdGV4dDogYEx2ICR7bGV2ZWwubGV2ZWx9IFx1MDBCNyAke2xldmVsLnByb2dyZXNzVG9OZXh0fS8xMDBgLFxuICAgIH0pO1xuXG4gICAgLy8gUHJvZ3Jlc3MgYmFyXG4gICAgY29uc3QgYmFyID0gaW5mby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1iYXJcIiB9KTtcbiAgICBjb25zdCBmaWxsID0gYmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhci1maWxsXCIgfSk7XG4gICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke2xldmVsLnByb2dyZXNzVG9OZXh0fSVgO1xuICAgIGZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEaXJlY3RpdmUgQ2FyZCBDb21wb25lbnRcbi8vIENvbXBhY3QgY2FyZCBvbiBkYXNoYm9hcmQgKyBleHBhbmRlZCBib3R0b20tc2hlZXQgb3ZlcmxheVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBQcmlvcml0eVJlYXNvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGlyZWN0aXZlQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25FbnRlcldvcmtzcGFjZT86IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBzdWdnZXN0aW9uID0gZW5naW5lLmdldFN1Z2dlc3Rpb24oKTtcbiAgaWYgKCFzdWdnZXN0aW9uKSByZXR1cm47XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRpcmVjdGl2ZV90aXRsZSA/PyBcIlRIRSBESVJFQ1RJVkVcIjtcbiAgY29uc3QgYmVnaW5MYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuYmVnaW5fd29ya3NwYWNlID8/IFwiRU5URVIgV09SS1NQQUNFXCI7XG4gIGNvbnN0IG5vdE5vd0xhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5ub3Rfbm93ID8/IFwiTk9UIE5PV1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENvbXBhY3QgY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQgb2xlbi1kaXJlY3RpdmVcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gSGVhZGVyIHdpdGggYmFkZ2VcbiAgY29uc3QgaGVhZGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtaGVhZGVyXCIgfSk7XG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgY29uc3QgYmFkZ2UgPSBoZWFkZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWJhZGdlXCIgfSk7XG4gIGJhZGdlLnN0eWxlLmJhY2tncm91bmQgPSBnZXRCYWRnZUNvbG9yKHN1Z2dlc3Rpb24ucmVhc29uKTtcblxuICAvLyBBY3Rpdml0eSBpbmZvXG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIHRleHQ6IGAke3N1Z2dlc3Rpb24uZW1vaml9ICR7c3VnZ2VzdGlvbi5hY3Rpdml0eU5hbWV9YCxcbiAgfSk7XG5cbiAgY29uc3QgbmVnbGVjdFRleHQgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIG5lZ2xlY3RlZGBcbiAgICA6IFwiTm90IHlldCBzdGFydGVkXCI7XG5cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1uZWdsZWN0XCIsIHRleHQ6IG5lZ2xlY3RUZXh0IH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpb25zXCIgfSk7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uRW50ZXJXb3Jrc3BhY2U/LihzdWdnZXN0aW9uLmFjdGl2aXR5SWQpO1xuICB9KTtcblxuICBjb25zdCBub3ROb3dCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgdGV4dDogbm90Tm93TGFiZWwsXG4gIH0pO1xuICBub3ROb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyBEaXNtaXNzIHRoaXMgY2FyZCB3aXRoIGEgZmFkZVxuICAgIGNhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMHB4KVwiO1xuICAgIGNhcmQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3MgZWFzZVwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSwgMzAwKTtcbiAgfSk7XG5cbiAgLy8gVGFwIGNhcmQgdG8gZXhwYW5kXG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93RXhwYW5kZWREaXJlY3RpdmUoY29udGFpbmVyLCBzZXR0aW5ncywgc3VnZ2VzdGlvbiwgYmVnaW5MYWJlbCwgbm90Tm93TGFiZWwsIG9uRW50ZXJXb3Jrc3BhY2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0V4cGFuZGVkRGlyZWN0aXZlKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdWdnZXN0aW9uOiB7IGFjdGl2aXR5SWQ6IHN0cmluZzsgYWN0aXZpdHlOYW1lOiBzdHJpbmc7IGVtb2ppOiBzdHJpbmc7IHJlYXNvbjogUHJpb3JpdHlSZWFzb247IGRheXNTaW5jZUxhc3REb25lOiBudW1iZXI7IGxvcmVUZXh0OiBzdHJpbmcgfSxcbiAgYmVnaW5MYWJlbDogc3RyaW5nLFxuICBub3ROb3dMYWJlbDogc3RyaW5nLFxuICBvbkVudGVyV29ya3NwYWNlPzogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIC8vIENyZWF0ZSBvdmVybGF5XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG5cbiAgLy8gSGFuZGxlIGJhclxuICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICAvLyBUaXRsZVxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLFxuICAgIHRleHQ6IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGlyZWN0aXZlX3RpdGxlID8/IFwiVEhFIERJUkVDVElWRVwiLFxuICB9KTtcblxuICAvLyBBY3Rpdml0eSBuYW1lXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aXZpdHlcIixcbiAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMjJweDsgbWFyZ2luOiAxNnB4IDAgOHB4O1wiIH0sXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICAvLyBOZWdsZWN0IGRlc2NyaXB0aW9uXG4gIGNvbnN0IG5lZ2xlY3REZXNjID0gc3VnZ2VzdGlvbi5kYXlzU2luY2VMYXN0RG9uZSA8IDk5OVxuICAgID8gYCR7c3VnZ2VzdGlvbi5kYXlzU2luY2VMYXN0RG9uZX0gZGF5cyBzaW5jZSB5b3UgbGFzdCBwcmFjdGljZWQuIFRoZSBza2lsbCBhdHJvcGhpZXMuYFxuICAgIDogXCJBIG5ldyBwYXRoIGF3YWl0cy4gVGFrZSB0aGUgZmlyc3Qgc3RlcC5cIjtcblxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYm9keS1pdGFsaWNcIixcbiAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbi1ib3R0b206IDEycHg7XCIgfSxcbiAgICB0ZXh0OiBuZWdsZWN0RGVzYyxcbiAgfSk7XG5cbiAgLy8gTG9yZSB0ZXh0XG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1zaGVldC1sb3JlXCIsXG4gICAgdGV4dDogYFwiJHtzdWdnZXN0aW9uLmxvcmVUZXh0fVwiYCxcbiAgfSk7XG5cbiAgLy8gUmFuZG9tIHF1b3RlXG4gIGNvbnN0IHF1b3RlID0gRkFMTEJBQ0tfUVVPVEVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEZBTExCQUNLX1FVT1RFUy5sZW5ndGgpXTtcbiAgY29uc3QgcXVvdGVTZWN0aW9uID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtcXVvdGVcIiB9KTtcbiAgcXVvdGVTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbnNcbiAgY29uc3QgYWN0aW9ucyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpb25zXCIgfSk7XG4gIGFjdGlvbnMuc3R5bGUubWFyZ2luVG9wID0gXCIyMHB4XCI7XG4gIGFjdGlvbnMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXG4gIGNvbnN0IGJlZ2luQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICB0ZXh0OiBiZWdpbkxhYmVsLFxuICB9KTtcbiAgYmVnaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbG9zZVNoZWV0KCk7XG4gICAgb25FbnRlcldvcmtzcGFjZT8uKHN1Z2dlc3Rpb24uYWN0aXZpdHlJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdE5vd0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBub3ROb3dMYWJlbCxcbiAgfSk7XG4gIG5vdE5vd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgfSk7XG5cbiAgLy8gQ2xvc2Ugb24gb3ZlcmxheSB0YXBcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlU2hlZXQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VTaGVldCgpOiB2b2lkIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCBhbmQgYW5pbWF0ZSBpblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRCYWRnZUNvbG9yKHJlYXNvbjogUHJpb3JpdHlSZWFzb24pOiBzdHJpbmcge1xuICBzd2l0Y2ggKHJlYXNvbikge1xuICAgIGNhc2UgXCJkZWF0aFwiOiByZXR1cm4gXCIjZWY0NDQ0XCI7XG4gICAgY2FzZSBcImJvc3NcIjogcmV0dXJuIFwiI2VhYjMwOFwiO1xuICAgIGNhc2UgXCJuZWdsZWN0XCI6IHJldHVybiBcIiNmOTczMTZcIjtcbiAgICBjYXNlIFwid2Vla2x5XCI6IHJldHVybiBcIiMzYjgyZjZcIjtcbiAgICBjYXNlIFwiY2hhaW5cIjogcmV0dXJuIFwiIzhiNWNmNlwiO1xuICAgIGNhc2UgXCJ0aW1lXCI6IHJldHVybiBcIiMwNmI2ZDRcIjtcbiAgICBjYXNlIFwiYmFsYW5jZWRcIjogcmV0dXJuIFwiI2ZmZmZmZlwiO1xuICAgIGRlZmF1bHQ6IHJldHVybiBcIiM5MjhkODVcIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQm9zcyBTdGF0dXMgQ2FyZCBDb21wb25lbnRcbi8vIENvbXBhY3QgYm9zcyBIUCBiYXIgd2l0aCB0aWVyIGFuZCByYW5rXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb3NzU3RhdHVzQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuICBjb25zdCBzdGF0dXMgPSBib3NzRW5naW5lLmdldEJvc3NTdGF0dXMoKTtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuYm9zc19zdGF0dXNfdGl0bGUgPz8gXCJCT1NTIFNUQVRVU1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENhcmRcbiAgY29uc3QgY2FyZENscyA9IHN0YXR1cy5pblRhcnRhcnVzID8gXCJvbGVuLWNhcmQtY29tcGFjdCBvbGVuLWNhcmQtdGFydGFydXNcIiA6IFwib2xlbi1jYXJkLWNvbXBhY3RcIjtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IGNhcmRDbHMgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFJvdzogZW1vamkgKyBpbmZvXG4gIGNvbnN0IHJvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYm9zcy1yb3dcIiB9KTtcblxuICByb3cuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1ib3NzLWVtb2ppXCIsIHRleHQ6IGdldEJvc3NFbW9qaShzdGF0dXMudGllcikgfSk7XG5cbiAgY29uc3QgaW5mbyA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ib3NzLWluZm9cIiB9KTtcbiAgaW5mby5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWJvc3MtbmFtZVwiLCB0ZXh0OiBzdGF0dXMuYm9zcy5uYW1lIH0pO1xuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib3NzLXRpZXJcIixcbiAgICB0ZXh0OiBgVGllciAke3N0YXR1cy50aWVyfSBcdTAwQjcgJHtzdGF0dXMucmFua31gLFxuICB9KTtcblxuICAvLyBIUCBiYXJcbiAgY29uc3QgaHBCYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhwLWJhclwiIH0pO1xuICBjb25zdCBocEZpbGwgPSBocEJhci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ocC1iYXItZmlsbFwiIH0pO1xuICBocEZpbGwuc3R5bGUud2lkdGggPSBgJHtzdGF0dXMucGVyY2VudH0lYDtcbiAgaHBGaWxsLnN0eWxlLmJhY2tncm91bmQgPSBib3NzRW5naW5lLmdldEhQQ29sb3Ioc3RhdHVzLnBlcmNlbnQpO1xuXG4gIC8vIEhQIHRleHRcbiAgaW5mby5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYm9zcy1ocC10ZXh0XCIsXG4gICAgdGV4dDogYCR7c3RhdHVzLmN1cnJlbnRIUH0vJHtzdGF0dXMubWF4SFB9IEhQICgke3N0YXR1cy5wZXJjZW50fSUpYCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJvc3NFbW9qaSh0aWVyOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBlbW9qaXM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gICAgMTogXCJcXHV7MUY0N0J9XCIsIDI6IFwiXFx1ezFGOURDfVwiLCAzOiBcIlxcdXsxRjQwOX1cIiwgNDogXCJcXHV7MUY0MDJ9XCIsXG4gICAgNTogXCJcXHV7MUY0MER9XCIsIDY6IFwiXFx1ezFGOTgxfVwiLCA3OiBcIlxcdXsxRjUyNX1cIiwgODogXCJcXHV7MUY0M0F9XCIsXG4gICAgOTogXCJcXHV7MUYzMEF9XCIsIDEwOiBcIlxcdXsxRjQ3Rn1cIiwgMTE6IFwiXFx1ezFGMzI5fVwiLCAxMjogXCJcXHUyMzFCXCIsXG4gICAgMTM6IFwiXFx1ezFGMzAwfVwiLFxuICB9O1xuICByZXR1cm4gZW1vamlzW3RpZXJdID8/IFwiXFx1MjY5NFxcdUZFMEZcIjtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFdlZWtseSBSaHl0aG0gQ29tcG9uZW50XG4vLyA3LWRheSBiYXIgY2hhcnQgd2l0aCBjYXRlZ29yeSBzdGFja2luZyArIHN0YXRzIHJvd1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2Vla2x5Umh5dGhtKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLndlZWtseV9yaHl0aG1fdGl0bGUgPz8gXCJXRUVLTFkgUkhZVEhNXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gU3RhdHMgcm93XG4gIGNvbnN0IHN0YXRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdHNcIiB9KTtcblxuICBjb25zdCBhY3RpdmVEYXlzID0gZW5naW5lLmdldEFjdGl2ZURheXNUaGlzV2VlaygpO1xuICBjb25zdCBiZXN0RGF5ID0gZW5naW5lLmdldEJlc3REYXlUaGlzV2VlaygpO1xuICBjb25zdCB0b3RhbENvbXBsZXRpb25zID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcblxuICBjcmVhdGVXZWVrbHlTdGF0KHN0YXRzLCBTdHJpbmcoYWN0aXZlRGF5cykgKyBcIi83XCIsIFwiQWN0aXZlIGRheXNcIik7XG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIGJlc3REYXksIFwiQmVzdCBkYXlcIik7XG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIFN0cmluZyh0b3RhbENvbXBsZXRpb25zKSwgXCJUb3RhbFwiKTtcblxuICAvLyBEaXZpZGVyXG4gIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGl2aWRlclwiIH0pO1xuXG4gIC8vIEJhciBjaGFydFxuICBjb25zdCB3ZWVrbHlEYXRhID0gZW5naW5lLmdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgdG9kYXlTdHIgPSBuZXcgRGF0ZShub3cpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gIC8vIEZpbmQgbWF4IHRvdGFsIGZvciBzY2FsaW5nXG4gIGxldCBtYXhUb3RhbCA9IDE7XG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtseURhdGEpIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGRheS5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgIGlmICh0b3RhbCA+IG1heFRvdGFsKSBtYXhUb3RhbCA9IHRvdGFsO1xuICB9XG5cbiAgY29uc3QgYmFyc0NvbnRhaW5lciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhcnNcIiB9KTtcblxuICBmb3IgKGNvbnN0IGRheSBvZiB3ZWVrbHlEYXRhKSB7XG4gICAgY29uc3QgY29sID0gYmFyc0NvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyLWNvbFwiIH0pO1xuXG4gICAgLy8gU3RhY2tlZCBiYXJcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGRheS5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuXG4gICAgY29uc3QgYmFySGVpZ2h0ID0gbWF4VG90YWwgPiAwID8gTWF0aC5tYXgoNCwgKHRvdGFsIC8gbWF4VG90YWwpICogMTAwKSA6IDQ7XG4gICAgY29uc3QgYmFyRWwgPSBjb2wuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhclwiIH0pO1xuICAgIGJhckVsLnN0eWxlLmhlaWdodCA9IGAke2JhckhlaWdodH1weGA7XG4gICAgYmFyRWwuc3R5bGUubWluSGVpZ2h0ID0gXCI0cHhcIjtcblxuICAgIGlmIChkYXkuZGF0ZSA9PT0gdG9kYXlTdHIpIHtcbiAgICAgIGJhckVsLmNsYXNzTGlzdC5hZGQoXCJvbGVuLXdlZWtseS1iYXItdG9kYXlcIik7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHN0YWNrZWQgc2VnbWVudHNcbiAgICBjb25zdCBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl07XG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgY2F0Q291bnQgPSBkYXkuY29tcGxldGlvbnMuZ2V0KGNhdCkgPz8gMDtcbiAgICAgIGlmIChjYXRDb3VudCA9PT0gMCkgY29udGludWU7XG4gICAgICBjb25zdCBzZWdIZWlnaHQgPSB0b3RhbCA+IDAgPyAoY2F0Q291bnQgLyB0b3RhbCkgKiAxMDAgOiAwO1xuICAgICAgY29uc3Qgc2VnID0gYmFyRWwuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhci1zZWdtZW50XCIgfSk7XG4gICAgICBzZWcuc3R5bGUuaGVpZ2h0ID0gYCR7c2VnSGVpZ2h0fSVgO1xuICAgICAgc2VnLnN0eWxlLmJhY2tncm91bmQgPSBnZXRDYXRlZ29yeUNvbG9yKGNhdCwgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIElmIG5vIGNvbXBsZXRpb25zLCBzaG93IGVtcHR5IGJhclxuICAgIGlmICh0b3RhbCA9PT0gMCkge1xuICAgICAgYmFyRWwuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVwiO1xuICAgIH1cblxuICAgIC8vIERheSBsYWJlbFxuICAgIGNvbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdlZWtseS1kYXktbGFiZWxcIiwgdGV4dDogZGF5LmRheS5jaGFyQXQoMCkgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2Vla2x5U3RhdChwYXJlbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IHN0YXQgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXRcIiB9KTtcbiAgc3RhdC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0LXZhbHVlXCIsIHRleHQ6IHZhbHVlIH0pO1xuICBzdGF0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXQtbGFiZWxcIiwgdGV4dDogbGFiZWwgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENhdGVnb3J5Q29sb3IoY2F0ZWdvcnk6IENhdGVnb3J5LCBzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEFjdGl2aXR5IEdyaWQgQ29tcG9uZW50XG4vLyAyLWNvbHVtbiBncmlkIG9mIGFjdGl2aXR5IGNhcmRzIHdpdGggcHJvZ3Jlc3MgcmluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFjdGl2aXR5R3JpZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5hY3Rpdml0eV9ncmlkX3RpdGxlID8/IFwiQUNUSVZJVElFU1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIEdyaWQgY29udGFpbmVyXG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCBjb2x1bW5zID0gc2V0dGluZ3MuZGV2Q29uZmlnLmFjdGl2aXR5R3JpZENvbHVtbnMgPz8gMjtcbiAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2NvbHVtbnN9LCAxZnIpYDtcblxuICBjb25zdCBhY3Rpdml0aWVzID0gZW5naW5lLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG5cbiAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgY29uc3QgY2FyZCA9IGdyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktY2FyZFwiIH0pO1xuXG4gICAgLy8gQ2F0ZWdvcnkgYWNjZW50IGJhclxuICAgIGNvbnN0IGFjY2VudCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktYWNjZW50XCIgfSk7XG4gICAgYWNjZW50LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1thY3Rpdml0eS5jYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCI7XG5cbiAgICAvLyBUb3Agcm93OiBlbW9qaSArIHN0YXR1cyBkb3RcbiAgICBjb25zdCB0b3AgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LXRvcFwiIH0pO1xuICAgIHRvcC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFjdGl2aXR5LWVtb2ppXCIsIHRleHQ6IGFjdGl2aXR5LmVtb2ppIH0pO1xuXG4gICAgY29uc3QgZGF5c1NpbmNlID0gZW5naW5lLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKTtcbiAgICBjb25zdCBkb3RDbHMgPSBnZXREb3RDbGFzcyhkYXlzU2luY2UpO1xuICAgIHRvcC5jcmVhdGVEaXYoeyBjbHM6IGBvbGVuLWFjdGl2aXR5LWRvdCAke2RvdENsc31gIH0pO1xuXG4gICAgLy8gQWN0aXZpdHkgbmFtZVxuICAgIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1uYW1lXCIsIHRleHQ6IGFjdGl2aXR5Lm5hbWUgfSk7XG5cbiAgICAvLyBXZWVrbHkgcHJvZ3Jlc3NcbiAgICBjb25zdCBwcm9ncmVzcyA9IGVuZ2luZS5nZXRXZWVrbHlQcm9ncmVzcyhhY3Rpdml0eS5pZCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NSb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzXCIgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyByaW5nIChTVkcpXG4gICAgY29uc3QgcmluZyA9IGNyZWF0ZVByb2dyZXNzUmluZyhwcm9ncmVzcy5kb25lLCBwcm9ncmVzcy50YXJnZXQsIHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2FjdGl2aXR5LmNhdGVnb3J5XSk7XG4gICAgcHJvZ3Jlc3NSb3cuYXBwZW5kQ2hpbGQocmluZyk7XG5cbiAgICBwcm9ncmVzc1Jvdy5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzcy10ZXh0XCIsXG4gICAgICB0ZXh0OiBgJHtwcm9ncmVzcy5kb25lfSBvZiAke3Byb2dyZXNzLnRhcmdldH1gLFxuICAgIH0pO1xuXG4gICAgLy8gU3RyZWFrXG4gICAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldEFjdGl2aXR5U3RyZWFrKGFjdGl2aXR5LmlkKTtcbiAgICBpZiAoc3RyZWFrID4gMCkge1xuICAgICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLWFjdGl2aXR5LXN0cmVha1wiLFxuICAgICAgICB0ZXh0OiBgJHtzdHJlYWt9IGRheSBzdHJlYWtgLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldERvdENsYXNzKGRheXNTaW5jZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGRheXNTaW5jZSA9PT0gMCkgcmV0dXJuIFwib2xlbi1hY3Rpdml0eS1kb3QtZ3JlZW5cIjtcbiAgaWYgKGRheXNTaW5jZSA8PSAxKSByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC15ZWxsb3dcIjtcbiAgcmV0dXJuIFwib2xlbi1hY3Rpdml0eS1kb3QtcmVkXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyZXNzUmluZyhkb25lOiBudW1iZXIsIHRhcmdldDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XG4gIGNvbnN0IHNpemUgPSAyNDtcbiAgY29uc3Qgc3Ryb2tlV2lkdGggPSAyLjU7XG4gIGNvbnN0IHJhZGl1cyA9IChzaXplIC0gc3Ryb2tlV2lkdGgpIC8gMjtcbiAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xuICBjb25zdCBwZXJjZW50ID0gdGFyZ2V0ID4gMCA/IE1hdGgubWluKDEsIGRvbmUgLyB0YXJnZXQpIDogMDtcbiAgY29uc3QgZGFzaE9mZnNldCA9IGNpcmN1bWZlcmVuY2UgKiAoMSAtIHBlcmNlbnQpO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHNpemUpKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoc2l6ZSkpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7c2l6ZX0gJHtzaXplfWApO1xuICBzdmcuY2xhc3NMaXN0LmFkZChcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3MtcmluZ1wiKTtcblxuICAvLyBCYWNrZ3JvdW5kIGNpcmNsZVxuICBjb25zdCBiZ0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgU3RyaW5nKHJhZGl1cykpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwicmdiYSgyNTUsMjU1LDI1NSwwLjA4KVwiKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFN0cmluZyhzdHJva2VXaWR0aCkpO1xuICBzdmcuYXBwZW5kQ2hpbGQoYmdDaXJjbGUpO1xuXG4gIC8vIFByb2dyZXNzIGNpcmNsZVxuICBjb25zdCBwcm9ncmVzc0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgU3RyaW5nKHJhZGl1cykpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGNvbG9yKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFN0cmluZyhzdHJva2VXaWR0aCkpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFN0cmluZyhjaXJjdW1mZXJlbmNlKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFN0cmluZyhkYXNoT2Zmc2V0KSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgcm90YXRlKC05MCAke3NpemUgLyAyfSAke3NpemUgLyAyfSlgKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHByb2dyZXNzQ2lyY2xlKTtcblxuICByZXR1cm4gc3ZnO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgVGVtcGxlIENoaXBzIENvbXBvbmVudFxuLy8gSG9yaXpvbnRhbCBzY3JvbGxhYmxlIGNoaXBzIGZvciBzZWxmLWNhcmUgdGFzayB0cmFja2luZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBUZW1wbGVUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUZW1wbGVDaGlwcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIG9uVGVtcGxlVXBkYXRlOiAodGFza0lkOiBzdHJpbmcpID0+IHZvaWRcbik6IHZvaWQge1xuICBpZiAoIXNldHRpbmdzLnRlbXBsZVRhc2tzIHx8IHNldHRpbmdzLnRlbXBsZVRhc2tzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy50ZW1wbGVfdGl0bGUgPz8gXCJUSEUgVEVNUExFXCI7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG5cbiAgLy8gU2VjdGlvblxuICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsZS1zZWN0aW9uXCIgfSk7XG4gIHNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFRpdGxlXG4gIHNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENoaXBzIGNvbnRhaW5lclxuICBjb25zdCBjaGlwcyA9IHNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXBzXCIgfSk7XG4gIGNoaXBzLnN0eWxlLm1hcmdpblRvcCA9IFwiOHB4XCI7XG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHNldHRpbmdzLnRlbXBsZVRhc2tzKSB7XG4gICAgY29uc3Qgc3RhdHVzID0gZ2V0VGFza1N0YXR1cyh0YXNrLCBub3cpO1xuXG4gICAgY29uc3QgY2hpcENscyA9IGBvbGVuLXRlbXBsZS1jaGlwICR7c3RhdHVzLmNoaXBDbGFzc31gO1xuICAgIGNvbnN0IGNoaXAgPSBjaGlwcy5jcmVhdGVEaXYoeyBjbHM6IGNoaXBDbHMgfSk7XG5cbiAgICBjaGlwLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwLWVtb2ppXCIsIHRleHQ6IHRhc2suZW1vamkgfSk7XG4gICAgY2hpcC5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcC10ZXh0XCIsIHRleHQ6IGAke3Rhc2submFtZX0gXHUwMEI3ICR7c3RhdHVzLnRleHR9YCB9KTtcblxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9uVGVtcGxlVXBkYXRlKHRhc2suaWQpO1xuICAgICAgLy8gVmlzdWFsIGZlZWRiYWNrXG4gICAgICBjaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMC45KVwiO1xuICAgICAgY2hpcC5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgIGNoaXAuc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gICAgICB9LCAyMDApO1xuICAgIH0pO1xuICB9XG59XG5cbmludGVyZmFjZSBUYXNrU3RhdHVzIHtcbiAgdGV4dDogc3RyaW5nO1xuICBjaGlwQ2xhc3M6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0VGFza1N0YXR1cyh0YXNrOiBUZW1wbGVUYXNrLCBub3c6IERhdGUpOiBUYXNrU3RhdHVzIHtcbiAgaWYgKCF0YXNrLmxhc3RDb21wbGV0ZWQpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIm92ZXJkdWVcIiwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtb3ZlcmR1ZVwiIH07XG4gIH1cblxuICBjb25zdCBsYXN0ID0gbmV3IERhdGUodGFzay5sYXN0Q29tcGxldGVkKTtcbiAgY29uc3QgbXNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICBjb25zdCBkYXlzU2luY2UgPSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gbGFzdC5nZXRUaW1lKCkpIC8gbXNQZXJEYXkpO1xuICBjb25zdCBkYXlzVW50aWxEdWUgPSB0YXNrLmludGVydmFsRGF5cyAtIGRheXNTaW5jZTtcblxuICBpZiAoZGF5c1VudGlsRHVlIDw9IDApIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIm92ZXJkdWVcIiwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtb3ZlcmR1ZVwiIH07XG4gIH1cblxuICBpZiAoZGF5c1VudGlsRHVlIDw9IDEpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcImR1ZSB0b2RheVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC13YXJuXCIgfTtcbiAgfVxuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMikge1xuICAgIHJldHVybiB7IHRleHQ6IGBkdWUgaW4gJHtkYXlzVW50aWxEdWV9ZGAsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLXdhcm5cIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogYGluICR7ZGF5c1VudGlsRHVlfWRgLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1va1wiIH07XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBRdW90ZSBGb290ZXIgQ29tcG9uZW50XG4vLyBSb3RhdGluZyBzdG9pYyBxdW90ZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBkYXNoYm9hcmRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBBcHAsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUXVvdGVGb290ZXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGFwcDogQXBwLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBxdW90ZSA9IGdldFF1b3RlKGFwcCwgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcXVvdGVcIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtdGV4dFwiLFxuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gIH0pO1xuXG4gIGlmIChxdW90ZS5hdHRyaWJ1dGlvbikge1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICAgIHRleHQ6IGBcdTIwMTQgJHtxdW90ZS5hdHRyaWJ1dGlvbn1gLFxuICAgIH0pO1xuICB9XG59XG5cbmludGVyZmFjZSBRdW90ZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgYXR0cmlidXRpb246IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0UXVvdGUoXG4gIGFwcDogQXBwLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogUXVvdGUge1xuICAvLyBUcnkgdmF1bHQgZm9sZGVyIHF1b3RlcyBmaXJzdFxuICBpZiAoc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoKSB7XG4gICAgY29uc3QgdmF1bHRRdW90ZXMgPSBsb2FkUXVvdGVzRnJvbVZhdWx0KGFwcCwgc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoKTtcbiAgICBpZiAodmF1bHRRdW90ZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHBpY2tRdW90ZSh2YXVsdFF1b3Rlcywgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZhbGxiYWNrIHRvIGhhcmRjb2RlZCBxdW90ZXNcbiAgcmV0dXJuIHBpY2tRdW90ZShGQUxMQkFDS19RVU9URVMsIHNldHRpbmdzLCBvblNldHRpbmdzVXBkYXRlKTtcbn1cblxuZnVuY3Rpb24gcGlja1F1b3RlKFxuICBxdW90ZXM6IFF1b3RlW10sXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiBRdW90ZSB7XG4gIGlmIChxdW90ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJUaGUgdW5leGFtaW5lZCBsaWZlIGlzIG5vdCB3b3J0aCBsaXZpbmcuXCIsIGF0dHJpYnV0aW9uOiBcIlNvY3JhdGVzXCIgfTtcbiAgfVxuXG4gIC8vIEF2b2lkIHJlY2VudGx5IHNob3duIHF1b3Rlc1xuICBjb25zdCByZWNlbnRJZHMgPSBzZXR0aW5ncy5yZWNlbnRRdW90ZUlkcyA/PyBbXTtcbiAgY29uc3QgYXZhaWxhYmxlID0gcXVvdGVzXG4gICAgLm1hcCgocSwgaSkgPT4gKHsgcSwgaSB9KSlcbiAgICAuZmlsdGVyKCh7IGkgfSkgPT4gIXJlY2VudElkcy5pbmNsdWRlcyhpKSk7XG5cbiAgY29uc3QgcG9vbCA9IGF2YWlsYWJsZS5sZW5ndGggPiAwID8gYXZhaWxhYmxlIDogcXVvdGVzLm1hcCgocSwgaSkgPT4gKHsgcSwgaSB9KSk7XG4gIGNvbnN0IHBpY2sgPSBwb29sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wubGVuZ3RoKV07XG5cbiAgLy8gVHJhY2sgcmVjZW50IChrZWVwIGxhc3QgNSlcbiAgY29uc3QgbmV3UmVjZW50ID0gWy4uLnJlY2VudElkcywgcGljay5pXS5zbGljZSgtTWF0aC5taW4oNSwgTWF0aC5mbG9vcihxdW90ZXMubGVuZ3RoIC8gMikpKTtcbiAgb25TZXR0aW5nc1VwZGF0ZSh7XG4gICAgbGFzdFF1b3RlSW5kZXg6IHBpY2suaSxcbiAgICByZWNlbnRRdW90ZUlkczogbmV3UmVjZW50LFxuICB9KTtcblxuICByZXR1cm4gcGljay5xO1xufVxuXG5mdW5jdGlvbiBsb2FkUXVvdGVzRnJvbVZhdWx0KGFwcDogQXBwLCBmb2xkZXJQYXRoOiBzdHJpbmcpOiBRdW90ZVtdIHtcbiAgY29uc3QgcXVvdGVzOiBRdW90ZVtdID0gW107XG4gIGNvbnN0IGFic3RyYWN0RmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyUGF0aCk7XG4gIGlmICghYWJzdHJhY3RGaWxlKSByZXR1cm4gcXVvdGVzO1xuXG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoKGYpID0+XG4gICAgZi5wYXRoLnN0YXJ0c1dpdGgoZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiKVxuICApO1xuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IGNhY2hlID0gYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgIGlmICghY2FjaGUpIGNvbnRpbnVlO1xuXG4gICAgLy8gT25lIHF1b3RlIHBlciBmaWxlIChkZWZhdWx0IG1vZGUpXG4gICAgY29uc3QgbmFtZSA9IGZpbGUuYmFzZW5hbWU7XG4gICAgY29uc3QgcGFydHMgPSBzcGxpdEF0dHJpYnV0aW9uKG5hbWUpO1xuICAgIHF1b3Rlcy5wdXNoKHBhcnRzKTtcbiAgfVxuXG4gIHJldHVybiBxdW90ZXM7XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXR0cmlidXRpb24odGV4dDogc3RyaW5nKTogUXVvdGUge1xuICAvLyBDaGVjayBmb3IgZW0tZGFzaCBhdHRyaWJ1dGlvblxuICBjb25zdCBkYXNoSW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIFx1MjAxNCBcIik7XG4gIGlmIChkYXNoSW5kZXggPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRleHQuc2xpY2UoMCwgZGFzaEluZGV4KS50cmltKCksXG4gICAgICBhdHRyaWJ1dGlvbjogdGV4dC5zbGljZShkYXNoSW5kZXggKyAzKS50cmltKCksXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGh5cGhlbkluZGV4ID0gdGV4dC5sYXN0SW5kZXhPZihcIiAtIFwiKTtcbiAgaWYgKGh5cGhlbkluZGV4ID4gdGV4dC5sZW5ndGggKiAwLjUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGV4dC5zbGljZSgwLCBoeXBoZW5JbmRleCkudHJpbSgpLFxuICAgICAgYXR0cmlidXRpb246IHRleHQuc2xpY2UoaHlwaGVuSW5kZXggKyAzKS50cmltKCksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IHRleHQ6IHRleHQudHJpbSgpLCBhdHRyaWJ1dGlvbjogXCJcIiB9O1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgRGF5IFRpbWVsaW5lIENvbXBvbmVudFxuLy8gVmVydGljYWwgY29sb3JlZCB0aW1lbGluZSBvZiB0aGUgZGF5J3MgcGxhbm5lZCBhY3Rpdml0aWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIERheU1hcEVudHJ5LCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGF5VGltZWxpbmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIGNhbGxiYWNrczoge1xuICAgIG9uQWNjZXB0OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uU2tpcDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyRG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhclBvc3Rwb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNyZWF0ZUV2ZW50PzogKCkgPT4gdm9pZDtcbiAgfVxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kYXltYXBfdGl0bGUgPz8gXCJZT1VSIERBWVwiO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCBjdXJyZW50SG91ciA9IG5vdy5nZXRIb3VycygpICsgbm93LmdldE1pbnV0ZXMoKSAvIDYwO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFRpbWVsaW5lIGNhcmRcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkIG9sZW4tdGltZWxpbmUtY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBHZXQgZGF5IG1hcCBlbnRyaWVzXG4gIGNvbnN0IGVudHJpZXMgPSBlbmdpbmUuZ2V0RGF5TWFwKCk7XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1lbXB0eVwiLFxuICAgICAgdGV4dDogXCJObyBhY3Rpdml0aWVzIHNjaGVkdWxlZC4gQSByYXJlIGRheSBvZiByZXN0LlwiLFxuICAgIH0pO1xuICAgIHJlbmRlclRpbWVsaW5lRm9vdGVyKGNhcmQsIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzLm9uQ3JlYXRlRXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFRpbWVsaW5lIGNvbnRhaW5lclxuICBjb25zdCB0aW1lbGluZSA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmVcIiB9KTtcblxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICByZW5kZXJUaW1lbGluZUVudHJ5KFxuICAgICAgdGltZWxpbmUsIGVudHJ5LCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrc1xuICAgICk7XG4gIH1cblxuICAvLyBGb290ZXJcbiAgcmVuZGVyVGltZWxpbmVGb290ZXIoY2FyZCwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3Mub25DcmVhdGVFdmVudCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVsaW5lRW50cnkoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIGVudHJ5OiBEYXlNYXBFbnRyeSxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY3VycmVudEhvdXI6IG51bWJlcixcbiAgY2FsbGJhY2tzOiB7XG4gICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Ta2lwOiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJEb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyUG9zdHBvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgaXNDYWxlbmRhciA9IGVudHJ5LmlzQ2FsZW5kYXJUYXNrID09PSB0cnVlO1xuICBjb25zdCBjb2xvciA9IGlzQ2FsZW5kYXIgPyBcIiM1ZTdhOWFcIiA6IChzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tlbnRyeS5jYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCIpO1xuICBjb25zdCBpc0N1cnJlbnQgPSBjdXJyZW50SG91ciA+PSBlbnRyeS5zdGFydEhvdXIgJiYgY3VycmVudEhvdXIgPCBlbnRyeS5lbmRIb3VyO1xuICBjb25zdCBpc1Bhc3QgPSBjdXJyZW50SG91ciA+PSBlbnRyeS5lbmRIb3VyO1xuICBjb25zdCBpc0RvbmUgPSBlbnRyeS5zdGF0dXMgPT09IFwiZG9uZVwiO1xuICBjb25zdCBpc1NraXBwZWQgPSBlbnRyeS5zdGF0dXMgPT09IFwic2tpcHBlZFwiO1xuXG4gIC8vIERldGVybWluZSB2aXN1YWwgc3RhdGVcbiAgbGV0IHN0YXRlQ2xzID0gXCJvbGVuLXRpbWVsaW5lLWVudHJ5XCI7XG4gIGlmIChpc0NhbGVuZGFyKSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLWNhbGVuZGFyXCI7XG4gIGlmIChpc0RvbmUpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtZG9uZVwiO1xuICBlbHNlIGlmIChpc1NraXBwZWQpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtc2tpcHBlZFwiO1xuICBlbHNlIGlmIChpc0N1cnJlbnQpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtY3VycmVudFwiO1xuICBlbHNlIGlmIChpc1Bhc3QpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtcGFzdFwiO1xuXG4gIGNvbnN0IHJvdyA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IHN0YXRlQ2xzIH0pO1xuXG4gIC8vIENhdGVnb3J5IGNvbG9yIGJhciAoY2FsZW5kYXIgdGFza3MgZ2V0IGEgZGlzdGluY3QgZGFzaGVkIHN0eWxlKVxuICBjb25zdCBiYXIgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYmFyXCIgfSk7XG4gIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIGlmIChpc0NhbGVuZGFyICYmICFpc0RvbmUpIHtcbiAgICBiYXIuY2xhc3NMaXN0LmFkZChcIm9sZW4tdGltZWxpbmUtYmFyLWNhbGVuZGFyXCIpO1xuICB9XG4gIGlmIChpc0N1cnJlbnQgJiYgIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgYmFyLnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMTJweCAke2NvbG9yfWA7XG4gIH1cblxuICAvLyBDb250ZW50XG4gIGNvbnN0IGNvbnRlbnQgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtY29udGVudFwiIH0pO1xuXG4gIC8vIFRvcCBsaW5lOiB0aW1lICsgZHVyYXRpb24gKyBzb3VyY2UgYmFkZ2UgZm9yIGNhbGVuZGFyIHRhc2tzXG4gIGNvbnN0IHRpbWVMaW5lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS10aW1lXCIgfSk7XG4gIHRpbWVMaW5lLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0SG91cihlbnRyeS5zdGFydEhvdXIpfSBcdTIwMTMgJHtmb3JtYXRIb3VyKGVudHJ5LmVuZEhvdXIpfSBcdTAwQjcgJHtlbnRyeS5lc3RpbWF0ZWREdXJhdGlvbn1tYDtcblxuICBpZiAoaXNDYWxlbmRhciAmJiBlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgIGNvbnN0IGJhZGdlID0gdGltZUxpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtc291cmNlLWJhZGdlXCIgfSk7XG4gICAgc3dpdGNoIChlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIk5vdGVcIjsgYnJlYWs7XG4gICAgICBjYXNlIFwidGFza3MtcGx1Z2luXCI6IGJhZGdlLnRleHRDb250ZW50ID0gXCJUYXNrXCI7IGJyZWFrO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIlF1aWNrXCI7IGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2aXR5IGxpbmU6IGVtb2ppICsgbmFtZVxuICBjb25zdCBhY3RMaW5lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1hY3Rpdml0eVwiIH0pO1xuICBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLWVtb2ppXCIsIHRleHQ6IGVudHJ5LmVtb2ppIH0pO1xuICBjb25zdCBuYW1lRWwgPSBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtbmFtZVwiLFxuICAgIHRleHQ6IGVudHJ5LmFjdGl2aXR5TmFtZSxcbiAgfSk7XG5cbiAgLy8gU3RyaWtldGhyb3VnaCBmb3IgZG9uZS9za2lwcGVkXG4gIGlmIChpc0RvbmUgfHwgaXNTa2lwcGVkKSB7XG4gICAgbmFtZUVsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICBuYW1lRWwuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gIH1cblxuICAvLyBTdGF0dXMgaW5kaWNhdG9yXG4gIGlmIChpc0RvbmUpIHtcbiAgICBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLWNoZWNrXCIsIHRleHQ6IFwiXFx1MjcxM1wiIH0pO1xuICB9IGVsc2UgaWYgKGlzU2tpcHBlZCkge1xuICAgIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtc2tpcC1tYXJrXCIsIHRleHQ6IFwiXFx1MjAxM1wiIH0pO1xuICB9XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgaWYgKCFpc0RvbmUgJiYgIWlzU2tpcHBlZCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWFjdGlvbnNcIiB9KTtcblxuICAgIGlmIChpc0NhbGVuZGFyKSB7XG4gICAgICAvLyBDYWxlbmRhciB0YXNrczogRG9uZSArIFBvc3Rwb25lXG4gICAgICBjb25zdCBkb25lQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1hY2NlcHRcIixcbiAgICAgICAgdGV4dDogXCJEb25lXCIsXG4gICAgICB9KTtcbiAgICAgIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vbkNhbGVuZGFyRG9uZT8uKGVudHJ5KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwb3N0cG9uZUJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tcG9zdHBvbmVcIixcbiAgICAgICAgdGV4dDogXCJcXHUyM0U5XCIsXG4gICAgICAgIGF0dHI6IHsgdGl0bGU6IFwiUG9zdHBvbmUgdG8gdG9tb3Jyb3dcIiB9LFxuICAgICAgfSk7XG4gICAgICBwb3N0cG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQ2FsZW5kYXJQb3N0cG9uZT8uKGVudHJ5KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBY3Rpdml0eSBlbnRyaWVzOiBCZWdpbi9Eb25lICsgU2tpcFxuICAgICAgY29uc3QgYWNjZXB0QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1hY2NlcHRcIixcbiAgICAgICAgdGV4dDogaXNDdXJyZW50ID8gXCJCZWdpblwiIDogXCJEb25lXCIsXG4gICAgICB9KTtcbiAgICAgIGFjY2VwdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQWNjZXB0KGVudHJ5LmFjdGl2aXR5SWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNraXBCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLXNraXBcIixcbiAgICAgICAgdGV4dDogXCJTa2lwXCIsXG4gICAgICB9KTtcbiAgICAgIHNraXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vblNraXAoZW50cnkuYWN0aXZpdHlJZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBDdXJyZW50IHRpbWUgaW5kaWNhdG9yXG4gIGlmIChpc0N1cnJlbnQgJiYgIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgY29uc3QgaW5kaWNhdG9yID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLW5vd1wiIH0pO1xuICAgIGNvbnN0IHByb2dyZXNzID0gKGN1cnJlbnRIb3VyIC0gZW50cnkuc3RhcnRIb3VyKSAvIChlbnRyeS5lbmRIb3VyIC0gZW50cnkuc3RhcnRIb3VyKTtcbiAgICBpbmRpY2F0b3Iuc3R5bGUudG9wID0gYCR7TWF0aC5taW4oMTAwLCBNYXRoLm1heCgwLCBwcm9ncmVzcyAqIDEwMCkpfSVgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVsaW5lRm9vdGVyKFxuICBjYXJkOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY3VycmVudEhvdXI6IG51bWJlcixcbiAgb25DcmVhdGVFdmVudD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBlbmRPZkRheSA9IHNldHRpbmdzLmRldkNvbmZpZy5ldmVuaW5nRW5kO1xuICBjb25zdCByZW1haW5pbmcgPSBNYXRoLm1heCgwLCBlbmRPZkRheSAtIGN1cnJlbnRIb3VyKTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHJlbWFpbmluZyk7XG4gIGNvbnN0IG1pbnMgPSBNYXRoLnJvdW5kKChyZW1haW5pbmcgLSBob3VycykgKiA2MCk7XG5cbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgY29uc3QgZm9vdGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1mb290ZXJcIiB9KTtcbiAgZm9vdGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi10aW1lbGluZS1mb290ZXItdGV4dFwiLFxuICAgIHRleHQ6IGBFbmQgb2YgZGF5OiAke2hvdXJzfWggJHttaW5zfW0gcmVtYWluaW5nYCxcbiAgfSk7XG5cbiAgaWYgKG9uQ3JlYXRlRXZlbnQpIHtcbiAgICBjb25zdCBidG4gPSBmb290ZXIuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWNyZWF0ZVwiLFxuICAgICAgdGV4dDogXCIrIENyZWF0ZSBldmVudFwiLFxuICAgIH0pO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gb25DcmVhdGVFdmVudCgpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRIb3VyKGg6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihoKTtcbiAgY29uc3QgbWlucyA9IE1hdGgucm91bmQoKGggLSBob3VycykgKiA2MCk7XG4gIGNvbnN0IHBlcmlvZCA9IGhvdXJzID49IDEyID8gXCJwbVwiIDogXCJhbVwiO1xuICBjb25zdCBkaXNwbGF5SG91ciA9IGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzO1xuICBpZiAobWlucyA9PT0gMCkgcmV0dXJuIGAke2Rpc3BsYXlIb3VyfSR7cGVyaW9kfWA7XG4gIHJldHVybiBgJHtkaXNwbGF5SG91cn06JHtTdHJpbmcobWlucykucGFkU3RhcnQoMiwgXCIwXCIpfSR7cGVyaW9kfWA7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBTdHJlbmd0aCBIZWF0bWFwIENvbXBvbmVudFxuLy8gSW50ZXJhY3RpdmUgbXVzY2xlIGZpZ3VyZSBzaG93aW5nIHdvcmtvdXQgaW50ZW5zaXR5IHBlciBtdXNjbGVcbi8vIENsaWNrYWJsZSBtdXNjbGVzIG9wZW4gcHJvZ3Jlc3MgZ3JhcGhzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENvbXBsZXRpb25NYXAsIEdlbmRlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBNdXNjbGVHcm91cElkIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTVVTQ0xFX0dST1VQX0xBQkVMUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLy8gLS0tIE11c2NsZSByZWdpb24gaGl0LWJveGVzIChwZXJjZW50YWdlLWJhc2VkIGZvciBmcm9udC9iYWNrIHZpZXdzKSAtLS1cbi8vIEVhY2ggcmVnaW9uOiBbeCUsIHklLCB3aWR0aCUsIGhlaWdodCVdIHJlbGF0aXZlIHRvIGZpZ3VyZSBib3VuZGluZyBib3hcblxuaW50ZXJmYWNlIE11c2NsZVJlZ2lvbiB7XG4gIGlkOiBNdXNjbGVHcm91cElkO1xuICBmcm9udD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIGJhY2s/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xufVxuXG5jb25zdCBNVVNDTEVfUkVHSU9OUzogTXVzY2xlUmVnaW9uW10gPSBbXG4gIC8vIEhlYWQvbmVjayBhcmVhXG4gIHsgaWQ6IFwibmVja1wiLCAgICAgICBmcm9udDogeyB4OiA0MCwgeTogOCwgdzogMjAsIGg6IDUgfSB9LFxuICB7IGlkOiBcInRyYXBzXCIsICAgICAgYmFjazogIHsgeDogMzAsIHk6IDExLCB3OiA0MCwgaDogNyB9IH0sXG4gIC8vIFVwcGVyIGJvZHlcbiAgeyBpZDogXCJzaG91bGRlcnNcIiwgIGZyb250OiB7IHg6IDE4LCB5OiAxNCwgdzogMTQsIGg6IDggfSwgICBiYWNrOiB7IHg6IDE4LCB5OiAxNCwgdzogMTQsIGg6IDggfSB9LFxuICB7IGlkOiBcImNoZXN0XCIsICAgICAgZnJvbnQ6IHsgeDogMzAsIHk6IDE2LCB3OiA0MCwgaDogMTAgfSB9LFxuICB7IGlkOiBcImxhdHNcIiwgICAgICAgYmFjazogIHsgeDogMjQsIHk6IDE5LCB3OiA1MiwgaDogMTIgfSB9LFxuICB7IGlkOiBcImJhY2tcIiwgICAgICAgYmFjazogIHsgeDogMzIsIHk6IDMyLCB3OiAzNiwgaDogMTAgfSB9LFxuICAvLyBBcm1zXG4gIHsgaWQ6IFwiYmljZXBzXCIsICAgICBmcm9udDogeyB4OiAxNCwgeTogMjMsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwidHJpY2Vwc1wiLCAgICBiYWNrOiAgeyB4OiAxNCwgeTogMjMsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwiZm9yZWFybXNcIiwgICBmcm9udDogeyB4OiAxMCwgeTogMzYsIHc6IDEyLCBoOiAxMiB9LCAgYmFjazogeyB4OiAxMCwgeTogMzYsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIC8vIENvcmVcbiAgeyBpZDogXCJhYnNcIiwgICAgICAgIGZyb250OiB7IHg6IDM1LCB5OiAyNywgdzogMzAsIGg6IDE2IH0gfSxcbiAgeyBpZDogXCJvYmxpcXVlc1wiLCAgIGZyb250OiB7IHg6IDI0LCB5OiAzMCwgdzogMTAsIGg6IDEyIH0gfSxcbiAgeyBpZDogXCJnbHV0ZXNcIiwgICAgIGJhY2s6ICB7IHg6IDMwLCB5OiA0MywgdzogNDAsIGg6IDEwIH0gfSxcbiAgLy8gTGVnc1xuICB7IGlkOiBcInF1YWRzXCIsICAgICAgZnJvbnQ6IHsgeDogMjUsIHk6IDQ4LCB3OiA1MCwgaDogMTggfSB9LFxuICB7IGlkOiBcImhhbXN0cmluZ3NcIiwgYmFjazogIHsgeDogMjUsIHk6IDU0LCB3OiA1MCwgaDogMTYgfSB9LFxuICB7IGlkOiBcImNhbHZlc1wiLCAgICAgZnJvbnQ6IHsgeDogMjgsIHk6IDcyLCB3OiA0NCwgaDogMTQgfSwgIGJhY2s6IHsgeDogMjgsIHk6IDcyLCB3OiA0NCwgaDogMTQgfSB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBIZWF0bWFwQ2FsbGJhY2tzIHtcbiAgb25NdXNjbGVDbGljazogKG11c2NsZUlkOiBNdXNjbGVHcm91cElkKSA9PiB2b2lkO1xuICBvblByb2dyZXNzQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RyZW5ndGhIZWF0bWFwKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiBIZWF0bWFwQ2FsbGJhY2tzXG4pOiB2b2lkIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLXNlY3Rpb25cIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gRmlndXJlIGNvbnRhaW5lciBcdTIwMTQgZnJvbnQgYW5kIGJhY2sgdmlld3Mgc2lkZSBieSBzaWRlXG4gIGNvbnN0IGdlbmRlciA9IHNldHRpbmdzLnBlcnNvbmFsU3RhdHMuZ2VuZGVyO1xuICBjb25zdCBmaWd1cmVXcmFwID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWZpZ3VyZXNcIiB9KTtcblxuICAvLyBHYXRoZXIgbXVzY2xlIGludGVuc2l0eSBkYXRhIGZyb20gd29ya291dCBjb21wbGV0aW9uc1xuICBjb25zdCBtdXNjbGVEYXRhID0gZ2F0aGVyTXVzY2xlSW50ZW5zaXR5KGVuZ2luZSwgY29tcGxldGlvbkRhdGEsIHNldHRpbmdzKTtcblxuICAvLyBGcm9udCB2aWV3XG4gIHJlbmRlck11c2NsZUZpZ3VyZShmaWd1cmVXcmFwLCBcImZyb250XCIsIGdlbmRlciwgbXVzY2xlRGF0YSwgY2FsbGJhY2tzLm9uTXVzY2xlQ2xpY2spO1xuXG4gIC8vIEJhY2sgdmlld1xuICByZW5kZXJNdXNjbGVGaWd1cmUoZmlndXJlV3JhcCwgXCJiYWNrXCIsIGdlbmRlciwgbXVzY2xlRGF0YSwgY2FsbGJhY2tzLm9uTXVzY2xlQ2xpY2spO1xuXG4gIC8vIEJ1dHRvbnMgYmVsb3cgdGhlIGZpZ3VyZVxuICBjb25zdCBhY3Rpb25zID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBwcm9ncmVzc0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1oZWF0bWFwLWJ0blwiLFxuICAgIHRleHQ6IFwiUHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjYWxsYmFja3Mub25Qcm9ncmVzc0NsaWNrKCkpO1xuXG4gIGNvbnN0IHdvcmtvdXRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLWhlYXRtYXAtYnRuXCIsXG4gICAgdGV4dDogXCJTdGFydCBOZXcgV29ya291dFwiLFxuICB9KTtcbiAgd29ya291dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2tzLm9uU3RhcnRXb3Jrb3V0KCkpO1xufVxuXG4vLyAtLS0gRmlndXJlIFJlbmRlcmluZyAtLS1cblxuZnVuY3Rpb24gcmVuZGVyTXVzY2xlRmlndXJlKFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICB2aWV3OiBcImZyb250XCIgfCBcImJhY2tcIixcbiAgZ2VuZGVyOiBHZW5kZXIsXG4gIG11c2NsZURhdGE6IE1hcDxNdXNjbGVHcm91cElkLCBudW1iZXI+LFxuICBvbk11c2NsZUNsaWNrOiAoaWQ6IE11c2NsZUdyb3VwSWQpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBmaWd1cmUgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1maWd1cmVcIiB9KTtcblxuICAvLyBMYWJlbFxuICBmaWd1cmUuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlYXRtYXAtdmlldy1sYWJlbFwiLFxuICAgIHRleHQ6IHZpZXcgPT09IFwiZnJvbnRcIiA/IFwiRnJvbnRcIiA6IFwiQmFja1wiLFxuICB9KTtcblxuICAvLyBTVkcgY29udGFpbmVyXG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyMDAgNDAwXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtc3ZnXCIpO1xuXG4gIC8vIERyYXcgYm9keSBzaWxob3VldHRlXG4gIGRyYXdCb2R5U2lsaG91ZXR0ZShzdmcsIHN2Z05TLCBnZW5kZXIsIHZpZXcpO1xuXG4gIC8vIERyYXcgbXVzY2xlIHJlZ2lvbnMgYXMgY29sb3JlZCBvdmVybGF5c1xuICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiBNVVNDTEVfUkVHSU9OUykge1xuICAgIGNvbnN0IGJvdW5kcyA9IHZpZXcgPT09IFwiZnJvbnRcIiA/IHJlZ2lvbi5mcm9udCA6IHJlZ2lvbi5iYWNrO1xuICAgIGlmICghYm91bmRzKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGludGVuc2l0eSA9IG11c2NsZURhdGEuZ2V0KHJlZ2lvbi5pZCkgPz8gMDtcblxuICAgIC8vIE1hcCBwZXJjZW50YWdlIGNvb3JkcyB0byBTVkcgdmlld0JveFxuICAgIGNvbnN0IHggPSBib3VuZHMueCAqIDI7XG4gICAgY29uc3QgeSA9IGJvdW5kcy55ICogNDtcbiAgICBjb25zdCB3ID0gYm91bmRzLncgKiAyO1xuICAgIGNvbnN0IGggPSBib3VuZHMuaCAqIDQ7XG5cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInJlY3RcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyh5KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodykpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhoKSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjZcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeVwiLCBcIjZcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGdldEludGVuc2l0eUNvbG9yKGludGVuc2l0eSkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBpbnRlbnNpdHkgPiAwID8gXCIwLjdcIiA6IFwiMC4xNVwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1oZWF0bWFwLW11c2NsZVwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtbXVzY2xlXCIsIHJlZ2lvbi5pZCk7XG5cbiAgICAvLyBUb29sdGlwICsgY2xpY2tcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke01VU0NMRV9HUk9VUF9MQUJFTFNbcmVnaW9uLmlkXX0ke2ludGVuc2l0eSA+IDAgPyBgIFx1MjAxNCAke01hdGgucm91bmQoaW50ZW5zaXR5ICogMTAwKX0lYCA6IFwiXCJ9YDtcbiAgICByZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb25NdXNjbGVDbGljayhyZWdpb24uaWQpO1xuICAgIH0pO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHJlY3QpO1xuXG4gICAgLy8gQWxzbyBtaXJyb3IgZm9yIHJpZ2h0IHNpZGUgKHNob3VsZGVycywgYmljZXBzLCB0cmljZXBzLCBmb3JlYXJtcywgcXVhZHMsIGhhbXN0cmluZ3MsIGNhbHZlcylcbiAgICBpZiAoaXNTeW1tZXRyaWNNdXNjbGUocmVnaW9uLmlkKSAmJiBib3VuZHMueCA8IDUwKSB7XG4gICAgICBjb25zdCBtaXJyb3JYID0gMjAwIC0geCAtIHc7XG4gICAgICBjb25zdCBtaXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhtaXJyb3JYKSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhoKSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInJ5XCIsIFwiNlwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGdldEludGVuc2l0eUNvbG9yKGludGVuc2l0eSkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgaW50ZW5zaXR5ID4gMCA/IFwiMC43XCIgOiBcIjAuMTVcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtbXVzY2xlXCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImRhdGEtbXVzY2xlXCIsIHJlZ2lvbi5pZCk7XG5cbiAgICAgIGNvbnN0IG1pcnJvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRpdGxlXCIpO1xuICAgICAgbWlycm9yVGl0bGUudGV4dENvbnRlbnQgPSBgJHtNVVNDTEVfR1JPVVBfTEFCRUxTW3JlZ2lvbi5pZF19JHtpbnRlbnNpdHkgPiAwID8gYCBcdTIwMTQgJHtNYXRoLnJvdW5kKGludGVuc2l0eSAqIDEwMCl9JWAgOiBcIlwifWA7XG4gICAgICBtaXJyb3IuYXBwZW5kQ2hpbGQobWlycm9yVGl0bGUpO1xuXG4gICAgICBtaXJyb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uTXVzY2xlQ2xpY2socmVnaW9uLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQobWlycm9yKTtcbiAgICB9XG4gIH1cblxuICBmaWd1cmUuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuZnVuY3Rpb24gaXNTeW1tZXRyaWNNdXNjbGUoaWQ6IE11c2NsZUdyb3VwSWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIFtcInNob3VsZGVyc1wiLCBcImJpY2Vwc1wiLCBcInRyaWNlcHNcIiwgXCJmb3JlYXJtc1wiLCBcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImNhbHZlc1wiLCBcIm9ibGlxdWVzXCJdLmluY2x1ZGVzKGlkKTtcbn1cblxuZnVuY3Rpb24gZHJhd0JvZHlTaWxob3VldHRlKHN2ZzogU1ZHU1ZHRWxlbWVudCwgbnM6IHN0cmluZywgZ2VuZGVyOiBHZW5kZXIsIHZpZXc6IFwiZnJvbnRcIiB8IFwiYmFja1wiKTogdm9pZCB7XG4gIC8vIFNpbXBsaWZpZWQgaHVtYW4gc2lsaG91ZXR0ZSBhcyBhIHBhdGhcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xuXG4gIC8vIEJhc2Ugc2lsaG91ZXR0ZSBcdTIwMTQgc2xpZ2h0bHkgZGlmZmVyZW50IHByb3BvcnRpb25zIGJ5IGdlbmRlclxuICBjb25zdCBpc0ZlbWFsZSA9IGdlbmRlciA9PT0gXCJmZW1hbGVcIjtcbiAgY29uc3Qgc2hvdWxkZXJXID0gaXNGZW1hbGUgPyA2MiA6IDY4O1xuICBjb25zdCBoaXBXID0gaXNGZW1hbGUgPyA1OCA6IDQ4O1xuICBjb25zdCB3YWlzdFcgPSBpc0ZlbWFsZSA/IDM4IDogNDI7XG5cbiAgLy8gQnVpbGQgc2lsaG91ZXR0ZSBwYXRoXG4gIGNvbnN0IGQgPSBbXG4gICAgLy8gSGVhZFxuICAgIGBNIDEwMCAxMGAsXG4gICAgYGEgMTYgMTggMCAxIDEgMC4wMSAwYCxcbiAgICAvLyBOZWNrXG4gICAgYE0gOTIgNDQgTCA5MiA1MmAsXG4gICAgYE0gMTA4IDQ0IEwgMTA4IDUyYCxcbiAgICAvLyBTaG91bGRlcnNcbiAgICBgTSA5MiA1MiBMICR7MTAwIC0gc2hvdWxkZXJXfSA1OGAsXG4gICAgYE0gMTA4IDUyIEwgJHsxMDAgKyBzaG91bGRlcld9IDU4YCxcbiAgICAvLyBUb3JzbyBsZWZ0XG4gICAgYE0gJHsxMDAgLSBzaG91bGRlcld9IDU4IEwgJHsxMDAgLSBzaG91bGRlclcgKyA0fSAxMDBgLFxuICAgIGBMICR7MTAwIC0gd2Fpc3RXfSAxNDBgLFxuICAgIGBMICR7MTAwIC0gaGlwV30gMTgwYCxcbiAgICAvLyBUb3JzbyByaWdodFxuICAgIGBNICR7MTAwICsgc2hvdWxkZXJXfSA1OCBMICR7MTAwICsgc2hvdWxkZXJXIC0gNH0gMTAwYCxcbiAgICBgTCAkezEwMCArIHdhaXN0V30gMTQwYCxcbiAgICBgTCAkezEwMCArIGhpcFd9IDE4MGAsXG4gICAgLy8gQXJtcyBsZWZ0XG4gICAgYE0gJHsxMDAgLSBzaG91bGRlcld9IDU4IEwgJHsxMDAgLSBzaG91bGRlclcgLSAxMn0gMTEwYCxcbiAgICBgTCAkezEwMCAtIHNob3VsZGVyVyAtIDE2fSAxNzBgLFxuICAgIGBNICR7MTAwIC0gc2hvdWxkZXJXIC0gNn0gNTggTCAkezEwMCAtIHNob3VsZGVyVyAtIDE4fSAxMTBgLFxuICAgIGBMICR7MTAwIC0gc2hvdWxkZXJXIC0gMjJ9IDE3MGAsXG4gICAgLy8gQXJtcyByaWdodFxuICAgIGBNICR7MTAwICsgc2hvdWxkZXJXfSA1OCBMICR7MTAwICsgc2hvdWxkZXJXICsgMTJ9IDExMGAsXG4gICAgYEwgJHsxMDAgKyBzaG91bGRlclcgKyAxNn0gMTcwYCxcbiAgICBgTSAkezEwMCArIHNob3VsZGVyVyArIDZ9IDU4IEwgJHsxMDAgKyBzaG91bGRlclcgKyAxOH0gMTEwYCxcbiAgICBgTCAkezEwMCArIHNob3VsZGVyVyArIDIyfSAxNzBgLFxuICAgIC8vIExlZ3MgbGVmdFxuICAgIGBNICR7MTAwIC0gaGlwV30gMTgwIEwgJHsxMDAgLSBoaXBXICsgNn0gMjgwYCxcbiAgICBgTCAkezEwMCAtIGhpcFcgKyAxMH0gMzYwYCxcbiAgICBgTSAkezEwMCAtIDZ9IDE4MCBMICR7MTAwIC0gMTJ9IDI4MGAsXG4gICAgYEwgJHsxMDAgLSAxNn0gMzYwYCxcbiAgICAvLyBMZWdzIHJpZ2h0XG4gICAgYE0gJHsxMDAgKyBoaXBXfSAxODAgTCAkezEwMCArIGhpcFcgLSA2fSAyODBgLFxuICAgIGBMICR7MTAwICsgaGlwVyAtIDEwfSAzNjBgLFxuICAgIGBNICR7MTAwICsgNn0gMTgwIEwgJHsxMDAgKyAxMn0gMjgwYCxcbiAgICBgTCAkezEwMCArIDE2fSAzNjBgLFxuICBdLmpvaW4oXCIgXCIpO1xuXG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBkKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuMTIpXCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG59XG5cbi8vIC0tLSBNdXNjbGUgSW50ZW5zaXR5IENhbGN1bGF0aW9uIC0tLVxuXG5mdW5jdGlvbiBnYXRoZXJNdXNjbGVJbnRlbnNpdHkoXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3Ncbik6IE1hcDxNdXNjbGVHcm91cElkLCBudW1iZXI+IHtcbiAgY29uc3QgZGF0YSA9IG5ldyBNYXA8TXVzY2xlR3JvdXBJZCwgbnVtYmVyPigpO1xuXG4gIC8vIFBhcnNlIHdvcmtvdXQgbm90ZXMgZm9yIG11c2NsZSBncm91cCBtZW50aW9uc1xuICAvLyBMb29rIGF0IHRoZSBsYXN0IDMwIGRheXMgb2Ygd29ya291dCBjb21wbGV0aW9uc1xuICBjb25zdCB3b3Jrb3V0QWN0aXZpdHkgPSBzZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IFwid29ya291dFwiKTtcbiAgaWYgKCF3b3Jrb3V0QWN0aXZpdHkpIHJldHVybiBkYXRhO1xuXG4gIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbd29ya291dEFjdGl2aXR5LmlkXSA/PyBbXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGhpcnR5RGF5c0FnbyA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIC8vIENvdW50IGNvbXBsZXRpb25zIGluIHRoZSBsYXN0IDMwIGRheXMgYXMgYSBwcm94eSBmb3Igb3ZlcmFsbCBhY3Rpdml0eVxuICBjb25zdCByZWNlbnRDb21wbGV0aW9ucyA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICByZXR1cm4gZCA+PSB0aGlydHlEYXlzQWdvO1xuICB9KS5sZW5ndGg7XG5cbiAgaWYgKHJlY2VudENvbXBsZXRpb25zID09PSAwKSByZXR1cm4gZGF0YTtcblxuICAvLyBTaW5jZSB3ZSBjYW4ndCBwYXJzZSB3aGljaCBtdXNjbGVzIHdlcmUgdHJhaW5lZCBmcm9tIGZyb250bWF0dGVyIGFsb25lLFxuICAvLyB1c2Ugd29ya291dCBmcmVxdWVuY3kgYXMgYSB1bmlmb3JtIGJhc2UgaW50ZW5zaXR5IGFuZCBmcm9udG1hdHRlclxuICAvLyBtdXNjbGVfZ3JvdXBzIGZpZWxkIGlmIGF2YWlsYWJsZVxuICBjb25zdCBiYXNlSW50ZW5zaXR5ID0gTWF0aC5taW4oMSwgcmVjZW50Q29tcGxldGlvbnMgLyAyMCk7XG5cbiAgLy8gU2V0IGJhc2UgZm9yIGFsbCBtdXNjbGUgZ3JvdXBzIHByb3BvcnRpb25hbCB0byB3b3Jrb3V0IGZyZXF1ZW5jeVxuICBjb25zdCBhbGxNdXNjbGVzOiBNdXNjbGVHcm91cElkW10gPSBbXG4gICAgXCJjaGVzdFwiLCBcImJhY2tcIiwgXCJzaG91bGRlcnNcIiwgXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIixcbiAgICBcImFic1wiLCBcIm9ibGlxdWVzXCIsIFwicXVhZHNcIiwgXCJoYW1zdHJpbmdzXCIsIFwiZ2x1dGVzXCIsIFwiY2FsdmVzXCIsXG4gICAgXCJ0cmFwc1wiLCBcImxhdHNcIiwgXCJuZWNrXCIsXG4gIF07XG5cbiAgZm9yIChjb25zdCBtIG9mIGFsbE11c2NsZXMpIHtcbiAgICBkYXRhLnNldChtLCBiYXNlSW50ZW5zaXR5ICogMC41KTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vLyAtLS0gQ29sb3IgTWFwcGluZyAtLS1cblxuZnVuY3Rpb24gZ2V0SW50ZW5zaXR5Q29sb3IoaW50ZW5zaXR5OiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoaW50ZW5zaXR5IDw9IDApIHJldHVybiBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIjtcbiAgaWYgKGludGVuc2l0eSA8IDAuMykgcmV0dXJuIFwiIzJkNGExZVwiOyAgLy8gY29vbCBncmVlblxuICBpZiAoaW50ZW5zaXR5IDwgMC42KSByZXR1cm4gXCIjNWE4YTJlXCI7ICAvLyBtZWRpdW0gZ3JlZW5cbiAgaWYgKGludGVuc2l0eSA8IDAuOCkgcmV0dXJuIFwiI2Q0YTg0M1wiOyAgLy8gd2FybSBnb2xkXG4gIHJldHVybiBcIiNlOGMzNWFcIjsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJpZ2h0IGdvbGRcbn1cblxuLy8gLS0tIE11c2NsZSBQcm9ncmVzcyBQb3B1cCAtLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNdXNjbGVQcm9ncmVzc1BvcHVwKFxuICBtdXNjbGVJZDogTXVzY2xlR3JvdXBJZCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXBcbik6IHZvaWQge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldCBvbGVuLXByb2dyZXNzLXNoZWV0XCIgfSk7XG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gTVVTQ0xFX0dST1VQX0xBQkVMU1ttdXNjbGVJZF07XG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBNb250aGx5IHByb2dyZXNzIGNoYXJ0IChzaW1wbGUgYmFyIGNoYXJ0KVxuICBjb25zdCBjaGFydENvbnRhaW5lciA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWNoYXJ0XCIgfSk7XG4gIHJlbmRlclNpbXBsZUJhckNoYXJ0KGNoYXJ0Q29udGFpbmVyLCBtdXNjbGVJZCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuXG4gIC8vIFRvZ2dsZSBmb3IgeWVhcmx5IHZpZXdcbiAgY29uc3QgdG9nZ2xlUm93ID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtdG9nZ2xlXCIgfSk7XG4gIGNvbnN0IG1vbnRoQnRuID0gdG9nZ2xlUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIixcbiAgICB0ZXh0OiBcIk1vbnRobHlcIixcbiAgfSk7XG4gIGNvbnN0IHllYXJCdG4gPSB0b2dnbGVSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCIsXG4gICAgdGV4dDogXCJZZWFybHlcIixcbiAgfSk7XG5cbiAgbW9udGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFydENvbnRhaW5lci5lbXB0eSgpO1xuICAgIHJlbmRlclNpbXBsZUJhckNoYXJ0KGNoYXJ0Q29udGFpbmVyLCBtdXNjbGVJZCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgICB5ZWFyQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICB9KTtcblxuICB5ZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhcnRDb250YWluZXIuZW1wdHkoKTtcbiAgICByZW5kZXJTaW1wbGVCYXJDaGFydChjaGFydENvbnRhaW5lciwgbXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJ5ZWFyXCIpO1xuICAgIHllYXJCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICB9KTtcblxuICAvLyBDbG9zZSBvbiBvdmVybGF5IGNsaWNrXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVBvcHVwKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKTogdm9pZCB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG59XG5cbi8vIC0tLSBPdmVyYWxsIFByb2dyZXNzIFBvcHVwIC0tLVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd092ZXJhbGxQcm9ncmVzc1BvcHVwKFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcFxuKTogdm9pZCB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0IG9sZW4tcHJvZ3Jlc3Mtc2hlZXRcIiB9KTtcbiAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiU3RyZW5ndGggUHJvZ3Jlc3NcIiB9KTtcblxuICAvLyBUYWIgdG9nZ2xlXG4gIGNvbnN0IHRvZ2dsZVJvdyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLXRvZ2dsZVwiIH0pO1xuICBjb25zdCBtb250aEJ0biA9IHRvZ2dsZVJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCIsXG4gICAgdGV4dDogXCJNb250aGx5XCIsXG4gIH0pO1xuICBjb25zdCB5ZWFyQnRuID0gdG9nZ2xlUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiLFxuICAgIHRleHQ6IFwiWWVhcmx5XCIsXG4gIH0pO1xuXG4gIC8vIENoYXJ0IDE6IE92ZXJhbGwgc3RyZW5ndGggKGFsbCBleGVyY2lzZXMgY29tYmluZWQgYXZlcmFnZSlcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXByb2dyZXNzLXN1YnRpdGxlXCIsXG4gICAgdGV4dDogXCJPdmVyYWxsIFN0cmVuZ3RoXCIsXG4gIH0pO1xuICBjb25zdCBvdmVyYWxsQ2hhcnQgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1jaGFydFwiIH0pO1xuICByZW5kZXJPdmVyYWxsU3RyZW5ndGhDaGFydChvdmVyYWxsQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcblxuICAvLyBDaGFydCAyOiBQZXItbXVzY2xlIGJyZWFrZG93biAobXVsdGktbGluZSlcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXByb2dyZXNzLXN1YnRpdGxlXCIsXG4gICAgdGV4dDogXCJCeSBNdXNjbGUgR3JvdXBcIixcbiAgfSk7XG4gIGNvbnN0IG11c2NsZUNoYXJ0ID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtY2hhcnRcIiB9KTtcbiAgcmVuZGVyTXVzY2xlQnJlYWtkb3duQ2hhcnQobXVzY2xlQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcblxuICBtb250aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJhbGxDaGFydC5lbXB0eSgpO1xuICAgIG11c2NsZUNoYXJ0LmVtcHR5KCk7XG4gICAgcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQob3ZlcmFsbENoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG4gICAgcmVuZGVyTXVzY2xlQnJlYWtkb3duQ2hhcnQobXVzY2xlQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcbiAgICBtb250aEJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gICAgeWVhckJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgfSk7XG5cbiAgeWVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJhbGxDaGFydC5lbXB0eSgpO1xuICAgIG11c2NsZUNoYXJ0LmVtcHR5KCk7XG4gICAgcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQob3ZlcmFsbENoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwieWVhclwiKTtcbiAgICByZW5kZXJNdXNjbGVCcmVha2Rvd25DaGFydChtdXNjbGVDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcInllYXJcIik7XG4gICAgeWVhckJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gICAgbW9udGhCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gIH0pO1xuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVBvcHVwKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKTogdm9pZCB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG59XG5cbi8vIC0tLSBDaGFydCBSZW5kZXJpbmcgSGVscGVycyAtLS1cblxuZnVuY3Rpb24gcmVuZGVyU2ltcGxlQmFyQ2hhcnQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIG11c2NsZUlkOiBNdXNjbGVHcm91cElkLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcCxcbiAgcGVyaW9kOiBcIm1vbnRoXCIgfCBcInllYXJcIlxuKTogdm9pZCB7XG4gIGNvbnN0IHdvcmtvdXRBY3Rpdml0eSA9IHNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gXCJ3b3Jrb3V0XCIpO1xuICBpZiAoIXdvcmtvdXRBY3Rpdml0eSkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXByb2dyZXNzLWVtcHR5XCIsIHRleHQ6IFwiTm8gd29ya291dCBkYXRhIGF2YWlsYWJsZVwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbd29ya291dEFjdGl2aXR5LmlkXSA/PyBbXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCB2YWx1ZXM6IG51bWJlcltdID0gW107XG5cbiAgaWYgKHBlcmlvZCA9PT0gXCJtb250aFwiKSB7XG4gICAgLy8gTGFzdCAzMCBkYXlzLCBncm91cGVkIGJ5IHdlZWtcbiAgICBmb3IgKGxldCB3ID0gMzsgdyA+PSAwOyB3LS0pIHtcbiAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtFbmQuZ2V0VGltZSgpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgY29uc3QgY291bnQgPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgICAgfSkubGVuZ3RoO1xuICAgICAgbGFiZWxzLnB1c2goYFckezQgLSB3fWApO1xuICAgICAgdmFsdWVzLnB1c2goY291bnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBMYXN0IDEyIG1vbnRoc1xuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG4gICAgZm9yIChsZXQgbSA9IDExOyBtID49IDA7IG0tLSkge1xuICAgICAgY29uc3QgbW9udGhEYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpIC0gbSwgMSk7XG4gICAgICBjb25zdCBtb250aEVuZCA9IG5ldyBEYXRlKG1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aERhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuICAgICAgY29uc3QgY291bnQgPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGQgPj0gbW9udGhEYXRlICYmIGQgPD0gbW9udGhFbmQ7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBsYWJlbHMucHVzaChtb250aE5hbWVzW21vbnRoRGF0ZS5nZXRNb250aCgpXSk7XG4gICAgICB2YWx1ZXMucHVzaChjb3VudCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0JhckNoYXJ0KGNvbnRhaW5lciwgbGFiZWxzLCB2YWx1ZXMsIFwiI2Q0YTg0M1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBwZXJpb2Q6IFwibW9udGhcIiB8IFwieWVhclwiXG4pOiB2b2lkIHtcbiAgY29uc3QgYm9keUFjdGl2aXRpZXMgPSBzZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkICYmIGEuY2F0ZWdvcnkgPT09IFwiYm9keVwiKTtcbiAgaWYgKGJvZHlBY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXByb2dyZXNzLWVtcHR5XCIsIHRleHQ6IFwiTm8gYm9keSBhY3Rpdml0aWVzIGNvbmZpZ3VyZWRcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHZhbHVlczogbnVtYmVyW10gPSBbXTtcblxuICBpZiAocGVyaW9kID09PSBcIm1vbnRoXCIpIHtcbiAgICBmb3IgKGxldCB3ID0gMzsgdyA+PSAwOyB3LS0pIHtcbiAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtFbmQuZ2V0VGltZSgpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIGZvciAoY29uc3QgYWN0IG9mIGJvZHlBY3Rpdml0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbYWN0LmlkXSA/PyBbXTtcbiAgICAgICAgdG90YWwgKz0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnB1c2goYFckezQgLSB3fWApO1xuICAgICAgdmFsdWVzLnB1c2godG90YWwpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuICAgIGZvciAobGV0IG0gPSAxMTsgbSA+PSAwOyBtLS0pIHtcbiAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIG0sIDEpO1xuICAgICAgY29uc3QgbW9udGhFbmQgPSBuZXcgRGF0ZShtb250aERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGhEYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGFjdCBvZiBib2R5QWN0aXZpdGllcykge1xuICAgICAgICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW2FjdC5pZF0gPz8gW107XG4gICAgICAgIHRvdGFsICs9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgICByZXR1cm4gZCA+PSBtb250aERhdGUgJiYgZCA8PSBtb250aEVuZDtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnB1c2gobW9udGhOYW1lc1ttb250aERhdGUuZ2V0TW9udGgoKV0pO1xuICAgICAgdmFsdWVzLnB1c2godG90YWwpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdCYXJDaGFydChjb250YWluZXIsIGxhYmVscywgdmFsdWVzLCBcIiNkNGE4NDNcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck11c2NsZUJyZWFrZG93bkNoYXJ0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcCxcbiAgcGVyaW9kOiBcIm1vbnRoXCIgfCBcInllYXJcIlxuKTogdm9pZCB7XG4gIC8vIFNob3cgYm9keS1jYXRlZ29yeSBhY3Rpdml0aWVzIGFzIHNlcGFyYXRlIGxpbmVzXG4gIGNvbnN0IGJvZHlBY3Rpdml0aWVzID0gc2V0dGluZ3MuYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IGEuZW5hYmxlZCAmJiBhLmNhdGVnb3J5ID09PSBcImJvZHlcIik7XG4gIGlmIChib2R5QWN0aXZpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICBjb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1lbXB0eVwiLCB0ZXh0OiBcIk5vIGJvZHkgYWN0aXZpdGllcyBjb25maWd1cmVkXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgY29sb3JzID0gW1wiI2Q0YTg0M1wiLCBcIiNlOGMzNWFcIiwgXCIjN2I5ZGUwXCIsIFwiI2EwOGRlMFwiLCBcIiM1ZTlhN2FcIiwgXCIjYzQ4ODIwXCJdO1xuXG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCB3aWR0aCA9IDI4MDtcbiAgY29uc3QgaGVpZ2h0ID0gMTIwO1xuICBjb25zdCBwYWRkaW5nID0geyB0b3A6IDEwLCByaWdodDogMTAsIGJvdHRvbTogMjAsIGxlZnQ6IDI0IH07XG4gIGNvbnN0IGNoYXJ0VyA9IHdpZHRoIC0gcGFkZGluZy5sZWZ0IC0gcGFkZGluZy5yaWdodDtcbiAgY29uc3QgY2hhcnRIID0gaGVpZ2h0IC0gcGFkZGluZy50b3AgLSBwYWRkaW5nLmJvdHRvbTtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWApO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLXByb2dyZXNzLXN2Z1wiKTtcblxuICBjb25zdCBidWNrZXRDb3VudCA9IHBlcmlvZCA9PT0gXCJtb250aFwiID8gNCA6IDEyO1xuXG4gIC8vIENvbXB1dGUgZGF0YSBzZXJpZXMgZm9yIGVhY2ggYWN0aXZpdHlcbiAgY29uc3QgYWxsU2VyaWVzOiB7IG5hbWU6IHN0cmluZzsgdmFsdWVzOiBudW1iZXJbXTsgY29sb3I6IHN0cmluZyB9W10gPSBbXTtcbiAgbGV0IGdsb2JhbE1heCA9IDE7XG5cbiAgZm9yIChsZXQgYWkgPSAwOyBhaSA8IGJvZHlBY3Rpdml0aWVzLmxlbmd0aDsgYWkrKykge1xuICAgIGNvbnN0IGFjdCA9IGJvZHlBY3Rpdml0aWVzW2FpXTtcbiAgICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW2FjdC5pZF0gPz8gW107XG4gICAgY29uc3QgdmFsczogbnVtYmVyW10gPSBbXTtcblxuICAgIGlmIChwZXJpb2QgPT09IFwibW9udGhcIikge1xuICAgICAgZm9yIChsZXQgdyA9IDM7IHcgPj0gMDsgdy0tKSB7XG4gICAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUod2Vla0VuZC5nZXRUaW1lKCkgLSA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHZhbHMucHVzaChjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgICAgICB9KS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBtID0gMTE7IG0gPj0gMDsgbS0tKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIG0sIDEpO1xuICAgICAgICBjb25zdCBtb250aEVuZCA9IG5ldyBEYXRlKG1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aERhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuICAgICAgICB2YWxzLnB1c2goY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IG1vbnRoRGF0ZSAmJiBkIDw9IG1vbnRoRW5kO1xuICAgICAgICB9KS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHMsIDEpO1xuICAgIGlmIChtYXggPiBnbG9iYWxNYXgpIGdsb2JhbE1heCA9IG1heDtcblxuICAgIGFsbFNlcmllcy5wdXNoKHtcbiAgICAgIG5hbWU6IGFjdC5uYW1lLFxuICAgICAgdmFsdWVzOiB2YWxzLFxuICAgICAgY29sb3I6IGNvbG9yc1thaSAlIGNvbG9ycy5sZW5ndGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRHJhdyBsaW5lc1xuICBmb3IgKGNvbnN0IHNlcmllcyBvZiBhbGxTZXJpZXMpIHtcbiAgICBjb25zdCBwb2ludHMgPSBzZXJpZXMudmFsdWVzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIChpIC8gKGJ1Y2tldENvdW50IC0gMSkpICogY2hhcnRXO1xuICAgICAgY29uc3QgeSA9IHBhZGRpbmcudG9wICsgY2hhcnRIIC0gKHYgLyBnbG9iYWxNYXgpICogY2hhcnRIO1xuICAgICAgcmV0dXJuIGAke3h9LCR7eX1gO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwb2x5bGluZVwiKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBwb2ludHMuam9pbihcIiBcIikpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgc2VyaWVzLmNvbG9yKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cblxuICAvLyBYIGF4aXMgbGFiZWxzXG4gIGNvbnN0IHhMYWJlbHMgPSBwZXJpb2QgPT09IFwibW9udGhcIlxuICAgID8gW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl1cbiAgICA6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldENvdW50OyBpKyspIHtcbiAgICBjb25zdCB4ID0gcGFkZGluZy5sZWZ0ICsgKGkgLyAoYnVja2V0Q291bnQgLSAxKSkgKiBjaGFydFc7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGV4dFwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoaGVpZ2h0IC0gNCkpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuNClcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiOFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHhMYWJlbHNbaV07XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIC8vIExlZ2VuZFxuICBjb25zdCBsZWdlbmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtbGVnZW5kXCIgfSk7XG4gIGZvciAoY29uc3Qgc2VyaWVzIG9mIGFsbFNlcmllcykge1xuICAgIGNvbnN0IGl0ZW0gPSBsZWdlbmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtbGVnZW5kLWl0ZW1cIiB9KTtcbiAgICBjb25zdCBkb3QgPSBpdGVtLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWxlZ2VuZC1kb3RcIiB9KTtcbiAgICBkb3Quc3R5bGUuYmFja2dyb3VuZCA9IHNlcmllcy5jb2xvcjtcbiAgICBpdGVtLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IHNlcmllcy5uYW1lIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdCYXJDaGFydChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgbGFiZWxzOiBzdHJpbmdbXSxcbiAgdmFsdWVzOiBudW1iZXJbXSxcbiAgY29sb3I6IHN0cmluZ1xuKTogdm9pZCB7XG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCB3aWR0aCA9IDI4MDtcbiAgY29uc3QgaGVpZ2h0ID0gMTAwO1xuICBjb25zdCBwYWRkaW5nID0geyB0b3A6IDgsIHJpZ2h0OiA4LCBib3R0b206IDE4LCBsZWZ0OiA4IH07XG4gIGNvbnN0IGNoYXJ0VyA9IHdpZHRoIC0gcGFkZGluZy5sZWZ0IC0gcGFkZGluZy5yaWdodDtcbiAgY29uc3QgY2hhcnRIID0gaGVpZ2h0IC0gcGFkZGluZy50b3AgLSBwYWRkaW5nLmJvdHRvbTtcbiAgY29uc3QgbWF4VmFsID0gTWF0aC5tYXgoLi4udmFsdWVzLCAxKTtcbiAgY29uc3QgYmFyR2FwID0gNDtcbiAgY29uc3QgYmFyV2lkdGggPSAoY2hhcnRXIC0gYmFyR2FwICogKGxhYmVscy5sZW5ndGggLSAxKSkgLyBsYWJlbHMubGVuZ3RoO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4tcHJvZ3Jlc3Mtc3ZnXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIGkgKiAoYmFyV2lkdGggKyBiYXJHYXApO1xuICAgIGNvbnN0IGJhckggPSBNYXRoLm1heCgyLCAodmFsdWVzW2ldIC8gbWF4VmFsKSAqIGNoYXJ0SCk7XG4gICAgY29uc3QgeSA9IHBhZGRpbmcudG9wICsgY2hhcnRIIC0gYmFySDtcblxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhiYXJXaWR0aCkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhiYXJIKSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjNcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHZhbHVlc1tpXSA+IDAgPyBjb2xvciA6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjA2KVwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQocmVjdCk7XG5cbiAgICAvLyBMYWJlbFxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGV4dFwiKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHggKyBiYXJXaWR0aCAvIDIpKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKGhlaWdodCAtIDQpKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC40KVwiKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjhcIik7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGxhYmVsc1tpXTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuLy8gLS0tIE11c2NsZSBTZWxlY3RvciBmb3IgTmV3IFdvcmtvdXQgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TXVzY2xlU2VsZWN0b3IoXG4gIG9uQ29uZmlybTogKHNlbGVjdGVkOiBNdXNjbGVHcm91cElkW10pID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldCBvbGVuLW11c2NsZS1zZWxlY3Rvci1zaGVldFwiIH0pO1xuICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJTZWxlY3QgTXVzY2xlc1wiIH0pO1xuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcHJvZ3Jlc3Mtc3VidGl0bGVcIixcbiAgICB0ZXh0OiBcIlRhcCB0aGUgbXVzY2xlcyB5b3Ugd2FudCB0byB0cmFpblwiLFxuICB9KTtcblxuICBjb25zdCBzZWxlY3RlZCA9IG5ldyBTZXQ8TXVzY2xlR3JvdXBJZD4oKTtcblxuICAvLyBTVkcgZmlndXJlIHdpdGggY2xpY2thYmxlIG11c2NsZXNcbiAgY29uc3QgZmlndXJlV3JhcCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLW11c2NsZS1zZWxlY3Rvci1maWd1cmVcIiB9KTtcblxuICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjAwIDQwMFwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1oZWF0bWFwLXN2ZyBvbGVuLXNlbGVjdG9yLXN2Z1wiKTtcblxuICAvLyBEcmF3IHNpbGhvdWV0dGVcbiAgZHJhd0JvZHlTaWxob3VldHRlKHN2Zywgc3ZnTlMsIFwibWFsZVwiLCBcImZyb250XCIpO1xuXG4gIC8vIERyYXcgY2xpY2thYmxlIG11c2NsZSByZWdpb25zXG4gIGNvbnN0IHJlY3RzOiBNYXA8TXVzY2xlR3JvdXBJZCwgU1ZHUmVjdEVsZW1lbnRbXT4gPSBuZXcgTWFwKCk7XG5cbiAgZm9yIChjb25zdCByZWdpb24gb2YgTVVTQ0xFX1JFR0lPTlMpIHtcbiAgICBjb25zdCBib3VuZHMgPSByZWdpb24uZnJvbnQgPz8gcmVnaW9uLmJhY2s7XG4gICAgaWYgKCFib3VuZHMpIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgeCA9IGJvdW5kcy54ICogMjtcbiAgICBjb25zdCB5ID0gYm91bmRzLnkgKiA0O1xuICAgIGNvbnN0IHcgPSBib3VuZHMudyAqIDI7XG4gICAgY29uc3QgaCA9IGJvdW5kcy5oICogNDtcblxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKGgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ5XCIsIFwiNlwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuMDYpXCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtbXVzY2xlIG9sZW4tc2VsZWN0b3ItbXVzY2xlXCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1tdXNjbGVcIiwgcmVnaW9uLmlkKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUmVjdHMgPSByZWN0cy5nZXQocmVnaW9uLmlkKSA/PyBbXTtcbiAgICBleGlzdGluZ1JlY3RzLnB1c2gocmVjdCk7XG4gICAgcmVjdHMuc2V0KHJlZ2lvbi5pZCwgZXhpc3RpbmdSZWN0cyk7XG5cbiAgICByZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRvZ2dsZU11c2NsZShyZWdpb24uaWQpO1xuICAgIH0pO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHJlY3QpO1xuXG4gICAgLy8gTWlycm9yXG4gICAgaWYgKGlzU3ltbWV0cmljTXVzY2xlKHJlZ2lvbi5pZCkgJiYgYm91bmRzLnggPCA1MCkge1xuICAgICAgY29uc3QgbWlycm9yWCA9IDIwMCAtIHggLSB3O1xuICAgICAgY29uc3QgbWlycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInJlY3RcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcobWlycm9yWCkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodykpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoaCkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJyeVwiLCBcIjZcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtbXVzY2xlIG9sZW4tc2VsZWN0b3ItbXVzY2xlXCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImRhdGEtbXVzY2xlXCIsIHJlZ2lvbi5pZCk7XG5cbiAgICAgIGV4aXN0aW5nUmVjdHMucHVzaChtaXJyb3IpO1xuICAgICAgcmVjdHMuc2V0KHJlZ2lvbi5pZCwgZXhpc3RpbmdSZWN0cyk7XG5cbiAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdG9nZ2xlTXVzY2xlKHJlZ2lvbi5pZCk7XG4gICAgICB9KTtcblxuICAgICAgc3ZnLmFwcGVuZENoaWxkKG1pcnJvcik7XG4gICAgfVxuXG4gICAgLy8gTGFiZWwgdGV4dFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0ZXh0XCIpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4ICsgdyAvIDIpKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSArIGggLyAyICsgMykpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC41KVwiKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiN1wiKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpO1xuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IE1VU0NMRV9HUk9VUF9MQUJFTFNbcmVnaW9uLmlkXS5zbGljZSgwLCA1KTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgfVxuXG4gIGZpZ3VyZVdyYXAuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAvLyBTZWxlY3RlZCBjaGlwcyBhcmVhXG4gIGNvbnN0IGNoaXBzQXJlYSA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLW11c2NsZS1zZWxlY3Rvci1jaGlwc1wiIH0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU11c2NsZShpZDogTXVzY2xlR3JvdXBJZCk6IHZvaWQge1xuICAgIGlmIChzZWxlY3RlZC5oYXMoaWQpKSB7XG4gICAgICBzZWxlY3RlZC5kZWxldGUoaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZC5hZGQoaWQpO1xuICAgIH1cbiAgICB1cGRhdGVWaXN1YWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVZpc3VhbCgpOiB2b2lkIHtcbiAgICAvLyBVcGRhdGUgcmVjdHNcbiAgICBmb3IgKGNvbnN0IFtpZCwgcmVjdExpc3RdIG9mIHJlY3RzKSB7XG4gICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWQuaGFzKGlkKTtcbiAgICAgIGZvciAoY29uc3QgciBvZiByZWN0TGlzdCkge1xuICAgICAgICByLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgaXNTZWxlY3RlZCA/IFwicmdiYSgyMTIsIDE2OCwgNjcsIDAuNSlcIiA6IFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjA2KVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY2hpcHNcbiAgICBjaGlwc0FyZWEuZW1wdHkoKTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIHNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBjaGlwID0gY2hpcHNBcmVhLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLW11c2NsZS1zZWxlY3Rvci1jaGlwXCIgfSk7XG4gICAgICBjaGlwLnRleHRDb250ZW50ID0gTVVTQ0xFX0dST1VQX0xBQkVMU1tpZF07XG4gICAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVNdXNjbGUoaWQpKTtcbiAgICB9XG4gIH1cblxuICAvLyBDb25maXJtIGJ1dHRvblxuICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1hY3Rpb25zXCIgfSk7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IFwiQmVnaW4gV29ya291dFwiLFxuICB9KTtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsb3NlUG9wdXAoKTtcbiAgICBvbkNvbmZpcm0oQXJyYXkuZnJvbShzZWxlY3RlZCkpO1xuICB9KTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgdGV4dDogXCJDYW5jZWxcIixcbiAgfSk7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VQb3B1cCgpKTtcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VQb3B1cCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVBvcHVwKCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgV2VpZ2h0IFByb2dyZXNzIENvbXBvbmVudFxuLy8gV2VpZ2h0IHRyZW5kIGdyYXBoICsgbG9nIHJlbWluZGVyIG5vdGlmaWNhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBXZWlnaHRMb2dGcmVxdWVuY3kgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldlaWdodE5vdGlmaWNhdGlvbihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIG9uTG9nV2VpZ2h0OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3RhdHMgPSBzZXR0aW5ncy5wZXJzb25hbFN0YXRzO1xuICBpZiAoIXN0YXRzLmN1cnJlbnRXZWlnaHQgfHwgc3RhdHMud2VpZ2h0TG9nLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGNvbnN0IGRheXNTaW5jZUxvZyA9IGdldERheXNTaW5jZUxhc3RMb2coc3RhdHMubGFzdFdlaWdodExvZ0RhdGUpO1xuICBjb25zdCBpbnRlcnZhbERheXMgPSBnZXRJbnRlcnZhbERheXMoc3RhdHMud2VpZ2h0TG9nRnJlcXVlbmN5LCBzdGF0cy53ZWlnaHRMb2dDdXN0b21EYXlzKTtcblxuICBpZiAoZGF5c1NpbmNlTG9nIDwgaW50ZXJ2YWxEYXlzKSByZXR1cm47XG5cbiAgLy8gU2hvdyBub3RpZmljYXRpb24gY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQtY29tcGFjdCBvbGVuLXdlaWdodC1ub3RpZnlcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWlnaHQtbm90aWZ5LXJvd1wiIH0pO1xuICByb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogXCJUaW1lIHRvIGxvZyB5b3VyIHdlaWdodFwiIH0pO1xuXG4gIGNvbnN0IGJ0biA9IHJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi13ZWlnaHQtbm90aWZ5LWJ0blwiLFxuICAgIHRleHQ6IFwiTG9nXCIsXG4gIH0pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvbkxvZ1dlaWdodCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF5c1NpbmNlTGFzdExvZyhsYXN0RGF0ZTogc3RyaW5nIHwgbnVsbCk6IG51bWJlciB7XG4gIGlmICghbGFzdERhdGUpIHJldHVybiA5OTk7XG4gIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZShsYXN0RGF0ZSk7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IG1zID0gbm93LmdldFRpbWUoKSAtIGxhc3QuZ2V0VGltZSgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihtcyAvICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XG59XG5cbmZ1bmN0aW9uIGdldEludGVydmFsRGF5cyhmcmVxOiBXZWlnaHRMb2dGcmVxdWVuY3ksIGN1c3RvbURheXM6IG51bWJlcik6IG51bWJlciB7XG4gIHN3aXRjaCAoZnJlcSkge1xuICAgIGNhc2UgXCJ0d2ljZS1hLXdlZWtcIjogcmV0dXJuIDM7XG4gICAgY2FzZSBcImV2ZXJ5LXdlZWtcIjogcmV0dXJuIDc7XG4gICAgY2FzZSBcImV2ZXJ5LTItd2Vla3NcIjogcmV0dXJuIDE0O1xuICAgIGNhc2UgXCJldmVyeS0zLWRheXNcIjogcmV0dXJuIDM7XG4gICAgY2FzZSBcImV2ZXJ5LTUtZGF5c1wiOiByZXR1cm4gNTtcbiAgICBjYXNlIFwiY3VzdG9tXCI6IHJldHVybiBjdXN0b21EYXlzO1xuICAgIGRlZmF1bHQ6IHJldHVybiA3O1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBXb3Jrc3BhY2UgVmlld1xuLy8gQWN0aXZlIHdvcmtzcGFjZSBzY3JlZW4gd2l0aCB0aW1lciwgc2tpbGxzLCBmaW5pc2ggZmxvdy5cbi8vIFdoZW4gYW4gYWN0aXZpdHkgaGFzIGEgd29ya3NwYWNlVGVtcGxhdGUsIHRoZSB0ZW1wbGF0ZSBpc1xuLy8gcmVuZGVyZWQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0aW1lciBVSS5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHR5cGUgeyBBY3RpdmVXb3Jrc3BhY2UsIEFjdGl2aXR5Q29uZmlnLCBXb3Jrc3BhY2VUeXBlLCBXb3Jrc3BhY2VSZXN1bHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIEZBTExCQUNLX1FVT1RFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSB0aW1lckludGVydmFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGFydFRpbWU6IERhdGU7XG4gIHByaXZhdGUgZWxhcHNlZCA9IDA7IC8vIHNlY29uZHNcbiAgLyoqIFdoZW4gaW4gdGVtcGxhdGUgbW9kZSwgdHJhY2tzIHRoZSBkYWlseSBub3RlIGZpbGUgdGhlIHRlbXBsYXRlIGlzIGJvdW5kIHRvICovXG4gIHByaXZhdGUgdGVtcGxhdGVOb3RlRmlsZTogVEZpbGUgfCBudWxsID0gbnVsbDtcbiAgLyoqIFRyYWNrcyB3aGV0aGVyIHdlIGFscmVhZHkgcHJvY2Vzc2VkIGEgY29tcGxldGlvbiAocHJldmVudHMgZG91YmxlLWFwcGx5KSAqL1xuICBwcml2YXRlIGNvbXBsZXRpb25BcHBsaWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVklFV19UWVBFX1dPUktTUEFDRTtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlO1xuICAgIHJldHVybiB3b3Jrc3BhY2UgPyBgV29ya3NwYWNlOiAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9YCA6IFwiV29ya3NwYWNlXCI7XG4gIH1cblxuICBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwidGltZXJcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2U7XG4gICAgaWYgKCF3b3Jrc3BhY2UpIHtcbiAgICAgIHRoaXMuY29udGVudEVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgdGV4dDogXCJObyBhY3RpdmUgd29ya3NwYWNlLlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKFxuICAgICAgKGEpID0+IGEuaWQgPT09IHdvcmtzcGFjZS5hY3Rpdml0eUlkLFxuICAgICk7XG5cbiAgICBpZiAoYWN0aXZpdHk/LndvcmtzcGFjZVRlbXBsYXRlKSB7XG4gICAgICAvLyBUZW1wbGF0ZSBtb2RlOiByZW5kZXIgdGhlIGFjdGl2aXR5IHRlbXBsYXRlIGJvdW5kIHRvIHRvZGF5J3MgZGFpbHkgbm90ZVxuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUZW1wbGF0ZU1vZGUod29ya3NwYWNlLCBhY3Rpdml0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQgbW9kZTogdGltZXIgKyBza2lsbHMgKyBmaW5pc2hcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUod29ya3NwYWNlLnN0YXJ0VGltZSk7XG4gICAgICB0aGlzLnJlbmRlcih3b3Jrc3BhY2UpO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIHRoaXMudGVtcGxhdGVOb3RlRmlsZSA9IG51bGw7XG4gICAgdGhpcy5jb21wbGV0aW9uQXBwbGllZCA9IGZhbHNlO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFRlbXBsYXRlIE1vZGVcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyVGVtcGxhdGVNb2RlKFxuICAgIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICAvLyBGaW5kIG9yIGNyZWF0ZSB0b2RheSdzIGRhaWx5IG5vdGUgZm9yIHRoaXMgYWN0aXZpdHlcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5maW5kT3JDcmVhdGVEYWlseU5vdGUoYWN0aXZpdHkpO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgY29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgdGV4dDogXCJDb3VsZCBub3QgbG9hZCBhY3Rpdml0eSBub3RlLlwiLFxuICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImNvbG9yOiB2YXIoLS10ZXh0LWVycm9yKTsgcGFkZGluZzogMjBweDsgdGV4dC1hbGlnbjogY2VudGVyO1wiIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRlbXBsYXRlTm90ZUZpbGUgPSBmaWxlO1xuXG4gICAgLy8gV2FpdCBmb3IgbWV0YWRhdGEgY2FjaGUgdG8gcG9wdWxhdGUgKGltcG9ydGFudCBmb3IgbmV3bHkgY3JlYXRlZCBmaWxlcylcbiAgICBhd2FpdCB0aGlzLndhaXRGb3JNZXRhZGF0YShmaWxlKTtcblxuICAgIC8vIFJlbmRlciB0ZW1wbGF0ZSBpbnRvIHRoZSB2aWV3J3MgY29udGVudCBhcmVhXG4gICAgY29uc3QgdGVtcGxhdGVDb250YWluZXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiIH0pO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnRlbXBsYXRlRW5naW5lLnJlbmRlcihcbiAgICAgIGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlISxcbiAgICAgIGZpbGUsXG4gICAgICB0ZW1wbGF0ZUNvbnRhaW5lcixcbiAgICApO1xuXG4gICAgLy8gV2F0Y2ggZm9yIHRoZSB0ZW1wbGF0ZSBtYXJraW5nIHRoZSBhY3Rpdml0eSBhcyBkb25lIGluIGZyb250bWF0dGVyLlxuICAgIC8vIFdoZW4gdGhlIGFjdGl2aXR5IHByb3BlcnR5IGJlY29tZXMgdHJ1ZSwgYXBwbHkgcGx1Z2luLWxldmVsIGVmZmVjdHNcbiAgICAvLyAoWFAsIGJvc3MgZGFtYWdlLCBjbGVhciBhY3RpdmVXb3Jrc3BhY2UpLlxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUub24oXCJjaGFuZ2VkXCIsIChjaGFuZ2VkRmlsZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0aW9uQXBwbGllZCkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hhbmdlZEZpbGUucGF0aCAhPT0gZmlsZS5wYXRoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShjaGFuZ2VkRmlsZSk7XG4gICAgICAgIGNvbnN0IGZtID0gY2FjaGU/LmZyb250bWF0dGVyO1xuICAgICAgICBpZiAoZm0/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRpb25BcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjb21wbGV0aW9uVHlwZSA9IGZtW2Ake2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlYF0gYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMuYXBwbHlUZW1wbGF0ZUNvbXBsZXRpb24od29ya3NwYWNlLCBhY3Rpdml0eSwgY29tcGxldGlvblR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdG9kYXkncyBkYWlseSBub3RlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXIsIG9yIGNyZWF0ZSBvbmUuXG4gICAqIEVuc3VyZXMgdGhlIG5vdGUgaGFzIGBhY3Rpdml0eTogPGlkPmAgaW4gZnJvbnRtYXR0ZXIgc28gdGhlXG4gICAqIHRlbXBsYXRlIHBvc3QtcHJvY2Vzc29yIGFsc28gd29ya3Mgd2hlbiBvcGVuaW5nIHRoZSBub3RlIGRpcmVjdGx5LlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBmaW5kT3JDcmVhdGVEYWlseU5vdGUoYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnKTogUHJvbWlzZTxURmlsZSB8IG51bGw+IHtcbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIExvb2sgZm9yIGV4aXN0aW5nIGRhaWx5IG5vdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBleGlzdGluZyA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJlxuICAgICAgICBmLmJhc2VuYW1lID09PSBkYXRlU3RyLFxuICAgICk7XG5cbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIC8vIEVuc3VyZSBpdCBoYXMgdGhlIGFjdGl2aXR5IGZpZWxkIGluIGZyb250bWF0dGVyXG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZXhpc3RpbmcsIChmbSkgPT4ge1xuICAgICAgICBpZiAoIWZtLmFjdGl2aXR5KSBmbS5hY3Rpdml0eSA9IGFjdGl2aXR5LmlkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIGZvbGRlciBleGlzdHNcbiAgICBjb25zdCBhYnN0cmFjdEZvbGRlciA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXIpO1xuICAgIGlmICghYWJzdHJhY3RGb2xkZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXIpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEZvbGRlciBtYXkgYWxyZWFkeSBleGlzdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBuZXcgZGFpbHkgbm90ZSB3aXRoIGFjdGl2aXR5IGZyb250bWF0dGVyXG4gICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgLS0tXFxuYWN0aXZpdHk6ICR7YWN0aXZpdHkuaWR9XFxuLS0tXFxuYDtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgY29udGVudCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBGaWxlIG1pZ2h0IGFscmVhZHkgZXhpc3Qgd2l0aCBhIGRpZmZlcmVudCBjYXNpbmcgb3IgcmFjZSBjb25kaXRpb25cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXYWl0IHVudGlsIHRoZSBtZXRhZGF0YSBjYWNoZSBoYXMgaW5kZXhlZCBhIGZpbGUncyBmcm9udG1hdHRlci5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgd2FpdEZvck1ldGFkYXRhKGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICB3aGlsZSAoYXR0ZW1wdHMgPCAyMCkge1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHJldHVybjtcbiAgICAgIGF3YWl0IHNsZWVwKDUwKTtcbiAgICAgIGF0dGVtcHRzKys7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB0ZW1wbGF0ZSBtYXJrcyB0aGUgYWN0aXZpdHkgYXMgZG9uZSBpbiBmcm9udG1hdHRlci5cbiAgICogQXBwbGllcyBwbHVnaW4tbGV2ZWwgZWZmZWN0czogWFAsIGJvc3MgZGFtYWdlLCBjbGVhciB3b3Jrc3BhY2UuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGFwcGx5VGVtcGxhdGVDb21wbGV0aW9uKFxuICAgIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICBjb21wbGV0aW9uVHlwZT86IHN0cmluZyxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTWFwIHRoZSB0ZW1wbGF0ZSdzIGNvbXBsZXRpb24gdHlwZSB0byBhIHdvcmtzcGFjZSBzdGF0ZVxuICAgIGNvbnN0IHdzVHlwZSA9IGNvbXBsZXRpb25UeXBlPy50b0xvd2VyQ2FzZSgpIGFzIFdvcmtzcGFjZVR5cGUgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3RhdGUgPSB3c1R5cGVcbiAgICAgID8gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSB3c1R5cGUpXG4gICAgICA6IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gXCJkaXNjaXBsaW5lXCIpO1xuXG4gICAgLy8gQXBwbHkgWFBcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUueHBNdWx0aXBsaWVyID4gMCkge1xuICAgICAgY29uc3QgeHBHYWluID0gTWF0aC5yb3VuZChcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbiAqIHN0YXRlLnhwTXVsdGlwbGllcixcbiAgICAgICk7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeVhQW3dvcmtzcGFjZS5jYXRlZ29yeV0gKz0geHBHYWluO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGJvc3MgZGFtYWdlICh1bmxlc3Mgc2tpcHBlZClcbiAgICBpZiAod3NUeXBlICE9PSBcInNraXBwZWRcIikge1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvbixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgYWN0aXZlIHdvcmtzcGFjZVxuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IG51bGw7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIERlZmF1bHQgTW9kZSAodGltZXIgKyBza2lsbHMgKyBmaW5pc2gpXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwcml2YXRlIHN0YXJ0VGltZXIoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lckludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICBjb25zdCB0aW1lckVsID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXdvcmtzcGFjZS10aW1lclwiKTtcbiAgICAgIGlmICh0aW1lckVsKSB0aW1lckVsLnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuZWxhcHNlZCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHN0b3BUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lckludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbCk7XG4gICAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZCBvbGVuLXdvcmtzcGFjZS1yb290XCIgfSk7XG5cbiAgICAvLyBUb3AgYmFyXG4gICAgY29uc3QgdG9wQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtdG9wYmFyXCIgfSk7XG5cbiAgICBjb25zdCBhY3RJbmZvID0gdG9wQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY3QtaW5mb1wiIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWVtb2ppXCIsIHRleHQ6IHdvcmtzcGFjZS5lbW9qaSB9KTtcbiAgICBhY3RJbmZvLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY3QtbmFtZVwiLCB0ZXh0OiB3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lIH0pO1xuXG4gICAgY29uc3QgdGltZXJFbCA9IHRvcEJhci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2UtdGltZXJcIixcbiAgICAgIHRleHQ6IFwiMDA6MDBcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbmlzaEJ0biA9IHRvcEJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXdvcmtzcGFjZS1maW5pc2gtYnRuXCIsXG4gICAgICB0ZXh0OiBcIkZJTklTSFwiLFxuICAgIH0pO1xuICAgIGZpbmlzaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93RmluaXNoTW9kYWwod29ya3NwYWNlKSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgbGluZVxuICAgIGNvbnN0IGFjY2VudENvbG9yID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbd29ya3NwYWNlLmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcbiAgICBjb25zdCBhY2NlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7YWNjZW50Q29sb3J9LCB0cmFuc3BhcmVudClgO1xuXG4gICAgLy8gTWFpbiBjb250ZW50IGFyZWFcbiAgICBjb25zdCBjb250ZW50ID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtY29udGVudFwiIH0pO1xuXG4gICAgLy8gU2tpbGxzIHNlY3Rpb25cbiAgICBjb25zdCBza2lsbHNTZWN0aW9uID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzLXNlY3Rpb25cIiB9KTtcbiAgICBza2lsbHNTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBcIldPUktTUEFDRSBTS0lMTFNcIiB9KTtcblxuICAgIGNvbnN0IHNraWxsc0NvbnRhaW5lciA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxsc1wiIH0pO1xuXG4gICAgaWYgKHdvcmtzcGFjZS5za2lsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBza2lsbHNDb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2Utbm8tc2tpbGxzXCIsXG4gICAgICAgIHRleHQ6IFwiTm8gc2tpbGxzIHRhZ2dlZCB5ZXRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHdvcmtzcGFjZS5za2lsbHMpIHtcbiAgICAgICAgY29uc3QgY2hpcCA9IHNraWxsc0NvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtY2hpcFwiIH0pO1xuICAgICAgICBjaGlwLnRleHRDb250ZW50ID0gc2tpbGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHNraWxscyBidXR0b25cbiAgICBjb25zdCBhZGRTa2lsbEJ0biA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXdvcmtzcGFjZS1hZGQtc2tpbGxcIixcbiAgICAgIHRleHQ6IFwiKyBBREQgU0tJTExcIixcbiAgICB9KTtcbiAgICBhZGRTa2lsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93U2tpbGxQaWNrZXIod29ya3NwYWNlKSk7XG5cbiAgICAvLyBGb2N1cyB6b25lIFx1MjAxNCBtb3RpdmF0aW9uYWwgYXJlYVxuICAgIGNvbnN0IGZvY3VzWm9uZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWZvY3VzXCIgfSk7XG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICAgIH0pO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG5cbiAgICAvLyBCb3R0b20gYmFyXG4gICAgY29uc3QgYm90dG9tQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtYm90dG9tYmFyXCIgfSk7XG4gICAgY29uc3QgY2F0TGFiZWwgPSB3b3Jrc3BhY2UuY2F0ZWdvcnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3Jrc3BhY2UuY2F0ZWdvcnkuc2xpY2UoMSk7XG4gICAgYm90dG9tQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1jYXRlZ29yeS1sYWJlbFwiLFxuICAgICAgdGV4dDogY2F0TGFiZWwsXG4gICAgfSk7XG4gICAgYm90dG9tQmFyLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGFjY2VudENvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93U2tpbGxQaWNrZXIod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICAvLyBQcm9tcHQgZm9yIHNraWxsIG5hbWUgdmlhIGEgc2ltcGxlIGlucHV0XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiQUREIFNLSUxMXCIgfSk7XG5cbiAgICBjb25zdCBpbnB1dFdyYXAgPSBzaGVldC5jcmVhdGVEaXYoeyBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMjBweCAwO1wiIH0gfSk7XG4gICAgY29uc3QgaW5wdXQgPSBpbnB1dFdyYXAuY3JlYXRlRWwoXCJpbnB1dFwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtaW5wdXRcIixcbiAgICAgIGF0dHI6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNraWxsIG5hbWUuLi5cIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2tpbGwgZm9sZGVyIGV4aXN0cywgbG9hZCBleGlzdGluZyBza2lsbHNcbiAgICBpZiAod29ya3NwYWNlLnNraWxsRm9sZGVyKSB7XG4gICAgICBjb25zdCBza2lsbHMgPSB0aGlzLmxvYWRTa2lsbHNGcm9tRm9sZGVyKHdvcmtzcGFjZS5za2lsbEZvbGRlcik7XG4gICAgICBpZiAoc2tpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzXCIsIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTZweDtcIiB9IH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHNraWxscykge1xuICAgICAgICAgIGNvbnN0IGNoaXAgPSBleGlzdGluZy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtY2hpcCBvbGVuLWNsaWNrYWJsZVwiIH0pO1xuICAgICAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBza2lsbDtcbiAgICAgICAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRTa2lsbChza2lsbCk7XG4gICAgICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICAgIHRleHQ6IFwiQUREXCIsXG4gICAgfSk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGFkZFNraWxsKHZhbCk7XG4gICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgICAgdGV4dDogXCJDQU5DRUxcIixcbiAgICB9KTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlU2hlZXQoKSk7XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVNoZWV0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRTa2lsbCA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghd29ya3NwYWNlLnNraWxscy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICB3b3Jrc3BhY2Uuc2tpbGxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IHdvcmtzcGFjZTtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKHdvcmtzcGFjZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlU2hlZXQgPSAoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFNraWxsc0Zyb21Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG4gICAgcmV0dXJuIGZpbGVzXG4gICAgICAuZmlsdGVyKChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGYpID0+IGYuYmFzZW5hbWUpXG4gICAgICAuc29ydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RmluaXNoTW9kYWwod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoKGVuZFRpbWUuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUuZ2V0VGltZSgpKSAvIDYwMDAwKTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICAgIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldFwiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiSE9XIERJRCBJVCBGRUVMP1wiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJvZHktaXRhbGljXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMTJweCAwIDIwcHg7XCIgfSxcbiAgICAgIHRleHQ6IGAke3dvcmtzcGFjZS5lbW9qaX0gJHt3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lfSBcdTAwQjcgJHtkdXJhdGlvbk1pbnV0ZXN9IG1pbnV0ZXNgLFxuICAgIH0pO1xuXG4gICAgLy8gQ29tcGxldGlvbiBzdGF0ZSBidXR0b25zXG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maWx0ZXIoKHMpID0+IHMuZW5hYmxlZCk7XG4gICAgY29uc3Qgc3RhdGVzR3JpZCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZXMtZ3JpZFwiIH0pO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGNvbnN0IGJ0biA9IHN0YXRlc0dyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlLWJ0blwiIH0pO1xuICAgICAgYnRuLnN0eWxlLmJvcmRlckNvbG9yID0gc3RhdGUuY29sb3I7XG5cbiAgICAgIGJ0bi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZS1pY29uXCIsIHRleHQ6IHN0YXRlLmljb24gfSk7XG4gICAgICBidG4uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGUtbmFtZVwiLCB0ZXh0OiBzdGF0ZS5uYW1lIH0pO1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQgPSB7XG4gICAgICAgICAgYWN0aXZpdHlJZDogd29ya3NwYWNlLmFjdGl2aXR5SWQsXG4gICAgICAgICAgYWN0aXZpdHlOYW1lOiB3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lLFxuICAgICAgICAgIGNhdGVnb3J5OiB3b3Jrc3BhY2UuY2F0ZWdvcnksXG4gICAgICAgICAgdHlwZTogc3RhdGUuaWQsXG4gICAgICAgICAgc3RhcnRUaW1lOiB3b3Jrc3BhY2Uuc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWU6IGVuZFRpbWUudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBkdXJhdGlvbk1pbnV0ZXMsXG4gICAgICAgICAgc2tpbGxzOiB3b3Jrc3BhY2Uuc2tpbGxzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZmluaXNoV29ya3NwYWNlKHJlc3VsdCwgd29ya3NwYWNlKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgICAvLyBEb24ndCBjbG9zZSBvbiBvdmVybGF5IHRhcCBcdTIwMTQgdXNlciBtdXN0IGNob29zZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VTaGVldCA9ICgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmaW5pc2hXb3Jrc3BhY2UocmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQsIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gMS4gQ3JlYXRlIHdvcmtzcGFjZSBtYXJrZG93biBmaWxlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXJcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgIGlmIChhY3Rpdml0eT8uZm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZVdvcmtzcGFjZUZpbGUocmVzdWx0LCBhY3Rpdml0eS5mb2xkZXIpO1xuICAgIH1cblxuICAgIC8vIDIuIFVwZGF0ZSB0aGUgYWN0aXZpdHkncyBkYWlseSBub3RlIGZyb250bWF0dGVyXG4gICAgYXdhaXQgdGhpcy5tYXJrQWN0aXZpdHlEb25lKHdvcmtzcGFjZSwgcmVzdWx0KTtcblxuICAgIC8vIDMuIEFwcGx5IFhQXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IHJlc3VsdC50eXBlKTtcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUueHBNdWx0aXBsaWVyID4gMCkge1xuICAgICAgY29uc3QgeHBHYWluID0gTWF0aC5yb3VuZCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uICogc3RhdGUueHBNdWx0aXBsaWVyKTtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbd29ya3NwYWNlLmNhdGVnb3J5XSArPSB4cEdhaW47XG4gICAgfVxuXG4gICAgLy8gNC4gQXBwbHkgYm9zcyBkYW1hZ2UgKHVubGVzcyBza2lwcGVkKVxuICAgIGlmIChyZXN1bHQudHlwZSAhPT0gXCJza2lwcGVkXCIpIHtcbiAgICAgIGNvbnN0IGFjdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgICAgaWYgKGFjdCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0LmRhbWFnZVBlckNvbXBsZXRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA1LiBDbGVhciBhY3RpdmUgd29ya3NwYWNlXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gbnVsbDtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblxuICAgIC8vIDYuIFNob3cgbm90aWNlXG4gICAgY29uc3Qgc3RhdGVMYWJlbCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gcmVzdWx0LnR5cGUpPy5uYW1lID8/IHJlc3VsdC50eXBlO1xuICAgIG5ldyBOb3RpY2UoYCR7d29ya3NwYWNlLmVtb2ppfSAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9IFx1MjAxNCAke3N0YXRlTGFiZWx9IFx1MDBCNyAke3Jlc3VsdC5kdXJhdGlvbk1pbnV0ZXN9bWApO1xuXG4gICAgLy8gNy4gU3dpdGNoIGJhY2sgdG8gZGFzaGJvYXJkXG4gICAgdGhpcy5wbHVnaW4uYWN0aXZhdGVEYXNoYm9hcmRWaWV3KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZVdvcmtzcGFjZUZpbGUocmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQsIGZvbGRlcjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IHJlc3VsdC5hY3Rpdml0eUlkKTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFjdGl2aXR5Py5wcm9wZXJ0eSA/PyByZXN1bHQuYWN0aXZpdHlOYW1lO1xuXG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKHJlc3VsdC5lbmRUaW1lKTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShyZXN1bHQuc3RhcnRUaW1lKTtcbiAgICBjb25zdCBkYXRlU3RyID0gZW5kVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAvLyBOYW1pbmc6IFwiV29ya3NwYWNlIFlZWVktTU0tREQgSEhNTVwiXG4gICAgY29uc3QgdGltZVN0ciA9IGAke1N0cmluZyhlbmRUaW1lLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKX0ke1N0cmluZyhlbmRUaW1lLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgV29ya3NwYWNlICR7ZGF0ZVN0cn0gJHt0aW1lU3RyfWA7XG4gICAgY29uc3QgZmlsZVBhdGggPSBgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9Lm1kYDtcblxuICAgIC8vIEJ1aWxkIHRpbWV6b25lLWF3YXJlIHRpbWVzdGFtcFxuICAgIGNvbnN0IHR6T2Zmc2V0ID0gLXN0YXJ0VGltZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGNvbnN0IHR6SG91cnMgPSBTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyh0ek9mZnNldCkgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0ek1pbnMgPSBTdHJpbmcoTWF0aC5hYnModHpPZmZzZXQpICUgNjApLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0elNpZ24gPSB0ek9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBzdGFydFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyB0elNpZ24gKyB0ekhvdXJzICsgXCI6XCIgKyB0ek1pbnM7XG5cbiAgICBjb25zdCBlbmRUaW1lc3RhbXAgPSBlbmRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgdHpTaWduICsgdHpIb3VycyArIFwiOlwiICsgdHpNaW5zO1xuXG4gICAgLy8gUGljayBhIHF1b3RlXG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuXG4gICAgLy8gQ2FwaXRhbGl6ZSBjb21wbGV0aW9uIHR5cGUgdG8gbWF0Y2ggZXhpc3RpbmcgZm9ybWF0IChEaXNjaXBsaW5lL0Zsb3cvU2tpcHBlZClcbiAgICBjb25zdCB0eXBlTmFtZSA9IHJlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSk7XG4gICAgY29uc3QgZHVyYXRpb25TdHIgPSBgJHtNYXRoLmZsb29yKHJlc3VsdC5kdXJhdGlvbk1pbnV0ZXMgLyA2MCl9aCAke3Jlc3VsdC5kdXJhdGlvbk1pbnV0ZXMgJSA2MH1tYDtcblxuICAgIC8vIEJ1aWxkIGZyb250bWF0dGVyXG4gICAgY29uc3QgZm1MaW5lcyA9IFtcbiAgICAgIFwiLS0tXCIsXG4gICAgICBcImVkaXRvci13aWR0aDogMTAwXCIsXG4gICAgICBgJHtwcm9wZXJ0eX06IHRydWVgLFxuICAgICAgYCR7cHJvcGVydHl9LVR5cGU6IFwiJHt0eXBlTmFtZX1cImAsXG4gICAgICBgVGltZXN0YW1wOiBcIiR7dGltZXN0YW1wfVwiYCxcbiAgICAgIGBlbmRUaW1lOiBcIiR7ZW5kVGltZXN0YW1wfVwiYCxcbiAgICAgIGBkdXJhdGlvbjogXCIke2R1cmF0aW9uU3RyfVwiYCxcbiAgICAgIGBjYXRlZ29yeTogXCIke3Jlc3VsdC5jYXRlZ29yeX1cImAsXG4gICAgICByZXN1bHQuc2tpbGxzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBgc2tpbGxzOiBbJHtyZXN1bHQuc2tpbGxzLm1hcCgocykgPT4gYFwiJHtzfVwiYCkuam9pbihcIiwgXCIpfV1gXG4gICAgICAgIDogXCJza2lsbHM6IFtdXCIsXG4gICAgICBcImNzc2NsYXNzZXM6XCIsXG4gICAgICBcIiAgLSBoaWRlLXByb3BlcnRpZXNcIixcbiAgICAgIFwiLS0tXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGJvZHkgPSBbXG4gICAgICBcIlwiLFxuICAgICAgYCMgJHthY3Rpdml0eT8uZW1vamkgPz8gXCJcIn0gJHtyZXN1bHQuYWN0aXZpdHlOYW1lfSBXb3Jrc3BhY2VgLFxuICAgICAgXCJcIixcbiAgICAgIGA+IFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgICAgIGA+IFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgICBcIlwiLFxuICAgICAgXCIjIyBOb3Rlc1wiLFxuICAgICAgXCJcIixcbiAgICAgIFwiXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbLi4uZm1MaW5lcywgLi4uYm9keV0uam9pbihcIlxcblwiKTtcblxuICAgIC8vIEVuc3VyZSBmb2xkZXIgZXhpc3RzXG4gICAgY29uc3QgYWJzdHJhY3RGb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyKTtcbiAgICBpZiAoIWFic3RyYWN0Rm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZHVwbGljYXRlIGZpbGVuYW1lc1xuICAgIGxldCBmaW5hbFBhdGggPSBmaWxlUGF0aDtcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aCk7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBsZXQgY291bnRlciA9IDI7XG4gICAgICB3aGlsZSAodGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0gKCR7Y291bnRlcn0pLm1kYCkpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfVxuICAgICAgZmluYWxQYXRoID0gYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaW5hbFBhdGgsIGNvbnRlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYXJrQWN0aXZpdHlEb25lKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLCByZXN1bHQ/OiBXb3Jrc3BhY2VSZXN1bHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBGaW5kIHRvZGF5J3Mgbm90ZSBpbiB0aGUgYWN0aXZpdHkgZm9sZGVyIGFuZCBzZXQgdGhlIHByb3BlcnR5IHRvIHRydWVcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybjtcblxuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgYSBmaWxlIG1hdGNoaW5nIHRvZGF5J3MgZGF0ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IHRvZGF5RmlsZSA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgKTtcblxuICAgIGlmICh0b2RheUZpbGUpIHtcbiAgICAgIC8vIFVwZGF0ZSBmcm9udG1hdHRlciBcdTIwMTQgc2V0IHByb3BlcnR5IGFuZCBjb21wbGV0aW9uIHR5cGVcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcih0b2RheUZpbGUsIChmcm9udG1hdHRlcikgPT4ge1xuICAgICAgICBmcm9udG1hdHRlclthY3Rpdml0eS5wcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSByZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpO1xuICAgICAgICAgIGZyb250bWF0dGVyW2Ake2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlYF0gPSB0eXBlTmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGFpbHkgbm90ZSB3aXRoIHRoZSBwcm9wZXJ0eSBzZXRcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICAgIGNvbnN0IHR5cGVMaW5lID0gcmVzdWx0XG4gICAgICAgID8gYFxcbiR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGU6IFwiJHtyZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpfVwiYFxuICAgICAgICA6IFwiXCI7XG4gICAgICBjb25zdCBjb250ZW50ID0gYC0tLVxcbiR7YWN0aXZpdHkucHJvcGVydHl9OiB0cnVlJHt0eXBlTGluZX1cXG4tLS1cXG5gO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBGaWxlIG1pZ2h0IGFscmVhZHkgZXhpc3Qgd2l0aCBhIGRpZmZlcmVudCBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lKHNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChzZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3QgcyA9IHNlY29uZHMgJSA2MDtcbiAgICBpZiAoaCA+IDApIHtcbiAgICAgIHJldHVybiBgJHtofToke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7U3RyaW5nKHMpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtTdHJpbmcocykucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH1cbn1cblxuLy8gVXRpbGl0eVxuZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFNldHRpbmdzIFRhYlxuLy8gQ29sbGFwc2libGUgc2VjdGlvbnMgZm9yIGFsbCBwbHVnaW4gY29uZmlndXJhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgVGV4dENvbXBvbmVudCwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2aXR5Q29uZmlnLCBDYXRlZ29yeSwgVGVtcGxlVGFzaywgR2VuZGVyLCBXZWlnaHRMb2dGcmVxdWVuY3kgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfQUNUSVZJVElFUywgREVGQVVMVF9ERVZfQ09ORklHIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgT2xlblNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcbiAgICBjb250YWluZXJFbC5hZGRDbGFzcyhcIm9sZW4tc2V0dGluZ3NcIik7XG5cbiAgICAvLyBIZWFkZXJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICB0ZXh0OiBcIk9sZW5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAxLjRlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWJvdHRvbTogNHB4OyBwYWRkaW5nOiA4cHggMDtcIiB9LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiTXl0aG9sb2dpY2FsIExpZmUtT3BlcmF0aW5nIFN5c3RlbVwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiAxNnB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBRdWljayBzdGF0dXMgYmFyXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNCYXIoY29udGFpbmVyRWwpO1xuXG4gICAgLy8gU2VjdGlvbnNcbiAgICB0aGlzLnJlbmRlclByb2ZpbGVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclBlcnNvbmFsU3RhdHNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFjdGl2aXRpZXNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckNhdGVnb3JpZXNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclRlbXBsZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQ2FsZW5kYXJTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclRoZW1lU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBZHZhbmNlZFNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyRGV2RGFzaGJvYXJkU2VjdGlvbihjb250YWluZXJFbCk7XG4gIH1cblxuICAvLyAtLS0gQ29sbGFwc2libGUgU2VjdGlvbiBIZWxwZXIgLS0tXG5cbiAgcHJpdmF0ZSBjcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGljb246IHN0cmluZyxcbiAgICBkZWZhdWx0T3BlbiA9IGZhbHNlXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWN0aW9uID0gcGFyZW50LmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVyID0gc2VjdGlvbi5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBkZWZhdWx0T3BlbiA/IFwiXFx1MjVCQ1wiIDogXCJcXHUyNUI2XCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMTBweDsgd2lkdGg6IDEycHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGhlYWRlci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogaWNvbiA/IGAke2ljb259ICAke3RpdGxlfWAgOiB0aXRsZSxcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjk1ZW07XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvZHkgPSBzZWN0aW9uLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7IHN0eWxlOiBgcGFkZGluZzogMCAxNnB4OyBkaXNwbGF5OiAke2RlZmF1bHRPcGVuID8gXCJibG9ja1wiIDogXCJub25lXCJ9O2AgfSxcbiAgICB9KTtcblxuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaXNPcGVuID0gYm9keS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcbiAgICAgIGJvZHkuc3R5bGUuZGlzcGxheSA9IGlzT3BlbiA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgYm9keS5zdHlsZS5wYWRkaW5nID0gaXNPcGVuID8gXCIwIDE2cHhcIiA6IFwiMTJweCAxNnB4XCI7XG4gICAgICBhcnJvdy50ZXh0Q29udGVudCA9IGlzT3BlbiA/IFwiXFx1MjVCNlwiIDogXCJcXHUyNUJDXCI7XG4gICAgfSk7XG5cbiAgICBpZiAoZGVmYXVsdE9wZW4pIGJvZHkuc3R5bGUucGFkZGluZyA9IFwiMTJweCAxNnB4XCI7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICAvLyAtLS0gU3RhdHVzIEJhciAtLS1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0Jhcihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgaHBQZXJjZW50ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQID4gMFxuICAgICAgPyBNYXRoLnJvdW5kKCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC8gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQKSAqIDEwMClcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IGJhciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDsgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGBUaWVyICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VycmVudFRpZXJ9LzEzYCB9KTtcbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGBIUCAke3RoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFB9LyR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQfSAoJHtocFBlcmNlbnR9JSlgLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5pblRhcnRhcnVzXG4gICAgICA/IFwiVEFSVEFSVVNcIlxuICAgICAgOiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIlxuICAgICAgICA/IFwiUEFVU0VEXCJcbiAgICAgICAgOiBcIkFDVElWRVwiO1xuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogc3RhdGUsXG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuaW5UYXJ0YXJ1cyA/IFwidmFyKC0tdGV4dC1lcnJvcilcIiA6IFwidmFyKC0tdGV4dC1ub3JtYWwpXCJ9O2AsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5taWdyYXRlZCA/IFwiTWlncmF0ZWRcIiA6IFwiTm90IG1pZ3JhdGVkXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc3R5bGU6IGl0YWxpYztcIiB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIFByb2ZpbGUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJQcm9maWxlU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJQcm9maWxlXCIsIFwiXFx1ezFGNDY0fVwiKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIk5hbWVcIilcbiAgICAgIC5zZXREZXNjKFwiWW91ciBuYW1lIGZvciB0aGUgZGFzaGJvYXJkIGdyZWV0aW5nXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VyTmFtZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VyTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJNeSBXaHlcIilcbiAgICAgIC5zZXREZXNjKFwiWW91ciBjb3JlIG1vdGl2YXRpb24gXHUyMDE0IHNob3duIHBlcmlvZGljYWxseSBvbiB0aGUgZGFzaGJvYXJkXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKGFyZWEpID0+XG4gICAgICAgIGFyZWFcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubXlXaHkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubXlXaHkgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSGVybyBiYWNrZ3JvdW5kIGltYWdlXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IHBhdGggdG8gdGhlIGhlcm8gYmFja2dyb3VuZCBpbWFnZSAoZS5nLiwgaW1hZ2VzL2hlcm8uanBnKVwiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJwYXRoL3RvL2ltYWdlLmpwZ1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIb21lcGFnZVwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmaWxlIHRvIG9wZW4gd2hlbiBhY3Rpdml0aWVzIGFyZSBzZXQgdG8gJ09wZW4gaG9tZXBhZ2UnIGFmdGVyIGNvbXBsZXRpb24gKGUuZy4gSG9tZS5tZClcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiZS5nLiBIb21lLm1kXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmhvbWVwYWdlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmhvbWVwYWdlID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBQZXJzb25hbCBTdGF0cyAtLS1cblxuICBwcml2YXRlIHJlbmRlclBlcnNvbmFsU3RhdHNTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlBlcnNvbmFsIFN0YXRzXCIsIFwiXFx1ezFGNENBfVwiKTtcbiAgICBjb25zdCBzdGF0cyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHM7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJHZW5kZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVXNlZCB0byBzaG93IHRoZSBjb3JyZWN0IG11c2NsZSBmaWd1cmUgb24gdGhlIGhlYXRtYXBcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgbWFsZTogXCJNYWxlXCIsIGZlbWFsZTogXCJGZW1hbGVcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShzdGF0cy5nZW5kZXIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmdlbmRlciA9IHYgYXMgR2VuZGVyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIZWlnaHQgKGNtKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoc3RhdHMuaGVpZ2h0ID8gU3RyaW5nKHN0YXRzLmhlaWdodCkgOiBcIlwiKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImUuZy4gMTc1XCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuaGVpZ2h0ID0gbjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJCaXJ0aGRhdGVcIilcbiAgICAgIC5zZXREZXNjKFwiVXNlZCB0byBjYWxjdWxhdGUgeW91ciBhZ2UgZm9yIHRoZSBzdHJlbmd0aCBjYWxjdWxhdG9yXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShzdGF0cy5iaXJ0aGRhdGUpXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiWVlZWS1NTS1ERFwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgaWYgKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHYpIHx8IHYgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5iaXJ0aGRhdGUgPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIEFnZSBkaXNwbGF5XG4gICAgaWYgKHN0YXRzLmJpcnRoZGF0ZSkge1xuICAgICAgY29uc3QgYWdlID0gdGhpcy5jYWxjdWxhdGVBZ2Uoc3RhdHMuYmlydGhkYXRlKTtcbiAgICAgIGJvZHkuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICB0ZXh0OiBgQWdlOiAke2FnZX0geWVhcnNgLFxuICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDEycHg7IHBhZGRpbmctbGVmdDogNHB4O1wiIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBXZWlnaHQgc2VjdGlvblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkN1cnJlbnQgd2VpZ2h0IChrZylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKHN0YXRzLmN1cnJlbnRXZWlnaHQgPyBTdHJpbmcoc3RhdHMuY3VycmVudFdlaWdodCkgOiBcIlwiKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImUuZy4gNjFcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmN1cnJlbnRXZWlnaHQgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIldlaWdodCBsb2dnaW5nIGZyZXF1ZW5jeVwiKVxuICAgICAgLnNldERlc2MoXCJIb3cgb2Z0ZW4geW91IHdhbnQgdG8gYmUgcmVtaW5kZWQgdG8gbG9nIHlvdXIgd2VpZ2h0XCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7XG4gICAgICAgICAgXCJ0d2ljZS1hLXdlZWtcIjogXCJUd2ljZSBhIHdlZWtcIixcbiAgICAgICAgICBcImV2ZXJ5LXdlZWtcIjogXCJFdmVyeSB3ZWVrXCIsXG4gICAgICAgICAgXCJldmVyeS0yLXdlZWtzXCI6IFwiRXZlcnkgMiB3ZWVrc1wiLFxuICAgICAgICAgIFwiZXZlcnktMy1kYXlzXCI6IFwiRXZlcnkgMyBkYXlzXCIsXG4gICAgICAgICAgXCJldmVyeS01LWRheXNcIjogXCJFdmVyeSA1IGRheXNcIixcbiAgICAgICAgICBcImN1c3RvbVwiOiBcIkN1c3RvbSBpbnRlcnZhbFwiLFxuICAgICAgICB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShzdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3kpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZ0ZyZXF1ZW5jeSA9IHYgYXMgV2VpZ2h0TG9nRnJlcXVlbmN5O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGlmIChzdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3kgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKFwiQ3VzdG9tIGludGVydmFsIChkYXlzKVwiKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhzdGF0cy53ZWlnaHRMb2dDdXN0b21EYXlzKSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZ0N1c3RvbURheXMgPSBuO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIExvZyB3ZWlnaHQgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTG9nIGN1cnJlbnQgd2VpZ2h0XCIpXG4gICAgICAuc2V0RGVzYyhcIlNhdmUgdG9kYXkncyB3ZWlnaHQgdG8geW91ciBwcm9ncmVzcyBoaXN0b3J5XCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiTG9nIFdlaWdodFwiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB3ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5jdXJyZW50V2VpZ2h0O1xuICAgICAgICAgIGlmICghdyB8fCB3IDw9IDApIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJFbnRlciB5b3VyIGN1cnJlbnQgd2VpZ2h0IGZpcnN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIGZvciB0b2RheVxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2cuZmluZCgoZSkgPT4gZS5kYXRlID09PSB0b2RheSk7XG4gICAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBleGlzdGluZy53ZWlnaHQgPSB3O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5wdXNoKHsgZGF0ZTogdG9kYXksIHdlaWdodDogdyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5sYXN0V2VpZ2h0TG9nRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoYFdlaWdodCBsb2dnZWQ6ICR7d30ga2dgKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBXZWlnaHQgaGlzdG9yeSAobGFzdCAxMCBlbnRyaWVzKVxuICAgIGNvbnN0IGxvZyA9IHN0YXRzLndlaWdodExvZztcbiAgICBpZiAobG9nLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGhpc3RvcnlFbCA9IGJvZHkuY3JlYXRlRGl2KHtcbiAgICAgICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW46IDhweCAwOyBwYWRkaW5nOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1wiIH0sXG4gICAgICB9KTtcbiAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIHRleHQ6IFwiV2VpZ2h0IEhpc3RvcnlcIixcbiAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOWVtOyBtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzb3J0ZWQgPSBbLi4ubG9nXS5zb3J0KChhLCBiKSA9PiBiLmRhdGUubG9jYWxlQ29tcGFyZShhLmRhdGUpKTtcbiAgICAgIGNvbnN0IHJlY2VudCA9IHNvcnRlZC5zbGljZSgwLCAxMCk7XG5cbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmVjZW50KSB7XG4gICAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogYCR7ZW50cnkuZGF0ZX06ICR7ZW50cnkud2VpZ2h0fSBrZ2AsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuOGVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IHBhZGRpbmc6IDJweCAwO1wiIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc29ydGVkLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogYC4uLiBhbmQgJHtzb3J0ZWQubGVuZ3RoIC0gMTB9IG1vcmUgZW50cmllc2AsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuNzVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXN0eWxlOiBpdGFsaWM7XCIgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBZ2UoYmlydGhkYXRlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGJpcnRoID0gbmV3IERhdGUoYmlydGhkYXRlKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBhZ2UgPSBub3cuZ2V0RnVsbFllYXIoKSAtIGJpcnRoLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGhEaWZmID0gbm93LmdldE1vbnRoKCkgLSBiaXJ0aC5nZXRNb250aCgpO1xuICAgIGlmIChtb250aERpZmYgPCAwIHx8IChtb250aERpZmYgPT09IDAgJiYgbm93LmdldERhdGUoKSA8IGJpcnRoLmdldERhdGUoKSkpIHtcbiAgICAgIGFnZS0tO1xuICAgIH1cbiAgICByZXR1cm4gYWdlO1xuICB9XG5cbiAgLy8gLS0tIEFjdGl2aXRpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJBY3Rpdml0aWVzXCIsIFwiXFx1ezFGM0FGfVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2ldO1xuICAgICAgdGhpcy5yZW5kZXJBY3Rpdml0eUl0ZW0oYm9keSwgYWN0aXZpdHksIGkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBidXR0b25cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIEFjdGl2aXR5XCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0FjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGlkOiBgY3VzdG9tLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgbmFtZTogXCJOZXcgQWN0aXZpdHlcIixcbiAgICAgICAgICAgIGVtb2ppOiBcIlxcdTJCNTBcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIlwiLFxuICAgICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSxcbiAgICAgICAgICAgIHdlZWtseVRhcmdldDogMyxcbiAgICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgICAgaGFzV29ya3NwYWNlOiBmYWxzZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiA1LFxuICAgICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICAgIHByZWZlcnJlZFRpbWU6IFwiYW55dGltZVwiLFxuICAgICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5wdXNoKG5ld0FjdGl2aXR5KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckFjdGl2aXR5SXRlbShjb250YWluZXI6IEhUTUxFbGVtZW50LCBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBIZWFkZXIgcm93IHdpdGggdG9nZ2xlXG4gICAgbmV3IFNldHRpbmcod3JhcHBlcilcbiAgICAgIC5zZXROYW1lKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9YClcbiAgICAgIC5zZXREZXNjKGAke2FjdGl2aXR5LmNhdGVnb3J5fSBcdTAwQjcgJHthY3Rpdml0eS5mb2xkZXIgfHwgXCJubyBmb2xkZXIgc2V0XCJ9YClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKGFjdGl2aXR5LmVuYWJsZWQpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBhbmRhYmxlIGRldGFpbHNcbiAgICBjb25zdCBkZXRhaWxzVG9nZ2xlID0gd3JhcHBlci5jcmVhdGVFbChcImRldGFpbHNcIik7XG4gICAgZGV0YWlsc1RvZ2dsZS5jcmVhdGVFbChcInN1bW1hcnlcIiwge1xuICAgICAgdGV4dDogXCJDb25maWd1cmVcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzVG9nZ2xlLmNyZWF0ZURpdigpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkubmFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmFtZSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRW1vamlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbW9qaSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQ2F0ZWdvcnlcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgYm9keTogXCJCb2R5XCIsIG1pbmQ6IFwiTWluZFwiLCBzcGlyaXQ6IFwiU3Bpcml0XCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuY2F0ZWdvcnkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jYXRlZ29yeSA9IHYgYXMgQ2F0ZWdvcnk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkFjdGl2aXR5IGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgd2l0aCBZWVlZLU1NLUREIG5vdGVzIGFuZCB3b3Jrc3BhY2UgbG9nc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkuZm9sZGVyKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5mb2xkZXIgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkZyb250bWF0dGVyIHByb3BlcnR5XCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5wcm9wZXJ0eSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJvcGVydHkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldlZWtseSB0YXJnZXRcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDcsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LndlZWtseVRhcmdldClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud2Vla2x5VGFyZ2V0ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJpb3JpdHkgKDEtMTApXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxMCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJpb3JpdHkpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByaW9yaXR5ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJlZmVycmVkIHRpbWVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBtb3JuaW5nOiBcIk1vcm5pbmdcIiwgYWZ0ZXJub29uOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIGV2ZW5pbmc6IFwiRXZlbmluZ1wiLCBhbnl0aW1lOiBcIkFueXRpbWVcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJlZmVycmVkVGltZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByZWZlcnJlZFRpbWUgPSB2IGFzIGFueTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmVnbGVjdCB0aHJlc2hvbGQgKGRheXMpXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxNCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkubmVnbGVjdFRocmVzaG9sZClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmVnbGVjdFRocmVzaG9sZCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVzdGltYXRlZCBkdXJhdGlvbiAobWludXRlcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVzdGltYXRlZER1cmF0aW9uID0gbjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJIYXMgd29ya3NwYWNlXCIpXG4gICAgICAuc2V0RGVzYyhcIk9wZW5zIHdvcmtzcGFjZSB2aWV3IHdpdGggdGltZXIgd2hlbiBzdGFydGVkLCBpbnN0ZWFkIG9mIG1hcmtpbmcgZG9uZSBpbW1lZGlhdGVseVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUoYWN0aXZpdHkuaGFzV29ya3NwYWNlKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmhhc1dvcmtzcGFjZSA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIHRlbXBsYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIkJ1aWx0LWluIHRlbXBsYXRlIElEIChlLmcuICd3b3Jrb3V0Jykgb3IgdmF1bHQgcGF0aCB0byAuanMgZmlsZS4gTGVhdmUgZW1wdHkgZm9yIGRlZmF1bHQgd29ya3NwYWNlLlwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIHdvcmtvdXRcIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLndvcmtzcGFjZVRlbXBsYXRlID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlNraWxsIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBza2lsbCB0cmVlIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gSG9tZS9TdGFydHMvRHJhd2luZy9Ta2lsbCB0cmVlXCIpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnNraWxsRm9sZGVyID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5za2lsbEZvbGRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQWZ0ZXIgY29tcGxldGlvblwiKVxuICAgICAgLnNldERlc2MoXCJXaGVyZSB0byBnbyBhZnRlciBmaW5pc2hpbmcgdGhpcyBhY3Rpdml0eVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoe1xuICAgICAgICAgIGRhc2hib2FyZDogXCJSZXR1cm4gdG8gT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgICAgICBzdGF5OiBcIlN0YXkgb24gbm90ZVwiLFxuICAgICAgICAgIGhvbWVwYWdlOiBcIk9wZW4gaG9tZXBhZ2VcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAhYWN0aXZpdHkuY29tcGxldGlvblJldHVyblRvIHx8IGFjdGl2aXR5LmNvbXBsZXRpb25SZXR1cm5UbyA9PT0gXCJkYXNoYm9hcmRcIlxuICAgICAgICAgICAgICA/IFwiZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgOiBhY3Rpdml0eS5jb21wbGV0aW9uUmV0dXJuVG8gPT09IFwic3RheVwiXG4gICAgICAgICAgICAgICAgPyBcInN0YXlcIlxuICAgICAgICAgICAgICAgIDogXCJob21lcGFnZVwiXG4gICAgICAgICAgKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY29tcGxldGlvblJldHVyblRvID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQmxvY2tzIChjb21tYS1zZXBhcmF0ZWQgYWN0aXZpdHkgSURzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoKGFjdGl2aXR5LmJsb2NrcyA/PyBbXSkuam9pbihcIiwgXCIpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmJsb2NrcyA9IHYuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBbHRlcm5hdGVzIHdpdGggKGFjdGl2aXR5IElEKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGggPz8gXCJcIikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5hbHRlcm5hdGVzV2l0aCA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJDaGFpbiBhZnRlciAoYWN0aXZpdHkgSUQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShhY3Rpdml0eS5jaGFpbkFmdGVyID8/IFwiXCIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2hhaW5BZnRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBEZWxldGUgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoXCJEZWxldGUgQWN0aXZpdHlcIilcbiAgICAgICAgICAuc2V0V2FybmluZygpXG4gICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBDYXRlZ29yaWVzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQ2F0ZWdvcmllc1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2F0ZWdvcmllc1wiLCBcIlxcdXsxRjNBOH1cIik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzOiB7IGtleTogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICAgIHsga2V5OiBcIm1pbmRcIiwgbGFiZWw6IFwiTWluZFwiIH0sXG4gICAgICB7IGtleTogXCJzcGlyaXRcIiwgbGFiZWw6IFwiU3Bpcml0XCIgfSxcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7Y2F0LmxhYmVsfSBjb2xvcmApXG4gICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+XG4gICAgICAgICAgY3BcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJUaXRsZSBvdmVycmlkZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0aGUgZHluYW1pYyB0aXRsZSAobGVhdmUgZW1wdHkgZm9yIGF1dG8pXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGl0bGVPdmVycmlkZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRlbXBsZSBVcGtlZXBcIiwgXCJcXHV7MUYzREJ9XFx1RkUwRlwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXTtcblxuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7dGFzay5lbW9qaX0gJHt0YXNrLm5hbWV9YClcbiAgICAgICAgLnNldERlc2MoYEV2ZXJ5ICR7dGFzay5pbnRlcnZhbERheXN9IGRheShzKWApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJOYW1lXCIpLnNldFZhbHVlKHRhc2submFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLm5hbWUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiRGF5c1wiKS5zZXRWYWx1ZShTdHJpbmcodGFzay5pbnRlcnZhbERheXMpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5pbnRlcnZhbERheXMgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJFbW9qaVwiKS5zZXRWYWx1ZSh0YXNrLmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0uZW1vamkgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgVGVtcGxlIFRhc2tcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdGVtcGxlLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgIG5hbWU6IFwiTmV3IFRhc2tcIixcbiAgICAgICAgICBsYXN0Q29tcGxldGVkOiBudWxsLFxuICAgICAgICAgIGludGVydmFsRGF5czogNyxcbiAgICAgICAgICBlbW9qaTogXCJcXHUyNzI4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJDYWxlbmRhclNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2FsZW5kYXIgSW50ZWdyYXRpb25cIiwgXCJcXHV7MUY0QzV9XCIpO1xuXG4gICAgYm9keS5jcmVhdGVFbChcInBcIiwge1xuICAgICAgdGV4dDogXCJNZXJnZSBleHRlcm5hbCB0YXNrcyBpbnRvIHlvdXIgRGF5IE1hcCB0aW1lbGluZS5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXNcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJEYWlseSBOb3RlcyBpbnRlZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJQYXJzZSB0YXNrcyBmcm9tIHlvdXIgZGFpbHkgbm90ZXMgKC0gWyBdIFRhc2sgQHRpbWUgfjMwbSlcIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRGFpbHkgTm90ZXMgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIFlZWVktTU0tREQubWQgbm90ZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiRGFpbHkgTm90ZXNcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBPcHRpb24gQjogVGFza3MgUGx1Z2luXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiVGFza3MgUGx1Z2luIGludGVncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlYWQgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgZnJvbSB0aGUgVGFza3MgcGx1Z2luXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbiA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gT3B0aW9uIEM6IFF1aWNrIFRhc2tzXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVpY2sgVGFza3NcIilcbiAgICAgIC5zZXREZXNjKFwiT2xlbidzIGJ1aWx0LWluIHRhc2sgc3lzdGVtXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MgPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIFF1aWNrIFRhc2tzIGxpc3RcbiAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICBjb25zdCB0b2RheVRhc2tzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maWx0ZXIoXG4gICAgICAgIChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXlcbiAgICAgICk7XG5cbiAgICAgIGlmICh0b2RheVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gYm9keS5jcmVhdGVEaXYoe1xuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiA4cHggMDsgcGFkZGluZzogOHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDZweDtcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0RWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgIHRleHQ6IFwiVG9kYXkncyBRdWljayBUYXNrc1wiLFxuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjllbTsgbWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrc1tpXTtcbiAgICAgICAgICBpZiAocXQuZGF0ZSAhPT0gdG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbmV3IFNldHRpbmcobGlzdEVsKVxuICAgICAgICAgICAgLnNldE5hbWUoYCR7cXQuZG9uZSA/IFwiXFx1MjcxM1wiIDogXCJcXHUyNUNCXCJ9ICR7cXQudGl0bGV9YClcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICBbcXQudGltZSwgcXQuZHVyYXRpb24gPyBgJHtxdC5kdXJhdGlvbn1tYCA6IFwiXCJdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFx1MDBCNyBcIikgfHwgXCJObyB0aW1lIHNldFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiRGVsZXRlXCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgUXVpY2sgVGFza1wiKS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCk7XG4gICAgICAgICAgLy8gQ2xvc2Ugc2V0dGluZ3MgXHUyMDE0IHRoZSBkaWFsb2cgYXBwZWFycyBvbiB0b3BcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRoZW1lIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyVGhlbWVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRoZW1lXCIsIFwiXFx1ezFGM0E4fVwiKTtcblxuICAgIGNvbnN0IHRoZW1lRmllbGRzOiB7IGtleTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBkZWZhdWx0VmFsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYmdQcmltYXJ5XCIsIGxhYmVsOiBcIkJhY2tncm91bmRcIiwgZGVmYXVsdFZhbDogXCIjMGMwYTA5XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRQcmltYXJ5XCIsIGxhYmVsOiBcIlRleHRcIiwgZGVmYXVsdFZhbDogXCIjZjVmMGU4XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRNdXRlZFwiLCBsYWJlbDogXCJNdXRlZCB0ZXh0XCIsIGRlZmF1bHRWYWw6IFwiIzkyOGQ4NVwiIH0sXG4gICAgICB7IGtleTogXCJhY2NlbnRHb2xkXCIsIGxhYmVsOiBcIkFjY2VudCAoZ29sZClcIiwgZGVmYXVsdFZhbDogXCIjYzlhODRjXCIgfSxcbiAgICAgIHsga2V5OiBcImRhbmdlclwiLCBsYWJlbDogXCJEYW5nZXJcIiwgZGVmYXVsdFZhbDogXCIjOGIyZDM1XCIgfSxcbiAgICAgIHsga2V5OiBcInN1Y2Nlc3NcIiwgbGFiZWw6IFwiU3VjY2Vzc1wiLCBkZWZhdWx0VmFsOiBcIiNkNDk0MGFcIiB9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoZW1lRmllbGRzKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShmaWVsZC5sYWJlbClcbiAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT5cbiAgICAgICAgICBjcFxuICAgICAgICAgICAgLnNldFZhbHVlKFxuICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgYXMgYW55KT8uW2ZpZWxkLmtleV0gPz8gZmllbGQuZGVmYXVsdFZhbFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyBhcyBhbnkpW2ZpZWxkLmtleV0gPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlJlc2V0IHRvIEVseXNpYW4gRGFya1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgPSB7fTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICBuZXcgTm90aWNlKFwiVGhlbWUgcmVzZXQgdG8gRWx5c2lhbiBEYXJrIGRlZmF1bHRzXCIpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIEFkdmFuY2VkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkFkdmFuY2VkXCIsIFwiXFx1MjY5OVxcdUZFMEZcIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJTaW11bGF0ZWQgZGF0ZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0b2RheSdzIGRhdGUgZm9yIHRlc3RpbmcgKFlZWVktTU0tREQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIllZWVktTU0tRERcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA9IHYudHJpbSgpIHx8IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlN5c3RlbSBzdGF0ZVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkXG4gICAgICAgICAgLmFkZE9wdGlvbnMoeyBhY3RpdmU6IFwiQWN0aXZlXCIsIHBhdXNlZDogXCJQYXVzZWRcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdiBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIjtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gXCJwYXVzZWRcIiAmJiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT09IFwiYWN0aXZlXCIgJiYgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF1c2VkTXMgPSBEYXRlLm5vdygpIC0gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50b3RhbFBhdXNlZFRpbWUgKz0gcGF1c2VkTXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVvdGUgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIHF1b3RlIGZpbGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIlF1b3Rlcy9TdG9pY1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGggPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJSZS1ydW4gbWlncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlLWltcG9ydCBkYXRhIGZyb20gdGhlIE15dGhvbG9naWNhbCBIYWJpdCBUcmFja2VyIHBsdWdpblwiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIk1pZ3JhdGVcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1pZ3JhdGVkID0gZmFsc2U7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgLy8gUmVsb2FkIHRoZSBwbHVnaW4gdG8gdHJpZ2dlciBtaWdyYXRpb25cbiAgICAgICAgICBhd2FpdCAodGhpcy5wbHVnaW4gYXMgYW55KS5vbmxvYWQoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICBuZXcgTm90aWNlKFwiTWlncmF0aW9uIGNvbXBsZXRlXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBEZXZlbG9wZXIgRGFzaGJvYXJkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyRGV2RGFzaGJvYXJkU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJEZXZlbG9wZXIgRGFzaGJvYXJkXCIsIFwiXFx1ezFGNkUwfVxcdUZFMEZcIik7XG5cbiAgICBib2R5LmNyZWF0ZUVsKFwicFwiLCB7XG4gICAgICB0ZXh0OiBcIkVkaXQgdGhlIHJhdyBkZXZDb25maWcgSlNPTi4gQ2hhbmdlcyBhcmUgYXBwbGllZCBvbiBzYXZlLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHRhcmVhID0gYm9keS5jcmVhdGVFbChcInRleHRhcmVhXCIsIHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMzAwcHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpOyBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLCBudWxsLCAyKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiU2F2ZSBkZXZDb25maWdcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodGV4dGFyZWEudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIERFRkFVTFRfREVWX0NPTkZJRyxcbiAgICAgICAgICAgICAgcGFyc2VkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiZGV2Q29uZmlnIHNhdmVkIGFuZCBhcHBsaWVkXCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gZGVmYXVsdHNcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0geyAuLi5ERUZBVUxUX0RFVl9DT05GSUcgfTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZywgbnVsbCwgMik7XG4gICAgICAgICAgbmV3IE5vdGljZShcImRldkNvbmZpZyByZXNldCB0byBkZWZhdWx0c1wiKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBvcnQvSW1wb3J0XG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRXhwb3J0IGFsbCBzZXR0aW5nc1wiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkNvcHkgdG8gY2xpcGJvYXJkXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncywgbnVsbCwgMik7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGpzb24pO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlNldHRpbmdzIGNvcGllZCB0byBjbGlwYm9hcmRcIik7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgbW9iaWxlIFx1MjAxNCBzaG93IGluIGEgdGV4dGFyZWEgZm9yIG1hbnVhbCBjb3B5XG4gICAgICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIHRhLnZhbHVlID0ganNvbjtcbiAgICAgICAgICAgIHRhLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo1MCU7ei1pbmRleDo5OTk5O2ZvbnQtc2l6ZToxMXB4O1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YSk7XG4gICAgICAgICAgICB0YS5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRhLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJUYXAgdGhlIHRleHQgYXJlYSBhbmQgY29weSBtYW51YWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSW1wb3J0IHNldHRpbmdzXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKGFyZWEpID0+IHtcbiAgICAgICAgYXJlYS5zZXRQbGFjZWhvbGRlcihcIlBhc3RlIEpTT04gaGVyZS4uLlwiKTtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjgwcHhcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUuZm9udFNpemUgPSBcIjExcHhcIjtcblxuICAgICAgICAvLyBTdG9yZSByZWZlcmVuY2UgZm9yIHRoZSBpbXBvcnQgYnV0dG9uXG4gICAgICAgIChib2R5IGFzIGFueSkuX2ltcG9ydEFyZWEgPSBhcmVhO1xuICAgICAgfSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJJbXBvcnRcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcmVhID0gKGJvZHkgYXMgYW55KS5faW1wb3J0QXJlYTtcbiAgICAgICAgICAgIGlmICghYXJlYSkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShhcmVhLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFyc2VkKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiU2V0dGluZ3MgaW1wb3J0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGF0ZSBFbmdpbmVcbi8vIExvYWRzIC5qcyB0ZW1wbGF0ZSBmaWxlcyBmcm9tIHZhdWx0LCBjcmVhdGVzIGEgc2FuZGJveGVkXG4vLyBleGVjdXRpb24gY29udGV4dCB3aXRoIGRhdGEtYmluZGluZyB0byBub3RlIGZyb250bWF0dGVyLFxuLy8gYW5kIHJlbmRlcnMgVUkgaW50byBhIGNvbnRhaW5lciBlbGVtZW50LlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHsgQlVJTFRJTl9URU1QTEFURVMgfSBmcm9tIFwiLi9idWlsdGluc1wiO1xuXG4vKipcbiAqIFRoZSBjb250ZXh0IG9iamVjdCBwYXNzZWQgdG8gZXZlcnkgdGVtcGxhdGUgYXQgcnVudGltZS5cbiAqIFRlbXBsYXRlcyByZWNlaXZlIHRoaXMgYXMgYGN0eGAgYW5kIHVzZSBpdCB0byByZWFkL3dyaXRlXG4gKiBmcm9udG1hdHRlciBhbmQgYnVpbGQgdGhlaXIgVUkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVDb250ZXh0IHtcbiAgLyoqIE9ic2lkaWFuIEFwcCBpbnN0YW5jZSAqL1xuICBhcHA6IEFwcDtcbiAgLyoqIE9sZW4gcGx1Z2luIHJlZmVyZW5jZSAqL1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG4gIC8qKiBUaGUgZGF0YSBub3RlIGN1cnJlbnRseSBiZWluZyB2aWV3ZWQgKi9cbiAgZmlsZTogVEZpbGU7XG4gIC8qKiBET00gY29udGFpbmVyIHRvIHJlbmRlciBpbnRvICovXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gLS0tIERhdGEgQmluZGluZyAtLS1cblxuICAvKiogU25hcHNob3Qgb2YgdGhlIG5vdGUncyBjdXJyZW50IGZyb250bWF0dGVyIChyZWFkLW9ubHkgb2JqZWN0KSAqL1xuICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIC8qKiBHZXQgYSBzaW5nbGUgZnJvbnRtYXR0ZXIgdmFsdWUsIG9yIGFsbCBmcm9udG1hdHRlciBpZiBubyBrZXkgKi9cbiAgZ2V0RGF0YShrZXk/OiBzdHJpbmcpOiB1bmtub3duO1xuICAvKiogV3JpdGUgYSBzaW5nbGUga2V5IGJhY2sgdG8gdGhlIG5vdGUncyBmcm9udG1hdHRlciAqL1xuICBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD47XG4gIC8qKiBCYXRjaC13cml0ZSBtdWx0aXBsZSBrZXlzIHRvIHRoZSBub3RlJ3MgZnJvbnRtYXR0ZXIgKi9cbiAgc2V0TXVsdGlwbGVEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx2b2lkPjtcblxuICAvLyAtLS0gVmF1bHQgSGVscGVycyAtLS1cblxuICAvKiogUmVhZCByYXcgdGV4dCBvZiBhbnkgdmF1bHQgZmlsZSBieSBwYXRoICovXG4gIHJlYWRGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XG4gIC8qKiBHZXQgYWxsIG1hcmtkb3duIGZpbGVzIGluc2lkZSBhIGZvbGRlciAqL1xuICBnZXRGaWxlc0luRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IFRGaWxlW107XG4gIC8qKiBHZXQgZnJvbnRtYXR0ZXIgb2YgYW55IGZpbGUgYnkgcGF0aCAqL1xuICBnZXRGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuXG4gIC8vIC0tLSBVdGlsaXRpZXMgLS0tXG5cbiAgLyoqIE9ic2lkaWFuIE5vdGljZSBmb3IgdG9hc3RzICovXG4gIG5vdGljZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkO1xuICAvKiogbW9tZW50LmpzIChwcm92aWRlZCBieSBPYnNpZGlhbiBnbG9iYWxseSkgKi9cbiAgbW9tZW50OiB0eXBlb2Ygd2luZG93Lm1vbWVudDtcbiAgLyoqIENyZWF0ZSBhbiBIVE1MIGVsZW1lbnQgKHNob3J0aGFuZCkgKi9cbiAgY3JlYXRlRWw8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgdGFnOiBLLFxuICAgIGF0dHJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdO1xufVxuXG4vKipcbiAqIENvcmUgZW5naW5lIHRoYXQgbWFuYWdlcyB0ZW1wbGF0ZSBsb29rdXAsIGxvYWRpbmcsIGFuZCBleGVjdXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUVuZ2luZSB7XG4gIHByaXZhdGUgYXBwOiBBcHA7XG4gIHByaXZhdGUgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICAvKiogQ2FjaGUgb2YgbG9hZGVkIHRlbXBsYXRlIHNvdXJjZSBjb2RlIChwYXRoIFx1MjE5MiBzb3VyY2UpICovXG4gIHByaXZhdGUgdGVtcGxhdGVDYWNoZTogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvLyAtLS0gQWN0aXZpdHkgTG9va3VwIC0tLVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB3b3Jrc3BhY2UgdGVtcGxhdGUgZm9yIGEgZ2l2ZW4gYWN0aXZpdHkgdHlwZS5cbiAgICogTG9va3MgdXAgdGhlIGFjdGl2aXR5IGJ5IElEIGluIHNldHRpbmdzIGFuZCByZXR1cm5zIGl0cyB3b3Jrc3BhY2VUZW1wbGF0ZSBJRC5cbiAgICogVGhlIElEIG1heSByZWZlciB0byBhIGJ1aWx0LWluIHRlbXBsYXRlIChlLmcuIFwid29ya291dFwiKSBvciBhIHZhdWx0IHBhdGguXG4gICAqL1xuICBmaW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlOiBzdHJpbmcpOiB7IHRlbXBsYXRlSWQ6IHN0cmluZyB9IHwgbnVsbCB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoXG4gICAgICAoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlUeXBlICYmIGEuZW5hYmxlZCAmJiBhLndvcmtzcGFjZVRlbXBsYXRlLFxuICAgICk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHsgdGVtcGxhdGVJZDogYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUhIH07XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgTG9hZGluZyAtLS1cblxuICAvKipcbiAgICogTG9hZCB0aGUgdGVtcGxhdGUgc291cmNlIGZyb20gdmF1bHQuIENhY2hlcyB1bnRpbCBpbnZhbGlkYXRlZC5cbiAgICovXG4gIGFzeW5jIGxvYWRUZW1wbGF0ZVNvdXJjZSh0ZW1wbGF0ZVBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIC8vIENoZWNrIGNhY2hlIGZpcnN0XG4gICAgaWYgKHRoaXMudGVtcGxhdGVDYWNoZS5oYXModGVtcGxhdGVQYXRoKSkge1xuICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVDYWNoZS5nZXQodGVtcGxhdGVQYXRoKSE7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIHBhdGggXHUyMDE0IGFkZCAuanMgaWYgbWlzc2luZ1xuICAgIGxldCByZXNvbHZlZFBhdGggPSB0ZW1wbGF0ZVBhdGg7XG4gICAgaWYgKCFyZXNvbHZlZFBhdGguZW5kc1dpdGgoXCIuanNcIikgJiYgIXJlc29sdmVkUGF0aC5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgcmVzb2x2ZWRQYXRoICs9IFwiLmpzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChyZXNvbHZlZFBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLnNldCh0ZW1wbGF0ZVBhdGgsIHNvdXJjZSk7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgT2xlbiBUZW1wbGF0ZUVuZ2luZTogRmFpbGVkIHRvIHJlYWQgdGVtcGxhdGUgJHtyZXNvbHZlZFBhdGh9OmAsIGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZSB0aGUgY2FjaGUgZm9yIGEgc3BlY2lmaWMgdGVtcGxhdGUgKGUuZy4gYWZ0ZXIgZWRpdHMpLlxuICAgKi9cbiAgaW52YWxpZGF0ZUNhY2hlKHRlbXBsYXRlUGF0aD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0ZW1wbGF0ZVBhdGgpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5kZWxldGUodGVtcGxhdGVQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIENvbnRleHQgQ3JlYXRpb24gLS0tXG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBUZW1wbGF0ZUNvbnRleHQgdGhhdCBnZXRzIHBhc3NlZCB0byB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkQ29udGV4dChcbiAgICBmaWxlOiBURmlsZSxcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIGZyb250bWF0dGVyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgKTogVGVtcGxhdGVDb250ZXh0IHtcbiAgICBjb25zdCBhcHAgPSB0aGlzLmFwcDtcbiAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnBsdWdpbjtcblxuICAgIHJldHVybiB7XG4gICAgICBhcHAsXG4gICAgICBwbHVnaW4sXG4gICAgICBmaWxlLFxuICAgICAgY29udGFpbmVyLFxuXG4gICAgICAvLyAtLS0gRGF0YSBCaW5kaW5nIC0tLVxuXG4gICAgICBmcm9udG1hdHRlcjogeyAuLi5mcm9udG1hdHRlciB9LFxuXG4gICAgICBnZXREYXRhKGtleT86IHN0cmluZyk6IHVua25vd24ge1xuICAgICAgICBpZiAoIWtleSkgcmV0dXJuIHsgLi4uZnJvbnRtYXR0ZXIgfTtcbiAgICAgICAgcmV0dXJuIGZyb250bWF0dGVyW2tleV07XG4gICAgICB9LFxuXG4gICAgICBhc3luYyBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgICAgIGZtW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFVwZGF0ZSBvdXIgbG9jYWwgc25hcHNob3RcbiAgICAgICAgZnJvbnRtYXR0ZXJba2V5XSA9IHZhbHVlO1xuICAgICAgfSxcblxuICAgICAgYXN5bmMgc2V0TXVsdGlwbGVEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICAgIGZtW2tdID0gdjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc25hcHNob3RcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICBmcm9udG1hdHRlcltrXSA9IHY7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIC0tLSBWYXVsdCBIZWxwZXJzIC0tLVxuXG4gICAgICBhc3luYyByZWFkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAgICAgY29uc3QgZiA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghZiB8fCAhKGYgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gYXBwLnZhdWx0LnJlYWQoZik7XG4gICAgICB9LFxuXG4gICAgICBnZXRGaWxlc0luRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IFRGaWxlW10ge1xuICAgICAgICByZXR1cm4gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoXG4gICAgICAgICAgKGYpID0+IGYucGF0aC5zdGFydHNXaXRoKGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIiksXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICBnZXRGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsIHtcbiAgICAgICAgY29uc3QgZiA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghZiB8fCAhKGYgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBjYWNoZSA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmKTtcbiAgICAgICAgcmV0dXJuIChjYWNoZT8uZnJvbnRtYXR0ZXIgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID8/IG51bGw7XG4gICAgICB9LFxuXG4gICAgICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gICAgICBub3RpY2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIG5ldyBOb3RpY2UobWVzc2FnZSwgdGltZW91dCk7XG4gICAgICB9LFxuXG4gICAgICBtb21lbnQ6IHdpbmRvdy5tb21lbnQsXG5cbiAgICAgIGNyZWF0ZUVsPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgICAgICB0YWc6IEssXG4gICAgICAgIGF0dHJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICAgICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRycykpIHtcbiAgICAgICAgICAgIGlmIChrID09PSBcInRleHRcIikge1xuICAgICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwiaHRtbFwiKSB7XG4gICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwiY2xzXCIgfHwgayA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gdjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gLS0tIFJlbmRlcmluZyAtLS1cblxuICAvKipcbiAgICogTWFpbiByZW5kZXIgbWV0aG9kLiBSZXNvbHZlcyBhIHRlbXBsYXRlIElEIChidWlsdC1pbiBvciB2YXVsdCBwYXRoKVxuICAgKiBhbmQgcmVuZGVycyBpdCBpbnRvIGEgY29udGFpbmVyIGJvdW5kIHRvIHRoZSBnaXZlbiBub3RlJ3MgZnJvbnRtYXR0ZXIuXG4gICAqL1xuICBhc3luYyByZW5kZXIoXG4gICAgdGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGZpbGU6IFRGaWxlLFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vIDEuIFJlc29sdmUgdGVtcGxhdGUgc291cmNlOiBjaGVjayBidWlsdC1pbiB0ZW1wbGF0ZXMgZmlyc3QsIHRoZW4gdmF1bHRcbiAgICBsZXQgc291cmNlOiBzdHJpbmcgfCBudWxsID0gQlVJTFRJTl9URU1QTEFURVNbdGVtcGxhdGVJZF0gPz8gbnVsbDtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAvLyBGYWxsIGJhY2sgdG8gbG9hZGluZyBmcm9tIHZhdWx0IGFzIGEgLmpzIGZpbGUgcGF0aFxuICAgICAgc291cmNlID0gYXdhaXQgdGhpcy5sb2FkVGVtcGxhdGVTb3VyY2UodGVtcGxhdGVJZCk7XG4gICAgfVxuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIG5vdCBmb3VuZDogJHt0ZW1wbGF0ZUlkfWAsXG4gICAgICAgIFwiQ2hlY2sgdGhlIHRlbXBsYXRlIElEIGluIE9sZW4gU2V0dGluZ3MgXHUyMTkyIEFjdGl2aXRpZXMgXHUyMTkyIENvbmZpZ3VyZS4gQnVpbHQtaW4gdGVtcGxhdGVzOiB3b3Jrb3V0LlwiLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgY3VycmVudCBmcm9udG1hdHRlclxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSAoY2FjaGU/LmZyb250bWF0dGVyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyB7fTtcblxuICAgIC8vIDMuIEJ1aWxkIGNvbnRleHRcbiAgICBjb25zdCBjdHggPSB0aGlzLmJ1aWxkQ29udGV4dChmaWxlLCBjb250YWluZXIsIGZyb250bWF0dGVyKTtcblxuICAgIC8vIDQuIEV4ZWN1dGUgdGVtcGxhdGVcbiAgICB0cnkge1xuICAgICAgLy8gV2Ugd3JhcCB0aGUgdGVtcGxhdGUgc291cmNlIHNvIHRoYXQgYGN0eGAgaXMgYXZhaWxhYmxlIGFzIGEgbG9jYWwgdmFyaWFibGUuXG4gICAgICAvLyBUaGUgdGVtcGxhdGUgY29kZSBjYW4gZGVzdHJ1Y3R1cmUgZnJvbSBjdHggb3IgdXNlIGl0IGRpcmVjdGx5LlxuICAgICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXCJjdHhcIiwgc291cmNlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKGN0eCk7XG5cbiAgICAgIC8vIElmIHRoZSB0ZW1wbGF0ZSByZXR1cm5zIGEgcHJvbWlzZSAoYXN5bmMgdGVtcGxhdGUpLCBhd2FpdCBpdFxuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgT2xlbiBUZW1wbGF0ZUVuZ2luZTogRXJyb3IgZXhlY3V0aW5nIHRlbXBsYXRlICR7dGVtcGxhdGVJZH06YCwgZXJyKTtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIGVycm9yOiAkeyhlcnIgYXMgRXJyb3IpLm1lc3NhZ2V9YCxcbiAgICAgICAgYEluIHRlbXBsYXRlOiAke3RlbXBsYXRlSWR9YCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBlcnJvciBtZXNzYWdlIGluc2lkZSB0aGUgY29udGFpbmVyLlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJFcnJvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCB0aXRsZTogc3RyaW5nLCBoaW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBlcnJvckRpdiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvclwiIH0pO1xuICAgIGVycm9yRGl2LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3ItdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG4gICAgZXJyb3JEaXYuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvci1oaW50XCIsIHRleHQ6IGhpbnQgfSk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gVGVtcGxhdGUgXHUyMDE0IFdvcmtvdXQgVHJhY2tlciB2NS4wXG4vLyBSZW5kZXJzIGluc2lkZSB0aGUgT2xlbiB3b3Jrc3BhY2UgZm9yIHRoZSBcIndvcmtvdXRcIiBhY3Rpdml0eS5cbi8vIEFsbCBVSSBsaXZlcyBoZXJlIFx1MjAxNCBkYWlseSBub3RlcyBvbmx5IHN0b3JlIFlBTUwgZnJvbnRtYXR0ZXIuXG4vLyBEYXRhIGlzIHJlYWQvd3JpdHRlbiB2aWEgY3R4LmdldERhdGEgLyBjdHguc2V0RGF0YS5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCB7IGNvbnRhaW5lciwgZ2V0RGF0YSwgc2V0RGF0YSwgc2V0TXVsdGlwbGVEYXRhLCBhcHAsIG1vbWVudCwgbm90aWNlLFxuICAgICAgICBjcmVhdGVFbCwgZmlsZSwgcmVhZEZpbGUsIGdldEZpbGVzSW5Gb2xkZXIsIGdldEZpbGVNZXRhZGF0YSB9ID0gY3R4O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFVFRJTkdTIFx1MjAxNCBFZGl0IHRoZXNlIHRvIG1hdGNoIHlvdXIgdmF1bHQgc3RydWN0dXJlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IFNFVFRJTkdTID0ge1xuICAvLyBXaGVyZSBkYWlseSB3b3Jrb3V0IG5vdGVzIGFyZSBzdG9yZWRcbiAgd29ya291dEZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAxIFdvcmtvdXRcIixcbiAgLy8gRmlsZSBjb250YWluaW5nIFdlaWdodCwgSGVpZ2h0LCBCaXJ0aGRhdGUgaW4gZnJvbnRtYXR0ZXJcbiAgcGVyc29uYWxTdGF0c0ZpbGU6IFwiUGVyc29uYWwgTGlmZS9QZXJzb25hbCBTdGF0cy5tZFwiLFxuICAvLyBGb2xkZXIgY29udGFpbmluZyBleGVyY2lzZSBzdGFuZGFyZCAubWQgZmlsZXMgKGUuZy4gXCJCZW5jaCBQcmVzcy5tZFwiKVxuICBleGVyY2lzZURiRm9sZGVyOiBcIkhvbWUvQWN0aXZpdGllcy9FeGVyY2lzZXMgZGF0YWJhc2VcIixcbiAgLy8gRGVmYXVsdCBwZXJzb25hbCBzdGF0cyAodXNlZCB3aGVuIHN0YXRzIGZpbGUgaXMgbWlzc2luZylcbiAgZGVmYXVsdFdlaWdodDogNjEsXG4gIGRlZmF1bHRIZWlnaHQ6IDE3NSxcbiAgZGVmYXVsdEJpcnRoZGF0ZTogXCIyMDA1LTExLTI5XCIsXG59O1xuXG4vLyBNdXNjbGUgZ3JvdXBzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uLCB3aXRoIG9wdGlvbmFsIHN1Ymdyb3Vwc1xuY29uc3QgTVVTQ0xFX0dST1VQUyA9IHtcbiAgXCJOZWNrXCI6ICAgICAgeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzRVxcdUREQjRcIiB9LFxuICBcIkJhY2tcIjogICAgICB7IHN1Ymdyb3VwczogW1wiTGF0c1wiLCBcIlRyYXBzXCIsIFwiUmhvbWJvaWRzXCIsIFwiTG93ZXIgQmFja1wiLCBcIlJlYXIgRGVsdHNcIl0sIGljb246IFwiXFx1RDgzRFxcdUREMTlcIiB9LFxuICBcIkNoZXN0XCI6ICAgICB7IHN1Ymdyb3VwczogbnVsbCwgaWNvbjogXCJcXHVEODNEXFx1RENBQVwiIH0sXG4gIFwiU2hvdWxkZXJzXCI6IHsgc3ViZ3JvdXBzOiBbXCJGcm9udCBEZWx0c1wiLCBcIlNpZGUgRGVsdHNcIiwgXCJSZWFyIERlbHRzXCJdLCBpY29uOiBcIlxcdUQ4M0NcXHVERkFGXCIgfSxcbiAgXCJDb3JlXCI6ICAgICAgeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzQ1xcdURGQUZcIiB9LFxuICBcIkxlZ3NcIjogICAgICB7IHN1Ymdyb3VwczogW1wiUXVhZHNcIiwgXCJIYW1zdHJpbmdzXCIsIFwiR2x1dGVzXCIsIFwiQ2FsdmVzXCIsIFwiQWRkdWN0b3JzXCJdLCBpY29uOiBcIlxcdUQ4M0VcXHVEREI1XCIgfSxcbiAgXCJBcm1zXCI6ICAgICAgeyBzdWJncm91cHM6IFtcIkJpY2Vwc1wiLCBcIlRyaWNlcHNcIiwgXCJGb3JlYXJtc1wiXSwgaWNvbjogXCJcXHVEODNEXFx1RENBQVwiIH0sXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRIRU1FICYgQ09OU1RBTlRTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IFRIRU1FID0ge1xuICBjb2xvcjogXCIjOWE4YzdhXCIsXG4gIGNvbG9ySG92ZXI6IFwiI2FhOWM4YVwiLFxuICBjb2xvckJvcmRlcjogXCIjM2EzNDJhXCIsXG4gIGNvbG9yQm9yZGVySG92ZXI6IFwiIzRhNDQzYVwiLFxuICBjb2xvck11dGVkOiBcIiM2YTVhNGFcIixcbiAgY29sb3JMaWdodDogXCIjYjhhODkwXCIsXG4gIGNvbG9yRGlzY2lwbGluZTogXCIjYTg5ODYwXCIsXG4gIGNvbG9yRmxvdzogXCIjNmE4YTlhXCIsXG4gIHN5c3RlbUdyZWVuOiBcIiM3YTlhN2RcIlxufTtcblxuY29uc3QgU1RSRU5HVEhfTEVWRUxTID0ge1xuICBcIlVudHJhaW5lZFwiOiAgICB7IGNvbG9yOiBcIiM2YTZhNmFcIiwgaWNvbjogXCJcXHUyNUNCXCIgfSxcbiAgXCJCZWdpbm5lclwiOiAgICAgeyBjb2xvcjogXCIjYTg5ODYwXCIsIGljb246IFwiXFx1MjVEMFwiIH0sXG4gIFwiTm92aWNlXCI6ICAgICAgIHsgY29sb3I6IFwiIzdhOWE3ZFwiLCBpY29uOiBcIlxcdTI1RDFcIiB9LFxuICBcIkludGVybWVkaWF0ZVwiOiB7IGNvbG9yOiBcIiM2YThhOWFcIiwgaWNvbjogXCJcXHUyNUQ1XCIgfSxcbiAgXCJBZHZhbmNlZFwiOiAgICAgeyBjb2xvcjogXCIjOGE3YTlhXCIsIGljb246IFwiXFx1MjVDRlwiIH0sXG4gIFwiRWxpdGVcIjogICAgICAgIHsgY29sb3I6IFwiIzlhNmE3YVwiLCBpY29uOiBcIlxcdTI2MDVcIiB9XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNUQVRFIChmcm9tIGZyb250bWF0dGVyKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5sZXQgZXhlcmNpc2VzID0gZ2V0RGF0YShcImV4ZXJjaXNlc1wiKSB8fCBbXTtcbmxldCBtdXNjbGVHcm91cHMgPSBnZXREYXRhKFwibXVzY2xlR3JvdXBzXCIpIHx8IFtdO1xubGV0IGN1cnJlbnRNdXNjbGVJbmRleCA9IGdldERhdGEoXCJjdXJyZW50TXVzY2xlSW5kZXhcIikgfHwgMDtcbmNvbnN0IGlzQ29tcGxldGVkID0gZ2V0RGF0YShcIldvcmtvdXRcIikgPT09IHRydWU7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU1RZTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbGVuLXRwbC13b3Jrb3V0LXY1XCIpKSB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBzdHlsZS5pZCA9IFwib2xlbi10cGwtd29ya291dC12NVwiO1xuICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAub3R3LWNvbnRhaW5lciAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5vdHctY29udGFpbmVyIHsgbWF4LXdpZHRoOiA1MDBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDEwcHggMDsgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmOyB9XG4gICAgLm90dy1jb250YWluZXIgYnV0dG9uLCAub3R3LWNvbnRhaW5lciBpbnB1dCwgLm90dy1tb2RhbC1vdmVybGF5IGJ1dHRvbiwgLm90dy1tb2RhbC1vdmVybGF5IGlucHV0IHsgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LWNvbnRhaW5lciBpbnB1dFt0eXBlPVwibnVtYmVyXCJdIHsgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IH1cbiAgICBAa2V5ZnJhbWVzIG90dy1icmVhdGhlIHsgMCUsIDEwMCUgeyBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCByZ2JhKDE1NCwxNDAsMTIyLDAuMDMpOyB9IDUwJSB7IGJveC1zaGFkb3c6IGluc2V0IDAgMCA0MHB4IHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IH0gfVxuICAgIEBrZXlmcmFtZXMgb3R3LXB1bHNlLWdsb3cgeyAwJSwgMTAwJSB7IG9wYWNpdHk6IDAuNDsgfSA1MCUgeyBvcGFjaXR5OiAxOyB9IH1cbiAgICAub3R3LWNhcmQgeyBiYWNrZ3JvdW5kOiAjMGEwYTBhOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBwYWRkaW5nOiAxNnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1ib3R0b206IDE2cHg7IH1cbiAgICAub3R3LWNhcmQtYnJlYXRoZSB7IGFuaW1hdGlvbjogb3R3LWJyZWF0aGUgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cbiAgICAub3R3LWhlYWRlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMjBweDsgfVxuICAgIC5vdHctdGl0bGUgeyBtYXJnaW46IDA7IGNvbG9yOiAjOWE4YzdhOyBmb250LXNpemU6IDI0cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiA0cHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAub3R3LXByb2dyZXNzLWxhYmVsIHsgY29sb3I6ICM2YTVhNGE7IGZvbnQtc2l6ZTogMTJweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gICAgLm90dy1zZWN0aW9uLWxhYmVsIHsgY29sb3I6ICM2YTVhNGE7IGZvbnQtc2l6ZTogMTBweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDNweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgdGV4dC1hbGlnbjogY2VudGVyOyBtYXJnaW46IDIwcHggMCAxMHB4OyB9XG4gICAgLm90dy13ZWVrLWdyaWQgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpOyBnYXA6IDZweDsgfVxuICAgIC5vdHctd2Vlay1kYXkgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDRweDsgcGFkZGluZzogOHB4IDRweDsgYmFja2dyb3VuZDogIzBjMGMwYzsgYm9yZGVyOiAxcHggc29saWQgIzJhMjUyMDsgfVxuICAgIC5vdHctd2Vlay1kYXkudG9kYXkgeyBib3JkZXItY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LXdlZWstZGF5IC5vdHctZGF5LWxhYmVsIHsgZm9udC1zaXplOiA5cHg7IGNvbG9yOiAjNmE1YTRhOyBsZXR0ZXItc3BhY2luZzogMXB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLm90dy13ZWVrLWRheSAub3R3LWRheS1udW0geyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAjNmE1YTRhOyB9XG4gICAgLm90dy13ZWVrLWRheSAub3R3LWRheS1pY29uIHsgZm9udC1zaXplOiAxNHB4OyBtaW4taGVpZ2h0OiAxOHB4OyB9XG4gICAgLm90dy13ZWVrLWRheS5kb25lIC5vdHctZGF5LW51bSB7IGNvbG9yOiAjOWE4YzdhOyB9XG4gICAgLm90dy1zdGF0LXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7IGdhcDogOHB4OyB9XG4gICAgLm90dy1zdGF0LWJveCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHBhZGRpbmc6IDEycHggOHB4OyBiYWNrZ3JvdW5kOiAjMGMwYzBjOyBib3JkZXI6IDFweCBzb2xpZCAjMmEyNTIwOyB9XG4gICAgLm90dy1zdGF0LXZhbHVlIHsgZm9udC1zaXplOiAyMnB4OyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogIzlhOGM3YTsgbGluZS1oZWlnaHQ6IDE7IH1cbiAgICAub3R3LXN0YXQtbGFiZWwgeyBmb250LXNpemU6IDlweDsgY29sb3I6ICM2YTVhNGE7IGxldHRlci1zcGFjaW5nOiAxcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IG1hcmdpbi10b3A6IDZweDsgfVxuICAgIC5vdHctcmVjZW50LXJvdyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMTBweCAxMnB4OyBiYWNrZ3JvdW5kOiAjMGMwYzBjOyBib3JkZXI6IDFweCBzb2xpZCAjMmEyNTIwOyBtYXJnaW4tYm90dG9tOiA0cHg7IH1cbiAgICAub3R3LXJlY2VudC1kYXRlIHsgZm9udC1zaXplOiAxMnB4OyBjb2xvcjogIzZhNWE0YTsgfVxuICAgIC5vdHctcmVjZW50LW11c2NsZXMgeyBmb250LXNpemU6IDExcHg7IGNvbG9yOiAjOWE4YzdhOyBmbGV4OiAxOyBtYXJnaW46IDAgMTJweDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgb3ZlcmZsb3c6IGhpZGRlbjsgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAub3R3LXJlY2VudC1iYWRnZSB7IGZvbnQtc2l6ZTogMTBweDsgcGFkZGluZzogM3B4IDhweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDFweDsgfVxuICAgIC5vdHctaGVhdG1hcC13cmFwIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTZweDsgcGFkZGluZzogOHB4IDA7IH1cbiAgICAub3R3LWhlYXRtYXAtc3ZnIHsgd2lkdGg6IDEzMHB4OyBoZWlnaHQ6IGF1dG87IH1cbiAgICAub3R3LWhlYXRtYXAtbGVnZW5kIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA4cHggMTRweDsgbWFyZ2luLXRvcDogOHB4OyBwYWRkaW5nOiAwIDhweDsgfVxuICAgIC5vdHctaGVhdG1hcC1sZWdlbmQtaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNXB4OyBmb250LXNpemU6IDhweDsgY29sb3I6ICM2YTVhNGE7IGxldHRlci1zcGFjaW5nOiAxcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAub3R3LWhlYXRtYXAtbGVnZW5kLWRvdCB7IHdpZHRoOiA4cHg7IGhlaWdodDogOHB4OyB9XG4gICAgLm90dy1idG4geyBwYWRkaW5nOiAxNHB4IDI0cHg7IGJvcmRlcjogbm9uZTsgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyBmb250LXNpemU6IDEzcHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiAycHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6ICM5YThjN2E7IGNvbG9yOiAjMGEwYTBhOyB3aWR0aDogMTAwJTsgfVxuICAgIC5vdHctYnRuLXByaW1hcnk6YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgfVxuICAgIC5vdHctYnRuLXNlY29uZGFyeSB7IGJhY2tncm91bmQ6ICMwZjBmMGY7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IGNvbG9yOiAjNmE1YTRhOyB9XG4gICAgLm90dy1idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogIzlhOGM3YTsgY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LWJ0bi1maW5pc2ggeyBiYWNrZ3JvdW5kOiAjN2E5YTdkOyBjb2xvcjogIzBhMGEwYTsgfVxuICAgIC5vdHctYnRuLWRhc2hlZCB7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYm9yZGVyOiAxcHggZGFzaGVkICMzYTM0MmE7IGNvbG9yOiAjNmE1YTRhOyB9XG4gICAgLm90dy1idG4tZGFzaGVkOmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogIzlhOGM3YTsgY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LW5hdi1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IG1hcmdpbi10b3A6IDI0cHg7IH1cbiAgICAub3R3LW5hdi1yb3cgLm90dy1idG4geyBmbGV4OiAxOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAub3R3LXNldC1yb3cgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyBwYWRkaW5nOiAxMnB4OyBiYWNrZ3JvdW5kOiAjMGYwZjBmOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAub3R3LXNldC1yb3cuY29tcGxldGVkIHsgb3BhY2l0eTogMC42OyB9XG4gICAgLm90dy1jaGVja2JveCB7IHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IGJvcmRlcjogMnB4IHNvbGlkICMzYTM0MmE7IGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGN1cnNvcjogcG9pbnRlcjsgY29sb3I6ICMwYTBhMGE7IGZvbnQtd2VpZ2h0OiBib2xkOyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgZmxleC1zaHJpbms6IDA7IH1cbiAgICAub3R3LWNoZWNrYm94LmNoZWNrZWQgeyBiYWNrZ3JvdW5kOiAjN2E5YTdkOyBib3JkZXItY29sb3I6ICM3YTlhN2Q7IH1cbiAgICAub3R3LWlucHV0IHsgcGFkZGluZzogNnB4OyBiYWNrZ3JvdW5kOiAjMGEwYTBhOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7IGNvbG9yOiAjOWE4YzdhOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGZvbnQtc2l6ZTogMTRweDsgZm9udC13ZWlnaHQ6IDYwMDsgd2lkdGg6IDUwcHg7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctY3RybC1idG4geyB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYmFja2dyb3VuZDogIzBmMGYwZjsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyBjb2xvcjogIzlhOGM3YTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDE2cHg7IGZsZXgtc2hyaW5rOiAwOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LWN0cmwtYnRuOmFjdGl2ZSB7IGJhY2tncm91bmQ6ICM5YThjN2E7IGNvbG9yOiAjMGEwYTBhOyB9XG4gICAgLm90dy13YXJtdXAtYmFkZ2UgeyBmb250LXNpemU6IDlweDsgY29sb3I6ICM2YThhOWE7IHBhZGRpbmc6IDJweCA2cHg7IGJhY2tncm91bmQ6IHJnYmEoMTA2LDEzOCwxNTQsMC4xNSk7IGJvcmRlci1yYWRpdXM6IDNweDsgfVxuICAgIC5vdHctc3RyZW5ndGgtYmFyIHsgaGVpZ2h0OiA2cHg7IGJhY2tncm91bmQ6ICMxYTFhMWE7IGJvcmRlci1yYWRpdXM6IDNweDsgb3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luLXRvcDogNnB4OyB9XG4gICAgLm90dy1zdHJlbmd0aC1maWxsIHsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiAzcHg7IHRyYW5zaXRpb246IHdpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTsgfVxuICAgIC5vdHctc3RyZW5ndGgtYmFkZ2UgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IHBhZGRpbmc6IDZweCAxMnB4OyBib3JkZXItcmFkaXVzOiA0cHg7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctcHItYm94IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0cHg7IHBhZGRpbmc6IDEwcHggMTJweDsgYmFja2dyb3VuZDogcmdiYSgxNjgsMTUyLDk2LDAuMSk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY4LDE1Miw5NiwwLjMpOyBib3JkZXItcmFkaXVzOiA0cHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAgIC5vdHctbW9kYWwtb3ZlcmxheSB7IHBvc2l0aW9uOiBmaXhlZDsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgei1pbmRleDogOTk5OTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDBweCk7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC41cyBlYXNlLCBiYWNrZHJvcC1maWx0ZXIgMC41cyBlYXNlOyB9XG4gICAgLm90dy1tb2RhbC1vdmVybGF5LnZpc2libGUgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOTUpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTsgfVxuICAgIC5vdHctbW9kYWwtY29udGVudCB7IGJhY2tncm91bmQ6ICMwYTBhMGE7IHBhZGRpbmc6IDI4cHggMjBweDsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgbWF4LXdpZHRoOiA1NTBweDsgd2lkdGg6IDkwJTsgbWF4LWhlaWdodDogODV2aDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxNnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMHB4KTsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjVzIGVhc2U7IG92ZXJmbG93LXk6IGF1dG87IH1cbiAgICAub3R3LW1vZGFsLW92ZXJsYXkudmlzaWJsZSAub3R3LW1vZGFsLWNvbnRlbnQgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cbiAgICAub3R3LXN1bW1hcnktY29tcGxldGUgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDI0cHggMDsgfVxuICAgIC5vdHctc3VtbWFyeS1jb21wbGV0ZSBoMiB7IG1hcmdpbjogMDsgY29sb3I6ICM3YTlhN2Q7IGZvbnQtc2l6ZTogMTZweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDNweDsgfVxuICAgIC5vdHctZmVlbC1idG4geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDE2cHg7IHBhZGRpbmc6IDE2cHggMjBweDsgYmFja2dyb3VuZDogIzBjMGMwYzsgY3Vyc29yOiBwb2ludGVyOyBtYXJnaW4tYm90dG9tOiAxMHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgfVxuICAgIC5vdHctZmVlbC1idG46YWN0aXZlIHsgYmFja2dyb3VuZDogIzEwMTAxMDsgfVxuICAgIC5vdHctbXVzY2xlLXRvZ2dsZSB7IHBhZGRpbmc6IDEycHggMThweDsgYmFja2dyb3VuZDogIzBmMGYwZjsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyBjb2xvcjogIzlhOGM3YTsgZm9udC1zaXplOiAxM3B4OyBsZXR0ZXItc3BhY2luZzogMXB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctbXVzY2xlLXRvZ2dsZS5hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwxNDAsMTIyLDAuMykgIWltcG9ydGFudDsgYm9yZGVyLWNvbG9yOiAjOWE4YzdhICFpbXBvcnRhbnQ7IH1cbiAgICAub3R3LW11c2NsZS10b2dnbGU6YWN0aXZlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpOyB9XG4gICAgLm90dy1zdWJncm91cC1jb250YWluZXIgeyBtYXgtaGVpZ2h0OiAwOyBvdmVyZmxvdzogaGlkZGVuOyB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZSwgb3BhY2l0eSAwLjNzIGVhc2UsIHBhZGRpbmcgMC4zcyBlYXNlOyBvcGFjaXR5OiAwOyBwYWRkaW5nOiAwIDEycHg7IH1cbiAgICAub3R3LXN1Ymdyb3VwLWNvbnRhaW5lci5leHBhbmRlZCB7IG1heC1oZWlnaHQ6IDIwMHB4OyBvcGFjaXR5OiAxOyBwYWRkaW5nOiAxMnB4OyB9XG4gICAgLm90dy1zdWItdG9nZ2xlIHsgcGFkZGluZzogOHB4IDE0cHg7IGJhY2tncm91bmQ6ICMwZjBmMGY7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDsgY29sb3I6ICM2YTVhNGE7IGZvbnQtc2l6ZTogMTJweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LXN1Yi10b2dnbGUuYWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSgxNTQsMTQwLDEyMiwwLjIpOyBib3JkZXItY29sb3I6ICM5YThjN2E7IGNvbG9yOiAjOWE4YzdhOyB9XG4gIGA7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVUSUxJVFkgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gYWRkQ29ybmVycyhlbCwgY29sb3IsIHNpemUgPSAxNCkge1xuICBbXCJUTFwiLCBcIlRSXCIsIFwiQkxcIiwgXCJCUlwiXS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpc1RvcCA9IHBvcy5pbmNsdWRlcyhcIlRcIiksIGlzTGVmdCA9IHBvcy5pbmNsdWRlcyhcIkxcIik7XG4gICAgYy5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOmFic29sdXRlOyR7aXNUb3A/XCJ0b3A6MFwiOlwiYm90dG9tOjBcIn07JHtpc0xlZnQ/XCJsZWZ0OjBcIjpcInJpZ2h0OjBcIn07d2lkdGg6JHtzaXplfXB4O2hlaWdodDoke3NpemV9cHg7Ym9yZGVyLSR7aXNUb3A/XCJ0b3BcIjpcImJvdHRvbVwifToxcHggc29saWQgJHtjb2xvcn07Ym9yZGVyLSR7aXNMZWZ0P1wibGVmdFwiOlwicmlnaHRcIn06MXB4IHNvbGlkICR7Y29sb3J9O3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZTtgO1xuICAgIGVsLmFwcGVuZENoaWxkKGMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlMVJNKHdlaWdodCwgcmVwcykge1xuICBpZiAocmVwcyA9PT0gMCB8fCB3ZWlnaHQgPT09IDApIHJldHVybiAwO1xuICBpZiAocmVwcyA9PT0gMSkgcmV0dXJuIHdlaWdodDtcbiAgcmV0dXJuIE1hdGgucm91bmQod2VpZ2h0ICogKDEgKyByZXBzIC8gMzApKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rmlyc3RXb3JraW5nU2V0SW5kZXgoc2V0cykge1xuICByZXR1cm4gc2V0cy5maW5kSW5kZXgoKHMpID0+ICFzLmlzV2FybXVwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2FybXVwV2VpZ2h0cyhleCwgbmV3Vykge1xuICBjb25zdCB3YXJtdXBzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+IHMuaXNXYXJtdXApO1xuICBbMC41LCAwLjcsIDAuODVdLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICBpZiAod2FybXVwc1tpXSkgd2FybXVwc1tpXS53ZWlnaHQgPSBNYXRoLnJvdW5kKG5ld1cgKiBwKTtcbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEVSU09OQUwgU1RBVFMgJiBTVFJFTkdUSCBTVEFOREFSRFNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBnZXRQZXJzb25hbFN0YXRzKCkge1xuICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YShTRVRUSU5HUy5wZXJzb25hbFN0YXRzRmlsZSk7XG4gIGlmICghZm0pIHJldHVybiB7IHdlaWdodDogU0VUVElOR1MuZGVmYXVsdFdlaWdodCwgaGVpZ2h0OiBTRVRUSU5HUy5kZWZhdWx0SGVpZ2h0LCBiaXJ0aGRhdGU6IFNFVFRJTkdTLmRlZmF1bHRCaXJ0aGRhdGUgfTtcbiAgcmV0dXJuIHtcbiAgICB3ZWlnaHQ6IGZtLldlaWdodCB8fCBTRVRUSU5HUy5kZWZhdWx0V2VpZ2h0LFxuICAgIGhlaWdodDogZm0uSGVpZ2h0IHx8IFNFVFRJTkdTLmRlZmF1bHRIZWlnaHQsXG4gICAgYmlydGhkYXRlOiBmbS5CaXJ0aGRhdGUgfHwgU0VUVElOR1MuZGVmYXVsdEJpcnRoZGF0ZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVBZ2UoYmQpIHtcbiAgaWYgKCFiZCkgcmV0dXJuIDIwO1xuICBjb25zdCBiID0gbmV3IERhdGUoYmQpLCB0ID0gbmV3IERhdGUoKTtcbiAgbGV0IGEgPSB0LmdldEZ1bGxZZWFyKCkgLSBiLmdldEZ1bGxZZWFyKCk7XG4gIGlmICh0LmdldE1vbnRoKCkgPCBiLmdldE1vbnRoKCkgfHwgKHQuZ2V0TW9udGgoKSA9PT0gYi5nZXRNb250aCgpICYmIHQuZ2V0RGF0ZSgpIDwgYi5nZXREYXRlKCkpKSBhLS07XG4gIHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0YW5kYXJkVmFsdWUodmFsKSB7XG4gIGlmICh0eXBlb2YgdmFsICE9PSBcInN0cmluZ1wiKSB2YWwgPSBTdHJpbmcodmFsKTtcbiAgdmFsID0gdmFsLnRyaW0oKTtcbiAgaWYgKHZhbC5pbmNsdWRlcyhcIjxcIikpIHtcbiAgICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbC5yZXBsYWNlKC9bPFxcc10vZywgXCJcIikpO1xuICAgIHJldHVybiAhaXNOYU4obnVtKSAmJiBudW0gPiAwID8gbnVtICogMC41IDogMC4xO1xuICB9XG4gIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsKTtcbiAgcmV0dXJuIGlzTmFOKG51bSkgPyAwIDogbnVtO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRTdHJlbmd0aFN0YW5kYXJkKGV4ZXJjaXNlTmFtZSkge1xuICBjb25zdCBmaWxlUGF0aCA9IFNFVFRJTkdTLmV4ZXJjaXNlRGJGb2xkZXIgKyBcIi9cIiArIGV4ZXJjaXNlTmFtZSArIFwiLm1kXCI7XG4gIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKGZpbGVQYXRoKTtcbiAgY29uc3QgaXNCVyA9IGZtPy5UeXBlID09PSBcIkJvZHl3ZWlnaHRcIjtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGZpbGVQYXRoKTtcbiAgaWYgKCFjb250ZW50KSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuICBjb25zdCBid1RhYmxlID0gW10sIGFnZVRhYmxlID0gW107XG4gIGxldCBjdXJyZW50VGFibGUgPSBudWxsO1xuICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICBpZiAobGluZS5tYXRjaCgvXFx8XFxzKkJXXFxzKlxcfC9pKSkgeyBjdXJyZW50VGFibGUgPSBcImJ3XCI7IGNvbnRpbnVlOyB9XG4gICAgaWYgKGxpbmUubWF0Y2goL1xcfFxccypBZ2VcXHMqXFx8L2kpKSB7IGN1cnJlbnRUYWJsZSA9IFwiYWdlXCI7IGNvbnRpbnVlOyB9XG4gICAgaWYgKGxpbmUuc3RhcnRzV2l0aChcInwtLS1cIikgfHwgbGluZS5zdGFydHNXaXRoKFwifCAtLS1cIikpIGNvbnRpbnVlO1xuICAgIGNvbnN0IG0gPSBsaW5lLm1hdGNoKC9cXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHwvKTtcbiAgICBpZiAobSkge1xuICAgICAgY29uc3Qgcm93ID0geyBrZXk6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzFdKSwgYmVnaW5uZXI6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzJdKSwgbm92aWNlOiBwYXJzZVN0YW5kYXJkVmFsdWUobVszXSksIGludGVybWVkaWF0ZTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNF0pLCBhZHZhbmNlZDogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNV0pLCBlbGl0ZTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNl0pIH07XG4gICAgICBpZiAocm93LmtleSA+IDAgJiYgKHJvdy5iZWdpbm5lciA+IDAgfHwgcm93Lm5vdmljZSA+IDAgfHwgcm93LmludGVybWVkaWF0ZSA+IDApKSB7XG4gICAgICAgIGlmIChjdXJyZW50VGFibGUgPT09IFwiYndcIikgYndUYWJsZS5wdXNoKHJvdyk7XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRUYWJsZSA9PT0gXCJhZ2VcIikgYWdlVGFibGUucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4geyBid1RhYmxlLCBhZ2VUYWJsZSwgaXNCb2R5d2VpZ2h0OiBpc0JXLCBoYXNWYWxpZERhdGE6IGJ3VGFibGUubGVuZ3RoID4gMCB8fCBhZ2VUYWJsZS5sZW5ndGggPiAwIH07XG59XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlU3RhbmRhcmQodGFibGUsIHZhbHVlKSB7XG4gIGlmICghdGFibGUgfHwgdGFibGUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnRhYmxlXS5zb3J0KChhLCBiKSA9PiBhLmtleSAtIGIua2V5KTtcbiAgbGV0IGxvd2VyID0gc29ydGVkWzBdLCB1cHBlciA9IHNvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGlmIChzb3J0ZWRbaV0ua2V5IDw9IHZhbHVlICYmIHNvcnRlZFtpICsgMV0ua2V5ID49IHZhbHVlKSB7IGxvd2VyID0gc29ydGVkW2ldOyB1cHBlciA9IHNvcnRlZFtpICsgMV07IGJyZWFrOyB9XG4gIH1cbiAgaWYgKHZhbHVlIDw9IGxvd2VyLmtleSkgcmV0dXJuIHsgLi4ubG93ZXIgfTtcbiAgaWYgKHZhbHVlID49IHVwcGVyLmtleSkgcmV0dXJuIHsgLi4udXBwZXIgfTtcbiAgY29uc3QgcmF0aW8gPSAodmFsdWUgLSBsb3dlci5rZXkpIC8gKHVwcGVyLmtleSAtIGxvd2VyLmtleSk7XG4gIHJldHVybiB7IGtleTogdmFsdWUsIGJlZ2lubmVyOiBsb3dlci5iZWdpbm5lciArIHJhdGlvICogKHVwcGVyLmJlZ2lubmVyIC0gbG93ZXIuYmVnaW5uZXIpLCBub3ZpY2U6IGxvd2VyLm5vdmljZSArIHJhdGlvICogKHVwcGVyLm5vdmljZSAtIGxvd2VyLm5vdmljZSksIGludGVybWVkaWF0ZTogbG93ZXIuaW50ZXJtZWRpYXRlICsgcmF0aW8gKiAodXBwZXIuaW50ZXJtZWRpYXRlIC0gbG93ZXIuaW50ZXJtZWRpYXRlKSwgYWR2YW5jZWQ6IGxvd2VyLmFkdmFuY2VkICsgcmF0aW8gKiAodXBwZXIuYWR2YW5jZWQgLSBsb3dlci5hZHZhbmNlZCksIGVsaXRlOiBsb3dlci5lbGl0ZSArIHJhdGlvICogKHVwcGVyLmVsaXRlIC0gbG93ZXIuZWxpdGUpIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEF2ZXJhZ2VkU3RhbmRhcmRzKHN0ZCkge1xuICBjb25zdCBzdGF0cyA9IGF3YWl0IGdldFBlcnNvbmFsU3RhdHMoKTtcbiAgY29uc3QgYncgPSBpbnRlcnBvbGF0ZVN0YW5kYXJkKHN0ZC5id1RhYmxlLCBzdGF0cy53ZWlnaHQpO1xuICBjb25zdCBhZyA9IGludGVycG9sYXRlU3RhbmRhcmQoc3RkLmFnZVRhYmxlLCBjYWxjdWxhdGVBZ2Uoc3RhdHMuYmlydGhkYXRlKSk7XG4gIGlmIChidyAmJiBhZykgcmV0dXJuIHsgYmVnaW5uZXI6IChidy5iZWdpbm5lciArIGFnLmJlZ2lubmVyKSAvIDIsIG5vdmljZTogKGJ3Lm5vdmljZSArIGFnLm5vdmljZSkgLyAyLCBpbnRlcm1lZGlhdGU6IChidy5pbnRlcm1lZGlhdGUgKyBhZy5pbnRlcm1lZGlhdGUpIC8gMiwgYWR2YW5jZWQ6IChidy5hZHZhbmNlZCArIGFnLmFkdmFuY2VkKSAvIDIsIGVsaXRlOiAoYncuZWxpdGUgKyBhZy5lbGl0ZSkgLyAyIH07XG4gIHJldHVybiBidyB8fCBhZyB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVTdHJlbmd0aExldmVsKGN2LCBzdGQpIHtcbiAgaWYgKCFzdGQgfHwgY3YgPCAwKSByZXR1cm4geyBsZXZlbDogXCJVbnRyYWluZWRcIiwgY29sb3I6IFwiIzZhNmE2YVwiLCBwcm9ncmVzczogMCwgbmV4dFRhcmdldDogc3RkPy5iZWdpbm5lciB8fCAxIH07XG4gIGNvbnN0IHsgYmVnaW5uZXIsIG5vdmljZSwgaW50ZXJtZWRpYXRlLCBhZHZhbmNlZCwgZWxpdGUgfSA9IHN0ZDtcbiAgaWYgKGN2ID49IGVsaXRlKSByZXR1cm4geyBsZXZlbDogXCJFbGl0ZVwiLCBjb2xvcjogXCIjOWE2YTdhXCIsIHByb2dyZXNzOiAxMDAsIG5leHRUYXJnZXQ6IG51bGwgfTtcbiAgaWYgKGN2ID49IGFkdmFuY2VkKSByZXR1cm4geyBsZXZlbDogXCJBZHZhbmNlZFwiLCBjb2xvcjogXCIjOGE3YTlhXCIsIHByb2dyZXNzOiAoKGN2IC0gYWR2YW5jZWQpIC8gKGVsaXRlIC0gYWR2YW5jZWQpKSAqIDEwMCwgbmV4dFRhcmdldDogZWxpdGUgfTtcbiAgaWYgKGN2ID49IGludGVybWVkaWF0ZSkgcmV0dXJuIHsgbGV2ZWw6IFwiSW50ZXJtZWRpYXRlXCIsIGNvbG9yOiBcIiM2YThhOWFcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBpbnRlcm1lZGlhdGUpIC8gKGFkdmFuY2VkIC0gaW50ZXJtZWRpYXRlKSkgKiAxMDAsIG5leHRUYXJnZXQ6IGFkdmFuY2VkIH07XG4gIGlmIChjdiA+PSBub3ZpY2UpIHJldHVybiB7IGxldmVsOiBcIk5vdmljZVwiLCBjb2xvcjogXCIjN2E5YTdkXCIsIHByb2dyZXNzOiAoKGN2IC0gbm92aWNlKSAvIChpbnRlcm1lZGlhdGUgLSBub3ZpY2UpKSAqIDEwMCwgbmV4dFRhcmdldDogaW50ZXJtZWRpYXRlIH07XG4gIGlmIChjdiA+PSBiZWdpbm5lcikgcmV0dXJuIHsgbGV2ZWw6IFwiQmVnaW5uZXJcIiwgY29sb3I6IFwiI2E4OTg2MFwiLCBwcm9ncmVzczogKChjdiAtIGJlZ2lubmVyKSAvIChub3ZpY2UgLSBiZWdpbm5lcikpICogMTAwLCBuZXh0VGFyZ2V0OiBub3ZpY2UgfTtcbiAgcmV0dXJuIHsgbGV2ZWw6IFwiVW50cmFpbmVkXCIsIGNvbG9yOiBcIiM2YTZhNmFcIiwgcHJvZ3Jlc3M6IGJlZ2lubmVyID4gMCA/IE1hdGgubWF4KDAsIChjdiAvIGJlZ2lubmVyKSAqIDEwMCkgOiAwLCBuZXh0VGFyZ2V0OiBiZWdpbm5lciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVTdHJlbmd0aExldmVsKG5hbWUsIHcsIHIsIG1heFIpIHtcbiAgY29uc3Qgc3RkID0gYXdhaXQgZ2V0U3RyZW5ndGhTdGFuZGFyZChuYW1lKTtcbiAgaWYgKCFzdGQgfHwgIXN0ZC5oYXNWYWxpZERhdGEpIHJldHVybiBudWxsO1xuICBjb25zdCBhdmcgPSBhd2FpdCBnZXRBdmVyYWdlZFN0YW5kYXJkcyhzdGQpO1xuICBpZiAoIWF2ZykgcmV0dXJuIG51bGw7XG4gIGlmIChzdGQuaXNCb2R5d2VpZ2h0KSB7XG4gICAgY29uc3QgZWZmID0gbWF4UiAhPT0gbnVsbCAmJiBtYXhSICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChyLCBtYXhSKSA6IHI7XG4gICAgY29uc3QgcmVzID0gZGV0ZXJtaW5lU3RyZW5ndGhMZXZlbChlZmYsIGF2Zyk7XG4gICAgcmV0dXJuIHsgLi4ucmVzLCBjdXJyZW50VmFsdWU6IGVmZiwgaXNCb2R5d2VpZ2h0OiB0cnVlLCB1bml0OiBcInJlcHNcIiwgZGlzcGxheUxhYmVsOiBcIk1heCBSZXBzXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodyA8PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlc3QgPSBjYWxjdWxhdGUxUk0odywgcik7XG4gICAgY29uc3QgcmVzID0gZGV0ZXJtaW5lU3RyZW5ndGhMZXZlbChlc3QsIGF2Zyk7XG4gICAgcmV0dXJuIHsgLi4ucmVzLCBjdXJyZW50VmFsdWU6IGVzdCwgaXNCb2R5d2VpZ2h0OiBmYWxzZSwgdW5pdDogXCJrZ1wiLCBkaXNwbGF5TGFiZWw6IFwiRXN0LiAxUk1cIiB9O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc1N0cmVuZ3RoU3RhbmRhcmQobmFtZSkge1xuICBjb25zdCBzdGQgPSBhd2FpdCBnZXRTdHJlbmd0aFN0YW5kYXJkKG5hbWUpO1xuICByZXR1cm4gc3RkICE9PSBudWxsICYmIHN0ZC5oYXNWYWxpZERhdGE7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gV09SS09VVCBEQVRBIFx1MjAxNCBQUiBsb29rdXAsIHByZXZpb3VzIGV4ZXJjaXNlIGxvYWRpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBnZXRFeGVyY2lzZVBSKG5hbWUpIHtcbiAgY29uc3Qgc3RkID0gYXdhaXQgZ2V0U3RyZW5ndGhTdGFuZGFyZChuYW1lKTtcbiAgY29uc3QgaXNCVyA9IHN0ZD8uaXNCb2R5d2VpZ2h0IHx8IGZhbHNlO1xuICBjb25zdCBmaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gIGxldCBiZXN0ID0gbnVsbCwgYmVzdFYgPSAwO1xuICBmb3IgKGNvbnN0IGYgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YShmLnBhdGgpO1xuICAgIGlmIChmbT8uZXhlcmNpc2VzICYmIEFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSAmJiBmbS5Xb3Jrb3V0ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBleCA9IGZtLmV4ZXJjaXNlcy5maW5kKChlKSA9PiBlLm5hbWUgPT09IG5hbWUpO1xuICAgICAgaWYgKGV4Py5zZXRzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2V0IG9mIGV4LnNldHMpIHtcbiAgICAgICAgICBpZiAoIXNldC5pc1dhcm11cCAmJiBzZXQuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoaXNCVykge1xuICAgICAgICAgICAgICBpZiAoc2V0LnJlcHMgPiBiZXN0VikgeyBiZXN0ViA9IHNldC5yZXBzOyBiZXN0ID0geyAuLi5zZXQsIGRhdGU6IGYuYmFzZW5hbWUsIHByVmFsdWU6IGJlc3RWLCBpc0JvZHl3ZWlnaHQ6IHRydWUgfTsgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZXQud2VpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICBjb25zdCBlc3QgPSBjYWxjdWxhdGUxUk0oc2V0LndlaWdodCwgc2V0LnJlcHMpO1xuICAgICAgICAgICAgICBpZiAoZXN0ID4gYmVzdFYpIHsgYmVzdFYgPSBlc3Q7IGJlc3QgPSB7IC4uLnNldCwgZGF0ZTogZi5iYXNlbmFtZSwgZXN0aW1hdGVkMVJNOiBlc3QsIHByVmFsdWU6IGVzdCwgaXNCb2R5d2VpZ2h0OiBmYWxzZSB9OyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0O1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0V29ya291dEZvck11c2NsZUdyb3VwKG11c2NsZUdyb3VwKSB7XG4gIGNvbnN0IGZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLmJhc2VuYW1lLmxvY2FsZUNvbXBhcmUoYS5iYXNlbmFtZSkpO1xuICBmb3IgKGNvbnN0IGYgb2YgZmlsZXMpIHtcbiAgICBpZiAoZi5wYXRoID09PSBmaWxlLnBhdGgpIGNvbnRpbnVlOyAvLyBza2lwIGN1cnJlbnQgbm90ZVxuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKGYucGF0aCk7XG4gICAgaWYgKGZtPy5leGVyY2lzZXMgJiYgQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSB7XG4gICAgICBjb25zdCByZWxldmFudCA9IGZtLmV4ZXJjaXNlcy5maWx0ZXIoZXggPT4gZXgubXVzY2xlID09PSBtdXNjbGVHcm91cCB8fCBleC5tdXNjbGVHcm91cCA9PT0gbXVzY2xlR3JvdXApO1xuICAgICAgaWYgKHJlbGV2YW50Lmxlbmd0aCA+IDApIHJldHVybiB7IGRhdGU6IGYuYmFzZW5hbWUsIGV4ZXJjaXNlczogcmVsZXZhbnQgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGxvYWRQcmV2aW91c0V4ZXJjaXNlcyhzZWxlY3RlZE11c2NsZUdyb3Vwcykge1xuICBjb25zdCBleGVyY2lzZXNBcnJheSA9IFtdO1xuICBmb3IgKGNvbnN0IG11c2NsZSBvZiBzZWxlY3RlZE11c2NsZUdyb3Vwcykge1xuICAgIGNvbnN0IGxhc3RXb3Jrb3V0ID0gZ2V0TGFzdFdvcmtvdXRGb3JNdXNjbGVHcm91cChtdXNjbGUpO1xuICAgIGlmIChsYXN0V29ya291dCkge1xuICAgICAgZm9yIChjb25zdCBleCBvZiBsYXN0V29ya291dC5leGVyY2lzZXMpIHtcbiAgICAgICAgZXhlcmNpc2VzQXJyYXkucHVzaCh7XG4gICAgICAgICAgbmFtZTogZXgubmFtZSxcbiAgICAgICAgICBtdXNjbGU6IG11c2NsZSxcbiAgICAgICAgICBtdXNjbGVHcm91cDogbXVzY2xlLFxuICAgICAgICAgIHNldHM6IGV4LnNldHMgPyBleC5zZXRzLm1hcChzID0+ICh7XG4gICAgICAgICAgICB3ZWlnaHQ6IHMud2VpZ2h0IHx8IDAsXG4gICAgICAgICAgICByZXBzOiBzLnJlcHMgfHwgMTAsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaXNXYXJtdXA6IHMuaXNXYXJtdXAgfHwgZmFsc2VcbiAgICAgICAgICB9KSkgOiBbeyB3ZWlnaHQ6IDAsIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBleGVyY2lzZXNBcnJheTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTQVZFIFNUQVRFXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gc2F2ZVN0YXRlKCkge1xuICBhd2FpdCBzZXRNdWx0aXBsZURhdGEoe1xuICAgIGV4ZXJjaXNlczogZXhlcmNpc2VzLFxuICAgIGN1cnJlbnRNdXNjbGVJbmRleDogY3VycmVudE11c2NsZUluZGV4LFxuICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBNT0RBTCBTWVNURU1cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5sZXQgYWN0aXZlTW9kYWwgPSBudWxsO1xuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICBpZiAoIWFjdGl2ZU1vZGFsKSByZXR1cm47XG4gIGFjdGl2ZU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoYWN0aXZlTW9kYWw/LnBhcmVudE5vZGUpIGFjdGl2ZU1vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWN0aXZlTW9kYWwpO1xuICAgIGFjdGl2ZU1vZGFsID0gbnVsbDtcbiAgfSwgNTAwKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kYWwodGl0bGUsIGNvbnRlbnRCdWlsZGVyKSB7XG4gIGlmIChhY3RpdmVNb2RhbCkgeyBhY3RpdmVNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2ZU1vZGFsKTsgYWN0aXZlTW9kYWwgPSBudWxsOyB9XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWwuY2xhc3NOYW1lID0gXCJvdHctbW9kYWwtb3ZlcmxheVwiO1xuICBhY3RpdmVNb2RhbCA9IG1vZGFsO1xuICBjb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbENvbnRlbnQuY2xhc3NOYW1lID0gXCJvdHctbW9kYWwtY29udGVudFwiO1xuICBtb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpO1xuICBhZGRDb3JuZXJzKG1vZGFsQ29udGVudCwgVEhFTUUuY29sb3IpO1xuICBpZiAodGl0bGUpIHtcbiAgICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHQudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICB0LnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjA7Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3BhY2l0eTowLjg7YDtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQodCk7XG4gICAgY29uc3QgZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjYwcHg7aGVpZ2h0OjFweDtiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCg5MGRlZyx0cmFuc3BhcmVudCwke1RIRU1FLmNvbG9yfSx0cmFuc3BhcmVudCk7bWFyZ2luOjAgYXV0byAxMnB4O2A7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKGQpO1xuICB9XG4gIGNvbnRlbnRCdWlsZGVyKG1vZGFsQ29udGVudCk7XG4gIG1vZGFsLm9uY2xpY2sgPSAoZSkgPT4geyBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSBjbG9zZU1vZGFsKCk7IH07XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xuICByZXR1cm4gbW9kYWw7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUE9TVC1DT01QTEVUSU9OIE5BVklHQVRJT05cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBnZXRSZXR1cm5EZXN0aW5hdGlvbigpIHtcbiAgLy8gTG9vayB1cCB0aGUgY3VycmVudCBhY3Rpdml0eSdzIGNvbmZpZyBmcm9tIHBsdWdpbiBzZXR0aW5nc1xuICBjb25zdCBhY3Rpdml0eUlkID0gZ2V0RGF0YShcImFjdGl2aXR5XCIpO1xuICBjb25zdCBhY3Rpdml0aWVzID0gY3R4LnBsdWdpbj8uc2V0dGluZ3M/LmFjdGl2aXRpZXM7XG4gIGlmIChhY3Rpdml0aWVzICYmIGFjdGl2aXR5SWQpIHtcbiAgICBjb25zdCBhY3RDb25maWcgPSBhY3Rpdml0aWVzLmZpbmQoYSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoYWN0Q29uZmlnPy5jb21wbGV0aW9uUmV0dXJuVG8pIHJldHVybiBhY3RDb25maWcuY29tcGxldGlvblJldHVyblRvO1xuICB9XG4gIHJldHVybiBcImRhc2hib2FyZFwiOyAvLyBkZWZhdWx0XG59XG5cbmZ1bmN0aW9uIG5hdmlnYXRlQWZ0ZXJDb21wbGV0aW9uKCkge1xuICBjb25zdCBkZXN0ID0gZ2V0UmV0dXJuRGVzdGluYXRpb24oKTtcbiAgaWYgKGRlc3QgPT09IFwic3RheVwiKSByZXR1cm47IC8vIGRvIG5vdGhpbmcsIHN0YXkgb24gY29tcGxldGlvbiBzdW1tYXJ5XG4gIGlmIChkZXN0ID09PSBcImRhc2hib2FyZFwiKSB7XG4gICAgLy8gVXNlIE9sZW4ncyBidWlsdC1pbiBkYXNoYm9hcmQgYWN0aXZhdGlvblxuICAgIGlmIChjdHgucGx1Z2luPy5hY3RpdmF0ZURhc2hib2FyZFZpZXcpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gY3R4LnBsdWdpbi5hY3RpdmF0ZURhc2hib2FyZFZpZXcoKSwgNjAwKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChkZXN0ID09PSBcImhvbWVwYWdlXCIpIHtcbiAgICAvLyBPcGVuIHRoZSBnbG9iYWwgaG9tZXBhZ2UgZmlsZSBkZWZpbmVkIGluIFByb2ZpbGUgc2V0dGluZ3NcbiAgICBjb25zdCBob21lcGFnZVBhdGggPSBjdHgucGx1Z2luPy5zZXR0aW5ncz8uaG9tZXBhZ2U7XG4gICAgaWYgKCFob21lcGFnZVBhdGgpIHsgbm90aWNlKFwiTm8gaG9tZXBhZ2Ugc2V0IFx1MjAxNCBnbyB0byBPbGVuIFNldHRpbmdzID4gUHJvZmlsZSB0byBkZWZpbmUgb25lLlwiKTsgcmV0dXJuOyB9XG4gICAgY29uc3QgdGFyZ2V0RmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoaG9tZXBhZ2VQYXRoKTtcbiAgICBpZiAodGFyZ2V0RmlsZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBhcHAud29ya3NwYWNlLmdldExlYWYoZmFsc2UpLm9wZW5GaWxlKHRhcmdldEZpbGUpLCA2MDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBub3RpY2UoXCJIb21lcGFnZSBmaWxlIG5vdCBmb3VuZDogXCIgKyBob21lcGFnZVBhdGgpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBGSU5JU0ggV09SS09VVFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGZpbmlzaFdvcmtvdXQodHlwZSkge1xuICBhd2FpdCBzZXRNdWx0aXBsZURhdGEoe1xuICAgIFdvcmtvdXQ6IHRydWUsXG4gICAgXCJXb3Jrb3V0LVR5cGVcIjogdHlwZSxcbiAgICBUaW1lc3RhbXA6IG1vbWVudCgpLmZvcm1hdCgpLFxuICAgIGV4ZXJjaXNlczogZXhlcmNpc2VzLFxuICAgIGN1cnJlbnRNdXNjbGVJbmRleDogY3VycmVudE11c2NsZUluZGV4LFxuICB9KTtcbiAgbm90aWNlKFwiV29ya291dCBsb2dnZWQgYXMgXCIgKyAodHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIgPyBcIkRpc2NpcGxpbmUgV2luXCIgOiBcIkZsb3cgU3RhdGVcIikgKyBcIiFcIik7XG4gIG5hdmlnYXRlQWZ0ZXJDb21wbGV0aW9uKCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIG9wZW5GaW5pc2hNb2RhbCgpIHtcbiAgLy8gQnVpbGQgc2Vzc2lvbiBhbmFseXRpY3MgZGF0YVxuICBjb25zdCBzdW1tYXJ5RGF0YSA9IFtdO1xuICBmb3IgKGNvbnN0IGV4IG9mIGV4ZXJjaXNlcykge1xuICAgIGNvbnN0IGNvbXBsZXRlZCA9IGV4LnNldHMuZmlsdGVyKHMgPT4gIXMuaXNXYXJtdXAgJiYgcy5jb21wbGV0ZWQpO1xuICAgIGlmIChjb21wbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcHIgPSBhd2FpdCBnZXRFeGVyY2lzZVBSKGV4Lm5hbWUpO1xuICAgICAgbGV0IGJlc3RXID0gMCwgYmVzdFIgPSAwLCBtYXhSID0gMCwgc2Vzc2lvbkJlc3QgPSAwO1xuICAgICAgZm9yIChjb25zdCBzIG9mIGNvbXBsZXRlZCkge1xuICAgICAgICBpZiAocy5yZXBzID4gbWF4UikgbWF4UiA9IHMucmVwcztcbiAgICAgICAgaWYgKHMud2VpZ2h0ID4gMCkge1xuICAgICAgICAgIGNvbnN0IGVzdCA9IGNhbGN1bGF0ZTFSTShzLndlaWdodCwgcy5yZXBzKTtcbiAgICAgICAgICBpZiAoZXN0ID4gc2Vzc2lvbkJlc3QpIHsgc2Vzc2lvbkJlc3QgPSBlc3Q7IGJlc3RXID0gcy53ZWlnaHQ7IGJlc3RSID0gcy5yZXBzOyB9XG4gICAgICAgIH0gZWxzZSBpZiAocy5yZXBzID4gc2Vzc2lvbkJlc3QpIHsgc2Vzc2lvbkJlc3QgPSBzLnJlcHM7IGJlc3RSID0gcy5yZXBzOyB9XG4gICAgICB9XG4gICAgICBjb25zdCBzbCA9IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXgubmFtZSwgYmVzdFcsIGJlc3RSLCBtYXhSKTtcbiAgICAgIHN1bW1hcnlEYXRhLnB1c2goeyBuYW1lOiBleC5uYW1lLCBtdXNjbGU6IGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCwgYmVzdFcsIGJlc3RSLCBtYXhSLCBzZXNzaW9uQmVzdCwgc2wsIHByLCBjb21wbGV0ZWRTZXRzOiBjb21wbGV0ZWQubGVuZ3RoLCB0b3RhbFNldHM6IGV4LnNldHMuZmlsdGVyKHMgPT4gIXMuaXNXYXJtdXApLmxlbmd0aCB9KTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGVNb2RhbChudWxsLCAoY29udGVudCkgPT4ge1xuICAgIC8vIFNjcm9sbGFibGUgYXJlYVxuICAgIGNvbnN0IHNjcm9sbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2Nyb2xsLnN0eWxlLmNzc1RleHQgPSBcIm92ZXJmbG93LXk6YXV0bztkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxNnB4O2ZsZXg6MTttYXgtaGVpZ2h0Ojcwdmg7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChzY3JvbGwpO1xuXG4gICAgLy8gVGl0bGVcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiV09SS09VVCBDT01QTEVURVwiO1xuICAgIHRpdGxlLnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjA7Y29sb3I6JHtUSEVNRS5zeXN0ZW1HcmVlbn07Zm9udC1zaXplOjE2cHg7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LWFsaWduOmNlbnRlcjtgO1xuICAgIHNjcm9sbC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBTZXNzaW9uIHN1bW1hcnkgY2FyZHNcbiAgICBpZiAoc3VtbWFyeURhdGEubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3Qgc2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlYy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxMnB4O1wiO1xuICAgICAgc2Nyb2xsLmFwcGVuZENoaWxkKHNlYyk7XG5cbiAgICAgIGNvbnN0IHNlY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHNlY1RpdGxlLnRleHRDb250ZW50ID0gXCJTRVNTSU9OIFNVTU1BUllcIjtcbiAgICAgIHNlY1RpdGxlLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC1hbGlnbjpjZW50ZXI7YDtcbiAgICAgIHNlYy5hcHBlbmRDaGlsZChzZWNUaXRsZSk7XG5cbiAgICAgIGZvciAoY29uc3QgZXggb2Ygc3VtbWFyeURhdGEpIHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuc3R5bGUuY3NzVGV4dCA9IGBwYWRkaW5nOjE0cHg7YmFja2dyb3VuZDojMGMwYzBjO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgICAgICAgc2VjLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgICAgIC8vIEV4ZXJjaXNlIG5hbWUgKyBzdHJlbmd0aCBiYWRnZVxuICAgICAgICBjb25zdCBoZHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBoZHIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjEwcHg7XCI7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaGRyKTtcblxuICAgICAgICBjb25zdCBubSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBubS50ZXh0Q29udGVudCA9IGV4Lm5hbWU7XG4gICAgICAgIG5tLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc2l6ZToxNHB4O2A7XG4gICAgICAgIGhkci5hcHBlbmRDaGlsZChubSk7XG5cbiAgICAgICAgaWYgKGV4LnNsKSB7XG4gICAgICAgICAgY29uc3QgbGkgPSBTVFJFTkdUSF9MRVZFTFNbZXguc2wubGV2ZWxdO1xuICAgICAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O3BhZGRpbmc6NHB4IDEwcHg7YmFja2dyb3VuZDoke2V4LnNsLmNvbG9yfTIwO2JvcmRlcjoxcHggc29saWQgJHtleC5zbC5jb2xvcn01MDtjb2xvcjoke2V4LnNsLmNvbG9yfTtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MXB4O2A7XG4gICAgICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSAobGk/Lmljb24gfHwgXCJcXHUyNUNCXCIpICsgXCIgXCIgKyBleC5zbC5sZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIGhkci5hcHBlbmRDaGlsZChiYWRnZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZXN0IHNldCArIGVzdGltYXRlZCAxUk1cbiAgICAgICAgY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzdGF0cy5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjttYXJnaW4tYm90dG9tOjhweDtmb250LXNpemU6MTJweDtgO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHN0YXRzKTtcblxuICAgICAgICBjb25zdCBzZXRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNldEluZm8udGV4dENvbnRlbnQgPSBleC5zbD8uaXNCb2R5d2VpZ2h0ID8gXCJCZXN0OiBcIiArIGV4Lm1heFIgKyBcIiByZXBzXCIgOiBcIkJlc3Q6IFwiICsgZXguYmVzdFcgKyBcImtnIFxcdTAwRDcgXCIgKyBleC5iZXN0UjtcbiAgICAgICAgc2V0SW5mby5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07YDtcbiAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQoc2V0SW5mbyk7XG5cbiAgICAgICAgaWYgKGV4LnNsKSB7XG4gICAgICAgICAgY29uc3Qgcm1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgcm1JbmZvLnRleHRDb250ZW50ID0gZXguc2wuZGlzcGxheUxhYmVsICsgXCI6IFwiICsgZXguc2wuY3VycmVudFZhbHVlICsgZXguc2wudW5pdDtcbiAgICAgICAgICBybUluZm8uc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXdlaWdodDo2MDA7YDtcbiAgICAgICAgICBzdGF0cy5hcHBlbmRDaGlsZChybUluZm8pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0cyBjb21wbGV0ZWRcbiAgICAgICAgY29uc3Qgc2V0c0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZXRzSW5mby5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZToxMXB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bWFyZ2luLWJvdHRvbTo4cHg7YDtcbiAgICAgICAgc2V0c0luZm8udGV4dENvbnRlbnQgPSBleC5jb21wbGV0ZWRTZXRzICsgXCIvXCIgKyBleC50b3RhbFNldHMgKyBcIiB3b3JraW5nIHNldHMgY29tcGxldGVkXCI7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc2V0c0luZm8pO1xuXG4gICAgICAgIC8vIFBSIGNvbXBhcmlzb25cbiAgICAgICAgaWYgKGV4LnByKSB7XG4gICAgICAgICAgY29uc3QgcHJDID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBwckMuc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTFweDttYXJnaW4tYm90dG9tOjhweDtwYWRkaW5nOjZweCA4cHg7YDtcbiAgICAgICAgICBjb25zdCBjdiA9IGV4LnNsPy5jdXJyZW50VmFsdWUgfHwgZXguc2Vzc2lvbkJlc3Q7XG4gICAgICAgICAgaWYgKGN2ID4gZXgucHIucHJWYWx1ZSkge1xuICAgICAgICAgICAgcHJDLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTIyLDE1NCwxMjUsMC4xNSlcIjtcbiAgICAgICAgICAgIHByQy5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjojN2E5YTdkO2ZvbnQtd2VpZ2h0OjcwMDtcIj5cXHVEODNDXFx1REY4OSBORVcgUFIhPC9zcGFuPiA8c3BhbiBzdHlsZT1cImNvbG9yOicgKyBUSEVNRS5jb2xvck11dGVkICsgJztcIj5QcmV2aW91czogJyArIGV4LnByLnByVmFsdWUgKyAnIFxcdTIxOTIgTm93OiAnICsgY3YgKyAnPC9zcGFuPic7XG4gICAgICAgICAgfSBlbHNlIGlmIChjdiA9PT0gZXgucHIucHJWYWx1ZSkge1xuICAgICAgICAgICAgcHJDLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTY4LDE1Miw5NiwwLjEpXCI7XG4gICAgICAgICAgICBwckMuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6I2E4OTg2MDtcIj5cXHVEODNDXFx1REZDNiBNYXRjaGVkIFBSOjwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgVEhFTUUuY29sb3JNdXRlZCArICc7XCI+JyArIGV4LnByLnByVmFsdWUgKyAnPC9zcGFuPic7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByQy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE2OCwxNTIsOTYsMC4xKVwiO1xuICAgICAgICAgICAgcHJDLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT1cImNvbG9yOicgKyBUSEVNRS5jb2xvck11dGVkICsgJztcIj5cXHVEODNDXFx1REZDNiBQUjogJyArIGV4LnByLnByVmFsdWUgKyAnPC9zcGFuPiA8c3BhbiBzdHlsZT1cImNvbG9yOiM2YTZhNmE7XCI+KHRvZGF5OiAnICsgY3YgKyAnKTwvc3Bhbj4nO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByQyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcm9ncmVzcyBiYXIgdG8gbmV4dCBzdHJlbmd0aCBsZXZlbFxuICAgICAgICBpZiAoZXguc2wgJiYgZXguc2wubmV4dFRhcmdldCkge1xuICAgICAgICAgIGNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBwYi5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYXJcIjtcbiAgICAgICAgICBwYi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjhweFwiO1xuICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocGIpO1xuICAgICAgICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGZpbGwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgICAgICAgIGZpbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWluKDEwMCwgZXguc2wucHJvZ3Jlc3MpfSU7YmFja2dyb3VuZDoke2V4LnNsLmNvbG9yfTtgO1xuICAgICAgICAgIHBiLmFwcGVuZENoaWxkKGZpbGwpO1xuICAgICAgICAgIGNvbnN0IHRpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICB0aS5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtmb250LXNpemU6OXB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bWFyZ2luLXRvcDo0cHg7YDtcbiAgICAgICAgICB0aS5pbm5lckhUTUwgPSBcIjxzcGFuPkN1cnJlbnQ6IFwiICsgZXguc2wuY3VycmVudFZhbHVlICsgZXguc2wudW5pdCArIFwiPC9zcGFuPjxzcGFuPk5leHQ6IFwiICsgTWF0aC5yb3VuZChleC5zbC5uZXh0VGFyZ2V0KSArIGV4LnNsLnVuaXQgKyBcIjwvc3Bhbj5cIjtcbiAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFwiSG93IGRpZCBpdCBmZWVsP1wiIHNlY3Rpb25cbiAgICBjb25zdCBmZWVsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgZmVlbFRpdGxlLnRleHRDb250ZW50ID0gXCJIb3cgZGlkIGl0IGZlZWw/XCI7XG4gICAgZmVlbFRpdGxlLnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjhweCAwIDAgMDtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTNweDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO29wYWNpdHk6MC44O2A7XG4gICAgc2Nyb2xsLmFwcGVuZENoaWxkKGZlZWxUaXRsZSk7XG5cbiAgICBjb25zdCBidG5zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5zLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEwcHg7XCI7XG4gICAgc2Nyb2xsLmFwcGVuZENoaWxkKGJ0bnMpO1xuXG4gICAgLy8gRGlzY2lwbGluZSBidXR0b25cbiAgICBjb25zdCBkaXNjQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXNjQnRuLmNsYXNzTmFtZSA9IFwib3R3LWZlZWwtYnRuXCI7XG4gICAgZGlzY0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gYDNweCBzb2xpZCAke1RIRU1FLmNvbG9yRGlzY2lwbGluZX1gO1xuICAgIGRpc2NCdG4uaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7d2lkdGg6NDBweDt0ZXh0LWFsaWduOmNlbnRlcjtcIj5cXHVEODNEXFx1REM4RTwvc3Bhbj48ZGl2IHN0eWxlPVwiZmxleDoxO1wiPjxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yRGlzY2lwbGluZX07Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO2xldHRlci1zcGFjaW5nOjEuNXB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjRweDtcIj5EaXNjaXBsaW5lPC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiM1YTVhNWE7Zm9udC1zaXplOjExcHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+UHVzaGVkIHRocm91Z2ggcmVzaXN0YW5jZTwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojNGE0MDMwO2ZvbnQtc2l6ZToxOHB4O29wYWNpdHk6MC41O1wiPlxcdTIxOTI8L2Rpdj5gO1xuICAgIGRpc2NCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY2xvc2VNb2RhbCgpOyBhd2FpdCBmaW5pc2hXb3Jrb3V0KFwiZGlzY2lwbGluZVwiKTsgfTtcbiAgICBidG5zLmFwcGVuZENoaWxkKGRpc2NCdG4pO1xuXG4gICAgLy8gRmxvdyBidXR0b25cbiAgICBjb25zdCBmbG93QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmbG93QnRuLmNsYXNzTmFtZSA9IFwib3R3LWZlZWwtYnRuXCI7XG4gICAgZmxvd0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gYDNweCBzb2xpZCAke1RIRU1FLmNvbG9yRmxvd31gO1xuICAgIGZsb3dCdG4uaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjI0cHg7d2lkdGg6NDBweDt0ZXh0LWFsaWduOmNlbnRlcjtcIj5cXHVEODNDXFx1REYwQTwvc3Bhbj48ZGl2IHN0eWxlPVwiZmxleDoxO1wiPjxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yRmxvd307Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO2xldHRlci1zcGFjaW5nOjEuNXB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjRweDtcIj5GbG93PC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiM1YTVhNWE7Zm9udC1zaXplOjExcHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+RmVsdCBuYXR1cmFsIGFuZCBlZmZvcnRsZXNzPC9kaXY+PC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiMzMDQwNTA7Zm9udC1zaXplOjE4cHg7b3BhY2l0eTowLjU7XCI+XFx1MjE5MjwvZGl2PmA7XG4gICAgZmxvd0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjbG9zZU1vZGFsKCk7IGF3YWl0IGZpbmlzaFdvcmtvdXQoXCJmbG93XCIpOyB9O1xuICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZmxvd0J0bik7XG4gIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFERCBFWEVSQ0lTRSBNT0RBTFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIG9wZW5BZGRFeGVyY2lzZU1vZGFsKG11c2NsZSkge1xuICBjcmVhdGVNb2RhbChcIkFkZCBFeGVyY2lzZSAtIFwiICsgbXVzY2xlLCAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRXhlcmNpc2UgbmFtZS4uLlwiO1xuICAgIG5hbWVJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjEwMCU7cGFkZGluZzoxMnB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IHdhcm11cExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3YXJtdXBMYWJlbC50ZXh0Q29udGVudCA9IFwiSW5jbHVkZSB3YXJtdXAgc2V0cz9cIjtcbiAgICB3YXJtdXBMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDoxMnB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3YXJtdXBMYWJlbCk7XG5cbiAgICBsZXQgaW5jV2FybXVwID0gdHJ1ZTtcbiAgICBjb25zdCB3YXJtdXBSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdhcm11cFJvdy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7Z2FwOjhweDttYXJnaW4tdG9wOjhweDtcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdhcm11cFJvdyk7XG5cbiAgICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHllc0J0bi50ZXh0Q29udGVudCA9IFwiWWVzIChzdWdnZXN0ZWQpXCI7XG4gICAgeWVzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIHllc0J0bi5zdHlsZS5jc3NUZXh0ICs9IGBmbGV4OjE7YmFja2dyb3VuZDpyZ2JhKDE1NCwxNDAsMTIyLDAuMik7Ym9yZGVyLWNvbG9yOiR7VEhFTUUuY29sb3J9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2A7XG4gICAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5vQnRuLnRleHRDb250ZW50ID0gXCJOb1wiO1xuICAgIG5vQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIG5vQnRuLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgICB5ZXNCdG4ub25jbGljayA9ICgpID0+IHsgaW5jV2FybXVwID0gdHJ1ZTsgeWVzQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTU0LDE0MCwxMjIsMC4yKVwiOyB5ZXNCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvcjsgbm9CdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzBmMGYwZlwiOyBub0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFRIRU1FLmNvbG9yQm9yZGVyOyB9O1xuICAgIG5vQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGluY1dhcm11cCA9IGZhbHNlOyBub0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMilcIjsgbm9CdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvcjsgeWVzQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwZjBmMGZcIjsgeWVzQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3JCb3JkZXI7IH07XG4gICAgd2FybXVwUm93LmFwcGVuZENoaWxkKHllc0J0bik7XG4gICAgd2FybXVwUm93LmFwcGVuZENoaWxkKG5vQnRuKTtcblxuICAgIGNvbnN0IHdlaWdodExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWlnaHRMYWJlbC50ZXh0Q29udGVudCA9IFwiV29ya2luZyB3ZWlnaHQgKGtnKSAtIDAgZm9yIGJvZHl3ZWlnaHRcIjtcbiAgICB3ZWlnaHRMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDoxMnB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWlnaHRMYWJlbCk7XG5cbiAgICBjb25zdCB3ZWlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB3ZWlnaHRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICB3ZWlnaHRJbnB1dC5wbGFjZWhvbGRlciA9IFwiMFwiO1xuICAgIHdlaWdodElucHV0LnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MTAwJTtwYWRkaW5nOjEycHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi10b3A6OHB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWlnaHRJbnB1dCk7XG5cbiAgICBjb25zdCBidG5Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0blJvdy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7Z2FwOjEycHg7bWFyZ2luLXRvcDoxNnB4O1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuUm93KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gICAgY2FuY2VsQnRuLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IGNsb3NlTW9kYWwoKTtcbiAgICBidG5Sb3cuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgRXhlcmNpc2VcIjtcbiAgICBhZGRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICAgIGFkZEJ0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgYWRkQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghbmFtZSkgeyBub3RpY2UoXCJQbGVhc2UgZW50ZXIgYW4gZXhlcmNpc2UgbmFtZVwiKTsgcmV0dXJuOyB9XG4gICAgICBjb25zdCB3dyA9IHBhcnNlRmxvYXQod2VpZ2h0SW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBjb25zdCBzZXRzID0gW107XG4gICAgICBpZiAoaW5jV2FybXVwICYmIHd3ID4gMCkge1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjUpLCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IHRydWUgfSk7XG4gICAgICAgIHNldHMucHVzaCh7IHdlaWdodDogTWF0aC5yb3VuZCh3dyAqIDAuNyksIHJlcHM6IDYsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjg1KSwgcmVwczogMywgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IHd3LCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiB3dywgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICAgIHNldHMucHVzaCh7IHdlaWdodDogd3csIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgICBleGVyY2lzZXMucHVzaCh7IG5hbWUsIG11c2NsZSwgbXVzY2xlR3JvdXA6IG11c2NsZSwgc2V0cyB9KTtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICAgICAgcmVuZGVyKCk7XG4gICAgfTtcbiAgICBidG5Sb3cuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gbmFtZUlucHV0LmZvY3VzKCksIDEwMCk7XG4gIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFTkRFUjogU0VUIFJPV1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIHJlbmRlclNldChzZXRzQ29udGFpbmVyLCBzZXQsIHNldElkeCwgZXgsIHdhcm11cFJlZnMpIHtcbiAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm93LmNsYXNzTmFtZSA9IFwib3R3LXNldC1yb3dcIiArIChzZXQuY29tcGxldGVkID8gXCIgY29tcGxldGVkXCIgOiBcIlwiKTtcbiAgc2V0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChyb3cpO1xuICBjb25zdCByZWZzID0geyB3ZWlnaHRJbnB1dDogbnVsbCB9O1xuXG4gIC8vIENoZWNrYm94XG4gIGNvbnN0IGNiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2IuY2xhc3NOYW1lID0gXCJvdHctY2hlY2tib3hcIiArIChzZXQuY29tcGxldGVkID8gXCIgY2hlY2tlZFwiIDogXCJcIik7XG4gIGNiLnRleHRDb250ZW50ID0gc2V0LmNvbXBsZXRlZCA/IFwiXFx1MjcxM1wiIDogXCJcIjtcbiAgY2Iub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBzZXQuY29tcGxldGVkID0gIXNldC5jb21wbGV0ZWQ7XG4gICAgY2IuY2xhc3NOYW1lID0gXCJvdHctY2hlY2tib3hcIiArIChzZXQuY29tcGxldGVkID8gXCIgY2hlY2tlZFwiIDogXCJcIik7XG4gICAgY2IudGV4dENvbnRlbnQgPSBzZXQuY29tcGxldGVkID8gXCJcXHUyNzEzXCIgOiBcIlwiO1xuICAgIHJvdy5jbGFzc05hbWUgPSBcIm90dy1zZXQtcm93XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNvbXBsZXRlZFwiIDogXCJcIik7XG4gICAgYXdhaXQgc2F2ZVN0YXRlKCk7XG4gIH07XG4gIHJvdy5hcHBlbmRDaGlsZChjYik7XG5cbiAgLy8gTWlkZGxlOiB3ZWlnaHQgKyByZXBzXG4gIGNvbnN0IG1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pZC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O2ZsZXgtd3JhcDp3cmFwO1wiO1xuICByb3cuYXBwZW5kQ2hpbGQobWlkKTtcblxuICAvLyBXZWlnaHQgaW5wdXRcbiAgY29uc3Qgd1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3V3JhcC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo0cHg7XCI7XG4gIG1pZC5hcHBlbmRDaGlsZCh3V3JhcCk7XG4gIGNvbnN0IHdJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgd0lucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICB3SW5wdXQudmFsdWUgPSBzZXQud2VpZ2h0O1xuICB3SW5wdXQuY2xhc3NOYW1lID0gXCJvdHctaW5wdXRcIjtcbiAgY29uc3QgZmlyc3RXID0gZ2V0Rmlyc3RXb3JraW5nU2V0SW5kZXgoZXguc2V0cyk7XG4gIGNvbnN0IGlzRmlyc3QgPSAhc2V0LmlzV2FybXVwICYmIHNldElkeCA9PT0gZmlyc3RXO1xuICB3SW5wdXQub25jaGFuZ2UgPSBhc3luYyAoZSkgPT4ge1xuICAgIGNvbnN0IG53ID0gcGFyc2VGbG9hdChlLnRhcmdldC52YWx1ZSkgfHwgMDtcbiAgICBzZXQud2VpZ2h0ID0gbnc7XG4gICAgaWYgKGlzRmlyc3QpIHtcbiAgICAgIHVwZGF0ZVdhcm11cFdlaWdodHMoZXgsIG53KTtcbiAgICAgIGNvbnN0IHdzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+IHMuaXNXYXJtdXApO1xuICAgICAgd2FybXVwUmVmcy5mb3JFYWNoKChpbnAsIGkpID0+IHsgaWYgKHdzW2ldKSBpbnAudmFsdWUgPSB3c1tpXS53ZWlnaHQ7IH0pO1xuICAgIH1cbiAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgfTtcbiAgd1dyYXAuYXBwZW5kQ2hpbGQod0lucHV0KTtcbiAgcmVmcy53ZWlnaHRJbnB1dCA9IHdJbnB1dDtcbiAgY29uc3Qga2dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBrZ0xhYmVsLnRleHRDb250ZW50ID0gXCJrZ1wiO1xuICBrZ0xhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTJweDtgO1xuICB3V3JhcC5hcHBlbmRDaGlsZChrZ0xhYmVsKTtcblxuICAvLyBSZXBzIGNvbnRyb2xzXG4gIGNvbnN0IHJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcldyYXAuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O1wiO1xuICBtaWQuYXBwZW5kQ2hpbGQocldyYXApO1xuICBjb25zdCBtaW51c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1pbnVzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWN0cmwtYnRuXCI7XG4gIG1pbnVzQnRuLnRleHRDb250ZW50ID0gXCJcXHUyMjEyXCI7XG4gIG1pbnVzQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGlmIChzZXQucmVwcyA+IDEpIHsgc2V0LnJlcHMtLTsgckRpc3AudGV4dENvbnRlbnQgPSBzZXQucmVwcyArIFwiXFx1MDBEN1wiOyBhd2FpdCBzYXZlU3RhdGUoKTsgfSB9O1xuICByV3JhcC5hcHBlbmRDaGlsZChtaW51c0J0bik7XG4gIGNvbnN0IHJEaXNwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHJEaXNwLnRleHRDb250ZW50ID0gc2V0LnJlcHMgKyBcIlxcdTAwRDdcIjtcbiAgckRpc3Auc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7bWluLXdpZHRoOjMwcHg7dGV4dC1hbGlnbjpjZW50ZXI7YDtcbiAgcldyYXAuYXBwZW5kQ2hpbGQockRpc3ApO1xuICBjb25zdCBwbHVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcGx1c0J0bi5jbGFzc05hbWUgPSBcIm90dy1jdHJsLWJ0blwiO1xuICBwbHVzQnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG4gIHBsdXNCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgc2V0LnJlcHMrKzsgckRpc3AudGV4dENvbnRlbnQgPSBzZXQucmVwcyArIFwiXFx1MDBEN1wiOyBhd2FpdCBzYXZlU3RhdGUoKTsgfTtcbiAgcldyYXAuYXBwZW5kQ2hpbGQocGx1c0J0bik7XG5cbiAgaWYgKHNldC5pc1dhcm11cCkge1xuICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYmFkZ2UuY2xhc3NOYW1lID0gXCJvdHctd2FybXVwLWJhZGdlXCI7XG4gICAgYmFkZ2UudGV4dENvbnRlbnQgPSBcIlxcdTI2QTEgV2FybXVwXCI7XG4gICAgbWlkLmFwcGVuZENoaWxkKGJhZGdlKTtcbiAgfVxuXG4gIC8vIERlbGV0ZSBzZXQgYnV0dG9uXG4gIGlmIChleC5zZXRzLmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBkZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1MDBEN1wiO1xuICAgIGRlbEJ0bi5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjI4cHg7aGVpZ2h0OjI4cHg7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6MXB4IHNvbGlkICMzYTI4Mjg7Y29sb3I6IzZhNGE0YTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTZweDtgO1xuICAgIGRlbEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBleC5zZXRzLnNwbGljZShzZXRJZHgsIDEpOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH07XG4gICAgcm93LmFwcGVuZENoaWxkKGRlbEJ0bik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBoLnN0eWxlLndpZHRoID0gXCIyOHB4XCI7XG4gICAgcm93LmFwcGVuZENoaWxkKHBoKTtcbiAgfVxuXG4gIHJldHVybiByZWZzO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFTkRFUjogRVhFUkNJU0UgQ0FSRFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlckV4ZXJjaXNlKGV4Q29udGFpbmVyLCBleCkge1xuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZC5jbGFzc05hbWUgPSBcIm90dy1jYXJkXCI7XG4gIGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICBhZGRDb3JuZXJzKGNhcmQsIFRIRU1FLmNvbG9yLCAxMik7XG5cbiAgY29uc3QgZXhIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBleEhlYWRlci5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpmbGV4LXN0YXJ0O21hcmdpbi1ib3R0b206MTJweDtwYWRkaW5nLWJvdHRvbToxMnB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoZXhIZWFkZXIpO1xuXG4gIGNvbnN0IGxlZnRDb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWZ0Q29sLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgZXhIZWFkZXIuYXBwZW5kQ2hpbGQobGVmdENvbCk7XG5cbiAgY29uc3QgZXhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgZXhUaXRsZS50ZXh0Q29udGVudCA9IGV4Lm5hbWU7XG4gIGV4VGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBtYXJnaW46MCAwIDhweCAwO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNnB4O2xldHRlci1zcGFjaW5nOjFweDtgO1xuICBsZWZ0Q29sLmFwcGVuZENoaWxkKGV4VGl0bGUpO1xuXG4gIC8vIFN0cmVuZ3RoIGxldmVsICsgUFIgaW5mb1xuICBjb25zdCBoYXNTdGQgPSBhd2FpdCBoYXNTdHJlbmd0aFN0YW5kYXJkKGV4Lm5hbWUpO1xuICBjb25zdCBwciA9IGF3YWl0IGdldEV4ZXJjaXNlUFIoZXgubmFtZSk7XG4gIGNvbnN0IHdvcmtpbmdTZXRzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+ICFzLmlzV2FybXVwKTtcbiAgbGV0IGJlc3RXID0gMCwgYmVzdFIgPSAwLCBtYXhSID0gMDtcbiAgd29ya2luZ1NldHMuZm9yRWFjaCgocykgPT4geyBpZiAocy5yZXBzID4gbWF4UikgbWF4UiA9IHMucmVwczsgaWYgKHMud2VpZ2h0ID4gYmVzdFcgfHwgKHMud2VpZ2h0ID09PSBiZXN0VyAmJiBzLnJlcHMgPiBiZXN0UikpIHsgYmVzdFcgPSBzLndlaWdodDsgYmVzdFIgPSBzLnJlcHM7IH0gfSk7XG5cbiAgaWYgKGhhc1N0ZCkge1xuICAgIGxldCBzbDtcbiAgICBpZiAocHIpIHsgc2wgPSBwci5pc0JvZHl3ZWlnaHQgPyBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIDAsIHByLnByVmFsdWUsIHByLnByVmFsdWUpIDogYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCBwci53ZWlnaHQsIHByLnJlcHMsIG51bGwpOyB9XG4gICAgZWxzZSBpZiAoYmVzdFcgPiAwIHx8IG1heFIgPiAwKSB7IHNsID0gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCBiZXN0VywgYmVzdFIsIG1heFIpOyB9XG4gICAgaWYgKHNsKSB7XG4gICAgICBjb25zdCBsaSA9IFNUUkVOR1RIX0xFVkVMU1tzbC5sZXZlbF07XG4gICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiYWRnZS5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYWRnZVwiO1xuICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCArPSBgYmFja2dyb3VuZDoke3NsLmNvbG9yfTI1O2JvcmRlcjoxcHggc29saWQgJHtzbC5jb2xvcn02MDtjb2xvcjoke3NsLmNvbG9yfTtgO1xuICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSAobGk/Lmljb24gfHwgXCJcXHUyNUNCXCIpICsgXCIgXCIgKyBzbC5sZXZlbC50b1VwcGVyQ2FzZSgpO1xuICAgICAgbGVmdENvbC5hcHBlbmRDaGlsZChiYWRnZSk7XG5cbiAgICAgIGNvbnN0IHJtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBybUluZm8uc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTFweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbi10b3A6NnB4O2A7XG4gICAgICBybUluZm8uaW5uZXJIVE1MID0gYDxzdHJvbmcgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yfVwiPiR7c2wuZGlzcGxheUxhYmVsfTogJHtzbC5jdXJyZW50VmFsdWV9JHtzbC51bml0fTwvc3Ryb25nPmA7XG4gICAgICBpZiAoc2wubmV4dFRhcmdldCkgcm1JbmZvLmlubmVySFRNTCArPSBgIFxcdTIxOTIgTmV4dDogJHtNYXRoLnJvdW5kKHNsLm5leHRUYXJnZXQpfSR7c2wudW5pdH1gO1xuICAgICAgbGVmdENvbC5hcHBlbmRDaGlsZChybUluZm8pO1xuXG4gICAgICBjb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBwYi5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYXJcIjtcbiAgICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQocGIpO1xuICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBmaWxsLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWZpbGxcIjtcbiAgICAgIGZpbGwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoke01hdGgubWluKDEwMCwgc2wucHJvZ3Jlc3MpfSU7YmFja2dyb3VuZDoke3NsLmNvbG9yfTtgO1xuICAgICAgcGIuYXBwZW5kQ2hpbGQoZmlsbCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHByKSB7XG4gICAgY29uc3QgcHJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByQm94LmNsYXNzTmFtZSA9IFwib3R3LXByLWJveFwiO1xuICAgIGNvbnN0IHByVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByVGl0bGUuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOjExcHg7Y29sb3I6I2E4OTg2MDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MXB4O1wiO1xuICAgIHByVGl0bGUudGV4dENvbnRlbnQgPSBwci5pc0JvZHl3ZWlnaHQgPyBcIlxcdUQ4M0NcXHVERkM2IEFMTC1USU1FIFBSOiBcIiArIHByLnByVmFsdWUgKyBcIiByZXBzXCIgOiBcIlxcdUQ4M0NcXHVERkM2IEFMTC1USU1FIFBSOiBcIiArIHByLmVzdGltYXRlZDFSTSArIFwia2cgKDFSTSlcIjtcbiAgICBwckJveC5hcHBlbmRDaGlsZChwclRpdGxlKTtcbiAgICBjb25zdCBwckRldGFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJEZXRhaWwuc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTBweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2A7XG4gICAgcHJEZXRhaWwudGV4dENvbnRlbnQgPSBwci5pc0JvZHl3ZWlnaHQgPyBcIkJlc3Q6IFwiICsgcHIucmVwcyArIFwiIHJlcHNcIiA6IFwiU2V0OiBcIiArIHByLndlaWdodCArIFwia2cgXFx1MDBENyBcIiArIHByLnJlcHMgKyBcIiByZXBzXCI7XG4gICAgcHJCb3guYXBwZW5kQ2hpbGQocHJEZXRhaWwpO1xuICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQocHJCb3gpO1xuICB9XG5cbiAgLy8gRGVsZXRlIGV4ZXJjaXNlIGJ1dHRvblxuICBjb25zdCBkZWxFeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGRlbEV4QnRuLnRleHRDb250ZW50ID0gXCJcXHVEODNEXFx1REREMVxcdUZFMEZcIjtcbiAgZGVsRXhCdG4uc3R5bGUuY3NzVGV4dCA9IFwiYmFja2dyb3VuZDp0cmFuc3BhcmVudDtib3JkZXI6bm9uZTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTRweDtvcGFjaXR5OjAuNTtcIjtcbiAgZGVsRXhCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY29uc3QgaWR4ID0gZXhlcmNpc2VzLmluZGV4T2YoZXgpOyBpZiAoaWR4ID4gLTEpIHsgZXhlcmNpc2VzLnNwbGljZShpZHgsIDEpOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH0gfTtcbiAgZXhIZWFkZXIuYXBwZW5kQ2hpbGQoZGVsRXhCdG4pO1xuXG4gIC8vIFNldHNcbiAgY29uc3Qgc2V0c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNldHNDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6NnB4O1wiO1xuICBjYXJkLmFwcGVuZENoaWxkKHNldHNDb250YWluZXIpO1xuICBjb25zdCB3YXJtdXBSZWZzID0gW107XG4gIGV4LnNldHMuZm9yRWFjaCgoc2V0LCBzZXRJZHgpID0+IHtcbiAgICBjb25zdCByZWZzID0gcmVuZGVyU2V0KHNldHNDb250YWluZXIsIHNldCwgc2V0SWR4LCBleCwgd2FybXVwUmVmcyk7XG4gICAgaWYgKHNldC5pc1dhcm11cCAmJiByZWZzLndlaWdodElucHV0KSB3YXJtdXBSZWZzLnB1c2gocmVmcy53ZWlnaHRJbnB1dCk7XG4gIH0pO1xuXG4gIC8vIEFkZCBzZXQgYnV0dG9uXG4gIGNvbnN0IGFkZFNldEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFNldEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBZGQgU2V0XCI7XG4gIGFkZFNldEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1kYXNoZWRcIjtcbiAgYWRkU2V0QnRuLnN0eWxlLmNzc1RleHQgKz0gXCJtYXJnaW4tdG9wOjhweDtwYWRkaW5nOjhweCAxMnB4O2ZvbnQtc2l6ZToxMnB4O1wiO1xuICBhZGRTZXRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBsYXN0ID0gZXguc2V0c1tleC5zZXRzLmxlbmd0aCAtIDFdIHx8IHsgd2VpZ2h0OiAwLCByZXBzOiAxMCB9O1xuICAgIGV4LnNldHMucHVzaCh7IHdlaWdodDogbGFzdC53ZWlnaHQsIHJlcHM6IGxhc3QucmVwcywgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICAgIHJlbmRlcigpO1xuICB9O1xuICBjYXJkLmFwcGVuZENoaWxkKGFkZFNldEJ0bik7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU1RBVElTVElDUyAmIEhFQVRNQVAgREFUQVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vIE1hcCBtdXNjbGUvc3ViZ3JvdXAgbmFtZXMgXHUyMTkyIGJvZHkgcmVnaW9ucyBmb3IgdGhlIGhlYXRtYXBcbmNvbnN0IE1VU0NMRV9UT19SRUdJT04gPSB7XG4gIE5lY2s6IFtcIm5lY2tcIl0sIENoZXN0OiBbXCJjaGVzdFwiXSwgQ29yZTogW1wiY29yZVwiXSxcbiAgQmFjazogW1wibGF0c1wiLCBcInRyYXBzXCIsIFwibG93ZXJfYmFja1wiXSwgTGF0czogW1wibGF0c1wiXSwgVHJhcHM6IFtcInRyYXBzXCJdLFxuICBSaG9tYm9pZHM6IFtcInRyYXBzXCJdLCBcIkxvd2VyIEJhY2tcIjogW1wibG93ZXJfYmFja1wiXSwgXCJSZWFyIERlbHRzXCI6IFtcInJlYXJfZGVsdHNcIl0sXG4gIFNob3VsZGVyczogW1wiZnJvbnRfZGVsdHNcIiwgXCJyZWFyX2RlbHRzXCJdLCBcIkZyb250IERlbHRzXCI6IFtcImZyb250X2RlbHRzXCJdLFxuICBcIlNpZGUgRGVsdHNcIjogW1wiZnJvbnRfZGVsdHNcIl0sXG4gIExlZ3M6IFtcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiXSwgUXVhZHM6IFtcInF1YWRzXCJdLFxuICBIYW1zdHJpbmdzOiBbXCJoYW1zdHJpbmdzXCJdLCBHbHV0ZXM6IFtcImdsdXRlc1wiXSwgQ2FsdmVzOiBbXCJjYWx2ZXNcIl0sXG4gIEFkZHVjdG9yczogW1wicXVhZHNcIl0sXG4gIEFybXM6IFtcImJpY2Vwc1wiLCBcInRyaWNlcHNcIiwgXCJmb3JlYXJtc1wiXSwgQmljZXBzOiBbXCJiaWNlcHNcIl0sXG4gIFRyaWNlcHM6IFtcInRyaWNlcHNcIl0sIEZvcmVhcm1zOiBbXCJmb3JlYXJtc1wiXSxcbn07XG5cbmZ1bmN0aW9uIGdldFdlZWtseUNhbGVuZGFyRGF0YSgpIHtcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoKS5zdGFydE9mKFwiZGF5XCIpO1xuICBjb25zdCB3ZWVrU3RhcnQgPSB0b2RheS5jbG9uZSgpLnN0YXJ0T2YoXCJpc29XZWVrXCIpO1xuICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gIGNvbnN0IGRheXMgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBjb25zdCBkYXkgPSB3ZWVrU3RhcnQuY2xvbmUoKS5hZGQoaSwgXCJkYXlzXCIpO1xuICAgIGNvbnN0IGRheVN0ciA9IGRheS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xuICAgIGNvbnN0IGlzVG9kYXkgPSBkYXkuaXNTYW1lKHRvZGF5LCBcImRheVwiKTtcbiAgICBjb25zdCBpc1Bhc3QgPSBkYXkuaXNCZWZvcmUodG9kYXksIFwiZGF5XCIpO1xuICAgIGxldCBzdGF0dXMgPSBudWxsLCB0eXBlID0gbnVsbDtcbiAgICBmb3IgKGNvbnN0IHdGaWxlIG9mIGFsbEZpbGVzKSB7XG4gICAgICBpZiAod0ZpbGUuYmFzZW5hbWUgPT09IGRheVN0cikge1xuICAgICAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICAgICAgaWYgKGZtICYmIGZtLldvcmtvdXQgPT09IHRydWUpIHsgc3RhdHVzID0gXCJkb25lXCI7IHR5cGUgPSBmbVtcIldvcmtvdXQtVHlwZVwiXSB8fCBcImRvbmVcIjsgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgZGF5cy5wdXNoKHsgbGFiZWw6IGRheS5mb3JtYXQoXCJkZFwiKVswXSwgbnVtOiBkYXkuZm9ybWF0KFwiRFwiKSwgaXNUb2RheSwgaXNQYXN0LCBzdGF0dXMsIHR5cGUgfSk7XG4gIH1cbiAgcmV0dXJuIGRheXM7XG59XG5cbmZ1bmN0aW9uIGdldE1vbnRobHlTdGF0cygpIHtcbiAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgY29uc3Qgd2Vla1N0YXJ0ID0gbm93LmNsb25lKCkuc3RhcnRPZihcImlzb1dlZWtcIik7XG4gIGNvbnN0IG1vbnRoU3RhcnQgPSBub3cuY2xvbmUoKS5zdGFydE9mKFwibW9udGhcIik7XG4gIGxldCB0aGlzV2VlayA9IDAsIHRoaXNNb250aCA9IDAsIHRvdGFsID0gMCwgdG90YWxTZXRzID0gMCwgdG90YWxWb2x1bWUgPSAwO1xuICBmb3IgKGNvbnN0IHdGaWxlIG9mIGFsbEZpbGVzKSB7XG4gICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlKSBjb250aW51ZTtcbiAgICB0b3RhbCsrO1xuICAgIGNvbnN0IGRhdGVNYXRjaCA9IHdGaWxlLmJhc2VuYW1lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS8pO1xuICAgIGlmICghZGF0ZU1hdGNoKSBjb250aW51ZTtcbiAgICBjb25zdCBmaWxlRGF0ZSA9IG1vbWVudChkYXRlTWF0Y2hbMV0sIFwiWVlZWS1NTS1ERFwiKTtcbiAgICBpZiAoZmlsZURhdGUuaXNTYW1lT3JBZnRlcih3ZWVrU3RhcnQpKSB0aGlzV2VlaysrO1xuICAgIGlmIChmaWxlRGF0ZS5pc1NhbWVPckFmdGVyKG1vbnRoU3RhcnQpKSB0aGlzTW9udGgrKztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGV4IG9mIGZtLmV4ZXJjaXNlcykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXguc2V0cykpIGNvbnRpbnVlO1xuICAgICAgICBmb3IgKGNvbnN0IHMgb2YgZXguc2V0cykge1xuICAgICAgICAgIGlmIChzLmNvbXBsZXRlZCAmJiAhcy5pc1dhcm11cCkgeyB0b3RhbFNldHMrKzsgdG90YWxWb2x1bWUgKz0gKHMud2VpZ2h0IHx8IDApICogKHMucmVwcyB8fCAwKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7IHRoaXNXZWVrLCB0aGlzTW9udGgsIHRvdGFsLCB0b3RhbFNldHMsIHRvdGFsVm9sdW1lIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlY2VudFNlc3Npb25zKGxpbWl0KSB7XG4gIGxpbWl0ID0gbGltaXQgfHwgNDtcbiAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBjb25zdCBzb3J0ZWQgPSBhbGxGaWxlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGIuYmFzZW5hbWUubG9jYWxlQ29tcGFyZShhLmJhc2VuYW1lKTsgfSk7XG4gIGNvbnN0IHNlc3Npb25zID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHNlc3Npb25zLmxlbmd0aCA+PSBsaW1pdCkgYnJlYWs7XG4gICAgdmFyIHdGaWxlID0gc29ydGVkW2ldO1xuICAgIGlmICh3RmlsZS5wYXRoID09PSBmaWxlLnBhdGgpIGNvbnRpbnVlO1xuICAgIHZhciBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICBpZiAoIWZtIHx8IGZtLldvcmtvdXQgIT09IHRydWUpIGNvbnRpbnVlO1xuICAgIHZhciBkYXRlTWF0Y2ggPSB3RmlsZS5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKTtcbiAgICBzZXNzaW9ucy5wdXNoKHtcbiAgICAgIGRhdGU6IGRhdGVNYXRjaCA/IGRhdGVNYXRjaFsxXSA6IHdGaWxlLmJhc2VuYW1lLFxuICAgICAgdHlwZTogZm1bXCJXb3Jrb3V0LVR5cGVcIl0gfHwgXCJkb25lXCIsXG4gICAgICBtdXNjbGVzOiBmbS5tdXNjbGVHcm91cHMgfHwgW10sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHNlc3Npb25zO1xufVxuXG4vLyBCdWlsZCBzdHJlbmd0aCBsZXZlbCBkYXRhIHBlciBib2R5IHJlZ2lvbiBmcm9tIEFMTCBjb21wbGV0ZWQgd29ya291dHNcbmFzeW5jIGZ1bmN0aW9uIGdldE11c2NsZUxldmVsRGF0YSgpIHtcbiAgY29uc3QgZXhlcmNpc2VCZXN0ID0ge307IC8vIGV4ZXJjaXNlTmFtZSBcdTIxOTIgeyB3ZWlnaHQsIHJlcHMsIG1heFJlcHMsIG11c2NsZSB9XG4gIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgIGlmICh3RmlsZS5wYXRoID09PSBmaWxlLnBhdGgpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSB8fCAhQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSBjb250aW51ZTtcbiAgICBmb3IgKGNvbnN0IGV4IG9mIGZtLmV4ZXJjaXNlcykge1xuICAgICAgY29uc3QgZG9uZSA9IChleC5zZXRzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocykgeyByZXR1cm4gcy5jb21wbGV0ZWQgJiYgIXMuaXNXYXJtdXA7IH0pO1xuICAgICAgaWYgKGRvbmUubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgIGxldCBiZXN0VyA9IDAsIGJlc3RSID0gMCwgbWF4UiA9IDA7XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgZG9uZSkge1xuICAgICAgICBpZiAocy5yZXBzID4gbWF4UikgbWF4UiA9IHMucmVwcztcbiAgICAgICAgaWYgKHMud2VpZ2h0ID4gYmVzdFcgfHwgKHMud2VpZ2h0ID09PSBiZXN0VyAmJiBzLnJlcHMgPiBiZXN0UikpIHsgYmVzdFcgPSBzLndlaWdodDsgYmVzdFIgPSBzLnJlcHM7IH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGV4aXN0aW5nID0gZXhlcmNpc2VCZXN0W2V4Lm5hbWVdO1xuICAgICAgaWYgKCFleGlzdGluZykge1xuICAgICAgICBleGVyY2lzZUJlc3RbZXgubmFtZV0gPSB7IHdlaWdodDogYmVzdFcsIHJlcHM6IGJlc3RSLCBtYXhSZXBzOiBtYXhSLCBtdXNjbGU6IGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb2xkVmFsID0gZXhpc3Rpbmcud2VpZ2h0ID4gMCA/IGNhbGN1bGF0ZTFSTShleGlzdGluZy53ZWlnaHQsIGV4aXN0aW5nLnJlcHMpIDogZXhpc3RpbmcubWF4UmVwcztcbiAgICAgICAgY29uc3QgbmV3VmFsID0gYmVzdFcgPiAwID8gY2FsY3VsYXRlMVJNKGJlc3RXLCBiZXN0UikgOiBtYXhSO1xuICAgICAgICBpZiAobmV3VmFsID4gb2xkVmFsKSBleGVyY2lzZUJlc3RbZXgubmFtZV0gPSB7IHdlaWdodDogYmVzdFcsIHJlcHM6IGJlc3RSLCBtYXhSZXBzOiBtYXhSLCBtdXNjbGU6IGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCB9O1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBDYWxjdWxhdGUgc3RyZW5ndGggbGV2ZWwgcGVyIGV4ZXJjaXNlLCBtYXAgdG8gYm9keSByZWdpb25zXG4gIGNvbnN0IHJlZ2lvbkVudHJpZXMgPSB7fTtcbiAgZm9yIChjb25zdCBbZXhOYW1lLCBkYXRhXSBvZiBPYmplY3QuZW50cmllcyhleGVyY2lzZUJlc3QpKSB7XG4gICAgY29uc3Qgc2wgPSBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4TmFtZSwgZGF0YS53ZWlnaHQsIGRhdGEucmVwcywgZGF0YS5tYXhSZXBzKTtcbiAgICBpZiAoIXNsKSBjb250aW51ZTtcbiAgICBjb25zdCByZWdpb25zID0gTVVTQ0xFX1RPX1JFR0lPTltkYXRhLm11c2NsZV0gfHwgW107XG4gICAgZm9yIChjb25zdCByZWdpb24gb2YgcmVnaW9ucykge1xuICAgICAgaWYgKCFyZWdpb25FbnRyaWVzW3JlZ2lvbl0pIHJlZ2lvbkVudHJpZXNbcmVnaW9uXSA9IFtdO1xuICAgICAgcmVnaW9uRW50cmllc1tyZWdpb25dLnB1c2goeyBsZXZlbDogc2wubGV2ZWwsIGNvbG9yOiBzbC5jb2xvciwgcHJvZ3Jlc3M6IHNsLnByb2dyZXNzIH0pO1xuICAgIH1cbiAgfVxuICAvLyBQaWNrIHRoZSBiZXN0IHN0cmVuZ3RoIGxldmVsIHBlciByZWdpb25cbiAgY29uc3QgbGV2ZWxPcmRlciA9IFtcIlVudHJhaW5lZFwiLCBcIkJlZ2lubmVyXCIsIFwiTm92aWNlXCIsIFwiSW50ZXJtZWRpYXRlXCIsIFwiQWR2YW5jZWRcIiwgXCJFbGl0ZVwiXTtcbiAgY29uc3QgcmVzdWx0ID0ge307XG4gIGZvciAoY29uc3QgW3JlZ2lvbiwgZW50cmllc10gb2YgT2JqZWN0LmVudHJpZXMocmVnaW9uRW50cmllcykpIHtcbiAgICBsZXQgYmVzdCA9IGVudHJpZXNbMF0sIGJlc3RJZHggPSBsZXZlbE9yZGVyLmluZGV4T2YoZW50cmllc1swXS5sZXZlbCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBlbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpZHggPSBsZXZlbE9yZGVyLmluZGV4T2YoZW50cmllc1tpXS5sZXZlbCk7XG4gICAgICBpZiAoaWR4ID4gYmVzdElkeCkgeyBiZXN0SWR4ID0gaWR4OyBiZXN0ID0gZW50cmllc1tpXTsgfVxuICAgIH1cbiAgICByZXN1bHRbcmVnaW9uXSA9IGJlc3Q7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBCT0RZIEhFQVRNQVAgU1ZHXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gYnVpbGRCb2R5U3ZnKHZpZXcsIG11c2NsZUxldmVscykge1xuICAvLyB2aWV3OiBcImZyb250XCIgb3IgXCJiYWNrXCJcbiAgLy8gbXVzY2xlTGV2ZWxzOiB7IHJlZ2lvbjogeyBsZXZlbCwgY29sb3IsIHByb2dyZXNzIH0gfVxuICBjb25zdCB1bnRyYWluZWQgPSBcIiMxYTE4MTZcIjtcbiAgZnVuY3Rpb24gZmlsbChyZWdpb24pIHtcbiAgICBjb25zdCBkID0gbXVzY2xlTGV2ZWxzW3JlZ2lvbl07XG4gICAgcmV0dXJuIGQgPyBkLmNvbG9yICsgXCI5MFwiIDogdW50cmFpbmVkOyAvLyA5MCA9IH41NiUgYWxwaGEgaGV4XG4gIH1cbiAgZnVuY3Rpb24gc3Ryb2tlKHJlZ2lvbikge1xuICAgIGNvbnN0IGQgPSBtdXNjbGVMZXZlbHNbcmVnaW9uXTtcbiAgICByZXR1cm4gZCA/IGQuY29sb3IgKyBcIjQwXCIgOiBcIiMyYTI1MjBcIjtcbiAgfVxuXG4gIC8vIFNWRyBwYXRocyBmb3IgZWFjaCByZWdpb24gXHUyMDE0IHN0eWxpemVkIGFuYXRvbWljYWwgZmlndXJlXG4gIC8vIFZpZXdCb3g6IDAgMCAxMDAgMjEwXG4gIGNvbnN0IGhlYWQgPSAnPGVsbGlwc2UgY3g9XCI1MFwiIGN5PVwiMTRcIiByeD1cIjEwXCIgcnk9XCIxMVwiIGZpbGw9XCIjMGMwYzBjXCIgc3Ryb2tlPVwiIzJhMjUyMFwiIHN0cm9rZS13aWR0aD1cIjAuOFwiLz4nO1xuXG4gIC8vIFx1MjUwMFx1MjUwMCBGUk9OVCBWSUVXIFJFR0lPTlMgXHUyNTAwXHUyNTAwXG4gIGNvbnN0IGZyb250UGF0aHMgPSB7XG4gICAgbmVjazogICAgICAgJzxwYXRoIGQ9XCJNNDQsMjQgTDU2LDI0IEw1NSwzMSBMNDUsMzEgWlwiLz4nLFxuICAgIGZyb250X2RlbHRzOic8cGF0aCBkPVwiTTMxLDMzIEMyNSwzMyAxOSwzNiAxOCw0MyBMMjYsNDMgTDMxLDM3IFpcIi8+PHBhdGggZD1cIk02OSwzMyBDNzUsMzMgODEsMzYgODIsNDMgTDc0LDQzIEw2OSwzNyBaXCIvPicsXG4gICAgY2hlc3Q6ICAgICAgJzxwYXRoIGQ9XCJNMzEsMzcgTDQ5LDM3IEw0OSw1NSBDNDksNTcgNDIsNjAgMzMsNTggTDMxLDU2IFpcIi8+PHBhdGggZD1cIk01MSwzNyBMNjksMzcgTDY5LDU2IEw2Nyw1OCBDNTgsNjAgNTEsNTcgNTEsNTUgWlwiLz4nLFxuICAgIGJpY2VwczogICAgICc8cGF0aCBkPVwiTTE4LDQzIEwyNiw0MyBMMjYsNjUgQzI1LDY3IDE5LDY3IDE4LDY1IFpcIi8+PHBhdGggZD1cIk03NCw0MyBMODIsNDMgTDgyLDY1IEM4MSw2NyA3NSw2NyA3NCw2NSBaXCIvPicsXG4gICAgZm9yZWFybXM6ICAgJzxwYXRoIGQ9XCJNMTgsNjggTDI2LDY4IEwyNCw5NiBMMTYsOTYgWlwiLz48cGF0aCBkPVwiTTc0LDY4IEw4Miw2OCBMODQsOTYgTDc2LDk2IFpcIi8+JyxcbiAgICBjb3JlOiAgICAgICAnPHBhdGggZD1cIk0zMyw1OCBMNjcsNTggTDY1LDgyIEwzNSw4MiBaXCIvPicsXG4gICAgcXVhZHM6ICAgICAgJzxwYXRoIGQ9XCJNMzUsODQgTDQ5LDg0IEw0OCwxMzYgTDM0LDEzNiBaXCIvPjxwYXRoIGQ9XCJNNTEsODQgTDY1LDg0IEw2NiwxMzYgTDUyLDEzNiBaXCIvPicsXG4gICAgY2FsdmVzOiAgICAgJzxwYXRoIGQ9XCJNMzUsMTQwIEw0OCwxNDAgTDQ2LDE5MCBMMzcsMTkwIFpcIi8+PHBhdGggZD1cIk01MiwxNDAgTDY1LDE0MCBMNjMsMTkwIEw1NCwxOTAgWlwiLz4nLFxuICB9O1xuXG4gIC8vIFx1MjUwMFx1MjUwMCBCQUNLIFZJRVcgUkVHSU9OUyBcdTI1MDBcdTI1MDBcbiAgY29uc3QgYmFja1BhdGhzID0ge1xuICAgIG5lY2s6ICAgICAgICc8cGF0aCBkPVwiTTQ0LDI0IEw1NiwyNCBMNTUsMzEgTDQ1LDMxIFpcIi8+JyxcbiAgICB0cmFwczogICAgICAnPHBhdGggZD1cIk0zOSwzMyBMNTAsMjcgTDYxLDMzIEw1OSw0MyBMNTAsMzkgTDQxLDQzIFpcIi8+JyxcbiAgICByZWFyX2RlbHRzOiAnPHBhdGggZD1cIk0zMSwzMyBDMjUsMzMgMTksMzYgMTgsNDMgTDI2LDQzIEwzMSwzNyBaXCIvPjxwYXRoIGQ9XCJNNjksMzMgQzc1LDMzIDgxLDM2IDgyLDQzIEw3NCw0MyBMNjksMzcgWlwiLz4nLFxuICAgIGxhdHM6ICAgICAgICc8cGF0aCBkPVwiTTMzLDQzIEw0MSw0MyBMNTAsMzkgTDU5LDQzIEw2Nyw0MyBMNjUsNjYgTDUwLDcwIEwzNSw2NiBaXCIvPicsXG4gICAgdHJpY2VwczogICAgJzxwYXRoIGQ9XCJNMTgsNDMgTDI2LDQzIEwyNiw2NSBDMjUsNjcgMTksNjcgMTgsNjUgWlwiLz48cGF0aCBkPVwiTTc0LDQzIEw4Miw0MyBMODIsNjUgQzgxLDY3IDc1LDY3IDc0LDY1IFpcIi8+JyxcbiAgICBmb3JlYXJtczogICAnPHBhdGggZD1cIk0xOCw2OCBMMjYsNjggTDI0LDk2IEwxNiw5NiBaXCIvPjxwYXRoIGQ9XCJNNzQsNjggTDgyLDY4IEw4NCw5NiBMNzYsOTYgWlwiLz4nLFxuICAgIGxvd2VyX2JhY2s6ICc8cGF0aCBkPVwiTTM1LDY2IEw1MCw3MCBMNjUsNjYgTDY1LDgyIEwzNSw4MiBaXCIvPicsXG4gICAgZ2x1dGVzOiAgICAgJzxwYXRoIGQ9XCJNMzUsODIgTDQ5LDgyIEw0OSw5NCBDNDcsOTggMzcsOTggMzUsOTQgWlwiLz48cGF0aCBkPVwiTTUxLDgyIEw2NSw4MiBMNjUsOTQgQzYzLDk4IDUzLDk4IDUxLDk0IFpcIi8+JyxcbiAgICBoYW1zdHJpbmdzOiAnPHBhdGggZD1cIk0zNSw5NiBMNDksOTYgTDQ4LDEzNiBMMzQsMTM2IFpcIi8+PHBhdGggZD1cIk01MSw5NiBMNjUsOTYgTDY2LDEzNiBMNTIsMTM2IFpcIi8+JyxcbiAgICBjYWx2ZXM6ICAgICAnPHBhdGggZD1cIk0zNSwxNDAgTDQ4LDE0MCBMNDYsMTkwIEwzNywxOTAgWlwiLz48cGF0aCBkPVwiTTUyLDE0MCBMNjUsMTQwIEw2MywxOTAgTDU0LDE5MCBaXCIvPicsXG4gIH07XG5cbiAgY29uc3QgcmVnaW9ucyA9IHZpZXcgPT09IFwiZnJvbnRcIiA/IGZyb250UGF0aHMgOiBiYWNrUGF0aHM7XG4gIGxldCBwYXRocyA9IFwiXCI7XG4gIGZvciAoY29uc3QgW3JlZ2lvbiwgcGF0aERhdGFdIG9mIE9iamVjdC5lbnRyaWVzKHJlZ2lvbnMpKSB7XG4gICAgcGF0aHMgKz0gJzxnIGZpbGw9XCInICsgZmlsbChyZWdpb24pICsgJ1wiIHN0cm9rZT1cIicgKyBzdHJva2UocmVnaW9uKSArICdcIiBzdHJva2Utd2lkdGg9XCIwLjZcIj4nICsgcGF0aERhdGEgKyAnPC9nPic7XG4gIH1cblxuICBjb25zdCBsYWJlbCA9IHZpZXcgPT09IFwiZnJvbnRcIiA/IFwiRlJPTlRcIiA6IFwiQkFDS1wiO1xuICByZXR1cm4gJzxzdmcgY2xhc3M9XCJvdHctaGVhdG1hcC1zdmdcIiB2aWV3Qm94PVwiMCAwIDEwMCAyMTBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+J1xuICAgICsgaGVhZCArIHBhdGhzXG4gICAgKyAnPHRleHQgeD1cIjUwXCIgeT1cIjIwN1wiIHRleHQtYW5jaG9yPVwibWlkZGxlXCIgZmlsbD1cIiM0YTQwMzBcIiBmb250LXNpemU9XCI4XCIgZm9udC1mYW1pbHk9XCJHZW9yZ2lhLHNlcmlmXCIgbGV0dGVyLXNwYWNpbmc9XCIyXCI+JyArIGxhYmVsICsgJzwvdGV4dD4nXG4gICAgKyAnPC9zdmc+Jztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRU5ERVI6IFNUQVRTIERBU0hCT0FSRFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlclN0YXRzU2VjdGlvbihyb290KSB7XG4gIC8vIFdlZWtseSBjYWxlbmRhclxuICBjb25zdCB3ZWVrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrTGFiZWwuY2xhc3NOYW1lID0gXCJvdHctc2VjdGlvbi1sYWJlbFwiO1xuICB3ZWVrTGFiZWwudGV4dENvbnRlbnQgPSBcIlRISVMgV0VFS1wiO1xuICByb290LmFwcGVuZENoaWxkKHdlZWtMYWJlbCk7XG5cbiAgY29uc3Qgd2Vla0RhdGEgPSBnZXRXZWVrbHlDYWxlbmRhckRhdGEoKTtcbiAgY29uc3Qgd2Vla0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrR3JpZC5jbGFzc05hbWUgPSBcIm90dy13ZWVrLWdyaWRcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZCh3ZWVrR3JpZCk7XG5cbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla0RhdGEpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTmFtZSA9IFwib3R3LXdlZWstZGF5XCIgKyAoZGF5LmlzVG9kYXkgPyBcIiB0b2RheVwiIDogXCJcIikgKyAoZGF5LnN0YXR1cyA/IFwiIGRvbmVcIiA6IFwiXCIpO1xuICAgIGNvbnN0IGxibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGJsLmNsYXNzTmFtZSA9IFwib3R3LWRheS1sYWJlbFwiO1xuICAgIGxibC50ZXh0Q29udGVudCA9IGRheS5sYWJlbDtcbiAgICBjZWxsLmFwcGVuZENoaWxkKGxibCk7XG4gICAgY29uc3QgbnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBudW0uY2xhc3NOYW1lID0gXCJvdHctZGF5LW51bVwiO1xuICAgIG51bS50ZXh0Q29udGVudCA9IGRheS5udW07XG4gICAgY2VsbC5hcHBlbmRDaGlsZChudW0pO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb24uY2xhc3NOYW1lID0gXCJvdHctZGF5LWljb25cIjtcbiAgICBpZiAoZGF5LnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcbiAgICAgIGlmIChkYXkudHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIpIHsgaWNvbi50ZXh0Q29udGVudCA9IFwiXFx1RDgzRFxcdURDOEVcIjsgfVxuICAgICAgZWxzZSBpZiAoZGF5LnR5cGUgPT09IFwiZmxvd1wiKSB7IGljb24udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0NcXHVERjBBXCI7IH1cbiAgICAgIGVsc2UgeyBpY29uLnRleHRDb250ZW50ID0gXCJcXHUyNzEzXCI7IGljb24uc3R5bGUuY29sb3IgPSBUSEVNRS5zeXN0ZW1HcmVlbjsgfVxuICAgIH0gZWxzZSBpZiAoZGF5LmlzVG9kYXkpIHtcbiAgICAgIGljb24udGV4dENvbnRlbnQgPSBcIlxcdTIwMjJcIjsgaWNvbi5zdHlsZS5jb2xvciA9IFRIRU1FLmNvbG9yOyBpY29uLnN0eWxlLmFuaW1hdGlvbiA9IFwib3R3LXB1bHNlLWdsb3cgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGVcIjtcbiAgICB9IGVsc2UgaWYgKGRheS5pc1Bhc3QpIHtcbiAgICAgIGljb24udGV4dENvbnRlbnQgPSBcIlxcdTIwMTRcIjsgaWNvbi5zdHlsZS5jb2xvciA9IFwiIzJhMjUyMFwiO1xuICAgIH1cbiAgICBjZWxsLmFwcGVuZENoaWxkKGljb24pO1xuICAgIHdlZWtHcmlkLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG5cbiAgLy8gU3RhdCBjb3VudGVyc1xuICBjb25zdCBzdGF0cyA9IGdldE1vbnRobHlTdGF0cygpO1xuICBjb25zdCBzdGF0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3RhdFJvdy5jbGFzc05hbWUgPSBcIm90dy1zdGF0LXJvd1wiO1xuICBzdGF0Um93LnN0eWxlLm1hcmdpblRvcCA9IFwiMTBweFwiO1xuICByb290LmFwcGVuZENoaWxkKHN0YXRSb3cpO1xuXG4gIGNvbnN0IHN0YXRJdGVtcyA9IFtcbiAgICB7IHZhbHVlOiBzdGF0cy50aGlzV2VlaywgbGFiZWw6IFwiVGhpcyB3ZWVrXCIgfSxcbiAgICB7IHZhbHVlOiBzdGF0cy50aGlzTW9udGgsIGxhYmVsOiBcIlRoaXMgbW9udGhcIiB9LFxuICAgIHsgdmFsdWU6IHN0YXRzLnRvdGFsLCBsYWJlbDogXCJBbGwgdGltZVwiIH0sXG4gIF07XG4gIGZvciAoY29uc3QgaXRlbSBvZiBzdGF0SXRlbXMpIHtcbiAgICBjb25zdCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJveC5jbGFzc05hbWUgPSBcIm90dy1zdGF0LWJveFwiO1xuICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdmFsLmNsYXNzTmFtZSA9IFwib3R3LXN0YXQtdmFsdWVcIjtcbiAgICB2YWwudGV4dENvbnRlbnQgPSBpdGVtLnZhbHVlO1xuICAgIGJveC5hcHBlbmRDaGlsZCh2YWwpO1xuICAgIGNvbnN0IGxibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGJsLmNsYXNzTmFtZSA9IFwib3R3LXN0YXQtbGFiZWxcIjtcbiAgICBsYmwudGV4dENvbnRlbnQgPSBpdGVtLmxhYmVsO1xuICAgIGJveC5hcHBlbmRDaGlsZChsYmwpO1xuICAgIHN0YXRSb3cuYXBwZW5kQ2hpbGQoYm94KTtcbiAgfVxuXG4gIC8vIFZvbHVtZSByb3dcbiAgaWYgKHN0YXRzLnRvdGFsVm9sdW1lID4gMCkge1xuICAgIGNvbnN0IHZvbFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdm9sUm93LmNsYXNzTmFtZSA9IFwib3R3LXN0YXQtcm93XCI7XG4gICAgdm9sUm93LnN0eWxlLmNzc1RleHQgPSBcIm1hcmdpbi10b3A6NnB4O2dyaWQtdGVtcGxhdGUtY29sdW1uczoxZnIgMWZyO1wiO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQodm9sUm93KTtcbiAgICBjb25zdCB2b2xCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZvbEJveC5jbGFzc05hbWUgPSBcIm90dy1zdGF0LWJveFwiO1xuICAgIGNvbnN0IHZvbFZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdm9sVmFsLmNsYXNzTmFtZSA9IFwib3R3LXN0YXQtdmFsdWVcIjtcbiAgICB2b2xWYWwuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgICB2b2xWYWwudGV4dENvbnRlbnQgPSBzdGF0cy50b3RhbFZvbHVtZSA+PSAxMDAwID8gTWF0aC5yb3VuZChzdGF0cy50b3RhbFZvbHVtZSAvIDEwMDApICsgXCJrXCIgOiBzdGF0cy50b3RhbFZvbHVtZTtcbiAgICB2b2xCb3guYXBwZW5kQ2hpbGQodm9sVmFsKTtcbiAgICBjb25zdCB2b2xMYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZvbExibC5jbGFzc05hbWUgPSBcIm90dy1zdGF0LWxhYmVsXCI7XG4gICAgdm9sTGJsLnRleHRDb250ZW50ID0gXCJUb3RhbCBrZyBsaWZ0ZWRcIjtcbiAgICB2b2xCb3guYXBwZW5kQ2hpbGQodm9sTGJsKTtcbiAgICB2b2xSb3cuYXBwZW5kQ2hpbGQodm9sQm94KTtcblxuICAgIGNvbnN0IHNldHNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNldHNCb3guY2xhc3NOYW1lID0gXCJvdHctc3RhdC1ib3hcIjtcbiAgICBjb25zdCBzZXRzVmFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXRzVmFsLmNsYXNzTmFtZSA9IFwib3R3LXN0YXQtdmFsdWVcIjtcbiAgICBzZXRzVmFsLnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XG4gICAgc2V0c1ZhbC50ZXh0Q29udGVudCA9IHN0YXRzLnRvdGFsU2V0cztcbiAgICBzZXRzQm94LmFwcGVuZENoaWxkKHNldHNWYWwpO1xuICAgIGNvbnN0IHNldHNMYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNldHNMYmwuY2xhc3NOYW1lID0gXCJvdHctc3RhdC1sYWJlbFwiO1xuICAgIHNldHNMYmwudGV4dENvbnRlbnQgPSBcIlRvdGFsIHNldHNcIjtcbiAgICBzZXRzQm94LmFwcGVuZENoaWxkKHNldHNMYmwpO1xuICAgIHZvbFJvdy5hcHBlbmRDaGlsZChzZXRzQm94KTtcbiAgfVxuXG4gIC8vIEJvZHkgU3RyZW5ndGggSGVhdG1hcFxuICBjb25zdCBobUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaG1MYWJlbC5jbGFzc05hbWUgPSBcIm90dy1zZWN0aW9uLWxhYmVsXCI7XG4gIGhtTGFiZWwuc3R5bGUubWFyZ2luVG9wID0gXCIyNHB4XCI7XG4gIGhtTGFiZWwudGV4dENvbnRlbnQgPSBcIkJPRFkgU1RSRU5HVEggTUFQXCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoaG1MYWJlbCk7XG5cbiAgY29uc3QgbXVzY2xlTGV2ZWxzID0gYXdhaXQgZ2V0TXVzY2xlTGV2ZWxEYXRhKCk7XG4gIGNvbnN0IGhtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhtV3JhcC5jbGFzc05hbWUgPSBcIm90dy1oZWF0bWFwLXdyYXBcIjtcbiAgaG1XcmFwLmlubmVySFRNTCA9IGJ1aWxkQm9keVN2ZyhcImZyb250XCIsIG11c2NsZUxldmVscykgKyBidWlsZEJvZHlTdmcoXCJiYWNrXCIsIG11c2NsZUxldmVscyk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoaG1XcmFwKTtcblxuICAvLyBMZWdlbmRcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVnZW5kLmNsYXNzTmFtZSA9IFwib3R3LWhlYXRtYXAtbGVnZW5kXCI7XG4gIGNvbnN0IGxlZ2VuZEl0ZW1zID0gW1xuICAgIHsgbGFiZWw6IFwiVW50cmFpbmVkXCIsIGNvbG9yOiBcIiM2YTZhNmFcIiB9LFxuICAgIHsgbGFiZWw6IFwiQmVnaW5uZXJcIiwgY29sb3I6IFwiI2E4OTg2MFwiIH0sXG4gICAgeyBsYWJlbDogXCJOb3ZpY2VcIiwgY29sb3I6IFwiIzdhOWE3ZFwiIH0sXG4gICAgeyBsYWJlbDogXCJJbnRlcm1lZGlhdGVcIiwgY29sb3I6IFwiIzZhOGE5YVwiIH0sXG4gICAgeyBsYWJlbDogXCJBZHZhbmNlZFwiLCBjb2xvcjogXCIjOGE3YTlhXCIgfSxcbiAgICB7IGxhYmVsOiBcIkVsaXRlXCIsIGNvbG9yOiBcIiM5YTZhN2FcIiB9LFxuICBdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGVnZW5kSXRlbXMpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGkuY2xhc3NOYW1lID0gXCJvdHctaGVhdG1hcC1sZWdlbmQtaXRlbVwiO1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG90LmNsYXNzTmFtZSA9IFwib3R3LWhlYXRtYXAtbGVnZW5kLWRvdFwiO1xuICAgIGRvdC5zdHlsZS5iYWNrZ3JvdW5kID0gaXRlbS5jb2xvcjtcbiAgICBsaS5hcHBlbmRDaGlsZChkb3QpO1xuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHR4dC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWw7XG4gICAgbGkuYXBwZW5kQ2hpbGQodHh0KTtcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIHJvb3QuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAvLyBSZWNlbnQgc2Vzc2lvbnNcbiAgY29uc3QgcmVjZW50ID0gZ2V0UmVjZW50U2Vzc2lvbnMoNCk7XG4gIGlmIChyZWNlbnQubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHJlY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICByZWNMYWJlbC5jbGFzc05hbWUgPSBcIm90dy1zZWN0aW9uLWxhYmVsXCI7XG4gICAgcmVjTGFiZWwuc3R5bGUubWFyZ2luVG9wID0gXCIyNHB4XCI7XG4gICAgcmVjTGFiZWwudGV4dENvbnRlbnQgPSBcIlJFQ0VOVCBTRVNTSU9OU1wiO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQocmVjTGFiZWwpO1xuICAgIGZvciAoY29uc3QgcyBvZiByZWNlbnQpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3cuY2xhc3NOYW1lID0gXCJvdHctcmVjZW50LXJvd1wiO1xuICAgICAgY29uc3QgZGF0ZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBkYXRlRWwuY2xhc3NOYW1lID0gXCJvdHctcmVjZW50LWRhdGVcIjtcbiAgICAgIGRhdGVFbC50ZXh0Q29udGVudCA9IG1vbWVudChzLmRhdGUsIFwiWVlZWS1NTS1ERFwiKS5mb3JtYXQoXCJNTU0gRFwiKTtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChkYXRlRWwpO1xuICAgICAgY29uc3QgbXVzY2xlc0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBtdXNjbGVzRWwuY2xhc3NOYW1lID0gXCJvdHctcmVjZW50LW11c2NsZXNcIjtcbiAgICAgIG11c2NsZXNFbC50ZXh0Q29udGVudCA9IHMubXVzY2xlcy5qb2luKFwiLCBcIikgfHwgXCJcXHUyMDE0XCI7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQobXVzY2xlc0VsKTtcbiAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICBiYWRnZS5jbGFzc05hbWUgPSBcIm90dy1yZWNlbnQtYmFkZ2VcIjtcbiAgICAgIGlmIChzLnR5cGUgPT09IFwiZGlzY2lwbGluZVwiKSB7XG4gICAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gXCJcXHVEODNEXFx1REM4RVwiO1xuICAgICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ICs9IFwiYmFja2dyb3VuZDpyZ2JhKDE2OCwxNTIsOTYsMC4xNSk7Y29sb3I6XCIgKyBUSEVNRS5jb2xvckRpc2NpcGxpbmUgKyBcIjtcIjtcbiAgICAgIH0gZWxzZSBpZiAocy50eXBlID09PSBcImZsb3dcIikge1xuICAgICAgICBiYWRnZS50ZXh0Q29udGVudCA9IFwiXFx1RDgzQ1xcdURGMEFcIjtcbiAgICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCArPSBcImJhY2tncm91bmQ6cmdiYSgxMDYsMTM4LDE1NCwwLjE1KTtjb2xvcjpcIiArIFRIRU1FLmNvbG9yRmxvdyArIFwiO1wiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSBcIlxcdTI3MTNcIjtcbiAgICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCArPSBcImJhY2tncm91bmQ6cmdiYSgxMjIsMTU0LDEyNSwwLjE1KTtjb2xvcjpcIiArIFRIRU1FLnN5c3RlbUdyZWVuICsgXCI7XCI7XG4gICAgICB9XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgcm9vdC5hcHBlbmRDaGlsZChyb3cpO1xuICAgIH1cbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFTkRFUjogTVVTQ0xFIEdST1VQIFNFTEVDVElPTiAoZmlyc3QtdGltZSBlbnRyeSlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJNdXNjbGVTZWxlY3Rpb24ocm9vdCkge1xuICBjb25zdCBzZWxlY3RlZE11c2NsZXMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IHNlbGVjdGVkU3ViZ3JvdXBzID0gbmV3IE1hcCgpO1xuXG4gIC8vIEhlYWRlclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJvdHctY2FyZCBvdHctY2FyZC1icmVhdGhlIG90dy1oZWFkZXJcIjtcbiAgYWRkQ29ybmVycyhoZWFkZXIsIFRIRU1FLmNvbG9yKTtcbiAgaGVhZGVyLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOjMycHg7bWFyZ2luLWJvdHRvbToxMnB4O1wiPlxcdUQ4M0NcXHVERkNCXFx1RkUwRjwvZGl2PlxuICAgIDxoMiBjbGFzcz1cIm90dy10aXRsZVwiPk5FVyBXT1JLT1VUPC9oMj5cbiAgICA8ZGl2IGNsYXNzPVwib3R3LXByb2dyZXNzLWxhYmVsXCI+U2VsZWN0IG11c2NsZSBncm91cHMgdG8gdHJhaW48L2Rpdj5cbiAgYDtcbiAgcm9vdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIFN0YXRzIGRhc2hib2FyZFxuICBhd2FpdCByZW5kZXJTdGF0c1NlY3Rpb24ocm9vdCk7XG5cbiAgLy8gRGl2aWRlciBiZWZvcmUgbXVzY2xlIHNlbGVjdGlvblxuICBjb25zdCBzZWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlbExhYmVsLmNsYXNzTmFtZSA9IFwib3R3LXNlY3Rpb24tbGFiZWxcIjtcbiAgc2VsTGFiZWwuc3R5bGUubWFyZ2luVG9wID0gXCIyOHB4XCI7XG4gIHNlbExhYmVsLnRleHRDb250ZW50ID0gXCJTRUxFQ1QgTVVTQ0xFIEdST1VQU1wiO1xuICByb290LmFwcGVuZENoaWxkKHNlbExhYmVsKTtcblxuICAvLyBNdXNjbGUgZ3JvdXAgZ3JpZFxuICBjb25zdCBtdXNjbGVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbXVzY2xlR3JpZC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjEwcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOjhweDtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChtdXNjbGVHcmlkKTtcblxuICAvLyBTdWJncm91cCBhcmVhIChiZWxvdyB0aGUgZ3JpZClcbiAgY29uc3Qgc3ViZ3JvdXBBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3ViZ3JvdXBBcmVhLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjhweDt3aWR0aDoxMDAlO1wiO1xuICByb290LmFwcGVuZENoaWxkKHN1Ymdyb3VwQXJlYSk7XG5cbiAgT2JqZWN0LmVudHJpZXMoTVVTQ0xFX0dST1VQUykuZm9yRWFjaCgoW25hbWUsIGNvbmZpZ10pID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5jbGFzc05hbWUgPSBcIm90dy1tdXNjbGUtdG9nZ2xlXCI7XG4gICAgYnRuLnRleHRDb250ZW50ID0gYCR7Y29uZmlnLmljb259ICR7bmFtZX1gO1xuICAgIG11c2NsZUdyaWQuYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgIGxldCBzdWJncm91cENvbnRhaW5lciA9IG51bGw7XG4gICAgaWYgKGNvbmZpZy5zdWJncm91cHMpIHtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3R3LXN1Ymdyb3VwLWNvbnRhaW5lclwiO1xuICAgICAgc3ViZ3JvdXBDb250YWluZXIuc3R5bGUuY3NzVGV4dCArPSBgZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo4cHg7YmFja2dyb3VuZDojMGMwYzBjO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Ym9yZGVyLXJhZGl1czo0cHg7YDtcbiAgICAgIGNvbnN0IHN1YkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1YkxhYmVsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MTAwJTtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O21hcmdpbi1ib3R0b206NHB4O2A7XG4gICAgICBzdWJMYWJlbC50ZXh0Q29udGVudCA9IG5hbWUgKyBcIiBzdWJncm91cHM6XCI7XG4gICAgICBzdWJncm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJMYWJlbCk7XG4gICAgICBzZWxlY3RlZFN1Ymdyb3Vwcy5zZXQobmFtZSwgbmV3IFNldCgpKTtcblxuICAgICAgY29uZmlnLnN1Ymdyb3Vwcy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN1YkJ0bi5jbGFzc05hbWUgPSBcIm90dy1zdWItdG9nZ2xlXCI7XG4gICAgICAgIHN1YkJ0bi50ZXh0Q29udGVudCA9IHN1YjtcbiAgICAgICAgc3ViQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY29uc3Qgc3VicyA9IHNlbGVjdGVkU3ViZ3JvdXBzLmdldChuYW1lKTtcbiAgICAgICAgICBpZiAoc3Vicy5oYXMoc3ViKSkgeyBzdWJzLmRlbGV0ZShzdWIpOyBzdWJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTsgfVxuICAgICAgICAgIGVsc2UgeyBzdWJzLmFkZChzdWIpOyBzdWJCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgfVxuICAgICAgICB9O1xuICAgICAgICBzdWJncm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdG4pO1xuICAgICAgfSk7XG4gICAgICBzdWJncm91cEFyZWEuYXBwZW5kQ2hpbGQoc3ViZ3JvdXBDb250YWluZXIpO1xuICAgIH1cblxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkTXVzY2xlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgc2VsZWN0ZWRNdXNjbGVzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChzdWJncm91cENvbnRhaW5lcikgc3ViZ3JvdXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWRNdXNjbGVzLmFkZChuYW1lKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChzdWJncm91cENvbnRhaW5lcikgc3ViZ3JvdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIC8vIFF1b3RlXG4gIGNvbnN0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcXVvdGUuc3R5bGUuY3NzVGV4dCA9IGBwYWRkaW5nOjE2cHg7YmFja2dyb3VuZDojMGMwYzBjO2JvcmRlci1sZWZ0OjJweCBzb2xpZCAke1RIRU1FLmNvbG9yfTttYXJnaW46MTZweCAwO2A7XG4gIHF1b3RlLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zdHlsZTppdGFsaWM7Zm9udC1zaXplOjEycHg7bWFyZ2luOjA7XCI+XCJUaGVyZSBpcyBhIGdlbmVyYWwgcHJpbmNpcGxlIGhlcmU6IDxzdHJvbmcgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yfTtcIj5wZXJmb3JtIGFueSBhbW91bnQgb2Ygd2FybWluZy11cCB0aGF0IHlvdSBiZWxpZXZlIHRvIGJlIG1pbmltYWxseSByZXF1aXJlZC48L3N0cm9uZz5cIjwvcD48cCBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7bWFyZ2luOjhweCAwIDAgMDt0ZXh0LWFsaWduOnJpZ2h0O1wiPlxcdTIwMTQgTWlrZSBNZW50emVyPC9wPmA7XG4gIHJvb3QuYXBwZW5kQ2hpbGQocXVvdGUpO1xuXG4gIC8vIFN0YXJ0IGJ1dHRvblxuICBjb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0QnRuLnRleHRDb250ZW50ID0gXCJcXHVEODNDXFx1REZDQlxcdUZFMEYgU1RBUlQgV09SS09VVFwiO1xuICBzdGFydEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1wcmltYXJ5XCI7XG4gIHN0YXJ0QnRuLnN0eWxlLmNzc1RleHQgKz0gXCJwYWRkaW5nOjE2cHggMjRweDtmb250LXNpemU6MTVweDtmb250LXdlaWdodDo3MDA7XCI7XG4gIHN0YXJ0QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkTXVzY2xlcy5zaXplID09PSAwKSB7IG5vdGljZShcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIG11c2NsZSBncm91cFwiKTsgcmV0dXJuOyB9XG5cbiAgICAvLyBCdWlsZCBmaW5hbCBtdXNjbGUgbGlzdDogdXNlIHN1Ymdyb3VwcyBpZiBzZWxlY3RlZCwgb3RoZXJ3aXNlIHRoZSBwYXJlbnQgZ3JvdXBcbiAgICBjb25zdCBtdXNjbGVHcm91cHNBcnJheSA9IFtdO1xuICAgIHNlbGVjdGVkTXVzY2xlcy5mb3JFYWNoKG11c2NsZSA9PiB7XG4gICAgICBjb25zdCBzdWJzID0gc2VsZWN0ZWRTdWJncm91cHMuZ2V0KG11c2NsZSk7XG4gICAgICBpZiAoc3VicyAmJiBzdWJzLnNpemUgPiAwKSB7XG4gICAgICAgIHN1YnMuZm9yRWFjaChzdWIgPT4gbXVzY2xlR3JvdXBzQXJyYXkucHVzaChzdWIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11c2NsZUdyb3Vwc0FycmF5LnB1c2gobXVzY2xlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExvYWQgcHJldmlvdXMgZXhlcmNpc2VzIGZvciB0aGVzZSBtdXNjbGUgZ3JvdXBzXG4gICAgY29uc3QgbG9hZGVkRXhlcmNpc2VzID0gbG9hZFByZXZpb3VzRXhlcmNpc2VzKG11c2NsZUdyb3Vwc0FycmF5KTtcblxuICAgIC8vIFNhdmUgdG8gZnJvbnRtYXR0ZXIgYW5kIHVwZGF0ZSBsb2NhbCBzdGF0ZVxuICAgIG11c2NsZUdyb3VwcyA9IG11c2NsZUdyb3Vwc0FycmF5O1xuICAgIGV4ZXJjaXNlcyA9IGxvYWRlZEV4ZXJjaXNlcztcbiAgICBjdXJyZW50TXVzY2xlSW5kZXggPSAwO1xuXG4gICAgYXdhaXQgc2V0TXVsdGlwbGVEYXRhKHtcbiAgICAgIG11c2NsZUdyb3VwczogbXVzY2xlR3JvdXBzLFxuICAgICAgZXhlcmNpc2VzOiBleGVyY2lzZXMsXG4gICAgICBjdXJyZW50TXVzY2xlSW5kZXg6IDAsXG4gICAgICBXb3Jrb3V0OiBmYWxzZSxcbiAgICAgIFwiV29ya291dC1UeXBlXCI6IFwiXCIsXG4gICAgICBUaW1lc3RhbXA6IG1vbWVudCgpLmZvcm1hdCgpLFxuICAgIH0pO1xuXG4gICAgLy8gUmUtcmVuZGVyIFx1MjAxNCBub3cgd2UnbGwgZW50ZXIgd29ya291dCB0cmFja2luZyBtb2RlXG4gICAgcmVuZGVyKCk7XG4gIH07XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1BSU4gUkVOREVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKCkge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvb3QuY2xhc3NOYW1lID0gXCJvdHctY29udGFpbmVyXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290KTtcblxuICAvLyBJZiB3b3Jrb3V0IGlzIGFscmVhZHkgY29tcGxldGVkLCBzaG93IHN1bW1hcnlcbiAgaWYgKGlzQ29tcGxldGVkICYmIGdldERhdGEoXCJXb3Jrb3V0LVR5cGVcIikpIHtcbiAgICBjb25zdCB3VHlwZSA9IGdldERhdGEoXCJXb3Jrb3V0LVR5cGVcIik7XG4gICAgY29uc3Qgc3VtbWFyeUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1bW1hcnlDYXJkLmNsYXNzTmFtZSA9IFwib3R3LWNhcmQgb3R3LWNhcmQtYnJlYXRoZVwiO1xuICAgIHN1bW1hcnlDYXJkLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgc3VtbWFyeUNhcmQuc3R5bGUucGFkZGluZyA9IFwiMzJweFwiO1xuICAgIGFkZENvcm5lcnMoc3VtbWFyeUNhcmQsIFRIRU1FLnN5c3RlbUdyZWVuKTtcbiAgICBzdW1tYXJ5Q2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOjMycHg7bWFyZ2luLWJvdHRvbToxMnB4O1wiPiR7d1R5cGUgPT09IFwiZGlzY2lwbGluZVwiID8gXCJcXHVEODNEXFx1REM4RVwiIDogXCJcXHVEODNDXFx1REYwQVwifTwvZGl2PlxuICAgICAgPGgyIHN0eWxlPVwibWFyZ2luOjA7Y29sb3I6JHtUSEVNRS5zeXN0ZW1HcmVlbn07Zm9udC1zaXplOjE2cHg7bGV0dGVyLXNwYWNpbmc6M3B4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcIj5XT1JLT1VUIENPTVBMRVRFPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxM3B4O21hcmdpbi10b3A6OHB4O2ZvbnQtc3R5bGU6aXRhbGljO1wiPiR7d1R5cGUgPT09IFwiZGlzY2lwbGluZVwiID8gXCJEaXNjaXBsaW5lIFdpblwiIDogXCJGbG93IFN0YXRlXCJ9PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDttYXJnaW4tdG9wOjE2cHg7XCI+JHttb21lbnQoZ2V0RGF0YShcIlRpbWVzdGFtcFwiKSkuZm9ybWF0KFwiTU1NIEQsIFlZWVkgXFx1MjAxNCBoOm1tIEFcIil9PC9kaXY+XG4gICAgYDtcbiAgICByb290LmFwcGVuZENoaWxkKHN1bW1hcnlDYXJkKTtcblxuICAgIC8vIFNob3cgZXhlcmNpc2VzIHN1bW1hcnlcbiAgICBpZiAoZXhlcmNpc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGV4U3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBleFN1bW1hcnkuY2xhc3NOYW1lID0gXCJvdHctY2FyZFwiO1xuICAgICAgYWRkQ29ybmVycyhleFN1bW1hcnksIFRIRU1FLmNvbG9yKTtcbiAgICAgIGNvbnN0IGV4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZXhUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjEycHg7YDtcbiAgICAgIGV4VGl0bGUudGV4dENvbnRlbnQgPSBcIlNFU1NJT04gU1VNTUFSWVwiO1xuICAgICAgZXhTdW1tYXJ5LmFwcGVuZENoaWxkKGV4VGl0bGUpO1xuICAgICAgZm9yIChjb25zdCBleCBvZiBleGVyY2lzZXMpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVkU2V0cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiAhcy5pc1dhcm11cCAmJiBzLmNvbXBsZXRlZCkubGVuZ3RoO1xuICAgICAgICBjb25zdCB0b3RhbFNldHMgPSBleC5zZXRzLmZpbHRlcigocykgPT4gIXMuaXNXYXJtdXApLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcm93LnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6OHB4IDA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgICAgICAgcm93LmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtd2VpZ2h0OjYwMDtcIj4ke2V4Lm5hbWV9PC9zcGFuPjxzcGFuIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTJweDtcIj4ke2NvbXBsZXRlZFNldHN9LyR7dG90YWxTZXRzfSBzZXRzPC9zcGFuPmA7XG4gICAgICAgIGV4U3VtbWFyeS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgfVxuICAgICAgcm9vdC5hcHBlbmRDaGlsZChleFN1bW1hcnkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBObyBtdXNjbGUgZ3JvdXBzIHNlbGVjdGVkIHlldCBcdTIwMTQgc2hvdyBzZWxlY3Rpb24gc2NyZWVuXG4gIGlmIChtdXNjbGVHcm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgYXdhaXQgcmVuZGVyTXVzY2xlU2VsZWN0aW9uKHJvb3QpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBBY3RpdmUgV29ya291dCBVSSBcdTI1MDBcdTI1MDBcbiAgY29uc3QgY3VycmVudE11c2NsZSA9IG11c2NsZUdyb3Vwc1tjdXJyZW50TXVzY2xlSW5kZXhdIHx8IG11c2NsZUdyb3Vwc1swXTtcbiAgY29uc3QgbXVzY2xlRXhlcmNpc2VzID0gZXhlcmNpc2VzLmZpbHRlcigoZSkgPT4gZS5tdXNjbGUgPT09IGN1cnJlbnRNdXNjbGUgfHwgZS5tdXNjbGVHcm91cCA9PT0gY3VycmVudE11c2NsZSk7XG5cbiAgLy8gSGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcIm90dy1jYXJkIG90dy1jYXJkLWJyZWF0aGUgb3R3LWhlYWRlclwiO1xuICBhZGRDb3JuZXJzKGhlYWRlciwgVEhFTUUuY29sb3IpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUuY2xhc3NOYW1lID0gXCJvdHctdGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50TXVzY2xlLnRvVXBwZXJDYXNlKCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnN0IHByb2dyZXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9ncmVzc0xhYmVsLmNsYXNzTmFtZSA9IFwib3R3LXByb2dyZXNzLWxhYmVsXCI7XG4gIHByb2dyZXNzTGFiZWwudGV4dENvbnRlbnQgPSAoY3VycmVudE11c2NsZUluZGV4ICsgMSkgKyBcIiAvIFwiICsgbXVzY2xlR3JvdXBzLmxlbmd0aDtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2dyZXNzTGFiZWwpO1xuICByb290LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gRXhlcmNpc2VzXG4gIGNvbnN0IGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXhDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTZweDtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChleENvbnRhaW5lcik7XG5cbiAgaWYgKG11c2NsZUV4ZXJjaXNlcy5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW1wdHkuc3R5bGUuY3NzVGV4dCA9IGB0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjQwcHggMjBweDtiYWNrZ3JvdW5kOiMwZjBmMGY7Ym9yZGVyOjFweCBkYXNoZWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgICBlbXB0eS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbjowO1wiPk5vIGV4ZXJjaXNlcyBmb3IgJHtjdXJyZW50TXVzY2xlfSB5ZXQuPC9wPmA7XG4gICAgZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHkpO1xuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3QgZXggb2YgbXVzY2xlRXhlcmNpc2VzKSB7XG4gICAgICBhd2FpdCByZW5kZXJFeGVyY2lzZShleENvbnRhaW5lciwgZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBleGVyY2lzZSBidXR0b25cbiAgY29uc3QgYWRkRXhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRFeEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBREQgRVhFUkNJU0VcIjtcbiAgYWRkRXhCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tZGFzaGVkXCI7XG4gIGFkZEV4QnRuLnN0eWxlLm1hcmdpblRvcCA9IFwiMTZweFwiO1xuICBhZGRFeEJ0bi5vbmNsaWNrID0gKCkgPT4gb3BlbkFkZEV4ZXJjaXNlTW9kYWwoY3VycmVudE11c2NsZSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoYWRkRXhCdG4pO1xuXG4gIC8vIE5hdmlnYXRpb25cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LmNsYXNzTmFtZSA9IFwib3R3LW5hdi1yb3dcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIGlmIChjdXJyZW50TXVzY2xlSW5kZXggPiAwKSB7XG4gICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJldkJ0bi50ZXh0Q29udGVudCA9IFwiXFx1MjE5MCBQUkVWSU9VU1wiO1xuICAgIHByZXZCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gICAgcHJldkJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjdXJyZW50TXVzY2xlSW5kZXgtLTsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9O1xuICAgIG5hdi5hcHBlbmRDaGlsZChwcmV2QnRuKTtcbiAgfVxuXG4gIGlmIChjdXJyZW50TXVzY2xlSW5kZXggPCBtdXNjbGVHcm91cHMubGVuZ3RoIC0gMSkge1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5leHRCdG4udGV4dENvbnRlbnQgPSBcIk5FWFQgTVVTQ0xFIFxcdTIxOTJcIjtcbiAgICBuZXh0QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICBuZXh0QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGN1cnJlbnRNdXNjbGVJbmRleCsrOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH07XG4gICAgbmF2LmFwcGVuZENoaWxkKG5leHRCdG4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZpbmlzaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmluaXNoQnRuLnRleHRDb250ZW50ID0gXCJcXHUyNzEzIEZJTklTSCBXT1JLT1VUXCI7XG4gICAgZmluaXNoQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLWZpbmlzaFwiO1xuICAgIGZpbmlzaEJ0bi5vbmNsaWNrID0gKCkgPT4gb3BlbkZpbmlzaE1vZGFsKCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGZpbmlzaEJ0bik7XG4gIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwIEJvb3QgXHUyNTAwXHUyNTAwXG5yZXR1cm4gcmVuZGVyKCk7XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCdWlsdC1pbiBUZW1wbGF0ZSBSZWdpc3RyeVxuLy8gTWFwcyB0ZW1wbGF0ZSBJRHMgdG8gdGhlaXIgc291cmNlIGNvZGUgKGJ1bmRsZWQgYXQgYnVpbGQgdGltZSkuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHdvcmtvdXRTb3VyY2UgZnJvbSBcIi4vd29ya291dC50cGxcIjtcblxuLyoqXG4gKiBCdWlsdC1pbiB0ZW1wbGF0ZXMgYnVuZGxlZCBpbnNpZGUgdGhlIHBsdWdpbi5cbiAqIEtleXMgYXJlIHRlbXBsYXRlIElEcyByZWZlcmVuY2VkIGluIEFjdGl2aXR5Q29uZmlnLndvcmtzcGFjZVRlbXBsYXRlLlxuICogVmFsdWVzIGFyZSB0aGUgcmF3IEpTIHNvdXJjZSBleGVjdXRlZCB2aWEgbmV3IEZ1bmN0aW9uKFwiY3R4XCIsIHNvdXJjZSkuXG4gKi9cbmV4cG9ydCBjb25zdCBCVUlMVElOX1RFTVBMQVRFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgd29ya291dDogd29ya291dFNvdXJjZSxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQSxJQUFBQSxtQkFBOEQ7OztBQ1l2RCxJQUFNLGlCQUFpQjtBQUN2QixJQUFNLHNCQUFzQjtBQUk1QixJQUFNLFNBQTJCO0FBQUEsRUFDdEMsRUFBRSxNQUFNLEdBQUcsTUFBTSxvQkFBb0IsTUFBTSxnQkFBZ0IsYUFBYSxzRUFBc0UsTUFBTSxpR0FBaUcsV0FBVyx3QkFBcUI7QUFBQSxFQUNyUixFQUFFLE1BQU0sR0FBRyxNQUFNLGdCQUFnQixNQUFNLG9CQUFvQixhQUFhLGlFQUFp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O0FBQ1gsZ0JBQVU7QUFBQSxJQUNaO0FBR0EsZUFBVyxZQUFZLEtBQUssU0FBUyxZQUFZO0FBQy9DLFlBQU0sSUFBSTtBQUNWLFVBQUksRUFBRSxlQUFlLFVBQWEsRUFBRSxpQkFBaUIsUUFBVztBQUM5RCxVQUFFLGVBQWUsRUFBRTtBQUNuQixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFFQSxVQUFJLEVBQUUsa0JBQWtCLFFBQVc7QUFDakMsWUFBSSxDQUFDLEVBQUU7QUFBUSxZQUFFLFNBQVMsRUFBRTtBQUM1QixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFDQSxVQUFJLEVBQUUsb0JBQW9CLFFBQVc7QUFDbkMsWUFBSSxDQUFDLEVBQUU7QUFBUSxZQUFFLFNBQVMsRUFBRTtBQUM1QixlQUFPLEVBQUU7QUFDVCxrQkFBVTtBQUFBLE1BQ1o7QUFBQSxJQUNGO0FBR0EsUUFBSSxLQUFLLFNBQVMsaUJBQWlCO0FBQ2pDLFlBQU0sS0FBSyxLQUFLLFNBQVM7QUFDekIsVUFBSSxHQUFHLGVBQWUsVUFBYSxHQUFHLGlCQUFpQixRQUFXO0FBQ2hFLFdBQUcsZUFBZSxHQUFHO0FBQ3JCLGVBQU8sR0FBRztBQUNWLGtCQUFVO0FBQUEsTUFDWjtBQUVBLGFBQU8sR0FBRztBQUNWLGFBQU8sR0FBRztBQUFBLElBQ1o7QUFHQSxRQUFJLElBQUksb0JBQW9CLE1BQU0sUUFBUSxJQUFJLGdCQUFnQixLQUFLLElBQUksaUJBQWlCLFNBQVMsR0FBRztBQUNsRyxpQkFBVyxTQUFTLElBQUksa0JBQWtCO0FBQ3hDLFlBQUksQ0FBQyxNQUFNLFdBQVcsQ0FBQyxNQUFNO0FBQWM7QUFDM0MsY0FBTSxXQUFXLEtBQUssU0FBUyxXQUFXLEtBQUssQ0FBQyxNQUFXLEVBQUUsT0FBTyxNQUFNLFlBQVk7QUFDdEYsWUFBSSxZQUFZLENBQUMsU0FBUyxtQkFBbUI7QUFDM0MsbUJBQVMsb0JBQW9CLE1BQU07QUFDbkMsb0JBQVU7QUFBQSxRQUNaO0FBQUEsTUFDRjtBQUNBLGFBQU8sSUFBSTtBQUNYLGdCQUFVO0FBQUEsSUFDWjtBQUVBLFFBQUksU0FBUztBQUNYLFlBQU0sS0FBSyxhQUFhO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBQ0Y7QUFHQSxTQUFTQSxPQUFNLElBQTJCO0FBQ3hDLFNBQU8sSUFBSSxRQUFRLENBQUMsWUFBWSxXQUFXLFNBQVMsRUFBRSxDQUFDO0FBQ3pEOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgIm5lZ2xlY3RlZCIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJzbGVlcCJdCn0K
