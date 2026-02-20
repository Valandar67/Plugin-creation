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
var import_obsidian7 = require("obsidian");

// src/constants.ts
var VIEW_TYPE_OLEN = "olen-dashboard-view";
var VIEW_TYPE_SESSION = "olen-session-view";
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
    hasSession: true,
    priority: 8,
    neglectThreshold: 2,
    preferredTime: "morning",
    estimatedDuration: 60,
    dashboardSource: "builtin",
    workspaceSource: "Workout session"
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
    hasSession: true,
    priority: 7,
    neglectThreshold: 3,
    preferredTime: "morning",
    estimatedDuration: 30,
    alternatesWith: "workout",
    dashboardSource: "builtin",
    workspaceSource: "Cardio session"
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
    hasSession: true,
    priority: 6,
    neglectThreshold: 3,
    preferredTime: "evening",
    estimatedDuration: 45,
    dashboardSource: "builtin",
    workspaceSource: "Reading session"
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
    hasSession: true,
    priority: 6,
    neglectThreshold: 3,
    preferredTime: "afternoon",
    estimatedDuration: 45,
    dashboardSource: "builtin",
    workspaceSource: "Drum practice session"
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
    hasSession: true,
    priority: 4,
    neglectThreshold: 4,
    preferredTime: "afternoon",
    estimatedDuration: 30,
    dashboardSource: "builtin",
    workspaceSource: "Research about health session"
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
    hasSession: true,
    priority: 5,
    neglectThreshold: 5,
    preferredTime: "evening",
    estimatedDuration: 60,
    dashboardSource: "builtin",
    workspaceSource: "Social session"
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
    hasSession: true,
    priority: 7,
    neglectThreshold: 3,
    preferredTime: "afternoon",
    estimatedDuration: 60,
    dashboardSource: "builtin",
    workspaceSource: "Drawing Session"
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
var DEFAULT_SESSION_STATES = [
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
    begin_session: "BEGIN SESSION",
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
var DEFAULT_TEMPLATE_REGISTRY = [
  {
    activityType: "workout",
    templatePath: "Templates/Workout.js",
    enabled: true
  }
];
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
  // Sessions
  sessionCompletionStates: DEFAULT_SESSION_STATES,
  activeSession: null,
  // Calendar
  calendar: DEFAULT_CALENDAR_SETTINGS,
  // Template Registry
  templateRegistry: DEFAULT_TEMPLATE_REGISTRY,
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
    const totalSessions = this.getTotalCompletions();
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
    const tier = totalSessions < 50 ? "light" : totalSessions < 200 ? "mid" : "heavy";
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
function renderDirectiveCard(container, settings, engine, staggerIndex, onBeginSession) {
  const suggestion = engine.getSuggestion();
  if (!suggestion)
    return;
  const label = settings.devConfig.labels.directive_title ?? "THE DIRECTIVE";
  const beginLabel = settings.devConfig.labels.begin_session ?? "BEGIN SESSION";
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
    onBeginSession?.(suggestion.activityId);
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
    showExpandedDirective(container, settings, suggestion, beginLabel, notNowLabel, onBeginSession);
  });
}
function showExpandedDirective(container, settings, suggestion, beginLabel, notNowLabel, onBeginSession) {
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
    onBeginSession?.(suggestion.activityId);
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
            onAccept: (activityId) => this.handleBeginSession(activityId),
            onSkip: (activityId) => this.handleSkipActivity(activityId, engine),
            onCalendarDone: (entry) => this.handleCalendarTaskDone(entry),
            onCalendarPostpone: (entry) => this.handleCalendarTaskPostpone(entry),
            onCreateEvent: () => this.plugin.showQuickTaskDialog()
          });
          break;
        case "directive":
          renderDirectiveCard(root, settings, engine, staggerIdx++, (activityId) => {
            this.handleBeginSession(activityId);
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
  async handleBeginSession(activityId) {
    const activity = this.plugin.settings.activities.find((a) => a.id === activityId);
    if (!activity)
      return;
    if (activity.hasSession) {
      if (activity.workspaceSource && activity.workspaceSource !== "builtin") {
        this.plugin.settings.activeSession = {
          activityId: activity.id,
          activityName: activity.name,
          emoji: activity.emoji,
          category: activity.category,
          startTime: (/* @__PURE__ */ new Date()).toISOString(),
          skills: [],
          hasSession: true,
          sessionFolder: activity.sessionFolder,
          skillFolder: activity.skillFolder
        };
        await this.plugin.saveSettings();
        await this.plugin.activateEmbeddedView({
          filePath: activity.workspaceSource,
          activityId: activity.id,
          activityName: activity.name,
          activityEmoji: activity.emoji,
          mode: "workspace"
        });
      } else {
        this.plugin.settings.activeSession = {
          activityId: activity.id,
          activityName: activity.name,
          emoji: activity.emoji,
          category: activity.category,
          startTime: (/* @__PURE__ */ new Date()).toISOString(),
          skills: [],
          hasSession: true,
          sessionFolder: activity.sessionFolder,
          skillFolder: activity.skillFolder
        };
        await this.plugin.saveSettings();
        this.plugin.activateSessionView();
      }
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

// src/views/SessionView.ts
var import_obsidian3 = require("obsidian");
var SessionView = class extends import_obsidian3.ItemView {
  // seconds
  constructor(leaf, plugin) {
    super(leaf);
    this.timerInterval = null;
    this.elapsed = 0;
    this.plugin = plugin;
    this.startTime = /* @__PURE__ */ new Date();
  }
  getViewType() {
    return VIEW_TYPE_SESSION;
  }
  getDisplayText() {
    const session = this.plugin.settings.activeSession;
    return session ? `Session: ${session.activityName}` : "Session";
  }
  getIcon() {
    return "timer";
  }
  async onOpen() {
    const session = this.plugin.settings.activeSession;
    if (!session) {
      this.contentEl.createEl("div", { text: "No active session." });
      return;
    }
    this.startTime = new Date(session.startTime);
    this.render(session);
    this.startTimer();
  }
  async onClose() {
    this.stopTimer();
    this.contentEl.empty();
  }
  startTimer() {
    this.timerInterval = window.setInterval(() => {
      this.elapsed = Math.floor((Date.now() - this.startTime.getTime()) / 1e3);
      const timerEl = this.contentEl.querySelector(".olen-session-timer");
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
  render(session) {
    const container = this.contentEl;
    container.empty();
    const root = container.createDiv({ cls: "olen-dashboard olen-session-root" });
    const topBar = root.createDiv({ cls: "olen-session-topbar" });
    const actInfo = topBar.createDiv({ cls: "olen-session-act-info" });
    actInfo.createEl("span", { cls: "olen-session-emoji", text: session.emoji });
    actInfo.createEl("span", { cls: "olen-session-act-name", text: session.activityName });
    const timerEl = topBar.createEl("div", {
      cls: "olen-session-timer",
      text: "00:00"
    });
    const finishBtn = topBar.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-session-finish-btn",
      text: "FINISH"
    });
    finishBtn.addEventListener("click", () => this.showFinishModal(session));
    const accentColor = this.plugin.settings.categoryColors[session.category] ?? "#928d85";
    const accent = root.createDiv({ cls: "olen-session-accent" });
    accent.style.background = `linear-gradient(90deg, ${accentColor}, transparent)`;
    const content = root.createDiv({ cls: "olen-session-content" });
    const skillsSection = content.createDiv({ cls: "olen-session-skills-section" });
    skillsSection.createEl("div", { cls: "olen-heading", text: "SESSION SKILLS" });
    const skillsContainer = skillsSection.createDiv({ cls: "olen-session-skills" });
    if (session.skills.length === 0) {
      skillsContainer.createEl("div", {
        cls: "olen-session-no-skills",
        text: "No skills tagged yet"
      });
    } else {
      for (const skill of session.skills) {
        const chip = skillsContainer.createDiv({ cls: "olen-session-skill-chip" });
        chip.textContent = skill;
      }
    }
    const addSkillBtn = skillsSection.createEl("button", {
      cls: "olen-btn olen-btn-secondary olen-session-add-skill",
      text: "+ ADD SKILL"
    });
    addSkillBtn.addEventListener("click", () => this.showSkillPicker(session));
    const focusZone = content.createDiv({ cls: "olen-session-focus" });
    const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
    focusZone.createEl("div", {
      cls: "olen-quote-text",
      text: `"${quote.text}"`
    });
    focusZone.createEl("div", {
      cls: "olen-quote-attribution",
      text: `\u2014 ${quote.attribution}`
    });
    const bottomBar = root.createDiv({ cls: "olen-session-bottombar" });
    const catLabel = session.category.charAt(0).toUpperCase() + session.category.slice(1);
    bottomBar.createEl("div", {
      cls: "olen-session-category-label",
      text: catLabel
    });
    bottomBar.style.borderLeftColor = accentColor;
  }
  showSkillPicker(session) {
    const overlay = document.createElement("div");
    overlay.className = "olen-sheet-overlay";
    const sheet = overlay.createDiv({ cls: "olen-sheet" });
    sheet.createDiv({ cls: "olen-sheet-handle" });
    sheet.createEl("div", { cls: "olen-heading-lg", text: "ADD SKILL" });
    const inputWrap = sheet.createDiv({ attr: { style: "margin: 20px 0;" } });
    const input = inputWrap.createEl("input", {
      cls: "olen-session-skill-input",
      attr: { type: "text", placeholder: "Skill name..." }
    });
    if (session.skillFolder) {
      const skills = this.loadSkillsFromFolder(session.skillFolder);
      if (skills.length > 0) {
        const existing = sheet.createDiv({ cls: "olen-session-skills", attr: { style: "margin-bottom: 16px;" } });
        for (const skill of skills) {
          const chip = existing.createDiv({ cls: "olen-session-skill-chip olen-clickable" });
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
      if (!session.skills.includes(name)) {
        session.skills.push(name);
        this.plugin.settings.activeSession = session;
        this.plugin.saveSettings();
        this.render(session);
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
  showFinishModal(session) {
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
      text: `${session.emoji} ${session.activityName} \xB7 ${durationMinutes} minutes`
    });
    const states = this.plugin.settings.sessionCompletionStates.filter((s) => s.enabled);
    const statesGrid = sheet.createDiv({ cls: "olen-session-states-grid" });
    for (const state of states) {
      const btn = statesGrid.createDiv({ cls: "olen-session-state-btn" });
      btn.style.borderColor = state.color;
      btn.createEl("div", { cls: "olen-session-state-icon", text: state.icon });
      btn.createEl("div", { cls: "olen-session-state-name", text: state.name });
      btn.addEventListener("click", async () => {
        const result = {
          activityId: session.activityId,
          activityName: session.activityName,
          category: session.category,
          type: state.id,
          startTime: session.startTime,
          endTime: endTime.toISOString(),
          durationMinutes,
          skills: session.skills
        };
        await this.finishSession(result, session);
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
  async finishSession(result, session) {
    if (session.sessionFolder) {
      await this.createSessionFile(result, session);
    }
    await this.markActivityDone(session, result);
    const state = this.plugin.settings.sessionCompletionStates.find((s) => s.id === result.type);
    if (state && state.xpMultiplier > 0) {
      const xpGain = Math.round(this.plugin.settings.devConfig.xpPerCompletion * state.xpMultiplier);
      this.plugin.settings.categoryXP[session.category] += xpGain;
    }
    if (result.type !== "skipped") {
      const activity = this.plugin.settings.activities.find((a) => a.id === session.activityId);
      if (activity) {
        this.plugin.settings.bossCurrentHP = Math.max(
          0,
          this.plugin.settings.bossCurrentHP - activity.damagePerCompletion
        );
      }
    }
    this.plugin.settings.activeSession = null;
    await this.plugin.saveSettings();
    const stateLabel = this.plugin.settings.sessionCompletionStates.find((s) => s.id === result.type)?.name ?? result.type;
    new import_obsidian3.Notice(`${session.emoji} ${session.activityName} \u2014 ${stateLabel} \xB7 ${result.durationMinutes}m`);
    this.plugin.activateDashboardView();
  }
  async createSessionFile(result, session) {
    const folder = session.sessionFolder;
    const activity = this.plugin.settings.activities.find((a) => a.id === session.activityId);
    const property = activity?.property ?? session.activityName;
    const endTime = new Date(result.endTime);
    const startTime = new Date(result.startTime);
    const dateStr = endTime.toISOString().slice(0, 10);
    const timeStr = `${String(endTime.getHours()).padStart(2, "0")}${String(endTime.getMinutes()).padStart(2, "0")}`;
    const fileName = `Session ${dateStr} ${timeStr}`;
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
      `category: "${session.category}"`,
      result.skills.length > 0 ? `skills: [${result.skills.map((s) => `"${s}"`).join(", ")}]` : "skills: []",
      "cssclasses:",
      "  - hide-properties",
      "---"
    ];
    const body = [
      "",
      `# ${session.emoji} ${session.activityName} Session`,
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
  async markActivityDone(session, result) {
    const activity = this.plugin.settings.activities.find((a) => a.id === session.activityId);
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

// src/views/EmbeddedMdView.ts
var import_obsidian4 = require("obsidian");
var VIEW_TYPE_EMBEDDED = "olen-embedded-view";
var EmbeddedMdView = class extends import_obsidian4.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.state = null;
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE_EMBEDDED;
  }
  getDisplayText() {
    if (this.state?.activityName) {
      return this.state.mode === "hub" ? `${this.state.activityName} Hub` : `${this.state.activityName} Session`;
    }
    return "Olen";
  }
  getIcon() {
    return this.state?.mode === "workspace" ? "timer" : "layout-dashboard";
  }
  async onOpen() {
    if (this.state) {
      await this.render();
    }
  }
  async onClose() {
    this.contentEl.empty();
  }
  setEmbeddedState(state) {
    this.state = state;
  }
  async render() {
    const container = this.contentEl;
    container.empty();
    if (!this.state) {
      container.createEl("div", { text: "No file specified." });
      return;
    }
    const root = container.createDiv({ cls: "olen-dashboard olen-embedded-root" });
    const navBar = root.createDiv({ cls: "olen-embedded-nav" });
    const backBtn = navBar.createEl("button", {
      cls: "olen-embedded-back",
      text: "\u2190 Back"
    });
    backBtn.addEventListener("click", () => {
      this.plugin.activateDashboardView();
    });
    if (this.state.activityEmoji || this.state.activityName) {
      const titleEl = navBar.createDiv({ cls: "olen-embedded-title" });
      if (this.state.activityEmoji) {
        titleEl.createEl("span", { text: this.state.activityEmoji + " " });
      }
      titleEl.createEl("span", {
        text: this.state.activityName ?? "Activity"
      });
    }
    const modeLabel = navBar.createEl("span", {
      cls: "olen-embedded-mode",
      text: this.state.mode === "hub" ? "HUB" : "SESSION"
    });
    const contentArea = root.createDiv({ cls: "olen-embedded-content" });
    const filePath = this.state.filePath.endsWith(".md") ? this.state.filePath : this.state.filePath + ".md";
    const file = this.app.vault.getAbstractFileByPath(filePath);
    if (!file || !(file instanceof import_obsidian4.TFile)) {
      contentArea.createEl("div", {
        cls: "olen-embedded-error",
        text: `File not found: ${filePath}`
      });
      contentArea.createEl("div", {
        cls: "olen-embedded-error-hint",
        text: "Check the file path in activity settings, or switch to Built-in mode."
      });
      return;
    }
    try {
      const content = await this.app.vault.read(file);
      await import_obsidian4.MarkdownRenderer.render(
        this.app,
        content,
        contentArea,
        file.path,
        this
      );
    } catch (err) {
      console.error("Olen: Failed to render embedded .md:", err);
      contentArea.createEl("div", {
        cls: "olen-embedded-error",
        text: "Failed to render file. It may contain unsupported content."
      });
    }
  }
};

// src/settings/OlenSettings.ts
var import_obsidian5 = require("obsidian");
var OlenSettingTab = class extends import_obsidian5.PluginSettingTab {
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
    this.renderTemplateRegistrySection(containerEl);
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
    new import_obsidian5.Setting(body).setName("Name").setDesc("Your name for the dashboard greeting").addText(
      (text) => text.setValue(this.plugin.settings.userName).onChange(async (value) => {
        this.plugin.settings.userName = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(body).setName("My Why").setDesc("Your core motivation \u2014 shown periodically on the dashboard").addTextArea(
      (area) => area.setValue(this.plugin.settings.myWhy).onChange(async (value) => {
        this.plugin.settings.myWhy = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(body).setName("Hero background image").setDesc("Vault path to the hero background image (e.g., images/hero.jpg)").addText(
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
    new import_obsidian5.Setting(body).addButton(
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
          hasSession: false,
          priority: 5,
          neglectThreshold: 3,
          preferredTime: "anytime",
          estimatedDuration: 30,
          dashboardSource: "builtin",
          workspaceSource: "builtin"
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
    new import_obsidian5.Setting(wrapper).setName(`${activity.emoji} ${activity.name}`).setDesc(`${activity.category} \xB7 ${activity.folder || "no folder set"}`).addToggle(
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
    new import_obsidian5.Setting(details).setName("Name").addText((t) => t.setValue(activity.name).onChange(async (v) => {
      this.plugin.settings.activities[index].name = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian5.Setting(details).setName("Emoji").addText((t) => t.setValue(activity.emoji).onChange(async (v) => {
      this.plugin.settings.activities[index].emoji = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian5.Setting(details).setName("Category").addDropdown(
      (d) => d.addOptions({ body: "Body", mind: "Mind", spirit: "Spirit" }).setValue(activity.category).onChange(async (v) => {
        this.plugin.settings.activities[index].category = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Vault folder").setDesc("Folder with YYYY-MM-DD notes").addText((t) => t.setValue(activity.folder).onChange(async (v) => {
      this.plugin.settings.activities[index].folder = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian5.Setting(details).setName("Frontmatter property").addText((t) => t.setValue(activity.property).onChange(async (v) => {
      this.plugin.settings.activities[index].property = v;
      await this.plugin.saveSettings();
    }));
    new import_obsidian5.Setting(details).setName("Weekly target").addSlider(
      (s) => s.setLimits(1, 7, 1).setValue(activity.weeklyTarget).setDynamicTooltip().onChange(async (v) => {
        this.plugin.settings.activities[index].weeklyTarget = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Priority (1-10)").addSlider(
      (s) => s.setLimits(1, 10, 1).setValue(activity.priority).setDynamicTooltip().onChange(async (v) => {
        this.plugin.settings.activities[index].priority = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Preferred time").addDropdown(
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
    new import_obsidian5.Setting(details).setName("Neglect threshold (days)").addSlider(
      (s) => s.setLimits(1, 14, 1).setValue(activity.neglectThreshold).setDynamicTooltip().onChange(async (v) => {
        this.plugin.settings.activities[index].neglectThreshold = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Estimated duration (minutes)").addText(
      (t) => t.setValue(String(activity.estimatedDuration)).onChange(async (v) => {
        const n = parseInt(v);
        if (!isNaN(n) && n > 0) {
          this.plugin.settings.activities[index].estimatedDuration = n;
          await this.plugin.saveSettings();
        }
      })
    );
    new import_obsidian5.Setting(details).setName("Has session view").addToggle(
      (toggle) => toggle.setValue(activity.hasSession).onChange(async (v) => {
        this.plugin.settings.activities[index].hasSession = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Blocks (comma-separated activity IDs)").addText(
      (t) => t.setValue((activity.blocks ?? []).join(", ")).onChange(async (v) => {
        this.plugin.settings.activities[index].blocks = v.split(",").map((s) => s.trim()).filter(Boolean);
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Alternates with (activity ID)").addText(
      (t) => t.setValue(activity.alternatesWith ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].alternatesWith = v.trim() || void 0;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Chain after (activity ID)").addText(
      (t) => t.setValue(activity.chainAfter ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].chainAfter = v.trim() || void 0;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Session folder").setDesc("Vault folder for session files").addText(
      (t) => t.setPlaceholder("e.g. Home/Starts/Drawing/Sessions").setValue(activity.sessionFolder ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].sessionFolder = v.trim() || void 0;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Skill folder").setDesc("Vault folder containing skill tree notes").addText(
      (t) => t.setPlaceholder("e.g. Home/Starts/Drawing/Skill tree").setValue(activity.skillFolder ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].skillFolder = v.trim() || void 0;
        await this.plugin.saveSettings();
      })
    );
    details.createEl("div", {
      text: "View Sources",
      attr: { style: "font-weight: 600; font-size: 0.9em; margin: 12px 0 4px; color: var(--text-normal);" }
    });
    details.createEl("div", {
      text: "Choose between built-in Olen UI or your own .md templates rendered inside Olen.",
      attr: { style: "font-size: 0.8em; color: var(--text-muted); margin-bottom: 8px;" }
    });
    const dashPathSetting = new import_obsidian5.Setting(details).setName("Dashboard .md path").setDesc("Vault path to hub template (without .md extension)").addText(
      (t) => t.setPlaceholder("Home/Hubs/Drawing hub").setValue(activity.dashboardSource === "builtin" ? "" : activity.dashboardSource ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].dashboardSource = v.trim() || "builtin";
        await this.plugin.saveSettings();
      })
    );
    const isDashCustom = activity.dashboardSource && activity.dashboardSource !== "builtin";
    dashPathSetting.settingEl.style.display = isDashCustom ? "" : "none";
    new import_obsidian5.Setting(details).setName("Dashboard source").setDesc("Hub view when you tap an activity").addDropdown(
      (d) => d.addOptions({ builtin: "Built-in (Native)", custom: "Custom .md file" }).setValue(isDashCustom ? "custom" : "builtin").onChange(async (v) => {
        if (v === "builtin") {
          this.plugin.settings.activities[index].dashboardSource = "builtin";
          dashPathSetting.settingEl.style.display = "none";
        } else {
          dashPathSetting.settingEl.style.display = "";
        }
        await this.plugin.saveSettings();
      })
    );
    dashPathSetting.settingEl.remove();
    details.appendChild(dashPathSetting.settingEl);
    const wsPathSetting = new import_obsidian5.Setting(details).setName("Workspace .md path").setDesc("Vault path to session template (without .md extension)").addText(
      (t) => t.setPlaceholder("Drawing Session").setValue(activity.workspaceSource === "builtin" ? "" : activity.workspaceSource ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].workspaceSource = v.trim() || "builtin";
        await this.plugin.saveSettings();
      })
    );
    const isWsCustom = activity.workspaceSource && activity.workspaceSource !== "builtin";
    wsPathSetting.settingEl.style.display = isWsCustom ? "" : "none";
    new import_obsidian5.Setting(details).setName("Workspace source").setDesc("Session view when you begin a session").addDropdown(
      (d) => d.addOptions({ builtin: "Built-in (Native)", custom: "Custom .md file" }).setValue(isWsCustom ? "custom" : "builtin").onChange(async (v) => {
        if (v === "builtin") {
          this.plugin.settings.activities[index].workspaceSource = "builtin";
          wsPathSetting.settingEl.style.display = "none";
        } else {
          wsPathSetting.settingEl.style.display = "";
        }
        await this.plugin.saveSettings();
      })
    );
    wsPathSetting.settingEl.remove();
    details.appendChild(wsPathSetting.settingEl);
    new import_obsidian5.Setting(details).addButton(
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
      new import_obsidian5.Setting(body).setName(`${cat.label} color`).addColorPicker(
        (cp) => cp.setValue(this.plugin.settings.categoryColors[cat.key]).onChange(async (v) => {
          this.plugin.settings.categoryColors[cat.key] = v;
          await this.plugin.saveSettings();
        })
      );
    }
    new import_obsidian5.Setting(body).setName("Title override").setDesc("Override the dynamic title (leave empty for auto)").addText(
      (t) => t.setValue(this.plugin.settings.titleOverride).onChange(async (v) => {
        this.plugin.settings.titleOverride = v;
        await this.plugin.saveSettings();
      })
    );
  }
  // --- Template Registry ---
  renderTemplateRegistrySection(container) {
    const body = this.createCollapsibleSection(container, "Template Registry", "\u{1F4DC}");
    body.createEl("p", {
      text: "Map activity types to template files. Notes with activity: <type> in frontmatter will render the associated template UI instead of raw markdown.",
      attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 12px; line-height: 1.5;" }
    });
    body.createEl("p", {
      text: "Templates are .js files in your vault. The plugin passes a ctx object with data-binding to the note's frontmatter.",
      attr: { style: "font-size: 0.8em; color: var(--text-muted); margin-bottom: 12px; font-style: italic;" }
    });
    const registry = this.plugin.settings.templateRegistry ?? [];
    for (let i = 0; i < registry.length; i++) {
      const entry = registry[i];
      this.renderTemplateRegistryItem(body, entry, i);
    }
    new import_obsidian5.Setting(body).addButton(
      (btn) => btn.setButtonText("+ Add Template Mapping").onClick(async () => {
        this.plugin.settings.templateRegistry.push({
          activityType: "",
          templatePath: "",
          enabled: true
        });
        await this.plugin.saveSettings();
        this.display();
      })
    );
  }
  renderTemplateRegistryItem(container, entry, index) {
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
    new import_obsidian5.Setting(wrapper).setName(entry.activityType ? `${entry.activityType} \u2192 ${entry.templatePath || "(no path)"}` : "New mapping").setDesc(entry.enabled ? "Active" : "Disabled").addToggle(
      (toggle) => toggle.setValue(entry.enabled).onChange(async (value) => {
        this.plugin.settings.templateRegistry[index].enabled = value;
        this.plugin.templateEngine.invalidateCache();
        await this.plugin.saveSettings();
      })
    );
    const detailsToggle = wrapper.createEl("details");
    detailsToggle.createEl("summary", {
      text: "Configure",
      attr: { style: "cursor: pointer; font-size: 0.85em; color: var(--text-muted); margin-bottom: 8px;" }
    });
    const details = detailsToggle.createDiv();
    new import_obsidian5.Setting(details).setName("Activity type").setDesc("The value of the 'activity' frontmatter field (e.g., workout, guitar)").addText(
      (t) => t.setPlaceholder("workout").setValue(entry.activityType).onChange(async (v) => {
        this.plugin.settings.templateRegistry[index].activityType = v.trim().toLowerCase();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).setName("Template path").setDesc("Vault path to the .js template file (e.g., Templates/Workout.js)").addText(
      (t) => t.setPlaceholder("Templates/Workout.js").setValue(entry.templatePath).onChange(async (v) => {
        this.plugin.settings.templateRegistry[index].templatePath = v.trim();
        this.plugin.templateEngine.invalidateCache();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(details).addButton(
      (btn) => btn.setButtonText("Delete Mapping").setWarning().onClick(async () => {
        this.plugin.settings.templateRegistry.splice(index, 1);
        this.plugin.templateEngine.invalidateCache();
        await this.plugin.saveSettings();
        this.display();
      })
    );
  }
  // --- Temple ---
  renderTempleSection(container) {
    const body = this.createCollapsibleSection(container, "Temple Upkeep", "\u{1F3DB}\uFE0F");
    for (let i = 0; i < this.plugin.settings.templeTasks.length; i++) {
      const task = this.plugin.settings.templeTasks[i];
      new import_obsidian5.Setting(body).setName(`${task.emoji} ${task.name}`).setDesc(`Every ${task.intervalDays} day(s)`).addText(
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
    new import_obsidian5.Setting(body).addButton(
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
    new import_obsidian5.Setting(body).setName("Daily Notes integration").setDesc("Parse tasks from your daily notes (- [ ] Task @time ~30m)").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.calendar.enableDailyNotes).onChange(async (v) => {
        this.plugin.settings.calendar.enableDailyNotes = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(body).setName("Daily Notes folder").setDesc("Vault folder containing YYYY-MM-DD.md notes").addText(
      (t) => t.setPlaceholder("Daily Notes").setValue(this.plugin.settings.calendar.dailyNotesFolder).onChange(async (v) => {
        this.plugin.settings.calendar.dailyNotesFolder = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(body).setName("Tasks Plugin integration").setDesc("Read tasks with due dates from the Tasks plugin").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.calendar.enableTasksPlugin).onChange(async (v) => {
        this.plugin.settings.calendar.enableTasksPlugin = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(body).setName("Quick Tasks").setDesc("Olen's built-in task system").addToggle(
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
          new import_obsidian5.Setting(listEl).setName(`${qt.done ? "\u2713" : "\u25CB"} ${qt.title}`).setDesc(
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
      new import_obsidian5.Setting(body).addButton(
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
      new import_obsidian5.Setting(body).setName(field.label).addColorPicker(
        (cp) => cp.setValue(
          this.plugin.settings.themeOverrides?.[field.key] ?? field.defaultVal
        ).onChange(async (v) => {
          this.plugin.settings.themeOverrides[field.key] = v;
          await this.plugin.saveSettings();
        })
      );
    }
    new import_obsidian5.Setting(body).addButton(
      (btn) => btn.setButtonText("Reset to Elysian Dark").onClick(async () => {
        this.plugin.settings.themeOverrides = {};
        await this.plugin.saveSettings();
        this.display();
        new import_obsidian5.Notice("Theme reset to Elysian Dark defaults");
      })
    );
  }
  // --- Advanced ---
  renderAdvancedSection(container) {
    const body = this.createCollapsibleSection(container, "Advanced", "\u2699\uFE0F");
    new import_obsidian5.Setting(body).setName("Simulated date").setDesc("Override today's date for testing (YYYY-MM-DD)").addText(
      (t) => t.setPlaceholder("YYYY-MM-DD").setValue(this.plugin.settings.simulatedDate ?? "").onChange(async (v) => {
        this.plugin.settings.simulatedDate = v.trim() || null;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(body).setName("System state").addDropdown(
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
    new import_obsidian5.Setting(body).setName("Quote folder").setDesc("Vault folder containing quote files").addText(
      (t) => t.setPlaceholder("Quotes/Stoic").setValue(this.plugin.settings.quoteFolderPath).onChange(async (v) => {
        this.plugin.settings.quoteFolderPath = v;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian5.Setting(body).setName("Re-run migration").setDesc("Re-import data from the Mythological Habit Tracker plugin").addButton(
      (btn) => btn.setButtonText("Migrate").setWarning().onClick(async () => {
        this.plugin.settings.migrated = false;
        await this.plugin.saveSettings();
        await this.plugin.onload();
        this.display();
        new import_obsidian5.Notice("Migration complete");
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
    new import_obsidian5.Setting(body).addButton(
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
          new import_obsidian5.Notice("devConfig saved and applied");
        } catch (err) {
          new import_obsidian5.Notice("Invalid JSON \u2014 please check syntax");
        }
      })
    ).addButton(
      (btn) => btn.setButtonText("Reset to defaults").onClick(async () => {
        this.plugin.settings.devConfig = { ...DEFAULT_DEV_CONFIG };
        await this.plugin.saveSettings();
        textarea.value = JSON.stringify(this.plugin.settings.devConfig, null, 2);
        new import_obsidian5.Notice("devConfig reset to defaults");
      })
    );
    new import_obsidian5.Setting(body).setName("Export all settings").addButton(
      (btn) => btn.setButtonText("Copy to clipboard").onClick(async () => {
        const json = JSON.stringify(this.plugin.settings, null, 2);
        try {
          await navigator.clipboard.writeText(json);
          new import_obsidian5.Notice("Settings copied to clipboard");
        } catch {
          const ta = document.createElement("textarea");
          ta.value = json;
          ta.style.cssText = "position:fixed;top:0;left:0;width:100%;height:50%;z-index:9999;font-size:11px;";
          document.body.appendChild(ta);
          ta.select();
          ta.addEventListener("blur", () => ta.remove());
          new import_obsidian5.Notice("Tap the text area and copy manually");
        }
      })
    );
    new import_obsidian5.Setting(body).setName("Import settings").addTextArea((area) => {
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
          new import_obsidian5.Notice("Settings imported successfully");
        } catch (err) {
          new import_obsidian5.Notice("Invalid JSON \u2014 please check syntax");
        }
      })
    );
  }
};

// src/templates/TemplateEngine.ts
var import_obsidian6 = require("obsidian");
var TemplateEngine = class {
  constructor(app, plugin) {
    /** Cache of loaded template source code (path → source) */
    this.templateCache = /* @__PURE__ */ new Map();
    this.app = app;
    this.plugin = plugin;
  }
  // --- Registry Lookup ---
  /**
   * Find the template registry entry for a given activity type.
   */
  findTemplate(activityType) {
    const entry = this.plugin.settings.templateRegistry.find(
      (e) => e.activityType === activityType && e.enabled
    );
    return entry ?? null;
  }
  // --- Template Loading ---
  /**
   * Load the template source from vault. Caches for the session.
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
    if (!file || !(file instanceof import_obsidian6.TFile)) {
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
        if (!f || !(f instanceof import_obsidian6.TFile))
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
        if (!f || !(f instanceof import_obsidian6.TFile))
          return null;
        const cache = app.metadataCache.getFileCache(f);
        return cache?.frontmatter ?? null;
      },
      // --- Utilities ---
      notice(message, timeout) {
        new import_obsidian6.Notice(message, timeout);
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
   * Main render method. Loads a template and renders it into a container
   * bound to the given note's frontmatter.
   */
  async render(templatePath, file, container) {
    const source = await this.loadTemplateSource(templatePath);
    if (!source) {
      this.renderError(
        container,
        `Template not found: ${templatePath}`,
        "Create the template file in your vault, or update the path in Olen Settings \u2192 Template Registry."
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
      console.error(`Olen TemplateEngine: Error executing template ${templatePath}:`, err);
      this.renderError(
        container,
        `Template error: ${err.message}`,
        `In template: ${templatePath}`
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
var OlenPlugin = class extends import_obsidian7.Plugin {
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
    if (!this.settings.templateRegistry) {
      this.settings.templateRegistry = DEFAULT_TEMPLATE_REGISTRY;
    }
    this.templateEngine = new TemplateEngine(this.app, this);
    if (!this.settings.migrated) {
      await this.migrateFromTrackHabitRank();
    }
    this.registerView(
      VIEW_TYPE_OLEN,
      (leaf) => new DashboardView(leaf, this)
    );
    this.registerView(
      VIEW_TYPE_SESSION,
      (leaf) => new SessionView(leaf, this)
    );
    this.registerView(
      VIEW_TYPE_EMBEDDED,
      (leaf) => new EmbeddedMdView(leaf, this)
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
    const refresh = (0, import_obsidian7.debounce)(() => {
      this.refreshDashboard();
    }, 300);
    this.registerEvent(
      this.app.metadataCache.on("changed", () => refresh())
    );
    this.registerEvent(
      this.app.vault.on("create", async (file) => {
        if (file instanceof import_obsidian7.TFile && file.extension === "md") {
          let attempts = 0;
          while (attempts < 15) {
            const cache = this.app.metadataCache.getFileCache(file);
            if (cache?.frontmatter) {
              refresh();
              return;
            }
            await sleep(100);
            attempts++;
          }
          refresh();
        }
      })
    );
    this.registerEvent(
      this.app.vault.on("rename", (file) => {
        if (file instanceof import_obsidian7.TFile && file.extension === "md") {
          refresh();
        }
      })
    );
    this.addSettingTab(new OlenSettingTab(this.app, this));
    this.registerTemplatePostProcessor();
    this.registerEvent(
      this.app.vault.on("modify", (file) => {
        if (file instanceof import_obsidian7.TFile && file.extension === "js") {
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
  async activateSessionView() {
    const { workspace } = this.app;
    workspace.getLeavesOfType(VIEW_TYPE_SESSION).forEach((leaf) => leaf.detach());
    const dashLeaves = workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    const targetLeaf = dashLeaves[0] ?? workspace.getLeaf("tab");
    if (!targetLeaf)
      return;
    await targetLeaf.setViewState({ type: VIEW_TYPE_SESSION, active: true });
    await workspace.revealLeaf(targetLeaf);
  }
  activateDashboardView() {
    this.activateDashboard();
  }
  async activateEmbeddedView(state) {
    const { workspace } = this.app;
    workspace.getLeavesOfType(VIEW_TYPE_EMBEDDED).forEach((leaf) => leaf.detach());
    const dashLeaves = workspace.getLeavesOfType(VIEW_TYPE_OLEN);
    const targetLeaf = dashLeaves[0] ?? workspace.getLeaf("tab");
    if (!targetLeaf)
      return;
    await targetLeaf.setViewState({ type: VIEW_TYPE_EMBEDDED, active: true });
    const view = targetLeaf.view;
    if (view && typeof view.setEmbeddedState === "function") {
      view.setEmbeddedState(state);
      await view.render();
    }
    await workspace.revealLeaf(targetLeaf);
  }
  // --- Template Registry: Post-Processor ---
  registerTemplatePostProcessor() {
    const renderedFiles = /* @__PURE__ */ new WeakSet();
    this.registerMarkdownPostProcessor(async (el, ctx) => {
      const file = this.app.vault.getAbstractFileByPath(ctx.sourcePath);
      if (!file || !(file instanceof import_obsidian7.TFile))
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
      await this.templateEngine.render(entry.templatePath, file, container);
    });
    this.registerEvent(
      this.app.workspace.on("active-leaf-change", async (leaf) => {
        if (!leaf)
          return;
        const view = leaf.view;
        if (!(view instanceof import_obsidian7.MarkdownView))
          return;
        const file = view.file;
        if (!file)
          return;
        await sleep(100);
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
          await this.templateEngine.render(entry.templatePath, file, container);
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
        new import_obsidian7.Notice("Please enter a task name");
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
      new import_obsidian7.Notice(`\u26A1 Quick task added: ${title}`);
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
      new import_obsidian7.Notice("Olen: Successfully migrated data from Mythological Habit Tracker");
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
          hasSession: false,
          priority: 5,
          neglectThreshold: 3,
          preferredTime: "anytime",
          estimatedDuration: 30,
          dashboardSource: "builtin",
          workspaceSource: "builtin"
        });
      }
    }
    return result;
  }
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL3ZpZXdzL1Nlc3Npb25WaWV3LnRzIiwgInNyYy92aWV3cy9FbWJlZGRlZE1kVmlldy50cyIsICJzcmMvc2V0dGluZ3MvT2xlblNldHRpbmdzLnRzIiwgInNyYy90ZW1wbGF0ZXMvVGVtcGxhdGVFbmdpbmUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgUGx1Z2luIEVudHJ5IFBvaW50XG4vLyBSZWdpc3RlcnMgdmlld3MsIGNvbW1hbmRzLCByaWJib24gaWNvbiwgc2V0dGluZ3MgbWlncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgUGx1Z2luLCBkZWJvdW5jZSwgVEZpbGUsIE5vdGljZSwgTWFya2Rvd25WaWV3IH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgVHJhY2tIYWJpdFJhbmtEYXRhLCBBY3Rpdml0eUNvbmZpZyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiwgVklFV19UWVBFX1NFU1NJT04sIERFRkFVTFRfT0xFTl9TRVRUSU5HUywgREVGQVVMVF9BQ1RJVklUSUVTLCBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLCBERUZBVUxUX1RFTVBMQVRFX1JFR0lTVFJZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRWaWV3IH0gZnJvbSBcIi4vdmlld3MvRGFzaGJvYXJkVmlld1wiO1xuaW1wb3J0IHsgU2Vzc2lvblZpZXcgfSBmcm9tIFwiLi92aWV3cy9TZXNzaW9uVmlld1wiO1xuaW1wb3J0IHsgRW1iZWRkZWRNZFZpZXcsIFZJRVdfVFlQRV9FTUJFRERFRCB9IGZyb20gXCIuL3ZpZXdzL0VtYmVkZGVkTWRWaWV3XCI7XG5pbXBvcnQgdHlwZSB7IEVtYmVkZGVkVmlld1N0YXRlIH0gZnJvbSBcIi4vdmlld3MvRW1iZWRkZWRNZFZpZXdcIjtcbmltcG9ydCB7IE9sZW5TZXR0aW5nVGFiIH0gZnJvbSBcIi4vc2V0dGluZ3MvT2xlblNldHRpbmdzXCI7XG5pbXBvcnQgeyBUZW1wbGF0ZUVuZ2luZSB9IGZyb20gXCIuL3RlbXBsYXRlcy9UZW1wbGF0ZUVuZ2luZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbGVuUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3MhOiBPbGVuU2V0dGluZ3M7XG4gIHRlbXBsYXRlRW5naW5lITogVGVtcGxhdGVFbmdpbmU7XG5cbiAgYXN5bmMgb25sb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIExvYWQgc2V0dGluZ3Mgd2l0aCBkZWZhdWx0c1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MsXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICApO1xuXG4gICAgLy8gRW5zdXJlIGRlZXAgZGVmYXVsdHMgZm9yIG5lc3RlZCBvYmplY3RzXG4gICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuZGV2Q29uZmlnLFxuICAgICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWdcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5kZXZDb25maWcubGFiZWxzLFxuICAgICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcubGFiZWxzXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmNhdGVnb3J5Q29sb3JzLFxuICAgICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeVhQID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmNhdGVnb3J5WFAsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFBcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuICAgICAgdGhpcy5zZXR0aW5ncy5jYWxlbmRhclxuICAgICk7XG4gICAgaWYgKCF0aGlzLnNldHRpbmdzLnRlbXBsYXRlUmVnaXN0cnkpIHtcbiAgICAgIHRoaXMuc2V0dGluZ3MudGVtcGxhdGVSZWdpc3RyeSA9IERFRkFVTFRfVEVNUExBVEVfUkVHSVNUUlk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBUZW1wbGF0ZSBFbmdpbmVcbiAgICB0aGlzLnRlbXBsYXRlRW5naW5lID0gbmV3IFRlbXBsYXRlRW5naW5lKHRoaXMuYXBwLCB0aGlzKTtcblxuICAgIC8vIE1pZ3JhdGUgZnJvbSBUcmFja0hhYml0UmFuayBvbiBmaXJzdCBydW5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MubWlncmF0ZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMubWlncmF0ZUZyb21UcmFja0hhYml0UmFuaygpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIG1haW4gZGFzaGJvYXJkIHZpZXdcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhcbiAgICAgIFZJRVdfVFlQRV9PTEVOLFxuICAgICAgKGxlYWYpID0+IG5ldyBEYXNoYm9hcmRWaWV3KGxlYWYsIHRoaXMpXG4gICAgKTtcblxuICAgIC8vIFJlZ2lzdGVyIHNlc3Npb24gdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX1NFU1NJT04sXG4gICAgICAobGVhZikgPT4gbmV3IFNlc3Npb25WaWV3KGxlYWYsIHRoaXMpXG4gICAgKTtcblxuICAgIC8vIFJlZ2lzdGVyIGVtYmVkZGVkIG1hcmtkb3duIHZpZXdcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhcbiAgICAgIFZJRVdfVFlQRV9FTUJFRERFRCxcbiAgICAgIChsZWFmKSA9PiBuZXcgRW1iZWRkZWRNZFZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmliYm9uIGljb25cbiAgICB0aGlzLmFkZFJpYmJvbkljb24oXCJjb21wYXNzXCIsIFwiT3BlbiBPbGVuXCIsICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgICB9KTtcblxuICAgIC8vIENvbW1hbmRzXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcIm9wZW4tb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiT3BlbiBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJyZWZyZXNoLW9sZW4tZGFzaGJvYXJkXCIsXG4gICAgICBuYW1lOiBcIlJlZnJlc2ggT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKSxcbiAgICB9KTtcblxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJhZGQtcXVpY2stdGFza1wiLFxuICAgICAgbmFtZTogXCJBZGQgUXVpY2sgVGFza1wiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMuc2hvd1F1aWNrVGFza0RpYWxvZygpLFxuICAgIH0pO1xuXG4gICAgLy8gQ2FsZW5kYXIgcGx1Z2luIGludGVncmF0aW9uIFx1MjAxNCBpbmplY3QgT2xlbiBtZXRhZGF0YSBpbnRvIENhbGVuZGFyIHBsdWdpblxuICAgIHRoaXMucmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpO1xuXG4gICAgLy8gRGVib3VuY2VkIGZpbGUgd2F0Y2hlciBmb3IgbWV0YWRhdGEgY2hhbmdlc1xuICAgIGNvbnN0IHJlZnJlc2ggPSBkZWJvdW5jZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICB9LCAzMDApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5vbihcImNoYW5nZWRcIiwgKCkgPT4gcmVmcmVzaCgpKVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcImNyZWF0ZVwiLCBhc3luYyAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICAvLyBXYWl0IGZvciBtZXRhZGF0YSB0byBiZSBpbmRleGVkXG4gICAgICAgICAgbGV0IGF0dGVtcHRzID0gMDtcbiAgICAgICAgICB3aGlsZSAoYXR0ZW1wdHMgPCAxNSkge1xuICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXIpIHtcbiAgICAgICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcInJlbmFtZVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcIm1kXCIpIHtcbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIC8vIFNldHRpbmdzIHRhYlxuICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2xlblNldHRpbmdUYWIodGhpcy5hcHAsIHRoaXMpKTtcblxuICAgIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogRnJvbnRtYXR0ZXItZHJpdmVuIHJlbmRlcmluZyAtLS1cbiAgICB0aGlzLnJlZ2lzdGVyVGVtcGxhdGVQb3N0UHJvY2Vzc29yKCk7XG5cbiAgICAvLyBJbnZhbGlkYXRlIHRlbXBsYXRlIGNhY2hlIHdoZW4gdGVtcGxhdGUgLmpzIGZpbGVzIGFyZSBtb2RpZmllZFxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwibW9kaWZ5XCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwianNcIikge1xuICAgICAgICAgIHRoaXMudGVtcGxhdGVFbmdpbmUuaW52YWxpZGF0ZUNhY2hlKGZpbGUucGF0aCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG9udW5sb2FkKCk6IHZvaWQge1xuICAgIC8vIENsZWFudXAgaGFuZGxlZCBieSBEYXNoYm9hcmRWaWV3Lm9uQ2xvc2UoKVxuICB9XG5cbiAgLy8gLS0tIFZpZXcgTWFuYWdlbWVudCAtLS1cblxuICBhc3luYyBhY3RpdmF0ZURhc2hib2FyZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG4gICAgbGV0IGxlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKVswXTtcblxuICAgIGlmICghbGVhZikge1xuICAgICAgY29uc3QgbmV3TGVhZiA9IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgICAgaWYgKCFuZXdMZWFmKSByZXR1cm47XG4gICAgICBhd2FpdCBuZXdMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9PTEVOLCBhY3RpdmU6IHRydWUgfSk7XG4gICAgICBsZWFmID0gbmV3TGVhZjtcbiAgICB9XG5cbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZihsZWFmKTtcbiAgfVxuXG4gIHJlZnJlc2hEYXNoYm9hcmQoKTogdm9pZCB7XG4gICAgY29uc3QgbGVhdmVzID0gdGhpcy5hcHAud29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgZm9yIChjb25zdCBsZWFmIG9mIGxlYXZlcykge1xuICAgICAgY29uc3QgdmlldyA9IGxlYWYudmlldyBhcyB1bmtub3duIGFzIERhc2hib2FyZFZpZXc7XG4gICAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5yZW5kZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2aWV3LnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlU2Vzc2lvblZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuXG4gICAgLy8gQ2xvc2UgZXhpc3Rpbmcgc2Vzc2lvbiB2aWV3c1xuICAgIHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX1NFU1NJT04pLmZvckVhY2goKGxlYWYpID0+IGxlYWYuZGV0YWNoKCkpO1xuXG4gICAgLy8gT3BlbiBzZXNzaW9uIGluIHRoZSBzYW1lIHRhYiBhcyB0aGUgZGFzaGJvYXJkIGlmIHBvc3NpYmxlXG4gICAgY29uc3QgZGFzaExlYXZlcyA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX09MRU4pO1xuICAgIGNvbnN0IHRhcmdldExlYWYgPSBkYXNoTGVhdmVzWzBdID8/IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgIGlmICghdGFyZ2V0TGVhZikgcmV0dXJuO1xuXG4gICAgYXdhaXQgdGFyZ2V0TGVhZi5zZXRWaWV3U3RhdGUoeyB0eXBlOiBWSUVXX1RZUEVfU0VTU0lPTiwgYWN0aXZlOiB0cnVlIH0pO1xuICAgIGF3YWl0IHdvcmtzcGFjZS5yZXZlYWxMZWFmKHRhcmdldExlYWYpO1xuICB9XG5cbiAgYWN0aXZhdGVEYXNoYm9hcmRWaWV3KCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVEYXNoYm9hcmQoKTtcbiAgfVxuXG4gIGFzeW5jIGFjdGl2YXRlRW1iZWRkZWRWaWV3KHN0YXRlOiBFbWJlZGRlZFZpZXdTdGF0ZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB0aGlzLmFwcDtcblxuICAgIC8vIENsb3NlIGV4aXN0aW5nIGVtYmVkZGVkIHZpZXdzXG4gICAgd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfRU1CRURERUQpLmZvckVhY2goKGxlYWYpID0+IGxlYWYuZGV0YWNoKCkpO1xuXG4gICAgLy8gT3BlbiBpbiB0aGUgZGFzaGJvYXJkJ3MgdGFiXG4gICAgY29uc3QgZGFzaExlYXZlcyA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX09MRU4pO1xuICAgIGNvbnN0IHRhcmdldExlYWYgPSBkYXNoTGVhdmVzWzBdID8/IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgIGlmICghdGFyZ2V0TGVhZikgcmV0dXJuO1xuXG4gICAgYXdhaXQgdGFyZ2V0TGVhZi5zZXRWaWV3U3RhdGUoeyB0eXBlOiBWSUVXX1RZUEVfRU1CRURERUQsIGFjdGl2ZTogdHJ1ZSB9KTtcblxuICAgIC8vIFNldCB0aGUgc3RhdGUgb24gdGhlIHZpZXcgaW5zdGFuY2VcbiAgICBjb25zdCB2aWV3ID0gdGFyZ2V0TGVhZi52aWV3IGFzIHVua25vd24gYXMgRW1iZWRkZWRNZFZpZXc7XG4gICAgaWYgKHZpZXcgJiYgdHlwZW9mIHZpZXcuc2V0RW1iZWRkZWRTdGF0ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB2aWV3LnNldEVtYmVkZGVkU3RhdGUoc3RhdGUpO1xuICAgICAgYXdhaXQgdmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBhd2FpdCB3b3Jrc3BhY2UucmV2ZWFsTGVhZih0YXJnZXRMZWFmKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeTogUG9zdC1Qcm9jZXNzb3IgLS0tXG5cbiAgcHJpdmF0ZSByZWdpc3RlclRlbXBsYXRlUG9zdFByb2Nlc3NvcigpOiB2b2lkIHtcbiAgICAvLyBUcmFjayB3aGljaCBmaWxlcyB3ZSd2ZSBhbHJlYWR5IHJlbmRlcmVkIHRlbXBsYXRlcyBmb3IgaW4gdGhlIGN1cnJlbnRcbiAgICAvLyB2aWV3IGN5Y2xlLCB0byBhdm9pZCBkdXBsaWNhdGUgcmVuZGVyaW5nIGFjcm9zcyBtdWx0aXBsZSBzZWN0aW9ucy5cbiAgICBjb25zdCByZW5kZXJlZEZpbGVzID0gbmV3IFdlYWtTZXQ8SFRNTEVsZW1lbnQ+KCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyTWFya2Rvd25Qb3N0UHJvY2Vzc29yKGFzeW5jIChlbCwgY3R4KSA9PiB7XG4gICAgICAvLyBGaW5kIHRoZSBmaWxlIGJlaW5nIHJlbmRlcmVkXG4gICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGN0eC5zb3VyY2VQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgLy8gQ2hlY2sgZnJvbnRtYXR0ZXIgZm9yIGFuIFwiYWN0aXZpdHlcIiBmaWVsZFxuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGNvbnN0IGFjdGl2aXR5VHlwZSA9IGNhY2hlPy5mcm9udG1hdHRlcj8uYWN0aXZpdHkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgaWYgKCFhY3Rpdml0eVR5cGUpIHJldHVybjtcblxuICAgICAgLy8gTG9vayB1cCB0ZW1wbGF0ZSBpbiB0aGUgcmVnaXN0cnlcbiAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy50ZW1wbGF0ZUVuZ2luZS5maW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlKTtcbiAgICAgIGlmICghZW50cnkpIHJldHVybjtcblxuICAgICAgLy8gQXZvaWQgZHVwbGljYXRlIHJlbmRlcmluZzogY2hlY2sgdGhlIHBhcmVudCBwcmV2aWV3IGNvbnRhaW5lclxuICAgICAgY29uc3QgcHJldmlld1NpemVyID0gZWwuY2xvc2VzdChcIi5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpID8/IGVsLnBhcmVudEVsZW1lbnQ7XG4gICAgICBpZiAocHJldmlld1NpemVyICYmIHJlbmRlcmVkRmlsZXMuaGFzKHByZXZpZXdTaXplciBhcyBIVE1MRWxlbWVudCkpIHJldHVybjtcbiAgICAgIGlmIChwcmV2aWV3U2l6ZXIpIHJlbmRlcmVkRmlsZXMuYWRkKHByZXZpZXdTaXplciBhcyBIVE1MRWxlbWVudCk7XG5cbiAgICAgIC8vIENsZWFyIGRlZmF1bHQgcmVuZGVyZWQgY29udGVudCBhbmQgaW5qZWN0IHRlbXBsYXRlXG4gICAgICBlbC5lbXB0eSgpO1xuICAgICAgZWwuYWRkQ2xhc3MoXCJvbGVuLXRlbXBsYXRlLWhvc3RcIik7XG5cbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsYXRlLXJvb3RcIiB9KTtcblxuICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVQYXRoLCBmaWxlLCBjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgLy8gQWxzbyBoYW5kbGUgZmlsZS1vcGVuIGZvciBub3RlcyB3aXRoIG9ubHkgZnJvbnRtYXR0ZXIgKG5vIGJvZHkgc2VjdGlvbnMpXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAud29ya3NwYWNlLm9uKFwiYWN0aXZlLWxlYWYtY2hhbmdlXCIsIGFzeW5jIChsZWFmKSA9PiB7XG4gICAgICAgIGlmICghbGVhZikgcmV0dXJuO1xuICAgICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3O1xuICAgICAgICBpZiAoISh2aWV3IGluc3RhbmNlb2YgTWFya2Rvd25WaWV3KSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGZpbGUgPSB2aWV3LmZpbGU7XG4gICAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFNtYWxsIGRlbGF5IHRvIGxldCBtZXRhZGF0YSBjYWNoZSBwb3B1bGF0ZVxuICAgICAgICBhd2FpdCBzbGVlcCgxMDApO1xuXG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5VHlwZSA9IGNhY2hlPy5mcm9udG1hdHRlcj8uYWN0aXZpdHkgYXMgc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIWFjdGl2aXR5VHlwZSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdGhpcy50ZW1wbGF0ZUVuZ2luZS5maW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlKTtcbiAgICAgICAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIENoZWNrIGlmIGEgdGVtcGxhdGUgaGFzIGFscmVhZHkgYmVlbiByZW5kZXJlZCBieSB0aGUgcG9zdC1wcm9jZXNzb3JcbiAgICAgICAgY29uc3QgY29udGVudEVsID0gdmlldy5jb250YWluZXJFbC5xdWVyeVNlbGVjdG9yKFwiLm1hcmtkb3duLXJlYWRpbmctdmlldyAubWFya2Rvd24tcHJldmlldy1zaXplclwiKTtcbiAgICAgICAgaWYgKGNvbnRlbnRFbD8ucXVlcnlTZWxlY3RvcihcIi5vbGVuLXRlbXBsYXRlLXJvb3RcIikpIHJldHVybjtcblxuICAgICAgICAvLyBJZiBpbiByZWFkaW5nIG1vZGUgYnV0IG5vIHRlbXBsYXRlIHdhcyBpbmplY3RlZCAoZW1wdHkgYm9keSBub3RlKSxcbiAgICAgICAgLy8gaW5qZWN0IGludG8gdGhlIHByZXZpZXcgY29udGVudFxuICAgICAgICBpZiAoY29udGVudEVsKSB7XG4gICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJvbGVuLXRlbXBsYXRlLXJvb3RcIjtcbiAgICAgICAgICBjb250ZW50RWwuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICAgIGF3YWl0IHRoaXMudGVtcGxhdGVFbmdpbmUucmVuZGVyKGVudHJ5LnRlbXBsYXRlUGF0aCwgZmlsZSwgY29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIFBsdWdpbiBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsZW5kYXJQbHVnaW5Tb3VyY2UoKTogdm9pZCB7XG4gICAgLy8gTGlzdGVuIGZvciB0aGUgQ2FsZW5kYXIgcGx1Z2luJ3MgXCJjYWxlbmRhcjpvcGVuXCIgZXZlbnRcbiAgICAvLyBhbmQgaW5qZWN0IE9sZW4ncyBhY3Rpdml0eSBjb21wbGV0aW9uIGRhdGEgYXMgY29sb3JlZCBkb3RzXG4gICAgKHRoaXMuYXBwLndvcmtzcGFjZSBhcyBhbnkpLm9uKFwiY2FsZW5kYXI6b3BlblwiLCAoc291cmNlczogYW55W10pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkgcmV0dXJuO1xuXG4gICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICBnZXREYWlseU1ldGFkYXRhOiAoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUuZm9ybWF0Py4oXCJZWVlZLU1NLUREXCIpID8/IFwiXCI7XG4gICAgICAgICAgaWYgKCFkYXRlU3RyKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBDb3VudCBjb21wbGV0aW9ucyBmb3IgdGhpcyBkYXRlXG4gICAgICAgICAgbGV0IGNvbXBsZXRpb25zID0gMDtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXMuZmluZChcbiAgICAgICAgICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXI/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucysrO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGFjdGl2aXR5LmNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wbGV0aW9ucyA9PT0gMCkgcmV0dXJuIHt9O1xuXG4gICAgICAgICAgLy8gUmV0dXJuIGRvdHMgY29sb3JlZCBieSBkb21pbmFudCBjYXRlZ29yeVxuICAgICAgICAgIGNvbnN0IGRvdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBkb3RzLnB1c2goe1xuICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQgYXMga2V5b2YgdHlwZW9mIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNdID8/IFwiIzkyOGQ4NVwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGBvbGVuLWNhbC1kb3QtJHtjYXR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb3RzLFxuICAgICAgICAgICAgY2xhc3NlczogY29tcGxldGlvbnMgPj0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBcIm9sZW4tY2FsLWNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0V2Vla2x5TWV0YWRhdGE6ICgpID0+ICh7fSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBRdWljayBUYXNrIERpYWxvZyAtLS1cblxuICBwcml2YXRlIHNob3dRdWlja1Rhc2tEaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+QWRkIFF1aWNrIFRhc2s8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9mb2N1cyAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXJvd1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uIChtaW4pXCIgbWluPVwiNVwiIG1heD1cIjQ4MFwiIHZhbHVlPVwiMzBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYmFja2Ryb3BcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stY2FuY2VsXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFkZEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWFkZFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay10aW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZHVyYXRpb25JbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWR1cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBlbnRlciBhIHRhc2sgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3cgPSB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgcXQtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkYXRlOiB0b2RheSxcbiAgICAgICAgdGltZTogdGltZUlucHV0LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpIHx8IDMwLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICBuZXcgTm90aWNlKGBcXHUyNkExIFF1aWNrIHRhc2sgYWRkZWQ6ICR7dGl0bGV9YCk7XG4gICAgICBjbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRm9jdXMgdGhlIGlucHV0XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aXRsZUlucHV0LmZvY3VzKCksIDUwKTtcbiAgfVxuXG4gIC8vIC0tLSBTZXR0aW5ncyBQZXJzaXN0ZW5jZSAtLS1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBNaWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhUGF0aCA9IFwiLm9ic2lkaWFuL3BsdWdpbnMvbXl0aG9sb2dpY2FsLWhhYml0LXRyYWNrZXIvZGF0YS5qc29uXCI7XG4gICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyhkYXRhUGF0aCk7XG5cbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChkYXRhUGF0aCk7XG4gICAgICBjb25zdCBkYXRhOiBUcmFja0hhYml0UmFua0RhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIC8vIE1pZ3JhdGUgYm9zcyBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllciA9IGRhdGEuY3VycmVudFRpZXIgPz8gMTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc01heEhQID0gZGF0YS5ib3NzTWF4SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBkYXRhLmJvc3NDdXJyZW50SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID0gZGF0YS5jb25zZWN1dGl2ZVBlcmZlY3RXZWVrcyA/PyAwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzID0gZGF0YS5pblRhcnRhcnVzID8/IGZhbHNlO1xuICAgICAgdGhpcy5zZXR0aW5ncy50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA9IGRhdGEudGFydGFydXNQZW5hbmNlVGFza3MgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzU3RhcnREYXRlID0gZGF0YS50YXJ0YXJ1c1N0YXJ0RGF0ZSA/PyBudWxsO1xuICAgICAgdGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID0gZGF0YS5mYWlsZWRUaHJlc2hvbGREYXlzID8/IDA7XG5cbiAgICAgIC8vIE1pZ3JhdGUgdGVtcGxlIHRhc2tzXG4gICAgICBpZiAoZGF0YS50ZW1wbGVUYXNrcyAmJiBkYXRhLnRlbXBsZVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50ZW1wbGVUYXNrcyA9IGRhdGEudGVtcGxlVGFza3M7XG4gICAgICB9XG5cbiAgICAgIC8vIE1pZ3JhdGUgcmV3YXJkc1xuICAgICAgdGhpcy5zZXR0aW5ncy5wZW5kaW5nUmV3YXJkcyA9IGRhdGEucGVuZGluZ1Jld2FyZHMgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLmNsYWltZWRSZXdhcmRzID0gKGRhdGEuY2xhaW1lZFJld2FyZHMgPz8gW10pIGFzIGFueTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYmFua2VkUmV3YXJkcyA9IGRhdGEuYmFua2VkUmV3YXJkcyA/PyBbXTtcblxuICAgICAgLy8gTWlncmF0ZSBzeXN0ZW0gc3RhdGVcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSAoZGF0YS5zeXN0ZW1TdGF0ZSBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIikgPz8gXCJhY3RpdmVcIjtcbiAgICAgIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBkYXRhLnBhdXNlU3RhcnRUaW1lID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSA9IGRhdGEudG90YWxQYXVzZWRUaW1lID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSBkYXRhLnNpbXVsYXRlZERhdGUgPz8gbnVsbDtcblxuICAgICAgLy8gTWlncmF0ZSBoZXJvIGJhY2tncm91bmRcbiAgICAgIGlmIChkYXRhLmRhc2hib2FyZEJnSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IGRhdGEuZGFzaGJvYXJkQmdJbWFnZTtcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSBhY3Rpdml0aWVzIGZyb20gZW5hYmxlZEFjdGl2aXRpZXMgKyBjdXN0b21IYWJpdHNcbiAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcyA9IHRoaXMubWlncmF0ZUFjdGl2aXRpZXMoZGF0YSk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgbmV3IE5vdGljZShcIk9sZW46IFN1Y2Nlc3NmdWxseSBtaWdyYXRlZCBkYXRhIGZyb20gTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2xlbiBtaWdyYXRpb24gZXJyb3I6XCIsIGVycik7XG4gICAgICB0aGlzLnNldHRpbmdzLm1pZ3JhdGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtaWdyYXRlQWN0aXZpdGllcyhkYXRhOiBUcmFja0hhYml0UmFua0RhdGEpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFjdGl2aXR5Q29uZmlnW10gPSBbLi4uREVGQVVMVF9BQ1RJVklUSUVTXTtcblxuICAgIC8vIEFwcGx5IGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgICBpZiAoZGF0YS5lbmFibGVkQWN0aXZpdGllcykge1xuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN1bHQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aXZpdHkucHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSBpbiBkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICAgICAgYWN0aXZpdHkuZW5hYmxlZCA9IGRhdGEuZW5hYmxlZEFjdGl2aXRpZXNba2V5XSA/PyB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgb3ZlcnJpZGVzXG4gICAgaWYgKGRhdGEuYWN0aXZpdHlPdmVycmlkZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3ZlcnJpZGUgb2YgZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHJlc3VsdC5maW5kKChhKSA9PiBhLmlkID09PSBvdmVycmlkZS5pZCk7XG4gICAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICAgIGlmIChvdmVycmlkZS53ZWVrbHlUYXJnZXQgIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkud2Vla2x5VGFyZ2V0ID0gb3ZlcnJpZGUud2Vla2x5VGFyZ2V0O1xuICAgICAgICAgIGlmIChvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uICE9PSB1bmRlZmluZWQpIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb24gPSBvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGN1c3RvbSBoYWJpdHNcbiAgICBpZiAoZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgIGZvciAoY29uc3QgaGFiaXQgb2YgZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlc1xuICAgICAgICBpZiAocmVzdWx0LnNvbWUoKGEpID0+IGEuaWQgPT09IGhhYml0LmlkKSkgY29udGludWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGlkOiBoYWJpdC5pZCxcbiAgICAgICAgICBuYW1lOiBoYWJpdC5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBoYWJpdC5lbW9qaSA/PyBcIlxcdTJCNTBcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIiwgLy8gRGVmYXVsdCBjdXN0b20gaGFiaXRzIHRvIHNwaXJpdFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZm9sZGVyOiBoYWJpdC5mb2xkZXIsXG4gICAgICAgICAgcHJvcGVydHk6IGhhYml0LnByb3BlcnR5LFxuICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IGhhYml0LmRhbWFnZVBlckNvbXBsZXRpb24gPz8gMSxcbiAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IGhhYml0LndlZWtseVRhcmdldCA/PyAzLFxuICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgIGhhc1Nlc3Npb246IGZhbHNlLFxuICAgICAgICAgIHByaW9yaXR5OiA1LFxuICAgICAgICAgIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgICAgICAgcHJlZmVycmVkVGltZTogXCJhbnl0aW1lXCIsXG4gICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgICAgICAgIGRhc2hib2FyZFNvdXJjZTogXCJidWlsdGluXCIsXG4gICAgICAgICAgd29ya3NwYWNlU291cmNlOiBcImJ1aWx0aW5cIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vLyBVdGlsaXR5XG5mdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ29uc3RhbnRzICYgRGVmYXVsdHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7XG4gIEJvc3NEZWZpbml0aW9uLFxuICBBY3Rpdml0eUNvbmZpZyxcbiAgT2xlblNldHRpbmdzLFxuICBEZXZDb25maWcsXG4gIEVseXNpYW5UaGVtZSxcbiAgU2Vzc2lvbkNvbXBsZXRpb25TdGF0ZSxcbiAgQ2FsZW5kYXJTZXR0aW5ncyxcbiAgVGVtcGxhdGVSZWdpc3RyeUVudHJ5LFxufSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vLyAtLS0gVmlldyBUeXBlIC0tLVxuXG5leHBvcnQgY29uc3QgVklFV19UWVBFX09MRU4gPSBcIm9sZW4tZGFzaGJvYXJkLXZpZXdcIjtcbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfU0VTU0lPTiA9IFwib2xlbi1zZXNzaW9uLXZpZXdcIjtcblxuLy8gLS0tIEJvc3MgRGVmaW5pdGlvbnMgKDEzIHRpZXJzKSAtLS1cblxuZXhwb3J0IGNvbnN0IEJPU1NFUzogQm9zc0RlZmluaXRpb25bXSA9IFtcbiAgeyB0aWVyOiAxLCBuYW1lOiBcIlNoYWRvdyBvZiBBcGF0aHlcIiwgcmFuazogXCJEb29tc2Nyb2xsZXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHdlaWdodCBvZiBpbmVydGlhIHRoYXQga2VlcHMgeW91IHNjcm9sbGluZyBpbnN0ZWFkIG9mIHN0YXJ0aW5nXCIsIGxvcmU6IFwiQm9ybiBmcm9tIGZvcmdvdHRlbiBwcm9taXNlcyBhbmQgdW5vcGVuZWQgZ3ltIGJhZ3MsIHRoZSBTaGFkb3cgZmVlZHMgb24gcG90ZW50aWFsIHVucmVhbGl6ZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuMVwiIH0sXG4gIHsgdGllcjogMiwgbmFtZTogXCJTaXJlbidzIENhbGxcIiwgcmFuazogXCJBcm1jaGFpciBHZW5lcmFsXCIsIGRlc2NyaXB0aW9uOiBcIkRpc3RyYWN0aW9uJ3Mgc3dlZXQgc29uZyB0aGF0IHB1bGxzIGZvY3VzIGZyb20gY29tbWl0dGVkIHdvcmtcIiwgbG9yZTogXCJTaGUgc2luZ3Mgb2YgZWFzaWVyIHBhdGhzLCBvZiBqdXN0IG9uZSBtb3JlIHZpZGVvLCBvZiBzdGFydGluZyB0b21vcnJvdyBpbnN0ZWFkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjJcIiB9LFxuICB7IHRpZXI6IDMsIG5hbWU6IFwiSHlkcmEgb2YgSGFiaXRzXCIsIHJhbms6IFwiQXBwcmVudGljZVwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29tcGxleGl0eSBvZiBtYW5hZ2luZyBtdWx0aXBsZSByb3V0aW5lcyBzaW11bHRhbmVvdXNseVwiLCBsb3JlOiBcIkN1dCBvbmUgaGVhZCBhbmQgdHdvIGdyb3cgYmFjay4gRWFjaCBoYWJpdCBkZW1hbmRzIGl0cyBvd24gYXR0ZW50aW9uLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjNcIiB9LFxuICB7IHRpZXI6IDQsIG5hbWU6IFwiTWlub3RhdXIncyBNYXplXCIsIHJhbms6IFwiQ2l0aXplblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29uZnVzaW9uIGFuZCByb3V0aW5lIHRoYXQgdHJhcHMgZXZlbiBkZWRpY2F0ZWQgcHJhY3RpdGlvbmVyc1wiLCBsb3JlOiBcIkxvc3QgaW4gY29ycmlkb3JzIG9mIGhhYml0LCB0aGUgcGF0aCBmb3J3YXJkIGlzIG5ldmVyIGNsZWFyLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjdcIiB9LFxuICB7IHRpZXI6IDUsIG5hbWU6IFwiTWVkdXNhJ3MgR2F6ZVwiLCByYW5rOiBcIlNjaG9sYXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHBhcmFseXNpcyB0aGF0IGNvbWVzIGZyb20gb3ZlcnRoaW5raW5nIG9yIGZlYXIgb2YgZmFpbHVyZVwiLCBsb3JlOiBcIk9uZSBnbGFuY2UgYW5kIHlvdSBhcmUgZnJvemVuLCB1bmFibGUgdG8gYWN0LCB1bmFibGUgdG8gbW92ZS5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS45XCIgfSxcbiAgeyB0aWVyOiA2LCBuYW1lOiBcIk5lbWVhbiBMaW9uXCIsIHJhbms6IFwiU2FtdXJhaVwiLCBkZXNjcmlwdGlvbjogXCJTZWVtaW5nbHkgaW52dWxuZXJhYmxlIG9ic3RhY2xlcyB0aGF0IHJlcXVpcmUgcGVyc2lzdGVudCBlZmZvcnRcIiwgbG9yZTogXCJJdHMgaGlkZSBjYW5ub3QgYmUgcGllcmNlZCBieSBvcmRpbmFyeSBtZWFucy4gT25seSBkaXNjaXBsaW5lIGN1dHMgdGhyb3VnaC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4xXCIgfSxcbiAgeyB0aWVyOiA3LCBuYW1lOiBcIkNoaW1lcmFcIiwgcmFuazogXCJUZW1wbGFyXCIsIGRlc2NyaXB0aW9uOiBcIk11bHRpLWhlYWRlZCBiZWFzdCByZXF1aXJpbmcgYmFsYW5jZWQgYXR0ZW50aW9uIGFjcm9zcyBhbGwgZG9tYWluc1wiLCBsb3JlOiBcIkxpb24sIGdvYXQsIGFuZCBzZXJwZW50IFx1MjAxNCBlYWNoIGhlYWQgZGVtYW5kcyBtYXN0ZXJ5IG9mIGEgZGlmZmVyZW50IGFydC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4zXCIgfSxcbiAgeyB0aWVyOiA4LCBuYW1lOiBcIkNlcmJlcnVzXCIsIHJhbms6IFwiU3RvaWNcIiwgZGVzY3JpcHRpb246IFwiR3VhcmRpYW4gb2YgdHJhbnNmb3JtYXRpb24gdGVzdGluZyBpZiBoYWJpdHMgaGF2ZSBiZWNvbWUgaWRlbnRpdHlcIiwgbG9yZTogXCJUaHJlZSBoZWFkcywgdGhyZWUgdGVzdHMuIFBhc3QgdGhlIGdhdGUgbGllcyB0cmFuc2Zvcm1hdGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi41XCIgfSxcbiAgeyB0aWVyOiA5LCBuYW1lOiBcIlNjeWxsYSAmIENoYXJ5YmRpc1wiLCByYW5rOiBcIk9seW1waWFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBpbXBvc3NpYmxlIGNob2ljZSBiZXR3ZWVuIGNvbXBldGluZyBwcmlvcml0aWVzXCIsIGxvcmU6IFwiQmV0d2VlbiB0aGUgcm9jayBhbmQgdGhlIHdoaXJscG9vbCwgYm90aCBtdXN0IHNvbWVob3cgYmUgaG9ub3JlZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi43XCIgfSxcbiAgeyB0aWVyOiAxMCwgbmFtZTogXCJUaGUgRnVyaWVzXCIsIHJhbms6IFwiU2FnZVwiLCBkZXNjcmlwdGlvbjogXCJJbnRlcm5hbCB2b2ljZXMgb2YgZ3VpbHQgYW5kIHNoYW1lIGF0dGFja2luZyBldmVuIHRoZSBzdWNjZXNzZnVsXCIsIGxvcmU6IFwiVGhleSB3aGlzcGVyIHlvdXIgZmFpbHVyZXMsIHJlbWluZCB5b3Ugb2YgZXZlcnkgc2tpcCwgZXZlcnkgd2Vha25lc3MuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuOVwiIH0sXG4gIHsgdGllcjogMTEsIG5hbWU6IFwiVHlwaG9uXCIsIHJhbms6IFwiVGl0YW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGZvcmNlIG9mIGNoYW9zIHRocmVhdGVuaW5nIHRvIHVuZG8gYWxsIHByb2dyZXNzXCIsIGxvcmU6IFwiRmF0aGVyIG9mIGFsbCBtb25zdGVycywgaGUgc2Vla3MgdG8gcmV0dXJuIHlvdSB0byB0aGUgYmVnaW5uaW5nLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjFcIiB9LFxuICB7IHRpZXI6IDEyLCBuYW1lOiBcIktyb25vc1wiLCByYW5rOiBcIkFyY2hvblwiLCBkZXNjcmlwdGlvbjogXCJUaW1lIGl0c2VsZiBhcyBhbiBlbmVteSwgdGVzdGluZyBzdXN0YWluZWQgaW50ZW5zaXR5XCIsIGxvcmU6IFwiVGhlIFRpdGFuIHdobyBkZXZvdXJzIGhpcyBjaGlsZHJlbi4gQ2FuIHlvdSBtYWludGFpbiBhcyB3ZWVrcyBiZWNvbWUgbW9udGhzP1wiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjNcIiB9LFxuICB7IHRpZXI6IDEzLCBuYW1lOiBcIkNoYW9zIFByaW1vcmRpYWxcIiwgcmFuazogXCJNYXN0ZXIgb2YgQWxsXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB1bHRpbWF0ZSB0ZXN0IG9mIHVuc2hha2VhYmxlIGRpc2NpcGxpbmVcIiwgbG9yZTogXCJCZWZvcmUgY3JlYXRpb24sIGJlZm9yZSBvcmRlciwgb25seSBDaGFvcy4gVG8gbWFzdGVyIGl0IGlzIHRvIG1hc3RlciB5b3Vyc2VsZi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy42XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSQU5LX1RJRVJfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiM2QjcyODBcIiwgMjogXCIjRUY0NDQ0XCIsIDM6IFwiI0Y1OUUwQlwiLCA0OiBcIiMxMEI5ODFcIixcbiAgNTogXCIjM0I4MkY2XCIsIDY6IFwiIzhCNUNGNlwiLCA3OiBcIiNFQzQ4OTlcIiwgODogXCIjRjk3MzE2XCIsXG4gIDk6IFwiIzA2QjZENFwiLCAxMDogXCIjQTg1NUY3XCIsIDExOiBcIiNEQzI2MjZcIiwgMTI6IFwiIzdDM0FFRFwiLFxuICAxMzogXCIjYzlhMjI3XCIsXG59O1xuXG4vLyAtLS0gQ2hhcHRlciBQcm9ncmVzc2lvbiAtLS1cblxuZXhwb3J0IGNvbnN0IENIQVBURVJfTkFNRVM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gIDE6IFwiSW5pdGlhdGVcIixcbiAgMjogXCJFeHBsb3JlclwiLFxuICAzOiBcIkpvdXJuZXltYW5cIixcbiAgNDogXCJBZGVwdFwiLFxuICA1OiBcIlBoaWxvc29waGVyXCIsXG4gIDY6IFwiTWFzdGVyXCIsXG4gIDc6IFwiU2FnZVwiLFxuICA4OiBcIk9yYWNsZVwiLFxuICA5OiBcIlRpdGFuXCIsXG4gIDEwOiBcIk9seW1waWFuXCIsXG59O1xuXG4vLyAtLS0gRHluYW1pYyBUaXRsZSBUYWJsZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfRE9NSU5BTlRfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYm9keTogICB7IGxpZ2h0OiBcIkF0aGxldGVcIiwgICBtaWQ6IFwiV2FycmlvclwiLCAgaGVhdnk6IFwiVGl0YW5cIiB9LFxuICBtaW5kOiAgIHsgbGlnaHQ6IFwiU3R1ZGVudFwiLCAgIG1pZDogXCJTY2hvbGFyXCIsICBoZWF2eTogXCJQb2x5bWF0aFwiIH0sXG4gIHNwaXJpdDogeyBsaWdodDogXCJTZWVrZXJcIiwgICAgbWlkOiBcIlNhZ2VcIiwgICAgIGhlYXZ5OiBcIk9yYWNsZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVFdPX0NBVEVHT1JZX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiYm9keSttaW5kXCI6ICAgIHsgbGlnaHQ6IFwiRGlzY2lwbGluZWQgVGhpbmtlclwiLCBtaWQ6IFwiUGhpbG9zb3BoZXItS2luZ1wiLCBoZWF2eTogXCJSZW5haXNzYW5jZSBUaXRhblwiIH0sXG4gIFwiYm9keStzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQXNjZXRpY1wiLCAgICAgICAgICAgICBtaWQ6IFwiVGVtcGxhclwiLCAgICAgICAgICBoZWF2eTogXCJPbHltcGlhbiBNb25rXCIgfSxcbiAgXCJtaW5kK3NwaXJpdFwiOiAgeyBsaWdodDogXCJDb250ZW1wbGF0aXZlXCIsICAgICAgIG1pZDogXCJNeXN0aWMgU2Nob2xhclwiLCAgIGhlYXZ5OiBcIkVubGlnaHRlbmVkIE9uZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQkFMQU5DRURfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCIsXG4gIG1pZDogXCJSZW5haXNzYW5jZSBTb3VsXCIsXG4gIGhlYXZ5OiBcIkV1ZGFpbW9uXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBBY3Rpdml0aWVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVklUSUVTOiBBY3Rpdml0eUNvbmZpZ1tdID0gW1xuICB7XG4gICAgaWQ6IFwid29ya291dFwiLCBuYW1lOiBcIldvcmtvdXRcIiwgZW1vamk6IFwiXFx1ezFGNEFBfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiLCBwcm9wZXJ0eTogXCJXb3Jrb3V0XCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA3LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNTZXNzaW9uOiB0cnVlLCBwcmlvcml0eTogOCwgbmVnbGVjdFRocmVzaG9sZDogMixcbiAgICBwcmVmZXJyZWRUaW1lOiBcIm1vcm5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICAgIGRhc2hib2FyZFNvdXJjZTogXCJidWlsdGluXCIsIHdvcmtzcGFjZVNvdXJjZTogXCJXb3Jrb3V0IHNlc3Npb25cIixcbiAgfSxcbiAge1xuICAgIGlkOiBcImNhcmRpb1wiLCBuYW1lOiBcIkNhcmRpb1wiLCBlbW9qaTogXCJcXHV7MUYzQzN9XCIsIGNhdGVnb3J5OiBcImJvZHlcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMiBDYXJkaW9cIiwgcHJvcGVydHk6IFwiQ2FyZGlvXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA0LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNTZXNzaW9uOiB0cnVlLCBwcmlvcml0eTogNywgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcIm1vcm5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgIGFsdGVybmF0ZXNXaXRoOiBcIndvcmtvdXRcIixcbiAgICBkYXNoYm9hcmRTb3VyY2U6IFwiYnVpbHRpblwiLCB3b3Jrc3BhY2VTb3VyY2U6IFwiQ2FyZGlvIHNlc3Npb25cIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInJlYWRpbmdcIiwgbmFtZTogXCJSZWFkaW5nXCIsIGVtb2ppOiBcIlxcdXsxRjRENn1cIiwgY2F0ZWdvcnk6IFwibWluZFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAzIFJlYWRpbmdcIiwgcHJvcGVydHk6IFwiUmVhZGluZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzU2Vzc2lvbjogdHJ1ZSwgcHJpb3JpdHk6IDYsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJldmVuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA0NSxcbiAgICBkYXNoYm9hcmRTb3VyY2U6IFwiYnVpbHRpblwiLCB3b3Jrc3BhY2VTb3VyY2U6IFwiUmVhZGluZyBzZXNzaW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcnVtbWluZ1wiLCBuYW1lOiBcIkRydW1taW5nXCIsIGVtb2ppOiBcIlxcdXsxRjk0MX1cIiwgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDQgRHJ1bW1pbmdcIiwgcHJvcGVydHk6IFwiRHJ1bW1pbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1Nlc3Npb246IHRydWUsIHByaW9yaXR5OiA2LCBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgIHByZWZlcnJlZFRpbWU6IFwiYWZ0ZXJub29uXCIsIGVzdGltYXRlZER1cmF0aW9uOiA0NSxcbiAgICBkYXNoYm9hcmRTb3VyY2U6IFwiYnVpbHRpblwiLCB3b3Jrc3BhY2VTb3VyY2U6IFwiRHJ1bSBwcmFjdGljZSBzZXNzaW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJoZWFsdGgtc3R1ZHlcIiwgbmFtZTogXCJIZWFsdGggU3R1ZHlcIiwgZW1vamk6IFwiXFx1ezFGOUVDfVwiLCBjYXRlZ29yeTogXCJtaW5kXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDUgSGVhbHRoIFN0dWR5XCIsIHByb3BlcnR5OiBcIkhlYWx0aCBTdHVkeVwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMywgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzU2Vzc2lvbjogdHJ1ZSwgcHJpb3JpdHk6IDQsIG5lZ2xlY3RUaHJlc2hvbGQ6IDQsXG4gICAgcHJlZmVycmVkVGltZTogXCJhZnRlcm5vb25cIiwgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgIGRhc2hib2FyZFNvdXJjZTogXCJidWlsdGluXCIsIHdvcmtzcGFjZVNvdXJjZTogXCJSZXNlYXJjaCBhYm91dCBoZWFsdGggc2Vzc2lvblwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29jaWFsXCIsIG5hbWU6IFwiU29jaWFsXCIsIGVtb2ppOiBcIlxcdXsxRjkxRH1cIiwgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDYgU29jaWFsXCIsIHByb3BlcnR5OiBcIlNvY2lhbFwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzU2Vzc2lvbjogdHJ1ZSwgcHJpb3JpdHk6IDUsIG5lZ2xlY3RUaHJlc2hvbGQ6IDUsXG4gICAgcHJlZmVycmVkVGltZTogXCJldmVuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA2MCxcbiAgICBkYXNoYm9hcmRTb3VyY2U6IFwiYnVpbHRpblwiLCB3b3Jrc3BhY2VTb3VyY2U6IFwiU29jaWFsIHNlc3Npb25cIixcbiAgfSxcbiAge1xuICAgIGlkOiBcImRyYXdpbmdcIiwgbmFtZTogXCJEcmF3aW5nXCIsIGVtb2ppOiBcIlxcdXsxRjNBOH1cIiwgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDcgRHJhd2luZ1wiLCBwcm9wZXJ0eTogXCJEcmF3aW5nXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA0LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNTZXNzaW9uOiB0cnVlLCBwcmlvcml0eTogNywgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gICAgZGFzaGJvYXJkU291cmNlOiBcImJ1aWx0aW5cIiwgd29ya3NwYWNlU291cmNlOiBcIkRyYXdpbmcgU2Vzc2lvblwiLFxuICB9LFxuXTtcblxuLy8gLS0tIERpcmVjdGl2ZSBMb3JlIFRlbXBsYXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IE5FR0xFQ1RfTE9SRTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgd29ya291dDogXCJZb3VyIG11c2NsZXMgZm9yZ2V0IHdoYXQgdGhleSBvbmNlIGtuZXcuIFRoZSBib2R5IGNyYXZlcyBkaXNjaXBsaW5lIFx1MjAxNCBhbnN3ZXIgaXQuXCIsXG4gIGNhcmRpbzogXCJUaGUgaGVhcnQgZ3Jvd3Mgc2x1Z2dpc2ggd2l0aG91dCB0aGUgcG91bmRpbmcgcmh5dGhtIG9mIGVmZm9ydC5cIixcbiAgcmVhZGluZzogXCJUaGUgbWluZCBzdGFydmVzIG9uIGRpc3RyYWN0aW9uLiBGZWVkIGl0IHdpdGggcGFnZXMsIG5vdCBwaXhlbHMuXCIsXG4gIGRydW1taW5nOiBcIlNpbGVuY2UgaXMgbm90IHJlc3QgXHUyMDE0IGl0IGlzIHRoZSBkZWF0aCBvZiByaHl0aG0uIFBpY2sgdXAgdGhlIHN0aWNrcy5cIixcbiAgXCJoZWFsdGgtc3R1ZHlcIjogXCJLbm93bGVkZ2Ugb2YgdGhlIGJvZHkgaXMgcG93ZXIgb3ZlciBpdC4gTmVnbGVjdCBpbnZpdGVzIGlnbm9yYW5jZS5cIixcbiAgc29jaWFsOiBcIkV2ZW4gd2FycmlvcnMgbmVlZCBmZWxsb3dzaGlwLiBJc29sYXRpb24gYnJlZWRzIHN0YWduYXRpb24uXCIsXG4gIGRyYXdpbmc6IFwiVGhlIGJlYXN0IHdpdGhpbiB5b3UgZ3Jvd3Mgd2VhayB3aXRob3V0IHRoZSBkaXNjaXBsaW5lIG9mIGxpbmUgYW5kIGZvcm0uXCIsXG59O1xuXG4vLyAtLS0gRmFsbGJhY2sgUXVvdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgRkFMTEJBQ0tfUVVPVEVTOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgYXR0cmlidXRpb246IHN0cmluZyB9PiA9IFtcbiAgeyB0ZXh0OiBcIllvdSBoYXZlIHBvd2VyIG92ZXIgeW91ciBtaW5kIFx1MjAxNCBub3Qgb3V0c2lkZSBldmVudHMuIFJlYWxpemUgdGhpcywgYW5kIHlvdSB3aWxsIGZpbmQgc3RyZW5ndGguXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJXZSBzdWZmZXIgbW9yZSBvZnRlbiBpbiBpbWFnaW5hdGlvbiB0aGFuIGluIHJlYWxpdHkuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJUaGUgaW1wZWRpbWVudCB0byBhY3Rpb24gYWR2YW5jZXMgYWN0aW9uLiBXaGF0IHN0YW5kcyBpbiB0aGUgd2F5IGJlY29tZXMgdGhlIHdheS5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIk5vIG1hbiBpcyBmcmVlIHdobyBpcyBub3QgbWFzdGVyIG9mIGhpbXNlbGYuXCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJXYXN0ZSBubyBtb3JlIHRpbWUgYXJndWluZyBhYm91dCB3aGF0IGEgZ29vZCBtYW4gc2hvdWxkIGJlLiBCZSBvbmUuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJJdCBpcyBub3QgdGhhdCB3ZSBoYXZlIGEgc2hvcnQgdGltZSB0byBsaXZlLCBidXQgdGhhdCB3ZSB3YXN0ZSBhIGdvb2QgZGVhbCBvZiBpdC5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkZpcnN0IHNheSB0byB5b3Vyc2VsZiB3aGF0IHlvdSB3b3VsZCBiZTsgYW5kIHRoZW4gZG8gd2hhdCB5b3UgaGF2ZSB0byBkby5cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBoYXBwaW5lc3Mgb2YgeW91ciBsaWZlIGRlcGVuZHMgdXBvbiB0aGUgcXVhbGl0eSBvZiB5b3VyIHRob3VnaHRzLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiSGUgd2hvIGZlYXJzIGRlYXRoIHdpbGwgbmV2ZXIgZG8gYW55dGhpbmcgd29ydGggb2YgYSBtYW4gd2hvIGlzIGFsaXZlLlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiRGlmZmljdWx0aWVzIHN0cmVuZ3RoZW4gdGhlIG1pbmQsIGFzIGxhYm9yIGRvZXMgdGhlIGJvZHkuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJIb3cgbG9uZyBhcmUgeW91IGdvaW5nIHRvIHdhaXQgYmVmb3JlIHlvdSBkZW1hbmQgdGhlIGJlc3QgZm9yIHlvdXJzZWxmP1wiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiVGhlIHNvdWwgYmVjb21lcyBkeWVkIHdpdGggdGhlIGNvbG91ciBvZiBpdHMgdGhvdWdodHMuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG5dO1xuXG4vLyAtLS0gUm9tYW4gTnVtZXJhbHMgSGVscGVyIC0tLVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Sb21hbihudW06IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHMgPSBbMTAwMCwgOTAwLCA1MDAsIDQwMCwgMTAwLCA5MCwgNTAsIDQwLCAxMCwgOSwgNSwgNCwgMV07XG4gIGNvbnN0IHN5bXMgPSBbXCJNXCIsIFwiQ01cIiwgXCJEXCIsIFwiQ0RcIiwgXCJDXCIsIFwiWENcIiwgXCJMXCIsIFwiWExcIiwgXCJYXCIsIFwiSVhcIiwgXCJWXCIsIFwiSVZcIiwgXCJJXCJdO1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgd2hpbGUgKG51bSA+PSB2YWxzW2ldKSB7XG4gICAgICByZXN1bHQgKz0gc3ltc1tpXTtcbiAgICAgIG51bSAtPSB2YWxzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0gRGVmYXVsdCBTZXNzaW9uIENvbXBsZXRpb24gU3RhdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9TRVNTSU9OX1NUQVRFUzogU2Vzc2lvbkNvbXBsZXRpb25TdGF0ZVtdID0gW1xuICB7IGlkOiBcImRpc2NpcGxpbmVcIiwgbmFtZTogXCJEaXNjaXBsaW5lXCIsIGljb246IFwiXFx1MjVDNlwiLCBjb2xvcjogXCIjOTI4ZDg1XCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAxLjAgfSxcbiAgeyBpZDogXCJmbG93XCIsIG5hbWU6IFwiRmxvd1wiLCBpY29uOiBcIlxcdTIyNDhcIiwgY29sb3I6IFwiI2M5YTg0Y1wiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMS41IH0sXG4gIHsgaWQ6IFwic2tpcHBlZFwiLCBuYW1lOiBcIlNraXBwZWRcIiwgaWNvbjogXCJcXHUyNUNCXCIsIGNvbG9yOiBcIiM4YjJkMzVcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDAgfSxcbl07XG5cbi8vIC0tLSBEZWZhdWx0IERldiBDb25maWcgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFVl9DT05GSUc6IERldkNvbmZpZyA9IHtcbiAgbGFiZWxzOiB7XG4gICAgZ3JlZXRpbmdfbW9ybmluZzogXCJHb29kIG1vcm5pbmdcIixcbiAgICBncmVldGluZ19hZnRlcm5vb246IFwiR29vZCBhZnRlcm5vb25cIixcbiAgICBncmVldGluZ19ldmVuaW5nOiBcIkdvb2QgZXZlbmluZ1wiLFxuICAgIGdyZWV0aW5nX25pZ2h0OiBcIkdvb2QgbmlnaHRcIixcbiAgICBkaXJlY3RpdmVfdGl0bGU6IFwiVEhFIERJUkVDVElWRVwiLFxuICAgIGJvc3Nfc3RhdHVzX3RpdGxlOiBcIkJPU1MgU1RBVFVTXCIsXG4gICAgd2Vla2x5X3JoeXRobV90aXRsZTogXCJXRUVLTFkgUkhZVEhNXCIsXG4gICAgYWN0aXZpdHlfZ3JpZF90aXRsZTogXCJBQ1RJVklUSUVTXCIsXG4gICAgdGVtcGxlX3RpdGxlOiBcIlRIRSBURU1QTEVcIixcbiAgICBldWRhaW1vbmlhX3RpdGxlOiBcIkV1ZGFpbW9uaWEgSW5kZXhcIixcbiAgICBkYXltYXBfdGl0bGU6IFwiWU9VUiBEQVlcIixcbiAgICBiZWdpbl9zZXNzaW9uOiBcIkJFR0lOIFNFU1NJT05cIixcbiAgICBub3Rfbm93OiBcIk5PVCBOT1dcIixcbiAgfSxcbiAgeHBQZXJDb21wbGV0aW9uOiAxMCxcbiAgc3RyZWFrQm9udXNNdWx0aXBsaWVyOiAxLjUsXG4gIGJ1ZmZlck1pbnV0ZXM6IDE1LFxuICBtb3JuaW5nU3RhcnQ6IDYsXG4gIG1vcm5pbmdFbmQ6IDEyLFxuICBhZnRlcm5vb25FbmQ6IDE4LFxuICBldmVuaW5nRW5kOiAyMyxcbiAgdGhlbWVPdmVycmlkZXM6IHt9LFxuICBhbmltYXRpb25TdGFnZ2VyTXM6IDgwLFxuICBoZXJvSGVpZ2h0OiAzNTAsXG4gIHNlY3Rpb25PcmRlcjogW1xuICAgIFwiaGVyb1wiLCBcImV1ZGFpbW9uaWFcIiwgXCJkYXltYXBcIiwgXCJkaXJlY3RpdmVcIiwgXCJib3NzXCIsXG4gICAgXCJ3ZWVrbHlcIiwgXCJhY3Rpdml0aWVzXCIsIFwidGVtcGxlXCIsIFwicXVvdGVcIixcbiAgXSxcbiAgaGlkZGVuU2VjdGlvbnM6IFtdLFxuICBhY3Rpdml0eUdyaWRDb2x1bW5zOiAyLFxufTtcblxuLy8gLS0tIERlZmF1bHQgVGVtcGxhdGUgUmVnaXN0cnkgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RFTVBMQVRFX1JFR0lTVFJZOiBUZW1wbGF0ZVJlZ2lzdHJ5RW50cnlbXSA9IFtcbiAge1xuICAgIGFjdGl2aXR5VHlwZTogXCJ3b3Jrb3V0XCIsXG4gICAgdGVtcGxhdGVQYXRoOiBcIlRlbXBsYXRlcy9Xb3Jrb3V0LmpzXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbl07XG5cbi8vIC0tLSBEZWZhdWx0IENhbGVuZGFyIFNldHRpbmdzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUzogQ2FsZW5kYXJTZXR0aW5ncyA9IHtcbiAgZW5hYmxlRGFpbHlOb3RlczogdHJ1ZSxcbiAgZGFpbHlOb3Rlc0ZvbGRlcjogXCJcIixcbiAgZGFpbHlOb3Rlc0Zvcm1hdDogXCJZWVlZLU1NLUREXCIsXG4gIGVuYWJsZVRhc2tzUGx1Z2luOiBmYWxzZSxcbiAgZW5hYmxlUXVpY2tUYXNrczogdHJ1ZSxcbiAgcXVpY2tUYXNrczogW10sXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBPbGVuIFNldHRpbmdzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9PTEVOX1NFVFRJTkdTOiBPbGVuU2V0dGluZ3MgPSB7XG4gIC8vIFByb2ZpbGVcbiAgdXNlck5hbWU6IFwiV2FycmlvclwiLFxuICBteVdoeTogXCJcIixcbiAgaGVyb0JhY2tncm91bmQ6IFwiXCIsXG5cbiAgLy8gQWN0aXZpdGllc1xuICBhY3Rpdml0aWVzOiBERUZBVUxUX0FDVElWSVRJRVMsXG5cbiAgLy8gQ2F0ZWdvcmllc1xuICBjYXRlZ29yeUNvbG9yczoge1xuICAgIGJvZHk6IFwiI2M5YTg0Y1wiLFxuICAgIG1pbmQ6IFwiIzZiOGNjZVwiLFxuICAgIHNwaXJpdDogXCIjOGI3ZWM4XCIsXG4gIH0sXG4gIHRpdGxlT3ZlcnJpZGU6IFwiXCIsXG5cbiAgLy8gRXVkYWltb25pYVxuICBjYXRlZ29yeVhQOiB7XG4gICAgYm9keTogMCxcbiAgICBtaW5kOiAwLFxuICAgIHNwaXJpdDogMCxcbiAgfSxcblxuICAvLyBCb3NzXG4gIGN1cnJlbnRUaWVyOiAxLFxuICBib3NzTWF4SFA6IDM1LFxuICBib3NzQ3VycmVudEhQOiAzNSxcbiAgaW5UYXJ0YXJ1czogZmFsc2UsXG4gIHRhcnRhcnVzUGVuYW5jZVRhc2tzOiBbXSxcbiAgdGFydGFydXNTdGFydERhdGU6IG51bGwsXG4gIGZhaWxlZFRocmVzaG9sZERheXM6IDAsXG4gIGNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzOiAwLFxuXG4gIC8vIFRlbXBsZVxuICB0ZW1wbGVUYXNrczogW1xuICAgIHsgaWQ6IFwiYmF0aGluZ1wiLCBuYW1lOiBcIkJhdGhpbmdcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiAxLCBlbW9qaTogXCJcXHV7MUY2QkZ9XCIgfSxcbiAgICB7IGlkOiBcImZhY2lhbC1oYWlyXCIsIG5hbWU6IFwiRmFjaWFsIGhhaXJcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiAyLCBlbW9qaTogXCJcXHV7MUZBOTJ9XCIgfSxcbiAgICB7IGlkOiBcIm5haWxzXCIsIG5hbWU6IFwiTmFpbHNcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiA3LCBlbW9qaTogXCJcXHUyNzAyXFx1RkUwRlwiIH0sXG4gICAgeyBpZDogXCJoYWlyY3V0XCIsIG5hbWU6IFwiSGFpcmN1dFwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIxLCBlbW9qaTogXCJcXHV7MUY0ODh9XCIgfSxcbiAgXSxcblxuICAvLyBSZXdhcmRzXG4gIHBlbmRpbmdSZXdhcmRzOiBbXSxcbiAgY2xhaW1lZFJld2FyZHM6IFtdLFxuICBiYW5rZWRSZXdhcmRzOiBbXSxcblxuICAvLyBTeXN0ZW1cbiAgc3lzdGVtU3RhdGU6IFwiYWN0aXZlXCIsXG4gIHBhdXNlU3RhcnRUaW1lOiBudWxsLFxuICB0b3RhbFBhdXNlZFRpbWU6IDAsXG4gIG1pZ3JhdGVkOiBmYWxzZSxcbiAgc2ltdWxhdGVkRGF0ZTogbnVsbCxcblxuICAvLyBUaGVtZVxuICB0aGVtZU92ZXJyaWRlczoge30sXG5cbiAgLy8gRGV2XG4gIGRldkNvbmZpZzogREVGQVVMVF9ERVZfQ09ORklHLFxuXG4gIC8vIFNlc3Npb25zXG4gIHNlc3Npb25Db21wbGV0aW9uU3RhdGVzOiBERUZBVUxUX1NFU1NJT05fU1RBVEVTLFxuICBhY3RpdmVTZXNzaW9uOiBudWxsLFxuXG4gIC8vIENhbGVuZGFyXG4gIGNhbGVuZGFyOiBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuXG4gIC8vIFRlbXBsYXRlIFJlZ2lzdHJ5XG4gIHRlbXBsYXRlUmVnaXN0cnk6IERFRkFVTFRfVEVNUExBVEVfUkVHSVNUUlksXG5cbiAgLy8gUXVvdGVcbiAgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLFxuICBsYXN0UXVvdGVJbmRleDogLTEsXG4gIHJlY2VudFF1b3RlSWRzOiBbXSxcbn07XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXNoYm9hcmQgVmlld1xuLy8gTWFpbiBzY3JvbGxhYmxlIEl0ZW1WaWV3IHJlbmRlcmluZyBhbGwgZGFzaGJvYXJkIHNlY3Rpb25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQ29tcGxldGlvbk1hcCwgQ29tcGxldGlvbiwgQ2FsZW5kYXJUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfT0xFTiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBDYWxlbmRhckVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0NhbGVuZGFyRW5naW5lXCI7XG5pbXBvcnQgeyByZW5kZXJIZXJvQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlcm9DYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJFdWRhaW1vbmlhQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRXVkYWltb25pYUJhclwiO1xuaW1wb3J0IHsgcmVuZGVyRGlyZWN0aXZlQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RpcmVjdGl2ZUNhcmRcIjtcbmltcG9ydCB7IHJlbmRlckJvc3NTdGF0dXNDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQm9zc1N0YXR1c0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlcldlZWtseVJoeXRobSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1dlZWtseVJoeXRobVwiO1xuaW1wb3J0IHsgcmVuZGVyQWN0aXZpdHlHcmlkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWN0aXZpdHlHcmlkXCI7XG5pbXBvcnQgeyByZW5kZXJUZW1wbGVDaGlwcyB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RlbXBsZUNoaXBzXCI7XG5pbXBvcnQgeyByZW5kZXJRdW90ZUZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1F1b3RlRm9vdGVyXCI7XG5pbXBvcnQgeyByZW5kZXJEYXlUaW1lbGluZSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0RheVRpbWVsaW5lXCI7XG5cbmV4cG9ydCBjbGFzcyBEYXNoYm9hcmRWaWV3IGV4dGVuZHMgSXRlbVZpZXcge1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG4gIHByaXZhdGUgaW50ZXJ2YWxzOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVklFV19UWVBFX09MRU47XG4gIH1cblxuICBnZXREaXNwbGF5VGV4dCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIk9sZW5cIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJjb21wYXNzXCI7XG4gIH1cblxuICBhc3luYyBvbk9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pbnRlcnZhbHMgPSBbXTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgY2xlYW51cCgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIHRoaXMuaW50ZXJ2YWxzKSB7XG4gICAgICBjbGVhckludGVydmFsKGlkKTtcbiAgICB9XG4gICAgdGhpcy5pbnRlcnZhbHMgPSBbXTtcbiAgfVxuXG4gIGFzeW5jIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNsZWFudXAoKTtcbiAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLmNvbnRlbnRFbDtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcblxuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG4gICAgY29uc3Qgcm9vdCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kYXNoYm9hcmRcIiB9KTtcblxuICAgIC8vIEFwcGx5IHRoZW1lIG92ZXJyaWRlc1xuICAgIHRoaXMuYXBwbHlUaGVtZU92ZXJyaWRlcyhyb290KTtcblxuICAgIC8vIEdhdGhlciBjb21wbGV0aW9uIGRhdGEgZnJvbSB2YXVsdFxuICAgIGNvbnN0IGNvbXBsZXRpb25EYXRhID0gdGhpcy5nYXRoZXJDb21wbGV0aW9uRGF0YSgpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBlbmdpbmVzXG4gICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBlbmdpbmUgPSBuZXcgT2xlbkVuZ2luZShzZXR0aW5ncywgY29tcGxldGlvbkRhdGEsIG5vdyk7XG5cbiAgICAvLyBDYWxlbmRhciBpbnRlZ3JhdGlvbiBcdTIwMTQgZ2F0aGVyIGNhbGVuZGFyIHRhc2tzIGFuZCBmZWVkIGludG8gZW5naW5lXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUodGhpcy5hcHAsIHNldHRpbmdzLCBub3cpO1xuICAgIGNvbnN0IGNhbGVuZGFyVGFza3MgPSBhd2FpdCB0aGlzLmdhdGhlckNhbGVuZGFyVGFza3MoY2FsZW5kYXJFbmdpbmUpO1xuICAgIGNvbnN0IGNhbGVuZGFyRW50cmllcyA9IGNhbGVuZGFyRW5naW5lLnRvRGF5TWFwRW50cmllcyhjYWxlbmRhclRhc2tzKTtcbiAgICBlbmdpbmUuc2V0Q2FsZW5kYXJFbnRyaWVzKGNhbGVuZGFyRW50cmllcyk7XG5cbiAgICAvLyBCdWlsZCBzZWN0aW9uIG9yZGVyIGZyb20gZGV2Q29uZmlnXG4gICAgY29uc3Qgc2VjdGlvbk9yZGVyID0gc2V0dGluZ3MuZGV2Q29uZmlnLnNlY3Rpb25PcmRlcjtcbiAgICBjb25zdCBoaWRkZW4gPSBuZXcgU2V0KHNldHRpbmdzLmRldkNvbmZpZy5oaWRkZW5TZWN0aW9ucyk7XG5cbiAgICBsZXQgc3RhZ2dlcklkeCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IHNlY3Rpb24gb2Ygc2VjdGlvbk9yZGVyKSB7XG4gICAgICBpZiAoaGlkZGVuLmhhcyhzZWN0aW9uKSkgY29udGludWU7XG5cbiAgICAgIHN3aXRjaCAoc2VjdGlvbikge1xuICAgICAgICBjYXNlIFwiaGVyb1wiOlxuICAgICAgICAgIHJlbmRlckhlcm9DYXJkKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImV1ZGFpbW9uaWFcIjpcbiAgICAgICAgICByZW5kZXJFdWRhaW1vbmlhQmFyKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgpO1xuICAgICAgICAgIHN0YWdnZXJJZHggKz0gMzsgLy8gZXVkYWltb25pYSBjYXJkICsgc3RhdCBjYXJkcyArIGNhdGVnb3JpZXMgY2FyZFxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJkYXltYXBcIjpcbiAgICAgICAgICByZW5kZXJEYXlUaW1lbGluZShyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyssIHtcbiAgICAgICAgICAgIG9uQWNjZXB0OiAoYWN0aXZpdHlJZCkgPT4gdGhpcy5oYW5kbGVCZWdpblNlc3Npb24oYWN0aXZpdHlJZCksXG4gICAgICAgICAgICBvblNraXA6IChhY3Rpdml0eUlkKSA9PiB0aGlzLmhhbmRsZVNraXBBY3Rpdml0eShhY3Rpdml0eUlkLCBlbmdpbmUpLFxuICAgICAgICAgICAgb25DYWxlbmRhckRvbmU6IChlbnRyeSkgPT4gdGhpcy5oYW5kbGVDYWxlbmRhclRhc2tEb25lKGVudHJ5KSxcbiAgICAgICAgICAgIG9uQ2FsZW5kYXJQb3N0cG9uZTogKGVudHJ5KSA9PiB0aGlzLmhhbmRsZUNhbGVuZGFyVGFza1Bvc3Rwb25lKGVudHJ5KSxcbiAgICAgICAgICAgIG9uQ3JlYXRlRXZlbnQ6ICgpID0+ICh0aGlzLnBsdWdpbiBhcyBhbnkpLnNob3dRdWlja1Rhc2tEaWFsb2coKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZGlyZWN0aXZlXCI6XG4gICAgICAgICAgcmVuZGVyRGlyZWN0aXZlQ2FyZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyssIChhY3Rpdml0eUlkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUJlZ2luU2Vzc2lvbihhY3Rpdml0eUlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYm9zc1wiOlxuICAgICAgICAgIHJlbmRlckJvc3NTdGF0dXNDYXJkKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ3ZWVrbHlcIjpcbiAgICAgICAgICByZW5kZXJXZWVrbHlSaHl0aG0ocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWN0aXZpdGllc1wiOlxuICAgICAgICAgIHJlbmRlckFjdGl2aXR5R3JpZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0ZW1wbGVcIjpcbiAgICAgICAgICByZW5kZXJUZW1wbGVDaGlwcyhyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAodGFza0lkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRlbXBsZVVwZGF0ZSh0YXNrSWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgIHJlbmRlclF1b3RlRm9vdGVyKHJvb3QsIHRoaXMuYXBwLCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAocGFydGlhbCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFydGlhbCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAtLS0gRGF0YSBHYXRoZXJpbmcgLS0tXG5cbiAgZ2F0aGVyQ29tcGxldGlvbkRhdGEoKTogQ29tcGxldGlvbk1hcCB7XG4gICAgY29uc3QgZGF0YTogQ29tcGxldGlvbk1hcCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LmVuYWJsZWQpIGNvbnRpbnVlO1xuICAgICAgZGF0YVthY3Rpdml0eS5pZF0gPSB0aGlzLmdldENvbXBsZXRpb25zRnJvbUZvbGRlcihhY3Rpdml0eS5mb2xkZXIsIGFjdGl2aXR5LnByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcGxldGlvbnNGcm9tRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZywgZmllbGROYW1lOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG5cbiAgICByZXR1cm4gZmlsZXNcbiAgICAgIC5maWx0ZXIoKGZpbGUpID0+IGZpbGUucGF0aCA9PT0gZm9sZGVyUGF0aCB8fCBmaWxlLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBjYWNoZT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGlmICghZnJvbnRtYXR0ZXIgfHwgdHlwZW9mIGZyb250bWF0dGVyW2ZpZWxkTmFtZV0gIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiBmaWxlLmJhc2VuYW1lLFxuICAgICAgICAgIGNvbXBsZXRlZDogZnJvbnRtYXR0ZXJbZmllbGROYW1lXSA9PT0gdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjKTogYyBpcyBDb21wbGV0aW9uID0+IGMgIT09IG51bGwpO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIEdhdGhlcmluZyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGdhdGhlckNhbGVuZGFyVGFza3MoY2FsZW5kYXJFbmdpbmU6IENhbGVuZGFyRW5naW5lKTogUHJvbWlzZTxDYWxlbmRhclRhc2tbXT4ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXMgXHUyMDE0IHJlYWQgdG9kYXkncyBub3RlIGNvbnRlbnRcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyAmJiBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyKSB7XG4gICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBmb2xkZXIgPSBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGYuYmFzZW5hbWUgPT09IHRvZGF5O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYWlseU5vdGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZGFpbHlOb3RlKTtcbiAgICAgICAgdGFza3MucHVzaCguLi5jYWxlbmRhckVuZ2luZS5nZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQsIGRhaWx5Tm90ZS5wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uIEI6IFRhc2tzIFBsdWdpbiBcdTIwMTQgc2NhbiBmb3IgdGFza3Mgd2l0aCB0b2RheSdzIGR1ZSBkYXRlXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKSB7XG4gICAgICBjb25zdCB0YXNrc1BsdWdpbiA9ICh0aGlzLmFwcCBhcyBhbnkpLnBsdWdpbnM/LnBsdWdpbnM/LltcIm9ic2lkaWFuLXRhc2tzLXBsdWdpblwiXTtcbiAgICAgIGlmICh0YXNrc1BsdWdpbikge1xuICAgICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc3QgZmlsZXNXaXRoVGFza3M6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgaWYgKCFjYWNoZT8ubGlzdEl0ZW1zPy5zb21lKChsaSkgPT4gbGkudGFzayAhPT0gdW5kZWZpbmVkKSkgY29udGludWU7XG5cbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgICAvLyBRdWljayBjaGVjazogZG9lcyB0aGUgY29udGVudCBtZW50aW9uIHRvZGF5J3MgZGF0ZSB3aXRoIGEgZHVlIGVtb2ppP1xuICAgICAgICAgIGlmIChjb250ZW50LmluY2x1ZGVzKHRvZGF5KSkge1xuICAgICAgICAgICAgZmlsZXNXaXRoVGFza3MucHVzaCh7IHBhdGg6IGZpbGUucGF0aCwgY29udGVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrcy5wdXNoKC4uLmNhbGVuZGFyRW5naW5lLmdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXNXaXRoVGFza3MpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpb24gQzogUXVpY2sgVGFza3MgXHUyMDE0IGFscmVhZHkgaGFuZGxlZCBieSBDYWxlbmRhckVuZ2luZS5nZXRBbGxUYXNrcygpXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIHRhc2tzLnB1c2goXG4gICAgICAgIC4uLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXkpXG4gICAgICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgICAgIHRpdGxlOiBxdC50aXRsZSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgY29uc3QsXG4gICAgICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBxdC5kdXJhdGlvbixcbiAgICAgICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBIYW5kbGVycyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUJlZ2luU2Vzc2lvbihhY3Rpdml0eUlkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHlJZCk7XG4gICAgaWYgKCFhY3Rpdml0eSkgcmV0dXJuO1xuXG4gICAgaWYgKGFjdGl2aXR5Lmhhc1Nlc3Npb24pIHtcbiAgICAgIC8vIENoZWNrIHdvcmtzcGFjZSBzb3VyY2U6IGN1c3RvbSAubWQgb3IgYnVpbHQtaW4/XG4gICAgICBpZiAoYWN0aXZpdHkud29ya3NwYWNlU291cmNlICYmIGFjdGl2aXR5LndvcmtzcGFjZVNvdXJjZSAhPT0gXCJidWlsdGluXCIpIHtcbiAgICAgICAgLy8gT3BlbiBlbWJlZGRlZCAubWQgc2Vzc2lvbiB0ZW1wbGF0ZSBpbnNpZGUgT2xlbiBzaGVsbFxuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVTZXNzaW9uID0ge1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHNraWxsczogW10sXG4gICAgICAgICAgaGFzU2Vzc2lvbjogdHJ1ZSxcbiAgICAgICAgICBzZXNzaW9uRm9sZGVyOiBhY3Rpdml0eS5zZXNzaW9uRm9sZGVyLFxuICAgICAgICAgIHNraWxsRm9sZGVyOiBhY3Rpdml0eS5za2lsbEZvbGRlcixcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLmFjdGl2YXRlRW1iZWRkZWRWaWV3KHtcbiAgICAgICAgICBmaWxlUGF0aDogYWN0aXZpdHkud29ya3NwYWNlU291cmNlLFxuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBhY3Rpdml0eUVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgICAgICBtb2RlOiBcIndvcmtzcGFjZVwiLFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJ1aWx0LWluOiBPcGVuIG5hdGl2ZSBPbGVuIFNlc3Npb25WaWV3XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVNlc3Npb24gPSB7XG4gICAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBhY3Rpdml0eS5lbW9qaSxcbiAgICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgICAgc3RhcnRUaW1lOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgc2tpbGxzOiBbXSxcbiAgICAgICAgICBoYXNTZXNzaW9uOiB0cnVlLFxuICAgICAgICAgIHNlc3Npb25Gb2xkZXI6IGFjdGl2aXR5LnNlc3Npb25Gb2xkZXIsXG4gICAgICAgICAgc2tpbGxGb2xkZXI6IGFjdGl2aXR5LnNraWxsRm9sZGVyLFxuICAgICAgICB9O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5wbHVnaW4uYWN0aXZhdGVTZXNzaW9uVmlldygpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBOb24tc2Vzc2lvbiBhY3Rpdml0aWVzOiBtYXJrIGRvbmUgaW1tZWRpYXRlbHlcbiAgICAgIGF3YWl0IHRoaXMubWFya0FjdGl2aXR5RG9uZShhY3Rpdml0eSk7XG4gICAgICBuZXcgTm90aWNlKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9IG1hcmtlZCBkb25lIWApO1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVNraXBBY3Rpdml0eShhY3Rpdml0eUlkOiBzdHJpbmcsIGVuZ2luZTogT2xlbkVuZ2luZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE1hcmsgYXMgc2tpcHBlZCBpbiB0aGUgZGF5IG1hcCAoZW5naW5lIHN0YXRlKVxuICAgIGNvbnN0IGRheU1hcCA9IGVuZ2luZS5nZXREYXlNYXAoKTtcbiAgICBjb25zdCBlbnRyeSA9IGRheU1hcC5maW5kKChlKSA9PiBlLmFjdGl2aXR5SWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkuc3RhdHVzID0gXCJza2lwcGVkXCI7XG4gICAgfVxuICAgIG5ldyBOb3RpY2UoXCJTa2lwcGVkXCIpO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUNhbGVuZGFyVGFza0RvbmUoZW50cnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkRheU1hcEVudHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayB8fCAhZW50cnkuY2FsZW5kYXJTb3VyY2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNhbGVuZGFyRW5naW5lID0gbmV3IENhbGVuZGFyRW5naW5lKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncyxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgc3dpdGNoIChlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjpcbiAgICAgICAgaWYgKGVudHJ5LmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgZW50cnkubGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUudG9nZ2xlRGFpbHlOb3RlVGFzayhlbnRyeS5maWxlUGF0aCwgZW50cnkubGluZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjpcbiAgICAgICAgaWYgKGVudHJ5LmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgZW50cnkubGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUudG9nZ2xlVGFza3NQbHVnaW5UYXNrKGVudHJ5LmZpbGVQYXRoLCBlbnRyeS5saW5lTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjoge1xuICAgICAgICBjb25zdCBxdElkID0gZW50cnkuY2FsZW5kYXJUYXNrSWQ/LnJlcGxhY2UoXCJxdC1cIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maW5kKChxKSA9PiBxLmlkID09PSBxdElkKTtcbiAgICAgICAgaWYgKHF0KSB7XG4gICAgICAgICAgcXQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3IE5vdGljZShgXFx1MjcxMyAke2VudHJ5LmFjdGl2aXR5TmFtZX1gKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuRGF5TWFwRW50cnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWVudHJ5LmlzQ2FsZW5kYXJUYXNrIHx8ICFlbnRyeS5jYWxlbmRhclNvdXJjZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKVxuICAgICk7XG5cbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCB0YXNrOiBpbXBvcnQoXCIuLi90eXBlc1wiKS5DYWxlbmRhclRhc2sgPSB7XG4gICAgICBpZDogZW50cnkuY2FsZW5kYXJUYXNrSWQgPz8gZW50cnkuYWN0aXZpdHlJZCxcbiAgICAgIHRpdGxlOiBlbnRyeS5hY3Rpdml0eU5hbWUsXG4gICAgICBzb3VyY2U6IGVudHJ5LmNhbGVuZGFyU291cmNlLFxuICAgICAgZGF0ZTogbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBmaWxlUGF0aDogZW50cnkuZmlsZVBhdGgsXG4gICAgICBsaW5lTnVtYmVyOiBlbnRyeS5saW5lTnVtYmVyLFxuICAgIH07XG5cbiAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS5wb3N0cG9uZVRhc2sodGFzayk7XG4gICAgbmV3IE5vdGljZShgXFx1MjNFOSAke2VudHJ5LmFjdGl2aXR5TmFtZX0gcG9zdHBvbmVkIHRvIHRvbW9ycm93YCk7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbWFya0FjdGl2aXR5RG9uZShhY3Rpdml0eTogeyBpZDogc3RyaW5nOyBmb2xkZXI6IHN0cmluZzsgcHJvcGVydHk6IHN0cmluZzsgY2F0ZWdvcnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkNhdGVnb3J5OyBkYW1hZ2VQZXJDb21wbGV0aW9uOiBudW1iZXIgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgdG9kYXkncyBmaWxlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgdG9kYXlGaWxlID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PiAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmIGYuYmFzZW5hbWUgPT09IGRhdGVTdHJcbiAgICApO1xuXG4gICAgaWYgKHRvZGF5RmlsZSkge1xuICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKHRvZGF5RmlsZSwgKGZtKSA9PiB7XG4gICAgICAgIGZtW2FjdGl2aXR5LnByb3BlcnR5XSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBgLS0tXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX06IHRydWVcXG4tLS1cXG5gKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBNYXkgYWxyZWFkeSBleGlzdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFhQICsgYm9zcyBkYW1hZ2VcbiAgICBjb25zdCB4cCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb247XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFthY3Rpdml0eS5jYXRlZ29yeV0gKz0geHA7XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3Rpdml0eS5kYW1hZ2VQZXJDb21wbGV0aW9uXG4gICAgKTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlVGVtcGxlVXBkYXRlKHRhc2tJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGFzayA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLmZpbmQoKHQpID0+IHQuaWQgPT09IHRhc2tJZCk7XG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG5cbiAgICB0YXNrLmxhc3RDb21wbGV0ZWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgbmV3IE5vdGljZShgJHt0YXNrLmVtb2ppfSAke3Rhc2submFtZX0gY29tcGxldGVkIWApO1xuXG4gICAgLy8gUmUtcmVuZGVyXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8vIC0tLSBUaGVtZSAtLS1cblxuICBwcml2YXRlIGFwcGx5VGhlbWVPdmVycmlkZXMocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcztcbiAgICBpZiAoIW92ZXJyaWRlcykgcmV0dXJuO1xuXG4gICAgaWYgKG92ZXJyaWRlcy5iZ1ByaW1hcnkpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnLXByaW1hcnlcIiwgb3ZlcnJpZGVzLmJnUHJpbWFyeSk7XG4gICAgaWYgKG92ZXJyaWRlcy5jYXJkQmcpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtYmdcIiwgb3ZlcnJpZGVzLmNhcmRCZyk7XG4gICAgaWYgKG92ZXJyaWRlcy50ZXh0UHJpbWFyeSkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1wcmltYXJ5XCIsIG92ZXJyaWRlcy50ZXh0UHJpbWFyeSk7XG4gICAgaWYgKG92ZXJyaWRlcy50ZXh0TXV0ZWQpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRleHQtbXV0ZWRcIiwgb3ZlcnJpZGVzLnRleHRNdXRlZCk7XG4gICAgaWYgKG92ZXJyaWRlcy5hY2NlbnRHb2xkKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1hY2NlbnQtZ29sZFwiLCBvdmVycmlkZXMuYWNjZW50R29sZCk7XG4gICAgaWYgKG92ZXJyaWRlcy5kYW5nZXIpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWRhbmdlclwiLCBvdmVycmlkZXMuZGFuZ2VyKTtcbiAgICBpZiAob3ZlcnJpZGVzLnN1Y2Nlc3MpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXN1Y2Nlc3NcIiwgb3ZlcnJpZGVzLnN1Y2Nlc3MpO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIEVuZ2luZVxuLy8gUmVhZHMgYm9zcyBzdGF0ZSBhbmQgcHJvdmlkZXMgYm9zcy1yZWxhdGVkIGNhbGN1bGF0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBCb3NzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQk9TU0VTLCBSQU5LX1RJRVJfQ09MT1JTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvc3NTdGF0dXMge1xuICBib3NzOiBCb3NzRGVmaW5pdGlvbjtcbiAgY3VycmVudEhQOiBudW1iZXI7XG4gIG1heEhQOiBudW1iZXI7XG4gIHBlcmNlbnQ6IG51bWJlcjtcbiAgdGllcjogbnVtYmVyO1xuICByYW5rOiBzdHJpbmc7XG4gIHRpZXJDb2xvcjogc3RyaW5nO1xuICBpblRhcnRhcnVzOiBib29sZWFuO1xuICBpc0RhbmdlclpvbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCb3NzRW5naW5lIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBnZXRCb3NzRm9yVGllcih0aWVyOiBudW1iZXIpOiBCb3NzRGVmaW5pdGlvbiB8IG51bGwge1xuICAgIHJldHVybiBCT1NTRVMuZmluZCgoYikgPT4gYi50aWVyID09PSB0aWVyKSA/PyBudWxsO1xuICB9XG5cbiAgZ2V0Q3VycmVudEJvc3MoKTogQm9zc0RlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb3NzRm9yVGllcih0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyKTtcbiAgfVxuXG4gIGdldEJvc3NTdGF0dXMoKTogQm9zc1N0YXR1cyB7XG4gICAgY29uc3QgdGllciA9IHRoaXMuc2V0dGluZ3MuY3VycmVudFRpZXI7XG4gICAgY29uc3QgYm9zcyA9IHRoaXMuZ2V0Q3VycmVudEJvc3MoKSA/PyBCT1NTRVNbMF07XG4gICAgY29uc3QgY3VycmVudEhQID0gdGhpcy5zZXR0aW5ncy5ib3NzQ3VycmVudEhQO1xuICAgIGNvbnN0IG1heEhQID0gdGhpcy5zZXR0aW5ncy5ib3NzTWF4SFA7XG4gICAgY29uc3QgcGVyY2VudCA9IG1heEhQID4gMCA/IE1hdGgucm91bmQoKGN1cnJlbnRIUCAvIG1heEhQKSAqIDEwMCkgOiAwO1xuICAgIGNvbnN0IHRpZXJDb2xvciA9IFJBTktfVElFUl9DT0xPUlNbdGllcl0gPz8gXCIjNkI3MjgwXCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9zcyxcbiAgICAgIGN1cnJlbnRIUCxcbiAgICAgIG1heEhQLFxuICAgICAgcGVyY2VudCxcbiAgICAgIHRpZXIsXG4gICAgICByYW5rOiBib3NzLnJhbmssXG4gICAgICB0aWVyQ29sb3IsXG4gICAgICBpblRhcnRhcnVzOiB0aGlzLnNldHRpbmdzLmluVGFydGFydXMsXG4gICAgICBpc0RhbmdlclpvbmU6IHRoaXMuaXNEYW5nZXJab25lKCksXG4gICAgfTtcbiAgfVxuXG4gIGlzRGFuZ2VyWm9uZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IGJvc3NDdXJyZW50SFAsIGJvc3NNYXhIUCB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBpZiAoYm9zc01heEhQIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKGJvc3NDdXJyZW50SFAgLyBib3NzTWF4SFApIDwgMC4xNTtcbiAgfVxuXG4gIGlzSW5UYXJ0YXJ1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzO1xuICB9XG5cbiAgZ2V0SFBDb2xvcihwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChwZXJjZW50ID4gNjApIHJldHVybiBcIiMyMmM1NWVcIjtcbiAgICBpZiAocGVyY2VudCA+IDMwKSByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgaWYgKHBlcmNlbnQgPiAxNSkgcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ29yZSBFbmdpbmVcbi8vIFByaW9yaXR5IGxvZ2ljLCBzdWdnZXN0aW9uIGFsZ29yaXRobSwgZGF5IG1hcCwgYW5hbHl0aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUge1xuICBPbGVuU2V0dGluZ3MsXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBDb21wbGV0aW9uLFxuICBDb21wbGV0aW9uTWFwLFxuICBEaXJlY3RpdmVTdWdnZXN0aW9uLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2F0ZWdvcnlMZXZlbCxcbiAgQ2F0ZWdvcnksXG4gIFByaW9yaXR5UmVhc29uLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIE5FR0xFQ1RfTE9SRSxcbiAgQ0hBUFRFUl9OQU1FUyxcbiAgU0lOR0xFX0RPTUlOQU5UX1RJVExFUyxcbiAgVFdPX0NBVEVHT1JZX1RJVExFUyxcbiAgQkFMQU5DRURfVElUTEVTLFxuICB0b1JvbWFuLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4vQm9zc0VuZ2luZVwiO1xuXG5leHBvcnQgY2xhc3MgT2xlbkVuZ2luZSB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcbiAgcHJpdmF0ZSBjb21wbGV0aW9uczogQ29tcGxldGlvbk1hcDtcbiAgcHJpdmF0ZSBub3c6IERhdGU7XG4gIHByaXZhdGUgdG9kYXk6IHN0cmluZztcbiAgcHJpdmF0ZSBib3NzRW5naW5lOiBCb3NzRW5naW5lO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGNvbXBsZXRpb25zOiBDb21wbGV0aW9uTWFwLCBub3c6IERhdGUpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5jb21wbGV0aW9ucyA9IGNvbXBsZXRpb25zO1xuICAgIHRoaXMubm93ID0gbm93O1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgdGhpcy50b2RheSA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5ib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gLS0tIEVmZmVjdGl2ZSBEYXRlIChzdXBwb3J0cyBzaW11bGF0ZWQgZGF0ZSArIHBhdXNlKSAtLS1cblxuICBwcml2YXRlIGdldEVmZmVjdGl2ZU5vdygpOiBEYXRlIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSB7XG4gICAgICBjb25zdCBzaW0gPSBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpO1xuICAgICAgc2ltLnNldEhvdXJzKDEyLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBzaW07XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiICYmIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWZmZWN0aXZlVG9kYXkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBkID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIERhdGEgQWNjZXNzIC0tLVxuXG4gIGdldEVuYWJsZWRBY3Rpdml0aWVzKCk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQpO1xuICB9XG5cbiAgZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRpb25zW2FjdGl2aXR5SWRdID8/IFtdO1xuICB9XG5cbiAgZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHlJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHRvZGF5TXMgPSBuZXcgRGF0ZShlZmZlY3RpdmVOb3cpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgY29uc3QgY29tcGxldGVkRGF0ZXMgPSBjb21wc1xuICAgICAgLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpXG4gICAgICAubWFwKChjKSA9PiBuZXcgRGF0ZShjLmRhdGUpLmdldFRpbWUoKSlcbiAgICAgIC5maWx0ZXIoKHQpID0+ICFpc05hTih0KSAmJiB0IDw9IHRvZGF5TXMpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuXG4gICAgaWYgKGNvbXBsZXRlZERhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDk5OTtcblxuICAgIGNvbnN0IG1zUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigodG9kYXlNcyAtIGNvbXBsZXRlZERhdGVzWzBdKSAvIG1zUGVyRGF5KTtcbiAgfVxuXG4gIGlzRG9uZVRvZGF5KGFjdGl2aXR5SWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZVRvZGF5ID0gdGhpcy5nZXRFZmZlY3RpdmVUb2RheSgpO1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIHJldHVybiBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGVmZmVjdGl2ZVRvZGF5ICYmIGMuY29tcGxldGVkKTtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgUHJvZ3Jlc3MgLS0tXG5cbiAgZ2V0V2Vla2x5UHJvZ3Jlc3MoYWN0aXZpdHlJZDogc3RyaW5nKTogeyBkb25lOiBudW1iZXI7IHRhcmdldDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybiB7IGRvbmU6IDAsIHRhcmdldDogMCB9O1xuXG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSB0aGlzLmdldFdlZWtTdGFydChlZmZlY3RpdmVOb3cpO1xuICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgIHdlZWtFbmQuc2V0RGF0ZSh3ZWVrRW5kLmdldERhdGUoKSArIDcpO1xuXG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZG9uZSA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICByZXR1cm4gZCA+PSB3ZWVrU3RhcnQgJiYgZCA8IHdlZWtFbmQ7XG4gICAgfSkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHsgZG9uZSwgdGFyZ2V0OiBhY3Rpdml0eS53ZWVrbHlUYXJnZXQgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2Vla1N0YXJ0KGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xuICAgIGNvbnN0IGRpZmYgPSBkLmdldERhdGUoKSAtIGRheSArIChkYXkgPT09IDAgPyAtNiA6IDEpOyAvLyBNb25kYXkgc3RhcnRcbiAgICBkLnNldERhdGUoZGlmZik7XG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICAvLyAtLS0gU3RyZWFrcyAtLS1cblxuICBnZXRBY3Rpdml0eVN0cmVhayhhY3Rpdml0eUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShlZmZlY3RpdmVOb3cpO1xuICAgIHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgY29uc3QgY29tcGxldGVkRGF0ZXMgPSBjb21wc1xuICAgICAgLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpXG4gICAgICAubWFwKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkKSA9PiAhaXNOYU4oZC5nZXRUaW1lKCkpICYmIGQgPD0gdG9kYXkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5nZXRUaW1lKCkgLSBhLmdldFRpbWUoKSk7XG5cbiAgICBpZiAoY29tcGxldGVkRGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcblxuICAgIGxldCBzdHJlYWsgPSAwO1xuICAgIGNvbnN0IGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGNvbXBsZXRlZERhdGVzWzBdKTtcbiAgICBmb3IgKGNvbnN0IGRhdGUgb2YgY29tcGxldGVkRGF0ZXMpIHtcbiAgICAgIGlmIChkYXRlLmdldFRpbWUoKSA9PT0gY2hlY2tEYXRlLmdldFRpbWUoKSkge1xuICAgICAgICBzdHJlYWsrKztcbiAgICAgICAgY2hlY2tEYXRlLnNldERhdGUoY2hlY2tEYXRlLmdldERhdGUoKSAtIDEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRlIDwgY2hlY2tEYXRlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyZWFrO1xuICB9XG5cbiAgZ2V0T3ZlcmFsbFN0cmVhaygpOiBudW1iZXIge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG4gICAgY29uc3Qgc3RyZWFrcyA9IGFjdGl2aXRpZXMubWFwKChhKSA9PiB0aGlzLmdldEFjdGl2aXR5U3RyZWFrKGEuaWQpKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgLi4uc3RyZWFrcyk7XG4gIH1cblxuICAvLyAtLS0gQW5hbHl0aWNzIC0tLVxuXG4gIGdldFRvdGFsQ29tcGxldGlvbnMoKTogbnVtYmVyIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICB0b3RhbCArPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIGdldERheXNPZlByZXNlbmNlKCk6IG51bWJlciB7XG4gICAgY29uc3QgZGF5c1NldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICBmb3IgKGNvbnN0IGMgb2YgY29tcHMpIHtcbiAgICAgICAgaWYgKGMuY29tcGxldGVkKSBkYXlzU2V0LmFkZChjLmRhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF5c1NldC5zaXplO1xuICB9XG5cbiAgLy8gLS0tIENhdGVnb3J5IFhQICYgTGV2ZWxzIC0tLVxuXG4gIGdldENhdGVnb3J5WFAoY2F0ZWdvcnk6IENhdGVnb3J5KTogbnVtYmVyIHtcbiAgICBjb25zdCB4cFBlciA9IHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbjtcbiAgICBsZXQgeHAgPSB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFBbY2F0ZWdvcnldID8/IDA7XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgaWYgKGFjdGl2aXR5LmNhdGVnb3J5ICE9PSBjYXRlZ29yeSkgY29udGludWU7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICB4cCA9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aCAqIHhwUGVyO1xuICAgIH1cbiAgICByZXR1cm4geHA7XG4gIH1cblxuICBnZXRDYXRlZ29yeUxldmVsKGNhdGVnb3J5OiBDYXRlZ29yeSk6IENhdGVnb3J5TGV2ZWwge1xuICAgIGNvbnN0IHhwID0gdGhpcy5nZXRDYXRlZ29yeVhQKGNhdGVnb3J5KTtcbiAgICBjb25zdCBsZXZlbCA9IE1hdGguZmxvb3IoeHAgLyAxMDApO1xuICAgIGNvbnN0IHByb2dyZXNzVG9OZXh0ID0geHAgJSAxMDA7XG4gICAgcmV0dXJuIHsgY2F0ZWdvcnksIHhwLCBsZXZlbCwgcHJvZ3Jlc3NUb05leHQgfTtcbiAgfVxuXG4gIGdldEFsbENhdGVnb3J5TGV2ZWxzKCk6IENhdGVnb3J5TGV2ZWxbXSB7XG4gICAgcmV0dXJuIChbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKS5tYXAoKGMpID0+IHRoaXMuZ2V0Q2F0ZWdvcnlMZXZlbChjKSk7XG4gIH1cblxuICBnZXRFdWRhaW1vbmlhSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wubGV2ZWwsIDApO1xuICB9XG5cbiAgZ2V0Q2hhcHRlcigpOiB7IG51bWJlcjogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuICAgIGNvbnN0IGNoYXB0ZXJOdW0gPSBNYXRoLm1pbigxMCwgTWF0aC5mbG9vcihpbmRleCAvIDEwKSArIDEpO1xuICAgIGNvbnN0IG5hbWUgPSBDSEFQVEVSX05BTUVTW2NoYXB0ZXJOdW1dID8/IFwiSW5pdGlhdGVcIjtcbiAgICByZXR1cm4geyBudW1iZXI6IGNoYXB0ZXJOdW0sIG5hbWUgfTtcbiAgfVxuXG4gIGdldEV1ZGFpbW9uaWFQcm9ncmVzcygpOiBudW1iZXIge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgICByZXR1cm4gKGluZGV4ICUgMTApICogMTA7IC8vIDAtMTAwIHByb2dyZXNzIHdpdGhpbiBjaGFwdGVyXG4gIH1cblxuICAvLyAtLS0gRHluYW1pYyBUaXRsZSAtLS1cblxuICBnZXREeW5hbWljVGl0bGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKSByZXR1cm4gdGhpcy5zZXR0aW5ncy50aXRsZU92ZXJyaWRlO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gdGhpcy5nZXRBbGxDYXRlZ29yeUxldmVscygpO1xuICAgIGNvbnN0IHRvdGFsU2Vzc2lvbnMgPSB0aGlzLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5Q29tcGxldGlvbnM6IFJlY29yZDxDYXRlZ29yeSwgbnVtYmVyPiA9IHsgYm9keTogMCwgbWluZDogMCwgc3Bpcml0OiAwIH07XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIGNhdGVnb3J5Q29tcGxldGlvbnNbYWN0aXZpdHkuY2F0ZWdvcnldICs9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbCA9IE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlDb21wbGV0aW9ucykucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgaWYgKHRvdGFsID09PSAwKSByZXR1cm4gXCJJbml0aWF0ZVwiO1xuXG4gICAgY29uc3Qgd2VpZ2h0czogUmVjb3JkPENhdGVnb3J5LCBudW1iZXI+ID0ge1xuICAgICAgYm9keTogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5ib2R5IC8gdG90YWwgOiAwLFxuICAgICAgbWluZDogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5taW5kIC8gdG90YWwgOiAwLFxuICAgICAgc3Bpcml0OiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLnNwaXJpdCAvIHRvdGFsIDogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgdGllciA9IHRvdGFsU2Vzc2lvbnMgPCA1MCA/IFwibGlnaHRcIiA6IHRvdGFsU2Vzc2lvbnMgPCAyMDAgPyBcIm1pZFwiIDogXCJoZWF2eVwiO1xuXG4gICAgLy8gQ2hlY2sgc2luZ2xlIGRvbWluYW50ICg+PSA3MCUpXG4gICAgZm9yIChjb25zdCBjYXQgb2YgW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSkge1xuICAgICAgaWYgKHdlaWdodHNbY2F0XSA+PSAwLjcwKSB7XG4gICAgICAgIHJldHVybiBTSU5HTEVfRE9NSU5BTlRfVElUTEVTW2NhdF0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYmFsYW5jZWQgKGFsbCA+PSAyNSUpXG4gICAgaWYgKHdlaWdodHMuYm9keSA+PSAwLjI1ICYmIHdlaWdodHMubWluZCA+PSAwLjI1ICYmIHdlaWdodHMuc3Bpcml0ID49IDAuMjUpIHtcbiAgICAgIHJldHVybiBCQUxBTkNFRF9USVRMRVNbdGllcl0gPz8gXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCI7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdHdvLWNhdGVnb3J5IGNvbWJpbmF0aW9ucyAoZWFjaCA+PSAzMCUpXG4gICAgY29uc3QgY2F0cyA9IChbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKVxuICAgICAgLmZpbHRlcigoYykgPT4gd2VpZ2h0c1tjXSA+PSAwLjMwKVxuICAgICAgLnNvcnQoKTtcblxuICAgIGlmIChjYXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3Qga2V5ID0gY2F0cy5qb2luKFwiK1wiKTtcbiAgICAgIHJldHVybiBUV09fQ0FURUdPUllfVElUTEVTW2tleV0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2s6IHVzZSBkb21pbmFudCBjYXRlZ29yeVxuICAgIGNvbnN0IGRvbWluYW50ID0gKE9iamVjdC5lbnRyaWVzKHdlaWdodHMpIGFzIFtDYXRlZ29yeSwgbnVtYmVyXVtdKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVswXVswXTtcbiAgICByZXR1cm4gU0lOR0xFX0RPTUlOQU5UX1RJVExFU1tkb21pbmFudF0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gIH1cblxuICAvLyAtLS0gU3VnZ2VzdGlvbiBBbGdvcml0aG0gKFdhdGVyZmFsbCkgLS0tXG5cbiAgZ2V0U3VnZ2VzdGlvbigpOiBEaXJlY3RpdmVTdWdnZXN0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcbiAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgLy8gMS4gREVBVEggQ0hFQ0tcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oYWN0aXZpdGllc1swXSwgXCJkZWF0aFwiLCBcIkVzY2FwZSBUYXJ0YXJ1cyBcdTIwMTQgY29tcGxldGUgeW91ciBwZW5hbmNlLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID49IDIpIHtcbiAgICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICAgIGlmIChuZWdsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24obmVnbGVjdGVkWzBdLCBcImRlYXRoXCIsIFwiRGVhdGggbG9vbXMuIEFjdCBub3cgb3IgZGVzY2VuZCB0byBUYXJ0YXJ1cy5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gQk9TUyBGSU5JU0hcbiAgICBpZiAodGhpcy5ib3NzRW5naW5lLmlzRGFuZ2VyWm9uZSgpKSB7XG4gICAgICBjb25zdCBiZXN0ID0gdGhpcy5nZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllcyk7XG4gICAgICBpZiAoYmVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oYmVzdCwgXCJib3NzXCIsIFwiT25lIGZpbmFsIGJsb3cgcmVtYWlucy4gRmluaXNoIHRoZSBiZWFzdC5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gTkVHTEVDVCArIFBSSU9SSVRZXG4gICAgY29uc3QgbmVnbGVjdGVkID0gdGhpcy5nZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXMpO1xuICAgIGlmIChuZWdsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wID0gdGhpcy5hcHBseVJ1bGVzKG5lZ2xlY3RlZCk7XG4gICAgICBpZiAodG9wKSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKHRvcC5pZCk7XG4gICAgICAgIGNvbnN0IGxvcmUgPSBORUdMRUNUX0xPUkVbdG9wLmlkXSA/PyBgJHtkYXlzfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gO1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odG9wLCBcIm5lZ2xlY3RcIiwgbG9yZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gV0VFS0xZIENBVENILVVQXG4gICAgY29uc3QgYmVoaW5kU2NoZWR1bGUgPSB0aGlzLmdldEJlaGluZFNjaGVkdWxlQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAoYmVoaW5kU2NoZWR1bGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wID0gYmVoaW5kU2NoZWR1bGVbMF07XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3ModG9wLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0b3AsIFwid2Vla2x5XCIsIGBCZWhpbmQgc2NoZWR1bGU6ICR7cHJvZ3Jlc3MuZG9uZX0vJHtwcm9ncmVzcy50YXJnZXR9IHRoaXMgd2Vlay5gKTtcbiAgICB9XG5cbiAgICAvLyA1LiBDSEFJTiBDSEVDS1xuICAgIGNvbnN0IGNoYWluZWQgPSB0aGlzLmdldENoYWluZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmIChjaGFpbmVkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihjaGFpbmVkWzBdLCBcImNoYWluXCIsIFwiWW91ciBwcmVyZXF1aXNpdGUgaXMgZG9uZS4gVGltZSBmb3IgdGhlIG5leHQgc3RlcC5cIik7XG4gICAgfVxuXG4gICAgLy8gNi4gVElNRS1CQVNFRFxuICAgIGNvbnN0IHRpbWVCYXNlZCA9IHRoaXMuZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAodGltZUJhc2VkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0aW1lQmFzZWRbMF0sIFwidGltZVwiLCBcIlRoZSB0aW1lIGlzIHJpZ2h0LiBCZWdpbi5cIik7XG4gICAgfVxuXG4gICAgLy8gNy4gQkFMQU5DRUQgRkFMTEJBQ0tcbiAgICBjb25zdCBsb25nZXN0R2FwID0gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShiLmlkKSAtIHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYS5pZCkpO1xuXG4gICAgaWYgKGxvbmdlc3RHYXAubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGxvbmdlc3RHYXBbMF0sIFwiYmFsYW5jZWRcIiwgXCJCYWxhbmNlIHlvdXIgcGF0aC4gVGhpcyBoYXMgd2FpdGVkIGxvbmdlc3QuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFN1Z2dlc3Rpb24oXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICAgIHJlYXNvbjogUHJpb3JpdHlSZWFzb24sXG4gICAgbG9yZVRleHQ6IHN0cmluZ1xuICApOiBEaXJlY3RpdmVTdWdnZXN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICByZWFzb24sXG4gICAgICBkYXlzU2luY2VMYXN0RG9uZTogdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eS5pZCksXG4gICAgICBsb3JlVGV4dCxcbiAgICAgIHByaW9yaXR5OiBhY3Rpdml0eS5wcmlvcml0eSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhLmlkKTtcbiAgICAgICAgcmV0dXJuIGRheXMgPj0gYS5uZWdsZWN0VGhyZXNob2xkICYmICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UnVsZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICAvLyBDaGVjayBhbHRlcm5hdGluZyBydWxlXG4gICAgICBpZiAoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpIHtcbiAgICAgICAgY29uc3QgYWx0RGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICBjb25zdCB0aGlzRGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgICAgICAvLyBJZiB0aGlzIHdhcyBkb25lIG1vcmUgcmVjZW50bHkgdGhhbiBhbHRlcm5hdGUsIHByZWZlciBhbHRlcm5hdGVcbiAgICAgICAgaWYgKHRoaXNEYXlzIDwgYWx0RGF5cykge1xuICAgICAgICAgIGNvbnN0IGFsdCA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCk7XG4gICAgICAgICAgaWYgKGFsdCAmJiBhbHQuZW5hYmxlZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhbHQuaWQpKSByZXR1cm4gYWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGJsb2NraW5nIHJ1bGVzXG4gICAgICBpZiAoYWN0aXZpdHkuYmxvY2tzICYmIGFjdGl2aXR5LmJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRoaXMgYWN0aXZpdHkgYmxvY2tzIG90aGVycyB3aGVuIG5lZ2xlY3RlZCBcdTIwMTQgaXQgc2hvdWxkIGJlIHByaW9yaXRpemVkXG4gICAgICAgIHJldHVybiBhY3Rpdml0eTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZpdGllc1swXSA/PyBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgY29uc3Qgbm90RG9uZSA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgaWYgKG5vdERvbmUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbm90RG9uZS5zb3J0KChhLCBiKSA9PiBiLmRhbWFnZVBlckNvbXBsZXRpb24gLSBhLmRhbWFnZVBlckNvbXBsZXRpb24pWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZWZmZWN0aXZlTm93LmdldERheSgpOyAvLyAwPVN1blxuICAgIGNvbnN0IGFkanVzdGVkRGF5ID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlazsgLy8gTW9uPTFcbiAgICBjb25zdCByZW1haW5pbmdEYXlzID0gNyAtIGFkanVzdGVkRGF5ICsgMTtcblxuICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyhhLmlkKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gcHJvZ3Jlc3MudGFyZ2V0IC0gcHJvZ3Jlc3MuZG9uZTtcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZyA+IDAgJiYgcmVtYWluaW5nID49IHJlbWFpbmluZ0RheXM7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKCFhLmNoYWluQWZ0ZXIgfHwgdGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuaXNEb25lVG9kYXkoYS5jaGFpbkFmdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgY29uc3QgaG91ciA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IGN1cnJlbnRQZXJpb2QgPSBob3VyIDwgbW9ybmluZ0VuZCA/IFwibW9ybmluZ1wiIDpcbiAgICAgIGhvdXIgPCBhZnRlcm5vb25FbmQgPyBcImFmdGVybm9vblwiIDpcbiAgICAgIGhvdXIgPCBldmVuaW5nRW5kID8gXCJldmVuaW5nXCIgOiBcImFueXRpbWVcIjtcblxuICAgIC8vIEZpcnN0IGNoZWNrIHRpbWUgb3ZlcnJpZGVzXG4gICAgY29uc3Qgb3ZlcnJpZGRlbiA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFhLnRpbWVPdmVycmlkZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGhvdXIgPj0gYS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyICYmIGhvdXIgPCBhLnRpbWVPdmVycmlkZS5lbmRIb3VyO1xuICAgIH0pO1xuICAgIGlmIChvdmVycmlkZGVuLmxlbmd0aCA+IDApIHJldHVybiBvdmVycmlkZGVuLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIC8vIFRoZW4gY2hlY2sgcHJlZmVycmVkIHRpbWVcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkgJiYgKGEucHJlZmVycmVkVGltZSA9PT0gY3VycmVudFBlcmlvZCB8fCBhLnByZWZlcnJlZFRpbWUgPT09IFwiYW55dGltZVwiKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICAvLyAtLS0gRGF5IE1hcCBHZW5lcmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgY2FsZW5kYXJFbnRyaWVzOiBEYXlNYXBFbnRyeVtdID0gW107XG5cbiAgc2V0Q2FsZW5kYXJFbnRyaWVzKGVudHJpZXM6IERheU1hcEVudHJ5W10pOiB2b2lkIHtcbiAgICB0aGlzLmNhbGVuZGFyRW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXREYXlNYXAoKTogRGF5TWFwRW50cnlbXSB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKS5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kLCBidWZmZXJNaW51dGVzIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IHRpbWVTbG90czogeyBwZXJpb2Q6IHN0cmluZzsgc3RhcnRIb3VyOiBudW1iZXI7IGVuZEhvdXI6IG51bWJlciB9W10gPSBbXG4gICAgICB7IHBlcmlvZDogXCJtb3JuaW5nXCIsIHN0YXJ0SG91cjogbW9ybmluZ1N0YXJ0LCBlbmRIb3VyOiBtb3JuaW5nRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJhZnRlcm5vb25cIiwgc3RhcnRIb3VyOiBtb3JuaW5nRW5kLCBlbmRIb3VyOiBhZnRlcm5vb25FbmQgfSxcbiAgICAgIHsgcGVyaW9kOiBcImV2ZW5pbmdcIiwgc3RhcnRIb3VyOiBhZnRlcm5vb25FbmQsIGVuZEhvdXI6IGV2ZW5pbmdFbmQgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgZW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gMS4gUGxhY2UgdGltZS1vdmVycmlkZSBhY3Rpdml0aWVzIGZpcnN0XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LnRpbWVPdmVycmlkZSkgY29udGludWU7XG4gICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgc3RhcnRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyLFxuICAgICAgICBlbmRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuZW5kSG91cixcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ0aW1lXCIsXG4gICAgICB9KTtcbiAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgIH1cblxuICAgIC8vIDIuIFBsYWNlIG5lZ2xlY3RlZCBhY3Rpdml0aWVzIGluIHRoZWlyIHByZWZlcnJlZCBzbG90c1xuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKVxuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBuZWdsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIm5lZ2xlY3RcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFBsYWNlIHJlbWFpbmluZyB3ZWVrbHktdGFyZ2V0IGFjdGl2aXRpZXNcbiAgICBjb25zdCByZW1haW5pbmcgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhc2NoZWR1bGVkLmhhcyhhLmlkKSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKGEuaWQpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MuZG9uZSA8IHByb2dyZXNzLnRhcmdldDtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZW1haW5pbmcpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIndlZWtseVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2NoZWR1bGVkLmFkZChhY3Rpdml0eS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgY2FsZW5kYXIgdGFzayBlbnRyaWVzXG4gICAgZm9yIChjb25zdCBjYWxFbnRyeSBvZiB0aGlzLmNhbGVuZGFyRW50cmllcykge1xuICAgICAgZW50cmllcy5wdXNoKGNhbEVudHJ5KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IGJ5IHN0YXJ0IHRpbWVcbiAgICBlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRIb3VyIC0gYi5zdGFydEhvdXIpO1xuXG4gICAgLy8gTWFyayBkb25lIGFjdGl2aXRpZXMgKG9ubHkgZm9yIG5vbi1jYWxlbmRhciBlbnRyaWVzKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayAmJiB0aGlzLmlzRG9uZVRvZGF5KGVudHJ5LmFjdGl2aXR5SWQpKSB7XG4gICAgICAgIGVudHJ5LnN0YXR1cyA9IFwiZG9uZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2xvdEZvckFjdGl2aXR5KFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdLFxuICAgIGV4aXN0aW5nOiBEYXlNYXBFbnRyeVtdLFxuICAgIGJ1ZmZlck1pbnV0ZXM6IG51bWJlclxuICApOiB7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfSB8IG51bGwge1xuICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbiAvIDYwO1xuICAgIGNvbnN0IGJ1ZmZlckhvdXJzID0gYnVmZmVyTWludXRlcyAvIDYwO1xuXG4gICAgLy8gRmluZCBwcmVmZXJyZWQgc2xvdFxuICAgIGNvbnN0IHByZWZlcnJlZFNsb3QgPSB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IGFjdGl2aXR5LnByZWZlcnJlZFRpbWUpXG4gICAgICA/PyB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IFwiYW55dGltZVwiKVxuICAgICAgPz8gdGltZVNsb3RzWzBdO1xuXG4gICAgLy8gRmluZCBmaXJzdCBhdmFpbGFibGUgdGltZSBpbiBwcmVmZXJyZWQgc2xvdFxuICAgIGxldCBjYW5kaWRhdGVTdGFydCA9IHByZWZlcnJlZFNsb3Quc3RhcnRIb3VyO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHByZWZlcnJlZFNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgY2FuZGlkYXRlU3RhcnQgPSBlbnRyeS5lbmRIb3VyICsgYnVmZmVySG91cnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FuZGlkYXRlRW5kID0gY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzO1xuICAgIGlmIChjYW5kaWRhdGVFbmQgPD0gcHJlZmVycmVkU2xvdC5lbmRIb3VyKSB7XG4gICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVFbmQgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgYW55IHNsb3RcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgdGltZVNsb3RzKSB7XG4gICAgICBpZiAoc2xvdCA9PT0gcHJlZmVycmVkU2xvdCkgY29udGludWU7XG4gICAgICBjYW5kaWRhdGVTdGFydCA9IHNsb3Quc3RhcnRIb3VyO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgICBpZiAoZW50cnkuc3RhcnRIb3VyIDwgc2xvdC5lbmRIb3VyICYmIGVudHJ5LmVuZEhvdXIgPiBjYW5kaWRhdGVTdGFydCkge1xuICAgICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIDw9IHNsb3QuZW5kSG91cikge1xuICAgICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVTdGFydCArIGR1cmF0aW9uSG91cnMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgRGF0YSBmb3IgQmFyIENoYXJ0IC0tLVxuXG4gIGdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTogQXJyYXk8eyBkYXk6IHN0cmluZzsgZGF0ZTogc3RyaW5nOyBjb21wbGV0aW9uczogTWFwPENhdGVnb3J5LCBudW1iZXI+IH0+IHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3QgZGF5cyA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgaSk7XG4gICAgICBjb25zdCBkYXRlU3RyID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGRheUNvbXBsZXRpb25zID0gbmV3IE1hcDxDYXRlZ29yeSwgbnVtYmVyPigpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGRhdGVTdHIgJiYgYy5jb21wbGV0ZWQpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYXlDb21wbGV0aW9ucy5nZXQoYWN0aXZpdHkuY2F0ZWdvcnkpID8/IDA7XG4gICAgICAgICAgZGF5Q29tcGxldGlvbnMuc2V0KGFjdGl2aXR5LmNhdGVnb3J5LCBjdXJyZW50ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goeyBkYXk6IGRheXNbaV0sIGRhdGU6IGRhdGVTdHIsIGNvbXBsZXRpb25zOiBkYXlDb21wbGV0aW9ucyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk6IG51bWJlciB7XG4gICAgY29uc3Qgd2Vla2x5ID0gdGhpcy5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gICAgcmV0dXJuIHdlZWtseS5maWx0ZXIoKGQpID0+IHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICByZXR1cm4gdG90YWwgPiAwO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuXG4gIGdldEJlc3REYXlUaGlzV2VlaygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIGxldCBiZXN0ID0gd2Vla2x5WzBdO1xuICAgIGxldCBiZXN0VG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgZCBvZiB3ZWVrbHkpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICBpZiAodG90YWwgPiBiZXN0VG90YWwpIHtcbiAgICAgICAgYmVzdFRvdGFsID0gdG90YWw7XG4gICAgICAgIGJlc3QgPSBkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVzdFRvdGFsID4gMCA/IGJlc3QuZGF5IDogXCItLVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDYWxlbmRhciBFbmdpbmVcbi8vIFJlYWRzIHRhc2tzIGZyb20gRGFpbHkgTm90ZXMsIFRhc2tzIHBsdWdpbiwgYW5kIFF1aWNrIFRhc2tzXG4vLyBNZXJnZXMgdGhlbSBpbnRvIENhbGVuZGFyVGFza1tdIGZvciBEYXkgTWFwIGludGVncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7XG4gIE9sZW5TZXR0aW5ncyxcbiAgQ2FsZW5kYXJUYXNrLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2FsZW5kYXJUYXNrU291cmNlLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRW5naW5lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuICBwcml2YXRlIHRvZGF5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIG5vdzogRGF0ZSkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRoaXMudG9kYXkgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIE1haW4gZW50cnk6IGdldCBhbGwgY2FsZW5kYXIgdGFza3MgZm9yIHRvZGF5IC0tLVxuXG4gIGdldEFsbFRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXREYWlseU5vdGVUYXNrcygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFRhc2tzUGx1Z2luVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFF1aWNrVGFza3MoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIENvbnZlcnQgQ2FsZW5kYXJUYXNrcyB0byBEYXlNYXBFbnRyaWVzIC0tLVxuXG4gIHRvRGF5TWFwRW50cmllcyh0YXNrczogQ2FsZW5kYXJUYXNrW10pOiBEYXlNYXBFbnRyeVtdIHtcbiAgICByZXR1cm4gdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBzdGFydEhvdXIgPSB0YXNrLnRpbWUgPyB0aGlzLnBhcnNlVGltZVRvSG91cih0YXNrLnRpbWUpIDogOTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSAodGFzay5kdXJhdGlvbiA/PyAzMCkgLyA2MDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZpdHlJZDogYGNhbC0ke3Rhc2suaWR9YCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiB0YXNrLnRpdGxlLFxuICAgICAgICBlbW9qaTogdGhpcy5nZXRTb3VyY2VFbW9qaSh0YXNrLnNvdXJjZSksXG4gICAgICAgIGNhdGVnb3J5OiBcIm1pbmRcIiBhcyBjb25zdCwgLy8gY2FsZW5kYXIgdGFza3MgZGVmYXVsdCB0byBtaW5kXG4gICAgICAgIHN0YXJ0SG91cixcbiAgICAgICAgZW5kSG91cjogc3RhcnRIb3VyICsgZHVyYXRpb25Ib3VycyxcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IHRhc2suZHVyYXRpb24gPz8gMzAsXG4gICAgICAgIHN0YXR1czogdGFzay5kb25lID8gXCJkb25lXCIgYXMgY29uc3QgOiBcInBlbmRpbmdcIiBhcyBjb25zdCxcbiAgICAgICAgaXNDYWxlbmRhclRhc2s6IHRydWUsXG4gICAgICAgIGNhbGVuZGFyU291cmNlOiB0YXNrLnNvdXJjZSxcbiAgICAgICAgY2FsZW5kYXJUYXNrSWQ6IHRhc2suaWQsXG4gICAgICAgIGZpbGVQYXRoOiB0YXNrLmZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiB0YXNrLmxpbmVOdW1iZXIsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBBOiBEYWlseSBOb3RlcyBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGdldERhaWx5Tm90ZVRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBmb2xkZXIgPSB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXI7XG4gICAgaWYgKCFmb2xkZXIpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBGaW5kIHRvZGF5J3MgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IGRhaWx5Tm90ZSA9IGZpbGVzLmZpbmQoKGYpID0+IHtcbiAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBmLmJhc2VuYW1lID09PSB0aGlzLnRvZGF5O1xuICAgIH0pO1xuXG4gICAgaWYgKCFkYWlseU5vdGUpIHJldHVybiBbXTtcblxuICAgIC8vIFJlYWQgY2FjaGVkIGNvbnRlbnQgYW5kIHBhcnNlIHRhc2tzXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShkYWlseU5vdGUpO1xuICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgaWYgKGxpc3RJdGVtLnRhc2sgPT09IHVuZGVmaW5lZCkgY29udGludWU7IC8vIG5vdCBhIGNoZWNrYm94XG5cbiAgICAgIGNvbnN0IGxpbmVTdGFydCA9IGxpc3RJdGVtLnBvc2l0aW9uLnN0YXJ0LmxpbmU7XG5cbiAgICAgIC8vIFJlYWQgdGhlIGxpbmUgY29udGVudCBmcm9tIGNhY2hlIHNlY3Rpb25zXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRMaW5lQ29udGVudChkYWlseU5vdGUsIGxpbmVTdGFydCk7XG4gICAgICBpZiAoIWNvbnRlbnQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUoY29udGVudCk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICBpZDogYGRuLSR7ZGFpbHlOb3RlLnBhdGh9LUwke2xpbmVTdGFydH1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogbGlzdEl0ZW0udGFzayA9PT0gXCJ4XCIgfHwgbGlzdEl0ZW0udGFzayA9PT0gXCJYXCIsXG4gICAgICAgIGZpbGVQYXRoOiBkYWlseU5vdGUucGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogbGluZVN0YXJ0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gUGFyc2UgXCItIFsgXSBUYXNrIG5hbWUgQDE0OjAwIH4zMG1cIiBmb3JtYXRcbiAgcHJpdmF0ZSBwYXJzZVRhc2tMaW5lKGxpbmU6IHN0cmluZyk6IHsgdGl0bGU6IHN0cmluZzsgdGltZT86IHN0cmluZzsgZHVyYXRpb24/OiBudW1iZXIgfSB8IG51bGwge1xuICAgIC8vIFJlbW92ZSBjaGVja2JveCBwcmVmaXg6IFwiLSBbIF0gXCIgb3IgXCItIFt4XSBcIlxuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXlstKl1cXHMqXFxbLj9cXF1cXHMqKC4rKSQvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0ZXh0ID0gbWF0Y2hbMV0udHJpbSgpO1xuXG4gICAgLy8gRXh0cmFjdCBAdGltZSAoZS5nLiwgQDE0OjAwIG9yIEAycG0pXG4gICAgbGV0IHRpbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB0aW1lTWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AKFxcZHsxLDJ9KTooXFxkezJ9KVxcYi8pO1xuICAgIGlmICh0aW1lTWF0Y2gpIHtcbiAgICAgIHRpbWUgPSBgJHt0aW1lTWF0Y2hbMV0ucGFkU3RhcnQoMiwgXCIwXCIpfToke3RpbWVNYXRjaFsyXX1gO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSh0aW1lTWF0Y2hbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJ5IEAycG0gLyBAMTQgZm9ybWF0XG4gICAgICBjb25zdCBzaW1wbGVUaW1lID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSlcXHMqKGFtfHBtKT9cXGIvaSk7XG4gICAgICBpZiAoc2ltcGxlVGltZSkge1xuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KHNpbXBsZVRpbWVbMV0pO1xuICAgICAgICBjb25zdCBwZXJpb2QgPSBzaW1wbGVUaW1lWzJdPy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcInBtXCIgJiYgaG91ciA8IDEyKSBob3VyICs9IDEyO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcImFtXCIgJiYgaG91ciA9PT0gMTIpIGhvdXIgPSAwO1xuICAgICAgICB0aW1lID0gYCR7U3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsIFwiMFwiKX06MDBgO1xuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHNpbXBsZVRpbWVbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IH5kdXJhdGlvbiAoZS5nLiwgfjMwbSwgfjFoLCB+MS41aClcbiAgICBsZXQgZHVyYXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBkdXJhdGlvbk1hdGNoID0gdGV4dC5tYXRjaCgvfihcXGQrKD86XFwuXFxkKyk/KVxccyoobXxtaW58aHxocnxob3VyKXM/XFxiL2kpO1xuICAgIGlmIChkdXJhdGlvbk1hdGNoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoZHVyYXRpb25NYXRjaFsxXSk7XG4gICAgICBjb25zdCB1bml0ID0gZHVyYXRpb25NYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgZHVyYXRpb24gPSB1bml0LnN0YXJ0c1dpdGgoXCJoXCIpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIDYwKSA6IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShkdXJhdGlvbk1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgYW55IHRyYWlsaW5nL2xlYWRpbmcgd2hpdGVzcGFjZSBvciBkYXNoZXNcbiAgICBjb25zdCB0aXRsZSA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xuICAgIGlmICghdGl0bGUpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHRpbWUsIGR1cmF0aW9uIH07XG4gIH1cblxuICBwcml2YXRlIGdldExpbmVDb250ZW50KGZpbGU6IFRGaWxlLCBsaW5lTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBVc2UgdGhlIG1ldGFkYXRhQ2FjaGUgc2VjdGlvbnMgdG8gcmVjb25zdHJ1Y3QgbGluZSBjb250ZW50XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBpZiAoIWNhY2hlKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIFdlIG5lZWQgdG8gcmVhZCBmcm9tIHRoZSB2YXVsdCBjYWNoZSBcdTIwMTQgdHJ5IGdldHRpbmcgY29udGVudCB2aWEgc2VjdGlvbnNcbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBzeW5jaHJvbm91c2x5IHJlYWQgZmlsZSBjb250ZW50LCB1c2UgdGhlIGNhY2hlZCBmcm9udG1hdHRlclxuICAgIC8vIGFuZCBsaXN0IGl0ZW1zIHRvIGJ1aWxkIHdoYXQgd2UgbmVlZFxuICAgIC8vIEFjdHVhbGx5LCBsaXN0IGl0ZW1zIGluIE9ic2lkaWFuIGNhY2hlIGRvbid0IGluY2x1ZGUgdGhlIHRleHQuXG4gICAgLy8gV2UnbGwgbmVlZCB0byByZWFkIHRoZSBmaWxlIGNvbnRlbnQuIFN0b3JlIGl0IGluIGEgbWFwIGR1cmluZyBnYXRoZXIgcGhhc2UuXG4gICAgLy8gRm9yIG5vdywgcmV0dXJuIG51bGwgXHUyMDE0IHRoZSBEYXNoYm9hcmRWaWV3IHdpbGwgcHJlLXJlYWQgZGFpbHkgbm90ZSBjb250ZW50XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDYWxsZWQgYnkgRGFzaGJvYXJkVmlldyB3aXRoIHByZS1yZWFkIGZpbGUgY29udGVudFxuICBnZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQ6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZyk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAvLyBNYXRjaCB0YXNrIGxpbmVzOiAtIFsgXSBvciAtIFt4XVxuICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2ZpbGVQYXRofS1MJHtpfWAsXG4gICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJkYWlseS1ub3RlXCIsXG4gICAgICAgIGRhdGU6IHRoaXMudG9kYXksXG4gICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBpc0RvbmUsXG4gICAgICAgIGZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiBpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW4gSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXRUYXNrc1BsdWdpblRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICAvLyBDaGVjayBpZiBUYXNrcyBwbHVnaW4gaXMgaW5zdGFsbGVkXG4gICAgY29uc3QgdGFza3NQbHVnaW4gPSAodGhpcy5hcHAgYXMgYW55KS5wbHVnaW5zPy5wbHVnaW5zPy5bXCJvYnNpZGlhbi10YXNrcy1wbHVnaW5cIl07XG4gICAgaWYgKCF0YXNrc1BsdWdpbikgcmV0dXJuIFtdO1xuXG4gICAgLy8gVGFza3MgcGx1Z2luIHN0b3JlcyB0YXNrcyB2aWEgbWV0YWRhdGEgY2FjaGVcbiAgICAvLyBXZSBzY2FuIGFsbCBmaWxlcyBmb3IgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgbWF0Y2hpbmcgdG9kYXlcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgY29udGludWU7XG5cbiAgICAgIGZvciAoY29uc3QgbGlzdEl0ZW0gb2YgY2FjaGUubGlzdEl0ZW1zKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFRhc2tzIHBsdWdpbiB1c2VzIGVtb2ppLWJhc2VkIGRhdGVzIGluIHRoZSB0ZXh0OlxuICAgICAgICAvLyBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERCBmb3IgZHVlIGRhdGVcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZWFkIHRoZSBmaWxlIHRvIGNoZWNrLCBidXQgd2UgY2FuIHVzZSB0aGUgZnJvbnRtYXR0ZXItYmFzZWRcbiAgICAgICAgLy8gYXBwcm9hY2ggb3IgdGhlIHBvc2l0aW9uIHRvIGdldCB0aGUgdGV4dC5cbiAgICAgICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luYy1yZWFkLCB3ZSdsbCBjaGVjayBpZiBwb3NpdGlvbnMgbWVudGlvbiB0b2RheS5cbiAgICAgICAgLy8gRm9yIG5vdywgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IGNoZWNrIHVzaW5nIGNhY2hlIGRhdGEuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtc2Nhbm5lZCB0YXNrIGRhdGFcbiAgZ2V0VGFza3NQbHVnaW5UYXNrc0Zyb21GaWxlcyhmaWxlczogeyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9W10pOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGxpbmVzID0gZmlsZS5jb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBUYXNrcyBwbHVnaW4gZHVlIGRhdGU6IFx1RDgzRFx1RENDNSBZWVlZLU1NLUREXG4gICAgICAgIGNvbnN0IGR1ZU1hdGNoID0gbGluZS5tYXRjaCgvXFx1ezFGNEM1fVxccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoIWR1ZU1hdGNoIHx8IGR1ZU1hdGNoWzFdICE9PSB0aGlzLnRvZGF5KSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICAgIGlmICghcGFyc2VkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBBbHNvIGNoZWNrIGZvciBzY2hlZHVsZWQgZGF0ZSBcdTIzRjNcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVkTWF0Y2ggPSBsaW5lLm1hdGNoKC9cXHUyM0YzXFxzKihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvdSk7XG4gICAgICAgIGlmIChzY2hlZHVsZWRNYXRjaCAmJiBzY2hlZHVsZWRNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgaXNEb25lID0gL15bLSpdXFxzKlxcW1t4WF1cXF0vLnRlc3QobGluZSk7XG5cbiAgICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgICAgaWQ6IGB0cC0ke2ZpbGUucGF0aH0tTCR7aX1gLFxuICAgICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUucmVwbGFjZSgvW1xcdXsxRjRDNX1cXHUyM0YzXVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS9ndSwgXCJcIikudHJpbSgpLFxuICAgICAgICAgIHNvdXJjZTogXCJ0YXNrcy1wbHVnaW5cIixcbiAgICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBDOiBCdWlsdC1pbiBRdWljayBUYXNrcyAtLS1cblxuICBwcml2YXRlIGdldFF1aWNrVGFza3MoKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgIC5maWx0ZXIoKHF0KSA9PiBxdC5kYXRlID09PSB0aGlzLnRvZGF5KVxuICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgIGlkOiBgcXQtJHtxdC5pZH1gLFxuICAgICAgICB0aXRsZTogcXQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgQ2FsZW5kYXJUYXNrU291cmNlLFxuICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICB0aW1lOiBxdC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcXQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICB9KSk7XG4gIH1cblxuICAvLyAtLS0gQ29tcGxldGlvbiBoYW5kbGVycyAtLS1cblxuICAvLyBUb2dnbGUgYSBkYWlseSBub3RlIHRhc2sgZG9uZS91bmRvbmUgYnkgcmV3cml0aW5nIHRoZSBjaGVja2JveFxuICBhc3luYyB0b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoOiBzdHJpbmcsIGxpbmVOdW1iZXI6IG51bWJlciwgZG9uZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgIGlmIChsaW5lTnVtYmVyID49IGxpbmVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVOdW1iZXJdO1xuICAgIGlmIChkb25lKSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiW3hdXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiWyBdXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBsaW5lcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBhIFRhc2tzIHBsdWdpbiB0YXNrXG4gIGFzeW5jIHRvZ2dsZVRhc2tzUGx1Z2luVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBTYW1lIG1lY2hhbmlzbSBhcyBkYWlseSBub3RlcyBcdTIwMTQganVzdCB0b2dnbGUgdGhlIGNoZWNrYm94XG4gICAgYXdhaXQgdGhpcy50b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoLCBsaW5lTnVtYmVyLCBkb25lKTtcbiAgfVxuXG4gIC8vIFBvc3Rwb25lIGEgdGFzayB0byB0b21vcnJvd1xuICBhc3luYyBwb3N0cG9uZVRhc2sodGFzazogQ2FsZW5kYXJUYXNrKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0aGlzLnRvZGF5KTtcbiAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuICAgIGNvbnN0IHRvbW9ycm93U3RyID0gdG9tb3Jyb3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICBpZiAodGFzay5zb3VyY2UgPT09IFwicXVpY2stdGFza1wiKSB7XG4gICAgICAvLyBVcGRhdGUgaW4gc2V0dGluZ3NcbiAgICAgIGNvbnN0IHF0ID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbmQoXG4gICAgICAgIChxKSA9PiBgcXQtJHtxLmlkfWAgPT09IHRhc2suaWQgfHwgcS5pZCA9PT0gdGFzay5pZC5yZXBsYWNlKFwicXQtXCIsIFwiXCIpXG4gICAgICApO1xuICAgICAgaWYgKHF0KSB7XG4gICAgICAgIHF0LnBvc3Rwb25lZEZyb20gPSBxdC5wb3N0cG9uZWRGcm9tID8/IHF0LmRhdGU7XG4gICAgICAgIHF0LmRhdGUgPSB0b21vcnJvd1N0cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhc2suc291cmNlID09PSBcInRhc2tzLXBsdWdpblwiICYmIHRhc2suZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0YXNrLmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZmlsZVxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0YXNrLmZpbGVQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgIGlmICh0YXNrLmxpbmVOdW1iZXIgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgbGluZXNbdGFzay5saW5lTnVtYmVyXSA9IGxpbmVzW3Rhc2subGluZU51bWJlcl0ucmVwbGFjZShcbiAgICAgICAgICAvXFx1ezFGNEM1fVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS91LFxuICAgICAgICAgIGBcXHV7MUY0QzV9ICR7dG9tb3Jyb3dTdHJ9YFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEhlbHBlcnMgLS0tXG5cbiAgcHJpdmF0ZSBwYXJzZVRpbWVUb0hvdXIodGltZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBbaCwgbV0gPSB0aW1lLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gaCArIChtID8/IDApIC8gNjA7XG4gIH1cblxuICBwcml2YXRlIGdldFNvdXJjZUVtb2ppKHNvdXJjZTogQ2FsZW5kYXJUYXNrU291cmNlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogcmV0dXJuIFwiXFx1ezFGNEREfVwiO1xuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOiByZXR1cm4gXCJcXHUyNjExXFx1RkUwRlwiO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogcmV0dXJuIFwiXFx1MjZBMVwiO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgSGVybyBDYXJkIENvbXBvbmVudFxuLy8gRnVsbC13aWR0aCBibHVycmVkIGJnIHdpdGggZ3JlZXRpbmcsIHJhbmsgYmFkZ2UsIGFjdGlvbiBidXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5pbXBvcnQgeyB0b1JvbWFuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVyb0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBoZXJvID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm9cIiB9KTtcbiAgaGVyby5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gQmFja2dyb3VuZCBpbWFnZVxuICBpZiAoc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpIHtcbiAgICBjb25zdCBiZyA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1iZ1wiIH0pO1xuICAgIGNvbnN0IHZhdWx0UGF0aCA9IHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kO1xuICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3ZhdWx0UGF0aH1cIilgO1xuICB9XG5cbiAgLy8gRGFyayB2aWduZXR0ZSBvdmVybGF5XG4gIGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1vdmVybGF5XCIgfSk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWNvbnRlbnRcIiB9KTtcblxuICAvLyBUaW1lLWJhc2VkIGdyZWV0aW5nXG4gIGNvbnN0IGdyZWV0aW5nID0gZ2V0R3JlZXRpbmcoc2V0dGluZ3MpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWdyZWV0aW5nXCIsXG4gICAgdGV4dDogYCR7Z3JlZXRpbmd9LCAke3NldHRpbmdzLnVzZXJOYW1lfS5gLFxuICB9KTtcblxuICAvLyBDb250ZXh0dWFsIHN1YnRpdGxlXG4gIGNvbnN0IHN1YnRpdGxlID0gZ2V0U3VidGl0bGUoc2V0dGluZ3MsIGVuZ2luZSk7XG4gIGNvbnRlbnQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tc3VidGl0bGVcIixcbiAgICB0ZXh0OiBzdWJ0aXRsZSxcbiAgfSk7XG5cbiAgLy8gUmFuayBiYWRnZSBwaWxsXG4gIGNvbnN0IHRpdGxlID0gZW5naW5lLmdldER5bmFtaWNUaXRsZSgpO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgY29uc3QgYmFkZ2UgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tcmFuay1iYWRnZVwiIH0pO1xuICBiYWRnZS5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tcmFuay10ZXh0XCIsXG4gICAgdGV4dDogYCR7dGl0bGV9IFx1MDBCNyAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYWN0aW9uc1wiIH0pO1xuXG4gIGNvbnN0IHByb2dyZXNzQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIllvdXIgcHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBldWRhaW1vbmlhIHNlY3Rpb25cbiAgICBjb25zdCBldWRTZWN0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1jYXJkXCIpO1xuICAgIGlmIChldWRTZWN0aW9uKSBldWRTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlZmxlY3RCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWJ0blwiLFxuICAgIHRleHQ6IFwiUmVmbGVjdFwiLFxuICB9KTtcbiAgcmVmbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgcXVvdGUgc2VjdGlvblxuICAgIGNvbnN0IHF1b3RlU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVvdGVcIik7XG4gICAgaWYgKHF1b3RlU2VjdGlvbikgcXVvdGVTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmVldGluZyhzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgY29uc3QgbGFiZWxzID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscztcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpO1xuXG4gIGlmIChob3VyID49IDUgJiYgaG91ciA8IDEyKSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX21vcm5pbmcgPz8gXCJHb29kIG1vcm5pbmdcIjtcbiAgaWYgKGhvdXIgPj0gMTIgJiYgaG91ciA8IDE3KSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX2FmdGVybm9vbiA/PyBcIkdvb2QgYWZ0ZXJub29uXCI7XG4gIGlmIChob3VyID49IDE3ICYmIGhvdXIgPCAyMSkgcmV0dXJuIGxhYmVscy5ncmVldGluZ19ldmVuaW5nID8/IFwiR29vZCBldmVuaW5nXCI7XG4gIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfbmlnaHQgPz8gXCJHb29kIG5pZ2h0XCI7XG59XG5cbmZ1bmN0aW9uIGdldFN1YnRpdGxlKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGVuZ2luZTogT2xlbkVuZ2luZSk6IHN0cmluZyB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG5cbiAgLy8gVGFydGFydXNcbiAgaWYgKHNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICByZXR1cm4gXCJUaGUgdW5kZXJ3b3JsZCBhd2FpdHMgeW91ciBwZW5hbmNlLlwiO1xuICB9XG5cbiAgLy8gQm9zcyBkYW5nZXIgem9uZVxuICBpZiAoYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgIHJldHVybiBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuXCI7XG4gIH1cblxuICAvLyBBY3RpdmUgc3RyZWFrXG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGlmIChzdHJlYWsgPj0gMykge1xuICAgIHJldHVybiBgJHtzdHJlYWt9IGRheXMgc3Ryb25nLiBLZWVwIHRoZSBmbGFtZS5gO1xuICB9XG5cbiAgLy8gRGVmYXVsdFxuICByZXR1cm4gXCJTdGVwIGJ5IHN0ZXAsIHlvdSBzaGFwZSB5b3VyIHBhdGguXCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBFdWRhaW1vbmlhIEJhciBDb21wb25lbnRcbi8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXIsIHN0YXQgY2FyZHMsIGNhdGVnb3J5IHJvd3Mgd2l0aCBpY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQ0FURUdPUllfSUNPTlM6IFJlY29yZDxDYXRlZ29yeSwgc3RyaW5nPiA9IHtcbiAgYm9keTogXCJcXHV7MUYzQ0J9XCIsIC8vIHdlaWdodGxpZnRlclxuICBtaW5kOiBcIlxcdXsxRjREQX1cIiwgLy8gYm9va3NcbiAgc3Bpcml0OiBcIlxcdXsxRjU0QX1cIiwgLy8gZG92ZVxufTtcblxuY29uc3QgVE9UQUxfU0VHTUVOVFMgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFCYXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICAvLyAtLS0gMS4gRXVkYWltb25pYSBDYXJkIChzZWdtZW50ZWQgYmFyICsgY2hhcHRlcikgLS0tXG4gIHJlbmRlckV1ZGFpbW9uaWFDYXJkKGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlckluZGV4KTtcblxuICAvLyAtLS0gMi4gU3RhdCBDYXJkcyBSb3cgKHNlcGFyYXRlIGZyb20gdGhlIGNhcmQpIC0tLVxuICByZW5kZXJTdGF0Q2FyZHMoY29udGFpbmVyLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDEpO1xuXG4gIC8vIC0tLSAzLiBDYXRlZ29yaWVzIENhcmQgKGljb24gcm93cyB3aXRoIGJhcnMpIC0tLVxuICByZW5kZXJDYXRlZ29yaWVzQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDIpO1xufVxuXG4vLyAtLS0tIEV1ZGFpbW9uaWEgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEhlYWRlcjogdGl0bGUgKyBYUFxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtaGVhZGVyXCIgfSk7XG4gIGNvbnN0IGV1ZEluZGV4ID0gZW5naW5lLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuXG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS10aXRsZVwiLFxuICAgIHRleHQ6IGBFdWRhaW1vbmlhICR7dG9Sb21hbihldWRJbmRleCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG90YWxYUCA9IGVuZ2luZS5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wueHAsIDApO1xuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEteHBcIixcbiAgICB0ZXh0OiBgJHt0b3RhbFhQfSBYUGAsXG4gIH0pO1xuXG4gIC8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBlbmdpbmUuZ2V0RXVkYWltb25pYVByb2dyZXNzKCk7IC8vIDAtMTAwXG4gIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcihwcm9ncmVzcyAvIFRPVEFMX1NFR01FTlRTKTtcbiAgY29uc3QgaGFzUGFydGlhbCA9IHByb2dyZXNzICUgVE9UQUxfU0VHTUVOVFMgPiAwO1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRzXCIgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUT1RBTF9TRUdNRU5UUzsgaSsrKSB7XG4gICAgbGV0IGNscyA9IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRcIjtcbiAgICBpZiAoaSA8IGZpbGxlZFNlZ21lbnRzKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtZmlsbGVkXCI7XG4gICAgfSBlbHNlIGlmIChpID09PSBmaWxsZWRTZWdtZW50cyAmJiBoYXNQYXJ0aWFsKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtcGFydGlhbFwiO1xuICAgIH1cbiAgICBzZWdtZW50cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gIH1cblxuICAvLyBDaGFwdGVyIGxhYmVsXG4gIGNvbnN0IGNoYXB0ZXIgPSBlbmdpbmUuZ2V0Q2hhcHRlcigpO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWNoYXB0ZXJcIixcbiAgICB0ZXh0OiBgQ2hhcHRlciAke3RvUm9tYW4oY2hhcHRlci5udW1iZXIpfTogJHtjaGFwdGVyLm5hbWV9YCxcbiAgfSk7XG59XG5cbi8vIC0tLS0gU3RhdCBDYXJkcyAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclN0YXRDYXJkcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdHMtZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCB0b3RhbFRhc2tzID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcbiAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldE92ZXJhbGxTdHJlYWsoKTtcbiAgY29uc3QgcHJlc2VuY2UgPSBlbmdpbmUuZ2V0RGF5c09mUHJlc2VuY2UoKTtcblxuICAvLyBPYmplY3RpdmVzIGNhcmRcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUYzQUZ9XCIsIHRvdGFsVGFza3MsIFwiT2JqZWN0aXZlc1wiKTtcblxuICAvLyBTdHJlYWsgY2FyZCAod2l0aCBzdHJlYWsgZG90cylcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUY1MjV9XCIsIHN0cmVhaywgXCJTdHJlYWtcIiwgc3RyZWFrKTtcblxuICAvLyBDb25zaXN0ZW5jeSBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezI3Mjh9XCIsIHByZXNlbmNlLCBcIkNvbnNpc3RlbmN5XCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0Q2FyZChcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgaWNvbjogc3RyaW5nLFxuICB2YWx1ZTogbnVtYmVyLFxuICBsYWJlbDogc3RyaW5nLFxuICBzdHJlYWtEYXlzPzogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zdGF0LWNhcmRcIiB9KTtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWljb25cIiwgdGV4dDogaWNvbiB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC12YWx1ZVwiLCB0ZXh0OiBTdHJpbmcodmFsdWUpIH0pO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFN0cmVhayBkb3RzIChzaG93IGxhc3QgNyBkYXlzKVxuICBpZiAoc3RyZWFrRGF5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG90cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWRvdHNcIiB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgbGV0IGNscyA9IFwib2xlbi1zdGF0LWRvdFwiO1xuICAgICAgaWYgKGkgPCBzdHJlYWtEYXlzKSB7XG4gICAgICAgIGNscyArPSBcIiBvbGVuLXN0YXQtZG90LWFjdGl2ZVwiO1xuICAgICAgfVxuICAgICAgZG90cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0gQ2F0ZWdvcmllcyBDYXJkIC0tLS1cblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllc0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gRHluYW1pYyB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWR5bmFtaWMtdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG5cbiAgLy8gRGl2aWRlclxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBDYXRlZ29yeSByb3dzXG4gIGNvbnN0IGdyaWQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3JpZXMtZ3JpZFwiIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICB7IGtleTogXCJtaW5kXCIsIGxhYmVsOiBcIk1pbmRcIiB9LFxuICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICBdO1xuXG4gIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9IGVuZ2luZS5nZXRDYXRlZ29yeUxldmVsKGNhdC5rZXkpO1xuICAgIGNvbnN0IGNvbG9yID0gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV07XG5cbiAgICBjb25zdCByb3cgPSBncmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LXJvd1wiIH0pO1xuXG4gICAgLy8gSWNvbiBib3hcbiAgICBjb25zdCBpY29uQm94ID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWljb25cIiB9KTtcbiAgICBpY29uQm94LnN0eWxlLmJhY2tncm91bmQgPSBgJHtjb2xvcn0yMmA7IC8vIDEzJSBvcGFjaXR5IHRpbnRcbiAgICBpY29uQm94LnRleHRDb250ZW50ID0gQ0FURUdPUllfSUNPTlNbY2F0LmtleV07XG5cbiAgICAvLyBJbmZvIGNvbHVtblxuICAgIGNvbnN0IGluZm8gPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktaW5mb1wiIH0pO1xuXG4gICAgLy8gTmFtZSArIGxldmVsIHJvd1xuICAgIGNvbnN0IG5hbWVSb3cgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LW5hbWUtcm93XCIgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lXCIsIHRleHQ6IGNhdC5sYWJlbCB9KTtcbiAgICBuYW1lUm93LmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1jYXRlZ29yeS1sZXZlbC10ZXh0XCIsXG4gICAgICB0ZXh0OiBgTHYgJHtsZXZlbC5sZXZlbH0gXHUwMEI3ICR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9LzEwMGAsXG4gICAgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyBiYXJcbiAgICBjb25zdCBiYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhclwiIH0pO1xuICAgIGNvbnN0IGZpbGwgPSBiYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktYmFyLWZpbGxcIiB9KTtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9JWA7XG4gICAgZmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERpcmVjdGl2ZSBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBjYXJkIG9uIGRhc2hib2FyZCArIGV4cGFuZGVkIGJvdHRvbS1zaGVldCBvdmVybGF5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFByaW9yaXR5UmVhc29uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXJlY3RpdmVDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvbkJlZ2luU2Vzc2lvbj86IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBzdWdnZXN0aW9uID0gZW5naW5lLmdldFN1Z2dlc3Rpb24oKTtcbiAgaWYgKCFzdWdnZXN0aW9uKSByZXR1cm47XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRpcmVjdGl2ZV90aXRsZSA/PyBcIlRIRSBESVJFQ1RJVkVcIjtcbiAgY29uc3QgYmVnaW5MYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuYmVnaW5fc2Vzc2lvbiA/PyBcIkJFR0lOIFNFU1NJT05cIjtcbiAgY29uc3Qgbm90Tm93TGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLm5vdF9ub3cgPz8gXCJOT1QgTk9XXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ29tcGFjdCBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZCBvbGVuLWRpcmVjdGl2ZVwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXIgd2l0aCBiYWRnZVxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1oZWFkZXJcIiB9KTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYmFkZ2VcIiB9KTtcbiAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhZGdlQ29sb3Ioc3VnZ2VzdGlvbi5yZWFzb24pO1xuXG4gIC8vIEFjdGl2aXR5IGluZm9cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGl2aXR5XCIsXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICBjb25zdCBuZWdsZWN0VGV4dCA9IHN1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmUgPCA5OTlcbiAgICA/IGAke3N1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmV9IGRheXMgbmVnbGVjdGVkYFxuICAgIDogXCJOb3QgeWV0IHN0YXJ0ZWRcIjtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLW5lZ2xlY3RcIiwgdGV4dDogbmVnbGVjdFRleHQgfSk7XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBiZWdpbkJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogYmVnaW5MYWJlbCxcbiAgfSk7XG4gIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25CZWdpblNlc3Npb24/LihzdWdnZXN0aW9uLmFjdGl2aXR5SWQpO1xuICB9KTtcblxuICBjb25zdCBub3ROb3dCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgdGV4dDogbm90Tm93TGFiZWwsXG4gIH0pO1xuICBub3ROb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyBEaXNtaXNzIHRoaXMgY2FyZCB3aXRoIGEgZmFkZVxuICAgIGNhcmQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgIGNhcmQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKC0xMHB4KVwiO1xuICAgIGNhcmQuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3MgZWFzZVwiO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FyZC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSwgMzAwKTtcbiAgfSk7XG5cbiAgLy8gVGFwIGNhcmQgdG8gZXhwYW5kXG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBzaG93RXhwYW5kZWREaXJlY3RpdmUoY29udGFpbmVyLCBzZXR0aW5ncywgc3VnZ2VzdGlvbiwgYmVnaW5MYWJlbCwgbm90Tm93TGFiZWwsIG9uQmVnaW5TZXNzaW9uKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dFeHBhbmRlZERpcmVjdGl2ZShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3VnZ2VzdGlvbjogeyBhY3Rpdml0eUlkOiBzdHJpbmc7IGFjdGl2aXR5TmFtZTogc3RyaW5nOyBlbW9qaTogc3RyaW5nOyByZWFzb246IFByaW9yaXR5UmVhc29uOyBkYXlzU2luY2VMYXN0RG9uZTogbnVtYmVyOyBsb3JlVGV4dDogc3RyaW5nIH0sXG4gIGJlZ2luTGFiZWw6IHN0cmluZyxcbiAgbm90Tm93TGFiZWw6IHN0cmluZyxcbiAgb25CZWdpblNlc3Npb24/OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgLy8gQ3JlYXRlIG92ZXJsYXlcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcblxuICAvLyBIYW5kbGUgYmFyXG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIC8vIFRpdGxlXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsXG4gICAgdGV4dDogc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kaXJlY3RpdmVfdGl0bGUgPz8gXCJUSEUgRElSRUNUSVZFXCIsXG4gIH0pO1xuXG4gIC8vIEFjdGl2aXR5IG5hbWVcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAyMnB4OyBtYXJnaW46IDE2cHggMCA4cHg7XCIgfSxcbiAgICB0ZXh0OiBgJHtzdWdnZXN0aW9uLmVtb2ppfSAke3N1Z2dlc3Rpb24uYWN0aXZpdHlOYW1lfWAsXG4gIH0pO1xuXG4gIC8vIE5lZ2xlY3QgZGVzY3JpcHRpb25cbiAgY29uc3QgbmVnbGVjdERlc2MgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gXG4gICAgOiBcIkEgbmV3IHBhdGggYXdhaXRzLiBUYWtlIHRoZSBmaXJzdCBzdGVwLlwiO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib2R5LWl0YWxpY1wiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTJweDtcIiB9LFxuICAgIHRleHQ6IG5lZ2xlY3REZXNjLFxuICB9KTtcblxuICAvLyBMb3JlIHRleHRcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXNoZWV0LWxvcmVcIixcbiAgICB0ZXh0OiBgXCIke3N1Z2dlc3Rpb24ubG9yZVRleHR9XCJgLFxuICB9KTtcblxuICAvLyBSYW5kb20gcXVvdGVcbiAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICBjb25zdCBxdW90ZVNlY3Rpb24gPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1xdW90ZVwiIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgfSk7XG4gIHF1b3RlU2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgfSk7XG5cbiAgLy8gQWN0aW9uc1xuICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcbiAgYWN0aW9ucy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgYWN0aW9ucy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgICBvbkJlZ2luU2Vzc2lvbj8uKHN1Z2dlc3Rpb24uYWN0aXZpdHlJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdE5vd0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBub3ROb3dMYWJlbCxcbiAgfSk7XG4gIG5vdE5vd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgfSk7XG5cbiAgLy8gQ2xvc2Ugb24gb3ZlcmxheSB0YXBcbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlU2hlZXQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xvc2VTaGVldCgpOiB2b2lkIHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgfVxuXG4gIC8vIEFwcGVuZCBhbmQgYW5pbWF0ZSBpblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRCYWRnZUNvbG9yKHJlYXNvbjogUHJpb3JpdHlSZWFzb24pOiBzdHJpbmcge1xuICBzd2l0Y2ggKHJlYXNvbikge1xuICAgIGNhc2UgXCJkZWF0aFwiOiByZXR1cm4gXCIjZWY0NDQ0XCI7XG4gICAgY2FzZSBcImJvc3NcIjogcmV0dXJuIFwiI2VhYjMwOFwiO1xuICAgIGNhc2UgXCJuZWdsZWN0XCI6IHJldHVybiBcIiNmOTczMTZcIjtcbiAgICBjYXNlIFwid2Vla2x5XCI6IHJldHVybiBcIiMzYjgyZjZcIjtcbiAgICBjYXNlIFwiY2hhaW5cIjogcmV0dXJuIFwiIzhiNWNmNlwiO1xuICAgIGNhc2UgXCJ0aW1lXCI6IHJldHVybiBcIiMwNmI2ZDRcIjtcbiAgICBjYXNlIFwiYmFsYW5jZWRcIjogcmV0dXJuIFwiI2ZmZmZmZlwiO1xuICAgIGRlZmF1bHQ6IHJldHVybiBcIiM5MjhkODVcIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQm9zcyBTdGF0dXMgQ2FyZCBDb21wb25lbnRcbi8vIENvbXBhY3QgYm9zcyBIUCBiYXIgd2l0aCB0aWVyIGFuZCByYW5rXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJCb3NzU3RhdHVzQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuICBjb25zdCBzdGF0dXMgPSBib3NzRW5naW5lLmdldEJvc3NTdGF0dXMoKTtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuYm9zc19zdGF0dXNfdGl0bGUgPz8gXCJCT1NTIFNUQVRVU1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENhcmRcbiAgY29uc3QgY2FyZENscyA9IHN0YXR1cy5pblRhcnRhcnVzID8gXCJvbGVuLWNhcmQtY29tcGFjdCBvbGVuLWNhcmQtdGFydGFydXNcIiA6IFwib2xlbi1jYXJkLWNvbXBhY3RcIjtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IGNhcmRDbHMgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFJvdzogZW1vamkgKyBpbmZvXG4gIGNvbnN0IHJvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYm9zcy1yb3dcIiB9KTtcblxuICByb3cuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1ib3NzLWVtb2ppXCIsIHRleHQ6IGdldEJvc3NFbW9qaShzdGF0dXMudGllcikgfSk7XG5cbiAgY29uc3QgaW5mbyA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ib3NzLWluZm9cIiB9KTtcbiAgaW5mby5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWJvc3MtbmFtZVwiLCB0ZXh0OiBzdGF0dXMuYm9zcy5uYW1lIH0pO1xuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib3NzLXRpZXJcIixcbiAgICB0ZXh0OiBgVGllciAke3N0YXR1cy50aWVyfSBcdTAwQjcgJHtzdGF0dXMucmFua31gLFxuICB9KTtcblxuICAvLyBIUCBiYXJcbiAgY29uc3QgaHBCYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhwLWJhclwiIH0pO1xuICBjb25zdCBocEZpbGwgPSBocEJhci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ocC1iYXItZmlsbFwiIH0pO1xuICBocEZpbGwuc3R5bGUud2lkdGggPSBgJHtzdGF0dXMucGVyY2VudH0lYDtcbiAgaHBGaWxsLnN0eWxlLmJhY2tncm91bmQgPSBib3NzRW5naW5lLmdldEhQQ29sb3Ioc3RhdHVzLnBlcmNlbnQpO1xuXG4gIC8vIEhQIHRleHRcbiAgaW5mby5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYm9zcy1ocC10ZXh0XCIsXG4gICAgdGV4dDogYCR7c3RhdHVzLmN1cnJlbnRIUH0vJHtzdGF0dXMubWF4SFB9IEhQICgke3N0YXR1cy5wZXJjZW50fSUpYCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJvc3NFbW9qaSh0aWVyOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBlbW9qaXM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gICAgMTogXCJcXHV7MUY0N0J9XCIsIDI6IFwiXFx1ezFGOURDfVwiLCAzOiBcIlxcdXsxRjQwOX1cIiwgNDogXCJcXHV7MUY0MDJ9XCIsXG4gICAgNTogXCJcXHV7MUY0MER9XCIsIDY6IFwiXFx1ezFGOTgxfVwiLCA3OiBcIlxcdXsxRjUyNX1cIiwgODogXCJcXHV7MUY0M0F9XCIsXG4gICAgOTogXCJcXHV7MUYzMEF9XCIsIDEwOiBcIlxcdXsxRjQ3Rn1cIiwgMTE6IFwiXFx1ezFGMzI5fVwiLCAxMjogXCJcXHUyMzFCXCIsXG4gICAgMTM6IFwiXFx1ezFGMzAwfVwiLFxuICB9O1xuICByZXR1cm4gZW1vamlzW3RpZXJdID8/IFwiXFx1MjY5NFxcdUZFMEZcIjtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFdlZWtseSBSaHl0aG0gQ29tcG9uZW50XG4vLyA3LWRheSBiYXIgY2hhcnQgd2l0aCBjYXRlZ29yeSBzdGFja2luZyArIHN0YXRzIHJvd1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyV2Vla2x5Umh5dGhtKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLndlZWtseV9yaHl0aG1fdGl0bGUgPz8gXCJXRUVLTFkgUkhZVEhNXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gU3RhdHMgcm93XG4gIGNvbnN0IHN0YXRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdHNcIiB9KTtcblxuICBjb25zdCBhY3RpdmVEYXlzID0gZW5naW5lLmdldEFjdGl2ZURheXNUaGlzV2VlaygpO1xuICBjb25zdCBiZXN0RGF5ID0gZW5naW5lLmdldEJlc3REYXlUaGlzV2VlaygpO1xuICBjb25zdCB0b3RhbENvbXBsZXRpb25zID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcblxuICBjcmVhdGVXZWVrbHlTdGF0KHN0YXRzLCBTdHJpbmcoYWN0aXZlRGF5cykgKyBcIi83XCIsIFwiQWN0aXZlIGRheXNcIik7XG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIGJlc3REYXksIFwiQmVzdCBkYXlcIik7XG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIFN0cmluZyh0b3RhbENvbXBsZXRpb25zKSwgXCJUb3RhbFwiKTtcblxuICAvLyBEaXZpZGVyXG4gIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGl2aWRlclwiIH0pO1xuXG4gIC8vIEJhciBjaGFydFxuICBjb25zdCB3ZWVrbHlEYXRhID0gZW5naW5lLmdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgdG9kYXlTdHIgPSBuZXcgRGF0ZShub3cpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gIC8vIEZpbmQgbWF4IHRvdGFsIGZvciBzY2FsaW5nXG4gIGxldCBtYXhUb3RhbCA9IDE7XG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtseURhdGEpIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGRheS5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgIGlmICh0b3RhbCA+IG1heFRvdGFsKSBtYXhUb3RhbCA9IHRvdGFsO1xuICB9XG5cbiAgY29uc3QgYmFyc0NvbnRhaW5lciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhcnNcIiB9KTtcblxuICBmb3IgKGNvbnN0IGRheSBvZiB3ZWVrbHlEYXRhKSB7XG4gICAgY29uc3QgY29sID0gYmFyc0NvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyLWNvbFwiIH0pO1xuXG4gICAgLy8gU3RhY2tlZCBiYXJcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGRheS5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuXG4gICAgY29uc3QgYmFySGVpZ2h0ID0gbWF4VG90YWwgPiAwID8gTWF0aC5tYXgoNCwgKHRvdGFsIC8gbWF4VG90YWwpICogMTAwKSA6IDQ7XG4gICAgY29uc3QgYmFyRWwgPSBjb2wuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhclwiIH0pO1xuICAgIGJhckVsLnN0eWxlLmhlaWdodCA9IGAke2JhckhlaWdodH1weGA7XG4gICAgYmFyRWwuc3R5bGUubWluSGVpZ2h0ID0gXCI0cHhcIjtcblxuICAgIGlmIChkYXkuZGF0ZSA9PT0gdG9kYXlTdHIpIHtcbiAgICAgIGJhckVsLmNsYXNzTGlzdC5hZGQoXCJvbGVuLXdlZWtseS1iYXItdG9kYXlcIik7XG4gICAgfVxuXG4gICAgLy8gQ3JlYXRlIHN0YWNrZWQgc2VnbWVudHNcbiAgICBjb25zdCBjYXRlZ29yaWVzOiBDYXRlZ29yeVtdID0gW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl07XG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgY2F0Q291bnQgPSBkYXkuY29tcGxldGlvbnMuZ2V0KGNhdCkgPz8gMDtcbiAgICAgIGlmIChjYXRDb3VudCA9PT0gMCkgY29udGludWU7XG4gICAgICBjb25zdCBzZWdIZWlnaHQgPSB0b3RhbCA+IDAgPyAoY2F0Q291bnQgLyB0b3RhbCkgKiAxMDAgOiAwO1xuICAgICAgY29uc3Qgc2VnID0gYmFyRWwuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhci1zZWdtZW50XCIgfSk7XG4gICAgICBzZWcuc3R5bGUuaGVpZ2h0ID0gYCR7c2VnSGVpZ2h0fSVgO1xuICAgICAgc2VnLnN0eWxlLmJhY2tncm91bmQgPSBnZXRDYXRlZ29yeUNvbG9yKGNhdCwgc2V0dGluZ3MpO1xuICAgIH1cblxuICAgIC8vIElmIG5vIGNvbXBsZXRpb25zLCBzaG93IGVtcHR5IGJhclxuICAgIGlmICh0b3RhbCA9PT0gMCkge1xuICAgICAgYmFyRWwuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KVwiO1xuICAgIH1cblxuICAgIC8vIERheSBsYWJlbFxuICAgIGNvbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdlZWtseS1kYXktbGFiZWxcIiwgdGV4dDogZGF5LmRheS5jaGFyQXQoMCkgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2Vla2x5U3RhdChwYXJlbnQ6IEhUTUxFbGVtZW50LCB2YWx1ZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nKTogdm9pZCB7XG4gIGNvbnN0IHN0YXQgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXRcIiB9KTtcbiAgc3RhdC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0LXZhbHVlXCIsIHRleHQ6IHZhbHVlIH0pO1xuICBzdGF0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXQtbGFiZWxcIiwgdGV4dDogbGFiZWwgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENhdGVnb3J5Q29sb3IoY2F0ZWdvcnk6IENhdGVnb3J5LCBzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEFjdGl2aXR5IEdyaWQgQ29tcG9uZW50XG4vLyAyLWNvbHVtbiBncmlkIG9mIGFjdGl2aXR5IGNhcmRzIHdpdGggcHJvZ3Jlc3MgcmluZ3Ncbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckFjdGl2aXR5R3JpZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5hY3Rpdml0eV9ncmlkX3RpdGxlID8/IFwiQUNUSVZJVElFU1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIEdyaWQgY29udGFpbmVyXG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCBjb2x1bW5zID0gc2V0dGluZ3MuZGV2Q29uZmlnLmFjdGl2aXR5R3JpZENvbHVtbnMgPz8gMjtcbiAgZ3JpZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2NvbHVtbnN9LCAxZnIpYDtcblxuICBjb25zdCBhY3Rpdml0aWVzID0gZW5naW5lLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG5cbiAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgY29uc3QgY2FyZCA9IGdyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktY2FyZFwiIH0pO1xuXG4gICAgLy8gQ2F0ZWdvcnkgYWNjZW50IGJhclxuICAgIGNvbnN0IGFjY2VudCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktYWNjZW50XCIgfSk7XG4gICAgYWNjZW50LnN0eWxlLmJhY2tncm91bmQgPSBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1thY3Rpdml0eS5jYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCI7XG5cbiAgICAvLyBUb3Agcm93OiBlbW9qaSArIHN0YXR1cyBkb3RcbiAgICBjb25zdCB0b3AgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LXRvcFwiIH0pO1xuICAgIHRvcC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFjdGl2aXR5LWVtb2ppXCIsIHRleHQ6IGFjdGl2aXR5LmVtb2ppIH0pO1xuXG4gICAgY29uc3QgZGF5c1NpbmNlID0gZW5naW5lLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKTtcbiAgICBjb25zdCBkb3RDbHMgPSBnZXREb3RDbGFzcyhkYXlzU2luY2UpO1xuICAgIHRvcC5jcmVhdGVEaXYoeyBjbHM6IGBvbGVuLWFjdGl2aXR5LWRvdCAke2RvdENsc31gIH0pO1xuXG4gICAgLy8gQWN0aXZpdHkgbmFtZVxuICAgIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1uYW1lXCIsIHRleHQ6IGFjdGl2aXR5Lm5hbWUgfSk7XG5cbiAgICAvLyBXZWVrbHkgcHJvZ3Jlc3NcbiAgICBjb25zdCBwcm9ncmVzcyA9IGVuZ2luZS5nZXRXZWVrbHlQcm9ncmVzcyhhY3Rpdml0eS5pZCk7XG4gICAgY29uc3QgcHJvZ3Jlc3NSb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzXCIgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyByaW5nIChTVkcpXG4gICAgY29uc3QgcmluZyA9IGNyZWF0ZVByb2dyZXNzUmluZyhwcm9ncmVzcy5kb25lLCBwcm9ncmVzcy50YXJnZXQsIHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2FjdGl2aXR5LmNhdGVnb3J5XSk7XG4gICAgcHJvZ3Jlc3NSb3cuYXBwZW5kQ2hpbGQocmluZyk7XG5cbiAgICBwcm9ncmVzc1Jvdy5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzcy10ZXh0XCIsXG4gICAgICB0ZXh0OiBgJHtwcm9ncmVzcy5kb25lfSBvZiAke3Byb2dyZXNzLnRhcmdldH1gLFxuICAgIH0pO1xuXG4gICAgLy8gU3RyZWFrXG4gICAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldEFjdGl2aXR5U3RyZWFrKGFjdGl2aXR5LmlkKTtcbiAgICBpZiAoc3RyZWFrID4gMCkge1xuICAgICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLWFjdGl2aXR5LXN0cmVha1wiLFxuICAgICAgICB0ZXh0OiBgJHtzdHJlYWt9IGRheSBzdHJlYWtgLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldERvdENsYXNzKGRheXNTaW5jZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgaWYgKGRheXNTaW5jZSA9PT0gMCkgcmV0dXJuIFwib2xlbi1hY3Rpdml0eS1kb3QtZ3JlZW5cIjtcbiAgaWYgKGRheXNTaW5jZSA8PSAxKSByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC15ZWxsb3dcIjtcbiAgcmV0dXJuIFwib2xlbi1hY3Rpdml0eS1kb3QtcmVkXCI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb2dyZXNzUmluZyhkb25lOiBudW1iZXIsIHRhcmdldDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogU1ZHU1ZHRWxlbWVudCB7XG4gIGNvbnN0IHNpemUgPSAyNDtcbiAgY29uc3Qgc3Ryb2tlV2lkdGggPSAyLjU7XG4gIGNvbnN0IHJhZGl1cyA9IChzaXplIC0gc3Ryb2tlV2lkdGgpIC8gMjtcbiAgY29uc3QgY2lyY3VtZmVyZW5jZSA9IDIgKiBNYXRoLlBJICogcmFkaXVzO1xuICBjb25zdCBwZXJjZW50ID0gdGFyZ2V0ID4gMCA/IE1hdGgubWluKDEsIGRvbmUgLyB0YXJnZXQpIDogMDtcbiAgY29uc3QgZGFzaE9mZnNldCA9IGNpcmN1bWZlcmVuY2UgKiAoMSAtIHBlcmNlbnQpO1xuXG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgU3RyaW5nKHNpemUpKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBTdHJpbmcoc2l6ZSkpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBgMCAwICR7c2l6ZX0gJHtzaXplfWApO1xuICBzdmcuY2xhc3NMaXN0LmFkZChcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3MtcmluZ1wiKTtcblxuICAvLyBCYWNrZ3JvdW5kIGNpcmNsZVxuICBjb25zdCBiZ0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgU3RyaW5nKHJhZGl1cykpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIFwicmdiYSgyNTUsMjU1LDI1NSwwLjA4KVwiKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFN0cmluZyhzdHJva2VXaWR0aCkpO1xuICBzdmcuYXBwZW5kQ2hpbGQoYmdDaXJjbGUpO1xuXG4gIC8vIFByb2dyZXNzIGNpcmNsZVxuICBjb25zdCBwcm9ncmVzc0NpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiY2lyY2xlXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeFwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3lcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInJcIiwgU3RyaW5nKHJhZGl1cykpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwibm9uZVwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlXCIsIGNvbG9yKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLXdpZHRoXCIsIFN0cmluZyhzdHJva2VXaWR0aCkpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaGFycmF5XCIsIFN0cmluZyhjaXJjdW1mZXJlbmNlKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNob2Zmc2V0XCIsIFN0cmluZyhkYXNoT2Zmc2V0KSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1saW5lY2FwXCIsIFwicm91bmRcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBgcm90YXRlKC05MCAke3NpemUgLyAyfSAke3NpemUgLyAyfSlgKTtcbiAgc3ZnLmFwcGVuZENoaWxkKHByb2dyZXNzQ2lyY2xlKTtcblxuICByZXR1cm4gc3ZnO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgVGVtcGxlIENoaXBzIENvbXBvbmVudFxuLy8gSG9yaXpvbnRhbCBzY3JvbGxhYmxlIGNoaXBzIGZvciBzZWxmLWNhcmUgdGFzayB0cmFja2luZ1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBUZW1wbGVUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJUZW1wbGVDaGlwcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIG9uVGVtcGxlVXBkYXRlOiAodGFza0lkOiBzdHJpbmcpID0+IHZvaWRcbik6IHZvaWQge1xuICBpZiAoIXNldHRpbmdzLnRlbXBsZVRhc2tzIHx8IHNldHRpbmdzLnRlbXBsZVRhc2tzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy50ZW1wbGVfdGl0bGUgPz8gXCJUSEUgVEVNUExFXCI7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG5cbiAgLy8gU2VjdGlvblxuICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsZS1zZWN0aW9uXCIgfSk7XG4gIHNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFRpdGxlXG4gIHNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENoaXBzIGNvbnRhaW5lclxuICBjb25zdCBjaGlwcyA9IHNlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXBzXCIgfSk7XG4gIGNoaXBzLnN0eWxlLm1hcmdpblRvcCA9IFwiOHB4XCI7XG5cbiAgZm9yIChjb25zdCB0YXNrIG9mIHNldHRpbmdzLnRlbXBsZVRhc2tzKSB7XG4gICAgY29uc3Qgc3RhdHVzID0gZ2V0VGFza1N0YXR1cyh0YXNrLCBub3cpO1xuXG4gICAgY29uc3QgY2hpcENscyA9IGBvbGVuLXRlbXBsZS1jaGlwICR7c3RhdHVzLmNoaXBDbGFzc31gO1xuICAgIGNvbnN0IGNoaXAgPSBjaGlwcy5jcmVhdGVEaXYoeyBjbHM6IGNoaXBDbHMgfSk7XG5cbiAgICBjaGlwLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwLWVtb2ppXCIsIHRleHQ6IHRhc2suZW1vamkgfSk7XG4gICAgY2hpcC5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcC10ZXh0XCIsIHRleHQ6IGAke3Rhc2submFtZX0gXHUwMEI3ICR7c3RhdHVzLnRleHR9YCB9KTtcblxuICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9uVGVtcGxlVXBkYXRlKHRhc2suaWQpO1xuICAgICAgLy8gVmlzdWFsIGZlZWRiYWNrXG4gICAgICBjaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwic2NhbGUoMC45KVwiO1xuICAgICAgY2hpcC5zdHlsZS5vcGFjaXR5ID0gXCIwLjZcIjtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjaGlwLnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG4gICAgICAgIGNoaXAuc3R5bGUub3BhY2l0eSA9IFwiXCI7XG4gICAgICB9LCAyMDApO1xuICAgIH0pO1xuICB9XG59XG5cbmludGVyZmFjZSBUYXNrU3RhdHVzIHtcbiAgdGV4dDogc3RyaW5nO1xuICBjaGlwQ2xhc3M6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0VGFza1N0YXR1cyh0YXNrOiBUZW1wbGVUYXNrLCBub3c6IERhdGUpOiBUYXNrU3RhdHVzIHtcbiAgaWYgKCF0YXNrLmxhc3RDb21wbGV0ZWQpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIm92ZXJkdWVcIiwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtb3ZlcmR1ZVwiIH07XG4gIH1cblxuICBjb25zdCBsYXN0ID0gbmV3IERhdGUodGFzay5sYXN0Q29tcGxldGVkKTtcbiAgY29uc3QgbXNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuICBjb25zdCBkYXlzU2luY2UgPSBNYXRoLmZsb29yKChub3cuZ2V0VGltZSgpIC0gbGFzdC5nZXRUaW1lKCkpIC8gbXNQZXJEYXkpO1xuICBjb25zdCBkYXlzVW50aWxEdWUgPSB0YXNrLmludGVydmFsRGF5cyAtIGRheXNTaW5jZTtcblxuICBpZiAoZGF5c1VudGlsRHVlIDw9IDApIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIm92ZXJkdWVcIiwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtb3ZlcmR1ZVwiIH07XG4gIH1cblxuICBpZiAoZGF5c1VudGlsRHVlIDw9IDEpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcImR1ZSB0b2RheVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC13YXJuXCIgfTtcbiAgfVxuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMikge1xuICAgIHJldHVybiB7IHRleHQ6IGBkdWUgaW4gJHtkYXlzVW50aWxEdWV9ZGAsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLXdhcm5cIiB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogYGluICR7ZGF5c1VudGlsRHVlfWRgLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1va1wiIH07XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBRdW90ZSBGb290ZXIgQ29tcG9uZW50XG4vLyBSb3RhdGluZyBzdG9pYyBxdW90ZSBhdCB0aGUgYm90dG9tIG9mIHRoZSBkYXNoYm9hcmRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBBcHAsIFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyUXVvdGVGb290ZXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGFwcDogQXBwLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBxdW90ZSA9IGdldFF1b3RlKGFwcCwgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xuXG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tcXVvdGVcIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtdGV4dFwiLFxuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gIH0pO1xuXG4gIGlmIChxdW90ZS5hdHRyaWJ1dGlvbikge1xuICAgIHNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICAgIHRleHQ6IGBcdTIwMTQgJHtxdW90ZS5hdHRyaWJ1dGlvbn1gLFxuICAgIH0pO1xuICB9XG59XG5cbmludGVyZmFjZSBRdW90ZSB7XG4gIHRleHQ6IHN0cmluZztcbiAgYXR0cmlidXRpb246IHN0cmluZztcbn1cblxuZnVuY3Rpb24gZ2V0UXVvdGUoXG4gIGFwcDogQXBwLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogUXVvdGUge1xuICAvLyBUcnkgdmF1bHQgZm9sZGVyIHF1b3RlcyBmaXJzdFxuICBpZiAoc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoKSB7XG4gICAgY29uc3QgdmF1bHRRdW90ZXMgPSBsb2FkUXVvdGVzRnJvbVZhdWx0KGFwcCwgc2V0dGluZ3MucXVvdGVGb2xkZXJQYXRoKTtcbiAgICBpZiAodmF1bHRRdW90ZXMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHBpY2tRdW90ZSh2YXVsdFF1b3Rlcywgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZhbGxiYWNrIHRvIGhhcmRjb2RlZCBxdW90ZXNcbiAgcmV0dXJuIHBpY2tRdW90ZShGQUxMQkFDS19RVU9URVMsIHNldHRpbmdzLCBvblNldHRpbmdzVXBkYXRlKTtcbn1cblxuZnVuY3Rpb24gcGlja1F1b3RlKFxuICBxdW90ZXM6IFF1b3RlW10sXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiBRdW90ZSB7XG4gIGlmIChxdW90ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJUaGUgdW5leGFtaW5lZCBsaWZlIGlzIG5vdCB3b3J0aCBsaXZpbmcuXCIsIGF0dHJpYnV0aW9uOiBcIlNvY3JhdGVzXCIgfTtcbiAgfVxuXG4gIC8vIEF2b2lkIHJlY2VudGx5IHNob3duIHF1b3Rlc1xuICBjb25zdCByZWNlbnRJZHMgPSBzZXR0aW5ncy5yZWNlbnRRdW90ZUlkcyA/PyBbXTtcbiAgY29uc3QgYXZhaWxhYmxlID0gcXVvdGVzXG4gICAgLm1hcCgocSwgaSkgPT4gKHsgcSwgaSB9KSlcbiAgICAuZmlsdGVyKCh7IGkgfSkgPT4gIXJlY2VudElkcy5pbmNsdWRlcyhpKSk7XG5cbiAgY29uc3QgcG9vbCA9IGF2YWlsYWJsZS5sZW5ndGggPiAwID8gYXZhaWxhYmxlIDogcXVvdGVzLm1hcCgocSwgaSkgPT4gKHsgcSwgaSB9KSk7XG4gIGNvbnN0IHBpY2sgPSBwb29sW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvb2wubGVuZ3RoKV07XG5cbiAgLy8gVHJhY2sgcmVjZW50IChrZWVwIGxhc3QgNSlcbiAgY29uc3QgbmV3UmVjZW50ID0gWy4uLnJlY2VudElkcywgcGljay5pXS5zbGljZSgtTWF0aC5taW4oNSwgTWF0aC5mbG9vcihxdW90ZXMubGVuZ3RoIC8gMikpKTtcbiAgb25TZXR0aW5nc1VwZGF0ZSh7XG4gICAgbGFzdFF1b3RlSW5kZXg6IHBpY2suaSxcbiAgICByZWNlbnRRdW90ZUlkczogbmV3UmVjZW50LFxuICB9KTtcblxuICByZXR1cm4gcGljay5xO1xufVxuXG5mdW5jdGlvbiBsb2FkUXVvdGVzRnJvbVZhdWx0KGFwcDogQXBwLCBmb2xkZXJQYXRoOiBzdHJpbmcpOiBRdW90ZVtdIHtcbiAgY29uc3QgcXVvdGVzOiBRdW90ZVtdID0gW107XG4gIGNvbnN0IGFic3RyYWN0RmlsZSA9IGFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyUGF0aCk7XG4gIGlmICghYWJzdHJhY3RGaWxlKSByZXR1cm4gcXVvdGVzO1xuXG4gIGNvbnN0IGZpbGVzID0gYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKS5maWx0ZXIoKGYpID0+XG4gICAgZi5wYXRoLnN0YXJ0c1dpdGgoZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiKVxuICApO1xuXG4gIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgIGNvbnN0IGNhY2hlID0gYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgIGlmICghY2FjaGUpIGNvbnRpbnVlO1xuXG4gICAgLy8gT25lIHF1b3RlIHBlciBmaWxlIChkZWZhdWx0IG1vZGUpXG4gICAgY29uc3QgbmFtZSA9IGZpbGUuYmFzZW5hbWU7XG4gICAgY29uc3QgcGFydHMgPSBzcGxpdEF0dHJpYnV0aW9uKG5hbWUpO1xuICAgIHF1b3Rlcy5wdXNoKHBhcnRzKTtcbiAgfVxuXG4gIHJldHVybiBxdW90ZXM7XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXR0cmlidXRpb24odGV4dDogc3RyaW5nKTogUXVvdGUge1xuICAvLyBDaGVjayBmb3IgZW0tZGFzaCBhdHRyaWJ1dGlvblxuICBjb25zdCBkYXNoSW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIFx1MjAxNCBcIik7XG4gIGlmIChkYXNoSW5kZXggPiAwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRleHQuc2xpY2UoMCwgZGFzaEluZGV4KS50cmltKCksXG4gICAgICBhdHRyaWJ1dGlvbjogdGV4dC5zbGljZShkYXNoSW5kZXggKyAzKS50cmltKCksXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGh5cGhlbkluZGV4ID0gdGV4dC5sYXN0SW5kZXhPZihcIiAtIFwiKTtcbiAgaWYgKGh5cGhlbkluZGV4ID4gdGV4dC5sZW5ndGggKiAwLjUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGV4dC5zbGljZSgwLCBoeXBoZW5JbmRleCkudHJpbSgpLFxuICAgICAgYXR0cmlidXRpb246IHRleHQuc2xpY2UoaHlwaGVuSW5kZXggKyAzKS50cmltKCksXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7IHRleHQ6IHRleHQudHJpbSgpLCBhdHRyaWJ1dGlvbjogXCJcIiB9O1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgRGF5IFRpbWVsaW5lIENvbXBvbmVudFxuLy8gVmVydGljYWwgY29sb3JlZCB0aW1lbGluZSBvZiB0aGUgZGF5J3MgcGxhbm5lZCBhY3Rpdml0aWVzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIERheU1hcEVudHJ5LCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGF5VGltZWxpbmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIGNhbGxiYWNrczoge1xuICAgIG9uQWNjZXB0OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uU2tpcDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyRG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhclBvc3Rwb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNyZWF0ZUV2ZW50PzogKCkgPT4gdm9pZDtcbiAgfVxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kYXltYXBfdGl0bGUgPz8gXCJZT1VSIERBWVwiO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCBjdXJyZW50SG91ciA9IG5vdy5nZXRIb3VycygpICsgbm93LmdldE1pbnV0ZXMoKSAvIDYwO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFRpbWVsaW5lIGNhcmRcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkIG9sZW4tdGltZWxpbmUtY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBHZXQgZGF5IG1hcCBlbnRyaWVzXG4gIGNvbnN0IGVudHJpZXMgPSBlbmdpbmUuZ2V0RGF5TWFwKCk7XG5cbiAgaWYgKGVudHJpZXMubGVuZ3RoID09PSAwKSB7XG4gICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1lbXB0eVwiLFxuICAgICAgdGV4dDogXCJObyBhY3Rpdml0aWVzIHNjaGVkdWxlZC4gQSByYXJlIGRheSBvZiByZXN0LlwiLFxuICAgIH0pO1xuICAgIHJlbmRlclRpbWVsaW5lRm9vdGVyKGNhcmQsIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzLm9uQ3JlYXRlRXZlbnQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFRpbWVsaW5lIGNvbnRhaW5lclxuICBjb25zdCB0aW1lbGluZSA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmVcIiB9KTtcblxuICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICByZW5kZXJUaW1lbGluZUVudHJ5KFxuICAgICAgdGltZWxpbmUsIGVudHJ5LCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrc1xuICAgICk7XG4gIH1cblxuICAvLyBGb290ZXJcbiAgcmVuZGVyVGltZWxpbmVGb290ZXIoY2FyZCwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3Mub25DcmVhdGVFdmVudCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVsaW5lRW50cnkoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIGVudHJ5OiBEYXlNYXBFbnRyeSxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY3VycmVudEhvdXI6IG51bWJlcixcbiAgY2FsbGJhY2tzOiB7XG4gICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Ta2lwOiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJEb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyUG9zdHBvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgaXNDYWxlbmRhciA9IGVudHJ5LmlzQ2FsZW5kYXJUYXNrID09PSB0cnVlO1xuICBjb25zdCBjb2xvciA9IGlzQ2FsZW5kYXIgPyBcIiM1ZTdhOWFcIiA6IChzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tlbnRyeS5jYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCIpO1xuICBjb25zdCBpc0N1cnJlbnQgPSBjdXJyZW50SG91ciA+PSBlbnRyeS5zdGFydEhvdXIgJiYgY3VycmVudEhvdXIgPCBlbnRyeS5lbmRIb3VyO1xuICBjb25zdCBpc1Bhc3QgPSBjdXJyZW50SG91ciA+PSBlbnRyeS5lbmRIb3VyO1xuICBjb25zdCBpc0RvbmUgPSBlbnRyeS5zdGF0dXMgPT09IFwiZG9uZVwiO1xuICBjb25zdCBpc1NraXBwZWQgPSBlbnRyeS5zdGF0dXMgPT09IFwic2tpcHBlZFwiO1xuXG4gIC8vIERldGVybWluZSB2aXN1YWwgc3RhdGVcbiAgbGV0IHN0YXRlQ2xzID0gXCJvbGVuLXRpbWVsaW5lLWVudHJ5XCI7XG4gIGlmIChpc0NhbGVuZGFyKSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLWNhbGVuZGFyXCI7XG4gIGlmIChpc0RvbmUpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtZG9uZVwiO1xuICBlbHNlIGlmIChpc1NraXBwZWQpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtc2tpcHBlZFwiO1xuICBlbHNlIGlmIChpc0N1cnJlbnQpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtY3VycmVudFwiO1xuICBlbHNlIGlmIChpc1Bhc3QpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtcGFzdFwiO1xuXG4gIGNvbnN0IHJvdyA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IHN0YXRlQ2xzIH0pO1xuXG4gIC8vIENhdGVnb3J5IGNvbG9yIGJhciAoY2FsZW5kYXIgdGFza3MgZ2V0IGEgZGlzdGluY3QgZGFzaGVkIHN0eWxlKVxuICBjb25zdCBiYXIgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYmFyXCIgfSk7XG4gIGJhci5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIGlmIChpc0NhbGVuZGFyICYmICFpc0RvbmUpIHtcbiAgICBiYXIuY2xhc3NMaXN0LmFkZChcIm9sZW4tdGltZWxpbmUtYmFyLWNhbGVuZGFyXCIpO1xuICB9XG4gIGlmIChpc0N1cnJlbnQgJiYgIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgYmFyLnN0eWxlLmJveFNoYWRvdyA9IGAwIDAgMTJweCAke2NvbG9yfWA7XG4gIH1cblxuICAvLyBDb250ZW50XG4gIGNvbnN0IGNvbnRlbnQgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtY29udGVudFwiIH0pO1xuXG4gIC8vIFRvcCBsaW5lOiB0aW1lICsgZHVyYXRpb24gKyBzb3VyY2UgYmFkZ2UgZm9yIGNhbGVuZGFyIHRhc2tzXG4gIGNvbnN0IHRpbWVMaW5lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS10aW1lXCIgfSk7XG4gIHRpbWVMaW5lLnRleHRDb250ZW50ID0gYCR7Zm9ybWF0SG91cihlbnRyeS5zdGFydEhvdXIpfSBcdTIwMTMgJHtmb3JtYXRIb3VyKGVudHJ5LmVuZEhvdXIpfSBcdTAwQjcgJHtlbnRyeS5lc3RpbWF0ZWREdXJhdGlvbn1tYDtcblxuICBpZiAoaXNDYWxlbmRhciAmJiBlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgIGNvbnN0IGJhZGdlID0gdGltZUxpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtc291cmNlLWJhZGdlXCIgfSk7XG4gICAgc3dpdGNoIChlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIk5vdGVcIjsgYnJlYWs7XG4gICAgICBjYXNlIFwidGFza3MtcGx1Z2luXCI6IGJhZGdlLnRleHRDb250ZW50ID0gXCJUYXNrXCI7IGJyZWFrO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIlF1aWNrXCI7IGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2aXR5IGxpbmU6IGVtb2ppICsgbmFtZVxuICBjb25zdCBhY3RMaW5lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1hY3Rpdml0eVwiIH0pO1xuICBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLWVtb2ppXCIsIHRleHQ6IGVudHJ5LmVtb2ppIH0pO1xuICBjb25zdCBuYW1lRWwgPSBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtbmFtZVwiLFxuICAgIHRleHQ6IGVudHJ5LmFjdGl2aXR5TmFtZSxcbiAgfSk7XG5cbiAgLy8gU3RyaWtldGhyb3VnaCBmb3IgZG9uZS9za2lwcGVkXG4gIGlmIChpc0RvbmUgfHwgaXNTa2lwcGVkKSB7XG4gICAgbmFtZUVsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICBuYW1lRWwuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gIH1cblxuICAvLyBTdGF0dXMgaW5kaWNhdG9yXG4gIGlmIChpc0RvbmUpIHtcbiAgICBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLWNoZWNrXCIsIHRleHQ6IFwiXFx1MjcxM1wiIH0pO1xuICB9IGVsc2UgaWYgKGlzU2tpcHBlZCkge1xuICAgIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtc2tpcC1tYXJrXCIsIHRleHQ6IFwiXFx1MjAxM1wiIH0pO1xuICB9XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgaWYgKCFpc0RvbmUgJiYgIWlzU2tpcHBlZCkge1xuICAgIGNvbnN0IGFjdGlvbnMgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWFjdGlvbnNcIiB9KTtcblxuICAgIGlmIChpc0NhbGVuZGFyKSB7XG4gICAgICAvLyBDYWxlbmRhciB0YXNrczogRG9uZSArIFBvc3Rwb25lXG4gICAgICBjb25zdCBkb25lQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1hY2NlcHRcIixcbiAgICAgICAgdGV4dDogXCJEb25lXCIsXG4gICAgICB9KTtcbiAgICAgIGRvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vbkNhbGVuZGFyRG9uZT8uKGVudHJ5KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwb3N0cG9uZUJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tcG9zdHBvbmVcIixcbiAgICAgICAgdGV4dDogXCJcXHUyM0U5XCIsXG4gICAgICAgIGF0dHI6IHsgdGl0bGU6IFwiUG9zdHBvbmUgdG8gdG9tb3Jyb3dcIiB9LFxuICAgICAgfSk7XG4gICAgICBwb3N0cG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQ2FsZW5kYXJQb3N0cG9uZT8uKGVudHJ5KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBY3Rpdml0eSBlbnRyaWVzOiBCZWdpbi9Eb25lICsgU2tpcFxuICAgICAgY29uc3QgYWNjZXB0QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1hY2NlcHRcIixcbiAgICAgICAgdGV4dDogaXNDdXJyZW50ID8gXCJCZWdpblwiIDogXCJEb25lXCIsXG4gICAgICB9KTtcbiAgICAgIGFjY2VwdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQWNjZXB0KGVudHJ5LmFjdGl2aXR5SWQpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHNraXBCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLXNraXBcIixcbiAgICAgICAgdGV4dDogXCJTa2lwXCIsXG4gICAgICB9KTtcbiAgICAgIHNraXBCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vblNraXAoZW50cnkuYWN0aXZpdHlJZCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBDdXJyZW50IHRpbWUgaW5kaWNhdG9yXG4gIGlmIChpc0N1cnJlbnQgJiYgIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgY29uc3QgaW5kaWNhdG9yID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLW5vd1wiIH0pO1xuICAgIGNvbnN0IHByb2dyZXNzID0gKGN1cnJlbnRIb3VyIC0gZW50cnkuc3RhcnRIb3VyKSAvIChlbnRyeS5lbmRIb3VyIC0gZW50cnkuc3RhcnRIb3VyKTtcbiAgICBpbmRpY2F0b3Iuc3R5bGUudG9wID0gYCR7TWF0aC5taW4oMTAwLCBNYXRoLm1heCgwLCBwcm9ncmVzcyAqIDEwMCkpfSVgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclRpbWVsaW5lRm9vdGVyKFxuICBjYXJkOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgY3VycmVudEhvdXI6IG51bWJlcixcbiAgb25DcmVhdGVFdmVudD86ICgpID0+IHZvaWRcbik6IHZvaWQge1xuICBjb25zdCBlbmRPZkRheSA9IHNldHRpbmdzLmRldkNvbmZpZy5ldmVuaW5nRW5kO1xuICBjb25zdCByZW1haW5pbmcgPSBNYXRoLm1heCgwLCBlbmRPZkRheSAtIGN1cnJlbnRIb3VyKTtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHJlbWFpbmluZyk7XG4gIGNvbnN0IG1pbnMgPSBNYXRoLnJvdW5kKChyZW1haW5pbmcgLSBob3VycykgKiA2MCk7XG5cbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgY29uc3QgZm9vdGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1mb290ZXJcIiB9KTtcbiAgZm9vdGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi10aW1lbGluZS1mb290ZXItdGV4dFwiLFxuICAgIHRleHQ6IGBFbmQgb2YgZGF5OiAke2hvdXJzfWggJHttaW5zfW0gcmVtYWluaW5nYCxcbiAgfSk7XG5cbiAgaWYgKG9uQ3JlYXRlRXZlbnQpIHtcbiAgICBjb25zdCBidG4gPSBmb290ZXIuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWNyZWF0ZVwiLFxuICAgICAgdGV4dDogXCIrIENyZWF0ZSBldmVudFwiLFxuICAgIH0pO1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gb25DcmVhdGVFdmVudCgpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRIb3VyKGg6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihoKTtcbiAgY29uc3QgbWlucyA9IE1hdGgucm91bmQoKGggLSBob3VycykgKiA2MCk7XG4gIGNvbnN0IHBlcmlvZCA9IGhvdXJzID49IDEyID8gXCJwbVwiIDogXCJhbVwiO1xuICBjb25zdCBkaXNwbGF5SG91ciA9IGhvdXJzID4gMTIgPyBob3VycyAtIDEyIDogaG91cnMgPT09IDAgPyAxMiA6IGhvdXJzO1xuICBpZiAobWlucyA9PT0gMCkgcmV0dXJuIGAke2Rpc3BsYXlIb3VyfSR7cGVyaW9kfWA7XG4gIHJldHVybiBgJHtkaXNwbGF5SG91cn06JHtTdHJpbmcobWlucykucGFkU3RhcnQoMiwgXCIwXCIpfSR7cGVyaW9kfWA7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBTZXNzaW9uIFZpZXdcbi8vIEFjdGl2ZSBzZXNzaW9uIHNjcmVlbiB3aXRoIHRpbWVyLCBza2lsbHMsIGZpbmlzaCBmbG93XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZlU2Vzc2lvbiwgU2Vzc2lvblR5cGUsIFNlc3Npb25SZXN1bHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9TRVNTSU9OLCBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICBwcml2YXRlIHRpbWVySW50ZXJ2YWw6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHN0YXJ0VGltZTogRGF0ZTtcbiAgcHJpdmF0ZSBlbGFwc2VkID0gMDsgLy8gc2Vjb25kc1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFZJRVdfVFlQRV9TRVNTSU9OO1xuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzZXNzaW9uID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlU2Vzc2lvbjtcbiAgICByZXR1cm4gc2Vzc2lvbiA/IGBTZXNzaW9uOiAke3Nlc3Npb24uYWN0aXZpdHlOYW1lfWAgOiBcIlNlc3Npb25cIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJ0aW1lclwiO1xuICB9XG5cbiAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlc3Npb24gPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVTZXNzaW9uO1xuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBcIk5vIGFjdGl2ZSBzZXNzaW9uLlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoc2Vzc2lvbi5zdGFydFRpbWUpO1xuICAgIHRoaXMucmVuZGVyKHNlc3Npb24pO1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0VGltZXIoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lckludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICBjb25zdCB0aW1lckVsID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXNlc3Npb24tdGltZXJcIik7XG4gICAgICBpZiAodGltZXJFbCkgdGltZXJFbC50ZXh0Q29udGVudCA9IHRoaXMuZm9ybWF0VGltZSh0aGlzLmVsYXBzZWQpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzdG9wVGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZXJJbnRlcnZhbCAhPT0gbnVsbCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVySW50ZXJ2YWwpO1xuICAgICAgdGhpcy50aW1lckludGVydmFsID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcihzZXNzaW9uOiBBY3RpdmVTZXNzaW9uKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZCBvbGVuLXNlc3Npb24tcm9vdFwiIH0pO1xuXG4gICAgLy8gVG9wIGJhclxuICAgIGNvbnN0IHRvcEJhciA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi10b3BiYXJcIiB9KTtcblxuICAgIGNvbnN0IGFjdEluZm8gPSB0b3BCYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1hY3QtaW5mb1wiIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1lbW9qaVwiLCB0ZXh0OiBzZXNzaW9uLmVtb2ppIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1hY3QtbmFtZVwiLCB0ZXh0OiBzZXNzaW9uLmFjdGl2aXR5TmFtZSB9KTtcblxuICAgIGNvbnN0IHRpbWVyRWwgPSB0b3BCYXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tc2Vzc2lvbi10aW1lclwiLFxuICAgICAgdGV4dDogXCIwMDowMFwiLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZmluaXNoQnRuID0gdG9wQmFyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5IG9sZW4tc2Vzc2lvbi1maW5pc2gtYnRuXCIsXG4gICAgICB0ZXh0OiBcIkZJTklTSFwiLFxuICAgIH0pO1xuICAgIGZpbmlzaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93RmluaXNoTW9kYWwoc2Vzc2lvbikpO1xuXG4gICAgLy8gQ2F0ZWdvcnkgYWNjZW50IGxpbmVcbiAgICBjb25zdCBhY2NlbnRDb2xvciA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW3Nlc3Npb24uY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xuICAgIGNvbnN0IGFjY2VudCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7YWNjZW50Q29sb3J9LCB0cmFuc3BhcmVudClgO1xuXG4gICAgLy8gTWFpbiBjb250ZW50IGFyZWFcbiAgICBjb25zdCBjb250ZW50ID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZXNzaW9uLWNvbnRlbnRcIiB9KTtcblxuICAgIC8vIFNraWxscyBzZWN0aW9uXG4gICAgY29uc3Qgc2tpbGxzU2VjdGlvbiA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1za2lsbHMtc2VjdGlvblwiIH0pO1xuICAgIHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IFwiU0VTU0lPTiBTS0lMTFNcIiB9KTtcblxuICAgIGNvbnN0IHNraWxsc0NvbnRhaW5lciA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1za2lsbHNcIiB9KTtcblxuICAgIGlmIChzZXNzaW9uLnNraWxscy5sZW5ndGggPT09IDApIHtcbiAgICAgIHNraWxsc0NvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXNlc3Npb24tbm8tc2tpbGxzXCIsXG4gICAgICAgIHRleHQ6IFwiTm8gc2tpbGxzIHRhZ2dlZCB5ZXRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHNlc3Npb24uc2tpbGxzKSB7XG4gICAgICAgIGNvbnN0IGNoaXAgPSBza2lsbHNDb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1za2lsbC1jaGlwXCIgfSk7XG4gICAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBza2lsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgc2tpbGxzIGJ1dHRvblxuICAgIGNvbnN0IGFkZFNraWxsQnRuID0gc2tpbGxzU2VjdGlvbi5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5IG9sZW4tc2Vzc2lvbi1hZGQtc2tpbGxcIixcbiAgICAgIHRleHQ6IFwiKyBBREQgU0tJTExcIixcbiAgICB9KTtcbiAgICBhZGRTa2lsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93U2tpbGxQaWNrZXIoc2Vzc2lvbikpO1xuXG4gICAgLy8gRm9jdXMgem9uZSBcdTIwMTQgbW90aXZhdGlvbmFsIGFyZWFcbiAgICBjb25zdCBmb2N1c1pvbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tZm9jdXNcIiB9KTtcbiAgICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG4gICAgZm9jdXNab25lLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLXRleHRcIixcbiAgICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgfSk7XG4gICAgZm9jdXNab25lLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICB9KTtcblxuICAgIC8vIEJvdHRvbSBiYXJcbiAgICBjb25zdCBib3R0b21CYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tYm90dG9tYmFyXCIgfSk7XG4gICAgY29uc3QgY2F0TGFiZWwgPSBzZXNzaW9uLmNhdGVnb3J5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc2Vzc2lvbi5jYXRlZ29yeS5zbGljZSgxKTtcbiAgICBib3R0b21CYXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tc2Vzc2lvbi1jYXRlZ29yeS1sYWJlbFwiLFxuICAgICAgdGV4dDogY2F0TGFiZWwsXG4gICAgfSk7XG4gICAgYm90dG9tQmFyLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGFjY2VudENvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93U2tpbGxQaWNrZXIoc2Vzc2lvbjogQWN0aXZlU2Vzc2lvbik6IHZvaWQge1xuICAgIC8vIFByb21wdCBmb3Igc2tpbGwgbmFtZSB2aWEgYSBzaW1wbGUgaW5wdXRcbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJBREQgU0tJTExcIiB9KTtcblxuICAgIGNvbnN0IGlucHV0V3JhcCA9IHNoZWV0LmNyZWF0ZURpdih7IGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiAyMHB4IDA7XCIgfSB9KTtcbiAgICBjb25zdCBpbnB1dCA9IGlucHV0V3JhcC5jcmVhdGVFbChcImlucHV0XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXNlc3Npb24tc2tpbGwtaW5wdXRcIixcbiAgICAgIGF0dHI6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNraWxsIG5hbWUuLi5cIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2tpbGwgZm9sZGVyIGV4aXN0cywgbG9hZCBleGlzdGluZyBza2lsbHNcbiAgICBpZiAoc2Vzc2lvbi5za2lsbEZvbGRlcikge1xuICAgICAgY29uc3Qgc2tpbGxzID0gdGhpcy5sb2FkU2tpbGxzRnJvbUZvbGRlcihzZXNzaW9uLnNraWxsRm9sZGVyKTtcbiAgICAgIGlmIChza2lsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBleGlzdGluZyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tc2tpbGxzXCIsIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTZweDtcIiB9IH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHNraWxscykge1xuICAgICAgICAgIGNvbnN0IGNoaXAgPSBleGlzdGluZy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZXNzaW9uLXNraWxsLWNoaXAgb2xlbi1jbGlja2FibGVcIiB9KTtcbiAgICAgICAgICBjaGlwLnRleHRDb250ZW50ID0gc2tpbGw7XG4gICAgICAgICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgYWRkU2tpbGwoc2tpbGwpO1xuICAgICAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aW9ucyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpb25zXCIgfSk7XG5cbiAgICBjb25zdCBhZGRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgICB0ZXh0OiBcIkFERFwiLFxuICAgIH0pO1xuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gaW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKHZhbCkge1xuICAgICAgICBhZGRTa2lsbCh2YWwpO1xuICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjYW5jZWxCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICAgIHRleHQ6IFwiQ0FOQ0VMXCIsXG4gICAgfSk7XG4gICAgY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjbG9zZVNoZWV0KCkpO1xuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VTaGVldCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkU2tpbGwgPSAobmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIXNlc3Npb24uc2tpbGxzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgIHNlc3Npb24uc2tpbGxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVNlc3Npb24gPSBzZXNzaW9uO1xuICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoc2Vzc2lvbik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlU2hlZXQgPSAoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFNraWxsc0Zyb21Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG4gICAgcmV0dXJuIGZpbGVzXG4gICAgICAuZmlsdGVyKChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGYpID0+IGYuYmFzZW5hbWUpXG4gICAgICAuc29ydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RmluaXNoTW9kYWwoc2Vzc2lvbjogQWN0aXZlU2Vzc2lvbik6IHZvaWQge1xuICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZHVyYXRpb25NaW51dGVzID0gTWF0aC5yb3VuZCgoZW5kVGltZS5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gNjAwMDApO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG5cbiAgICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmctbGdcIiwgdGV4dDogXCJIT1cgRElEIElUIEZFRUw/XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYm9keS1pdGFsaWNcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiAxMnB4IDAgMjBweDtcIiB9LFxuICAgICAgdGV4dDogYCR7c2Vzc2lvbi5lbW9qaX0gJHtzZXNzaW9uLmFjdGl2aXR5TmFtZX0gXHUwMEI3ICR7ZHVyYXRpb25NaW51dGVzfSBtaW51dGVzYCxcbiAgICB9KTtcblxuICAgIC8vIENvbXBsZXRpb24gc3RhdGUgYnV0dG9uc1xuICAgIGNvbnN0IHN0YXRlcyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNlc3Npb25Db21wbGV0aW9uU3RhdGVzLmZpbHRlcigocykgPT4gcy5lbmFibGVkKTtcbiAgICBjb25zdCBzdGF0ZXNHcmlkID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1zdGF0ZXMtZ3JpZFwiIH0pO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGNvbnN0IGJ0biA9IHN0YXRlc0dyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1zdGF0ZS1idG5cIiB9KTtcbiAgICAgIGJ0bi5zdHlsZS5ib3JkZXJDb2xvciA9IHN0YXRlLmNvbG9yO1xuXG4gICAgICBidG4uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1zZXNzaW9uLXN0YXRlLWljb25cIiwgdGV4dDogc3RhdGUuaWNvbiB9KTtcbiAgICAgIGJ0bi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXNlc3Npb24tc3RhdGUtbmFtZVwiLCB0ZXh0OiBzdGF0ZS5uYW1lIH0pO1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBTZXNzaW9uUmVzdWx0ID0ge1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IHNlc3Npb24uYWN0aXZpdHlJZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IHNlc3Npb24uYWN0aXZpdHlOYW1lLFxuICAgICAgICAgIGNhdGVnb3J5OiBzZXNzaW9uLmNhdGVnb3J5LFxuICAgICAgICAgIHR5cGU6IHN0YXRlLmlkLFxuICAgICAgICAgIHN0YXJ0VGltZTogc2Vzc2lvbi5zdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZTogZW5kVGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIGR1cmF0aW9uTWludXRlcyxcbiAgICAgICAgICBza2lsbHM6IHNlc3Npb24uc2tpbGxzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZmluaXNoU2Vzc2lvbihyZXN1bHQsIHNlc3Npb24pO1xuICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICAgIC8vIERvbid0IGNsb3NlIG9uIG92ZXJsYXkgdGFwIFx1MjAxNCB1c2VyIG11c3QgY2hvb3NlXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZVNoZWV0ID0gKCkgPT4ge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGZpbmlzaFNlc3Npb24ocmVzdWx0OiBTZXNzaW9uUmVzdWx0LCBzZXNzaW9uOiBBY3RpdmVTZXNzaW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gMS4gQ3JlYXRlIHNlc3Npb24gbWFya2Rvd24gZmlsZVxuICAgIGlmIChzZXNzaW9uLnNlc3Npb25Gb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlU2Vzc2lvbkZpbGUocmVzdWx0LCBzZXNzaW9uKTtcbiAgICB9XG5cbiAgICAvLyAyLiBVcGRhdGUgdGhlIGFjdGl2aXR5J3MgZGFpbHkgbm90ZSBmcm9udG1hdHRlclxuICAgIGF3YWl0IHRoaXMubWFya0FjdGl2aXR5RG9uZShzZXNzaW9uLCByZXN1bHQpO1xuXG4gICAgLy8gMy4gQXBwbHkgWFBcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNlc3Npb25Db21wbGV0aW9uU3RhdGVzLmZpbmQoKHMpID0+IHMuaWQgPT09IHJlc3VsdC50eXBlKTtcbiAgICBpZiAoc3RhdGUgJiYgc3RhdGUueHBNdWx0aXBsaWVyID4gMCkge1xuICAgICAgY29uc3QgeHBHYWluID0gTWF0aC5yb3VuZCh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uICogc3RhdGUueHBNdWx0aXBsaWVyKTtcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbc2Vzc2lvbi5jYXRlZ29yeV0gKz0geHBHYWluO1xuICAgIH1cblxuICAgIC8vIDQuIEFwcGx5IGJvc3MgZGFtYWdlICh1bmxlc3Mgc2tpcHBlZClcbiAgICBpZiAocmVzdWx0LnR5cGUgIT09IFwic2tpcHBlZFwiKSB7XG4gICAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gc2Vzc2lvbi5hY3Rpdml0eUlkKTtcbiAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDUuIENsZWFyIGFjdGl2ZSBzZXNzaW9uXG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlU2Vzc2lvbiA9IG51bGw7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cbiAgICAvLyA2LiBTaG93IG5vdGljZVxuICAgIGNvbnN0IHN0YXRlTGFiZWwgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZXNzaW9uQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSByZXN1bHQudHlwZSk/Lm5hbWUgPz8gcmVzdWx0LnR5cGU7XG4gICAgbmV3IE5vdGljZShgJHtzZXNzaW9uLmVtb2ppfSAke3Nlc3Npb24uYWN0aXZpdHlOYW1lfSBcdTIwMTQgJHtzdGF0ZUxhYmVsfSBcdTAwQjcgJHtyZXN1bHQuZHVyYXRpb25NaW51dGVzfW1gKTtcblxuICAgIC8vIDcuIFN3aXRjaCBiYWNrIHRvIGRhc2hib2FyZFxuICAgIHRoaXMucGx1Z2luLmFjdGl2YXRlRGFzaGJvYXJkVmlldygpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVTZXNzaW9uRmlsZShyZXN1bHQ6IFNlc3Npb25SZXN1bHQsIHNlc3Npb246IEFjdGl2ZVNlc3Npb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmb2xkZXIgPSBzZXNzaW9uLnNlc3Npb25Gb2xkZXIhO1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBzZXNzaW9uLmFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYWN0aXZpdHk/LnByb3BlcnR5ID8/IHNlc3Npb24uYWN0aXZpdHlOYW1lO1xuXG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKHJlc3VsdC5lbmRUaW1lKTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShyZXN1bHQuc3RhcnRUaW1lKTtcbiAgICBjb25zdCBkYXRlU3RyID0gZW5kVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAvLyBNYXRjaCBleGlzdGluZyBuYW1pbmc6IFwiU2Vzc2lvbiBZWVlZLU1NLUREIEhITU1cIlxuICAgIGNvbnN0IHRpbWVTdHIgPSBgJHtTdHJpbmcoZW5kVGltZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLCBcIjBcIil9JHtTdHJpbmcoZW5kVGltZS5nZXRNaW51dGVzKCkpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgIGNvbnN0IGZpbGVOYW1lID0gYFNlc3Npb24gJHtkYXRlU3RyfSAke3RpbWVTdHJ9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0ubWRgO1xuXG4gICAgLy8gQnVpbGQgdGltZXpvbmUtYXdhcmUgdGltZXN0YW1wIChtYXRjaGVzIGV4aXN0aW5nIHNlc3Npb24gZm9ybWF0KVxuICAgIGNvbnN0IHR6T2Zmc2V0ID0gLXN0YXJ0VGltZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuICAgIGNvbnN0IHR6SG91cnMgPSBTdHJpbmcoTWF0aC5mbG9vcihNYXRoLmFicyh0ek9mZnNldCkgLyA2MCkpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0ek1pbnMgPSBTdHJpbmcoTWF0aC5hYnModHpPZmZzZXQpICUgNjApLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICBjb25zdCB0elNpZ24gPSB0ek9mZnNldCA+PSAwID8gXCIrXCIgOiBcIi1cIjtcbiAgICBjb25zdCB0aW1lc3RhbXAgPSBzdGFydFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyB0elNpZ24gKyB0ekhvdXJzICsgXCI6XCIgKyB0ek1pbnM7XG5cbiAgICBjb25zdCBlbmRUaW1lc3RhbXAgPSBlbmRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgdHpTaWduICsgdHpIb3VycyArIFwiOlwiICsgdHpNaW5zO1xuXG4gICAgLy8gUGljayBhIHF1b3RlXG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuXG4gICAgLy8gQ2FwaXRhbGl6ZSBjb21wbGV0aW9uIHR5cGUgdG8gbWF0Y2ggZXhpc3RpbmcgZm9ybWF0IChEaXNjaXBsaW5lL0Zsb3cvU2tpcHBlZClcbiAgICBjb25zdCB0eXBlTmFtZSA9IHJlc3VsdC50eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcmVzdWx0LnR5cGUuc2xpY2UoMSk7XG4gICAgY29uc3QgZHVyYXRpb25TdHIgPSBgJHtNYXRoLmZsb29yKHJlc3VsdC5kdXJhdGlvbk1pbnV0ZXMgLyA2MCl9aCAke3Jlc3VsdC5kdXJhdGlvbk1pbnV0ZXMgJSA2MH1tYDtcblxuICAgIC8vIEJ1aWxkIGZyb250bWF0dGVyIG1hdGNoaW5nIGV4aXN0aW5nIHNlc3Npb24gZmlsZSBmb3JtYXQ6XG4gICAgLy8ge1Byb3BlcnR5fTogdHJ1ZSwge1Byb3BlcnR5fS1UeXBlOiBcIkRpc2NpcGxpbmVcIiwgVGltZXN0YW1wLCBza2lsbHMsIGVuZFRpbWUsIGR1cmF0aW9uXG4gICAgY29uc3QgZm1MaW5lcyA9IFtcbiAgICAgIFwiLS0tXCIsXG4gICAgICBcImVkaXRvci13aWR0aDogMTAwXCIsXG4gICAgICBgJHtwcm9wZXJ0eX06IHRydWVgLFxuICAgICAgYCR7cHJvcGVydHl9LVR5cGU6IFwiJHt0eXBlTmFtZX1cImAsXG4gICAgICBgVGltZXN0YW1wOiBcIiR7dGltZXN0YW1wfVwiYCxcbiAgICAgIGBlbmRUaW1lOiBcIiR7ZW5kVGltZXN0YW1wfVwiYCxcbiAgICAgIGBkdXJhdGlvbjogXCIke2R1cmF0aW9uU3RyfVwiYCxcbiAgICAgIGBjYXRlZ29yeTogXCIke3Nlc3Npb24uY2F0ZWdvcnl9XCJgLFxuICAgICAgcmVzdWx0LnNraWxscy5sZW5ndGggPiAwXG4gICAgICAgID8gYHNraWxsczogWyR7cmVzdWx0LnNraWxscy5tYXAoKHMpID0+IGBcIiR7c31cImApLmpvaW4oXCIsIFwiKX1dYFxuICAgICAgICA6IFwic2tpbGxzOiBbXVwiLFxuICAgICAgXCJjc3NjbGFzc2VzOlwiLFxuICAgICAgXCIgIC0gaGlkZS1wcm9wZXJ0aWVzXCIsXG4gICAgICBcIi0tLVwiLFxuICAgIF07XG5cbiAgICBjb25zdCBib2R5ID0gW1xuICAgICAgXCJcIixcbiAgICAgIGAjICR7c2Vzc2lvbi5lbW9qaX0gJHtzZXNzaW9uLmFjdGl2aXR5TmFtZX0gU2Vzc2lvbmAsXG4gICAgICBcIlwiLFxuICAgICAgYD4gXCIke3F1b3RlLnRleHR9XCJgLFxuICAgICAgYD4gXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICAgIFwiXCIsXG4gICAgICBcIiMjIE5vdGVzXCIsXG4gICAgICBcIlwiLFxuICAgICAgXCJcIixcbiAgICBdO1xuXG4gICAgY29uc3QgY29udGVudCA9IFsuLi5mbUxpbmVzLCAuLi5ib2R5XS5qb2luKFwiXFxuXCIpO1xuXG4gICAgLy8gRW5zdXJlIGZvbGRlciBleGlzdHNcbiAgICBjb25zdCBhYnN0cmFjdEZvbGRlciA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXIpO1xuICAgIGlmICghYWJzdHJhY3RGb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZUZvbGRlcihmb2xkZXIpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBkdXBsaWNhdGUgZmlsZW5hbWVzXG4gICAgbGV0IGZpbmFsUGF0aCA9IGZpbGVQYXRoO1xuICAgIGNvbnN0IGV4aXN0aW5nID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgIGxldCBjb3VudGVyID0gMjtcbiAgICAgIHdoaWxlICh0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgKSkge1xuICAgICAgICBjb3VudGVyKys7XG4gICAgICB9XG4gICAgICBmaW5hbFBhdGggPSBgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9ICgke2NvdW50ZXJ9KS5tZGA7XG4gICAgfVxuXG4gICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbmFsUGF0aCwgY29udGVudCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1hcmtBY3Rpdml0eURvbmUoc2Vzc2lvbjogQWN0aXZlU2Vzc2lvbiwgcmVzdWx0PzogU2Vzc2lvblJlc3VsdCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIEZpbmQgdG9kYXkncyBub3RlIGluIHRoZSBhY3Rpdml0eSBmb2xkZXIgYW5kIHNldCB0aGUgcHJvcGVydHkgdG8gdHJ1ZVxuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBzZXNzaW9uLmFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybjtcblxuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgYSBmaWxlIG1hdGNoaW5nIHRvZGF5J3MgZGF0ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IHRvZGF5RmlsZSA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgKTtcblxuICAgIGlmICh0b2RheUZpbGUpIHtcbiAgICAgIC8vIFVwZGF0ZSBmcm9udG1hdHRlciBcdTIwMTQgc2V0IHByb3BlcnR5IGFuZCBjb21wbGV0aW9uIHR5cGVcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcih0b2RheUZpbGUsIChmcm9udG1hdHRlcikgPT4ge1xuICAgICAgICBmcm9udG1hdHRlclthY3Rpdml0eS5wcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSByZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpO1xuICAgICAgICAgIGZyb250bWF0dGVyW2Ake2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlYF0gPSB0eXBlTmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGFpbHkgbm90ZSB3aXRoIHRoZSBwcm9wZXJ0eSBzZXRcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICAgIGNvbnN0IHR5cGVMaW5lID0gcmVzdWx0XG4gICAgICAgID8gYFxcbiR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGU6IFwiJHtyZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpfVwiYFxuICAgICAgICA6IFwiXCI7XG4gICAgICBjb25zdCBjb250ZW50ID0gYC0tLVxcbiR7YWN0aXZpdHkucHJvcGVydHl9OiB0cnVlJHt0eXBlTGluZX1cXG4tLS1cXG5gO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBGaWxlIG1pZ2h0IGFscmVhZHkgZXhpc3Qgd2l0aCBhIGRpZmZlcmVudCBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lKHNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChzZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3QgcyA9IHNlY29uZHMgJSA2MDtcbiAgICBpZiAoaCA+IDApIHtcbiAgICAgIHJldHVybiBgJHtofToke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7U3RyaW5nKHMpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtTdHJpbmcocykucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEVtYmVkZGVkIE1hcmtkb3duIFZpZXdcbi8vIFJlbmRlcnMgdXNlcidzIGN1c3RvbSAubWQgZmlsZXMgKGh1YiB0ZW1wbGF0ZXMsIHNlc3Npb24gdGVtcGxhdGVzKVxuLy8gaW5zaWRlIHRoZSBPbGVuIHNoZWxsIHdpdGggbmF2aWdhdGlvbiBjaHJvbWVcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgVEZpbGUsIE1hcmtkb3duUmVuZGVyZXIsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuXG5leHBvcnQgY29uc3QgVklFV19UWVBFX0VNQkVEREVEID0gXCJvbGVuLWVtYmVkZGVkLXZpZXdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFZpZXdTdGF0ZSB7XG4gIGZpbGVQYXRoOiBzdHJpbmc7XG4gIGFjdGl2aXR5SWQ/OiBzdHJpbmc7XG4gIGFjdGl2aXR5TmFtZT86IHN0cmluZztcbiAgYWN0aXZpdHlFbW9qaT86IHN0cmluZztcbiAgbW9kZTogXCJodWJcIiB8IFwid29ya3NwYWNlXCI7XG59XG5cbmV4cG9ydCBjbGFzcyBFbWJlZGRlZE1kVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICBwcml2YXRlIHN0YXRlOiBFbWJlZGRlZFZpZXdTdGF0ZSB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZ2V0Vmlld1R5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gVklFV19UWVBFX0VNQkVEREVEO1xuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zdGF0ZT8uYWN0aXZpdHlOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5zdGF0ZS5tb2RlID09PSBcImh1YlwiXG4gICAgICAgID8gYCR7dGhpcy5zdGF0ZS5hY3Rpdml0eU5hbWV9IEh1YmBcbiAgICAgICAgOiBgJHt0aGlzLnN0YXRlLmFjdGl2aXR5TmFtZX0gU2Vzc2lvbmA7XG4gICAgfVxuICAgIHJldHVybiBcIk9sZW5cIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZT8ubW9kZSA9PT0gXCJ3b3Jrc3BhY2VcIiA/IFwidGltZXJcIiA6IFwibGF5b3V0LWRhc2hib2FyZFwiO1xuICB9XG5cbiAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIFN0YXRlIGlzIHNldCBleHRlcm5hbGx5IGJlZm9yZSB0aGUgdmlldyBvcGVucyB2aWEgc2V0RW1iZWRkZWRTdGF0ZSgpXG4gICAgaWYgKHRoaXMuc3RhdGUpIHtcbiAgICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgc2V0RW1iZWRkZWRTdGF0ZShzdGF0ZTogRW1iZWRkZWRWaWV3U3RhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gIH1cblxuICBhc3luYyByZW5kZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICBpZiAoIXRoaXMuc3RhdGUpIHtcbiAgICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7IHRleHQ6IFwiTm8gZmlsZSBzcGVjaWZpZWQuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgcm9vdCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kYXNoYm9hcmQgb2xlbi1lbWJlZGRlZC1yb290XCIgfSk7XG5cbiAgICAvLyBOYXZpZ2F0aW9uIGNocm9tZSBcdTIwMTQgc3RpY2t5IHRvcCBiYXJcbiAgICBjb25zdCBuYXZCYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWVtYmVkZGVkLW5hdlwiIH0pO1xuXG4gICAgY29uc3QgYmFja0J0biA9IG5hdkJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1lbWJlZGRlZC1iYWNrXCIsXG4gICAgICB0ZXh0OiBcIlxcdTIxOTAgQmFja1wiLFxuICAgIH0pO1xuICAgIGJhY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIHRoaXMucGx1Z2luLmFjdGl2YXRlRGFzaGJvYXJkVmlldygpO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZpdHlFbW9qaSB8fCB0aGlzLnN0YXRlLmFjdGl2aXR5TmFtZSkge1xuICAgICAgY29uc3QgdGl0bGVFbCA9IG5hdkJhci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1lbWJlZGRlZC10aXRsZVwiIH0pO1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYWN0aXZpdHlFbW9qaSkge1xuICAgICAgICB0aXRsZUVsLmNyZWF0ZUVsKFwic3BhblwiLCB7IHRleHQ6IHRoaXMuc3RhdGUuYWN0aXZpdHlFbW9qaSArIFwiIFwiIH0pO1xuICAgICAgfVxuICAgICAgdGl0bGVFbC5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgICB0ZXh0OiB0aGlzLnN0YXRlLmFjdGl2aXR5TmFtZSA/PyBcIkFjdGl2aXR5XCIsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBtb2RlTGFiZWwgPSBuYXZCYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWVtYmVkZGVkLW1vZGVcIixcbiAgICAgIHRleHQ6IHRoaXMuc3RhdGUubW9kZSA9PT0gXCJodWJcIiA/IFwiSFVCXCIgOiBcIlNFU1NJT05cIixcbiAgICB9KTtcblxuICAgIC8vIENvbnRlbnQgYXJlYSBcdTIwMTQgcmVuZGVyIHRoZSAubWQgZmlsZVxuICAgIGNvbnN0IGNvbnRlbnRBcmVhID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1lbWJlZGRlZC1jb250ZW50XCIgfSk7XG5cbiAgICAvLyBGaW5kIGFuZCByZW5kZXIgdGhlIGZpbGVcbiAgICBjb25zdCBmaWxlUGF0aCA9IHRoaXMuc3RhdGUuZmlsZVBhdGguZW5kc1dpdGgoXCIubWRcIilcbiAgICAgID8gdGhpcy5zdGF0ZS5maWxlUGF0aFxuICAgICAgOiB0aGlzLnN0YXRlLmZpbGVQYXRoICsgXCIubWRcIjtcblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpO1xuXG4gICAgaWYgKCFmaWxlIHx8ICEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkge1xuICAgICAgY29udGVudEFyZWEuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi1lbWJlZGRlZC1lcnJvclwiLFxuICAgICAgICB0ZXh0OiBgRmlsZSBub3QgZm91bmQ6ICR7ZmlsZVBhdGh9YCxcbiAgICAgIH0pO1xuICAgICAgY29udGVudEFyZWEuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi1lbWJlZGRlZC1lcnJvci1oaW50XCIsXG4gICAgICAgIHRleHQ6IFwiQ2hlY2sgdGhlIGZpbGUgcGF0aCBpbiBhY3Rpdml0eSBzZXR0aW5ncywgb3Igc3dpdGNoIHRvIEJ1aWx0LWluIG1vZGUuXCIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBhd2FpdCBNYXJrZG93blJlbmRlcmVyLnJlbmRlcihcbiAgICAgICAgdGhpcy5hcHAsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGNvbnRlbnRBcmVhLFxuICAgICAgICBmaWxlLnBhdGgsXG4gICAgICAgIHRoaXNcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2xlbjogRmFpbGVkIHRvIHJlbmRlciBlbWJlZGRlZCAubWQ6XCIsIGVycik7XG4gICAgICBjb250ZW50QXJlYS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLWVtYmVkZGVkLWVycm9yXCIsXG4gICAgICAgIHRleHQ6IFwiRmFpbGVkIHRvIHJlbmRlciBmaWxlLiBJdCBtYXkgY29udGFpbiB1bnN1cHBvcnRlZCBjb250ZW50LlwiLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBTZXR0aW5ncyBUYWJcbi8vIENvbGxhcHNpYmxlIHNlY3Rpb25zIGZvciBhbGwgcGx1Z2luIGNvbmZpZ3VyYXRpb25cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBBcHAsIFBsdWdpblNldHRpbmdUYWIsIFNldHRpbmcsIFRleHRDb21wb25lbnQsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHR5cGUgeyBBY3Rpdml0eUNvbmZpZywgQ2F0ZWdvcnksIFRlbXBsZVRhc2ssIFRlbXBsYXRlUmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9BQ1RJVklUSUVTLCBERUZBVUxUX0RFVl9DT05GSUcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBPbGVuU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgIGNvbnRhaW5lckVsLmFkZENsYXNzKFwib2xlbi1zZXR0aW5nc1wiKTtcblxuICAgIC8vIEhlYWRlclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiT2xlblwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDEuNGVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiA0cHg7IHBhZGRpbmc6IDhweCAwO1wiIH0sXG4gICAgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJNeXRob2xvZ2ljYWwgTGlmZS1PcGVyYXRpbmcgU3lzdGVtXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDE2cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIC8vIFF1aWNrIHN0YXR1cyBiYXJcbiAgICB0aGlzLnJlbmRlclN0YXR1c0Jhcihjb250YWluZXJFbCk7XG5cbiAgICAvLyBTZWN0aW9uc1xuICAgIHRoaXMucmVuZGVyUHJvZmlsZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQWN0aXZpdGllc1NlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQ2F0ZWdvcmllc1NlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyVGVtcGxhdGVSZWdpc3RyeVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyVGVtcGxlU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJDYWxlbmRhclNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyVGhlbWVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFkdmFuY2VkU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJEZXZEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgfVxuXG4gIC8vIC0tLSBDb2xsYXBzaWJsZSBTZWN0aW9uIEhlbHBlciAtLS1cblxuICBwcml2YXRlIGNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgaWNvbjogc3RyaW5nLFxuICAgIGRlZmF1bHRPcGVuID0gZmFsc2VcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBwYXJlbnQuY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYXJyb3cgPSBoZWFkZXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGRlZmF1bHRPcGVuID8gXCJcXHUyNUJDXCIgOiBcIlxcdTI1QjZcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAxMHB4OyB3aWR0aDogMTJweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgaGVhZGVyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBpY29uID8gYCR7aWNvbn0gICR7dGl0bGV9YCA6IHRpdGxlLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOTVlbTtcIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IHNlY3Rpb24uY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHsgc3R5bGU6IGBwYWRkaW5nOiAwIDE2cHg7IGRpc3BsYXk6ICR7ZGVmYXVsdE9wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07YCB9LFxuICAgIH0pO1xuXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc09wZW4gPSBib2R5LnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiO1xuICAgICAgYm9keS5zdHlsZS5kaXNwbGF5ID0gaXNPcGVuID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgICBib2R5LnN0eWxlLnBhZGRpbmcgPSBpc09wZW4gPyBcIjAgMTZweFwiIDogXCIxMnB4IDE2cHhcIjtcbiAgICAgIGFycm93LnRleHRDb250ZW50ID0gaXNPcGVuID8gXCJcXHUyNUI2XCIgOiBcIlxcdTI1QkNcIjtcbiAgICB9KTtcblxuICAgIGlmIChkZWZhdWx0T3BlbikgYm9keS5zdHlsZS5wYWRkaW5nID0gXCIxMnB4IDE2cHhcIjtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIC8vIC0tLSBTdGF0dXMgQmFyIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBocFBlcmNlbnQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFAgPiAwXG4gICAgICA/IE1hdGgucm91bmQoKHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLyB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFApICogMTAwKVxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgYmFyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4OyBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTsgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogYFRpZXIgJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXJyZW50VGllcn0vMTNgIH0pO1xuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogYEhQICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUH0vJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFB9ICgke2hwUGVyY2VudH0lKWAsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmluVGFydGFydXNcbiAgICAgID8gXCJUQVJUQVJVU1wiXG4gICAgICA6IHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiXG4gICAgICAgID8gXCJQQVVTRURcIlxuICAgICAgICA6IFwiQUNUSVZFXCI7XG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBzdGF0ZSxcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBmb250LXdlaWdodDogNjAwOyBjb2xvcjogJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5pblRhcnRhcnVzID8gXCJ2YXIoLS10ZXh0LWVycm9yKVwiIDogXCJ2YXIoLS10ZXh0LW5vcm1hbClcIn07YCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IHRoaXMucGx1Z2luLnNldHRpbmdzLm1pZ3JhdGVkID8gXCJNaWdyYXRlZFwiIDogXCJOb3QgbWlncmF0ZWRcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zdHlsZTogaXRhbGljO1wiIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyAtLS0gUHJvZmlsZSAtLS1cblxuICBwcml2YXRlIHJlbmRlclByb2ZpbGVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlByb2ZpbGVcIiwgXCJcXHV7MUY0NjR9XCIpO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLnNldERlc2MoXCJZb3VyIG5hbWUgZm9yIHRoZSBkYXNoYm9hcmQgZ3JlZXRpbmdcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZXJOYW1lKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZXJOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIk15IFdoeVwiKVxuICAgICAgLnNldERlc2MoXCJZb3VyIGNvcmUgbW90aXZhdGlvbiBcdTIwMTQgc2hvd24gcGVyaW9kaWNhbGx5IG9uIHRoZSBkYXNoYm9hcmRcIilcbiAgICAgIC5hZGRUZXh0QXJlYSgoYXJlYSkgPT5cbiAgICAgICAgYXJlYVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVdoeSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVdoeSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIZXJvIGJhY2tncm91bmQgaW1hZ2VcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgcGF0aCB0byB0aGUgaGVybyBiYWNrZ3JvdW5kIGltYWdlIChlLmcuLCBpbWFnZXMvaGVyby5qcGcpXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcInBhdGgvdG8vaW1hZ2UuanBnXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBBY3Rpdml0aWVzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQWN0aXZpdGllc1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQWN0aXZpdGllc1wiLCBcIlxcdXsxRjNBRn1cIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpXTtcbiAgICAgIHRoaXMucmVuZGVyQWN0aXZpdHlJdGVtKGJvZHksIGFjdGl2aXR5LCBpKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBBY3Rpdml0eVwiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdBY3Rpdml0eTogQWN0aXZpdHlDb25maWcgPSB7XG4gICAgICAgICAgICBpZDogYGN1c3RvbS0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG5hbWU6IFwiTmV3IEFjdGl2aXR5XCIsXG4gICAgICAgICAgICBlbW9qaTogXCJcXHUyQjUwXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBmb2xkZXI6IFwiXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJcIixcbiAgICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsXG4gICAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IDMsXG4gICAgICAgICAgICB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICAgICAgICAgIGhhc1Nlc3Npb246IGZhbHNlLFxuICAgICAgICAgICAgcHJpb3JpdHk6IDUsXG4gICAgICAgICAgICBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgICAgICAgICAgcHJlZmVycmVkVGltZTogXCJhbnl0aW1lXCIsXG4gICAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgICAgICAgICBkYXNoYm9hcmRTb3VyY2U6IFwiYnVpbHRpblwiLFxuICAgICAgICAgICAgd29ya3NwYWNlU291cmNlOiBcImJ1aWx0aW5cIixcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMucHVzaChuZXdBY3Rpdml0eSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0eUl0ZW0oY29udGFpbmVyOiBIVE1MRWxlbWVudCwgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gSGVhZGVyIHJvdyB3aXRoIHRvZ2dsZVxuICAgIG5ldyBTZXR0aW5nKHdyYXBwZXIpXG4gICAgICAuc2V0TmFtZShgJHthY3Rpdml0eS5lbW9qaX0gJHthY3Rpdml0eS5uYW1lfWApXG4gICAgICAuc2V0RGVzYyhgJHthY3Rpdml0eS5jYXRlZ29yeX0gXHUwMEI3ICR7YWN0aXZpdHkuZm9sZGVyIHx8IFwibm8gZm9sZGVyIHNldFwifWApXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZShhY3Rpdml0eS5lbmFibGVkKS5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbmFibGVkID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gRXhwYW5kYWJsZSBkZXRhaWxzXG4gICAgY29uc3QgZGV0YWlsc1RvZ2dsZSA9IHdyYXBwZXIuY3JlYXRlRWwoXCJkZXRhaWxzXCIpO1xuICAgIGRldGFpbHNUb2dnbGUuY3JlYXRlRWwoXCJzdW1tYXJ5XCIsIHtcbiAgICAgIHRleHQ6IFwiQ29uZmlndXJlXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXRhaWxzID0gZGV0YWlsc1RvZ2dsZS5jcmVhdGVEaXYoKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIk5hbWVcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5Lm5hbWUpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLm5hbWUgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVtb2ppXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5lbW9qaSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uZW1vamkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkNhdGVnb3J5XCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7IGJvZHk6IFwiQm9keVwiLCBtaW5kOiBcIk1pbmRcIiwgc3Bpcml0OiBcIlNwaXJpdFwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LmNhdGVnb3J5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2F0ZWdvcnkgPSB2IGFzIENhdGVnb3J5O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJWYXVsdCBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiRm9sZGVyIHdpdGggWVlZWS1NTS1ERCBub3Rlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkuZm9sZGVyKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5mb2xkZXIgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkZyb250bWF0dGVyIHByb3BlcnR5XCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5wcm9wZXJ0eSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJvcGVydHkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldlZWtseSB0YXJnZXRcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDcsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LndlZWtseVRhcmdldClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud2Vla2x5VGFyZ2V0ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJpb3JpdHkgKDEtMTApXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxMCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJpb3JpdHkpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByaW9yaXR5ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJlZmVycmVkIHRpbWVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBtb3JuaW5nOiBcIk1vcm5pbmdcIiwgYWZ0ZXJub29uOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIGV2ZW5pbmc6IFwiRXZlbmluZ1wiLCBhbnl0aW1lOiBcIkFueXRpbWVcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJlZmVycmVkVGltZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByZWZlcnJlZFRpbWUgPSB2IGFzIGFueTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmVnbGVjdCB0aHJlc2hvbGQgKGRheXMpXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxNCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkubmVnbGVjdFRocmVzaG9sZClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmVnbGVjdFRocmVzaG9sZCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVzdGltYXRlZCBkdXJhdGlvbiAobWludXRlcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVzdGltYXRlZER1cmF0aW9uID0gbjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJIYXMgc2Vzc2lvbiB2aWV3XCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZShhY3Rpdml0eS5oYXNTZXNzaW9uKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmhhc1Nlc3Npb24gPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkJsb2NrcyAoY29tbWEtc2VwYXJhdGVkIGFjdGl2aXR5IElEcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKChhY3Rpdml0eS5ibG9ja3MgPz8gW10pLmpvaW4oXCIsIFwiKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5ibG9ja3MgPSB2LnNwbGl0KFwiLFwiKS5tYXAoKHMpID0+IHMudHJpbSgpKS5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQWx0ZXJuYXRlcyB3aXRoIChhY3Rpdml0eSBJRClcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoID8/IFwiXCIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uYWx0ZXJuYXRlc1dpdGggPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQ2hhaW4gYWZ0ZXIgKGFjdGl2aXR5IElEKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoYWN0aXZpdHkuY2hhaW5BZnRlciA/PyBcIlwiKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmNoYWluQWZ0ZXIgPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiU2Vzc2lvbiBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGZvciBzZXNzaW9uIGZpbGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gSG9tZS9TdGFydHMvRHJhd2luZy9TZXNzaW9uc1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5zZXNzaW9uRm9sZGVyID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5zZXNzaW9uRm9sZGVyID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJTa2lsbCBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGNvbnRhaW5pbmcgc2tpbGwgdHJlZSBub3Rlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIEhvbWUvU3RhcnRzL0RyYXdpbmcvU2tpbGwgdHJlZVwiKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5za2lsbEZvbGRlciA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uc2tpbGxGb2xkZXIgPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIC0tLSBWaWV3IFNvdXJjZXMgLS0tXG4gICAgZGV0YWlscy5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICB0ZXh0OiBcIlZpZXcgU291cmNlc1wiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOWVtOyBtYXJnaW46IDEycHggMCA0cHg7IGNvbG9yOiB2YXIoLS10ZXh0LW5vcm1hbCk7XCIgfSxcbiAgICB9KTtcbiAgICBkZXRhaWxzLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiQ2hvb3NlIGJldHdlZW4gYnVpbHQtaW4gT2xlbiBVSSBvciB5b3VyIG93biAubWQgdGVtcGxhdGVzIHJlbmRlcmVkIGluc2lkZSBPbGVuLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuOGVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDhweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gRGFzaGJvYXJkIHNvdXJjZVxuICAgIGNvbnN0IGRhc2hQYXRoU2V0dGluZyA9IG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkRhc2hib2FyZCAubWQgcGF0aFwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBwYXRoIHRvIGh1YiB0ZW1wbGF0ZSAod2l0aG91dCAubWQgZXh0ZW5zaW9uKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJIb21lL0h1YnMvRHJhd2luZyBodWJcIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuZGFzaGJvYXJkU291cmNlID09PSBcImJ1aWx0aW5cIiA/IFwiXCIgOiAoYWN0aXZpdHkuZGFzaGJvYXJkU291cmNlID8/IFwiXCIpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uZGFzaGJvYXJkU291cmNlID0gdi50cmltKCkgfHwgXCJidWlsdGluXCI7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnN0IGlzRGFzaEN1c3RvbSA9IGFjdGl2aXR5LmRhc2hib2FyZFNvdXJjZSAmJiBhY3Rpdml0eS5kYXNoYm9hcmRTb3VyY2UgIT09IFwiYnVpbHRpblwiO1xuICAgIGRhc2hQYXRoU2V0dGluZy5zZXR0aW5nRWwuc3R5bGUuZGlzcGxheSA9IGlzRGFzaEN1c3RvbSA/IFwiXCIgOiBcIm5vbmVcIjtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkRhc2hib2FyZCBzb3VyY2VcIilcbiAgICAgIC5zZXREZXNjKFwiSHViIHZpZXcgd2hlbiB5b3UgdGFwIGFuIGFjdGl2aXR5XCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7IGJ1aWx0aW46IFwiQnVpbHQtaW4gKE5hdGl2ZSlcIiwgY3VzdG9tOiBcIkN1c3RvbSAubWQgZmlsZVwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKGlzRGFzaEN1c3RvbSA/IFwiY3VzdG9tXCIgOiBcImJ1aWx0aW5cIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGlmICh2ID09PSBcImJ1aWx0aW5cIikge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5kYXNoYm9hcmRTb3VyY2UgPSBcImJ1aWx0aW5cIjtcbiAgICAgICAgICAgICAgZGFzaFBhdGhTZXR0aW5nLnNldHRpbmdFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkYXNoUGF0aFNldHRpbmcuc2V0dGluZ0VsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBSZS1pbnNlcnQgcGF0aCBzZXR0aW5nIGFmdGVyIGRyb3Bkb3duIChpdCB3YXMgY3JlYXRlZCBmaXJzdCBmb3IgcmVmZXJlbmNlKVxuICAgIGRhc2hQYXRoU2V0dGluZy5zZXR0aW5nRWwucmVtb3ZlKCk7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZChkYXNoUGF0aFNldHRpbmcuc2V0dGluZ0VsKTtcblxuICAgIC8vIFdvcmtzcGFjZSBzb3VyY2VcbiAgICBjb25zdCB3c1BhdGhTZXR0aW5nID0gbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIC5tZCBwYXRoXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IHBhdGggdG8gc2Vzc2lvbiB0ZW1wbGF0ZSAod2l0aG91dCAubWQgZXh0ZW5zaW9uKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJEcmF3aW5nIFNlc3Npb25cIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkud29ya3NwYWNlU291cmNlID09PSBcImJ1aWx0aW5cIiA/IFwiXCIgOiAoYWN0aXZpdHkud29ya3NwYWNlU291cmNlID8/IFwiXCIpKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud29ya3NwYWNlU291cmNlID0gdi50cmltKCkgfHwgXCJidWlsdGluXCI7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnN0IGlzV3NDdXN0b20gPSBhY3Rpdml0eS53b3Jrc3BhY2VTb3VyY2UgJiYgYWN0aXZpdHkud29ya3NwYWNlU291cmNlICE9PSBcImJ1aWx0aW5cIjtcbiAgICB3c1BhdGhTZXR0aW5nLnNldHRpbmdFbC5zdHlsZS5kaXNwbGF5ID0gaXNXc0N1c3RvbSA/IFwiXCIgOiBcIm5vbmVcIjtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldvcmtzcGFjZSBzb3VyY2VcIilcbiAgICAgIC5zZXREZXNjKFwiU2Vzc2lvbiB2aWV3IHdoZW4geW91IGJlZ2luIGEgc2Vzc2lvblwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoeyBidWlsdGluOiBcIkJ1aWx0LWluIChOYXRpdmUpXCIsIGN1c3RvbTogXCJDdXN0b20gLm1kIGZpbGVcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShpc1dzQ3VzdG9tID8gXCJjdXN0b21cIiA6IFwiYnVpbHRpblwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgaWYgKHYgPT09IFwiYnVpbHRpblwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLndvcmtzcGFjZVNvdXJjZSA9IFwiYnVpbHRpblwiO1xuICAgICAgICAgICAgICB3c1BhdGhTZXR0aW5nLnNldHRpbmdFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3c1BhdGhTZXR0aW5nLnNldHRpbmdFbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgd3NQYXRoU2V0dGluZy5zZXR0aW5nRWwucmVtb3ZlKCk7XG4gICAgZGV0YWlscy5hcHBlbmRDaGlsZCh3c1BhdGhTZXR0aW5nLnNldHRpbmdFbCk7XG5cbiAgICAvLyBEZWxldGUgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuXG4gICAgICAgICAgLnNldEJ1dHRvblRleHQoXCJEZWxldGUgQWN0aXZpdHlcIilcbiAgICAgICAgICAuc2V0V2FybmluZygpXG4gICAgICAgICAgLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBDYXRlZ29yaWVzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQ2F0ZWdvcmllc1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2F0ZWdvcmllc1wiLCBcIlxcdXsxRjNBOH1cIik7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzOiB7IGtleTogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICAgIHsga2V5OiBcIm1pbmRcIiwgbGFiZWw6IFwiTWluZFwiIH0sXG4gICAgICB7IGtleTogXCJzcGlyaXRcIiwgbGFiZWw6IFwiU3Bpcml0XCIgfSxcbiAgICBdO1xuXG4gICAgZm9yIChjb25zdCBjYXQgb2YgY2F0ZWdvcmllcykge1xuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7Y2F0LmxhYmVsfSBjb2xvcmApXG4gICAgICAgIC5hZGRDb2xvclBpY2tlcigoY3ApID0+XG4gICAgICAgICAgY3BcbiAgICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSlcbiAgICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQua2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJUaXRsZSBvdmVycmlkZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0aGUgZHluYW1pYyB0aXRsZSAobGVhdmUgZW1wdHkgZm9yIGF1dG8pXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGl0bGVPdmVycmlkZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGF0ZSBSZWdpc3RyeSAtLS1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsYXRlUmVnaXN0cnlTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRlbXBsYXRlIFJlZ2lzdHJ5XCIsIFwiXFx1ezFGNERDfVwiKTtcblxuICAgIGJvZHkuY3JlYXRlRWwoXCJwXCIsIHtcbiAgICAgIHRleHQ6IFwiTWFwIGFjdGl2aXR5IHR5cGVzIHRvIHRlbXBsYXRlIGZpbGVzLiBOb3RlcyB3aXRoIGFjdGl2aXR5OiA8dHlwZT4gaW4gZnJvbnRtYXR0ZXIgd2lsbCByZW5kZXIgdGhlIGFzc29jaWF0ZWQgdGVtcGxhdGUgVUkgaW5zdGVhZCBvZiByYXcgbWFya2Rvd24uXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDEycHg7IGxpbmUtaGVpZ2h0OiAxLjU7XCIgfSxcbiAgICB9KTtcblxuICAgIGJvZHkuY3JlYXRlRWwoXCJwXCIsIHtcbiAgICAgIHRleHQ6IFwiVGVtcGxhdGVzIGFyZSAuanMgZmlsZXMgaW4geW91ciB2YXVsdC4gVGhlIHBsdWdpbiBwYXNzZXMgYSBjdHggb2JqZWN0IHdpdGggZGF0YS1iaW5kaW5nIHRvIHRoZSBub3RlJ3MgZnJvbnRtYXR0ZXIuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMTJweDsgZm9udC1zdHlsZTogaXRhbGljO1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCByZWdpc3RyeSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsYXRlUmVnaXN0cnkgPz8gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbnRyeSA9IHJlZ2lzdHJ5W2ldO1xuICAgICAgdGhpcy5yZW5kZXJUZW1wbGF0ZVJlZ2lzdHJ5SXRlbShib2R5LCBlbnRyeSwgaSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIGJ1dHRvblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgVGVtcGxhdGUgTWFwcGluZ1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGF0ZVJlZ2lzdHJ5LnB1c2goe1xuICAgICAgICAgICAgYWN0aXZpdHlUeXBlOiBcIlwiLFxuICAgICAgICAgICAgdGVtcGxhdGVQYXRoOiBcIlwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsYXRlUmVnaXN0cnlJdGVtKFxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gICAgZW50cnk6IFRlbXBsYXRlUmVnaXN0cnlFbnRyeSxcbiAgICBpbmRleDogbnVtYmVyLFxuICApOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBBY3Rpdml0eSB0eXBlIFx1MjE5MiB0ZW1wbGF0ZSBwYXRoXG4gICAgbmV3IFNldHRpbmcod3JhcHBlcilcbiAgICAgIC5zZXROYW1lKGVudHJ5LmFjdGl2aXR5VHlwZSA/IGAke2VudHJ5LmFjdGl2aXR5VHlwZX0gXHUyMTkyICR7ZW50cnkudGVtcGxhdGVQYXRoIHx8IFwiKG5vIHBhdGgpXCJ9YCA6IFwiTmV3IG1hcHBpbmdcIilcbiAgICAgIC5zZXREZXNjKGVudHJ5LmVuYWJsZWQgPyBcIkFjdGl2ZVwiIDogXCJEaXNhYmxlZFwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUoZW50cnkuZW5hYmxlZCkub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVSZWdpc3RyeVtpbmRleF0uZW5hYmxlZCA9IHZhbHVlO1xuICAgICAgICAgIHRoaXMucGx1Z2luLnRlbXBsYXRlRW5naW5lLmludmFsaWRhdGVDYWNoZSgpO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnN0IGRldGFpbHNUb2dnbGUgPSB3cmFwcGVyLmNyZWF0ZUVsKFwiZGV0YWlsc1wiKTtcbiAgICBkZXRhaWxzVG9nZ2xlLmNyZWF0ZUVsKFwic3VtbWFyeVwiLCB7XG4gICAgICB0ZXh0OiBcIkNvbmZpZ3VyZVwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDhweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGV0YWlscyA9IGRldGFpbHNUb2dnbGUuY3JlYXRlRGl2KCk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBY3Rpdml0eSB0eXBlXCIpXG4gICAgICAuc2V0RGVzYyhcIlRoZSB2YWx1ZSBvZiB0aGUgJ2FjdGl2aXR5JyBmcm9udG1hdHRlciBmaWVsZCAoZS5nLiwgd29ya291dCwgZ3VpdGFyKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJ3b3Jrb3V0XCIpXG4gICAgICAgICAgLnNldFZhbHVlKGVudHJ5LmFjdGl2aXR5VHlwZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsYXRlUmVnaXN0cnlbaW5kZXhdLmFjdGl2aXR5VHlwZSA9IHYudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlRlbXBsYXRlIHBhdGhcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgcGF0aCB0byB0aGUgLmpzIHRlbXBsYXRlIGZpbGUgKGUuZy4sIFRlbXBsYXRlcy9Xb3Jrb3V0LmpzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJUZW1wbGF0ZXMvV29ya291dC5qc1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZShlbnRyeS50ZW1wbGF0ZVBhdGgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGF0ZVJlZ2lzdHJ5W2luZGV4XS50ZW1wbGF0ZVBhdGggPSB2LnRyaW0oKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnRlbXBsYXRlRW5naW5lLmludmFsaWRhdGVDYWNoZSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG5cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dChcIkRlbGV0ZSBNYXBwaW5nXCIpXG4gICAgICAgICAgLnNldFdhcm5pbmcoKVxuICAgICAgICAgIC5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsYXRlUmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnRlbXBsYXRlRW5naW5lLmludmFsaWRhdGVDYWNoZSgpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBUZW1wbGUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRlbXBsZSBVcGtlZXBcIiwgXCJcXHV7MUYzREJ9XFx1RkUwRlwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHRhc2sgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXTtcblxuICAgICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgICAgLnNldE5hbWUoYCR7dGFzay5lbW9qaX0gJHt0YXNrLm5hbWV9YClcbiAgICAgICAgLnNldERlc2MoYEV2ZXJ5ICR7dGFzay5pbnRlcnZhbERheXN9IGRheShzKWApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJOYW1lXCIpLnNldFZhbHVlKHRhc2submFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLm5hbWUgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiRGF5c1wiKS5zZXRWYWx1ZShTdHJpbmcodGFzay5pbnRlcnZhbERheXMpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5pbnRlcnZhbERheXMgPSBuO1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJFbW9qaVwiKS5zZXRWYWx1ZSh0YXNrLmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0uZW1vamkgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgVGVtcGxlIFRhc2tcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdGVtcGxlLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgIG5hbWU6IFwiTmV3IFRhc2tcIixcbiAgICAgICAgICBsYXN0Q29tcGxldGVkOiBudWxsLFxuICAgICAgICAgIGludGVydmFsRGF5czogNyxcbiAgICAgICAgICBlbW9qaTogXCJcXHUyNzI4XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJDYWxlbmRhclNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQ2FsZW5kYXIgSW50ZWdyYXRpb25cIiwgXCJcXHV7MUY0QzV9XCIpO1xuXG4gICAgYm9keS5jcmVhdGVFbChcInBcIiwge1xuICAgICAgdGV4dDogXCJNZXJnZSBleHRlcm5hbCB0YXNrcyBpbnRvIHlvdXIgRGF5IE1hcCB0aW1lbGluZS5cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXNcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJEYWlseSBOb3RlcyBpbnRlZ3JhdGlvblwiKVxuICAgICAgLnNldERlc2MoXCJQYXJzZSB0YXNrcyBmcm9tIHlvdXIgZGFpbHkgbm90ZXMgKC0gWyBdIFRhc2sgQHRpbWUgfjMwbSlcIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRGFpbHkgTm90ZXMgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIFlZWVktTU0tREQubWQgbm90ZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiRGFpbHkgTm90ZXNcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXIgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBPcHRpb24gQjogVGFza3MgUGx1Z2luXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiVGFza3MgUGx1Z2luIGludGVncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlYWQgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgZnJvbSB0aGUgVGFza3MgcGx1Z2luXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbiA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gT3B0aW9uIEM6IFF1aWNrIFRhc2tzXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVpY2sgVGFza3NcIilcbiAgICAgIC5zZXREZXNjKFwiT2xlbidzIGJ1aWx0LWluIHRhc2sgc3lzdGVtXCIpXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MgPSB2O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIFF1aWNrIFRhc2tzIGxpc3RcbiAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICBjb25zdCB0b2RheVRhc2tzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maWx0ZXIoXG4gICAgICAgIChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXlcbiAgICAgICk7XG5cbiAgICAgIGlmICh0b2RheVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gYm9keS5jcmVhdGVEaXYoe1xuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luOiA4cHggMDsgcGFkZGluZzogOHB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLW1vZGlmaWVyLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDZweDtcIiB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsaXN0RWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICAgIHRleHQ6IFwiVG9kYXkncyBRdWljayBUYXNrc1wiLFxuICAgICAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjllbTsgbWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrc1tpXTtcbiAgICAgICAgICBpZiAocXQuZGF0ZSAhPT0gdG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbmV3IFNldHRpbmcobGlzdEVsKVxuICAgICAgICAgICAgLnNldE5hbWUoYCR7cXQuZG9uZSA/IFwiXFx1MjcxM1wiIDogXCJcXHUyNUNCXCJ9ICR7cXQudGl0bGV9YClcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICBbcXQudGltZSwgcXQuZHVyYXRpb24gPyBgJHtxdC5kdXJhdGlvbn1tYCA6IFwiXCJdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiIFx1MDBCNyBcIikgfHwgXCJObyB0aW1lIHNldFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiRGVsZXRlXCIpLnNldFdhcm5pbmcoKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiKyBBZGQgUXVpY2sgVGFza1wiKS5vbkNsaWNrKCgpID0+IHtcbiAgICAgICAgICAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCk7XG4gICAgICAgICAgLy8gQ2xvc2Ugc2V0dGluZ3MgXHUyMDE0IHRoZSBkaWFsb2cgYXBwZWFycyBvbiB0b3BcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIFRoZW1lIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyVGhlbWVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlRoZW1lXCIsIFwiXFx1ezFGM0E4fVwiKTtcblxuICAgIGNvbnN0IHRoZW1lRmllbGRzOiB7IGtleTogc3RyaW5nOyBsYWJlbDogc3RyaW5nOyBkZWZhdWx0VmFsOiBzdHJpbmcgfVtdID0gW1xuICAgICAgeyBrZXk6IFwiYmdQcmltYXJ5XCIsIGxhYmVsOiBcIkJhY2tncm91bmRcIiwgZGVmYXVsdFZhbDogXCIjMGMwYTA5XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRQcmltYXJ5XCIsIGxhYmVsOiBcIlRleHRcIiwgZGVmYXVsdFZhbDogXCIjZjVmMGU4XCIgfSxcbiAgICAgIHsga2V5OiBcInRleHRNdXRlZFwiLCBsYWJlbDogXCJNdXRlZCB0ZXh0XCIsIGRlZmF1bHRWYWw6IFwiIzkyOGQ4NVwiIH0sXG4gICAgICB7IGtleTogXCJhY2NlbnRHb2xkXCIsIGxhYmVsOiBcIkFjY2VudCAoZ29sZClcIiwgZGVmYXVsdFZhbDogXCIjYzlhODRjXCIgfSxcbiAgICAgIHsga2V5OiBcImRhbmdlclwiLCBsYWJlbDogXCJEYW5nZXJcIiwgZGVmYXVsdFZhbDogXCIjOGIyZDM1XCIgfSxcbiAgICAgIHsga2V5OiBcInN1Y2Nlc3NcIiwgbGFiZWw6IFwiU3VjY2Vzc1wiLCBkZWZhdWx0VmFsOiBcIiNkNDk0MGFcIiB9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoZW1lRmllbGRzKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShmaWVsZC5sYWJlbClcbiAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT5cbiAgICAgICAgICBjcFxuICAgICAgICAgICAgLnNldFZhbHVlKFxuICAgICAgICAgICAgICAodGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgYXMgYW55KT8uW2ZpZWxkLmtleV0gPz8gZmllbGQuZGVmYXVsdFZhbFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyBhcyBhbnkpW2ZpZWxkLmtleV0gPSB2O1xuICAgICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgbmV3IFNldHRpbmcoYm9keSkuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICBidG4uc2V0QnV0dG9uVGV4dChcIlJlc2V0IHRvIEVseXNpYW4gRGFya1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXMgPSB7fTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICBuZXcgTm90aWNlKFwiVGhlbWUgcmVzZXQgdG8gRWx5c2lhbiBEYXJrIGRlZmF1bHRzXCIpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLy8gLS0tIEFkdmFuY2VkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkFkdmFuY2VkXCIsIFwiXFx1MjY5OVxcdUZFMEZcIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJTaW11bGF0ZWQgZGF0ZVwiKVxuICAgICAgLnNldERlc2MoXCJPdmVycmlkZSB0b2RheSdzIGRhdGUgZm9yIHRlc3RpbmcgKFlZWVktTU0tREQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIllZWVktTU0tRERcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA9IHYudHJpbSgpIHx8IG51bGw7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlN5c3RlbSBzdGF0ZVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkXG4gICAgICAgICAgLmFkZE9wdGlvbnMoeyBhY3RpdmU6IFwiQWN0aXZlXCIsIHBhdXNlZDogXCJQYXVzZWRcIiB9KVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1N0YXRlID0gdiBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIjtcbiAgICAgICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gXCJwYXVzZWRcIiAmJiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJhY3RpdmVcIikge1xuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3U3RhdGUgPT09IFwiYWN0aXZlXCIgJiYgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCIpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGF1c2VkTXMgPSBEYXRlLm5vdygpIC0gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50b3RhbFBhdXNlZFRpbWUgKz0gcGF1c2VkTXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSBuZXdTdGF0ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiUXVvdGUgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIHF1b3RlIGZpbGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcIlF1b3Rlcy9TdG9pY1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5xdW90ZUZvbGRlclBhdGggPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJSZS1ydW4gbWlncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlJlLWltcG9ydCBkYXRhIGZyb20gdGhlIE15dGhvbG9naWNhbCBIYWJpdCBUcmFja2VyIHBsdWdpblwiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIk1pZ3JhdGVcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm1pZ3JhdGVkID0gZmFsc2U7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgLy8gUmVsb2FkIHRoZSBwbHVnaW4gdG8gdHJpZ2dlciBtaWdyYXRpb25cbiAgICAgICAgICBhd2FpdCAodGhpcy5wbHVnaW4gYXMgYW55KS5vbmxvYWQoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICBuZXcgTm90aWNlKFwiTWlncmF0aW9uIGNvbXBsZXRlXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBEZXZlbG9wZXIgRGFzaGJvYXJkIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyRGV2RGFzaGJvYXJkU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJEZXZlbG9wZXIgRGFzaGJvYXJkXCIsIFwiXFx1ezFGNkUwfVxcdUZFMEZcIik7XG5cbiAgICBib2R5LmNyZWF0ZUVsKFwicFwiLCB7XG4gICAgICB0ZXh0OiBcIkVkaXQgdGhlIHJhdyBkZXZDb25maWcgSlNPTi4gQ2hhbmdlcyBhcmUgYXBwbGllZCBvbiBzYXZlLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHRleHRhcmVhID0gYm9keS5jcmVhdGVFbChcInRleHRhcmVhXCIsIHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogMzAwcHg7IGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7IGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpOyBjb2xvcjogdmFyKC0tdGV4dC1ub3JtYWwpO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHg7IHJlc2l6ZTogdmVydGljYWw7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLCBudWxsLCAyKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiU2F2ZSBkZXZDb25maWdcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UodGV4dGFyZWEudmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgICAge30sXG4gICAgICAgICAgICAgIERFRkFVTFRfREVWX0NPTkZJRyxcbiAgICAgICAgICAgICAgcGFyc2VkXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiZGV2Q29uZmlnIHNhdmVkIGFuZCBhcHBsaWVkXCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gZGVmYXVsdHNcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnID0geyAuLi5ERUZBVUxUX0RFVl9DT05GSUcgfTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZywgbnVsbCwgMik7XG4gICAgICAgICAgbmV3IE5vdGljZShcImRldkNvbmZpZyByZXNldCB0byBkZWZhdWx0c1wiKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBvcnQvSW1wb3J0XG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiRXhwb3J0IGFsbCBzZXR0aW5nc1wiKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkNvcHkgdG8gY2xpcGJvYXJkXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncywgbnVsbCwgMik7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGpzb24pO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlNldHRpbmdzIGNvcGllZCB0byBjbGlwYm9hcmRcIik7XG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICAvLyBGYWxsYmFjayBmb3IgbW9iaWxlIFx1MjAxNCBzaG93IGluIGEgdGV4dGFyZWEgZm9yIG1hbnVhbCBjb3B5XG4gICAgICAgICAgICBjb25zdCB0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgICAgIHRhLnZhbHVlID0ganNvbjtcbiAgICAgICAgICAgIHRhLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOmZpeGVkO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDo1MCU7ei1pbmRleDo5OTk5O2ZvbnQtc2l6ZToxMXB4O1wiO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YSk7XG4gICAgICAgICAgICB0YS5zZWxlY3QoKTtcbiAgICAgICAgICAgIHRhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHRhLnJlbW92ZSgpKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJUYXAgdGhlIHRleHQgYXJlYSBhbmQgY29weSBtYW51YWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiSW1wb3J0IHNldHRpbmdzXCIpXG4gICAgICAuYWRkVGV4dEFyZWEoKGFyZWEpID0+IHtcbiAgICAgICAgYXJlYS5zZXRQbGFjZWhvbGRlcihcIlBhc3RlIEpTT04gaGVyZS4uLlwiKTtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjgwcHhcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUuZm9udFNpemUgPSBcIjExcHhcIjtcblxuICAgICAgICAvLyBTdG9yZSByZWZlcmVuY2UgZm9yIHRoZSBpbXBvcnQgYnV0dG9uXG4gICAgICAgIChib2R5IGFzIGFueSkuX2ltcG9ydEFyZWEgPSBhcmVhO1xuICAgICAgfSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJJbXBvcnRcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhcmVhID0gKGJvZHkgYXMgYW55KS5faW1wb3J0QXJlYTtcbiAgICAgICAgICAgIGlmICghYXJlYSkgcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShhcmVhLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFyc2VkKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiU2V0dGluZ3MgaW1wb3J0ZWQgc3VjY2Vzc2Z1bGx5XCIpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIkludmFsaWQgSlNPTiBcdTIwMTQgcGxlYXNlIGNoZWNrIHN5bnRheFwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGF0ZSBFbmdpbmVcbi8vIExvYWRzIC5qcyB0ZW1wbGF0ZSBmaWxlcyBmcm9tIHZhdWx0LCBjcmVhdGVzIGEgc2FuZGJveGVkXG4vLyBleGVjdXRpb24gY29udGV4dCB3aXRoIGRhdGEtYmluZGluZyB0byBub3RlIGZyb250bWF0dGVyLFxuLy8gYW5kIHJlbmRlcnMgVUkgaW50byBhIGNvbnRhaW5lciBlbGVtZW50LlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHR5cGUgeyBUZW1wbGF0ZVJlZ2lzdHJ5RW50cnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuLyoqXG4gKiBUaGUgY29udGV4dCBvYmplY3QgcGFzc2VkIHRvIGV2ZXJ5IHRlbXBsYXRlIGF0IHJ1bnRpbWUuXG4gKiBUZW1wbGF0ZXMgcmVjZWl2ZSB0aGlzIGFzIGBjdHhgIGFuZCB1c2UgaXQgdG8gcmVhZC93cml0ZVxuICogZnJvbnRtYXR0ZXIgYW5kIGJ1aWxkIHRoZWlyIFVJLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRlbXBsYXRlQ29udGV4dCB7XG4gIC8qKiBPYnNpZGlhbiBBcHAgaW5zdGFuY2UgKi9cbiAgYXBwOiBBcHA7XG4gIC8qKiBPbGVuIHBsdWdpbiByZWZlcmVuY2UgKi9cbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICAvKiogVGhlIGRhdGEgbm90ZSBjdXJyZW50bHkgYmVpbmcgdmlld2VkICovXG4gIGZpbGU6IFRGaWxlO1xuICAvKiogRE9NIGNvbnRhaW5lciB0byByZW5kZXIgaW50byAqL1xuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuXG4gIC8vIC0tLSBEYXRhIEJpbmRpbmcgLS0tXG5cbiAgLyoqIFNuYXBzaG90IG9mIHRoZSBub3RlJ3MgY3VycmVudCBmcm9udG1hdHRlciAocmVhZC1vbmx5IG9iamVjdCkgKi9cbiAgZnJvbnRtYXR0ZXI6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICAvKiogR2V0IGEgc2luZ2xlIGZyb250bWF0dGVyIHZhbHVlLCBvciBhbGwgZnJvbnRtYXR0ZXIgaWYgbm8ga2V5ICovXG4gIGdldERhdGEoa2V5Pzogc3RyaW5nKTogdW5rbm93bjtcbiAgLyoqIFdyaXRlIGEgc2luZ2xlIGtleSBiYWNrIHRvIHRoZSBub3RlJ3MgZnJvbnRtYXR0ZXIgKi9cbiAgc2V0RGF0YShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+O1xuICAvKiogQmF0Y2gtd3JpdGUgbXVsdGlwbGUga2V5cyB0byB0aGUgbm90ZSdzIGZyb250bWF0dGVyICovXG4gIHNldE11bHRpcGxlRGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IFByb21pc2U8dm9pZD47XG5cbiAgLy8gLS0tIFZhdWx0IEhlbHBlcnMgLS0tXG5cbiAgLyoqIFJlYWQgcmF3IHRleHQgb2YgYW55IHZhdWx0IGZpbGUgYnkgcGF0aCAqL1xuICByZWFkRmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+O1xuICAvKiogR2V0IGFsbCBtYXJrZG93biBmaWxlcyBpbnNpZGUgYSBmb2xkZXIgKi9cbiAgZ2V0RmlsZXNJbkZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBURmlsZVtdO1xuICAvKiogR2V0IGZyb250bWF0dGVyIG9mIGFueSBmaWxlIGJ5IHBhdGggKi9cbiAgZ2V0RmlsZU1ldGFkYXRhKHBhdGg6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbDtcblxuICAvLyAtLS0gVXRpbGl0aWVzIC0tLVxuXG4gIC8qKiBPYnNpZGlhbiBOb3RpY2UgZm9yIHRvYXN0cyAqL1xuICBub3RpY2UobWVzc2FnZTogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogdm9pZDtcbiAgLyoqIG1vbWVudC5qcyAocHJvdmlkZWQgYnkgT2JzaWRpYW4gZ2xvYmFsbHkpICovXG4gIG1vbWVudDogdHlwZW9mIHdpbmRvdy5tb21lbnQ7XG4gIC8qKiBDcmVhdGUgYW4gSFRNTCBlbGVtZW50IChzaG9ydGhhbmQpICovXG4gIGNyZWF0ZUVsPEsgZXh0ZW5kcyBrZXlvZiBIVE1MRWxlbWVudFRhZ05hbWVNYXA+KFxuICAgIHRhZzogSyxcbiAgICBhdHRycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICk6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtLXTtcbn1cblxuLyoqXG4gKiBDb3JlIGVuZ2luZSB0aGF0IG1hbmFnZXMgdGVtcGxhdGUgbG9va3VwLCBsb2FkaW5nLCBhbmQgZXhlY3V0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVFbmdpbmUge1xuICBwcml2YXRlIGFwcDogQXBwO1xuICBwcml2YXRlIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgLyoqIENhY2hlIG9mIGxvYWRlZCB0ZW1wbGF0ZSBzb3VyY2UgY29kZSAocGF0aCBcdTIxOTIgc291cmNlKSAqL1xuICBwcml2YXRlIHRlbXBsYXRlQ2FjaGU6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgLy8gLS0tIFJlZ2lzdHJ5IExvb2t1cCAtLS1cblxuICAvKipcbiAgICogRmluZCB0aGUgdGVtcGxhdGUgcmVnaXN0cnkgZW50cnkgZm9yIGEgZ2l2ZW4gYWN0aXZpdHkgdHlwZS5cbiAgICovXG4gIGZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGU6IHN0cmluZyk6IFRlbXBsYXRlUmVnaXN0cnlFbnRyeSB8IG51bGwge1xuICAgIGNvbnN0IGVudHJ5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxhdGVSZWdpc3RyeS5maW5kKFxuICAgICAgKGUpID0+IGUuYWN0aXZpdHlUeXBlID09PSBhY3Rpdml0eVR5cGUgJiYgZS5lbmFibGVkLFxuICAgICk7XG4gICAgcmV0dXJuIGVudHJ5ID8/IG51bGw7XG4gIH1cblxuICAvLyAtLS0gVGVtcGxhdGUgTG9hZGluZyAtLS1cblxuICAvKipcbiAgICogTG9hZCB0aGUgdGVtcGxhdGUgc291cmNlIGZyb20gdmF1bHQuIENhY2hlcyBmb3IgdGhlIHNlc3Npb24uXG4gICAqL1xuICBhc3luYyBsb2FkVGVtcGxhdGVTb3VyY2UodGVtcGxhdGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAvLyBDaGVjayBjYWNoZSBmaXJzdFxuICAgIGlmICh0aGlzLnRlbXBsYXRlQ2FjaGUuaGFzKHRlbXBsYXRlUGF0aCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlQ2FjaGUuZ2V0KHRlbXBsYXRlUGF0aCkhO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBwYXRoIFx1MjAxNCBhZGQgLmpzIGlmIG1pc3NpbmdcbiAgICBsZXQgcmVzb2x2ZWRQYXRoID0gdGVtcGxhdGVQYXRoO1xuICAgIGlmICghcmVzb2x2ZWRQYXRoLmVuZHNXaXRoKFwiLmpzXCIpICYmICFyZXNvbHZlZFBhdGguZW5kc1dpdGgoXCIubWRcIikpIHtcbiAgICAgIHJlc29sdmVkUGF0aCArPSBcIi5qc1wiO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocmVzb2x2ZWRQYXRoKTtcbiAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5zZXQodGVtcGxhdGVQYXRoLCBzb3VyY2UpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE9sZW4gVGVtcGxhdGVFbmdpbmU6IEZhaWxlZCB0byByZWFkIHRlbXBsYXRlICR7cmVzb2x2ZWRQYXRofTpgLCBlcnIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGUgdGhlIGNhY2hlIGZvciBhIHNwZWNpZmljIHRlbXBsYXRlIChlLmcuIGFmdGVyIGVkaXRzKS5cbiAgICovXG4gIGludmFsaWRhdGVDYWNoZSh0ZW1wbGF0ZVBhdGg/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGVtcGxhdGVQYXRoKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlQ2FjaGUuZGVsZXRlKHRlbXBsYXRlUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBDb250ZXh0IENyZWF0aW9uIC0tLVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgVGVtcGxhdGVDb250ZXh0IHRoYXQgZ2V0cyBwYXNzZWQgdG8gdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZENvbnRleHQoXG4gICAgZmlsZTogVEZpbGUsXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICk6IFRlbXBsYXRlQ29udGV4dCB7XG4gICAgY29uc3QgYXBwID0gdGhpcy5hcHA7XG4gICAgY29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW47XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXBwLFxuICAgICAgcGx1Z2luLFxuICAgICAgZmlsZSxcbiAgICAgIGNvbnRhaW5lcixcblxuICAgICAgLy8gLS0tIERhdGEgQmluZGluZyAtLS1cblxuICAgICAgZnJvbnRtYXR0ZXI6IHsgLi4uZnJvbnRtYXR0ZXIgfSxcblxuICAgICAgZ2V0RGF0YShrZXk/OiBzdHJpbmcpOiB1bmtub3duIHtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiB7IC4uLmZyb250bWF0dGVyIH07XG4gICAgICAgIHJldHVybiBmcm9udG1hdHRlcltrZXldO1xuICAgICAgfSxcblxuICAgICAgYXN5bmMgc2V0RGF0YShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZm0pID0+IHtcbiAgICAgICAgICBmbVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgb3VyIGxvY2FsIHNuYXBzaG90XG4gICAgICAgIGZyb250bWF0dGVyW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIHNldE11bHRpcGxlRGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgICBmbVtrXSA9IHY7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVXBkYXRlIGxvY2FsIHNuYXBzaG90XG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgZnJvbnRtYXR0ZXJba10gPSB2O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyAtLS0gVmF1bHQgSGVscGVycyAtLS1cblxuICAgICAgYXN5bmMgcmVhZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgICAgIGNvbnN0IGYgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoIWYgfHwgIShmIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGFwcC52YXVsdC5yZWFkKGYpO1xuICAgICAgfSxcblxuICAgICAgZ2V0RmlsZXNJbkZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBURmlsZVtdIHtcbiAgICAgICAgcmV0dXJuIGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKFxuICAgICAgICAgIChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpLFxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgZ2V0RmlsZU1ldGFkYXRhKHBhdGg6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGYgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoIWYgfHwgIShmIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZik7XG4gICAgICAgIHJldHVybiAoY2FjaGU/LmZyb250bWF0dGVyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyBudWxsO1xuICAgICAgfSxcblxuICAgICAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAgICAgbm90aWNlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBuZXcgTm90aWNlKG1lc3NhZ2UsIHRpbWVvdXQpO1xuICAgICAgfSxcblxuICAgICAgbW9tZW50OiB3aW5kb3cubW9tZW50LFxuXG4gICAgICBjcmVhdGVFbDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICAgICAgdGFnOiBLLFxuICAgICAgICBhdHRycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cnMpKSB7XG4gICAgICAgICAgICBpZiAoayA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcImh0bWxcIikge1xuICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcImNsc1wiIHx8IGsgPT09IFwiY2xhc3NcIikge1xuICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tLSBSZW5kZXJpbmcgLS0tXG5cbiAgLyoqXG4gICAqIE1haW4gcmVuZGVyIG1ldGhvZC4gTG9hZHMgYSB0ZW1wbGF0ZSBhbmQgcmVuZGVycyBpdCBpbnRvIGEgY29udGFpbmVyXG4gICAqIGJvdW5kIHRvIHRoZSBnaXZlbiBub3RlJ3MgZnJvbnRtYXR0ZXIuXG4gICAqL1xuICBhc3luYyByZW5kZXIoXG4gICAgdGVtcGxhdGVQYXRoOiBzdHJpbmcsXG4gICAgZmlsZTogVEZpbGUsXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy8gMS4gTG9hZCB0ZW1wbGF0ZSBzb3VyY2VcbiAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCB0aGlzLmxvYWRUZW1wbGF0ZVNvdXJjZSh0ZW1wbGF0ZVBhdGgpO1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGBUZW1wbGF0ZSBub3QgZm91bmQ6ICR7dGVtcGxhdGVQYXRofWAsXG4gICAgICAgIFwiQ3JlYXRlIHRoZSB0ZW1wbGF0ZSBmaWxlIGluIHlvdXIgdmF1bHQsIG9yIHVwZGF0ZSB0aGUgcGF0aCBpbiBPbGVuIFNldHRpbmdzIFx1MjE5MiBUZW1wbGF0ZSBSZWdpc3RyeS5cIixcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMi4gR2V0IGN1cnJlbnQgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgIGNvbnN0IGZyb250bWF0dGVyID0gKGNhY2hlPy5mcm9udG1hdHRlciBhcyBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPikgPz8ge307XG5cbiAgICAvLyAzLiBCdWlsZCBjb250ZXh0XG4gICAgY29uc3QgY3R4ID0gdGhpcy5idWlsZENvbnRleHQoZmlsZSwgY29udGFpbmVyLCBmcm9udG1hdHRlcik7XG5cbiAgICAvLyA0LiBFeGVjdXRlIHRlbXBsYXRlXG4gICAgdHJ5IHtcbiAgICAgIC8vIFdlIHdyYXAgdGhlIHRlbXBsYXRlIHNvdXJjZSBzbyB0aGF0IGBjdHhgIGlzIGF2YWlsYWJsZSBhcyBhIGxvY2FsIHZhcmlhYmxlLlxuICAgICAgLy8gVGhlIHRlbXBsYXRlIGNvZGUgY2FuIGRlc3RydWN0dXJlIGZyb20gY3R4IG9yIHVzZSBpdCBkaXJlY3RseS5cbiAgICAgIGNvbnN0IGZuID0gbmV3IEZ1bmN0aW9uKFwiY3R4XCIsIHNvdXJjZSk7XG4gICAgICBjb25zdCByZXN1bHQgPSBmbihjdHgpO1xuXG4gICAgICAvLyBJZiB0aGUgdGVtcGxhdGUgcmV0dXJucyBhIHByb21pc2UgKGFzeW5jIHRlbXBsYXRlKSwgYXdhaXQgaXRcbiAgICAgIGlmIChyZXN1bHQgJiYgdHlwZW9mIHJlc3VsdC50aGVuID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgYXdhaXQgcmVzdWx0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE9sZW4gVGVtcGxhdGVFbmdpbmU6IEVycm9yIGV4ZWN1dGluZyB0ZW1wbGF0ZSAke3RlbXBsYXRlUGF0aH06YCwgZXJyKTtcbiAgICAgIHRoaXMucmVuZGVyRXJyb3IoXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgYFRlbXBsYXRlIGVycm9yOiAkeyhlcnIgYXMgRXJyb3IpLm1lc3NhZ2V9YCxcbiAgICAgICAgYEluIHRlbXBsYXRlOiAke3RlbXBsYXRlUGF0aH1gLFxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGFuIGVycm9yIG1lc3NhZ2UgaW5zaWRlIHRoZSBjb250YWluZXIuXG4gICAqL1xuICBwcml2YXRlIHJlbmRlckVycm9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIHRpdGxlOiBzdHJpbmcsIGhpbnQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuICAgIGNvbnN0IGVycm9yRGl2ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsYXRlLWVycm9yXCIgfSk7XG4gICAgZXJyb3JEaXYuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvci10aXRsZVwiLCB0ZXh0OiB0aXRsZSB9KTtcbiAgICBlcnJvckRpdi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXRlbXBsYXRlLWVycm9yLWhpbnRcIiwgdGV4dDogaGludCB9KTtcbiAgfVxufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0EsSUFBQUEsbUJBQThEOzs7QUNZdkQsSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxvQkFBb0I7QUFJMUIsSUFBTSxTQUEyQjtBQUFBLEVBQ3RDLEVBQUUsTUFBTSxHQUFHLE1BQU0sb0JBQW9CLE1BQU0sZ0JBQWdCLGFBQWEsc0VBQXNFLE1BQU0saUdBQWlHLFdBQVcsd0JBQXFCO0FBQUEsRUFDclIsRUFBRSxNQUFNLEdBQUcsTUFBTSxnQkFBZ0IsTUFBTSxvQkFBb0IsYUFBYSxpRUFB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
