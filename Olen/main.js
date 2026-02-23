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
var DEFAULT_WORKOUT_SETTINGS = {
  statsFile: "Personal Life/Personal Stats.md",
  exerciseDbFolder: "Home/Activities/Exercises database",
  muscleGroups: {
    "Neck": { subgroups: null, icon: "\u{1F9B4}" },
    "Back": { subgroups: ["Lats", "Traps", "Rhomboids", "Lower Back", "Rear Delts"], icon: "\u{1F519}" },
    "Chest": { subgroups: null, icon: "\u{1F4AA}" },
    "Shoulders": { subgroups: ["Front Delts", "Side Delts", "Rear Delts"], icon: "\u{1F3AF}" },
    "Core": { subgroups: null, icon: "\u{1F3AF}" },
    "Legs": { subgroups: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"], icon: "\u{1F9B5}" },
    "Arms": { subgroups: ["Biceps", "Triceps", "Forearms"], icon: "\u{1F4AA}" }
  }
};
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
  // Workout
  workoutSettings: DEFAULT_WORKOUT_SETTINGS,
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
    this.renderWorkoutSection(containerEl);
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
  // --- Workout ---
  renderWorkoutSection(container) {
    const body = this.createCollapsibleSection(container, "Workout Settings", "\u{1F3CB}\uFE0F");
    if (!this.plugin.settings.workoutSettings) {
      this.plugin.settings.workoutSettings = { ...DEFAULT_WORKOUT_SETTINGS };
    }
    const ws = this.plugin.settings.workoutSettings;
    new import_obsidian4.Setting(body).setName("Personal stats file").setDesc("Vault path to the Personal Stats note (stores weight, height, birthdate)").addText(
      (t) => t.setPlaceholder("Personal Life/Personal Stats.md").setValue(ws.statsFile).onChange(async (v) => {
        this.plugin.settings.workoutSettings.statsFile = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(body).setName("Exercise database folder").setDesc("Vault folder containing strength standard files (one .md per exercise)").addText(
      (t) => t.setPlaceholder("Home/Activities/Exercises database").setValue(ws.exerciseDbFolder).onChange(async (v) => {
        this.plugin.settings.workoutSettings.exerciseDbFolder = v;
        await this.plugin.saveSettings();
      })
    );
    body.createEl("div", {
      text: "Muscle Groups",
      attr: { style: "font-weight: 600; font-size: 0.95em; margin: 12px 0 4px;" }
    });
    body.createEl("div", {
      text: "Define which muscle groups appear in the workout start screen.",
      attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 8px;" }
    });
    const muscleGroupNames = Object.keys(ws.muscleGroups);
    for (const name of muscleGroupNames) {
      const mg = ws.muscleGroups[name];
      const mgSetting = new import_obsidian4.Setting(body).setName(`${mg.icon} ${name}`).setDesc(mg.subgroups ? `Subgroups: ${mg.subgroups.join(", ")}` : "No subgroups");
      mgSetting.addButton(
        (btn) => btn.setButtonText("Delete").setWarning().onClick(async () => {
          delete this.plugin.settings.workoutSettings.muscleGroups[name];
          await this.plugin.saveSettings();
          this.display();
        })
      );
    }
    const addMgWrapper = body.createDiv({ attr: { style: "margin-top: 8px;" } });
    const addMgDetails = addMgWrapper.createEl("details");
    addMgDetails.createEl("summary", {
      text: "+ Add muscle group",
      attr: { style: "cursor: pointer; font-size: 0.85em; color: var(--text-accent); margin-bottom: 8px;" }
    });
    const addMgForm = addMgDetails.createDiv({ attr: { style: "padding: 8px 0;" } });
    let newMgName = "";
    let newMgIcon = "\u{1F4AA}";
    let newMgSubs = "";
    new import_obsidian4.Setting(addMgForm).setName("Name").addText((t) => t.setPlaceholder("e.g. Arms").onChange((v) => {
      newMgName = v;
    }));
    new import_obsidian4.Setting(addMgForm).setName("Icon").addText((t) => t.setPlaceholder("\u{1F4AA}").setValue(newMgIcon).onChange((v) => {
      newMgIcon = v;
    }));
    new import_obsidian4.Setting(addMgForm).setName("Subgroups (comma-separated, or empty)").addText((t) => t.setPlaceholder("Biceps, Triceps, Forearms").onChange((v) => {
      newMgSubs = v;
    }));
    new import_obsidian4.Setting(addMgForm).addButton(
      (btn) => btn.setButtonText("Add").onClick(async () => {
        const name = newMgName.trim();
        if (!name) {
          new import_obsidian4.Notice("Please enter a muscle group name");
          return;
        }
        const subs = newMgSubs.trim() ? newMgSubs.split(",").map((s) => s.trim()).filter(Boolean) : null;
        this.plugin.settings.workoutSettings.muscleGroups[name] = {
          subgroups: subs,
          icon: newMgIcon || "\u{1F4AA}"
        };
        await this.plugin.saveSettings();
        this.display();
      })
    );
    new import_obsidian4.Setting(body).addButton(
      (btn) => btn.setButtonText("Reset to defaults").onClick(async () => {
        this.plugin.settings.workoutSettings = { ...DEFAULT_WORKOUT_SETTINGS };
        this.plugin.settings.workoutSettings.muscleGroups = JSON.parse(
          JSON.stringify(DEFAULT_WORKOUT_SETTINGS.muscleGroups)
        );
        await this.plugin.saveSettings();
        this.display();
        new import_obsidian4.Notice("Workout settings reset to defaults");
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
var workout_default = '// ============================================================\n// Olen Template \u2014 Workout Tracker v4.0\n// Renders inside the Workspace view when the user enters\n// a workout session. All data is read/written via ctx API.\n// Settings-driven: no hardcoded paths.\n// ============================================================\n\nconst { container, getData, setData, setMultipleData, app, plugin, moment,\n        notice, createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;\n\n// \u2500\u2500 Settings (all configurable via Olen Settings > Workout) \u2500\u2500\nconst ws = plugin.settings.workoutSettings || {};\nconst workoutActivity = plugin.settings.activities.find(a => a.id === "workout") || {};\nconst WORKOUT_FOLDER = workoutActivity.folder || "Personal Life/01 Workout";\nconst STATS_FILE = ws.statsFile || "Personal Life/Personal Stats.md";\nconst EXERCISE_DB_FOLDER = ws.exerciseDbFolder || "Home/Activities/Exercises database";\nconst MUSCLE_GROUPS = ws.muscleGroups || {\n  "Neck": { subgroups: null, icon: "\\uD83E\\uDDB4" },\n  "Back": { subgroups: ["Lats", "Traps", "Rhomboids", "Lower Back", "Rear Delts"], icon: "\\uD83D\\uDD19" },\n  "Chest": { subgroups: null, icon: "\\uD83D\\uDCAA" },\n  "Shoulders": { subgroups: ["Front Delts", "Side Delts", "Rear Delts"], icon: "\\uD83C\\uDFAF" },\n  "Core": { subgroups: null, icon: "\\uD83C\\uDFAF" },\n  "Legs": { subgroups: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"], icon: "\\uD83E\\uDDB5" },\n  "Arms": { subgroups: ["Biceps", "Triceps", "Forearms"], icon: "\\uD83D\\uDCAA" },\n};\n\nconst THEME = {\n  color: "#9a8c7a",\n  colorHover: "#aa9c8a",\n  colorBorder: "#3a342a",\n  colorBorderHover: "#4a443a",\n  colorMuted: "#6a5a4a",\n  colorLight: "#b8a890",\n  colorDiscipline: "#a89860",\n  colorFlow: "#6a8a9a",\n  systemGreen: "#7a9a7d"\n};\n\nconst STRENGTH_LEVELS = {\n  "Untrained":    { color: "#6a6a6a", icon: "\\u25CB" },\n  "Beginner":     { color: "#a89860", icon: "\\u25D0" },\n  "Novice":       { color: "#7a9a7d", icon: "\\u25D1" },\n  "Intermediate": { color: "#6a8a9a", icon: "\\u25D5" },\n  "Advanced":     { color: "#8a7a9a", icon: "\\u25CF" },\n  "Elite":        { color: "#9a6a7a", icon: "\\u2605" }\n};\n\n// \u2500\u2500 State (from frontmatter of the daily note) \u2500\u2500\nlet exercises = getData("exercises") || [];\nlet muscleGroups = getData("muscleGroups") || [];\nlet currentMuscleIndex = getData("currentMuscleIndex") || 0;\nconst isCompleted = getData("Workout") === true;\n\n// \u2500\u2500 Inject styles once \u2500\u2500\nif (!document.getElementById("olen-tpl-workout-v4")) {\n  const style = document.createElement("style");\n  style.id = "olen-tpl-workout-v4";\n  style.textContent = `\n    .otw-container * { box-sizing: border-box; }\n    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0; font-family: Georgia, serif; }\n    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 20px rgba(154,140,122,0.03); } 50% { box-shadow: inset 0 0 40px rgba(154,140,122,0.08); } }\n    @keyframes otw-float-up { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 0.4; } 90% { opacity: 0.4; } 100% { transform: translateY(-100px) translateX(20px); opacity: 0; } }\n    .otw-card { background: #0a0a0a; border: 1px solid #3a342a; padding: 16px; position: relative; margin-bottom: 16px; }\n    .otw-card-breathe { animation: otw-breathe 6s ease-in-out infinite; }\n    .otw-header { text-align: center; padding: 20px; }\n    .otw-title { margin: 0; color: #9a8c7a; font-size: 24px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }\n    .otw-progress-label { color: #6a5a4a; font-size: 12px; margin-top: 8px; }\n    .otw-btn { padding: 14px 24px; border: none; font-size: 13px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; }\n    .otw-btn-primary { background: #9a8c7a; color: #0a0a0a; width: 100%; }\n    .otw-btn-primary:active { transform: scale(0.98); }\n    .otw-btn-secondary { background: #0f0f0f; border: 1px solid #3a342a; color: #6a5a4a; }\n    .otw-btn-secondary:active { border-color: #9a8c7a; color: #9a8c7a; }\n    .otw-btn-finish { background: #7a9a7d; color: #0a0a0a; }\n    .otw-btn-dashed { width: 100%; background: transparent; border: 1px dashed #3a342a; color: #6a5a4a; }\n    .otw-btn-dashed:active { border-color: #9a8c7a; color: #9a8c7a; }\n    .otw-nav-row { display: flex; gap: 12px; margin-top: 24px; }\n    .otw-nav-row .otw-btn { flex: 1; text-align: center; }\n    .otw-set-row { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 12px; padding: 12px; background: #0f0f0f; border: 1px solid #3a342a; margin-bottom: 6px; }\n    .otw-set-row.completed { opacity: 0.6; }\n    .otw-checkbox { width: 24px; height: 24px; border: 2px solid #3a342a; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0a0a0a; font-weight: bold; transition: all 0.2s; flex-shrink: 0; }\n    .otw-checkbox.checked { background: #7a9a7d; border-color: #7a9a7d; }\n    .otw-input { padding: 6px; background: #0a0a0a; border: 1px solid #3a342a; color: #9a8c7a; text-align: center; font-size: 14px; font-weight: 600; width: 50px; }\n    .otw-ctrl-btn { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: #0f0f0f; border: 1px solid #3a342a; color: #9a8c7a; cursor: pointer; font-size: 16px; flex-shrink: 0; }\n    .otw-ctrl-btn:active { background: #9a8c7a; color: #0a0a0a; }\n    .otw-warmup-badge { font-size: 9px; color: #6a8a9a; padding: 2px 6px; background: rgba(106,138,154,0.15); border-radius: 3px; }\n    .otw-strength-bar { height: 6px; background: #1a1a1a; border-radius: 3px; overflow: hidden; margin-top: 6px; }\n    .otw-strength-fill { height: 100%; border-radius: 3px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }\n    .otw-strength-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }\n    .otw-pr-box { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; background: rgba(168,152,96,0.1); border: 1px solid rgba(168,152,96,0.3); border-radius: 4px; margin-top: 8px; }\n    .otw-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.5s ease, backdrop-filter 0.5s ease; }\n    .otw-modal-overlay.visible { background: rgba(0,0,0,0.95); backdrop-filter: blur(4px); }\n    .otw-modal-content { background: #0a0a0a; padding: 28px 20px; border: 1px solid #3a342a; max-width: 550px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 16px; position: relative; opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease, transform 0.5s ease; overflow-y: auto; }\n    .otw-modal-overlay.visible .otw-modal-content { opacity: 1; transform: translateY(0); }\n    .otw-summary-complete { text-align: center; padding: 24px 0; }\n    .otw-summary-complete h2 { margin: 0; color: #7a9a7d; font-size: 16px; font-weight: 700; letter-spacing: 3px; }\n    .otw-feel-btn { display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: #0c0c0c; cursor: pointer; margin-bottom: 10px; transition: all 0.2s; }\n    .otw-feel-btn:active { background: #101010; }\n    .otw-muscle-toggle { padding: 12px 18px; background: #0f0f0f; border: 1px solid #3a342a; color: #9a8c7a; font-size: 13px; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease; }\n    .otw-muscle-toggle.active { background: rgba(154,140,122,0.3); border-color: #9a8c7a; }\n    .otw-subgroup-container { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease; opacity: 0; padding: 0 12px; }\n    .otw-subgroup-container.expanded { max-height: 300px; opacity: 1; padding: 12px; }\n    .otw-subgroup-btn { padding: 8px 14px; background: #0f0f0f; border: 1px solid #3a342a; color: #6a5a4a; font-size: 12px; cursor: pointer; transition: all 0.3s ease; }\n    .otw-subgroup-btn.active { background: rgba(154,140,122,0.3); border-color: #9a8c7a; color: #9a8c7a; }\n  `;\n  document.head.appendChild(style);\n}\n\n// \u2500\u2500 Utility Functions \u2500\u2500\n\nfunction addCorners(el, color, size = 14) {\n  ["TL", "TR", "BL", "BR"].forEach((pos) => {\n    const c = document.createElement("div");\n    const isTop = pos.includes("T"), isLeft = pos.includes("L");\n    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;\n    el.appendChild(c);\n  });\n}\n\nfunction addFloatingMotes(el, color, count = 3) {\n  for (let i = 0; i < count; i++) {\n    const mote = document.createElement("div");\n    mote.style.cssText = `position:absolute;bottom:10%;left:${10 + Math.random() * 80}%;width:${1 + Math.random() * 2}px;height:${1 + Math.random() * 2}px;background:${color};border-radius:50%;opacity:0;pointer-events:none;animation:otw-float-up ${8 + Math.random() * 6}s ${Math.random() * 10}s ease-out infinite;z-index:1;`;\n    el.appendChild(mote);\n  }\n}\n\nfunction calculate1RM(weight, reps) {\n  if (reps === 0 || weight === 0) return 0;\n  if (reps === 1) return weight;\n  return Math.round(weight * (1 + reps / 30));\n}\n\nfunction getFirstWorkingSetIndex(sets) {\n  return sets.findIndex((s) => !s.isWarmup);\n}\n\nfunction updateWarmupWeights(ex, newW) {\n  const warmups = ex.sets.filter((s) => s.isWarmup);\n  [0.5, 0.7, 0.85].forEach((p, i) => {\n    if (warmups[i]) warmups[i].weight = Math.round(newW * p);\n  });\n}\n\nasync function getPersonalStats() {\n  const fm = getFileMetadata(STATS_FILE);\n  if (!fm) return { weight: 61, height: 175, birthdate: "2005-11-29" };\n  return { weight: fm.Weight || 61, height: fm.Height || 175, birthdate: fm.Birthdate || "2005-11-29" };\n}\n\nfunction calculateAge(bd) {\n  if (!bd) return 20;\n  const b = new Date(bd), t = new Date();\n  let a = t.getFullYear() - b.getFullYear();\n  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;\n  return a;\n}\n\nfunction formatBirthdate(dateStr) {\n  if (!dateStr) return "";\n  return new Date(dateStr).toISOString().split("T")[0];\n}\n\nfunction parseStandardValue(val) {\n  if (typeof val !== "string") val = String(val);\n  val = val.trim();\n  if (val.includes("<")) {\n    const num = parseFloat(val.replace(/[<\\s]/g, ""));\n    return !isNaN(num) && num > 0 ? num * 0.5 : 0.1;\n  }\n  const num = parseFloat(val);\n  return isNaN(num) ? 0 : num;\n}\n\nasync function getStrengthStandard(exerciseName) {\n  const filePath = EXERCISE_DB_FOLDER + "/" + exerciseName + ".md";\n  const fm = getFileMetadata(filePath);\n  const isBW = fm?.Type === "Bodyweight";\n  const content = await readFile(filePath);\n  if (!content) return null;\n  const lines = content.split("\\n");\n  const bwTable = [], ageTable = [];\n  let currentTable = null;\n  for (const line of lines) {\n    if (line.match(/\\|\\s*BW\\s*\\|/i)) { currentTable = "bw"; continue; }\n    if (line.match(/\\|\\s*Age\\s*\\|/i)) { currentTable = "age"; continue; }\n    if (line.startsWith("|---") || line.startsWith("| ---")) continue;\n    const m = line.match(/\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|\\s*([^|]+)\\s*\\|/);\n    if (m) {\n      const row = { key: parseStandardValue(m[1]), beginner: parseStandardValue(m[2]), novice: parseStandardValue(m[3]), intermediate: parseStandardValue(m[4]), advanced: parseStandardValue(m[5]), elite: parseStandardValue(m[6]) };\n      if (row.key > 0 && (row.beginner > 0 || row.novice > 0 || row.intermediate > 0)) {\n        if (currentTable === "bw") bwTable.push(row);\n        else if (currentTable === "age") ageTable.push(row);\n      }\n    }\n  }\n  return { bwTable, ageTable, isBodyweight: isBW, hasValidData: bwTable.length > 0 || ageTable.length > 0 };\n}\n\nfunction interpolateStandard(table, value) {\n  if (!table || table.length === 0) return null;\n  const sorted = [...table].sort((a, b) => a.key - b.key);\n  let lower = sorted[0], upper = sorted[sorted.length - 1];\n  for (let i = 0; i < sorted.length - 1; i++) {\n    if (sorted[i].key <= value && sorted[i + 1].key >= value) { lower = sorted[i]; upper = sorted[i + 1]; break; }\n  }\n  if (value <= lower.key) return { ...lower };\n  if (value >= upper.key) return { ...upper };\n  const ratio = (value - lower.key) / (upper.key - lower.key);\n  return { key: value, beginner: lower.beginner + ratio * (upper.beginner - lower.beginner), novice: lower.novice + ratio * (upper.novice - lower.novice), intermediate: lower.intermediate + ratio * (upper.intermediate - lower.intermediate), advanced: lower.advanced + ratio * (upper.advanced - lower.advanced), elite: lower.elite + ratio * (upper.elite - lower.elite) };\n}\n\nasync function getAveragedStandards(std) {\n  const stats = await getPersonalStats();\n  const bw = interpolateStandard(std.bwTable, stats.weight);\n  const ag = interpolateStandard(std.ageTable, calculateAge(stats.birthdate));\n  if (bw && ag) return { beginner: (bw.beginner + ag.beginner) / 2, novice: (bw.novice + ag.novice) / 2, intermediate: (bw.intermediate + ag.intermediate) / 2, advanced: (bw.advanced + ag.advanced) / 2, elite: (bw.elite + ag.elite) / 2 };\n  return bw || ag || null;\n}\n\nfunction determineStrengthLevel(cv, std) {\n  if (!std || cv < 0) return { level: "Untrained", color: "#6a6a6a", progress: 0, nextTarget: std?.beginner || 1 };\n  const { beginner, novice, intermediate, advanced, elite } = std;\n  if (cv >= elite) return { level: "Elite", color: "#9a6a7a", progress: 100, nextTarget: null };\n  if (cv >= advanced) return { level: "Advanced", color: "#8a7a9a", progress: ((cv - advanced) / (elite - advanced)) * 100, nextTarget: elite };\n  if (cv >= intermediate) return { level: "Intermediate", color: "#6a8a9a", progress: ((cv - intermediate) / (advanced - intermediate)) * 100, nextTarget: advanced };\n  if (cv >= novice) return { level: "Novice", color: "#7a9a7d", progress: ((cv - novice) / (intermediate - novice)) * 100, nextTarget: intermediate };\n  if (cv >= beginner) return { level: "Beginner", color: "#a89860", progress: ((cv - beginner) / (novice - beginner)) * 100, nextTarget: novice };\n  return { level: "Untrained", color: "#6a6a6a", progress: beginner > 0 ? Math.max(0, (cv / beginner) * 100) : 0, nextTarget: beginner };\n}\n\nasync function calculateStrengthLevel(name, w, r, maxR) {\n  const std = await getStrengthStandard(name);\n  if (!std || !std.hasValidData) return null;\n  const avg = await getAveragedStandards(std);\n  if (!avg) return null;\n  if (std.isBodyweight) {\n    const eff = maxR !== null && maxR !== undefined ? Math.max(r, maxR) : r;\n    const res = determineStrengthLevel(eff, avg);\n    return { ...res, currentValue: eff, isBodyweight: true, unit: "reps", displayLabel: "Max Reps" };\n  } else {\n    if (w <= 0) return null;\n    const est = calculate1RM(w, r);\n    const res = determineStrengthLevel(est, avg);\n    return { ...res, currentValue: est, isBodyweight: false, unit: "kg", displayLabel: "Est. 1RM" };\n  }\n}\n\nasync function hasStrengthStandard(name) {\n  const std = await getStrengthStandard(name);\n  return std !== null && std.hasValidData;\n}\n\nasync function getExercisePR(name) {\n  const std = await getStrengthStandard(name);\n  const isBW = std?.isBodyweight || false;\n  const files = getFilesInFolder(WORKOUT_FOLDER);\n  let best = null, bestV = 0;\n  for (const f of files) {\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises) && fm.Workout === true) {\n      const ex = fm.exercises.find((e) => e.name === name);\n      if (ex?.sets) {\n        for (const set of ex.sets) {\n          if (!set.isWarmup && set.completed) {\n            if (isBW) {\n              if (set.reps > bestV) { bestV = set.reps; best = { ...set, date: f.basename, prValue: bestV, isBodyweight: true }; }\n            } else if (set.weight > 0) {\n              const est = calculate1RM(set.weight, set.reps);\n              if (est > bestV) { bestV = est; best = { ...set, date: f.basename, estimated1RM: est, prValue: est, isBodyweight: false }; }\n            }\n          }\n        }\n      }\n    }\n  }\n  return best;\n}\n\nfunction getLastWorkoutForMuscleGroup(muscle) {\n  const files = getFilesInFolder(WORKOUT_FOLDER).sort((a, b) => b.basename.localeCompare(a.basename));\n  for (const f of files) {\n    if (f.path === file.path) continue; // Skip the current daily note\n    const fm = getFileMetadata(f.path);\n    if (fm?.exercises && Array.isArray(fm.exercises)) {\n      const relevant = fm.exercises.filter(ex => ex.muscle === muscle || ex.muscleGroup === muscle);\n      if (relevant.length > 0) return { date: f.basename.match(/^(\\d{4}-\\d{2}-\\d{2})/)?.[1], exercises: relevant, file: f };\n    }\n  }\n  return null;\n}\n\n// \u2500\u2500 Save current state to frontmatter \u2500\u2500\nasync function saveState() {\n  await setMultipleData({\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n}\n\n// \u2500\u2500 Personal Stats \u2500\u2500\nasync function updatePersonalStats(weight, height, birthdate) {\n  const content = `---\\nWeight: ${weight}\\nHeight: ${height}\\nBirthdate: "${birthdate}"\\n---\\n\\n# Personal Stats\\n\\nUpdated: ${moment().format("YYYY-MM-DD HH:mm")}\\n`;\n  const statsFile = app.vault.getAbstractFileByPath(STATS_FILE);\n  if (statsFile) { await app.vault.modify(statsFile, content); }\n  else {\n    const folder = STATS_FILE.substring(0, STATS_FILE.lastIndexOf("/"));\n    if (!app.vault.getAbstractFileByPath(folder)) await app.vault.createFolder(folder);\n    await app.vault.create(STATS_FILE, content);\n  }\n}\n\n// \u2500\u2500 Modal System \u2500\u2500\nlet activeModal = null;\n\nfunction closeModal() {\n  if (!activeModal) return;\n  activeModal.classList.remove("visible");\n  setTimeout(() => {\n    if (activeModal?.parentNode) activeModal.parentNode.removeChild(activeModal);\n    activeModal = null;\n  }, 500);\n}\n\nfunction createModal(title, contentBuilder) {\n  if (activeModal) { activeModal.parentNode.removeChild(activeModal); activeModal = null; }\n  const modal = document.createElement("div");\n  modal.className = "otw-modal-overlay";\n  activeModal = modal;\n  const modalContent = document.createElement("div");\n  modalContent.className = "otw-modal-content";\n  modal.appendChild(modalContent);\n  addCorners(modalContent, THEME.color);\n  if (title) {\n    const t = document.createElement("h2");\n    t.textContent = title;\n    t.style.cssText = `margin:0;color:${THEME.color};font-size:14px;font-weight:500;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n    modalContent.appendChild(t);\n    const d = document.createElement("div");\n    d.style.cssText = `width:60px;height:1px;background:linear-gradient(90deg,transparent,${THEME.color},transparent);margin:0 auto 12px;`;\n    modalContent.appendChild(d);\n  }\n  contentBuilder(modalContent);\n  modal.onclick = (e) => { if (e.target === modal) closeModal(); };\n  document.body.appendChild(modal);\n  requestAnimationFrame(() => modal.classList.add("visible"));\n  return modal;\n}\n\n// \u2500\u2500 Finish Workout \u2500\u2500\nasync function finishWorkout(type) {\n  await setMultipleData({\n    Workout: true,\n    "Workout-Type": type,\n    exercises: exercises,\n    currentMuscleIndex: currentMuscleIndex,\n  });\n  notice("Workout logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");\n  render();\n}\n\nfunction openFinishModal() {\n  // Build summary data first\n  const buildSummary = async () => {\n    const summaryData = [];\n    for (const ex of exercises) {\n      const completed = ex.sets.filter(s => !s.isWarmup && s.completed);\n      if (completed.length > 0) {\n        const hasStd = await hasStrengthStandard(ex.name);\n        const pr = await getExercisePR(ex.name);\n        let bestW = 0, bestR = 0, maxR = 0, sessionBest = 0;\n        for (const s of completed) {\n          if (s.reps > maxR) maxR = s.reps;\n          if (s.weight > 0) {\n            const est = calculate1RM(s.weight, s.reps);\n            if (est > sessionBest) { sessionBest = est; bestW = s.weight; bestR = s.reps; }\n          } else if (s.reps > sessionBest) { sessionBest = s.reps; bestR = s.reps; }\n        }\n        const sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR);\n        summaryData.push({ name: ex.name, muscle: ex.muscle, bestW, bestR, maxR, sessionBest, sl, hasStd, pr });\n      }\n    }\n    return summaryData;\n  };\n\n  buildSummary().then(summaryData => {\n    createModal("Workout Complete", (content) => {\n      // Summary\n      const summaryDiv = document.createElement("div");\n      summaryDiv.className = "otw-summary-complete";\n      summaryDiv.innerHTML = "<h2>WORKOUT COMPLETE</h2>";\n      content.appendChild(summaryDiv);\n\n      // Exercise summaries\n      if (summaryData.length > 0) {\n        const sec = document.createElement("div");\n        sec.style.cssText = "display:flex;flex-direction:column;gap:12px;";\n        content.appendChild(sec);\n\n        const secTitle = document.createElement("div");\n        secTitle.textContent = "SESSION SUMMARY";\n        secTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;margin-bottom:4px;`;\n        sec.appendChild(secTitle);\n\n        for (const ex of summaryData) {\n          const card = document.createElement("div");\n          card.style.cssText = `padding:14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:6px;`;\n          sec.appendChild(card);\n\n          const hdr = document.createElement("div");\n          hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;";\n          card.appendChild(hdr);\n\n          const nm = document.createElement("span");\n          nm.textContent = ex.name;\n          nm.style.cssText = `color:${THEME.color};font-weight:600;font-size:14px;`;\n          hdr.appendChild(nm);\n\n          if (ex.sl) {\n            const li = STRENGTH_LEVELS[ex.sl.level];\n            const badge = document.createElement("span");\n            badge.style.cssText = `display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:${ex.sl.color}20;border:1px solid ${ex.sl.color}50;border-radius:4px;color:${ex.sl.color};font-size:11px;font-weight:700;letter-spacing:1px;`;\n            badge.textContent = (li?.icon || "\\u25CB") + " " + ex.sl.level.toUpperCase();\n            hdr.appendChild(badge);\n          }\n\n          const stats = document.createElement("div");\n          stats.style.cssText = "display:flex;justify-content:space-between;margin-bottom:8px;font-size:12px;";\n          card.appendChild(stats);\n\n          const setI = document.createElement("span");\n          setI.textContent = ex.sl?.isBodyweight ? "Best: " + ex.maxR + " reps" : "Best: " + ex.bestW + "kg \\u00D7 " + ex.bestR;\n          setI.style.cssText = `color:${THEME.colorMuted};`;\n          stats.appendChild(setI);\n\n          if (ex.sl) {\n            const rmI = document.createElement("span");\n            rmI.textContent = ex.sl.displayLabel + ": " + ex.sl.currentValue + ex.sl.unit;\n            rmI.style.cssText = `color:${THEME.color};font-weight:600;`;\n            stats.appendChild(rmI);\n          }\n\n          if (ex.pr) {\n            const prC = document.createElement("div");\n            prC.style.cssText = "font-size:11px;margin-bottom:8px;padding:6px 8px;background:rgba(168,152,96,0.1);border-radius:4px;";\n            const cv = ex.sl?.currentValue || ex.sessionBest;\n            if (cv > ex.pr.prValue) {\n              prC.style.background = "rgba(122,154,125,0.15)";\n              prC.innerHTML = `<span style="color:#7a9a7d;font-weight:700;">\\uD83C\\uDF89 NEW PR!</span> <span style="color:${THEME.colorMuted};">Previous: ${ex.pr.prValue} \\u2192 Now: ${cv}</span>`;\n            } else if (cv === ex.pr.prValue) {\n              prC.innerHTML = `<span style="color:#a89860;">\\uD83C\\uDFC6 Matched PR:</span> <span style="color:${THEME.colorMuted};">${ex.pr.prValue}</span>`;\n            } else {\n              prC.innerHTML = `<span style="color:${THEME.colorMuted};">\\uD83C\\uDFC6 PR: ${ex.pr.prValue}</span> <span style="color:#6a6a6a;">(today: ${cv})</span>`;\n            }\n            card.appendChild(prC);\n          }\n\n          if (ex.sl && ex.sl.nextTarget) {\n            const pb = document.createElement("div");\n            pb.className = "otw-strength-bar";\n            pb.style.marginTop = "8px";\n            card.appendChild(pb);\n            const fill = document.createElement("div");\n            fill.className = "otw-strength-fill";\n            fill.style.cssText = `width:${Math.min(100, ex.sl.progress)}%;background:${ex.sl.color};`;\n            pb.appendChild(fill);\n            const ti = document.createElement("div");\n            ti.style.cssText = `display:flex;justify-content:space-between;font-size:9px;color:${THEME.colorMuted};margin-top:4px;`;\n            ti.innerHTML = `<span>Current: ${ex.sl.currentValue}${ex.sl.unit}</span><span>Next: ${Math.round(ex.sl.nextTarget)}${ex.sl.unit}</span>`;\n            card.appendChild(ti);\n          }\n        }\n      }\n\n      // Feel buttons\n      const feelTitle = document.createElement("h3");\n      feelTitle.textContent = "How did it feel?";\n      feelTitle.style.cssText = `margin:12px 0;color:${THEME.color};font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;\n      content.appendChild(feelTitle);\n\n      // Discipline button\n      const discBtn = document.createElement("div");\n      discBtn.className = "otw-feel-btn";\n      discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;\n      discBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">&#x1F48E;</span><div style="flex:1;"><div style="color:${THEME.colorDiscipline};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through resistance</div></div><div style="color:#4a4030;font-size:18px;opacity:0.5;">\\u2192</div>`;\n      discBtn.onclick = async () => { closeModal(); await finishWorkout("discipline"); };\n      content.appendChild(discBtn);\n\n      // Flow button\n      const flowBtn = document.createElement("div");\n      flowBtn.className = "otw-feel-btn";\n      flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;\n      flowBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">&#x1F30A;</span><div style="flex:1;"><div style="color:${THEME.colorFlow};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Felt natural and effortless</div></div><div style="color:#304050;font-size:18px;opacity:0.5;">\\u2192</div>`;\n      flowBtn.onclick = async () => { closeModal(); await finishWorkout("flow"); };\n      content.appendChild(flowBtn);\n    });\n  });\n}\n\n// \u2500\u2500 Personal Stats Modal \u2500\u2500\nasync function openPersonalStatsModal() {\n  const stats = await getPersonalStats();\n  createModal("Personal Stats", (content) => {\n    const form = document.createElement("div");\n    form.style.cssText = "display:flex;flex-direction:column;gap:16px;";\n    content.appendChild(form);\n\n    // Birthdate\n    const birthRow = document.createElement("div");\n    birthRow.style.cssText = `display:flex;flex-direction:column;gap:8px;padding:12px 16px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};`;\n    birthRow.innerHTML = `<span style="color:${THEME.colorMuted};font-size:12px;">Birthdate</span>`;\n    const birthInputRow = document.createElement("div");\n    birthInputRow.style.cssText = "display:flex;align-items:center;gap:12px;";\n    const birthInput = document.createElement("input");\n    birthInput.type = "date";\n    birthInput.value = formatBirthdate(stats.birthdate);\n    birthInput.style.cssText = `flex:1;padding:8px;background:#0a0a0a;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:1em;`;\n    const ageDisplay = document.createElement("span");\n    ageDisplay.textContent = `Age: ${calculateAge(stats.birthdate)}`;\n    ageDisplay.style.cssText = `color:${THEME.color};font-size:1.1em;font-weight:600;min-width:80px;`;\n    birthInput.onchange = () => { ageDisplay.textContent = `Age: ${calculateAge(birthInput.value)}`; };\n    birthInputRow.appendChild(birthInput);\n    birthInputRow.appendChild(ageDisplay);\n    birthRow.appendChild(birthInputRow);\n    form.appendChild(birthRow);\n\n    // Weight\n    const weightRow = document.createElement("div");\n    weightRow.style.cssText = `display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};`;\n    weightRow.innerHTML = `<span style="color:${THEME.colorMuted};">Weight (kg)</span>`;\n    const weightInput = document.createElement("input");\n    weightInput.type = "number";\n    weightInput.value = stats.weight;\n    weightInput.style.cssText = `width:80px;padding:8px;background:#0a0a0a;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:1.1em;text-align:center;`;\n    weightRow.appendChild(weightInput);\n    form.appendChild(weightRow);\n\n    // Height\n    const heightRow = document.createElement("div");\n    heightRow.style.cssText = `display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};`;\n    heightRow.innerHTML = `<span style="color:${THEME.colorMuted};">Height (cm)</span>`;\n    const heightInput = document.createElement("input");\n    heightInput.type = "number";\n    heightInput.value = stats.height;\n    heightInput.style.cssText = `width:80px;padding:8px;background:#0a0a0a;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:1.1em;text-align:center;`;\n    heightRow.appendChild(heightInput);\n    form.appendChild(heightRow);\n\n    const saveBtn = document.createElement("button");\n    saveBtn.textContent = "SAVE STATS";\n    saveBtn.className = "otw-btn otw-btn-primary";\n    saveBtn.onclick = async () => {\n      await updatePersonalStats(parseFloat(weightInput.value) || 61, parseFloat(heightInput.value) || 175, birthInput.value || "2005-11-29");\n      notice("Personal stats updated!");\n      closeModal();\n    };\n    form.appendChild(saveBtn);\n  });\n}\n\n// \u2500\u2500 Add Exercise Modal \u2500\u2500\nfunction openAddExerciseModal(muscle) {\n  createModal("Add Exercise - " + muscle, (content) => {\n    const nameInput = document.createElement("input");\n    nameInput.type = "text";\n    nameInput.placeholder = "Exercise name...";\n    nameInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;`;\n    content.appendChild(nameInput);\n\n    const warmupLabel = document.createElement("div");\n    warmupLabel.textContent = "Include warmup sets?";\n    warmupLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(warmupLabel);\n\n    let incWarmup = true;\n    const warmupRow = document.createElement("div");\n    warmupRow.style.cssText = "display:flex;gap:8px;margin-top:8px;";\n    content.appendChild(warmupRow);\n\n    const yesBtn = document.createElement("button");\n    yesBtn.textContent = "Yes (suggested)";\n    yesBtn.className = "otw-btn otw-btn-secondary";\n    yesBtn.style.cssText += `flex:1;background:rgba(154,140,122,0.2);border-color:${THEME.color};color:${THEME.color};`;\n    const noBtn = document.createElement("button");\n    noBtn.textContent = "No";\n    noBtn.className = "otw-btn otw-btn-secondary";\n    noBtn.style.flex = "1";\n    yesBtn.onclick = () => { incWarmup = true; yesBtn.style.background = "rgba(154,140,122,0.2)"; yesBtn.style.borderColor = THEME.color; yesBtn.style.color = THEME.color; noBtn.style.background = "#0f0f0f"; noBtn.style.borderColor = THEME.colorBorder; noBtn.style.color = THEME.colorMuted; };\n    noBtn.onclick = () => { incWarmup = false; noBtn.style.background = "rgba(154,140,122,0.2)"; noBtn.style.borderColor = THEME.color; noBtn.style.color = THEME.color; yesBtn.style.background = "#0f0f0f"; yesBtn.style.borderColor = THEME.colorBorder; yesBtn.style.color = THEME.colorMuted; };\n    warmupRow.appendChild(yesBtn);\n    warmupRow.appendChild(noBtn);\n\n    const weightLabel = document.createElement("div");\n    weightLabel.textContent = "Working weight (kg) - 0 for bodyweight";\n    weightLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;\n    content.appendChild(weightLabel);\n\n    const weightInput = document.createElement("input");\n    weightInput.type = "number";\n    weightInput.placeholder = "0";\n    weightInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;margin-top:8px;`;\n    content.appendChild(weightInput);\n\n    const btnRow = document.createElement("div");\n    btnRow.style.cssText = "display:flex;gap:12px;margin-top:16px;";\n    content.appendChild(btnRow);\n\n    const cancelBtn = document.createElement("button");\n    cancelBtn.textContent = "Cancel";\n    cancelBtn.className = "otw-btn otw-btn-secondary";\n    cancelBtn.style.flex = "1";\n    cancelBtn.onclick = () => closeModal();\n    btnRow.appendChild(cancelBtn);\n\n    const addBtn = document.createElement("button");\n    addBtn.textContent = "Add Exercise";\n    addBtn.className = "otw-btn otw-btn-primary";\n    addBtn.style.flex = "1";\n    addBtn.onclick = async () => {\n      const name = nameInput.value.trim();\n      if (!name) { notice("Please enter an exercise name"); return; }\n      const ww = parseFloat(weightInput.value) || 0;\n      const sets = [];\n      if (incWarmup && ww > 0) {\n        sets.push({ weight: Math.round(ww * 0.5), reps: 10, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.7), reps: 6, completed: false, isWarmup: true });\n        sets.push({ weight: Math.round(ww * 0.85), reps: 3, completed: false, isWarmup: true });\n      }\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });\n      exercises.push({ name, muscle, muscleGroup: muscle, sets });\n      closeModal();\n      await saveState();\n      render();\n    };\n    btnRow.appendChild(addBtn);\n\n    setTimeout(() => nameInput.focus(), 100);\n  });\n}\n\n// \u2500\u2500 Add Strength Standard Modal \u2500\u2500\nasync function openAddStrengthStandardModal() {\n  createModal("Add Strength Standard", (content) => {\n    const form = document.createElement("div");\n    form.style.cssText = "display:flex;flex-direction:column;gap:16px;";\n    content.appendChild(form);\n\n    const nameInput = document.createElement("input");\n    nameInput.type = "text";\n    nameInput.placeholder = "Exercise name (e.g., Dumbbell Curl)";\n    nameInput.style.cssText = `padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:1em;`;\n    form.appendChild(nameInput);\n\n    let exerciseType = "Weighted";\n    const typeContainer = document.createElement("div");\n    typeContainer.style.cssText = "display:flex;gap:12px;";\n    const weightedBtn = document.createElement("button");\n    weightedBtn.textContent = "\\uD83C\\uDFCB\\uFE0F Weighted";\n    weightedBtn.style.cssText = `flex:1;padding:14px;background:rgba(154,140,122,0.2);border:1px solid ${THEME.color};color:${THEME.color};cursor:pointer;`;\n    const bodyweightBtn = document.createElement("button");\n    bodyweightBtn.textContent = "\\uD83E\\uDD38 Bodyweight";\n    bodyweightBtn.style.cssText = `flex:1;padding:14px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.colorMuted};cursor:pointer;`;\n    weightedBtn.onclick = () => { exerciseType = "Weighted"; weightedBtn.style.background = "rgba(154,140,122,0.2)"; weightedBtn.style.borderColor = THEME.color; weightedBtn.style.color = THEME.color; bodyweightBtn.style.background = "#0f0f0f"; bodyweightBtn.style.borderColor = THEME.colorBorder; bodyweightBtn.style.color = THEME.colorMuted; };\n    bodyweightBtn.onclick = () => { exerciseType = "Bodyweight"; bodyweightBtn.style.background = "rgba(154,140,122,0.2)"; bodyweightBtn.style.borderColor = THEME.color; bodyweightBtn.style.color = THEME.color; weightedBtn.style.background = "#0f0f0f"; weightedBtn.style.borderColor = THEME.colorBorder; weightedBtn.style.color = THEME.colorMuted; };\n    typeContainer.appendChild(weightedBtn);\n    typeContainer.appendChild(bodyweightBtn);\n    form.appendChild(typeContainer);\n\n    const infoText = document.createElement("p");\n    infoText.innerHTML = `<strong>Weighted:</strong> Standards in kg (1RM)<br><strong>Bodyweight:</strong> Standards in reps`;\n    infoText.style.cssText = `color:${THEME.colorMuted};font-size:12px;line-height:1.6;`;\n    form.appendChild(infoText);\n\n    const createBtn = document.createElement("button");\n    createBtn.textContent = "CREATE";\n    createBtn.className = "otw-btn otw-btn-primary";\n    createBtn.onclick = async () => {\n      const exerciseName = nameInput.value.trim();\n      if (!exerciseName) { notice("Please enter an exercise name"); return; }\n      const filePath = `${EXERCISE_DB_FOLDER}/${exerciseName}.md`;\n      const unitLabel = exerciseType === "Bodyweight" ? "reps" : "kg (1RM)";\n      const fileContent = `---\\nData: Strength Standard\\nExercise: "${exerciseName}"\\nType: ${exerciseType}\\ncssclasses:\\n  - hide-properties\\n---\\n\\n# ${exerciseName} Strength Standards\\n\\n> Standards are in **${unitLabel}**\\n\\n## Bodyweight Table\\n| BW  | Beg. | Nov. | Int. | Adv. | Elite |\\n| --- | ---- | ---- | ---- | ---- | ----- |\\n| 50  | 0    | 0    | 0    | 0    | 0     |\\n| 60  | 0    | 0    | 0    | 0    | 0     |\\n| 70  | 0    | 0    | 0    | 0    | 0     |\\n| 80  | 0    | 0    | 0    | 0    | 0     |\\n| 90  | 0    | 0    | 0    | 0    | 0     |\\n\\n## Age Table\\n| Age | Beg. | Nov. | Int. | Adv. | Elite |\\n| --- | ---- | ---- | ---- | ---- | ----- |\\n| 15  | 0    | 0    | 0    | 0    | 0     |\\n| 20  | 0    | 0    | 0    | 0    | 0     |\\n| 30  | 0    | 0    | 0    | 0    | 0     |\\n| 40  | 0    | 0    | 0    | 0    | 0     |\\n| 50  | 0    | 0    | 0    | 0    | 0     |\\n`;\n      try {\n        if (!app.vault.getAbstractFileByPath(EXERCISE_DB_FOLDER)) await app.vault.createFolder(EXERCISE_DB_FOLDER);\n        if (!app.vault.getAbstractFileByPath(filePath)) await app.vault.create(filePath, fileContent);\n        closeModal();\n        notice(`Strength standard created for ${exerciseName}. Open the file to fill in the values.`);\n      } catch (error) { notice(`Error: ${error.message}`); }\n    };\n    form.appendChild(createBtn);\n  });\n}\n\n// \u2500\u2500 Render a single set row \u2500\u2500\nfunction renderSet(setsContainer, set, setIdx, ex, warmupRefs) {\n  const row = document.createElement("div");\n  row.className = "otw-set-row" + (set.completed ? " completed" : "");\n  setsContainer.appendChild(row);\n  const refs = { weightInput: null };\n\n  // Checkbox\n  const cb = document.createElement("div");\n  cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n  cb.textContent = set.completed ? "\\u2713" : "";\n  cb.onclick = async () => {\n    set.completed = !set.completed;\n    cb.className = "otw-checkbox" + (set.completed ? " checked" : "");\n    cb.textContent = set.completed ? "\\u2713" : "";\n    row.className = "otw-set-row" + (set.completed ? " completed" : "");\n    await saveState();\n  };\n  row.appendChild(cb);\n\n  // Middle: weight + reps\n  const mid = document.createElement("div");\n  mid.style.cssText = "display:flex;align-items:center;gap:12px;flex-wrap:wrap;";\n  row.appendChild(mid);\n\n  // Weight input\n  const wWrap = document.createElement("div");\n  wWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(wWrap);\n  const wInput = document.createElement("input");\n  wInput.type = "number";\n  wInput.value = set.weight;\n  wInput.className = "otw-input";\n  const firstW = getFirstWorkingSetIndex(ex.sets);\n  const isFirst = !set.isWarmup && setIdx === firstW;\n  wInput.onchange = async (e) => {\n    const nw = parseFloat(e.target.value) || 0;\n    set.weight = nw;\n    if (isFirst) {\n      updateWarmupWeights(ex, nw);\n      const ws = ex.sets.filter((s) => s.isWarmup);\n      warmupRefs.forEach((inp, i) => { if (ws[i]) inp.value = ws[i].weight; });\n    }\n    await saveState();\n  };\n  wWrap.appendChild(wInput);\n  refs.weightInput = wInput;\n  const kgLabel = document.createElement("span");\n  kgLabel.textContent = "kg";\n  kgLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;`;\n  wWrap.appendChild(kgLabel);\n\n  // Reps controls\n  const rWrap = document.createElement("div");\n  rWrap.style.cssText = "display:flex;align-items:center;gap:4px;";\n  mid.appendChild(rWrap);\n  const minusBtn = document.createElement("button");\n  minusBtn.className = "otw-ctrl-btn";\n  minusBtn.textContent = "\\u2212";\n  minusBtn.onclick = async () => { if (set.reps > 1) { set.reps--; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); } };\n  rWrap.appendChild(minusBtn);\n  const rDisp = document.createElement("span");\n  rDisp.textContent = set.reps + "\\u00D7";\n  rDisp.style.cssText = `color:${THEME.color};font-size:14px;font-weight:600;min-width:30px;text-align:center;`;\n  rWrap.appendChild(rDisp);\n  const plusBtn = document.createElement("button");\n  plusBtn.className = "otw-ctrl-btn";\n  plusBtn.textContent = "+";\n  plusBtn.onclick = async () => { set.reps++; rDisp.textContent = set.reps + "\\u00D7"; await saveState(); };\n  rWrap.appendChild(plusBtn);\n\n  if (set.isWarmup) {\n    const badge = document.createElement("span");\n    badge.className = "otw-warmup-badge";\n    badge.textContent = "\\u26A1 Warmup";\n    mid.appendChild(badge);\n  }\n\n  // Delete set button\n  if (ex.sets.length > 1) {\n    const delBtn = document.createElement("button");\n    delBtn.textContent = "\\u00D7";\n    delBtn.style.cssText = `width:28px;height:28px;background:transparent;border:1px solid #3a2828;color:#6a4a4a;cursor:pointer;font-size:16px;`;\n    delBtn.onclick = async () => { ex.sets.splice(setIdx, 1); await saveState(); render(); };\n    row.appendChild(delBtn);\n  } else {\n    const ph = document.createElement("div");\n    ph.style.width = "28px";\n    row.appendChild(ph);\n  }\n\n  return refs;\n}\n\n// \u2500\u2500 Render Exercise Card \u2500\u2500\nasync function renderExercise(exContainer, ex) {\n  const card = document.createElement("div");\n  card.className = "otw-card";\n  exContainer.appendChild(card);\n  addCorners(card, THEME.color, 12);\n\n  const exHeader = document.createElement("div");\n  exHeader.style.cssText = `display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid ${THEME.colorBorder};`;\n  card.appendChild(exHeader);\n\n  const leftCol = document.createElement("div");\n  leftCol.style.flex = "1";\n  exHeader.appendChild(leftCol);\n\n  const exTitle = document.createElement("h3");\n  exTitle.textContent = ex.name;\n  exTitle.style.cssText = `margin:0 0 8px 0;color:${THEME.color};font-size:16px;letter-spacing:1px;`;\n  leftCol.appendChild(exTitle);\n\n  // Strength level + PR info\n  const hasStd = await hasStrengthStandard(ex.name);\n  const pr = await getExercisePR(ex.name);\n  const workingSets = ex.sets.filter((s) => !s.isWarmup);\n  let bestW = 0, bestR = 0, maxR = 0;\n  workingSets.forEach((s) => { if (s.reps > maxR) maxR = s.reps; if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; } });\n\n  if (hasStd) {\n    let sl;\n    if (pr) { sl = pr.isBodyweight ? await calculateStrengthLevel(ex.name, 0, pr.prValue, pr.prValue) : await calculateStrengthLevel(ex.name, pr.weight, pr.reps, null); }\n    else if (bestW > 0 || maxR > 0) { sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR); }\n    if (sl) {\n      const li = STRENGTH_LEVELS[sl.level];\n      const badge = document.createElement("div");\n      badge.className = "otw-strength-badge";\n      badge.style.cssText += `background:${sl.color}25;border:1px solid ${sl.color}60;color:${sl.color};`;\n      badge.textContent = (li?.icon || "\\u25CB") + " " + sl.level.toUpperCase();\n      leftCol.appendChild(badge);\n\n      const rmInfo = document.createElement("div");\n      rmInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-top:6px;`;\n      rmInfo.innerHTML = `<strong style="color:${THEME.color}">${sl.displayLabel}: ${sl.currentValue}${sl.unit}</strong>`;\n      if (sl.nextTarget) rmInfo.innerHTML += ` \\u2192 Next: ${Math.round(sl.nextTarget)}${sl.unit}`;\n      leftCol.appendChild(rmInfo);\n\n      const pb = document.createElement("div");\n      pb.className = "otw-strength-bar";\n      leftCol.appendChild(pb);\n      const fill = document.createElement("div");\n      fill.className = "otw-strength-fill";\n      fill.style.cssText = `width:${Math.min(100, sl.progress)}%;background:${sl.color};`;\n      pb.appendChild(fill);\n    }\n  }\n\n  if (pr) {\n    const prBox = document.createElement("div");\n    prBox.className = "otw-pr-box";\n    const prTitle = document.createElement("div");\n    prTitle.style.cssText = "font-size:11px;color:#a89860;font-weight:700;letter-spacing:1px;";\n    prTitle.textContent = pr.isBodyweight ? "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.prValue + " reps" : "\\uD83C\\uDFC6 ALL-TIME PR: " + pr.estimated1RM + "kg (1RM)";\n    prBox.appendChild(prTitle);\n    const prDetail = document.createElement("div");\n    prDetail.style.cssText = `font-size:10px;color:${THEME.colorMuted};`;\n    prDetail.textContent = pr.isBodyweight ? "Best: " + pr.reps + " reps" : "Set: " + pr.weight + "kg \\u00D7 " + pr.reps + " reps";\n    prBox.appendChild(prDetail);\n    leftCol.appendChild(prBox);\n  }\n\n  // Delete exercise button\n  const delExBtn = document.createElement("button");\n  delExBtn.textContent = "\\uD83D\\uDDD1\\uFE0F";\n  delExBtn.style.cssText = "background:transparent;border:none;cursor:pointer;font-size:14px;opacity:0.5;";\n  delExBtn.onclick = async () => { const idx = exercises.indexOf(ex); if (idx > -1) { exercises.splice(idx, 1); await saveState(); render(); } };\n  exHeader.appendChild(delExBtn);\n\n  // Sets\n  const setsContainer = document.createElement("div");\n  setsContainer.style.cssText = "display:flex;flex-direction:column;gap:6px;";\n  card.appendChild(setsContainer);\n  const warmupRefs = [];\n  ex.sets.forEach((set, setIdx) => {\n    const refs = renderSet(setsContainer, set, setIdx, ex, warmupRefs);\n    if (set.isWarmup && refs.weightInput) warmupRefs.push(refs.weightInput);\n  });\n\n  // Add set button\n  const addSetBtn = document.createElement("button");\n  addSetBtn.textContent = "+ Add Set";\n  addSetBtn.className = "otw-btn otw-btn-dashed";\n  addSetBtn.style.cssText += "margin-top:8px;padding:8px 12px;font-size:12px;";\n  addSetBtn.onclick = async () => {\n    const last = ex.sets[ex.sets.length - 1] || { weight: 0, reps: 10 };\n    ex.sets.push({ weight: last.weight, reps: last.reps, completed: false, isWarmup: false });\n    await saveState();\n    render();\n  };\n  card.appendChild(addSetBtn);\n}\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// MUSCLE GROUP SELECTION SCREEN\n// Shows when no muscleGroups in frontmatter\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nasync function renderMuscleSelection(root) {\n  const selectedMuscles = new Set();\n  const selectedSubgroups = new Map();\n\n  // Header\n  const header = document.createElement("div");\n  header.className = "otw-card otw-card-breathe otw-header";\n  addCorners(header, THEME.color);\n  addFloatingMotes(header, THEME.color, 3);\n  const title = document.createElement("h2");\n  title.className = "otw-title";\n  title.textContent = "NEW WORKOUT";\n  header.appendChild(title);\n  const subtitle = document.createElement("div");\n  subtitle.className = "otw-progress-label";\n  subtitle.textContent = "Select muscle groups to train";\n  header.appendChild(subtitle);\n  root.appendChild(header);\n\n  // Personal stats bar\n  const stats = await getPersonalStats();\n  const statsBar = document.createElement("div");\n  statsBar.className = "otw-card";\n  statsBar.style.cssText += "display:flex;justify-content:space-between;align-items:center;padding:12px 16px;";\n  const age = calculateAge(stats.birthdate);\n  statsBar.innerHTML = `<div><span style="color:${THEME.colorMuted};font-size:12px;">Age: <strong style="color:${THEME.color}">${age}</strong></span><span style="margin:0 12px;color:${THEME.colorBorder};">|</span><span style="color:${THEME.colorMuted};font-size:12px;">Weight: <strong style="color:${THEME.color}">${stats.weight}kg</strong></span><span style="margin:0 12px;color:${THEME.colorBorder};">|</span><span style="color:${THEME.colorMuted};font-size:12px;">Height: <strong style="color:${THEME.color}">${stats.height}cm</strong></span></div>`;\n  const editStatsBtn = document.createElement("button");\n  editStatsBtn.textContent = "\\u270F\\uFE0F";\n  editStatsBtn.style.cssText = `padding:6px 10px;background:transparent;border:1px solid ${THEME.colorBorder};color:${THEME.colorMuted};cursor:pointer;font-size:12px;`;\n  editStatsBtn.onclick = () => openPersonalStatsModal();\n  statsBar.appendChild(editStatsBtn);\n  root.appendChild(statsBar);\n\n  // Muscle group selection grid\n  const muscleGrid = document.createElement("div");\n  muscleGrid.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:16px 0 8px;";\n  root.appendChild(muscleGrid);\n\n  const subgroupArea = document.createElement("div");\n  subgroupArea.style.cssText = "display:flex;flex-direction:column;gap:8px;width:100%;";\n  root.appendChild(subgroupArea);\n\n  Object.entries(MUSCLE_GROUPS).forEach(([name, config]) => {\n    const btn = document.createElement("button");\n    btn.className = "otw-muscle-toggle";\n    btn.textContent = `${config.icon} ${name}`;\n    muscleGrid.appendChild(btn);\n\n    let subgroupContainer = null;\n    if (config.subgroups) {\n      subgroupContainer = document.createElement("div");\n      subgroupContainer.className = "otw-subgroup-container";\n      subgroupContainer.style.cssText += `display:flex;flex-wrap:wrap;gap:8px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:4px;`;\n      subgroupContainer.innerHTML = `<div style="width:100%;color:${THEME.colorMuted};font-size:11px;margin-bottom:4px;">${name} subgroups:</div>`;\n      selectedSubgroups.set(name, new Set());\n      config.subgroups.forEach(sub => {\n        const subBtn = document.createElement("button");\n        subBtn.className = "otw-subgroup-btn";\n        subBtn.textContent = sub;\n        subBtn.onclick = (e) => {\n          e.stopPropagation();\n          const subs = selectedSubgroups.get(name);\n          if (subs.has(sub)) { subs.delete(sub); subBtn.classList.remove("active"); }\n          else { subs.add(sub); subBtn.classList.add("active"); }\n        };\n        subgroupContainer.appendChild(subBtn);\n      });\n      subgroupArea.appendChild(subgroupContainer);\n    }\n\n    btn.onclick = () => {\n      if (selectedMuscles.has(name)) {\n        selectedMuscles.delete(name); btn.classList.remove("active");\n        if (subgroupContainer) subgroupContainer.classList.remove("expanded");\n      } else {\n        selectedMuscles.add(name); btn.classList.add("active");\n        if (subgroupContainer) subgroupContainer.classList.add("expanded");\n      }\n    };\n  });\n\n  // Quote\n  const quote = document.createElement("div");\n  quote.style.cssText = `padding:16px;background:#0c0c0c;border-left:2px solid ${THEME.color};margin:16px 0;`;\n  quote.innerHTML = `<p style="color:${THEME.colorMuted};font-style:italic;font-size:12px;margin:0;">"There is a general principle here: <strong style="color:${THEME.color};">perform any amount of warming-up that you believe to be minimally required.</strong>"</p><p style="color:${THEME.colorMuted};font-size:11px;margin:8px 0 0 0;text-align:right;">\\u2014 Mike Mentzer</p>`;\n  root.appendChild(quote);\n\n  // Secondary actions\n  const secondaryRow = document.createElement("div");\n  secondaryRow.style.cssText = "display:flex;gap:12px;margin-bottom:12px;";\n  root.appendChild(secondaryRow);\n\n  const addStandardBtn = document.createElement("button");\n  addStandardBtn.textContent = "\\uD83D\\uDCCA Add Strength Standard";\n  addStandardBtn.className = "otw-btn otw-btn-secondary";\n  addStandardBtn.style.flex = "1";\n  addStandardBtn.onclick = () => openAddStrengthStandardModal();\n  secondaryRow.appendChild(addStandardBtn);\n\n  // Start workout button\n  const startBtn = document.createElement("button");\n  startBtn.innerHTML = `<span style="font-size:20px;">\\uD83C\\uDFCB\\uFE0F</span> START WORKOUT`;\n  startBtn.className = "otw-btn otw-btn-primary";\n  startBtn.style.cssText += "display:flex;align-items:center;justify-content:center;gap:12px;padding:20px 24px;font-size:15px;font-weight:700;";\n  startBtn.onclick = async () => {\n    if (selectedMuscles.size === 0) { notice("Please select at least one muscle group"); return; }\n\n    // Build muscle groups array (with subgroups resolved)\n    const muscleGroupsArray = [];\n    selectedMuscles.forEach(muscle => {\n      const subs = selectedSubgroups.get(muscle);\n      if (subs && subs.size > 0) subs.forEach(sub => muscleGroupsArray.push(sub));\n      else muscleGroupsArray.push(muscle);\n    });\n\n    // Load previous exercises for each muscle group\n    const exercisesArray = [];\n    muscleGroupsArray.forEach(muscle => {\n      const lastWorkout = getLastWorkoutForMuscleGroup(muscle);\n      if (lastWorkout) {\n        lastWorkout.exercises.forEach(ex => {\n          exercisesArray.push({\n            name: ex.name, muscle, muscleGroup: muscle,\n            sets: ex.sets ? ex.sets.map(s => ({\n              weight: s.weight || 0, reps: s.reps || 10,\n              completed: false, isWarmup: s.isWarmup || false\n            })) : [{ weight: 0, reps: 10, completed: false, isWarmup: false }]\n          });\n        });\n      }\n    });\n\n    // Save to frontmatter and update local state\n    muscleGroups = muscleGroupsArray;\n    exercises = exercisesArray;\n    currentMuscleIndex = 0;\n\n    await setMultipleData({\n      muscleGroups: muscleGroups,\n      exercises: exercises,\n      currentMuscleIndex: 0,\n      Workout: false,\n      "Workout-Type": "",\n      Timestamp: moment().format(),\n    });\n\n    // Re-render to show exercise tracking UI\n    render();\n  };\n  root.appendChild(startBtn);\n}\n\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\n// MAIN RENDER\n// \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\nasync function render() {\n  container.innerHTML = "";\n  const root = document.createElement("div");\n  root.className = "otw-container";\n  container.appendChild(root);\n\n  // If workout is already completed, show summary\n  if (isCompleted && getData("Workout-Type")) {\n    const wType = getData("Workout-Type");\n    const summaryCard = document.createElement("div");\n    summaryCard.className = "otw-card otw-card-breathe";\n    summaryCard.style.textAlign = "center";\n    summaryCard.style.padding = "32px";\n    addCorners(summaryCard, THEME.systemGreen);\n    summaryCard.innerHTML = `\n      <div style="font-size:32px;margin-bottom:12px;">${wType === "discipline" ? "\\uD83D\\uDC8E" : "\\uD83C\\uDF0A"}</div>\n      <h2 style="margin:0;color:${THEME.systemGreen};font-size:16px;letter-spacing:3px;text-transform:uppercase;">WORKOUT COMPLETE</h2>\n      <div style="color:${THEME.colorMuted};font-size:13px;margin-top:8px;font-style:italic;">${wType === "discipline" ? "Discipline Win" : "Flow State"}</div>\n      <div style="color:${THEME.colorMuted};font-size:11px;margin-top:16px;">${moment(getData("Timestamp")).format("MMM D, YYYY \\u2014 h:mm A")}</div>\n    `;\n    root.appendChild(summaryCard);\n\n    // Show exercises summary\n    if (exercises.length > 0) {\n      const exSummary = document.createElement("div");\n      exSummary.className = "otw-card";\n      addCorners(exSummary, THEME.color);\n      const exTitle = document.createElement("div");\n      exTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:12px;`;\n      exTitle.textContent = "SESSION SUMMARY";\n      exSummary.appendChild(exTitle);\n      for (const ex of exercises) {\n        const completedSets = ex.sets.filter((s) => !s.isWarmup && s.completed).length;\n        const totalSets = ex.sets.filter((s) => !s.isWarmup).length;\n        const row = document.createElement("div");\n        row.style.cssText = `display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${THEME.colorBorder};`;\n        row.innerHTML = `<span style="color:${THEME.color};font-weight:600;">${ex.name}</span><span style="color:${THEME.colorMuted};font-size:12px;">${completedSets}/${totalSets} sets</span>`;\n        exSummary.appendChild(row);\n      }\n      root.appendChild(exSummary);\n    }\n    return;\n  }\n\n  // \u2500\u2500 No muscle groups yet \u2192 Show muscle selection screen \u2500\u2500\n  if (muscleGroups.length === 0) {\n    await renderMuscleSelection(root);\n    return;\n  }\n\n  // \u2500\u2500 Active Workout UI \u2500\u2500\n  const currentMuscle = muscleGroups[currentMuscleIndex] || muscleGroups[0];\n  const muscleExercises = exercises.filter((e) => e.muscle === currentMuscle || e.muscleGroup === currentMuscle);\n\n  // Header\n  const header = document.createElement("div");\n  header.className = "otw-card otw-card-breathe otw-header";\n  addCorners(header, THEME.color);\n  const titleEl = document.createElement("h2");\n  titleEl.className = "otw-title";\n  titleEl.textContent = currentMuscle.toUpperCase();\n  header.appendChild(titleEl);\n  const progressLabel = document.createElement("div");\n  progressLabel.className = "otw-progress-label";\n  progressLabel.textContent = (currentMuscleIndex + 1) + " / " + muscleGroups.length;\n  header.appendChild(progressLabel);\n  root.appendChild(header);\n\n  // Exercises\n  const exContainer = document.createElement("div");\n  exContainer.style.cssText = "display:flex;flex-direction:column;gap:16px;";\n  root.appendChild(exContainer);\n\n  if (muscleExercises.length === 0) {\n    const empty = document.createElement("div");\n    empty.style.cssText = `text-align:center;padding:40px 20px;background:#0f0f0f;border:1px dashed ${THEME.colorBorder};`;\n    empty.innerHTML = `<p style="color:${THEME.colorMuted};margin:0;">No exercises for ${currentMuscle} yet.</p>`;\n    exContainer.appendChild(empty);\n  } else {\n    for (const ex of muscleExercises) {\n      await renderExercise(exContainer, ex);\n    }\n  }\n\n  // Add exercise button\n  const addExBtn = document.createElement("button");\n  addExBtn.textContent = "+ ADD EXERCISE";\n  addExBtn.className = "otw-btn otw-btn-dashed";\n  addExBtn.style.marginTop = "16px";\n  addExBtn.onclick = () => openAddExerciseModal(currentMuscle);\n  root.appendChild(addExBtn);\n\n  // Navigation\n  const nav = document.createElement("div");\n  nav.className = "otw-nav-row";\n  root.appendChild(nav);\n\n  if (currentMuscleIndex > 0) {\n    const prevBtn = document.createElement("button");\n    prevBtn.textContent = "\\u2190 PREVIOUS";\n    prevBtn.className = "otw-btn otw-btn-secondary";\n    prevBtn.onclick = async () => { currentMuscleIndex--; await saveState(); render(); };\n    nav.appendChild(prevBtn);\n  }\n\n  if (currentMuscleIndex < muscleGroups.length - 1) {\n    const nextBtn = document.createElement("button");\n    nextBtn.textContent = "NEXT MUSCLE \\u2192";\n    nextBtn.className = "otw-btn otw-btn-primary";\n    nextBtn.onclick = async () => { currentMuscleIndex++; await saveState(); render(); };\n    nav.appendChild(nextBtn);\n  } else {\n    const finishBtn = document.createElement("button");\n    finishBtn.textContent = "\\u2713 FINISH WORKOUT";\n    finishBtn.className = "otw-btn otw-btn-finish";\n    finishBtn.onclick = () => openFinishModal();\n    nav.appendChild(finishBtn);\n  }\n}\n\n// \u2500\u2500 Boot \u2500\u2500\nreturn render();\n';

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL3ZpZXdzL1dvcmtzcGFjZVZpZXcudHMiLCAic3JjL3NldHRpbmdzL09sZW5TZXR0aW5ncy50cyIsICJzcmMvdGVtcGxhdGVzL1RlbXBsYXRlRW5naW5lLnRzIiwgInNyYy90ZW1wbGF0ZXMvYnVpbHRpbnMvd29ya291dC50cGwiLCAic3JjL3RlbXBsYXRlcy9idWlsdGlucy9pbmRleC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBQbHVnaW4gRW50cnkgUG9pbnRcbi8vIFJlZ2lzdGVycyB2aWV3cywgY29tbWFuZHMsIHJpYmJvbiBpY29uLCBzZXR0aW5ncyBtaWdyYXRpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBQbHVnaW4sIGRlYm91bmNlLCBURmlsZSwgTm90aWNlLCBNYXJrZG93blZpZXcgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBUcmFja0hhYml0UmFua0RhdGEsIEFjdGl2aXR5Q29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9PTEVOLCBWSUVXX1RZUEVfV09SS1NQQUNFLCBERUZBVUxUX09MRU5fU0VUVElOR1MsIERFRkFVTFRfQUNUSVZJVElFUywgREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgRGFzaGJvYXJkVmlldyB9IGZyb20gXCIuL3ZpZXdzL0Rhc2hib2FyZFZpZXdcIjtcbmltcG9ydCB7IFdvcmtzcGFjZVZpZXcgfSBmcm9tIFwiLi92aWV3cy9Xb3Jrc3BhY2VWaWV3XCI7XG5pbXBvcnQgeyBPbGVuU2V0dGluZ1RhYiB9IGZyb20gXCIuL3NldHRpbmdzL09sZW5TZXR0aW5nc1wiO1xuaW1wb3J0IHsgVGVtcGxhdGVFbmdpbmUgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvVGVtcGxhdGVFbmdpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2xlblBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzITogT2xlblNldHRpbmdzO1xuICB0ZW1wbGF0ZUVuZ2luZSE6IFRlbXBsYXRlRW5naW5lO1xuXG4gIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBMb2FkIHNldHRpbmdzIHdpdGggZGVmYXVsdHNcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLFxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgKTtcblxuICAgIC8vIEVuc3VyZSBkZWVwIGRlZmF1bHRzIGZvciBuZXN0ZWQgb2JqZWN0c1xuICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmRldkNvbmZpZyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuZGV2Q29uZmlnLmxhYmVscyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVsc1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9ycyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5jYXRlZ29yeUNvbG9ycyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5jYXRlZ29yeVhQLFxuICAgICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeVhQXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXJcbiAgICApO1xuXG4gICAgLy8gTWlncmF0ZSBsZWdhY3kgZmllbGQgbmFtZXMgZnJvbSBzZXNzaW9uIFx1MjE5MiB3b3Jrc3BhY2VcbiAgICBhd2FpdCB0aGlzLm1pZ3JhdGVTZXNzaW9uVG9Xb3Jrc3BhY2UoKTtcblxuICAgIC8vIEluaXRpYWxpemUgVGVtcGxhdGUgRW5naW5lXG4gICAgdGhpcy50ZW1wbGF0ZUVuZ2luZSA9IG5ldyBUZW1wbGF0ZUVuZ2luZSh0aGlzLmFwcCwgdGhpcyk7XG5cbiAgICAvLyBNaWdyYXRlIGZyb20gVHJhY2tIYWJpdFJhbmsgb24gZmlyc3QgcnVuXG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLm1pZ3JhdGVkKSB7XG4gICAgICBhd2FpdCB0aGlzLm1pZ3JhdGVGcm9tVHJhY2tIYWJpdFJhbmsoKTtcbiAgICB9XG5cbiAgICAvLyBSZWdpc3RlciBtYWluIGRhc2hib2FyZCB2aWV3XG4gICAgdGhpcy5yZWdpc3RlclZpZXcoXG4gICAgICBWSUVXX1RZUEVfT0xFTixcbiAgICAgIChsZWFmKSA9PiBuZXcgRGFzaGJvYXJkVmlldyhsZWFmLCB0aGlzKVxuICAgICk7XG5cbiAgICAvLyBSZWdpc3RlciB3b3Jrc3BhY2Ugdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX1dPUktTUEFDRSxcbiAgICAgIChsZWFmKSA9PiBuZXcgV29ya3NwYWNlVmlldyhsZWFmLCB0aGlzKVxuICAgICk7XG5cbiAgICAvLyBSaWJib24gaWNvblxuICAgIHRoaXMuYWRkUmliYm9uSWNvbihcImNvbXBhc3NcIiwgXCJPcGVuIE9sZW5cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZURhc2hib2FyZCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29tbWFuZHNcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwib3Blbi1vbGVuLWRhc2hib2FyZFwiLFxuICAgICAgbmFtZTogXCJPcGVuIE9sZW4gRGFzaGJvYXJkXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5hY3RpdmF0ZURhc2hib2FyZCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInJlZnJlc2gtb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiUmVmcmVzaCBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucmVmcmVzaERhc2hib2FyZCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImFkZC1xdWljay10YXNrXCIsXG4gICAgICBuYW1lOiBcIkFkZCBRdWljayBUYXNrXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG93UXVpY2tUYXNrRGlhbG9nKCksXG4gICAgfSk7XG5cbiAgICAvLyBDYWxlbmRhciBwbHVnaW4gaW50ZWdyYXRpb24gXHUyMDE0IGluamVjdCBPbGVuIG1ldGFkYXRhIGludG8gQ2FsZW5kYXIgcGx1Z2luXG4gICAgdGhpcy5yZWdpc3RlckNhbGVuZGFyUGx1Z2luU291cmNlKCk7XG5cbiAgICAvLyBEZWJvdW5jZWQgZmlsZSB3YXRjaGVyIGZvciBtZXRhZGF0YSBjaGFuZ2VzXG4gICAgY29uc3QgcmVmcmVzaCA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaERhc2hib2FyZCgpO1xuICAgIH0sIDMwMCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uKFwiY2hhbmdlZFwiLCAoKSA9PiByZWZyZXNoKCkpXG4gICAgKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwiY3JlYXRlXCIsIGFzeW5jIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwibWRcIikge1xuICAgICAgICAgIC8vIFdhaXQgZm9yIG1ldGFkYXRhIHRvIGJlIGluZGV4ZWRcbiAgICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IDE1KSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcikge1xuICAgICAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG4gICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwicmVuYW1lXCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwibWRcIikge1xuICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gU2V0dGluZ3MgdGFiXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBPbGVuU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgLy8gLS0tIFRlbXBsYXRlIFJlZ2lzdHJ5OiBGcm9udG1hdHRlci1kcml2ZW4gcmVuZGVyaW5nIC0tLVxuICAgIHRoaXMucmVnaXN0ZXJUZW1wbGF0ZVBvc3RQcm9jZXNzb3IoKTtcblxuICAgIC8vIEludmFsaWRhdGUgdGVtcGxhdGUgY2FjaGUgd2hlbiB0ZW1wbGF0ZSAuanMgZmlsZXMgYXJlIG1vZGlmaWVkXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oXCJtb2RpZnlcIiwgKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiBmaWxlLmV4dGVuc2lvbiA9PT0gXCJqc1wiKSB7XG4gICAgICAgICAgdGhpcy50ZW1wbGF0ZUVuZ2luZS5pbnZhbGlkYXRlQ2FjaGUoZmlsZS5wYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgb251bmxvYWQoKTogdm9pZCB7XG4gICAgLy8gQ2xlYW51cCBoYW5kbGVkIGJ5IERhc2hib2FyZFZpZXcub25DbG9zZSgpXG4gIH1cblxuICAvLyAtLS0gVmlldyBNYW5hZ2VtZW50IC0tLVxuXG4gIGFzeW5jIGFjdGl2YXRlRGFzaGJvYXJkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB0aGlzLmFwcDtcbiAgICBsZXQgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX09MRU4pWzBdO1xuXG4gICAgaWYgKCFsZWFmKSB7XG4gICAgICBjb25zdCBuZXdMZWFmID0gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgICBpZiAoIW5ld0xlYWYpIHJldHVybjtcbiAgICAgIGF3YWl0IG5ld0xlYWYuc2V0Vmlld1N0YXRlKHsgdHlwZTogVklFV19UWVBFX09MRU4sIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgIGxlYWYgPSBuZXdMZWFmO1xuICAgIH1cblxuICAgIGF3YWl0IHdvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpO1xuICB9XG5cbiAgcmVmcmVzaERhc2hib2FyZCgpOiB2b2lkIHtcbiAgICBjb25zdCBsZWF2ZXMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKTtcbiAgICBmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG4gICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3IGFzIHVua25vd24gYXMgRGFzaGJvYXJkVmlldztcbiAgICAgIGlmICh2aWV3ICYmIHR5cGVvZiB2aWV3LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYWN0aXZhdGVXb3Jrc3BhY2VWaWV3KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB0aGlzLmFwcDtcblxuICAgIC8vIENsb3NlIGV4aXN0aW5nIHdvcmtzcGFjZSB2aWV3c1xuICAgIHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX1dPUktTUEFDRSkuZm9yRWFjaCgobGVhZikgPT4gbGVhZi5kZXRhY2goKSk7XG5cbiAgICAvLyBPcGVuIHdvcmtzcGFjZSBpbiB0aGUgc2FtZSB0YWIgYXMgdGhlIGRhc2hib2FyZCBpZiBwb3NzaWJsZVxuICAgIGNvbnN0IGRhc2hMZWF2ZXMgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKTtcbiAgICBjb25zdCB0YXJnZXRMZWFmID0gZGFzaExlYXZlc1swXSA/PyB3b3Jrc3BhY2UuZ2V0TGVhZihcInRhYlwiKTtcbiAgICBpZiAoIXRhcmdldExlYWYpIHJldHVybjtcblxuICAgIGF3YWl0IHRhcmdldExlYWYuc2V0Vmlld1N0YXRlKHsgdHlwZTogVklFV19UWVBFX1dPUktTUEFDRSwgYWN0aXZlOiB0cnVlIH0pO1xuICAgIGF3YWl0IHdvcmtzcGFjZS5yZXZlYWxMZWFmKHRhcmdldExlYWYpO1xuICB9XG5cbiAgYWN0aXZhdGVEYXNoYm9hcmRWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogUG9zdC1Qcm9jZXNzb3IgLS0tXG5cbiAgcHJpdmF0ZSByZWdpc3RlclRlbXBsYXRlUG9zdFByb2Nlc3NvcigpOiB2b2lkIHtcbiAgICAvLyBUcmFjayB3aGljaCBmaWxlcyB3ZSd2ZSBhbHJlYWR5IHJlbmRlcmVkIHRlbXBsYXRlcyBmb3IgaW4gdGhlIGN1cnJlbnRcbiAgICAvLyB2aWV3IGN5Y2xlLCB0byBhdm9pZCBkdXBsaWNhdGUgcmVuZGVyaW5nIGFjcm9zcyBtdWx0aXBsZSBzZWN0aW9ucy5cbiAgICBjb25zdCByZW5kZXJlZEZpbGVzID0gbmV3IFdlYWtTZXQ8SFRNTEVsZW1lbnQ+KCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyTWFya2Rvd25Qb3N0UHJvY2Vzc29yKGFzeW5jIChlbCwgY3R4KSA9PiB7XG4gICAgICAvLyBGaW5kIHRoZSBmaWxlIGJlaW5nIHJlbmRlcmVkXG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN0eC5zb3VyY2VQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgLy8gQ2hlY2sgZnJvbnRtYXR0ZXIgZm9yIGFuIFwiYWN0aXZpdHlcIiBmaWVsZFxuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGNvbnN0IGFjdGl2aXR5VHlwZSA9IGNhY2hlPy5mcm9udG1hdHRlcj8uYWN0aXZpdHkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKCFhY3Rpdml0eVR5cGUpIHJldHVybjtcblxuICAgICAgLy8gTG9vayB1cCB0ZW1wbGF0ZSBpbiB0aGUgcmVnaXN0cnlcbiAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy50ZW1wbGF0ZUVuZ2luZS5maW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlKTtcbiAgICAgIGlmICghZW50cnkpIHJldHVybjtcblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIHJlbmRlcmluZzogY2hlY2sgdGhlIHBhcmVudCBwcmV2aWV3IGNvbnRhaW5lclxuICAgICAgY29uc3QgcHJldmlld1NpemVyID0gZWwuY2xvc2VzdChcIi5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpID8/IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAocHJldmlld1NpemVyICYmIHJlbmRlcmVkRmlsZXMuaGFzKHByZXZpZXdTaXplciBhcyBIVE1MRWxlbWVudCkpIHJldHVybjtcbiAgICAgIGlmIChwcmV2aWV3U2l6ZXIpIHJlbmRlcmVkRmlsZXMuYWRkKHByZXZpZXdTaXplciBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgIC8vIENsZWFyIGRlZmF1bHQgcmVuZGVyZWQgY29udGVudCBhbmQgaW5qZWN0IHRlbXBsYXRlXG4gICAgICBlbC5lbXB0eSgpO1xuICAgICAgZWwuYWRkQ2xhc3MoXCJvbGVuLXRlbXBsYXRlLWhvc3RcIik7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsYXRlLXJvb3RcIiB9KTtcblxuICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVJZCwgZmlsZSwgY29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIC8vIEFsc28gaGFuZGxlIGZpbGUtb3BlbiBmb3Igbm90ZXMgd2l0aCBvbmx5IGZyb250bWF0dGVyIChubyBib2R5IHNlY3Rpb25zKVxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImFjdGl2ZS1sZWFmLWNoYW5nZVwiLCBhc3luYyAobGVhZikgPT4ge1xuICAgICAgICBpZiAoIWxlYWYpIHJldHVybjtcbiAgICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldztcbiAgICAgICAgaWYgKCEodmlldyBpbnN0YW5jZW9mIE1hcmtkb3duVmlldykpIHJldHVybjtcblxuICAgICAgICBjb25zdCBmaWxlID0gdmlldy5maWxlO1xuICAgICAgICBpZiAoIWZpbGUpIHJldHVybjtcblxuICAgICAgICAvLyBTbWFsbCBkZWxheSB0byBsZXQgbWV0YWRhdGEgY2FjaGUgcG9wdWxhdGVcbiAgICAgICAgYXdhaXQgc2xlZXAoMTAwKTtcblxuICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICBjb25zdCBhY3Rpdml0eVR5cGUgPSBjYWNoZT8uZnJvbnRtYXR0ZXI/LmFjdGl2aXR5IGFzIHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFhY3Rpdml0eVR5cGUpIHJldHVybjtcblxuICAgICAgICBjb25zdCBlbnRyeSA9IHRoaXMudGVtcGxhdGVFbmdpbmUuZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZSk7XG4gICAgICAgIGlmICghZW50cnkpIHJldHVybjtcblxuICAgICAgICAvLyBDaGVjayBpZiBhIHRlbXBsYXRlIGhhcyBhbHJlYWR5IGJlZW4gcmVuZGVyZWQgYnkgdGhlIHBvc3QtcHJvY2Vzc29yXG4gICAgICAgIGNvbnN0IGNvbnRlbnRFbCA9IHZpZXcuY29udGFpbmVyRWwucXVlcnlTZWxlY3RvcihcIi5tYXJrZG93bi1yZWFkaW5nLXZpZXcgLm1hcmtkb3duLXByZXZpZXctc2l6ZXJcIik7XG4gICAgICAgIGlmIChjb250ZW50RWw/LnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi10ZW1wbGF0ZS1yb290XCIpKSByZXR1cm47XG5cbiAgICAgICAgLy8gSWYgaW4gcmVhZGluZyBtb2RlIGJ1dCBubyB0ZW1wbGF0ZSB3YXMgaW5qZWN0ZWQgKGVtcHR5IGJvZHkgbm90ZSksXG4gICAgICAgIC8vIGluamVjdCBpbnRvIHRoZSBwcmV2aWV3IGNvbnRlbnRcbiAgICAgICAgaWYgKGNvbnRlbnRFbCkge1xuICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwib2xlbi10ZW1wbGF0ZS1yb290XCI7XG4gICAgICAgICAgY29udGVudEVsLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICBhd2FpdCB0aGlzLnRlbXBsYXRlRW5naW5lLnJlbmRlcihlbnRyeS50ZW1wbGF0ZUlkLCBmaWxlLCBjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgUGx1Z2luIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpOiB2b2lkIHtcbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSBDYWxlbmRhciBwbHVnaW4ncyBcImNhbGVuZGFyOm9wZW5cIiBldmVudFxuICAgIC8vIGFuZCBpbmplY3QgT2xlbidzIGFjdGl2aXR5IGNvbXBsZXRpb24gZGF0YSBhcyBjb2xvcmVkIGRvdHNcbiAgICAodGhpcy5hcHAud29ya3NwYWNlIGFzIGFueSkub24oXCJjYWxlbmRhcjpvcGVuXCIsIChzb3VyY2VzOiBhbnlbXSkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZXMpKSByZXR1cm47XG5cbiAgICAgIHNvdXJjZXMucHVzaCh7XG4gICAgICAgIGdldERhaWx5TWV0YWRhdGE6IChkYXRlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlU3RyID0gZGF0ZS5mb3JtYXQ/LihcIllZWVktTU0tRERcIikgPz8gXCJcIjtcbiAgICAgICAgICBpZiAoIWRhdGVTdHIpIHJldHVybiB7fTtcblxuICAgICAgICAgIC8vIENvdW50IGNvbXBsZXRpb25zIGZvciB0aGlzIGRhdGVcbiAgICAgICAgICBsZXQgY29tcGxldGlvbnMgPSAwO1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcykge1xuICAgICAgICAgICAgaWYgKCFhY3Rpdml0eS5lbmFibGVkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlcy5maW5kKFxuICAgICAgICAgICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcj8uW2FjdGl2aXR5LnByb3BlcnR5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zKys7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoYWN0aXZpdHkuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbXBsZXRpb25zID09PSAwKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBSZXR1cm4gZG90cyBjb2xvcmVkIGJ5IGRvbWluYW50IGNhdGVnb3J5XG4gICAgICAgICAgY29uc3QgZG90cyA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIGRvdHMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdCBhcyBrZXlvZiB0eXBlb2YgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc10gPz8gXCIjOTI4ZDg1XCIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogYG9sZW4tY2FsLWRvdC0ke2NhdH1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvdHMsXG4gICAgICAgICAgICBjbGFzc2VzOiBjb21wbGV0aW9ucyA+PSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQpLmxlbmd0aFxuICAgICAgICAgICAgICA/IFwib2xlbi1jYWwtY29tcGxldGVcIlxuICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRXZWVrbHlNZXRhZGF0YTogKCkgPT4gKHt9KSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIFF1aWNrIFRhc2sgRGlhbG9nIC0tLVxuXG4gIHByaXZhdGUgc2hvd1F1aWNrVGFza0RpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gXCJvbGVuLXF1aWNrLXRhc2stbW9kYWxcIjtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLWJhY2tkcm9wXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXNoZWV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stdGl0bGVcIj5BZGQgUXVpY2sgVGFzazwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stcm93XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stdGltZVwiIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1kdXJhdGlvblwiIHBsYWNlaG9sZGVyPVwiRHVyYXRpb24gKG1pbilcIiBtaW49XCI1XCIgbWF4PVwiNDgwXCIgdmFsdWU9XCIzMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stYWRkXCI+QWRkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYWRkQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYWRkXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLXRpbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBkdXJhdGlvbklucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gbW9kYWwucmVtb3ZlKCk7XG5cbiAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIGVudGVyIGEgdGFzayBuYW1lXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdyA9IHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgICA/IG5ldyBEYXRlKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBxdC0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRhdGU6IHRvZGF5LFxuICAgICAgICB0aW1lOiB0aW1lSW5wdXQudmFsdWUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VJbnQoZHVyYXRpb25JbnB1dC52YWx1ZSkgfHwgMzAsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICAgIG5ldyBOb3RpY2UoYFxcdTI2QTEgUXVpY2sgdGFzayBhZGRlZDogJHt0aXRsZX1gKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBGb2N1cyB0aGUgaW5wdXRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRpdGxlSW5wdXQuZm9jdXMoKSwgNTApO1xuICB9XG5cbiAgLy8gLS0tIFNldHRpbmdzIFBlcnNpc3RlbmNlIC0tLVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gLS0tIE1pZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGFzeW5jIG1pZ3JhdGVGcm9tVHJhY2tIYWJpdFJhbmsoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFQYXRoID0gXCIub2JzaWRpYW4vcGx1Z2lucy9teXRob2xvZ2ljYWwtaGFiaXQtdHJhY2tlci9kYXRhLmpzb25cIjtcbiAgICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIuZXhpc3RzKGRhdGFQYXRoKTtcblxuICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5taWdyYXRlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKGRhdGFQYXRoKTtcbiAgICAgIGNvbnN0IGRhdGE6IFRyYWNrSGFiaXRSYW5rRGF0YSA9IEpTT04ucGFyc2UocmF3KTtcblxuICAgICAgLy8gTWlncmF0ZSBib3NzIHN0YXRlXG4gICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyID0gZGF0YS5jdXJyZW50VGllciA/PyAxO1xuICAgICAgdGhpcy5zZXR0aW5ncy5ib3NzTWF4SFAgPSBkYXRhLmJvc3NNYXhIUCA/PyAzNTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IGRhdGEuYm9zc0N1cnJlbnRIUCA/PyAzNTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuY29uc2VjdXRpdmVQZXJmZWN0V2Vla3MgPSBkYXRhLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLmluVGFydGFydXMgPSBkYXRhLmluVGFydGFydXMgPz8gZmFsc2U7XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzUGVuYW5jZVRhc2tzID0gZGF0YS50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA/PyBbXTtcbiAgICAgIHRoaXMuc2V0dGluZ3MudGFydGFydXNTdGFydERhdGUgPSBkYXRhLnRhcnRhcnVzU3RhcnREYXRlID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLmZhaWxlZFRocmVzaG9sZERheXMgPSBkYXRhLmZhaWxlZFRocmVzaG9sZERheXMgPz8gMDtcblxuICAgICAgLy8gTWlncmF0ZSB0ZW1wbGUgdGFza3NcbiAgICAgIGlmIChkYXRhLnRlbXBsZVRhc2tzICYmIGRhdGEudGVtcGxlVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRlbXBsZVRhc2tzID0gZGF0YS50ZW1wbGVUYXNrcztcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSByZXdhcmRzXG4gICAgICB0aGlzLnNldHRpbmdzLnBlbmRpbmdSZXdhcmRzID0gZGF0YS5wZW5kaW5nUmV3YXJkcyA/PyBbXTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2xhaW1lZFJld2FyZHMgPSAoZGF0YS5jbGFpbWVkUmV3YXJkcyA/PyBbXSkgYXMgYW55O1xuICAgICAgdGhpcy5zZXR0aW5ncy5iYW5rZWRSZXdhcmRzID0gZGF0YS5iYW5rZWRSZXdhcmRzID8/IFtdO1xuXG4gICAgICAvLyBNaWdyYXRlIHN5c3RlbSBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9IChkYXRhLnN5c3RlbVN0YXRlIGFzIFwiYWN0aXZlXCIgfCBcInBhdXNlZFwiKSA/PyBcImFjdGl2ZVwiO1xuICAgICAgdGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IGRhdGEucGF1c2VTdGFydFRpbWUgPz8gbnVsbDtcbiAgICAgIHRoaXMuc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lID0gZGF0YS50b3RhbFBhdXNlZFRpbWUgPz8gMDtcbiAgICAgIHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA9IGRhdGEuc2ltdWxhdGVkRGF0ZSA/PyBudWxsO1xuXG4gICAgICAvLyBNaWdyYXRlIGhlcm8gYmFja2dyb3VuZFxuICAgICAgaWYgKGRhdGEuZGFzaGJvYXJkQmdJbWFnZSkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kID0gZGF0YS5kYXNoYm9hcmRCZ0ltYWdlO1xuICAgICAgfVxuXG4gICAgICAvLyBNaWdyYXRlIGFjdGl2aXRpZXMgZnJvbSBlbmFibGVkQWN0aXZpdGllcyArIGN1c3RvbUhhYml0c1xuICAgICAgdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzID0gdGhpcy5taWdyYXRlQWN0aXZpdGllcyhkYXRhKTtcblxuICAgICAgdGhpcy5zZXR0aW5ncy5taWdyYXRlZCA9IHRydWU7XG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgICBuZXcgTm90aWNlKFwiT2xlbjogU3VjY2Vzc2Z1bGx5IG1pZ3JhdGVkIGRhdGEgZnJvbSBNeXRob2xvZ2ljYWwgSGFiaXQgVHJhY2tlclwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJPbGVuIG1pZ3JhdGlvbiBlcnJvcjpcIiwgZXJyKTtcbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1pZ3JhdGVBY3Rpdml0aWVzKGRhdGE6IFRyYWNrSGFiaXRSYW5rRGF0YSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IHJlc3VsdDogQWN0aXZpdHlDb25maWdbXSA9IFsuLi5ERUZBVUxUX0FDVElWSVRJRVNdO1xuXG4gICAgLy8gQXBwbHkgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZVxuICAgIGlmIChkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBrZXkgPSBhY3Rpdml0eS5wcm9wZXJ0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoa2V5IGluIGRhdGEuZW5hYmxlZEFjdGl2aXRpZXMpIHtcbiAgICAgICAgICBhY3Rpdml0eS5lbmFibGVkID0gZGF0YS5lbmFibGVkQWN0aXZpdGllc1trZXldID8/IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBvdmVycmlkZXNcbiAgICBpZiAoZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgZm9yIChjb25zdCBvdmVycmlkZSBvZiBkYXRhLmFjdGl2aXR5T3ZlcnJpZGVzKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gcmVzdWx0LmZpbmQoKGEpID0+IGEuaWQgPT09IG92ZXJyaWRlLmlkKTtcbiAgICAgICAgaWYgKGFjdGl2aXR5KSB7XG4gICAgICAgICAgaWYgKG92ZXJyaWRlLndlZWtseVRhcmdldCAhPT0gdW5kZWZpbmVkKSBhY3Rpdml0eS53ZWVrbHlUYXJnZXQgPSBvdmVycmlkZS53ZWVrbHlUYXJnZXQ7XG4gICAgICAgICAgaWYgKG92ZXJyaWRlLmRhbWFnZVBlckNvbXBsZXRpb24gIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvbiA9IG92ZXJyaWRlLmRhbWFnZVBlckNvbXBsZXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgY3VzdG9tIGhhYml0c1xuICAgIGlmIChkYXRhLmN1c3RvbUhhYml0cykge1xuICAgICAgZm9yIChjb25zdCBoYWJpdCBvZiBkYXRhLmN1c3RvbUhhYml0cykge1xuICAgICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzXG4gICAgICAgIGlmIChyZXN1bHQuc29tZSgoYSkgPT4gYS5pZCA9PT0gaGFiaXQuaWQpKSBjb250aW51ZTtcblxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgaWQ6IGhhYml0LmlkLFxuICAgICAgICAgIG5hbWU6IGhhYml0Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGhhYml0LmVtb2ppID8/IFwiXFx1MkI1MFwiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLCAvLyBEZWZhdWx0IGN1c3RvbSBoYWJpdHMgdG8gc3Bpcml0XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBmb2xkZXI6IGhhYml0LmZvbGRlcixcbiAgICAgICAgICBwcm9wZXJ0eTogaGFiaXQucHJvcGVydHksXG4gICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogaGFiaXQuZGFtYWdlUGVyQ29tcGxldGlvbiA/PyAxLFxuICAgICAgICAgIHdlZWtseVRhcmdldDogaGFiaXQud2Vla2x5VGFyZ2V0ID8/IDMsXG4gICAgICAgICAgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgICAgICAgaGFzV29ya3NwYWNlOiBmYWxzZSxcbiAgICAgICAgICBwcmlvcml0eTogNSxcbiAgICAgICAgICBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgICAgICAgIHByZWZlcnJlZFRpbWU6IFwiYW55dGltZVwiLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmUtdGltZSBtaWdyYXRpb246IHJlbmFtZSBsZWdhY3kgc2Vzc2lvbiBmaWVsZHMgXHUyMTkyIHdvcmtzcGFjZSxcbiAgICogbWVyZ2Ugd29ya3NwYWNlRm9sZGVyIGludG8gZm9sZGVyLCBhbmQgbW92ZSB0ZW1wbGF0ZVJlZ2lzdHJ5IGVudHJpZXNcbiAgICogaW50byBwZXItYWN0aXZpdHkgd29ya3NwYWNlVGVtcGxhdGUuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIG1pZ3JhdGVTZXNzaW9uVG9Xb3Jrc3BhY2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgcmF3ID0gdGhpcy5zZXR0aW5ncyBhcyBhbnk7XG4gICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcblxuICAgIC8vIE1pZ3JhdGUgdG9wLWxldmVsIHNldHRpbmdzIGZpZWxkc1xuICAgIGlmIChyYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXMgJiYgIXJhdy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzKSB7XG4gICAgICByYXcud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcyA9IHJhdy5zZXNzaW9uQ29tcGxldGlvblN0YXRlcztcbiAgICAgIGRlbGV0ZSByYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXM7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHJhdy5hY3RpdmVTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgcmF3LmFjdGl2ZVdvcmtzcGFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByYXcuYWN0aXZlV29ya3NwYWNlID0gcmF3LmFjdGl2ZVNlc3Npb247XG4gICAgICBkZWxldGUgcmF3LmFjdGl2ZVNlc3Npb247XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBNaWdyYXRlIHBlci1hY3Rpdml0eSBmaWVsZHNcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcykge1xuICAgICAgY29uc3QgYSA9IGFjdGl2aXR5IGFzIGFueTtcbiAgICAgIGlmIChhLmhhc1Nlc3Npb24gIT09IHVuZGVmaW5lZCAmJiBhLmhhc1dvcmtzcGFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGEuaGFzV29ya3NwYWNlID0gYS5oYXNTZXNzaW9uO1xuICAgICAgICBkZWxldGUgYS5oYXNTZXNzaW9uO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIE1lcmdlIHNlc3Npb25Gb2xkZXIgLyB3b3Jrc3BhY2VGb2xkZXIgaW50byBmb2xkZXJcbiAgICAgIGlmIChhLnNlc3Npb25Gb2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIWEuZm9sZGVyKSBhLmZvbGRlciA9IGEuc2Vzc2lvbkZvbGRlcjtcbiAgICAgICAgZGVsZXRlIGEuc2Vzc2lvbkZvbGRlcjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoYS53b3Jrc3BhY2VGb2xkZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoIWEuZm9sZGVyKSBhLmZvbGRlciA9IGEud29ya3NwYWNlRm9sZGVyO1xuICAgICAgICBkZWxldGUgYS53b3Jrc3BhY2VGb2xkZXI7XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1pZ3JhdGUgYWN0aXZlV29ya3NwYWNlIGlubmVyIGZpZWxkc1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSkge1xuICAgICAgY29uc3QgYXcgPSB0aGlzLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSBhcyBhbnk7XG4gICAgICBpZiAoYXcuaGFzU2Vzc2lvbiAhPT0gdW5kZWZpbmVkICYmIGF3Lmhhc1dvcmtzcGFjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGF3Lmhhc1dvcmtzcGFjZSA9IGF3Lmhhc1Nlc3Npb247XG4gICAgICAgIGRlbGV0ZSBhdy5oYXNTZXNzaW9uO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIENsZWFuIHVwIGxlZ2FjeSBmb2xkZXIgZmllbGRzIGZyb20gYWN0aXZlV29ya3NwYWNlXG4gICAgICBkZWxldGUgYXcuc2Vzc2lvbkZvbGRlcjtcbiAgICAgIGRlbGV0ZSBhdy53b3Jrc3BhY2VGb2xkZXI7XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSB0ZW1wbGF0ZVJlZ2lzdHJ5IFx1MjE5MiBwZXItYWN0aXZpdHkgd29ya3NwYWNlVGVtcGxhdGVcbiAgICBpZiAocmF3LnRlbXBsYXRlUmVnaXN0cnkgJiYgQXJyYXkuaXNBcnJheShyYXcudGVtcGxhdGVSZWdpc3RyeSkgJiYgcmF3LnRlbXBsYXRlUmVnaXN0cnkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiByYXcudGVtcGxhdGVSZWdpc3RyeSkge1xuICAgICAgICBpZiAoIWVudHJ5LmVuYWJsZWQgfHwgIWVudHJ5LnRlbXBsYXRlUGF0aCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGE6IGFueSkgPT4gYS5pZCA9PT0gZW50cnkuYWN0aXZpdHlUeXBlKTtcbiAgICAgICAgaWYgKGFjdGl2aXR5ICYmICFhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSkge1xuICAgICAgICAgIGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlID0gZW50cnkudGVtcGxhdGVQYXRoO1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkZWxldGUgcmF3LnRlbXBsYXRlUmVnaXN0cnk7XG4gICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXRpbGl0eVxuZnVuY3Rpb24gc2xlZXAobXM6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IENvbnN0YW50cyAmIERlZmF1bHRzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUge1xuICBCb3NzRGVmaW5pdGlvbixcbiAgQWN0aXZpdHlDb25maWcsXG4gIE9sZW5TZXR0aW5ncyxcbiAgRGV2Q29uZmlnLFxuICBFbHlzaWFuVGhlbWUsXG4gIFdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZSxcbiAgQ2FsZW5kYXJTZXR0aW5ncyxcbiAgV29ya291dFNldHRpbmdzLFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vLyAtLS0gVmlldyBUeXBlIC0tLVxuXG5leHBvcnQgY29uc3QgVklFV19UWVBFX09MRU4gPSBcIm9sZW4tZGFzaGJvYXJkLXZpZXdcIjtcbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfV09SS1NQQUNFID0gXCJvbGVuLXdvcmtzcGFjZS12aWV3XCI7XG5cbi8vIC0tLSBCb3NzIERlZmluaXRpb25zICgxMyB0aWVycykgLS0tXG5cbmV4cG9ydCBjb25zdCBCT1NTRVM6IEJvc3NEZWZpbml0aW9uW10gPSBbXG4gIHsgdGllcjogMSwgbmFtZTogXCJTaGFkb3cgb2YgQXBhdGh5XCIsIHJhbms6IFwiRG9vbXNjcm9sbGVyXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB3ZWlnaHQgb2YgaW5lcnRpYSB0aGF0IGtlZXBzIHlvdSBzY3JvbGxpbmcgaW5zdGVhZCBvZiBzdGFydGluZ1wiLCBsb3JlOiBcIkJvcm4gZnJvbSBmb3Jnb3R0ZW4gcHJvbWlzZXMgYW5kIHVub3BlbmVkIGd5bSBiYWdzLCB0aGUgU2hhZG93IGZlZWRzIG9uIHBvdGVudGlhbCB1bnJlYWxpemVkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjFcIiB9LFxuICB7IHRpZXI6IDIsIG5hbWU6IFwiU2lyZW4ncyBDYWxsXCIsIHJhbms6IFwiQXJtY2hhaXIgR2VuZXJhbFwiLCBkZXNjcmlwdGlvbjogXCJEaXN0cmFjdGlvbidzIHN3ZWV0IHNvbmcgdGhhdCBwdWxscyBmb2N1cyBmcm9tIGNvbW1pdHRlZCB3b3JrXCIsIGxvcmU6IFwiU2hlIHNpbmdzIG9mIGVhc2llciBwYXRocywgb2YganVzdCBvbmUgbW9yZSB2aWRlbywgb2Ygc3RhcnRpbmcgdG9tb3Jyb3cgaW5zdGVhZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS4yXCIgfSxcbiAgeyB0aWVyOiAzLCBuYW1lOiBcIkh5ZHJhIG9mIEhhYml0c1wiLCByYW5rOiBcIkFwcHJlbnRpY2VcIiwgZGVzY3JpcHRpb246IFwiVGhlIGNvbXBsZXhpdHkgb2YgbWFuYWdpbmcgbXVsdGlwbGUgcm91dGluZXMgc2ltdWx0YW5lb3VzbHlcIiwgbG9yZTogXCJDdXQgb25lIGhlYWQgYW5kIHR3byBncm93IGJhY2suIEVhY2ggaGFiaXQgZGVtYW5kcyBpdHMgb3duIGF0dGVudGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS4zXCIgfSxcbiAgeyB0aWVyOiA0LCBuYW1lOiBcIk1pbm90YXVyJ3MgTWF6ZVwiLCByYW5rOiBcIkNpdGl6ZW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGNvbmZ1c2lvbiBhbmQgcm91dGluZSB0aGF0IHRyYXBzIGV2ZW4gZGVkaWNhdGVkIHByYWN0aXRpb25lcnNcIiwgbG9yZTogXCJMb3N0IGluIGNvcnJpZG9ycyBvZiBoYWJpdCwgdGhlIHBhdGggZm9yd2FyZCBpcyBuZXZlciBjbGVhci5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS43XCIgfSxcbiAgeyB0aWVyOiA1LCBuYW1lOiBcIk1lZHVzYSdzIEdhemVcIiwgcmFuazogXCJTY2hvbGFyXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBwYXJhbHlzaXMgdGhhdCBjb21lcyBmcm9tIG92ZXJ0aGlua2luZyBvciBmZWFyIG9mIGZhaWx1cmVcIiwgbG9yZTogXCJPbmUgZ2xhbmNlIGFuZCB5b3UgYXJlIGZyb3plbiwgdW5hYmxlIHRvIGFjdCwgdW5hYmxlIHRvIG1vdmUuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuOVwiIH0sXG4gIHsgdGllcjogNiwgbmFtZTogXCJOZW1lYW4gTGlvblwiLCByYW5rOiBcIlNhbXVyYWlcIiwgZGVzY3JpcHRpb246IFwiU2VlbWluZ2x5IGludnVsbmVyYWJsZSBvYnN0YWNsZXMgdGhhdCByZXF1aXJlIHBlcnNpc3RlbnQgZWZmb3J0XCIsIGxvcmU6IFwiSXRzIGhpZGUgY2Fubm90IGJlIHBpZXJjZWQgYnkgb3JkaW5hcnkgbWVhbnMuIE9ubHkgZGlzY2lwbGluZSBjdXRzIHRocm91Z2guXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuMVwiIH0sXG4gIHsgdGllcjogNywgbmFtZTogXCJDaGltZXJhXCIsIHJhbms6IFwiVGVtcGxhclwiLCBkZXNjcmlwdGlvbjogXCJNdWx0aS1oZWFkZWQgYmVhc3QgcmVxdWlyaW5nIGJhbGFuY2VkIGF0dGVudGlvbiBhY3Jvc3MgYWxsIGRvbWFpbnNcIiwgbG9yZTogXCJMaW9uLCBnb2F0LCBhbmQgc2VycGVudCBcdTIwMTQgZWFjaCBoZWFkIGRlbWFuZHMgbWFzdGVyeSBvZiBhIGRpZmZlcmVudCBhcnQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuM1wiIH0sXG4gIHsgdGllcjogOCwgbmFtZTogXCJDZXJiZXJ1c1wiLCByYW5rOiBcIlN0b2ljXCIsIGRlc2NyaXB0aW9uOiBcIkd1YXJkaWFuIG9mIHRyYW5zZm9ybWF0aW9uIHRlc3RpbmcgaWYgaGFiaXRzIGhhdmUgYmVjb21lIGlkZW50aXR5XCIsIGxvcmU6IFwiVGhyZWUgaGVhZHMsIHRocmVlIHRlc3RzLiBQYXN0IHRoZSBnYXRlIGxpZXMgdHJhbnNmb3JtYXRpb24uXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuNVwiIH0sXG4gIHsgdGllcjogOSwgbmFtZTogXCJTY3lsbGEgJiBDaGFyeWJkaXNcIiwgcmFuazogXCJPbHltcGlhblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgaW1wb3NzaWJsZSBjaG9pY2UgYmV0d2VlbiBjb21wZXRpbmcgcHJpb3JpdGllc1wiLCBsb3JlOiBcIkJldHdlZW4gdGhlIHJvY2sgYW5kIHRoZSB3aGlybHBvb2wsIGJvdGggbXVzdCBzb21laG93IGJlIGhvbm9yZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuN1wiIH0sXG4gIHsgdGllcjogMTAsIG5hbWU6IFwiVGhlIEZ1cmllc1wiLCByYW5rOiBcIlNhZ2VcIiwgZGVzY3JpcHRpb246IFwiSW50ZXJuYWwgdm9pY2VzIG9mIGd1aWx0IGFuZCBzaGFtZSBhdHRhY2tpbmcgZXZlbiB0aGUgc3VjY2Vzc2Z1bFwiLCBsb3JlOiBcIlRoZXkgd2hpc3BlciB5b3VyIGZhaWx1cmVzLCByZW1pbmQgeW91IG9mIGV2ZXJ5IHNraXAsIGV2ZXJ5IHdlYWtuZXNzLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAyLjlcIiB9LFxuICB7IHRpZXI6IDExLCBuYW1lOiBcIlR5cGhvblwiLCByYW5rOiBcIlRpdGFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBmb3JjZSBvZiBjaGFvcyB0aHJlYXRlbmluZyB0byB1bmRvIGFsbCBwcm9ncmVzc1wiLCBsb3JlOiBcIkZhdGhlciBvZiBhbGwgbW9uc3RlcnMsIGhlIHNlZWtzIHRvIHJldHVybiB5b3UgdG8gdGhlIGJlZ2lubmluZy5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy4xXCIgfSxcbiAgeyB0aWVyOiAxMiwgbmFtZTogXCJLcm9ub3NcIiwgcmFuazogXCJBcmNob25cIiwgZGVzY3JpcHRpb246IFwiVGltZSBpdHNlbGYgYXMgYW4gZW5lbXksIHRlc3Rpbmcgc3VzdGFpbmVkIGludGVuc2l0eVwiLCBsb3JlOiBcIlRoZSBUaXRhbiB3aG8gZGV2b3VycyBoaXMgY2hpbGRyZW4uIENhbiB5b3UgbWFpbnRhaW4gYXMgd2Vla3MgYmVjb21lIG1vbnRocz9cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy4zXCIgfSxcbiAgeyB0aWVyOiAxMywgbmFtZTogXCJDaGFvcyBQcmltb3JkaWFsXCIsIHJhbms6IFwiTWFzdGVyIG9mIEFsbFwiLCBkZXNjcmlwdGlvbjogXCJUaGUgdWx0aW1hdGUgdGVzdCBvZiB1bnNoYWtlYWJsZSBkaXNjaXBsaW5lXCIsIGxvcmU6IFwiQmVmb3JlIGNyZWF0aW9uLCBiZWZvcmUgb3JkZXIsIG9ubHkgQ2hhb3MuIFRvIG1hc3RlciBpdCBpcyB0byBtYXN0ZXIgeW91cnNlbGYuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDMuNlwiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUkFOS19USUVSX0NPTE9SUzogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgMTogXCIjNkI3MjgwXCIsIDI6IFwiI0VGNDQ0NFwiLCAzOiBcIiNGNTlFMEJcIiwgNDogXCIjMTBCOTgxXCIsXG4gIDU6IFwiIzNCODJGNlwiLCA2OiBcIiM4QjVDRjZcIiwgNzogXCIjRUM0ODk5XCIsIDg6IFwiI0Y5NzMxNlwiLFxuICA5OiBcIiMwNkI2RDRcIiwgMTA6IFwiI0E4NTVGN1wiLCAxMTogXCIjREMyNjI2XCIsIDEyOiBcIiM3QzNBRURcIixcbiAgMTM6IFwiI2M5YTIyN1wiLFxufTtcblxuLy8gLS0tIENoYXB0ZXIgUHJvZ3Jlc3Npb24gLS0tXG5cbmV4cG9ydCBjb25zdCBDSEFQVEVSX05BTUVTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIkluaXRpYXRlXCIsXG4gIDI6IFwiRXhwbG9yZXJcIixcbiAgMzogXCJKb3VybmV5bWFuXCIsXG4gIDQ6IFwiQWRlcHRcIixcbiAgNTogXCJQaGlsb3NvcGhlclwiLFxuICA2OiBcIk1hc3RlclwiLFxuICA3OiBcIlNhZ2VcIixcbiAgODogXCJPcmFjbGVcIixcbiAgOTogXCJUaXRhblwiLFxuICAxMDogXCJPbHltcGlhblwiLFxufTtcblxuLy8gLS0tIER5bmFtaWMgVGl0bGUgVGFibGVzIC0tLVxuXG5leHBvcnQgY29uc3QgU0lOR0xFX0RPTUlOQU5UX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIGJvZHk6ICAgeyBsaWdodDogXCJBdGhsZXRlXCIsICAgbWlkOiBcIldhcnJpb3JcIiwgIGhlYXZ5OiBcIlRpdGFuXCIgfSxcbiAgbWluZDogICB7IGxpZ2h0OiBcIlN0dWRlbnRcIiwgICBtaWQ6IFwiU2Nob2xhclwiLCAgaGVhdnk6IFwiUG9seW1hdGhcIiB9LFxuICBzcGlyaXQ6IHsgbGlnaHQ6IFwiU2Vla2VyXCIsICAgIG1pZDogXCJTYWdlXCIsICAgICBoZWF2eTogXCJPcmFjbGVcIiB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFRXT19DQVRFR09SWV9USVRMRVM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBcImJvZHkrbWluZFwiOiAgICB7IGxpZ2h0OiBcIkRpc2NpcGxpbmVkIFRoaW5rZXJcIiwgbWlkOiBcIlBoaWxvc29waGVyLUtpbmdcIiwgaGVhdnk6IFwiUmVuYWlzc2FuY2UgVGl0YW5cIiB9LFxuICBcImJvZHkrc3Bpcml0XCI6ICB7IGxpZ2h0OiBcIkFzY2V0aWNcIiwgICAgICAgICAgICAgbWlkOiBcIlRlbXBsYXJcIiwgICAgICAgICAgaGVhdnk6IFwiT2x5bXBpYW4gTW9ua1wiIH0sXG4gIFwibWluZCtzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQ29udGVtcGxhdGl2ZVwiLCAgICAgICBtaWQ6IFwiTXlzdGljIFNjaG9sYXJcIiwgICBoZWF2eTogXCJFbmxpZ2h0ZW5lZCBPbmVcIiB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJBTEFOQ0VEX1RJVExFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbGlnaHQ6IFwiSW5pdGlhdGUgb2YgQmFsYW5jZVwiLFxuICBtaWQ6IFwiUmVuYWlzc2FuY2UgU291bFwiLFxuICBoZWF2eTogXCJFdWRhaW1vblwiLFxufTtcblxuLy8gLS0tIERlZmF1bHQgQWN0aXZpdGllcyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUNUSVZJVElFUzogQWN0aXZpdHlDb25maWdbXSA9IFtcbiAge1xuICAgIGlkOiBcIndvcmtvdXRcIiwgbmFtZTogXCJXb3Jrb3V0XCIsIGVtb2ppOiBcIlxcdXsxRjRBQX1cIiwgY2F0ZWdvcnk6IFwiYm9keVwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAxIFdvcmtvdXRcIiwgcHJvcGVydHk6IFwiV29ya291dFwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNywgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCB3b3Jrc3BhY2VUZW1wbGF0ZTogXCJ3b3Jrb3V0XCIsXG4gICAgcHJpb3JpdHk6IDgsIG5lZ2xlY3RUaHJlc2hvbGQ6IDIsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA2MCxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNhcmRpb1wiLCBuYW1lOiBcIkNhcmRpb1wiLCBlbW9qaTogXCJcXHV7MUYzQzN9XCIsIGNhdGVnb3J5OiBcImJvZHlcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMiBDYXJkaW9cIiwgcHJvcGVydHk6IFwiQ2FyZGlvXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA0LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA3LCBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgIHByZWZlcnJlZFRpbWU6IFwibW9ybmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgYWx0ZXJuYXRlc1dpdGg6IFwid29ya291dFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVhZGluZ1wiLCBuYW1lOiBcIlJlYWRpbmdcIiwgZW1vamk6IFwiXFx1ezFGNEQ2fVwiLCBjYXRlZ29yeTogXCJtaW5kXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDMgUmVhZGluZ1wiLCBwcm9wZXJ0eTogXCJSZWFkaW5nXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA2LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA2LCBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcnVtbWluZ1wiLCBuYW1lOiBcIkRydW1taW5nXCIsIGVtb2ppOiBcIlxcdXsxRjk0MX1cIiwgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDQgRHJ1bW1pbmdcIiwgcHJvcGVydHk6IFwiRHJ1bW1pbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDYsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJhZnRlcm5vb25cIiwgZXN0aW1hdGVkRHVyYXRpb246IDQ1LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaGVhbHRoLXN0dWR5XCIsIG5hbWU6IFwiSGVhbHRoIFN0dWR5XCIsIGVtb2ppOiBcIlxcdXsxRjlFQ31cIiwgY2F0ZWdvcnk6IFwibWluZFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA1IEhlYWx0aCBTdHVkeVwiLCBwcm9wZXJ0eTogXCJIZWFsdGggU3R1ZHlcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDMsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDQsIG5lZ2xlY3RUaHJlc2hvbGQ6IDQsXG4gICAgcHJlZmVycmVkVGltZTogXCJhZnRlcm5vb25cIiwgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29jaWFsXCIsIG5hbWU6IFwiU29jaWFsXCIsIGVtb2ppOiBcIlxcdXsxRjkxRH1cIiwgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDYgU29jaWFsXCIsIHByb3BlcnR5OiBcIlNvY2lhbFwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNSwgbmVnbGVjdFRocmVzaG9sZDogNSxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImV2ZW5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZHJhd2luZ1wiLCBuYW1lOiBcIkRyYXdpbmdcIiwgZW1vamk6IFwiXFx1ezFGM0E4fVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNyBEcmF3aW5nXCIsIHByb3BlcnR5OiBcIkRyYXdpbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDQsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJhZnRlcm5vb25cIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuXTtcblxuLy8gLS0tIERpcmVjdGl2ZSBMb3JlIFRlbXBsYXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IE5FR0xFQ1RfTE9SRTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgd29ya291dDogXCJZb3VyIG11c2NsZXMgZm9yZ2V0IHdoYXQgdGhleSBvbmNlIGtuZXcuIFRoZSBib2R5IGNyYXZlcyBkaXNjaXBsaW5lIFx1MjAxNCBhbnN3ZXIgaXQuXCIsXG4gIGNhcmRpbzogXCJUaGUgaGVhcnQgZ3Jvd3Mgc2x1Z2dpc2ggd2l0aG91dCB0aGUgcG91bmRpbmcgcmh5dGhtIG9mIGVmZm9ydC5cIixcbiAgcmVhZGluZzogXCJUaGUgbWluZCBzdGFydmVzIG9uIGRpc3RyYWN0aW9uLiBGZWVkIGl0IHdpdGggcGFnZXMsIG5vdCBwaXhlbHMuXCIsXG4gIGRydW1taW5nOiBcIlNpbGVuY2UgaXMgbm90IHJlc3QgXHUyMDE0IGl0IGlzIHRoZSBkZWF0aCBvZiByaHl0aG0uIFBpY2sgdXAgdGhlIHN0aWNrcy5cIixcbiAgXCJoZWFsdGgtc3R1ZHlcIjogXCJLbm93bGVkZ2Ugb2YgdGhlIGJvZHkgaXMgcG93ZXIgb3ZlciBpdC4gTmVnbGVjdCBpbnZpdGVzIGlnbm9yYW5jZS5cIixcbiAgc29jaWFsOiBcIkV2ZW4gd2FycmlvcnMgbmVlZCBmZWxsb3dzaGlwLiBJc29sYXRpb24gYnJlZWRzIHN0YWduYXRpb24uXCIsXG4gIGRyYXdpbmc6IFwiVGhlIGJlYXN0IHdpdGhpbiB5b3UgZ3Jvd3Mgd2VhayB3aXRob3V0IHRoZSBkaXNjaXBsaW5lIG9mIGxpbmUgYW5kIGZvcm0uXCIsXG59O1xuXG4vLyAtLS0gRmFsbGJhY2sgUXVvdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgRkFMTEJBQ0tfUVVPVEVTOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgYXR0cmlidXRpb246IHN0cmluZyB9PiA9IFtcbiAgeyB0ZXh0OiBcIllvdSBoYXZlIHBvd2VyIG92ZXIgeW91ciBtaW5kIFx1MjAxNCBub3Qgb3V0c2lkZSBldmVudHMuIFJlYWxpemUgdGhpcywgYW5kIHlvdSB3aWxsIGZpbmQgc3RyZW5ndGguXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJXZSBzdWZmZXIgbW9yZSBvZnRlbiBpbiBpbWFnaW5hdGlvbiB0aGFuIGluIHJlYWxpdHkuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJUaGUgaW1wZWRpbWVudCB0byBhY3Rpb24gYWR2YW5jZXMgYWN0aW9uLiBXaGF0IHN0YW5kcyBpbiB0aGUgd2F5IGJlY29tZXMgdGhlIHdheS5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIk5vIG1hbiBpcyBmcmVlIHdobyBpcyBub3QgbWFzdGVyIG9mIGhpbXNlbGYuXCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJXYXN0ZSBubyBtb3JlIHRpbWUgYXJndWluZyBhYm91dCB3aGF0IGEgZ29vZCBtYW4gc2hvdWxkIGJlLiBCZSBvbmUuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJJdCBpcyBub3QgdGhhdCB3ZSBoYXZlIGEgc2hvcnQgdGltZSB0byBsaXZlLCBidXQgdGhhdCB3ZSB3YXN0ZSBhIGdvb2QgZGVhbCBvZiBpdC5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkZpcnN0IHNheSB0byB5b3Vyc2VsZiB3aGF0IHlvdSB3b3VsZCBiZTsgYW5kIHRoZW4gZG8gd2hhdCB5b3UgaGF2ZSB0byBkby5cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBoYXBwaW5lc3Mgb2YgeW91ciBsaWZlIGRlcGVuZHMgdXBvbiB0aGUgcXVhbGl0eSBvZiB5b3VyIHRob3VnaHRzLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiSGUgd2hvIGZlYXJzIGRlYXRoIHdpbGwgbmV2ZXIgZG8gYW55dGhpbmcgd29ydGggb2YgYSBtYW4gd2hvIGlzIGFsaXZlLlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiRGlmZmljdWx0aWVzIHN0cmVuZ3RoZW4gdGhlIG1pbmQsIGFzIGxhYm9yIGRvZXMgdGhlIGJvZHkuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJIb3cgbG9uZyBhcmUgeW91IGdvaW5nIHRvIHdhaXQgYmVmb3JlIHlvdSBkZW1hbmQgdGhlIGJlc3QgZm9yIHlvdXJzZWxmP1wiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiVGhlIHNvdWwgYmVjb21lcyBkeWVkIHdpdGggdGhlIGNvbG91ciBvZiBpdHMgdGhvdWdodHMuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG5dO1xuXG4vLyAtLS0gUm9tYW4gTnVtZXJhbHMgSGVscGVyIC0tLVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Sb21hbihudW06IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHMgPSBbMTAwMCwgOTAwLCA1MDAsIDQwMCwgMTAwLCA5MCwgNTAsIDQwLCAxMCwgOSwgNSwgNCwgMV07XG4gIGNvbnN0IHN5bXMgPSBbXCJNXCIsIFwiQ01cIiwgXCJEXCIsIFwiQ0RcIiwgXCJDXCIsIFwiWENcIiwgXCJMXCIsIFwiWExcIiwgXCJYXCIsIFwiSVhcIiwgXCJWXCIsIFwiSVZcIiwgXCJJXCJdO1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgd2hpbGUgKG51bSA+PSB2YWxzW2ldKSB7XG4gICAgICByZXN1bHQgKz0gc3ltc1tpXTtcbiAgICAgIG51bSAtPSB2YWxzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0gRGVmYXVsdCBXb3Jrc3BhY2UgQ29tcGxldGlvbiBTdGF0ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1dPUktTUEFDRV9TVEFURVM6IFdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZVtdID0gW1xuICB7IGlkOiBcImRpc2NpcGxpbmVcIiwgbmFtZTogXCJEaXNjaXBsaW5lXCIsIGljb246IFwiXFx1MjVDNlwiLCBjb2xvcjogXCIjOTI4ZDg1XCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAxLjAgfSxcbiAgeyBpZDogXCJmbG93XCIsIG5hbWU6IFwiRmxvd1wiLCBpY29uOiBcIlxcdTIyNDhcIiwgY29sb3I6IFwiI2M5YTg0Y1wiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMS41IH0sXG4gIHsgaWQ6IFwic2tpcHBlZFwiLCBuYW1lOiBcIlNraXBwZWRcIiwgaWNvbjogXCJcXHUyNUNCXCIsIGNvbG9yOiBcIiM4YjJkMzVcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDAgfSxcbl07XG5cbi8vIC0tLSBEZWZhdWx0IFdvcmtvdXQgU2V0dGluZ3MgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1dPUktPVVRfU0VUVElOR1M6IFdvcmtvdXRTZXR0aW5ncyA9IHtcbiAgc3RhdHNGaWxlOiBcIlBlcnNvbmFsIExpZmUvUGVyc29uYWwgU3RhdHMubWRcIixcbiAgZXhlcmNpc2VEYkZvbGRlcjogXCJIb21lL0FjdGl2aXRpZXMvRXhlcmNpc2VzIGRhdGFiYXNlXCIsXG4gIG11c2NsZUdyb3Vwczoge1xuICAgIFwiTmVja1wiOiAgICAgIHsgc3ViZ3JvdXBzOiBudWxsLCBpY29uOiBcIlxcdUQ4M0VcXHVEREI0XCIgfSxcbiAgICBcIkJhY2tcIjogICAgICB7IHN1Ymdyb3VwczogW1wiTGF0c1wiLCBcIlRyYXBzXCIsIFwiUmhvbWJvaWRzXCIsIFwiTG93ZXIgQmFja1wiLCBcIlJlYXIgRGVsdHNcIl0sIGljb246IFwiXFx1RDgzRFxcdUREMTlcIiB9LFxuICAgIFwiQ2hlc3RcIjogICAgIHsgc3ViZ3JvdXBzOiBudWxsLCBpY29uOiBcIlxcdUQ4M0RcXHVEQ0FBXCIgfSxcbiAgICBcIlNob3VsZGVyc1wiOiB7IHN1Ymdyb3VwczogW1wiRnJvbnQgRGVsdHNcIiwgXCJTaWRlIERlbHRzXCIsIFwiUmVhciBEZWx0c1wiXSwgaWNvbjogXCJcXHVEODNDXFx1REZBRlwiIH0sXG4gICAgXCJDb3JlXCI6ICAgICAgeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzQ1xcdURGQUZcIiB9LFxuICAgIFwiTGVnc1wiOiAgICAgIHsgc3ViZ3JvdXBzOiBbXCJRdWFkc1wiLCBcIkhhbXN0cmluZ3NcIiwgXCJHbHV0ZXNcIiwgXCJDYWx2ZXNcIiwgXCJBZGR1Y3RvcnNcIl0sIGljb246IFwiXFx1RDgzRVxcdUREQjVcIiB9LFxuICAgIFwiQXJtc1wiOiAgICAgIHsgc3ViZ3JvdXBzOiBbXCJCaWNlcHNcIiwgXCJUcmljZXBzXCIsIFwiRm9yZWFybXNcIl0sIGljb246IFwiXFx1RDgzRFxcdURDQUFcIiB9LFxuICB9LFxufTtcblxuLy8gLS0tIERlZmF1bHQgRGV2IENvbmZpZyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfREVWX0NPTkZJRzogRGV2Q29uZmlnID0ge1xuICBsYWJlbHM6IHtcbiAgICBncmVldGluZ19tb3JuaW5nOiBcIkdvb2QgbW9ybmluZ1wiLFxuICAgIGdyZWV0aW5nX2FmdGVybm9vbjogXCJHb29kIGFmdGVybm9vblwiLFxuICAgIGdyZWV0aW5nX2V2ZW5pbmc6IFwiR29vZCBldmVuaW5nXCIsXG4gICAgZ3JlZXRpbmdfbmlnaHQ6IFwiR29vZCBuaWdodFwiLFxuICAgIGRpcmVjdGl2ZV90aXRsZTogXCJUSEUgRElSRUNUSVZFXCIsXG4gICAgYm9zc19zdGF0dXNfdGl0bGU6IFwiQk9TUyBTVEFUVVNcIixcbiAgICB3ZWVrbHlfcmh5dGhtX3RpdGxlOiBcIldFRUtMWSBSSFlUSE1cIixcbiAgICBhY3Rpdml0eV9ncmlkX3RpdGxlOiBcIkFDVElWSVRJRVNcIixcbiAgICB0ZW1wbGVfdGl0bGU6IFwiVEhFIFRFTVBMRVwiLFxuICAgIGV1ZGFpbW9uaWFfdGl0bGU6IFwiRXVkYWltb25pYSBJbmRleFwiLFxuICAgIGRheW1hcF90aXRsZTogXCJZT1VSIERBWVwiLFxuICAgIGJlZ2luX3dvcmtzcGFjZTogXCJFTlRFUiBXT1JLU1BBQ0VcIixcbiAgICBub3Rfbm93OiBcIk5PVCBOT1dcIixcbiAgfSxcbiAgeHBQZXJDb21wbGV0aW9uOiAxMCxcbiAgc3RyZWFrQm9udXNNdWx0aXBsaWVyOiAxLjUsXG4gIGJ1ZmZlck1pbnV0ZXM6IDE1LFxuICBtb3JuaW5nU3RhcnQ6IDYsXG4gIG1vcm5pbmdFbmQ6IDEyLFxuICBhZnRlcm5vb25FbmQ6IDE4LFxuICBldmVuaW5nRW5kOiAyMyxcbiAgdGhlbWVPdmVycmlkZXM6IHt9LFxuICBhbmltYXRpb25TdGFnZ2VyTXM6IDgwLFxuICBoZXJvSGVpZ2h0OiAzNTAsXG4gIHNlY3Rpb25PcmRlcjogW1xuICAgIFwiaGVyb1wiLCBcImV1ZGFpbW9uaWFcIiwgXCJkYXltYXBcIiwgXCJkaXJlY3RpdmVcIiwgXCJib3NzXCIsXG4gICAgXCJ3ZWVrbHlcIiwgXCJhY3Rpdml0aWVzXCIsIFwidGVtcGxlXCIsIFwicXVvdGVcIixcbiAgXSxcbiAgaGlkZGVuU2VjdGlvbnM6IFtdLFxuICBhY3Rpdml0eUdyaWRDb2x1bW5zOiAyLFxufTtcblxuLy8gLS0tIERlZmF1bHQgQ2FsZW5kYXIgU2V0dGluZ3MgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTOiBDYWxlbmRhclNldHRpbmdzID0ge1xuICBlbmFibGVEYWlseU5vdGVzOiB0cnVlLFxuICBkYWlseU5vdGVzRm9sZGVyOiBcIlwiLFxuICBkYWlseU5vdGVzRm9ybWF0OiBcIllZWVktTU0tRERcIixcbiAgZW5hYmxlVGFza3NQbHVnaW46IGZhbHNlLFxuICBlbmFibGVRdWlja1Rhc2tzOiB0cnVlLFxuICBxdWlja1Rhc2tzOiBbXSxcbn07XG5cbi8vIC0tLSBEZWZhdWx0IE9sZW4gU2V0dGluZ3MgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX09MRU5fU0VUVElOR1M6IE9sZW5TZXR0aW5ncyA9IHtcbiAgLy8gUHJvZmlsZVxuICB1c2VyTmFtZTogXCJXYXJyaW9yXCIsXG4gIG15V2h5OiBcIlwiLFxuICBoZXJvQmFja2dyb3VuZDogXCJcIixcblxuICAvLyBBY3Rpdml0aWVzXG4gIGFjdGl2aXRpZXM6IERFRkFVTFRfQUNUSVZJVElFUyxcblxuICAvLyBDYXRlZ29yaWVzXG4gIGNhdGVnb3J5Q29sb3JzOiB7XG4gICAgYm9keTogXCIjYzlhODRjXCIsXG4gICAgbWluZDogXCIjNmI4Y2NlXCIsXG4gICAgc3Bpcml0OiBcIiM4YjdlYzhcIixcbiAgfSxcbiAgdGl0bGVPdmVycmlkZTogXCJcIixcblxuICAvLyBFdWRhaW1vbmlhXG4gIGNhdGVnb3J5WFA6IHtcbiAgICBib2R5OiAwLFxuICAgIG1pbmQ6IDAsXG4gICAgc3Bpcml0OiAwLFxuICB9LFxuXG4gIC8vIEJvc3NcbiAgY3VycmVudFRpZXI6IDEsXG4gIGJvc3NNYXhIUDogMzUsXG4gIGJvc3NDdXJyZW50SFA6IDM1LFxuICBpblRhcnRhcnVzOiBmYWxzZSxcbiAgdGFydGFydXNQZW5hbmNlVGFza3M6IFtdLFxuICB0YXJ0YXJ1c1N0YXJ0RGF0ZTogbnVsbCxcbiAgZmFpbGVkVGhyZXNob2xkRGF5czogMCxcbiAgY29uc2VjdXRpdmVQZXJmZWN0V2Vla3M6IDAsXG5cbiAgLy8gVGVtcGxlXG4gIHRlbXBsZVRhc2tzOiBbXG4gICAgeyBpZDogXCJiYXRoaW5nXCIsIG5hbWU6IFwiQmF0aGluZ1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDEsIGVtb2ppOiBcIlxcdXsxRjZCRn1cIiB9LFxuICAgIHsgaWQ6IFwiZmFjaWFsLWhhaXJcIiwgbmFtZTogXCJGYWNpYWwgaGFpclwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIsIGVtb2ppOiBcIlxcdXsxRkE5Mn1cIiB9LFxuICAgIHsgaWQ6IFwibmFpbHNcIiwgbmFtZTogXCJOYWlsc1wiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDcsIGVtb2ppOiBcIlxcdTI3MDJcXHVGRTBGXCIgfSxcbiAgICB7IGlkOiBcImhhaXJjdXRcIiwgbmFtZTogXCJIYWlyY3V0XCIsIGxhc3RDb21wbGV0ZWQ6IG51bGwsIGludGVydmFsRGF5czogMjEsIGVtb2ppOiBcIlxcdXsxRjQ4OH1cIiB9LFxuICBdLFxuXG4gIC8vIFJld2FyZHNcbiAgcGVuZGluZ1Jld2FyZHM6IFtdLFxuICBjbGFpbWVkUmV3YXJkczogW10sXG4gIGJhbmtlZFJld2FyZHM6IFtdLFxuXG4gIC8vIFN5c3RlbVxuICBzeXN0ZW1TdGF0ZTogXCJhY3RpdmVcIixcbiAgcGF1c2VTdGFydFRpbWU6IG51bGwsXG4gIHRvdGFsUGF1c2VkVGltZTogMCxcbiAgbWlncmF0ZWQ6IGZhbHNlLFxuICBzaW11bGF0ZWREYXRlOiBudWxsLFxuXG4gIC8vIFRoZW1lXG4gIHRoZW1lT3ZlcnJpZGVzOiB7fSxcblxuICAvLyBEZXZcbiAgZGV2Q29uZmlnOiBERUZBVUxUX0RFVl9DT05GSUcsXG5cbiAgLy8gV29ya3NwYWNlXG4gIHdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXM6IERFRkFVTFRfV09SS1NQQUNFX1NUQVRFUyxcbiAgYWN0aXZlV29ya3NwYWNlOiBudWxsLFxuXG4gIC8vIENhbGVuZGFyXG4gIGNhbGVuZGFyOiBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuXG4gIC8vIFdvcmtvdXRcbiAgd29ya291dFNldHRpbmdzOiBERUZBVUxUX1dPUktPVVRfU0VUVElOR1MsXG5cbiAgLy8gUXVvdGVcbiAgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLFxuICBsYXN0UXVvdGVJbmRleDogLTEsXG4gIHJlY2VudFF1b3RlSWRzOiBbXSxcbn07XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXNoYm9hcmQgVmlld1xuLy8gTWFpbiBzY3JvbGxhYmxlIEl0ZW1WaWV3IHJlbmRlcmluZyBhbGwgZGFzaGJvYXJkIHNlY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQ29tcGxldGlvbk1hcCwgQ29tcGxldGlvbiwgQ2FsZW5kYXJUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBDYWxlbmRhckVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0NhbGVuZGFyRW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJIZXJvQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9DYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJFdWRhaW1vbmlhQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXVkYWltb25pYUJhclwiO1xuaW1wb3J0IHsgcmVuZGVyRGlyZWN0aXZlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RpcmVjdGl2ZUNhcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvc3NTdGF0dXNDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9zc1N0YXR1c0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtseVJoeXRobSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlZWtseVJoeXRobVwiO1xuaW1wb3J0IHsgcmVuZGVyQWN0aXZpdHlHcmlkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aXZpdHlHcmlkXCI7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGVDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RlbXBsZUNoaXBzXCI7XG5pbXBvcnQgeyByZW5kZXJRdW90ZUZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlRm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXlUaW1lbGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RheVRpbWVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG4gIHByaXZhdGUgaW50ZXJ2YWxzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVklFV19UWVBFX09MRU47XG4gIH1cblxuICBnZXREaXNwbGF5VGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIk9sZW5cIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJjb21wYXNzXCI7XG4gIH1cblxuICBhc3luYyBvbk9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pbnRlcnZhbHMgPSBbXTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgY2xlYW51cCgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuaW50ZXJ2YWxzKSB7XG4gICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnZhbHMgPSBbXTtcbiAgfVxuXG4gIGFzeW5jIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG4gICAgY29uc3Qgcm9vdCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kYXNoYm9hcmRcIiB9KTtcblxuICAgIC8vIEFwcGx5IHRoZW1lIG92ZXJyaWRlc1xuICAgIHRoaXMuYXBwbHlUaGVtZU92ZXJyaWRlcyhyb290KTtcblxuICAgIC8vIEdhdGhlciBjb21wbGV0aW9uIGRhdGEgZnJvbSB2YXVsdFxuICAgIGNvbnN0IGNvbXBsZXRpb25EYXRhID0gdGhpcy5nYXRoZXJDb21wbGV0aW9uRGF0YSgpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBlbmdpbmVzXG4gICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBlbmdpbmUgPSBuZXcgT2xlbkVuZ2luZShzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIG5vdyk7XG5cbiAgICAvLyBDYWxlbmRhciBpbnRlZ3JhdGlvbiBcdTIwMTQgZ2F0aGVyIGNhbGVuZGFyIHRhc2tzIGFuZCBmZWVkIGludG8gZW5naW5lXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUodGhpcy5hcHAsIHNldHRpbmdzLCBub3cpO1xuICAgIGNvbnN0IGNhbGVuZGFyVGFza3MgPSBhd2FpdCB0aGlzLmdhdGhlckNhbGVuZGFyVGFza3MoY2FsZW5kYXJFbmdpbmUpO1xuICAgIGNvbnN0IGNhbGVuZGFyRW50cmllcyA9IGNhbGVuZGFyRW5naW5lLnRvRGF5TWFwRW50cmllcyhjYWxlbmRhclRhc2tzKTtcbiAgICBlbmdpbmUuc2V0Q2FsZW5kYXJFbnRyaWVzKGNhbGVuZGFyRW50cmllcyk7XG5cbiAgICAvLyBCdWlsZCBzZWN0aW9uIG9yZGVyIGZyb20gZGV2Q29uZmlnXG4gICAgY29uc3Qgc2VjdGlvbk9yZGVyID0gc2V0dGluZ3MuZGV2Q29uZmlnLnNlY3Rpb25PcmRlcjtcbiAgICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KHNldHRpbmdzLmRldkNvbmZpZy5oaWRkZW5TZWN0aW9ucyk7XG5cbiAgICBsZXQgc3RhZ2dlcklkeCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbk9yZGVyKSB7XG4gICAgICBpZiAoaGlkZGVuLmhhcyhzZWN0aW9uKSkgY29udGludWU7XG5cbiAgICAgIHN3aXRjaCAoc2VjdGlvbikge1xuICAgICAgICBjYXNlIFwiaGVyb1wiOlxuICAgICAgICAgIHJlbmRlckhlcm9DYXJkKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImV1ZGFpbW9uaWFcIjpcbiAgICAgICAgICByZW5kZXJFdWRhaW1vbmlhQmFyKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgpO1xuICAgICAgICAgIHN0YWdnZXJJZHggKz0gMzsgLy8gZXVkYWltb25pYSBjYXJkICsgc3RhdCBjYXJkcyArIGNhdGVnb3JpZXMgY2FyZFxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJkYXltYXBcIjpcbiAgICAgICAgICByZW5kZXJEYXlUaW1lbGluZShyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyssIHtcbiAgICAgICAgICAgIG9uQWNjZXB0OiAoYWN0aXZpdHlJZCkgPT4gdGhpcy5oYW5kbGVFbnRlcldvcmtzcGFjZShhY3Rpdml0eUlkKSxcbiAgICAgICAgICAgIG9uU2tpcDogKGFjdGl2aXR5SWQpID0+IHRoaXMuaGFuZGxlU2tpcEFjdGl2aXR5KGFjdGl2aXR5SWQsIGVuZ2luZSksXG4gICAgICAgICAgICBvbkNhbGVuZGFyRG9uZTogKGVudHJ5KSA9PiB0aGlzLmhhbmRsZUNhbGVuZGFyVGFza0RvbmUoZW50cnkpLFxuICAgICAgICAgICAgb25DYWxlbmRhclBvc3Rwb25lOiAoZW50cnkpID0+IHRoaXMuaGFuZGxlQ2FsZW5kYXJUYXNrUG9zdHBvbmUoZW50cnkpLFxuICAgICAgICAgICAgb25DcmVhdGVFdmVudDogKCkgPT4gKHRoaXMucGx1Z2luIGFzIGFueSkuc2hvd1F1aWNrVGFza0RpYWxvZygpLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJkaXJlY3RpdmVcIjpcbiAgICAgICAgICByZW5kZXJEaXJlY3RpdmVDYXJkKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKywgKGFjdGl2aXR5SWQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRW50ZXJXb3Jrc3BhY2UoYWN0aXZpdHlJZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImJvc3NcIjpcbiAgICAgICAgICByZW5kZXJCb3NzU3RhdHVzQ2FyZChyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwid2Vla2x5XCI6XG4gICAgICAgICAgcmVuZGVyV2Vla2x5Umh5dGhtKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImFjdGl2aXRpZXNcIjpcbiAgICAgICAgICByZW5kZXJBY3Rpdml0eUdyaWQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGVtcGxlXCI6XG4gICAgICAgICAgcmVuZGVyVGVtcGxlQ2hpcHMocm9vdCwgc2V0dGluZ3MsIHN0YWdnZXJJZHgrKywgKHRhc2tJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUZW1wbGVVcGRhdGUodGFza0lkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICByZW5kZXJRdW90ZUZvb3Rlcihyb290LCB0aGlzLmFwcCwgc2V0dGluZ3MsIHN0YWdnZXJJZHgrKywgKHBhcnRpYWwpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wbHVnaW4uc2V0dGluZ3MsIHBhcnRpYWwpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIERhdGEgR2F0aGVyaW5nIC0tLVxuXG4gIGdhdGhlckNvbXBsZXRpb25EYXRhKCk6IENvbXBsZXRpb25NYXAge1xuICAgIGNvbnN0IGRhdGE6IENvbXBsZXRpb25NYXAgPSB7fTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcykge1xuICAgICAgaWYgKCFhY3Rpdml0eS5lbmFibGVkKSBjb250aW51ZTtcbiAgICAgIGRhdGFbYWN0aXZpdHkuaWRdID0gdGhpcy5nZXRDb21wbGV0aW9uc0Zyb21Gb2xkZXIoYWN0aXZpdHkuZm9sZGVyLCBhY3Rpdml0eS5wcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBsZXRpb25zRnJvbUZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nKTogQ29tcGxldGlvbltdIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiO1xuXG4gICAgcmV0dXJuIGZpbGVzXG4gICAgICAuZmlsdGVyKChmaWxlKSA9PiBmaWxlLnBhdGggPT09IGZvbGRlclBhdGggfHwgZmlsZS5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpXG4gICAgICAubWFwKChmaWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgIGNvbnN0IGZyb250bWF0dGVyID0gY2FjaGU/LmZyb250bWF0dGVyO1xuICAgICAgICBpZiAoIWZyb250bWF0dGVyIHx8IHR5cGVvZiBmcm9udG1hdHRlcltmaWVsZE5hbWVdICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0ZTogZmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZyb250bWF0dGVyW2ZpZWxkTmFtZV0gPT09IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYyk6IGMgaXMgQ29tcGxldGlvbiA9PiBjICE9PSBudWxsKTtcbiAgfVxuXG4gIC8vIC0tLSBDYWxlbmRhciBHYXRoZXJpbmcgLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBnYXRoZXJDYWxlbmRhclRhc2tzKGNhbGVuZGFyRW5naW5lOiBDYWxlbmRhckVuZ2luZSk6IFByb21pc2U8Q2FsZW5kYXJUYXNrW10+IHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmdzO1xuXG4gICAgLy8gT3B0aW9uIEE6IERhaWx5IE5vdGVzIFx1MjAxNCByZWFkIHRvZGF5J3Mgbm90ZSBjb250ZW50XG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMgJiYgc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcikge1xuICAgICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgY29uc3QgZm9sZGVyID0gc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcjtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgICAgY29uc3QgZGFpbHlOb3RlID0gZmlsZXMuZmluZCgoZikgPT4ge1xuICAgICAgICBpZiAoIWYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpICYmIGYucGF0aCAhPT0gZm9sZGVyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBmLmJhc2VuYW1lID09PSB0b2RheTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGFpbHlOb3RlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGRhaWx5Tm90ZSk7XG4gICAgICAgIHRhc2tzLnB1c2goLi4uY2FsZW5kYXJFbmdpbmUuZ2V0RGFpbHlOb3RlVGFza3NGcm9tQ29udGVudChjb250ZW50LCBkYWlseU5vdGUucGF0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW4gXHUyMDE0IHNjYW4gZm9yIHRhc2tzIHdpdGggdG9kYXkncyBkdWUgZGF0ZVxuICAgIGlmIChzZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikge1xuICAgICAgY29uc3QgdGFza3NQbHVnaW4gPSAodGhpcy5hcHAgYXMgYW55KS5wbHVnaW5zPy5wbHVnaW5zPy5bXCJvYnNpZGlhbi10YXNrcy1wbHVnaW5cIl07XG4gICAgICBpZiAodGFza3NQbHVnaW4pIHtcbiAgICAgICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICAgIGNvbnN0IGZpbGVzV2l0aFRhc2tzOiB7IHBhdGg6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH1bXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkpIHtcbiAgICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcz8uc29tZSgobGkpID0+IGxpLnRhc2sgIT09IHVuZGVmaW5lZCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICAgICAgLy8gUXVpY2sgY2hlY2s6IGRvZXMgdGhlIGNvbnRlbnQgbWVudGlvbiB0b2RheSdzIGRhdGUgd2l0aCBhIGR1ZSBlbW9qaT9cbiAgICAgICAgICBpZiAoY29udGVudC5pbmNsdWRlcyh0b2RheSkpIHtcbiAgICAgICAgICAgIGZpbGVzV2l0aFRhc2tzLnB1c2goeyBwYXRoOiBmaWxlLnBhdGgsIGNvbnRlbnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFza3MucHVzaCguLi5jYWxlbmRhckVuZ2luZS5nZXRUYXNrc1BsdWdpblRhc2tzRnJvbUZpbGVzKGZpbGVzV2l0aFRhc2tzKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uIEM6IFF1aWNrIFRhc2tzIFx1MjAxNCBhbHJlYWR5IGhhbmRsZWQgYnkgQ2FsZW5kYXJFbmdpbmUuZ2V0QWxsVGFza3MoKVxuICAgIGlmIChzZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKSB7XG4gICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICB0YXNrcy5wdXNoKFxuICAgICAgICAuLi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzXG4gICAgICAgICAgLmZpbHRlcigocXQpID0+IHF0LmRhdGUgPT09IHRvZGF5KVxuICAgICAgICAgIC5tYXAoKHF0KSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGBxdC0ke3F0LmlkfWAsXG4gICAgICAgICAgICB0aXRsZTogcXQudGl0bGUsXG4gICAgICAgICAgICBzb3VyY2U6IFwicXVpY2stdGFza1wiIGFzIGNvbnN0LFxuICAgICAgICAgICAgZGF0ZTogcXQuZGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IHF0LnRpbWUsXG4gICAgICAgICAgICBkdXJhdGlvbjogcXQuZHVyYXRpb24sXG4gICAgICAgICAgICBkb25lOiBxdC5kb25lLFxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICAvLyAtLS0gSGFuZGxlcnMgLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVFbnRlcldvcmtzcGFjZShhY3Rpdml0eUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuO1xuXG4gICAgaWYgKGFjdGl2aXR5Lmhhc1dvcmtzcGFjZSkge1xuICAgICAgLy8gT3BlbiBuYXRpdmUgT2xlbiBXb3Jrc3BhY2VWaWV3XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgPSB7XG4gICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgc2tpbGxzOiBbXSxcbiAgICAgICAgaGFzV29ya3NwYWNlOiB0cnVlLFxuICAgICAgICBza2lsbEZvbGRlcjogYWN0aXZpdHkuc2tpbGxGb2xkZXIsXG4gICAgICB9O1xuICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZVdvcmtzcGFjZVZpZXcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9uLXdvcmtzcGFjZSBhY3Rpdml0aWVzOiBtYXJrIGRvbmUgaW1tZWRpYXRlbHlcbiAgICAgIGF3YWl0IHRoaXMubWFya0FjdGl2aXR5RG9uZShhY3Rpdml0eSk7XG4gICAgICBuZXcgTm90aWNlKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9IG1hcmtlZCBkb25lIWApO1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVNraXBBY3Rpdml0eShhY3Rpdml0eUlkOiBzdHJpbmcsIGVuZ2luZTogT2xlbkVuZ2luZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE1hcmsgYXMgc2tpcHBlZCBpbiB0aGUgZGF5IG1hcCAoZW5naW5lIHN0YXRlKVxuICAgIGNvbnN0IGRheU1hcCA9IGVuZ2luZS5nZXREYXlNYXAoKTtcbiAgICBjb25zdCBlbnRyeSA9IGRheU1hcC5maW5kKChlKSA9PiBlLmFjdGl2aXR5SWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkuc3RhdHVzID0gXCJza2lwcGVkXCI7XG4gICAgfVxuICAgIG5ldyBOb3RpY2UoXCJTa2lwcGVkXCIpO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUNhbGVuZGFyVGFza0RvbmUoZW50cnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkRheU1hcEVudHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayB8fCAhZW50cnkuY2FsZW5kYXJTb3VyY2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNhbGVuZGFyRW5naW5lID0gbmV3IENhbGVuZGFyRW5naW5lKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncyxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgc3dpdGNoIChlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjpcbiAgICAgICAgaWYgKGVudHJ5LmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgZW50cnkubGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUudG9nZ2xlRGFpbHlOb3RlVGFzayhlbnRyeS5maWxlUGF0aCwgZW50cnkubGluZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjpcbiAgICAgICAgaWYgKGVudHJ5LmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgZW50cnkubGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUudG9nZ2xlVGFza3NQbHVnaW5UYXNrKGVudHJ5LmZpbGVQYXRoLCBlbnRyeS5saW5lTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjoge1xuICAgICAgICBjb25zdCBxdElkID0gZW50cnkuY2FsZW5kYXJUYXNrSWQ/LnJlcGxhY2UoXCJxdC1cIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maW5kKChxKSA9PiBxLmlkID09PSBxdElkKTtcbiAgICAgICAgaWYgKHF0KSB7XG4gICAgICAgICAgcXQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3IE5vdGljZShgXFx1MjcxMyAke2VudHJ5LmFjdGl2aXR5TmFtZX1gKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuRGF5TWFwRW50cnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWVudHJ5LmlzQ2FsZW5kYXJUYXNrIHx8ICFlbnRyeS5jYWxlbmRhclNvdXJjZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKVxuICAgICk7XG5cbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCB0YXNrOiBpbXBvcnQoXCIuLi90eXBlc1wiKS5DYWxlbmRhclRhc2sgPSB7XG4gICAgICBpZDogZW50cnkuY2FsZW5kYXJUYXNrSWQgPz8gZW50cnkuYWN0aXZpdHlJZCxcbiAgICAgIHRpdGxlOiBlbnRyeS5hY3Rpdml0eU5hbWUsXG4gICAgICBzb3VyY2U6IGVudHJ5LmNhbGVuZGFyU291cmNlLFxuICAgICAgZGF0ZTogbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBmaWxlUGF0aDogZW50cnkuZmlsZVBhdGgsXG4gICAgICBsaW5lTnVtYmVyOiBlbnRyeS5saW5lTnVtYmVyLFxuICAgIH07XG5cbiAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS5wb3N0cG9uZVRhc2sodGFzayk7XG4gICAgbmV3IE5vdGljZShgXFx1MjNFOSAke2VudHJ5LmFjdGl2aXR5TmFtZX0gcG9zdHBvbmVkIHRvIHRvbW9ycm93YCk7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbWFya0FjdGl2aXR5RG9uZShhY3Rpdml0eTogeyBpZDogc3RyaW5nOyBmb2xkZXI6IHN0cmluZzsgcHJvcGVydHk6IHN0cmluZzsgY2F0ZWdvcnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkNhdGVnb3J5OyBkYW1hZ2VQZXJDb21wbGV0aW9uOiBudW1iZXIgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgdG9kYXkncyBmaWxlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgdG9kYXlGaWxlID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PiAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmIGYuYmFzZW5hbWUgPT09IGRhdGVTdHJcbiAgICApO1xuXG4gICAgaWYgKHRvZGF5RmlsZSkge1xuICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKHRvZGF5RmlsZSwgKGZtKSA9PiB7XG4gICAgICAgIGZtW2FjdGl2aXR5LnByb3BlcnR5XSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBgLS0tXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX06IHRydWVcXG4tLS1cXG5gKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBNYXkgYWxyZWFkeSBleGlzdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFhQICsgYm9zcyBkYW1hZ2VcbiAgICBjb25zdCB4cCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb247XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFthY3Rpdml0eS5jYXRlZ29yeV0gKz0geHA7XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3Rpdml0eS5kYW1hZ2VQZXJDb21wbGV0aW9uXG4gICAgKTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlVGVtcGxlVXBkYXRlKHRhc2tJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGFzayA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLmZpbmQoKHQpID0+IHQuaWQgPT09IHRhc2tJZCk7XG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG5cbiAgICB0YXNrLmxhc3RDb21wbGV0ZWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgbmV3IE5vdGljZShgJHt0YXNrLmVtb2ppfSAke3Rhc2submFtZX0gY29tcGxldGVkIWApO1xuXG4gICAgLy8gUmUtcmVuZGVyXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8vIC0tLSBUaGVtZSAtLS1cblxuICBwcml2YXRlIGFwcGx5VGhlbWVPdmVycmlkZXMocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcztcbiAgICBpZiAoIW92ZXJyaWRlcykgcmV0dXJuO1xuXG4gICAgaWYgKG92ZXJyaWRlcy5iZ1ByaW1hcnkpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnLXByaW1hcnlcIiwgb3ZlcnJpZGVzLmJnUHJpbWFyeSk7XG4gICAgaWYgKG92ZXJyaWRlcy5jYXJkQmcpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtYmdcIiwgb3ZlcnJpZGVzLmNhcmRCZyk7XG4gICAgaWYgKG92ZXJyaWRlcy50ZXh0UHJpbWFyeSkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1wcmltYXJ5XCIsIG92ZXJyaWRlcy50ZXh0UHJpbWFyeSk7XG4gICAgaWYgKG92ZXJyaWRlcy50ZXh0TXV0ZWQpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRleHQtbXV0ZWRcIiwgb3ZlcnJpZGVzLnRleHRNdXRlZCk7XG4gICAgaWYgKG92ZXJyaWRlcy5hY2NlbnRHb2xkKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1hY2NlbnQtZ29sZFwiLCBvdmVycmlkZXMuYWNjZW50R29sZCk7XG4gICAgaWYgKG92ZXJyaWRlcy5kYW5nZXIpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWRhbmdlclwiLCBvdmVycmlkZXMuZGFuZ2VyKTtcbiAgICBpZiAob3ZlcnJpZGVzLnN1Y2Nlc3MpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXN1Y2Nlc3NcIiwgb3ZlcnJpZGVzLnN1Y2Nlc3MpO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIEVuZ2luZVxuLy8gUmVhZHMgYm9zcyBzdGF0ZSBhbmQgcHJvdmlkZXMgYm9zcy1yZWxhdGVkIGNhbGN1bGF0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBCb3NzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQk9TU0VTLCBSQU5LX1RJRVJfQ09MT1JTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvc3NTdGF0dXMge1xuICBib3NzOiBCb3NzRGVmaW5pdGlvbjtcbiAgY3VycmVudEhQOiBudW1iZXI7XG4gIG1heEhQOiBudW1iZXI7XG4gIHBlcmNlbnQ6IG51bWJlcjtcbiAgdGllcjogbnVtYmVyO1xuICByYW5rOiBzdHJpbmc7XG4gIHRpZXJDb2xvcjogc3RyaW5nO1xuICBpblRhcnRhcnVzOiBib29sZWFuO1xuICBpc0RhbmdlclpvbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCb3NzRW5naW5lIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBnZXRCb3NzRm9yVGllcih0aWVyOiBudW1iZXIpOiBCb3NzRGVmaW5pdGlvbiB8IG51bGwge1xuICAgIHJldHVybiBCT1NTRVMuZmluZCgoYikgPT4gYi50aWVyID09PSB0aWVyKSA/PyBudWxsO1xuICB9XG5cbiAgZ2V0Q3VycmVudEJvc3MoKTogQm9zc0RlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb3NzRm9yVGllcih0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyKTtcbiAgfVxuXG4gIGdldEJvc3NTdGF0dXMoKTogQm9zc1N0YXR1cyB7XG4gICAgY29uc3QgdGllciA9IHRoaXMuc2V0dGluZ3MuY3VycmVudFRpZXI7XG4gICAgY29uc3QgYm9zcyA9IHRoaXMuZ2V0Q3VycmVudEJvc3MoKSA/PyBCT1NTRVNbMF07XG4gICAgY29uc3QgY3VycmVudEhQID0gdGhpcy5zZXR0aW5ncy5ib3NzQ3VycmVudEhQO1xuICAgIGNvbnN0IG1heEhQID0gdGhpcy5zZXR0aW5ncy5ib3NzTWF4SFA7XG4gICAgY29uc3QgcGVyY2VudCA9IG1heEhQID4gMCA/IE1hdGgucm91bmQoKGN1cnJlbnRIUCAvIG1heEhQKSAqIDEwMCkgOiAwO1xuICAgIGNvbnN0IHRpZXJDb2xvciA9IFJBTktfVElFUl9DT0xPUlNbdGllcl0gPz8gXCIjNkI3MjgwXCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9zcyxcbiAgICAgIGN1cnJlbnRIUCxcbiAgICAgIG1heEhQLFxuICAgICAgcGVyY2VudCxcbiAgICAgIHRpZXIsXG4gICAgICByYW5rOiBib3NzLnJhbmssXG4gICAgICB0aWVyQ29sb3IsXG4gICAgICBpblRhcnRhcnVzOiB0aGlzLnNldHRpbmdzLmluVGFydGFydXMsXG4gICAgICBpc0RhbmdlclpvbmU6IHRoaXMuaXNEYW5nZXJab25lKCksXG4gICAgfTtcbiAgfVxuXG4gIGlzRGFuZ2VyWm9uZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IGJvc3NDdXJyZW50SFAsIGJvc3NNYXhIUCB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBpZiAoYm9zc01heEhQIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKGJvc3NDdXJyZW50SFAgLyBib3NzTWF4SFApIDwgMC4xNTtcbiAgfVxuXG4gIGlzSW5UYXJ0YXJ1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzO1xuICB9XG5cbiAgZ2V0SFBDb2xvcihwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChwZXJjZW50ID4gNjApIHJldHVybiBcIiMyMmM1NWVcIjtcbiAgICBpZiAocGVyY2VudCA+IDMwKSByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgaWYgKHBlcmNlbnQgPiAxNSkgcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ29yZSBFbmdpbmVcbi8vIFByaW9yaXR5IGxvZ2ljLCBzdWdnZXN0aW9uIGFsZ29yaXRobSwgZGF5IG1hcCwgYW5hbHl0aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUge1xuICBPbGVuU2V0dGluZ3MsXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBDb21wbGV0aW9uLFxuICBDb21wbGV0aW9uTWFwLFxuICBEaXJlY3RpdmVTdWdnZXN0aW9uLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2F0ZWdvcnlMZXZlbCxcbiAgQ2F0ZWdvcnksXG4gIFByaW9yaXR5UmVhc29uLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIE5FR0xFQ1RfTE9SRSxcbiAgQ0hBUFRFUl9OQU1FUyxcbiAgU0lOR0xFX0RPTUlOQU5UX1RJVExFUyxcbiAgVFdPX0NBVEVHT1JZX1RJVExFUyxcbiAgQkFMQU5DRURfVElUTEVTLFxuICB0b1JvbWFuLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4vQm9zc0VuZ2luZVwiO1xuXG5leHBvcnQgY2xhc3MgT2xlbkVuZ2luZSB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcbiAgcHJpdmF0ZSBjb21wbGV0aW9uczogQ29tcGxldGlvbk1hcDtcbiAgcHJpdmF0ZSBub3c6IERhdGU7XG4gIHByaXZhdGUgdG9kYXk6IHN0cmluZztcbiAgcHJpdmF0ZSBib3NzRW5naW5lOiBCb3NzRW5naW5lO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGNvbXBsZXRpb25zOiBDb21wbGV0aW9uTWFwLCBub3c6IERhdGUpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5jb21wbGV0aW9ucyA9IGNvbXBsZXRpb25zO1xuICAgIHRoaXMubm93ID0gbm93O1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgdGhpcy50b2RheSA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5ib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gLS0tIEVmZmVjdGl2ZSBEYXRlIChzdXBwb3J0cyBzaW11bGF0ZWQgZGF0ZSArIHBhdXNlKSAtLS1cblxuICBwcml2YXRlIGdldEVmZmVjdGl2ZU5vdygpOiBEYXRlIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSB7XG4gICAgICBjb25zdCBzaW0gPSBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpO1xuICAgICAgc2ltLnNldEhvdXJzKDEyLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBzaW07XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiICYmIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWZmZWN0aXZlVG9kYXkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBkID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIERhdGEgQWNjZXNzIC0tLVxuXG4gIGdldEVuYWJsZWRBY3Rpdml0aWVzKCk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQpO1xuICB9XG5cbiAgZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRpb25zW2FjdGl2aXR5SWRdID8/IFtdO1xuICB9XG5cbiAgZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHlJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHRvZGF5TXMgPSBuZXcgRGF0ZShlZmZlY3RpdmVOb3cpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgY29uc3QgY29tcGxldGVkRGF0ZXMgPSBjb21wc1xuICAgICAgLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpXG4gICAgICAubWFwKChjKSA9PiBuZXcgRGF0ZShjLmRhdGUpLmdldFRpbWUoKSlcbiAgICAgIC5maWx0ZXIoKHQpID0+ICFpc05hTih0KSAmJiB0IDw9IHRvZGF5TXMpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuXG4gICAgaWYgKGNvbXBsZXRlZERhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDk5OTtcblxuICAgIGNvbnN0IG1zUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigodG9kYXlNcyAtIGNvbXBsZXRlZERhdGVzWzBdKSAvIG1zUGVyRGF5KTtcbiAgfVxuXG4gIGlzRG9uZVRvZGF5KGFjdGl2aXR5SWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZVRvZGF5ID0gdGhpcy5nZXRFZmZlY3RpdmVUb2RheSgpO1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIHJldHVybiBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGVmZmVjdGl2ZVRvZGF5ICYmIGMuY29tcGxldGVkKTtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgUHJvZ3Jlc3MgLS0tXG5cbiAgZ2V0V2Vla2x5UHJvZ3Jlc3MoYWN0aXZpdHlJZDogc3RyaW5nKTogeyBkb25lOiBudW1iZXI7IHRhcmdldDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybiB7IGRvbmU6IDAsIHRhcmdldDogMCB9O1xuXG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSB0aGlzLmdldFdlZWtTdGFydChlZmZlY3RpdmVOb3cpO1xuICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgIHdlZWtFbmQuc2V0RGF0ZSh3ZWVrRW5kLmdldERhdGUoKSArIDcpO1xuXG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZG9uZSA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICByZXR1cm4gZCA+PSB3ZWVrU3RhcnQgJiYgZCA8IHdlZWtFbmQ7XG4gICAgfSkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHsgZG9uZSwgdGFyZ2V0OiBhY3Rpdml0eS53ZWVrbHlUYXJnZXQgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2Vla1N0YXJ0KGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xuICAgIGNvbnN0IGRpZmYgPSBkLmdldERhdGUoKSAtIGRheSArIChkYXkgPT09IDAgPyAtNiA6IDEpOyAvLyBNb25kYXkgc3RhcnRcbiAgICBkLnNldERhdGUoZGlmZik7XG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICAvLyAtLS0gU3RyZWFrcyAtLS1cblxuICBnZXRBY3Rpdml0eVN0cmVhayhhY3Rpdml0eUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShlZmZlY3RpdmVOb3cpO1xuICAgIHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgY29uc3QgY29tcGxldGVkRGF0ZXMgPSBjb21wc1xuICAgICAgLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpXG4gICAgICAubWFwKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkKSA9PiAhaXNOYU4oZC5nZXRUaW1lKCkpICYmIGQgPD0gdG9kYXkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5nZXRUaW1lKCkgLSBhLmdldFRpbWUoKSk7XG5cbiAgICBpZiAoY29tcGxldGVkRGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcblxuICAgIGxldCBzdHJlYWsgPSAwO1xuICAgIGNvbnN0IGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGNvbXBsZXRlZERhdGVzWzBdKTtcbiAgICBmb3IgKGNvbnN0IGRhdGUgb2YgY29tcGxldGVkRGF0ZXMpIHtcbiAgICAgIGlmIChkYXRlLmdldFRpbWUoKSA9PT0gY2hlY2tEYXRlLmdldFRpbWUoKSkge1xuICAgICAgICBzdHJlYWsrKztcbiAgICAgICAgY2hlY2tEYXRlLnNldERhdGUoY2hlY2tEYXRlLmdldERhdGUoKSAtIDEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRlIDwgY2hlY2tEYXRlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyZWFrO1xuICB9XG5cbiAgZ2V0T3ZlcmFsbFN0cmVhaygpOiBudW1iZXIge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG4gICAgY29uc3Qgc3RyZWFrcyA9IGFjdGl2aXRpZXMubWFwKChhKSA9PiB0aGlzLmdldEFjdGl2aXR5U3RyZWFrKGEuaWQpKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgLi4uc3RyZWFrcyk7XG4gIH1cblxuICAvLyAtLS0gQW5hbHl0aWNzIC0tLVxuXG4gIGdldFRvdGFsQ29tcGxldGlvbnMoKTogbnVtYmVyIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICB0b3RhbCArPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIGdldERheXNPZlByZXNlbmNlKCk6IG51bWJlciB7XG4gICAgY29uc3QgZGF5c1NldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICBmb3IgKGNvbnN0IGMgb2YgY29tcHMpIHtcbiAgICAgICAgaWYgKGMuY29tcGxldGVkKSBkYXlzU2V0LmFkZChjLmRhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF5c1NldC5zaXplO1xuICB9XG5cbiAgLy8gLS0tIENhdGVnb3J5IFhQICYgTGV2ZWxzIC0tLVxuXG4gIGdldENhdGVnb3J5WFAoY2F0ZWdvcnk6IENhdGVnb3J5KTogbnVtYmVyIHtcbiAgICBjb25zdCB4cFBlciA9IHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbjtcbiAgICBsZXQgeHAgPSB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFBbY2F0ZWdvcnldID8/IDA7XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgaWYgKGFjdGl2aXR5LmNhdGVnb3J5ICE9PSBjYXRlZ29yeSkgY29udGludWU7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICB4cCA9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aCAqIHhwUGVyO1xuICAgIH1cbiAgICByZXR1cm4geHA7XG4gIH1cblxuICBnZXRDYXRlZ29yeUxldmVsKGNhdGVnb3J5OiBDYXRlZ29yeSk6IENhdGVnb3J5TGV2ZWwge1xuICAgIGNvbnN0IHhwID0gdGhpcy5nZXRDYXRlZ29yeVhQKGNhdGVnb3J5KTtcbiAgICBjb25zdCBsZXZlbCA9IE1hdGguZmxvb3IoeHAgLyAxMDApO1xuICAgIGNvbnN0IHByb2dyZXNzVG9OZXh0ID0geHAgJSAxMDA7XG4gICAgcmV0dXJuIHsgY2F0ZWdvcnksIHhwLCBsZXZlbCwgcHJvZ3Jlc3NUb05leHQgfTtcbiAgfVxuXG4gIGdldEFsbENhdGVnb3J5TGV2ZWxzKCk6IENhdGVnb3J5TGV2ZWxbXSB7XG4gICAgcmV0dXJuIChbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKS5tYXAoKGMpID0+IHRoaXMuZ2V0Q2F0ZWdvcnlMZXZlbChjKSk7XG4gIH1cblxuICBnZXRFdWRhaW1vbmlhSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wubGV2ZWwsIDApO1xuICB9XG5cbiAgZ2V0Q2hhcHRlcigpOiB7IG51bWJlcjogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuICAgIGNvbnN0IGNoYXB0ZXJOdW0gPSBNYXRoLm1pbigxMCwgTWF0aC5mbG9vcihpbmRleCAvIDEwKSArIDEpO1xuICAgIGNvbnN0IG5hbWUgPSBDSEFQVEVSX05BTUVTW2NoYXB0ZXJOdW1dID8/IFwiSW5pdGlhdGVcIjtcbiAgICByZXR1cm4geyBudW1iZXI6IGNoYXB0ZXJOdW0sIG5hbWUgfTtcbiAgfVxuXG4gIGdldEV1ZGFpbW9uaWFQcm9ncmVzcygpOiBudW1iZXIge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgICByZXR1cm4gKGluZGV4ICUgMTApICogMTA7IC8vIDAtMTAwIHByb2dyZXNzIHdpdGhpbiBjaGFwdGVyXG4gIH1cblxuICAvLyAtLS0gRHluYW1pYyBUaXRsZSAtLS1cblxuICBnZXREeW5hbWljVGl0bGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKSByZXR1cm4gdGhpcy5zZXR0aW5ncy50aXRsZU92ZXJyaWRlO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gdGhpcy5nZXRBbGxDYXRlZ29yeUxldmVscygpO1xuICAgIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSB0aGlzLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5Q29tcGxldGlvbnM6IFJlY29yZDxDYXRlZ29yeSwgbnVtYmVyPiA9IHsgYm9keTogMCwgbWluZDogMCwgc3Bpcml0OiAwIH07XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIGNhdGVnb3J5Q29tcGxldGlvbnNbYWN0aXZpdHkuY2F0ZWdvcnldICs9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbCA9IE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlDb21wbGV0aW9ucykucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgaWYgKHRvdGFsID09PSAwKSByZXR1cm4gXCJJbml0aWF0ZVwiO1xuXG4gICAgY29uc3Qgd2VpZ2h0czogUmVjb3JkPENhdGVnb3J5LCBudW1iZXI+ID0ge1xuICAgICAgYm9keTogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5ib2R5IC8gdG90YWwgOiAwLFxuICAgICAgbWluZDogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5taW5kIC8gdG90YWwgOiAwLFxuICAgICAgc3Bpcml0OiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLnNwaXJpdCAvIHRvdGFsIDogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgdGllciA9IHRvdGFsQ29tcGxldGlvbnMgPCA1MCA/IFwibGlnaHRcIiA6IHRvdGFsQ29tcGxldGlvbnMgPCAyMDAgPyBcIm1pZFwiIDogXCJoZWF2eVwiO1xuXG4gICAgLy8gQ2hlY2sgc2luZ2xlIGRvbWluYW50ICg+PSA3MCUpXG4gICAgZm9yIChjb25zdCBjYXQgb2YgW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSkge1xuICAgICAgaWYgKHdlaWdodHNbY2F0XSA+PSAwLjcwKSB7XG4gICAgICAgIHJldHVybiBTSU5HTEVfRE9NSU5BTlRfVElUTEVTW2NhdF0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYmFsYW5jZWQgKGFsbCA+PSAyNSUpXG4gICAgaWYgKHdlaWdodHMuYm9keSA+PSAwLjI1ICYmIHdlaWdodHMubWluZCA+PSAwLjI1ICYmIHdlaWdodHMuc3Bpcml0ID49IDAuMjUpIHtcbiAgICAgIHJldHVybiBCQUxBTkNFRF9USVRMRVNbdGllcl0gPz8gXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCI7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdHdvLWNhdGVnb3J5IGNvbWJpbmF0aW9ucyAoZWFjaCA+PSAzMCUpXG4gICAgY29uc3QgY2F0cyA9IChbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKVxuICAgICAgLmZpbHRlcigoYykgPT4gd2VpZ2h0c1tjXSA+PSAwLjMwKVxuICAgICAgLnNvcnQoKTtcblxuICAgIGlmIChjYXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3Qga2V5ID0gY2F0cy5qb2luKFwiK1wiKTtcbiAgICAgIHJldHVybiBUV09fQ0FURUdPUllfVElUTEVTW2tleV0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2s6IHVzZSBkb21pbmFudCBjYXRlZ29yeVxuICAgIGNvbnN0IGRvbWluYW50ID0gKE9iamVjdC5lbnRyaWVzKHdlaWdodHMpIGFzIFtDYXRlZ29yeSwgbnVtYmVyXVtdKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVswXVswXTtcbiAgICByZXR1cm4gU0lOR0xFX0RPTUlOQU5UX1RJVExFU1tkb21pbmFudF0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gIH1cblxuICAvLyAtLS0gU3VnZ2VzdGlvbiBBbGdvcml0aG0gKFdhdGVyZmFsbCkgLS0tXG5cbiAgZ2V0U3VnZ2VzdGlvbigpOiBEaXJlY3RpdmVTdWdnZXN0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcbiAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgLy8gMS4gREVBVEggQ0hFQ0tcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oYWN0aXZpdGllc1swXSwgXCJkZWF0aFwiLCBcIkVzY2FwZSBUYXJ0YXJ1cyBcdTIwMTQgY29tcGxldGUgeW91ciBwZW5hbmNlLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID49IDIpIHtcbiAgICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICAgIGlmIChuZWdsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24obmVnbGVjdGVkWzBdLCBcImRlYXRoXCIsIFwiRGVhdGggbG9vbXMuIEFjdCBub3cgb3IgZGVzY2VuZCB0byBUYXJ0YXJ1cy5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gQk9TUyBGSU5JU0hcbiAgICBpZiAodGhpcy5ib3NzRW5naW5lLmlzRGFuZ2VyWm9uZSgpKSB7XG4gICAgICBjb25zdCBiZXN0ID0gdGhpcy5nZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllcyk7XG4gICAgICBpZiAoYmVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oYmVzdCwgXCJib3NzXCIsIFwiT25lIGZpbmFsIGJsb3cgcmVtYWlucy4gRmluaXNoIHRoZSBiZWFzdC5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gTkVHTEVDVCArIFBSSU9SSVRZXG4gICAgY29uc3QgbmVnbGVjdGVkID0gdGhpcy5nZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXMpO1xuICAgIGlmIChuZWdsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wID0gdGhpcy5hcHBseVJ1bGVzKG5lZ2xlY3RlZCk7XG4gICAgICBpZiAodG9wKSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKHRvcC5pZCk7XG4gICAgICAgIGNvbnN0IGxvcmUgPSBORUdMRUNUX0xPUkVbdG9wLmlkXSA/PyBgJHtkYXlzfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gO1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odG9wLCBcIm5lZ2xlY3RcIiwgbG9yZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gV0VFS0xZIENBVENILVVQXG4gICAgY29uc3QgYmVoaW5kU2NoZWR1bGUgPSB0aGlzLmdldEJlaGluZFNjaGVkdWxlQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAoYmVoaW5kU2NoZWR1bGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wID0gYmVoaW5kU2NoZWR1bGVbMF07XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3ModG9wLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0b3AsIFwid2Vla2x5XCIsIGBCZWhpbmQgc2NoZWR1bGU6ICR7cHJvZ3Jlc3MuZG9uZX0vJHtwcm9ncmVzcy50YXJnZXR9IHRoaXMgd2Vlay5gKTtcbiAgICB9XG5cbiAgICAvLyA1LiBDSEFJTiBDSEVDS1xuICAgIGNvbnN0IGNoYWluZWQgPSB0aGlzLmdldENoYWluZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmIChjaGFpbmVkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihjaGFpbmVkWzBdLCBcImNoYWluXCIsIFwiWW91ciBwcmVyZXF1aXNpdGUgaXMgZG9uZS4gVGltZSBmb3IgdGhlIG5leHQgc3RlcC5cIik7XG4gICAgfVxuXG4gICAgLy8gNi4gVElNRS1CQVNFRFxuICAgIGNvbnN0IHRpbWVCYXNlZCA9IHRoaXMuZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAodGltZUJhc2VkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0aW1lQmFzZWRbMF0sIFwidGltZVwiLCBcIlRoZSB0aW1lIGlzIHJpZ2h0LiBCZWdpbi5cIik7XG4gICAgfVxuXG4gICAgLy8gNy4gQkFMQU5DRUQgRkFMTEJBQ0tcbiAgICBjb25zdCBsb25nZXN0R2FwID0gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShiLmlkKSAtIHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYS5pZCkpO1xuXG4gICAgaWYgKGxvbmdlc3RHYXAubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGxvbmdlc3RHYXBbMF0sIFwiYmFsYW5jZWRcIiwgXCJCYWxhbmNlIHlvdXIgcGF0aC4gVGhpcyBoYXMgd2FpdGVkIGxvbmdlc3QuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFN1Z2dlc3Rpb24oXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICAgIHJlYXNvbjogUHJpb3JpdHlSZWFzb24sXG4gICAgbG9yZVRleHQ6IHN0cmluZ1xuICApOiBEaXJlY3RpdmVTdWdnZXN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICByZWFzb24sXG4gICAgICBkYXlzU2luY2VMYXN0RG9uZTogdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eS5pZCksXG4gICAgICBsb3JlVGV4dCxcbiAgICAgIHByaW9yaXR5OiBhY3Rpdml0eS5wcmlvcml0eSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhLmlkKTtcbiAgICAgICAgcmV0dXJuIGRheXMgPj0gYS5uZWdsZWN0VGhyZXNob2xkICYmICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UnVsZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICAvLyBDaGVjayBhbHRlcm5hdGluZyBydWxlXG4gICAgICBpZiAoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpIHtcbiAgICAgICAgY29uc3QgYWx0RGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICBjb25zdCB0aGlzRGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgICAgICAvLyBJZiB0aGlzIHdhcyBkb25lIG1vcmUgcmVjZW50bHkgdGhhbiBhbHRlcm5hdGUsIHByZWZlciBhbHRlcm5hdGVcbiAgICAgICAgaWYgKHRoaXNEYXlzIDwgYWx0RGF5cykge1xuICAgICAgICAgIGNvbnN0IGFsdCA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCk7XG4gICAgICAgICAgaWYgKGFsdCAmJiBhbHQuZW5hYmxlZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhbHQuaWQpKSByZXR1cm4gYWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGJsb2NraW5nIHJ1bGVzXG4gICAgICBpZiAoYWN0aXZpdHkuYmxvY2tzICYmIGFjdGl2aXR5LmJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRoaXMgYWN0aXZpdHkgYmxvY2tzIG90aGVycyB3aGVuIG5lZ2xlY3RlZCBcdTIwMTQgaXQgc2hvdWxkIGJlIHByaW9yaXRpemVkXG4gICAgICAgIHJldHVybiBhY3Rpdml0eTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZpdGllc1swXSA/PyBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgY29uc3Qgbm90RG9uZSA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgaWYgKG5vdERvbmUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbm90RG9uZS5zb3J0KChhLCBiKSA9PiBiLmRhbWFnZVBlckNvbXBsZXRpb24gLSBhLmRhbWFnZVBlckNvbXBsZXRpb24pWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZWZmZWN0aXZlTm93LmdldERheSgpOyAvLyAwPVN1blxuICAgIGNvbnN0IGFkanVzdGVkRGF5ID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlazsgLy8gTW9uPTFcbiAgICBjb25zdCByZW1haW5pbmdEYXlzID0gNyAtIGFkanVzdGVkRGF5ICsgMTtcblxuICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyhhLmlkKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gcHJvZ3Jlc3MudGFyZ2V0IC0gcHJvZ3Jlc3MuZG9uZTtcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZyA+IDAgJiYgcmVtYWluaW5nID49IHJlbWFpbmluZ0RheXM7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKCFhLmNoYWluQWZ0ZXIgfHwgdGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuaXNEb25lVG9kYXkoYS5jaGFpbkFmdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgY29uc3QgaG91ciA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IGN1cnJlbnRQZXJpb2QgPSBob3VyIDwgbW9ybmluZ0VuZCA/IFwibW9ybmluZ1wiIDpcbiAgICAgIGhvdXIgPCBhZnRlcm5vb25FbmQgPyBcImFmdGVybm9vblwiIDpcbiAgICAgIGhvdXIgPCBldmVuaW5nRW5kID8gXCJldmVuaW5nXCIgOiBcImFueXRpbWVcIjtcblxuICAgIC8vIEZpcnN0IGNoZWNrIHRpbWUgb3ZlcnJpZGVzXG4gICAgY29uc3Qgb3ZlcnJpZGRlbiA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFhLnRpbWVPdmVycmlkZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGhvdXIgPj0gYS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyICYmIGhvdXIgPCBhLnRpbWVPdmVycmlkZS5lbmRIb3VyO1xuICAgIH0pO1xuICAgIGlmIChvdmVycmlkZGVuLmxlbmd0aCA+IDApIHJldHVybiBvdmVycmlkZGVuLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIC8vIFRoZW4gY2hlY2sgcHJlZmVycmVkIHRpbWVcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkgJiYgKGEucHJlZmVycmVkVGltZSA9PT0gY3VycmVudFBlcmlvZCB8fCBhLnByZWZlcnJlZFRpbWUgPT09IFwiYW55dGltZVwiKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICAvLyAtLS0gRGF5IE1hcCBHZW5lcmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgY2FsZW5kYXJFbnRyaWVzOiBEYXlNYXBFbnRyeVtdID0gW107XG5cbiAgc2V0Q2FsZW5kYXJFbnRyaWVzKGVudHJpZXM6IERheU1hcEVudHJ5W10pOiB2b2lkIHtcbiAgICB0aGlzLmNhbGVuZGFyRW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXREYXlNYXAoKTogRGF5TWFwRW50cnlbXSB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKS5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kLCBidWZmZXJNaW51dGVzIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IHRpbWVTbG90czogeyBwZXJpb2Q6IHN0cmluZzsgc3RhcnRIb3VyOiBudW1iZXI7IGVuZEhvdXI6IG51bWJlciB9W10gPSBbXG4gICAgICB7IHBlcmlvZDogXCJtb3JuaW5nXCIsIHN0YXJ0SG91cjogbW9ybmluZ1N0YXJ0LCBlbmRIb3VyOiBtb3JuaW5nRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJhZnRlcm5vb25cIiwgc3RhcnRIb3VyOiBtb3JuaW5nRW5kLCBlbmRIb3VyOiBhZnRlcm5vb25FbmQgfSxcbiAgICAgIHsgcGVyaW9kOiBcImV2ZW5pbmdcIiwgc3RhcnRIb3VyOiBhZnRlcm5vb25FbmQsIGVuZEhvdXI6IGV2ZW5pbmdFbmQgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgZW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gMS4gUGxhY2UgdGltZS1vdmVycmlkZSBhY3Rpdml0aWVzIGZpcnN0XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LnRpbWVPdmVycmlkZSkgY29udGludWU7XG4gICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgc3RhcnRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyLFxuICAgICAgICBlbmRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuZW5kSG91cixcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ0aW1lXCIsXG4gICAgICB9KTtcbiAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgIH1cblxuICAgIC8vIDIuIFBsYWNlIG5lZ2xlY3RlZCBhY3Rpdml0aWVzIGluIHRoZWlyIHByZWZlcnJlZCBzbG90c1xuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKVxuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBuZWdsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIm5lZ2xlY3RcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFBsYWNlIHJlbWFpbmluZyB3ZWVrbHktdGFyZ2V0IGFjdGl2aXRpZXNcbiAgICBjb25zdCByZW1haW5pbmcgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhc2NoZWR1bGVkLmhhcyhhLmlkKSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKGEuaWQpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MuZG9uZSA8IHByb2dyZXNzLnRhcmdldDtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZW1haW5pbmcpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIndlZWtseVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2NoZWR1bGVkLmFkZChhY3Rpdml0eS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgY2FsZW5kYXIgdGFzayBlbnRyaWVzXG4gICAgZm9yIChjb25zdCBjYWxFbnRyeSBvZiB0aGlzLmNhbGVuZGFyRW50cmllcykge1xuICAgICAgZW50cmllcy5wdXNoKGNhbEVudHJ5KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IGJ5IHN0YXJ0IHRpbWVcbiAgICBlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRIb3VyIC0gYi5zdGFydEhvdXIpO1xuXG4gICAgLy8gTWFyayBkb25lIGFjdGl2aXRpZXMgKG9ubHkgZm9yIG5vbi1jYWxlbmRhciBlbnRyaWVzKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayAmJiB0aGlzLmlzRG9uZVRvZGF5KGVudHJ5LmFjdGl2aXR5SWQpKSB7XG4gICAgICAgIGVudHJ5LnN0YXR1cyA9IFwiZG9uZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2xvdEZvckFjdGl2aXR5KFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdLFxuICAgIGV4aXN0aW5nOiBEYXlNYXBFbnRyeVtdLFxuICAgIGJ1ZmZlck1pbnV0ZXM6IG51bWJlclxuICApOiB7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfSB8IG51bGwge1xuICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbiAvIDYwO1xuICAgIGNvbnN0IGJ1ZmZlckhvdXJzID0gYnVmZmVyTWludXRlcyAvIDYwO1xuXG4gICAgLy8gRmluZCBwcmVmZXJyZWQgc2xvdFxuICAgIGNvbnN0IHByZWZlcnJlZFNsb3QgPSB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IGFjdGl2aXR5LnByZWZlcnJlZFRpbWUpXG4gICAgICA/PyB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IFwiYW55dGltZVwiKVxuICAgICAgPz8gdGltZVNsb3RzWzBdO1xuXG4gICAgLy8gRmluZCBmaXJzdCBhdmFpbGFibGUgdGltZSBpbiBwcmVmZXJyZWQgc2xvdFxuICAgIGxldCBjYW5kaWRhdGVTdGFydCA9IHByZWZlcnJlZFNsb3Quc3RhcnRIb3VyO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHByZWZlcnJlZFNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgY2FuZGlkYXRlU3RhcnQgPSBlbnRyeS5lbmRIb3VyICsgYnVmZmVySG91cnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FuZGlkYXRlRW5kID0gY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzO1xuICAgIGlmIChjYW5kaWRhdGVFbmQgPD0gcHJlZmVycmVkU2xvdC5lbmRIb3VyKSB7XG4gICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVFbmQgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgYW55IHNsb3RcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgdGltZVNsb3RzKSB7XG4gICAgICBpZiAoc2xvdCA9PT0gcHJlZmVycmVkU2xvdCkgY29udGludWU7XG4gICAgICBjYW5kaWRhdGVTdGFydCA9IHNsb3Quc3RhcnRIb3VyO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgICBpZiAoZW50cnkuc3RhcnRIb3VyIDwgc2xvdC5lbmRIb3VyICYmIGVudHJ5LmVuZEhvdXIgPiBjYW5kaWRhdGVTdGFydCkge1xuICAgICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIDw9IHNsb3QuZW5kSG91cikge1xuICAgICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVTdGFydCArIGR1cmF0aW9uSG91cnMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgRGF0YSBmb3IgQmFyIENoYXJ0IC0tLVxuXG4gIGdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTogQXJyYXk8eyBkYXk6IHN0cmluZzsgZGF0ZTogc3RyaW5nOyBjb21wbGV0aW9uczogTWFwPENhdGVnb3J5LCBudW1iZXI+IH0+IHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3QgZGF5cyA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgaSk7XG4gICAgICBjb25zdCBkYXRlU3RyID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGRheUNvbXBsZXRpb25zID0gbmV3IE1hcDxDYXRlZ29yeSwgbnVtYmVyPigpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGRhdGVTdHIgJiYgYy5jb21wbGV0ZWQpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYXlDb21wbGV0aW9ucy5nZXQoYWN0aXZpdHkuY2F0ZWdvcnkpID8/IDA7XG4gICAgICAgICAgZGF5Q29tcGxldGlvbnMuc2V0KGFjdGl2aXR5LmNhdGVnb3J5LCBjdXJyZW50ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goeyBkYXk6IGRheXNbaV0sIGRhdGU6IGRhdGVTdHIsIGNvbXBsZXRpb25zOiBkYXlDb21wbGV0aW9ucyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk6IG51bWJlciB7XG4gICAgY29uc3Qgd2Vla2x5ID0gdGhpcy5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gICAgcmV0dXJuIHdlZWtseS5maWx0ZXIoKGQpID0+IHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICByZXR1cm4gdG90YWwgPiAwO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuXG4gIGdldEJlc3REYXlUaGlzV2VlaygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIGxldCBiZXN0ID0gd2Vla2x5WzBdO1xuICAgIGxldCBiZXN0VG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgZCBvZiB3ZWVrbHkpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICBpZiAodG90YWwgPiBiZXN0VG90YWwpIHtcbiAgICAgICAgYmVzdFRvdGFsID0gdG90YWw7XG4gICAgICAgIGJlc3QgPSBkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVzdFRvdGFsID4gMCA/IGJlc3QuZGF5IDogXCItLVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDYWxlbmRhciBFbmdpbmVcbi8vIFJlYWRzIHRhc2tzIGZyb20gRGFpbHkgTm90ZXMsIFRhc2tzIHBsdWdpbiwgYW5kIFF1aWNrIFRhc2tzXG4vLyBNZXJnZXMgdGhlbSBpbnRvIENhbGVuZGFyVGFza1tdIGZvciBEYXkgTWFwIGludGVncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7XG4gIE9sZW5TZXR0aW5ncyxcbiAgQ2FsZW5kYXJUYXNrLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2FsZW5kYXJUYXNrU291cmNlLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRW5naW5lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuICBwcml2YXRlIHRvZGF5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIG5vdzogRGF0ZSkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRoaXMudG9kYXkgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIE1haW4gZW50cnk6IGdldCBhbGwgY2FsZW5kYXIgdGFza3MgZm9yIHRvZGF5IC0tLVxuXG4gIGdldEFsbFRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXREYWlseU5vdGVUYXNrcygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFRhc2tzUGx1Z2luVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFF1aWNrVGFza3MoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIENvbnZlcnQgQ2FsZW5kYXJUYXNrcyB0byBEYXlNYXBFbnRyaWVzIC0tLVxuXG4gIHRvRGF5TWFwRW50cmllcyh0YXNrczogQ2FsZW5kYXJUYXNrW10pOiBEYXlNYXBFbnRyeVtdIHtcbiAgICByZXR1cm4gdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBzdGFydEhvdXIgPSB0YXNrLnRpbWUgPyB0aGlzLnBhcnNlVGltZVRvSG91cih0YXNrLnRpbWUpIDogOTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSAodGFzay5kdXJhdGlvbiA/PyAzMCkgLyA2MDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZpdHlJZDogYGNhbC0ke3Rhc2suaWR9YCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiB0YXNrLnRpdGxlLFxuICAgICAgICBlbW9qaTogdGhpcy5nZXRTb3VyY2VFbW9qaSh0YXNrLnNvdXJjZSksXG4gICAgICAgIGNhdGVnb3J5OiBcIm1pbmRcIiBhcyBjb25zdCwgLy8gY2FsZW5kYXIgdGFza3MgZGVmYXVsdCB0byBtaW5kXG4gICAgICAgIHN0YXJ0SG91cixcbiAgICAgICAgZW5kSG91cjogc3RhcnRIb3VyICsgZHVyYXRpb25Ib3VycyxcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IHRhc2suZHVyYXRpb24gPz8gMzAsXG4gICAgICAgIHN0YXR1czogdGFzay5kb25lID8gXCJkb25lXCIgYXMgY29uc3QgOiBcInBlbmRpbmdcIiBhcyBjb25zdCxcbiAgICAgICAgaXNDYWxlbmRhclRhc2s6IHRydWUsXG4gICAgICAgIGNhbGVuZGFyU291cmNlOiB0YXNrLnNvdXJjZSxcbiAgICAgICAgY2FsZW5kYXJUYXNrSWQ6IHRhc2suaWQsXG4gICAgICAgIGZpbGVQYXRoOiB0YXNrLmZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiB0YXNrLmxpbmVOdW1iZXIsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBBOiBEYWlseSBOb3RlcyBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGdldERhaWx5Tm90ZVRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBmb2xkZXIgPSB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXI7XG4gICAgaWYgKCFmb2xkZXIpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBGaW5kIHRvZGF5J3MgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IGRhaWx5Tm90ZSA9IGZpbGVzLmZpbmQoKGYpID0+IHtcbiAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBmLmJhc2VuYW1lID09PSB0aGlzLnRvZGF5O1xuICAgIH0pO1xuXG4gICAgaWYgKCFkYWlseU5vdGUpIHJldHVybiBbXTtcblxuICAgIC8vIFJlYWQgY2FjaGVkIGNvbnRlbnQgYW5kIHBhcnNlIHRhc2tzXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShkYWlseU5vdGUpO1xuICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgaWYgKGxpc3RJdGVtLnRhc2sgPT09IHVuZGVmaW5lZCkgY29udGludWU7IC8vIG5vdCBhIGNoZWNrYm94XG5cbiAgICAgIGNvbnN0IGxpbmVTdGFydCA9IGxpc3RJdGVtLnBvc2l0aW9uLnN0YXJ0LmxpbmU7XG5cbiAgICAgIC8vIFJlYWQgdGhlIGxpbmUgY29udGVudCBmcm9tIGNhY2hlIHNlY3Rpb25zXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRMaW5lQ29udGVudChkYWlseU5vdGUsIGxpbmVTdGFydCk7XG4gICAgICBpZiAoIWNvbnRlbnQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUoY29udGVudCk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICBpZDogYGRuLSR7ZGFpbHlOb3RlLnBhdGh9LUwke2xpbmVTdGFydH1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogbGlzdEl0ZW0udGFzayA9PT0gXCJ4XCIgfHwgbGlzdEl0ZW0udGFzayA9PT0gXCJYXCIsXG4gICAgICAgIGZpbGVQYXRoOiBkYWlseU5vdGUucGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogbGluZVN0YXJ0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gUGFyc2UgXCItIFsgXSBUYXNrIG5hbWUgQDE0OjAwIH4zMG1cIiBmb3JtYXRcbiAgcHJpdmF0ZSBwYXJzZVRhc2tMaW5lKGxpbmU6IHN0cmluZyk6IHsgdGl0bGU6IHN0cmluZzsgdGltZT86IHN0cmluZzsgZHVyYXRpb24/OiBudW1iZXIgfSB8IG51bGwge1xuICAgIC8vIFJlbW92ZSBjaGVja2JveCBwcmVmaXg6IFwiLSBbIF0gXCIgb3IgXCItIFt4XSBcIlxuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXlstKl1cXHMqXFxbLj9cXF1cXHMqKC4rKSQvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0ZXh0ID0gbWF0Y2hbMV0udHJpbSgpO1xuXG4gICAgLy8gRXh0cmFjdCBAdGltZSAoZS5nLiwgQDE0OjAwIG9yIEAycG0pXG4gICAgbGV0IHRpbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB0aW1lTWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AKFxcZHsxLDJ9KTooXFxkezJ9KVxcYi8pO1xuICAgIGlmICh0aW1lTWF0Y2gpIHtcbiAgICAgIHRpbWUgPSBgJHt0aW1lTWF0Y2hbMV0ucGFkU3RhcnQoMiwgXCIwXCIpfToke3RpbWVNYXRjaFsyXX1gO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSh0aW1lTWF0Y2hbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJ5IEAycG0gLyBAMTQgZm9ybWF0XG4gICAgICBjb25zdCBzaW1wbGVUaW1lID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSlcXHMqKGFtfHBtKT9cXGIvaSk7XG4gICAgICBpZiAoc2ltcGxlVGltZSkge1xuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KHNpbXBsZVRpbWVbMV0pO1xuICAgICAgICBjb25zdCBwZXJpb2QgPSBzaW1wbGVUaW1lWzJdPy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcInBtXCIgJiYgaG91ciA8IDEyKSBob3VyICs9IDEyO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcImFtXCIgJiYgaG91ciA9PT0gMTIpIGhvdXIgPSAwO1xuICAgICAgICB0aW1lID0gYCR7U3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsIFwiMFwiKX06MDBgO1xuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHNpbXBsZVRpbWVbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IH5kdXJhdGlvbiAoZS5nLiwgfjMwbSwgfjFoLCB+MS41aClcbiAgICBsZXQgZHVyYXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBkdXJhdGlvbk1hdGNoID0gdGV4dC5tYXRjaCgvfihcXGQrKD86XFwuXFxkKyk/KVxccyoobXxtaW58aHxocnxob3VyKXM/XFxiL2kpO1xuICAgIGlmIChkdXJhdGlvbk1hdGNoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoZHVyYXRpb25NYXRjaFsxXSk7XG4gICAgICBjb25zdCB1bml0ID0gZHVyYXRpb25NYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgZHVyYXRpb24gPSB1bml0LnN0YXJ0c1dpdGgoXCJoXCIpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIDYwKSA6IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShkdXJhdGlvbk1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgYW55IHRyYWlsaW5nL2xlYWRpbmcgd2hpdGVzcGFjZSBvciBkYXNoZXNcbiAgICBjb25zdCB0aXRsZSA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xuICAgIGlmICghdGl0bGUpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHRpbWUsIGR1cmF0aW9uIH07XG4gIH1cblxuICBwcml2YXRlIGdldExpbmVDb250ZW50KGZpbGU6IFRGaWxlLCBsaW5lTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBVc2UgdGhlIG1ldGFkYXRhQ2FjaGUgc2VjdGlvbnMgdG8gcmVjb25zdHJ1Y3QgbGluZSBjb250ZW50XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBpZiAoIWNhY2hlKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIFdlIG5lZWQgdG8gcmVhZCBmcm9tIHRoZSB2YXVsdCBjYWNoZSBcdTIwMTQgdHJ5IGdldHRpbmcgY29udGVudCB2aWEgc2VjdGlvbnNcbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBzeW5jaHJvbm91c2x5IHJlYWQgZmlsZSBjb250ZW50LCB1c2UgdGhlIGNhY2hlZCBmcm9udG1hdHRlclxuICAgIC8vIGFuZCBsaXN0IGl0ZW1zIHRvIGJ1aWxkIHdoYXQgd2UgbmVlZFxuICAgIC8vIEFjdHVhbGx5LCBsaXN0IGl0ZW1zIGluIE9ic2lkaWFuIGNhY2hlIGRvbid0IGluY2x1ZGUgdGhlIHRleHQuXG4gICAgLy8gV2UnbGwgbmVlZCB0byByZWFkIHRoZSBmaWxlIGNvbnRlbnQuIFN0b3JlIGl0IGluIGEgbWFwIGR1cmluZyBnYXRoZXIgcGhhc2UuXG4gICAgLy8gRm9yIG5vdywgcmV0dXJuIG51bGwgXHUyMDE0IHRoZSBEYXNoYm9hcmRWaWV3IHdpbGwgcHJlLXJlYWQgZGFpbHkgbm90ZSBjb250ZW50XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDYWxsZWQgYnkgRGFzaGJvYXJkVmlldyB3aXRoIHByZS1yZWFkIGZpbGUgY29udGVudFxuICBnZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQ6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZyk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAvLyBNYXRjaCB0YXNrIGxpbmVzOiAtIFsgXSBvciAtIFt4XVxuICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2ZpbGVQYXRofS1MJHtpfWAsXG4gICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJkYWlseS1ub3RlXCIsXG4gICAgICAgIGRhdGU6IHRoaXMudG9kYXksXG4gICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBpc0RvbmUsXG4gICAgICAgIGZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiBpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW4gSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXRUYXNrc1BsdWdpblRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICAvLyBDaGVjayBpZiBUYXNrcyBwbHVnaW4gaXMgaW5zdGFsbGVkXG4gICAgY29uc3QgdGFza3NQbHVnaW4gPSAodGhpcy5hcHAgYXMgYW55KS5wbHVnaW5zPy5wbHVnaW5zPy5bXCJvYnNpZGlhbi10YXNrcy1wbHVnaW5cIl07XG4gICAgaWYgKCF0YXNrc1BsdWdpbikgcmV0dXJuIFtdO1xuXG4gICAgLy8gVGFza3MgcGx1Z2luIHN0b3JlcyB0YXNrcyB2aWEgbWV0YWRhdGEgY2FjaGVcbiAgICAvLyBXZSBzY2FuIGFsbCBmaWxlcyBmb3IgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgbWF0Y2hpbmcgdG9kYXlcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgY29udGludWU7XG5cbiAgICAgIGZvciAoY29uc3QgbGlzdEl0ZW0gb2YgY2FjaGUubGlzdEl0ZW1zKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFRhc2tzIHBsdWdpbiB1c2VzIGVtb2ppLWJhc2VkIGRhdGVzIGluIHRoZSB0ZXh0OlxuICAgICAgICAvLyBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERCBmb3IgZHVlIGRhdGVcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZWFkIHRoZSBmaWxlIHRvIGNoZWNrLCBidXQgd2UgY2FuIHVzZSB0aGUgZnJvbnRtYXR0ZXItYmFzZWRcbiAgICAgICAgLy8gYXBwcm9hY2ggb3IgdGhlIHBvc2l0aW9uIHRvIGdldCB0aGUgdGV4dC5cbiAgICAgICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luYy1yZWFkLCB3ZSdsbCBjaGVjayBpZiBwb3NpdGlvbnMgbWVudGlvbiB0b2RheS5cbiAgICAgICAgLy8gRm9yIG5vdywgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IGNoZWNrIHVzaW5nIGNhY2hlIGRhdGEuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtc2Nhbm5lZCB0YXNrIGRhdGFcbiAgZ2V0VGFza3NQbHVnaW5UYXNrc0Zyb21GaWxlcyhmaWxlczogeyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9W10pOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGxpbmVzID0gZmlsZS5jb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBUYXNrcyBwbHVnaW4gZHVlIGRhdGU6IFx1RDgzRFx1RENDNSBZWVlZLU1NLUREXG4gICAgICAgIGNvbnN0IGR1ZU1hdGNoID0gbGluZS5tYXRjaCgvXFx1ezFGNEM1fVxccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoIWR1ZU1hdGNoIHx8IGR1ZU1hdGNoWzFdICE9PSB0aGlzLnRvZGF5KSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICAgIGlmICghcGFyc2VkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBBbHNvIGNoZWNrIGZvciBzY2hlZHVsZWQgZGF0ZSBcdTIzRjNcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVkTWF0Y2ggPSBsaW5lLm1hdGNoKC9cXHUyM0YzXFxzKihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvdSk7XG4gICAgICAgIGlmIChzY2hlZHVsZWRNYXRjaCAmJiBzY2hlZHVsZWRNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgaXNEb25lID0gL15bLSpdXFxzKlxcW1t4WF1cXF0vLnRlc3QobGluZSk7XG5cbiAgICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgICAgaWQ6IGB0cC0ke2ZpbGUucGF0aH0tTCR7aX1gLFxuICAgICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUucmVwbGFjZSgvW1xcdXsxRjRDNX1cXHUyM0YzXVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS9ndSwgXCJcIikudHJpbSgpLFxuICAgICAgICAgIHNvdXJjZTogXCJ0YXNrcy1wbHVnaW5cIixcbiAgICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBDOiBCdWlsdC1pbiBRdWljayBUYXNrcyAtLS1cblxuICBwcml2YXRlIGdldFF1aWNrVGFza3MoKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgIC5maWx0ZXIoKHF0KSA9PiBxdC5kYXRlID09PSB0aGlzLnRvZGF5KVxuICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgIGlkOiBgcXQtJHtxdC5pZH1gLFxuICAgICAgICB0aXRsZTogcXQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgQ2FsZW5kYXJUYXNrU291cmNlLFxuICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICB0aW1lOiBxdC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcXQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICB9KSk7XG4gIH1cblxuICAvLyAtLS0gQ29tcGxldGlvbiBoYW5kbGVycyAtLS1cblxuICAvLyBUb2dnbGUgYSBkYWlseSBub3RlIHRhc2sgZG9uZS91bmRvbmUgYnkgcmV3cml0aW5nIHRoZSBjaGVja2JveFxuICBhc3luYyB0b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoOiBzdHJpbmcsIGxpbmVOdW1iZXI6IG51bWJlciwgZG9uZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgIGlmIChsaW5lTnVtYmVyID49IGxpbmVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVOdW1iZXJdO1xuICAgIGlmIChkb25lKSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiW3hdXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiWyBdXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBsaW5lcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBhIFRhc2tzIHBsdWdpbiB0YXNrXG4gIGFzeW5jIHRvZ2dsZVRhc2tzUGx1Z2luVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBTYW1lIG1lY2hhbmlzbSBhcyBkYWlseSBub3RlcyBcdTIwMTQganVzdCB0b2dnbGUgdGhlIGNoZWNrYm94XG4gICAgYXdhaXQgdGhpcy50b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoLCBsaW5lTnVtYmVyLCBkb25lKTtcbiAgfVxuXG4gIC8vIFBvc3Rwb25lIGEgdGFzayB0byB0b21vcnJvd1xuICBhc3luYyBwb3N0cG9uZVRhc2sodGFzazogQ2FsZW5kYXJUYXNrKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0aGlzLnRvZGF5KTtcbiAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuICAgIGNvbnN0IHRvbW9ycm93U3RyID0gdG9tb3Jyb3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICBpZiAodGFzay5zb3VyY2UgPT09IFwicXVpY2stdGFza1wiKSB7XG4gICAgICAvLyBVcGRhdGUgaW4gc2V0dGluZ3NcbiAgICAgIGNvbnN0IHF0ID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbmQoXG4gICAgICAgIChxKSA9PiBgcXQtJHtxLmlkfWAgPT09IHRhc2suaWQgfHwgcS5pZCA9PT0gdGFzay5pZC5yZXBsYWNlKFwicXQtXCIsIFwiXCIpXG4gICAgICApO1xuICAgICAgaWYgKHF0KSB7XG4gICAgICAgIHF0LnBvc3Rwb25lZEZyb20gPSBxdC5wb3N0cG9uZWRGcm9tID8/IHF0LmRhdGU7XG4gICAgICAgIHF0LmRhdGUgPSB0b21vcnJvd1N0cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhc2suc291cmNlID09PSBcInRhc2tzLXBsdWdpblwiICYmIHRhc2suZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0YXNrLmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZmlsZVxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0YXNrLmZpbGVQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgIGlmICh0YXNrLmxpbmVOdW1iZXIgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgbGluZXNbdGFzay5saW5lTnVtYmVyXSA9IGxpbmVzW3Rhc2subGluZU51bWJlcl0ucmVwbGFjZShcbiAgICAgICAgICAvXFx1ezFGNEM1fVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS91LFxuICAgICAgICAgIGBcXHV7MUY0QzV9ICR7dG9tb3Jyb3dTdHJ9YFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEhlbHBlcnMgLS0tXG5cbiAgcHJpdmF0ZSBwYXJzZVRpbWVUb0hvdXIodGltZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBbaCwgbV0gPSB0aW1lLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gaCArIChtID8/IDApIC8gNjA7XG4gIH1cblxuICBwcml2YXRlIGdldFNvdXJjZUVtb2ppKHNvdXJjZTogQ2FsZW5kYXJUYXNrU291cmNlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogcmV0dXJuIFwiXFx1ezFGNEREfVwiO1xuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOiByZXR1cm4gXCJcXHUyNjExXFx1RkUwRlwiO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogcmV0dXJuIFwiXFx1MjZBMVwiO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgSGVybyBDYXJkIENvbXBvbmVudFxuLy8gRnVsbC13aWR0aCBibHVycmVkIGJnIHdpdGggZ3JlZXRpbmcsIHJhbmsgYmFkZ2UsIGFjdGlvbiBidXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5pbXBvcnQgeyB0b1JvbWFuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVyb0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBoZXJvID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm9cIiB9KTtcbiAgaGVyby5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gQmFja2dyb3VuZCBpbWFnZVxuICBpZiAoc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpIHtcbiAgICBjb25zdCBiZyA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1iZ1wiIH0pO1xuICAgIGNvbnN0IHZhdWx0UGF0aCA9IHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kO1xuICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3ZhdWx0UGF0aH1cIilgO1xuICB9XG5cbiAgLy8gRGFyayB2aWduZXR0ZSBvdmVybGF5XG4gIGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1vdmVybGF5XCIgfSk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWNvbnRlbnRcIiB9KTtcblxuICAvLyBUaW1lLWJhc2VkIGdyZWV0aW5nXG4gIGNvbnN0IGdyZWV0aW5nID0gZ2V0R3JlZXRpbmcoc2V0dGluZ3MpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWdyZWV0aW5nXCIsXG4gICAgdGV4dDogYCR7Z3JlZXRpbmd9LCAke3NldHRpbmdzLnVzZXJOYW1lfS5gLFxuICB9KTtcblxuICAvLyBDb250ZXh0dWFsIHN1YnRpdGxlXG4gIGNvbnN0IHN1YnRpdGxlID0gZ2V0U3VidGl0bGUoc2V0dGluZ3MsIGVuZ2luZSk7XG4gIGNvbnRlbnQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tc3VidGl0bGVcIixcbiAgICB0ZXh0OiBzdWJ0aXRsZSxcbiAgfSk7XG5cbiAgLy8gUmFuayBiYWRnZSBwaWxsXG4gIGNvbnN0IHRpdGxlID0gZW5naW5lLmdldER5bmFtaWNUaXRsZSgpO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgY29uc3QgYmFkZ2UgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tcmFuay1iYWRnZVwiIH0pO1xuICBiYWRnZS5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tcmFuay10ZXh0XCIsXG4gICAgdGV4dDogYCR7dGl0bGV9IFx1MDBCNyAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYWN0aW9uc1wiIH0pO1xuXG4gIGNvbnN0IHByb2dyZXNzQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIllvdXIgcHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBldWRhaW1vbmlhIHNlY3Rpb25cbiAgICBjb25zdCBldWRTZWN0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1jYXJkXCIpO1xuICAgIGlmIChldWRTZWN0aW9uKSBldWRTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlZmxlY3RCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWJ0blwiLFxuICAgIHRleHQ6IFwiUmVmbGVjdFwiLFxuICB9KTtcbiAgcmVmbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgcXVvdGUgc2VjdGlvblxuICAgIGNvbnN0IHF1b3RlU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVvdGVcIik7XG4gICAgaWYgKHF1b3RlU2VjdGlvbikgcXVvdGVTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmVldGluZyhzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgY29uc3QgbGFiZWxzID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscztcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpO1xuXG4gIGlmIChob3VyID49IDUgJiYgaG91ciA8IDEyKSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX21vcm5pbmcgPz8gXCJHb29kIG1vcm5pbmdcIjtcbiAgaWYgKGhvdXIgPj0gMTIgJiYgaG91ciA8IDE3KSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX2FmdGVybm9vbiA/PyBcIkdvb2QgYWZ0ZXJub29uXCI7XG4gIGlmIChob3VyID49IDE3ICYmIGhvdXIgPCAyMSkgcmV0dXJuIGxhYmVscy5ncmVldGluZ19ldmVuaW5nID8/IFwiR29vZCBldmVuaW5nXCI7XG4gIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfbmlnaHQgPz8gXCJHb29kIG5pZ2h0XCI7XG59XG5cbmZ1bmN0aW9uIGdldFN1YnRpdGxlKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGVuZ2luZTogT2xlbkVuZ2luZSk6IHN0cmluZyB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG5cbiAgLy8gVGFydGFydXNcbiAgaWYgKHNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICByZXR1cm4gXCJUaGUgdW5kZXJ3b3JsZCBhd2FpdHMgeW91ciBwZW5hbmNlLlwiO1xuICB9XG5cbiAgLy8gQm9zcyBkYW5nZXIgem9uZVxuICBpZiAoYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgIHJldHVybiBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuXCI7XG4gIH1cblxuICAvLyBBY3RpdmUgc3RyZWFrXG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGlmIChzdHJlYWsgPj0gMykge1xuICAgIHJldHVybiBgJHtzdHJlYWt9IGRheXMgc3Ryb25nLiBLZWVwIHRoZSBmbGFtZS5gO1xuICB9XG5cbiAgLy8gRGVmYXVsdFxuICByZXR1cm4gXCJTdGVwIGJ5IHN0ZXAsIHlvdSBzaGFwZSB5b3VyIHBhdGguXCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBFdWRhaW1vbmlhIEJhciBDb21wb25lbnRcbi8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXIsIHN0YXQgY2FyZHMsIGNhdGVnb3J5IHJvd3Mgd2l0aCBpY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQ0FURUdPUllfSUNPTlM6IFJlY29yZDxDYXRlZ29yeSwgc3RyaW5nPiA9IHtcbiAgYm9keTogXCJcXHV7MUYzQ0J9XCIsIC8vIHdlaWdodGxpZnRlclxuICBtaW5kOiBcIlxcdXsxRjREQX1cIiwgLy8gYm9va3NcbiAgc3Bpcml0OiBcIlxcdXsxRjU0QX1cIiwgLy8gZG92ZVxufTtcblxuY29uc3QgVE9UQUxfU0VHTUVOVFMgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFCYXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICAvLyAtLS0gMS4gRXVkYWltb25pYSBDYXJkIChzZWdtZW50ZWQgYmFyICsgY2hhcHRlcikgLS0tXG4gIHJlbmRlckV1ZGFpbW9uaWFDYXJkKGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlckluZGV4KTtcblxuICAvLyAtLS0gMi4gU3RhdCBDYXJkcyBSb3cgKHNlcGFyYXRlIGZyb20gdGhlIGNhcmQpIC0tLVxuICByZW5kZXJTdGF0Q2FyZHMoY29udGFpbmVyLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDEpO1xuXG4gIC8vIC0tLSAzLiBDYXRlZ29yaWVzIENhcmQgKGljb24gcm93cyB3aXRoIGJhcnMpIC0tLVxuICByZW5kZXJDYXRlZ29yaWVzQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDIpO1xufVxuXG4vLyAtLS0tIEV1ZGFpbW9uaWEgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEhlYWRlcjogdGl0bGUgKyBYUFxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtaGVhZGVyXCIgfSk7XG4gIGNvbnN0IGV1ZEluZGV4ID0gZW5naW5lLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuXG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS10aXRsZVwiLFxuICAgIHRleHQ6IGBFdWRhaW1vbmlhICR7dG9Sb21hbihldWRJbmRleCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG90YWxYUCA9IGVuZ2luZS5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wueHAsIDApO1xuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEteHBcIixcbiAgICB0ZXh0OiBgJHt0b3RhbFhQfSBYUGAsXG4gIH0pO1xuXG4gIC8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBlbmdpbmUuZ2V0RXVkYWltb25pYVByb2dyZXNzKCk7IC8vIDAtMTAwXG4gIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcihwcm9ncmVzcyAvIFRPVEFMX1NFR01FTlRTKTtcbiAgY29uc3QgaGFzUGFydGlhbCA9IHByb2dyZXNzICUgVE9UQUxfU0VHTUVOVFMgPiAwO1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRzXCIgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUT1RBTF9TRUdNRU5UUzsgaSsrKSB7XG4gICAgbGV0IGNscyA9IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRcIjtcbiAgICBpZiAoaSA8IGZpbGxlZFNlZ21lbnRzKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtZmlsbGVkXCI7XG4gICAgfSBlbHNlIGlmIChpID09PSBmaWxsZWRTZWdtZW50cyAmJiBoYXNQYXJ0aWFsKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtcGFydGlhbFwiO1xuICAgIH1cbiAgICBzZWdtZW50cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gIH1cblxuICAvLyBDaGFwdGVyIGxhYmVsXG4gIGNvbnN0IGNoYXB0ZXIgPSBlbmdpbmUuZ2V0Q2hhcHRlcigpO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWNoYXB0ZXJcIixcbiAgICB0ZXh0OiBgQ2hhcHRlciAke3RvUm9tYW4oY2hhcHRlci5udW1iZXIpfTogJHtjaGFwdGVyLm5hbWV9YCxcbiAgfSk7XG59XG5cbi8vIC0tLS0gU3RhdCBDYXJkcyAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclN0YXRDYXJkcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdHMtZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCB0b3RhbFRhc2tzID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcbiAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldE92ZXJhbGxTdHJlYWsoKTtcbiAgY29uc3QgcHJlc2VuY2UgPSBlbmdpbmUuZ2V0RGF5c09mUHJlc2VuY2UoKTtcblxuICAvLyBPYmplY3RpdmVzIGNhcmRcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUYzQUZ9XCIsIHRvdGFsVGFza3MsIFwiT2JqZWN0aXZlc1wiKTtcblxuICAvLyBTdHJlYWsgY2FyZCAod2l0aCBzdHJlYWsgZG90cylcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUY1MjV9XCIsIHN0cmVhaywgXCJTdHJlYWtcIiwgc3RyZWFrKTtcblxuICAvLyBDb25zaXN0ZW5jeSBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezI3Mjh9XCIsIHByZXNlbmNlLCBcIkNvbnNpc3RlbmN5XCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0Q2FyZChcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgaWNvbjogc3RyaW5nLFxuICB2YWx1ZTogbnVtYmVyLFxuICBsYWJlbDogc3RyaW5nLFxuICBzdHJlYWtEYXlzPzogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zdGF0LWNhcmRcIiB9KTtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWljb25cIiwgdGV4dDogaWNvbiB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC12YWx1ZVwiLCB0ZXh0OiBTdHJpbmcodmFsdWUpIH0pO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFN0cmVhayBkb3RzIChzaG93IGxhc3QgNyBkYXlzKVxuICBpZiAoc3RyZWFrRGF5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG90cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWRvdHNcIiB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgbGV0IGNscyA9IFwib2xlbi1zdGF0LWRvdFwiO1xuICAgICAgaWYgKGkgPCBzdHJlYWtEYXlzKSB7XG4gICAgICAgIGNscyArPSBcIiBvbGVuLXN0YXQtZG90LWFjdGl2ZVwiO1xuICAgICAgfVxuICAgICAgZG90cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0gQ2F0ZWdvcmllcyBDYXJkIC0tLS1cblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllc0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gRHluYW1pYyB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWR5bmFtaWMtdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG5cbiAgLy8gRGl2aWRlclxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBDYXRlZ29yeSByb3dzXG4gIGNvbnN0IGdyaWQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3JpZXMtZ3JpZFwiIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICB7IGtleTogXCJtaW5kXCIsIGxhYmVsOiBcIk1pbmRcIiB9LFxuICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICBdO1xuXG4gIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9IGVuZ2luZS5nZXRDYXRlZ29yeUxldmVsKGNhdC5rZXkpO1xuICAgIGNvbnN0IGNvbG9yID0gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV07XG5cbiAgICBjb25zdCByb3cgPSBncmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LXJvd1wiIH0pO1xuXG4gICAgLy8gSWNvbiBib3hcbiAgICBjb25zdCBpY29uQm94ID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWljb25cIiB9KTtcbiAgICBpY29uQm94LnN0eWxlLmJhY2tncm91bmQgPSBgJHtjb2xvcn0yMmA7IC8vIDEzJSBvcGFjaXR5IHRpbnRcbiAgICBpY29uQm94LnRleHRDb250ZW50ID0gQ0FURUdPUllfSUNPTlNbY2F0LmtleV07XG5cbiAgICAvLyBJbmZvIGNvbHVtblxuICAgIGNvbnN0IGluZm8gPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktaW5mb1wiIH0pO1xuXG4gICAgLy8gTmFtZSArIGxldmVsIHJvd1xuICAgIGNvbnN0IG5hbWVSb3cgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LW5hbWUtcm93XCIgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lXCIsIHRleHQ6IGNhdC5sYWJlbCB9KTtcbiAgICBuYW1lUm93LmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1jYXRlZ29yeS1sZXZlbC10ZXh0XCIsXG4gICAgICB0ZXh0OiBgTHYgJHtsZXZlbC5sZXZlbH0gXHUwMEI3ICR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9LzEwMGAsXG4gICAgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyBiYXJcbiAgICBjb25zdCBiYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhclwiIH0pO1xuICAgIGNvbnN0IGZpbGwgPSBiYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktYmFyLWZpbGxcIiB9KTtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9JWA7XG4gICAgZmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERpcmVjdGl2ZSBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBjYXJkIG9uIGRhc2hib2FyZCArIGV4cGFuZGVkIGJvdHRvbS1zaGVldCBvdmVybGF5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFByaW9yaXR5UmVhc29uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXJlY3RpdmVDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvbkVudGVyV29ya3NwYWNlPzogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHN1Z2dlc3Rpb24gPSBlbmdpbmUuZ2V0U3VnZ2VzdGlvbigpO1xuICBpZiAoIXN1Z2dlc3Rpb24pIHJldHVybjtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGlyZWN0aXZlX3RpdGxlID8/IFwiVEhFIERJUkVDVElWRVwiO1xuICBjb25zdCBiZWdpbkxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5iZWdpbl93b3Jrc3BhY2UgPz8gXCJFTlRFUiBXT1JLU1BBQ0VcIjtcbiAgY29uc3Qgbm90Tm93TGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLm5vdF9ub3cgPz8gXCJOT1QgTk9XXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ29tcGFjdCBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZCBvbGVuLWRpcmVjdGl2ZVwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXIgd2l0aCBiYWRnZVxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1oZWFkZXJcIiB9KTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYmFkZ2VcIiB9KTtcbiAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhZGdlQ29sb3Ioc3VnZ2VzdGlvbi5yZWFzb24pO1xuXG4gIC8vIEFjdGl2aXR5IGluZm9cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGl2aXR5XCIsXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICBjb25zdCBuZWdsZWN0VGV4dCA9IHN1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmUgPCA5OTlcbiAgICA/IGAke3N1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmV9IGRheXMgbmVnbGVjdGVkYFxuICAgIDogXCJOb3QgeWV0IHN0YXJ0ZWRcIjtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLW5lZ2xlY3RcIiwgdGV4dDogbmVnbGVjdFRleHQgfSk7XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBiZWdpbkJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogYmVnaW5MYWJlbCxcbiAgfSk7XG4gIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25FbnRlcldvcmtzcGFjZT8uKHN1Z2dlc3Rpb24uYWN0aXZpdHlJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdE5vd0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBub3ROb3dMYWJlbCxcbiAgfSk7XG4gIG5vdE5vd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIERpc21pc3MgdGhpcyBjYXJkIHdpdGggYSBmYWRlXG4gICAgY2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTEwcHgpXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zcyBlYXNlXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LCAzMDApO1xuICB9KTtcblxuICAvLyBUYXAgY2FyZCB0byBleHBhbmRcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dFeHBhbmRlZERpcmVjdGl2ZShjb250YWluZXIsIHNldHRpbmdzLCBzdWdnZXN0aW9uLCBiZWdpbkxhYmVsLCBub3ROb3dMYWJlbCwgb25FbnRlcldvcmtzcGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RXhwYW5kZWREaXJlY3RpdmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN1Z2dlc3Rpb246IHsgYWN0aXZpdHlJZDogc3RyaW5nOyBhY3Rpdml0eU5hbWU6IHN0cmluZzsgZW1vamk6IHN0cmluZzsgcmVhc29uOiBQcmlvcml0eVJlYXNvbjsgZGF5c1NpbmNlTGFzdERvbmU6IG51bWJlcjsgbG9yZVRleHQ6IHN0cmluZyB9LFxuICBiZWdpbkxhYmVsOiBzdHJpbmcsXG4gIG5vdE5vd0xhYmVsOiBzdHJpbmcsXG4gIG9uRW50ZXJXb3Jrc3BhY2U/OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgLy8gQ3JlYXRlIG92ZXJsYXlcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcblxuICAvLyBIYW5kbGUgYmFyXG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIC8vIFRpdGxlXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsXG4gICAgdGV4dDogc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kaXJlY3RpdmVfdGl0bGUgPz8gXCJUSEUgRElSRUNUSVZFXCIsXG4gIH0pO1xuXG4gIC8vIEFjdGl2aXR5IG5hbWVcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAyMnB4OyBtYXJnaW46IDE2cHggMCA4cHg7XCIgfSxcbiAgICB0ZXh0OiBgJHtzdWdnZXN0aW9uLmVtb2ppfSAke3N1Z2dlc3Rpb24uYWN0aXZpdHlOYW1lfWAsXG4gIH0pO1xuXG4gIC8vIE5lZ2xlY3QgZGVzY3JpcHRpb25cbiAgY29uc3QgbmVnbGVjdERlc2MgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gXG4gICAgOiBcIkEgbmV3IHBhdGggYXdhaXRzLiBUYWtlIHRoZSBmaXJzdCBzdGVwLlwiO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib2R5LWl0YWxpY1wiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTJweDtcIiB9LFxuICAgIHRleHQ6IG5lZ2xlY3REZXNjLFxuICB9KTtcblxuICAvLyBMb3JlIHRleHRcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXNoZWV0LWxvcmVcIixcbiAgICB0ZXh0OiBgXCIke3N1Z2dlc3Rpb24ubG9yZVRleHR9XCJgLFxuICB9KTtcblxuICAvLyBSYW5kb20gcXVvdGVcbiAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICBjb25zdCBxdW90ZVNlY3Rpb24gPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1xdW90ZVwiIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgfSk7XG4gIHF1b3RlU2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgfSk7XG5cbiAgLy8gQWN0aW9uc1xuICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcbiAgYWN0aW9ucy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgYWN0aW9ucy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgICBvbkVudGVyV29ya3NwYWNlPy4oc3VnZ2VzdGlvbi5hY3Rpdml0eUlkKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90Tm93QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgIHRleHQ6IG5vdE5vd0xhYmVsLFxuICB9KTtcbiAgbm90Tm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICAvLyBDbG9zZSBvbiBvdmVybGF5IHRhcFxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVNoZWV0KCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgLy8gQXBwZW5kIGFuZCBhbmltYXRlIGluXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJhZGdlQ29sb3IocmVhc29uOiBQcmlvcml0eVJlYXNvbik6IHN0cmluZyB7XG4gIHN3aXRjaCAocmVhc29uKSB7XG4gICAgY2FzZSBcImRlYXRoXCI6IHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgICBjYXNlIFwiYm9zc1wiOiByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgY2FzZSBcIm5lZ2xlY3RcIjogcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIGNhc2UgXCJ3ZWVrbHlcIjogcmV0dXJuIFwiIzNiODJmNlwiO1xuICAgIGNhc2UgXCJjaGFpblwiOiByZXR1cm4gXCIjOGI1Y2Y2XCI7XG4gICAgY2FzZSBcInRpbWVcIjogcmV0dXJuIFwiIzA2YjZkNFwiO1xuICAgIGNhc2UgXCJiYWxhbmNlZFwiOiByZXR1cm4gXCIjZmZmZmZmXCI7XG4gICAgZGVmYXVsdDogcmV0dXJuIFwiIzkyOGQ4NVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIFN0YXR1cyBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBib3NzIEhQIGJhciB3aXRoIHRpZXIgYW5kIHJhbmtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0Jvc3NFbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvc3NTdGF0dXNDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG4gIGNvbnN0IHN0YXR1cyA9IGJvc3NFbmdpbmUuZ2V0Qm9zc1N0YXR1cygpO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5ib3NzX3N0YXR1c190aXRsZSA/PyBcIkJPU1MgU1RBVFVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2FyZFxuICBjb25zdCBjYXJkQ2xzID0gc3RhdHVzLmluVGFydGFydXMgPyBcIm9sZW4tY2FyZC1jb21wYWN0IG9sZW4tY2FyZC10YXJ0YXJ1c1wiIDogXCJvbGVuLWNhcmQtY29tcGFjdFwiO1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogY2FyZENscyB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gUm93OiBlbW9qaSArIGluZm9cbiAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ib3NzLXJvd1wiIH0pO1xuXG4gIHJvdy5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWJvc3MtZW1vamlcIiwgdGV4dDogZ2V0Qm9zc0Vtb2ppKHN0YXR1cy50aWVyKSB9KTtcblxuICBjb25zdCBpbmZvID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWJvc3MtaW5mb1wiIH0pO1xuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYm9zcy1uYW1lXCIsIHRleHQ6IHN0YXR1cy5ib3NzLm5hbWUgfSk7XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWJvc3MtdGllclwiLFxuICAgIHRleHQ6IGBUaWVyICR7c3RhdHVzLnRpZXJ9IFx1MDBCNyAke3N0YXR1cy5yYW5rfWAsXG4gIH0pO1xuXG4gIC8vIEhQIGJhclxuICBjb25zdCBocEJhciA9IGluZm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taHAtYmFyXCIgfSk7XG4gIGNvbnN0IGhwRmlsbCA9IGhwQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhwLWJhci1maWxsXCIgfSk7XG4gIGhwRmlsbC5zdHlsZS53aWR0aCA9IGAke3N0YXR1cy5wZXJjZW50fSVgO1xuICBocEZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGJvc3NFbmdpbmUuZ2V0SFBDb2xvcihzdGF0dXMucGVyY2VudCk7XG5cbiAgLy8gSFAgdGV4dFxuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib3NzLWhwLXRleHRcIixcbiAgICB0ZXh0OiBgJHtzdGF0dXMuY3VycmVudEhQfS8ke3N0YXR1cy5tYXhIUH0gSFAgKCR7c3RhdHVzLnBlcmNlbnR9JSlgLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9zc0Vtb2ppKHRpZXI6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGVtb2ppczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgICAxOiBcIlxcdXsxRjQ3Qn1cIiwgMjogXCJcXHV7MUY5REN9XCIsIDM6IFwiXFx1ezFGNDA5fVwiLCA0OiBcIlxcdXsxRjQwMn1cIixcbiAgICA1OiBcIlxcdXsxRjQwRH1cIiwgNjogXCJcXHV7MUY5ODF9XCIsIDc6IFwiXFx1ezFGNTI1fVwiLCA4OiBcIlxcdXsxRjQzQX1cIixcbiAgICA5OiBcIlxcdXsxRjMwQX1cIiwgMTA6IFwiXFx1ezFGNDdGfVwiLCAxMTogXCJcXHV7MUYzMjl9XCIsIDEyOiBcIlxcdTIzMUJcIixcbiAgICAxMzogXCJcXHV7MUYzMDB9XCIsXG4gIH07XG4gIHJldHVybiBlbW9qaXNbdGllcl0gPz8gXCJcXHUyNjk0XFx1RkUwRlwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgV2Vla2x5IFJoeXRobSBDb21wb25lbnRcbi8vIDctZGF5IGJhciBjaGFydCB3aXRoIGNhdGVnb3J5IHN0YWNraW5nICsgc3RhdHMgcm93XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXZWVrbHlSaHl0aG0oXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMud2Vla2x5X3JoeXRobV90aXRsZSA/PyBcIldFRUtMWSBSSFlUSE1cIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBTdGF0cyByb3dcbiAgY29uc3Qgc3RhdHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0c1wiIH0pO1xuXG4gIGNvbnN0IGFjdGl2ZURheXMgPSBlbmdpbmUuZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk7XG4gIGNvbnN0IGJlc3REYXkgPSBlbmdpbmUuZ2V0QmVzdERheVRoaXNXZWVrKCk7XG4gIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSBlbmdpbmUuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuXG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIFN0cmluZyhhY3RpdmVEYXlzKSArIFwiLzdcIiwgXCJBY3RpdmUgZGF5c1wiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgYmVzdERheSwgXCJCZXN0IGRheVwiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgU3RyaW5nKHRvdGFsQ29tcGxldGlvbnMpLCBcIlRvdGFsXCIpO1xuXG4gIC8vIERpdmlkZXJcbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQmFyIGNoYXJ0XG4gIGNvbnN0IHdlZWtseURhdGEgPSBlbmdpbmUuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheVN0ciA9IG5ldyBEYXRlKG5vdykudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgLy8gRmluZCBtYXggdG90YWwgZm9yIHNjYWxpbmdcbiAgbGV0IG1heFRvdGFsID0gMTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla2x5RGF0YSkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgaWYgKHRvdGFsID4gbWF4VG90YWwpIG1heFRvdGFsID0gdG90YWw7XG4gIH1cblxuICBjb25zdCBiYXJzQ29udGFpbmVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyc1wiIH0pO1xuXG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtseURhdGEpIHtcbiAgICBjb25zdCBjb2wgPSBiYXJzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItY29sXCIgfSk7XG5cbiAgICAvLyBTdGFja2VkIGJhclxuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG5cbiAgICBjb25zdCBiYXJIZWlnaHQgPSBtYXhUb3RhbCA+IDAgPyBNYXRoLm1heCg0LCAodG90YWwgLyBtYXhUb3RhbCkgKiAxMDApIDogNDtcbiAgICBjb25zdCBiYXJFbCA9IGNvbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyXCIgfSk7XG4gICAgYmFyRWwuc3R5bGUuaGVpZ2h0ID0gYCR7YmFySGVpZ2h0fXB4YDtcbiAgICBiYXJFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjRweFwiO1xuXG4gICAgaWYgKGRheS5kYXRlID09PSB0b2RheVN0cikge1xuICAgICAgYmFyRWwuY2xhc3NMaXN0LmFkZChcIm9sZW4td2Vla2x5LWJhci10b2RheVwiKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhY2tlZCBzZWdtZW50c1xuICAgIGNvbnN0IGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXTtcbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBjb25zdCBjYXRDb3VudCA9IGRheS5jb21wbGV0aW9ucy5nZXQoY2F0KSA/PyAwO1xuICAgICAgaWYgKGNhdENvdW50ID09PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHNlZ0hlaWdodCA9IHRvdGFsID4gMCA/IChjYXRDb3VudCAvIHRvdGFsKSAqIDEwMCA6IDA7XG4gICAgICBjb25zdCBzZWcgPSBiYXJFbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyLXNlZ21lbnRcIiB9KTtcbiAgICAgIHNlZy5zdHlsZS5oZWlnaHQgPSBgJHtzZWdIZWlnaHR9JWA7XG4gICAgICBzZWcuc3R5bGUuYmFja2dyb3VuZCA9IGdldENhdGVnb3J5Q29sb3IoY2F0LCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gY29tcGxldGlvbnMsIHNob3cgZW1wdHkgYmFyXG4gICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICBiYXJFbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXCI7XG4gICAgfVxuXG4gICAgLy8gRGF5IGxhYmVsXG4gICAgY29sLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LWRheS1sYWJlbFwiLCB0ZXh0OiBkYXkuZGF5LmNoYXJBdCgwKSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWVrbHlTdGF0KHBhcmVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3Qgc3RhdCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdFwiIH0pO1xuICBzdGF0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXQtdmFsdWVcIiwgdGV4dDogdmFsdWUgfSk7XG4gIHN0YXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdC1sYWJlbFwiLCB0ZXh0OiBsYWJlbCB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlDb2xvcihjYXRlZ29yeTogQ2F0ZWdvcnksIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpOiBzdHJpbmcge1xuICByZXR1cm4gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQWN0aXZpdHkgR3JpZCBDb21wb25lbnRcbi8vIDItY29sdW1uIGdyaWQgb2YgYWN0aXZpdHkgY2FyZHMgd2l0aCBwcm9ncmVzcyByaW5nc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWN0aXZpdHlHcmlkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmFjdGl2aXR5X2dyaWRfdGl0bGUgPz8gXCJBQ1RJVklUSUVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gR3JpZCBjb250YWluZXJcbiAgY29uc3QgZ3JpZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1ncmlkXCIgfSk7XG4gIGdyaWQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBzZXR0aW5ncy5kZXZDb25maWcuYWN0aXZpdHlHcmlkQ29sdW1ucyA/PyAyO1xuICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y29sdW1uc30sIDFmcilgO1xuXG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBlbmdpbmUuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcblxuICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICBjb25zdCBjYXJkID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1jYXJkXCIgfSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgYmFyXG4gICAgY29uc3QgYWNjZW50ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2FjdGl2aXR5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcblxuICAgIC8vIFRvcCByb3c6IGVtb2ppICsgc3RhdHVzIGRvdFxuICAgIGNvbnN0IHRvcCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktdG9wXCIgfSk7XG4gICAgdG9wLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktZW1vamlcIiwgdGV4dDogYWN0aXZpdHkuZW1vamkgfSk7XG5cbiAgICBjb25zdCBkYXlzU2luY2UgPSBlbmdpbmUuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgIGNvbnN0IGRvdENscyA9IGdldERvdENsYXNzKGRheXNTaW5jZSk7XG4gICAgdG9wLmNyZWF0ZURpdih7IGNsczogYG9sZW4tYWN0aXZpdHktZG90ICR7ZG90Q2xzfWAgfSk7XG5cbiAgICAvLyBBY3Rpdml0eSBuYW1lXG4gICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFjdGl2aXR5LW5hbWVcIiwgdGV4dDogYWN0aXZpdHkubmFtZSB9KTtcblxuICAgIC8vIFdlZWtseSBwcm9ncmVzc1xuICAgIGNvbnN0IHByb2dyZXNzID0gZW5naW5lLmdldFdlZWtseVByb2dyZXNzKGFjdGl2aXR5LmlkKTtcbiAgICBjb25zdCBwcm9ncmVzc1JvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3NcIiB9KTtcblxuICAgIC8vIFByb2dyZXNzIHJpbmcgKFNWRylcbiAgICBjb25zdCByaW5nID0gY3JlYXRlUHJvZ3Jlc3NSaW5nKHByb2dyZXNzLmRvbmUsIHByb2dyZXNzLnRhcmdldCwgc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbYWN0aXZpdHkuY2F0ZWdvcnldKTtcbiAgICBwcm9ncmVzc1Jvdy5hcHBlbmRDaGlsZChyaW5nKTtcblxuICAgIHByb2dyZXNzUm93LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzLXRleHRcIixcbiAgICAgIHRleHQ6IGAke3Byb2dyZXNzLmRvbmV9IG9mICR7cHJvZ3Jlc3MudGFyZ2V0fWAsXG4gICAgfSk7XG5cbiAgICAvLyBTdHJlYWtcbiAgICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0QWN0aXZpdHlTdHJlYWsoYWN0aXZpdHkuaWQpO1xuICAgIGlmIChzdHJlYWsgPiAwKSB7XG4gICAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tYWN0aXZpdHktc3RyZWFrXCIsXG4gICAgICAgIHRleHQ6IGAke3N0cmVha30gZGF5IHN0cmVha2AsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RG90Q2xhc3MoZGF5c1NpbmNlOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoZGF5c1NpbmNlID09PSAwKSByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1ncmVlblwiO1xuICBpZiAoZGF5c1NpbmNlIDw9IDEpIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LXllbGxvd1wiO1xuICByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1yZWRcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NSaW5nKGRvbmU6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcbiAgY29uc3Qgc2l6ZSA9IDI0O1xuICBjb25zdCBzdHJva2VXaWR0aCA9IDIuNTtcbiAgY29uc3QgcmFkaXVzID0gKHNpemUgLSBzdHJva2VXaWR0aCkgLyAyO1xuICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiByYWRpdXM7XG4gIGNvbnN0IHBlcmNlbnQgPSB0YXJnZXQgPiAwID8gTWF0aC5taW4oMSwgZG9uZSAvIHRhcmdldCkgOiAwO1xuICBjb25zdCBkYXNoT2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAqICgxIC0gcGVyY2VudCk7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoc2l6ZSkpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhzaXplKSk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHtzaXplfSAke3NpemV9YCk7XG4gIHN2Zy5jbGFzc0xpc3QuYWRkKFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzcy1yaW5nXCIpO1xuXG4gIC8vIEJhY2tncm91bmQgY2lyY2xlXG4gIGNvbnN0IGJnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHN2Zy5hcHBlbmRDaGlsZChiZ0NpcmNsZSk7XG5cbiAgLy8gUHJvZ3Jlc3MgY2lyY2xlXG4gIGNvbnN0IHByb2dyZXNzQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgY29sb3IpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgU3RyaW5nKGNpcmN1bWZlcmVuY2UpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgU3RyaW5nKGRhc2hPZmZzZXQpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoLTkwICR7c2l6ZSAvIDJ9ICR7c2l6ZSAvIDJ9KWApO1xuICBzdmcuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NDaXJjbGUpO1xuXG4gIHJldHVybiBzdmc7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGUgQ2hpcHMgQ29tcG9uZW50XG4vLyBIb3Jpem9udGFsIHNjcm9sbGFibGUgY2hpcHMgZm9yIHNlbGYtY2FyZSB0YXNrIHRyYWNraW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFRlbXBsZVRhc2sgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRlbXBsZUNoaXBzKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25UZW1wbGVVcGRhdGU6ICh0YXNrSWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGlmICghc2V0dGluZ3MudGVtcGxlVGFza3MgfHwgc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLnRlbXBsZV90aXRsZSA/PyBcIlRIRSBURU1QTEVcIjtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcblxuICAvLyBTZWN0aW9uXG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxlLXNlY3Rpb25cIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gVGl0bGVcbiAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2hpcHMgY29udGFpbmVyXG4gIGNvbnN0IGNoaXBzID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcHNcIiB9KTtcbiAgY2hpcHMuc3R5bGUubWFyZ2luVG9wID0gXCI4cHhcIjtcblxuICBmb3IgKGNvbnN0IHRhc2sgb2Ygc2V0dGluZ3MudGVtcGxlVGFza3MpIHtcbiAgICBjb25zdCBzdGF0dXMgPSBnZXRUYXNrU3RhdHVzKHRhc2ssIG5vdyk7XG5cbiAgICBjb25zdCBjaGlwQ2xzID0gYG9sZW4tdGVtcGxlLWNoaXAgJHtzdGF0dXMuY2hpcENsYXNzfWA7XG4gICAgY29uc3QgY2hpcCA9IGNoaXBzLmNyZWF0ZURpdih7IGNsczogY2hpcENscyB9KTtcblxuICAgIGNoaXAuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXAtZW1vamlcIiwgdGV4dDogdGFzay5lbW9qaSB9KTtcbiAgICBjaGlwLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwLXRleHRcIiwgdGV4dDogYCR7dGFzay5uYW1lfSBcdTAwQjcgJHtzdGF0dXMudGV4dH1gIH0pO1xuXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb25UZW1wbGVVcGRhdGUodGFzay5pZCk7XG4gICAgICAvLyBWaXN1YWwgZmVlZGJhY2tcbiAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwLjkpXCI7XG4gICAgICBjaGlwLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgY2hpcC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFRhc2tTdGF0dXMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNoaXBDbGFzczogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrU3RhdHVzKHRhc2s6IFRlbXBsZVRhc2ssIG5vdzogRGF0ZSk6IFRhc2tTdGF0dXMge1xuICBpZiAoIXRhc2subGFzdENvbXBsZXRlZCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZSh0YXNrLmxhc3RDb21wbGV0ZWQpO1xuICBjb25zdCBtc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gIGNvbnN0IGRheXNTaW5jZSA9IE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSBsYXN0LmdldFRpbWUoKSkgLyBtc1BlckRheSk7XG4gIGNvbnN0IGRheXNVbnRpbER1ZSA9IHRhc2suaW50ZXJ2YWxEYXlzIC0gZGF5c1NpbmNlO1xuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMSkge1xuICAgIHJldHVybiB7IHRleHQ6IFwiZHVlIHRvZGF5XCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLXdhcm5cIiB9O1xuICB9XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAyKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogYGR1ZSBpbiAke2RheXNVbnRpbER1ZX1kYCwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtd2FyblwiIH07XG4gIH1cblxuICByZXR1cm4geyB0ZXh0OiBgaW4gJHtkYXlzVW50aWxEdWV9ZGAsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW9rXCIgfTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFF1b3RlIEZvb3RlciBDb21wb25lbnRcbi8vIFJvdGF0aW5nIHN0b2ljIHF1b3RlIGF0IHRoZSBib3R0b20gb2YgdGhlIGRhc2hib2FyZFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJRdW90ZUZvb3RlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHF1b3RlID0gZ2V0UXVvdGUoYXBwLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1xdW90ZVwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgdGV4dDogYFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgfSk7XG5cbiAgaWYgKHF1b3RlLmF0dHJpYnV0aW9uKSB7XG4gICAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFF1b3RlIHtcbiAgdGV4dDogc3RyaW5nO1xuICBhdHRyaWJ1dGlvbjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRRdW90ZShcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiBRdW90ZSB7XG4gIC8vIFRyeSB2YXVsdCBmb2xkZXIgcXVvdGVzIGZpcnN0XG4gIGlmIChzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpIHtcbiAgICBjb25zdCB2YXVsdFF1b3RlcyA9IGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwLCBzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpO1xuICAgIGlmICh2YXVsdFF1b3Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcGlja1F1b3RlKHZhdWx0UXVvdGVzLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbGJhY2sgdG8gaGFyZGNvZGVkIHF1b3Rlc1xuICByZXR1cm4gcGlja1F1b3RlKEZBTExCQUNLX1FVT1RFUywgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xufVxuXG5mdW5jdGlvbiBwaWNrUXVvdGUoXG4gIHF1b3RlczogUXVvdGVbXSxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IFF1b3RlIHtcbiAgaWYgKHF1b3Rlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIlRoZSB1bmV4YW1pbmVkIGxpZmUgaXMgbm90IHdvcnRoIGxpdmluZy5cIiwgYXR0cmlidXRpb246IFwiU29jcmF0ZXNcIiB9O1xuICB9XG5cbiAgLy8gQXZvaWQgcmVjZW50bHkgc2hvd24gcXVvdGVzXG4gIGNvbnN0IHJlY2VudElkcyA9IHNldHRpbmdzLnJlY2VudFF1b3RlSWRzID8/IFtdO1xuICBjb25zdCBhdmFpbGFibGUgPSBxdW90ZXNcbiAgICAubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKVxuICAgIC5maWx0ZXIoKHsgaSB9KSA9PiAhcmVjZW50SWRzLmluY2x1ZGVzKGkpKTtcblxuICBjb25zdCBwb29sID0gYXZhaWxhYmxlLmxlbmd0aCA+IDAgPyBhdmFpbGFibGUgOiBxdW90ZXMubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKTtcbiAgY29uc3QgcGljayA9IHBvb2xbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9vbC5sZW5ndGgpXTtcblxuICAvLyBUcmFjayByZWNlbnQgKGtlZXAgbGFzdCA1KVxuICBjb25zdCBuZXdSZWNlbnQgPSBbLi4ucmVjZW50SWRzLCBwaWNrLmldLnNsaWNlKC1NYXRoLm1pbig1LCBNYXRoLmZsb29yKHF1b3Rlcy5sZW5ndGggLyAyKSkpO1xuICBvblNldHRpbmdzVXBkYXRlKHtcbiAgICBsYXN0UXVvdGVJbmRleDogcGljay5pLFxuICAgIHJlY2VudFF1b3RlSWRzOiBuZXdSZWNlbnQsXG4gIH0pO1xuXG4gIHJldHVybiBwaWNrLnE7XG59XG5cbmZ1bmN0aW9uIGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwOiBBcHAsIGZvbGRlclBhdGg6IHN0cmluZyk6IFF1b3RlW10ge1xuICBjb25zdCBxdW90ZXM6IFF1b3RlW10gPSBbXTtcbiAgY29uc3QgYWJzdHJhY3RGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXJQYXRoKTtcbiAgaWYgKCFhYnN0cmFjdEZpbGUpIHJldHVybiBxdW90ZXM7XG5cbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcigoZikgPT5cbiAgICBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpXG4gICk7XG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgY29udGludWU7XG5cbiAgICAvLyBPbmUgcXVvdGUgcGVyIGZpbGUgKGRlZmF1bHQgbW9kZSlcbiAgICBjb25zdCBuYW1lID0gZmlsZS5iYXNlbmFtZTtcbiAgICBjb25zdCBwYXJ0cyA9IHNwbGl0QXR0cmlidXRpb24obmFtZSk7XG4gICAgcXVvdGVzLnB1c2gocGFydHMpO1xuICB9XG5cbiAgcmV0dXJuIHF1b3Rlcztcbn1cblxuZnVuY3Rpb24gc3BsaXRBdHRyaWJ1dGlvbih0ZXh0OiBzdHJpbmcpOiBRdW90ZSB7XG4gIC8vIENoZWNrIGZvciBlbS1kYXNoIGF0dHJpYnV0aW9uXG4gIGNvbnN0IGRhc2hJbmRleCA9IHRleHQubGFzdEluZGV4T2YoXCIgXHUyMDE0IFwiKTtcbiAgaWYgKGRhc2hJbmRleCA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGV4dC5zbGljZSgwLCBkYXNoSW5kZXgpLnRyaW0oKSxcbiAgICAgIGF0dHJpYnV0aW9uOiB0ZXh0LnNsaWNlKGRhc2hJbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgaHlwaGVuSW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIC0gXCIpO1xuICBpZiAoaHlwaGVuSW5kZXggPiB0ZXh0Lmxlbmd0aCAqIDAuNSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0ZXh0LnNsaWNlKDAsIGh5cGhlbkluZGV4KS50cmltKCksXG4gICAgICBhdHRyaWJ1dGlvbjogdGV4dC5zbGljZShoeXBoZW5JbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogdGV4dC50cmltKCksIGF0dHJpYnV0aW9uOiBcIlwiIH07XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXkgVGltZWxpbmUgQ29tcG9uZW50XG4vLyBWZXJ0aWNhbCBjb2xvcmVkIHRpbWVsaW5lIG9mIHRoZSBkYXkncyBwbGFubmVkIGFjdGl2aXRpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgRGF5TWFwRW50cnksIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEYXlUaW1lbGluZShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiB7XG4gICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Ta2lwOiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJEb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyUG9zdHBvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ3JlYXRlRXZlbnQ/OiAoKSA9PiB2b2lkO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRheW1hcF90aXRsZSA/PyBcIllPVVIgREFZXCI7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldEhvdXJzKCkgKyBub3cuZ2V0TWludXRlcygpIC8gNjA7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gVGltZWxpbmUgY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQgb2xlbi10aW1lbGluZS1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEdldCBkYXkgbWFwIGVudHJpZXNcbiAgY29uc3QgZW50cmllcyA9IGVuZ2luZS5nZXREYXlNYXAoKTtcblxuICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWVtcHR5XCIsXG4gICAgICB0ZXh0OiBcIk5vIGFjdGl2aXRpZXMgc2NoZWR1bGVkLiBBIHJhcmUgZGF5IG9mIHJlc3QuXCIsXG4gICAgfSk7XG4gICAgcmVuZGVyVGltZWxpbmVGb290ZXIoY2FyZCwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3Mub25DcmVhdGVFdmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gVGltZWxpbmUgY29udGFpbmVyXG4gIGNvbnN0IHRpbWVsaW5lID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZVwiIH0pO1xuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIHJlbmRlclRpbWVsaW5lRW50cnkoXG4gICAgICB0aW1lbGluZSwgZW50cnksIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzXG4gICAgKTtcbiAgfVxuXG4gIC8vIEZvb3RlclxuICByZW5kZXJUaW1lbGluZUZvb3RlcihjYXJkLCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrcy5vbkNyZWF0ZUV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVFbnRyeShcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgZW50cnk6IERheU1hcEVudHJ5LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBjYWxsYmFja3M6IHtcbiAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblNraXA6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhckRvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJQb3N0cG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gIH1cbik6IHZvaWQge1xuICBjb25zdCBpc0NhbGVuZGFyID0gZW50cnkuaXNDYWxlbmRhclRhc2sgPT09IHRydWU7XG4gIGNvbnN0IGNvbG9yID0gaXNDYWxlbmRhciA/IFwiIzVlN2E5YVwiIDogKHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2VudHJ5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIik7XG4gIGNvbnN0IGlzQ3VycmVudCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LnN0YXJ0SG91ciAmJiBjdXJyZW50SG91ciA8IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzUGFzdCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzRG9uZSA9IGVudHJ5LnN0YXR1cyA9PT0gXCJkb25lXCI7XG4gIGNvbnN0IGlzU2tpcHBlZCA9IGVudHJ5LnN0YXR1cyA9PT0gXCJza2lwcGVkXCI7XG5cbiAgLy8gRGV0ZXJtaW5lIHZpc3VhbCBzdGF0ZVxuICBsZXQgc3RhdGVDbHMgPSBcIm9sZW4tdGltZWxpbmUtZW50cnlcIjtcbiAgaWYgKGlzQ2FsZW5kYXIpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtY2FsZW5kYXJcIjtcbiAgaWYgKGlzRG9uZSkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1kb25lXCI7XG4gIGVsc2UgaWYgKGlzU2tpcHBlZCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1za2lwcGVkXCI7XG4gIGVsc2UgaWYgKGlzQ3VycmVudCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1jdXJyZW50XCI7XG4gIGVsc2UgaWYgKGlzUGFzdCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1wYXN0XCI7XG5cbiAgY29uc3Qgcm93ID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogc3RhdGVDbHMgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgY29sb3IgYmFyIChjYWxlbmRhciB0YXNrcyBnZXQgYSBkaXN0aW5jdCBkYXNoZWQgc3R5bGUpXG4gIGNvbnN0IGJhciA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1iYXJcIiB9KTtcbiAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgaWYgKGlzQ2FsZW5kYXIgJiYgIWlzRG9uZSkge1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKFwib2xlbi10aW1lbGluZS1iYXItY2FsZW5kYXJcIik7XG4gIH1cbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBiYXIuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAxMnB4ICR7Y29sb3J9YDtcbiAgfVxuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1jb250ZW50XCIgfSk7XG5cbiAgLy8gVG9wIGxpbmU6IHRpbWUgKyBkdXJhdGlvbiArIHNvdXJjZSBiYWRnZSBmb3IgY2FsZW5kYXIgdGFza3NcbiAgY29uc3QgdGltZUxpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLXRpbWVcIiB9KTtcbiAgdGltZUxpbmUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXRIb3VyKGVudHJ5LnN0YXJ0SG91cil9IFx1MjAxMyAke2Zvcm1hdEhvdXIoZW50cnkuZW5kSG91cil9IFx1MDBCNyAke2VudHJ5LmVzdGltYXRlZER1cmF0aW9ufW1gO1xuXG4gIGlmIChpc0NhbGVuZGFyICYmIGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgY29uc3QgYmFkZ2UgPSB0aW1lTGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1zb3VyY2UtYmFkZ2VcIiB9KTtcbiAgICBzd2l0Y2ggKGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiTm90ZVwiOyBicmVhaztcbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIlRhc2tcIjsgYnJlYWs7XG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiUXVpY2tcIjsgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0aXZpdHkgbGluZTogZW1vamkgKyBuYW1lXG4gIGNvbnN0IGFjdExpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWFjdGl2aXR5XCIgfSk7XG4gIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtZW1vamlcIiwgdGV4dDogZW50cnkuZW1vamkgfSk7XG4gIGNvbnN0IG5hbWVFbCA9IGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICBjbHM6IFwib2xlbi10aW1lbGluZS1uYW1lXCIsXG4gICAgdGV4dDogZW50cnkuYWN0aXZpdHlOYW1lLFxuICB9KTtcblxuICAvLyBTdHJpa2V0aHJvdWdoIGZvciBkb25lL3NraXBwZWRcbiAgaWYgKGlzRG9uZSB8fCBpc1NraXBwZWQpIHtcbiAgICBuYW1lRWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgIG5hbWVFbC5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgfVxuXG4gIC8vIFN0YXR1cyBpbmRpY2F0b3JcbiAgaWYgKGlzRG9uZSkge1xuICAgIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtY2hlY2tcIiwgdGV4dDogXCJcXHUyNzEzXCIgfSk7XG4gIH0gZWxzZSBpZiAoaXNTa2lwcGVkKSB7XG4gICAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1za2lwLW1hcmtcIiwgdGV4dDogXCJcXHUyMDEzXCIgfSk7XG4gIH1cblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBpZiAoIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgaWYgKGlzQ2FsZW5kYXIpIHtcbiAgICAgIC8vIENhbGVuZGFyIHRhc2tzOiBEb25lICsgUG9zdHBvbmVcbiAgICAgIGNvbnN0IGRvbmVCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQ2FsZW5kYXJEb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBvc3Rwb25lQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1wb3N0cG9uZVwiLFxuICAgICAgICB0ZXh0OiBcIlxcdTIzRTlcIixcbiAgICAgICAgYXR0cjogeyB0aXRsZTogXCJQb3N0cG9uZSB0byB0b21vcnJvd1wiIH0sXG4gICAgICB9KTtcbiAgICAgIHBvc3Rwb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25DYWxlbmRhclBvc3Rwb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFjdGl2aXR5IGVudHJpZXM6IEJlZ2luL0RvbmUgKyBTa2lwXG4gICAgICBjb25zdCBhY2NlcHRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBpc0N1cnJlbnQgPyBcIkJlZ2luXCIgOiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgYWNjZXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25BY2NlcHQoZW50cnkuYWN0aXZpdHlJZCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2tpcEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tc2tpcFwiLFxuICAgICAgICB0ZXh0OiBcIlNraXBcIixcbiAgICAgIH0pO1xuICAgICAgc2tpcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uU2tpcChlbnRyeS5hY3Rpdml0eUlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEN1cnJlbnQgdGltZSBpbmRpY2F0b3JcbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBjb25zdCBpbmRpY2F0b3IgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtbm93XCIgfSk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAoY3VycmVudEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpIC8gKGVudHJ5LmVuZEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpO1xuICAgIGluZGljYXRvci5zdHlsZS50b3AgPSBgJHtNYXRoLm1pbigxMDAsIE1hdGgubWF4KDAsIHByb2dyZXNzICogMTAwKSl9JWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVGb290ZXIoXG4gIGNhcmQ6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBvbkNyZWF0ZUV2ZW50PzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IGVuZE9mRGF5ID0gc2V0dGluZ3MuZGV2Q29uZmlnLmV2ZW5pbmdFbmQ7XG4gIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIGVuZE9mRGF5IC0gY3VycmVudEhvdXIpO1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IocmVtYWluaW5nKTtcbiAgY29uc3QgbWlucyA9IE1hdGgucm91bmQoKHJlbWFpbmluZyAtIGhvdXJzKSAqIDYwKTtcblxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICBjb25zdCBmb290ZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3RlclwiIH0pO1xuICBmb290ZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3Rlci10ZXh0XCIsXG4gICAgdGV4dDogYEVuZCBvZiBkYXk6ICR7aG91cnN9aCAke21pbnN9bSByZW1haW5pbmdgLFxuICB9KTtcblxuICBpZiAob25DcmVhdGVFdmVudCkge1xuICAgIGNvbnN0IGJ0biA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tY3JlYXRlXCIsXG4gICAgICB0ZXh0OiBcIisgQ3JlYXRlIGV2ZW50XCIsXG4gICAgfSk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvbkNyZWF0ZUV2ZW50KCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIoaDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGgpO1xuICBjb25zdCBtaW5zID0gTWF0aC5yb3VuZCgoaCAtIGhvdXJzKSAqIDYwKTtcbiAgY29uc3QgcGVyaW9kID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gIGNvbnN0IGRpc3BsYXlIb3VyID0gaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycyA9PT0gMCA/IDEyIDogaG91cnM7XG4gIGlmIChtaW5zID09PSAwKSByZXR1cm4gYCR7ZGlzcGxheUhvdXJ9JHtwZXJpb2R9YDtcbiAgcmV0dXJuIGAke2Rpc3BsYXlIb3VyfToke1N0cmluZyhtaW5zKS5wYWRTdGFydCgyLCBcIjBcIil9JHtwZXJpb2R9YDtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFdvcmtzcGFjZSBWaWV3XG4vLyBBY3RpdmUgd29ya3NwYWNlIHNjcmVlbiB3aXRoIHRpbWVyLCBza2lsbHMsIGZpbmlzaCBmbG93LlxuLy8gV2hlbiBhbiBhY3Rpdml0eSBoYXMgYSB3b3Jrc3BhY2VUZW1wbGF0ZSwgdGhlIHRlbXBsYXRlIGlzXG4vLyByZW5kZXJlZCBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IHRpbWVyIFVJLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEl0ZW1WaWV3LCBXb3Jrc3BhY2VMZWFmLCBURmlsZSwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVdvcmtzcGFjZSwgQWN0aXZpdHlDb25maWcsIFdvcmtzcGFjZVR5cGUsIFdvcmtzcGFjZVJlc3VsdCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgVklFV19UWVBFX1dPUktTUEFDRSwgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgV29ya3NwYWNlVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICBwcml2YXRlIHRpbWVySW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN0YXJ0VGltZTogRGF0ZTtcbiAgcHJpdmF0ZSBlbGFwc2VkID0gMDsgLy8gc2Vjb25kc1xuICAvKiogV2hlbiBpbiB0ZW1wbGF0ZSBtb2RlLCB0cmFja3MgdGhlIGRhaWx5IG5vdGUgZmlsZSB0aGUgdGVtcGxhdGUgaXMgYm91bmQgdG8gKi9cbiAgcHJpdmF0ZSB0ZW1wbGF0ZU5vdGVGaWxlOiBURmlsZSB8IG51bGwgPSBudWxsO1xuICAvKiogVHJhY2tzIHdoZXRoZXIgd2UgYWxyZWFkeSBwcm9jZXNzZWQgYSBjb21wbGV0aW9uIChwcmV2ZW50cyBkb3VibGUtYXBwbHkpICovXG4gIHByaXZhdGUgY29tcGxldGlvbkFwcGxpZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfV09SS1NQQUNFO1xuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2U7XG4gICAgcmV0dXJuIHdvcmtzcGFjZSA/IGBXb3Jrc3BhY2U6ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX1gIDogXCJXb3Jrc3BhY2VcIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJ0aW1lclwiO1xuICB9XG5cbiAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHdvcmtzcGFjZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZTtcbiAgICBpZiAoIXdvcmtzcGFjZSkge1xuICAgICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBcIk5vIGFjdGl2ZSB3b3Jrc3BhY2UuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoXG4gICAgICAoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQsXG4gICAgKTtcblxuICAgIGlmIChhY3Rpdml0eT8ud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgIC8vIFRlbXBsYXRlIG1vZGU6IHJlbmRlciB0aGUgYWN0aXZpdHkgdGVtcGxhdGUgYm91bmQgdG8gdG9kYXkncyBkYWlseSBub3RlXG4gICAgICBhd2FpdCB0aGlzLnJlbmRlclRlbXBsYXRlTW9kZSh3b3Jrc3BhY2UsIGFjdGl2aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRGVmYXVsdCBtb2RlOiB0aW1lciArIHNraWxscyArIGZpbmlzaFxuICAgICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSh3b3Jrc3BhY2Uuc3RhcnRUaW1lKTtcbiAgICAgIHRoaXMucmVuZGVyKHdvcmtzcGFjZSk7XG4gICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgdGhpcy50ZW1wbGF0ZU5vdGVGaWxlID0gbnVsbDtcbiAgICB0aGlzLmNvbXBsZXRpb25BcHBsaWVkID0gZmFsc2U7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gVGVtcGxhdGUgTW9kZVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJUZW1wbGF0ZU1vZGUoXG4gICAgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIC8vIEZpbmQgb3IgY3JlYXRlIHRvZGF5J3MgZGFpbHkgbm90ZSBmb3IgdGhpcyBhY3Rpdml0eVxuICAgIGNvbnN0IGZpbGUgPSBhd2FpdCB0aGlzLmZpbmRPckNyZWF0ZURhaWx5Tm90ZShhY3Rpdml0eSk7XG4gICAgaWYgKCFmaWxlKSB7XG4gICAgICBjb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICB0ZXh0OiBcIkNvdWxkIG5vdCBsb2FkIGFjdGl2aXR5IG5vdGUuXCIsXG4gICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY29sb3I6IHZhcigtLXRleHQtZXJyb3IpOyBwYWRkaW5nOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7XCIgfSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGVtcGxhdGVOb3RlRmlsZSA9IGZpbGU7XG5cbiAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSBjYWNoZSB0byBwb3B1bGF0ZSAoaW1wb3J0YW50IGZvciBuZXdseSBjcmVhdGVkIGZpbGVzKVxuICAgIGF3YWl0IHRoaXMud2FpdEZvck1ldGFkYXRhKGZpbGUpO1xuXG4gICAgLy8gUmVuZGVyIHRlbXBsYXRlIGludG8gdGhlIHZpZXcncyBjb250ZW50IGFyZWFcbiAgICBjb25zdCB0ZW1wbGF0ZUNvbnRhaW5lciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1yb290XCIgfSk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4udGVtcGxhdGVFbmdpbmUucmVuZGVyKFxuICAgICAgYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUhLFxuICAgICAgZmlsZSxcbiAgICAgIHRlbXBsYXRlQ29udGFpbmVyLFxuICAgICk7XG5cbiAgICAvLyBXYXRjaCBmb3IgdGhlIHRlbXBsYXRlIG1hcmtpbmcgdGhlIGFjdGl2aXR5IGFzIGRvbmUgaW4gZnJvbnRtYXR0ZXIuXG4gICAgLy8gV2hlbiB0aGUgYWN0aXZpdHkgcHJvcGVydHkgYmVjb21lcyB0cnVlLCBhcHBseSBwbHVnaW4tbGV2ZWwgZWZmZWN0c1xuICAgIC8vIChYUCwgYm9zcyBkYW1hZ2UsIGNsZWFyIGFjdGl2ZVdvcmtzcGFjZSkuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKGNoYW5nZWRGaWxlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNvbXBsZXRpb25BcHBsaWVkKSByZXR1cm47XG4gICAgICAgIGlmIChjaGFuZ2VkRmlsZS5wYXRoICE9PSBmaWxlLnBhdGgpIHJldHVybjtcblxuICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGNoYW5nZWRGaWxlKTtcbiAgICAgICAgY29uc3QgZm0gPSBjYWNoZT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGlmIChmbT8uW2FjdGl2aXR5LnByb3BlcnR5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuY29tcGxldGlvbkFwcGxpZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnN0IGNvbXBsZXRpb25UeXBlID0gZm1bYCR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGVgXSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgICAgdGhpcy5hcHBseVRlbXBsYXRlQ29tcGxldGlvbih3b3Jrc3BhY2UsIGFjdGl2aXR5LCBjb21wbGV0aW9uVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0b2RheSdzIGRhaWx5IG5vdGUgaW4gdGhlIGFjdGl2aXR5IGZvbGRlciwgb3IgY3JlYXRlIG9uZS5cbiAgICogRW5zdXJlcyB0aGUgbm90ZSBoYXMgYGFjdGl2aXR5OiA8aWQ+YCBpbiBmcm9udG1hdHRlciBzbyB0aGVcbiAgICogdGVtcGxhdGUgcG9zdC1wcm9jZXNzb3IgYWxzbyB3b3JrcyB3aGVuIG9wZW5pbmcgdGhlIG5vdGUgZGlyZWN0bHkuXG4gICAqL1xuICBwcml2YXRlIGFzeW5jIGZpbmRPckNyZWF0ZURhaWx5Tm90ZShhY3Rpdml0eTogQWN0aXZpdHlDb25maWcpOiBQcm9taXNlPFRGaWxlIHwgbnVsbD4ge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgZXhpc3RpbmcgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PlxuICAgICAgICAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmXG4gICAgICAgIGYuYmFzZW5hbWUgPT09IGRhdGVTdHIsXG4gICAgKTtcblxuICAgIGlmIChleGlzdGluZykge1xuICAgICAgLy8gRW5zdXJlIGl0IGhhcyB0aGUgYWN0aXZpdHkgZmllbGQgaW4gZnJvbnRtYXR0ZXJcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihleGlzdGluZywgKGZtKSA9PiB7XG4gICAgICAgIGlmICghZm0uYWN0aXZpdHkpIGZtLmFjdGl2aXR5ID0gYWN0aXZpdHkuaWQ7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBleGlzdGluZztcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgZm9sZGVyIGV4aXN0c1xuICAgIGNvbnN0IGFic3RyYWN0Rm9sZGVyID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZvbGRlcik7XG4gICAgaWYgKCFhYnN0cmFjdEZvbGRlcikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlRm9sZGVyKGZvbGRlcik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gRm9sZGVyIG1heSBhbHJlYWR5IGV4aXN0XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIG5ldyBkYWlseSBub3RlIHdpdGggYWN0aXZpdHkgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHtkYXRlU3RyfS5tZGA7XG4gICAgY29uc3QgY29udGVudCA9IGAtLS1cXG5hY3Rpdml0eTogJHthY3Rpdml0eS5pZH1cXG4tLS1cXG5gO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgICB9IGNhdGNoIHtcbiAgICAgIC8vIEZpbGUgbWlnaHQgYWxyZWFkeSBleGlzdCB3aXRoIGEgZGlmZmVyZW50IGNhc2luZyBvciByYWNlIGNvbmRpdGlvblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdhaXQgdW50aWwgdGhlIG1ldGFkYXRhIGNhY2hlIGhhcyBpbmRleGVkIGEgZmlsZSdzIGZyb250bWF0dGVyLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyB3YWl0Rm9yTWV0YWRhdGEoZmlsZTogVEZpbGUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgIHdoaWxlIChhdHRlbXB0cyA8IDIwKSB7XG4gICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcikgcmV0dXJuO1xuICAgICAgYXdhaXQgc2xlZXAoNTApO1xuICAgICAgYXR0ZW1wdHMrKztcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHRlbXBsYXRlIG1hcmtzIHRoZSBhY3Rpdml0eSBhcyBkb25lIGluIGZyb250bWF0dGVyLlxuICAgKiBBcHBsaWVzIHBsdWdpbi1sZXZlbCBlZmZlY3RzOiBYUCwgYm9zcyBkYW1hZ2UsIGNsZWFyIHdvcmtzcGFjZS5cbiAgICovXG4gIHByaXZhdGUgYXN5bmMgYXBwbHlUZW1wbGF0ZUNvbXBsZXRpb24oXG4gICAgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICAgIGNvbXBsZXRpb25UeXBlPzogc3RyaW5nLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBNYXAgdGhlIHRlbXBsYXRlJ3MgY29tcGxldGlvbiB0eXBlIHRvIGEgd29ya3NwYWNlIHN0YXRlXG4gICAgY29uc3Qgd3NUeXBlID0gY29tcGxldGlvblR5cGU/LnRvTG93ZXJDYXNlKCkgYXMgV29ya3NwYWNlVHlwZSB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBzdGF0ZSA9IHdzVHlwZVxuICAgICAgPyB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IHdzVHlwZSlcbiAgICAgIDogdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSBcImRpc2NpcGxpbmVcIik7XG5cbiAgICAvLyBBcHBseSBYUFxuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS54cE11bHRpcGxpZXIgPiAwKSB7XG4gICAgICBjb25zdCB4cEdhaW4gPSBNYXRoLnJvdW5kKFxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uICogc3RhdGUueHBNdWx0aXBsaWVyLFxuICAgICAgKTtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbd29ya3NwYWNlLmNhdGVnb3J5XSArPSB4cEdhaW47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgYm9zcyBkYW1hZ2UgKHVubGVzcyBza2lwcGVkKVxuICAgIGlmICh3c1R5cGUgIT09IFwic2tpcHBlZFwiKSB7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3Rpdml0eS5kYW1hZ2VQZXJDb21wbGV0aW9uLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciBhY3RpdmUgd29ya3NwYWNlXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gbnVsbDtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgfVxuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gRGVmYXVsdCBNb2RlICh0aW1lciArIHNraWxscyArIGZpbmlzaClcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHByaXZhdGUgc3RhcnRUaW1lcigpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgdGhpcy5lbGFwc2VkID0gTWF0aC5mbG9vcigoRGF0ZS5ub3coKSAtIHRoaXMuc3RhcnRUaW1lLmdldFRpbWUoKSkgLyAxMDAwKTtcbiAgICAgIGNvbnN0IHRpbWVyRWwgPSB0aGlzLmNvbnRlbnRFbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4td29ya3NwYWNlLXRpbWVyXCIpO1xuICAgICAgaWYgKHRpbWVyRWwpIHRpbWVyRWwudGV4dENvbnRlbnQgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5lbGFwc2VkKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVySW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIGNvbnN0IHJvb3QgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGFzaGJvYXJkIG9sZW4td29ya3NwYWNlLXJvb3RcIiB9KTtcblxuICAgIC8vIFRvcCBiYXJcbiAgICBjb25zdCB0b3BCYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS10b3BiYXJcIiB9KTtcblxuICAgIGNvbnN0IGFjdEluZm8gPSB0b3BCYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjdC1pbmZvXCIgfSk7XG4gICAgYWN0SW5mby5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtZW1vamlcIiwgdGV4dDogd29ya3NwYWNlLmVtb2ppIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjdC1uYW1lXCIsIHRleHQ6IHdvcmtzcGFjZS5hY3Rpdml0eU5hbWUgfSk7XG5cbiAgICBjb25zdCB0aW1lckVsID0gdG9wQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS10aW1lclwiLFxuICAgICAgdGV4dDogXCIwMDowMFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmluaXNoQnRuID0gdG9wQmFyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4td29ya3NwYWNlLWZpbmlzaC1idG5cIixcbiAgICAgIHRleHQ6IFwiRklOSVNIXCIsXG4gICAgfSk7XG4gICAgZmluaXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dGaW5pc2hNb2RhbCh3b3Jrc3BhY2UpKTtcblxuICAgIC8vIENhdGVnb3J5IGFjY2VudCBsaW5lXG4gICAgY29uc3QgYWNjZW50Q29sb3IgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1t3b3Jrc3BhY2UuY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xuICAgIGNvbnN0IGFjY2VudCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWFjY2VudFwiIH0pO1xuICAgIGFjY2VudC5zdHlsZS5iYWNrZ3JvdW5kID0gYGxpbmVhci1ncmFkaWVudCg5MGRlZywgJHthY2NlbnRDb2xvcn0sIHRyYW5zcGFyZW50KWA7XG5cbiAgICAvLyBNYWluIGNvbnRlbnQgYXJlYVxuICAgIGNvbnN0IGNvbnRlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1jb250ZW50XCIgfSk7XG5cbiAgICAvLyBTa2lsbHMgc2VjdGlvblxuICAgIGNvbnN0IHNraWxsc1NlY3Rpb24gPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbHMtc2VjdGlvblwiIH0pO1xuICAgIHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IFwiV09SS1NQQUNFIFNLSUxMU1wiIH0pO1xuXG4gICAgY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gc2tpbGxzU2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzXCIgfSk7XG5cbiAgICBpZiAod29ya3NwYWNlLnNraWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNraWxsc0NvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1uby1za2lsbHNcIixcbiAgICAgICAgdGV4dDogXCJObyBza2lsbHMgdGFnZ2VkIHlldFwiLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAoY29uc3Qgc2tpbGwgb2Ygd29ya3NwYWNlLnNraWxscykge1xuICAgICAgICBjb25zdCBjaGlwID0gc2tpbGxzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1jaGlwXCIgfSk7XG4gICAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBza2lsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgc2tpbGxzIGJ1dHRvblxuICAgIGNvbnN0IGFkZFNraWxsQnRuID0gc2tpbGxzU2VjdGlvbi5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4td29ya3NwYWNlLWFkZC1za2lsbFwiLFxuICAgICAgdGV4dDogXCIrIEFERCBTS0lMTFwiLFxuICAgIH0pO1xuICAgIGFkZFNraWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnNob3dTa2lsbFBpY2tlcih3b3Jrc3BhY2UpKTtcblxuICAgIC8vIEZvY3VzIHpvbmUgXHUyMDE0IG1vdGl2YXRpb25hbCBhcmVhXG4gICAgY29uc3QgZm9jdXNab25lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtZm9jdXNcIiB9KTtcbiAgICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG4gICAgZm9jdXNab25lLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLXRleHRcIixcbiAgICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgfSk7XG4gICAgZm9jdXNab25lLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICB9KTtcblxuICAgIC8vIEJvdHRvbSBiYXJcbiAgICBjb25zdCBib3R0b21CYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1ib3R0b21iYXJcIiB9KTtcbiAgICBjb25zdCBjYXRMYWJlbCA9IHdvcmtzcGFjZS5jYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmtzcGFjZS5jYXRlZ29yeS5zbGljZSgxKTtcbiAgICBib3R0b21CYXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4td29ya3NwYWNlLWNhdGVnb3J5LWxhYmVsXCIsXG4gICAgICB0ZXh0OiBjYXRMYWJlbCxcbiAgICB9KTtcbiAgICBib3R0b21CYXIuc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gYWNjZW50Q29sb3I7XG4gIH1cblxuICBwcml2YXRlIHNob3dTa2lsbFBpY2tlcih3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSk6IHZvaWQge1xuICAgIC8vIFByb21wdCBmb3Igc2tpbGwgbmFtZSB2aWEgYSBzaW1wbGUgaW5wdXRcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJBREQgU0tJTExcIiB9KTtcblxuICAgIGNvbnN0IGlucHV0V3JhcCA9IHNoZWV0LmNyZWF0ZURpdih7IGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiAyMHB4IDA7XCIgfSB9KTtcbiAgICBjb25zdCBpbnB1dCA9IGlucHV0V3JhcC5jcmVhdGVFbChcImlucHV0XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1pbnB1dFwiLFxuICAgICAgYXR0cjogeyB0eXBlOiBcInRleHRcIiwgcGxhY2Vob2xkZXI6IFwiU2tpbGwgbmFtZS4uLlwiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBJZiBza2lsbCBmb2xkZXIgZXhpc3RzLCBsb2FkIGV4aXN0aW5nIHNraWxsc1xuICAgIGlmICh3b3Jrc3BhY2Uuc2tpbGxGb2xkZXIpIHtcbiAgICAgIGNvbnN0IHNraWxscyA9IHRoaXMubG9hZFNraWxsc0Zyb21Gb2xkZXIod29ya3NwYWNlLnNraWxsRm9sZGVyKTtcbiAgICAgIGlmIChza2lsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbHNcIiwgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiAxNnB4O1wiIH0gfSk7XG4gICAgICAgIGZvciAoY29uc3Qgc2tpbGwgb2Ygc2tpbGxzKSB7XG4gICAgICAgICAgY29uc3QgY2hpcCA9IGV4aXN0aW5nLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1za2lsbC1jaGlwIG9sZW4tY2xpY2thYmxlXCIgfSk7XG4gICAgICAgICAgY2hpcC50ZXh0Q29udGVudCA9IHNraWxsO1xuICAgICAgICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFNraWxsKHNraWxsKTtcbiAgICAgICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbnMgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgY29uc3QgYWRkQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgICAgdGV4dDogXCJBRERcIixcbiAgICB9KTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgYWRkU2tpbGwodmFsKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgICB0ZXh0OiBcIkNBTkNFTFwiLFxuICAgIH0pO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VTaGVldCgpKTtcblxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlU2hlZXQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFNraWxsID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCF3b3Jrc3BhY2Uuc2tpbGxzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIHdvcmtzcGFjZS5za2lsbHMucHVzaChuYW1lKTtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlID0gd29ya3NwYWNlO1xuICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIod29ya3NwYWNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY2xvc2VTaGVldCA9ICgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgICBpbnB1dC5mb2N1cygpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkU2tpbGxzRnJvbUZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIjtcbiAgICByZXR1cm4gZmlsZXNcbiAgICAgIC5maWx0ZXIoKGYpID0+IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKVxuICAgICAgLm1hcCgoZikgPT4gZi5iYXNlbmFtZSlcbiAgICAgIC5zb3J0KCk7XG4gIH1cblxuICBwcml2YXRlIHNob3dGaW5pc2hNb2RhbCh3b3Jrc3BhY2U6IEFjdGl2ZVdvcmtzcGFjZSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZCgoZW5kVGltZS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gNjAwMDApO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJIT1cgRElEIElUIEZFRUw/XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYm9keS1pdGFsaWNcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiAxMnB4IDAgMjBweDtcIiB9LFxuICAgICAgdGV4dDogYCR7d29ya3NwYWNlLmVtb2ppfSAke3dvcmtzcGFjZS5hY3Rpdml0eU5hbWV9IFx1MDBCNyAke2R1cmF0aW9uTWludXRlc30gbWludXRlc2AsXG4gICAgfSk7XG5cbiAgICAvLyBDb21wbGV0aW9uIHN0YXRlIGJ1dHRvbnNcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzLmZpbHRlcigocykgPT4gcy5lbmFibGVkKTtcbiAgICBjb25zdCBzdGF0ZXNHcmlkID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlcy1ncmlkXCIgfSk7XG5cbiAgICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgICAgY29uc3QgYnRuID0gc3RhdGVzR3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGUtYnRuXCIgfSk7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBzdGF0ZS5jb2xvcjtcblxuICAgICAgYnRuLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlLWljb25cIiwgdGV4dDogc3RhdGUuaWNvbiB9KTtcbiAgICAgIGJ0bi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZS1uYW1lXCIsIHRleHQ6IHN0YXRlLm5hbWUgfSk7XG5cbiAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCA9IHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiB3b3Jrc3BhY2UuYWN0aXZpdHlJZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IHdvcmtzcGFjZS5hY3Rpdml0eU5hbWUsXG4gICAgICAgICAgY2F0ZWdvcnk6IHdvcmtzcGFjZS5jYXRlZ29yeSxcbiAgICAgICAgICB0eXBlOiBzdGF0ZS5pZCxcbiAgICAgICAgICBzdGFydFRpbWU6IHdvcmtzcGFjZS5zdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZTogZW5kVGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIGR1cmF0aW9uTWludXRlcyxcbiAgICAgICAgICBza2lsbHM6IHdvcmtzcGFjZS5za2lsbHMsXG4gICAgICAgIH07XG5cbiAgICAgICAgYXdhaXQgdGhpcy5maW5pc2hXb3Jrc3BhY2UocmVzdWx0LCB3b3Jrc3BhY2UpO1xuICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICAgIC8vIERvbid0IGNsb3NlIG9uIG92ZXJsYXkgdGFwIFx1MjAxNCB1c2VyIG11c3QgY2hvb3NlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZVNoZWV0ID0gKCkgPT4ge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGZpbmlzaFdvcmtzcGFjZShyZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCwgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyAxLiBDcmVhdGUgd29ya3NwYWNlIG1hcmtkb3duIGZpbGUgaW4gdGhlIGFjdGl2aXR5IGZvbGRlclxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgaWYgKGFjdGl2aXR5Py5mb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlV29ya3NwYWNlRmlsZShyZXN1bHQsIGFjdGl2aXR5LmZvbGRlcik7XG4gICAgfVxuXG4gICAgLy8gMi4gVXBkYXRlIHRoZSBhY3Rpdml0eSdzIGRhaWx5IG5vdGUgZnJvbnRtYXR0ZXJcbiAgICBhd2FpdCB0aGlzLm1hcmtBY3Rpdml0eURvbmUod29ya3NwYWNlLCByZXN1bHQpO1xuXG4gICAgLy8gMy4gQXBwbHkgWFBcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gcmVzdWx0LnR5cGUpO1xuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS54cE11bHRpcGxpZXIgPiAwKSB7XG4gICAgICBjb25zdCB4cEdhaW4gPSBNYXRoLnJvdW5kKHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb24gKiBzdGF0ZS54cE11bHRpcGxpZXIpO1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFt3b3Jrc3BhY2UuY2F0ZWdvcnldICs9IHhwR2FpbjtcbiAgICB9XG5cbiAgICAvLyA0LiBBcHBseSBib3NzIGRhbWFnZSAodW5sZXNzIHNraXBwZWQpXG4gICAgaWYgKHJlc3VsdC50eXBlICE9PSBcInNraXBwZWRcIikge1xuICAgICAgY29uc3QgYWN0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgICBpZiAoYWN0KSB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBNYXRoLm1heChcbiAgICAgICAgICAwLFxuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3QuZGFtYWdlUGVyQ29tcGxldGlvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDUuIENsZWFyIGFjdGl2ZSB3b3Jrc3BhY2VcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgPSBudWxsO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgLy8gNi4gU2hvdyBub3RpY2VcbiAgICBjb25zdCBzdGF0ZUxhYmVsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSByZXN1bHQudHlwZSk/Lm5hbWUgPz8gcmVzdWx0LnR5cGU7XG4gICAgbmV3IE5vdGljZShgJHt3b3Jrc3BhY2UuZW1vaml9ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX0gXHUyMDE0ICR7c3RhdGVMYWJlbH0gXHUwMEI3ICR7cmVzdWx0LmR1cmF0aW9uTWludXRlc31tYCk7XG5cbiAgICAvLyA3LiBTd2l0Y2ggYmFjayB0byBkYXNoYm9hcmRcbiAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZURhc2hib2FyZFZpZXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlV29ya3NwYWNlRmlsZShyZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCwgZm9sZGVyOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gcmVzdWx0LmFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYWN0aXZpdHk/LnByb3BlcnR5ID8/IHJlc3VsdC5hY3Rpdml0eU5hbWU7XG5cbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUocmVzdWx0LmVuZFRpbWUpO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKHJlc3VsdC5zdGFydFRpbWUpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBlbmRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIC8vIE5hbWluZzogXCJXb3Jrc3BhY2UgWVlZWS1NTS1ERCBISE1NXCJcbiAgICBjb25zdCB0aW1lU3RyID0gYCR7U3RyaW5nKGVuZFRpbWUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpfSR7U3RyaW5nKGVuZFRpbWUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGBXb3Jrc3BhY2UgJHtkYXRlU3RyfSAke3RpbWVTdHJ9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0ubWRgO1xuXG4gICAgLy8gQnVpbGQgdGltZXpvbmUtYXdhcmUgdGltZXN0YW1wXG4gICAgY29uc3QgdHpPZmZzZXQgPSAtc3RhcnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgY29uc3QgdHpIb3VycyA9IFN0cmluZyhNYXRoLmZsb29yKE1hdGguYWJzKHR6T2Zmc2V0KSAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHR6TWlucyA9IFN0cmluZyhNYXRoLmFicyh0ek9mZnNldCkgJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHR6U2lnbiA9IHR6T2Zmc2V0ID49IDAgPyBcIitcIiA6IFwiLVwiO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IHN0YXJ0VGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKSArIHR6U2lnbiArIHR6SG91cnMgKyBcIjpcIiArIHR6TWlucztcblxuICAgIGNvbnN0IGVuZFRpbWVzdGFtcCA9IGVuZFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyB0elNpZ24gKyB0ekhvdXJzICsgXCI6XCIgKyB0ek1pbnM7XG5cbiAgICAvLyBQaWNrIGEgcXVvdGVcbiAgICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG5cbiAgICAvLyBDYXBpdGFsaXplIGNvbXBsZXRpb24gdHlwZSB0byBtYXRjaCBleGlzdGluZyBmb3JtYXQgKERpc2NpcGxpbmUvRmxvdy9Ta2lwcGVkKVxuICAgIGNvbnN0IHR5cGVOYW1lID0gcmVzdWx0LnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQudHlwZS5zbGljZSgxKTtcbiAgICBjb25zdCBkdXJhdGlvblN0ciA9IGAke01hdGguZmxvb3IocmVzdWx0LmR1cmF0aW9uTWludXRlcyAvIDYwKX1oICR7cmVzdWx0LmR1cmF0aW9uTWludXRlcyAlIDYwfW1gO1xuXG4gICAgLy8gQnVpbGQgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBmbUxpbmVzID0gW1xuICAgICAgXCItLS1cIixcbiAgICAgIFwiZWRpdG9yLXdpZHRoOiAxMDBcIixcbiAgICAgIGAke3Byb3BlcnR5fTogdHJ1ZWAsXG4gICAgICBgJHtwcm9wZXJ0eX0tVHlwZTogXCIke3R5cGVOYW1lfVwiYCxcbiAgICAgIGBUaW1lc3RhbXA6IFwiJHt0aW1lc3RhbXB9XCJgLFxuICAgICAgYGVuZFRpbWU6IFwiJHtlbmRUaW1lc3RhbXB9XCJgLFxuICAgICAgYGR1cmF0aW9uOiBcIiR7ZHVyYXRpb25TdHJ9XCJgLFxuICAgICAgYGNhdGVnb3J5OiBcIiR7cmVzdWx0LmNhdGVnb3J5fVwiYCxcbiAgICAgIHJlc3VsdC5za2lsbHMubGVuZ3RoID4gMFxuICAgICAgICA/IGBza2lsbHM6IFske3Jlc3VsdC5za2lsbHMubWFwKChzKSA9PiBgXCIke3N9XCJgKS5qb2luKFwiLCBcIil9XWBcbiAgICAgICAgOiBcInNraWxsczogW11cIixcbiAgICAgIFwiY3NzY2xhc3NlczpcIixcbiAgICAgIFwiICAtIGhpZGUtcHJvcGVydGllc1wiLFxuICAgICAgXCItLS1cIixcbiAgICBdO1xuXG4gICAgY29uc3QgYm9keSA9IFtcbiAgICAgIFwiXCIsXG4gICAgICBgIyAke2FjdGl2aXR5Py5lbW9qaSA/PyBcIlwifSAke3Jlc3VsdC5hY3Rpdml0eU5hbWV9IFdvcmtzcGFjZWAsXG4gICAgICBcIlwiLFxuICAgICAgYD4gXCIke3F1b3RlLnRleHR9XCJgLFxuICAgICAgYD4gXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICAgIFwiXCIsXG4gICAgICBcIiMjIE5vdGVzXCIsXG4gICAgICBcIlwiLFxuICAgICAgXCJcIixcbiAgICBdO1xuXG4gICAgY29uc3QgY29udGVudCA9IFsuLi5mbUxpbmVzLCAuLi5ib2R5XS5qb2luKFwiXFxuXCIpO1xuXG4gICAgLy8gRW5zdXJlIGZvbGRlciBleGlzdHNcbiAgICBjb25zdCBhYnN0cmFjdEZvbGRlciA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXIpO1xuICAgIGlmICghYWJzdHJhY3RGb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXIpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBkdXBsaWNhdGUgZmlsZW5hbWVzXG4gICAgbGV0IGZpbmFsUGF0aCA9IGZpbGVQYXRoO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMjtcbiAgICAgIHdoaWxlICh0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgKSkge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgICBmaW5hbFBhdGggPSBgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9ICgke2NvdW50ZXJ9KS5tZGA7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbmFsUGF0aCwgY29udGVudCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1hcmtBY3Rpdml0eURvbmUod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UsIHJlc3VsdD86IFdvcmtzcGFjZVJlc3VsdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIEZpbmQgdG9kYXkncyBub3RlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXIgYW5kIHNldCB0aGUgcHJvcGVydHkgdG8gdHJ1ZVxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSB3b3Jrc3BhY2UuYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuO1xuXG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgY29uc3QgZm9sZGVyID0gYWN0aXZpdHkuZm9sZGVyO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBMb29rIGZvciBhIGZpbGUgbWF0Y2hpbmcgdG9kYXkncyBkYXRlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgdG9kYXlGaWxlID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PiAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmIGYuYmFzZW5hbWUgPT09IGRhdGVTdHJcbiAgICApO1xuXG4gICAgaWYgKHRvZGF5RmlsZSkge1xuICAgICAgLy8gVXBkYXRlIGZyb250bWF0dGVyIFx1MjAxNCBzZXQgcHJvcGVydHkgYW5kIGNvbXBsZXRpb24gdHlwZVxuICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKHRvZGF5RmlsZSwgKGZyb250bWF0dGVyKSA9PiB7XG4gICAgICAgIGZyb250bWF0dGVyW2FjdGl2aXR5LnByb3BlcnR5XSA9IHRydWU7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHJlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSk7XG4gICAgICAgICAgZnJvbnRtYXR0ZXJbYCR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGVgXSA9IHR5cGVOYW1lO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBkYWlseSBub3RlIHdpdGggdGhlIHByb3BlcnR5IHNldFxuICAgICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgICAgY29uc3QgdHlwZUxpbmUgPSByZXN1bHRcbiAgICAgICAgPyBgXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX0tVHlwZTogXCIke3Jlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSl9XCJgXG4gICAgICAgIDogXCJcIjtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBgLS0tXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX06IHRydWUke3R5cGVMaW5lfVxcbi0tLVxcbmA7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGUoZmlsZVBhdGgsIGNvbnRlbnQpO1xuICAgICAgfSBjYXRjaCB7XG4gICAgICAgIC8vIEZpbGUgbWlnaHQgYWxyZWFkeSBleGlzdCB3aXRoIGEgZGlmZmVyZW50IG5hbWVcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdFRpbWUoc2Vjb25kczogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBoID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gICAgY29uc3QgbSA9IE1hdGguZmxvb3IoKHNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICBjb25zdCBzID0gc2Vjb25kcyAlIDYwO1xuICAgIGlmIChoID4gMCkge1xuICAgICAgcmV0dXJuIGAke2h9OiR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtTdHJpbmcocykucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfToke1N0cmluZyhzKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgfVxufVxuXG4vLyBVdGlsaXR5XG5mdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgU2V0dGluZ3MgVGFiXG4vLyBDb2xsYXBzaWJsZSBzZWN0aW9ucyBmb3IgYWxsIHBsdWdpbiBjb25maWd1cmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBUZXh0Q29tcG9uZW50LCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZpdHlDb25maWcsIENhdGVnb3J5LCBUZW1wbGVUYXNrLCBNdXNjbGVHcm91cENvbmZpZyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9BQ1RJVklUSUVTLCBERUZBVUxUX0RFVl9DT05GSUcsIERFRkFVTFRfV09SS09VVF9TRVRUSU5HUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIE9sZW5TZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgY29udGFpbmVyRWwuYWRkQ2xhc3MoXCJvbGVuLXNldHRpbmdzXCIpO1xuXG4gICAgLy8gSGVhZGVyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJPbGVuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMS40ZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi1ib3R0b206IDRweDsgcGFkZGluZzogOHB4IDA7XCIgfSxcbiAgICB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICB0ZXh0OiBcIk15dGhvbG9naWNhbCBMaWZlLU9wZXJhdGluZyBTeXN0ZW1cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMTZweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gUXVpY2sgc3RhdHVzIGJhclxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFyKGNvbnRhaW5lckVsKTtcblxuICAgIC8vIFNlY3Rpb25zXG4gICAgdGhpcy5yZW5kZXJQcm9maWxlU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJXb3Jrb3V0U2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJDYXRlZ29yaWVzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckNhbGVuZGFyU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUaGVtZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckRldkRhc2hib2FyZFNlY3Rpb24oY29udGFpbmVyRWwpO1xuICB9XG5cbiAgLy8gLS0tIENvbGxhcHNpYmxlIFNlY3Rpb24gSGVscGVyIC0tLVxuXG4gIHByaXZhdGUgY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKFxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBpY29uOiBzdHJpbmcsXG4gICAgZGVmYXVsdE9wZW4gPSBmYWxzZVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHBhcmVudC5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlciA9IHNlY3Rpb24uY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogZGVmYXVsdE9wZW4gPyBcIlxcdTI1QkNcIiA6IFwiXFx1MjVCNlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDEwcHg7IHdpZHRoOiAxMnB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGljb24gPyBgJHtpY29ufSAgJHt0aXRsZX1gIDogdGl0bGUsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45NWVtO1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBib2R5ID0gc2VjdGlvbi5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjogeyBzdHlsZTogYHBhZGRpbmc6IDAgMTZweDsgZGlzcGxheTogJHtkZWZhdWx0T3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtgIH0sXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IGJvZHkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG4gICAgICBib2R5LnN0eWxlLmRpc3BsYXkgPSBpc09wZW4gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgIGJvZHkuc3R5bGUucGFkZGluZyA9IGlzT3BlbiA/IFwiMCAxNnB4XCIgOiBcIjEycHggMTZweFwiO1xuICAgICAgYXJyb3cudGV4dENvbnRlbnQgPSBpc09wZW4gPyBcIlxcdTI1QjZcIiA6IFwiXFx1MjVCQ1wiO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlZmF1bHRPcGVuKSBib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjEycHggMTZweFwiO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgLy8gLS0tIFN0YXR1cyBCYXIgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNCYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGhwUGVyY2VudCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUCA+IDBcbiAgICAgID8gTWF0aC5yb3VuZCgodGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAvIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUCkgKiAxMDApXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCBiYXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7IG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpOyBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBgVGllciAke3RoaXMucGx1Z2luLnNldHRpbmdzLmN1cnJlbnRUaWVyfS8xM2AgfSk7XG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBgSFAgJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQfS8ke3RoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUH0gKCR7aHBQZXJjZW50fSUpYCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuaW5UYXJ0YXJ1c1xuICAgICAgPyBcIlRBUlRBUlVTXCJcbiAgICAgIDogdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCJcbiAgICAgICAgPyBcIlBBVVNFRFwiXG4gICAgICAgIDogXCJBQ1RJVkVcIjtcbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IHN0YXRlLFxuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAke3RoaXMucGx1Z2luLnNldHRpbmdzLmluVGFydGFydXMgPyBcInZhcigtLXRleHQtZXJyb3IpXCIgOiBcInZhcigtLXRleHQtbm9ybWFsKVwifTtgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogdGhpcy5wbHVnaW4uc2V0dGluZ3MubWlncmF0ZWQgPyBcIk1pZ3JhdGVkXCIgOiBcIk5vdCBtaWdyYXRlZFwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXN0eWxlOiBpdGFsaWM7XCIgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBQcm9maWxlIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyUHJvZmlsZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiUHJvZmlsZVwiLCBcIlxcdXsxRjQ2NH1cIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJOYW1lXCIpXG4gICAgICAuc2V0RGVzYyhcIllvdXIgbmFtZSBmb3IgdGhlIGRhc2hib2FyZCBncmVldGluZ1wiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlck5hbWUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlck5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTXkgV2h5XCIpXG4gICAgICAuc2V0RGVzYyhcIllvdXIgY29yZSBtb3RpdmF0aW9uIFx1MjAxNCBzaG93biBwZXJpb2RpY2FsbHkgb24gdGhlIGRhc2hib2FyZFwiKVxuICAgICAgLmFkZFRleHRBcmVhKChhcmVhKSA9PlxuICAgICAgICBhcmVhXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm15V2h5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm15V2h5ID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkhlcm8gYmFja2dyb3VuZCBpbWFnZVwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBwYXRoIHRvIHRoZSBoZXJvIGJhY2tncm91bmQgaW1hZ2UgKGUuZy4sIGltYWdlcy9oZXJvLmpwZylcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwicGF0aC90by9pbWFnZS5qcGdcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVyb0JhY2tncm91bmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIEFjdGl2aXRpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJBY3Rpdml0aWVzXCIsIFwiXFx1ezFGM0FGfVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2ldO1xuICAgICAgdGhpcy5yZW5kZXJBY3Rpdml0eUl0ZW0oYm9keSwgYWN0aXZpdHksIGkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBidXR0b25cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIEFjdGl2aXR5XCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0FjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGlkOiBgY3VzdG9tLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgbmFtZTogXCJOZXcgQWN0aXZpdHlcIixcbiAgICAgICAgICAgIGVtb2ppOiBcIlxcdTJCNTBcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIlwiLFxuICAgICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSxcbiAgICAgICAgICAgIHdlZWtseVRhcmdldDogMyxcbiAgICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgICAgaGFzV29ya3NwYWNlOiBmYWxzZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiA1LFxuICAgICAgICAgICAgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICAgICAgICAgIHByZWZlcnJlZFRpbWU6IFwiYW55dGltZVwiLFxuICAgICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5wdXNoKG5ld0FjdGl2aXR5KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckFjdGl2aXR5SXRlbShjb250YWluZXI6IEhUTUxFbGVtZW50LCBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBIZWFkZXIgcm93IHdpdGggdG9nZ2xlXG4gICAgbmV3IFNldHRpbmcod3JhcHBlcilcbiAgICAgIC5zZXROYW1lKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9YClcbiAgICAgIC5zZXREZXNjKGAke2FjdGl2aXR5LmNhdGVnb3J5fSBcdTAwQjcgJHthY3Rpdml0eS5mb2xkZXIgfHwgXCJubyBmb2xkZXIgc2V0XCJ9YClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKGFjdGl2aXR5LmVuYWJsZWQpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBhbmRhYmxlIGRldGFpbHNcbiAgICBjb25zdCBkZXRhaWxzVG9nZ2xlID0gd3JhcHBlci5jcmVhdGVFbChcImRldGFpbHNcIik7XG4gICAgZGV0YWlsc1RvZ2dsZS5jcmVhdGVFbChcInN1bW1hcnlcIiwge1xuICAgICAgdGV4dDogXCJDb25maWd1cmVcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzVG9nZ2xlLmNyZWF0ZURpdigpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkubmFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmFtZSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRW1vamlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbW9qaSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQ2F0ZWdvcnlcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgYm9keTogXCJCb2R5XCIsIG1pbmQ6IFwiTWluZFwiLCBzcGlyaXQ6IFwiU3Bpcml0XCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuY2F0ZWdvcnkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jYXRlZ29yeSA9IHYgYXMgQ2F0ZWdvcnk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkFjdGl2aXR5IGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgd2l0aCBZWVlZLU1NLUREIG5vdGVzIGFuZCB3b3Jrc3BhY2UgbG9nc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkuZm9sZGVyKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5mb2xkZXIgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkZyb250bWF0dGVyIHByb3BlcnR5XCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5wcm9wZXJ0eSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJvcGVydHkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldlZWtseSB0YXJnZXRcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDcsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LndlZWtseVRhcmdldClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud2Vla2x5VGFyZ2V0ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJpb3JpdHkgKDEtMTApXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxMCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJpb3JpdHkpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByaW9yaXR5ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJlZmVycmVkIHRpbWVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBtb3JuaW5nOiBcIk1vcm5pbmdcIiwgYWZ0ZXJub29uOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIGV2ZW5pbmc6IFwiRXZlbmluZ1wiLCBhbnl0aW1lOiBcIkFueXRpbWVcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJlZmVycmVkVGltZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByZWZlcnJlZFRpbWUgPSB2IGFzIGFueTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmVnbGVjdCB0aHJlc2hvbGQgKGRheXMpXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxNCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkubmVnbGVjdFRocmVzaG9sZClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmVnbGVjdFRocmVzaG9sZCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVzdGltYXRlZCBkdXJhdGlvbiAobWludXRlcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVzdGltYXRlZER1cmF0aW9uID0gbjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJIYXMgd29ya3NwYWNlXCIpXG4gICAgICAuc2V0RGVzYyhcIk9wZW5zIHdvcmtzcGFjZSB2aWV3IHdpdGggdGltZXIgd2hlbiBzdGFydGVkLCBpbnN0ZWFkIG9mIG1hcmtpbmcgZG9uZSBpbW1lZGlhdGVseVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUoYWN0aXZpdHkuaGFzV29ya3NwYWNlKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmhhc1dvcmtzcGFjZSA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIHRlbXBsYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIkJ1aWx0LWluIHRlbXBsYXRlIElEIChlLmcuICd3b3Jrb3V0Jykgb3IgdmF1bHQgcGF0aCB0byAuanMgZmlsZS4gTGVhdmUgZW1wdHkgZm9yIGRlZmF1bHQgd29ya3NwYWNlLlwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIHdvcmtvdXRcIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLndvcmtzcGFjZVRlbXBsYXRlID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4udGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlNraWxsIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBza2lsbCB0cmVlIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gSG9tZS9TdGFydHMvRHJhd2luZy9Ta2lsbCB0cmVlXCIpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnNraWxsRm9sZGVyID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5za2lsbEZvbGRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQmxvY2tzIChjb21tYS1zZXBhcmF0ZWQgYWN0aXZpdHkgSURzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoKGFjdGl2aXR5LmJsb2NrcyA/PyBbXSkuam9pbihcIiwgXCIpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmJsb2NrcyA9IHYuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBbHRlcm5hdGVzIHdpdGggKGFjdGl2aXR5IElEKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGggPz8gXCJcIikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5hbHRlcm5hdGVzV2l0aCA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJDaGFpbiBhZnRlciAoYWN0aXZpdHkgSUQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShhY3Rpdml0eS5jaGFpbkFmdGVyID8/IFwiXCIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2hhaW5BZnRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBEZWxldGUgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoXCJEZWxldGUgQWN0aXZpdHlcIilcbiAgICAgICAgICAuc2V0V2FybmluZygpXG4gICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBXb3Jrb3V0IC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyV29ya291dFNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiV29ya291dCBTZXR0aW5nc1wiLCBcIlxcdUQ4M0NcXHVERkNCXFx1RkUwRlwiKTtcblxuICAgIC8vIEVuc3VyZSB3b3Jrb3V0U2V0dGluZ3MgZXhpc3RzIChtaWdyYXRpb24gc2FmZXR5KVxuICAgIGlmICghdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya291dFNldHRpbmdzKSB7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrb3V0U2V0dGluZ3MgPSB7IC4uLkRFRkFVTFRfV09SS09VVF9TRVRUSU5HUyB9O1xuICAgIH1cbiAgICBjb25zdCB3cyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtvdXRTZXR0aW5ncztcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlBlcnNvbmFsIHN0YXRzIGZpbGVcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgcGF0aCB0byB0aGUgUGVyc29uYWwgU3RhdHMgbm90ZSAoc3RvcmVzIHdlaWdodCwgaGVpZ2h0LCBiaXJ0aGRhdGUpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIlBlcnNvbmFsIExpZmUvUGVyc29uYWwgU3RhdHMubWRcIilcbiAgICAgICAgICAuc2V0VmFsdWUod3Muc3RhdHNGaWxlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya291dFNldHRpbmdzLnN0YXRzRmlsZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkV4ZXJjaXNlIGRhdGFiYXNlIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBzdHJlbmd0aCBzdGFuZGFyZCBmaWxlcyAob25lIC5tZCBwZXIgZXhlcmNpc2UpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIkhvbWUvQWN0aXZpdGllcy9FeGVyY2lzZXMgZGF0YWJhc2VcIilcbiAgICAgICAgICAuc2V0VmFsdWUod3MuZXhlcmNpc2VEYkZvbGRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtvdXRTZXR0aW5ncy5leGVyY2lzZURiRm9sZGVyID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gTXVzY2xlIGdyb3Vwc1xuICAgIGJvZHkuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJNdXNjbGUgR3JvdXBzXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45NWVtOyBtYXJnaW46IDEycHggMCA0cHg7XCIgfSxcbiAgICB9KTtcbiAgICBib2R5LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiRGVmaW5lIHdoaWNoIG11c2NsZSBncm91cHMgYXBwZWFyIGluIHRoZSB3b3Jrb3V0IHN0YXJ0IHNjcmVlbi5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBtdXNjbGVHcm91cE5hbWVzID0gT2JqZWN0LmtleXMod3MubXVzY2xlR3JvdXBzKTtcbiAgICBmb3IgKGNvbnN0IG5hbWUgb2YgbXVzY2xlR3JvdXBOYW1lcykge1xuICAgICAgY29uc3QgbWcgPSB3cy5tdXNjbGVHcm91cHNbbmFtZV07XG4gICAgICBjb25zdCBtZ1NldHRpbmcgPSBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShgJHttZy5pY29ufSAke25hbWV9YClcbiAgICAgICAgLnNldERlc2MobWcuc3ViZ3JvdXBzID8gYFN1Ymdyb3VwczogJHttZy5zdWJncm91cHMuam9pbihcIiwgXCIpfWAgOiBcIk5vIHN1Ymdyb3Vwc1wiKTtcblxuICAgICAgbWdTZXR0aW5nLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG5cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dChcIkRlbGV0ZVwiKVxuICAgICAgICAgIC5zZXRXYXJuaW5nKClcbiAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya291dFNldHRpbmdzLm11c2NsZUdyb3Vwc1tuYW1lXTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQWRkIG11c2NsZSBncm91cFxuICAgIGNvbnN0IGFkZE1nV3JhcHBlciA9IGJvZHkuY3JlYXRlRGl2KHsgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tdG9wOiA4cHg7XCIgfSB9KTtcblxuICAgIGNvbnN0IGFkZE1nRGV0YWlscyA9IGFkZE1nV3JhcHBlci5jcmVhdGVFbChcImRldGFpbHNcIik7XG4gICAgYWRkTWdEZXRhaWxzLmNyZWF0ZUVsKFwic3VtbWFyeVwiLCB7XG4gICAgICB0ZXh0OiBcIisgQWRkIG11c2NsZSBncm91cFwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1hY2NlbnQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZE1nRm9ybSA9IGFkZE1nRGV0YWlscy5jcmVhdGVEaXYoeyBhdHRyOiB7IHN0eWxlOiBcInBhZGRpbmc6IDhweCAwO1wiIH0gfSk7XG5cbiAgICBsZXQgbmV3TWdOYW1lID0gXCJcIjtcbiAgICBsZXQgbmV3TWdJY29uID0gXCJcXHVEODNEXFx1RENBQVwiO1xuICAgIGxldCBuZXdNZ1N1YnMgPSBcIlwiO1xuXG4gICAgbmV3IFNldHRpbmcoYWRkTWdGb3JtKVxuICAgICAgLnNldE5hbWUoXCJOYW1lXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gQXJtc1wiKS5vbkNoYW5nZSgodikgPT4geyBuZXdNZ05hbWUgPSB2OyB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhhZGRNZ0Zvcm0pXG4gICAgICAuc2V0TmFtZShcIkljb25cIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFBsYWNlaG9sZGVyKFwiXFx1RDgzRFxcdURDQUFcIikuc2V0VmFsdWUobmV3TWdJY29uKS5vbkNoYW5nZSgodikgPT4geyBuZXdNZ0ljb24gPSB2OyB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhhZGRNZ0Zvcm0pXG4gICAgICAuc2V0TmFtZShcIlN1Ymdyb3VwcyAoY29tbWEtc2VwYXJhdGVkLCBvciBlbXB0eSlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFBsYWNlaG9sZGVyKFwiQmljZXBzLCBUcmljZXBzLCBGb3JlYXJtc1wiKS5vbkNoYW5nZSgodikgPT4geyBuZXdNZ1N1YnMgPSB2OyB9KSk7XG5cbiAgICBuZXcgU2V0dGluZyhhZGRNZ0Zvcm0pLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJBZGRcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuZXdNZ05hbWUudHJpbSgpO1xuICAgICAgICBpZiAoIW5hbWUpIHsgbmV3IE5vdGljZShcIlBsZWFzZSBlbnRlciBhIG11c2NsZSBncm91cCBuYW1lXCIpOyByZXR1cm47IH1cbiAgICAgICAgY29uc3Qgc3VicyA9IG5ld01nU3Vicy50cmltKClcbiAgICAgICAgICA/IG5ld01nU3Vicy5zcGxpdChcIixcIikubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy53b3Jrb3V0U2V0dGluZ3MubXVzY2xlR3JvdXBzW25hbWVdID0ge1xuICAgICAgICAgIHN1Ymdyb3Vwczogc3VicyxcbiAgICAgICAgICBpY29uOiBuZXdNZ0ljb24gfHwgXCJcXHVEODNEXFx1RENBQVwiLFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBSZXNldCBidXR0b25cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gZGVmYXVsdHNcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtvdXRTZXR0aW5ncyA9IHsgLi4uREVGQVVMVF9XT1JLT1VUX1NFVFRJTkdTIH07XG4gICAgICAgIC8vIERlZXAgY29weSBtdXNjbGUgZ3JvdXBzXG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtvdXRTZXR0aW5ncy5tdXNjbGVHcm91cHMgPSBKU09OLnBhcnNlKFxuICAgICAgICAgIEpTT04uc3RyaW5naWZ5KERFRkFVTFRfV09SS09VVF9TRVRUSU5HUy5tdXNjbGVHcm91cHMpXG4gICAgICAgICk7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgbmV3IE5vdGljZShcIldvcmtvdXQgc2V0dGluZ3MgcmVzZXQgdG8gZGVmYXVsdHNcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2F0ZWdvcmllcyAtLS1cblxuICBwcml2YXRlIHJlbmRlckNhdGVnb3JpZXNTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkNhdGVnb3JpZXNcIiwgXCJcXHV7MUYzQTh9XCIpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllczogeyBrZXk6IENhdGVnb3J5OyBsYWJlbDogc3RyaW5nIH1bXSA9IFtcbiAgICAgIHsga2V5OiBcImJvZHlcIiwgbGFiZWw6IFwiQm9keVwiIH0sXG4gICAgICB7IGtleTogXCJtaW5kXCIsIGxhYmVsOiBcIk1pbmRcIiB9LFxuICAgICAgeyBrZXk6IFwic3Bpcml0XCIsIGxhYmVsOiBcIlNwaXJpdFwiIH0sXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKGAke2NhdC5sYWJlbH0gY29sb3JgKVxuICAgICAgICAuYWRkQ29sb3JQaWNrZXIoKGNwKSA9PlxuICAgICAgICAgIGNwXG4gICAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV0pXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV0gPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiVGl0bGUgb3ZlcnJpZGVcIilcbiAgICAgIC5zZXREZXNjKFwiT3ZlcnJpZGUgdGhlIGR5bmFtaWMgdGl0bGUgKGxlYXZlIGVtcHR5IGZvciBhdXRvKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudGl0bGVPdmVycmlkZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvLyAtLS0gVGVtcGxlIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyVGVtcGxlU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJUZW1wbGUgVXBrZWVwXCIsIFwiXFx1ezFGM0RCfVxcdUZFMEZcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB0YXNrID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV07XG5cbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKGAke3Rhc2suZW1vaml9ICR7dGFzay5uYW1lfWApXG4gICAgICAgIC5zZXREZXNjKGBFdmVyeSAke3Rhc2suaW50ZXJ2YWxEYXlzfSBkYXkocylgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiTmFtZVwiKS5zZXRWYWx1ZSh0YXNrLm5hbWUpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5uYW1lID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIkRheXNcIikuc2V0VmFsdWUoU3RyaW5nKHRhc2suaW50ZXJ2YWxEYXlzKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG4gPSBwYXJzZUludCh2KTtcbiAgICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0uaW50ZXJ2YWxEYXlzID0gbjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiRW1vamlcIikuc2V0VmFsdWUodGFzay5lbW9qaSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLmVtb2ppID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIFRlbXBsZSBUYXNrXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrcy5wdXNoKHtcbiAgICAgICAgICBpZDogYHRlbXBsZS0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICBuYW1lOiBcIk5ldyBUYXNrXCIsXG4gICAgICAgICAgbGFzdENvbXBsZXRlZDogbnVsbCxcbiAgICAgICAgICBpbnRlcnZhbERheXM6IDcsXG4gICAgICAgICAgZW1vamk6IFwiXFx1MjcyOFwiLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQ2FsZW5kYXJTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkNhbGVuZGFyIEludGVncmF0aW9uXCIsIFwiXFx1ezFGNEM1fVwiKTtcblxuICAgIGJvZHkuY3JlYXRlRWwoXCJwXCIsIHtcbiAgICAgIHRleHQ6IFwiTWVyZ2UgZXh0ZXJuYWwgdGFza3MgaW50byB5b3VyIERheSBNYXAgdGltZWxpbmUuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDhweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gT3B0aW9uIEE6IERhaWx5IE5vdGVzXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRGFpbHkgTm90ZXMgaW50ZWdyYXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiUGFyc2UgdGFza3MgZnJvbSB5b3VyIGRhaWx5IG5vdGVzICgtIFsgXSBUYXNrIEB0aW1lIH4zMG0pXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMgPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkRhaWx5IE5vdGVzIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBZWVlZLU1NLURELm1kIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIkRhaWx5IE5vdGVzXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gT3B0aW9uIEI6IFRhc2tzIFBsdWdpblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlRhc2tzIFBsdWdpbiBpbnRlZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJSZWFkIHRhc2tzIHdpdGggZHVlIGRhdGVzIGZyb20gdGhlIFRhc2tzIHBsdWdpblwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4pLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4gPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIE9wdGlvbiBDOiBRdWljayBUYXNrc1xuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlF1aWNrIFRhc2tzXCIpXG4gICAgICAuc2V0RGVzYyhcIk9sZW4ncyBidWlsdC1pbiB0YXNrIHN5c3RlbVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBRdWljayBUYXNrcyBsaXN0XG4gICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgICA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuICAgICAgY29uc3QgdG9kYXlUYXNrcyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MuZmlsdGVyKFxuICAgICAgICAocXQpID0+IHF0LmRhdGUgPT09IHRvZGF5XG4gICAgICApO1xuXG4gICAgICBpZiAodG9kYXlUYXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGxpc3RFbCA9IGJvZHkuY3JlYXRlRGl2KHtcbiAgICAgICAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogOHB4IDA7IHBhZGRpbmc6IDhweDsgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiA2cHg7XCIgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGlzdEVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgICB0ZXh0OiBcIlRvZGF5J3MgUXVpY2sgVGFza3NcIixcbiAgICAgICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45ZW07IG1hcmdpbi1ib3R0b206IDZweDtcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBxdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NbaV07XG4gICAgICAgICAgaWYgKHF0LmRhdGUgIT09IHRvZGF5KSBjb250aW51ZTtcblxuICAgICAgICAgIG5ldyBTZXR0aW5nKGxpc3RFbClcbiAgICAgICAgICAgIC5zZXROYW1lKGAke3F0LmRvbmUgPyBcIlxcdTI3MTNcIiA6IFwiXFx1MjVDQlwifSAke3F0LnRpdGxlfWApXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgW3F0LnRpbWUsIHF0LmR1cmF0aW9uID8gYCR7cXQuZHVyYXRpb259bWAgOiBcIlwiXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcdTAwQjcgXCIpIHx8IFwiTm8gdGltZSBzZXRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkRlbGV0ZVwiKS5zZXRXYXJuaW5nKCkub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIFF1aWNrIFRhc2tcIikub25DbGljaygoKSA9PiB7XG4gICAgICAgICAgKHRoaXMucGx1Z2luIGFzIGFueSkuc2hvd1F1aWNrVGFza0RpYWxvZygpO1xuICAgICAgICAgIC8vIENsb3NlIHNldHRpbmdzIFx1MjAxNCB0aGUgZGlhbG9nIGFwcGVhcnMgb24gdG9wXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBUaGVtZSAtLS1cblxuICBwcml2YXRlIHJlbmRlclRoZW1lU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJUaGVtZVwiLCBcIlxcdXsxRjNBOH1cIik7XG5cbiAgICBjb25zdCB0aGVtZUZpZWxkczogeyBrZXk6IHN0cmluZzsgbGFiZWw6IHN0cmluZzsgZGVmYXVsdFZhbDogc3RyaW5nIH1bXSA9IFtcbiAgICAgIHsga2V5OiBcImJnUHJpbWFyeVwiLCBsYWJlbDogXCJCYWNrZ3JvdW5kXCIsIGRlZmF1bHRWYWw6IFwiIzBjMGEwOVwiIH0sXG4gICAgICB7IGtleTogXCJ0ZXh0UHJpbWFyeVwiLCBsYWJlbDogXCJUZXh0XCIsIGRlZmF1bHRWYWw6IFwiI2Y1ZjBlOFwiIH0sXG4gICAgICB7IGtleTogXCJ0ZXh0TXV0ZWRcIiwgbGFiZWw6IFwiTXV0ZWQgdGV4dFwiLCBkZWZhdWx0VmFsOiBcIiM5MjhkODVcIiB9LFxuICAgICAgeyBrZXk6IFwiYWNjZW50R29sZFwiLCBsYWJlbDogXCJBY2NlbnQgKGdvbGQpXCIsIGRlZmF1bHRWYWw6IFwiI2M5YTg0Y1wiIH0sXG4gICAgICB7IGtleTogXCJkYW5nZXJcIiwgbGFiZWw6IFwiRGFuZ2VyXCIsIGRlZmF1bHRWYWw6IFwiIzhiMmQzNVwiIH0sXG4gICAgICB7IGtleTogXCJzdWNjZXNzXCIsIGxhYmVsOiBcIlN1Y2Nlc3NcIiwgZGVmYXVsdFZhbDogXCIjZDQ5NDBhXCIgfSxcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGVtZUZpZWxkcykge1xuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoZmllbGQubGFiZWwpXG4gICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+XG4gICAgICAgICAgY3BcbiAgICAgICAgICAgIC5zZXRWYWx1ZShcbiAgICAgICAgICAgICAgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzIGFzIGFueSk/LltmaWVsZC5rZXldID8/IGZpZWxkLmRlZmF1bHRWYWxcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgYXMgYW55KVtmaWVsZC5rZXldID0gdjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJSZXNldCB0byBFbHlzaWFuIERhcmtcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzID0ge307XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgbmV3IE5vdGljZShcIlRoZW1lIHJlc2V0IHRvIEVseXNpYW4gRGFyayBkZWZhdWx0c1wiKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBBZHZhbmNlZCAtLS1cblxuICBwcml2YXRlIHJlbmRlckFkdmFuY2VkU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJBZHZhbmNlZFwiLCBcIlxcdTI2OTlcXHVGRTBGXCIpO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiU2ltdWxhdGVkIGRhdGVcIilcbiAgICAgIC5zZXREZXNjKFwiT3ZlcnJpZGUgdG9kYXkncyBkYXRlIGZvciB0ZXN0aW5nIChZWVlZLU1NLUREKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJZWVlZLU1NLUREXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSB2LnRyaW0oKSB8fCBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJTeXN0ZW0gc3RhdGVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZFxuICAgICAgICAgIC5hZGRPcHRpb25zKHsgYWN0aXZlOiBcIkFjdGl2ZVwiLCBwYXVzZWQ6IFwiUGF1c2VkXCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IHYgYXMgXCJhY3RpdmVcIiB8IFwicGF1c2VkXCI7XG4gICAgICAgICAgICBpZiAobmV3U3RhdGUgPT09IFwicGF1c2VkXCIgJiYgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5ld1N0YXRlID09PSBcImFjdGl2ZVwiICYmIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBhdXNlZE1zID0gRGF0ZS5ub3coKSAtIG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lICs9IHBhdXNlZE1zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlF1b3RlIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBxdW90ZSBmaWxlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJRdW90ZXMvU3RvaWNcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUmUtcnVuIG1pZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJSZS1pbXBvcnQgZGF0YSBmcm9tIHRoZSBNeXRob2xvZ2ljYWwgSGFiaXQgVHJhY2tlciBwbHVnaW5cIilcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJNaWdyYXRlXCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5taWdyYXRlZCA9IGZhbHNlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIC8vIFJlbG9hZCB0aGUgcGx1Z2luIHRvIHRyaWdnZXIgbWlncmF0aW9uXG4gICAgICAgICAgYXdhaXQgKHRoaXMucGx1Z2luIGFzIGFueSkub25sb2FkKCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgbmV3IE5vdGljZShcIk1pZ3JhdGlvbiBjb21wbGV0ZVwiKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICAvLyAtLS0gRGV2ZWxvcGVyIERhc2hib2FyZCAtLS1cblxuICBwcml2YXRlIHJlbmRlckRldkRhc2hib2FyZFNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiRGV2ZWxvcGVyIERhc2hib2FyZFwiLCBcIlxcdXsxRjZFMH1cXHVGRTBGXCIpO1xuXG4gICAgYm9keS5jcmVhdGVFbChcInBcIiwge1xuICAgICAgdGV4dDogXCJFZGl0IHRoZSByYXcgZGV2Q29uZmlnIEpTT04uIENoYW5nZXMgYXJlIGFwcGxpZWQgb24gc2F2ZS5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCB0ZXh0YXJlYSA9IGJvZHkuY3JlYXRlRWwoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDMwMHB4OyBmb250LWZhbWlseTogbW9ub3NwYWNlOyBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTsgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4OyByZXNpemU6IHZlcnRpY2FsO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZywgbnVsbCwgMik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlNhdmUgZGV2Q29uZmlnXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKHRleHRhcmVhLnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICAgIHt9LFxuICAgICAgICAgICAgICBERUZBVUxUX0RFVl9DT05GSUcsXG4gICAgICAgICAgICAgIHBhcnNlZFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4ucmVmcmVzaERhc2hib2FyZCgpO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcImRldkNvbmZpZyBzYXZlZCBhbmQgYXBwbGllZFwiKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJJbnZhbGlkIEpTT04gXHUyMDE0IHBsZWFzZSBjaGVjayBzeW50YXhcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlJlc2V0IHRvIGRlZmF1bHRzXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZyA9IHsgLi4uREVGQVVMVF9ERVZfQ09ORklHIH07XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgdGV4dGFyZWEudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcsIG51bGwsIDIpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoXCJkZXZDb25maWcgcmVzZXQgdG8gZGVmYXVsdHNcIik7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gRXhwb3J0L0ltcG9ydFxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkV4cG9ydCBhbGwgc2V0dGluZ3NcIilcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJDb3B5IHRvIGNsaXBib2FyZFwiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MsIG51bGwsIDIpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChqc29uKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJTZXR0aW5ncyBjb3BpZWQgdG8gY2xpcGJvYXJkXCIpO1xuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgLy8gRmFsbGJhY2sgZm9yIG1vYmlsZSBcdTIwMTQgc2hvdyBpbiBhIHRleHRhcmVhIGZvciBtYW51YWwgY29weVxuICAgICAgICAgICAgY29uc3QgdGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgICAgICB0YS52YWx1ZSA9IGpzb247XG4gICAgICAgICAgICB0YS5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NTAlO3otaW5kZXg6OTk5OTtmb250LXNpemU6MTFweDtcIjtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGEpO1xuICAgICAgICAgICAgdGEuc2VsZWN0KCk7XG4gICAgICAgICAgICB0YS5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB0YS5yZW1vdmUoKSk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiVGFwIHRoZSB0ZXh0IGFyZWEgYW5kIGNvcHkgbWFudWFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkltcG9ydCBzZXR0aW5nc1wiKVxuICAgICAgLmFkZFRleHRBcmVhKChhcmVhKSA9PiB7XG4gICAgICAgIGFyZWEuc2V0UGxhY2Vob2xkZXIoXCJQYXN0ZSBKU09OIGhlcmUuLi5cIik7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUubWluSGVpZ2h0ID0gXCI4MHB4XCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLmZvbnRTaXplID0gXCIxMXB4XCI7XG5cbiAgICAgICAgLy8gU3RvcmUgcmVmZXJlbmNlIGZvciB0aGUgaW1wb3J0IGJ1dHRvblxuICAgICAgICAoYm9keSBhcyBhbnkpLl9pbXBvcnRBcmVhID0gYXJlYTtcbiAgICAgIH0pXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiSW1wb3J0XCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgYXJlYSA9IChib2R5IGFzIGFueSkuX2ltcG9ydEFyZWE7XG4gICAgICAgICAgICBpZiAoIWFyZWEpIHJldHVybjtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoYXJlYS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wbHVnaW4uc2V0dGluZ3MsIHBhcnNlZCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlNldHRpbmdzIGltcG9ydGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJJbnZhbGlkIEpTT04gXHUyMDE0IHBsZWFzZSBjaGVjayBzeW50YXhcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgVGVtcGxhdGUgRW5naW5lXG4vLyBMb2FkcyAuanMgdGVtcGxhdGUgZmlsZXMgZnJvbSB2YXVsdCwgY3JlYXRlcyBhIHNhbmRib3hlZFxuLy8gZXhlY3V0aW9uIGNvbnRleHQgd2l0aCBkYXRhLWJpbmRpbmcgdG8gbm90ZSBmcm9udG1hdHRlcixcbi8vIGFuZCByZW5kZXJzIFVJIGludG8gYSBjb250YWluZXIgZWxlbWVudC5cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBBcHAsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IEJVSUxUSU5fVEVNUExBVEVTIH0gZnJvbSBcIi4vYnVpbHRpbnNcIjtcblxuLyoqXG4gKiBUaGUgY29udGV4dCBvYmplY3QgcGFzc2VkIHRvIGV2ZXJ5IHRlbXBsYXRlIGF0IHJ1bnRpbWUuXG4gKiBUZW1wbGF0ZXMgcmVjZWl2ZSB0aGlzIGFzIGBjdHhgIGFuZCB1c2UgaXQgdG8gcmVhZC93cml0ZVxuICogZnJvbnRtYXR0ZXIgYW5kIGJ1aWxkIHRoZWlyIFVJLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlQ29udGV4dCB7XG4gIC8qKiBPYnNpZGlhbiBBcHAgaW5zdGFuY2UgKi9cbiAgYXBwOiBBcHA7XG4gIC8qKiBPbGVuIHBsdWdpbiByZWZlcmVuY2UgKi9cbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICAvKiogVGhlIGRhdGEgbm90ZSBjdXJyZW50bHkgYmVpbmcgdmlld2VkICovXG4gIGZpbGU6IFRGaWxlO1xuICAvKiogRE9NIGNvbnRhaW5lciB0byByZW5kZXIgaW50byAqL1xuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIC8vIC0tLSBEYXRhIEJpbmRpbmcgLS0tXG5cbiAgLyoqIFNuYXBzaG90IG9mIHRoZSBub3RlJ3MgY3VycmVudCBmcm9udG1hdHRlciAocmVhZC1vbmx5IG9iamVjdCkgKi9cbiAgZnJvbnRtYXR0ZXI6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAvKiogR2V0IGEgc2luZ2xlIGZyb250bWF0dGVyIHZhbHVlLCBvciBhbGwgZnJvbnRtYXR0ZXIgaWYgbm8ga2V5ICovXG4gIGdldERhdGEoa2V5Pzogc3RyaW5nKTogdW5rbm93bjtcbiAgLyoqIFdyaXRlIGEgc2luZ2xlIGtleSBiYWNrIHRvIHRoZSBub3RlJ3MgZnJvbnRtYXR0ZXIgKi9cbiAgc2V0RGF0YShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+O1xuICAvKiogQmF0Y2gtd3JpdGUgbXVsdGlwbGUga2V5cyB0byB0aGUgbm90ZSdzIGZyb250bWF0dGVyICovXG4gIHNldE11bHRpcGxlRGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IFByb21pc2U8dm9pZD47XG5cbiAgLy8gLS0tIFZhdWx0IEhlbHBlcnMgLS0tXG5cbiAgLyoqIFJlYWQgcmF3IHRleHQgb2YgYW55IHZhdWx0IGZpbGUgYnkgcGF0aCAqL1xuICByZWFkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+O1xuICAvKiogR2V0IGFsbCBtYXJrZG93biBmaWxlcyBpbnNpZGUgYSBmb2xkZXIgKi9cbiAgZ2V0RmlsZXNJbkZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBURmlsZVtdO1xuICAvKiogR2V0IGZyb250bWF0dGVyIG9mIGFueSBmaWxlIGJ5IHBhdGggKi9cbiAgZ2V0RmlsZU1ldGFkYXRhKHBhdGg6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbDtcblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKiBPYnNpZGlhbiBOb3RpY2UgZm9yIHRvYXN0cyAqL1xuICBub3RpY2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZDtcbiAgLyoqIG1vbWVudC5qcyAocHJvdmlkZWQgYnkgT2JzaWRpYW4gZ2xvYmFsbHkpICovXG4gIG1vbWVudDogdHlwZW9mIHdpbmRvdy5tb21lbnQ7XG4gIC8qKiBDcmVhdGUgYW4gSFRNTCBlbGVtZW50IChzaG9ydGhhbmQpICovXG4gIGNyZWF0ZUVsPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgIHRhZzogSyxcbiAgICBhdHRycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXTtcbn1cblxuLyoqXG4gKiBDb3JlIGVuZ2luZSB0aGF0IG1hbmFnZXMgdGVtcGxhdGUgbG9va3VwLCBsb2FkaW5nLCBhbmQgZXhlY3V0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVFbmdpbmUge1xuICBwcml2YXRlIGFwcDogQXBwO1xuICBwcml2YXRlIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgLyoqIENhY2hlIG9mIGxvYWRlZCB0ZW1wbGF0ZSBzb3VyY2UgY29kZSAocGF0aCBcdTIxOTIgc291cmNlKSAqL1xuICBwcml2YXRlIHRlbXBsYXRlQ2FjaGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgLy8gLS0tIEFjdGl2aXR5IExvb2t1cCAtLS1cblxuICAvKipcbiAgICogRmluZCB0aGUgd29ya3NwYWNlIHRlbXBsYXRlIGZvciBhIGdpdmVuIGFjdGl2aXR5IHR5cGUuXG4gICAqIExvb2tzIHVwIHRoZSBhY3Rpdml0eSBieSBJRCBpbiBzZXR0aW5ncyBhbmQgcmV0dXJucyBpdHMgd29ya3NwYWNlVGVtcGxhdGUgSUQuXG4gICAqIFRoZSBJRCBtYXkgcmVmZXIgdG8gYSBidWlsdC1pbiB0ZW1wbGF0ZSAoZS5nLiBcIndvcmtvdXRcIikgb3IgYSB2YXVsdCBwYXRoLlxuICAgKi9cbiAgZmluZFRlbXBsYXRlKGFjdGl2aXR5VHlwZTogc3RyaW5nKTogeyB0ZW1wbGF0ZUlkOiBzdHJpbmcgfSB8IG51bGwge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKFxuICAgICAgKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5VHlwZSAmJiBhLmVuYWJsZWQgJiYgYS53b3Jrc3BhY2VUZW1wbGF0ZSxcbiAgICApO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7IHRlbXBsYXRlSWQ6IGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlISB9O1xuICB9XG5cbiAgLy8gLS0tIFRlbXBsYXRlIExvYWRpbmcgLS0tXG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIHRlbXBsYXRlIHNvdXJjZSBmcm9tIHZhdWx0LiBDYWNoZXMgdW50aWwgaW52YWxpZGF0ZWQuXG4gICAqL1xuICBhc3luYyBsb2FkVGVtcGxhdGVTb3VyY2UodGVtcGxhdGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAvLyBDaGVjayBjYWNoZSBmaXJzdFxuICAgIGlmICh0aGlzLnRlbXBsYXRlQ2FjaGUuaGFzKHRlbXBsYXRlUGF0aCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlQ2FjaGUuZ2V0KHRlbXBsYXRlUGF0aCkhO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBwYXRoIFx1MjAxNCBhZGQgLmpzIGlmIG1pc3NpbmdcbiAgICBsZXQgcmVzb2x2ZWRQYXRoID0gdGVtcGxhdGVQYXRoO1xuICAgIGlmICghcmVzb2x2ZWRQYXRoLmVuZHNXaXRoKFwiLmpzXCIpICYmICFyZXNvbHZlZFBhdGguZW5kc1dpdGgoXCIubWRcIikpIHtcbiAgICAgIHJlc29sdmVkUGF0aCArPSBcIi5qc1wiO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocmVzb2x2ZWRQYXRoKTtcbiAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5zZXQodGVtcGxhdGVQYXRoLCBzb3VyY2UpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE9sZW4gVGVtcGxhdGVFbmdpbmU6IEZhaWxlZCB0byByZWFkIHRlbXBsYXRlICR7cmVzb2x2ZWRQYXRofTpgLCBlcnIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGUgdGhlIGNhY2hlIGZvciBhIHNwZWNpZmljIHRlbXBsYXRlIChlLmcuIGFmdGVyIGVkaXRzKS5cbiAgICovXG4gIGludmFsaWRhdGVDYWNoZSh0ZW1wbGF0ZVBhdGg/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGVtcGxhdGVQYXRoKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlQ2FjaGUuZGVsZXRlKHRlbXBsYXRlUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBDb250ZXh0IENyZWF0aW9uIC0tLVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgVGVtcGxhdGVDb250ZXh0IHRoYXQgZ2V0cyBwYXNzZWQgdG8gdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZENvbnRleHQoXG4gICAgZmlsZTogVEZpbGUsXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICk6IFRlbXBsYXRlQ29udGV4dCB7XG4gICAgY29uc3QgYXBwID0gdGhpcy5hcHA7XG4gICAgY29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW47XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXBwLFxuICAgICAgcGx1Z2luLFxuICAgICAgZmlsZSxcbiAgICAgIGNvbnRhaW5lcixcblxuICAgICAgLy8gLS0tIERhdGEgQmluZGluZyAtLS1cblxuICAgICAgZnJvbnRtYXR0ZXI6IHsgLi4uZnJvbnRtYXR0ZXIgfSxcblxuICAgICAgZ2V0RGF0YShrZXk/OiBzdHJpbmcpOiB1bmtub3duIHtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiB7IC4uLmZyb250bWF0dGVyIH07XG4gICAgICAgIHJldHVybiBmcm9udG1hdHRlcltrZXldO1xuICAgICAgfSxcblxuICAgICAgYXN5bmMgc2V0RGF0YShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZm0pID0+IHtcbiAgICAgICAgICBmbVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgb3VyIGxvY2FsIHNuYXBzaG90XG4gICAgICAgIGZyb250bWF0dGVyW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIHNldE11bHRpcGxlRGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgICBmbVtrXSA9IHY7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVXBkYXRlIGxvY2FsIHNuYXBzaG90XG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgZnJvbnRtYXR0ZXJba10gPSB2O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyAtLS0gVmF1bHQgSGVscGVycyAtLS1cblxuICAgICAgYXN5bmMgcmVhZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgICAgIGNvbnN0IGYgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoIWYgfHwgIShmIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGFwcC52YXVsdC5yZWFkKGYpO1xuICAgICAgfSxcblxuICAgICAgZ2V0RmlsZXNJbkZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBURmlsZVtdIHtcbiAgICAgICAgcmV0dXJuIGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKFxuICAgICAgICAgIChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpLFxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgZ2V0RmlsZU1ldGFkYXRhKHBhdGg6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGYgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoIWYgfHwgIShmIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZik7XG4gICAgICAgIHJldHVybiAoY2FjaGU/LmZyb250bWF0dGVyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyBudWxsO1xuICAgICAgfSxcblxuICAgICAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAgICAgbm90aWNlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBuZXcgTm90aWNlKG1lc3NhZ2UsIHRpbWVvdXQpO1xuICAgICAgfSxcblxuICAgICAgbW9tZW50OiB3aW5kb3cubW9tZW50LFxuXG4gICAgICBjcmVhdGVFbDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICAgICAgdGFnOiBLLFxuICAgICAgICBhdHRycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cnMpKSB7XG4gICAgICAgICAgICBpZiAoayA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcImh0bWxcIikge1xuICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcImNsc1wiIHx8IGsgPT09IFwiY2xhc3NcIikge1xuICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tLSBSZW5kZXJpbmcgLS0tXG5cbiAgLyoqXG4gICAqIE1haW4gcmVuZGVyIG1ldGhvZC4gUmVzb2x2ZXMgYSB0ZW1wbGF0ZSBJRCAoYnVpbHQtaW4gb3IgdmF1bHQgcGF0aClcbiAgICogYW5kIHJlbmRlcnMgaXQgaW50byBhIGNvbnRhaW5lciBib3VuZCB0byB0aGUgZ2l2ZW4gbm90ZSdzIGZyb250bWF0dGVyLlxuICAgKi9cbiAgYXN5bmMgcmVuZGVyKFxuICAgIHRlbXBsYXRlSWQ6IHN0cmluZyxcbiAgICBmaWxlOiBURmlsZSxcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAvLyAxLiBSZXNvbHZlIHRlbXBsYXRlIHNvdXJjZTogY2hlY2sgYnVpbHQtaW4gdGVtcGxhdGVzIGZpcnN0LCB0aGVuIHZhdWx0XG4gICAgbGV0IHNvdXJjZTogc3RyaW5nIHwgbnVsbCA9IEJVSUxUSU5fVEVNUExBVEVTW3RlbXBsYXRlSWRdID8/IG51bGw7XG5cbiAgICBpZiAoIXNvdXJjZSkge1xuICAgICAgLy8gRmFsbCBiYWNrIHRvIGxvYWRpbmcgZnJvbSB2YXVsdCBhcyBhIC5qcyBmaWxlIHBhdGhcbiAgICAgIHNvdXJjZSA9IGF3YWl0IHRoaXMubG9hZFRlbXBsYXRlU291cmNlKHRlbXBsYXRlSWQpO1xuICAgIH1cblxuICAgIGlmICghc291cmNlKSB7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGBUZW1wbGF0ZSBub3QgZm91bmQ6ICR7dGVtcGxhdGVJZH1gLFxuICAgICAgICBcIkNoZWNrIHRoZSB0ZW1wbGF0ZSBJRCBpbiBPbGVuIFNldHRpbmdzIFx1MjE5MiBBY3Rpdml0aWVzIFx1MjE5MiBDb25maWd1cmUuIEJ1aWx0LWluIHRlbXBsYXRlczogd29ya291dC5cIixcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IGN1cnJlbnQgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgIGNvbnN0IGZyb250bWF0dGVyID0gKGNhY2hlPy5mcm9udG1hdHRlciBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPz8ge307XG5cbiAgICAvLyAzLiBCdWlsZCBjb250ZXh0XG4gICAgY29uc3QgY3R4ID0gdGhpcy5idWlsZENvbnRleHQoZmlsZSwgY29udGFpbmVyLCBmcm9udG1hdHRlcik7XG5cbiAgICAvLyA0LiBFeGVjdXRlIHRlbXBsYXRlXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIHdyYXAgdGhlIHRlbXBsYXRlIHNvdXJjZSBzbyB0aGF0IGBjdHhgIGlzIGF2YWlsYWJsZSBhcyBhIGxvY2FsIHZhcmlhYmxlLlxuICAgICAgLy8gVGhlIHRlbXBsYXRlIGNvZGUgY2FuIGRlc3RydWN0dXJlIGZyb20gY3R4IG9yIHVzZSBpdCBkaXJlY3RseS5cbiAgICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFwiY3R4XCIsIHNvdXJjZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmbihjdHgpO1xuXG4gICAgICAvLyBJZiB0aGUgdGVtcGxhdGUgcmV0dXJucyBhIHByb21pc2UgKGFzeW5jIHRlbXBsYXRlKSwgYXdhaXQgaXRcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgYXdhaXQgcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE9sZW4gVGVtcGxhdGVFbmdpbmU6IEVycm9yIGV4ZWN1dGluZyB0ZW1wbGF0ZSAke3RlbXBsYXRlSWR9OmAsIGVycik7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGBUZW1wbGF0ZSBlcnJvcjogJHsoZXJyIGFzIEVycm9yKS5tZXNzYWdlfWAsXG4gICAgICAgIGBJbiB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZUlkfWAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYW4gZXJyb3IgbWVzc2FnZSBpbnNpZGUgdGhlIGNvbnRhaW5lci5cbiAgICovXG4gIHByaXZhdGUgcmVuZGVyRXJyb3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdGl0bGU6IHN0cmluZywgaGludDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG4gICAgY29uc3QgZXJyb3JEaXYgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3JcIiB9KTtcbiAgICBlcnJvckRpdi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXRlbXBsYXRlLWVycm9yLXRpdGxlXCIsIHRleHQ6IHRpdGxlIH0pO1xuICAgIGVycm9yRGl2LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3ItaGludFwiLCB0ZXh0OiBoaW50IH0pO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFRlbXBsYXRlIFx1MjAxNCBXb3Jrb3V0IFRyYWNrZXIgdjQuMFxuLy8gUmVuZGVycyBpbnNpZGUgdGhlIFdvcmtzcGFjZSB2aWV3IHdoZW4gdGhlIHVzZXIgZW50ZXJzXG4vLyBhIHdvcmtvdXQgc2Vzc2lvbi4gQWxsIGRhdGEgaXMgcmVhZC93cml0dGVuIHZpYSBjdHggQVBJLlxuLy8gU2V0dGluZ3MtZHJpdmVuOiBubyBoYXJkY29kZWQgcGF0aHMuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuY29uc3QgeyBjb250YWluZXIsIGdldERhdGEsIHNldERhdGEsIHNldE11bHRpcGxlRGF0YSwgYXBwLCBwbHVnaW4sIG1vbWVudCxcbiAgICAgICAgbm90aWNlLCBjcmVhdGVFbCwgZmlsZSwgcmVhZEZpbGUsIGdldEZpbGVzSW5Gb2xkZXIsIGdldEZpbGVNZXRhZGF0YSB9ID0gY3R4O1xuXG4vLyBcdTI1MDBcdTI1MDAgU2V0dGluZ3MgKGFsbCBjb25maWd1cmFibGUgdmlhIE9sZW4gU2V0dGluZ3MgPiBXb3Jrb3V0KSBcdTI1MDBcdTI1MDBcbmNvbnN0IHdzID0gcGx1Z2luLnNldHRpbmdzLndvcmtvdXRTZXR0aW5ncyB8fCB7fTtcbmNvbnN0IHdvcmtvdXRBY3Rpdml0eSA9IHBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoYSA9PiBhLmlkID09PSBcIndvcmtvdXRcIikgfHwge307XG5jb25zdCBXT1JLT1VUX0ZPTERFUiA9IHdvcmtvdXRBY3Rpdml0eS5mb2xkZXIgfHwgXCJQZXJzb25hbCBMaWZlLzAxIFdvcmtvdXRcIjtcbmNvbnN0IFNUQVRTX0ZJTEUgPSB3cy5zdGF0c0ZpbGUgfHwgXCJQZXJzb25hbCBMaWZlL1BlcnNvbmFsIFN0YXRzLm1kXCI7XG5jb25zdCBFWEVSQ0lTRV9EQl9GT0xERVIgPSB3cy5leGVyY2lzZURiRm9sZGVyIHx8IFwiSG9tZS9BY3Rpdml0aWVzL0V4ZXJjaXNlcyBkYXRhYmFzZVwiO1xuY29uc3QgTVVTQ0xFX0dST1VQUyA9IHdzLm11c2NsZUdyb3VwcyB8fCB7XG4gIFwiTmVja1wiOiB7IHN1Ymdyb3VwczogbnVsbCwgaWNvbjogXCJcXHVEODNFXFx1RERCNFwiIH0sXG4gIFwiQmFja1wiOiB7IHN1Ymdyb3VwczogW1wiTGF0c1wiLCBcIlRyYXBzXCIsIFwiUmhvbWJvaWRzXCIsIFwiTG93ZXIgQmFja1wiLCBcIlJlYXIgRGVsdHNcIl0sIGljb246IFwiXFx1RDgzRFxcdUREMTlcIiB9LFxuICBcIkNoZXN0XCI6IHsgc3ViZ3JvdXBzOiBudWxsLCBpY29uOiBcIlxcdUQ4M0RcXHVEQ0FBXCIgfSxcbiAgXCJTaG91bGRlcnNcIjogeyBzdWJncm91cHM6IFtcIkZyb250IERlbHRzXCIsIFwiU2lkZSBEZWx0c1wiLCBcIlJlYXIgRGVsdHNcIl0sIGljb246IFwiXFx1RDgzQ1xcdURGQUZcIiB9LFxuICBcIkNvcmVcIjogeyBzdWJncm91cHM6IG51bGwsIGljb246IFwiXFx1RDgzQ1xcdURGQUZcIiB9LFxuICBcIkxlZ3NcIjogeyBzdWJncm91cHM6IFtcIlF1YWRzXCIsIFwiSGFtc3RyaW5nc1wiLCBcIkdsdXRlc1wiLCBcIkNhbHZlc1wiLCBcIkFkZHVjdG9yc1wiXSwgaWNvbjogXCJcXHVEODNFXFx1RERCNVwiIH0sXG4gIFwiQXJtc1wiOiB7IHN1Ymdyb3VwczogW1wiQmljZXBzXCIsIFwiVHJpY2Vwc1wiLCBcIkZvcmVhcm1zXCJdLCBpY29uOiBcIlxcdUQ4M0RcXHVEQ0FBXCIgfSxcbn07XG5cbmNvbnN0IFRIRU1FID0ge1xuICBjb2xvcjogXCIjOWE4YzdhXCIsXG4gIGNvbG9ySG92ZXI6IFwiI2FhOWM4YVwiLFxuICBjb2xvckJvcmRlcjogXCIjM2EzNDJhXCIsXG4gIGNvbG9yQm9yZGVySG92ZXI6IFwiIzRhNDQzYVwiLFxuICBjb2xvck11dGVkOiBcIiM2YTVhNGFcIixcbiAgY29sb3JMaWdodDogXCIjYjhhODkwXCIsXG4gIGNvbG9yRGlzY2lwbGluZTogXCIjYTg5ODYwXCIsXG4gIGNvbG9yRmxvdzogXCIjNmE4YTlhXCIsXG4gIHN5c3RlbUdyZWVuOiBcIiM3YTlhN2RcIlxufTtcblxuY29uc3QgU1RSRU5HVEhfTEVWRUxTID0ge1xuICBcIlVudHJhaW5lZFwiOiAgICB7IGNvbG9yOiBcIiM2YTZhNmFcIiwgaWNvbjogXCJcXHUyNUNCXCIgfSxcbiAgXCJCZWdpbm5lclwiOiAgICAgeyBjb2xvcjogXCIjYTg5ODYwXCIsIGljb246IFwiXFx1MjVEMFwiIH0sXG4gIFwiTm92aWNlXCI6ICAgICAgIHsgY29sb3I6IFwiIzdhOWE3ZFwiLCBpY29uOiBcIlxcdTI1RDFcIiB9LFxuICBcIkludGVybWVkaWF0ZVwiOiB7IGNvbG9yOiBcIiM2YThhOWFcIiwgaWNvbjogXCJcXHUyNUQ1XCIgfSxcbiAgXCJBZHZhbmNlZFwiOiAgICAgeyBjb2xvcjogXCIjOGE3YTlhXCIsIGljb246IFwiXFx1MjVDRlwiIH0sXG4gIFwiRWxpdGVcIjogICAgICAgIHsgY29sb3I6IFwiIzlhNmE3YVwiLCBpY29uOiBcIlxcdTI2MDVcIiB9XG59O1xuXG4vLyBcdTI1MDBcdTI1MDAgU3RhdGUgKGZyb20gZnJvbnRtYXR0ZXIgb2YgdGhlIGRhaWx5IG5vdGUpIFx1MjUwMFx1MjUwMFxubGV0IGV4ZXJjaXNlcyA9IGdldERhdGEoXCJleGVyY2lzZXNcIikgfHwgW107XG5sZXQgbXVzY2xlR3JvdXBzID0gZ2V0RGF0YShcIm11c2NsZUdyb3Vwc1wiKSB8fCBbXTtcbmxldCBjdXJyZW50TXVzY2xlSW5kZXggPSBnZXREYXRhKFwiY3VycmVudE11c2NsZUluZGV4XCIpIHx8IDA7XG5jb25zdCBpc0NvbXBsZXRlZCA9IGdldERhdGEoXCJXb3Jrb3V0XCIpID09PSB0cnVlO1xuXG4vLyBcdTI1MDBcdTI1MDAgSW5qZWN0IHN0eWxlcyBvbmNlIFx1MjUwMFx1MjUwMFxuaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm9sZW4tdHBsLXdvcmtvdXQtdjRcIikpIHtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIHN0eWxlLmlkID0gXCJvbGVuLXRwbC13b3Jrb3V0LXY0XCI7XG4gIHN0eWxlLnRleHRDb250ZW50ID0gYFxuICAgIC5vdHctY29udGFpbmVyICogeyBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLm90dy1jb250YWluZXIgeyBtYXgtd2lkdGg6IDUwMHB4OyBtYXJnaW46IDAgYXV0bzsgcGFkZGluZzogMTBweCAwOyBmb250LWZhbWlseTogR2VvcmdpYSwgc2VyaWY7IH1cbiAgICBAa2V5ZnJhbWVzIG90dy1icmVhdGhlIHsgMCUsIDEwMCUgeyBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCByZ2JhKDE1NCwxNDAsMTIyLDAuMDMpOyB9IDUwJSB7IGJveC1zaGFkb3c6IGluc2V0IDAgMCA0MHB4IHJnYmEoMTU0LDE0MCwxMjIsMC4wOCk7IH0gfVxuICAgIEBrZXlmcmFtZXMgb3R3LWZsb2F0LXVwIHsgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IG9wYWNpdHk6IDA7IH0gMTAlIHsgb3BhY2l0eTogMC40OyB9IDkwJSB7IG9wYWNpdHk6IDAuNDsgfSAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDBweCkgdHJhbnNsYXRlWCgyMHB4KTsgb3BhY2l0eTogMDsgfSB9XG4gICAgLm90dy1jYXJkIHsgYmFja2dyb3VuZDogIzBhMGEwYTsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgcGFkZGluZzogMTZweDsgcG9zaXRpb246IHJlbGF0aXZlOyBtYXJnaW4tYm90dG9tOiAxNnB4OyB9XG4gICAgLm90dy1jYXJkLWJyZWF0aGUgeyBhbmltYXRpb246IG90dy1icmVhdGhlIDZzIGVhc2UtaW4tb3V0IGluZmluaXRlOyB9XG4gICAgLm90dy1oZWFkZXIgeyB0ZXh0LWFsaWduOiBjZW50ZXI7IHBhZGRpbmc6IDIwcHg7IH1cbiAgICAub3R3LXRpdGxlIHsgbWFyZ2luOiAwOyBjb2xvcjogIzlhOGM3YTsgZm9udC1zaXplOiAyNHB4OyBmb250LXdlaWdodDogNjAwOyBsZXR0ZXItc3BhY2luZzogNHB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLm90dy1wcm9ncmVzcy1sYWJlbCB7IGNvbG9yOiAjNmE1YTRhOyBmb250LXNpemU6IDEycHg7IG1hcmdpbi10b3A6IDhweDsgfVxuICAgIC5vdHctYnRuIHsgcGFkZGluZzogMTRweCAyNHB4OyBib3JkZXI6IG5vbmU7IGZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDJweDsgY3Vyc29yOiBwb2ludGVyOyB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLm90dy1idG4tcHJpbWFyeSB7IGJhY2tncm91bmQ6ICM5YThjN2E7IGNvbG9yOiAjMGEwYTBhOyB3aWR0aDogMTAwJTsgfVxuICAgIC5vdHctYnRuLXByaW1hcnk6YWN0aXZlIHsgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTsgfVxuICAgIC5vdHctYnRuLXNlY29uZGFyeSB7IGJhY2tncm91bmQ6ICMwZjBmMGY7IGJvcmRlcjogMXB4IHNvbGlkICMzYTM0MmE7IGNvbG9yOiAjNmE1YTRhOyB9XG4gICAgLm90dy1idG4tc2Vjb25kYXJ5OmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogIzlhOGM3YTsgY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LWJ0bi1maW5pc2ggeyBiYWNrZ3JvdW5kOiAjN2E5YTdkOyBjb2xvcjogIzBhMGEwYTsgfVxuICAgIC5vdHctYnRuLWRhc2hlZCB7IHdpZHRoOiAxMDAlOyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgYm9yZGVyOiAxcHggZGFzaGVkICMzYTM0MmE7IGNvbG9yOiAjNmE1YTRhOyB9XG4gICAgLm90dy1idG4tZGFzaGVkOmFjdGl2ZSB7IGJvcmRlci1jb2xvcjogIzlhOGM3YTsgY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LW5hdi1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IG1hcmdpbi10b3A6IDI0cHg7IH1cbiAgICAub3R3LW5hdi1yb3cgLm90dy1idG4geyBmbGV4OiAxOyB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAub3R3LXNldC1yb3cgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bzsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAxMnB4OyBwYWRkaW5nOiAxMnB4OyBiYWNrZ3JvdW5kOiAjMGYwZjBmOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBtYXJnaW4tYm90dG9tOiA2cHg7IH1cbiAgICAub3R3LXNldC1yb3cuY29tcGxldGVkIHsgb3BhY2l0eTogMC42OyB9XG4gICAgLm90dy1jaGVja2JveCB7IHdpZHRoOiAyNHB4OyBoZWlnaHQ6IDI0cHg7IGJvcmRlcjogMnB4IHNvbGlkICMzYTM0MmE7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBjdXJzb3I6IHBvaW50ZXI7IGNvbG9yOiAjMGEwYTBhOyBmb250LXdlaWdodDogYm9sZDsgdHJhbnNpdGlvbjogYWxsIDAuMnM7IGZsZXgtc2hyaW5rOiAwOyB9XG4gICAgLm90dy1jaGVja2JveC5jaGVja2VkIHsgYmFja2dyb3VuZDogIzdhOWE3ZDsgYm9yZGVyLWNvbG9yOiAjN2E5YTdkOyB9XG4gICAgLm90dy1pbnB1dCB7IHBhZGRpbmc6IDZweDsgYmFja2dyb3VuZDogIzBhMGEwYTsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgY29sb3I6ICM5YThjN2E7IHRleHQtYWxpZ246IGNlbnRlcjsgZm9udC1zaXplOiAxNHB4OyBmb250LXdlaWdodDogNjAwOyB3aWR0aDogNTBweDsgfVxuICAgIC5vdHctY3RybC1idG4geyB3aWR0aDogMzJweDsgaGVpZ2h0OiAzMnB4OyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYmFja2dyb3VuZDogIzBmMGYwZjsgYm9yZGVyOiAxcHggc29saWQgIzNhMzQyYTsgY29sb3I6ICM5YThjN2E7IGN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAxNnB4OyBmbGV4LXNocmluazogMDsgfVxuICAgIC5vdHctY3RybC1idG46YWN0aXZlIHsgYmFja2dyb3VuZDogIzlhOGM3YTsgY29sb3I6ICMwYTBhMGE7IH1cbiAgICAub3R3LXdhcm11cC1iYWRnZSB7IGZvbnQtc2l6ZTogOXB4OyBjb2xvcjogIzZhOGE5YTsgcGFkZGluZzogMnB4IDZweDsgYmFja2dyb3VuZDogcmdiYSgxMDYsMTM4LDE1NCwwLjE1KTsgYm9yZGVyLXJhZGl1czogM3B4OyB9XG4gICAgLm90dy1zdHJlbmd0aC1iYXIgeyBoZWlnaHQ6IDZweDsgYmFja2dyb3VuZDogIzFhMWExYTsgYm9yZGVyLXJhZGl1czogM3B4OyBvdmVyZmxvdzogaGlkZGVuOyBtYXJnaW4tdG9wOiA2cHg7IH1cbiAgICAub3R3LXN0cmVuZ3RoLWZpbGwgeyBoZWlnaHQ6IDEwMCU7IGJvcmRlci1yYWRpdXM6IDNweDsgdHJhbnNpdGlvbjogd2lkdGggMC42cyBjdWJpYy1iZXppZXIoMC40LDAsMC4yLDEpOyB9XG4gICAgLm90dy1zdHJlbmd0aC1iYWRnZSB7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDZweDsgcGFkZGluZzogNnB4IDEycHg7IGJvcmRlci1yYWRpdXM6IDRweDsgZm9udC1zaXplOiAxMnB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogMnB4OyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG4gICAgLm90dy1wci1ib3ggeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDRweDsgcGFkZGluZzogMTBweCAxMnB4OyBiYWNrZ3JvdW5kOiByZ2JhKDE2OCwxNTIsOTYsMC4xKTsgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjgsMTUyLDk2LDAuMyk7IGJvcmRlci1yYWRpdXM6IDRweDsgbWFyZ2luLXRvcDogOHB4OyB9XG4gICAgLm90dy1tb2RhbC1vdmVybGF5IHsgcG9zaXRpb246IGZpeGVkOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB6LWluZGV4OiA5OTk5OyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMHB4KTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjVzIGVhc2UsIGJhY2tkcm9wLWZpbHRlciAwLjVzIGVhc2U7IH1cbiAgICAub3R3LW1vZGFsLW92ZXJsYXkudmlzaWJsZSB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45NSk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpOyB9XG4gICAgLm90dy1tb2RhbC1jb250ZW50IHsgYmFja2dyb3VuZDogIzBhMGEwYTsgcGFkZGluZzogMjhweCAyMHB4OyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBtYXgtd2lkdGg6IDU1MHB4OyB3aWR0aDogOTAlOyBtYXgtaGVpZ2h0OiA4NXZoOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDE2cHg7IHBvc2l0aW9uOiByZWxhdGl2ZTsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwcHgpOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuNXMgZWFzZTsgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAgIC5vdHctbW9kYWwtb3ZlcmxheS52aXNpYmxlIC5vdHctbW9kYWwtY29udGVudCB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxuICAgIC5vdHctc3VtbWFyeS1jb21wbGV0ZSB7IHRleHQtYWxpZ246IGNlbnRlcjsgcGFkZGluZzogMjRweCAwOyB9XG4gICAgLm90dy1zdW1tYXJ5LWNvbXBsZXRlIGgyIHsgbWFyZ2luOiAwOyBjb2xvcjogIzdhOWE3ZDsgZm9udC1zaXplOiAxNnB4OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogM3B4OyB9XG4gICAgLm90dy1mZWVsLWJ0biB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMTZweDsgcGFkZGluZzogMTZweCAyMHB4OyBiYWNrZ3JvdW5kOiAjMGMwYzBjOyBjdXJzb3I6IHBvaW50ZXI7IG1hcmdpbi1ib3R0b206IDEwcHg7IHRyYW5zaXRpb246IGFsbCAwLjJzOyB9XG4gICAgLm90dy1mZWVsLWJ0bjphY3RpdmUgeyBiYWNrZ3JvdW5kOiAjMTAxMDEwOyB9XG4gICAgLm90dy1tdXNjbGUtdG9nZ2xlIHsgcGFkZGluZzogMTJweCAxOHB4OyBiYWNrZ3JvdW5kOiAjMGYwZjBmOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBjb2xvcjogIzlhOGM3YTsgZm9udC1zaXplOiAxM3B4OyBsZXR0ZXItc3BhY2luZzogMXB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cbiAgICAub3R3LW11c2NsZS10b2dnbGUuYWN0aXZlIHsgYmFja2dyb3VuZDogcmdiYSgxNTQsMTQwLDEyMiwwLjMpOyBib3JkZXItY29sb3I6ICM5YThjN2E7IH1cbiAgICAub3R3LXN1Ymdyb3VwLWNvbnRhaW5lciB7IG1heC1oZWlnaHQ6IDA7IG92ZXJmbG93OiBoaWRkZW47IHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLCBvcGFjaXR5IDAuM3MgZWFzZSwgcGFkZGluZyAwLjNzIGVhc2U7IG9wYWNpdHk6IDA7IHBhZGRpbmc6IDAgMTJweDsgfVxuICAgIC5vdHctc3ViZ3JvdXAtY29udGFpbmVyLmV4cGFuZGVkIHsgbWF4LWhlaWdodDogMzAwcHg7IG9wYWNpdHk6IDE7IHBhZGRpbmc6IDEycHg7IH1cbiAgICAub3R3LXN1Ymdyb3VwLWJ0biB7IHBhZGRpbmc6IDhweCAxNHB4OyBiYWNrZ3JvdW5kOiAjMGYwZjBmOyBib3JkZXI6IDFweCBzb2xpZCAjM2EzNDJhOyBjb2xvcjogIzZhNWE0YTsgZm9udC1zaXplOiAxMnB4OyBjdXJzb3I6IHBvaW50ZXI7IHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7IH1cbiAgICAub3R3LXN1Ymdyb3VwLWJ0bi5hY3RpdmUgeyBiYWNrZ3JvdW5kOiByZ2JhKDE1NCwxNDAsMTIyLDAuMyk7IGJvcmRlci1jb2xvcjogIzlhOGM3YTsgY29sb3I6ICM5YThjN2E7IH1cbiAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBVdGlsaXR5IEZ1bmN0aW9ucyBcdTI1MDBcdTI1MDBcblxuZnVuY3Rpb24gYWRkQ29ybmVycyhlbCwgY29sb3IsIHNpemUgPSAxNCkge1xuICBbXCJUTFwiLCBcIlRSXCIsIFwiQkxcIiwgXCJCUlwiXS5mb3JFYWNoKChwb3MpID0+IHtcbiAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpc1RvcCA9IHBvcy5pbmNsdWRlcyhcIlRcIiksIGlzTGVmdCA9IHBvcy5pbmNsdWRlcyhcIkxcIik7XG4gICAgYy5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOmFic29sdXRlOyR7aXNUb3A/XCJ0b3A6MFwiOlwiYm90dG9tOjBcIn07JHtpc0xlZnQ/XCJsZWZ0OjBcIjpcInJpZ2h0OjBcIn07d2lkdGg6JHtzaXplfXB4O2hlaWdodDoke3NpemV9cHg7Ym9yZGVyLSR7aXNUb3A/XCJ0b3BcIjpcImJvdHRvbVwifToxcHggc29saWQgJHtjb2xvcn07Ym9yZGVyLSR7aXNMZWZ0P1wibGVmdFwiOlwicmlnaHRcIn06MXB4IHNvbGlkICR7Y29sb3J9O3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZTtgO1xuICAgIGVsLmFwcGVuZENoaWxkKGMpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRmxvYXRpbmdNb3RlcyhlbCwgY29sb3IsIGNvdW50ID0gMykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICBjb25zdCBtb3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb3RlLnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246YWJzb2x1dGU7Ym90dG9tOjEwJTtsZWZ0OiR7MTAgKyBNYXRoLnJhbmRvbSgpICogODB9JTt3aWR0aDokezEgKyBNYXRoLnJhbmRvbSgpICogMn1weDtoZWlnaHQ6JHsxICsgTWF0aC5yYW5kb20oKSAqIDJ9cHg7YmFja2dyb3VuZDoke2NvbG9yfTtib3JkZXItcmFkaXVzOjUwJTtvcGFjaXR5OjA7cG9pbnRlci1ldmVudHM6bm9uZTthbmltYXRpb246b3R3LWZsb2F0LXVwICR7OCArIE1hdGgucmFuZG9tKCkgKiA2fXMgJHtNYXRoLnJhbmRvbSgpICogMTB9cyBlYXNlLW91dCBpbmZpbml0ZTt6LWluZGV4OjE7YDtcbiAgICBlbC5hcHBlbmRDaGlsZChtb3RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGUxUk0od2VpZ2h0LCByZXBzKSB7XG4gIGlmIChyZXBzID09PSAwIHx8IHdlaWdodCA9PT0gMCkgcmV0dXJuIDA7XG4gIGlmIChyZXBzID09PSAxKSByZXR1cm4gd2VpZ2h0O1xuICByZXR1cm4gTWF0aC5yb3VuZCh3ZWlnaHQgKiAoMSArIHJlcHMgLyAzMCkpO1xufVxuXG5mdW5jdGlvbiBnZXRGaXJzdFdvcmtpbmdTZXRJbmRleChzZXRzKSB7XG4gIHJldHVybiBzZXRzLmZpbmRJbmRleCgocykgPT4gIXMuaXNXYXJtdXApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVXYXJtdXBXZWlnaHRzKGV4LCBuZXdXKSB7XG4gIGNvbnN0IHdhcm11cHMgPSBleC5zZXRzLmZpbHRlcigocykgPT4gcy5pc1dhcm11cCk7XG4gIFswLjUsIDAuNywgMC44NV0uZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgIGlmICh3YXJtdXBzW2ldKSB3YXJtdXBzW2ldLndlaWdodCA9IE1hdGgucm91bmQobmV3VyAqIHApO1xuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0UGVyc29uYWxTdGF0cygpIHtcbiAgY29uc3QgZm0gPSBnZXRGaWxlTWV0YWRhdGEoU1RBVFNfRklMRSk7XG4gIGlmICghZm0pIHJldHVybiB7IHdlaWdodDogNjEsIGhlaWdodDogMTc1LCBiaXJ0aGRhdGU6IFwiMjAwNS0xMS0yOVwiIH07XG4gIHJldHVybiB7IHdlaWdodDogZm0uV2VpZ2h0IHx8IDYxLCBoZWlnaHQ6IGZtLkhlaWdodCB8fCAxNzUsIGJpcnRoZGF0ZTogZm0uQmlydGhkYXRlIHx8IFwiMjAwNS0xMS0yOVwiIH07XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUFnZShiZCkge1xuICBpZiAoIWJkKSByZXR1cm4gMjA7XG4gIGNvbnN0IGIgPSBuZXcgRGF0ZShiZCksIHQgPSBuZXcgRGF0ZSgpO1xuICBsZXQgYSA9IHQuZ2V0RnVsbFllYXIoKSAtIGIuZ2V0RnVsbFllYXIoKTtcbiAgaWYgKHQuZ2V0TW9udGgoKSA8IGIuZ2V0TW9udGgoKSB8fCAodC5nZXRNb250aCgpID09PSBiLmdldE1vbnRoKCkgJiYgdC5nZXREYXRlKCkgPCBiLmdldERhdGUoKSkpIGEtLTtcbiAgcmV0dXJuIGE7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEJpcnRoZGF0ZShkYXRlU3RyKSB7XG4gIGlmICghZGF0ZVN0cikgcmV0dXJuIFwiXCI7XG4gIHJldHVybiBuZXcgRGF0ZShkYXRlU3RyKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdGFuZGFyZFZhbHVlKHZhbCkge1xuICBpZiAodHlwZW9mIHZhbCAhPT0gXCJzdHJpbmdcIikgdmFsID0gU3RyaW5nKHZhbCk7XG4gIHZhbCA9IHZhbC50cmltKCk7XG4gIGlmICh2YWwuaW5jbHVkZXMoXCI8XCIpKSB7XG4gICAgY29uc3QgbnVtID0gcGFyc2VGbG9hdCh2YWwucmVwbGFjZSgvWzxcXHNdL2csIFwiXCIpKTtcbiAgICByZXR1cm4gIWlzTmFOKG51bSkgJiYgbnVtID4gMCA/IG51bSAqIDAuNSA6IDAuMTtcbiAgfVxuICBjb25zdCBudW0gPSBwYXJzZUZsb2F0KHZhbCk7XG4gIHJldHVybiBpc05hTihudW0pID8gMCA6IG51bTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0U3RyZW5ndGhTdGFuZGFyZChleGVyY2lzZU5hbWUpIHtcbiAgY29uc3QgZmlsZVBhdGggPSBFWEVSQ0lTRV9EQl9GT0xERVIgKyBcIi9cIiArIGV4ZXJjaXNlTmFtZSArIFwiLm1kXCI7XG4gIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKGZpbGVQYXRoKTtcbiAgY29uc3QgaXNCVyA9IGZtPy5UeXBlID09PSBcIkJvZHl3ZWlnaHRcIjtcbiAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlYWRGaWxlKGZpbGVQYXRoKTtcbiAgaWYgKCFjb250ZW50KSByZXR1cm4gbnVsbDtcbiAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuICBjb25zdCBid1RhYmxlID0gW10sIGFnZVRhYmxlID0gW107XG4gIGxldCBjdXJyZW50VGFibGUgPSBudWxsO1xuICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICBpZiAobGluZS5tYXRjaCgvXFx8XFxzKkJXXFxzKlxcfC9pKSkgeyBjdXJyZW50VGFibGUgPSBcImJ3XCI7IGNvbnRpbnVlOyB9XG4gICAgaWYgKGxpbmUubWF0Y2goL1xcfFxccypBZ2VcXHMqXFx8L2kpKSB7IGN1cnJlbnRUYWJsZSA9IFwiYWdlXCI7IGNvbnRpbnVlOyB9XG4gICAgaWYgKGxpbmUuc3RhcnRzV2l0aChcInwtLS1cIikgfHwgbGluZS5zdGFydHNXaXRoKFwifCAtLS1cIikpIGNvbnRpbnVlO1xuICAgIGNvbnN0IG0gPSBsaW5lLm1hdGNoKC9cXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHxcXHMqKFtefF0rKVxccypcXHwvKTtcbiAgICBpZiAobSkge1xuICAgICAgY29uc3Qgcm93ID0geyBrZXk6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzFdKSwgYmVnaW5uZXI6IHBhcnNlU3RhbmRhcmRWYWx1ZShtWzJdKSwgbm92aWNlOiBwYXJzZVN0YW5kYXJkVmFsdWUobVszXSksIGludGVybWVkaWF0ZTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNF0pLCBhZHZhbmNlZDogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNV0pLCBlbGl0ZTogcGFyc2VTdGFuZGFyZFZhbHVlKG1bNl0pIH07XG4gICAgICBpZiAocm93LmtleSA+IDAgJiYgKHJvdy5iZWdpbm5lciA+IDAgfHwgcm93Lm5vdmljZSA+IDAgfHwgcm93LmludGVybWVkaWF0ZSA+IDApKSB7XG4gICAgICAgIGlmIChjdXJyZW50VGFibGUgPT09IFwiYndcIikgYndUYWJsZS5wdXNoKHJvdyk7XG4gICAgICAgIGVsc2UgaWYgKGN1cnJlbnRUYWJsZSA9PT0gXCJhZ2VcIikgYWdlVGFibGUucHVzaChyb3cpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4geyBid1RhYmxlLCBhZ2VUYWJsZSwgaXNCb2R5d2VpZ2h0OiBpc0JXLCBoYXNWYWxpZERhdGE6IGJ3VGFibGUubGVuZ3RoID4gMCB8fCBhZ2VUYWJsZS5sZW5ndGggPiAwIH07XG59XG5cbmZ1bmN0aW9uIGludGVycG9sYXRlU3RhbmRhcmQodGFibGUsIHZhbHVlKSB7XG4gIGlmICghdGFibGUgfHwgdGFibGUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgY29uc3Qgc29ydGVkID0gWy4uLnRhYmxlXS5zb3J0KChhLCBiKSA9PiBhLmtleSAtIGIua2V5KTtcbiAgbGV0IGxvd2VyID0gc29ydGVkWzBdLCB1cHBlciA9IHNvcnRlZFtzb3J0ZWQubGVuZ3RoIC0gMV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGlmIChzb3J0ZWRbaV0ua2V5IDw9IHZhbHVlICYmIHNvcnRlZFtpICsgMV0ua2V5ID49IHZhbHVlKSB7IGxvd2VyID0gc29ydGVkW2ldOyB1cHBlciA9IHNvcnRlZFtpICsgMV07IGJyZWFrOyB9XG4gIH1cbiAgaWYgKHZhbHVlIDw9IGxvd2VyLmtleSkgcmV0dXJuIHsgLi4ubG93ZXIgfTtcbiAgaWYgKHZhbHVlID49IHVwcGVyLmtleSkgcmV0dXJuIHsgLi4udXBwZXIgfTtcbiAgY29uc3QgcmF0aW8gPSAodmFsdWUgLSBsb3dlci5rZXkpIC8gKHVwcGVyLmtleSAtIGxvd2VyLmtleSk7XG4gIHJldHVybiB7IGtleTogdmFsdWUsIGJlZ2lubmVyOiBsb3dlci5iZWdpbm5lciArIHJhdGlvICogKHVwcGVyLmJlZ2lubmVyIC0gbG93ZXIuYmVnaW5uZXIpLCBub3ZpY2U6IGxvd2VyLm5vdmljZSArIHJhdGlvICogKHVwcGVyLm5vdmljZSAtIGxvd2VyLm5vdmljZSksIGludGVybWVkaWF0ZTogbG93ZXIuaW50ZXJtZWRpYXRlICsgcmF0aW8gKiAodXBwZXIuaW50ZXJtZWRpYXRlIC0gbG93ZXIuaW50ZXJtZWRpYXRlKSwgYWR2YW5jZWQ6IGxvd2VyLmFkdmFuY2VkICsgcmF0aW8gKiAodXBwZXIuYWR2YW5jZWQgLSBsb3dlci5hZHZhbmNlZCksIGVsaXRlOiBsb3dlci5lbGl0ZSArIHJhdGlvICogKHVwcGVyLmVsaXRlIC0gbG93ZXIuZWxpdGUpIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEF2ZXJhZ2VkU3RhbmRhcmRzKHN0ZCkge1xuICBjb25zdCBzdGF0cyA9IGF3YWl0IGdldFBlcnNvbmFsU3RhdHMoKTtcbiAgY29uc3QgYncgPSBpbnRlcnBvbGF0ZVN0YW5kYXJkKHN0ZC5id1RhYmxlLCBzdGF0cy53ZWlnaHQpO1xuICBjb25zdCBhZyA9IGludGVycG9sYXRlU3RhbmRhcmQoc3RkLmFnZVRhYmxlLCBjYWxjdWxhdGVBZ2Uoc3RhdHMuYmlydGhkYXRlKSk7XG4gIGlmIChidyAmJiBhZykgcmV0dXJuIHsgYmVnaW5uZXI6IChidy5iZWdpbm5lciArIGFnLmJlZ2lubmVyKSAvIDIsIG5vdmljZTogKGJ3Lm5vdmljZSArIGFnLm5vdmljZSkgLyAyLCBpbnRlcm1lZGlhdGU6IChidy5pbnRlcm1lZGlhdGUgKyBhZy5pbnRlcm1lZGlhdGUpIC8gMiwgYWR2YW5jZWQ6IChidy5hZHZhbmNlZCArIGFnLmFkdmFuY2VkKSAvIDIsIGVsaXRlOiAoYncuZWxpdGUgKyBhZy5lbGl0ZSkgLyAyIH07XG4gIHJldHVybiBidyB8fCBhZyB8fCBudWxsO1xufVxuXG5mdW5jdGlvbiBkZXRlcm1pbmVTdHJlbmd0aExldmVsKGN2LCBzdGQpIHtcbiAgaWYgKCFzdGQgfHwgY3YgPCAwKSByZXR1cm4geyBsZXZlbDogXCJVbnRyYWluZWRcIiwgY29sb3I6IFwiIzZhNmE2YVwiLCBwcm9ncmVzczogMCwgbmV4dFRhcmdldDogc3RkPy5iZWdpbm5lciB8fCAxIH07XG4gIGNvbnN0IHsgYmVnaW5uZXIsIG5vdmljZSwgaW50ZXJtZWRpYXRlLCBhZHZhbmNlZCwgZWxpdGUgfSA9IHN0ZDtcbiAgaWYgKGN2ID49IGVsaXRlKSByZXR1cm4geyBsZXZlbDogXCJFbGl0ZVwiLCBjb2xvcjogXCIjOWE2YTdhXCIsIHByb2dyZXNzOiAxMDAsIG5leHRUYXJnZXQ6IG51bGwgfTtcbiAgaWYgKGN2ID49IGFkdmFuY2VkKSByZXR1cm4geyBsZXZlbDogXCJBZHZhbmNlZFwiLCBjb2xvcjogXCIjOGE3YTlhXCIsIHByb2dyZXNzOiAoKGN2IC0gYWR2YW5jZWQpIC8gKGVsaXRlIC0gYWR2YW5jZWQpKSAqIDEwMCwgbmV4dFRhcmdldDogZWxpdGUgfTtcbiAgaWYgKGN2ID49IGludGVybWVkaWF0ZSkgcmV0dXJuIHsgbGV2ZWw6IFwiSW50ZXJtZWRpYXRlXCIsIGNvbG9yOiBcIiM2YThhOWFcIiwgcHJvZ3Jlc3M6ICgoY3YgLSBpbnRlcm1lZGlhdGUpIC8gKGFkdmFuY2VkIC0gaW50ZXJtZWRpYXRlKSkgKiAxMDAsIG5leHRUYXJnZXQ6IGFkdmFuY2VkIH07XG4gIGlmIChjdiA+PSBub3ZpY2UpIHJldHVybiB7IGxldmVsOiBcIk5vdmljZVwiLCBjb2xvcjogXCIjN2E5YTdkXCIsIHByb2dyZXNzOiAoKGN2IC0gbm92aWNlKSAvIChpbnRlcm1lZGlhdGUgLSBub3ZpY2UpKSAqIDEwMCwgbmV4dFRhcmdldDogaW50ZXJtZWRpYXRlIH07XG4gIGlmIChjdiA+PSBiZWdpbm5lcikgcmV0dXJuIHsgbGV2ZWw6IFwiQmVnaW5uZXJcIiwgY29sb3I6IFwiI2E4OTg2MFwiLCBwcm9ncmVzczogKChjdiAtIGJlZ2lubmVyKSAvIChub3ZpY2UgLSBiZWdpbm5lcikpICogMTAwLCBuZXh0VGFyZ2V0OiBub3ZpY2UgfTtcbiAgcmV0dXJuIHsgbGV2ZWw6IFwiVW50cmFpbmVkXCIsIGNvbG9yOiBcIiM2YTZhNmFcIiwgcHJvZ3Jlc3M6IGJlZ2lubmVyID4gMCA/IE1hdGgubWF4KDAsIChjdiAvIGJlZ2lubmVyKSAqIDEwMCkgOiAwLCBuZXh0VGFyZ2V0OiBiZWdpbm5lciB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBjYWxjdWxhdGVTdHJlbmd0aExldmVsKG5hbWUsIHcsIHIsIG1heFIpIHtcbiAgY29uc3Qgc3RkID0gYXdhaXQgZ2V0U3RyZW5ndGhTdGFuZGFyZChuYW1lKTtcbiAgaWYgKCFzdGQgfHwgIXN0ZC5oYXNWYWxpZERhdGEpIHJldHVybiBudWxsO1xuICBjb25zdCBhdmcgPSBhd2FpdCBnZXRBdmVyYWdlZFN0YW5kYXJkcyhzdGQpO1xuICBpZiAoIWF2ZykgcmV0dXJuIG51bGw7XG4gIGlmIChzdGQuaXNCb2R5d2VpZ2h0KSB7XG4gICAgY29uc3QgZWZmID0gbWF4UiAhPT0gbnVsbCAmJiBtYXhSICE9PSB1bmRlZmluZWQgPyBNYXRoLm1heChyLCBtYXhSKSA6IHI7XG4gICAgY29uc3QgcmVzID0gZGV0ZXJtaW5lU3RyZW5ndGhMZXZlbChlZmYsIGF2Zyk7XG4gICAgcmV0dXJuIHsgLi4ucmVzLCBjdXJyZW50VmFsdWU6IGVmZiwgaXNCb2R5d2VpZ2h0OiB0cnVlLCB1bml0OiBcInJlcHNcIiwgZGlzcGxheUxhYmVsOiBcIk1heCBSZXBzXCIgfTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodyA8PSAwKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBlc3QgPSBjYWxjdWxhdGUxUk0odywgcik7XG4gICAgY29uc3QgcmVzID0gZGV0ZXJtaW5lU3RyZW5ndGhMZXZlbChlc3QsIGF2Zyk7XG4gICAgcmV0dXJuIHsgLi4ucmVzLCBjdXJyZW50VmFsdWU6IGVzdCwgaXNCb2R5d2VpZ2h0OiBmYWxzZSwgdW5pdDogXCJrZ1wiLCBkaXNwbGF5TGFiZWw6IFwiRXN0LiAxUk1cIiB9O1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhhc1N0cmVuZ3RoU3RhbmRhcmQobmFtZSkge1xuICBjb25zdCBzdGQgPSBhd2FpdCBnZXRTdHJlbmd0aFN0YW5kYXJkKG5hbWUpO1xuICByZXR1cm4gc3RkICE9PSBudWxsICYmIHN0ZC5oYXNWYWxpZERhdGE7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldEV4ZXJjaXNlUFIobmFtZSkge1xuICBjb25zdCBzdGQgPSBhd2FpdCBnZXRTdHJlbmd0aFN0YW5kYXJkKG5hbWUpO1xuICBjb25zdCBpc0JXID0gc3RkPy5pc0JvZHl3ZWlnaHQgfHwgZmFsc2U7XG4gIGNvbnN0IGZpbGVzID0gZ2V0RmlsZXNJbkZvbGRlcihXT1JLT1VUX0ZPTERFUik7XG4gIGxldCBiZXN0ID0gbnVsbCwgYmVzdFYgPSAwO1xuICBmb3IgKGNvbnN0IGYgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBmbSA9IGdldEZpbGVNZXRhZGF0YShmLnBhdGgpO1xuICAgIGlmIChmbT8uZXhlcmNpc2VzICYmIEFycmF5LmlzQXJyYXkoZm0uZXhlcmNpc2VzKSAmJiBmbS5Xb3Jrb3V0ID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBleCA9IGZtLmV4ZXJjaXNlcy5maW5kKChlKSA9PiBlLm5hbWUgPT09IG5hbWUpO1xuICAgICAgaWYgKGV4Py5zZXRzKSB7XG4gICAgICAgIGZvciAoY29uc3Qgc2V0IG9mIGV4LnNldHMpIHtcbiAgICAgICAgICBpZiAoIXNldC5pc1dhcm11cCAmJiBzZXQuY29tcGxldGVkKSB7XG4gICAgICAgICAgICBpZiAoaXNCVykge1xuICAgICAgICAgICAgICBpZiAoc2V0LnJlcHMgPiBiZXN0VikgeyBiZXN0ViA9IHNldC5yZXBzOyBiZXN0ID0geyAuLi5zZXQsIGRhdGU6IGYuYmFzZW5hbWUsIHByVmFsdWU6IGJlc3RWLCBpc0JvZHl3ZWlnaHQ6IHRydWUgfTsgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChzZXQud2VpZ2h0ID4gMCkge1xuICAgICAgICAgICAgICBjb25zdCBlc3QgPSBjYWxjdWxhdGUxUk0oc2V0LndlaWdodCwgc2V0LnJlcHMpO1xuICAgICAgICAgICAgICBpZiAoZXN0ID4gYmVzdFYpIHsgYmVzdFYgPSBlc3Q7IGJlc3QgPSB7IC4uLnNldCwgZGF0ZTogZi5iYXNlbmFtZSwgZXN0aW1hdGVkMVJNOiBlc3QsIHByVmFsdWU6IGVzdCwgaXNCb2R5d2VpZ2h0OiBmYWxzZSB9OyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBiZXN0O1xufVxuXG5mdW5jdGlvbiBnZXRMYXN0V29ya291dEZvck11c2NsZUdyb3VwKG11c2NsZSkge1xuICBjb25zdCBmaWxlcyA9IGdldEZpbGVzSW5Gb2xkZXIoV09SS09VVF9GT0xERVIpLnNvcnQoKGEsIGIpID0+IGIuYmFzZW5hbWUubG9jYWxlQ29tcGFyZShhLmJhc2VuYW1lKSk7XG4gIGZvciAoY29uc3QgZiBvZiBmaWxlcykge1xuICAgIGlmIChmLnBhdGggPT09IGZpbGUucGF0aCkgY29udGludWU7IC8vIFNraXAgdGhlIGN1cnJlbnQgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZtID0gZ2V0RmlsZU1ldGFkYXRhKGYucGF0aCk7XG4gICAgaWYgKGZtPy5leGVyY2lzZXMgJiYgQXJyYXkuaXNBcnJheShmbS5leGVyY2lzZXMpKSB7XG4gICAgICBjb25zdCByZWxldmFudCA9IGZtLmV4ZXJjaXNlcy5maWx0ZXIoZXggPT4gZXgubXVzY2xlID09PSBtdXNjbGUgfHwgZXgubXVzY2xlR3JvdXAgPT09IG11c2NsZSk7XG4gICAgICBpZiAocmVsZXZhbnQubGVuZ3RoID4gMCkgcmV0dXJuIHsgZGF0ZTogZi5iYXNlbmFtZS5tYXRjaCgvXihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvKT8uWzFdLCBleGVyY2lzZXM6IHJlbGV2YW50LCBmaWxlOiBmIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgU2F2ZSBjdXJyZW50IHN0YXRlIHRvIGZyb250bWF0dGVyIFx1MjUwMFx1MjUwMFxuYXN5bmMgZnVuY3Rpb24gc2F2ZVN0YXRlKCkge1xuICBhd2FpdCBzZXRNdWx0aXBsZURhdGEoe1xuICAgIGV4ZXJjaXNlczogZXhlcmNpc2VzLFxuICAgIGN1cnJlbnRNdXNjbGVJbmRleDogY3VycmVudE11c2NsZUluZGV4LFxuICB9KTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFBlcnNvbmFsIFN0YXRzIFx1MjUwMFx1MjUwMFxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGVyc29uYWxTdGF0cyh3ZWlnaHQsIGhlaWdodCwgYmlydGhkYXRlKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBgLS0tXFxuV2VpZ2h0OiAke3dlaWdodH1cXG5IZWlnaHQ6ICR7aGVpZ2h0fVxcbkJpcnRoZGF0ZTogXCIke2JpcnRoZGF0ZX1cIlxcbi0tLVxcblxcbiMgUGVyc29uYWwgU3RhdHNcXG5cXG5VcGRhdGVkOiAke21vbWVudCgpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW1cIil9XFxuYDtcbiAgY29uc3Qgc3RhdHNGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChTVEFUU19GSUxFKTtcbiAgaWYgKHN0YXRzRmlsZSkgeyBhd2FpdCBhcHAudmF1bHQubW9kaWZ5KHN0YXRzRmlsZSwgY29udGVudCk7IH1cbiAgZWxzZSB7XG4gICAgY29uc3QgZm9sZGVyID0gU1RBVFNfRklMRS5zdWJzdHJpbmcoMCwgU1RBVFNfRklMRS5sYXN0SW5kZXhPZihcIi9cIikpO1xuICAgIGlmICghYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXIpKSBhd2FpdCBhcHAudmF1bHQuY3JlYXRlRm9sZGVyKGZvbGRlcik7XG4gICAgYXdhaXQgYXBwLnZhdWx0LmNyZWF0ZShTVEFUU19GSUxFLCBjb250ZW50KTtcbiAgfVxufVxuXG4vLyBcdTI1MDBcdTI1MDAgTW9kYWwgU3lzdGVtIFx1MjUwMFx1MjUwMFxubGV0IGFjdGl2ZU1vZGFsID0gbnVsbDtcblxuZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgaWYgKCFhY3RpdmVNb2RhbCkgcmV0dXJuO1xuICBhY3RpdmVNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZU1vZGFsPy5wYXJlbnROb2RlKSBhY3RpdmVNb2RhbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFjdGl2ZU1vZGFsKTtcbiAgICBhY3RpdmVNb2RhbCA9IG51bGw7XG4gIH0sIDUwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZGFsKHRpdGxlLCBjb250ZW50QnVpbGRlcikge1xuICBpZiAoYWN0aXZlTW9kYWwpIHsgYWN0aXZlTW9kYWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChhY3RpdmVNb2RhbCk7IGFjdGl2ZU1vZGFsID0gbnVsbDsgfVxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsLmNsYXNzTmFtZSA9IFwib3R3LW1vZGFsLW92ZXJsYXlcIjtcbiAgYWN0aXZlTW9kYWwgPSBtb2RhbDtcbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTmFtZSA9IFwib3R3LW1vZGFsLWNvbnRlbnRcIjtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcbiAgYWRkQ29ybmVycyhtb2RhbENvbnRlbnQsIFRIRU1FLmNvbG9yKTtcbiAgaWYgKHRpdGxlKSB7XG4gICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICB0LnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgdC5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjowO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjUwMDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC1hbGlnbjpjZW50ZXI7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO29wYWNpdHk6MC44O2A7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHQpO1xuICAgIGNvbnN0IGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGQuc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDo2MHB4O2hlaWdodDoxcHg7YmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoOTBkZWcsdHJhbnNwYXJlbnQsJHtUSEVNRS5jb2xvcn0sdHJhbnNwYXJlbnQpO21hcmdpbjowIGF1dG8gMTJweDtgO1xuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChkKTtcbiAgfVxuICBjb250ZW50QnVpbGRlcihtb2RhbENvbnRlbnQpO1xuICBtb2RhbC5vbmNsaWNrID0gKGUpID0+IHsgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkgY2xvc2VNb2RhbCgpOyB9O1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpKTtcbiAgcmV0dXJuIG1vZGFsO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgRmluaXNoIFdvcmtvdXQgXHUyNTAwXHUyNTAwXG5hc3luYyBmdW5jdGlvbiBmaW5pc2hXb3Jrb3V0KHR5cGUpIHtcbiAgYXdhaXQgc2V0TXVsdGlwbGVEYXRhKHtcbiAgICBXb3Jrb3V0OiB0cnVlLFxuICAgIFwiV29ya291dC1UeXBlXCI6IHR5cGUsXG4gICAgZXhlcmNpc2VzOiBleGVyY2lzZXMsXG4gICAgY3VycmVudE11c2NsZUluZGV4OiBjdXJyZW50TXVzY2xlSW5kZXgsXG4gIH0pO1xuICBub3RpY2UoXCJXb3Jrb3V0IGxvZ2dlZCBhcyBcIiArICh0eXBlID09PSBcImRpc2NpcGxpbmVcIiA/IFwiRGlzY2lwbGluZSBXaW5cIiA6IFwiRmxvdyBTdGF0ZVwiKSArIFwiIVwiKTtcbiAgcmVuZGVyKCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5GaW5pc2hNb2RhbCgpIHtcbiAgLy8gQnVpbGQgc3VtbWFyeSBkYXRhIGZpcnN0XG4gIGNvbnN0IGJ1aWxkU3VtbWFyeSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzdW1tYXJ5RGF0YSA9IFtdO1xuICAgIGZvciAoY29uc3QgZXggb2YgZXhlcmNpc2VzKSB7XG4gICAgICBjb25zdCBjb21wbGV0ZWQgPSBleC5zZXRzLmZpbHRlcihzID0+ICFzLmlzV2FybXVwICYmIHMuY29tcGxldGVkKTtcbiAgICAgIGlmIChjb21wbGV0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBoYXNTdGQgPSBhd2FpdCBoYXNTdHJlbmd0aFN0YW5kYXJkKGV4Lm5hbWUpO1xuICAgICAgICBjb25zdCBwciA9IGF3YWl0IGdldEV4ZXJjaXNlUFIoZXgubmFtZSk7XG4gICAgICAgIGxldCBiZXN0VyA9IDAsIGJlc3RSID0gMCwgbWF4UiA9IDAsIHNlc3Npb25CZXN0ID0gMDtcbiAgICAgICAgZm9yIChjb25zdCBzIG9mIGNvbXBsZXRlZCkge1xuICAgICAgICAgIGlmIChzLnJlcHMgPiBtYXhSKSBtYXhSID0gcy5yZXBzO1xuICAgICAgICAgIGlmIChzLndlaWdodCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IGVzdCA9IGNhbGN1bGF0ZTFSTShzLndlaWdodCwgcy5yZXBzKTtcbiAgICAgICAgICAgIGlmIChlc3QgPiBzZXNzaW9uQmVzdCkgeyBzZXNzaW9uQmVzdCA9IGVzdDsgYmVzdFcgPSBzLndlaWdodDsgYmVzdFIgPSBzLnJlcHM7IH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHMucmVwcyA+IHNlc3Npb25CZXN0KSB7IHNlc3Npb25CZXN0ID0gcy5yZXBzOyBiZXN0UiA9IHMucmVwczsgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHNsID0gYXdhaXQgY2FsY3VsYXRlU3RyZW5ndGhMZXZlbChleC5uYW1lLCBiZXN0VywgYmVzdFIsIG1heFIpO1xuICAgICAgICBzdW1tYXJ5RGF0YS5wdXNoKHsgbmFtZTogZXgubmFtZSwgbXVzY2xlOiBleC5tdXNjbGUsIGJlc3RXLCBiZXN0UiwgbWF4Uiwgc2Vzc2lvbkJlc3QsIHNsLCBoYXNTdGQsIHByIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3VtbWFyeURhdGE7XG4gIH07XG5cbiAgYnVpbGRTdW1tYXJ5KCkudGhlbihzdW1tYXJ5RGF0YSA9PiB7XG4gICAgY3JlYXRlTW9kYWwoXCJXb3Jrb3V0IENvbXBsZXRlXCIsIChjb250ZW50KSA9PiB7XG4gICAgICAvLyBTdW1tYXJ5XG4gICAgICBjb25zdCBzdW1tYXJ5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHN1bW1hcnlEaXYuY2xhc3NOYW1lID0gXCJvdHctc3VtbWFyeS1jb21wbGV0ZVwiO1xuICAgICAgc3VtbWFyeURpdi5pbm5lckhUTUwgPSBcIjxoMj5XT1JLT1VUIENPTVBMRVRFPC9oMj5cIjtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc3VtbWFyeURpdik7XG5cbiAgICAgIC8vIEV4ZXJjaXNlIHN1bW1hcmllc1xuICAgICAgaWYgKHN1bW1hcnlEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3Qgc2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2VjLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjEycHg7XCI7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoc2VjKTtcblxuICAgICAgICBjb25zdCBzZWNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNlY1RpdGxlLnRleHRDb250ZW50ID0gXCJTRVNTSU9OIFNVTU1BUllcIjtcbiAgICAgICAgc2VjVGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O2xldHRlci1zcGFjaW5nOjJweDt0ZXh0LWFsaWduOmNlbnRlcjttYXJnaW4tYm90dG9tOjRweDtgO1xuICAgICAgICBzZWMuYXBwZW5kQ2hpbGQoc2VjVGl0bGUpO1xuXG4gICAgICAgIGZvciAoY29uc3QgZXggb2Ygc3VtbWFyeURhdGEpIHtcbiAgICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjYXJkLnN0eWxlLmNzc1RleHQgPSBgcGFkZGluZzoxNHB4O2JhY2tncm91bmQ6IzBjMGMwYztib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2JvcmRlci1yYWRpdXM6NnB4O2A7XG4gICAgICAgICAgc2VjLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgICAgICAgY29uc3QgaGRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBoZHIuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW4tYm90dG9tOjEwcHg7XCI7XG4gICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChoZHIpO1xuXG4gICAgICAgICAgY29uc3Qgbm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgICBubS50ZXh0Q29udGVudCA9IGV4Lm5hbWU7XG4gICAgICAgICAgbm0uc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXdlaWdodDo2MDA7Zm9udC1zaXplOjE0cHg7YDtcbiAgICAgICAgICBoZHIuYXBwZW5kQ2hpbGQobm0pO1xuXG4gICAgICAgICAgaWYgKGV4LnNsKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IFNUUkVOR1RIX0xFVkVMU1tleC5zbC5sZXZlbF07XG4gICAgICAgICAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgYmFkZ2Uuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmlubGluZS1mbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O3BhZGRpbmc6NHB4IDEwcHg7YmFja2dyb3VuZDoke2V4LnNsLmNvbG9yfTIwO2JvcmRlcjoxcHggc29saWQgJHtleC5zbC5jb2xvcn01MDtib3JkZXItcmFkaXVzOjRweDtjb2xvcjoke2V4LnNsLmNvbG9yfTtmb250LXNpemU6MTFweDtmb250LXdlaWdodDo3MDA7bGV0dGVyLXNwYWNpbmc6MXB4O2A7XG4gICAgICAgICAgICBiYWRnZS50ZXh0Q29udGVudCA9IChsaT8uaWNvbiB8fCBcIlxcdTI1Q0JcIikgKyBcIiBcIiArIGV4LnNsLmxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICBoZHIuYXBwZW5kQ2hpbGQoYmFkZ2UpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHN0YXRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBzdGF0cy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47bWFyZ2luLWJvdHRvbTo4cHg7Zm9udC1zaXplOjEycHg7XCI7XG4gICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChzdGF0cyk7XG5cbiAgICAgICAgICBjb25zdCBzZXRJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgICAgc2V0SS50ZXh0Q29udGVudCA9IGV4LnNsPy5pc0JvZHl3ZWlnaHQgPyBcIkJlc3Q6IFwiICsgZXgubWF4UiArIFwiIHJlcHNcIiA6IFwiQmVzdDogXCIgKyBleC5iZXN0VyArIFwia2cgXFx1MDBENyBcIiArIGV4LmJlc3RSO1xuICAgICAgICAgIHNldEkuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2A7XG4gICAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQoc2V0SSk7XG5cbiAgICAgICAgICBpZiAoZXguc2wpIHtcbiAgICAgICAgICAgIGNvbnN0IHJtSSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICAgICAgcm1JLnRleHRDb250ZW50ID0gZXguc2wuZGlzcGxheUxhYmVsICsgXCI6IFwiICsgZXguc2wuY3VycmVudFZhbHVlICsgZXguc2wudW5pdDtcbiAgICAgICAgICAgIHJtSS5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtd2VpZ2h0OjYwMDtgO1xuICAgICAgICAgICAgc3RhdHMuYXBwZW5kQ2hpbGQocm1JKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZXgucHIpIHtcbiAgICAgICAgICAgIGNvbnN0IHByQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwckMuc3R5bGUuY3NzVGV4dCA9IFwiZm9udC1zaXplOjExcHg7bWFyZ2luLWJvdHRvbTo4cHg7cGFkZGluZzo2cHggOHB4O2JhY2tncm91bmQ6cmdiYSgxNjgsMTUyLDk2LDAuMSk7Ym9yZGVyLXJhZGl1czo0cHg7XCI7XG4gICAgICAgICAgICBjb25zdCBjdiA9IGV4LnNsPy5jdXJyZW50VmFsdWUgfHwgZXguc2Vzc2lvbkJlc3Q7XG4gICAgICAgICAgICBpZiAoY3YgPiBleC5wci5wclZhbHVlKSB7XG4gICAgICAgICAgICAgIHByQy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEyMiwxNTQsMTI1LDAuMTUpXCI7XG4gICAgICAgICAgICAgIHByQy5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjojN2E5YTdkO2ZvbnQtd2VpZ2h0OjcwMDtcIj5cXHVEODNDXFx1REY4OSBORVcgUFIhPC9zcGFuPiA8c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07XCI+UHJldmlvdXM6ICR7ZXgucHIucHJWYWx1ZX0gXFx1MjE5MiBOb3c6ICR7Y3Z9PC9zcGFuPmA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGN2ID09PSBleC5wci5wclZhbHVlKSB7XG4gICAgICAgICAgICAgIHByQy5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJjb2xvcjojYTg5ODYwO1wiPlxcdUQ4M0NcXHVERkM2IE1hdGNoZWQgUFI6PC9zcGFuPiA8c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07XCI+JHtleC5wci5wclZhbHVlfTwvc3Bhbj5gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcHJDLmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07XCI+XFx1RDgzQ1xcdURGQzYgUFI6ICR7ZXgucHIucHJWYWx1ZX08L3NwYW4+IDxzcGFuIHN0eWxlPVwiY29sb3I6IzZhNmE2YTtcIj4odG9kYXk6ICR7Y3Z9KTwvc3Bhbj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwckMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChleC5zbCAmJiBleC5zbC5uZXh0VGFyZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBwYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwYi5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1iYXJcIjtcbiAgICAgICAgICAgIHBiLnN0eWxlLm1hcmdpblRvcCA9IFwiOHB4XCI7XG4gICAgICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHBiKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZmlsbC5jbGFzc05hbWUgPSBcIm90dy1zdHJlbmd0aC1maWxsXCI7XG4gICAgICAgICAgICBmaWxsLnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6JHtNYXRoLm1pbigxMDAsIGV4LnNsLnByb2dyZXNzKX0lO2JhY2tncm91bmQ6JHtleC5zbC5jb2xvcn07YDtcbiAgICAgICAgICAgIHBiLmFwcGVuZENoaWxkKGZpbGwpO1xuICAgICAgICAgICAgY29uc3QgdGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdGkuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47Zm9udC1zaXplOjlweDtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O21hcmdpbi10b3A6NHB4O2A7XG4gICAgICAgICAgICB0aS5pbm5lckhUTUwgPSBgPHNwYW4+Q3VycmVudDogJHtleC5zbC5jdXJyZW50VmFsdWV9JHtleC5zbC51bml0fTwvc3Bhbj48c3Bhbj5OZXh0OiAke01hdGgucm91bmQoZXguc2wubmV4dFRhcmdldCl9JHtleC5zbC51bml0fTwvc3Bhbj5gO1xuICAgICAgICAgICAgY2FyZC5hcHBlbmRDaGlsZCh0aSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIEZlZWwgYnV0dG9uc1xuICAgICAgY29uc3QgZmVlbFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgICAgZmVlbFRpdGxlLnRleHRDb250ZW50ID0gXCJIb3cgZGlkIGl0IGZlZWw/XCI7XG4gICAgICBmZWVsVGl0bGUuc3R5bGUuY3NzVGV4dCA9IGBtYXJnaW46MTJweCAwO2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxM3B4O2xldHRlci1zcGFjaW5nOjNweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7b3BhY2l0eTowLjg7YDtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZmVlbFRpdGxlKTtcblxuICAgICAgLy8gRGlzY2lwbGluZSBidXR0b25cbiAgICAgIGNvbnN0IGRpc2NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGlzY0J0bi5jbGFzc05hbWUgPSBcIm90dy1mZWVsLWJ0blwiO1xuICAgICAgZGlzY0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gYDNweCBzb2xpZCAke1RIRU1FLmNvbG9yRGlzY2lwbGluZX1gO1xuICAgICAgZGlzY0J0bi5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjRweDt3aWR0aDo0MHB4O3RleHQtYWxpZ246Y2VudGVyO1wiPiYjeDFGNDhFOzwvc3Bhbj48ZGl2IHN0eWxlPVwiZmxleDoxO1wiPjxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yRGlzY2lwbGluZX07Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO2xldHRlci1zcGFjaW5nOjEuNXB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjRweDtcIj5EaXNjaXBsaW5lPC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiM1YTVhNWE7Zm9udC1zaXplOjExcHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+UHVzaGVkIHRocm91Z2ggcmVzaXN0YW5jZTwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9XCJjb2xvcjojNGE0MDMwO2ZvbnQtc2l6ZToxOHB4O29wYWNpdHk6MC41O1wiPlxcdTIxOTI8L2Rpdj5gO1xuICAgICAgZGlzY0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjbG9zZU1vZGFsKCk7IGF3YWl0IGZpbmlzaFdvcmtvdXQoXCJkaXNjaXBsaW5lXCIpOyB9O1xuICAgICAgY29udGVudC5hcHBlbmRDaGlsZChkaXNjQnRuKTtcblxuICAgICAgLy8gRmxvdyBidXR0b25cbiAgICAgIGNvbnN0IGZsb3dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZmxvd0J0bi5jbGFzc05hbWUgPSBcIm90dy1mZWVsLWJ0blwiO1xuICAgICAgZmxvd0J0bi5zdHlsZS5ib3JkZXJMZWZ0ID0gYDNweCBzb2xpZCAke1RIRU1FLmNvbG9yRmxvd31gO1xuICAgICAgZmxvd0J0bi5pbm5lckhUTUwgPSBgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6MjRweDt3aWR0aDo0MHB4O3RleHQtYWxpZ246Y2VudGVyO1wiPiYjeDFGMzBBOzwvc3Bhbj48ZGl2IHN0eWxlPVwiZmxleDoxO1wiPjxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yRmxvd307Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO2xldHRlci1zcGFjaW5nOjEuNXB4O3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTttYXJnaW4tYm90dG9tOjRweDtcIj5GbG93PC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiM1YTVhNWE7Zm9udC1zaXplOjExcHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+RmVsdCBuYXR1cmFsIGFuZCBlZmZvcnRsZXNzPC9kaXY+PC9kaXY+PGRpdiBzdHlsZT1cImNvbG9yOiMzMDQwNTA7Zm9udC1zaXplOjE4cHg7b3BhY2l0eTowLjU7XCI+XFx1MjE5MjwvZGl2PmA7XG4gICAgICBmbG93QnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IGNsb3NlTW9kYWwoKTsgYXdhaXQgZmluaXNoV29ya291dChcImZsb3dcIik7IH07XG4gICAgICBjb250ZW50LmFwcGVuZENoaWxkKGZsb3dCdG4pO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFBlcnNvbmFsIFN0YXRzIE1vZGFsIFx1MjUwMFx1MjUwMFxuYXN5bmMgZnVuY3Rpb24gb3BlblBlcnNvbmFsU3RhdHNNb2RhbCgpIHtcbiAgY29uc3Qgc3RhdHMgPSBhd2FpdCBnZXRQZXJzb25hbFN0YXRzKCk7XG4gIGNyZWF0ZU1vZGFsKFwiUGVyc29uYWwgU3RhdHNcIiwgKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE2cHg7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIEJpcnRoZGF0ZVxuICAgIGNvbnN0IGJpcnRoUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBiaXJ0aFJvdy5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjhweDtwYWRkaW5nOjEycHggMTZweDtiYWNrZ3JvdW5kOiMwZjBmMGY7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICAgIGJpcnRoUm93LmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7XCI+QmlydGhkYXRlPC9zcGFuPmA7XG4gICAgY29uc3QgYmlydGhJbnB1dFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmlydGhJbnB1dFJvdy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2dhcDoxMnB4O1wiO1xuICAgIGNvbnN0IGJpcnRoSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgYmlydGhJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgYmlydGhJbnB1dC52YWx1ZSA9IGZvcm1hdEJpcnRoZGF0ZShzdGF0cy5iaXJ0aGRhdGUpO1xuICAgIGJpcnRoSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBmbGV4OjE7cGFkZGluZzo4cHg7YmFja2dyb3VuZDojMGEwYTBhO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjFlbTtgO1xuICAgIGNvbnN0IGFnZURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBhZ2VEaXNwbGF5LnRleHRDb250ZW50ID0gYEFnZTogJHtjYWxjdWxhdGVBZ2Uoc3RhdHMuYmlydGhkYXRlKX1gO1xuICAgIGFnZURpc3BsYXkuc3R5bGUuY3NzVGV4dCA9IGBjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MS4xZW07Zm9udC13ZWlnaHQ6NjAwO21pbi13aWR0aDo4MHB4O2A7XG4gICAgYmlydGhJbnB1dC5vbmNoYW5nZSA9ICgpID0+IHsgYWdlRGlzcGxheS50ZXh0Q29udGVudCA9IGBBZ2U6ICR7Y2FsY3VsYXRlQWdlKGJpcnRoSW5wdXQudmFsdWUpfWA7IH07XG4gICAgYmlydGhJbnB1dFJvdy5hcHBlbmRDaGlsZChiaXJ0aElucHV0KTtcbiAgICBiaXJ0aElucHV0Um93LmFwcGVuZENoaWxkKGFnZURpc3BsYXkpO1xuICAgIGJpcnRoUm93LmFwcGVuZENoaWxkKGJpcnRoSW5wdXRSb3cpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYmlydGhSb3cpO1xuXG4gICAgLy8gV2VpZ2h0XG4gICAgY29uc3Qgd2VpZ2h0Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWlnaHRSb3cuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6MTJweCAxNnB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gICAgd2VpZ2h0Um93LmlubmVySFRNTCA9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07XCI+V2VpZ2h0IChrZyk8L3NwYW4+YDtcbiAgICBjb25zdCB3ZWlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB3ZWlnaHRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICB3ZWlnaHRJbnB1dC52YWx1ZSA9IHN0YXRzLndlaWdodDtcbiAgICB3ZWlnaHRJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjgwcHg7cGFkZGluZzo4cHg7YmFja2dyb3VuZDojMGEwYTBhO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjEuMWVtO3RleHQtYWxpZ246Y2VudGVyO2A7XG4gICAgd2VpZ2h0Um93LmFwcGVuZENoaWxkKHdlaWdodElucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHdlaWdodFJvdyk7XG5cbiAgICAvLyBIZWlnaHRcbiAgICBjb25zdCBoZWlnaHRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlaWdodFJvdy5zdHlsZS5jc3NUZXh0ID0gYGRpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjthbGlnbi1pdGVtczpjZW50ZXI7cGFkZGluZzoxMnB4IDE2cHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgICBoZWlnaHRSb3cuaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtcIj5IZWlnaHQgKGNtKTwvc3Bhbj5gO1xuICAgIGNvbnN0IGhlaWdodElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGhlaWdodElucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIGhlaWdodElucHV0LnZhbHVlID0gc3RhdHMuaGVpZ2h0O1xuICAgIGhlaWdodElucHV0LnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6ODBweDtwYWRkaW5nOjhweDtiYWNrZ3JvdW5kOiMwYTBhMGE7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtmb250LXNpemU6MS4xZW07dGV4dC1hbGlnbjpjZW50ZXI7YDtcbiAgICBoZWlnaHRSb3cuYXBwZW5kQ2hpbGQoaGVpZ2h0SW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaGVpZ2h0Um93KTtcblxuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSBcIlNBVkUgU1RBVFNcIjtcbiAgICBzYXZlQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICBzYXZlQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCB1cGRhdGVQZXJzb25hbFN0YXRzKHBhcnNlRmxvYXQod2VpZ2h0SW5wdXQudmFsdWUpIHx8IDYxLCBwYXJzZUZsb2F0KGhlaWdodElucHV0LnZhbHVlKSB8fCAxNzUsIGJpcnRoSW5wdXQudmFsdWUgfHwgXCIyMDA1LTExLTI5XCIpO1xuICAgICAgbm90aWNlKFwiUGVyc29uYWwgc3RhdHMgdXBkYXRlZCFcIik7XG4gICAgICBjbG9zZU1vZGFsKCk7XG4gICAgfTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHNhdmVCdG4pO1xuICB9KTtcbn1cblxuLy8gXHUyNTAwXHUyNTAwIEFkZCBFeGVyY2lzZSBNb2RhbCBcdTI1MDBcdTI1MDBcbmZ1bmN0aW9uIG9wZW5BZGRFeGVyY2lzZU1vZGFsKG11c2NsZSkge1xuICBjcmVhdGVNb2RhbChcIkFkZCBFeGVyY2lzZSAtIFwiICsgbXVzY2xlLCAoY29udGVudCkgPT4ge1xuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRXhlcmNpc2UgbmFtZS4uLlwiO1xuICAgIG5hbWVJbnB1dC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOjEwMCU7cGFkZGluZzoxMnB4O2JhY2tncm91bmQ6IzBmMGYwZjtib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2ZvbnQtc2l6ZToxNHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtgO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGNvbnN0IHdhcm11cExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3YXJtdXBMYWJlbC50ZXh0Q29udGVudCA9IFwiSW5jbHVkZSB3YXJtdXAgc2V0cz9cIjtcbiAgICB3YXJtdXBMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDoxMnB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3YXJtdXBMYWJlbCk7XG5cbiAgICBsZXQgaW5jV2FybXVwID0gdHJ1ZTtcbiAgICBjb25zdCB3YXJtdXBSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHdhcm11cFJvdy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7Z2FwOjhweDttYXJnaW4tdG9wOjhweDtcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdhcm11cFJvdyk7XG5cbiAgICBjb25zdCB5ZXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHllc0J0bi50ZXh0Q29udGVudCA9IFwiWWVzIChzdWdnZXN0ZWQpXCI7XG4gICAgeWVzQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIHllc0J0bi5zdHlsZS5jc3NUZXh0ICs9IGBmbGV4OjE7YmFja2dyb3VuZDpyZ2JhKDE1NCwxNDAsMTIyLDAuMik7Ym9yZGVyLWNvbG9yOiR7VEhFTUUuY29sb3J9O2NvbG9yOiR7VEhFTUUuY29sb3J9O2A7XG4gICAgY29uc3Qgbm9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG5vQnRuLnRleHRDb250ZW50ID0gXCJOb1wiO1xuICAgIG5vQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIG5vQnRuLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgICB5ZXNCdG4ub25jbGljayA9ICgpID0+IHsgaW5jV2FybXVwID0gdHJ1ZTsgeWVzQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTU0LDE0MCwxMjIsMC4yKVwiOyB5ZXNCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvcjsgeWVzQnRuLnN0eWxlLmNvbG9yID0gVEhFTUUuY29sb3I7IG5vQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwZjBmMGZcIjsgbm9CdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvckJvcmRlcjsgbm9CdG4uc3R5bGUuY29sb3IgPSBUSEVNRS5jb2xvck11dGVkOyB9O1xuICAgIG5vQnRuLm9uY2xpY2sgPSAoKSA9PiB7IGluY1dhcm11cCA9IGZhbHNlOyBub0J0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMilcIjsgbm9CdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvcjsgbm9CdG4uc3R5bGUuY29sb3IgPSBUSEVNRS5jb2xvcjsgeWVzQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwZjBmMGZcIjsgeWVzQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gVEhFTUUuY29sb3JCb3JkZXI7IHllc0J0bi5zdHlsZS5jb2xvciA9IFRIRU1FLmNvbG9yTXV0ZWQ7IH07XG4gICAgd2FybXVwUm93LmFwcGVuZENoaWxkKHllc0J0bik7XG4gICAgd2FybXVwUm93LmFwcGVuZENoaWxkKG5vQnRuKTtcblxuICAgIGNvbnN0IHdlaWdodExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWlnaHRMYWJlbC50ZXh0Q29udGVudCA9IFwiV29ya2luZyB3ZWlnaHQgKGtnKSAtIDAgZm9yIGJvZHl3ZWlnaHRcIjtcbiAgICB3ZWlnaHRMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7bWFyZ2luLXRvcDoxMnB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWlnaHRMYWJlbCk7XG5cbiAgICBjb25zdCB3ZWlnaHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB3ZWlnaHRJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgICB3ZWlnaHRJbnB1dC5wbGFjZWhvbGRlciA9IFwiMFwiO1xuICAgIHdlaWdodElucHV0LnN0eWxlLmNzc1RleHQgPSBgd2lkdGg6MTAwJTtwYWRkaW5nOjEycHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi10b3A6OHB4O2A7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3ZWlnaHRJbnB1dCk7XG5cbiAgICBjb25zdCBidG5Sb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJ0blJvdy5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7Z2FwOjEycHg7bWFyZ2luLXRvcDoxNnB4O1wiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnRuUm93KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tc2Vjb25kYXJ5XCI7XG4gICAgY2FuY2VsQnRuLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgICBjYW5jZWxCdG4ub25jbGljayA9ICgpID0+IGNsb3NlTW9kYWwoKTtcbiAgICBidG5Sb3cuYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgRXhlcmNpc2VcIjtcbiAgICBhZGRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICAgIGFkZEJ0bi5zdHlsZS5mbGV4ID0gXCIxXCI7XG4gICAgYWRkQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBuYW1lID0gbmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghbmFtZSkgeyBub3RpY2UoXCJQbGVhc2UgZW50ZXIgYW4gZXhlcmNpc2UgbmFtZVwiKTsgcmV0dXJuOyB9XG4gICAgICBjb25zdCB3dyA9IHBhcnNlRmxvYXQod2VpZ2h0SW5wdXQudmFsdWUpIHx8IDA7XG4gICAgICBjb25zdCBzZXRzID0gW107XG4gICAgICBpZiAoaW5jV2FybXVwICYmIHd3ID4gMCkge1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjUpLCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IHRydWUgfSk7XG4gICAgICAgIHNldHMucHVzaCh7IHdlaWdodDogTWF0aC5yb3VuZCh3dyAqIDAuNyksIHJlcHM6IDYsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiB0cnVlIH0pO1xuICAgICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IE1hdGgucm91bmQod3cgKiAwLjg1KSwgcmVwczogMywgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IHRydWUgfSk7XG4gICAgICB9XG4gICAgICBzZXRzLnB1c2goeyB3ZWlnaHQ6IHd3LCByZXBzOiAxMCwgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IGZhbHNlIH0pO1xuICAgICAgc2V0cy5wdXNoKHsgd2VpZ2h0OiB3dywgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9KTtcbiAgICAgIHNldHMucHVzaCh7IHdlaWdodDogd3csIHJlcHM6IDEwLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgICBleGVyY2lzZXMucHVzaCh7IG5hbWUsIG11c2NsZSwgbXVzY2xlR3JvdXA6IG11c2NsZSwgc2V0cyB9KTtcbiAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICAgICAgcmVuZGVyKCk7XG4gICAgfTtcbiAgICBidG5Sb3cuYXBwZW5kQ2hpbGQoYWRkQnRuKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4gbmFtZUlucHV0LmZvY3VzKCksIDEwMCk7XG4gIH0pO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgQWRkIFN0cmVuZ3RoIFN0YW5kYXJkIE1vZGFsIFx1MjUwMFx1MjUwMFxuYXN5bmMgZnVuY3Rpb24gb3BlbkFkZFN0cmVuZ3RoU3RhbmRhcmRNb2RhbCgpIHtcbiAgY3JlYXRlTW9kYWwoXCJBZGQgU3RyZW5ndGggU3RhbmRhcmRcIiwgKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JtLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE2cHg7XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuYW1lSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIG5hbWVJbnB1dC5wbGFjZWhvbGRlciA9IFwiRXhlcmNpc2UgbmFtZSAoZS5nLiwgRHVtYmJlbGwgQ3VybClcIjtcbiAgICBuYW1lSW5wdXQuc3R5bGUuY3NzVGV4dCA9IGBwYWRkaW5nOjEycHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjFlbTtgO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcblxuICAgIGxldCBleGVyY2lzZVR5cGUgPSBcIldlaWdodGVkXCI7XG4gICAgY29uc3QgdHlwZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdHlwZUNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7Z2FwOjEycHg7XCI7XG4gICAgY29uc3Qgd2VpZ2h0ZWRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHdlaWdodGVkQnRuLnRleHRDb250ZW50ID0gXCJcXHVEODNDXFx1REZDQlxcdUZFMEYgV2VpZ2h0ZWRcIjtcbiAgICB3ZWlnaHRlZEJ0bi5zdHlsZS5jc3NUZXh0ID0gYGZsZXg6MTtwYWRkaW5nOjE0cHg7YmFja2dyb3VuZDpyZ2JhKDE1NCwxNDAsMTIyLDAuMik7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yfTtjb2xvcjoke1RIRU1FLmNvbG9yfTtjdXJzb3I6cG9pbnRlcjtgO1xuICAgIGNvbnN0IGJvZHl3ZWlnaHRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGJvZHl3ZWlnaHRCdG4udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0VcXHVERDM4IEJvZHl3ZWlnaHRcIjtcbiAgICBib2R5d2VpZ2h0QnRuLnN0eWxlLmNzc1RleHQgPSBgZmxleDoxO3BhZGRpbmc6MTRweDtiYWNrZ3JvdW5kOiMwZjBmMGY7Ym9yZGVyOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2N1cnNvcjpwb2ludGVyO2A7XG4gICAgd2VpZ2h0ZWRCdG4ub25jbGljayA9ICgpID0+IHsgZXhlcmNpc2VUeXBlID0gXCJXZWlnaHRlZFwiOyB3ZWlnaHRlZEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMilcIjsgd2VpZ2h0ZWRCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvcjsgd2VpZ2h0ZWRCdG4uc3R5bGUuY29sb3IgPSBUSEVNRS5jb2xvcjsgYm9keXdlaWdodEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMGYwZjBmXCI7IGJvZHl3ZWlnaHRCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvckJvcmRlcjsgYm9keXdlaWdodEJ0bi5zdHlsZS5jb2xvciA9IFRIRU1FLmNvbG9yTXV0ZWQ7IH07XG4gICAgYm9keXdlaWdodEJ0bi5vbmNsaWNrID0gKCkgPT4geyBleGVyY2lzZVR5cGUgPSBcIkJvZHl3ZWlnaHRcIjsgYm9keXdlaWdodEJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDE1NCwxNDAsMTIyLDAuMilcIjsgYm9keXdlaWdodEJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IFRIRU1FLmNvbG9yOyBib2R5d2VpZ2h0QnRuLnN0eWxlLmNvbG9yID0gVEhFTUUuY29sb3I7IHdlaWdodGVkQnRuLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwZjBmMGZcIjsgd2VpZ2h0ZWRCdG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBUSEVNRS5jb2xvckJvcmRlcjsgd2VpZ2h0ZWRCdG4uc3R5bGUuY29sb3IgPSBUSEVNRS5jb2xvck11dGVkOyB9O1xuICAgIHR5cGVDb250YWluZXIuYXBwZW5kQ2hpbGQod2VpZ2h0ZWRCdG4pO1xuICAgIHR5cGVDb250YWluZXIuYXBwZW5kQ2hpbGQoYm9keXdlaWdodEJ0bik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0eXBlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IGluZm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgaW5mb1RleHQuaW5uZXJIVE1MID0gYDxzdHJvbmc+V2VpZ2h0ZWQ6PC9zdHJvbmc+IFN0YW5kYXJkcyBpbiBrZyAoMVJNKTxicj48c3Ryb25nPkJvZHl3ZWlnaHQ6PC9zdHJvbmc+IFN0YW5kYXJkcyBpbiByZXBzYDtcbiAgICBpbmZvVGV4dC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7bGluZS1oZWlnaHQ6MS42O2A7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbmZvVGV4dCk7XG5cbiAgICBjb25zdCBjcmVhdGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNyZWF0ZUJ0bi50ZXh0Q29udGVudCA9IFwiQ1JFQVRFXCI7XG4gICAgY3JlYXRlQnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXByaW1hcnlcIjtcbiAgICBjcmVhdGVCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGV4ZXJjaXNlTmFtZSA9IG5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAoIWV4ZXJjaXNlTmFtZSkgeyBub3RpY2UoXCJQbGVhc2UgZW50ZXIgYW4gZXhlcmNpc2UgbmFtZVwiKTsgcmV0dXJuOyB9XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGAke0VYRVJDSVNFX0RCX0ZPTERFUn0vJHtleGVyY2lzZU5hbWV9Lm1kYDtcbiAgICAgIGNvbnN0IHVuaXRMYWJlbCA9IGV4ZXJjaXNlVHlwZSA9PT0gXCJCb2R5d2VpZ2h0XCIgPyBcInJlcHNcIiA6IFwia2cgKDFSTSlcIjtcbiAgICAgIGNvbnN0IGZpbGVDb250ZW50ID0gYC0tLVxcbkRhdGE6IFN0cmVuZ3RoIFN0YW5kYXJkXFxuRXhlcmNpc2U6IFwiJHtleGVyY2lzZU5hbWV9XCJcXG5UeXBlOiAke2V4ZXJjaXNlVHlwZX1cXG5jc3NjbGFzc2VzOlxcbiAgLSBoaWRlLXByb3BlcnRpZXNcXG4tLS1cXG5cXG4jICR7ZXhlcmNpc2VOYW1lfSBTdHJlbmd0aCBTdGFuZGFyZHNcXG5cXG4+IFN0YW5kYXJkcyBhcmUgaW4gKioke3VuaXRMYWJlbH0qKlxcblxcbiMjIEJvZHl3ZWlnaHQgVGFibGVcXG58IEJXICB8IEJlZy4gfCBOb3YuIHwgSW50LiB8IEFkdi4gfCBFbGl0ZSB8XFxufCAtLS0gfCAtLS0tIHwgLS0tLSB8IC0tLS0gfCAtLS0tIHwgLS0tLS0gfFxcbnwgNTAgIHwgMCAgICB8IDAgICAgfCAwICAgIHwgMCAgICB8IDAgICAgIHxcXG58IDYwICB8IDAgICAgfCAwICAgIHwgMCAgICB8IDAgICAgfCAwICAgICB8XFxufCA3MCAgfCAwICAgIHwgMCAgICB8IDAgICAgfCAwICAgIHwgMCAgICAgfFxcbnwgODAgIHwgMCAgICB8IDAgICAgfCAwICAgIHwgMCAgICB8IDAgICAgIHxcXG58IDkwICB8IDAgICAgfCAwICAgIHwgMCAgICB8IDAgICAgfCAwICAgICB8XFxuXFxuIyMgQWdlIFRhYmxlXFxufCBBZ2UgfCBCZWcuIHwgTm92LiB8IEludC4gfCBBZHYuIHwgRWxpdGUgfFxcbnwgLS0tIHwgLS0tLSB8IC0tLS0gfCAtLS0tIHwgLS0tLSB8IC0tLS0tIHxcXG58IDE1ICB8IDAgICAgfCAwICAgIHwgMCAgICB8IDAgICAgfCAwICAgICB8XFxufCAyMCAgfCAwICAgIHwgMCAgICB8IDAgICAgfCAwICAgIHwgMCAgICAgfFxcbnwgMzAgIHwgMCAgICB8IDAgICAgfCAwICAgIHwgMCAgICB8IDAgICAgIHxcXG58IDQwICB8IDAgICAgfCAwICAgIHwgMCAgICB8IDAgICAgfCAwICAgICB8XFxufCA1MCAgfCAwICAgIHwgMCAgICB8IDAgICAgfCAwICAgIHwgMCAgICAgfFxcbmA7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoRVhFUkNJU0VfREJfRk9MREVSKSkgYXdhaXQgYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihFWEVSQ0lTRV9EQl9GT0xERVIpO1xuICAgICAgICBpZiAoIWFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpKSBhd2FpdCBhcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBmaWxlQ29udGVudCk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICAgICAgbm90aWNlKGBTdHJlbmd0aCBzdGFuZGFyZCBjcmVhdGVkIGZvciAke2V4ZXJjaXNlTmFtZX0uIE9wZW4gdGhlIGZpbGUgdG8gZmlsbCBpbiB0aGUgdmFsdWVzLmApO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHsgbm90aWNlKGBFcnJvcjogJHtlcnJvci5tZXNzYWdlfWApOyB9XG4gICAgfTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUJ0bik7XG4gIH0pO1xufVxuXG4vLyBcdTI1MDBcdTI1MDAgUmVuZGVyIGEgc2luZ2xlIHNldCByb3cgXHUyNTAwXHUyNTAwXG5mdW5jdGlvbiByZW5kZXJTZXQoc2V0c0NvbnRhaW5lciwgc2V0LCBzZXRJZHgsIGV4LCB3YXJtdXBSZWZzKSB7XG4gIGNvbnN0IHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJvdy5jbGFzc05hbWUgPSBcIm90dy1zZXQtcm93XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNvbXBsZXRlZFwiIDogXCJcIik7XG4gIHNldHNDb250YWluZXIuYXBwZW5kQ2hpbGQocm93KTtcbiAgY29uc3QgcmVmcyA9IHsgd2VpZ2h0SW5wdXQ6IG51bGwgfTtcblxuICAvLyBDaGVja2JveFxuICBjb25zdCBjYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNiLmNsYXNzTmFtZSA9IFwib3R3LWNoZWNrYm94XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNoZWNrZWRcIiA6IFwiXCIpO1xuICBjYi50ZXh0Q29udGVudCA9IHNldC5jb21wbGV0ZWQgPyBcIlxcdTI3MTNcIiA6IFwiXCI7XG4gIGNiLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0LmNvbXBsZXRlZCA9ICFzZXQuY29tcGxldGVkO1xuICAgIGNiLmNsYXNzTmFtZSA9IFwib3R3LWNoZWNrYm94XCIgKyAoc2V0LmNvbXBsZXRlZCA/IFwiIGNoZWNrZWRcIiA6IFwiXCIpO1xuICAgIGNiLnRleHRDb250ZW50ID0gc2V0LmNvbXBsZXRlZCA/IFwiXFx1MjcxM1wiIDogXCJcIjtcbiAgICByb3cuY2xhc3NOYW1lID0gXCJvdHctc2V0LXJvd1wiICsgKHNldC5jb21wbGV0ZWQgPyBcIiBjb21wbGV0ZWRcIiA6IFwiXCIpO1xuICAgIGF3YWl0IHNhdmVTdGF0ZSgpO1xuICB9O1xuICByb3cuYXBwZW5kQ2hpbGQoY2IpO1xuXG4gIC8vIE1pZGRsZTogd2VpZ2h0ICsgcmVwc1xuICBjb25zdCBtaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtaWQuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6MTJweDtmbGV4LXdyYXA6d3JhcDtcIjtcbiAgcm93LmFwcGVuZENoaWxkKG1pZCk7XG5cbiAgLy8gV2VpZ2h0IGlucHV0XG4gIGNvbnN0IHdXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd1dyYXAuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtnYXA6NHB4O1wiO1xuICBtaWQuYXBwZW5kQ2hpbGQod1dyYXApO1xuICBjb25zdCB3SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHdJbnB1dC50eXBlID0gXCJudW1iZXJcIjtcbiAgd0lucHV0LnZhbHVlID0gc2V0LndlaWdodDtcbiAgd0lucHV0LmNsYXNzTmFtZSA9IFwib3R3LWlucHV0XCI7XG4gIGNvbnN0IGZpcnN0VyA9IGdldEZpcnN0V29ya2luZ1NldEluZGV4KGV4LnNldHMpO1xuICBjb25zdCBpc0ZpcnN0ID0gIXNldC5pc1dhcm11cCAmJiBzZXRJZHggPT09IGZpcnN0VztcbiAgd0lucHV0Lm9uY2hhbmdlID0gYXN5bmMgKGUpID0+IHtcbiAgICBjb25zdCBudyA9IHBhcnNlRmxvYXQoZS50YXJnZXQudmFsdWUpIHx8IDA7XG4gICAgc2V0LndlaWdodCA9IG53O1xuICAgIGlmIChpc0ZpcnN0KSB7XG4gICAgICB1cGRhdGVXYXJtdXBXZWlnaHRzKGV4LCBudyk7XG4gICAgICBjb25zdCB3cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiBzLmlzV2FybXVwKTtcbiAgICAgIHdhcm11cFJlZnMuZm9yRWFjaCgoaW5wLCBpKSA9PiB7IGlmICh3c1tpXSkgaW5wLnZhbHVlID0gd3NbaV0ud2VpZ2h0OyB9KTtcbiAgICB9XG4gICAgYXdhaXQgc2F2ZVN0YXRlKCk7XG4gIH07XG4gIHdXcmFwLmFwcGVuZENoaWxkKHdJbnB1dCk7XG4gIHJlZnMud2VpZ2h0SW5wdXQgPSB3SW5wdXQ7XG4gIGNvbnN0IGtnTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAga2dMYWJlbC50ZXh0Q29udGVudCA9IFwia2dcIjtcbiAga2dMYWJlbC5zdHlsZS5jc3NUZXh0ID0gYGNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEycHg7YDtcbiAgd1dyYXAuYXBwZW5kQ2hpbGQoa2dMYWJlbCk7XG5cbiAgLy8gUmVwcyBjb250cm9sc1xuICBjb25zdCByV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHJXcmFwLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Z2FwOjRweDtcIjtcbiAgbWlkLmFwcGVuZENoaWxkKHJXcmFwKTtcbiAgY29uc3QgbWludXNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtaW51c0J0bi5jbGFzc05hbWUgPSBcIm90dy1jdHJsLWJ0blwiO1xuICBtaW51c0J0bi50ZXh0Q29udGVudCA9IFwiXFx1MjIxMlwiO1xuICBtaW51c0J0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBpZiAoc2V0LnJlcHMgPiAxKSB7IHNldC5yZXBzLS07IHJEaXNwLnRleHRDb250ZW50ID0gc2V0LnJlcHMgKyBcIlxcdTAwRDdcIjsgYXdhaXQgc2F2ZVN0YXRlKCk7IH0gfTtcbiAgcldyYXAuYXBwZW5kQ2hpbGQobWludXNCdG4pO1xuICBjb25zdCByRGlzcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICByRGlzcC50ZXh0Q29udGVudCA9IHNldC5yZXBzICsgXCJcXHUwMEQ3XCI7XG4gIHJEaXNwLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NjAwO21pbi13aWR0aDozMHB4O3RleHQtYWxpZ246Y2VudGVyO2A7XG4gIHJXcmFwLmFwcGVuZENoaWxkKHJEaXNwKTtcbiAgY29uc3QgcGx1c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHBsdXNCdG4uY2xhc3NOYW1lID0gXCJvdHctY3RybC1idG5cIjtcbiAgcGx1c0J0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICBwbHVzQnRuLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7IHNldC5yZXBzKys7IHJEaXNwLnRleHRDb250ZW50ID0gc2V0LnJlcHMgKyBcIlxcdTAwRDdcIjsgYXdhaXQgc2F2ZVN0YXRlKCk7IH07XG4gIHJXcmFwLmFwcGVuZENoaWxkKHBsdXNCdG4pO1xuXG4gIGlmIChzZXQuaXNXYXJtdXApIHtcbiAgICBjb25zdCBiYWRnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXdhcm11cC1iYWRnZVwiO1xuICAgIGJhZGdlLnRleHRDb250ZW50ID0gXCJcXHUyNkExIFdhcm11cFwiO1xuICAgIG1pZC5hcHBlbmRDaGlsZChiYWRnZSk7XG4gIH1cblxuICAvLyBEZWxldGUgc2V0IGJ1dHRvblxuICBpZiAoZXguc2V0cy5sZW5ndGggPiAxKSB7XG4gICAgY29uc3QgZGVsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxCdG4udGV4dENvbnRlbnQgPSBcIlxcdTAwRDdcIjtcbiAgICBkZWxCdG4uc3R5bGUuY3NzVGV4dCA9IGB3aWR0aDoyOHB4O2hlaWdodDoyOHB4O2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7Ym9yZGVyOjFweCBzb2xpZCAjM2EyODI4O2NvbG9yOiM2YTRhNGE7Y3Vyc29yOnBvaW50ZXI7Zm9udC1zaXplOjE2cHg7YDtcbiAgICBkZWxCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgZXguc2V0cy5zcGxpY2Uoc2V0SWR4LCAxKTsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9O1xuICAgIHJvdy5hcHBlbmRDaGlsZChkZWxCdG4pO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwaC5zdHlsZS53aWR0aCA9IFwiMjhweFwiO1xuICAgIHJvdy5hcHBlbmRDaGlsZChwaCk7XG4gIH1cblxuICByZXR1cm4gcmVmcztcbn1cblxuLy8gXHUyNTAwXHUyNTAwIFJlbmRlciBFeGVyY2lzZSBDYXJkIFx1MjUwMFx1MjUwMFxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyRXhlcmNpc2UoZXhDb250YWluZXIsIGV4KSB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXJkLmNsYXNzTmFtZSA9IFwib3R3LWNhcmRcIjtcbiAgZXhDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gIGFkZENvcm5lcnMoY2FyZCwgVEhFTUUuY29sb3IsIDEyKTtcblxuICBjb25zdCBleEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGV4SGVhZGVyLnN0eWxlLmNzc1RleHQgPSBgZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7bWFyZ2luLWJvdHRvbToxMnB4O3BhZGRpbmctYm90dG9tOjEycHg7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07YDtcbiAgY2FyZC5hcHBlbmRDaGlsZChleEhlYWRlcik7XG5cbiAgY29uc3QgbGVmdENvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxlZnRDb2wuc3R5bGUuZmxleCA9IFwiMVwiO1xuICBleEhlYWRlci5hcHBlbmRDaGlsZChsZWZ0Q29sKTtcblxuICBjb25zdCBleFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBleFRpdGxlLnRleHRDb250ZW50ID0gZXgubmFtZTtcbiAgZXhUaXRsZS5zdHlsZS5jc3NUZXh0ID0gYG1hcmdpbjowIDAgOHB4IDA7Y29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC1zaXplOjE2cHg7bGV0dGVyLXNwYWNpbmc6MXB4O2A7XG4gIGxlZnRDb2wuYXBwZW5kQ2hpbGQoZXhUaXRsZSk7XG5cbiAgLy8gU3RyZW5ndGggbGV2ZWwgKyBQUiBpbmZvXG4gIGNvbnN0IGhhc1N0ZCA9IGF3YWl0IGhhc1N0cmVuZ3RoU3RhbmRhcmQoZXgubmFtZSk7XG4gIGNvbnN0IHByID0gYXdhaXQgZ2V0RXhlcmNpc2VQUihleC5uYW1lKTtcbiAgY29uc3Qgd29ya2luZ1NldHMgPSBleC5zZXRzLmZpbHRlcigocykgPT4gIXMuaXNXYXJtdXApO1xuICBsZXQgYmVzdFcgPSAwLCBiZXN0UiA9IDAsIG1heFIgPSAwO1xuICB3b3JraW5nU2V0cy5mb3JFYWNoKChzKSA9PiB7IGlmIChzLnJlcHMgPiBtYXhSKSBtYXhSID0gcy5yZXBzOyBpZiAocy53ZWlnaHQgPiBiZXN0VyB8fCAocy53ZWlnaHQgPT09IGJlc3RXICYmIHMucmVwcyA+IGJlc3RSKSkgeyBiZXN0VyA9IHMud2VpZ2h0OyBiZXN0UiA9IHMucmVwczsgfSB9KTtcblxuICBpZiAoaGFzU3RkKSB7XG4gICAgbGV0IHNsO1xuICAgIGlmIChwcikgeyBzbCA9IHByLmlzQm9keXdlaWdodCA/IGF3YWl0IGNhbGN1bGF0ZVN0cmVuZ3RoTGV2ZWwoZXgubmFtZSwgMCwgcHIucHJWYWx1ZSwgcHIucHJWYWx1ZSkgOiBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIHByLndlaWdodCwgcHIucmVwcywgbnVsbCk7IH1cbiAgICBlbHNlIGlmIChiZXN0VyA+IDAgfHwgbWF4UiA+IDApIHsgc2wgPSBhd2FpdCBjYWxjdWxhdGVTdHJlbmd0aExldmVsKGV4Lm5hbWUsIGJlc3RXLCBiZXN0UiwgbWF4Uik7IH1cbiAgICBpZiAoc2wpIHtcbiAgICAgIGNvbnN0IGxpID0gU1RSRU5HVEhfTEVWRUxTW3NsLmxldmVsXTtcbiAgICAgIGNvbnN0IGJhZGdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGJhZGdlLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhZGdlXCI7XG4gICAgICBiYWRnZS5zdHlsZS5jc3NUZXh0ICs9IGBiYWNrZ3JvdW5kOiR7c2wuY29sb3J9MjU7Ym9yZGVyOjFweCBzb2xpZCAke3NsLmNvbG9yfTYwO2NvbG9yOiR7c2wuY29sb3J9O2A7XG4gICAgICBiYWRnZS50ZXh0Q29udGVudCA9IChsaT8uaWNvbiB8fCBcIlxcdTI1Q0JcIikgKyBcIiBcIiArIHNsLmxldmVsLnRvVXBwZXJDYXNlKCk7XG4gICAgICBsZWZ0Q29sLmFwcGVuZENoaWxkKGJhZGdlKTtcblxuICAgICAgY29uc3Qgcm1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHJtSW5mby5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZToxMXB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07bWFyZ2luLXRvcDo2cHg7YDtcbiAgICAgIHJtSW5mby5pbm5lckhUTUwgPSBgPHN0cm9uZyBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3J9XCI+JHtzbC5kaXNwbGF5TGFiZWx9OiAke3NsLmN1cnJlbnRWYWx1ZX0ke3NsLnVuaXR9PC9zdHJvbmc+YDtcbiAgICAgIGlmIChzbC5uZXh0VGFyZ2V0KSBybUluZm8uaW5uZXJIVE1MICs9IGAgXFx1MjE5MiBOZXh0OiAke01hdGgucm91bmQoc2wubmV4dFRhcmdldCl9JHtzbC51bml0fWA7XG4gICAgICBsZWZ0Q29sLmFwcGVuZENoaWxkKHJtSW5mbyk7XG5cbiAgICAgIGNvbnN0IHBiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHBiLmNsYXNzTmFtZSA9IFwib3R3LXN0cmVuZ3RoLWJhclwiO1xuICAgICAgbGVmdENvbC5hcHBlbmRDaGlsZChwYik7XG4gICAgICBjb25zdCBmaWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGZpbGwuY2xhc3NOYW1lID0gXCJvdHctc3RyZW5ndGgtZmlsbFwiO1xuICAgICAgZmlsbC5zdHlsZS5jc3NUZXh0ID0gYHdpZHRoOiR7TWF0aC5taW4oMTAwLCBzbC5wcm9ncmVzcyl9JTtiYWNrZ3JvdW5kOiR7c2wuY29sb3J9O2A7XG4gICAgICBwYi5hcHBlbmRDaGlsZChmaWxsKTtcbiAgICB9XG4gIH1cblxuICBpZiAocHIpIHtcbiAgICBjb25zdCBwckJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJCb3guY2xhc3NOYW1lID0gXCJvdHctcHItYm94XCI7XG4gICAgY29uc3QgcHJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJUaXRsZS5zdHlsZS5jc3NUZXh0ID0gXCJmb250LXNpemU6MTFweDtjb2xvcjojYTg5ODYwO2ZvbnQtd2VpZ2h0OjcwMDtsZXR0ZXItc3BhY2luZzoxcHg7XCI7XG4gICAgcHJUaXRsZS50ZXh0Q29udGVudCA9IHByLmlzQm9keXdlaWdodCA/IFwiXFx1RDgzQ1xcdURGQzYgQUxMLVRJTUUgUFI6IFwiICsgcHIucHJWYWx1ZSArIFwiIHJlcHNcIiA6IFwiXFx1RDgzQ1xcdURGQzYgQUxMLVRJTUUgUFI6IFwiICsgcHIuZXN0aW1hdGVkMVJNICsgXCJrZyAoMVJNKVwiO1xuICAgIHByQm94LmFwcGVuZENoaWxkKHByVGl0bGUpO1xuICAgIGNvbnN0IHByRGV0YWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwckRldGFpbC5zdHlsZS5jc3NUZXh0ID0gYGZvbnQtc2l6ZToxMHB4O2NvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07YDtcbiAgICBwckRldGFpbC50ZXh0Q29udGVudCA9IHByLmlzQm9keXdlaWdodCA/IFwiQmVzdDogXCIgKyBwci5yZXBzICsgXCIgcmVwc1wiIDogXCJTZXQ6IFwiICsgcHIud2VpZ2h0ICsgXCJrZyBcXHUwMEQ3IFwiICsgcHIucmVwcyArIFwiIHJlcHNcIjtcbiAgICBwckJveC5hcHBlbmRDaGlsZChwckRldGFpbCk7XG4gICAgbGVmdENvbC5hcHBlbmRDaGlsZChwckJveCk7XG4gIH1cblxuICAvLyBEZWxldGUgZXhlcmNpc2UgYnV0dG9uXG4gIGNvbnN0IGRlbEV4QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZGVsRXhCdG4udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0RcXHVEREQxXFx1RkUwRlwiO1xuICBkZWxFeEJ0bi5zdHlsZS5jc3NUZXh0ID0gXCJiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjpub25lO2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxNHB4O29wYWNpdHk6MC41O1wiO1xuICBkZWxFeEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjb25zdCBpZHggPSBleGVyY2lzZXMuaW5kZXhPZihleCk7IGlmIChpZHggPiAtMSkgeyBleGVyY2lzZXMuc3BsaWNlKGlkeCwgMSk7IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfSB9O1xuICBleEhlYWRlci5hcHBlbmRDaGlsZChkZWxFeEJ0bik7XG5cbiAgLy8gU2V0c1xuICBjb25zdCBzZXRzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2V0c0NvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo2cHg7XCI7XG4gIGNhcmQuYXBwZW5kQ2hpbGQoc2V0c0NvbnRhaW5lcik7XG4gIGNvbnN0IHdhcm11cFJlZnMgPSBbXTtcbiAgZXguc2V0cy5mb3JFYWNoKChzZXQsIHNldElkeCkgPT4ge1xuICAgIGNvbnN0IHJlZnMgPSByZW5kZXJTZXQoc2V0c0NvbnRhaW5lciwgc2V0LCBzZXRJZHgsIGV4LCB3YXJtdXBSZWZzKTtcbiAgICBpZiAoc2V0LmlzV2FybXVwICYmIHJlZnMud2VpZ2h0SW5wdXQpIHdhcm11cFJlZnMucHVzaChyZWZzLndlaWdodElucHV0KTtcbiAgfSk7XG5cbiAgLy8gQWRkIHNldCBidXR0b25cbiAgY29uc3QgYWRkU2V0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkU2V0QnRuLnRleHRDb250ZW50ID0gXCIrIEFkZCBTZXRcIjtcbiAgYWRkU2V0QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLWRhc2hlZFwiO1xuICBhZGRTZXRCdG4uc3R5bGUuY3NzVGV4dCArPSBcIm1hcmdpbi10b3A6OHB4O3BhZGRpbmc6OHB4IDEycHg7Zm9udC1zaXplOjEycHg7XCI7XG4gIGFkZFNldEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGxhc3QgPSBleC5zZXRzW2V4LnNldHMubGVuZ3RoIC0gMV0gfHwgeyB3ZWlnaHQ6IDAsIHJlcHM6IDEwIH07XG4gICAgZXguc2V0cy5wdXNoKHsgd2VpZ2h0OiBsYXN0LndlaWdodCwgcmVwczogbGFzdC5yZXBzLCBjb21wbGV0ZWQ6IGZhbHNlLCBpc1dhcm11cDogZmFsc2UgfSk7XG4gICAgYXdhaXQgc2F2ZVN0YXRlKCk7XG4gICAgcmVuZGVyKCk7XG4gIH07XG4gIGNhcmQuYXBwZW5kQ2hpbGQoYWRkU2V0QnRuKTtcbn1cblxuLy8gXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG4vLyBNVVNDTEUgR1JPVVAgU0VMRUNUSU9OIFNDUkVFTlxuLy8gU2hvd3Mgd2hlbiBubyBtdXNjbGVHcm91cHMgaW4gZnJvbnRtYXR0ZXJcbi8vIFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFx1MjU1MFxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyTXVzY2xlU2VsZWN0aW9uKHJvb3QpIHtcbiAgY29uc3Qgc2VsZWN0ZWRNdXNjbGVzID0gbmV3IFNldCgpO1xuICBjb25zdCBzZWxlY3RlZFN1Ymdyb3VwcyA9IG5ldyBNYXAoKTtcblxuICAvLyBIZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwib3R3LWNhcmQgb3R3LWNhcmQtYnJlYXRoZSBvdHctaGVhZGVyXCI7XG4gIGFkZENvcm5lcnMoaGVhZGVyLCBUSEVNRS5jb2xvcik7XG4gIGFkZEZsb2F0aW5nTW90ZXMoaGVhZGVyLCBUSEVNRS5jb2xvciwgMyk7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZS5jbGFzc05hbWUgPSBcIm90dy10aXRsZVwiO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IFwiTkVXIFdPUktPVVRcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgY29uc3Qgc3VidGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdWJ0aXRsZS5jbGFzc05hbWUgPSBcIm90dy1wcm9ncmVzcy1sYWJlbFwiO1xuICBzdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiU2VsZWN0IG11c2NsZSBncm91cHMgdG8gdHJhaW5cIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHN1YnRpdGxlKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIFBlcnNvbmFsIHN0YXRzIGJhclxuICBjb25zdCBzdGF0cyA9IGF3YWl0IGdldFBlcnNvbmFsU3RhdHMoKTtcbiAgY29uc3Qgc3RhdHNCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzdGF0c0Jhci5jbGFzc05hbWUgPSBcIm90dy1jYXJkXCI7XG4gIHN0YXRzQmFyLnN0eWxlLmNzc1RleHQgKz0gXCJkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47YWxpZ24taXRlbXM6Y2VudGVyO3BhZGRpbmc6MTJweCAxNnB4O1wiO1xuICBjb25zdCBhZ2UgPSBjYWxjdWxhdGVBZ2Uoc3RhdHMuYmlydGhkYXRlKTtcbiAgc3RhdHNCYXIuaW5uZXJIVE1MID0gYDxkaXY+PHNwYW4gc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O1wiPkFnZTogPHN0cm9uZyBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3J9XCI+JHthZ2V9PC9zdHJvbmc+PC9zcGFuPjxzcGFuIHN0eWxlPVwibWFyZ2luOjAgMTJweDtjb2xvcjoke1RIRU1FLmNvbG9yQm9yZGVyfTtcIj58PC9zcGFuPjxzcGFuIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTJweDtcIj5XZWlnaHQ6IDxzdHJvbmcgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yfVwiPiR7c3RhdHMud2VpZ2h0fWtnPC9zdHJvbmc+PC9zcGFuPjxzcGFuIHN0eWxlPVwibWFyZ2luOjAgMTJweDtjb2xvcjoke1RIRU1FLmNvbG9yQm9yZGVyfTtcIj58PC9zcGFuPjxzcGFuIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTJweDtcIj5IZWlnaHQ6IDxzdHJvbmcgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yfVwiPiR7c3RhdHMuaGVpZ2h0fWNtPC9zdHJvbmc+PC9zcGFuPjwvZGl2PmA7XG4gIGNvbnN0IGVkaXRTdGF0c0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVkaXRTdGF0c0J0bi50ZXh0Q29udGVudCA9IFwiXFx1MjcwRlxcdUZFMEZcIjtcbiAgZWRpdFN0YXRzQnRuLnN0eWxlLmNzc1RleHQgPSBgcGFkZGluZzo2cHggMTBweDtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O2JvcmRlcjoxcHggc29saWQgJHtUSEVNRS5jb2xvckJvcmRlcn07Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtjdXJzb3I6cG9pbnRlcjtmb250LXNpemU6MTJweDtgO1xuICBlZGl0U3RhdHNCdG4ub25jbGljayA9ICgpID0+IG9wZW5QZXJzb25hbFN0YXRzTW9kYWwoKTtcbiAgc3RhdHNCYXIuYXBwZW5kQ2hpbGQoZWRpdFN0YXRzQnRuKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdGF0c0Jhcik7XG5cbiAgLy8gTXVzY2xlIGdyb3VwIHNlbGVjdGlvbiBncmlkXG4gIGNvbnN0IG11c2NsZUdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtdXNjbGVHcmlkLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6MTBweDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxNnB4IDAgOHB4O1wiO1xuICByb290LmFwcGVuZENoaWxkKG11c2NsZUdyaWQpO1xuXG4gIGNvbnN0IHN1Ymdyb3VwQXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Ymdyb3VwQXJlYS5zdHlsZS5jc3NUZXh0ID0gXCJkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2dhcDo4cHg7d2lkdGg6MTAwJTtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzdWJncm91cEFyZWEpO1xuXG4gIE9iamVjdC5lbnRyaWVzKE1VU0NMRV9HUk9VUFMpLmZvckVhY2goKFtuYW1lLCBjb25maWddKSA9PiB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uY2xhc3NOYW1lID0gXCJvdHctbXVzY2xlLXRvZ2dsZVwiO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9IGAke2NvbmZpZy5pY29ufSAke25hbWV9YDtcbiAgICBtdXNjbGVHcmlkLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICBsZXQgc3ViZ3JvdXBDb250YWluZXIgPSBudWxsO1xuICAgIGlmIChjb25maWcuc3ViZ3JvdXBzKSB7XG4gICAgICBzdWJncm91cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBzdWJncm91cENvbnRhaW5lci5jbGFzc05hbWUgPSBcIm90dy1zdWJncm91cC1jb250YWluZXJcIjtcbiAgICAgIHN1Ymdyb3VwQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgKz0gYGRpc3BsYXk6ZmxleDtmbGV4LXdyYXA6d3JhcDtnYXA6OHB4O2JhY2tncm91bmQ6IzBjMGMwYztib3JkZXI6MXB4IHNvbGlkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2JvcmRlci1yYWRpdXM6NHB4O2A7XG4gICAgICBzdWJncm91cENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBzdHlsZT1cIndpZHRoOjEwMCU7Y29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDttYXJnaW4tYm90dG9tOjRweDtcIj4ke25hbWV9IHN1Ymdyb3Vwczo8L2Rpdj5gO1xuICAgICAgc2VsZWN0ZWRTdWJncm91cHMuc2V0KG5hbWUsIG5ldyBTZXQoKSk7XG4gICAgICBjb25maWcuc3ViZ3JvdXBzLmZvckVhY2goc3ViID0+IHtcbiAgICAgICAgY29uc3Qgc3ViQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3ViQnRuLmNsYXNzTmFtZSA9IFwib3R3LXN1Ymdyb3VwLWJ0blwiO1xuICAgICAgICBzdWJCdG4udGV4dENvbnRlbnQgPSBzdWI7XG4gICAgICAgIHN1YkJ0bi5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGNvbnN0IHN1YnMgPSBzZWxlY3RlZFN1Ymdyb3Vwcy5nZXQobmFtZSk7XG4gICAgICAgICAgaWYgKHN1YnMuaGFzKHN1YikpIHsgc3Vicy5kZWxldGUoc3ViKTsgc3ViQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7IH1cbiAgICAgICAgICBlbHNlIHsgc3Vicy5hZGQoc3ViKTsgc3ViQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IH1cbiAgICAgICAgfTtcbiAgICAgICAgc3ViZ3JvdXBDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ViQnRuKTtcbiAgICAgIH0pO1xuICAgICAgc3ViZ3JvdXBBcmVhLmFwcGVuZENoaWxkKHN1Ymdyb3VwQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBidG4ub25jbGljayA9ICgpID0+IHtcbiAgICAgIGlmIChzZWxlY3RlZE11c2NsZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIHNlbGVjdGVkTXVzY2xlcy5kZWxldGUobmFtZSk7IGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZiAoc3ViZ3JvdXBDb250YWluZXIpIHN1Ymdyb3VwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJleHBhbmRlZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGVjdGVkTXVzY2xlcy5hZGQobmFtZSk7IGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBpZiAoc3ViZ3JvdXBDb250YWluZXIpIHN1Ymdyb3VwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJleHBhbmRlZFwiKTtcbiAgICAgIH1cbiAgICB9O1xuICB9KTtcblxuICAvLyBRdW90ZVxuICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHF1b3RlLnN0eWxlLmNzc1RleHQgPSBgcGFkZGluZzoxNnB4O2JhY2tncm91bmQ6IzBjMGMwYztib3JkZXItbGVmdDoycHggc29saWQgJHtUSEVNRS5jb2xvcn07bWFyZ2luOjE2cHggMDtgO1xuICBxdW90ZS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc3R5bGU6aXRhbGljO2ZvbnQtc2l6ZToxMnB4O21hcmdpbjowO1wiPlwiVGhlcmUgaXMgYSBnZW5lcmFsIHByaW5jaXBsZSBoZXJlOiA8c3Ryb25nIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvcn07XCI+cGVyZm9ybSBhbnkgYW1vdW50IG9mIHdhcm1pbmctdXAgdGhhdCB5b3UgYmVsaWV2ZSB0byBiZSBtaW5pbWFsbHkgcmVxdWlyZWQuPC9zdHJvbmc+XCI8L3A+PHAgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O21hcmdpbjo4cHggMCAwIDA7dGV4dC1hbGlnbjpyaWdodDtcIj5cXHUyMDE0IE1pa2UgTWVudHplcjwvcD5gO1xuICByb290LmFwcGVuZENoaWxkKHF1b3RlKTtcblxuICAvLyBTZWNvbmRhcnkgYWN0aW9uc1xuICBjb25zdCBzZWNvbmRhcnlSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWNvbmRhcnlSb3cuc3R5bGUuY3NzVGV4dCA9IFwiZGlzcGxheTpmbGV4O2dhcDoxMnB4O21hcmdpbi1ib3R0b206MTJweDtcIjtcbiAgcm9vdC5hcHBlbmRDaGlsZChzZWNvbmRhcnlSb3cpO1xuXG4gIGNvbnN0IGFkZFN0YW5kYXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkU3RhbmRhcmRCdG4udGV4dENvbnRlbnQgPSBcIlxcdUQ4M0RcXHVEQ0NBIEFkZCBTdHJlbmd0aCBTdGFuZGFyZFwiO1xuICBhZGRTdGFuZGFyZEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1zZWNvbmRhcnlcIjtcbiAgYWRkU3RhbmRhcmRCdG4uc3R5bGUuZmxleCA9IFwiMVwiO1xuICBhZGRTdGFuZGFyZEJ0bi5vbmNsaWNrID0gKCkgPT4gb3BlbkFkZFN0cmVuZ3RoU3RhbmRhcmRNb2RhbCgpO1xuICBzZWNvbmRhcnlSb3cuYXBwZW5kQ2hpbGQoYWRkU3RhbmRhcmRCdG4pO1xuXG4gIC8vIFN0YXJ0IHdvcmtvdXQgYnV0dG9uXG4gIGNvbnN0IHN0YXJ0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc3RhcnRCdG4uaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOjIwcHg7XCI+XFx1RDgzQ1xcdURGQ0JcXHVGRTBGPC9zcGFuPiBTVEFSVCBXT1JLT1VUYDtcbiAgc3RhcnRCdG4uY2xhc3NOYW1lID0gXCJvdHctYnRuIG90dy1idG4tcHJpbWFyeVwiO1xuICBzdGFydEJ0bi5zdHlsZS5jc3NUZXh0ICs9IFwiZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2dhcDoxMnB4O3BhZGRpbmc6MjBweCAyNHB4O2ZvbnQtc2l6ZToxNXB4O2ZvbnQtd2VpZ2h0OjcwMDtcIjtcbiAgc3RhcnRCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoc2VsZWN0ZWRNdXNjbGVzLnNpemUgPT09IDApIHsgbm90aWNlKFwiUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgbXVzY2xlIGdyb3VwXCIpOyByZXR1cm47IH1cblxuICAgIC8vIEJ1aWxkIG11c2NsZSBncm91cHMgYXJyYXkgKHdpdGggc3ViZ3JvdXBzIHJlc29sdmVkKVxuICAgIGNvbnN0IG11c2NsZUdyb3Vwc0FycmF5ID0gW107XG4gICAgc2VsZWN0ZWRNdXNjbGVzLmZvckVhY2gobXVzY2xlID0+IHtcbiAgICAgIGNvbnN0IHN1YnMgPSBzZWxlY3RlZFN1Ymdyb3Vwcy5nZXQobXVzY2xlKTtcbiAgICAgIGlmIChzdWJzICYmIHN1YnMuc2l6ZSA+IDApIHN1YnMuZm9yRWFjaChzdWIgPT4gbXVzY2xlR3JvdXBzQXJyYXkucHVzaChzdWIpKTtcbiAgICAgIGVsc2UgbXVzY2xlR3JvdXBzQXJyYXkucHVzaChtdXNjbGUpO1xuICAgIH0pO1xuXG4gICAgLy8gTG9hZCBwcmV2aW91cyBleGVyY2lzZXMgZm9yIGVhY2ggbXVzY2xlIGdyb3VwXG4gICAgY29uc3QgZXhlcmNpc2VzQXJyYXkgPSBbXTtcbiAgICBtdXNjbGVHcm91cHNBcnJheS5mb3JFYWNoKG11c2NsZSA9PiB7XG4gICAgICBjb25zdCBsYXN0V29ya291dCA9IGdldExhc3RXb3Jrb3V0Rm9yTXVzY2xlR3JvdXAobXVzY2xlKTtcbiAgICAgIGlmIChsYXN0V29ya291dCkge1xuICAgICAgICBsYXN0V29ya291dC5leGVyY2lzZXMuZm9yRWFjaChleCA9PiB7XG4gICAgICAgICAgZXhlcmNpc2VzQXJyYXkucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiBleC5uYW1lLCBtdXNjbGUsIG11c2NsZUdyb3VwOiBtdXNjbGUsXG4gICAgICAgICAgICBzZXRzOiBleC5zZXRzID8gZXguc2V0cy5tYXAocyA9PiAoe1xuICAgICAgICAgICAgICB3ZWlnaHQ6IHMud2VpZ2h0IHx8IDAsIHJlcHM6IHMucmVwcyB8fCAxMCxcbiAgICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSwgaXNXYXJtdXA6IHMuaXNXYXJtdXAgfHwgZmFsc2VcbiAgICAgICAgICAgIH0pKSA6IFt7IHdlaWdodDogMCwgcmVwczogMTAsIGNvbXBsZXRlZDogZmFsc2UsIGlzV2FybXVwOiBmYWxzZSB9XVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFNhdmUgdG8gZnJvbnRtYXR0ZXIgYW5kIHVwZGF0ZSBsb2NhbCBzdGF0ZVxuICAgIG11c2NsZUdyb3VwcyA9IG11c2NsZUdyb3Vwc0FycmF5O1xuICAgIGV4ZXJjaXNlcyA9IGV4ZXJjaXNlc0FycmF5O1xuICAgIGN1cnJlbnRNdXNjbGVJbmRleCA9IDA7XG5cbiAgICBhd2FpdCBzZXRNdWx0aXBsZURhdGEoe1xuICAgICAgbXVzY2xlR3JvdXBzOiBtdXNjbGVHcm91cHMsXG4gICAgICBleGVyY2lzZXM6IGV4ZXJjaXNlcyxcbiAgICAgIGN1cnJlbnRNdXNjbGVJbmRleDogMCxcbiAgICAgIFdvcmtvdXQ6IGZhbHNlLFxuICAgICAgXCJXb3Jrb3V0LVR5cGVcIjogXCJcIixcbiAgICAgIFRpbWVzdGFtcDogbW9tZW50KCkuZm9ybWF0KCksXG4gICAgfSk7XG5cbiAgICAvLyBSZS1yZW5kZXIgdG8gc2hvdyBleGVyY2lzZSB0cmFja2luZyBVSVxuICAgIHJlbmRlcigpO1xuICB9O1xuICByb290LmFwcGVuZENoaWxkKHN0YXJ0QnRuKTtcbn1cblxuLy8gXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG4vLyBNQUlOIFJFTkRFUlxuLy8gXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXHUyNTUwXG5hc3luYyBmdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICBjb25zdCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcm9vdC5jbGFzc05hbWUgPSBcIm90dy1jb250YWluZXJcIjtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJvb3QpO1xuXG4gIC8vIElmIHdvcmtvdXQgaXMgYWxyZWFkeSBjb21wbGV0ZWQsIHNob3cgc3VtbWFyeVxuICBpZiAoaXNDb21wbGV0ZWQgJiYgZ2V0RGF0YShcIldvcmtvdXQtVHlwZVwiKSkge1xuICAgIGNvbnN0IHdUeXBlID0gZ2V0RGF0YShcIldvcmtvdXQtVHlwZVwiKTtcbiAgICBjb25zdCBzdW1tYXJ5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3VtbWFyeUNhcmQuY2xhc3NOYW1lID0gXCJvdHctY2FyZCBvdHctY2FyZC1icmVhdGhlXCI7XG4gICAgc3VtbWFyeUNhcmQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBzdW1tYXJ5Q2FyZC5zdHlsZS5wYWRkaW5nID0gXCIzMnB4XCI7XG4gICAgYWRkQ29ybmVycyhzdW1tYXJ5Q2FyZCwgVEhFTUUuc3lzdGVtR3JlZW4pO1xuICAgIHN1bW1hcnlDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6MzJweDttYXJnaW4tYm90dG9tOjEycHg7XCI+JHt3VHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIgPyBcIlxcdUQ4M0RcXHVEQzhFXCIgOiBcIlxcdUQ4M0NcXHVERjBBXCJ9PC9kaXY+XG4gICAgICA8aDIgc3R5bGU9XCJtYXJnaW46MDtjb2xvcjoke1RIRU1FLnN5c3RlbUdyZWVufTtmb250LXNpemU6MTZweDtsZXR0ZXItc3BhY2luZzozcHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1wiPldPUktPVVQgQ09NUExFVEU8L2gyPlxuICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiR7VEhFTUUuY29sb3JNdXRlZH07Zm9udC1zaXplOjEzcHg7bWFyZ2luLXRvcDo4cHg7Zm9udC1zdHlsZTppdGFsaWM7XCI+JHt3VHlwZSA9PT0gXCJkaXNjaXBsaW5lXCIgPyBcIkRpc2NpcGxpbmUgV2luXCIgOiBcIkZsb3cgU3RhdGVcIn08L2Rpdj5cbiAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMXB4O21hcmdpbi10b3A6MTZweDtcIj4ke21vbWVudChnZXREYXRhKFwiVGltZXN0YW1wXCIpKS5mb3JtYXQoXCJNTU0gRCwgWVlZWSBcXHUyMDE0IGg6bW0gQVwiKX08L2Rpdj5cbiAgICBgO1xuICAgIHJvb3QuYXBwZW5kQ2hpbGQoc3VtbWFyeUNhcmQpO1xuXG4gICAgLy8gU2hvdyBleGVyY2lzZXMgc3VtbWFyeVxuICAgIGlmIChleGVyY2lzZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgZXhTdW1tYXJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGV4U3VtbWFyeS5jbGFzc05hbWUgPSBcIm90dy1jYXJkXCI7XG4gICAgICBhZGRDb3JuZXJzKGV4U3VtbWFyeSwgVEhFTUUuY29sb3IpO1xuICAgICAgY29uc3QgZXhUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBleFRpdGxlLnN0eWxlLmNzc1RleHQgPSBgY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTtmb250LXNpemU6MTFweDtsZXR0ZXItc3BhY2luZzoycHg7dGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO3RleHQtYWxpZ246Y2VudGVyO21hcmdpbi1ib3R0b206MTJweDtgO1xuICAgICAgZXhUaXRsZS50ZXh0Q29udGVudCA9IFwiU0VTU0lPTiBTVU1NQVJZXCI7XG4gICAgICBleFN1bW1hcnkuYXBwZW5kQ2hpbGQoZXhUaXRsZSk7XG4gICAgICBmb3IgKGNvbnN0IGV4IG9mIGV4ZXJjaXNlcykge1xuICAgICAgICBjb25zdCBjb21wbGV0ZWRTZXRzID0gZXguc2V0cy5maWx0ZXIoKHMpID0+ICFzLmlzV2FybXVwICYmIHMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHRvdGFsU2V0cyA9IGV4LnNldHMuZmlsdGVyKChzKSA9PiAhcy5pc1dhcm11cCkubGVuZ3RoO1xuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICByb3cuc3R5bGUuY3NzVGV4dCA9IGBkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47cGFkZGluZzo4cHggMDtib3JkZXItYm90dG9tOjFweCBzb2xpZCAke1RIRU1FLmNvbG9yQm9yZGVyfTtgO1xuICAgICAgICByb3cuaW5uZXJIVE1MID0gYDxzcGFuIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvcn07Zm9udC13ZWlnaHQ6NjAwO1wiPiR7ZXgubmFtZX08L3NwYW4+PHNwYW4gc3R5bGU9XCJjb2xvcjoke1RIRU1FLmNvbG9yTXV0ZWR9O2ZvbnQtc2l6ZToxMnB4O1wiPiR7Y29tcGxldGVkU2V0c30vJHt0b3RhbFNldHN9IHNldHM8L3NwYW4+YDtcbiAgICAgICAgZXhTdW1tYXJ5LmFwcGVuZENoaWxkKHJvdyk7XG4gICAgICB9XG4gICAgICByb290LmFwcGVuZENoaWxkKGV4U3VtbWFyeSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBObyBtdXNjbGUgZ3JvdXBzIHlldCBcdTIxOTIgU2hvdyBtdXNjbGUgc2VsZWN0aW9uIHNjcmVlbiBcdTI1MDBcdTI1MDBcbiAgaWYgKG11c2NsZUdyb3Vwcy5sZW5ndGggPT09IDApIHtcbiAgICBhd2FpdCByZW5kZXJNdXNjbGVTZWxlY3Rpb24ocm9vdCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIEFjdGl2ZSBXb3Jrb3V0IFVJIFx1MjUwMFx1MjUwMFxuICBjb25zdCBjdXJyZW50TXVzY2xlID0gbXVzY2xlR3JvdXBzW2N1cnJlbnRNdXNjbGVJbmRleF0gfHwgbXVzY2xlR3JvdXBzWzBdO1xuICBjb25zdCBtdXNjbGVFeGVyY2lzZXMgPSBleGVyY2lzZXMuZmlsdGVyKChlKSA9PiBlLm11c2NsZSA9PT0gY3VycmVudE11c2NsZSB8fCBlLm11c2NsZUdyb3VwID09PSBjdXJyZW50TXVzY2xlKTtcblxuICAvLyBIZWFkZXJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTmFtZSA9IFwib3R3LWNhcmQgb3R3LWNhcmQtYnJlYXRoZSBvdHctaGVhZGVyXCI7XG4gIGFkZENvcm5lcnMoaGVhZGVyLCBUSEVNRS5jb2xvcik7XG4gIGNvbnN0IHRpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlRWwuY2xhc3NOYW1lID0gXCJvdHctdGl0bGVcIjtcbiAgdGl0bGVFbC50ZXh0Q29udGVudCA9IGN1cnJlbnRNdXNjbGUudG9VcHBlckNhc2UoKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlRWwpO1xuICBjb25zdCBwcm9ncmVzc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvZ3Jlc3NMYWJlbC5jbGFzc05hbWUgPSBcIm90dy1wcm9ncmVzcy1sYWJlbFwiO1xuICBwcm9ncmVzc0xhYmVsLnRleHRDb250ZW50ID0gKGN1cnJlbnRNdXNjbGVJbmRleCArIDEpICsgXCIgLyBcIiArIG11c2NsZUdyb3Vwcy5sZW5ndGg7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChwcm9ncmVzc0xhYmVsKTtcbiAgcm9vdC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuXG4gIC8vIEV4ZXJjaXNlc1xuICBjb25zdCBleENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGV4Q29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcImRpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47Z2FwOjE2cHg7XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQoZXhDb250YWluZXIpO1xuXG4gIGlmIChtdXNjbGVFeGVyY2lzZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY29uc3QgZW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGVtcHR5LnN0eWxlLmNzc1RleHQgPSBgdGV4dC1hbGlnbjpjZW50ZXI7cGFkZGluZzo0MHB4IDIwcHg7YmFja2dyb3VuZDojMGYwZjBmO2JvcmRlcjoxcHggZGFzaGVkICR7VEhFTUUuY29sb3JCb3JkZXJ9O2A7XG4gICAgZW1wdHkuaW5uZXJIVE1MID0gYDxwIHN0eWxlPVwiY29sb3I6JHtUSEVNRS5jb2xvck11dGVkfTttYXJnaW46MDtcIj5ObyBleGVyY2lzZXMgZm9yICR7Y3VycmVudE11c2NsZX0geWV0LjwvcD5gO1xuICAgIGV4Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtcHR5KTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGNvbnN0IGV4IG9mIG11c2NsZUV4ZXJjaXNlcykge1xuICAgICAgYXdhaXQgcmVuZGVyRXhlcmNpc2UoZXhDb250YWluZXIsIGV4KTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgZXhlcmNpc2UgYnV0dG9uXG4gIGNvbnN0IGFkZEV4QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkRXhCdG4udGV4dENvbnRlbnQgPSBcIisgQUREIEVYRVJDSVNFXCI7XG4gIGFkZEV4QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLWRhc2hlZFwiO1xuICBhZGRFeEJ0bi5zdHlsZS5tYXJnaW5Ub3AgPSBcIjE2cHhcIjtcbiAgYWRkRXhCdG4ub25jbGljayA9ICgpID0+IG9wZW5BZGRFeGVyY2lzZU1vZGFsKGN1cnJlbnRNdXNjbGUpO1xuICByb290LmFwcGVuZENoaWxkKGFkZEV4QnRuKTtcblxuICAvLyBOYXZpZ2F0aW9uXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdi5jbGFzc05hbWUgPSBcIm90dy1uYXYtcm93XCI7XG4gIHJvb3QuYXBwZW5kQ2hpbGQobmF2KTtcblxuICBpZiAoY3VycmVudE11c2NsZUluZGV4ID4gMCkge1xuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHByZXZCdG4udGV4dENvbnRlbnQgPSBcIlxcdTIxOTAgUFJFVklPVVNcIjtcbiAgICBwcmV2QnRuLmNsYXNzTmFtZSA9IFwib3R3LWJ0biBvdHctYnRuLXNlY29uZGFyeVwiO1xuICAgIHByZXZCdG4ub25jbGljayA9IGFzeW5jICgpID0+IHsgY3VycmVudE11c2NsZUluZGV4LS07IGF3YWl0IHNhdmVTdGF0ZSgpOyByZW5kZXIoKTsgfTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQocHJldkJ0bik7XG4gIH1cblxuICBpZiAoY3VycmVudE11c2NsZUluZGV4IDwgbXVzY2xlR3JvdXBzLmxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBuZXh0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBuZXh0QnRuLnRleHRDb250ZW50ID0gXCJORVhUIE1VU0NMRSBcXHUyMTkyXCI7XG4gICAgbmV4dEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1wcmltYXJ5XCI7XG4gICAgbmV4dEJ0bi5vbmNsaWNrID0gYXN5bmMgKCkgPT4geyBjdXJyZW50TXVzY2xlSW5kZXgrKzsgYXdhaXQgc2F2ZVN0YXRlKCk7IHJlbmRlcigpOyB9O1xuICAgIG5hdi5hcHBlbmRDaGlsZChuZXh0QnRuKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBmaW5pc2hCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGZpbmlzaEJ0bi50ZXh0Q29udGVudCA9IFwiXFx1MjcxMyBGSU5JU0ggV09SS09VVFwiO1xuICAgIGZpbmlzaEJ0bi5jbGFzc05hbWUgPSBcIm90dy1idG4gb3R3LWJ0bi1maW5pc2hcIjtcbiAgICBmaW5pc2hCdG4ub25jbGljayA9ICgpID0+IG9wZW5GaW5pc2hNb2RhbCgpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChmaW5pc2hCdG4pO1xuICB9XG59XG5cbi8vIFx1MjUwMFx1MjUwMCBCb290IFx1MjUwMFx1MjUwMFxucmV0dXJuIHJlbmRlcigpO1xuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQnVpbHQtaW4gVGVtcGxhdGUgUmVnaXN0cnlcbi8vIE1hcHMgdGVtcGxhdGUgSURzIHRvIHRoZWlyIHNvdXJjZSBjb2RlIChidW5kbGVkIGF0IGJ1aWxkIHRpbWUpLlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB3b3Jrb3V0U291cmNlIGZyb20gXCIuL3dvcmtvdXQudHBsXCI7XG5cbi8qKlxuICogQnVpbHQtaW4gdGVtcGxhdGVzIGJ1bmRsZWQgaW5zaWRlIHRoZSBwbHVnaW4uXG4gKiBLZXlzIGFyZSB0ZW1wbGF0ZSBJRHMgcmVmZXJlbmNlZCBpbiBBY3Rpdml0eUNvbmZpZy53b3Jrc3BhY2VUZW1wbGF0ZS5cbiAqIFZhbHVlcyBhcmUgdGhlIHJhdyBKUyBzb3VyY2UgZXhlY3V0ZWQgdmlhIG5ldyBGdW5jdGlvbihcImN0eFwiLCBzb3VyY2UpLlxuICovXG5leHBvcnQgY29uc3QgQlVJTFRJTl9URU1QTEFURVM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHdvcmtvdXQ6IHdvcmtvdXRTb3VyY2UsXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsSUFBQUEsbUJBQThEOzs7QUNZdkQsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxzQkFBc0I7QUFJNUIsSUFBTSxTQUEyQjtBQUFBLEVBQ3RDLEVBQUUsTUFBTSxHQUFHLE1BQU0sb0JBQW9CLE1BQU0sZ0JBQWdCLGFBQWEsc0VBQXNFLE1BQU0saUdBQWlHLFdBQVcsd0JBQXFCO0FBQUEsRUFDclIsRUFBRSxNQUFNLEdBQUcsTUFBTSxnQkFBZ0IsTUFBTSxvQkFBb0IsYUFBYSxpRUFBaUUsTUFBTSxvRkFBb0YsV0FBVyx3QkFBcUI7QUFBQSxFQUNuUSxFQUFFLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixNQUFNLGNBQWMsYUFBYSwrREFBK0QsTUFBTSx5RUFBeUUsV0FBVyx3QkFBcUI7QUFBQSxFQUNuUCxFQUFFLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixNQUFNLFdBQVcsYUFBYSxxRUFBcUUsTUFBTSxnRUFB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
