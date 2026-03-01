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
var workout_default = '// ============================================================\n// Olen Template \u2014 Workout Tracker v6.0\n// Renders inside the Olen workspace for the "workout" activity.\n// All UI lives here \u2014 daily notes only store YAML frontmatter.\n// Data is read/written via ctx.getData / ctx.setData.\n// Personal stats now read from plugin settings (personalStats).\n// ============================================================\n\nconst { container, getData, setData, setMultipleData, app, moment, notice,\n        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;\n\n// ============================================================\n// SETTINGS \u2014 Edit these to match your vault structure\n// ============================================================\nconst SETTINGS = {\n  // Where daily workout notes are stored\n  workoutFolder: "Personal Life/01 Workout",\n  // Folder containing exercise standard .md files (e.g. "Bench Press.md")\n  exerciseDbFolder: "Home/Activities/Exercises database",\n};\n\n// Read personal stats from plugin settings (set in Olen Settings > Personal Stats)\nconst _pluginStats = ctx.plugin?.settings?.personalStats || {};\nconst PERSONAL = {\n  weight: _pluginStats.currentWeight || 61,\n  height: _pluginStats.height || 175,\n  birthdate: _pluginStats.birthdate || "2005-11-29",\n  gender: _pluginStats.gender || "male",\n};\n\n// Muscle groups available for selection, with optional subgroups\nconst MUSCLE_GROUPS = {\n  "Neck":      { subgroups: null, icon: "\\uD83E\\uDDB4" },\n  "Back":      { subgroups: ["Lats", "Traps", "Rhomboids", "Lower Back", "Rear Delts"], icon: "\\uD83D\\uDD19" },\n  "Chest":     { subgroups: null, icon: "\\uD83D\\uDCAA" },\n  "Shoulders": { subgroups: ["Front Delts", "Side Delts", "Rear Delts"], icon: "\\uD83C\\uDFAF" },\n  "Core":      { subgroups: null, icon: "\\uD83C\\uDFAF" },\n  "Legs":      { subgroups: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"], icon: "\\uD83E\\uDDB5" },\n  "Arms":      { subgroups: ["Biceps", "Triceps", "Forearms"], icon: "\\uD83D\\uDCAA" },\n};\n\n// ============================================================\n// THEME & CONSTANTS\n// ============================================================\nconst THEME = {\n  color: "#9a8c7a",\n  colorHover: "#aa9c8a",\n  colorBorder: "#3a342a",\n  colorBorderHover: "#4a443a",\n  colorMuted: "#6a5a4a",\n  colorLight: "#b8a890",\n  colorDiscipline: "#a89860",\n  colorFlow: "#6a8a9a",\n  systemGreen: "#7a9a7d"\n};\n\nconst STRENGTH_LEVELS = {\n  "Untrained":    { color: "#6a6a6a", icon: "\\u25CB" },\n  "Beginner":     { color: "#a89860", icon: "\\u25D0" },\n  "Novice":       { color: "#7a9a7d", icon: "\\u25D1" },\n  "Intermediate": { color: "#6a8a9a", icon: "\\u25D5" },\n  "Advanced":     { color: "#8a7a9a", icon: "\\u25CF" },\n  "Elite":        { color: "#9a6a7a", icon: "\\u2605" }\n};\n\n// ============================================================\n// STATE (from frontmatter)\n// ============================================================\nlet exercises = getData("exercises") || [];\nlet muscleGroups = getData("muscleGroups") || [];\nlet currentMuscleIndex = getData("currentMuscleIndex") || 0;\nconst isCompleted = getData("Workout") === true;\n\n// ============================================================\n// STYLES\n// ============================================================\nif (!document.getElementById("olen-tpl-workout-v6")) {\n  const style = document.createElement("style");\n  style.id = "olen-tpl-workout-v6";\n  style.textContent = `\n    .otw-container * { box-sizing: border-box; }\n    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0 120px 0; font-family: Georgia, serif; color: #c8c0b2; }\n    .otw-container button, .otw-container input, .otw-modal-overlay button, .otw-modal-overlay input { border-radius: 10px !important; -webkit-appearance: none; appearance: none; }\n    .otw-container input[type="number"] { -moz-appearance: textfield; }\n    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 16px rgba(154,140,122,0.02); } 50% { box-shadow: inset 0 0 24px rgba(154,140,122,0.04); } }\n    @keyframes otw-pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }\n    .otw-card { background: rgba(12,10,16,0.6); backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%); border: 1px solid rgba(154,140,122,0.08); padding: 16px; position: relative; margin-bottom: 12px; border-radius: 16px; }\n    .otw-card-breathe { animation: otw-breathe 6s ease-in-out infinite; }\n    .otw-header { text-align: center; padding: 16px; }\n    .otw-title { margin: 0; color: #9a8c7a; font-size: 18px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }\n    .otw-progress-label { color: #4d473e; font-size: 11px; margin-top: 6px; }\n    .otw-section-label { color: #4d473e; font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-align: center; margin: 16px 0 8px; }\n    .otw-week-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }\n    .otw-week-day { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 3px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.06); border-radius: 8px; }\n    .otw-week-day.today { border-color: rgba(154,140,122,0.2); }\n    .otw-week-day .otw-day-label { font-size: 8px; color: #4d473e; letter-spacing: 1px; text-transform: uppercase; }\n    .otw-week-day .otw-day-num { font-size: 12px; font-weight: 600; color: #4d473e; }\n    .otw-week-day .otw-day-icon { font-size: 13px; min-height: 16px; }\n    .otw-week-day.done .otw-day-num { color: #9a8c7a; }\n    .otw-heatmap-wrap { display: flex; justify-content: center; gap: 16px; padding: 8px 0; }\n    .otw-heatmap-svg { width: 130px; height: auto; }\n    .otw-heatmap-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px 12px; margin-top: 6px; padding: 0 8px; }\n    .otw-heatmap-legend-item { display: flex; align-items: center; gap: 4px; font-size: 7px; color: #4d473e; letter-spacing: 1px; text-transform: uppercase; }\n    .otw-heatmap-legend-dot { width: 6px; height: 6px; border-radius: 2px; }\n    .otw-btn { padding: 12px 20px; border: none; border-radius: 10px !important; font-size: 12px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; -webkit-appearance: none; appearance: none; }\n    .otw-btn-primary { background: linear-gradient(180deg, #9a8c7a, #7a6c5a); color: #0a0a0a; width: 100%; box-shadow: 0 2px 12px rgba(154,140,122,0.15); }\n    .otw-btn-primary:active { transform: scale(0.98); box-shadow: 0 0 20px rgba(154,140,122,0.2); }\n    .otw-btn-secondary { background: rgba(255,255,255,0.03); border: 1px solid rgba(154,140,122,0.1); color: #6a5a4a; }\n    .otw-btn-secondary:active { border-color: rgba(154,140,122,0.3); color: #9a8c7a; }\n    .otw-btn-finish { background: linear-gradient(180deg, #7a9a7d, #5a7a5d); color: #0a0a0a; box-shadow: 0 2px 12px rgba(122,154,125,0.15); }\n    .otw-btn-dashed { width: 100%; background: transparent; border: 1px dashed rgba(154,140,122,0.1); color: #4d473e; border-radius: 10px !important; }\n    .otw-btn-dashed:active { border-color: rgba(154,140,122,0.3); color: #9a8c7a; }\n    .otw-nav-row { display: flex; gap: 10px; margin-top: 20px; }\n    .otw-nav-row .otw-btn { flex: 1; text-align: center; }\n    .otw-set-row { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 10px; padding: 10px 12px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.06); margin-bottom: 4px; border-radius: 10px; }\n    .otw-set-row.completed { opacity: 0.5; }\n    .otw-checkbox { width: 24px; height: 24px; border: 1px solid rgba(154,140,122,0.15); border-radius: 8px !important; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0a0a0a; font-weight: bold; transition: all 0.2s; flex-shrink: 0; }\n    .otw-checkbox.checked { background: #7a9a7d; border-color: #7a9a7d; }\n    .otw-input { padding: 6px; background: rgba(0,0,0,0.3); border: 1px solid rgba(154,140,122,0.1); border-radius: 8px !important; color: #9a8c7a; text-align: center; font-size: 14px; font-weight: 600; width: 50px; -webkit-appearance: none; appearance: none; }\n    .otw-ctrl-btn { width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 8px !important; color: #9a8c7a; cursor: pointer; font-size: 15px; flex-shrink: 0; -webkit-appearance: none; appearance: none; }\n    .otw-ctrl-btn:active { background: rgba(154,140,122,0.2); }\n    .otw-warmup-badge { font-size: 9px; color: #6a8a9a; padding: 2px 6px; background: rgba(106,138,154,0.1); border-radius: 6px; }\n    .otw-strength-bar { height: 4px; background: rgba(255,255,255,0.04); border-radius: 2px; overflow: hidden; margin-top: 6px; }\n    .otw-strength-fill { height: 100%; border-radius: 2px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }\n    .otw-strength-badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }\n    .otw-pr-box { display: flex; flex-direction: column; gap: 4px; padding: 8px 10px; background: rgba(168,152,96,0.06); border: 1px solid rgba(168,152,96,0.15); border-radius: 8px; margin-top: 8px; }\n    .otw-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.4s ease, backdrop-filter 0.4s ease; }\n    .otw-modal-overlay.visible { background: rgba(0,0,0,0.85); backdrop-filter: blur(12px); }\n    .otw-modal-content { background: rgba(12,10,16,0.95); backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%); padding: 24px 18px; border: 1px solid rgba(154,140,122,0.1); border-radius: 18px; max-width: 500px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 14px; position: relative; opacity: 0; transform: translateY(20px); transition: opacity 0.4s ease, transform 0.4s ease; overflow-y: auto; }\n    .otw-modal-overlay.visible .otw-modal-content { opacity: 1; transform: translateY(0); }\n    .otw-feel-btn { display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: rgba(12,10,16,0.4); border-radius: 12px; cursor: pointer; margin-bottom: 8px; transition: all 0.2s; border: 1px solid rgba(154,140,122,0.06); }\n    .otw-feel-btn:active { background: rgba(154,140,122,0.08); }\n    .otw-muscle-toggle { padding: 10px 16px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 10px !important; color: #9a8c7a; font-size: 12px; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }\n    .otw-muscle-toggle.active { background: rgba(154,140,122,0.2) !important; border-color: rgba(154,140,122,0.3) !important; }\n    .otw-muscle-toggle:active { transform: translateY(-1px); }\n    .otw-subgroup-container { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease; opacity: 0; padding: 0 12px; }\n    .otw-subgroup-container.expanded { max-height: 200px; opacity: 1; padding: 12px; }\n    .otw-sub-toggle { padding: 7px 12px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 8px !important; color: #6a5a4a; font-size: 11px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }\n    .otw-sub-toggle.active { background: rgba(154,140,122,0.15); border-color: rgba(154,140,122,0.25); color: #9a8c7a; }\n  `;\n  document.head.appendChild(style);\n}\n\n// ============================================================\n// UTILITY FUNCTIONS\n// ============================================================\n\nfunction addCorners(el, color, size = 14) {\n  ["TL", "TR", "BL", "BR"].forEach((pos) => {\n    const c = document.createElement("div");\n    const isTop = pos.includes("T"), isLeft = pos.includes("L");\n    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;\n    el.appendChild(c);\n  });\n}\n\nfunction calculate1RM(weight, reps) {\n  if (reps === 0 || weight === 0) return 0;\n  if (reps === 1) return weight;\n  return Math.round(weight * (1 + reps / 30));\n}\n\nfunction getFirstWorkingSetIndex(sets) {\n  return sets.findIndex((s) => !s.isWarmup);\n}\n\nfunction updateWarmupWeights(ex, newW) {\n  const warmups = ex.sets.filter((s) => s.isWarmup);\n  [0.5, 0.7, 0.85].forEach((p, i) => {\n    if (warmups[i]) warmups[i].weight = Math.round(newW * p);\n  });\n}\n\n// ============================================================\n// SVG BODY FIGURE \u2014 Load actual Muscle Man/Woman SVG files\n// ============================================================\n\nlet _cachedSvgContent = null;\nlet _cachedSvgGender = null;\n\nasync function loadBodySvg() {\n  const gender = PERSONAL.gender || "male";\n  if (_cachedSvgContent && _cachedSvgGender === gender) return _cachedSvgContent;\n  const fileName = gender === "female" ? "Muscle Woman.svg" : "Muscle Man.svg";\n  try {\n    const content = await readFile(fileName);\n    if (content) {\n      _cachedSvgContent = content;\n      _cachedSvgGender = gender;\n      return content;\n    }\n  } catch (e) { /* file not found \u2014 fall back to programmatic */ }\n  return null;\n}\n\n// Hotspot regions for muscle overlay on the actual SVG (percentage-based)\n// Positioned relative to the SVG container (front view anatomical figure)\nconst SVG_HOTSPOTS = {\n  front: {\n    neck:       { top: 9,  left: 42, width: 16, height: 4  },\n    front_delts:{ top: 15, left: 20, width: 12, height: 7  },\n    chest:      { top: 19, left: 33, width: 34, height: 10 },\n    biceps:     { top: 23, left: 14, width: 10, height: 12 },\n    forearms:   { top: 37, left: 10, width: 10, height: 12 },\n    core:       { top: 30, left: 38, width: 24, height: 14 },\n    quads:      { top: 49, left: 32, width: 16, height: 18 },\n    calves:     { top: 72, left: 34, width: 12, height: 14 },\n  },\n  // Mirror right side automatically\n  rightMirror: {\n    front_delts: { top: 15, left: 68, width: 12, height: 7  },\n    biceps:      { top: 23, left: 76, width: 10, height: 12 },\n    forearms:    { top: 37, left: 80, width: 10, height: 12 },\n    quads:       { top: 49, left: 52, width: 16, height: 18 },\n    calves:      { top: 72, left: 54, width: 12, height: 14 },\n  },\n  back: {\n    traps:      { top: 13, left: 34, width: 32, height: 6  },\n    rear_delts: { top: 15, left: 20, width: 12, height: 7  },\n    lats:       { top: 20, left: 26, width: 48, height: 12 },\n    triceps:    { top: 23, left: 14, width: 10, height: 12 },\n    lower_back: { top: 33, left: 36, width: 28, height: 10 },\n    glutes:     { top: 44, left: 34, width: 32, height: 8  },\n    hamstrings: { top: 53, left: 32, width: 16, height: 16 },\n  },\n  backMirror: {\n    rear_delts: { top: 15, left: 68, width: 12, height: 7  },\n    triceps:    { top: 23, left: 76, width: 10, height: 12 },\n    hamstrings: { top: 53, left: 52, width: 16, height: 16 },\n  },\n};\n\n// ============================================================\n// PERSONAL STATS & STRENGTH STANDARDS\n// ============================================================\n\nasync function getPersonalStats() {\n  // Read from plugin settings (Personal Stats section)\n  return {\n    weight: PERSONAL.weight,\n    height: PERSONAL.height,\n    birthdate: PERSONAL.birthdate,\n  };\n}\n\nfunction calculateAge(bd) {\n  if (!bd) return 20;\n  const b = new Date(bd), t = new Date();\n  let a = t.getFullYear() - b.getFullYear();\n  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;\n  return a;\n}\n\nfunction parseStandardValue(val) {\n  if (typeof val !== "string") val = String(val);\n  val = val.trim();\n  if (val.includes("<")) {\n    const num = parseFloat(val.replace(/[<\\s]/g, ""));\n    return !isNaN(num) && num > 0 ? num * 0.5 : 0.1;\n  }\n  const num = parseFloat(val);\n  return isNaN(num) ? 0 : num;\n}\n\nasync function getStrengthStandard(exerciseName) {\n  const filePath = SETTINGS.exerciseDbFolder + "/" + exerciseName + ".md";\n  const fm = getFileMetadata(filePath);\n  const isBW = fm?.Type === "Bodyweight";\n  const content = await readFile(filePath);\n  if (!content) return null;\n  const lines = content.split("\\n");\n  const bwTable = [], ageTable = [];\n  let currentTable = null;\n  for (const line of lines) {\n    if (line.match(/\\|\\s*BW\\s*\\|/i)) { currentTable = "bw"; continue; }\n    if (line.match(/\\|\\s*Age\\s*\\|/i)) { currentTable = "age"; continue; }\n    if (line.startsWith("|---") || line.startsWith("| ---")) continue;\n    const m = line.match(/\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|/);\n    if (m) {\n      const row = { key: parseStandardValue(m[1]), beginner: parseStandardValue(m[2]), novice: parseStandardValue(m[3]), intermediate: parseStandardValue(m[4]), advanced: parseStandardValue(m[5]), elite: parseStandardValue(m[6]) };\n      if (row.key > 0 && (row.beginner > 0 || row.novice > 0 || row.intermediate > 0)) {\n        if (currentTable === "bw") bwTable.push(row);\n        else if (currentTable === "age") ageTable.push(row);\n      }\n    }\n  }\n  return { bwTable, ageTable, isBodyweight: isBW, hasValidData: bwTable.length > 0 || ageTable.length > 0 };\n}\n\nfunction interpolateStandard(table, value) {\n  if (!table || table.length === 0) return null;\n  const sorted = [...table].sort((a, b) => a.key - b.key);\n  let lower = sorted[0], upper = sorted[sorted.length - 1];\n  for (let i = 0; i < sorted.length - 1; i++) {\n    if (sorted[i].key <= value && sorted[i + 1].key >= value) { lower = sorted[i]; upper = sorted[i + 1]; break; }\n  }\n  if (value <= lower.key) return { ...lower };\n  if (value >= upper.key) return { ...upper };\n  const ratio = (value - lower.key) / (upper.key - lower.key);\n  return { key: value, beginner: lower.beginner + ratio * (upper.beginner - lower.beginner), novice: lower.novice + ratio * (upper.novice - lower.novice), intermediate: lower.intermediate + ratio * (upper.intermediate - lower.intermediate), advanced: lower.advanced + ratio * (upper.advanced - lower.advanced), elite: lower.elite + ratio * (upper.elite - lower.elite) };\n}\n\nasync function getAveragedStandards(std) {\n  const stats = await getPersonalStats();\n  const bw = interpolateStandard(std.bwTable, stats.weight);\n  const ag = interpolateStandard(std.ageTable, calculateAge(stats.birthdate));\n  if (bw && ag) return { beginner: (bw.beginner + ag.beginner) / 2, novice: (bw.novice + ag.novice) / 2, intermediate: (bw.intermediate + ag.intermediate) / 2, advanced: (bw.advanced + ag.advanced) / 2, elite: (bw.elite + ag.elite) / 2 };\n  return bw || ag || null;\n}\n\nfunction determineStrengthLevel(cv, std) {\n  if (!std || cv < 0) return { level: "Untrained", color: "#6a6a6a", progress: 0, nextTarget: std?.beginner || 1 };\n  const { beginner, novice, intermediate, advanced, elite } = std;\n  if (cv >= elite) return { level: "Elite", color: "#9a6a7a", progress: 100, nextTarget: null };\n  if (cv >= advanced) return { level: "Advanced", color: "#8a7a9a", progress: ((cv - advanced) / (elite - advanced)) * 100, nextTarget: elite };\n  if (cv >= intermediate) return { level: "Intermediate", color: "#6a8a9a", progress: ((cv - intermediate) / (advanced - intermediate)) * 100, nextTarget: advanced };\n  if (cv >= novice) return { level: "Novice", color: "#7a9a7d", progress: ((cv - novice) / (intermediate - novice)) * 100, nextTarget: intermediate };\n  if (cv >= beginner) return { level: "Beginner", color: "#a89860", progress: ((cv - beginner) / (novice - beginner)) * 100, nextTarget: novice };\n  return { level: "Untrained", color: "#6a6a6a", progress: beginner > 0 ? Math.max(0, (cv / beginner) * 100) : 0, nextTarget: beginner };\n}\n\nasync function calculateStrengthLevel(name, w, r, maxR) {\n  const std = await getStrengthStandard(name);\n  if (!std || !std.hasValidData) return null;\n  const avg = await getAveragedStandards(std);\n  if (!avg) return null;\n  if (std.isBodyweight) {\n    const eff = maxR !== null && maxR !== undefined ? Math.max(r, maxR) : r;\n    const res = determineStrengthLevel(eff, avg);\n    return { ...res, currentValue: eff, isBodyweight: true, unit: "reps", displayLabel: "Max Reps" };\n  } else {\n    if (w <= 0) return null;\n    const est = calculate1RM(w, r);\n    const res = determineStrengthLevel(est, avg);\n    return { ...res, currentValue: est, isBodyweight: false, unit: "kg", displayLabel: "Est. 1RM" };\n  }\n}\n\nasync function hasStrengthStandard(name) {\n  const std = await getStrengthStandard(name);\n  return std !== null && std.hasValidData;\n}\n\n// ============================================================\n// WORKOUT DATA \u2014 PR lookup, previous exercise loading\n// ============================================================\n\nasync function getExercisePR(name) {\n  const std = await getStrengthStandard(name);\n  const isBW = std?.isBodyweight || false;\n  const files = getFilesInFolder(SETTINGS.workoutFolder);\n  let best = null, bestV = 0;\n  for (const f of files) {\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises) && fm.Workout === true) {\n      const ex = fm.exercises.find((e) => e.name === name);\n      if (ex?.sets) {\n        for (const set of ex.sets) {\n          if (!set.isWarmup && set.completed) {\n            if (isBW) {\n              if (set.reps > bestV) { bestV = set.reps; best = { ...set, date: f.basename, prValue: bestV, isBodyweight: true }; }\n            } else if (set.weight > 0) {\n              const est = calculate1RM(set.weight, set.reps);\n              if (est > bestV) { bestV = est; best = { ...set, date: f.basename, estimated1RM: est, prValue: est, isBodyweight: false }; }\n            }\n          }\n        }\n      }\n    }\n  }\n  return best;\n}\n\nfunction getLastWorkoutForMuscleGroup(muscleGroup) {\n  const files = getFilesInFolder(SETTINGS.workoutFolder)\n    .sort((a, b) => b.basename.localeCompare(a.basename));\n  for (const f of files) {\n    if (f.path === file.path) continue; // skip current note\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises)) {\n      const relevant = fm.exercises.filter(ex => ex.muscle === muscleGroup || ex.muscleGroup === muscleGroup);\n      if (relevant.length > 0) return { date: f.basename, exercises: relevant };\n    }\n  }\n  return null;\n}\n\nfunction loadPreviousExercises(selectedMuscleGroups) {\n  const exercisesArray = [];\n  for (const muscle of selectedMuscleGroups) {\n    const lastWorkout = getLastWorkoutForMuscleGroup(muscle);\n    if (lastWorkout) {\n      for (const ex of lastWorkout.exercises) {\n        exercisesArray.push({\n          name: ex.name,\n          muscle: muscle,\n          muscleGroup: muscle,\n          sets: ex.sets ? ex.sets.map(s => ({\n            weight: s.weight || 0,\n            reps: s.reps || 10,\n            completed: false,\n            isWarmup: s.isWarmup || false\n          })) : [{ weight: 0, reps: 10, completed: false, isWarmup: false }]\n        });\n      }\n    }\n  }\n  return exercisesArray;\n}\n\n// ============================================================\n// SAVE STATE\n// ============================================================\n\nasync function saveState() {\n  await setMultipleData({\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n}\n\n// ============================================================\n// MODAL SYSTEM\n// ============================================================\n\nlet activeModal = null;\n\nfunction closeModal() {\n  if (!activeModal) return;\n  activeModal.classList.remove("visible");\n  setTimeout(() => {\n    if (activeModal?.parentNode) activeModal.parentNode.removeChild(activeModal);\n    activeModal = null;\n  }, 500);\n}\n\nfunction createModal(title, contentBuilder) {\n  if (activeModal) { activeModal.parentNode.removeChild(activeModal); activeModal = null; }\n  const modal = document.createElement("div");\n  modal.className = "otw-modal-overlay";\n  activeModal = modal;\n  const modalContent = document.createElement("div");\n  modalContent.className = "otw-modal-content";\n  modal.appendChild(modalContent);\n  addCorners(modalContent, THEME.color);\n  if (title) {\n    const t = document.createElement("h2");\n    t.textContent = title;\n    t.style.cssText = `margin:0;color:${THEME.color};font-size:14px;font-weight:500;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    modalContent.appendChild(t);\n    const d = document.createElement("div");\n    d.style.cssText = `width:60px;height:1px;background:linear-gradient(90deg,transparent,${THEME.color},transparent);margin:0 auto 12px;`;\n    modalContent.appendChild(d);\n  }\n  contentBuilder(modalContent);\n  modal.onclick = (e) => { if (e.target === modal) closeModal(); };\n  document.body.appendChild(modal);\n  requestAnimationFrame(() => modal.classList.add("visible"));\n  return modal;\n}\n\n// ============================================================\n// POST-COMPLETION NAVIGATION\n// ============================================================\n\nfunction getReturnDestination() {\n  // Look up the current activity\'s config from plugin settings\n  const activityId = getData("activity");\n  const activities = ctx.plugin?.settings?.activities;\n  if (activities && activityId) {\n    const actConfig = activities.find(a => a.id === activityId);\n    if (actConfig?.completionReturnTo) return actConfig.completionReturnTo;\n  }\n  return "dashboard"; // default\n}\n\nfunction navigateAfterCompletion() {\n  const dest = getReturnDestination();\n  if (dest === "stay") return; // do nothing, stay on completion summary\n  if (dest === "dashboard") {\n    // Use Olen\'s built-in dashboard activation\n    if (ctx.plugin?.activateDashboardView) {\n      setTimeout(() => ctx.plugin.activateDashboardView(), 600);\n    }\n    return;\n  }\n  if (dest === "homepage") {\n    // Open the global homepage file defined in Profile settings\n    const homepagePath = ctx.plugin?.settings?.homepage;\n    if (!homepagePath) { notice("No homepage set \u2014 go to Olen Settings > Profile to define one."); return; }\n    const targetFile = app.vault.getAbstractFileByPath(homepagePath);\n    if (targetFile) {\n      setTimeout(() => app.workspace.getLeaf(false).openFile(targetFile), 600);\n    } else {\n      notice("Homepage file not found: " + homepagePath);\n    }\n    return;\n  }\n}\n\n// ============================================================\n// FINISH WORKOUT\n// ============================================================\n\nasync function finishWorkout(type) {\n  await setMultipleData({\n    Workout: true,\n    "Workout-Type": type,\n    Timestamp: moment().format(),\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n  notice("Workout logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");\n  navigateAfterCompletion();\n}\n\nasync function openFinishModal() {\n  // Build session analytics data\n  const summaryData = [];\n  for (const ex of exercises) {\n    const completed = ex.sets.filter(s => !s.isWarmup && s.completed);\n    if (completed.length > 0) {\n      const pr = await getExercisePR(ex.name);\n      let bestW = 0, bestR = 0, maxR = 0, sessionBest = 0;\n      for (const s of completed) {\n        if (s.reps > maxR) maxR = s.reps;\n        if (s.weight > 0) {\n          const est = calculate1RM(s.weight, s.reps);\n          if (est > sessionBest) { sessionBest = est; bestW = s.weight; bestR = s.reps; }\n        } else if (s.reps > sessionBest) { sessionBest = s.reps; bestR = s.reps; }\n      }\n      const sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR);\n      summaryData.push({ name: ex.name, muscle: ex.muscle || ex.muscleGroup, bestW, bestR, maxR, sessionBest, sl, pr, completedSets: completed.length, totalSets: ex.sets.filter(s => !s.isWarmup).length });\n    }\n  }\n\n  createModal(null, (content) => {\n    // Scrollable area\n    const scroll = document.createElement("div");\n    scroll.style.cssText = "overflow-y:auto;display:flex;flex-direction:column;gap:16px;flex:1;max-height:70vh;";\n    content.appendChild(scroll);\n\n    // Title\n    const title = document.createElement("h2");\n    title.textContent = "WORKOUT COMPLETE";\n    title.style.cssText = `margin:0;color:${THEME.systemGreen};font-size:16px;font-weight:700;letter-spacing:3px;text-align:center;`;\n    scroll.appendChild(title);\n\n    // Session summary cards\n    if (summaryData.length > 0) {\n      const sec = document.createElement("div");\n      sec.style.cssText = "display:flex;flex-direction:column;gap:12px;";\n      scroll.appendChild(sec);\n\n      const secTitle = document.createElement("div");\n      secTitle.textContent = "SESSION SUMMARY";\n      secTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;`;\n      sec.appendChild(secTitle);\n\n      for (const ex of summaryData) {\n        const card = document.createElement("div");\n        card.style.cssText = `padding:14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};`;\n        sec.appendChild(card);\n\n        // Exercise name + strength badge\n        const hdr = document.createElement("div");\n        hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;";\n        card.appendChild(hdr);\n\n        const nm = document.createElement("span");\n        nm.textContent = ex.name;\n        nm.style.cssText = `color:${THEME.color};font-weight:600;font-size:14px;`;\n        hdr.appendChild(nm);\n\n        if (ex.sl) {\n          const li = STRENGTH_LEVELS[ex.sl.level];\n          const badge = document.createElement("span");\n          badge.style.cssText = `display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:${ex.sl.color}20;border:1px solid ${ex.sl.color}50;color:${ex.sl.color};font-size:11px;font-weight:700;letter-spacing:1px;`;\n          badge.textContent = (li?.icon || "\\u25CB") + " " + ex.sl.level.toUpperCase();\n          hdr.appendChild(badge);\n        }\n\n        // Best set + estimated 1RM\n        const stats = document.createElement("div");\n        stats.style.cssText = `display:flex;justify-content:space-between;margin-bottom:8px;font-size:12px;`;\n        card.appendChild(stats);\n\n        const setInfo = document.createElement("span");\n        setInfo.textContent = ex.sl?.isBodyweight ? "Best: " + ex.maxR + " reps" : "Best: " + ex.bestW + "kg \\u00D7 " + ex.bestR;\n        setInfo.style.cssText = `color:${THEME.colorMuted};`;\n        stats.appendChild(setInfo);\n\n        if (ex.sl) {\n          const rmInfo = document.createElement("span");\n          rmInfo.textContent = ex.sl.displayLabel + ": " + ex.sl.currentValue + ex.sl.unit;\n          rmInfo.style.cssText = `color:${THEME.color};font-weight:600;`;\n          stats.appendChild(rmInfo);\n        }\n\n        // Sets completed\n        const setsInfo = document.createElement("div");\n        setsInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-bottom:8px;`;\n        setsInfo.textContent = ex.completedSets + "/" + ex.totalSets + " working sets completed";\n        card.appendChild(setsInfo);\n\n        // PR comparison\n        if (ex.pr) {\n          const prC = document.createElement("div");\n          prC.style.cssText = `font-size:11px;margin-bottom:8px;padding:6px 8px;`;\n          const cv = ex.sl?.currentValue || ex.sessionBest;\n          if (cv > ex.pr.prValue) {\n            prC.style.background = "rgba(122,154,125,0.15)";\n            prC.innerHTML = \'<span style="color:#7a9a7d;font-weight:700;">\\uD83C\\uDF89 NEW PR!</span> <span style="color:\' + THEME.colorMuted + \';">Previous: \' + ex.pr.prValue + \' \\u2192 Now: \' + cv + \'</span>\';\n          } else if (cv === ex.pr.prValue) {\n            prC.style.background = "rgba(168,152,96,0.1)";\n            prC.innerHTML = \'<span style="color:#a89860;">\\uD83C\\uDFC6 Matched PR:</span> <span style="color:\' + THEME.colorMuted + \';">\' + ex.pr.prValue + \'</span>\';\n          } else {\n            prC.style.background = "rgba(168,152,96,0.1)";\n            prC.innerHTML = \'<span style="color:\' + THEME.colorMuted + \';">\\uD83C\\uDFC6 PR: \' + ex.pr.prValue + \'</span> <span style="color:#6a6a6a;">(today: \' + cv + \')</span>\';\n          }\n          card.appendChild(prC);\n        }\n\n        // Progress bar to next strength level\n        if (ex.sl && ex.sl.nextTarget) {\n          const pb = document.createElement("div");\n          pb.className = "otw-strength-bar";\n          pb.style.marginTop = "8px";\n          card.appendChild(pb);\n          const fill = document.createElement("div");\n          fill.className = "otw-strength-fill";\n          fill.style.cssText = `width:${Math.min(100, ex.sl.progress)}%;background:${ex.sl.color};`;\n          pb.appendChild(fill);\n          const ti = document.createElement("div");\n          ti.style.cssText = `display:flex;justify-content:space-between;font-size:9px;color:${THEME.colorMuted};margin-top:4px;`;\n          ti.innerHTML = "<span>Current: " + ex.sl.currentValue + ex.sl.unit + "</span><span>Next: " + Math.round(ex.sl.nextTarget) + ex.sl.unit + "</span>";\n          card.appendChild(ti);\n        }\n      }\n    }\n\n    // "How did it feel?" section\n    const feelTitle = document.createElement("h3");\n    feelTitle.textContent = "How did it feel?";\n    feelTitle.style.cssText = `margin:8px 0 0 0;color:${THEME.color};font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    scroll.appendChild(feelTitle);\n\n    const btns = document.createElement("div");\n    btns.style.cssText = "display:flex;flex-direction:column;gap:10px;";\n    scroll.appendChild(btns);\n\n    // Discipline button\n    const discBtn = document.createElement("div");\n    discBtn.className = "otw-feel-btn";\n    discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;\n    discBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\\uD83D\\uDC8E</span><div style="flex:1;"><div style="color:${THEME.colorDiscipline};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through resistance</div></div><div style="color:#4a4030;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    discBtn.onclick = async () => { closeModal(); await finishWorkout("discipline"); };\n    btns.appendChild(discBtn);\n\n    // Flow button\n    const flowBtn = document.createElement("div");\n    flowBtn.className = "otw-feel-btn";\n    flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;\n    flowBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\\uD83C\\uDF0A</span><div style="flex:1;"><div style="color:${THEME.colorFlow};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Felt natural and effortless</div></div><div style="color:#304050;font-size:18px;opacity:0.5;">\\u2192</div>`;\n    flowBtn.onclick = async () => { closeModal(); await finishWorkout("flow"); };\n    btns.appendChild(flowBtn);\n  });\n}\n\n// ============================================================\n// ADD EXERCISE MODAL\n// ============================================================\n\nfunction openAddExerciseModal(muscle) {\n  createModal("Add Exercise - " + muscle, (content) => {\n    const nameInput = document.createElement("input");\n    nameInput.type = "text";\n    nameInput.placeholder = "Exercise name...";\n    nameInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;`;\n    content.appendChild(nameInput);\n\n    const warmupLabel = document.createElement("div");\n    warmupLabel.textContent = "Include warmup sets?";\n    warmupLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(warmupLabel);\n\n    let incWarmup = true;\n    const warmupRow = document.createElement("div");\n    warmupRow.style.cssText = "display:flex;gap:8px;margin-top:8px;";\n    content.appendChild(warmupRow);\n\n    const yesBtn = document.createElement("button");\n    yesBtn.textContent = "Yes (suggested)";\n    yesBtn.className = "otw-btn otw-btn-secondary";\n    yesBtn.style.cssText += `flex:1;background:rgba(154,140,122,0.2);border-color:${THEME.color};color:${THEME.color};`;\n    const noBtn = document.createElement("button");\n    noBtn.textContent = "No";\n    noBtn.className = "otw-btn otw-btn-secondary";\n    noBtn.style.flex = "1";\n    yesBtn.onclick = () => { incWarmup = true; yesBtn.style.background = "rgba(154,140,122,0.2)"; yesBtn.style.borderColor = THEME.color; noBtn.style.background = "#0f0f0f"; noBtn.style.borderColor = THEME.colorBorder; };\n    noBtn.onclick = () => { incWarmup = false; noBtn.style.background = "rgba(154,140,122,0.2)"; noBtn.style.borderColor = THEME.color; yesBtn.style.background = "#0f0f0f"; yesBtn.style.borderColor = THEME.colorBorder; };\n    warmupRow.appendChild(yesBtn);\n    warmupRow.appendChild(noBtn);\n\n    const weightLabel = document.createElement("div");\n    weightLabel.textContent = "Working weight (kg) - 0 for bodyweight";\n    weightLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(weightLabel);\n\n    const weightInput = document.createElement("input");\n    weightInput.type = "number";\n    weightInput.placeholder = "0";\n    weightInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;margin-top:8px;`;\n    content.appendChild(weightInput);\n\n    const btnRow = document.createElement("div");\n    btnRow.style.cssText = "display:flex;gap:12px;margin-top:16px;";\n    content.appendChild(btnRow);\n\n    const cancelBtn = document.createElement("button");\n    cancelBtn.textContent = "Cancel";\n    cancelBtn.className = "otw-btn otw-btn-secondary";\n    cancelBtn.style.flex = "1";\n    cancelBtn.onclick = () => closeModal();\n    btnRow.appendChild(cancelBtn);\n\n    const addBtn = document.createElement("button");\n    addBtn.textContent = "Add Exercise";\n    addBtn.className = "otw-btn otw-btn-primary";\n    addBtn.style.flex = "1";\n    addBtn.onclick = async () => {\n      const name = nameInput.value.trim();\n      if (!name) { notice("Please enter an exercise name"); return; }\n      const ww = parseFloat(weightInput.value) || 0;\n      const sets = [];\n      if (incWarmup && ww > 0) {\n        sets.push({ weight: Math.round(ww * 0.5), reps: 10, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.7), reps: 6, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.85), reps: 3, completed: false, isWarmup: true });\n      }\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      exercises.push({ name, muscle, muscleGroup: muscle, sets });\n      closeModal();\n      await saveState();\n      render();\n    };\n    btnRow.appendChild(addBtn);\n\n    setTimeout(() => nameInput.focus(), 100);\n  });\n}\n\n// ============================================================\n// RENDER: SET ROW\n// ============================================================\n\nfunction renderSet(setsContainer, set, setIdx, ex, warmupRefs) {\n  const row = document.createElement("div");\n  row.className = "otw-set-row" + (set.completed ? " completed" : "");\n  setsContainer.appendChild(row);\n  const refs = { weightInput: null };\n\n  // Checkbox\n  const cb = document.createElement("div");\n  cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n  cb.textContent = set.completed ? "\\u2713" : "";\n  cb.onclick = async () => {\n    set.completed = !set.completed;\n    cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n    cb.textContent = set.completed ? "\\u2713" : "";\n    row.className = "otw-set-row" + (set.completed ? " completed" : "");\n    await saveState();\n  };\n  row.appendChild(cb);\n\n  // Middle: weight + reps\n  const mid = document.createElement("div");\n  mid.style.cssText = "display:flex;align-items:center;gap:12px;flex-wrap:wrap;";\n  row.appendChild(mid);\n\n  // Weight input\n  const wWrap = document.createElement("div");\n  wWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(wWrap);\n  const wInput = document.createElement("input");\n  wInput.type = "number";\n  wInput.value = set.weight;\n  wInput.className = "otw-input";\n  const firstW = getFirstWorkingSetIndex(ex.sets);\n  const isFirst = !set.isWarmup && setIdx === firstW;\n  wInput.onchange = async (e) => {\n    const nw = parseFloat(e.target.value) || 0;\n    set.weight = nw;\n    if (isFirst) {\n      updateWarmupWeights(ex, nw);\n      const ws = ex.sets.filter((s) => s.isWarmup);\n      warmupRefs.forEach((inp, i) => { if (ws[i]) inp.value = ws[i].weight; });\n    }\n    await saveState();\n  };\n  wWrap.appendChild(wInput);\n  refs.weightInput = wInput;\n  const kgLabel = document.createElement("span");\n  kgLabel.textContent = "kg";\n  kgLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;`;\n  wWrap.appendChild(kgLabel);\n\n  // Reps controls\n  const rWrap = document.createElement("div");\n  rWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(rWrap);\n  const minusBtn = document.createElement("button");\n  minusBtn.className = "otw-ctrl-btn";\n  minusBtn.textContent = "\\u2212";\n  minusBtn.onclick = async () => { if (set.reps > 1) { set.reps--; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); } };\n  rWrap.appendChild(minusBtn);\n  const rDisp = document.createElement("span");\n  rDisp.textContent = set.reps + "\\u00D7";\n  rDisp.style.cssText = `color:${THEME.color};font-size:14px;font-weight:600;min-width:30px;text-align:center;`;\n  rWrap.appendChild(rDisp);\n  const plusBtn = document.createElement("button");\n  plusBtn.className = "otw-ctrl-btn";\n  plusBtn.textContent = "+";\n  plusBtn.onclick = async () => { set.reps++; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); };\n  rWrap.appendChild(plusBtn);\n\n  if (set.isWarmup) {\n    const badge = document.createElement("span");\n    badge.className = "otw-warmup-badge";\n    badge.textContent = "\\u26A1 Warmup";\n    mid.appendChild(badge);\n  }\n\n  // Delete set button\n  if (ex.sets.length > 1) {\n    const delBtn = document.createElement("button");\n    delBtn.textContent = "\\u00D7";\n    delBtn.style.cssText = `width:28px;height:28px;background:transparent;border:1px solid #3a2828;color:#6a4a4a;cursor:pointer;font-size:16px;`;\n    delBtn.onclick = async () => { ex.sets.splice(setIdx, 1); await saveState(); render(); };\n    row.appendChild(delBtn);\n  } else {\n    const ph = document.createElement("div");\n    ph.style.width = "28px";\n    row.appendChild(ph);\n  }\n\n  return refs;\n}\n\n// ============================================================\n// RENDER: EXERCISE CARD\n// ============================================================\n\nasync function renderExercise(exContainer, ex) {\n  const card = document.createElement("div");\n  card.className = "otw-card";\n  exContainer.appendChild(card);\n  addCorners(card, THEME.color, 12);\n\n  const exHeader = document.createElement("div");\n  exHeader.style.cssText = `display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid ${THEME.colorBorder};`;\n  card.appendChild(exHeader);\n\n  const leftCol = document.createElement("div");\n  leftCol.style.flex = "1";\n  exHeader.appendChild(leftCol);\n\n  const exTitle = document.createElement("h3");\n  exTitle.textContent = ex.name;\n  exTitle.style.cssText = `margin:0 0 8px 0;color:${THEME.color};font-size:16px;letter-spacing:1px;`;\n  leftCol.appendChild(exTitle);\n\n  // Strength level + PR info\n  const hasStd = await hasStrengthStandard(ex.name);\n  const pr = await getExercisePR(ex.name);\n  const workingSets = ex.sets.filter((s) => !s.isWarmup);\n  let bestW = 0, bestR = 0, maxR = 0;\n  workingSets.forEach((s) => { if (s.reps > maxR) maxR = s.reps; if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; } });\n\n  if (hasStd) {\n    let sl;\n    if (pr) { sl = pr.isBodyweight ? await calculateStrengthLevel(ex.name, 0, pr.prValue, pr.prValue) : await calculateStrengthLevel(ex.name, pr.weight, pr.reps, null); }\n    else if (bestW > 0 || maxR > 0) { sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR); }\n    if (sl) {\n      const li = STRENGTH_LEVELS[sl.level];\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText += `background:${sl.color}25;border:1px solid ${sl.color}60;color:${sl.color};`;\n      badge.textContent = (li?.icon || "\\u25CB") + " " + sl.level.toUpperCase();\n      leftCol.appendChild(badge);\n\n      const rmInfo = document.createElement("div");\n      rmInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-top:6px;`;\n      rmInfo.innerHTML = `<strong style="color:${THEME.color}">${sl.displayLabel}: ${sl.currentValue}${sl.unit}</strong>`;\n      if (sl.nextTarget) rmInfo.innerHTML += ` \\u2192 Next: ${Math.round(sl.nextTarget)}${sl.unit}`;\n      leftCol.appendChild(rmInfo);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      leftCol.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, sl.progress)}%;background:${sl.color};`;\n      pb.appendChild(fill);\n    }\n  }\n\n  if (pr) {\n    const prBox = document.createElement("div");\n    prBox.className = "otw-pr-box";\n    const prTitle = document.createElement("div");\n    prTitle.style.cssText = "font-size:11px;color:#a89860;font-weight:700;letter-spacing:1px;";\n    prTitle.textContent = pr.isBodyweight ? "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.prValue + " reps" : "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.estimated1RM + "kg (1RM)";\n    prBox.appendChild(prTitle);\n    const prDetail = document.createElement("div");\n    prDetail.style.cssText = `font-size:10px;color:${THEME.colorMuted};`;\n    prDetail.textContent = pr.isBodyweight ? "Best: " + pr.reps + " reps" : "Set: " + pr.weight + "kg \\u00D7 " + pr.reps + " reps";\n    prBox.appendChild(prDetail);\n    leftCol.appendChild(prBox);\n  }\n\n  // Delete exercise button\n  const delExBtn = document.createElement("button");\n  delExBtn.textContent = "\\uD83D\\uDDD1\\uFE0F";\n  delExBtn.style.cssText = "background:transparent;border:none;cursor:pointer;font-size:14px;opacity:0.5;";\n  delExBtn.onclick = async () => { const idx = exercises.indexOf(ex); if (idx > -1) { exercises.splice(idx, 1); await saveState(); render(); } };\n  exHeader.appendChild(delExBtn);\n\n  // Sets\n  const setsContainer = document.createElement("div");\n  setsContainer.style.cssText = "display:flex;flex-direction:column;gap:6px;";\n  card.appendChild(setsContainer);\n  const warmupRefs = [];\n  ex.sets.forEach((set, setIdx) => {\n    const refs = renderSet(setsContainer, set, setIdx, ex, warmupRefs);\n    if (set.isWarmup && refs.weightInput) warmupRefs.push(refs.weightInput);\n  });\n\n  // Add set button\n  const addSetBtn = document.createElement("button");\n  addSetBtn.textContent = "+ Add Set";\n  addSetBtn.className = "otw-btn otw-btn-dashed";\n  addSetBtn.style.cssText += "margin-top:8px;padding:8px 12px;font-size:12px;";\n  addSetBtn.onclick = async () => {\n    const last = ex.sets[ex.sets.length - 1] || { weight: 0, reps: 10 };\n    ex.sets.push({ weight: last.weight, reps: last.reps, completed: false, isWarmup: false });\n    await saveState();\n    render();\n  };\n  card.appendChild(addSetBtn);\n}\n\n// ============================================================\n// STATISTICS & HEATMAP DATA\n// ============================================================\n\n// Map muscle/subgroup names \u2192 body regions for the heatmap\nconst MUSCLE_TO_REGION = {\n  Neck: ["neck"], Chest: ["chest"], Core: ["core"],\n  Back: ["lats", "traps", "lower_back"], Lats: ["lats"], Traps: ["traps"],\n  Rhomboids: ["traps"], "Lower Back": ["lower_back"], "Rear Delts": ["rear_delts"],\n  Shoulders: ["front_delts", "rear_delts"], "Front Delts": ["front_delts"],\n  "Side Delts": ["front_delts"],\n  Legs: ["quads", "hamstrings", "glutes", "calves"], Quads: ["quads"],\n  Hamstrings: ["hamstrings"], Glutes: ["glutes"], Calves: ["calves"],\n  Adductors: ["quads"],\n  Arms: ["biceps", "triceps", "forearms"], Biceps: ["biceps"],\n  Triceps: ["triceps"], Forearms: ["forearms"],\n};\n\nfunction getWeeklyCalendarData() {\n  const today = moment().startOf("day");\n  const weekStart = today.clone().startOf("isoWeek");\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const days = [];\n  for (let i = 0; i < 7; i++) {\n    const day = weekStart.clone().add(i, "days");\n    const dayStr = day.format("YYYY-MM-DD");\n    const isToday = day.isSame(today, "day");\n    const isPast = day.isBefore(today, "day");\n    let status = null, type = null;\n    for (const wFile of allFiles) {\n      if (wFile.basename === dayStr) {\n        const fm = getFileMetadata(wFile.path);\n        if (fm && fm.Workout === true) { status = "done"; type = fm["Workout-Type"] || "done"; }\n        break;\n      }\n    }\n    days.push({ label: day.format("dd")[0], num: day.format("D"), isToday, isPast, status, type });\n  }\n  return days;\n}\n\nfunction getMonthlyStats() {\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const now = moment();\n  const weekStart = now.clone().startOf("isoWeek");\n  const monthStart = now.clone().startOf("month");\n  let thisWeek = 0, thisMonth = 0, total = 0, totalSets = 0, totalVolume = 0;\n  for (const wFile of allFiles) {\n    const fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true) continue;\n    total++;\n    const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n    if (!dateMatch) continue;\n    const fileDate = moment(dateMatch[1], "YYYY-MM-DD");\n    if (fileDate.isSameOrAfter(weekStart)) thisWeek++;\n    if (fileDate.isSameOrAfter(monthStart)) thisMonth++;\n    if (Array.isArray(fm.exercises)) {\n      for (const ex of fm.exercises) {\n        if (!Array.isArray(ex.sets)) continue;\n        for (const s of ex.sets) {\n          if (s.completed && !s.isWarmup) { totalSets++; totalVolume += (s.weight || 0) * (s.reps || 0); }\n        }\n      }\n    }\n  }\n  return { thisWeek, thisMonth, total, totalSets, totalVolume };\n}\n\nfunction getRecentSessions(limit) {\n  limit = limit || 4;\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  const sorted = allFiles.sort(function(a, b) { return b.basename.localeCompare(a.basename); });\n  const sessions = [];\n  for (var i = 0; i < sorted.length; i++) {\n    if (sessions.length >= limit) break;\n    var wFile = sorted[i];\n    if (wFile.path === file.path) continue;\n    var fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true) continue;\n    var dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n    sessions.push({\n      date: dateMatch ? dateMatch[1] : wFile.basename,\n      type: fm["Workout-Type"] || "done",\n      muscles: fm.muscleGroups || [],\n    });\n  }\n  return sessions;\n}\n\n// Build strength level data per body region from ALL completed workouts\nasync function getMuscleLevelData() {\n  const exerciseBest = {}; // exerciseName \u2192 { weight, reps, maxReps, muscle }\n  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n  for (const wFile of allFiles) {\n    if (wFile.path === file.path) continue;\n    const fm = getFileMetadata(wFile.path);\n    if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n    for (const ex of fm.exercises) {\n      const done = (ex.sets || []).filter(function(s) { return s.completed && !s.isWarmup; });\n      if (done.length === 0) continue;\n      let bestW = 0, bestR = 0, maxR = 0;\n      for (const s of done) {\n        if (s.reps > maxR) maxR = s.reps;\n        if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; }\n      }\n      const existing = exerciseBest[ex.name];\n      if (!existing) {\n        exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };\n      } else {\n        const oldVal = existing.weight > 0 ? calculate1RM(existing.weight, existing.reps) : existing.maxReps;\n        const newVal = bestW > 0 ? calculate1RM(bestW, bestR) : maxR;\n        if (newVal > oldVal) exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };\n      }\n    }\n  }\n  // Calculate strength level per exercise, map to body regions\n  const regionEntries = {};\n  for (const [exName, data] of Object.entries(exerciseBest)) {\n    const sl = await calculateStrengthLevel(exName, data.weight, data.reps, data.maxReps);\n    if (!sl) continue;\n    const regions = MUSCLE_TO_REGION[data.muscle] || [];\n    for (const region of regions) {\n      if (!regionEntries[region]) regionEntries[region] = [];\n      regionEntries[region].push({ level: sl.level, color: sl.color, progress: sl.progress });\n    }\n  }\n  // Pick the best strength level per region\n  const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];\n  const result = {};\n  for (const [region, entries] of Object.entries(regionEntries)) {\n    let best = entries[0], bestIdx = levelOrder.indexOf(entries[0].level);\n    for (let i = 1; i < entries.length; i++) {\n      const idx = levelOrder.indexOf(entries[i].level);\n      if (idx > bestIdx) { bestIdx = idx; best = entries[i]; }\n    }\n    result[region] = best;\n  }\n  return result;\n}\n\n// ============================================================\n// BODY HEATMAP SVG \u2014 Interactive with click-to-show-progress\n// ============================================================\n\nconst REGION_LABELS = {\n  neck: "Neck", chest: "Chest", front_delts: "Front Delts", rear_delts: "Rear Delts",\n  biceps: "Biceps", triceps: "Triceps", forearms: "Forearms", core: "Core",\n  quads: "Quads", calves: "Calves", traps: "Traps", lats: "Lats",\n  lower_back: "Lower Back", glutes: "Glutes", hamstrings: "Hamstrings",\n};\n\nfunction buildSvgWithOverlay(svgContent, muscleLevels, onRegionClick) {\n  // Container with actual SVG as background + clickable overlay hotspots\n  const wrap = document.createElement("div");\n  wrap.style.cssText = "position:relative;width:100%;max-width:240px;margin:0 auto;";\n\n  // Insert actual SVG\n  const svgHolder = document.createElement("div");\n  svgHolder.style.cssText = "width:100%;opacity:0.85;filter:saturate(0.3) brightness(0.5);";\n  svgHolder.innerHTML = svgContent;\n  // Make embedded SVG responsive\n  const svgEl = svgHolder.querySelector("svg");\n  if (svgEl) {\n    svgEl.style.width = "100%";\n    svgEl.style.height = "auto";\n    svgEl.style.display = "block";\n  }\n  wrap.appendChild(svgHolder);\n\n  // Overlay container for hotspots (sits on top of SVG)\n  const overlay = document.createElement("div");\n  overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;";\n  wrap.appendChild(overlay);\n\n  // Create clickable hotspots for front view\n  const hotspots = SVG_HOTSPOTS.front;\n  const mirrors = SVG_HOTSPOTS.rightMirror;\n\n  function createHotspot(region, bounds) {\n    const hs = document.createElement("div");\n    hs.style.cssText = `position:absolute;top:${bounds.top}%;left:${bounds.left}%;width:${bounds.width}%;height:${bounds.height}%;cursor:pointer;border-radius:4px;transition:background 0.15s;`;\n    const levelData = muscleLevels[region];\n    if (levelData) {\n      hs.style.background = levelData.color + "30";\n      hs.style.border = "1px solid " + levelData.color + "20";\n    }\n    hs.addEventListener("mouseenter", () => {\n      hs.style.background = (levelData ? levelData.color : "#9a8c7a") + "50";\n    });\n    hs.addEventListener("mouseleave", () => {\n      hs.style.background = levelData ? levelData.color + "30" : "transparent";\n    });\n    hs.addEventListener("click", (e) => {\n      e.stopPropagation();\n      if (onRegionClick) onRegionClick(region);\n    });\n    // Tooltip\n    const label = REGION_LABELS[region] || region;\n    hs.title = label + (levelData ? " \u2014 " + levelData.level : "");\n    overlay.appendChild(hs);\n  }\n\n  for (const [region, bounds] of Object.entries(hotspots)) {\n    createHotspot(region, bounds);\n  }\n  for (const [region, bounds] of Object.entries(mirrors)) {\n    createHotspot(region, bounds);\n  }\n\n  return wrap;\n}\n\n// Fallback: simple programmatic SVG (if actual SVG files not found in vault)\nfunction buildFallbackBodySvg(muscleLevels, onRegionClick) {\n  const untrained = "#1a1816";\n  function fill(region) {\n    const d = muscleLevels[region];\n    return d ? d.color + "90" : untrained;\n  }\n  function stroke(region) {\n    const d = muscleLevels[region];\n    return d ? d.color + "40" : "#2a2520";\n  }\n  const frontPaths = {\n    neck:\'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>\',\n    front_delts:\'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>\',\n    chest:\'<path d="M31,37 L49,37 L49,55 C49,57 42,60 33,58 L31,56 Z"/><path d="M51,37 L69,37 L69,56 L67,58 C58,60 51,57 51,55 Z"/>\',\n    biceps:\'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>\',\n    forearms:\'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>\',\n    core:\'<path d="M33,58 L67,58 L65,82 L35,82 Z"/>\',\n    quads:\'<path d="M35,84 L49,84 L48,136 L34,136 Z"/><path d="M51,84 L65,84 L66,136 L52,136 Z"/>\',\n    calves:\'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>\',\n  };\n  const ns = "http://www.w3.org/2000/svg";\n  const svg = document.createElementNS(ns, "svg");\n  svg.setAttribute("viewBox", "0 0 100 210");\n  svg.setAttribute("class", "otw-heatmap-svg");\n  const headG = document.createElementNS(ns, "g");\n  headG.innerHTML = \'<ellipse cx="50" cy="14" rx="10" ry="11" fill="#0c0c0c" stroke="#2a2520" stroke-width="0.8"/>\';\n  svg.appendChild(headG);\n  for (const [region, pathData] of Object.entries(frontPaths)) {\n    const g = document.createElementNS(ns, "g");\n    g.setAttribute("fill", fill(region));\n    g.setAttribute("stroke", stroke(region));\n    g.setAttribute("stroke-width", "0.6");\n    g.style.cursor = "pointer";\n    g.style.transition = "opacity 0.15s";\n    g.innerHTML = pathData;\n    g.addEventListener("mouseenter", () => { g.style.opacity = "0.7"; });\n    g.addEventListener("mouseleave", () => { g.style.opacity = "1"; });\n    g.addEventListener("click", (e) => { e.stopPropagation(); if (onRegionClick) onRegionClick(region); });\n    svg.appendChild(g);\n  }\n  return svg;\n}\n\n// \u2500\u2500 Muscle Progress Popup (when clicking a muscle on the heatmap) \u2500\u2500\n\nfunction showMuscleProgressPopup(regionId, muscleLevels) {\n  const label = REGION_LABELS[regionId] || regionId;\n  const levelData = muscleLevels[regionId];\n\n  createModal(label.toUpperCase(), (content) => {\n    // Current strength level\n    if (levelData) {\n      const li = STRENGTH_LEVELS[levelData.level];\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText = `background:${levelData.color}25;border:1px solid ${levelData.color}60;color:${levelData.color};margin:8px auto;display:inline-flex;`;\n      badge.textContent = (li?.icon || "\\u25CB") + " " + levelData.level.toUpperCase();\n      content.appendChild(badge);\n\n      if (levelData.progress !== undefined) {\n        const pb = document.createElement("div");\n        pb.className = "otw-strength-bar";\n        pb.style.marginTop = "12px";\n        content.appendChild(pb);\n        const fill = document.createElement("div");\n        fill.className = "otw-strength-fill";\n        fill.style.cssText = `width:${Math.min(100, levelData.progress)}%;background:${levelData.color};`;\n        pb.appendChild(fill);\n      }\n    } else {\n      const noData = document.createElement("div");\n      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-style:italic;padding:16px;font-size:12px;`;\n      noData.textContent = "No workout data for this muscle yet";\n      content.appendChild(noData);\n    }\n\n    // Monthly workout frequency chart\n    const chartLabel = document.createElement("div");\n    chartLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:20px;`;\n    chartLabel.textContent = "MONTHLY FREQUENCY";\n    content.appendChild(chartLabel);\n\n    // Find workouts that targeted this region in the last 30 days\n    const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n    const reverseMap = {};\n    for (const [muscle, regions] of Object.entries(MUSCLE_TO_REGION)) {\n      for (const r of regions) {\n        if (!reverseMap[r]) reverseMap[r] = [];\n        reverseMap[r].push(muscle);\n      }\n    }\n    const targetMuscles = reverseMap[regionId] || [];\n\n    // Count workouts per week (last 4 weeks)\n    const now = moment();\n    const weekCounts = [0, 0, 0, 0];\n    for (const wFile of allFiles) {\n      const fm = getFileMetadata(wFile.path);\n      if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n      const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n      if (!dateMatch) continue;\n      const fileDate = moment(dateMatch[1], "YYYY-MM-DD");\n      const daysAgo = now.diff(fileDate, "days");\n      if (daysAgo < 0 || daysAgo > 28) continue;\n      const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));\n      if (hasMuscle) {\n        const weekIdx = Math.floor(daysAgo / 7);\n        if (weekIdx < 4) weekCounts[3 - weekIdx]++;\n      }\n    }\n\n    renderLineChart(content, ["W1", "W2", "W3", "W4"], weekCounts);\n\n    // Toggle: monthly \u2194 yearly view\n    const toggleRow = document.createElement("div");\n    toggleRow.style.cssText = "display:flex;gap:6px;justify-content:center;margin-top:12px;";\n    content.appendChild(toggleRow);\n\n    const monthBtn = document.createElement("button");\n    monthBtn.textContent = "MONTHLY";\n    monthBtn.className = "otw-btn otw-btn-primary";\n    monthBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";\n\n    const yearBtn = document.createElement("button");\n    yearBtn.textContent = "YEARLY";\n    yearBtn.className = "otw-btn otw-btn-secondary";\n    yearBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";\n\n    toggleRow.appendChild(monthBtn);\n    toggleRow.appendChild(yearBtn);\n\n    const chartContainer = document.createElement("div");\n    content.appendChild(chartContainer);\n\n    function showMonthly() {\n      chartContainer.innerHTML = "";\n      renderLineChart(chartContainer, ["W1", "W2", "W3", "W4"], weekCounts);\n      monthBtn.className = "otw-btn otw-btn-primary";\n      monthBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";\n      yearBtn.className = "otw-btn otw-btn-secondary";\n      yearBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";\n    }\n\n    function showYearly() {\n      chartContainer.innerHTML = "";\n      const monthCounts = new Array(12).fill(0);\n      const monthLabels = ["J","F","M","A","M","J","J","A","S","O","N","D"];\n      for (const wFile of allFiles) {\n        const fm = getFileMetadata(wFile.path);\n        if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n        const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n        if (!dateMatch) continue;\n        const fileDate = moment(dateMatch[1], "YYYY-MM-DD");\n        if (now.diff(fileDate, "months") > 11) continue;\n        const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));\n        if (hasMuscle) monthCounts[fileDate.month()]++;\n      }\n      renderLineChart(chartContainer, monthLabels, monthCounts);\n      yearBtn.className = "otw-btn otw-btn-primary";\n      yearBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";\n      monthBtn.className = "otw-btn otw-btn-secondary";\n      monthBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";\n    }\n\n    monthBtn.onclick = showMonthly;\n    yearBtn.onclick = showYearly;\n  });\n}\n\n// \u2500\u2500 Overall Progress Popup (both overall + per-muscle) \u2500\u2500\n\nasync function showOverallProgressPopup(muscleLevels) {\n  createModal("STRENGTH PROGRESS", (content) => {\n    // 1) Overall strength trend \u2014 average strength level across all regions\n    const overLabel = document.createElement("div");\n    overLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:8px;`;\n    overLabel.textContent = "OVERALL STRENGTH";\n    content.appendChild(overLabel);\n\n    // Summarize current strength levels\n    const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];\n    const regionLevels = Object.entries(muscleLevels);\n    if (regionLevels.length === 0) {\n      const noData = document.createElement("div");\n      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-size:12px;font-style:italic;padding:12px;`;\n      noData.textContent = "Complete some workouts to see your strength progress";\n      content.appendChild(noData);\n    } else {\n      // Average progress value\n      let totalProgress = 0;\n      for (const [, data] of regionLevels) {\n        const idx = levelOrder.indexOf(data.level);\n        totalProgress += (idx / 5) * 100 + (data.progress || 0) * (1/5);\n      }\n      const avgProgress = totalProgress / regionLevels.length;\n      const avgLevelIdx = Math.min(5, Math.floor(avgProgress / 20));\n      const avgLevel = levelOrder[avgLevelIdx];\n      const avgColor = STRENGTH_LEVELS[avgLevel]?.color || "#6a6a6a";\n\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText = `background:${avgColor}25;border:1px solid ${avgColor}60;color:${avgColor};margin:0 auto 12px;display:inline-flex;`;\n      badge.textContent = avgLevel.toUpperCase() + " (avg)";\n      content.appendChild(badge);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      content.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, avgProgress)}%;background:${avgColor};`;\n      pb.appendChild(fill);\n    }\n\n    // Monthly completions chart (all workouts)\n    const allFiles = getFilesInFolder(SETTINGS.workoutFolder);\n    const now = moment();\n    const weekCounts = [0, 0, 0, 0];\n    for (const wFile of allFiles) {\n      const fm = getFileMetadata(wFile.path);\n      if (!fm || fm.Workout !== true) continue;\n      const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n      if (!dateMatch) continue;\n      const daysAgo = now.diff(moment(dateMatch[1], "YYYY-MM-DD"), "days");\n      if (daysAgo < 0 || daysAgo > 28) continue;\n      const weekIdx = Math.floor(daysAgo / 7);\n      if (weekIdx < 4) weekCounts[3 - weekIdx]++;\n    }\n\n    // Chart 1: Overall strength curve (workouts per week as a trend)\n    const c1Label = document.createElement("div");\n    c1Label.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:16px;`;\n    c1Label.textContent = "OVERALL STRENGTH";\n    content.appendChild(c1Label);\n    renderLineChart(content, ["W1", "W2", "W3", "W4"], weekCounts, THEME.color);\n\n    // Chart 2: Per-muscle multi-line breakdown\n    const musLabel = document.createElement("div");\n    musLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:20px;`;\n    musLabel.textContent = "BY MUSCLE GROUP";\n    content.appendChild(musLabel);\n\n    // Build per-muscle workout frequency data (last 4 weeks)\n    const muscleColors = ["#9a8c7a", "#a89860", "#7a9a7d", "#6a8a9a", "#8a7a9a", "#9a6a7a", "#6a5a4a"];\n    const muscleSeriesData = [];\n    let colorIdx = 0;\n    const reverseMapAll = {};\n    for (const [muscle, regions] of Object.entries(MUSCLE_TO_REGION)) {\n      for (const r of regions) {\n        if (!reverseMapAll[r]) reverseMapAll[r] = [];\n        reverseMapAll[r].push(muscle);\n      }\n    }\n\n    for (const [region, data] of regionLevels) {\n      const targetMuscles = reverseMapAll[region] || [];\n      const wkCounts = [0, 0, 0, 0];\n      for (const wFile of allFiles) {\n        const fm = getFileMetadata(wFile.path);\n        if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;\n        const dateMatch = wFile.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/);\n        if (!dateMatch) continue;\n        const daysAgo = now.diff(moment(dateMatch[1], "YYYY-MM-DD"), "days");\n        if (daysAgo < 0 || daysAgo > 28) continue;\n        const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));\n        if (hasMuscle) {\n          const weekIdx = Math.floor(daysAgo / 7);\n          if (weekIdx < 4) wkCounts[3 - weekIdx]++;\n        }\n      }\n      muscleSeriesData.push({\n        name: REGION_LABELS[region] || region,\n        values: wkCounts,\n        color: muscleColors[colorIdx % muscleColors.length],\n      });\n      colorIdx++;\n    }\n\n    if (muscleSeriesData.length > 0) {\n      renderMultiLineChart(content, ["W1", "W2", "W3", "W4"], muscleSeriesData);\n    } else {\n      const noData = document.createElement("div");\n      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-size:12px;font-style:italic;padding:12px;`;\n      noData.textContent = "Complete some workouts to see per-muscle trends";\n      content.appendChild(noData);\n    }\n  });\n}\n\n// \u2500\u2500 Line chart helper (used in progress popups \u2014 smooth curve) \u2500\u2500\n\nfunction renderLineChart(parent, labels, values, color) {\n  color = color || THEME.color;\n  const maxVal = Math.max(...values, 1);\n  const ns = "http://www.w3.org/2000/svg";\n  const w = 260, h = 80;\n  const padL = 4, padR = 4, padT = 8, padB = 16;\n  const chartW = w - padL - padR;\n  const chartH = h - padT - padB;\n\n  const svg = document.createElementNS(ns, "svg");\n  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);\n  svg.style.cssText = "width:100%;height:auto;display:block;margin:8px 0;";\n\n  // Grid lines\n  for (let g = 0; g <= 2; g++) {\n    const gy = padT + (g / 2) * chartH;\n    const line = document.createElementNS(ns, "line");\n    line.setAttribute("x1", String(padL)); line.setAttribute("x2", String(w - padR));\n    line.setAttribute("y1", String(gy)); line.setAttribute("y2", String(gy));\n    line.setAttribute("stroke", "rgba(154,140,122,0.08)"); line.setAttribute("stroke-width", "0.5");\n    svg.appendChild(line);\n  }\n\n  // Build points\n  const points = values.map((v, i) => {\n    const x = padL + (i / Math.max(1, values.length - 1)) * chartW;\n    const y = padT + chartH - (v / maxVal) * chartH;\n    return { x, y };\n  });\n\n  // Smooth curve (Catmull-Rom \u2192 cubic bezier)\n  if (points.length > 1) {\n    let d = `M ${points[0].x} ${points[0].y}`;\n    for (let i = 0; i < points.length - 1; i++) {\n      const p0 = points[Math.max(0, i - 1)];\n      const p1 = points[i];\n      const p2 = points[i + 1];\n      const p3 = points[Math.min(points.length - 1, i + 2)];\n      const cp1x = p1.x + (p2.x - p0.x) / 6;\n      const cp1y = p1.y + (p2.y - p0.y) / 6;\n      const cp2x = p2.x - (p3.x - p1.x) / 6;\n      const cp2y = p2.y - (p3.y - p1.y) / 6;\n      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;\n    }\n\n    // Area fill\n    const area = document.createElementNS(ns, "path");\n    const areaD = d + ` L ${points[points.length-1].x} ${padT + chartH} L ${points[0].x} ${padT + chartH} Z`;\n    area.setAttribute("d", areaD);\n    area.setAttribute("fill", color); area.setAttribute("opacity", "0.08");\n    svg.appendChild(area);\n\n    // Curve line\n    const path = document.createElementNS(ns, "path");\n    path.setAttribute("d", d);\n    path.setAttribute("fill", "none");\n    path.setAttribute("stroke", color); path.setAttribute("stroke-width", "1.5");\n    path.setAttribute("stroke-linecap", "round");\n    svg.appendChild(path);\n  }\n\n  // Data dots\n  for (const pt of points) {\n    const dot = document.createElementNS(ns, "circle");\n    dot.setAttribute("cx", String(pt.x)); dot.setAttribute("cy", String(pt.y));\n    dot.setAttribute("r", "2.5"); dot.setAttribute("fill", color);\n    svg.appendChild(dot);\n  }\n\n  // X-axis labels\n  for (let i = 0; i < labels.length; i++) {\n    const x = padL + (i / Math.max(1, labels.length - 1)) * chartW;\n    const txt = document.createElementNS(ns, "text");\n    txt.setAttribute("x", String(x)); txt.setAttribute("y", String(h - 2));\n    txt.setAttribute("text-anchor", "middle");\n    txt.setAttribute("fill", "rgba(154,140,122,0.4)"); txt.setAttribute("font-size", "7");\n    txt.textContent = labels[i];\n    svg.appendChild(txt);\n  }\n\n  parent.appendChild(svg);\n}\n\n// \u2500\u2500 Multi-line chart helper (for per-muscle breakdown) \u2500\u2500\n\nfunction renderMultiLineChart(parent, labels, series) {\n  const allVals = series.flatMap(s => s.values);\n  const maxVal = Math.max(...allVals, 1);\n  const ns = "http://www.w3.org/2000/svg";\n  const w = 260, h = 90;\n  const padL = 4, padR = 4, padT = 8, padB = 16;\n  const chartW = w - padL - padR;\n  const chartH = h - padT - padB;\n\n  const svg = document.createElementNS(ns, "svg");\n  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);\n  svg.style.cssText = "width:100%;height:auto;display:block;margin:8px 0;";\n\n  for (const s of series) {\n    const points = s.values.map((v, i) => ({\n      x: padL + (i / Math.max(1, s.values.length - 1)) * chartW,\n      y: padT + chartH - (v / maxVal) * chartH,\n    }));\n    if (points.length > 1) {\n      let d = `M ${points[0].x} ${points[0].y}`;\n      for (let i = 0; i < points.length - 1; i++) {\n        const p0 = points[Math.max(0, i - 1)];\n        const p1 = points[i];\n        const p2 = points[i + 1];\n        const p3 = points[Math.min(points.length - 1, i + 2)];\n        d += ` C ${p1.x+(p2.x-p0.x)/6} ${p1.y+(p2.y-p0.y)/6}, ${p2.x-(p3.x-p1.x)/6} ${p2.y-(p3.y-p1.y)/6}, ${p2.x} ${p2.y}`;\n      }\n      const path = document.createElementNS(ns, "path");\n      path.setAttribute("d", d); path.setAttribute("fill", "none");\n      path.setAttribute("stroke", s.color); path.setAttribute("stroke-width", "1.2");\n      path.setAttribute("stroke-linecap", "round"); path.setAttribute("opacity", "0.8");\n      svg.appendChild(path);\n    }\n  }\n\n  // X-axis labels\n  for (let i = 0; i < labels.length; i++) {\n    const x = padL + (i / Math.max(1, labels.length - 1)) * chartW;\n    const txt = document.createElementNS(ns, "text");\n    txt.setAttribute("x", String(x)); txt.setAttribute("y", String(h - 2));\n    txt.setAttribute("text-anchor", "middle");\n    txt.setAttribute("fill", "rgba(154,140,122,0.4)"); txt.setAttribute("font-size", "7");\n    txt.textContent = labels[i];\n    svg.appendChild(txt);\n  }\n  parent.appendChild(svg);\n\n  // Legend\n  const legend = document.createElement("div");\n  legend.style.cssText = "display:flex;flex-wrap:wrap;gap:6px 12px;justify-content:center;margin-top:4px;";\n  for (const s of series) {\n    const item = document.createElement("div");\n    item.style.cssText = "display:flex;align-items:center;gap:4px;font-size:9px;color:#6a5a4a;";\n    const dot = document.createElement("div");\n    dot.style.cssText = `width:6px;height:6px;border-radius:50%;background:${s.color};`;\n    item.appendChild(dot);\n    const nm = document.createElement("span");\n    nm.textContent = s.name;\n    item.appendChild(nm);\n    legend.appendChild(item);\n  }\n  parent.appendChild(legend);\n}\n\n// ============================================================\n// RENDER: STATS DASHBOARD\n// ============================================================\n\nasync function renderStatsSection(root) {\n  // Minimal weekly calendar\n  const weekData = getWeeklyCalendarData();\n  const weekGrid = document.createElement("div");\n  weekGrid.className = "otw-week-grid";\n  root.appendChild(weekGrid);\n\n  for (const day of weekData) {\n    const cell = document.createElement("div");\n    cell.className = "otw-week-day" + (day.isToday ? " today" : "") + (day.status ? " done" : "");\n    const lbl = document.createElement("div");\n    lbl.className = "otw-day-label";\n    lbl.textContent = day.label;\n    cell.appendChild(lbl);\n    const num = document.createElement("div");\n    num.className = "otw-day-num";\n    num.textContent = day.num;\n    cell.appendChild(num);\n    const icon = document.createElement("div");\n    icon.className = "otw-day-icon";\n    if (day.status === "done") {\n      if (day.type === "discipline") { icon.textContent = "\\uD83D\\uDC8E"; }\n      else if (day.type === "flow") { icon.textContent = "\\uD83C\\uDF0A"; }\n      else { icon.textContent = "\\u2713"; icon.style.color = THEME.systemGreen; }\n    } else if (day.isToday) {\n      icon.textContent = "\\u2022"; icon.style.color = THEME.color; icon.style.animation = "otw-pulse-glow 2s ease-in-out infinite";\n    } else if (day.isPast) {\n      icon.textContent = "\\u2014"; icon.style.color = "#2a2520";\n    }\n    cell.appendChild(icon);\n    weekGrid.appendChild(cell);\n  }\n\n  // Body Strength Heatmap \u2014 using actual SVG file\n  const muscleLevels = await getMuscleLevelData();\n  const svgContent = await loadBodySvg();\n\n  if (svgContent) {\n    // Use actual Muscle Man/Woman SVG with overlay hotspots\n    const svgFigure = buildSvgWithOverlay(svgContent, muscleLevels, (region) => {\n      showMuscleProgressPopup(region, muscleLevels);\n    });\n    svgFigure.style.margin = "16px auto 8px";\n    root.appendChild(svgFigure);\n  } else {\n    // Fallback to programmatic SVG\n    const hmWrap = document.createElement("div");\n    hmWrap.className = "otw-heatmap-wrap";\n    root.appendChild(hmWrap);\n    const fallbackSvg = buildFallbackBodySvg(muscleLevels, (region) => {\n      showMuscleProgressPopup(region, muscleLevels);\n    });\n    hmWrap.appendChild(fallbackSvg);\n  }\n\n  // Compact legend\n  const legend = document.createElement("div");\n  legend.className = "otw-heatmap-legend";\n  const legendItems = [\n    { label: "Untrained", color: "#6a6a6a" },\n    { label: "Beginner", color: "#a89860" },\n    { label: "Intermediate", color: "#6a8a9a" },\n    { label: "Elite", color: "#9a6a7a" },\n  ];\n  for (const item of legendItems) {\n    const li = document.createElement("div");\n    li.className = "otw-heatmap-legend-item";\n    const dot = document.createElement("div");\n    dot.className = "otw-heatmap-legend-dot";\n    dot.style.background = item.color;\n    li.appendChild(dot);\n    const txt = document.createElement("span");\n    txt.textContent = item.label;\n    li.appendChild(txt);\n    legend.appendChild(li);\n  }\n  root.appendChild(legend);\n\n  // "Progress" button\n  const progressBtn = document.createElement("button");\n  progressBtn.textContent = "PROGRESS";\n  progressBtn.className = "otw-btn otw-btn-secondary";\n  progressBtn.style.cssText += "width:100%;margin-top:8px;font-size:11px;padding:10px;";\n  progressBtn.onclick = () => showOverallProgressPopup(muscleLevels);\n  root.appendChild(progressBtn);\n}\n\n// ============================================================\n// RENDER: MUSCLE GROUP SELECTION (first-time entry)\n// ============================================================\n\nasync function renderMuscleSelection(root) {\n  const selectedMuscles = new Set();\n  const selectedSubgroups = new Map();\n\n  // \u2500\u2500 "Start New Workout" button HIGH at the top \u2500\u2500\n  const startBtnTop = document.createElement("button");\n  startBtnTop.textContent = "\\uD83C\\uDFCB\\uFE0F START NEW WORKOUT";\n  startBtnTop.className = "otw-btn otw-btn-primary";\n  startBtnTop.style.cssText += "padding:14px 24px;font-size:14px;font-weight:700;width:100%;margin-bottom:16px;";\n  startBtnTop.onclick = () => scrollToMuscleSelect();\n  root.appendChild(startBtnTop);\n\n  // Stats dashboard\n  await renderStatsSection(root);\n\n  // \u2500\u2500 Muscle Selection Section \u2500\u2500\n  const selAnchor = document.createElement("div");\n  selAnchor.id = "otw-muscle-select";\n  root.appendChild(selAnchor);\n\n  function scrollToMuscleSelect() {\n    selAnchor.scrollIntoView({ behavior: "smooth", block: "start" });\n  }\n\n  const selLabel = document.createElement("div");\n  selLabel.className = "otw-section-label";\n  selLabel.style.marginTop = "28px";\n  selLabel.textContent = "SELECT MUSCLE GROUPS";\n  root.appendChild(selLabel);\n\n  const selDesc = document.createElement("div");\n  selDesc.style.cssText = `color:${THEME.colorMuted};font-size:11px;text-align:center;margin-bottom:12px;`;\n  selDesc.textContent = "Tap muscles on the figure or use the buttons below";\n  root.appendChild(selDesc);\n\n  // Region \u2192 parent muscle group mapping for the selector\n  const REGION_TO_MUSCLE = {\n    neck: "Neck", chest: "Chest", front_delts: "Shoulders", rear_delts: "Shoulders",\n    biceps: "Arms", triceps: "Arms", forearms: "Arms", core: "Core",\n    quads: "Legs", calves: "Legs", hamstrings: "Legs", glutes: "Legs",\n    traps: "Back", lats: "Back", lower_back: "Back",\n  };\n\n  // Build interactive muscle selector with actual SVG\n  const svgContent = await loadBodySvg();\n  const selectorOverlayEls = []; // for visual updates\n\n  if (svgContent) {\n    // Use actual SVG with overlay hotspots for selection\n    const selectorWrap = document.createElement("div");\n    selectorWrap.style.cssText = "position:relative;width:100%;max-width:220px;margin:0 auto 12px;";\n\n    const svgHolder = document.createElement("div");\n    svgHolder.style.cssText = "width:100%;filter:saturate(0.15) brightness(0.4);transition:filter 0.3s;";\n    svgHolder.innerHTML = svgContent;\n    const svgEl = svgHolder.querySelector("svg");\n    if (svgEl) { svgEl.style.width = "100%"; svgEl.style.height = "auto"; svgEl.style.display = "block"; }\n    selectorWrap.appendChild(svgHolder);\n\n    const overlay = document.createElement("div");\n    overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;";\n    selectorWrap.appendChild(overlay);\n\n    // Create hotspots for selection\n    const allHotspots = { ...SVG_HOTSPOTS.front, ...SVG_HOTSPOTS.rightMirror };\n    for (const [region, bounds] of Object.entries(allHotspots)) {\n      const hs = document.createElement("div");\n      hs.style.cssText = `position:absolute;top:${bounds.top}%;left:${bounds.left}%;width:${bounds.width}%;height:${bounds.height}%;cursor:pointer;border-radius:4px;transition:background 0.15s, border-color 0.15s;border:1px solid transparent;`;\n      hs.dataset.region = region;\n      selectorOverlayEls.push(hs);\n\n      hs.addEventListener("click", (e) => {\n        e.stopPropagation();\n        const parentMuscle = REGION_TO_MUSCLE[region];\n        if (!parentMuscle) return;\n        if (selectedMuscles.has(parentMuscle)) {\n          selectedMuscles.delete(parentMuscle);\n        } else {\n          selectedMuscles.add(parentMuscle);\n        }\n        updateSelectorVisuals();\n        updateToggleButtons();\n      });\n      overlay.appendChild(hs);\n    }\n\n    root.appendChild(selectorWrap);\n  } else {\n    // Fallback: programmatic SVG selector\n    const selectorWrap = document.createElement("div");\n    selectorWrap.className = "otw-heatmap-wrap";\n    selectorWrap.style.marginBottom = "12px";\n    root.appendChild(selectorWrap);\n\n    const ns = "http://www.w3.org/2000/svg";\n    const frontPaths = {\n      neck:\'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>\',\n      front_delts:\'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>\',\n      chest:\'<path d="M31,37 L49,37 L49,55 C49,57 42,60 33,58 L31,56 Z"/><path d="M51,37 L69,37 L69,56 L67,58 C58,60 51,57 51,55 Z"/>\',\n      biceps:\'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>\',\n      forearms:\'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>\',\n      core:\'<path d="M33,58 L67,58 L65,82 L35,82 Z"/>\',\n      quads:\'<path d="M35,84 L49,84 L48,136 L34,136 Z"/><path d="M51,84 L65,84 L66,136 L52,136 Z"/>\',\n      calves:\'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>\',\n    };\n    const svg = document.createElementNS(ns, "svg");\n    svg.setAttribute("viewBox", "0 0 100 210");\n    svg.setAttribute("class", "otw-heatmap-svg");\n    const headG = document.createElementNS(ns, "g");\n    headG.innerHTML = \'<ellipse cx="50" cy="14" rx="10" ry="11" fill="#0c0c0c" stroke="#2a2520" stroke-width="0.8"/>\';\n    svg.appendChild(headG);\n    for (const [region, pathData] of Object.entries(frontPaths)) {\n      const g = document.createElementNS(ns, "g");\n      g.setAttribute("fill", "#1a1816"); g.setAttribute("stroke", "#2a2520"); g.setAttribute("stroke-width", "0.6");\n      g.style.cursor = "pointer"; g.style.transition = "fill 0.15s"; g.innerHTML = pathData;\n      selectorOverlayEls.push(g);\n      g.dataset.region = region;\n      g.addEventListener("click", (e) => {\n        e.stopPropagation();\n        const parentMuscle = REGION_TO_MUSCLE[region];\n        if (!parentMuscle) return;\n        if (selectedMuscles.has(parentMuscle)) selectedMuscles.delete(parentMuscle);\n        else selectedMuscles.add(parentMuscle);\n        updateSelectorVisuals();\n        updateToggleButtons();\n      });\n      svg.appendChild(g);\n    }\n    selectorWrap.appendChild(svg);\n  }\n\n  function updateSelectorVisuals() {\n    for (const el of selectorOverlayEls) {\n      const region = el.dataset.region;\n      const parentMuscle = REGION_TO_MUSCLE[region];\n      const isSelected = parentMuscle && selectedMuscles.has(parentMuscle);\n      if (el.tagName === "DIV" || el.tagName === "div") {\n        // Overlay hotspot div\n        el.style.background = isSelected ? THEME.color + "40" : "transparent";\n        el.style.borderColor = isSelected ? THEME.color + "60" : "transparent";\n      } else {\n        // SVG group\n        el.setAttribute("fill", isSelected ? THEME.color + "80" : "#1a1816");\n        el.setAttribute("stroke", isSelected ? THEME.color + "60" : "#2a2520");\n      }\n    }\n  }\n\n  // Muscle group toggle buttons (still available as secondary selection method)\n  const muscleGrid = document.createElement("div");\n  muscleGrid.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:8px;";\n  root.appendChild(muscleGrid);\n\n  const subgroupArea = document.createElement("div");\n  subgroupArea.style.cssText = "display:flex;flex-direction:column;gap:8px;width:100%;";\n  root.appendChild(subgroupArea);\n\n  const toggleButtons = new Map();\n\n  Object.entries(MUSCLE_GROUPS).forEach(([name, config]) => {\n    const btn = document.createElement("button");\n    btn.className = "otw-muscle-toggle";\n    btn.textContent = `${config.icon} ${name}`;\n    muscleGrid.appendChild(btn);\n    toggleButtons.set(name, btn);\n\n    let subgroupContainer = null;\n    if (config.subgroups) {\n      subgroupContainer = document.createElement("div");\n      subgroupContainer.className = "otw-subgroup-container";\n      subgroupContainer.style.cssText += `display:flex;flex-wrap:wrap;gap:8px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:4px;`;\n      const subLabel = document.createElement("div");\n      subLabel.style.cssText = `width:100%;color:${THEME.colorMuted};font-size:11px;margin-bottom:4px;`;\n      subLabel.textContent = name + " subgroups:";\n      subgroupContainer.appendChild(subLabel);\n      selectedSubgroups.set(name, new Set());\n\n      config.subgroups.forEach(sub => {\n        const subBtn = document.createElement("button");\n        subBtn.className = "otw-sub-toggle";\n        subBtn.textContent = sub;\n        subBtn.onclick = (e) => {\n          e.stopPropagation();\n          const subs = selectedSubgroups.get(name);\n          if (subs.has(sub)) { subs.delete(sub); subBtn.classList.remove("active"); }\n          else { subs.add(sub); subBtn.classList.add("active"); }\n        };\n        subgroupContainer.appendChild(subBtn);\n      });\n      subgroupArea.appendChild(subgroupContainer);\n    }\n\n    btn.onclick = () => {\n      if (selectedMuscles.has(name)) {\n        selectedMuscles.delete(name);\n        btn.classList.remove("active");\n        if (subgroupContainer) subgroupContainer.classList.remove("expanded");\n      } else {\n        selectedMuscles.add(name);\n        btn.classList.add("active");\n        if (subgroupContainer) subgroupContainer.classList.add("expanded");\n      }\n      updateSelectorVisuals();\n    };\n  });\n\n  function updateToggleButtons() {\n    for (const [name, btn] of toggleButtons) {\n      if (selectedMuscles.has(name)) {\n        btn.classList.add("active");\n      } else {\n        btn.classList.remove("active");\n      }\n    }\n  }\n\n  // Start button (bottom)\n  const startBtn = document.createElement("button");\n  startBtn.textContent = "\\uD83C\\uDFCB\\uFE0F START WORKOUT";\n  startBtn.className = "otw-btn otw-btn-primary";\n  startBtn.style.cssText += "padding:16px 24px;font-size:15px;font-weight:700;margin-top:16px;";\n  startBtn.onclick = async () => {\n    if (selectedMuscles.size === 0) { notice("Please select at least one muscle group"); return; }\n\n    // Build final muscle list: use subgroups if selected, otherwise the parent group\n    const muscleGroupsArray = [];\n    selectedMuscles.forEach(muscle => {\n      const subs = selectedSubgroups.get(muscle);\n      if (subs && subs.size > 0) {\n        subs.forEach(sub => muscleGroupsArray.push(sub));\n      } else {\n        muscleGroupsArray.push(muscle);\n      }\n    });\n\n    // Load previous exercises for these muscle groups\n    const loadedExercises = loadPreviousExercises(muscleGroupsArray);\n\n    // Save to frontmatter and update local state\n    muscleGroups = muscleGroupsArray;\n    exercises = loadedExercises;\n    currentMuscleIndex = 0;\n\n    await setMultipleData({\n      muscleGroups: muscleGroups,\n      exercises: exercises,\n      currentMuscleIndex: 0,\n      Workout: false,\n      "Workout-Type": "",\n      Timestamp: moment().format(),\n    });\n\n    // Re-render \u2014 now we\'ll enter workout tracking mode\n    render();\n  };\n  root.appendChild(startBtn);\n}\n\n// ============================================================\n// MAIN RENDER\n// ============================================================\n\nasync function render() {\n  container.innerHTML = "";\n  const root = document.createElement("div");\n  root.className = "otw-container";\n  container.appendChild(root);\n\n  // If workout is already completed, show summary\n  if (isCompleted && getData("Workout-Type")) {\n    const wType = getData("Workout-Type");\n    const summaryCard = document.createElement("div");\n    summaryCard.className = "otw-card otw-card-breathe";\n    summaryCard.style.textAlign = "center";\n    summaryCard.style.padding = "32px";\n    addCorners(summaryCard, THEME.systemGreen);\n    summaryCard.innerHTML = `\n      <div style="font-size:32px;margin-bottom:12px;">${wType === "discipline" ? "\\uD83D\\uDC8E" : "\\uD83C\\uDF0A"}</div>\n      <h2 style="margin:0;color:${THEME.systemGreen};font-size:16px;letter-spacing:3px;text-transform:uppercase;">WORKOUT COMPLETE</h2>\n      <div style="color:${THEME.colorMuted};font-size:13px;margin-top:8px;font-style:italic;">${wType === "discipline" ? "Discipline Win" : "Flow State"}</div>\n      <div style="color:${THEME.colorMuted};font-size:11px;margin-top:16px;">${moment(getData("Timestamp")).format("MMM D, YYYY \\u2014 h:mm A")}</div>\n    `;\n    root.appendChild(summaryCard);\n\n    // Show exercises summary\n    if (exercises.length > 0) {\n      const exSummary = document.createElement("div");\n      exSummary.className = "otw-card";\n      addCorners(exSummary, THEME.color);\n      const exTitle = document.createElement("div");\n      exTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:12px;`;\n      exTitle.textContent = "SESSION SUMMARY";\n      exSummary.appendChild(exTitle);\n      for (const ex of exercises) {\n        const completedSets = ex.sets.filter((s) => !s.isWarmup && s.completed).length;\n        const totalSets = ex.sets.filter((s) => !s.isWarmup).length;\n        const row = document.createElement("div");\n        row.style.cssText = `display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${THEME.colorBorder};`;\n        row.innerHTML = `<span style="color:${THEME.color};font-weight:600;">${ex.name}</span><span style="color:${THEME.colorMuted};font-size:12px;">${completedSets}/${totalSets} sets</span>`;\n        exSummary.appendChild(row);\n      }\n      root.appendChild(exSummary);\n    }\n    return;\n  }\n\n  // No muscle groups selected yet \u2014 show selection screen\n  if (muscleGroups.length === 0) {\n    await renderMuscleSelection(root);\n    return;\n  }\n\n  // \u2500\u2500 Active Workout UI \u2500\u2500\n  const currentMuscle = muscleGroups[currentMuscleIndex] || muscleGroups[0];\n  const muscleExercises = exercises.filter((e) => e.muscle === currentMuscle || e.muscleGroup === currentMuscle);\n\n  // Header\n  const header = document.createElement("div");\n  header.className = "otw-card otw-card-breathe otw-header";\n  addCorners(header, THEME.color);\n  const title = document.createElement("h2");\n  title.className = "otw-title";\n  title.textContent = currentMuscle.toUpperCase();\n  header.appendChild(title);\n  const progressLabel = document.createElement("div");\n  progressLabel.className = "otw-progress-label";\n  progressLabel.textContent = (currentMuscleIndex + 1) + " / " + muscleGroups.length;\n  header.appendChild(progressLabel);\n  root.appendChild(header);\n\n  // Exercises\n  const exContainer = document.createElement("div");\n  exContainer.style.cssText = "display:flex;flex-direction:column;gap:16px;";\n  root.appendChild(exContainer);\n\n  if (muscleExercises.length === 0) {\n    const empty = document.createElement("div");\n    empty.style.cssText = `text-align:center;padding:40px 20px;background:#0f0f0f;border:1px dashed ${THEME.colorBorder};`;\n    empty.innerHTML = `<p style="color:${THEME.colorMuted};margin:0;">No exercises for ${currentMuscle} yet.</p>`;\n    exContainer.appendChild(empty);\n  } else {\n    for (const ex of muscleExercises) {\n      await renderExercise(exContainer, ex);\n    }\n  }\n\n  // Add exercise button\n  const addExBtn = document.createElement("button");\n  addExBtn.textContent = "+ ADD EXERCISE";\n  addExBtn.className = "otw-btn otw-btn-dashed";\n  addExBtn.style.marginTop = "16px";\n  addExBtn.onclick = () => openAddExerciseModal(currentMuscle);\n  root.appendChild(addExBtn);\n\n  // Navigation\n  const nav = document.createElement("div");\n  nav.className = "otw-nav-row";\n  root.appendChild(nav);\n\n  if (currentMuscleIndex > 0) {\n    const prevBtn = document.createElement("button");\n    prevBtn.textContent = "\\u2190 PREVIOUS";\n    prevBtn.className = "otw-btn otw-btn-secondary";\n    prevBtn.onclick = async () => { currentMuscleIndex--; await saveState(); render(); };\n    nav.appendChild(prevBtn);\n  }\n\n  if (currentMuscleIndex < muscleGroups.length - 1) {\n    const nextBtn = document.createElement("button");\n    nextBtn.textContent = "NEXT MUSCLE \\u2192";\n    nextBtn.className = "otw-btn otw-btn-primary";\n    nextBtn.onclick = async () => { currentMuscleIndex++; await saveState(); render(); };\n    nav.appendChild(nextBtn);\n  } else {\n    const finishBtn = document.createElement("button");\n    finishBtn.textContent = "\\u2713 FINISH WORKOUT";\n    finishBtn.className = "otw-btn otw-btn-finish";\n    finishBtn.onclick = () => openFinishModal();\n    nav.appendChild(finishBtn);\n  }\n}\n\n// \u2500\u2500 Boot \u2500\u2500\nreturn render();\n';

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvU3RyZW5ndGhIZWF0bWFwLnRzIiwgInNyYy9jb21wb25lbnRzL1dlaWdodFByb2dyZXNzLnRzIiwgInNyYy92aWV3cy9Xb3Jrc3BhY2VWaWV3LnRzIiwgInNyYy9zZXR0aW5ncy9PbGVuU2V0dGluZ3MudHMiLCAic3JjL3RlbXBsYXRlcy9UZW1wbGF0ZUVuZ2luZS50cyIsICJzcmMvdGVtcGxhdGVzL2J1aWx0aW5zL3dvcmtvdXQudHBsIiwgInNyYy90ZW1wbGF0ZXMvYnVpbHRpbnMvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgUGx1Z2luIEVudHJ5IFBvaW50XG4vLyBSZWdpc3RlcnMgdmlld3MsIGNvbW1hbmRzLCByaWJib24gaWNvbiwgc2V0dGluZ3MgbWlncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgUGx1Z2luLCBkZWJvdW5jZSwgVEZpbGUsIE5vdGljZSwgTWFya2Rvd25WaWV3IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgVHJhY2tIYWJpdFJhbmtEYXRhLCBBY3Rpdml0eUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiwgVklFV19UWVBFX1dPUktTUEFDRSwgREVGQVVMVF9PTEVOX1NFVFRJTkdTLCBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsIERFRkFVTFRfUEVSU09OQUxfU1RBVFMgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERhc2hib2FyZFZpZXcgfSBmcm9tIFwiLi92aWV3cy9EYXNoYm9hcmRWaWV3XCI7XG5pbXBvcnQgeyBXb3Jrc3BhY2VWaWV3IH0gZnJvbSBcIi4vdmlld3MvV29ya3NwYWNlVmlld1wiO1xuaW1wb3J0IHsgT2xlblNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy9PbGVuU2V0dGluZ3NcIjtcbmltcG9ydCB7IFRlbXBsYXRlRW5naW5lIH0gZnJvbSBcIi4vdGVtcGxhdGVzL1RlbXBsYXRlRW5naW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9sZW5QbHVnaW4gZXh0ZW5kcyBQbHVnaW4ge1xuICBzZXR0aW5ncyE6IE9sZW5TZXR0aW5ncztcbiAgdGVtcGxhdGVFbmdpbmUhOiBUZW1wbGF0ZUVuZ2luZTtcblxuICBhc3luYyBvbmxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTG9hZCBzZXR0aW5ncyB3aXRoIGRlZmF1bHRzXG4gICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUyxcbiAgICAgIGF3YWl0IHRoaXMubG9hZERhdGEoKVxuICAgICk7XG5cbiAgICAvLyBFbnN1cmUgZGVlcCBkZWZhdWx0cyBmb3IgbmVzdGVkIG9iamVjdHNcbiAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5kZXZDb25maWcsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZ1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcubGFiZWxzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmRldkNvbmZpZy5sYWJlbHMsXG4gICAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlDb2xvcnMsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFAgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuY2F0ZWdvcnlYUCxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUFxuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYWxlbmRhciA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX1BFUlNPTkFMX1NUQVRTLFxuICAgICAgdGhpcy5zZXR0aW5ncy5wZXJzb25hbFN0YXRzXG4gICAgKTtcblxuICAgIC8vIE1pZ3JhdGUgbGVnYWN5IGZpZWxkIG5hbWVzIGZyb20gc2Vzc2lvbiBcdTIxOTIgd29ya3NwYWNlXG4gICAgYXdhaXQgdGhpcy5taWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIFRlbXBsYXRlIEVuZ2luZVxuICAgIHRoaXMudGVtcGxhdGVFbmdpbmUgPSBuZXcgVGVtcGxhdGVFbmdpbmUodGhpcy5hcHAsIHRoaXMpO1xuXG4gICAgLy8gTWlncmF0ZSBmcm9tIFRyYWNrSGFiaXRSYW5rIG9uIGZpcnN0IHJ1blxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5taWdyYXRlZCkge1xuICAgICAgYXdhaXQgdGhpcy5taWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgbWFpbiBkYXNoYm9hcmQgdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX09MRU4sXG4gICAgICAobGVhZikgPT4gbmV3IERhc2hib2FyZFZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmVnaXN0ZXIgd29ya3NwYWNlIHZpZXdcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhcbiAgICAgIFZJRVdfVFlQRV9XT1JLU1BBQ0UsXG4gICAgICAobGVhZikgPT4gbmV3IFdvcmtzcGFjZVZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmliYm9uIGljb25cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oXCJjb21wYXNzXCIsIFwiT3BlbiBPbGVuXCIsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmRzXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcIm9wZW4tb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiT3BlbiBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJyZWZyZXNoLW9sZW4tZGFzaGJvYXJkXCIsXG4gICAgICBuYW1lOiBcIlJlZnJlc2ggT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJhZGQtcXVpY2stdGFza1wiLFxuICAgICAgbmFtZTogXCJBZGQgUXVpY2sgVGFza1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvd1F1aWNrVGFza0RpYWxvZygpLFxuICAgIH0pO1xuXG4gICAgLy8gQ2FsZW5kYXIgcGx1Z2luIGludGVncmF0aW9uIFx1MjAxNCBpbmplY3QgT2xlbiBtZXRhZGF0YSBpbnRvIENhbGVuZGFyIHBsdWdpblxuICAgIHRoaXMucmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpO1xuXG4gICAgLy8gRGVib3VuY2VkIGZpbGUgd2F0Y2hlciBmb3IgbWV0YWRhdGEgY2hhbmdlc1xuICAgIGNvbnN0IHJlZnJlc2ggPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICB9LCAzMDApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKCkgPT4gcmVmcmVzaCgpKVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcImNyZWF0ZVwiLCBhc3luYyAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSB0byBiZSBpbmRleGVkXG4gICAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCAxNSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcInJlbmFtZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2xlblNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogRnJvbnRtYXR0ZXItZHJpdmVuIHJlbmRlcmluZyAtLS1cbiAgICB0aGlzLnJlZ2lzdGVyVGVtcGxhdGVQb3N0UHJvY2Vzc29yKCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIHRlbXBsYXRlIGNhY2hlIHdoZW4gdGVtcGxhdGUgLmpzIGZpbGVzIGFyZSBtb2RpZmllZFxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwibW9kaWZ5XCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwianNcIikge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKGZpbGUucGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIC8vIENsZWFudXAgaGFuZGxlZCBieSBEYXNoYm9hcmRWaWV3Lm9uQ2xvc2UoKVxuICB9XG5cbiAgLy8gLS0tIFZpZXcgTWFuYWdlbWVudCAtLS1cblxuICBhc3luYyBhY3RpdmF0ZURhc2hib2FyZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG4gICAgbGV0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKVswXTtcblxuICAgIGlmICghbGVhZikge1xuICAgICAgY29uc3QgbmV3TGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgICAgaWYgKCFuZXdMZWFmKSByZXR1cm47XG4gICAgICBhd2FpdCBuZXdMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9PTEVOLCBhY3RpdmU6IHRydWUgfSk7XG4gICAgICBsZWFmID0gbmV3TGVhZjtcbiAgICB9XG5cbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIHJlZnJlc2hEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldyBhcyB1bmtub3duIGFzIERhc2hib2FyZFZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlV29ya3NwYWNlVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG5cbiAgICAvLyBDbG9zZSBleGlzdGluZyB3b3Jrc3BhY2Ugdmlld3NcbiAgICB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9XT1JLU1BBQ0UpLmZvckVhY2goKGxlYWYpID0+IGxlYWYuZGV0YWNoKCkpO1xuXG4gICAgLy8gT3BlbiB3b3Jrc3BhY2UgaW4gdGhlIHNhbWUgdGFiIGFzIHRoZSBkYXNoYm9hcmQgaWYgcG9zc2libGVcbiAgICBjb25zdCBkYXNoTGVhdmVzID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgY29uc3QgdGFyZ2V0TGVhZiA9IGRhc2hMZWF2ZXNbMF0gPz8gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgaWYgKCF0YXJnZXRMZWFmKSByZXR1cm47XG5cbiAgICBhd2FpdCB0YXJnZXRMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZih0YXJnZXRMZWFmKTtcbiAgfVxuXG4gIGFjdGl2YXRlRGFzaGJvYXJkVmlldygpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlRGFzaGJvYXJkKCk7XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgUmVnaXN0cnk6IFBvc3QtUHJvY2Vzc29yIC0tLVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJUZW1wbGF0ZVBvc3RQcm9jZXNzb3IoKTogdm9pZCB7XG4gICAgLy8gVHJhY2sgd2hpY2ggZmlsZXMgd2UndmUgYWxyZWFkeSByZW5kZXJlZCB0ZW1wbGF0ZXMgZm9yIGluIHRoZSBjdXJyZW50XG4gICAgLy8gdmlldyBjeWNsZSwgdG8gYXZvaWQgZHVwbGljYXRlIHJlbmRlcmluZyBhY3Jvc3MgbXVsdGlwbGUgc2VjdGlvbnMuXG4gICAgY29uc3QgcmVuZGVyZWRGaWxlcyA9IG5ldyBXZWFrU2V0PEhUTUxFbGVtZW50PigpO1xuXG4gICAgdGhpcy5yZWdpc3Rlck1hcmtkb3duUG9zdFByb2Nlc3Nvcihhc3luYyAoZWwsIGN0eCkgPT4ge1xuICAgICAgLy8gRmluZCB0aGUgZmlsZSBiZWluZyByZW5kZXJlZFxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChjdHguc291cmNlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIC8vIENoZWNrIGZyb250bWF0dGVyIGZvciBhbiBcImFjdGl2aXR5XCIgZmllbGRcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBjb25zdCBhY3Rpdml0eVR5cGUgPSBjYWNoZT8uZnJvbnRtYXR0ZXI/LmFjdGl2aXR5IGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgIC8vIExvb2sgdXAgdGVtcGxhdGUgaW4gdGhlIHJlZ2lzdHJ5XG4gICAgICBjb25zdCBlbnRyeSA9IHRoaXMudGVtcGxhdGVFbmdpbmUuZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZSk7XG4gICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZSByZW5kZXJpbmc6IGNoZWNrIHRoZSBwYXJlbnQgcHJldmlldyBjb250YWluZXJcbiAgICAgIGNvbnN0IHByZXZpZXdTaXplciA9IGVsLmNsb3Nlc3QoXCIubWFya2Rvd24tcHJldmlldy1zaXplclwiKSA/PyBlbC5wYXJlbnRFbGVtZW50O1xuICAgICAgaWYgKHByZXZpZXdTaXplciAmJiByZW5kZXJlZEZpbGVzLmhhcyhwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpKSByZXR1cm47XG4gICAgICBpZiAocHJldmlld1NpemVyKSByZW5kZXJlZEZpbGVzLmFkZChwcmV2aWV3U2l6ZXIgYXMgSFRNTEVsZW1lbnQpO1xuXG4gICAgICAvLyBDbGVhciBkZWZhdWx0IHJlbmRlcmVkIGNvbnRlbnQgYW5kIGluamVjdCB0ZW1wbGF0ZVxuICAgICAgZWwuZW1wdHkoKTtcbiAgICAgIGVsLmFkZENsYXNzKFwib2xlbi10ZW1wbGF0ZS1ob3N0XCIpO1xuXG4gICAgICBjb25zdCBjb250YWluZXIgPSBlbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1yb290XCIgfSk7XG5cbiAgICAgIGF3YWl0IHRoaXMudGVtcGxhdGVFbmdpbmUucmVuZGVyKGVudHJ5LnRlbXBsYXRlSWQsIGZpbGUsIGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvLyBBbHNvIGhhbmRsZSBmaWxlLW9wZW4gZm9yIG5vdGVzIHdpdGggb25seSBmcm9udG1hdHRlciAobm8gYm9keSBzZWN0aW9ucylcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgYXN5bmMgKGxlYWYpID0+IHtcbiAgICAgICAgaWYgKCFsZWFmKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICAgIGlmICghKHZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmlsZSA9IHZpZXcuZmlsZTtcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgLy8gU21hbGwgZGVsYXkgdG8gbGV0IG1ldGFkYXRhIGNhY2hlIHBvcHVsYXRlXG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlUeXBlID0gY2FjaGU/LmZyb250bWF0dGVyPy5hY3Rpdml0eSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLnRlbXBsYXRlRW5naW5lLmZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGUpO1xuICAgICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYSB0ZW1wbGF0ZSBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ5IHRoZSBwb3N0LXByb2Nlc3NvclxuICAgICAgICBjb25zdCBjb250ZW50RWwgPSB2aWV3LmNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFya2Rvd24tcmVhZGluZy12aWV3IC5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpO1xuICAgICAgICBpZiAoY29udGVudEVsPy5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tdGVtcGxhdGUtcm9vdFwiKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIGluIHJlYWRpbmcgbW9kZSBidXQgbm8gdGVtcGxhdGUgd2FzIGluamVjdGVkIChlbXB0eSBib2R5IG5vdGUpLFxuICAgICAgICAvLyBpbmplY3QgaW50byB0aGUgcHJldmlldyBjb250ZW50XG4gICAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiO1xuICAgICAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVJZCwgZmlsZSwgY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIFBsdWdpbiBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsZW5kYXJQbHVnaW5Tb3VyY2UoKTogdm9pZCB7XG4gICAgLy8gTGlzdGVuIGZvciB0aGUgQ2FsZW5kYXIgcGx1Z2luJ3MgXCJjYWxlbmRhcjpvcGVuXCIgZXZlbnRcbiAgICAvLyBhbmQgaW5qZWN0IE9sZW4ncyBhY3Rpdml0eSBjb21wbGV0aW9uIGRhdGEgYXMgY29sb3JlZCBkb3RzXG4gICAgKHRoaXMuYXBwLndvcmtzcGFjZSBhcyBhbnkpLm9uKFwiY2FsZW5kYXI6b3BlblwiLCAoc291cmNlczogYW55W10pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkgcmV0dXJuO1xuXG4gICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICBnZXREYWlseU1ldGFkYXRhOiAoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUuZm9ybWF0Py4oXCJZWVlZLU1NLUREXCIpID8/IFwiXCI7XG4gICAgICAgICAgaWYgKCFkYXRlU3RyKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBDb3VudCBjb21wbGV0aW9ucyBmb3IgdGhpcyBkYXRlXG4gICAgICAgICAgbGV0IGNvbXBsZXRpb25zID0gMDtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXMuZmluZChcbiAgICAgICAgICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXI/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucysrO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGFjdGl2aXR5LmNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wbGV0aW9ucyA9PT0gMCkgcmV0dXJuIHt9O1xuXG4gICAgICAgICAgLy8gUmV0dXJuIGRvdHMgY29sb3JlZCBieSBkb21pbmFudCBjYXRlZ29yeVxuICAgICAgICAgIGNvbnN0IGRvdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBkb3RzLnB1c2goe1xuICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQgYXMga2V5b2YgdHlwZW9mIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNdID8/IFwiIzkyOGQ4NVwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGBvbGVuLWNhbC1kb3QtJHtjYXR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb3RzLFxuICAgICAgICAgICAgY2xhc3NlczogY29tcGxldGlvbnMgPj0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBcIm9sZW4tY2FsLWNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0V2Vla2x5TWV0YWRhdGE6ICgpID0+ICh7fSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBRdWljayBUYXNrIERpYWxvZyAtLS1cblxuICBwcml2YXRlIHNob3dRdWlja1Rhc2tEaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+QWRkIFF1aWNrIFRhc2s8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9mb2N1cyAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXJvd1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uIChtaW4pXCIgbWluPVwiNVwiIG1heD1cIjQ4MFwiIHZhbHVlPVwiMzBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYmFja2Ryb3BcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stY2FuY2VsXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFkZEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWFkZFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay10aW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZHVyYXRpb25JbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWR1cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBlbnRlciBhIHRhc2sgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3cgPSB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgcXQtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkYXRlOiB0b2RheSxcbiAgICAgICAgdGltZTogdGltZUlucHV0LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpIHx8IDMwLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICBuZXcgTm90aWNlKGBcXHUyNkExIFF1aWNrIHRhc2sgYWRkZWQ6ICR7dGl0bGV9YCk7XG4gICAgICBjbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRm9jdXMgdGhlIGlucHV0XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aXRsZUlucHV0LmZvY3VzKCksIDUwKTtcbiAgfVxuXG4gIC8vIC0tLSBTZXR0aW5ncyBQZXJzaXN0ZW5jZSAtLS1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBNaWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhUGF0aCA9IFwiLm9ic2lkaWFuL3BsdWdpbnMvbXl0aG9sb2dpY2FsLWhhYml0LXRyYWNrZXIvZGF0YS5qc29uXCI7XG4gICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyhkYXRhUGF0aCk7XG5cbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChkYXRhUGF0aCk7XG4gICAgICBjb25zdCBkYXRhOiBUcmFja0hhYml0UmFua0RhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIC8vIE1pZ3JhdGUgYm9zcyBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllciA9IGRhdGEuY3VycmVudFRpZXIgPz8gMTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc01heEhQID0gZGF0YS5ib3NzTWF4SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBkYXRhLmJvc3NDdXJyZW50SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID0gZGF0YS5jb25zZWN1dGl2ZVBlcmZlY3RXZWVrcyA/PyAwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzID0gZGF0YS5pblRhcnRhcnVzID8/IGZhbHNlO1xuICAgICAgdGhpcy5zZXR0aW5ncy50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA9IGRhdGEudGFydGFydXNQZW5hbmNlVGFza3MgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzU3RhcnREYXRlID0gZGF0YS50YXJ0YXJ1c1N0YXJ0RGF0ZSA/PyBudWxsO1xuICAgICAgdGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID0gZGF0YS5mYWlsZWRUaHJlc2hvbGREYXlzID8/IDA7XG5cbiAgICAgIC8vIE1pZ3JhdGUgdGVtcGxlIHRhc2tzXG4gICAgICBpZiAoZGF0YS50ZW1wbGVUYXNrcyAmJiBkYXRhLnRlbXBsZVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50ZW1wbGVUYXNrcyA9IGRhdGEudGVtcGxlVGFza3M7XG4gICAgICB9XG5cbiAgICAgIC8vIE1pZ3JhdGUgcmV3YXJkc1xuICAgICAgdGhpcy5zZXR0aW5ncy5wZW5kaW5nUmV3YXJkcyA9IGRhdGEucGVuZGluZ1Jld2FyZHMgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLmNsYWltZWRSZXdhcmRzID0gKGRhdGEuY2xhaW1lZFJld2FyZHMgPz8gW10pIGFzIGFueTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYmFua2VkUmV3YXJkcyA9IGRhdGEuYmFua2VkUmV3YXJkcyA/PyBbXTtcblxuICAgICAgLy8gTWlncmF0ZSBzeXN0ZW0gc3RhdGVcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSAoZGF0YS5zeXN0ZW1TdGF0ZSBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIikgPz8gXCJhY3RpdmVcIjtcbiAgICAgIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBkYXRhLnBhdXNlU3RhcnRUaW1lID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSA9IGRhdGEudG90YWxQYXVzZWRUaW1lID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSBkYXRhLnNpbXVsYXRlZERhdGUgPz8gbnVsbDtcblxuICAgICAgLy8gTWlncmF0ZSBoZXJvIGJhY2tncm91bmRcbiAgICAgIGlmIChkYXRhLmRhc2hib2FyZEJnSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IGRhdGEuZGFzaGJvYXJkQmdJbWFnZTtcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSBhY3Rpdml0aWVzIGZyb20gZW5hYmxlZEFjdGl2aXRpZXMgKyBjdXN0b21IYWJpdHNcbiAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcyA9IHRoaXMubWlncmF0ZUFjdGl2aXRpZXMoZGF0YSk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgbmV3IE5vdGljZShcIk9sZW46IFN1Y2Nlc3NmdWxseSBtaWdyYXRlZCBkYXRhIGZyb20gTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2xlbiBtaWdyYXRpb24gZXJyb3I6XCIsIGVycik7XG4gICAgICB0aGlzLnNldHRpbmdzLm1pZ3JhdGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtaWdyYXRlQWN0aXZpdGllcyhkYXRhOiBUcmFja0hhYml0UmFua0RhdGEpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFjdGl2aXR5Q29uZmlnW10gPSBbLi4uREVGQVVMVF9BQ1RJVklUSUVTXTtcblxuICAgIC8vIEFwcGx5IGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgICBpZiAoZGF0YS5lbmFibGVkQWN0aXZpdGllcykge1xuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN1bHQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aXZpdHkucHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSBpbiBkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICAgICAgYWN0aXZpdHkuZW5hYmxlZCA9IGRhdGEuZW5hYmxlZEFjdGl2aXRpZXNba2V5XSA/PyB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgb3ZlcnJpZGVzXG4gICAgaWYgKGRhdGEuYWN0aXZpdHlPdmVycmlkZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3ZlcnJpZGUgb2YgZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHJlc3VsdC5maW5kKChhKSA9PiBhLmlkID09PSBvdmVycmlkZS5pZCk7XG4gICAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICAgIGlmIChvdmVycmlkZS53ZWVrbHlUYXJnZXQgIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkud2Vla2x5VGFyZ2V0ID0gb3ZlcnJpZGUud2Vla2x5VGFyZ2V0O1xuICAgICAgICAgIGlmIChvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uICE9PSB1bmRlZmluZWQpIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb24gPSBvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGN1c3RvbSBoYWJpdHNcbiAgICBpZiAoZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgIGZvciAoY29uc3QgaGFiaXQgb2YgZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlc1xuICAgICAgICBpZiAocmVzdWx0LnNvbWUoKGEpID0+IGEuaWQgPT09IGhhYml0LmlkKSkgY29udGludWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGlkOiBoYWJpdC5pZCxcbiAgICAgICAgICBuYW1lOiBoYWJpdC5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBoYWJpdC5lbW9qaSA/PyBcIlxcdTJCNTBcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIiwgLy8gRGVmYXVsdCBjdXN0b20gaGFiaXRzIHRvIHNwaXJpdFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZm9sZGVyOiBoYWJpdC5mb2xkZXIsXG4gICAgICAgICAgcHJvcGVydHk6IGhhYml0LnByb3BlcnR5LFxuICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IGhhYml0LmRhbWFnZVBlckNvbXBsZXRpb24gPz8gMSxcbiAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IGhhYml0LndlZWtseVRhcmdldCA/PyAzLFxuICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgIGhhc1dvcmtzcGFjZTogZmFsc2UsXG4gICAgICAgICAgcHJpb3JpdHk6IDUsXG4gICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICBwcmVmZXJyZWRUaW1lOiBcImFueXRpbWVcIixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogT25lLXRpbWUgbWlncmF0aW9uOiByZW5hbWUgbGVnYWN5IHNlc3Npb24gZmllbGRzIFx1MjE5MiB3b3Jrc3BhY2UsXG4gICAqIG1lcmdlIHdvcmtzcGFjZUZvbGRlciBpbnRvIGZvbGRlciwgYW5kIG1vdmUgdGVtcGxhdGVSZWdpc3RyeSBlbnRyaWVzXG4gICAqIGludG8gcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuc2V0dGluZ3MgYXMgYW55O1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBNaWdyYXRlIHRvcC1sZXZlbCBzZXR0aW5ncyBmaWVsZHNcbiAgICBpZiAocmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzICYmICFyYXcud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcykge1xuICAgICAgcmF3LndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMgPSByYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXM7XG4gICAgICBkZWxldGUgcmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyYXcuYWN0aXZlU2Vzc2lvbiAhPT0gdW5kZWZpbmVkICYmIHJhdy5hY3RpdmVXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmF3LmFjdGl2ZVdvcmtzcGFjZSA9IHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgZGVsZXRlIHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSBwZXItYWN0aXZpdHkgZmllbGRzXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgIGNvbnN0IGEgPSBhY3Rpdml0eSBhcyBhbnk7XG4gICAgICBpZiAoYS5oYXNTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgYS5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhLmhhc1dvcmtzcGFjZSA9IGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgZGVsZXRlIGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBNZXJnZSBzZXNzaW9uRm9sZGVyIC8gd29ya3NwYWNlRm9sZGVyIGludG8gZm9sZGVyXG4gICAgICBpZiAoYS5zZXNzaW9uRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGRlbGV0ZSBhLnNlc3Npb25Gb2xkZXI7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGEud29ya3NwYWNlRm9sZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFhLmZvbGRlcikgYS5mb2xkZXIgPSBhLndvcmtzcGFjZUZvbGRlcjtcbiAgICAgICAgZGVsZXRlIGEud29ya3NwYWNlRm9sZGVyO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNaWdyYXRlIGFjdGl2ZVdvcmtzcGFjZSBpbm5lciBmaWVsZHNcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UpIHtcbiAgICAgIGNvbnN0IGF3ID0gdGhpcy5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgYXMgYW55O1xuICAgICAgaWYgKGF3Lmhhc1Nlc3Npb24gIT09IHVuZGVmaW5lZCAmJiBhdy5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhdy5oYXNXb3Jrc3BhY2UgPSBhdy5oYXNTZXNzaW9uO1xuICAgICAgICBkZWxldGUgYXcuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICAvLyBDbGVhbiB1cCBsZWdhY3kgZm9sZGVyIGZpZWxkcyBmcm9tIGFjdGl2ZVdvcmtzcGFjZVxuICAgICAgZGVsZXRlIGF3LnNlc3Npb25Gb2xkZXI7XG4gICAgICBkZWxldGUgYXcud29ya3NwYWNlRm9sZGVyO1xuICAgIH1cblxuICAgIC8vIE1pZ3JhdGUgdGVtcGxhdGVSZWdpc3RyeSBcdTIxOTIgcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlXG4gICAgaWYgKHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5ICYmIEFycmF5LmlzQXJyYXkocmF3LnRlbXBsYXRlUmVnaXN0cnkpICYmIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgcmF3LnRlbXBsYXRlUmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKCFlbnRyeS5lbmFibGVkIHx8ICFlbnRyeS50ZW1wbGF0ZVBhdGgpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhOiBhbnkpID0+IGEuaWQgPT09IGVudHJ5LmFjdGl2aXR5VHlwZSk7XG4gICAgICAgIGlmIChhY3Rpdml0eSAmJiAhYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgICAgICBhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSA9IGVudHJ5LnRlbXBsYXRlUGF0aDtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5O1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFV0aWxpdHlcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb25zdGFudHMgJiBEZWZhdWx0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgQm9zc0RlZmluaXRpb24sXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBPbGVuU2V0dGluZ3MsXG4gIERldkNvbmZpZyxcbiAgRWx5c2lhblRoZW1lLFxuICBXb3Jrc3BhY2VDb21wbGV0aW9uU3RhdGUsXG4gIENhbGVuZGFyU2V0dGluZ3MsXG4gIFBlcnNvbmFsU3RhdHMsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8vIC0tLSBWaWV3IFR5cGUgLS0tXG5cbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfT0xFTiA9IFwib2xlbi1kYXNoYm9hcmQtdmlld1wiO1xuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9XT1JLU1BBQ0UgPSBcIm9sZW4td29ya3NwYWNlLXZpZXdcIjtcblxuLy8gLS0tIEJvc3MgRGVmaW5pdGlvbnMgKDEzIHRpZXJzKSAtLS1cblxuZXhwb3J0IGNvbnN0IEJPU1NFUzogQm9zc0RlZmluaXRpb25bXSA9IFtcbiAgeyB0aWVyOiAxLCBuYW1lOiBcIlNoYWRvdyBvZiBBcGF0aHlcIiwgcmFuazogXCJEb29tc2Nyb2xsZXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHdlaWdodCBvZiBpbmVydGlhIHRoYXQga2VlcHMgeW91IHNjcm9sbGluZyBpbnN0ZWFkIG9mIHN0YXJ0aW5nXCIsIGxvcmU6IFwiQm9ybiBmcm9tIGZvcmdvdHRlbiBwcm9taXNlcyBhbmQgdW5vcGVuZWQgZ3ltIGJhZ3MsIHRoZSBTaGFkb3cgZmVlZHMgb24gcG90ZW50aWFsIHVucmVhbGl6ZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuMVwiIH0sXG4gIHsgdGllcjogMiwgbmFtZTogXCJTaXJlbidzIENhbGxcIiwgcmFuazogXCJBcm1jaGFpciBHZW5lcmFsXCIsIGRlc2NyaXB0aW9uOiBcIkRpc3RyYWN0aW9uJ3Mgc3dlZXQgc29uZyB0aGF0IHB1bGxzIGZvY3VzIGZyb20gY29tbWl0dGVkIHdvcmtcIiwgbG9yZTogXCJTaGUgc2luZ3Mgb2YgZWFzaWVyIHBhdGhzLCBvZiBqdXN0IG9uZSBtb3JlIHZpZGVvLCBvZiBzdGFydGluZyB0b21vcnJvdyBpbnN0ZWFkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjJcIiB9LFxuICB7IHRpZXI6IDMsIG5hbWU6IFwiSHlkcmEgb2YgSGFiaXRzXCIsIHJhbms6IFwiQXBwcmVudGljZVwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29tcGxleGl0eSBvZiBtYW5hZ2luZyBtdWx0aXBsZSByb3V0aW5lcyBzaW11bHRhbmVvdXNseVwiLCBsb3JlOiBcIkN1dCBvbmUgaGVhZCBhbmQgdHdvIGdyb3cgYmFjay4gRWFjaCBoYWJpdCBkZW1hbmRzIGl0cyBvd24gYXR0ZW50aW9uLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjNcIiB9LFxuICB7IHRpZXI6IDQsIG5hbWU6IFwiTWlub3RhdXIncyBNYXplXCIsIHJhbms6IFwiQ2l0aXplblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29uZnVzaW9uIGFuZCByb3V0aW5lIHRoYXQgdHJhcHMgZXZlbiBkZWRpY2F0ZWQgcHJhY3RpdGlvbmVyc1wiLCBsb3JlOiBcIkxvc3QgaW4gY29ycmlkb3JzIG9mIGhhYml0LCB0aGUgcGF0aCBmb3J3YXJkIGlzIG5ldmVyIGNsZWFyLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjdcIiB9LFxuICB7IHRpZXI6IDUsIG5hbWU6IFwiTWVkdXNhJ3MgR2F6ZVwiLCByYW5rOiBcIlNjaG9sYXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHBhcmFseXNpcyB0aGF0IGNvbWVzIGZyb20gb3ZlcnRoaW5raW5nIG9yIGZlYXIgb2YgZmFpbHVyZVwiLCBsb3JlOiBcIk9uZSBnbGFuY2UgYW5kIHlvdSBhcmUgZnJvemVuLCB1bmFibGUgdG8gYWN0LCB1bmFibGUgdG8gbW92ZS5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS45XCIgfSxcbiAgeyB0aWVyOiA2LCBuYW1lOiBcIk5lbWVhbiBMaW9uXCIsIHJhbms6IFwiU2FtdXJhaVwiLCBkZXNjcmlwdGlvbjogXCJTZWVtaW5nbHkgaW52dWxuZXJhYmxlIG9ic3RhY2xlcyB0aGF0IHJlcXVpcmUgcGVyc2lzdGVudCBlZmZvcnRcIiwgbG9yZTogXCJJdHMgaGlkZSBjYW5ub3QgYmUgcGllcmNlZCBieSBvcmRpbmFyeSBtZWFucy4gT25seSBkaXNjaXBsaW5lIGN1dHMgdGhyb3VnaC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4xXCIgfSxcbiAgeyB0aWVyOiA3LCBuYW1lOiBcIkNoaW1lcmFcIiwgcmFuazogXCJUZW1wbGFyXCIsIGRlc2NyaXB0aW9uOiBcIk11bHRpLWhlYWRlZCBiZWFzdCByZXF1aXJpbmcgYmFsYW5jZWQgYXR0ZW50aW9uIGFjcm9zcyBhbGwgZG9tYWluc1wiLCBsb3JlOiBcIkxpb24sIGdvYXQsIGFuZCBzZXJwZW50IFx1MjAxNCBlYWNoIGhlYWQgZGVtYW5kcyBtYXN0ZXJ5IG9mIGEgZGlmZmVyZW50IGFydC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4zXCIgfSxcbiAgeyB0aWVyOiA4LCBuYW1lOiBcIkNlcmJlcnVzXCIsIHJhbms6IFwiU3RvaWNcIiwgZGVzY3JpcHRpb246IFwiR3VhcmRpYW4gb2YgdHJhbnNmb3JtYXRpb24gdGVzdGluZyBpZiBoYWJpdHMgaGF2ZSBiZWNvbWUgaWRlbnRpdHlcIiwgbG9yZTogXCJUaHJlZSBoZWFkcywgdGhyZWUgdGVzdHMuIFBhc3QgdGhlIGdhdGUgbGllcyB0cmFuc2Zvcm1hdGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi41XCIgfSxcbiAgeyB0aWVyOiA5LCBuYW1lOiBcIlNjeWxsYSAmIENoYXJ5YmRpc1wiLCByYW5rOiBcIk9seW1waWFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBpbXBvc3NpYmxlIGNob2ljZSBiZXR3ZWVuIGNvbXBldGluZyBwcmlvcml0aWVzXCIsIGxvcmU6IFwiQmV0d2VlbiB0aGUgcm9jayBhbmQgdGhlIHdoaXJscG9vbCwgYm90aCBtdXN0IHNvbWVob3cgYmUgaG9ub3JlZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi43XCIgfSxcbiAgeyB0aWVyOiAxMCwgbmFtZTogXCJUaGUgRnVyaWVzXCIsIHJhbms6IFwiU2FnZVwiLCBkZXNjcmlwdGlvbjogXCJJbnRlcm5hbCB2b2ljZXMgb2YgZ3VpbHQgYW5kIHNoYW1lIGF0dGFja2luZyBldmVuIHRoZSBzdWNjZXNzZnVsXCIsIGxvcmU6IFwiVGhleSB3aGlzcGVyIHlvdXIgZmFpbHVyZXMsIHJlbWluZCB5b3Ugb2YgZXZlcnkgc2tpcCwgZXZlcnkgd2Vha25lc3MuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuOVwiIH0sXG4gIHsgdGllcjogMTEsIG5hbWU6IFwiVHlwaG9uXCIsIHJhbms6IFwiVGl0YW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGZvcmNlIG9mIGNoYW9zIHRocmVhdGVuaW5nIHRvIHVuZG8gYWxsIHByb2dyZXNzXCIsIGxvcmU6IFwiRmF0aGVyIG9mIGFsbCBtb25zdGVycywgaGUgc2Vla3MgdG8gcmV0dXJuIHlvdSB0byB0aGUgYmVnaW5uaW5nLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjFcIiB9LFxuICB7IHRpZXI6IDEyLCBuYW1lOiBcIktyb25vc1wiLCByYW5rOiBcIkFyY2hvblwiLCBkZXNjcmlwdGlvbjogXCJUaW1lIGl0c2VsZiBhcyBhbiBlbmVteSwgdGVzdGluZyBzdXN0YWluZWQgaW50ZW5zaXR5XCIsIGxvcmU6IFwiVGhlIFRpdGFuIHdobyBkZXZvdXJzIGhpcyBjaGlsZHJlbi4gQ2FuIHlvdSBtYWludGFpbiBhcyB3ZWVrcyBiZWNvbWUgbW9udGhzP1wiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjNcIiB9LFxuICB7IHRpZXI6IDEzLCBuYW1lOiBcIkNoYW9zIFByaW1vcmRpYWxcIiwgcmFuazogXCJNYXN0ZXIgb2YgQWxsXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB1bHRpbWF0ZSB0ZXN0IG9mIHVuc2hha2VhYmxlIGRpc2NpcGxpbmVcIiwgbG9yZTogXCJCZWZvcmUgY3JlYXRpb24sIGJlZm9yZSBvcmRlciwgb25seSBDaGFvcy4gVG8gbWFzdGVyIGl0IGlzIHRvIG1hc3RlciB5b3Vyc2VsZi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy42XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSQU5LX1RJRVJfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiM2QjcyODBcIiwgMjogXCIjRUY0NDQ0XCIsIDM6IFwiI0Y1OUUwQlwiLCA0OiBcIiMxMEI5ODFcIixcbiAgNTogXCIjM0I4MkY2XCIsIDY6IFwiIzhCNUNGNlwiLCA3OiBcIiNFQzQ4OTlcIiwgODogXCIjRjk3MzE2XCIsXG4gIDk6IFwiIzA2QjZENFwiLCAxMDogXCIjQTg1NUY3XCIsIDExOiBcIiNEQzI2MjZcIiwgMTI6IFwiIzdDM0FFRFwiLFxuICAxMzogXCIjYzlhMjI3XCIsXG59O1xuXG4vLyAtLS0gQ2hhcHRlciBQcm9ncmVzc2lvbiAtLS1cblxuZXhwb3J0IGNvbnN0IENIQVBURVJfTkFNRVM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gIDE6IFwiSW5pdGlhdGVcIixcbiAgMjogXCJFeHBsb3JlclwiLFxuICAzOiBcIkpvdXJuZXltYW5cIixcbiAgNDogXCJBZGVwdFwiLFxuICA1OiBcIlBoaWxvc29waGVyXCIsXG4gIDY6IFwiTWFzdGVyXCIsXG4gIDc6IFwiU2FnZVwiLFxuICA4OiBcIk9yYWNsZVwiLFxuICA5OiBcIlRpdGFuXCIsXG4gIDEwOiBcIk9seW1waWFuXCIsXG59O1xuXG4vLyAtLS0gRHluYW1pYyBUaXRsZSBUYWJsZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfRE9NSU5BTlRfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYm9keTogICB7IGxpZ2h0OiBcIkF0aGxldGVcIiwgICBtaWQ6IFwiV2FycmlvclwiLCAgaGVhdnk6IFwiVGl0YW5cIiB9LFxuICBtaW5kOiAgIHsgbGlnaHQ6IFwiU3R1ZGVudFwiLCAgIG1pZDogXCJTY2hvbGFyXCIsICBoZWF2eTogXCJQb2x5bWF0aFwiIH0sXG4gIHNwaXJpdDogeyBsaWdodDogXCJTZWVrZXJcIiwgICAgbWlkOiBcIlNhZ2VcIiwgICAgIGhlYXZ5OiBcIk9yYWNsZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVFdPX0NBVEVHT1JZX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiYm9keSttaW5kXCI6ICAgIHsgbGlnaHQ6IFwiRGlzY2lwbGluZWQgVGhpbmtlclwiLCBtaWQ6IFwiUGhpbG9zb3BoZXItS2luZ1wiLCBoZWF2eTogXCJSZW5haXNzYW5jZSBUaXRhblwiIH0sXG4gIFwiYm9keStzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQXNjZXRpY1wiLCAgICAgICAgICAgICBtaWQ6IFwiVGVtcGxhclwiLCAgICAgICAgICBoZWF2eTogXCJPbHltcGlhbiBNb25rXCIgfSxcbiAgXCJtaW5kK3NwaXJpdFwiOiAgeyBsaWdodDogXCJDb250ZW1wbGF0aXZlXCIsICAgICAgIG1pZDogXCJNeXN0aWMgU2Nob2xhclwiLCAgIGhlYXZ5OiBcIkVubGlnaHRlbmVkIE9uZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQkFMQU5DRURfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCIsXG4gIG1pZDogXCJSZW5haXNzYW5jZSBTb3VsXCIsXG4gIGhlYXZ5OiBcIkV1ZGFpbW9uXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBBY3Rpdml0aWVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVklUSUVTOiBBY3Rpdml0eUNvbmZpZ1tdID0gW1xuICB7XG4gICAgaWQ6IFwid29ya291dFwiLCBuYW1lOiBcIldvcmtvdXRcIiwgZW1vamk6IFwiXFx1ezFGNEFBfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiLCBwcm9wZXJ0eTogXCJXb3Jrb3V0XCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA3LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHdvcmtzcGFjZVRlbXBsYXRlOiBcIndvcmtvdXRcIixcbiAgICBwcmlvcml0eTogOCwgbmVnbGVjdFRocmVzaG9sZDogMixcbiAgICBwcmVmZXJyZWRUaW1lOiBcIm1vcm5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiY2FyZGlvXCIsIG5hbWU6IFwiQ2FyZGlvXCIsIGVtb2ppOiBcIlxcdXsxRjNDM31cIiwgY2F0ZWdvcnk6IFwiYm9keVwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAyIENhcmRpb1wiLCBwcm9wZXJ0eTogXCJDYXJkaW9cIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDQsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICBhbHRlcm5hdGVzV2l0aDogXCJ3b3Jrb3V0XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWFkaW5nXCIsIG5hbWU6IFwiUmVhZGluZ1wiLCBlbW9qaTogXCJcXHV7MUY0RDZ9XCIsIGNhdGVnb3J5OiBcIm1pbmRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMyBSZWFkaW5nXCIsIHByb3BlcnR5OiBcIlJlYWRpbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDYsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJldmVuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA0NSxcbiAgfSxcbiAge1xuICAgIGlkOiBcImRydW1taW5nXCIsIG5hbWU6IFwiRHJ1bW1pbmdcIiwgZW1vamk6IFwiXFx1ezFGOTQxfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNCBEcnVtbWluZ1wiLCBwcm9wZXJ0eTogXCJEcnVtbWluZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNiwgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJoZWFsdGgtc3R1ZHlcIiwgbmFtZTogXCJIZWFsdGggU3R1ZHlcIiwgZW1vamk6IFwiXFx1ezFGOUVDfVwiLCBjYXRlZ29yeTogXCJtaW5kXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDUgSGVhbHRoIFN0dWR5XCIsIHByb3BlcnR5OiBcIkhlYWx0aCBTdHVkeVwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMywgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNCwgbmVnbGVjdFRocmVzaG9sZDogNCxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJzb2NpYWxcIiwgbmFtZTogXCJTb2NpYWxcIiwgZW1vamk6IFwiXFx1ezFGOTFEfVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNiBTb2NpYWxcIiwgcHJvcGVydHk6IFwiU29jaWFsXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiAyLCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA1LCBuZWdsZWN0VGhyZXNob2xkOiA1LFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcmF3aW5nXCIsIG5hbWU6IFwiRHJhd2luZ1wiLCBlbW9qaTogXCJcXHV7MUYzQTh9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA3IERyYXdpbmdcIiwgcHJvcGVydHk6IFwiRHJhd2luZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNCwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNywgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gIH0sXG5dO1xuXG4vLyAtLS0gRGlyZWN0aXZlIExvcmUgVGVtcGxhdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgTkVHTEVDVF9MT1JFOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICB3b3Jrb3V0OiBcIllvdXIgbXVzY2xlcyBmb3JnZXQgd2hhdCB0aGV5IG9uY2Uga25ldy4gVGhlIGJvZHkgY3JhdmVzIGRpc2NpcGxpbmUgXHUyMDE0IGFuc3dlciBpdC5cIixcbiAgY2FyZGlvOiBcIlRoZSBoZWFydCBncm93cyBzbHVnZ2lzaCB3aXRob3V0IHRoZSBwb3VuZGluZyByaHl0aG0gb2YgZWZmb3J0LlwiLFxuICByZWFkaW5nOiBcIlRoZSBtaW5kIHN0YXJ2ZXMgb24gZGlzdHJhY3Rpb24uIEZlZWQgaXQgd2l0aCBwYWdlcywgbm90IHBpeGVscy5cIixcbiAgZHJ1bW1pbmc6IFwiU2lsZW5jZSBpcyBub3QgcmVzdCBcdTIwMTQgaXQgaXMgdGhlIGRlYXRoIG9mIHJoeXRobS4gUGljayB1cCB0aGUgc3RpY2tzLlwiLFxuICBcImhlYWx0aC1zdHVkeVwiOiBcIktub3dsZWRnZSBvZiB0aGUgYm9keSBpcyBwb3dlciBvdmVyIGl0LiBOZWdsZWN0IGludml0ZXMgaWdub3JhbmNlLlwiLFxuICBzb2NpYWw6IFwiRXZlbiB3YXJyaW9ycyBuZWVkIGZlbGxvd3NoaXAuIElzb2xhdGlvbiBicmVlZHMgc3RhZ25hdGlvbi5cIixcbiAgZHJhd2luZzogXCJUaGUgYmVhc3Qgd2l0aGluIHlvdSBncm93cyB3ZWFrIHdpdGhvdXQgdGhlIGRpc2NpcGxpbmUgb2YgbGluZSBhbmQgZm9ybS5cIixcbn07XG5cbi8vIC0tLSBGYWxsYmFjayBRdW90ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBGQUxMQkFDS19RVU9URVM6IEFycmF5PHsgdGV4dDogc3RyaW5nOyBhdHRyaWJ1dGlvbjogc3RyaW5nIH0+ID0gW1xuICB7IHRleHQ6IFwiWW91IGhhdmUgcG93ZXIgb3ZlciB5b3VyIG1pbmQgXHUyMDE0IG5vdCBvdXRzaWRlIGV2ZW50cy4gUmVhbGl6ZSB0aGlzLCBhbmQgeW91IHdpbGwgZmluZCBzdHJlbmd0aC5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIldlIHN1ZmZlciBtb3JlIG9mdGVuIGluIGltYWdpbmF0aW9uIHRoYW4gaW4gcmVhbGl0eS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBpbXBlZGltZW50IHRvIGFjdGlvbiBhZHZhbmNlcyBhY3Rpb24uIFdoYXQgc3RhbmRzIGluIHRoZSB3YXkgYmVjb21lcyB0aGUgd2F5LlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiTm8gbWFuIGlzIGZyZWUgd2hvIGlzIG5vdCBtYXN0ZXIgb2YgaGltc2VsZi5cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIldhc3RlIG5vIG1vcmUgdGltZSBhcmd1aW5nIGFib3V0IHdoYXQgYSBnb29kIG1hbiBzaG91bGQgYmUuIEJlIG9uZS5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIkl0IGlzIG5vdCB0aGF0IHdlIGhhdmUgYSBzaG9ydCB0aW1lIHRvIGxpdmUsIGJ1dCB0aGF0IHdlIHdhc3RlIGEgZ29vZCBkZWFsIG9mIGl0LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiRmlyc3Qgc2F5IHRvIHlvdXJzZWxmIHdoYXQgeW91IHdvdWxkIGJlOyBhbmQgdGhlbiBkbyB3aGF0IHlvdSBoYXZlIHRvIGRvLlwiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiVGhlIGhhcHBpbmVzcyBvZiB5b3VyIGxpZmUgZGVwZW5kcyB1cG9uIHRoZSBxdWFsaXR5IG9mIHlvdXIgdGhvdWdodHMuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJIZSB3aG8gZmVhcnMgZGVhdGggd2lsbCBuZXZlciBkbyBhbnl0aGluZyB3b3J0aCBvZiBhIG1hbiB3aG8gaXMgYWxpdmUuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJEaWZmaWN1bHRpZXMgc3RyZW5ndGhlbiB0aGUgbWluZCwgYXMgbGFib3IgZG9lcyB0aGUgYm9keS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkhvdyBsb25nIGFyZSB5b3UgZ29pbmcgdG8gd2FpdCBiZWZvcmUgeW91IGRlbWFuZCB0aGUgYmVzdCBmb3IgeW91cnNlbGY/XCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJUaGUgc291bCBiZWNvbWVzIGR5ZWQgd2l0aCB0aGUgY29sb3VyIG9mIGl0cyB0aG91Z2h0cy5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbl07XG5cbi8vIC0tLSBSb21hbiBOdW1lcmFscyBIZWxwZXIgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiB0b1JvbWFuKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgdmFscyA9IFsxMDAwLCA5MDAsIDUwMCwgNDAwLCAxMDAsIDkwLCA1MCwgNDAsIDEwLCA5LCA1LCA0LCAxXTtcbiAgY29uc3Qgc3ltcyA9IFtcIk1cIiwgXCJDTVwiLCBcIkRcIiwgXCJDRFwiLCBcIkNcIiwgXCJYQ1wiLCBcIkxcIiwgXCJYTFwiLCBcIlhcIiwgXCJJWFwiLCBcIlZcIiwgXCJJVlwiLCBcIklcIl07XG4gIGxldCByZXN1bHQgPSBcIlwiO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHMubGVuZ3RoOyBpKyspIHtcbiAgICB3aGlsZSAobnVtID49IHZhbHNbaV0pIHtcbiAgICAgIHJlc3VsdCArPSBzeW1zW2ldO1xuICAgICAgbnVtIC09IHZhbHNbaV07XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vIC0tLSBEZWZhdWx0IFdvcmtzcGFjZSBDb21wbGV0aW9uIFN0YXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUzogV29ya3NwYWNlQ29tcGxldGlvblN0YXRlW10gPSBbXG4gIHsgaWQ6IFwiZGlzY2lwbGluZVwiLCBuYW1lOiBcIkRpc2NpcGxpbmVcIiwgaWNvbjogXCJcXHUyNUM2XCIsIGNvbG9yOiBcIiM5MjhkODVcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDEuMCB9LFxuICB7IGlkOiBcImZsb3dcIiwgbmFtZTogXCJGbG93XCIsIGljb246IFwiXFx1MjI0OFwiLCBjb2xvcjogXCIjYzlhODRjXCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAxLjUgfSxcbiAgeyBpZDogXCJza2lwcGVkXCIsIG5hbWU6IFwiU2tpcHBlZFwiLCBpY29uOiBcIlxcdTI1Q0JcIiwgY29sb3I6IFwiIzhiMmQzNVwiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMCB9LFxuXTtcblxuLy8gLS0tIERlZmF1bHQgRGV2IENvbmZpZyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVWX0NPTkZJRzogRGV2Q29uZmlnID0ge1xuICBsYWJlbHM6IHtcbiAgICBncmVldGluZ19tb3JuaW5nOiBcIkdvb2QgbW9ybmluZ1wiLFxuICAgIGdyZWV0aW5nX2FmdGVybm9vbjogXCJHb29kIGFmdGVybm9vblwiLFxuICAgIGdyZWV0aW5nX2V2ZW5pbmc6IFwiR29vZCBldmVuaW5nXCIsXG4gICAgZ3JlZXRpbmdfbmlnaHQ6IFwiR29vZCBuaWdodFwiLFxuICAgIGRpcmVjdGl2ZV90aXRsZTogXCJUSEUgRElSRUNUSVZFXCIsXG4gICAgYm9zc19zdGF0dXNfdGl0bGU6IFwiQk9TUyBTVEFUVVNcIixcbiAgICB3ZWVrbHlfcmh5dGhtX3RpdGxlOiBcIldFRUtMWSBSSFlUSE1cIixcbiAgICBhY3Rpdml0eV9ncmlkX3RpdGxlOiBcIkFDVElWSVRJRVNcIixcbiAgICB0ZW1wbGVfdGl0bGU6IFwiVEhFIFRFTVBMRVwiLFxuICAgIGV1ZGFpbW9uaWFfdGl0bGU6IFwiRXVkYWltb25pYSBJbmRleFwiLFxuICAgIGRheW1hcF90aXRsZTogXCJZT1VSIERBWVwiLFxuICAgIGJlZ2luX3dvcmtzcGFjZTogXCJFTlRFUiBXT1JLU1BBQ0VcIixcbiAgICBub3Rfbm93OiBcIk5PVCBOT1dcIixcbiAgfSxcbiAgeHBQZXJDb21wbGV0aW9uOiAxMCxcbiAgc3RyZWFrQm9udXNNdWx0aXBsaWVyOiAxLjUsXG4gIGJ1ZmZlck1pbnV0ZXM6IDE1LFxuICBtb3JuaW5nU3RhcnQ6IDYsXG4gIG1vcm5pbmdFbmQ6IDEyLFxuICBhZnRlcm5vb25FbmQ6IDE4LFxuICBldmVuaW5nRW5kOiAyMyxcbiAgdGhlbWVPdmVycmlkZXM6IHt9LFxuICBhbmltYXRpb25TdGFnZ2VyTXM6IDgwLFxuICBoZXJvSGVpZ2h0OiAzNTAsXG4gIHNlY3Rpb25PcmRlcjogW1xuICAgIFwiaGVyb1wiLCBcImhlYXRtYXBcIiwgXCJldWRhaW1vbmlhXCIsIFwiZGF5bWFwXCIsIFwiZGlyZWN0aXZlXCIsIFwiYm9zc1wiLFxuICAgIFwid2Vla2x5XCIsIFwiYWN0aXZpdGllc1wiLCBcInRlbXBsZVwiLCBcInF1b3RlXCIsXG4gIF0sXG4gIGhpZGRlblNlY3Rpb25zOiBbXSxcbiAgYWN0aXZpdHlHcmlkQ29sdW1uczogMixcbn07XG5cbi8vIC0tLSBEZWZhdWx0IFBlcnNvbmFsIFN0YXRzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9QRVJTT05BTF9TVEFUUzogUGVyc29uYWxTdGF0cyA9IHtcbiAgZ2VuZGVyOiBcIm1hbGVcIixcbiAgaGVpZ2h0OiAxNzUsXG4gIGJpcnRoZGF0ZTogXCJcIixcbiAgY3VycmVudFdlaWdodDogMCxcbiAgd2VpZ2h0TG9nOiBbXSxcbiAgd2VpZ2h0TG9nRnJlcXVlbmN5OiBcImV2ZXJ5LXdlZWtcIixcbiAgd2VpZ2h0TG9nQ3VzdG9tRGF5czogNyxcbiAgbGFzdFdlaWdodExvZ0RhdGU6IG51bGwsXG59O1xuXG4vLyAtLS0gTXVzY2xlIEdyb3VwIERlZmluaXRpb25zIC0tLVxuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQUyA9IFtcbiAgXCJjaGVzdFwiLCBcImJhY2tcIiwgXCJzaG91bGRlcnNcIiwgXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIixcbiAgXCJhYnNcIiwgXCJvYmxpcXVlc1wiLCBcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiLFxuICBcInRyYXBzXCIsIFwibGF0c1wiLCBcIm5lY2tcIixcbl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIE11c2NsZUdyb3VwSWQgPSB0eXBlb2YgTVVTQ0xFX0dST1VQU1tudW1iZXJdO1xuXG5leHBvcnQgY29uc3QgTVVTQ0xFX0dST1VQX0xBQkVMUzogUmVjb3JkPE11c2NsZUdyb3VwSWQsIHN0cmluZz4gPSB7XG4gIGNoZXN0OiBcIkNoZXN0XCIsXG4gIGJhY2s6IFwiQmFja1wiLFxuICBzaG91bGRlcnM6IFwiU2hvdWxkZXJzXCIsXG4gIGJpY2VwczogXCJCaWNlcHNcIixcbiAgdHJpY2VwczogXCJUcmljZXBzXCIsXG4gIGZvcmVhcm1zOiBcIkZvcmVhcm1zXCIsXG4gIGFiczogXCJBYnNcIixcbiAgb2JsaXF1ZXM6IFwiT2JsaXF1ZXNcIixcbiAgcXVhZHM6IFwiUXVhZHNcIixcbiAgaGFtc3RyaW5nczogXCJIYW1zdHJpbmdzXCIsXG4gIGdsdXRlczogXCJHbHV0ZXNcIixcbiAgY2FsdmVzOiBcIkNhbHZlc1wiLFxuICB0cmFwczogXCJUcmFwc1wiLFxuICBsYXRzOiBcIkxhdHNcIixcbiAgbmVjazogXCJOZWNrXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBDYWxlbmRhciBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1M6IENhbGVuZGFyU2V0dGluZ3MgPSB7XG4gIGVuYWJsZURhaWx5Tm90ZXM6IHRydWUsXG4gIGRhaWx5Tm90ZXNGb2xkZXI6IFwiXCIsXG4gIGRhaWx5Tm90ZXNGb3JtYXQ6IFwiWVlZWS1NTS1ERFwiLFxuICBlbmFibGVUYXNrc1BsdWdpbjogZmFsc2UsXG4gIGVuYWJsZVF1aWNrVGFza3M6IHRydWUsXG4gIHF1aWNrVGFza3M6IFtdLFxufTtcblxuLy8gLS0tIERlZmF1bHQgT2xlbiBTZXR0aW5ncyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfT0xFTl9TRVRUSU5HUzogT2xlblNldHRpbmdzID0ge1xuICAvLyBQcm9maWxlXG4gIHVzZXJOYW1lOiBcIldhcnJpb3JcIixcbiAgbXlXaHk6IFwiXCIsXG4gIGhlcm9CYWNrZ3JvdW5kOiBcIlwiLFxuICBob21lcGFnZTogXCJcIixcblxuICAvLyBBY3Rpdml0aWVzXG4gIGFjdGl2aXRpZXM6IERFRkFVTFRfQUNUSVZJVElFUyxcblxuICAvLyBDYXRlZ29yaWVzXG4gIGNhdGVnb3J5Q29sb3JzOiB7XG4gICAgYm9keTogXCIjYzlhODRjXCIsXG4gICAgbWluZDogXCIjNmI4Y2NlXCIsXG4gICAgc3Bpcml0OiBcIiM4YjdlYzhcIixcbiAgfSxcbiAgdGl0bGVPdmVycmlkZTogXCJcIixcblxuICAvLyBFdWRhaW1vbmlhXG4gIGNhdGVnb3J5WFA6IHtcbiAgICBib2R5OiAwLFxuICAgIG1pbmQ6IDAsXG4gICAgc3Bpcml0OiAwLFxuICB9LFxuXG4gIC8vIEJvc3NcbiAgY3VycmVudFRpZXI6IDEsXG4gIGJvc3NNYXhIUDogMzUsXG4gIGJvc3NDdXJyZW50SFA6IDM1LFxuICBpblRhcnRhcnVzOiBmYWxzZSxcbiAgdGFydGFydXNQZW5hbmNlVGFza3M6IFtdLFxuICB0YXJ0YXJ1c1N0YXJ0RGF0ZTogbnVsbCxcbiAgZmFpbGVkVGhyZXNob2xkRGF5czogMCxcbiAgY29uc2VjdXRpdmVQZXJmZWN0V2Vla3M6IDAsXG5cbiAgLy8gVGVtcGxlXG4gIHRlbXBsZVRhc2tzOiBbXG4gICAgeyBpZDogXCJiYXRoaW5nXCIsIG5hbWU6IFwiQmF0aGluZ1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDEsIGVtb2ppOiBcIlxcdXsxRjZCRn1cIiB9LFxuICAgIHsgaWQ6IFwiZmFjaWFsLWhhaXJcIiwgbmFtZTogXCJGYWNpYWwgaGFpclwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIsIGVtb2ppOiBcIlxcdXsxRkE5Mn1cIiB9LFxuICAgIHsgaWQ6IFwibmFpbHNcIiwgbmFtZTogXCJOYWlsc1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDcsIGVtb2ppOiBcIlxcdTI3MDJcXHVGRTBGXCIgfSxcbiAgICB7IGlkOiBcImhhaXJjdXRcIiwgbmFtZTogXCJIYWlyY3V0XCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogMjEsIGVtb2ppOiBcIlxcdXsxRjQ4OH1cIiB9LFxuICBdLFxuXG4gIC8vIFJld2FyZHNcbiAgcGVuZGluZ1Jld2FyZHM6IFtdLFxuICBjbGFpbWVkUmV3YXJkczogW10sXG4gIGJhbmtlZFJld2FyZHM6IFtdLFxuXG4gIC8vIFN5c3RlbVxuICBzeXN0ZW1TdGF0ZTogXCJhY3RpdmVcIixcbiAgcGF1c2VTdGFydFRpbWU6IG51bGwsXG4gIHRvdGFsUGF1c2VkVGltZTogMCxcbiAgbWlncmF0ZWQ6IGZhbHNlLFxuICBzaW11bGF0ZWREYXRlOiBudWxsLFxuXG4gIC8vIFRoZW1lXG4gIHRoZW1lT3ZlcnJpZGVzOiB7fSxcblxuICAvLyBEZXZcbiAgZGV2Q29uZmlnOiBERUZBVUxUX0RFVl9DT05GSUcsXG5cbiAgLy8gV29ya3NwYWNlXG4gIHdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXM6IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUyxcbiAgYWN0aXZlV29ya3NwYWNlOiBudWxsLFxuXG4gIC8vIENhbGVuZGFyXG4gIGNhbGVuZGFyOiBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuXG4gIC8vIFBlcnNvbmFsIFN0YXRzXG4gIHBlcnNvbmFsU3RhdHM6IERFRkFVTFRfUEVSU09OQUxfU1RBVFMsXG5cbiAgLy8gUXVvdGVcbiAgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLFxuICBsYXN0UXVvdGVJbmRleDogLTEsXG4gIHJlY2VudFF1b3RlSWRzOiBbXSxcbn07XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXNoYm9hcmQgVmlld1xuLy8gTWFpbiBzY3JvbGxhYmxlIEl0ZW1WaWV3IHJlbmRlcmluZyBhbGwgZGFzaGJvYXJkIHNlY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQ29tcGxldGlvbk1hcCwgQ29tcGxldGlvbiwgQ2FsZW5kYXJUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBDYWxlbmRhckVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0NhbGVuZGFyRW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJIZXJvQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9DYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJFdWRhaW1vbmlhQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXVkYWltb25pYUJhclwiO1xuaW1wb3J0IHsgcmVuZGVyRGlyZWN0aXZlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RpcmVjdGl2ZUNhcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvc3NTdGF0dXNDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9zc1N0YXR1c0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtseVJoeXRobSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlZWtseVJoeXRobVwiO1xuaW1wb3J0IHsgcmVuZGVyQWN0aXZpdHlHcmlkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aXZpdHlHcmlkXCI7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGVDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RlbXBsZUNoaXBzXCI7XG5pbXBvcnQgeyByZW5kZXJRdW90ZUZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlRm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXlUaW1lbGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RheVRpbWVsaW5lXCI7XG5pbXBvcnQgeyByZW5kZXJTdHJlbmd0aEhlYXRtYXAsIHNob3dNdXNjbGVQcm9ncmVzc1BvcHVwLCBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAsIHNob3dNdXNjbGVTZWxlY3RvciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1N0cmVuZ3RoSGVhdG1hcFwiO1xuaW1wb3J0IHsgcmVuZGVyV2VpZ2h0Tm90aWZpY2F0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV2VpZ2h0UHJvZ3Jlc3NcIjtcbmltcG9ydCB0eXBlIHsgTXVzY2xlR3JvdXBJZCB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSBpbnRlcnZhbHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfT0xFTjtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiT2xlblwiO1xuICB9XG5cbiAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImNvbXBhc3NcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBjbGVhbnVwKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5pbnRlcnZhbHMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZFwiIH0pO1xuXG4gICAgLy8gQXBwbHkgdGhlbWUgb3ZlcnJpZGVzXG4gICAgdGhpcy5hcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3QpO1xuXG4gICAgLy8gR2F0aGVyIGNvbXBsZXRpb24gZGF0YSBmcm9tIHZhdWx0XG4gICAgY29uc3QgY29tcGxldGlvbkRhdGEgPSB0aGlzLmdhdGhlckNvbXBsZXRpb25EYXRhKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGVuZ2luZXNcbiAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBPbGVuRW5naW5lKHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgbm93KTtcblxuICAgIC8vIENhbGVuZGFyIGludGVncmF0aW9uIFx1MjAxNCBnYXRoZXIgY2FsZW5kYXIgdGFza3MgYW5kIGZlZWQgaW50byBlbmdpbmVcbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZSh0aGlzLmFwcCwgc2V0dGluZ3MsIG5vdyk7XG4gICAgY29uc3QgY2FsZW5kYXJUYXNrcyA9IGF3YWl0IHRoaXMuZ2F0aGVyQ2FsZW5kYXJUYXNrcyhjYWxlbmRhckVuZ2luZSk7XG4gICAgY29uc3QgY2FsZW5kYXJFbnRyaWVzID0gY2FsZW5kYXJFbmdpbmUudG9EYXlNYXBFbnRyaWVzKGNhbGVuZGFyVGFza3MpO1xuICAgIGVuZ2luZS5zZXRDYWxlbmRhckVudHJpZXMoY2FsZW5kYXJFbnRyaWVzKTtcblxuICAgIC8vIEJ1aWxkIHNlY3Rpb24gb3JkZXIgZnJvbSBkZXZDb25maWdcbiAgICBjb25zdCBzZWN0aW9uT3JkZXIgPSBzZXR0aW5ncy5kZXZDb25maWcuc2VjdGlvbk9yZGVyO1xuICAgIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQoc2V0dGluZ3MuZGV2Q29uZmlnLmhpZGRlblNlY3Rpb25zKTtcblxuICAgIGxldCBzdGFnZ2VySWR4ID0gMDtcblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uT3JkZXIpIHtcbiAgICAgIGlmIChoaWRkZW4uaGFzKHNlY3Rpb24pKSBjb250aW51ZTtcblxuICAgICAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJoZXJvXCI6XG4gICAgICAgICAgcmVuZGVySGVyb0NhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiaGVhdG1hcFwiOlxuICAgICAgICAgIHJlbmRlclN0cmVuZ3RoSGVhdG1hcChyb290LCBzZXR0aW5ncywgZW5naW5lLCBjb21wbGV0aW9uRGF0YSwgc3RhZ2dlcklkeCsrLCB7XG4gICAgICAgICAgICBvbk11c2NsZUNsaWNrOiAobXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgc2hvd011c2NsZVByb2dyZXNzUG9wdXAobXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Qcm9ncmVzc0NsaWNrOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dPdmVyYWxsUHJvZ3Jlc3NQb3B1cChzZXR0aW5ncywgY29tcGxldGlvbkRhdGEpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU3RhcnRXb3Jrb3V0OiAoKSA9PiB7XG4gICAgICAgICAgICAgIHNob3dNdXNjbGVTZWxlY3Rvcigoc2VsZWN0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdGFydCB3b3Jrb3V0IHdpdGggc2VsZWN0ZWQgbXVzY2xlcyBcdTIwMTQgZW50ZXIgd29ya291dCB3b3Jrc3BhY2VcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKFwid29ya291dFwiKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sIHRoaXMuYXBwKTtcbiAgICAgICAgICAvLyBXZWlnaHQgbm90aWZpY2F0aW9uIChzaG93cyBvbmx5IHdoZW4gZHVlKVxuICAgICAgICAgIHJlbmRlcldlaWdodE5vdGlmaWNhdGlvbihyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVMb2dXZWlnaHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXVkYWltb25pYVwiOlxuICAgICAgICAgIHJlbmRlckV1ZGFpbW9uaWFCYXIocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCk7XG4gICAgICAgICAgc3RhZ2dlcklkeCArPSAzOyAvLyBldWRhaW1vbmlhIGNhcmQgKyBzdGF0IGNhcmRzICsgY2F0ZWdvcmllcyBjYXJkXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRheW1hcFwiOlxuICAgICAgICAgIHJlbmRlckRheVRpbWVsaW5lKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKywge1xuICAgICAgICAgICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkKSA9PiB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQpLFxuICAgICAgICAgICAgb25Ta2lwOiAoYWN0aXZpdHlJZCkgPT4gdGhpcy5oYW5kbGVTa2lwQWN0aXZpdHkoYWN0aXZpdHlJZCwgZW5naW5lKSxcbiAgICAgICAgICAgIG9uQ2FsZW5kYXJEb25lOiAoZW50cnkpID0+IHRoaXMuaGFuZGxlQ2FsZW5kYXJUYXNrRG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNhbGVuZGFyUG9zdHBvbmU6IChlbnRyeSkgPT4gdGhpcy5oYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNyZWF0ZUV2ZW50OiAoKSA9PiAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRpcmVjdGl2ZVwiOlxuICAgICAgICAgIHJlbmRlckRpcmVjdGl2ZUNhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrLCAoYWN0aXZpdHlJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRlcldvcmtzcGFjZShhY3Rpdml0eUlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYm9zc1wiOlxuICAgICAgICAgIHJlbmRlckJvc3NTdGF0dXNDYXJkKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ3ZWVrbHlcIjpcbiAgICAgICAgICByZW5kZXJXZWVrbHlSaHl0aG0ocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWN0aXZpdGllc1wiOlxuICAgICAgICAgIHJlbmRlckFjdGl2aXR5R3JpZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0ZW1wbGVcIjpcbiAgICAgICAgICByZW5kZXJUZW1wbGVDaGlwcyhyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAodGFza0lkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRlbXBsZVVwZGF0ZSh0YXNrSWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgIHJlbmRlclF1b3RlRm9vdGVyKHJvb3QsIHRoaXMuYXBwLCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAocGFydGlhbCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFydGlhbCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAtLS0gRGF0YSBHYXRoZXJpbmcgLS0tXG5cbiAgZ2F0aGVyQ29tcGxldGlvbkRhdGEoKTogQ29tcGxldGlvbk1hcCB7XG4gICAgY29uc3QgZGF0YTogQ29tcGxldGlvbk1hcCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LmVuYWJsZWQpIGNvbnRpbnVlO1xuICAgICAgZGF0YVthY3Rpdml0eS5pZF0gPSB0aGlzLmdldENvbXBsZXRpb25zRnJvbUZvbGRlcihhY3Rpdml0eS5mb2xkZXIsIGFjdGl2aXR5LnByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcGxldGlvbnNGcm9tRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZywgZmllbGROYW1lOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG5cbiAgICByZXR1cm4gZmlsZXNcbiAgICAgIC5maWx0ZXIoKGZpbGUpID0+IGZpbGUucGF0aCA9PT0gZm9sZGVyUGF0aCB8fCBmaWxlLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBjYWNoZT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGlmICghZnJvbnRtYXR0ZXIgfHwgdHlwZW9mIGZyb250bWF0dGVyW2ZpZWxkTmFtZV0gIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiBmaWxlLmJhc2VuYW1lLFxuICAgICAgICAgIGNvbXBsZXRlZDogZnJvbnRtYXR0ZXJbZmllbGROYW1lXSA9PT0gdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjKTogYyBpcyBDb21wbGV0aW9uID0+IGMgIT09IG51bGwpO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIEdhdGhlcmluZyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGdhdGhlckNhbGVuZGFyVGFza3MoY2FsZW5kYXJFbmdpbmU6IENhbGVuZGFyRW5naW5lKTogUHJvbWlzZTxDYWxlbmRhclRhc2tbXT4ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXMgXHUyMDE0IHJlYWQgdG9kYXkncyBub3RlIGNvbnRlbnRcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyAmJiBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyKSB7XG4gICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBmb2xkZXIgPSBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGYuYmFzZW5hbWUgPT09IHRvZGF5O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYWlseU5vdGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZGFpbHlOb3RlKTtcbiAgICAgICAgdGFza3MucHVzaCguLi5jYWxlbmRhckVuZ2luZS5nZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQsIGRhaWx5Tm90ZS5wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uIEI6IFRhc2tzIFBsdWdpbiBcdTIwMTQgc2NhbiBmb3IgdGFza3Mgd2l0aCB0b2RheSdzIGR1ZSBkYXRlXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKSB7XG4gICAgICBjb25zdCB0YXNrc1BsdWdpbiA9ICh0aGlzLmFwcCBhcyBhbnkpLnBsdWdpbnM/LnBsdWdpbnM/LltcIm9ic2lkaWFuLXRhc2tzLXBsdWdpblwiXTtcbiAgICAgIGlmICh0YXNrc1BsdWdpbikge1xuICAgICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc3QgZmlsZXNXaXRoVGFza3M6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgaWYgKCFjYWNoZT8ubGlzdEl0ZW1zPy5zb21lKChsaSkgPT4gbGkudGFzayAhPT0gdW5kZWZpbmVkKSkgY29udGludWU7XG5cbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgICAvLyBRdWljayBjaGVjazogZG9lcyB0aGUgY29udGVudCBtZW50aW9uIHRvZGF5J3MgZGF0ZSB3aXRoIGEgZHVlIGVtb2ppP1xuICAgICAgICAgIGlmIChjb250ZW50LmluY2x1ZGVzKHRvZGF5KSkge1xuICAgICAgICAgICAgZmlsZXNXaXRoVGFza3MucHVzaCh7IHBhdGg6IGZpbGUucGF0aCwgY29udGVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrcy5wdXNoKC4uLmNhbGVuZGFyRW5naW5lLmdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXNXaXRoVGFza3MpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpb24gQzogUXVpY2sgVGFza3MgXHUyMDE0IGFscmVhZHkgaGFuZGxlZCBieSBDYWxlbmRhckVuZ2luZS5nZXRBbGxUYXNrcygpXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIHRhc2tzLnB1c2goXG4gICAgICAgIC4uLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXkpXG4gICAgICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgICAgIHRpdGxlOiBxdC50aXRsZSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgY29uc3QsXG4gICAgICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBxdC5kdXJhdGlvbixcbiAgICAgICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBIYW5kbGVycyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm47XG5cbiAgICBpZiAoYWN0aXZpdHkuaGFzV29ya3NwYWNlKSB7XG4gICAgICAvLyBPcGVuIG5hdGl2ZSBPbGVuIFdvcmtzcGFjZVZpZXdcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IHtcbiAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBza2lsbHM6IFtdLFxuICAgICAgICBoYXNXb3Jrc3BhY2U6IHRydWUsXG4gICAgICAgIHNraWxsRm9sZGVyOiBhY3Rpdml0eS5za2lsbEZvbGRlcixcbiAgICAgIH07XG4gICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIHRoaXMucGx1Z2luLmFjdGl2YXRlV29ya3NwYWNlVmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb24td29ya3NwYWNlIGFjdGl2aXRpZXM6IG1hcmsgZG9uZSBpbW1lZGlhdGVseVxuICAgICAgYXdhaXQgdGhpcy5tYXJrQWN0aXZpdHlEb25lKGFjdGl2aXR5KTtcbiAgICAgIG5ldyBOb3RpY2UoYCR7YWN0aXZpdHkuZW1vaml9ICR7YWN0aXZpdHkubmFtZX0gbWFya2VkIGRvbmUhYCk7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlU2tpcEFjdGl2aXR5KGFjdGl2aXR5SWQ6IHN0cmluZywgZW5naW5lOiBPbGVuRW5naW5lKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gTWFyayBhcyBza2lwcGVkIGluIHRoZSBkYXkgbWFwIChlbmdpbmUgc3RhdGUpXG4gICAgY29uc3QgZGF5TWFwID0gZW5naW5lLmdldERheU1hcCgpO1xuICAgIGNvbnN0IGVudHJ5ID0gZGF5TWFwLmZpbmQoKGUpID0+IGUuYWN0aXZpdHlJZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS5zdGF0dXMgPSBcInNraXBwZWRcIjtcbiAgICB9XG4gICAgbmV3IE5vdGljZShcIlNraXBwZWRcIik7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2FsZW5kYXJUYXNrRG9uZShlbnRyeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuRGF5TWFwRW50cnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWVudHJ5LmlzQ2FsZW5kYXJUYXNrIHx8ICFlbnRyeS5jYWxlbmRhclNvdXJjZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKVxuICAgICk7XG5cbiAgICBzd2l0Y2ggKGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOlxuICAgICAgICBpZiAoZW50cnkuZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS50b2dnbGVEYWlseU5vdGVUYXNrKGVudHJ5LmZpbGVQYXRoLCBlbnRyeS5saW5lTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOlxuICAgICAgICBpZiAoZW50cnkuZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiBlbnRyeS5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS50b2dnbGVUYXNrc1BsdWdpblRhc2soZW50cnkuZmlsZVBhdGgsIGVudHJ5LmxpbmVOdW1iZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiB7XG4gICAgICAgIGNvbnN0IHF0SWQgPSBlbnRyeS5jYWxlbmRhclRhc2tJZD8ucmVwbGFjZShcInF0LVwiLCBcIlwiKTtcbiAgICAgICAgY29uc3QgcXQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbmQoKHEpID0+IHEuaWQgPT09IHF0SWQpO1xuICAgICAgICBpZiAocXQpIHtcbiAgICAgICAgICBxdC5kb25lID0gdHJ1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuZXcgTm90aWNlKGBcXHUyNzEzICR7ZW50cnkuYWN0aXZpdHlOYW1lfWApO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUNhbGVuZGFyVGFza1Bvc3Rwb25lKGVudHJ5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5EYXlNYXBFbnRyeSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgfHwgIWVudHJ5LmNhbGVuZGFyU291cmNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZShcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpXG4gICAgKTtcblxuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcblxuICAgIGNvbnN0IHRhc2s6IGltcG9ydChcIi4uL3R5cGVzXCIpLkNhbGVuZGFyVGFzayA9IHtcbiAgICAgIGlkOiBlbnRyeS5jYWxlbmRhclRhc2tJZCA/PyBlbnRyeS5hY3Rpdml0eUlkLFxuICAgICAgdGl0bGU6IGVudHJ5LmFjdGl2aXR5TmFtZSxcbiAgICAgIHNvdXJjZTogZW50cnkuY2FsZW5kYXJTb3VyY2UsXG4gICAgICBkYXRlOiBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCksXG4gICAgICBkb25lOiBmYWxzZSxcbiAgICAgIGZpbGVQYXRoOiBlbnRyeS5maWxlUGF0aCxcbiAgICAgIGxpbmVOdW1iZXI6IGVudHJ5LmxpbmVOdW1iZXIsXG4gICAgfTtcblxuICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnBvc3Rwb25lVGFzayh0YXNrKTtcbiAgICBuZXcgTm90aWNlKGBcXHUyM0U5ICR7ZW50cnkuYWN0aXZpdHlOYW1lfSBwb3N0cG9uZWQgdG8gdG9tb3Jyb3dgKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYXJrQWN0aXZpdHlEb25lKGFjdGl2aXR5OiB7IGlkOiBzdHJpbmc7IGZvbGRlcjogc3RyaW5nOyBwcm9wZXJ0eTogc3RyaW5nOyBjYXRlZ29yeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuQ2F0ZWdvcnk7IGRhbWFnZVBlckNvbXBsZXRpb246IG51bWJlciB9KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgY29uc3QgZm9sZGVyID0gYWN0aXZpdHkuZm9sZGVyO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBMb29rIGZvciB0b2RheSdzIGZpbGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCB0b2RheUZpbGUgPSBmaWxlcy5maW5kKFxuICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICk7XG5cbiAgICBpZiAodG9kYXlGaWxlKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIodG9kYXlGaWxlLCAoZm0pID0+IHtcbiAgICAgICAgZm1bYWN0aXZpdHkucHJvcGVydHldID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHtkYXRlU3RyfS5tZGA7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZVBhdGgsIGAtLS1cXG4ke2FjdGl2aXR5LnByb3BlcnR5fTogdHJ1ZVxcbi0tLVxcbmApO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIE1heSBhbHJlYWR5IGV4aXN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gWFAgKyBib3NzIGRhbWFnZVxuICAgIGNvbnN0IHhwID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbjtcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeVhQW2FjdGl2aXR5LmNhdGVnb3J5XSArPSB4cDtcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAtIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb25cbiAgICApO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVMb2dXZWlnaHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+TG9nIFdlaWdodDwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWlucHV0XCIgcGxhY2Vob2xkZXI9XCJXZWlnaHQgKGtnKVwiIHN0ZXA9XCIwLjFcIiBtaW49XCIyMFwiIG1heD1cIjMwMFwiIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stYWN0aW9uc1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hZGRcIj5TYXZlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYWRkQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYWRkXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuY3VycmVudFdlaWdodCB8fCBcIlwiKTtcbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdyA9IHBhcnNlRmxvYXQoaW5wdXQudmFsdWUpO1xuICAgICAgaWYgKGlzTmFOKHcpIHx8IHcgPD0gMCkge1xuICAgICAgICBuZXcgTm90aWNlKFwiRW50ZXIgYSB2YWxpZCB3ZWlnaHRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLndlaWdodExvZy5maW5kKChlKSA9PiBlLmRhdGUgPT09IHRvZGF5KTtcbiAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICBleGlzdGluZy53ZWlnaHQgPSB3O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2cucHVzaCh7IGRhdGU6IHRvZGF5LCB3ZWlnaHQ6IHcgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmN1cnJlbnRXZWlnaHQgPSB3O1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5sYXN0V2VpZ2h0TG9nRGF0ZSA9IHRvZGF5O1xuICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICBuZXcgTm90aWNlKGBXZWlnaHQgbG9nZ2VkOiAke3d9IGtnYCk7XG4gICAgICBjbG9zZSgpO1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gaW5wdXQuZm9jdXMoKSwgNTApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVUZW1wbGVVcGRhdGUodGFza0lkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0YXNrID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MuZmluZCgodCkgPT4gdC5pZCA9PT0gdGFza0lkKTtcbiAgICBpZiAoIXRhc2spIHJldHVybjtcblxuICAgIHRhc2subGFzdENvbXBsZXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICBuZXcgTm90aWNlKGAke3Rhc2suZW1vaml9ICR7dGFzay5uYW1lfSBjb21wbGV0ZWQhYCk7XG5cbiAgICAvLyBSZS1yZW5kZXJcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgLy8gLS0tIFRoZW1lIC0tLVxuXG4gIHByaXZhdGUgYXBwbHlUaGVtZU92ZXJyaWRlcyhyb290OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IG92ZXJyaWRlcyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzO1xuICAgIGlmICghb3ZlcnJpZGVzKSByZXR1cm47XG5cbiAgICBpZiAob3ZlcnJpZGVzLmJnUHJpbWFyeSkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYmctcHJpbWFyeVwiLCBvdmVycmlkZXMuYmdQcmltYXJ5KTtcbiAgICBpZiAob3ZlcnJpZGVzLmNhcmRCZykgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tY2FyZC1iZ1wiLCBvdmVycmlkZXMuY2FyZEJnKTtcbiAgICBpZiAob3ZlcnJpZGVzLnRleHRQcmltYXJ5KSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LXByaW1hcnlcIiwgb3ZlcnJpZGVzLnRleHRQcmltYXJ5KTtcbiAgICBpZiAob3ZlcnJpZGVzLnRleHRNdXRlZCkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1tdXRlZFwiLCBvdmVycmlkZXMudGV4dE11dGVkKTtcbiAgICBpZiAob3ZlcnJpZGVzLmFjY2VudEdvbGQpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWFjY2VudC1nb2xkXCIsIG92ZXJyaWRlcy5hY2NlbnRHb2xkKTtcbiAgICBpZiAob3ZlcnJpZGVzLmRhbmdlcikgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tZGFuZ2VyXCIsIG92ZXJyaWRlcy5kYW5nZXIpO1xuICAgIGlmIChvdmVycmlkZXMuc3VjY2Vzcykgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tc3VjY2Vzc1wiLCBvdmVycmlkZXMuc3VjY2Vzcyk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEJvc3MgRW5naW5lXG4vLyBSZWFkcyBib3NzIHN0YXRlIGFuZCBwcm92aWRlcyBib3NzLXJlbGF0ZWQgY2FsY3VsYXRpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIEJvc3NEZWZpbml0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBCT1NTRVMsIFJBTktfVElFUl9DT0xPUlMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQm9zc1N0YXR1cyB7XG4gIGJvc3M6IEJvc3NEZWZpbml0aW9uO1xuICBjdXJyZW50SFA6IG51bWJlcjtcbiAgbWF4SFA6IG51bWJlcjtcbiAgcGVyY2VudDogbnVtYmVyO1xuICB0aWVyOiBudW1iZXI7XG4gIHJhbms6IHN0cmluZztcbiAgdGllckNvbG9yOiBzdHJpbmc7XG4gIGluVGFydGFydXM6IGJvb2xlYW47XG4gIGlzRGFuZ2VyWm9uZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEJvc3NFbmdpbmUge1xuICBwcml2YXRlIHNldHRpbmdzOiBPbGVuU2V0dGluZ3M7XG5cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE9sZW5TZXR0aW5ncykge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgfVxuXG4gIGdldEJvc3NGb3JUaWVyKHRpZXI6IG51bWJlcik6IEJvc3NEZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIEJPU1NFUy5maW5kKChiKSA9PiBiLnRpZXIgPT09IHRpZXIpID8/IG51bGw7XG4gIH1cblxuICBnZXRDdXJyZW50Qm9zcygpOiBCb3NzRGVmaW5pdGlvbiB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLmdldEJvc3NGb3JUaWVyKHRoaXMuc2V0dGluZ3MuY3VycmVudFRpZXIpO1xuICB9XG5cbiAgZ2V0Qm9zc1N0YXR1cygpOiBCb3NzU3RhdHVzIHtcbiAgICBjb25zdCB0aWVyID0gdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllcjtcbiAgICBjb25zdCBib3NzID0gdGhpcy5nZXRDdXJyZW50Qm9zcygpID8/IEJPU1NFU1swXTtcbiAgICBjb25zdCBjdXJyZW50SFAgPSB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFA7XG4gICAgY29uc3QgbWF4SFAgPSB0aGlzLnNldHRpbmdzLmJvc3NNYXhIUDtcbiAgICBjb25zdCBwZXJjZW50ID0gbWF4SFAgPiAwID8gTWF0aC5yb3VuZCgoY3VycmVudEhQIC8gbWF4SFApICogMTAwKSA6IDA7XG4gICAgY29uc3QgdGllckNvbG9yID0gUkFOS19USUVSX0NPTE9SU1t0aWVyXSA/PyBcIiM2QjcyODBcIjtcblxuICAgIHJldHVybiB7XG4gICAgICBib3NzLFxuICAgICAgY3VycmVudEhQLFxuICAgICAgbWF4SFAsXG4gICAgICBwZXJjZW50LFxuICAgICAgdGllcixcbiAgICAgIHJhbms6IGJvc3MucmFuayxcbiAgICAgIHRpZXJDb2xvcixcbiAgICAgIGluVGFydGFydXM6IHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cyxcbiAgICAgIGlzRGFuZ2VyWm9uZTogdGhpcy5pc0RhbmdlclpvbmUoKSxcbiAgICB9O1xuICB9XG5cbiAgaXNEYW5nZXJab25lKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHsgYm9zc0N1cnJlbnRIUCwgYm9zc01heEhQIH0gPSB0aGlzLnNldHRpbmdzO1xuICAgIGlmIChib3NzTWF4SFAgPD0gMCkgcmV0dXJuIGZhbHNlO1xuICAgIHJldHVybiAoYm9zc0N1cnJlbnRIUCAvIGJvc3NNYXhIUCkgPCAwLjE1O1xuICB9XG5cbiAgaXNJblRhcnRhcnVzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmluVGFydGFydXM7XG4gIH1cblxuICBnZXRIUENvbG9yKHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHBlcmNlbnQgPiA2MCkgcmV0dXJuIFwiIzIyYzU1ZVwiO1xuICAgIGlmIChwZXJjZW50ID4gMzApIHJldHVybiBcIiNlYWIzMDhcIjtcbiAgICBpZiAocGVyY2VudCA+IDE1KSByZXR1cm4gXCIjZjk3MzE2XCI7XG4gICAgcmV0dXJuIFwiI2VmNDQ0NFwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb3JlIEVuZ2luZVxuLy8gUHJpb3JpdHkgbG9naWMsIHN1Z2dlc3Rpb24gYWxnb3JpdGhtLCBkYXkgbWFwLCBhbmFseXRpY3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7XG4gIE9sZW5TZXR0aW5ncyxcbiAgQWN0aXZpdHlDb25maWcsXG4gIENvbXBsZXRpb24sXG4gIENvbXBsZXRpb25NYXAsXG4gIERpcmVjdGl2ZVN1Z2dlc3Rpb24sXG4gIERheU1hcEVudHJ5LFxuICBDYXRlZ29yeUxldmVsLFxuICBDYXRlZ29yeSxcbiAgUHJpb3JpdHlSZWFzb24sXG59IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgTkVHTEVDVF9MT1JFLFxuICBDSEFQVEVSX05BTUVTLFxuICBTSU5HTEVfRE9NSU5BTlRfVElUTEVTLFxuICBUV09fQ0FURUdPUllfVElUTEVTLFxuICBCQUxBTkNFRF9USVRMRVMsXG4gIHRvUm9tYW4sXG59IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi9Cb3NzRW5naW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBPbGVuRW5naW5lIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuICBwcml2YXRlIGNvbXBsZXRpb25zOiBDb21wbGV0aW9uTWFwO1xuICBwcml2YXRlIG5vdzogRGF0ZTtcbiAgcHJpdmF0ZSB0b2RheTogc3RyaW5nO1xuICBwcml2YXRlIGJvc3NFbmdpbmU6IEJvc3NFbmdpbmU7XG5cbiAgY29uc3RydWN0b3Ioc2V0dGluZ3M6IE9sZW5TZXR0aW5ncywgY29tcGxldGlvbnM6IENvbXBsZXRpb25NYXAsIG5vdzogRGF0ZSkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLmNvbXBsZXRpb25zID0gY29tcGxldGlvbnM7XG4gICAgdGhpcy5ub3cgPSBub3c7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0aGlzLnRvZGF5ID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICB0aGlzLmJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG4gIH1cblxuICAvLyAtLS0gRWZmZWN0aXZlIERhdGUgKHN1cHBvcnRzIHNpbXVsYXRlZCBkYXRlICsgcGF1c2UpIC0tLVxuXG4gIHByaXZhdGUgZ2V0RWZmZWN0aXZlTm93KCk6IERhdGUge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIHtcbiAgICAgIGNvbnN0IHNpbSA9IG5ldyBEYXRlKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSk7XG4gICAgICBzaW0uc2V0SG91cnMoMTIsIDAsIDAsIDApO1xuICAgICAgcmV0dXJuIHNpbTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCIgJiYgdGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy5ub3cuZ2V0VGltZSgpIC0gdGhpcy5zZXR0aW5ncy50b3RhbFBhdXNlZFRpbWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFZmZlY3RpdmVUb2RheSgpOiBzdHJpbmcge1xuICAgIGNvbnN0IGQgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgcmV0dXJuIGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gIH1cblxuICAvLyAtLS0gRGF0YSBBY2Nlc3MgLS0tXG5cbiAgZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IGEuZW5hYmxlZCk7XG4gIH1cblxuICBnZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQ6IHN0cmluZyk6IENvbXBsZXRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGlvbnNbYWN0aXZpdHlJZF0gPz8gW107XG4gIH1cblxuICBnZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgdG9kYXlNcyA9IG5ldyBEYXRlKGVmZmVjdGl2ZU5vdykuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWREYXRlcyA9IGNvbXBzXG4gICAgICAuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZClcbiAgICAgIC5tYXAoKGMpID0+IG5ldyBEYXRlKGMuZGF0ZSkuZ2V0VGltZSgpKVxuICAgICAgLmZpbHRlcigodCkgPT4gIWlzTmFOKHQpICYmIHQgPD0gdG9kYXlNcylcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiIC0gYSk7XG5cbiAgICBpZiAoY29tcGxldGVkRGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gOTk5O1xuXG4gICAgY29uc3QgbXNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICAgIHJldHVybiBNYXRoLmZsb29yKCh0b2RheU1zIC0gY29tcGxldGVkRGF0ZXNbMF0pIC8gbXNQZXJEYXkpO1xuICB9XG5cbiAgaXNEb25lVG9kYXkoYWN0aXZpdHlJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWZmZWN0aXZlVG9kYXkgPSB0aGlzLmdldEVmZmVjdGl2ZVRvZGF5KCk7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgcmV0dXJuIGNvbXBzLnNvbWUoKGMpID0+IGMuZGF0ZSA9PT0gZWZmZWN0aXZlVG9kYXkgJiYgYy5jb21wbGV0ZWQpO1xuICB9XG5cbiAgLy8gLS0tIFdlZWtseSBQcm9ncmVzcyAtLS1cblxuICBnZXRXZWVrbHlQcm9ncmVzcyhhY3Rpdml0eUlkOiBzdHJpbmcpOiB7IGRvbmU6IG51bWJlcjsgdGFyZ2V0OiBudW1iZXIgfSB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuIHsgZG9uZTogMCwgdGFyZ2V0OiAwIH07XG5cbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3Qgd2Vla0VuZCA9IG5ldyBEYXRlKHdlZWtTdGFydCk7XG4gICAgd2Vla0VuZC5zZXREYXRlKHdlZWtFbmQuZ2V0RGF0ZSgpICsgNyk7XG5cbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBkb25lID0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICB9KS5sZW5ndGg7XG5cbiAgICByZXR1cm4geyBkb25lLCB0YXJnZXQ6IGFjdGl2aXR5LndlZWtseVRhcmdldCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXZWVrU3RhcnQoZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShkYXRlKTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGNvbnN0IGRheSA9IGQuZ2V0RGF5KCk7XG4gICAgY29uc3QgZGlmZiA9IGQuZ2V0RGF0ZSgpIC0gZGF5ICsgKGRheSA9PT0gMCA/IC02IDogMSk7IC8vIE1vbmRheSBzdGFydFxuICAgIGQuc2V0RGF0ZShkaWZmKTtcbiAgICByZXR1cm4gZDtcbiAgfVxuXG4gIC8vIC0tLSBTdHJlYWtzIC0tLVxuXG4gIGdldEFjdGl2aXR5U3RyZWFrKGFjdGl2aXR5SWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKGVmZmVjdGl2ZU5vdyk7XG4gICAgdG9kYXkuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBjb25zdCBjb21wbGV0ZWREYXRlcyA9IGNvbXBzXG4gICAgICAuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZClcbiAgICAgIC5tYXAoKGMpID0+IHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSlcbiAgICAgIC5maWx0ZXIoKGQpID0+ICFpc05hTihkLmdldFRpbWUoKSkgJiYgZCA8PSB0b2RheSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmdldFRpbWUoKSAtIGEuZ2V0VGltZSgpKTtcblxuICAgIGlmIChjb21wbGV0ZWREYXRlcy5sZW5ndGggPT09IDApIHJldHVybiAwO1xuXG4gICAgbGV0IHN0cmVhayA9IDA7XG4gICAgY29uc3QgY2hlY2tEYXRlID0gbmV3IERhdGUoY29tcGxldGVkRGF0ZXNbMF0pO1xuICAgIGZvciAoY29uc3QgZGF0ZSBvZiBjb21wbGV0ZWREYXRlcykge1xuICAgICAgaWYgKGRhdGUuZ2V0VGltZSgpID09PSBjaGVja0RhdGUuZ2V0VGltZSgpKSB7XG4gICAgICAgIHN0cmVhaysrO1xuICAgICAgICBjaGVja0RhdGUuc2V0RGF0ZShjaGVja0RhdGUuZ2V0RGF0ZSgpIC0gMSk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGUgPCBjaGVja0RhdGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdHJlYWs7XG4gIH1cblxuICBnZXRPdmVyYWxsU3RyZWFrKCk6IG51bWJlciB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcbiAgICBjb25zdCBzdHJlYWtzID0gYWN0aXZpdGllcy5tYXAoKGEpID0+IHRoaXMuZ2V0QWN0aXZpdHlTdHJlYWsoYS5pZCkpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCAuLi5zdHJlYWtzKTtcbiAgfVxuXG4gIC8vIC0tLSBBbmFseXRpY3MgLS0tXG5cbiAgZ2V0VG90YWxDb21wbGV0aW9ucygpOiBudW1iZXIge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIHRvdGFsICs9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICB9XG4gICAgcmV0dXJuIHRvdGFsO1xuICB9XG5cbiAgZ2V0RGF5c09mUHJlc2VuY2UoKTogbnVtYmVyIHtcbiAgICBjb25zdCBkYXlzU2V0ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIGZvciAoY29uc3QgYyBvZiBjb21wcykge1xuICAgICAgICBpZiAoYy5jb21wbGV0ZWQpIGRheXNTZXQuYWRkKGMuZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkYXlzU2V0LnNpemU7XG4gIH1cblxuICAvLyAtLS0gQ2F0ZWdvcnkgWFAgJiBMZXZlbHMgLS0tXG5cbiAgZ2V0Q2F0ZWdvcnlYUChjYXRlZ29yeTogQ2F0ZWdvcnkpOiBudW1iZXIge1xuICAgIGNvbnN0IHhwUGVyID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uO1xuICAgIGxldCB4cCA9IHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUFtjYXRlZ29yeV0gPz8gMDtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBpZiAoYWN0aXZpdHkuY2F0ZWdvcnkgIT09IGNhdGVnb3J5KSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIHhwID0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoICogeHBQZXI7XG4gICAgfVxuICAgIHJldHVybiB4cDtcbiAgfVxuXG4gIGdldENhdGVnb3J5TGV2ZWwoY2F0ZWdvcnk6IENhdGVnb3J5KTogQ2F0ZWdvcnlMZXZlbCB7XG4gICAgY29uc3QgeHAgPSB0aGlzLmdldENhdGVnb3J5WFAoY2F0ZWdvcnkpO1xuICAgIGNvbnN0IGxldmVsID0gTWF0aC5mbG9vcih4cCAvIDEwMCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NUb05leHQgPSB4cCAlIDEwMDtcbiAgICByZXR1cm4geyBjYXRlZ29yeSwgeHAsIGxldmVsLCBwcm9ncmVzc1RvTmV4dCB9O1xuICB9XG5cbiAgZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKTogQ2F0ZWdvcnlMZXZlbFtdIHtcbiAgICByZXR1cm4gKFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pLm1hcCgoYykgPT4gdGhpcy5nZXRDYXRlZ29yeUxldmVsKGMpKTtcbiAgfVxuXG4gIGdldEV1ZGFpbW9uaWFJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldEFsbENhdGVnb3J5TGV2ZWxzKCkucmVkdWNlKChzdW0sIGNsKSA9PiBzdW0gKyBjbC5sZXZlbCwgMCk7XG4gIH1cblxuICBnZXRDaGFwdGVyKCk6IHsgbnVtYmVyOiBudW1iZXI7IG5hbWU6IHN0cmluZyB9IHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gICAgY29uc3QgY2hhcHRlck51bSA9IE1hdGgubWluKDEwLCBNYXRoLmZsb29yKGluZGV4IC8gMTApICsgMSk7XG4gICAgY29uc3QgbmFtZSA9IENIQVBURVJfTkFNRVNbY2hhcHRlck51bV0gPz8gXCJJbml0aWF0ZVwiO1xuICAgIHJldHVybiB7IG51bWJlcjogY2hhcHRlck51bSwgbmFtZSB9O1xuICB9XG5cbiAgZ2V0RXVkYWltb25pYVByb2dyZXNzKCk6IG51bWJlciB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuICAgIHJldHVybiAoaW5kZXggJSAxMCkgKiAxMDsgLy8gMC0xMDAgcHJvZ3Jlc3Mgd2l0aGluIGNoYXB0ZXJcbiAgfVxuXG4gIC8vIC0tLSBEeW5hbWljIFRpdGxlIC0tLVxuXG4gIGdldER5bmFtaWNUaXRsZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGUpIHJldHVybiB0aGlzLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGU7XG5cbiAgICBjb25zdCBsZXZlbHMgPSB0aGlzLmdldEFsbENhdGVnb3J5TGV2ZWxzKCk7XG4gICAgY29uc3QgdG90YWxDb21wbGV0aW9ucyA9IHRoaXMuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuXG4gICAgY29uc3QgY2F0ZWdvcnlDb21wbGV0aW9uczogUmVjb3JkPENhdGVnb3J5LCBudW1iZXI+ID0geyBib2R5OiAwLCBtaW5kOiAwLCBzcGlyaXQ6IDAgfTtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgY2F0ZWdvcnlDb21wbGV0aW9uc1thY3Rpdml0eS5jYXRlZ29yeV0gKz0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoO1xuICAgIH1cblxuICAgIGNvbnN0IHRvdGFsID0gT2JqZWN0LnZhbHVlcyhjYXRlZ29yeUNvbXBsZXRpb25zKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcbiAgICBpZiAodG90YWwgPT09IDApIHJldHVybiBcIkluaXRpYXRlXCI7XG5cbiAgICBjb25zdCB3ZWlnaHRzOiBSZWNvcmQ8Q2F0ZWdvcnksIG51bWJlcj4gPSB7XG4gICAgICBib2R5OiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLmJvZHkgLyB0b3RhbCA6IDAsXG4gICAgICBtaW5kOiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLm1pbmQgLyB0b3RhbCA6IDAsXG4gICAgICBzcGlyaXQ6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMuc3Bpcml0IC8gdG90YWwgOiAwLFxuICAgIH07XG5cbiAgICBjb25zdCB0aWVyID0gdG90YWxDb21wbGV0aW9ucyA8IDUwID8gXCJsaWdodFwiIDogdG90YWxDb21wbGV0aW9ucyA8IDIwMCA/IFwibWlkXCIgOiBcImhlYXZ5XCI7XG5cbiAgICAvLyBDaGVjayBzaW5nbGUgZG9taW5hbnQgKD49IDcwJSlcbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKSB7XG4gICAgICBpZiAod2VpZ2h0c1tjYXRdID49IDAuNzApIHtcbiAgICAgICAgcmV0dXJuIFNJTkdMRV9ET01JTkFOVF9USVRMRVNbY2F0XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDaGVjayBiYWxhbmNlZCAoYWxsID49IDI1JSlcbiAgICBpZiAod2VpZ2h0cy5ib2R5ID49IDAuMjUgJiYgd2VpZ2h0cy5taW5kID49IDAuMjUgJiYgd2VpZ2h0cy5zcGlyaXQgPj0gMC4yNSkge1xuICAgICAgcmV0dXJuIEJBTEFOQ0VEX1RJVExFU1t0aWVyXSA/PyBcIkluaXRpYXRlIG9mIEJhbGFuY2VcIjtcbiAgICB9XG5cbiAgICAvLyBDaGVjayB0d28tY2F0ZWdvcnkgY29tYmluYXRpb25zIChlYWNoID49IDMwJSlcbiAgICBjb25zdCBjYXRzID0gKFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pXG4gICAgICAuZmlsdGVyKChjKSA9PiB3ZWlnaHRzW2NdID49IDAuMzApXG4gICAgICAuc29ydCgpO1xuXG4gICAgaWYgKGNhdHMubGVuZ3RoID09PSAyKSB7XG4gICAgICBjb25zdCBrZXkgPSBjYXRzLmpvaW4oXCIrXCIpO1xuICAgICAgcmV0dXJuIFRXT19DQVRFR09SWV9USVRMRVNba2V5XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjazogdXNlIGRvbWluYW50IGNhdGVnb3J5XG4gICAgY29uc3QgZG9taW5hbnQgPSAoT2JqZWN0LmVudHJpZXMod2VpZ2h0cykgYXMgW0NhdGVnb3J5LCBudW1iZXJdW10pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYlsxXSAtIGFbMV0pWzBdWzBdO1xuICAgIHJldHVybiBTSU5HTEVfRE9NSU5BTlRfVElUTEVTW2RvbWluYW50XT8uW3RpZXJdID8/IFwiSW5pdGlhdGVcIjtcbiAgfVxuXG4gIC8vIC0tLSBTdWdnZXN0aW9uIEFsZ29yaXRobSAoV2F0ZXJmYWxsKSAtLS1cblxuICBnZXRTdWdnZXN0aW9uKCk6IERpcmVjdGl2ZVN1Z2dlc3Rpb24gfCBudWxsIHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuICAgIGlmIChhY3Rpdml0aWVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyAxLiBERUFUSCBDSEVDS1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihhY3Rpdml0aWVzWzBdLCBcImRlYXRoXCIsIFwiRXNjYXBlIFRhcnRhcnVzIFx1MjAxNCBjb21wbGV0ZSB5b3VyIHBlbmFuY2UuXCIpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmZhaWxlZFRocmVzaG9sZERheXMgPj0gMikge1xuICAgICAgY29uc3QgbmVnbGVjdGVkID0gdGhpcy5nZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXMpO1xuICAgICAgaWYgKG5lZ2xlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihuZWdsZWN0ZWRbMF0sIFwiZGVhdGhcIiwgXCJEZWF0aCBsb29tcy4gQWN0IG5vdyBvciBkZXNjZW5kIHRvIFRhcnRhcnVzLlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAyLiBCT1NTIEZJTklTSFxuICAgIGlmICh0aGlzLmJvc3NFbmdpbmUuaXNEYW5nZXJab25lKCkpIHtcbiAgICAgIGNvbnN0IGJlc3QgPSB0aGlzLmdldEhpZ2hlc3REYW1hZ2VBY3Rpdml0eShhY3Rpdml0aWVzKTtcbiAgICAgIGlmIChiZXN0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihiZXN0LCBcImJvc3NcIiwgXCJPbmUgZmluYWwgYmxvdyByZW1haW5zLiBGaW5pc2ggdGhlIGJlYXN0LlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBORUdMRUNUICsgUFJJT1JJVFlcbiAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcyk7XG4gICAgaWYgKG5lZ2xlY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0b3AgPSB0aGlzLmFwcGx5UnVsZXMobmVnbGVjdGVkKTtcbiAgICAgIGlmICh0b3ApIHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUodG9wLmlkKTtcbiAgICAgICAgY29uc3QgbG9yZSA9IE5FR0xFQ1RfTE9SRVt0b3AuaWRdID8/IGAke2RheXN9IGRheXMgc2luY2UgeW91IGxhc3QgcHJhY3RpY2VkLiBUaGUgc2tpbGwgYXRyb3BoaWVzLmA7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0b3AsIFwibmVnbGVjdFwiLCBsb3JlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA0LiBXRUVLTFkgQ0FUQ0gtVVBcbiAgICBjb25zdCBiZWhpbmRTY2hlZHVsZSA9IHRoaXMuZ2V0QmVoaW5kU2NoZWR1bGVBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmIChiZWhpbmRTY2hlZHVsZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCB0b3AgPSBiZWhpbmRTY2hlZHVsZVswXTtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyh0b3AuaWQpO1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRvcCwgXCJ3ZWVrbHlcIiwgYEJlaGluZCBzY2hlZHVsZTogJHtwcm9ncmVzcy5kb25lfS8ke3Byb2dyZXNzLnRhcmdldH0gdGhpcyB3ZWVrLmApO1xuICAgIH1cblxuICAgIC8vIDUuIENIQUlOIENIRUNLXG4gICAgY29uc3QgY2hhaW5lZCA9IHRoaXMuZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKGNoYWluZWQubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGNoYWluZWRbMF0sIFwiY2hhaW5cIiwgXCJZb3VyIHByZXJlcXVpc2l0ZSBpcyBkb25lLiBUaW1lIGZvciB0aGUgbmV4dCBzdGVwLlwiKTtcbiAgICB9XG5cbiAgICAvLyA2LiBUSU1FLUJBU0VEXG4gICAgY29uc3QgdGltZUJhc2VkID0gdGhpcy5nZXRUaW1lQmFzZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmICh0aW1lQmFzZWQubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRpbWVCYXNlZFswXSwgXCJ0aW1lXCIsIFwiVGhlIHRpbWUgaXMgcmlnaHQuIEJlZ2luLlwiKTtcbiAgICB9XG5cbiAgICAvLyA3LiBCQUxBTkNFRCBGQUxMQkFDS1xuICAgIGNvbnN0IGxvbmdlc3RHYXAgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGIuaWQpIC0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhLmlkKSk7XG5cbiAgICBpZiAobG9uZ2VzdEdhcC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24obG9uZ2VzdEdhcFswXSwgXCJiYWxhbmNlZFwiLCBcIkJhbGFuY2UgeW91ciBwYXRoLiBUaGlzIGhhcyB3YWl0ZWQgbG9uZ2VzdC5cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkU3VnZ2VzdGlvbihcbiAgICBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsXG4gICAgcmVhc29uOiBQcmlvcml0eVJlYXNvbixcbiAgICBsb3JlVGV4dDogc3RyaW5nXG4gICk6IERpcmVjdGl2ZVN1Z2dlc3Rpb24ge1xuICAgIHJldHVybiB7XG4gICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgIHJlYXNvbixcbiAgICAgIGRheXNTaW5jZUxhc3REb25lOiB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKSxcbiAgICAgIGxvcmVUZXh0LFxuICAgICAgcHJpb3JpdHk6IGFjdGl2aXR5LnByaW9yaXR5LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGEuaWQpO1xuICAgICAgICByZXR1cm4gZGF5cyA+PSBhLm5lZ2xlY3RUaHJlc2hvbGQgJiYgIXRoaXMuaXNEb25lVG9kYXkoYS5pZCk7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlSdWxlcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWcgfCBudWxsIHtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICAgIC8vIENoZWNrIGFsdGVybmF0aW5nIHJ1bGVcbiAgICAgIGlmIChhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCkge1xuICAgICAgICBjb25zdCBhbHREYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCk7XG4gICAgICAgIGNvbnN0IHRoaXNEYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eS5pZCk7XG4gICAgICAgIC8vIElmIHRoaXMgd2FzIGRvbmUgbW9yZSByZWNlbnRseSB0aGFuIGFsdGVybmF0ZSwgcHJlZmVyIGFsdGVybmF0ZVxuICAgICAgICBpZiAodGhpc0RheXMgPCBhbHREYXlzKSB7XG4gICAgICAgICAgY29uc3QgYWx0ID0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoKTtcbiAgICAgICAgICBpZiAoYWx0ICYmIGFsdC5lbmFibGVkICYmICF0aGlzLmlzRG9uZVRvZGF5KGFsdC5pZCkpIHJldHVybiBhbHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgYmxvY2tpbmcgcnVsZXNcbiAgICAgIGlmIChhY3Rpdml0eS5ibG9ja3MgJiYgYWN0aXZpdHkuYmxvY2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVGhpcyBhY3Rpdml0eSBibG9ja3Mgb3RoZXJzIHdoZW4gbmVnbGVjdGVkIFx1MjAxNCBpdCBzaG91bGQgYmUgcHJpb3JpdGl6ZWRcbiAgICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWN0aXZpdHk7XG4gICAgfVxuICAgIHJldHVybiBhY3Rpdml0aWVzWzBdID8/IG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldEhpZ2hlc3REYW1hZ2VBY3Rpdml0eShhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWcgfCBudWxsIHtcbiAgICBjb25zdCBub3REb25lID0gYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKTtcbiAgICBpZiAobm90RG9uZS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgIHJldHVybiBub3REb25lLnNvcnQoKGEsIGIpID0+IGIuZGFtYWdlUGVyQ29tcGxldGlvbiAtIGEuZGFtYWdlUGVyQ29tcGxldGlvbilbMF07XG4gIH1cblxuICBwcml2YXRlIGdldEJlaGluZFNjaGVkdWxlQWN0aXZpdGllcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCBkYXlPZldlZWsgPSBlZmZlY3RpdmVOb3cuZ2V0RGF5KCk7IC8vIDA9U3VuXG4gICAgY29uc3QgYWRqdXN0ZWREYXkgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrOyAvLyBNb249MVxuICAgIGNvbnN0IHJlbWFpbmluZ0RheXMgPSA3IC0gYWRqdXN0ZWREYXkgKyAxO1xuXG4gICAgcmV0dXJuIGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNEb25lVG9kYXkoYS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKGEuaWQpO1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBwcm9ncmVzcy50YXJnZXQgLSBwcm9ncmVzcy5kb25lO1xuICAgICAgICByZXR1cm4gcmVtYWluaW5nID4gMCAmJiByZW1haW5pbmcgPj0gcmVtYWluaW5nRGF5cztcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGFpbmVkQWN0aXZpdGllcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgcmV0dXJuIGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICBpZiAoIWEuY2hhaW5BZnRlciB8fCB0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdGhpcy5pc0RvbmVUb2RheShhLmNoYWluQWZ0ZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaW1lQmFzZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCBob3VyID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKS5nZXRIb3VycygpO1xuICAgIGNvbnN0IHsgbW9ybmluZ1N0YXJ0LCBtb3JuaW5nRW5kLCBhZnRlcm5vb25FbmQsIGV2ZW5pbmdFbmQgfSA9IHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnO1xuXG4gICAgY29uc3QgY3VycmVudFBlcmlvZCA9IGhvdXIgPCBtb3JuaW5nRW5kID8gXCJtb3JuaW5nXCIgOlxuICAgICAgaG91ciA8IGFmdGVybm9vbkVuZCA/IFwiYWZ0ZXJub29uXCIgOlxuICAgICAgaG91ciA8IGV2ZW5pbmdFbmQgPyBcImV2ZW5pbmdcIiA6IFwiYW55dGltZVwiO1xuXG4gICAgLy8gRmlyc3QgY2hlY2sgdGltZSBvdmVycmlkZXNcbiAgICBjb25zdCBvdmVycmlkZGVuID0gYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKSByZXR1cm4gZmFsc2U7XG4gICAgICBpZiAoIWEudGltZU92ZXJyaWRlKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gaG91ciA+PSBhLnRpbWVPdmVycmlkZS5zdGFydEhvdXIgJiYgaG91ciA8IGEudGltZU92ZXJyaWRlLmVuZEhvdXI7XG4gICAgfSk7XG4gICAgaWYgKG92ZXJyaWRkZW4ubGVuZ3RoID4gMCkgcmV0dXJuIG92ZXJyaWRkZW4uc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuXG4gICAgLy8gVGhlbiBjaGVjayBwcmVmZXJyZWQgdGltZVxuICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSAmJiAoYS5wcmVmZXJyZWRUaW1lID09PSBjdXJyZW50UGVyaW9kIHx8IGEucHJlZmVycmVkVGltZSA9PT0gXCJhbnl0aW1lXCIpKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIC8vIC0tLSBEYXkgTWFwIEdlbmVyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBjYWxlbmRhckVudHJpZXM6IERheU1hcEVudHJ5W10gPSBbXTtcblxuICBzZXRDYWxlbmRhckVudHJpZXMoZW50cmllczogRGF5TWFwRW50cnlbXSk6IHZvaWQge1xuICAgIHRoaXMuY2FsZW5kYXJFbnRyaWVzID0gZW50cmllcztcbiAgfVxuXG4gIGdldERheU1hcCgpOiBEYXlNYXBFbnRyeVtdIHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkpO1xuICAgIGNvbnN0IHsgbW9ybmluZ1N0YXJ0LCBtb3JuaW5nRW5kLCBhZnRlcm5vb25FbmQsIGV2ZW5pbmdFbmQsIGJ1ZmZlck1pbnV0ZXMgfSA9IHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnO1xuXG4gICAgY29uc3QgdGltZVNsb3RzOiB7IHBlcmlvZDogc3RyaW5nOyBzdGFydEhvdXI6IG51bWJlcjsgZW5kSG91cjogbnVtYmVyIH1bXSA9IFtcbiAgICAgIHsgcGVyaW9kOiBcIm1vcm5pbmdcIiwgc3RhcnRIb3VyOiBtb3JuaW5nU3RhcnQsIGVuZEhvdXI6IG1vcm5pbmdFbmQgfSxcbiAgICAgIHsgcGVyaW9kOiBcImFmdGVybm9vblwiLCBzdGFydEhvdXI6IG1vcm5pbmdFbmQsIGVuZEhvdXI6IGFmdGVybm9vbkVuZCB9LFxuICAgICAgeyBwZXJpb2Q6IFwiZXZlbmluZ1wiLCBzdGFydEhvdXI6IGFmdGVybm9vbkVuZCwgZW5kSG91cjogZXZlbmluZ0VuZCB9LFxuICAgIF07XG5cbiAgICBjb25zdCBlbnRyaWVzOiBEYXlNYXBFbnRyeVtdID0gW107XG4gICAgY29uc3Qgc2NoZWR1bGVkID0gbmV3IFNldDxzdHJpbmc+KCk7XG5cbiAgICAvLyAxLiBQbGFjZSB0aW1lLW92ZXJyaWRlIGFjdGl2aXRpZXMgZmlyc3RcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICAgIGlmICghYWN0aXZpdHkudGltZU92ZXJyaWRlKSBjb250aW51ZTtcbiAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICBzdGFydEhvdXI6IGFjdGl2aXR5LnRpbWVPdmVycmlkZS5zdGFydEhvdXIsXG4gICAgICAgIGVuZEhvdXI6IGFjdGl2aXR5LnRpbWVPdmVycmlkZS5lbmRIb3VyLFxuICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24sXG4gICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgIHByaW9yaXR5UmVhc29uOiBcInRpbWVcIixcbiAgICAgIH0pO1xuICAgICAgc2NoZWR1bGVkLmFkZChhY3Rpdml0eS5pZCk7XG4gICAgfVxuXG4gICAgLy8gMi4gUGxhY2UgbmVnbGVjdGVkIGFjdGl2aXRpZXMgaW4gdGhlaXIgcHJlZmVycmVkIHNsb3RzXG4gICAgY29uc3QgbmVnbGVjdGVkID0gdGhpcy5nZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXMpXG4gICAgICAuZmlsdGVyKChhKSA9PiAhc2NoZWR1bGVkLmhhcyhhLmlkKSk7XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIG5lZ2xlY3RlZCkge1xuICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuZmluZFNsb3RGb3JBY3Rpdml0eShhY3Rpdml0eSwgdGltZVNsb3RzLCBlbnRyaWVzLCBidWZmZXJNaW51dGVzKTtcbiAgICAgIGlmIChzbG90KSB7XG4gICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgICAgc3RhcnRIb3VyOiBzbG90LnN0YXJ0SG91cixcbiAgICAgICAgICBlbmRIb3VyOiBzbG90LmVuZEhvdXIsXG4gICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uLFxuICAgICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgICAgcHJpb3JpdHlSZWFzb246IFwibmVnbGVjdFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2NoZWR1bGVkLmFkZChhY3Rpdml0eS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gUGxhY2UgcmVtYWluaW5nIHdlZWtseS10YXJnZXQgYWN0aXZpdGllc1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+ICFzY2hlZHVsZWQuaGFzKGEuaWQpKVxuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3MoYS5pZCk7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcy5kb25lIDwgcHJvZ3Jlc3MudGFyZ2V0O1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHJlbWFpbmluZykge1xuICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuZmluZFNsb3RGb3JBY3Rpdml0eShhY3Rpdml0eSwgdGltZVNsb3RzLCBlbnRyaWVzLCBidWZmZXJNaW51dGVzKTtcbiAgICAgIGlmIChzbG90KSB7XG4gICAgICAgIGVudHJpZXMucHVzaCh7XG4gICAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgICAgc3RhcnRIb3VyOiBzbG90LnN0YXJ0SG91cixcbiAgICAgICAgICBlbmRIb3VyOiBzbG90LmVuZEhvdXIsXG4gICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uLFxuICAgICAgICAgIHN0YXR1czogXCJwZW5kaW5nXCIsXG4gICAgICAgICAgcHJpb3JpdHlSZWFzb246IFwid2Vla2x5XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBzY2hlZHVsZWQuYWRkKGFjdGl2aXR5LmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNZXJnZSBjYWxlbmRhciB0YXNrIGVudHJpZXNcbiAgICBmb3IgKGNvbnN0IGNhbEVudHJ5IG9mIHRoaXMuY2FsZW5kYXJFbnRyaWVzKSB7XG4gICAgICBlbnRyaWVzLnB1c2goY2FsRW50cnkpO1xuICAgIH1cblxuICAgIC8vIFNvcnQgYnkgc3RhcnQgdGltZVxuICAgIGVudHJpZXMuc29ydCgoYSwgYikgPT4gYS5zdGFydEhvdXIgLSBiLnN0YXJ0SG91cik7XG5cbiAgICAvLyBNYXJrIGRvbmUgYWN0aXZpdGllcyAob25seSBmb3Igbm9uLWNhbGVuZGFyIGVudHJpZXMpXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgICBpZiAoIWVudHJ5LmlzQ2FsZW5kYXJUYXNrICYmIHRoaXMuaXNEb25lVG9kYXkoZW50cnkuYWN0aXZpdHlJZCkpIHtcbiAgICAgICAgZW50cnkuc3RhdHVzID0gXCJkb25lXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBwcml2YXRlIGZpbmRTbG90Rm9yQWN0aXZpdHkoXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICAgIHRpbWVTbG90czogeyBwZXJpb2Q6IHN0cmluZzsgc3RhcnRIb3VyOiBudW1iZXI7IGVuZEhvdXI6IG51bWJlciB9W10sXG4gICAgZXhpc3Rpbmc6IERheU1hcEVudHJ5W10sXG4gICAgYnVmZmVyTWludXRlczogbnVtYmVyXG4gICk6IHsgc3RhcnRIb3VyOiBudW1iZXI7IGVuZEhvdXI6IG51bWJlciB9IHwgbnVsbCB7XG4gICAgY29uc3QgZHVyYXRpb25Ib3VycyA9IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uIC8gNjA7XG4gICAgY29uc3QgYnVmZmVySG91cnMgPSBidWZmZXJNaW51dGVzIC8gNjA7XG5cbiAgICAvLyBGaW5kIHByZWZlcnJlZCBzbG90XG4gICAgY29uc3QgcHJlZmVycmVkU2xvdCA9IHRpbWVTbG90cy5maW5kKChzKSA9PiBzLnBlcmlvZCA9PT0gYWN0aXZpdHkucHJlZmVycmVkVGltZSlcbiAgICAgID8/IHRpbWVTbG90cy5maW5kKChzKSA9PiBzLnBlcmlvZCA9PT0gXCJhbnl0aW1lXCIpXG4gICAgICA/PyB0aW1lU2xvdHNbMF07XG5cbiAgICAvLyBGaW5kIGZpcnN0IGF2YWlsYWJsZSB0aW1lIGluIHByZWZlcnJlZCBzbG90XG4gICAgbGV0IGNhbmRpZGF0ZVN0YXJ0ID0gcHJlZmVycmVkU2xvdC5zdGFydEhvdXI7XG5cbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGV4aXN0aW5nLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRIb3VyIC0gYi5zdGFydEhvdXIpKSB7XG4gICAgICBpZiAoZW50cnkuc3RhcnRIb3VyIDwgcHJlZmVycmVkU2xvdC5lbmRIb3VyICYmIGVudHJ5LmVuZEhvdXIgPiBjYW5kaWRhdGVTdGFydCkge1xuICAgICAgICBjYW5kaWRhdGVTdGFydCA9IGVudHJ5LmVuZEhvdXIgKyBidWZmZXJIb3VycztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjYW5kaWRhdGVFbmQgPSBjYW5kaWRhdGVTdGFydCArIGR1cmF0aW9uSG91cnM7XG4gICAgaWYgKGNhbmRpZGF0ZUVuZCA8PSBwcmVmZXJyZWRTbG90LmVuZEhvdXIpIHtcbiAgICAgIHJldHVybiB7IHN0YXJ0SG91cjogY2FuZGlkYXRlU3RhcnQsIGVuZEhvdXI6IGNhbmRpZGF0ZUVuZCB9O1xuICAgIH1cblxuICAgIC8vIFRyeSBhbnkgc2xvdFxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiB0aW1lU2xvdHMpIHtcbiAgICAgIGlmIChzbG90ID09PSBwcmVmZXJyZWRTbG90KSBjb250aW51ZTtcbiAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gc2xvdC5zdGFydEhvdXI7XG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGV4aXN0aW5nLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRIb3VyIC0gYi5zdGFydEhvdXIpKSB7XG4gICAgICAgIGlmIChlbnRyeS5zdGFydEhvdXIgPCBzbG90LmVuZEhvdXIgJiYgZW50cnkuZW5kSG91ciA+IGNhbmRpZGF0ZVN0YXJ0KSB7XG4gICAgICAgICAgY2FuZGlkYXRlU3RhcnQgPSBlbnRyeS5lbmRIb3VyICsgYnVmZmVySG91cnM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChjYW5kaWRhdGVTdGFydCArIGR1cmF0aW9uSG91cnMgPD0gc2xvdC5lbmRIb3VyKSB7XG4gICAgICAgIHJldHVybiB7IHN0YXJ0SG91cjogY2FuZGlkYXRlU3RhcnQsIGVuZEhvdXI6IGNhbmRpZGF0ZVN0YXJ0ICsgZHVyYXRpb25Ib3VycyB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gLS0tIFdlZWtseSBEYXRhIGZvciBCYXIgQ2hhcnQgLS0tXG5cbiAgZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpOiBBcnJheTx7IGRheTogc3RyaW5nOyBkYXRlOiBzdHJpbmc7IGNvbXBsZXRpb25zOiBNYXA8Q2F0ZWdvcnksIG51bWJlcj4gfT4ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3Qgd2Vla1N0YXJ0ID0gdGhpcy5nZXRXZWVrU3RhcnQoZWZmZWN0aXZlTm93KTtcbiAgICBjb25zdCBkYXlzID0gW1wiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCIsIFwiU3VuXCJdO1xuICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8eyBkYXk6IHN0cmluZzsgZGF0ZTogc3RyaW5nOyBjb21wbGV0aW9uczogTWFwPENhdGVnb3J5LCBudW1iZXI+IH0+ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKHdlZWtTdGFydCk7XG4gICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyBpKTtcbiAgICAgIGNvbnN0IGRhdGVTdHIgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgY29uc3QgZGF5Q29tcGxldGlvbnMgPSBuZXcgTWFwPENhdGVnb3J5LCBudW1iZXI+KCk7XG5cbiAgICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgICAgY29uc3QgZG9uZSA9IGNvbXBzLnNvbWUoKGMpID0+IGMuZGF0ZSA9PT0gZGF0ZVN0ciAmJiBjLmNvbXBsZXRlZCk7XG4gICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudCA9IGRheUNvbXBsZXRpb25zLmdldChhY3Rpdml0eS5jYXRlZ29yeSkgPz8gMDtcbiAgICAgICAgICBkYXlDb21wbGV0aW9ucy5zZXQoYWN0aXZpdHkuY2F0ZWdvcnksIGN1cnJlbnQgKyAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXN1bHQucHVzaCh7IGRheTogZGF5c1tpXSwgZGF0ZTogZGF0ZVN0ciwgY29tcGxldGlvbnM6IGRheUNvbXBsZXRpb25zIH0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBnZXRBY3RpdmVEYXlzVGhpc1dlZWsoKTogbnVtYmVyIHtcbiAgICBjb25zdCB3ZWVrbHkgPSB0aGlzLmdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTtcbiAgICByZXR1cm4gd2Vla2x5LmZpbHRlcigoZCkgPT4ge1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIGQuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbCArPSB2OyB9KTtcbiAgICAgIHJldHVybiB0b3RhbCA+IDA7XG4gICAgfSkubGVuZ3RoO1xuICB9XG5cbiAgZ2V0QmVzdERheVRoaXNXZWVrKCk6IHN0cmluZyB7XG4gICAgY29uc3Qgd2Vla2x5ID0gdGhpcy5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gICAgbGV0IGJlc3QgPSB3ZWVrbHlbMF07XG4gICAgbGV0IGJlc3RUb3RhbCA9IDA7XG4gICAgZm9yIChjb25zdCBkIG9mIHdlZWtseSkge1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIGQuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbCArPSB2OyB9KTtcbiAgICAgIGlmICh0b3RhbCA+IGJlc3RUb3RhbCkge1xuICAgICAgICBiZXN0VG90YWwgPSB0b3RhbDtcbiAgICAgICAgYmVzdCA9IGQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiZXN0VG90YWwgPiAwID8gYmVzdC5kYXkgOiBcIi0tXCI7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IENhbGVuZGFyIEVuZ2luZVxuLy8gUmVhZHMgdGFza3MgZnJvbSBEYWlseSBOb3RlcywgVGFza3MgcGx1Z2luLCBhbmQgUXVpY2sgVGFza3Ncbi8vIE1lcmdlcyB0aGVtIGludG8gQ2FsZW5kYXJUYXNrW10gZm9yIERheSBNYXAgaW50ZWdyYXRpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgeyBBcHAgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHtcbiAgT2xlblNldHRpbmdzLFxuICBDYWxlbmRhclRhc2ssXG4gIERheU1hcEVudHJ5LFxuICBDYWxlbmRhclRhc2tTb3VyY2UsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFbmdpbmUge1xuICBwcml2YXRlIGFwcDogQXBwO1xuICBwcml2YXRlIHNldHRpbmdzOiBPbGVuU2V0dGluZ3M7XG4gIHByaXZhdGUgdG9kYXk6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncywgbm93OiBEYXRlKSB7XG4gICAgdGhpcy5hcHAgPSBhcHA7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgdGhpcy50b2RheSA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gIH1cblxuICAvLyAtLS0gTWFpbiBlbnRyeTogZ2V0IGFsbCBjYWxlbmRhciB0YXNrcyBmb3IgdG9kYXkgLS0tXG5cbiAgZ2V0QWxsVGFza3MoKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3Rlcykge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldERhaWx5Tm90ZVRhc2tzKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKSB7XG4gICAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZ2V0VGFza3NQbHVnaW5UYXNrcygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKSB7XG4gICAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZ2V0UXVpY2tUYXNrcygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICAvLyAtLS0gQ29udmVydCBDYWxlbmRhclRhc2tzIHRvIERheU1hcEVudHJpZXMgLS0tXG5cbiAgdG9EYXlNYXBFbnRyaWVzKHRhc2tzOiBDYWxlbmRhclRhc2tbXSk6IERheU1hcEVudHJ5W10ge1xuICAgIHJldHVybiB0YXNrcy5tYXAoKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IHN0YXJ0SG91ciA9IHRhc2sudGltZSA/IHRoaXMucGFyc2VUaW1lVG9Ib3VyKHRhc2sudGltZSkgOiA5O1xuICAgICAgY29uc3QgZHVyYXRpb25Ib3VycyA9ICh0YXNrLmR1cmF0aW9uID8/IDMwKSAvIDYwO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3Rpdml0eUlkOiBgY2FsLSR7dGFzay5pZH1gLFxuICAgICAgICBhY3Rpdml0eU5hbWU6IHRhc2sudGl0bGUsXG4gICAgICAgIGVtb2ppOiB0aGlzLmdldFNvdXJjZUVtb2ppKHRhc2suc291cmNlKSxcbiAgICAgICAgY2F0ZWdvcnk6IFwibWluZFwiIGFzIGNvbnN0LCAvLyBjYWxlbmRhciB0YXNrcyBkZWZhdWx0IHRvIG1pbmRcbiAgICAgICAgc3RhcnRIb3VyLFxuICAgICAgICBlbmRIb3VyOiBzdGFydEhvdXIgKyBkdXJhdGlvbkhvdXJzLFxuICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogdGFzay5kdXJhdGlvbiA/PyAzMCxcbiAgICAgICAgc3RhdHVzOiB0YXNrLmRvbmUgPyBcImRvbmVcIiBhcyBjb25zdCA6IFwicGVuZGluZ1wiIGFzIGNvbnN0LFxuICAgICAgICBpc0NhbGVuZGFyVGFzazogdHJ1ZSxcbiAgICAgICAgY2FsZW5kYXJTb3VyY2U6IHRhc2suc291cmNlLFxuICAgICAgICBjYWxlbmRhclRhc2tJZDogdGFzay5pZCxcbiAgICAgICAgZmlsZVBhdGg6IHRhc2suZmlsZVBhdGgsXG4gICAgICAgIGxpbmVOdW1iZXI6IHRhc2subGluZU51bWJlcixcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvLyAtLS0gT3B0aW9uIEE6IERhaWx5IE5vdGVzIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgZ2V0RGFpbHlOb3RlVGFza3MoKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIGNvbnN0IGZvbGRlciA9IHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcjtcbiAgICBpZiAoIWZvbGRlcikgcmV0dXJuIFtdO1xuXG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIEZpbmQgdG9kYXkncyBkYWlseSBub3RlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgZGFpbHlOb3RlID0gZmlsZXMuZmluZCgoZikgPT4ge1xuICAgICAgaWYgKCFmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSAmJiBmLnBhdGggIT09IGZvbGRlcikgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGYuYmFzZW5hbWUgPT09IHRoaXMudG9kYXk7XG4gICAgfSk7XG5cbiAgICBpZiAoIWRhaWx5Tm90ZSkgcmV0dXJuIFtdO1xuXG4gICAgLy8gUmVhZCBjYWNoZWQgY29udGVudCBhbmQgcGFyc2UgdGFza3NcbiAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGRhaWx5Tm90ZSk7XG4gICAgaWYgKCFjYWNoZT8ubGlzdEl0ZW1zKSByZXR1cm4gW107XG5cbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgbGlzdEl0ZW0gb2YgY2FjaGUubGlzdEl0ZW1zKSB7XG4gICAgICBpZiAobGlzdEl0ZW0udGFzayA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTsgLy8gbm90IGEgY2hlY2tib3hcblxuICAgICAgY29uc3QgbGluZVN0YXJ0ID0gbGlzdEl0ZW0ucG9zaXRpb24uc3RhcnQubGluZTtcblxuICAgICAgLy8gUmVhZCB0aGUgbGluZSBjb250ZW50IGZyb20gY2FjaGUgc2VjdGlvbnNcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldExpbmVDb250ZW50KGRhaWx5Tm90ZSwgbGluZVN0YXJ0KTtcbiAgICAgIGlmICghY29udGVudCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VUYXNrTGluZShjb250ZW50KTtcbiAgICAgIGlmICghcGFyc2VkKSBjb250aW51ZTtcblxuICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgZG4tJHtkYWlseU5vdGUucGF0aH0tTCR7bGluZVN0YXJ0fWAsXG4gICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJkYWlseS1ub3RlXCIsXG4gICAgICAgIGRhdGU6IHRoaXMudG9kYXksXG4gICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBsaXN0SXRlbS50YXNrID09PSBcInhcIiB8fCBsaXN0SXRlbS50YXNrID09PSBcIlhcIixcbiAgICAgICAgZmlsZVBhdGg6IGRhaWx5Tm90ZS5wYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiBsaW5lU3RhcnQsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICAvLyBQYXJzZSBcIi0gWyBdIFRhc2sgbmFtZSBAMTQ6MDAgfjMwbVwiIGZvcm1hdFxuICBwcml2YXRlIHBhcnNlVGFza0xpbmUobGluZTogc3RyaW5nKTogeyB0aXRsZTogc3RyaW5nOyB0aW1lPzogc3RyaW5nOyBkdXJhdGlvbj86IG51bWJlciB9IHwgbnVsbCB7XG4gICAgLy8gUmVtb3ZlIGNoZWNrYm94IHByZWZpeDogXCItIFsgXSBcIiBvciBcIi0gW3hdIFwiXG4gICAgY29uc3QgbWF0Y2ggPSBsaW5lLm1hdGNoKC9eWy0qXVxccypcXFsuP1xcXVxccyooLispJC8pO1xuICAgIGlmICghbWF0Y2gpIHJldHVybiBudWxsO1xuXG4gICAgbGV0IHRleHQgPSBtYXRjaFsxXS50cmltKCk7XG5cbiAgICAvLyBFeHRyYWN0IEB0aW1lIChlLmcuLCBAMTQ6MDAgb3IgQDJwbSlcbiAgICBsZXQgdGltZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHRpbWVNYXRjaCA9IHRleHQubWF0Y2goL0AoXFxkezEsMn0pOihcXGR7Mn0pXFxiLyk7XG4gICAgaWYgKHRpbWVNYXRjaCkge1xuICAgICAgdGltZSA9IGAke3RpbWVNYXRjaFsxXS5wYWRTdGFydCgyLCBcIjBcIil9OiR7dGltZU1hdGNoWzJdfWA7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHRpbWVNYXRjaFswXSwgXCJcIikudHJpbSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUcnkgQDJwbSAvIEAxNCBmb3JtYXRcbiAgICAgIGNvbnN0IHNpbXBsZVRpbWUgPSB0ZXh0Lm1hdGNoKC9AKFxcZHsxLDJ9KVxccyooYW18cG0pP1xcYi9pKTtcbiAgICAgIGlmIChzaW1wbGVUaW1lKSB7XG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQoc2ltcGxlVGltZVsxXSk7XG4gICAgICAgIGNvbnN0IHBlcmlvZCA9IHNpbXBsZVRpbWVbMl0/LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChwZXJpb2QgPT09IFwicG1cIiAmJiBob3VyIDwgMTIpIGhvdXIgKz0gMTI7XG4gICAgICAgIGlmIChwZXJpb2QgPT09IFwiYW1cIiAmJiBob3VyID09PSAxMikgaG91ciA9IDA7XG4gICAgICAgIHRpbWUgPSBgJHtTdHJpbmcoaG91cikucGFkU3RhcnQoMiwgXCIwXCIpfTowMGA7XG4gICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2Uoc2ltcGxlVGltZVswXSwgXCJcIikudHJpbSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEV4dHJhY3QgfmR1cmF0aW9uIChlLmcuLCB+MzBtLCB+MWgsIH4xLjVoKVxuICAgIGxldCBkdXJhdGlvbjogbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IGR1cmF0aW9uTWF0Y2ggPSB0ZXh0Lm1hdGNoKC9+KFxcZCsoPzpcXC5cXGQrKT8pXFxzKihtfG1pbnxofGhyfGhvdXIpcz9cXGIvaSk7XG4gICAgaWYgKGR1cmF0aW9uTWF0Y2gpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gcGFyc2VGbG9hdChkdXJhdGlvbk1hdGNoWzFdKTtcbiAgICAgIGNvbnN0IHVuaXQgPSBkdXJhdGlvbk1hdGNoWzJdLnRvTG93ZXJDYXNlKCk7XG4gICAgICBkdXJhdGlvbiA9IHVuaXQuc3RhcnRzV2l0aChcImhcIikgPyBNYXRoLnJvdW5kKHZhbHVlICogNjApIDogTWF0aC5yb3VuZCh2YWx1ZSk7XG4gICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKGR1cmF0aW9uTWF0Y2hbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhbiB1cCBhbnkgdHJhaWxpbmcvbGVhZGluZyB3aGl0ZXNwYWNlIG9yIGRhc2hlc1xuICAgIGNvbnN0IHRpdGxlID0gdGV4dC5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCk7XG4gICAgaWYgKCF0aXRsZSkgcmV0dXJuIG51bGw7XG5cbiAgICByZXR1cm4geyB0aXRsZSwgdGltZSwgZHVyYXRpb24gfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGluZUNvbnRlbnQoZmlsZTogVEZpbGUsIGxpbmVOdW1iZXI6IG51bWJlcik6IHN0cmluZyB8IG51bGwge1xuICAgIC8vIFVzZSB0aGUgbWV0YWRhdGFDYWNoZSBzZWN0aW9ucyB0byByZWNvbnN0cnVjdCBsaW5lIGNvbnRlbnRcbiAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgIGlmICghY2FjaGUpIHJldHVybiBudWxsO1xuXG4gICAgLy8gV2UgbmVlZCB0byByZWFkIGZyb20gdGhlIHZhdWx0IGNhY2hlIFx1MjAxNCB0cnkgZ2V0dGluZyBjb250ZW50IHZpYSBzZWN0aW9uc1xuICAgIC8vIFNpbmNlIHdlIGNhbid0IHN5bmNocm9ub3VzbHkgcmVhZCBmaWxlIGNvbnRlbnQsIHVzZSB0aGUgY2FjaGVkIGZyb250bWF0dGVyXG4gICAgLy8gYW5kIGxpc3QgaXRlbXMgdG8gYnVpbGQgd2hhdCB3ZSBuZWVkXG4gICAgLy8gQWN0dWFsbHksIGxpc3QgaXRlbXMgaW4gT2JzaWRpYW4gY2FjaGUgZG9uJ3QgaW5jbHVkZSB0aGUgdGV4dC5cbiAgICAvLyBXZSdsbCBuZWVkIHRvIHJlYWQgdGhlIGZpbGUgY29udGVudC4gU3RvcmUgaXQgaW4gYSBtYXAgZHVyaW5nIGdhdGhlciBwaGFzZS5cbiAgICAvLyBGb3Igbm93LCByZXR1cm4gbnVsbCBcdTIwMTQgdGhlIERhc2hib2FyZFZpZXcgd2lsbCBwcmUtcmVhZCBkYWlseSBub3RlIGNvbnRlbnRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIENhbGxlZCBieSBEYXNoYm9hcmRWaWV3IHdpdGggcHJlLXJlYWQgZmlsZSBjb250ZW50XG4gIGdldERhaWx5Tm90ZVRhc2tzRnJvbUNvbnRlbnQoY29udGVudDogc3RyaW5nLCBmaWxlUGF0aDogc3RyaW5nKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgIC8vIE1hdGNoIHRhc2sgbGluZXM6IC0gWyBdIG9yIC0gW3hdXG4gICAgICBpZiAoIS9eWy0qXVxccypcXFsuP1xcXVxccy8udGVzdChsaW5lKSkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VUYXNrTGluZShsaW5lKTtcbiAgICAgIGlmICghcGFyc2VkKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgaXNEb25lID0gL15bLSpdXFxzKlxcW1t4WF1cXF0vLnRlc3QobGluZSk7XG5cbiAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICBpZDogYGRuLSR7ZmlsZVBhdGh9LUwke2l9YCxcbiAgICAgICAgdGl0bGU6IHBhcnNlZC50aXRsZSxcbiAgICAgICAgc291cmNlOiBcImRhaWx5LW5vdGVcIixcbiAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgdGltZTogcGFyc2VkLnRpbWUsXG4gICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IGlzRG9uZSxcbiAgICAgICAgZmlsZVBhdGgsXG4gICAgICAgIGxpbmVOdW1iZXI6IGksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICAvLyAtLS0gT3B0aW9uIEI6IFRhc2tzIFBsdWdpbiBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGdldFRhc2tzUGx1Z2luVGFza3MoKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIC8vIENoZWNrIGlmIFRhc2tzIHBsdWdpbiBpcyBpbnN0YWxsZWRcbiAgICBjb25zdCB0YXNrc1BsdWdpbiA9ICh0aGlzLmFwcCBhcyBhbnkpLnBsdWdpbnM/LnBsdWdpbnM/LltcIm9ic2lkaWFuLXRhc2tzLXBsdWdpblwiXTtcbiAgICBpZiAoIXRhc2tzUGx1Z2luKSByZXR1cm4gW107XG5cbiAgICAvLyBUYXNrcyBwbHVnaW4gc3RvcmVzIHRhc2tzIHZpYSBtZXRhZGF0YSBjYWNoZVxuICAgIC8vIFdlIHNjYW4gYWxsIGZpbGVzIGZvciB0YXNrcyB3aXRoIGR1ZSBkYXRlcyBtYXRjaGluZyB0b2RheVxuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgaWYgKCFjYWNoZT8ubGlzdEl0ZW1zKSBjb250aW51ZTtcblxuICAgICAgZm9yIChjb25zdCBsaXN0SXRlbSBvZiBjYWNoZS5saXN0SXRlbXMpIHtcbiAgICAgICAgaWYgKGxpc3RJdGVtLnRhc2sgPT09IHVuZGVmaW5lZCkgY29udGludWU7XG5cbiAgICAgICAgLy8gVGFza3MgcGx1Z2luIHVzZXMgZW1vamktYmFzZWQgZGF0ZXMgaW4gdGhlIHRleHQ6XG4gICAgICAgIC8vIFx1RDgzRFx1RENDNSBZWVlZLU1NLUREIGZvciBkdWUgZGF0ZVxuICAgICAgICAvLyBXZSBuZWVkIHRvIHJlYWQgdGhlIGZpbGUgdG8gY2hlY2ssIGJ1dCB3ZSBjYW4gdXNlIHRoZSBmcm9udG1hdHRlci1iYXNlZFxuICAgICAgICAvLyBhcHByb2FjaCBvciB0aGUgcG9zaXRpb24gdG8gZ2V0IHRoZSB0ZXh0LlxuICAgICAgICAvLyBTaW5jZSB3ZSBjYW4ndCBzeW5jLXJlYWQsIHdlJ2xsIGNoZWNrIGlmIHBvc2l0aW9ucyBtZW50aW9uIHRvZGF5LlxuICAgICAgICAvLyBGb3Igbm93LCB0aGlzIGlzIGEgYmVzdC1lZmZvcnQgY2hlY2sgdXNpbmcgY2FjaGUgZGF0YS5cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICAvLyBDYWxsZWQgYnkgRGFzaGJvYXJkVmlldyB3aXRoIHByZS1zY2FubmVkIHRhc2sgZGF0YVxuICBnZXRUYXNrc1BsdWdpblRhc2tzRnJvbUZpbGVzKGZpbGVzOiB7IHBhdGg6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH1bXSk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgY29uc3QgbGluZXMgPSBmaWxlLmNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgICBpZiAoIS9eWy0qXVxccypcXFsuP1xcXVxccy8udGVzdChsaW5lKSkgY29udGludWU7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIFRhc2tzIHBsdWdpbiBkdWUgZGF0ZTogXHVEODNEXHVEQ0M1IFlZWVktTU0tRERcbiAgICAgICAgY29uc3QgZHVlTWF0Y2ggPSBsaW5lLm1hdGNoKC9cXHV7MUY0QzV9XFxzKihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvdSk7XG4gICAgICAgIGlmICghZHVlTWF0Y2ggfHwgZHVlTWF0Y2hbMV0gIT09IHRoaXMudG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucGFyc2VUYXNrTGluZShsaW5lKTtcbiAgICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIEFsc28gY2hlY2sgZm9yIHNjaGVkdWxlZCBkYXRlIFx1MjNGM1xuICAgICAgICBjb25zdCBzY2hlZHVsZWRNYXRjaCA9IGxpbmUubWF0Y2goL1xcdTIzRjNcXHMqKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS91KTtcbiAgICAgICAgaWYgKHNjaGVkdWxlZE1hdGNoICYmIHNjaGVkdWxlZE1hdGNoWzFdICE9PSB0aGlzLnRvZGF5KSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBpc0RvbmUgPSAvXlstKl1cXHMqXFxbW3hYXVxcXS8udGVzdChsaW5lKTtcblxuICAgICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgICBpZDogYHRwLSR7ZmlsZS5wYXRofS1MJHtpfWAsXG4gICAgICAgICAgdGl0bGU6IHBhcnNlZC50aXRsZS5yZXBsYWNlKC9bXFx1ezFGNEM1fVxcdTIzRjNdXFxzKlxcZHs0fS1cXGR7Mn0tXFxkezJ9L2d1LCBcIlwiKS50cmltKCksXG4gICAgICAgICAgc291cmNlOiBcInRhc2tzLXBsdWdpblwiLFxuICAgICAgICAgIGRhdGU6IHRoaXMudG9kYXksXG4gICAgICAgICAgdGltZTogcGFyc2VkLnRpbWUsXG4gICAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgICBkb25lOiBpc0RvbmUsXG4gICAgICAgICAgZmlsZVBhdGg6IGZpbGUucGF0aCxcbiAgICAgICAgICBsaW5lTnVtYmVyOiBpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICAvLyAtLS0gT3B0aW9uIEM6IEJ1aWx0LWluIFF1aWNrIFRhc2tzIC0tLVxuXG4gIHByaXZhdGUgZ2V0UXVpY2tUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrc1xuICAgICAgLmZpbHRlcigocXQpID0+IHF0LmRhdGUgPT09IHRoaXMudG9kYXkpXG4gICAgICAubWFwKChxdCkgPT4gKHtcbiAgICAgICAgaWQ6IGBxdC0ke3F0LmlkfWAsXG4gICAgICAgIHRpdGxlOiBxdC50aXRsZSxcbiAgICAgICAgc291cmNlOiBcInF1aWNrLXRhc2tcIiBhcyBDYWxlbmRhclRhc2tTb3VyY2UsXG4gICAgICAgIGRhdGU6IHF0LmRhdGUsXG4gICAgICAgIHRpbWU6IHF0LnRpbWUsXG4gICAgICAgIGR1cmF0aW9uOiBxdC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogcXQuZG9uZSxcbiAgICAgIH0pKTtcbiAgfVxuXG4gIC8vIC0tLSBDb21wbGV0aW9uIGhhbmRsZXJzIC0tLVxuXG4gIC8vIFRvZ2dsZSBhIGRhaWx5IG5vdGUgdGFzayBkb25lL3VuZG9uZSBieSByZXdyaXRpbmcgdGhlIGNoZWNrYm94XG4gIGFzeW5jIHRvZ2dsZURhaWx5Tm90ZVRhc2soZmlsZVBhdGg6IHN0cmluZywgbGluZU51bWJlcjogbnVtYmVyLCBkb25lOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aCk7XG4gICAgaWYgKCFmaWxlIHx8ICEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgaWYgKGxpbmVOdW1iZXIgPj0gbGluZXMubGVuZ3RoKSByZXR1cm47XG5cbiAgICBjb25zdCBsaW5lID0gbGluZXNbbGluZU51bWJlcl07XG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIGxpbmVzW2xpbmVOdW1iZXJdID0gbGluZS5yZXBsYWNlKC9cXFsuXFxdLywgXCJbeF1cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVzW2xpbmVOdW1iZXJdID0gbGluZS5yZXBsYWNlKC9cXFsuXFxdLywgXCJbIF1cIik7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIGxpbmVzLmpvaW4oXCJcXG5cIikpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIGEgVGFza3MgcGx1Z2luIHRhc2tcbiAgYXN5bmMgdG9nZ2xlVGFza3NQbHVnaW5UYXNrKGZpbGVQYXRoOiBzdHJpbmcsIGxpbmVOdW1iZXI6IG51bWJlciwgZG9uZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIFNhbWUgbWVjaGFuaXNtIGFzIGRhaWx5IG5vdGVzIFx1MjAxNCBqdXN0IHRvZ2dsZSB0aGUgY2hlY2tib3hcbiAgICBhd2FpdCB0aGlzLnRvZ2dsZURhaWx5Tm90ZVRhc2soZmlsZVBhdGgsIGxpbmVOdW1iZXIsIGRvbmUpO1xuICB9XG5cbiAgLy8gUG9zdHBvbmUgYSB0YXNrIHRvIHRvbW9ycm93XG4gIGFzeW5jIHBvc3Rwb25lVGFzayh0YXNrOiBDYWxlbmRhclRhc2spOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKHRoaXMudG9kYXkpO1xuICAgIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSk7XG4gICAgY29uc3QgdG9tb3Jyb3dTdHIgPSB0b21vcnJvdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuICAgIGlmICh0YXNrLnNvdXJjZSA9PT0gXCJxdWljay10YXNrXCIpIHtcbiAgICAgIC8vIFVwZGF0ZSBpbiBzZXR0aW5nc1xuICAgICAgY29uc3QgcXQgPSB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MuZmluZChcbiAgICAgICAgKHEpID0+IGBxdC0ke3EuaWR9YCA9PT0gdGFzay5pZCB8fCBxLmlkID09PSB0YXNrLmlkLnJlcGxhY2UoXCJxdC1cIiwgXCJcIilcbiAgICAgICk7XG4gICAgICBpZiAocXQpIHtcbiAgICAgICAgcXQucG9zdHBvbmVkRnJvbSA9IHF0LnBvc3Rwb25lZEZyb20gPz8gcXQuZGF0ZTtcbiAgICAgICAgcXQuZGF0ZSA9IHRvbW9ycm93U3RyO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGFzay5zb3VyY2UgPT09IFwidGFza3MtcGx1Z2luXCIgJiYgdGFzay5maWxlUGF0aCAhPT0gdW5kZWZpbmVkICYmIHRhc2subGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIGR1ZSBkYXRlIGluIHRoZSBmaWxlXG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHRhc2suZmlsZVBhdGgpO1xuICAgICAgaWYgKCFmaWxlIHx8ICEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkgcmV0dXJuO1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgICAgaWYgKHRhc2subGluZU51bWJlciA8IGxpbmVzLmxlbmd0aCkge1xuICAgICAgICBsaW5lc1t0YXNrLmxpbmVOdW1iZXJdID0gbGluZXNbdGFzay5saW5lTnVtYmVyXS5yZXBsYWNlKFxuICAgICAgICAgIC9cXHV7MUY0QzV9XFxzKlxcZHs0fS1cXGR7Mn0tXFxkezJ9L3UsXG4gICAgICAgICAgYFxcdXsxRjRDNX0gJHt0b21vcnJvd1N0cn1gXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBsaW5lcy5qb2luKFwiXFxuXCIpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAtLS0gSGVscGVycyAtLS1cblxuICBwcml2YXRlIHBhcnNlVGltZVRvSG91cih0aW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IFtoLCBtXSA9IHRpbWUuc3BsaXQoXCI6XCIpLm1hcChOdW1iZXIpO1xuICAgIHJldHVybiBoICsgKG0gPz8gMCkgLyA2MDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U291cmNlRW1vamkoc291cmNlOiBDYWxlbmRhclRhc2tTb3VyY2UpOiBzdHJpbmcge1xuICAgIHN3aXRjaCAoc291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOiByZXR1cm4gXCJcXHV7MUY0RER9XCI7XG4gICAgICBjYXNlIFwidGFza3MtcGx1Z2luXCI6IHJldHVybiBcIlxcdTI2MTFcXHVGRTBGXCI7XG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiByZXR1cm4gXCJcXHUyNkExXCI7XG4gICAgfVxuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBIZXJvIENhcmQgQ29tcG9uZW50XG4vLyBGdWxsLXdpZHRoIGJsdXJyZWQgYmcgd2l0aCBncmVldGluZywgcmFuayBiYWRnZSwgYWN0aW9uIGJ1dHRvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0Jvc3NFbmdpbmVcIjtcbmltcG9ydCB7IHRvUm9tYW4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIZXJvQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGhlcm8gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyb1wiIH0pO1xuICBoZXJvLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBCYWNrZ3JvdW5kIGltYWdlXG4gIGlmIChzZXR0aW5ncy5oZXJvQmFja2dyb3VuZCkge1xuICAgIGNvbnN0IGJnID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWJnXCIgfSk7XG4gICAgY29uc3QgdmF1bHRQYXRoID0gc2V0dGluZ3MuaGVyb0JhY2tncm91bmQ7XG4gICAgYmcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybChcIiR7dmF1bHRQYXRofVwiKWA7XG4gIH1cblxuICAvLyBEYXJrIHZpZ25ldHRlIG92ZXJsYXlcbiAgaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLW92ZXJsYXlcIiB9KTtcblxuICAvLyBDb250ZW50XG4gIGNvbnN0IGNvbnRlbnQgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tY29udGVudFwiIH0pO1xuXG4gIC8vIFRpbWUtYmFzZWQgZ3JlZXRpbmdcbiAgY29uc3QgZ3JlZXRpbmcgPSBnZXRHcmVldGluZyhzZXR0aW5ncyk7XG4gIGNvbnRlbnQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tZ3JlZXRpbmdcIixcbiAgICB0ZXh0OiBgJHtncmVldGluZ30sICR7c2V0dGluZ3MudXNlck5hbWV9LmAsXG4gIH0pO1xuXG4gIC8vIENvbnRleHR1YWwgc3VidGl0bGVcbiAgY29uc3Qgc3VidGl0bGUgPSBnZXRTdWJ0aXRsZShzZXR0aW5ncywgZW5naW5lKTtcbiAgY29udGVudC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1zdWJ0aXRsZVwiLFxuICAgIHRleHQ6IHN1YnRpdGxlLFxuICB9KTtcblxuICAvLyBSYW5rIGJhZGdlIHBpbGxcbiAgY29uc3QgdGl0bGUgPSBlbmdpbmUuZ2V0RHluYW1pY1RpdGxlKCk7XG4gIGNvbnN0IGV1ZEluZGV4ID0gZW5naW5lLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuICBjb25zdCBiYWRnZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1yYW5rLWJhZGdlXCIgfSk7XG4gIGJhZGdlLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1yYW5rLXRleHRcIixcbiAgICB0ZXh0OiBgJHt0aXRsZX0gXHUwMEI3ICR7dG9Sb21hbihldWRJbmRleCl9YCxcbiAgfSk7XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgY29uc3QgYWN0aW9ucyA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1hY3Rpb25zXCIgfSk7XG5cbiAgY29uc3QgcHJvZ3Jlc3NCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWJ0blwiLFxuICAgIHRleHQ6IFwiWW91ciBwcm9ncmVzc1wiLFxuICB9KTtcbiAgcHJvZ3Jlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTY3JvbGwgdG8gdGhlIGV1ZGFpbW9uaWEgc2VjdGlvblxuICAgIGNvbnN0IGV1ZFNlY3Rpb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5vbGVuLWNhcmRcIik7XG4gICAgaWYgKGV1ZFNlY3Rpb24pIGV1ZFNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcmVmbGVjdEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tYnRuXCIsXG4gICAgdGV4dDogXCJSZWZsZWN0XCIsXG4gIH0pO1xuICByZWZsZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBxdW90ZSBzZWN0aW9uXG4gICAgY29uc3QgcXVvdGVTZWN0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdW90ZVwiKTtcbiAgICBpZiAocXVvdGVTZWN0aW9uKSBxdW90ZVNlY3Rpb24uc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEdyZWV0aW5nKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpOiBzdHJpbmcge1xuICBjb25zdCBsYWJlbHMgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCBob3VyID0gbm93LmdldEhvdXJzKCk7XG5cbiAgaWYgKGhvdXIgPj0gNSAmJiBob3VyIDwgMTIpIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfbW9ybmluZyA/PyBcIkdvb2QgbW9ybmluZ1wiO1xuICBpZiAoaG91ciA+PSAxMiAmJiBob3VyIDwgMTcpIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfYWZ0ZXJub29uID8/IFwiR29vZCBhZnRlcm5vb25cIjtcbiAgaWYgKGhvdXIgPj0gMTcgJiYgaG91ciA8IDIxKSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX2V2ZW5pbmcgPz8gXCJHb29kIGV2ZW5pbmdcIjtcbiAgcmV0dXJuIGxhYmVscy5ncmVldGluZ19uaWdodCA/PyBcIkdvb2QgbmlnaHRcIjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VidGl0bGUoc2V0dGluZ3M6IE9sZW5TZXR0aW5ncywgZW5naW5lOiBPbGVuRW5naW5lKTogc3RyaW5nIHtcbiAgY29uc3QgYm9zc0VuZ2luZSA9IG5ldyBCb3NzRW5naW5lKHNldHRpbmdzKTtcblxuICAvLyBUYXJ0YXJ1c1xuICBpZiAoc2V0dGluZ3MuaW5UYXJ0YXJ1cykge1xuICAgIHJldHVybiBcIlRoZSB1bmRlcndvcmxkIGF3YWl0cyB5b3VyIHBlbmFuY2UuXCI7XG4gIH1cblxuICAvLyBCb3NzIGRhbmdlciB6b25lXG4gIGlmIChib3NzRW5naW5lLmlzRGFuZ2VyWm9uZSgpKSB7XG4gICAgcmV0dXJuIFwiT25lIGZpbmFsIGJsb3cgcmVtYWlucy5cIjtcbiAgfVxuXG4gIC8vIEFjdGl2ZSBzdHJlYWtcbiAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldE92ZXJhbGxTdHJlYWsoKTtcbiAgaWYgKHN0cmVhayA+PSAzKSB7XG4gICAgcmV0dXJuIGAke3N0cmVha30gZGF5cyBzdHJvbmcuIEtlZXAgdGhlIGZsYW1lLmA7XG4gIH1cblxuICAvLyBEZWZhdWx0XG4gIHJldHVybiBcIlN0ZXAgYnkgc3RlcCwgeW91IHNoYXBlIHlvdXIgcGF0aC5cIjtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEV1ZGFpbW9uaWEgQmFyIENvbXBvbmVudFxuLy8gU2VnbWVudGVkIHByb2dyZXNzIGJhciwgc3RhdCBjYXJkcywgY2F0ZWdvcnkgcm93cyB3aXRoIGljb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyB0b1JvbWFuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBDQVRFR09SWV9JQ09OUzogUmVjb3JkPENhdGVnb3J5LCBzdHJpbmc+ID0ge1xuICBib2R5OiBcIlxcdXsxRjNDQn1cIiwgLy8gd2VpZ2h0bGlmdGVyXG4gIG1pbmQ6IFwiXFx1ezFGNERBfVwiLCAvLyBib29rc1xuICBzcGlyaXQ6IFwiXFx1ezFGNTRBfVwiLCAvLyBkb3ZlXG59O1xuXG5jb25zdCBUT1RBTF9TRUdNRU5UUyA9IDEwO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRXVkYWltb25pYUJhcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIC8vIC0tLSAxLiBFdWRhaW1vbmlhIENhcmQgKHNlZ21lbnRlZCBiYXIgKyBjaGFwdGVyKSAtLS1cbiAgcmVuZGVyRXVkYWltb25pYUNhcmQoY29udGFpbmVyLCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySW5kZXgpO1xuXG4gIC8vIC0tLSAyLiBTdGF0IENhcmRzIFJvdyAoc2VwYXJhdGUgZnJvbSB0aGUgY2FyZCkgLS0tXG4gIHJlbmRlclN0YXRDYXJkcyhjb250YWluZXIsIGVuZ2luZSwgc3RhZ2dlckluZGV4ICsgMSk7XG5cbiAgLy8gLS0tIDMuIENhdGVnb3JpZXMgQ2FyZCAoaWNvbiByb3dzIHdpdGggYmFycykgLS0tXG4gIHJlbmRlckNhdGVnb3JpZXNDYXJkKGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlckluZGV4ICsgMik7XG59XG5cbi8vIC0tLS0gRXVkYWltb25pYSBDYXJkIC0tLS1cblxuZnVuY3Rpb24gcmVuZGVyRXVkYWltb25pYUNhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gSGVhZGVyOiB0aXRsZSArIFhQXG4gIGNvbnN0IGhlYWRlciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZXVkYWltb25pYS1oZWFkZXJcIiB9KTtcbiAgY29uc3QgZXVkSW5kZXggPSBlbmdpbmUuZ2V0RXVkYWltb25pYUluZGV4KCk7XG5cbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXRpdGxlXCIsXG4gICAgdGV4dDogYEV1ZGFpbW9uaWEgJHt0b1JvbWFuKGV1ZEluZGV4KX1gLFxuICB9KTtcblxuICBjb25zdCB0b3RhbFhQID0gZW5naW5lLmdldEFsbENhdGVnb3J5TGV2ZWxzKCkucmVkdWNlKChzdW0sIGNsKSA9PiBzdW0gKyBjbC54cCwgMCk7XG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS14cFwiLFxuICAgIHRleHQ6IGAke3RvdGFsWFB9IFhQYCxcbiAgfSk7XG5cbiAgLy8gU2VnbWVudGVkIHByb2dyZXNzIGJhclxuICBjb25zdCBwcm9ncmVzcyA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhUHJvZ3Jlc3MoKTsgLy8gMC0xMDBcbiAgY29uc3QgZmlsbGVkU2VnbWVudHMgPSBNYXRoLmZsb29yKHByb2dyZXNzIC8gVE9UQUxfU0VHTUVOVFMpO1xuICBjb25zdCBoYXNQYXJ0aWFsID0gcHJvZ3Jlc3MgJSBUT1RBTF9TRUdNRU5UUyA+IDA7XG5cbiAgY29uc3Qgc2VnbWVudHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtc2VnbWVudHNcIiB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IFRPVEFMX1NFR01FTlRTOyBpKyspIHtcbiAgICBsZXQgY2xzID0gXCJvbGVuLWV1ZGFpbW9uaWEtc2VnbWVudFwiO1xuICAgIGlmIChpIDwgZmlsbGVkU2VnbWVudHMpIHtcbiAgICAgIGNscyArPSBcIiBvbGVuLWV1ZGFpbW9uaWEtc2VnbWVudC1maWxsZWRcIjtcbiAgICB9IGVsc2UgaWYgKGkgPT09IGZpbGxlZFNlZ21lbnRzICYmIGhhc1BhcnRpYWwpIHtcbiAgICAgIGNscyArPSBcIiBvbGVuLWV1ZGFpbW9uaWEtc2VnbWVudC1wYXJ0aWFsXCI7XG4gICAgfVxuICAgIHNlZ21lbnRzLmNyZWF0ZURpdih7IGNscyB9KTtcbiAgfVxuXG4gIC8vIENoYXB0ZXIgbGFiZWxcbiAgY29uc3QgY2hhcHRlciA9IGVuZ2luZS5nZXRDaGFwdGVyKCk7XG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtY2hhcHRlclwiLFxuICAgIHRleHQ6IGBDaGFwdGVyICR7dG9Sb21hbihjaGFwdGVyLm51bWJlcil9OiAke2NoYXB0ZXIubmFtZX1gLFxuICB9KTtcbn1cblxuLy8gLS0tLSBTdGF0IENhcmRzIC0tLS1cblxuZnVuY3Rpb24gcmVuZGVyU3RhdENhcmRzKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgZ3JpZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zdGF0cy1ncmlkXCIgfSk7XG4gIGdyaWQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIGNvbnN0IHRvdGFsVGFza3MgPSBlbmdpbmUuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0T3ZlcmFsbFN0cmVhaygpO1xuICBjb25zdCBwcmVzZW5jZSA9IGVuZ2luZS5nZXREYXlzT2ZQcmVzZW5jZSgpO1xuXG4gIC8vIE9iamVjdGl2ZXMgY2FyZFxuICBjcmVhdGVTdGF0Q2FyZChncmlkLCBcIlxcdXsxRjNBRn1cIiwgdG90YWxUYXNrcywgXCJPYmplY3RpdmVzXCIpO1xuXG4gIC8vIFN0cmVhayBjYXJkICh3aXRoIHN0cmVhayBkb3RzKVxuICBjcmVhdGVTdGF0Q2FyZChncmlkLCBcIlxcdXsxRjUyNX1cIiwgc3RyZWFrLCBcIlN0cmVha1wiLCBzdHJlYWspO1xuXG4gIC8vIENvbnNpc3RlbmN5IGNhcmRcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MjcyOH1cIiwgcHJlc2VuY2UsIFwiQ29uc2lzdGVuY3lcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0YXRDYXJkKFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBpY29uOiBzdHJpbmcsXG4gIHZhbHVlOiBudW1iZXIsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIHN0cmVha0RheXM/OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBjYXJkID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXN0YXQtY2FyZFwiIH0pO1xuXG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1zdGF0LWNhcmQtaWNvblwiLCB0ZXh0OiBpY29uIH0pO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLXZhbHVlXCIsIHRleHQ6IFN0cmluZyh2YWx1ZSkgfSk7XG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1zdGF0LWNhcmQtbGFiZWxcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gU3RyZWFrIGRvdHMgKHNob3cgbGFzdCA3IGRheXMpXG4gIGlmIChzdHJlYWtEYXlzICE9PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkb3RzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zdGF0LWNhcmQtZG90c1wiIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBsZXQgY2xzID0gXCJvbGVuLXN0YXQtZG90XCI7XG4gICAgICBpZiAoaSA8IHN0cmVha0RheXMpIHtcbiAgICAgICAgY2xzICs9IFwiIG9sZW4tc3RhdC1kb3QtYWN0aXZlXCI7XG4gICAgICB9XG4gICAgICBkb3RzLmNyZWF0ZURpdih7IGNscyB9KTtcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tLSBDYXRlZ29yaWVzIENhcmQgLS0tLVxuXG5mdW5jdGlvbiByZW5kZXJDYXRlZ29yaWVzQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBEeW5hbWljIHRpdGxlXG4gIGNvbnN0IHRpdGxlID0gZW5naW5lLmdldER5bmFtaWNUaXRsZSgpO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tZHluYW1pYy10aXRsZVwiLCB0ZXh0OiB0aXRsZSB9KTtcblxuICAvLyBEaXZpZGVyXG4gIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGl2aWRlclwiIH0pO1xuXG4gIC8vIENhdGVnb3J5IHJvd3NcbiAgY29uc3QgZ3JpZCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcmllcy1ncmlkXCIgfSk7XG5cbiAgY29uc3QgY2F0ZWdvcmllczogeyBrZXk6IENhdGVnb3J5OyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGtleTogXCJib2R5XCIsIGxhYmVsOiBcIkJvZHlcIiB9LFxuICAgIHsga2V5OiBcIm1pbmRcIiwgbGFiZWw6IFwiTWluZFwiIH0sXG4gICAgeyBrZXk6IFwic3Bpcml0XCIsIGxhYmVsOiBcIlNwaXJpdFwiIH0sXG4gIF07XG5cbiAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgIGNvbnN0IGxldmVsID0gZW5naW5lLmdldENhdGVnb3J5TGV2ZWwoY2F0LmtleSk7XG4gICAgY29uc3QgY29sb3IgPSBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XTtcblxuICAgIGNvbnN0IHJvdyA9IGdyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktcm93XCIgfSk7XG5cbiAgICAvLyBJY29uIGJveFxuICAgIGNvbnN0IGljb25Cb3ggPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktaWNvblwiIH0pO1xuICAgIGljb25Cb3guc3R5bGUuYmFja2dyb3VuZCA9IGAke2NvbG9yfTIyYDsgLy8gMTMlIG9wYWNpdHkgdGludFxuICAgIGljb25Cb3gudGV4dENvbnRlbnQgPSBDQVRFR09SWV9JQ09OU1tjYXQua2V5XTtcblxuICAgIC8vIEluZm8gY29sdW1uXG4gICAgY29uc3QgaW5mbyA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1pbmZvXCIgfSk7XG5cbiAgICAvLyBOYW1lICsgbGV2ZWwgcm93XG4gICAgY29uc3QgbmFtZVJvdyA9IGluZm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktbmFtZS1yb3dcIiB9KTtcbiAgICBuYW1lUm93LmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLWNhdGVnb3J5LW5hbWVcIiwgdGV4dDogY2F0LmxhYmVsIH0pO1xuICAgIG5hbWVSb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWNhdGVnb3J5LWxldmVsLXRleHRcIixcbiAgICAgIHRleHQ6IGBMdiAke2xldmVsLmxldmVsfSBcdTAwQjcgJHtsZXZlbC5wcm9ncmVzc1RvTmV4dH0vMTAwYCxcbiAgICB9KTtcblxuICAgIC8vIFByb2dyZXNzIGJhclxuICAgIGNvbnN0IGJhciA9IGluZm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktYmFyXCIgfSk7XG4gICAgY29uc3QgZmlsbCA9IGJhci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1iYXItZmlsbFwiIH0pO1xuICAgIGZpbGwuc3R5bGUud2lkdGggPSBgJHtsZXZlbC5wcm9ncmVzc1RvTmV4dH0lYDtcbiAgICBmaWxsLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgRGlyZWN0aXZlIENhcmQgQ29tcG9uZW50XG4vLyBDb21wYWN0IGNhcmQgb24gZGFzaGJvYXJkICsgZXhwYW5kZWQgYm90dG9tLXNoZWV0IG92ZXJsYXlcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgUHJpb3JpdHlSZWFzb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IEZBTExCQUNLX1FVT1RFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRpcmVjdGl2ZUNhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIG9uRW50ZXJXb3Jrc3BhY2U/OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3VnZ2VzdGlvbiA9IGVuZ2luZS5nZXRTdWdnZXN0aW9uKCk7XG4gIGlmICghc3VnZ2VzdGlvbikgcmV0dXJuO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kaXJlY3RpdmVfdGl0bGUgPz8gXCJUSEUgRElSRUNUSVZFXCI7XG4gIGNvbnN0IGJlZ2luTGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmJlZ2luX3dvcmtzcGFjZSA/PyBcIkVOVEVSIFdPUktTUEFDRVwiO1xuICBjb25zdCBub3ROb3dMYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMubm90X25vdyA/PyBcIk5PVCBOT1dcIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDb21wYWN0IGNhcmRcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkIG9sZW4tZGlyZWN0aXZlXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEhlYWRlciB3aXRoIGJhZGdlXG4gIGNvbnN0IGhlYWRlciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWhlYWRlclwiIH0pO1xuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIGNvbnN0IGJhZGdlID0gaGVhZGVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1iYWRnZVwiIH0pO1xuICBiYWRnZS5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0QmFkZ2VDb2xvcihzdWdnZXN0aW9uLnJlYXNvbik7XG5cbiAgLy8gQWN0aXZpdHkgaW5mb1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aXZpdHlcIixcbiAgICB0ZXh0OiBgJHtzdWdnZXN0aW9uLmVtb2ppfSAke3N1Z2dlc3Rpb24uYWN0aXZpdHlOYW1lfWAsXG4gIH0pO1xuXG4gIGNvbnN0IG5lZ2xlY3RUZXh0ID0gc3VnZ2VzdGlvbi5kYXlzU2luY2VMYXN0RG9uZSA8IDk5OVxuICAgID8gYCR7c3VnZ2VzdGlvbi5kYXlzU2luY2VMYXN0RG9uZX0gZGF5cyBuZWdsZWN0ZWRgXG4gICAgOiBcIk5vdCB5ZXQgc3RhcnRlZFwiO1xuXG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtbmVnbGVjdFwiLCB0ZXh0OiBuZWdsZWN0VGV4dCB9KTtcblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBjb25zdCBhY3Rpb25zID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aW9uc1wiIH0pO1xuXG4gIGNvbnN0IGJlZ2luQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICB0ZXh0OiBiZWdpbkxhYmVsLFxuICB9KTtcbiAgYmVnaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBvbkVudGVyV29ya3NwYWNlPy4oc3VnZ2VzdGlvbi5hY3Rpdml0eUlkKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90Tm93QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgIHRleHQ6IG5vdE5vd0xhYmVsLFxuICB9KTtcbiAgbm90Tm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gRGlzbWlzcyB0aGlzIGNhcmQgd2l0aCBhIGZhZGVcbiAgICBjYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTBweClcIjtcbiAgICBjYXJkLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjNzIGVhc2VcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0sIDMwMCk7XG4gIH0pO1xuXG4gIC8vIFRhcCBjYXJkIHRvIGV4cGFuZFxuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd0V4cGFuZGVkRGlyZWN0aXZlKGNvbnRhaW5lciwgc2V0dGluZ3MsIHN1Z2dlc3Rpb24sIGJlZ2luTGFiZWwsIG5vdE5vd0xhYmVsLCBvbkVudGVyV29ya3NwYWNlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dFeHBhbmRlZERpcmVjdGl2ZShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3VnZ2VzdGlvbjogeyBhY3Rpdml0eUlkOiBzdHJpbmc7IGFjdGl2aXR5TmFtZTogc3RyaW5nOyBlbW9qaTogc3RyaW5nOyByZWFzb246IFByaW9yaXR5UmVhc29uOyBkYXlzU2luY2VMYXN0RG9uZTogbnVtYmVyOyBsb3JlVGV4dDogc3RyaW5nIH0sXG4gIGJlZ2luTGFiZWw6IHN0cmluZyxcbiAgbm90Tm93TGFiZWw6IHN0cmluZyxcbiAgb25FbnRlcldvcmtzcGFjZT86IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWRcbik6IHZvaWQge1xuICAvLyBDcmVhdGUgb3ZlcmxheVxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldFwiIH0pO1xuXG4gIC8vIEhhbmRsZSBiYXJcbiAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgLy8gVGl0bGVcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlYWRpbmctbGdcIixcbiAgICB0ZXh0OiBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRpcmVjdGl2ZV90aXRsZSA/PyBcIlRIRSBESVJFQ1RJVkVcIixcbiAgfSk7XG5cbiAgLy8gQWN0aXZpdHkgbmFtZVxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGl2aXR5XCIsXG4gICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDIycHg7IG1hcmdpbjogMTZweCAwIDhweDtcIiB9LFxuICAgIHRleHQ6IGAke3N1Z2dlc3Rpb24uZW1vaml9ICR7c3VnZ2VzdGlvbi5hY3Rpdml0eU5hbWV9YCxcbiAgfSk7XG5cbiAgLy8gTmVnbGVjdCBkZXNjcmlwdGlvblxuICBjb25zdCBuZWdsZWN0RGVzYyA9IHN1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmUgPCA5OTlcbiAgICA/IGAke3N1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmV9IGRheXMgc2luY2UgeW91IGxhc3QgcHJhY3RpY2VkLiBUaGUgc2tpbGwgYXRyb3BoaWVzLmBcbiAgICA6IFwiQSBuZXcgcGF0aCBhd2FpdHMuIFRha2UgdGhlIGZpcnN0IHN0ZXAuXCI7XG5cbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWJvZHktaXRhbGljXCIsXG4gICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiAxMnB4O1wiIH0sXG4gICAgdGV4dDogbmVnbGVjdERlc2MsXG4gIH0pO1xuXG4gIC8vIExvcmUgdGV4dFxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tc2hlZXQtbG9yZVwiLFxuICAgIHRleHQ6IGBcIiR7c3VnZ2VzdGlvbi5sb3JlVGV4dH1cImAsXG4gIH0pO1xuXG4gIC8vIFJhbmRvbSBxdW90ZVxuICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG4gIGNvbnN0IHF1b3RlU2VjdGlvbiA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LXF1b3RlXCIgfSk7XG4gIHF1b3RlU2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgdGV4dDogYFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbi1ib3R0b206IDZweDtcIiB9LFxuICB9KTtcbiAgcXVvdGVTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgIHRleHQ6IGBcdTIwMTQgJHtxdW90ZS5hdHRyaWJ1dGlvbn1gLFxuICB9KTtcblxuICAvLyBBY3Rpb25zXG4gIGNvbnN0IGFjdGlvbnMgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aW9uc1wiIH0pO1xuICBhY3Rpb25zLnN0eWxlLm1hcmdpblRvcCA9IFwiMjBweFwiO1xuICBhY3Rpb25zLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcblxuICBjb25zdCBiZWdpbkJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogYmVnaW5MYWJlbCxcbiAgfSk7XG4gIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2xvc2VTaGVldCgpO1xuICAgIG9uRW50ZXJXb3Jrc3BhY2U/LihzdWdnZXN0aW9uLmFjdGl2aXR5SWQpO1xuICB9KTtcblxuICBjb25zdCBub3ROb3dCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgdGV4dDogbm90Tm93TGFiZWwsXG4gIH0pO1xuICBub3ROb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbG9zZVNoZWV0KCk7XG4gIH0pO1xuXG4gIC8vIENsb3NlIG9uIG92ZXJsYXkgdGFwXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVNoZWV0KCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlU2hlZXQoKTogdm9pZCB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gIH1cblxuICAvLyBBcHBlbmQgYW5kIGFuaW1hdGUgaW5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFkZ2VDb2xvcihyZWFzb246IFByaW9yaXR5UmVhc29uKTogc3RyaW5nIHtcbiAgc3dpdGNoIChyZWFzb24pIHtcbiAgICBjYXNlIFwiZGVhdGhcIjogcmV0dXJuIFwiI2VmNDQ0NFwiO1xuICAgIGNhc2UgXCJib3NzXCI6IHJldHVybiBcIiNlYWIzMDhcIjtcbiAgICBjYXNlIFwibmVnbGVjdFwiOiByZXR1cm4gXCIjZjk3MzE2XCI7XG4gICAgY2FzZSBcIndlZWtseVwiOiByZXR1cm4gXCIjM2I4MmY2XCI7XG4gICAgY2FzZSBcImNoYWluXCI6IHJldHVybiBcIiM4YjVjZjZcIjtcbiAgICBjYXNlIFwidGltZVwiOiByZXR1cm4gXCIjMDZiNmQ0XCI7XG4gICAgY2FzZSBcImJhbGFuY2VkXCI6IHJldHVybiBcIiNmZmZmZmZcIjtcbiAgICBkZWZhdWx0OiByZXR1cm4gXCIjOTI4ZDg1XCI7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEJvc3MgU3RhdHVzIENhcmQgQ29tcG9uZW50XG4vLyBDb21wYWN0IGJvc3MgSFAgYmFyIHdpdGggdGllciBhbmQgcmFua1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvQm9zc0VuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9zc1N0YXR1c0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgYm9zc0VuZ2luZSA9IG5ldyBCb3NzRW5naW5lKHNldHRpbmdzKTtcbiAgY29uc3Qgc3RhdHVzID0gYm9zc0VuZ2luZS5nZXRCb3NzU3RhdHVzKCk7XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmJvc3Nfc3RhdHVzX3RpdGxlID8/IFwiQk9TUyBTVEFUVVNcIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDYXJkXG4gIGNvbnN0IGNhcmRDbHMgPSBzdGF0dXMuaW5UYXJ0YXJ1cyA/IFwib2xlbi1jYXJkLWNvbXBhY3Qgb2xlbi1jYXJkLXRhcnRhcnVzXCIgOiBcIm9sZW4tY2FyZC1jb21wYWN0XCI7XG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBjYXJkQ2xzIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBSb3c6IGVtb2ppICsgaW5mb1xuICBjb25zdCByb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWJvc3Mtcm93XCIgfSk7XG5cbiAgcm93LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYm9zcy1lbW9qaVwiLCB0ZXh0OiBnZXRCb3NzRW1vamkoc3RhdHVzLnRpZXIpIH0pO1xuXG4gIGNvbnN0IGluZm8gPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYm9zcy1pbmZvXCIgfSk7XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1ib3NzLW5hbWVcIiwgdGV4dDogc3RhdHVzLmJvc3MubmFtZSB9KTtcbiAgaW5mby5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYm9zcy10aWVyXCIsXG4gICAgdGV4dDogYFRpZXIgJHtzdGF0dXMudGllcn0gXHUwMEI3ICR7c3RhdHVzLnJhbmt9YCxcbiAgfSk7XG5cbiAgLy8gSFAgYmFyXG4gIGNvbnN0IGhwQmFyID0gaW5mby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ocC1iYXJcIiB9KTtcbiAgY29uc3QgaHBGaWxsID0gaHBCYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taHAtYmFyLWZpbGxcIiB9KTtcbiAgaHBGaWxsLnN0eWxlLndpZHRoID0gYCR7c3RhdHVzLnBlcmNlbnR9JWA7XG4gIGhwRmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gYm9zc0VuZ2luZS5nZXRIUENvbG9yKHN0YXR1cy5wZXJjZW50KTtcblxuICAvLyBIUCB0ZXh0XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWJvc3MtaHAtdGV4dFwiLFxuICAgIHRleHQ6IGAke3N0YXR1cy5jdXJyZW50SFB9LyR7c3RhdHVzLm1heEhQfSBIUCAoJHtzdGF0dXMucGVyY2VudH0lKWAsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRCb3NzRW1vamkodGllcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgZW1vamlzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAgIDE6IFwiXFx1ezFGNDdCfVwiLCAyOiBcIlxcdXsxRjlEQ31cIiwgMzogXCJcXHV7MUY0MDl9XCIsIDQ6IFwiXFx1ezFGNDAyfVwiLFxuICAgIDU6IFwiXFx1ezFGNDBEfVwiLCA2OiBcIlxcdXsxRjk4MX1cIiwgNzogXCJcXHV7MUY1MjV9XCIsIDg6IFwiXFx1ezFGNDNBfVwiLFxuICAgIDk6IFwiXFx1ezFGMzBBfVwiLCAxMDogXCJcXHV7MUY0N0Z9XCIsIDExOiBcIlxcdXsxRjMyOX1cIiwgMTI6IFwiXFx1MjMxQlwiLFxuICAgIDEzOiBcIlxcdXsxRjMwMH1cIixcbiAgfTtcbiAgcmV0dXJuIGVtb2ppc1t0aWVyXSA/PyBcIlxcdTI2OTRcXHVGRTBGXCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBXZWVrbHkgUmh5dGhtIENvbXBvbmVudFxuLy8gNy1kYXkgYmFyIGNoYXJ0IHdpdGggY2F0ZWdvcnkgc3RhY2tpbmcgKyBzdGF0cyByb3dcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldlZWtseVJoeXRobShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy53ZWVrbHlfcmh5dGhtX3RpdGxlID8/IFwiV0VFS0xZIFJIWVRITVwiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENhcmRcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFN0YXRzIHJvd1xuICBjb25zdCBzdGF0cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXRzXCIgfSk7XG5cbiAgY29uc3QgYWN0aXZlRGF5cyA9IGVuZ2luZS5nZXRBY3RpdmVEYXlzVGhpc1dlZWsoKTtcbiAgY29uc3QgYmVzdERheSA9IGVuZ2luZS5nZXRCZXN0RGF5VGhpc1dlZWsoKTtcbiAgY29uc3QgdG90YWxDb21wbGV0aW9ucyA9IGVuZ2luZS5nZXRUb3RhbENvbXBsZXRpb25zKCk7XG5cbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgU3RyaW5nKGFjdGl2ZURheXMpICsgXCIvN1wiLCBcIkFjdGl2ZSBkYXlzXCIpO1xuICBjcmVhdGVXZWVrbHlTdGF0KHN0YXRzLCBiZXN0RGF5LCBcIkJlc3QgZGF5XCIpO1xuICBjcmVhdGVXZWVrbHlTdGF0KHN0YXRzLCBTdHJpbmcodG90YWxDb21wbGV0aW9ucyksIFwiVG90YWxcIik7XG5cbiAgLy8gRGl2aWRlclxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBCYXIgY2hhcnRcbiAgY29uc3Qgd2Vla2x5RGF0YSA9IGVuZ2luZS5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvZGF5U3RyID0gbmV3IERhdGUobm93KS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuICAvLyBGaW5kIG1heCB0b3RhbCBmb3Igc2NhbGluZ1xuICBsZXQgbWF4VG90YWwgPSAxO1xuICBmb3IgKGNvbnN0IGRheSBvZiB3ZWVrbHlEYXRhKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBkYXkuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbCArPSB2OyB9KTtcbiAgICBpZiAodG90YWwgPiBtYXhUb3RhbCkgbWF4VG90YWwgPSB0b3RhbDtcbiAgfVxuXG4gIGNvbnN0IGJhcnNDb250YWluZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXJzXCIgfSk7XG5cbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla2x5RGF0YSkge1xuICAgIGNvbnN0IGNvbCA9IGJhcnNDb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhci1jb2xcIiB9KTtcblxuICAgIC8vIFN0YWNrZWQgYmFyXG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBkYXkuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbCArPSB2OyB9KTtcblxuICAgIGNvbnN0IGJhckhlaWdodCA9IG1heFRvdGFsID4gMCA/IE1hdGgubWF4KDQsICh0b3RhbCAvIG1heFRvdGFsKSAqIDEwMCkgOiA0O1xuICAgIGNvbnN0IGJhckVsID0gY29sLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXJcIiB9KTtcbiAgICBiYXJFbC5zdHlsZS5oZWlnaHQgPSBgJHtiYXJIZWlnaHR9cHhgO1xuICAgIGJhckVsLnN0eWxlLm1pbkhlaWdodCA9IFwiNHB4XCI7XG5cbiAgICBpZiAoZGF5LmRhdGUgPT09IHRvZGF5U3RyKSB7XG4gICAgICBiYXJFbC5jbGFzc0xpc3QuYWRkKFwib2xlbi13ZWVrbHktYmFyLXRvZGF5XCIpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBzdGFja2VkIHNlZ21lbnRzXG4gICAgY29uc3QgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdO1xuICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgIGNvbnN0IGNhdENvdW50ID0gZGF5LmNvbXBsZXRpb25zLmdldChjYXQpID8/IDA7XG4gICAgICBpZiAoY2F0Q291bnQgPT09IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3Qgc2VnSGVpZ2h0ID0gdG90YWwgPiAwID8gKGNhdENvdW50IC8gdG90YWwpICogMTAwIDogMDtcbiAgICAgIGNvbnN0IHNlZyA9IGJhckVsLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItc2VnbWVudFwiIH0pO1xuICAgICAgc2VnLnN0eWxlLmhlaWdodCA9IGAke3NlZ0hlaWdodH0lYDtcbiAgICAgIHNlZy5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0Q2F0ZWdvcnlDb2xvcihjYXQsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBJZiBubyBjb21wbGV0aW9ucywgc2hvdyBlbXB0eSBiYXJcbiAgICBpZiAodG90YWwgPT09IDApIHtcbiAgICAgIGJhckVsLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIjtcbiAgICB9XG5cbiAgICAvLyBEYXkgbGFiZWxcbiAgICBjb2wuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktZGF5LWxhYmVsXCIsIHRleHQ6IGRheS5kYXkuY2hhckF0KDApIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlZWtseVN0YXQocGFyZW50OiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBzdGF0ID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0XCIgfSk7XG4gIHN0YXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdC12YWx1ZVwiLCB0ZXh0OiB2YWx1ZSB9KTtcbiAgc3RhdC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0LWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDYXRlZ29yeUNvbG9yKGNhdGVnb3J5OiBDYXRlZ29yeSwgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyk6IHN0cmluZyB7XG4gIHJldHVybiBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBBY3Rpdml0eSBHcmlkIENvbXBvbmVudFxuLy8gMi1jb2x1bW4gZ3JpZCBvZiBhY3Rpdml0eSBjYXJkcyB3aXRoIHByb2dyZXNzIHJpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBY3Rpdml0eUdyaWQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuYWN0aXZpdHlfZ3JpZF90aXRsZSA/PyBcIkFDVElWSVRJRVNcIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBHcmlkIGNvbnRhaW5lclxuICBjb25zdCBncmlkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LWdyaWRcIiB9KTtcbiAgZ3JpZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IHNldHRpbmdzLmRldkNvbmZpZy5hY3Rpdml0eUdyaWRDb2x1bW5zID8/IDI7XG4gIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtjb2x1bW5zfSwgMWZyKWA7XG5cbiAgY29uc3QgYWN0aXZpdGllcyA9IGVuZ2luZS5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuXG4gIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgIGNvbnN0IGNhcmQgPSBncmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LWNhcmRcIiB9KTtcblxuICAgIC8vIENhdGVnb3J5IGFjY2VudCBiYXJcbiAgICBjb25zdCBhY2NlbnQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LWFjY2VudFwiIH0pO1xuICAgIGFjY2VudC5zdHlsZS5iYWNrZ3JvdW5kID0gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbYWN0aXZpdHkuY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xuXG4gICAgLy8gVG9wIHJvdzogZW1vamkgKyBzdGF0dXMgZG90XG4gICAgY29uc3QgdG9wID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS10b3BcIiB9KTtcbiAgICB0b3AuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1lbW9qaVwiLCB0ZXh0OiBhY3Rpdml0eS5lbW9qaSB9KTtcblxuICAgIGNvbnN0IGRheXNTaW5jZSA9IGVuZ2luZS5nZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eS5pZCk7XG4gICAgY29uc3QgZG90Q2xzID0gZ2V0RG90Q2xhc3MoZGF5c1NpbmNlKTtcbiAgICB0b3AuY3JlYXRlRGl2KHsgY2xzOiBgb2xlbi1hY3Rpdml0eS1kb3QgJHtkb3RDbHN9YCB9KTtcblxuICAgIC8vIEFjdGl2aXR5IG5hbWVcbiAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktbmFtZVwiLCB0ZXh0OiBhY3Rpdml0eS5uYW1lIH0pO1xuXG4gICAgLy8gV2Vla2x5IHByb2dyZXNzXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBlbmdpbmUuZ2V0V2Vla2x5UHJvZ3Jlc3MoYWN0aXZpdHkuaWQpO1xuICAgIGNvbnN0IHByb2dyZXNzUm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzc1wiIH0pO1xuXG4gICAgLy8gUHJvZ3Jlc3MgcmluZyAoU1ZHKVxuICAgIGNvbnN0IHJpbmcgPSBjcmVhdGVQcm9ncmVzc1JpbmcocHJvZ3Jlc3MuZG9uZSwgcHJvZ3Jlc3MudGFyZ2V0LCBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1thY3Rpdml0eS5jYXRlZ29yeV0pO1xuICAgIHByb2dyZXNzUm93LmFwcGVuZENoaWxkKHJpbmcpO1xuXG4gICAgcHJvZ3Jlc3NSb3cuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3MtdGV4dFwiLFxuICAgICAgdGV4dDogYCR7cHJvZ3Jlc3MuZG9uZX0gb2YgJHtwcm9ncmVzcy50YXJnZXR9YCxcbiAgICB9KTtcblxuICAgIC8vIFN0cmVha1xuICAgIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRBY3Rpdml0eVN0cmVhayhhY3Rpdml0eS5pZCk7XG4gICAgaWYgKHN0cmVhayA+IDApIHtcbiAgICAgIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi1hY3Rpdml0eS1zdHJlYWtcIixcbiAgICAgICAgdGV4dDogYCR7c3RyZWFrfSBkYXkgc3RyZWFrYCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREb3RDbGFzcyhkYXlzU2luY2U6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChkYXlzU2luY2UgPT09IDApIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LWdyZWVuXCI7XG4gIGlmIChkYXlzU2luY2UgPD0gMSkgcmV0dXJuIFwib2xlbi1hY3Rpdml0eS1kb3QteWVsbG93XCI7XG4gIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LXJlZFwiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmVzc1JpbmcoZG9uZTogbnVtYmVyLCB0YXJnZXQ6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xuICBjb25zdCBzaXplID0gMjQ7XG4gIGNvbnN0IHN0cm9rZVdpZHRoID0gMi41O1xuICBjb25zdCByYWRpdXMgPSAoc2l6ZSAtIHN0cm9rZVdpZHRoKSAvIDI7XG4gIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqIHJhZGl1cztcbiAgY29uc3QgcGVyY2VudCA9IHRhcmdldCA+IDAgPyBNYXRoLm1pbigxLCBkb25lIC8gdGFyZ2V0KSA6IDA7XG4gIGNvbnN0IGRhc2hPZmZzZXQgPSBjaXJjdW1mZXJlbmNlICogKDEgLSBwZXJjZW50KTtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhzaXplKSk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKHNpemUpKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke3NpemV9ICR7c2l6ZX1gKTtcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzLXJpbmdcIik7XG5cbiAgLy8gQmFja2dyb3VuZCBjaXJjbGVcbiAgY29uc3QgYmdDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIFN0cmluZyhyYWRpdXMpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcInJnYmEoMjU1LDI1NSwyNTUsMC4wOClcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBTdHJpbmcoc3Ryb2tlV2lkdGgpKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGJnQ2lyY2xlKTtcblxuICAvLyBQcm9ncmVzcyBjaXJjbGVcbiAgY29uc3QgcHJvZ3Jlc3NDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIFN0cmluZyhyYWRpdXMpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBjb2xvcik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBTdHJpbmcoc3Ryb2tlV2lkdGgpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBTdHJpbmcoY2lyY3VtZmVyZW5jZSkpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaG9mZnNldFwiLCBTdHJpbmcoZGFzaE9mZnNldCkpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHJvdGF0ZSgtOTAgJHtzaXplIC8gMn0gJHtzaXplIC8gMn0pYCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChwcm9ncmVzc0NpcmNsZSk7XG5cbiAgcmV0dXJuIHN2Zztcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFRlbXBsZSBDaGlwcyBDb21wb25lbnRcbi8vIEhvcml6b250YWwgc2Nyb2xsYWJsZSBjaGlwcyBmb3Igc2VsZi1jYXJlIHRhc2sgdHJhY2tpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgVGVtcGxlVGFzayB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGVtcGxlQ2hpcHMoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvblRlbXBsZVVwZGF0ZTogKHRhc2tJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgaWYgKCFzZXR0aW5ncy50ZW1wbGVUYXNrcyB8fCBzZXR0aW5ncy50ZW1wbGVUYXNrcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMudGVtcGxlX3RpdGxlID8/IFwiVEhFIFRFTVBMRVwiO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuXG4gIC8vIFNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGUtc2VjdGlvblwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBUaXRsZVxuICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDaGlwcyBjb250YWluZXJcbiAgY29uc3QgY2hpcHMgPSBzZWN0aW9uLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwc1wiIH0pO1xuICBjaGlwcy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjhweFwiO1xuXG4gIGZvciAoY29uc3QgdGFzayBvZiBzZXR0aW5ncy50ZW1wbGVUYXNrcykge1xuICAgIGNvbnN0IHN0YXR1cyA9IGdldFRhc2tTdGF0dXModGFzaywgbm93KTtcblxuICAgIGNvbnN0IGNoaXBDbHMgPSBgb2xlbi10ZW1wbGUtY2hpcCAke3N0YXR1cy5jaGlwQ2xhc3N9YDtcbiAgICBjb25zdCBjaGlwID0gY2hpcHMuY3JlYXRlRGl2KHsgY2xzOiBjaGlwQ2xzIH0pO1xuXG4gICAgY2hpcC5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcC1lbW9qaVwiLCB0ZXh0OiB0YXNrLmVtb2ppIH0pO1xuICAgIGNoaXAuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXAtdGV4dFwiLCB0ZXh0OiBgJHt0YXNrLm5hbWV9IFx1MDBCNyAke3N0YXR1cy50ZXh0fWAgfSk7XG5cbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvblRlbXBsZVVwZGF0ZSh0YXNrLmlkKTtcbiAgICAgIC8vIFZpc3VhbCBmZWVkYmFja1xuICAgICAgY2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDAuOSlcIjtcbiAgICAgIGNoaXAuc3R5bGUub3BhY2l0eSA9IFwiMC42XCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICBjaGlwLnN0eWxlLm9wYWNpdHkgPSBcIlwiO1xuICAgICAgfSwgMjAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgVGFza1N0YXR1cyB7XG4gIHRleHQ6IHN0cmluZztcbiAgY2hpcENsYXNzOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tTdGF0dXModGFzazogVGVtcGxlVGFzaywgbm93OiBEYXRlKTogVGFza1N0YXR1cyB7XG4gIGlmICghdGFzay5sYXN0Q29tcGxldGVkKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJvdmVyZHVlXCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW92ZXJkdWVcIiB9O1xuICB9XG5cbiAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKHRhc2subGFzdENvbXBsZXRlZCk7XG4gIGNvbnN0IG1zUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgY29uc3QgZGF5c1NpbmNlID0gTWF0aC5mbG9vcigobm93LmdldFRpbWUoKSAtIGxhc3QuZ2V0VGltZSgpKSAvIG1zUGVyRGF5KTtcbiAgY29uc3QgZGF5c1VudGlsRHVlID0gdGFzay5pbnRlcnZhbERheXMgLSBkYXlzU2luY2U7XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAwKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJvdmVyZHVlXCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW92ZXJkdWVcIiB9O1xuICB9XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAxKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJkdWUgdG9kYXlcIiwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtd2FyblwiIH07XG4gIH1cblxuICBpZiAoZGF5c1VudGlsRHVlIDw9IDIpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBgZHVlIGluICR7ZGF5c1VudGlsRHVlfWRgLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC13YXJuXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHRleHQ6IGBpbiAke2RheXNVbnRpbER1ZX1kYCwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtb2tcIiB9O1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgUXVvdGUgRm9vdGVyIENvbXBvbmVudFxuLy8gUm90YXRpbmcgc3RvaWMgcXVvdGUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgZGFzaGJvYXJkXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwLCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEZBTExCQUNLX1FVT1RFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclF1b3RlRm9vdGVyKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBhcHA6IEFwcCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3QgcXVvdGUgPSBnZXRRdW90ZShhcHAsIHNldHRpbmdzLCBvblNldHRpbmdzVXBkYXRlKTtcblxuICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXF1b3RlXCIgfSk7XG4gIHNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIHNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXF1b3RlLXRleHRcIixcbiAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICB9KTtcblxuICBpZiAocXVvdGUuYXR0cmlidXRpb24pIHtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICB9KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUXVvdGUge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGF0dHJpYnV0aW9uOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFF1b3RlKFxuICBhcHA6IEFwcCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IFF1b3RlIHtcbiAgLy8gVHJ5IHZhdWx0IGZvbGRlciBxdW90ZXMgZmlyc3RcbiAgaWYgKHNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aCkge1xuICAgIGNvbnN0IHZhdWx0UXVvdGVzID0gbG9hZFF1b3Rlc0Zyb21WYXVsdChhcHAsIHNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aCk7XG4gICAgaWYgKHZhdWx0UXVvdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwaWNrUXVvdGUodmF1bHRRdW90ZXMsIHNldHRpbmdzLCBvblNldHRpbmdzVXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICAvLyBGYWxsYmFjayB0byBoYXJkY29kZWQgcXVvdGVzXG4gIHJldHVybiBwaWNrUXVvdGUoRkFMTEJBQ0tfUVVPVEVTLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHBpY2tRdW90ZShcbiAgcXVvdGVzOiBRdW90ZVtdLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogUXVvdGUge1xuICBpZiAocXVvdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwiVGhlIHVuZXhhbWluZWQgbGlmZSBpcyBub3Qgd29ydGggbGl2aW5nLlwiLCBhdHRyaWJ1dGlvbjogXCJTb2NyYXRlc1wiIH07XG4gIH1cblxuICAvLyBBdm9pZCByZWNlbnRseSBzaG93biBxdW90ZXNcbiAgY29uc3QgcmVjZW50SWRzID0gc2V0dGluZ3MucmVjZW50UXVvdGVJZHMgPz8gW107XG4gIGNvbnN0IGF2YWlsYWJsZSA9IHF1b3Rlc1xuICAgIC5tYXAoKHEsIGkpID0+ICh7IHEsIGkgfSkpXG4gICAgLmZpbHRlcigoeyBpIH0pID0+ICFyZWNlbnRJZHMuaW5jbHVkZXMoaSkpO1xuXG4gIGNvbnN0IHBvb2wgPSBhdmFpbGFibGUubGVuZ3RoID4gMCA/IGF2YWlsYWJsZSA6IHF1b3Rlcy5tYXAoKHEsIGkpID0+ICh7IHEsIGkgfSkpO1xuICBjb25zdCBwaWNrID0gcG9vbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb29sLmxlbmd0aCldO1xuXG4gIC8vIFRyYWNrIHJlY2VudCAoa2VlcCBsYXN0IDUpXG4gIGNvbnN0IG5ld1JlY2VudCA9IFsuLi5yZWNlbnRJZHMsIHBpY2suaV0uc2xpY2UoLU1hdGgubWluKDUsIE1hdGguZmxvb3IocXVvdGVzLmxlbmd0aCAvIDIpKSk7XG4gIG9uU2V0dGluZ3NVcGRhdGUoe1xuICAgIGxhc3RRdW90ZUluZGV4OiBwaWNrLmksXG4gICAgcmVjZW50UXVvdGVJZHM6IG5ld1JlY2VudCxcbiAgfSk7XG5cbiAgcmV0dXJuIHBpY2sucTtcbn1cblxuZnVuY3Rpb24gbG9hZFF1b3Rlc0Zyb21WYXVsdChhcHA6IEFwcCwgZm9sZGVyUGF0aDogc3RyaW5nKTogUXVvdGVbXSB7XG4gIGNvbnN0IHF1b3RlczogUXVvdGVbXSA9IFtdO1xuICBjb25zdCBhYnN0cmFjdEZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZvbGRlclBhdGgpO1xuICBpZiAoIWFic3RyYWN0RmlsZSkgcmV0dXJuIHF1b3RlcztcblxuICBjb25zdCBmaWxlcyA9IGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKChmKSA9PlxuICAgIGYucGF0aC5zdGFydHNXaXRoKGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIilcbiAgKTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBjYWNoZSA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBpZiAoIWNhY2hlKSBjb250aW51ZTtcblxuICAgIC8vIE9uZSBxdW90ZSBwZXIgZmlsZSAoZGVmYXVsdCBtb2RlKVxuICAgIGNvbnN0IG5hbWUgPSBmaWxlLmJhc2VuYW1lO1xuICAgIGNvbnN0IHBhcnRzID0gc3BsaXRBdHRyaWJ1dGlvbihuYW1lKTtcbiAgICBxdW90ZXMucHVzaChwYXJ0cyk7XG4gIH1cblxuICByZXR1cm4gcXVvdGVzO1xufVxuXG5mdW5jdGlvbiBzcGxpdEF0dHJpYnV0aW9uKHRleHQ6IHN0cmluZyk6IFF1b3RlIHtcbiAgLy8gQ2hlY2sgZm9yIGVtLWRhc2ggYXR0cmlidXRpb25cbiAgY29uc3QgZGFzaEluZGV4ID0gdGV4dC5sYXN0SW5kZXhPZihcIiBcdTIwMTQgXCIpO1xuICBpZiAoZGFzaEluZGV4ID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0ZXh0LnNsaWNlKDAsIGRhc2hJbmRleCkudHJpbSgpLFxuICAgICAgYXR0cmlidXRpb246IHRleHQuc2xpY2UoZGFzaEluZGV4ICsgMykudHJpbSgpLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBoeXBoZW5JbmRleCA9IHRleHQubGFzdEluZGV4T2YoXCIgLSBcIik7XG4gIGlmIChoeXBoZW5JbmRleCA+IHRleHQubGVuZ3RoICogMC41KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRleHQuc2xpY2UoMCwgaHlwaGVuSW5kZXgpLnRyaW0oKSxcbiAgICAgIGF0dHJpYnV0aW9uOiB0ZXh0LnNsaWNlKGh5cGhlbkluZGV4ICsgMykudHJpbSgpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4geyB0ZXh0OiB0ZXh0LnRyaW0oKSwgYXR0cmlidXRpb246IFwiXCIgfTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERheSBUaW1lbGluZSBDb21wb25lbnRcbi8vIFZlcnRpY2FsIGNvbG9yZWQgdGltZWxpbmUgb2YgdGhlIGRheSdzIHBsYW5uZWQgYWN0aXZpdGllc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBEYXlNYXBFbnRyeSwgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRheVRpbWVsaW5lKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBjYWxsYmFja3M6IHtcbiAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblNraXA6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhckRvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJQb3N0cG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gICAgb25DcmVhdGVFdmVudD86ICgpID0+IHZvaWQ7XG4gIH1cbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGF5bWFwX3RpdGxlID8/IFwiWU9VUiBEQVlcIjtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgY3VycmVudEhvdXIgPSBub3cuZ2V0SG91cnMoKSArIG5vdy5nZXRNaW51dGVzKCkgLyA2MDtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBUaW1lbGluZSBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZCBvbGVuLXRpbWVsaW5lLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gR2V0IGRheSBtYXAgZW50cmllc1xuICBjb25zdCBlbnRyaWVzID0gZW5naW5lLmdldERheU1hcCgpO1xuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtZW1wdHlcIixcbiAgICAgIHRleHQ6IFwiTm8gYWN0aXZpdGllcyBzY2hlZHVsZWQuIEEgcmFyZSBkYXkgb2YgcmVzdC5cIixcbiAgICB9KTtcbiAgICByZW5kZXJUaW1lbGluZUZvb3RlcihjYXJkLCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrcy5vbkNyZWF0ZUV2ZW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBUaW1lbGluZSBjb250YWluZXJcbiAgY29uc3QgdGltZWxpbmUgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lXCIgfSk7XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgcmVuZGVyVGltZWxpbmVFbnRyeShcbiAgICAgIHRpbWVsaW5lLCBlbnRyeSwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3NcbiAgICApO1xuICB9XG5cbiAgLy8gRm9vdGVyXG4gIHJlbmRlclRpbWVsaW5lRm9vdGVyKGNhcmQsIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzLm9uQ3JlYXRlRXZlbnQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUaW1lbGluZUVudHJ5KFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBlbnRyeTogRGF5TWFwRW50cnksXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGN1cnJlbnRIb3VyOiBudW1iZXIsXG4gIGNhbGxiYWNrczoge1xuICAgIG9uQWNjZXB0OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uU2tpcDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyRG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhclBvc3Rwb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgfVxuKTogdm9pZCB7XG4gIGNvbnN0IGlzQ2FsZW5kYXIgPSBlbnRyeS5pc0NhbGVuZGFyVGFzayA9PT0gdHJ1ZTtcbiAgY29uc3QgY29sb3IgPSBpc0NhbGVuZGFyID8gXCIjNWU3YTlhXCIgOiAoc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbZW50cnkuY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiKTtcbiAgY29uc3QgaXNDdXJyZW50ID0gY3VycmVudEhvdXIgPj0gZW50cnkuc3RhcnRIb3VyICYmIGN1cnJlbnRIb3VyIDwgZW50cnkuZW5kSG91cjtcbiAgY29uc3QgaXNQYXN0ID0gY3VycmVudEhvdXIgPj0gZW50cnkuZW5kSG91cjtcbiAgY29uc3QgaXNEb25lID0gZW50cnkuc3RhdHVzID09PSBcImRvbmVcIjtcbiAgY29uc3QgaXNTa2lwcGVkID0gZW50cnkuc3RhdHVzID09PSBcInNraXBwZWRcIjtcblxuICAvLyBEZXRlcm1pbmUgdmlzdWFsIHN0YXRlXG4gIGxldCBzdGF0ZUNscyA9IFwib2xlbi10aW1lbGluZS1lbnRyeVwiO1xuICBpZiAoaXNDYWxlbmRhcikgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1jYWxlbmRhclwiO1xuICBpZiAoaXNEb25lKSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLWRvbmVcIjtcbiAgZWxzZSBpZiAoaXNTa2lwcGVkKSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLXNraXBwZWRcIjtcbiAgZWxzZSBpZiAoaXNDdXJyZW50KSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLWN1cnJlbnRcIjtcbiAgZWxzZSBpZiAoaXNQYXN0KSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLXBhc3RcIjtcblxuICBjb25zdCByb3cgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBzdGF0ZUNscyB9KTtcblxuICAvLyBDYXRlZ29yeSBjb2xvciBiYXIgKGNhbGVuZGFyIHRhc2tzIGdldCBhIGRpc3RpbmN0IGRhc2hlZCBzdHlsZSlcbiAgY29uc3QgYmFyID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWJhclwiIH0pO1xuICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuICBpZiAoaXNDYWxlbmRhciAmJiAhaXNEb25lKSB7XG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoXCJvbGVuLXRpbWVsaW5lLWJhci1jYWxlbmRhclwiKTtcbiAgfVxuICBpZiAoaXNDdXJyZW50ICYmICFpc0RvbmUgJiYgIWlzU2tpcHBlZCkge1xuICAgIGJhci5zdHlsZS5ib3hTaGFkb3cgPSBgMCAwIDEycHggJHtjb2xvcn1gO1xuICB9XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWNvbnRlbnRcIiB9KTtcblxuICAvLyBUb3AgbGluZTogdGltZSArIGR1cmF0aW9uICsgc291cmNlIGJhZGdlIGZvciBjYWxlbmRhciB0YXNrc1xuICBjb25zdCB0aW1lTGluZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtdGltZVwiIH0pO1xuICB0aW1lTGluZS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdEhvdXIoZW50cnkuc3RhcnRIb3VyKX0gXHUyMDEzICR7Zm9ybWF0SG91cihlbnRyeS5lbmRIb3VyKX0gXHUwMEI3ICR7ZW50cnkuZXN0aW1hdGVkRHVyYXRpb259bWA7XG5cbiAgaWYgKGlzQ2FsZW5kYXIgJiYgZW50cnkuY2FsZW5kYXJTb3VyY2UpIHtcbiAgICBjb25zdCBiYWRnZSA9IHRpbWVMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLXNvdXJjZS1iYWRnZVwiIH0pO1xuICAgIHN3aXRjaCAoZW50cnkuY2FsZW5kYXJTb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJkYWlseS1ub3RlXCI6IGJhZGdlLnRleHRDb250ZW50ID0gXCJOb3RlXCI7IGJyZWFrO1xuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiVGFza1wiOyBicmVhaztcbiAgICAgIGNhc2UgXCJxdWljay10YXNrXCI6IGJhZGdlLnRleHRDb250ZW50ID0gXCJRdWlja1wiOyBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBBY3Rpdml0eSBsaW5lOiBlbW9qaSArIG5hbWVcbiAgY29uc3QgYWN0TGluZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYWN0aXZpdHlcIiB9KTtcbiAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1lbW9qaVwiLCB0ZXh0OiBlbnRyeS5lbW9qaSB9KTtcbiAgY29uc3QgbmFtZUVsID0gYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLW5hbWVcIixcbiAgICB0ZXh0OiBlbnRyeS5hY3Rpdml0eU5hbWUsXG4gIH0pO1xuXG4gIC8vIFN0cmlrZXRocm91Z2ggZm9yIGRvbmUvc2tpcHBlZFxuICBpZiAoaXNEb25lIHx8IGlzU2tpcHBlZCkge1xuICAgIG5hbWVFbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgbmFtZUVsLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xuICB9XG5cbiAgLy8gU3RhdHVzIGluZGljYXRvclxuICBpZiAoaXNEb25lKSB7XG4gICAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1jaGVja1wiLCB0ZXh0OiBcIlxcdTI3MTNcIiB9KTtcbiAgfSBlbHNlIGlmIChpc1NraXBwZWQpIHtcbiAgICBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLXNraXAtbWFya1wiLCB0ZXh0OiBcIlxcdTIwMTNcIiB9KTtcbiAgfVxuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGlmICghaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1hY3Rpb25zXCIgfSk7XG5cbiAgICBpZiAoaXNDYWxlbmRhcikge1xuICAgICAgLy8gQ2FsZW5kYXIgdGFza3M6IERvbmUgKyBQb3N0cG9uZVxuICAgICAgY29uc3QgZG9uZUJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tYWNjZXB0XCIsXG4gICAgICAgIHRleHQ6IFwiRG9uZVwiLFxuICAgICAgfSk7XG4gICAgICBkb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25DYWxlbmRhckRvbmU/LihlbnRyeSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcG9zdHBvbmVCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLXBvc3Rwb25lXCIsXG4gICAgICAgIHRleHQ6IFwiXFx1MjNFOVwiLFxuICAgICAgICBhdHRyOiB7IHRpdGxlOiBcIlBvc3Rwb25lIHRvIHRvbW9ycm93XCIgfSxcbiAgICAgIH0pO1xuICAgICAgcG9zdHBvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vbkNhbGVuZGFyUG9zdHBvbmU/LihlbnRyeSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWN0aXZpdHkgZW50cmllczogQmVnaW4vRG9uZSArIFNraXBcbiAgICAgIGNvbnN0IGFjY2VwdEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tYWNjZXB0XCIsXG4gICAgICAgIHRleHQ6IGlzQ3VycmVudCA/IFwiQmVnaW5cIiA6IFwiRG9uZVwiLFxuICAgICAgfSk7XG4gICAgICBhY2NlcHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vbkFjY2VwdChlbnRyeS5hY3Rpdml0eUlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBza2lwQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1za2lwXCIsXG4gICAgICAgIHRleHQ6IFwiU2tpcFwiLFxuICAgICAgfSk7XG4gICAgICBza2lwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25Ta2lwKGVudHJ5LmFjdGl2aXR5SWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VycmVudCB0aW1lIGluZGljYXRvclxuICBpZiAoaXNDdXJyZW50ICYmICFpc0RvbmUgJiYgIWlzU2tpcHBlZCkge1xuICAgIGNvbnN0IGluZGljYXRvciA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1ub3dcIiB9KTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IChjdXJyZW50SG91ciAtIGVudHJ5LnN0YXJ0SG91cikgLyAoZW50cnkuZW5kSG91ciAtIGVudHJ5LnN0YXJ0SG91cik7XG4gICAgaW5kaWNhdG9yLnN0eWxlLnRvcCA9IGAke01hdGgubWluKDEwMCwgTWF0aC5tYXgoMCwgcHJvZ3Jlc3MgKiAxMDApKX0lYDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUaW1lbGluZUZvb3RlcihcbiAgY2FyZDogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGN1cnJlbnRIb3VyOiBudW1iZXIsXG4gIG9uQ3JlYXRlRXZlbnQ/OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3QgZW5kT2ZEYXkgPSBzZXR0aW5ncy5kZXZDb25maWcuZXZlbmluZ0VuZDtcbiAgY29uc3QgcmVtYWluaW5nID0gTWF0aC5tYXgoMCwgZW5kT2ZEYXkgLSBjdXJyZW50SG91cik7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihyZW1haW5pbmcpO1xuICBjb25zdCBtaW5zID0gTWF0aC5yb3VuZCgocmVtYWluaW5nIC0gaG91cnMpICogNjApO1xuXG4gIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGl2aWRlclwiIH0pO1xuXG4gIGNvbnN0IGZvb3RlciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtZm9vdGVyXCIgfSk7XG4gIGZvb3Rlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtZm9vdGVyLXRleHRcIixcbiAgICB0ZXh0OiBgRW5kIG9mIGRheTogJHtob3Vyc31oICR7bWluc31tIHJlbWFpbmluZ2AsXG4gIH0pO1xuXG4gIGlmIChvbkNyZWF0ZUV2ZW50KSB7XG4gICAgY29uc3QgYnRuID0gZm9vdGVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1jcmVhdGVcIixcbiAgICAgIHRleHQ6IFwiKyBDcmVhdGUgZXZlbnRcIixcbiAgICB9KTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG9uQ3JlYXRlRXZlbnQoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cihoOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoaCk7XG4gIGNvbnN0IG1pbnMgPSBNYXRoLnJvdW5kKChoIC0gaG91cnMpICogNjApO1xuICBjb25zdCBwZXJpb2QgPSBob3VycyA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgY29uc3QgZGlzcGxheUhvdXIgPSBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzID09PSAwID8gMTIgOiBob3VycztcbiAgaWYgKG1pbnMgPT09IDApIHJldHVybiBgJHtkaXNwbGF5SG91cn0ke3BlcmlvZH1gO1xuICByZXR1cm4gYCR7ZGlzcGxheUhvdXJ9OiR7U3RyaW5nKG1pbnMpLnBhZFN0YXJ0KDIsIFwiMFwiKX0ke3BlcmlvZH1gO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgU3RyZW5ndGggSGVhdG1hcCBDb21wb25lbnRcbi8vIEludGVyYWN0aXZlIG11c2NsZSBmaWd1cmUgc2hvd2luZyB3b3Jrb3V0IGludGVuc2l0eSBwZXIgbXVzY2xlXG4vLyBDbGlja2FibGUgbXVzY2xlcyBvcGVuIHByb2dyZXNzIGdyYXBoc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ29tcGxldGlvbk1hcCwgR2VuZGVyIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgdHlwZSB7IE11c2NsZUdyb3VwSWQgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBNVVNDTEVfR1JPVVBfTEFCRUxTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG4vLyAtLS0gTXVzY2xlIHJlZ2lvbiBoaXQtYm94ZXMgKHBlcmNlbnRhZ2UtYmFzZWQgZm9yIGZyb250L2JhY2sgdmlld3MpIC0tLVxuLy8gRWFjaCByZWdpb246IFt4JSwgeSUsIHdpZHRoJSwgaGVpZ2h0JV0gcmVsYXRpdmUgdG8gZmlndXJlIGJvdW5kaW5nIGJveFxuXG5pbnRlcmZhY2UgTXVzY2xlUmVnaW9uIHtcbiAgaWQ6IE11c2NsZUdyb3VwSWQ7XG4gIGZyb250PzogeyB4OiBudW1iZXI7IHk6IG51bWJlcjsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcbiAgYmFjaz86IHsgeDogbnVtYmVyOyB5OiBudW1iZXI7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG59XG5cbmNvbnN0IE1VU0NMRV9SRUdJT05TOiBNdXNjbGVSZWdpb25bXSA9IFtcbiAgLy8gSGVhZC9uZWNrIGFyZWFcbiAgeyBpZDogXCJuZWNrXCIsICAgICAgIGZyb250OiB7IHg6IDQwLCB5OiA4LCB3OiAyMCwgaDogNSB9IH0sXG4gIHsgaWQ6IFwidHJhcHNcIiwgICAgICBiYWNrOiAgeyB4OiAzMCwgeTogMTEsIHc6IDQwLCBoOiA3IH0gfSxcbiAgLy8gVXBwZXIgYm9keVxuICB7IGlkOiBcInNob3VsZGVyc1wiLCAgZnJvbnQ6IHsgeDogMTgsIHk6IDE0LCB3OiAxNCwgaDogOCB9LCAgIGJhY2s6IHsgeDogMTgsIHk6IDE0LCB3OiAxNCwgaDogOCB9IH0sXG4gIHsgaWQ6IFwiY2hlc3RcIiwgICAgICBmcm9udDogeyB4OiAzMCwgeTogMTYsIHc6IDQwLCBoOiAxMCB9IH0sXG4gIHsgaWQ6IFwibGF0c1wiLCAgICAgICBiYWNrOiAgeyB4OiAyNCwgeTogMTksIHc6IDUyLCBoOiAxMiB9IH0sXG4gIHsgaWQ6IFwiYmFja1wiLCAgICAgICBiYWNrOiAgeyB4OiAzMiwgeTogMzIsIHc6IDM2LCBoOiAxMCB9IH0sXG4gIC8vIEFybXNcbiAgeyBpZDogXCJiaWNlcHNcIiwgICAgIGZyb250OiB7IHg6IDE0LCB5OiAyMywgdzogMTIsIGg6IDEyIH0gfSxcbiAgeyBpZDogXCJ0cmljZXBzXCIsICAgIGJhY2s6ICB7IHg6IDE0LCB5OiAyMywgdzogMTIsIGg6IDEyIH0gfSxcbiAgeyBpZDogXCJmb3JlYXJtc1wiLCAgIGZyb250OiB7IHg6IDEwLCB5OiAzNiwgdzogMTIsIGg6IDEyIH0sICBiYWNrOiB7IHg6IDEwLCB5OiAzNiwgdzogMTIsIGg6IDEyIH0gfSxcbiAgLy8gQ29yZVxuICB7IGlkOiBcImFic1wiLCAgICAgICAgZnJvbnQ6IHsgeDogMzUsIHk6IDI3LCB3OiAzMCwgaDogMTYgfSB9LFxuICB7IGlkOiBcIm9ibGlxdWVzXCIsICAgZnJvbnQ6IHsgeDogMjQsIHk6IDMwLCB3OiAxMCwgaDogMTIgfSB9LFxuICB7IGlkOiBcImdsdXRlc1wiLCAgICAgYmFjazogIHsgeDogMzAsIHk6IDQzLCB3OiA0MCwgaDogMTAgfSB9LFxuICAvLyBMZWdzXG4gIHsgaWQ6IFwicXVhZHNcIiwgICAgICBmcm9udDogeyB4OiAyNSwgeTogNDgsIHc6IDUwLCBoOiAxOCB9IH0sXG4gIHsgaWQ6IFwiaGFtc3RyaW5nc1wiLCBiYWNrOiAgeyB4OiAyNSwgeTogNTQsIHc6IDUwLCBoOiAxNiB9IH0sXG4gIHsgaWQ6IFwiY2FsdmVzXCIsICAgICBmcm9udDogeyB4OiAyOCwgeTogNzIsIHc6IDQ0LCBoOiAxNCB9LCAgYmFjazogeyB4OiAyOCwgeTogNzIsIHc6IDQ0LCBoOiAxNCB9IH0sXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIEhlYXRtYXBDYWxsYmFja3Mge1xuICBvbk11c2NsZUNsaWNrOiAobXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQpID0+IHZvaWQ7XG4gIG9uUHJvZ3Jlc3NDbGljazogKCkgPT4gdm9pZDtcbiAgb25TdGFydFdvcmtvdXQ6ICgpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTdHJlbmd0aEhlYXRtYXAoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXAsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBjYWxsYmFja3M6IEhlYXRtYXBDYWxsYmFja3MsXG4gIGFwcD86IEFwcFxuKTogdm9pZCB7XG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVhdG1hcC1zZWN0aW9uXCIgfSk7XG4gIHNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEZpZ3VyZSBjb250YWluZXJcbiAgY29uc3QgZ2VuZGVyID0gc2V0dGluZ3MucGVyc29uYWxTdGF0cy5nZW5kZXI7XG4gIGNvbnN0IGZpZ3VyZVdyYXAgPSBzZWN0aW9uLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlYXRtYXAtZmlndXJlc1wiIH0pO1xuXG4gIC8vIEdhdGhlciBtdXNjbGUgaW50ZW5zaXR5IGRhdGEgZnJvbSB3b3Jrb3V0IGNvbXBsZXRpb25zXG4gIGNvbnN0IG11c2NsZURhdGEgPSBnYXRoZXJNdXNjbGVJbnRlbnNpdHkoZW5naW5lLCBjb21wbGV0aW9uRGF0YSwgc2V0dGluZ3MpO1xuXG4gIC8vIFRyeSB0byBsb2FkIGFjdHVhbCBTVkcgZmlsZSwgdGhlbiByZW5kZXIgZmlndXJlXG4gIGNvbnN0IHN2Z0ZpbGVOYW1lID0gZ2VuZGVyID09PSBcImZlbWFsZVwiID8gXCJNdXNjbGUgV29tYW4uc3ZnXCIgOiBcIk11c2NsZSBNYW4uc3ZnXCI7XG4gIGlmIChhcHApIHtcbiAgICBsb2FkU3ZnRnJvbVZhdWx0KGFwcCwgc3ZnRmlsZU5hbWUpLnRoZW4oKHN2Z0NvbnRlbnQpID0+IHtcbiAgICAgIGlmIChzdmdDb250ZW50KSB7XG4gICAgICAgIHJlbmRlclN2Z0ZpZ3VyZVdpdGhPdmVybGF5KGZpZ3VyZVdyYXAsIHN2Z0NvbnRlbnQsIG11c2NsZURhdGEsIGNhbGxiYWNrcy5vbk11c2NsZUNsaWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIHByb2dyYW1tYXRpY1xuICAgICAgICByZW5kZXJNdXNjbGVGaWd1cmUoZmlndXJlV3JhcCwgXCJmcm9udFwiLCBnZW5kZXIsIG11c2NsZURhdGEsIGNhbGxiYWNrcy5vbk11c2NsZUNsaWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICByZW5kZXJNdXNjbGVGaWd1cmUoZmlndXJlV3JhcCwgXCJmcm9udFwiLCBnZW5kZXIsIG11c2NsZURhdGEsIGNhbGxiYWNrcy5vbk11c2NsZUNsaWNrKTtcbiAgfVxuXG4gIC8vIEJ1dHRvbnMgYmVsb3cgdGhlIGZpZ3VyZVxuICBjb25zdCBhY3Rpb25zID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBwcm9ncmVzc0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1oZWF0bWFwLWJ0blwiLFxuICAgIHRleHQ6IFwiUHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjYWxsYmFja3Mub25Qcm9ncmVzc0NsaWNrKCkpO1xuXG4gIGNvbnN0IHdvcmtvdXRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLWhlYXRtYXAtYnRuXCIsXG4gICAgdGV4dDogXCJTdGFydCBOZXcgV29ya291dFwiLFxuICB9KTtcbiAgd29ya291dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2FsbGJhY2tzLm9uU3RhcnRXb3Jrb3V0KCkpO1xufVxuXG4vLyAtLS0gTG9hZCBhY3R1YWwgU1ZHIGZyb20gdmF1bHQgLS0tXG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRTdmdGcm9tVmF1bHQoYXBwOiBBcHAsIGZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChmaWxlTmFtZSk7XG4gICAgcmV0dXJuIGNvbnRlbnQgfHwgbnVsbDtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gLS0tIFJlbmRlciBhY3R1YWwgU1ZHIHdpdGggb3ZlcmxheSBob3RzcG90cyAtLS1cblxuZnVuY3Rpb24gcmVuZGVyU3ZnRmlndXJlV2l0aE92ZXJsYXkoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIHN2Z0NvbnRlbnQ6IHN0cmluZyxcbiAgbXVzY2xlRGF0YTogTWFwPE11c2NsZUdyb3VwSWQsIG51bWJlcj4sXG4gIG9uTXVzY2xlQ2xpY2s6IChpZDogTXVzY2xlR3JvdXBJZCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IGZpZ3VyZSA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZWF0bWFwLWZpZ3VyZVwiIH0pO1xuICBmaWd1cmUuc3R5bGUubWF4V2lkdGggPSBcIjI0MHB4XCI7XG4gIGZpZ3VyZS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgZmlndXJlLnN0eWxlLm1hcmdpbiA9IFwiMCBhdXRvXCI7XG5cbiAgLy8gSW5zZXJ0IGFjdHVhbCBTVkcgKGRpbW1lZCwgZGVzYXR1cmF0ZWQpXG4gIGNvbnN0IHN2Z0hvbGRlciA9IGZpZ3VyZS5jcmVhdGVEaXYoKTtcbiAgc3ZnSG9sZGVyLnN0eWxlLmNzc1RleHQgPSBcIndpZHRoOjEwMCU7b3BhY2l0eTowLjg7ZmlsdGVyOnNhdHVyYXRlKDAuMikgYnJpZ2h0bmVzcygwLjQ1KTtcIjtcbiAgc3ZnSG9sZGVyLmlubmVySFRNTCA9IHN2Z0NvbnRlbnQ7XG4gIGNvbnN0IHN2Z0VsID0gc3ZnSG9sZGVyLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG4gIGlmIChzdmdFbCkge1xuICAgIHN2Z0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgc3ZnRWwuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgc3ZnRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIC8vIE92ZXJsYXkgZm9yIGhvdHNwb3RzXG4gIGNvbnN0IG92ZXJsYXkgPSBmaWd1cmUuY3JlYXRlRGl2KCk7XG4gIG92ZXJsYXkuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7XCI7XG5cbiAgLy8gQ3JlYXRlIGhvdHNwb3RzIGJhc2VkIG9uIG11c2NsZSByZWdpb25zXG4gIGZvciAoY29uc3QgcmVnaW9uIG9mIE1VU0NMRV9SRUdJT05TKSB7XG4gICAgY29uc3QgYm91bmRzID0gcmVnaW9uLmZyb250O1xuICAgIGlmICghYm91bmRzKSBjb250aW51ZTtcblxuICAgIGNvbnN0IGludGVuc2l0eSA9IG11c2NsZURhdGEuZ2V0KHJlZ2lvbi5pZCkgPz8gMDtcbiAgICBjb25zdCBjb2xvciA9IGdldEludGVuc2l0eUNvbG9yKGludGVuc2l0eSk7XG5cbiAgICBjb25zdCBocyA9IG92ZXJsYXkuY3JlYXRlRGl2KCk7XG4gICAgaHMuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjphYnNvbHV0ZTt0b3A6JHtib3VuZHMueX0lO2xlZnQ6JHtib3VuZHMueH0lO3dpZHRoOiR7Ym91bmRzLnd9JTtoZWlnaHQ6JHtib3VuZHMuaH0lO2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246YmFja2dyb3VuZCAwLjE1cztiYWNrZ3JvdW5kOiR7aW50ZW5zaXR5ID4gMCA/IGNvbG9yICsgXCIzMFwiIDogXCJ0cmFuc3BhcmVudFwifTtib3JkZXI6MXB4IHNvbGlkICR7aW50ZW5zaXR5ID4gMCA/IGNvbG9yICsgXCIyMFwiIDogXCJ0cmFuc3BhcmVudFwifTtgO1xuICAgIGhzLnRpdGxlID0gTVVTQ0xFX0dST1VQX0xBQkVMU1tyZWdpb24uaWRdICsgKGludGVuc2l0eSA+IDAgPyBgIFx1MjAxNCAke01hdGgucm91bmQoaW50ZW5zaXR5ICogMTAwKX0lYCA6IFwiXCIpO1xuXG4gICAgaHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgKCkgPT4geyBocy5zdHlsZS5iYWNrZ3JvdW5kID0gKGludGVuc2l0eSA+IDAgPyBjb2xvciA6IFwiIzlhOGM3YVwiKSArIFwiNTBcIjsgfSk7XG4gICAgaHMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4geyBocy5zdHlsZS5iYWNrZ3JvdW5kID0gaW50ZW5zaXR5ID4gMCA/IGNvbG9yICsgXCIzMFwiIDogXCJ0cmFuc3BhcmVudFwiOyB9KTtcbiAgICBocy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgb25NdXNjbGVDbGljayhyZWdpb24uaWQpOyB9KTtcblxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoaHMpO1xuXG4gICAgLy8gTWlycm9yIGZvciBzeW1tZXRyaWMgbXVzY2xlc1xuICAgIGlmIChpc1N5bW1ldHJpY011c2NsZShyZWdpb24uaWQpICYmIGJvdW5kcy54IDwgNTApIHtcbiAgICAgIGNvbnN0IG1pcnJvckxlZnQgPSAxMDAgLSBib3VuZHMueCAtIGJvdW5kcy53O1xuICAgICAgY29uc3QgbWlycm9yID0gb3ZlcmxheS5jcmVhdGVEaXYoKTtcbiAgICAgIG1pcnJvci5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOmFic29sdXRlO3RvcDoke2JvdW5kcy55fSU7bGVmdDoke21pcnJvckxlZnR9JTt3aWR0aDoke2JvdW5kcy53fSU7aGVpZ2h0OiR7Ym91bmRzLmh9JTtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4xNXM7YmFja2dyb3VuZDoke2ludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMzBcIiA6IFwidHJhbnNwYXJlbnRcIn07Ym9yZGVyOjFweCBzb2xpZCAke2ludGVuc2l0eSA+IDAgPyBjb2xvciArIFwiMjBcIiA6IFwidHJhbnNwYXJlbnRcIn07YDtcbiAgICAgIG1pcnJvci50aXRsZSA9IGhzLnRpdGxlO1xuICAgICAgbWlycm9yLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHsgbWlycm9yLnN0eWxlLmJhY2tncm91bmQgPSAoaW50ZW5zaXR5ID4gMCA/IGNvbG9yIDogXCIjOWE4YzdhXCIpICsgXCI1MFwiOyB9KTtcbiAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7IG1pcnJvci5zdHlsZS5iYWNrZ3JvdW5kID0gaW50ZW5zaXR5ID4gMCA/IGNvbG9yICsgXCIzMFwiIDogXCJ0cmFuc3BhcmVudFwiOyB9KTtcbiAgICAgIG1pcnJvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgb25NdXNjbGVDbGljayhyZWdpb24uaWQpOyB9KTtcbiAgICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQobWlycm9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gLS0tIEZpZ3VyZSBSZW5kZXJpbmcgLS0tXG5cbmZ1bmN0aW9uIHJlbmRlck11c2NsZUZpZ3VyZShcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgdmlldzogXCJmcm9udFwiIHwgXCJiYWNrXCIsXG4gIGdlbmRlcjogR2VuZGVyLFxuICBtdXNjbGVEYXRhOiBNYXA8TXVzY2xlR3JvdXBJZCwgbnVtYmVyPixcbiAgb25NdXNjbGVDbGljazogKGlkOiBNdXNjbGVHcm91cElkKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3QgZmlndXJlID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlYXRtYXAtZmlndXJlXCIgfSk7XG5cbiAgLy8gTGFiZWxcbiAgZmlndXJlLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZWF0bWFwLXZpZXctbGFiZWxcIixcbiAgICB0ZXh0OiB2aWV3ID09PSBcImZyb250XCIgPyBcIkZyb250XCIgOiBcIkJhY2tcIixcbiAgfSk7XG5cbiAgLy8gU1ZHIGNvbnRhaW5lclxuICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjAwIDQwMFwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1oZWF0bWFwLXN2Z1wiKTtcblxuICAvLyBEcmF3IGJvZHkgc2lsaG91ZXR0ZVxuICBkcmF3Qm9keVNpbGhvdWV0dGUoc3ZnLCBzdmdOUywgZ2VuZGVyLCB2aWV3KTtcblxuICAvLyBEcmF3IG11c2NsZSByZWdpb25zIGFzIGNvbG9yZWQgb3ZlcmxheXNcbiAgZm9yIChjb25zdCByZWdpb24gb2YgTVVTQ0xFX1JFR0lPTlMpIHtcbiAgICBjb25zdCBib3VuZHMgPSB2aWV3ID09PSBcImZyb250XCIgPyByZWdpb24uZnJvbnQgOiByZWdpb24uYmFjaztcbiAgICBpZiAoIWJvdW5kcykgY29udGludWU7XG5cbiAgICBjb25zdCBpbnRlbnNpdHkgPSBtdXNjbGVEYXRhLmdldChyZWdpb24uaWQpID8/IDA7XG5cbiAgICAvLyBNYXAgcGVyY2VudGFnZSBjb29yZHMgdG8gU1ZHIHZpZXdCb3hcbiAgICBjb25zdCB4ID0gYm91bmRzLnggKiAyO1xuICAgIGNvbnN0IHkgPSBib3VuZHMueSAqIDQ7XG4gICAgY29uc3QgdyA9IGJvdW5kcy53ICogMjtcbiAgICBjb25zdCBoID0gYm91bmRzLmggKiA0O1xuXG4gICAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJyZWN0XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoeSkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHcpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoaCkpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwicnhcIiwgXCI2XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwicnlcIiwgXCI2XCIpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBnZXRJbnRlbnNpdHlDb2xvcihpbnRlbnNpdHkpKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgaW50ZW5zaXR5ID4gMCA/IFwiMC43XCIgOiBcIjAuMTVcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1tdXNjbGVcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW11c2NsZVwiLCByZWdpb24uaWQpO1xuXG4gICAgLy8gVG9vbHRpcCArIGNsaWNrXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGl0bGVcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHtNVVNDTEVfR1JPVVBfTEFCRUxTW3JlZ2lvbi5pZF19JHtpbnRlbnNpdHkgPiAwID8gYCBcdTIwMTQgJHtNYXRoLnJvdW5kKGludGVuc2l0eSAqIDEwMCl9JWAgOiBcIlwifWA7XG4gICAgcmVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICByZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIG9uTXVzY2xlQ2xpY2socmVnaW9uLmlkKTtcbiAgICB9KTtcblxuICAgIHN2Zy5hcHBlbmRDaGlsZChyZWN0KTtcblxuICAgIC8vIEFsc28gbWlycm9yIGZvciByaWdodCBzaWRlIChzaG91bGRlcnMsIGJpY2VwcywgdHJpY2VwcywgZm9yZWFybXMsIHF1YWRzLCBoYW1zdHJpbmdzLCBjYWx2ZXMpXG4gICAgaWYgKGlzU3ltbWV0cmljTXVzY2xlKHJlZ2lvbi5pZCkgJiYgYm91bmRzLnggPCA1MCkge1xuICAgICAgY29uc3QgbWlycm9yWCA9IDIwMCAtIHggLSB3O1xuICAgICAgY29uc3QgbWlycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInJlY3RcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcobWlycm9yWCkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodykpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoaCkpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNlwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJyeVwiLCBcIjZcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBnZXRJbnRlbnNpdHlDb2xvcihpbnRlbnNpdHkpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIGludGVuc2l0eSA+IDAgPyBcIjAuN1wiIDogXCIwLjE1XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1oZWF0bWFwLW11c2NsZVwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLW11c2NsZVwiLCByZWdpb24uaWQpO1xuXG4gICAgICBjb25zdCBtaXJyb3JUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJ0aXRsZVwiKTtcbiAgICAgIG1pcnJvclRpdGxlLnRleHRDb250ZW50ID0gYCR7TVVTQ0xFX0dST1VQX0xBQkVMU1tyZWdpb24uaWRdfSR7aW50ZW5zaXR5ID4gMCA/IGAgXHUyMDE0ICR7TWF0aC5yb3VuZChpbnRlbnNpdHkgKiAxMDApfSVgIDogXCJcIn1gO1xuICAgICAgbWlycm9yLmFwcGVuZENoaWxkKG1pcnJvclRpdGxlKTtcblxuICAgICAgbWlycm9yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBvbk11c2NsZUNsaWNrKHJlZ2lvbi5pZCk7XG4gICAgICB9KTtcblxuICAgICAgc3ZnLmFwcGVuZENoaWxkKG1pcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZmlndXJlLmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbmZ1bmN0aW9uIGlzU3ltbWV0cmljTXVzY2xlKGlkOiBNdXNjbGVHcm91cElkKTogYm9vbGVhbiB7XG4gIHJldHVybiBbXCJzaG91bGRlcnNcIiwgXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIiwgXCJxdWFkc1wiLCBcImhhbXN0cmluZ3NcIiwgXCJjYWx2ZXNcIiwgXCJvYmxpcXVlc1wiXS5pbmNsdWRlcyhpZCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdCb2R5U2lsaG91ZXR0ZShzdmc6IFNWR1NWR0VsZW1lbnQsIG5zOiBzdHJpbmcsIGdlbmRlcjogR2VuZGVyLCB2aWV3OiBcImZyb250XCIgfCBcImJhY2tcIik6IHZvaWQge1xuICAvLyBTaW1wbGlmaWVkIGh1bWFuIHNpbGhvdWV0dGUgYXMgYSBwYXRoXG4gIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicGF0aFwiKTtcblxuICAvLyBCYXNlIHNpbGhvdWV0dGUgXHUyMDE0IHNsaWdodGx5IGRpZmZlcmVudCBwcm9wb3J0aW9ucyBieSBnZW5kZXJcbiAgY29uc3QgaXNGZW1hbGUgPSBnZW5kZXIgPT09IFwiZmVtYWxlXCI7XG4gIGNvbnN0IHNob3VsZGVyVyA9IGlzRmVtYWxlID8gNjIgOiA2ODtcbiAgY29uc3QgaGlwVyA9IGlzRmVtYWxlID8gNTggOiA0ODtcbiAgY29uc3Qgd2Fpc3RXID0gaXNGZW1hbGUgPyAzOCA6IDQyO1xuXG4gIC8vIEJ1aWxkIHNpbGhvdWV0dGUgcGF0aFxuICBjb25zdCBkID0gW1xuICAgIC8vIEhlYWRcbiAgICBgTSAxMDAgMTBgLFxuICAgIGBhIDE2IDE4IDAgMSAxIDAuMDEgMGAsXG4gICAgLy8gTmVja1xuICAgIGBNIDkyIDQ0IEwgOTIgNTJgLFxuICAgIGBNIDEwOCA0NCBMIDEwOCA1MmAsXG4gICAgLy8gU2hvdWxkZXJzXG4gICAgYE0gOTIgNTIgTCAkezEwMCAtIHNob3VsZGVyV30gNThgLFxuICAgIGBNIDEwOCA1MiBMICR7MTAwICsgc2hvdWxkZXJXfSA1OGAsXG4gICAgLy8gVG9yc28gbGVmdFxuICAgIGBNICR7MTAwIC0gc2hvdWxkZXJXfSA1OCBMICR7MTAwIC0gc2hvdWxkZXJXICsgNH0gMTAwYCxcbiAgICBgTCAkezEwMCAtIHdhaXN0V30gMTQwYCxcbiAgICBgTCAkezEwMCAtIGhpcFd9IDE4MGAsXG4gICAgLy8gVG9yc28gcmlnaHRcbiAgICBgTSAkezEwMCArIHNob3VsZGVyV30gNTggTCAkezEwMCArIHNob3VsZGVyVyAtIDR9IDEwMGAsXG4gICAgYEwgJHsxMDAgKyB3YWlzdFd9IDE0MGAsXG4gICAgYEwgJHsxMDAgKyBoaXBXfSAxODBgLFxuICAgIC8vIEFybXMgbGVmdFxuICAgIGBNICR7MTAwIC0gc2hvdWxkZXJXfSA1OCBMICR7MTAwIC0gc2hvdWxkZXJXIC0gMTJ9IDExMGAsXG4gICAgYEwgJHsxMDAgLSBzaG91bGRlclcgLSAxNn0gMTcwYCxcbiAgICBgTSAkezEwMCAtIHNob3VsZGVyVyAtIDZ9IDU4IEwgJHsxMDAgLSBzaG91bGRlclcgLSAxOH0gMTEwYCxcbiAgICBgTCAkezEwMCAtIHNob3VsZGVyVyAtIDIyfSAxNzBgLFxuICAgIC8vIEFybXMgcmlnaHRcbiAgICBgTSAkezEwMCArIHNob3VsZGVyV30gNTggTCAkezEwMCArIHNob3VsZGVyVyArIDEyfSAxMTBgLFxuICAgIGBMICR7MTAwICsgc2hvdWxkZXJXICsgMTZ9IDE3MGAsXG4gICAgYE0gJHsxMDAgKyBzaG91bGRlclcgKyA2fSA1OCBMICR7MTAwICsgc2hvdWxkZXJXICsgMTh9IDExMGAsXG4gICAgYEwgJHsxMDAgKyBzaG91bGRlclcgKyAyMn0gMTcwYCxcbiAgICAvLyBMZWdzIGxlZnRcbiAgICBgTSAkezEwMCAtIGhpcFd9IDE4MCBMICR7MTAwIC0gaGlwVyArIDZ9IDI4MGAsXG4gICAgYEwgJHsxMDAgLSBoaXBXICsgMTB9IDM2MGAsXG4gICAgYE0gJHsxMDAgLSA2fSAxODAgTCAkezEwMCAtIDEyfSAyODBgLFxuICAgIGBMICR7MTAwIC0gMTZ9IDM2MGAsXG4gICAgLy8gTGVncyByaWdodFxuICAgIGBNICR7MTAwICsgaGlwV30gMTgwIEwgJHsxMDAgKyBoaXBXIC0gNn0gMjgwYCxcbiAgICBgTCAkezEwMCArIGhpcFcgLSAxMH0gMzYwYCxcbiAgICBgTSAkezEwMCArIDZ9IDE4MCBMICR7MTAwICsgMTJ9IDI4MGAsXG4gICAgYEwgJHsxMDAgKyAxNn0gMzYwYCxcbiAgXS5qb2luKFwiIFwiKTtcblxuICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgZCk7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjEyKVwiKTtcbiAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgXCIxLjVcIik7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xufVxuXG4vLyAtLS0gTXVzY2xlIEludGVuc2l0eSBDYWxjdWxhdGlvbiAtLS1cblxuZnVuY3Rpb24gZ2F0aGVyTXVzY2xlSW50ZW5zaXR5KFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzXG4pOiBNYXA8TXVzY2xlR3JvdXBJZCwgbnVtYmVyPiB7XG4gIGNvbnN0IGRhdGEgPSBuZXcgTWFwPE11c2NsZUdyb3VwSWQsIG51bWJlcj4oKTtcblxuICAvLyBQYXJzZSB3b3Jrb3V0IG5vdGVzIGZvciBtdXNjbGUgZ3JvdXAgbWVudGlvbnNcbiAgLy8gTG9vayBhdCB0aGUgbGFzdCAzMCBkYXlzIG9mIHdvcmtvdXQgY29tcGxldGlvbnNcbiAgY29uc3Qgd29ya291dEFjdGl2aXR5ID0gc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBcIndvcmtvdXRcIik7XG4gIGlmICghd29ya291dEFjdGl2aXR5KSByZXR1cm4gZGF0YTtcblxuICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW3dvcmtvdXRBY3Rpdml0eS5pZF0gPz8gW107XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRoaXJ0eURheXNBZ28gPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcblxuICAvLyBDb3VudCBjb21wbGV0aW9ucyBpbiB0aGUgbGFzdCAzMCBkYXlzIGFzIGEgcHJveHkgZm9yIG92ZXJhbGwgYWN0aXZpdHlcbiAgY29uc3QgcmVjZW50Q29tcGxldGlvbnMgPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgcmV0dXJuIGQgPj0gdGhpcnR5RGF5c0FnbztcbiAgfSkubGVuZ3RoO1xuXG4gIGlmIChyZWNlbnRDb21wbGV0aW9ucyA9PT0gMCkgcmV0dXJuIGRhdGE7XG5cbiAgLy8gU2luY2Ugd2UgY2FuJ3QgcGFyc2Ugd2hpY2ggbXVzY2xlcyB3ZXJlIHRyYWluZWQgZnJvbSBmcm9udG1hdHRlciBhbG9uZSxcbiAgLy8gdXNlIHdvcmtvdXQgZnJlcXVlbmN5IGFzIGEgdW5pZm9ybSBiYXNlIGludGVuc2l0eSBhbmQgZnJvbnRtYXR0ZXJcbiAgLy8gbXVzY2xlX2dyb3VwcyBmaWVsZCBpZiBhdmFpbGFibGVcbiAgY29uc3QgYmFzZUludGVuc2l0eSA9IE1hdGgubWluKDEsIHJlY2VudENvbXBsZXRpb25zIC8gMjApO1xuXG4gIC8vIFNldCBiYXNlIGZvciBhbGwgbXVzY2xlIGdyb3VwcyBwcm9wb3J0aW9uYWwgdG8gd29ya291dCBmcmVxdWVuY3lcbiAgY29uc3QgYWxsTXVzY2xlczogTXVzY2xlR3JvdXBJZFtdID0gW1xuICAgIFwiY2hlc3RcIiwgXCJiYWNrXCIsIFwic2hvdWxkZXJzXCIsIFwiYmljZXBzXCIsIFwidHJpY2Vwc1wiLCBcImZvcmVhcm1zXCIsXG4gICAgXCJhYnNcIiwgXCJvYmxpcXVlc1wiLCBcInF1YWRzXCIsIFwiaGFtc3RyaW5nc1wiLCBcImdsdXRlc1wiLCBcImNhbHZlc1wiLFxuICAgIFwidHJhcHNcIiwgXCJsYXRzXCIsIFwibmVja1wiLFxuICBdO1xuXG4gIGZvciAoY29uc3QgbSBvZiBhbGxNdXNjbGVzKSB7XG4gICAgZGF0YS5zZXQobSwgYmFzZUludGVuc2l0eSAqIDAuNSk7XG4gIH1cblxuICByZXR1cm4gZGF0YTtcbn1cblxuLy8gLS0tIENvbG9yIE1hcHBpbmcgLS0tXG5cbmZ1bmN0aW9uIGdldEludGVuc2l0eUNvbG9yKGludGVuc2l0eTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGludGVuc2l0eSA8PSAwKSByZXR1cm4gXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuMDYpXCI7XG4gIGlmIChpbnRlbnNpdHkgPCAwLjMpIHJldHVybiBcIiMyZDRhMWVcIjsgIC8vIGNvb2wgZ3JlZW5cbiAgaWYgKGludGVuc2l0eSA8IDAuNikgcmV0dXJuIFwiIzVhOGEyZVwiOyAgLy8gbWVkaXVtIGdyZWVuXG4gIGlmIChpbnRlbnNpdHkgPCAwLjgpIHJldHVybiBcIiNkNGE4NDNcIjsgIC8vIHdhcm0gZ29sZFxuICByZXR1cm4gXCIjZThjMzVhXCI7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyaWdodCBnb2xkXG59XG5cbi8vIC0tLSBNdXNjbGUgUHJvZ3Jlc3MgUG9wdXAgLS0tXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TXVzY2xlUHJvZ3Jlc3NQb3B1cChcbiAgbXVzY2xlSWQ6IE11c2NsZUdyb3VwSWQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGNvbXBsZXRpb25EYXRhOiBDb21wbGV0aW9uTWFwXG4pOiB2b2lkIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQgb2xlbi1wcm9ncmVzcy1zaGVldFwiIH0pO1xuICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICBjb25zdCBsYWJlbCA9IE1VU0NMRV9HUk9VUF9MQUJFTFNbbXVzY2xlSWRdO1xuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gTW9udGhseSBwcm9ncmVzcyBjaGFydCAoc2ltcGxlIGJhciBjaGFydClcbiAgY29uc3QgY2hhcnRDb250YWluZXIgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1jaGFydFwiIH0pO1xuICByZW5kZXJTaW1wbGVCYXJDaGFydChjaGFydENvbnRhaW5lciwgbXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcblxuICAvLyBUb2dnbGUgZm9yIHllYXJseSB2aWV3XG4gIGNvbnN0IHRvZ2dsZVJvdyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLXRvZ2dsZVwiIH0pO1xuICBjb25zdCBtb250aEJ0biA9IHRvZ2dsZVJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCIsXG4gICAgdGV4dDogXCJNb250aGx5XCIsXG4gIH0pO1xuICBjb25zdCB5ZWFyQnRuID0gdG9nZ2xlUm93LmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiLFxuICAgIHRleHQ6IFwiWWVhcmx5XCIsXG4gIH0pO1xuXG4gIG1vbnRoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhcnRDb250YWluZXIuZW1wdHkoKTtcbiAgICByZW5kZXJTaW1wbGVCYXJDaGFydChjaGFydENvbnRhaW5lciwgbXVzY2xlSWQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJtb250aFwiKTtcbiAgICBtb250aEJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gICAgeWVhckJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgfSk7XG5cbiAgeWVhckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYXJ0Q29udGFpbmVyLmVtcHR5KCk7XG4gICAgcmVuZGVyU2ltcGxlQmFyQ2hhcnQoY2hhcnRDb250YWluZXIsIG11c2NsZUlkLCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwieWVhclwiKTtcbiAgICB5ZWFyQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgICBtb250aEJ0bi5jbGFzc05hbWUgPSBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIjtcbiAgfSk7XG5cbiAgLy8gQ2xvc2Ugb24gb3ZlcmxheSBjbGlja1xuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VQb3B1cCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVBvcHVwKCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xufVxuXG4vLyAtLS0gT3ZlcmFsbCBQcm9ncmVzcyBQb3B1cCAtLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dPdmVyYWxsUHJvZ3Jlc3NQb3B1cChcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXBcbik6IHZvaWQge1xuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldCBvbGVuLXByb2dyZXNzLXNoZWV0XCIgfSk7XG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLCB0ZXh0OiBcIlN0cmVuZ3RoIFByb2dyZXNzXCIgfSk7XG5cbiAgLy8gVGFiIHRvZ2dsZVxuICBjb25zdCB0b2dnbGVSb3cgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1wcm9ncmVzcy10b2dnbGVcIiB9KTtcbiAgY29uc3QgbW9udGhCdG4gPSB0b2dnbGVSb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiLFxuICAgIHRleHQ6IFwiTW9udGhseVwiLFxuICB9KTtcbiAgY29uc3QgeWVhckJ0biA9IHRvZ2dsZVJvdy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXByb2dyZXNzLXRvZ2dsZS1idG5cIixcbiAgICB0ZXh0OiBcIlllYXJseVwiLFxuICB9KTtcblxuICAvLyBDaGFydCAxOiBPdmVyYWxsIHN0cmVuZ3RoIChhbGwgZXhlcmNpc2VzIGNvbWJpbmVkIGF2ZXJhZ2UpXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1wcm9ncmVzcy1zdWJ0aXRsZVwiLFxuICAgIHRleHQ6IFwiT3ZlcmFsbCBTdHJlbmd0aFwiLFxuICB9KTtcbiAgY29uc3Qgb3ZlcmFsbENoYXJ0ID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtY2hhcnRcIiB9KTtcbiAgcmVuZGVyT3ZlcmFsbFN0cmVuZ3RoQ2hhcnQob3ZlcmFsbENoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG5cbiAgLy8gQ2hhcnQgMjogUGVyLW11c2NsZSBicmVha2Rvd24gKG11bHRpLWxpbmUpXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1wcm9ncmVzcy1zdWJ0aXRsZVwiLFxuICAgIHRleHQ6IFwiQnkgTXVzY2xlIEdyb3VwXCIsXG4gIH0pO1xuICBjb25zdCBtdXNjbGVDaGFydCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWNoYXJ0XCIgfSk7XG4gIHJlbmRlck11c2NsZUJyZWFrZG93bkNoYXJ0KG11c2NsZUNoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG5cbiAgbW9udGhCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvdmVyYWxsQ2hhcnQuZW1wdHkoKTtcbiAgICBtdXNjbGVDaGFydC5lbXB0eSgpO1xuICAgIHJlbmRlck92ZXJhbGxTdHJlbmd0aENoYXJ0KG92ZXJhbGxDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcIm1vbnRoXCIpO1xuICAgIHJlbmRlck11c2NsZUJyZWFrZG93bkNoYXJ0KG11c2NsZUNoYXJ0LCBzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIFwibW9udGhcIik7XG4gICAgbW9udGhCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICAgIHllYXJCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi1wcm9ncmVzcy10b2dnbGUtYnRuXCI7XG4gIH0pO1xuXG4gIHllYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvdmVyYWxsQ2hhcnQuZW1wdHkoKTtcbiAgICBtdXNjbGVDaGFydC5lbXB0eSgpO1xuICAgIHJlbmRlck92ZXJhbGxTdHJlbmd0aENoYXJ0KG92ZXJhbGxDaGFydCwgc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBcInllYXJcIik7XG4gICAgcmVuZGVyTXVzY2xlQnJlYWtkb3duQ2hhcnQobXVzY2xlQ2hhcnQsIHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgXCJ5ZWFyXCIpO1xuICAgIHllYXJCdG4uY2xhc3NOYW1lID0gXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tcHJvZ3Jlc3MtdG9nZ2xlLWJ0blwiO1xuICB9KTtcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VQb3B1cCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVBvcHVwKCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xufVxuXG4vLyAtLS0gQ2hhcnQgUmVuZGVyaW5nIEhlbHBlcnMgLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclNpbXBsZUJhckNoYXJ0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBtdXNjbGVJZDogTXVzY2xlR3JvdXBJZCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXAsXG4gIHBlcmlvZDogXCJtb250aFwiIHwgXCJ5ZWFyXCJcbik6IHZvaWQge1xuICBjb25zdCB3b3Jrb3V0QWN0aXZpdHkgPSBzZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IFwid29ya291dFwiKTtcbiAgaWYgKCF3b3Jrb3V0QWN0aXZpdHkpIHtcbiAgICBjb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1lbXB0eVwiLCB0ZXh0OiBcIk5vIHdvcmtvdXQgZGF0YSBhdmFpbGFibGVcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW3dvcmtvdXRBY3Rpdml0eS5pZF0gPz8gW107XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgdmFsdWVzOiBudW1iZXJbXSA9IFtdO1xuXG4gIGlmIChwZXJpb2QgPT09IFwibW9udGhcIikge1xuICAgIC8vIExhc3QgMzAgZGF5cywgZ3JvdXBlZCBieSB3ZWVrXG4gICAgZm9yIChsZXQgdyA9IDM7IHcgPj0gMDsgdy0tKSB7XG4gICAgICBjb25zdCB3ZWVrRW5kID0gbmV3IERhdGUobm93LmdldFRpbWUoKSAtIHcgKiA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBuZXcgRGF0ZSh3ZWVrRW5kLmdldFRpbWUoKSAtIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgIGNvbnN0IGNvdW50ID0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgIHJldHVybiBkID49IHdlZWtTdGFydCAmJiBkIDwgd2Vla0VuZDtcbiAgICAgIH0pLmxlbmd0aDtcbiAgICAgIGxhYmVscy5wdXNoKGBXJHs0IC0gd31gKTtcbiAgICAgIHZhbHVlcy5wdXNoKGNvdW50KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gTGFzdCAxMiBtb250aHNcbiAgICBjb25zdCBtb250aE5hbWVzID0gW1wiSlwiLCBcIkZcIiwgXCJNXCIsIFwiQVwiLCBcIk1cIiwgXCJKXCIsIFwiSlwiLCBcIkFcIiwgXCJTXCIsIFwiT1wiLCBcIk5cIiwgXCJEXCJdO1xuICAgIGZvciAobGV0IG0gPSAxMTsgbSA+PSAwOyBtLS0pIHtcbiAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIG0sIDEpO1xuICAgICAgY29uc3QgbW9udGhFbmQgPSBuZXcgRGF0ZShtb250aERhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGhEYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcbiAgICAgIGNvbnN0IGNvdW50ID0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgIHJldHVybiBkID49IG1vbnRoRGF0ZSAmJiBkIDw9IG1vbnRoRW5kO1xuICAgICAgfSkubGVuZ3RoO1xuICAgICAgbGFiZWxzLnB1c2gobW9udGhOYW1lc1ttb250aERhdGUuZ2V0TW9udGgoKV0pO1xuICAgICAgdmFsdWVzLnB1c2goY291bnQpO1xuICAgIH1cbiAgfVxuXG4gIGRyYXdMaW5lQ2hhcnQoY29udGFpbmVyLCBsYWJlbHMsIHZhbHVlcywgXCIjZDRhODQzXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJPdmVyYWxsU3RyZW5ndGhDaGFydChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY29tcGxldGlvbkRhdGE6IENvbXBsZXRpb25NYXAsXG4gIHBlcmlvZDogXCJtb250aFwiIHwgXCJ5ZWFyXCJcbik6IHZvaWQge1xuICBjb25zdCBib2R5QWN0aXZpdGllcyA9IHNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQgJiYgYS5jYXRlZ29yeSA9PT0gXCJib2R5XCIpO1xuICBpZiAoYm9keUFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtZW1wdHlcIiwgdGV4dDogXCJObyBib2R5IGFjdGl2aXRpZXMgY29uZmlndXJlZFwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBbXTtcbiAgY29uc3QgdmFsdWVzOiBudW1iZXJbXSA9IFtdO1xuXG4gIGlmIChwZXJpb2QgPT09IFwibW9udGhcIikge1xuICAgIGZvciAobGV0IHcgPSAzOyB3ID49IDA7IHctLSkge1xuICAgICAgY29uc3Qgd2Vla0VuZCA9IG5ldyBEYXRlKG5vdy5nZXRUaW1lKCkgLSB3ICogNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUod2Vla0VuZC5nZXRUaW1lKCkgLSA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZm9yIChjb25zdCBhY3Qgb2YgYm9keUFjdGl2aXRpZXMpIHtcbiAgICAgICAgY29uc3QgY29tcHMgPSBjb21wbGV0aW9uRGF0YVthY3QuaWRdID8/IFtdO1xuICAgICAgICB0b3RhbCArPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBsYWJlbHMucHVzaChgVyR7NCAtIHd9YCk7XG4gICAgICB2YWx1ZXMucHVzaCh0b3RhbCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IG1vbnRoTmFtZXMgPSBbXCJKXCIsIFwiRlwiLCBcIk1cIiwgXCJBXCIsIFwiTVwiLCBcIkpcIiwgXCJKXCIsIFwiQVwiLCBcIlNcIiwgXCJPXCIsIFwiTlwiLCBcIkRcIl07XG4gICAgZm9yIChsZXQgbSA9IDExOyBtID49IDA7IG0tLSkge1xuICAgICAgY29uc3QgbW9udGhEYXRlID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIG5vdy5nZXRNb250aCgpIC0gbSwgMSk7XG4gICAgICBjb25zdCBtb250aEVuZCA9IG5ldyBEYXRlKG1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aERhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgIGZvciAoY29uc3QgYWN0IG9mIGJvZHlBY3Rpdml0aWVzKSB7XG4gICAgICAgIGNvbnN0IGNvbXBzID0gY29tcGxldGlvbkRhdGFbYWN0LmlkXSA/PyBbXTtcbiAgICAgICAgdG90YWwgKz0gY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IG1vbnRoRGF0ZSAmJiBkIDw9IG1vbnRoRW5kO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgICB9XG4gICAgICBsYWJlbHMucHVzaChtb250aE5hbWVzW21vbnRoRGF0ZS5nZXRNb250aCgpXSk7XG4gICAgICB2YWx1ZXMucHVzaCh0b3RhbCk7XG4gICAgfVxuICB9XG5cbiAgZHJhd0xpbmVDaGFydChjb250YWluZXIsIGxhYmVscywgdmFsdWVzLCBcIiNkNGE4NDNcIik7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck11c2NsZUJyZWFrZG93bkNoYXJ0KFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjb21wbGV0aW9uRGF0YTogQ29tcGxldGlvbk1hcCxcbiAgcGVyaW9kOiBcIm1vbnRoXCIgfCBcInllYXJcIlxuKTogdm9pZCB7XG4gIC8vIFNob3cgYm9keS1jYXRlZ29yeSBhY3Rpdml0aWVzIGFzIHNlcGFyYXRlIGxpbmVzXG4gIGNvbnN0IGJvZHlBY3Rpdml0aWVzID0gc2V0dGluZ3MuYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IGEuZW5hYmxlZCAmJiBhLmNhdGVnb3J5ID09PSBcImJvZHlcIik7XG4gIGlmIChib2R5QWN0aXZpdGllcy5sZW5ndGggPT09IDApIHtcbiAgICBjb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1wcm9ncmVzcy1lbXB0eVwiLCB0ZXh0OiBcIk5vIGJvZHkgYWN0aXZpdGllcyBjb25maWd1cmVkXCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgY29uc3QgY29sb3JzID0gW1wiI2Q0YTg0M1wiLCBcIiNlOGMzNWFcIiwgXCIjN2I5ZGUwXCIsIFwiI2EwOGRlMFwiLCBcIiM1ZTlhN2FcIiwgXCIjYzQ4ODIwXCJdO1xuXG4gIGNvbnN0IHN2Z05TID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCB3aWR0aCA9IDI4MDtcbiAgY29uc3QgaGVpZ2h0ID0gMTIwO1xuICBjb25zdCBwYWRkaW5nID0geyB0b3A6IDEwLCByaWdodDogMTAsIGJvdHRvbTogMjAsIGxlZnQ6IDI0IH07XG4gIGNvbnN0IGNoYXJ0VyA9IHdpZHRoIC0gcGFkZGluZy5sZWZ0IC0gcGFkZGluZy5yaWdodDtcbiAgY29uc3QgY2hhcnRIID0gaGVpZ2h0IC0gcGFkZGluZy50b3AgLSBwYWRkaW5nLmJvdHRvbTtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWApO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvbGVuLXByb2dyZXNzLXN2Z1wiKTtcblxuICBjb25zdCBidWNrZXRDb3VudCA9IHBlcmlvZCA9PT0gXCJtb250aFwiID8gNCA6IDEyO1xuXG4gIC8vIENvbXB1dGUgZGF0YSBzZXJpZXMgZm9yIGVhY2ggYWN0aXZpdHlcbiAgY29uc3QgYWxsU2VyaWVzOiB7IG5hbWU6IHN0cmluZzsgdmFsdWVzOiBudW1iZXJbXTsgY29sb3I6IHN0cmluZyB9W10gPSBbXTtcbiAgbGV0IGdsb2JhbE1heCA9IDE7XG5cbiAgZm9yIChsZXQgYWkgPSAwOyBhaSA8IGJvZHlBY3Rpdml0aWVzLmxlbmd0aDsgYWkrKykge1xuICAgIGNvbnN0IGFjdCA9IGJvZHlBY3Rpdml0aWVzW2FpXTtcbiAgICBjb25zdCBjb21wcyA9IGNvbXBsZXRpb25EYXRhW2FjdC5pZF0gPz8gW107XG4gICAgY29uc3QgdmFsczogbnVtYmVyW10gPSBbXTtcblxuICAgIGlmIChwZXJpb2QgPT09IFwibW9udGhcIikge1xuICAgICAgZm9yIChsZXQgdyA9IDM7IHcgPj0gMDsgdy0tKSB7XG4gICAgICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gdyAqIDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gbmV3IERhdGUod2Vla0VuZC5nZXRUaW1lKCkgLSA3ICogMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgICAgIHZhbHMucHVzaChjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgICAgICBpZiAoIWMuY29tcGxldGVkKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgICAgICB9KS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBtID0gMTE7IG0gPj0gMDsgbS0tKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoRGF0ZSA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCBub3cuZ2V0TW9udGgoKSAtIG0sIDEpO1xuICAgICAgICBjb25zdCBtb250aEVuZCA9IG5ldyBEYXRlKG1vbnRoRGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aERhdGUuZ2V0TW9udGgoKSArIDEsIDApO1xuICAgICAgICB2YWxzLnB1c2goY29tcHMuZmlsdGVyKChjKSA9PiB7XG4gICAgICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkID49IG1vbnRoRGF0ZSAmJiBkIDw9IG1vbnRoRW5kO1xuICAgICAgICB9KS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1heCA9IE1hdGgubWF4KC4uLnZhbHMsIDEpO1xuICAgIGlmIChtYXggPiBnbG9iYWxNYXgpIGdsb2JhbE1heCA9IG1heDtcblxuICAgIGFsbFNlcmllcy5wdXNoKHtcbiAgICAgIG5hbWU6IGFjdC5uYW1lLFxuICAgICAgdmFsdWVzOiB2YWxzLFxuICAgICAgY29sb3I6IGNvbG9yc1thaSAlIGNvbG9ycy5sZW5ndGhdLFxuICAgIH0pO1xuICB9XG5cbiAgLy8gRHJhdyBsaW5lc1xuICBmb3IgKGNvbnN0IHNlcmllcyBvZiBhbGxTZXJpZXMpIHtcbiAgICBjb25zdCBwb2ludHMgPSBzZXJpZXMudmFsdWVzLm1hcCgodiwgaSkgPT4ge1xuICAgICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIChpIC8gKGJ1Y2tldENvdW50IC0gMSkpICogY2hhcnRXO1xuICAgICAgY29uc3QgeSA9IHBhZGRpbmcudG9wICsgY2hhcnRIIC0gKHYgLyBnbG9iYWxNYXgpICogY2hhcnRIO1xuICAgICAgcmV0dXJuIGAke3h9LCR7eX1gO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwb2x5bGluZVwiKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBwb2ludHMuam9pbihcIiBcIikpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgc2VyaWVzLmNvbG9yKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWpvaW5cIiwgXCJyb3VuZFwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cblxuICAvLyBYIGF4aXMgbGFiZWxzXG4gIGNvbnN0IHhMYWJlbHMgPSBwZXJpb2QgPT09IFwibW9udGhcIlxuICAgID8gW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl1cbiAgICA6IFtcIkpcIiwgXCJGXCIsIFwiTVwiLCBcIkFcIiwgXCJNXCIsIFwiSlwiLCBcIkpcIiwgXCJBXCIsIFwiU1wiLCBcIk9cIiwgXCJOXCIsIFwiRFwiXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1Y2tldENvdW50OyBpKyspIHtcbiAgICBjb25zdCB4ID0gcGFkZGluZy5sZWZ0ICsgKGkgLyAoYnVja2V0Q291bnQgLSAxKSkgKiBjaGFydFc7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGV4dFwiKTtcbiAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwieVwiLCBTdHJpbmcoaGVpZ2h0IC0gNCkpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuNClcIik7XG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9udC1zaXplXCIsIFwiOFwiKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IHhMYWJlbHNbaV07XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgfVxuXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIC8vIExlZ2VuZFxuICBjb25zdCBsZWdlbmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtbGVnZW5kXCIgfSk7XG4gIGZvciAoY29uc3Qgc2VyaWVzIG9mIGFsbFNlcmllcykge1xuICAgIGNvbnN0IGl0ZW0gPSBsZWdlbmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcHJvZ3Jlc3MtbGVnZW5kLWl0ZW1cIiB9KTtcbiAgICBjb25zdCBkb3QgPSBpdGVtLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXByb2dyZXNzLWxlZ2VuZC1kb3RcIiB9KTtcbiAgICBkb3Quc3R5bGUuYmFja2dyb3VuZCA9IHNlcmllcy5jb2xvcjtcbiAgICBpdGVtLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IHNlcmllcy5uYW1lIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRyYXdMaW5lQ2hhcnQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGxhYmVsczogc3RyaW5nW10sXG4gIHZhbHVlczogbnVtYmVyW10sXG4gIGNvbG9yOiBzdHJpbmdcbik6IHZvaWQge1xuICBjb25zdCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3Qgd2lkdGggPSAyODA7XG4gIGNvbnN0IGhlaWdodCA9IDEwMDtcbiAgY29uc3QgcGFkZGluZyA9IHsgdG9wOiAxMCwgcmlnaHQ6IDEwLCBib3R0b206IDE4LCBsZWZ0OiAxMCB9O1xuICBjb25zdCBjaGFydFcgPSB3aWR0aCAtIHBhZGRpbmcubGVmdCAtIHBhZGRpbmcucmlnaHQ7XG4gIGNvbnN0IGNoYXJ0SCA9IGhlaWdodCAtIHBhZGRpbmcudG9wIC0gcGFkZGluZy5ib3R0b207XG4gIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4KC4uLnZhbHVlcywgMSk7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke3dpZHRofSAke2hlaWdodH1gKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1wcm9ncmVzcy1zdmdcIik7XG5cbiAgLy8gR3JpZCBsaW5lc1xuICBmb3IgKGxldCBnID0gMDsgZyA8PSAyOyBnKyspIHtcbiAgICBjb25zdCBneSA9IHBhZGRpbmcudG9wICsgKGcgLyAyKSAqIGNoYXJ0SDtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcImxpbmVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBTdHJpbmcocGFkZGluZy5sZWZ0KSk7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MlwiLCBTdHJpbmcod2lkdGggLSBwYWRkaW5nLnJpZ2h0KSk7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ5MVwiLCBTdHJpbmcoZ3kpKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInkyXCIsIFN0cmluZyhneSkpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjA2KVwiKTtcbiAgICBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjAuNVwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cblxuICAvLyBCdWlsZCBwb2ludHNcbiAgY29uc3QgcG9pbnRzID0gdmFsdWVzLm1hcCgodiwgaSkgPT4gKHtcbiAgICB4OiBwYWRkaW5nLmxlZnQgKyAoaSAvIE1hdGgubWF4KDEsIHZhbHVlcy5sZW5ndGggLSAxKSkgKiBjaGFydFcsXG4gICAgeTogcGFkZGluZy50b3AgKyBjaGFydEggLSAodiAvIG1heFZhbCkgKiBjaGFydEgsXG4gIH0pKTtcblxuICAvLyBTbW9vdGggY3VydmUgKENhdG11bGwtUm9tIFx1MjE5MiBjdWJpYyBiZXppZXIpXG4gIGlmIChwb2ludHMubGVuZ3RoID4gMSkge1xuICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX1gO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgY29uc3QgcDAgPSBwb2ludHNbTWF0aC5tYXgoMCwgaSAtIDEpXTtcbiAgICAgIGNvbnN0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgY29uc3QgcDIgPSBwb2ludHNbaSArIDFdO1xuICAgICAgY29uc3QgcDMgPSBwb2ludHNbTWF0aC5taW4ocG9pbnRzLmxlbmd0aCAtIDEsIGkgKyAyKV07XG4gICAgICBjb25zdCBjcDF4ID0gcDEueCArIChwMi54IC0gcDAueCkgLyA2O1xuICAgICAgY29uc3QgY3AxeSA9IHAxLnkgKyAocDIueSAtIHAwLnkpIC8gNjtcbiAgICAgIGNvbnN0IGNwMnggPSBwMi54IC0gKHAzLnggLSBwMS54KSAvIDY7XG4gICAgICBjb25zdCBjcDJ5ID0gcDIueSAtIChwMy55IC0gcDEueSkgLyA2O1xuICAgICAgZCArPSBgIEMgJHtjcDF4fSAke2NwMXl9LCAke2NwMnh9ICR7Y3AyeX0sICR7cDIueH0gJHtwMi55fWA7XG4gICAgfVxuXG4gICAgLy8gQXJlYSBmaWxsXG4gICAgY29uc3QgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwYXRoXCIpO1xuICAgIGNvbnN0IGFyZWFEID0gZCArIGAgTCAke3BvaW50c1twb2ludHMubGVuZ3RoIC0gMV0ueH0gJHtwYWRkaW5nLnRvcCArIGNoYXJ0SH0gTCAke3BvaW50c1swXS54fSAke3BhZGRpbmcudG9wICsgY2hhcnRIfSBaYDtcbiAgICBhcmVhLnNldEF0dHJpYnV0ZShcImRcIiwgYXJlYUQpO1xuICAgIGFyZWEuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvcik7XG4gICAgYXJlYS5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIFwiMC4wOFwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQoYXJlYSk7XG5cbiAgICAvLyBDdXJ2ZSBsaW5lXG4gICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwYXRoXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwiZFwiLCBkKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGNvbG9yKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjEuNVwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuICB9XG5cbiAgLy8gRGF0YSBkb3RzXG4gIGZvciAoY29uc3QgcHQgb2YgcG9pbnRzKSB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcImNpcmNsZVwiKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKFwiY3hcIiwgU3RyaW5nKHB0LngpKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKFwiY3lcIiwgU3RyaW5nKHB0LnkpKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKFwiclwiLCBcIjIuNVwiKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvcik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGRvdCk7XG4gIH1cblxuICAvLyBYLWF4aXMgbGFiZWxzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHBhZGRpbmcubGVmdCArIChpIC8gTWF0aC5tYXgoMSwgbGFiZWxzLmxlbmd0aCAtIDEpKSAqIGNoYXJ0VztcbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInRleHRcIik7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhoZWlnaHQgLSA0KSk7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICB0ZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuNClcIik7XG4gICAgdGV4dC5zZXRBdHRyaWJ1dGUoXCJmb250LXNpemVcIiwgXCI4XCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBsYWJlbHNbaV07XG4gICAgc3ZnLmFwcGVuZENoaWxkKHRleHQpO1xuICB9XG5cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbi8vIC0tLSBNdXNjbGUgU2VsZWN0b3IgZm9yIE5ldyBXb3Jrb3V0IC0tLVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd011c2NsZVNlbGVjdG9yKFxuICBvbkNvbmZpcm06IChzZWxlY3RlZDogTXVzY2xlR3JvdXBJZFtdKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQgb2xlbi1tdXNjbGUtc2VsZWN0b3Itc2hlZXRcIiB9KTtcbiAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiU2VsZWN0IE11c2NsZXNcIiB9KTtcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXByb2dyZXNzLXN1YnRpdGxlXCIsXG4gICAgdGV4dDogXCJUYXAgdGhlIG11c2NsZXMgeW91IHdhbnQgdG8gdHJhaW5cIixcbiAgfSk7XG5cbiAgY29uc3Qgc2VsZWN0ZWQgPSBuZXcgU2V0PE11c2NsZUdyb3VwSWQ+KCk7XG5cbiAgLy8gU1ZHIGZpZ3VyZSB3aXRoIGNsaWNrYWJsZSBtdXNjbGVzXG4gIGNvbnN0IGZpZ3VyZVdyYXAgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1tdXNjbGUtc2VsZWN0b3ItZmlndXJlXCIgfSk7XG5cbiAgY29uc3Qgc3ZnTlMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDIwMCA0MDBcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm9sZW4taGVhdG1hcC1zdmcgb2xlbi1zZWxlY3Rvci1zdmdcIik7XG5cbiAgLy8gRHJhdyBzaWxob3VldHRlXG4gIGRyYXdCb2R5U2lsaG91ZXR0ZShzdmcsIHN2Z05TLCBcIm1hbGVcIiwgXCJmcm9udFwiKTtcblxuICAvLyBEcmF3IGNsaWNrYWJsZSBtdXNjbGUgcmVnaW9uc1xuICBjb25zdCByZWN0czogTWFwPE11c2NsZUdyb3VwSWQsIFNWR1JlY3RFbGVtZW50W10+ID0gbmV3IE1hcCgpO1xuXG4gIGZvciAoY29uc3QgcmVnaW9uIG9mIE1VU0NMRV9SRUdJT05TKSB7XG4gICAgY29uc3QgYm91bmRzID0gcmVnaW9uLmZyb250ID8/IHJlZ2lvbi5iYWNrO1xuICAgIGlmICghYm91bmRzKSBjb250aW51ZTtcblxuICAgIGNvbnN0IHggPSBib3VuZHMueCAqIDI7XG4gICAgY29uc3QgeSA9IGJvdW5kcy55ICogNDtcbiAgICBjb25zdCB3ID0gYm91bmRzLncgKiAyO1xuICAgIGNvbnN0IGggPSBib3VuZHMuaCAqIDQ7XG5cbiAgICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInJlY3RcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyh5KSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcodykpO1xuICAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhoKSk7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjZcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeVwiLCBcIjZcIik7XG4gICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwicmdiYSgyNDIsIDIzNiwgMjI0LCAwLjA2KVwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1oZWF0bWFwLW11c2NsZSBvbGVuLXNlbGVjdG9yLW11c2NsZVwiKTtcbiAgICByZWN0LnNldEF0dHJpYnV0ZShcImRhdGEtbXVzY2xlXCIsIHJlZ2lvbi5pZCk7XG5cbiAgICBjb25zdCBleGlzdGluZ1JlY3RzID0gcmVjdHMuZ2V0KHJlZ2lvbi5pZCkgPz8gW107XG4gICAgZXhpc3RpbmdSZWN0cy5wdXNoKHJlY3QpO1xuICAgIHJlY3RzLnNldChyZWdpb24uaWQsIGV4aXN0aW5nUmVjdHMpO1xuXG4gICAgcmVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0b2dnbGVNdXNjbGUocmVnaW9uLmlkKTtcbiAgICB9KTtcblxuICAgIHN2Zy5hcHBlbmRDaGlsZChyZWN0KTtcblxuICAgIC8vIE1pcnJvclxuICAgIGlmIChpc1N5bW1ldHJpY011c2NsZShyZWdpb24uaWQpICYmIGJvdW5kcy54IDwgNTApIHtcbiAgICAgIGNvbnN0IG1pcnJvclggPSAyMDAgLSB4IC0gdztcbiAgICAgIGNvbnN0IG1pcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJyZWN0XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcInhcIiwgU3RyaW5nKG1pcnJvclgpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyh5KSk7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHcpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKGgpKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjZcIik7XG4gICAgICBtaXJyb3Iuc2V0QXR0cmlidXRlKFwicnlcIiwgXCI2XCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuMDYpXCIpO1xuICAgICAgbWlycm9yLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2xlbi1oZWF0bWFwLW11c2NsZSBvbGVuLXNlbGVjdG9yLW11c2NsZVwiKTtcbiAgICAgIG1pcnJvci5zZXRBdHRyaWJ1dGUoXCJkYXRhLW11c2NsZVwiLCByZWdpb24uaWQpO1xuXG4gICAgICBleGlzdGluZ1JlY3RzLnB1c2gobWlycm9yKTtcbiAgICAgIHJlY3RzLnNldChyZWdpb24uaWQsIGV4aXN0aW5nUmVjdHMpO1xuXG4gICAgICBtaXJyb3IuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRvZ2dsZU11c2NsZShyZWdpb24uaWQpO1xuICAgICAgfSk7XG5cbiAgICAgIHN2Zy5hcHBlbmRDaGlsZChtaXJyb3IpO1xuICAgIH1cblxuICAgIC8vIExhYmVsIHRleHRcbiAgICBjb25zdCBsYWJlbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwidGV4dFwiKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwieFwiLCBTdHJpbmcoeCArIHcgLyAyKSk7XG4gICAgbGFiZWxUZXh0LnNldEF0dHJpYnV0ZShcInlcIiwgU3RyaW5nKHkgKyBoIC8gMiArIDMpKTtcbiAgICBsYWJlbFRleHQuc2V0QXR0cmlidXRlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIik7XG4gICAgbGFiZWxUZXh0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJyZ2JhKDI0MiwgMjM2LCAyMjQsIDAuNSlcIik7XG4gICAgbGFiZWxUZXh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjdcIik7XG4gICAgbGFiZWxUZXh0LnNldEF0dHJpYnV0ZShcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKTtcbiAgICBsYWJlbFRleHQudGV4dENvbnRlbnQgPSBNVVNDTEVfR1JPVVBfTEFCRUxTW3JlZ2lvbi5pZF0uc2xpY2UoMCwgNSk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGxhYmVsVGV4dCk7XG4gIH1cblxuICBmaWd1cmVXcmFwLmFwcGVuZENoaWxkKHN2Zyk7XG5cbiAgLy8gU2VsZWN0ZWQgY2hpcHMgYXJlYVxuICBjb25zdCBjaGlwc0FyZWEgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1tdXNjbGUtc2VsZWN0b3ItY2hpcHNcIiB9KTtcblxuICBmdW5jdGlvbiB0b2dnbGVNdXNjbGUoaWQ6IE11c2NsZUdyb3VwSWQpOiB2b2lkIHtcbiAgICBpZiAoc2VsZWN0ZWQuaGFzKGlkKSkge1xuICAgICAgc2VsZWN0ZWQuZGVsZXRlKGlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWQuYWRkKGlkKTtcbiAgICB9XG4gICAgdXBkYXRlVmlzdWFsKCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVWaXN1YWwoKTogdm9pZCB7XG4gICAgLy8gVXBkYXRlIHJlY3RzXG4gICAgZm9yIChjb25zdCBbaWQsIHJlY3RMaXN0XSBvZiByZWN0cykge1xuICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IHNlbGVjdGVkLmhhcyhpZCk7XG4gICAgICBmb3IgKGNvbnN0IHIgb2YgcmVjdExpc3QpIHtcbiAgICAgICAgci5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIGlzU2VsZWN0ZWQgPyBcInJnYmEoMjEyLCAxNjgsIDY3LCAwLjUpXCIgOiBcInJnYmEoMjQyLCAyMzYsIDIyNCwgMC4wNilcIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIGNoaXBzXG4gICAgY2hpcHNBcmVhLmVtcHR5KCk7XG4gICAgZm9yIChjb25zdCBpZCBvZiBzZWxlY3RlZCkge1xuICAgICAgY29uc3QgY2hpcCA9IGNoaXBzQXJlYS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1tdXNjbGUtc2VsZWN0b3ItY2hpcFwiIH0pO1xuICAgICAgY2hpcC50ZXh0Q29udGVudCA9IE1VU0NMRV9HUk9VUF9MQUJFTFNbaWRdO1xuICAgICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdG9nZ2xlTXVzY2xlKGlkKSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ29uZmlybSBidXR0b25cbiAgY29uc3QgYWN0aW9ucyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlYXRtYXAtYWN0aW9uc1wiIH0pO1xuICBjb25zdCBjb25maXJtQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICB0ZXh0OiBcIkJlZ2luIFdvcmtvdXRcIixcbiAgfSk7XG4gIGNvbmZpcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbG9zZVBvcHVwKCk7XG4gICAgb25Db25maXJtKEFycmF5LmZyb20oc2VsZWN0ZWQpKTtcbiAgfSk7XG5cbiAgY29uc3QgY2FuY2VsQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgIHRleHQ6IFwiQ2FuY2VsXCIsXG4gIH0pO1xuICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlUG9wdXAoKSk7XG5cbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlUG9wdXAoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VQb3B1cCgpOiB2b2lkIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFdlaWdodCBQcm9ncmVzcyBDb21wb25lbnRcbi8vIFdlaWdodCB0cmVuZCBncmFwaCArIGxvZyByZW1pbmRlciBub3RpZmljYXRpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgV2VpZ2h0TG9nRnJlcXVlbmN5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXZWlnaHROb3RpZmljYXRpb24oXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvbkxvZ1dlaWdodDogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHN0YXRzID0gc2V0dGluZ3MucGVyc29uYWxTdGF0cztcbiAgaWYgKCFzdGF0cy5jdXJyZW50V2VpZ2h0IHx8IHN0YXRzLndlaWdodExvZy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBjb25zdCBkYXlzU2luY2VMb2cgPSBnZXREYXlzU2luY2VMYXN0TG9nKHN0YXRzLmxhc3RXZWlnaHRMb2dEYXRlKTtcbiAgY29uc3QgaW50ZXJ2YWxEYXlzID0gZ2V0SW50ZXJ2YWxEYXlzKHN0YXRzLndlaWdodExvZ0ZyZXF1ZW5jeSwgc3RhdHMud2VpZ2h0TG9nQ3VzdG9tRGF5cyk7XG5cbiAgaWYgKGRheXNTaW5jZUxvZyA8IGludGVydmFsRGF5cykgcmV0dXJuO1xuXG4gIC8vIFNob3cgbm90aWZpY2F0aW9uIGNhcmRcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkLWNvbXBhY3Qgb2xlbi13ZWlnaHQtbm90aWZ5XCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIGNvbnN0IHJvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2VpZ2h0LW5vdGlmeS1yb3dcIiB9KTtcbiAgcm93LmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IFwiVGltZSB0byBsb2cgeW91ciB3ZWlnaHRcIiB9KTtcblxuICBjb25zdCBidG4gPSByb3cuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4td2VpZ2h0LW5vdGlmeS1idG5cIixcbiAgICB0ZXh0OiBcIkxvZ1wiLFxuICB9KTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25Mb2dXZWlnaHQoKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldERheXNTaW5jZUxhc3RMb2cobGFzdERhdGU6IHN0cmluZyB8IG51bGwpOiBudW1iZXIge1xuICBpZiAoIWxhc3REYXRlKSByZXR1cm4gOTk5O1xuICBjb25zdCBsYXN0ID0gbmV3IERhdGUobGFzdERhdGUpO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBtcyA9IG5vdy5nZXRUaW1lKCkgLSBsYXN0LmdldFRpbWUoKTtcbiAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyAoMjQgKiA2MCAqIDYwICogMTAwMCkpO1xufVxuXG5mdW5jdGlvbiBnZXRJbnRlcnZhbERheXMoZnJlcTogV2VpZ2h0TG9nRnJlcXVlbmN5LCBjdXN0b21EYXlzOiBudW1iZXIpOiBudW1iZXIge1xuICBzd2l0Y2ggKGZyZXEpIHtcbiAgICBjYXNlIFwidHdpY2UtYS13ZWVrXCI6IHJldHVybiAzO1xuICAgIGNhc2UgXCJldmVyeS13ZWVrXCI6IHJldHVybiA3O1xuICAgIGNhc2UgXCJldmVyeS0yLXdlZWtzXCI6IHJldHVybiAxNDtcbiAgICBjYXNlIFwiZXZlcnktMy1kYXlzXCI6IHJldHVybiAzO1xuICAgIGNhc2UgXCJldmVyeS01LWRheXNcIjogcmV0dXJuIDU7XG4gICAgY2FzZSBcImN1c3RvbVwiOiByZXR1cm4gY3VzdG9tRGF5cztcbiAgICBkZWZhdWx0OiByZXR1cm4gNztcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgV29ya3NwYWNlIFZpZXdcbi8vIEFjdGl2ZSB3b3Jrc3BhY2Ugc2NyZWVuIHdpdGggdGltZXIsIHNraWxscywgZmluaXNoIGZsb3cuXG4vLyBXaGVuIGFuIGFjdGl2aXR5IGhhcyBhIHdvcmtzcGFjZVRlbXBsYXRlLCB0aGUgdGVtcGxhdGUgaXNcbi8vIHJlbmRlcmVkIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgdGltZXIgVUkuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZlV29ya3NwYWNlLCBBY3Rpdml0eUNvbmZpZywgV29ya3NwYWNlVHlwZSwgV29ya3NwYWNlUmVzdWx0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfV09SS1NQQUNFLCBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBXb3Jrc3BhY2VWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG4gIHByaXZhdGUgdGltZXJJbnRlcnZhbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIHByaXZhdGUgc3RhcnRUaW1lOiBEYXRlO1xuICBwcml2YXRlIGVsYXBzZWQgPSAwOyAvLyBzZWNvbmRzXG4gIC8qKiBXaGVuIGluIHRlbXBsYXRlIG1vZGUsIHRyYWNrcyB0aGUgZGFpbHkgbm90ZSBmaWxlIHRoZSB0ZW1wbGF0ZSBpcyBib3VuZCB0byAqL1xuICBwcml2YXRlIHRlbXBsYXRlTm90ZUZpbGU6IFRGaWxlIHwgbnVsbCA9IG51bGw7XG4gIC8qKiBUcmFja3Mgd2hldGhlciB3ZSBhbHJlYWR5IHByb2Nlc3NlZCBhIGNvbXBsZXRpb24gKHByZXZlbnRzIGRvdWJsZS1hcHBseSkgKi9cbiAgcHJpdmF0ZSBjb21wbGV0aW9uQXBwbGllZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFZJRVdfVFlQRV9XT1JLU1BBQ0U7XG4gIH1cblxuICBnZXREaXNwbGF5VGV4dCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHdvcmtzcGFjZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZTtcbiAgICByZXR1cm4gd29ya3NwYWNlID8gYFdvcmtzcGFjZTogJHt3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lfWAgOiBcIldvcmtzcGFjZVwiO1xuICB9XG5cbiAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcInRpbWVyXCI7XG4gIH1cblxuICBhc3luYyBvbk9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qgd29ya3NwYWNlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlO1xuICAgIGlmICghd29ya3NwYWNlKSB7XG4gICAgICB0aGlzLmNvbnRlbnRFbC5jcmVhdGVFbChcImRpdlwiLCB7IHRleHQ6IFwiTm8gYWN0aXZlIHdvcmtzcGFjZS5cIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZChcbiAgICAgIChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCxcbiAgICApO1xuXG4gICAgaWYgKGFjdGl2aXR5Py53b3Jrc3BhY2VUZW1wbGF0ZSkge1xuICAgICAgLy8gVGVtcGxhdGUgbW9kZTogcmVuZGVyIHRoZSBhY3Rpdml0eSB0ZW1wbGF0ZSBib3VuZCB0byB0b2RheSdzIGRhaWx5IG5vdGVcbiAgICAgIGF3YWl0IHRoaXMucmVuZGVyVGVtcGxhdGVNb2RlKHdvcmtzcGFjZSwgYWN0aXZpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBEZWZhdWx0IG1vZGU6IHRpbWVyICsgc2tpbGxzICsgZmluaXNoXG4gICAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKHdvcmtzcGFjZS5zdGFydFRpbWUpO1xuICAgICAgdGhpcy5yZW5kZXIod29ya3NwYWNlKTtcbiAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICB0aGlzLnRlbXBsYXRlTm90ZUZpbGUgPSBudWxsO1xuICAgIHRoaXMuY29tcGxldGlvbkFwcGxpZWQgPSBmYWxzZTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBUZW1wbGF0ZSBNb2RlXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclRlbXBsYXRlTW9kZShcbiAgICB3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSxcbiAgICBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgLy8gRmluZCBvciBjcmVhdGUgdG9kYXkncyBkYWlseSBub3RlIGZvciB0aGlzIGFjdGl2aXR5XG4gICAgY29uc3QgZmlsZSA9IGF3YWl0IHRoaXMuZmluZE9yQ3JlYXRlRGFpbHlOb3RlKGFjdGl2aXR5KTtcbiAgICBpZiAoIWZpbGUpIHtcbiAgICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIHRleHQ6IFwiQ291bGQgbm90IGxvYWQgYWN0aXZpdHkgbm90ZS5cIixcbiAgICAgICAgYXR0cjogeyBzdHlsZTogXCJjb2xvcjogdmFyKC0tdGV4dC1lcnJvcik7IHBhZGRpbmc6IDIwcHg7IHRleHQtYWxpZ246IGNlbnRlcjtcIiB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50ZW1wbGF0ZU5vdGVGaWxlID0gZmlsZTtcblxuICAgIC8vIFdhaXQgZm9yIG1ldGFkYXRhIGNhY2hlIHRvIHBvcHVsYXRlIChpbXBvcnRhbnQgZm9yIG5ld2x5IGNyZWF0ZWQgZmlsZXMpXG4gICAgYXdhaXQgdGhpcy53YWl0Rm9yTWV0YWRhdGEoZmlsZSk7XG5cbiAgICAvLyBSZW5kZXIgdGVtcGxhdGUgaW50byB0aGUgdmlldydzIGNvbnRlbnQgYXJlYVxuICAgIGNvbnN0IHRlbXBsYXRlQ29udGFpbmVyID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsYXRlLXJvb3RcIiB9KTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoXG4gICAgICBhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSEsXG4gICAgICBmaWxlLFxuICAgICAgdGVtcGxhdGVDb250YWluZXIsXG4gICAgKTtcblxuICAgIC8vIFdhdGNoIGZvciB0aGUgdGVtcGxhdGUgbWFya2luZyB0aGUgYWN0aXZpdHkgYXMgZG9uZSBpbiBmcm9udG1hdHRlci5cbiAgICAvLyBXaGVuIHRoZSBhY3Rpdml0eSBwcm9wZXJ0eSBiZWNvbWVzIHRydWUsIGFwcGx5IHBsdWdpbi1sZXZlbCBlZmZlY3RzXG4gICAgLy8gKFhQLCBib3NzIGRhbWFnZSwgY2xlYXIgYWN0aXZlV29ya3NwYWNlKS5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uKFwiY2hhbmdlZFwiLCAoY2hhbmdlZEZpbGUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY29tcGxldGlvbkFwcGxpZWQpIHJldHVybjtcbiAgICAgICAgaWYgKGNoYW5nZWRGaWxlLnBhdGggIT09IGZpbGUucGF0aCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoY2hhbmdlZEZpbGUpO1xuICAgICAgICBjb25zdCBmbSA9IGNhY2hlPy5mcm9udG1hdHRlcjtcbiAgICAgICAgaWYgKGZtPy5bYWN0aXZpdHkucHJvcGVydHldID09PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0aW9uQXBwbGllZCA9IHRydWU7XG4gICAgICAgICAgY29uc3QgY29tcGxldGlvblR5cGUgPSBmbVtgJHthY3Rpdml0eS5wcm9wZXJ0eX0tVHlwZWBdIGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgICB0aGlzLmFwcGx5VGVtcGxhdGVDb21wbGV0aW9uKHdvcmtzcGFjZSwgYWN0aXZpdHksIGNvbXBsZXRpb25UeXBlKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRvZGF5J3MgZGFpbHkgbm90ZSBpbiB0aGUgYWN0aXZpdHkgZm9sZGVyLCBvciBjcmVhdGUgb25lLlxuICAgKiBFbnN1cmVzIHRoZSBub3RlIGhhcyBgYWN0aXZpdHk6IDxpZD5gIGluIGZyb250bWF0dGVyIHNvIHRoZVxuICAgKiB0ZW1wbGF0ZSBwb3N0LXByb2Nlc3NvciBhbHNvIHdvcmtzIHdoZW4gb3BlbmluZyB0aGUgbm90ZSBkaXJlY3RseS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgZmluZE9yQ3JlYXRlRGFpbHlOb3RlKGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyk6IFByb21pc2U8VEZpbGUgfCBudWxsPiB7XG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgY29uc3QgZm9sZGVyID0gYWN0aXZpdHkuZm9sZGVyO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBMb29rIGZvciBleGlzdGluZyBkYWlseSBub3RlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBmaWxlcy5maW5kKFxuICAgICAgKGYpID0+XG4gICAgICAgIChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiZcbiAgICAgICAgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0cixcbiAgICApO1xuXG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAvLyBFbnN1cmUgaXQgaGFzIHRoZSBhY3Rpdml0eSBmaWVsZCBpbiBmcm9udG1hdHRlclxuICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGV4aXN0aW5nLCAoZm0pID0+IHtcbiAgICAgICAgaWYgKCFmbS5hY3Rpdml0eSkgZm0uYWN0aXZpdHkgPSBhY3Rpdml0eS5pZDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGV4aXN0aW5nO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSBmb2xkZXIgZXhpc3RzXG4gICAgY29uc3QgYWJzdHJhY3RGb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyKTtcbiAgICBpZiAoIWFic3RyYWN0Rm9sZGVyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBGb2xkZXIgbWF5IGFscmVhZHkgZXhpc3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgbmV3IGRhaWx5IG5vdGUgd2l0aCBhY3Rpdml0eSBmcm9udG1hdHRlclxuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICBjb25zdCBjb250ZW50ID0gYC0tLVxcbmFjdGl2aXR5OiAke2FjdGl2aXR5LmlkfVxcbi0tLVxcbmA7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZVBhdGgsIGNvbnRlbnQpO1xuICAgIH0gY2F0Y2gge1xuICAgICAgLy8gRmlsZSBtaWdodCBhbHJlYWR5IGV4aXN0IHdpdGggYSBkaWZmZXJlbnQgY2FzaW5nIG9yIHJhY2UgY29uZGl0aW9uXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogV2FpdCB1bnRpbCB0aGUgbWV0YWRhdGEgY2FjaGUgaGFzIGluZGV4ZWQgYSBmaWxlJ3MgZnJvbnRtYXR0ZXIuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIHdhaXRGb3JNZXRhZGF0YShmaWxlOiBURmlsZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgd2hpbGUgKGF0dGVtcHRzIDwgMjApIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBpZiAoY2FjaGU/LmZyb250bWF0dGVyKSByZXR1cm47XG4gICAgICBhd2FpdCBzbGVlcCg1MCk7XG4gICAgICBhdHRlbXB0cysrO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgdGVtcGxhdGUgbWFya3MgdGhlIGFjdGl2aXR5IGFzIGRvbmUgaW4gZnJvbnRtYXR0ZXIuXG4gICAqIEFwcGxpZXMgcGx1Z2luLWxldmVsIGVmZmVjdHM6IFhQLCBib3NzIGRhbWFnZSwgY2xlYXIgd29ya3NwYWNlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBhcHBseVRlbXBsYXRlQ29tcGxldGlvbihcbiAgICB3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSxcbiAgICBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsXG4gICAgY29tcGxldGlvblR5cGU/OiBzdHJpbmcsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE1hcCB0aGUgdGVtcGxhdGUncyBjb21wbGV0aW9uIHR5cGUgdG8gYSB3b3Jrc3BhY2Ugc3RhdGVcbiAgICBjb25zdCB3c1R5cGUgPSBjb21wbGV0aW9uVHlwZT8udG9Mb3dlckNhc2UoKSBhcyBXb3Jrc3BhY2VUeXBlIHwgdW5kZWZpbmVkO1xuICAgIGNvbnN0IHN0YXRlID0gd3NUeXBlXG4gICAgICA/IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gd3NUeXBlKVxuICAgICAgOiB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IFwiZGlzY2lwbGluZVwiKTtcblxuICAgIC8vIEFwcGx5IFhQXG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnhwTXVsdGlwbGllciA+IDApIHtcbiAgICAgIGNvbnN0IHhwR2FpbiA9IE1hdGgucm91bmQoXG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb24gKiBzdGF0ZS54cE11bHRpcGxpZXIsXG4gICAgICApO1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFt3b3Jrc3BhY2UuY2F0ZWdvcnldICs9IHhwR2FpbjtcbiAgICB9XG5cbiAgICAvLyBBcHBseSBib3NzIGRhbWFnZSAodW5sZXNzIHNraXBwZWQpXG4gICAgaWYgKHdzVHlwZSAhPT0gXCJza2lwcGVkXCIpIHtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBNYXRoLm1heChcbiAgICAgICAgMCxcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAtIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb24sXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIENsZWFyIGFjdGl2ZSB3b3Jrc3BhY2VcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgPSBudWxsO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICB9XG5cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBEZWZhdWx0IE1vZGUgKHRpbWVyICsgc2tpbGxzICsgZmluaXNoKVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHJpdmF0ZSBzdGFydFRpbWVyKCk6IHZvaWQge1xuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmVsYXBzZWQgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuICAgICAgY29uc3QgdGltZXJFbCA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi13b3Jrc3BhY2UtdGltZXJcIik7XG4gICAgICBpZiAodGltZXJFbCkgdGltZXJFbC50ZXh0Q29udGVudCA9IHRoaXMuZm9ybWF0VGltZSh0aGlzLmVsYXBzZWQpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdG9wVGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZXJJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpO1xuICAgICAgdGhpcy50aW1lckludGVydmFsID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcih3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgY29uc3Qgcm9vdCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kYXNoYm9hcmQgb2xlbi13b3Jrc3BhY2Utcm9vdFwiIH0pO1xuXG4gICAgLy8gVG9wIGJhclxuICAgIGNvbnN0IHRvcEJhciA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXRvcGJhclwiIH0pO1xuXG4gICAgY29uc3QgYWN0SW5mbyA9IHRvcEJhci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtYWN0LWluZm9cIiB9KTtcbiAgICBhY3RJbmZvLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1lbW9qaVwiLCB0ZXh0OiB3b3Jrc3BhY2UuZW1vamkgfSk7XG4gICAgYWN0SW5mby5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtYWN0LW5hbWVcIiwgdGV4dDogd29ya3NwYWNlLmFjdGl2aXR5TmFtZSB9KTtcblxuICAgIGNvbnN0IHRpbWVyRWwgPSB0b3BCYXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4td29ya3NwYWNlLXRpbWVyXCIsXG4gICAgICB0ZXh0OiBcIjAwOjAwXCIsXG4gICAgfSk7XG5cbiAgICBjb25zdCBmaW5pc2hCdG4gPSB0b3BCYXIuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnkgb2xlbi13b3Jrc3BhY2UtZmluaXNoLWJ0blwiLFxuICAgICAgdGV4dDogXCJGSU5JU0hcIixcbiAgICB9KTtcbiAgICBmaW5pc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd0ZpbmlzaE1vZGFsKHdvcmtzcGFjZSkpO1xuXG4gICAgLy8gQ2F0ZWdvcnkgYWNjZW50IGxpbmVcbiAgICBjb25zdCBhY2NlbnRDb2xvciA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW3dvcmtzcGFjZS5jYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCI7XG4gICAgY29uc3QgYWNjZW50ID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtYWNjZW50XCIgfSk7XG4gICAgYWNjZW50LnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAke2FjY2VudENvbG9yfSwgdHJhbnNwYXJlbnQpYDtcblxuICAgIC8vIE1haW4gY29udGVudCBhcmVhXG4gICAgY29uc3QgY29udGVudCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWNvbnRlbnRcIiB9KTtcblxuICAgIC8vIFNraWxscyBzZWN0aW9uXG4gICAgY29uc3Qgc2tpbGxzU2VjdGlvbiA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxscy1zZWN0aW9uXCIgfSk7XG4gICAgc2tpbGxzU2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogXCJXT1JLU1BBQ0UgU0tJTExTXCIgfSk7XG5cbiAgICBjb25zdCBza2lsbHNDb250YWluZXIgPSBza2lsbHNTZWN0aW9uLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbHNcIiB9KTtcblxuICAgIGlmICh3b3Jrc3BhY2Uuc2tpbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgc2tpbGxzQ29udGFpbmVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4td29ya3NwYWNlLW5vLXNraWxsc1wiLFxuICAgICAgICB0ZXh0OiBcIk5vIHNraWxscyB0YWdnZWQgeWV0XCIsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBza2lsbCBvZiB3b3Jrc3BhY2Uuc2tpbGxzKSB7XG4gICAgICAgIGNvbnN0IGNoaXAgPSBza2lsbHNDb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxsLWNoaXBcIiB9KTtcbiAgICAgICAgY2hpcC50ZXh0Q29udGVudCA9IHNraWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBza2lsbHMgYnV0dG9uXG4gICAgY29uc3QgYWRkU2tpbGxCdG4gPSBza2lsbHNTZWN0aW9uLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnkgb2xlbi13b3Jrc3BhY2UtYWRkLXNraWxsXCIsXG4gICAgICB0ZXh0OiBcIisgQUREIFNLSUxMXCIsXG4gICAgfSk7XG4gICAgYWRkU2tpbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd1NraWxsUGlja2VyKHdvcmtzcGFjZSkpO1xuXG4gICAgLy8gRm9jdXMgem9uZSBcdTIwMTQgbW90aXZhdGlvbmFsIGFyZWFcbiAgICBjb25zdCBmb2N1c1pvbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1mb2N1c1wiIH0pO1xuICAgIGNvbnN0IHF1b3RlID0gRkFMTEJBQ0tfUVVPVEVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEZBTExCQUNLX1FVT1RFUy5sZW5ndGgpXTtcbiAgICBmb2N1c1pvbmUuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tcXVvdGUtdGV4dFwiLFxuICAgICAgdGV4dDogYFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgICB9KTtcbiAgICBmb2N1c1pvbmUuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICAgIHRleHQ6IGBcdTIwMTQgJHtxdW90ZS5hdHRyaWJ1dGlvbn1gLFxuICAgIH0pO1xuXG4gICAgLy8gQm90dG9tIGJhclxuICAgIGNvbnN0IGJvdHRvbUJhciA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWJvdHRvbWJhclwiIH0pO1xuICAgIGNvbnN0IGNhdExhYmVsID0gd29ya3NwYWNlLmNhdGVnb3J5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29ya3NwYWNlLmNhdGVnb3J5LnNsaWNlKDEpO1xuICAgIGJvdHRvbUJhci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2UtY2F0ZWdvcnktbGFiZWxcIixcbiAgICAgIHRleHQ6IGNhdExhYmVsLFxuICAgIH0pO1xuICAgIGJvdHRvbUJhci5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBhY2NlbnRDb2xvcjtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1NraWxsUGlja2VyKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogdm9pZCB7XG4gICAgLy8gUHJvbXB0IGZvciBza2lsbCBuYW1lIHZpYSBhIHNpbXBsZSBpbnB1dFxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICAgIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldFwiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLCB0ZXh0OiBcIkFERCBTS0lMTFwiIH0pO1xuXG4gICAgY29uc3QgaW5wdXRXcmFwID0gc2hlZXQuY3JlYXRlRGl2KHsgYXR0cjogeyBzdHlsZTogXCJtYXJnaW46IDIwcHggMDtcIiB9IH0pO1xuICAgIGNvbnN0IGlucHV0ID0gaW5wdXRXcmFwLmNyZWF0ZUVsKFwiaW5wdXRcIiwge1xuICAgICAgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxsLWlucHV0XCIsXG4gICAgICBhdHRyOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTa2lsbCBuYW1lLi4uXCIgfSxcbiAgICB9KTtcblxuICAgIC8vIElmIHNraWxsIGZvbGRlciBleGlzdHMsIGxvYWQgZXhpc3Rpbmcgc2tpbGxzXG4gICAgaWYgKHdvcmtzcGFjZS5za2lsbEZvbGRlcikge1xuICAgICAgY29uc3Qgc2tpbGxzID0gdGhpcy5sb2FkU2tpbGxzRnJvbUZvbGRlcih3b3Jrc3BhY2Uuc2tpbGxGb2xkZXIpO1xuICAgICAgaWYgKHNraWxscy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxsc1wiLCBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbi1ib3R0b206IDE2cHg7XCIgfSB9KTtcbiAgICAgICAgZm9yIChjb25zdCBza2lsbCBvZiBza2lsbHMpIHtcbiAgICAgICAgICBjb25zdCBjaGlwID0gZXhpc3RpbmcuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxsLWNoaXAgb2xlbi1jbGlja2FibGVcIiB9KTtcbiAgICAgICAgICBjaGlwLnRleHRDb250ZW50ID0gc2tpbGw7XG4gICAgICAgICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgYWRkU2tpbGwoc2tpbGwpO1xuICAgICAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpb25zXCIgfSk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgICB0ZXh0OiBcIkFERFwiLFxuICAgIH0pO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBhZGRTa2lsbCh2YWwpO1xuICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICAgIHRleHQ6IFwiQ0FOQ0VMXCIsXG4gICAgfSk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVNoZWV0KCkpO1xuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VTaGVldCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkU2tpbGwgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXdvcmtzcGFjZS5za2lsbHMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgICAgd29ya3NwYWNlLnNraWxscy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgPSB3b3Jrc3BhY2U7XG4gICAgICAgIHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLnJlbmRlcih3b3Jrc3BhY2UpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjbG9zZVNoZWV0ID0gKCkgPT4ge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRTa2lsbHNGcm9tRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiO1xuICAgIHJldHVybiBmaWxlc1xuICAgICAgLmZpbHRlcigoZikgPT4gZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpXG4gICAgICAubWFwKChmKSA9PiBmLmJhc2VuYW1lKVxuICAgICAgLnNvcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0ZpbmlzaE1vZGFsKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkdXJhdGlvbk1pbnV0ZXMgPSBNYXRoLnJvdW5kKChlbmRUaW1lLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lLmdldFRpbWUoKSkgLyA2MDAwMCk7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICAgIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLCB0ZXh0OiBcIkhPVyBESUQgSVQgRkVFTD9cIiB9KTtcbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1ib2R5LWl0YWxpY1wiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW46IDEycHggMCAyMHB4O1wiIH0sXG4gICAgICB0ZXh0OiBgJHt3b3Jrc3BhY2UuZW1vaml9ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX0gXHUwMEI3ICR7ZHVyYXRpb25NaW51dGVzfSBtaW51dGVzYCxcbiAgICB9KTtcblxuICAgIC8vIENvbXBsZXRpb24gc3RhdGUgYnV0dG9uc1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmlsdGVyKChzKSA9PiBzLmVuYWJsZWQpO1xuICAgIGNvbnN0IHN0YXRlc0dyaWQgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGVzLWdyaWRcIiB9KTtcblxuICAgIGZvciAoY29uc3Qgc3RhdGUgb2Ygc3RhdGVzKSB7XG4gICAgICBjb25zdCBidG4gPSBzdGF0ZXNHcmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZS1idG5cIiB9KTtcbiAgICAgIGJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IHN0YXRlLmNvbG9yO1xuXG4gICAgICBidG4uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGUtaWNvblwiLCB0ZXh0OiBzdGF0ZS5pY29uIH0pO1xuICAgICAgYnRuLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlLW5hbWVcIiwgdGV4dDogc3RhdGUubmFtZSB9KTtcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogV29ya3NwYWNlUmVzdWx0ID0ge1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IHdvcmtzcGFjZS5hY3Rpdml0eUlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogd29ya3NwYWNlLmFjdGl2aXR5TmFtZSxcbiAgICAgICAgICBjYXRlZ29yeTogd29ya3NwYWNlLmNhdGVnb3J5LFxuICAgICAgICAgIHR5cGU6IHN0YXRlLmlkLFxuICAgICAgICAgIHN0YXJ0VGltZTogd29ya3NwYWNlLnN0YXJ0VGltZSxcbiAgICAgICAgICBlbmRUaW1lOiBlbmRUaW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgZHVyYXRpb25NaW51dGVzLFxuICAgICAgICAgIHNraWxsczogd29ya3NwYWNlLnNraWxscyxcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCB0aGlzLmZpbmlzaFdvcmtzcGFjZShyZXN1bHQsIHdvcmtzcGFjZSk7XG4gICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIHtcbiAgICAgICAgLy8gRG9uJ3QgY2xvc2Ugb24gb3ZlcmxheSB0YXAgXHUyMDE0IHVzZXIgbXVzdCBjaG9vc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNsb3NlU2hlZXQgPSAoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZmluaXNoV29ya3NwYWNlKHJlc3VsdDogV29ya3NwYWNlUmVzdWx0LCB3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIDEuIENyZWF0ZSB3b3Jrc3BhY2UgbWFya2Rvd24gZmlsZSBpbiB0aGUgYWN0aXZpdHkgZm9sZGVyXG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IHdvcmtzcGFjZS5hY3Rpdml0eUlkKTtcbiAgICBpZiAoYWN0aXZpdHk/LmZvbGRlcikge1xuICAgICAgYXdhaXQgdGhpcy5jcmVhdGVXb3Jrc3BhY2VGaWxlKHJlc3VsdCwgYWN0aXZpdHkuZm9sZGVyKTtcbiAgICB9XG5cbiAgICAvLyAyLiBVcGRhdGUgdGhlIGFjdGl2aXR5J3MgZGFpbHkgbm90ZSBmcm9udG1hdHRlclxuICAgIGF3YWl0IHRoaXMubWFya0FjdGl2aXR5RG9uZSh3b3Jrc3BhY2UsIHJlc3VsdCk7XG5cbiAgICAvLyAzLiBBcHBseSBYUFxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSByZXN1bHQudHlwZSk7XG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnhwTXVsdGlwbGllciA+IDApIHtcbiAgICAgIGNvbnN0IHhwR2FpbiA9IE1hdGgucm91bmQodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbiAqIHN0YXRlLnhwTXVsdGlwbGllcik7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeVhQW3dvcmtzcGFjZS5jYXRlZ29yeV0gKz0geHBHYWluO1xuICAgIH1cblxuICAgIC8vIDQuIEFwcGx5IGJvc3MgZGFtYWdlICh1bmxlc3Mgc2tpcHBlZClcbiAgICBpZiAocmVzdWx0LnR5cGUgIT09IFwic2tpcHBlZFwiKSB7XG4gICAgICBjb25zdCBhY3QgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IHdvcmtzcGFjZS5hY3Rpdml0eUlkKTtcbiAgICAgIGlmIChhY3QpIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAtIGFjdC5kYW1hZ2VQZXJDb21wbGV0aW9uXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNS4gQ2xlYXIgYWN0aXZlIHdvcmtzcGFjZVxuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IG51bGw7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cbiAgICAvLyA2LiBTaG93IG5vdGljZVxuICAgIGNvbnN0IHN0YXRlTGFiZWwgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IHJlc3VsdC50eXBlKT8ubmFtZSA/PyByZXN1bHQudHlwZTtcbiAgICBuZXcgTm90aWNlKGAke3dvcmtzcGFjZS5lbW9qaX0gJHt3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lfSBcdTIwMTQgJHtzdGF0ZUxhYmVsfSBcdTAwQjcgJHtyZXN1bHQuZHVyYXRpb25NaW51dGVzfW1gKTtcblxuICAgIC8vIDcuIFN3aXRjaCBiYWNrIHRvIGRhc2hib2FyZFxuICAgIHRoaXMucGx1Z2luLmFjdGl2YXRlRGFzaGJvYXJkVmlldygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVXb3Jrc3BhY2VGaWxlKHJlc3VsdDogV29ya3NwYWNlUmVzdWx0LCBmb2xkZXI6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSByZXN1bHQuYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgcHJvcGVydHkgPSBhY3Rpdml0eT8ucHJvcGVydHkgPz8gcmVzdWx0LmFjdGl2aXR5TmFtZTtcblxuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZShyZXN1bHQuZW5kVGltZSk7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUocmVzdWx0LnN0YXJ0VGltZSk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGVuZFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgLy8gTmFtaW5nOiBcIldvcmtzcGFjZSBZWVlZLU1NLUREIEhITU1cIlxuICAgIGNvbnN0IHRpbWVTdHIgPSBgJHtTdHJpbmcoZW5kVGltZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIil9JHtTdHJpbmcoZW5kVGltZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYFdvcmtzcGFjZSAke2RhdGVTdHJ9ICR7dGltZVN0cn1gO1xuICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfS5tZGA7XG5cbiAgICAvLyBCdWlsZCB0aW1lem9uZS1hd2FyZSB0aW1lc3RhbXBcbiAgICBjb25zdCB0ek9mZnNldCA9IC1zdGFydFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBjb25zdCB0ekhvdXJzID0gU3RyaW5nKE1hdGguZmxvb3IoTWF0aC5hYnModHpPZmZzZXQpIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgY29uc3QgdHpNaW5zID0gU3RyaW5nKE1hdGguYWJzKHR6T2Zmc2V0KSAlIDYwKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgY29uc3QgdHpTaWduID0gdHpPZmZzZXQgPj0gMCA/IFwiK1wiIDogXCItXCI7XG4gICAgY29uc3QgdGltZXN0YW1wID0gc3RhcnRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgdHpTaWduICsgdHpIb3VycyArIFwiOlwiICsgdHpNaW5zO1xuXG4gICAgY29uc3QgZW5kVGltZXN0YW1wID0gZW5kVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKSArIHR6U2lnbiArIHR6SG91cnMgKyBcIjpcIiArIHR6TWlucztcblxuICAgIC8vIFBpY2sgYSBxdW90ZVxuICAgIGNvbnN0IHF1b3RlID0gRkFMTEJBQ0tfUVVPVEVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEZBTExCQUNLX1FVT1RFUy5sZW5ndGgpXTtcblxuICAgIC8vIENhcGl0YWxpemUgY29tcGxldGlvbiB0eXBlIHRvIG1hdGNoIGV4aXN0aW5nIGZvcm1hdCAoRGlzY2lwbGluZS9GbG93L1NraXBwZWQpXG4gICAgY29uc3QgdHlwZU5hbWUgPSByZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpO1xuICAgIGNvbnN0IGR1cmF0aW9uU3RyID0gYCR7TWF0aC5mbG9vcihyZXN1bHQuZHVyYXRpb25NaW51dGVzIC8gNjApfWggJHtyZXN1bHQuZHVyYXRpb25NaW51dGVzICUgNjB9bWA7XG5cbiAgICAvLyBCdWlsZCBmcm9udG1hdHRlclxuICAgIGNvbnN0IGZtTGluZXMgPSBbXG4gICAgICBcIi0tLVwiLFxuICAgICAgXCJlZGl0b3Itd2lkdGg6IDEwMFwiLFxuICAgICAgYCR7cHJvcGVydHl9OiB0cnVlYCxcbiAgICAgIGAke3Byb3BlcnR5fS1UeXBlOiBcIiR7dHlwZU5hbWV9XCJgLFxuICAgICAgYFRpbWVzdGFtcDogXCIke3RpbWVzdGFtcH1cImAsXG4gICAgICBgZW5kVGltZTogXCIke2VuZFRpbWVzdGFtcH1cImAsXG4gICAgICBgZHVyYXRpb246IFwiJHtkdXJhdGlvblN0cn1cImAsXG4gICAgICBgY2F0ZWdvcnk6IFwiJHtyZXN1bHQuY2F0ZWdvcnl9XCJgLFxuICAgICAgcmVzdWx0LnNraWxscy5sZW5ndGggPiAwXG4gICAgICAgID8gYHNraWxsczogWyR7cmVzdWx0LnNraWxscy5tYXAoKHMpID0+IGBcIiR7c31cImApLmpvaW4oXCIsIFwiKX1dYFxuICAgICAgICA6IFwic2tpbGxzOiBbXVwiLFxuICAgICAgXCJjc3NjbGFzc2VzOlwiLFxuICAgICAgXCIgIC0gaGlkZS1wcm9wZXJ0aWVzXCIsXG4gICAgICBcIi0tLVwiLFxuICAgIF07XG5cbiAgICBjb25zdCBib2R5ID0gW1xuICAgICAgXCJcIixcbiAgICAgIGAjICR7YWN0aXZpdHk/LmVtb2ppID8/IFwiXCJ9ICR7cmVzdWx0LmFjdGl2aXR5TmFtZX0gV29ya3NwYWNlYCxcbiAgICAgIFwiXCIsXG4gICAgICBgPiBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgICBgPiBcdTIwMTQgJHtxdW90ZS5hdHRyaWJ1dGlvbn1gLFxuICAgICAgXCJcIixcbiAgICAgIFwiIyMgTm90ZXNcIixcbiAgICAgIFwiXCIsXG4gICAgICBcIlwiLFxuICAgIF07XG5cbiAgICBjb25zdCBjb250ZW50ID0gWy4uLmZtTGluZXMsIC4uLmJvZHldLmpvaW4oXCJcXG5cIik7XG5cbiAgICAvLyBFbnN1cmUgZm9sZGVyIGV4aXN0c1xuICAgIGNvbnN0IGFic3RyYWN0Rm9sZGVyID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZvbGRlcik7XG4gICAgaWYgKCFhYnN0cmFjdEZvbGRlcikge1xuICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGZvbGRlcik7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGR1cGxpY2F0ZSBmaWxlbmFtZXNcbiAgICBsZXQgZmluYWxQYXRoID0gZmlsZVBhdGg7XG4gICAgY29uc3QgZXhpc3RpbmcgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpO1xuICAgIGlmIChleGlzdGluZykge1xuICAgICAgbGV0IGNvdW50ZXIgPSAyO1xuICAgICAgd2hpbGUgKHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9ICgke2NvdW50ZXJ9KS5tZGApKSB7XG4gICAgICAgIGNvdW50ZXIrKztcbiAgICAgIH1cbiAgICAgIGZpbmFsUGF0aCA9IGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0gKCR7Y291bnRlcn0pLm1kYDtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmluYWxQYXRoLCBjb250ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbWFya0FjdGl2aXR5RG9uZSh3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSwgcmVzdWx0PzogV29ya3NwYWNlUmVzdWx0KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gRmluZCB0b2RheSdzIG5vdGUgaW4gdGhlIGFjdGl2aXR5IGZvbGRlciBhbmQgc2V0IHRoZSBwcm9wZXJ0eSB0byB0cnVlXG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IHdvcmtzcGFjZS5hY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm47XG5cbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIExvb2sgZm9yIGEgZmlsZSBtYXRjaGluZyB0b2RheSdzIGRhdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCB0b2RheUZpbGUgPSBmaWxlcy5maW5kKFxuICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICk7XG5cbiAgICBpZiAodG9kYXlGaWxlKSB7XG4gICAgICAvLyBVcGRhdGUgZnJvbnRtYXR0ZXIgXHUyMDE0IHNldCBwcm9wZXJ0eSBhbmQgY29tcGxldGlvbiB0eXBlXG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIodG9kYXlGaWxlLCAoZnJvbnRtYXR0ZXIpID0+IHtcbiAgICAgICAgZnJvbnRtYXR0ZXJbYWN0aXZpdHkucHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gcmVzdWx0LnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQudHlwZS5zbGljZSgxKTtcbiAgICAgICAgICBmcm9udG1hdHRlcltgJHthY3Rpdml0eS5wcm9wZXJ0eX0tVHlwZWBdID0gdHlwZU5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDcmVhdGUgdGhlIGRhaWx5IG5vdGUgd2l0aCB0aGUgcHJvcGVydHkgc2V0XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHtkYXRlU3RyfS5tZGA7XG4gICAgICBjb25zdCB0eXBlTGluZSA9IHJlc3VsdFxuICAgICAgICA/IGBcXG4ke2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlOiBcIiR7cmVzdWx0LnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQudHlwZS5zbGljZSgxKX1cImBcbiAgICAgICAgOiBcIlwiO1xuICAgICAgY29uc3QgY29udGVudCA9IGAtLS1cXG4ke2FjdGl2aXR5LnByb3BlcnR5fTogdHJ1ZSR7dHlwZUxpbmV9XFxuLS0tXFxuYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgY29udGVudCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gRmlsZSBtaWdodCBhbHJlYWR5IGV4aXN0IHdpdGggYSBkaWZmZXJlbnQgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VGltZShzZWNvbmRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgICBjb25zdCBtID0gTWF0aC5mbG9vcigoc2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgIGNvbnN0IHMgPSBzZWNvbmRzICUgNjA7XG4gICAgaWYgKGggPiAwKSB7XG4gICAgICByZXR1cm4gYCR7aH06JHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfToke1N0cmluZyhzKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7U3RyaW5nKHMpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICB9XG59XG5cbi8vIFV0aWxpdHlcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBTZXR0aW5ncyBUYWJcbi8vIENvbGxhcHNpYmxlIHNlY3Rpb25zIGZvciBhbGwgcGx1Z2luIGNvbmZpZ3VyYXRpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFRleHRDb21wb25lbnQsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpdml0eUNvbmZpZywgQ2F0ZWdvcnksIFRlbXBsZVRhc2ssIEdlbmRlciwgV2VpZ2h0TG9nRnJlcXVlbmN5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfREVWX0NPTkZJRyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIE9sZW5TZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgY29udGFpbmVyRWwuYWRkQ2xhc3MoXCJvbGVuLXNldHRpbmdzXCIpO1xuXG4gICAgLy8gSGVhZGVyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJPbGVuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMS40ZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi1ib3R0b206IDRweDsgcGFkZGluZzogOHB4IDA7XCIgfSxcbiAgICB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICB0ZXh0OiBcIk15dGhvbG9naWNhbCBMaWZlLU9wZXJhdGluZyBTeXN0ZW1cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMTZweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gUXVpY2sgc3RhdHVzIGJhclxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFyKGNvbnRhaW5lckVsKTtcblxuICAgIC8vIFNlY3Rpb25zXG4gICAgdGhpcy5yZW5kZXJQcm9maWxlU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJQZXJzb25hbFN0YXRzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJDYXRlZ29yaWVzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckNhbGVuZGFyU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUaGVtZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckRldkRhc2hib2FyZFNlY3Rpb24oY29udGFpbmVyRWwpO1xuICB9XG5cbiAgLy8gLS0tIENvbGxhcHNpYmxlIFNlY3Rpb24gSGVscGVyIC0tLVxuXG4gIHByaXZhdGUgY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKFxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBpY29uOiBzdHJpbmcsXG4gICAgZGVmYXVsdE9wZW4gPSBmYWxzZVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHBhcmVudC5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlciA9IHNlY3Rpb24uY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogZGVmYXVsdE9wZW4gPyBcIlxcdTI1QkNcIiA6IFwiXFx1MjVCNlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDEwcHg7IHdpZHRoOiAxMnB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGljb24gPyBgJHtpY29ufSAgJHt0aXRsZX1gIDogdGl0bGUsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45NWVtO1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBib2R5ID0gc2VjdGlvbi5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjogeyBzdHlsZTogYHBhZGRpbmc6IDAgMTZweDsgZGlzcGxheTogJHtkZWZhdWx0T3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtgIH0sXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IGJvZHkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG4gICAgICBib2R5LnN0eWxlLmRpc3BsYXkgPSBpc09wZW4gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgIGJvZHkuc3R5bGUucGFkZGluZyA9IGlzT3BlbiA/IFwiMCAxNnB4XCIgOiBcIjEycHggMTZweFwiO1xuICAgICAgYXJyb3cudGV4dENvbnRlbnQgPSBpc09wZW4gPyBcIlxcdTI1QjZcIiA6IFwiXFx1MjVCQ1wiO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlZmF1bHRPcGVuKSBib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjEycHggMTZweFwiO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgLy8gLS0tIFN0YXR1cyBCYXIgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNCYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGhwUGVyY2VudCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUCA+IDBcbiAgICAgID8gTWF0aC5yb3VuZCgodGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAvIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUCkgKiAxMDApXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCBiYXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7IG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpOyBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBgVGllciAke3RoaXMucGx1Z2luLnNldHRpbmdzLmN1cnJlbnRUaWVyfS8xM2AgfSk7XG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBgSFAgJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQfS8ke3RoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUH0gKCR7aHBQZXJjZW50fSUpYCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuaW5UYXJ0YXJ1c1xuICAgICAgPyBcIlRBUlRBUlVTXCJcbiAgICAgIDogdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCJcbiAgICAgICAgPyBcIlBBVVNFRFwiXG4gICAgICAgIDogXCJBQ1RJVkVcIjtcbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IHN0YXRlLFxuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAke3RoaXMucGx1Z2luLnNldHRpbmdzLmluVGFydGFydXMgPyBcInZhcigtLXRleHQtZXJyb3IpXCIgOiBcInZhcigtLXRleHQtbm9ybWFsKVwifTtgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogdGhpcy5wbHVnaW4uc2V0dGluZ3MubWlncmF0ZWQgPyBcIk1pZ3JhdGVkXCIgOiBcIk5vdCBtaWdyYXRlZFwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXN0eWxlOiBpdGFsaWM7XCIgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBQcm9maWxlIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyUHJvZmlsZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiUHJvZmlsZVwiLCBcIlxcdXsxRjQ2NH1cIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJOYW1lXCIpXG4gICAgICAuc2V0RGVzYyhcIllvdXIgbmFtZSBmb3IgdGhlIGRhc2hib2FyZCBncmVldGluZ1wiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlck5hbWUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlck5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTXkgV2h5XCIpXG4gICAgICAuc2V0RGVzYyhcIllvdXIgY29yZSBtb3RpdmF0aW9uIFx1MjAxNCBzaG93biBwZXJpb2RpY2FsbHkgb24gdGhlIGRhc2hib2FyZFwiKVxuICAgICAgLmFkZFRleHRBcmVhKChhcmVhKSA9PlxuICAgICAgICBhcmVhXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm15V2h5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm15V2h5ID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkhlcm8gYmFja2dyb3VuZCBpbWFnZVwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBwYXRoIHRvIHRoZSBoZXJvIGJhY2tncm91bmQgaW1hZ2UgKGUuZy4sIGltYWdlcy9oZXJvLmpwZylcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwicGF0aC90by9pbWFnZS5qcGdcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVyb0JhY2tncm91bmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSG9tZXBhZ2VcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZmlsZSB0byBvcGVuIHdoZW4gYWN0aXZpdGllcyBhcmUgc2V0IHRvICdPcGVuIGhvbWVwYWdlJyBhZnRlciBjb21wbGV0aW9uIChlLmcuIEhvbWUubWQpXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcImUuZy4gSG9tZS5tZFwiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob21lcGFnZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ob21lcGFnZSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvLyAtLS0gUGVyc29uYWwgU3RhdHMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJQZXJzb25hbFN0YXRzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJQZXJzb25hbCBTdGF0c1wiLCBcIlxcdXsxRjRDQX1cIik7XG4gICAgY29uc3Qgc3RhdHMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiR2VuZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlVzZWQgdG8gc2hvdyB0aGUgY29ycmVjdCBtdXNjbGUgZmlndXJlIG9uIHRoZSBoZWF0bWFwXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7IG1hbGU6IFwiTWFsZVwiLCBmZW1hbGU6IFwiRmVtYWxlXCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoc3RhdHMuZ2VuZGVyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5nZW5kZXIgPSB2IGFzIEdlbmRlcjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSGVpZ2h0IChjbSlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKHN0YXRzLmhlaWdodCA/IFN0cmluZyhzdGF0cy5oZWlnaHQpIDogXCJcIilcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIDE3NVwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wZXJzb25hbFN0YXRzLmhlaWdodCA9IG47XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiQmlydGhkYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIlVzZWQgdG8gY2FsY3VsYXRlIHlvdXIgYWdlIGZvciB0aGUgc3RyZW5ndGggY2FsY3VsYXRvclwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoc3RhdHMuYmlydGhkYXRlKVxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIllZWVktTU0tRERcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGlmICgvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9JC8udGVzdCh2KSB8fCB2ID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuYmlydGhkYXRlID0gdjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBBZ2UgZGlzcGxheVxuICAgIGlmIChzdGF0cy5iaXJ0aGRhdGUpIHtcbiAgICAgIGNvbnN0IGFnZSA9IHRoaXMuY2FsY3VsYXRlQWdlKHN0YXRzLmJpcnRoZGF0ZSk7XG4gICAgICBib2R5LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgdGV4dDogYEFnZTogJHthZ2V9IHllYXJzYCxcbiAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiAxMnB4OyBwYWRkaW5nLWxlZnQ6IDRweDtcIiB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gV2VpZ2h0IHNlY3Rpb25cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJDdXJyZW50IHdlaWdodCAoa2cpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShzdGF0cy5jdXJyZW50V2VpZ2h0ID8gU3RyaW5nKHN0YXRzLmN1cnJlbnRXZWlnaHQpIDogXCJcIilcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIDYxXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gcGFyc2VGbG9hdCh2KTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy5jdXJyZW50V2VpZ2h0ID0gbjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJXZWlnaHQgbG9nZ2luZyBmcmVxdWVuY3lcIilcbiAgICAgIC5zZXREZXNjKFwiSG93IG9mdGVuIHlvdSB3YW50IHRvIGJlIHJlbWluZGVkIHRvIGxvZyB5b3VyIHdlaWdodFwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoe1xuICAgICAgICAgIFwidHdpY2UtYS13ZWVrXCI6IFwiVHdpY2UgYSB3ZWVrXCIsXG4gICAgICAgICAgXCJldmVyeS13ZWVrXCI6IFwiRXZlcnkgd2Vla1wiLFxuICAgICAgICAgIFwiZXZlcnktMi13ZWVrc1wiOiBcIkV2ZXJ5IDIgd2Vla3NcIixcbiAgICAgICAgICBcImV2ZXJ5LTMtZGF5c1wiOiBcIkV2ZXJ5IDMgZGF5c1wiLFxuICAgICAgICAgIFwiZXZlcnktNS1kYXlzXCI6IFwiRXZlcnkgNSBkYXlzXCIsXG4gICAgICAgICAgXCJjdXN0b21cIjogXCJDdXN0b20gaW50ZXJ2YWxcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoc3RhdHMud2VpZ2h0TG9nRnJlcXVlbmN5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2dGcmVxdWVuY3kgPSB2IGFzIFdlaWdodExvZ0ZyZXF1ZW5jeTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBpZiAoc3RhdHMud2VpZ2h0TG9nRnJlcXVlbmN5ID09PSBcImN1c3RvbVwiKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShcIkN1c3RvbSBpbnRlcnZhbCAoZGF5cylcIilcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRWYWx1ZShTdHJpbmcoc3RhdHMud2VpZ2h0TG9nQ3VzdG9tRGF5cykpXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2dDdXN0b21EYXlzID0gbjtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBMb2cgd2VpZ2h0IGJ1dHRvblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkxvZyBjdXJyZW50IHdlaWdodFwiKVxuICAgICAgLnNldERlc2MoXCJTYXZlIHRvZGF5J3Mgd2VpZ2h0IHRvIHlvdXIgcHJvZ3Jlc3MgaGlzdG9yeVwiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkxvZyBXZWlnaHRcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMuY3VycmVudFdlaWdodDtcbiAgICAgICAgICBpZiAoIXcgfHwgdyA8PSAwKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiRW50ZXIgeW91ciBjdXJyZW50IHdlaWdodCBmaXJzdFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgICAgIC8vIEF2b2lkIGR1cGxpY2F0ZSBmb3IgdG9kYXlcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMud2VpZ2h0TG9nLmZpbmQoKGUpID0+IGUuZGF0ZSA9PT0gdG9kYXkpO1xuICAgICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgICAgZXhpc3Rpbmcud2VpZ2h0ID0gdztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGVyc29uYWxTdGF0cy53ZWlnaHRMb2cucHVzaCh7IGRhdGU6IHRvZGF5LCB3ZWlnaHQ6IHcgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBlcnNvbmFsU3RhdHMubGFzdFdlaWdodExvZ0RhdGUgPSB0b2RheTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICBuZXcgTm90aWNlKGBXZWlnaHQgbG9nZ2VkOiAke3d9IGtnYCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gV2VpZ2h0IGhpc3RvcnkgKGxhc3QgMTAgZW50cmllcylcbiAgICBjb25zdCBsb2cgPSBzdGF0cy53ZWlnaHRMb2c7XG4gICAgaWYgKGxvZy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBoaXN0b3J5RWwgPSBib2R5LmNyZWF0ZURpdih7XG4gICAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiA4cHggMDsgcGFkZGluZzogOHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDZweDtcIiB9LFxuICAgICAgfSk7XG4gICAgICBoaXN0b3J5RWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICB0ZXh0OiBcIldlaWdodCBIaXN0b3J5XCIsXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjllbTsgbWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc29ydGVkID0gWy4uLmxvZ10uc29ydCgoYSwgYikgPT4gYi5kYXRlLmxvY2FsZUNvbXBhcmUoYS5kYXRlKSk7XG4gICAgICBjb25zdCByZWNlbnQgPSBzb3J0ZWQuc2xpY2UoMCwgMTApO1xuXG4gICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIHJlY2VudCkge1xuICAgICAgICBoaXN0b3J5RWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgIHRleHQ6IGAke2VudHJ5LmRhdGV9OiAke2VudHJ5LndlaWdodH0ga2dgLFxuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjhlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBwYWRkaW5nOiAycHggMDtcIiB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHNvcnRlZC5sZW5ndGggPiAxMCkge1xuICAgICAgICBoaXN0b3J5RWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgIHRleHQ6IGAuLi4gYW5kICR7c29ydGVkLmxlbmd0aCAtIDEwfSBtb3JlIGVudHJpZXNgLFxuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjc1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgZm9udC1zdHlsZTogaXRhbGljO1wiIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQWdlKGJpcnRoZGF0ZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBiaXJ0aCA9IG5ldyBEYXRlKGJpcnRoZGF0ZSk7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgYWdlID0gbm93LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aC5nZXRGdWxsWWVhcigpO1xuICAgIGNvbnN0IG1vbnRoRGlmZiA9IG5vdy5nZXRNb250aCgpIC0gYmlydGguZ2V0TW9udGgoKTtcbiAgICBpZiAobW9udGhEaWZmIDwgMCB8fCAobW9udGhEaWZmID09PSAwICYmIG5vdy5nZXREYXRlKCkgPCBiaXJ0aC5nZXREYXRlKCkpKSB7XG4gICAgICBhZ2UtLTtcbiAgICB9XG4gICAgcmV0dXJuIGFnZTtcbiAgfVxuXG4gIC8vIC0tLSBBY3Rpdml0aWVzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQWN0aXZpdGllc1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQWN0aXZpdGllc1wiLCBcIlxcdXsxRjNBRn1cIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpXTtcbiAgICAgIHRoaXMucmVuZGVyQWN0aXZpdHlJdGVtKGJvZHksIGFjdGl2aXR5LCBpKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBBY3Rpdml0eVwiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdBY3Rpdml0eTogQWN0aXZpdHlDb25maWcgPSB7XG4gICAgICAgICAgICBpZDogYGN1c3RvbS0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG5hbWU6IFwiTmV3IEFjdGl2aXR5XCIsXG4gICAgICAgICAgICBlbW9qaTogXCJcXHUyQjUwXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBmb2xkZXI6IFwiXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJcIixcbiAgICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsXG4gICAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IDMsXG4gICAgICAgICAgICB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICAgICAgICAgIGhhc1dvcmtzcGFjZTogZmFsc2UsXG4gICAgICAgICAgICBwcmlvcml0eTogNSxcbiAgICAgICAgICAgIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgICAgICAgICBwcmVmZXJyZWRUaW1lOiBcImFueXRpbWVcIixcbiAgICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMucHVzaChuZXdBY3Rpdml0eSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0eUl0ZW0oY29udGFpbmVyOiBIVE1MRWxlbWVudCwgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gSGVhZGVyIHJvdyB3aXRoIHRvZ2dsZVxuICAgIG5ldyBTZXR0aW5nKHdyYXBwZXIpXG4gICAgICAuc2V0TmFtZShgJHthY3Rpdml0eS5lbW9qaX0gJHthY3Rpdml0eS5uYW1lfWApXG4gICAgICAuc2V0RGVzYyhgJHthY3Rpdml0eS5jYXRlZ29yeX0gXHUwMEI3ICR7YWN0aXZpdHkuZm9sZGVyIHx8IFwibm8gZm9sZGVyIHNldFwifWApXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZShhY3Rpdml0eS5lbmFibGVkKS5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbmFibGVkID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gRXhwYW5kYWJsZSBkZXRhaWxzXG4gICAgY29uc3QgZGV0YWlsc1RvZ2dsZSA9IHdyYXBwZXIuY3JlYXRlRWwoXCJkZXRhaWxzXCIpO1xuICAgIGRldGFpbHNUb2dnbGUuY3JlYXRlRWwoXCJzdW1tYXJ5XCIsIHtcbiAgICAgIHRleHQ6IFwiQ29uZmlndXJlXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXRhaWxzID0gZGV0YWlsc1RvZ2dsZS5jcmVhdGVEaXYoKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIk5hbWVcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5Lm5hbWUpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLm5hbWUgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVtb2ppXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5lbW9qaSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uZW1vamkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkNhdGVnb3J5XCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7IGJvZHk6IFwiQm9keVwiLCBtaW5kOiBcIk1pbmRcIiwgc3Bpcml0OiBcIlNwaXJpdFwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LmNhdGVnb3J5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2F0ZWdvcnkgPSB2IGFzIENhdGVnb3J5O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBY3Rpdml0eSBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIHdpdGggWVlZWS1NTS1ERCBub3RlcyBhbmQgd29ya3NwYWNlIGxvZ3NcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LmZvbGRlcikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uZm9sZGVyID0gdjtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJGcm9udG1hdHRlciBwcm9wZXJ0eVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkucHJvcGVydHkpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByb3BlcnR5ID0gdjtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJXZWVrbHkgdGFyZ2V0XCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCA3LCAxKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS53ZWVrbHlUYXJnZXQpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLndlZWtseVRhcmdldCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlByaW9yaXR5ICgxLTEwKVwiKVxuICAgICAgLmFkZFNsaWRlcigocykgPT5cbiAgICAgICAgcy5zZXRMaW1pdHMoMSwgMTAsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnByaW9yaXR5KVxuICAgICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5wcmlvcml0eSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlByZWZlcnJlZCB0aW1lXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7XG4gICAgICAgICAgbW9ybmluZzogXCJNb3JuaW5nXCIsIGFmdGVybm9vbjogXCJBZnRlcm5vb25cIixcbiAgICAgICAgICBldmVuaW5nOiBcIkV2ZW5pbmdcIiwgYW55dGltZTogXCJBbnl0aW1lXCIsXG4gICAgICAgIH0pXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnByZWZlcnJlZFRpbWUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5wcmVmZXJyZWRUaW1lID0gdiBhcyBhbnk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIk5lZ2xlY3QgdGhyZXNob2xkIChkYXlzKVwiKVxuICAgICAgLmFkZFNsaWRlcigocykgPT5cbiAgICAgICAgcy5zZXRMaW1pdHMoMSwgMTQsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5Lm5lZ2xlY3RUaHJlc2hvbGQpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLm5lZ2xlY3RUaHJlc2hvbGQgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJFc3RpbWF0ZWQgZHVyYXRpb24gKG1pbnV0ZXMpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShTdHJpbmcoYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24pKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUludCh2KTtcbiAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lc3RpbWF0ZWREdXJhdGlvbiA9IG47XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiSGFzIHdvcmtzcGFjZVwiKVxuICAgICAgLnNldERlc2MoXCJPcGVucyB3b3Jrc3BhY2UgdmlldyB3aXRoIHRpbWVyIHdoZW4gc3RhcnRlZCwgaW5zdGVhZCBvZiBtYXJraW5nIGRvbmUgaW1tZWRpYXRlbHlcIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKGFjdGl2aXR5Lmhhc1dvcmtzcGFjZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5oYXNXb3Jrc3BhY2UgPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldvcmtzcGFjZSB0ZW1wbGF0ZVwiKVxuICAgICAgLnNldERlc2MoXCJCdWlsdC1pbiB0ZW1wbGF0ZSBJRCAoZS5nLiAnd29ya291dCcpIG9yIHZhdWx0IHBhdGggdG8gLmpzIGZpbGUuIExlYXZlIGVtcHR5IGZvciBkZWZhdWx0IHdvcmtzcGFjZS5cIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiZS5nLiB3b3Jrb3V0XCIpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS53b3Jrc3BhY2VUZW1wbGF0ZSA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnRlbXBsYXRlRW5naW5lLmludmFsaWRhdGVDYWNoZSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJTa2lsbCBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGNvbnRhaW5pbmcgc2tpbGwgdHJlZSBub3Rlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIEhvbWUvU3RhcnRzL0RyYXdpbmcvU2tpbGwgdHJlZVwiKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5za2lsbEZvbGRlciA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uc2tpbGxGb2xkZXIgPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkFmdGVyIGNvbXBsZXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiV2hlcmUgdG8gZ28gYWZ0ZXIgZmluaXNoaW5nIHRoaXMgYWN0aXZpdHlcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBkYXNoYm9hcmQ6IFwiUmV0dXJuIHRvIE9sZW4gRGFzaGJvYXJkXCIsXG4gICAgICAgICAgc3RheTogXCJTdGF5IG9uIG5vdGVcIixcbiAgICAgICAgICBob21lcGFnZTogXCJPcGVuIGhvbWVwYWdlXCIsXG4gICAgICAgIH0pXG4gICAgICAgICAgLnNldFZhbHVlKFxuICAgICAgICAgICAgIWFjdGl2aXR5LmNvbXBsZXRpb25SZXR1cm5UbyB8fCBhY3Rpdml0eS5jb21wbGV0aW9uUmV0dXJuVG8gPT09IFwiZGFzaGJvYXJkXCJcbiAgICAgICAgICAgICAgPyBcImRhc2hib2FyZFwiXG4gICAgICAgICAgICAgIDogYWN0aXZpdHkuY29tcGxldGlvblJldHVyblRvID09PSBcInN0YXlcIlxuICAgICAgICAgICAgICAgID8gXCJzdGF5XCJcbiAgICAgICAgICAgICAgICA6IFwiaG9tZXBhZ2VcIlxuICAgICAgICAgIClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmNvbXBsZXRpb25SZXR1cm5UbyA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkJsb2NrcyAoY29tbWEtc2VwYXJhdGVkIGFjdGl2aXR5IElEcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKChhY3Rpdml0eS5ibG9ja3MgPz8gW10pLmpvaW4oXCIsIFwiKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5ibG9ja3MgPSB2LnNwbGl0KFwiLFwiKS5tYXAoKHMpID0+IHMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQWx0ZXJuYXRlcyB3aXRoIChhY3Rpdml0eSBJRClcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoID8/IFwiXCIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uYWx0ZXJuYXRlc1dpdGggPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQ2hhaW4gYWZ0ZXIgKGFjdGl2aXR5IElEKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoYWN0aXZpdHkuY2hhaW5BZnRlciA/PyBcIlwiKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmNoYWluQWZ0ZXIgPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gRGVsZXRlIGJ1dHRvblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0blxuICAgICAgICAgIC5zZXRCdXR0b25UZXh0KFwiRGVsZXRlIEFjdGl2aXR5XCIpXG4gICAgICAgICAgLnNldFdhcm5pbmcoKVxuICAgICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2F0ZWdvcmllcyAtLS1cblxuICBwcml2YXRlIHJlbmRlckNhdGVnb3JpZXNTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkNhdGVnb3JpZXNcIiwgXCJcXHV7MUYzQTh9XCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllczogeyBrZXk6IENhdGVnb3J5OyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcbiAgICAgIHsga2V5OiBcImJvZHlcIiwgbGFiZWw6IFwiQm9keVwiIH0sXG4gICAgICB7IGtleTogXCJtaW5kXCIsIGxhYmVsOiBcIk1pbmRcIiB9LFxuICAgICAgeyBrZXk6IFwic3Bpcml0XCIsIGxhYmVsOiBcIlNwaXJpdFwiIH0sXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKGAke2NhdC5sYWJlbH0gY29sb3JgKVxuICAgICAgICAuYWRkQ29sb3JQaWNrZXIoKGNwKSA9PlxuICAgICAgICAgIGNwXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV0pXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV0gPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiVGl0bGUgb3ZlcnJpZGVcIilcbiAgICAgIC5zZXREZXNjKFwiT3ZlcnJpZGUgdGhlIGR5bmFtaWMgdGl0bGUgKGxlYXZlIGVtcHR5IGZvciBhdXRvKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudGl0bGVPdmVycmlkZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvLyAtLS0gVGVtcGxlIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyVGVtcGxlU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJUZW1wbGUgVXBrZWVwXCIsIFwiXFx1ezFGM0RCfVxcdUZFMEZcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV07XG5cbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKGAke3Rhc2suZW1vaml9ICR7dGFzay5uYW1lfWApXG4gICAgICAgIC5zZXREZXNjKGBFdmVyeSAke3Rhc2suaW50ZXJ2YWxEYXlzfSBkYXkocylgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiTmFtZVwiKS5zZXRWYWx1ZSh0YXNrLm5hbWUpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5uYW1lID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIkRheXNcIikuc2V0VmFsdWUoU3RyaW5nKHRhc2suaW50ZXJ2YWxEYXlzKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUludCh2KTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0uaW50ZXJ2YWxEYXlzID0gbjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiRW1vamlcIikuc2V0VmFsdWUodGFzay5lbW9qaSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLmVtb2ppID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIFRlbXBsZSBUYXNrXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrcy5wdXNoKHtcbiAgICAgICAgICBpZDogYHRlbXBsZS0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICBuYW1lOiBcIk5ldyBUYXNrXCIsXG4gICAgICAgICAgbGFzdENvbXBsZXRlZDogbnVsbCxcbiAgICAgICAgICBpbnRlcnZhbERheXM6IDcsXG4gICAgICAgICAgZW1vamk6IFwiXFx1MjcyOFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQ2FsZW5kYXJTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkNhbGVuZGFyIEludGVncmF0aW9uXCIsIFwiXFx1ezFGNEM1fVwiKTtcblxuICAgIGJvZHkuY3JlYXRlRWwoXCJwXCIsIHtcbiAgICAgIHRleHQ6IFwiTWVyZ2UgZXh0ZXJuYWwgdGFza3MgaW50byB5b3VyIERheSBNYXAgdGltZWxpbmUuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDhweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gT3B0aW9uIEE6IERhaWx5IE5vdGVzXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRGFpbHkgTm90ZXMgaW50ZWdyYXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiUGFyc2UgdGFza3MgZnJvbSB5b3VyIGRhaWx5IG5vdGVzICgtIFsgXSBUYXNrIEB0aW1lIH4zMG0pXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMgPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkRhaWx5IE5vdGVzIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBZWVlZLU1NLURELm1kIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIkRhaWx5IE5vdGVzXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gT3B0aW9uIEI6IFRhc2tzIFBsdWdpblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlRhc2tzIFBsdWdpbiBpbnRlZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJSZWFkIHRhc2tzIHdpdGggZHVlIGRhdGVzIGZyb20gdGhlIFRhc2tzIHBsdWdpblwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4pLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4gPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIE9wdGlvbiBDOiBRdWljayBUYXNrc1xuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlF1aWNrIFRhc2tzXCIpXG4gICAgICAuc2V0RGVzYyhcIk9sZW4ncyBidWlsdC1pbiB0YXNrIHN5c3RlbVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBRdWljayBUYXNrcyBsaXN0XG4gICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgICA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuICAgICAgY29uc3QgdG9kYXlUYXNrcyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MuZmlsdGVyKFxuICAgICAgICAocXQpID0+IHF0LmRhdGUgPT09IHRvZGF5XG4gICAgICApO1xuXG4gICAgICBpZiAodG9kYXlUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RFbCA9IGJvZHkuY3JlYXRlRGl2KHtcbiAgICAgICAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogOHB4IDA7IHBhZGRpbmc6IDhweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiA2cHg7XCIgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlzdEVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgICB0ZXh0OiBcIlRvZGF5J3MgUXVpY2sgVGFza3NcIixcbiAgICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45ZW07IG1hcmdpbi1ib3R0b206IDZweDtcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBxdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NbaV07XG4gICAgICAgICAgaWYgKHF0LmRhdGUgIT09IHRvZGF5KSBjb250aW51ZTtcblxuICAgICAgICAgIG5ldyBTZXR0aW5nKGxpc3RFbClcbiAgICAgICAgICAgIC5zZXROYW1lKGAke3F0LmRvbmUgPyBcIlxcdTI3MTNcIiA6IFwiXFx1MjVDQlwifSAke3F0LnRpdGxlfWApXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgW3F0LnRpbWUsIHF0LmR1cmF0aW9uID8gYCR7cXQuZHVyYXRpb259bWAgOiBcIlwiXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcdTAwQjcgXCIpIHx8IFwiTm8gdGltZSBzZXRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkRlbGV0ZVwiKS5zZXRXYXJuaW5nKCkub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIFF1aWNrIFRhc2tcIikub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgKHRoaXMucGx1Z2luIGFzIGFueSkuc2hvd1F1aWNrVGFza0RpYWxvZygpO1xuICAgICAgICAgIC8vIENsb3NlIHNldHRpbmdzIFx1MjAxNCB0aGUgZGlhbG9nIGFwcGVhcnMgb24gdG9wXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUaGVtZSAtLS1cblxuICBwcml2YXRlIHJlbmRlclRoZW1lU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJUaGVtZVwiLCBcIlxcdXsxRjNBOH1cIik7XG5cbiAgICBjb25zdCB0aGVtZUZpZWxkczogeyBrZXk6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZGVmYXVsdFZhbDogc3RyaW5nIH1bXSA9IFtcbiAgICAgIHsga2V5OiBcImJnUHJpbWFyeVwiLCBsYWJlbDogXCJCYWNrZ3JvdW5kXCIsIGRlZmF1bHRWYWw6IFwiIzBjMGEwOVwiIH0sXG4gICAgICB7IGtleTogXCJ0ZXh0UHJpbWFyeVwiLCBsYWJlbDogXCJUZXh0XCIsIGRlZmF1bHRWYWw6IFwiI2Y1ZjBlOFwiIH0sXG4gICAgICB7IGtleTogXCJ0ZXh0TXV0ZWRcIiwgbGFiZWw6IFwiTXV0ZWQgdGV4dFwiLCBkZWZhdWx0VmFsOiBcIiM5MjhkODVcIiB9LFxuICAgICAgeyBrZXk6IFwiYWNjZW50R29sZFwiLCBsYWJlbDogXCJBY2NlbnQgKGdvbGQpXCIsIGRlZmF1bHRWYWw6IFwiI2M5YTg0Y1wiIH0sXG4gICAgICB7IGtleTogXCJkYW5nZXJcIiwgbGFiZWw6IFwiRGFuZ2VyXCIsIGRlZmF1bHRWYWw6IFwiIzhiMmQzNVwiIH0sXG4gICAgICB7IGtleTogXCJzdWNjZXNzXCIsIGxhYmVsOiBcIlN1Y2Nlc3NcIiwgZGVmYXVsdFZhbDogXCIjZDQ5NDBhXCIgfSxcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGVtZUZpZWxkcykge1xuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoZmllbGQubGFiZWwpXG4gICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+XG4gICAgICAgICAgY3BcbiAgICAgICAgICAgIC5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzIGFzIGFueSk/LltmaWVsZC5rZXldID8/IGZpZWxkLmRlZmF1bHRWYWxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgYXMgYW55KVtmaWVsZC5rZXldID0gdjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJSZXNldCB0byBFbHlzaWFuIERhcmtcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzID0ge307XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgbmV3IE5vdGljZShcIlRoZW1lIHJlc2V0IHRvIEVseXNpYW4gRGFyayBkZWZhdWx0c1wiKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBBZHZhbmNlZCAtLS1cblxuICBwcml2YXRlIHJlbmRlckFkdmFuY2VkU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJBZHZhbmNlZFwiLCBcIlxcdTI2OTlcXHVGRTBGXCIpO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiU2ltdWxhdGVkIGRhdGVcIilcbiAgICAgIC5zZXREZXNjKFwiT3ZlcnJpZGUgdG9kYXkncyBkYXRlIGZvciB0ZXN0aW5nIChZWVlZLU1NLUREKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJZWVlZLU1NLUREXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSB2LnRyaW0oKSB8fCBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJTeXN0ZW0gc3RhdGVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZFxuICAgICAgICAgIC5hZGRPcHRpb25zKHsgYWN0aXZlOiBcIkFjdGl2ZVwiLCBwYXVzZWQ6IFwiUGF1c2VkXCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHYgYXMgXCJhY3RpdmVcIiB8IFwicGF1c2VkXCI7XG4gICAgICAgICAgICBpZiAobmV3U3RhdGUgPT09IFwicGF1c2VkXCIgJiYgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXRlID09PSBcImFjdGl2ZVwiICYmIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdXNlZE1zID0gRGF0ZS5ub3coKSAtIG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lICs9IHBhdXNlZE1zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlF1b3RlIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBxdW90ZSBmaWxlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJRdW90ZXMvU3RvaWNcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUmUtcnVuIG1pZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJSZS1pbXBvcnQgZGF0YSBmcm9tIHRoZSBNeXRob2xvZ2ljYWwgSGFiaXQgVHJhY2tlciBwbHVnaW5cIilcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJNaWdyYXRlXCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5taWdyYXRlZCA9IGZhbHNlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIC8vIFJlbG9hZCB0aGUgcGx1Z2luIHRvIHRyaWdnZXIgbWlncmF0aW9uXG4gICAgICAgICAgYXdhaXQgKHRoaXMucGx1Z2luIGFzIGFueSkub25sb2FkKCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgbmV3IE5vdGljZShcIk1pZ3JhdGlvbiBjb21wbGV0ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvLyAtLS0gRGV2ZWxvcGVyIERhc2hib2FyZCAtLS1cblxuICBwcml2YXRlIHJlbmRlckRldkRhc2hib2FyZFNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiRGV2ZWxvcGVyIERhc2hib2FyZFwiLCBcIlxcdXsxRjZFMH1cXHVGRTBGXCIpO1xuXG4gICAgYm9keS5jcmVhdGVFbChcInBcIiwge1xuICAgICAgdGV4dDogXCJFZGl0IHRoZSByYXcgZGV2Q29uZmlnIEpTT04uIENoYW5nZXMgYXJlIGFwcGxpZWQgb24gc2F2ZS5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0YXJlYSA9IGJvZHkuY3JlYXRlRWwoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDMwMHB4OyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTsgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4OyByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZywgbnVsbCwgMik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlNhdmUgZGV2Q29uZmlnXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHRleHRhcmVhLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBERUZBVUxUX0RFVl9DT05GSUcsXG4gICAgICAgICAgICAgIHBhcnNlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaERhc2hib2FyZCgpO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcImRldkNvbmZpZyBzYXZlZCBhbmQgYXBwbGllZFwiKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJJbnZhbGlkIEpTT04gXHUyMDE0IHBsZWFzZSBjaGVjayBzeW50YXhcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlJlc2V0IHRvIGRlZmF1bHRzXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZyA9IHsgLi4uREVGQVVMVF9ERVZfQ09ORklHIH07XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcsIG51bGwsIDIpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoXCJkZXZDb25maWcgcmVzZXQgdG8gZGVmYXVsdHNcIik7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gRXhwb3J0L0ltcG9ydFxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkV4cG9ydCBhbGwgc2V0dGluZ3NcIilcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJDb3B5IHRvIGNsaXBib2FyZFwiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MsIG51bGwsIDIpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChqc29uKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJTZXR0aW5ncyBjb3BpZWQgdG8gY2xpcGJvYXJkXCIpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIG1vYmlsZSBcdTIwMTQgc2hvdyBpbiBhIHRleHRhcmVhIGZvciBtYW51YWwgY29weVxuICAgICAgICAgICAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICB0YS52YWx1ZSA9IGpzb247XG4gICAgICAgICAgICB0YS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NTAlO3otaW5kZXg6OTk5OTtmb250LXNpemU6MTFweDtcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGEpO1xuICAgICAgICAgICAgdGEuc2VsZWN0KCk7XG4gICAgICAgICAgICB0YS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB0YS5yZW1vdmUoKSk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiVGFwIHRoZSB0ZXh0IGFyZWEgYW5kIGNvcHkgbWFudWFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkltcG9ydCBzZXR0aW5nc1wiKVxuICAgICAgLmFkZFRleHRBcmVhKChhcmVhKSA9PiB7XG4gICAgICAgIGFyZWEuc2V0UGxhY2Vob2xkZXIoXCJQYXN0ZSBKU09OIGhlcmUuLi5cIik7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUubWluSGVpZ2h0ID0gXCI4MHB4XCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLmZvbnRTaXplID0gXCIxMXB4XCI7XG5cbiAgICAgICAgLy8gU3RvcmUgcmVmZXJlbmNlIGZvciB0aGUgaW1wb3J0IGJ1dHRvblxuICAgICAgICAoYm9keSBhcyBhbnkpLl9pbXBvcnRBcmVhID0gYXJlYTtcbiAgICAgIH0pXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiSW1wb3J0XCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXJlYSA9IChib2R5IGFzIGFueSkuX2ltcG9ydEFyZWE7XG4gICAgICAgICAgICBpZiAoIWFyZWEpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoYXJlYS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wbHVnaW4uc2V0dGluZ3MsIHBhcnNlZCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlNldHRpbmdzIGltcG9ydGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJJbnZhbGlkIEpTT04gXHUyMDE0IHBsZWFzZSBjaGVjayBzeW50YXhcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgVGVtcGxhdGUgRW5naW5lXG4vLyBMb2FkcyAuanMgdGVtcGxhdGUgZmlsZXMgZnJvbSB2YXVsdCwgY3JlYXRlcyBhIHNhbmRib3hlZFxuLy8gZXhlY3V0aW9uIGNvbnRleHQgd2l0aCBkYXRhLWJpbmRpbmcgdG8gbm90ZSBmcm9udG1hdHRlcixcbi8vIGFuZCByZW5kZXJzIFVJIGludG8gYSBjb250YWluZXIgZWxlbWVudC5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBBcHAsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IEJVSUxUSU5fVEVNUExBVEVTIH0gZnJvbSBcIi4vYnVpbHRpbnNcIjtcblxuLyoqXG4gKiBUaGUgY29udGV4dCBvYmplY3QgcGFzc2VkIHRvIGV2ZXJ5IHRlbXBsYXRlIGF0IHJ1bnRpbWUuXG4gKiBUZW1wbGF0ZXMgcmVjZWl2ZSB0aGlzIGFzIGBjdHhgIGFuZCB1c2UgaXQgdG8gcmVhZC93cml0ZVxuICogZnJvbnRtYXR0ZXIgYW5kIGJ1aWxkIHRoZWlyIFVJLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlQ29udGV4dCB7XG4gIC8qKiBPYnNpZGlhbiBBcHAgaW5zdGFuY2UgKi9cbiAgYXBwOiBBcHA7XG4gIC8qKiBPbGVuIHBsdWdpbiByZWZlcmVuY2UgKi9cbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICAvKiogVGhlIGRhdGEgbm90ZSBjdXJyZW50bHkgYmVpbmcgdmlld2VkICovXG4gIGZpbGU6IFRGaWxlO1xuICAvKiogRE9NIGNvbnRhaW5lciB0byByZW5kZXIgaW50byAqL1xuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIC8vIC0tLSBEYXRhIEJpbmRpbmcgLS0tXG5cbiAgLyoqIFNuYXBzaG90IG9mIHRoZSBub3RlJ3MgY3VycmVudCBmcm9udG1hdHRlciAocmVhZC1vbmx5IG9iamVjdCkgKi9cbiAgZnJvbnRtYXR0ZXI6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAvKiogR2V0IGEgc2luZ2xlIGZyb250bWF0dGVyIHZhbHVlLCBvciBhbGwgZnJvbnRtYXR0ZXIgaWYgbm8ga2V5ICovXG4gIGdldERhdGEoa2V5Pzogc3RyaW5nKTogdW5rbm93bjtcbiAgLyoqIFdyaXRlIGEgc2luZ2xlIGtleSBiYWNrIHRvIHRoZSBub3RlJ3MgZnJvbnRtYXR0ZXIgKi9cbiAgc2V0RGF0YShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+O1xuICAvKiogQmF0Y2gtd3JpdGUgbXVsdGlwbGUga2V5cyB0byB0aGUgbm90ZSdzIGZyb250bWF0dGVyICovXG4gIHNldE11bHRpcGxlRGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IFByb21pc2U8dm9pZD47XG5cbiAgLy8gLS0tIFZhdWx0IEhlbHBlcnMgLS0tXG5cbiAgLyoqIFJlYWQgcmF3IHRleHQgb2YgYW55IHZhdWx0IGZpbGUgYnkgcGF0aCAqL1xuICByZWFkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+O1xuICAvKiogR2V0IGFsbCBtYXJrZG93biBmaWxlcyBpbnNpZGUgYSBmb2xkZXIgKi9cbiAgZ2V0RmlsZXNJbkZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBURmlsZVtdO1xuICAvKiogR2V0IGZyb250bWF0dGVyIG9mIGFueSBmaWxlIGJ5IHBhdGggKi9cbiAgZ2V0RmlsZU1ldGFkYXRhKHBhdGg6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbDtcblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKiBPYnNpZGlhbiBOb3RpY2UgZm9yIHRvYXN0cyAqL1xuICBub3RpY2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZDtcbiAgLyoqIG1vbWVudC5qcyAocHJvdmlkZWQgYnkgT2JzaWRpYW4gZ2xvYmFsbHkpICovXG4gIG1vbWVudDogdHlwZW9mIHdpbmRvdy5tb21lbnQ7XG4gIC8qKiBDcmVhdGUgYW4gSFRNTCBlbGVtZW50IChzaG9ydGhhbmQpICovXG4gIGNyZWF0ZUVsPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgIHRhZzogSyxcbiAgICBhdHRycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXTtcbn1cblxuLyoqXG4gKiBDb3JlIGVuZ2luZSB0aGF0IG1hbmFnZXMgdGVtcGxhdGUgbG9va3VwLCBsb2FkaW5nLCBhbmQgZXhlY3V0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVFbmdpbmUge1xuICBwcml2YXRlIGFwcDogQXBwO1xuICBwcml2YXRlIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgLyoqIENhY2hlIG9mIGxvYWRlZCB0ZW1wbGF0ZSBzb3VyY2UgY29kZSAocGF0aCBcdTIxOTIgc291cmNlKSAqL1xuICBwcml2YXRlIHRlbXBsYXRlQ2FjaGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgLy8gLS0tIEFjdGl2aXR5IExvb2t1cCAtLS1cblxuICAvKipcbiAgICogRmluZCB0aGUgd29ya3NwYWNlIHRlbXBsYXRlIGZvciBhIGdpdmVuIGFjdGl2aXR5IHR5cGUuXG4gICAqIExvb2tzIHVwIHRoZSBhY3Rpdml0eSBieSBJRCBpbiBzZXR0aW5ncyBhbmQgcmV0dXJucyBpdHMgd29ya3NwYWNlVGVtcGxhdGUgSUQuXG4gICAqIFRoZSBJRCBtYXkgcmVmZXIgdG8gYSBidWlsdC1pbiB0ZW1wbGF0ZSAoZS5nLiBcIndvcmtvdXRcIikgb3IgYSB2YXVsdCBwYXRoLlxuICAgKi9cbiAgZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZTogc3RyaW5nKTogeyB0ZW1wbGF0ZUlkOiBzdHJpbmcgfSB8IG51bGwge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKFxuICAgICAgKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5VHlwZSAmJiBhLmVuYWJsZWQgJiYgYS53b3Jrc3BhY2VUZW1wbGF0ZSxcbiAgICApO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7IHRlbXBsYXRlSWQ6IGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlISB9O1xuICB9XG5cbiAgLy8gLS0tIFRlbXBsYXRlIExvYWRpbmcgLS0tXG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIHRlbXBsYXRlIHNvdXJjZSBmcm9tIHZhdWx0LiBDYWNoZXMgdW50aWwgaW52YWxpZGF0ZWQuXG4gICAqL1xuICBhc3luYyBsb2FkVGVtcGxhdGVTb3VyY2UodGVtcGxhdGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAvLyBDaGVjayBjYWNoZSBmaXJzdFxuICAgIGlmICh0aGlzLnRlbXBsYXRlQ2FjaGUuaGFzKHRlbXBsYXRlUGF0aCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlQ2FjaGUuZ2V0KHRlbXBsYXRlUGF0aCkhO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBwYXRoIFx1MjAxNCBhZGQgLmpzIGlmIG1pc3NpbmdcbiAgICBsZXQgcmVzb2x2ZWRQYXRoID0gdGVtcGxhdGVQYXRoO1xuICAgIGlmICghcmVzb2x2ZWRQYXRoLmVuZHNXaXRoKFwiLmpzXCIpICYmICFyZXNvbHZlZFBhdGguZW5kc1dpdGgoXCIubWRcIikpIHtcbiAgICAgIHJlc29sdmVkUGF0aCArPSBcIi5qc1wiO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocmVzb2x2ZWRQYXRoKTtcbiAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5zZXQodGVtcGxhdGVQYXRoLCBzb3VyY2UpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE9sZW4gVGVtcGxhdGVFbmdpbmU6IEZhaWxlZCB0byByZWFkIHRlbXBsYXRlICR7cmVzb2x2ZWRQYXRofTpgLCBlcnIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGUgdGhlIGNhY2hlIGZvciBhIHNwZWNpZmljIHRlbXBsYXRlIChlLmcuIGFmdGVyIGVkaXRzKS5cbiAgICovXG4gIGludmFsaWRhdGVDYWNoZSh0ZW1wbGF0ZVBhdGg/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGVtcGxhdGVQYXRoKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlQ2FjaGUuZGVsZXRlKHRlbXBsYXRlUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBDb250ZXh0IENyZWF0aW9uIC0tLVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgVGVtcGxhdGVDb250ZXh0IHRoYXQgZ2V0cyBwYXNzZWQgdG8gdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZENvbnRleHQoXG4gICAgZmlsZTogVEZpbGUsXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICk6IFRlbXBsYXRlQ29udGV4dCB7XG4gICAgY29uc3QgYXBwID0gdGhpcy5hcHA7XG4gICAgY29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW47XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXBwLFxuICAgICAgcGx1Z2luLFxuICAgICAgZmlsZSxcbiAgICAgIGNvbnRhaW5lcixcblxuICAgICAgLy8gLS0tIERhdGEgQmluZGluZyAtLS1cblxuICAgICAgZnJvbnRtYXR0ZXI6IHsgLi4uZnJvbnRtYXR0ZXIgfSxcblxuICAgICAgZ2V0RGF0YShrZXk/OiBzdHJpbmcpOiB1bmtub3duIHtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiB7IC4uLmZyb250bWF0dGVyIH07XG4gICAgICAgIHJldHVybiBmcm9udG1hdHRlcltrZXldO1xuICAgICAgfSxcblxuICAgICAgYXN5bmMgc2V0RGF0YShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZm0pID0+IHtcbiAgICAgICAgICBmbVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgb3VyIGxvY2FsIHNuYXBzaG90XG4gICAgICAgIGZyb250bWF0dGVyW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIHNldE11bHRpcGxlRGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgICBmbVtrXSA9IHY7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVXBkYXRlIGxvY2FsIHNuYXBzaG90XG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgZnJvbnRtYXR0ZXJba10gPSB2O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyAtLS0gVmF1bHQgSGVscGVycyAtLS1cblxuICAgICAgYXN5bmMgcmVhZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgICAgIGNvbnN0IGYgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoIWYgfHwgIShmIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGFwcC52YXVsdC5yZWFkKGYpO1xuICAgICAgfSxcblxuICAgICAgZ2V0RmlsZXNJbkZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBURmlsZVtdIHtcbiAgICAgICAgcmV0dXJuIGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKFxuICAgICAgICAgIChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpLFxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgZ2V0RmlsZU1ldGFkYXRhKHBhdGg6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGYgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoIWYgfHwgIShmIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZik7XG4gICAgICAgIHJldHVybiAoY2FjaGU/LmZyb250bWF0dGVyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyBudWxsO1xuICAgICAgfSxcblxuICAgICAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAgICAgbm90aWNlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBuZXcgTm90aWNlKG1lc3NhZ2UsIHRpbWVvdXQpO1xuICAgICAgfSxcblxuICAgICAgbW9tZW50OiB3aW5kb3cubW9tZW50LFxuXG4gICAgICBjcmVhdGVFbDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICAgICAgdGFnOiBLLFxuICAgICAgICBhdHRycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cnMpKSB7XG4gICAgICAgICAgICBpZiAoayA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcImh0bWxcIikge1xuICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcImNsc1wiIHx8IGsgPT09IFwiY2xhc3NcIikge1xuICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tLSBSZW5kZXJpbmcgLS0tXG5cbiAgLyoqXG4gICAqIE1haW4gcmVuZGVyIG1ldGhvZC4gUmVzb2x2ZXMgYSB0ZW1wbGF0ZSBJRCAoYnVpbHQtaW4gb3IgdmF1bHQgcGF0aClcbiAgICogYW5kIHJlbmRlcnMgaXQgaW50byBhIGNvbnRhaW5lciBib3VuZCB0byB0aGUgZ2l2ZW4gbm90ZSdzIGZyb250bWF0dGVyLlxuICAgKi9cbiAgYXN5bmMgcmVuZGVyKFxuICAgIHRlbXBsYXRlSWQ6IHN0cmluZyxcbiAgICBmaWxlOiBURmlsZSxcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAvLyAxLiBSZXNvbHZlIHRlbXBsYXRlIHNvdXJjZTogY2hlY2sgYnVpbHQtaW4gdGVtcGxhdGVzIGZpcnN0LCB0aGVuIHZhdWx0XG4gICAgbGV0IHNvdXJjZTogc3RyaW5nIHwgbnVsbCA9IEJVSUxUSU5fVEVNUExBVEVTW3RlbXBsYXRlSWRdID8/IG51bGw7XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgLy8gRmFsbCBiYWNrIHRvIGxvYWRpbmcgZnJvbSB2YXVsdCBhcyBhIC5qcyBmaWxlIHBhdGhcbiAgICAgIHNvdXJjZSA9IGF3YWl0IHRoaXMubG9hZFRlbXBsYXRlU291cmNlKHRlbXBsYXRlSWQpO1xuICAgIH1cblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGBUZW1wbGF0ZSBub3QgZm91bmQ6ICR7dGVtcGxhdGVJZH1gLFxuICAgICAgICBcIkNoZWNrIHRoZSB0ZW1wbGF0ZSBJRCBpbiBPbGVuIFNldHRpbmdzIFx1MjE5MiBBY3Rpdml0aWVzIFx1MjE5MiBDb25maWd1cmUuIEJ1aWx0LWluIHRlbXBsYXRlczogd29ya291dC5cIixcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IGN1cnJlbnQgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgIGNvbnN0IGZyb250bWF0dGVyID0gKGNhY2hlPy5mcm9udG1hdHRlciBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPz8ge307XG5cbiAgICAvLyAzLiBCdWlsZCBjb250ZXh0XG4gICAgY29uc3QgY3R4ID0gdGhpcy5idWlsZENvbnRleHQoZmlsZSwgY29udGFpbmVyLCBmcm9udG1hdHRlcik7XG5cbiAgICAvLyA0LiBFeGVjdXRlIHRlbXBsYXRlXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIHdyYXAgdGhlIHRlbXBsYXRlIHNvdXJjZSBzbyB0aGF0IGBjdHhgIGlzIGF2YWlsYWJsZSBhcyBhIGxvY2FsIHZhcmlhYmxlLlxuICAgICAgLy8gVGhlIHRlbXBsYXRlIGNvZGUgY2FuIGRlc3RydWN0dXJlIGZyb20gY3R4IG9yIHVzZSBpdCBkaXJlY3RseS5cbiAgICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFwiY3R4XCIsIHNvdXJjZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmbihjdHgpO1xuXG4gICAgICAvLyBJZiB0aGUgdGVtcGxhdGUgcmV0dXJucyBhIHByb21pc2UgKGFzeW5jIHRlbXBsYXRlKSwgYXdhaXQgaXRcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgYXdhaXQgcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE9sZW4gVGVtcGxhdGVFbmdpbmU6IEVycm9yIGV4ZWN1dGluZyB0ZW1wbGF0ZSAke3RlbXBsYXRlSWR9OmAsIGVycik7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGBUZW1wbGF0ZSBlcnJvcjogJHsoZXJyIGFzIEVycm9yKS5tZXNzYWdlfWAsXG4gICAgICAgIGBJbiB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZUlkfWAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYW4gZXJyb3IgbWVzc2FnZSBpbnNpZGUgdGhlIGNvbnRhaW5lci5cbiAgICovXG4gIHByaXZhdGUgcmVuZGVyRXJyb3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGl0bGU6IHN0cmluZywgaGludDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG4gICAgY29uc3QgZXJyb3JEaXYgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3JcIiB9KTtcbiAgICBlcnJvckRpdi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXRlbXBsYXRlLWVycm9yLXRpdGxlXCIsIHRleHQ6IHRpdGxlIH0pO1xuICAgIGVycm9yRGl2LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3ItaGludFwiLCB0ZXh0OiBoaW50IH0pO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFRlbXBsYXRlIFx1MjAxNCBXb3Jrb3V0IFRyYWNrZXIgdjYuMFxuLy8gUmVuZGVycyBpbnNpZGUgdGhlIE9sZW4gd29ya3NwYWNlIGZvciB0aGUgXCJ3b3Jrb3V0XCIgYWN0aXZpdHkuXG4vLyBBbGwgVUkgbGl2ZXMgaGVyZSBcdTIwMTQgZGFpbHkgbm90ZXMgb25seSBzdG9yZSBZQU1MIGZyb250bWF0dGVyLlxuLy8gRGF0YSBpcyByZWFkL3dyaXR0ZW4gdmlhIGN0eC5nZXREYXRhIC8gY3R4LnNldERhdGEuXG4vLyBQZXJzb25hbCBzdGF0cyBub3cgcmVhZCBmcm9tIHBsdWdpbiBzZXR0aW5ncyAocGVyc29uYWxTdGF0cykuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgeyBjb250YWluZXIsIGdldERhdGEsIHNldERhdGEsIHNldE11bHRpcGxlRGF0YSwgYXBwLCBtb21lbnQsIG5vdGljZSxcbiAgICAgICAgY3JlYXRlRWwsIGZpbGUsIHJlYWRGaWxlLCBnZXRGaWxlc0luRm9sZGVyLCBnZXRGaWxlTWV0YWRhdGEgfSA9IGN0eDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTRVRUSU5HUyBcdTIwMTQgRWRpdCB0aGVzZSB0byBtYXRjaCB5b3VyIHZhdWx0IHN0cnVjdHVyZVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBTRVRUSU5HUyA9IHtcbiAgLy8gV2hlcmUgZGFpbHkgd29ya291dCBub3RlcyBhcmUgc3RvcmVkXG4gIHdvcmtvdXRGb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMSBXb3Jrb3V0XCIsXG4gIC8vIEZvbGRlciBjb250YWluaW5nIGV4ZXJjaXNlIHN0YW5kYXJkIC5tZCBmaWxlcyAoZS5nLiBcIkJlbmNoIFByZXNzLm1kXCIpXG4gIGV4ZXJjaXNlRGJGb2xkZXI6IFwiSG9tZS9BY3Rpdml0aWVzL0V4ZXJjaXNlcyBkYXRhYmFzZVwiLFxufTtcblxuLy8gUmVhZCBwZXJzb25hbCBzdGF0cyBmcm9tIHBsdWdpbiBzZXR0aW5ncyAoc2V0IGluIE9sZW4gU2V0dGluZ3MgPiBQZXJzb25hbCBTdGF0cylcbmNvbnN0IF9wbHVnaW5TdGF0cyA9IGN0eC5wbHVnaW4/LnNldHRpbmdzPy5wZXJzb25hbFN0YXRzIHx8IHt9O1xuY29uc3QgUEVSU09OQUwgPSB7XG4gIHdlaWdodDogX3BsdWdpblN0YXRzLmN1cnJlbnRXZWlnaHQgfHwgNjEsXG4gIGhlaWdodDogX3BsdWdpblN0YXRzLmhlaWdodCB8fCAxNzUsXG4gIGJpcnRoZGF0ZTogX3BsdWdpblN0YXRzLmJpcnRoZGF0ZSB8fCBcIjIwMDUtMTEtMjlcIixcbiAgZ2VuZGVyOiBfcGx1Z2luU3RhdHMuZ2VuZGVyIHx8IFwibWFsZVwiLFxufTtcblxuLy8gTXVzY2xlIGdyb3VwcyBhdmFpbGFibGUgZm9yIHNlbGVjdGlvbiwgd2l0aCBvcHRpb25hbCBzdWJncm91cHNcbmNvbnN0IE1VU0NMRV9HUk9VUFMgPSB7XG4gIFwiTmVja1wiOiAgICAgIHsgc3ViZ3JvdXBzOiBudWxsLCBpY29uOiBcIlxcdUQ4M0VcXHVEREI0XCIgfSxcbiAgXCJCYWNrXCI6ICAgICAgeyBzdWJncm91cHM6IFtcIkxhdHNcIiwgXCJUcmFwc1wiLCBcIlJob21ib2lkc1wiLCBcIkxvd2VyIEJhY2tcIiwgXCJSZWFyIERlbHRzXCJdLCBpY29uOiBcIlxcdUQ4M0RcXHVERDE5XCIgfSxcbiAgXCJDaGVzdFwiOiAgICAgeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzRFxcdURDQUFcIiB9LFxuICBcIlNob3VsZGVyc1wiOiB7IHN1Ymdyb3VwczogW1wiRnJvbnQgRGVsdHNcIiwgXCJTaWRlIERlbHRzXCIsIFwiUmVhciBEZWx0c1wiXSwgaWNvbjogXCJcXHVEODNDXFx1REZBRlwiIH0sXG4gIFwiQ29yZVwiOiAgICAgIHsgc3ViZ3JvdXBzOiBudWxsLCBpY29uOiBcIlxcdUQ4M0NcXHVERkFGXCIgfSxcbiAgXCJMZWdzXCI6ICAgICAgeyBzdWJncm91cHM6IFtcIlF1YWRzXCIsIFwiSGFtc3RyaW5nc1wiLCBcIkdsdXRlc1wiLCBcIkNhbHZlc1wiLCBcIkFkZHVjdG9yc1wiXSwgaWNvbjogXCJcXHVEODNFXFx1RERCNVwiIH0sXG4gIFwiQXJtc1wiOiAgICAgIHsgc3ViZ3JvdXBzOiBbXCJCaWNlcHNcIiwgXCJUcmljZXBzXCIsIFwiRm9yZWFybXNcIl0sIGljb246IFwiXFx1RDgzRFxcdURDQUFcIiB9LFxufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBUSEVNRSAmIENPTlNUQU5UU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5jb25zdCBUSEVNRSA9IHtcbiAgY29sb3I6IFwiIzlhOGM3YVwiLFxuICBjb2xvckhvdmVyOiBcIiNhYTljOGFcIixcbiAgY29sb3JCb3JkZXI6IFwiIzNhMzQyYVwiLFxuICBjb2xvckJvcmRlckhvdmVyOiBcIiM0YTQ0M2FcIixcbiAgY29sb3JNdXRlZDogXCIjNmE1YTRhXCIsXG4gIGNvbG9yTGlnaHQ6IFwiI2I4YTg5MFwiLFxuICBjb2xvckRpc2NpcGxpbmU6IFwiI2E4OTg2MFwiLFxuICBjb2xvckZsb3c6IFwiIzZhOGE5YVwiLFxuICBzeXN0ZW1HcmVlbjogXCIjN2E5YTdkXCJcbn07XG5cbmNvbnN0IFNUUkVOR1RIX0xFVkVMUyA9IHtcbiAgXCJVbnRyYWluZWRcIjogICAgeyBjb2xvcjogXCIjNmE2YTZhXCIsIGljb246IFwiXFx1MjVDQlwiIH0sXG4gIFwiQmVnaW5uZXJcIjogICAgIHsgY29sb3I6IFwiI2E4OTg2MFwiLCBpY29uOiBcIlxcdTI1RDBcIiB9LFxuICBcIk5vdmljZVwiOiAgICAgICB7IGNvbG9yOiBcIiM3YTlhN2RcIiwgaWNvbjogXCJcXHUyNUQxXCIgfSxcbiAgXCJJbnRlcm1lZGlhdGVcIjogeyBjb2xvcjogXCIjNmE4YTlhXCIsIGljb246IFwiXFx1MjVENVwiIH0sXG4gIFwiQWR2YW5jZWRcIjogICAgIHsgY29sb3I6IFwiIzhhN2E5YVwiLCBpY29uOiBcIlxcdTI1Q0ZcIiB9LFxuICBcIkVsaXRlXCI6ICAgICAgICB7IGNvbG9yOiBcIiM5YTZhN2FcIiwgaWNvbjogXCJcXHUyNjA1XCIgfVxufTtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTVEFURSAoZnJvbSBmcm9udG1hdHRlcilcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxubGV0IGV4ZXJjaXNlcyA9IGdldERhdGEoXCJleGVyY2lzZXNcIikgfHwgW107XG5sZXQgbXVzY2xlR3JvdXBzID0gZ2V0RGF0YShcIm11c2NsZUdyb3Vwc1wiKSB8fCBbXTtcbmxldCBjdXJyZW50TXVzY2xlSW5kZXggPSBnZXREYXRhKFwiY3VycmVudE11c2NsZUluZGV4XCIpIHx8IDA7XG5jb25zdCBpc0NvbXBsZXRlZCA9IGdldERhdGEoXCJXb3Jrb3V0XCIpID09PSB0cnVlO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNUWUxFU1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5pZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib2xlbi10cGwtd29ya291dC12NlwiKSkge1xuICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgc3R5bGUuaWQgPSBcIm9sZW4tdHBsLXdvcmtvdXQtdjZcIjtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgLm90dy1jb250YWluZXIgKiB7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAub3R3LWNvbnRhaW5lciB7IG1heC13aWR0aDogNTAwcHg7IG1hcmdpbjogMCBhdXRvOyBwYWRkaW5nOiAxMHB4IDAgMTIwcHggMDsgZm9udC1mYW1pbHk6IEdlb3JnaWEsIHNlcmlmOyBjb2xvcjogI2M4YzBiMjsgfVxuICAgIC5vdHctY29udGFpbmVyIGJ1dHRvbiwgLm90dy1jb250YWluZXIgaW5wdXQsIC5vdHctbW9kYWwtb3ZlcmxheSBidXR0b24sIC5vdHctbW9kYWwtb3ZlcmxheSBpbnB1dCB7IGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1jb250YWluZXIgaW5wdXRbdHlwZT1cIm51bWJlclwiXSB7IC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkOyB9XG4gICAgQGtleWZyYW1lcyBvdHctYnJlYXRoZSB7IDAlLCAxMDAlIHsgYm94LXNoYWRvdzogaW5zZXQgMCAwIDE2cHggcmdiYSgxNTQsMTQwLDEyMiwwLjAyKTsgfSA1MCUgeyBib3gtc2hhZG93OiBpbnNldCAwIDAgMjRweCByZ2JhKDE1NCwxNDAsMTIyLDAuMDQpOyB9IH1cbiAgICBAa2V5ZnJhbWVzIG90dy1wdWxzZS1nbG93IHsgMCUsIDEwMCUgeyBvcGFjaXR5OiAwLjQ7IH0gNTAlIHsgb3BhY2l0eTogMTsgfSB9XG4gICAgLm90dy1jYXJkIHsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjYpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCkgc2F0dXJhdGUoMTUwJSk7IC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIHNhdHVyYXRlKDE1MCUpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDgpOyBwYWRkaW5nOiAxNnB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IG1hcmdpbi1ib3R0b206IDEycHg7IGJvcmRlci1yYWRpdXM6IDE2cHg7IH1cbiAgICAub3R3LWNhcmQtYnJlYXRoZSB7IGFuaW1hdGlvbjogb3R3LWJyZWF0aGUgNnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7IH1cbiAgICAub3R3LWhlYWRlciB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMTZweDsgfVxuICAgIC5vdHctdGl0bGUgeyBtYXJnaW46IDA7IGNvbG9yOiAjOWE4YzdhOyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IGxldHRlci1zcGFjaW5nOiA0cHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAub3R3LXByb2dyZXNzLWxhYmVsIHsgY29sb3I6ICM0ZDQ3M2U7IGZvbnQtc2l6ZTogMTFweDsgbWFyZ2luLXRvcDogNnB4OyB9XG4gICAgLm90dy1zZWN0aW9uLWxhYmVsIHsgY29sb3I6ICM0ZDQ3M2U7IGZvbnQtc2l6ZTogOXB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogM3B4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMTZweCAwIDhweDsgfVxuICAgIC5vdHctd2Vlay1ncmlkIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTsgZ2FwOiA0cHg7IH1cbiAgICAub3R3LXdlZWstZGF5IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAzcHg7IHBhZGRpbmc6IDZweCAzcHg7IGJhY2tncm91bmQ6IHJnYmEoMTIsMTAsMTYsMC40KTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjA2KTsgYm9yZGVyLXJhZGl1czogOHB4OyB9XG4gICAgLm90dy13ZWVrLWRheS50b2RheSB7IGJvcmRlci1jb2xvcjogcmdiYSgxNTQsMTQwLDEyMiwwLjIpOyB9XG4gICAgLm90dy13ZWVrLWRheSAub3R3LWRheS1sYWJlbCB7IGZvbnQtc2l6ZTogOHB4OyBjb2xvcjogIzRkNDczZTsgbGV0dGVyLXNwYWNpbmc6IDFweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctd2Vlay1kYXkgLm90dy1kYXktbnVtIHsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNjAwOyBjb2xvcjogIzRkNDczZTsgfVxuICAgIC5vdHctd2Vlay1kYXkgLm90dy1kYXktaWNvbiB7IGZvbnQtc2l6ZTogMTNweDsgbWluLWhlaWdodDogMTZweDsgfVxuICAgIC5vdHctd2Vlay1kYXkuZG9uZSAub3R3LWRheS1udW0geyBjb2xvcjogIzlhOGM3YTsgfVxuICAgIC5vdHctaGVhdG1hcC13cmFwIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGdhcDogMTZweDsgcGFkZGluZzogOHB4IDA7IH1cbiAgICAub3R3LWhlYXRtYXAtc3ZnIHsgd2lkdGg6IDEzMHB4OyBoZWlnaHQ6IGF1dG87IH1cbiAgICAub3R3LWhlYXRtYXAtbGVnZW5kIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZ2FwOiA2cHggMTJweDsgbWFyZ2luLXRvcDogNnB4OyBwYWRkaW5nOiAwIDhweDsgfVxuICAgIC5vdHctaGVhdG1hcC1sZWdlbmQtaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogNHB4OyBmb250LXNpemU6IDdweDsgY29sb3I6ICM0ZDQ3M2U7IGxldHRlci1zcGFjaW5nOiAxcHg7IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgICAub3R3LWhlYXRtYXAtbGVnZW5kLWRvdCB7IHdpZHRoOiA2cHg7IGhlaWdodDogNnB4OyBib3JkZXItcmFkaXVzOiAycHg7IH1cbiAgICAub3R3LWJ0biB7IHBhZGRpbmc6IDEycHggMjBweDsgYm9yZGVyOiBub25lOyBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7IGZvbnQtc2l6ZTogMTJweDsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LWJ0bi1wcmltYXJ5IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzlhOGM3YSwgIzdhNmM1YSk7IGNvbG9yOiAjMGEwYTBhOyB3aWR0aDogMTAwJTsgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDE1NCwxNDAsMTIyLDAuMTUpOyB9XG4gICAgLm90dy1idG4tcHJpbWFyeTphY3RpdmUgeyB0cmFuc2Zvcm06IHNjYWxlKDAuOTgpOyBib3gtc2hhZG93OiAwIDAgMjBweCByZ2JhKDE1NCwxNDAsMTIyLDAuMik7IH1cbiAgICAub3R3LWJ0bi1zZWNvbmRhcnkgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMDMpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMSk7IGNvbG9yOiAjNmE1YTRhOyB9XG4gICAgLm90dy1idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogcmdiYSgxNTQsMTQwLDEyMiwwLjMpOyBjb2xvcjogIzlhOGM3YTsgfVxuICAgIC5vdHctYnRuLWZpbmlzaCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM3YTlhN2QsICM1YTdhNWQpOyBjb2xvcjogIzBhMGEwYTsgYm94LXNoYWRvdzogMCAycHggMTJweCByZ2JhKDEyMiwxNTQsMTI1LDAuMTUpOyB9XG4gICAgLm90dy1idG4tZGFzaGVkIHsgd2lkdGg6IDEwMCU7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgxNTQsMTQwLDEyMiwwLjEpOyBjb2xvcjogIzRkNDczZTsgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50OyB9XG4gICAgLm90dy1idG4tZGFzaGVkOmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogcmdiYSgxNTQsMTQwLDEyMiwwLjMpOyBjb2xvcjogIzlhOGM3YTsgfVxuICAgIC5vdHctbmF2LXJvdyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMTBweDsgbWFyZ2luLXRvcDogMjBweDsgfVxuICAgIC5vdHctbmF2LXJvdyAub3R3LWJ0biB7IGZsZXg6IDE7IHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIC5vdHctc2V0LXJvdyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvOyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDEwcHg7IHBhZGRpbmc6IDEwcHggMTJweDsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDYpOyBtYXJnaW4tYm90dG9tOiA0cHg7IGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cbiAgICAub3R3LXNldC1yb3cuY29tcGxldGVkIHsgb3BhY2l0eTogMC41OyB9XG4gICAgLm90dy1jaGVja2JveCB7IHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4xNSk7IGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgY3Vyc29yOiBwb2ludGVyOyBjb2xvcjogIzBhMGEwYTsgZm9udC13ZWlnaHQ6IGJvbGQ7IHRyYW5zaXRpb246IGFsbCAwLjJzOyBmbGV4LXNocmluazogMDsgfVxuICAgIC5vdHctY2hlY2tib3guY2hlY2tlZCB7IGJhY2tncm91bmQ6ICM3YTlhN2Q7IGJvcmRlci1jb2xvcjogIzdhOWE3ZDsgfVxuICAgIC5vdHctaW5wdXQgeyBwYWRkaW5nOiA2cHg7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjEpOyBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDsgY29sb3I6ICM5YThjN2E7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyB3aWR0aDogNTBweDsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1jdHJsLWJ0biB7IHdpZHRoOiAzMHB4OyBoZWlnaHQ6IDMwcHg7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBiYWNrZ3JvdW5kOiByZ2JhKDEyLDEwLDE2LDAuNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBjb2xvcjogIzlhOGM3YTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDE1cHg7IGZsZXgtc2hyaW5rOiAwOyAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7IGFwcGVhcmFuY2U6IG5vbmU7IH1cbiAgICAub3R3LWN0cmwtYnRuOmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTU0LDE0MCwxMjIsMC4yKTsgfVxuICAgIC5vdHctd2FybXVwLWJhZGdlIHsgZm9udC1zaXplOiA5cHg7IGNvbG9yOiAjNmE4YTlhOyBwYWRkaW5nOiAycHggNnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDEwNiwxMzgsMTU0LDAuMSk7IGJvcmRlci1yYWRpdXM6IDZweDsgfVxuICAgIC5vdHctc3RyZW5ndGgtYmFyIHsgaGVpZ2h0OiA0cHg7IGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4wNCk7IGJvcmRlci1yYWRpdXM6IDJweDsgb3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luLXRvcDogNnB4OyB9XG4gICAgLm90dy1zdHJlbmd0aC1maWxsIHsgaGVpZ2h0OiAxMDAlOyBib3JkZXItcmFkaXVzOiAycHg7IHRyYW5zaXRpb246IHdpZHRoIDAuNnMgY3ViaWMtYmV6aWVyKDAuNCwwLDAuMiwxKTsgfVxuICAgIC5vdHctc3RyZW5ndGgtYmFkZ2UgeyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiA2cHg7IHBhZGRpbmc6IDVweCAxMHB4OyBib3JkZXItcmFkaXVzOiA4cHg7IGZvbnQtc2l6ZTogMTFweDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAgIC5vdHctcHItYm94IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiA0cHg7IHBhZGRpbmc6IDhweCAxMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDE2OCwxNTIsOTYsMC4wNik7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTY4LDE1Miw5NiwwLjE1KTsgYm9yZGVyLXJhZGl1czogOHB4OyBtYXJnaW4tdG9wOiA4cHg7IH1cbiAgICAub3R3LW1vZGFsLW92ZXJsYXkgeyBwb3NpdGlvbjogZml4ZWQ7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHotaW5kZXg6IDk5OTk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigwcHgpOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNHMgZWFzZSwgYmFja2Ryb3AtZmlsdGVyIDAuNHMgZWFzZTsgfVxuICAgIC5vdHctbW9kYWwtb3ZlcmxheS52aXNpYmxlIHsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjg1KTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpOyB9XG4gICAgLm90dy1tb2RhbC1jb250ZW50IHsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjk1KTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpIHNhdHVyYXRlKDE1MCUpOyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig0MHB4KSBzYXR1cmF0ZSgxNTAlKTsgcGFkZGluZzogMjRweCAxOHB4OyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMSk7IGJvcmRlci1yYWRpdXM6IDE4cHg7IG1heC13aWR0aDogNTAwcHg7IHdpZHRoOiA5MCU7IG1heC1oZWlnaHQ6IDg1dmg7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMTRweDsgcG9zaXRpb246IHJlbGF0aXZlOyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7IHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlOyBvdmVyZmxvdy15OiBhdXRvOyB9XG4gICAgLm90dy1tb2RhbC1vdmVybGF5LnZpc2libGUgLm90dy1tb2RhbC1jb250ZW50IHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XG4gICAgLm90dy1mZWVsLWJ0biB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTZweDsgcGFkZGluZzogMTRweCAxOHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDEyLDEwLDE2LDAuNCk7IGJvcmRlci1yYWRpdXM6IDEycHg7IGN1cnNvcjogcG9pbnRlcjsgbWFyZ2luLWJvdHRvbTogOHB4OyB0cmFuc2l0aW9uOiBhbGwgMC4yczsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTQsMTQwLDEyMiwwLjA2KTsgfVxuICAgIC5vdHctZmVlbC1idG46YWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSgxNTQsMTQwLDEyMiwwLjA4KTsgfVxuICAgIC5vdHctbXVzY2xlLXRvZ2dsZSB7IHBhZGRpbmc6IDEwcHggMTZweDsgYmFja2dyb3VuZDogcmdiYSgxMiwxMCwxNiwwLjQpOyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1NCwxNDAsMTIyLDAuMDgpOyBib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7IGNvbG9yOiAjOWE4YzdhOyBmb250LXNpemU6IDEycHg7IGxldHRlci1zcGFjaW5nOiAxcHg7IGN1cnNvcjogcG9pbnRlcjsgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTsgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lOyBhcHBlYXJhbmNlOiBub25lOyB9XG4gICAgLm90dy1tdXNjbGUtdG9nZ2xlLmFjdGl2ZSB7IGJhY2tncm91bmQ6IHJnYmEoMTU0LDE0MCwxMjIsMC4yKSAhaW1wb3J0YW50OyBib3JkZXItY29sb3I6IHJnYmEoMTU0LDE0MCwxMjIsMC4zKSAhaW1wb3J0YW50OyB9XG4gICAgLm90dy1tdXNjbGUtdG9nZ2xlOmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgfVxuICAgIC5vdHctc3ViZ3JvdXAtY29udGFpbmVyIHsgbWF4LWhlaWdodDogMDsgb3ZlcmZsb3c6IGhpZGRlbjsgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjRzIGVhc2UsIG9wYWNpdHkgMC4zcyBlYXNlLCBwYWRkaW5nIDAuM3MgZWFzZTsgb3BhY2l0eTogMDsgcGFkZGluZzogMCAxMnB4OyB9XG4gICAgLm90dy1zdWJncm91cC1jb250YWluZXIuZXhwYW5kZWQgeyBtYXgtaGVpZ2h0OiAyMDBweDsgb3BhY2l0eTogMTsgcGFkZGluZzogMTJweDsgfVxuICAgIC5vdHctc3ViLXRvZ2dsZSB7IHBhZGRpbmc6IDdweCAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDEyLDEwLDE2LDAuNCk7IGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IGJvcmRlci1yYWRpdXM6IDhweCAhaW1wb3J0YW50OyBjb2xvcjogIzZhNWE0YTsgZm9udC1zaXplOiAxMXB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgYXBwZWFyYW5jZTogbm9uZTsgfVxuICAgIC5vdHctc3ViLXRvZ2dsZS5hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwxNDAsMTIyLDAuMTUpOyBib3JkZXItY29sb3I6IHJnYmEoMTU0LDE0MCwxMjIsMC4yNSk7IGNvbG9yOiAjOWE4YzdhOyB9XG4gIGA7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFVUSUxJVFkgRlVOQ1RJT05TXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gYWRkQ29ybmVycyhlbCwgY29sb3IsIHNpemUgPSAxNCkge1xuICBbXCJUTFwiLCBcIlRSXCIsIFwiQkxcIiwgXCJCUlwiXS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpc1RvcCA9IHBvcy5pbmNsdWRlcyhcIlRcIiksIGlzTGVmdCA9IHBvcy5pbmNsdWRlcyhcIkxcIik7XG4gICAgYy5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOmFic29sdXRlOyR7aXNUb3A/XCJ0b3A6MFwiOlwiYm90dG9tOjBcIn07JHtpc0xlZnQ/XCJsZWZ0OjBcIjpcInJpZ2h0OjBcIn07d2lkdGg6JHtzaXplfXB4O2hlaWdodDoke3NpemV9cHg7Ym9yZGVyLSR7aXNUb3A/XCJ0b3BcIjpcImJvdHRvbVwifToxcHggc29saWQgJHtjb2xvcn07Ym9yZGVyLSR7aXNMZWZ0P1wibGVmdFwiOlwicmlnaHRcIn06MXB4IHNvbGlkICR7Y29sb3J9O3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZTtgO1xuICAgIGVsLmFwcGVuZENoaWxkKGMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlMVJNKHdlaWdodCwgcmVwcykge1xuICBpZiAocmVwcyA9PT0gMCB8fCB3ZWlnaHQgPT09IDApIHJldHVybiAwO1xuICBpZiAocmVwcyA9PT0gMSkgcmV0dXJuIHdlaWdodDtcbiAgcmV0dXJuIE1hdGgucm91bmQod2VpZ2h0ICogKDEgKyByZXBzIC8gMzApKTtcbn1cblxuZnVuY3Rpb24gZ2V0Rmlyc3RXb3JraW5nU2V0SW5kZXgoc2V0cykge1xuICByZXR1cm4gc2V0cy5maW5kSW5kZXgoKHMpID0+ICFzLmlzV2FybXVwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlV2FybXVwV2VpZ2h0cyhleCwgbmV3Vykge1xuICBjb25zdCB3YXJtdXBzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+IHMuaXNXYXJtdXApO1xuICBbMC41LCAwLjcsIDAuODVdLmZvckVhY2goKHAsIGkpID0+IHtcbiAgICBpZiAod2FybXVwc1tpXSkgd2FybXVwc1tpXS53ZWlnaHQgPSBNYXRoLnJvdW5kKG5ld1cgKiBwKTtcbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU1ZHIEJPRFkgRklHVVJFIFx1MjAxNCBMb2FkIGFjdHVhbCBNdXNjbGUgTWFuL1dvbWFuIFNWRyBmaWxlc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmxldCBfY2FjaGVkU3ZnQ29udGVudCA9IG51bGw7XG5sZXQgX2NhY2hlZFN2Z0dlbmRlciA9IG51bGw7XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRCb2R5U3ZnKCkge1xuICBjb25zdCBnZW5kZXIgPSBQRVJTT05BTC5nZW5kZXIgfHwgXCJtYWxlXCI7XG4gIGlmIChfY2FjaGVkU3ZnQ29udGVudCAmJiBfY2FjaGVkU3ZnR2VuZGVyID09PSBnZW5kZXIpIHJldHVybiBfY2FjaGVkU3ZnQ29udGVudDtcbiAgY29uc3QgZmlsZU5hbWUgPSBnZW5kZXIgPT09IFwiZmVtYWxlXCIgPyBcIk11c2NsZSBXb21hbi5zdmdcIiA6IFwiTXVzY2xlIE1hbi5zdmdcIjtcbiAgdHJ5IHtcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZEZpbGUoZmlsZU5hbWUpO1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBfY2FjaGVkU3ZnQ29udGVudCA9IGNvbnRlbnQ7XG4gICAgICBfY2FjaGVkU3ZnR2VuZGVyID0gZ2VuZGVyO1xuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7IC8qIGZpbGUgbm90IGZvdW5kIFx1MjAxNCBmYWxsIGJhY2sgdG8gcHJvZ3JhbW1hdGljICovIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhvdHNwb3QgcmVnaW9ucyBmb3IgbXVzY2xlIG92ZXJsYXkgb24gdGhlIGFjdHVhbCBTVkcgKHBlcmNlbnRhZ2UtYmFzZWQpXG4vLyBQb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSBTVkcgY29udGFpbmVyIChmcm9udCB2aWV3IGFuYXRvbWljYWwgZmlndXJlKVxuY29uc3QgU1ZHX0hPVFNQT1RTID0ge1xuICBmcm9udDoge1xuICAgIG5lY2s6ICAgICAgIHsgdG9wOiA5LCAgbGVmdDogNDIsIHdpZHRoOiAxNiwgaGVpZ2h0OiA0ICB9LFxuICAgIGZyb250X2RlbHRzOnsgdG9wOiAxNSwgbGVmdDogMjAsIHdpZHRoOiAxMiwgaGVpZ2h0OiA3ICB9LFxuICAgIGNoZXN0OiAgICAgIHsgdG9wOiAxOSwgbGVmdDogMzMsIHdpZHRoOiAzNCwgaGVpZ2h0OiAxMCB9LFxuICAgIGJpY2VwczogICAgIHsgdG9wOiAyMywgbGVmdDogMTQsIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMiB9LFxuICAgIGZvcmVhcm1zOiAgIHsgdG9wOiAzNywgbGVmdDogMTAsIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMiB9LFxuICAgIGNvcmU6ICAgICAgIHsgdG9wOiAzMCwgbGVmdDogMzgsIHdpZHRoOiAyNCwgaGVpZ2h0OiAxNCB9LFxuICAgIHF1YWRzOiAgICAgIHsgdG9wOiA0OSwgbGVmdDogMzIsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxOCB9LFxuICAgIGNhbHZlczogICAgIHsgdG9wOiA3MiwgbGVmdDogMzQsIHdpZHRoOiAxMiwgaGVpZ2h0OiAxNCB9LFxuICB9LFxuICAvLyBNaXJyb3IgcmlnaHQgc2lkZSBhdXRvbWF0aWNhbGx5XG4gIHJpZ2h0TWlycm9yOiB7XG4gICAgZnJvbnRfZGVsdHM6IHsgdG9wOiAxNSwgbGVmdDogNjgsIHdpZHRoOiAxMiwgaGVpZ2h0OiA3ICB9LFxuICAgIGJpY2VwczogICAgICB7IHRvcDogMjMsIGxlZnQ6IDc2LCB3aWR0aDogMTAsIGhlaWdodDogMTIgfSxcbiAgICBmb3JlYXJtczogICAgeyB0b3A6IDM3LCBsZWZ0OiA4MCwgd2lkdGg6IDEwLCBoZWlnaHQ6IDEyIH0sXG4gICAgcXVhZHM6ICAgICAgIHsgdG9wOiA0OSwgbGVmdDogNTIsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxOCB9LFxuICAgIGNhbHZlczogICAgICB7IHRvcDogNzIsIGxlZnQ6IDU0LCB3aWR0aDogMTIsIGhlaWdodDogMTQgfSxcbiAgfSxcbiAgYmFjazoge1xuICAgIHRyYXBzOiAgICAgIHsgdG9wOiAxMywgbGVmdDogMzQsIHdpZHRoOiAzMiwgaGVpZ2h0OiA2ICB9LFxuICAgIHJlYXJfZGVsdHM6IHsgdG9wOiAxNSwgbGVmdDogMjAsIHdpZHRoOiAxMiwgaGVpZ2h0OiA3ICB9LFxuICAgIGxhdHM6ICAgICAgIHsgdG9wOiAyMCwgbGVmdDogMjYsIHdpZHRoOiA0OCwgaGVpZ2h0OiAxMiB9LFxuICAgIHRyaWNlcHM6ICAgIHsgdG9wOiAyMywgbGVmdDogMTQsIHdpZHRoOiAxMCwgaGVpZ2h0OiAxMiB9LFxuICAgIGxvd2VyX2JhY2s6IHsgdG9wOiAzMywgbGVmdDogMzYsIHdpZHRoOiAyOCwgaGVpZ2h0OiAxMCB9LFxuICAgIGdsdXRlczogICAgIHsgdG9wOiA0NCwgbGVmdDogMzQsIHdpZHRoOiAzMiwgaGVpZ2h0OiA4ICB9LFxuICAgIGhhbXN0cmluZ3M6IHsgdG9wOiA1MywgbGVmdDogMzIsIHdpZHRoOiAxNiwgaGVpZ2h0OiAxNiB9LFxuICB9LFxuICBiYWNrTWlycm9yOiB7XG4gICAgcmVhcl9kZWx0czogeyB0b3A6IDE1LCBsZWZ0OiA2OCwgd2lkdGg6IDEyLCBoZWlnaHQ6IDcgIH0sXG4gICAgdHJpY2VwczogICAgeyB0b3A6IDIzLCBsZWZ0OiA3Niwgd2lkdGg6IDEwLCBoZWlnaHQ6IDEyIH0sXG4gICAgaGFtc3RyaW5nczogeyB0b3A6IDUzLCBsZWZ0OiA1Miwgd2lkdGg6IDE2LCBoZWlnaHQ6IDE2IH0sXG4gIH0sXG59O1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBFUlNPTkFMIFNUQVRTICYgU1RSRU5HVEggU1RBTkRBUkRTXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UGVyc29uYWxTdGF0cygpIHtcbiAgLy8gUmVhZCBmcm9tIHBsdWdpbiBzZXR0aW5ncyAoUGVyc29uYWwgU3RhdHMgc2VjdGlvbilcbiAgcmV0dXJuIHtcbiAgICB3ZWlnaHQ6IFBFUlNPTkFMLndlaWdodCxcbiAgICBoZWlnaHQ6IFBFUlNPTkFMLmhlaWdodCxcbiAgICBiaXJ0aGRhdGU6IFBFUlNPTkFMLmJpcnRoZGF0ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlQWdlKGJkKSB7XG4gIGlmICghYmQpIHJldHVybiAyMDtcbiAgY29uc3QgYiA9IG5ldyBEYXRlKGJkKSwgdCA9IG5ldyBEYXRlKCk7XG4gIGxldCBhID0gdC5nZXRGdWxsWWVhcigpIC0gYi5nZXRGdWxsWWVhcigpO1xuICBpZiAodC5nZXRNb250aCgpIDwgYi5nZXRNb250aCgpIHx8ICh0LmdldE1vbnRoKCkgPT09IGIuZ2V0TW9udGgoKSAmJiB0LmdldERhdGUoKSA8IGIuZ2V0RGF0ZSgpKSkgYS0tO1xuICByZXR1cm4gYTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdGFuZGFyZFZhbHVlKHZhbCkge1xuICBpZiAodHlwZW9mIHZhbCAhPT0gXCJzdHJpbmdcIikgdmFsID0gU3RyaW5nKHZhbCk7XG4gIHZhbCA9IHZhbC50cmltKCk7XG4gIGlmICh2YWwuaW5jbHVkZXMoXCI8XCIpKSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWwucmVwbGFjZSgvWzxcXHNdL2csIFwiXCIpKTtcbiAgICByZXR1cm4gIWlzTmFOKG51bSkgJiYgbnVtID4gMCA/IG51bSAqIDAuNSA6IDAuMTtcbiAgfVxuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbCk7XG4gIHJldHVybiBpc05hTihudW0pID8gMCA6IG51bTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyZW5ndGhTdGFuZGFyZChleGVyY2lzZU5hbWUpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBTRVRUSU5HUy5leGVyY2lzZURiRm9sZGVyICsgXCIvXCIgKyBleGVyY2lzZU5hbWUgKyBcIi5tZFwiO1xuICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YShmaWxlUGF0aCk7XG4gIGNvbnN0IGlzQlcgPSBmbT8uVHlwZSA9PT0gXCJCb2R5d2VpZ2h0XCI7XG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCByZWFkRmlsZShmaWxlUGF0aCk7XG4gIGlmICghY29udGVudCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcbiAgY29uc3QgYndUYWJsZSA9IFtdLCBhZ2VUYWJsZSA9IFtdO1xuICBsZXQgY3VycmVudFRhYmxlID0gbnVsbDtcbiAgZm9yIChjb25zdCBsaW5lIG9mIGxpbmVzKSB7XG4gICAgaWYgKGxpbmUubWF0Y2goL1xcfFxccypCV1xccypcXHwvaSkpIHsgY3VycmVudFRhYmxlID0gXCJid1wiOyBjb250aW51ZTsgfVxuICAgIGlmIChsaW5lLm1hdGNoKC9cXHxcXHMqQWdlXFxzKlxcfC9pKSkgeyBjdXJyZW50VGFibGUgPSBcImFnZVwiOyBjb250aW51ZTsgfVxuICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJ8LS0tXCIpIHx8IGxpbmUuc3RhcnRzV2l0aChcInwgLS0tXCIpKSBjb250aW51ZTtcbiAgICBjb25zdCBtID0gbGluZS5tYXRjaCgvXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8XFxzKihbXnxdKylcXHMqXFx8Lyk7XG4gICAgaWYgKG0pIHtcbiAgICAgIGNvbnN0IHJvdyA9IHsga2V5OiBwYXJzZVN0YW5kYXJkVmFsdWUobVsxXSksIGJlZ2lubmVyOiBwYXJzZVN0YW5kYXJkVmFsdWUobVsyXSksIG5vdmljZTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bM10pLCBpbnRlcm1lZGlhdGU6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzRdKSwgYWR2YW5jZWQ6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzVdKSwgZWxpdGU6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzZdKSB9O1xuICAgICAgaWYgKHJvdy5rZXkgPiAwICYmIChyb3cuYmVnaW5uZXIgPiAwIHx8IHJvdy5ub3ZpY2UgPiAwIHx8IHJvdy5pbnRlcm1lZGlhdGUgPiAwKSkge1xuICAgICAgICBpZiAoY3VycmVudFRhYmxlID09PSBcImJ3XCIpIGJ3VGFibGUucHVzaChyb3cpO1xuICAgICAgICBlbHNlIGlmIChjdXJyZW50VGFibGUgPT09IFwiYWdlXCIpIGFnZVRhYmxlLnB1c2gocm93KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgYndUYWJsZSwgYWdlVGFibGUsIGlzQm9keXdlaWdodDogaXNCVywgaGFzVmFsaWREYXRhOiBid1RhYmxlLmxlbmd0aCA+IDAgfHwgYWdlVGFibGUubGVuZ3RoID4gMCB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZVN0YW5kYXJkKHRhYmxlLCB2YWx1ZSkge1xuICBpZiAoIXRhYmxlIHx8IHRhYmxlLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHNvcnRlZCA9IFsuLi50YWJsZV0uc29ydCgoYSwgYikgPT4gYS5rZXkgLSBiLmtleSk7XG4gIGxldCBsb3dlciA9IHNvcnRlZFswXSwgdXBwZXIgPSBzb3J0ZWRbc29ydGVkLmxlbmd0aCAtIDFdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBpZiAoc29ydGVkW2ldLmtleSA8PSB2YWx1ZSAmJiBzb3J0ZWRbaSArIDFdLmtleSA+PSB2YWx1ZSkgeyBsb3dlciA9IHNvcnRlZFtpXTsgdXBwZXIgPSBzb3J0ZWRbaSArIDFdOyBicmVhazsgfVxuICB9XG4gIGlmICh2YWx1ZSA8PSBsb3dlci5rZXkpIHJldHVybiB7IC4uLmxvd2VyIH07XG4gIGlmICh2YWx1ZSA+PSB1cHBlci5rZXkpIHJldHVybiB7IC4uLnVwcGVyIH07XG4gIGNvbnN0IHJhdGlvID0gKHZhbHVlIC0gbG93ZXIua2V5KSAvICh1cHBlci5rZXkgLSBsb3dlci5rZXkpO1xuICByZXR1cm4geyBrZXk6IHZhbHVlLCBiZWdpbm5lcjogbG93ZXIuYmVnaW5uZXIgKyByYXRpbyAqICh1cHBlci5iZWdpbm5lciAtIGxvd2VyLmJlZ2lubmVyKSwgbm92aWNlOiBsb3dlci5ub3ZpY2UgKyByYXRpbyAqICh1cHBlci5ub3ZpY2UgLSBsb3dlci5ub3ZpY2UpLCBpbnRlcm1lZGlhdGU6IGxvd2VyLmludGVybWVkaWF0ZSArIHJhdGlvICogKHVwcGVyLmludGVybWVkaWF0ZSAtIGxvd2VyLmludGVybWVkaWF0ZSksIGFkdmFuY2VkOiBsb3dlci5hZHZhbmNlZCArIHJhdGlvICogKHVwcGVyLmFkdmFuY2VkIC0gbG93ZXIuYWR2YW5jZWQpLCBlbGl0ZTogbG93ZXIuZWxpdGUgKyByYXRpbyAqICh1cHBlci5lbGl0ZSAtIGxvd2VyLmVsaXRlKSB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRBdmVyYWdlZFN0YW5kYXJkcyhzdGQpIHtcbiAgY29uc3Qgc3RhdHMgPSBhd2FpdCBnZXRQZXJzb25hbFN0YXRzKCk7XG4gIGNvbnN0IGJ3ID0gaW50ZXJwb2xhdGVTdGFuZGFyZChzdGQuYndUYWJsZSwgc3RhdHMud2VpZ2h0KTtcbiAgY29uc3QgYWcgPSBpbnRlcnBvbGF0ZVN0YW5kYXJkKHN0ZC5hZ2VUYWJsZSwgY2FsY3VsYXRlQWdlKHN0YXRzLmJpcnRoZGF0ZSkpO1xuICBpZiAoYncgJiYgYWcpIHJldHVybiB7IGJlZ2lubmVyOiAoYncuYmVnaW5uZXIgKyBhZy5iZWdpbm5lcikgLyAyLCBub3ZpY2U6IChidy5ub3ZpY2UgKyBhZy5ub3ZpY2UpIC8gMiwgaW50ZXJtZWRpYXRlOiAoYncuaW50ZXJtZWRpYXRlICsgYWcuaW50ZXJtZWRpYXRlKSAvIDIsIGFkdmFuY2VkOiAoYncuYWR2YW5jZWQgKyBhZy5hZHZhbmNlZCkgLyAyLCBlbGl0ZTogKGJ3LmVsaXRlICsgYWcuZWxpdGUpIC8gMiB9O1xuICByZXR1cm4gYncgfHwgYWcgfHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lU3RyZW5ndGhMZXZlbChjdiwgc3RkKSB7XG4gIGlmICghc3RkIHx8IGN2IDwgMCkgcmV0dXJuIHsgbGV2ZWw6IFwiVW50cmFpbmVkXCIsIGNvbG9yOiBcIiM2YTZhNmFcIiwgcHJvZ3Jlc3M6IDAsIG5leHRUYXJnZXQ6IHN0ZD8uYmVnaW5uZXIgfHwgMSB9O1xuICBjb25zdCB7IGJlZ2lubmVyLCBub3ZpY2UsIGludGVybWVkaWF0ZSwgYWR2YW5jZWQsIGVsaXRlIH0gPSBzdGQ7XG4gIGlmIChjdiA+PSBlbGl0ZSkgcmV0dXJuIHsgbGV2ZWw6IFwiRWxpdGVcIiwgY29sb3I6IFwiIzlhNmE3YVwiLCBwcm9ncmVzczogMTAwLCBuZXh0VGFyZ2V0OiBudWxsIH07XG4gIGlmIChjdiA+PSBhZHZhbmNlZCkgcmV0dXJuIHsgbGV2ZWw6IFwiQWR2YW5jZWRcIiwgY29sb3I6IFwiIzhhN2E5YVwiLCBwcm9ncmVzczogKChjdiAtIGFkdmFuY2VkKSAvIChlbGl0ZSAtIGFkdmFuY2VkKSkgKiAxMDAsIG5leHRUYXJnZXQ6IGVsaXRlIH07XG4gIGlmIChjdiA+PSBpbnRlcm1lZGlhdGUpIHJldHVybiB7IGxldmVsOiBcIkludGVybWVkaWF0ZVwiLCBjb2xvcjogXCIjNmE4YTlhXCIsIHByb2dyZXNzOiAoKGN2IC0gaW50ZXJtZWRpYXRlKSAvIChhZHZhbmNlZCAtIGludGVybWVkaWF0ZSkpICogMTAwLCBuZXh0VGFyZ2V0OiBhZHZhbmNlZCB9O1xuICBpZiAoY3YgPj0gbm92aWNlKSByZXR1cm4geyBsZXZlbDogXCJOb3ZpY2VcIiwgY29sb3I6IFwiIzdhOWE3ZFwiLCBwcm9ncmVzczogKChjdiAtIG5vdmljZSkgLyAoaW50ZXJtZWRpYXRlIC0gbm92aWNlKSkgKiAxMDAsIG5leHRUYXJnZXQ6IGludGVybWVkaWF0ZSB9O1xuICBpZiAoY3YgPj0gYmVnaW5uZXIpIHJldHVybiB7IGxldmVsOiBcIkJlZ2lubmVyXCIsIGNvbG9yOiBcIiNhODk4NjBcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBiZWdpbm5lcikgLyAobm92aWNlIC0gYmVnaW5uZXIpKSAqIDEwMCwgbmV4dFRhcmdldDogbm92aWNlIH07XG4gIHJldHVybiB7IGxldmVsOiBcIlVudHJhaW5lZFwiLCBjb2xvcjogXCIjNmE2YTZhXCIsIHByb2dyZXNzOiBiZWdpbm5lciA+IDAgPyBNYXRoLm1heCgwLCAoY3YgLyBiZWdpbm5lcikgKiAxMDApIDogMCwgbmV4dFRhcmdldDogYmVnaW5uZXIgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChuYW1lLCB3LCByLCBtYXhSKSB7XG4gIGNvbnN0IHN0ZCA9IGF3YWl0IGdldFN0cmVuZ3RoU3RhbmRhcmQobmFtZSk7XG4gIGlmICghc3RkIHx8ICFzdGQuaGFzVmFsaWREYXRhKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgYXZnID0gYXdhaXQgZ2V0QXZlcmFnZWRTdGFuZGFyZHMoc3RkKTtcbiAgaWYgKCFhdmcpIHJldHVybiBudWxsO1xuICBpZiAoc3RkLmlzQm9keXdlaWdodCkge1xuICAgIGNvbnN0IGVmZiA9IG1heFIgIT09IG51bGwgJiYgbWF4UiAhPT0gdW5kZWZpbmVkID8gTWF0aC5tYXgociwgbWF4UikgOiByO1xuICAgIGNvbnN0IHJlcyA9IGRldGVybWluZVN0cmVuZ3RoTGV2ZWwoZWZmLCBhdmcpO1xuICAgIHJldHVybiB7IC4uLnJlcywgY3VycmVudFZhbHVlOiBlZmYsIGlzQm9keXdlaWdodDogdHJ1ZSwgdW5pdDogXCJyZXBzXCIsIGRpc3BsYXlMYWJlbDogXCJNYXggUmVwc1wiIH07XG4gIH0gZWxzZSB7XG4gICAgaWYgKHcgPD0gMCkgcmV0dXJuIG51bGw7XG4gICAgY29uc3QgZXN0ID0gY2FsY3VsYXRlMVJNKHcsIHIpO1xuICAgIGNvbnN0IHJlcyA9IGRldGVybWluZVN0cmVuZ3RoTGV2ZWwoZXN0LCBhdmcpO1xuICAgIHJldHVybiB7IC4uLnJlcywgY3VycmVudFZhbHVlOiBlc3QsIGlzQm9keXdlaWdodDogZmFsc2UsIHVuaXQ6IFwia2dcIiwgZGlzcGxheUxhYmVsOiBcIkVzdC4gMVJNXCIgfTtcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBoYXNTdHJlbmd0aFN0YW5kYXJkKG5hbWUpIHtcbiAgY29uc3Qgc3RkID0gYXdhaXQgZ2V0U3RyZW5ndGhTdGFuZGFyZChuYW1lKTtcbiAgcmV0dXJuIHN0ZCAhPT0gbnVsbCAmJiBzdGQuaGFzVmFsaWREYXRhO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFdPUktPVVQgREFUQSBcdTIwMTQgUFIgbG9va3VwLCBwcmV2aW91cyBleGVyY2lzZSBsb2FkaW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0RXhlcmNpc2VQUihuYW1lKSB7XG4gIGNvbnN0IHN0ZCA9IGF3YWl0IGdldFN0cmVuZ3RoU3RhbmRhcmQobmFtZSk7XG4gIGNvbnN0IGlzQlcgPSBzdGQ/LmlzQm9keXdlaWdodCB8fCBmYWxzZTtcbiAgY29uc3QgZmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBsZXQgYmVzdCA9IG51bGwsIGJlc3RWID0gMDtcbiAgZm9yIChjb25zdCBmIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEoZi5wYXRoKTtcbiAgICBpZiAoZm0/LmV4ZXJjaXNlcyAmJiBBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykgJiYgZm0uV29ya291dCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgZXggPSBmbS5leGVyY2lzZXMuZmluZCgoZSkgPT4gZS5uYW1lID09PSBuYW1lKTtcbiAgICAgIGlmIChleD8uc2V0cykge1xuICAgICAgICBmb3IgKGNvbnN0IHNldCBvZiBleC5zZXRzKSB7XG4gICAgICAgICAgaWYgKCFzZXQuaXNXYXJtdXAgJiYgc2V0LmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgaWYgKGlzQlcpIHtcbiAgICAgICAgICAgICAgaWYgKHNldC5yZXBzID4gYmVzdFYpIHsgYmVzdFYgPSBzZXQucmVwczsgYmVzdCA9IHsgLi4uc2V0LCBkYXRlOiBmLmJhc2VuYW1lLCBwclZhbHVlOiBiZXN0ViwgaXNCb2R5d2VpZ2h0OiB0cnVlIH07IH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2V0LndlaWdodCA+IDApIHtcbiAgICAgICAgICAgICAgY29uc3QgZXN0ID0gY2FsY3VsYXRlMVJNKHNldC53ZWlnaHQsIHNldC5yZXBzKTtcbiAgICAgICAgICAgICAgaWYgKGVzdCA+IGJlc3RWKSB7IGJlc3RWID0gZXN0OyBiZXN0ID0geyAuLi5zZXQsIGRhdGU6IGYuYmFzZW5hbWUsIGVzdGltYXRlZDFSTTogZXN0LCBwclZhbHVlOiBlc3QsIGlzQm9keXdlaWdodDogZmFsc2UgfTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYmVzdDtcbn1cblxuZnVuY3Rpb24gZ2V0TGFzdFdvcmtvdXRGb3JNdXNjbGVHcm91cChtdXNjbGVHcm91cCkge1xuICBjb25zdCBmaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcilcbiAgICAuc29ydCgoYSwgYikgPT4gYi5iYXNlbmFtZS5sb2NhbGVDb21wYXJlKGEuYmFzZW5hbWUpKTtcbiAgZm9yIChjb25zdCBmIG9mIGZpbGVzKSB7XG4gICAgaWYgKGYucGF0aCA9PT0gZmlsZS5wYXRoKSBjb250aW51ZTsgLy8gc2tpcCBjdXJyZW50IG5vdGVcbiAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YShmLnBhdGgpO1xuICAgIGlmIChmbT8uZXhlcmNpc2VzICYmIEFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSkge1xuICAgICAgY29uc3QgcmVsZXZhbnQgPSBmbS5leGVyY2lzZXMuZmlsdGVyKGV4ID0+IGV4Lm11c2NsZSA9PT0gbXVzY2xlR3JvdXAgfHwgZXgubXVzY2xlR3JvdXAgPT09IG11c2NsZUdyb3VwKTtcbiAgICAgIGlmIChyZWxldmFudC5sZW5ndGggPiAwKSByZXR1cm4geyBkYXRlOiBmLmJhc2VuYW1lLCBleGVyY2lzZXM6IHJlbGV2YW50IH07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBsb2FkUHJldmlvdXNFeGVyY2lzZXMoc2VsZWN0ZWRNdXNjbGVHcm91cHMpIHtcbiAgY29uc3QgZXhlcmNpc2VzQXJyYXkgPSBbXTtcbiAgZm9yIChjb25zdCBtdXNjbGUgb2Ygc2VsZWN0ZWRNdXNjbGVHcm91cHMpIHtcbiAgICBjb25zdCBsYXN0V29ya291dCA9IGdldExhc3RXb3Jrb3V0Rm9yTXVzY2xlR3JvdXAobXVzY2xlKTtcbiAgICBpZiAobGFzdFdvcmtvdXQpIHtcbiAgICAgIGZvciAoY29uc3QgZXggb2YgbGFzdFdvcmtvdXQuZXhlcmNpc2VzKSB7XG4gICAgICAgIGV4ZXJjaXNlc0FycmF5LnB1c2goe1xuICAgICAgICAgIG5hbWU6IGV4Lm5hbWUsXG4gICAgICAgICAgbXVzY2xlOiBtdXNjbGUsXG4gICAgICAgICAgbXVzY2xlR3JvdXA6IG11c2NsZSxcbiAgICAgICAgICBzZXRzOiBleC5zZXRzID8gZXguc2V0cy5tYXAocyA9PiAoe1xuICAgICAgICAgICAgd2VpZ2h0OiBzLndlaWdodCB8fCAwLFxuICAgICAgICAgICAgcmVwczogcy5yZXBzIHx8IDEwLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGlzV2FybXVwOiBzLmlzV2FybXVwIHx8IGZhbHNlXG4gICAgICAgICAgfSkpIDogW3sgd2VpZ2h0OiAwLCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXhlcmNpc2VzQXJyYXk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU0FWRSBTVEFURVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHNhdmVTdGF0ZSgpIHtcbiAgYXdhaXQgc2V0TXVsdGlwbGVEYXRhKHtcbiAgICBleGVyY2lzZXM6IGV4ZXJjaXNlcyxcbiAgICBjdXJyZW50TXVzY2xlSW5kZXg6IGN1cnJlbnRNdXNjbGVJbmRleCxcbiAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTU9EQUwgU1lTVEVNXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxubGV0IGFjdGl2ZU1vZGFsID0gbnVsbDtcblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgaWYgKCFhY3RpdmVNb2RhbCkgcmV0dXJuO1xuICBhY3RpdmVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZU1vZGFsPy5wYXJlbnROb2RlKSBhY3RpdmVNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2ZU1vZGFsKTtcbiAgICBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRpdGxlLCBjb250ZW50QnVpbGRlcikge1xuICBpZiAoYWN0aXZlTW9kYWwpIHsgYWN0aXZlTW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhY3RpdmVNb2RhbCk7IGFjdGl2ZU1vZGFsID0gbnVsbDsgfVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwib3R3LW1vZGFsLW92ZXJsYXlcIjtcbiAgYWN0aXZlTW9kYWwgPSBtb2RhbDtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9IFwib3R3LW1vZGFsLWNvbnRlbnRcIjtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgYWRkQ29ybmVycyhtb2RhbENvbnRlbnQsIFRIRU1FLmNvbG9yKTtcbiAgaWYgKHRpdGxlKSB7XG4gICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdC5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjowO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO29wYWNpdHk6MC44O2A7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHQpO1xuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDo2MHB4O2hlaWdodDoxcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsdHJhbnNwYXJlbnQsJHtUSEVNRS5jb2xvcn0sdHJhbnNwYXJlbnQpO21hcmdpbjowIGF1dG8gMTJweDtgO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkKTtcbiAgfVxuICBjb250ZW50QnVpbGRlcihtb2RhbENvbnRlbnQpO1xuICBtb2RhbC5vbmNsaWNrID0gKGUpID0+IHsgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkgY2xvc2VNb2RhbCgpOyB9O1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFBPU1QtQ09NUExFVElPTiBOQVZJR0FUSU9OXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuZnVuY3Rpb24gZ2V0UmV0dXJuRGVzdGluYXRpb24oKSB7XG4gIC8vIExvb2sgdXAgdGhlIGN1cnJlbnQgYWN0aXZpdHkncyBjb25maWcgZnJvbSBwbHVnaW4gc2V0dGluZ3NcbiAgY29uc3QgYWN0aXZpdHlJZCA9IGdldERhdGEoXCJhY3Rpdml0eVwiKTtcbiAgY29uc3QgYWN0aXZpdGllcyA9IGN0eC5wbHVnaW4/LnNldHRpbmdzPy5hY3Rpdml0aWVzO1xuICBpZiAoYWN0aXZpdGllcyAmJiBhY3Rpdml0eUlkKSB7XG4gICAgY29uc3QgYWN0Q29uZmlnID0gYWN0aXZpdGllcy5maW5kKGEgPT4gYS5pZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKGFjdENvbmZpZz8uY29tcGxldGlvblJldHVyblRvKSByZXR1cm4gYWN0Q29uZmlnLmNvbXBsZXRpb25SZXR1cm5UbztcbiAgfVxuICByZXR1cm4gXCJkYXNoYm9hcmRcIjsgLy8gZGVmYXVsdFxufVxuXG5mdW5jdGlvbiBuYXZpZ2F0ZUFmdGVyQ29tcGxldGlvbigpIHtcbiAgY29uc3QgZGVzdCA9IGdldFJldHVybkRlc3RpbmF0aW9uKCk7XG4gIGlmIChkZXN0ID09PSBcInN0YXlcIikgcmV0dXJuOyAvLyBkbyBub3RoaW5nLCBzdGF5IG9uIGNvbXBsZXRpb24gc3VtbWFyeVxuICBpZiAoZGVzdCA9PT0gXCJkYXNoYm9hcmRcIikge1xuICAgIC8vIFVzZSBPbGVuJ3MgYnVpbHQtaW4gZGFzaGJvYXJkIGFjdGl2YXRpb25cbiAgICBpZiAoY3R4LnBsdWdpbj8uYWN0aXZhdGVEYXNoYm9hcmRWaWV3KSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IGN0eC5wbHVnaW4uYWN0aXZhdGVEYXNoYm9hcmRWaWV3KCksIDYwMCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZGVzdCA9PT0gXCJob21lcGFnZVwiKSB7XG4gICAgLy8gT3BlbiB0aGUgZ2xvYmFsIGhvbWVwYWdlIGZpbGUgZGVmaW5lZCBpbiBQcm9maWxlIHNldHRpbmdzXG4gICAgY29uc3QgaG9tZXBhZ2VQYXRoID0gY3R4LnBsdWdpbj8uc2V0dGluZ3M/LmhvbWVwYWdlO1xuICAgIGlmICghaG9tZXBhZ2VQYXRoKSB7IG5vdGljZShcIk5vIGhvbWVwYWdlIHNldCBcdTIwMTQgZ28gdG8gT2xlbiBTZXR0aW5ncyA+IFByb2ZpbGUgdG8gZGVmaW5lIG9uZS5cIik7IHJldHVybjsgfVxuICAgIGNvbnN0IHRhcmdldEZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGhvbWVwYWdlUGF0aCk7XG4gICAgaWYgKHRhcmdldEZpbGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gYXBwLndvcmtzcGFjZS5nZXRMZWFmKGZhbHNlKS5vcGVuRmlsZSh0YXJnZXRGaWxlKSwgNjAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbm90aWNlKFwiSG9tZXBhZ2UgZmlsZSBub3QgZm91bmQ6IFwiICsgaG9tZXBhZ2VQYXRoKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gRklOSVNIIFdPUktPVVRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiBmaW5pc2hXb3Jrb3V0KHR5cGUpIHtcbiAgYXdhaXQgc2V0TXVsdGlwbGVEYXRhKHtcbiAgICBXb3Jrb3V0OiB0cnVlLFxuICAgIFwiV29ya291dC1UeXBlXCI6IHR5cGUsXG4gICAgVGltZXN0YW1wOiBtb21lbnQoKS5mb3JtYXQoKSxcbiAgICBleGVyY2lzZXM6IGV4ZXJjaXNlcyxcbiAgICBjdXJyZW50TXVzY2xlSW5kZXg6IGN1cnJlbnRNdXNjbGVJbmRleCxcbiAgfSk7XG4gIG5vdGljZShcIldvcmtvdXQgbG9nZ2VkIGFzIFwiICsgKHR5cGUgPT09IFwiZGlzY2lwbGluZVwiID8gXCJEaXNjaXBsaW5lIFdpblwiIDogXCJGbG93IFN0YXRlXCIpICsgXCIhXCIpO1xuICBuYXZpZ2F0ZUFmdGVyQ29tcGxldGlvbigpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBvcGVuRmluaXNoTW9kYWwoKSB7XG4gIC8vIEJ1aWxkIHNlc3Npb24gYW5hbHl0aWNzIGRhdGFcbiAgY29uc3Qgc3VtbWFyeURhdGEgPSBbXTtcbiAgZm9yIChjb25zdCBleCBvZiBleGVyY2lzZXMpIHtcbiAgICBjb25zdCBjb21wbGV0ZWQgPSBleC5zZXRzLmZpbHRlcihzID0+ICFzLmlzV2FybXVwICYmIHMuY29tcGxldGVkKTtcbiAgICBpZiAoY29tcGxldGVkLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHByID0gYXdhaXQgZ2V0RXhlcmNpc2VQUihleC5uYW1lKTtcbiAgICAgIGxldCBiZXN0VyA9IDAsIGJlc3RSID0gMCwgbWF4UiA9IDAsIHNlc3Npb25CZXN0ID0gMDtcbiAgICAgIGZvciAoY29uc3QgcyBvZiBjb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKHMucmVwcyA+IG1heFIpIG1heFIgPSBzLnJlcHM7XG4gICAgICAgIGlmIChzLndlaWdodCA+IDApIHtcbiAgICAgICAgICBjb25zdCBlc3QgPSBjYWxjdWxhdGUxUk0ocy53ZWlnaHQsIHMucmVwcyk7XG4gICAgICAgICAgaWYgKGVzdCA+IHNlc3Npb25CZXN0KSB7IHNlc3Npb25CZXN0ID0gZXN0OyBiZXN0VyA9IHMud2VpZ2h0OyBiZXN0UiA9IHMucmVwczsgfVxuICAgICAgICB9IGVsc2UgaWYgKHMucmVwcyA+IHNlc3Npb25CZXN0KSB7IHNlc3Npb25CZXN0ID0gcy5yZXBzOyBiZXN0UiA9IHMucmVwczsgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc2wgPSBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIGJlc3RXLCBiZXN0UiwgbWF4Uik7XG4gICAgICBzdW1tYXJ5RGF0YS5wdXNoKHsgbmFtZTogZXgubmFtZSwgbXVzY2xlOiBleC5tdXNjbGUgfHwgZXgubXVzY2xlR3JvdXAsIGJlc3RXLCBiZXN0UiwgbWF4Uiwgc2Vzc2lvbkJlc3QsIHNsLCBwciwgY29tcGxldGVkU2V0czogY29tcGxldGVkLmxlbmd0aCwgdG90YWxTZXRzOiBleC5zZXRzLmZpbHRlcihzID0+ICFzLmlzV2FybXVwKS5sZW5ndGggfSk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlTW9kYWwobnVsbCwgKGNvbnRlbnQpID0+IHtcbiAgICAvLyBTY3JvbGxhYmxlIGFyZWFcbiAgICBjb25zdCBzY3JvbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNjcm9sbC5zdHlsZS5jc3NUZXh0ID0gXCJvdmVyZmxvdy15OmF1dG87ZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTZweDtmbGV4OjE7bWF4LWhlaWdodDo3MHZoO1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2Nyb2xsKTtcblxuICAgIC8vIFRpdGxlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIldPUktPVVQgQ09NUExFVEVcIjtcbiAgICB0aXRsZS5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjowO2NvbG9yOiR7VEhFTUUuc3lzdGVtR3JlZW59O2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7YDtcbiAgICBzY3JvbGwuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgLy8gU2Vzc2lvbiBzdW1tYXJ5IGNhcmRzXG4gICAgaWYgKHN1bW1hcnlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzZWMuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTJweDtcIjtcbiAgICAgIHNjcm9sbC5hcHBlbmRDaGlsZChzZWMpO1xuXG4gICAgICBjb25zdCBzZWNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzZWNUaXRsZS50ZXh0Q29udGVudCA9IFwiU0VTU0lPTiBTVU1NQVJZXCI7XG4gICAgICBzZWNUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtYWxpZ246Y2VudGVyO2A7XG4gICAgICBzZWMuYXBwZW5kQ2hpbGQoc2VjVGl0bGUpO1xuXG4gICAgICBmb3IgKGNvbnN0IGV4IG9mIHN1bW1hcnlEYXRhKSB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLnN0eWxlLmNzc1RleHQgPSBgcGFkZGluZzoxNHB4O2JhY2tncm91bmQ6IzBjMGMwYztib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gICAgICAgIHNlYy5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgICAgICAvLyBFeGVyY2lzZSBuYW1lICsgc3RyZW5ndGggYmFkZ2VcbiAgICAgICAgY29uc3QgaGRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaGRyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luLWJvdHRvbToxMHB4O1wiO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGhkcik7XG5cbiAgICAgICAgY29uc3Qgbm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgbm0udGV4dENvbnRlbnQgPSBleC5uYW1lO1xuICAgICAgICBubS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtd2VpZ2h0OjYwMDtmb250LXNpemU6MTRweDtgO1xuICAgICAgICBoZHIuYXBwZW5kQ2hpbGQobm0pO1xuXG4gICAgICAgIGlmIChleC5zbCkge1xuICAgICAgICAgIGNvbnN0IGxpID0gU1RSRU5HVEhfTEVWRUxTW2V4LnNsLmxldmVsXTtcbiAgICAgICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIGJhZGdlLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTppbmxpbmUtZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtwYWRkaW5nOjRweCAxMHB4O2JhY2tncm91bmQ6JHtleC5zbC5jb2xvcn0yMDtib3JkZXI6MXB4IHNvbGlkICR7ZXguc2wuY29sb3J9NTA7Y29sb3I6JHtleC5zbC5jb2xvcn07Zm9udC1zaXplOjExcHg7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjFweDtgO1xuICAgICAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gKGxpPy5pY29uIHx8IFwiXFx1MjVDQlwiKSArIFwiIFwiICsgZXguc2wubGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICAgICAgICBoZHIuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmVzdCBzZXQgKyBlc3RpbWF0ZWQgMVJNXG4gICAgICAgIGNvbnN0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc3RhdHMuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLWJvdHRvbTo4cHg7Zm9udC1zaXplOjEycHg7YDtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChzdGF0cyk7XG5cbiAgICAgICAgY29uc3Qgc2V0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzZXRJbmZvLnRleHRDb250ZW50ID0gZXguc2w/LmlzQm9keXdlaWdodCA/IFwiQmVzdDogXCIgKyBleC5tYXhSICsgXCIgcmVwc1wiIDogXCJCZXN0OiBcIiArIGV4LmJlc3RXICsgXCJrZyBcXHUwMEQ3IFwiICsgZXguYmVzdFI7XG4gICAgICAgIHNldEluZm8uc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2A7XG4gICAgICAgIHN0YXRzLmFwcGVuZENoaWxkKHNldEluZm8pO1xuXG4gICAgICAgIGlmIChleC5zbCkge1xuICAgICAgICAgIGNvbnN0IHJtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgIHJtSW5mby50ZXh0Q29udGVudCA9IGV4LnNsLmRpc3BsYXlMYWJlbCArIFwiOiBcIiArIGV4LnNsLmN1cnJlbnRWYWx1ZSArIGV4LnNsLnVuaXQ7XG4gICAgICAgICAgcm1JbmZvLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC13ZWlnaHQ6NjAwO2A7XG4gICAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQocm1JbmZvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldHMgY29tcGxldGVkXG4gICAgICAgIGNvbnN0IHNldHNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2V0c0luZm8uc3R5bGUuY3NzVGV4dCA9IGBmb250LXNpemU6MTFweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbi1ib3R0b206OHB4O2A7XG4gICAgICAgIHNldHNJbmZvLnRleHRDb250ZW50ID0gZXguY29tcGxldGVkU2V0cyArIFwiL1wiICsgZXgudG90YWxTZXRzICsgXCIgd29ya2luZyBzZXRzIGNvbXBsZXRlZFwiO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHNldHNJbmZvKTtcblxuICAgICAgICAvLyBQUiBjb21wYXJpc29uXG4gICAgICAgIGlmIChleC5wcikge1xuICAgICAgICAgIGNvbnN0IHByQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcHJDLnN0eWxlLmNzc1RleHQgPSBgZm9udC1zaXplOjExcHg7bWFyZ2luLWJvdHRvbTo4cHg7cGFkZGluZzo2cHggOHB4O2A7XG4gICAgICAgICAgY29uc3QgY3YgPSBleC5zbD8uY3VycmVudFZhbHVlIHx8IGV4LnNlc3Npb25CZXN0O1xuICAgICAgICAgIGlmIChjdiA+IGV4LnByLnByVmFsdWUpIHtcbiAgICAgICAgICAgIHByQy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEyMiwxNTQsMTI1LDAuMTUpXCI7XG4gICAgICAgICAgICBwckMuaW5uZXJIVE1MID0gJzxzcGFuIHN0eWxlPVwiY29sb3I6IzdhOWE3ZDtmb250LXdlaWdodDo3MDA7XCI+XFx1RDgzQ1xcdURGODkgTkVXIFBSITwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgVEhFTUUuY29sb3JNdXRlZCArICc7XCI+UHJldmlvdXM6ICcgKyBleC5wci5wclZhbHVlICsgJyBcXHUyMTkyIE5vdzogJyArIGN2ICsgJzwvc3Bhbj4nO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY3YgPT09IGV4LnByLnByVmFsdWUpIHtcbiAgICAgICAgICAgIHByQy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE2OCwxNTIsOTYsMC4xKVwiO1xuICAgICAgICAgICAgcHJDLmlubmVySFRNTCA9ICc8c3BhbiBzdHlsZT1cImNvbG9yOiNhODk4NjA7XCI+XFx1RDgzQ1xcdURGQzYgTWF0Y2hlZCBQUjo8L3NwYW4+IDxzcGFuIHN0eWxlPVwiY29sb3I6JyArIFRIRU1FLmNvbG9yTXV0ZWQgKyAnO1wiPicgKyBleC5wci5wclZhbHVlICsgJzwvc3Bhbj4nO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwckMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxNjgsMTUyLDk2LDAuMSlcIjtcbiAgICAgICAgICAgIHByQy5pbm5lckhUTUwgPSAnPHNwYW4gc3R5bGU9XCJjb2xvcjonICsgVEhFTUUuY29sb3JNdXRlZCArICc7XCI+XFx1RDgzQ1xcdURGQzYgUFI6ICcgKyBleC5wci5wclZhbHVlICsgJzwvc3Bhbj4gPHNwYW4gc3R5bGU9XCJjb2xvcjojNmE2YTZhO1wiPih0b2RheTogJyArIGN2ICsgJyk8L3NwYW4+JztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwckMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHJvZ3Jlc3MgYmFyIHRvIG5leHQgc3RyZW5ndGggbGV2ZWxcbiAgICAgICAgaWYgKGV4LnNsICYmIGV4LnNsLm5leHRUYXJnZXQpIHtcbiAgICAgICAgICBjb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgcGIuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFyXCI7XG4gICAgICAgICAgcGIuc3R5bGUubWFyZ2luVG9wID0gXCI4cHhcIjtcbiAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHBiKTtcbiAgICAgICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBmaWxsLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWZpbGxcIjtcbiAgICAgICAgICBmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1pbigxMDAsIGV4LnNsLnByb2dyZXNzKX0lO2JhY2tncm91bmQ6JHtleC5zbC5jb2xvcn07YDtcbiAgICAgICAgICBwYi5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICAgICAgICBjb25zdCB0aSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgdGkuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Zm9udC1zaXplOjlweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbi10b3A6NHB4O2A7XG4gICAgICAgICAgdGkuaW5uZXJIVE1MID0gXCI8c3Bhbj5DdXJyZW50OiBcIiArIGV4LnNsLmN1cnJlbnRWYWx1ZSArIGV4LnNsLnVuaXQgKyBcIjwvc3Bhbj48c3Bhbj5OZXh0OiBcIiArIE1hdGgucm91bmQoZXguc2wubmV4dFRhcmdldCkgKyBleC5zbC51bml0ICsgXCI8L3NwYW4+XCI7XG4gICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBcIkhvdyBkaWQgaXQgZmVlbD9cIiBzZWN0aW9uXG4gICAgY29uc3QgZmVlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGZlZWxUaXRsZS50ZXh0Q29udGVudCA9IFwiSG93IGRpZCBpdCBmZWVsP1wiO1xuICAgIGZlZWxUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjo4cHggMCAwIDA7Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjEzcHg7bGV0dGVyLXNwYWNpbmc6M3B4O3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtvcGFjaXR5OjAuODtgO1xuICAgIHNjcm9sbC5hcHBlbmRDaGlsZChmZWVsVGl0bGUpO1xuXG4gICAgY29uc3QgYnRucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYnRucy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDoxMHB4O1wiO1xuICAgIHNjcm9sbC5hcHBlbmRDaGlsZChidG5zKTtcblxuICAgIC8vIERpc2NpcGxpbmUgYnV0dG9uXG4gICAgY29uc3QgZGlzY0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGlzY0J0bi5jbGFzc05hbWUgPSBcIm90dy1mZWVsLWJ0blwiO1xuICAgIGRpc2NCdG4uc3R5bGUuYm9yZGVyTGVmdCA9IGAzcHggc29saWQgJHtUSEVNRS5jb2xvckRpc2NpcGxpbmV9YDtcbiAgICBkaXNjQnRuLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O3dpZHRoOjQwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCI+XFx1RDgzRFxcdURDOEU8L3NwYW4+PGRpdiBzdHlsZT1cImZsZXg6MTtcIj48ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvckRpc2NpcGxpbmV9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtsZXR0ZXItc3BhY2luZzoxLjVweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTo0cHg7XCI+RGlzY2lwbGluZTwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojNWE1YTVhO2ZvbnQtc2l6ZToxMXB4O2ZvbnQtc3R5bGU6aXRhbGljO1wiPlB1c2hlZCB0aHJvdWdoIHJlc2lzdGFuY2U8L2Rpdj48L2Rpdj48ZGl2IHN0eWxlPVwiY29sb3I6IzRhNDAzMDtmb250LXNpemU6MThweDtvcGFjaXR5OjAuNTtcIj5cXHUyMTkyPC9kaXY+YDtcbiAgICBkaXNjQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGNsb3NlTW9kYWwoKTsgYXdhaXQgZmluaXNoV29ya291dChcImRpc2NpcGxpbmVcIik7IH07XG4gICAgYnRucy5hcHBlbmRDaGlsZChkaXNjQnRuKTtcblxuICAgIC8vIEZsb3cgYnV0dG9uXG4gICAgY29uc3QgZmxvd0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmxvd0J0bi5jbGFzc05hbWUgPSBcIm90dy1mZWVsLWJ0blwiO1xuICAgIGZsb3dCdG4uc3R5bGUuYm9yZGVyTGVmdCA9IGAzcHggc29saWQgJHtUSEVNRS5jb2xvckZsb3d9YDtcbiAgICBmbG93QnRuLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZToyNHB4O3dpZHRoOjQwcHg7dGV4dC1hbGlnbjpjZW50ZXI7XCI+XFx1RDgzQ1xcdURGMEE8L3NwYW4+PGRpdiBzdHlsZT1cImZsZXg6MTtcIj48ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvckZsb3d9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjYwMDtsZXR0ZXItc3BhY2luZzoxLjVweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7bWFyZ2luLWJvdHRvbTo0cHg7XCI+RmxvdzwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojNWE1YTVhO2ZvbnQtc2l6ZToxMXB4O2ZvbnQtc3R5bGU6aXRhbGljO1wiPkZlbHQgbmF0dXJhbCBhbmQgZWZmb3J0bGVzczwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojMzA0MDUwO2ZvbnQtc2l6ZToxOHB4O29wYWNpdHk6MC41O1wiPlxcdTIxOTI8L2Rpdj5gO1xuICAgIGZsb3dCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY2xvc2VNb2RhbCgpOyBhd2FpdCBmaW5pc2hXb3Jrb3V0KFwiZmxvd1wiKTsgfTtcbiAgICBidG5zLmFwcGVuZENoaWxkKGZsb3dCdG4pO1xuICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBBREQgRVhFUkNJU0UgTU9EQUxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiBvcGVuQWRkRXhlcmNpc2VNb2RhbChtdXNjbGUpIHtcbiAgY3JlYXRlTW9kYWwoXCJBZGQgRXhlcmNpc2UgLSBcIiArIG11c2NsZSwgKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmFtZUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBuYW1lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkV4ZXJjaXNlIG5hbWUuLi5cIjtcbiAgICBuYW1lSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoxMDAlO3BhZGRpbmc6MTJweDtiYWNrZ3JvdW5kOiMwZjBmMGY7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTRweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7YDtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG5cbiAgICBjb25zdCB3YXJtdXBMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2FybXVwTGFiZWwudGV4dENvbnRlbnQgPSBcIkluY2x1ZGUgd2FybXVwIHNldHM/XCI7XG4gICAgd2FybXVwTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O21hcmdpbi10b3A6MTJweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2FybXVwTGFiZWwpO1xuXG4gICAgbGV0IGluY1dhcm11cCA9IHRydWU7XG4gICAgY29uc3Qgd2FybXVwUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3YXJtdXBSb3cuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2dhcDo4cHg7bWFyZ2luLXRvcDo4cHg7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3YXJtdXBSb3cpO1xuXG4gICAgY29uc3QgeWVzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB5ZXNCdG4udGV4dENvbnRlbnQgPSBcIlllcyAoc3VnZ2VzdGVkKVwiO1xuICAgIHllc0J0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICB5ZXNCdG4uc3R5bGUuY3NzVGV4dCArPSBgZmxleDoxO2JhY2tncm91bmQ6cmdiYSgxNTQsMTQwLDEyMiwwLjIpO2JvcmRlci1jb2xvcjoke1RIRU1FLmNvbG9yfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtgO1xuICAgIGNvbnN0IG5vQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBub0J0bi50ZXh0Q29udGVudCA9IFwiTm9cIjtcbiAgICBub0J0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICBub0J0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgeWVzQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGluY1dhcm11cCA9IHRydWU7IHllc0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMilcIjsgeWVzQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3I7IG5vQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwZjBmMGZcIjsgbm9CdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvckJvcmRlcjsgfTtcbiAgICBub0J0bi5vbmNsaWNrID0gKCkgPT4geyBpbmNXYXJtdXAgPSBmYWxzZTsgbm9CdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxNTQsMTQwLDEyMiwwLjIpXCI7IG5vQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3I7IHllc0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMGYwZjBmXCI7IHllc0J0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFRIRU1FLmNvbG9yQm9yZGVyOyB9O1xuICAgIHdhcm11cFJvdy5hcHBlbmRDaGlsZCh5ZXNCdG4pO1xuICAgIHdhcm11cFJvdy5hcHBlbmRDaGlsZChub0J0bik7XG5cbiAgICBjb25zdCB3ZWlnaHRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgd2VpZ2h0TGFiZWwudGV4dENvbnRlbnQgPSBcIldvcmtpbmcgd2VpZ2h0IChrZykgLSAwIGZvciBib2R5d2VpZ2h0XCI7XG4gICAgd2VpZ2h0TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O21hcmdpbi10b3A6MTJweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VpZ2h0TGFiZWwpO1xuXG4gICAgY29uc3Qgd2VpZ2h0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgd2VpZ2h0SW5wdXQudHlwZSA9IFwibnVtYmVyXCI7XG4gICAgd2VpZ2h0SW5wdXQucGxhY2Vob2xkZXIgPSBcIjBcIjtcbiAgICB3ZWlnaHRJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjEwMCU7cGFkZGluZzoxMnB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tdG9wOjhweDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQod2VpZ2h0SW5wdXQpO1xuXG4gICAgY29uc3QgYnRuUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBidG5Sb3cuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2dhcDoxMnB4O21hcmdpbi10b3A6MTZweDtcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ0blJvdyk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIGNhbmNlbEJ0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgY2FuY2VsQnRuLm9uY2xpY2sgPSAoKSA9PiBjbG9zZU1vZGFsKCk7XG4gICAgYnRuUm93LmFwcGVuZENoaWxkKGNhbmNlbEJ0bik7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIEV4ZXJjaXNlXCI7XG4gICAgYWRkQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICBhZGRCdG4uc3R5bGUuZmxleCA9IFwiMVwiO1xuICAgIGFkZEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IG5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIW5hbWUpIHsgbm90aWNlKFwiUGxlYXNlIGVudGVyIGFuIGV4ZXJjaXNlIG5hbWVcIik7IHJldHVybjsgfVxuICAgICAgY29uc3Qgd3cgPSBwYXJzZUZsb2F0KHdlaWdodElucHV0LnZhbHVlKSB8fCAwO1xuICAgICAgY29uc3Qgc2V0cyA9IFtdO1xuICAgICAgaWYgKGluY1dhcm11cCAmJiB3dyA+IDApIHtcbiAgICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiBNYXRoLnJvdW5kKHd3ICogMC41KSwgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjcpLCByZXBzOiA2LCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogdHJ1ZSB9KTtcbiAgICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiBNYXRoLnJvdW5kKHd3ICogMC44NSksIHJlcHM6IDMsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgfVxuICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiB3dywgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICAgIHNldHMucHVzaCh7IHdlaWdodDogd3csIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IHd3LCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgICAgZXhlcmNpc2VzLnB1c2goeyBuYW1lLCBtdXNjbGUsIG11c2NsZUdyb3VwOiBtdXNjbGUsIHNldHMgfSk7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgICAgIHJlbmRlcigpO1xuICAgIH07XG4gICAgYnRuUm93LmFwcGVuZENoaWxkKGFkZEJ0bik7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IG5hbWVJbnB1dC5mb2N1cygpLCAxMDApO1xuICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRU5ERVI6IFNFVCBST1dcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5mdW5jdGlvbiByZW5kZXJTZXQoc2V0c0NvbnRhaW5lciwgc2V0LCBzZXRJZHgsIGV4LCB3YXJtdXBSZWZzKSB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvdy5jbGFzc05hbWUgPSBcIm90dy1zZXQtcm93XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNvbXBsZXRlZFwiIDogXCJcIik7XG4gIHNldHNDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgY29uc3QgcmVmcyA9IHsgd2VpZ2h0SW5wdXQ6IG51bGwgfTtcblxuICAvLyBDaGVja2JveFxuICBjb25zdCBjYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNiLmNsYXNzTmFtZSA9IFwib3R3LWNoZWNrYm94XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNoZWNrZWRcIiA6IFwiXCIpO1xuICBjYi50ZXh0Q29udGVudCA9IHNldC5jb21wbGV0ZWQgPyBcIlxcdTI3MTNcIiA6IFwiXCI7XG4gIGNiLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0LmNvbXBsZXRlZCA9ICFzZXQuY29tcGxldGVkO1xuICAgIGNiLmNsYXNzTmFtZSA9IFwib3R3LWNoZWNrYm94XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNoZWNrZWRcIiA6IFwiXCIpO1xuICAgIGNiLnRleHRDb250ZW50ID0gc2V0LmNvbXBsZXRlZCA/IFwiXFx1MjcxM1wiIDogXCJcIjtcbiAgICByb3cuY2xhc3NOYW1lID0gXCJvdHctc2V0LXJvd1wiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjb21wbGV0ZWRcIiA6IFwiXCIpO1xuICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICB9O1xuICByb3cuYXBwZW5kQ2hpbGQoY2IpO1xuXG4gIC8vIE1pZGRsZTogd2VpZ2h0ICsgcmVwc1xuICBjb25zdCBtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaWQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTJweDtmbGV4LXdyYXA6d3JhcDtcIjtcbiAgcm93LmFwcGVuZENoaWxkKG1pZCk7XG5cbiAgLy8gV2VpZ2h0IGlucHV0XG4gIGNvbnN0IHdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd1dyYXAuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O1wiO1xuICBtaWQuYXBwZW5kQ2hpbGQod1dyYXApO1xuICBjb25zdCB3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHdJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgd0lucHV0LnZhbHVlID0gc2V0LndlaWdodDtcbiAgd0lucHV0LmNsYXNzTmFtZSA9IFwib3R3LWlucHV0XCI7XG4gIGNvbnN0IGZpcnN0VyA9IGdldEZpcnN0V29ya2luZ1NldEluZGV4KGV4LnNldHMpO1xuICBjb25zdCBpc0ZpcnN0ID0gIXNldC5pc1dhcm11cCAmJiBzZXRJZHggPT09IGZpcnN0VztcbiAgd0lucHV0Lm9uY2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCBudyA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpIHx8IDA7XG4gICAgc2V0LndlaWdodCA9IG53O1xuICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICB1cGRhdGVXYXJtdXBXZWlnaHRzKGV4LCBudyk7XG4gICAgICBjb25zdCB3cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiBzLmlzV2FybXVwKTtcbiAgICAgIHdhcm11cFJlZnMuZm9yRWFjaCgoaW5wLCBpKSA9PiB7IGlmICh3c1tpXSkgaW5wLnZhbHVlID0gd3NbaV0ud2VpZ2h0OyB9KTtcbiAgICB9XG4gICAgYXdhaXQgc2F2ZVN0YXRlKCk7XG4gIH07XG4gIHdXcmFwLmFwcGVuZENoaWxkKHdJbnB1dCk7XG4gIHJlZnMud2VpZ2h0SW5wdXQgPSB3SW5wdXQ7XG4gIGNvbnN0IGtnTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2dMYWJlbC50ZXh0Q29udGVudCA9IFwia2dcIjtcbiAga2dMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7YDtcbiAgd1dyYXAuYXBwZW5kQ2hpbGQoa2dMYWJlbCk7XG5cbiAgLy8gUmVwcyBjb250cm9sc1xuICBjb25zdCByV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJXcmFwLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtcIjtcbiAgbWlkLmFwcGVuZENoaWxkKHJXcmFwKTtcbiAgY29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtaW51c0J0bi5jbGFzc05hbWUgPSBcIm90dy1jdHJsLWJ0blwiO1xuICBtaW51c0J0bi50ZXh0Q29udGVudCA9IFwiXFx1MjIxMlwiO1xuICBtaW51c0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBpZiAoc2V0LnJlcHMgPiAxKSB7IHNldC5yZXBzLS07IHJEaXNwLnRleHRDb250ZW50ID0gc2V0LnJlcHMgKyBcIlxcdTAwRDdcIjsgYXdhaXQgc2F2ZVN0YXRlKCk7IH0gfTtcbiAgcldyYXAuYXBwZW5kQ2hpbGQobWludXNCdG4pO1xuICBjb25zdCByRGlzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICByRGlzcC50ZXh0Q29udGVudCA9IHNldC5yZXBzICsgXCJcXHUwMEQ3XCI7XG4gIHJEaXNwLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO21pbi13aWR0aDozMHB4O3RleHQtYWxpZ246Y2VudGVyO2A7XG4gIHJXcmFwLmFwcGVuZENoaWxkKHJEaXNwKTtcbiAgY29uc3QgcGx1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsdXNCdG4uY2xhc3NOYW1lID0gXCJvdHctY3RybC1idG5cIjtcbiAgcGx1c0J0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICBwbHVzQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IHNldC5yZXBzKys7IHJEaXNwLnRleHRDb250ZW50ID0gc2V0LnJlcHMgKyBcIlxcdTAwRDdcIjsgYXdhaXQgc2F2ZVN0YXRlKCk7IH07XG4gIHJXcmFwLmFwcGVuZENoaWxkKHBsdXNCdG4pO1xuXG4gIGlmIChzZXQuaXNXYXJtdXApIHtcbiAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXdhcm11cC1iYWRnZVwiO1xuICAgIGJhZGdlLnRleHRDb250ZW50ID0gXCJcXHUyNkExIFdhcm11cFwiO1xuICAgIG1pZC5hcHBlbmRDaGlsZChiYWRnZSk7XG4gIH1cblxuICAvLyBEZWxldGUgc2V0IGJ1dHRvblxuICBpZiAoZXguc2V0cy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIlxcdTAwRDdcIjtcbiAgICBkZWxCdG4uc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjFweCBzb2xpZCAjM2EyODI4O2NvbG9yOiM2YTRhNGE7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE2cHg7YDtcbiAgICBkZWxCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgZXguc2V0cy5zcGxpY2Uoc2V0SWR4LCAxKTsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9O1xuICAgIHJvdy5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaC5zdHlsZS53aWR0aCA9IFwiMjhweFwiO1xuICAgIHJvdy5hcHBlbmRDaGlsZChwaCk7XG4gIH1cblxuICByZXR1cm4gcmVmcztcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBSRU5ERVI6IEVYRVJDSVNFIENBUkRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5hc3luYyBmdW5jdGlvbiByZW5kZXJFeGVyY2lzZShleENvbnRhaW5lciwgZXgpIHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuY2xhc3NOYW1lID0gXCJvdHctY2FyZFwiO1xuICBleENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgYWRkQ29ybmVycyhjYXJkLCBUSEVNRS5jb2xvciwgMTIpO1xuXG4gIGNvbnN0IGV4SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXhIZWFkZXIuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDttYXJnaW4tYm90dG9tOjEycHg7cGFkZGluZy1ib3R0b206MTJweDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICBjYXJkLmFwcGVuZENoaWxkKGV4SGVhZGVyKTtcblxuICBjb25zdCBsZWZ0Q29sID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGVmdENvbC5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gIGV4SGVhZGVyLmFwcGVuZENoaWxkKGxlZnRDb2wpO1xuXG4gIGNvbnN0IGV4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGV4VGl0bGUudGV4dENvbnRlbnQgPSBleC5uYW1lO1xuICBleFRpdGxlLnN0eWxlLmNzc1RleHQgPSBgbWFyZ2luOjAgMCA4cHggMDtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MTZweDtsZXR0ZXItc3BhY2luZzoxcHg7YDtcbiAgbGVmdENvbC5hcHBlbmRDaGlsZChleFRpdGxlKTtcblxuICAvLyBTdHJlbmd0aCBsZXZlbCArIFBSIGluZm9cbiAgY29uc3QgaGFzU3RkID0gYXdhaXQgaGFzU3RyZW5ndGhTdGFuZGFyZChleC5uYW1lKTtcbiAgY29uc3QgcHIgPSBhd2FpdCBnZXRFeGVyY2lzZVBSKGV4Lm5hbWUpO1xuICBjb25zdCB3b3JraW5nU2V0cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiAhcy5pc1dhcm11cCk7XG4gIGxldCBiZXN0VyA9IDAsIGJlc3RSID0gMCwgbWF4UiA9IDA7XG4gIHdvcmtpbmdTZXRzLmZvckVhY2goKHMpID0+IHsgaWYgKHMucmVwcyA+IG1heFIpIG1heFIgPSBzLnJlcHM7IGlmIChzLndlaWdodCA+IGJlc3RXIHx8IChzLndlaWdodCA9PT0gYmVzdFcgJiYgcy5yZXBzID4gYmVzdFIpKSB7IGJlc3RXID0gcy53ZWlnaHQ7IGJlc3RSID0gcy5yZXBzOyB9IH0pO1xuXG4gIGlmIChoYXNTdGQpIHtcbiAgICBsZXQgc2w7XG4gICAgaWYgKHByKSB7IHNsID0gcHIuaXNCb2R5d2VpZ2h0ID8gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCAwLCBwci5wclZhbHVlLCBwci5wclZhbHVlKSA6IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXgubmFtZSwgcHIud2VpZ2h0LCBwci5yZXBzLCBudWxsKTsgfVxuICAgIGVsc2UgaWYgKGJlc3RXID4gMCB8fCBtYXhSID4gMCkgeyBzbCA9IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXgubmFtZSwgYmVzdFcsIGJlc3RSLCBtYXhSKTsgfVxuICAgIGlmIChzbCkge1xuICAgICAgY29uc3QgbGkgPSBTVFJFTkdUSF9MRVZFTFNbc2wubGV2ZWxdO1xuICAgICAgY29uc3QgYmFkZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYmFkZ2UuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFkZ2VcIjtcbiAgICAgIGJhZGdlLnN0eWxlLmNzc1RleHQgKz0gYGJhY2tncm91bmQ6JHtzbC5jb2xvcn0yNTtib3JkZXI6MXB4IHNvbGlkICR7c2wuY29sb3J9NjA7Y29sb3I6JHtzbC5jb2xvcn07YDtcbiAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gKGxpPy5pY29uIHx8IFwiXFx1MjVDQlwiKSArIFwiIFwiICsgc2wubGV2ZWwudG9VcHBlckNhc2UoKTtcbiAgICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuXG4gICAgICBjb25zdCBybUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcm1JbmZvLnN0eWxlLmNzc1RleHQgPSBgZm9udC1zaXplOjExcHg7Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTttYXJnaW4tdG9wOjZweDtgO1xuICAgICAgcm1JbmZvLmlubmVySFRNTCA9IGA8c3Ryb25nIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvcn1cIj4ke3NsLmRpc3BsYXlMYWJlbH06ICR7c2wuY3VycmVudFZhbHVlfSR7c2wudW5pdH08L3N0cm9uZz5gO1xuICAgICAgaWYgKHNsLm5leHRUYXJnZXQpIHJtSW5mby5pbm5lckhUTUwgKz0gYCBcXHUyMTkyIE5leHQ6ICR7TWF0aC5yb3VuZChzbC5uZXh0VGFyZ2V0KX0ke3NsLnVuaXR9YDtcbiAgICAgIGxlZnRDb2wuYXBwZW5kQ2hpbGQocm1JbmZvKTtcblxuICAgICAgY29uc3QgcGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcGIuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFyXCI7XG4gICAgICBsZWZ0Q29sLmFwcGVuZENoaWxkKHBiKTtcbiAgICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZmlsbC5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1maWxsXCI7XG4gICAgICBmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1pbigxMDAsIHNsLnByb2dyZXNzKX0lO2JhY2tncm91bmQ6JHtzbC5jb2xvcn07YDtcbiAgICAgIHBiLmFwcGVuZENoaWxkKGZpbGwpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcikge1xuICAgIGNvbnN0IHByQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwckJveC5jbGFzc05hbWUgPSBcIm90dy1wci1ib3hcIjtcbiAgICBjb25zdCBwclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwclRpdGxlLnN0eWxlLmNzc1RleHQgPSBcImZvbnQtc2l6ZToxMXB4O2NvbG9yOiNhODk4NjA7Zm9udC13ZWlnaHQ6NzAwO2xldHRlci1zcGFjaW5nOjFweDtcIjtcbiAgICBwclRpdGxlLnRleHRDb250ZW50ID0gcHIuaXNCb2R5d2VpZ2h0ID8gXCJcXHVEODNDXFx1REZDNiBBTEwtVElNRSBQUjogXCIgKyBwci5wclZhbHVlICsgXCIgcmVwc1wiIDogXCJcXHVEODNDXFx1REZDNiBBTEwtVElNRSBQUjogXCIgKyBwci5lc3RpbWF0ZWQxUk0gKyBcImtnICgxUk0pXCI7XG4gICAgcHJCb3guYXBwZW5kQ2hpbGQocHJUaXRsZSk7XG4gICAgY29uc3QgcHJEZXRhaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByRGV0YWlsLnN0eWxlLmNzc1RleHQgPSBgZm9udC1zaXplOjEwcHg7Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtgO1xuICAgIHByRGV0YWlsLnRleHRDb250ZW50ID0gcHIuaXNCb2R5d2VpZ2h0ID8gXCJCZXN0OiBcIiArIHByLnJlcHMgKyBcIiByZXBzXCIgOiBcIlNldDogXCIgKyBwci53ZWlnaHQgKyBcImtnIFxcdTAwRDcgXCIgKyBwci5yZXBzICsgXCIgcmVwc1wiO1xuICAgIHByQm94LmFwcGVuZENoaWxkKHByRGV0YWlsKTtcbiAgICBsZWZ0Q29sLmFwcGVuZENoaWxkKHByQm94KTtcbiAgfVxuXG4gIC8vIERlbGV0ZSBleGVyY2lzZSBidXR0b25cbiAgY29uc3QgZGVsRXhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBkZWxFeEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1RDgzRFxcdURERDFcXHVGRTBGXCI7XG4gIGRlbEV4QnRuLnN0eWxlLmNzc1RleHQgPSBcImJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOm5vbmU7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE0cHg7b3BhY2l0eTowLjU7XCI7XG4gIGRlbEV4QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGNvbnN0IGlkeCA9IGV4ZXJjaXNlcy5pbmRleE9mKGV4KTsgaWYgKGlkeCA+IC0xKSB7IGV4ZXJjaXNlcy5zcGxpY2UoaWR4LCAxKTsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9IH07XG4gIGV4SGVhZGVyLmFwcGVuZENoaWxkKGRlbEV4QnRuKTtcblxuICAvLyBTZXRzXG4gIGNvbnN0IHNldHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZXRzQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjZweDtcIjtcbiAgY2FyZC5hcHBlbmRDaGlsZChzZXRzQ29udGFpbmVyKTtcbiAgY29uc3Qgd2FybXVwUmVmcyA9IFtdO1xuICBleC5zZXRzLmZvckVhY2goKHNldCwgc2V0SWR4KSA9PiB7XG4gICAgY29uc3QgcmVmcyA9IHJlbmRlclNldChzZXRzQ29udGFpbmVyLCBzZXQsIHNldElkeCwgZXgsIHdhcm11cFJlZnMpO1xuICAgIGlmIChzZXQuaXNXYXJtdXAgJiYgcmVmcy53ZWlnaHRJbnB1dCkgd2FybXVwUmVmcy5wdXNoKHJlZnMud2VpZ2h0SW5wdXQpO1xuICB9KTtcblxuICAvLyBBZGQgc2V0IGJ1dHRvblxuICBjb25zdCBhZGRTZXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRTZXRCdG4udGV4dENvbnRlbnQgPSBcIisgQWRkIFNldFwiO1xuICBhZGRTZXRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tZGFzaGVkXCI7XG4gIGFkZFNldEJ0bi5zdHlsZS5jc3NUZXh0ICs9IFwibWFyZ2luLXRvcDo4cHg7cGFkZGluZzo4cHggMTJweDtmb250LXNpemU6MTJweDtcIjtcbiAgYWRkU2V0QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgbGFzdCA9IGV4LnNldHNbZXguc2V0cy5sZW5ndGggLSAxXSB8fCB7IHdlaWdodDogMCwgcmVwczogMTAgfTtcbiAgICBleC5zZXRzLnB1c2goeyB3ZWlnaHQ6IGxhc3Qud2VpZ2h0LCByZXBzOiBsYXN0LnJlcHMsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICBhd2FpdCBzYXZlU3RhdGUoKTtcbiAgICByZW5kZXIoKTtcbiAgfTtcbiAgY2FyZC5hcHBlbmRDaGlsZChhZGRTZXRCdG4pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFNUQVRJU1RJQ1MgJiBIRUFUTUFQIERBVEFcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLyBNYXAgbXVzY2xlL3N1Ymdyb3VwIG5hbWVzIFx1MjE5MiBib2R5IHJlZ2lvbnMgZm9yIHRoZSBoZWF0bWFwXG5jb25zdCBNVVNDTEVfVE9fUkVHSU9OID0ge1xuICBOZWNrOiBbXCJuZWNrXCJdLCBDaGVzdDogW1wiY2hlc3RcIl0sIENvcmU6IFtcImNvcmVcIl0sXG4gIEJhY2s6IFtcImxhdHNcIiwgXCJ0cmFwc1wiLCBcImxvd2VyX2JhY2tcIl0sIExhdHM6IFtcImxhdHNcIl0sIFRyYXBzOiBbXCJ0cmFwc1wiXSxcbiAgUmhvbWJvaWRzOiBbXCJ0cmFwc1wiXSwgXCJMb3dlciBCYWNrXCI6IFtcImxvd2VyX2JhY2tcIl0sIFwiUmVhciBEZWx0c1wiOiBbXCJyZWFyX2RlbHRzXCJdLFxuICBTaG91bGRlcnM6IFtcImZyb250X2RlbHRzXCIsIFwicmVhcl9kZWx0c1wiXSwgXCJGcm9udCBEZWx0c1wiOiBbXCJmcm9udF9kZWx0c1wiXSxcbiAgXCJTaWRlIERlbHRzXCI6IFtcImZyb250X2RlbHRzXCJdLFxuICBMZWdzOiBbXCJxdWFkc1wiLCBcImhhbXN0cmluZ3NcIiwgXCJnbHV0ZXNcIiwgXCJjYWx2ZXNcIl0sIFF1YWRzOiBbXCJxdWFkc1wiXSxcbiAgSGFtc3RyaW5nczogW1wiaGFtc3RyaW5nc1wiXSwgR2x1dGVzOiBbXCJnbHV0ZXNcIl0sIENhbHZlczogW1wiY2FsdmVzXCJdLFxuICBBZGR1Y3RvcnM6IFtcInF1YWRzXCJdLFxuICBBcm1zOiBbXCJiaWNlcHNcIiwgXCJ0cmljZXBzXCIsIFwiZm9yZWFybXNcIl0sIEJpY2VwczogW1wiYmljZXBzXCJdLFxuICBUcmljZXBzOiBbXCJ0cmljZXBzXCJdLCBGb3JlYXJtczogW1wiZm9yZWFybXNcIl0sXG59O1xuXG5mdW5jdGlvbiBnZXRXZWVrbHlDYWxlbmRhckRhdGEoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbW9tZW50KCkuc3RhcnRPZihcImRheVwiKTtcbiAgY29uc3Qgd2Vla1N0YXJ0ID0gdG9kYXkuY2xvbmUoKS5zdGFydE9mKFwiaXNvV2Vla1wiKTtcbiAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICBjb25zdCBkYXlzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgY29uc3QgZGF5ID0gd2Vla1N0YXJ0LmNsb25lKCkuYWRkKGksIFwiZGF5c1wiKTtcbiAgICBjb25zdCBkYXlTdHIgPSBkYXkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcbiAgICBjb25zdCBpc1RvZGF5ID0gZGF5LmlzU2FtZSh0b2RheSwgXCJkYXlcIik7XG4gICAgY29uc3QgaXNQYXN0ID0gZGF5LmlzQmVmb3JlKHRvZGF5LCBcImRheVwiKTtcbiAgICBsZXQgc3RhdHVzID0gbnVsbCwgdHlwZSA9IG51bGw7XG4gICAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgICAgaWYgKHdGaWxlLmJhc2VuYW1lID09PSBkYXlTdHIpIHtcbiAgICAgICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgICAgIGlmIChmbSAmJiBmbS5Xb3Jrb3V0ID09PSB0cnVlKSB7IHN0YXR1cyA9IFwiZG9uZVwiOyB0eXBlID0gZm1bXCJXb3Jrb3V0LVR5cGVcIl0gfHwgXCJkb25lXCI7IH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGRheXMucHVzaCh7IGxhYmVsOiBkYXkuZm9ybWF0KFwiZGRcIilbMF0sIG51bTogZGF5LmZvcm1hdChcIkRcIiksIGlzVG9kYXksIGlzUGFzdCwgc3RhdHVzLCB0eXBlIH0pO1xuICB9XG4gIHJldHVybiBkYXlzO1xufVxuXG5mdW5jdGlvbiBnZXRNb250aGx5U3RhdHMoKSB7XG4gIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgY29uc3Qgbm93ID0gbW9tZW50KCk7XG4gIGNvbnN0IHdlZWtTdGFydCA9IG5vdy5jbG9uZSgpLnN0YXJ0T2YoXCJpc29XZWVrXCIpO1xuICBjb25zdCBtb250aFN0YXJ0ID0gbm93LmNsb25lKCkuc3RhcnRPZihcIm1vbnRoXCIpO1xuICBsZXQgdGhpc1dlZWsgPSAwLCB0aGlzTW9udGggPSAwLCB0b3RhbCA9IDAsIHRvdGFsU2V0cyA9IDAsIHRvdGFsVm9sdW1lID0gMDtcbiAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgIGlmICghZm0gfHwgZm0uV29ya291dCAhPT0gdHJ1ZSkgY29udGludWU7XG4gICAgdG90YWwrKztcbiAgICBjb25zdCBkYXRlTWF0Y2ggPSB3RmlsZS5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKTtcbiAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgY29uc3QgZmlsZURhdGUgPSBtb21lbnQoZGF0ZU1hdGNoWzFdLCBcIllZWVktTU0tRERcIik7XG4gICAgaWYgKGZpbGVEYXRlLmlzU2FtZU9yQWZ0ZXIod2Vla1N0YXJ0KSkgdGhpc1dlZWsrKztcbiAgICBpZiAoZmlsZURhdGUuaXNTYW1lT3JBZnRlcihtb250aFN0YXJ0KSkgdGhpc01vbnRoKys7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSkge1xuICAgICAgZm9yIChjb25zdCBleCBvZiBmbS5leGVyY2lzZXMpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGV4LnNldHMpKSBjb250aW51ZTtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIGV4LnNldHMpIHtcbiAgICAgICAgICBpZiAocy5jb21wbGV0ZWQgJiYgIXMuaXNXYXJtdXApIHsgdG90YWxTZXRzKys7IHRvdGFsVm9sdW1lICs9IChzLndlaWdodCB8fCAwKSAqIChzLnJlcHMgfHwgMCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4geyB0aGlzV2VlaywgdGhpc01vbnRoLCB0b3RhbCwgdG90YWxTZXRzLCB0b3RhbFZvbHVtZSB9O1xufVxuXG5mdW5jdGlvbiBnZXRSZWNlbnRTZXNzaW9ucyhsaW1pdCkge1xuICBsaW1pdCA9IGxpbWl0IHx8IDQ7XG4gIGNvbnN0IGFsbEZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihTRVRUSU5HUy53b3Jrb3V0Rm9sZGVyKTtcbiAgY29uc3Qgc29ydGVkID0gYWxsRmlsZXMuc29ydChmdW5jdGlvbihhLCBiKSB7IHJldHVybiBiLmJhc2VuYW1lLmxvY2FsZUNvbXBhcmUoYS5iYXNlbmFtZSk7IH0pO1xuICBjb25zdCBzZXNzaW9ucyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzZXNzaW9ucy5sZW5ndGggPj0gbGltaXQpIGJyZWFrO1xuICAgIHZhciB3RmlsZSA9IHNvcnRlZFtpXTtcbiAgICBpZiAod0ZpbGUucGF0aCA9PT0gZmlsZS5wYXRoKSBjb250aW51ZTtcbiAgICB2YXIgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlKSBjb250aW51ZTtcbiAgICB2YXIgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgc2Vzc2lvbnMucHVzaCh7XG4gICAgICBkYXRlOiBkYXRlTWF0Y2ggPyBkYXRlTWF0Y2hbMV0gOiB3RmlsZS5iYXNlbmFtZSxcbiAgICAgIHR5cGU6IGZtW1wiV29ya291dC1UeXBlXCJdIHx8IFwiZG9uZVwiLFxuICAgICAgbXVzY2xlczogZm0ubXVzY2xlR3JvdXBzIHx8IFtdLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBzZXNzaW9ucztcbn1cblxuLy8gQnVpbGQgc3RyZW5ndGggbGV2ZWwgZGF0YSBwZXIgYm9keSByZWdpb24gZnJvbSBBTEwgY29tcGxldGVkIHdvcmtvdXRzXG5hc3luYyBmdW5jdGlvbiBnZXRNdXNjbGVMZXZlbERhdGEoKSB7XG4gIGNvbnN0IGV4ZXJjaXNlQmVzdCA9IHt9OyAvLyBleGVyY2lzZU5hbWUgXHUyMTkyIHsgd2VpZ2h0LCByZXBzLCBtYXhSZXBzLCBtdXNjbGUgfVxuICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICBpZiAod0ZpbGUucGF0aCA9PT0gZmlsZS5wYXRoKSBjb250aW51ZTtcbiAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICBpZiAoIWZtIHx8IGZtLldvcmtvdXQgIT09IHRydWUgfHwgIUFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSkgY29udGludWU7XG4gICAgZm9yIChjb25zdCBleCBvZiBmbS5leGVyY2lzZXMpIHtcbiAgICAgIGNvbnN0IGRvbmUgPSAoZXguc2V0cyB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uKHMpIHsgcmV0dXJuIHMuY29tcGxldGVkICYmICFzLmlzV2FybXVwOyB9KTtcbiAgICAgIGlmIChkb25lLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG4gICAgICBsZXQgYmVzdFcgPSAwLCBiZXN0UiA9IDAsIG1heFIgPSAwO1xuICAgICAgZm9yIChjb25zdCBzIG9mIGRvbmUpIHtcbiAgICAgICAgaWYgKHMucmVwcyA+IG1heFIpIG1heFIgPSBzLnJlcHM7XG4gICAgICAgIGlmIChzLndlaWdodCA+IGJlc3RXIHx8IChzLndlaWdodCA9PT0gYmVzdFcgJiYgcy5yZXBzID4gYmVzdFIpKSB7IGJlc3RXID0gcy53ZWlnaHQ7IGJlc3RSID0gcy5yZXBzOyB9XG4gICAgICB9XG4gICAgICBjb25zdCBleGlzdGluZyA9IGV4ZXJjaXNlQmVzdFtleC5uYW1lXTtcbiAgICAgIGlmICghZXhpc3RpbmcpIHtcbiAgICAgICAgZXhlcmNpc2VCZXN0W2V4Lm5hbWVdID0geyB3ZWlnaHQ6IGJlc3RXLCByZXBzOiBiZXN0UiwgbWF4UmVwczogbWF4UiwgbXVzY2xlOiBleC5tdXNjbGUgfHwgZXgubXVzY2xlR3JvdXAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9sZFZhbCA9IGV4aXN0aW5nLndlaWdodCA+IDAgPyBjYWxjdWxhdGUxUk0oZXhpc3Rpbmcud2VpZ2h0LCBleGlzdGluZy5yZXBzKSA6IGV4aXN0aW5nLm1heFJlcHM7XG4gICAgICAgIGNvbnN0IG5ld1ZhbCA9IGJlc3RXID4gMCA/IGNhbGN1bGF0ZTFSTShiZXN0VywgYmVzdFIpIDogbWF4UjtcbiAgICAgICAgaWYgKG5ld1ZhbCA+IG9sZFZhbCkgZXhlcmNpc2VCZXN0W2V4Lm5hbWVdID0geyB3ZWlnaHQ6IGJlc3RXLCByZXBzOiBiZXN0UiwgbWF4UmVwczogbWF4UiwgbXVzY2xlOiBleC5tdXNjbGUgfHwgZXgubXVzY2xlR3JvdXAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gQ2FsY3VsYXRlIHN0cmVuZ3RoIGxldmVsIHBlciBleGVyY2lzZSwgbWFwIHRvIGJvZHkgcmVnaW9uc1xuICBjb25zdCByZWdpb25FbnRyaWVzID0ge307XG4gIGZvciAoY29uc3QgW2V4TmFtZSwgZGF0YV0gb2YgT2JqZWN0LmVudHJpZXMoZXhlcmNpc2VCZXN0KSkge1xuICAgIGNvbnN0IHNsID0gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleE5hbWUsIGRhdGEud2VpZ2h0LCBkYXRhLnJlcHMsIGRhdGEubWF4UmVwcyk7XG4gICAgaWYgKCFzbCkgY29udGludWU7XG4gICAgY29uc3QgcmVnaW9ucyA9IE1VU0NMRV9UT19SRUdJT05bZGF0YS5tdXNjbGVdIHx8IFtdO1xuICAgIGZvciAoY29uc3QgcmVnaW9uIG9mIHJlZ2lvbnMpIHtcbiAgICAgIGlmICghcmVnaW9uRW50cmllc1tyZWdpb25dKSByZWdpb25FbnRyaWVzW3JlZ2lvbl0gPSBbXTtcbiAgICAgIHJlZ2lvbkVudHJpZXNbcmVnaW9uXS5wdXNoKHsgbGV2ZWw6IHNsLmxldmVsLCBjb2xvcjogc2wuY29sb3IsIHByb2dyZXNzOiBzbC5wcm9ncmVzcyB9KTtcbiAgICB9XG4gIH1cbiAgLy8gUGljayB0aGUgYmVzdCBzdHJlbmd0aCBsZXZlbCBwZXIgcmVnaW9uXG4gIGNvbnN0IGxldmVsT3JkZXIgPSBbXCJVbnRyYWluZWRcIiwgXCJCZWdpbm5lclwiLCBcIk5vdmljZVwiLCBcIkludGVybWVkaWF0ZVwiLCBcIkFkdmFuY2VkXCIsIFwiRWxpdGVcIl07XG4gIGNvbnN0IHJlc3VsdCA9IHt9O1xuICBmb3IgKGNvbnN0IFtyZWdpb24sIGVudHJpZXNdIG9mIE9iamVjdC5lbnRyaWVzKHJlZ2lvbkVudHJpZXMpKSB7XG4gICAgbGV0IGJlc3QgPSBlbnRyaWVzWzBdLCBiZXN0SWR4ID0gbGV2ZWxPcmRlci5pbmRleE9mKGVudHJpZXNbMF0ubGV2ZWwpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaWR4ID0gbGV2ZWxPcmRlci5pbmRleE9mKGVudHJpZXNbaV0ubGV2ZWwpO1xuICAgICAgaWYgKGlkeCA+IGJlc3RJZHgpIHsgYmVzdElkeCA9IGlkeDsgYmVzdCA9IGVudHJpZXNbaV07IH1cbiAgICB9XG4gICAgcmVzdWx0W3JlZ2lvbl0gPSBiZXN0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQk9EWSBIRUFUTUFQIFNWRyBcdTIwMTQgSW50ZXJhY3RpdmUgd2l0aCBjbGljay10by1zaG93LXByb2dyZXNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgUkVHSU9OX0xBQkVMUyA9IHtcbiAgbmVjazogXCJOZWNrXCIsIGNoZXN0OiBcIkNoZXN0XCIsIGZyb250X2RlbHRzOiBcIkZyb250IERlbHRzXCIsIHJlYXJfZGVsdHM6IFwiUmVhciBEZWx0c1wiLFxuICBiaWNlcHM6IFwiQmljZXBzXCIsIHRyaWNlcHM6IFwiVHJpY2Vwc1wiLCBmb3JlYXJtczogXCJGb3JlYXJtc1wiLCBjb3JlOiBcIkNvcmVcIixcbiAgcXVhZHM6IFwiUXVhZHNcIiwgY2FsdmVzOiBcIkNhbHZlc1wiLCB0cmFwczogXCJUcmFwc1wiLCBsYXRzOiBcIkxhdHNcIixcbiAgbG93ZXJfYmFjazogXCJMb3dlciBCYWNrXCIsIGdsdXRlczogXCJHbHV0ZXNcIiwgaGFtc3RyaW5nczogXCJIYW1zdHJpbmdzXCIsXG59O1xuXG5mdW5jdGlvbiBidWlsZFN2Z1dpdGhPdmVybGF5KHN2Z0NvbnRlbnQsIG11c2NsZUxldmVscywgb25SZWdpb25DbGljaykge1xuICAvLyBDb250YWluZXIgd2l0aCBhY3R1YWwgU1ZHIGFzIGJhY2tncm91bmQgKyBjbGlja2FibGUgb3ZlcmxheSBob3RzcG90c1xuICBjb25zdCB3cmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd3JhcC5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO21heC13aWR0aDoyNDBweDttYXJnaW46MCBhdXRvO1wiO1xuXG4gIC8vIEluc2VydCBhY3R1YWwgU1ZHXG4gIGNvbnN0IHN2Z0hvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN2Z0hvbGRlci5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDoxMDAlO29wYWNpdHk6MC44NTtmaWx0ZXI6c2F0dXJhdGUoMC4zKSBicmlnaHRuZXNzKDAuNSk7XCI7XG4gIHN2Z0hvbGRlci5pbm5lckhUTUwgPSBzdmdDb250ZW50O1xuICAvLyBNYWtlIGVtYmVkZGVkIFNWRyByZXNwb25zaXZlXG4gIGNvbnN0IHN2Z0VsID0gc3ZnSG9sZGVyLnF1ZXJ5U2VsZWN0b3IoXCJzdmdcIik7XG4gIGlmIChzdmdFbCkge1xuICAgIHN2Z0VsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgc3ZnRWwuc3R5bGUuaGVpZ2h0ID0gXCJhdXRvXCI7XG4gICAgc3ZnRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuICB3cmFwLmFwcGVuZENoaWxkKHN2Z0hvbGRlcik7XG5cbiAgLy8gT3ZlcmxheSBjb250YWluZXIgZm9yIGhvdHNwb3RzIChzaXRzIG9uIHRvcCBvZiBTVkcpXG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1wiO1xuICB3cmFwLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gIC8vIENyZWF0ZSBjbGlja2FibGUgaG90c3BvdHMgZm9yIGZyb250IHZpZXdcbiAgY29uc3QgaG90c3BvdHMgPSBTVkdfSE9UU1BPVFMuZnJvbnQ7XG4gIGNvbnN0IG1pcnJvcnMgPSBTVkdfSE9UU1BPVFMucmlnaHRNaXJyb3I7XG5cbiAgZnVuY3Rpb24gY3JlYXRlSG90c3BvdChyZWdpb24sIGJvdW5kcykge1xuICAgIGNvbnN0IGhzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBocy5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOmFic29sdXRlO3RvcDoke2JvdW5kcy50b3B9JTtsZWZ0OiR7Ym91bmRzLmxlZnR9JTt3aWR0aDoke2JvdW5kcy53aWR0aH0lO2hlaWdodDoke2JvdW5kcy5oZWlnaHR9JTtjdXJzb3I6cG9pbnRlcjtib3JkZXItcmFkaXVzOjRweDt0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4xNXM7YDtcbiAgICBjb25zdCBsZXZlbERhdGEgPSBtdXNjbGVMZXZlbHNbcmVnaW9uXTtcbiAgICBpZiAobGV2ZWxEYXRhKSB7XG4gICAgICBocy5zdHlsZS5iYWNrZ3JvdW5kID0gbGV2ZWxEYXRhLmNvbG9yICsgXCIzMFwiO1xuICAgICAgaHMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgXCIgKyBsZXZlbERhdGEuY29sb3IgKyBcIjIwXCI7XG4gICAgfVxuICAgIGhzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsICgpID0+IHtcbiAgICAgIGhzLnN0eWxlLmJhY2tncm91bmQgPSAobGV2ZWxEYXRhID8gbGV2ZWxEYXRhLmNvbG9yIDogXCIjOWE4YzdhXCIpICsgXCI1MFwiO1xuICAgIH0pO1xuICAgIGhzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsICgpID0+IHtcbiAgICAgIGhzLnN0eWxlLmJhY2tncm91bmQgPSBsZXZlbERhdGEgPyBsZXZlbERhdGEuY29sb3IgKyBcIjMwXCIgOiBcInRyYW5zcGFyZW50XCI7XG4gICAgfSk7XG4gICAgaHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKG9uUmVnaW9uQ2xpY2spIG9uUmVnaW9uQ2xpY2socmVnaW9uKTtcbiAgICB9KTtcbiAgICAvLyBUb29sdGlwXG4gICAgY29uc3QgbGFiZWwgPSBSRUdJT05fTEFCRUxTW3JlZ2lvbl0gfHwgcmVnaW9uO1xuICAgIGhzLnRpdGxlID0gbGFiZWwgKyAobGV2ZWxEYXRhID8gXCIgXHUyMDE0IFwiICsgbGV2ZWxEYXRhLmxldmVsIDogXCJcIik7XG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChocyk7XG4gIH1cblxuICBmb3IgKGNvbnN0IFtyZWdpb24sIGJvdW5kc10gb2YgT2JqZWN0LmVudHJpZXMoaG90c3BvdHMpKSB7XG4gICAgY3JlYXRlSG90c3BvdChyZWdpb24sIGJvdW5kcyk7XG4gIH1cbiAgZm9yIChjb25zdCBbcmVnaW9uLCBib3VuZHNdIG9mIE9iamVjdC5lbnRyaWVzKG1pcnJvcnMpKSB7XG4gICAgY3JlYXRlSG90c3BvdChyZWdpb24sIGJvdW5kcyk7XG4gIH1cblxuICByZXR1cm4gd3JhcDtcbn1cblxuLy8gRmFsbGJhY2s6IHNpbXBsZSBwcm9ncmFtbWF0aWMgU1ZHIChpZiBhY3R1YWwgU1ZHIGZpbGVzIG5vdCBmb3VuZCBpbiB2YXVsdClcbmZ1bmN0aW9uIGJ1aWxkRmFsbGJhY2tCb2R5U3ZnKG11c2NsZUxldmVscywgb25SZWdpb25DbGljaykge1xuICBjb25zdCB1bnRyYWluZWQgPSBcIiMxYTE4MTZcIjtcbiAgZnVuY3Rpb24gZmlsbChyZWdpb24pIHtcbiAgICBjb25zdCBkID0gbXVzY2xlTGV2ZWxzW3JlZ2lvbl07XG4gICAgcmV0dXJuIGQgPyBkLmNvbG9yICsgXCI5MFwiIDogdW50cmFpbmVkO1xuICB9XG4gIGZ1bmN0aW9uIHN0cm9rZShyZWdpb24pIHtcbiAgICBjb25zdCBkID0gbXVzY2xlTGV2ZWxzW3JlZ2lvbl07XG4gICAgcmV0dXJuIGQgPyBkLmNvbG9yICsgXCI0MFwiIDogXCIjMmEyNTIwXCI7XG4gIH1cbiAgY29uc3QgZnJvbnRQYXRocyA9IHtcbiAgICBuZWNrOic8cGF0aCBkPVwiTTQ0LDI0IEw1NiwyNCBMNTUsMzEgTDQ1LDMxIFpcIi8+JyxcbiAgICBmcm9udF9kZWx0czonPHBhdGggZD1cIk0zMSwzMyBDMjUsMzMgMTksMzYgMTgsNDMgTDI2LDQzIEwzMSwzNyBaXCIvPjxwYXRoIGQ9XCJNNjksMzMgQzc1LDMzIDgxLDM2IDgyLDQzIEw3NCw0MyBMNjksMzcgWlwiLz4nLFxuICAgIGNoZXN0Oic8cGF0aCBkPVwiTTMxLDM3IEw0OSwzNyBMNDksNTUgQzQ5LDU3IDQyLDYwIDMzLDU4IEwzMSw1NiBaXCIvPjxwYXRoIGQ9XCJNNTEsMzcgTDY5LDM3IEw2OSw1NiBMNjcsNTggQzU4LDYwIDUxLDU3IDUxLDU1IFpcIi8+JyxcbiAgICBiaWNlcHM6JzxwYXRoIGQ9XCJNMTgsNDMgTDI2LDQzIEwyNiw2NSBDMjUsNjcgMTksNjcgMTgsNjUgWlwiLz48cGF0aCBkPVwiTTc0LDQzIEw4Miw0MyBMODIsNjUgQzgxLDY3IDc1LDY3IDc0LDY1IFpcIi8+JyxcbiAgICBmb3JlYXJtczonPHBhdGggZD1cIk0xOCw2OCBMMjYsNjggTDI0LDk2IEwxNiw5NiBaXCIvPjxwYXRoIGQ9XCJNNzQsNjggTDgyLDY4IEw4NCw5NiBMNzYsOTYgWlwiLz4nLFxuICAgIGNvcmU6JzxwYXRoIGQ9XCJNMzMsNTggTDY3LDU4IEw2NSw4MiBMMzUsODIgWlwiLz4nLFxuICAgIHF1YWRzOic8cGF0aCBkPVwiTTM1LDg0IEw0OSw4NCBMNDgsMTM2IEwzNCwxMzYgWlwiLz48cGF0aCBkPVwiTTUxLDg0IEw2NSw4NCBMNjYsMTM2IEw1MiwxMzYgWlwiLz4nLFxuICAgIGNhbHZlczonPHBhdGggZD1cIk0zNSwxNDAgTDQ4LDE0MCBMNDYsMTkwIEwzNywxOTAgWlwiLz48cGF0aCBkPVwiTTUyLDE0MCBMNjUsMTQwIEw2MywxOTAgTDU0LDE5MCBaXCIvPicsXG4gIH07XG4gIGNvbnN0IG5zID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAxMDAgMjEwXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvdHctaGVhdG1hcC1zdmdcIik7XG4gIGNvbnN0IGhlYWRHID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImdcIik7XG4gIGhlYWRHLmlubmVySFRNTCA9ICc8ZWxsaXBzZSBjeD1cIjUwXCIgY3k9XCIxNFwiIHJ4PVwiMTBcIiByeT1cIjExXCIgZmlsbD1cIiMwYzBjMGNcIiBzdHJva2U9XCIjMmEyNTIwXCIgc3Ryb2tlLXdpZHRoPVwiMC44XCIvPic7XG4gIHN2Zy5hcHBlbmRDaGlsZChoZWFkRyk7XG4gIGZvciAoY29uc3QgW3JlZ2lvbiwgcGF0aERhdGFdIG9mIE9iamVjdC5lbnRyaWVzKGZyb250UGF0aHMpKSB7XG4gICAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xuICAgIGcuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBmaWxsKHJlZ2lvbikpO1xuICAgIGcuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIHN0cm9rZShyZWdpb24pKTtcbiAgICBnLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjAuNlwiKTtcbiAgICBnLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgIGcuc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjE1c1wiO1xuICAgIGcuaW5uZXJIVE1MID0gcGF0aERhdGE7XG4gICAgZy5hZGRFdmVudExpc3RlbmVyKFwibW91c2VlbnRlclwiLCAoKSA9PiB7IGcuc3R5bGUub3BhY2l0eSA9IFwiMC43XCI7IH0pO1xuICAgIGcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4geyBnLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjsgfSk7XG4gICAgZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHsgZS5zdG9wUHJvcGFnYXRpb24oKTsgaWYgKG9uUmVnaW9uQ2xpY2spIG9uUmVnaW9uQ2xpY2socmVnaW9uKTsgfSk7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGcpO1xuICB9XG4gIHJldHVybiBzdmc7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBNdXNjbGUgUHJvZ3Jlc3MgUG9wdXAgKHdoZW4gY2xpY2tpbmcgYSBtdXNjbGUgb24gdGhlIGhlYXRtYXApIFx1MjUwMFx1MjUwMFxuXG5mdW5jdGlvbiBzaG93TXVzY2xlUHJvZ3Jlc3NQb3B1cChyZWdpb25JZCwgbXVzY2xlTGV2ZWxzKSB7XG4gIGNvbnN0IGxhYmVsID0gUkVHSU9OX0xBQkVMU1tyZWdpb25JZF0gfHwgcmVnaW9uSWQ7XG4gIGNvbnN0IGxldmVsRGF0YSA9IG11c2NsZUxldmVsc1tyZWdpb25JZF07XG5cbiAgY3JlYXRlTW9kYWwobGFiZWwudG9VcHBlckNhc2UoKSwgKGNvbnRlbnQpID0+IHtcbiAgICAvLyBDdXJyZW50IHN0cmVuZ3RoIGxldmVsXG4gICAgaWYgKGxldmVsRGF0YSkge1xuICAgICAgY29uc3QgbGkgPSBTVFJFTkdUSF9MRVZFTFNbbGV2ZWxEYXRhLmxldmVsXTtcbiAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhZGdlXCI7XG4gICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQ6JHtsZXZlbERhdGEuY29sb3J9MjU7Ym9yZGVyOjFweCBzb2xpZCAke2xldmVsRGF0YS5jb2xvcn02MDtjb2xvcjoke2xldmVsRGF0YS5jb2xvcn07bWFyZ2luOjhweCBhdXRvO2Rpc3BsYXk6aW5saW5lLWZsZXg7YDtcbiAgICAgIGJhZGdlLnRleHRDb250ZW50ID0gKGxpPy5pY29uIHx8IFwiXFx1MjVDQlwiKSArIFwiIFwiICsgbGV2ZWxEYXRhLmxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhZGdlKTtcblxuICAgICAgaWYgKGxldmVsRGF0YS5wcm9ncmVzcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcGIuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtYmFyXCI7XG4gICAgICAgIHBiLnN0eWxlLm1hcmdpblRvcCA9IFwiMTJweFwiO1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBiKTtcbiAgICAgICAgY29uc3QgZmlsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpbGwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgICAgICBmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1pbigxMDAsIGxldmVsRGF0YS5wcm9ncmVzcyl9JTtiYWNrZ3JvdW5kOiR7bGV2ZWxEYXRhLmNvbG9yfTtgO1xuICAgICAgICBwYi5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgbm9EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5vRGF0YS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zdHlsZTppdGFsaWM7cGFkZGluZzoxNnB4O2ZvbnQtc2l6ZToxMnB4O2A7XG4gICAgICBub0RhdGEudGV4dENvbnRlbnQgPSBcIk5vIHdvcmtvdXQgZGF0YSBmb3IgdGhpcyBtdXNjbGUgeWV0XCI7XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKG5vRGF0YSk7XG4gICAgfVxuXG4gICAgLy8gTW9udGhseSB3b3Jrb3V0IGZyZXF1ZW5jeSBjaGFydFxuICAgIGNvbnN0IGNoYXJ0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNoYXJ0TGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMHB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoyMHB4O2A7XG4gICAgY2hhcnRMYWJlbC50ZXh0Q29udGVudCA9IFwiTU9OVEhMWSBGUkVRVUVOQ1lcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNoYXJ0TGFiZWwpO1xuXG4gICAgLy8gRmluZCB3b3Jrb3V0cyB0aGF0IHRhcmdldGVkIHRoaXMgcmVnaW9uIGluIHRoZSBsYXN0IDMwIGRheXNcbiAgICBjb25zdCBhbGxGaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoU0VUVElOR1Mud29ya291dEZvbGRlcik7XG4gICAgY29uc3QgcmV2ZXJzZU1hcCA9IHt9O1xuICAgIGZvciAoY29uc3QgW211c2NsZSwgcmVnaW9uc10gb2YgT2JqZWN0LmVudHJpZXMoTVVTQ0xFX1RPX1JFR0lPTikpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByZWdpb25zKSB7XG4gICAgICAgIGlmICghcmV2ZXJzZU1hcFtyXSkgcmV2ZXJzZU1hcFtyXSA9IFtdO1xuICAgICAgICByZXZlcnNlTWFwW3JdLnB1c2gobXVzY2xlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0TXVzY2xlcyA9IHJldmVyc2VNYXBbcmVnaW9uSWRdIHx8IFtdO1xuXG4gICAgLy8gQ291bnQgd29ya291dHMgcGVyIHdlZWsgKGxhc3QgNCB3ZWVrcylcbiAgICBjb25zdCBub3cgPSBtb21lbnQoKTtcbiAgICBjb25zdCB3ZWVrQ291bnRzID0gWzAsIDAsIDAsIDBdO1xuICAgIGZvciAoY29uc3Qgd0ZpbGUgb2YgYWxsRmlsZXMpIHtcbiAgICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKHdGaWxlLnBhdGgpO1xuICAgICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlIHx8ICFBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgICBjb25zdCBmaWxlRGF0ZSA9IG1vbWVudChkYXRlTWF0Y2hbMV0sIFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgIGNvbnN0IGRheXNBZ28gPSBub3cuZGlmZihmaWxlRGF0ZSwgXCJkYXlzXCIpO1xuICAgICAgaWYgKGRheXNBZ28gPCAwIHx8IGRheXNBZ28gPiAyOCkgY29udGludWU7XG4gICAgICBjb25zdCBoYXNNdXNjbGUgPSBmbS5leGVyY2lzZXMuc29tZShleCA9PiB0YXJnZXRNdXNjbGVzLmluY2x1ZGVzKGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCkpO1xuICAgICAgaWYgKGhhc011c2NsZSkge1xuICAgICAgICBjb25zdCB3ZWVrSWR4ID0gTWF0aC5mbG9vcihkYXlzQWdvIC8gNyk7XG4gICAgICAgIGlmICh3ZWVrSWR4IDwgNCkgd2Vla0NvdW50c1szIC0gd2Vla0lkeF0rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXJMaW5lQ2hhcnQoY29udGVudCwgW1wiVzFcIiwgXCJXMlwiLCBcIlczXCIsIFwiVzRcIl0sIHdlZWtDb3VudHMpO1xuXG4gICAgLy8gVG9nZ2xlOiBtb250aGx5IFx1MjE5NCB5ZWFybHkgdmlld1xuICAgIGNvbnN0IHRvZ2dsZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdG9nZ2xlUm93LnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtnYXA6NnB4O2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luLXRvcDoxMnB4O1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodG9nZ2xlUm93KTtcblxuICAgIGNvbnN0IG1vbnRoQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtb250aEJ0bi50ZXh0Q29udGVudCA9IFwiTU9OVEhMWVwiO1xuICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICBtb250aEJ0bi5zdHlsZS5jc3NUZXh0ICs9IFwiZm9udC1zaXplOjEwcHg7cGFkZGluZzo4cHggMTZweDtmbGV4OjE7XCI7XG5cbiAgICBjb25zdCB5ZWFyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICB5ZWFyQnRuLnRleHRDb250ZW50ID0gXCJZRUFSTFlcIjtcbiAgICB5ZWFyQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIHllYXJCdG4uc3R5bGUuY3NzVGV4dCArPSBcImZvbnQtc2l6ZToxMHB4O3BhZGRpbmc6OHB4IDE2cHg7ZmxleDoxO1wiO1xuXG4gICAgdG9nZ2xlUm93LmFwcGVuZENoaWxkKG1vbnRoQnRuKTtcbiAgICB0b2dnbGVSb3cuYXBwZW5kQ2hpbGQoeWVhckJ0bik7XG5cbiAgICBjb25zdCBjaGFydENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjaGFydENvbnRhaW5lcik7XG5cbiAgICBmdW5jdGlvbiBzaG93TW9udGhseSgpIHtcbiAgICAgIGNoYXJ0Q29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICByZW5kZXJMaW5lQ2hhcnQoY2hhcnRDb250YWluZXIsIFtcIlcxXCIsIFwiVzJcIiwgXCJXM1wiLCBcIlc0XCJdLCB3ZWVrQ291bnRzKTtcbiAgICAgIG1vbnRoQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICAgIG1vbnRoQnRuLnN0eWxlLmNzc1RleHQgKz0gXCJmb250LXNpemU6MTBweDtwYWRkaW5nOjhweCAxNnB4O2ZsZXg6MTtcIjtcbiAgICAgIHllYXJCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gICAgICB5ZWFyQnRuLnN0eWxlLmNzc1RleHQgKz0gXCJmb250LXNpemU6MTBweDtwYWRkaW5nOjhweCAxNnB4O2ZsZXg6MTtcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93WWVhcmx5KCkge1xuICAgICAgY2hhcnRDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGNvbnN0IG1vbnRoQ291bnRzID0gbmV3IEFycmF5KDEyKS5maWxsKDApO1xuICAgICAgY29uc3QgbW9udGhMYWJlbHMgPSBbXCJKXCIsXCJGXCIsXCJNXCIsXCJBXCIsXCJNXCIsXCJKXCIsXCJKXCIsXCJBXCIsXCJTXCIsXCJPXCIsXCJOXCIsXCJEXCJdO1xuICAgICAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgICAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICAgICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlIHx8ICFBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBkYXRlTWF0Y2ggPSB3RmlsZS5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKTtcbiAgICAgICAgaWYgKCFkYXRlTWF0Y2gpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBmaWxlRGF0ZSA9IG1vbWVudChkYXRlTWF0Y2hbMV0sIFwiWVlZWS1NTS1ERFwiKTtcbiAgICAgICAgaWYgKG5vdy5kaWZmKGZpbGVEYXRlLCBcIm1vbnRoc1wiKSA+IDExKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgaGFzTXVzY2xlID0gZm0uZXhlcmNpc2VzLnNvbWUoZXggPT4gdGFyZ2V0TXVzY2xlcy5pbmNsdWRlcyhleC5tdXNjbGUgfHwgZXgubXVzY2xlR3JvdXApKTtcbiAgICAgICAgaWYgKGhhc011c2NsZSkgbW9udGhDb3VudHNbZmlsZURhdGUubW9udGgoKV0rKztcbiAgICAgIH1cbiAgICAgIHJlbmRlckxpbmVDaGFydChjaGFydENvbnRhaW5lciwgbW9udGhMYWJlbHMsIG1vbnRoQ291bnRzKTtcbiAgICAgIHllYXJCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICAgICAgeWVhckJ0bi5zdHlsZS5jc3NUZXh0ICs9IFwiZm9udC1zaXplOjEwcHg7cGFkZGluZzo4cHggMTZweDtmbGV4OjE7XCI7XG4gICAgICBtb250aEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgICAgIG1vbnRoQnRuLnN0eWxlLmNzc1RleHQgKz0gXCJmb250LXNpemU6MTBweDtwYWRkaW5nOjhweCAxNnB4O2ZsZXg6MTtcIjtcbiAgICB9XG5cbiAgICBtb250aEJ0bi5vbmNsaWNrID0gc2hvd01vbnRobHk7XG4gICAgeWVhckJ0bi5vbmNsaWNrID0gc2hvd1llYXJseTtcbiAgfSk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBPdmVyYWxsIFByb2dyZXNzIFBvcHVwIChib3RoIG92ZXJhbGwgKyBwZXItbXVzY2xlKSBcdTI1MDBcdTI1MDBcblxuYXN5bmMgZnVuY3Rpb24gc2hvd092ZXJhbGxQcm9ncmVzc1BvcHVwKG11c2NsZUxldmVscykge1xuICBjcmVhdGVNb2RhbChcIlNUUkVOR1RIIFBST0dSRVNTXCIsIChjb250ZW50KSA9PiB7XG4gICAgLy8gMSkgT3ZlcmFsbCBzdHJlbmd0aCB0cmVuZCBcdTIwMTQgYXZlcmFnZSBzdHJlbmd0aCBsZXZlbCBhY3Jvc3MgYWxsIHJlZ2lvbnNcbiAgICBjb25zdCBvdmVyTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEwcHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjhweDtgO1xuICAgIG92ZXJMYWJlbC50ZXh0Q29udGVudCA9IFwiT1ZFUkFMTCBTVFJFTkdUSFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQob3ZlckxhYmVsKTtcblxuICAgIC8vIFN1bW1hcml6ZSBjdXJyZW50IHN0cmVuZ3RoIGxldmVsc1xuICAgIGNvbnN0IGxldmVsT3JkZXIgPSBbXCJVbnRyYWluZWRcIiwgXCJCZWdpbm5lclwiLCBcIk5vdmljZVwiLCBcIkludGVybWVkaWF0ZVwiLCBcIkFkdmFuY2VkXCIsIFwiRWxpdGVcIl07XG4gICAgY29uc3QgcmVnaW9uTGV2ZWxzID0gT2JqZWN0LmVudHJpZXMobXVzY2xlTGV2ZWxzKTtcbiAgICBpZiAocmVnaW9uTGV2ZWxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3Qgbm9EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIG5vRGF0YS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjEycHg7Zm9udC1zdHlsZTppdGFsaWM7cGFkZGluZzoxMnB4O2A7XG4gICAgICBub0RhdGEudGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlIHNvbWUgd29ya291dHMgdG8gc2VlIHlvdXIgc3RyZW5ndGggcHJvZ3Jlc3NcIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9EYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQXZlcmFnZSBwcm9ncmVzcyB2YWx1ZVxuICAgICAgbGV0IHRvdGFsUHJvZ3Jlc3MgPSAwO1xuICAgICAgZm9yIChjb25zdCBbLCBkYXRhXSBvZiByZWdpb25MZXZlbHMpIHtcbiAgICAgICAgY29uc3QgaWR4ID0gbGV2ZWxPcmRlci5pbmRleE9mKGRhdGEubGV2ZWwpO1xuICAgICAgICB0b3RhbFByb2dyZXNzICs9IChpZHggLyA1KSAqIDEwMCArIChkYXRhLnByb2dyZXNzIHx8IDApICogKDEvNSk7XG4gICAgICB9XG4gICAgICBjb25zdCBhdmdQcm9ncmVzcyA9IHRvdGFsUHJvZ3Jlc3MgLyByZWdpb25MZXZlbHMubGVuZ3RoO1xuICAgICAgY29uc3QgYXZnTGV2ZWxJZHggPSBNYXRoLm1pbig1LCBNYXRoLmZsb29yKGF2Z1Byb2dyZXNzIC8gMjApKTtcbiAgICAgIGNvbnN0IGF2Z0xldmVsID0gbGV2ZWxPcmRlclthdmdMZXZlbElkeF07XG4gICAgICBjb25zdCBhdmdDb2xvciA9IFNUUkVOR1RIX0xFVkVMU1thdmdMZXZlbF0/LmNvbG9yIHx8IFwiIzZhNmE2YVwiO1xuXG4gICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiYWRnZS5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYWRnZVwiO1xuICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kOiR7YXZnQ29sb3J9MjU7Ym9yZGVyOjFweCBzb2xpZCAke2F2Z0NvbG9yfTYwO2NvbG9yOiR7YXZnQ29sb3J9O21hcmdpbjowIGF1dG8gMTJweDtkaXNwbGF5OmlubGluZS1mbGV4O2A7XG4gICAgICBiYWRnZS50ZXh0Q29udGVudCA9IGF2Z0xldmVsLnRvVXBwZXJDYXNlKCkgKyBcIiAoYXZnKVwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChiYWRnZSk7XG5cbiAgICAgIGNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBiLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhclwiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYik7XG4gICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZpbGwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgICAgZmlsbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7TWF0aC5taW4oMTAwLCBhdmdQcm9ncmVzcyl9JTtiYWNrZ3JvdW5kOiR7YXZnQ29sb3J9O2A7XG4gICAgICBwYi5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICB9XG5cbiAgICAvLyBNb250aGx5IGNvbXBsZXRpb25zIGNoYXJ0IChhbGwgd29ya291dHMpXG4gICAgY29uc3QgYWxsRmlsZXMgPSBnZXRGaWxlc0luRm9sZGVyKFNFVFRJTkdTLndvcmtvdXRGb2xkZXIpO1xuICAgIGNvbnN0IG5vdyA9IG1vbWVudCgpO1xuICAgIGNvbnN0IHdlZWtDb3VudHMgPSBbMCwgMCwgMCwgMF07XG4gICAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgICAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEod0ZpbGUucGF0aCk7XG4gICAgICBpZiAoIWZtIHx8IGZtLldvcmtvdXQgIT09IHRydWUpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgZGF0ZU1hdGNoID0gd0ZpbGUuYmFzZW5hbWUubWF0Y2goL14oXFxkezR9LVxcZHsyfS1cXGR7Mn0pLyk7XG4gICAgICBpZiAoIWRhdGVNYXRjaCkgY29udGludWU7XG4gICAgICBjb25zdCBkYXlzQWdvID0gbm93LmRpZmYobW9tZW50KGRhdGVNYXRjaFsxXSwgXCJZWVlZLU1NLUREXCIpLCBcImRheXNcIik7XG4gICAgICBpZiAoZGF5c0FnbyA8IDAgfHwgZGF5c0FnbyA+IDI4KSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHdlZWtJZHggPSBNYXRoLmZsb29yKGRheXNBZ28gLyA3KTtcbiAgICAgIGlmICh3ZWVrSWR4IDwgNCkgd2Vla0NvdW50c1szIC0gd2Vla0lkeF0rKztcbiAgICB9XG5cbiAgICAvLyBDaGFydCAxOiBPdmVyYWxsIHN0cmVuZ3RoIGN1cnZlICh3b3Jrb3V0cyBwZXIgd2VlayBhcyBhIHRyZW5kKVxuICAgIGNvbnN0IGMxTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGMxTGFiZWwuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMHB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1hbGlnbjpjZW50ZXI7bWFyZ2luLXRvcDoxNnB4O2A7XG4gICAgYzFMYWJlbC50ZXh0Q29udGVudCA9IFwiT1ZFUkFMTCBTVFJFTkdUSFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYzFMYWJlbCk7XG4gICAgcmVuZGVyTGluZUNoYXJ0KGNvbnRlbnQsIFtcIlcxXCIsIFwiVzJcIiwgXCJXM1wiLCBcIlc0XCJdLCB3ZWVrQ291bnRzLCBUSEVNRS5jb2xvcik7XG5cbiAgICAvLyBDaGFydCAyOiBQZXItbXVzY2xlIG11bHRpLWxpbmUgYnJlYWtkb3duXG4gICAgY29uc3QgbXVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG11c0xhYmVsLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTBweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi10b3A6MjBweDtgO1xuICAgIG11c0xhYmVsLnRleHRDb250ZW50ID0gXCJCWSBNVVNDTEUgR1JPVVBcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG11c0xhYmVsKTtcblxuICAgIC8vIEJ1aWxkIHBlci1tdXNjbGUgd29ya291dCBmcmVxdWVuY3kgZGF0YSAobGFzdCA0IHdlZWtzKVxuICAgIGNvbnN0IG11c2NsZUNvbG9ycyA9IFtcIiM5YThjN2FcIiwgXCIjYTg5ODYwXCIsIFwiIzdhOWE3ZFwiLCBcIiM2YThhOWFcIiwgXCIjOGE3YTlhXCIsIFwiIzlhNmE3YVwiLCBcIiM2YTVhNGFcIl07XG4gICAgY29uc3QgbXVzY2xlU2VyaWVzRGF0YSA9IFtdO1xuICAgIGxldCBjb2xvcklkeCA9IDA7XG4gICAgY29uc3QgcmV2ZXJzZU1hcEFsbCA9IHt9O1xuICAgIGZvciAoY29uc3QgW211c2NsZSwgcmVnaW9uc10gb2YgT2JqZWN0LmVudHJpZXMoTVVTQ0xFX1RPX1JFR0lPTikpIHtcbiAgICAgIGZvciAoY29uc3QgciBvZiByZWdpb25zKSB7XG4gICAgICAgIGlmICghcmV2ZXJzZU1hcEFsbFtyXSkgcmV2ZXJzZU1hcEFsbFtyXSA9IFtdO1xuICAgICAgICByZXZlcnNlTWFwQWxsW3JdLnB1c2gobXVzY2xlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IFtyZWdpb24sIGRhdGFdIG9mIHJlZ2lvbkxldmVscykge1xuICAgICAgY29uc3QgdGFyZ2V0TXVzY2xlcyA9IHJldmVyc2VNYXBBbGxbcmVnaW9uXSB8fCBbXTtcbiAgICAgIGNvbnN0IHdrQ291bnRzID0gWzAsIDAsIDAsIDBdO1xuICAgICAgZm9yIChjb25zdCB3RmlsZSBvZiBhbGxGaWxlcykge1xuICAgICAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YSh3RmlsZS5wYXRoKTtcbiAgICAgICAgaWYgKCFmbSB8fCBmbS5Xb3Jrb3V0ICE9PSB0cnVlIHx8ICFBcnJheS5pc0FycmF5KGZtLmV4ZXJjaXNlcykpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBkYXRlTWF0Y2ggPSB3RmlsZS5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKTtcbiAgICAgICAgaWYgKCFkYXRlTWF0Y2gpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBkYXlzQWdvID0gbm93LmRpZmYobW9tZW50KGRhdGVNYXRjaFsxXSwgXCJZWVlZLU1NLUREXCIpLCBcImRheXNcIik7XG4gICAgICAgIGlmIChkYXlzQWdvIDwgMCB8fCBkYXlzQWdvID4gMjgpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCBoYXNNdXNjbGUgPSBmbS5leGVyY2lzZXMuc29tZShleCA9PiB0YXJnZXRNdXNjbGVzLmluY2x1ZGVzKGV4Lm11c2NsZSB8fCBleC5tdXNjbGVHcm91cCkpO1xuICAgICAgICBpZiAoaGFzTXVzY2xlKSB7XG4gICAgICAgICAgY29uc3Qgd2Vla0lkeCA9IE1hdGguZmxvb3IoZGF5c0FnbyAvIDcpO1xuICAgICAgICAgIGlmICh3ZWVrSWR4IDwgNCkgd2tDb3VudHNbMyAtIHdlZWtJZHhdKys7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG11c2NsZVNlcmllc0RhdGEucHVzaCh7XG4gICAgICAgIG5hbWU6IFJFR0lPTl9MQUJFTFNbcmVnaW9uXSB8fCByZWdpb24sXG4gICAgICAgIHZhbHVlczogd2tDb3VudHMsXG4gICAgICAgIGNvbG9yOiBtdXNjbGVDb2xvcnNbY29sb3JJZHggJSBtdXNjbGVDb2xvcnMubGVuZ3RoXSxcbiAgICAgIH0pO1xuICAgICAgY29sb3JJZHgrKztcbiAgICB9XG5cbiAgICBpZiAobXVzY2xlU2VyaWVzRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICByZW5kZXJNdWx0aUxpbmVDaGFydChjb250ZW50LCBbXCJXMVwiLCBcIlcyXCIsIFwiVzNcIiwgXCJXNFwiXSwgbXVzY2xlU2VyaWVzRGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBub0RhdGEuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O3RleHQtYWxpZ246Y2VudGVyO2ZvbnQtc2l6ZToxMnB4O2ZvbnQtc3R5bGU6aXRhbGljO3BhZGRpbmc6MTJweDtgO1xuICAgICAgbm9EYXRhLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZSBzb21lIHdvcmtvdXRzIHRvIHNlZSBwZXItbXVzY2xlIHRyZW5kc1wiO1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChub0RhdGEpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBMaW5lIGNoYXJ0IGhlbHBlciAodXNlZCBpbiBwcm9ncmVzcyBwb3B1cHMgXHUyMDE0IHNtb290aCBjdXJ2ZSkgXHUyNTAwXHUyNTAwXG5cbmZ1bmN0aW9uIHJlbmRlckxpbmVDaGFydChwYXJlbnQsIGxhYmVscywgdmFsdWVzLCBjb2xvcikge1xuICBjb2xvciA9IGNvbG9yIHx8IFRIRU1FLmNvbG9yO1xuICBjb25zdCBtYXhWYWwgPSBNYXRoLm1heCguLi52YWx1ZXMsIDEpO1xuICBjb25zdCBucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3QgdyA9IDI2MCwgaCA9IDgwO1xuICBjb25zdCBwYWRMID0gNCwgcGFkUiA9IDQsIHBhZFQgPSA4LCBwYWRCID0gMTY7XG4gIGNvbnN0IGNoYXJ0VyA9IHcgLSBwYWRMIC0gcGFkUjtcbiAgY29uc3QgY2hhcnRIID0gaCAtIHBhZFQgLSBwYWRCO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3fSAke2h9YCk7XG4gIHN2Zy5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDoxMDAlO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjhweCAwO1wiO1xuXG4gIC8vIEdyaWQgbGluZXNcbiAgZm9yIChsZXQgZyA9IDA7IGcgPD0gMjsgZysrKSB7XG4gICAgY29uc3QgZ3kgPSBwYWRUICsgKGcgLyAyKSAqIGNoYXJ0SDtcbiAgICBjb25zdCBsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcImxpbmVcIik7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJ4MVwiLCBTdHJpbmcocGFkTCkpOyBsaW5lLnNldEF0dHJpYnV0ZShcIngyXCIsIFN0cmluZyh3IC0gcGFkUikpO1xuICAgIGxpbmUuc2V0QXR0cmlidXRlKFwieTFcIiwgU3RyaW5nKGd5KSk7IGxpbmUuc2V0QXR0cmlidXRlKFwieTJcIiwgU3RyaW5nKGd5KSk7XG4gICAgbGluZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMDgpXCIpOyBsaW5lLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjAuNVwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQobGluZSk7XG4gIH1cblxuICAvLyBCdWlsZCBwb2ludHNcbiAgY29uc3QgcG9pbnRzID0gdmFsdWVzLm1hcCgodiwgaSkgPT4ge1xuICAgIGNvbnN0IHggPSBwYWRMICsgKGkgLyBNYXRoLm1heCgxLCB2YWx1ZXMubGVuZ3RoIC0gMSkpICogY2hhcnRXO1xuICAgIGNvbnN0IHkgPSBwYWRUICsgY2hhcnRIIC0gKHYgLyBtYXhWYWwpICogY2hhcnRIO1xuICAgIHJldHVybiB7IHgsIHkgfTtcbiAgfSk7XG5cbiAgLy8gU21vb3RoIGN1cnZlIChDYXRtdWxsLVJvbSBcdTIxOTIgY3ViaWMgYmV6aWVyKVxuICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICBsZXQgZCA9IGBNICR7cG9pbnRzWzBdLnh9ICR7cG9pbnRzWzBdLnl9YDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGNvbnN0IHAwID0gcG9pbnRzW01hdGgubWF4KDAsIGkgLSAxKV07XG4gICAgICBjb25zdCBwMSA9IHBvaW50c1tpXTtcbiAgICAgIGNvbnN0IHAyID0gcG9pbnRzW2kgKyAxXTtcbiAgICAgIGNvbnN0IHAzID0gcG9pbnRzW01hdGgubWluKHBvaW50cy5sZW5ndGggLSAxLCBpICsgMildO1xuICAgICAgY29uc3QgY3AxeCA9IHAxLnggKyAocDIueCAtIHAwLngpIC8gNjtcbiAgICAgIGNvbnN0IGNwMXkgPSBwMS55ICsgKHAyLnkgLSBwMC55KSAvIDY7XG4gICAgICBjb25zdCBjcDJ4ID0gcDIueCAtIChwMy54IC0gcDEueCkgLyA2O1xuICAgICAgY29uc3QgY3AyeSA9IHAyLnkgLSAocDMueSAtIHAxLnkpIC8gNjtcbiAgICAgIGQgKz0gYCBDICR7Y3AxeH0gJHtjcDF5fSwgJHtjcDJ4fSAke2NwMnl9LCAke3AyLnh9ICR7cDIueX1gO1xuICAgIH1cblxuICAgIC8vIEFyZWEgZmlsbFxuICAgIGNvbnN0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicGF0aFwiKTtcbiAgICBjb25zdCBhcmVhRCA9IGQgKyBgIEwgJHtwb2ludHNbcG9pbnRzLmxlbmd0aC0xXS54fSAke3BhZFQgKyBjaGFydEh9IEwgJHtwb2ludHNbMF0ueH0gJHtwYWRUICsgY2hhcnRIfSBaYDtcbiAgICBhcmVhLnNldEF0dHJpYnV0ZShcImRcIiwgYXJlYUQpO1xuICAgIGFyZWEuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBjb2xvcik7IGFyZWEuc2V0QXR0cmlidXRlKFwib3BhY2l0eVwiLCBcIjAuMDhcIik7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGFyZWEpO1xuXG4gICAgLy8gQ3VydmUgbGluZVxuICAgIGNvbnN0IHBhdGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwicGF0aFwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcImRcIiwgZCk7XG4gICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgICBwYXRoLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBjb2xvcik7IHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMS41XCIpO1xuICAgIHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gIH1cblxuICAvLyBEYXRhIGRvdHNcbiAgZm9yIChjb25zdCBwdCBvZiBwb2ludHMpIHtcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobnMsIFwiY2lyY2xlXCIpO1xuICAgIGRvdC5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBTdHJpbmcocHQueCkpOyBkb3Quc2V0QXR0cmlidXRlKFwiY3lcIiwgU3RyaW5nKHB0LnkpKTtcbiAgICBkb3Quc2V0QXR0cmlidXRlKFwiclwiLCBcIjIuNVwiKTsgZG90LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgY29sb3IpO1xuICAgIHN2Zy5hcHBlbmRDaGlsZChkb3QpO1xuICB9XG5cbiAgLy8gWC1heGlzIGxhYmVsc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHggPSBwYWRMICsgKGkgLyBNYXRoLm1heCgxLCBsYWJlbHMubGVuZ3RoIC0gMSkpICogY2hhcnRXO1xuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7IHR4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhoIC0gMikpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMTU0LDE0MCwxMjIsMC40KVwiKTsgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjdcIik7XG4gICAgdHh0LnRleHRDb250ZW50ID0gbGFiZWxzW2ldO1xuICAgIHN2Zy5hcHBlbmRDaGlsZCh0eHQpO1xuICB9XG5cbiAgcGFyZW50LmFwcGVuZENoaWxkKHN2Zyk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBNdWx0aS1saW5lIGNoYXJ0IGhlbHBlciAoZm9yIHBlci1tdXNjbGUgYnJlYWtkb3duKSBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gcmVuZGVyTXVsdGlMaW5lQ2hhcnQocGFyZW50LCBsYWJlbHMsIHNlcmllcykge1xuICBjb25zdCBhbGxWYWxzID0gc2VyaWVzLmZsYXRNYXAocyA9PiBzLnZhbHVlcyk7XG4gIGNvbnN0IG1heFZhbCA9IE1hdGgubWF4KC4uLmFsbFZhbHMsIDEpO1xuICBjb25zdCBucyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgY29uc3QgdyA9IDI2MCwgaCA9IDkwO1xuICBjb25zdCBwYWRMID0gNCwgcGFkUiA9IDQsIHBhZFQgPSA4LCBwYWRCID0gMTY7XG4gIGNvbnN0IGNoYXJ0VyA9IHcgLSBwYWRMIC0gcGFkUjtcbiAgY29uc3QgY2hhcnRIID0gaCAtIHBhZFQgLSBwYWRCO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHt3fSAke2h9YCk7XG4gIHN2Zy5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDoxMDAlO2hlaWdodDphdXRvO2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjhweCAwO1wiO1xuXG4gIGZvciAoY29uc3QgcyBvZiBzZXJpZXMpIHtcbiAgICBjb25zdCBwb2ludHMgPSBzLnZhbHVlcy5tYXAoKHYsIGkpID0+ICh7XG4gICAgICB4OiBwYWRMICsgKGkgLyBNYXRoLm1heCgxLCBzLnZhbHVlcy5sZW5ndGggLSAxKSkgKiBjaGFydFcsXG4gICAgICB5OiBwYWRUICsgY2hhcnRIIC0gKHYgLyBtYXhWYWwpICogY2hhcnRILFxuICAgIH0pKTtcbiAgICBpZiAocG9pbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGxldCBkID0gYE0gJHtwb2ludHNbMF0ueH0gJHtwb2ludHNbMF0ueX1gO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHAwID0gcG9pbnRzW01hdGgubWF4KDAsIGkgLSAxKV07XG4gICAgICAgIGNvbnN0IHAxID0gcG9pbnRzW2ldO1xuICAgICAgICBjb25zdCBwMiA9IHBvaW50c1tpICsgMV07XG4gICAgICAgIGNvbnN0IHAzID0gcG9pbnRzW01hdGgubWluKHBvaW50cy5sZW5ndGggLSAxLCBpICsgMildO1xuICAgICAgICBkICs9IGAgQyAke3AxLngrKHAyLngtcDAueCkvNn0gJHtwMS55KyhwMi55LXAwLnkpLzZ9LCAke3AyLngtKHAzLngtcDEueCkvNn0gJHtwMi55LShwMy55LXAxLnkpLzZ9LCAke3AyLnh9ICR7cDIueX1gO1xuICAgICAgfVxuICAgICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJwYXRoXCIpO1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJkXCIsIGQpOyBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgcy5jb2xvcik7IHBhdGguc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFwiMS4yXCIpO1xuICAgICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpOyBwYXRoLnNldEF0dHJpYnV0ZShcIm9wYWNpdHlcIiwgXCIwLjhcIik7XG4gICAgICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG4gICAgfVxuICB9XG5cbiAgLy8gWC1heGlzIGxhYmVsc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxhYmVscy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHggPSBwYWRMICsgKGkgLyBNYXRoLm1heCgxLCBsYWJlbHMubGVuZ3RoIC0gMSkpICogY2hhcnRXO1xuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJ0ZXh0XCIpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIFN0cmluZyh4KSk7IHR4dC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFN0cmluZyhoIC0gMikpO1xuICAgIHR4dC5zZXRBdHRyaWJ1dGUoXCJ0ZXh0LWFuY2hvclwiLCBcIm1pZGRsZVwiKTtcbiAgICB0eHQuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcInJnYmEoMTU0LDE0MCwxMjIsMC40KVwiKTsgdHh0LnNldEF0dHJpYnV0ZShcImZvbnQtc2l6ZVwiLCBcIjdcIik7XG4gICAgdHh0LnRleHRDb250ZW50ID0gbGFiZWxzW2ldO1xuICAgIHN2Zy5hcHBlbmRDaGlsZCh0eHQpO1xuICB9XG4gIHBhcmVudC5hcHBlbmRDaGlsZChzdmcpO1xuXG4gIC8vIExlZ2VuZFxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWdlbmQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo2cHggMTJweDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbi10b3A6NHB4O1wiO1xuICBmb3IgKGNvbnN0IHMgb2Ygc2VyaWVzKSB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaXRlbS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDo0cHg7Zm9udC1zaXplOjlweDtjb2xvcjojNmE1YTRhO1wiO1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG90LnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6NnB4O2hlaWdodDo2cHg7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZDoke3MuY29sb3J9O2A7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChkb3QpO1xuICAgIGNvbnN0IG5tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbm0udGV4dENvbnRlbnQgPSBzLm5hbWU7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChubSk7XG4gICAgbGVnZW5kLmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9XG4gIHBhcmVudC5hcHBlbmRDaGlsZChsZWdlbmQpO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFJFTkRFUjogU1RBVFMgREFTSEJPQVJEXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyU3RhdHNTZWN0aW9uKHJvb3QpIHtcbiAgLy8gTWluaW1hbCB3ZWVrbHkgY2FsZW5kYXJcbiAgY29uc3Qgd2Vla0RhdGEgPSBnZXRXZWVrbHlDYWxlbmRhckRhdGEoKTtcbiAgY29uc3Qgd2Vla0dyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrR3JpZC5jbGFzc05hbWUgPSBcIm90dy13ZWVrLWdyaWRcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZCh3ZWVrR3JpZCk7XG5cbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla0RhdGEpIHtcbiAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjZWxsLmNsYXNzTmFtZSA9IFwib3R3LXdlZWstZGF5XCIgKyAoZGF5LmlzVG9kYXkgPyBcIiB0b2RheVwiIDogXCJcIikgKyAoZGF5LnN0YXR1cyA/IFwiIGRvbmVcIiA6IFwiXCIpO1xuICAgIGNvbnN0IGxibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGJsLmNsYXNzTmFtZSA9IFwib3R3LWRheS1sYWJlbFwiO1xuICAgIGxibC50ZXh0Q29udGVudCA9IGRheS5sYWJlbDtcbiAgICBjZWxsLmFwcGVuZENoaWxkKGxibCk7XG4gICAgY29uc3QgbnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBudW0uY2xhc3NOYW1lID0gXCJvdHctZGF5LW51bVwiO1xuICAgIG51bS50ZXh0Q29udGVudCA9IGRheS5udW07XG4gICAgY2VsbC5hcHBlbmRDaGlsZChudW0pO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGljb24uY2xhc3NOYW1lID0gXCJvdHctZGF5LWljb25cIjtcbiAgICBpZiAoZGF5LnN0YXR1cyA9PT0gXCJkb25lXCIpIHtcbiAgICAgIGlmIChkYXkudHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIpIHsgaWNvbi50ZXh0Q29udGVudCA9IFwiXFx1RDgzRFxcdURDOEVcIjsgfVxuICAgICAgZWxzZSBpZiAoZGF5LnR5cGUgPT09IFwiZmxvd1wiKSB7IGljb24udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0NcXHVERjBBXCI7IH1cbiAgICAgIGVsc2UgeyBpY29uLnRleHRDb250ZW50ID0gXCJcXHUyNzEzXCI7IGljb24uc3R5bGUuY29sb3IgPSBUSEVNRS5zeXN0ZW1HcmVlbjsgfVxuICAgIH0gZWxzZSBpZiAoZGF5LmlzVG9kYXkpIHtcbiAgICAgIGljb24udGV4dENvbnRlbnQgPSBcIlxcdTIwMjJcIjsgaWNvbi5zdHlsZS5jb2xvciA9IFRIRU1FLmNvbG9yOyBpY29uLnN0eWxlLmFuaW1hdGlvbiA9IFwib3R3LXB1bHNlLWdsb3cgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGVcIjtcbiAgICB9IGVsc2UgaWYgKGRheS5pc1Bhc3QpIHtcbiAgICAgIGljb24udGV4dENvbnRlbnQgPSBcIlxcdTIwMTRcIjsgaWNvbi5zdHlsZS5jb2xvciA9IFwiIzJhMjUyMFwiO1xuICAgIH1cbiAgICBjZWxsLmFwcGVuZENoaWxkKGljb24pO1xuICAgIHdlZWtHcmlkLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG5cbiAgLy8gQm9keSBTdHJlbmd0aCBIZWF0bWFwIFx1MjAxNCB1c2luZyBhY3R1YWwgU1ZHIGZpbGVcbiAgY29uc3QgbXVzY2xlTGV2ZWxzID0gYXdhaXQgZ2V0TXVzY2xlTGV2ZWxEYXRhKCk7XG4gIGNvbnN0IHN2Z0NvbnRlbnQgPSBhd2FpdCBsb2FkQm9keVN2ZygpO1xuXG4gIGlmIChzdmdDb250ZW50KSB7XG4gICAgLy8gVXNlIGFjdHVhbCBNdXNjbGUgTWFuL1dvbWFuIFNWRyB3aXRoIG92ZXJsYXkgaG90c3BvdHNcbiAgICBjb25zdCBzdmdGaWd1cmUgPSBidWlsZFN2Z1dpdGhPdmVybGF5KHN2Z0NvbnRlbnQsIG11c2NsZUxldmVscywgKHJlZ2lvbikgPT4ge1xuICAgICAgc2hvd011c2NsZVByb2dyZXNzUG9wdXAocmVnaW9uLCBtdXNjbGVMZXZlbHMpO1xuICAgIH0pO1xuICAgIHN2Z0ZpZ3VyZS5zdHlsZS5tYXJnaW4gPSBcIjE2cHggYXV0byA4cHhcIjtcbiAgICByb290LmFwcGVuZENoaWxkKHN2Z0ZpZ3VyZSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2sgdG8gcHJvZ3JhbW1hdGljIFNWR1xuICAgIGNvbnN0IGhtV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG1XcmFwLmNsYXNzTmFtZSA9IFwib3R3LWhlYXRtYXAtd3JhcFwiO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoaG1XcmFwKTtcbiAgICBjb25zdCBmYWxsYmFja1N2ZyA9IGJ1aWxkRmFsbGJhY2tCb2R5U3ZnKG11c2NsZUxldmVscywgKHJlZ2lvbikgPT4ge1xuICAgICAgc2hvd011c2NsZVByb2dyZXNzUG9wdXAocmVnaW9uLCBtdXNjbGVMZXZlbHMpO1xuICAgIH0pO1xuICAgIGhtV3JhcC5hcHBlbmRDaGlsZChmYWxsYmFja1N2Zyk7XG4gIH1cblxuICAvLyBDb21wYWN0IGxlZ2VuZFxuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZWdlbmQuY2xhc3NOYW1lID0gXCJvdHctaGVhdG1hcC1sZWdlbmRcIjtcbiAgY29uc3QgbGVnZW5kSXRlbXMgPSBbXG4gICAgeyBsYWJlbDogXCJVbnRyYWluZWRcIiwgY29sb3I6IFwiIzZhNmE2YVwiIH0sXG4gICAgeyBsYWJlbDogXCJCZWdpbm5lclwiLCBjb2xvcjogXCIjYTg5ODYwXCIgfSxcbiAgICB7IGxhYmVsOiBcIkludGVybWVkaWF0ZVwiLCBjb2xvcjogXCIjNmE4YTlhXCIgfSxcbiAgICB7IGxhYmVsOiBcIkVsaXRlXCIsIGNvbG9yOiBcIiM5YTZhN2FcIiB9LFxuICBdO1xuICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGVnZW5kSXRlbXMpIHtcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGkuY2xhc3NOYW1lID0gXCJvdHctaGVhdG1hcC1sZWdlbmQtaXRlbVwiO1xuICAgIGNvbnN0IGRvdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZG90LmNsYXNzTmFtZSA9IFwib3R3LWhlYXRtYXAtbGVnZW5kLWRvdFwiO1xuICAgIGRvdC5zdHlsZS5iYWNrZ3JvdW5kID0gaXRlbS5jb2xvcjtcbiAgICBsaS5hcHBlbmRDaGlsZChkb3QpO1xuICAgIGNvbnN0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHR4dC50ZXh0Q29udGVudCA9IGl0ZW0ubGFiZWw7XG4gICAgbGkuYXBwZW5kQ2hpbGQodHh0KTtcbiAgICBsZWdlbmQuYXBwZW5kQ2hpbGQobGkpO1xuICB9XG4gIHJvb3QuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAvLyBcIlByb2dyZXNzXCIgYnV0dG9uXG4gIGNvbnN0IHByb2dyZXNzQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgcHJvZ3Jlc3NCdG4udGV4dENvbnRlbnQgPSBcIlBST0dSRVNTXCI7XG4gIHByb2dyZXNzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICBwcm9ncmVzc0J0bi5zdHlsZS5jc3NUZXh0ICs9IFwid2lkdGg6MTAwJTttYXJnaW4tdG9wOjhweDtmb250LXNpemU6MTFweDtwYWRkaW5nOjEwcHg7XCI7XG4gIHByb2dyZXNzQnRuLm9uY2xpY2sgPSAoKSA9PiBzaG93T3ZlcmFsbFByb2dyZXNzUG9wdXAobXVzY2xlTGV2ZWxzKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChwcm9ncmVzc0J0bik7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUkVOREVSOiBNVVNDTEUgR1JPVVAgU0VMRUNUSU9OIChmaXJzdC10aW1lIGVudHJ5KVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmFzeW5jIGZ1bmN0aW9uIHJlbmRlck11c2NsZVNlbGVjdGlvbihyb290KSB7XG4gIGNvbnN0IHNlbGVjdGVkTXVzY2xlcyA9IG5ldyBTZXQoKTtcbiAgY29uc3Qgc2VsZWN0ZWRTdWJncm91cHMgPSBuZXcgTWFwKCk7XG5cbiAgLy8gXHUyNTAwXHUyNTAwIFwiU3RhcnQgTmV3IFdvcmtvdXRcIiBidXR0b24gSElHSCBhdCB0aGUgdG9wIFx1MjUwMFx1MjUwMFxuICBjb25zdCBzdGFydEJ0blRvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN0YXJ0QnRuVG9wLnRleHRDb250ZW50ID0gXCJcXHVEODNDXFx1REZDQlxcdUZFMEYgU1RBUlQgTkVXIFdPUktPVVRcIjtcbiAgc3RhcnRCdG5Ub3AuY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICBzdGFydEJ0blRvcC5zdHlsZS5jc3NUZXh0ICs9IFwicGFkZGluZzoxNHB4IDI0cHg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NzAwO3dpZHRoOjEwMCU7bWFyZ2luLWJvdHRvbToxNnB4O1wiO1xuICBzdGFydEJ0blRvcC5vbmNsaWNrID0gKCkgPT4gc2Nyb2xsVG9NdXNjbGVTZWxlY3QoKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdGFydEJ0blRvcCk7XG5cbiAgLy8gU3RhdHMgZGFzaGJvYXJkXG4gIGF3YWl0IHJlbmRlclN0YXRzU2VjdGlvbihyb290KTtcblxuICAvLyBcdTI1MDBcdTI1MDAgTXVzY2xlIFNlbGVjdGlvbiBTZWN0aW9uIFx1MjUwMFx1MjUwMFxuICBjb25zdCBzZWxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxBbmNob3IuaWQgPSBcIm90dy1tdXNjbGUtc2VsZWN0XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc2VsQW5jaG9yKTtcblxuICBmdW5jdGlvbiBzY3JvbGxUb011c2NsZVNlbGVjdCgpIHtcbiAgICBzZWxBbmNob3Iuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiwgYmxvY2s6IFwic3RhcnRcIiB9KTtcbiAgfVxuXG4gIGNvbnN0IHNlbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsTGFiZWwuY2xhc3NOYW1lID0gXCJvdHctc2VjdGlvbi1sYWJlbFwiO1xuICBzZWxMYWJlbC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjI4cHhcIjtcbiAgc2VsTGFiZWwudGV4dENvbnRlbnQgPSBcIlNFTEVDVCBNVVNDTEUgR1JPVVBTXCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc2VsTGFiZWwpO1xuXG4gIGNvbnN0IHNlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWxEZXNjLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjEycHg7YDtcbiAgc2VsRGVzYy50ZXh0Q29udGVudCA9IFwiVGFwIG11c2NsZXMgb24gdGhlIGZpZ3VyZSBvciB1c2UgdGhlIGJ1dHRvbnMgYmVsb3dcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzZWxEZXNjKTtcblxuICAvLyBSZWdpb24gXHUyMTkyIHBhcmVudCBtdXNjbGUgZ3JvdXAgbWFwcGluZyBmb3IgdGhlIHNlbGVjdG9yXG4gIGNvbnN0IFJFR0lPTl9UT19NVVNDTEUgPSB7XG4gICAgbmVjazogXCJOZWNrXCIsIGNoZXN0OiBcIkNoZXN0XCIsIGZyb250X2RlbHRzOiBcIlNob3VsZGVyc1wiLCByZWFyX2RlbHRzOiBcIlNob3VsZGVyc1wiLFxuICAgIGJpY2VwczogXCJBcm1zXCIsIHRyaWNlcHM6IFwiQXJtc1wiLCBmb3JlYXJtczogXCJBcm1zXCIsIGNvcmU6IFwiQ29yZVwiLFxuICAgIHF1YWRzOiBcIkxlZ3NcIiwgY2FsdmVzOiBcIkxlZ3NcIiwgaGFtc3RyaW5nczogXCJMZWdzXCIsIGdsdXRlczogXCJMZWdzXCIsXG4gICAgdHJhcHM6IFwiQmFja1wiLCBsYXRzOiBcIkJhY2tcIiwgbG93ZXJfYmFjazogXCJCYWNrXCIsXG4gIH07XG5cbiAgLy8gQnVpbGQgaW50ZXJhY3RpdmUgbXVzY2xlIHNlbGVjdG9yIHdpdGggYWN0dWFsIFNWR1xuICBjb25zdCBzdmdDb250ZW50ID0gYXdhaXQgbG9hZEJvZHlTdmcoKTtcbiAgY29uc3Qgc2VsZWN0b3JPdmVybGF5RWxzID0gW107IC8vIGZvciB2aXN1YWwgdXBkYXRlc1xuXG4gIGlmIChzdmdDb250ZW50KSB7XG4gICAgLy8gVXNlIGFjdHVhbCBTVkcgd2l0aCBvdmVybGF5IGhvdHNwb3RzIGZvciBzZWxlY3Rpb25cbiAgICBjb25zdCBzZWxlY3RvcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdG9yV3JhcC5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO21heC13aWR0aDoyMjBweDttYXJnaW46MCBhdXRvIDEycHg7XCI7XG5cbiAgICBjb25zdCBzdmdIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN2Z0hvbGRlci5zdHlsZS5jc3NUZXh0ID0gXCJ3aWR0aDoxMDAlO2ZpbHRlcjpzYXR1cmF0ZSgwLjE1KSBicmlnaHRuZXNzKDAuNCk7dHJhbnNpdGlvbjpmaWx0ZXIgMC4zcztcIjtcbiAgICBzdmdIb2xkZXIuaW5uZXJIVE1MID0gc3ZnQ29udGVudDtcbiAgICBjb25zdCBzdmdFbCA9IHN2Z0hvbGRlci5xdWVyeVNlbGVjdG9yKFwic3ZnXCIpO1xuICAgIGlmIChzdmdFbCkgeyBzdmdFbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiOyBzdmdFbC5zdHlsZS5oZWlnaHQgPSBcImF1dG9cIjsgc3ZnRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgfVxuICAgIHNlbGVjdG9yV3JhcC5hcHBlbmRDaGlsZChzdmdIb2xkZXIpO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtcIjtcbiAgICBzZWxlY3RvcldyYXAuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cbiAgICAvLyBDcmVhdGUgaG90c3BvdHMgZm9yIHNlbGVjdGlvblxuICAgIGNvbnN0IGFsbEhvdHNwb3RzID0geyAuLi5TVkdfSE9UU1BPVFMuZnJvbnQsIC4uLlNWR19IT1RTUE9UUy5yaWdodE1pcnJvciB9O1xuICAgIGZvciAoY29uc3QgW3JlZ2lvbiwgYm91bmRzXSBvZiBPYmplY3QuZW50cmllcyhhbGxIb3RzcG90cykpIHtcbiAgICAgIGNvbnN0IGhzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGhzLnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246YWJzb2x1dGU7dG9wOiR7Ym91bmRzLnRvcH0lO2xlZnQ6JHtib3VuZHMubGVmdH0lO3dpZHRoOiR7Ym91bmRzLndpZHRofSU7aGVpZ2h0OiR7Ym91bmRzLmhlaWdodH0lO2N1cnNvcjpwb2ludGVyO2JvcmRlci1yYWRpdXM6NHB4O3RyYW5zaXRpb246YmFja2dyb3VuZCAwLjE1cywgYm9yZGVyLWNvbG9yIDAuMTVzO2JvcmRlcjoxcHggc29saWQgdHJhbnNwYXJlbnQ7YDtcbiAgICAgIGhzLmRhdGFzZXQucmVnaW9uID0gcmVnaW9uO1xuICAgICAgc2VsZWN0b3JPdmVybGF5RWxzLnB1c2goaHMpO1xuXG4gICAgICBocy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgcGFyZW50TXVzY2xlID0gUkVHSU9OX1RPX01VU0NMRVtyZWdpb25dO1xuICAgICAgICBpZiAoIXBhcmVudE11c2NsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoc2VsZWN0ZWRNdXNjbGVzLmhhcyhwYXJlbnRNdXNjbGUpKSB7XG4gICAgICAgICAgc2VsZWN0ZWRNdXNjbGVzLmRlbGV0ZShwYXJlbnRNdXNjbGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdGVkTXVzY2xlcy5hZGQocGFyZW50TXVzY2xlKTtcbiAgICAgICAgfVxuICAgICAgICB1cGRhdGVTZWxlY3RvclZpc3VhbHMoKTtcbiAgICAgICAgdXBkYXRlVG9nZ2xlQnV0dG9ucygpO1xuICAgICAgfSk7XG4gICAgICBvdmVybGF5LmFwcGVuZENoaWxkKGhzKTtcbiAgICB9XG5cbiAgICByb290LmFwcGVuZENoaWxkKHNlbGVjdG9yV3JhcCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRmFsbGJhY2s6IHByb2dyYW1tYXRpYyBTVkcgc2VsZWN0b3JcbiAgICBjb25zdCBzZWxlY3RvcldyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNlbGVjdG9yV3JhcC5jbGFzc05hbWUgPSBcIm90dy1oZWF0bWFwLXdyYXBcIjtcbiAgICBzZWxlY3RvcldyYXAuc3R5bGUubWFyZ2luQm90dG9tID0gXCIxMnB4XCI7XG4gICAgcm9vdC5hcHBlbmRDaGlsZChzZWxlY3RvcldyYXApO1xuXG4gICAgY29uc3QgbnMgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgY29uc3QgZnJvbnRQYXRocyA9IHtcbiAgICAgIG5lY2s6JzxwYXRoIGQ9XCJNNDQsMjQgTDU2LDI0IEw1NSwzMSBMNDUsMzEgWlwiLz4nLFxuICAgICAgZnJvbnRfZGVsdHM6JzxwYXRoIGQ9XCJNMzEsMzMgQzI1LDMzIDE5LDM2IDE4LDQzIEwyNiw0MyBMMzEsMzcgWlwiLz48cGF0aCBkPVwiTTY5LDMzIEM3NSwzMyA4MSwzNiA4Miw0MyBMNzQsNDMgTDY5LDM3IFpcIi8+JyxcbiAgICAgIGNoZXN0Oic8cGF0aCBkPVwiTTMxLDM3IEw0OSwzNyBMNDksNTUgQzQ5LDU3IDQyLDYwIDMzLDU4IEwzMSw1NiBaXCIvPjxwYXRoIGQ9XCJNNTEsMzcgTDY5LDM3IEw2OSw1NiBMNjcsNTggQzU4LDYwIDUxLDU3IDUxLDU1IFpcIi8+JyxcbiAgICAgIGJpY2VwczonPHBhdGggZD1cIk0xOCw0MyBMMjYsNDMgTDI2LDY1IEMyNSw2NyAxOSw2NyAxOCw2NSBaXCIvPjxwYXRoIGQ9XCJNNzQsNDMgTDgyLDQzIEw4Miw2NSBDODEsNjcgNzUsNjcgNzQsNjUgWlwiLz4nLFxuICAgICAgZm9yZWFybXM6JzxwYXRoIGQ9XCJNMTgsNjggTDI2LDY4IEwyNCw5NiBMMTYsOTYgWlwiLz48cGF0aCBkPVwiTTc0LDY4IEw4Miw2OCBMODQsOTYgTDc2LDk2IFpcIi8+JyxcbiAgICAgIGNvcmU6JzxwYXRoIGQ9XCJNMzMsNTggTDY3LDU4IEw2NSw4MiBMMzUsODIgWlwiLz4nLFxuICAgICAgcXVhZHM6JzxwYXRoIGQ9XCJNMzUsODQgTDQ5LDg0IEw0OCwxMzYgTDM0LDEzNiBaXCIvPjxwYXRoIGQ9XCJNNTEsODQgTDY1LDg0IEw2NiwxMzYgTDUyLDEzNiBaXCIvPicsXG4gICAgICBjYWx2ZXM6JzxwYXRoIGQ9XCJNMzUsMTQwIEw0OCwxNDAgTDQ2LDE5MCBMMzcsMTkwIFpcIi8+PHBhdGggZD1cIk01MiwxNDAgTDY1LDE0MCBMNjMsMTkwIEw1NCwxOTAgWlwiLz4nLFxuICAgIH07XG4gICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5zLCBcInN2Z1wiKTtcbiAgICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAxMDAgMjEwXCIpO1xuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm90dy1oZWF0bWFwLXN2Z1wiKTtcbiAgICBjb25zdCBoZWFkRyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xuICAgIGhlYWRHLmlubmVySFRNTCA9ICc8ZWxsaXBzZSBjeD1cIjUwXCIgY3k9XCIxNFwiIHJ4PVwiMTBcIiByeT1cIjExXCIgZmlsbD1cIiMwYzBjMGNcIiBzdHJva2U9XCIjMmEyNTIwXCIgc3Ryb2tlLXdpZHRoPVwiMC44XCIvPic7XG4gICAgc3ZnLmFwcGVuZENoaWxkKGhlYWRHKTtcbiAgICBmb3IgKGNvbnN0IFtyZWdpb24sIHBhdGhEYXRhXSBvZiBPYmplY3QuZW50cmllcyhmcm9udFBhdGhzKSkge1xuICAgICAgY29uc3QgZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhucywgXCJnXCIpO1xuICAgICAgZy5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiIzFhMTgxNlwiKTsgZy5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCIjMmEyNTIwXCIpOyBnLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBcIjAuNlwiKTtcbiAgICAgIGcuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7IGcuc3R5bGUudHJhbnNpdGlvbiA9IFwiZmlsbCAwLjE1c1wiOyBnLmlubmVySFRNTCA9IHBhdGhEYXRhO1xuICAgICAgc2VsZWN0b3JPdmVybGF5RWxzLnB1c2goZyk7XG4gICAgICBnLmRhdGFzZXQucmVnaW9uID0gcmVnaW9uO1xuICAgICAgZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY29uc3QgcGFyZW50TXVzY2xlID0gUkVHSU9OX1RPX01VU0NMRVtyZWdpb25dO1xuICAgICAgICBpZiAoIXBhcmVudE11c2NsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoc2VsZWN0ZWRNdXNjbGVzLmhhcyhwYXJlbnRNdXNjbGUpKSBzZWxlY3RlZE11c2NsZXMuZGVsZXRlKHBhcmVudE11c2NsZSk7XG4gICAgICAgIGVsc2Ugc2VsZWN0ZWRNdXNjbGVzLmFkZChwYXJlbnRNdXNjbGUpO1xuICAgICAgICB1cGRhdGVTZWxlY3RvclZpc3VhbHMoKTtcbiAgICAgICAgdXBkYXRlVG9nZ2xlQnV0dG9ucygpO1xuICAgICAgfSk7XG4gICAgICBzdmcuYXBwZW5kQ2hpbGQoZyk7XG4gICAgfVxuICAgIHNlbGVjdG9yV3JhcC5hcHBlbmRDaGlsZChzdmcpO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2VsZWN0b3JWaXN1YWxzKCkge1xuICAgIGZvciAoY29uc3QgZWwgb2Ygc2VsZWN0b3JPdmVybGF5RWxzKSB7XG4gICAgICBjb25zdCByZWdpb24gPSBlbC5kYXRhc2V0LnJlZ2lvbjtcbiAgICAgIGNvbnN0IHBhcmVudE11c2NsZSA9IFJFR0lPTl9UT19NVVNDTEVbcmVnaW9uXTtcbiAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBwYXJlbnRNdXNjbGUgJiYgc2VsZWN0ZWRNdXNjbGVzLmhhcyhwYXJlbnRNdXNjbGUpO1xuICAgICAgaWYgKGVsLnRhZ05hbWUgPT09IFwiRElWXCIgfHwgZWwudGFnTmFtZSA9PT0gXCJkaXZcIikge1xuICAgICAgICAvLyBPdmVybGF5IGhvdHNwb3QgZGl2XG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmQgPSBpc1NlbGVjdGVkID8gVEhFTUUuY29sb3IgKyBcIjQwXCIgOiBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIGVsLnN0eWxlLmJvcmRlckNvbG9yID0gaXNTZWxlY3RlZCA/IFRIRU1FLmNvbG9yICsgXCI2MFwiIDogXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU1ZHIGdyb3VwXG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgaXNTZWxlY3RlZCA/IFRIRU1FLmNvbG9yICsgXCI4MFwiIDogXCIjMWExODE2XCIpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgaXNTZWxlY3RlZCA/IFRIRU1FLmNvbG9yICsgXCI2MFwiIDogXCIjMmEyNTIwXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIE11c2NsZSBncm91cCB0b2dnbGUgYnV0dG9ucyAoc3RpbGwgYXZhaWxhYmxlIGFzIHNlY29uZGFyeSBzZWxlY3Rpb24gbWV0aG9kKVxuICBjb25zdCBtdXNjbGVHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbXVzY2xlR3JpZC5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXA7Z2FwOjEwcHg7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW4tYm90dG9tOjhweDtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChtdXNjbGVHcmlkKTtcblxuICBjb25zdCBzdWJncm91cEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJncm91cEFyZWEuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6OHB4O3dpZHRoOjEwMCU7XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc3ViZ3JvdXBBcmVhKTtcblxuICBjb25zdCB0b2dnbGVCdXR0b25zID0gbmV3IE1hcCgpO1xuXG4gIE9iamVjdC5lbnRyaWVzKE1VU0NMRV9HUk9VUFMpLmZvckVhY2goKFtuYW1lLCBjb25maWddKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uY2xhc3NOYW1lID0gXCJvdHctbXVzY2xlLXRvZ2dsZVwiO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGAke2NvbmZpZy5pY29ufSAke25hbWV9YDtcbiAgICBtdXNjbGVHcmlkLmFwcGVuZENoaWxkKGJ0bik7XG4gICAgdG9nZ2xlQnV0dG9ucy5zZXQobmFtZSwgYnRuKTtcblxuICAgIGxldCBzdWJncm91cENvbnRhaW5lciA9IG51bGw7XG4gICAgaWYgKGNvbmZpZy5zdWJncm91cHMpIHtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwib3R3LXN1Ymdyb3VwLWNvbnRhaW5lclwiO1xuICAgICAgc3ViZ3JvdXBDb250YWluZXIuc3R5bGUuY3NzVGV4dCArPSBgZGlzcGxheTpmbGV4O2ZsZXgtd3JhcDp3cmFwO2dhcDo4cHg7YmFja2dyb3VuZDojMGMwYzBjO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Ym9yZGVyLXJhZGl1czo0cHg7YDtcbiAgICAgIGNvbnN0IHN1YkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1YkxhYmVsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MTAwJTtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O21hcmdpbi1ib3R0b206NHB4O2A7XG4gICAgICBzdWJMYWJlbC50ZXh0Q29udGVudCA9IG5hbWUgKyBcIiBzdWJncm91cHM6XCI7XG4gICAgICBzdWJncm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJMYWJlbCk7XG4gICAgICBzZWxlY3RlZFN1Ymdyb3Vwcy5zZXQobmFtZSwgbmV3IFNldCgpKTtcblxuICAgICAgY29uZmlnLnN1Ymdyb3Vwcy5mb3JFYWNoKHN1YiA9PiB7XG4gICAgICAgIGNvbnN0IHN1YkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIHN1YkJ0bi5jbGFzc05hbWUgPSBcIm90dy1zdWItdG9nZ2xlXCI7XG4gICAgICAgIHN1YkJ0bi50ZXh0Q29udGVudCA9IHN1YjtcbiAgICAgICAgc3ViQnRuLm9uY2xpY2sgPSAoZSkgPT4ge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgY29uc3Qgc3VicyA9IHNlbGVjdGVkU3ViZ3JvdXBzLmdldChuYW1lKTtcbiAgICAgICAgICBpZiAoc3Vicy5oYXMoc3ViKSkgeyBzdWJzLmRlbGV0ZShzdWIpOyBzdWJCdG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTsgfVxuICAgICAgICAgIGVsc2UgeyBzdWJzLmFkZChzdWIpOyBzdWJCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTsgfVxuICAgICAgICB9O1xuICAgICAgICBzdWJncm91cENvbnRhaW5lci5hcHBlbmRDaGlsZChzdWJCdG4pO1xuICAgICAgfSk7XG4gICAgICBzdWJncm91cEFyZWEuYXBwZW5kQ2hpbGQoc3ViZ3JvdXBDb250YWluZXIpO1xuICAgIH1cblxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHNlbGVjdGVkTXVzY2xlcy5oYXMobmFtZSkpIHtcbiAgICAgICAgc2VsZWN0ZWRNdXNjbGVzLmRlbGV0ZShuYW1lKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChzdWJncm91cENvbnRhaW5lcikgc3ViZ3JvdXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImV4cGFuZGVkXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZWN0ZWRNdXNjbGVzLmFkZChuYW1lKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGlmIChzdWJncm91cENvbnRhaW5lcikgc3ViZ3JvdXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImV4cGFuZGVkXCIpO1xuICAgICAgfVxuICAgICAgdXBkYXRlU2VsZWN0b3JWaXN1YWxzKCk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlVG9nZ2xlQnV0dG9ucygpIHtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBidG5dIG9mIHRvZ2dsZUJ1dHRvbnMpIHtcbiAgICAgIGlmIChzZWxlY3RlZE11c2NsZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3RhcnQgYnV0dG9uIChib3R0b20pXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3RhcnRCdG4udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0NcXHVERkNCXFx1RkUwRiBTVEFSVCBXT1JLT1VUXCI7XG4gIHN0YXJ0QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgc3RhcnRCdG4uc3R5bGUuY3NzVGV4dCArPSBcInBhZGRpbmc6MTZweCAyNHB4O2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjcwMDttYXJnaW4tdG9wOjE2cHg7XCI7XG4gIHN0YXJ0QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHNlbGVjdGVkTXVzY2xlcy5zaXplID09PSAwKSB7IG5vdGljZShcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIG11c2NsZSBncm91cFwiKTsgcmV0dXJuOyB9XG5cbiAgICAvLyBCdWlsZCBmaW5hbCBtdXNjbGUgbGlzdDogdXNlIHN1Ymdyb3VwcyBpZiBzZWxlY3RlZCwgb3RoZXJ3aXNlIHRoZSBwYXJlbnQgZ3JvdXBcbiAgICBjb25zdCBtdXNjbGVHcm91cHNBcnJheSA9IFtdO1xuICAgIHNlbGVjdGVkTXVzY2xlcy5mb3JFYWNoKG11c2NsZSA9PiB7XG4gICAgICBjb25zdCBzdWJzID0gc2VsZWN0ZWRTdWJncm91cHMuZ2V0KG11c2NsZSk7XG4gICAgICBpZiAoc3VicyAmJiBzdWJzLnNpemUgPiAwKSB7XG4gICAgICAgIHN1YnMuZm9yRWFjaChzdWIgPT4gbXVzY2xlR3JvdXBzQXJyYXkucHVzaChzdWIpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG11c2NsZUdyb3Vwc0FycmF5LnB1c2gobXVzY2xlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIExvYWQgcHJldmlvdXMgZXhlcmNpc2VzIGZvciB0aGVzZSBtdXNjbGUgZ3JvdXBzXG4gICAgY29uc3QgbG9hZGVkRXhlcmNpc2VzID0gbG9hZFByZXZpb3VzRXhlcmNpc2VzKG11c2NsZUdyb3Vwc0FycmF5KTtcblxuICAgIC8vIFNhdmUgdG8gZnJvbnRtYXR0ZXIgYW5kIHVwZGF0ZSBsb2NhbCBzdGF0ZVxuICAgIG11c2NsZUdyb3VwcyA9IG11c2NsZUdyb3Vwc0FycmF5O1xuICAgIGV4ZXJjaXNlcyA9IGxvYWRlZEV4ZXJjaXNlcztcbiAgICBjdXJyZW50TXVzY2xlSW5kZXggPSAwO1xuXG4gICAgYXdhaXQgc2V0TXVsdGlwbGVEYXRhKHtcbiAgICAgIG11c2NsZUdyb3VwczogbXVzY2xlR3JvdXBzLFxuICAgICAgZXhlcmNpc2VzOiBleGVyY2lzZXMsXG4gICAgICBjdXJyZW50TXVzY2xlSW5kZXg6IDAsXG4gICAgICBXb3Jrb3V0OiBmYWxzZSxcbiAgICAgIFwiV29ya291dC1UeXBlXCI6IFwiXCIsXG4gICAgICBUaW1lc3RhbXA6IG1vbWVudCgpLmZvcm1hdCgpLFxuICAgIH0pO1xuXG4gICAgLy8gUmUtcmVuZGVyIFx1MjAxNCBub3cgd2UnbGwgZW50ZXIgd29ya291dCB0cmFja2luZyBtb2RlXG4gICAgcmVuZGVyKCk7XG4gIH07XG4gIHJvb3QuYXBwZW5kQ2hpbGQoc3RhcnRCdG4pO1xufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE1BSU4gUkVOREVSXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyKCkge1xuICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvb3QuY2xhc3NOYW1lID0gXCJvdHctY29udGFpbmVyXCI7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChyb290KTtcblxuICAvLyBJZiB3b3Jrb3V0IGlzIGFscmVhZHkgY29tcGxldGVkLCBzaG93IHN1bW1hcnlcbiAgaWYgKGlzQ29tcGxldGVkICYmIGdldERhdGEoXCJXb3Jrb3V0LVR5cGVcIikpIHtcbiAgICBjb25zdCB3VHlwZSA9IGdldERhdGEoXCJXb3Jrb3V0LVR5cGVcIik7XG4gICAgY29uc3Qgc3VtbWFyeUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHN1bW1hcnlDYXJkLmNsYXNzTmFtZSA9IFwib3R3LWNhcmQgb3R3LWNhcmQtYnJlYXRoZVwiO1xuICAgIHN1bW1hcnlDYXJkLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgc3VtbWFyeUNhcmQuc3R5bGUucGFkZGluZyA9IFwiMzJweFwiO1xuICAgIGFkZENvcm5lcnMoc3VtbWFyeUNhcmQsIFRIRU1FLnN5c3RlbUdyZWVuKTtcbiAgICBzdW1tYXJ5Q2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOjMycHg7bWFyZ2luLWJvdHRvbToxMnB4O1wiPiR7d1R5cGUgPT09IFwiZGlzY2lwbGluZVwiID8gXCJcXHVEODNEXFx1REM4RVwiIDogXCJcXHVEODNDXFx1REYwQVwifTwvZGl2PlxuICAgICAgPGgyIHN0eWxlPVwibWFyZ2luOjA7Y29sb3I6JHtUSEVNRS5zeXN0ZW1HcmVlbn07Zm9udC1zaXplOjE2cHg7bGV0dGVyLXNwYWNpbmc6M3B4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcIj5XT1JLT1VUIENPTVBMRVRFPC9oMj5cbiAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxM3B4O21hcmdpbi10b3A6OHB4O2ZvbnQtc3R5bGU6aXRhbGljO1wiPiR7d1R5cGUgPT09IFwiZGlzY2lwbGluZVwiID8gXCJEaXNjaXBsaW5lIFdpblwiIDogXCJGbG93IFN0YXRlXCJ9PC9kaXY+XG4gICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDttYXJnaW4tdG9wOjE2cHg7XCI+JHttb21lbnQoZ2V0RGF0YShcIlRpbWVzdGFtcFwiKSkuZm9ybWF0KFwiTU1NIEQsIFlZWVkgXFx1MjAxNCBoOm1tIEFcIil9PC9kaXY+XG4gICAgYDtcbiAgICByb290LmFwcGVuZENoaWxkKHN1bW1hcnlDYXJkKTtcblxuICAgIC8vIFNob3cgZXhlcmNpc2VzIHN1bW1hcnlcbiAgICBpZiAoZXhlcmNpc2VzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGV4U3VtbWFyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBleFN1bW1hcnkuY2xhc3NOYW1lID0gXCJvdHctY2FyZFwiO1xuICAgICAgYWRkQ29ybmVycyhleFN1bW1hcnksIFRIRU1FLmNvbG9yKTtcbiAgICAgIGNvbnN0IGV4VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZXhUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjExcHg7bGV0dGVyLXNwYWNpbmc6MnB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjEycHg7YDtcbiAgICAgIGV4VGl0bGUudGV4dENvbnRlbnQgPSBcIlNFU1NJT04gU1VNTUFSWVwiO1xuICAgICAgZXhTdW1tYXJ5LmFwcGVuZENoaWxkKGV4VGl0bGUpO1xuICAgICAgZm9yIChjb25zdCBleCBvZiBleGVyY2lzZXMpIHtcbiAgICAgICAgY29uc3QgY29tcGxldGVkU2V0cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiAhcy5pc1dhcm11cCAmJiBzLmNvbXBsZXRlZCkubGVuZ3RoO1xuICAgICAgICBjb25zdCB0b3RhbFNldHMgPSBleC5zZXRzLmZpbHRlcigocykgPT4gIXMuaXNXYXJtdXApLmxlbmd0aDtcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcm93LnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6OHB4IDA7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgICAgICAgcm93LmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtd2VpZ2h0OjYwMDtcIj4ke2V4Lm5hbWV9PC9zcGFuPjxzcGFuIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTJweDtcIj4ke2NvbXBsZXRlZFNldHN9LyR7dG90YWxTZXRzfSBzZXRzPC9zcGFuPmA7XG4gICAgICAgIGV4U3VtbWFyeS5hcHBlbmRDaGlsZChyb3cpO1xuICAgICAgfVxuICAgICAgcm9vdC5hcHBlbmRDaGlsZChleFN1bW1hcnkpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBObyBtdXNjbGUgZ3JvdXBzIHNlbGVjdGVkIHlldCBcdTIwMTQgc2hvdyBzZWxlY3Rpb24gc2NyZWVuXG4gIGlmIChtdXNjbGVHcm91cHMubGVuZ3RoID09PSAwKSB7XG4gICAgYXdhaXQgcmVuZGVyTXVzY2xlU2VsZWN0aW9uKHJvb3QpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBBY3RpdmUgV29ya291dCBVSSBcdTI1MDBcdTI1MDBcbiAgY29uc3QgY3VycmVudE11c2NsZSA9IG11c2NsZUdyb3Vwc1tjdXJyZW50TXVzY2xlSW5kZXhdIHx8IG11c2NsZUdyb3Vwc1swXTtcbiAgY29uc3QgbXVzY2xlRXhlcmNpc2VzID0gZXhlcmNpc2VzLmZpbHRlcigoZSkgPT4gZS5tdXNjbGUgPT09IGN1cnJlbnRNdXNjbGUgfHwgZS5tdXNjbGVHcm91cCA9PT0gY3VycmVudE11c2NsZSk7XG5cbiAgLy8gSGVhZGVyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc05hbWUgPSBcIm90dy1jYXJkIG90dy1jYXJkLWJyZWF0aGUgb3R3LWhlYWRlclwiO1xuICBhZGRDb3JuZXJzKGhlYWRlciwgVEhFTUUuY29sb3IpO1xuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgdGl0bGUuY2xhc3NOYW1lID0gXCJvdHctdGl0bGVcIjtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBjdXJyZW50TXVzY2xlLnRvVXBwZXJDYXNlKCk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGNvbnN0IHByb2dyZXNzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9ncmVzc0xhYmVsLmNsYXNzTmFtZSA9IFwib3R3LXByb2dyZXNzLWxhYmVsXCI7XG4gIHByb2dyZXNzTGFiZWwudGV4dENvbnRlbnQgPSAoY3VycmVudE11c2NsZUluZGV4ICsgMSkgKyBcIiAvIFwiICsgbXVzY2xlR3JvdXBzLmxlbmd0aDtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2dyZXNzTGFiZWwpO1xuICByb290LmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgLy8gRXhlcmNpc2VzXG4gIGNvbnN0IGV4Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZXhDb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtnYXA6MTZweDtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChleENvbnRhaW5lcik7XG5cbiAgaWYgKG11c2NsZUV4ZXJjaXNlcy5sZW5ndGggPT09IDApIHtcbiAgICBjb25zdCBlbXB0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZW1wdHkuc3R5bGUuY3NzVGV4dCA9IGB0ZXh0LWFsaWduOmNlbnRlcjtwYWRkaW5nOjQwcHggMjBweDtiYWNrZ3JvdW5kOiMwZjBmMGY7Ym9yZGVyOjFweCBkYXNoZWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgICBlbXB0eS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbjowO1wiPk5vIGV4ZXJjaXNlcyBmb3IgJHtjdXJyZW50TXVzY2xlfSB5ZXQuPC9wPmA7XG4gICAgZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wdHkpO1xuICB9IGVsc2Uge1xuICAgIGZvciAoY29uc3QgZXggb2YgbXVzY2xlRXhlcmNpc2VzKSB7XG4gICAgICBhd2FpdCByZW5kZXJFeGVyY2lzZShleENvbnRhaW5lciwgZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBleGVyY2lzZSBidXR0b25cbiAgY29uc3QgYWRkRXhCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRFeEJ0bi50ZXh0Q29udGVudCA9IFwiKyBBREQgRVhFUkNJU0VcIjtcbiAgYWRkRXhCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tZGFzaGVkXCI7XG4gIGFkZEV4QnRuLnN0eWxlLm1hcmdpblRvcCA9IFwiMTZweFwiO1xuICBhZGRFeEJ0bi5vbmNsaWNrID0gKCkgPT4gb3BlbkFkZEV4ZXJjaXNlTW9kYWwoY3VycmVudE11c2NsZSk7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoYWRkRXhCdG4pO1xuXG4gIC8vIE5hdmlnYXRpb25cbiAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbmF2LmNsYXNzTmFtZSA9IFwib3R3LW5hdi1yb3dcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChuYXYpO1xuXG4gIGlmIChjdXJyZW50TXVzY2xlSW5kZXggPiAwKSB7XG4gICAgY29uc3QgcHJldkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcHJldkJ0bi50ZXh0Q29udGVudCA9IFwiXFx1MjE5MCBQUkVWSU9VU1wiO1xuICAgIHByZXZCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gICAgcHJldkJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjdXJyZW50TXVzY2xlSW5kZXgtLTsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9O1xuICAgIG5hdi5hcHBlbmRDaGlsZChwcmV2QnRuKTtcbiAgfVxuXG4gIGlmIChjdXJyZW50TXVzY2xlSW5kZXggPCBtdXNjbGVHcm91cHMubGVuZ3RoIC0gMSkge1xuICAgIGNvbnN0IG5leHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5leHRCdG4udGV4dENvbnRlbnQgPSBcIk5FWFQgTVVTQ0xFIFxcdTIxOTJcIjtcbiAgICBuZXh0QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICBuZXh0QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGN1cnJlbnRNdXNjbGVJbmRleCsrOyBhd2FpdCBzYXZlU3RhdGUoKTsgcmVuZGVyKCk7IH07XG4gICAgbmF2LmFwcGVuZENoaWxkKG5leHRCdG4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGZpbmlzaEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZmluaXNoQnRuLnRleHRDb250ZW50ID0gXCJcXHUyNzEzIEZJTklTSCBXT1JLT1VUXCI7XG4gICAgZmluaXNoQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLWZpbmlzaFwiO1xuICAgIGZpbmlzaEJ0bi5vbmNsaWNrID0gKCkgPT4gb3BlbkZpbmlzaE1vZGFsKCk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGZpbmlzaEJ0bik7XG4gIH1cbn1cblxuLy8gXHUyNTAwXHUyNTAwIEJvb3QgXHUyNTAwXHUyNTAwXG5yZXR1cm4gcmVuZGVyKCk7XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCdWlsdC1pbiBUZW1wbGF0ZSBSZWdpc3RyeVxuLy8gTWFwcyB0ZW1wbGF0ZSBJRHMgdG8gdGhlaXIgc291cmNlIGNvZGUgKGJ1bmRsZWQgYXQgYnVpbGQgdGltZSkuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHdvcmtvdXRTb3VyY2UgZnJvbSBcIi4vd29ya291dC50cGxcIjtcblxuLyoqXG4gKiBCdWlsdC1pbiB0ZW1wbGF0ZXMgYnVuZGxlZCBpbnNpZGUgdGhlIHBsdWdpbi5cbiAqIEtleXMgYXJlIHRlbXBsYXRlIElEcyByZWZlcmVuY2VkIGluIEFjdGl2aXR5Q29uZmlnLndvcmtzcGFjZVRlbXBsYXRlLlxuICogVmFsdWVzIGFyZSB0aGUgcmF3IEpTIHNvdXJjZSBleGVjdXRlZCB2aWEgbmV3IEZ1bmN0aW9uKFwiY3R4XCIsIHNvdXJjZSkuXG4gKi9cbmV4cG9ydCBjb25zdCBCVUlMVElOX1RFTVBMQVRFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgd29ya291dDogd29ya291dFNvdXJjZSxcbn07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQSxJQUFBQSxtQkFBOEQ7OztBQ1l2RCxJQUFNLGlCQUFpQjtBQUN2QixJQUFNLHNCQUFzQjtBQUk1QixJQUFNLFNBQTJCO0FBQUEsRUFDdEMsRUFBRSxNQUFNLEdBQUcsTUFBTSxvQkFBb0IsTUFBTSxnQkFBZ0IsYUFBYSxzRUFBc0UsTUFBTSxpR0FBaUcsV0FBVyx3QkFBcUI7QUFBQSxFQUNyUixFQUFFLE1BQU0sR0FBRyxNQUFNLGdCQUFnQixNQUFNLG9CQUFvQixhQUFhLGlFQUFpRSxNQUFNLG9GQUFvRixXQUFXLHdCQUFxQjtBQUFBLEVBQ25RLEVBQUUsTUFBTSxHQUFHLE1BQU0sbUJBQW1CLE1BQU0sY0FBYyxhQUFhLCtEQUErRCxNQUFNLHlFQUF5RSxXQUFXLHdCQUFxQjtBQUFBLEVBQ25QLEVBQUUsTUFBTSxHQUFHLE1BQU0sbUJBQW1CLE1BQU0sV0FBVyxhQUFhLHFFQUFxRSxNQUFNLGdFQUFnRSxXQUFXLHdCQUFxQjtBQUFBLEVBQzdPLEVBQUUsTUFBTSxHQUFHLE1BQU0saUJBQWlCLE1BQU0sV0FBVyxhQUFhLGlFQUFpRSxNQUFNLGlFQUFpRSxXQUFXLHdCQUFxQjtBQUFBLEVBQ3hPLEVBQUUsTUFBTSxHQUFHLE1BQU0sZUFBZSxNQUFNLFdBQVcsYUFBYSxtRUFBbUUsTUFBTSwrRUFBK0UsV0FBVyx3QkFBcUI7QUFBQSxFQUN0UCxFQUFFLE1BQU0sR0FBRyxNQUFNLFdBQVcsTUFBTSxXQUFXLGFBQWEsc0VBQXNFLE1BQU0sZ0ZBQTJFLFdBQVcsd0JBQXFCO0FBQUEsRUFDalAsRUFB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LEdBQUcsSUFBSSxHQUFHLEVBQUUsRUFBRTtBQUFBLEVBQ2hHLEVBQUUsSUFBSSxTQUFjLE9BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxRQUFjLE1BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBLEVBQzFELEVBQUUsSUFBSSxRQUFjLE1BQU8sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBO0FBQUEsRUFFMUQsRUFBRSxJQUFJLFVBQWMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDMUQsRUFBRSxJQUFJLFdBQWMsTUFBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDMUQsRUFBRSxJQUFJLFlBQWMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFJLE1BQU0sRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLEdBQUcsRUFBRTtBQUFBO0FBQUEsRUFFakcsRUFBRSxJQUFJLE9BQWMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDMUQsRUFBRSxJQUFJLFlBQWMsT0FBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUEsRUFDMUQsRUFBRSxJQUFJLFVBQWMsTUFBTyxFQUFFLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFO0FBQUE7QUFBQSxFQUUxRCxFQUFFLElBQUksU0FBYyxPQUFPLEVBQUUsR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFH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QUFXLENBQUMsTUFBTTtBQUFjO0FBQzNDLGNBQU0sV0FBVyxLQUFLLFNBQVMsV0FBVyxLQUFLLENBQUMsTUFBVyxFQUFFLE9BQU8sTUFBTSxZQUFZO0FBQ3RGLFlBQUksWUFBWSxDQUFDLFNBQVMsbUJBQW1CO0FBQzNDLG1CQUFTLG9CQUFvQixNQUFNO0FBQ25DLG9CQUFVO0FBQUEsUUFDWjtBQUFBLE1BQ0Y7QUFDQSxhQUFPLElBQUk7QUFDWCxnQkFBVTtBQUFBLElBQ1o7QUFFQSxRQUFJLFNBQVM7QUFDWCxZQUFNLEtBQUssYUFBYTtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUNGO0FBR0EsU0FBU0EsT0FBTSxJQUEyQjtBQUN4QyxTQUFPLElBQUksUUFBUSxDQUFDLFlBQVksV0FBVyxTQUFTLEVBQUUsQ0FBQztBQUN6RDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJuZWdsZWN0ZWQiLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiIsICJpbXBvcnRfb2JzaWRpYW4iLCAic2xlZXAiXQp9Cg==
