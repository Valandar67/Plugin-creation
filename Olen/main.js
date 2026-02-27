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
var workout_default = '// ============================================================\n// Olen Template \u2014 Workout Tracker v6.0\n// Renders inside the Olen workspace for the "workout" activity.\n// All UI lives here \u2014 daily notes only store YAML frontmatter.\n// Data is read/written via ctx.getData / ctx.setData.\n// Personal stats now read from plugin settings (personalStats).\n// ============================================================\n\nconst { container, getData, setData, setMultipleData, app, moment, notice,\n        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;\n\n// ============================================================\n// SETTINGS \u2014 Edit these to match your vault structure\n// ============================================================\nconst SETTINGS = {\n  // Where daily workout notes are stored\n  workoutFolder: "Personal Life/01 Workout",\n  // Folder containing exercise standard .md files (e.g. "Bench Press.md")\n  exerciseDbFolder: "Home/Activities/Exercises database",\n};\n\n// Read personal stats from plugin settings (set in Olen Settings > Personal Stats)\nconst _pluginStats = ctx.plugin?.settings?.personalStats || {};\nconst PERSONAL = {\n  weight: _pluginStats.currentWeight || 61,\n  height: _pluginStats.height || 175,\n  birthdate: _pluginStats.birthdate || "2005-11-29",\n  gender: _pluginStats.gender || "male",\n};\n\n// Muscle groups available for selection, with optional subgroups\nconst MUSCLE_GROUPS = {\n  "Neck":      { subgroups: null, icon: "\\uD83E\\uDDB4" },\n  "Back":      { subgroups: ["Lats", "Traps", "Rhomboids", "Lower Back", "Rear Delts"], icon: "\\uD83D\\uDD19" },\n  "Chest":     { subgroups: null, icon: "\\uD83D\\uDCAA" },\n  "Shoulders": { subgroups: ["Front Delts", "Side Delts", "Rear Delts"], icon: "\\uD83C\\uDFAF" },\n  "Core":      { subgroups: null, icon: "\\uD83C\\uDFAF" },\n  "Legs":      { subgroups: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"], icon: "\\uD83E\\uDDB5" },\n  "Arms":      { subgroups: ["Biceps", "Triceps", "Forearms"], icon: "\\uD83D\\uDCAA" },\n};\n\n// ============================================================\n// THEME & CONSTANTS\n// ============================================================\nconst THEME = {\n  color: "#9a8c7a",\n  colorHover: "#aa9c8a",\n  colorBorder: "#3a342a",\n  colorBorderHover: "#4a443a",\n  colorMuted: "#6a5a4a",\n  colorLight: "#b8a890",\n  colorDiscipline: "#a89860",\n  colorFlow: "#6a8a9a",\n  systemGreen: "#7a9a7d"\n};\n\nconst STRENGTH_LEVELS = {\n  "Untrained":    { color: "#6a6a6a", icon: "\\u25CB" },\n  "Beginner":     { color: "#a89860", icon: "\\u25D0" },\n  "Novice":       { color: "#7a9a7d", icon: "\\u25D1" },\n  "Intermediate": { color: "#6a8a9a", icon: "\\u25D5" },\n  "Advanced":     { color: "#8a7a9a", icon: "\\u25CF" },\n  "Elite":        { color: "#9a6a7a", icon: "\\u2605" }\n};\n\n// ============================================================\n// STATE (from frontmatter)\n// ============================================================\nlet exercises = getData("exercises") || [];\nlet muscleGroups = getData("muscleGroups") || [];\nlet currentMuscleIndex = getData("currentMuscleIndex") || 0;\nconst isCompleted = getData("Workout") === true;\n\n// ============================================================\n// STYLES\n// ============================================================\nif (!document.getElementById("olen-tpl-workout-v5")) {\n  const style = document.createElement("style");\n  style.id = "olen-tpl-workout-v5";\n  style.textContent = `\n    .otw-container * { box-sizing: border-box; }\n    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0 120px 0; font-family: Georgia, serif; }\n    .otw-container button, .otw-container input, .otw-modal-overlay button, .otw-modal-overlay input { border-radius: 0 !important; -webkit-appearance: none; appearance: none; }\n    .otw-container input[type="number"] { -moz-appearance: textfield; }\n    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 20px rgba(154,140,122,0.03); } 50% { box-shadow: inset 0 0 40px rgba(154,140,122,0.08); } }\n    @keyframes otw-pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }\n    .otw-card { background: #0a0a0a; border: 1px solid #3a342a; padding: 16px; position: relative; margin-bottom: 16px; }\n    .otw-card-breathe { animation: otw-breathe 6s ease-in-out infinite; }\n    .otw-header { text-align: center; padding: 20px; }\n    .otw-title { margin: 0; color: #9a8c7a; font-size: 24px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }\n    .otw-progress-label { color: #6a5a4a; font-size: 12px; margin-top: 8px; }\n    .otw-section-label { color: #6a5a4a; font-size: 10px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-align: center; margin: 20px 0 10px; }\n    .otw-week-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; }\n    .otw-week-day { display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 8px 4px; background: #0c0c0c; border: 1px solid #2a2520; }\n    .otw-week-day.today { border-color: #9a8c7a; }\n    .otw-week-day .otw-day-label { font-size: 9px; color: #6a5a4a; letter-spacing: 1px; text-transform: uppercase; }\n    .otw-week-day .otw-day-num { font-size: 13px; font-weight: 600; color: #6a5a4a; }\n    .otw-week-day .otw-day-icon { font-size: 14px; min-height: 18px; }\n    .otw-week-day.done .otw-day-num { color: #9a8c7a; }\n    .otw-stat-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }\n    .otw-stat-box { display: flex; flex-direction: column; align-items: center; padding: 12px 8px; background: #0c0c0c; border: 1px solid #2a2520; }\n    .otw-stat-value { font-size: 22px; font-weight: 700; color: #9a8c7a; line-height: 1; }\n    .otw-stat-label { font-size: 9px; color: #6a5a4a; letter-spacing: 1px; text-transform: uppercase; margin-top: 6px; }\n    .otw-recent-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: #0c0c0c; border: 1px solid #2a2520; margin-bottom: 4px; }\n    .otw-recent-date { font-size: 12px; color: #6a5a4a; }\n    .otw-recent-muscles { font-size: 11px; color: #9a8c7a; flex: 1; margin: 0 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }\n    .otw-recent-badge { font-size: 10px; padding: 3px 8px; font-weight: 700; letter-spacing: 1px; }\n    .otw-heatmap-wrap { display: flex; justify-content: center; gap: 16px; padding: 8px 0; }\n    .otw-heatmap-svg { width: 130px; height: auto; }\n    .otw-heatmap-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 14px; margin-top: 8px; padding: 0 8px; }\n    .otw-heatmap-legend-item { display: flex; align-items: center; gap: 5px; font-size: 8px; color: #6a5a4a; letter-spacing: 1px; text-transform: uppercase; }\n    .otw-heatmap-legend-dot { width: 8px; height: 8px; }\n    .otw-btn { padding: 14px 24px; border: none; border-radius: 0 !important; font-size: 13px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; -webkit-appearance: none; appearance: none; }\n    .otw-btn-primary { background: #9a8c7a; color: #0a0a0a; width: 100%; }\n    .otw-btn-primary:active { transform: scale(0.98); }\n    .otw-btn-secondary { background: #0f0f0f; border: 1px solid #3a342a; color: #6a5a4a; }\n    .otw-btn-secondary:active { border-color: #9a8c7a; color: #9a8c7a; }\n    .otw-btn-finish { background: #7a9a7d; color: #0a0a0a; }\n    .otw-btn-dashed { width: 100%; background: transparent; border: 1px dashed #3a342a; color: #6a5a4a; }\n    .otw-btn-dashed:active { border-color: #9a8c7a; color: #9a8c7a; }\n    .otw-nav-row { display: flex; gap: 12px; margin-top: 24px; }\n    .otw-nav-row .otw-btn { flex: 1; text-align: center; }\n    .otw-set-row { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 12px; padding: 12px; background: #0f0f0f; border: 1px solid #3a342a; margin-bottom: 6px; }\n    .otw-set-row.completed { opacity: 0.6; }\n    .otw-checkbox { width: 24px; height: 24px; border: 2px solid #3a342a; border-radius: 0 !important; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0a0a0a; font-weight: bold; transition: all 0.2s; flex-shrink: 0; }\n    .otw-checkbox.checked { background: #7a9a7d; border-color: #7a9a7d; }\n    .otw-input { padding: 6px; background: #0a0a0a; border: 1px solid #3a342a; border-radius: 0 !important; color: #9a8c7a; text-align: center; font-size: 14px; font-weight: 600; width: 50px; -webkit-appearance: none; appearance: none; }\n    .otw-ctrl-btn { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: #0f0f0f; border: 1px solid #3a342a; border-radius: 0 !important; color: #9a8c7a; cursor: pointer; font-size: 16px; flex-shrink: 0; -webkit-appearance: none; appearance: none; }\n    .otw-ctrl-btn:active { background: #9a8c7a; color: #0a0a0a; }\n    .otw-warmup-badge { font-size: 9px; color: #6a8a9a; padding: 2px 6px; background: rgba(106,138,154,0.15); border-radius: 3px; }\n    .otw-strength-bar { height: 6px; background: #1a1a1a; border-radius: 3px; overflow: hidden; margin-top: 6px; }\n    .otw-strength-fill { height: 100%; border-radius: 3px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }\n    .otw-strength-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }\n    .otw-pr-box { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; background: rgba(168,152,96,0.1); border: 1px solid rgba(168,152,96,0.3); border-radius: 4px; margin-top: 8px; }\n    .otw-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.5s ease, backdrop-filter 0.5s ease; }\n    .otw-modal-overlay.visible { background: rgba(0,0,0,0.95); backdrop-filter: blur(4px); }\n    .otw-modal-content { background: #0a0a0a; padding: 28px 20px; border: 1px solid #3a342a; max-width: 550px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 16px; position: relative; opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease, transform 0.5s ease; overflow-y: auto; }\n    .otw-modal-overlay.visible .otw-modal-content { opacity: 1; transform: translateY(0); }\n    .otw-summary-complete { text-align: center; padding: 24px 0; }\n    .otw-summary-complete h2 { margin: 0; color: #7a9a7d; font-size: 16px; font-weight: 700; letter-spacing: 3px; }\n    .otw-feel-btn { display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: #0c0c0c; cursor: pointer; margin-bottom: 10px; transition: all 0.2s; }\n    .otw-feel-btn:active { background: #101010; }\n    .otw-muscle-toggle { padding: 12px 18px; background: #0f0f0f; border: 1px solid #3a342a; border-radius: 0 !important; color: #9a8c7a; font-size: 13px; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }\n    .otw-muscle-toggle.active { background: rgba(154,140,122,0.3) !important; border-color: #9a8c7a !important; }\n    .otw-muscle-toggle:active { transform: translateY(-1px); }\n    .otw-subgroup-container { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease; opacity: 0; padding: 0 12px; }\n    .otw-subgroup-container.expanded { max-height: 200px; opacity: 1; padding: 12px; }\n    .otw-sub-toggle { padding: 8px 14px; background: #0f0f0f; border: 1px solid #3a342a; border-radius: 0 !important; color: #6a5a4a; font-size: 12px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }\n    .otw-sub-toggle.active { background: rgba(154,140,122,0.2); border-color: #9a8c7a; color: #9a8c7a; }\n  `;\n  document.head.appendChild(style);\n}\n\n// ============================================================\n// UTILITY FUNCTIONS\n// ============================================================\n\nfunction addCorners(el, color, size = 14) {\n  ["TL", "TR", "BL", "BR"].forEach((pos) => {\n    const c = document.createElement("div");\n    const isTop = pos.includes("T"), isLeft = pos.includes("L");\n    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;\n    el.appendChild(c);\n  });\n}\n\nfunction calculate1RM(weight, reps) {\n  if (reps === 0 || weight === 0) return 0;\n  if (reps === 1) return weight;\n  return Math.round(weight * (1 + reps / 30));\n}\n\nfunction getFirstWorkingSetIndex(sets) {\n  return sets.findIndex((s) => !s.isWarmup);\n}\n\nfunction updateWarmupWeights(ex, newW) {\n  const warmups = ex.sets.filter((s) => s.isWarmup);\n  [0.5, 0.7, 0.85].forEach((p, i) => {\n    if (warmups[i]) warmups[i].weight = Math.round(newW * p);\n  });\n}\n\n// ============================================================\n// PERSONAL STATS & STRENGTH STANDARDS\n// ============================================================\n\nasync function getPersonalStats() {\n  // Read from plugin settings (Personal Stats section)\n  return {\n    weight: PERSONAL.weight,\n    height: PERSONAL.height,\n    birthdate: PERSONAL.birthdate,\n  };\n}\n\nfunction calculateAge(bd) {\n  if (!bd) return 20;\n  const b = new Date(bd), t = new Date();\n  let a = t.getFullYear() - b.getFullYear();\n  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;\n  return a;\n}\n\nfunction parseStandardValue(val) {\n  if (typeof val !== "string") val = String(val);\n  val = val.trim();\n  if (val.includes("<")) {\n    const num = parseFloat(val.replace(/[<\\s]/g, ""));\n    return !isNaN(num) && num > 0 ? num * 0.5 : 0.1;\n  }\n  const num = parseFloat(val);\n  return isNaN(num) ? 0 : num;\n}\n\nasync function getStrengthStandard(exerciseName) {\n  const filePath = SETTINGS.exerciseDbFolder + "/" + exerciseName + ".md";\n  const fm = getFileMetadata(filePath);\n  const isBW = fm?.Type === "Bodyweight";\n  const content = await readFile(filePath);\n  if (!content) return null;\n  const lines = content.split("\\n");\n  const bwTable = [], ageTable = [];\n  let currentTable = null;\n  for (const line of lines) {\n    if (line.match(/\\|\\s*BW\\s*\\|/i)) { currentTable = "bw"; continue; }\n    if (line.match(/\\|\\s*Age\\s*\\|/i)) { currentTable = "age"; continue; }\n    if (line.startsWith("|---") || line.startsWith("| ---")) continue;\n    const m = line.match(/\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|/);\n    if (m) {\n      const row = { key: parseStandardValue(m[1]), beginner: parseStandardValue(m[2]), novice: parseStandardValue(m[3]), intermediate: parseStandardValue(m[4]), advanced: parseStandardValue(m[5]), elite: parseStandardValue(m[6]) };\n      if (row.key > 0 && (row.beginner > 0 || row.novice > 0 || row.intermediate > 0)) {\n        if (currentTable === "bw") bwTable.push(row);\n        else if (currentTable === "age") ageTable.push(row);\n      }\n    }\n  }\n  return { bwTable, ageTable, isBodyweight: isBW, hasValidData: bwTable.length > 0 || ageTable.length > 0 };\n}\n\nfunction interpolateStandard(table, value) {\n  if (!table || table.length === 0) return null;\n  const sorted = [...table].sort((a, b) => a.key - b.key);\n  let lower = sorted[0], upper = sorted[sorted.length - 1];\n  for (let i = 0; i < sorted.length - 1; i++) {\n    if (sorted[i].key <= value && sorted[i + 1].key >= value) { lower = sorted[i]; upper = sorted[i + 1]; break; }\n  }\n  if (value <= lower.key) return { ...lower };\n  if (value >= upper.key) return { ...upper };\n  const ratio = (value - lower.key) / (upper.key - lower.key);\n  return { key: value, beginner: lower.beginner + ratio * (upper.beginner - lower.beginner), novice: lower.novice + ratio * (upper.novice - lower.novice), intermediate: lower.intermediate + ratio * (upper.intermediate - lower.intermediate), advanced: lower.advanced + ratio * (upper.advanced - lower.advanced), elite: lower.elite + ratio * (upper.elite - lower.elite) };\n}\n\nasync function getAveragedStandards(std) {\n  const stats = await getPersonalStats();\n  const bw = interpolateStandard(std.bwTable, stats.weight);\n  const ag = interpolateStandard(std.ageTable, calculateAge(stats.birthdate));\n  if (bw && ag) return { beginner: (bw.beginner + ag.beginner) / 2, novice: (bw.novice + ag.novice) / 2, intermediate: (bw.intermediate + ag.intermediate) / 2, advanced: (bw.advanced + ag.advanced) / 2, elite: (bw.elite + ag.elite) / 2 };\n  return bw || ag || null;\n}\n\nfunction determineStrengthLevel(cv, std) {\n  if (!std || cv < 0) return { level: "Untrained", color: "#6a6a6a", progress: 0, nextTarget: std?.beginner || 1 };\n  const { beginner, novice, intermediate, advanced, elite } = std;\n  if (cv >= elite) return { level: "Elite", color: "#9a6a7a", progress: 100, nextTarget: null };\n  if (cv >= advanced) return { level: "Advanced", color: "#8a7a9a", progress: ((cv - advanced) / (elite - advanced)) * 100, nextTarget: elite };\n  if (cv >= intermediate) return { level: "Intermediate", color: "#6a8a9a", progress: ((cv - intermediate) / (advanced - intermediate)) * 100, nextTarget: advanced };\n  if (cv >= novice) return { level: "Novice", color: "#7a9a7d", progress: ((cv - novice) / (intermediate - novice)) * 100, nextTarget: intermediate };\n  if (cv >= beginner) return { level: "Beginner", color: "#a89860", progress: ((cv - beginner) / (novice - beginner)) * 100, nextTarget: novice };\n  return { level: "Untrained", color: "#6a6a6a", progress: beginner > 0 ? Math.max(0, (cv / beginner) * 100) : 0, nextTarget: beginner };\n}\n\nasync function calculateStrengthLevel(name, w, r, maxR) {\n  const std = await getStrengthStandard(name);\n  if (!std || !std.hasValidData) return null;\n  const avg = await getAveragedStandards(std);\n  if (!avg) return null;\n  if (std.isBodyweight) {\n    const eff = maxR !== null && maxR !== undefined ? Math.max(r, maxR) : r;\n    const res = determineStrengthLevel(eff, avg);\n    return { ...res, currentValue: eff, isBodyweight: true, unit: "reps", displayLabel: "Max Reps" };\n  } else {\n    if (w <= 0) return null;\n    const est = calculate1RM(w, r);\n    const res = determineStrengthLevel(est, avg);\n    return { ...res, currentValue: est, isBodyweight: false, unit: "kg", displayLabel: "Est. 1RM" };\n  }\n}\n\nasync function hasStrengthStandard(name) {\n  const std = await getStrengthStandard(name);\n  return std !== null && std.hasValidData;\n}\n\n// ============================================================\n// WORKOUT DATA \u2014 PR lookup, previous exercise loading\n// ============================================================\n\nasync function getExercisePR(name) {\n  const std = await getStrengthStandard(name);\n  const isBW = std?.isBodyweight || false;\n  const files = getFilesInFolder(SETTINGS.workoutFolder);\n  let best = null, bestV = 0;\n  for (const f of files) {\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises) && fm.Workout === true) {\n      const ex = fm.exercises.find((e) => e.name === name);\n      if (ex?.sets) {\n        for (const set of ex.sets) {\n          if (!set.isWarmup && set.completed) {\n            if (isBW) {\n              if (set.reps > bestV) { bestV = set.reps; best = { ...set, date: f.basename, prValue: bestV, isBodyweight: true }; }\n            } else if (set.weight > 0) {\n              const est = calculate1RM(set.weight, set.reps);\n              if (est > bestV) { bestV = est; best = { ...set, date: f.basename, estimated1RM: est, prValue: est, isBodyweight: false }; }\n            }\n          }\n        }\n      }\n    }\n  }\n  return best;\n}\n\nfunction getLastWorkoutForMuscleGroup(muscleGroup) {\n  const files = getFilesInFolder(SETTINGS.workoutFolder)\n    .sort((a, b) => b.basename.localeCompare(a.basename));\n  for (const f of files) {\n    if (f.path === file.path) continue; // skip current note\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises)) {\n      const relevant = fm.exercises.filter(ex => ex.muscle === muscleGroup || ex.muscleGroup === muscleGroup);\n      if (relevant.length > 0) return { date: f.basename, exercises: relevant };\n    }\n  }\n  return null;\n}\n\nfunction loadPreviousExercises(selectedMuscleGroups) {\n  const exercisesArray = [];\n  for (const muscle of selectedMuscleGroups) {\n    const lastWorkout = getLastWorkoutForMuscleGroup(muscle);\n    if (lastWorkout) {\n      for (const ex of lastWorkout.exercises) {\n        exercisesArray.push({\n          name: ex.name,\n          muscle: muscle,\n          muscleGroup: muscle,\n          sets: ex.sets ? ex.sets.map(s => ({\n            weight: s.weight || 0,\n            reps: s.reps || 10,\n            completed: false,\n            isWarmup: s.isWarmup || false\n          })) : [{ weight: 0, reps: 10, completed: false, isWarmup: false }]\n        });\n      }\n    }\n  }\n  return exercisesArray;\n}\n\n// ============================================================\n// SAVE STATE\n// ============================================================\n\nasync function saveState() {\n  await setMultipleData({\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n}\n\n// ============================================================\n// MODAL SYSTEM\n// ============================================================\n\nlet activeModal = null;\n\nfunction closeModal() {\n  if (!activeModal) return;\n  activeModal.classList.remove("visible");\n  setTimeout(() => {\n    if (activeModal?.parentNode) activeModal.parentNode.removeChild(activeModal);\n    activeModal = null;\n  }, 500);\n}\n\nfunction createModal(title, contentBuilder) {\n  if (activeModal) { activeModal.parentNode.removeChild(activeModal); activeModal = null; }\n  const modal = document.createElement("div");\n  modal.className = "otw-modal-overlay";\n  activeModal = modal;\n  const modalContent = document.createElement("div");\n  modalContent.className = "otw-modal-content";\n  modal.appendChild(modalContent);\n  addCorners(modalContent, THEME.color);\n  if (title) {\n    const t = document.createElement("h2");\n    t.textContent = title;\n    t.style.cssText = `margin:0;color:${THEME.color};font-size:14px;font-weight:500;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    modalContent.appendChild(t);\n    const d = document.createElement("div");\n    d.style.cssText = `width:60px;height:1px;background:linear-gradient(90deg,transparent,${THEME.color},transparent);margin:0 auto 12px;`;\n    modalContent.appendChild(d);\n  }\n  contentBuilder(modalContent);\n  modal.onclick = (e) => { if (e.target === modal) closeModal(); };\n  document.body.appendChild(modal);\n  requestAnimationFrame(() => modal.classList.add("visible"));\n  return modal;\n}\n\n// ============================================================\n// POST-COMPLETION NAVIGATION\n// ============================================================\n\nfunction getReturnDestination() {\n  // Look up the current activity\'s config from plugin settings\n  const activityId = getData("activity");\n  const activities = ctx.plugin?.settings?.activities;\n  if (activities && activityId) {\n    const actConfig = activities.find(a => a.id === activityId);\n    if (actConfig?.completionReturnTo) return actConfig.completionReturnTo;\n  }\n  return "dashboard"; // default\n}\n\nfunction navigateAfterCompletion() {\n  const dest = getReturnDestination();\n  if (dest === "stay") return; // do nothing, stay on completion summary\n  if (dest === "dashboard") {\n    // Use Olen\'s built-in dashboard activation\n    if (ctx.plugin?.activateDashboardView) {\n      setTimeout(() => ctx.plugin.activateDashboardView(), 600);\n    }\n    return;\n  }\n  if (dest === "homepage") {\n    // Open the global homepage file defined in Profile settings\n    const homepagePath = ctx.plugin?.settings?.homepage;\n    if (!homepagePath) { notice("No homepage set \u2014 go to Olen Settings > Profile to define one."); return; }\n    const targetFile = app.vault.getAbstractFileByPath(homepagePath);\n    if (targetFile) {\n      setTimeout(() => app.workspace.getLeaf(false).openFile(targetFile), 600);\n    } else {\n      notice("Homepage file not found: " + homepagePath);\n    }\n    return;\n  }\n}\n\n// ============================================================\n// FINISH WORKOUT\n// ============================================================\n\nasync function finishWorkout(type) {\n  await setMultipleData({\n    Workout: true,\n    "Workout-Type": type,\n    Timestamp: moment().format(),\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n  notice("Workout logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");\n  navigateAfterCompletion();\n}\n\nasync function openFinishModal() {\n  // Build session analytics data\n  const summaryData = [];\n  for (const ex of exercises) {\n    const completed = ex.sets.filter(s => !s.isWarmup && s.completed);\n    if (completed.length > 0) {\n      const pr = await getExercisePR(ex.name);\n      let bestW = 0, bestR = 0, maxR = 0, sessionBest = 0;\n      for (const s of completed) {\n        if (s.reps > maxR) maxR = s.reps;\n        if (s.weight > 0) {\n          const est = calculate1RM(s.weight, s.reps);\n          if (est > sessionBest) { sessionBest = est; bestW = s.weight; bestR = s.reps; }\n        } else if (s.reps > sessionBest) { sessionBest = s.reps; bestR = s.reps; }\n      }\n      const sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR);\n      summaryData.push({ name: ex.name, muscle: ex.muscle || ex.muscleGroup, bestW, bestR, maxR, sessionBest, sl, pr, completedSets: completed.length, totalSets: ex.sets.filter(s => !s.isWarmup).length });\n    }\n  }\n\n  createModal(null, (content) => {\n    // Scrollable area\n    const scroll = document.createElement("div");\n    scroll.style.cssText = "overflow-y:auto;display:flex;flex-direction:column;gap:16px;flex:1;max-height:70vh;";\n    content.appendChild(scroll);\n\n    // Title\n    const title = document.createElement("h2");\n    title.textContent = "WORKOUT COMPLETE";\n    title.style.cssText = `margin:0;color:${THEME.systemGreen};font-size:16px;font-weight:700;letter-spacing:3px;text-align:center;`;\n    scroll.appendChild(title);\n\n    // Session summary cards\n    if (summaryData.length > 0) {\n      const sec = document.createElement("div");\n      sec.style.cssText = "display:flex;flex-direction:column;gap:12px;";\n      scroll.appendChild(sec);\n\n      const secTitle = document.createElement("div");\n      secTitle.textContent = "SESSION SUMMARY";\n      secTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;`;\n      sec.appendChild(secTitle);\n\n      for (const ex of summaryData) {\n        const card = document.createElement("div");\n        card.style.cssText = `padding:14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};`;\n        sec.appendChild(card);\n\n        // Exercise name + strength badge\n        const hdr = document.createElement("div");\n        hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;";\n        card.appendChild(hdr);\n\n        const nm = document.createElement("span");\n        nm.textContent = ex.name;\n        nm.style.cssText = `color:${THEME.color};font-weight:600;font-size:14px;`;\n        hdr.appendChild(nm);\n\n        if (ex.sl) {\n          const li = STRENGTH_LEVELS[ex.sl.level];\n          const badge = document.createElement("span");\n          badge.style.cssText = `display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:${ex.sl.color}20;border:1px solid ${ex.sl.color}50;color:${ex.sl.color};font-size:11px;font-weight:700;letter-spacing:1px;`;\n          badge.textContent = (li?.icon || "\\u25CB") + " " + ex.sl.level.toUpperCase();\n          hdr.appendChild(badge);\n        }\n\n        // Best set + estimated 1RM\n        const stats = document.createElement("div");\n        stats.style.cssText = `display:flex;justify-content:space-between;margin-bottom:8px;font-size:12px;`;\n        card.appendChild(stats);\n\n        const setInfo = document.createElement("span");\n        setInfo.textContent = ex.sl?.isBodyweight ? "Best: " + ex.maxR + " reps" : "Best: " + ex.bestW + "kg \\u00D7 " + ex.bestR;\n        setInfo.style.cssText = `color:${THEME.colorMuted};`;\n        stats.appendChild(setInfo);\n\n        if (ex.sl) {\n          const rmInfo = document.createElement("span");\n          rmInfo.textContent = ex.sl.displayLabel + ": " + ex.sl.currentValue + ex.sl.unit;\n          rmInfo.style.cssText = `color:${THEME.color};font-weight:600;`;\n          stats.appendChild(rmInfo);\n        }\n\n        // Sets completed\n        const setsInfo = document.createElement("div");\n        setsInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-bottom:8px;`;\n        setsInfo.textContent = ex.completedSets + "/" + ex.totalSets + " working sets completed";\n        card.appendChild(setsInfo);\n\n        // PR comparison\n        if (ex.pr) {\n          const prC = document.createElement("div");\n          prC.style.cssText = `font-size:11px;margin-bottom:8px;padding:6px 8px;`;\n          const cv = ex.sl?.currentValue || ex.sessionBest;\n          if (cv > ex.pr.prValue) {\n            prC.style.background = "rgba(122,154,125,0.15)";\n            prC.innerHTML = \'<span style="color:#7a9a7d;font-weight:700;">\\uD83C\\uDF89 NEW PR!</span> <span style="color:\' + THEME.colorMuted + \';">Previous: \' + ex.pr.prValue + \' \\u2192 Now: \' + cv + \'</span>\';\n          } else if (cv === ex.pr.prValue) {\n            prC.style.background = "rgba(168,152,96,0.1)";\n            prC.innerHTML = \'<span style="color:#a89860;">\\uD83C\\uDFC6 Matched PR:</span> <span style="color:\' + THEME.colorMuted + \';">\' + ex.pr.prValue + \'</span>\';\n          } else {\n            prC.style.background = "rgba(168,152,96,0.1)";\n            prC.innerHTML = \'<span style="color:\' + THEME.colorMuted + \';">\\uD83C\\uDFC6 PR: \' + ex.pr.prValue + \'</span> <span style="color:#6a6a6a;">(today: \' + cv + \')</span>\';\n          }\n          card.appendChild(prC);\n        }\n\n        // Progress bar to next strength level\n        if (ex.sl && ex.sl.nextTarget) {\n          const pb = document.createElement("div");\n          pb.className = "otw-strength-bar";\n          pb.style.marginTop = "8px";\n          card.appendChild(pb);\n          const fill = document.createElement("div");\n          fill.className = "otw-strength-fill";\n          fill.style.cssText = `width:${Math.min(100, ex.sl.progress)}%;background:${ex.sl.color};`;\n          pb.appendChild(fill);\n          const ti = document.createElement("div");\n          ti.style.cssText = `display:flex;justify-content:space-between;font-size:9px;color:${THEME.colorMuted};margin-top:4px;`;\n          ti.innerHTML = "<span>Current: " + ex.sl.currentValue + ex.sl.unit + "</span><span>Next: " + Math.round(ex.sl.nextTarget) + ex.sl.unit + "</span>";\n          card.appendChild(ti);\n        }\n      }\n    }\n\n    // "How did it feel?" section\n    const feelTitle = document.createElement("h3");\n    feelTitle.textContent = "How did it feel?";\n    feelTitle.style.cssText = `margin:8px 0 0 0;color:${THEME.color};font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    scroll.appendChild(feelTitle);\n\n    const btns = document.createElement("div");\n    btns.style.cssText = "display:flex;flex-direction:column;gap:10px;";\n    scroll.appendChild(btns);\n\n    // Discipline button\n    const discBtn = document.createElement("div");\n    discBtn.className = "otw-feel-btn";\n    discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;\n    discBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\\uD83D\\uDC8E</span><div style="flex:1;"><div style="color:${THEME.colorDiscipline};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through resistance</div></div><div style="color:#4a4030;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    discBtn.onclick = async () => { closeModal(); await finishWorkout("discipline"); };\n    btns.appendChild(discBtn);\n\n    // Flow button\n    const flowBtn = document.createElement("div");\n    flowBtn.className = "otw-feel-btn";\n    flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;\n    flowBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\\uD83C\\uDF0A</span><div style="flex:1;"><div style="color:${THEME.colorFlow};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Felt natural and effortless</div></div><div style="color:#304050;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    flowBtn.onclick = async () => { closeModal(); await finishWorkout("flow"); };\n    btns.appendChild(flowBtn);\n  });\n}\n\n// ============================================================\n// ADD EXERCISE MODAL\n// ============================================================\n\nfunction openAddExerciseModal(muscle) {\n  createModal("Add Exercise - " + muscle, (content) => {\n    const nameInput = document.createElement("input");\n    nameInput.type = "text";\n    nameInput.placeholder = "Exercise name...";\n    nameInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;`;\n    content.appendChild(nameInput);\n\n    const warmupLabel = document.createElement("div");\n    warmupLabel.textContent = "Include warmup sets?";\n    warmupLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(warmupLabel);\n\n    let incWarmup = true;\n    const warmupRow = document.createElement("div");\n    warmupRow.style.cssText = "display:flex;gap:8px;margin-top:8px;";\n    content.appendChild(warmupRow);\n\n    const yesBtn = document.createElement("button");\n    yesBtn.textContent = "Yes (suggested)";\n    yesBtn.className = "otw-btn otw-btn-secondary";\n    yesBtn.style.cssText += `flex:1;background:rgba(154,140,122,0.2);border-color:${THEME.color};color:${THEME.color};`;\n    const noBtn = document.createElement("button");\n    noBtn.textContent = "No";\n    noBtn.className = "otw-btn otw-btn-secondary";\n    noBtn.style.flex = "1";\n    yesBtn.onclick = () => { incWarmup = true; yesBtn.style.background = "rgba(154,140,122,0.2)"; yesBtn.style.borderColor = THEME.color; noBtn.style.background = "#0f0f0f"; noBtn.style.borderColor = THEME.colorBorder; };\n    noBtn.onclick = () => { incWarmup = false; noBtn.style.background = "rgba(154,140,122,0.2)"; noBtn.style.borderColor = THEME.color; yesBtn.style.background = "#0f0f0f"; yesBtn.style.borderColor = THEME.colorBorder; };\n    warmupRow.appendChild(yesBtn);\n    warmupRow.appendChild(noBtn);\n\n    const weightLabel = document.createElement("div");\n    weightLabel.textContent = "Working weight (kg) - 0 for bodyweight";\n    weightLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(weightLabel);\n\n    const weightInput = document.createElement("input");\n    weightInput.type = "number";\n    weightInput.placeholder = "0";\n    weightInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;margin-top:8px;`;\n    content.appendChild(weightInput);\n\n    const btnRow = document.createElement("div");\n    btnRow.style.cssText = "display:flex;gap:12px;margin-top:16px;";\n    content.appendChild(btnRow);\n\n    const cancelBtn = document.createElement("button");\n    cancelBtn.textContent = "Cancel";\n    cancelBtn.className = "otw-btn otw-btn-secondary";\n    cancelBtn.style.flex = "1";\n    cancelBtn.onclick = () => closeModal();\n    btnRow.appendChild(cancelBtn);\n\n    const addBtn = document.createElement("button");\n    addBtn.textContent = "Add Exercise";\n    addBtn.className = "otw-btn otw-btn-primary";\n    addBtn.style.flex = "1";\n    addBtn.onclick = async () => {\n      const name = nameInput.value.trim();\n      if (!name) { notice("Please enter an exercise name"); return; }\n      const ww = parseFloat(weightInput.value) || 0;\n      const sets = [];\n      if (incWarmup && ww > 0) {\n        sets.push({ weight: Math.round(ww * 0.5), reps: 10, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.7), reps: 6, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.85), reps: 3, completed: false, isWarmup: true });\n      }\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      exercises.push({ name, muscle, muscleGroup: muscle, sets });\n      closeModal();\n      await saveState();\n      render();\n    };\n    btnRow.appendChild(addBtn);\n\n    setTimeout(() => nameInput.focus(), 100);\n  });\n}\n\n// ============================================================\n// RENDER: SET ROW\n// ============================================================\n\nfunction renderSet(setsContainer, set, setIdx, ex, warmupRefs) {\n  const row = document.createElement("div");\n  row.className = "otw-set-row" + (set.completed ? " completed" : "");\n  setsContainer.appendChild(row);\n  const refs = { weightInput: null };\n\n  // Checkbox\n  const cb = document.createElement("div");\n  cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n  cb.textContent = set.completed ? "\\u2713" : "";\n  cb.onclick = async () => {\n    set.completed = !set.completed;\n    cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n    cb.textContent = set.completed ? "\\u2713" : "";\n    row.className = "otw-set-row" + (set.completed ? " completed" : "");\n    await saveState();\n  };\n  row.appendChild(cb);\n\n  // Middle: weight + reps\n  const mid = document.createElement("div");\n  mid.style.cssText = "display:flex;align-items:center;gap:12px;flex-wrap:wrap;";\n  row.appendChild(mid);\n\n  // Weight input\n  const wWrap = document.createElement("div");\n  wWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(wWrap);\n  const wInput = document.createElement("input");\n  wInput.type = "number";\n  wInput.value = set.weight;\n  wInput.className = "otw-input";\n  const firstW = getFirstWorkingSetIndex(ex.sets);\n  const isFirst = !set.isWarmup && setIdx === firstW;\n  wInput.onchange = async (e) => {\n    const nw = parseFloat(e.target.value) || 0;\n    set.weight = nw;\n    if (isFirst) {\n      updateWarmupWeights(ex, nw);\n      const ws = ex.sets.filter((s) => s.isWarmup);\n      warmupRefs.forEach((inp, i) => { if (ws[i]) inp.value = ws[i].weight; });\n    }\n    await saveState();\n  };\n  wWrap.appendChild(wInput);\n  refs.weightInput = wInput;\n  const kgLabel = document.createElement("span");\n  kgLabel.textContent = "kg";\n  kgLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;`;\n  wWrap.appendChild(kgLabel);\n\n  // Reps controls\n  const rWrap = document.createElement("div");\n  rWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(rWrap);\n  const minusBtn = document.createElement("button");\n  minusBtn.className = "otw-ctrl-btn";\n  minusBtn.textContent = "\\u2212";\n  minusBtn.onclick = async () => { if (set.reps > 1) { set.reps--; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); } };\n  rWrap.appendChild(minusBtn);\n  const rDisp = document.createElement("span");\n  rDisp.textContent = set.reps + "\\u00D7";\n  rDisp.style.cssText = `color:${THEME.color};font-size:14px;font-weight:600;min-width:30px;text-align:center;`;\n  rWrap.appendChild(rDisp);\n  const plusBtn = document.createElement("button");\n  plusBtn.className = "otw-ctrl-btn";\n  plusBtn.textContent = "+";\n  plusBtn.onclick = async () => { set.reps++; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); };\n  rWrap.appendChild(plusBtn);\n\n  if (set.isWarmup) {\n    const badge = document.createElement("span");\n    badge.className = "otw-warmup-badge";\n    badge.textContent = "\\u26A1 Warmup";\n    mid.appendChild(badge);\n  }\n\n  // Delete set button\n  if (ex.sets.length > 1) {\n    const delBtn = document.createElement("button");\n    delBtn.textContent = "\\u00D7";\n    delBtn.style.cssText = `width:28px;height:28px;background:transparent;border:1px solid #3a2828;color:#6a4a4a;cursor:pointer;font-size:16px;`;\n    delBtn.onclick = async () => { ex.sets.splice(setIdx, 1); await saveState(); render(); };\n    row.appendChild(delBtn);\n  } else {\n    const ph = document.createElement("div");\n    ph.style.width = "28px";\n    row.appendChild(ph);\n  }\n\n  return refs;\n}\n\n// ============================================================\n// RENDER: EXERCISE CARD\n// ============================================================\n\nasync function renderExercise(exContainer, ex) {\n  const card = document.createElement("div");\n  card.className = "otw-card";\n  exContainer.appendChild(card);\n  addCorners(card, THEME.color, 12);\n\n  const exHeader = document.createElement("div");\n  exHeader.style.cssText = `display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid ${THEME.colorBorder};`;\n  card.appendChild(exHeader);\n\n  const leftCol = document.createElement("div");\n  leftCol.style.flex = "1";\n  exHeader.appendChild(leftCol);\n\n  const exTitle = document.createElement("h3");\n  exTitle.textContent = ex.name;\n  exTitle.style.cssText = `margin:0 0 8px 0;color:${THEME.color};font-size:16px;letter-spacing:1px;`;\n  leftCol.appendChild(exTitle);\n\n  // Strength level + PR info\n  const hasStd = await hasStrengthStandard(ex.name);\n  const pr = await getExercisePR(ex.name);\n  const workingSets = ex.sets.filter((s) => !s.isWarmup);\n  let bestW = 0, bestR = 0, maxR = 0;\n  workingSets.forEach((s) => { if (s.reps > maxR) maxR = s.reps; if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; } });\n\n  if (hasStd) {\n    let sl;\n    if (pr) { sl = pr.isBodyweight ? await calculateStrengthLevel(ex.name, 0, pr.prValue, pr.prValue) : await calculateStrengthLevel(ex.name, pr.weight, pr.reps, null); }\n    else if (bestW > 0 || maxR > 0) { sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR); }\n    if (sl) {\n      const li = STRENGTH_LEVELS[sl.level];\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText += `background:${sl.color}25;border:1px solid ${sl.color}60;color:${sl.color};`;\n      badge.textContent = (li?.icon || "\\u25CB") + " " + sl.level.toUpperCase();\n      leftCol.appendChild(badge);\n\n      const rmInfo = document.createElement("div");\n      rmInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-top:6px;`;\n      rmInfo.innerHTML = `<strong style="color:${THEME.color}">${sl.displayLabel}: ${sl.currentValue}${sl.unit}</strong>`;\n      if (sl.nextTarget) rmInfo.innerHTML += ` \\u2192 Next: ${Math.round(sl.nextTarget)}${sl.unit}`;\n      leftCol.appendChild(rmInfo);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      leftCol.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, sl.progress)}%;background:${sl.color};`;\n      pb.appendChild(fill);\n    }\n  }\n\n  if (pr) {\n    const prBox = document.createElement("div");\n    prBox.className = "otw-pr-box";\n    const prTitle = document.createElement("div");\n    prTitle.style.cssText = "font-size:11px;color:#a89860;font-weight:700;letter-spacing:1px;";\n    prTitle.textContent = pr.isBodyweight ? "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.prValue + " reps" : "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.estimated1RM + "kg (1RM)";\n    prBox.appendChild(prTitle);\n    const prDetail = document.createElement("div");\n    prDetail.style.cssText = `font-size:10px;color:${THEME.colorMuted};`;\n    prDetail.textContent = pr.isBodyweight ? "Best: " + pr.reps + " reps" : "Set: " + pr.weight + "kg \\u00D7 " + pr.reps + " reps";\n    prBox.appendChild(prDetail);\n    leftCol.appendChild(prBox);\n  }\n\n  // Delete exercise button\n  const delExBtn = document.createElement("button");\n  delExBtn.textContent = "\\uD83D\\uDDD1\\uFE0F";\n  delExBtn.style.cssText = "background:transparent;border:none;cursor:pointer;font-size:14px;opacity:0.5;";\n  delExBtn.onclick = async () => { const idx = exercises.indexOf(ex); if (idx > -1) { exercises.splice(idx, 1); await saveState(); render(); } };\n  exHeader.appendChild(delExBtn);\n\n  // Sets\n  const setsContainer = document.createElement("div");\n  setsContainer.style.cssText = "display:flex;flex-direction:column;gap:6px;";\n  card.appendChild(setsContainer);\n  const warmupRefs = [];\n  ex.sets.forEach((set, setIdx) => {\n    const refs = renderSet(setsContainer, set, setIdx, ex, warmupRefs);\n    if (set.isWarmup && refs.weightInput) warmupRefs.push(refs.weightInput);\n  });\n\n  // Add set button\n  const addSetBtn = document.createElement("button");\n  addSetBtn.textContent = "+ Add Set";\n  addSetBtn.className = "otw-btn otw-btn-dashed";\n  addSetBtn.style.cssText += "margin-top:8px;padding:8px 12px;font-size:12px;";\n  addSetBtn.onclick = async () => {\n    const last = ex.sets[ex.sets.length - 1] || { weight: 0, reps: 10 };\n    ex.sets.push({ weight: last.weight, reps: last.reps, completed: false, isWarmup: false });\n    await saveState();\n    render();\n  };\n  card.appendChild(addSetBtn);\n}\n\n// ============================================================\n// STATISTICS & HEATMAP DATA\n// ============================================================\n\n// Map muscle/subgroup names \u2192 body regions for the heatmap\nconst MUSCLE_TO_REGION = {\n  Neck: ["neck"], Chest: ["chest"], Core: ["core"],\n  Back: ["lats", "traps", "lower_back"], Lats: ["lats"], Traps: ["traps"],\n  Rhomboids: ["traps"], "Lower Back": ["lower_back"], "Rear Delts": ["rear_delts"],\n  Shoulders: ["front_delts", "rear_delts"], "Front Delts": ["front_delts"],\n  "Side Delts": ["front_delts"],\n  Legs: ["quads", "hamstrings", "glutes", "calves"], Quads: ["quads"],\n  Hamstrings: ["hamstrings"], Glutes: ["glutes"], Calves: ["calves"],\n  Adductors: ["quads"],\n  Arms: ["biceps", "triceps", "forearms"], Biceps: ["biceps"],\n  Triceps: ["triceps"], Forearms: ["forearms"],\n};\n\nfunction getWeeklyCalendarData() {\n  const today = moment().startOf("day");\n  const weekStart = today.clone().startOf("isoWeek");\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const days = [];\n  for (let i = 0; i < 7; i++) {\n    const day = weekStart.clone().add(i, "days");\n    const dayStr = day.format("YYYY-MM-DD");\n    const isToday = day.isSame(today, "day");\n    const isPast = day.isBefore(today, "day");\n    let status = null, type = null;\n    for (const wFile of allFiles) {\n      if (wFile.basename === dayStr) {\n        const fm = getFileMetadata(wFile.path);\n        if (fm && fm.Workout === true) { status = "done"; type = fm["Workout-Type"] || "done"; }\n        break;\n      }\n    }\n    days.push({ label: day.format("dd")[0], num: day.format("D"), isToday, isPast, status, type });\n  }\n  return days;\n}\n\nfunction getMonthlyStats() {\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const now = moment();\n  const weekStart = now.clone().startOf("isoWeek");\n  const monthStart = now.clone().startOf("month");\n  let thisWeek = 0, thisMonth = 0, total = 0, totalSets = 0, totalVolume = 0;\n  for (const wFile of allFiles) {\n    const fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true) continue;\n    total++;\n    const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n    if (!dateMatch) continue;\n    const fileDate = moment(dateMatch[1], "YYYY-MM-DD");\n    if (fileDate.isSameOrAfter(weekStart)) thisWeek++;\n    if (fileDate.isSameOrAfter(monthStart)) thisMonth++;\n    if (Array.isArray(fm.exercises)) {\n      for (const ex of fm.exercises) {\n        if (!Array.isArray(ex.sets)) continue;\n        for (const s of ex.sets) {\n          if (s.completed && !s.isWarmup) { totalSets++; totalVolume += (s.weight || 0) * (s.reps || 0); }\n        }\n      }\n    }\n  }\n  return { thisWeek, thisMonth, total, totalSets, totalVolume };\n}\n\nfunction getRecentSessions(limit) {\n  limit = limit || 4;\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const sorted = allFiles.sort(function(a, b) { return b.basename.localeCompare(a.basename); });\n  const sessions = [];\n  for (var i = 0; i < sorted.length; i++) {\n    if (sessions.length >= limit) break;\n    var wFile = sorted[i];\n    if (wFile.path === file.path) continue;\n    var fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true) continue;\n    var dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n    sessions.push({\n      date: dateMatch ? dateMatch[1] : wFile.basename,\n      type: fm["Workout-Type"] || "done",\n      muscles: fm.muscleGroups || [],\n    });\n  }\n  return sessions;\n}\n\n// Build strength level data per body region from ALL completed workouts\nasync function getMuscleLevelData() {\n  const exerciseBest = {}; // exerciseName \u2192 { weight, reps, maxReps, muscle }\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  for (const wFile of allFiles) {\n    if (wFile.path === file.path) continue;\n    const fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n    for (const ex of fm.exercises) {\n      const done = (ex.sets || []).filter(function(s) { return s.completed && !s.isWarmup; });\n      if (done.length === 0) continue;\n      let bestW = 0, bestR = 0, maxR = 0;\n      for (const s of done) {\n        if (s.reps > maxR) maxR = s.reps;\n        if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; }\n      }\n      const existing = exerciseBest[ex.name];\n      if (!existing) {\n        exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };\n      } else {\n        const oldVal = existing.weight > 0 ? calculate1RM(existing.weight, existing.reps) : existing.maxReps;\n        const newVal = bestW > 0 ? calculate1RM(bestW, bestR) : maxR;\n        if (newVal > oldVal) exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };\n      }\n    }\n  }\n  // Calculate strength level per exercise, map to body regions\n  const regionEntries = {};\n  for (const [exName, data] of Object.entries(exerciseBest)) {\n    const sl = await calculateStrengthLevel(exName, data.weight, data.reps, data.maxReps);\n    if (!sl) continue;\n    const regions = MUSCLE_TO_REGION[data.muscle] || [];\n    for (const region of regions) {\n      if (!regionEntries[region]) regionEntries[region] = [];\n      regionEntries[region].push({ level: sl.level, color: sl.color, progress: sl.progress });\n    }\n  }\n  // Pick the best strength level per region\n  const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];\n  const result = {};\n  for (const [region, entries] of Object.entries(regionEntries)) {\n    let best = entries[0], bestIdx = levelOrder.indexOf(entries[0].level);\n    for (let i = 1; i < entries.length; i++) {\n      const idx = levelOrder.indexOf(entries[i].level);\n      if (idx > bestIdx) { bestIdx = idx; best = entries[i]; }\n    }\n    result[region] = best;\n  }\n  return result;\n}\n\n// ============================================================\n// BODY HEATMAP SVG \u2014 Interactive with click-to-show-progress\n// ============================================================\n\nconst REGION_LABELS = {\n  neck: "Neck", chest: "Chest", front_delts: "Front Delts", rear_delts: "Rear Delts",\n  biceps: "Biceps", triceps: "Triceps", forearms: "Forearms", core: "Core",\n  quads: "Quads", calves: "Calves", traps: "Traps", lats: "Lats",\n  lower_back: "Lower Back", glutes: "Glutes", hamstrings: "Hamstrings",\n};\n\nfunction buildInteractiveBodySvg(view, muscleLevels, onRegionClick) {\n  const untrained = "#1a1816";\n  function fill(region) {\n    const d = muscleLevels[region];\n    return d ? d.color + "90" : untrained;\n  }\n  function stroke(region) {\n    const d = muscleLevels[region];\n    return d ? d.color + "40" : "#2a2520";\n  }\n\n  const head = \'<ellipse cx="50" cy="14" rx="10" ry="11" fill="#0c0c0c" stroke="#2a2520" stroke-width="0.8"/>\';\n\n  const frontPaths = {\n    neck:       \'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>\',\n    front_delts:\'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>\',\n    chest:      \'<path d="M31,37 L49,37 L49,55 C49,57 42,60 33,58 L31,56 Z"/><path d="M51,37 L69,37 L69,56 L67,58 C58,60 51,57 51,55 Z"/>\',\n    biceps:     \'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>\',\n    forearms:   \'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>\',\n    core:       \'<path d="M33,58 L67,58 L65,82 L35,82 Z"/>\',\n    quads:      \'<path d="M35,84 L49,84 L48,136 L34,136 Z"/><path d="M51,84 L65,84 L66,136 L52,136 Z"/>\',\n    calves:     \'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>\',\n  };\n\n  const backPaths = {\n    neck:       \'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>\',\n    traps:      \'<path d="M39,33 L50,27 L61,33 L59,43 L50,39 L41,43 Z"/>\',\n    rear_delts: \'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>\',\n    lats:       \'<path d="M33,43 L41,43 L50,39 L59,43 L67,43 L65,66 L50,70 L35,66 Z"/>\',\n    triceps:    \'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>\',\n    forearms:   \'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>\',\n    lower_back: \'<path d="M35,66 L50,70 L65,66 L65,82 L35,82 Z"/>\',\n    glutes:     \'<path d="M35,82 L49,82 L49,94 C47,98 37,98 35,94 Z"/><path d="M51,82 L65,82 L65,94 C63,98 53,98 51,94 Z"/>\',\n    hamstrings: \'<path d="M35,96 L49,96 L48,136 L34,136 Z"/><path d="M51,96 L65,96 L66,136 L52,136 Z"/>\',\n    calves:     \'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>\',\n  };\n\n  const regions = view === "front" ? frontPaths : backPaths;\n\n  // Build DOM SVG (not innerHTML) for click events\n  const ns = "http://www.w3.org/2000/svg";\n  const svg = document.createElementNS(ns, "svg");\n  svg.setAttribute("viewBox", "0 0 100 210");\n  svg.setAttribute("class", "otw-heatmap-svg");\n\n  // Head\n  const headG = document.createElementNS(ns, "g");\n  headG.innerHTML = head;\n  svg.appendChild(headG);\n\n  // Muscle regions with click handlers\n  for (const [region, pathData] of Object.entries(regions)) {\n    const g = document.createElementNS(ns, "g");\n    g.setAttribute("fill", fill(region));\n    g.setAttribute("stroke", stroke(region));\n    g.setAttribute("stroke-width", "0.6");\n    g.style.cursor = "pointer";\n    g.style.transition = "opacity 0.15s";\n    g.innerHTML = pathData;\n\n    // Hover effect\n    g.addEventListener("mouseenter", () => { g.style.opacity = "0.7"; });\n    g.addEventListener("mouseleave", () => { g.style.opacity = "1"; });\n\n    // Click \u2192 show progress popup for this muscle\n    g.addEventListener("click", (e) => {\n      e.stopPropagation();\n      if (onRegionClick) onRegionClick(region);\n    });\n\n    svg.appendChild(g);\n  }\n\n  // Label\n  const label = view === "front" ? "FRONT" : "BACK";\n  const txt = document.createElementNS(ns, "text");\n  txt.setAttribute("x", "50");\n  txt.setAttribute("y", "207");\n  txt.setAttribute("text-anchor", "middle");\n  txt.setAttribute("fill", "#4a4030");\n  txt.setAttribute("font-size", "8");\n  txt.setAttribute("font-family", "Georgia,serif");\n  txt.setAttribute("letter-spacing", "2");\n  txt.textContent = label;\n  svg.appendChild(txt);\n\n  return svg;\n}\n\n// \u2500\u2500 Muscle Progress Popup (when clicking a muscle on the heatmap) \u2500\u2500\n\nfunction showMuscleProgressPopup(regionId, muscleLevels) {\n  const label = REGION_LABELS[regionId] || regionId;\n  const levelData = muscleLevels[regionId];\n\n  createModal(label.toUpperCase(), (content) => {\n    // Current strength level\n    if (levelData) {\n      const li = STRENGTH_LEVELS[levelData.level];\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText = `background:${levelData.color}25;border:1px solid ${levelData.color}60;color:${levelData.color};margin:8px auto;display:inline-flex;`;\n      badge.textContent = (li?.icon || "\\u25CB") + " " + levelData.level.toUpperCase();\n      content.appendChild(badge);\n\n      if (levelData.progress !== undefined) {\n        const pb = document.createElement("div");\n        pb.className = "otw-strength-bar";\n        pb.style.marginTop = "12px";\n        content.appendChild(pb);\n        const fill = document.createElement("div");\n        fill.className = "otw-strength-fill";\n        fill.style.cssText = `width:${Math.min(100, levelData.progress)}%;background:${levelData.color};`;\n        pb.appendChild(fill);\n      }\n    } else {\n      const noData = document.createElement("div");\n      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-style:italic;padding:16px;font-size:12px;`;\n      noData.textContent = "No workout data for this muscle yet";\n      content.appendChild(noData);\n    }\n\n    // Monthly workout frequency chart\n    const chartLabel = document.createElement("div");\n    chartLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:20px;`;\n    chartLabel.textContent = "MONTHLY FREQUENCY";\n    content.appendChild(chartLabel);\n\n    // Find workouts that targeted this region in the last 30 days\n    const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n    const reverseMap = {};\n    for (const [muscle, regions] of Object.entries(MUSCLE_TO_REGION)) {\n      for (const r of regions) {\n        if (!reverseMap[r]) reverseMap[r] = [];\n        reverseMap[r].push(muscle);\n      }\n    }\n    const targetMuscles = reverseMap[regionId] || [];\n\n    // Count workouts per week (last 4 weeks)\n    const now = moment();\n    const weekCounts = [0, 0, 0, 0];\n    for (const wFile of allFiles) {\n      const fm = getFileMetadata(wFile.path);\n      if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n      const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n      if (!dateMatch) continue;\n      const fileDate = moment(dateMatch[1], "YYYY-MM-DD");\n      const daysAgo = now.diff(fileDate, "days");\n      if (daysAgo < 0 || daysAgo > 28) continue;\n      const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));\n      if (hasMuscle) {\n        const weekIdx = Math.floor(daysAgo / 7);\n        if (weekIdx < 4) weekCounts[3 - weekIdx]++;\n      }\n    }\n\n    renderMiniBarChart(content, ["W1", "W2", "W3", "W4"], weekCounts);\n\n    // Toggle: yearly view\n    const yearBtn = document.createElement("button");\n    yearBtn.textContent = "SHOW YEARLY";\n    yearBtn.className = "otw-btn otw-btn-secondary";\n    yearBtn.style.cssText += "margin-top:12px;font-size:10px;padding:8px 16px;width:100%;";\n    let showingYearly = false;\n    const yearContainer = document.createElement("div");\n    content.appendChild(yearBtn);\n    content.appendChild(yearContainer);\n\n    yearBtn.onclick = () => {\n      showingYearly = !showingYearly;\n      yearBtn.textContent = showingYearly ? "SHOW MONTHLY" : "SHOW YEARLY";\n      yearContainer.innerHTML = "";\n      if (showingYearly) {\n        const monthCounts = new Array(12).fill(0);\n        const monthLabels = ["J","F","M","A","M","J","J","A","S","O","N","D"];\n        for (const wFile of allFiles) {\n          const fm = getFileMetadata(wFile.path);\n          if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n          const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n          if (!dateMatch) continue;\n          const fileDate = moment(dateMatch[1], "YYYY-MM-DD");\n          if (now.diff(fileDate, "months") > 11) continue;\n          const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));\n          if (hasMuscle) monthCounts[fileDate.month()]++;\n        }\n        renderMiniBarChart(yearContainer, monthLabels, monthCounts);\n      }\n    };\n  });\n}\n\n// \u2500\u2500 Overall Progress Popup (both overall + per-muscle) \u2500\u2500\n\nasync function showOverallProgressPopup(muscleLevels) {\n  createModal("STRENGTH PROGRESS", (content) => {\n    // 1) Overall strength trend \u2014 average strength level across all regions\n    const overLabel = document.createElement("div");\n    overLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:8px;`;\n    overLabel.textContent = "OVERALL STRENGTH";\n    content.appendChild(overLabel);\n\n    // Summarize current strength levels\n    const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];\n    const regionLevels = Object.entries(muscleLevels);\n    if (regionLevels.length === 0) {\n      const noData = document.createElement("div");\n      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-size:12px;font-style:italic;padding:12px;`;\n      noData.textContent = "Complete some workouts to see your strength progress";\n      content.appendChild(noData);\n    } else {\n      // Average progress value\n      let totalProgress = 0;\n      for (const [, data] of regionLevels) {\n        const idx = levelOrder.indexOf(data.level);\n        totalProgress += (idx / 5) * 100 + (data.progress || 0) * (1/5);\n      }\n      const avgProgress = totalProgress / regionLevels.length;\n      const avgLevelIdx = Math.min(5, Math.floor(avgProgress / 20));\n      const avgLevel = levelOrder[avgLevelIdx];\n      const avgColor = STRENGTH_LEVELS[avgLevel]?.color || "#6a6a6a";\n\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText = `background:${avgColor}25;border:1px solid ${avgColor}60;color:${avgColor};margin:0 auto 12px;display:inline-flex;`;\n      badge.textContent = avgLevel.toUpperCase() + " (avg)";\n      content.appendChild(badge);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      content.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, avgProgress)}%;background:${avgColor};`;\n      pb.appendChild(fill);\n    }\n\n    // Monthly completions chart (all workouts)\n    const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n    const now = moment();\n    const weekCounts = [0, 0, 0, 0];\n    for (const wFile of allFiles) {\n      const fm = getFileMetadata(wFile.path);\n      if (!fm || fm.Workout !== true) continue;\n      const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n      if (!dateMatch) continue;\n      const daysAgo = now.diff(moment(dateMatch[1], "YYYY-MM-DD"), "days");\n      if (daysAgo < 0 || daysAgo > 28) continue;\n      const weekIdx = Math.floor(daysAgo / 7);\n      if (weekIdx < 4) weekCounts[3 - weekIdx]++;\n    }\n\n    const c1Label = document.createElement("div");\n    c1Label.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:16px;`;\n    c1Label.textContent = "WORKOUTS PER WEEK";\n    content.appendChild(c1Label);\n    renderMiniBarChart(content, ["W1", "W2", "W3", "W4"], weekCounts);\n\n    // 2) Per-muscle breakdown\n    const musLabel = document.createElement("div");\n    musLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:20px;`;\n    musLabel.textContent = "BY MUSCLE GROUP";\n    content.appendChild(musLabel);\n\n    for (const [region, data] of regionLevels) {\n      const row = document.createElement("div");\n      row.style.cssText = `display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #1a1816;`;\n      content.appendChild(row);\n\n      const nameEl = document.createElement("span");\n      nameEl.style.cssText = `color:${THEME.colorMuted};font-size:11px;min-width:80px;`;\n      nameEl.textContent = REGION_LABELS[region] || region;\n      row.appendChild(nameEl);\n\n      const bar = document.createElement("div");\n      bar.style.cssText = "flex:1;height:6px;background:#1a1a1a;border-radius:3px;overflow:hidden;";\n      row.appendChild(bar);\n      const barFill = document.createElement("div");\n      barFill.style.cssText = `height:100%;width:${Math.min(100, (levelOrder.indexOf(data.level) / 5) * 100 + (data.progress || 0) / 5)}%;background:${data.color};border-radius:3px;`;\n      bar.appendChild(barFill);\n\n      const levelEl = document.createElement("span");\n      levelEl.style.cssText = `color:${data.color};font-size:10px;font-weight:600;min-width:60px;text-align:right;`;\n      levelEl.textContent = data.level;\n      row.appendChild(levelEl);\n    }\n  });\n}\n\n// \u2500\u2500 Mini bar chart helper (used in popups) \u2500\u2500\n\nfunction renderMiniBarChart(parent, labels, values) {\n  const maxVal = Math.max(...values, 1);\n  const chart = document.createElement("div");\n  chart.style.cssText = "display:flex;gap:6px;align-items:flex-end;justify-content:center;height:60px;margin:8px 0;";\n  parent.appendChild(chart);\n\n  for (let i = 0; i < labels.length; i++) {\n    const col = document.createElement("div");\n    col.style.cssText = "display:flex;flex-direction:column;align-items:center;gap:4px;flex:1;";\n    chart.appendChild(col);\n\n    const barH = Math.max(4, (values[i] / maxVal) * 48);\n    const bar = document.createElement("div");\n    bar.style.cssText = `width:100%;max-width:24px;height:${barH}px;background:${values[i] > 0 ? THEME.color : "#1a1816"};border-radius:2px;transition:height 0.3s;`;\n    col.appendChild(bar);\n\n    const lbl = document.createElement("div");\n    lbl.style.cssText = `font-size:8px;color:${THEME.colorMuted};letter-spacing:1px;`;\n    lbl.textContent = labels[i];\n    col.appendChild(lbl);\n  }\n}\n\n// ============================================================\n// RENDER: STATS DASHBOARD\n// ============================================================\n\nasync function renderStatsSection(root) {\n  // Weekly calendar\n  const weekLabel = document.createElement("div");\n  weekLabel.className = "otw-section-label";\n  weekLabel.textContent = "THIS WEEK";\n  root.appendChild(weekLabel);\n\n  const weekData = getWeeklyCalendarData();\n  const weekGrid = document.createElement("div");\n  weekGrid.className = "otw-week-grid";\n  root.appendChild(weekGrid);\n\n  for (const day of weekData) {\n    const cell = document.createElement("div");\n    cell.className = "otw-week-day" + (day.isToday ? " today" : "") + (day.status ? " done" : "");\n    const lbl = document.createElement("div");\n    lbl.className = "otw-day-label";\n    lbl.textContent = day.label;\n    cell.appendChild(lbl);\n    const num = document.createElement("div");\n    num.className = "otw-day-num";\n    num.textContent = day.num;\n    cell.appendChild(num);\n    const icon = document.createElement("div");\n    icon.className = "otw-day-icon";\n    if (day.status === "done") {\n      if (day.type === "discipline") { icon.textContent = "\\uD83D\\uDC8E"; }\n      else if (day.type === "flow") { icon.textContent = "\\uD83C\\uDF0A"; }\n      else { icon.textContent = "\\u2713"; icon.style.color = THEME.systemGreen; }\n    } else if (day.isToday) {\n      icon.textContent = "\\u2022"; icon.style.color = THEME.color; icon.style.animation = "otw-pulse-glow 2s ease-in-out infinite";\n    } else if (day.isPast) {\n      icon.textContent = "\\u2014"; icon.style.color = "#2a2520";\n    }\n    cell.appendChild(icon);\n    weekGrid.appendChild(cell);\n  }\n\n  // Stat counters\n  const stats = getMonthlyStats();\n  const statRow = document.createElement("div");\n  statRow.className = "otw-stat-row";\n  statRow.style.marginTop = "10px";\n  root.appendChild(statRow);\n\n  const statItems = [\n    { value: stats.thisWeek, label: "This week" },\n    { value: stats.thisMonth, label: "This month" },\n    { value: stats.total, label: "All time" },\n  ];\n  for (const item of statItems) {\n    const box = document.createElement("div");\n    box.className = "otw-stat-box";\n    const val = document.createElement("div");\n    val.className = "otw-stat-value";\n    val.textContent = item.value;\n    box.appendChild(val);\n    const lbl = document.createElement("div");\n    lbl.className = "otw-stat-label";\n    lbl.textContent = item.label;\n    box.appendChild(lbl);\n    statRow.appendChild(box);\n  }\n\n  // Volume row\n  if (stats.totalVolume > 0) {\n    const volRow = document.createElement("div");\n    volRow.className = "otw-stat-row";\n    volRow.style.cssText = "margin-top:6px;grid-template-columns:1fr 1fr;";\n    root.appendChild(volRow);\n    const volBox = document.createElement("div");\n    volBox.className = "otw-stat-box";\n    const volVal = document.createElement("div");\n    volVal.className = "otw-stat-value";\n    volVal.style.fontSize = "18px";\n    volVal.textContent = stats.totalVolume >= 1000 ? Math.round(stats.totalVolume / 1000) + "k" : stats.totalVolume;\n    volBox.appendChild(volVal);\n    const volLbl = document.createElement("div");\n    volLbl.className = "otw-stat-label";\n    volLbl.textContent = "Total kg lifted";\n    volBox.appendChild(volLbl);\n    volRow.appendChild(volBox);\n\n    const setsBox = document.createElement("div");\n    setsBox.className = "otw-stat-box";\n    const setsVal = document.createElement("div");\n    setsVal.className = "otw-stat-value";\n    setsVal.style.fontSize = "18px";\n    setsVal.textContent = stats.totalSets;\n    setsBox.appendChild(setsVal);\n    const setsLbl = document.createElement("div");\n    setsLbl.className = "otw-stat-label";\n    setsLbl.textContent = "Total sets";\n    setsBox.appendChild(setsLbl);\n    volRow.appendChild(setsBox);\n  }\n\n  // Body Strength Heatmap \u2014 Interactive\n  const hmLabel = document.createElement("div");\n  hmLabel.className = "otw-section-label";\n  hmLabel.style.marginTop = "24px";\n  hmLabel.textContent = "BODY STRENGTH MAP";\n  root.appendChild(hmLabel);\n\n  const muscleLevels = await getMuscleLevelData();\n\n  const hmWrap = document.createElement("div");\n  hmWrap.className = "otw-heatmap-wrap";\n  root.appendChild(hmWrap);\n\n  // Build interactive SVGs with click-to-show-progress\n  const frontSvg = buildInteractiveBodySvg("front", muscleLevels, (region) => {\n    showMuscleProgressPopup(region, muscleLevels);\n  });\n  hmWrap.appendChild(frontSvg);\n\n  const backSvg = buildInteractiveBodySvg("back", muscleLevels, (region) => {\n    showMuscleProgressPopup(region, muscleLevels);\n  });\n  hmWrap.appendChild(backSvg);\n\n  // Legend\n  const legend = document.createElement("div");\n  legend.className = "otw-heatmap-legend";\n  const legendItems = [\n    { label: "Untrained", color: "#6a6a6a" },\n    { label: "Beginner", color: "#a89860" },\n    { label: "Novice", color: "#7a9a7d" },\n    { label: "Intermediate", color: "#6a8a9a" },\n    { label: "Advanced", color: "#8a7a9a" },\n    { label: "Elite", color: "#9a6a7a" },\n  ];\n  for (const item of legendItems) {\n    const li = document.createElement("div");\n    li.className = "otw-heatmap-legend-item";\n    const dot = document.createElement("div");\n    dot.className = "otw-heatmap-legend-dot";\n    dot.style.background = item.color;\n    li.appendChild(dot);\n    const txt = document.createElement("span");\n    txt.textContent = item.label;\n    li.appendChild(txt);\n    legend.appendChild(li);\n  }\n  root.appendChild(legend);\n\n  // "Progress" button below the heatmap\n  const progressBtn = document.createElement("button");\n  progressBtn.textContent = "PROGRESS";\n  progressBtn.className = "otw-btn otw-btn-secondary";\n  progressBtn.style.cssText += "width:100%;margin-top:12px;font-size:11px;padding:10px;";\n  progressBtn.onclick = () => showOverallProgressPopup(muscleLevels);\n  root.appendChild(progressBtn);\n\n  // Recent sessions\n  const recent = getRecentSessions(4);\n  if (recent.length > 0) {\n    const recLabel = document.createElement("div");\n    recLabel.className = "otw-section-label";\n    recLabel.style.marginTop = "24px";\n    recLabel.textContent = "RECENT SESSIONS";\n    root.appendChild(recLabel);\n    for (const s of recent) {\n      const row = document.createElement("div");\n      row.className = "otw-recent-row";\n      const dateEl = document.createElement("span");\n      dateEl.className = "otw-recent-date";\n      dateEl.textContent = moment(s.date, "YYYY-MM-DD").format("MMM D");\n      row.appendChild(dateEl);\n      const musclesEl = document.createElement("span");\n      musclesEl.className = "otw-recent-muscles";\n      musclesEl.textContent = s.muscles.join(", ") || "\\u2014";\n      row.appendChild(musclesEl);\n      const badge = document.createElement("span");\n      badge.className = "otw-recent-badge";\n      if (s.type === "discipline") {\n        badge.textContent = "\\uD83D\\uDC8E";\n        badge.style.cssText += "background:rgba(168,152,96,0.15);color:" + THEME.colorDiscipline + ";";\n      } else if (s.type === "flow") {\n        badge.textContent = "\\uD83C\\uDF0A";\n        badge.style.cssText += "background:rgba(106,138,154,0.15);color:" + THEME.colorFlow + ";";\n      } else {\n        badge.textContent = "\\u2713";\n        badge.style.cssText += "background:rgba(122,154,125,0.15);color:" + THEME.systemGreen + ";";\n      }\n      row.appendChild(badge);\n      root.appendChild(row);\n    }\n  }\n}\n\n// ============================================================\n// RENDER: MUSCLE GROUP SELECTION (first-time entry)\n// ============================================================\n\nasync function renderMuscleSelection(root) {\n  const selectedMuscles = new Set();\n  const selectedSubgroups = new Map();\n\n  // \u2500\u2500 "Start New Workout" button HIGH at the top \u2500\u2500\n  const startBtnTop = document.createElement("button");\n  startBtnTop.textContent = "\\uD83C\\uDFCB\\uFE0F START NEW WORKOUT";\n  startBtnTop.className = "otw-btn otw-btn-primary";\n  startBtnTop.style.cssText += "padding:14px 24px;font-size:14px;font-weight:700;width:100%;margin-bottom:16px;";\n  startBtnTop.onclick = () => scrollToMuscleSelect();\n  root.appendChild(startBtnTop);\n\n  // Stats dashboard\n  await renderStatsSection(root);\n\n  // \u2500\u2500 Muscle Selection Section \u2500\u2500\n  const selAnchor = document.createElement("div");\n  selAnchor.id = "otw-muscle-select";\n  root.appendChild(selAnchor);\n\n  function scrollToMuscleSelect() {\n    selAnchor.scrollIntoView({ behavior: "smooth", block: "start" });\n  }\n\n  const selLabel = document.createElement("div");\n  selLabel.className = "otw-section-label";\n  selLabel.style.marginTop = "28px";\n  selLabel.textContent = "SELECT MUSCLE GROUPS";\n  root.appendChild(selLabel);\n\n  const selDesc = document.createElement("div");\n  selDesc.style.cssText = `color:${THEME.colorMuted};font-size:11px;text-align:center;margin-bottom:12px;`;\n  selDesc.textContent = "Tap muscles on the figure or use the buttons below";\n  root.appendChild(selDesc);\n\n  // Interactive SVG muscle selector figure\n  const selectorWrap = document.createElement("div");\n  selectorWrap.className = "otw-heatmap-wrap";\n  selectorWrap.style.marginBottom = "12px";\n  root.appendChild(selectorWrap);\n\n  // Region \u2192 parent muscle group mapping for the selector\n  const REGION_TO_MUSCLE = {\n    neck: "Neck", chest: "Chest", front_delts: "Shoulders", rear_delts: "Shoulders",\n    biceps: "Arms", triceps: "Arms", forearms: "Arms", core: "Core",\n    quads: "Legs", calves: "Legs", hamstrings: "Legs", glutes: "Legs",\n    traps: "Back", lats: "Back", lower_back: "Back",\n  };\n\n  // Track selected regions visually\n  const selectedRegionEls = new Map(); // region \u2192 [g elements]\n\n  function buildSelectorSvg(view) {\n    const regions = view === "front" ? {\n      neck: \'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>\',\n      front_delts: \'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>\',\n      chest: \'<path d="M31,37 L49,37 L49,55 C49,57 42,60 33,58 L31,56 Z"/><path d="M51,37 L69,37 L69,56 L67,58 C58,60 51,57 51,55 Z"/>\',\n      biceps: \'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>\',\n      forearms: \'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>\',\n      core: \'<path d="M33,58 L67,58 L65,82 L35,82 Z"/>\',\n      quads: \'<path d="M35,84 L49,84 L48,136 L34,136 Z"/><path d="M51,84 L65,84 L66,136 L52,136 Z"/>\',\n      calves: \'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>\',\n    } : {\n      neck: \'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>\',\n      traps: \'<path d="M39,33 L50,27 L61,33 L59,43 L50,39 L41,43 Z"/>\',\n      rear_delts: \'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>\',\n      lats: \'<path d="M33,43 L41,43 L50,39 L59,43 L67,43 L65,66 L50,70 L35,66 Z"/>\',\n      triceps: \'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>\',\n      forearms: \'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>\',\n      lower_back: \'<path d="M35,66 L50,70 L65,66 L65,82 L35,82 Z"/>\',\n      glutes: \'<path d="M35,82 L49,82 L49,94 C47,98 37,98 35,94 Z"/><path d="M51,82 L65,82 L65,94 C63,98 53,98 51,94 Z"/>\',\n      hamstrings: \'<path d="M35,96 L49,96 L48,136 L34,136 Z"/><path d="M51,96 L65,96 L66,136 L52,136 Z"/>\',\n      calves: \'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>\',\n    };\n\n    const ns = "http://www.w3.org/2000/svg";\n    const svg = document.createElementNS(ns, "svg");\n    svg.setAttribute("viewBox", "0 0 100 210");\n    svg.setAttribute("class", "otw-heatmap-svg");\n\n    // Head\n    const headG = document.createElementNS(ns, "g");\n    headG.innerHTML = \'<ellipse cx="50" cy="14" rx="10" ry="11" fill="#0c0c0c" stroke="#2a2520" stroke-width="0.8"/>\';\n    svg.appendChild(headG);\n\n    for (const [region, pathData] of Object.entries(regions)) {\n      const g = document.createElementNS(ns, "g");\n      g.setAttribute("fill", "#1a1816");\n      g.setAttribute("stroke", "#2a2520");\n      g.setAttribute("stroke-width", "0.6");\n      g.style.cursor = "pointer";\n      g.style.transition = "fill 0.15s";\n      g.innerHTML = pathData;\n\n      // Track for visual updates\n      if (!selectedRegionEls.has(region)) selectedRegionEls.set(region, []);\n      selectedRegionEls.get(region).push(g);\n\n      g.addEventListener("click", (e) => {\n        e.stopPropagation();\n        const parentMuscle = REGION_TO_MUSCLE[region];\n        if (!parentMuscle) return;\n        if (selectedMuscles.has(parentMuscle)) {\n          selectedMuscles.delete(parentMuscle);\n        } else {\n          selectedMuscles.add(parentMuscle);\n        }\n        updateSelectorVisuals();\n        updateToggleButtons();\n      });\n\n      svg.appendChild(g);\n    }\n\n    const label = view === "front" ? "FRONT" : "BACK";\n    const txt = document.createElementNS(ns, "text");\n    txt.setAttribute("x", "50"); txt.setAttribute("y", "207");\n    txt.setAttribute("text-anchor", "middle");\n    txt.setAttribute("fill", "#4a4030"); txt.setAttribute("font-size", "8");\n    txt.setAttribute("font-family", "Georgia,serif"); txt.setAttribute("letter-spacing", "2");\n    txt.textContent = label;\n    svg.appendChild(txt);\n\n    return svg;\n  }\n\n  selectorWrap.appendChild(buildSelectorSvg("front"));\n  selectorWrap.appendChild(buildSelectorSvg("back"));\n\n  function updateSelectorVisuals() {\n    for (const [region, gList] of selectedRegionEls) {\n      const parentMuscle = REGION_TO_MUSCLE[region];\n      const isSelected = parentMuscle && selectedMuscles.has(parentMuscle);\n      for (const g of gList) {\n        g.setAttribute("fill", isSelected ? THEME.color + "80" : "#1a1816");\n        g.setAttribute("stroke", isSelected ? THEME.color + "60" : "#2a2520");\n      }\n    }\n  }\n\n  // Muscle group toggle buttons (still available as secondary selection method)\n  const muscleGrid = document.createElement("div");\n  muscleGrid.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:8px;";\n  root.appendChild(muscleGrid);\n\n  const subgroupArea = document.createElement("div");\n  subgroupArea.style.cssText = "display:flex;flex-direction:column;gap:8px;width:100%;";\n  root.appendChild(subgroupArea);\n\n  const toggleButtons = new Map();\n\n  Object.entries(MUSCLE_GROUPS).forEach(([name, config]) => {\n    const btn = document.createElement("button");\n    btn.className = "otw-muscle-toggle";\n    btn.textContent = `${config.icon} ${name}`;\n    muscleGrid.appendChild(btn);\n    toggleButtons.set(name, btn);\n\n    let subgroupContainer = null;\n    if (config.subgroups) {\n      subgroupContainer = document.createElement("div");\n      subgroupContainer.className = "otw-subgroup-container";\n      subgroupContainer.style.cssText += `display:flex;flex-wrap:wrap;gap:8px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:4px;`;\n      const subLabel = document.createElement("div");\n      subLabel.style.cssText = `width:100%;color:${THEME.colorMuted};font-size:11px;margin-bottom:4px;`;\n      subLabel.textContent = name + " subgroups:";\n      subgroupContainer.appendChild(subLabel);\n      selectedSubgroups.set(name, new Set());\n\n      config.subgroups.forEach(sub => {\n        const subBtn = document.createElement("button");\n        subBtn.className = "otw-sub-toggle";\n        subBtn.textContent = sub;\n        subBtn.onclick = (e) => {\n          e.stopPropagation();\n          const subs = selectedSubgroups.get(name);\n          if (subs.has(sub)) { subs.delete(sub); subBtn.classList.remove("active"); }\n          else { subs.add(sub); subBtn.classList.add("active"); }\n        };\n        subgroupContainer.appendChild(subBtn);\n      });\n      subgroupArea.appendChild(subgroupContainer);\n    }\n\n    btn.onclick = () => {\n      if (selectedMuscles.has(name)) {\n        selectedMuscles.delete(name);\n        btn.classList.remove("active");\n        if (subgroupContainer) subgroupContainer.classList.remove("expanded");\n      } else {\n        selectedMuscles.add(name);\n        btn.classList.add("active");\n        if (subgroupContainer) subgroupContainer.classList.add("expanded");\n      }\n      updateSelectorVisuals();\n    };\n  });\n\n  function updateToggleButtons() {\n    for (const [name, btn] of toggleButtons) {\n      if (selectedMuscles.has(name)) {\n        btn.classList.add("active");\n      } else {\n        btn.classList.remove("active");\n      }\n    }\n  }\n\n  // Start button (bottom)\n  const startBtn = document.createElement("button");\n  startBtn.textContent = "\\uD83C\\uDFCB\\uFE0F START WORKOUT";\n  startBtn.className = "otw-btn otw-btn-primary";\n  startBtn.style.cssText += "padding:16px 24px;font-size:15px;font-weight:700;margin-top:16px;";\n  startBtn.onclick = async () => {\n    if (selectedMuscles.size === 0) { notice("Please select at least one muscle group"); return; }\n\n    // Build final muscle list: use subgroups if selected, otherwise the parent group\n    const muscleGroupsArray = [];\n    selectedMuscles.forEach(muscle => {\n      const subs = selectedSubgroups.get(muscle);\n      if (subs && subs.size > 0) {\n        subs.forEach(sub => muscleGroupsArray.push(sub));\n      } else {\n        muscleGroupsArray.push(muscle);\n      }\n    });\n\n    // Load previous exercises for these muscle groups\n    const loadedExercises = loadPreviousExercises(muscleGroupsArray);\n\n    // Save to frontmatter and update local state\n    muscleGroups = muscleGroupsArray;\n    exercises = loadedExercises;\n    currentMuscleIndex = 0;\n\n    await setMultipleData({\n      muscleGroups: muscleGroups,\n      exercises: exercises,\n      currentMuscleIndex: 0,\n      Workout: false,\n      "Workout-Type": "",\n      Timestamp: moment().format(),\n    });\n\n    // Re-render \u2014 now we\'ll enter workout tracking mode\n    render();\n  };\n  root.appendChild(startBtn);\n}\n\n// ============================================================\n// MAIN RENDER\n// ============================================================\n\nasync function render() {\n  container.innerHTML = "";\n  const root = document.createElement("div");\n  root.className = "otw-container";\n  container.appendChild(root);\n\n  // If workout is already completed, show summary\n  if (isCompleted && getData("Workout-Type")) {\n    const wType = getData("Workout-Type");\n    const summaryCard = document.createElement("div");\n    summaryCard.className = "otw-card otw-card-breathe";\n    summaryCard.style.textAlign = "center";\n    summaryCard.style.padding = "32px";\n    addCorners(summaryCard, THEME.systemGreen);\n    summaryCard.innerHTML = `\n      <div style="font-size:32px;margin-bottom:12px;">${wType === "discipline" ? "\\uD83D\\uDC8E" : "\\uD83C\\uDF0A"}</div>\n      <h2 style="margin:0;color:${THEME.systemGreen};font-size:16px;letter-spacing:3px;text-transform:uppercase;">WORKOUT COMPLETE</h2>\n      <div style="color:${THEME.colorMuted};font-size:13px;margin-top:8px;font-style:italic;">${wType === "discipline" ? "Discipline Win" : "Flow State"}</div>\n      <div style="color:${THEME.colorMuted};font-size:11px;margin-top:16px;">${moment(getData("Timestamp")).format("MMM D, YYYY \\u2014 h:mm A")}</div>\n    `;\n    root.appendChild(summaryCard);\n\n    // Show exercises summary\n    if (exercises.length > 0) {\n      const exSummary = document.createElement("div");\n      exSummary.className = "otw-card";\n      addCorners(exSummary, THEME.color);\n      const exTitle = document.createElement("div");\n      exTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:12px;`;\n      exTitle.textContent = "SESSION SUMMARY";\n      exSummary.appendChild(exTitle);\n      for (const ex of exercises) {\n        const completedSets = ex.sets.filter((s) => !s.isWarmup && s.completed).length;\n        const totalSets = ex.sets.filter((s) => !s.isWarmup).length;\n        const row = document.createElement("div");\n        row.style.cssText = `display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${THEME.colorBorder};`;\n        row.innerHTML = `<span style="color:${THEME.color};font-weight:600;">${ex.name}</span><span style="color:${THEME.colorMuted};font-size:12px;">${completedSets}/${totalSets} sets</span>`;\n        exSummary.appendChild(row);\n      }\n      root.appendChild(exSummary);\n    }\n    return;\n  }\n\n  // No muscle groups selected yet \u2014 show selection screen\n  if (muscleGroups.length === 0) {\n    await renderMuscleSelection(root);\n    return;\n  }\n\n  // \u2500\u2500 Active Workout UI \u2500\u2500\n  const currentMuscle = muscleGroups[currentMuscleIndex] || muscleGroups[0];\n  const muscleExercises = exercises.filter((e) => e.muscle === currentMuscle || e.muscleGroup === currentMuscle);\n\n  // Header\n  const header = document.createElement("div");\n  header.className = "otw-card otw-card-breathe otw-header";\n  addCorners(header, THEME.color);\n  const title = document.createElement("h2");\n  title.className = "otw-title";\n  title.textContent = currentMuscle.toUpperCase();\n  header.appendChild(title);\n  const progressLabel = document.createElement("div");\n  progressLabel.className = "otw-progress-label";\n  progressLabel.textContent = (currentMuscleIndex + 1) + " / " + muscleGroups.length;\n  header.appendChild(progressLabel);\n  root.appendChild(header);\n\n  // Exercises\n  const exContainer = document.createElement("div");\n  exContainer.style.cssText = "display:flex;flex-direction:column;gap:16px;";\n  root.appendChild(exContainer);\n\n  if (muscleExercises.length === 0) {\n    const empty = document.createElement("div");\n    empty.style.cssText = `text-align:center;padding:40px 20px;background:#0f0f0f;border:1px dashed ${THEME.colorBorder};`;\n    empty.innerHTML = `<p style="color:${THEME.colorMuted};margin:0;">No exercises for ${currentMuscle} yet.</p>`;\n    exContainer.appendChild(empty);\n  } else {\n    for (const ex of muscleExercises) {\n      await renderExercise(exContainer, ex);\n    }\n  }\n\n  // Add exercise button\n  const addExBtn = document.createElement("button");\n  addExBtn.textContent = "+ ADD EXERCISE";\n  addExBtn.className = "otw-btn otw-btn-dashed";\n  addExBtn.style.marginTop = "16px";\n  addExBtn.onclick = () => openAddExerciseModal(currentMuscle);\n  root.appendChild(addExBtn);\n\n  // Navigation\n  const nav = document.createElement("div");\n  nav.className = "otw-nav-row";\n  root.appendChild(nav);\n\n  if (currentMuscleIndex > 0) {\n    const prevBtn = document.createElement("button");\n    prevBtn.textContent = "\\u2190 PREVIOUS";\n    prevBtn.className = "otw-btn otw-btn-secondary";\n    prevBtn.onclick = async () => { currentMuscleIndex--; await saveState(); render(); };\n    nav.appendChild(prevBtn);\n  }\n\n  if (currentMuscleIndex < muscleGroups.length - 1) {\n    const nextBtn = document.createElement("button");\n    nextBtn.textContent = "NEXT MUSCLE \\u2192";\n    nextBtn.className = "otw-btn otw-btn-primary";\n    nextBtn.onclick = async () => { currentMuscleIndex++; await saveState(); render(); };\n    nav.appendChild(nextBtn);\n  } else {\n    const finishBtn = document.createElement("button");\n    finishBtn.textContent = "\\u2713 FINISH WORKOUT";\n    finishBtn.className = "otw-btn otw-btn-finish";\n    finishBtn.onclick = () => openFinishModal();\n    nav.appendChild(finishBtn);\n  }\n}\n\n// \u2500\u2500 Boot \u2500\u2500\nreturn render();\n';

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvU3RyZW5ndGhIZWF0bWFwLnRzIiwgInNyYy9jb21wb25lbnRzL1dlaWdodFByb2dyZXNzLnRzIiwgInNyYy92aWV3cy9Xb3Jrc3BhY2VWaWV3LnRzIiwgInNyYy9zZXR0aW5ncy9PbGVuU2V0dGluZ3MudHMiLCAic3JjL3RlbXBsYXRlcy9UZW1wbGF0ZUVuZ2luZS50cyIsICJzcmMvdGVtcGxhdGVzL2J1aWx0aW5zL3dvcmtvdXQudHBsIiwgInNyYy90ZW1wbGF0ZXMvYnVpbHRpbnMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgUGx1Z2luIEVudHJ5IFBvaW50XG4vLyBSZWdpc3RlcnMgdmlld3MsIGNvbW1hbmRzLCByaWJib24gaWNvbiwgc2V0dGluZ3MgbWlncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgUGx1Z2luLCBkZWJvdW5jZSwgVEZpbGUsIE5vdGljZSwgTWFya2Rvd25WaWV3IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgVHJhY2tIYWJpdFJhbmtEYXRhLCBBY3Rpdml0eUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiwgVklFV19UWVBFX1dPUktTUEFDRSwgREVGQVVMVF9PTEVOX1NFVFRJTkdTLCBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsIERFRkFVTFRfUEVSU09OQUxfU1RBVFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERhc2hib2FyZFZpZXcgfSBmcm9tIFwiLi92aWV3cy9EYXNoYm9hcmRWaWV3XCI7XG5pbXBvcnQgeyBXb3Jrc3BhY2VWaWV3IH0gZnJvbSBcIi4vdmlld3MvV29ya3NwYWNlVmlld1wiO1xuaW1wb3J0IHsgT2xlblNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy9PbGVuU2V0dGluZ3NcIjtcbmltcG9ydCB7IFRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4vdGVtcGxhdGVzL1RlbXBsYXRlRW5naW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9sZW5QbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5ncyE6IE9sZW5TZXR0aW5ncztcbiAgdGVtcGxhdGVFbmdpbmUhOiBUZW1wbGF0ZUVuZ2luZTtcblxuICBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTG9hZCBzZXR0aW5ncyB3aXRoIGRlZmF1bHRzXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUyxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgICk7XG5cbiAgICAvLyBFbnN1cmUgZGVlcCBkZWZhdWx0cyBmb3IgbmVzdGVkIG9iamVjdHNcbiAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5kZXZDb25maWcsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZ1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcubGFiZWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmRldkNvbmZpZy5sYWJlbHMsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlDb2xvcnMsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFAgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlYUCxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUFxuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYWxlbmRhciA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX1BFUlNPTkFMX1NUQVRTLFxuICAgICAgdGhpcy5zZXR0aW5ncy5wZXJzb25hbFN0YXRzXG4gICAgKTtcblxuICAgIC8vIE1pZ3JhdGUgbGVnYWN5IGZpZWxkIG5hbWVzIGZyb20gc2Vzc2lvbiBcdTIxOTIgd29ya3NwYWNlXG4gICAgYXdhaXQgdGhpcy5taWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIFRlbXBsYXRlIEVuZ2luZVxuICAgIHRoaXMudGVtcGxhdGVFbmdpbmUgPSBuZXcgVGVtcGxhdGVFbmdpbmUodGhpcy5hcHAsIHRoaXMpO1xuXG4gICAgLy8gTWlncmF0ZSBmcm9tIFRyYWNrSGFiaXRSYW5rIG9uIGZpcnN0IHJ1blxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5taWdyYXRlZCkge1xuICAgICAgYXdhaXQgdGhpcy5taWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgbWFpbiBkYXNoYm9hcmQgdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX09MRU4sXG4gICAgICAobGVhZikgPT4gbmV3IERhc2hib2FyZFZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmVnaXN0ZXIgd29ya3NwYWNlIHZpZXdcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhcbiAgICAgIFZJRVdfVFlQRV9XT1JLU1BBQ0UsXG4gICAgICAobGVhZikgPT4gbmV3IFdvcmtzcGFjZVZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmliYm9uIGljb25cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oXCJjb21wYXNzXCIsIFwiT3BlbiBPbGVuXCIsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmRzXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcIm9wZW4tb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiT3BlbiBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJyZWZyZXNoLW9sZW4tZGFzaGJvYXJkXCIsXG4gICAgICBuYW1lOiBcIlJlZnJlc2ggT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJhZGQtcXVpY2stdGFza1wiLFxuICAgICAgbmFtZTogXCJBZGQgUXVpY2sgVGFza1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvd1F1aWNrVGFza0RpYWxvZygpLFxuICAgIH0pO1xuXG4gICAgLy8gQ2FsZW5kYXIgcGx1Z2luIGludGVncmF0aW9uIFx1MjAxNCBpbmplY3QgT2xlbiBtZXRhZGF0YSBpbnRvIENhbGVuZGFyIHBsdWdpblxuICAgIHRoaXMucmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpO1xuXG4gICAgLy8gRGVib3VuY2VkIGZpbGUgd2F0Y2hlciBmb3IgbWV0YWRhdGEgY2hhbmdlc1xuICAgIGNvbnN0IHJlZnJlc2ggPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICB9LCAzMDApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKCkgPT4gcmVmcmVzaCgpKVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcImNyZWF0ZVwiLCBhc3luYyAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSB0byBiZSBpbmRleGVkXG4gICAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCAxNSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcInJlbmFtZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2xlblNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogRnJvbnRtYXR0ZXItZHJpdmVuIHJlbmRlcmluZyAtLS1cbiAgICB0aGlzLnJlZ2lzdGVyVGVtcGxhdGVQb3N0UHJvY2Vzc29yKCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIHRlbXBsYXRlIGNhY2hlIHdoZW4gdGVtcGxhdGUgLmpzIGZpbGVzIGFyZSBtb2RpZmllZFxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwibW9kaWZ5XCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwianNcIikge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKGZpbGUucGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIC8vIENsZWFudXAgaGFuZGxlZCBieSBEYXNoYm9hcmRWaWV3Lm9uQ2xvc2UoKVxuICB9XG5cbiAgLy8gLS0tIFZpZXcgTWFuYWdlbWVudCAtLS1cblxuICBhc3luYyBhY3RpdmF0ZURhc2hib2FyZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG4gICAgbGV0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKVswXTtcblxuICAgIGlmICghbGVhZikge1xuICAgICAgY29uc3QgbmV3TGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgICAgaWYgKCFuZXdMZWFmKSByZXR1cm47XG4gICAgICBhd2FpdCBuZXdMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9PTEVOLCBhY3RpdmU6IHRydWUgfSk7XG4gICAgICBsZWFmID0gbmV3TGVhZjtcbiAgICB9XG5cbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIHJlZnJlc2hEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldyBhcyB1bmtub3duIGFzIERhc2hib2FyZFZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlV29ya3NwYWNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG5cbiAgICAvLyBDbG9zZSBleGlzdGluZyB3b3Jrc3BhY2Ugdmlld3NcbiAgICB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9XT1JLU1BBQ0UpLmZvckVhY2goKGxlYWYpID0+IGxlYWYuZGV0YWNoKCkpO1xuXG4gICAgLy8gT3BlbiB3b3Jrc3BhY2UgaW4gdGhlIHNhbWUgdGFiIGFzIHRoZSBkYXNoYm9hcmQgaWYgcG9zc2libGVcbiAgICBjb25zdCBkYXNoTGVhdmVzID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgY29uc3QgdGFyZ2V0TGVhZiA9IGRhc2hMZWF2ZXNbMF0gPz8gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgaWYgKCF0YXJnZXRMZWFmKSByZXR1cm47XG5cbiAgICBhd2FpdCB0YXJnZXRMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZih0YXJnZXRMZWFmKTtcbiAgfVxuXG4gIGFjdGl2YXRlRGFzaGJvYXJkVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlRGFzaGJvYXJkKCk7XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgUmVnaXN0cnk6IFBvc3QtUHJvY2Vzc29yIC0tLVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJUZW1wbGF0ZVBvc3RQcm9jZXNzb3IoKTogdm9pZCB7XG4gICAgLy8gVHJhY2sgd2hpY2ggZmlsZXMgd2UndmUgYWxyZWFkeSByZW5kZXJlZCB0ZW1wbGF0ZXMgZm9yIGluIHRoZSBjdXJyZW50XG4gICAgLy8gdmlldyBjeWNsZSwgdG8gYXZvaWQgZHVwbGljYXRlIHJlbmRlcmluZyBhY3Jvc3MgbXVsdGlwbGUgc2VjdGlvbnMuXG4gICAgY29uc3QgcmVuZGVyZWRGaWxlcyA9IG5ldyBXZWFrU2V0PEhUTUxFbGVtZW50PigpO1xuXG4gICAgdGhpcy5yZWdpc3Rlck1hcmtkb3duUG9zdFByb2Nlc3Nvcihhc3luYyAoZWwsIGN0eCkgPT4ge1xuICAgICAgLy8gRmluZCB0aGUgZmlsZSBiZWluZyByZW5kZXJlZFxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdHguc291cmNlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIC8vIENoZWNrIGZyb250bWF0dGVyIGZvciBhbiBcImFjdGl2aXR5XCIgZmllbGRcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBjb25zdCBhY3Rpdml0eVR5cGUgPSBjYWNoZT8uZnJvbnRtYXR0ZXI/LmFjdGl2aXR5IGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgIC8vIExvb2sgdXAgdGVtcGxhdGUgaW4gdGhlIHJlZ2lzdHJ5XG4gICAgICBjb25zdCBlbnRyeSA9IHRoaXMudGVtcGxhdGVFbmdpbmUuZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZSk7XG4gICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZSByZW5kZXJpbmc6IGNoZWNrIHRoZSBwYXJlbnQgcHJldmlldyBjb250YWluZXJcbiAgICAgIGNvbnN0IHByZXZpZXdTaXplciA9IGVsLmNsb3Nlc3QoXCIubWFya2Rvd24tcHJldmlldy1zaXplclwiKSA/PyBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHByZXZpZXdTaXplciAmJiByZW5kZXJlZEZpbGVzLmhhcyhwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpKSByZXR1cm47XG4gICAgICBpZiAocHJldmlld1NpemVyKSByZW5kZXJlZEZpbGVzLmFkZChwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgICAvLyBDbGVhciBkZWZhdWx0IHJlbmRlcmVkIGNvbnRlbnQgYW5kIGluamVjdCB0ZW1wbGF0ZVxuICAgICAgZWwuZW1wdHkoKTtcbiAgICAgIGVsLmFkZENsYXNzKFwib2xlbi10ZW1wbGF0ZS1ob3N0XCIpO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBlbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1yb290XCIgfSk7XG5cbiAgICAgIGF3YWl0IHRoaXMudGVtcGxhdGVFbmdpbmUucmVuZGVyKGVudHJ5LnRlbXBsYXRlSWQsIGZpbGUsIGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvLyBBbHNvIGhhbmRsZSBmaWxlLW9wZW4gZm9yIG5vdGVzIHdpdGggb25seSBmcm9udG1hdHRlciAobm8gYm9keSBzZWN0aW9ucylcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgYXN5bmMgKGxlYWYpID0+IHtcbiAgICAgICAgaWYgKCFsZWFmKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICAgIGlmICghKHZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmlsZSA9IHZpZXcuZmlsZTtcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgLy8gU21hbGwgZGVsYXkgdG8gbGV0IG1ldGFkYXRhIGNhY2hlIHBvcHVsYXRlXG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlUeXBlID0gY2FjaGU/LmZyb250bWF0dGVyPy5hY3Rpdml0eSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLnRlbXBsYXRlRW5naW5lLmZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGUpO1xuICAgICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYSB0ZW1wbGF0ZSBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ5IHRoZSBwb3N0LXByb2Nlc3NvclxuICAgICAgICBjb25zdCBjb250ZW50RWwgPSB2aWV3LmNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFya2Rvd24tcmVhZGluZy12aWV3IC5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpO1xuICAgICAgICBpZiAoY29udGVudEVsPy5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tdGVtcGxhdGUtcm9vdFwiKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIGluIHJlYWRpbmcgbW9kZSBidXQgbm8gdGVtcGxhdGUgd2FzIGluamVjdGVkIChlbXB0eSBib2R5IG5vdGUpLFxuICAgICAgICAvLyBpbmplY3QgaW50byB0aGUgcHJldmlldyBjb250ZW50XG4gICAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiO1xuICAgICAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVJZCwgZmlsZSwgY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIFBsdWdpbiBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsZW5kYXJQbHVnaW5Tb3VyY2UoKTogdm9pZCB7XG4gICAgLy8gTGlzdGVuIGZvciB0aGUgQ2FsZW5kYXIgcGx1Z2luJ3MgXCJjYWxlbmRhcjpvcGVuXCIgZXZlbnRcbiAgICAvLyBhbmQgaW5qZWN0IE9sZW4ncyBhY3Rpdml0eSBjb21wbGV0aW9uIGRhdGEgYXMgY29sb3JlZCBkb3RzXG4gICAgKHRoaXMuYXBwLndvcmtzcGFjZSBhcyBhbnkpLm9uKFwiY2FsZW5kYXI6b3BlblwiLCAoc291cmNlczogYW55W10pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkgcmV0dXJuO1xuXG4gICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICBnZXREYWlseU1ldGFkYXRhOiAoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUuZm9ybWF0Py4oXCJZWVlZLU1NLUREXCIpID8/IFwiXCI7XG4gICAgICAgICAgaWYgKCFkYXRlU3RyKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBDb3VudCBjb21wbGV0aW9ucyBmb3IgdGhpcyBkYXRlXG4gICAgICAgICAgbGV0IGNvbXBsZXRpb25zID0gMDtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXMuZmluZChcbiAgICAgICAgICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXI/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucysrO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGFjdGl2aXR5LmNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wbGV0aW9ucyA9PT0gMCkgcmV0dXJuIHt9O1xuXG4gICAgICAgICAgLy8gUmV0dXJuIGRvdHMgY29sb3JlZCBieSBkb21pbmFudCBjYXRlZ29yeVxuICAgICAgICAgIGNvbnN0IGRvdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBkb3RzLnB1c2goe1xuICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQgYXMga2V5b2YgdHlwZW9mIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNdID8/IFwiIzkyOGQ4NVwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGBvbGVuLWNhbC1kb3QtJHtjYXR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb3RzLFxuICAgICAgICAgICAgY2xhc3NlczogY29tcGxldGlvbnMgPj0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBcIm9sZW4tY2FsLWNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0V2Vla2x5TWV0YWRhdGE6ICgpID0+ICh7fSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBRdWljayBUYXNrIERpYWxvZyAtLS1cblxuICBwcml2YXRlIHNob3dRdWlja1Rhc2tEaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+QWRkIFF1aWNrIFRhc2s8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9mb2N1cyAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXJvd1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uIChtaW4pXCIgbWluPVwiNVwiIG1heD1cIjQ4MFwiIHZhbHVlPVwiMzBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYmFja2Ryb3BcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stY2FuY2VsXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFkZEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWFkZFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay10aW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZHVyYXRpb25JbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWR1cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBlbnRlciBhIHRhc2sgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3cgPSB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgcXQtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkYXRlOiB0b2RheSxcbiAgICAgICAgdGltZTogdGltZUlucHV0LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpIHx8IDMwLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICBuZXcgTm90aWNlKGBcXHUyNkExIFF1aWNrIHRhc2sgYWRkZWQ6ICR7dGl0bGV9YCk7XG4gICAgICBjbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRm9jdXMgdGhlIGlucHV0XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aXRsZUlucHV0LmZvY3VzKCksIDUwKTtcbiAgfVxuXG4gIC8vIC0tLSBTZXR0aW5ncyBQZXJzaXN0ZW5jZSAtLS1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBNaWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhUGF0aCA9IFwiLm9ic2lkaWFuL3BsdWdpbnMvbXl0aG9sb2dpY2FsLWhhYml0LXRyYWNrZXIvZGF0YS5qc29uXCI7XG4gICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyhkYXRhUGF0aCk7XG5cbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChkYXRhUGF0aCk7XG4gICAgICBjb25zdCBkYXRhOiBUcmFja0hhYml0UmFua0RhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIC8vIE1pZ3JhdGUgYm9zcyBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllciA9IGRhdGEuY3VycmVudFRpZXIgPz8gMTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc01heEhQID0gZGF0YS5ib3NzTWF4SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBkYXRhLmJvc3NDdXJyZW50SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID0gZGF0YS5jb25zZWN1dGl2ZVBlcmZlY3RXZWVrcyA/PyAwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzID0gZGF0YS5pblRhcnRhcnVzID8/IGZhbHNlO1xuICAgICAgdGhpcy5zZXR0aW5ncy50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA9IGRhdGEudGFydGFydXNQZW5hbmNlVGFza3MgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzU3RhcnREYXRlID0gZGF0YS50YXJ0YXJ1c1N0YXJ0RGF0ZSA/PyBudWxsO1xuICAgICAgdGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID0gZGF0YS5mYWlsZWRUaHJlc2hvbGREYXlzID8/IDA7XG5cbiAgICAgIC8vIE1pZ3JhdGUgdGVtcGxlIHRhc2tzXG4gICAgICBpZiAoZGF0YS50ZW1wbGVUYXNrcyAmJiBkYXRhLnRlbXBsZVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50ZW1wbGVUYXNrcyA9IGRhdGEudGVtcGxlVGFza3M7XG4gICAgICB9XG5cbiAgICAgIC8vIE1pZ3JhdGUgcmV3YXJkc1xuICAgICAgdGhpcy5zZXR0aW5ncy5wZW5kaW5nUmV3YXJkcyA9IGRhdGEucGVuZGluZ1Jld2FyZHMgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLmNsYWltZWRSZXdhcmRzID0gKGRhdGEuY2xhaW1lZFJld2FyZHMgPz8gW10pIGFzIGFueTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYmFua2VkUmV3YXJkcyA9IGRhdGEuYmFua2VkUmV3YXJkcyA/PyBbXTtcblxuICAgICAgLy8gTWlncmF0ZSBzeXN0ZW0gc3RhdGVcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSAoZGF0YS5zeXN0ZW1TdGF0ZSBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIikgPz8gXCJhY3RpdmVcIjtcbiAgICAgIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBkYXRhLnBhdXNlU3RhcnRUaW1lID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSA9IGRhdGEudG90YWxQYXVzZWRUaW1lID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSBkYXRhLnNpbXVsYXRlZERhdGUgPz8gbnVsbDtcblxuICAgICAgLy8gTWlncmF0ZSBoZXJvIGJhY2tncm91bmRcbiAgICAgIGlmIChkYXRhLmRhc2hib2FyZEJnSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IGRhdGEuZGFzaGJvYXJkQmdJbWFnZTtcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSBhY3Rpdml0aWVzIGZyb20gZW5hYmxlZEFjdGl2aXRpZXMgKyBjdXN0b21IYWJpdHNcbiAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcyA9IHRoaXMubWlncmF0ZUFjdGl2aXRpZXMoZGF0YSk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgbmV3IE5vdGljZShcIk9sZW46IFN1Y2Nlc3NmdWxseSBtaWdyYXRlZCBkYXRhIGZyb20gTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2xlbiBtaWdyYXRpb24gZXJyb3I6XCIsIGVycik7XG4gICAgICB0aGlzLnNldHRpbmdzLm1pZ3JhdGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtaWdyYXRlQWN0aXZpdGllcyhkYXRhOiBUcmFja0hhYml0UmFua0RhdGEpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFjdGl2aXR5Q29uZmlnW10gPSBbLi4uREVGQVVMVF9BQ1RJVklUSUVTXTtcblxuICAgIC8vIEFwcGx5IGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgICBpZiAoZGF0YS5lbmFibGVkQWN0aXZpdGllcykge1xuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN1bHQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aXZpdHkucHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSBpbiBkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICAgICAgYWN0aXZpdHkuZW5hYmxlZCA9IGRhdGEuZW5hYmxlZEFjdGl2aXRpZXNba2V5XSA/PyB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgb3ZlcnJpZGVzXG4gICAgaWYgKGRhdGEuYWN0aXZpdHlPdmVycmlkZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3ZlcnJpZGUgb2YgZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHJlc3VsdC5maW5kKChhKSA9PiBhLmlkID09PSBvdmVycmlkZS5pZCk7XG4gICAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICAgIGlmIChvdmVycmlkZS53ZWVrbHlUYXJnZXQgIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkud2Vla2x5VGFyZ2V0ID0gb3ZlcnJpZGUud2Vla2x5VGFyZ2V0O1xuICAgICAgICAgIGlmIChvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uICE9PSB1bmRlZmluZWQpIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb24gPSBvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGN1c3RvbSBoYWJpdHNcbiAgICBpZiAoZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgIGZvciAoY29uc3QgaGFiaXQgb2YgZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlc1xuICAgICAgICBpZiAocmVzdWx0LnNvbWUoKGEpID0+IGEuaWQgPT09IGhhYml0LmlkKSkgY29udGludWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGlkOiBoYWJpdC5pZCxcbiAgICAgICAgICBuYW1lOiBoYWJpdC5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBoYWJpdC5lbW9qaSA/PyBcIlxcdTJCNTBcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIiwgLy8gRGVmYXVsdCBjdXN0b20gaGFiaXRzIHRvIHNwaXJpdFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZm9sZGVyOiBoYWJpdC5mb2xkZXIsXG4gICAgICAgICAgcHJvcGVydHk6IGhhYml0LnByb3BlcnR5LFxuICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IGhhYml0LmRhbWFnZVBlckNvbXBsZXRpb24gPz8gMSxcbiAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IGhhYml0LndlZWtseVRhcmdldCA/PyAzLFxuICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgIGhhc1dvcmtzcGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJpb3JpdHk6IDUsXG4gICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICBwcmVmZXJyZWRUaW1lOiBcImFueXRpbWVcIixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogT25lLXRpbWUgbWlncmF0aW9uOiByZW5hbWUgbGVnYWN5IHNlc3Npb24gZmllbGRzIFx1MjE5MiB3b3Jrc3BhY2UsXG4gICAqIG1lcmdlIHdvcmtzcGFjZUZvbGRlciBpbnRvIGZvbGRlciwgYW5kIG1vdmUgdGVtcGxhdGVSZWdpc3RyeSBlbnRyaWVzXG4gICAqIGludG8gcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuc2V0dGluZ3MgYXMgYW55O1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBNaWdyYXRlIHRvcC1sZXZlbCBzZXR0aW5ncyBmaWVsZHNcbiAgICBpZiAocmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzICYmICFyYXcud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcykge1xuICAgICAgcmF3LndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMgPSByYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXM7XG4gICAgICBkZWxldGUgcmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyYXcuYWN0aXZlU2Vzc2lvbiAhPT0gdW5kZWZpbmVkICYmIHJhdy5hY3RpdmVXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmF3LmFjdGl2ZVdvcmtzcGFjZSA9IHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgZGVsZXRlIHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSBwZXItYWN0aXZpdHkgZmllbGRzXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgIGNvbnN0IGEgPSBhY3Rpdml0eSBhcyBhbnk7XG4gICAgICBpZiAoYS5oYXNTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgYS5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhLmhhc1dvcmtzcGFjZSA9IGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgZGVsZXRlIGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBNZXJnZSBzZXNzaW9uRm9sZGVyIC8gd29ya3NwYWNlRm9sZGVyIGludG8gZm9sZGVyXG4gICAgICBpZiAoYS5zZXNzaW9uRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGRlbGV0ZSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGEud29ya3NwYWNlRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLndvcmtzcGFjZUZvbGRlcjtcbiAgICAgICAgZGVsZXRlIGEud29ya3NwYWNlRm9sZGVyO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNaWdyYXRlIGFjdGl2ZVdvcmtzcGFjZSBpbm5lciBmaWVsZHNcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UpIHtcbiAgICAgIGNvbnN0IGF3ID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgYXMgYW55O1xuICAgICAgaWYgKGF3Lmhhc1Nlc3Npb24gIT09IHVuZGVmaW5lZCAmJiBhdy5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhdy5oYXNXb3Jrc3BhY2UgPSBhdy5oYXNTZXNzaW9uO1xuICAgICAgICBkZWxldGUgYXcuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB1cCBsZWdhY3kgZm9sZGVyIGZpZWxkcyBmcm9tIGFjdGl2ZVdvcmtzcGFjZVxuICAgICAgZGVsZXRlIGF3LnNlc3Npb25Gb2xkZXI7XG4gICAgICBkZWxldGUgYXcud29ya3NwYWNlRm9sZGVyO1xuICAgIH1cblxuICAgIC8vIE1pZ3JhdGUgdGVtcGxhdGVSZWdpc3RyeSBcdTIxOTIgcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlXG4gICAgaWYgKHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5ICYmIEFycmF5LmlzQXJyYXkocmF3LnRlbXBsYXRlUmVnaXN0cnkpICYmIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmF3LnRlbXBsYXRlUmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKCFlbnRyeS5lbmFibGVkIHx8ICFlbnRyeS50ZW1wbGF0ZVBhdGgpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhOiBhbnkpID0+IGEuaWQgPT09IGVudHJ5LmFjdGl2aXR5VHlwZSk7XG4gICAgICAgIGlmIChhY3Rpdml0eSAmJiAhYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgICAgICBhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSA9IGVudHJ5LnRlbXBsYXRlUGF0aDtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5O1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFV0aWxpdHlcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb25zdGFudHMgJiBEZWZhdWx0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgQm9zc0RlZmluaXRpb24sXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBPbGVuU2V0dGluZ3MsXG4gIERldkNvbmZpZyxcbiAgRWx5c2lhblRoZW1lLFxuICBXb3Jrc3BhY2VDb21wbGV0aW9uU3RhdGUsXG4gIENhbGVuZGFyU2V0dGluZ3MsXG4gIFBlcnNvbmFsU3RhdHMsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8vIC0tLSBWaWV3IFR5cGUgLS0tXG5cbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfT0xFTiA9IFwib2xlbi1kYXNoYm9hcmQtdmlld1wiO1xuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9XT1JLU1BBQ0UgPSBcIm9sZW4td29ya3NwYWNlLXZpZXdcIjtcblxuLy8gLS0tIEJvc3MgRGVmaW5pdGlvbnMgKDEzIHRpZXJzKSAtLS1cblxuZXhwb3J0IGNvbnN0IEJPU1NFUzogQm9zc0RlZmluaXRpb25bXSA9IFtcbiAgeyB0aWVyOiAxLCBuYW1lOiBcIlNoYWRvdyBvZiBBcGF0aHlcIiwgcmFuazogXCJEb29tc2Nyb2xsZXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHdlaWdodCBvZiBpbmVydGlhIHRoYXQga2VlcHMgeW91IHNjcm9sbGluZyBpbnN0ZWFkIG9mIHN0YXJ0aW5nXCIsIGxvcmU6IFwiQm9ybiBmcm9tIGZvcmdvdHRlbiBwcm9taXNlcyBhbmQgdW5vcGVuZWQgZ3ltIGJhZ3MsIHRoZSBTaGFkb3cgZmVlZHMgb24gcG90ZW50aWFsIHVucmVhbGl6ZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuMVwiIH0sXG4gIHsgdGllcjogMiwgbmFtZTogXCJTaXJlbidzIENhbGxcIiwgcmFuazogXCJBcm1jaGFpciBHZW5lcmFsXCIsIGRlc2NyaXB0aW9uOiBcIkRpc3RyYWN0aW9uJ3Mgc3dlZXQgc29uZyB0aGF0IHB1bGxzIGZvY3VzIGZyb20gY29tbWl0dGVkIHdvcmtcIiwgbG9yZTogXCJTaGUgc2luZ3Mgb2YgZWFzaWVyIHBhdGhzLCBvZiBqdXN0IG9uZSBtb3JlIHZpZGVvLCBvZiBzdGFydGluZyB0b21vcnJvdyBpbnN0ZWFkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjJcIiB9LFxuICB7IHRpZXI6IDMsIG5hbWU6IFwiSHlkcmEgb2YgSGFiaXRzXCIsIHJhbms6IFwiQXBwcmVudGljZVwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29tcGxleGl0eSBvZiBtYW5hZ2luZyBtdWx0aXBsZSByb3V0aW5lcyBzaW11bHRhbmVvdXNseVwiLCBsb3JlOiBcIkN1dCBvbmUgaGVhZCBhbmQgdHdvIGdyb3cgYmFjay4gRWFjaCBoYWJpdCBkZW1hbmRzIGl0cyBvd24gYXR0ZW50aW9uLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjNcIiB9LFxuICB7IHRpZXI6IDQsIG5hbWU6IFwiTWlub3RhdXIncyBNYXplXCIsIHJhbms6IFwiQ2l0aXplblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29uZnVzaW9uIGFuZCByb3V0aW5lIHRoYXQgdHJhcHMgZXZlbiBkZWRpY2F0ZWQgcHJhY3RpdGlvbmVyc1wiLCBsb3JlOiBcIkxvc3QgaW4gY29ycmlkb3JzIG9mIGhhYml0LCB0aGUgcGF0aCBmb3J3YXJkIGlzIG5ldmVyIGNsZWFyLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjdcIiB9LFxuICB7IHRpZXI6IDUsIG5hbWU6IFwiTWVkdXNhJ3MgR2F6ZVwiLCByYW5rOiBcIlNjaG9sYXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHBhcmFseXNpcyB0aGF0IGNvbWVzIGZyb20gb3ZlcnRoaW5raW5nIG9yIGZlYXIgb2YgZmFpbHVyZVwiLCBsb3JlOiBcIk9uZSBnbGFuY2UgYW5kIHlvdSBhcmUgZnJvemVuLCB1bmFibGUgdG8gYWN0LCB1bmFibGUgdG8gbW92ZS5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS45XCIgfSxcbiAgeyB0aWVyOiA2LCBuYW1lOiBcIk5lbWVhbiBMaW9uXCIsIHJhbms6IFwiU2FtdXJhaVwiLCBkZXNjcmlwdGlvbjogXCJTZWVtaW5nbHkgaW52dWxuZXJhYmxlIG9ic3RhY2xlcyB0aGF0IHJlcXVpcmUgcGVyc2lzdGVudCBlZmZvcnRcIiwgbG9yZTogXCJJdHMgaGlkZSBjYW5ub3QgYmUgcGllcmNlZCBieSBvcmRpbmFyeSBtZWFucy4gT25seSBkaXNjaXBsaW5lIGN1dHMgdGhyb3VnaC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4xXCIgfSxcbiAgeyB0aWVyOiA3LCBuYW1lOiBcIkNoaW1lcmFcIiwgcmFuazogXCJUZW1wbGFyXCIsIGRlc2NyaXB0aW9uOiBcIk11bHRpLWhlYWRlZCBiZWFzdCByZXF1aXJpbmcgYmFsYW5jZWQgYXR0ZW50aW9uIGFjcm9zcyBhbGwgZG9tYWluc1wiLCBsb3JlOiBcIkxpb24sIGdvYXQsIGFuZCBzZXJwZW50IFx1MjAxNCBlYWNoIGhlYWQgZGVtYW5kcyBtYXN0ZXJ5IG9mIGEgZGlmZmVyZW50IGFydC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4zXCIgfSxcbiAgeyB0aWVyOiA4LCBuYW1lOiBcIkNlcmJlcnVzXCIsIHJhbms6IFwiU3RvaWNcIiwgZGVzY3JpcHRpb246IFwiR3VhcmRpYW4gb2YgdHJhbnNmb3JtYXRpb24gdGVzdGluZyBpZiBoYWJpdHMgaGF2ZSBiZWNvbWUgaWRlbnRpdHlcIiwgbG9yZTogXCJUaHJlZSBoZWFkcywgdGhyZWUgdGVzdHMuIFBhc3QgdGhlIGdhdGUgbGllcyB0cmFuc2Zvcm1hdGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi41XCIgfSxcbiAgeyB0aWVyOiA5LCBuYW1lOiBcIlNjeWxsYSAmIENoYXJ5YmRpc1wiLCByYW5rOiBcIk9seW1waWFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBpbXBvc3NpYmxlIGNob2ljZSBiZXR3ZWVuIGNvbXBldGluZyBwcmlvcml0aWVzXCIsIGxvcmU6IFwiQmV0d2VlbiB0aGUgcm9jayBhbmQgdGhlIHdoaXJscG9vbCwgYm90aCBtdXN0IHNvbWVob3cgYmUgaG9ub3JlZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi43XCIgfSxcbiAgeyB0aWVyOiAxMCwgbmFtZTogXCJUaGUgRnVyaWVzXCIsIHJhbms6IFwiU2FnZVwiLCBkZXNjcmlwdGlvbjogXCJJbnRlcm5hbCB2b2ljZXMgb2YgZ3VpbHQgYW5kIHNoYW1lIGF0dGFja2luZyBldmVuIHRoZSBzdWNjZXNzZnVsXCIsIGxvcmU6IFwiVGhleSB3aGlzcGVyIHlvdXIgZmFpbHVyZXMsIHJlbWluZCB5b3Ugb2YgZXZlcnkgc2tpcCwgZXZlcnkgd2Vha25lc3MuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuOVwiIH0sXG4gIHsgdGllcjogMTEsIG5hbWU6IFwiVHlwaG9uXCIsIHJhbms6IFwiVGl0YW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGZvcmNlIG9mIGNoYW9zIHRocmVhdGVuaW5nIHRvIHVuZG8gYWxsIHByb2dyZXNzXCIsIGxvcmU6IFwiRmF0aGVyIG9mIGFsbCBtb25zdGVycywgaGUgc2Vla3MgdG8gcmV0dXJuIHlvdSB0byB0aGUgYmVnaW5uaW5nLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjFcIiB9LFxuICB7IHRpZXI6IDEyLCBuYW1lOiBcIktyb25vc1wiLCByYW5rOiBcIkFyY2hvblwiLCBkZXNjcmlwdGlvbjogXCJUaW1lIGl0c2VsZiBhcyBhbiBlbmVteSwgdGVzdGluZyBzdXN0YWluZWQgaW50ZW5zaXR5XCIsIGxvcmU6IFwiVGhlIFRpdGFuIHdobyBkZXZvdXJzIGhpcyBjaGlsZHJlbi4gQ2FuIHlvdSBtYWludGFpbiBhcyB3ZWVrcyBiZWNvbWUgbW9udGhzP1wiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjNcIiB9LFxuICB7IHRpZXI6IDEzLCBuYW1lOiBcIkNoYW9zIFByaW1vcmRpYWxcIiwgcmFuazogXCJNYXN0ZXIgb2YgQWxsXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB1bHRpbWF0ZSB0ZXN0IG9mIHVuc2hha2VhYmxlIGRpc2NpcGxpbmVcIiwgbG9yZTogXCJCZWZvcmUgY3JlYXRpb24sIGJlZm9yZSBvcmRlciwgb25seSBDaGFvcy4gVG8gbWFzdGVyIGl0IGlzIHRvIG1hc3RlciB5b3Vyc2VsZi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy42XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSQU5LX1RJRVJfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiM2QjcyODBcIiwgMjogXCIjRUY0NDQ0XCIsIDM6IFwiI0Y1OUUwQlwiLCA0OiBcIiMxMEI5ODFcIixcbiAgNTogXCIjM0I4MkY2XCIsIDY6IFwiIzhCNUNGNlwiLCA3OiBcIiNFQzQ4OTlcIiwgODogXCIjRjk3MzE2XCIsXG4gIDk6IFwiIzA2QjZENFwiLCAxMDogXCIjQTg1NUY3XCIsIDExOiBcIiNEQzI2MjZcIiwgMTI6IFwiIzdDM0FFRFwiLFxuICAxMzogXCIjYzlhMjI3XCIsXG59O1xuXG4vLyAtLS0gQ2hhcHRlciBQcm9ncmVzc2lvbiAtLS1cblxuZXhwb3J0IGNvbnN0IENIQVBURVJfTkFNRVM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gIDE6IFwiSW5pdGlhdGVcIixcbiAgMjogXCJFeHBsb3JlclwiLFxuICAzOiBcIkpvdXJuZXltYW5cIixcbiAgNDogXCJBZGVwdFwiLFxuICA1OiBcIlBoaWxvc29waGVyXCIsXG4gIDY6IFwiTWFzdGVyXCIsXG4gIDc6IFwiU2FnZVwiLFxuICA4OiBcIk9yYWNsZVwiLFxuICA5OiBcIlRpdGFuXCIsXG4gIDEwOiBcIk9seW1waWFuXCIsXG59O1xuXG4vLyAtLS0gRHluYW1pYyBUaXRsZSBUYWJsZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfRE9NSU5BTlRfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYm9keTogICB7IGxpZ2h0OiBcIkF0aGxldGVcIiwgICBtaWQ6IFwiV2FycmlvclwiLCAgaGVhdnk6IFwiVGl0YW5cIiB9LFxuICBtaW5kOiAgIHsgbGlnaHQ6IFwiU3R1ZGVudFwiLCAgIG1pZDogXCJTY2hvbGFyXCIsICBoZWF2eTogXCJQb2x5bWF0aFwiIH0sXG4gIHNwaXJpdDogeyBsaWdodDogXCJTZWVrZXJcIiwgICAgbWlkOiBcIlNhZ2VcIiwgICAgIGhlYXZ5OiBcIk9yYWNsZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVFdPX0NBVEVHT1JZX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiYm9keSttaW5kXCI6ICAgIHsgbGlnaHQ6IFwiRGlzY2lwbGluZWQgVGhpbmtlclwiLCBtaWQ6IFwiUGhpbG9zb3BoZXItS2luZ1wiLCBoZWF2eTogXCJSZW5haXNzYW5jZSBUaXRhblwiIH0sXG4gIFwiYm9keStzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQXNjZXRpY1wiLCAgICAgICAgICAgICBtaWQ6IFwiVGVtcGxhclwiLCAgICAgICAgICBoZWF2eTogXCJPbHltcGlhbiBNb25rXCIgfSxcbiAgXCJtaW5kK3NwaXJpdFwiOiAgeyBsaWdodDogXCJDb250ZW1wbGF0aXZlXCIsICAgICAgIG1pZDogXCJNeXN0aWMgU2Nob2xhclwiLCAgIGhlYXZ5OiBcIkVubGlnaHRlbmVkIE9uZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQkFMQU5DRURfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCIsXG4gIG1pZDogXCJSZW5haXNzYW5jZSBTb3VsXCIsXG4gIGhlYXZ5OiBcIkV1ZGFpbW9uXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBBY3Rpdml0aWVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVklUSUVTOiBBY3Rpdml0eUNvbmZpZ1tdID0gW1xuICB7XG4gICAgaWQ6IFwid29ya291dFwiLCBuYW1lOiBcIldvcmtvdXRcIiwgZW1vamk6IFwiXFx1ezFGNEFBfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiLCBwcm9wZXJ0eTogXCJXb3Jrb3V0XCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA3LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHdvcmtzcGFjZVRlbXBsYXRlOiBcIndvcmtvdXRcIixcbiAgICBwcmlvcml0eTogOCwgbmVnbGVjdFRocmVzaG9sZDogMixcbiAgICBwcmVmZXJyZWRUaW1lOiBcIm1vcm5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2FyZGlvXCIsIG5hbWU6IFwiQ2FyZGlvXCIsIGVtb2ppOiBcIlxcdXsxRjNDM31cIiwgY2F0ZWdvcnk6IFwiYm9keVwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAyIENhcmRpb1wiLCBwcm9wZXJ0eTogXCJDYXJkaW9cIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDQsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICBhbHRlcm5hdGVzV2l0aDogXCJ3b3Jrb3V0XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWFkaW5nXCIsIG5hbWU6IFwiUmVhZGluZ1wiLCBlbW9qaTogXCJcXHV7MUY0RDZ9XCIsIGNhdGVnb3J5OiBcIm1pbmRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMyBSZWFkaW5nXCIsIHByb3BlcnR5OiBcIlJlYWRpbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDYsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJldmVuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA0NSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRydW1taW5nXCIsIG5hbWU6IFwiRHJ1bW1pbmdcIiwgZW1vamk6IFwiXFx1ezFGOTQxfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNCBEcnVtbWluZ1wiLCBwcm9wZXJ0eTogXCJEcnVtbWluZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNiwgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJoZWFsdGgtc3R1ZHlcIiwgbmFtZTogXCJIZWFsdGggU3R1ZHlcIiwgZW1vamk6IFwiXFx1ezFGOUVDfVwiLCBjYXRlZ29yeTogXCJtaW5kXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDUgSGVhbHRoIFN0dWR5XCIsIHByb3BlcnR5OiBcIkhlYWx0aCBTdHVkeVwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMywgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNCwgbmVnbGVjdFRocmVzaG9sZDogNCxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2NpYWxcIiwgbmFtZTogXCJTb2NpYWxcIiwgZW1vamk6IFwiXFx1ezFGOTFEfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNiBTb2NpYWxcIiwgcHJvcGVydHk6IFwiU29jaWFsXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiAyLCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA1LCBuZWdsZWN0VGhyZXNob2xkOiA1LFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcmF3aW5nXCIsIG5hbWU6IFwiRHJhd2luZ1wiLCBlbW9qaTogXCJcXHV7MUYzQTh9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA3IERyYXdpbmdcIiwgcHJvcGVydHk6IFwiRHJhd2luZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNCwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNywgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG5dO1xuXG4vLyAtLS0gRGlyZWN0aXZlIExvcmUgVGVtcGxhdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgTkVHTEVDVF9MT1JFOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB3b3Jrb3V0OiBcIllvdXIgbXVzY2xlcyBmb3JnZXQgd2hhdCB0aGV5IG9uY2Uga25ldy4gVGhlIGJvZHkgY3JhdmVzIGRpc2NpcGxpbmUgXHUyMDE0IGFuc3dlciBpdC5cIixcbiAgY2FyZGlvOiBcIlRoZSBoZWFydCBncm93cyBzbHVnZ2lzaCB3aXRob3V0IHRoZSBwb3VuZGluZyByaHl0aG0gb2YgZWZmb3J0LlwiLFxuICByZWFkaW5nOiBcIlRoZSBtaW5kIHN0YXJ2ZXMgb24gZGlzdHJhY3Rpb24uIEZlZWQgaXQgd2l0aCBwYWdlcywgbm90IHBpeGVscy5cIixcbiAgZHJ1bW1pbmc6IFwiU2lsZW5jZSBpcyBub3QgcmVzdCBcdTIwMTQgaXQgaXMgdGhlIGRlYXRoIG9mIHJoeXRobS4gUGljayB1cCB0aGUgc3RpY2tzLlwiLFxuICBcImhlYWx0aC1zdHVkeVwiOiBcIktub3dsZWRnZSBvZiB0aGUgYm9keSBpcyBwb3dlciBvdmVyIGl0LiBOZWdsZWN0IGludml0ZXMgaWdub3JhbmNlLlwiLFxuICBzb2NpYWw6IFwiRXZlbiB3YXJyaW9ycyBuZWVkIGZlbGxvd3NoaXAuIElzb2xhdGlvbiBicmVlZHMgc3RhZ25hdGlvbi5cIixcbiAgZHJhd2luZzogXCJUaGUgYmVhc3Qgd2l0aGluIHlvdSBncm93cyB3ZWFrIHdpdGhvdXQgdGhlIGRpc2NpcGxpbmUgb2YgbGluZSBhbmQgZm9ybS5cIixcbn07XG5cbi8vIC0tLSBGYWxsYmFjayBRdW90ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBGQUxMQkFDS19RVU9URVM6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBhdHRyaWJ1dGlvbjogc3RyaW5nIH0+ID0gW1xuICB7IHRleHQ6IFwiWW91IGhhdmUgcG93ZXIgb3ZlciB5b3VyIG1pbmQgXHUyMDE0IG5vdCBvdXRzaWRlIGV2ZW50cy4gUmVhbGl6ZSB0aGlzLCBhbmQgeW91IHdpbGwgZmluZCBzdHJlbmd0aC5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIldlIHN1ZmZlciBtb3JlIG9mdGVuIGluIGltYWdpbmF0aW9uIHRoYW4gaW4gcmVhbGl0eS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBpbXBlZGltZW50IHRvIGFjdGlvbiBhZHZhbmNlcyBhY3Rpb24uIFdoYXQgc3RhbmRzIGluIHRoZSB3YXkgYmVjb21lcyB0aGUgd2F5LlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiTm8gbWFuIGlzIGZyZWUgd2hvIGlzIG5vdCBtYXN0ZXIgb2YgaGltc2VsZi5cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIldhc3RlIG5vIG1vcmUgdGltZSBhcmd1aW5nIGFib3V0IHdoYXQgYSBnb29kIG1hbiBzaG91bGQgYmUuIEJlIG9uZS5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIkl0IGlzIG5vdCB0aGF0IHdlIGhhdmUgYSBzaG9ydCB0aW1lIHRvIGxpdmUsIGJ1dCB0aGF0IHdlIHdhc3RlIGEgZ29vZCBkZWFsIG9mIGl0LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiRmlyc3Qgc2F5IHRvIHlvdXJzZWxmIHdoYXQgeW91IHdvdWxkIGJlOyBhbmQgdGhlbiBkbyB3aGF0IHlvdSBoYXZlIHRvIGRvLlwiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiVGhlIGhhcHBpbmVzcyBvZiB5b3VyIGxpZmUgZGVwZW5kcyB1cG9uIHRoZSBxdWFsaXR5IG9mIHlvdXIgdGhvdWdodHMuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJIZSB3aG8gZmVhcnMgZGVhdGggd2lsbCBuZXZlciBkbyBhbnl0aGluZyB3b3J0aCBvZiBhIG1hbiB3aG8gaXMgYWxpdmUuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJEaWZmaWN1bHRpZXMgc3RyZW5ndGhlbiB0aGUgbWluZCwgYXMgbGFib3IgZG9lcyB0aGUgYm9keS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkhvdyBsb25nIGFyZSB5b3UgZ29pbmcgdG8gd2FpdCBiZWZvcmUgeW91IGRlbWFuZCB0aGUgYmVzdCBmb3IgeW91cnNlbGY/XCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJUaGUgc291bCBiZWNvbWVzIGR5ZWQgd2l0aCB0aGUgY29sb3VyIG9mIGl0cyB0aG91Z2h0cy5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbl07XG5cbi8vIC0tLSBSb21hbiBOdW1lcmFscyBIZWxwZXIgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JvbWFuKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgdmFscyA9IFsxMDAwLCA5MDAsIDUwMCwgNDAwLCAxMDAsIDkwLCA1MCwgNDAsIDEwLCA5LCA1LCA0LCAxXTtcbiAgY29uc3Qgc3ltcyA9IFtcIk1cIiwgXCJDTVwiLCBcIkRcIiwgXCJDRFwiLCBcIkNcIiwgXCJYQ1wiLCBcIkxcIiwgXCJYTFwiLCBcIlhcIiwgXCJJWFwiLCBcIlZcIiwgXCJJVlwiLCBcIklcIl07XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICB3aGlsZSAobnVtID49IHZhbHNbaV0pIHtcbiAgICAgIHJlc3VsdCArPSBzeW1zW2ldO1xuICAgICAgbnVtIC09IHZhbHNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLSBEZWZhdWx0IFdvcmtzcGFjZSBDb21wbGV0aW9uIFN0YXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUzogV29ya3NwYWNlQ29tcGxldGlvblN0YXRlW10gPSBbXG4gIHsgaWQ6IFwiZGlzY2lwbGluZVwiLCBuYW1lOiBcIkRpc2NpcGxpbmVcIiwgaWNvbjogXCJcXHUyNUM2XCIsIGNvbG9yOiBcIiM5MjhkODVcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDEuMCB9LFxuICB7IGlkOiBcImZsb3dcIiwgbmFtZTogXCJGbG93XCIsIGljb246IFwiXFx1MjI0OFwiLCBjb2xvcjogXCIjYzlhODRjXCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAxLjUgfSxcbiAgeyBpZDogXCJza2lwcGVkXCIsIG5hbWU6IFwiU2tpcHBlZFwiLCBpY29uOiBcIlxcdTI1Q0JcIiwgY29sb3I6IFwiIzhiMmQzNVwiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMCB9LFxuXTtcblxuLy8gLS0tIERlZmF1bHQgRGV2IENvbmZpZyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVWX0NPTkZJRzogRGV2Q29uZmlnID0ge1xuICBsYWJlbHM6IHtcbiAgICBncmVldGluZ19tb3JuaW5nOiBcIkdvb2QgbW9ybmluZ1wiLFxuICAgIGdyZWV0aW5nX2FmdGVybm9vbjogXCJHb29kIGFmdGVybm9vblwiLFxuICAgIGdyZWV0aW5nX2V2ZW5pbmc6IFwiR29vZCBldmVuaW5nXCIsXG4gICAgZ3JlZXRpbmdfbmlnaHQ6IFwiR29vZCBuaWdodFwiLFxuICAgIGRpcmVjdGl2ZV90aXRsZTogXCJUSEUgRElSRUNUSVZFXCIsXG4gICAgYm9zc19zdGF0dXNfdGl0bGU6IFwiQk9TUyBTVEFUVVNcIixcbiAgICB3ZWVrbHlfcmh5dGhtX3RpdGxlOiBcIldFRUtMWSBSSFlUSE1cIixcbiAgICBhY3Rpdml0eV9ncmlkX3RpdGxlOiBcIkFDVElWSVRJRVNcIixcbiAgICB0ZW1wbGVfdGl0bGU6IFwiVEhFIFRFTVBMRVwiLFxuICAgIGV1ZGFpbW9uaWFfdGl0bGU6IFwiRXVkYWltb25pYSBJbmRleFwiLFxuICAgIGRheW1hcF90aXRsZTogXCJZT1VSIERBWVwiLFxuICAgIGJlZ2luX3dvcmtzcGFjZTogXCJFTlRFUiBXT1JLU1BBQ0VcIixcbiAgICBub3Rfbm93OiBcIk5PVCBOT1dcIixcbiAgfSxcbiAgeHBQZXJDb21wbGV0aW9uOiAxMCxcbiAgc3RyZWFrQm9udXNNdWx0aXBsaWVyOiAxLjUsXG4gIGJ1ZmZlck1pbnV0ZXM6IDE1LFxuICBtb3JuaW5nU3RhcnQ6IDYsXG4gIG1vcm5pbmdFbmQ6IDEyLFxuICBhZnRlcm5vb25FbmQ6IDE4LFxuICBldmVuaW5nRW5kOiAyMyxcbiAgdGhlbWVPdmVycmlkZXM6IHt9LFxuICBhbmltYXRpb25TdGFnZ2VyTXM6IDgwLFxuICBoZXJvSGVpZ2h0OiAzNTAsXG4gIHNlY3Rpb25PcmRlcjogW1xuICAgIFwiaGVyb1wiLCBcImhlYXRtYXBcIiwgXCJldWRhaW1vbmlhXCIsIFwiZGF5bWFwXCIsIFwiZGlyZWN0aXZlXCIsIFwiYm9zc1wiLFxuICAgIFwid2Vla2x5XCIsIFwiYWN0aXZpdGllc1wiLCBcInRlbXBsZVwiLCBcInF1b3RlXCIsXG4gIF0sXG4gIGhpZGRlblNlY3Rpb25zOiBbXSxcbiAgYWN0aXZpdHlHcmlkQ29sdW1uczogMixcbn07XG5cbi8vIC0tLSBEZWZhdWx0IFBlcnNvbmFsIFN0YXRzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTT05BTF9TVEFUUzogUGVyc29uYWxTdGF0cyA9IHtcbiAgZ2VuZGVyOiBcIm1hbGVcIixcbiAgaGVpZ2h0OiAxNzUsXG4gIGJpcnRoZGF0ZTogXCJcIixcbiAgY3VycmVudFdlaWdodDogMCxcbiAgd2VpZ2h0TG9nOiBbXSxcbiAgd2VpZ2h0TG9nRnJlcXVlbmN5OiBcImV2ZXJ5LXdlZWtcIixcbiAgd2VpZ2h0TG9nQ3VzdG9tRGF5czogNyxcbiAgbGFzdFdlaWdodExvZ0RhdGU6IG51bGwsXG59O1xuXG4vLyAtLS0gTXVzY2xlIEdyb3VwIERlZmluaXRpb25zIC0tLVxuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQUyA9IFtcbiAgXCJjaGVzdFwiLCBcImJhY2tcIiwgXCJzaG91bGRlcnNcIiwgXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIixcbiAgXCJhYnNcIiwgXCJvYmxpcXVlc1wiLCBcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiLFxuICBcInRyYXBzXCIsIFwibGF0c1wiLCBcIm5lY2tcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE11c2NsZUdyb3VwSWQgPSB0eXBlb2YgTVVTQ0xFX0dST1VQU1tudW1iZXJdO1xuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQX0xBQkVMUzogUmVjb3JkPE11c2NsZUdyb3VwSWQsIHN0cmluZz4gPSB7XG4gIGNoZXN0OiBcIkNoZXN0XCIsXG4gIGJhY2s6IFwiQmFja1wiLFxuICBzaG91bGRlcnM6IFwiU2hvdWxkZXJzXCIsXG4gIGJpY2VwczogXCJCaWNlcHNcIixcbiAgdHJpY2VwczogXCJUcmljZXBzXCIsXG4gIGZvcmVhcm1zOiBcIkZvcmVhcm1zXCIsXG4gIGFiczogXCJBYnNcIixcbiAgb2JsaXF1ZXM6IFwiT2JsaXF1ZXNcIixcbiAgcXVhZHM6IFwiUXVhZHNcIixcbiAgaGFtc3RyaW5nczogXCJIYW1zdHJpbmdzXCIsXG4gIGdsdXRlczogXCJHbHV0ZXNcIixcbiAgY2FsdmVzOiBcIkNhbHZlc1wiLFxuICB0cmFwczogXCJUcmFwc1wiLFxuICBsYXRzOiBcIkxhdHNcIixcbiAgbmVjazogXCJOZWNrXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBDYWxlbmRhciBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1M6IENhbGVuZGFyU2V0dGluZ3MgPSB7XG4gIGVuYWJsZURhaWx5Tm90ZXM6IHRydWUsXG4gIGRhaWx5Tm90ZXNGb2xkZXI6IFwiXCIsXG4gIGRhaWx5Tm90ZXNGb3JtYXQ6IFwiWVlZWS1NTS1ERFwiLFxuICBlbmFibGVUYXNrc1BsdWdpbjogZmFsc2UsXG4gIGVuYWJsZVF1aWNrVGFza3M6IHRydWUsXG4gIHF1aWNrVGFza3M6IFtdLFxufTtcblxuLy8gLS0tIERlZmF1bHQgT2xlbiBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0xFTl9TRVRUSU5HUzogT2xlblNldHRpbmdzID0ge1xuICAvLyBQcm9maWxlXG4gIHVzZXJOYW1lOiBcIldhcnJpb3JcIixcbiAgbXlXaHk6IFwiXCIsXG4gIGhlcm9CYWNrZ3JvdW5kOiBcIlwiLFxuICBob21lcGFnZTogXCJcIixcblxuICAvLyBBY3Rpdml0aWVzXG4gIGFjdGl2aXRpZXM6IERFRkFVTFRfQUNUSVZJVElFUyxcblxuICAvLyBDYXRlZ29yaWVzXG4gIGNhdGVnb3J5Q29sb3JzOiB7XG4gICAgYm9keTogXCIjYzlhODRjXCIsXG4gICAgbWluZDogXCIjNmI4Y2NlXCIsXG4gICAgc3Bpcml0OiBcIiM4YjdlYzhcIixcbiAgfSxcbiAgdGl0bGVPdmVycmlkZTogXCJcIixcblxuICAvLyBFdWRhaW1vbmlhXG4gIGNhdGVnb3J5WFA6IHtcbiAgICBib2R5OiAwLFxuICAgIG1pbmQ6IDAsXG4gICAgc3Bpcml0OiAwLFxuICB9LFxuXG4gIC8vIEJvc3NcbiAgY3VycmVudFRpZXI6IDEsXG4gIGJvc3NNYXhIUDogMzUsXG4gIGJvc3NDdXJyZW50SFA6IDM1LFxuICBpblRhcnRhcnVzOiBmYWxzZSxcbiAgdGFydGFydXNQZW5hbmNlVGFza3M6IFtdLFxuICB0YXJ0YXJ1c1N0YXJ0RGF0ZTogbnVsbCxcbiAgZmFpbGVkVGhyZXNob2xkRGF5czogMCxcbiAgY29uc2VjdXRpdmVQZXJmZWN0V2Vla3M6IDAsXG5cbiAgLy8gVGVtcGxlXG4gIHRlbXBsZVRhc2tzOiBbXG4gICAgeyBpZDogXCJiYXRoaW5nXCIsIG5hbWU6IFwiQmF0aGluZ1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDEsIGVtb2ppOiBcIlxcdXsxRjZCRn1cIiB9LFxuICAgIHsgaWQ6IFwiZmFjaWFsLWhhaXJcIiwgbmFtZTogXCJGYWNpYWwgaGFpclwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIsIGVtb2ppOiBcIlxcdXsxRkE5Mn1cIiB9LFxuICAgIHsgaWQ6IFwibmFpbHNcIiwgbmFtZTogXCJOYWlsc1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDcsIGVtb2ppOiBcIlxcdTI3MDJcXHVGRTBGXCIgfSxcbiAgICB7IGlkOiBcImhhaXJjdXRcIiwgbmFtZTogXCJIYWlyY3V0XCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogMjEsIGVtb2ppOiBcIlxcdXsxRjQ4OH1cIiB9LFxuICBdLFxuXG4gIC8vIFJld2FyZHNcbiAgcGVuZGluZ1Jld2FyZHM6IFtdLFxuICBjbGFpbWVkUmV3YXJkczogW10sXG4gIGJhbmtlZFJld2FyZHM6IFtdLFxuXG4gIC8vIFN5c3RlbVxuICBzeXN0ZW1TdGF0ZTogXCJhY3RpdmVcIixcbiAgcGF1c2VTdGFydFRpbWU6IG51bGwsXG4gIHRvdGFsUGF1c2VkVGltZTogMCxcbiAgbWlncmF0ZWQ6IGZhbHNlLFxuICBzaW11bGF0ZWREYXRlOiBudWxsLFxuXG4gIC8vIFRoZW1lXG4gIHRoZW1lT3ZlcnJpZGVzOiB7fSxcblxuICAvLyBEZXZcbiAgZGV2Q29uZmlnOiBERUZBVUxUX0RFVl9DT05GSUcsXG5cbiAgLy8gV29ya3NwYWNlXG4gIHdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXM6IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUyxcbiAgYWN0aXZlV29ya3NwYWNlOiBudWxsLFxuXG4gIC8vIENhbGVuZGFyXG4gIGNhbGVuZGFyOiBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuXG4gIC8vIFBlcnNvbmFsIFN0YXRzXG4gIHBlcnNvbmFsU3RhdHM6IERFRkFVTFRfUEVSU09OQUxfU1RBVFMsXG5cbiAgLy8gUXVvdGVcbiAgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLFxuICBsYXN0UXVvdGVJbmRleDogLTEsXG4gIHJlY2VudFF1b3RlSWRzOiBbXSxcbn07XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXNoYm9hcmQgVmlld1xuLy8gTWFpbiBzY3JvbGxhYmxlIEl0ZW1WaWV3IHJlbmRlcmluZyBhbGwgZGFzaGJvYXJkIHNlY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQ29tcGxldGlvbk1hcCwgQ29tcGxldGlvbiwgQ2FsZW5kYXJUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBDYWxlbmRhckVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0NhbGVuZGFyRW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJIZXJvQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9DYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJFdWRhaW1vbmlhQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXVkYWltb25pYUJhclwiO1xuaW1wb3J0IHsgcmVuZGVyRGlyZWN0aXZlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RpcmVjdGl2ZUNhcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvc3NTdGF0dXNDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9zc1N0YXR1c0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtseVJoeXRobSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlZWtseVJoeXRobVwiO1xuaW1wb3J0IHsgcmVuZGVyQWN0aXZpdHlHcmlkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aXZpdHlHcmlkXCI7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGVDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RlbXBsZUNoaXBzXCI7XG5pbXBvcnQgeyByZW5kZXJRdW90ZUZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlRm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXlUaW1lbGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RheVRpbWVsaW5lXCI7XG5pbXBvcnQgeyByZW5kZXJTdHJlbmd0aEhlYXRtYXAsIHNob3dNdXNjbGVQcm9ncmVzc1BvcHVwLCBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAsIHNob3dNdXNjbGVTZWxlY3RvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0cmVuZ3RoSGVhdG1hcFwiO1xuaW1wb3J0IHsgcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV2VpZ2h0UHJvZ3Jlc3NcIjtcbmltcG9ydCB0eXBlIHsgTXVzY2xlR3JvdXBJZCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSBpbnRlcnZhbHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfT0xFTjtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiT2xlblwiO1xuICB9XG5cbiAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImNvbXBhc3NcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBjbGVhbnVwKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5pbnRlcnZhbHMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZFwiIH0pO1xuXG4gICAgLy8gQXBwbHkgdGhlbWUgb3ZlcnJpZGVzXG4gICAgdGhpcy5hcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3QpO1xuXG4gICAgLy8gR2F0aGVyIGNvbXBsZXRpb24gZGF0YSBmcm9tIHZhdWx0XG4gICAgY29uc3QgY29tcGxldGlvbkRhdGEgPSB0aGlzLmdhdGhlckNvbXBsZXRpb25EYXRhKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGVuZ2luZXNcbiAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBPbGVuRW5naW5lKHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgbm93KTtcblxuICAgIC8vIENhbGVuZGFyIGludGVncmF0aW9uIFx1MjAxNCBnYXRoZXIgY2FsZW5kYXIgdGFza3MgYW5kIGZlZWQgaW50byBlbmdpbmVcbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZSh0aGlzLmFwcCwgc2V0dGluZ3MsIG5vdyk7XG4gICAgY29uc3QgY2FsZW5kYXJUYXNrcyA9IGF3YWl0IHRoaXMuZ2F0aGVyQ2FsZW5kYXJUYXNrcyhjYWxlbmRhckVuZ2luZSk7XG4gICAgY29uc3QgY2FsZW5kYXJFbnRyaWVzID0gY2FsZW5kYXJFbmdpbmUudG9EYXlNYXBFbnRyaWVzKGNhbGVuZGFyVGFza3MpO1xuICAgIGVuZ2luZS5zZXRDYWxlbmRhckVudHJpZXMoY2FsZW5kYXJFbnRyaWVzKTtcblxuICAgIC8vIEJ1aWxkIHNlY3Rpb24gb3JkZXIgZnJvbSBkZXZDb25maWdcbiAgICBjb25zdCBzZWN0aW9uT3JkZXIgPSBzZXR0aW5ncy5kZXZDb25maWcuc2VjdGlvbk9yZGVyO1xuICAgIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQoc2V0dGluZ3MuZGV2Q29uZmlnLmhpZGRlblNlY3Rpb25zKTtcblxuICAgIGxldCBzdGFnZ2VySWR4ID0gMDtcblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uT3JkZXIpIHtcbiAgICAgIGlmIChoaWRkZW4uaGFzKHNlY3Rpb24pKSBjb250aW51ZTtcblxuICAgICAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJoZXJvXCI6XG4gICAgICAgICAgcmVuZGVySGVyb0NhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiaGVhdG1hcFwiOlxuICAgICAgICAgIHJlbmRlclN0cmVuZ3RoSGVhdG1hcChyb290LCBzZXR0aW5ncywgZW5naW5lLCBjb21wbGV0aW9uRGF0YSwgc3RhZ2dlcklkeCsrLCB7XG4gICAgICAgICAgICBvbk11c2NsZUNsaWNrOiAobXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgc2hvd011c2NsZVByb2dyZXNzUG9wdXAobXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Qcm9ncmVzc0NsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dPdmVyYWxsUHJvZ3Jlc3NQb3B1cChzZXR0aW5ncywgY29tcGxldGlvbkRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dNdXNjbGVTZWxlY3Rvcigoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB3b3Jrb3V0IHdpdGggc2VsZWN0ZWQgbXVzY2xlcyBcdTIwMTQgZW50ZXIgd29ya291dCB3b3Jrc3BhY2VcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKFwid29ya291dFwiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIFdlaWdodCBub3RpZmljYXRpb24gKHNob3dzIG9ubHkgd2hlbiBkdWUpXG4gICAgICAgICAgcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUxvZ1dlaWdodCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJldWRhaW1vbmlhXCI6XG4gICAgICAgICAgcmVuZGVyRXVkYWltb25pYUJhcihyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KTtcbiAgICAgICAgICBzdGFnZ2VySWR4ICs9IDM7IC8vIGV1ZGFpbW9uaWEgY2FyZCArIHN0YXQgY2FyZHMgKyBjYXRlZ29yaWVzIGNhcmRcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZGF5bWFwXCI6XG4gICAgICAgICAgcmVuZGVyRGF5VGltZWxpbmUocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrLCB7XG4gICAgICAgICAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQpID0+IHRoaXMuaGFuZGxlRW50ZXJXb3Jrc3BhY2UoYWN0aXZpdHlJZCksXG4gICAgICAgICAgICBvblNraXA6IChhY3Rpdml0eUlkKSA9PiB0aGlzLmhhbmRsZVNraXBBY3Rpdml0eShhY3Rpdml0eUlkLCBlbmdpbmUpLFxuICAgICAgICAgICAgb25DYWxlbmRhckRvbmU6IChlbnRyeSkgPT4gdGhpcy5oYW5kbGVDYWxlbmRhclRhc2tEb25lKGVudHJ5KSxcbiAgICAgICAgICAgIG9uQ2FsZW5kYXJQb3N0cG9uZTogKGVudHJ5KSA9PiB0aGlzLmhhbmRsZUNhbGVuZGFyVGFza1Bvc3Rwb25lKGVudHJ5KSxcbiAgICAgICAgICAgIG9uQ3JlYXRlRXZlbnQ6ICgpID0+ICh0aGlzLnBsdWdpbiBhcyBhbnkpLnNob3dRdWlja1Rhc2tEaWFsb2coKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZGlyZWN0aXZlXCI6XG4gICAgICAgICAgcmVuZGVyRGlyZWN0aXZlQ2FyZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyssIChhY3Rpdml0eUlkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJib3NzXCI6XG4gICAgICAgICAgcmVuZGVyQm9zc1N0YXR1c0NhcmQocm9vdCwgc2V0dGluZ3MsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcIndlZWtseVwiOlxuICAgICAgICAgIHJlbmRlcldlZWtseVJoeXRobShyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJhY3Rpdml0aWVzXCI6XG4gICAgICAgICAgcmVuZGVyQWN0aXZpdHlHcmlkKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInRlbXBsZVwiOlxuICAgICAgICAgIHJlbmRlclRlbXBsZUNoaXBzKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyssICh0YXNrSWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGVtcGxlVXBkYXRlKHRhc2tJZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInF1b3RlXCI6XG4gICAgICAgICAgcmVuZGVyUXVvdGVGb290ZXIocm9vdCwgdGhpcy5hcHAsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyssIChwYXJ0aWFsKSA9PiB7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucGx1Z2luLnNldHRpbmdzLCBwYXJ0aWFsKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBEYXRhIEdhdGhlcmluZyAtLS1cblxuICBnYXRoZXJDb21wbGV0aW9uRGF0YSgpOiBDb21wbGV0aW9uTWFwIHtcbiAgICBjb25zdCBkYXRhOiBDb21wbGV0aW9uTWFwID0ge307XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICBkYXRhW2FjdGl2aXR5LmlkXSA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGcm9tRm9sZGVyKGFjdGl2aXR5LmZvbGRlciwgYWN0aXZpdHkucHJvcGVydHkpO1xuICAgIH1cblxuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21wbGV0aW9uc0Zyb21Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZyk6IENvbXBsZXRpb25bXSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIjtcblxuICAgIHJldHVybiBmaWxlc1xuICAgICAgLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5wYXRoID09PSBmb2xkZXJQYXRoIHx8IGZpbGUucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKVxuICAgICAgLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICBjb25zdCBmcm9udG1hdHRlciA9IGNhY2hlPy5mcm9udG1hdHRlcjtcbiAgICAgICAgaWYgKCFmcm9udG1hdHRlciB8fCB0eXBlb2YgZnJvbnRtYXR0ZXJbZmllbGROYW1lXSAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGU6IGZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgY29tcGxldGVkOiBmcm9udG1hdHRlcltmaWVsZE5hbWVdID09PSB0cnVlLFxuICAgICAgICB9O1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGMpOiBjIGlzIENvbXBsZXRpb24gPT4gYyAhPT0gbnVsbCk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgR2F0aGVyaW5nIC0tLVxuXG4gIHByaXZhdGUgYXN5bmMgZ2F0aGVyQ2FsZW5kYXJUYXNrcyhjYWxlbmRhckVuZ2luZTogQ2FsZW5kYXJFbmdpbmUpOiBQcm9taXNlPENhbGVuZGFyVGFza1tdPiB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcblxuICAgIC8vIE9wdGlvbiBBOiBEYWlseSBOb3RlcyBcdTIwMTQgcmVhZCB0b2RheSdzIG5vdGUgY29udGVudFxuICAgIGlmIChzZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzICYmIHNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGZvbGRlciA9IHNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXI7XG4gICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICAgIGNvbnN0IGRhaWx5Tm90ZSA9IGZpbGVzLmZpbmQoKGYpID0+IHtcbiAgICAgICAgaWYgKCFmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSAmJiBmLnBhdGggIT09IGZvbGRlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4gZi5iYXNlbmFtZSA9PT0gdG9kYXk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhaWx5Tm90ZSkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChkYWlseU5vdGUpO1xuICAgICAgICB0YXNrcy5wdXNoKC4uLmNhbGVuZGFyRW5naW5lLmdldERhaWx5Tm90ZVRhc2tzRnJvbUNvbnRlbnQoY29udGVudCwgZGFpbHlOb3RlLnBhdGgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpb24gQjogVGFza3MgUGx1Z2luIFx1MjAxNCBzY2FuIGZvciB0YXNrcyB3aXRoIHRvZGF5J3MgZHVlIGRhdGVcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4pIHtcbiAgICAgIGNvbnN0IHRhc2tzUGx1Z2luID0gKHRoaXMuYXBwIGFzIGFueSkucGx1Z2lucz8ucGx1Z2lucz8uW1wib2JzaWRpYW4tdGFza3MtcGx1Z2luXCJdO1xuICAgICAgaWYgKHRhc2tzUGx1Z2luKSB7XG4gICAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgICBjb25zdCBmaWxlc1dpdGhUYXNrczogeyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9W10gPSBbXTtcblxuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpKSB7XG4gICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXM/LnNvbWUoKGxpKSA9PiBsaS50YXNrICE9PSB1bmRlZmluZWQpKSBjb250aW51ZTtcblxuICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgICAgIC8vIFF1aWNrIGNoZWNrOiBkb2VzIHRoZSBjb250ZW50IG1lbnRpb24gdG9kYXkncyBkYXRlIHdpdGggYSBkdWUgZW1vamk/XG4gICAgICAgICAgaWYgKGNvbnRlbnQuaW5jbHVkZXModG9kYXkpKSB7XG4gICAgICAgICAgICBmaWxlc1dpdGhUYXNrcy5wdXNoKHsgcGF0aDogZmlsZS5wYXRoLCBjb250ZW50IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRhc2tzLnB1c2goLi4uY2FsZW5kYXJFbmdpbmUuZ2V0VGFza3NQbHVnaW5UYXNrc0Zyb21GaWxlcyhmaWxlc1dpdGhUYXNrcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9wdGlvbiBDOiBRdWljayBUYXNrcyBcdTIwMTQgYWxyZWFkeSBoYW5kbGVkIGJ5IENhbGVuZGFyRW5naW5lLmdldEFsbFRhc2tzKClcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgdGFza3MucHVzaChcbiAgICAgICAgLi4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrc1xuICAgICAgICAgIC5maWx0ZXIoKHF0KSA9PiBxdC5kYXRlID09PSB0b2RheSlcbiAgICAgICAgICAubWFwKChxdCkgPT4gKHtcbiAgICAgICAgICAgIGlkOiBgcXQtJHtxdC5pZH1gLFxuICAgICAgICAgICAgdGl0bGU6IHF0LnRpdGxlLFxuICAgICAgICAgICAgc291cmNlOiBcInF1aWNrLXRhc2tcIiBhcyBjb25zdCxcbiAgICAgICAgICAgIGRhdGU6IHF0LmRhdGUsXG4gICAgICAgICAgICB0aW1lOiBxdC50aW1lLFxuICAgICAgICAgICAgZHVyYXRpb246IHF0LmR1cmF0aW9uLFxuICAgICAgICAgICAgZG9uZTogcXQuZG9uZSxcbiAgICAgICAgICB9KSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIEhhbmRsZXJzIC0tLVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlRW50ZXJXb3Jrc3BhY2UoYWN0aXZpdHlJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybjtcblxuICAgIGlmIChhY3Rpdml0eS5oYXNXb3Jrc3BhY2UpIHtcbiAgICAgIC8vIE9wZW4gbmF0aXZlIE9sZW4gV29ya3NwYWNlVmlld1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0ge1xuICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgIHNraWxsczogW10sXG4gICAgICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSxcbiAgICAgICAgc2tpbGxGb2xkZXI6IGFjdGl2aXR5LnNraWxsRm9sZGVyLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5wbHVnaW4uYWN0aXZhdGVXb3Jrc3BhY2VWaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE5vbi13b3Jrc3BhY2UgYWN0aXZpdGllczogbWFyayBkb25lIGltbWVkaWF0ZWx5XG4gICAgICBhd2FpdCB0aGlzLm1hcmtBY3Rpdml0eURvbmUoYWN0aXZpdHkpO1xuICAgICAgbmV3IE5vdGljZShgJHthY3Rpdml0eS5lbW9qaX0gJHthY3Rpdml0eS5uYW1lfSBtYXJrZWQgZG9uZSFgKTtcbiAgICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVTa2lwQWN0aXZpdHkoYWN0aXZpdHlJZDogc3RyaW5nLCBlbmdpbmU6IE9sZW5FbmdpbmUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBNYXJrIGFzIHNraXBwZWQgaW4gdGhlIGRheSBtYXAgKGVuZ2luZSBzdGF0ZSlcbiAgICBjb25zdCBkYXlNYXAgPSBlbmdpbmUuZ2V0RGF5TWFwKCk7XG4gICAgY29uc3QgZW50cnkgPSBkYXlNYXAuZmluZCgoZSkgPT4gZS5hY3Rpdml0eUlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnN0YXR1cyA9IFwic2tpcHBlZFwiO1xuICAgIH1cbiAgICBuZXcgTm90aWNlKFwiU2tpcHBlZFwiKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDYWxlbmRhclRhc2tEb25lKGVudHJ5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5EYXlNYXBFbnRyeSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgfHwgIWVudHJ5LmNhbGVuZGFyU291cmNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZShcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpXG4gICAgKTtcblxuICAgIHN3aXRjaCAoZW50cnkuY2FsZW5kYXJTb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJkYWlseS1ub3RlXCI6XG4gICAgICAgIGlmIChlbnRyeS5maWxlUGF0aCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnRvZ2dsZURhaWx5Tm90ZVRhc2soZW50cnkuZmlsZVBhdGgsIGVudHJ5LmxpbmVOdW1iZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGFza3MtcGx1Z2luXCI6XG4gICAgICAgIGlmIChlbnRyeS5maWxlUGF0aCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnRvZ2dsZVRhc2tzUGx1Z2luVGFzayhlbnRyeS5maWxlUGF0aCwgZW50cnkubGluZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJxdWljay10YXNrXCI6IHtcbiAgICAgICAgY29uc3QgcXRJZCA9IGVudHJ5LmNhbGVuZGFyVGFza0lkPy5yZXBsYWNlKFwicXQtXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBxdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MuZmluZCgocSkgPT4gcS5pZCA9PT0gcXRJZCk7XG4gICAgICAgIGlmIChxdCkge1xuICAgICAgICAgIHF0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoYFxcdTI3MTMgJHtlbnRyeS5hY3Rpdml0eU5hbWV9YCk7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2FsZW5kYXJUYXNrUG9zdHBvbmUoZW50cnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkRheU1hcEVudHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayB8fCAhZW50cnkuY2FsZW5kYXJTb3VyY2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNhbGVuZGFyRW5naW5lID0gbmV3IENhbGVuZGFyRW5naW5lKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncyxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgdGFzazogaW1wb3J0KFwiLi4vdHlwZXNcIikuQ2FsZW5kYXJUYXNrID0ge1xuICAgICAgaWQ6IGVudHJ5LmNhbGVuZGFyVGFza0lkID8/IGVudHJ5LmFjdGl2aXR5SWQsXG4gICAgICB0aXRsZTogZW50cnkuYWN0aXZpdHlOYW1lLFxuICAgICAgc291cmNlOiBlbnRyeS5jYWxlbmRhclNvdXJjZSxcbiAgICAgIGRhdGU6IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgZmlsZVBhdGg6IGVudHJ5LmZpbGVQYXRoLFxuICAgICAgbGluZU51bWJlcjogZW50cnkubGluZU51bWJlcixcbiAgICB9O1xuXG4gICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUucG9zdHBvbmVUYXNrKHRhc2spO1xuICAgIG5ldyBOb3RpY2UoYFxcdTIzRTkgJHtlbnRyeS5hY3Rpdml0eU5hbWV9IHBvc3Rwb25lZCB0byB0b21vcnJvd2ApO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1hcmtBY3Rpdml0eURvbmUoYWN0aXZpdHk6IHsgaWQ6IHN0cmluZzsgZm9sZGVyOiBzdHJpbmc7IHByb3BlcnR5OiBzdHJpbmc7IGNhdGVnb3J5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5DYXRlZ29yeTsgZGFtYWdlUGVyQ29tcGxldGlvbjogbnVtYmVyIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIExvb2sgZm9yIHRvZGF5J3MgZmlsZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IHRvZGF5RmlsZSA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgKTtcblxuICAgIGlmICh0b2RheUZpbGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcih0b2RheUZpbGUsIChmbSkgPT4ge1xuICAgICAgICBmbVthY3Rpdml0eS5wcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgYC0tLVxcbiR7YWN0aXZpdHkucHJvcGVydHl9OiB0cnVlXFxuLS0tXFxuYCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gTWF5IGFscmVhZHkgZXhpc3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBYUCArIGJvc3MgZGFtYWdlXG4gICAgY29uc3QgeHAgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uO1xuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbYWN0aXZpdHkuY2F0ZWdvcnldICs9IHhwO1xuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBNYXRoLm1heChcbiAgICAgIDAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvblxuICAgICk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUxvZ1dlaWdodCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gXCJvbGVuLXF1aWNrLXRhc2stbW9kYWxcIjtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLWJhY2tkcm9wXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXNoZWV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stdGl0bGVcIj5Mb2cgV2VpZ2h0PC9kaXY+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIldlaWdodCAoa2cpXCIgc3RlcD1cIjAuMVwiIG1pbj1cIjIwXCIgbWF4PVwiMzAwXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgICBjb25zdCBiYWNrZHJvcCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWJhY2tkcm9wXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWNhbmNlbFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBhZGRCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1hZGRcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgaW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuXG4gICAgaW5wdXQudmFsdWUgPSBTdHJpbmcodGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5jdXJyZW50V2VpZ2h0IHx8IFwiXCIpO1xuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gbW9kYWwucmVtb3ZlKCk7XG5cbiAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB3ID0gcGFyc2VGbG9hdChpbnB1dC52YWx1ZSk7XG4gICAgICBpZiAoaXNOYU4odykgfHwgdyA8PSAwKSB7XG4gICAgICAgIG5ldyBOb3RpY2UoXCJFbnRlciBhIHZhbGlkIHdlaWdodFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMud2VpZ2h0TG9nLmZpbmQoKGUpID0+IGUuZGF0ZSA9PT0gdG9kYXkpO1xuICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgIGV4aXN0aW5nLndlaWdodCA9IHc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5wdXNoKHsgZGF0ZTogdG9kYXksIHdlaWdodDogdyB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuY3VycmVudFdlaWdodCA9IHc7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmxhc3RXZWlnaHRMb2dEYXRlID0gdG9kYXk7XG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIG5ldyBOb3RpY2UoYFdlaWdodCBsb2dnZWQ6ICR7d30ga2dgKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBpbnB1dC5mb2N1cygpLCA1MCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVRlbXBsZVVwZGF0ZSh0YXNrSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrcy5maW5kKCh0KSA9PiB0LmlkID09PSB0YXNrSWQpO1xuICAgIGlmICghdGFzaykgcmV0dXJuO1xuXG4gICAgdGFzay5sYXN0Q29tcGxldGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgIG5ldyBOb3RpY2UoYCR7dGFzay5lbW9qaX0gJHt0YXNrLm5hbWV9IGNvbXBsZXRlZCFgKTtcblxuICAgIC8vIFJlLXJlbmRlclxuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvLyAtLS0gVGhlbWUgLS0tXG5cbiAgcHJpdmF0ZSBhcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXM7XG4gICAgaWYgKCFvdmVycmlkZXMpIHJldHVybjtcblxuICAgIGlmIChvdmVycmlkZXMuYmdQcmltYXJ5KSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZy1wcmltYXJ5XCIsIG92ZXJyaWRlcy5iZ1ByaW1hcnkpO1xuICAgIGlmIChvdmVycmlkZXMuY2FyZEJnKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLWJnXCIsIG92ZXJyaWRlcy5jYXJkQmcpO1xuICAgIGlmIChvdmVycmlkZXMudGV4dFByaW1hcnkpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRleHQtcHJpbWFyeVwiLCBvdmVycmlkZXMudGV4dFByaW1hcnkpO1xuICAgIGlmIChvdmVycmlkZXMudGV4dE11dGVkKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LW11dGVkXCIsIG92ZXJyaWRlcy50ZXh0TXV0ZWQpO1xuICAgIGlmIChvdmVycmlkZXMuYWNjZW50R29sZCkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYWNjZW50LWdvbGRcIiwgb3ZlcnJpZGVzLmFjY2VudEdvbGQpO1xuICAgIGlmIChvdmVycmlkZXMuZGFuZ2VyKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1kYW5nZXJcIiwgb3ZlcnJpZGVzLmRhbmdlcik7XG4gICAgaWYgKG92ZXJyaWRlcy5zdWNjZXNzKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zdWNjZXNzXCIsIG92ZXJyaWRlcy5zdWNjZXNzKTtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQm9zcyBFbmdpbmVcbi8vIFJlYWRzIGJvc3Mgc3RhdGUgYW5kIHByb3ZpZGVzIGJvc3MtcmVsYXRlZCBjYWxjdWxhdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQm9zc0RlZmluaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEJPU1NFUywgUkFOS19USUVSX0NPTE9SUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb3NzU3RhdHVzIHtcbiAgYm9zczogQm9zc0RlZmluaXRpb247XG4gIGN1cnJlbnRIUDogbnVtYmVyO1xuICBtYXhIUDogbnVtYmVyO1xuICBwZXJjZW50OiBudW1iZXI7XG4gIHRpZXI6IG51bWJlcjtcbiAgcmFuazogc3RyaW5nO1xuICB0aWVyQ29sb3I6IHN0cmluZztcbiAgaW5UYXJ0YXJ1czogYm9vbGVhbjtcbiAgaXNEYW5nZXJab25lOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQm9zc0VuZ2luZSB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcblxuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogT2xlblNldHRpbmdzKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgZ2V0Qm9zc0ZvclRpZXIodGllcjogbnVtYmVyKTogQm9zc0RlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gQk9TU0VTLmZpbmQoKGIpID0+IGIudGllciA9PT0gdGllcikgPz8gbnVsbDtcbiAgfVxuXG4gIGdldEN1cnJlbnRCb3NzKCk6IEJvc3NEZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9zc0ZvclRpZXIodGhpcy5zZXR0aW5ncy5jdXJyZW50VGllcik7XG4gIH1cblxuICBnZXRCb3NzU3RhdHVzKCk6IEJvc3NTdGF0dXMge1xuICAgIGNvbnN0IHRpZXIgPSB0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyO1xuICAgIGNvbnN0IGJvc3MgPSB0aGlzLmdldEN1cnJlbnRCb3NzKCkgPz8gQk9TU0VTWzBdO1xuICAgIGNvbnN0IGN1cnJlbnRIUCA9IHRoaXMuc2V0dGluZ3MuYm9zc0N1cnJlbnRIUDtcbiAgICBjb25zdCBtYXhIUCA9IHRoaXMuc2V0dGluZ3MuYm9zc01heEhQO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBtYXhIUCA+IDAgPyBNYXRoLnJvdW5kKChjdXJyZW50SFAgLyBtYXhIUCkgKiAxMDApIDogMDtcbiAgICBjb25zdCB0aWVyQ29sb3IgPSBSQU5LX1RJRVJfQ09MT1JTW3RpZXJdID8/IFwiIzZCNzI4MFwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvc3MsXG4gICAgICBjdXJyZW50SFAsXG4gICAgICBtYXhIUCxcbiAgICAgIHBlcmNlbnQsXG4gICAgICB0aWVyLFxuICAgICAgcmFuazogYm9zcy5yYW5rLFxuICAgICAgdGllckNvbG9yLFxuICAgICAgaW5UYXJ0YXJ1czogdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzLFxuICAgICAgaXNEYW5nZXJab25lOiB0aGlzLmlzRGFuZ2VyWm9uZSgpLFxuICAgIH07XG4gIH1cblxuICBpc0RhbmdlclpvbmUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBib3NzQ3VycmVudEhQLCBib3NzTWF4SFAgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgaWYgKGJvc3NNYXhIUCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIChib3NzQ3VycmVudEhQIC8gYm9zc01heEhQKSA8IDAuMTU7XG4gIH1cblxuICBpc0luVGFydGFydXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cztcbiAgfVxuXG4gIGdldEhQQ29sb3IocGVyY2VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAocGVyY2VudCA+IDYwKSByZXR1cm4gXCIjMjJjNTVlXCI7XG4gICAgaWYgKHBlcmNlbnQgPiAzMCkgcmV0dXJuIFwiI2VhYjMwOFwiO1xuICAgIGlmIChwZXJjZW50ID4gMTUpIHJldHVybiBcIiNmOTczMTZcIjtcbiAgICByZXR1cm4gXCIjZWY0NDQ0XCI7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IENvcmUgRW5naW5lXG4vLyBQcmlvcml0eSBsb2dpYywgc3VnZ2VzdGlvbiBhbGdvcml0aG0sIGRheSBtYXAsIGFuYWx5dGljc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgT2xlblNldHRpbmdzLFxuICBBY3Rpdml0eUNvbmZpZyxcbiAgQ29tcGxldGlvbixcbiAgQ29tcGxldGlvbk1hcCxcbiAgRGlyZWN0aXZlU3VnZ2VzdGlvbixcbiAgRGF5TWFwRW50cnksXG4gIENhdGVnb3J5TGV2ZWwsXG4gIENhdGVnb3J5LFxuICBQcmlvcml0eVJlYXNvbixcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBORUdMRUNUX0xPUkUsXG4gIENIQVBURVJfTkFNRVMsXG4gIFNJTkdMRV9ET01JTkFOVF9USVRMRVMsXG4gIFRXT19DQVRFR09SWV9USVRMRVMsXG4gIEJBTEFOQ0VEX1RJVExFUyxcbiAgdG9Sb21hbixcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuL0Jvc3NFbmdpbmVcIjtcblxuZXhwb3J0IGNsYXNzIE9sZW5FbmdpbmUge1xuICBwcml2YXRlIHNldHRpbmdzOiBPbGVuU2V0dGluZ3M7XG4gIHByaXZhdGUgY29tcGxldGlvbnM6IENvbXBsZXRpb25NYXA7XG4gIHByaXZhdGUgbm93OiBEYXRlO1xuICBwcml2YXRlIHRvZGF5OiBzdHJpbmc7XG4gIHByaXZhdGUgYm9zc0VuZ2luZTogQm9zc0VuZ2luZTtcblxuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogT2xlblNldHRpbmdzLCBjb21wbGV0aW9uczogQ29tcGxldGlvbk1hcCwgbm93OiBEYXRlKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuY29tcGxldGlvbnMgPSBjb21wbGV0aW9ucztcbiAgICB0aGlzLm5vdyA9IG5vdztcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRoaXMudG9kYXkgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIHRoaXMuYm9zc0VuZ2luZSA9IG5ldyBCb3NzRW5naW5lKHNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBFZmZlY3RpdmUgRGF0ZSAoc3VwcG9ydHMgc2ltdWxhdGVkIGRhdGUgKyBwYXVzZSkgLS0tXG5cbiAgcHJpdmF0ZSBnZXRFZmZlY3RpdmVOb3coKTogRGF0ZSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkge1xuICAgICAgY29uc3Qgc2ltID0gbmV3IERhdGUodGhpcy5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKTtcbiAgICAgIHNpbS5zZXRIb3VycygxMiwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gc2ltO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIiAmJiB0aGlzLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSk7XG4gIH1cblxuICBwcml2YXRlIGdldEVmZmVjdGl2ZVRvZGF5KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZCA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgfVxuXG4gIC8vIC0tLSBEYXRhIEFjY2VzcyAtLS1cblxuICBnZXRFbmFibGVkQWN0aXZpdGllcygpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKTtcbiAgfVxuXG4gIGdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZDogc3RyaW5nKTogQ29tcGxldGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9uc1thY3Rpdml0eUlkXSA/PyBbXTtcbiAgfVxuXG4gIGdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5SWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB0b2RheU1zID0gbmV3IERhdGUoZWZmZWN0aXZlTm93KS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZERhdGVzID0gY29tcHNcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKVxuICAgICAgLm1hcCgoYykgPT4gbmV3IERhdGUoYy5kYXRlKS5nZXRUaW1lKCkpXG4gICAgICAuZmlsdGVyKCh0KSA9PiAhaXNOYU4odCkgJiYgdCA8PSB0b2RheU1zKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcblxuICAgIGlmIChjb21wbGV0ZWREYXRlcy5sZW5ndGggPT09IDApIHJldHVybiA5OTk7XG5cbiAgICBjb25zdCBtc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKHRvZGF5TXMgLSBjb21wbGV0ZWREYXRlc1swXSkgLyBtc1BlckRheSk7XG4gIH1cblxuICBpc0RvbmVUb2RheShhY3Rpdml0eUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBlZmZlY3RpdmVUb2RheSA9IHRoaXMuZ2V0RWZmZWN0aXZlVG9kYXkoKTtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICByZXR1cm4gY29tcHMuc29tZSgoYykgPT4gYy5kYXRlID09PSBlZmZlY3RpdmVUb2RheSAmJiBjLmNvbXBsZXRlZCk7XG4gIH1cblxuICAvLyAtLS0gV2Vla2x5IFByb2dyZXNzIC0tLVxuXG4gIGdldFdlZWtseVByb2dyZXNzKGFjdGl2aXR5SWQ6IHN0cmluZyk6IHsgZG9uZTogbnVtYmVyOyB0YXJnZXQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm4geyBkb25lOiAwLCB0YXJnZXQ6IDAgfTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3Qgd2Vla1N0YXJ0ID0gdGhpcy5nZXRXZWVrU3RhcnQoZWZmZWN0aXZlTm93KTtcbiAgICBjb25zdCB3ZWVrRW5kID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcbiAgICB3ZWVrRW5kLnNldERhdGUod2Vla0VuZC5nZXREYXRlKCkgKyA3KTtcblxuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGRvbmUgPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgIH0pLmxlbmd0aDtcblxuICAgIHJldHVybiB7IGRvbmUsIHRhcmdldDogYWN0aXZpdHkud2Vla2x5VGFyZ2V0IH07XG4gIH1cblxuICBwcml2YXRlIGdldFdlZWtTdGFydChkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgY29uc3QgZGF5ID0gZC5nZXREYXkoKTtcbiAgICBjb25zdCBkaWZmID0gZC5nZXREYXRlKCkgLSBkYXkgKyAoZGF5ID09PSAwID8gLTYgOiAxKTsgLy8gTW9uZGF5IHN0YXJ0XG4gICAgZC5zZXREYXRlKGRpZmYpO1xuICAgIHJldHVybiBkO1xuICB9XG5cbiAgLy8gLS0tIFN0cmVha3MgLS0tXG5cbiAgZ2V0QWN0aXZpdHlTdHJlYWsoYWN0aXZpdHlJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZWZmZWN0aXZlTm93KTtcbiAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZERhdGVzID0gY29tcHNcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKVxuICAgICAgLm1hcCgoYykgPT4ge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoZCkgPT4gIWlzTmFOKGQuZ2V0VGltZSgpKSAmJiBkIDw9IHRvZGF5KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCkpO1xuXG4gICAgaWYgKGNvbXBsZXRlZERhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG5cbiAgICBsZXQgc3RyZWFrID0gMDtcbiAgICBjb25zdCBjaGVja0RhdGUgPSBuZXcgRGF0ZShjb21wbGV0ZWREYXRlc1swXSk7XG4gICAgZm9yIChjb25zdCBkYXRlIG9mIGNvbXBsZXRlZERhdGVzKSB7XG4gICAgICBpZiAoZGF0ZS5nZXRUaW1lKCkgPT09IGNoZWNrRGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgc3RyZWFrKys7XG4gICAgICAgIGNoZWNrRGF0ZS5zZXREYXRlKGNoZWNrRGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IGNoZWNrRGF0ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmVhaztcbiAgfVxuXG4gIGdldE92ZXJhbGxTdHJlYWsoKTogbnVtYmVyIHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuICAgIGNvbnN0IHN0cmVha3MgPSBhY3Rpdml0aWVzLm1hcCgoYSkgPT4gdGhpcy5nZXRBY3Rpdml0eVN0cmVhayhhLmlkKSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIC4uLnN0cmVha3MpO1xuICB9XG5cbiAgLy8gLS0tIEFuYWx5dGljcyAtLS1cblxuICBnZXRUb3RhbENvbXBsZXRpb25zKCk6IG51bWJlciB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgdG90YWwgKz0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBnZXREYXlzT2ZQcmVzZW5jZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IGRheXNTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgZm9yIChjb25zdCBjIG9mIGNvbXBzKSB7XG4gICAgICAgIGlmIChjLmNvbXBsZXRlZCkgZGF5c1NldC5hZGQoYy5kYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRheXNTZXQuc2l6ZTtcbiAgfVxuXG4gIC8vIC0tLSBDYXRlZ29yeSBYUCAmIExldmVscyAtLS1cblxuICBnZXRDYXRlZ29yeVhQKGNhdGVnb3J5OiBDYXRlZ29yeSk6IG51bWJlciB7XG4gICAgY29uc3QgeHBQZXIgPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb247XG4gICAgbGV0IHhwID0gdGhpcy5zZXR0aW5ncy5jYXRlZ29yeVhQW2NhdGVnb3J5XSA/PyAwO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGlmIChhY3Rpdml0eS5jYXRlZ29yeSAhPT0gY2F0ZWdvcnkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgeHAgPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGggKiB4cFBlcjtcbiAgICB9XG4gICAgcmV0dXJuIHhwO1xuICB9XG5cbiAgZ2V0Q2F0ZWdvcnlMZXZlbChjYXRlZ29yeTogQ2F0ZWdvcnkpOiBDYXRlZ29yeUxldmVsIHtcbiAgICBjb25zdCB4cCA9IHRoaXMuZ2V0Q2F0ZWdvcnlYUChjYXRlZ29yeSk7XG4gICAgY29uc3QgbGV2ZWwgPSBNYXRoLmZsb29yKHhwIC8gMTAwKTtcbiAgICBjb25zdCBwcm9ncmVzc1RvTmV4dCA9IHhwICUgMTAwO1xuICAgIHJldHVybiB7IGNhdGVnb3J5LCB4cCwgbGV2ZWwsIHByb2dyZXNzVG9OZXh0IH07XG4gIH1cblxuICBnZXRBbGxDYXRlZ29yeUxldmVscygpOiBDYXRlZ29yeUxldmVsW10ge1xuICAgIHJldHVybiAoW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSkubWFwKChjKSA9PiB0aGlzLmdldENhdGVnb3J5TGV2ZWwoYykpO1xuICB9XG5cbiAgZ2V0RXVkYWltb25pYUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKS5yZWR1Y2UoKHN1bSwgY2wpID0+IHN1bSArIGNsLmxldmVsLCAwKTtcbiAgfVxuXG4gIGdldENoYXB0ZXIoKTogeyBudW1iZXI6IG51bWJlcjsgbmFtZTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgICBjb25zdCBjaGFwdGVyTnVtID0gTWF0aC5taW4oMTAsIE1hdGguZmxvb3IoaW5kZXggLyAxMCkgKyAxKTtcbiAgICBjb25zdCBuYW1lID0gQ0hBUFRFUl9OQU1FU1tjaGFwdGVyTnVtXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgcmV0dXJuIHsgbnVtYmVyOiBjaGFwdGVyTnVtLCBuYW1lIH07XG4gIH1cblxuICBnZXRFdWRhaW1vbmlhUHJvZ3Jlc3MoKTogbnVtYmVyIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gICAgcmV0dXJuIChpbmRleCAlIDEwKSAqIDEwOyAvLyAwLTEwMCBwcm9ncmVzcyB3aXRoaW4gY2hhcHRlclxuICB9XG5cbiAgLy8gLS0tIER5bmFtaWMgVGl0bGUgLS0tXG5cbiAgZ2V0RHluYW1pY1RpdGxlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudGl0bGVPdmVycmlkZSkgcmV0dXJuIHRoaXMuc2V0dGluZ3MudGl0bGVPdmVycmlkZTtcblxuICAgIGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKTtcbiAgICBjb25zdCB0b3RhbENvbXBsZXRpb25zID0gdGhpcy5nZXRUb3RhbENvbXBsZXRpb25zKCk7XG5cbiAgICBjb25zdCBjYXRlZ29yeUNvbXBsZXRpb25zOiBSZWNvcmQ8Q2F0ZWdvcnksIG51bWJlcj4gPSB7IGJvZHk6IDAsIG1pbmQ6IDAsIHNwaXJpdDogMCB9O1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICBjYXRlZ29yeUNvbXBsZXRpb25zW2FjdGl2aXR5LmNhdGVnb3J5XSArPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWwgPSBPYmplY3QudmFsdWVzKGNhdGVnb3J5Q29tcGxldGlvbnMpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgIGlmICh0b3RhbCA9PT0gMCkgcmV0dXJuIFwiSW5pdGlhdGVcIjtcblxuICAgIGNvbnN0IHdlaWdodHM6IFJlY29yZDxDYXRlZ29yeSwgbnVtYmVyPiA9IHtcbiAgICAgIGJvZHk6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMuYm9keSAvIHRvdGFsIDogMCxcbiAgICAgIG1pbmQ6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMubWluZCAvIHRvdGFsIDogMCxcbiAgICAgIHNwaXJpdDogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5zcGlyaXQgLyB0b3RhbCA6IDAsXG4gICAgfTtcblxuICAgIGNvbnN0IHRpZXIgPSB0b3RhbENvbXBsZXRpb25zIDwgNTAgPyBcImxpZ2h0XCIgOiB0b3RhbENvbXBsZXRpb25zIDwgMjAwID8gXCJtaWRcIiA6IFwiaGVhdnlcIjtcblxuICAgIC8vIENoZWNrIHNpbmdsZSBkb21pbmFudCAoPj0gNzAlKVxuICAgIGZvciAoY29uc3QgY2F0IG9mIFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pIHtcbiAgICAgIGlmICh3ZWlnaHRzW2NhdF0gPj0gMC43MCkge1xuICAgICAgICByZXR1cm4gU0lOR0xFX0RPTUlOQU5UX1RJVExFU1tjYXRdPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGJhbGFuY2VkIChhbGwgPj0gMjUlKVxuICAgIGlmICh3ZWlnaHRzLmJvZHkgPj0gMC4yNSAmJiB3ZWlnaHRzLm1pbmQgPj0gMC4yNSAmJiB3ZWlnaHRzLnNwaXJpdCA+PSAwLjI1KSB7XG4gICAgICByZXR1cm4gQkFMQU5DRURfVElUTEVTW3RpZXJdID8/IFwiSW5pdGlhdGUgb2YgQmFsYW5jZVwiO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHR3by1jYXRlZ29yeSBjb21iaW5hdGlvbnMgKGVhY2ggPj0gMzAlKVxuICAgIGNvbnN0IGNhdHMgPSAoW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSlcbiAgICAgIC5maWx0ZXIoKGMpID0+IHdlaWdodHNbY10gPj0gMC4zMClcbiAgICAgIC5zb3J0KCk7XG5cbiAgICBpZiAoY2F0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IGtleSA9IGNhdHMuam9pbihcIitcIik7XG4gICAgICByZXR1cm4gVFdPX0NBVEVHT1JZX1RJVExFU1trZXldPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrOiB1c2UgZG9taW5hbnQgY2F0ZWdvcnlcbiAgICBjb25zdCBkb21pbmFudCA9IChPYmplY3QuZW50cmllcyh3ZWlnaHRzKSBhcyBbQ2F0ZWdvcnksIG51bWJlcl1bXSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlbMF1bMF07XG4gICAgcmV0dXJuIFNJTkdMRV9ET01JTkFOVF9USVRMRVNbZG9taW5hbnRdPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICB9XG5cbiAgLy8gLS0tIFN1Z2dlc3Rpb24gQWxnb3JpdGhtIChXYXRlcmZhbGwpIC0tLVxuXG4gIGdldFN1Z2dlc3Rpb24oKTogRGlyZWN0aXZlU3VnZ2VzdGlvbiB8IG51bGwge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG4gICAgaWYgKGFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIDEuIERFQVRIIENIRUNLXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cykge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGFjdGl2aXRpZXNbMF0sIFwiZGVhdGhcIiwgXCJFc2NhcGUgVGFydGFydXMgXHUyMDE0IGNvbXBsZXRlIHlvdXIgcGVuYW5jZS5cIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZmFpbGVkVGhyZXNob2xkRGF5cyA+PSAyKSB7XG4gICAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcyk7XG4gICAgICBpZiAobmVnbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKG5lZ2xlY3RlZFswXSwgXCJkZWF0aFwiLCBcIkRlYXRoIGxvb21zLiBBY3Qgbm93IG9yIGRlc2NlbmQgdG8gVGFydGFydXMuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEJPU1MgRklOSVNIXG4gICAgaWYgKHRoaXMuYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgICAgY29uc3QgYmVzdCA9IHRoaXMuZ2V0SGlnaGVzdERhbWFnZUFjdGl2aXR5KGFjdGl2aXRpZXMpO1xuICAgICAgaWYgKGJlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGJlc3QsIFwiYm9zc1wiLCBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuIEZpbmlzaCB0aGUgYmVhc3QuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIE5FR0xFQ1QgKyBQUklPUklUWVxuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICBpZiAobmVnbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMuYXBwbHlSdWxlcyhuZWdsZWN0ZWQpO1xuICAgICAgaWYgKHRvcCkge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZSh0b3AuaWQpO1xuICAgICAgICBjb25zdCBsb3JlID0gTkVHTEVDVF9MT1JFW3RvcC5pZF0gPz8gYCR7ZGF5c30gZGF5cyBzaW5jZSB5b3UgbGFzdCBwcmFjdGljZWQuIFRoZSBza2lsbCBhdHJvcGhpZXMuYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRvcCwgXCJuZWdsZWN0XCIsIGxvcmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIFdFRUtMWSBDQVRDSC1VUFxuICAgIGNvbnN0IGJlaGluZFNjaGVkdWxlID0gdGhpcy5nZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKGJlaGluZFNjaGVkdWxlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvcCA9IGJlaGluZFNjaGVkdWxlWzBdO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKHRvcC5pZCk7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odG9wLCBcIndlZWtseVwiLCBgQmVoaW5kIHNjaGVkdWxlOiAke3Byb2dyZXNzLmRvbmV9LyR7cHJvZ3Jlc3MudGFyZ2V0fSB0aGlzIHdlZWsuYCk7XG4gICAgfVxuXG4gICAgLy8gNS4gQ0hBSU4gQ0hFQ0tcbiAgICBjb25zdCBjaGFpbmVkID0gdGhpcy5nZXRDaGFpbmVkQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAoY2hhaW5lZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oY2hhaW5lZFswXSwgXCJjaGFpblwiLCBcIllvdXIgcHJlcmVxdWlzaXRlIGlzIGRvbmUuIFRpbWUgZm9yIHRoZSBuZXh0IHN0ZXAuXCIpO1xuICAgIH1cblxuICAgIC8vIDYuIFRJTUUtQkFTRURcbiAgICBjb25zdCB0aW1lQmFzZWQgPSB0aGlzLmdldFRpbWVCYXNlZEFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKHRpbWVCYXNlZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odGltZUJhc2VkWzBdLCBcInRpbWVcIiwgXCJUaGUgdGltZSBpcyByaWdodC4gQmVnaW4uXCIpO1xuICAgIH1cblxuICAgIC8vIDcuIEJBTEFOQ0VEIEZBTExCQUNLXG4gICAgY29uc3QgbG9uZ2VzdEdhcCA9IGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYi5pZCkgLSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGEuaWQpKTtcblxuICAgIGlmIChsb25nZXN0R2FwLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihsb25nZXN0R2FwWzBdLCBcImJhbGFuY2VkXCIsIFwiQmFsYW5jZSB5b3VyIHBhdGguIFRoaXMgaGFzIHdhaXRlZCBsb25nZXN0LlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdWdnZXN0aW9uKFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICByZWFzb246IFByaW9yaXR5UmVhc29uLFxuICAgIGxvcmVUZXh0OiBzdHJpbmdcbiAgKTogRGlyZWN0aXZlU3VnZ2VzdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgcmVhc29uLFxuICAgICAgZGF5c1NpbmNlTGFzdERvbmU6IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpLFxuICAgICAgbG9yZVRleHQsXG4gICAgICBwcmlvcml0eTogYWN0aXZpdHkucHJpb3JpdHksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgcmV0dXJuIGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYS5pZCk7XG4gICAgICAgIHJldHVybiBkYXlzID49IGEubmVnbGVjdFRocmVzaG9sZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVJ1bGVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZyB8IG51bGwge1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgICAgLy8gQ2hlY2sgYWx0ZXJuYXRpbmcgcnVsZVxuICAgICAgaWYgKGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoKSB7XG4gICAgICAgIGNvbnN0IGFsdERheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoKTtcbiAgICAgICAgY29uc3QgdGhpc0RheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKTtcbiAgICAgICAgLy8gSWYgdGhpcyB3YXMgZG9uZSBtb3JlIHJlY2VudGx5IHRoYW4gYWx0ZXJuYXRlLCBwcmVmZXIgYWx0ZXJuYXRlXG4gICAgICAgIGlmICh0aGlzRGF5cyA8IGFsdERheXMpIHtcbiAgICAgICAgICBjb25zdCBhbHQgPSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICAgIGlmIChhbHQgJiYgYWx0LmVuYWJsZWQgJiYgIXRoaXMuaXNEb25lVG9kYXkoYWx0LmlkKSkgcmV0dXJuIGFsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBibG9ja2luZyBydWxlc1xuICAgICAgaWYgKGFjdGl2aXR5LmJsb2NrcyAmJiBhY3Rpdml0eS5ibG9ja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUaGlzIGFjdGl2aXR5IGJsb2NrcyBvdGhlcnMgd2hlbiBuZWdsZWN0ZWQgXHUyMDE0IGl0IHNob3VsZCBiZSBwcmlvcml0aXplZFxuICAgICAgICByZXR1cm4gYWN0aXZpdHk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY3Rpdml0eTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2aXRpZXNbMF0gPz8gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGlnaGVzdERhbWFnZUFjdGl2aXR5KGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZyB8IG51bGwge1xuICAgIGNvbnN0IG5vdERvbmUgPSBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkpO1xuICAgIGlmIChub3REb25lLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG5vdERvbmUuc29ydCgoYSwgYikgPT4gYi5kYW1hZ2VQZXJDb21wbGV0aW9uIC0gYS5kYW1hZ2VQZXJDb21wbGV0aW9uKVswXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QmVoaW5kU2NoZWR1bGVBY3Rpdml0aWVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGVmZmVjdGl2ZU5vdy5nZXREYXkoKTsgLy8gMD1TdW5cbiAgICBjb25zdCBhZGp1c3RlZERheSA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7IC8vIE1vbj0xXG4gICAgY29uc3QgcmVtYWluaW5nRGF5cyA9IDcgLSBhZGp1c3RlZERheSArIDE7XG5cbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3MoYS5pZCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHByb2dyZXNzLnRhcmdldCAtIHByb2dyZXNzLmRvbmU7XG4gICAgICAgIHJldHVybiByZW1haW5pbmcgPiAwICYmIHJlbWFpbmluZyA+PSByZW1haW5pbmdEYXlzO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGdldENoYWluZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IHtcbiAgICAgIGlmICghYS5jaGFpbkFmdGVyIHx8IHRoaXMuaXNEb25lVG9kYXkoYS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLmlzRG9uZVRvZGF5KGEuY2hhaW5BZnRlcik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpbWVCYXNlZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGhvdXIgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpLmdldEhvdXJzKCk7XG4gICAgY29uc3QgeyBtb3JuaW5nU3RhcnQsIG1vcm5pbmdFbmQsIGFmdGVybm9vbkVuZCwgZXZlbmluZ0VuZCB9ID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWc7XG5cbiAgICBjb25zdCBjdXJyZW50UGVyaW9kID0gaG91ciA8IG1vcm5pbmdFbmQgPyBcIm1vcm5pbmdcIiA6XG4gICAgICBob3VyIDwgYWZ0ZXJub29uRW5kID8gXCJhZnRlcm5vb25cIiA6XG4gICAgICBob3VyIDwgZXZlbmluZ0VuZCA/IFwiZXZlbmluZ1wiIDogXCJhbnl0aW1lXCI7XG5cbiAgICAvLyBGaXJzdCBjaGVjayB0aW1lIG92ZXJyaWRlc1xuICAgIGNvbnN0IG92ZXJyaWRkZW4gPSBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNEb25lVG9kYXkoYS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghYS50aW1lT3ZlcnJpZGUpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBob3VyID49IGEudGltZU92ZXJyaWRlLnN0YXJ0SG91ciAmJiBob3VyIDwgYS50aW1lT3ZlcnJpZGUuZW5kSG91cjtcbiAgICB9KTtcbiAgICBpZiAob3ZlcnJpZGRlbi5sZW5ndGggPiAwKSByZXR1cm4gb3ZlcnJpZGRlbi5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG5cbiAgICAvLyBUaGVuIGNoZWNrIHByZWZlcnJlZCB0aW1lXG4gICAgcmV0dXJuIGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpICYmIChhLnByZWZlcnJlZFRpbWUgPT09IGN1cnJlbnRQZXJpb2QgfHwgYS5wcmVmZXJyZWRUaW1lID09PSBcImFueXRpbWVcIikpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICB9XG5cbiAgLy8gLS0tIERheSBNYXAgR2VuZXJhdGlvbiAtLS1cblxuICBwcml2YXRlIGNhbGVuZGFyRW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuXG4gIHNldENhbGVuZGFyRW50cmllcyhlbnRyaWVzOiBEYXlNYXBFbnRyeVtdKTogdm9pZCB7XG4gICAgdGhpcy5jYWxlbmRhckVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0RGF5TWFwKCk6IERheU1hcEVudHJ5W10ge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgY29uc3QgeyBtb3JuaW5nU3RhcnQsIG1vcm5pbmdFbmQsIGFmdGVybm9vbkVuZCwgZXZlbmluZ0VuZCwgYnVmZmVyTWludXRlcyB9ID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWc7XG5cbiAgICBjb25zdCB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdID0gW1xuICAgICAgeyBwZXJpb2Q6IFwibW9ybmluZ1wiLCBzdGFydEhvdXI6IG1vcm5pbmdTdGFydCwgZW5kSG91cjogbW9ybmluZ0VuZCB9LFxuICAgICAgeyBwZXJpb2Q6IFwiYWZ0ZXJub29uXCIsIHN0YXJ0SG91cjogbW9ybmluZ0VuZCwgZW5kSG91cjogYWZ0ZXJub29uRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJldmVuaW5nXCIsIHN0YXJ0SG91cjogYWZ0ZXJub29uRW5kLCBlbmRIb3VyOiBldmVuaW5nRW5kIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IGVudHJpZXM6IERheU1hcEVudHJ5W10gPSBbXTtcbiAgICBjb25zdCBzY2hlZHVsZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIC8vIDEuIFBsYWNlIHRpbWUtb3ZlcnJpZGUgYWN0aXZpdGllcyBmaXJzdFxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgICAgaWYgKCFhY3Rpdml0eS50aW1lT3ZlcnJpZGUpIGNvbnRpbnVlO1xuICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgIHN0YXJ0SG91cjogYWN0aXZpdHkudGltZU92ZXJyaWRlLnN0YXJ0SG91cixcbiAgICAgICAgZW5kSG91cjogYWN0aXZpdHkudGltZU92ZXJyaWRlLmVuZEhvdXIsXG4gICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHlSZWFzb246IFwidGltZVwiLFxuICAgICAgfSk7XG4gICAgICBzY2hlZHVsZWQuYWRkKGFjdGl2aXR5LmlkKTtcbiAgICB9XG5cbiAgICAvLyAyLiBQbGFjZSBuZWdsZWN0ZWQgYWN0aXZpdGllcyBpbiB0aGVpciBwcmVmZXJyZWQgc2xvdHNcbiAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcylcbiAgICAgIC5maWx0ZXIoKGEpID0+ICFzY2hlZHVsZWQuaGFzKGEuaWQpKTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgbmVnbGVjdGVkKSB7XG4gICAgICBjb25zdCBzbG90ID0gdGhpcy5maW5kU2xvdEZvckFjdGl2aXR5KGFjdGl2aXR5LCB0aW1lU2xvdHMsIGVudHJpZXMsIGJ1ZmZlck1pbnV0ZXMpO1xuICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgICBzdGFydEhvdXI6IHNsb3Quc3RhcnRIb3VyLFxuICAgICAgICAgIGVuZEhvdXI6IHNsb3QuZW5kSG91cixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24sXG4gICAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJuZWdsZWN0XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBzY2hlZHVsZWQuYWRkKGFjdGl2aXR5LmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBQbGFjZSByZW1haW5pbmcgd2Vla2x5LXRhcmdldCBhY3Rpdml0aWVzXG4gICAgY29uc3QgcmVtYWluaW5nID0gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyhhLmlkKTtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzLmRvbmUgPCBwcm9ncmVzcy50YXJnZXQ7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgcmVtYWluaW5nKSB7XG4gICAgICBjb25zdCBzbG90ID0gdGhpcy5maW5kU2xvdEZvckFjdGl2aXR5KGFjdGl2aXR5LCB0aW1lU2xvdHMsIGVudHJpZXMsIGJ1ZmZlck1pbnV0ZXMpO1xuICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgICBzdGFydEhvdXI6IHNsb3Quc3RhcnRIb3VyLFxuICAgICAgICAgIGVuZEhvdXI6IHNsb3QuZW5kSG91cixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24sXG4gICAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ3ZWVrbHlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGNhbGVuZGFyIHRhc2sgZW50cmllc1xuICAgIGZvciAoY29uc3QgY2FsRW50cnkgb2YgdGhpcy5jYWxlbmRhckVudHJpZXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChjYWxFbnRyeSk7XG4gICAgfVxuXG4gICAgLy8gU29ydCBieSBzdGFydCB0aW1lXG4gICAgZW50cmllcy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKTtcblxuICAgIC8vIE1hcmsgZG9uZSBhY3Rpdml0aWVzIChvbmx5IGZvciBub24tY2FsZW5kYXIgZW50cmllcylcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgJiYgdGhpcy5pc0RvbmVUb2RheShlbnRyeS5hY3Rpdml0eUlkKSkge1xuICAgICAgICBlbnRyeS5zdGF0dXMgPSBcImRvbmVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHByaXZhdGUgZmluZFNsb3RGb3JBY3Rpdml0eShcbiAgICBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsXG4gICAgdGltZVNsb3RzOiB7IHBlcmlvZDogc3RyaW5nOyBzdGFydEhvdXI6IG51bWJlcjsgZW5kSG91cjogbnVtYmVyIH1bXSxcbiAgICBleGlzdGluZzogRGF5TWFwRW50cnlbXSxcbiAgICBidWZmZXJNaW51dGVzOiBudW1iZXJcbiAgKTogeyBzdGFydEhvdXI6IG51bWJlcjsgZW5kSG91cjogbnVtYmVyIH0gfCBudWxsIHtcbiAgICBjb25zdCBkdXJhdGlvbkhvdXJzID0gYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24gLyA2MDtcbiAgICBjb25zdCBidWZmZXJIb3VycyA9IGJ1ZmZlck1pbnV0ZXMgLyA2MDtcblxuICAgIC8vIEZpbmQgcHJlZmVycmVkIHNsb3RcbiAgICBjb25zdCBwcmVmZXJyZWRTbG90ID0gdGltZVNsb3RzLmZpbmQoKHMpID0+IHMucGVyaW9kID09PSBhY3Rpdml0eS5wcmVmZXJyZWRUaW1lKVxuICAgICAgPz8gdGltZVNsb3RzLmZpbmQoKHMpID0+IHMucGVyaW9kID09PSBcImFueXRpbWVcIilcbiAgICAgID8/IHRpbWVTbG90c1swXTtcblxuICAgIC8vIEZpbmQgZmlyc3QgYXZhaWxhYmxlIHRpbWUgaW4gcHJlZmVycmVkIHNsb3RcbiAgICBsZXQgY2FuZGlkYXRlU3RhcnQgPSBwcmVmZXJyZWRTbG90LnN0YXJ0SG91cjtcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZXhpc3Rpbmcuc29ydCgoYSwgYikgPT4gYS5zdGFydEhvdXIgLSBiLnN0YXJ0SG91cikpIHtcbiAgICAgIGlmIChlbnRyeS5zdGFydEhvdXIgPCBwcmVmZXJyZWRTbG90LmVuZEhvdXIgJiYgZW50cnkuZW5kSG91ciA+IGNhbmRpZGF0ZVN0YXJ0KSB7XG4gICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmRpZGF0ZUVuZCA9IGNhbmRpZGF0ZVN0YXJ0ICsgZHVyYXRpb25Ib3VycztcbiAgICBpZiAoY2FuZGlkYXRlRW5kIDw9IHByZWZlcnJlZFNsb3QuZW5kSG91cikge1xuICAgICAgcmV0dXJuIHsgc3RhcnRIb3VyOiBjYW5kaWRhdGVTdGFydCwgZW5kSG91cjogY2FuZGlkYXRlRW5kIH07XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFueSBzbG90XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHRpbWVTbG90cykge1xuICAgICAgaWYgKHNsb3QgPT09IHByZWZlcnJlZFNsb3QpIGNvbnRpbnVlO1xuICAgICAgY2FuZGlkYXRlU3RhcnQgPSBzbG90LnN0YXJ0SG91cjtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZXhpc3Rpbmcuc29ydCgoYSwgYikgPT4gYS5zdGFydEhvdXIgLSBiLnN0YXJ0SG91cikpIHtcbiAgICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgICBjYW5kaWRhdGVTdGFydCA9IGVudHJ5LmVuZEhvdXIgKyBidWZmZXJIb3VycztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNhbmRpZGF0ZVN0YXJ0ICsgZHVyYXRpb25Ib3VycyA8PSBzbG90LmVuZEhvdXIpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRIb3VyOiBjYW5kaWRhdGVTdGFydCwgZW5kSG91cjogY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyAtLS0gV2Vla2x5IERhdGEgZm9yIEJhciBDaGFydCAtLS1cblxuICBnZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiB7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSB0aGlzLmdldFdlZWtTdGFydChlZmZlY3RpdmVOb3cpO1xuICAgIGNvbnN0IGRheXMgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTx7IGRheTogc3RyaW5nOyBkYXRlOiBzdHJpbmc7IGNvbXBsZXRpb25zOiBNYXA8Q2F0ZWdvcnksIG51bWJlcj4gfT4gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcbiAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xuICAgICAgY29uc3QgZGF0ZVN0ciA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBkYXlDb21wbGV0aW9ucyA9IG5ldyBNYXA8Q2F0ZWdvcnksIG51bWJlcj4oKTtcblxuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgICBjb25zdCBkb25lID0gY29tcHMuc29tZSgoYykgPT4gYy5kYXRlID09PSBkYXRlU3RyICYmIGMuY29tcGxldGVkKTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZGF5Q29tcGxldGlvbnMuZ2V0KGFjdGl2aXR5LmNhdGVnb3J5KSA/PyAwO1xuICAgICAgICAgIGRheUNvbXBsZXRpb25zLnNldChhY3Rpdml0eS5jYXRlZ29yeSwgY3VycmVudCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKHsgZGF5OiBkYXlzW2ldLCBkYXRlOiBkYXRlU3RyLCBjb21wbGV0aW9uczogZGF5Q29tcGxldGlvbnMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldEFjdGl2ZURheXNUaGlzV2VlaygpOiBudW1iZXIge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIHJldHVybiB3ZWVrbHkuZmlsdGVyKChkKSA9PiB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZC5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgICAgcmV0dXJuIHRvdGFsID4gMDtcbiAgICB9KS5sZW5ndGg7XG4gIH1cblxuICBnZXRCZXN0RGF5VGhpc1dlZWsoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3ZWVrbHkgPSB0aGlzLmdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTtcbiAgICBsZXQgYmVzdCA9IHdlZWtseVswXTtcbiAgICBsZXQgYmVzdFRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGQgb2Ygd2Vla2x5KSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZC5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgICAgaWYgKHRvdGFsID4gYmVzdFRvdGFsKSB7XG4gICAgICAgIGJlc3RUb3RhbCA9IHRvdGFsO1xuICAgICAgICBiZXN0ID0gZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlc3RUb3RhbCA+IDAgPyBiZXN0LmRheSA6IFwiLS1cIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ2FsZW5kYXIgRW5naW5lXG4vLyBSZWFkcyB0YXNrcyBmcm9tIERhaWx5IE5vdGVzLCBUYXNrcyBwbHVnaW4sIGFuZCBRdWljayBUYXNrc1xuLy8gTWVyZ2VzIHRoZW0gaW50byBDYWxlbmRhclRhc2tbXSBmb3IgRGF5IE1hcCBpbnRlZ3JhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUge1xuICBPbGVuU2V0dGluZ3MsXG4gIENhbGVuZGFyVGFzayxcbiAgRGF5TWFwRW50cnksXG4gIENhbGVuZGFyVGFza1NvdXJjZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckVuZ2luZSB7XG4gIHByaXZhdGUgYXBwOiBBcHA7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcbiAgcHJpdmF0ZSB0b2RheTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBzZXR0aW5nczogT2xlblNldHRpbmdzLCBub3c6IERhdGUpIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0aGlzLnRvZGF5ID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgfVxuXG4gIC8vIC0tLSBNYWluIGVudHJ5OiBnZXQgYWxsIGNhbGVuZGFyIHRhc2tzIGZvciB0b2RheSAtLS1cblxuICBnZXRBbGxUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzKSB7XG4gICAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZ2V0RGFpbHlOb3RlVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4pIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXRUYXNrc1BsdWdpblRhc2tzKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXRRdWlja1Rhc2tzKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBDb252ZXJ0IENhbGVuZGFyVGFza3MgdG8gRGF5TWFwRW50cmllcyAtLS1cblxuICB0b0RheU1hcEVudHJpZXModGFza3M6IENhbGVuZGFyVGFza1tdKTogRGF5TWFwRW50cnlbXSB7XG4gICAgcmV0dXJuIHRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRIb3VyID0gdGFzay50aW1lID8gdGhpcy5wYXJzZVRpbWVUb0hvdXIodGFzay50aW1lKSA6IDk7XG4gICAgICBjb25zdCBkdXJhdGlvbkhvdXJzID0gKHRhc2suZHVyYXRpb24gPz8gMzApIC8gNjA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2aXR5SWQ6IGBjYWwtJHt0YXNrLmlkfWAsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogdGFzay50aXRsZSxcbiAgICAgICAgZW1vamk6IHRoaXMuZ2V0U291cmNlRW1vamkodGFzay5zb3VyY2UpLFxuICAgICAgICBjYXRlZ29yeTogXCJtaW5kXCIgYXMgY29uc3QsIC8vIGNhbGVuZGFyIHRhc2tzIGRlZmF1bHQgdG8gbWluZFxuICAgICAgICBzdGFydEhvdXIsXG4gICAgICAgIGVuZEhvdXI6IHN0YXJ0SG91ciArIGR1cmF0aW9uSG91cnMsXG4gICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiB0YXNrLmR1cmF0aW9uID8/IDMwLFxuICAgICAgICBzdGF0dXM6IHRhc2suZG9uZSA/IFwiZG9uZVwiIGFzIGNvbnN0IDogXCJwZW5kaW5nXCIgYXMgY29uc3QsXG4gICAgICAgIGlzQ2FsZW5kYXJUYXNrOiB0cnVlLFxuICAgICAgICBjYWxlbmRhclNvdXJjZTogdGFzay5zb3VyY2UsXG4gICAgICAgIGNhbGVuZGFyVGFza0lkOiB0YXNrLmlkLFxuICAgICAgICBmaWxlUGF0aDogdGFzay5maWxlUGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogdGFzay5saW5lTnVtYmVyLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQTogRGFpbHkgTm90ZXMgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXREYWlseU5vdGVUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgZm9sZGVyID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgIGlmICghZm9sZGVyKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gRmluZCB0b2RheSdzIGRhaWx5IG5vdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICBpZiAoIWYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpICYmIGYucGF0aCAhPT0gZm9sZGVyKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gZi5iYXNlbmFtZSA9PT0gdGhpcy50b2RheTtcbiAgICB9KTtcblxuICAgIGlmICghZGFpbHlOb3RlKSByZXR1cm4gW107XG5cbiAgICAvLyBSZWFkIGNhY2hlZCBjb250ZW50IGFuZCBwYXJzZSB0YXNrc1xuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZGFpbHlOb3RlKTtcbiAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXMpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBsaXN0SXRlbSBvZiBjYWNoZS5saXN0SXRlbXMpIHtcbiAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlOyAvLyBub3QgYSBjaGVja2JveFxuXG4gICAgICBjb25zdCBsaW5lU3RhcnQgPSBsaXN0SXRlbS5wb3NpdGlvbi5zdGFydC5saW5lO1xuXG4gICAgICAvLyBSZWFkIHRoZSBsaW5lIGNvbnRlbnQgZnJvbSBjYWNoZSBzZWN0aW9uc1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0TGluZUNvbnRlbnQoZGFpbHlOb3RlLCBsaW5lU3RhcnQpO1xuICAgICAgaWYgKCFjb250ZW50KSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGNvbnRlbnQpO1xuICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2RhaWx5Tm90ZS5wYXRofS1MJHtsaW5lU3RhcnR9YCxcbiAgICAgICAgdGl0bGU6IHBhcnNlZC50aXRsZSxcbiAgICAgICAgc291cmNlOiBcImRhaWx5LW5vdGVcIixcbiAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgdGltZTogcGFyc2VkLnRpbWUsXG4gICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IGxpc3RJdGVtLnRhc2sgPT09IFwieFwiIHx8IGxpc3RJdGVtLnRhc2sgPT09IFwiWFwiLFxuICAgICAgICBmaWxlUGF0aDogZGFpbHlOb3RlLnBhdGgsXG4gICAgICAgIGxpbmVOdW1iZXI6IGxpbmVTdGFydCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIFBhcnNlIFwiLSBbIF0gVGFzayBuYW1lIEAxNDowMCB+MzBtXCIgZm9ybWF0XG4gIHByaXZhdGUgcGFyc2VUYXNrTGluZShsaW5lOiBzdHJpbmcpOiB7IHRpdGxlOiBzdHJpbmc7IHRpbWU/OiBzdHJpbmc7IGR1cmF0aW9uPzogbnVtYmVyIH0gfCBudWxsIHtcbiAgICAvLyBSZW1vdmUgY2hlY2tib3ggcHJlZml4OiBcIi0gWyBdIFwiIG9yIFwiLSBbeF0gXCJcbiAgICBjb25zdCBtYXRjaCA9IGxpbmUubWF0Y2goL15bLSpdXFxzKlxcWy4/XFxdXFxzKiguKykkLyk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdGV4dCA9IG1hdGNoWzFdLnRyaW0oKTtcblxuICAgIC8vIEV4dHJhY3QgQHRpbWUgKGUuZy4sIEAxNDowMCBvciBAMnBtKVxuICAgIGxldCB0aW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGltZU1hdGNoID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSk6KFxcZHsyfSlcXGIvKTtcbiAgICBpZiAodGltZU1hdGNoKSB7XG4gICAgICB0aW1lID0gYCR7dGltZU1hdGNoWzFdLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHt0aW1lTWF0Y2hbMl19YDtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UodGltZU1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSBAMnBtIC8gQDE0IGZvcm1hdFxuICAgICAgY29uc3Qgc2ltcGxlVGltZSA9IHRleHQubWF0Y2goL0AoXFxkezEsMn0pXFxzKihhbXxwbSk/XFxiL2kpO1xuICAgICAgaWYgKHNpbXBsZVRpbWUpIHtcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChzaW1wbGVUaW1lWzFdKTtcbiAgICAgICAgY29uc3QgcGVyaW9kID0gc2ltcGxlVGltZVsyXT8udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gXCJwbVwiICYmIGhvdXIgPCAxMikgaG91ciArPSAxMjtcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gXCJhbVwiICYmIGhvdXIgPT09IDEyKSBob3VyID0gMDtcbiAgICAgICAgdGltZSA9IGAke1N0cmluZyhob3VyKS5wYWRTdGFydCgyLCBcIjBcIil9OjAwYDtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShzaW1wbGVUaW1lWzBdLCBcIlwiKS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCB+ZHVyYXRpb24gKGUuZy4sIH4zMG0sIH4xaCwgfjEuNWgpXG4gICAgbGV0IGR1cmF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgZHVyYXRpb25NYXRjaCA9IHRleHQubWF0Y2goL34oXFxkKyg/OlxcLlxcZCspPylcXHMqKG18bWlufGh8aHJ8aG91cilzP1xcYi9pKTtcbiAgICBpZiAoZHVyYXRpb25NYXRjaCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KGR1cmF0aW9uTWF0Y2hbMV0pO1xuICAgICAgY29uc3QgdW5pdCA9IGR1cmF0aW9uTWF0Y2hbMl0udG9Mb3dlckNhc2UoKTtcbiAgICAgIGR1cmF0aW9uID0gdW5pdC5zdGFydHNXaXRoKFwiaFwiKSA/IE1hdGgucm91bmQodmFsdWUgKiA2MCkgOiBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoZHVyYXRpb25NYXRjaFswXSwgXCJcIikudHJpbSgpO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIGFueSB0cmFpbGluZy9sZWFkaW5nIHdoaXRlc3BhY2Ugb3IgZGFzaGVzXG4gICAgY29uc3QgdGl0bGUgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbiAgICBpZiAoIXRpdGxlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7IHRpdGxlLCB0aW1lLCBkdXJhdGlvbiB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW5lQ29udGVudChmaWxlOiBURmlsZSwgbGluZU51bWJlcjogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgLy8gVXNlIHRoZSBtZXRhZGF0YUNhY2hlIHNlY3Rpb25zIHRvIHJlY29uc3RydWN0IGxpbmUgY29udGVudFxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlYWQgZnJvbSB0aGUgdmF1bHQgY2FjaGUgXHUyMDE0IHRyeSBnZXR0aW5nIGNvbnRlbnQgdmlhIHNlY3Rpb25zXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luY2hyb25vdXNseSByZWFkIGZpbGUgY29udGVudCwgdXNlIHRoZSBjYWNoZWQgZnJvbnRtYXR0ZXJcbiAgICAvLyBhbmQgbGlzdCBpdGVtcyB0byBidWlsZCB3aGF0IHdlIG5lZWRcbiAgICAvLyBBY3R1YWxseSwgbGlzdCBpdGVtcyBpbiBPYnNpZGlhbiBjYWNoZSBkb24ndCBpbmNsdWRlIHRoZSB0ZXh0LlxuICAgIC8vIFdlJ2xsIG5lZWQgdG8gcmVhZCB0aGUgZmlsZSBjb250ZW50LiBTdG9yZSBpdCBpbiBhIG1hcCBkdXJpbmcgZ2F0aGVyIHBoYXNlLlxuICAgIC8vIEZvciBub3csIHJldHVybiBudWxsIFx1MjAxNCB0aGUgRGFzaGJvYXJkVmlldyB3aWxsIHByZS1yZWFkIGRhaWx5IG5vdGUgY29udGVudFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtcmVhZCBmaWxlIGNvbnRlbnRcbiAgZ2V0RGFpbHlOb3RlVGFza3NGcm9tQ29udGVudChjb250ZW50OiBzdHJpbmcsIGZpbGVQYXRoOiBzdHJpbmcpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgLy8gTWF0Y2ggdGFzayBsaW5lczogLSBbIF0gb3IgLSBbeF1cbiAgICAgIGlmICghL15bLSpdXFxzKlxcWy4/XFxdXFxzLy50ZXN0KGxpbmUpKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGxpbmUpO1xuICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBpc0RvbmUgPSAvXlstKl1cXHMqXFxbW3hYXVxcXS8udGVzdChsaW5lKTtcblxuICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgZG4tJHtmaWxlUGF0aH0tTCR7aX1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQjogVGFza3MgUGx1Z2luIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgZ2V0VGFza3NQbHVnaW5UYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgLy8gQ2hlY2sgaWYgVGFza3MgcGx1Z2luIGlzIGluc3RhbGxlZFxuICAgIGNvbnN0IHRhc2tzUGx1Z2luID0gKHRoaXMuYXBwIGFzIGFueSkucGx1Z2lucz8ucGx1Z2lucz8uW1wib2JzaWRpYW4tdGFza3MtcGx1Z2luXCJdO1xuICAgIGlmICghdGFza3NQbHVnaW4pIHJldHVybiBbXTtcblxuICAgIC8vIFRhc2tzIHBsdWdpbiBzdG9yZXMgdGFza3MgdmlhIG1ldGFkYXRhIGNhY2hlXG4gICAgLy8gV2Ugc2NhbiBhbGwgZmlsZXMgZm9yIHRhc2tzIHdpdGggZHVlIGRhdGVzIG1hdGNoaW5nIHRvZGF5XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXMpIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgICBpZiAobGlzdEl0ZW0udGFzayA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBUYXNrcyBwbHVnaW4gdXNlcyBlbW9qaS1iYXNlZCBkYXRlcyBpbiB0aGUgdGV4dDpcbiAgICAgICAgLy8gXHVEODNEXHVEQ0M1IFlZWVktTU0tREQgZm9yIGR1ZSBkYXRlXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVhZCB0aGUgZmlsZSB0byBjaGVjaywgYnV0IHdlIGNhbiB1c2UgdGhlIGZyb250bWF0dGVyLWJhc2VkXG4gICAgICAgIC8vIGFwcHJvYWNoIG9yIHRoZSBwb3NpdGlvbiB0byBnZXQgdGhlIHRleHQuXG4gICAgICAgIC8vIFNpbmNlIHdlIGNhbid0IHN5bmMtcmVhZCwgd2UnbGwgY2hlY2sgaWYgcG9zaXRpb25zIG1lbnRpb24gdG9kYXkuXG4gICAgICAgIC8vIEZvciBub3csIHRoaXMgaXMgYSBiZXN0LWVmZm9ydCBjaGVjayB1c2luZyBjYWNoZSBkYXRhLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIENhbGxlZCBieSBEYXNoYm9hcmRWaWV3IHdpdGggcHJlLXNjYW5uZWQgdGFzayBkYXRhXG4gIGdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXM6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGZpbGUuY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGlmICghL15bLSpdXFxzKlxcWy4/XFxdXFxzLy50ZXN0KGxpbmUpKSBjb250aW51ZTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgVGFza3MgcGx1Z2luIGR1ZSBkYXRlOiBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERFxuICAgICAgICBjb25zdCBkdWVNYXRjaCA9IGxpbmUubWF0Y2goL1xcdXsxRjRDNX1cXHMqKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS91KTtcbiAgICAgICAgaWYgKCFkdWVNYXRjaCB8fCBkdWVNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGxpbmUpO1xuICAgICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgICAgLy8gQWxzbyBjaGVjayBmb3Igc2NoZWR1bGVkIGRhdGUgXHUyM0YzXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlZE1hdGNoID0gbGluZS5tYXRjaCgvXFx1MjNGM1xccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoc2NoZWR1bGVkTWF0Y2ggJiYgc2NoZWR1bGVkTWF0Y2hbMV0gIT09IHRoaXMudG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdHAtJHtmaWxlLnBhdGh9LUwke2l9YCxcbiAgICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLnJlcGxhY2UoL1tcXHV7MUY0QzV9XFx1MjNGM11cXHMqXFxkezR9LVxcZHsyfS1cXGR7Mn0vZ3UsIFwiXCIpLnRyaW0oKSxcbiAgICAgICAgICBzb3VyY2U6IFwidGFza3MtcGx1Z2luXCIsXG4gICAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICAgIGRvbmU6IGlzRG9uZSxcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IGksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQzogQnVpbHQtaW4gUXVpY2sgVGFza3MgLS0tXG5cbiAgcHJpdmF0ZSBnZXRRdWlja1Rhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzXG4gICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdGhpcy50b2RheSlcbiAgICAgIC5tYXAoKHF0KSA9PiAoe1xuICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgdGl0bGU6IHF0LnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwicXVpY2stdGFza1wiIGFzIENhbGVuZGFyVGFza1NvdXJjZSxcbiAgICAgICAgZGF0ZTogcXQuZGF0ZSxcbiAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHF0LmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBxdC5kb25lLFxuICAgICAgfSkpO1xuICB9XG5cbiAgLy8gLS0tIENvbXBsZXRpb24gaGFuZGxlcnMgLS0tXG5cbiAgLy8gVG9nZ2xlIGEgZGFpbHkgbm90ZSB0YXNrIGRvbmUvdW5kb25lIGJ5IHJld3JpdGluZyB0aGUgY2hlY2tib3hcbiAgYXN5bmMgdG9nZ2xlRGFpbHlOb3RlVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBpZiAobGluZU51bWJlciA+PSBsaW5lcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tsaW5lTnVtYmVyXTtcbiAgICBpZiAoZG9uZSkge1xuICAgICAgbGluZXNbbGluZU51bWJlcl0gPSBsaW5lLnJlcGxhY2UoL1xcWy5cXF0vLCBcIlt4XVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZXNbbGluZU51bWJlcl0gPSBsaW5lLnJlcGxhY2UoL1xcWy5cXF0vLCBcIlsgXVwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYSBUYXNrcyBwbHVnaW4gdGFza1xuICBhc3luYyB0b2dnbGVUYXNrc1BsdWdpblRhc2soZmlsZVBhdGg6IHN0cmluZywgbGluZU51bWJlcjogbnVtYmVyLCBkb25lOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2FtZSBtZWNoYW5pc20gYXMgZGFpbHkgbm90ZXMgXHUyMDE0IGp1c3QgdG9nZ2xlIHRoZSBjaGVja2JveFxuICAgIGF3YWl0IHRoaXMudG9nZ2xlRGFpbHlOb3RlVGFzayhmaWxlUGF0aCwgbGluZU51bWJlciwgZG9uZSk7XG4gIH1cblxuICAvLyBQb3N0cG9uZSBhIHRhc2sgdG8gdG9tb3Jyb3dcbiAgYXN5bmMgcG9zdHBvbmVUYXNrKHRhc2s6IENhbGVuZGFyVGFzayk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodGhpcy50b2RheSk7XG4gICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcbiAgICBjb25zdCB0b21vcnJvd1N0ciA9IHRvbW9ycm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgaWYgKHRhc2suc291cmNlID09PSBcInF1aWNrLXRhc2tcIikge1xuICAgICAgLy8gVXBkYXRlIGluIHNldHRpbmdzXG4gICAgICBjb25zdCBxdCA9IHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maW5kKFxuICAgICAgICAocSkgPT4gYHF0LSR7cS5pZH1gID09PSB0YXNrLmlkIHx8IHEuaWQgPT09IHRhc2suaWQucmVwbGFjZShcInF0LVwiLCBcIlwiKVxuICAgICAgKTtcbiAgICAgIGlmIChxdCkge1xuICAgICAgICBxdC5wb3N0cG9uZWRGcm9tID0gcXQucG9zdHBvbmVkRnJvbSA/PyBxdC5kYXRlO1xuICAgICAgICBxdC5kYXRlID0gdG9tb3Jyb3dTdHI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YXNrLnNvdXJjZSA9PT0gXCJ0YXNrcy1wbHVnaW5cIiAmJiB0YXNrLmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgdGFzay5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgZHVlIGRhdGUgaW4gdGhlIGZpbGVcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGFzay5maWxlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICBpZiAodGFzay5saW5lTnVtYmVyIDwgbGluZXMubGVuZ3RoKSB7XG4gICAgICAgIGxpbmVzW3Rhc2subGluZU51bWJlcl0gPSBsaW5lc1t0YXNrLmxpbmVOdW1iZXJdLnJlcGxhY2UoXG4gICAgICAgICAgL1xcdXsxRjRDNX1cXHMqXFxkezR9LVxcZHsyfS1cXGR7Mn0vdSxcbiAgICAgICAgICBgXFx1ezFGNEM1fSAke3RvbW9ycm93U3RyfWBcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIGxpbmVzLmpvaW4oXCJcXG5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBIZWxwZXJzIC0tLVxuXG4gIHByaXZhdGUgcGFyc2VUaW1lVG9Ib3VyKHRpbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgW2gsIG1dID0gdGltZS5zcGxpdChcIjpcIikubWFwKE51bWJlcik7XG4gICAgcmV0dXJuIGggKyAobSA/PyAwKSAvIDYwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3VyY2VFbW9qaShzb3VyY2U6IENhbGVuZGFyVGFza1NvdXJjZSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChzb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJkYWlseS1ub3RlXCI6IHJldHVybiBcIlxcdXsxRjRERH1cIjtcbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjogcmV0dXJuIFwiXFx1MjYxMVxcdUZFMEZcIjtcbiAgICAgIGNhc2UgXCJxdWljay10YXNrXCI6IHJldHVybiBcIlxcdTI2QTFcIjtcbiAgICB9XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEhlcm8gQ2FyZCBDb21wb25lbnRcbi8vIEZ1bGwtd2lkdGggYmx1cnJlZCBiZyB3aXRoIGdyZWV0aW5nLCByYW5rIGJhZGdlLCBhY3Rpb24gYnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvQm9zc0VuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhlcm9DYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgaGVybyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvXCIgfSk7XG4gIGhlcm8uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEJhY2tncm91bmQgaW1hZ2VcbiAgaWYgKHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kKSB7XG4gICAgY29uc3QgYmcgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYmdcIiB9KTtcbiAgICBjb25zdCB2YXVsdFBhdGggPSBzZXR0aW5ncy5oZXJvQmFja2dyb3VuZDtcbiAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt2YXVsdFBhdGh9XCIpYDtcbiAgfVxuXG4gIC8vIERhcmsgdmlnbmV0dGUgb3ZlcmxheVxuICBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tb3ZlcmxheVwiIH0pO1xuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1jb250ZW50XCIgfSk7XG5cbiAgLy8gVGltZS1iYXNlZCBncmVldGluZ1xuICBjb25zdCBncmVldGluZyA9IGdldEdyZWV0aW5nKHNldHRpbmdzKTtcbiAgY29udGVudC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1ncmVldGluZ1wiLFxuICAgIHRleHQ6IGAke2dyZWV0aW5nfSwgJHtzZXR0aW5ncy51c2VyTmFtZX0uYCxcbiAgfSk7XG5cbiAgLy8gQ29udGV4dHVhbCBzdWJ0aXRsZVxuICBjb25zdCBzdWJ0aXRsZSA9IGdldFN1YnRpdGxlKHNldHRpbmdzLCBlbmdpbmUpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLXN1YnRpdGxlXCIsXG4gICAgdGV4dDogc3VidGl0bGUsXG4gIH0pO1xuXG4gIC8vIFJhbmsgYmFkZ2UgcGlsbFxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY29uc3QgZXVkSW5kZXggPSBlbmdpbmUuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gIGNvbnN0IGJhZGdlID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLXJhbmstYmFkZ2VcIiB9KTtcbiAgYmFkZ2UuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLXJhbmstdGV4dFwiLFxuICAgIHRleHQ6IGAke3RpdGxlfSBcdTAwQjcgJHt0b1JvbWFuKGV1ZEluZGV4KX1gLFxuICB9KTtcblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBjb25zdCBhY3Rpb25zID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBwcm9ncmVzc0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tYnRuXCIsXG4gICAgdGV4dDogXCJZb3VyIHByb2dyZXNzXCIsXG4gIH0pO1xuICBwcm9ncmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgZXVkYWltb25pYSBzZWN0aW9uXG4gICAgY29uc3QgZXVkU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tY2FyZFwiKTtcbiAgICBpZiAoZXVkU2VjdGlvbikgZXVkU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9KTtcblxuICBjb25zdCByZWZsZWN0QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIlJlZmxlY3RcIixcbiAgfSk7XG4gIHJlZmxlY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTY3JvbGwgdG8gdGhlIHF1b3RlIHNlY3Rpb25cbiAgICBjb25zdCBxdW90ZVNlY3Rpb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1b3RlXCIpO1xuICAgIGlmIChxdW90ZVNlY3Rpb24pIHF1b3RlU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JlZXRpbmcoc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyk6IHN0cmluZyB7XG4gIGNvbnN0IGxhYmVscyA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHM7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXIgPSBub3cuZ2V0SG91cnMoKTtcblxuICBpZiAoaG91ciA+PSA1ICYmIGhvdXIgPCAxMikgcmV0dXJuIGxhYmVscy5ncmVldGluZ19tb3JuaW5nID8/IFwiR29vZCBtb3JuaW5nXCI7XG4gIGlmIChob3VyID49IDEyICYmIGhvdXIgPCAxNykgcmV0dXJuIGxhYmVscy5ncmVldGluZ19hZnRlcm5vb24gPz8gXCJHb29kIGFmdGVybm9vblwiO1xuICBpZiAoaG91ciA+PSAxNyAmJiBob3VyIDwgMjEpIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfZXZlbmluZyA/PyBcIkdvb2QgZXZlbmluZ1wiO1xuICByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX25pZ2h0ID8/IFwiR29vZCBuaWdodFwiO1xufVxuXG5mdW5jdGlvbiBnZXRTdWJ0aXRsZShzZXR0aW5nczogT2xlblNldHRpbmdzLCBlbmdpbmU6IE9sZW5FbmdpbmUpOiBzdHJpbmcge1xuICBjb25zdCBib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuXG4gIC8vIFRhcnRhcnVzXG4gIGlmIChzZXR0aW5ncy5pblRhcnRhcnVzKSB7XG4gICAgcmV0dXJuIFwiVGhlIHVuZGVyd29ybGQgYXdhaXRzIHlvdXIgcGVuYW5jZS5cIjtcbiAgfVxuXG4gIC8vIEJvc3MgZGFuZ2VyIHpvbmVcbiAgaWYgKGJvc3NFbmdpbmUuaXNEYW5nZXJab25lKCkpIHtcbiAgICByZXR1cm4gXCJPbmUgZmluYWwgYmxvdyByZW1haW5zLlwiO1xuICB9XG5cbiAgLy8gQWN0aXZlIHN0cmVha1xuICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0T3ZlcmFsbFN0cmVhaygpO1xuICBpZiAoc3RyZWFrID49IDMpIHtcbiAgICByZXR1cm4gYCR7c3RyZWFrfSBkYXlzIHN0cm9uZy4gS2VlcCB0aGUgZmxhbWUuYDtcbiAgfVxuXG4gIC8vIERlZmF1bHRcbiAgcmV0dXJuIFwiU3RlcCBieSBzdGVwLCB5b3Ugc2hhcGUgeW91ciBwYXRoLlwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgRXVkYWltb25pYSBCYXIgQ29tcG9uZW50XG4vLyBTZWdtZW50ZWQgcHJvZ3Jlc3MgYmFyLCBzdGF0IGNhcmRzLCBjYXRlZ29yeSByb3dzIHdpdGggaWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IHRvUm9tYW4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IENBVEVHT1JZX0lDT05TOiBSZWNvcmQ8Q2F0ZWdvcnksIHN0cmluZz4gPSB7XG4gIGJvZHk6IFwiXFx1ezFGM0NCfVwiLCAvLyB3ZWlnaHRsaWZ0ZXJcbiAgbWluZDogXCJcXHV7MUY0REF9XCIsIC8vIGJvb2tzXG4gIHNwaXJpdDogXCJcXHV7MUY1NEF9XCIsIC8vIGRvdmVcbn07XG5cbmNvbnN0IFRPVEFMX1NFR01FTlRTID0gMTA7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFdWRhaW1vbmlhQmFyKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgLy8gLS0tIDEuIEV1ZGFpbW9uaWEgQ2FyZCAoc2VnbWVudGVkIGJhciArIGNoYXB0ZXIpIC0tLVxuICByZW5kZXJFdWRhaW1vbmlhQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCk7XG5cbiAgLy8gLS0tIDIuIFN0YXQgQ2FyZHMgUm93IChzZXBhcmF0ZSBmcm9tIHRoZSBjYXJkKSAtLS1cbiAgcmVuZGVyU3RhdENhcmRzKGNvbnRhaW5lciwgZW5naW5lLCBzdGFnZ2VySW5kZXggKyAxKTtcblxuICAvLyAtLS0gMy4gQ2F0ZWdvcmllcyBDYXJkIChpY29uIHJvd3Mgd2l0aCBiYXJzKSAtLS1cbiAgcmVuZGVyQ2F0ZWdvcmllc0NhcmQoY29udGFpbmVyLCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySW5kZXggKyAyKTtcbn1cblxuLy8gLS0tLSBFdWRhaW1vbmlhIENhcmQgLS0tLVxuXG5mdW5jdGlvbiByZW5kZXJFdWRhaW1vbmlhQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXI6IHRpdGxlICsgWFBcbiAgY29uc3QgaGVhZGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWhlYWRlclwiIH0pO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcblxuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtdGl0bGVcIixcbiAgICB0ZXh0OiBgRXVkYWltb25pYSAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIGNvbnN0IHRvdGFsWFAgPSBlbmdpbmUuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKS5yZWR1Y2UoKHN1bSwgY2wpID0+IHN1bSArIGNsLnhwLCAwKTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXhwXCIsXG4gICAgdGV4dDogYCR7dG90YWxYUH0gWFBgLFxuICB9KTtcblxuICAvLyBTZWdtZW50ZWQgcHJvZ3Jlc3MgYmFyXG4gIGNvbnN0IHByb2dyZXNzID0gZW5naW5lLmdldEV1ZGFpbW9uaWFQcm9ncmVzcygpOyAvLyAwLTEwMFxuICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IocHJvZ3Jlc3MgLyBUT1RBTF9TRUdNRU5UUyk7XG4gIGNvbnN0IGhhc1BhcnRpYWwgPSBwcm9ncmVzcyAlIFRPVEFMX1NFR01FTlRTID4gMDtcblxuICBjb25zdCBzZWdtZW50cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZXVkYWltb25pYS1zZWdtZW50c1wiIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgVE9UQUxfU0VHTUVOVFM7IGkrKykge1xuICAgIGxldCBjbHMgPSBcIm9sZW4tZXVkYWltb25pYS1zZWdtZW50XCI7XG4gICAgaWYgKGkgPCBmaWxsZWRTZWdtZW50cykge1xuICAgICAgY2xzICs9IFwiIG9sZW4tZXVkYWltb25pYS1zZWdtZW50LWZpbGxlZFwiO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gZmlsbGVkU2VnbWVudHMgJiYgaGFzUGFydGlhbCkge1xuICAgICAgY2xzICs9IFwiIG9sZW4tZXVkYWltb25pYS1zZWdtZW50LXBhcnRpYWxcIjtcbiAgICB9XG4gICAgc2VnbWVudHMuY3JlYXRlRGl2KHsgY2xzIH0pO1xuICB9XG5cbiAgLy8gQ2hhcHRlciBsYWJlbFxuICBjb25zdCBjaGFwdGVyID0gZW5naW5lLmdldENoYXB0ZXIoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS1jaGFwdGVyXCIsXG4gICAgdGV4dDogYENoYXB0ZXIgJHt0b1JvbWFuKGNoYXB0ZXIubnVtYmVyKX06ICR7Y2hhcHRlci5uYW1lfWAsXG4gIH0pO1xufVxuXG4vLyAtLS0tIFN0YXQgQ2FyZHMgLS0tLVxuXG5mdW5jdGlvbiByZW5kZXJTdGF0Q2FyZHMoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBncmlkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXN0YXRzLWdyaWRcIiB9KTtcbiAgZ3JpZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgY29uc3QgdG90YWxUYXNrcyA9IGVuZ2luZS5nZXRUb3RhbENvbXBsZXRpb25zKCk7XG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGNvbnN0IHByZXNlbmNlID0gZW5naW5lLmdldERheXNPZlByZXNlbmNlKCk7XG5cbiAgLy8gT2JqZWN0aXZlcyBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezFGM0FGfVwiLCB0b3RhbFRhc2tzLCBcIk9iamVjdGl2ZXNcIik7XG5cbiAgLy8gU3RyZWFrIGNhcmQgKHdpdGggc3RyZWFrIGRvdHMpXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezFGNTI1fVwiLCBzdHJlYWssIFwiU3RyZWFrXCIsIHN0cmVhayk7XG5cbiAgLy8gQ29uc2lzdGVuY3kgY2FyZFxuICBjcmVhdGVTdGF0Q2FyZChncmlkLCBcIlxcdXsyNzI4fVwiLCBwcmVzZW5jZSwgXCJDb25zaXN0ZW5jeVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhdENhcmQoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIGljb246IHN0cmluZyxcbiAgdmFsdWU6IG51bWJlcixcbiAgbGFiZWw6IHN0cmluZyxcbiAgc3RyZWFrRGF5cz86IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGNhcmQgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkXCIgfSk7XG5cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1pY29uXCIsIHRleHQ6IGljb24gfSk7XG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1zdGF0LWNhcmQtdmFsdWVcIiwgdGV4dDogU3RyaW5nKHZhbHVlKSB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1sYWJlbFwiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBTdHJlYWsgZG90cyAoc2hvdyBsYXN0IDcgZGF5cylcbiAgaWYgKHN0cmVha0RheXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGRvdHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1kb3RzXCIgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGxldCBjbHMgPSBcIm9sZW4tc3RhdC1kb3RcIjtcbiAgICAgIGlmIChpIDwgc3RyZWFrRGF5cykge1xuICAgICAgICBjbHMgKz0gXCIgb2xlbi1zdGF0LWRvdC1hY3RpdmVcIjtcbiAgICAgIH1cbiAgICAgIGRvdHMuY3JlYXRlRGl2KHsgY2xzIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tIENhdGVnb3JpZXMgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXNDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIER5bmFtaWMgdGl0bGVcbiAgY29uc3QgdGl0bGUgPSBlbmdpbmUuZ2V0RHluYW1pY1RpdGxlKCk7XG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1keW5hbWljLXRpdGxlXCIsIHRleHQ6IHRpdGxlIH0pO1xuXG4gIC8vIERpdmlkZXJcbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgcm93c1xuICBjb25zdCBncmlkID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yaWVzLWdyaWRcIiB9KTtcblxuICBjb25zdCBjYXRlZ29yaWVzOiB7IGtleTogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICAgIHsga2V5OiBcImJvZHlcIiwgbGFiZWw6IFwiQm9keVwiIH0sXG4gICAgeyBrZXk6IFwibWluZFwiLCBsYWJlbDogXCJNaW5kXCIgfSxcbiAgICB7IGtleTogXCJzcGlyaXRcIiwgbGFiZWw6IFwiU3Bpcml0XCIgfSxcbiAgXTtcblxuICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBlbmdpbmUuZ2V0Q2F0ZWdvcnlMZXZlbChjYXQua2V5KTtcbiAgICBjb25zdCBjb2xvciA9IHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldO1xuXG4gICAgY29uc3Qgcm93ID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1yb3dcIiB9KTtcblxuICAgIC8vIEljb24gYm94XG4gICAgY29uc3QgaWNvbkJveCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1pY29uXCIgfSk7XG4gICAgaWNvbkJveC5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7Y29sb3J9MjJgOyAvLyAxMyUgb3BhY2l0eSB0aW50XG4gICAgaWNvbkJveC50ZXh0Q29udGVudCA9IENBVEVHT1JZX0lDT05TW2NhdC5rZXldO1xuXG4gICAgLy8gSW5mbyBjb2x1bW5cbiAgICBjb25zdCBpbmZvID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWluZm9cIiB9KTtcblxuICAgIC8vIE5hbWUgKyBsZXZlbCByb3dcbiAgICBjb25zdCBuYW1lUm93ID0gaW5mby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lLXJvd1wiIH0pO1xuICAgIG5hbWVSb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktbmFtZVwiLCB0ZXh0OiBjYXQubGFiZWwgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tY2F0ZWdvcnktbGV2ZWwtdGV4dFwiLFxuICAgICAgdGV4dDogYEx2ICR7bGV2ZWwubGV2ZWx9IFx1MDBCNyAke2xldmVsLnByb2dyZXNzVG9OZXh0fS8xMDBgLFxuICAgIH0pO1xuXG4gICAgLy8gUHJvZ3Jlc3MgYmFyXG4gICAgY29uc3QgYmFyID0gaW5mby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1iYXJcIiB9KTtcbiAgICBjb25zdCBmaWxsID0gYmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhci1maWxsXCIgfSk7XG4gICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke2xldmVsLnByb2dyZXNzVG9OZXh0fSVgO1xuICAgIGZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEaXJlY3RpdmUgQ2FyZCBDb21wb25lbnRcbi8vIENvbXBhY3QgY2FyZCBvbiBkYXNoYm9hcmQgKyBleHBhbmRlZCBib3R0b20tc2hlZXQgb3ZlcmxheVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBQcmlvcml0eVJlYXNvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGlyZWN0aXZlQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25FbnRlcldvcmtzcGFjZT86IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBzdWdnZXN0aW9uID0gZW5naW5lLmdldFN1Z2dlc3Rpb24oKTtcbiAgaWYgKCFzdWdnZXN0aW9uKSByZXR1cm47XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRpcmVjdGl2ZV90aXRsZSA/PyBcIlRIRSBESVJFQ1RJVkVcIjtcbiAgY29uc3QgYmVnaW5MYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuYmVnaW5fd29ya3NwYWNlID8/IFwiRU5URVIgV09SS1NQQUNFXCI7XG4gIGNvbnN0IG5vdE5vd0xhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5ub3Rfbm93ID8/IFwiTk9UIE5PV1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENvbXBhY3QgY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQgb2xlbi1kaXJlY3RpdmVcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gSGVhZGVyIHdpdGggYmFkZ2VcbiAgY29uc3QgaGVhZGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtaGVhZGVyXCIgfSk7XG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgY29uc3QgYmFkZ2UgPSBoZWFkZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWJhZGdlXCIgfSk7XG4gIGJhZGdlLnN0eWxlLmJhY2tncm91bmQgPSBnZXRCYWRnZUNvbG9yKHN1Z2dlc3Rpb24ucmVhc29uKTtcblxuICAvLyBBY3Rpdml0eSBpbmZvXG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIHRleHQ6IGAke3N1Z2dlc3Rpb24uZW1vaml9ICR7c3VnZ2VzdGlvbi5hY3Rpdml0eU5hbWV9YCxcbiAgfSk7XG5cbiAgY29uc3QgbmVnbGVjdFRleHQgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIG5lZ2xlY3RlZGBcbiAgICA6IFwiTm90IHlldCBzdGFydGVkXCI7XG5cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1uZWdsZWN0XCIsIHRleHQ6IG5lZ2xlY3RUZXh0IH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpb25zXCIgfSk7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uRW50ZXJXb3Jrc3BhY2U/LihzdWdnZXN0aW9uLmFjdGl2aXR5SWQpO1xuICB9KTtcblxuICBjb25zdCBub3ROb3dCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgdGV4dDogbm90Tm93TGFiZWwsXG4gIH0pO1xuICBub3ROb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyBEaXNtaXNzIHRoaXMgY2FyZCB3aXRoIGEgZmFkZVxuICAgIGNhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMHB4KVwiO1xuICAgIGNhcmQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3MgZWFzZVwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSwgMzAwKTtcbiAgfSk7XG5cbiAgLy8gVGFwIGNhcmQgdG8gZXhwYW5kXG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93RXhwYW5kZWREaXJlY3RpdmUoY29udGFpbmVyLCBzZXR0aW5ncywgc3VnZ2VzdGlvbiwgYmVnaW5MYWJlbCwgbm90Tm93TGFiZWwsIG9uRW50ZXJXb3Jrc3BhY2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd0V4cGFuZGVkRGlyZWN0aXZlKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdWdnZXN0aW9uOiB7IGFjdGl2aXR5SWQ6IHN0cmluZzsgYWN0aXZpdHlOYW1lOiBzdHJpbmc7IGVtb2ppOiBzdHJpbmc7IHJlYXNvbjogUHJpb3JpdHlSZWFzb247IGRheXNTaW5jZUxhc3REb25lOiBudW1iZXI7IGxvcmVUZXh0OiBzdHJpbmcgfSxcbiAgYmVnaW5MYWJlbDogc3RyaW5nLFxuICBub3ROb3dMYWJlbDogc3RyaW5nLFxuICBvbkVudGVyV29ya3NwYWNlPzogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIC8vIENyZWF0ZSBvdmVybGF5XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG5cbiAgLy8gSGFuZGxlIGJhclxuICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICAvLyBUaXRsZVxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLFxuICAgIHRleHQ6IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGlyZWN0aXZlX3RpdGxlID8/IFwiVEhFIERJUkVDVElWRVwiLFxuICB9KTtcblxuICAvLyBBY3Rpdml0eSBuYW1lXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aXZpdHlcIixcbiAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMjJweDsgbWFyZ2luOiAxNnB4IDAgOHB4O1wiIH0sXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICAvLyBOZWdsZWN0IGRlc2NyaXB0aW9uXG4gIGNvbnN0IG5lZ2xlY3REZXNjID0gc3VnZ2VzdGlvbi5kYXlzU2luY2VMYXN0RG9uZSA8IDk5OVxuICAgID8gYCR7c3VnZ2VzdGlvbi5kYXlzU2luY2VMYXN0RG9uZX0gZGF5cyBzaW5jZSB5b3UgbGFzdCBwcmFjdGljZWQuIFRoZSBza2lsbCBhdHJvcGhpZXMuYFxuICAgIDogXCJBIG5ldyBwYXRoIGF3YWl0cy4gVGFrZSB0aGUgZmlyc3Qgc3RlcC5cIjtcblxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYm9keS1pdGFsaWNcIixcbiAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbi1ib3R0b206IDEycHg7XCIgfSxcbiAgICB0ZXh0OiBuZWdsZWN0RGVzYyxcbiAgfSk7XG5cbiAgLy8gTG9yZSB0ZXh0XG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1zaGVldC1sb3JlXCIsXG4gICAgdGV4dDogYFwiJHtzdWdnZXN0aW9uLmxvcmVUZXh0fVwiYCxcbiAgfSk7XG5cbiAgLy8gUmFuZG9tIHF1b3RlXG4gIGNvbnN0IHF1b3RlID0gRkFMTEJBQ0tfUVVPVEVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEZBTExCQUNLX1FVT1RFUy5sZW5ndGgpXTtcbiAgY29uc3QgcXVvdGVTZWN0aW9uID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtcXVvdGVcIiB9KTtcbiAgcXVvdGVTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbnNcbiAgY29uc3QgYWN0aW9ucyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpb25zXCIgfSk7XG4gIGFjdGlvbnMuc3R5bGUubWFyZ2luVG9wID0gXCIyMHB4XCI7XG4gIGFjdGlvbnMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXG4gIGNvbnN0IGJlZ2luQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICB0ZXh0OiBiZWdpbkxhYmVsLFxuICB9KTtcbiAgYmVnaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbG9zZVNoZWV0KCk7XG4gICAgb25FbnRlcldvcmtzcGFjZT8uKHN1Z2dlc3Rpb24uYWN0aXZpdHlJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdE5vd0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBub3ROb3dMYWJlbCxcbiAgfSk7XG4gIG5vdE5vd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgfSk7XG5cbiAgLy8gQ2xvc2Ugb24gb3ZlcmxheSB0YXBcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlU2hlZXQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VTaGVldCgpOiB2b2lkIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCBhbmQgYW5pbWF0ZSBpblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRCYWRnZUNvbG9yKHJlYXNvbjogUHJpb3JpdHlSZWFzb24pOiBzdHJpbmcge1xuICBzd2l0Y2ggKHJlYXNvbikge1xuICAgIGNhc2UgXCJkZWF0aFwiOiByZXR1cm4gXCIjZWY0NDQ0XCI7XG4gICAgY2FzZSBcImJvc3NcIjogcmV0dXJuIFwiI2VhYjMwOFwiO1xuICAgIGNhc2UgXCJuZWdsZWN0XCI6IHJldHVybiBcIiNmOTczMTZcIjtcbiAgICBjYXNlIFwid2Vla2x5XCI6IHJldHVybiBcIiMzYjgyZjZcIjtcbiAgICBjYXNlIFwiY2hhaW5cIjogcmV0dXJuIFwiIzhiNWNmNlwiO1xuICAgIGNhc2UgXCJ0aW1lXCI6IHJldHVybiBcIiMwNmI2ZDRcIjtcbiAgICBjYXNlIFwiYmFsYW5jZWRcIjogcmV0dXJuIFwiI2ZmZmZmZlwiO1xuICAgIGRlZmF1bHQ6IHJldHVybiBcIiM5MjhkODVcIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQm9zcyBTdGF0dXMgQ2FyZCBDb21wb25lbnRcbi8vIENvbXBhY3QgYm9zcyBIUCBiYXIgd2l0aCB0aWVyIGFuZCByYW5rXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb3NzU3RhdHVzQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuICBjb25zdCBzdGF0dXMgPSBib3NzRW5naW5lLmdldEJvc3NTdGF0dXMoKTtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuYm9zc19zdGF0dXNfdGl0bGUgPz8gXCJCT1NTIFNUQVRVU1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENhcmRcbiAgY29uc3QgY2FyZENscyA9IHN0YXR1cy5pblRhcnRhcnVzID8gXCJvbGVuLWNhcmQtY29tcGFjdCBvbGVuLWNhcmQtdGFydGFydXNcIiA6IFwib2xlbi1jYXJkLWNvbXBhY3RcIjtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IGNhcmRDbHMgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFJvdzogZW1vamkgKyBpbmZvXG4gIGNvbnN0IHJvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYm9zcy1yb3dcIiB9KTtcblxuICByb3cuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1ib3NzLWVtb2ppXCIsIHRleHQ6IGdldEJvc3NFbW9qaShzdGF0dXMudGllcikgfSk7XG5cbiAgY29uc3QgaW5mbyA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ib3NzLWluZm9cIiB9KTtcbiAgaW5mby5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWJvc3MtbmFtZVwiLCB0ZXh0OiBzdGF0dXMuYm9zcy5uYW1lIH0pO1xuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib3NzLXRpZXJcIixcbiAgICB0ZXh0OiBgVGllciAke3N0YXR1cy50aWVyfSBcdTAwQjcgJHtzdGF0dXMucmFua31gLFxuICB9KTtcblxuICAvLyBIUCBiYXJcbiAgY29uc3QgaHBCYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhwLWJhclwiIH0pO1xuICBjb25zdCBocEZpbGwgPSBocEJhci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ocC1iYXItZmlsbFwiIH0pO1xuICBocEZpbGwuc3R5bGUud2lkdGggPSBgJHtzdGF0dXMucGVyY2VudH0lYDtcbiAgaHBGaWxsLnN0eWxlLmJhY2tncm91bmQgPSBib3NzRW5naW5lLmdldEhQQ29sb3Ioc3RhdHVzLnBlcmNlbnQpO1xuXG4gIC8vIEhQIHRleHRcbiAgaW5mby5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYm9zcy1ocC10ZXh0XCIsXG4gICAgdGV4dDogYCR7c3RhdHVzLmN1cnJlbnRIUH0vJHtzdGF0dXMubWF4SFB9IEhQICgke3N0YXR1cy5wZXJjZW50fSUpYCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJvc3NFbW9qaSh0aWVyOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBlbW9qaXM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gICAgMTogXCJcXHV7MUY0N0J9XCIsIDI6IFwiXFx1ezFGOURDfVwiLCAzOiBcIlxcdXsxRjQwOX1cIiwgNDogXCJcXHV7MUY0MDJ9XCIsXG4gICAgNTogXCJcXHV7MUY0MER9XCIsIDY6IFwiXFx1ezFGOTgxfVwiLCA3OiBcIlxcdXsxRjUyNX1cIiwgODogXCJcXHV7MUY0M0F9XCIsXG4gICAgOTogXCJcXHV7MUYzMEF9XCIsIDEwOiBcIlxcdXsxRjQ3Rn1cIiwgMTE6IFwiXFx1ezFGMzI5fVwiLCAxMjogXCJcXHUyMzFCXCIsXG4gICAgMTM6IFwiXFx1ezFGMzAwfVwiLFxuICB9O1xuICByZXR1cm4gZW1vamlzW3RpZXJdID8/IFwiXFx1MjY5NFxcdUZFMEZcIjtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFdlZWtseSBSaHl0aG0gQ29tcG9uZW50XG4vLyA3LWRheSBiYXIgY2hhcnQgd2l0aCBjYXRlZ29yeSBzdGFja2luZyArIHN0YXRzIHJvd1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2Vla2x5Umh5dGhtKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLndlZWtseV9yaHl0aG1fdGl0bGUgPz8gXCJXRUVLTFkgUkhZVEhNXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gU3RhdHMgcm93XG4gIGNvbnN0IHN0YXRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdHNcIiB9KTtcblxuICBjb25zdCBhY3RpdmVEYXlzID0gZW5naW5lLmdldEFjdGl2ZURheXNUaGlzV2VlaygpO1xuICBjb25zdCBiZXN0RGF5ID0gZW5naW5lLmdldEJlc3REYXlUaGlzV2VlaygpO1xuICBjb25zdCB0b3RhbENvbXBsZXRpb25zID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcblxuICBjcmVhdGVXZWVrbHlTdGF0KHN0YXRzLCBTdHJpbmcoYWN0aXZlRGF5cykgKyBcIi83XCIsIFwiQWN0aXZlIGRheXNcIik7XG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIGJlc3REYXksIFwiQmVzdCBkYXlcIik7XG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIFN0cmluZyh0b3RhbENvbXBsZXRpb25zKSwgXCJUb3RhbFwiKTtcblxuICAvLyBEaXZpZGVyXG4gIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGl2aWRlclwiIH0pO1xuXG4gIC8vIEJhciBjaGFydFxuICBjb25zdCB3ZWVrbHlEYXRhID0gZW5naW5lLmdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgdG9kYXlTdHIgPSBuZXcgRGF0ZShub3cpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gIC8vIEZpbmQgbWF4IHRvdGFsIGZvciBzY2FsaW5nXG4gIGxldCBtYXhUb3RhbCA9IDE7XG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtseURhdGEpIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGRheS5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgIGlmICh0b3RhbCA+IG1heFRvdGFsKSBtYXhUb3RhbCA9IHRvdGFsO1xuICB9XG5cbiAgY29uc3QgYmFyc0NvbnRhaW5lciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhcnNcIiB9KTtcblxuICBmb3IgKGNvbnN0IGRheSBvZiB3ZWVrbHlEYXRhKSB7XG4gICAgY29uc3QgY29sID0gYmFyc0NvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyLWNvbFwiIH0pO1xuXG4gICAgLy8gU3RhY2tlZCBiYXJcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGRheS5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuXG4gICAgY29uc3QgYmFySGVpZ2h0ID0gbWF4VG90YWwgPiAwID8gTWF0aC5tYXgoNCwgKHRvdGFsIC8gbWF4VG90YWwpICogMTAwKSA6IDQ7XG4gICAgY29uc3QgYmFyRWwgPSBjb2wuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhclwiIH0pO1xuICAgIGJhckVsLnN0eWxlLmhlaWdodCA9IGAke2JhckhlaWdodH1weGA7XG4gICAgYmFyRWwuc3R5bGUubWluSGVpZ2h0ID0gXCI0cHhcIjtcblxuICAgIGlmIChkYXkuZGF0ZSA9PT0gdG9kYXlTdHIpIHtcbiAgICAgIGJhckVsLmNsYXNzTGlzdC5hZGQoXCJvbGVuLXdlZWtseS1iYXItdG9kYXlcIik7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHN0YWNrZWQgc2VnbWVudHNcbiAgICBjb25zdCBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl07XG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgY2F0Q291bnQgPSBkYXkuY29tcGxldGlvbnMuZ2V0KGNhdCkgPz8gMDtcbiAgICAgIGlmIChjYXRDb3VudCA9PT0gMCkgY29udGludWU7XG4gICAgICBjb25zdCBzZWdIZWlnaHQgPSB0b3RhbCA+IDAgPyAoY2F0Q291bnQgLyB0b3RhbCkgKiAxMDAgOiAwO1xuICAgICAgY29uc3Qgc2VnID0gYmFyRWwuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhci1zZWdtZW50XCIgfSk7XG4gICAgICBzZWcuc3R5bGUuaGVpZ2h0ID0gYCR7c2VnSGVpZ2h0fSVgO1xuICAgICAgc2VnLnN0eWxlLmJhY2tncm91bmQgPSBnZXRDYXRlZ29yeUNvbG9yKGNhdCwgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIElmIG5vIGNvbXBsZXRpb25zLCBzaG93IGVtcHR5IGJhclxuICAgIGlmICh0b3RhbCA9PT0gMCkge1xuICAgICAgYmFyRWwuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVwiO1xuICAgIH1cblxuICAgIC8vIERheSBsYWJlbFxuICAgIGNvbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdlZWtseS1kYXktbGFiZWxcIiwgdGV4dDogZGF5LmRheS5jaGFyQXQoMCkgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2Vla2x5U3RhdChwYXJlbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IHN0YXQgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXRcIiB9KTtcbiAgc3RhdC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0LXZhbHVlXCIsIHRleHQ6IHZhbHVlIH0pO1xuICBzdGF0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXQtbGFiZWxcIiwgdGV4dDogbGFiZWwgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENhdGVnb3J5Q29sb3IoY2F0ZWdvcnk6IENhdGVnb3J5LCBzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEFjdGl2aXR5IEdyaWQgQ29tcG9uZW50XG4vLyAyLWNvbHVtbiBncmlkIG9mIGFjdGl2aXR5IGNhcmRzIHdpdGggcHJvZ3Jlc3MgcmluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFjdGl2aXR5R3JpZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5hY3Rpdml0eV9ncmlkX3RpdGxlID8/IFwiQUNUSVZJVElFU1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIEdyaWQgY29udGFpbmVyXG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCBjb2x1bW5zID0gc2V0dGluZ3MuZGV2Q29uZmlnLmFjdGl2aXR5R3JpZENvbHVtbnMgPz8gMjtcbiAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2NvbHVtbnN9LCAxZnIpYDtcblxuICBjb25zdCBhY3Rpdml0aWVzID0gZW5naW5lLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG5cbiAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgY29uc3QgY2FyZCA9IGdyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktY2FyZFwiIH0pO1xuXG4gICAgLy8gQ2F0ZWdvcnkgYWNjZW50IGJhclxuICAgIGNvbnN0IGFjY2VudCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktYWNjZW50XCIgfSk7XG4gICAgYWNjZW50LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1thY3Rpdml0eS5jYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCI7XG5cbiAgICAvLyBUb3Agcm93OiBlbW9qaSArIHN0YXR1cyBkb3RcbiAgICBjb25zdCB0b3AgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LXRvcFwiIH0pO1xuICAgIHRvcC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFjdGl2aXR5LWVtb2ppXCIsIHRleHQ6IGFjdGl2aXR5LmVtb2ppIH0pO1xuXG4gICAgY29uc3QgZGF5c1NpbmNlID0gZW5naW5lLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKTtcbiAgICBjb25zdCBkb3RDbHMgPSBnZXREb3RDbGFzcyhkYXlzU2luY2UpO1xuICAgIHRvcC5jcmVhdGVEaXYoeyBjbHM6IGBvbGVuLWFjdGl2aXR5LWRvdCAke2RvdENsc31gIH0pO1xuXG4gICAgLy8gQWN0aXZpdHkgbmFtZVxuICAgIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1uYW1lXCIsIHRleHQ6IGFjdGl2aXR5Lm5hbWUgfSk7XG5cbiAgICAvLyBXZWVrbHkgcHJvZ3Jlc3NcbiAgICBjb25zdCBwcm9ncmVzcyA9IGVuZ2luZS5nZXRXZWVrbHlQcm9ncmVzcyhhY3Rpdml0eS5pZCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NSb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzXCIgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyByaW5nIChTVkcpXG4gICAgY29uc3QgcmluZyA9IGNyZWF0ZVByb2dyZXNzUmluZyhwcm9ncmVzcy5kb25lLCBwcm9ncmVzcy50YXJnZXQsIHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2FjdGl2aXR5LmNhdGVnb3J5XSk7XG4gICAgcHJvZ3Jlc3NSb3cuYXBwZW5kQ2hpbGQocmluZyk7XG5cbiAgICBwcm9ncmVzc1Jvdy5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzcy10ZXh0XCIsXG4gICAgICB0ZXh0OiBgJHtwcm9ncmVzcy5kb25lfSBvZiAke3Byb2dyZXNzLnRhcmdldH1gLFxuICAgIH0pO1xuXG4gICAgLy8gU3RyZWFrXG4gICAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldEFjdGl2aXR5U3RyZWFrKGFjdGl2aXR5LmlkKTtcbiAgICBpZiAoc3RyZWFrID4gMCkge1xuICAgICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLWFjdGl2aXR5LXN0cmVha1wiLFxuICAgICAgICB0ZXh0OiBgJHtzdHJlYWt9IGRheSBzdHJlYWtgLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldERvdENsYXNzKGRheXNTaW5jZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGRheXNTaW5jZSA9PT0gMCkgcmV0dXJuIFwib2xlbi1hY3Rpdml0eS1kb3QtZ3JlZW5cIjtcbiAgaWYgKGRheXNTaW5jZSA8PSAxKSByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC15ZWxsb3dcIjtcbiAgcmV0dXJuIFwib2xlbi1hY3Rpdml0eS1kb3QtcmVkXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyZXNzUmluZyhkb25lOiBudW1iZXIsIHRhcmdldDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XG4gIGNvbnN0IHNpemUgPSAyNDtcbiAgY29uc3Qgc3Ryb2tlV2lkdGggPSAyLjU7XG4gIGNvbnN0IHJhZGl1cyA9IChzaXplIC0gc3Ryb2tlV2lkdGgpIC8gMjtcbiAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xuICBjb25zdCBwZXJjZW50ID0gdGFyZ2V0ID4gMCA/IE1hdGgubWluKDEsIGRvbmUgLyB0YXJnZXQpIDogMDtcbiAgY29uc3QgZGFzaE9mZnNldCA9IGNpcmN1bWZlcmVuY2UgKiAoMSAtIHBlcmNlbnQpO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHNpemUpKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoc2l6ZSkpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7c2l6ZX0gJHtzaXplfWApO1xuICBzdmcuY2xhc3NMaXN0LmFkZChcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3MtcmluZ1wiKTtcblxuICAvLyBCYWNrZ3JvdW5kIGNpcmNsZVxuICBjb25zdCBiZ0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgU3RyaW5nKHJhZGl1cykpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwicmdiYSgyNTUsMjU1LDI1NSwwLjA4KVwiKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFN0cmluZyhzdHJva2VXaWR0aCkpO1xuICBzdmcuYXBwZW5kQ2hpbGQoYmdDaXJjbGUpO1xuXG4gIC8vIFByb2dyZXNzIGNpcmNsZVxuICBjb25zdCBwcm9ncmVzc0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgU3RyaW5nKHJhZGl1cykpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGNvbG9yKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFN0cmluZyhzdHJva2VXaWR0aCkpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFN0cmluZyhjaXJjdW1mZXJlbmNlKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFN0cmluZyhkYXNoT2Zmc2V0KSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgcm90YXRlKC05MCAke3NpemUgLyAyfSAke3NpemUgLyAyfSlgKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHByb2dyZXNzQ2lyY2xlKTtcblxuICByZXR1cm4gc3ZnO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgVGVtcGxlIENoaXBzIENvbXBvbmVudFxuLy8gSG9yaXpvbnRhbCBzY3JvbGxhYmxlIGNoaXBzIGZvciBzZWxmLWNhcmUgdGFzayB0cmFja2luZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBUZW1wbGVUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUZW1wbGVDaGlwcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIG9uVGVtcGxlVXBkYXRlOiAodGFza0lkOiBzdHJpbmcpID0+IHZvaWRcbik6IHZvaWQge1xuICBpZiAoIXNldHRpbmdzLnRlbXBsZVRhc2tzIHx8IHNldHRpbmdzLnRlbXBsZVRhc2tzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy50ZW1wbGVfdGl0bGUgPz8gXCJUSEUgVEVNUExFXCI7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG5cbiAgLy8gU2VjdGlvblxuICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsZS1zZWN0aW9uXCIgfSk7XG4gIHNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFRpdGxlXG4gIHNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENoaXBzIGNvbnRhaW5lclxuICBjb25zdCBjaGlwcyA9IHNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXBzXCIgfSk7XG4gIGNoaXBzLnN0eWxlLm1hcmdpblRvcCA9IFwiOHB4XCI7XG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHNldHRpbmdzLnRlbXBsZVRhc2tzKSB7XG4gICAgY29uc3Qgc3RhdHVzID0gZ2V0VGFza1N0YXR1cyh0YXNrLCBub3cpO1xuXG4gICAgY29uc3QgY2hpcENscyA9IGBvbGVuLXRlbXBsZS1jaGlwICR7c3RhdHVzLmNoaXBDbGFzc31gO1xuICAgIGNvbnN0IGNoaXAgPSBjaGlwcy5jcmVhdGVEaXYoeyBjbHM6IGNoaXBDbHMgfSk7XG5cbiAgICBjaGlwLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwLWVtb2ppXCIsIHRleHQ6IHRhc2suZW1vamkgfSk7XG4gICAgY2hpcC5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcC10ZXh0XCIsIHRleHQ6IGAke3Rhc2submFtZX0gXHUwMEI3ICR7c3RhdHVzLnRleHR9YCB9KTtcblxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9uVGVtcGxlVXBkYXRlKHRhc2suaWQpO1xuICAgICAgLy8gVmlzdWFsIGZlZWRiYWNrXG4gICAgICBjaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMC45KVwiO1xuICAgICAgY2hpcC5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgIGNoaXAuc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gICAgICB9LCAyMDApO1xuICAgIH0pO1xuICB9XG59XG5cbmludGVyZmFjZSBUYXNrU3RhdHVzIHtcbiAgdGV4dDogc3RyaW5nO1xuICBjaGlwQ2xhc3M6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0VGFza1N0YXR1cyh0YXNrOiBUZW1wbGVUYXNrLCBub3c6IERhdGUpOiBUYXNrU3RhdHVzIHtcbiAgaWYgKCF0YXNrLmxhc3RDb21wbGV0ZWQpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIm92ZXJkdWVcIiwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtb3ZlcmR1ZVwiIH07XG4gIH1cblxuICBjb25zdCBsYXN0ID0gbmV3IERhdGUodGFzay5sYXN0Q29tcGxldGVkKTtcbiAgY29uc3QgbXNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICBjb25zdCBkYXlzU2luY2UgPSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gbGFzdC5nZXRUaW1lKCkpIC8gbXNQZXJEYXkpO1xuICBjb25zdCBkYXlzVW50aWxEdWUgPSB0YXNrLmludGVydmFsRGF5cyAtIGRheXNTaW5jZTtcblxuICBpZiAoZGF5c1VudGlsRHVlIDw9IDApIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIm92ZXJkdWVcIiwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtb3ZlcmR1ZVwiIH07XG4gIH1cblxuICBpZiAoZGF5c1VudGlsRHVlIDw9IDEpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcImR1ZSB0b2RheVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC13YXJuXCIgfTtcbiAgfVxuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMikge1xuICAgIHJldHVybiB7IHRleHQ6IGBkdWUgaW4gJHtkYXlzVW50aWxEdWV9ZGAsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLXdhcm5cIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogYGluICR7ZGF5c1VudGlsRHVlfWRgLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1va1wiIH07XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBRdW90ZSBGb290ZXIgQ29tcG9uZW50XG4vLyBSb3RhdGluZyBzdG9pYyBxdW90ZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBkYXNoYm9hcmRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBBcHAsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUXVvdGVGb290ZXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGFwcDogQXBwLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBxdW90ZSA9IGdldFF1b3RlKGFwcCwgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcXVvdGVcIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtdGV4dFwiLFxuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gIH0pO1xuXG4gIGlmIChxdW90ZS5hdHRyaWJ1dGlvbikge1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICAgIHRleHQ6IGBcdTIwMTQgJHtxdW90ZS5hdHRyaWJ1dGlvbn1gLFxuICAgIH0pO1xuICB9XG59XG5cbmludGVyZmFjZSBRdW90ZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgYXR0cmlidXRpb246IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0UXVvdGUoXG4gIGFwcDogQXBwLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogUXVvdGUge1xuICAvLyBUcnkgdmF1bHQgZm9sZGVyIHF1b3RlcyBmaXJzdFxuICBpZiAoc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoKSB7XG4gICAgY29uc3QgdmF1bHRRdW90ZXMgPSBsb2FkUXVvdGVzRnJvbVZhdWx0KGFwcCwgc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoKTtcbiAgICBpZiAodmF1bHRRdW90ZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHBpY2tRdW90ZSh2YXVsdFF1b3Rlcywgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZhbGxiYWNrIHRvIGhhcmRjb2RlZCBxdW90ZXNcbiAgcmV0dXJuIHBpY2tRdW90ZShGQUxMQkFDS19RVU9URVMsIHNldHRpbmdzLCBvblNldHRpbmdzVXBkYXRlKTtcbn1cblxuZnVuY3Rpb24gcGlja1F1b3RlKFxuICBxdW90ZXM6IFF1b3RlW10sXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiBRdW90ZSB7XG4gIGlmIChxdW90ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJUaGUgdW5leGFtaW5lZCBsaWZlIGlzIG5vdCB3b3J0aCBsaXZpbmcuXCIsIGF0dHJpYnV0aW9uOiBcIlNvY3JhdGVzXCIgfTtcbiAgfVxuXG4gIC8vIEF2b2lkIHJlY2VudGx5IHNob3duIHF1b3Rlc1xuICBjb25zdCByZWNlbnRJZHMgPSBzZXR0aW5ncy5yZWNlbnRRdW90ZUlkcyA/PyBbXTtcbiAgY29uc3QgYXZhaWxhYmxlID0gcXVvdGVzXG4gICAgLm1hcCgocSwgaSkgPT4gKHsgcSwgaSB9KSlcbiAgICAuZmlsdGVyKCh7IGkgfSkgPT4gIXJlY2VudElkcy5pbmNsdWRlcyhpKSk7XG5cbiAgY29uc3QgcG9vbCA9IGF2YWlsYWJsZS5sZW5ndGggPiAwID8gYXZhaWxhYmxlIDogcXVvdGVzLm1hcCgocSwgaSkgPT4gKHsgcSwgaSB9KSk7XG4gIGNvbnN0IHBpY2sgPSBwb29sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wubGVuZ3RoKV07XG5cbiAgLy8gVHJhY2sgcmVjZW50IChrZWVwIGxhc3QgNSlcbiAgY29uc3QgbmV3UmVjZW50ID0gWy4uLnJlY2VudElkcywgcGljay5pXS5zbGljZSgtTWF0aC5taW4oNSwgTWF0aC5mbG9vcihxdW90ZXMubGVuZ3RoIC8gMikpKTtcbiAgb25TZXR0aW5nc1VwZGF0ZSh7XG4gICAgbGFzdFF1b3RlSW5kZXg6IHBpY2suaSxcbiAgICByZWNlbnRRdW90ZUlkczogbmV3UmVjZW50LFxuICB9KTtcblxuICByZXR1cm4gcGljay5xO1xufVxuXG5mdW5jdGlvbiBsb2FkUXVvdGVzRnJvbVZhdWx0KGFwcDogQXBwLCBmb2xkZXJQYXRoOiBzdHJpbmcpOiBRdW90ZVtdIHtcbiAgY29uc3QgcXVvdGVzOiBRdW90ZVtdID0gW107XG4gIGNvbnN0IGFic3RyYWN0RmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyUGF0aCk7XG4gIGlmICghYWJzdHJhY3RGaWxlKSByZXR1cm4gcXVvdGVzO1xuXG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoKGYpID0+XG4gICAgZi5wYXRoLnN0YXJ0c1dpdGgoZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiKVxuICApO1xuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IGNhY2hlID0gYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgIGlmICghY2FjaGUpIGNvbnRpbnVlO1xuXG4gICAgLy8gT25lIHF1b3RlIHBlciBmaWxlIChkZWZhdWx0IG1vZGUpXG4gICAgY29uc3QgbmFtZSA9IGZpbGUuYmFzZW5hbWU7XG4gICAgY29uc3QgcGFydHMgPSBzcGxpdEF0dHJpYnV0aW9uKG5hbWUpO1xuICAgIHF1b3Rlcy5wdXNoKHBhcnRzKTtcbiAgfVxuXG4gIHJldHVybiBxdW90ZXM7XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXR0cmlidXRpb24odGV4dDogc3RyaW5nKTogUXVvdGUge1xuICAvLyBDaGVjayBmb3IgZW0tZGFzaCBhdHRyaWJ1dGlvblxuICBjb25zdCBkYXNoSW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIFx1MjAxNCBcIik7XG4gIGlmIChkYXNoSW5kZXggPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRleHQuc2xpY2UoMCwgZGFzaEluZGV4KS50cmltKCksXG4gICAgICBhdHRyaWJ1dGlvbjogdGV4dC5zbGljZShkYXNoSW5kZXggKyAzKS50cmltKCksXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGh5cGhlbkluZGV4ID0gdGV4dC5sYXN0SW5kZXhPZihcIiAtIFwiKTtcbiAgaWYgKGh5cGhlbkluZGV4ID4gdGV4dC5sZW5ndGggKiAwLjUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGV4dC5zbGljZSgwLCBoeXBoZW5JbmRleCkudHJpbSgpLFxuICAgICAgYXR0cmlidXRpb246IHRleHQuc2xpY2UoaHlwaGVuSW5kZXggKyAzKS50cmltKCksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IHRleHQ6IHRleHQudHJpbSgpLCBhdHRyaWJ1dGlvbjogXCJcIiB9O1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgRGF5IFRpbWVsaW5lIENvbXBvbmVudFxuLy8gVmVydGljYWwgY29sb3JlZCB0aW1lbGluZSBvZiB0aGUgZGF5J3MgcGxhbm5lZCBhY3Rpdml0aWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIERheU1hcEVudHJ5LCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGF5VGltZWxpbmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIGNhbGxiYWNrczoge1xuICAgIG9uQWNjZXB0OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uU2tpcDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyRG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhclBvc3Rwb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNyZWF0ZUV2ZW50PzogKCkgPT4gdm9pZDtcbiAgfVxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kYXltYXBfdGl0bGUgPz8gXCJZT1VSIERBWVwiO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCBjdXJyZW50SG91ciA9IG5vdy5nZXRIb3VycygpICsgbm93LmdldE1pbnV0ZXMoKSAvIDYwO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFRpbWVsaW5lIGNhcmRcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkIG9sZW4tdGltZWxpbmUtY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBHZXQgZGF5IG1hcCBlbnRyaWVzXG4gIGNvbnN0IGVudHJpZXMgPSBlbmdpbmUuZ2V0RGF5TWFwKCk7XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1lbXB0eVwiLFxuICAgICAgdGV4dDogXCJObyBhY3Rpdml0aWVzIHNjaGVkdWxlZC4gQSByYXJlIGRheSBvZiByZXN0LlwiLFxuICAgIH0pO1xuICAgIHJlbmRlclRpbWVsaW5lRm9vdGVyKGNhcmQsIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzLm9uQ3JlYXRlRXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFRpbWVsaW5lIGNvbnRhaW5lclxuICBjb25zdCB0aW1lbGluZSA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmVcIiB9KTtcblxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICByZW5kZXJUaW1lbGluZUVudHJ5KFxuICAgICAgdGltZWxpbmUsIGVudHJ5LCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrc1xuICAgICk7XG4gIH1cblxuICAvLyBGb290ZXJcbiAgcmVuZGVyVGltZWxpbmVGb290ZXIoY2FyZCwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3Mub25DcmVhdGVFdmVudCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVsaW5lRW50cnkoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIGVudHJ5OiBEYXlNYXBFbnRyeSxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY3VycmVudEhvdXI6IG51bWJlcixcbiAgY2FsbGJhY2tzOiB7XG4gICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Ta2lwOiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJEb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyUG9zdHBvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgaXNDYWxlbmRhciA9IGVudHJ5LmlzQ2FsZW5kYXJUYXNrID09PSB0cnVlO1xuICBjb25zdCBjb2xvciA9IGlzQ2FsZW5kYXIgPyBcIiM1ZTdhOWFcIiA6IChzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tlbnRyeS5jYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCIpO1xuICBjb25zdCBpc0N1cnJlbnQgPSBjdXJyZW50SG91ciA+PSBlbnRyeS5zdGFydEhvdXIgJiYgY3VycmVudEhvdXIgPCBlbnRyeS5lbmRIb3VyO1xuICBjb25zdCBpc1Bhc3QgPSBjdXJyZW50SG91ciA+PSBlbnRyeS5lbmRIb3VyO1xuICBjb25zdCBpc0RvbmUgPSBlbnRyeS5zdGF0dXMgPT09IFwiZG9uZVwiO1xuICBjb25zdCBpc1NraXBwZWQgPSBlbnRyeS5zdGF0dXMgPT09IFwic2tpcHBlZFwiO1xuXG4gIC8vIERldGVybWluZSB2aXN1YWwgc3RhdGVcbiAgbGV0IHN0YXRlQ2xzID0gXCJvbGVuLXRpbWVsaW5lLWVudHJ5XCI7XG4gIGlmIChpc0NhbGVuZGFyKSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLWNhbGVuZGFyXCI7XG4gIGlmIChpc0RvbmUpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtZG9uZVwiO1xuICBlbHNlIGlmIChpc1NraXBwZWQpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtc2tpcHBlZFwiO1xuICBlbHNlIGlmIChpc0N1cnJlbnQpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtY3VycmVudFwiO1xuICBlbHNlIGlmIChpc1Bhc3QpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtcGFzdFwiO1xuXG4gIGNvbnN0IHJvdyA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IHN0YXRlQ2xzIH0pO1xuXG4gIC8vIENhdGVnb3J5IGNvbG9yIGJhciAoY2FsZW5kYXIgdGFza3MgZ2V0IGEgZGlzdGluY3QgZGFzaGVkIHN0eWxlKVxuICBjb25zdCBiYXIgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYmFyXCIgfSk7XG4gIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIGlmIChpc0NhbGVuZGFyICYmICFpc0RvbmUpIHtcbiAgICBiYXIuY2xhc3NMaXN0LmFkZChcIm9sZW4tdGltZWxpbmUtYmFyLWNhbGVuZGFyXCIpO1xuICB9XG4gIGlmIChpc0N1cnJlbnQgJiYgIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgYmFyLnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMTJweCAke2NvbG9yfWA7XG4gIH1cblxuICAvLyBDb250ZW50XG4gIGNvbnN0IGNvbnRlbnQgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtY29udGVudFwiIH0pO1xuXG4gIC8vIFRvcCBsaW5lOiB0aW1lICsgZHVyYXRpb24gKyBzb3VyY2UgYmFkZ2UgZm9yIGNhbGVuZGFyIHRhc2tzXG4gIGNvbnN0IHRpbWVMaW5lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS10aW1lXCIgfSk7XG4gIHRpbWVMaW5lLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0SG91cihlbnRyeS5zdGFydEhvdXIpfSBcdTIwMTMgJHtmb3JtYXRIb3VyKGVudHJ5LmVuZEhvdXIpfSBcdTAwQjcgJHtlbnRyeS5lc3RpbWF0ZWREdXJhdGlvbn1tYDtcblxuICBpZiAoaXNDYWxlbmRhciAmJiBlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgIGNvbnN0IGJhZGdlID0gdGltZUxpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtc291cmNlLWJhZGdlXCIgfSk7XG4gICAgc3dpdGNoIChlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIk5vdGVcIjsgYnJlYWs7XG4gICAgICBjYXNlIFwidGFza3MtcGx1Z2luXCI6IGJhZGdlLnRleHRDb250ZW50ID0gXCJUYXNrXCI7IGJyZWFrO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIlF1aWNrXCI7IGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2aXR5IGxpbmU6IGVtb2ppICsgbmFtZVxuICBjb25zdCBhY3RMaW5lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1hY3Rpdml0eVwiIH0pO1xuICBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLWVtb2ppXCIsIHRleHQ6IGVudHJ5LmVtb2ppIH0pO1xuICBjb25zdCBuYW1lRWwgPSBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtbmFtZVwiLFxuICAgIHRleHQ6IGVudHJ5LmFjdGl2aXR5TmFtZSxcbiAgfSk7XG5cbiAgLy8gU3RyaWtldGhyb3VnaCBmb3IgZG9uZS9za2lwcGVkXG4gIGlmIChpc0RvbmUgfHwgaXNTa2lwcGVkKSB7XG4gICAgbmFtZUVsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICBuYW1lRWwuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gIH1cblxuICAvLyBTdGF0dXMgaW5kaWNhdG9yXG4gIGlmIChpc0RvbmUpIHtcbiAgICBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLWNoZWNrXCIsIHRleHQ6IFwiXFx1MjcxM1wiIH0pO1xuICB9IGVsc2UgaWYgKGlzU2tpcHBlZCkge1xuICAgIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtc2tpcC1tYXJrXCIsIHRleHQ6IFwiXFx1MjAxM1wiIH0pO1xuICB9XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgaWYgKCFpc0RvbmUgJiYgIWlzU2tpcHBlZCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWFjdGlvbnNcIiB9KTtcblxuICAgIGlmIChpc0NhbGVuZGFyKSB7XG4gICAgICAvLyBDYWxlbmRhciB0YXNrczogRG9uZSArIFBvc3Rwb25lXG4gICAgICBjb25zdCBkb25lQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1hY2NlcHRcIixcbiAgICAgICAgdGV4dDogXCJEb25lXCIsXG4gICAgICB9KTtcbiAgICAgIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vbkNhbGVuZGFyRG9uZT8uKGVudHJ5KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwb3N0cG9uZUJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tcG9zdHBvbmVcIixcbiAgICAgICAgdGV4dDogXCJcXHUyM0U5XCIsXG4gICAgICAgIGF0dHI6IHsgdGl0bGU6IFwiUG9zdHBvbmUgdG8gdG9tb3Jyb3dcIiB9LFxuICAgICAgfSk7XG4gICAgICBwb3N0cG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQ2FsZW5kYXJQb3N0cG9uZT8uKGVudHJ5KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBY3Rpdml0eSBlbnRyaWVzOiBCZWdpbi9Eb25lICsgU2tpcFxuICAgICAgY29uc3QgYWNjZXB0QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1hY2NlcHRcIixcbiAgICAgICAgdGV4dDogaXNDdXJyZW50ID8gXCJCZWdpblwiIDogXCJEb25lXCIsXG4gICAgICB9KTtcbiAgICAgIGFjY2VwdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQWNjZXB0KGVudHJ5LmFjdGl2aXR5SWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNraXBCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLXNraXBcIixcbiAgICAgICAgdGV4dDogXCJTa2lwXCIsXG4gICAgICB9KTtcbiAgICAgIHNraXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vblNraXAoZW50cnkuYWN0aXZpdHlJZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBDdXJyZW50IHRpbWUgaW5kaWNhdG9yXG4gIGlmIChpc0N1cnJlbnQgJiYgIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgY29uc3QgaW5kaWNhdG9yID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLW5vd1wiIH0pO1xuICAgIGNvbnN0IHByb2dyZXNzID0gKGN1cnJlbnRIb3VyIC0gZW50cnkuc3RhcnRIb3VyKSAvIChlbnRyeS5lbmRIb3VyIC0gZW50cnkuc3RhcnRIb3VyKTtcbiAgICBpbmRpY2F0b3Iuc3R5bGUudG9wID0gYCR7TWF0aC5taW4oMTAwLCBNYXRoLm1heCgwLCBwcm9ncmVzcyAqIDEwMCkpfSVgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVsaW5lRm9vdGVyKFxuICBjYXJkOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY3VycmVudEhvdXI6IG51bWJlcixcbiAgb25DcmVhdGVFdmVudD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBlbmRPZkRheSA9IHNldHRpbmdzLmRldkNvbmZpZy5ldmVuaW5nRW5kO1xuICBjb25zdCByZW1haW5pbmcgPSBNYXRoLm1heCgwLCBlbmRPZkRheSAtIGN1cnJlbnRIb3VyKTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHJlbWFpbmluZyk7XG4gIGNvbnN0IG1pbnMgPSBNYXRoLnJvdW5kKChyZW1haW5pbmcgLSBob3VycykgKiA2MCk7XG5cbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgY29uc3QgZm9vdGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1mb290ZXJcIiB9KTtcbiAgZm9vdGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi10aW1lbGluZS1mb290ZXItdGV4dFwiLFxuICAgIHRleHQ6IGBFbmQgb2YgZGF5OiAke2hvdXJzfWggJHttaW5zfW0gcmVtYWluaW5nYCxcbiAgfSk7XG5cbiAgaWYgKG9uQ3JlYXRlRXZlbnQpIHtcbiAgICBjb25zdCBidG4gPSBmb290ZXIuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWNyZWF0ZVwiLFxuICAgICAgdGV4dDogXCIrIENyZWF0ZSBldmVudFwiLFxuICAgIH0pO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gb25DcmVhdGVFdmVudCgpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRIb3VyKGg6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihoKTtcbiAgY29uc3QgbWlucyA9IE1hdGgucm91bmQoKGggLSBob3VycykgKiA2MCk7XG4gIGNvbnN0IHBlcmlvZCA9IGhvdXJzID49IDEyID8gXCJwbVwiIDogXCJhbVwiO1xuICBjb25zdCBkaXNwbGF5SG91ciA9IGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzO1xuICBpZiAobWlucyA9PT0gMCkgcmV0dXJuIGAke2Rpc3BsYXlIb3VyfSR7cGVyaW9kfWA7XG4gIHJldHVybiBgJHtkaXNwbGF5SG91cn06JHtTdHJpbmcobWlucykucGFkU3RhcnQoMiwgXCIwXCIpfSR7cGVyaW9kfWA7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBTdHJlbmd0aCBIZWF0bWFwIENvbXBvbmVudFxuLy8gSW50ZXJhY3RpdmUgbXVzY2xlIGZpZ3VyZSBzaG93aW5nIHdvcmtvdXQgaW50ZW5zaXR5IHBlciBtdXNjbGVcbi8vIENsaWNrYWJsZSBtdXNjbGVzIG9wZW4gcHJvZ3Jlc3MgZ3JhcGhzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENvbXBsZXRpb25NYXAsIEdlbmRlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHR5cGUgeyBNdXNjbGVHcm91cElkIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgTVVTQ0xFX0dST1VQX0xBQkVMUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuLy8gLS0tIE11c2NsZSByZWdpb24gaGl0LWJveGVzIChwZXJjZW50YWdlLWJhc2VkIGZvciBmcm9udC9iYWNrIHZpZXdzKSAtLS1cbi8vIEVhY2ggcmVnaW9uOiBbeCUsIHklLCB3aWR0aCUsIGhlaWdodCVdIHJlbGF0aXZlIHRvIGZpZ3VyZSBib3VuZGluZyBib3hcblxuaW50ZXJmYWNlIE11c2NsZVJlZ2lvbiB7XG4gIGlkOiBNdXNjbGVHcm91cElkO1xuICBmcm9udD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIGJhY2s/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyB3OiBudW1iZXI7IGg6IG51bWJlciB9O1xufVxuXG5jb25zdCBNVVNDTEVfUkVHSU9OUzogTXVzY2xlUmVnaW9uW10gPSBbXG4gIC8vIEhlYWQvbmVjayBhcmVhXG4gIHsgaWQ6IFwibmVja1wiLCAgICAgICBmcm9udDogeyB4OiA0MCwgeTogOCwgdzogMjAsIGg6IDUgfSB9LFxuICB7IGlkOiBcInRyYXBzXCIsICAgICAgYmFjazogIHsgeDogMzAsIHk6IDExLCB3OiA0MCwgaDogNyB9IH0sXG4gIC8vIFVwcGVyIGJvZHlcbiAgeyBpZDogXCJzaG91bGRlcnNcIiwgIGZyb250OiB7IHg6IDE4LCB5OiAxNCwgdzogMTQsIGg6IDggfSwgICBiYWNrOiB7IHg6IDE4LCB5OiAxNCwgdzogMTQsIGg6IDggfSB9LFxuICB7IGlkOiBcImNoZXN0XCIsICAgICAgZnJvbnQ6IHsgeDogMzAsIHk6IDE2LCB3OiA0MCwgaDogMTAgfSB9LFxuICB7IGlkOiBcImxhdHNcIiwgICAgICAgYmFjazogIHsgeDogMjQsIHk6IDE5LCB3OiA1MiwgaDogMTIgfSB9LFxuICB7IGlkOiBcImJhY2tcIiwgICAgICAgYmFjazogIHsgeDogMzIsIHk6IDMyLCB3OiAzNiwgaDogMTAgfSB9LFxuICAvLyBBcm1zXG4gIHsgaWQ6IFwiYmljZXBzXCIsICAgICBmcm9udDogeyB4OiAxNCwgeTogMjMsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwidHJpY2Vwc1wiLCAgICBiYWNrOiAgeyB4OiAxNCwgeTogMjMsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwiZm9yZWFybXNcIiwgICBmcm9udDogeyB4OiAxMCwgeTogMzYsIHc6IDEyLCBoOiAxMiB9LCAgYmFjazogeyB4OiAxMCwgeTogMzYsIHc6IDEyLCBoOiAxMiB9IH0sXG4gIC8vIENvcmVcbiAgeyBpZDogXCJhYnNcIiwgICAgICAgIGZyb250OiB7IHg6IDM1LCB5OiAyNywgdzogMzAsIGg6IDE2IH0gfSxcbiAgeyBpZDogXCJvYmxpcXVlc1wiLCAgIGZyb250OiB7IHg6IDI0LCB5OiAzMCwgdzogMTAsIGg6IDEyIH0gfSxcbiAgeyBpZDogXCJnbHV0ZXNcIiwgICAgIGJhY2s6ICB7IHg6IDMwLCB5OiA0MywgdzogNDAsIGg6IDEwIH0gfSxcbiAgLy8gTGVnc1xuICB7IGlkOiBcInF1YWRzXCIsICAgICAgZnJvbnQ6IHsgeDogMjUsIHk6IDQ4LCB3OiA1MCwgaDogMTggfSB9LFxuICB7IGlkOiBcImhhbXN0cmluZ3NcIiwgYmFjazogIHsgeDogMjUsIHk6IDU0LCB3OiA1MCwgaDogMTYgfSB9LFxuICB7IGlkOiBcImNhbHZlc1wiLCAgICAgZnJvbnQ6IHsgeDogMjgsIHk6IDcyLCB3OiA0NCwgaDogMTQgfSwgIGJhY2s6IHsgeDogMjgsIHk6IDcyLCB3OiA0NCwgaDogMTQgfSB9LFxuXTtcblxuZXhwb3J0IGludGVyZmFjZSBIZWF0bWFwQ2FsbGJhY2tzIHtcbiAgb25NdXNjbGVDbGljazogKG11c2NsZUlkOiBNdXNjbGVHcm91cElkKSA9PiB2b2lkO1xuICBvblByb2dyZXNzQ2xpY2s6ICgpID0+IHZvaWQ7XG4gIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyU3RyZW5ndGhIZWF0bWFwKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiBIZWF0bWFwQ2FsbGJhY2tzXG4pOiB2b2lkIHtcbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLXNlY3Rpb25cIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gRmlndXJlIGNvbnRhaW5lciBcdTIwMTQgZnJvbnQgYW5kIGJhY2sgdmlld3Mgc2lkZSBieSBzaWRlXG4gIGNvbnN0IGdlbmRlciA9IHNldHRpbmdzLnBlcnNvbmFsU3RhdHMuZ2VuZGVyO1xuICBjb25zdCBmaWd1cmVXcmFwID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWZpZ3VyZXNcIiB9KTtcblxuICAvLyBHYXRoZXIgbXVzY2xlIGludGVuc2l0eSBkYXRhIGZyb20gd29ya291dCBjb21wbGV0aW9uc1xuICBjb25zdCBtdXNjbGVEYXRhID0gZ2F0aGVyTXVzY2xlSW50ZW5zaXR5KGVuZ2luZSwgY29tcGxldGlvbkRhdGEsIHNldHRpbmdzKTtcblxuICAvLyBGcm9udCB2aWV3XG4gIHJlbmRlck11c2NsZUZpZ3VyZShmaWd1cmVXcmFwLCBcImZyb250XCIsIGdlbmRlciwgbXVzY2xlRGF0YSwgY2FsbGJhY2tzLm9uTXVzY2xlQ2xpY2spO1xuXG4gIC8vIEJhY2sgdmlld1xuICByZW5kZXJNdXNjbGVGaWd1cmUoZmlndXJlV3JhcCwgXCJiYWNrXCIsIGdlbmRlciwgbXVzY2xlRGF0YSwgY2FsbGJhY2tzLm9uTXVzY2xlQ2xpY2spO1xuXG4gIC8vIEJ1dHRvbnMgYmVsb3cgdGhlIGZpZ3VyZVxuICBjb25zdCBhY3Rpb25zID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBwcm9ncmVzc0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1oZWF0bWFwLWJ0blwiLFxuICAgIHRleHQ6IFwiUHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjYWxsYmFja3Mub25Qcm9ncmVzc0NsaWNrKCkpO1xuXG4gIGNvbnN0IHdvcmtvdXRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLWhlYXRtYXAtYnRuXCIsXG4gICAgdGV4dDogXCJTdGFydCBOZXcgV29ya291dFwiLFxuICB9KTtcbiAgd29ya291dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2tzLm9uU3RhcnRXb3Jrb3V0KCkpO1xufVxuXG4vLyAtLS0gRmlndXJlIFJlbmRlcmluZyAtLS1cblxuZnVuY3Rpb24gcmVuZGVyTXVzY2xlRmlndXJlKFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICB2aWV3OiBcImZyb250XCIgfCBcImJhY2tcIixcbiAgZ2VuZGVyOiBHZW5kZXIsXG4gIG11c2NsZURhdGE6IE1hcDxNdXNjbGVHcm91cElkLCBudW1iZXI+LFxuICBvbk11c2NsZUNsaWNrOiAoaWQ6IE11c2NsZUdyb3VwSWQpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBmaWd1cmUgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1maWd1cmVcIiB9KTtcblxuICAvLyBMYWJlbFxuICBmaWd1cmUuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlYXRtYXAtdmlldy1sYWJlbFwiLFxuICAgIHRleHQ6IHZpZXcgPT09IFwiZnJvbnRcIiA/IFwiRnJvbnRcIiA6IFwiQmFja1wiLFxuICB9KTtcblxuICAvLyBTVkcgY29udGFpbmVyXG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyMDAgNDAwXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtc3ZnXCIpO1xuXG4gIC8vIERyYXcgYm9keSBzaWxob3VldHRlXG4gIGRyYXdCb2R5U2lsaG91ZXR0ZShzdmcsIHN2Z05TLCBnZW5kZXIsIHZpZXcpO1xuXG4gIC8vIERyYXcgbXVzY2xlIHJlZ2lvbnMgYXMgY29sb3JlZCBvdmVybGF5c1xuICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiBNVVNDTEVfUkVHSU9OUykge1xuICAgIGNvbnN0IGJvdW5kcyA9IHZpZXcgPT09IFwiZnJvbnRcIiA/IHJlZ2lvbi5mcm9udCA6IHJlZ2lvbi5iYWNrO1xuICAgIGlmICghYm91bmRzKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGludGVuc2l0eSA9IG11c2NsZURhdGEuZ2V0KHJlZ2lvbi5pZCkgPz8gMDtcblxuICAgIC8vIE1hcCBwZXJjZW50YWdlIGNvb3JkcyB0byBTVkcgdmlld0JveFxuICAgIGNvbnN0IHggPSBib3VuZHMueCAqIDI7XG4gICAgY29uc3QgeSA9IGJvdW5kcy55ICogNDtcbiAgICBjb25zdCB3ID0gYm91bmRzLncgKiAyO1xuICAgIGNvbnN0IGggPSBib3VuZHMuaCAqIDQ7XG5cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInJlY3RcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyh5KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodykpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhoKSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjZcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeVwiLCBcIjZcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGdldEludGVuc2l0eUNvbG9yKGludGVuc2l0eSkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBpbnRlbnNpdHkgPiAwID8gXCIwLjdcIiA6IFwiMC4xNVwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1oZWF0bWFwLW11c2NsZVwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtbXVzY2xlXCIsIHJlZ2lvbi5pZCk7XG5cbiAgICAvLyBUb29sdGlwICsgY2xpY2tcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0aXRsZVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGAke01VU0NMRV9HUk9VUF9MQUJFTFNbcmVnaW9uLmlkXX0ke2ludGVuc2l0eSA+IDAgPyBgIFx1MjAxNCAke01hdGgucm91bmQoaW50ZW5zaXR5ICogMTAwKX0lYCA6IFwiXCJ9YDtcbiAgICByZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIHJlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgb25NdXNjbGVDbGljayhyZWdpb24uaWQpO1xuICAgIH0pO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHJlY3QpO1xuXG4gICAgLy8gQWxzbyBtaXJyb3IgZm9yIHJpZ2h0IHNpZGUgKHNob3VsZGVycywgYmljZXBzLCB0cmljZXBzLCBmb3JlYXJtcywgcXVhZHMsIGhhbXN0cmluZ3MsIGNhbHZlcylcbiAgICBpZiAoaXNTeW1tZXRyaWNNdXNjbGUocmVnaW9uLmlkKSAmJiBib3VuZHMueCA8IDUwKSB7XG4gICAgICBjb25zdCBtaXJyb3JYID0gMjAwIC0geCAtIHc7XG4gICAgICBjb25zdCBtaXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyhtaXJyb3JYKSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhoKSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInJ5XCIsIFwiNlwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGdldEludGVuc2l0eUNvbG9yKGludGVuc2l0eSkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgaW50ZW5zaXR5ID4gMCA/IFwiMC43XCIgOiBcIjAuMTVcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtbXVzY2xlXCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImRhdGEtbXVzY2xlXCIsIHJlZ2lvbi5pZCk7XG5cbiAgICAgIGNvbnN0IG1pcnJvclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRpdGxlXCIpO1xuICAgICAgbWlycm9yVGl0bGUudGV4dENvbnRlbnQgPSBgJHtNVVNDTEVfR1JPVVBfTEFCRUxTW3JlZ2lvbi5pZF19JHtpbnRlbnNpdHkgPiAwID8gYCBcdTIwMTQgJHtNYXRoLnJvdW5kKGludGVuc2l0eSAqIDEwMCl9JWAgOiBcIlwifWA7XG4gICAgICBtaXJyb3IuYXBwZW5kQ2hpbGQobWlycm9yVGl0bGUpO1xuXG4gICAgICBtaXJyb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIG9uTXVzY2xlQ2xpY2socmVnaW9uLmlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBzdmcuYXBwZW5kQ2hpbGQobWlycm9yKTtcbiAgICB9XG4gIH1cblxuICBmaWd1cmUuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuZnVuY3Rpb24gaXNTeW1tZXRyaWNNdXNjbGUoaWQ6IE11c2NsZUdyb3VwSWQpOiBib29sZWFuIHtcbiAgcmV0dXJuIFtcInNob3VsZGVyc1wiLCBcImJpY2Vwc1wiLCBcInRyaWNlcHNcIiwgXCJmb3JlYXJtc1wiLCBcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImNhbHZlc1wiLCBcIm9ibGlxdWVzXCJdLmluY2x1ZGVzKGlkKTtcbn1cblxuZnVuY3Rpb24gZHJhd0JvZHlTaWxob3VldHRlKHN2ZzogU1ZHU1ZHRWxlbWVudCwgbnM6IHN0cmluZywgZ2VuZGVyOiBHZW5kZXIsIHZpZXc6IFwiZnJvbnRcIiB8IFwiYmFja1wiKTogdm9pZCB7XG4gIC8vIFNpbXBsaWZpZWQgaHVtYW4gc2lsaG91ZXR0ZSBhcyBhIHBhdGhcbiAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xuXG4gIC8vIEJhc2Ugc2lsaG91ZXR0ZSBcdTIwMTQgc2xpZ2h0bHkgZGlmZmVyZW50IHByb3BvcnRpb25zIGJ5IGdlbmRlclxuICBjb25zdCBpc0ZlbWFsZSA9IGdlbmRlciA9PT0gXCJmZW1hbGVcIjtcbiAgY29uc3Qgc2hvdWxkZXJXID0gaXNGZW1hbGUgPyA2MiA6IDY4O1xuICBjb25zdCBoaXBXID0gaXNGZW1hbGUgPyA1OCA6IDQ4O1xuICBjb25zdCB3YWlzdFcgPSBpc0ZlbWFsZSA/IDM4IDogNDI7XG5cbiAgLy8gQnVpbGQgc2lsaG91ZXR0ZSBwYXRoXG4gIGNvbnN0IGQgPSBbXG4gICAgLy8gSGVhZFxuICAgIGBNIDEwMCAxMGAsXG4gICAgYGEgMTYgMTggMCAxIDEgMC4wMSAwYCxcbiAgICAvLyBOZWNrXG4gICAgYE0gOTIgNDQgTCA5MiA1MmAsXG4gICAgYE0gMTA4IDQ0IEwgMTA4IDUyYCxcbiAgICAvLyBTaG91bGRlcnNcbiAgICBgTSA5MiA1MiBMICR7MTAwIC0gc2hvdWxkZXJXfSA1OGAsXG4gICAgYE0gMTA4IDUyIEwgJHsxMDAgKyBzaG91bGRlcld9IDU4YCxcbiAgICAvLyBUb3JzbyBsZWZ0XG4gICAgYE0gJHsxMDAgLSBzaG91bGRlcld9IDU4IEwgJHsxMDAgLSBzaG91bGRlclcgKyA0fSAxMDBgLFxuICAgIGBMICR7MTAwIC0gd2Fpc3RXfSAxNDBgLFxuICAgIGBMICR7MTAwIC0gaGlwV30gMTgwYCxcbiAgICAvLyBUb3JzbyByaWdodFxuICAgIGBNICR7MTAwICsgc2hvdWxkZXJXfSA1OCBMICR7MTAwICsgc2hvdWxkZXJXIC0gNH0gMTAwYCxcbiAgICBgTCAkezEwMCArIHdhaXN0V30gMTQwYCxcbiAgICBgTCAkezEwMCArIGhpcFd9IDE4MGAsXG4gICAgLy8gQXJtcyBsZWZ0XG4gICAgYE0gJHsxMDAgLSBzaG91bGRlcld9IDU4IEwgJHsxMDAgLSBzaG91bGRlclcgLSAxMn0gMTEwYCxcbiAgICBgTCAkezEwMCAtIHNob3VsZGVyVyAtIDE2fSAxNzBgLFxuICAgIGBNICR7MTAwIC0gc2hvdWxkZXJXIC0gNn0gNTggTCAkezEwMCAtIHNob3VsZGVyVyAtIDE4fSAxMTBgLFxuICAgIGBMICR7MTAwIC0gc2hvdWxkZXJXIC0gMjJ9IDE3MGAsXG4gICAgLy8gQXJtcyByaWdodFxuICAgIGBNICR7MTAwICsgc2hvdWxkZXJXfSA1OCBMICR7MTAwICsgc2hvdWxkZXJXICsgMTJ9IDExMGAsXG4gICAgYEwgJHsxMDAgKyBzaG91bGRlclcgKyAxNn0gMTcwYCxcbiAgICBgTSAkezEwMCArIHNob3VsZGVyVyArIDZ9IDU4IEwgJHsxMDAgKyBzaG91bGRlclcgKyAxOH0gMTEwYCxcbiAgICBgTCAkezEwMCArIHNob3VsZGVyVyArIDIyfSAxNzBgLFxuICAgIC8vIExlZ3MgbGVmdFxuICAgIGBNICR7MTAwIC0gaGlwV30gMTgwIEwgJHsxMDAgLSBoaXBXICsgNn0gMjgwYCxcbiAgICBgTCAkezEwMCAtIGhpcFcgKyAxMH0gMzYwYCxcbiAgICBgTSAkezEwMCAtIDZ9IDE4MCBMICR7MTAwIC0gMTJ9IDI4MGAsXG4gICAgYEwgJHsxMDAgLSAxNn0gMzYwYCxcbiAgICAvLyBMZWdzIHJpZ2h0XG4gICAgYE0gJHsxMDAgKyBoaXBXfSAxODAgTCAkezEwMCArIGhpcFcgLSA2fSAyODBgLFxuICAgIGBMICR7MTAwICsgaGlwVyAtIDEwfSAzNjBgLFxuICAgIGBNICR7MTAwICsgNn0gMTgwIEwgJHsxMDAgKyAxMn0gMjgwYCxcbiAgICBgTCAkezEwMCArIDE2fSAzNjBgLFxuICBdLmpvaW4oXCIgXCIpO1xuXG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBkKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuMTIpXCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG59XG5cbi8vIC0tLSBNdXNjbGUgSW50ZW5zaXR5IENhbGN1bGF0aW9uIC0tLVxuXG5mdW5jdGlvbiBnYXRoZXJNdXNjbGVJbnRlbnNpdHkoXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3Ncbik6IE1hcDxNdXNjbGVHcm91cElkLCBudW1iZXI+IHtcbiAgY29uc3QgZGF0YSA9IG5ldyBNYXA8TXVzY2xlR3JvdXBJZCwgbnVtYmVyPigpO1xuXG4gIC8vIFBhcnNlIHdvcmtvdXQgbm90ZXMgZm9yIG11c2NsZSBncm91cCBtZW50aW9uc1xuICAvLyBMb29rIGF0IHRoZSBsYXN0IDMwIGRheXMgb2Ygd29ya291dCBjb21wbGV0aW9uc1xuICBjb25zdCB3b3Jrb3V0QWN0aXZpdHkgPSBzZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IFwid29ya291dFwiKTtcbiAgaWYgKCF3b3Jrb3V0QWN0aXZpdHkpIHJldHVybiBkYXRhO1xuXG4gIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbd29ya291dEFjdGl2aXR5LmlkXSA/PyBbXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGhpcnR5RGF5c0FnbyA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSAzMCAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gIC8vIENvdW50IGNvbXBsZXRpb25zIGluIHRoZSBsYXN0IDMwIGRheXMgYXMgYSBwcm94eSBmb3Igb3ZlcmFsbCBhY3Rpdml0eVxuICBjb25zdCByZWNlbnRDb21wbGV0aW9ucyA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICByZXR1cm4gZCA+PSB0aGlydHlEYXlzQWdvO1xuICB9KS5sZW5ndGg7XG5cbiAgaWYgKHJlY2VudENvbXBsZXRpb25zID09PSAwKSByZXR1cm4gZGF0YTtcblxuICAvLyBTaW5jZSB3ZSBjYW4ndCBwYXJzZSB3aGljaCBtdXNjbGVzIHdlcmUgdHJhaW5lZCBmcm9tIGZyb250bWF0dGVyIGFsb25lLFxuICAvLyB1c2Ugd29ya291dCBmcmVxdWVuY3kgYXMgYSB1bmlmb3JtIGJhc2UgaW50ZW5zaXR5IGFuZCBmcm9udG1hdHRlclxuICAvLyBtdXNjbGVfZ3JvdXBzIGZpZWxkIGlmIGF2YWlsYWJsZVxuICBjb25zdCBiYXNlSW50ZW5zaXR5ID0gTWF0aC5taW4oMSwgcmVjZW50Q29tcGxldGlvbnMgLyAyMCk7XG5cbiAgLy8gU2V0IGJhc2UgZm9yIGFsbCBtdXNjbGUgZ3JvdXBzIHByb3BvcnRpb25hbCB0byB3b3Jrb3V0IGZyZXF1ZW5jeVxuICBjb25zdCBhbGxNdXNjbGVzOiBNdXNjbGVHcm91cElkW10gPSBbXG4gICAgXCJjaGVzdFwiLCBcImJhY2tcIiwgXCJzaG91bGRlcnNcIiwgXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIixcbiAgICBcImFic1wiLCBcIm9ibGlxdWVzXCIsIFwicXVhZHNcIiwgXCJoYW1zdHJpbmdzXCIsIFwiZ2x1dGVzXCIsIFwiY2FsdmVzXCIsXG4gICAgXCJ0cmFwc1wiLCBcImxhdHNcIiwgXCJuZWNrXCIsXG4gIF07XG5cbiAgZm9yIChjb25zdCBtIG9mIGFsbE11c2NsZXMpIHtcbiAgICBkYXRhLnNldChtLCBiYXNlSW50ZW5zaXR5ICogMC41KTtcbiAgfVxuXG4gIHJldHVybiBkYXRhO1xufVxuXG4vLyAtLS0gQ29sb3IgTWFwcGluZyAtLS1cblxuZnVuY3Rpb24gZ2V0SW50ZW5zaXR5Q29sb3IoaW50ZW5zaXR5OiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoaW50ZW5zaXR5IDw9IDApIHJldHVybiBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIjtcbiAgaWYgKGludGVuc2l0eSA8IDAuMykgcmV0dXJuIFwiIzJkNGExZVwiOyAgLy8gY29vbCBncmVlblxuICBpZiAoaW50ZW5zaXR5IDwgMC42KSByZXR1cm4gXCIjNWE4YTJlXCI7ICAvLyBtZWRpdW0gZ3JlZW5cbiAgaWYgKGludGVuc2l0eSA8IDAuOCkgcmV0dXJuIFwiI2Q0YTg0M1wiOyAgLy8gd2FybSBnb2xkXG4gIHJldHVybiBcIiNlOGMzNWFcIjsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYnJpZ2h0IGdvbGRcbn1cblxuLy8gLS0tIE11c2NsZSBQcm9ncmVzcyBQb3B1cCAtLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dNdXNjbGVQcm9ncmVzc1BvcHVwKFxuICBtdXNjbGVJZDogTXVzY2xlR3JvdXBJZCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXBcbik6IHZvaWQge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldCBvbGVuLXByb2dyZXNzLXNoZWV0XCIgfSk7XG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIGNvbnN0IGxhYmVsID0gTVVTQ0xFX0dST1VQX0xBQkVMU1ttdXNjbGVJZF07XG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBNb250aGx5IHByb2dyZXNzIGNoYXJ0IChzaW1wbGUgYmFyIGNoYXJ0KVxuICBjb25zdCBjaGFydENvbnRhaW5lciA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWNoYXJ0XCIgfSk7XG4gIHJlbmRlclNpbXBsZUJhckNoYXJ0KGNoYXJ0Q29udGFpbmVyLCBtdXNjbGVJZCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuXG4gIC8vIFRvZ2dsZSBmb3IgeWVhcmx5IHZpZXdcbiAgY29uc3QgdG9nZ2xlUm93ID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtdG9nZ2xlXCIgfSk7XG4gIGNvbnN0IG1vbnRoQnRuID0gdG9nZ2xlUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIixcbiAgICB0ZXh0OiBcIk1vbnRobHlcIixcbiAgfSk7XG4gIGNvbnN0IHllYXJCdG4gPSB0b2dnbGVSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCIsXG4gICAgdGV4dDogXCJZZWFybHlcIixcbiAgfSk7XG5cbiAgbW9udGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFydENvbnRhaW5lci5lbXB0eSgpO1xuICAgIHJlbmRlclNpbXBsZUJhckNoYXJ0KGNoYXJ0Q29udGFpbmVyLCBtdXNjbGVJZCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgICB5ZWFyQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICB9KTtcblxuICB5ZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhcnRDb250YWluZXIuZW1wdHkoKTtcbiAgICByZW5kZXJTaW1wbGVCYXJDaGFydChjaGFydENvbnRhaW5lciwgbXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJ5ZWFyXCIpO1xuICAgIHllYXJCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICB9KTtcblxuICAvLyBDbG9zZSBvbiBvdmVybGF5IGNsaWNrXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVBvcHVwKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKTogdm9pZCB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG59XG5cbi8vIC0tLSBPdmVyYWxsIFByb2dyZXNzIFBvcHVwIC0tLVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd092ZXJhbGxQcm9ncmVzc1BvcHVwKFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcFxuKTogdm9pZCB7XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0IG9sZW4tcHJvZ3Jlc3Mtc2hlZXRcIiB9KTtcbiAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiU3RyZW5ndGggUHJvZ3Jlc3NcIiB9KTtcblxuICAvLyBUYWIgdG9nZ2xlXG4gIGNvbnN0IHRvZ2dsZVJvdyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLXRvZ2dsZVwiIH0pO1xuICBjb25zdCBtb250aEJ0biA9IHRvZ2dsZVJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCIsXG4gICAgdGV4dDogXCJNb250aGx5XCIsXG4gIH0pO1xuICBjb25zdCB5ZWFyQnRuID0gdG9nZ2xlUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiLFxuICAgIHRleHQ6IFwiWWVhcmx5XCIsXG4gIH0pO1xuXG4gIC8vIENoYXJ0IDE6IE92ZXJhbGwgc3RyZW5ndGggKGFsbCBleGVyY2lzZXMgY29tYmluZWQgYXZlcmFnZSlcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXByb2dyZXNzLXN1YnRpdGxlXCIsXG4gICAgdGV4dDogXCJPdmVyYWxsIFN0cmVuZ3RoXCIsXG4gIH0pO1xuICBjb25zdCBvdmVyYWxsQ2hhcnQgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1jaGFydFwiIH0pO1xuICByZW5kZXJPdmVyYWxsU3RyZW5ndGhDaGFydChvdmVyYWxsQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcblxuICAvLyBDaGFydCAyOiBQZXItbXVzY2xlIGJyZWFrZG93biAobXVsdGktbGluZSlcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXByb2dyZXNzLXN1YnRpdGxlXCIsXG4gICAgdGV4dDogXCJCeSBNdXNjbGUgR3JvdXBcIixcbiAgfSk7XG4gIGNvbnN0IG11c2NsZUNoYXJ0ID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtY2hhcnRcIiB9KTtcbiAgcmVuZGVyTXVzY2xlQnJlYWtkb3duQ2hhcnQobXVzY2xlQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcblxuICBtb250aEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJhbGxDaGFydC5lbXB0eSgpO1xuICAgIG11c2NsZUNoYXJ0LmVtcHR5KCk7XG4gICAgcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQob3ZlcmFsbENoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG4gICAgcmVuZGVyTXVzY2xlQnJlYWtkb3duQ2hhcnQobXVzY2xlQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcbiAgICBtb250aEJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gICAgeWVhckJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgfSk7XG5cbiAgeWVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG92ZXJhbGxDaGFydC5lbXB0eSgpO1xuICAgIG11c2NsZUNoYXJ0LmVtcHR5KCk7XG4gICAgcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQob3ZlcmFsbENoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwieWVhclwiKTtcbiAgICByZW5kZXJNdXNjbGVCcmVha2Rvd25DaGFydChtdXNjbGVDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcInllYXJcIik7XG4gICAgeWVhckJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gICAgbW9udGhCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gIH0pO1xuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVBvcHVwKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKTogdm9pZCB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gIH1cblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG59XG5cbi8vIC0tLSBDaGFydCBSZW5kZXJpbmcgSGVscGVycyAtLS1cblxuZnVuY3Rpb24gcmVuZGVyU2ltcGxlQmFyQ2hhcnQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIG11c2NsZUlkOiBNdXNjbGVHcm91cElkLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcCxcbiAgcGVyaW9kOiBcIm1vbnRoXCIgfCBcInllYXJcIlxuKTogdm9pZCB7XG4gIGNvbnN0IHdvcmtvdXRBY3Rpdml0eSA9IHNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gXCJ3b3Jrb3V0XCIpO1xuICBpZiAoIXdvcmtvdXRBY3Rpdml0eSkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXByb2dyZXNzLWVtcHR5XCIsIHRleHQ6IFwiTm8gd29ya291dCBkYXRhIGF2YWlsYWJsZVwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbd29ya291dEFjdGl2aXR5LmlkXSA/PyBbXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgbGFiZWxzOiBzdHJpbmdbXSA9IFtdO1xuICBjb25zdCB2YWx1ZXM6IG51bWJlcltdID0gW107XG5cbiAgaWYgKHBlcmlvZCA9PT0gXCJtb250aFwiKSB7XG4gICAgLy8gTGFzdCAzMCBkYXlzLCBncm91cGVkIGJ5IHdlZWtcbiAgICBmb3IgKGxldCB3ID0gMzsgdyA+PSAwOyB3LS0pIHtcbiAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtFbmQuZ2V0VGltZSgpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgY29uc3QgY291bnQgPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgICAgfSkubGVuZ3RoO1xuICAgICAgbGFiZWxzLnB1c2goYFckezQgLSB3fWApO1xuICAgICAgdmFsdWVzLnB1c2goY291bnQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBMYXN0IDEyIG1vbnRoc1xuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG4gICAgZm9yIChsZXQgbSA9IDExOyBtID49IDA7IG0tLSkge1xuICAgICAgY29uc3QgbW9udGhEYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpIC0gbSwgMSk7XG4gICAgICBjb25zdCBtb250aEVuZCA9IG5ldyBEYXRlKG1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aERhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuICAgICAgY29uc3QgY291bnQgPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgcmV0dXJuIGQgPj0gbW9udGhEYXRlICYmIGQgPD0gbW9udGhFbmQ7XG4gICAgICB9KS5sZW5ndGg7XG4gICAgICBsYWJlbHMucHVzaChtb250aE5hbWVzW21vbnRoRGF0ZS5nZXRNb250aCgpXSk7XG4gICAgICB2YWx1ZXMucHVzaChjb3VudCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0JhckNoYXJ0KGNvbnRhaW5lciwgbGFiZWxzLCB2YWx1ZXMsIFwiI2Q0YTg0M1wiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBwZXJpb2Q6IFwibW9udGhcIiB8IFwieWVhclwiXG4pOiB2b2lkIHtcbiAgY29uc3QgYm9keUFjdGl2aXRpZXMgPSBzZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkICYmIGEuY2F0ZWdvcnkgPT09IFwiYm9keVwiKTtcbiAgaWYgKGJvZHlBY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXByb2dyZXNzLWVtcHR5XCIsIHRleHQ6IFwiTm8gYm9keSBhY3Rpdml0aWVzIGNvbmZpZ3VyZWRcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gW107XG4gIGNvbnN0IHZhbHVlczogbnVtYmVyW10gPSBbXTtcblxuICBpZiAocGVyaW9kID09PSBcIm1vbnRoXCIpIHtcbiAgICBmb3IgKGxldCB3ID0gMzsgdyA+PSAwOyB3LS0pIHtcbiAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IG5ldyBEYXRlKHdlZWtFbmQuZ2V0VGltZSgpIC0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIGZvciAoY29uc3QgYWN0IG9mIGJvZHlBY3Rpdml0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbYWN0LmlkXSA/PyBbXTtcbiAgICAgICAgdG90YWwgKz0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnB1c2goYFckezQgLSB3fWApO1xuICAgICAgdmFsdWVzLnB1c2godG90YWwpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuICAgIGZvciAobGV0IG0gPSAxMTsgbSA+PSAwOyBtLS0pIHtcbiAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIG0sIDEpO1xuICAgICAgY29uc3QgbW9udGhFbmQgPSBuZXcgRGF0ZShtb250aERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGhEYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IGFjdCBvZiBib2R5QWN0aXZpdGllcykge1xuICAgICAgICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW2FjdC5pZF0gPz8gW107XG4gICAgICAgIHRvdGFsICs9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgICByZXR1cm4gZCA+PSBtb250aERhdGUgJiYgZCA8PSBtb250aEVuZDtcbiAgICAgICAgfSkubGVuZ3RoO1xuICAgICAgfVxuICAgICAgbGFiZWxzLnB1c2gobW9udGhOYW1lc1ttb250aERhdGUuZ2V0TW9udGgoKV0pO1xuICAgICAgdmFsdWVzLnB1c2godG90YWwpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdCYXJDaGFydChjb250YWluZXIsIGxhYmVscywgdmFsdWVzLCBcIiNkNGE4NDNcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck11c2NsZUJyZWFrZG93bkNoYXJ0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcCxcbiAgcGVyaW9kOiBcIm1vbnRoXCIgfCBcInllYXJcIlxuKTogdm9pZCB7XG4gIC8vIFNob3cgYm9keS1jYXRlZ29yeSBhY3Rpdml0aWVzIGFzIHNlcGFyYXRlIGxpbmVzXG4gIGNvbnN0IGJvZHlBY3Rpdml0aWVzID0gc2V0dGluZ3MuYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IGEuZW5hYmxlZCAmJiBhLmNhdGVnb3J5ID09PSBcImJvZHlcIik7XG4gIGlmIChib2R5QWN0aXZpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICBjb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1lbXB0eVwiLCB0ZXh0OiBcIk5vIGJvZHkgYWN0aXZpdGllcyBjb25maWd1cmVkXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgY29sb3JzID0gW1wiI2Q0YTg0M1wiLCBcIiNlOGMzNWFcIiwgXCIjN2I5ZGUwXCIsIFwiI2EwOGRlMFwiLCBcIiM1ZTlhN2FcIiwgXCIjYzQ4ODIwXCJdO1xuXG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCB3aWR0aCA9IDI4MDtcbiAgY29uc3QgaGVpZ2h0ID0gMTIwO1xuICBjb25zdCBwYWRkaW5nID0geyB0b3A6IDEwLCByaWdodDogMTAsIGJvdHRvbTogMjAsIGxlZnQ6IDI0IH07XG4gIGNvbnN0IGNoYXJ0VyA9IHdpZHRoIC0gcGFkZGluZy5sZWZ0IC0gcGFkZGluZy5yaWdodDtcbiAgY29uc3QgY2hhcnRIID0gaGVpZ2h0IC0gcGFkZGluZy50b3AgLSBwYWRkaW5nLmJvdHRvbTtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWApO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLXByb2dyZXNzLXN2Z1wiKTtcblxuICBjb25zdCBidWNrZXRDb3VudCA9IHBlcmlvZCA9PT0gXCJtb250aFwiID8gNCA6IDEyO1xuXG4gIC8vIENvbXB1dGUgZGF0YSBzZXJpZXMgZm9yIGVhY2ggYWN0aXZpdHlcbiAgY29uc3QgYWxsU2VyaWVzOiB7IG5hbWU6IHN0cmluZzsgdmFsdWVzOiBudW1iZXJbXTsgY29sb3I6IHN0cmluZyB9W10gPSBbXTtcbiAgbGV0IGdsb2JhbE1heCA9IDE7XG5cbiAgZm9yIChsZXQgYWkgPSAwOyBhaSA8IGJvZHlBY3Rpdml0aWVzLmxlbmd0aDsgYWkrKykge1xuICAgIGNvbnN0IGFjdCA9IGJvZHlBY3Rpdml0aWVzW2FpXTtcbiAgICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW2FjdC5pZF0gPz8gW107XG4gICAgY29uc3QgdmFsczogbnVtYmVyW10gPSBbXTtcblxuICAgIGlmIChwZXJpb2QgPT09IFwibW9udGhcIikge1xuICAgICAgZm9yIChsZXQgdyA9IDM7IHcgPj0gMDsgdy0tKSB7XG4gICAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUod2Vla0VuZC5nZXRUaW1lKCkgLSA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHZhbHMucHVzaChjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgICAgICB9KS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBtID0gMTE7IG0gPj0gMDsgbS0tKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIG0sIDEpO1xuICAgICAgICBjb25zdCBtb250aEVuZCA9IG5ldyBEYXRlKG1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aERhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuICAgICAgICB2YWxzLnB1c2goY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IG1vbnRoRGF0ZSAmJiBkIDw9IG1vbnRoRW5kO1xuICAgICAgICB9KS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHMsIDEpO1xuICAgIGlmIChtYXggPiBnbG9iYWxNYXgpIGdsb2JhbE1heCA9IG1heDtcblxuICAgIGFsbFNlcmllcy5wdXNoKHtcbiAgICAgIG5hbWU6IGFjdC5uYW1lLFxuICAgICAgdmFsdWVzOiB2YWxzLFxuICAgICAgY29sb3I6IGNvbG9yc1thaSAlIGNvbG9ycy5sZW5ndGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRHJhdyBsaW5lc1xuICBmb3IgKGNvbnN0IHNlcmllcyBvZiBhbGxTZXJpZXMpIHtcbiAgICBjb25zdCBwb2ludHMgPSBzZXJpZXMudmFsdWVzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIChpIC8gKGJ1Y2tldENvdW50IC0gMSkpICogY2hhcnRXO1xuICAgICAgY29uc3QgeSA9IHBhZGRpbmcudG9wICsgY2hhcnRIIC0gKHYgLyBnbG9iYWxNYXgpICogY2hhcnRIO1xuICAgICAgcmV0dXJuIGAke3h9LCR7eX1gO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwb2x5bGluZVwiKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBwb2ludHMuam9pbihcIiBcIikpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgc2VyaWVzLmNvbG9yKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cblxuICAvLyBYIGF4aXMgbGFiZWxzXG4gIGNvbnN0IHhMYWJlbHMgPSBwZXJpb2QgPT09IFwibW9udGhcIlxuICAgID8gW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl1cbiAgICA6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldENvdW50OyBpKyspIHtcbiAgICBjb25zdCB4ID0gcGFkZGluZy5sZWZ0ICsgKGkgLyAoYnVja2V0Q291bnQgLSAxKSkgKiBjaGFydFc7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGV4dFwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoaGVpZ2h0IC0gNCkpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuNClcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiOFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHhMYWJlbHNbaV07XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIC8vIExlZ2VuZFxuICBjb25zdCBsZWdlbmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtbGVnZW5kXCIgfSk7XG4gIGZvciAoY29uc3Qgc2VyaWVzIG9mIGFsbFNlcmllcykge1xuICAgIGNvbnN0IGl0ZW0gPSBsZWdlbmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtbGVnZW5kLWl0ZW1cIiB9KTtcbiAgICBjb25zdCBkb3QgPSBpdGVtLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWxlZ2VuZC1kb3RcIiB9KTtcbiAgICBkb3Quc3R5bGUuYmFja2dyb3VuZCA9IHNlcmllcy5jb2xvcjtcbiAgICBpdGVtLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IHNlcmllcy5uYW1lIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdCYXJDaGFydChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgbGFiZWxzOiBzdHJpbmdbXSxcbiAgdmFsdWVzOiBudW1iZXJbXSxcbiAgY29sb3I6IHN0cmluZ1xuKTogdm9pZCB7XG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCB3aWR0aCA9IDI4MDtcbiAgY29uc3QgaGVpZ2h0ID0gMTAwO1xuICBjb25zdCBwYWRkaW5nID0geyB0b3A6IDgsIHJpZ2h0OiA4LCBib3R0b206IDE4LCBsZWZ0OiA4IH07XG4gIGNvbnN0IGNoYXJ0VyA9IHdpZHRoIC0gcGFkZGluZy5sZWZ0IC0gcGFkZGluZy5yaWdodDtcbiAgY29uc3QgY2hhcnRIID0gaGVpZ2h0IC0gcGFkZGluZy50b3AgLSBwYWRkaW5nLmJvdHRvbTtcbiAgY29uc3QgbWF4VmFsID0gTWF0aC5tYXgoLi4udmFsdWVzLCAxKTtcbiAgY29uc3QgYmFyR2FwID0gNDtcbiAgY29uc3QgYmFyV2lkdGggPSAoY2hhcnRXIC0gYmFyR2FwICogKGxhYmVscy5sZW5ndGggLSAxKSkgLyBsYWJlbHMubGVuZ3RoO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4tcHJvZ3Jlc3Mtc3ZnXCIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIGkgKiAoYmFyV2lkdGggKyBiYXJHYXApO1xuICAgIGNvbnN0IGJhckggPSBNYXRoLm1heCgyLCAodmFsdWVzW2ldIC8gbWF4VmFsKSAqIGNoYXJ0SCk7XG4gICAgY29uc3QgeSA9IHBhZGRpbmcudG9wICsgY2hhcnRIIC0gYmFySDtcblxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhiYXJXaWR0aCkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhiYXJIKSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjNcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIHZhbHVlc1tpXSA+IDAgPyBjb2xvciA6IFwicmdiYSgyNTUsMjU1LDI1NSwwLjA2KVwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQocmVjdCk7XG5cbiAgICAvLyBMYWJlbFxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGV4dFwiKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHggKyBiYXJXaWR0aCAvIDIpKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKGhlaWdodCAtIDQpKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIHRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC40KVwiKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjhcIik7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGxhYmVsc1tpXTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH1cblxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnKTtcbn1cblxuLy8gLS0tIE11c2NsZSBTZWxlY3RvciBmb3IgTmV3IFdvcmtvdXQgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TXVzY2xlU2VsZWN0b3IoXG4gIG9uQ29uZmlybTogKHNlbGVjdGVkOiBNdXNjbGVHcm91cElkW10pID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldCBvbGVuLW11c2NsZS1zZWxlY3Rvci1zaGVldFwiIH0pO1xuICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJTZWxlY3QgTXVzY2xlc1wiIH0pO1xuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcHJvZ3Jlc3Mtc3VidGl0bGVcIixcbiAgICB0ZXh0OiBcIlRhcCB0aGUgbXVzY2xlcyB5b3Ugd2FudCB0byB0cmFpblwiLFxuICB9KTtcblxuICBjb25zdCBzZWxlY3RlZCA9IG5ldyBTZXQ8TXVzY2xlR3JvdXBJZD4oKTtcblxuICAvLyBTVkcgZmlndXJlIHdpdGggY2xpY2thYmxlIG11c2NsZXNcbiAgY29uc3QgZmlndXJlV3JhcCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLW11c2NsZS1zZWxlY3Rvci1maWd1cmVcIiB9KTtcblxuICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjAwIDQwMFwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1oZWF0bWFwLXN2ZyBvbGVuLXNlbGVjdG9yLXN2Z1wiKTtcblxuICAvLyBEcmF3IHNpbGhvdWV0dGVcbiAgZHJhd0JvZHlTaWxob3VldHRlKHN2Zywgc3ZnTlMsIFwibWFsZVwiLCBcImZyb250XCIpO1xuXG4gIC8vIERyYXcgY2xpY2thYmxlIG11c2NsZSByZWdpb25zXG4gIGNvbnN0IHJlY3RzOiBNYXA8TXVzY2xlR3JvdXBJZCwgU1ZHUmVjdEVsZW1lbnRbXT4gPSBuZXcgTWFwKCk7XG5cbiAgZm9yIChjb25zdCByZWdpb24gb2YgTVVTQ0xFX1JFR0lPTlMpIHtcbiAgICBjb25zdCBib3VuZHMgPSByZWdpb24uZnJvbnQgPz8gcmVnaW9uLmJhY2s7XG4gICAgaWYgKCFib3VuZHMpIGNvbnRpbnVlO1xuXG4gICAgY29uc3QgeCA9IGJvdW5kcy54ICogMjtcbiAgICBjb25zdCB5ID0gYm91bmRzLnkgKiA0O1xuICAgIGNvbnN0IHcgPSBib3VuZHMudyAqIDI7XG4gICAgY29uc3QgaCA9IGJvdW5kcy5oICogNDtcblxuICAgIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKHgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyh3KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKGgpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcInJ5XCIsIFwiNlwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuMDYpXCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtbXVzY2xlIG9sZW4tc2VsZWN0b3ItbXVzY2xlXCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiZGF0YS1tdXNjbGVcIiwgcmVnaW9uLmlkKTtcblxuICAgIGNvbnN0IGV4aXN0aW5nUmVjdHMgPSByZWN0cy5nZXQocmVnaW9uLmlkKSA/PyBbXTtcbiAgICBleGlzdGluZ1JlY3RzLnB1c2gocmVjdCk7XG4gICAgcmVjdHMuc2V0KHJlZ2lvbi5pZCwgZXhpc3RpbmdSZWN0cyk7XG5cbiAgICByZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRvZ2dsZU11c2NsZShyZWdpb24uaWQpO1xuICAgIH0pO1xuXG4gICAgc3ZnLmFwcGVuZENoaWxkKHJlY3QpO1xuXG4gICAgLy8gTWlycm9yXG4gICAgaWYgKGlzU3ltbWV0cmljTXVzY2xlKHJlZ2lvbi5pZCkgJiYgYm91bmRzLnggPCA1MCkge1xuICAgICAgY29uc3QgbWlycm9yWCA9IDIwMCAtIHggLSB3O1xuICAgICAgY29uc3QgbWlycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInJlY3RcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcobWlycm9yWCkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodykpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoaCkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJyeVwiLCBcIjZcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLWhlYXRtYXAtbXVzY2xlIG9sZW4tc2VsZWN0b3ItbXVzY2xlXCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImRhdGEtbXVzY2xlXCIsIHJlZ2lvbi5pZCk7XG5cbiAgICAgIGV4aXN0aW5nUmVjdHMucHVzaChtaXJyb3IpO1xuICAgICAgcmVjdHMuc2V0KHJlZ2lvbi5pZCwgZXhpc3RpbmdSZWN0cyk7XG5cbiAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdG9nZ2xlTXVzY2xlKHJlZ2lvbi5pZCk7XG4gICAgICB9KTtcblxuICAgICAgc3ZnLmFwcGVuZENoaWxkKG1pcnJvcik7XG4gICAgfVxuXG4gICAgLy8gTGFiZWwgdGV4dFxuICAgIGNvbnN0IGxhYmVsVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0ZXh0XCIpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4ICsgdyAvIDIpKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSArIGggLyAyICsgMykpO1xuICAgIGxhYmVsVGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC41KVwiKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiN1wiKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwicG9pbnRlci1ldmVudHNcIiwgXCJub25lXCIpO1xuICAgIGxhYmVsVGV4dC50ZXh0Q29udGVudCA9IE1VU0NMRV9HUk9VUF9MQUJFTFNbcmVnaW9uLmlkXS5zbGljZSgwLCA1KTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGFiZWxUZXh0KTtcbiAgfVxuXG4gIGZpZ3VyZVdyYXAuYXBwZW5kQ2hpbGQoc3ZnKTtcblxuICAvLyBTZWxlY3RlZCBjaGlwcyBhcmVhXG4gIGNvbnN0IGNoaXBzQXJlYSA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLW11c2NsZS1zZWxlY3Rvci1jaGlwc1wiIH0pO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZU11c2NsZShpZDogTXVzY2xlR3JvdXBJZCk6IHZvaWQge1xuICAgIGlmIChzZWxlY3RlZC5oYXMoaWQpKSB7XG4gICAgICBzZWxlY3RlZC5kZWxldGUoaWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3RlZC5hZGQoaWQpO1xuICAgIH1cbiAgICB1cGRhdGVWaXN1YWwoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVZpc3VhbCgpOiB2b2lkIHtcbiAgICAvLyBVcGRhdGUgcmVjdHNcbiAgICBmb3IgKGNvbnN0IFtpZCwgcmVjdExpc3RdIG9mIHJlY3RzKSB7XG4gICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWQuaGFzKGlkKTtcbiAgICAgIGZvciAoY29uc3QgciBvZiByZWN0TGlzdCkge1xuICAgICAgICByLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgaXNTZWxlY3RlZCA/IFwicmdiYSgyMTIsIDE2OCwgNjcsIDAuNSlcIiA6IFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjA2KVwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBVcGRhdGUgY2hpcHNcbiAgICBjaGlwc0FyZWEuZW1wdHkoKTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIHNlbGVjdGVkKSB7XG4gICAgICBjb25zdCBjaGlwID0gY2hpcHNBcmVhLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLW11c2NsZS1zZWxlY3Rvci1jaGlwXCIgfSk7XG4gICAgICBjaGlwLnRleHRDb250ZW50ID0gTVVTQ0xFX0dST1VQX0xBQkVMU1tpZF07XG4gICAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0b2dnbGVNdXNjbGUoaWQpKTtcbiAgICB9XG4gIH1cblxuICAvLyBDb25maXJtIGJ1dHRvblxuICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1hY3Rpb25zXCIgfSk7XG4gIGNvbnN0IGNvbmZpcm1CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IFwiQmVnaW4gV29ya291dFwiLFxuICB9KTtcbiAgY29uZmlybUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsb3NlUG9wdXAoKTtcbiAgICBvbkNvbmZpcm0oQXJyYXkuZnJvbShzZWxlY3RlZCkpO1xuICB9KTtcblxuICBjb25zdCBjYW5jZWxCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgdGV4dDogXCJDYW5jZWxcIixcbiAgfSk7XG4gIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VQb3B1cCgpKTtcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VQb3B1cCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVBvcHVwKCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgV2VpZ2h0IFByb2dyZXNzIENvbXBvbmVudFxuLy8gV2VpZ2h0IHRyZW5kIGdyYXBoICsgbG9nIHJlbWluZGVyIG5vdGlmaWNhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBXZWlnaHRMb2dGcmVxdWVuY3kgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldlaWdodE5vdGlmaWNhdGlvbihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIG9uTG9nV2VpZ2h0OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3RhdHMgPSBzZXR0aW5ncy5wZXJzb25hbFN0YXRzO1xuICBpZiAoIXN0YXRzLmN1cnJlbnRXZWlnaHQgfHwgc3RhdHMud2VpZ2h0TG9nLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGNvbnN0IGRheXNTaW5jZUxvZyA9IGdldERheXNTaW5jZUxhc3RMb2coc3RhdHMubGFzdFdlaWdodExvZ0RhdGUpO1xuICBjb25zdCBpbnRlcnZhbERheXMgPSBnZXRJbnRlcnZhbERheXMoc3RhdHMud2VpZ2h0TG9nRnJlcXVlbmN5LCBzdGF0cy53ZWlnaHRMb2dDdXN0b21EYXlzKTtcblxuICBpZiAoZGF5c1NpbmNlTG9nIDwgaW50ZXJ2YWxEYXlzKSByZXR1cm47XG5cbiAgLy8gU2hvdyBub3RpZmljYXRpb24gY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQtY29tcGFjdCBvbGVuLXdlaWdodC1ub3RpZnlcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWlnaHQtbm90aWZ5LXJvd1wiIH0pO1xuICByb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogXCJUaW1lIHRvIGxvZyB5b3VyIHdlaWdodFwiIH0pO1xuXG4gIGNvbnN0IGJ0biA9IHJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi13ZWlnaHQtbm90aWZ5LWJ0blwiLFxuICAgIHRleHQ6IFwiTG9nXCIsXG4gIH0pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvbkxvZ1dlaWdodCgpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF5c1NpbmNlTGFzdExvZyhsYXN0RGF0ZTogc3RyaW5nIHwgbnVsbCk6IG51bWJlciB7XG4gIGlmICghbGFzdERhdGUpIHJldHVybiA5OTk7XG4gIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZShsYXN0RGF0ZSk7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IG1zID0gbm93LmdldFRpbWUoKSAtIGxhc3QuZ2V0VGltZSgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihtcyAvICgyNCAqIDYwICogNjAgKiAxMDAwKSk7XG59XG5cbmZ1bmN0aW9uIGdldEludGVydmFsRGF5cyhmcmVxOiBXZWlnaHRMb2dGcmVxdWVuY3ksIGN1c3RvbURheXM6IG51bWJlcik6IG51bWJlciB7XG4gIHN3aXRjaCAoZnJlcSkge1xuICAgIGNhc2UgXCJ0d2ljZS1hLXdlZWtcIjogcmV0dXJuIDM7XG4gICAgY2FzZSBcImV2ZXJ5LXdlZWtcIjogcmV0dXJuIDc7XG4gICAgY2FzZSBcImV2ZXJ5LTItd2Vla3NcIjogcmV0dXJuIDE0O1xuICAgIGNhc2UgXCJldmVyeS0zLWRheXNcIjogcmV0dXJuIDM7XG4gICAgY2FzZSBcImV2ZXJ5LTUtZGF5c1wiOiByZXR1cm4gNTtcbiAgICBjYXNlIFwiY3VzdG9tXCI6IHJldHVybiBjdXN0b21EYXlzO1xuICAgIGRlZmF1bHQ6IHJldHVybiA3O1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBXb3Jrc3BhY2UgVmlld1xuLy8gQWN0aXZlIHdvcmtzcGFjZSBzY3JlZW4gd2l0aCB0aW1lciwgc2tpbGxzLCBmaW5pc2ggZmxvdy5cbi8vIFdoZW4gYW4gYWN0aXZpdHkgaGFzIGEgd29ya3NwYWNlVGVtcGxhdGUsIHRoZSB0ZW1wbGF0ZSBpc1xuLy8gcmVuZGVyZWQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCB0aW1lciBVSS5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHR5cGUgeyBBY3RpdmVXb3Jrc3BhY2UsIEFjdGl2aXR5Q29uZmlnLCBXb3Jrc3BhY2VUeXBlLCBXb3Jrc3BhY2VSZXN1bHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIEZBTExCQUNLX1FVT1RFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSB0aW1lckludGVydmFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGFydFRpbWU6IERhdGU7XG4gIHByaXZhdGUgZWxhcHNlZCA9IDA7IC8vIHNlY29uZHNcbiAgLyoqIFdoZW4gaW4gdGVtcGxhdGUgbW9kZSwgdHJhY2tzIHRoZSBkYWlseSBub3RlIGZpbGUgdGhlIHRlbXBsYXRlIGlzIGJvdW5kIHRvICovXG4gIHByaXZhdGUgdGVtcGxhdGVOb3RlRmlsZTogVEZpbGUgfCBudWxsID0gbnVsbDtcbiAgLyoqIFRyYWNrcyB3aGV0aGVyIHdlIGFscmVhZHkgcHJvY2Vzc2VkIGEgY29tcGxldGlvbiAocHJldmVudHMgZG91YmxlLWFwcGx5KSAqL1xuICBwcml2YXRlIGNvbXBsZXRpb25BcHBsaWVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVklFV19UWVBFX1dPUktTUEFDRTtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlO1xuICAgIHJldHVybiB3b3Jrc3BhY2UgPyBgV29ya3NwYWNlOiAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9YCA6IFwiV29ya3NwYWNlXCI7XG4gIH1cblxuICBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwidGltZXJcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2U7XG4gICAgaWYgKCF3b3Jrc3BhY2UpIHtcbiAgICAgIHRoaXMuY29udGVudEVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgdGV4dDogXCJObyBhY3RpdmUgd29ya3NwYWNlLlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKFxuICAgICAgKGEpID0+IGEuaWQgPT09IHdvcmtzcGFjZS5hY3Rpdml0eUlkLFxuICAgICk7XG5cbiAgICBpZiAoYWN0aXZpdHk/LndvcmtzcGFjZVRlbXBsYXRlKSB7XG4gICAgICAvLyBUZW1wbGF0ZSBtb2RlOiByZW5kZXIgdGhlIGFjdGl2aXR5IHRlbXBsYXRlIGJvdW5kIHRvIHRvZGF5J3MgZGFpbHkgbm90ZVxuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJUZW1wbGF0ZU1vZGUod29ya3NwYWNlLCBhY3Rpdml0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIERlZmF1bHQgbW9kZTogdGltZXIgKyBza2lsbHMgKyBmaW5pc2hcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUod29ya3NwYWNlLnN0YXJ0VGltZSk7XG4gICAgICB0aGlzLnJlbmRlcih3b3Jrc3BhY2UpO1xuICAgICAgdGhpcy5zdGFydFRpbWVyKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIHRoaXMudGVtcGxhdGVOb3RlRmlsZSA9IG51bGw7XG4gICAgdGhpcy5jb21wbGV0aW9uQXBwbGllZCA9IGZhbHNlO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIFRlbXBsYXRlIE1vZGVcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyVGVtcGxhdGVNb2RlKFxuICAgIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICAvLyBGaW5kIG9yIGNyZWF0ZSB0b2RheSdzIGRhaWx5IG5vdGUgZm9yIHRoaXMgYWN0aXZpdHlcbiAgICBjb25zdCBmaWxlID0gYXdhaXQgdGhpcy5maW5kT3JDcmVhdGVEYWlseU5vdGUoYWN0aXZpdHkpO1xuICAgIGlmICghZmlsZSkge1xuICAgICAgY29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgdGV4dDogXCJDb3VsZCBub3QgbG9hZCBhY3Rpdml0eSBub3RlLlwiLFxuICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImNvbG9yOiB2YXIoLS10ZXh0LWVycm9yKTsgcGFkZGluZzogMjBweDsgdGV4dC1hbGlnbjogY2VudGVyO1wiIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRlbXBsYXRlTm90ZUZpbGUgPSBmaWxlO1xuXG4gICAgLy8gV2FpdCBmb3IgbWV0YWRhdGEgY2FjaGUgdG8gcG9wdWxhdGUgKGltcG9ydGFudCBmb3IgbmV3bHkgY3JlYXRlZCBmaWxlcylcbiAgICBhd2FpdCB0aGlzLndhaXRGb3JNZXRhZGF0YShmaWxlKTtcblxuICAgIC8vIFJlbmRlciB0ZW1wbGF0ZSBpbnRvIHRoZSB2aWV3J3MgY29udGVudCBhcmVhXG4gICAgY29uc3QgdGVtcGxhdGVDb250YWluZXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiIH0pO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnRlbXBsYXRlRW5naW5lLnJlbmRlcihcbiAgICAgIGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlISxcbiAgICAgIGZpbGUsXG4gICAgICB0ZW1wbGF0ZUNvbnRhaW5lcixcbiAgICApO1xuXG4gICAgLy8gV2F0Y2ggZm9yIHRoZSB0ZW1wbGF0ZSBtYXJraW5nIHRoZSBhY3Rpdml0eSBhcyBkb25lIGluIGZyb250bWF0dGVyLlxuICAgIC8vIFdoZW4gdGhlIGFjdGl2aXR5IHByb3BlcnR5IGJlY29tZXMgdHJ1ZSwgYXBwbHkgcGx1Z2luLWxldmVsIGVmZmVjdHNcbiAgICAvLyAoWFAsIGJvc3MgZGFtYWdlLCBjbGVhciBhY3RpdmVXb3Jrc3BhY2UpLlxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUub24oXCJjaGFuZ2VkXCIsIChjaGFuZ2VkRmlsZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5jb21wbGV0aW9uQXBwbGllZCkgcmV0dXJuO1xuICAgICAgICBpZiAoY2hhbmdlZEZpbGUucGF0aCAhPT0gZmlsZS5wYXRoKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShjaGFuZ2VkRmlsZSk7XG4gICAgICAgIGNvbnN0IGZtID0gY2FjaGU/LmZyb250bWF0dGVyO1xuICAgICAgICBpZiAoZm0/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRpb25BcHBsaWVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zdCBjb21wbGV0aW9uVHlwZSA9IGZtW2Ake2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlYF0gYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICAgIHRoaXMuYXBwbHlUZW1wbGF0ZUNvbXBsZXRpb24od29ya3NwYWNlLCBhY3Rpdml0eSwgY29tcGxldGlvblR5cGUpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdG9kYXkncyBkYWlseSBub3RlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXIsIG9yIGNyZWF0ZSBvbmUuXG4gICAqIEVuc3VyZXMgdGhlIG5vdGUgaGFzIGBhY3Rpdml0eTogPGlkPmAgaW4gZnJvbnRtYXR0ZXIgc28gdGhlXG4gICAqIHRlbXBsYXRlIHBvc3QtcHJvY2Vzc29yIGFsc28gd29ya3Mgd2hlbiBvcGVuaW5nIHRoZSBub3RlIGRpcmVjdGx5LlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBmaW5kT3JDcmVhdGVEYWlseU5vdGUoYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnKTogUHJvbWlzZTxURmlsZSB8IG51bGw+IHtcbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIExvb2sgZm9yIGV4aXN0aW5nIGRhaWx5IG5vdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBleGlzdGluZyA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT5cbiAgICAgICAgKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJlxuICAgICAgICBmLmJhc2VuYW1lID09PSBkYXRlU3RyLFxuICAgICk7XG5cbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIC8vIEVuc3VyZSBpdCBoYXMgdGhlIGFjdGl2aXR5IGZpZWxkIGluIGZyb250bWF0dGVyXG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZXhpc3RpbmcsIChmbSkgPT4ge1xuICAgICAgICBpZiAoIWZtLmFjdGl2aXR5KSBmbS5hY3Rpdml0eSA9IGFjdGl2aXR5LmlkO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZXhpc3Rpbmc7XG4gICAgfVxuXG4gICAgLy8gRW5zdXJlIGZvbGRlciBleGlzdHNcbiAgICBjb25zdCBhYnN0cmFjdEZvbGRlciA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXIpO1xuICAgIGlmICghYWJzdHJhY3RGb2xkZXIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXIpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEZvbGRlciBtYXkgYWxyZWFkeSBleGlzdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENyZWF0ZSBuZXcgZGFpbHkgbm90ZSB3aXRoIGFjdGl2aXR5IGZyb250bWF0dGVyXG4gICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBgLS0tXFxuYWN0aXZpdHk6ICR7YWN0aXZpdHkuaWR9XFxuLS0tXFxuYDtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgY29udGVudCk7XG4gICAgfSBjYXRjaCB7XG4gICAgICAvLyBGaWxlIG1pZ2h0IGFscmVhZHkgZXhpc3Qgd2l0aCBhIGRpZmZlcmVudCBjYXNpbmcgb3IgcmFjZSBjb25kaXRpb25cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXYWl0IHVudGlsIHRoZSBtZXRhZGF0YSBjYWNoZSBoYXMgaW5kZXhlZCBhIGZpbGUncyBmcm9udG1hdHRlci5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgd2FpdEZvck1ldGFkYXRhKGZpbGU6IFRGaWxlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICB3aGlsZSAoYXR0ZW1wdHMgPCAyMCkge1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHJldHVybjtcbiAgICAgIGF3YWl0IHNsZWVwKDUwKTtcbiAgICAgIGF0dGVtcHRzKys7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB0ZW1wbGF0ZSBtYXJrcyB0aGUgYWN0aXZpdHkgYXMgZG9uZSBpbiBmcm9udG1hdHRlci5cbiAgICogQXBwbGllcyBwbHVnaW4tbGV2ZWwgZWZmZWN0czogWFAsIGJvc3MgZGFtYWdlLCBjbGVhciB3b3Jrc3BhY2UuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGFwcGx5VGVtcGxhdGVDb21wbGV0aW9uKFxuICAgIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICBjb21wbGV0aW9uVHlwZT86IHN0cmluZyxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTWFwIHRoZSB0ZW1wbGF0ZSdzIGNvbXBsZXRpb24gdHlwZSB0byBhIHdvcmtzcGFjZSBzdGF0ZVxuICAgIGNvbnN0IHdzVHlwZSA9IGNvbXBsZXRpb25UeXBlPy50b0xvd2VyQ2FzZSgpIGFzIFdvcmtzcGFjZVR5cGUgfCB1bmRlZmluZWQ7XG4gICAgY29uc3Qgc3RhdGUgPSB3c1R5cGVcbiAgICAgID8gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSB3c1R5cGUpXG4gICAgICA6IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gXCJkaXNjaXBsaW5lXCIpO1xuXG4gICAgLy8gQXBwbHkgWFBcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUueHBNdWx0aXBsaWVyID4gMCkge1xuICAgICAgY29uc3QgeHBHYWluID0gTWF0aC5yb3VuZChcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbiAqIHN0YXRlLnhwTXVsdGlwbGllcixcbiAgICAgICk7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeVhQW3dvcmtzcGFjZS5jYXRlZ29yeV0gKz0geHBHYWluO1xuICAgIH1cblxuICAgIC8vIEFwcGx5IGJvc3MgZGFtYWdlICh1bmxlc3Mgc2tpcHBlZClcbiAgICBpZiAod3NUeXBlICE9PSBcInNraXBwZWRcIikge1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvbixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgYWN0aXZlIHdvcmtzcGFjZVxuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IG51bGw7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gIH1cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vIERlZmF1bHQgTW9kZSAodGltZXIgKyBza2lsbHMgKyBmaW5pc2gpXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwcml2YXRlIHN0YXJ0VGltZXIoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lckludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICBjb25zdCB0aW1lckVsID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXdvcmtzcGFjZS10aW1lclwiKTtcbiAgICAgIGlmICh0aW1lckVsKSB0aW1lckVsLnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuZWxhcHNlZCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHN0b3BUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lckludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbCk7XG4gICAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZCBvbGVuLXdvcmtzcGFjZS1yb290XCIgfSk7XG5cbiAgICAvLyBUb3AgYmFyXG4gICAgY29uc3QgdG9wQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtdG9wYmFyXCIgfSk7XG5cbiAgICBjb25zdCBhY3RJbmZvID0gdG9wQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY3QtaW5mb1wiIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWVtb2ppXCIsIHRleHQ6IHdvcmtzcGFjZS5lbW9qaSB9KTtcbiAgICBhY3RJbmZvLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY3QtbmFtZVwiLCB0ZXh0OiB3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lIH0pO1xuXG4gICAgY29uc3QgdGltZXJFbCA9IHRvcEJhci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2UtdGltZXJcIixcbiAgICAgIHRleHQ6IFwiMDA6MDBcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbmlzaEJ0biA9IHRvcEJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXdvcmtzcGFjZS1maW5pc2gtYnRuXCIsXG4gICAgICB0ZXh0OiBcIkZJTklTSFwiLFxuICAgIH0pO1xuICAgIGZpbmlzaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93RmluaXNoTW9kYWwod29ya3NwYWNlKSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgbGluZVxuICAgIGNvbnN0IGFjY2VudENvbG9yID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbd29ya3NwYWNlLmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcbiAgICBjb25zdCBhY2NlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7YWNjZW50Q29sb3J9LCB0cmFuc3BhcmVudClgO1xuXG4gICAgLy8gTWFpbiBjb250ZW50IGFyZWFcbiAgICBjb25zdCBjb250ZW50ID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtY29udGVudFwiIH0pO1xuXG4gICAgLy8gU2tpbGxzIHNlY3Rpb25cbiAgICBjb25zdCBza2lsbHNTZWN0aW9uID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzLXNlY3Rpb25cIiB9KTtcbiAgICBza2lsbHNTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBcIldPUktTUEFDRSBTS0lMTFNcIiB9KTtcblxuICAgIGNvbnN0IHNraWxsc0NvbnRhaW5lciA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxsc1wiIH0pO1xuXG4gICAgaWYgKHdvcmtzcGFjZS5za2lsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBza2lsbHNDb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2Utbm8tc2tpbGxzXCIsXG4gICAgICAgIHRleHQ6IFwiTm8gc2tpbGxzIHRhZ2dlZCB5ZXRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHdvcmtzcGFjZS5za2lsbHMpIHtcbiAgICAgICAgY29uc3QgY2hpcCA9IHNraWxsc0NvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtY2hpcFwiIH0pO1xuICAgICAgICBjaGlwLnRleHRDb250ZW50ID0gc2tpbGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHNraWxscyBidXR0b25cbiAgICBjb25zdCBhZGRTa2lsbEJ0biA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXdvcmtzcGFjZS1hZGQtc2tpbGxcIixcbiAgICAgIHRleHQ6IFwiKyBBREQgU0tJTExcIixcbiAgICB9KTtcbiAgICBhZGRTa2lsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93U2tpbGxQaWNrZXIod29ya3NwYWNlKSk7XG5cbiAgICAvLyBGb2N1cyB6b25lIFx1MjAxNCBtb3RpdmF0aW9uYWwgYXJlYVxuICAgIGNvbnN0IGZvY3VzWm9uZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWZvY3VzXCIgfSk7XG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICAgIH0pO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG5cbiAgICAvLyBCb3R0b20gYmFyXG4gICAgY29uc3QgYm90dG9tQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtYm90dG9tYmFyXCIgfSk7XG4gICAgY29uc3QgY2F0TGFiZWwgPSB3b3Jrc3BhY2UuY2F0ZWdvcnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3Jrc3BhY2UuY2F0ZWdvcnkuc2xpY2UoMSk7XG4gICAgYm90dG9tQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1jYXRlZ29yeS1sYWJlbFwiLFxuICAgICAgdGV4dDogY2F0TGFiZWwsXG4gICAgfSk7XG4gICAgYm90dG9tQmFyLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGFjY2VudENvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93U2tpbGxQaWNrZXIod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICAvLyBQcm9tcHQgZm9yIHNraWxsIG5hbWUgdmlhIGEgc2ltcGxlIGlucHV0XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiQUREIFNLSUxMXCIgfSk7XG5cbiAgICBjb25zdCBpbnB1dFdyYXAgPSBzaGVldC5jcmVhdGVEaXYoeyBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMjBweCAwO1wiIH0gfSk7XG4gICAgY29uc3QgaW5wdXQgPSBpbnB1dFdyYXAuY3JlYXRlRWwoXCJpbnB1dFwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtaW5wdXRcIixcbiAgICAgIGF0dHI6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNraWxsIG5hbWUuLi5cIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2tpbGwgZm9sZGVyIGV4aXN0cywgbG9hZCBleGlzdGluZyBza2lsbHNcbiAgICBpZiAod29ya3NwYWNlLnNraWxsRm9sZGVyKSB7XG4gICAgICBjb25zdCBza2lsbHMgPSB0aGlzLmxvYWRTa2lsbHNGcm9tRm9sZGVyKHdvcmtzcGFjZS5za2lsbEZvbGRlcik7XG4gICAgICBpZiAoc2tpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzXCIsIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTZweDtcIiB9IH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHNraWxscykge1xuICAgICAgICAgIGNvbnN0IGNoaXAgPSBleGlzdGluZy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtY2hpcCBvbGVuLWNsaWNrYWJsZVwiIH0pO1xuICAgICAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBza2lsbDtcbiAgICAgICAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRTa2lsbChza2lsbCk7XG4gICAgICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICAgIHRleHQ6IFwiQUREXCIsXG4gICAgfSk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGFkZFNraWxsKHZhbCk7XG4gICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgICAgdGV4dDogXCJDQU5DRUxcIixcbiAgICB9KTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlU2hlZXQoKSk7XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVNoZWV0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRTa2lsbCA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghd29ya3NwYWNlLnNraWxscy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICB3b3Jrc3BhY2Uuc2tpbGxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IHdvcmtzcGFjZTtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKHdvcmtzcGFjZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlU2hlZXQgPSAoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFNraWxsc0Zyb21Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG4gICAgcmV0dXJuIGZpbGVzXG4gICAgICAuZmlsdGVyKChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGYpID0+IGYuYmFzZW5hbWUpXG4gICAgICAuc29ydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RmluaXNoTW9kYWwod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoKGVuZFRpbWUuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUuZ2V0VGltZSgpKSAvIDYwMDAwKTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICAgIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldFwiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiSE9XIERJRCBJVCBGRUVMP1wiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJvZHktaXRhbGljXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMTJweCAwIDIwcHg7XCIgfSxcbiAgICAgIHRleHQ6IGAke3dvcmtzcGFjZS5lbW9qaX0gJHt3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lfSBcdTAwQjcgJHtkdXJhdGlvbk1pbnV0ZXN9IG1pbnV0ZXNgLFxuICAgIH0pO1xuXG4gICAgLy8gQ29tcGxldGlvbiBzdGF0ZSBidXR0b25zXG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maWx0ZXIoKHMpID0+IHMuZW5hYmxlZCk7XG4gICAgY29uc3Qgc3RhdGVzR3JpZCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZXMtZ3JpZFwiIH0pO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGNvbnN0IGJ0biA9IHN0YXRlc0dyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlLWJ0blwiIH0pO1xuICAgICAgYnRuLnN0eWxlLmJvcmRlckNvbG9yID0gc3RhdGUuY29sb3I7XG5cbiAgICAgIGJ0bi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZS1pY29uXCIsIHRleHQ6IHN0YXRlLmljb24gfSk7XG4gICAgICBidG4uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGUtbmFtZVwiLCB0ZXh0OiBzdGF0ZS5uYW1lIH0pO1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQgPSB7XG4gICAgICAgICAgYWN0aXZpdHlJZDogd29ya3NwYWNlLmFjdGl2aXR5SWQsXG4gICAgICAgICAgYWN0aXZpdHlOYW1lOiB3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lLFxuICAgICAgICAgIGNhdGVnb3J5OiB3b3Jrc3BhY2UuY2F0ZWdvcnksXG4gICAgICAgICAgdHlwZTogc3RhdGUuaWQsXG4gICAgICAgICAgc3RhcnRUaW1lOiB3b3Jrc3BhY2Uuc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWU6IGVuZFRpbWUudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBkdXJhdGlvbk1pbnV0ZXMsXG4gICAgICAgICAgc2tpbGxzOiB3b3Jrc3BhY2Uuc2tpbGxzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZmluaXNoV29ya3NwYWNlKHJlc3VsdCwgd29ya3NwYWNlKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgICAvLyBEb24ndCBjbG9zZSBvbiBvdmVybGF5IHRhcCBcdTIwMTQgdXNlciBtdXN0IGNob29zZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VTaGVldCA9ICgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmaW5pc2hXb3Jrc3BhY2UocmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQsIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gMS4gQ3JlYXRlIHdvcmtzcGFjZSBtYXJrZG93biBmaWxlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXJcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgIGlmIChhY3Rpdml0eT8uZm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZVdvcmtzcGFjZUZpbGUocmVzdWx0LCBhY3Rpdml0eS5mb2xkZXIpO1xuICAgIH1cblxuICAgIC8vIDIuIFVwZGF0ZSB0aGUgYWN0aXZpdHkncyBkYWlseSBub3RlIGZyb250bWF0dGVyXG4gICAgYXdhaXQgdGhpcy5tYXJrQWN0aXZpdHlEb25lKHdvcmtzcGFjZSwgcmVzdWx0KTtcblxuICAgIC8vIDMuIEFwcGx5IFhQXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IHJlc3VsdC50eXBlKTtcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUueHBNdWx0aXBsaWVyID4gMCkge1xuICAgICAgY29uc3QgeHBHYWluID0gTWF0aC5yb3VuZCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uICogc3RhdGUueHBNdWx0aXBsaWVyKTtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbd29ya3NwYWNlLmNhdGVnb3J5XSArPSB4cEdhaW47XG4gICAgfVxuXG4gICAgLy8gNC4gQXBwbHkgYm9zcyBkYW1hZ2UgKHVubGVzcyBza2lwcGVkKVxuICAgIGlmIChyZXN1bHQudHlwZSAhPT0gXCJza2lwcGVkXCIpIHtcbiAgICAgIGNvbnN0IGFjdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgICAgaWYgKGFjdCkge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0LmRhbWFnZVBlckNvbXBsZXRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA1LiBDbGVhciBhY3RpdmUgd29ya3NwYWNlXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gbnVsbDtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblxuICAgIC8vIDYuIFNob3cgbm90aWNlXG4gICAgY29uc3Qgc3RhdGVMYWJlbCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gcmVzdWx0LnR5cGUpPy5uYW1lID8/IHJlc3VsdC50eXBlO1xuICAgIG5ldyBOb3RpY2UoYCR7d29ya3NwYWNlLmVtb2ppfSAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9IFx1MjAxNCAke3N0YXRlTGFiZWx9IFx1MDBCNyAke3Jlc3VsdC5kdXJhdGlvbk1pbnV0ZXN9bWApO1xuXG4gICAgLy8gNy4gU3dpdGNoIGJhY2sgdG8gZGFzaGJvYXJkXG4gICAgdGhpcy5wbHVnaW4uYWN0aXZhdGVEYXNoYm9hcmRWaWV3KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNyZWF0ZVdvcmtzcGFjZUZpbGUocmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQsIGZvbGRlcjogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IHJlc3VsdC5hY3Rpdml0eUlkKTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFjdGl2aXR5Py5wcm9wZXJ0eSA/PyByZXN1bHQuYWN0aXZpdHlOYW1lO1xuXG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKHJlc3VsdC5lbmRUaW1lKTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShyZXN1bHQuc3RhcnRUaW1lKTtcbiAgICBjb25zdCBkYXRlU3RyID0gZW5kVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAvLyBOYW1pbmc6IFwiV29ya3NwYWNlIFlZWVktTU0tREQgSEhNTVwiXG4gICAgY29uc3QgdGltZVN0ciA9IGAke1N0cmluZyhlbmRUaW1lLmdldEhvdXJzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKX0ke1N0cmluZyhlbmRUaW1lLmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBgV29ya3NwYWNlICR7ZGF0ZVN0cn0gJHt0aW1lU3RyfWA7XG4gICAgY29uc3QgZmlsZVBhdGggPSBgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9Lm1kYDtcblxuICAgIC8vIEJ1aWxkIHRpbWV6b25lLWF3YXJlIHRpbWVzdGFtcFxuICAgIGNvbnN0IHR6T2Zmc2V0ID0gLXN0YXJ0VGltZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGNvbnN0IHR6SG91cnMgPSBTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyh0ek9mZnNldCkgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0ek1pbnMgPSBTdHJpbmcoTWF0aC5hYnModHpPZmZzZXQpICUgNjApLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0elNpZ24gPSB0ek9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBzdGFydFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyB0elNpZ24gKyB0ekhvdXJzICsgXCI6XCIgKyB0ek1pbnM7XG5cbiAgICBjb25zdCBlbmRUaW1lc3RhbXAgPSBlbmRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgdHpTaWduICsgdHpIb3VycyArIFwiOlwiICsgdHpNaW5zO1xuXG4gICAgLy8gUGljayBhIHF1b3RlXG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuXG4gICAgLy8gQ2FwaXRhbGl6ZSBjb21wbGV0aW9uIHR5cGUgdG8gbWF0Y2ggZXhpc3RpbmcgZm9ybWF0IChEaXNjaXBsaW5lL0Zsb3cvU2tpcHBlZClcbiAgICBjb25zdCB0eXBlTmFtZSA9IHJlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSk7XG4gICAgY29uc3QgZHVyYXRpb25TdHIgPSBgJHtNYXRoLmZsb29yKHJlc3VsdC5kdXJhdGlvbk1pbnV0ZXMgLyA2MCl9aCAke3Jlc3VsdC5kdXJhdGlvbk1pbnV0ZXMgJSA2MH1tYDtcblxuICAgIC8vIEJ1aWxkIGZyb250bWF0dGVyXG4gICAgY29uc3QgZm1MaW5lcyA9IFtcbiAgICAgIFwiLS0tXCIsXG4gICAgICBcImVkaXRvci13aWR0aDogMTAwXCIsXG4gICAgICBgJHtwcm9wZXJ0eX06IHRydWVgLFxuICAgICAgYCR7cHJvcGVydHl9LVR5cGU6IFwiJHt0eXBlTmFtZX1cImAsXG4gICAgICBgVGltZXN0YW1wOiBcIiR7dGltZXN0YW1wfVwiYCxcbiAgICAgIGBlbmRUaW1lOiBcIiR7ZW5kVGltZXN0YW1wfVwiYCxcbiAgICAgIGBkdXJhdGlvbjogXCIke2R1cmF0aW9uU3RyfVwiYCxcbiAgICAgIGBjYXRlZ29yeTogXCIke3Jlc3VsdC5jYXRlZ29yeX1cImAsXG4gICAgICByZXN1bHQuc2tpbGxzLmxlbmd0aCA+IDBcbiAgICAgICAgPyBgc2tpbGxzOiBbJHtyZXN1bHQuc2tpbGxzLm1hcCgocykgPT4gYFwiJHtzfVwiYCkuam9pbihcIiwgXCIpfV1gXG4gICAgICAgIDogXCJza2lsbHM6IFtdXCIsXG4gICAgICBcImNzc2NsYXNzZXM6XCIsXG4gICAgICBcIiAgLSBoaWRlLXByb3BlcnRpZXNcIixcbiAgICAgIFwiLS0tXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGJvZHkgPSBbXG4gICAgICBcIlwiLFxuICAgICAgYCMgJHthY3Rpdml0eT8uZW1vamkgPz8gXCJcIn0gJHtyZXN1bHQuYWN0aXZpdHlOYW1lfSBXb3Jrc3BhY2VgLFxuICAgICAgXCJcIixcbiAgICAgIGA+IFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgICAgIGA+IFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgICBcIlwiLFxuICAgICAgXCIjIyBOb3Rlc1wiLFxuICAgICAgXCJcIixcbiAgICAgIFwiXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbLi4uZm1MaW5lcywgLi4uYm9keV0uam9pbihcIlxcblwiKTtcblxuICAgIC8vIEVuc3VyZSBmb2xkZXIgZXhpc3RzXG4gICAgY29uc3QgYWJzdHJhY3RGb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyKTtcbiAgICBpZiAoIWFic3RyYWN0Rm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZHVwbGljYXRlIGZpbGVuYW1lc1xuICAgIGxldCBmaW5hbFBhdGggPSBmaWxlUGF0aDtcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aCk7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBsZXQgY291bnRlciA9IDI7XG4gICAgICB3aGlsZSAodGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0gKCR7Y291bnRlcn0pLm1kYCkpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfVxuICAgICAgZmluYWxQYXRoID0gYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaW5hbFBhdGgsIGNvbnRlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYXJrQWN0aXZpdHlEb25lKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLCByZXN1bHQ/OiBXb3Jrc3BhY2VSZXN1bHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBGaW5kIHRvZGF5J3Mgbm90ZSBpbiB0aGUgYWN0aXZpdHkgZm9sZGVyIGFuZCBzZXQgdGhlIHByb3BlcnR5IHRvIHRydWVcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybjtcblxuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgYSBmaWxlIG1hdGNoaW5nIHRvZGF5J3MgZGF0ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IHRvZGF5RmlsZSA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgKTtcblxuICAgIGlmICh0b2RheUZpbGUpIHtcbiAgICAgIC8vIFVwZGF0ZSBmcm9udG1hdHRlciBcdTIwMTQgc2V0IHByb3BlcnR5IGFuZCBjb21wbGV0aW9uIHR5cGVcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcih0b2RheUZpbGUsIChmcm9udG1hdHRlcikgPT4ge1xuICAgICAgICBmcm9udG1hdHRlclthY3Rpdml0eS5wcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSByZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpO1xuICAgICAgICAgIGZyb250bWF0dGVyW2Ake2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlYF0gPSB0eXBlTmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGFpbHkgbm90ZSB3aXRoIHRoZSBwcm9wZXJ0eSBzZXRcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICAgIGNvbnN0IHR5cGVMaW5lID0gcmVzdWx0XG4gICAgICAgID8gYFxcbiR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGU6IFwiJHtyZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpfVwiYFxuICAgICAgICA6IFwiXCI7XG4gICAgICBjb25zdCBjb250ZW50ID0gYC0tLVxcbiR7YWN0aXZpdHkucHJvcGVydHl9OiB0cnVlJHt0eXBlTGluZX1cXG4tLS1cXG5gO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBGaWxlIG1pZ2h0IGFscmVhZHkgZXhpc3Qgd2l0aCBhIGRpZmZlcmVudCBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lKHNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChzZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3QgcyA9IHNlY29uZHMgJSA2MDtcbiAgICBpZiAoaCA+IDApIHtcbiAgICAgIHJldHVybiBgJHtofToke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7U3RyaW5nKHMpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtTdHJpbmcocykucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH1cbn1cblxuLy8gVXRpbGl0eVxuZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFNldHRpbmdzIFRhYlxuLy8gQ29sbGFwc2libGUgc2VjdGlvbnMgZm9yIGFsbCBwbHVnaW4gY29uZmlndXJhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgVGV4dENvbXBvbmVudCwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2aXR5Q29uZmlnLCBDYXRlZ29yeSwgVGVtcGxlVGFzaywgR2VuZGVyLCBXZWlnaHRMb2dGcmVxdWVuY3kgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERFRkFVTFRfQUNUSVZJVElFUywgREVGQVVMVF9ERVZfQ09ORklHIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgT2xlblNldHRpbmdUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihhcHAsIHBsdWdpbik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICBkaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29udGFpbmVyRWwuZW1wdHkoKTtcbiAgICBjb250YWluZXJFbC5hZGRDbGFzcyhcIm9sZW4tc2V0dGluZ3NcIik7XG5cbiAgICAvLyBIZWFkZXJcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICB0ZXh0OiBcIk9sZW5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAxLjRlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWJvdHRvbTogNHB4OyBwYWRkaW5nOiA4cHggMDtcIiB9LFxuICAgIH0pO1xuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiTXl0aG9sb2dpY2FsIExpZmUtT3BlcmF0aW5nIFN5c3RlbVwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiAxNnB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBRdWljayBzdGF0dXMgYmFyXG4gICAgdGhpcy5yZW5kZXJTdGF0dXNCYXIoY29udGFpbmVyRWwpO1xuXG4gICAgLy8gU2VjdGlvbnNcbiAgICB0aGlzLnJlbmRlclByb2ZpbGVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclBlcnNvbmFsU3RhdHNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFjdGl2aXRpZXNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckNhdGVnb3JpZXNTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclRlbXBsZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQ2FsZW5kYXJTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlclRoZW1lU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBZHZhbmNlZFNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyRGV2RGFzaGJvYXJkU2VjdGlvbihjb250YWluZXJFbCk7XG4gIH1cblxuICAvLyAtLS0gQ29sbGFwc2libGUgU2VjdGlvbiBIZWxwZXIgLS0tXG5cbiAgcHJpdmF0ZSBjcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIGljb246IHN0cmluZyxcbiAgICBkZWZhdWx0T3BlbiA9IGZhbHNlXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBzZWN0aW9uID0gcGFyZW50LmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVyID0gc2VjdGlvbi5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBnYXA6IDhweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICBtaW4taGVpZ2h0OiA0NHB4O1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFycm93ID0gaGVhZGVyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBkZWZhdWx0T3BlbiA/IFwiXFx1MjVCQ1wiIDogXCJcXHUyNUI2XCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMTBweDsgd2lkdGg6IDEycHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGhlYWRlci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogaWNvbiA/IGAke2ljb259ICAke3RpdGxlfWAgOiB0aXRsZSxcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjk1ZW07XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJvZHkgPSBzZWN0aW9uLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7IHN0eWxlOiBgcGFkZGluZzogMCAxNnB4OyBkaXNwbGF5OiAke2RlZmF1bHRPcGVuID8gXCJibG9ja1wiIDogXCJub25lXCJ9O2AgfSxcbiAgICB9KTtcblxuICAgIGhlYWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgaXNPcGVuID0gYm9keS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIjtcbiAgICAgIGJvZHkuc3R5bGUuZGlzcGxheSA9IGlzT3BlbiA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xuICAgICAgYm9keS5zdHlsZS5wYWRkaW5nID0gaXNPcGVuID8gXCIwIDE2cHhcIiA6IFwiMTJweCAxNnB4XCI7XG4gICAgICBhcnJvdy50ZXh0Q29udGVudCA9IGlzT3BlbiA/IFwiXFx1MjVCNlwiIDogXCJcXHUyNUJDXCI7XG4gICAgfSk7XG5cbiAgICBpZiAoZGVmYXVsdE9wZW4pIGJvZHkuc3R5bGUucGFkZGluZyA9IFwiMTJweCAxNnB4XCI7XG4gICAgcmV0dXJuIGJvZHk7XG4gIH1cblxuICAvLyAtLS0gU3RhdHVzIEJhciAtLS1cblxuICBwcml2YXRlIHJlbmRlclN0YXR1c0Jhcihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgaHBQZXJjZW50ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQID4gMFxuICAgICAgPyBNYXRoLnJvdW5kKCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC8gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQKSAqIDEwMClcbiAgICAgIDogMDtcblxuICAgIGNvbnN0IGJhciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDsgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IGBUaWVyICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuY3VycmVudFRpZXJ9LzEzYCB9KTtcbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGBIUCAke3RoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFB9LyR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc01heEhQfSAoJHtocFBlcmNlbnR9JSlgLFxuICAgIH0pO1xuXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5pblRhcnRhcnVzXG4gICAgICA/IFwiVEFSVEFSVVNcIlxuICAgICAgOiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIlxuICAgICAgICA/IFwiUEFVU0VEXCJcbiAgICAgICAgOiBcIkFDVElWRVwiO1xuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogc3RhdGUsXG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuaW5UYXJ0YXJ1cyA/IFwidmFyKC0tdGV4dC1lcnJvcilcIiA6IFwidmFyKC0tdGV4dC1ub3JtYWwpXCJ9O2AsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5taWdyYXRlZCA/IFwiTWlncmF0ZWRcIiA6IFwiTm90IG1pZ3JhdGVkXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc3R5bGU6IGl0YWxpYztcIiB9LFxuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIFByb2ZpbGUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJQcm9maWxlU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJQcm9maWxlXCIsIFwiXFx1ezFGNDY0fVwiKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIk5hbWVcIilcbiAgICAgIC5zZXREZXNjKFwiWW91ciBuYW1lIGZvciB0aGUgZGFzaGJvYXJkIGdyZWV0aW5nXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VyTmFtZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy51c2VyTmFtZSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJNeSBXaHlcIilcbiAgICAgIC5zZXREZXNjKFwiWW91ciBjb3JlIG1vdGl2YXRpb24gXHUyMDE0IHNob3duIHBlcmlvZGljYWxseSBvbiB0aGUgZGFzaGJvYXJkXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKGFyZWEpID0+XG4gICAgICAgIGFyZWFcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MubXlXaHkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubXlXaHkgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSGVybyBiYWNrZ3JvdW5kIGltYWdlXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IHBhdGggdG8gdGhlIGhlcm8gYmFja2dyb3VuZCBpbWFnZSAoZS5nLiwgaW1hZ2VzL2hlcm8uanBnKVwiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJwYXRoL3RvL2ltYWdlLmpwZ1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIb21lcGFnZVwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmaWxlIHRvIG9wZW4gd2hlbiBhY3Rpdml0aWVzIGFyZSBzZXQgdG8gJ09wZW4gaG9tZXBhZ2UnIGFmdGVyIGNvbXBsZXRpb24gKGUuZy4gSG9tZS5tZClcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiZS5nLiBIb21lLm1kXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmhvbWVwYWdlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmhvbWVwYWdlID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBQZXJzb25hbCBTdGF0cyAtLS1cblxuICBwcml2YXRlIHJlbmRlclBlcnNvbmFsU3RhdHNTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlBlcnNvbmFsIFN0YXRzXCIsIFwiXFx1ezFGNENBfVwiKTtcbiAgICBjb25zdCBzdGF0cyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHM7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJHZW5kZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVXNlZCB0byBzaG93IHRoZSBjb3JyZWN0IG11c2NsZSBmaWd1cmUgb24gdGhlIGhlYXRtYXBcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgbWFsZTogXCJNYWxlXCIsIGZlbWFsZTogXCJGZW1hbGVcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShzdGF0cy5nZW5kZXIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmdlbmRlciA9IHYgYXMgR2VuZGVyO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIZWlnaHQgKGNtKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoc3RhdHMuaGVpZ2h0ID8gU3RyaW5nKHN0YXRzLmhlaWdodCkgOiBcIlwiKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImUuZy4gMTc1XCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuaGVpZ2h0ID0gbjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJCaXJ0aGRhdGVcIilcbiAgICAgIC5zZXREZXNjKFwiVXNlZCB0byBjYWxjdWxhdGUgeW91ciBhZ2UgZm9yIHRoZSBzdHJlbmd0aCBjYWxjdWxhdG9yXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShzdGF0cy5iaXJ0aGRhdGUpXG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiWVlZWS1NTS1ERFwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgaWYgKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHYpIHx8IHYgPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5iaXJ0aGRhdGUgPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIEFnZSBkaXNwbGF5XG4gICAgaWYgKHN0YXRzLmJpcnRoZGF0ZSkge1xuICAgICAgY29uc3QgYWdlID0gdGhpcy5jYWxjdWxhdGVBZ2Uoc3RhdHMuYmlydGhkYXRlKTtcbiAgICAgIGJvZHkuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICB0ZXh0OiBgQWdlOiAke2FnZX0geWVhcnNgLFxuICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDEycHg7IHBhZGRpbmctbGVmdDogNHB4O1wiIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBXZWlnaHQgc2VjdGlvblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkN1cnJlbnQgd2VpZ2h0IChrZylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKHN0YXRzLmN1cnJlbnRXZWlnaHQgPyBTdHJpbmcoc3RhdHMuY3VycmVudFdlaWdodCkgOiBcIlwiKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImUuZy4gNjFcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUZsb2F0KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmN1cnJlbnRXZWlnaHQgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIldlaWdodCBsb2dnaW5nIGZyZXF1ZW5jeVwiKVxuICAgICAgLnNldERlc2MoXCJIb3cgb2Z0ZW4geW91IHdhbnQgdG8gYmUgcmVtaW5kZWQgdG8gbG9nIHlvdXIgd2VpZ2h0XCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7XG4gICAgICAgICAgXCJ0d2ljZS1hLXdlZWtcIjogXCJUd2ljZSBhIHdlZWtcIixcbiAgICAgICAgICBcImV2ZXJ5LXdlZWtcIjogXCJFdmVyeSB3ZWVrXCIsXG4gICAgICAgICAgXCJldmVyeS0yLXdlZWtzXCI6IFwiRXZlcnkgMiB3ZWVrc1wiLFxuICAgICAgICAgIFwiZXZlcnktMy1kYXlzXCI6IFwiRXZlcnkgMyBkYXlzXCIsXG4gICAgICAgICAgXCJldmVyeS01LWRheXNcIjogXCJFdmVyeSA1IGRheXNcIixcbiAgICAgICAgICBcImN1c3RvbVwiOiBcIkN1c3RvbSBpbnRlcnZhbFwiLFxuICAgICAgICB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShzdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3kpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZ0ZyZXF1ZW5jeSA9IHYgYXMgV2VpZ2h0TG9nRnJlcXVlbmN5O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGlmIChzdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3kgPT09IFwiY3VzdG9tXCIpIHtcbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKFwiQ3VzdG9tIGludGVydmFsIChkYXlzKVwiKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhzdGF0cy53ZWlnaHRMb2dDdXN0b21EYXlzKSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZ0N1c3RvbURheXMgPSBuO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIExvZyB3ZWlnaHQgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTG9nIGN1cnJlbnQgd2VpZ2h0XCIpXG4gICAgICAuc2V0RGVzYyhcIlNhdmUgdG9kYXkncyB3ZWlnaHQgdG8geW91ciBwcm9ncmVzcyBoaXN0b3J5XCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiTG9nIFdlaWdodFwiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCB3ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5jdXJyZW50V2VpZ2h0O1xuICAgICAgICAgIGlmICghdyB8fCB3IDw9IDApIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJFbnRlciB5b3VyIGN1cnJlbnQgd2VpZ2h0IGZpcnN0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIGZvciB0b2RheVxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2cuZmluZCgoZSkgPT4gZS5kYXRlID09PSB0b2RheSk7XG4gICAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBleGlzdGluZy53ZWlnaHQgPSB3O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5wdXNoKHsgZGF0ZTogdG9kYXksIHdlaWdodDogdyB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5sYXN0V2VpZ2h0TG9nRGF0ZSA9IHRvZGF5O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoYFdlaWdodCBsb2dnZWQ6ICR7d30ga2dgKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBXZWlnaHQgaGlzdG9yeSAobGFzdCAxMCBlbnRyaWVzKVxuICAgIGNvbnN0IGxvZyA9IHN0YXRzLndlaWdodExvZztcbiAgICBpZiAobG9nLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGhpc3RvcnlFbCA9IGJvZHkuY3JlYXRlRGl2KHtcbiAgICAgICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW46IDhweCAwOyBwYWRkaW5nOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1wiIH0sXG4gICAgICB9KTtcbiAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIHRleHQ6IFwiV2VpZ2h0IEhpc3RvcnlcIixcbiAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOWVtOyBtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBzb3J0ZWQgPSBbLi4ubG9nXS5zb3J0KChhLCBiKSA9PiBiLmRhdGUubG9jYWxlQ29tcGFyZShhLmRhdGUpKTtcbiAgICAgIGNvbnN0IHJlY2VudCA9IHNvcnRlZC5zbGljZSgwLCAxMCk7XG5cbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmVjZW50KSB7XG4gICAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogYCR7ZW50cnkuZGF0ZX06ICR7ZW50cnkud2VpZ2h0fSBrZ2AsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuOGVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IHBhZGRpbmc6IDJweCAwO1wiIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoc29ydGVkLmxlbmd0aCA+IDEwKSB7XG4gICAgICAgIGhpc3RvcnlFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogYC4uLiBhbmQgJHtzb3J0ZWQubGVuZ3RoIC0gMTB9IG1vcmUgZW50cmllc2AsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuNzVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBmb250LXN0eWxlOiBpdGFsaWM7XCIgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBZ2UoYmlydGhkYXRlOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGJpcnRoID0gbmV3IERhdGUoYmlydGhkYXRlKTtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBhZ2UgPSBub3cuZ2V0RnVsbFllYXIoKSAtIGJpcnRoLmdldEZ1bGxZZWFyKCk7XG4gICAgY29uc3QgbW9udGhEaWZmID0gbm93LmdldE1vbnRoKCkgLSBiaXJ0aC5nZXRNb250aCgpO1xuICAgIGlmIChtb250aERpZmYgPCAwIHx8IChtb250aERpZmYgPT09IDAgJiYgbm93LmdldERhdGUoKSA8IGJpcnRoLmdldERhdGUoKSkpIHtcbiAgICAgIGFnZS0tO1xuICAgIH1cbiAgICByZXR1cm4gYWdlO1xuICB9XG5cbiAgLy8gLS0tIEFjdGl2aXRpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJBY3Rpdml0aWVzXCIsIFwiXFx1ezFGM0FGfVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2ldO1xuICAgICAgdGhpcy5yZW5kZXJBY3Rpdml0eUl0ZW0oYm9keSwgYWN0aXZpdHksIGkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBidXR0b25cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIEFjdGl2aXR5XCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0FjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGlkOiBgY3VzdG9tLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgbmFtZTogXCJOZXcgQWN0aXZpdHlcIixcbiAgICAgICAgICAgIGVtb2ppOiBcIlxcdTJCNTBcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIlwiLFxuICAgICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSxcbiAgICAgICAgICAgIHdlZWtseVRhcmdldDogMyxcbiAgICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgICAgaGFzV29ya3NwYWNlOiBmYWxzZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiA1LFxuICAgICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICAgIHByZWZlcnJlZFRpbWU6IFwiYW55dGltZVwiLFxuICAgICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5wdXNoKG5ld0FjdGl2aXR5KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckFjdGl2aXR5SXRlbShjb250YWluZXI6IEhUTUxFbGVtZW50LCBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBIZWFkZXIgcm93IHdpdGggdG9nZ2xlXG4gICAgbmV3IFNldHRpbmcod3JhcHBlcilcbiAgICAgIC5zZXROYW1lKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9YClcbiAgICAgIC5zZXREZXNjKGAke2FjdGl2aXR5LmNhdGVnb3J5fSBcdTAwQjcgJHthY3Rpdml0eS5mb2xkZXIgfHwgXCJubyBmb2xkZXIgc2V0XCJ9YClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKGFjdGl2aXR5LmVuYWJsZWQpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBhbmRhYmxlIGRldGFpbHNcbiAgICBjb25zdCBkZXRhaWxzVG9nZ2xlID0gd3JhcHBlci5jcmVhdGVFbChcImRldGFpbHNcIik7XG4gICAgZGV0YWlsc1RvZ2dsZS5jcmVhdGVFbChcInN1bW1hcnlcIiwge1xuICAgICAgdGV4dDogXCJDb25maWd1cmVcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzVG9nZ2xlLmNyZWF0ZURpdigpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkubmFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmFtZSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRW1vamlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbW9qaSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQ2F0ZWdvcnlcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgYm9keTogXCJCb2R5XCIsIG1pbmQ6IFwiTWluZFwiLCBzcGlyaXQ6IFwiU3Bpcml0XCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuY2F0ZWdvcnkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jYXRlZ29yeSA9IHYgYXMgQ2F0ZWdvcnk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkFjdGl2aXR5IGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgd2l0aCBZWVlZLU1NLUREIG5vdGVzIGFuZCB3b3Jrc3BhY2UgbG9nc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkuZm9sZGVyKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5mb2xkZXIgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkZyb250bWF0dGVyIHByb3BlcnR5XCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5wcm9wZXJ0eSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJvcGVydHkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldlZWtseSB0YXJnZXRcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDcsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LndlZWtseVRhcmdldClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud2Vla2x5VGFyZ2V0ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJpb3JpdHkgKDEtMTApXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxMCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJpb3JpdHkpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByaW9yaXR5ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJlZmVycmVkIHRpbWVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBtb3JuaW5nOiBcIk1vcm5pbmdcIiwgYWZ0ZXJub29uOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIGV2ZW5pbmc6IFwiRXZlbmluZ1wiLCBhbnl0aW1lOiBcIkFueXRpbWVcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJlZmVycmVkVGltZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByZWZlcnJlZFRpbWUgPSB2IGFzIGFueTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmVnbGVjdCB0aHJlc2hvbGQgKGRheXMpXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxNCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkubmVnbGVjdFRocmVzaG9sZClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmVnbGVjdFRocmVzaG9sZCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVzdGltYXRlZCBkdXJhdGlvbiAobWludXRlcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVzdGltYXRlZER1cmF0aW9uID0gbjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJIYXMgd29ya3NwYWNlXCIpXG4gICAgICAuc2V0RGVzYyhcIk9wZW5zIHdvcmtzcGFjZSB2aWV3IHdpdGggdGltZXIgd2hlbiBzdGFydGVkLCBpbnN0ZWFkIG9mIG1hcmtpbmcgZG9uZSBpbW1lZGlhdGVseVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUoYWN0aXZpdHkuaGFzV29ya3NwYWNlKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmhhc1dvcmtzcGFjZSA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIHRlbXBsYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIkJ1aWx0LWluIHRlbXBsYXRlIElEIChlLmcuICd3b3Jrb3V0Jykgb3IgdmF1bHQgcGF0aCB0byAuanMgZmlsZS4gTGVhdmUgZW1wdHkgZm9yIGRlZmF1bHQgd29ya3NwYWNlLlwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIHdvcmtvdXRcIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLndvcmtzcGFjZVRlbXBsYXRlID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlNraWxsIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBza2lsbCB0cmVlIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gSG9tZS9TdGFydHMvRHJhd2luZy9Ta2lsbCB0cmVlXCIpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnNraWxsRm9sZGVyID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5za2lsbEZvbGRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQWZ0ZXIgY29tcGxldGlvblwiKVxuICAgICAgLnNldERlc2MoXCJXaGVyZSB0byBnbyBhZnRlciBmaW5pc2hpbmcgdGhpcyBhY3Rpdml0eVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoe1xuICAgICAgICAgIGRhc2hib2FyZDogXCJSZXR1cm4gdG8gT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgICAgICBzdGF5OiBcIlN0YXkgb24gbm90ZVwiLFxuICAgICAgICAgIGhvbWVwYWdlOiBcIk9wZW4gaG9tZXBhZ2VcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAhYWN0aXZpdHkuY29tcGxldGlvblJldHVyblRvIHx8IGFjdGl2aXR5LmNvbXBsZXRpb25SZXR1cm5UbyA9PT0gXCJkYXNoYm9hcmRcIlxuICAgICAgICAgICAgICA/IFwiZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgOiBhY3Rpdml0eS5jb21wbGV0aW9uUmV0dXJuVG8gPT09IFwic3RheVwiXG4gICAgICAgICAgICAgICAgPyBcInN0YXlcIlxuICAgICAgICAgICAgICAgIDogXCJob21lcGFnZVwiXG4gICAgICAgICAgKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY29tcGxldGlvblJldHVyblRvID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQmxvY2tzIChjb21tYS1zZXBhcmF0ZWQgYWN0aXZpdHkgSURzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoKGFjdGl2aXR5LmJsb2NrcyA/PyBbXSkuam9pbihcIiwgXCIpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmJsb2NrcyA9IHYuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBbHRlcm5hdGVzIHdpdGggKGFjdGl2aXR5IElEKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGggPz8gXCJcIikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5hbHRlcm5hdGVzV2l0aCA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJDaGFpbiBhZnRlciAoYWN0aXZpdHkgSUQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShhY3Rpdml0eS5jaGFpbkFmdGVyID8/IFwiXCIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2hhaW5BZnRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBEZWxldGUgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoXCJEZWxldGUgQWN0aXZpdHlcIilcbiAgICAgICAgICAuc2V0V2FybmluZygpXG4gICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBDYXRlZ29yaWVzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQ2F0ZWdvcmllc1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2F0ZWdvcmllc1wiLCBcIlxcdXsxRjNBOH1cIik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzOiB7IGtleTogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICAgIHsga2V5OiBcIm1pbmRcIiwgbGFiZWw6IFwiTWluZFwiIH0sXG4gICAgICB7IGtleTogXCJzcGlyaXRcIiwgbGFiZWw6IFwiU3Bpcml0XCIgfSxcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7Y2F0LmxhYmVsfSBjb2xvcmApXG4gICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+XG4gICAgICAgICAgY3BcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJUaXRsZSBvdmVycmlkZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0aGUgZHluYW1pYyB0aXRsZSAobGVhdmUgZW1wdHkgZm9yIGF1dG8pXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGl0bGVPdmVycmlkZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRlbXBsZSBVcGtlZXBcIiwgXCJcXHV7MUYzREJ9XFx1RkUwRlwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXTtcblxuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7dGFzay5lbW9qaX0gJHt0YXNrLm5hbWV9YClcbiAgICAgICAgLnNldERlc2MoYEV2ZXJ5ICR7dGFzay5pbnRlcnZhbERheXN9IGRheShzKWApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJOYW1lXCIpLnNldFZhbHVlKHRhc2submFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLm5hbWUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiRGF5c1wiKS5zZXRWYWx1ZShTdHJpbmcodGFzay5pbnRlcnZhbERheXMpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5pbnRlcnZhbERheXMgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJFbW9qaVwiKS5zZXRWYWx1ZSh0YXNrLmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0uZW1vamkgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgVGVtcGxlIFRhc2tcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdGVtcGxlLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgIG5hbWU6IFwiTmV3IFRhc2tcIixcbiAgICAgICAgICBsYXN0Q29tcGxldGVkOiBudWxsLFxuICAgICAgICAgIGludGVydmFsRGF5czogNyxcbiAgICAgICAgICBlbW9qaTogXCJcXHUyNzI4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJDYWxlbmRhclNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2FsZW5kYXIgSW50ZWdyYXRpb25cIiwgXCJcXHV7MUY0QzV9XCIpO1xuXG4gICAgYm9keS5jcmVhdGVFbChcInBcIiwge1xuICAgICAgdGV4dDogXCJNZXJnZSBleHRlcm5hbCB0YXNrcyBpbnRvIHlvdXIgRGF5IE1hcCB0aW1lbGluZS5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXNcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJEYWlseSBOb3RlcyBpbnRlZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJQYXJzZSB0YXNrcyBmcm9tIHlvdXIgZGFpbHkgbm90ZXMgKC0gWyBdIFRhc2sgQHRpbWUgfjMwbSlcIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRGFpbHkgTm90ZXMgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIFlZWVktTU0tREQubWQgbm90ZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiRGFpbHkgTm90ZXNcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBPcHRpb24gQjogVGFza3MgUGx1Z2luXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiVGFza3MgUGx1Z2luIGludGVncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlYWQgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgZnJvbSB0aGUgVGFza3MgcGx1Z2luXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbiA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gT3B0aW9uIEM6IFF1aWNrIFRhc2tzXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVpY2sgVGFza3NcIilcbiAgICAgIC5zZXREZXNjKFwiT2xlbidzIGJ1aWx0LWluIHRhc2sgc3lzdGVtXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MgPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIFF1aWNrIFRhc2tzIGxpc3RcbiAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICBjb25zdCB0b2RheVRhc2tzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maWx0ZXIoXG4gICAgICAgIChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXlcbiAgICAgICk7XG5cbiAgICAgIGlmICh0b2RheVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gYm9keS5jcmVhdGVEaXYoe1xuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiA4cHggMDsgcGFkZGluZzogOHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDZweDtcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0RWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgIHRleHQ6IFwiVG9kYXkncyBRdWljayBUYXNrc1wiLFxuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjllbTsgbWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrc1tpXTtcbiAgICAgICAgICBpZiAocXQuZGF0ZSAhPT0gdG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbmV3IFNldHRpbmcobGlzdEVsKVxuICAgICAgICAgICAgLnNldE5hbWUoYCR7cXQuZG9uZSA/IFwiXFx1MjcxM1wiIDogXCJcXHUyNUNCXCJ9ICR7cXQudGl0bGV9YClcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICBbcXQudGltZSwgcXQuZHVyYXRpb24gPyBgJHtxdC5kdXJhdGlvbn1tYCA6IFwiXCJdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFx1MDBCNyBcIikgfHwgXCJObyB0aW1lIHNldFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiRGVsZXRlXCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgUXVpY2sgVGFza1wiKS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCk7XG4gICAgICAgICAgLy8gQ2xvc2Ugc2V0dGluZ3MgXHUyMDE0IHRoZSBkaWFsb2cgYXBwZWFycyBvbiB0b3BcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRoZW1lIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyVGhlbWVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRoZW1lXCIsIFwiXFx1ezFGM0E4fVwiKTtcblxuICAgIGNvbnN0IHRoZW1lRmllbGRzOiB7IGtleTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBkZWZhdWx0VmFsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYmdQcmltYXJ5XCIsIGxhYmVsOiBcIkJhY2tncm91bmRcIiwgZGVmYXVsdFZhbDogXCIjMGMwYTA5XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRQcmltYXJ5XCIsIGxhYmVsOiBcIlRleHRcIiwgZGVmYXVsdFZhbDogXCIjZjVmMGU4XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRNdXRlZFwiLCBsYWJlbDogXCJNdXRlZCB0ZXh0XCIsIGRlZmF1bHRWYWw6IFwiIzkyOGQ4NVwiIH0sXG4gICAgICB7IGtleTogXCJhY2NlbnRHb2xkXCIsIGxhYmVsOiBcIkFjY2VudCAoZ29sZClcIiwgZGVmYXVsdFZhbDogXCIjYzlhODRjXCIgfSxcbiAgICAgIHsga2V5OiBcImRhbmdlclwiLCBsYWJlbDogXCJEYW5nZXJcIiwgZGVmYXVsdFZhbDogXCIjOGIyZDM1XCIgfSxcbiAgICAgIHsga2V5OiBcInN1Y2Nlc3NcIiwgbGFiZWw6IFwiU3VjY2Vzc1wiLCBkZWZhdWx0VmFsOiBcIiNkNDk0MGFcIiB9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoZW1lRmllbGRzKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShmaWVsZC5sYWJlbClcbiAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT5cbiAgICAgICAgICBjcFxuICAgICAgICAgICAgLnNldFZhbHVlKFxuICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgYXMgYW55KT8uW2ZpZWxkLmtleV0gPz8gZmllbGQuZGVmYXVsdFZhbFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyBhcyBhbnkpW2ZpZWxkLmtleV0gPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlJlc2V0IHRvIEVseXNpYW4gRGFya1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgPSB7fTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICBuZXcgTm90aWNlKFwiVGhlbWUgcmVzZXQgdG8gRWx5c2lhbiBEYXJrIGRlZmF1bHRzXCIpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIEFkdmFuY2VkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkFkdmFuY2VkXCIsIFwiXFx1MjY5OVxcdUZFMEZcIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJTaW11bGF0ZWQgZGF0ZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0b2RheSdzIGRhdGUgZm9yIHRlc3RpbmcgKFlZWVktTU0tREQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIllZWVktTU0tRERcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA9IHYudHJpbSgpIHx8IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlN5c3RlbSBzdGF0ZVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkXG4gICAgICAgICAgLmFkZE9wdGlvbnMoeyBhY3RpdmU6IFwiQWN0aXZlXCIsIHBhdXNlZDogXCJQYXVzZWRcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdiBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIjtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gXCJwYXVzZWRcIiAmJiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT09IFwiYWN0aXZlXCIgJiYgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF1c2VkTXMgPSBEYXRlLm5vdygpIC0gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50b3RhbFBhdXNlZFRpbWUgKz0gcGF1c2VkTXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVvdGUgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIHF1b3RlIGZpbGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIlF1b3Rlcy9TdG9pY1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGggPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJSZS1ydW4gbWlncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlLWltcG9ydCBkYXRhIGZyb20gdGhlIE15dGhvbG9naWNhbCBIYWJpdCBUcmFja2VyIHBsdWdpblwiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIk1pZ3JhdGVcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1pZ3JhdGVkID0gZmFsc2U7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgLy8gUmVsb2FkIHRoZSBwbHVnaW4gdG8gdHJpZ2dlciBtaWdyYXRpb25cbiAgICAgICAgICBhd2FpdCAodGhpcy5wbHVnaW4gYXMgYW55KS5vbmxvYWQoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICBuZXcgTm90aWNlKFwiTWlncmF0aW9uIGNvbXBsZXRlXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBEZXZlbG9wZXIgRGFzaGJvYXJkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyRGV2RGFzaGJvYXJkU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJEZXZlbG9wZXIgRGFzaGJvYXJkXCIsIFwiXFx1ezFGNkUwfVxcdUZFMEZcIik7XG5cbiAgICBib2R5LmNyZWF0ZUVsKFwicFwiLCB7XG4gICAgICB0ZXh0OiBcIkVkaXQgdGhlIHJhdyBkZXZDb25maWcgSlNPTi4gQ2hhbmdlcyBhcmUgYXBwbGllZCBvbiBzYXZlLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHRhcmVhID0gYm9keS5jcmVhdGVFbChcInRleHRhcmVhXCIsIHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMzAwcHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpOyBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLCBudWxsLCAyKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiU2F2ZSBkZXZDb25maWdcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodGV4dGFyZWEudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIERFRkFVTFRfREVWX0NPTkZJRyxcbiAgICAgICAgICAgICAgcGFyc2VkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiZGV2Q29uZmlnIHNhdmVkIGFuZCBhcHBsaWVkXCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gZGVmYXVsdHNcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0geyAuLi5ERUZBVUxUX0RFVl9DT05GSUcgfTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZywgbnVsbCwgMik7XG4gICAgICAgICAgbmV3IE5vdGljZShcImRldkNvbmZpZyByZXNldCB0byBkZWZhdWx0c1wiKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBvcnQvSW1wb3J0XG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRXhwb3J0IGFsbCBzZXR0aW5nc1wiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkNvcHkgdG8gY2xpcGJvYXJkXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncywgbnVsbCwgMik7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGpzb24pO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlNldHRpbmdzIGNvcGllZCB0byBjbGlwYm9hcmRcIik7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgbW9iaWxlIFx1MjAxNCBzaG93IGluIGEgdGV4dGFyZWEgZm9yIG1hbnVhbCBjb3B5XG4gICAgICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIHRhLnZhbHVlID0ganNvbjtcbiAgICAgICAgICAgIHRhLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo1MCU7ei1pbmRleDo5OTk5O2ZvbnQtc2l6ZToxMXB4O1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YSk7XG4gICAgICAgICAgICB0YS5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRhLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJUYXAgdGhlIHRleHQgYXJlYSBhbmQgY29weSBtYW51YWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSW1wb3J0IHNldHRpbmdzXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKGFyZWEpID0+IHtcbiAgICAgICAgYXJlYS5zZXRQbGFjZWhvbGRlcihcIlBhc3RlIEpTT04gaGVyZS4uLlwiKTtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjgwcHhcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUuZm9udFNpemUgPSBcIjExcHhcIjtcblxuICAgICAgICAvLyBTdG9yZSByZWZlcmVuY2UgZm9yIHRoZSBpbXBvcnQgYnV0dG9uXG4gICAgICAgIChib2R5IGFzIGFueSkuX2ltcG9ydEFyZWEgPSBhcmVhO1xuICAgICAgfSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJJbXBvcnRcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcmVhID0gKGJvZHkgYXMgYW55KS5faW1wb3J0QXJlYTtcbiAgICAgICAgICAgIGlmICghYXJlYSkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShhcmVhLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFyc2VkKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiU2V0dGluZ3MgaW1wb3J0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGF0ZSBFbmdpbmVcbi8vIExvYWRzIC5qcyB0ZW1wbGF0ZSBmaWxlcyBmcm9tIHZhdWx0LCBjcmVhdGVzIGEgc2FuZGJveGVkXG4vLyBleGVjdXRpb24gY29udGV4dCB3aXRoIGRhdGEtYmluZGluZyB0byBub3RlIGZyb250bWF0dGVyLFxuLy8gYW5kIHJlbmRlcnMgVUkgaW50byBhIGNvbnRhaW5lciBlbGVtZW50LlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHsgQlVJTFRJTl9URU1QTEFURVMgfSBmcm9tIFwiLi9idWlsdGluc1wiO1xuXG4vKipcbiAqIFRoZSBjb250ZXh0IG9iamVjdCBwYXNzZWQgdG8gZXZlcnkgdGVtcGxhdGUgYXQgcnVudGltZS5cbiAqIFRlbXBsYXRlcyByZWNlaXZlIHRoaXMgYXMgYGN0eGAgYW5kIHVzZSBpdCB0byByZWFkL3dyaXRlXG4gKiBmcm9udG1hdHRlciBhbmQgYnVpbGQgdGhlaXIgVUkuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVGVtcGxhdGVDb250ZXh0IHtcbiAgLyoqIE9ic2lkaWFuIEFwcCBpbnN0YW5jZSAqL1xuICBhcHA6IEFwcDtcbiAgLyoqIE9sZW4gcGx1Z2luIHJlZmVyZW5jZSAqL1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG4gIC8qKiBUaGUgZGF0YSBub3RlIGN1cnJlbnRseSBiZWluZyB2aWV3ZWQgKi9cbiAgZmlsZTogVEZpbGU7XG4gIC8qKiBET00gY29udGFpbmVyIHRvIHJlbmRlciBpbnRvICovXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG5cbiAgLy8gLS0tIERhdGEgQmluZGluZyAtLS1cblxuICAvKiogU25hcHNob3Qgb2YgdGhlIG5vdGUncyBjdXJyZW50IGZyb250bWF0dGVyIChyZWFkLW9ubHkgb2JqZWN0KSAqL1xuICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIC8qKiBHZXQgYSBzaW5nbGUgZnJvbnRtYXR0ZXIgdmFsdWUsIG9yIGFsbCBmcm9udG1hdHRlciBpZiBubyBrZXkgKi9cbiAgZ2V0RGF0YShrZXk/OiBzdHJpbmcpOiB1bmtub3duO1xuICAvKiogV3JpdGUgYSBzaW5nbGUga2V5IGJhY2sgdG8gdGhlIG5vdGUncyBmcm9udG1hdHRlciAqL1xuICBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD47XG4gIC8qKiBCYXRjaC13cml0ZSBtdWx0aXBsZSBrZXlzIHRvIHRoZSBub3RlJ3MgZnJvbnRtYXR0ZXIgKi9cbiAgc2V0TXVsdGlwbGVEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx2b2lkPjtcblxuICAvLyAtLS0gVmF1bHQgSGVscGVycyAtLS1cblxuICAvKiogUmVhZCByYXcgdGV4dCBvZiBhbnkgdmF1bHQgZmlsZSBieSBwYXRoICovXG4gIHJlYWRGaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD47XG4gIC8qKiBHZXQgYWxsIG1hcmtkb3duIGZpbGVzIGluc2lkZSBhIGZvbGRlciAqL1xuICBnZXRGaWxlc0luRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IFRGaWxlW107XG4gIC8qKiBHZXQgZnJvbnRtYXR0ZXIgb2YgYW55IGZpbGUgYnkgcGF0aCAqL1xuICBnZXRGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsO1xuXG4gIC8vIC0tLSBVdGlsaXRpZXMgLS0tXG5cbiAgLyoqIE9ic2lkaWFuIE5vdGljZSBmb3IgdG9hc3RzICovXG4gIG5vdGljZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiB2b2lkO1xuICAvKiogbW9tZW50LmpzIChwcm92aWRlZCBieSBPYnNpZGlhbiBnbG9iYWxseSkgKi9cbiAgbW9tZW50OiB0eXBlb2Ygd2luZG93Lm1vbWVudDtcbiAgLyoqIENyZWF0ZSBhbiBIVE1MIGVsZW1lbnQgKHNob3J0aGFuZCkgKi9cbiAgY3JlYXRlRWw8SyBleHRlbmRzIGtleW9mIEhUTUxFbGVtZW50VGFnTmFtZU1hcD4oXG4gICAgdGFnOiBLLFxuICAgIGF0dHJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgKTogSFRNTEVsZW1lbnRUYWdOYW1lTWFwW0tdO1xufVxuXG4vKipcbiAqIENvcmUgZW5naW5lIHRoYXQgbWFuYWdlcyB0ZW1wbGF0ZSBsb29rdXAsIGxvYWRpbmcsIGFuZCBleGVjdXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUVuZ2luZSB7XG4gIHByaXZhdGUgYXBwOiBBcHA7XG4gIHByaXZhdGUgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICAvKiogQ2FjaGUgb2YgbG9hZGVkIHRlbXBsYXRlIHNvdXJjZSBjb2RlIChwYXRoIFx1MjE5MiBzb3VyY2UpICovXG4gIHByaXZhdGUgdGVtcGxhdGVDYWNoZTogTWFwPHN0cmluZywgc3RyaW5nPiA9IG5ldyBNYXAoKTtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gIH1cblxuICAvLyAtLS0gQWN0aXZpdHkgTG9va3VwIC0tLVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSB3b3Jrc3BhY2UgdGVtcGxhdGUgZm9yIGEgZ2l2ZW4gYWN0aXZpdHkgdHlwZS5cbiAgICogTG9va3MgdXAgdGhlIGFjdGl2aXR5IGJ5IElEIGluIHNldHRpbmdzIGFuZCByZXR1cm5zIGl0cyB3b3Jrc3BhY2VUZW1wbGF0ZSBJRC5cbiAgICogVGhlIElEIG1heSByZWZlciB0byBhIGJ1aWx0LWluIHRlbXBsYXRlIChlLmcuIFwid29ya291dFwiKSBvciBhIHZhdWx0IHBhdGguXG4gICAqL1xuICBmaW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlOiBzdHJpbmcpOiB7IHRlbXBsYXRlSWQ6IHN0cmluZyB9IHwgbnVsbCB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoXG4gICAgICAoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlUeXBlICYmIGEuZW5hYmxlZCAmJiBhLndvcmtzcGFjZVRlbXBsYXRlLFxuICAgICk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHsgdGVtcGxhdGVJZDogYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUhIH07XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgTG9hZGluZyAtLS1cblxuICAvKipcbiAgICogTG9hZCB0aGUgdGVtcGxhdGUgc291cmNlIGZyb20gdmF1bHQuIENhY2hlcyB1bnRpbCBpbnZhbGlkYXRlZC5cbiAgICovXG4gIGFzeW5jIGxvYWRUZW1wbGF0ZVNvdXJjZSh0ZW1wbGF0ZVBhdGg6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xuICAgIC8vIENoZWNrIGNhY2hlIGZpcnN0XG4gICAgaWYgKHRoaXMudGVtcGxhdGVDYWNoZS5oYXModGVtcGxhdGVQYXRoKSkge1xuICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGVDYWNoZS5nZXQodGVtcGxhdGVQYXRoKSE7XG4gICAgfVxuXG4gICAgLy8gTm9ybWFsaXplIHBhdGggXHUyMDE0IGFkZCAuanMgaWYgbWlzc2luZ1xuICAgIGxldCByZXNvbHZlZFBhdGggPSB0ZW1wbGF0ZVBhdGg7XG4gICAgaWYgKCFyZXNvbHZlZFBhdGguZW5kc1dpdGgoXCIuanNcIikgJiYgIXJlc29sdmVkUGF0aC5lbmRzV2l0aChcIi5tZFwiKSkge1xuICAgICAgcmVzb2x2ZWRQYXRoICs9IFwiLmpzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChyZXNvbHZlZFBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLnNldCh0ZW1wbGF0ZVBhdGgsIHNvdXJjZSk7XG4gICAgICByZXR1cm4gc291cmNlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgT2xlbiBUZW1wbGF0ZUVuZ2luZTogRmFpbGVkIHRvIHJlYWQgdGVtcGxhdGUgJHtyZXNvbHZlZFBhdGh9OmAsIGVycik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW52YWxpZGF0ZSB0aGUgY2FjaGUgZm9yIGEgc3BlY2lmaWMgdGVtcGxhdGUgKGUuZy4gYWZ0ZXIgZWRpdHMpLlxuICAgKi9cbiAgaW52YWxpZGF0ZUNhY2hlKHRlbXBsYXRlUGF0aD86IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0ZW1wbGF0ZVBhdGgpIHtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5kZWxldGUodGVtcGxhdGVQYXRoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50ZW1wbGF0ZUNhY2hlLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIENvbnRleHQgQ3JlYXRpb24gLS0tXG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBUZW1wbGF0ZUNvbnRleHQgdGhhdCBnZXRzIHBhc3NlZCB0byB0aGUgdGVtcGxhdGUgZnVuY3Rpb24uXG4gICAqL1xuICBwcml2YXRlIGJ1aWxkQ29udGV4dChcbiAgICBmaWxlOiBURmlsZSxcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICAgIGZyb250bWF0dGVyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbiAgKTogVGVtcGxhdGVDb250ZXh0IHtcbiAgICBjb25zdCBhcHAgPSB0aGlzLmFwcDtcbiAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnBsdWdpbjtcblxuICAgIHJldHVybiB7XG4gICAgICBhcHAsXG4gICAgICBwbHVnaW4sXG4gICAgICBmaWxlLFxuICAgICAgY29udGFpbmVyLFxuXG4gICAgICAvLyAtLS0gRGF0YSBCaW5kaW5nIC0tLVxuXG4gICAgICBmcm9udG1hdHRlcjogeyAuLi5mcm9udG1hdHRlciB9LFxuXG4gICAgICBnZXREYXRhKGtleT86IHN0cmluZyk6IHVua25vd24ge1xuICAgICAgICBpZiAoIWtleSkgcmV0dXJuIHsgLi4uZnJvbnRtYXR0ZXIgfTtcbiAgICAgICAgcmV0dXJuIGZyb250bWF0dGVyW2tleV07XG4gICAgICB9LFxuXG4gICAgICBhc3luYyBzZXREYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogdW5rbm93bik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgICAgIGZtW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFVwZGF0ZSBvdXIgbG9jYWwgc25hcHNob3RcbiAgICAgICAgZnJvbnRtYXR0ZXJba2V5XSA9IHZhbHVlO1xuICAgICAgfSxcblxuICAgICAgYXN5bmMgc2V0TXVsdGlwbGVEYXRhKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIGF3YWl0IGFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIoZmlsZSwgKGZtKSA9PiB7XG4gICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICAgIGZtW2tdID0gdjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgbG9jYWwgc25hcHNob3RcbiAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YSkpIHtcbiAgICAgICAgICBmcm9udG1hdHRlcltrXSA9IHY7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8vIC0tLSBWYXVsdCBIZWxwZXJzIC0tLVxuXG4gICAgICBhc3luYyByZWFkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAgICAgY29uc3QgZiA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghZiB8fCAhKGYgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gYXBwLnZhdWx0LnJlYWQoZik7XG4gICAgICB9LFxuXG4gICAgICBnZXRGaWxlc0luRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IFRGaWxlW10ge1xuICAgICAgICByZXR1cm4gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoXG4gICAgICAgICAgKGYpID0+IGYucGF0aC5zdGFydHNXaXRoKGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIiksXG4gICAgICAgICk7XG4gICAgICB9LFxuXG4gICAgICBnZXRGaWxlTWV0YWRhdGEocGF0aDogc3RyaW5nKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gfCBudWxsIHtcbiAgICAgICAgY29uc3QgZiA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocGF0aCk7XG4gICAgICAgIGlmICghZiB8fCAhKGYgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybiBudWxsO1xuICAgICAgICBjb25zdCBjYWNoZSA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmKTtcbiAgICAgICAgcmV0dXJuIChjYWNoZT8uZnJvbnRtYXR0ZXIgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID8/IG51bGw7XG4gICAgICB9LFxuXG4gICAgICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gICAgICBub3RpY2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIG5ldyBOb3RpY2UobWVzc2FnZSwgdGltZW91dCk7XG4gICAgICB9LFxuXG4gICAgICBtb21lbnQ6IHdpbmRvdy5tb21lbnQsXG5cbiAgICAgIGNyZWF0ZUVsPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgICAgICB0YWc6IEssXG4gICAgICAgIGF0dHJzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbiAgICAgICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuICAgICAgICBpZiAoYXR0cnMpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyhhdHRycykpIHtcbiAgICAgICAgICAgIGlmIChrID09PSBcInRleHRcIikge1xuICAgICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwiaHRtbFwiKSB7XG4gICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwiY2xzXCIgfHwgayA9PT0gXCJjbGFzc1wiKSB7XG4gICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IHY7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGsgPT09IFwic3R5bGVcIikge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5jc3NUZXh0ID0gdjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShrLCB2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgLy8gLS0tIFJlbmRlcmluZyAtLS1cblxuICAvKipcbiAgICogTWFpbiByZW5kZXIgbWV0aG9kLiBSZXNvbHZlcyBhIHRlbXBsYXRlIElEIChidWlsdC1pbiBvciB2YXVsdCBwYXRoKVxuICAgKiBhbmQgcmVuZGVycyBpdCBpbnRvIGEgY29udGFpbmVyIGJvdW5kIHRvIHRoZSBnaXZlbiBub3RlJ3MgZnJvbnRtYXR0ZXIuXG4gICAqL1xuICBhc3luYyByZW5kZXIoXG4gICAgdGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGZpbGU6IFRGaWxlLFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vIDEuIFJlc29sdmUgdGVtcGxhdGUgc291cmNlOiBjaGVjayBidWlsdC1pbiB0ZW1wbGF0ZXMgZmlyc3QsIHRoZW4gdmF1bHRcbiAgICBsZXQgc291cmNlOiBzdHJpbmcgfCBudWxsID0gQlVJTFRJTl9URU1QTEFURVNbdGVtcGxhdGVJZF0gPz8gbnVsbDtcblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICAvLyBGYWxsIGJhY2sgdG8gbG9hZGluZyBmcm9tIHZhdWx0IGFzIGEgLmpzIGZpbGUgcGF0aFxuICAgICAgc291cmNlID0gYXdhaXQgdGhpcy5sb2FkVGVtcGxhdGVTb3VyY2UodGVtcGxhdGVJZCk7XG4gICAgfVxuXG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIG5vdCBmb3VuZDogJHt0ZW1wbGF0ZUlkfWAsXG4gICAgICAgIFwiQ2hlY2sgdGhlIHRlbXBsYXRlIElEIGluIE9sZW4gU2V0dGluZ3MgXHUyMTkyIEFjdGl2aXRpZXMgXHUyMTkyIENvbmZpZ3VyZS4gQnVpbHQtaW4gdGVtcGxhdGVzOiB3b3Jrb3V0LlwiLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAyLiBHZXQgY3VycmVudCBmcm9udG1hdHRlclxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgY29uc3QgZnJvbnRtYXR0ZXIgPSAoY2FjaGU/LmZyb250bWF0dGVyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyB7fTtcblxuICAgIC8vIDMuIEJ1aWxkIGNvbnRleHRcbiAgICBjb25zdCBjdHggPSB0aGlzLmJ1aWxkQ29udGV4dChmaWxlLCBjb250YWluZXIsIGZyb250bWF0dGVyKTtcblxuICAgIC8vIDQuIEV4ZWN1dGUgdGVtcGxhdGVcbiAgICB0cnkge1xuICAgICAgLy8gV2Ugd3JhcCB0aGUgdGVtcGxhdGUgc291cmNlIHNvIHRoYXQgYGN0eGAgaXMgYXZhaWxhYmxlIGFzIGEgbG9jYWwgdmFyaWFibGUuXG4gICAgICAvLyBUaGUgdGVtcGxhdGUgY29kZSBjYW4gZGVzdHJ1Y3R1cmUgZnJvbSBjdHggb3IgdXNlIGl0IGRpcmVjdGx5LlxuICAgICAgY29uc3QgZm4gPSBuZXcgRnVuY3Rpb24oXCJjdHhcIiwgc291cmNlKTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKGN0eCk7XG5cbiAgICAgIC8vIElmIHRoZSB0ZW1wbGF0ZSByZXR1cm5zIGEgcHJvbWlzZSAoYXN5bmMgdGVtcGxhdGUpLCBhd2FpdCBpdFxuICAgICAgaWYgKHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0LnRoZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBhd2FpdCByZXN1bHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgT2xlbiBUZW1wbGF0ZUVuZ2luZTogRXJyb3IgZXhlY3V0aW5nIHRlbXBsYXRlICR7dGVtcGxhdGVJZH06YCwgZXJyKTtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIGVycm9yOiAkeyhlcnIgYXMgRXJyb3IpLm1lc3NhZ2V9YCxcbiAgICAgICAgYEluIHRlbXBsYXRlOiAke3RlbXBsYXRlSWR9YCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBlcnJvciBtZXNzYWdlIGluc2lkZSB0aGUgY29udGFpbmVyLlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJFcnJvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCB0aXRsZTogc3RyaW5nLCBoaW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBlcnJvckRpdiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvclwiIH0pO1xuICAgIGVycm9yRGl2LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3ItdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG4gICAgZXJyb3JEaXYuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvci1oaW50XCIsIHRleHQ6IGhpbnQgfSk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gVGVtcGxhdGUgXHUyMDE0IFdvcmtvdXQgVHJhY2tlciB2Ni4wXG4vLyBSZW5kZXJzIGluc2lkZSB0aGUgT2xlbiB3b3Jrc3BhY2UgZm9yIHRoZSBcIndvcmtvdXRcIiBhY3Rpdml0eS5cbi8vIEFsbCBVSSBsaXZlcyBoZXJlIFx1MjAxNCBkYWlseSBub3RlcyBvbmx5IHN0b3JlIFlBTUwgZnJvbnRtYXR0ZXIuXG4vLyBEYXRhIGlzIHJlYWQvd3JpdHRlbiB2aWEgY3R4LmdldERhdGEgLyBjdHguc2V0RGF0YS5cbi8vIFBlcnNvbmFsIHN0YXRzIG5vdyByZWFkIGZyb20gcGx1Z2luIHNldHRpbmdzIChwZXJzb25hbFN0YXRzKS5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5jb25zdCB7IGNvbnRhaW5lciwgZ2V0RGF0YSwgc2V0RGF0YSwgc2V0TXVsdGlwbGVEYXRhLCBhcHAsIG1vbWVudCwgbm90aWNlLFxuICAgICAgICBjcmVhdGVFbCwgZmlsZSwgcmVhZEZpbGUsIGdldEZpbGVzSW5Gb2xkZXIsIGdldEZpbGVNZXRhZGF0YSB9ID0gY3R4O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNFVFRJTkdTIFx1MjAxNCBFZGl0IHRoZXNlIHRvIG1hdGNoIHlvdXIgdmF1bHQgc3RydWN0dXJlXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IFNFVFRJTkdTID0ge1xuICAvLyBXaGVyZSBkYWlseSB3b3Jrb3V0IG5vdGVzIGFyZSBzdG9yZWRcbiAgd29ya291dEZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAxIFdvcmtvdXRcIixcbiAgLy8gRm9sZGVyIGNvbnRhaW5pbmcgZXhlcmNpc2Ugc3RhbmRhcmQgLm1kIGZpbGVzIChlLmcuIFwiQmVuY2ggUHJlc3MubWRcIilcbiAgZXhlcmNpc2VEYkZvbGRlcjogXCJIb21lL0FjdGl2aXRpZXMvRXhlcmNpc2VzIGRhdGFiYXNlXCIsXG59O1xuXG4vLyBSZWFkIHBlcnNvbmFsIHN0YXRzIGZyb20gcGx1Z2luIHNldHRpbmdzIChzZXQgaW4gT2xlbiBTZXR0aW5ncyA+IFBlcnNvbmFsIFN0YXRzKVxuY29uc3QgX3BsdWdpblN0YXRzID0gY3R4LnBsdWdpbj8uc2V0dGluZ3M/LnBlcnNvbmFsU3RhdHMgfHwge307XG5jb25zdCBQRVJTT05BTCA9IHtcbiAgd2VpZ2h0OiBfcGx1Z2luU3RhdHMuY3VycmVudFdlaWdodCB8fCA2MSxcbiAgaGVpZ2h0OiBfcGx1Z2luU3RhdHMuaGVpZ2h0IHx8IDE3NSxcbiAgYmlydGhkYXRlOiBfcGx1Z2luU3RhdHMuYmlydGhkYXRlIHx8IFwiMjAwNS0xMS0yOVwiLFxuICBnZW5kZXI6IF9wbHVnaW5TdGF0cy5nZW5kZXIgfHwgXCJtYWxlXCIsXG59O1xuXG4vLyBNdXNjbGUgZ3JvdXBzIGF2YWlsYWJsZSBmb3Igc2VsZWN0aW9uLCB3aXRoIG9wdGlvbmFsIHN1Ymdyb3Vwc1xuY29uc3QgTVVTQ0xFX0dST1VQUyA9IHtcbiAgXCJOZWNrXCI6ICAgICAgeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzRVxcdUREQjRcIiB9LFxuICBcIkJhY2tcIjogICAgICB7IHN1Ymdyb3VwczogW1wiTGF0c1wiLCBcIlRyYXBzXCIsIFwiUmhvbWJvaWRzXCIsIFwiTG93ZXIgQmFja1wiLCBcIlJlYXIgRGVsdHNcIl0sIGljb246IFwiXFx1RDgzRFxcdUREMTlcIiB9LFxuICBcIkNoZXN0XCI6ICAgICB7IHN1Ymdyb3VwczogbnVsbCwgaWNvbjogXCJcXHVEODNEXFx1RENBQVwiIH0sXG4gIFwiU2hvdWxkZXJzXCI6IHsgc3ViZ3JvdXBzOiBbXCJGcm9udCBEZWx0c1wiLCBcIlNpZGUgRGVsdHNcIiwgXCJSZWFyIERlbHRzXCJdLCBpY29uOiBcIlxcdUQ4M0NcXHVERkFGXCIgfSxcbiAgXCJDb3JlXCI6ICAgICAgeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzQ1xcdURGQUZcIiB9LFxuICBcIkxlZ3NcIjogICAgICB7IHN1Ymdyb3VwczogW1wiUXVhZHNcIiwgXCJIYW1zdHJpbmdzXCIsIFwiR2x1dGVzXCIsIFwiQ2FsdmVzXCIsIFwiQWRkdWN0b3JzXCJdLCBpY29uOiBcIlxcdUQ4M0VcXHVEREI1XCIgfSxcbiAgXCJBcm1zXCI6ICAgICAgeyBzdWJncm91cHM6IFtcIkJpY2Vwc1wiLCBcIlRyaWNlcHNcIiwgXCJGb3JlYXJtc1wiXSwgaWNvbjogXCJcXHVEODNEXFx1RENBQVwiIH0sXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFRIRU1FICYgQ09OU1RBTlRTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmNvbnN0IFRIRU1FID0ge1xuICBjb2xvcjogXCIjOWE4YzdhXCIsXG4gIGNvbG9ySG92ZXI6IFwiI2FhOWM4YVwiLFxuICBjb2xvckJvcmRlcjogXCIjM2EzNDJhXCIsXG4gIGNvbG9yQm9yZGVySG92ZXI6IFwiIzRhNDQzYVwiLFxuICBjb2xvck11dGVkOiBcIiM2YTVhNGFcIixcbiAgY29sb3JMaWdodDogXCIjYjhhODkwXCIsXG4gIGNvbG9yRGlzY2lwbGluZTogXCIjYTg5ODYwXCIsXG4gIGNvbG9yRmxvdzogXCIjNmE4YTlhXCIsXG4gIHN5c3RlbUdyZWVuOiBcIiM3YTlhN2RcIlxufTtcblxuY29uc3QgU1RSRU5HVEhfTEVWRUxTID0ge1xuICBcIlVudHJhaW5lZFwiOiAgICB7IGNvbG9yOiBcIiM2YTZhNmFcIiwgaWNvbjogXCJcXHUyNUNCXCIgfSxcbiAgXCJCZWdpbm5lclwiOiAgICAgeyBjb2xvcjogXCIjYTg5ODYwXCIsIGljb246IFwiXFx1MjVEMFwiIH0sXG4gIFwiTm92aWNlXCI6ICAgICAgIHsgY29sb3I6IFwiIzdhOWE3ZFwiLCBpY29uOiBcIlxcdTI1RDFcIiB9LFxuICBcIkludGVybWVkaWF0ZVwiOiB7IGNvbG9yOiBcIiM2YThhOWFcIiwgaWNvbjogXCJcXHUyNUQ1XCIgfSxcbiAgXCJBZHZhbmNlZFwiOiAgICAgeyBjb2xvcjogXCIjOGE3YTlhXCIsIGljb246IFwiXFx1MjVDRlwiIH0sXG4gIFwiRWxpdGVcIjogICAgICAgIHsgY29sb3I6IFwiIzlhNmE3YVwiLCBpY29uOiBcIlxcdTI2MDVcIiB9XG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNUQVRFIChmcm9tIGZyb250bWF0dGVyKVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5sZXQgZXhlcmNpc2VzID0gZ2V0RGF0YShcImV4ZXJjaXNlc1wiKSB8fCBbXTtcbmxldCBtdXNjbGVHcm91cHMgPSBnZXREYXRhKFwibXVzY2xlR3JvdXBzXCIpIHx8IFtdO1xubGV0IGN1cnJlbnRNdXNjbGVJbmRleCA9IGdldERhdGEoXCJjdXJyZW50TXVzY2xlSW5kZXhcIikgfHwgMDtcbmNvbnN0IGlzQ29tcGxldGVkID0gZ2V0RGF0YShcIldvcmtvdXRcIikgPT09IHRydWU7XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU1RZTEVTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbmlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvbGVuLXRwbC13b3Jrb3V0LXY1XCIpKSB7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBzdHlsZS5pZCA9IFwib2xlbi10cGwtd29ya291dC12NVwiO1xuICBzdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAub3R3LWNvbnRhaW5lciAqIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5vdHctY29udGFpbmVyIHsgbWF4LXdpZHRoOiA1MDBweDsgbWFyZ2luOiAwIGF1dG87IHBhZGRpbmc6IDEwcHggMCAxMjBweCAwOyBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IH1cbiAgICAub3R3LWNvbnRhaW5lciBidXR0b24sIC5vdHctY29udGFpbmVyIGlucHV0LCAub3R3LW1vZGFsLW92ZXJsYXkgYnV0dG9uLCAub3R3LW1vZGFsLW92ZXJsYXkgaW5wdXQgeyBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctY29udGFpbmVyIGlucHV0W3R5cGU9XCJudW1iZXJcIl0geyAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgfVxuICAgIEBrZXlmcmFtZXMgb3R3LWJyZWF0aGUgeyAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMTU0LDE0MCwxMjIsMC4wMyk7IH0gNTAlIHsgYm94LXNoYWRvdzogaW5zZXQgMCAwIDQwcHggcmdiYSgxNTQsMTQwLDEyMiwwLjA4KTsgfSB9XG4gICAgQGtleWZyYW1lcyBvdHctcHVsc2UtZ2xvdyB7IDAlLCAxMDAlIHsgb3BhY2l0eTogMC40OyB9IDUwJSB7IG9wYWNpdHk6IDE7IH0gfVxuICAgIC5vdHctY2FyZCB7IGJhY2tncm91bmQ6ICMwYTBhMGE7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IHBhZGRpbmc6IDE2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgbWFyZ2luLWJvdHRvbTogMTZweDsgfVxuICAgIC5vdHctY2FyZC1icmVhdGhlIHsgYW5pbWF0aW9uOiBvdHctYnJlYXRoZSA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxuICAgIC5vdHctaGVhZGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyBwYWRkaW5nOiAyMHB4OyB9XG4gICAgLm90dy10aXRsZSB7IG1hcmdpbjogMDsgY29sb3I6ICM5YThjN2E7IGZvbnQtc2l6ZTogMjRweDsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDRweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctcHJvZ3Jlc3MtbGFiZWwgeyBjb2xvcjogIzZhNWE0YTsgZm9udC1zaXplOiAxMnB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgICAub3R3LXNlY3Rpb24tbGFiZWwgeyBjb2xvcjogIzZhNWE0YTsgZm9udC1zaXplOiAxMHB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogM3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMjBweCAwIDEwcHg7IH1cbiAgICAub3R3LXdlZWstZ3JpZCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7IGdhcDogNnB4OyB9XG4gICAgLm90dy13ZWVrLWRheSB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyBwYWRkaW5nOiA4cHggNHB4OyBiYWNrZ3JvdW5kOiAjMGMwYzBjOyBib3JkZXI6IDFweCBzb2xpZCAjMmEyNTIwOyB9XG4gICAgLm90dy13ZWVrLWRheS50b2RheSB7IGJvcmRlci1jb2xvcjogIzlhOGM3YTsgfVxuICAgIC5vdHctd2Vlay1kYXkgLm90dy1kYXktbGFiZWwgeyBmb250LXNpemU6IDlweDsgY29sb3I6ICM2YTVhNGE7IGxldHRlci1zcGFjaW5nOiAxcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAub3R3LXdlZWstZGF5IC5vdHctZGF5LW51bSB7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgY29sb3I6ICM2YTVhNGE7IH1cbiAgICAub3R3LXdlZWstZGF5IC5vdHctZGF5LWljb24geyBmb250LXNpemU6IDE0cHg7IG1pbi1oZWlnaHQ6IDE4cHg7IH1cbiAgICAub3R3LXdlZWstZGF5LmRvbmUgLm90dy1kYXktbnVtIHsgY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LXN0YXQtcm93IHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTsgZ2FwOiA4cHg7IH1cbiAgICAub3R3LXN0YXQtYm94IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgcGFkZGluZzogMTJweCA4cHg7IGJhY2tncm91bmQ6ICMwYzBjMGM7IGJvcmRlcjogMXB4IHNvbGlkICMyYTI1MjA7IH1cbiAgICAub3R3LXN0YXQtdmFsdWUgeyBmb250LXNpemU6IDIycHg7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiAjOWE4YzdhOyBsaW5lLWhlaWdodDogMTsgfVxuICAgIC5vdHctc3RhdC1sYWJlbCB7IGZvbnQtc2l6ZTogOXB4OyBjb2xvcjogIzZhNWE0YTsgbGV0dGVyLXNwYWNpbmc6IDFweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbWFyZ2luLXRvcDogNnB4OyB9XG4gICAgLm90dy1yZWNlbnQtcm93IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyBwYWRkaW5nOiAxMHB4IDEycHg7IGJhY2tncm91bmQ6ICMwYzBjMGM7IGJvcmRlcjogMXB4IHNvbGlkICMyYTI1MjA7IG1hcmdpbi1ib3R0b206IDRweDsgfVxuICAgIC5vdHctcmVjZW50LWRhdGUgeyBmb250LXNpemU6IDEycHg7IGNvbG9yOiAjNmE1YTRhOyB9XG4gICAgLm90dy1yZWNlbnQtbXVzY2xlcyB7IGZvbnQtc2l6ZTogMTFweDsgY29sb3I6ICM5YThjN2E7IGZsZXg6IDE7IG1hcmdpbjogMCAxMnB4OyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgIC5vdHctcmVjZW50LWJhZGdlIHsgZm9udC1zaXplOiAxMHB4OyBwYWRkaW5nOiAzcHggOHB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogMXB4OyB9XG4gICAgLm90dy1oZWF0bWFwLXdyYXAgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiAxNnB4OyBwYWRkaW5nOiA4cHggMDsgfVxuICAgIC5vdHctaGVhdG1hcC1zdmcgeyB3aWR0aDogMTMwcHg7IGhlaWdodDogYXV0bzsgfVxuICAgIC5vdHctaGVhdG1hcC1sZWdlbmQgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBnYXA6IDhweCAxNHB4OyBtYXJnaW4tdG9wOiA4cHg7IHBhZGRpbmc6IDAgOHB4OyB9XG4gICAgLm90dy1oZWF0bWFwLWxlZ2VuZC1pdGVtIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA1cHg7IGZvbnQtc2l6ZTogOHB4OyBjb2xvcjogIzZhNWE0YTsgbGV0dGVyLXNwYWNpbmc6IDFweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctaGVhdG1hcC1sZWdlbmQtZG90IHsgd2lkdGg6IDhweDsgaGVpZ2h0OiA4cHg7IH1cbiAgICAub3R3LWJ0biB7IHBhZGRpbmc6IDE0cHggMjRweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LWJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDogIzlhOGM3YTsgY29sb3I6ICMwYTBhMGE7IHdpZHRoOiAxMDAlOyB9XG4gICAgLm90dy1idG4tcHJpbWFyeTphY3RpdmUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyB9XG4gICAgLm90dy1idG4tc2Vjb25kYXJ5IHsgYmFja2dyb3VuZDogIzBmMGYwZjsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgY29sb3I6ICM2YTVhNGE7IH1cbiAgICAub3R3LWJ0bi1zZWNvbmRhcnk6YWN0aXZlIHsgYm9yZGVyLWNvbG9yOiAjOWE4YzdhOyBjb2xvcjogIzlhOGM3YTsgfVxuICAgIC5vdHctYnRuLWZpbmlzaCB7IGJhY2tncm91bmQ6ICM3YTlhN2Q7IGNvbG9yOiAjMGEwYTBhOyB9XG4gICAgLm90dy1idG4tZGFzaGVkIHsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IDFweCBkYXNoZWQgIzNhMzQyYTsgY29sb3I6ICM2YTVhNGE7IH1cbiAgICAub3R3LWJ0bi1kYXNoZWQ6YWN0aXZlIHsgYm9yZGVyLWNvbG9yOiAjOWE4YzdhOyBjb2xvcjogIzlhOGM3YTsgfVxuICAgIC5vdHctbmF2LXJvdyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTJweDsgbWFyZ2luLXRvcDogMjRweDsgfVxuICAgIC5vdHctbmF2LXJvdyAub3R3LWJ0biB7IGZsZXg6IDE7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5vdHctc2V0LXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEycHg7IHBhZGRpbmc6IDEycHg7IGJhY2tncm91bmQ6ICMwZjBmMGY7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IG1hcmdpbi1ib3R0b206IDZweDsgfVxuICAgIC5vdHctc2V0LXJvdy5jb21wbGV0ZWQgeyBvcGFjaXR5OiAwLjY7IH1cbiAgICAub3R3LWNoZWNrYm94IHsgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDsgYm9yZGVyOiAycHggc29saWQgIzNhMzQyYTsgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogIzBhMGEwYTsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRyYW5zaXRpb246IGFsbCAwLjJzOyBmbGV4LXNocmluazogMDsgfVxuICAgIC5vdHctY2hlY2tib3guY2hlY2tlZCB7IGJhY2tncm91bmQ6ICM3YTlhN2Q7IGJvcmRlci1jb2xvcjogIzdhOWE3ZDsgfVxuICAgIC5vdHctaW5wdXQgeyBwYWRkaW5nOiA2cHg7IGJhY2tncm91bmQ6ICMwYTBhMGE7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDsgY29sb3I6ICM5YThjN2E7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyB3aWR0aDogNTBweDsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1jdHJsLWJ0biB7IHdpZHRoOiAzMnB4OyBoZWlnaHQ6IDMycHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBiYWNrZ3JvdW5kOiAjMGYwZjBmOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7IGNvbG9yOiAjOWE4YzdhOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMTZweDsgZmxleC1zaHJpbms6IDA7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctY3RybC1idG46YWN0aXZlIHsgYmFja2dyb3VuZDogIzlhOGM3YTsgY29sb3I6ICMwYTBhMGE7IH1cbiAgICAub3R3LXdhcm11cC1iYWRnZSB7IGZvbnQtc2l6ZTogOXB4OyBjb2xvcjogIzZhOGE5YTsgcGFkZGluZzogMnB4IDZweDsgYmFja2dyb3VuZDogcmdiYSgxMDYsMTM4LDE1NCwwLjE1KTsgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgLm90dy1zdHJlbmd0aC1iYXIgeyBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogIzFhMWExYTsgYm9yZGVyLXJhZGl1czogM3B4OyBvdmVyZmxvdzogaGlkZGVuOyBtYXJnaW4tdG9wOiA2cHg7IH1cbiAgICAub3R3LXN0cmVuZ3RoLWZpbGwgeyBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDNweDsgdHJhbnNpdGlvbjogd2lkdGggMC42cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpOyB9XG4gICAgLm90dy1zdHJlbmd0aC1iYWRnZSB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgcGFkZGluZzogNnB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDRweDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogMnB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLm90dy1wci1ib3ggeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDRweDsgcGFkZGluZzogMTBweCAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDE2OCwxNTIsOTYsMC4xKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjgsMTUyLDk2LDAuMyk7IGJvcmRlci1yYWRpdXM6IDRweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gICAgLm90dy1tb2RhbC1vdmVybGF5IHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB6LWluZGV4OiA5OTk5OyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2UsIGJhY2tkcm9wLWZpbHRlciAwLjVzIGVhc2U7IH1cbiAgICAub3R3LW1vZGFsLW92ZXJsYXkudmlzaWJsZSB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45NSk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyB9XG4gICAgLm90dy1tb2RhbC1jb250ZW50IHsgYmFja2dyb3VuZDogIzBhMGEwYTsgcGFkZGluZzogMjhweCAyMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBtYXgtd2lkdGg6IDU1MHB4OyB3aWR0aDogOTAlOyBtYXgtaGVpZ2h0OiA4NXZoOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuNXMgZWFzZTsgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAgIC5vdHctbW9kYWwtb3ZlcmxheS52aXNpYmxlIC5vdHctbW9kYWwtY29udGVudCB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIC5vdHctc3VtbWFyeS1jb21wbGV0ZSB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMjRweCAwOyB9XG4gICAgLm90dy1zdW1tYXJ5LWNvbXBsZXRlIGgyIHsgbWFyZ2luOiAwOyBjb2xvcjogIzdhOWE3ZDsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogM3B4OyB9XG4gICAgLm90dy1mZWVsLWJ0biB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTZweDsgcGFkZGluZzogMTZweCAyMHB4OyBiYWNrZ3JvdW5kOiAjMGMwYzBjOyBjdXJzb3I6IHBvaW50ZXI7IG1hcmdpbi1ib3R0b206IDEwcHg7IHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XG4gICAgLm90dy1mZWVsLWJ0bjphY3RpdmUgeyBiYWNrZ3JvdW5kOiAjMTAxMDEwOyB9XG4gICAgLm90dy1tdXNjbGUtdG9nZ2xlIHsgcGFkZGluZzogMTJweCAxOHB4OyBiYWNrZ3JvdW5kOiAjMGYwZjBmOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7IGNvbG9yOiAjOWE4YzdhOyBmb250LXNpemU6IDEzcHg7IGxldHRlci1zcGFjaW5nOiAxcHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1tdXNjbGUtdG9nZ2xlLmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTU0LDE0MCwxMjIsMC4zKSAhaW1wb3J0YW50OyBib3JkZXItY29sb3I6ICM5YThjN2EgIWltcG9ydGFudDsgfVxuICAgIC5vdHctbXVzY2xlLXRvZ2dsZTphY3RpdmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH1cbiAgICAub3R3LXN1Ymdyb3VwLWNvbnRhaW5lciB7IG1heC1oZWlnaHQ6IDA7IG92ZXJmbG93OiBoaWRkZW47IHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgcGFkZGluZyAwLjNzIGVhc2U7IG9wYWNpdHk6IDA7IHBhZGRpbmc6IDAgMTJweDsgfVxuICAgIC5vdHctc3ViZ3JvdXAtY29udGFpbmVyLmV4cGFuZGVkIHsgbWF4LWhlaWdodDogMjAwcHg7IG9wYWNpdHk6IDE7IHBhZGRpbmc6IDEycHg7IH1cbiAgICAub3R3LXN1Yi10b2dnbGUgeyBwYWRkaW5nOiA4cHggMTRweDsgYmFja2dyb3VuZDogIzBmMGYwZjsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50OyBjb2xvcjogIzZhNWE0YTsgZm9udC1zaXplOiAxMnB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctc3ViLXRvZ2dsZS5hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwxNDAsMTIyLDAuMik7IGJvcmRlci1jb2xvcjogIzlhOGM3YTsgY29sb3I6ICM5YThjN2E7IH1cbiAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gVVRJTElUWSBGVU5DVElPTlNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBhZGRDb3JuZXJzKGVsLCBjb2xvciwgc2l6ZSA9IDE0KSB7XG4gIFtcIlRMXCIsIFwiVFJcIiwgXCJCTFwiLCBcIkJSXCJdLmZvckVhY2goKHBvcykgPT4ge1xuICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGlzVG9wID0gcG9zLmluY2x1ZGVzKFwiVFwiKSwgaXNMZWZ0ID0gcG9zLmluY2x1ZGVzKFwiTFwiKTtcbiAgICBjLnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246YWJzb2x1dGU7JHtpc1RvcD9cInRvcDowXCI6XCJib3R0b206MFwifTske2lzTGVmdD9cImxlZnQ6MFwiOlwicmlnaHQ6MFwifTt3aWR0aDoke3NpemV9cHg7aGVpZ2h0OiR7c2l6ZX1weDtib3JkZXItJHtpc1RvcD9cInRvcFwiOlwiYm90dG9tXCJ9OjFweCBzb2xpZCAke2NvbG9yfTtib3JkZXItJHtpc0xlZnQ/XCJsZWZ0XCI6XCJyaWdodFwifToxcHggc29saWQgJHtjb2xvcn07ei1pbmRleDoxMDtwb2ludGVyLWV2ZW50czpub25lO2A7XG4gICAgZWwuYXBwZW5kQ2hpbGQoYyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUxUk0od2VpZ2h0LCByZXBzKSB7XG4gIGlmIChyZXBzID09PSAwIHx8IHdlaWdodCA9PT0gMCkgcmV0dXJuIDA7XG4gIGlmIChyZXBzID09PSAxKSByZXR1cm4gd2VpZ2h0O1xuICByZXR1cm4gTWF0aC5yb3VuZCh3ZWlnaHQgKiAoMSArIHJlcHMgLyAzMCkpO1xufVxuXG5mdW5jdGlvbiBnZXRGaXJzdFdvcmtpbmdTZXRJbmRleChzZXRzKSB7XG4gIHJldHVybiBzZXRzLmZpbmRJbmRleCgocykgPT4gIXMuaXNXYXJtdXApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXYXJtdXBXZWlnaHRzKGV4LCBuZXdXKSB7XG4gIGNvbnN0IHdhcm11cHMgPSBleC5zZXRzLmZpbHRlcigocykgPT4gcy5pc1dhcm11cCk7XG4gIFswLjUsIDAuNywgMC44NV0uZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgIGlmICh3YXJtdXBzW2ldKSB3YXJtdXBzW2ldLndlaWdodCA9IE1hdGgucm91bmQobmV3VyAqIHApO1xuICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQRVJTT05BTCBTVEFUUyAmIFNUUkVOR1RIIFNUQU5EQVJEU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFBlcnNvbmFsU3RhdHMoKSB7XG4gIC8vIFJlYWQgZnJvbSBwbHVnaW4gc2V0dGluZ3MgKFBlcnNvbmFsIFN0YXRzIHNlY3Rpb24pXG4gIHJldHVybiB7XG4gICAgd2VpZ2h0OiBQRVJTT05BTC53ZWlnaHQsXG4gICAgaGVpZ2h0OiBQRVJTT05BTC5oZWlnaHQsXG4gICAgYmlydGhkYXRlOiBQRVJTT05BTC5iaXJ0aGRhdGUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFnZShiZCkge1xuICBpZiAoIWJkKSByZXR1cm4gMjA7XG4gIGNvbnN0IGIgPSBuZXcgRGF0ZShiZCksIHQgPSBuZXcgRGF0ZSgpO1xuICBsZXQgYSA9IHQuZ2V0RnVsbFllYXIoKSAtIGIuZ2V0RnVsbFllYXIoKTtcbiAgaWYgKHQuZ2V0TW9udGgoKSA8IGIuZ2V0TW9udGgoKSB8fCAodC5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCkgJiYgdC5nZXREYXRlKCkgPCBiLmdldERhdGUoKSkpIGEtLTtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3RhbmRhcmRWYWx1ZSh2YWwpIHtcbiAgaWYgKHR5cGVvZiB2YWwgIT09IFwic3RyaW5nXCIpIHZhbCA9IFN0cmluZyh2YWwpO1xuICB2YWwgPSB2YWwudHJpbSgpO1xuICBpZiAodmFsLmluY2x1ZGVzKFwiPFwiKSkge1xuICAgIGNvbnN0IG51bSA9IHBhcnNlRmxvYXQodmFsLnJlcGxhY2UoL1s8XFxzXS9nLCBcIlwiKSk7XG4gICAgcmV0dXJuICFpc05hTihudW0pICYmIG51bSA+IDAgPyBudW0gKiAwLjUgOiAwLjE7XG4gIH1cbiAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWwpO1xuICByZXR1cm4gaXNOYU4obnVtKSA/IDAgOiBudW07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFN0cmVuZ3RoU3RhbmRhcmQoZXhlcmNpc2VOYW1lKSB7XG4gIGNvbnN0IGZpbGVQYXRoID0gU0VUVElOR1MuZXhlcmNpc2VEYkZvbGRlciArIFwiL1wiICsgZXhlcmNpc2VOYW1lICsgXCIubWRcIjtcbiAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEoZmlsZVBhdGgpO1xuICBjb25zdCBpc0JXID0gZm0/LlR5cGUgPT09IFwiQm9keXdlaWdodFwiO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoZmlsZVBhdGgpO1xuICBpZiAoIWNvbnRlbnQpIHJldHVybiBudWxsO1xuICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gIGNvbnN0IGJ3VGFibGUgPSBbXSwgYWdlVGFibGUgPSBbXTtcbiAgbGV0IGN1cnJlbnRUYWJsZSA9IG51bGw7XG4gIGZvciAoY29uc3QgbGluZSBvZiBsaW5lcykge1xuICAgIGlmIChsaW5lLm1hdGNoKC9cXHxcXHMqQldcXHMqXFx8L2kpKSB7IGN1cnJlbnRUYWJsZSA9IFwiYndcIjsgY29udGludWU7IH1cbiAgICBpZiAobGluZS5tYXRjaCgvXFx8XFxzKkFnZVxccypcXHwvaSkpIHsgY3VycmVudFRhYmxlID0gXCJhZ2VcIjsgY29udGludWU7IH1cbiAgICBpZiAobGluZS5zdGFydHNXaXRoKFwifC0tLVwiKSB8fCBsaW5lLnN0YXJ0c1dpdGgoXCJ8IC0tLVwiKSkgY29udGludWU7XG4gICAgY29uc3QgbSA9IGxpbmUubWF0Y2goL1xcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfFxccyooW158XSspXFxzKlxcfC8pO1xuICAgIGlmIChtKSB7XG4gICAgICBjb25zdCByb3cgPSB7IGtleTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bMV0pLCBiZWdpbm5lcjogcGFyc2VTdGFuZGFyZFZhbHVlKG1bMl0pLCBub3ZpY2U6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzNdKSwgaW50ZXJtZWRpYXRlOiBwYXJzZVN0YW5kYXJkVmFsdWUobVs0XSksIGFkdmFuY2VkOiBwYXJzZVN0YW5kYXJkVmFsdWUobVs1XSksIGVsaXRlOiBwYXJzZVN0YW5kYXJkVmFsdWUobVs2XSkgfTtcbiAgICAgIGlmIChyb3cua2V5ID4gMCAmJiAocm93LmJlZ2lubmVyID4gMCB8fCByb3cubm92aWNlID4gMCB8fCByb3cuaW50ZXJtZWRpYXRlID4gMCkpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRUYWJsZSA9PT0gXCJid1wiKSBid1RhYmxlLnB1c2gocm93KTtcbiAgICAgICAgZWxzZSBpZiAoY3VycmVudFRhYmxlID09PSBcImFnZVwiKSBhZ2VUYWJsZS5wdXNoKHJvdyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGJ3VGFibGUsIGFnZVRhYmxlLCBpc0JvZHl3ZWlnaHQ6IGlzQlcsIGhhc1ZhbGlkRGF0YTogYndUYWJsZS5sZW5ndGggPiAwIHx8IGFnZVRhYmxlLmxlbmd0aCA+IDAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJwb2xhdGVTdGFuZGFyZCh0YWJsZSwgdmFsdWUpIHtcbiAgaWYgKCF0YWJsZSB8fCB0YWJsZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICBjb25zdCBzb3J0ZWQgPSBbLi4udGFibGVdLnNvcnQoKGEsIGIpID0+IGEua2V5IC0gYi5rZXkpO1xuICBsZXQgbG93ZXIgPSBzb3J0ZWRbMF0sIHVwcGVyID0gc29ydGVkW3NvcnRlZC5sZW5ndGggLSAxXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWQubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgaWYgKHNvcnRlZFtpXS5rZXkgPD0gdmFsdWUgJiYgc29ydGVkW2kgKyAxXS5rZXkgPj0gdmFsdWUpIHsgbG93ZXIgPSBzb3J0ZWRbaV07IHVwcGVyID0gc29ydGVkW2kgKyAxXTsgYnJlYWs7IH1cbiAgfVxuICBpZiAodmFsdWUgPD0gbG93ZXIua2V5KSByZXR1cm4geyAuLi5sb3dlciB9O1xuICBpZiAodmFsdWUgPj0gdXBwZXIua2V5KSByZXR1cm4geyAuLi51cHBlciB9O1xuICBjb25zdCByYXRpbyA9ICh2YWx1ZSAtIGxvd2VyLmtleSkgLyAodXBwZXIua2V5IC0gbG93ZXIua2V5KTtcbiAgcmV0dXJuIHsga2V5OiB2YWx1ZSwgYmVnaW5uZXI6IGxvd2VyLmJlZ2lubmVyICsgcmF0aW8gKiAodXBwZXIuYmVnaW5uZXIgLSBsb3dlci5iZWdpbm5lciksIG5vdmljZTogbG93ZXIubm92aWNlICsgcmF0aW8gKiAodXBwZXIubm92aWNlIC0gbG93ZXIubm92aWNlKSwgaW50ZXJtZWRpYXRlOiBsb3dlci5pbnRlcm1lZGlhdGUgKyByYXRpbyAqICh1cHBlci5pbnRlcm1lZGlhdGUgLSBsb3dlci5pbnRlcm1lZGlhdGUpLCBhZHZhbmNlZDogbG93ZXIuYWR2YW5jZWQgKyByYXRpbyAqICh1cHBlci5hZHZhbmNlZCAtIGxvd2VyLmFkdmFuY2VkKSwgZWxpdGU6IGxvd2VyLmVsaXRlICsgcmF0aW8gKiAodXBwZXIuZWxpdGUgLSBsb3dlci5lbGl0ZSkgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0QXZlcmFnZWRTdGFuZGFyZHMoc3RkKSB7XG4gIGNvbnN0IHN0YXRzID0gYXdhaXQgZ2V0UGVyc29uYWxTdGF0cygpO1xuICBjb25zdCBidyA9IGludGVycG9sYXRlU3RhbmRhcmQoc3RkLmJ3VGFibGUsIHN0YXRzLndlaWdodCk7XG4gIGNvbnN0IGFnID0gaW50ZXJwb2xhdGVTdGFuZGFyZChzdGQuYWdlVGFibGUsIGNhbGN1bGF0ZUFnZShzdGF0cy5iaXJ0aGRhdGUpKTtcbiAgaWYgKGJ3ICYmIGFnKSByZXR1cm4geyBiZWdpbm5lcjogKGJ3LmJlZ2lubmVyICsgYWcuYmVnaW5uZXIpIC8gMiwgbm92aWNlOiAoYncubm92aWNlICsgYWcubm92aWNlKSAvIDIsIGludGVybWVkaWF0ZTogKGJ3LmludGVybWVkaWF0ZSArIGFnLmludGVybWVkaWF0ZSkgLyAyLCBhZHZhbmNlZDogKGJ3LmFkdmFuY2VkICsgYWcuYWR2YW5jZWQpIC8gMiwgZWxpdGU6IChidy5lbGl0ZSArIGFnLmVsaXRlKSAvIDIgfTtcbiAgcmV0dXJuIGJ3IHx8IGFnIHx8IG51bGw7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZVN0cmVuZ3RoTGV2ZWwoY3YsIHN0ZCkge1xuICBpZiAoIXN0ZCB8fCBjdiA8IDApIHJldHVybiB7IGxldmVsOiBcIlVudHJhaW5lZFwiLCBjb2xvcjogXCIjNmE2YTZhXCIsIHByb2dyZXNzOiAwLCBuZXh0VGFyZ2V0OiBzdGQ/LmJlZ2lubmVyIHx8IDEgfTtcbiAgY29uc3QgeyBiZWdpbm5lciwgbm92aWNlLCBpbnRlcm1lZGlhdGUsIGFkdmFuY2VkLCBlbGl0ZSB9ID0gc3RkO1xuICBpZiAoY3YgPj0gZWxpdGUpIHJldHVybiB7IGxldmVsOiBcIkVsaXRlXCIsIGNvbG9yOiBcIiM5YTZhN2FcIiwgcHJvZ3Jlc3M6IDEwMCwgbmV4dFRhcmdldDogbnVsbCB9O1xuICBpZiAoY3YgPj0gYWR2YW5jZWQpIHJldHVybiB7IGxldmVsOiBcIkFkdmFuY2VkXCIsIGNvbG9yOiBcIiM4YTdhOWFcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBhZHZhbmNlZCkgLyAoZWxpdGUgLSBhZHZhbmNlZCkpICogMTAwLCBuZXh0VGFyZ2V0OiBlbGl0ZSB9O1xuICBpZiAoY3YgPj0gaW50ZXJtZWRpYXRlKSByZXR1cm4geyBsZXZlbDogXCJJbnRlcm1lZGlhdGVcIiwgY29sb3I6IFwiIzZhOGE5YVwiLCBwcm9ncmVzczogKChjdiAtIGludGVybWVkaWF0ZSkgLyAoYWR2YW5jZWQgLSBpbnRlcm1lZGlhdGUpKSAqIDEwMCwgbmV4dFRhcmdldDogYWR2YW5jZWQgfTtcbiAgaWYgKGN2ID49IG5vdmljZSkgcmV0dXJuIHsgbGV2ZWw6IFwiTm92aWNlXCIsIGNvbG9yOiBcIiM3YTlhN2RcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBub3ZpY2UpIC8gKGludGVybWVkaWF0ZSAtIG5vdmljZSkpICogMTAwLCBuZXh0VGFyZ2V0OiBpbnRlcm1lZGlhdGUgfTtcbiAgaWYgKGN2ID49IGJlZ2lubmVyKSByZXR1cm4geyBsZXZlbDogXCJCZWdpbm5lclwiLCBjb2xvcjogXCIjYTg5ODYwXCIsIHByb2dyZXNzOiAoKGN2IC0gYmVnaW5uZXIpIC8gKG5vdmljZSAtIGJlZ2lubmVyKSkgKiAxMDAsIG5leHRUYXJnZXQ6IG5vdmljZSB9O1xuICByZXR1cm4geyBsZXZlbDogXCJVbnRyYWluZWRcIiwgY29sb3I6IFwiIzZhNmE2YVwiLCBwcm9ncmVzczogYmVnaW5uZXIgPiAwID8gTWF0aC5tYXgoMCwgKGN2IC8gYmVnaW5uZXIpICogMTAwKSA6IDAsIG5leHRUYXJnZXQ6IGJlZ2lubmVyIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwobmFtZSwgdywgciwgbWF4Uikge1xuICBjb25zdCBzdGQgPSBhd2FpdCBnZXRTdHJlbmd0aFN0YW5kYXJkKG5hbWUpO1xuICBpZiAoIXN0ZCB8fCAhc3RkLmhhc1ZhbGlkRGF0YSkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGF2ZyA9IGF3YWl0IGdldEF2ZXJhZ2VkU3RhbmRhcmRzKHN0ZCk7XG4gIGlmICghYXZnKSByZXR1cm4gbnVsbDtcbiAgaWYgKHN0ZC5pc0JvZHl3ZWlnaHQpIHtcbiAgICBjb25zdCBlZmYgPSBtYXhSICE9PSBudWxsICYmIG1heFIgIT09IHVuZGVmaW5lZCA/IE1hdGgubWF4KHIsIG1heFIpIDogcjtcbiAgICBjb25zdCByZXMgPSBkZXRlcm1pbmVTdHJlbmd0aExldmVsKGVmZiwgYXZnKTtcbiAgICByZXR1cm4geyAuLi5yZXMsIGN1cnJlbnRWYWx1ZTogZWZmLCBpc0JvZHl3ZWlnaHQ6IHRydWUsIHVuaXQ6IFwicmVwc1wiLCBkaXNwbGF5TGFiZWw6IFwiTWF4IFJlcHNcIiB9O1xuICB9IGVsc2Uge1xuICAgIGlmICh3IDw9IDApIHJldHVybiBudWxsO1xuICAgIGNvbnN0IGVzdCA9IGNhbGN1bGF0ZTFSTSh3LCByKTtcbiAgICBjb25zdCByZXMgPSBkZXRlcm1pbmVTdHJlbmd0aExldmVsKGVzdCwgYXZnKTtcbiAgICByZXR1cm4geyAuLi5yZXMsIGN1cnJlbnRWYWx1ZTogZXN0LCBpc0JvZHl3ZWlnaHQ6IGZhbHNlLCB1bml0OiBcImtnXCIsIGRpc3BsYXlMYWJlbDogXCJFc3QuIDFSTVwiIH07XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gaGFzU3RyZW5ndGhTdGFuZGFyZChuYW1lKSB7XG4gIGNvbnN0IHN0ZCA9IGF3YWl0IGdldFN0cmVuZ3RoU3RhbmRhcmQobmFtZSk7XG4gIHJldHVybiBzdGQgIT09IG51bGwgJiYgc3RkLmhhc1ZhbGlkRGF0YTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBXT1JLT1VUIERBVEEgXHUyMDE0IFBSIGxvb2t1cCwgcHJldmlvdXMgZXhlcmNpc2UgbG9hZGluZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlUFIobmFtZSkge1xuICBjb25zdCBzdGQgPSBhd2FpdCBnZXRTdHJlbmd0aFN0YW5kYXJkKG5hbWUpO1xuICBjb25zdCBpc0JXID0gc3RkPy5pc0JvZHl3ZWlnaHQgfHwgZmFsc2U7XG4gIGNvbnN0IGZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgbGV0IGJlc3QgPSBudWxsLCBiZXN0ViA9IDA7XG4gIGZvciAoY29uc3QgZiBvZiBmaWxlcykge1xuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKGYucGF0aCk7XG4gICAgaWYgKGZtPy5leGVyY2lzZXMgJiYgQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpICYmIGZtLldvcmtvdXQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGV4ID0gZm0uZXhlcmNpc2VzLmZpbmQoKGUpID0+IGUubmFtZSA9PT0gbmFtZSk7XG4gICAgICBpZiAoZXg/LnNldHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBzZXQgb2YgZXguc2V0cykge1xuICAgICAgICAgIGlmICghc2V0LmlzV2FybXVwICYmIHNldC5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChpc0JXKSB7XG4gICAgICAgICAgICAgIGlmIChzZXQucmVwcyA+IGJlc3RWKSB7IGJlc3RWID0gc2V0LnJlcHM7IGJlc3QgPSB7IC4uLnNldCwgZGF0ZTogZi5iYXNlbmFtZSwgcHJWYWx1ZTogYmVzdFYsIGlzQm9keXdlaWdodDogdHJ1ZSB9OyB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNldC53ZWlnaHQgPiAwKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGVzdCA9IGNhbGN1bGF0ZTFSTShzZXQud2VpZ2h0LCBzZXQucmVwcyk7XG4gICAgICAgICAgICAgIGlmIChlc3QgPiBiZXN0VikgeyBiZXN0ViA9IGVzdDsgYmVzdCA9IHsgLi4uc2V0LCBkYXRlOiBmLmJhc2VuYW1lLCBlc3RpbWF0ZWQxUk06IGVzdCwgcHJWYWx1ZTogZXN0LCBpc0JvZHl3ZWlnaHQ6IGZhbHNlIH07IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGJlc3Q7XG59XG5cbmZ1bmN0aW9uIGdldExhc3RXb3Jrb3V0Rm9yTXVzY2xlR3JvdXAobXVzY2xlR3JvdXApIHtcbiAgY29uc3QgZmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuYmFzZW5hbWUubG9jYWxlQ29tcGFyZShhLmJhc2VuYW1lKSk7XG4gIGZvciAoY29uc3QgZiBvZiBmaWxlcykge1xuICAgIGlmIChmLnBhdGggPT09IGZpbGUucGF0aCkgY29udGludWU7IC8vIHNraXAgY3VycmVudCBub3RlXG4gICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEoZi5wYXRoKTtcbiAgICBpZiAoZm0/LmV4ZXJjaXNlcyAmJiBBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykpIHtcbiAgICAgIGNvbnN0IHJlbGV2YW50ID0gZm0uZXhlcmNpc2VzLmZpbHRlcihleCA9PiBleC5tdXNjbGUgPT09IG11c2NsZUdyb3VwIHx8IGV4Lm11c2NsZUdyb3VwID09PSBtdXNjbGVHcm91cCk7XG4gICAgICBpZiAocmVsZXZhbnQubGVuZ3RoID4gMCkgcmV0dXJuIHsgZGF0ZTogZi5iYXNlbmFtZSwgZXhlcmNpc2VzOiByZWxldmFudCB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gbG9hZFByZXZpb3VzRXhlcmNpc2VzKHNlbGVjdGVkTXVzY2xlR3JvdXBzKSB7XG4gIGNvbnN0IGV4ZXJjaXNlc0FycmF5ID0gW107XG4gIGZvciAoY29uc3QgbXVzY2xlIG9mIHNlbGVjdGVkTXVzY2xlR3JvdXBzKSB7XG4gICAgY29uc3QgbGFzdFdvcmtvdXQgPSBnZXRMYXN0V29ya291dEZvck11c2NsZUdyb3VwKG11c2NsZSk7XG4gICAgaWYgKGxhc3RXb3Jrb3V0KSB7XG4gICAgICBmb3IgKGNvbnN0IGV4IG9mIGxhc3RXb3Jrb3V0LmV4ZXJjaXNlcykge1xuICAgICAgICBleGVyY2lzZXNBcnJheS5wdXNoKHtcbiAgICAgICAgICBuYW1lOiBleC5uYW1lLFxuICAgICAgICAgIG11c2NsZTogbXVzY2xlLFxuICAgICAgICAgIG11c2NsZUdyb3VwOiBtdXNjbGUsXG4gICAgICAgICAgc2V0czogZXguc2V0cyA/IGV4LnNldHMubWFwKHMgPT4gKHtcbiAgICAgICAgICAgIHdlaWdodDogcy53ZWlnaHQgfHwgMCxcbiAgICAgICAgICAgIHJlcHM6IHMucmVwcyB8fCAxMCxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgICAgICBpc1dhcm11cDogcy5pc1dhcm11cCB8fCBmYWxzZVxuICAgICAgICAgIH0pKSA6IFt7IHdlaWdodDogMCwgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9XVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGV4ZXJjaXNlc0FycmF5O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNBVkUgU1RBVEVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBzYXZlU3RhdGUoKSB7XG4gIGF3YWl0IHNldE11bHRpcGxlRGF0YSh7XG4gICAgZXhlcmNpc2VzOiBleGVyY2lzZXMsXG4gICAgY3VycmVudE11c2NsZUluZGV4OiBjdXJyZW50TXVzY2xlSW5kZXgsXG4gIH0pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1PREFMIFNZU1RFTVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBhY3RpdmVNb2RhbCA9IG51bGw7XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwoKSB7XG4gIGlmICghYWN0aXZlTW9kYWwpIHJldHVybjtcbiAgYWN0aXZlTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChhY3RpdmVNb2RhbD8ucGFyZW50Tm9kZSkgYWN0aXZlTW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhY3RpdmVNb2RhbCk7XG4gICAgYWN0aXZlTW9kYWwgPSBudWxsO1xuICB9LCA1MDApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNb2RhbCh0aXRsZSwgY29udGVudEJ1aWxkZXIpIHtcbiAgaWYgKGFjdGl2ZU1vZGFsKSB7IGFjdGl2ZU1vZGFsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWN0aXZlTW9kYWwpOyBhY3RpdmVNb2RhbCA9IG51bGw7IH1cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtb2RhbC5jbGFzc05hbWUgPSBcIm90dy1tb2RhbC1vdmVybGF5XCI7XG4gIGFjdGl2ZU1vZGFsID0gbW9kYWw7XG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudC5jbGFzc05hbWUgPSBcIm90dy1tb2RhbC1jb250ZW50XCI7XG4gIG1vZGFsLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG4gIGFkZENvcm5lcnMobW9kYWxDb250ZW50LCBUSEVNRS5jb2xvcik7XG4gIGlmICh0aXRsZSkge1xuICAgIGNvbnN0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdC50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHQuc3R5bGUuY3NzVGV4dCA9IGBtYXJnaW46MDtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7bGV0dGVyLXNwYWNpbmc6M3B4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtvcGFjaXR5OjAuODtgO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh0KTtcbiAgICBjb25zdCBkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6NjBweDtoZWlnaHQ6MXB4O2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDkwZGVnLHRyYW5zcGFyZW50LCR7VEhFTUUuY29sb3J9LHRyYW5zcGFyZW50KTttYXJnaW46MCBhdXRvIDEycHg7YDtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZCk7XG4gIH1cbiAgY29udGVudEJ1aWxkZXIobW9kYWxDb250ZW50KTtcbiAgbW9kYWwub25jbGljayA9IChlKSA9PiB7IGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIGNsb3NlTW9kYWwoKTsgfTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG4gIHJldHVybiBtb2RhbDtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBQT1NULUNPTVBMRVRJT04gTkFWSUdBVElPTlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmZ1bmN0aW9uIGdldFJldHVybkRlc3RpbmF0aW9uKCkge1xuICAvLyBMb29rIHVwIHRoZSBjdXJyZW50IGFjdGl2aXR5J3MgY29uZmlnIGZyb20gcGx1Z2luIHNldHRpbmdzXG4gIGNvbnN0IGFjdGl2aXR5SWQgPSBnZXREYXRhKFwiYWN0aXZpdHlcIik7XG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBjdHgucGx1Z2luPy5zZXR0aW5ncz8uYWN0aXZpdGllcztcbiAgaWYgKGFjdGl2aXRpZXMgJiYgYWN0aXZpdHlJZCkge1xuICAgIGNvbnN0IGFjdENvbmZpZyA9IGFjdGl2aXRpZXMuZmluZChhID0+IGEuaWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmIChhY3RDb25maWc/LmNvbXBsZXRpb25SZXR1cm5UbykgcmV0dXJuIGFjdENvbmZpZy5jb21wbGV0aW9uUmV0dXJuVG87XG4gIH1cbiAgcmV0dXJuIFwiZGFzaGJvYXJkXCI7IC8vIGRlZmF1bHRcbn1cblxuZnVuY3Rpb24gbmF2aWdhdGVBZnRlckNvbXBsZXRpb24oKSB7XG4gIGNvbnN0IGRlc3QgPSBnZXRSZXR1cm5EZXN0aW5hdGlvbigpO1xuICBpZiAoZGVzdCA9PT0gXCJzdGF5XCIpIHJldHVybjsgLy8gZG8gbm90aGluZywgc3RheSBvbiBjb21wbGV0aW9uIHN1bW1hcnlcbiAgaWYgKGRlc3QgPT09IFwiZGFzaGJvYXJkXCIpIHtcbiAgICAvLyBVc2UgT2xlbidzIGJ1aWx0LWluIGRhc2hib2FyZCBhY3RpdmF0aW9uXG4gICAgaWYgKGN0eC5wbHVnaW4/LmFjdGl2YXRlRGFzaGJvYXJkVmlldykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBjdHgucGx1Z2luLmFjdGl2YXRlRGFzaGJvYXJkVmlldygpLCA2MDApO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGRlc3QgPT09IFwiaG9tZXBhZ2VcIikge1xuICAgIC8vIE9wZW4gdGhlIGdsb2JhbCBob21lcGFnZSBmaWxlIGRlZmluZWQgaW4gUHJvZmlsZSBzZXR0aW5nc1xuICAgIGNvbnN0IGhvbWVwYWdlUGF0aCA9IGN0eC5wbHVnaW4/LnNldHRpbmdzPy5ob21lcGFnZTtcbiAgICBpZiAoIWhvbWVwYWdlUGF0aCkgeyBub3RpY2UoXCJObyBob21lcGFnZSBzZXQgXHUyMDE0IGdvIHRvIE9sZW4gU2V0dGluZ3MgPiBQcm9maWxlIHRvIGRlZmluZSBvbmUuXCIpOyByZXR1cm47IH1cbiAgICBjb25zdCB0YXJnZXRGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChob21lcGFnZVBhdGgpO1xuICAgIGlmICh0YXJnZXRGaWxlKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGFwcC53b3Jrc3BhY2UuZ2V0TGVhZihmYWxzZSkub3BlbkZpbGUodGFyZ2V0RmlsZSksIDYwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vdGljZShcIkhvbWVwYWdlIGZpbGUgbm90IGZvdW5kOiBcIiArIGhvbWVwYWdlUGF0aCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZJTklTSCBXT1JLT1VUXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZmluaXNoV29ya291dCh0eXBlKSB7XG4gIGF3YWl0IHNldE11bHRpcGxlRGF0YSh7XG4gICAgV29ya291dDogdHJ1ZSxcbiAgICBcIldvcmtvdXQtVHlwZVwiOiB0eXBlLFxuICAgIFRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KCksXG4gICAgZXhlcmNpc2VzOiBleGVyY2lzZXMsXG4gICAgY3VycmVudE11c2NsZUluZGV4OiBjdXJyZW50TXVzY2xlSW5kZXgsXG4gIH0pO1xuICBub3RpY2UoXCJXb3Jrb3V0IGxvZ2dlZCBhcyBcIiArICh0eXBlID09PSBcImRpc2NpcGxpbmVcIiA/IFwiRGlzY2lwbGluZSBXaW5cIiA6IFwiRmxvdyBTdGF0ZVwiKSArIFwiIVwiKTtcbiAgbmF2aWdhdGVBZnRlckNvbXBsZXRpb24oKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gb3BlbkZpbmlzaE1vZGFsKCkge1xuICAvLyBCdWlsZCBzZXNzaW9uIGFuYWx5dGljcyBkYXRhXG4gIGNvbnN0IHN1bW1hcnlEYXRhID0gW107XG4gIGZvciAoY29uc3QgZXggb2YgZXhlcmNpc2VzKSB7XG4gICAgY29uc3QgY29tcGxldGVkID0gZXguc2V0cy5maWx0ZXIocyA9PiAhcy5pc1dhcm11cCAmJiBzLmNvbXBsZXRlZCk7XG4gICAgaWYgKGNvbXBsZXRlZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBwciA9IGF3YWl0IGdldEV4ZXJjaXNlUFIoZXgubmFtZSk7XG4gICAgICBsZXQgYmVzdFcgPSAwLCBiZXN0UiA9IDAsIG1heFIgPSAwLCBzZXNzaW9uQmVzdCA9IDA7XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgY29tcGxldGVkKSB7XG4gICAgICAgIGlmIChzLnJlcHMgPiBtYXhSKSBtYXhSID0gcy5yZXBzO1xuICAgICAgICBpZiAocy53ZWlnaHQgPiAwKSB7XG4gICAgICAgICAgY29uc3QgZXN0ID0gY2FsY3VsYXRlMVJNKHMud2VpZ2h0LCBzLnJlcHMpO1xuICAgICAgICAgIGlmIChlc3QgPiBzZXNzaW9uQmVzdCkgeyBzZXNzaW9uQmVzdCA9IGVzdDsgYmVzdFcgPSBzLndlaWdodDsgYmVzdFIgPSBzLnJlcHM7IH1cbiAgICAgICAgfSBlbHNlIGlmIChzLnJlcHMgPiBzZXNzaW9uQmVzdCkgeyBzZXNzaW9uQmVzdCA9IHMucmVwczsgYmVzdFIgPSBzLnJlcHM7IH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHNsID0gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCBiZXN0VywgYmVzdFIsIG1heFIpO1xuICAgICAgc3VtbWFyeURhdGEucHVzaCh7IG5hbWU6IGV4Lm5hbWUsIG11c2NsZTogZXgubXVzY2xlIHx8IGV4Lm11c2NsZUdyb3VwLCBiZXN0VywgYmVzdFIsIG1heFIsIHNlc3Npb25CZXN0LCBzbCwgcHIsIGNvbXBsZXRlZFNldHM6IGNvbXBsZXRlZC5sZW5ndGgsIHRvdGFsU2V0czogZXguc2V0cy5maWx0ZXIocyA9PiAhcy5pc1dhcm11cCkubGVuZ3RoIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZU1vZGFsKG51bGwsIChjb250ZW50KSA9PiB7XG4gICAgLy8gU2Nyb2xsYWJsZSBhcmVhXG4gICAgY29uc3Qgc2Nyb2xsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzY3JvbGwuc3R5bGUuY3NzVGV4dCA9IFwib3ZlcmZsb3cteTphdXRvO2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE2cHg7ZmxleDoxO21heC1oZWlnaHQ6NzB2aDtcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHNjcm9sbCk7XG5cbiAgICAvLyBUaXRsZVxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJXT1JLT1VUIENPTVBMRVRFXCI7XG4gICAgdGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBtYXJnaW46MDtjb2xvcjoke1RIRU1FLnN5c3RlbUdyZWVufTtmb250LXNpemU6MTZweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6M3B4O3RleHQtYWxpZ246Y2VudGVyO2A7XG4gICAgc2Nyb2xsLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIC8vIFNlc3Npb24gc3VtbWFyeSBjYXJkc1xuICAgIGlmIChzdW1tYXJ5RGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBzZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2VjLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEycHg7XCI7XG4gICAgICBzY3JvbGwuYXBwZW5kQ2hpbGQoc2VjKTtcblxuICAgICAgY29uc3Qgc2VjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc2VjVGl0bGUudGV4dENvbnRlbnQgPSBcIlNFU1NJT04gU1VNTUFSWVwiO1xuICAgICAgc2VjVGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LWFsaWduOmNlbnRlcjtgO1xuICAgICAgc2VjLmFwcGVuZENoaWxkKHNlY1RpdGxlKTtcblxuICAgICAgZm9yIChjb25zdCBleCBvZiBzdW1tYXJ5RGF0YSkge1xuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZC5zdHlsZS5jc3NUZXh0ID0gYHBhZGRpbmc6MTRweDtiYWNrZ3JvdW5kOiMwYzBjMGM7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICAgICAgICBzZWMuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICAgICAgLy8gRXhlcmNpc2UgbmFtZSArIHN0cmVuZ3RoIGJhZGdlXG4gICAgICAgIGNvbnN0IGhkciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGhkci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbi1ib3R0b206MTBweDtcIjtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChoZHIpO1xuXG4gICAgICAgIGNvbnN0IG5tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIG5tLnRleHRDb250ZW50ID0gZXgubmFtZTtcbiAgICAgICAgbm0uc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7YDtcbiAgICAgICAgaGRyLmFwcGVuZENoaWxkKG5tKTtcblxuICAgICAgICBpZiAoZXguc2wpIHtcbiAgICAgICAgICBjb25zdCBsaSA9IFNUUkVOR1RIX0xFVkVMU1tleC5zbC5sZXZlbF07XG4gICAgICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo0cHg7cGFkZGluZzo0cHggMTBweDtiYWNrZ3JvdW5kOiR7ZXguc2wuY29sb3J9MjA7Ym9yZGVyOjFweCBzb2xpZCAke2V4LnNsLmNvbG9yfTUwO2NvbG9yOiR7ZXguc2wuY29sb3J9O2ZvbnQtc2l6ZToxMXB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzoxcHg7YDtcbiAgICAgICAgICBiYWRnZS50ZXh0Q29udGVudCA9IChsaT8uaWNvbiB8fCBcIlxcdTI1Q0JcIikgKyBcIiBcIiArIGV4LnNsLmxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgaGRyLmFwcGVuZENoaWxkKGJhZGdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlc3Qgc2V0ICsgZXN0aW1hdGVkIDFSTVxuICAgICAgICBjb25zdCBzdGF0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHN0YXRzLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbi1ib3R0b206OHB4O2ZvbnQtc2l6ZToxMnB4O2A7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoc3RhdHMpO1xuXG4gICAgICAgIGNvbnN0IHNldEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc2V0SW5mby50ZXh0Q29udGVudCA9IGV4LnNsPy5pc0JvZHl3ZWlnaHQgPyBcIkJlc3Q6IFwiICsgZXgubWF4UiArIFwiIHJlcHNcIiA6IFwiQmVzdDogXCIgKyBleC5iZXN0VyArIFwia2cgXFx1MDBENyBcIiArIGV4LmJlc3RSO1xuICAgICAgICBzZXRJbmZvLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtgO1xuICAgICAgICBzdGF0cy5hcHBlbmRDaGlsZChzZXRJbmZvKTtcblxuICAgICAgICBpZiAoZXguc2wpIHtcbiAgICAgICAgICBjb25zdCBybUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBybUluZm8udGV4dENvbnRlbnQgPSBleC5zbC5kaXNwbGF5TGFiZWwgKyBcIjogXCIgKyBleC5zbC5jdXJyZW50VmFsdWUgKyBleC5zbC51bml0O1xuICAgICAgICAgIHJtSW5mby5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtd2VpZ2h0OjYwMDtgO1xuICAgICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKHJtSW5mbyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXRzIGNvbXBsZXRlZFxuICAgICAgICBjb25zdCBzZXRzSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNldHNJbmZvLnN0eWxlLmNzc1RleHQgPSBgZm9udC1zaXplOjExcHg7Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTttYXJnaW4tYm90dG9tOjhweDtgO1xuICAgICAgICBzZXRzSW5mby50ZXh0Q29udGVudCA9IGV4LmNvbXBsZXRlZFNldHMgKyBcIi9cIiArIGV4LnRvdGFsU2V0cyArIFwiIHdvcmtpbmcgc2V0cyBjb21wbGV0ZWRcIjtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChzZXRzSW5mbyk7XG5cbiAgICAgICAgLy8gUFIgY29tcGFyaXNvblxuICAgICAgICBpZiAoZXgucHIpIHtcbiAgICAgICAgICBjb25zdCBwckMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHByQy5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZToxMXB4O21hcmdpbi1ib3R0b206OHB4O3BhZGRpbmc6NnB4IDhweDtgO1xuICAgICAgICAgIGNvbnN0IGN2ID0gZXguc2w/LmN1cnJlbnRWYWx1ZSB8fCBleC5zZXNzaW9uQmVzdDtcbiAgICAgICAgICBpZiAoY3YgPiBleC5wci5wclZhbHVlKSB7XG4gICAgICAgICAgICBwckMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMjIsMTU0LDEyNSwwLjE1KVwiO1xuICAgICAgICAgICAgcHJDLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT1cImNvbG9yOiM3YTlhN2Q7Zm9udC13ZWlnaHQ6NzAwO1wiPlxcdUQ4M0NcXHVERjg5IE5FVyBQUiE8L3NwYW4+IDxzcGFuIHN0eWxlPVwiY29sb3I6JyArIFRIRU1FLmNvbG9yTXV0ZWQgKyAnO1wiPlByZXZpb3VzOiAnICsgZXgucHIucHJWYWx1ZSArICcgXFx1MjE5MiBOb3c6ICcgKyBjdiArICc8L3NwYW4+JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGN2ID09PSBleC5wci5wclZhbHVlKSB7XG4gICAgICAgICAgICBwckMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxNjgsMTUyLDk2LDAuMSlcIjtcbiAgICAgICAgICAgIHByQy5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjojYTg5ODYwO1wiPlxcdUQ4M0NcXHVERkM2IE1hdGNoZWQgUFI6PC9zcGFuPiA8c3BhbiBzdHlsZT1cImNvbG9yOicgKyBUSEVNRS5jb2xvck11dGVkICsgJztcIj4nICsgZXgucHIucHJWYWx1ZSArICc8L3NwYW4+JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJDLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTY4LDE1Miw5NiwwLjEpXCI7XG4gICAgICAgICAgICBwckMuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6JyArIFRIRU1FLmNvbG9yTXV0ZWQgKyAnO1wiPlxcdUQ4M0NcXHVERkM2IFBSOiAnICsgZXgucHIucHJWYWx1ZSArICc8L3NwYW4+IDxzcGFuIHN0eWxlPVwiY29sb3I6IzZhNmE2YTtcIj4odG9kYXk6ICcgKyBjdiArICcpPC9zcGFuPic7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJDKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFByb2dyZXNzIGJhciB0byBuZXh0IHN0cmVuZ3RoIGxldmVsXG4gICAgICAgIGlmIChleC5zbCAmJiBleC5zbC5uZXh0VGFyZ2V0KSB7XG4gICAgICAgICAgY29uc3QgcGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHBiLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhclwiO1xuICAgICAgICAgIHBiLnN0eWxlLm1hcmdpblRvcCA9IFwiOHB4XCI7XG4gICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwYik7XG4gICAgICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZmlsbC5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1maWxsXCI7XG4gICAgICAgICAgZmlsbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7TWF0aC5taW4oMTAwLCBleC5zbC5wcm9ncmVzcyl9JTtiYWNrZ3JvdW5kOiR7ZXguc2wuY29sb3J9O2A7XG4gICAgICAgICAgcGIuYXBwZW5kQ2hpbGQoZmlsbCk7XG4gICAgICAgICAgY29uc3QgdGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRpLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2ZvbnQtc2l6ZTo5cHg7Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTttYXJnaW4tdG9wOjRweDtgO1xuICAgICAgICAgIHRpLmlubmVySFRNTCA9IFwiPHNwYW4+Q3VycmVudDogXCIgKyBleC5zbC5jdXJyZW50VmFsdWUgKyBleC5zbC51bml0ICsgXCI8L3NwYW4+PHNwYW4+TmV4dDogXCIgKyBNYXRoLnJvdW5kKGV4LnNsLm5leHRUYXJnZXQpICsgZXguc2wudW5pdCArIFwiPC9zcGFuPlwiO1xuICAgICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gXCJIb3cgZGlkIGl0IGZlZWw/XCIgc2VjdGlvblxuICAgIGNvbnN0IGZlZWxUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBmZWVsVGl0bGUudGV4dENvbnRlbnQgPSBcIkhvdyBkaWQgaXQgZmVlbD9cIjtcbiAgICBmZWVsVGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBtYXJnaW46OHB4IDAgMCAwO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxM3B4O2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3BhY2l0eTowLjg7YDtcbiAgICBzY3JvbGwuYXBwZW5kQ2hpbGQoZmVlbFRpdGxlKTtcblxuICAgIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0bnMuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTBweDtcIjtcbiAgICBzY3JvbGwuYXBwZW5kQ2hpbGQoYnRucyk7XG5cbiAgICAvLyBEaXNjaXBsaW5lIGJ1dHRvblxuICAgIGNvbnN0IGRpc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpc2NCdG4uY2xhc3NOYW1lID0gXCJvdHctZmVlbC1idG5cIjtcbiAgICBkaXNjQnRuLnN0eWxlLmJvcmRlckxlZnQgPSBgM3B4IHNvbGlkICR7VEhFTUUuY29sb3JEaXNjaXBsaW5lfWA7XG4gICAgZGlzY0J0bi5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjRweDt3aWR0aDo0MHB4O3RleHQtYWxpZ246Y2VudGVyO1wiPlxcdUQ4M0RcXHVEQzhFPC9zcGFuPjxkaXYgc3R5bGU9XCJmbGV4OjE7XCI+PGRpdiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JEaXNjaXBsaW5lfTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7bGV0dGVyLXNwYWNpbmc6MS41cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO21hcmdpbi1ib3R0b206NHB4O1wiPkRpc2NpcGxpbmU8L2Rpdj48ZGl2IHN0eWxlPVwiY29sb3I6IzVhNWE1YTtmb250LXNpemU6MTFweDtmb250LXN0eWxlOml0YWxpYztcIj5QdXNoZWQgdGhyb3VnaCByZXNpc3RhbmNlPC9kaXY+PC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiM0YTQwMzA7Zm9udC1zaXplOjE4cHg7b3BhY2l0eTowLjU7XCI+XFx1MjE5MjwvZGl2PmA7XG4gICAgZGlzY0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjbG9zZU1vZGFsKCk7IGF3YWl0IGZpbmlzaFdvcmtvdXQoXCJkaXNjaXBsaW5lXCIpOyB9O1xuICAgIGJ0bnMuYXBwZW5kQ2hpbGQoZGlzY0J0bik7XG5cbiAgICAvLyBGbG93IGJ1dHRvblxuICAgIGNvbnN0IGZsb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZsb3dCdG4uY2xhc3NOYW1lID0gXCJvdHctZmVlbC1idG5cIjtcbiAgICBmbG93QnRuLnN0eWxlLmJvcmRlckxlZnQgPSBgM3B4IHNvbGlkICR7VEhFTUUuY29sb3JGbG93fWA7XG4gICAgZmxvd0J0bi5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjRweDt3aWR0aDo0MHB4O3RleHQtYWxpZ246Y2VudGVyO1wiPlxcdUQ4M0NcXHVERjBBPC9zcGFuPjxkaXYgc3R5bGU9XCJmbGV4OjE7XCI+PGRpdiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JGbG93fTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo2MDA7bGV0dGVyLXNwYWNpbmc6MS41cHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO21hcmdpbi1ib3R0b206NHB4O1wiPkZsb3c8L2Rpdj48ZGl2IHN0eWxlPVwiY29sb3I6IzVhNWE1YTtmb250LXNpemU6MTFweDtmb250LXN0eWxlOml0YWxpYztcIj5GZWx0IG5hdHVyYWwgYW5kIGVmZm9ydGxlc3M8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPVwiY29sb3I6IzMwNDA1MDtmb250LXNpemU6MThweDtvcGFjaXR5OjAuNTtcIj5cXHUyMTkyPC9kaXY+YDtcbiAgICBmbG93QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGNsb3NlTW9kYWwoKTsgYXdhaXQgZmluaXNoV29ya291dChcImZsb3dcIik7IH07XG4gICAgYnRucy5hcHBlbmRDaGlsZChmbG93QnRuKTtcbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQUREIEVYRVJDSVNFIE1PREFMXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gb3BlbkFkZEV4ZXJjaXNlTW9kYWwobXVzY2xlKSB7XG4gIGNyZWF0ZU1vZGFsKFwiQWRkIEV4ZXJjaXNlIC0gXCIgKyBtdXNjbGUsIChjb250ZW50KSA9PiB7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5hbWVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmFtZUlucHV0LnBsYWNlaG9sZGVyID0gXCJFeGVyY2lzZSBuYW1lLi4uXCI7XG4gICAgbmFtZUlucHV0LnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MTAwJTtwYWRkaW5nOjEycHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Ym94LXNpemluZzpib3JkZXItYm94O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xuXG4gICAgY29uc3Qgd2FybXVwTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdhcm11cExhYmVsLnRleHRDb250ZW50ID0gXCJJbmNsdWRlIHdhcm11cCBzZXRzP1wiO1xuICAgIHdhcm11cExhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTJweDttYXJnaW4tdG9wOjEycHg7YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdhcm11cExhYmVsKTtcblxuICAgIGxldCBpbmNXYXJtdXAgPSB0cnVlO1xuICAgIGNvbnN0IHdhcm11cFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2FybXVwUm93LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtnYXA6OHB4O21hcmdpbi10b3A6OHB4O1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2FybXVwUm93KTtcblxuICAgIGNvbnN0IHllc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgeWVzQnRuLnRleHRDb250ZW50ID0gXCJZZXMgKHN1Z2dlc3RlZClcIjtcbiAgICB5ZXNCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gICAgeWVzQnRuLnN0eWxlLmNzc1RleHQgKz0gYGZsZXg6MTtiYWNrZ3JvdW5kOnJnYmEoMTU0LDE0MCwxMjIsMC4yKTtib3JkZXItY29sb3I6JHtUSEVNRS5jb2xvcn07Y29sb3I6JHtUSEVNRS5jb2xvcn07YDtcbiAgICBjb25zdCBub0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbm9CdG4udGV4dENvbnRlbnQgPSBcIk5vXCI7XG4gICAgbm9CdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gICAgbm9CdG4uc3R5bGUuZmxleCA9IFwiMVwiO1xuICAgIHllc0J0bi5vbmNsaWNrID0gKCkgPT4geyBpbmNXYXJtdXAgPSB0cnVlOyB5ZXNCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxNTQsMTQwLDEyMiwwLjIpXCI7IHllc0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFRIRU1FLmNvbG9yOyBub0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMGYwZjBmXCI7IG5vQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3JCb3JkZXI7IH07XG4gICAgbm9CdG4ub25jbGljayA9ICgpID0+IHsgaW5jV2FybXVwID0gZmFsc2U7IG5vQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTU0LDE0MCwxMjIsMC4yKVwiOyBub0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFRIRU1FLmNvbG9yOyB5ZXNCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzBmMGYwZlwiOyB5ZXNCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvckJvcmRlcjsgfTtcbiAgICB3YXJtdXBSb3cuYXBwZW5kQ2hpbGQoeWVzQnRuKTtcbiAgICB3YXJtdXBSb3cuYXBwZW5kQ2hpbGQobm9CdG4pO1xuXG4gICAgY29uc3Qgd2VpZ2h0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdlaWdodExhYmVsLnRleHRDb250ZW50ID0gXCJXb3JraW5nIHdlaWdodCAoa2cpIC0gMCBmb3IgYm9keXdlaWdodFwiO1xuICAgIHdlaWdodExhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTJweDttYXJnaW4tdG9wOjEycHg7YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdlaWdodExhYmVsKTtcblxuICAgIGNvbnN0IHdlaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHdlaWdodElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIHdlaWdodElucHV0LnBsYWNlaG9sZGVyID0gXCIwXCI7XG4gICAgd2VpZ2h0SW5wdXQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoxMDAlO3BhZGRpbmc6MTJweDtiYWNrZ3JvdW5kOiMwZjBmMGY7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTRweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLXRvcDo4cHg7YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdlaWdodElucHV0KTtcblxuICAgIGNvbnN0IGJ0blJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRuUm93LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtnYXA6MTJweDttYXJnaW4tdG9wOjE2cHg7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidG5Sb3cpO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgIGNhbmNlbEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICBjYW5jZWxCdG4uc3R5bGUuZmxleCA9IFwiMVwiO1xuICAgIGNhbmNlbEJ0bi5vbmNsaWNrID0gKCkgPT4gY2xvc2VNb2RhbCgpO1xuICAgIGJ0blJvdy5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBFeGVyY2lzZVwiO1xuICAgIGFkZEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1wcmltYXJ5XCI7XG4gICAgYWRkQnRuLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgICBhZGRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCFuYW1lKSB7IG5vdGljZShcIlBsZWFzZSBlbnRlciBhbiBleGVyY2lzZSBuYW1lXCIpOyByZXR1cm47IH1cbiAgICAgIGNvbnN0IHd3ID0gcGFyc2VGbG9hdCh3ZWlnaHRJbnB1dC52YWx1ZSkgfHwgMDtcbiAgICAgIGNvbnN0IHNldHMgPSBbXTtcbiAgICAgIGlmIChpbmNXYXJtdXAgJiYgd3cgPiAwKSB7XG4gICAgICAgIHNldHMucHVzaCh7IHdlaWdodDogTWF0aC5yb3VuZCh3dyAqIDAuNSksIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogdHJ1ZSB9KTtcbiAgICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiBNYXRoLnJvdW5kKHd3ICogMC43KSwgcmVwczogNiwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IHRydWUgfSk7XG4gICAgICAgIHNldHMucHVzaCh7IHdlaWdodDogTWF0aC5yb3VuZCh3dyAqIDAuODUpLCByZXBzOiAzLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIHNldHMucHVzaCh7IHdlaWdodDogd3csIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IHd3LCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiB3dywgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICAgIGV4ZXJjaXNlcy5wdXNoKHsgbmFtZSwgbXVzY2xlLCBtdXNjbGVHcm91cDogbXVzY2xlLCBzZXRzIH0pO1xuICAgICAgY2xvc2VNb2RhbCgpO1xuICAgICAgYXdhaXQgc2F2ZVN0YXRlKCk7XG4gICAgICByZW5kZXIoKTtcbiAgICB9O1xuICAgIGJ0blJvdy5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiBuYW1lSW5wdXQuZm9jdXMoKSwgMTAwKTtcbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVOREVSOiBTRVQgUk9XXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gcmVuZGVyU2V0KHNldHNDb250YWluZXIsIHNldCwgc2V0SWR4LCBleCwgd2FybXVwUmVmcykge1xuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByb3cuY2xhc3NOYW1lID0gXCJvdHctc2V0LXJvd1wiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjb21wbGV0ZWRcIiA6IFwiXCIpO1xuICBzZXRzQ29udGFpbmVyLmFwcGVuZENoaWxkKHJvdyk7XG4gIGNvbnN0IHJlZnMgPSB7IHdlaWdodElucHV0OiBudWxsIH07XG5cbiAgLy8gQ2hlY2tib3hcbiAgY29uc3QgY2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYi5jbGFzc05hbWUgPSBcIm90dy1jaGVja2JveFwiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjaGVja2VkXCIgOiBcIlwiKTtcbiAgY2IudGV4dENvbnRlbnQgPSBzZXQuY29tcGxldGVkID8gXCJcXHUyNzEzXCIgOiBcIlwiO1xuICBjYi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldC5jb21wbGV0ZWQgPSAhc2V0LmNvbXBsZXRlZDtcbiAgICBjYi5jbGFzc05hbWUgPSBcIm90dy1jaGVja2JveFwiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjaGVja2VkXCIgOiBcIlwiKTtcbiAgICBjYi50ZXh0Q29udGVudCA9IHNldC5jb21wbGV0ZWQgPyBcIlxcdTI3MTNcIiA6IFwiXCI7XG4gICAgcm93LmNsYXNzTmFtZSA9IFwib3R3LXNldC1yb3dcIiArIChzZXQuY29tcGxldGVkID8gXCIgY29tcGxldGVkXCIgOiBcIlwiKTtcbiAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgfTtcbiAgcm93LmFwcGVuZENoaWxkKGNiKTtcblxuICAvLyBNaWRkbGU6IHdlaWdodCArIHJlcHNcbiAgY29uc3QgbWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWlkLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjEycHg7ZmxleC13cmFwOndyYXA7XCI7XG4gIHJvdy5hcHBlbmRDaGlsZChtaWQpO1xuXG4gIC8vIFdlaWdodCBpbnB1dFxuICBjb25zdCB3V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdXcmFwLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtcIjtcbiAgbWlkLmFwcGVuZENoaWxkKHdXcmFwKTtcbiAgY29uc3Qgd0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB3SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gIHdJbnB1dC52YWx1ZSA9IHNldC53ZWlnaHQ7XG4gIHdJbnB1dC5jbGFzc05hbWUgPSBcIm90dy1pbnB1dFwiO1xuICBjb25zdCBmaXJzdFcgPSBnZXRGaXJzdFdvcmtpbmdTZXRJbmRleChleC5zZXRzKTtcbiAgY29uc3QgaXNGaXJzdCA9ICFzZXQuaXNXYXJtdXAgJiYgc2V0SWR4ID09PSBmaXJzdFc7XG4gIHdJbnB1dC5vbmNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XG4gICAgY29uc3QgbncgPSBwYXJzZUZsb2F0KGUudGFyZ2V0LnZhbHVlKSB8fCAwO1xuICAgIHNldC53ZWlnaHQgPSBudztcbiAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgdXBkYXRlV2FybXVwV2VpZ2h0cyhleCwgbncpO1xuICAgICAgY29uc3Qgd3MgPSBleC5zZXRzLmZpbHRlcigocykgPT4gcy5pc1dhcm11cCk7XG4gICAgICB3YXJtdXBSZWZzLmZvckVhY2goKGlucCwgaSkgPT4geyBpZiAod3NbaV0pIGlucC52YWx1ZSA9IHdzW2ldLndlaWdodDsgfSk7XG4gICAgfVxuICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICB9O1xuICB3V3JhcC5hcHBlbmRDaGlsZCh3SW5wdXQpO1xuICByZWZzLndlaWdodElucHV0ID0gd0lucHV0O1xuICBjb25zdCBrZ0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGtnTGFiZWwudGV4dENvbnRlbnQgPSBcImtnXCI7XG4gIGtnTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O2A7XG4gIHdXcmFwLmFwcGVuZENoaWxkKGtnTGFiZWwpO1xuXG4gIC8vIFJlcHMgY29udHJvbHNcbiAgY29uc3QgcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICByV3JhcC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo0cHg7XCI7XG4gIG1pZC5hcHBlbmRDaGlsZChyV3JhcCk7XG4gIGNvbnN0IG1pbnVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgbWludXNCdG4uY2xhc3NOYW1lID0gXCJvdHctY3RybC1idG5cIjtcbiAgbWludXNCdG4udGV4dENvbnRlbnQgPSBcIlxcdTIyMTJcIjtcbiAgbWludXNCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgaWYgKHNldC5yZXBzID4gMSkgeyBzZXQucmVwcy0tOyByRGlzcC50ZXh0Q29udGVudCA9IHNldC5yZXBzICsgXCJcXHUwMEQ3XCI7IGF3YWl0IHNhdmVTdGF0ZSgpOyB9IH07XG4gIHJXcmFwLmFwcGVuZENoaWxkKG1pbnVzQnRuKTtcbiAgY29uc3QgckRpc3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgckRpc3AudGV4dENvbnRlbnQgPSBzZXQucmVwcyArIFwiXFx1MDBEN1wiO1xuICByRGlzcC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDttaW4td2lkdGg6MzBweDt0ZXh0LWFsaWduOmNlbnRlcjtgO1xuICByV3JhcC5hcHBlbmRDaGlsZChyRGlzcCk7XG4gIGNvbnN0IHBsdXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBwbHVzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWN0cmwtYnRuXCI7XG4gIHBsdXNCdG4udGV4dENvbnRlbnQgPSBcIitcIjtcbiAgcGx1c0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBzZXQucmVwcysrOyByRGlzcC50ZXh0Q29udGVudCA9IHNldC5yZXBzICsgXCJcXHUwMEQ3XCI7IGF3YWl0IHNhdmVTdGF0ZSgpOyB9O1xuICByV3JhcC5hcHBlbmRDaGlsZChwbHVzQnRuKTtcblxuICBpZiAoc2V0LmlzV2FybXVwKSB7XG4gICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBiYWRnZS5jbGFzc05hbWUgPSBcIm90dy13YXJtdXAtYmFkZ2VcIjtcbiAgICBiYWRnZS50ZXh0Q29udGVudCA9IFwiXFx1MjZBMSBXYXJtdXBcIjtcbiAgICBtaWQuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICB9XG5cbiAgLy8gRGVsZXRlIHNldCBidXR0b25cbiAgaWYgKGV4LnNldHMubGVuZ3RoID4gMSkge1xuICAgIGNvbnN0IGRlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsQnRuLnRleHRDb250ZW50ID0gXCJcXHUwMEQ3XCI7XG4gICAgZGVsQnRuLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MjhweDtoZWlnaHQ6MjhweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjoxcHggc29saWQgIzNhMjgyODtjb2xvcjojNmE0YTRhO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxNnB4O2A7XG4gICAgZGVsQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGV4LnNldHMuc3BsaWNlKHNldElkeCwgMSk7IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfTtcbiAgICByb3cuYXBwZW5kQ2hpbGQoZGVsQnRuKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcGguc3R5bGUud2lkdGggPSBcIjI4cHhcIjtcbiAgICByb3cuYXBwZW5kQ2hpbGQocGgpO1xuICB9XG5cbiAgcmV0dXJuIHJlZnM7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVOREVSOiBFWEVSQ0lTRSBDQVJEXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyRXhlcmNpc2UoZXhDb250YWluZXIsIGV4KSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTmFtZSA9IFwib3R3LWNhcmRcIjtcbiAgZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIGFkZENvcm5lcnMoY2FyZCwgVEhFTUUuY29sb3IsIDEyKTtcblxuICBjb25zdCBleEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGV4SGVhZGVyLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7bWFyZ2luLWJvdHRvbToxMnB4O3BhZGRpbmctYm90dG9tOjEycHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgY2FyZC5hcHBlbmRDaGlsZChleEhlYWRlcik7XG5cbiAgY29uc3QgbGVmdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRDb2wuc3R5bGUuZmxleCA9IFwiMVwiO1xuICBleEhlYWRlci5hcHBlbmRDaGlsZChsZWZ0Q29sKTtcblxuICBjb25zdCBleFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBleFRpdGxlLnRleHRDb250ZW50ID0gZXgubmFtZTtcbiAgZXhUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjowIDAgOHB4IDA7Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE2cHg7bGV0dGVyLXNwYWNpbmc6MXB4O2A7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoZXhUaXRsZSk7XG5cbiAgLy8gU3RyZW5ndGggbGV2ZWwgKyBQUiBpbmZvXG4gIGNvbnN0IGhhc1N0ZCA9IGF3YWl0IGhhc1N0cmVuZ3RoU3RhbmRhcmQoZXgubmFtZSk7XG4gIGNvbnN0IHByID0gYXdhaXQgZ2V0RXhlcmNpc2VQUihleC5uYW1lKTtcbiAgY29uc3Qgd29ya2luZ1NldHMgPSBleC5zZXRzLmZpbHRlcigocykgPT4gIXMuaXNXYXJtdXApO1xuICBsZXQgYmVzdFcgPSAwLCBiZXN0UiA9IDAsIG1heFIgPSAwO1xuICB3b3JraW5nU2V0cy5mb3JFYWNoKChzKSA9PiB7IGlmIChzLnJlcHMgPiBtYXhSKSBtYXhSID0gcy5yZXBzOyBpZiAocy53ZWlnaHQgPiBiZXN0VyB8fCAocy53ZWlnaHQgPT09IGJlc3RXICYmIHMucmVwcyA+IGJlc3RSKSkgeyBiZXN0VyA9IHMud2VpZ2h0OyBiZXN0UiA9IHMucmVwczsgfSB9KTtcblxuICBpZiAoaGFzU3RkKSB7XG4gICAgbGV0IHNsO1xuICAgIGlmIChwcikgeyBzbCA9IHByLmlzQm9keXdlaWdodCA/IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXgubmFtZSwgMCwgcHIucHJWYWx1ZSwgcHIucHJWYWx1ZSkgOiBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIHByLndlaWdodCwgcHIucmVwcywgbnVsbCk7IH1cbiAgICBlbHNlIGlmIChiZXN0VyA+IDAgfHwgbWF4UiA+IDApIHsgc2wgPSBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIGJlc3RXLCBiZXN0UiwgbWF4Uik7IH1cbiAgICBpZiAoc2wpIHtcbiAgICAgIGNvbnN0IGxpID0gU1RSRU5HVEhfTEVWRUxTW3NsLmxldmVsXTtcbiAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhZGdlXCI7XG4gICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ICs9IGBiYWNrZ3JvdW5kOiR7c2wuY29sb3J9MjU7Ym9yZGVyOjFweCBzb2xpZCAke3NsLmNvbG9yfTYwO2NvbG9yOiR7c2wuY29sb3J9O2A7XG4gICAgICBiYWRnZS50ZXh0Q29udGVudCA9IChsaT8uaWNvbiB8fCBcIlxcdTI1Q0JcIikgKyBcIiBcIiArIHNsLmxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgICBsZWZ0Q29sLmFwcGVuZENoaWxkKGJhZGdlKTtcblxuICAgICAgY29uc3Qgcm1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJtSW5mby5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZToxMXB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bWFyZ2luLXRvcDo2cHg7YDtcbiAgICAgIHJtSW5mby5pbm5lckhUTUwgPSBgPHN0cm9uZyBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3J9XCI+JHtzbC5kaXNwbGF5TGFiZWx9OiAke3NsLmN1cnJlbnRWYWx1ZX0ke3NsLnVuaXR9PC9zdHJvbmc+YDtcbiAgICAgIGlmIChzbC5uZXh0VGFyZ2V0KSBybUluZm8uaW5uZXJIVE1MICs9IGAgXFx1MjE5MiBOZXh0OiAke01hdGgucm91bmQoc2wubmV4dFRhcmdldCl9JHtzbC51bml0fWA7XG4gICAgICBsZWZ0Q29sLmFwcGVuZENoaWxkKHJtSW5mbyk7XG5cbiAgICAgIGNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBiLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhclwiO1xuICAgICAgbGVmdENvbC5hcHBlbmRDaGlsZChwYik7XG4gICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZpbGwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgICAgZmlsbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7TWF0aC5taW4oMTAwLCBzbC5wcm9ncmVzcyl9JTtiYWNrZ3JvdW5kOiR7c2wuY29sb3J9O2A7XG4gICAgICBwYi5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICB9XG4gIH1cblxuICBpZiAocHIpIHtcbiAgICBjb25zdCBwckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJCb3guY2xhc3NOYW1lID0gXCJvdHctcHItYm94XCI7XG4gICAgY29uc3QgcHJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJUaXRsZS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6MTFweDtjb2xvcjojYTg5ODYwO2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzoxcHg7XCI7XG4gICAgcHJUaXRsZS50ZXh0Q29udGVudCA9IHByLmlzQm9keXdlaWdodCA/IFwiXFx1RDgzQ1xcdURGQzYgQUxMLVRJTUUgUFI6IFwiICsgcHIucHJWYWx1ZSArIFwiIHJlcHNcIiA6IFwiXFx1RDgzQ1xcdURGQzYgQUxMLVRJTUUgUFI6IFwiICsgcHIuZXN0aW1hdGVkMVJNICsgXCJrZyAoMVJNKVwiO1xuICAgIHByQm94LmFwcGVuZENoaWxkKHByVGl0bGUpO1xuICAgIGNvbnN0IHByRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwckRldGFpbC5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZToxMHB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07YDtcbiAgICBwckRldGFpbC50ZXh0Q29udGVudCA9IHByLmlzQm9keXdlaWdodCA/IFwiQmVzdDogXCIgKyBwci5yZXBzICsgXCIgcmVwc1wiIDogXCJTZXQ6IFwiICsgcHIud2VpZ2h0ICsgXCJrZyBcXHUwMEQ3IFwiICsgcHIucmVwcyArIFwiIHJlcHNcIjtcbiAgICBwckJveC5hcHBlbmRDaGlsZChwckRldGFpbCk7XG4gICAgbGVmdENvbC5hcHBlbmRDaGlsZChwckJveCk7XG4gIH1cblxuICAvLyBEZWxldGUgZXhlcmNpc2UgYnV0dG9uXG4gIGNvbnN0IGRlbEV4QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsRXhCdG4udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0RcXHVEREQxXFx1RkUwRlwiO1xuICBkZWxFeEJ0bi5zdHlsZS5jc3NUZXh0ID0gXCJiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxNHB4O29wYWNpdHk6MC41O1wiO1xuICBkZWxFeEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjb25zdCBpZHggPSBleGVyY2lzZXMuaW5kZXhPZihleCk7IGlmIChpZHggPiAtMSkgeyBleGVyY2lzZXMuc3BsaWNlKGlkeCwgMSk7IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfSB9O1xuICBleEhlYWRlci5hcHBlbmRDaGlsZChkZWxFeEJ0bik7XG5cbiAgLy8gU2V0c1xuICBjb25zdCBzZXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0c0NvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo2cHg7XCI7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoc2V0c0NvbnRhaW5lcik7XG4gIGNvbnN0IHdhcm11cFJlZnMgPSBbXTtcbiAgZXguc2V0cy5mb3JFYWNoKChzZXQsIHNldElkeCkgPT4ge1xuICAgIGNvbnN0IHJlZnMgPSByZW5kZXJTZXQoc2V0c0NvbnRhaW5lciwgc2V0LCBzZXRJZHgsIGV4LCB3YXJtdXBSZWZzKTtcbiAgICBpZiAoc2V0LmlzV2FybXVwICYmIHJlZnMud2VpZ2h0SW5wdXQpIHdhcm11cFJlZnMucHVzaChyZWZzLndlaWdodElucHV0KTtcbiAgfSk7XG5cbiAgLy8gQWRkIHNldCBidXR0b25cbiAgY29uc3QgYWRkU2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkU2V0QnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBTZXRcIjtcbiAgYWRkU2V0QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLWRhc2hlZFwiO1xuICBhZGRTZXRCdG4uc3R5bGUuY3NzVGV4dCArPSBcIm1hcmdpbi10b3A6OHB4O3BhZGRpbmc6OHB4IDEycHg7Zm9udC1zaXplOjEycHg7XCI7XG4gIGFkZFNldEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBleC5zZXRzW2V4LnNldHMubGVuZ3RoIC0gMV0gfHwgeyB3ZWlnaHQ6IDAsIHJlcHM6IDEwIH07XG4gICAgZXguc2V0cy5wdXNoKHsgd2VpZ2h0OiBsYXN0LndlaWdodCwgcmVwczogbGFzdC5yZXBzLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgYXdhaXQgc2F2ZVN0YXRlKCk7XG4gICAgcmVuZGVyKCk7XG4gIH07XG4gIGNhcmQuYXBwZW5kQ2hpbGQoYWRkU2V0QnRuKTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTVEFUSVNUSUNTICYgSEVBVE1BUCBEQVRBXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy8gTWFwIG11c2NsZS9zdWJncm91cCBuYW1lcyBcdTIxOTIgYm9keSByZWdpb25zIGZvciB0aGUgaGVhdG1hcFxuY29uc3QgTVVTQ0xFX1RPX1JFR0lPTiA9IHtcbiAgTmVjazogW1wibmVja1wiXSwgQ2hlc3Q6IFtcImNoZXN0XCJdLCBDb3JlOiBbXCJjb3JlXCJdLFxuICBCYWNrOiBbXCJsYXRzXCIsIFwidHJhcHNcIiwgXCJsb3dlcl9iYWNrXCJdLCBMYXRzOiBbXCJsYXRzXCJdLCBUcmFwczogW1widHJhcHNcIl0sXG4gIFJob21ib2lkczogW1widHJhcHNcIl0sIFwiTG93ZXIgQmFja1wiOiBbXCJsb3dlcl9iYWNrXCJdLCBcIlJlYXIgRGVsdHNcIjogW1wicmVhcl9kZWx0c1wiXSxcbiAgU2hvdWxkZXJzOiBbXCJmcm9udF9kZWx0c1wiLCBcInJlYXJfZGVsdHNcIl0sIFwiRnJvbnQgRGVsdHNcIjogW1wiZnJvbnRfZGVsdHNcIl0sXG4gIFwiU2lkZSBEZWx0c1wiOiBbXCJmcm9udF9kZWx0c1wiXSxcbiAgTGVnczogW1wicXVhZHNcIiwgXCJoYW1zdHJpbmdzXCIsIFwiZ2x1dGVzXCIsIFwiY2FsdmVzXCJdLCBRdWFkczogW1wicXVhZHNcIl0sXG4gIEhhbXN0cmluZ3M6IFtcImhhbXN0cmluZ3NcIl0sIEdsdXRlczogW1wiZ2x1dGVzXCJdLCBDYWx2ZXM6IFtcImNhbHZlc1wiXSxcbiAgQWRkdWN0b3JzOiBbXCJxdWFkc1wiXSxcbiAgQXJtczogW1wiYmljZXBzXCIsIFwidHJpY2Vwc1wiLCBcImZvcmVhcm1zXCJdLCBCaWNlcHM6IFtcImJpY2Vwc1wiXSxcbiAgVHJpY2VwczogW1widHJpY2Vwc1wiXSwgRm9yZWFybXM6IFtcImZvcmVhcm1zXCJdLFxufTtcblxuZnVuY3Rpb24gZ2V0V2Vla2x5Q2FsZW5kYXJEYXRhKCkge1xuICBjb25zdCB0b2RheSA9IG1vbWVudCgpLnN0YXJ0T2YoXCJkYXlcIik7XG4gIGNvbnN0IHdlZWtTdGFydCA9IHRvZGF5LmNsb25lKCkuc3RhcnRPZihcImlzb1dlZWtcIik7XG4gIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgY29uc3QgZGF5cyA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGNvbnN0IGRheSA9IHdlZWtTdGFydC5jbG9uZSgpLmFkZChpLCBcImRheXNcIik7XG4gICAgY29uc3QgZGF5U3RyID0gZGF5LmZvcm1hdChcIllZWVktTU0tRERcIik7XG4gICAgY29uc3QgaXNUb2RheSA9IGRheS5pc1NhbWUodG9kYXksIFwiZGF5XCIpO1xuICAgIGNvbnN0IGlzUGFzdCA9IGRheS5pc0JlZm9yZSh0b2RheSwgXCJkYXlcIik7XG4gICAgbGV0IHN0YXR1cyA9IG51bGwsIHR5cGUgPSBudWxsO1xuICAgIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICAgIGlmICh3RmlsZS5iYXNlbmFtZSA9PT0gZGF5U3RyKSB7XG4gICAgICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgICAgICBpZiAoZm0gJiYgZm0uV29ya291dCA9PT0gdHJ1ZSkgeyBzdGF0dXMgPSBcImRvbmVcIjsgdHlwZSA9IGZtW1wiV29ya291dC1UeXBlXCJdIHx8IFwiZG9uZVwiOyB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBkYXlzLnB1c2goeyBsYWJlbDogZGF5LmZvcm1hdChcImRkXCIpWzBdLCBudW06IGRheS5mb3JtYXQoXCJEXCIpLCBpc1RvZGF5LCBpc1Bhc3QsIHN0YXR1cywgdHlwZSB9KTtcbiAgfVxuICByZXR1cm4gZGF5cztcbn1cblxuZnVuY3Rpb24gZ2V0TW9udGhseVN0YXRzKCkge1xuICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICBjb25zdCB3ZWVrU3RhcnQgPSBub3cuY2xvbmUoKS5zdGFydE9mKFwiaXNvV2Vla1wiKTtcbiAgY29uc3QgbW9udGhTdGFydCA9IG5vdy5jbG9uZSgpLnN0YXJ0T2YoXCJtb250aFwiKTtcbiAgbGV0IHRoaXNXZWVrID0gMCwgdGhpc01vbnRoID0gMCwgdG90YWwgPSAwLCB0b3RhbFNldHMgPSAwLCB0b3RhbFZvbHVtZSA9IDA7XG4gIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICBpZiAoIWZtIHx8IGZtLldvcmtvdXQgIT09IHRydWUpIGNvbnRpbnVlO1xuICAgIHRvdGFsKys7XG4gICAgY29uc3QgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgaWYgKCFkYXRlTWF0Y2gpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGZpbGVEYXRlID0gbW9tZW50KGRhdGVNYXRjaFsxXSwgXCJZWVlZLU1NLUREXCIpO1xuICAgIGlmIChmaWxlRGF0ZS5pc1NhbWVPckFmdGVyKHdlZWtTdGFydCkpIHRoaXNXZWVrKys7XG4gICAgaWYgKGZpbGVEYXRlLmlzU2FtZU9yQWZ0ZXIobW9udGhTdGFydCkpIHRoaXNNb250aCsrO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykpIHtcbiAgICAgIGZvciAoY29uc3QgZXggb2YgZm0uZXhlcmNpc2VzKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShleC5zZXRzKSkgY29udGludWU7XG4gICAgICAgIGZvciAoY29uc3QgcyBvZiBleC5zZXRzKSB7XG4gICAgICAgICAgaWYgKHMuY29tcGxldGVkICYmICFzLmlzV2FybXVwKSB7IHRvdGFsU2V0cysrOyB0b3RhbFZvbHVtZSArPSAocy53ZWlnaHQgfHwgMCkgKiAocy5yZXBzIHx8IDApOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgdGhpc1dlZWssIHRoaXNNb250aCwgdG90YWwsIHRvdGFsU2V0cywgdG90YWxWb2x1bWUgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVjZW50U2Vzc2lvbnMobGltaXQpIHtcbiAgbGltaXQgPSBsaW1pdCB8fCA0O1xuICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gIGNvbnN0IHNvcnRlZCA9IGFsbEZpbGVzLnNvcnQoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYi5iYXNlbmFtZS5sb2NhbGVDb21wYXJlKGEuYmFzZW5hbWUpOyB9KTtcbiAgY29uc3Qgc2Vzc2lvbnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3J0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc2Vzc2lvbnMubGVuZ3RoID49IGxpbWl0KSBicmVhaztcbiAgICB2YXIgd0ZpbGUgPSBzb3J0ZWRbaV07XG4gICAgaWYgKHdGaWxlLnBhdGggPT09IGZpbGUucGF0aCkgY29udGludWU7XG4gICAgdmFyIGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSkgY29udGludWU7XG4gICAgdmFyIGRhdGVNYXRjaCA9IHdGaWxlLmJhc2VuYW1lLm1hdGNoKC9eKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS8pO1xuICAgIHNlc3Npb25zLnB1c2goe1xuICAgICAgZGF0ZTogZGF0ZU1hdGNoID8gZGF0ZU1hdGNoWzFdIDogd0ZpbGUuYmFzZW5hbWUsXG4gICAgICB0eXBlOiBmbVtcIldvcmtvdXQtVHlwZVwiXSB8fCBcImRvbmVcIixcbiAgICAgIG11c2NsZXM6IGZtLm11c2NsZUdyb3VwcyB8fCBbXSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gc2Vzc2lvbnM7XG59XG5cbi8vIEJ1aWxkIHN0cmVuZ3RoIGxldmVsIGRhdGEgcGVyIGJvZHkgcmVnaW9uIGZyb20gQUxMIGNvbXBsZXRlZCB3b3Jrb3V0c1xuYXN5bmMgZnVuY3Rpb24gZ2V0TXVzY2xlTGV2ZWxEYXRhKCkge1xuICBjb25zdCBleGVyY2lzZUJlc3QgPSB7fTsgLy8gZXhlcmNpc2VOYW1lIFx1MjE5MiB7IHdlaWdodCwgcmVwcywgbWF4UmVwcywgbXVzY2xlIH1cbiAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBmb3IgKGNvbnN0IHdGaWxlIG9mIGFsbEZpbGVzKSB7XG4gICAgaWYgKHdGaWxlLnBhdGggPT09IGZpbGUucGF0aCkgY29udGludWU7XG4gICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlIHx8ICFBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykpIGNvbnRpbnVlO1xuICAgIGZvciAoY29uc3QgZXggb2YgZm0uZXhlcmNpc2VzKSB7XG4gICAgICBjb25zdCBkb25lID0gKGV4LnNldHMgfHwgW10pLmZpbHRlcihmdW5jdGlvbihzKSB7IHJldHVybiBzLmNvbXBsZXRlZCAmJiAhcy5pc1dhcm11cDsgfSk7XG4gICAgICBpZiAoZG9uZS5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuICAgICAgbGV0IGJlc3RXID0gMCwgYmVzdFIgPSAwLCBtYXhSID0gMDtcbiAgICAgIGZvciAoY29uc3QgcyBvZiBkb25lKSB7XG4gICAgICAgIGlmIChzLnJlcHMgPiBtYXhSKSBtYXhSID0gcy5yZXBzO1xuICAgICAgICBpZiAocy53ZWlnaHQgPiBiZXN0VyB8fCAocy53ZWlnaHQgPT09IGJlc3RXICYmIHMucmVwcyA+IGJlc3RSKSkgeyBiZXN0VyA9IHMud2VpZ2h0OyBiZXN0UiA9IHMucmVwczsgfVxuICAgICAgfVxuICAgICAgY29uc3QgZXhpc3RpbmcgPSBleGVyY2lzZUJlc3RbZXgubmFtZV07XG4gICAgICBpZiAoIWV4aXN0aW5nKSB7XG4gICAgICAgIGV4ZXJjaXNlQmVzdFtleC5uYW1lXSA9IHsgd2VpZ2h0OiBiZXN0VywgcmVwczogYmVzdFIsIG1heFJlcHM6IG1heFIsIG11c2NsZTogZXgubXVzY2xlIHx8IGV4Lm11c2NsZUdyb3VwIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvbGRWYWwgPSBleGlzdGluZy53ZWlnaHQgPiAwID8gY2FsY3VsYXRlMVJNKGV4aXN0aW5nLndlaWdodCwgZXhpc3RpbmcucmVwcykgOiBleGlzdGluZy5tYXhSZXBzO1xuICAgICAgICBjb25zdCBuZXdWYWwgPSBiZXN0VyA+IDAgPyBjYWxjdWxhdGUxUk0oYmVzdFcsIGJlc3RSKSA6IG1heFI7XG4gICAgICAgIGlmIChuZXdWYWwgPiBvbGRWYWwpIGV4ZXJjaXNlQmVzdFtleC5uYW1lXSA9IHsgd2VpZ2h0OiBiZXN0VywgcmVwczogYmVzdFIsIG1heFJlcHM6IG1heFIsIG11c2NsZTogZXgubXVzY2xlIHx8IGV4Lm11c2NsZUdyb3VwIH07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIENhbGN1bGF0ZSBzdHJlbmd0aCBsZXZlbCBwZXIgZXhlcmNpc2UsIG1hcCB0byBib2R5IHJlZ2lvbnNcbiAgY29uc3QgcmVnaW9uRW50cmllcyA9IHt9O1xuICBmb3IgKGNvbnN0IFtleE5hbWUsIGRhdGFdIG9mIE9iamVjdC5lbnRyaWVzKGV4ZXJjaXNlQmVzdCkpIHtcbiAgICBjb25zdCBzbCA9IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXhOYW1lLCBkYXRhLndlaWdodCwgZGF0YS5yZXBzLCBkYXRhLm1heFJlcHMpO1xuICAgIGlmICghc2wpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJlZ2lvbnMgPSBNVVNDTEVfVE9fUkVHSU9OW2RhdGEubXVzY2xlXSB8fCBbXTtcbiAgICBmb3IgKGNvbnN0IHJlZ2lvbiBvZiByZWdpb25zKSB7XG4gICAgICBpZiAoIXJlZ2lvbkVudHJpZXNbcmVnaW9uXSkgcmVnaW9uRW50cmllc1tyZWdpb25dID0gW107XG4gICAgICByZWdpb25FbnRyaWVzW3JlZ2lvbl0ucHVzaCh7IGxldmVsOiBzbC5sZXZlbCwgY29sb3I6IHNsLmNvbG9yLCBwcm9ncmVzczogc2wucHJvZ3Jlc3MgfSk7XG4gICAgfVxuICB9XG4gIC8vIFBpY2sgdGhlIGJlc3Qgc3RyZW5ndGggbGV2ZWwgcGVyIHJlZ2lvblxuICBjb25zdCBsZXZlbE9yZGVyID0gW1wiVW50cmFpbmVkXCIsIFwiQmVnaW5uZXJcIiwgXCJOb3ZpY2VcIiwgXCJJbnRlcm1lZGlhdGVcIiwgXCJBZHZhbmNlZFwiLCBcIkVsaXRlXCJdO1xuICBjb25zdCByZXN1bHQgPSB7fTtcbiAgZm9yIChjb25zdCBbcmVnaW9uLCBlbnRyaWVzXSBvZiBPYmplY3QuZW50cmllcyhyZWdpb25FbnRyaWVzKSkge1xuICAgIGxldCBiZXN0ID0gZW50cmllc1swXSwgYmVzdElkeCA9IGxldmVsT3JkZXIuaW5kZXhPZihlbnRyaWVzWzBdLmxldmVsKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IGVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGlkeCA9IGxldmVsT3JkZXIuaW5kZXhPZihlbnRyaWVzW2ldLmxldmVsKTtcbiAgICAgIGlmIChpZHggPiBiZXN0SWR4KSB7IGJlc3RJZHggPSBpZHg7IGJlc3QgPSBlbnRyaWVzW2ldOyB9XG4gICAgfVxuICAgIHJlc3VsdFtyZWdpb25dID0gYmVzdDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJPRFkgSEVBVE1BUCBTVkcgXHUyMDE0IEludGVyYWN0aXZlIHdpdGggY2xpY2stdG8tc2hvdy1wcm9ncmVzc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IFJFR0lPTl9MQUJFTFMgPSB7XG4gIG5lY2s6IFwiTmVja1wiLCBjaGVzdDogXCJDaGVzdFwiLCBmcm9udF9kZWx0czogXCJGcm9udCBEZWx0c1wiLCByZWFyX2RlbHRzOiBcIlJlYXIgRGVsdHNcIixcbiAgYmljZXBzOiBcIkJpY2Vwc1wiLCB0cmljZXBzOiBcIlRyaWNlcHNcIiwgZm9yZWFybXM6IFwiRm9yZWFybXNcIiwgY29yZTogXCJDb3JlXCIsXG4gIHF1YWRzOiBcIlF1YWRzXCIsIGNhbHZlczogXCJDYWx2ZXNcIiwgdHJhcHM6IFwiVHJhcHNcIiwgbGF0czogXCJMYXRzXCIsXG4gIGxvd2VyX2JhY2s6IFwiTG93ZXIgQmFja1wiLCBnbHV0ZXM6IFwiR2x1dGVzXCIsIGhhbXN0cmluZ3M6IFwiSGFtc3RyaW5nc1wiLFxufTtcblxuZnVuY3Rpb24gYnVpbGRJbnRlcmFjdGl2ZUJvZHlTdmcodmlldywgbXVzY2xlTGV2ZWxzLCBvblJlZ2lvbkNsaWNrKSB7XG4gIGNvbnN0IHVudHJhaW5lZCA9IFwiIzFhMTgxNlwiO1xuICBmdW5jdGlvbiBmaWxsKHJlZ2lvbikge1xuICAgIGNvbnN0IGQgPSBtdXNjbGVMZXZlbHNbcmVnaW9uXTtcbiAgICByZXR1cm4gZCA/IGQuY29sb3IgKyBcIjkwXCIgOiB1bnRyYWluZWQ7XG4gIH1cbiAgZnVuY3Rpb24gc3Ryb2tlKHJlZ2lvbikge1xuICAgIGNvbnN0IGQgPSBtdXNjbGVMZXZlbHNbcmVnaW9uXTtcbiAgICByZXR1cm4gZCA/IGQuY29sb3IgKyBcIjQwXCIgOiBcIiMyYTI1MjBcIjtcbiAgfVxuXG4gIGNvbnN0IGhlYWQgPSAnPGVsbGlwc2UgY3g9XCI1MFwiIGN5PVwiMTRcIiByeD1cIjEwXCIgcnk9XCIxMVwiIGZpbGw9XCIjMGMwYzBjXCIgc3Ryb2tlPVwiIzJhMjUyMFwiIHN0cm9rZS13aWR0aD1cIjAuOFwiLz4nO1xuXG4gIGNvbnN0IGZyb250UGF0aHMgPSB7XG4gICAgbmVjazogICAgICAgJzxwYXRoIGQ9XCJNNDQsMjQgTDU2LDI0IEw1NSwzMSBMNDUsMzEgWlwiLz4nLFxuICAgIGZyb250X2RlbHRzOic8cGF0aCBkPVwiTTMxLDMzIEMyNSwzMyAxOSwzNiAxOCw0MyBMMjYsNDMgTDMxLDM3IFpcIi8+PHBhdGggZD1cIk02OSwzMyBDNzUsMzMgODEsMzYgODIsNDMgTDc0LDQzIEw2OSwzNyBaXCIvPicsXG4gICAgY2hlc3Q6ICAgICAgJzxwYXRoIGQ9XCJNMzEsMzcgTDQ5LDM3IEw0OSw1NSBDNDksNTcgNDIsNjAgMzMsNTggTDMxLDU2IFpcIi8+PHBhdGggZD1cIk01MSwzNyBMNjksMzcgTDY5LDU2IEw2Nyw1OCBDNTgsNjAgNTEsNTcgNTEsNTUgWlwiLz4nLFxuICAgIGJpY2VwczogICAgICc8cGF0aCBkPVwiTTE4LDQzIEwyNiw0MyBMMjYsNjUgQzI1LDY3IDE5LDY3IDE4LDY1IFpcIi8+PHBhdGggZD1cIk03NCw0MyBMODIsNDMgTDgyLDY1IEM4MSw2NyA3NSw2NyA3NCw2NSBaXCIvPicsXG4gICAgZm9yZWFybXM6ICAgJzxwYXRoIGQ9XCJNMTgsNjggTDI2LDY4IEwyNCw5NiBMMTYsOTYgWlwiLz48cGF0aCBkPVwiTTc0LDY4IEw4Miw2OCBMODQsOTYgTDc2LDk2IFpcIi8+JyxcbiAgICBjb3JlOiAgICAgICAnPHBhdGggZD1cIk0zMyw1OCBMNjcsNTggTDY1LDgyIEwzNSw4MiBaXCIvPicsXG4gICAgcXVhZHM6ICAgICAgJzxwYXRoIGQ9XCJNMzUsODQgTDQ5LDg0IEw0OCwxMzYgTDM0LDEzNiBaXCIvPjxwYXRoIGQ9XCJNNTEsODQgTDY1LDg0IEw2NiwxMzYgTDUyLDEzNiBaXCIvPicsXG4gICAgY2FsdmVzOiAgICAgJzxwYXRoIGQ9XCJNMzUsMTQwIEw0OCwxNDAgTDQ2LDE5MCBMMzcsMTkwIFpcIi8+PHBhdGggZD1cIk01MiwxNDAgTDY1LDE0MCBMNjMsMTkwIEw1NCwxOTAgWlwiLz4nLFxuICB9O1xuXG4gIGNvbnN0IGJhY2tQYXRocyA9IHtcbiAgICBuZWNrOiAgICAgICAnPHBhdGggZD1cIk00NCwyNCBMNTYsMjQgTDU1LDMxIEw0NSwzMSBaXCIvPicsXG4gICAgdHJhcHM6ICAgICAgJzxwYXRoIGQ9XCJNMzksMzMgTDUwLDI3IEw2MSwzMyBMNTksNDMgTDUwLDM5IEw0MSw0MyBaXCIvPicsXG4gICAgcmVhcl9kZWx0czogJzxwYXRoIGQ9XCJNMzEsMzMgQzI1LDMzIDE5LDM2IDE4LDQzIEwyNiw0MyBMMzEsMzcgWlwiLz48cGF0aCBkPVwiTTY5LDMzIEM3NSwzMyA4MSwzNiA4Miw0MyBMNzQsNDMgTDY5LDM3IFpcIi8+JyxcbiAgICBsYXRzOiAgICAgICAnPHBhdGggZD1cIk0zMyw0MyBMNDEsNDMgTDUwLDM5IEw1OSw0MyBMNjcsNDMgTDY1LDY2IEw1MCw3MCBMMzUsNjYgWlwiLz4nLFxuICAgIHRyaWNlcHM6ICAgICc8cGF0aCBkPVwiTTE4LDQzIEwyNiw0MyBMMjYsNjUgQzI1LDY3IDE5LDY3IDE4LDY1IFpcIi8+PHBhdGggZD1cIk03NCw0MyBMODIsNDMgTDgyLDY1IEM4MSw2NyA3NSw2NyA3NCw2NSBaXCIvPicsXG4gICAgZm9yZWFybXM6ICAgJzxwYXRoIGQ9XCJNMTgsNjggTDI2LDY4IEwyNCw5NiBMMTYsOTYgWlwiLz48cGF0aCBkPVwiTTc0LDY4IEw4Miw2OCBMODQsOTYgTDc2LDk2IFpcIi8+JyxcbiAgICBsb3dlcl9iYWNrOiAnPHBhdGggZD1cIk0zNSw2NiBMNTAsNzAgTDY1LDY2IEw2NSw4MiBMMzUsODIgWlwiLz4nLFxuICAgIGdsdXRlczogICAgICc8cGF0aCBkPVwiTTM1LDgyIEw0OSw4MiBMNDksOTQgQzQ3LDk4IDM3LDk4IDM1LDk0IFpcIi8+PHBhdGggZD1cIk01MSw4MiBMNjUsODIgTDY1LDk0IEM2Myw5OCA1Myw5OCA1MSw5NCBaXCIvPicsXG4gICAgaGFtc3RyaW5nczogJzxwYXRoIGQ9XCJNMzUsOTYgTDQ5LDk2IEw0OCwxMzYgTDM0LDEzNiBaXCIvPjxwYXRoIGQ9XCJNNTEsOTYgTDY1LDk2IEw2NiwxMzYgTDUyLDEzNiBaXCIvPicsXG4gICAgY2FsdmVzOiAgICAgJzxwYXRoIGQ9XCJNMzUsMTQwIEw0OCwxNDAgTDQ2LDE5MCBMMzcsMTkwIFpcIi8+PHBhdGggZD1cIk01MiwxNDAgTDY1LDE0MCBMNjMsMTkwIEw1NCwxOTAgWlwiLz4nLFxuICB9O1xuXG4gIGNvbnN0IHJlZ2lvbnMgPSB2aWV3ID09PSBcImZyb250XCIgPyBmcm9udFBhdGhzIDogYmFja1BhdGhzO1xuXG4gIC8vIEJ1aWxkIERPTSBTVkcgKG5vdCBpbm5lckhUTUwpIGZvciBjbGljayBldmVudHNcbiAgY29uc3QgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCAyMTBcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm90dy1oZWF0bWFwLXN2Z1wiKTtcblxuICAvLyBIZWFkXG4gIGNvbnN0IGhlYWRHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XG4gIGhlYWRHLmlubmVySFRNTCA9IGhlYWQ7XG4gIHN2Zy5hcHBlbmRDaGlsZChoZWFkRyk7XG5cbiAgLy8gTXVzY2xlIHJlZ2lvbnMgd2l0aCBjbGljayBoYW5kbGVyc1xuICBmb3IgKGNvbnN0IFtyZWdpb24sIHBhdGhEYXRhXSBvZiBPYmplY3QuZW50cmllcyhyZWdpb25zKSkge1xuICAgIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcbiAgICBnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgZmlsbChyZWdpb24pKTtcbiAgICBnLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBzdHJva2UocmVnaW9uKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIwLjZcIik7XG4gICAgZy5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgICBnLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC4xNXNcIjtcbiAgICBnLmlubmVySFRNTCA9IHBhdGhEYXRhO1xuXG4gICAgLy8gSG92ZXIgZWZmZWN0XG4gICAgZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7IGcuc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7IH0pO1xuICAgIGcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4geyBnLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjsgfSk7XG5cbiAgICAvLyBDbGljayBcdTIxOTIgc2hvdyBwcm9ncmVzcyBwb3B1cCBmb3IgdGhpcyBtdXNjbGVcbiAgICBnLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGlmIChvblJlZ2lvbkNsaWNrKSBvblJlZ2lvbkNsaWNrKHJlZ2lvbik7XG4gICAgfSk7XG5cbiAgICBzdmcuYXBwZW5kQ2hpbGQoZyk7XG4gIH1cblxuICAvLyBMYWJlbFxuICBjb25zdCBsYWJlbCA9IHZpZXcgPT09IFwiZnJvbnRcIiA/IFwiRlJPTlRcIiA6IFwiQkFDS1wiO1xuICBjb25zdCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwidGV4dFwiKTtcbiAgdHh0LnNldEF0dHJpYnV0ZShcInhcIiwgXCI1MFwiKTtcbiAgdHh0LnNldEF0dHJpYnV0ZShcInlcIiwgXCIyMDdcIik7XG4gIHR4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgdHh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjNGE0MDMwXCIpO1xuICB0eHQuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiOFwiKTtcbiAgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtZmFtaWx5XCIsIFwiR2VvcmdpYSxzZXJpZlwiKTtcbiAgdHh0LnNldEF0dHJpYnV0ZShcImxldHRlci1zcGFjaW5nXCIsIFwiMlwiKTtcbiAgdHh0LnRleHRDb250ZW50ID0gbGFiZWw7XG4gIHN2Zy5hcHBlbmRDaGlsZCh0eHQpO1xuXG4gIHJldHVybiBzdmc7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBNdXNjbGUgUHJvZ3Jlc3MgUG9wdXAgKHdoZW4gY2xpY2tpbmcgYSBtdXNjbGUgb24gdGhlIGhlYXRtYXApIFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiBzaG93TXVzY2xlUHJvZ3Jlc3NQb3B1cChyZWdpb25JZCwgbXVzY2xlTGV2ZWxzKSB7XG4gIGNvbnN0IGxhYmVsID0gUkVHSU9OX0xBQkVMU1tyZWdpb25JZF0gfHwgcmVnaW9uSWQ7XG4gIGNvbnN0IGxldmVsRGF0YSA9IG11c2NsZUxldmVsc1tyZWdpb25JZF07XG5cbiAgY3JlYXRlTW9kYWwobGFiZWwudG9VcHBlckNhc2UoKSwgKGNvbnRlbnQpID0+IHtcbiAgICAvLyBDdXJyZW50IHN0cmVuZ3RoIGxldmVsXG4gICAgaWYgKGxldmVsRGF0YSkge1xuICAgICAgY29uc3QgbGkgPSBTVFJFTkdUSF9MRVZFTFNbbGV2ZWxEYXRhLmxldmVsXTtcbiAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhZGdlXCI7XG4gICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQ6JHtsZXZlbERhdGEuY29sb3J9MjU7Ym9yZGVyOjFweCBzb2xpZCAke2xldmVsRGF0YS5jb2xvcn02MDtjb2xvcjoke2xldmVsRGF0YS5jb2xvcn07bWFyZ2luOjhweCBhdXRvO2Rpc3BsYXk6aW5saW5lLWZsZXg7YDtcbiAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gKGxpPy5pY29uIHx8IFwiXFx1MjVDQlwiKSArIFwiIFwiICsgbGV2ZWxEYXRhLmxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhZGdlKTtcblxuICAgICAgaWYgKGxldmVsRGF0YS5wcm9ncmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGIuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFyXCI7XG4gICAgICAgIHBiLnN0eWxlLm1hcmdpblRvcCA9IFwiMTJweFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBiKTtcbiAgICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpbGwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgICAgICBmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1pbigxMDAsIGxldmVsRGF0YS5wcm9ncmVzcyl9JTtiYWNrZ3JvdW5kOiR7bGV2ZWxEYXRhLmNvbG9yfTtgO1xuICAgICAgICBwYi5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5vRGF0YS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zdHlsZTppdGFsaWM7cGFkZGluZzoxNnB4O2ZvbnQtc2l6ZToxMnB4O2A7XG4gICAgICBub0RhdGEudGV4dENvbnRlbnQgPSBcIk5vIHdvcmtvdXQgZGF0YSBmb3IgdGhpcyBtdXNjbGUgeWV0XCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5vRGF0YSk7XG4gICAgfVxuXG4gICAgLy8gTW9udGhseSB3b3Jrb3V0IGZyZXF1ZW5jeSBjaGFydFxuICAgIGNvbnN0IGNoYXJ0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoYXJ0TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMHB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoyMHB4O2A7XG4gICAgY2hhcnRMYWJlbC50ZXh0Q29udGVudCA9IFwiTU9OVEhMWSBGUkVRVUVOQ1lcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNoYXJ0TGFiZWwpO1xuXG4gICAgLy8gRmluZCB3b3Jrb3V0cyB0aGF0IHRhcmdldGVkIHRoaXMgcmVnaW9uIGluIHRoZSBsYXN0IDMwIGRheXNcbiAgICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gICAgY29uc3QgcmV2ZXJzZU1hcCA9IHt9O1xuICAgIGZvciAoY29uc3QgW211c2NsZSwgcmVnaW9uc10gb2YgT2JqZWN0LmVudHJpZXMoTVVTQ0xFX1RPX1JFR0lPTikpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByZWdpb25zKSB7XG4gICAgICAgIGlmICghcmV2ZXJzZU1hcFtyXSkgcmV2ZXJzZU1hcFtyXSA9IFtdO1xuICAgICAgICByZXZlcnNlTWFwW3JdLnB1c2gobXVzY2xlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0TXVzY2xlcyA9IHJldmVyc2VNYXBbcmVnaW9uSWRdIHx8IFtdO1xuXG4gICAgLy8gQ291bnQgd29ya291dHMgcGVyIHdlZWsgKGxhc3QgNCB3ZWVrcylcbiAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICBjb25zdCB3ZWVrQ291bnRzID0gWzAsIDAsIDAsIDBdO1xuICAgIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlIHx8ICFBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgICBjb25zdCBmaWxlRGF0ZSA9IG1vbWVudChkYXRlTWF0Y2hbMV0sIFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIGNvbnN0IGRheXNBZ28gPSBub3cuZGlmZihmaWxlRGF0ZSwgXCJkYXlzXCIpO1xuICAgICAgaWYgKGRheXNBZ28gPCAwIHx8IGRheXNBZ28gPiAyOCkgY29udGludWU7XG4gICAgICBjb25zdCBoYXNNdXNjbGUgPSBmbS5leGVyY2lzZXMuc29tZShleCA9PiB0YXJnZXRNdXNjbGVzLmluY2x1ZGVzKGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCkpO1xuICAgICAgaWYgKGhhc011c2NsZSkge1xuICAgICAgICBjb25zdCB3ZWVrSWR4ID0gTWF0aC5mbG9vcihkYXlzQWdvIC8gNyk7XG4gICAgICAgIGlmICh3ZWVrSWR4IDwgNCkgd2Vla0NvdW50c1szIC0gd2Vla0lkeF0rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJNaW5pQmFyQ2hhcnQoY29udGVudCwgW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl0sIHdlZWtDb3VudHMpO1xuXG4gICAgLy8gVG9nZ2xlOiB5ZWFybHkgdmlld1xuICAgIGNvbnN0IHllYXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHllYXJCdG4udGV4dENvbnRlbnQgPSBcIlNIT1cgWUVBUkxZXCI7XG4gICAgeWVhckJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICB5ZWFyQnRuLnN0eWxlLmNzc1RleHQgKz0gXCJtYXJnaW4tdG9wOjEycHg7Zm9udC1zaXplOjEwcHg7cGFkZGluZzo4cHggMTZweDt3aWR0aDoxMDAlO1wiO1xuICAgIGxldCBzaG93aW5nWWVhcmx5ID0gZmFsc2U7XG4gICAgY29uc3QgeWVhckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh5ZWFyQnRuKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHllYXJDb250YWluZXIpO1xuXG4gICAgeWVhckJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgc2hvd2luZ1llYXJseSA9ICFzaG93aW5nWWVhcmx5O1xuICAgICAgeWVhckJ0bi50ZXh0Q29udGVudCA9IHNob3dpbmdZZWFybHkgPyBcIlNIT1cgTU9OVEhMWVwiIDogXCJTSE9XIFlFQVJMWVwiO1xuICAgICAgeWVhckNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgaWYgKHNob3dpbmdZZWFybHkpIHtcbiAgICAgICAgY29uc3QgbW9udGhDb3VudHMgPSBuZXcgQXJyYXkoMTIpLmZpbGwoMCk7XG4gICAgICAgIGNvbnN0IG1vbnRoTGFiZWxzID0gW1wiSlwiLFwiRlwiLFwiTVwiLFwiQVwiLFwiTVwiLFwiSlwiLFwiSlwiLFwiQVwiLFwiU1wiLFwiT1wiLFwiTlwiLFwiRFwiXTtcbiAgICAgICAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgICAgICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgICAgICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSB8fCAhQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSBjb250aW51ZTtcbiAgICAgICAgICBjb25zdCBkYXRlTWF0Y2ggPSB3RmlsZS5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKTtcbiAgICAgICAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgICAgICAgY29uc3QgZmlsZURhdGUgPSBtb21lbnQoZGF0ZU1hdGNoWzFdLCBcIllZWVktTU0tRERcIik7XG4gICAgICAgICAgaWYgKG5vdy5kaWZmKGZpbGVEYXRlLCBcIm1vbnRoc1wiKSA+IDExKSBjb250aW51ZTtcbiAgICAgICAgICBjb25zdCBoYXNNdXNjbGUgPSBmbS5leGVyY2lzZXMuc29tZShleCA9PiB0YXJnZXRNdXNjbGVzLmluY2x1ZGVzKGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCkpO1xuICAgICAgICAgIGlmIChoYXNNdXNjbGUpIG1vbnRoQ291bnRzW2ZpbGVEYXRlLm1vbnRoKCldKys7XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyTWluaUJhckNoYXJ0KHllYXJDb250YWluZXIsIG1vbnRoTGFiZWxzLCBtb250aENvdW50cyk7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBPdmVyYWxsIFByb2dyZXNzIFBvcHVwIChib3RoIG92ZXJhbGwgKyBwZXItbXVzY2xlKSBcdTI1MDBcdTI1MDBcblxuYXN5bmMgZnVuY3Rpb24gc2hvd092ZXJhbGxQcm9ncmVzc1BvcHVwKG11c2NsZUxldmVscykge1xuICBjcmVhdGVNb2RhbChcIlNUUkVOR1RIIFBST0dSRVNTXCIsIChjb250ZW50KSA9PiB7XG4gICAgLy8gMSkgT3ZlcmFsbCBzdHJlbmd0aCB0cmVuZCBcdTIwMTQgYXZlcmFnZSBzdHJlbmd0aCBsZXZlbCBhY3Jvc3MgYWxsIHJlZ2lvbnNcbiAgICBjb25zdCBvdmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEwcHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjhweDtgO1xuICAgIG92ZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiT1ZFUkFMTCBTVFJFTkdUSFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlckxhYmVsKTtcblxuICAgIC8vIFN1bW1hcml6ZSBjdXJyZW50IHN0cmVuZ3RoIGxldmVsc1xuICAgIGNvbnN0IGxldmVsT3JkZXIgPSBbXCJVbnRyYWluZWRcIiwgXCJCZWdpbm5lclwiLCBcIk5vdmljZVwiLCBcIkludGVybWVkaWF0ZVwiLCBcIkFkdmFuY2VkXCIsIFwiRWxpdGVcIl07XG4gICAgY29uc3QgcmVnaW9uTGV2ZWxzID0gT2JqZWN0LmVudHJpZXMobXVzY2xlTGV2ZWxzKTtcbiAgICBpZiAocmVnaW9uTGV2ZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgbm9EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5vRGF0YS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjEycHg7Zm9udC1zdHlsZTppdGFsaWM7cGFkZGluZzoxMnB4O2A7XG4gICAgICBub0RhdGEudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlIHNvbWUgd29ya291dHMgdG8gc2VlIHlvdXIgc3RyZW5ndGggcHJvZ3Jlc3NcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9EYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXZlcmFnZSBwcm9ncmVzcyB2YWx1ZVxuICAgICAgbGV0IHRvdGFsUHJvZ3Jlc3MgPSAwO1xuICAgICAgZm9yIChjb25zdCBbLCBkYXRhXSBvZiByZWdpb25MZXZlbHMpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gbGV2ZWxPcmRlci5pbmRleE9mKGRhdGEubGV2ZWwpO1xuICAgICAgICB0b3RhbFByb2dyZXNzICs9IChpZHggLyA1KSAqIDEwMCArIChkYXRhLnByb2dyZXNzIHx8IDApICogKDEvNSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhdmdQcm9ncmVzcyA9IHRvdGFsUHJvZ3Jlc3MgLyByZWdpb25MZXZlbHMubGVuZ3RoO1xuICAgICAgY29uc3QgYXZnTGV2ZWxJZHggPSBNYXRoLm1pbig1LCBNYXRoLmZsb29yKGF2Z1Byb2dyZXNzIC8gMjApKTtcbiAgICAgIGNvbnN0IGF2Z0xldmVsID0gbGV2ZWxPcmRlclthdmdMZXZlbElkeF07XG4gICAgICBjb25zdCBhdmdDb2xvciA9IFNUUkVOR1RIX0xFVkVMU1thdmdMZXZlbF0/LmNvbG9yIHx8IFwiIzZhNmE2YVwiO1xuXG4gICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiYWRnZS5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYWRnZVwiO1xuICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kOiR7YXZnQ29sb3J9MjU7Ym9yZGVyOjFweCBzb2xpZCAke2F2Z0NvbG9yfTYwO2NvbG9yOiR7YXZnQ29sb3J9O21hcmdpbjowIGF1dG8gMTJweDtkaXNwbGF5OmlubGluZS1mbGV4O2A7XG4gICAgICBiYWRnZS50ZXh0Q29udGVudCA9IGF2Z0xldmVsLnRvVXBwZXJDYXNlKCkgKyBcIiAoYXZnKVwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChiYWRnZSk7XG5cbiAgICAgIGNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBiLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhclwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYik7XG4gICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZpbGwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgICAgZmlsbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7TWF0aC5taW4oMTAwLCBhdmdQcm9ncmVzcyl9JTtiYWNrZ3JvdW5kOiR7YXZnQ29sb3J9O2A7XG4gICAgICBwYi5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICB9XG5cbiAgICAvLyBNb250aGx5IGNvbXBsZXRpb25zIGNoYXJ0IChhbGwgd29ya291dHMpXG4gICAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgIGNvbnN0IHdlZWtDb3VudHMgPSBbMCwgMCwgMCwgMF07XG4gICAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgICBpZiAoIWZtIHx8IGZtLldvcmtvdXQgIT09IHRydWUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgICBjb25zdCBkYXlzQWdvID0gbm93LmRpZmYobW9tZW50KGRhdGVNYXRjaFsxXSwgXCJZWVlZLU1NLUREXCIpLCBcImRheXNcIik7XG4gICAgICBpZiAoZGF5c0FnbyA8IDAgfHwgZGF5c0FnbyA+IDI4KSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHdlZWtJZHggPSBNYXRoLmZsb29yKGRheXNBZ28gLyA3KTtcbiAgICAgIGlmICh3ZWVrSWR4IDwgNCkgd2Vla0NvdW50c1szIC0gd2Vla0lkeF0rKztcbiAgICB9XG5cbiAgICBjb25zdCBjMUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjMUxhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTBweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi10b3A6MTZweDtgO1xuICAgIGMxTGFiZWwudGV4dENvbnRlbnQgPSBcIldPUktPVVRTIFBFUiBXRUVLXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjMUxhYmVsKTtcbiAgICByZW5kZXJNaW5pQmFyQ2hhcnQoY29udGVudCwgW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl0sIHdlZWtDb3VudHMpO1xuXG4gICAgLy8gMikgUGVyLW11c2NsZSBicmVha2Rvd25cbiAgICBjb25zdCBtdXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbXVzTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMHB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoyMHB4O2A7XG4gICAgbXVzTGFiZWwudGV4dENvbnRlbnQgPSBcIkJZIE1VU0NMRSBHUk9VUFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobXVzTGFiZWwpO1xuXG4gICAgZm9yIChjb25zdCBbcmVnaW9uLCBkYXRhXSBvZiByZWdpb25MZXZlbHMpIHtcbiAgICAgIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByb3cuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo4cHg7cGFkZGluZzo2cHggMDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMWExODE2O2A7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKHJvdyk7XG5cbiAgICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgbmFtZUVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDttaW4td2lkdGg6ODBweDtgO1xuICAgICAgbmFtZUVsLnRleHRDb250ZW50ID0gUkVHSU9OX0xBQkVMU1tyZWdpb25dIHx8IHJlZ2lvbjtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChuYW1lRWwpO1xuXG4gICAgICBjb25zdCBiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYmFyLnN0eWxlLmNzc1RleHQgPSBcImZsZXg6MTtoZWlnaHQ6NnB4O2JhY2tncm91bmQ6IzFhMWExYTtib3JkZXItcmFkaXVzOjNweDtvdmVyZmxvdzpoaWRkZW47XCI7XG4gICAgICByb3cuYXBwZW5kQ2hpbGQoYmFyKTtcbiAgICAgIGNvbnN0IGJhckZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYmFyRmlsbC5zdHlsZS5jc3NUZXh0ID0gYGhlaWdodDoxMDAlO3dpZHRoOiR7TWF0aC5taW4oMTAwLCAobGV2ZWxPcmRlci5pbmRleE9mKGRhdGEubGV2ZWwpIC8gNSkgKiAxMDAgKyAoZGF0YS5wcm9ncmVzcyB8fCAwKSAvIDUpfSU7YmFja2dyb3VuZDoke2RhdGEuY29sb3J9O2JvcmRlci1yYWRpdXM6M3B4O2A7XG4gICAgICBiYXIuYXBwZW5kQ2hpbGQoYmFyRmlsbCk7XG5cbiAgICAgIGNvbnN0IGxldmVsRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGxldmVsRWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke2RhdGEuY29sb3J9O2ZvbnQtc2l6ZToxMHB4O2ZvbnQtd2VpZ2h0OjYwMDttaW4td2lkdGg6NjBweDt0ZXh0LWFsaWduOnJpZ2h0O2A7XG4gICAgICBsZXZlbEVsLnRleHRDb250ZW50ID0gZGF0YS5sZXZlbDtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChsZXZlbEVsKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgTWluaSBiYXIgY2hhcnQgaGVscGVyICh1c2VkIGluIHBvcHVwcykgXHUyNTAwXHUyNTAwXG5cbmZ1bmN0aW9uIHJlbmRlck1pbmlCYXJDaGFydChwYXJlbnQsIGxhYmVscywgdmFsdWVzKSB7XG4gIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4KC4uLnZhbHVlcywgMSk7XG4gIGNvbnN0IGNoYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2hhcnQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2dhcDo2cHg7YWxpZ24taXRlbXM6ZmxleC1lbmQ7anVzdGlmeS1jb250ZW50OmNlbnRlcjtoZWlnaHQ6NjBweDttYXJnaW46OHB4IDA7XCI7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChjaGFydCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYWJlbHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O2ZsZXg6MTtcIjtcbiAgICBjaGFydC5hcHBlbmRDaGlsZChjb2wpO1xuXG4gICAgY29uc3QgYmFySCA9IE1hdGgubWF4KDQsICh2YWx1ZXNbaV0gLyBtYXhWYWwpICogNDgpO1xuICAgIGNvbnN0IGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFyLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MTAwJTttYXgtd2lkdGg6MjRweDtoZWlnaHQ6JHtiYXJIfXB4O2JhY2tncm91bmQ6JHt2YWx1ZXNbaV0gPiAwID8gVEhFTUUuY29sb3IgOiBcIiMxYTE4MTZcIn07Ym9yZGVyLXJhZGl1czoycHg7dHJhbnNpdGlvbjpoZWlnaHQgMC4zcztgO1xuICAgIGNvbC5hcHBlbmRDaGlsZChiYXIpO1xuXG4gICAgY29uc3QgbGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsYmwuc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6OHB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bGV0dGVyLXNwYWNpbmc6MXB4O2A7XG4gICAgbGJsLnRleHRDb250ZW50ID0gbGFiZWxzW2ldO1xuICAgIGNvbC5hcHBlbmRDaGlsZChsYmwpO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVOREVSOiBTVEFUUyBEQVNIQk9BUkRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJTdGF0c1NlY3Rpb24ocm9vdCkge1xuICAvLyBXZWVrbHkgY2FsZW5kYXJcbiAgY29uc3Qgd2Vla0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2Vla0xhYmVsLmNsYXNzTmFtZSA9IFwib3R3LXNlY3Rpb24tbGFiZWxcIjtcbiAgd2Vla0xhYmVsLnRleHRDb250ZW50ID0gXCJUSElTIFdFRUtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZCh3ZWVrTGFiZWwpO1xuXG4gIGNvbnN0IHdlZWtEYXRhID0gZ2V0V2Vla2x5Q2FsZW5kYXJEYXRhKCk7XG4gIGNvbnN0IHdlZWtHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2Vla0dyaWQuY2xhc3NOYW1lID0gXCJvdHctd2Vlay1ncmlkXCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQod2Vla0dyaWQpO1xuXG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtEYXRhKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2VsbC5jbGFzc05hbWUgPSBcIm90dy13ZWVrLWRheVwiICsgKGRheS5pc1RvZGF5ID8gXCIgdG9kYXlcIiA6IFwiXCIpICsgKGRheS5zdGF0dXMgPyBcIiBkb25lXCIgOiBcIlwiKTtcbiAgICBjb25zdCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxibC5jbGFzc05hbWUgPSBcIm90dy1kYXktbGFiZWxcIjtcbiAgICBsYmwudGV4dENvbnRlbnQgPSBkYXkubGFiZWw7XG4gICAgY2VsbC5hcHBlbmRDaGlsZChsYmwpO1xuICAgIGNvbnN0IG51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbnVtLmNsYXNzTmFtZSA9IFwib3R3LWRheS1udW1cIjtcbiAgICBudW0udGV4dENvbnRlbnQgPSBkYXkubnVtO1xuICAgIGNlbGwuYXBwZW5kQ2hpbGQobnVtKTtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpY29uLmNsYXNzTmFtZSA9IFwib3R3LWRheS1pY29uXCI7XG4gICAgaWYgKGRheS5zdGF0dXMgPT09IFwiZG9uZVwiKSB7XG4gICAgICBpZiAoZGF5LnR5cGUgPT09IFwiZGlzY2lwbGluZVwiKSB7IGljb24udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0RcXHVEQzhFXCI7IH1cbiAgICAgIGVsc2UgaWYgKGRheS50eXBlID09PSBcImZsb3dcIikgeyBpY29uLnRleHRDb250ZW50ID0gXCJcXHVEODNDXFx1REYwQVwiOyB9XG4gICAgICBlbHNlIHsgaWNvbi50ZXh0Q29udGVudCA9IFwiXFx1MjcxM1wiOyBpY29uLnN0eWxlLmNvbG9yID0gVEhFTUUuc3lzdGVtR3JlZW47IH1cbiAgICB9IGVsc2UgaWYgKGRheS5pc1RvZGF5KSB7XG4gICAgICBpY29uLnRleHRDb250ZW50ID0gXCJcXHUyMDIyXCI7IGljb24uc3R5bGUuY29sb3IgPSBUSEVNRS5jb2xvcjsgaWNvbi5zdHlsZS5hbmltYXRpb24gPSBcIm90dy1wdWxzZS1nbG93IDJzIGVhc2UtaW4tb3V0IGluZmluaXRlXCI7XG4gICAgfSBlbHNlIGlmIChkYXkuaXNQYXN0KSB7XG4gICAgICBpY29uLnRleHRDb250ZW50ID0gXCJcXHUyMDE0XCI7IGljb24uc3R5bGUuY29sb3IgPSBcIiMyYTI1MjBcIjtcbiAgICB9XG4gICAgY2VsbC5hcHBlbmRDaGlsZChpY29uKTtcbiAgICB3ZWVrR3JpZC5hcHBlbmRDaGlsZChjZWxsKTtcbiAgfVxuXG4gIC8vIFN0YXQgY291bnRlcnNcbiAgY29uc3Qgc3RhdHMgPSBnZXRNb250aGx5U3RhdHMoKTtcbiAgY29uc3Qgc3RhdFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN0YXRSb3cuY2xhc3NOYW1lID0gXCJvdHctc3RhdC1yb3dcIjtcbiAgc3RhdFJvdy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjEwcHhcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdGF0Um93KTtcblxuICBjb25zdCBzdGF0SXRlbXMgPSBbXG4gICAgeyB2YWx1ZTogc3RhdHMudGhpc1dlZWssIGxhYmVsOiBcIlRoaXMgd2Vla1wiIH0sXG4gICAgeyB2YWx1ZTogc3RhdHMudGhpc01vbnRoLCBsYWJlbDogXCJUaGlzIG1vbnRoXCIgfSxcbiAgICB7IHZhbHVlOiBzdGF0cy50b3RhbCwgbGFiZWw6IFwiQWxsIHRpbWVcIiB9LFxuICBdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2Ygc3RhdEl0ZW1zKSB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib3guY2xhc3NOYW1lID0gXCJvdHctc3RhdC1ib3hcIjtcbiAgICBjb25zdCB2YWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZhbC5jbGFzc05hbWUgPSBcIm90dy1zdGF0LXZhbHVlXCI7XG4gICAgdmFsLnRleHRDb250ZW50ID0gaXRlbS52YWx1ZTtcbiAgICBib3guYXBwZW5kQ2hpbGQodmFsKTtcbiAgICBjb25zdCBsYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxibC5jbGFzc05hbWUgPSBcIm90dy1zdGF0LWxhYmVsXCI7XG4gICAgbGJsLnRleHRDb250ZW50ID0gaXRlbS5sYWJlbDtcbiAgICBib3guYXBwZW5kQ2hpbGQobGJsKTtcbiAgICBzdGF0Um93LmFwcGVuZENoaWxkKGJveCk7XG4gIH1cblxuICAvLyBWb2x1bWUgcm93XG4gIGlmIChzdGF0cy50b3RhbFZvbHVtZSA+IDApIHtcbiAgICBjb25zdCB2b2xSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZvbFJvdy5jbGFzc05hbWUgPSBcIm90dy1zdGF0LXJvd1wiO1xuICAgIHZvbFJvdy5zdHlsZS5jc3NUZXh0ID0gXCJtYXJnaW4tdG9wOjZweDtncmlkLXRlbXBsYXRlLWNvbHVtbnM6MWZyIDFmcjtcIjtcbiAgICByb290LmFwcGVuZENoaWxkKHZvbFJvdyk7XG4gICAgY29uc3Qgdm9sQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2b2xCb3guY2xhc3NOYW1lID0gXCJvdHctc3RhdC1ib3hcIjtcbiAgICBjb25zdCB2b2xWYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHZvbFZhbC5jbGFzc05hbWUgPSBcIm90dy1zdGF0LXZhbHVlXCI7XG4gICAgdm9sVmFsLnN0eWxlLmZvbnRTaXplID0gXCIxOHB4XCI7XG4gICAgdm9sVmFsLnRleHRDb250ZW50ID0gc3RhdHMudG90YWxWb2x1bWUgPj0gMTAwMCA/IE1hdGgucm91bmQoc3RhdHMudG90YWxWb2x1bWUgLyAxMDAwKSArIFwia1wiIDogc3RhdHMudG90YWxWb2x1bWU7XG4gICAgdm9sQm94LmFwcGVuZENoaWxkKHZvbFZhbCk7XG4gICAgY29uc3Qgdm9sTGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2b2xMYmwuY2xhc3NOYW1lID0gXCJvdHctc3RhdC1sYWJlbFwiO1xuICAgIHZvbExibC50ZXh0Q29udGVudCA9IFwiVG90YWwga2cgbGlmdGVkXCI7XG4gICAgdm9sQm94LmFwcGVuZENoaWxkKHZvbExibCk7XG4gICAgdm9sUm93LmFwcGVuZENoaWxkKHZvbEJveCk7XG5cbiAgICBjb25zdCBzZXRzQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXRzQm94LmNsYXNzTmFtZSA9IFwib3R3LXN0YXQtYm94XCI7XG4gICAgY29uc3Qgc2V0c1ZhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2V0c1ZhbC5jbGFzc05hbWUgPSBcIm90dy1zdGF0LXZhbHVlXCI7XG4gICAgc2V0c1ZhbC5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xuICAgIHNldHNWYWwudGV4dENvbnRlbnQgPSBzdGF0cy50b3RhbFNldHM7XG4gICAgc2V0c0JveC5hcHBlbmRDaGlsZChzZXRzVmFsKTtcbiAgICBjb25zdCBzZXRzTGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzZXRzTGJsLmNsYXNzTmFtZSA9IFwib3R3LXN0YXQtbGFiZWxcIjtcbiAgICBzZXRzTGJsLnRleHRDb250ZW50ID0gXCJUb3RhbCBzZXRzXCI7XG4gICAgc2V0c0JveC5hcHBlbmRDaGlsZChzZXRzTGJsKTtcbiAgICB2b2xSb3cuYXBwZW5kQ2hpbGQoc2V0c0JveCk7XG4gIH1cblxuICAvLyBCb2R5IFN0cmVuZ3RoIEhlYXRtYXAgXHUyMDE0IEludGVyYWN0aXZlXG4gIGNvbnN0IGhtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBobUxhYmVsLmNsYXNzTmFtZSA9IFwib3R3LXNlY3Rpb24tbGFiZWxcIjtcbiAgaG1MYWJlbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjI0cHhcIjtcbiAgaG1MYWJlbC50ZXh0Q29udGVudCA9IFwiQk9EWSBTVFJFTkdUSCBNQVBcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChobUxhYmVsKTtcblxuICBjb25zdCBtdXNjbGVMZXZlbHMgPSBhd2FpdCBnZXRNdXNjbGVMZXZlbERhdGEoKTtcblxuICBjb25zdCBobVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBobVdyYXAuY2xhc3NOYW1lID0gXCJvdHctaGVhdG1hcC13cmFwXCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoaG1XcmFwKTtcblxuICAvLyBCdWlsZCBpbnRlcmFjdGl2ZSBTVkdzIHdpdGggY2xpY2stdG8tc2hvdy1wcm9ncmVzc1xuICBjb25zdCBmcm9udFN2ZyA9IGJ1aWxkSW50ZXJhY3RpdmVCb2R5U3ZnKFwiZnJvbnRcIiwgbXVzY2xlTGV2ZWxzLCAocmVnaW9uKSA9PiB7XG4gICAgc2hvd011c2NsZVByb2dyZXNzUG9wdXAocmVnaW9uLCBtdXNjbGVMZXZlbHMpO1xuICB9KTtcbiAgaG1XcmFwLmFwcGVuZENoaWxkKGZyb250U3ZnKTtcblxuICBjb25zdCBiYWNrU3ZnID0gYnVpbGRJbnRlcmFjdGl2ZUJvZHlTdmcoXCJiYWNrXCIsIG11c2NsZUxldmVscywgKHJlZ2lvbikgPT4ge1xuICAgIHNob3dNdXNjbGVQcm9ncmVzc1BvcHVwKHJlZ2lvbiwgbXVzY2xlTGV2ZWxzKTtcbiAgfSk7XG4gIGhtV3JhcC5hcHBlbmRDaGlsZChiYWNrU3ZnKTtcblxuICAvLyBMZWdlbmRcbiAgY29uc3QgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVnZW5kLmNsYXNzTmFtZSA9IFwib3R3LWhlYXRtYXAtbGVnZW5kXCI7XG4gIGNvbnN0IGxlZ2VuZEl0ZW1zID0gW1xuICAgIHsgbGFiZWw6IFwiVW50cmFpbmVkXCIsIGNvbG9yOiBcIiM2YTZhNmFcIiB9LFxuICAgIHsgbGFiZWw6IFwiQmVnaW5uZXJcIiwgY29sb3I6IFwiI2E4OTg2MFwiIH0sXG4gICAgeyBsYWJlbDogXCJOb3ZpY2VcIiwgY29sb3I6IFwiIzdhOWE3ZFwiIH0sXG4gICAgeyBsYWJlbDogXCJJbnRlcm1lZGlhdGVcIiwgY29sb3I6IFwiIzZhOGE5YVwiIH0sXG4gICAgeyBsYWJlbDogXCJBZHZhbmNlZFwiLCBjb2xvcjogXCIjOGE3YTlhXCIgfSxcbiAgICB7IGxhYmVsOiBcIkVsaXRlXCIsIGNvbG9yOiBcIiM5YTZhN2FcIiB9LFxuICBdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGVnZW5kSXRlbXMpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGkuY2xhc3NOYW1lID0gXCJvdHctaGVhdG1hcC1sZWdlbmQtaXRlbVwiO1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG90LmNsYXNzTmFtZSA9IFwib3R3LWhlYXRtYXAtbGVnZW5kLWRvdFwiO1xuICAgIGRvdC5zdHlsZS5iYWNrZ3JvdW5kID0gaXRlbS5jb2xvcjtcbiAgICBsaS5hcHBlbmRDaGlsZChkb3QpO1xuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHR4dC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWw7XG4gICAgbGkuYXBwZW5kQ2hpbGQodHh0KTtcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIHJvb3QuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAvLyBcIlByb2dyZXNzXCIgYnV0dG9uIGJlbG93IHRoZSBoZWF0bWFwXG4gIGNvbnN0IHByb2dyZXNzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJvZ3Jlc3NCdG4udGV4dENvbnRlbnQgPSBcIlBST0dSRVNTXCI7XG4gIHByb2dyZXNzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICBwcm9ncmVzc0J0bi5zdHlsZS5jc3NUZXh0ICs9IFwid2lkdGg6MTAwJTttYXJnaW4tdG9wOjEycHg7Zm9udC1zaXplOjExcHg7cGFkZGluZzoxMHB4O1wiO1xuICBwcm9ncmVzc0J0bi5vbmNsaWNrID0gKCkgPT4gc2hvd092ZXJhbGxQcm9ncmVzc1BvcHVwKG11c2NsZUxldmVscyk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NCdG4pO1xuXG4gIC8vIFJlY2VudCBzZXNzaW9uc1xuICBjb25zdCByZWNlbnQgPSBnZXRSZWNlbnRTZXNzaW9ucyg0KTtcbiAgaWYgKHJlY2VudC5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgcmVjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHJlY0xhYmVsLmNsYXNzTmFtZSA9IFwib3R3LXNlY3Rpb24tbGFiZWxcIjtcbiAgICByZWNMYWJlbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjI0cHhcIjtcbiAgICByZWNMYWJlbC50ZXh0Q29udGVudCA9IFwiUkVDRU5UIFNFU1NJT05TXCI7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChyZWNMYWJlbCk7XG4gICAgZm9yIChjb25zdCBzIG9mIHJlY2VudCkge1xuICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJvdy5jbGFzc05hbWUgPSBcIm90dy1yZWNlbnQtcm93XCI7XG4gICAgICBjb25zdCBkYXRlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGRhdGVFbC5jbGFzc05hbWUgPSBcIm90dy1yZWNlbnQtZGF0ZVwiO1xuICAgICAgZGF0ZUVsLnRleHRDb250ZW50ID0gbW9tZW50KHMuZGF0ZSwgXCJZWVlZLU1NLUREXCIpLmZvcm1hdChcIk1NTSBEXCIpO1xuICAgICAgcm93LmFwcGVuZENoaWxkKGRhdGVFbCk7XG4gICAgICBjb25zdCBtdXNjbGVzRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIG11c2NsZXNFbC5jbGFzc05hbWUgPSBcIm90dy1yZWNlbnQtbXVzY2xlc1wiO1xuICAgICAgbXVzY2xlc0VsLnRleHRDb250ZW50ID0gcy5tdXNjbGVzLmpvaW4oXCIsIFwiKSB8fCBcIlxcdTIwMTRcIjtcbiAgICAgIHJvdy5hcHBlbmRDaGlsZChtdXNjbGVzRWwpO1xuICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXJlY2VudC1iYWRnZVwiO1xuICAgICAgaWYgKHMudHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIpIHtcbiAgICAgICAgYmFkZ2UudGV4dENvbnRlbnQgPSBcIlxcdUQ4M0RcXHVEQzhFXCI7XG4gICAgICAgIGJhZGdlLnN0eWxlLmNzc1RleHQgKz0gXCJiYWNrZ3JvdW5kOnJnYmEoMTY4LDE1Miw5NiwwLjE1KTtjb2xvcjpcIiArIFRIRU1FLmNvbG9yRGlzY2lwbGluZSArIFwiO1wiO1xuICAgICAgfSBlbHNlIGlmIChzLnR5cGUgPT09IFwiZmxvd1wiKSB7XG4gICAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gXCJcXHVEODNDXFx1REYwQVwiO1xuICAgICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ICs9IFwiYmFja2dyb3VuZDpyZ2JhKDEwNiwxMzgsMTU0LDAuMTUpO2NvbG9yOlwiICsgVEhFTUUuY29sb3JGbG93ICsgXCI7XCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiYWRnZS50ZXh0Q29udGVudCA9IFwiXFx1MjcxM1wiO1xuICAgICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ICs9IFwiYmFja2dyb3VuZDpyZ2JhKDEyMiwxNTQsMTI1LDAuMTUpO2NvbG9yOlwiICsgVEhFTUUuc3lzdGVtR3JlZW4gKyBcIjtcIjtcbiAgICAgIH1cbiAgICAgIHJvdy5hcHBlbmRDaGlsZChiYWRnZSk7XG4gICAgICByb290LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgfVxuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVOREVSOiBNVVNDTEUgR1JPVVAgU0VMRUNUSU9OIChmaXJzdC10aW1lIGVudHJ5KVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlck11c2NsZVNlbGVjdGlvbihyb290KSB7XG4gIGNvbnN0IHNlbGVjdGVkTXVzY2xlcyA9IG5ldyBTZXQoKTtcbiAgY29uc3Qgc2VsZWN0ZWRTdWJncm91cHMgPSBuZXcgTWFwKCk7XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFwiU3RhcnQgTmV3IFdvcmtvdXRcIiBidXR0b24gSElHSCBhdCB0aGUgdG9wIFx1MjUwMFx1MjUwMFxuICBjb25zdCBzdGFydEJ0blRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0QnRuVG9wLnRleHRDb250ZW50ID0gXCJcXHVEODNDXFx1REZDQlxcdUZFMEYgU1RBUlQgTkVXIFdPUktPVVRcIjtcbiAgc3RhcnRCdG5Ub3AuY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICBzdGFydEJ0blRvcC5zdHlsZS5jc3NUZXh0ICs9IFwicGFkZGluZzoxNHB4IDI0cHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NzAwO3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbToxNnB4O1wiO1xuICBzdGFydEJ0blRvcC5vbmNsaWNrID0gKCkgPT4gc2Nyb2xsVG9NdXNjbGVTZWxlY3QoKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdGFydEJ0blRvcCk7XG5cbiAgLy8gU3RhdHMgZGFzaGJvYXJkXG4gIGF3YWl0IHJlbmRlclN0YXRzU2VjdGlvbihyb290KTtcblxuICAvLyBcdTI1MDBcdTI1MDAgTXVzY2xlIFNlbGVjdGlvbiBTZWN0aW9uIFx1MjUwMFx1MjUwMFxuICBjb25zdCBzZWxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxBbmNob3IuaWQgPSBcIm90dy1tdXNjbGUtc2VsZWN0XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc2VsQW5jaG9yKTtcblxuICBmdW5jdGlvbiBzY3JvbGxUb011c2NsZVNlbGVjdCgpIHtcbiAgICBzZWxBbmNob3Iuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgfVxuXG4gIGNvbnN0IHNlbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsTGFiZWwuY2xhc3NOYW1lID0gXCJvdHctc2VjdGlvbi1sYWJlbFwiO1xuICBzZWxMYWJlbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjI4cHhcIjtcbiAgc2VsTGFiZWwudGV4dENvbnRlbnQgPSBcIlNFTEVDVCBNVVNDTEUgR1JPVVBTXCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc2VsTGFiZWwpO1xuXG4gIGNvbnN0IHNlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxEZXNjLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjEycHg7YDtcbiAgc2VsRGVzYy50ZXh0Q29udGVudCA9IFwiVGFwIG11c2NsZXMgb24gdGhlIGZpZ3VyZSBvciB1c2UgdGhlIGJ1dHRvbnMgYmVsb3dcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzZWxEZXNjKTtcblxuICAvLyBJbnRlcmFjdGl2ZSBTVkcgbXVzY2xlIHNlbGVjdG9yIGZpZ3VyZVxuICBjb25zdCBzZWxlY3RvcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxlY3RvcldyYXAuY2xhc3NOYW1lID0gXCJvdHctaGVhdG1hcC13cmFwXCI7XG4gIHNlbGVjdG9yV3JhcC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjEycHhcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzZWxlY3RvcldyYXApO1xuXG4gIC8vIFJlZ2lvbiBcdTIxOTIgcGFyZW50IG11c2NsZSBncm91cCBtYXBwaW5nIGZvciB0aGUgc2VsZWN0b3JcbiAgY29uc3QgUkVHSU9OX1RPX01VU0NMRSA9IHtcbiAgICBuZWNrOiBcIk5lY2tcIiwgY2hlc3Q6IFwiQ2hlc3RcIiwgZnJvbnRfZGVsdHM6IFwiU2hvdWxkZXJzXCIsIHJlYXJfZGVsdHM6IFwiU2hvdWxkZXJzXCIsXG4gICAgYmljZXBzOiBcIkFybXNcIiwgdHJpY2VwczogXCJBcm1zXCIsIGZvcmVhcm1zOiBcIkFybXNcIiwgY29yZTogXCJDb3JlXCIsXG4gICAgcXVhZHM6IFwiTGVnc1wiLCBjYWx2ZXM6IFwiTGVnc1wiLCBoYW1zdHJpbmdzOiBcIkxlZ3NcIiwgZ2x1dGVzOiBcIkxlZ3NcIixcbiAgICB0cmFwczogXCJCYWNrXCIsIGxhdHM6IFwiQmFja1wiLCBsb3dlcl9iYWNrOiBcIkJhY2tcIixcbiAgfTtcblxuICAvLyBUcmFjayBzZWxlY3RlZCByZWdpb25zIHZpc3VhbGx5XG4gIGNvbnN0IHNlbGVjdGVkUmVnaW9uRWxzID0gbmV3IE1hcCgpOyAvLyByZWdpb24gXHUyMTkyIFtnIGVsZW1lbnRzXVxuXG4gIGZ1bmN0aW9uIGJ1aWxkU2VsZWN0b3JTdmcodmlldykge1xuICAgIGNvbnN0IHJlZ2lvbnMgPSB2aWV3ID09PSBcImZyb250XCIgPyB7XG4gICAgICBuZWNrOiAnPHBhdGggZD1cIk00NCwyNCBMNTYsMjQgTDU1LDMxIEw0NSwzMSBaXCIvPicsXG4gICAgICBmcm9udF9kZWx0czogJzxwYXRoIGQ9XCJNMzEsMzMgQzI1LDMzIDE5LDM2IDE4LDQzIEwyNiw0MyBMMzEsMzcgWlwiLz48cGF0aCBkPVwiTTY5LDMzIEM3NSwzMyA4MSwzNiA4Miw0MyBMNzQsNDMgTDY5LDM3IFpcIi8+JyxcbiAgICAgIGNoZXN0OiAnPHBhdGggZD1cIk0zMSwzNyBMNDksMzcgTDQ5LDU1IEM0OSw1NyA0Miw2MCAzMyw1OCBMMzEsNTYgWlwiLz48cGF0aCBkPVwiTTUxLDM3IEw2OSwzNyBMNjksNTYgTDY3LDU4IEM1OCw2MCA1MSw1NyA1MSw1NSBaXCIvPicsXG4gICAgICBiaWNlcHM6ICc8cGF0aCBkPVwiTTE4LDQzIEwyNiw0MyBMMjYsNjUgQzI1LDY3IDE5LDY3IDE4LDY1IFpcIi8+PHBhdGggZD1cIk03NCw0MyBMODIsNDMgTDgyLDY1IEM4MSw2NyA3NSw2NyA3NCw2NSBaXCIvPicsXG4gICAgICBmb3JlYXJtczogJzxwYXRoIGQ9XCJNMTgsNjggTDI2LDY4IEwyNCw5NiBMMTYsOTYgWlwiLz48cGF0aCBkPVwiTTc0LDY4IEw4Miw2OCBMODQsOTYgTDc2LDk2IFpcIi8+JyxcbiAgICAgIGNvcmU6ICc8cGF0aCBkPVwiTTMzLDU4IEw2Nyw1OCBMNjUsODIgTDM1LDgyIFpcIi8+JyxcbiAgICAgIHF1YWRzOiAnPHBhdGggZD1cIk0zNSw4NCBMNDksODQgTDQ4LDEzNiBMMzQsMTM2IFpcIi8+PHBhdGggZD1cIk01MSw4NCBMNjUsODQgTDY2LDEzNiBMNTIsMTM2IFpcIi8+JyxcbiAgICAgIGNhbHZlczogJzxwYXRoIGQ9XCJNMzUsMTQwIEw0OCwxNDAgTDQ2LDE5MCBMMzcsMTkwIFpcIi8+PHBhdGggZD1cIk01MiwxNDAgTDY1LDE0MCBMNjMsMTkwIEw1NCwxOTAgWlwiLz4nLFxuICAgIH0gOiB7XG4gICAgICBuZWNrOiAnPHBhdGggZD1cIk00NCwyNCBMNTYsMjQgTDU1LDMxIEw0NSwzMSBaXCIvPicsXG4gICAgICB0cmFwczogJzxwYXRoIGQ9XCJNMzksMzMgTDUwLDI3IEw2MSwzMyBMNTksNDMgTDUwLDM5IEw0MSw0MyBaXCIvPicsXG4gICAgICByZWFyX2RlbHRzOiAnPHBhdGggZD1cIk0zMSwzMyBDMjUsMzMgMTksMzYgMTgsNDMgTDI2LDQzIEwzMSwzNyBaXCIvPjxwYXRoIGQ9XCJNNjksMzMgQzc1LDMzIDgxLDM2IDgyLDQzIEw3NCw0MyBMNjksMzcgWlwiLz4nLFxuICAgICAgbGF0czogJzxwYXRoIGQ9XCJNMzMsNDMgTDQxLDQzIEw1MCwzOSBMNTksNDMgTDY3LDQzIEw2NSw2NiBMNTAsNzAgTDM1LDY2IFpcIi8+JyxcbiAgICAgIHRyaWNlcHM6ICc8cGF0aCBkPVwiTTE4LDQzIEwyNiw0MyBMMjYsNjUgQzI1LDY3IDE5LDY3IDE4LDY1IFpcIi8+PHBhdGggZD1cIk03NCw0MyBMODIsNDMgTDgyLDY1IEM4MSw2NyA3NSw2NyA3NCw2NSBaXCIvPicsXG4gICAgICBmb3JlYXJtczogJzxwYXRoIGQ9XCJNMTgsNjggTDI2LDY4IEwyNCw5NiBMMTYsOTYgWlwiLz48cGF0aCBkPVwiTTc0LDY4IEw4Miw2OCBMODQsOTYgTDc2LDk2IFpcIi8+JyxcbiAgICAgIGxvd2VyX2JhY2s6ICc8cGF0aCBkPVwiTTM1LDY2IEw1MCw3MCBMNjUsNjYgTDY1LDgyIEwzNSw4MiBaXCIvPicsXG4gICAgICBnbHV0ZXM6ICc8cGF0aCBkPVwiTTM1LDgyIEw0OSw4MiBMNDksOTQgQzQ3LDk4IDM3LDk4IDM1LDk0IFpcIi8+PHBhdGggZD1cIk01MSw4MiBMNjUsODIgTDY1LDk0IEM2Myw5OCA1Myw5OCA1MSw5NCBaXCIvPicsXG4gICAgICBoYW1zdHJpbmdzOiAnPHBhdGggZD1cIk0zNSw5NiBMNDksOTYgTDQ4LDEzNiBMMzQsMTM2IFpcIi8+PHBhdGggZD1cIk01MSw5NiBMNjUsOTYgTDY2LDEzNiBMNTIsMTM2IFpcIi8+JyxcbiAgICAgIGNhbHZlczogJzxwYXRoIGQ9XCJNMzUsMTQwIEw0OCwxNDAgTDQ2LDE5MCBMMzcsMTkwIFpcIi8+PHBhdGggZD1cIk01MiwxNDAgTDY1LDE0MCBMNjMsMTkwIEw1NCwxOTAgWlwiLz4nLFxuICAgIH07XG5cbiAgICBjb25zdCBucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3ZnXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCAyMTBcIik7XG4gICAgc3ZnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib3R3LWhlYXRtYXAtc3ZnXCIpO1xuXG4gICAgLy8gSGVhZFxuICAgIGNvbnN0IGhlYWRHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XG4gICAgaGVhZEcuaW5uZXJIVE1MID0gJzxlbGxpcHNlIGN4PVwiNTBcIiBjeT1cIjE0XCIgcng9XCIxMFwiIHJ5PVwiMTFcIiBmaWxsPVwiIzBjMGMwY1wiIHN0cm9rZT1cIiMyYTI1MjBcIiBzdHJva2Utd2lkdGg9XCIwLjhcIi8+JztcbiAgICBzdmcuYXBwZW5kQ2hpbGQoaGVhZEcpO1xuXG4gICAgZm9yIChjb25zdCBbcmVnaW9uLCBwYXRoRGF0YV0gb2YgT2JqZWN0LmVudHJpZXMocmVnaW9ucykpIHtcbiAgICAgIGNvbnN0IGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiZ1wiKTtcbiAgICAgIGcuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiMxYTE4MTZcIik7XG4gICAgICBnLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcIiMyYTI1MjBcIik7XG4gICAgICBnLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjAuNlwiKTtcbiAgICAgIGcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICBnLnN0eWxlLnRyYW5zaXRpb24gPSBcImZpbGwgMC4xNXNcIjtcbiAgICAgIGcuaW5uZXJIVE1MID0gcGF0aERhdGE7XG5cbiAgICAgIC8vIFRyYWNrIGZvciB2aXN1YWwgdXBkYXRlc1xuICAgICAgaWYgKCFzZWxlY3RlZFJlZ2lvbkVscy5oYXMocmVnaW9uKSkgc2VsZWN0ZWRSZWdpb25FbHMuc2V0KHJlZ2lvbiwgW10pO1xuICAgICAgc2VsZWN0ZWRSZWdpb25FbHMuZ2V0KHJlZ2lvbikucHVzaChnKTtcblxuICAgICAgZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgcGFyZW50TXVzY2xlID0gUkVHSU9OX1RPX01VU0NMRVtyZWdpb25dO1xuICAgICAgICBpZiAoIXBhcmVudE11c2NsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoc2VsZWN0ZWRNdXNjbGVzLmhhcyhwYXJlbnRNdXNjbGUpKSB7XG4gICAgICAgICAgc2VsZWN0ZWRNdXNjbGVzLmRlbGV0ZShwYXJlbnRNdXNjbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkTXVzY2xlcy5hZGQocGFyZW50TXVzY2xlKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVTZWxlY3RvclZpc3VhbHMoKTtcbiAgICAgICAgdXBkYXRlVG9nZ2xlQnV0dG9ucygpO1xuICAgICAgfSk7XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChnKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbCA9IHZpZXcgPT09IFwiZnJvbnRcIiA/IFwiRlJPTlRcIiA6IFwiQkFDS1wiO1xuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFwiNTBcIik7IHR4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiMjA3XCIpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiM0YTQwMzBcIik7IHR4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgXCI4XCIpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJmb250LWZhbWlseVwiLCBcIkdlb3JnaWEsc2VyaWZcIik7IHR4dC5zZXRBdHRyaWJ1dGUoXCJsZXR0ZXItc3BhY2luZ1wiLCBcIjJcIik7XG4gICAgdHh0LnRleHRDb250ZW50ID0gbGFiZWw7XG4gICAgc3ZnLmFwcGVuZENoaWxkKHR4dCk7XG5cbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgc2VsZWN0b3JXcmFwLmFwcGVuZENoaWxkKGJ1aWxkU2VsZWN0b3JTdmcoXCJmcm9udFwiKSk7XG4gIHNlbGVjdG9yV3JhcC5hcHBlbmRDaGlsZChidWlsZFNlbGVjdG9yU3ZnKFwiYmFja1wiKSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0b3JWaXN1YWxzKCkge1xuICAgIGZvciAoY29uc3QgW3JlZ2lvbiwgZ0xpc3RdIG9mIHNlbGVjdGVkUmVnaW9uRWxzKSB7XG4gICAgICBjb25zdCBwYXJlbnRNdXNjbGUgPSBSRUdJT05fVE9fTVVTQ0xFW3JlZ2lvbl07XG4gICAgICBjb25zdCBpc1NlbGVjdGVkID0gcGFyZW50TXVzY2xlICYmIHNlbGVjdGVkTXVzY2xlcy5oYXMocGFyZW50TXVzY2xlKTtcbiAgICAgIGZvciAoY29uc3QgZyBvZiBnTGlzdCkge1xuICAgICAgICBnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgaXNTZWxlY3RlZCA/IFRIRU1FLmNvbG9yICsgXCI4MFwiIDogXCIjMWExODE2XCIpO1xuICAgICAgICBnLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBpc1NlbGVjdGVkID8gVEhFTUUuY29sb3IgKyBcIjYwXCIgOiBcIiMyYTI1MjBcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTXVzY2xlIGdyb3VwIHRvZ2dsZSBidXR0b25zIChzdGlsbCBhdmFpbGFibGUgYXMgc2Vjb25kYXJ5IHNlbGVjdGlvbiBtZXRob2QpXG4gIGNvbnN0IG11c2NsZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtdXNjbGVHcmlkLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6MTBweDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi1ib3R0b206OHB4O1wiO1xuICByb290LmFwcGVuZENoaWxkKG11c2NsZUdyaWQpO1xuXG4gIGNvbnN0IHN1Ymdyb3VwQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ymdyb3VwQXJlYS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo4cHg7d2lkdGg6MTAwJTtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdWJncm91cEFyZWEpO1xuXG4gIGNvbnN0IHRvZ2dsZUJ1dHRvbnMgPSBuZXcgTWFwKCk7XG5cbiAgT2JqZWN0LmVudHJpZXMoTVVTQ0xFX0dST1VQUykuZm9yRWFjaCgoW25hbWUsIGNvbmZpZ10pID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJ0bi5jbGFzc05hbWUgPSBcIm90dy1tdXNjbGUtdG9nZ2xlXCI7XG4gICAgYnRuLnRleHRDb250ZW50ID0gYCR7Y29uZmlnLmljb259ICR7bmFtZX1gO1xuICAgIG11c2NsZUdyaWQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgICB0b2dnbGVCdXR0b25zLnNldChuYW1lLCBidG4pO1xuXG4gICAgbGV0IHN1Ymdyb3VwQ29udGFpbmVyID0gbnVsbDtcbiAgICBpZiAoY29uZmlnLnN1Ymdyb3Vwcykge1xuICAgICAgc3ViZ3JvdXBDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3ViZ3JvdXBDb250YWluZXIuY2xhc3NOYW1lID0gXCJvdHctc3ViZ3JvdXAtY29udGFpbmVyXCI7XG4gICAgICBzdWJncm91cENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICs9IGBkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjhweDtiYWNrZ3JvdW5kOiMwYzBjMGM7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtib3JkZXItcmFkaXVzOjRweDtgO1xuICAgICAgY29uc3Qgc3ViTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgc3ViTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoxMDAlO2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7bWFyZ2luLWJvdHRvbTo0cHg7YDtcbiAgICAgIHN1YkxhYmVsLnRleHRDb250ZW50ID0gbmFtZSArIFwiIHN1Ymdyb3VwczpcIjtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkxhYmVsKTtcbiAgICAgIHNlbGVjdGVkU3ViZ3JvdXBzLnNldChuYW1lLCBuZXcgU2V0KCkpO1xuXG4gICAgICBjb25maWcuc3ViZ3JvdXBzLmZvckVhY2goc3ViID0+IHtcbiAgICAgICAgY29uc3Qgc3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3ViQnRuLmNsYXNzTmFtZSA9IFwib3R3LXN1Yi10b2dnbGVcIjtcbiAgICAgICAgc3ViQnRuLnRleHRDb250ZW50ID0gc3ViO1xuICAgICAgICBzdWJCdG4ub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICBjb25zdCBzdWJzID0gc2VsZWN0ZWRTdWJncm91cHMuZ2V0KG5hbWUpO1xuICAgICAgICAgIGlmIChzdWJzLmhhcyhzdWIpKSB7IHN1YnMuZGVsZXRlKHN1Yik7IHN1YkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpOyB9XG4gICAgICAgICAgZWxzZSB7IHN1YnMuYWRkKHN1Yik7IHN1YkJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpOyB9XG4gICAgICAgIH07XG4gICAgICAgIHN1Ymdyb3VwQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1YkJ0bik7XG4gICAgICB9KTtcbiAgICAgIHN1Ymdyb3VwQXJlYS5hcHBlbmRDaGlsZChzdWJncm91cENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICBpZiAoc2VsZWN0ZWRNdXNjbGVzLmhhcyhuYW1lKSkge1xuICAgICAgICBzZWxlY3RlZE11c2NsZXMuZGVsZXRlKG5hbWUpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKHN1Ymdyb3VwQ29udGFpbmVyKSBzdWJncm91cENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiZXhwYW5kZWRcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxlY3RlZE11c2NsZXMuYWRkKG5hbWUpO1xuICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgaWYgKHN1Ymdyb3VwQ29udGFpbmVyKSBzdWJncm91cENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kZWRcIik7XG4gICAgICB9XG4gICAgICB1cGRhdGVTZWxlY3RvclZpc3VhbHMoKTtcbiAgICB9O1xuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVUb2dnbGVCdXR0b25zKCkge1xuICAgIGZvciAoY29uc3QgW25hbWUsIGJ0bl0gb2YgdG9nZ2xlQnV0dG9ucykge1xuICAgICAgaWYgKHNlbGVjdGVkTXVzY2xlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdGFydCBidXR0b24gKGJvdHRvbSlcbiAgY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdGFydEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1RDgzQ1xcdURGQ0JcXHVGRTBGIFNUQVJUIFdPUktPVVRcIjtcbiAgc3RhcnRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICBzdGFydEJ0bi5zdHlsZS5jc3NUZXh0ICs9IFwicGFkZGluZzoxNnB4IDI0cHg7Zm9udC1zaXplOjE1cHg7Zm9udC13ZWlnaHQ6NzAwO21hcmdpbi10b3A6MTZweDtcIjtcbiAgc3RhcnRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRNdXNjbGVzLnNpemUgPT09IDApIHsgbm90aWNlKFwiUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgbXVzY2xlIGdyb3VwXCIpOyByZXR1cm47IH1cblxuICAgIC8vIEJ1aWxkIGZpbmFsIG11c2NsZSBsaXN0OiB1c2Ugc3ViZ3JvdXBzIGlmIHNlbGVjdGVkLCBvdGhlcndpc2UgdGhlIHBhcmVudCBncm91cFxuICAgIGNvbnN0IG11c2NsZUdyb3Vwc0FycmF5ID0gW107XG4gICAgc2VsZWN0ZWRNdXNjbGVzLmZvckVhY2gobXVzY2xlID0+IHtcbiAgICAgIGNvbnN0IHN1YnMgPSBzZWxlY3RlZFN1Ymdyb3Vwcy5nZXQobXVzY2xlKTtcbiAgICAgIGlmIChzdWJzICYmIHN1YnMuc2l6ZSA+IDApIHtcbiAgICAgICAgc3Vicy5mb3JFYWNoKHN1YiA9PiBtdXNjbGVHcm91cHNBcnJheS5wdXNoKHN1YikpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbXVzY2xlR3JvdXBzQXJyYXkucHVzaChtdXNjbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBwcmV2aW91cyBleGVyY2lzZXMgZm9yIHRoZXNlIG11c2NsZSBncm91cHNcbiAgICBjb25zdCBsb2FkZWRFeGVyY2lzZXMgPSBsb2FkUHJldmlvdXNFeGVyY2lzZXMobXVzY2xlR3JvdXBzQXJyYXkpO1xuXG4gICAgLy8gU2F2ZSB0byBmcm9udG1hdHRlciBhbmQgdXBkYXRlIGxvY2FsIHN0YXRlXG4gICAgbXVzY2xlR3JvdXBzID0gbXVzY2xlR3JvdXBzQXJyYXk7XG4gICAgZXhlcmNpc2VzID0gbG9hZGVkRXhlcmNpc2VzO1xuICAgIGN1cnJlbnRNdXNjbGVJbmRleCA9IDA7XG5cbiAgICBhd2FpdCBzZXRNdWx0aXBsZURhdGEoe1xuICAgICAgbXVzY2xlR3JvdXBzOiBtdXNjbGVHcm91cHMsXG4gICAgICBleGVyY2lzZXM6IGV4ZXJjaXNlcyxcbiAgICAgIGN1cnJlbnRNdXNjbGVJbmRleDogMCxcbiAgICAgIFdvcmtvdXQ6IGZhbHNlLFxuICAgICAgXCJXb3Jrb3V0LVR5cGVcIjogXCJcIixcbiAgICAgIFRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KCksXG4gICAgfSk7XG5cbiAgICAvLyBSZS1yZW5kZXIgXHUyMDE0IG5vdyB3ZSdsbCBlbnRlciB3b3Jrb3V0IHRyYWNraW5nIG1vZGVcbiAgICByZW5kZXIoKTtcbiAgfTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdGFydEJ0bik7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTUFJTiBSRU5ERVJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm9vdC5jbGFzc05hbWUgPSBcIm90dy1jb250YWluZXJcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3QpO1xuXG4gIC8vIElmIHdvcmtvdXQgaXMgYWxyZWFkeSBjb21wbGV0ZWQsIHNob3cgc3VtbWFyeVxuICBpZiAoaXNDb21wbGV0ZWQgJiYgZ2V0RGF0YShcIldvcmtvdXQtVHlwZVwiKSkge1xuICAgIGNvbnN0IHdUeXBlID0gZ2V0RGF0YShcIldvcmtvdXQtVHlwZVwiKTtcbiAgICBjb25zdCBzdW1tYXJ5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VtbWFyeUNhcmQuY2xhc3NOYW1lID0gXCJvdHctY2FyZCBvdHctY2FyZC1icmVhdGhlXCI7XG4gICAgc3VtbWFyeUNhcmQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBzdW1tYXJ5Q2FyZC5zdHlsZS5wYWRkaW5nID0gXCIzMnB4XCI7XG4gICAgYWRkQ29ybmVycyhzdW1tYXJ5Q2FyZCwgVEhFTUUuc3lzdGVtR3JlZW4pO1xuICAgIHN1bW1hcnlDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6MzJweDttYXJnaW4tYm90dG9tOjEycHg7XCI+JHt3VHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIgPyBcIlxcdUQ4M0RcXHVEQzhFXCIgOiBcIlxcdUQ4M0NcXHVERjBBXCJ9PC9kaXY+XG4gICAgICA8aDIgc3R5bGU9XCJtYXJnaW46MDtjb2xvcjoke1RIRU1FLnN5c3RlbUdyZWVufTtmb250LXNpemU6MTZweDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1wiPldPUktPVVQgQ09NUExFVEU8L2gyPlxuICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEzcHg7bWFyZ2luLXRvcDo4cHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+JHt3VHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIgPyBcIkRpc2NpcGxpbmUgV2luXCIgOiBcIkZsb3cgU3RhdGVcIn08L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O21hcmdpbi10b3A6MTZweDtcIj4ke21vbWVudChnZXREYXRhKFwiVGltZXN0YW1wXCIpKS5mb3JtYXQoXCJNTU0gRCwgWVlZWSBcXHUyMDE0IGg6bW0gQVwiKX08L2Rpdj5cbiAgICBgO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoc3VtbWFyeUNhcmQpO1xuXG4gICAgLy8gU2hvdyBleGVyY2lzZXMgc3VtbWFyeVxuICAgIGlmIChleGVyY2lzZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZXhTdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGV4U3VtbWFyeS5jbGFzc05hbWUgPSBcIm90dy1jYXJkXCI7XG4gICAgICBhZGRDb3JuZXJzKGV4U3VtbWFyeSwgVEhFTUUuY29sb3IpO1xuICAgICAgY29uc3QgZXhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBleFRpdGxlLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MTJweDtgO1xuICAgICAgZXhUaXRsZS50ZXh0Q29udGVudCA9IFwiU0VTU0lPTiBTVU1NQVJZXCI7XG4gICAgICBleFN1bW1hcnkuYXBwZW5kQ2hpbGQoZXhUaXRsZSk7XG4gICAgICBmb3IgKGNvbnN0IGV4IG9mIGV4ZXJjaXNlcykge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRTZXRzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+ICFzLmlzV2FybXVwICYmIHMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRvdGFsU2V0cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiAhcy5pc1dhcm11cCkubGVuZ3RoO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzo4cHggMDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICAgICAgICByb3cuaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC13ZWlnaHQ6NjAwO1wiPiR7ZXgubmFtZX08L3NwYW4+PHNwYW4gc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O1wiPiR7Y29tcGxldGVkU2V0c30vJHt0b3RhbFNldHN9IHNldHM8L3NwYW4+YDtcbiAgICAgICAgZXhTdW1tYXJ5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9XG4gICAgICByb290LmFwcGVuZENoaWxkKGV4U3VtbWFyeSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIE5vIG11c2NsZSBncm91cHMgc2VsZWN0ZWQgeWV0IFx1MjAxNCBzaG93IHNlbGVjdGlvbiBzY3JlZW5cbiAgaWYgKG11c2NsZUdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICBhd2FpdCByZW5kZXJNdXNjbGVTZWxlY3Rpb24ocm9vdCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIEFjdGl2ZSBXb3Jrb3V0IFVJIFx1MjUwMFx1MjUwMFxuICBjb25zdCBjdXJyZW50TXVzY2xlID0gbXVzY2xlR3JvdXBzW2N1cnJlbnRNdXNjbGVJbmRleF0gfHwgbXVzY2xlR3JvdXBzWzBdO1xuICBjb25zdCBtdXNjbGVFeGVyY2lzZXMgPSBleGVyY2lzZXMuZmlsdGVyKChlKSA9PiBlLm11c2NsZSA9PT0gY3VycmVudE11c2NsZSB8fCBlLm11c2NsZUdyb3VwID09PSBjdXJyZW50TXVzY2xlKTtcblxuICAvLyBIZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwib3R3LWNhcmQgb3R3LWNhcmQtYnJlYXRoZSBvdHctaGVhZGVyXCI7XG4gIGFkZENvcm5lcnMoaGVhZGVyLCBUSEVNRS5jb2xvcik7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc05hbWUgPSBcIm90dy10aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGN1cnJlbnRNdXNjbGUudG9VcHBlckNhc2UoKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29uc3QgcHJvZ3Jlc3NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHByb2dyZXNzTGFiZWwuY2xhc3NOYW1lID0gXCJvdHctcHJvZ3Jlc3MtbGFiZWxcIjtcbiAgcHJvZ3Jlc3NMYWJlbC50ZXh0Q29udGVudCA9IChjdXJyZW50TXVzY2xlSW5kZXggKyAxKSArIFwiIC8gXCIgKyBtdXNjbGVHcm91cHMubGVuZ3RoO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NMYWJlbCk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAvLyBFeGVyY2lzZXNcbiAgY29uc3QgZXhDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBleENvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxNnB4O1wiO1xuICByb290LmFwcGVuZENoaWxkKGV4Q29udGFpbmVyKTtcblxuICBpZiAobXVzY2xlRXhlcmNpc2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlbXB0eS5zdHlsZS5jc3NUZXh0ID0gYHRleHQtYWxpZ246Y2VudGVyO3BhZGRpbmc6NDBweCAyMHB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IGRhc2hlZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICAgIGVtcHR5LmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bWFyZ2luOjA7XCI+Tm8gZXhlcmNpc2VzIGZvciAke2N1cnJlbnRNdXNjbGV9IHlldC48L3A+YDtcbiAgICBleENvbnRhaW5lci5hcHBlbmRDaGlsZChlbXB0eSk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChjb25zdCBleCBvZiBtdXNjbGVFeGVyY2lzZXMpIHtcbiAgICAgIGF3YWl0IHJlbmRlckV4ZXJjaXNlKGV4Q29udGFpbmVyLCBleCk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIGV4ZXJjaXNlIGJ1dHRvblxuICBjb25zdCBhZGRFeEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEV4QnRuLnRleHRDb250ZW50ID0gXCIrIEFERCBFWEVSQ0lTRVwiO1xuICBhZGRFeEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1kYXNoZWRcIjtcbiAgYWRkRXhCdG4uc3R5bGUubWFyZ2luVG9wID0gXCIxNnB4XCI7XG4gIGFkZEV4QnRuLm9uY2xpY2sgPSAoKSA9PiBvcGVuQWRkRXhlcmNpc2VNb2RhbChjdXJyZW50TXVzY2xlKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChhZGRFeEJ0bik7XG5cbiAgLy8gTmF2aWdhdGlvblxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXYuY2xhc3NOYW1lID0gXCJvdHctbmF2LXJvd1wiO1xuICByb290LmFwcGVuZENoaWxkKG5hdik7XG5cbiAgaWYgKGN1cnJlbnRNdXNjbGVJbmRleCA+IDApIHtcbiAgICBjb25zdCBwcmV2QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBwcmV2QnRuLnRleHRDb250ZW50ID0gXCJcXHUyMTkwIFBSRVZJT1VTXCI7XG4gICAgcHJldkJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICBwcmV2QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGN1cnJlbnRNdXNjbGVJbmRleC0tOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH07XG4gICAgbmF2LmFwcGVuZENoaWxkKHByZXZCdG4pO1xuICB9XG5cbiAgaWYgKGN1cnJlbnRNdXNjbGVJbmRleCA8IG11c2NsZUdyb3Vwcy5sZW5ndGggLSAxKSB7XG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgbmV4dEJ0bi50ZXh0Q29udGVudCA9IFwiTkVYVCBNVVNDTEUgXFx1MjE5MlwiO1xuICAgIG5leHRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICAgIG5leHRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY3VycmVudE11c2NsZUluZGV4Kys7IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobmV4dEJ0bik7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgZmluaXNoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmaW5pc2hCdG4udGV4dENvbnRlbnQgPSBcIlxcdTI3MTMgRklOSVNIIFdPUktPVVRcIjtcbiAgICBmaW5pc2hCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tZmluaXNoXCI7XG4gICAgZmluaXNoQnRuLm9uY2xpY2sgPSAoKSA9PiBvcGVuRmluaXNoTW9kYWwoKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQoZmluaXNoQnRuKTtcbiAgfVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgQm9vdCBcdTI1MDBcdTI1MDBcbnJldHVybiByZW5kZXIoKTtcbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEJ1aWx0LWluIFRlbXBsYXRlIFJlZ2lzdHJ5XG4vLyBNYXBzIHRlbXBsYXRlIElEcyB0byB0aGVpciBzb3VyY2UgY29kZSAoYnVuZGxlZCBhdCBidWlsZCB0aW1lKS5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgd29ya291dFNvdXJjZSBmcm9tIFwiLi93b3Jrb3V0LnRwbFwiO1xuXG4vKipcbiAqIEJ1aWx0LWluIHRlbXBsYXRlcyBidW5kbGVkIGluc2lkZSB0aGUgcGx1Z2luLlxuICogS2V5cyBhcmUgdGVtcGxhdGUgSURzIHJlZmVyZW5jZWQgaW4gQWN0aXZpdHlDb25maWcud29ya3NwYWNlVGVtcGxhdGUuXG4gKiBWYWx1ZXMgYXJlIHRoZSByYXcgSlMgc291cmNlIGV4ZWN1dGVkIHZpYSBuZXcgRnVuY3Rpb24oXCJjdHhcIiwgc291cmNlKS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJVSUxUSU5fVEVNUExBVEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB3b3Jrb3V0OiB3b3Jrb3V0U291cmNlLFxufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLElBQUFBLG1CQUE4RDs7O0FDWXZELElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sc0JBQXNCO0FBSTVCLElBQU0sU0FBMkI7QUFBQSxFQUN0QyxFQUFFLE1BQU0sR0FBRyxNQUFNLG9CQUFvQixNQUFNLGdCQUFnQixhQUFhLHNFQUFzRSxNQUFNLGlHQUFpRyxXQUFXLHdCQUFxQjtBQUFBLEVBQ3JSLEVBQUUsTUFBTSxHQUFHLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CLGFBQWEsaUVBQWlFLE1BQU0sb0ZBQW9GLFdBQVcsd0JBQXFCO0FBQUEsRUFDblEsRUFBRSxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsTUFBTSxjQUFjLGFBQWEsK0RBQStELE1BQU0seUVBQXlFLFdBQVcsd0JBQXFCO0FBQUEsRUFDblAsRUFBRSxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsTUFBTSxXQUFXLGFBQWEscUVBQXFFLE1BQU0sZ0VBQWdFLFdBQVcsd0JBQXFCO0FBQUEsRUFDN08sRUFBRSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsTUFBTSxXQUFXLGFBQWEsaUVBQWlFLE1BQU0saUVBQWlFLFdBQVcsd0JBQXFCO0FBQUEsRUFDeE8sRUFBRSxNQUFNLEdBQUcsTUFBTSxlQUFlLE1BQU0sV0FBVyxhQUFhLG1FQUFtRSxNQUFNLCtFQUErRSxXQUFXLHdCQUFxQjtBQUFBLEVBQ3RQLEVBQUUsTUFBTSxHQUFHLE1BQU0sV0FBVyxNQUFNLFdBQVcsYUFBYSxzRUFBc0UsTUFBTSxnRkFBMkUsV0FBVyx3QkFBcUI7QUFBQSxFQUNqUCxFQUFFLE1BQU0sR0FBRyxNQUFNLFlBQVksTUFBTSxT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QUEsRUFDaEcsRUFBRSxJQUFJLFNBQWMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDMUQsRUFBRSxJQUFJLFFBQWMsTUFBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDMUQsRUFBRSxJQUFJLFFBQWMsTUFBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUE7QUFBQSxFQUUxRCxFQUFFLElBQUksVUFBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksV0FBYyxNQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksWUFBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUksTUFBTSxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUE7QUFBQSxFQUVqRyxFQUFFLElBQUksT0FBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksWUFBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQSxFQUMxRCxFQUFFLElBQUksVUFBYyxNQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEVBQUU7QUFBQTtBQUFBLEVBRTFELEVBQUUsSUFBSSxTQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxj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QUFDaEUsV0FBRyxlQUFlLEdBQUc7QUFDckIsZUFBTyxHQUFHO0FBQ1Ysa0JBQVU7QUFBQSxNQUNaO0FBRUEsYUFBTyxHQUFHO0FBQ1YsYUFBTyxHQUFHO0FBQUEsSUFDWjtBQUdBLFFBQUksSUFBSSxvQkFBb0IsTUFBTSxRQUFRLElBQUksZ0JBQWdCLEtBQUssSUFBSSxpQkFBaUIsU0FBUyxHQUFHO0FBQ2xHLGlCQUFXLFNBQVMsSUFBSSxrQkFBa0I7QUFDeEMsWUFBSSxDQUFDLE1BQU0sV0FBVyxDQUFDLE1BQU07QUFBYztBQUMzQyxjQUFNLFdBQVcsS0FBSyxTQUFTLFdBQVcsS0FBSyxDQUFDLE1BQVcsRUFBRSxPQUFPLE1BQU0sWUFBWTtBQUN0RixZQUFJLFlBQVksQ0FBQyxTQUFTLG1CQUFtQjtBQUMzQyxtQkFBUyxvQkFBb0IsTUFBTTtBQUNuQyxvQkFBVTtBQUFBLFFBQ1o7QUFBQSxNQUNGO0FBQ0EsYUFBTyxJQUFJO0FBQ1gsZ0JBQVU7QUFBQSxJQUNaO0FBRUEsUUFBSSxTQUFTO0FBQ1gsWUFBTSxLQUFLLGFBQWE7QUFBQSxJQUMxQjtBQUFBLEVBQ0Y7QUFDRjtBQUdBLFNBQVNBLE9BQU0sSUFBMkI7QUFDeEMsU0FBTyxJQUFJLFFBQVEsQ0FBQyxZQUFZLFdBQVcsU0FBUyxFQUFFLENBQUM7QUFDekQ7IiwKICAibmFtZXMiOiBbImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAibmVnbGVjdGVkIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgInNsZWVwIl0KfQo=
