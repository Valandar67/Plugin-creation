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
            await sleep(100);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL3ZpZXdzL1Nlc3Npb25WaWV3LnRzIiwgInNyYy92aWV3cy9FbWJlZGRlZE1kVmlldy50cyIsICJzcmMvc2V0dGluZ3MvT2xlblNldHRpbmdzLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFBsdWdpbiBFbnRyeSBQb2ludFxuLy8gUmVnaXN0ZXJzIHZpZXdzLCBjb21tYW5kcywgcmliYm9uIGljb24sIHNldHRpbmdzIG1pZ3JhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFBsdWdpbiwgZGVib3VuY2UsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBUcmFja0hhYml0UmFua0RhdGEsIEFjdGl2aXR5Q29uZmlnIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9PTEVOLCBWSUVXX1RZUEVfU0VTU0lPTiwgREVGQVVMVF9PTEVOX1NFVFRJTkdTLCBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfQ0FMRU5EQVJfU0VUVElOR1MgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IERhc2hib2FyZFZpZXcgfSBmcm9tIFwiLi92aWV3cy9EYXNoYm9hcmRWaWV3XCI7XG5pbXBvcnQgeyBTZXNzaW9uVmlldyB9IGZyb20gXCIuL3ZpZXdzL1Nlc3Npb25WaWV3XCI7XG5pbXBvcnQgeyBFbWJlZGRlZE1kVmlldywgVklFV19UWVBFX0VNQkVEREVEIH0gZnJvbSBcIi4vdmlld3MvRW1iZWRkZWRNZFZpZXdcIjtcbmltcG9ydCB0eXBlIHsgRW1iZWRkZWRWaWV3U3RhdGUgfSBmcm9tIFwiLi92aWV3cy9FbWJlZGRlZE1kVmlld1wiO1xuaW1wb3J0IHsgT2xlblNldHRpbmdUYWIgfSBmcm9tIFwiLi9zZXR0aW5ncy9PbGVuU2V0dGluZ3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2xlblBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gIHNldHRpbmdzITogT2xlblNldHRpbmdzO1xuXG4gIGFzeW5jIG9ubG9hZCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBMb2FkIHNldHRpbmdzIHdpdGggZGVmYXVsdHNcbiAgICB0aGlzLnNldHRpbmdzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLFxuICAgICAgYXdhaXQgdGhpcy5sb2FkRGF0YSgpXG4gICAgKTtcblxuICAgIC8vIEVuc3VyZSBkZWVwIGRlZmF1bHRzIGZvciBuZXN0ZWQgb2JqZWN0c1xuICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmRldkNvbmZpZyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuZGV2Q29uZmlnLmxhYmVscyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVsc1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9ycyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5jYXRlZ29yeUNvbG9ycyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlYUCA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5jYXRlZ29yeVhQLFxuICAgICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeVhQXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUyxcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXJcbiAgICApO1xuXG4gICAgLy8gTWlncmF0ZSBmcm9tIFRyYWNrSGFiaXRSYW5rIG9uIGZpcnN0IHJ1blxuICAgIGlmICghdGhpcy5zZXR0aW5ncy5taWdyYXRlZCkge1xuICAgICAgYXdhaXQgdGhpcy5taWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk7XG4gICAgfVxuXG4gICAgLy8gUmVnaXN0ZXIgbWFpbiBkYXNoYm9hcmQgdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX09MRU4sXG4gICAgICAobGVhZikgPT4gbmV3IERhc2hib2FyZFZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmVnaXN0ZXIgc2Vzc2lvbiB2aWV3XG4gICAgdGhpcy5yZWdpc3RlclZpZXcoXG4gICAgICBWSUVXX1RZUEVfU0VTU0lPTixcbiAgICAgIChsZWFmKSA9PiBuZXcgU2Vzc2lvblZpZXcobGVhZiwgdGhpcylcbiAgICApO1xuXG4gICAgLy8gUmVnaXN0ZXIgZW1iZWRkZWQgbWFya2Rvd24gdmlld1xuICAgIHRoaXMucmVnaXN0ZXJWaWV3KFxuICAgICAgVklFV19UWVBFX0VNQkVEREVELFxuICAgICAgKGxlYWYpID0+IG5ldyBFbWJlZGRlZE1kVmlldyhsZWFmLCB0aGlzKVxuICAgICk7XG5cbiAgICAvLyBSaWJib24gaWNvblxuICAgIHRoaXMuYWRkUmliYm9uSWNvbihcImNvbXBhc3NcIiwgXCJPcGVuIE9sZW5cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZURhc2hib2FyZCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQ29tbWFuZHNcbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwib3Blbi1vbGVuLWRhc2hib2FyZFwiLFxuICAgICAgbmFtZTogXCJPcGVuIE9sZW4gRGFzaGJvYXJkXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5hY3RpdmF0ZURhc2hib2FyZCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcInJlZnJlc2gtb2xlbi1kYXNoYm9hcmRcIixcbiAgICAgIG5hbWU6IFwiUmVmcmVzaCBPbGVuIERhc2hib2FyZFwiLFxuICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucmVmcmVzaERhc2hib2FyZCgpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5hZGRDb21tYW5kKHtcbiAgICAgIGlkOiBcImFkZC1xdWljay10YXNrXCIsXG4gICAgICBuYW1lOiBcIkFkZCBRdWljayBUYXNrXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5zaG93UXVpY2tUYXNrRGlhbG9nKCksXG4gICAgfSk7XG5cbiAgICAvLyBDYWxlbmRhciBwbHVnaW4gaW50ZWdyYXRpb24gXHUyMDE0IGluamVjdCBPbGVuIG1ldGFkYXRhIGludG8gQ2FsZW5kYXIgcGx1Z2luXG4gICAgdGhpcy5yZWdpc3RlckNhbGVuZGFyUGx1Z2luU291cmNlKCk7XG5cbiAgICAvLyBEZWJvdW5jZWQgZmlsZSB3YXRjaGVyIGZvciBtZXRhZGF0YSBjaGFuZ2VzXG4gICAgY29uc3QgcmVmcmVzaCA9IGRlYm91bmNlKCgpID0+IHtcbiAgICAgIHRoaXMucmVmcmVzaERhc2hib2FyZCgpO1xuICAgIH0sIDMwMCk7XG5cbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLm9uKFwiY2hhbmdlZFwiLCAoKSA9PiByZWZyZXNoKCkpXG4gICAgKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwiY3JlYXRlXCIsIGFzeW5jIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwibWRcIikge1xuICAgICAgICAgIC8vIFdhaXQgZm9yIG1ldGFkYXRhIHRvIGJlIGluZGV4ZWRcbiAgICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICAgIHdoaWxlIChhdHRlbXB0cyA8IDE1KSB7XG4gICAgICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcikge1xuICAgICAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG4gICAgICAgICAgICBhdHRlbXB0cysrO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWZyZXNoKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLnZhdWx0Lm9uKFwicmVuYW1lXCIsIChmaWxlKSA9PiB7XG4gICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUgJiYgZmlsZS5leHRlbnNpb24gPT09IFwibWRcIikge1xuICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgLy8gU2V0dGluZ3MgdGFiXG4gICAgdGhpcy5hZGRTZXR0aW5nVGFiKG5ldyBPbGVuU2V0dGluZ1RhYih0aGlzLmFwcCwgdGhpcykpO1xuICB9XG5cbiAgb251bmxvYWQoKTogdm9pZCB7XG4gICAgLy8gQ2xlYW51cCBoYW5kbGVkIGJ5IERhc2hib2FyZFZpZXcub25DbG9zZSgpXG4gIH1cblxuICAvLyAtLS0gVmlldyBNYW5hZ2VtZW50IC0tLVxuXG4gIGFzeW5jIGFjdGl2YXRlRGFzaGJvYXJkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHsgd29ya3NwYWNlIH0gPSB0aGlzLmFwcDtcbiAgICBsZXQgbGVhZiA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX09MRU4pWzBdO1xuXG4gICAgaWYgKCFsZWFmKSB7XG4gICAgICBjb25zdCBuZXdMZWFmID0gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgICBpZiAoIW5ld0xlYWYpIHJldHVybjtcbiAgICAgIGF3YWl0IG5ld0xlYWYuc2V0Vmlld1N0YXRlKHsgdHlwZTogVklFV19UWVBFX09MRU4sIGFjdGl2ZTogdHJ1ZSB9KTtcbiAgICAgIGxlYWYgPSBuZXdMZWFmO1xuICAgIH1cblxuICAgIGF3YWl0IHdvcmtzcGFjZS5yZXZlYWxMZWFmKGxlYWYpO1xuICB9XG5cbiAgcmVmcmVzaERhc2hib2FyZCgpOiB2b2lkIHtcbiAgICBjb25zdCBsZWF2ZXMgPSB0aGlzLmFwcC53b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9PTEVOKTtcbiAgICBmb3IgKGNvbnN0IGxlYWYgb2YgbGVhdmVzKSB7XG4gICAgICBjb25zdCB2aWV3ID0gbGVhZi52aWV3IGFzIHVua25vd24gYXMgRGFzaGJvYXJkVmlldztcbiAgICAgIGlmICh2aWV3ICYmIHR5cGVvZiB2aWV3LnJlbmRlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZpZXcucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYWN0aXZhdGVTZXNzaW9uVmlldygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IHdvcmtzcGFjZSB9ID0gdGhpcy5hcHA7XG5cbiAgICAvLyBDbG9zZSBleGlzdGluZyBzZXNzaW9uIHZpZXdzXG4gICAgd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfU0VTU0lPTikuZm9yRWFjaCgobGVhZikgPT4gbGVhZi5kZXRhY2goKSk7XG5cbiAgICAvLyBPcGVuIHNlc3Npb24gaW4gdGhlIHNhbWUgdGFiIGFzIHRoZSBkYXNoYm9hcmQgaWYgcG9zc2libGVcbiAgICBjb25zdCBkYXNoTGVhdmVzID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgY29uc3QgdGFyZ2V0TGVhZiA9IGRhc2hMZWF2ZXNbMF0gPz8gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgaWYgKCF0YXJnZXRMZWFmKSByZXR1cm47XG5cbiAgICBhd2FpdCB0YXJnZXRMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9TRVNTSU9OLCBhY3RpdmU6IHRydWUgfSk7XG4gICAgYXdhaXQgd29ya3NwYWNlLnJldmVhbExlYWYodGFyZ2V0TGVhZik7XG4gIH1cblxuICBhY3RpdmF0ZURhc2hib2FyZFZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZURhc2hib2FyZCgpO1xuICB9XG5cbiAgYXN5bmMgYWN0aXZhdGVFbWJlZGRlZFZpZXcoc3RhdGU6IEVtYmVkZGVkVmlld1N0YXRlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuXG4gICAgLy8gQ2xvc2UgZXhpc3RpbmcgZW1iZWRkZWQgdmlld3NcbiAgICB3b3Jrc3BhY2UuZ2V0TGVhdmVzT2ZUeXBlKFZJRVdfVFlQRV9FTUJFRERFRCkuZm9yRWFjaCgobGVhZikgPT4gbGVhZi5kZXRhY2goKSk7XG5cbiAgICAvLyBPcGVuIGluIHRoZSBkYXNoYm9hcmQncyB0YWJcbiAgICBjb25zdCBkYXNoTGVhdmVzID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTik7XG4gICAgY29uc3QgdGFyZ2V0TGVhZiA9IGRhc2hMZWF2ZXNbMF0gPz8gd29ya3NwYWNlLmdldExlYWYoXCJ0YWJcIik7XG4gICAgaWYgKCF0YXJnZXRMZWFmKSByZXR1cm47XG5cbiAgICBhd2FpdCB0YXJnZXRMZWFmLnNldFZpZXdTdGF0ZSh7IHR5cGU6IFZJRVdfVFlQRV9FTUJFRERFRCwgYWN0aXZlOiB0cnVlIH0pO1xuXG4gICAgLy8gU2V0IHRoZSBzdGF0ZSBvbiB0aGUgdmlldyBpbnN0YW5jZVxuICAgIGNvbnN0IHZpZXcgPSB0YXJnZXRMZWFmLnZpZXcgYXMgdW5rbm93biBhcyBFbWJlZGRlZE1kVmlldztcbiAgICBpZiAodmlldyAmJiB0eXBlb2Ygdmlldy5zZXRFbWJlZGRlZFN0YXRlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHZpZXcuc2V0RW1iZWRkZWRTdGF0ZShzdGF0ZSk7XG4gICAgICBhd2FpdCB2aWV3LnJlbmRlcigpO1xuICAgIH1cblxuICAgIGF3YWl0IHdvcmtzcGFjZS5yZXZlYWxMZWFmKHRhcmdldExlYWYpO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIFBsdWdpbiBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlZ2lzdGVyQ2FsZW5kYXJQbHVnaW5Tb3VyY2UoKTogdm9pZCB7XG4gICAgLy8gTGlzdGVuIGZvciB0aGUgQ2FsZW5kYXIgcGx1Z2luJ3MgXCJjYWxlbmRhcjpvcGVuXCIgZXZlbnRcbiAgICAvLyBhbmQgaW5qZWN0IE9sZW4ncyBhY3Rpdml0eSBjb21wbGV0aW9uIGRhdGEgYXMgY29sb3JlZCBkb3RzXG4gICAgKHRoaXMuYXBwLndvcmtzcGFjZSBhcyBhbnkpLm9uKFwiY2FsZW5kYXI6b3BlblwiLCAoc291cmNlczogYW55W10pID0+IHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2VzKSkgcmV0dXJuO1xuXG4gICAgICBzb3VyY2VzLnB1c2goe1xuICAgICAgICBnZXREYWlseU1ldGFkYXRhOiAoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3QgZGF0ZVN0ciA9IGRhdGUuZm9ybWF0Py4oXCJZWVlZLU1NLUREXCIpID8/IFwiXCI7XG4gICAgICAgICAgaWYgKCFkYXRlU3RyKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBDb3VudCBjb21wbGV0aW9ucyBmb3IgdGhpcyBkYXRlXG4gICAgICAgICAgbGV0IGNvbXBsZXRpb25zID0gMDtcbiAgICAgICAgICBjb25zdCBjYXRlZ29yaWVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgICAgICAgIGlmICghYWN0aXZpdHkuZW5hYmxlZCkgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuICAgICAgICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZXMuZmluZChcbiAgICAgICAgICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChmaWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgICAgIGlmIChjYWNoZT8uZnJvbnRtYXR0ZXI/LlthY3Rpdml0eS5wcm9wZXJ0eV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucysrO1xuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGFjdGl2aXR5LmNhdGVnb3J5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wbGV0aW9ucyA9PT0gMCkgcmV0dXJuIHt9O1xuXG4gICAgICAgICAgLy8gUmV0dXJuIGRvdHMgY29sb3JlZCBieSBkb21pbmFudCBjYXRlZ29yeVxuICAgICAgICAgIGNvbnN0IGRvdHMgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICAgICAgICBkb3RzLnB1c2goe1xuICAgICAgICAgICAgICBjb2xvcjogdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXQgYXMga2V5b2YgdHlwZW9mIHRoaXMuc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNdID8/IFwiIzkyOGQ4NVwiLFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGBvbGVuLWNhbC1kb3QtJHtjYXR9YCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkb3RzLFxuICAgICAgICAgICAgY2xhc3NlczogY29tcGxldGlvbnMgPj0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKS5sZW5ndGhcbiAgICAgICAgICAgICAgPyBcIm9sZW4tY2FsLWNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0V2Vla2x5TWV0YWRhdGE6ICgpID0+ICh7fSksXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBRdWljayBUYXNrIERpYWxvZyAtLS1cblxuICBwcml2YXRlIHNob3dRdWlja1Rhc2tEaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsLmNsYXNzTmFtZSA9IFwib2xlbi1xdWljay10YXNrLW1vZGFsXCI7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1zaGVldFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpdGxlXCI+QWRkIFF1aWNrIFRhc2s8L2Rpdj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2staW5wdXRcIiBwbGFjZWhvbGRlcj1cIlRhc2sgbmFtZVwiIGF1dG9mb2N1cyAvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXJvd1wiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiIGNsYXNzPVwib2xlbi1xdWljay10YXNrLXRpbWVcIiAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIiBwbGFjZWhvbGRlcj1cIkR1cmF0aW9uIChtaW4pXCIgbWluPVwiNVwiIG1heD1cIjQ4MFwiIHZhbHVlPVwiMzBcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1hY3Rpb25zXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFkZFwiPkFkZDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICAgIGNvbnN0IGJhY2tkcm9wID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYmFja2Ryb3BcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stY2FuY2VsXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IGFkZEJ0biA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWFkZFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCB0aXRsZUlucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2staW5wdXRcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCB0aW1lSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay10aW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgZHVyYXRpb25JbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLWR1cmF0aW9uXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG5cbiAgICBjb25zdCBjbG9zZSA9ICgpID0+IG1vZGFsLnJlbW92ZSgpO1xuXG4gICAgYmFja2Ryb3AuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlKTtcblxuICAgIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgdGl0bGUgPSB0aXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBlbnRlciBhIHRhc2sgbmFtZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBub3cgPSB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgICAgPyBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICAgIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgICB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgcXQtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkYXRlOiB0b2RheSxcbiAgICAgICAgdGltZTogdGltZUlucHV0LnZhbHVlIHx8IHVuZGVmaW5lZCxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlSW50KGR1cmF0aW9uSW5wdXQudmFsdWUpIHx8IDMwLFxuICAgICAgICBkb25lOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgICBuZXcgTm90aWNlKGBcXHUyNkExIFF1aWNrIHRhc2sgYWRkZWQ6ICR7dGl0bGV9YCk7XG4gICAgICBjbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgLy8gRm9jdXMgdGhlIGlucHV0XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aXRsZUlucHV0LmZvY3VzKCksIDUwKTtcbiAgfVxuXG4gIC8vIC0tLSBTZXR0aW5ncyBQZXJzaXN0ZW5jZSAtLS1cblxuICBhc3luYyBzYXZlU2V0dGluZ3MoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBNaWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlRnJvbVRyYWNrSGFiaXRSYW5rKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhUGF0aCA9IFwiLm9ic2lkaWFuL3BsdWdpbnMvbXl0aG9sb2dpY2FsLWhhYml0LXRyYWNrZXIvZGF0YS5qc29uXCI7XG4gICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5hZGFwdGVyLmV4aXN0cyhkYXRhUGF0aCk7XG5cbiAgICAgIGlmICghZXhpc3RzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIucmVhZChkYXRhUGF0aCk7XG4gICAgICBjb25zdCBkYXRhOiBUcmFja0hhYml0UmFua0RhdGEgPSBKU09OLnBhcnNlKHJhdyk7XG5cbiAgICAgIC8vIE1pZ3JhdGUgYm9zcyBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50VGllciA9IGRhdGEuY3VycmVudFRpZXIgPz8gMTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc01heEhQID0gZGF0YS5ib3NzTWF4SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBkYXRhLmJvc3NDdXJyZW50SFAgPz8gMzU7XG4gICAgICB0aGlzLnNldHRpbmdzLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID0gZGF0YS5jb25zZWN1dGl2ZVBlcmZlY3RXZWVrcyA/PyAwO1xuICAgICAgdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzID0gZGF0YS5pblRhcnRhcnVzID8/IGZhbHNlO1xuICAgICAgdGhpcy5zZXR0aW5ncy50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA9IGRhdGEudGFydGFydXNQZW5hbmNlVGFza3MgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzU3RhcnREYXRlID0gZGF0YS50YXJ0YXJ1c1N0YXJ0RGF0ZSA/PyBudWxsO1xuICAgICAgdGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID0gZGF0YS5mYWlsZWRUaHJlc2hvbGREYXlzID8/IDA7XG5cbiAgICAgIC8vIE1pZ3JhdGUgdGVtcGxlIHRhc2tzXG4gICAgICBpZiAoZGF0YS50ZW1wbGVUYXNrcyAmJiBkYXRhLnRlbXBsZVRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy50ZW1wbGVUYXNrcyA9IGRhdGEudGVtcGxlVGFza3M7XG4gICAgICB9XG5cbiAgICAgIC8vIE1pZ3JhdGUgcmV3YXJkc1xuICAgICAgdGhpcy5zZXR0aW5ncy5wZW5kaW5nUmV3YXJkcyA9IGRhdGEucGVuZGluZ1Jld2FyZHMgPz8gW107XG4gICAgICB0aGlzLnNldHRpbmdzLmNsYWltZWRSZXdhcmRzID0gKGRhdGEuY2xhaW1lZFJld2FyZHMgPz8gW10pIGFzIGFueTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYmFua2VkUmV3YXJkcyA9IGRhdGEuYmFua2VkUmV3YXJkcyA/PyBbXTtcblxuICAgICAgLy8gTWlncmF0ZSBzeXN0ZW0gc3RhdGVcbiAgICAgIHRoaXMuc2V0dGluZ3Muc3lzdGVtU3RhdGUgPSAoZGF0YS5zeXN0ZW1TdGF0ZSBhcyBcImFjdGl2ZVwiIHwgXCJwYXVzZWRcIikgPz8gXCJhY3RpdmVcIjtcbiAgICAgIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUgPSBkYXRhLnBhdXNlU3RhcnRUaW1lID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSA9IGRhdGEudG90YWxQYXVzZWRUaW1lID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPSBkYXRhLnNpbXVsYXRlZERhdGUgPz8gbnVsbDtcblxuICAgICAgLy8gTWlncmF0ZSBoZXJvIGJhY2tncm91bmRcbiAgICAgIGlmIChkYXRhLmRhc2hib2FyZEJnSW1hZ2UpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5oZXJvQmFja2dyb3VuZCA9IGRhdGEuZGFzaGJvYXJkQmdJbWFnZTtcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSBhY3Rpdml0aWVzIGZyb20gZW5hYmxlZEFjdGl2aXRpZXMgKyBjdXN0b21IYWJpdHNcbiAgICAgIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcyA9IHRoaXMubWlncmF0ZUFjdGl2aXRpZXMoZGF0YSk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcblxuICAgICAgbmV3IE5vdGljZShcIk9sZW46IFN1Y2Nlc3NmdWxseSBtaWdyYXRlZCBkYXRhIGZyb20gTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXJcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiT2xlbiBtaWdyYXRpb24gZXJyb3I6XCIsIGVycik7XG4gICAgICB0aGlzLnNldHRpbmdzLm1pZ3JhdGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtaWdyYXRlQWN0aXZpdGllcyhkYXRhOiBUcmFja0hhYml0UmFua0RhdGEpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCByZXN1bHQ6IEFjdGl2aXR5Q29uZmlnW10gPSBbLi4uREVGQVVMVF9BQ1RJVklUSUVTXTtcblxuICAgIC8vIEFwcGx5IGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcbiAgICBpZiAoZGF0YS5lbmFibGVkQWN0aXZpdGllcykge1xuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZXN1bHQpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aXZpdHkucHJvcGVydHkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGtleSBpbiBkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICAgICAgYWN0aXZpdHkuZW5hYmxlZCA9IGRhdGEuZW5hYmxlZEFjdGl2aXRpZXNba2V5XSA/PyB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgb3ZlcnJpZGVzXG4gICAgaWYgKGRhdGEuYWN0aXZpdHlPdmVycmlkZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb3ZlcnJpZGUgb2YgZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgICBjb25zdCBhY3Rpdml0eSA9IHJlc3VsdC5maW5kKChhKSA9PiBhLmlkID09PSBvdmVycmlkZS5pZCk7XG4gICAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICAgIGlmIChvdmVycmlkZS53ZWVrbHlUYXJnZXQgIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkud2Vla2x5VGFyZ2V0ID0gb3ZlcnJpZGUud2Vla2x5VGFyZ2V0O1xuICAgICAgICAgIGlmIChvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uICE9PSB1bmRlZmluZWQpIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb24gPSBvdmVycmlkZS5kYW1hZ2VQZXJDb21wbGV0aW9uO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGN1c3RvbSBoYWJpdHNcbiAgICBpZiAoZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgIGZvciAoY29uc3QgaGFiaXQgb2YgZGF0YS5jdXN0b21IYWJpdHMpIHtcbiAgICAgICAgLy8gQXZvaWQgZHVwbGljYXRlc1xuICAgICAgICBpZiAocmVzdWx0LnNvbWUoKGEpID0+IGEuaWQgPT09IGhhYml0LmlkKSkgY29udGludWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGlkOiBoYWJpdC5pZCxcbiAgICAgICAgICBuYW1lOiBoYWJpdC5uYW1lLFxuICAgICAgICAgIGVtb2ppOiBoYWJpdC5lbW9qaSA/PyBcIlxcdTJCNTBcIixcbiAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIiwgLy8gRGVmYXVsdCBjdXN0b20gaGFiaXRzIHRvIHNwaXJpdFxuICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgZm9sZGVyOiBoYWJpdC5mb2xkZXIsXG4gICAgICAgICAgcHJvcGVydHk6IGhhYml0LnByb3BlcnR5LFxuICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IGhhYml0LmRhbWFnZVBlckNvbXBsZXRpb24gPz8gMSxcbiAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IGhhYml0LndlZWtseVRhcmdldCA/PyAzLFxuICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgIGhhc1Nlc3Npb246IGZhbHNlLFxuICAgICAgICAgIHByaW9yaXR5OiA1LFxuICAgICAgICAgIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgICAgICAgcHJlZmVycmVkVGltZTogXCJhbnl0aW1lXCIsXG4gICAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICAgICAgICAgIGRhc2hib2FyZFNvdXJjZTogXCJidWlsdGluXCIsXG4gICAgICAgICAgd29ya3NwYWNlU291cmNlOiBcImJ1aWx0aW5cIixcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vLyBVdGlsaXR5XG5mdW5jdGlvbiBzbGVlcChtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ29uc3RhbnRzICYgRGVmYXVsdHNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7XG4gIEJvc3NEZWZpbml0aW9uLFxuICBBY3Rpdml0eUNvbmZpZyxcbiAgT2xlblNldHRpbmdzLFxuICBEZXZDb25maWcsXG4gIEVseXNpYW5UaGVtZSxcbiAgU2Vzc2lvbkNvbXBsZXRpb25TdGF0ZSxcbiAgQ2FsZW5kYXJTZXR0aW5ncyxcbn0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLy8gLS0tIFZpZXcgVHlwZSAtLS1cblxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9PTEVOID0gXCJvbGVuLWRhc2hib2FyZC12aWV3XCI7XG5leHBvcnQgY29uc3QgVklFV19UWVBFX1NFU1NJT04gPSBcIm9sZW4tc2Vzc2lvbi12aWV3XCI7XG5cbi8vIC0tLSBCb3NzIERlZmluaXRpb25zICgxMyB0aWVycykgLS0tXG5cbmV4cG9ydCBjb25zdCBCT1NTRVM6IEJvc3NEZWZpbml0aW9uW10gPSBbXG4gIHsgdGllcjogMSwgbmFtZTogXCJTaGFkb3cgb2YgQXBhdGh5XCIsIHJhbms6IFwiRG9vbXNjcm9sbGVyXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB3ZWlnaHQgb2YgaW5lcnRpYSB0aGF0IGtlZXBzIHlvdSBzY3JvbGxpbmcgaW5zdGVhZCBvZiBzdGFydGluZ1wiLCBsb3JlOiBcIkJvcm4gZnJvbSBmb3Jnb3R0ZW4gcHJvbWlzZXMgYW5kIHVub3BlbmVkIGd5bSBiYWdzLCB0aGUgU2hhZG93IGZlZWRzIG9uIHBvdGVudGlhbCB1bnJlYWxpemVkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjFcIiB9LFxuICB7IHRpZXI6IDIsIG5hbWU6IFwiU2lyZW4ncyBDYWxsXCIsIHJhbms6IFwiQXJtY2hhaXIgR2VuZXJhbFwiLCBkZXNjcmlwdGlvbjogXCJEaXN0cmFjdGlvbidzIHN3ZWV0IHNvbmcgdGhhdCBwdWxscyBmb2N1cyBmcm9tIGNvbW1pdHRlZCB3b3JrXCIsIGxvcmU6IFwiU2hlIHNpbmdzIG9mIGVhc2llciBwYXRocywgb2YganVzdCBvbmUgbW9yZSB2aWRlbywgb2Ygc3RhcnRpbmcgdG9tb3Jyb3cgaW5zdGVhZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS4yXCIgfSxcbiAgeyB0aWVyOiAzLCBuYW1lOiBcIkh5ZHJhIG9mIEhhYml0c1wiLCByYW5rOiBcIkFwcHJlbnRpY2VcIiwgZGVzY3JpcHRpb246IFwiVGhlIGNvbXBsZXhpdHkgb2YgbWFuYWdpbmcgbXVsdGlwbGUgcm91dGluZXMgc2ltdWx0YW5lb3VzbHlcIiwgbG9yZTogXCJDdXQgb25lIGhlYWQgYW5kIHR3byBncm93IGJhY2suIEVhY2ggaGFiaXQgZGVtYW5kcyBpdHMgb3duIGF0dGVudGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS4zXCIgfSxcbiAgeyB0aWVyOiA0LCBuYW1lOiBcIk1pbm90YXVyJ3MgTWF6ZVwiLCByYW5rOiBcIkNpdGl6ZW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGNvbmZ1c2lvbiBhbmQgcm91dGluZSB0aGF0IHRyYXBzIGV2ZW4gZGVkaWNhdGVkIHByYWN0aXRpb25lcnNcIiwgbG9yZTogXCJMb3N0IGluIGNvcnJpZG9ycyBvZiBoYWJpdCwgdGhlIHBhdGggZm9yd2FyZCBpcyBuZXZlciBjbGVhci5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS43XCIgfSxcbiAgeyB0aWVyOiA1LCBuYW1lOiBcIk1lZHVzYSdzIEdhemVcIiwgcmFuazogXCJTY2hvbGFyXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBwYXJhbHlzaXMgdGhhdCBjb21lcyBmcm9tIG92ZXJ0aGlua2luZyBvciBmZWFyIG9mIGZhaWx1cmVcIiwgbG9yZTogXCJPbmUgZ2xhbmNlIGFuZCB5b3UgYXJlIGZyb3plbiwgdW5hYmxlIHRvIGFjdCwgdW5hYmxlIHRvIG1vdmUuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuOVwiIH0sXG4gIHsgdGllcjogNiwgbmFtZTogXCJOZW1lYW4gTGlvblwiLCByYW5rOiBcIlNhbXVyYWlcIiwgZGVzY3JpcHRpb246IFwiU2VlbWluZ2x5IGludnVsbmVyYWJsZSBvYnN0YWNsZXMgdGhhdCByZXF1aXJlIHBlcnNpc3RlbnQgZWZmb3J0XCIsIGxvcmU6IFwiSXRzIGhpZGUgY2Fubm90IGJlIHBpZXJjZWQgYnkgb3JkaW5hcnkgbWVhbnMuIE9ubHkgZGlzY2lwbGluZSBjdXRzIHRocm91Z2guXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuMVwiIH0sXG4gIHsgdGllcjogNywgbmFtZTogXCJDaGltZXJhXCIsIHJhbms6IFwiVGVtcGxhclwiLCBkZXNjcmlwdGlvbjogXCJNdWx0aS1oZWFkZWQgYmVhc3QgcmVxdWlyaW5nIGJhbGFuY2VkIGF0dGVudGlvbiBhY3Jvc3MgYWxsIGRvbWFpbnNcIiwgbG9yZTogXCJMaW9uLCBnb2F0LCBhbmQgc2VycGVudCBcdTIwMTQgZWFjaCBoZWFkIGRlbWFuZHMgbWFzdGVyeSBvZiBhIGRpZmZlcmVudCBhcnQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuM1wiIH0sXG4gIHsgdGllcjogOCwgbmFtZTogXCJDZXJiZXJ1c1wiLCByYW5rOiBcIlN0b2ljXCIsIGRlc2NyaXB0aW9uOiBcIkd1YXJkaWFuIG9mIHRyYW5zZm9ybWF0aW9uIHRlc3RpbmcgaWYgaGFiaXRzIGhhdmUgYmVjb21lIGlkZW50aXR5XCIsIGxvcmU6IFwiVGhyZWUgaGVhZHMsIHRocmVlIHRlc3RzLiBQYXN0IHRoZSBnYXRlIGxpZXMgdHJhbnNmb3JtYXRpb24uXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuNVwiIH0sXG4gIHsgdGllcjogOSwgbmFtZTogXCJTY3lsbGEgJiBDaGFyeWJkaXNcIiwgcmFuazogXCJPbHltcGlhblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgaW1wb3NzaWJsZSBjaG9pY2UgYmV0d2VlbiBjb21wZXRpbmcgcHJpb3JpdGllc1wiLCBsb3JlOiBcIkJldHdlZW4gdGhlIHJvY2sgYW5kIHRoZSB3aGlybHBvb2wsIGJvdGggbXVzdCBzb21laG93IGJlIGhvbm9yZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuN1wiIH0sXG4gIHsgdGllcjogMTAsIG5hbWU6IFwiVGhlIEZ1cmllc1wiLCByYW5rOiBcIlNhZ2VcIiwgZGVzY3JpcHRpb246IFwiSW50ZXJuYWwgdm9pY2VzIG9mIGd1aWx0IGFuZCBzaGFtZSBhdHRhY2tpbmcgZXZlbiB0aGUgc3VjY2Vzc2Z1bFwiLCBsb3JlOiBcIlRoZXkgd2hpc3BlciB5b3VyIGZhaWx1cmVzLCByZW1pbmQgeW91IG9mIGV2ZXJ5IHNraXAsIGV2ZXJ5IHdlYWtuZXNzLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAyLjlcIiB9LFxuICB7IHRpZXI6IDExLCBuYW1lOiBcIlR5cGhvblwiLCByYW5rOiBcIlRpdGFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBmb3JjZSBvZiBjaGFvcyB0aHJlYXRlbmluZyB0byB1bmRvIGFsbCBwcm9ncmVzc1wiLCBsb3JlOiBcIkZhdGhlciBvZiBhbGwgbW9uc3RlcnMsIGhlIHNlZWtzIHRvIHJldHVybiB5b3UgdG8gdGhlIGJlZ2lubmluZy5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy4xXCIgfSxcbiAgeyB0aWVyOiAxMiwgbmFtZTogXCJLcm9ub3NcIiwgcmFuazogXCJBcmNob25cIiwgZGVzY3JpcHRpb246IFwiVGltZSBpdHNlbGYgYXMgYW4gZW5lbXksIHRlc3Rpbmcgc3VzdGFpbmVkIGludGVuc2l0eVwiLCBsb3JlOiBcIlRoZSBUaXRhbiB3aG8gZGV2b3VycyBoaXMgY2hpbGRyZW4uIENhbiB5b3UgbWFpbnRhaW4gYXMgd2Vla3MgYmVjb21lIG1vbnRocz9cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy4zXCIgfSxcbiAgeyB0aWVyOiAxMywgbmFtZTogXCJDaGFvcyBQcmltb3JkaWFsXCIsIHJhbms6IFwiTWFzdGVyIG9mIEFsbFwiLCBkZXNjcmlwdGlvbjogXCJUaGUgdWx0aW1hdGUgdGVzdCBvZiB1bnNoYWtlYWJsZSBkaXNjaXBsaW5lXCIsIGxvcmU6IFwiQmVmb3JlIGNyZWF0aW9uLCBiZWZvcmUgb3JkZXIsIG9ubHkgQ2hhb3MuIFRvIG1hc3RlciBpdCBpcyB0byBtYXN0ZXIgeW91cnNlbGYuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDMuNlwiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgUkFOS19USUVSX0NPTE9SUzogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgMTogXCIjNkI3MjgwXCIsIDI6IFwiI0VGNDQ0NFwiLCAzOiBcIiNGNTlFMEJcIiwgNDogXCIjMTBCOTgxXCIsXG4gIDU6IFwiIzNCODJGNlwiLCA2OiBcIiM4QjVDRjZcIiwgNzogXCIjRUM0ODk5XCIsIDg6IFwiI0Y5NzMxNlwiLFxuICA5OiBcIiMwNkI2RDRcIiwgMTA6IFwiI0E4NTVGN1wiLCAxMTogXCIjREMyNjI2XCIsIDEyOiBcIiM3QzNBRURcIixcbiAgMTM6IFwiI2M5YTIyN1wiLFxufTtcblxuLy8gLS0tIENoYXB0ZXIgUHJvZ3Jlc3Npb24gLS0tXG5cbmV4cG9ydCBjb25zdCBDSEFQVEVSX05BTUVTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIkluaXRpYXRlXCIsXG4gIDI6IFwiRXhwbG9yZXJcIixcbiAgMzogXCJKb3VybmV5bWFuXCIsXG4gIDQ6IFwiQWRlcHRcIixcbiAgNTogXCJQaGlsb3NvcGhlclwiLFxuICA2OiBcIk1hc3RlclwiLFxuICA3OiBcIlNhZ2VcIixcbiAgODogXCJPcmFjbGVcIixcbiAgOTogXCJUaXRhblwiLFxuICAxMDogXCJPbHltcGlhblwiLFxufTtcblxuLy8gLS0tIER5bmFtaWMgVGl0bGUgVGFibGVzIC0tLVxuXG5leHBvcnQgY29uc3QgU0lOR0xFX0RPTUlOQU5UX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIGJvZHk6ICAgeyBsaWdodDogXCJBdGhsZXRlXCIsICAgbWlkOiBcIldhcnJpb3JcIiwgIGhlYXZ5OiBcIlRpdGFuXCIgfSxcbiAgbWluZDogICB7IGxpZ2h0OiBcIlN0dWRlbnRcIiwgICBtaWQ6IFwiU2Nob2xhclwiLCAgaGVhdnk6IFwiUG9seW1hdGhcIiB9LFxuICBzcGlyaXQ6IHsgbGlnaHQ6IFwiU2Vla2VyXCIsICAgIG1pZDogXCJTYWdlXCIsICAgICBoZWF2eTogXCJPcmFjbGVcIiB9LFxufTtcblxuZXhwb3J0IGNvbnN0IFRXT19DQVRFR09SWV9USVRMRVM6IFJlY29yZDxzdHJpbmcsIFJlY29yZDxzdHJpbmcsIHN0cmluZz4+ID0ge1xuICBcImJvZHkrbWluZFwiOiAgICB7IGxpZ2h0OiBcIkRpc2NpcGxpbmVkIFRoaW5rZXJcIiwgbWlkOiBcIlBoaWxvc29waGVyLUtpbmdcIiwgaGVhdnk6IFwiUmVuYWlzc2FuY2UgVGl0YW5cIiB9LFxuICBcImJvZHkrc3Bpcml0XCI6ICB7IGxpZ2h0OiBcIkFzY2V0aWNcIiwgICAgICAgICAgICAgbWlkOiBcIlRlbXBsYXJcIiwgICAgICAgICAgaGVhdnk6IFwiT2x5bXBpYW4gTW9ua1wiIH0sXG4gIFwibWluZCtzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQ29udGVtcGxhdGl2ZVwiLCAgICAgICBtaWQ6IFwiTXlzdGljIFNjaG9sYXJcIiwgICBoZWF2eTogXCJFbmxpZ2h0ZW5lZCBPbmVcIiB9LFxufTtcblxuZXhwb3J0IGNvbnN0IEJBTEFOQ0VEX1RJVExFUzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgbGlnaHQ6IFwiSW5pdGlhdGUgb2YgQmFsYW5jZVwiLFxuICBtaWQ6IFwiUmVuYWlzc2FuY2UgU291bFwiLFxuICBoZWF2eTogXCJFdWRhaW1vblwiLFxufTtcblxuLy8gLS0tIERlZmF1bHQgQWN0aXZpdGllcyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQUNUSVZJVElFUzogQWN0aXZpdHlDb25maWdbXSA9IFtcbiAge1xuICAgIGlkOiBcIndvcmtvdXRcIiwgbmFtZTogXCJXb3Jrb3V0XCIsIGVtb2ppOiBcIlxcdXsxRjRBQX1cIiwgY2F0ZWdvcnk6IFwiYm9keVwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzAxIFdvcmtvdXRcIiwgcHJvcGVydHk6IFwiV29ya291dFwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNywgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzU2Vzc2lvbjogdHJ1ZSwgcHJpb3JpdHk6IDgsIG5lZ2xlY3RUaHJlc2hvbGQ6IDIsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA2MCxcbiAgICBkYXNoYm9hcmRTb3VyY2U6IFwiYnVpbHRpblwiLCB3b3Jrc3BhY2VTb3VyY2U6IFwiV29ya291dCBzZXNzaW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJjYXJkaW9cIiwgbmFtZTogXCJDYXJkaW9cIiwgZW1vamk6IFwiXFx1ezFGM0MzfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDIgQ2FyZGlvXCIsIHByb3BlcnR5OiBcIkNhcmRpb1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNCwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzU2Vzc2lvbjogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICBhbHRlcm5hdGVzV2l0aDogXCJ3b3Jrb3V0XCIsXG4gICAgZGFzaGJvYXJkU291cmNlOiBcImJ1aWx0aW5cIiwgd29ya3NwYWNlU291cmNlOiBcIkNhcmRpbyBzZXNzaW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJyZWFkaW5nXCIsIG5hbWU6IFwiUmVhZGluZ1wiLCBlbW9qaTogXCJcXHV7MUY0RDZ9XCIsIGNhdGVnb3J5OiBcIm1pbmRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMyBSZWFkaW5nXCIsIHByb3BlcnR5OiBcIlJlYWRpbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1Nlc3Npb246IHRydWUsIHByaW9yaXR5OiA2LCBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gICAgZGFzaGJvYXJkU291cmNlOiBcImJ1aWx0aW5cIiwgd29ya3NwYWNlU291cmNlOiBcIlJlYWRpbmcgc2Vzc2lvblwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZHJ1bW1pbmdcIiwgbmFtZTogXCJEcnVtbWluZ1wiLCBlbW9qaTogXCJcXHV7MUY5NDF9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA0IERydW1taW5nXCIsIHByb3BlcnR5OiBcIkRydW1taW5nXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA2LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNTZXNzaW9uOiB0cnVlLCBwcmlvcml0eTogNiwgbmVnbGVjdFRocmVzaG9sZDogMyxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImFmdGVybm9vblwiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gICAgZGFzaGJvYXJkU291cmNlOiBcImJ1aWx0aW5cIiwgd29ya3NwYWNlU291cmNlOiBcIkRydW0gcHJhY3RpY2Ugc2Vzc2lvblwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaGVhbHRoLXN0dWR5XCIsIG5hbWU6IFwiSGVhbHRoIFN0dWR5XCIsIGVtb2ppOiBcIlxcdXsxRjlFQ31cIiwgY2F0ZWdvcnk6IFwibWluZFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA1IEhlYWx0aCBTdHVkeVwiLCBwcm9wZXJ0eTogXCJIZWFsdGggU3R1ZHlcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDMsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1Nlc3Npb246IHRydWUsIHByaW9yaXR5OiA0LCBuZWdsZWN0VGhyZXNob2xkOiA0LFxuICAgIHByZWZlcnJlZFRpbWU6IFwiYWZ0ZXJub29uXCIsIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICBkYXNoYm9hcmRTb3VyY2U6IFwiYnVpbHRpblwiLCB3b3Jrc3BhY2VTb3VyY2U6IFwiUmVzZWFyY2ggYWJvdXQgaGVhbHRoIHNlc3Npb25cIixcbiAgfSxcbiAge1xuICAgIGlkOiBcInNvY2lhbFwiLCBuYW1lOiBcIlNvY2lhbFwiLCBlbW9qaTogXCJcXHV7MUY5MUR9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA2IFNvY2lhbFwiLCBwcm9wZXJ0eTogXCJTb2NpYWxcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDIsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1Nlc3Npb246IHRydWUsIHByaW9yaXR5OiA1LCBuZWdsZWN0VGhyZXNob2xkOiA1LFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNjAsXG4gICAgZGFzaGJvYXJkU291cmNlOiBcImJ1aWx0aW5cIiwgd29ya3NwYWNlU291cmNlOiBcIlNvY2lhbCBzZXNzaW9uXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcmF3aW5nXCIsIG5hbWU6IFwiRHJhd2luZ1wiLCBlbW9qaTogXCJcXHV7MUYzQTh9XCIsIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA3IERyYXdpbmdcIiwgcHJvcGVydHk6IFwiRHJhd2luZ1wiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogNCwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzU2Vzc2lvbjogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJhZnRlcm5vb25cIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICAgIGRhc2hib2FyZFNvdXJjZTogXCJidWlsdGluXCIsIHdvcmtzcGFjZVNvdXJjZTogXCJEcmF3aW5nIFNlc3Npb25cIixcbiAgfSxcbl07XG5cbi8vIC0tLSBEaXJlY3RpdmUgTG9yZSBUZW1wbGF0ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBORUdMRUNUX0xPUkU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gIHdvcmtvdXQ6IFwiWW91ciBtdXNjbGVzIGZvcmdldCB3aGF0IHRoZXkgb25jZSBrbmV3LiBUaGUgYm9keSBjcmF2ZXMgZGlzY2lwbGluZSBcdTIwMTQgYW5zd2VyIGl0LlwiLFxuICBjYXJkaW86IFwiVGhlIGhlYXJ0IGdyb3dzIHNsdWdnaXNoIHdpdGhvdXQgdGhlIHBvdW5kaW5nIHJoeXRobSBvZiBlZmZvcnQuXCIsXG4gIHJlYWRpbmc6IFwiVGhlIG1pbmQgc3RhcnZlcyBvbiBkaXN0cmFjdGlvbi4gRmVlZCBpdCB3aXRoIHBhZ2VzLCBub3QgcGl4ZWxzLlwiLFxuICBkcnVtbWluZzogXCJTaWxlbmNlIGlzIG5vdCByZXN0IFx1MjAxNCBpdCBpcyB0aGUgZGVhdGggb2Ygcmh5dGhtLiBQaWNrIHVwIHRoZSBzdGlja3MuXCIsXG4gIFwiaGVhbHRoLXN0dWR5XCI6IFwiS25vd2xlZGdlIG9mIHRoZSBib2R5IGlzIHBvd2VyIG92ZXIgaXQuIE5lZ2xlY3QgaW52aXRlcyBpZ25vcmFuY2UuXCIsXG4gIHNvY2lhbDogXCJFdmVuIHdhcnJpb3JzIG5lZWQgZmVsbG93c2hpcC4gSXNvbGF0aW9uIGJyZWVkcyBzdGFnbmF0aW9uLlwiLFxuICBkcmF3aW5nOiBcIlRoZSBiZWFzdCB3aXRoaW4geW91IGdyb3dzIHdlYWsgd2l0aG91dCB0aGUgZGlzY2lwbGluZSBvZiBsaW5lIGFuZCBmb3JtLlwiLFxufTtcblxuLy8gLS0tIEZhbGxiYWNrIFF1b3RlcyAtLS1cblxuZXhwb3J0IGNvbnN0IEZBTExCQUNLX1FVT1RFUzogQXJyYXk8eyB0ZXh0OiBzdHJpbmc7IGF0dHJpYnV0aW9uOiBzdHJpbmcgfT4gPSBbXG4gIHsgdGV4dDogXCJZb3UgaGF2ZSBwb3dlciBvdmVyIHlvdXIgbWluZCBcdTIwMTQgbm90IG91dHNpZGUgZXZlbnRzLiBSZWFsaXplIHRoaXMsIGFuZCB5b3Ugd2lsbCBmaW5kIHN0cmVuZ3RoLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiV2Ugc3VmZmVyIG1vcmUgb2Z0ZW4gaW4gaW1hZ2luYXRpb24gdGhhbiBpbiByZWFsaXR5LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiVGhlIGltcGVkaW1lbnQgdG8gYWN0aW9uIGFkdmFuY2VzIGFjdGlvbi4gV2hhdCBzdGFuZHMgaW4gdGhlIHdheSBiZWNvbWVzIHRoZSB3YXkuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJObyBtYW4gaXMgZnJlZSB3aG8gaXMgbm90IG1hc3RlciBvZiBoaW1zZWxmLlwiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiV2FzdGUgbm8gbW9yZSB0aW1lIGFyZ3VpbmcgYWJvdXQgd2hhdCBhIGdvb2QgbWFuIHNob3VsZCBiZS4gQmUgb25lLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiSXQgaXMgbm90IHRoYXQgd2UgaGF2ZSBhIHNob3J0IHRpbWUgdG8gbGl2ZSwgYnV0IHRoYXQgd2Ugd2FzdGUgYSBnb29kIGRlYWwgb2YgaXQuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJGaXJzdCBzYXkgdG8geW91cnNlbGYgd2hhdCB5b3Ugd291bGQgYmU7IGFuZCB0aGVuIGRvIHdoYXQgeW91IGhhdmUgdG8gZG8uXCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJUaGUgaGFwcGluZXNzIG9mIHlvdXIgbGlmZSBkZXBlbmRzIHVwb24gdGhlIHF1YWxpdHkgb2YgeW91ciB0aG91Z2h0cy5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIkhlIHdobyBmZWFycyBkZWF0aCB3aWxsIG5ldmVyIGRvIGFueXRoaW5nIHdvcnRoIG9mIGEgbWFuIHdobyBpcyBhbGl2ZS5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkRpZmZpY3VsdGllcyBzdHJlbmd0aGVuIHRoZSBtaW5kLCBhcyBsYWJvciBkb2VzIHRoZSBib2R5LlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiSG93IGxvbmcgYXJlIHlvdSBnb2luZyB0byB3YWl0IGJlZm9yZSB5b3UgZGVtYW5kIHRoZSBiZXN0IGZvciB5b3Vyc2VsZj9cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBzb3VsIGJlY29tZXMgZHllZCB3aXRoIHRoZSBjb2xvdXIgb2YgaXRzIHRob3VnaHRzLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuXTtcblxuLy8gLS0tIFJvbWFuIE51bWVyYWxzIEhlbHBlciAtLS1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvUm9tYW4obnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCB2YWxzID0gWzEwMDAsIDkwMCwgNTAwLCA0MDAsIDEwMCwgOTAsIDUwLCA0MCwgMTAsIDksIDUsIDQsIDFdO1xuICBjb25zdCBzeW1zID0gW1wiTVwiLCBcIkNNXCIsIFwiRFwiLCBcIkNEXCIsIFwiQ1wiLCBcIlhDXCIsIFwiTFwiLCBcIlhMXCIsIFwiWFwiLCBcIklYXCIsIFwiVlwiLCBcIklWXCIsIFwiSVwiXTtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdmFscy5sZW5ndGg7IGkrKykge1xuICAgIHdoaWxlIChudW0gPj0gdmFsc1tpXSkge1xuICAgICAgcmVzdWx0ICs9IHN5bXNbaV07XG4gICAgICBudW0gLT0gdmFsc1tpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLy8gLS0tIERlZmF1bHQgU2Vzc2lvbiBDb21wbGV0aW9uIFN0YXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VTU0lPTl9TVEFURVM6IFNlc3Npb25Db21wbGV0aW9uU3RhdGVbXSA9IFtcbiAgeyBpZDogXCJkaXNjaXBsaW5lXCIsIG5hbWU6IFwiRGlzY2lwbGluZVwiLCBpY29uOiBcIlxcdTI1QzZcIiwgY29sb3I6IFwiIzkyOGQ4NVwiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMS4wIH0sXG4gIHsgaWQ6IFwiZmxvd1wiLCBuYW1lOiBcIkZsb3dcIiwgaWNvbjogXCJcXHUyMjQ4XCIsIGNvbG9yOiBcIiNjOWE4NGNcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDEuNSB9LFxuICB7IGlkOiBcInNraXBwZWRcIiwgbmFtZTogXCJTa2lwcGVkXCIsIGljb246IFwiXFx1MjVDQlwiLCBjb2xvcjogXCIjOGIyZDM1XCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAwIH0sXG5dO1xuXG4vLyAtLS0gRGVmYXVsdCBEZXYgQ29uZmlnIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9ERVZfQ09ORklHOiBEZXZDb25maWcgPSB7XG4gIGxhYmVsczoge1xuICAgIGdyZWV0aW5nX21vcm5pbmc6IFwiR29vZCBtb3JuaW5nXCIsXG4gICAgZ3JlZXRpbmdfYWZ0ZXJub29uOiBcIkdvb2QgYWZ0ZXJub29uXCIsXG4gICAgZ3JlZXRpbmdfZXZlbmluZzogXCJHb29kIGV2ZW5pbmdcIixcbiAgICBncmVldGluZ19uaWdodDogXCJHb29kIG5pZ2h0XCIsXG4gICAgZGlyZWN0aXZlX3RpdGxlOiBcIlRIRSBESVJFQ1RJVkVcIixcbiAgICBib3NzX3N0YXR1c190aXRsZTogXCJCT1NTIFNUQVRVU1wiLFxuICAgIHdlZWtseV9yaHl0aG1fdGl0bGU6IFwiV0VFS0xZIFJIWVRITVwiLFxuICAgIGFjdGl2aXR5X2dyaWRfdGl0bGU6IFwiQUNUSVZJVElFU1wiLFxuICAgIHRlbXBsZV90aXRsZTogXCJUSEUgVEVNUExFXCIsXG4gICAgZXVkYWltb25pYV90aXRsZTogXCJFdWRhaW1vbmlhIEluZGV4XCIsXG4gICAgZGF5bWFwX3RpdGxlOiBcIllPVVIgREFZXCIsXG4gICAgYmVnaW5fc2Vzc2lvbjogXCJCRUdJTiBTRVNTSU9OXCIsXG4gICAgbm90X25vdzogXCJOT1QgTk9XXCIsXG4gIH0sXG4gIHhwUGVyQ29tcGxldGlvbjogMTAsXG4gIHN0cmVha0JvbnVzTXVsdGlwbGllcjogMS41LFxuICBidWZmZXJNaW51dGVzOiAxNSxcbiAgbW9ybmluZ1N0YXJ0OiA2LFxuICBtb3JuaW5nRW5kOiAxMixcbiAgYWZ0ZXJub29uRW5kOiAxOCxcbiAgZXZlbmluZ0VuZDogMjMsXG4gIHRoZW1lT3ZlcnJpZGVzOiB7fSxcbiAgYW5pbWF0aW9uU3RhZ2dlck1zOiA4MCxcbiAgaGVyb0hlaWdodDogMzUwLFxuICBzZWN0aW9uT3JkZXI6IFtcbiAgICBcImhlcm9cIiwgXCJldWRhaW1vbmlhXCIsIFwiZGF5bWFwXCIsIFwiZGlyZWN0aXZlXCIsIFwiYm9zc1wiLFxuICAgIFwid2Vla2x5XCIsIFwiYWN0aXZpdGllc1wiLCBcInRlbXBsZVwiLCBcInF1b3RlXCIsXG4gIF0sXG4gIGhpZGRlblNlY3Rpb25zOiBbXSxcbiAgYWN0aXZpdHlHcmlkQ29sdW1uczogMixcbn07XG5cbi8vIC0tLSBEZWZhdWx0IENhbGVuZGFyIFNldHRpbmdzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUzogQ2FsZW5kYXJTZXR0aW5ncyA9IHtcbiAgZW5hYmxlRGFpbHlOb3RlczogdHJ1ZSxcbiAgZGFpbHlOb3Rlc0ZvbGRlcjogXCJcIixcbiAgZGFpbHlOb3Rlc0Zvcm1hdDogXCJZWVlZLU1NLUREXCIsXG4gIGVuYWJsZVRhc2tzUGx1Z2luOiBmYWxzZSxcbiAgZW5hYmxlUXVpY2tUYXNrczogdHJ1ZSxcbiAgcXVpY2tUYXNrczogW10sXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBPbGVuIFNldHRpbmdzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9PTEVOX1NFVFRJTkdTOiBPbGVuU2V0dGluZ3MgPSB7XG4gIC8vIFByb2ZpbGVcbiAgdXNlck5hbWU6IFwiV2FycmlvclwiLFxuICBteVdoeTogXCJcIixcbiAgaGVyb0JhY2tncm91bmQ6IFwiXCIsXG5cbiAgLy8gQWN0aXZpdGllc1xuICBhY3Rpdml0aWVzOiBERUZBVUxUX0FDVElWSVRJRVMsXG5cbiAgLy8gQ2F0ZWdvcmllc1xuICBjYXRlZ29yeUNvbG9yczoge1xuICAgIGJvZHk6IFwiI2M5YTg0Y1wiLFxuICAgIG1pbmQ6IFwiIzZiOGNjZVwiLFxuICAgIHNwaXJpdDogXCIjOGI3ZWM4XCIsXG4gIH0sXG4gIHRpdGxlT3ZlcnJpZGU6IFwiXCIsXG5cbiAgLy8gRXVkYWltb25pYVxuICBjYXRlZ29yeVhQOiB7XG4gICAgYm9keTogMCxcbiAgICBtaW5kOiAwLFxuICAgIHNwaXJpdDogMCxcbiAgfSxcblxuICAvLyBCb3NzXG4gIGN1cnJlbnRUaWVyOiAxLFxuICBib3NzTWF4SFA6IDM1LFxuICBib3NzQ3VycmVudEhQOiAzNSxcbiAgaW5UYXJ0YXJ1czogZmFsc2UsXG4gIHRhcnRhcnVzUGVuYW5jZVRhc2tzOiBbXSxcbiAgdGFydGFydXNTdGFydERhdGU6IG51bGwsXG4gIGZhaWxlZFRocmVzaG9sZERheXM6IDAsXG4gIGNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzOiAwLFxuXG4gIC8vIFRlbXBsZVxuICB0ZW1wbGVUYXNrczogW1xuICAgIHsgaWQ6IFwiYmF0aGluZ1wiLCBuYW1lOiBcIkJhdGhpbmdcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiAxLCBlbW9qaTogXCJcXHV7MUY2QkZ9XCIgfSxcbiAgICB7IGlkOiBcImZhY2lhbC1oYWlyXCIsIG5hbWU6IFwiRmFjaWFsIGhhaXJcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiAyLCBlbW9qaTogXCJcXHV7MUZBOTJ9XCIgfSxcbiAgICB7IGlkOiBcIm5haWxzXCIsIG5hbWU6IFwiTmFpbHNcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiA3LCBlbW9qaTogXCJcXHUyNzAyXFx1RkUwRlwiIH0sXG4gICAgeyBpZDogXCJoYWlyY3V0XCIsIG5hbWU6IFwiSGFpcmN1dFwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIxLCBlbW9qaTogXCJcXHV7MUY0ODh9XCIgfSxcbiAgXSxcblxuICAvLyBSZXdhcmRzXG4gIHBlbmRpbmdSZXdhcmRzOiBbXSxcbiAgY2xhaW1lZFJld2FyZHM6IFtdLFxuICBiYW5rZWRSZXdhcmRzOiBbXSxcblxuICAvLyBTeXN0ZW1cbiAgc3lzdGVtU3RhdGU6IFwiYWN0aXZlXCIsXG4gIHBhdXNlU3RhcnRUaW1lOiBudWxsLFxuICB0b3RhbFBhdXNlZFRpbWU6IDAsXG4gIG1pZ3JhdGVkOiBmYWxzZSxcbiAgc2ltdWxhdGVkRGF0ZTogbnVsbCxcblxuICAvLyBUaGVtZVxuICB0aGVtZU92ZXJyaWRlczoge30sXG5cbiAgLy8gRGV2XG4gIGRldkNvbmZpZzogREVGQVVMVF9ERVZfQ09ORklHLFxuXG4gIC8vIFNlc3Npb25zXG4gIHNlc3Npb25Db21wbGV0aW9uU3RhdGVzOiBERUZBVUxUX1NFU1NJT05fU1RBVEVTLFxuICBhY3RpdmVTZXNzaW9uOiBudWxsLFxuXG4gIC8vIENhbGVuZGFyXG4gIGNhbGVuZGFyOiBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuXG4gIC8vIFF1b3RlXG4gIHF1b3RlRm9sZGVyUGF0aDogXCJcIixcbiAgbGFzdFF1b3RlSW5kZXg6IC0xLFxuICByZWNlbnRRdW90ZUlkczogW10sXG59O1xuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgRGFzaGJvYXJkIFZpZXdcbi8vIE1haW4gc2Nyb2xsYWJsZSBJdGVtVmlldyByZW5kZXJpbmcgYWxsIGRhc2hib2FyZCBzZWN0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEl0ZW1WaWV3LCBXb3Jrc3BhY2VMZWFmLCBURmlsZSwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IENvbXBsZXRpb25NYXAsIENvbXBsZXRpb24sIENhbGVuZGFyVGFzayB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgVklFV19UWVBFX09MRU4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgQ2FsZW5kYXJFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9DYWxlbmRhckVuZ2luZVwiO1xuaW1wb3J0IHsgcmVuZGVySGVyb0NhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZXJvQ2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVyRXVkYWltb25pYUJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0V1ZGFpbW9uaWFCYXJcIjtcbmltcG9ydCB7IHJlbmRlckRpcmVjdGl2ZUNhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJCb3NzU3RhdHVzQ2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkXCI7XG5pbXBvcnQgeyByZW5kZXJXZWVrbHlSaHl0aG0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9XZWVrbHlSaHl0aG1cIjtcbmltcG9ydCB7IHJlbmRlckFjdGl2aXR5R3JpZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0FjdGl2aXR5R3JpZFwiO1xuaW1wb3J0IHsgcmVuZGVyVGVtcGxlQ2hpcHMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UZW1wbGVDaGlwc1wiO1xuaW1wb3J0IHsgcmVuZGVyUXVvdGVGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9RdW90ZUZvb3RlclwiO1xuaW1wb3J0IHsgcmVuZGVyRGF5VGltZWxpbmUgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9EYXlUaW1lbGluZVwiO1xuXG5leHBvcnQgY2xhc3MgRGFzaGJvYXJkVmlldyBleHRlbmRzIEl0ZW1WaWV3IHtcbiAgcGx1Z2luOiBPbGVuUGx1Z2luO1xuICBwcml2YXRlIGludGVydmFsczogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IobGVhZjogV29ya3NwYWNlTGVhZiwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgc3VwZXIobGVhZik7XG4gICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgdGhpcy5pbnRlcnZhbHMgPSBbXTtcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFZJRVdfVFlQRV9PTEVOO1xuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJPbGVuXCI7XG4gIH1cblxuICBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiY29tcGFzc1wiO1xuICB9XG5cbiAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG4gIGNsZWFudXAoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpZCBvZiB0aGlzLmludGVydmFscykge1xuICAgICAgY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfVxuICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gIH1cblxuICBhc3luYyByZW5kZXIoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jbGVhbnVwKCk7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmdzO1xuICAgIGNvbnN0IHJvb3QgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGFzaGJvYXJkXCIgfSk7XG5cbiAgICAvLyBBcHBseSB0aGVtZSBvdmVycmlkZXNcbiAgICB0aGlzLmFwcGx5VGhlbWVPdmVycmlkZXMocm9vdCk7XG5cbiAgICAvLyBHYXRoZXIgY29tcGxldGlvbiBkYXRhIGZyb20gdmF1bHRcbiAgICBjb25zdCBjb21wbGV0aW9uRGF0YSA9IHRoaXMuZ2F0aGVyQ29tcGxldGlvbkRhdGEoKTtcblxuICAgIC8vIEluaXRpYWxpemUgZW5naW5lc1xuICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZW5naW5lID0gbmV3IE9sZW5FbmdpbmUoc2V0dGluZ3MsIGNvbXBsZXRpb25EYXRhLCBub3cpO1xuXG4gICAgLy8gQ2FsZW5kYXIgaW50ZWdyYXRpb24gXHUyMDE0IGdhdGhlciBjYWxlbmRhciB0YXNrcyBhbmQgZmVlZCBpbnRvIGVuZ2luZVxuICAgIGNvbnN0IGNhbGVuZGFyRW5naW5lID0gbmV3IENhbGVuZGFyRW5naW5lKHRoaXMuYXBwLCBzZXR0aW5ncywgbm93KTtcbiAgICBjb25zdCBjYWxlbmRhclRhc2tzID0gYXdhaXQgdGhpcy5nYXRoZXJDYWxlbmRhclRhc2tzKGNhbGVuZGFyRW5naW5lKTtcbiAgICBjb25zdCBjYWxlbmRhckVudHJpZXMgPSBjYWxlbmRhckVuZ2luZS50b0RheU1hcEVudHJpZXMoY2FsZW5kYXJUYXNrcyk7XG4gICAgZW5naW5lLnNldENhbGVuZGFyRW50cmllcyhjYWxlbmRhckVudHJpZXMpO1xuXG4gICAgLy8gQnVpbGQgc2VjdGlvbiBvcmRlciBmcm9tIGRldkNvbmZpZ1xuICAgIGNvbnN0IHNlY3Rpb25PcmRlciA9IHNldHRpbmdzLmRldkNvbmZpZy5zZWN0aW9uT3JkZXI7XG4gICAgY29uc3QgaGlkZGVuID0gbmV3IFNldChzZXR0aW5ncy5kZXZDb25maWcuaGlkZGVuU2VjdGlvbnMpO1xuXG4gICAgbGV0IHN0YWdnZXJJZHggPSAwO1xuXG4gICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25PcmRlcikge1xuICAgICAgaWYgKGhpZGRlbi5oYXMoc2VjdGlvbikpIGNvbnRpbnVlO1xuXG4gICAgICBzd2l0Y2ggKHNlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcImhlcm9cIjpcbiAgICAgICAgICByZW5kZXJIZXJvQ2FyZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJldWRhaW1vbmlhXCI6XG4gICAgICAgICAgcmVuZGVyRXVkYWltb25pYUJhcihyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KTtcbiAgICAgICAgICBzdGFnZ2VySWR4ICs9IDM7IC8vIGV1ZGFpbW9uaWEgY2FyZCArIHN0YXQgY2FyZHMgKyBjYXRlZ29yaWVzIGNhcmRcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZGF5bWFwXCI6XG4gICAgICAgICAgcmVuZGVyRGF5VGltZWxpbmUocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrLCB7XG4gICAgICAgICAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQpID0+IHRoaXMuaGFuZGxlQmVnaW5TZXNzaW9uKGFjdGl2aXR5SWQpLFxuICAgICAgICAgICAgb25Ta2lwOiAoYWN0aXZpdHlJZCkgPT4gdGhpcy5oYW5kbGVTa2lwQWN0aXZpdHkoYWN0aXZpdHlJZCwgZW5naW5lKSxcbiAgICAgICAgICAgIG9uQ2FsZW5kYXJEb25lOiAoZW50cnkpID0+IHRoaXMuaGFuZGxlQ2FsZW5kYXJUYXNrRG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNhbGVuZGFyUG9zdHBvbmU6IChlbnRyeSkgPT4gdGhpcy5oYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNyZWF0ZUV2ZW50OiAoKSA9PiAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRpcmVjdGl2ZVwiOlxuICAgICAgICAgIHJlbmRlckRpcmVjdGl2ZUNhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrLCAoYWN0aXZpdHlJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVCZWdpblNlc3Npb24oYWN0aXZpdHlJZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImJvc3NcIjpcbiAgICAgICAgICByZW5kZXJCb3NzU3RhdHVzQ2FyZChyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwid2Vla2x5XCI6XG4gICAgICAgICAgcmVuZGVyV2Vla2x5Umh5dGhtKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImFjdGl2aXRpZXNcIjpcbiAgICAgICAgICByZW5kZXJBY3Rpdml0eUdyaWQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidGVtcGxlXCI6XG4gICAgICAgICAgcmVuZGVyVGVtcGxlQ2hpcHMocm9vdCwgc2V0dGluZ3MsIHN0YWdnZXJJZHgrKywgKHRhc2tJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVUZW1wbGVVcGRhdGUodGFza0lkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwicXVvdGVcIjpcbiAgICAgICAgICByZW5kZXJRdW90ZUZvb3Rlcihyb290LCB0aGlzLmFwcCwgc2V0dGluZ3MsIHN0YWdnZXJJZHgrKywgKHBhcnRpYWwpID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5wbHVnaW4uc2V0dGluZ3MsIHBhcnRpYWwpO1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIERhdGEgR2F0aGVyaW5nIC0tLVxuXG4gIGdhdGhlckNvbXBsZXRpb25EYXRhKCk6IENvbXBsZXRpb25NYXAge1xuICAgIGNvbnN0IGRhdGE6IENvbXBsZXRpb25NYXAgPSB7fTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcykge1xuICAgICAgaWYgKCFhY3Rpdml0eS5lbmFibGVkKSBjb250aW51ZTtcbiAgICAgIGRhdGFbYWN0aXZpdHkuaWRdID0gdGhpcy5nZXRDb21wbGV0aW9uc0Zyb21Gb2xkZXIoYWN0aXZpdHkuZm9sZGVyLCBhY3Rpdml0eS5wcm9wZXJ0eSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBsZXRpb25zRnJvbUZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nKTogQ29tcGxldGlvbltdIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiO1xuXG4gICAgcmV0dXJuIGZpbGVzXG4gICAgICAuZmlsdGVyKChmaWxlKSA9PiBmaWxlLnBhdGggPT09IGZvbGRlclBhdGggfHwgZmlsZS5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpXG4gICAgICAubWFwKChmaWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgIGNvbnN0IGZyb250bWF0dGVyID0gY2FjaGU/LmZyb250bWF0dGVyO1xuICAgICAgICBpZiAoIWZyb250bWF0dGVyIHx8IHR5cGVvZiBmcm9udG1hdHRlcltmaWVsZE5hbWVdICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0ZTogZmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICBjb21wbGV0ZWQ6IGZyb250bWF0dGVyW2ZpZWxkTmFtZV0gPT09IHRydWUsXG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoYyk6IGMgaXMgQ29tcGxldGlvbiA9PiBjICE9PSBudWxsKTtcbiAgfVxuXG4gIC8vIC0tLSBDYWxlbmRhciBHYXRoZXJpbmcgLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBnYXRoZXJDYWxlbmRhclRhc2tzKGNhbGVuZGFyRW5naW5lOiBDYWxlbmRhckVuZ2luZSk6IFByb21pc2U8Q2FsZW5kYXJUYXNrW10+IHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucGx1Z2luLnNldHRpbmdzO1xuXG4gICAgLy8gT3B0aW9uIEE6IERhaWx5IE5vdGVzIFx1MjAxNCByZWFkIHRvZGF5J3Mgbm90ZSBjb250ZW50XG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMgJiYgc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcikge1xuICAgICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgIGNvbnN0IHRvZGF5ID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgICAgY29uc3QgZm9sZGVyID0gc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlcjtcbiAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgICAgY29uc3QgZGFpbHlOb3RlID0gZmlsZXMuZmluZCgoZikgPT4ge1xuICAgICAgICBpZiAoIWYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpICYmIGYucGF0aCAhPT0gZm9sZGVyKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBmLmJhc2VuYW1lID09PSB0b2RheTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZGFpbHlOb3RlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGRhaWx5Tm90ZSk7XG4gICAgICAgIHRhc2tzLnB1c2goLi4uY2FsZW5kYXJFbmdpbmUuZ2V0RGFpbHlOb3RlVGFza3NGcm9tQ29udGVudChjb250ZW50LCBkYWlseU5vdGUucGF0aCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW4gXHUyMDE0IHNjYW4gZm9yIHRhc2tzIHdpdGggdG9kYXkncyBkdWUgZGF0ZVxuICAgIGlmIChzZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikge1xuICAgICAgY29uc3QgdGFza3NQbHVnaW4gPSAodGhpcy5hcHAgYXMgYW55KS5wbHVnaW5zPy5wbHVnaW5zPy5bXCJvYnNpZGlhbi10YXNrcy1wbHVnaW5cIl07XG4gICAgICBpZiAodGFza3NQbHVnaW4pIHtcbiAgICAgICAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICAgIGNvbnN0IGZpbGVzV2l0aFRhc2tzOiB7IHBhdGg6IHN0cmluZzsgY29udGVudDogc3RyaW5nIH1bXSA9IFtdO1xuXG4gICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkpIHtcbiAgICAgICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcz8uc29tZSgobGkpID0+IGxpLnRhc2sgIT09IHVuZGVmaW5lZCkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICAgICAgLy8gUXVpY2sgY2hlY2s6IGRvZXMgdGhlIGNvbnRlbnQgbWVudGlvbiB0b2RheSdzIGRhdGUgd2l0aCBhIGR1ZSBlbW9qaT9cbiAgICAgICAgICBpZiAoY29udGVudC5pbmNsdWRlcyh0b2RheSkpIHtcbiAgICAgICAgICAgIGZpbGVzV2l0aFRhc2tzLnB1c2goeyBwYXRoOiBmaWxlLnBhdGgsIGNvbnRlbnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGFza3MucHVzaCguLi5jYWxlbmRhckVuZ2luZS5nZXRUYXNrc1BsdWdpblRhc2tzRnJvbUZpbGVzKGZpbGVzV2l0aFRhc2tzKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uIEM6IFF1aWNrIFRhc2tzIFx1MjAxNCBhbHJlYWR5IGhhbmRsZWQgYnkgQ2FsZW5kYXJFbmdpbmUuZ2V0QWxsVGFza3MoKVxuICAgIGlmIChzZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKSB7XG4gICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICB0YXNrcy5wdXNoKFxuICAgICAgICAuLi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzXG4gICAgICAgICAgLmZpbHRlcigocXQpID0+IHF0LmRhdGUgPT09IHRvZGF5KVxuICAgICAgICAgIC5tYXAoKHF0KSA9PiAoe1xuICAgICAgICAgICAgaWQ6IGBxdC0ke3F0LmlkfWAsXG4gICAgICAgICAgICB0aXRsZTogcXQudGl0bGUsXG4gICAgICAgICAgICBzb3VyY2U6IFwicXVpY2stdGFza1wiIGFzIGNvbnN0LFxuICAgICAgICAgICAgZGF0ZTogcXQuZGF0ZSxcbiAgICAgICAgICAgIHRpbWU6IHF0LnRpbWUsXG4gICAgICAgICAgICBkdXJhdGlvbjogcXQuZHVyYXRpb24sXG4gICAgICAgICAgICBkb25lOiBxdC5kb25lLFxuICAgICAgICAgIH0pKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICAvLyAtLS0gSGFuZGxlcnMgLS0tXG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVCZWdpblNlc3Npb24oYWN0aXZpdHlJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybjtcblxuICAgIGlmIChhY3Rpdml0eS5oYXNTZXNzaW9uKSB7XG4gICAgICAvLyBDaGVjayB3b3Jrc3BhY2Ugc291cmNlOiBjdXN0b20gLm1kIG9yIGJ1aWx0LWluP1xuICAgICAgaWYgKGFjdGl2aXR5LndvcmtzcGFjZVNvdXJjZSAmJiBhY3Rpdml0eS53b3Jrc3BhY2VTb3VyY2UgIT09IFwiYnVpbHRpblwiKSB7XG4gICAgICAgIC8vIE9wZW4gZW1iZWRkZWQgLm1kIHNlc3Npb24gdGVtcGxhdGUgaW5zaWRlIE9sZW4gc2hlbGxcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlU2Vzc2lvbiA9IHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBza2lsbHM6IFtdLFxuICAgICAgICAgIGhhc1Nlc3Npb246IHRydWUsXG4gICAgICAgICAgc2Vzc2lvbkZvbGRlcjogYWN0aXZpdHkuc2Vzc2lvbkZvbGRlcixcbiAgICAgICAgICBza2lsbEZvbGRlcjogYWN0aXZpdHkuc2tpbGxGb2xkZXIsXG4gICAgICAgIH07XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5hY3RpdmF0ZUVtYmVkZGVkVmlldyh7XG4gICAgICAgICAgZmlsZVBhdGg6IGFjdGl2aXR5LndvcmtzcGFjZVNvdXJjZSxcbiAgICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgICAgYWN0aXZpdHlFbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgbW9kZTogXCJ3b3Jrc3BhY2VcIixcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCdWlsdC1pbjogT3BlbiBuYXRpdmUgT2xlbiBTZXNzaW9uVmlld1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVTZXNzaW9uID0ge1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICAgIHNraWxsczogW10sXG4gICAgICAgICAgaGFzU2Vzc2lvbjogdHJ1ZSxcbiAgICAgICAgICBzZXNzaW9uRm9sZGVyOiBhY3Rpdml0eS5zZXNzaW9uRm9sZGVyLFxuICAgICAgICAgIHNraWxsRm9sZGVyOiBhY3Rpdml0eS5za2lsbEZvbGRlcixcbiAgICAgICAgfTtcbiAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMucGx1Z2luLmFjdGl2YXRlU2Vzc2lvblZpZXcoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9uLXNlc3Npb24gYWN0aXZpdGllczogbWFyayBkb25lIGltbWVkaWF0ZWx5XG4gICAgICBhd2FpdCB0aGlzLm1hcmtBY3Rpdml0eURvbmUoYWN0aXZpdHkpO1xuICAgICAgbmV3IE5vdGljZShgJHthY3Rpdml0eS5lbW9qaX0gJHthY3Rpdml0eS5uYW1lfSBtYXJrZWQgZG9uZSFgKTtcbiAgICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVTa2lwQWN0aXZpdHkoYWN0aXZpdHlJZDogc3RyaW5nLCBlbmdpbmU6IE9sZW5FbmdpbmUpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBNYXJrIGFzIHNraXBwZWQgaW4gdGhlIGRheSBtYXAgKGVuZ2luZSBzdGF0ZSlcbiAgICBjb25zdCBkYXlNYXAgPSBlbmdpbmUuZ2V0RGF5TWFwKCk7XG4gICAgY29uc3QgZW50cnkgPSBkYXlNYXAuZmluZCgoZSkgPT4gZS5hY3Rpdml0eUlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgIGVudHJ5LnN0YXR1cyA9IFwic2tpcHBlZFwiO1xuICAgIH1cbiAgICBuZXcgTm90aWNlKFwiU2tpcHBlZFwiKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDYWxlbmRhclRhc2tEb25lKGVudHJ5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5EYXlNYXBFbnRyeSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgfHwgIWVudHJ5LmNhbGVuZGFyU291cmNlKSByZXR1cm47XG5cbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZShcbiAgICAgIHRoaXMuYXBwLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpXG4gICAgKTtcblxuICAgIHN3aXRjaCAoZW50cnkuY2FsZW5kYXJTb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJkYWlseS1ub3RlXCI6XG4gICAgICAgIGlmIChlbnRyeS5maWxlUGF0aCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnRvZ2dsZURhaWx5Tm90ZVRhc2soZW50cnkuZmlsZVBhdGgsIGVudHJ5LmxpbmVOdW1iZXIsIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwidGFza3MtcGx1Z2luXCI6XG4gICAgICAgIGlmIChlbnRyeS5maWxlUGF0aCAhPT0gdW5kZWZpbmVkICYmIGVudHJ5LmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGF3YWl0IGNhbGVuZGFyRW5naW5lLnRvZ2dsZVRhc2tzUGx1Z2luVGFzayhlbnRyeS5maWxlUGF0aCwgZW50cnkubGluZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJxdWljay10YXNrXCI6IHtcbiAgICAgICAgY29uc3QgcXRJZCA9IGVudHJ5LmNhbGVuZGFyVGFza0lkPy5yZXBsYWNlKFwicXQtXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBxdCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3MuZmluZCgocSkgPT4gcS5pZCA9PT0gcXRJZCk7XG4gICAgICAgIGlmIChxdCkge1xuICAgICAgICAgIHF0LmRvbmUgPSB0cnVlO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ldyBOb3RpY2UoYFxcdTI3MTMgJHtlbnRyeS5hY3Rpdml0eU5hbWV9YCk7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2FsZW5kYXJUYXNrUG9zdHBvbmUoZW50cnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkRheU1hcEVudHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayB8fCAhZW50cnkuY2FsZW5kYXJTb3VyY2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNhbGVuZGFyRW5naW5lID0gbmV3IENhbGVuZGFyRW5naW5lKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncyxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgY29uc3Qgbm93ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKVxuICAgICAgOiBuZXcgRGF0ZSgpO1xuXG4gICAgY29uc3QgdGFzazogaW1wb3J0KFwiLi4vdHlwZXNcIikuQ2FsZW5kYXJUYXNrID0ge1xuICAgICAgaWQ6IGVudHJ5LmNhbGVuZGFyVGFza0lkID8/IGVudHJ5LmFjdGl2aXR5SWQsXG4gICAgICB0aXRsZTogZW50cnkuYWN0aXZpdHlOYW1lLFxuICAgICAgc291cmNlOiBlbnRyeS5jYWxlbmRhclNvdXJjZSxcbiAgICAgIGRhdGU6IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKSxcbiAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgZmlsZVBhdGg6IGVudHJ5LmZpbGVQYXRoLFxuICAgICAgbGluZU51bWJlcjogZW50cnkubGluZU51bWJlcixcbiAgICB9O1xuXG4gICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUucG9zdHBvbmVUYXNrKHRhc2spO1xuICAgIG5ldyBOb3RpY2UoYFxcdTIzRTkgJHtlbnRyeS5hY3Rpdml0eU5hbWV9IHBvc3Rwb25lZCB0byB0b21vcnJvd2ApO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG1hcmtBY3Rpdml0eURvbmUoYWN0aXZpdHk6IHsgaWQ6IHN0cmluZzsgZm9sZGVyOiBzdHJpbmc7IHByb3BlcnR5OiBzdHJpbmc7IGNhdGVnb3J5OiBpbXBvcnQoXCIuLi90eXBlc1wiKS5DYXRlZ29yeTsgZGFtYWdlUGVyQ29tcGxldGlvbjogbnVtYmVyIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIExvb2sgZm9yIHRvZGF5J3MgZmlsZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IHRvZGF5RmlsZSA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgKTtcblxuICAgIGlmICh0b2RheUZpbGUpIHtcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcih0b2RheUZpbGUsIChmbSkgPT4ge1xuICAgICAgICBmbVthY3Rpdml0eS5wcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgYC0tLVxcbiR7YWN0aXZpdHkucHJvcGVydHl9OiB0cnVlXFxuLS0tXFxuYCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gTWF5IGFscmVhZHkgZXhpc3RcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBYUCArIGJvc3MgZGFtYWdlXG4gICAgY29uc3QgeHAgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcueHBQZXJDb21wbGV0aW9uO1xuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5WFBbYWN0aXZpdHkuY2F0ZWdvcnldICs9IHhwO1xuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgPSBNYXRoLm1heChcbiAgICAgIDAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvblxuICAgICk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVRlbXBsZVVwZGF0ZSh0YXNrSWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRhc2sgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrcy5maW5kKCh0KSA9PiB0LmlkID09PSB0YXNrSWQpO1xuICAgIGlmICghdGFzaykgcmV0dXJuO1xuXG4gICAgdGFzay5sYXN0Q29tcGxldGVkID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgIG5ldyBOb3RpY2UoYCR7dGFzay5lbW9qaX0gJHt0YXNrLm5hbWV9IGNvbXBsZXRlZCFgKTtcblxuICAgIC8vIFJlLXJlbmRlclxuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICAvLyAtLS0gVGhlbWUgLS0tXG5cbiAgcHJpdmF0ZSBhcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3Q6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcnJpZGVzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MudGhlbWVPdmVycmlkZXM7XG4gICAgaWYgKCFvdmVycmlkZXMpIHJldHVybjtcblxuICAgIGlmIChvdmVycmlkZXMuYmdQcmltYXJ5KSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1iZy1wcmltYXJ5XCIsIG92ZXJyaWRlcy5iZ1ByaW1hcnkpO1xuICAgIGlmIChvdmVycmlkZXMuY2FyZEJnKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1jYXJkLWJnXCIsIG92ZXJyaWRlcy5jYXJkQmcpO1xuICAgIGlmIChvdmVycmlkZXMudGV4dFByaW1hcnkpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRleHQtcHJpbWFyeVwiLCBvdmVycmlkZXMudGV4dFByaW1hcnkpO1xuICAgIGlmIChvdmVycmlkZXMudGV4dE11dGVkKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS10ZXh0LW11dGVkXCIsIG92ZXJyaWRlcy50ZXh0TXV0ZWQpO1xuICAgIGlmIChvdmVycmlkZXMuYWNjZW50R29sZCkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tYWNjZW50LWdvbGRcIiwgb3ZlcnJpZGVzLmFjY2VudEdvbGQpO1xuICAgIGlmIChvdmVycmlkZXMuZGFuZ2VyKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1kYW5nZXJcIiwgb3ZlcnJpZGVzLmRhbmdlcik7XG4gICAgaWYgKG92ZXJyaWRlcy5zdWNjZXNzKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1zdWNjZXNzXCIsIG92ZXJyaWRlcy5zdWNjZXNzKTtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQm9zcyBFbmdpbmVcbi8vIFJlYWRzIGJvc3Mgc3RhdGUgYW5kIHByb3ZpZGVzIGJvc3MtcmVsYXRlZCBjYWxjdWxhdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQm9zc0RlZmluaXRpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEJPU1NFUywgUkFOS19USUVSX0NPTE9SUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBCb3NzU3RhdHVzIHtcbiAgYm9zczogQm9zc0RlZmluaXRpb247XG4gIGN1cnJlbnRIUDogbnVtYmVyO1xuICBtYXhIUDogbnVtYmVyO1xuICBwZXJjZW50OiBudW1iZXI7XG4gIHRpZXI6IG51bWJlcjtcbiAgcmFuazogc3RyaW5nO1xuICB0aWVyQ29sb3I6IHN0cmluZztcbiAgaW5UYXJ0YXJ1czogYm9vbGVhbjtcbiAgaXNEYW5nZXJab25lOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQm9zc0VuZ2luZSB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcblxuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogT2xlblNldHRpbmdzKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICB9XG5cbiAgZ2V0Qm9zc0ZvclRpZXIodGllcjogbnVtYmVyKTogQm9zc0RlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gQk9TU0VTLmZpbmQoKGIpID0+IGIudGllciA9PT0gdGllcikgPz8gbnVsbDtcbiAgfVxuXG4gIGdldEN1cnJlbnRCb3NzKCk6IEJvc3NEZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9zc0ZvclRpZXIodGhpcy5zZXR0aW5ncy5jdXJyZW50VGllcik7XG4gIH1cblxuICBnZXRCb3NzU3RhdHVzKCk6IEJvc3NTdGF0dXMge1xuICAgIGNvbnN0IHRpZXIgPSB0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyO1xuICAgIGNvbnN0IGJvc3MgPSB0aGlzLmdldEN1cnJlbnRCb3NzKCkgPz8gQk9TU0VTWzBdO1xuICAgIGNvbnN0IGN1cnJlbnRIUCA9IHRoaXMuc2V0dGluZ3MuYm9zc0N1cnJlbnRIUDtcbiAgICBjb25zdCBtYXhIUCA9IHRoaXMuc2V0dGluZ3MuYm9zc01heEhQO1xuICAgIGNvbnN0IHBlcmNlbnQgPSBtYXhIUCA+IDAgPyBNYXRoLnJvdW5kKChjdXJyZW50SFAgLyBtYXhIUCkgKiAxMDApIDogMDtcbiAgICBjb25zdCB0aWVyQ29sb3IgPSBSQU5LX1RJRVJfQ09MT1JTW3RpZXJdID8/IFwiIzZCNzI4MFwiO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvc3MsXG4gICAgICBjdXJyZW50SFAsXG4gICAgICBtYXhIUCxcbiAgICAgIHBlcmNlbnQsXG4gICAgICB0aWVyLFxuICAgICAgcmFuazogYm9zcy5yYW5rLFxuICAgICAgdGllckNvbG9yLFxuICAgICAgaW5UYXJ0YXJ1czogdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzLFxuICAgICAgaXNEYW5nZXJab25lOiB0aGlzLmlzRGFuZ2VyWm9uZSgpLFxuICAgIH07XG4gIH1cblxuICBpc0RhbmdlclpvbmUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgeyBib3NzQ3VycmVudEhQLCBib3NzTWF4SFAgfSA9IHRoaXMuc2V0dGluZ3M7XG4gICAgaWYgKGJvc3NNYXhIUCA8PSAwKSByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIChib3NzQ3VycmVudEhQIC8gYm9zc01heEhQKSA8IDAuMTU7XG4gIH1cblxuICBpc0luVGFydGFydXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cztcbiAgfVxuXG4gIGdldEhQQ29sb3IocGVyY2VudDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAocGVyY2VudCA+IDYwKSByZXR1cm4gXCIjMjJjNTVlXCI7XG4gICAgaWYgKHBlcmNlbnQgPiAzMCkgcmV0dXJuIFwiI2VhYjMwOFwiO1xuICAgIGlmIChwZXJjZW50ID4gMTUpIHJldHVybiBcIiNmOTczMTZcIjtcbiAgICByZXR1cm4gXCIjZWY0NDQ0XCI7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IENvcmUgRW5naW5lXG4vLyBQcmlvcml0eSBsb2dpYywgc3VnZ2VzdGlvbiBhbGdvcml0aG0sIGRheSBtYXAsIGFuYWx5dGljc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgT2xlblNldHRpbmdzLFxuICBBY3Rpdml0eUNvbmZpZyxcbiAgQ29tcGxldGlvbixcbiAgQ29tcGxldGlvbk1hcCxcbiAgRGlyZWN0aXZlU3VnZ2VzdGlvbixcbiAgRGF5TWFwRW50cnksXG4gIENhdGVnb3J5TGV2ZWwsXG4gIENhdGVnb3J5LFxuICBQcmlvcml0eVJlYXNvbixcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBORUdMRUNUX0xPUkUsXG4gIENIQVBURVJfTkFNRVMsXG4gIFNJTkdMRV9ET01JTkFOVF9USVRMRVMsXG4gIFRXT19DQVRFR09SWV9USVRMRVMsXG4gIEJBTEFOQ0VEX1RJVExFUyxcbiAgdG9Sb21hbixcbn0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuL0Jvc3NFbmdpbmVcIjtcblxuZXhwb3J0IGNsYXNzIE9sZW5FbmdpbmUge1xuICBwcml2YXRlIHNldHRpbmdzOiBPbGVuU2V0dGluZ3M7XG4gIHByaXZhdGUgY29tcGxldGlvbnM6IENvbXBsZXRpb25NYXA7XG4gIHByaXZhdGUgbm93OiBEYXRlO1xuICBwcml2YXRlIHRvZGF5OiBzdHJpbmc7XG4gIHByaXZhdGUgYm9zc0VuZ2luZTogQm9zc0VuZ2luZTtcblxuICBjb25zdHJ1Y3RvcihzZXR0aW5nczogT2xlblNldHRpbmdzLCBjb21wbGV0aW9uczogQ29tcGxldGlvbk1hcCwgbm93OiBEYXRlKSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuY29tcGxldGlvbnMgPSBjb21wbGV0aW9ucztcbiAgICB0aGlzLm5vdyA9IG5vdztcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRoaXMudG9kYXkgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIHRoaXMuYm9zc0VuZ2luZSA9IG5ldyBCb3NzRW5naW5lKHNldHRpbmdzKTtcbiAgfVxuXG4gIC8vIC0tLSBFZmZlY3RpdmUgRGF0ZSAoc3VwcG9ydHMgc2ltdWxhdGVkIGRhdGUgKyBwYXVzZSkgLS0tXG5cbiAgcHJpdmF0ZSBnZXRFZmZlY3RpdmVOb3coKTogRGF0ZSB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkge1xuICAgICAgY29uc3Qgc2ltID0gbmV3IERhdGUodGhpcy5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKTtcbiAgICAgIHNpbS5zZXRIb3VycygxMiwgMCwgMCwgMCk7XG4gICAgICByZXR1cm4gc2ltO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIiAmJiB0aGlzLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLm5vdy5nZXRUaW1lKCkgLSB0aGlzLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSk7XG4gIH1cblxuICBwcml2YXRlIGdldEVmZmVjdGl2ZVRvZGF5KCk6IHN0cmluZyB7XG4gICAgY29uc3QgZCA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICByZXR1cm4gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgfVxuXG4gIC8vIC0tLSBEYXRhIEFjY2VzcyAtLS1cblxuICBnZXRFbmFibGVkQWN0aXZpdGllcygpOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gYS5lbmFibGVkKTtcbiAgfVxuXG4gIGdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZDogc3RyaW5nKTogQ29tcGxldGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9uc1thY3Rpdml0eUlkXSA/PyBbXTtcbiAgfVxuXG4gIGdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5SWQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB0b2RheU1zID0gbmV3IERhdGUoZWZmZWN0aXZlTm93KS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZERhdGVzID0gY29tcHNcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKVxuICAgICAgLm1hcCgoYykgPT4gbmV3IERhdGUoYy5kYXRlKS5nZXRUaW1lKCkpXG4gICAgICAuZmlsdGVyKCh0KSA9PiAhaXNOYU4odCkgJiYgdCA8PSB0b2RheU1zKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIgLSBhKTtcblxuICAgIGlmIChjb21wbGV0ZWREYXRlcy5sZW5ndGggPT09IDApIHJldHVybiA5OTk7XG5cbiAgICBjb25zdCBtc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKHRvZGF5TXMgLSBjb21wbGV0ZWREYXRlc1swXSkgLyBtc1BlckRheSk7XG4gIH1cblxuICBpc0RvbmVUb2RheShhY3Rpdml0eUlkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBlZmZlY3RpdmVUb2RheSA9IHRoaXMuZ2V0RWZmZWN0aXZlVG9kYXkoKTtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICByZXR1cm4gY29tcHMuc29tZSgoYykgPT4gYy5kYXRlID09PSBlZmZlY3RpdmVUb2RheSAmJiBjLmNvbXBsZXRlZCk7XG4gIH1cblxuICAvLyAtLS0gV2Vla2x5IFByb2dyZXNzIC0tLVxuXG4gIGdldFdlZWtseVByb2dyZXNzKGFjdGl2aXR5SWQ6IHN0cmluZyk6IHsgZG9uZTogbnVtYmVyOyB0YXJnZXQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm4geyBkb25lOiAwLCB0YXJnZXQ6IDAgfTtcblxuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3Qgd2Vla1N0YXJ0ID0gdGhpcy5nZXRXZWVrU3RhcnQoZWZmZWN0aXZlTm93KTtcbiAgICBjb25zdCB3ZWVrRW5kID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcbiAgICB3ZWVrRW5kLnNldERhdGUod2Vla0VuZC5nZXREYXRlKCkgKyA3KTtcblxuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGRvbmUgPSBjb21wcy5maWx0ZXIoKGMpID0+IHtcbiAgICAgIGlmICghYy5jb21wbGV0ZWQpIHJldHVybiBmYWxzZTtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgcmV0dXJuIGQgPj0gd2Vla1N0YXJ0ICYmIGQgPCB3ZWVrRW5kO1xuICAgIH0pLmxlbmd0aDtcblxuICAgIHJldHVybiB7IGRvbmUsIHRhcmdldDogYWN0aXZpdHkud2Vla2x5VGFyZ2V0IH07XG4gIH1cblxuICBwcml2YXRlIGdldFdlZWtTdGFydChkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgY29uc3QgZGF5ID0gZC5nZXREYXkoKTtcbiAgICBjb25zdCBkaWZmID0gZC5nZXREYXRlKCkgLSBkYXkgKyAoZGF5ID09PSAwID8gLTYgOiAxKTsgLy8gTW9uZGF5IHN0YXJ0XG4gICAgZC5zZXREYXRlKGRpZmYpO1xuICAgIHJldHVybiBkO1xuICB9XG5cbiAgLy8gLS0tIFN0cmVha3MgLS0tXG5cbiAgZ2V0QWN0aXZpdHlTdHJlYWsoYWN0aXZpdHlJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoZWZmZWN0aXZlTm93KTtcbiAgICB0b2RheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlZERhdGVzID0gY29tcHNcbiAgICAgIC5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKVxuICAgICAgLm1hcCgoYykgPT4ge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUoYy5kYXRlKTtcbiAgICAgICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9KVxuICAgICAgLmZpbHRlcigoZCkgPT4gIWlzTmFOKGQuZ2V0VGltZSgpKSAmJiBkIDw9IHRvZGF5KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIuZ2V0VGltZSgpIC0gYS5nZXRUaW1lKCkpO1xuXG4gICAgaWYgKGNvbXBsZXRlZERhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XG5cbiAgICBsZXQgc3RyZWFrID0gMDtcbiAgICBjb25zdCBjaGVja0RhdGUgPSBuZXcgRGF0ZShjb21wbGV0ZWREYXRlc1swXSk7XG4gICAgZm9yIChjb25zdCBkYXRlIG9mIGNvbXBsZXRlZERhdGVzKSB7XG4gICAgICBpZiAoZGF0ZS5nZXRUaW1lKCkgPT09IGNoZWNrRGF0ZS5nZXRUaW1lKCkpIHtcbiAgICAgICAgc3RyZWFrKys7XG4gICAgICAgIGNoZWNrRGF0ZS5zZXREYXRlKGNoZWNrRGF0ZS5nZXREYXRlKCkgLSAxKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0ZSA8IGNoZWNrRGF0ZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0cmVhaztcbiAgfVxuXG4gIGdldE92ZXJhbGxTdHJlYWsoKTogbnVtYmVyIHtcbiAgICBjb25zdCBhY3Rpdml0aWVzID0gdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuICAgIGNvbnN0IHN0cmVha3MgPSBhY3Rpdml0aWVzLm1hcCgoYSkgPT4gdGhpcy5nZXRBY3Rpdml0eVN0cmVhayhhLmlkKSk7XG4gICAgcmV0dXJuIE1hdGgubWF4KDAsIC4uLnN0cmVha3MpO1xuICB9XG5cbiAgLy8gLS0tIEFuYWx5dGljcyAtLS1cblxuICBnZXRUb3RhbENvbXBsZXRpb25zKCk6IG51bWJlciB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgdG90YWwgKz0gY29tcHMuZmlsdGVyKChjKSA9PiBjLmNvbXBsZXRlZCkubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gdG90YWw7XG4gIH1cblxuICBnZXREYXlzT2ZQcmVzZW5jZSgpOiBudW1iZXIge1xuICAgIGNvbnN0IGRheXNTZXQgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgZm9yIChjb25zdCBjIG9mIGNvbXBzKSB7XG4gICAgICAgIGlmIChjLmNvbXBsZXRlZCkgZGF5c1NldC5hZGQoYy5kYXRlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRheXNTZXQuc2l6ZTtcbiAgfVxuXG4gIC8vIC0tLSBDYXRlZ29yeSBYUCAmIExldmVscyAtLS1cblxuICBnZXRDYXRlZ29yeVhQKGNhdGVnb3J5OiBDYXRlZ29yeSk6IG51bWJlciB7XG4gICAgY29uc3QgeHBQZXIgPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb247XG4gICAgbGV0IHhwID0gdGhpcy5zZXR0aW5ncy5jYXRlZ29yeVhQW2NhdGVnb3J5XSA/PyAwO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGlmIChhY3Rpdml0eS5jYXRlZ29yeSAhPT0gY2F0ZWdvcnkpIGNvbnRpbnVlO1xuICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgeHAgPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGggKiB4cFBlcjtcbiAgICB9XG4gICAgcmV0dXJuIHhwO1xuICB9XG5cbiAgZ2V0Q2F0ZWdvcnlMZXZlbChjYXRlZ29yeTogQ2F0ZWdvcnkpOiBDYXRlZ29yeUxldmVsIHtcbiAgICBjb25zdCB4cCA9IHRoaXMuZ2V0Q2F0ZWdvcnlYUChjYXRlZ29yeSk7XG4gICAgY29uc3QgbGV2ZWwgPSBNYXRoLmZsb29yKHhwIC8gMTAwKTtcbiAgICBjb25zdCBwcm9ncmVzc1RvTmV4dCA9IHhwICUgMTAwO1xuICAgIHJldHVybiB7IGNhdGVnb3J5LCB4cCwgbGV2ZWwsIHByb2dyZXNzVG9OZXh0IH07XG4gIH1cblxuICBnZXRBbGxDYXRlZ29yeUxldmVscygpOiBDYXRlZ29yeUxldmVsW10ge1xuICAgIHJldHVybiAoW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSkubWFwKChjKSA9PiB0aGlzLmdldENhdGVnb3J5TGV2ZWwoYykpO1xuICB9XG5cbiAgZ2V0RXVkYWltb25pYUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKS5yZWR1Y2UoKHN1bSwgY2wpID0+IHN1bSArIGNsLmxldmVsLCAwKTtcbiAgfVxuXG4gIGdldENoYXB0ZXIoKTogeyBudW1iZXI6IG51bWJlcjsgbmFtZTogc3RyaW5nIH0ge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgICBjb25zdCBjaGFwdGVyTnVtID0gTWF0aC5taW4oMTAsIE1hdGguZmxvb3IoaW5kZXggLyAxMCkgKyAxKTtcbiAgICBjb25zdCBuYW1lID0gQ0hBUFRFUl9OQU1FU1tjaGFwdGVyTnVtXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgcmV0dXJuIHsgbnVtYmVyOiBjaGFwdGVyTnVtLCBuYW1lIH07XG4gIH1cblxuICBnZXRFdWRhaW1vbmlhUHJvZ3Jlc3MoKTogbnVtYmVyIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gICAgcmV0dXJuIChpbmRleCAlIDEwKSAqIDEwOyAvLyAwLTEwMCBwcm9ncmVzcyB3aXRoaW4gY2hhcHRlclxuICB9XG5cbiAgLy8gLS0tIER5bmFtaWMgVGl0bGUgLS0tXG5cbiAgZ2V0RHluYW1pY1RpdGxlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudGl0bGVPdmVycmlkZSkgcmV0dXJuIHRoaXMuc2V0dGluZ3MudGl0bGVPdmVycmlkZTtcblxuICAgIGNvbnN0IGxldmVscyA9IHRoaXMuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKTtcbiAgICBjb25zdCB0b3RhbFNlc3Npb25zID0gdGhpcy5nZXRUb3RhbENvbXBsZXRpb25zKCk7XG5cbiAgICBjb25zdCBjYXRlZ29yeUNvbXBsZXRpb25zOiBSZWNvcmQ8Q2F0ZWdvcnksIG51bWJlcj4gPSB7IGJvZHk6IDAsIG1pbmQ6IDAsIHNwaXJpdDogMCB9O1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICBjYXRlZ29yeUNvbXBsZXRpb25zW2FjdGl2aXR5LmNhdGVnb3J5XSArPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgfVxuXG4gICAgY29uc3QgdG90YWwgPSBPYmplY3QudmFsdWVzKGNhdGVnb3J5Q29tcGxldGlvbnMpLnJlZHVjZSgoYSwgYikgPT4gYSArIGIsIDApO1xuICAgIGlmICh0b3RhbCA9PT0gMCkgcmV0dXJuIFwiSW5pdGlhdGVcIjtcblxuICAgIGNvbnN0IHdlaWdodHM6IFJlY29yZDxDYXRlZ29yeSwgbnVtYmVyPiA9IHtcbiAgICAgIGJvZHk6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMuYm9keSAvIHRvdGFsIDogMCxcbiAgICAgIG1pbmQ6IHRvdGFsID4gMCA/IGNhdGVnb3J5Q29tcGxldGlvbnMubWluZCAvIHRvdGFsIDogMCxcbiAgICAgIHNwaXJpdDogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5zcGlyaXQgLyB0b3RhbCA6IDAsXG4gICAgfTtcblxuICAgIGNvbnN0IHRpZXIgPSB0b3RhbFNlc3Npb25zIDwgNTAgPyBcImxpZ2h0XCIgOiB0b3RhbFNlc3Npb25zIDwgMjAwID8gXCJtaWRcIiA6IFwiaGVhdnlcIjtcblxuICAgIC8vIENoZWNrIHNpbmdsZSBkb21pbmFudCAoPj0gNzAlKVxuICAgIGZvciAoY29uc3QgY2F0IG9mIFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdIGFzIENhdGVnb3J5W10pIHtcbiAgICAgIGlmICh3ZWlnaHRzW2NhdF0gPj0gMC43MCkge1xuICAgICAgICByZXR1cm4gU0lOR0xFX0RPTUlOQU5UX1RJVExFU1tjYXRdPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENoZWNrIGJhbGFuY2VkIChhbGwgPj0gMjUlKVxuICAgIGlmICh3ZWlnaHRzLmJvZHkgPj0gMC4yNSAmJiB3ZWlnaHRzLm1pbmQgPj0gMC4yNSAmJiB3ZWlnaHRzLnNwaXJpdCA+PSAwLjI1KSB7XG4gICAgICByZXR1cm4gQkFMQU5DRURfVElUTEVTW3RpZXJdID8/IFwiSW5pdGlhdGUgb2YgQmFsYW5jZVwiO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHR3by1jYXRlZ29yeSBjb21iaW5hdGlvbnMgKGVhY2ggPj0gMzAlKVxuICAgIGNvbnN0IGNhdHMgPSAoW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSlcbiAgICAgIC5maWx0ZXIoKGMpID0+IHdlaWdodHNbY10gPj0gMC4zMClcbiAgICAgIC5zb3J0KCk7XG5cbiAgICBpZiAoY2F0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgIGNvbnN0IGtleSA9IGNhdHMuam9pbihcIitcIik7XG4gICAgICByZXR1cm4gVFdPX0NBVEVHT1JZX1RJVExFU1trZXldPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrOiB1c2UgZG9taW5hbnQgY2F0ZWdvcnlcbiAgICBjb25zdCBkb21pbmFudCA9IChPYmplY3QuZW50cmllcyh3ZWlnaHRzKSBhcyBbQ2F0ZWdvcnksIG51bWJlcl1bXSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiWzFdIC0gYVsxXSlbMF1bMF07XG4gICAgcmV0dXJuIFNJTkdMRV9ET01JTkFOVF9USVRMRVNbZG9taW5hbnRdPy5bdGllcl0gPz8gXCJJbml0aWF0ZVwiO1xuICB9XG5cbiAgLy8gLS0tIFN1Z2dlc3Rpb24gQWxnb3JpdGhtIChXYXRlcmZhbGwpIC0tLVxuXG4gIGdldFN1Z2dlc3Rpb24oKTogRGlyZWN0aXZlU3VnZ2VzdGlvbiB8IG51bGwge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG4gICAgaWYgKGFjdGl2aXRpZXMubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIDEuIERFQVRIIENIRUNLXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuaW5UYXJ0YXJ1cykge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGFjdGl2aXRpZXNbMF0sIFwiZGVhdGhcIiwgXCJFc2NhcGUgVGFydGFydXMgXHUyMDE0IGNvbXBsZXRlIHlvdXIgcGVuYW5jZS5cIik7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuZmFpbGVkVGhyZXNob2xkRGF5cyA+PSAyKSB7XG4gICAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcyk7XG4gICAgICBpZiAobmVnbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKG5lZ2xlY3RlZFswXSwgXCJkZWF0aFwiLCBcIkRlYXRoIGxvb21zLiBBY3Qgbm93IG9yIGRlc2NlbmQgdG8gVGFydGFydXMuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDIuIEJPU1MgRklOSVNIXG4gICAgaWYgKHRoaXMuYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgICAgY29uc3QgYmVzdCA9IHRoaXMuZ2V0SGlnaGVzdERhbWFnZUFjdGl2aXR5KGFjdGl2aXRpZXMpO1xuICAgICAgaWYgKGJlc3QpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGJlc3QsIFwiYm9zc1wiLCBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuIEZpbmlzaCB0aGUgYmVhc3QuXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIE5FR0xFQ1QgKyBQUklPUklUWVxuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICBpZiAobmVnbGVjdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvcCA9IHRoaXMuYXBwbHlSdWxlcyhuZWdsZWN0ZWQpO1xuICAgICAgaWYgKHRvcCkge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZSh0b3AuaWQpO1xuICAgICAgICBjb25zdCBsb3JlID0gTkVHTEVDVF9MT1JFW3RvcC5pZF0gPz8gYCR7ZGF5c30gZGF5cyBzaW5jZSB5b3UgbGFzdCBwcmFjdGljZWQuIFRoZSBza2lsbCBhdHJvcGhpZXMuYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKHRvcCwgXCJuZWdsZWN0XCIsIGxvcmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDQuIFdFRUtMWSBDQVRDSC1VUFxuICAgIGNvbnN0IGJlaGluZFNjaGVkdWxlID0gdGhpcy5nZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKGJlaGluZFNjaGVkdWxlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHRvcCA9IGJlaGluZFNjaGVkdWxlWzBdO1xuICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKHRvcC5pZCk7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odG9wLCBcIndlZWtseVwiLCBgQmVoaW5kIHNjaGVkdWxlOiAke3Byb2dyZXNzLmRvbmV9LyR7cHJvZ3Jlc3MudGFyZ2V0fSB0aGlzIHdlZWsuYCk7XG4gICAgfVxuXG4gICAgLy8gNS4gQ0hBSU4gQ0hFQ0tcbiAgICBjb25zdCBjaGFpbmVkID0gdGhpcy5nZXRDaGFpbmVkQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAoY2hhaW5lZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oY2hhaW5lZFswXSwgXCJjaGFpblwiLCBcIllvdXIgcHJlcmVxdWlzaXRlIGlzIGRvbmUuIFRpbWUgZm9yIHRoZSBuZXh0IHN0ZXAuXCIpO1xuICAgIH1cblxuICAgIC8vIDYuIFRJTUUtQkFTRURcbiAgICBjb25zdCB0aW1lQmFzZWQgPSB0aGlzLmdldFRpbWVCYXNlZEFjdGl2aXRpZXMoYWN0aXZpdGllcyk7XG4gICAgaWYgKHRpbWVCYXNlZC5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odGltZUJhc2VkWzBdLCBcInRpbWVcIiwgXCJUaGUgdGltZSBpcyByaWdodC4gQmVnaW4uXCIpO1xuICAgIH1cblxuICAgIC8vIDcuIEJBTEFOQ0VEIEZBTExCQUNLXG4gICAgY29uc3QgbG9uZ2VzdEdhcCA9IGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYi5pZCkgLSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGEuaWQpKTtcblxuICAgIGlmIChsb25nZXN0R2FwLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihsb25nZXN0R2FwWzBdLCBcImJhbGFuY2VkXCIsIFwiQmFsYW5jZSB5b3VyIHBhdGguIFRoaXMgaGFzIHdhaXRlZCBsb25nZXN0LlwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRTdWdnZXN0aW9uKFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICByZWFzb246IFByaW9yaXR5UmVhc29uLFxuICAgIGxvcmVUZXh0OiBzdHJpbmdcbiAgKTogRGlyZWN0aXZlU3VnZ2VzdGlvbiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgcmVhc29uLFxuICAgICAgZGF5c1NpbmNlTGFzdERvbmU6IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpLFxuICAgICAgbG9yZVRleHQsXG4gICAgICBwcmlvcml0eTogYWN0aXZpdHkucHJpb3JpdHksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgcmV0dXJuIGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYS5pZCk7XG4gICAgICAgIHJldHVybiBkYXlzID49IGEubmVnbGVjdFRocmVzaG9sZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKTtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVJ1bGVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZyB8IG51bGwge1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgICAgLy8gQ2hlY2sgYWx0ZXJuYXRpbmcgcnVsZVxuICAgICAgaWYgKGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoKSB7XG4gICAgICAgIGNvbnN0IGFsdERheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmFsdGVybmF0ZXNXaXRoKTtcbiAgICAgICAgY29uc3QgdGhpc0RheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKGFjdGl2aXR5LmlkKTtcbiAgICAgICAgLy8gSWYgdGhpcyB3YXMgZG9uZSBtb3JlIHJlY2VudGx5IHRoYW4gYWx0ZXJuYXRlLCBwcmVmZXIgYWx0ZXJuYXRlXG4gICAgICAgIGlmICh0aGlzRGF5cyA8IGFsdERheXMpIHtcbiAgICAgICAgICBjb25zdCBhbHQgPSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICAgIGlmIChhbHQgJiYgYWx0LmVuYWJsZWQgJiYgIXRoaXMuaXNEb25lVG9kYXkoYWx0LmlkKSkgcmV0dXJuIGFsdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBibG9ja2luZyBydWxlc1xuICAgICAgaWYgKGFjdGl2aXR5LmJsb2NrcyAmJiBhY3Rpdml0eS5ibG9ja3MubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUaGlzIGFjdGl2aXR5IGJsb2NrcyBvdGhlcnMgd2hlbiBuZWdsZWN0ZWQgXHUyMDE0IGl0IHNob3VsZCBiZSBwcmlvcml0aXplZFxuICAgICAgICByZXR1cm4gYWN0aXZpdHk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY3Rpdml0eTtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2aXRpZXNbMF0gPz8gbnVsbDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SGlnaGVzdERhbWFnZUFjdGl2aXR5KGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZyB8IG51bGwge1xuICAgIGNvbnN0IG5vdERvbmUgPSBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkpO1xuICAgIGlmIChub3REb25lLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIG5vdERvbmUuc29ydCgoYSwgYikgPT4gYi5kYW1hZ2VQZXJDb21wbGV0aW9uIC0gYS5kYW1hZ2VQZXJDb21wbGV0aW9uKVswXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QmVoaW5kU2NoZWR1bGVBY3Rpdml0aWVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGVmZmVjdGl2ZU5vdy5nZXREYXkoKTsgLy8gMD1TdW5cbiAgICBjb25zdCBhZGp1c3RlZERheSA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7IC8vIE1vbj0xXG4gICAgY29uc3QgcmVtYWluaW5nRGF5cyA9IDcgLSBhZGp1c3RlZERheSArIDE7XG5cbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3MoYS5pZCk7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IHByb2dyZXNzLnRhcmdldCAtIHByb2dyZXNzLmRvbmU7XG4gICAgICAgIHJldHVybiByZW1haW5pbmcgPiAwICYmIHJlbWFpbmluZyA+PSByZW1haW5pbmdEYXlzO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGdldENoYWluZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gYWN0aXZpdGllcy5maWx0ZXIoKGEpID0+IHtcbiAgICAgIGlmICghYS5jaGFpbkFmdGVyIHx8IHRoaXMuaXNEb25lVG9kYXkoYS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0aGlzLmlzRG9uZVRvZGF5KGEuY2hhaW5BZnRlcik7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRpbWVCYXNlZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGhvdXIgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpLmdldEhvdXJzKCk7XG4gICAgY29uc3QgeyBtb3JuaW5nU3RhcnQsIG1vcm5pbmdFbmQsIGFmdGVybm9vbkVuZCwgZXZlbmluZ0VuZCB9ID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWc7XG5cbiAgICBjb25zdCBjdXJyZW50UGVyaW9kID0gaG91ciA8IG1vcm5pbmdFbmQgPyBcIm1vcm5pbmdcIiA6XG4gICAgICBob3VyIDwgYWZ0ZXJub29uRW5kID8gXCJhZnRlcm5vb25cIiA6XG4gICAgICBob3VyIDwgZXZlbmluZ0VuZCA/IFwiZXZlbmluZ1wiIDogXCJhbnl0aW1lXCI7XG5cbiAgICAvLyBGaXJzdCBjaGVjayB0aW1lIG92ZXJyaWRlc1xuICAgIGNvbnN0IG92ZXJyaWRkZW4gPSBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNEb25lVG9kYXkoYS5pZCkpIHJldHVybiBmYWxzZTtcbiAgICAgIGlmICghYS50aW1lT3ZlcnJpZGUpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBob3VyID49IGEudGltZU92ZXJyaWRlLnN0YXJ0SG91ciAmJiBob3VyIDwgYS50aW1lT3ZlcnJpZGUuZW5kSG91cjtcbiAgICB9KTtcbiAgICBpZiAob3ZlcnJpZGRlbi5sZW5ndGggPiAwKSByZXR1cm4gb3ZlcnJpZGRlbi5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG5cbiAgICAvLyBUaGVuIGNoZWNrIHByZWZlcnJlZCB0aW1lXG4gICAgcmV0dXJuIGFjdGl2aXRpZXNcbiAgICAgIC5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpICYmIChhLnByZWZlcnJlZFRpbWUgPT09IGN1cnJlbnRQZXJpb2QgfHwgYS5wcmVmZXJyZWRUaW1lID09PSBcImFueXRpbWVcIikpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuICB9XG5cbiAgLy8gLS0tIERheSBNYXAgR2VuZXJhdGlvbiAtLS1cblxuICBwcml2YXRlIGNhbGVuZGFyRW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuXG4gIHNldENhbGVuZGFyRW50cmllcyhlbnRyaWVzOiBEYXlNYXBFbnRyeVtdKTogdm9pZCB7XG4gICAgdGhpcy5jYWxlbmRhckVudHJpZXMgPSBlbnRyaWVzO1xuICB9XG5cbiAgZ2V0RGF5TWFwKCk6IERheU1hcEVudHJ5W10ge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgY29uc3QgeyBtb3JuaW5nU3RhcnQsIG1vcm5pbmdFbmQsIGFmdGVybm9vbkVuZCwgZXZlbmluZ0VuZCwgYnVmZmVyTWludXRlcyB9ID0gdGhpcy5zZXR0aW5ncy5kZXZDb25maWc7XG5cbiAgICBjb25zdCB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdID0gW1xuICAgICAgeyBwZXJpb2Q6IFwibW9ybmluZ1wiLCBzdGFydEhvdXI6IG1vcm5pbmdTdGFydCwgZW5kSG91cjogbW9ybmluZ0VuZCB9LFxuICAgICAgeyBwZXJpb2Q6IFwiYWZ0ZXJub29uXCIsIHN0YXJ0SG91cjogbW9ybmluZ0VuZCwgZW5kSG91cjogYWZ0ZXJub29uRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJldmVuaW5nXCIsIHN0YXJ0SG91cjogYWZ0ZXJub29uRW5kLCBlbmRIb3VyOiBldmVuaW5nRW5kIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IGVudHJpZXM6IERheU1hcEVudHJ5W10gPSBbXTtcbiAgICBjb25zdCBzY2hlZHVsZWQgPSBuZXcgU2V0PHN0cmluZz4oKTtcblxuICAgIC8vIDEuIFBsYWNlIHRpbWUtb3ZlcnJpZGUgYWN0aXZpdGllcyBmaXJzdFxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgICAgaWYgKCFhY3Rpdml0eS50aW1lT3ZlcnJpZGUpIGNvbnRpbnVlO1xuICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgIHN0YXJ0SG91cjogYWN0aXZpdHkudGltZU92ZXJyaWRlLnN0YXJ0SG91cixcbiAgICAgICAgZW5kSG91cjogYWN0aXZpdHkudGltZU92ZXJyaWRlLmVuZEhvdXIsXG4gICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgcHJpb3JpdHlSZWFzb246IFwidGltZVwiLFxuICAgICAgfSk7XG4gICAgICBzY2hlZHVsZWQuYWRkKGFjdGl2aXR5LmlkKTtcbiAgICB9XG5cbiAgICAvLyAyLiBQbGFjZSBuZWdsZWN0ZWQgYWN0aXZpdGllcyBpbiB0aGVpciBwcmVmZXJyZWQgc2xvdHNcbiAgICBjb25zdCBuZWdsZWN0ZWQgPSB0aGlzLmdldE5lZ2xlY3RlZEFjdGl2aXRpZXNTb3J0ZWQoYWN0aXZpdGllcylcbiAgICAgIC5maWx0ZXIoKGEpID0+ICFzY2hlZHVsZWQuaGFzKGEuaWQpKTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgbmVnbGVjdGVkKSB7XG4gICAgICBjb25zdCBzbG90ID0gdGhpcy5maW5kU2xvdEZvckFjdGl2aXR5KGFjdGl2aXR5LCB0aW1lU2xvdHMsIGVudHJpZXMsIGJ1ZmZlck1pbnV0ZXMpO1xuICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgICBzdGFydEhvdXI6IHNsb3Quc3RhcnRIb3VyLFxuICAgICAgICAgIGVuZEhvdXI6IHNsb3QuZW5kSG91cixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24sXG4gICAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJuZWdsZWN0XCIsXG4gICAgICAgIH0pO1xuICAgICAgICBzY2hlZHVsZWQuYWRkKGFjdGl2aXR5LmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAzLiBQbGFjZSByZW1haW5pbmcgd2Vla2x5LXRhcmdldCBhY3Rpdml0aWVzXG4gICAgY29uc3QgcmVtYWluaW5nID0gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyhhLmlkKTtcbiAgICAgICAgcmV0dXJuIHByb2dyZXNzLmRvbmUgPCBwcm9ncmVzcy50YXJnZXQ7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgcmVtYWluaW5nKSB7XG4gICAgICBjb25zdCBzbG90ID0gdGhpcy5maW5kU2xvdEZvckFjdGl2aXR5KGFjdGl2aXR5LCB0aW1lU2xvdHMsIGVudHJpZXMsIGJ1ZmZlck1pbnV0ZXMpO1xuICAgICAgaWYgKHNsb3QpIHtcbiAgICAgICAgZW50cmllcy5wdXNoKHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgICBzdGFydEhvdXI6IHNsb3Quc3RhcnRIb3VyLFxuICAgICAgICAgIGVuZEhvdXI6IHNsb3QuZW5kSG91cixcbiAgICAgICAgICBlc3RpbWF0ZWREdXJhdGlvbjogYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24sXG4gICAgICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIixcbiAgICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ3ZWVrbHlcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIE1lcmdlIGNhbGVuZGFyIHRhc2sgZW50cmllc1xuICAgIGZvciAoY29uc3QgY2FsRW50cnkgb2YgdGhpcy5jYWxlbmRhckVudHJpZXMpIHtcbiAgICAgIGVudHJpZXMucHVzaChjYWxFbnRyeSk7XG4gICAgfVxuXG4gICAgLy8gU29ydCBieSBzdGFydCB0aW1lXG4gICAgZW50cmllcy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKTtcblxuICAgIC8vIE1hcmsgZG9uZSBhY3Rpdml0aWVzIChvbmx5IGZvciBub24tY2FsZW5kYXIgZW50cmllcylcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcbiAgICAgIGlmICghZW50cnkuaXNDYWxlbmRhclRhc2sgJiYgdGhpcy5pc0RvbmVUb2RheShlbnRyeS5hY3Rpdml0eUlkKSkge1xuICAgICAgICBlbnRyeS5zdGF0dXMgPSBcImRvbmVcIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZW50cmllcztcbiAgfVxuXG4gIHByaXZhdGUgZmluZFNsb3RGb3JBY3Rpdml0eShcbiAgICBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsXG4gICAgdGltZVNsb3RzOiB7IHBlcmlvZDogc3RyaW5nOyBzdGFydEhvdXI6IG51bWJlcjsgZW5kSG91cjogbnVtYmVyIH1bXSxcbiAgICBleGlzdGluZzogRGF5TWFwRW50cnlbXSxcbiAgICBidWZmZXJNaW51dGVzOiBudW1iZXJcbiAgKTogeyBzdGFydEhvdXI6IG51bWJlcjsgZW5kSG91cjogbnVtYmVyIH0gfCBudWxsIHtcbiAgICBjb25zdCBkdXJhdGlvbkhvdXJzID0gYWN0aXZpdHkuZXN0aW1hdGVkRHVyYXRpb24gLyA2MDtcbiAgICBjb25zdCBidWZmZXJIb3VycyA9IGJ1ZmZlck1pbnV0ZXMgLyA2MDtcblxuICAgIC8vIEZpbmQgcHJlZmVycmVkIHNsb3RcbiAgICBjb25zdCBwcmVmZXJyZWRTbG90ID0gdGltZVNsb3RzLmZpbmQoKHMpID0+IHMucGVyaW9kID09PSBhY3Rpdml0eS5wcmVmZXJyZWRUaW1lKVxuICAgICAgPz8gdGltZVNsb3RzLmZpbmQoKHMpID0+IHMucGVyaW9kID09PSBcImFueXRpbWVcIilcbiAgICAgID8/IHRpbWVTbG90c1swXTtcblxuICAgIC8vIEZpbmQgZmlyc3QgYXZhaWxhYmxlIHRpbWUgaW4gcHJlZmVycmVkIHNsb3RcbiAgICBsZXQgY2FuZGlkYXRlU3RhcnQgPSBwcmVmZXJyZWRTbG90LnN0YXJ0SG91cjtcblxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZXhpc3Rpbmcuc29ydCgoYSwgYikgPT4gYS5zdGFydEhvdXIgLSBiLnN0YXJ0SG91cikpIHtcbiAgICAgIGlmIChlbnRyeS5zdGFydEhvdXIgPCBwcmVmZXJyZWRTbG90LmVuZEhvdXIgJiYgZW50cnkuZW5kSG91ciA+IGNhbmRpZGF0ZVN0YXJ0KSB7XG4gICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNhbmRpZGF0ZUVuZCA9IGNhbmRpZGF0ZVN0YXJ0ICsgZHVyYXRpb25Ib3VycztcbiAgICBpZiAoY2FuZGlkYXRlRW5kIDw9IHByZWZlcnJlZFNsb3QuZW5kSG91cikge1xuICAgICAgcmV0dXJuIHsgc3RhcnRIb3VyOiBjYW5kaWRhdGVTdGFydCwgZW5kSG91cjogY2FuZGlkYXRlRW5kIH07XG4gICAgfVxuXG4gICAgLy8gVHJ5IGFueSBzbG90XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHRpbWVTbG90cykge1xuICAgICAgaWYgKHNsb3QgPT09IHByZWZlcnJlZFNsb3QpIGNvbnRpbnVlO1xuICAgICAgY2FuZGlkYXRlU3RhcnQgPSBzbG90LnN0YXJ0SG91cjtcbiAgICAgIGZvciAoY29uc3QgZW50cnkgb2YgZXhpc3Rpbmcuc29ydCgoYSwgYikgPT4gYS5zdGFydEhvdXIgLSBiLnN0YXJ0SG91cikpIHtcbiAgICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgICBjYW5kaWRhdGVTdGFydCA9IGVudHJ5LmVuZEhvdXIgKyBidWZmZXJIb3VycztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNhbmRpZGF0ZVN0YXJ0ICsgZHVyYXRpb25Ib3VycyA8PSBzbG90LmVuZEhvdXIpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnRIb3VyOiBjYW5kaWRhdGVTdGFydCwgZW5kSG91cjogY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyAtLS0gV2Vla2x5IERhdGEgZm9yIEJhciBDaGFydCAtLS1cblxuICBnZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiB7XG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSB0aGlzLmdldFdlZWtTdGFydChlZmZlY3RpdmVOb3cpO1xuICAgIGNvbnN0IGRheXMgPSBbXCJNb25cIiwgXCJUdWVcIiwgXCJXZWRcIiwgXCJUaHVcIiwgXCJGcmlcIiwgXCJTYXRcIiwgXCJTdW5cIl07XG4gICAgY29uc3QgcmVzdWx0OiBBcnJheTx7IGRheTogc3RyaW5nOyBkYXRlOiBzdHJpbmc7IGNvbXBsZXRpb25zOiBNYXA8Q2F0ZWdvcnksIG51bWJlcj4gfT4gPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICBjb25zdCBkID0gbmV3IERhdGUod2Vla1N0YXJ0KTtcbiAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIGkpO1xuICAgICAgY29uc3QgZGF0ZVN0ciA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBkYXlDb21wbGV0aW9ucyA9IG5ldyBNYXA8Q2F0ZWdvcnksIG51bWJlcj4oKTtcblxuICAgICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHkuaWQpO1xuICAgICAgICBjb25zdCBkb25lID0gY29tcHMuc29tZSgoYykgPT4gYy5kYXRlID09PSBkYXRlU3RyICYmIGMuY29tcGxldGVkKTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50ID0gZGF5Q29tcGxldGlvbnMuZ2V0KGFjdGl2aXR5LmNhdGVnb3J5KSA/PyAwO1xuICAgICAgICAgIGRheUNvbXBsZXRpb25zLnNldChhY3Rpdml0eS5jYXRlZ29yeSwgY3VycmVudCArIDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdC5wdXNoKHsgZGF5OiBkYXlzW2ldLCBkYXRlOiBkYXRlU3RyLCBjb21wbGV0aW9uczogZGF5Q29tcGxldGlvbnMgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldEFjdGl2ZURheXNUaGlzV2VlaygpOiBudW1iZXIge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIHJldHVybiB3ZWVrbHkuZmlsdGVyKChkKSA9PiB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZC5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgICAgcmV0dXJuIHRvdGFsID4gMDtcbiAgICB9KS5sZW5ndGg7XG4gIH1cblxuICBnZXRCZXN0RGF5VGhpc1dlZWsoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3ZWVrbHkgPSB0aGlzLmdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTtcbiAgICBsZXQgYmVzdCA9IHdlZWtseVswXTtcbiAgICBsZXQgYmVzdFRvdGFsID0gMDtcbiAgICBmb3IgKGNvbnN0IGQgb2Ygd2Vla2x5KSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZC5jb21wbGV0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHRvdGFsICs9IHY7IH0pO1xuICAgICAgaWYgKHRvdGFsID4gYmVzdFRvdGFsKSB7XG4gICAgICAgIGJlc3RUb3RhbCA9IHRvdGFsO1xuICAgICAgICBiZXN0ID0gZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGJlc3RUb3RhbCA+IDAgPyBiZXN0LmRheSA6IFwiLS1cIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ2FsZW5kYXIgRW5naW5lXG4vLyBSZWFkcyB0YXNrcyBmcm9tIERhaWx5IE5vdGVzLCBUYXNrcyBwbHVnaW4sIGFuZCBRdWljayBUYXNrc1xuLy8gTWVyZ2VzIHRoZW0gaW50byBDYWxlbmRhclRhc2tbXSBmb3IgRGF5IE1hcCBpbnRlZ3JhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFRGaWxlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7IEFwcCB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUge1xuICBPbGVuU2V0dGluZ3MsXG4gIENhbGVuZGFyVGFzayxcbiAgRGF5TWFwRW50cnksXG4gIENhbGVuZGFyVGFza1NvdXJjZSxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckVuZ2luZSB7XG4gIHByaXZhdGUgYXBwOiBBcHA7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcbiAgcHJpdmF0ZSB0b2RheTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBzZXR0aW5nczogT2xlblNldHRpbmdzLCBub3c6IERhdGUpIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgY29uc3QgZCA9IG5ldyBEYXRlKG5vdyk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0aGlzLnRvZGF5ID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgfVxuXG4gIC8vIC0tLSBNYWluIGVudHJ5OiBnZXQgYWxsIGNhbGVuZGFyIHRhc2tzIGZvciB0b2RheSAtLS1cblxuICBnZXRBbGxUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzKSB7XG4gICAgICB0YXNrcy5wdXNoKC4uLnRoaXMuZ2V0RGFpbHlOb3RlVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlVGFza3NQbHVnaW4pIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXRUYXNrc1BsdWdpblRhc2tzKCkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXRRdWlja1Rhc2tzKCkpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBDb252ZXJ0IENhbGVuZGFyVGFza3MgdG8gRGF5TWFwRW50cmllcyAtLS1cblxuICB0b0RheU1hcEVudHJpZXModGFza3M6IENhbGVuZGFyVGFza1tdKTogRGF5TWFwRW50cnlbXSB7XG4gICAgcmV0dXJuIHRhc2tzLm1hcCgodGFzaykgPT4ge1xuICAgICAgY29uc3Qgc3RhcnRIb3VyID0gdGFzay50aW1lID8gdGhpcy5wYXJzZVRpbWVUb0hvdXIodGFzay50aW1lKSA6IDk7XG4gICAgICBjb25zdCBkdXJhdGlvbkhvdXJzID0gKHRhc2suZHVyYXRpb24gPz8gMzApIC8gNjA7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2aXR5SWQ6IGBjYWwtJHt0YXNrLmlkfWAsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogdGFzay50aXRsZSxcbiAgICAgICAgZW1vamk6IHRoaXMuZ2V0U291cmNlRW1vamkodGFzay5zb3VyY2UpLFxuICAgICAgICBjYXRlZ29yeTogXCJtaW5kXCIgYXMgY29uc3QsIC8vIGNhbGVuZGFyIHRhc2tzIGRlZmF1bHQgdG8gbWluZFxuICAgICAgICBzdGFydEhvdXIsXG4gICAgICAgIGVuZEhvdXI6IHN0YXJ0SG91ciArIGR1cmF0aW9uSG91cnMsXG4gICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiB0YXNrLmR1cmF0aW9uID8/IDMwLFxuICAgICAgICBzdGF0dXM6IHRhc2suZG9uZSA/IFwiZG9uZVwiIGFzIGNvbnN0IDogXCJwZW5kaW5nXCIgYXMgY29uc3QsXG4gICAgICAgIGlzQ2FsZW5kYXJUYXNrOiB0cnVlLFxuICAgICAgICBjYWxlbmRhclNvdXJjZTogdGFzay5zb3VyY2UsXG4gICAgICAgIGNhbGVuZGFyVGFza0lkOiB0YXNrLmlkLFxuICAgICAgICBmaWxlUGF0aDogdGFzay5maWxlUGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogdGFzay5saW5lTnVtYmVyLFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQTogRGFpbHkgTm90ZXMgSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXREYWlseU5vdGVUYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgZm9sZGVyID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgIGlmICghZm9sZGVyKSByZXR1cm4gW107XG5cbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gRmluZCB0b2RheSdzIGRhaWx5IG5vdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICBpZiAoIWYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpICYmIGYucGF0aCAhPT0gZm9sZGVyKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gZi5iYXNlbmFtZSA9PT0gdGhpcy50b2RheTtcbiAgICB9KTtcblxuICAgIGlmICghZGFpbHlOb3RlKSByZXR1cm4gW107XG5cbiAgICAvLyBSZWFkIGNhY2hlZCBjb250ZW50IGFuZCBwYXJzZSB0YXNrc1xuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZGFpbHlOb3RlKTtcbiAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXMpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBsaXN0SXRlbSBvZiBjYWNoZS5saXN0SXRlbXMpIHtcbiAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlOyAvLyBub3QgYSBjaGVja2JveFxuXG4gICAgICBjb25zdCBsaW5lU3RhcnQgPSBsaXN0SXRlbS5wb3NpdGlvbi5zdGFydC5saW5lO1xuXG4gICAgICAvLyBSZWFkIHRoZSBsaW5lIGNvbnRlbnQgZnJvbSBjYWNoZSBzZWN0aW9uc1xuICAgICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0TGluZUNvbnRlbnQoZGFpbHlOb3RlLCBsaW5lU3RhcnQpO1xuICAgICAgaWYgKCFjb250ZW50KSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGNvbnRlbnQpO1xuICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2RhaWx5Tm90ZS5wYXRofS1MJHtsaW5lU3RhcnR9YCxcbiAgICAgICAgdGl0bGU6IHBhcnNlZC50aXRsZSxcbiAgICAgICAgc291cmNlOiBcImRhaWx5LW5vdGVcIixcbiAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgdGltZTogcGFyc2VkLnRpbWUsXG4gICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IGxpc3RJdGVtLnRhc2sgPT09IFwieFwiIHx8IGxpc3RJdGVtLnRhc2sgPT09IFwiWFwiLFxuICAgICAgICBmaWxlUGF0aDogZGFpbHlOb3RlLnBhdGgsXG4gICAgICAgIGxpbmVOdW1iZXI6IGxpbmVTdGFydCxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIFBhcnNlIFwiLSBbIF0gVGFzayBuYW1lIEAxNDowMCB+MzBtXCIgZm9ybWF0XG4gIHByaXZhdGUgcGFyc2VUYXNrTGluZShsaW5lOiBzdHJpbmcpOiB7IHRpdGxlOiBzdHJpbmc7IHRpbWU/OiBzdHJpbmc7IGR1cmF0aW9uPzogbnVtYmVyIH0gfCBudWxsIHtcbiAgICAvLyBSZW1vdmUgY2hlY2tib3ggcHJlZml4OiBcIi0gWyBdIFwiIG9yIFwiLSBbeF0gXCJcbiAgICBjb25zdCBtYXRjaCA9IGxpbmUubWF0Y2goL15bLSpdXFxzKlxcWy4/XFxdXFxzKiguKykkLyk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIG51bGw7XG5cbiAgICBsZXQgdGV4dCA9IG1hdGNoWzFdLnRyaW0oKTtcblxuICAgIC8vIEV4dHJhY3QgQHRpbWUgKGUuZy4sIEAxNDowMCBvciBAMnBtKVxuICAgIGxldCB0aW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgdGltZU1hdGNoID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSk6KFxcZHsyfSlcXGIvKTtcbiAgICBpZiAodGltZU1hdGNoKSB7XG4gICAgICB0aW1lID0gYCR7dGltZU1hdGNoWzFdLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHt0aW1lTWF0Y2hbMl19YDtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UodGltZU1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRyeSBAMnBtIC8gQDE0IGZvcm1hdFxuICAgICAgY29uc3Qgc2ltcGxlVGltZSA9IHRleHQubWF0Y2goL0AoXFxkezEsMn0pXFxzKihhbXxwbSk/XFxiL2kpO1xuICAgICAgaWYgKHNpbXBsZVRpbWUpIHtcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChzaW1wbGVUaW1lWzFdKTtcbiAgICAgICAgY29uc3QgcGVyaW9kID0gc2ltcGxlVGltZVsyXT8udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gXCJwbVwiICYmIGhvdXIgPCAxMikgaG91ciArPSAxMjtcbiAgICAgICAgaWYgKHBlcmlvZCA9PT0gXCJhbVwiICYmIGhvdXIgPT09IDEyKSBob3VyID0gMDtcbiAgICAgICAgdGltZSA9IGAke1N0cmluZyhob3VyKS5wYWRTdGFydCgyLCBcIjBcIil9OjAwYDtcbiAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShzaW1wbGVUaW1lWzBdLCBcIlwiKS50cmltKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRXh0cmFjdCB+ZHVyYXRpb24gKGUuZy4sIH4zMG0sIH4xaCwgfjEuNWgpXG4gICAgbGV0IGR1cmF0aW9uOiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgY29uc3QgZHVyYXRpb25NYXRjaCA9IHRleHQubWF0Y2goL34oXFxkKyg/OlxcLlxcZCspPylcXHMqKG18bWlufGh8aHJ8aG91cilzP1xcYi9pKTtcbiAgICBpZiAoZHVyYXRpb25NYXRjaCkge1xuICAgICAgY29uc3QgdmFsdWUgPSBwYXJzZUZsb2F0KGR1cmF0aW9uTWF0Y2hbMV0pO1xuICAgICAgY29uc3QgdW5pdCA9IGR1cmF0aW9uTWF0Y2hbMl0udG9Mb3dlckNhc2UoKTtcbiAgICAgIGR1cmF0aW9uID0gdW5pdC5zdGFydHNXaXRoKFwiaFwiKSA/IE1hdGgucm91bmQodmFsdWUgKiA2MCkgOiBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoZHVyYXRpb25NYXRjaFswXSwgXCJcIikudHJpbSgpO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIGFueSB0cmFpbGluZy9sZWFkaW5nIHdoaXRlc3BhY2Ugb3IgZGFzaGVzXG4gICAgY29uc3QgdGl0bGUgPSB0ZXh0LnJlcGxhY2UoL1xccysvZywgXCIgXCIpLnRyaW0oKTtcbiAgICBpZiAoIXRpdGxlKSByZXR1cm4gbnVsbDtcblxuICAgIHJldHVybiB7IHRpdGxlLCB0aW1lLCBkdXJhdGlvbiB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMaW5lQ29udGVudChmaWxlOiBURmlsZSwgbGluZU51bWJlcjogbnVtYmVyKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgLy8gVXNlIHRoZSBtZXRhZGF0YUNhY2hlIHNlY3Rpb25zIHRvIHJlY29uc3RydWN0IGxpbmUgY29udGVudFxuICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgcmV0dXJuIG51bGw7XG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlYWQgZnJvbSB0aGUgdmF1bHQgY2FjaGUgXHUyMDE0IHRyeSBnZXR0aW5nIGNvbnRlbnQgdmlhIHNlY3Rpb25zXG4gICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luY2hyb25vdXNseSByZWFkIGZpbGUgY29udGVudCwgdXNlIHRoZSBjYWNoZWQgZnJvbnRtYXR0ZXJcbiAgICAvLyBhbmQgbGlzdCBpdGVtcyB0byBidWlsZCB3aGF0IHdlIG5lZWRcbiAgICAvLyBBY3R1YWxseSwgbGlzdCBpdGVtcyBpbiBPYnNpZGlhbiBjYWNoZSBkb24ndCBpbmNsdWRlIHRoZSB0ZXh0LlxuICAgIC8vIFdlJ2xsIG5lZWQgdG8gcmVhZCB0aGUgZmlsZSBjb250ZW50LiBTdG9yZSBpdCBpbiBhIG1hcCBkdXJpbmcgZ2F0aGVyIHBoYXNlLlxuICAgIC8vIEZvciBub3csIHJldHVybiBudWxsIFx1MjAxNCB0aGUgRGFzaGJvYXJkVmlldyB3aWxsIHByZS1yZWFkIGRhaWx5IG5vdGUgY29udGVudFxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtcmVhZCBmaWxlIGNvbnRlbnRcbiAgZ2V0RGFpbHlOb3RlVGFza3NGcm9tQ29udGVudChjb250ZW50OiBzdHJpbmcsIGZpbGVQYXRoOiBzdHJpbmcpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbGluZSA9IGxpbmVzW2ldO1xuICAgICAgLy8gTWF0Y2ggdGFzayBsaW5lczogLSBbIF0gb3IgLSBbeF1cbiAgICAgIGlmICghL15bLSpdXFxzKlxcWy4/XFxdXFxzLy50ZXN0KGxpbmUpKSBjb250aW51ZTtcblxuICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGxpbmUpO1xuICAgICAgaWYgKCFwYXJzZWQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBpc0RvbmUgPSAvXlstKl1cXHMqXFxbW3hYXVxcXS8udGVzdChsaW5lKTtcblxuICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgIGlkOiBgZG4tJHtmaWxlUGF0aH0tTCR7aX1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICBmaWxlUGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQjogVGFza3MgUGx1Z2luIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgZ2V0VGFza3NQbHVnaW5UYXNrcygpOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgLy8gQ2hlY2sgaWYgVGFza3MgcGx1Z2luIGlzIGluc3RhbGxlZFxuICAgIGNvbnN0IHRhc2tzUGx1Z2luID0gKHRoaXMuYXBwIGFzIGFueSkucGx1Z2lucz8ucGx1Z2lucz8uW1wib2JzaWRpYW4tdGFza3MtcGx1Z2luXCJdO1xuICAgIGlmICghdGFza3NQbHVnaW4pIHJldHVybiBbXTtcblxuICAgIC8vIFRhc2tzIHBsdWdpbiBzdG9yZXMgdGFza3MgdmlhIG1ldGFkYXRhIGNhY2hlXG4gICAgLy8gV2Ugc2NhbiBhbGwgZmlsZXMgZm9yIHRhc2tzIHdpdGggZHVlIGRhdGVzIG1hdGNoaW5nIHRvZGF5XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICBpZiAoIWNhY2hlPy5saXN0SXRlbXMpIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgICBpZiAobGlzdEl0ZW0udGFzayA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBUYXNrcyBwbHVnaW4gdXNlcyBlbW9qaS1iYXNlZCBkYXRlcyBpbiB0aGUgdGV4dDpcbiAgICAgICAgLy8gXHVEODNEXHVEQ0M1IFlZWVktTU0tREQgZm9yIGR1ZSBkYXRlXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVhZCB0aGUgZmlsZSB0byBjaGVjaywgYnV0IHdlIGNhbiB1c2UgdGhlIGZyb250bWF0dGVyLWJhc2VkXG4gICAgICAgIC8vIGFwcHJvYWNoIG9yIHRoZSBwb3NpdGlvbiB0byBnZXQgdGhlIHRleHQuXG4gICAgICAgIC8vIFNpbmNlIHdlIGNhbid0IHN5bmMtcmVhZCwgd2UnbGwgY2hlY2sgaWYgcG9zaXRpb25zIG1lbnRpb24gdG9kYXkuXG4gICAgICAgIC8vIEZvciBub3csIHRoaXMgaXMgYSBiZXN0LWVmZm9ydCBjaGVjayB1c2luZyBjYWNoZSBkYXRhLlxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIENhbGxlZCBieSBEYXNoYm9hcmRWaWV3IHdpdGggcHJlLXNjYW5uZWQgdGFzayBkYXRhXG4gIGdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXM6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBjb25zdCBsaW5lcyA9IGZpbGUuY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIGlmICghL15bLSpdXFxzKlxcWy4/XFxdXFxzLy50ZXN0KGxpbmUpKSBjb250aW51ZTtcblxuICAgICAgICAvLyBDaGVjayBmb3IgVGFza3MgcGx1Z2luIGR1ZSBkYXRlOiBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERFxuICAgICAgICBjb25zdCBkdWVNYXRjaCA9IGxpbmUubWF0Y2goL1xcdXsxRjRDNX1cXHMqKFxcZHs0fS1cXGR7Mn0tXFxkezJ9KS91KTtcbiAgICAgICAgaWYgKCFkdWVNYXRjaCB8fCBkdWVNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5wYXJzZVRhc2tMaW5lKGxpbmUpO1xuICAgICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgICAgLy8gQWxzbyBjaGVjayBmb3Igc2NoZWR1bGVkIGRhdGUgXHUyM0YzXG4gICAgICAgIGNvbnN0IHNjaGVkdWxlZE1hdGNoID0gbGluZS5tYXRjaCgvXFx1MjNGM1xccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoc2NoZWR1bGVkTWF0Y2ggJiYgc2NoZWR1bGVkTWF0Y2hbMV0gIT09IHRoaXMudG9kYXkpIGNvbnRpbnVlO1xuXG4gICAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICAgIGlkOiBgdHAtJHtmaWxlLnBhdGh9LUwke2l9YCxcbiAgICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLnJlcGxhY2UoL1tcXHV7MUY0QzV9XFx1MjNGM11cXHMqXFxkezR9LVxcZHsyfS1cXGR7Mn0vZ3UsIFwiXCIpLnRyaW0oKSxcbiAgICAgICAgICBzb3VyY2U6IFwidGFza3MtcGx1Z2luXCIsXG4gICAgICAgICAgZGF0ZTogdGhpcy50b2RheSxcbiAgICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICAgIGRvbmU6IGlzRG9uZSxcbiAgICAgICAgICBmaWxlUGF0aDogZmlsZS5wYXRoLFxuICAgICAgICAgIGxpbmVOdW1iZXI6IGksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBPcHRpb24gQzogQnVpbHQtaW4gUXVpY2sgVGFza3MgLS0tXG5cbiAgcHJpdmF0ZSBnZXRRdWlja1Rhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzXG4gICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdGhpcy50b2RheSlcbiAgICAgIC5tYXAoKHF0KSA9PiAoe1xuICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgdGl0bGU6IHF0LnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwicXVpY2stdGFza1wiIGFzIENhbGVuZGFyVGFza1NvdXJjZSxcbiAgICAgICAgZGF0ZTogcXQuZGF0ZSxcbiAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHF0LmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBxdC5kb25lLFxuICAgICAgfSkpO1xuICB9XG5cbiAgLy8gLS0tIENvbXBsZXRpb24gaGFuZGxlcnMgLS0tXG5cbiAgLy8gVG9nZ2xlIGEgZGFpbHkgbm90ZSB0YXNrIGRvbmUvdW5kb25lIGJ5IHJld3JpdGluZyB0aGUgY2hlY2tib3hcbiAgYXN5bmMgdG9nZ2xlRGFpbHlOb3RlVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcbiAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICBpZiAobGluZU51bWJlciA+PSBsaW5lcy5sZW5ndGgpIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tsaW5lTnVtYmVyXTtcbiAgICBpZiAoZG9uZSkge1xuICAgICAgbGluZXNbbGluZU51bWJlcl0gPSBsaW5lLnJlcGxhY2UoL1xcWy5cXF0vLCBcIlt4XVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGluZXNbbGluZU51bWJlcl0gPSBsaW5lLnJlcGxhY2UoL1xcWy5cXF0vLCBcIlsgXVwiKTtcbiAgICB9XG5cbiAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gIH1cblxuICAvLyBUb2dnbGUgYSBUYXNrcyBwbHVnaW4gdGFza1xuICBhc3luYyB0b2dnbGVUYXNrc1BsdWdpblRhc2soZmlsZVBhdGg6IHN0cmluZywgbGluZU51bWJlcjogbnVtYmVyLCBkb25lOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gU2FtZSBtZWNoYW5pc20gYXMgZGFpbHkgbm90ZXMgXHUyMDE0IGp1c3QgdG9nZ2xlIHRoZSBjaGVja2JveFxuICAgIGF3YWl0IHRoaXMudG9nZ2xlRGFpbHlOb3RlVGFzayhmaWxlUGF0aCwgbGluZU51bWJlciwgZG9uZSk7XG4gIH1cblxuICAvLyBQb3N0cG9uZSBhIHRhc2sgdG8gdG9tb3Jyb3dcbiAgYXN5bmMgcG9zdHBvbmVUYXNrKHRhc2s6IENhbGVuZGFyVGFzayk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUodGhpcy50b2RheSk7XG4gICAgdG9tb3Jyb3cuc2V0RGF0ZSh0b21vcnJvdy5nZXREYXRlKCkgKyAxKTtcbiAgICBjb25zdCB0b21vcnJvd1N0ciA9IHRvbW9ycm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuXG4gICAgaWYgKHRhc2suc291cmNlID09PSBcInF1aWNrLXRhc2tcIikge1xuICAgICAgLy8gVXBkYXRlIGluIHNldHRpbmdzXG4gICAgICBjb25zdCBxdCA9IHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maW5kKFxuICAgICAgICAocSkgPT4gYHF0LSR7cS5pZH1gID09PSB0YXNrLmlkIHx8IHEuaWQgPT09IHRhc2suaWQucmVwbGFjZShcInF0LVwiLCBcIlwiKVxuICAgICAgKTtcbiAgICAgIGlmIChxdCkge1xuICAgICAgICBxdC5wb3N0cG9uZWRGcm9tID0gcXQucG9zdHBvbmVkRnJvbSA/PyBxdC5kYXRlO1xuICAgICAgICBxdC5kYXRlID0gdG9tb3Jyb3dTdHI7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0YXNrLnNvdXJjZSA9PT0gXCJ0YXNrcy1wbHVnaW5cIiAmJiB0YXNrLmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgdGFzay5saW5lTnVtYmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFVwZGF0ZSB0aGUgZHVlIGRhdGUgaW4gdGhlIGZpbGVcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgodGFzay5maWxlUGF0aCk7XG4gICAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm47XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgY29uc3QgbGluZXMgPSBjb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICBpZiAodGFzay5saW5lTnVtYmVyIDwgbGluZXMubGVuZ3RoKSB7XG4gICAgICAgIGxpbmVzW3Rhc2subGluZU51bWJlcl0gPSBsaW5lc1t0YXNrLmxpbmVOdW1iZXJdLnJlcGxhY2UoXG4gICAgICAgICAgL1xcdXsxRjRDNX1cXHMqXFxkezR9LVxcZHsyfS1cXGR7Mn0vdSxcbiAgICAgICAgICBgXFx1ezFGNEM1fSAke3RvbW9ycm93U3RyfWBcbiAgICAgICAgKTtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQubW9kaWZ5KGZpbGUsIGxpbmVzLmpvaW4oXCJcXG5cIikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBIZWxwZXJzIC0tLVxuXG4gIHByaXZhdGUgcGFyc2VUaW1lVG9Ib3VyKHRpbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgY29uc3QgW2gsIG1dID0gdGltZS5zcGxpdChcIjpcIikubWFwKE51bWJlcik7XG4gICAgcmV0dXJuIGggKyAobSA/PyAwKSAvIDYwO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTb3VyY2VFbW9qaShzb3VyY2U6IENhbGVuZGFyVGFza1NvdXJjZSk6IHN0cmluZyB7XG4gICAgc3dpdGNoIChzb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJkYWlseS1ub3RlXCI6IHJldHVybiBcIlxcdXsxRjRERH1cIjtcbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjogcmV0dXJuIFwiXFx1MjYxMVxcdUZFMEZcIjtcbiAgICAgIGNhc2UgXCJxdWljay10YXNrXCI6IHJldHVybiBcIlxcdTI2QTFcIjtcbiAgICB9XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEhlcm8gQ2FyZCBDb21wb25lbnRcbi8vIEZ1bGwtd2lkdGggYmx1cnJlZCBiZyB3aXRoIGdyZWV0aW5nLCByYW5rIGJhZGdlLCBhY3Rpb24gYnV0dG9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvQm9zc0VuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhlcm9DYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgaGVybyA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvXCIgfSk7XG4gIGhlcm8uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEJhY2tncm91bmQgaW1hZ2VcbiAgaWYgKHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kKSB7XG4gICAgY29uc3QgYmcgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYmdcIiB9KTtcbiAgICBjb25zdCB2YXVsdFBhdGggPSBzZXR0aW5ncy5oZXJvQmFja2dyb3VuZDtcbiAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKFwiJHt2YXVsdFBhdGh9XCIpYDtcbiAgfVxuXG4gIC8vIERhcmsgdmlnbmV0dGUgb3ZlcmxheVxuICBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tb3ZlcmxheVwiIH0pO1xuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1jb250ZW50XCIgfSk7XG5cbiAgLy8gVGltZS1iYXNlZCBncmVldGluZ1xuICBjb25zdCBncmVldGluZyA9IGdldEdyZWV0aW5nKHNldHRpbmdzKTtcbiAgY29udGVudC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1ncmVldGluZ1wiLFxuICAgIHRleHQ6IGAke2dyZWV0aW5nfSwgJHtzZXR0aW5ncy51c2VyTmFtZX0uYCxcbiAgfSk7XG5cbiAgLy8gQ29udGV4dHVhbCBzdWJ0aXRsZVxuICBjb25zdCBzdWJ0aXRsZSA9IGdldFN1YnRpdGxlKHNldHRpbmdzLCBlbmdpbmUpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLXN1YnRpdGxlXCIsXG4gICAgdGV4dDogc3VidGl0bGUsXG4gIH0pO1xuXG4gIC8vIFJhbmsgYmFkZ2UgcGlsbFxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY29uc3QgZXVkSW5kZXggPSBlbmdpbmUuZ2V0RXVkYWltb25pYUluZGV4KCk7XG4gIGNvbnN0IGJhZGdlID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLXJhbmstYmFkZ2VcIiB9KTtcbiAgYmFkZ2UuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLXJhbmstdGV4dFwiLFxuICAgIHRleHQ6IGAke3RpdGxlfSBcdTAwQjcgJHt0b1JvbWFuKGV1ZEluZGV4KX1gLFxuICB9KTtcblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBjb25zdCBhY3Rpb25zID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBwcm9ncmVzc0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tYnRuXCIsXG4gICAgdGV4dDogXCJZb3VyIHByb2dyZXNzXCIsXG4gIH0pO1xuICBwcm9ncmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgZXVkYWltb25pYSBzZWN0aW9uXG4gICAgY29uc3QgZXVkU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tY2FyZFwiKTtcbiAgICBpZiAoZXVkU2VjdGlvbikgZXVkU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9KTtcblxuICBjb25zdCByZWZsZWN0QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIlJlZmxlY3RcIixcbiAgfSk7XG4gIHJlZmxlY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAvLyBTY3JvbGwgdG8gdGhlIHF1b3RlIHNlY3Rpb25cbiAgICBjb25zdCBxdW90ZVNlY3Rpb24gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1b3RlXCIpO1xuICAgIGlmIChxdW90ZVNlY3Rpb24pIHF1b3RlU2VjdGlvbi5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0R3JlZXRpbmcoc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyk6IHN0cmluZyB7XG4gIGNvbnN0IGxhYmVscyA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHM7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGhvdXIgPSBub3cuZ2V0SG91cnMoKTtcblxuICBpZiAoaG91ciA+PSA1ICYmIGhvdXIgPCAxMikgcmV0dXJuIGxhYmVscy5ncmVldGluZ19tb3JuaW5nID8/IFwiR29vZCBtb3JuaW5nXCI7XG4gIGlmIChob3VyID49IDEyICYmIGhvdXIgPCAxNykgcmV0dXJuIGxhYmVscy5ncmVldGluZ19hZnRlcm5vb24gPz8gXCJHb29kIGFmdGVybm9vblwiO1xuICBpZiAoaG91ciA+PSAxNyAmJiBob3VyIDwgMjEpIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfZXZlbmluZyA/PyBcIkdvb2QgZXZlbmluZ1wiO1xuICByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX25pZ2h0ID8/IFwiR29vZCBuaWdodFwiO1xufVxuXG5mdW5jdGlvbiBnZXRTdWJ0aXRsZShzZXR0aW5nczogT2xlblNldHRpbmdzLCBlbmdpbmU6IE9sZW5FbmdpbmUpOiBzdHJpbmcge1xuICBjb25zdCBib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuXG4gIC8vIFRhcnRhcnVzXG4gIGlmIChzZXR0aW5ncy5pblRhcnRhcnVzKSB7XG4gICAgcmV0dXJuIFwiVGhlIHVuZGVyd29ybGQgYXdhaXRzIHlvdXIgcGVuYW5jZS5cIjtcbiAgfVxuXG4gIC8vIEJvc3MgZGFuZ2VyIHpvbmVcbiAgaWYgKGJvc3NFbmdpbmUuaXNEYW5nZXJab25lKCkpIHtcbiAgICByZXR1cm4gXCJPbmUgZmluYWwgYmxvdyByZW1haW5zLlwiO1xuICB9XG5cbiAgLy8gQWN0aXZlIHN0cmVha1xuICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0T3ZlcmFsbFN0cmVhaygpO1xuICBpZiAoc3RyZWFrID49IDMpIHtcbiAgICByZXR1cm4gYCR7c3RyZWFrfSBkYXlzIHN0cm9uZy4gS2VlcCB0aGUgZmxhbWUuYDtcbiAgfVxuXG4gIC8vIERlZmF1bHRcbiAgcmV0dXJuIFwiU3RlcCBieSBzdGVwLCB5b3Ugc2hhcGUgeW91ciBwYXRoLlwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgRXVkYWltb25pYSBCYXIgQ29tcG9uZW50XG4vLyBTZWdtZW50ZWQgcHJvZ3Jlc3MgYmFyLCBzdGF0IGNhcmRzLCBjYXRlZ29yeSByb3dzIHdpdGggaWNvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IHRvUm9tYW4gfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IENBVEVHT1JZX0lDT05TOiBSZWNvcmQ8Q2F0ZWdvcnksIHN0cmluZz4gPSB7XG4gIGJvZHk6IFwiXFx1ezFGM0NCfVwiLCAvLyB3ZWlnaHRsaWZ0ZXJcbiAgbWluZDogXCJcXHV7MUY0REF9XCIsIC8vIGJvb2tzXG4gIHNwaXJpdDogXCJcXHV7MUY1NEF9XCIsIC8vIGRvdmVcbn07XG5cbmNvbnN0IFRPVEFMX1NFR01FTlRTID0gMTA7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFdWRhaW1vbmlhQmFyKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgLy8gLS0tIDEuIEV1ZGFpbW9uaWEgQ2FyZCAoc2VnbWVudGVkIGJhciArIGNoYXB0ZXIpIC0tLVxuICByZW5kZXJFdWRhaW1vbmlhQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCk7XG5cbiAgLy8gLS0tIDIuIFN0YXQgQ2FyZHMgUm93IChzZXBhcmF0ZSBmcm9tIHRoZSBjYXJkKSAtLS1cbiAgcmVuZGVyU3RhdENhcmRzKGNvbnRhaW5lciwgZW5naW5lLCBzdGFnZ2VySW5kZXggKyAxKTtcblxuICAvLyAtLS0gMy4gQ2F0ZWdvcmllcyBDYXJkIChpY29uIHJvd3Mgd2l0aCBiYXJzKSAtLS1cbiAgcmVuZGVyQ2F0ZWdvcmllc0NhcmQoY29udGFpbmVyLCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySW5kZXggKyAyKTtcbn1cblxuLy8gLS0tLSBFdWRhaW1vbmlhIENhcmQgLS0tLVxuXG5mdW5jdGlvbiByZW5kZXJFdWRhaW1vbmlhQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXI6IHRpdGxlICsgWFBcbiAgY29uc3QgaGVhZGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWhlYWRlclwiIH0pO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcblxuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtdGl0bGVcIixcbiAgICB0ZXh0OiBgRXVkYWltb25pYSAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIGNvbnN0IHRvdGFsWFAgPSBlbmdpbmUuZ2V0QWxsQ2F0ZWdvcnlMZXZlbHMoKS5yZWR1Y2UoKHN1bSwgY2wpID0+IHN1bSArIGNsLnhwLCAwKTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXhwXCIsXG4gICAgdGV4dDogYCR7dG90YWxYUH0gWFBgLFxuICB9KTtcblxuICAvLyBTZWdtZW50ZWQgcHJvZ3Jlc3MgYmFyXG4gIGNvbnN0IHByb2dyZXNzID0gZW5naW5lLmdldEV1ZGFpbW9uaWFQcm9ncmVzcygpOyAvLyAwLTEwMFxuICBjb25zdCBmaWxsZWRTZWdtZW50cyA9IE1hdGguZmxvb3IocHJvZ3Jlc3MgLyBUT1RBTF9TRUdNRU5UUyk7XG4gIGNvbnN0IGhhc1BhcnRpYWwgPSBwcm9ncmVzcyAlIFRPVEFMX1NFR01FTlRTID4gMDtcblxuICBjb25zdCBzZWdtZW50cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZXVkYWltb25pYS1zZWdtZW50c1wiIH0pO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgVE9UQUxfU0VHTUVOVFM7IGkrKykge1xuICAgIGxldCBjbHMgPSBcIm9sZW4tZXVkYWltb25pYS1zZWdtZW50XCI7XG4gICAgaWYgKGkgPCBmaWxsZWRTZWdtZW50cykge1xuICAgICAgY2xzICs9IFwiIG9sZW4tZXVkYWltb25pYS1zZWdtZW50LWZpbGxlZFwiO1xuICAgIH0gZWxzZSBpZiAoaSA9PT0gZmlsbGVkU2VnbWVudHMgJiYgaGFzUGFydGlhbCkge1xuICAgICAgY2xzICs9IFwiIG9sZW4tZXVkYWltb25pYS1zZWdtZW50LXBhcnRpYWxcIjtcbiAgICB9XG4gICAgc2VnbWVudHMuY3JlYXRlRGl2KHsgY2xzIH0pO1xuICB9XG5cbiAgLy8gQ2hhcHRlciBsYWJlbFxuICBjb25zdCBjaGFwdGVyID0gZW5naW5lLmdldENoYXB0ZXIoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS1jaGFwdGVyXCIsXG4gICAgdGV4dDogYENoYXB0ZXIgJHt0b1JvbWFuKGNoYXB0ZXIubnVtYmVyKX06ICR7Y2hhcHRlci5uYW1lfWAsXG4gIH0pO1xufVxuXG4vLyAtLS0tIFN0YXQgQ2FyZHMgLS0tLVxuXG5mdW5jdGlvbiByZW5kZXJTdGF0Q2FyZHMoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBncmlkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXN0YXRzLWdyaWRcIiB9KTtcbiAgZ3JpZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgY29uc3QgdG90YWxUYXNrcyA9IGVuZ2luZS5nZXRUb3RhbENvbXBsZXRpb25zKCk7XG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGNvbnN0IHByZXNlbmNlID0gZW5naW5lLmdldERheXNPZlByZXNlbmNlKCk7XG5cbiAgLy8gT2JqZWN0aXZlcyBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezFGM0FGfVwiLCB0b3RhbFRhc2tzLCBcIk9iamVjdGl2ZXNcIik7XG5cbiAgLy8gU3RyZWFrIGNhcmQgKHdpdGggc3RyZWFrIGRvdHMpXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezFGNTI1fVwiLCBzdHJlYWssIFwiU3RyZWFrXCIsIHN0cmVhayk7XG5cbiAgLy8gQ29uc2lzdGVuY3kgY2FyZFxuICBjcmVhdGVTdGF0Q2FyZChncmlkLCBcIlxcdXsyNzI4fVwiLCBwcmVzZW5jZSwgXCJDb25zaXN0ZW5jeVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlU3RhdENhcmQoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIGljb246IHN0cmluZyxcbiAgdmFsdWU6IG51bWJlcixcbiAgbGFiZWw6IHN0cmluZyxcbiAgc3RyZWFrRGF5cz86IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGNhcmQgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkXCIgfSk7XG5cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1pY29uXCIsIHRleHQ6IGljb24gfSk7XG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1zdGF0LWNhcmQtdmFsdWVcIiwgdGV4dDogU3RyaW5nKHZhbHVlKSB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1sYWJlbFwiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBTdHJlYWsgZG90cyAoc2hvdyBsYXN0IDcgZGF5cylcbiAgaWYgKHN0cmVha0RheXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGRvdHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXN0YXQtY2FyZC1kb3RzXCIgfSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGxldCBjbHMgPSBcIm9sZW4tc3RhdC1kb3RcIjtcbiAgICAgIGlmIChpIDwgc3RyZWFrRGF5cykge1xuICAgICAgICBjbHMgKz0gXCIgb2xlbi1zdGF0LWRvdC1hY3RpdmVcIjtcbiAgICAgIH1cbiAgICAgIGRvdHMuY3JlYXRlRGl2KHsgY2xzIH0pO1xuICAgIH1cbiAgfVxufVxuXG4vLyAtLS0tIENhdGVnb3JpZXMgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckNhdGVnb3JpZXNDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIER5bmFtaWMgdGl0bGVcbiAgY29uc3QgdGl0bGUgPSBlbmdpbmUuZ2V0RHluYW1pY1RpdGxlKCk7XG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1keW5hbWljLXRpdGxlXCIsIHRleHQ6IHRpdGxlIH0pO1xuXG4gIC8vIERpdmlkZXJcbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgcm93c1xuICBjb25zdCBncmlkID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yaWVzLWdyaWRcIiB9KTtcblxuICBjb25zdCBjYXRlZ29yaWVzOiB7IGtleTogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmcgfVtdID0gW1xuICAgIHsga2V5OiBcImJvZHlcIiwgbGFiZWw6IFwiQm9keVwiIH0sXG4gICAgeyBrZXk6IFwibWluZFwiLCBsYWJlbDogXCJNaW5kXCIgfSxcbiAgICB7IGtleTogXCJzcGlyaXRcIiwgbGFiZWw6IFwiU3Bpcml0XCIgfSxcbiAgXTtcblxuICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgbGV2ZWwgPSBlbmdpbmUuZ2V0Q2F0ZWdvcnlMZXZlbChjYXQua2V5KTtcbiAgICBjb25zdCBjb2xvciA9IHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldO1xuXG4gICAgY29uc3Qgcm93ID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1yb3dcIiB9KTtcblxuICAgIC8vIEljb24gYm94XG4gICAgY29uc3QgaWNvbkJveCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1pY29uXCIgfSk7XG4gICAgaWNvbkJveC5zdHlsZS5iYWNrZ3JvdW5kID0gYCR7Y29sb3J9MjJgOyAvLyAxMyUgb3BhY2l0eSB0aW50XG4gICAgaWNvbkJveC50ZXh0Q29udGVudCA9IENBVEVHT1JZX0lDT05TW2NhdC5rZXldO1xuXG4gICAgLy8gSW5mbyBjb2x1bW5cbiAgICBjb25zdCBpbmZvID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWluZm9cIiB9KTtcblxuICAgIC8vIE5hbWUgKyBsZXZlbCByb3dcbiAgICBjb25zdCBuYW1lUm93ID0gaW5mby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lLXJvd1wiIH0pO1xuICAgIG5hbWVSb3cuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktbmFtZVwiLCB0ZXh0OiBjYXQubGFiZWwgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tY2F0ZWdvcnktbGV2ZWwtdGV4dFwiLFxuICAgICAgdGV4dDogYEx2ICR7bGV2ZWwubGV2ZWx9IFx1MDBCNyAke2xldmVsLnByb2dyZXNzVG9OZXh0fS8xMDBgLFxuICAgIH0pO1xuXG4gICAgLy8gUHJvZ3Jlc3MgYmFyXG4gICAgY29uc3QgYmFyID0gaW5mby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1iYXJcIiB9KTtcbiAgICBjb25zdCBmaWxsID0gYmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhci1maWxsXCIgfSk7XG4gICAgZmlsbC5zdHlsZS53aWR0aCA9IGAke2xldmVsLnByb2dyZXNzVG9OZXh0fSVgO1xuICAgIGZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEaXJlY3RpdmUgQ2FyZCBDb21wb25lbnRcbi8vIENvbXBhY3QgY2FyZCBvbiBkYXNoYm9hcmQgKyBleHBhbmRlZCBib3R0b20tc2hlZXQgb3ZlcmxheVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBQcmlvcml0eVJlYXNvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRGlyZWN0aXZlQ2FyZChcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25CZWdpblNlc3Npb24/OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3Qgc3VnZ2VzdGlvbiA9IGVuZ2luZS5nZXRTdWdnZXN0aW9uKCk7XG4gIGlmICghc3VnZ2VzdGlvbikgcmV0dXJuO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kaXJlY3RpdmVfdGl0bGUgPz8gXCJUSEUgRElSRUNUSVZFXCI7XG4gIGNvbnN0IGJlZ2luTGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmJlZ2luX3Nlc3Npb24gPz8gXCJCRUdJTiBTRVNTSU9OXCI7XG4gIGNvbnN0IG5vdE5vd0xhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5ub3Rfbm93ID8/IFwiTk9UIE5PV1wiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENvbXBhY3QgY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQgb2xlbi1kaXJlY3RpdmVcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gSGVhZGVyIHdpdGggYmFkZ2VcbiAgY29uc3QgaGVhZGVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtaGVhZGVyXCIgfSk7XG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgY29uc3QgYmFkZ2UgPSBoZWFkZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWJhZGdlXCIgfSk7XG4gIGJhZGdlLnN0eWxlLmJhY2tncm91bmQgPSBnZXRCYWRnZUNvbG9yKHN1Z2dlc3Rpb24ucmVhc29uKTtcblxuICAvLyBBY3Rpdml0eSBpbmZvXG4gIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIHRleHQ6IGAke3N1Z2dlc3Rpb24uZW1vaml9ICR7c3VnZ2VzdGlvbi5hY3Rpdml0eU5hbWV9YCxcbiAgfSk7XG5cbiAgY29uc3QgbmVnbGVjdFRleHQgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIG5lZ2xlY3RlZGBcbiAgICA6IFwiTm90IHlldCBzdGFydGVkXCI7XG5cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1uZWdsZWN0XCIsIHRleHQ6IG5lZ2xlY3RUZXh0IH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpb25zXCIgfSk7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIG9uQmVnaW5TZXNzaW9uPy4oc3VnZ2VzdGlvbi5hY3Rpdml0eUlkKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90Tm93QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgIHRleHQ6IG5vdE5vd0xhYmVsLFxuICB9KTtcbiAgbm90Tm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgLy8gRGlzbWlzcyB0aGlzIGNhcmQgd2l0aCBhIGZhZGVcbiAgICBjYXJkLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgtMTBweClcIjtcbiAgICBjYXJkLnN0eWxlLnRyYW5zaXRpb24gPSBcImFsbCAwLjNzIGVhc2VcIjtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIH0sIDMwMCk7XG4gIH0pO1xuXG4gIC8vIFRhcCBjYXJkIHRvIGV4cGFuZFxuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgc2hvd0V4cGFuZGVkRGlyZWN0aXZlKGNvbnRhaW5lciwgc2V0dGluZ3MsIHN1Z2dlc3Rpb24sIGJlZ2luTGFiZWwsIG5vdE5vd0xhYmVsLCBvbkJlZ2luU2Vzc2lvbik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RXhwYW5kZWREaXJlY3RpdmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN1Z2dlc3Rpb246IHsgYWN0aXZpdHlJZDogc3RyaW5nOyBhY3Rpdml0eU5hbWU6IHN0cmluZzsgZW1vamk6IHN0cmluZzsgcmVhc29uOiBQcmlvcml0eVJlYXNvbjsgZGF5c1NpbmNlTGFzdERvbmU6IG51bWJlcjsgbG9yZVRleHQ6IHN0cmluZyB9LFxuICBiZWdpbkxhYmVsOiBzdHJpbmcsXG4gIG5vdE5vd0xhYmVsOiBzdHJpbmcsXG4gIG9uQmVnaW5TZXNzaW9uPzogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIC8vIENyZWF0ZSBvdmVybGF5XG4gIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdmVybGF5LmNsYXNzTmFtZSA9IFwib2xlbi1zaGVldC1vdmVybGF5XCI7XG5cbiAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG5cbiAgLy8gSGFuZGxlIGJhclxuICBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1oYW5kbGVcIiB9KTtcblxuICAvLyBUaXRsZVxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVhZGluZy1sZ1wiLFxuICAgIHRleHQ6IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGlyZWN0aXZlX3RpdGxlID8/IFwiVEhFIERJUkVDVElWRVwiLFxuICB9KTtcblxuICAvLyBBY3Rpdml0eSBuYW1lXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aXZpdHlcIixcbiAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMjJweDsgbWFyZ2luOiAxNnB4IDAgOHB4O1wiIH0sXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICAvLyBOZWdsZWN0IGRlc2NyaXB0aW9uXG4gIGNvbnN0IG5lZ2xlY3REZXNjID0gc3VnZ2VzdGlvbi5kYXlzU2luY2VMYXN0RG9uZSA8IDk5OVxuICAgID8gYCR7c3VnZ2VzdGlvbi5kYXlzU2luY2VMYXN0RG9uZX0gZGF5cyBzaW5jZSB5b3UgbGFzdCBwcmFjdGljZWQuIFRoZSBza2lsbCBhdHJvcGhpZXMuYFxuICAgIDogXCJBIG5ldyBwYXRoIGF3YWl0cy4gVGFrZSB0aGUgZmlyc3Qgc3RlcC5cIjtcblxuICBzaGVldC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYm9keS1pdGFsaWNcIixcbiAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbi1ib3R0b206IDEycHg7XCIgfSxcbiAgICB0ZXh0OiBuZWdsZWN0RGVzYyxcbiAgfSk7XG5cbiAgLy8gTG9yZSB0ZXh0XG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1zaGVldC1sb3JlXCIsXG4gICAgdGV4dDogYFwiJHtzdWdnZXN0aW9uLmxvcmVUZXh0fVwiYCxcbiAgfSk7XG5cbiAgLy8gUmFuZG9tIHF1b3RlXG4gIGNvbnN0IHF1b3RlID0gRkFMTEJBQ0tfUVVPVEVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEZBTExCQUNLX1FVT1RFUy5sZW5ndGgpXTtcbiAgY29uc3QgcXVvdGVTZWN0aW9uID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtcXVvdGVcIiB9KTtcbiAgcXVvdGVTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogNnB4O1wiIH0sXG4gIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbnNcbiAgY29uc3QgYWN0aW9ucyA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpb25zXCIgfSk7XG4gIGFjdGlvbnMuc3R5bGUubWFyZ2luVG9wID0gXCIyMHB4XCI7XG4gIGFjdGlvbnMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXG4gIGNvbnN0IGJlZ2luQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICB0ZXh0OiBiZWdpbkxhYmVsLFxuICB9KTtcbiAgYmVnaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbG9zZVNoZWV0KCk7XG4gICAgb25CZWdpblNlc3Npb24/LihzdWdnZXN0aW9uLmFjdGl2aXR5SWQpO1xuICB9KTtcblxuICBjb25zdCBub3ROb3dCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgdGV4dDogbm90Tm93TGFiZWwsXG4gIH0pO1xuICBub3ROb3dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjbG9zZVNoZWV0KCk7XG4gIH0pO1xuXG4gIC8vIENsb3NlIG9uIG92ZXJsYXkgdGFwXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVNoZWV0KCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlU2hlZXQoKTogdm9pZCB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gIH1cblxuICAvLyBBcHBlbmQgYW5kIGFuaW1hdGUgaW5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFkZ2VDb2xvcihyZWFzb246IFByaW9yaXR5UmVhc29uKTogc3RyaW5nIHtcbiAgc3dpdGNoIChyZWFzb24pIHtcbiAgICBjYXNlIFwiZGVhdGhcIjogcmV0dXJuIFwiI2VmNDQ0NFwiO1xuICAgIGNhc2UgXCJib3NzXCI6IHJldHVybiBcIiNlYWIzMDhcIjtcbiAgICBjYXNlIFwibmVnbGVjdFwiOiByZXR1cm4gXCIjZjk3MzE2XCI7XG4gICAgY2FzZSBcIndlZWtseVwiOiByZXR1cm4gXCIjM2I4MmY2XCI7XG4gICAgY2FzZSBcImNoYWluXCI6IHJldHVybiBcIiM4YjVjZjZcIjtcbiAgICBjYXNlIFwidGltZVwiOiByZXR1cm4gXCIjMDZiNmQ0XCI7XG4gICAgY2FzZSBcImJhbGFuY2VkXCI6IHJldHVybiBcIiNmZmZmZmZcIjtcbiAgICBkZWZhdWx0OiByZXR1cm4gXCIjOTI4ZDg1XCI7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IEJvc3MgU3RhdHVzIENhcmQgQ29tcG9uZW50XG4vLyBDb21wYWN0IGJvc3MgSFAgYmFyIHdpdGggdGllciBhbmQgcmFua1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvQm9zc0VuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQm9zc1N0YXR1c0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgYm9zc0VuZ2luZSA9IG5ldyBCb3NzRW5naW5lKHNldHRpbmdzKTtcbiAgY29uc3Qgc3RhdHVzID0gYm9zc0VuZ2luZS5nZXRCb3NzU3RhdHVzKCk7XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmJvc3Nfc3RhdHVzX3RpdGxlID8/IFwiQk9TUyBTVEFUVVNcIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDYXJkXG4gIGNvbnN0IGNhcmRDbHMgPSBzdGF0dXMuaW5UYXJ0YXJ1cyA/IFwib2xlbi1jYXJkLWNvbXBhY3Qgb2xlbi1jYXJkLXRhcnRhcnVzXCIgOiBcIm9sZW4tY2FyZC1jb21wYWN0XCI7XG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBjYXJkQ2xzIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBSb3c6IGVtb2ppICsgaW5mb1xuICBjb25zdCByb3cgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWJvc3Mtcm93XCIgfSk7XG5cbiAgcm93LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYm9zcy1lbW9qaVwiLCB0ZXh0OiBnZXRCb3NzRW1vamkoc3RhdHVzLnRpZXIpIH0pO1xuXG4gIGNvbnN0IGluZm8gPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYm9zcy1pbmZvXCIgfSk7XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1ib3NzLW5hbWVcIiwgdGV4dDogc3RhdHVzLmJvc3MubmFtZSB9KTtcbiAgaW5mby5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYm9zcy10aWVyXCIsXG4gICAgdGV4dDogYFRpZXIgJHtzdGF0dXMudGllcn0gXHUwMEI3ICR7c3RhdHVzLnJhbmt9YCxcbiAgfSk7XG5cbiAgLy8gSFAgYmFyXG4gIGNvbnN0IGhwQmFyID0gaW5mby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ocC1iYXJcIiB9KTtcbiAgY29uc3QgaHBGaWxsID0gaHBCYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taHAtYmFyLWZpbGxcIiB9KTtcbiAgaHBGaWxsLnN0eWxlLndpZHRoID0gYCR7c3RhdHVzLnBlcmNlbnR9JWA7XG4gIGhwRmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gYm9zc0VuZ2luZS5nZXRIUENvbG9yKHN0YXR1cy5wZXJjZW50KTtcblxuICAvLyBIUCB0ZXh0XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWJvc3MtaHAtdGV4dFwiLFxuICAgIHRleHQ6IGAke3N0YXR1cy5jdXJyZW50SFB9LyR7c3RhdHVzLm1heEhQfSBIUCAoJHtzdGF0dXMucGVyY2VudH0lKWAsXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRCb3NzRW1vamkodGllcjogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgZW1vamlzOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAgIDE6IFwiXFx1ezFGNDdCfVwiLCAyOiBcIlxcdXsxRjlEQ31cIiwgMzogXCJcXHV7MUY0MDl9XCIsIDQ6IFwiXFx1ezFGNDAyfVwiLFxuICAgIDU6IFwiXFx1ezFGNDBEfVwiLCA2OiBcIlxcdXsxRjk4MX1cIiwgNzogXCJcXHV7MUY1MjV9XCIsIDg6IFwiXFx1ezFGNDNBfVwiLFxuICAgIDk6IFwiXFx1ezFGMzBBfVwiLCAxMDogXCJcXHV7MUY0N0Z9XCIsIDExOiBcIlxcdXsxRjMyOX1cIiwgMTI6IFwiXFx1MjMxQlwiLFxuICAgIDEzOiBcIlxcdXsxRjMwMH1cIixcbiAgfTtcbiAgcmV0dXJuIGVtb2ppc1t0aWVyXSA/PyBcIlxcdTI2OTRcXHVGRTBGXCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBXZWVrbHkgUmh5dGhtIENvbXBvbmVudFxuLy8gNy1kYXkgYmFyIGNoYXJ0IHdpdGggY2F0ZWdvcnkgc3RhY2tpbmcgKyBzdGF0cyByb3dcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcldlZWtseVJoeXRobShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy53ZWVrbHlfcmh5dGhtX3RpdGxlID8/IFwiV0VFS0xZIFJIWVRITVwiO1xuXG4gIC8vIFNlY3Rpb24gdGl0bGVcbiAgY29uc3QgdGl0bGVFbCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZWN0aW9uLXRpdGxlXCIgfSk7XG4gIHRpdGxlRWwuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIENhcmRcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIFN0YXRzIHJvd1xuICBjb25zdCBzdGF0cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXRzXCIgfSk7XG5cbiAgY29uc3QgYWN0aXZlRGF5cyA9IGVuZ2luZS5nZXRBY3RpdmVEYXlzVGhpc1dlZWsoKTtcbiAgY29uc3QgYmVzdERheSA9IGVuZ2luZS5nZXRCZXN0RGF5VGhpc1dlZWsoKTtcbiAgY29uc3QgdG90YWxDb21wbGV0aW9ucyA9IGVuZ2luZS5nZXRUb3RhbENvbXBsZXRpb25zKCk7XG5cbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgU3RyaW5nKGFjdGl2ZURheXMpICsgXCIvN1wiLCBcIkFjdGl2ZSBkYXlzXCIpO1xuICBjcmVhdGVXZWVrbHlTdGF0KHN0YXRzLCBiZXN0RGF5LCBcIkJlc3QgZGF5XCIpO1xuICBjcmVhdGVXZWVrbHlTdGF0KHN0YXRzLCBTdHJpbmcodG90YWxDb21wbGV0aW9ucyksIFwiVG90YWxcIik7XG5cbiAgLy8gRGl2aWRlclxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBCYXIgY2hhcnRcbiAgY29uc3Qgd2Vla2x5RGF0YSA9IGVuZ2luZS5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHRvZGF5U3RyID0gbmV3IERhdGUobm93KS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcblxuICAvLyBGaW5kIG1heCB0b3RhbCBmb3Igc2NhbGluZ1xuICBsZXQgbWF4VG90YWwgPSAxO1xuICBmb3IgKGNvbnN0IGRheSBvZiB3ZWVrbHlEYXRhKSB7XG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBkYXkuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbCArPSB2OyB9KTtcbiAgICBpZiAodG90YWwgPiBtYXhUb3RhbCkgbWF4VG90YWwgPSB0b3RhbDtcbiAgfVxuXG4gIGNvbnN0IGJhcnNDb250YWluZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXJzXCIgfSk7XG5cbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla2x5RGF0YSkge1xuICAgIGNvbnN0IGNvbCA9IGJhcnNDb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td2Vla2x5LWJhci1jb2xcIiB9KTtcblxuICAgIC8vIFN0YWNrZWQgYmFyXG4gICAgbGV0IHRvdGFsID0gMDtcbiAgICBkYXkuY29tcGxldGlvbnMuZm9yRWFjaCgodikgPT4geyB0b3RhbCArPSB2OyB9KTtcblxuICAgIGNvbnN0IGJhckhlaWdodCA9IG1heFRvdGFsID4gMCA/IE1hdGgubWF4KDQsICh0b3RhbCAvIG1heFRvdGFsKSAqIDEwMCkgOiA0O1xuICAgIGNvbnN0IGJhckVsID0gY29sLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXJcIiB9KTtcbiAgICBiYXJFbC5zdHlsZS5oZWlnaHQgPSBgJHtiYXJIZWlnaHR9cHhgO1xuICAgIGJhckVsLnN0eWxlLm1pbkhlaWdodCA9IFwiNHB4XCI7XG5cbiAgICBpZiAoZGF5LmRhdGUgPT09IHRvZGF5U3RyKSB7XG4gICAgICBiYXJFbC5jbGFzc0xpc3QuYWRkKFwib2xlbi13ZWVrbHktYmFyLXRvZGF5XCIpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBzdGFja2VkIHNlZ21lbnRzXG4gICAgY29uc3QgY2F0ZWdvcmllczogQ2F0ZWdvcnlbXSA9IFtcImJvZHlcIiwgXCJtaW5kXCIsIFwic3Bpcml0XCJdO1xuICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgIGNvbnN0IGNhdENvdW50ID0gZGF5LmNvbXBsZXRpb25zLmdldChjYXQpID8/IDA7XG4gICAgICBpZiAoY2F0Q291bnQgPT09IDApIGNvbnRpbnVlO1xuICAgICAgY29uc3Qgc2VnSGVpZ2h0ID0gdG90YWwgPiAwID8gKGNhdENvdW50IC8gdG90YWwpICogMTAwIDogMDtcbiAgICAgIGNvbnN0IHNlZyA9IGJhckVsLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItc2VnbWVudFwiIH0pO1xuICAgICAgc2VnLnN0eWxlLmhlaWdodCA9IGAke3NlZ0hlaWdodH0lYDtcbiAgICAgIHNlZy5zdHlsZS5iYWNrZ3JvdW5kID0gZ2V0Q2F0ZWdvcnlDb2xvcihjYXQsIHNldHRpbmdzKTtcbiAgICB9XG5cbiAgICAvLyBJZiBubyBjb21wbGV0aW9ucywgc2hvdyBlbXB0eSBiYXJcbiAgICBpZiAodG90YWwgPT09IDApIHtcbiAgICAgIGJhckVsLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSlcIjtcbiAgICB9XG5cbiAgICAvLyBEYXkgbGFiZWxcbiAgICBjb2wuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktZGF5LWxhYmVsXCIsIHRleHQ6IGRheS5kYXkuY2hhckF0KDApIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlZWtseVN0YXQocGFyZW50OiBIVE1MRWxlbWVudCwgdmFsdWU6IHN0cmluZywgbGFiZWw6IHN0cmluZyk6IHZvaWQge1xuICBjb25zdCBzdGF0ID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0XCIgfSk7XG4gIHN0YXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdC12YWx1ZVwiLCB0ZXh0OiB2YWx1ZSB9KTtcbiAgc3RhdC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0LWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDYXRlZ29yeUNvbG9yKGNhdGVnb3J5OiBDYXRlZ29yeSwgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyk6IHN0cmluZyB7XG4gIHJldHVybiBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tjYXRlZ29yeV0gPz8gXCIjOTI4ZDg1XCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBBY3Rpdml0eSBHcmlkIENvbXBvbmVudFxuLy8gMi1jb2x1bW4gZ3JpZCBvZiBhY3Rpdml0eSBjYXJkcyB3aXRoIHByb2dyZXNzIHJpbmdzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJBY3Rpdml0eUdyaWQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuYWN0aXZpdHlfZ3JpZF90aXRsZSA/PyBcIkFDVElWSVRJRVNcIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBHcmlkIGNvbnRhaW5lclxuICBjb25zdCBncmlkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LWdyaWRcIiB9KTtcbiAgZ3JpZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgY29uc3QgY29sdW1ucyA9IHNldHRpbmdzLmRldkNvbmZpZy5hY3Rpdml0eUdyaWRDb2x1bW5zID8/IDI7XG4gIGdyaWQuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IGByZXBlYXQoJHtjb2x1bW5zfSwgMWZyKWA7XG5cbiAgY29uc3QgYWN0aXZpdGllcyA9IGVuZ2luZS5nZXRFbmFibGVkQWN0aXZpdGllcygpO1xuXG4gIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgYWN0aXZpdGllcykge1xuICAgIGNvbnN0IGNhcmQgPSBncmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LWNhcmRcIiB9KTtcblxuICAgIC8vIENhdGVnb3J5IGFjY2VudCBiYXJcbiAgICBjb25zdCBhY2NlbnQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWFjdGl2aXR5LWFjY2VudFwiIH0pO1xuICAgIGFjY2VudC5zdHlsZS5iYWNrZ3JvdW5kID0gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbYWN0aXZpdHkuY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xuXG4gICAgLy8gVG9wIHJvdzogZW1vamkgKyBzdGF0dXMgZG90XG4gICAgY29uc3QgdG9wID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS10b3BcIiB9KTtcbiAgICB0b3AuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1lbW9qaVwiLCB0ZXh0OiBhY3Rpdml0eS5lbW9qaSB9KTtcblxuICAgIGNvbnN0IGRheXNTaW5jZSA9IGVuZ2luZS5nZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eS5pZCk7XG4gICAgY29uc3QgZG90Q2xzID0gZ2V0RG90Q2xhc3MoZGF5c1NpbmNlKTtcbiAgICB0b3AuY3JlYXRlRGl2KHsgY2xzOiBgb2xlbi1hY3Rpdml0eS1kb3QgJHtkb3RDbHN9YCB9KTtcblxuICAgIC8vIEFjdGl2aXR5IG5hbWVcbiAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktbmFtZVwiLCB0ZXh0OiBhY3Rpdml0eS5uYW1lIH0pO1xuXG4gICAgLy8gV2Vla2x5IHByb2dyZXNzXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBlbmdpbmUuZ2V0V2Vla2x5UHJvZ3Jlc3MoYWN0aXZpdHkuaWQpO1xuICAgIGNvbnN0IHByb2dyZXNzUm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzc1wiIH0pO1xuXG4gICAgLy8gUHJvZ3Jlc3MgcmluZyAoU1ZHKVxuICAgIGNvbnN0IHJpbmcgPSBjcmVhdGVQcm9ncmVzc1JpbmcocHJvZ3Jlc3MuZG9uZSwgcHJvZ3Jlc3MudGFyZ2V0LCBzZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1thY3Rpdml0eS5jYXRlZ29yeV0pO1xuICAgIHByb2dyZXNzUm93LmFwcGVuZENoaWxkKHJpbmcpO1xuXG4gICAgcHJvZ3Jlc3NSb3cuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3MtdGV4dFwiLFxuICAgICAgdGV4dDogYCR7cHJvZ3Jlc3MuZG9uZX0gb2YgJHtwcm9ncmVzcy50YXJnZXR9YCxcbiAgICB9KTtcblxuICAgIC8vIFN0cmVha1xuICAgIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRBY3Rpdml0eVN0cmVhayhhY3Rpdml0eS5pZCk7XG4gICAgaWYgKHN0cmVhayA+IDApIHtcbiAgICAgIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi1hY3Rpdml0eS1zdHJlYWtcIixcbiAgICAgICAgdGV4dDogYCR7c3RyZWFrfSBkYXkgc3RyZWFrYCxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREb3RDbGFzcyhkYXlzU2luY2U6IG51bWJlcik6IHN0cmluZyB7XG4gIGlmIChkYXlzU2luY2UgPT09IDApIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LWdyZWVuXCI7XG4gIGlmIChkYXlzU2luY2UgPD0gMSkgcmV0dXJuIFwib2xlbi1hY3Rpdml0eS1kb3QteWVsbG93XCI7XG4gIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LXJlZFwiO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9ncmVzc1JpbmcoZG9uZTogbnVtYmVyLCB0YXJnZXQ6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IFNWR1NWR0VsZW1lbnQge1xuICBjb25zdCBzaXplID0gMjQ7XG4gIGNvbnN0IHN0cm9rZVdpZHRoID0gMi41O1xuICBjb25zdCByYWRpdXMgPSAoc2l6ZSAtIHN0cm9rZVdpZHRoKSAvIDI7XG4gIGNvbnN0IGNpcmN1bWZlcmVuY2UgPSAyICogTWF0aC5QSSAqIHJhZGl1cztcbiAgY29uc3QgcGVyY2VudCA9IHRhcmdldCA+IDAgPyBNYXRoLm1pbigxLCBkb25lIC8gdGFyZ2V0KSA6IDA7XG4gIGNvbnN0IGRhc2hPZmZzZXQgPSBjaXJjdW1mZXJlbmNlICogKDEgLSBwZXJjZW50KTtcblxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFN0cmluZyhzaXplKSk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgU3RyaW5nKHNpemUpKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgYDAgMCAke3NpemV9ICR7c2l6ZX1gKTtcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzLXJpbmdcIik7XG5cbiAgLy8gQmFja2dyb3VuZCBjaXJjbGVcbiAgY29uc3QgYmdDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIFN0cmluZyhyYWRpdXMpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBcInJnYmEoMjU1LDI1NSwyNTUsMC4wOClcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBTdHJpbmcoc3Ryb2tlV2lkdGgpKTtcbiAgc3ZnLmFwcGVuZENoaWxkKGJnQ2lyY2xlKTtcblxuICAvLyBQcm9ncmVzcyBjaXJjbGVcbiAgY29uc3QgcHJvZ3Jlc3NDaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiY3hcIiwgU3RyaW5nKHNpemUgLyAyKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN5XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJyXCIsIFN0cmluZyhyYWRpdXMpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZVwiLCBjb2xvcik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS13aWR0aFwiLCBTdHJpbmcoc3Ryb2tlV2lkdGgpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hhcnJheVwiLCBTdHJpbmcoY2lyY3VtZmVyZW5jZSkpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtZGFzaG9mZnNldFwiLCBTdHJpbmcoZGFzaE9mZnNldCkpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2UtbGluZWNhcFwiLCBcInJvdW5kXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgYHJvdGF0ZSgtOTAgJHtzaXplIC8gMn0gJHtzaXplIC8gMn0pYCk7XG4gIHN2Zy5hcHBlbmRDaGlsZChwcm9ncmVzc0NpcmNsZSk7XG5cbiAgcmV0dXJuIHN2Zztcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFRlbXBsZSBDaGlwcyBDb21wb25lbnRcbi8vIEhvcml6b250YWwgc2Nyb2xsYWJsZSBjaGlwcyBmb3Igc2VsZi1jYXJlIHRhc2sgdHJhY2tpbmdcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgVGVtcGxlVGFzayB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyVGVtcGxlQ2hpcHMoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvblRlbXBsZVVwZGF0ZTogKHRhc2tJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgaWYgKCFzZXR0aW5ncy50ZW1wbGVUYXNrcyB8fCBzZXR0aW5ncy50ZW1wbGVUYXNrcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMudGVtcGxlX3RpdGxlID8/IFwiVEhFIFRFTVBMRVwiO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuXG4gIC8vIFNlY3Rpb25cbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGUtc2VjdGlvblwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBUaXRsZVxuICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDaGlwcyBjb250YWluZXJcbiAgY29uc3QgY2hpcHMgPSBzZWN0aW9uLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwc1wiIH0pO1xuICBjaGlwcy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjhweFwiO1xuXG4gIGZvciAoY29uc3QgdGFzayBvZiBzZXR0aW5ncy50ZW1wbGVUYXNrcykge1xuICAgIGNvbnN0IHN0YXR1cyA9IGdldFRhc2tTdGF0dXModGFzaywgbm93KTtcblxuICAgIGNvbnN0IGNoaXBDbHMgPSBgb2xlbi10ZW1wbGUtY2hpcCAke3N0YXR1cy5jaGlwQ2xhc3N9YDtcbiAgICBjb25zdCBjaGlwID0gY2hpcHMuY3JlYXRlRGl2KHsgY2xzOiBjaGlwQ2xzIH0pO1xuXG4gICAgY2hpcC5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcC1lbW9qaVwiLCB0ZXh0OiB0YXNrLmVtb2ppIH0pO1xuICAgIGNoaXAuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXAtdGV4dFwiLCB0ZXh0OiBgJHt0YXNrLm5hbWV9IFx1MDBCNyAke3N0YXR1cy50ZXh0fWAgfSk7XG5cbiAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvblRlbXBsZVVwZGF0ZSh0YXNrLmlkKTtcbiAgICAgIC8vIFZpc3VhbCBmZWVkYmFja1xuICAgICAgY2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcInNjYWxlKDAuOSlcIjtcbiAgICAgIGNoaXAuc3R5bGUub3BhY2l0eSA9IFwiMC42XCI7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2hpcC5zdHlsZS50cmFuc2Zvcm0gPSBcIlwiO1xuICAgICAgICBjaGlwLnN0eWxlLm9wYWNpdHkgPSBcIlwiO1xuICAgICAgfSwgMjAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgVGFza1N0YXR1cyB7XG4gIHRleHQ6IHN0cmluZztcbiAgY2hpcENsYXNzOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFRhc2tTdGF0dXModGFzazogVGVtcGxlVGFzaywgbm93OiBEYXRlKTogVGFza1N0YXR1cyB7XG4gIGlmICghdGFzay5sYXN0Q29tcGxldGVkKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJvdmVyZHVlXCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW92ZXJkdWVcIiB9O1xuICB9XG5cbiAgY29uc3QgbGFzdCA9IG5ldyBEYXRlKHRhc2subGFzdENvbXBsZXRlZCk7XG4gIGNvbnN0IG1zUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgY29uc3QgZGF5c1NpbmNlID0gTWF0aC5mbG9vcigobm93LmdldFRpbWUoKSAtIGxhc3QuZ2V0VGltZSgpKSAvIG1zUGVyRGF5KTtcbiAgY29uc3QgZGF5c1VudGlsRHVlID0gdGFzay5pbnRlcnZhbERheXMgLSBkYXlzU2luY2U7XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAwKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJvdmVyZHVlXCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW92ZXJkdWVcIiB9O1xuICB9XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAxKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogXCJkdWUgdG9kYXlcIiwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtd2FyblwiIH07XG4gIH1cblxuICBpZiAoZGF5c1VudGlsRHVlIDw9IDIpIHtcbiAgICByZXR1cm4geyB0ZXh0OiBgZHVlIGluICR7ZGF5c1VudGlsRHVlfWRgLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC13YXJuXCIgfTtcbiAgfVxuXG4gIHJldHVybiB7IHRleHQ6IGBpbiAke2RheXNVbnRpbER1ZX1kYCwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtb2tcIiB9O1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgUXVvdGUgRm9vdGVyIENvbXBvbmVudFxuLy8gUm90YXRpbmcgc3RvaWMgcXVvdGUgYXQgdGhlIGJvdHRvbSBvZiB0aGUgZGFzaGJvYXJkXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwLCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IEZBTExCQUNLX1FVT1RFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclF1b3RlRm9vdGVyKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBhcHA6IEFwcCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXIsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3QgcXVvdGUgPSBnZXRRdW90ZShhcHAsIHNldHRpbmdzLCBvblNldHRpbmdzVXBkYXRlKTtcblxuICBjb25zdCBzZWN0aW9uID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXF1b3RlXCIgfSk7XG4gIHNlY3Rpb24uc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIHNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXF1b3RlLXRleHRcIixcbiAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICB9KTtcblxuICBpZiAocXVvdGUuYXR0cmlidXRpb24pIHtcbiAgICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXF1b3RlLWF0dHJpYnV0aW9uXCIsXG4gICAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgICB9KTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgUXVvdGUge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGF0dHJpYnV0aW9uOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGdldFF1b3RlKFxuICBhcHA6IEFwcCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IFF1b3RlIHtcbiAgLy8gVHJ5IHZhdWx0IGZvbGRlciBxdW90ZXMgZmlyc3RcbiAgaWYgKHNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aCkge1xuICAgIGNvbnN0IHZhdWx0UXVvdGVzID0gbG9hZFF1b3Rlc0Zyb21WYXVsdChhcHAsIHNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aCk7XG4gICAgaWYgKHZhdWx0UXVvdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBwaWNrUXVvdGUodmF1bHRRdW90ZXMsIHNldHRpbmdzLCBvblNldHRpbmdzVXBkYXRlKTtcbiAgICB9XG4gIH1cblxuICAvLyBGYWxsYmFjayB0byBoYXJkY29kZWQgcXVvdGVzXG4gIHJldHVybiBwaWNrUXVvdGUoRkFMTEJBQ0tfUVVPVEVTLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHBpY2tRdW90ZShcbiAgcXVvdGVzOiBRdW90ZVtdLFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogUXVvdGUge1xuICBpZiAocXVvdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwiVGhlIHVuZXhhbWluZWQgbGlmZSBpcyBub3Qgd29ydGggbGl2aW5nLlwiLCBhdHRyaWJ1dGlvbjogXCJTb2NyYXRlc1wiIH07XG4gIH1cblxuICAvLyBBdm9pZCByZWNlbnRseSBzaG93biBxdW90ZXNcbiAgY29uc3QgcmVjZW50SWRzID0gc2V0dGluZ3MucmVjZW50UXVvdGVJZHMgPz8gW107XG4gIGNvbnN0IGF2YWlsYWJsZSA9IHF1b3Rlc1xuICAgIC5tYXAoKHEsIGkpID0+ICh7IHEsIGkgfSkpXG4gICAgLmZpbHRlcigoeyBpIH0pID0+ICFyZWNlbnRJZHMuaW5jbHVkZXMoaSkpO1xuXG4gIGNvbnN0IHBvb2wgPSBhdmFpbGFibGUubGVuZ3RoID4gMCA/IGF2YWlsYWJsZSA6IHF1b3Rlcy5tYXAoKHEsIGkpID0+ICh7IHEsIGkgfSkpO1xuICBjb25zdCBwaWNrID0gcG9vbFtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwb29sLmxlbmd0aCldO1xuXG4gIC8vIFRyYWNrIHJlY2VudCAoa2VlcCBsYXN0IDUpXG4gIGNvbnN0IG5ld1JlY2VudCA9IFsuLi5yZWNlbnRJZHMsIHBpY2suaV0uc2xpY2UoLU1hdGgubWluKDUsIE1hdGguZmxvb3IocXVvdGVzLmxlbmd0aCAvIDIpKSk7XG4gIG9uU2V0dGluZ3NVcGRhdGUoe1xuICAgIGxhc3RRdW90ZUluZGV4OiBwaWNrLmksXG4gICAgcmVjZW50UXVvdGVJZHM6IG5ld1JlY2VudCxcbiAgfSk7XG5cbiAgcmV0dXJuIHBpY2sucTtcbn1cblxuZnVuY3Rpb24gbG9hZFF1b3Rlc0Zyb21WYXVsdChhcHA6IEFwcCwgZm9sZGVyUGF0aDogc3RyaW5nKTogUXVvdGVbXSB7XG4gIGNvbnN0IHF1b3RlczogUXVvdGVbXSA9IFtdO1xuICBjb25zdCBhYnN0cmFjdEZpbGUgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZvbGRlclBhdGgpO1xuICBpZiAoIWFic3RyYWN0RmlsZSkgcmV0dXJuIHF1b3RlcztcblxuICBjb25zdCBmaWxlcyA9IGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKChmKSA9PlxuICAgIGYucGF0aC5zdGFydHNXaXRoKGZvbGRlclBhdGguZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyUGF0aCA6IGZvbGRlclBhdGggKyBcIi9cIilcbiAgKTtcblxuICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICBjb25zdCBjYWNoZSA9IGFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBpZiAoIWNhY2hlKSBjb250aW51ZTtcblxuICAgIC8vIE9uZSBxdW90ZSBwZXIgZmlsZSAoZGVmYXVsdCBtb2RlKVxuICAgIGNvbnN0IG5hbWUgPSBmaWxlLmJhc2VuYW1lO1xuICAgIGNvbnN0IHBhcnRzID0gc3BsaXRBdHRyaWJ1dGlvbihuYW1lKTtcbiAgICBxdW90ZXMucHVzaChwYXJ0cyk7XG4gIH1cblxuICByZXR1cm4gcXVvdGVzO1xufVxuXG5mdW5jdGlvbiBzcGxpdEF0dHJpYnV0aW9uKHRleHQ6IHN0cmluZyk6IFF1b3RlIHtcbiAgLy8gQ2hlY2sgZm9yIGVtLWRhc2ggYXR0cmlidXRpb25cbiAgY29uc3QgZGFzaEluZGV4ID0gdGV4dC5sYXN0SW5kZXhPZihcIiBcdTIwMTQgXCIpO1xuICBpZiAoZGFzaEluZGV4ID4gMCkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0ZXh0LnNsaWNlKDAsIGRhc2hJbmRleCkudHJpbSgpLFxuICAgICAgYXR0cmlidXRpb246IHRleHQuc2xpY2UoZGFzaEluZGV4ICsgMykudHJpbSgpLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBoeXBoZW5JbmRleCA9IHRleHQubGFzdEluZGV4T2YoXCIgLSBcIik7XG4gIGlmIChoeXBoZW5JbmRleCA+IHRleHQubGVuZ3RoICogMC41KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRleHQ6IHRleHQuc2xpY2UoMCwgaHlwaGVuSW5kZXgpLnRyaW0oKSxcbiAgICAgIGF0dHJpYnV0aW9uOiB0ZXh0LnNsaWNlKGh5cGhlbkluZGV4ICsgMykudHJpbSgpLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4geyB0ZXh0OiB0ZXh0LnRyaW0oKSwgYXR0cmlidXRpb246IFwiXCIgfTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERheSBUaW1lbGluZSBDb21wb25lbnRcbi8vIFZlcnRpY2FsIGNvbG9yZWQgdGltZWxpbmUgb2YgdGhlIGRheSdzIHBsYW5uZWQgYWN0aXZpdGllc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBEYXlNYXBFbnRyeSwgQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRheVRpbWVsaW5lKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBjYWxsYmFja3M6IHtcbiAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblNraXA6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhckRvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJQb3N0cG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gICAgb25DcmVhdGVFdmVudD86ICgpID0+IHZvaWQ7XG4gIH1cbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGF5bWFwX3RpdGxlID8/IFwiWU9VUiBEQVlcIjtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgY3VycmVudEhvdXIgPSBub3cuZ2V0SG91cnMoKSArIG5vdy5nZXRNaW51dGVzKCkgLyA2MDtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBUaW1lbGluZSBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZCBvbGVuLXRpbWVsaW5lLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gR2V0IGRheSBtYXAgZW50cmllc1xuICBjb25zdCBlbnRyaWVzID0gZW5naW5lLmdldERheU1hcCgpO1xuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIGNhcmQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtZW1wdHlcIixcbiAgICAgIHRleHQ6IFwiTm8gYWN0aXZpdGllcyBzY2hlZHVsZWQuIEEgcmFyZSBkYXkgb2YgcmVzdC5cIixcbiAgICB9KTtcbiAgICByZW5kZXJUaW1lbGluZUZvb3RlcihjYXJkLCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrcy5vbkNyZWF0ZUV2ZW50KTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBUaW1lbGluZSBjb250YWluZXJcbiAgY29uc3QgdGltZWxpbmUgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lXCIgfSk7XG5cbiAgZm9yIChjb25zdCBlbnRyeSBvZiBlbnRyaWVzKSB7XG4gICAgcmVuZGVyVGltZWxpbmVFbnRyeShcbiAgICAgIHRpbWVsaW5lLCBlbnRyeSwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3NcbiAgICApO1xuICB9XG5cbiAgLy8gRm9vdGVyXG4gIHJlbmRlclRpbWVsaW5lRm9vdGVyKGNhcmQsIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzLm9uQ3JlYXRlRXZlbnQpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJUaW1lbGluZUVudHJ5KFxuICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICBlbnRyeTogRGF5TWFwRW50cnksXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGN1cnJlbnRIb3VyOiBudW1iZXIsXG4gIGNhbGxiYWNrczoge1xuICAgIG9uQWNjZXB0OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uU2tpcDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyRG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhclBvc3Rwb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgfVxuKTogdm9pZCB7XG4gIGNvbnN0IGlzQ2FsZW5kYXIgPSBlbnRyeS5pc0NhbGVuZGFyVGFzayA9PT0gdHJ1ZTtcbiAgY29uc3QgY29sb3IgPSBpc0NhbGVuZGFyID8gXCIjNWU3YTlhXCIgOiAoc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbZW50cnkuY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiKTtcbiAgY29uc3QgaXNDdXJyZW50ID0gY3VycmVudEhvdXIgPj0gZW50cnkuc3RhcnRIb3VyICYmIGN1cnJlbnRIb3VyIDwgZW50cnkuZW5kSG91cjtcbiAgY29uc3QgaXNQYXN0ID0gY3VycmVudEhvdXIgPj0gZW50cnkuZW5kSG91cjtcbiAgY29uc3QgaXNEb25lID0gZW50cnkuc3RhdHVzID09PSBcImRvbmVcIjtcbiAgY29uc3QgaXNTa2lwcGVkID0gZW50cnkuc3RhdHVzID09PSBcInNraXBwZWRcIjtcblxuICAvLyBEZXRlcm1pbmUgdmlzdWFsIHN0YXRlXG4gIGxldCBzdGF0ZUNscyA9IFwib2xlbi10aW1lbGluZS1lbnRyeVwiO1xuICBpZiAoaXNDYWxlbmRhcikgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1jYWxlbmRhclwiO1xuICBpZiAoaXNEb25lKSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLWRvbmVcIjtcbiAgZWxzZSBpZiAoaXNTa2lwcGVkKSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLXNraXBwZWRcIjtcbiAgZWxzZSBpZiAoaXNDdXJyZW50KSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLWN1cnJlbnRcIjtcbiAgZWxzZSBpZiAoaXNQYXN0KSBzdGF0ZUNscyArPSBcIiBvbGVuLXRpbWVsaW5lLXBhc3RcIjtcblxuICBjb25zdCByb3cgPSBwYXJlbnQuY3JlYXRlRGl2KHsgY2xzOiBzdGF0ZUNscyB9KTtcblxuICAvLyBDYXRlZ29yeSBjb2xvciBiYXIgKGNhbGVuZGFyIHRhc2tzIGdldCBhIGRpc3RpbmN0IGRhc2hlZCBzdHlsZSlcbiAgY29uc3QgYmFyID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWJhclwiIH0pO1xuICBiYXIuc3R5bGUuYmFja2dyb3VuZCA9IGNvbG9yO1xuICBpZiAoaXNDYWxlbmRhciAmJiAhaXNEb25lKSB7XG4gICAgYmFyLmNsYXNzTGlzdC5hZGQoXCJvbGVuLXRpbWVsaW5lLWJhci1jYWxlbmRhclwiKTtcbiAgfVxuICBpZiAoaXNDdXJyZW50ICYmICFpc0RvbmUgJiYgIWlzU2tpcHBlZCkge1xuICAgIGJhci5zdHlsZS5ib3hTaGFkb3cgPSBgMCAwIDEycHggJHtjb2xvcn1gO1xuICB9XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWNvbnRlbnRcIiB9KTtcblxuICAvLyBUb3AgbGluZTogdGltZSArIGR1cmF0aW9uICsgc291cmNlIGJhZGdlIGZvciBjYWxlbmRhciB0YXNrc1xuICBjb25zdCB0aW1lTGluZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtdGltZVwiIH0pO1xuICB0aW1lTGluZS50ZXh0Q29udGVudCA9IGAke2Zvcm1hdEhvdXIoZW50cnkuc3RhcnRIb3VyKX0gXHUyMDEzICR7Zm9ybWF0SG91cihlbnRyeS5lbmRIb3VyKX0gXHUwMEI3ICR7ZW50cnkuZXN0aW1hdGVkRHVyYXRpb259bWA7XG5cbiAgaWYgKGlzQ2FsZW5kYXIgJiYgZW50cnkuY2FsZW5kYXJTb3VyY2UpIHtcbiAgICBjb25zdCBiYWRnZSA9IHRpbWVMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLXNvdXJjZS1iYWRnZVwiIH0pO1xuICAgIHN3aXRjaCAoZW50cnkuY2FsZW5kYXJTb3VyY2UpIHtcbiAgICAgIGNhc2UgXCJkYWlseS1ub3RlXCI6IGJhZGdlLnRleHRDb250ZW50ID0gXCJOb3RlXCI7IGJyZWFrO1xuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiVGFza1wiOyBicmVhaztcbiAgICAgIGNhc2UgXCJxdWljay10YXNrXCI6IGJhZGdlLnRleHRDb250ZW50ID0gXCJRdWlja1wiOyBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBBY3Rpdml0eSBsaW5lOiBlbW9qaSArIG5hbWVcbiAgY29uc3QgYWN0TGluZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYWN0aXZpdHlcIiB9KTtcbiAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1lbW9qaVwiLCB0ZXh0OiBlbnRyeS5lbW9qaSB9KTtcbiAgY29uc3QgbmFtZUVsID0gYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLW5hbWVcIixcbiAgICB0ZXh0OiBlbnRyeS5hY3Rpdml0eU5hbWUsXG4gIH0pO1xuXG4gIC8vIFN0cmlrZXRocm91Z2ggZm9yIGRvbmUvc2tpcHBlZFxuICBpZiAoaXNEb25lIHx8IGlzU2tpcHBlZCkge1xuICAgIG5hbWVFbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgbmFtZUVsLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xuICB9XG5cbiAgLy8gU3RhdHVzIGluZGljYXRvclxuICBpZiAoaXNEb25lKSB7XG4gICAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1jaGVja1wiLCB0ZXh0OiBcIlxcdTI3MTNcIiB9KTtcbiAgfSBlbHNlIGlmIChpc1NraXBwZWQpIHtcbiAgICBhY3RMaW5lLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRpbWVsaW5lLXNraXAtbWFya1wiLCB0ZXh0OiBcIlxcdTIwMTNcIiB9KTtcbiAgfVxuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGlmICghaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBjb25zdCBhY3Rpb25zID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1hY3Rpb25zXCIgfSk7XG5cbiAgICBpZiAoaXNDYWxlbmRhcikge1xuICAgICAgLy8gQ2FsZW5kYXIgdGFza3M6IERvbmUgKyBQb3N0cG9uZVxuICAgICAgY29uc3QgZG9uZUJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tYWNjZXB0XCIsXG4gICAgICAgIHRleHQ6IFwiRG9uZVwiLFxuICAgICAgfSk7XG4gICAgICBkb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25DYWxlbmRhckRvbmU/LihlbnRyeSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcG9zdHBvbmVCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLXBvc3Rwb25lXCIsXG4gICAgICAgIHRleHQ6IFwiXFx1MjNFOVwiLFxuICAgICAgICBhdHRyOiB7IHRpdGxlOiBcIlBvc3Rwb25lIHRvIHRvbW9ycm93XCIgfSxcbiAgICAgIH0pO1xuICAgICAgcG9zdHBvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vbkNhbGVuZGFyUG9zdHBvbmU/LihlbnRyeSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQWN0aXZpdHkgZW50cmllczogQmVnaW4vRG9uZSArIFNraXBcbiAgICAgIGNvbnN0IGFjY2VwdEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tYWNjZXB0XCIsXG4gICAgICAgIHRleHQ6IGlzQ3VycmVudCA/IFwiQmVnaW5cIiA6IFwiRG9uZVwiLFxuICAgICAgfSk7XG4gICAgICBhY2NlcHRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGNhbGxiYWNrcy5vbkFjY2VwdChlbnRyeS5hY3Rpdml0eUlkKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBza2lwQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1za2lwXCIsXG4gICAgICAgIHRleHQ6IFwiU2tpcFwiLFxuICAgICAgfSk7XG4gICAgICBza2lwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25Ta2lwKGVudHJ5LmFjdGl2aXR5SWQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQ3VycmVudCB0aW1lIGluZGljYXRvclxuICBpZiAoaXNDdXJyZW50ICYmICFpc0RvbmUgJiYgIWlzU2tpcHBlZCkge1xuICAgIGNvbnN0IGluZGljYXRvciA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1ub3dcIiB9KTtcbiAgICBjb25zdCBwcm9ncmVzcyA9IChjdXJyZW50SG91ciAtIGVudHJ5LnN0YXJ0SG91cikgLyAoZW50cnkuZW5kSG91ciAtIGVudHJ5LnN0YXJ0SG91cik7XG4gICAgaW5kaWNhdG9yLnN0eWxlLnRvcCA9IGAke01hdGgubWluKDEwMCwgTWF0aC5tYXgoMCwgcHJvZ3Jlc3MgKiAxMDApKX0lYDtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJUaW1lbGluZUZvb3RlcihcbiAgY2FyZDogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGN1cnJlbnRIb3VyOiBudW1iZXIsXG4gIG9uQ3JlYXRlRXZlbnQ/OiAoKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgY29uc3QgZW5kT2ZEYXkgPSBzZXR0aW5ncy5kZXZDb25maWcuZXZlbmluZ0VuZDtcbiAgY29uc3QgcmVtYWluaW5nID0gTWF0aC5tYXgoMCwgZW5kT2ZEYXkgLSBjdXJyZW50SG91cik7XG4gIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihyZW1haW5pbmcpO1xuICBjb25zdCBtaW5zID0gTWF0aC5yb3VuZCgocmVtYWluaW5nIC0gaG91cnMpICogNjApO1xuXG4gIGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGl2aWRlclwiIH0pO1xuXG4gIGNvbnN0IGZvb3RlciA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtZm9vdGVyXCIgfSk7XG4gIGZvb3Rlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtZm9vdGVyLXRleHRcIixcbiAgICB0ZXh0OiBgRW5kIG9mIGRheTogJHtob3Vyc31oICR7bWluc31tIHJlbWFpbmluZ2AsXG4gIH0pO1xuXG4gIGlmIChvbkNyZWF0ZUV2ZW50KSB7XG4gICAgY29uc3QgYnRuID0gZm9vdGVyLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1jcmVhdGVcIixcbiAgICAgIHRleHQ6IFwiKyBDcmVhdGUgZXZlbnRcIixcbiAgICB9KTtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IG9uQ3JlYXRlRXZlbnQoKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0SG91cihoOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoaCk7XG4gIGNvbnN0IG1pbnMgPSBNYXRoLnJvdW5kKChoIC0gaG91cnMpICogNjApO1xuICBjb25zdCBwZXJpb2QgPSBob3VycyA+PSAxMiA/IFwicG1cIiA6IFwiYW1cIjtcbiAgY29uc3QgZGlzcGxheUhvdXIgPSBob3VycyA+IDEyID8gaG91cnMgLSAxMiA6IGhvdXJzID09PSAwID8gMTIgOiBob3VycztcbiAgaWYgKG1pbnMgPT09IDApIHJldHVybiBgJHtkaXNwbGF5SG91cn0ke3BlcmlvZH1gO1xuICByZXR1cm4gYCR7ZGlzcGxheUhvdXJ9OiR7U3RyaW5nKG1pbnMpLnBhZFN0YXJ0KDIsIFwiMFwiKX0ke3BlcmlvZH1gO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgU2Vzc2lvbiBWaWV3XG4vLyBBY3RpdmUgc2Vzc2lvbiBzY3JlZW4gd2l0aCB0aW1lciwgc2tpbGxzLCBmaW5pc2ggZmxvd1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEl0ZW1WaWV3LCBXb3Jrc3BhY2VMZWFmLCBURmlsZSwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2ZVNlc3Npb24sIFNlc3Npb25UeXBlLCBTZXNzaW9uUmVzdWx0IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBWSUVXX1RZUEVfU0VTU0lPTiwgRkFMTEJBQ0tfUVVPVEVTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgU2Vzc2lvblZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSB0aW1lckludGVydmFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGFydFRpbWU6IERhdGU7XG4gIHByaXZhdGUgZWxhcHNlZCA9IDA7IC8vIHNlY29uZHNcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfU0VTU0lPTjtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVNlc3Npb247XG4gICAgcmV0dXJuIHNlc3Npb24gPyBgU2Vzc2lvbjogJHtzZXNzaW9uLmFjdGl2aXR5TmFtZX1gIDogXCJTZXNzaW9uXCI7XG4gIH1cblxuICBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwidGltZXJcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBzZXNzaW9uID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZlU2Vzc2lvbjtcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHRoaXMuY29udGVudEVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgdGV4dDogXCJObyBhY3RpdmUgc2Vzc2lvbi5cIiB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKHNlc3Npb24uc3RhcnRUaW1lKTtcbiAgICB0aGlzLnJlbmRlcihzZXNzaW9uKTtcbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgfVxuXG4gIGFzeW5jIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICB0aGlzLmNvbnRlbnRFbC5lbXB0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydFRpbWVyKCk6IHZvaWQge1xuICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmVsYXBzZWQgPSBNYXRoLmZsb29yKChEYXRlLm5vdygpIC0gdGhpcy5zdGFydFRpbWUuZ2V0VGltZSgpKSAvIDEwMDApO1xuICAgICAgY29uc3QgdGltZXJFbCA9IHRoaXMuY29udGVudEVsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1zZXNzaW9uLXRpbWVyXCIpO1xuICAgICAgaWYgKHRpbWVyRWwpIHRpbWVyRWwudGV4dENvbnRlbnQgPSB0aGlzLmZvcm1hdFRpbWUodGhpcy5lbGFwc2VkKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVySW50ZXJ2YWwgIT09IG51bGwpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lckludGVydmFsKTtcbiAgICAgIHRoaXMudGltZXJJbnRlcnZhbCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoc2Vzc2lvbjogQWN0aXZlU2Vzc2lvbik6IHZvaWQge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgY29uc3Qgcm9vdCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kYXNoYm9hcmQgb2xlbi1zZXNzaW9uLXJvb3RcIiB9KTtcblxuICAgIC8vIFRvcCBiYXJcbiAgICBjb25zdCB0b3BCYXIgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tdG9wYmFyXCIgfSk7XG5cbiAgICBjb25zdCBhY3RJbmZvID0gdG9wQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tYWN0LWluZm9cIiB9KTtcbiAgICBhY3RJbmZvLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXNlc3Npb24tZW1vamlcIiwgdGV4dDogc2Vzc2lvbi5lbW9qaSB9KTtcbiAgICBhY3RJbmZvLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXNlc3Npb24tYWN0LW5hbWVcIiwgdGV4dDogc2Vzc2lvbi5hY3Rpdml0eU5hbWUgfSk7XG5cbiAgICBjb25zdCB0aW1lckVsID0gdG9wQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXNlc3Npb24tdGltZXJcIixcbiAgICAgIHRleHQ6IFwiMDA6MDBcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbmlzaEJ0biA9IHRvcEJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXNlc3Npb24tZmluaXNoLWJ0blwiLFxuICAgICAgdGV4dDogXCJGSU5JU0hcIixcbiAgICB9KTtcbiAgICBmaW5pc2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd0ZpbmlzaE1vZGFsKHNlc3Npb24pKTtcblxuICAgIC8vIENhdGVnb3J5IGFjY2VudCBsaW5lXG4gICAgY29uc3QgYWNjZW50Q29sb3IgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1tzZXNzaW9uLmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcbiAgICBjb25zdCBhY2NlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tYWNjZW50XCIgfSk7XG4gICAgYWNjZW50LnN0eWxlLmJhY2tncm91bmQgPSBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAke2FjY2VudENvbG9yfSwgdHJhbnNwYXJlbnQpYDtcblxuICAgIC8vIE1haW4gY29udGVudCBhcmVhXG4gICAgY29uc3QgY29udGVudCA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1jb250ZW50XCIgfSk7XG5cbiAgICAvLyBTa2lsbHMgc2VjdGlvblxuICAgIGNvbnN0IHNraWxsc1NlY3Rpb24gPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tc2tpbGxzLXNlY3Rpb25cIiB9KTtcbiAgICBza2lsbHNTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBcIlNFU1NJT04gU0tJTExTXCIgfSk7XG5cbiAgICBjb25zdCBza2lsbHNDb250YWluZXIgPSBza2lsbHNTZWN0aW9uLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tc2tpbGxzXCIgfSk7XG5cbiAgICBpZiAoc2Vzc2lvbi5za2lsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBza2lsbHNDb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi1zZXNzaW9uLW5vLXNraWxsc1wiLFxuICAgICAgICB0ZXh0OiBcIk5vIHNraWxscyB0YWdnZWQgeWV0XCIsXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChjb25zdCBza2lsbCBvZiBzZXNzaW9uLnNraWxscykge1xuICAgICAgICBjb25zdCBjaGlwID0gc2tpbGxzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tc2tpbGwtY2hpcFwiIH0pO1xuICAgICAgICBjaGlwLnRleHRDb250ZW50ID0gc2tpbGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHNraWxscyBidXR0b25cbiAgICBjb25zdCBhZGRTa2lsbEJ0biA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXNlc3Npb24tYWRkLXNraWxsXCIsXG4gICAgICB0ZXh0OiBcIisgQUREIFNLSUxMXCIsXG4gICAgfSk7XG4gICAgYWRkU2tpbGxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuc2hvd1NraWxsUGlja2VyKHNlc3Npb24pKTtcblxuICAgIC8vIEZvY3VzIHpvbmUgXHUyMDE0IG1vdGl2YXRpb25hbCBhcmVhXG4gICAgY29uc3QgZm9jdXNab25lID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZXNzaW9uLWZvY3VzXCIgfSk7XG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICAgIH0pO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG5cbiAgICAvLyBCb3R0b20gYmFyXG4gICAgY29uc3QgYm90dG9tQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZXNzaW9uLWJvdHRvbWJhclwiIH0pO1xuICAgIGNvbnN0IGNhdExhYmVsID0gc2Vzc2lvbi5jYXRlZ29yeS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHNlc3Npb24uY2F0ZWdvcnkuc2xpY2UoMSk7XG4gICAgYm90dG9tQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXNlc3Npb24tY2F0ZWdvcnktbGFiZWxcIixcbiAgICAgIHRleHQ6IGNhdExhYmVsLFxuICAgIH0pO1xuICAgIGJvdHRvbUJhci5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBhY2NlbnRDb2xvcjtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1NraWxsUGlja2VyKHNlc3Npb246IEFjdGl2ZVNlc3Npb24pOiB2b2lkIHtcbiAgICAvLyBQcm9tcHQgZm9yIHNraWxsIG5hbWUgdmlhIGEgc2ltcGxlIGlucHV0XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiQUREIFNLSUxMXCIgfSk7XG5cbiAgICBjb25zdCBpbnB1dFdyYXAgPSBzaGVldC5jcmVhdGVEaXYoeyBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMjBweCAwO1wiIH0gfSk7XG4gICAgY29uc3QgaW5wdXQgPSBpbnB1dFdyYXAuY3JlYXRlRWwoXCJpbnB1dFwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1zZXNzaW9uLXNraWxsLWlucHV0XCIsXG4gICAgICBhdHRyOiB7IHR5cGU6IFwidGV4dFwiLCBwbGFjZWhvbGRlcjogXCJTa2lsbCBuYW1lLi4uXCIgfSxcbiAgICB9KTtcblxuICAgIC8vIElmIHNraWxsIGZvbGRlciBleGlzdHMsIGxvYWQgZXhpc3Rpbmcgc2tpbGxzXG4gICAgaWYgKHNlc3Npb24uc2tpbGxGb2xkZXIpIHtcbiAgICAgIGNvbnN0IHNraWxscyA9IHRoaXMubG9hZFNraWxsc0Zyb21Gb2xkZXIoc2Vzc2lvbi5za2lsbEZvbGRlcik7XG4gICAgICBpZiAoc2tpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zZXNzaW9uLXNraWxsc1wiLCBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbi1ib3R0b206IDE2cHg7XCIgfSB9KTtcbiAgICAgICAgZm9yIChjb25zdCBza2lsbCBvZiBza2lsbHMpIHtcbiAgICAgICAgICBjb25zdCBjaGlwID0gZXhpc3RpbmcuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1za2lsbC1jaGlwIG9sZW4tY2xpY2thYmxlXCIgfSk7XG4gICAgICAgICAgY2hpcC50ZXh0Q29udGVudCA9IHNraWxsO1xuICAgICAgICAgIGNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGFkZFNraWxsKHNraWxsKTtcbiAgICAgICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvbnMgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgY29uc3QgYWRkQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgICAgdGV4dDogXCJBRERcIixcbiAgICB9KTtcbiAgICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IGlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgYWRkU2tpbGwodmFsKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2FuY2VsQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tc2Vjb25kYXJ5XCIsXG4gICAgICB0ZXh0OiBcIkNBTkNFTFwiLFxuICAgIH0pO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY2xvc2VTaGVldCgpKTtcblxuICAgIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoZS50YXJnZXQgPT09IG92ZXJsYXkpIGNsb3NlU2hlZXQoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGFkZFNraWxsID0gKG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFzZXNzaW9uLnNraWxscy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICBzZXNzaW9uLnNraWxscy5wdXNoKG5hbWUpO1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVTZXNzaW9uID0gc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKHNlc3Npb24pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjbG9zZVNoZWV0ID0gKCkgPT4ge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gb3ZlcmxheS5yZW1vdmUoKSwgMzUwKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICAgIGlucHV0LmZvY3VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRTa2lsbHNGcm9tRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyUGF0aC5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXJQYXRoIDogZm9sZGVyUGF0aCArIFwiL1wiO1xuICAgIHJldHVybiBmaWxlc1xuICAgICAgLmZpbHRlcigoZikgPT4gZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpXG4gICAgICAubWFwKChmKSA9PiBmLmJhc2VuYW1lKVxuICAgICAgLnNvcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd0ZpbmlzaE1vZGFsKHNlc3Npb246IEFjdGl2ZVNlc3Npb24pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoKGVuZFRpbWUuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUuZ2V0VGltZSgpKSAvIDYwMDAwKTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICAgIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldFwiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiSE9XIERJRCBJVCBGRUVMP1wiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJvZHktaXRhbGljXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMTJweCAwIDIwcHg7XCIgfSxcbiAgICAgIHRleHQ6IGAke3Nlc3Npb24uZW1vaml9ICR7c2Vzc2lvbi5hY3Rpdml0eU5hbWV9IFx1MDBCNyAke2R1cmF0aW9uTWludXRlc30gbWludXRlc2AsXG4gICAgfSk7XG5cbiAgICAvLyBDb21wbGV0aW9uIHN0YXRlIGJ1dHRvbnNcbiAgICBjb25zdCBzdGF0ZXMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZXNzaW9uQ29tcGxldGlvblN0YXRlcy5maWx0ZXIoKHMpID0+IHMuZW5hYmxlZCk7XG4gICAgY29uc3Qgc3RhdGVzR3JpZCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tc3RhdGVzLWdyaWRcIiB9KTtcblxuICAgIGZvciAoY29uc3Qgc3RhdGUgb2Ygc3RhdGVzKSB7XG4gICAgICBjb25zdCBidG4gPSBzdGF0ZXNHcmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlc3Npb24tc3RhdGUtYnRuXCIgfSk7XG4gICAgICBidG4uc3R5bGUuYm9yZGVyQ29sb3IgPSBzdGF0ZS5jb2xvcjtcblxuICAgICAgYnRuLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc2Vzc2lvbi1zdGF0ZS1pY29uXCIsIHRleHQ6IHN0YXRlLmljb24gfSk7XG4gICAgICBidG4uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1zZXNzaW9uLXN0YXRlLW5hbWVcIiwgdGV4dDogc3RhdGUubmFtZSB9KTtcblxuICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdDogU2Vzc2lvblJlc3VsdCA9IHtcbiAgICAgICAgICBhY3Rpdml0eUlkOiBzZXNzaW9uLmFjdGl2aXR5SWQsXG4gICAgICAgICAgYWN0aXZpdHlOYW1lOiBzZXNzaW9uLmFjdGl2aXR5TmFtZSxcbiAgICAgICAgICBjYXRlZ29yeTogc2Vzc2lvbi5jYXRlZ29yeSxcbiAgICAgICAgICB0eXBlOiBzdGF0ZS5pZCxcbiAgICAgICAgICBzdGFydFRpbWU6IHNlc3Npb24uc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWU6IGVuZFRpbWUudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBkdXJhdGlvbk1pbnV0ZXMsXG4gICAgICAgICAgc2tpbGxzOiBzZXNzaW9uLnNraWxscyxcbiAgICAgICAgfTtcblxuICAgICAgICBhd2FpdCB0aGlzLmZpbmlzaFNlc3Npb24ocmVzdWx0LCBzZXNzaW9uKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgICAvLyBEb24ndCBjbG9zZSBvbiBvdmVybGF5IHRhcCBcdTIwMTQgdXNlciBtdXN0IGNob29zZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VTaGVldCA9ICgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmaW5pc2hTZXNzaW9uKHJlc3VsdDogU2Vzc2lvblJlc3VsdCwgc2Vzc2lvbjogQWN0aXZlU2Vzc2lvbik6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIDEuIENyZWF0ZSBzZXNzaW9uIG1hcmtkb3duIGZpbGVcbiAgICBpZiAoc2Vzc2lvbi5zZXNzaW9uRm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZVNlc3Npb25GaWxlKHJlc3VsdCwgc2Vzc2lvbik7XG4gICAgfVxuXG4gICAgLy8gMi4gVXBkYXRlIHRoZSBhY3Rpdml0eSdzIGRhaWx5IG5vdGUgZnJvbnRtYXR0ZXJcbiAgICBhd2FpdCB0aGlzLm1hcmtBY3Rpdml0eURvbmUoc2Vzc2lvbiwgcmVzdWx0KTtcblxuICAgIC8vIDMuIEFwcGx5IFhQXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zZXNzaW9uQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSByZXN1bHQudHlwZSk7XG4gICAgaWYgKHN0YXRlICYmIHN0YXRlLnhwTXVsdGlwbGllciA+IDApIHtcbiAgICAgIGNvbnN0IHhwR2FpbiA9IE1hdGgucm91bmQodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbiAqIHN0YXRlLnhwTXVsdGlwbGllcik7XG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYXRlZ29yeVhQW3Nlc3Npb24uY2F0ZWdvcnldICs9IHhwR2FpbjtcbiAgICB9XG5cbiAgICAvLyA0LiBBcHBseSBib3NzIGRhbWFnZSAodW5sZXNzIHNraXBwZWQpXG4gICAgaWYgKHJlc3VsdC50eXBlICE9PSBcInNraXBwZWRcIikge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IHNlc3Npb24uYWN0aXZpdHlJZCk7XG4gICAgICBpZiAoYWN0aXZpdHkpIHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgICAgIDAsXG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAtIGFjdGl2aXR5LmRhbWFnZVBlckNvbXBsZXRpb25cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyA1LiBDbGVhciBhY3RpdmUgc2Vzc2lvblxuICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVNlc3Npb24gPSBudWxsO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgLy8gNi4gU2hvdyBub3RpY2VcbiAgICBjb25zdCBzdGF0ZUxhYmVsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gcmVzdWx0LnR5cGUpPy5uYW1lID8/IHJlc3VsdC50eXBlO1xuICAgIG5ldyBOb3RpY2UoYCR7c2Vzc2lvbi5lbW9qaX0gJHtzZXNzaW9uLmFjdGl2aXR5TmFtZX0gXHUyMDE0ICR7c3RhdGVMYWJlbH0gXHUwMEI3ICR7cmVzdWx0LmR1cmF0aW9uTWludXRlc31tYCk7XG5cbiAgICAvLyA3LiBTd2l0Y2ggYmFjayB0byBkYXNoYm9hcmRcbiAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZURhc2hib2FyZFZpZXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlU2Vzc2lvbkZpbGUocmVzdWx0OiBTZXNzaW9uUmVzdWx0LCBzZXNzaW9uOiBBY3RpdmVTZXNzaW9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZm9sZGVyID0gc2Vzc2lvbi5zZXNzaW9uRm9sZGVyITtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gc2Vzc2lvbi5hY3Rpdml0eUlkKTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IGFjdGl2aXR5Py5wcm9wZXJ0eSA/PyBzZXNzaW9uLmFjdGl2aXR5TmFtZTtcblxuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZShyZXN1bHQuZW5kVGltZSk7XG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUocmVzdWx0LnN0YXJ0VGltZSk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGVuZFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgLy8gTWF0Y2ggZXhpc3RpbmcgbmFtaW5nOiBcIlNlc3Npb24gWVlZWS1NTS1ERCBISE1NXCJcbiAgICBjb25zdCB0aW1lU3RyID0gYCR7U3RyaW5nKGVuZFRpbWUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpfSR7U3RyaW5nKGVuZFRpbWUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGBTZXNzaW9uICR7ZGF0ZVN0cn0gJHt0aW1lU3RyfWA7XG4gICAgY29uc3QgZmlsZVBhdGggPSBgJHtmb2xkZXJ9LyR7ZmlsZU5hbWV9Lm1kYDtcblxuICAgIC8vIEJ1aWxkIHRpbWV6b25lLWF3YXJlIHRpbWVzdGFtcCAobWF0Y2hlcyBleGlzdGluZyBzZXNzaW9uIGZvcm1hdClcbiAgICBjb25zdCB0ek9mZnNldCA9IC1zdGFydFRpbWUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBjb25zdCB0ekhvdXJzID0gU3RyaW5nKE1hdGguZmxvb3IoTWF0aC5hYnModHpPZmZzZXQpIC8gNjApKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgY29uc3QgdHpNaW5zID0gU3RyaW5nKE1hdGguYWJzKHR6T2Zmc2V0KSAlIDYwKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgY29uc3QgdHpTaWduID0gdHpPZmZzZXQgPj0gMCA/IFwiK1wiIDogXCItXCI7XG4gICAgY29uc3QgdGltZXN0YW1wID0gc3RhcnRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgLTEpICsgdHpTaWduICsgdHpIb3VycyArIFwiOlwiICsgdHpNaW5zO1xuXG4gICAgY29uc3QgZW5kVGltZXN0YW1wID0gZW5kVGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKSArIHR6U2lnbiArIHR6SG91cnMgKyBcIjpcIiArIHR6TWlucztcblxuICAgIC8vIFBpY2sgYSBxdW90ZVxuICAgIGNvbnN0IHF1b3RlID0gRkFMTEJBQ0tfUVVPVEVTW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIEZBTExCQUNLX1FVT1RFUy5sZW5ndGgpXTtcblxuICAgIC8vIENhcGl0YWxpemUgY29tcGxldGlvbiB0eXBlIHRvIG1hdGNoIGV4aXN0aW5nIGZvcm1hdCAoRGlzY2lwbGluZS9GbG93L1NraXBwZWQpXG4gICAgY29uc3QgdHlwZU5hbWUgPSByZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpO1xuICAgIGNvbnN0IGR1cmF0aW9uU3RyID0gYCR7TWF0aC5mbG9vcihyZXN1bHQuZHVyYXRpb25NaW51dGVzIC8gNjApfWggJHtyZXN1bHQuZHVyYXRpb25NaW51dGVzICUgNjB9bWA7XG5cbiAgICAvLyBCdWlsZCBmcm9udG1hdHRlciBtYXRjaGluZyBleGlzdGluZyBzZXNzaW9uIGZpbGUgZm9ybWF0OlxuICAgIC8vIHtQcm9wZXJ0eX06IHRydWUsIHtQcm9wZXJ0eX0tVHlwZTogXCJEaXNjaXBsaW5lXCIsIFRpbWVzdGFtcCwgc2tpbGxzLCBlbmRUaW1lLCBkdXJhdGlvblxuICAgIGNvbnN0IGZtTGluZXMgPSBbXG4gICAgICBcIi0tLVwiLFxuICAgICAgXCJlZGl0b3Itd2lkdGg6IDEwMFwiLFxuICAgICAgYCR7cHJvcGVydHl9OiB0cnVlYCxcbiAgICAgIGAke3Byb3BlcnR5fS1UeXBlOiBcIiR7dHlwZU5hbWV9XCJgLFxuICAgICAgYFRpbWVzdGFtcDogXCIke3RpbWVzdGFtcH1cImAsXG4gICAgICBgZW5kVGltZTogXCIke2VuZFRpbWVzdGFtcH1cImAsXG4gICAgICBgZHVyYXRpb246IFwiJHtkdXJhdGlvblN0cn1cImAsXG4gICAgICBgY2F0ZWdvcnk6IFwiJHtzZXNzaW9uLmNhdGVnb3J5fVwiYCxcbiAgICAgIHJlc3VsdC5za2lsbHMubGVuZ3RoID4gMFxuICAgICAgICA/IGBza2lsbHM6IFske3Jlc3VsdC5za2lsbHMubWFwKChzKSA9PiBgXCIke3N9XCJgKS5qb2luKFwiLCBcIil9XWBcbiAgICAgICAgOiBcInNraWxsczogW11cIixcbiAgICAgIFwiY3NzY2xhc3NlczpcIixcbiAgICAgIFwiICAtIGhpZGUtcHJvcGVydGllc1wiLFxuICAgICAgXCItLS1cIixcbiAgICBdO1xuXG4gICAgY29uc3QgYm9keSA9IFtcbiAgICAgIFwiXCIsXG4gICAgICBgIyAke3Nlc3Npb24uZW1vaml9ICR7c2Vzc2lvbi5hY3Rpdml0eU5hbWV9IFNlc3Npb25gLFxuICAgICAgXCJcIixcbiAgICAgIGA+IFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgICAgIGA+IFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgICBcIlwiLFxuICAgICAgXCIjIyBOb3Rlc1wiLFxuICAgICAgXCJcIixcbiAgICAgIFwiXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbLi4uZm1MaW5lcywgLi4uYm9keV0uam9pbihcIlxcblwiKTtcblxuICAgIC8vIEVuc3VyZSBmb2xkZXIgZXhpc3RzXG4gICAgY29uc3QgYWJzdHJhY3RGb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyKTtcbiAgICBpZiAoIWFic3RyYWN0Rm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZHVwbGljYXRlIGZpbGVuYW1lc1xuICAgIGxldCBmaW5hbFBhdGggPSBmaWxlUGF0aDtcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aCk7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBsZXQgY291bnRlciA9IDI7XG4gICAgICB3aGlsZSAodGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0gKCR7Y291bnRlcn0pLm1kYCkpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfVxuICAgICAgZmluYWxQYXRoID0gYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaW5hbFBhdGgsIGNvbnRlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYXJrQWN0aXZpdHlEb25lKHNlc3Npb246IEFjdGl2ZVNlc3Npb24sIHJlc3VsdD86IFNlc3Npb25SZXN1bHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBGaW5kIHRvZGF5J3Mgbm90ZSBpbiB0aGUgYWN0aXZpdHkgZm9sZGVyIGFuZCBzZXQgdGhlIHByb3BlcnR5IHRvIHRydWVcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gc2Vzc2lvbi5hY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm47XG5cbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF0ZVN0ciA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICBjb25zdCBmb2xkZXIgPSBhY3Rpdml0eS5mb2xkZXI7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgIC8vIExvb2sgZm9yIGEgZmlsZSBtYXRjaGluZyB0b2RheSdzIGRhdGVcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICBjb25zdCB0b2RheUZpbGUgPSBmaWxlcy5maW5kKFxuICAgICAgKGYpID0+IChmLnBhdGggPT09IGZvbGRlciB8fCBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSkgJiYgZi5iYXNlbmFtZSA9PT0gZGF0ZVN0clxuICAgICk7XG5cbiAgICBpZiAodG9kYXlGaWxlKSB7XG4gICAgICAvLyBVcGRhdGUgZnJvbnRtYXR0ZXIgXHUyMDE0IHNldCBwcm9wZXJ0eSBhbmQgY29tcGxldGlvbiB0eXBlXG4gICAgICBhd2FpdCB0aGlzLmFwcC5maWxlTWFuYWdlci5wcm9jZXNzRnJvbnRNYXR0ZXIodG9kYXlGaWxlLCAoZnJvbnRtYXR0ZXIpID0+IHtcbiAgICAgICAgZnJvbnRtYXR0ZXJbYWN0aXZpdHkucHJvcGVydHldID0gdHJ1ZTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gcmVzdWx0LnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQudHlwZS5zbGljZSgxKTtcbiAgICAgICAgICBmcm9udG1hdHRlcltgJHthY3Rpdml0eS5wcm9wZXJ0eX0tVHlwZWBdID0gdHlwZU5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDcmVhdGUgdGhlIGRhaWx5IG5vdGUgd2l0aCB0aGUgcHJvcGVydHkgc2V0XG4gICAgICBjb25zdCBmaWxlUGF0aCA9IGAke25vcm1hbGl6ZWRGb2xkZXJ9JHtkYXRlU3RyfS5tZGA7XG4gICAgICBjb25zdCB0eXBlTGluZSA9IHJlc3VsdFxuICAgICAgICA/IGBcXG4ke2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlOiBcIiR7cmVzdWx0LnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQudHlwZS5zbGljZSgxKX1cImBcbiAgICAgICAgOiBcIlwiO1xuICAgICAgY29uc3QgY29udGVudCA9IGAtLS1cXG4ke2FjdGl2aXR5LnByb3BlcnR5fTogdHJ1ZSR7dHlwZUxpbmV9XFxuLS0tXFxuYDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaWxlUGF0aCwgY29udGVudCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgLy8gRmlsZSBtaWdodCBhbHJlYWR5IGV4aXN0IHdpdGggYSBkaWZmZXJlbnQgbmFtZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0VGltZShzZWNvbmRzOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGNvbnN0IGggPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgICBjb25zdCBtID0gTWF0aC5mbG9vcigoc2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgIGNvbnN0IHMgPSBzZWNvbmRzICUgNjA7XG4gICAgaWYgKGggPiAwKSB7XG4gICAgICByZXR1cm4gYCR7aH06JHtTdHJpbmcobSkucGFkU3RhcnQoMiwgXCIwXCIpfToke1N0cmluZyhzKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICB9XG4gICAgcmV0dXJuIGAke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7U3RyaW5nKHMpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBFbWJlZGRlZCBNYXJrZG93biBWaWV3XG4vLyBSZW5kZXJzIHVzZXIncyBjdXN0b20gLm1kIGZpbGVzIChodWIgdGVtcGxhdGVzLCBzZXNzaW9uIHRlbXBsYXRlcylcbi8vIGluc2lkZSB0aGUgT2xlbiBzaGVsbCB3aXRoIG5hdmlnYXRpb24gY2hyb21lXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBNYXJrZG93blJlbmRlcmVyLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcblxuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9FTUJFRERFRCA9IFwib2xlbi1lbWJlZGRlZC12aWV3XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW1iZWRkZWRWaWV3U3RhdGUge1xuICBmaWxlUGF0aDogc3RyaW5nO1xuICBhY3Rpdml0eUlkPzogc3RyaW5nO1xuICBhY3Rpdml0eU5hbWU/OiBzdHJpbmc7XG4gIGFjdGl2aXR5RW1vamk/OiBzdHJpbmc7XG4gIG1vZGU6IFwiaHViXCIgfCBcIndvcmtzcGFjZVwiO1xufVxuXG5leHBvcnQgY2xhc3MgRW1iZWRkZWRNZFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSBzdGF0ZTogRW1iZWRkZWRWaWV3U3RhdGUgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGdldFZpZXdUeXBlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFZJRVdfVFlQRV9FTUJFRERFRDtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuc3RhdGU/LmFjdGl2aXR5TmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGUubW9kZSA9PT0gXCJodWJcIlxuICAgICAgICA/IGAke3RoaXMuc3RhdGUuYWN0aXZpdHlOYW1lfSBIdWJgXG4gICAgICAgIDogYCR7dGhpcy5zdGF0ZS5hY3Rpdml0eU5hbWV9IFNlc3Npb25gO1xuICAgIH1cbiAgICByZXR1cm4gXCJPbGVuXCI7XG4gIH1cblxuICBnZXRJY29uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGU/Lm1vZGUgPT09IFwid29ya3NwYWNlXCIgPyBcInRpbWVyXCIgOiBcImxheW91dC1kYXNoYm9hcmRcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBTdGF0ZSBpcyBzZXQgZXh0ZXJuYWxseSBiZWZvcmUgdGhlIHZpZXcgb3BlbnMgdmlhIHNldEVtYmVkZGVkU3RhdGUoKVxuICAgIGlmICh0aGlzLnN0YXRlKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIG9uQ2xvc2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5jb250ZW50RWwuZW1wdHkoKTtcbiAgfVxuXG4gIHNldEVtYmVkZGVkU3RhdGUoc3RhdGU6IEVtYmVkZGVkVmlld1N0YXRlKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgaWYgKCF0aGlzLnN0YXRlKSB7XG4gICAgICBjb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBcIk5vIGZpbGUgc3BlY2lmaWVkLlwiIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJvb3QgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGFzaGJvYXJkIG9sZW4tZW1iZWRkZWQtcm9vdFwiIH0pO1xuXG4gICAgLy8gTmF2aWdhdGlvbiBjaHJvbWUgXHUyMDE0IHN0aWNreSB0b3AgYmFyXG4gICAgY29uc3QgbmF2QmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1lbWJlZGRlZC1uYXZcIiB9KTtcblxuICAgIGNvbnN0IGJhY2tCdG4gPSBuYXZCYXIuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tZW1iZWRkZWQtYmFja1wiLFxuICAgICAgdGV4dDogXCJcXHUyMTkwIEJhY2tcIixcbiAgICB9KTtcbiAgICBiYWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZURhc2hib2FyZFZpZXcoKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2aXR5RW1vamkgfHwgdGhpcy5zdGF0ZS5hY3Rpdml0eU5hbWUpIHtcbiAgICAgIGNvbnN0IHRpdGxlRWwgPSBuYXZCYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZW1iZWRkZWQtdGl0bGVcIiB9KTtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2aXR5RW1vamkpIHtcbiAgICAgICAgdGl0bGVFbC5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiB0aGlzLnN0YXRlLmFjdGl2aXR5RW1vamkgKyBcIiBcIiB9KTtcbiAgICAgIH1cbiAgICAgIHRpdGxlRWwuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgICAgdGV4dDogdGhpcy5zdGF0ZS5hY3Rpdml0eU5hbWUgPz8gXCJBY3Rpdml0eVwiLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgbW9kZUxhYmVsID0gbmF2QmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1lbWJlZGRlZC1tb2RlXCIsXG4gICAgICB0ZXh0OiB0aGlzLnN0YXRlLm1vZGUgPT09IFwiaHViXCIgPyBcIkhVQlwiIDogXCJTRVNTSU9OXCIsXG4gICAgfSk7XG5cbiAgICAvLyBDb250ZW50IGFyZWEgXHUyMDE0IHJlbmRlciB0aGUgLm1kIGZpbGVcbiAgICBjb25zdCBjb250ZW50QXJlYSA9IHJvb3QuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZW1iZWRkZWQtY29udGVudFwiIH0pO1xuXG4gICAgLy8gRmluZCBhbmQgcmVuZGVyIHRoZSBmaWxlXG4gICAgY29uc3QgZmlsZVBhdGggPSB0aGlzLnN0YXRlLmZpbGVQYXRoLmVuZHNXaXRoKFwiLm1kXCIpXG4gICAgICA/IHRoaXMuc3RhdGUuZmlsZVBhdGhcbiAgICAgIDogdGhpcy5zdGF0ZS5maWxlUGF0aCArIFwiLm1kXCI7XG5cbiAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGZpbGVQYXRoKTtcblxuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHtcbiAgICAgIGNvbnRlbnRBcmVhLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tZW1iZWRkZWQtZXJyb3JcIixcbiAgICAgICAgdGV4dDogYEZpbGUgbm90IGZvdW5kOiAke2ZpbGVQYXRofWAsXG4gICAgICB9KTtcbiAgICAgIGNvbnRlbnRBcmVhLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tZW1iZWRkZWQtZXJyb3ItaGludFwiLFxuICAgICAgICB0ZXh0OiBcIkNoZWNrIHRoZSBmaWxlIHBhdGggaW4gYWN0aXZpdHkgc2V0dGluZ3MsIG9yIHN3aXRjaCB0byBCdWlsdC1pbiBtb2RlLlwiLFxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgICAgYXdhaXQgTWFya2Rvd25SZW5kZXJlci5yZW5kZXIoXG4gICAgICAgIHRoaXMuYXBwLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBjb250ZW50QXJlYSxcbiAgICAgICAgZmlsZS5wYXRoLFxuICAgICAgICB0aGlzXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihcIk9sZW46IEZhaWxlZCB0byByZW5kZXIgZW1iZWRkZWQgLm1kOlwiLCBlcnIpO1xuICAgICAgY29udGVudEFyZWEuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi1lbWJlZGRlZC1lcnJvclwiLFxuICAgICAgICB0ZXh0OiBcIkZhaWxlZCB0byByZW5kZXIgZmlsZS4gSXQgbWF5IGNvbnRhaW4gdW5zdXBwb3J0ZWQgY29udGVudC5cIixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgU2V0dGluZ3MgVGFiXG4vLyBDb2xsYXBzaWJsZSBzZWN0aW9ucyBmb3IgYWxsIHBsdWdpbiBjb25maWd1cmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwLCBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBUZXh0Q29tcG9uZW50LCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZpdHlDb25maWcsIENhdGVnb3J5LCBUZW1wbGVUYXNrIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBERUZBVUxUX0FDVElWSVRJRVMsIERFRkFVTFRfREVWX0NPTkZJRyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIE9sZW5TZXR0aW5nVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcblxuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgcGx1Z2luOiBPbGVuUGx1Z2luKSB7XG4gICAgc3VwZXIoYXBwLCBwbHVnaW4pO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICB9XG5cbiAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICBjb25zdCB7IGNvbnRhaW5lckVsIH0gPSB0aGlzO1xuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgY29udGFpbmVyRWwuYWRkQ2xhc3MoXCJvbGVuLXNldHRpbmdzXCIpO1xuXG4gICAgLy8gSGVhZGVyXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJPbGVuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMS40ZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi1ib3R0b206IDRweDsgcGFkZGluZzogOHB4IDA7XCIgfSxcbiAgICB9KTtcbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICB0ZXh0OiBcIk15dGhvbG9naWNhbCBMaWZlLU9wZXJhdGluZyBTeXN0ZW1cIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogMTZweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gUXVpY2sgc3RhdHVzIGJhclxuICAgIHRoaXMucmVuZGVyU3RhdHVzQmFyKGNvbnRhaW5lckVsKTtcblxuICAgIC8vIFNlY3Rpb25zXG4gICAgdGhpcy5yZW5kZXJQcm9maWxlU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJDYXRlZ29yaWVzU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUZW1wbGVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckNhbGVuZGFyU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJUaGVtZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQWR2YW5jZWRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckRldkRhc2hib2FyZFNlY3Rpb24oY29udGFpbmVyRWwpO1xuICB9XG5cbiAgLy8gLS0tIENvbGxhcHNpYmxlIFNlY3Rpb24gSGVscGVyIC0tLVxuXG4gIHByaXZhdGUgY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKFxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICBpY29uOiBzdHJpbmcsXG4gICAgZGVmYXVsdE9wZW4gPSBmYWxzZVxuICApOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHBhcmVudC5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlciA9IHNlY3Rpb24uY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBhcnJvdyA9IGhlYWRlci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogZGVmYXVsdE9wZW4gPyBcIlxcdTI1QkNcIiA6IFwiXFx1MjVCNlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDEwcHg7IHdpZHRoOiAxMnB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGljb24gPyBgJHtpY29ufSAgJHt0aXRsZX1gIDogdGl0bGUsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45NWVtO1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBib2R5ID0gc2VjdGlvbi5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjogeyBzdHlsZTogYHBhZGRpbmc6IDAgMTZweDsgZGlzcGxheTogJHtkZWZhdWx0T3BlbiA/IFwiYmxvY2tcIiA6IFwibm9uZVwifTtgIH0sXG4gICAgfSk7XG5cbiAgICBoZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGlzT3BlbiA9IGJvZHkuc3R5bGUuZGlzcGxheSAhPT0gXCJub25lXCI7XG4gICAgICBib2R5LnN0eWxlLmRpc3BsYXkgPSBpc09wZW4gPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcbiAgICAgIGJvZHkuc3R5bGUucGFkZGluZyA9IGlzT3BlbiA/IFwiMCAxNnB4XCIgOiBcIjEycHggMTZweFwiO1xuICAgICAgYXJyb3cudGV4dENvbnRlbnQgPSBpc09wZW4gPyBcIlxcdTI1QjZcIiA6IFwiXFx1MjVCQ1wiO1xuICAgIH0pO1xuXG4gICAgaWYgKGRlZmF1bHRPcGVuKSBib2R5LnN0eWxlLnBhZGRpbmcgPSBcIjEycHggMTZweFwiO1xuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgLy8gLS0tIFN0YXR1cyBCYXIgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJTdGF0dXNCYXIoY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGhwUGVyY2VudCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUCA+IDBcbiAgICAgID8gTWF0aC5yb3VuZCgodGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCAvIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUCkgKiAxMDApXG4gICAgICA6IDA7XG5cbiAgICBjb25zdCBiYXIgPSBjb250YWluZXIuY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4OyBnYXA6IDEycHg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDEycHg7IG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpOyBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgICAgICBgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwgeyB0ZXh0OiBgVGllciAke3RoaXMucGx1Z2luLnNldHRpbmdzLmN1cnJlbnRUaWVyfS8xM2AgfSk7XG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBgSFAgJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQfS8ke3RoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NNYXhIUH0gKCR7aHBQZXJjZW50fSUpYCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuaW5UYXJ0YXJ1c1xuICAgICAgPyBcIlRBUlRBUlVTXCJcbiAgICAgIDogdGhpcy5wbHVnaW4uc2V0dGluZ3Muc3lzdGVtU3RhdGUgPT09IFwicGF1c2VkXCJcbiAgICAgICAgPyBcIlBBVVNFRFwiXG4gICAgICAgIDogXCJBQ1RJVkVcIjtcbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IHN0YXRlLFxuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYGZvbnQtd2VpZ2h0OiA2MDA7IGNvbG9yOiAke3RoaXMucGx1Z2luLnNldHRpbmdzLmluVGFydGFydXMgPyBcInZhcigtLXRleHQtZXJyb3IpXCIgOiBcInZhcigtLXRleHQtbm9ybWFsKVwifTtgLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogdGhpcy5wbHVnaW4uc2V0dGluZ3MubWlncmF0ZWQgPyBcIk1pZ3JhdGVkXCIgOiBcIk5vdCBtaWdyYXRlZFwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXN0eWxlOiBpdGFsaWM7XCIgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIC0tLSBQcm9maWxlIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyUHJvZmlsZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiUHJvZmlsZVwiLCBcIlxcdXsxRjQ2NH1cIik7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJOYW1lXCIpXG4gICAgICAuc2V0RGVzYyhcIllvdXIgbmFtZSBmb3IgdGhlIGRhc2hib2FyZCBncmVldGluZ1wiKVxuICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgIHRleHRcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlck5hbWUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudXNlck5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTXkgV2h5XCIpXG4gICAgICAuc2V0RGVzYyhcIllvdXIgY29yZSBtb3RpdmF0aW9uIFx1MjAxNCBzaG93biBwZXJpb2RpY2FsbHkgb24gdGhlIGRhc2hib2FyZFwiKVxuICAgICAgLmFkZFRleHRBcmVhKChhcmVhKSA9PlxuICAgICAgICBhcmVhXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLm15V2h5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLm15V2h5ID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkhlcm8gYmFja2dyb3VuZCBpbWFnZVwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBwYXRoIHRvIHRoZSBoZXJvIGJhY2tncm91bmQgaW1hZ2UgKGUuZy4sIGltYWdlcy9oZXJvLmpwZylcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwicGF0aC90by9pbWFnZS5qcGdcIilcbiAgICAgICAgICAuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuaGVyb0JhY2tncm91bmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIEFjdGl2aXRpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0aWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJBY3Rpdml0aWVzXCIsIFwiXFx1ezFGM0FGfVwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2ldO1xuICAgICAgdGhpcy5yZW5kZXJBY3Rpdml0eUl0ZW0oYm9keSwgYWN0aXZpdHksIGkpO1xuICAgIH1cblxuICAgIC8vIEFkZCBidXR0b25cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIisgQWRkIEFjdGl2aXR5XCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0FjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyA9IHtcbiAgICAgICAgICAgIGlkOiBgY3VzdG9tLSR7RGF0ZS5ub3coKX1gLFxuICAgICAgICAgICAgbmFtZTogXCJOZXcgQWN0aXZpdHlcIixcbiAgICAgICAgICAgIGVtb2ppOiBcIlxcdTJCNTBcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgIGZvbGRlcjogXCJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIlwiLFxuICAgICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSxcbiAgICAgICAgICAgIHdlZWtseVRhcmdldDogMyxcbiAgICAgICAgICAgIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgICAgICAgICAgaGFzU2Vzc2lvbjogZmFsc2UsXG4gICAgICAgICAgICBwcmlvcml0eTogNSxcbiAgICAgICAgICAgIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgICAgICAgICBwcmVmZXJyZWRUaW1lOiBcImFueXRpbWVcIixcbiAgICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICAgICAgICAgIGRhc2hib2FyZFNvdXJjZTogXCJidWlsdGluXCIsXG4gICAgICAgICAgICB3b3Jrc3BhY2VTb3VyY2U6IFwiYnVpbHRpblwiLFxuICAgICAgICAgIH07XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5wdXNoKG5ld0FjdGl2aXR5KTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckFjdGl2aXR5SXRlbShjb250YWluZXI6IEhUTUxFbGVtZW50LCBhY3Rpdml0eTogQWN0aXZpdHlDb25maWcsIGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB3cmFwcGVyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBIZWFkZXIgcm93IHdpdGggdG9nZ2xlXG4gICAgbmV3IFNldHRpbmcod3JhcHBlcilcbiAgICAgIC5zZXROYW1lKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9YClcbiAgICAgIC5zZXREZXNjKGAke2FjdGl2aXR5LmNhdGVnb3J5fSBcdTAwQjcgJHthY3Rpdml0eS5mb2xkZXIgfHwgXCJubyBmb2xkZXIgc2V0XCJ9YClcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKGFjdGl2aXR5LmVuYWJsZWQpLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVuYWJsZWQgPSB2YWx1ZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBFeHBhbmRhYmxlIGRldGFpbHNcbiAgICBjb25zdCBkZXRhaWxzVG9nZ2xlID0gd3JhcHBlci5jcmVhdGVFbChcImRldGFpbHNcIik7XG4gICAgZGV0YWlsc1RvZ2dsZS5jcmVhdGVFbChcInN1bW1hcnlcIiwge1xuICAgICAgdGV4dDogXCJDb25maWd1cmVcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiY3Vyc29yOiBwb2ludGVyOyBmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRldGFpbHMgPSBkZXRhaWxzVG9nZ2xlLmNyZWF0ZURpdigpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkubmFtZSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmFtZSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRW1vamlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LmVtb2ppKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbW9qaSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQ2F0ZWdvcnlcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgYm9keTogXCJCb2R5XCIsIG1pbmQ6IFwiTWluZFwiLCBzcGlyaXQ6IFwiU3Bpcml0XCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuY2F0ZWdvcnkpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jYXRlZ29yeSA9IHYgYXMgQ2F0ZWdvcnk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlZhdWx0IGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJGb2xkZXIgd2l0aCBZWVlZLU1NLUREIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5mb2xkZXIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmZvbGRlciA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRnJvbnRtYXR0ZXIgcHJvcGVydHlcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5LnByb3BlcnR5KS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5wcm9wZXJ0eSA9IHY7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgfSkpO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV2Vla2x5IHRhcmdldFwiKVxuICAgICAgLmFkZFNsaWRlcigocykgPT5cbiAgICAgICAgcy5zZXRMaW1pdHMoMSwgNywgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkud2Vla2x5VGFyZ2V0KVxuICAgICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS53ZWVrbHlUYXJnZXQgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJQcmlvcml0eSAoMS0xMClcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDEwLCAxKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5wcmlvcml0eSlcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJpb3JpdHkgPSB2O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJQcmVmZXJyZWQgdGltZVwiKVxuICAgICAgLmFkZERyb3Bkb3duKChkKSA9PlxuICAgICAgICBkLmFkZE9wdGlvbnMoe1xuICAgICAgICAgIG1vcm5pbmc6IFwiTW9ybmluZ1wiLCBhZnRlcm5vb246IFwiQWZ0ZXJub29uXCIsXG4gICAgICAgICAgZXZlbmluZzogXCJFdmVuaW5nXCIsIGFueXRpbWU6IFwiQW55dGltZVwiLFxuICAgICAgICB9KVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5wcmVmZXJyZWRUaW1lKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJlZmVycmVkVGltZSA9IHYgYXMgYW55O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJOZWdsZWN0IHRocmVzaG9sZCAoZGF5cylcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDE0LCAxKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5uZWdsZWN0VGhyZXNob2xkKVxuICAgICAgICAgIC5zZXREeW5hbWljVG9vbHRpcCgpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5uZWdsZWN0VGhyZXNob2xkID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRXN0aW1hdGVkIGR1cmF0aW9uIChtaW51dGVzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoU3RyaW5nKGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uKSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgaWYgKCFpc05hTihuKSAmJiBuID4gMCkge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uZXN0aW1hdGVkRHVyYXRpb24gPSBuO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkhhcyBzZXNzaW9uIHZpZXdcIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKGFjdGl2aXR5Lmhhc1Nlc3Npb24pLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uaGFzU2Vzc2lvbiA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiQmxvY2tzIChjb21tYS1zZXBhcmF0ZWQgYWN0aXZpdHkgSURzKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoKGFjdGl2aXR5LmJsb2NrcyA/PyBbXSkuam9pbihcIiwgXCIpKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmJsb2NrcyA9IHYuc3BsaXQoXCIsXCIpLm1hcCgocykgPT4gcy50cmltKCkpLmZpbHRlcihCb29sZWFuKTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJBbHRlcm5hdGVzIHdpdGggKGFjdGl2aXR5IElEKVwiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0VmFsdWUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGggPz8gXCJcIikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5hbHRlcm5hdGVzV2l0aCA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJDaGFpbiBhZnRlciAoYWN0aXZpdHkgSUQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShhY3Rpdml0eS5jaGFpbkFmdGVyID8/IFwiXCIpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2hhaW5BZnRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJTZXNzaW9uIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgZm9yIHNlc3Npb24gZmlsZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiZS5nLiBIb21lL1N0YXJ0cy9EcmF3aW5nL1Nlc3Npb25zXCIpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnNlc3Npb25Gb2xkZXIgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnNlc3Npb25Gb2xkZXIgPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIlNraWxsIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgY29udGFpbmluZyBza2lsbCB0cmVlIG5vdGVzXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcImUuZy4gSG9tZS9TdGFydHMvRHJhd2luZy9Ta2lsbCB0cmVlXCIpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LnNraWxsRm9sZGVyID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5za2lsbEZvbGRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gLS0tIFZpZXcgU291cmNlcyAtLS1cbiAgICBkZXRhaWxzLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiVmlldyBTb3VyY2VzXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC45ZW07IG1hcmdpbjogMTJweCAwIDRweDsgY29sb3I6IHZhcigtLXRleHQtbm9ybWFsKTtcIiB9LFxuICAgIH0pO1xuICAgIGRldGFpbHMuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJDaG9vc2UgYmV0d2VlbiBidWlsdC1pbiBPbGVuIFVJIG9yIHlvdXIgb3duIC5tZCB0ZW1wbGF0ZXMgcmVuZGVyZWQgaW5zaWRlIE9sZW4uXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICAvLyBEYXNoYm9hcmQgc291cmNlXG4gICAgY29uc3QgZGFzaFBhdGhTZXR0aW5nID0gbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRGFzaGJvYXJkIC5tZCBwYXRoXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IHBhdGggdG8gaHViIHRlbXBsYXRlICh3aXRob3V0IC5tZCBleHRlbnNpb24pXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIkhvbWUvSHVicy9EcmF3aW5nIGh1YlwiKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS5kYXNoYm9hcmRTb3VyY2UgPT09IFwiYnVpbHRpblwiID8gXCJcIiA6IChhY3Rpdml0eS5kYXNoYm9hcmRTb3VyY2UgPz8gXCJcIikpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5kYXNoYm9hcmRTb3VyY2UgPSB2LnRyaW0oKSB8fCBcImJ1aWx0aW5cIjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29uc3QgaXNEYXNoQ3VzdG9tID0gYWN0aXZpdHkuZGFzaGJvYXJkU291cmNlICYmIGFjdGl2aXR5LmRhc2hib2FyZFNvdXJjZSAhPT0gXCJidWlsdGluXCI7XG4gICAgZGFzaFBhdGhTZXR0aW5nLnNldHRpbmdFbC5zdHlsZS5kaXNwbGF5ID0gaXNEYXNoQ3VzdG9tID8gXCJcIiA6IFwibm9uZVwiO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiRGFzaGJvYXJkIHNvdXJjZVwiKVxuICAgICAgLnNldERlc2MoXCJIdWIgdmlldyB3aGVuIHlvdSB0YXAgYW4gYWN0aXZpdHlcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHsgYnVpbHRpbjogXCJCdWlsdC1pbiAoTmF0aXZlKVwiLCBjdXN0b206IFwiQ3VzdG9tIC5tZCBmaWxlXCIgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoaXNEYXNoQ3VzdG9tID8gXCJjdXN0b21cIiA6IFwiYnVpbHRpblwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgaWYgKHYgPT09IFwiYnVpbHRpblwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmRhc2hib2FyZFNvdXJjZSA9IFwiYnVpbHRpblwiO1xuICAgICAgICAgICAgICBkYXNoUGF0aFNldHRpbmcuc2V0dGluZ0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRhc2hQYXRoU2V0dGluZy5zZXR0aW5nRWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIFJlLWluc2VydCBwYXRoIHNldHRpbmcgYWZ0ZXIgZHJvcGRvd24gKGl0IHdhcyBjcmVhdGVkIGZpcnN0IGZvciByZWZlcmVuY2UpXG4gICAgZGFzaFBhdGhTZXR0aW5nLnNldHRpbmdFbC5yZW1vdmUoKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKGRhc2hQYXRoU2V0dGluZy5zZXR0aW5nRWwpO1xuXG4gICAgLy8gV29ya3NwYWNlIHNvdXJjZVxuICAgIGNvbnN0IHdzUGF0aFNldHRpbmcgPSBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJXb3Jrc3BhY2UgLm1kIHBhdGhcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgcGF0aCB0byBzZXNzaW9uIHRlbXBsYXRlICh3aXRob3V0IC5tZCBleHRlbnNpb24pXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIkRyYXdpbmcgU2Vzc2lvblwiKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS53b3Jrc3BhY2VTb3VyY2UgPT09IFwiYnVpbHRpblwiID8gXCJcIiA6IChhY3Rpdml0eS53b3Jrc3BhY2VTb3VyY2UgPz8gXCJcIikpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS53b3Jrc3BhY2VTb3VyY2UgPSB2LnRyaW0oKSB8fCBcImJ1aWx0aW5cIjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgY29uc3QgaXNXc0N1c3RvbSA9IGFjdGl2aXR5LndvcmtzcGFjZVNvdXJjZSAmJiBhY3Rpdml0eS53b3Jrc3BhY2VTb3VyY2UgIT09IFwiYnVpbHRpblwiO1xuICAgIHdzUGF0aFNldHRpbmcuc2V0dGluZ0VsLnN0eWxlLmRpc3BsYXkgPSBpc1dzQ3VzdG9tID8gXCJcIiA6IFwibm9uZVwiO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIHNvdXJjZVwiKVxuICAgICAgLnNldERlc2MoXCJTZXNzaW9uIHZpZXcgd2hlbiB5b3UgYmVnaW4gYSBzZXNzaW9uXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7IGJ1aWx0aW46IFwiQnVpbHQtaW4gKE5hdGl2ZSlcIiwgY3VzdG9tOiBcIkN1c3RvbSAubWQgZmlsZVwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKGlzV3NDdXN0b20gPyBcImN1c3RvbVwiIDogXCJidWlsdGluXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBpZiAodiA9PT0gXCJidWlsdGluXCIpIHtcbiAgICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud29ya3NwYWNlU291cmNlID0gXCJidWlsdGluXCI7XG4gICAgICAgICAgICAgIHdzUGF0aFNldHRpbmcuc2V0dGluZ0VsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdzUGF0aFNldHRpbmcuc2V0dGluZ0VsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICB3c1BhdGhTZXR0aW5nLnNldHRpbmdFbC5yZW1vdmUoKTtcbiAgICBkZXRhaWxzLmFwcGVuZENoaWxkKHdzUGF0aFNldHRpbmcuc2V0dGluZ0VsKTtcblxuICAgIC8vIERlbGV0ZSBidXR0b25cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG5cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dChcIkRlbGV0ZSBBY3Rpdml0eVwiKVxuICAgICAgICAgIC5zZXRXYXJuaW5nKClcbiAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhdGVnb3JpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJDYXRlZ29yaWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJDYXRlZ29yaWVzXCIsIFwiXFx1ezFGM0E4fVwiKTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgICB7IGtleTogXCJib2R5XCIsIGxhYmVsOiBcIkJvZHlcIiB9LFxuICAgICAgeyBrZXk6IFwibWluZFwiLCBsYWJlbDogXCJNaW5kXCIgfSxcbiAgICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShgJHtjYXQubGFiZWx9IGNvbG9yYClcbiAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT5cbiAgICAgICAgICBjcFxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldID0gdjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlRpdGxlIG92ZXJyaWRlXCIpXG4gICAgICAuc2V0RGVzYyhcIk92ZXJyaWRlIHRoZSBkeW5hbWljIHRpdGxlIChsZWF2ZSBlbXB0eSBmb3IgYXV0bylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZU92ZXJyaWRlID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIFRlbXBsZSAtLS1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiVGVtcGxlIFVwa2VlcFwiLCBcIlxcdXsxRjNEQn1cXHVGRTBGXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFzayA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldO1xuXG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShgJHt0YXNrLmVtb2ppfSAke3Rhc2submFtZX1gKVxuICAgICAgICAuc2V0RGVzYyhgRXZlcnkgJHt0YXNrLmludGVydmFsRGF5c30gZGF5KHMpYClcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIk5hbWVcIikuc2V0VmFsdWUodGFzay5uYW1lKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0ubmFtZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJEYXlzXCIpLnNldFZhbHVlKFN0cmluZyh0YXNrLmludGVydmFsRGF5cykpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLmludGVydmFsRGF5cyA9IG47XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIkVtb2ppXCIpLnNldFZhbHVlKHRhc2suZW1vamkpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5lbW9qaSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBUZW1wbGUgVGFza1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MucHVzaCh7XG4gICAgICAgICAgaWQ6IGB0ZW1wbGUtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgbmFtZTogXCJOZXcgVGFza1wiLFxuICAgICAgICAgIGxhc3RDb21wbGV0ZWQ6IG51bGwsXG4gICAgICAgICAgaW50ZXJ2YWxEYXlzOiA3LFxuICAgICAgICAgIGVtb2ppOiBcIlxcdTI3MjhcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBDYWxlbmRhciBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlbmRlckNhbGVuZGFyU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJDYWxlbmRhciBJbnRlZ3JhdGlvblwiLCBcIlxcdXsxRjRDNX1cIik7XG5cbiAgICBib2R5LmNyZWF0ZUVsKFwicFwiLCB7XG4gICAgICB0ZXh0OiBcIk1lcmdlIGV4dGVybmFsIHRhc2tzIGludG8geW91ciBEYXkgTWFwIHRpbWVsaW5lLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIC8vIE9wdGlvbiBBOiBEYWlseSBOb3Rlc1xuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkRhaWx5IE5vdGVzIGludGVncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlBhcnNlIHRhc2tzIGZyb20geW91ciBkYWlseSBub3RlcyAoLSBbIF0gVGFzayBAdGltZSB+MzBtKVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3Rlcykub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJEYWlseSBOb3RlcyBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGNvbnRhaW5pbmcgWVlZWS1NTS1ERC5tZCBub3Rlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJEYWlseSBOb3Rlc1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlciA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJUYXNrcyBQbHVnaW4gaW50ZWdyYXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiUmVhZCB0YXNrcyB3aXRoIGR1ZSBkYXRlcyBmcm9tIHRoZSBUYXNrcyBwbHVnaW5cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBPcHRpb24gQzogUXVpY2sgVGFza3NcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJRdWljayBUYXNrc1wiKVxuICAgICAgLnNldERlc2MoXCJPbGVuJ3MgYnVpbHQtaW4gdGFzayBzeXN0ZW1cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcyA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gUXVpY2sgVGFza3MgbGlzdFxuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKSB7XG4gICAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbHRlcihcbiAgICAgICAgKHF0KSA9PiBxdC5kYXRlID09PSB0b2RheVxuICAgICAgKTtcblxuICAgICAgaWYgKHRvZGF5VGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsaXN0RWwgPSBib2R5LmNyZWF0ZURpdih7XG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW46IDhweCAwOyBwYWRkaW5nOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1wiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxpc3RFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogXCJUb2RheSdzIFF1aWNrIFRhc2tzXCIsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOWVtOyBtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcXQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzW2ldO1xuICAgICAgICAgIGlmIChxdC5kYXRlICE9PSB0b2RheSkgY29udGludWU7XG5cbiAgICAgICAgICBuZXcgU2V0dGluZyhsaXN0RWwpXG4gICAgICAgICAgICAuc2V0TmFtZShgJHtxdC5kb25lID8gXCJcXHUyNzEzXCIgOiBcIlxcdTI1Q0JcIn0gJHtxdC50aXRsZX1gKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgIFtxdC50aW1lLCBxdC5kdXJhdGlvbiA/IGAke3F0LmR1cmF0aW9ufW1gIDogXCJcIl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXHUwMEI3IFwiKSB8fCBcIk5vIHRpbWUgc2V0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJEZWxldGVcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBRdWljayBUYXNrXCIpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICh0aGlzLnBsdWdpbiBhcyBhbnkpLnNob3dRdWlja1Rhc2tEaWFsb2coKTtcbiAgICAgICAgICAvLyBDbG9zZSBzZXR0aW5ncyBcdTIwMTQgdGhlIGRpYWxvZyBhcHBlYXJzIG9uIHRvcFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gVGhlbWUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJUaGVtZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiVGhlbWVcIiwgXCJcXHV7MUYzQTh9XCIpO1xuXG4gICAgY29uc3QgdGhlbWVGaWVsZHM6IHsga2V5OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGRlZmF1bHRWYWw6IHN0cmluZyB9W10gPSBbXG4gICAgICB7IGtleTogXCJiZ1ByaW1hcnlcIiwgbGFiZWw6IFwiQmFja2dyb3VuZFwiLCBkZWZhdWx0VmFsOiBcIiMwYzBhMDlcIiB9LFxuICAgICAgeyBrZXk6IFwidGV4dFByaW1hcnlcIiwgbGFiZWw6IFwiVGV4dFwiLCBkZWZhdWx0VmFsOiBcIiNmNWYwZThcIiB9LFxuICAgICAgeyBrZXk6IFwidGV4dE11dGVkXCIsIGxhYmVsOiBcIk11dGVkIHRleHRcIiwgZGVmYXVsdFZhbDogXCIjOTI4ZDg1XCIgfSxcbiAgICAgIHsga2V5OiBcImFjY2VudEdvbGRcIiwgbGFiZWw6IFwiQWNjZW50IChnb2xkKVwiLCBkZWZhdWx0VmFsOiBcIiNjOWE4NGNcIiB9LFxuICAgICAgeyBrZXk6IFwiZGFuZ2VyXCIsIGxhYmVsOiBcIkRhbmdlclwiLCBkZWZhdWx0VmFsOiBcIiM4YjJkMzVcIiB9LFxuICAgICAgeyBrZXk6IFwic3VjY2Vzc1wiLCBsYWJlbDogXCJTdWNjZXNzXCIsIGRlZmF1bHRWYWw6IFwiI2Q0OTQwYVwiIH0sXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhlbWVGaWVsZHMpIHtcbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKGZpZWxkLmxhYmVsKVxuICAgICAgICAuYWRkQ29sb3JQaWNrZXIoKGNwKSA9PlxuICAgICAgICAgIGNwXG4gICAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyBhcyBhbnkpPy5bZmllbGQua2V5XSA/PyBmaWVsZC5kZWZhdWx0VmFsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgICAgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzIGFzIGFueSlbZmllbGQua2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gRWx5c2lhbiBEYXJrXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyA9IHt9O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIG5ldyBOb3RpY2UoXCJUaGVtZSByZXNldCB0byBFbHlzaWFuIERhcmsgZGVmYXVsdHNcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQWR2YW5jZWQgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBZHZhbmNlZFNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQWR2YW5jZWRcIiwgXCJcXHUyNjk5XFx1RkUwRlwiKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlNpbXVsYXRlZCBkYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIk92ZXJyaWRlIHRvZGF5J3MgZGF0ZSBmb3IgdGVzdGluZyAoWVlZWS1NTS1ERClcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiWVlZWS1NTS1ERFwiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID0gdi50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiU3lzdGVtIHN0YXRlXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGRcbiAgICAgICAgICAuYWRkT3B0aW9ucyh7IGFjdGl2ZTogXCJBY3RpdmVcIiwgcGF1c2VkOiBcIlBhdXNlZFwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB2IGFzIFwiYWN0aXZlXCIgfCBcInBhdXNlZFwiO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlID09PSBcInBhdXNlZFwiICYmIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZSA9PT0gXCJhY3RpdmVcIiAmJiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXVzZWRNcyA9IERhdGUubm93KCkgLSBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSArPSBwYXVzZWRNcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJRdW90ZSBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGNvbnRhaW5pbmcgcXVvdGUgZmlsZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiUXVvdGVzL1N0b2ljXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlJlLXJ1biBtaWdyYXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiUmUtaW1wb3J0IGRhdGEgZnJvbSB0aGUgTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXIgcGx1Z2luXCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiTWlncmF0ZVwiKS5zZXRXYXJuaW5nKCkub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWlncmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAvLyBSZWxvYWQgdGhlIHBsdWdpbiB0byB0cmlnZ2VyIG1pZ3JhdGlvblxuICAgICAgICAgIGF3YWl0ICh0aGlzLnBsdWdpbiBhcyBhbnkpLm9ubG9hZCgpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoXCJNaWdyYXRpb24gY29tcGxldGVcIik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIERldmVsb3BlciBEYXNoYm9hcmQgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJEZXZEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkRldmVsb3BlciBEYXNoYm9hcmRcIiwgXCJcXHV7MUY2RTB9XFx1RkUwRlwiKTtcblxuICAgIGJvZHkuY3JlYXRlRWwoXCJwXCIsIHtcbiAgICAgIHRleHQ6IFwiRWRpdCB0aGUgcmF3IGRldkNvbmZpZyBKU09OLiBDaGFuZ2VzIGFyZSBhcHBsaWVkIG9uIHNhdmUuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDhweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBib2R5LmNyZWF0ZUVsKFwidGV4dGFyZWFcIiwge1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OiAzMDBweDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7IGNvbG9yOiB2YXIoLS10ZXh0LW5vcm1hbCk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDsgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGV4dGFyZWEudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcsIG51bGwsIDIpO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJTYXZlIGRldkNvbmZpZ1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh0ZXh0YXJlYS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgREVGQVVMVF9ERVZfQ09ORklHLFxuICAgICAgICAgICAgICBwYXJzZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJkZXZDb25maWcgc2F2ZWQgYW5kIGFwcGxpZWRcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiSW52YWxpZCBKU09OIFx1MjAxNCBwbGVhc2UgY2hlY2sgc3ludGF4XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJSZXNldCB0byBkZWZhdWx0c1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcgPSB7IC4uLkRFRkFVTFRfREVWX0NPTkZJRyB9O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLCBudWxsLCAyKTtcbiAgICAgICAgICBuZXcgTm90aWNlKFwiZGV2Q29uZmlnIHJlc2V0IHRvIGRlZmF1bHRzXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIEV4cG9ydC9JbXBvcnRcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJFeHBvcnQgYWxsIHNldHRpbmdzXCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiQ29weSB0byBjbGlwYm9hcmRcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLCBudWxsLCAyKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoanNvbik7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiU2V0dGluZ3MgY29waWVkIHRvIGNsaXBib2FyZFwiKTtcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIGZvciBtb2JpbGUgXHUyMDE0IHNob3cgaW4gYSB0ZXh0YXJlYSBmb3IgbWFudWFsIGNvcHlcbiAgICAgICAgICAgIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgdGEudmFsdWUgPSBqc29uO1xuICAgICAgICAgICAgdGEuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjUwJTt6LWluZGV4Ojk5OTk7Zm9udC1zaXplOjExcHg7XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhKTtcbiAgICAgICAgICAgIHRhLnNlbGVjdCgpO1xuICAgICAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4gdGEucmVtb3ZlKCkpO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlRhcCB0aGUgdGV4dCBhcmVhIGFuZCBjb3B5IG1hbnVhbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJJbXBvcnQgc2V0dGluZ3NcIilcbiAgICAgIC5hZGRUZXh0QXJlYSgoYXJlYSkgPT4ge1xuICAgICAgICBhcmVhLnNldFBsYWNlaG9sZGVyKFwiUGFzdGUgSlNPTiBoZXJlLi4uXCIpO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLm1pbkhlaWdodCA9IFwiODBweFwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5mb250U2l6ZSA9IFwiMTFweFwiO1xuXG4gICAgICAgIC8vIFN0b3JlIHJlZmVyZW5jZSBmb3IgdGhlIGltcG9ydCBidXR0b25cbiAgICAgICAgKGJvZHkgYXMgYW55KS5faW1wb3J0QXJlYSA9IGFyZWE7XG4gICAgICB9KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkltcG9ydFwiKS5zZXRXYXJuaW5nKCkub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWEgPSAoYm9keSBhcyBhbnkpLl9pbXBvcnRBcmVhO1xuICAgICAgICAgICAgaWYgKCFhcmVhKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGFyZWEuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucGx1Z2luLnNldHRpbmdzLCBwYXJzZWQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJTZXR0aW5ncyBpbXBvcnRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiSW52YWxpZCBKU09OIFx1MjAxNCBwbGVhc2UgY2hlY2sgc3ludGF4XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLElBQUFBLG1CQUFnRDs7O0FDV3pDLElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sb0JBQW9CO0FBSTFCLElBQU0sU0FBMkI7QUFBQSxFQUN0QyxFQUFFLE1BQU0sR0FBRyxNQUFNLG9CQUFvQixNQUFNLGdCQUFnQixhQUFhLHNFQUFzRSxNQUFNLGlHQUFpRyxXQUFXLHdCQUFxQjtBQUFBLEVBQ3JSLEVBQUUsTUFBTSxHQUFHLE1BQU0sZ0JBQWdCLE1BQU0sb0JBQW9CLGFBQWEsaUVBQWlFLE1BQU0sb0ZBQW9GLFdBQVcsd0JBQXFCO0FBQUEsRUFDblEsRUFBRSxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsTUFBTSxjQUFjLGFBQWEsK0RBQStELE1BQU0seUVBQXlFLFdBQVcsd0JBQXFCO0FBQUEsRUFDblAsRUFBRSxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsTUFBTSxXQUFXLGFBQWEscUVBQXFFLE1BQU0sZ0VBQWdFLFdBQVcsd0JBQXFCO0FBQUEsRUFDN08sRUFBRSxNQUFNLEdBQUcsTUFBTSxpQkFBaUIsTUFBTSxXQUFXLGFBQWEsaUVBQWlFLE1BQU0saUVBQWlFLFdBQVcsd0JBQXFCO0FBQUEsRUFDeE8sRUFBRSxNQUFNLEdBQUcsTUFBTSxlQUFlLE1BQU0sV0FBVyxhQUFhLG1F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ZUFBZSxTQUFTO0FBQzFFLGNBQUksU0FBUyx3QkFBd0I7QUFBVyxxQkFBUyxzQkFBc0IsU0FBUztBQUFBLFFBQzFGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFHQSxRQUFJLEtBQUssY0FBYztBQUNyQixpQkFBVyxTQUFTLEtBQUssY0FBYztBQUVyQyxZQUFJLE9BQU8sS0FBSyxDQUFDLE1BQU0sRUFBRSxPQUFPLE1BQU0sRUFBRTtBQUFHO0FBRTNDLGVBQU8sS0FBSztBQUFBLFVBQ1YsSUFBSSxNQUFNO0FBQUEsVUFDVixNQUFNLE1BQU07QUFBQSxVQUNaLE9BQU8sTUFBTSxTQUFTO0FBQUEsVUFDdEIsVUFBVTtBQUFBO0FBQUEsVUFDVixTQUFTO0FBQUEsVUFDVCxRQUFRLE1BQU07QUFBQSxVQUNkLFVBQVUsTUFBTTtBQUFBLFVBQ2hCLHFCQUFxQixNQUFNLHVCQUF1QjtBQUFBLFVBQ2xELGNBQWMsTUFBTSxnQkFBZ0I7QUFBQSxVQUNwQyxjQUFjO0FBQUEsVUFDZCxZQUFZO0FBQUEsVUFDWixVQUFVO0FBQUEsVUFDVixrQkFBa0I7QUFBQSxVQUNsQixlQUFlO0FBQUEsVUFDZixtQkFBbUI7QUFBQSxVQUNuQixpQkFBaUI7QUFBQSxVQUNqQixpQkFBaUI7QUFBQSxRQUNuQixDQUFDO0FBQUEsTUFDSDtBQUFBLElBQ0Y7QUFFQSxXQUFPO0FBQUEsRUFDVDtBQUNGO0FBR0EsU0FBUyxNQUFNLElBQTJCO0FBQ3hDLFNBQU8sSUFBSSxRQUFRLENBQUMsWUFBWSxXQUFXLFNBQVMsRUFBRSxDQUFDO0FBQ3pEOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgIm5lZ2xlY3RlZCIsICJpbXBvcnRfb2JzaWRpYW4iLCAiaW1wb3J0X29ic2lkaWFuIiwgImltcG9ydF9vYnNpZGlhbiJdCn0K
