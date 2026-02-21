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
    workspaceTemplate: "Templates/Workout.js",
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
        workspaceFolder: activity.workspaceFolder,
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
  // seconds
  constructor(leaf, plugin) {
    super(leaf);
    this.timerInterval = null;
    this.elapsed = 0;
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
    this.startTime = new Date(workspace.startTime);
    this.render(workspace);
    this.startTimer();
  }
  async onClose() {
    this.stopTimer();
    this.contentEl.empty();
  }
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
    if (workspace.workspaceFolder) {
      await this.createWorkspaceFile(result, workspace);
    }
    await this.markActivityDone(workspace, result);
    const state = this.plugin.settings.workspaceCompletionStates.find((s) => s.id === result.type);
    if (state && state.xpMultiplier > 0) {
      const xpGain = Math.round(this.plugin.settings.devConfig.xpPerCompletion * state.xpMultiplier);
      this.plugin.settings.categoryXP[workspace.category] += xpGain;
    }
    if (result.type !== "skipped") {
      const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
      if (activity) {
        this.plugin.settings.bossCurrentHP = Math.max(
          0,
          this.plugin.settings.bossCurrentHP - activity.damagePerCompletion
        );
      }
    }
    this.plugin.settings.activeWorkspace = null;
    await this.plugin.saveSettings();
    const stateLabel = this.plugin.settings.workspaceCompletionStates.find((s) => s.id === result.type)?.name ?? result.type;
    new import_obsidian3.Notice(`${workspace.emoji} ${workspace.activityName} \u2014 ${stateLabel} \xB7 ${result.durationMinutes}m`);
    this.plugin.activateDashboardView();
  }
  async createWorkspaceFile(result, workspace) {
    const folder = workspace.workspaceFolder;
    const activity = this.plugin.settings.activities.find((a) => a.id === workspace.activityId);
    const property = activity?.property ?? workspace.activityName;
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
      `category: "${workspace.category}"`,
      result.skills.length > 0 ? `skills: [${result.skills.map((s) => `"${s}"`).join(", ")}]` : "skills: []",
      "cssclasses:",
      "  - hide-properties",
      "---"
    ];
    const body = [
      "",
      `# ${workspace.emoji} ${workspace.activityName} Workspace`,
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
    new import_obsidian4.Setting(details).setName("Vault folder").setDesc("Folder with YYYY-MM-DD notes").addText((t) => t.setValue(activity.folder).onChange(async (v) => {
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
    new import_obsidian4.Setting(details).setName("Workspace template").setDesc("Vault path to .js template file (e.g. Templates/Workout.js). Leave empty for no custom workspace.").addText(
      (t) => t.setPlaceholder("e.g. Templates/Workout.js").setValue(activity.workspaceTemplate ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].workspaceTemplate = v.trim() || void 0;
        this.plugin.templateEngine.invalidateCache();
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian4.Setting(details).setName("Workspace folder").setDesc("Vault folder where workspace log files are saved after completing").addText(
      (t) => t.setPlaceholder("e.g. Home/Starts/Drawing/Workspaces").setValue(activity.workspaceFolder ?? "").onChange(async (v) => {
        this.plugin.settings.activities[index].workspaceFolder = v.trim() || void 0;
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
   * Looks up the activity by ID in settings and returns its workspaceTemplate path.
   */
  findTemplate(activityType) {
    const activity = this.plugin.settings.activities.find(
      (a) => a.id === activityType && a.enabled && a.workspaceTemplate
    );
    if (!activity)
      return null;
    return { templatePath: activity.workspaceTemplate };
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
   * Main render method. Loads a template and renders it into a container
   * bound to the given note's frontmatter.
   */
  async render(templatePath, file, container) {
    const source = await this.loadTemplateSource(templatePath);
    if (!source) {
      this.renderError(
        container,
        `Template not found: ${templatePath}`,
        "Create the template file in your vault, or update the path in Olen Settings \u2192 Activities \u2192 Configure."
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
      await this.templateEngine.render(entry.templatePath, file, container);
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
   * and move templateRegistry entries into per-activity workspaceTemplate.
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
      if (a.sessionFolder !== void 0 && a.workspaceFolder === void 0) {
        a.workspaceFolder = a.sessionFolder;
        delete a.sessionFolder;
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
      if (aw.sessionFolder !== void 0 && aw.workspaceFolder === void 0) {
        aw.workspaceFolder = aw.sessionFolder;
        delete aw.sessionFolder;
        changed = true;
      }
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
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL21haW4udHMiLCAic3JjL2NvbnN0YW50cy50cyIsICJzcmMvdmlld3MvRGFzaGJvYXJkVmlldy50cyIsICJzcmMvZW5naW5lcy9Cb3NzRW5naW5lLnRzIiwgInNyYy9lbmdpbmVzL09sZW5FbmdpbmUudHMiLCAic3JjL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmUudHMiLCAic3JjL2NvbXBvbmVudHMvSGVyb0NhcmQudHMiLCAic3JjL2NvbXBvbmVudHMvRXVkYWltb25pYUJhci50cyIsICJzcmMvY29tcG9uZW50cy9EaXJlY3RpdmVDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL0Jvc3NTdGF0dXNDYXJkLnRzIiwgInNyYy9jb21wb25lbnRzL1dlZWtseVJoeXRobS50cyIsICJzcmMvY29tcG9uZW50cy9BY3Rpdml0eUdyaWQudHMiLCAic3JjL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHMudHMiLCAic3JjL2NvbXBvbmVudHMvUXVvdGVGb290ZXIudHMiLCAic3JjL2NvbXBvbmVudHMvRGF5VGltZWxpbmUudHMiLCAic3JjL3ZpZXdzL1dvcmtzcGFjZVZpZXcudHMiLCAic3JjL3NldHRpbmdzL09sZW5TZXR0aW5ncy50cyIsICJzcmMvdGVtcGxhdGVzL1RlbXBsYXRlRW5naW5lLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFBsdWdpbiBFbnRyeSBQb2ludFxuLy8gUmVnaXN0ZXJzIHZpZXdzLCBjb21tYW5kcywgcmliYm9uIGljb24sIHNldHRpbmdzIG1pZ3JhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IFBsdWdpbiwgZGVib3VuY2UsIFRGaWxlLCBOb3RpY2UsIE1hcmtkb3duVmlldyB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFRyYWNrSGFiaXRSYW5rRGF0YSwgQWN0aXZpdHlDb25maWcgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgVklFV19UWVBFX09MRU4sIFZJRVdfVFlQRV9XT1JLU1BBQ0UsIERFRkFVTFRfT0xFTl9TRVRUSU5HUywgREVGQVVMVF9BQ1RJVklUSUVTLCBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBEYXNoYm9hcmRWaWV3IH0gZnJvbSBcIi4vdmlld3MvRGFzaGJvYXJkVmlld1wiO1xuaW1wb3J0IHsgV29ya3NwYWNlVmlldyB9IGZyb20gXCIuL3ZpZXdzL1dvcmtzcGFjZVZpZXdcIjtcbmltcG9ydCB7IE9sZW5TZXR0aW5nVGFiIH0gZnJvbSBcIi4vc2V0dGluZ3MvT2xlblNldHRpbmdzXCI7XG5pbXBvcnQgeyBUZW1wbGF0ZUVuZ2luZSB9IGZyb20gXCIuL3RlbXBsYXRlcy9UZW1wbGF0ZUVuZ2luZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbGVuUGx1Z2luIGV4dGVuZHMgUGx1Z2luIHtcbiAgc2V0dGluZ3MhOiBPbGVuU2V0dGluZ3M7XG4gIHRlbXBsYXRlRW5naW5lITogVGVtcGxhdGVFbmdpbmU7XG5cbiAgYXN5bmMgb25sb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIExvYWQgc2V0dGluZ3Mgd2l0aCBkZWZhdWx0c1xuICAgIHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MsXG4gICAgICBhd2FpdCB0aGlzLmxvYWREYXRhKClcbiAgICApO1xuXG4gICAgLy8gRW5zdXJlIGRlZXAgZGVmYXVsdHMgZm9yIG5lc3RlZCBvYmplY3RzXG4gICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX09MRU5fU0VUVElOR1MuZGV2Q29uZmlnLFxuICAgICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWdcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscyA9IE9iamVjdC5hc3NpZ24oXG4gICAgICB7fSxcbiAgICAgIERFRkFVTFRfT0xFTl9TRVRUSU5HUy5kZXZDb25maWcubGFiZWxzLFxuICAgICAgdGhpcy5zZXR0aW5ncy5kZXZDb25maWcubGFiZWxzXG4gICAgKTtcbiAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmNhdGVnb3J5Q29sb3JzLFxuICAgICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc1xuICAgICk7XG4gICAgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeVhQID0gT2JqZWN0LmFzc2lnbihcbiAgICAgIHt9LFxuICAgICAgREVGQVVMVF9PTEVOX1NFVFRJTkdTLmNhdGVnb3J5WFAsXG4gICAgICB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFBcbiAgICApO1xuICAgIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIgPSBPYmplY3QuYXNzaWduKFxuICAgICAge30sXG4gICAgICBERUZBVUxUX0NBTEVOREFSX1NFVFRJTkdTLFxuICAgICAgdGhpcy5zZXR0aW5ncy5jYWxlbmRhclxuICAgICk7XG5cbiAgICAvLyBNaWdyYXRlIGxlZ2FjeSBmaWVsZCBuYW1lcyBmcm9tIHNlc3Npb24gXHUyMTkyIHdvcmtzcGFjZVxuICAgIGF3YWl0IHRoaXMubWlncmF0ZVNlc3Npb25Ub1dvcmtzcGFjZSgpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZSBUZW1wbGF0ZSBFbmdpbmVcbiAgICB0aGlzLnRlbXBsYXRlRW5naW5lID0gbmV3IFRlbXBsYXRlRW5naW5lKHRoaXMuYXBwLCB0aGlzKTtcblxuICAgIC8vIE1pZ3JhdGUgZnJvbSBUcmFja0hhYml0UmFuayBvbiBmaXJzdCBydW5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MubWlncmF0ZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMubWlncmF0ZUZyb21UcmFja0hhYml0UmFuaygpO1xuICAgIH1cblxuICAgIC8vIFJlZ2lzdGVyIG1haW4gZGFzaGJvYXJkIHZpZXdcbiAgICB0aGlzLnJlZ2lzdGVyVmlldyhcbiAgICAgIFZJRVdfVFlQRV9PTEVOLFxuICAgICAgKGxlYWYpID0+IG5ldyBEYXNoYm9hcmRWaWV3KGxlYWYsIHRoaXMpXG4gICAgKTtcblxuICAgIC8vIFJlZ2lzdGVyIHdvcmtzcGFjZSB2aWV3XG4gICAgdGhpcy5yZWdpc3RlclZpZXcoXG4gICAgICBWSUVXX1RZUEVfV09SS1NQQUNFLFxuICAgICAgKGxlYWYpID0+IG5ldyBXb3Jrc3BhY2VWaWV3KGxlYWYsIHRoaXMpXG4gICAgKTtcblxuICAgIC8vIFJpYmJvbiBpY29uXG4gICAgdGhpcy5hZGRSaWJib25JY29uKFwiY29tcGFzc1wiLCBcIk9wZW4gT2xlblwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmFjdGl2YXRlRGFzaGJvYXJkKCk7XG4gICAgfSk7XG5cbiAgICAvLyBDb21tYW5kc1xuICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICBpZDogXCJvcGVuLW9sZW4tZGFzaGJvYXJkXCIsXG4gICAgICBuYW1lOiBcIk9wZW4gT2xlbiBEYXNoYm9hcmRcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLmFjdGl2YXRlRGFzaGJvYXJkKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwicmVmcmVzaC1vbGVuLWRhc2hib2FyZFwiLFxuICAgICAgbmFtZTogXCJSZWZyZXNoIE9sZW4gRGFzaGJvYXJkXCIsXG4gICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCksXG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZENvbW1hbmQoe1xuICAgICAgaWQ6IFwiYWRkLXF1aWNrLXRhc2tcIixcbiAgICAgIG5hbWU6IFwiQWRkIFF1aWNrIFRhc2tcIixcbiAgICAgIGNhbGxiYWNrOiAoKSA9PiB0aGlzLnNob3dRdWlja1Rhc2tEaWFsb2coKSxcbiAgICB9KTtcblxuICAgIC8vIENhbGVuZGFyIHBsdWdpbiBpbnRlZ3JhdGlvbiBcdTIwMTQgaW5qZWN0IE9sZW4gbWV0YWRhdGEgaW50byBDYWxlbmRhciBwbHVnaW5cbiAgICB0aGlzLnJlZ2lzdGVyQ2FsZW5kYXJQbHVnaW5Tb3VyY2UoKTtcblxuICAgIC8vIERlYm91bmNlZCBmaWxlIHdhdGNoZXIgZm9yIG1ldGFkYXRhIGNoYW5nZXNcbiAgICBjb25zdCByZWZyZXNoID0gZGVib3VuY2UoKCkgPT4ge1xuICAgICAgdGhpcy5yZWZyZXNoRGFzaGJvYXJkKCk7XG4gICAgfSwgMzAwKTtcblxuICAgIHRoaXMucmVnaXN0ZXJFdmVudChcbiAgICAgIHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUub24oXCJjaGFuZ2VkXCIsICgpID0+IHJlZnJlc2goKSlcbiAgICApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oXCJjcmVhdGVcIiwgYXN5bmMgKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiBmaWxlLmV4dGVuc2lvbiA9PT0gXCJtZFwiKSB7XG4gICAgICAgICAgLy8gV2FpdCBmb3IgbWV0YWRhdGEgdG8gYmUgaW5kZXhlZFxuICAgICAgICAgIGxldCBhdHRlbXB0cyA9IDA7XG4gICAgICAgICAgd2hpbGUgKGF0dGVtcHRzIDwgMTUpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgICBpZiAoY2FjaGU/LmZyb250bWF0dGVyKSB7XG4gICAgICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwKTtcbiAgICAgICAgICAgIGF0dGVtcHRzKys7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlZnJlc2goKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgdGhpcy5yZWdpc3RlckV2ZW50KFxuICAgICAgdGhpcy5hcHAudmF1bHQub24oXCJyZW5hbWVcIiwgKGZpbGUpID0+IHtcbiAgICAgICAgaWYgKGZpbGUgaW5zdGFuY2VvZiBURmlsZSAmJiBmaWxlLmV4dGVuc2lvbiA9PT0gXCJtZFwiKSB7XG4gICAgICAgICAgcmVmcmVzaCgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBTZXR0aW5ncyB0YWJcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IE9sZW5TZXR0aW5nVGFiKHRoaXMuYXBwLCB0aGlzKSk7XG5cbiAgICAvLyAtLS0gVGVtcGxhdGUgUmVnaXN0cnk6IEZyb250bWF0dGVyLWRyaXZlbiByZW5kZXJpbmcgLS0tXG4gICAgdGhpcy5yZWdpc3RlclRlbXBsYXRlUG9zdFByb2Nlc3NvcigpO1xuXG4gICAgLy8gSW52YWxpZGF0ZSB0ZW1wbGF0ZSBjYWNoZSB3aGVuIHRlbXBsYXRlIC5qcyBmaWxlcyBhcmUgbW9kaWZpZWRcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC52YXVsdC5vbihcIm1vZGlmeVwiLCAoZmlsZSkgPT4ge1xuICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIFRGaWxlICYmIGZpbGUuZXh0ZW5zaW9uID09PSBcImpzXCIpIHtcbiAgICAgICAgICB0aGlzLnRlbXBsYXRlRW5naW5lLmludmFsaWRhdGVDYWNoZShmaWxlLnBhdGgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBvbnVubG9hZCgpOiB2b2lkIHtcbiAgICAvLyBDbGVhbnVwIGhhbmRsZWQgYnkgRGFzaGJvYXJkVmlldy5vbkNsb3NlKClcbiAgfVxuXG4gIC8vIC0tLSBWaWV3IE1hbmFnZW1lbnQgLS0tXG5cbiAgYXN5bmMgYWN0aXZhdGVEYXNoYm9hcmQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuICAgIGxldCBsZWFmID0gd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfT0xFTilbMF07XG5cbiAgICBpZiAoIWxlYWYpIHtcbiAgICAgIGNvbnN0IG5ld0xlYWYgPSB3b3Jrc3BhY2UuZ2V0TGVhZihcInRhYlwiKTtcbiAgICAgIGlmICghbmV3TGVhZikgcmV0dXJuO1xuICAgICAgYXdhaXQgbmV3TGVhZi5zZXRWaWV3U3RhdGUoeyB0eXBlOiBWSUVXX1RZUEVfT0xFTiwgYWN0aXZlOiB0cnVlIH0pO1xuICAgICAgbGVhZiA9IG5ld0xlYWY7XG4gICAgfVxuXG4gICAgYXdhaXQgd29ya3NwYWNlLnJldmVhbExlYWYobGVhZik7XG4gIH1cblxuICByZWZyZXNoRGFzaGJvYXJkKCk6IHZvaWQge1xuICAgIGNvbnN0IGxlYXZlcyA9IHRoaXMuYXBwLndvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX09MRU4pO1xuICAgIGZvciAoY29uc3QgbGVhZiBvZiBsZWF2ZXMpIHtcbiAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXcgYXMgdW5rbm93biBhcyBEYXNoYm9hcmRWaWV3O1xuICAgICAgaWYgKHZpZXcgJiYgdHlwZW9mIHZpZXcucmVuZGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdmlldy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBhY3RpdmF0ZVdvcmtzcGFjZVZpZXcoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgeyB3b3Jrc3BhY2UgfSA9IHRoaXMuYXBwO1xuXG4gICAgLy8gQ2xvc2UgZXhpc3Rpbmcgd29ya3NwYWNlIHZpZXdzXG4gICAgd29ya3NwYWNlLmdldExlYXZlc09mVHlwZShWSUVXX1RZUEVfV09SS1NQQUNFKS5mb3JFYWNoKChsZWFmKSA9PiBsZWFmLmRldGFjaCgpKTtcblxuICAgIC8vIE9wZW4gd29ya3NwYWNlIGluIHRoZSBzYW1lIHRhYiBhcyB0aGUgZGFzaGJvYXJkIGlmIHBvc3NpYmxlXG4gICAgY29uc3QgZGFzaExlYXZlcyA9IHdvcmtzcGFjZS5nZXRMZWF2ZXNPZlR5cGUoVklFV19UWVBFX09MRU4pO1xuICAgIGNvbnN0IHRhcmdldExlYWYgPSBkYXNoTGVhdmVzWzBdID8/IHdvcmtzcGFjZS5nZXRMZWFmKFwidGFiXCIpO1xuICAgIGlmICghdGFyZ2V0TGVhZikgcmV0dXJuO1xuXG4gICAgYXdhaXQgdGFyZ2V0TGVhZi5zZXRWaWV3U3RhdGUoeyB0eXBlOiBWSUVXX1RZUEVfV09SS1NQQUNFLCBhY3RpdmU6IHRydWUgfSk7XG4gICAgYXdhaXQgd29ya3NwYWNlLnJldmVhbExlYWYodGFyZ2V0TGVhZik7XG4gIH1cblxuICBhY3RpdmF0ZURhc2hib2FyZFZpZXcoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZURhc2hib2FyZCgpO1xuICB9XG5cbiAgLy8gLS0tIFRlbXBsYXRlIFJlZ2lzdHJ5OiBQb3N0LVByb2Nlc3NvciAtLS1cblxuICBwcml2YXRlIHJlZ2lzdGVyVGVtcGxhdGVQb3N0UHJvY2Vzc29yKCk6IHZvaWQge1xuICAgIC8vIFRyYWNrIHdoaWNoIGZpbGVzIHdlJ3ZlIGFscmVhZHkgcmVuZGVyZWQgdGVtcGxhdGVzIGZvciBpbiB0aGUgY3VycmVudFxuICAgIC8vIHZpZXcgY3ljbGUsIHRvIGF2b2lkIGR1cGxpY2F0ZSByZW5kZXJpbmcgYWNyb3NzIG11bHRpcGxlIHNlY3Rpb25zLlxuICAgIGNvbnN0IHJlbmRlcmVkRmlsZXMgPSBuZXcgV2Vha1NldDxIVE1MRWxlbWVudD4oKTtcblxuICAgIHRoaXMucmVnaXN0ZXJNYXJrZG93blBvc3RQcm9jZXNzb3IoYXN5bmMgKGVsLCBjdHgpID0+IHtcbiAgICAgIC8vIEZpbmQgdGhlIGZpbGUgYmVpbmcgcmVuZGVyZWRcbiAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoY3R4LnNvdXJjZVBhdGgpO1xuICAgICAgaWYgKCFmaWxlIHx8ICEoZmlsZSBpbnN0YW5jZW9mIFRGaWxlKSkgcmV0dXJuO1xuXG4gICAgICAvLyBDaGVjayBmcm9udG1hdHRlciBmb3IgYW4gXCJhY3Rpdml0eVwiIGZpZWxkXG4gICAgICBjb25zdCBjYWNoZSA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZ2V0RmlsZUNhY2hlKGZpbGUpO1xuICAgICAgY29uc3QgYWN0aXZpdHlUeXBlID0gY2FjaGU/LmZyb250bWF0dGVyPy5hY3Rpdml0eSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICBpZiAoIWFjdGl2aXR5VHlwZSkgcmV0dXJuO1xuXG4gICAgICAvLyBMb29rIHVwIHRlbXBsYXRlIGluIHRoZSByZWdpc3RyeVxuICAgICAgY29uc3QgZW50cnkgPSB0aGlzLnRlbXBsYXRlRW5naW5lLmZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGUpO1xuICAgICAgaWYgKCFlbnRyeSkgcmV0dXJuO1xuXG4gICAgICAvLyBBdm9pZCBkdXBsaWNhdGUgcmVuZGVyaW5nOiBjaGVjayB0aGUgcGFyZW50IHByZXZpZXcgY29udGFpbmVyXG4gICAgICBjb25zdCBwcmV2aWV3U2l6ZXIgPSBlbC5jbG9zZXN0KFwiLm1hcmtkb3duLXByZXZpZXctc2l6ZXJcIikgPz8gZWwucGFyZW50RWxlbWVudDtcbiAgICAgIGlmIChwcmV2aWV3U2l6ZXIgJiYgcmVuZGVyZWRGaWxlcy5oYXMocHJldmlld1NpemVyIGFzIEhUTUxFbGVtZW50KSkgcmV0dXJuO1xuICAgICAgaWYgKHByZXZpZXdTaXplcikgcmVuZGVyZWRGaWxlcy5hZGQocHJldmlld1NpemVyIGFzIEhUTUxFbGVtZW50KTtcblxuICAgICAgLy8gQ2xlYXIgZGVmYXVsdCByZW5kZXJlZCBjb250ZW50IGFuZCBpbmplY3QgdGVtcGxhdGVcbiAgICAgIGVsLmVtcHR5KCk7XG4gICAgICBlbC5hZGRDbGFzcyhcIm9sZW4tdGVtcGxhdGUtaG9zdFwiKTtcblxuICAgICAgY29uc3QgY29udGFpbmVyID0gZWwuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiIH0pO1xuXG4gICAgICBhd2FpdCB0aGlzLnRlbXBsYXRlRW5naW5lLnJlbmRlcihlbnRyeS50ZW1wbGF0ZVBhdGgsIGZpbGUsIGNvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICAvLyBBbHNvIGhhbmRsZSBmaWxlLW9wZW4gZm9yIG5vdGVzIHdpdGggb25seSBmcm9udG1hdHRlciAobm8gYm9keSBzZWN0aW9ucylcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXG4gICAgICB0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJhY3RpdmUtbGVhZi1jaGFuZ2VcIiwgYXN5bmMgKGxlYWYpID0+IHtcbiAgICAgICAgaWYgKCFsZWFmKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHZpZXcgPSBsZWFmLnZpZXc7XG4gICAgICAgIGlmICghKHZpZXcgaW5zdGFuY2VvZiBNYXJrZG93blZpZXcpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmlsZSA9IHZpZXcuZmlsZTtcbiAgICAgICAgaWYgKCFmaWxlKSByZXR1cm47XG5cbiAgICAgICAgLy8gU21hbGwgZGVsYXkgdG8gbGV0IG1ldGFkYXRhIGNhY2hlIHBvcHVsYXRlXG4gICAgICAgIGF3YWl0IHNsZWVwKDEwMCk7XG5cbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgYWN0aXZpdHlUeXBlID0gY2FjaGU/LmZyb250bWF0dGVyPy5hY3Rpdml0eSBhcyBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghYWN0aXZpdHlUeXBlKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZW50cnkgPSB0aGlzLnRlbXBsYXRlRW5naW5lLmZpbmRUZW1wbGF0ZShhY3Rpdml0eVR5cGUpO1xuICAgICAgICBpZiAoIWVudHJ5KSByZXR1cm47XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgYSB0ZW1wbGF0ZSBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlcmVkIGJ5IHRoZSBwb3N0LXByb2Nlc3NvclxuICAgICAgICBjb25zdCBjb250ZW50RWwgPSB2aWV3LmNvbnRhaW5lckVsLnF1ZXJ5U2VsZWN0b3IoXCIubWFya2Rvd24tcmVhZGluZy12aWV3IC5tYXJrZG93bi1wcmV2aWV3LXNpemVyXCIpO1xuICAgICAgICBpZiAoY29udGVudEVsPy5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tdGVtcGxhdGUtcm9vdFwiKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIElmIGluIHJlYWRpbmcgbW9kZSBidXQgbm8gdGVtcGxhdGUgd2FzIGluamVjdGVkIChlbXB0eSBib2R5IG5vdGUpLFxuICAgICAgICAvLyBpbmplY3QgaW50byB0aGUgcHJldmlldyBjb250ZW50XG4gICAgICAgIGlmIChjb250ZW50RWwpIHtcbiAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm9sZW4tdGVtcGxhdGUtcm9vdFwiO1xuICAgICAgICAgIGNvbnRlbnRFbC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgYXdhaXQgdGhpcy50ZW1wbGF0ZUVuZ2luZS5yZW5kZXIoZW50cnkudGVtcGxhdGVQYXRoLCBmaWxlLCBjb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQ2FsZW5kYXIgUGx1Z2luIEludGVncmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJDYWxlbmRhclBsdWdpblNvdXJjZSgpOiB2b2lkIHtcbiAgICAvLyBMaXN0ZW4gZm9yIHRoZSBDYWxlbmRhciBwbHVnaW4ncyBcImNhbGVuZGFyOm9wZW5cIiBldmVudFxuICAgIC8vIGFuZCBpbmplY3QgT2xlbidzIGFjdGl2aXR5IGNvbXBsZXRpb24gZGF0YSBhcyBjb2xvcmVkIGRvdHNcbiAgICAodGhpcy5hcHAud29ya3NwYWNlIGFzIGFueSkub24oXCJjYWxlbmRhcjpvcGVuXCIsIChzb3VyY2VzOiBhbnlbXSkgPT4ge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZXMpKSByZXR1cm47XG5cbiAgICAgIHNvdXJjZXMucHVzaCh7XG4gICAgICAgIGdldERhaWx5TWV0YWRhdGE6IChkYXRlOiBhbnkpID0+IHtcbiAgICAgICAgICBjb25zdCBkYXRlU3RyID0gZGF0ZS5mb3JtYXQ/LihcIllZWVktTU0tRERcIikgPz8gXCJcIjtcbiAgICAgICAgICBpZiAoIWRhdGVTdHIpIHJldHVybiB7fTtcblxuICAgICAgICAgIC8vIENvdW50IGNvbXBsZXRpb25zIGZvciB0aGlzIGRhdGVcbiAgICAgICAgICBsZXQgY29tcGxldGlvbnMgPSAwO1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcykge1xuICAgICAgICAgICAgaWYgKCFhY3Rpdml0eS5lbmFibGVkKSBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG4gICAgICAgICAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlcy5maW5kKFxuICAgICAgICAgICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGZpbGUpIHtcbiAgICAgICAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgICAgICAgaWYgKGNhY2hlPy5mcm9udG1hdHRlcj8uW2FjdGl2aXR5LnByb3BlcnR5XSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zKys7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcy5hZGQoYWN0aXZpdHkuY2F0ZWdvcnkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbXBsZXRpb25zID09PSAwKSByZXR1cm4ge307XG5cbiAgICAgICAgICAvLyBSZXR1cm4gZG90cyBjb2xvcmVkIGJ5IGRvbWluYW50IGNhdGVnb3J5XG4gICAgICAgICAgY29uc3QgZG90cyA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICAgICAgICAgIGRvdHMucHVzaCh7XG4gICAgICAgICAgICAgIGNvbG9yOiB0aGlzLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdCBhcyBrZXlvZiB0eXBlb2YgdGhpcy5zZXR0aW5ncy5jYXRlZ29yeUNvbG9yc10gPz8gXCIjOTI4ZDg1XCIsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogYG9sZW4tY2FsLWRvdC0ke2NhdH1gLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRvdHMsXG4gICAgICAgICAgICBjbGFzc2VzOiBjb21wbGV0aW9ucyA+PSB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQpLmxlbmd0aFxuICAgICAgICAgICAgICA/IFwib2xlbi1jYWwtY29tcGxldGVcIlxuICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRXZWVrbHlNZXRhZGF0YTogKCkgPT4gKHt9KSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIFF1aWNrIFRhc2sgRGlhbG9nIC0tLVxuXG4gIHByaXZhdGUgc2hvd1F1aWNrVGFza0RpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWwuY2xhc3NOYW1lID0gXCJvbGVuLXF1aWNrLXRhc2stbW9kYWxcIjtcbiAgICBtb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLWJhY2tkcm9wXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLXNoZWV0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stdGl0bGVcIj5BZGQgUXVpY2sgVGFzazwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1pbnB1dFwiIHBsYWNlaG9sZGVyPVwiVGFzayBuYW1lXCIgYXV0b2ZvY3VzIC8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stcm93XCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stdGltZVwiIC8+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cIm9sZW4tcXVpY2stdGFzay1kdXJhdGlvblwiIHBsYWNlaG9sZGVyPVwiRHVyYXRpb24gKG1pbilcIiBtaW49XCI1XCIgbWF4PVwiNDgwXCIgdmFsdWU9XCIzMFwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib2xlbi1xdWljay10YXNrLWFjdGlvbnNcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwib2xlbi1xdWljay10YXNrLWNhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJvbGVuLXF1aWNrLXRhc2stYWRkXCI+QWRkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gICAgY29uc3QgYmFja2Ryb3AgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1iYWNrZHJvcFwiKSBhcyBIVE1MRWxlbWVudDtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1jYW5jZWxcIikgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgYWRkQnRuID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stYWRkXCIpIGFzIEhUTUxFbGVtZW50O1xuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVpY2stdGFzay1pbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbnN0IHRpbWVJbnB1dCA9IG1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1xdWljay10YXNrLXRpbWVcIikgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBkdXJhdGlvbklucHV0ID0gbW9kYWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXF1aWNrLXRhc2stZHVyYXRpb25cIikgYXMgSFRNTElucHV0RWxlbWVudDtcblxuICAgIGNvbnN0IGNsb3NlID0gKCkgPT4gbW9kYWwucmVtb3ZlKCk7XG5cbiAgICBiYWNrZHJvcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2UpO1xuXG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB0aXRsZSA9IHRpdGxlSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgaWYgKCF0aXRsZSkge1xuICAgICAgICBuZXcgTm90aWNlKFwiUGxlYXNlIGVudGVyIGEgdGFzayBuYW1lXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5vdyA9IHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZVxuICAgICAgICA/IG5ldyBEYXRlKHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICAgIHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBxdC0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRhdGU6IHRvZGF5LFxuICAgICAgICB0aW1lOiB0aW1lSW5wdXQudmFsdWUgfHwgdW5kZWZpbmVkLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VJbnQoZHVyYXRpb25JbnB1dC52YWx1ZSkgfHwgMzAsXG4gICAgICAgIGRvbmU6IGZhbHNlLFxuICAgICAgfSk7XG5cbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICB0aGlzLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICAgIG5ldyBOb3RpY2UoYFxcdTI2QTEgUXVpY2sgdGFzayBhZGRlZDogJHt0aXRsZX1gKTtcbiAgICAgIGNsb3NlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBGb2N1cyB0aGUgaW5wdXRcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRpdGxlSW5wdXQuZm9jdXMoKSwgNTApO1xuICB9XG5cbiAgLy8gLS0tIFNldHRpbmdzIFBlcnNpc3RlbmNlIC0tLVxuXG4gIGFzeW5jIHNhdmVTZXR0aW5ncygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCB0aGlzLnNhdmVEYXRhKHRoaXMuc2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gLS0tIE1pZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGFzeW5jIG1pZ3JhdGVGcm9tVHJhY2tIYWJpdFJhbmsoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGFQYXRoID0gXCIub2JzaWRpYW4vcGx1Z2lucy9teXRob2xvZ2ljYWwtaGFiaXQtdHJhY2tlci9kYXRhLmpzb25cIjtcbiAgICAgIGNvbnN0IGV4aXN0cyA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LmFkYXB0ZXIuZXhpc3RzKGRhdGFQYXRoKTtcblxuICAgICAgaWYgKCFleGlzdHMpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5taWdyYXRlZCA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmF3ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci5yZWFkKGRhdGFQYXRoKTtcbiAgICAgIGNvbnN0IGRhdGE6IFRyYWNrSGFiaXRSYW5rRGF0YSA9IEpTT04ucGFyc2UocmF3KTtcblxuICAgICAgLy8gTWlncmF0ZSBib3NzIHN0YXRlXG4gICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyID0gZGF0YS5jdXJyZW50VGllciA/PyAxO1xuICAgICAgdGhpcy5zZXR0aW5ncy5ib3NzTWF4SFAgPSBkYXRhLmJvc3NNYXhIUCA/PyAzNTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IGRhdGEuYm9zc0N1cnJlbnRIUCA/PyAzNTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuY29uc2VjdXRpdmVQZXJmZWN0V2Vla3MgPSBkYXRhLmNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzID8/IDA7XG4gICAgICB0aGlzLnNldHRpbmdzLmluVGFydGFydXMgPSBkYXRhLmluVGFydGFydXMgPz8gZmFsc2U7XG4gICAgICB0aGlzLnNldHRpbmdzLnRhcnRhcnVzUGVuYW5jZVRhc2tzID0gZGF0YS50YXJ0YXJ1c1BlbmFuY2VUYXNrcyA/PyBbXTtcbiAgICAgIHRoaXMuc2V0dGluZ3MudGFydGFydXNTdGFydERhdGUgPSBkYXRhLnRhcnRhcnVzU3RhcnREYXRlID8/IG51bGw7XG4gICAgICB0aGlzLnNldHRpbmdzLmZhaWxlZFRocmVzaG9sZERheXMgPSBkYXRhLmZhaWxlZFRocmVzaG9sZERheXMgPz8gMDtcblxuICAgICAgLy8gTWlncmF0ZSB0ZW1wbGUgdGFza3NcbiAgICAgIGlmIChkYXRhLnRlbXBsZVRhc2tzICYmIGRhdGEudGVtcGxlVGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLnRlbXBsZVRhc2tzID0gZGF0YS50ZW1wbGVUYXNrcztcbiAgICAgIH1cblxuICAgICAgLy8gTWlncmF0ZSByZXdhcmRzXG4gICAgICB0aGlzLnNldHRpbmdzLnBlbmRpbmdSZXdhcmRzID0gZGF0YS5wZW5kaW5nUmV3YXJkcyA/PyBbXTtcbiAgICAgIHRoaXMuc2V0dGluZ3MuY2xhaW1lZFJld2FyZHMgPSAoZGF0YS5jbGFpbWVkUmV3YXJkcyA/PyBbXSkgYXMgYW55O1xuICAgICAgdGhpcy5zZXR0aW5ncy5iYW5rZWRSZXdhcmRzID0gZGF0YS5iYW5rZWRSZXdhcmRzID8/IFtdO1xuXG4gICAgICAvLyBNaWdyYXRlIHN5c3RlbSBzdGF0ZVxuICAgICAgdGhpcy5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9IChkYXRhLnN5c3RlbVN0YXRlIGFzIFwiYWN0aXZlXCIgfCBcInBhdXNlZFwiKSA/PyBcImFjdGl2ZVwiO1xuICAgICAgdGhpcy5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IGRhdGEucGF1c2VTdGFydFRpbWUgPz8gbnVsbDtcbiAgICAgIHRoaXMuc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lID0gZGF0YS50b3RhbFBhdXNlZFRpbWUgPz8gMDtcbiAgICAgIHRoaXMuc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA9IGRhdGEuc2ltdWxhdGVkRGF0ZSA/PyBudWxsO1xuXG4gICAgICAvLyBNaWdyYXRlIGhlcm8gYmFja2dyb3VuZFxuICAgICAgaWYgKGRhdGEuZGFzaGJvYXJkQmdJbWFnZSkge1xuICAgICAgICB0aGlzLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kID0gZGF0YS5kYXNoYm9hcmRCZ0ltYWdlO1xuICAgICAgfVxuXG4gICAgICAvLyBNaWdyYXRlIGFjdGl2aXRpZXMgZnJvbSBlbmFibGVkQWN0aXZpdGllcyArIGN1c3RvbUhhYml0c1xuICAgICAgdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzID0gdGhpcy5taWdyYXRlQWN0aXZpdGllcyhkYXRhKTtcblxuICAgICAgdGhpcy5zZXR0aW5ncy5taWdyYXRlZCA9IHRydWU7XG4gICAgICBhd2FpdCB0aGlzLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgICBuZXcgTm90aWNlKFwiT2xlbjogU3VjY2Vzc2Z1bGx5IG1pZ3JhdGVkIGRhdGEgZnJvbSBNeXRob2xvZ2ljYWwgSGFiaXQgVHJhY2tlclwiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJPbGVuIG1pZ3JhdGlvbiBlcnJvcjpcIiwgZXJyKTtcbiAgICAgIHRoaXMuc2V0dGluZ3MubWlncmF0ZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5zYXZlU2V0dGluZ3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1pZ3JhdGVBY3Rpdml0aWVzKGRhdGE6IFRyYWNrSGFiaXRSYW5rRGF0YSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IHJlc3VsdDogQWN0aXZpdHlDb25maWdbXSA9IFsuLi5ERUZBVUxUX0FDVElWSVRJRVNdO1xuXG4gICAgLy8gQXBwbHkgZW5hYmxlZC9kaXNhYmxlZCBzdGF0ZVxuICAgIGlmIChkYXRhLmVuYWJsZWRBY3Rpdml0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBrZXkgPSBhY3Rpdml0eS5wcm9wZXJ0eS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoa2V5IGluIGRhdGEuZW5hYmxlZEFjdGl2aXRpZXMpIHtcbiAgICAgICAgICBhY3Rpdml0eS5lbmFibGVkID0gZGF0YS5lbmFibGVkQWN0aXZpdGllc1trZXldID8/IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBvdmVycmlkZXNcbiAgICBpZiAoZGF0YS5hY3Rpdml0eU92ZXJyaWRlcykge1xuICAgICAgZm9yIChjb25zdCBvdmVycmlkZSBvZiBkYXRhLmFjdGl2aXR5T3ZlcnJpZGVzKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gcmVzdWx0LmZpbmQoKGEpID0+IGEuaWQgPT09IG92ZXJyaWRlLmlkKTtcbiAgICAgICAgaWYgKGFjdGl2aXR5KSB7XG4gICAgICAgICAgaWYgKG92ZXJyaWRlLndlZWtseVRhcmdldCAhPT0gdW5kZWZpbmVkKSBhY3Rpdml0eS53ZWVrbHlUYXJnZXQgPSBvdmVycmlkZS53ZWVrbHlUYXJnZXQ7XG4gICAgICAgICAgaWYgKG92ZXJyaWRlLmRhbWFnZVBlckNvbXBsZXRpb24gIT09IHVuZGVmaW5lZCkgYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvbiA9IG92ZXJyaWRlLmRhbWFnZVBlckNvbXBsZXRpb247XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgY3VzdG9tIGhhYml0c1xuICAgIGlmIChkYXRhLmN1c3RvbUhhYml0cykge1xuICAgICAgZm9yIChjb25zdCBoYWJpdCBvZiBkYXRhLmN1c3RvbUhhYml0cykge1xuICAgICAgICAvLyBBdm9pZCBkdXBsaWNhdGVzXG4gICAgICAgIGlmIChyZXN1bHQuc29tZSgoYSkgPT4gYS5pZCA9PT0gaGFiaXQuaWQpKSBjb250aW51ZTtcblxuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgaWQ6IGhhYml0LmlkLFxuICAgICAgICAgIG5hbWU6IGhhYml0Lm5hbWUsXG4gICAgICAgICAgZW1vamk6IGhhYml0LmVtb2ppID8/IFwiXFx1MkI1MFwiLFxuICAgICAgICAgIGNhdGVnb3J5OiBcInNwaXJpdFwiLCAvLyBEZWZhdWx0IGN1c3RvbSBoYWJpdHMgdG8gc3Bpcml0XG4gICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICBmb2xkZXI6IGhhYml0LmZvbGRlcixcbiAgICAgICAgICBwcm9wZXJ0eTogaGFiaXQucHJvcGVydHksXG4gICAgICAgICAgZGFtYWdlUGVyQ29tcGxldGlvbjogaGFiaXQuZGFtYWdlUGVyQ29tcGxldGlvbiA/PyAxLFxuICAgICAgICAgIHdlZWtseVRhcmdldDogaGFiaXQud2Vla2x5VGFyZ2V0ID8/IDMsXG4gICAgICAgICAgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgICAgICAgaGFzV29ya3NwYWNlOiBmYWxzZSxcbiAgICAgICAgICBwcmlvcml0eTogNSxcbiAgICAgICAgICBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgICAgICAgIHByZWZlcnJlZFRpbWU6IFwiYW55dGltZVwiLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmUtdGltZSBtaWdyYXRpb246IHJlbmFtZSBsZWdhY3kgc2Vzc2lvbiBmaWVsZHMgXHUyMTkyIHdvcmtzcGFjZSxcbiAgICogYW5kIG1vdmUgdGVtcGxhdGVSZWdpc3RyeSBlbnRyaWVzIGludG8gcGVyLWFjdGl2aXR5IHdvcmtzcGFjZVRlbXBsYXRlLlxuICAgKi9cbiAgcHJpdmF0ZSBhc3luYyBtaWdyYXRlU2Vzc2lvblRvV29ya3NwYWNlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHJhdyA9IHRoaXMuc2V0dGluZ3MgYXMgYW55O1xuICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAvLyBNaWdyYXRlIHRvcC1sZXZlbCBzZXR0aW5ncyBmaWVsZHNcbiAgICBpZiAocmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzICYmICFyYXcud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcykge1xuICAgICAgcmF3LndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMgPSByYXcuc2Vzc2lvbkNvbXBsZXRpb25TdGF0ZXM7XG4gICAgICBkZWxldGUgcmF3LnNlc3Npb25Db21wbGV0aW9uU3RhdGVzO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChyYXcuYWN0aXZlU2Vzc2lvbiAhPT0gdW5kZWZpbmVkICYmIHJhdy5hY3RpdmVXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmF3LmFjdGl2ZVdvcmtzcGFjZSA9IHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgZGVsZXRlIHJhdy5hY3RpdmVTZXNzaW9uO1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSBwZXItYWN0aXZpdHkgZmllbGRzXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMpIHtcbiAgICAgIGNvbnN0IGEgPSBhY3Rpdml0eSBhcyBhbnk7XG4gICAgICBpZiAoYS5oYXNTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgYS5oYXNXb3Jrc3BhY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhLmhhc1dvcmtzcGFjZSA9IGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgZGVsZXRlIGEuaGFzU2Vzc2lvbjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoYS5zZXNzaW9uRm9sZGVyICE9PSB1bmRlZmluZWQgJiYgYS53b3Jrc3BhY2VGb2xkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhLndvcmtzcGFjZUZvbGRlciA9IGEuc2Vzc2lvbkZvbGRlcjtcbiAgICAgICAgZGVsZXRlIGEuc2Vzc2lvbkZvbGRlcjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSBhY3RpdmVXb3Jrc3BhY2UgaW5uZXIgZmllbGRzXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlKSB7XG4gICAgICBjb25zdCBhdyA9IHRoaXMuc2V0dGluZ3MuYWN0aXZlV29ya3NwYWNlIGFzIGFueTtcbiAgICAgIGlmIChhdy5oYXNTZXNzaW9uICE9PSB1bmRlZmluZWQgJiYgYXcuaGFzV29ya3NwYWNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgYXcuaGFzV29ya3NwYWNlID0gYXcuaGFzU2Vzc2lvbjtcbiAgICAgICAgZGVsZXRlIGF3Lmhhc1Nlc3Npb247XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGF3LnNlc3Npb25Gb2xkZXIgIT09IHVuZGVmaW5lZCAmJiBhdy53b3Jrc3BhY2VGb2xkZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhdy53b3Jrc3BhY2VGb2xkZXIgPSBhdy5zZXNzaW9uRm9sZGVyO1xuICAgICAgICBkZWxldGUgYXcuc2Vzc2lvbkZvbGRlcjtcbiAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWlncmF0ZSB0ZW1wbGF0ZVJlZ2lzdHJ5IFx1MjE5MiBwZXItYWN0aXZpdHkgd29ya3NwYWNlVGVtcGxhdGVcbiAgICBpZiAocmF3LnRlbXBsYXRlUmVnaXN0cnkgJiYgQXJyYXkuaXNBcnJheShyYXcudGVtcGxhdGVSZWdpc3RyeSkgJiYgcmF3LnRlbXBsYXRlUmVnaXN0cnkubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiByYXcudGVtcGxhdGVSZWdpc3RyeSkge1xuICAgICAgICBpZiAoIWVudHJ5LmVuYWJsZWQgfHwgIWVudHJ5LnRlbXBsYXRlUGF0aCkgY29udGludWU7XG4gICAgICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGVudHJ5LmFjdGl2aXR5VHlwZSk7XG4gICAgICAgIGlmIChhY3Rpdml0eSAmJiAhYWN0aXZpdHkud29ya3NwYWNlVGVtcGxhdGUpIHtcbiAgICAgICAgICBhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSA9IGVudHJ5LnRlbXBsYXRlUGF0aDtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGVsZXRlIHJhdy50ZW1wbGF0ZVJlZ2lzdHJ5O1xuICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGNoYW5nZWQpIHtcbiAgICAgIGF3YWl0IHRoaXMuc2F2ZVNldHRpbmdzKCk7XG4gICAgfVxuICB9XG59XG5cbi8vIFV0aWxpdHlcbmZ1bmN0aW9uIHNsZWVwKG1zOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDb25zdGFudHMgJiBEZWZhdWx0c1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHtcbiAgQm9zc0RlZmluaXRpb24sXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBPbGVuU2V0dGluZ3MsXG4gIERldkNvbmZpZyxcbiAgRWx5c2lhblRoZW1lLFxuICBXb3Jrc3BhY2VDb21wbGV0aW9uU3RhdGUsXG4gIENhbGVuZGFyU2V0dGluZ3MsXG59IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8vIC0tLSBWaWV3IFR5cGUgLS0tXG5cbmV4cG9ydCBjb25zdCBWSUVXX1RZUEVfT0xFTiA9IFwib2xlbi1kYXNoYm9hcmQtdmlld1wiO1xuZXhwb3J0IGNvbnN0IFZJRVdfVFlQRV9XT1JLU1BBQ0UgPSBcIm9sZW4td29ya3NwYWNlLXZpZXdcIjtcblxuLy8gLS0tIEJvc3MgRGVmaW5pdGlvbnMgKDEzIHRpZXJzKSAtLS1cblxuZXhwb3J0IGNvbnN0IEJPU1NFUzogQm9zc0RlZmluaXRpb25bXSA9IFtcbiAgeyB0aWVyOiAxLCBuYW1lOiBcIlNoYWRvdyBvZiBBcGF0aHlcIiwgcmFuazogXCJEb29tc2Nyb2xsZXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHdlaWdodCBvZiBpbmVydGlhIHRoYXQga2VlcHMgeW91IHNjcm9sbGluZyBpbnN0ZWFkIG9mIHN0YXJ0aW5nXCIsIGxvcmU6IFwiQm9ybiBmcm9tIGZvcmdvdHRlbiBwcm9taXNlcyBhbmQgdW5vcGVuZWQgZ3ltIGJhZ3MsIHRoZSBTaGFkb3cgZmVlZHMgb24gcG90ZW50aWFsIHVucmVhbGl6ZWQuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDEuMVwiIH0sXG4gIHsgdGllcjogMiwgbmFtZTogXCJTaXJlbidzIENhbGxcIiwgcmFuazogXCJBcm1jaGFpciBHZW5lcmFsXCIsIGRlc2NyaXB0aW9uOiBcIkRpc3RyYWN0aW9uJ3Mgc3dlZXQgc29uZyB0aGF0IHB1bGxzIGZvY3VzIGZyb20gY29tbWl0dGVkIHdvcmtcIiwgbG9yZTogXCJTaGUgc2luZ3Mgb2YgZWFzaWVyIHBhdGhzLCBvZiBqdXN0IG9uZSBtb3JlIHZpZGVvLCBvZiBzdGFydGluZyB0b21vcnJvdyBpbnN0ZWFkLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjJcIiB9LFxuICB7IHRpZXI6IDMsIG5hbWU6IFwiSHlkcmEgb2YgSGFiaXRzXCIsIHJhbms6IFwiQXBwcmVudGljZVwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29tcGxleGl0eSBvZiBtYW5hZ2luZyBtdWx0aXBsZSByb3V0aW5lcyBzaW11bHRhbmVvdXNseVwiLCBsb3JlOiBcIkN1dCBvbmUgaGVhZCBhbmQgdHdvIGdyb3cgYmFjay4gRWFjaCBoYWJpdCBkZW1hbmRzIGl0cyBvd24gYXR0ZW50aW9uLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjNcIiB9LFxuICB7IHRpZXI6IDQsIG5hbWU6IFwiTWlub3RhdXIncyBNYXplXCIsIHJhbms6IFwiQ2l0aXplblwiLCBkZXNjcmlwdGlvbjogXCJUaGUgY29uZnVzaW9uIGFuZCByb3V0aW5lIHRoYXQgdHJhcHMgZXZlbiBkZWRpY2F0ZWQgcHJhY3RpdGlvbmVyc1wiLCBsb3JlOiBcIkxvc3QgaW4gY29ycmlkb3JzIG9mIGhhYml0LCB0aGUgcGF0aCBmb3J3YXJkIGlzIG5ldmVyIGNsZWFyLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAxLjdcIiB9LFxuICB7IHRpZXI6IDUsIG5hbWU6IFwiTWVkdXNhJ3MgR2F6ZVwiLCByYW5rOiBcIlNjaG9sYXJcIiwgZGVzY3JpcHRpb246IFwiVGhlIHBhcmFseXNpcyB0aGF0IGNvbWVzIGZyb20gb3ZlcnRoaW5raW5nIG9yIGZlYXIgb2YgZmFpbHVyZVwiLCBsb3JlOiBcIk9uZSBnbGFuY2UgYW5kIHlvdSBhcmUgZnJvemVuLCB1bmFibGUgdG8gYWN0LCB1bmFibGUgdG8gbW92ZS5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMS45XCIgfSxcbiAgeyB0aWVyOiA2LCBuYW1lOiBcIk5lbWVhbiBMaW9uXCIsIHJhbms6IFwiU2FtdXJhaVwiLCBkZXNjcmlwdGlvbjogXCJTZWVtaW5nbHkgaW52dWxuZXJhYmxlIG9ic3RhY2xlcyB0aGF0IHJlcXVpcmUgcGVyc2lzdGVudCBlZmZvcnRcIiwgbG9yZTogXCJJdHMgaGlkZSBjYW5ub3QgYmUgcGllcmNlZCBieSBvcmRpbmFyeSBtZWFucy4gT25seSBkaXNjaXBsaW5lIGN1dHMgdGhyb3VnaC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4xXCIgfSxcbiAgeyB0aWVyOiA3LCBuYW1lOiBcIkNoaW1lcmFcIiwgcmFuazogXCJUZW1wbGFyXCIsIGRlc2NyaXB0aW9uOiBcIk11bHRpLWhlYWRlZCBiZWFzdCByZXF1aXJpbmcgYmFsYW5jZWQgYXR0ZW50aW9uIGFjcm9zcyBhbGwgZG9tYWluc1wiLCBsb3JlOiBcIkxpb24sIGdvYXQsIGFuZCBzZXJwZW50IFx1MjAxNCBlYWNoIGhlYWQgZGVtYW5kcyBtYXN0ZXJ5IG9mIGEgZGlmZmVyZW50IGFydC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi4zXCIgfSxcbiAgeyB0aWVyOiA4LCBuYW1lOiBcIkNlcmJlcnVzXCIsIHJhbms6IFwiU3RvaWNcIiwgZGVzY3JpcHRpb246IFwiR3VhcmRpYW4gb2YgdHJhbnNmb3JtYXRpb24gdGVzdGluZyBpZiBoYWJpdHMgaGF2ZSBiZWNvbWUgaWRlbnRpdHlcIiwgbG9yZTogXCJUaHJlZSBoZWFkcywgdGhyZWUgdGVzdHMuIFBhc3QgdGhlIGdhdGUgbGllcyB0cmFuc2Zvcm1hdGlvbi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi41XCIgfSxcbiAgeyB0aWVyOiA5LCBuYW1lOiBcIlNjeWxsYSAmIENoYXJ5YmRpc1wiLCByYW5rOiBcIk9seW1waWFuXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSBpbXBvc3NpYmxlIGNob2ljZSBiZXR3ZWVuIGNvbXBldGluZyBwcmlvcml0aWVzXCIsIGxvcmU6IFwiQmV0d2VlbiB0aGUgcm9jayBhbmQgdGhlIHdoaXJscG9vbCwgYm90aCBtdXN0IHNvbWVob3cgYmUgaG9ub3JlZC5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMi43XCIgfSxcbiAgeyB0aWVyOiAxMCwgbmFtZTogXCJUaGUgRnVyaWVzXCIsIHJhbms6IFwiU2FnZVwiLCBkZXNjcmlwdGlvbjogXCJJbnRlcm5hbCB2b2ljZXMgb2YgZ3VpbHQgYW5kIHNoYW1lIGF0dGFja2luZyBldmVuIHRoZSBzdWNjZXNzZnVsXCIsIGxvcmU6IFwiVGhleSB3aGlzcGVyIHlvdXIgZmFpbHVyZXMsIHJlbWluZCB5b3Ugb2YgZXZlcnkgc2tpcCwgZXZlcnkgd2Vha25lc3MuXCIsIGhwRm9ybXVsYTogXCJ3ZWVrbHlUYXJnZXQgXHUwMEQ3IDIuOVwiIH0sXG4gIHsgdGllcjogMTEsIG5hbWU6IFwiVHlwaG9uXCIsIHJhbms6IFwiVGl0YW5cIiwgZGVzY3JpcHRpb246IFwiVGhlIGZvcmNlIG9mIGNoYW9zIHRocmVhdGVuaW5nIHRvIHVuZG8gYWxsIHByb2dyZXNzXCIsIGxvcmU6IFwiRmF0aGVyIG9mIGFsbCBtb25zdGVycywgaGUgc2Vla3MgdG8gcmV0dXJuIHlvdSB0byB0aGUgYmVnaW5uaW5nLlwiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjFcIiB9LFxuICB7IHRpZXI6IDEyLCBuYW1lOiBcIktyb25vc1wiLCByYW5rOiBcIkFyY2hvblwiLCBkZXNjcmlwdGlvbjogXCJUaW1lIGl0c2VsZiBhcyBhbiBlbmVteSwgdGVzdGluZyBzdXN0YWluZWQgaW50ZW5zaXR5XCIsIGxvcmU6IFwiVGhlIFRpdGFuIHdobyBkZXZvdXJzIGhpcyBjaGlsZHJlbi4gQ2FuIHlvdSBtYWludGFpbiBhcyB3ZWVrcyBiZWNvbWUgbW9udGhzP1wiLCBocEZvcm11bGE6IFwid2Vla2x5VGFyZ2V0IFx1MDBENyAzLjNcIiB9LFxuICB7IHRpZXI6IDEzLCBuYW1lOiBcIkNoYW9zIFByaW1vcmRpYWxcIiwgcmFuazogXCJNYXN0ZXIgb2YgQWxsXCIsIGRlc2NyaXB0aW9uOiBcIlRoZSB1bHRpbWF0ZSB0ZXN0IG9mIHVuc2hha2VhYmxlIGRpc2NpcGxpbmVcIiwgbG9yZTogXCJCZWZvcmUgY3JlYXRpb24sIGJlZm9yZSBvcmRlciwgb25seSBDaGFvcy4gVG8gbWFzdGVyIGl0IGlzIHRvIG1hc3RlciB5b3Vyc2VsZi5cIiwgaHBGb3JtdWxhOiBcIndlZWtseVRhcmdldCBcdTAwRDcgMy42XCIgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBSQU5LX1RJRVJfQ09MT1JTOiBSZWNvcmQ8bnVtYmVyLCBzdHJpbmc+ID0ge1xuICAxOiBcIiM2QjcyODBcIiwgMjogXCIjRUY0NDQ0XCIsIDM6IFwiI0Y1OUUwQlwiLCA0OiBcIiMxMEI5ODFcIixcbiAgNTogXCIjM0I4MkY2XCIsIDY6IFwiIzhCNUNGNlwiLCA3OiBcIiNFQzQ4OTlcIiwgODogXCIjRjk3MzE2XCIsXG4gIDk6IFwiIzA2QjZENFwiLCAxMDogXCIjQTg1NUY3XCIsIDExOiBcIiNEQzI2MjZcIiwgMTI6IFwiIzdDM0FFRFwiLFxuICAxMzogXCIjYzlhMjI3XCIsXG59O1xuXG4vLyAtLS0gQ2hhcHRlciBQcm9ncmVzc2lvbiAtLS1cblxuZXhwb3J0IGNvbnN0IENIQVBURVJfTkFNRVM6IFJlY29yZDxudW1iZXIsIHN0cmluZz4gPSB7XG4gIDE6IFwiSW5pdGlhdGVcIixcbiAgMjogXCJFeHBsb3JlclwiLFxuICAzOiBcIkpvdXJuZXltYW5cIixcbiAgNDogXCJBZGVwdFwiLFxuICA1OiBcIlBoaWxvc29waGVyXCIsXG4gIDY6IFwiTWFzdGVyXCIsXG4gIDc6IFwiU2FnZVwiLFxuICA4OiBcIk9yYWNsZVwiLFxuICA5OiBcIlRpdGFuXCIsXG4gIDEwOiBcIk9seW1waWFuXCIsXG59O1xuXG4vLyAtLS0gRHluYW1pYyBUaXRsZSBUYWJsZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBTSU5HTEVfRE9NSU5BTlRfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+PiA9IHtcbiAgYm9keTogICB7IGxpZ2h0OiBcIkF0aGxldGVcIiwgICBtaWQ6IFwiV2FycmlvclwiLCAgaGVhdnk6IFwiVGl0YW5cIiB9LFxuICBtaW5kOiAgIHsgbGlnaHQ6IFwiU3R1ZGVudFwiLCAgIG1pZDogXCJTY2hvbGFyXCIsICBoZWF2eTogXCJQb2x5bWF0aFwiIH0sXG4gIHNwaXJpdDogeyBsaWdodDogXCJTZWVrZXJcIiwgICAgbWlkOiBcIlNhZ2VcIiwgICAgIGhlYXZ5OiBcIk9yYWNsZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVFdPX0NBVEVHT1JZX1RJVExFUzogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgc3RyaW5nPj4gPSB7XG4gIFwiYm9keSttaW5kXCI6ICAgIHsgbGlnaHQ6IFwiRGlzY2lwbGluZWQgVGhpbmtlclwiLCBtaWQ6IFwiUGhpbG9zb3BoZXItS2luZ1wiLCBoZWF2eTogXCJSZW5haXNzYW5jZSBUaXRhblwiIH0sXG4gIFwiYm9keStzcGlyaXRcIjogIHsgbGlnaHQ6IFwiQXNjZXRpY1wiLCAgICAgICAgICAgICBtaWQ6IFwiVGVtcGxhclwiLCAgICAgICAgICBoZWF2eTogXCJPbHltcGlhbiBNb25rXCIgfSxcbiAgXCJtaW5kK3NwaXJpdFwiOiAgeyBsaWdodDogXCJDb250ZW1wbGF0aXZlXCIsICAgICAgIG1pZDogXCJNeXN0aWMgU2Nob2xhclwiLCAgIGhlYXZ5OiBcIkVubGlnaHRlbmVkIE9uZVwiIH0sXG59O1xuXG5leHBvcnQgY29uc3QgQkFMQU5DRURfVElUTEVTOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICBsaWdodDogXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCIsXG4gIG1pZDogXCJSZW5haXNzYW5jZSBTb3VsXCIsXG4gIGhlYXZ5OiBcIkV1ZGFpbW9uXCIsXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBBY3Rpdml0aWVzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9BQ1RJVklUSUVTOiBBY3Rpdml0eUNvbmZpZ1tdID0gW1xuICB7XG4gICAgaWQ6IFwid29ya291dFwiLCBuYW1lOiBcIldvcmtvdXRcIiwgZW1vamk6IFwiXFx1ezFGNEFBfVwiLCBjYXRlZ29yeTogXCJib2R5XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDEgV29ya291dFwiLCBwcm9wZXJ0eTogXCJXb3Jrb3V0XCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA3LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHdvcmtzcGFjZVRlbXBsYXRlOiBcIlRlbXBsYXRlcy9Xb3Jrb3V0LmpzXCIsXG4gICAgcHJpb3JpdHk6IDgsIG5lZ2xlY3RUaHJlc2hvbGQ6IDIsXG4gICAgcHJlZmVycmVkVGltZTogXCJtb3JuaW5nXCIsIGVzdGltYXRlZER1cmF0aW9uOiA2MCxcbiAgfSxcbiAge1xuICAgIGlkOiBcImNhcmRpb1wiLCBuYW1lOiBcIkNhcmRpb1wiLCBlbW9qaTogXCJcXHV7MUYzQzN9XCIsIGNhdGVnb3J5OiBcImJvZHlcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wMiBDYXJkaW9cIiwgcHJvcGVydHk6IFwiQ2FyZGlvXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA0LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA3LCBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgIHByZWZlcnJlZFRpbWU6IFwibW9ybmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogMzAsXG4gICAgYWx0ZXJuYXRlc1dpdGg6IFwid29ya291dFwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwicmVhZGluZ1wiLCBuYW1lOiBcIlJlYWRpbmdcIiwgZW1vamk6IFwiXFx1ezFGNEQ2fVwiLCBjYXRlZ29yeTogXCJtaW5kXCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDMgUmVhZGluZ1wiLCBwcm9wZXJ0eTogXCJSZWFkaW5nXCIsXG4gICAgZGFtYWdlUGVyQ29tcGxldGlvbjogMSwgd2Vla2x5VGFyZ2V0OiA2LCB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICBoYXNXb3Jrc3BhY2U6IHRydWUsIHByaW9yaXR5OiA2LCBuZWdsZWN0VGhyZXNob2xkOiAzLFxuICAgIHByZWZlcnJlZFRpbWU6IFwiZXZlbmluZ1wiLCBlc3RpbWF0ZWREdXJhdGlvbjogNDUsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJkcnVtbWluZ1wiLCBuYW1lOiBcIkRydW1taW5nXCIsIGVtb2ppOiBcIlxcdXsxRjk0MX1cIiwgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDQgRHJ1bW1pbmdcIiwgcHJvcGVydHk6IFwiRHJ1bW1pbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDYsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDYsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJhZnRlcm5vb25cIiwgZXN0aW1hdGVkRHVyYXRpb246IDQ1LFxuICB9LFxuICB7XG4gICAgaWQ6IFwiaGVhbHRoLXN0dWR5XCIsIG5hbWU6IFwiSGVhbHRoIFN0dWR5XCIsIGVtb2ppOiBcIlxcdXsxRjlFQ31cIiwgY2F0ZWdvcnk6IFwibWluZFwiLFxuICAgIGVuYWJsZWQ6IHRydWUsIGZvbGRlcjogXCJQZXJzb25hbCBMaWZlLzA1IEhlYWx0aCBTdHVkeVwiLCBwcm9wZXJ0eTogXCJIZWFsdGggU3R1ZHlcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDMsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDQsIG5lZ2xlY3RUaHJlc2hvbGQ6IDQsXG4gICAgcHJlZmVycmVkVGltZTogXCJhZnRlcm5vb25cIiwgZXN0aW1hdGVkRHVyYXRpb246IDMwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwic29jaWFsXCIsIG5hbWU6IFwiU29jaWFsXCIsIGVtb2ppOiBcIlxcdXsxRjkxRH1cIiwgY2F0ZWdvcnk6IFwic3Bpcml0XCIsXG4gICAgZW5hYmxlZDogdHJ1ZSwgZm9sZGVyOiBcIlBlcnNvbmFsIExpZmUvMDYgU29jaWFsXCIsIHByb3BlcnR5OiBcIlNvY2lhbFwiLFxuICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsIHdlZWtseVRhcmdldDogMiwgdHJhY2tpbmdNb2RlOiBcImRhaWx5XCIsXG4gICAgaGFzV29ya3NwYWNlOiB0cnVlLCBwcmlvcml0eTogNSwgbmVnbGVjdFRocmVzaG9sZDogNSxcbiAgICBwcmVmZXJyZWRUaW1lOiBcImV2ZW5pbmdcIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiZHJhd2luZ1wiLCBuYW1lOiBcIkRyYXdpbmdcIiwgZW1vamk6IFwiXFx1ezFGM0E4fVwiLCBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICBlbmFibGVkOiB0cnVlLCBmb2xkZXI6IFwiUGVyc29uYWwgTGlmZS8wNyBEcmF3aW5nXCIsIHByb3BlcnR5OiBcIkRyYXdpbmdcIixcbiAgICBkYW1hZ2VQZXJDb21wbGV0aW9uOiAxLCB3ZWVrbHlUYXJnZXQ6IDQsIHRyYWNraW5nTW9kZTogXCJkYWlseVwiLFxuICAgIGhhc1dvcmtzcGFjZTogdHJ1ZSwgcHJpb3JpdHk6IDcsIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgcHJlZmVycmVkVGltZTogXCJhZnRlcm5vb25cIiwgZXN0aW1hdGVkRHVyYXRpb246IDYwLFxuICB9LFxuXTtcblxuLy8gLS0tIERpcmVjdGl2ZSBMb3JlIFRlbXBsYXRlcyAtLS1cblxuZXhwb3J0IGNvbnN0IE5FR0xFQ1RfTE9SRTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgd29ya291dDogXCJZb3VyIG11c2NsZXMgZm9yZ2V0IHdoYXQgdGhleSBvbmNlIGtuZXcuIFRoZSBib2R5IGNyYXZlcyBkaXNjaXBsaW5lIFx1MjAxNCBhbnN3ZXIgaXQuXCIsXG4gIGNhcmRpbzogXCJUaGUgaGVhcnQgZ3Jvd3Mgc2x1Z2dpc2ggd2l0aG91dCB0aGUgcG91bmRpbmcgcmh5dGhtIG9mIGVmZm9ydC5cIixcbiAgcmVhZGluZzogXCJUaGUgbWluZCBzdGFydmVzIG9uIGRpc3RyYWN0aW9uLiBGZWVkIGl0IHdpdGggcGFnZXMsIG5vdCBwaXhlbHMuXCIsXG4gIGRydW1taW5nOiBcIlNpbGVuY2UgaXMgbm90IHJlc3QgXHUyMDE0IGl0IGlzIHRoZSBkZWF0aCBvZiByaHl0aG0uIFBpY2sgdXAgdGhlIHN0aWNrcy5cIixcbiAgXCJoZWFsdGgtc3R1ZHlcIjogXCJLbm93bGVkZ2Ugb2YgdGhlIGJvZHkgaXMgcG93ZXIgb3ZlciBpdC4gTmVnbGVjdCBpbnZpdGVzIGlnbm9yYW5jZS5cIixcbiAgc29jaWFsOiBcIkV2ZW4gd2FycmlvcnMgbmVlZCBmZWxsb3dzaGlwLiBJc29sYXRpb24gYnJlZWRzIHN0YWduYXRpb24uXCIsXG4gIGRyYXdpbmc6IFwiVGhlIGJlYXN0IHdpdGhpbiB5b3UgZ3Jvd3Mgd2VhayB3aXRob3V0IHRoZSBkaXNjaXBsaW5lIG9mIGxpbmUgYW5kIGZvcm0uXCIsXG59O1xuXG4vLyAtLS0gRmFsbGJhY2sgUXVvdGVzIC0tLVxuXG5leHBvcnQgY29uc3QgRkFMTEJBQ0tfUVVPVEVTOiBBcnJheTx7IHRleHQ6IHN0cmluZzsgYXR0cmlidXRpb246IHN0cmluZyB9PiA9IFtcbiAgeyB0ZXh0OiBcIllvdSBoYXZlIHBvd2VyIG92ZXIgeW91ciBtaW5kIFx1MjAxNCBub3Qgb3V0c2lkZSBldmVudHMuIFJlYWxpemUgdGhpcywgYW5kIHlvdSB3aWxsIGZpbmQgc3RyZW5ndGguXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJXZSBzdWZmZXIgbW9yZSBvZnRlbiBpbiBpbWFnaW5hdGlvbiB0aGFuIGluIHJlYWxpdHkuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJUaGUgaW1wZWRpbWVudCB0byBhY3Rpb24gYWR2YW5jZXMgYWN0aW9uLiBXaGF0IHN0YW5kcyBpbiB0aGUgd2F5IGJlY29tZXMgdGhlIHdheS5cIiwgYXR0cmlidXRpb246IFwiTWFyY3VzIEF1cmVsaXVzXCIgfSxcbiAgeyB0ZXh0OiBcIk5vIG1hbiBpcyBmcmVlIHdobyBpcyBub3QgbWFzdGVyIG9mIGhpbXNlbGYuXCIsIGF0dHJpYnV0aW9uOiBcIkVwaWN0ZXR1c1wiIH0sXG4gIHsgdGV4dDogXCJXYXN0ZSBubyBtb3JlIHRpbWUgYXJndWluZyBhYm91dCB3aGF0IGEgZ29vZCBtYW4gc2hvdWxkIGJlLiBCZSBvbmUuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG4gIHsgdGV4dDogXCJJdCBpcyBub3QgdGhhdCB3ZSBoYXZlIGEgc2hvcnQgdGltZSB0byBsaXZlLCBidXQgdGhhdCB3ZSB3YXN0ZSBhIGdvb2QgZGVhbCBvZiBpdC5cIiwgYXR0cmlidXRpb246IFwiU2VuZWNhXCIgfSxcbiAgeyB0ZXh0OiBcIkZpcnN0IHNheSB0byB5b3Vyc2VsZiB3aGF0IHlvdSB3b3VsZCBiZTsgYW5kIHRoZW4gZG8gd2hhdCB5b3UgaGF2ZSB0byBkby5cIiwgYXR0cmlidXRpb246IFwiRXBpY3RldHVzXCIgfSxcbiAgeyB0ZXh0OiBcIlRoZSBoYXBwaW5lc3Mgb2YgeW91ciBsaWZlIGRlcGVuZHMgdXBvbiB0aGUgcXVhbGl0eSBvZiB5b3VyIHRob3VnaHRzLlwiLCBhdHRyaWJ1dGlvbjogXCJNYXJjdXMgQXVyZWxpdXNcIiB9LFxuICB7IHRleHQ6IFwiSGUgd2hvIGZlYXJzIGRlYXRoIHdpbGwgbmV2ZXIgZG8gYW55dGhpbmcgd29ydGggb2YgYSBtYW4gd2hvIGlzIGFsaXZlLlwiLCBhdHRyaWJ1dGlvbjogXCJTZW5lY2FcIiB9LFxuICB7IHRleHQ6IFwiRGlmZmljdWx0aWVzIHN0cmVuZ3RoZW4gdGhlIG1pbmQsIGFzIGxhYm9yIGRvZXMgdGhlIGJvZHkuXCIsIGF0dHJpYnV0aW9uOiBcIlNlbmVjYVwiIH0sXG4gIHsgdGV4dDogXCJIb3cgbG9uZyBhcmUgeW91IGdvaW5nIHRvIHdhaXQgYmVmb3JlIHlvdSBkZW1hbmQgdGhlIGJlc3QgZm9yIHlvdXJzZWxmP1wiLCBhdHRyaWJ1dGlvbjogXCJFcGljdGV0dXNcIiB9LFxuICB7IHRleHQ6IFwiVGhlIHNvdWwgYmVjb21lcyBkeWVkIHdpdGggdGhlIGNvbG91ciBvZiBpdHMgdGhvdWdodHMuXCIsIGF0dHJpYnV0aW9uOiBcIk1hcmN1cyBBdXJlbGl1c1wiIH0sXG5dO1xuXG4vLyAtLS0gUm9tYW4gTnVtZXJhbHMgSGVscGVyIC0tLVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Sb21hbihudW06IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHMgPSBbMTAwMCwgOTAwLCA1MDAsIDQwMCwgMTAwLCA5MCwgNTAsIDQwLCAxMCwgOSwgNSwgNCwgMV07XG4gIGNvbnN0IHN5bXMgPSBbXCJNXCIsIFwiQ01cIiwgXCJEXCIsIFwiQ0RcIiwgXCJDXCIsIFwiWENcIiwgXCJMXCIsIFwiWExcIiwgXCJYXCIsIFwiSVhcIiwgXCJWXCIsIFwiSVZcIiwgXCJJXCJdO1xuICBsZXQgcmVzdWx0ID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgd2hpbGUgKG51bSA+PSB2YWxzW2ldKSB7XG4gICAgICByZXN1bHQgKz0gc3ltc1tpXTtcbiAgICAgIG51bSAtPSB2YWxzW2ldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyAtLS0gRGVmYXVsdCBXb3Jrc3BhY2UgQ29tcGxldGlvbiBTdGF0ZXMgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1dPUktTUEFDRV9TVEFURVM6IFdvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZVtdID0gW1xuICB7IGlkOiBcImRpc2NpcGxpbmVcIiwgbmFtZTogXCJEaXNjaXBsaW5lXCIsIGljb246IFwiXFx1MjVDNlwiLCBjb2xvcjogXCIjOTI4ZDg1XCIsIGVuYWJsZWQ6IHRydWUsIHF1b3RlRm9sZGVyUGF0aDogXCJcIiwgeHBNdWx0aXBsaWVyOiAxLjAgfSxcbiAgeyBpZDogXCJmbG93XCIsIG5hbWU6IFwiRmxvd1wiLCBpY29uOiBcIlxcdTIyNDhcIiwgY29sb3I6IFwiI2M5YTg0Y1wiLCBlbmFibGVkOiB0cnVlLCBxdW90ZUZvbGRlclBhdGg6IFwiXCIsIHhwTXVsdGlwbGllcjogMS41IH0sXG4gIHsgaWQ6IFwic2tpcHBlZFwiLCBuYW1lOiBcIlNraXBwZWRcIiwgaWNvbjogXCJcXHUyNUNCXCIsIGNvbG9yOiBcIiM4YjJkMzVcIiwgZW5hYmxlZDogdHJ1ZSwgcXVvdGVGb2xkZXJQYXRoOiBcIlwiLCB4cE11bHRpcGxpZXI6IDAgfSxcbl07XG5cbi8vIC0tLSBEZWZhdWx0IERldiBDb25maWcgLS0tXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RFVl9DT05GSUc6IERldkNvbmZpZyA9IHtcbiAgbGFiZWxzOiB7XG4gICAgZ3JlZXRpbmdfbW9ybmluZzogXCJHb29kIG1vcm5pbmdcIixcbiAgICBncmVldGluZ19hZnRlcm5vb246IFwiR29vZCBhZnRlcm5vb25cIixcbiAgICBncmVldGluZ19ldmVuaW5nOiBcIkdvb2QgZXZlbmluZ1wiLFxuICAgIGdyZWV0aW5nX25pZ2h0OiBcIkdvb2QgbmlnaHRcIixcbiAgICBkaXJlY3RpdmVfdGl0bGU6IFwiVEhFIERJUkVDVElWRVwiLFxuICAgIGJvc3Nfc3RhdHVzX3RpdGxlOiBcIkJPU1MgU1RBVFVTXCIsXG4gICAgd2Vla2x5X3JoeXRobV90aXRsZTogXCJXRUVLTFkgUkhZVEhNXCIsXG4gICAgYWN0aXZpdHlfZ3JpZF90aXRsZTogXCJBQ1RJVklUSUVTXCIsXG4gICAgdGVtcGxlX3RpdGxlOiBcIlRIRSBURU1QTEVcIixcbiAgICBldWRhaW1vbmlhX3RpdGxlOiBcIkV1ZGFpbW9uaWEgSW5kZXhcIixcbiAgICBkYXltYXBfdGl0bGU6IFwiWU9VUiBEQVlcIixcbiAgICBiZWdpbl93b3Jrc3BhY2U6IFwiRU5URVIgV09SS1NQQUNFXCIsXG4gICAgbm90X25vdzogXCJOT1QgTk9XXCIsXG4gIH0sXG4gIHhwUGVyQ29tcGxldGlvbjogMTAsXG4gIHN0cmVha0JvbnVzTXVsdGlwbGllcjogMS41LFxuICBidWZmZXJNaW51dGVzOiAxNSxcbiAgbW9ybmluZ1N0YXJ0OiA2LFxuICBtb3JuaW5nRW5kOiAxMixcbiAgYWZ0ZXJub29uRW5kOiAxOCxcbiAgZXZlbmluZ0VuZDogMjMsXG4gIHRoZW1lT3ZlcnJpZGVzOiB7fSxcbiAgYW5pbWF0aW9uU3RhZ2dlck1zOiA4MCxcbiAgaGVyb0hlaWdodDogMzUwLFxuICBzZWN0aW9uT3JkZXI6IFtcbiAgICBcImhlcm9cIiwgXCJldWRhaW1vbmlhXCIsIFwiZGF5bWFwXCIsIFwiZGlyZWN0aXZlXCIsIFwiYm9zc1wiLFxuICAgIFwid2Vla2x5XCIsIFwiYWN0aXZpdGllc1wiLCBcInRlbXBsZVwiLCBcInF1b3RlXCIsXG4gIF0sXG4gIGhpZGRlblNlY3Rpb25zOiBbXSxcbiAgYWN0aXZpdHlHcmlkQ29sdW1uczogMixcbn07XG5cbi8vIC0tLSBEZWZhdWx0IENhbGVuZGFyIFNldHRpbmdzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUzogQ2FsZW5kYXJTZXR0aW5ncyA9IHtcbiAgZW5hYmxlRGFpbHlOb3RlczogdHJ1ZSxcbiAgZGFpbHlOb3Rlc0ZvbGRlcjogXCJcIixcbiAgZGFpbHlOb3Rlc0Zvcm1hdDogXCJZWVlZLU1NLUREXCIsXG4gIGVuYWJsZVRhc2tzUGx1Z2luOiBmYWxzZSxcbiAgZW5hYmxlUXVpY2tUYXNrczogdHJ1ZSxcbiAgcXVpY2tUYXNrczogW10sXG59O1xuXG4vLyAtLS0gRGVmYXVsdCBPbGVuIFNldHRpbmdzIC0tLVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9PTEVOX1NFVFRJTkdTOiBPbGVuU2V0dGluZ3MgPSB7XG4gIC8vIFByb2ZpbGVcbiAgdXNlck5hbWU6IFwiV2FycmlvclwiLFxuICBteVdoeTogXCJcIixcbiAgaGVyb0JhY2tncm91bmQ6IFwiXCIsXG5cbiAgLy8gQWN0aXZpdGllc1xuICBhY3Rpdml0aWVzOiBERUZBVUxUX0FDVElWSVRJRVMsXG5cbiAgLy8gQ2F0ZWdvcmllc1xuICBjYXRlZ29yeUNvbG9yczoge1xuICAgIGJvZHk6IFwiI2M5YTg0Y1wiLFxuICAgIG1pbmQ6IFwiIzZiOGNjZVwiLFxuICAgIHNwaXJpdDogXCIjOGI3ZWM4XCIsXG4gIH0sXG4gIHRpdGxlT3ZlcnJpZGU6IFwiXCIsXG5cbiAgLy8gRXVkYWltb25pYVxuICBjYXRlZ29yeVhQOiB7XG4gICAgYm9keTogMCxcbiAgICBtaW5kOiAwLFxuICAgIHNwaXJpdDogMCxcbiAgfSxcblxuICAvLyBCb3NzXG4gIGN1cnJlbnRUaWVyOiAxLFxuICBib3NzTWF4SFA6IDM1LFxuICBib3NzQ3VycmVudEhQOiAzNSxcbiAgaW5UYXJ0YXJ1czogZmFsc2UsXG4gIHRhcnRhcnVzUGVuYW5jZVRhc2tzOiBbXSxcbiAgdGFydGFydXNTdGFydERhdGU6IG51bGwsXG4gIGZhaWxlZFRocmVzaG9sZERheXM6IDAsXG4gIGNvbnNlY3V0aXZlUGVyZmVjdFdlZWtzOiAwLFxuXG4gIC8vIFRlbXBsZVxuICB0ZW1wbGVUYXNrczogW1xuICAgIHsgaWQ6IFwiYmF0aGluZ1wiLCBuYW1lOiBcIkJhdGhpbmdcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiAxLCBlbW9qaTogXCJcXHV7MUY2QkZ9XCIgfSxcbiAgICB7IGlkOiBcImZhY2lhbC1oYWlyXCIsIG5hbWU6IFwiRmFjaWFsIGhhaXJcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiAyLCBlbW9qaTogXCJcXHV7MUZBOTJ9XCIgfSxcbiAgICB7IGlkOiBcIm5haWxzXCIsIG5hbWU6IFwiTmFpbHNcIiwgbGFzdENvbXBsZXRlZDogbnVsbCwgaW50ZXJ2YWxEYXlzOiA3LCBlbW9qaTogXCJcXHUyNzAyXFx1RkUwRlwiIH0sXG4gICAgeyBpZDogXCJoYWlyY3V0XCIsIG5hbWU6IFwiSGFpcmN1dFwiLCBsYXN0Q29tcGxldGVkOiBudWxsLCBpbnRlcnZhbERheXM6IDIxLCBlbW9qaTogXCJcXHV7MUY0ODh9XCIgfSxcbiAgXSxcblxuICAvLyBSZXdhcmRzXG4gIHBlbmRpbmdSZXdhcmRzOiBbXSxcbiAgY2xhaW1lZFJld2FyZHM6IFtdLFxuICBiYW5rZWRSZXdhcmRzOiBbXSxcblxuICAvLyBTeXN0ZW1cbiAgc3lzdGVtU3RhdGU6IFwiYWN0aXZlXCIsXG4gIHBhdXNlU3RhcnRUaW1lOiBudWxsLFxuICB0b3RhbFBhdXNlZFRpbWU6IDAsXG4gIG1pZ3JhdGVkOiBmYWxzZSxcbiAgc2ltdWxhdGVkRGF0ZTogbnVsbCxcblxuICAvLyBUaGVtZVxuICB0aGVtZU92ZXJyaWRlczoge30sXG5cbiAgLy8gRGV2XG4gIGRldkNvbmZpZzogREVGQVVMVF9ERVZfQ09ORklHLFxuXG4gIC8vIFdvcmtzcGFjZVxuICB3b3Jrc3BhY2VDb21wbGV0aW9uU3RhdGVzOiBERUZBVUxUX1dPUktTUEFDRV9TVEFURVMsXG4gIGFjdGl2ZVdvcmtzcGFjZTogbnVsbCxcblxuICAvLyBDYWxlbmRhclxuICBjYWxlbmRhcjogREVGQVVMVF9DQUxFTkRBUl9TRVRUSU5HUyxcblxuICAvLyBRdW90ZVxuICBxdW90ZUZvbGRlclBhdGg6IFwiXCIsXG4gIGxhc3RRdW90ZUluZGV4OiAtMSxcbiAgcmVjZW50UXVvdGVJZHM6IFtdLFxufTtcbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERhc2hib2FyZCBWaWV3XG4vLyBNYWluIHNjcm9sbGFibGUgSXRlbVZpZXcgcmVuZGVyaW5nIGFsbCBkYXNoYm9hcmQgc2VjdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgeyBJdGVtVmlldywgV29ya3NwYWNlTGVhZiwgVEZpbGUsIE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHR5cGUgT2xlblBsdWdpbiBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHR5cGUgeyBDb21wbGV0aW9uTWFwLCBDb21wbGV0aW9uLCBDYWxlbmRhclRhc2sgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9PTEVOIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IENhbGVuZGFyRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvQ2FsZW5kYXJFbmdpbmVcIjtcbmltcG9ydCB7IHJlbmRlckhlcm9DYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVyb0NhcmRcIjtcbmltcG9ydCB7IHJlbmRlckV1ZGFpbW9uaWFCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9FdWRhaW1vbmlhQmFyXCI7XG5pbXBvcnQgeyByZW5kZXJEaXJlY3RpdmVDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRGlyZWN0aXZlQ2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVyQm9zc1N0YXR1c0NhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3NzU3RhdHVzQ2FyZFwiO1xuaW1wb3J0IHsgcmVuZGVyV2Vla2x5Umh5dGhtIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvV2Vla2x5Umh5dGhtXCI7XG5pbXBvcnQgeyByZW5kZXJBY3Rpdml0eUdyaWQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BY3Rpdml0eUdyaWRcIjtcbmltcG9ydCB7IHJlbmRlclRlbXBsZUNoaXBzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGVtcGxlQ2hpcHNcIjtcbmltcG9ydCB7IHJlbmRlclF1b3RlRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUXVvdGVGb290ZXJcIjtcbmltcG9ydCB7IHJlbmRlckRheVRpbWVsaW5lIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvRGF5VGltZWxpbmVcIjtcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZFZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSBpbnRlcnZhbHM6IG51bWJlcltdO1xuXG4gIGNvbnN0cnVjdG9yKGxlYWY6IFdvcmtzcGFjZUxlYWYsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGxlYWYpO1xuICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIHRoaXMuaW50ZXJ2YWxzID0gW107XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfT0xFTjtcbiAgfVxuXG4gIGdldERpc3BsYXlUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiT2xlblwiO1xuICB9XG5cbiAgZ2V0SWNvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBcImNvbXBhc3NcIjtcbiAgfVxuXG4gIGFzeW5jIG9uT3BlbigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBhc3luYyBvbkNsb3NlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBjbGVhbnVwKCk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaWQgb2YgdGhpcy5pbnRlcnZhbHMpIHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaWQpO1xuICAgIH1cbiAgICB0aGlzLmludGVydmFscyA9IFtdO1xuICB9XG5cbiAgYXN5bmMgcmVuZGVyKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuY2xlYW51cCgpO1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuY29udGVudEVsO1xuICAgIGNvbnRhaW5lci5lbXB0eSgpO1xuXG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncztcbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZFwiIH0pO1xuXG4gICAgLy8gQXBwbHkgdGhlbWUgb3ZlcnJpZGVzXG4gICAgdGhpcy5hcHBseVRoZW1lT3ZlcnJpZGVzKHJvb3QpO1xuXG4gICAgLy8gR2F0aGVyIGNvbXBsZXRpb24gZGF0YSBmcm9tIHZhdWx0XG4gICAgY29uc3QgY29tcGxldGlvbkRhdGEgPSB0aGlzLmdhdGhlckNvbXBsZXRpb25EYXRhKCk7XG5cbiAgICAvLyBJbml0aWFsaXplIGVuZ2luZXNcbiAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGVuZ2luZSA9IG5ldyBPbGVuRW5naW5lKHNldHRpbmdzLCBjb21wbGV0aW9uRGF0YSwgbm93KTtcblxuICAgIC8vIENhbGVuZGFyIGludGVncmF0aW9uIFx1MjAxNCBnYXRoZXIgY2FsZW5kYXIgdGFza3MgYW5kIGZlZWQgaW50byBlbmdpbmVcbiAgICBjb25zdCBjYWxlbmRhckVuZ2luZSA9IG5ldyBDYWxlbmRhckVuZ2luZSh0aGlzLmFwcCwgc2V0dGluZ3MsIG5vdyk7XG4gICAgY29uc3QgY2FsZW5kYXJUYXNrcyA9IGF3YWl0IHRoaXMuZ2F0aGVyQ2FsZW5kYXJUYXNrcyhjYWxlbmRhckVuZ2luZSk7XG4gICAgY29uc3QgY2FsZW5kYXJFbnRyaWVzID0gY2FsZW5kYXJFbmdpbmUudG9EYXlNYXBFbnRyaWVzKGNhbGVuZGFyVGFza3MpO1xuICAgIGVuZ2luZS5zZXRDYWxlbmRhckVudHJpZXMoY2FsZW5kYXJFbnRyaWVzKTtcblxuICAgIC8vIEJ1aWxkIHNlY3Rpb24gb3JkZXIgZnJvbSBkZXZDb25maWdcbiAgICBjb25zdCBzZWN0aW9uT3JkZXIgPSBzZXR0aW5ncy5kZXZDb25maWcuc2VjdGlvbk9yZGVyO1xuICAgIGNvbnN0IGhpZGRlbiA9IG5ldyBTZXQoc2V0dGluZ3MuZGV2Q29uZmlnLmhpZGRlblNlY3Rpb25zKTtcblxuICAgIGxldCBzdGFnZ2VySWR4ID0gMDtcblxuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9uT3JkZXIpIHtcbiAgICAgIGlmIChoaWRkZW4uaGFzKHNlY3Rpb24pKSBjb250aW51ZTtcblxuICAgICAgc3dpdGNoIChzZWN0aW9uKSB7XG4gICAgICAgIGNhc2UgXCJoZXJvXCI6XG4gICAgICAgICAgcmVuZGVySGVyb0NhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiZXVkYWltb25pYVwiOlxuICAgICAgICAgIHJlbmRlckV1ZGFpbW9uaWFCYXIocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCk7XG4gICAgICAgICAgc3RhZ2dlcklkeCArPSAzOyAvLyBldWRhaW1vbmlhIGNhcmQgKyBzdGF0IGNhcmRzICsgY2F0ZWdvcmllcyBjYXJkXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRheW1hcFwiOlxuICAgICAgICAgIHJlbmRlckRheVRpbWVsaW5lKHJvb3QsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJZHgrKywge1xuICAgICAgICAgICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkKSA9PiB0aGlzLmhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQpLFxuICAgICAgICAgICAgb25Ta2lwOiAoYWN0aXZpdHlJZCkgPT4gdGhpcy5oYW5kbGVTa2lwQWN0aXZpdHkoYWN0aXZpdHlJZCwgZW5naW5lKSxcbiAgICAgICAgICAgIG9uQ2FsZW5kYXJEb25lOiAoZW50cnkpID0+IHRoaXMuaGFuZGxlQ2FsZW5kYXJUYXNrRG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNhbGVuZGFyUG9zdHBvbmU6IChlbnRyeSkgPT4gdGhpcy5oYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeSksXG4gICAgICAgICAgICBvbkNyZWF0ZUV2ZW50OiAoKSA9PiAodGhpcy5wbHVnaW4gYXMgYW55KS5zaG93UXVpY2tUYXNrRGlhbG9nKCksXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImRpcmVjdGl2ZVwiOlxuICAgICAgICAgIHJlbmRlckRpcmVjdGl2ZUNhcmQocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrLCAoYWN0aXZpdHlJZCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFbnRlcldvcmtzcGFjZShhY3Rpdml0eUlkKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYm9zc1wiOlxuICAgICAgICAgIHJlbmRlckJvc3NTdGF0dXNDYXJkKHJvb3QsIHNldHRpbmdzLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ3ZWVrbHlcIjpcbiAgICAgICAgICByZW5kZXJXZWVrbHlSaHl0aG0ocm9vdCwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlcklkeCsrKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWN0aXZpdGllc1wiOlxuICAgICAgICAgIHJlbmRlckFjdGl2aXR5R3JpZChyb290LCBzZXR0aW5ncywgZW5naW5lLCBzdGFnZ2VySWR4KyspO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0ZW1wbGVcIjpcbiAgICAgICAgICByZW5kZXJUZW1wbGVDaGlwcyhyb290LCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAodGFza0lkKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVRlbXBsZVVwZGF0ZSh0YXNrSWQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJxdW90ZVwiOlxuICAgICAgICAgIHJlbmRlclF1b3RlRm9vdGVyKHJvb3QsIHRoaXMuYXBwLCBzZXR0aW5ncywgc3RhZ2dlcklkeCsrLCAocGFydGlhbCkgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnBsdWdpbi5zZXR0aW5ncywgcGFydGlhbCk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyAtLS0gRGF0YSBHYXRoZXJpbmcgLS0tXG5cbiAgZ2F0aGVyQ29tcGxldGlvbkRhdGEoKTogQ29tcGxldGlvbk1hcCB7XG4gICAgY29uc3QgZGF0YTogQ29tcGxldGlvbk1hcCA9IHt9O1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LmVuYWJsZWQpIGNvbnRpbnVlO1xuICAgICAgZGF0YVthY3Rpdml0eS5pZF0gPSB0aGlzLmdldENvbXBsZXRpb25zRnJvbUZvbGRlcihhY3Rpdml0eS5mb2xkZXIsIGFjdGl2aXR5LnByb3BlcnR5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcGxldGlvbnNGcm9tRm9sZGVyKGZvbGRlclBhdGg6IHN0cmluZywgZmllbGROYW1lOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG5cbiAgICByZXR1cm4gZmlsZXNcbiAgICAgIC5maWx0ZXIoKGZpbGUpID0+IGZpbGUucGF0aCA9PT0gZm9sZGVyUGF0aCB8fCBmaWxlLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgICAgY29uc3QgZnJvbnRtYXR0ZXIgPSBjYWNoZT8uZnJvbnRtYXR0ZXI7XG4gICAgICAgIGlmICghZnJvbnRtYXR0ZXIgfHwgdHlwZW9mIGZyb250bWF0dGVyW2ZpZWxkTmFtZV0gIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiBmaWxlLmJhc2VuYW1lLFxuICAgICAgICAgIGNvbXBsZXRlZDogZnJvbnRtYXR0ZXJbZmllbGROYW1lXSA9PT0gdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChjKTogYyBpcyBDb21wbGV0aW9uID0+IGMgIT09IG51bGwpO1xuICB9XG5cbiAgLy8gLS0tIENhbGVuZGFyIEdhdGhlcmluZyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGdhdGhlckNhbGVuZGFyVGFza3MoY2FsZW5kYXJFbmdpbmU6IENhbGVuZGFyRW5naW5lKTogUHJvbWlzZTxDYWxlbmRhclRhc2tbXT4ge1xuICAgIGNvbnN0IHRhc2tzOiBDYWxlbmRhclRhc2tbXSA9IFtdO1xuICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3M7XG5cbiAgICAvLyBPcHRpb24gQTogRGFpbHkgTm90ZXMgXHUyMDE0IHJlYWQgdG9kYXkncyBub3RlIGNvbnRlbnRcbiAgICBpZiAoc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3RlcyAmJiBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyKSB7XG4gICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgICBjb25zdCBmb2xkZXIgPSBzZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyO1xuICAgICAgY29uc3Qgbm9ybWFsaXplZEZvbGRlciA9IGZvbGRlci5lbmRzV2l0aChcIi9cIikgPyBmb2xkZXIgOiBmb2xkZXIgKyBcIi9cIjtcblxuICAgICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgICBjb25zdCBkYWlseU5vdGUgPSBmaWxlcy5maW5kKChmKSA9PiB7XG4gICAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIGYuYmFzZW5hbWUgPT09IHRvZGF5O1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChkYWlseU5vdGUpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZGFpbHlOb3RlKTtcbiAgICAgICAgdGFza3MucHVzaCguLi5jYWxlbmRhckVuZ2luZS5nZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQsIGRhaWx5Tm90ZS5wYXRoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gT3B0aW9uIEI6IFRhc2tzIFBsdWdpbiBcdTIwMTQgc2NhbiBmb3IgdGFza3Mgd2l0aCB0b2RheSdzIGR1ZSBkYXRlXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKSB7XG4gICAgICBjb25zdCB0YXNrc1BsdWdpbiA9ICh0aGlzLmFwcCBhcyBhbnkpLnBsdWdpbnM/LnBsdWdpbnM/LltcIm9ic2lkaWFuLXRhc2tzLXBsdWdpblwiXTtcbiAgICAgIGlmICh0YXNrc1BsdWdpbikge1xuICAgICAgICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICAgICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgICAgY29uc3QgZmlsZXNXaXRoVGFza3M6IHsgcGF0aDogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdID0gW107XG5cbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKSkge1xuICAgICAgICAgIGNvbnN0IGNhY2hlID0gdGhpcy5hcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgICAgICAgaWYgKCFjYWNoZT8ubGlzdEl0ZW1zPy5zb21lKChsaSkgPT4gbGkudGFzayAhPT0gdW5kZWZpbmVkKSkgY29udGludWU7XG5cbiAgICAgICAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgICAgICAvLyBRdWljayBjaGVjazogZG9lcyB0aGUgY29udGVudCBtZW50aW9uIHRvZGF5J3MgZGF0ZSB3aXRoIGEgZHVlIGVtb2ppP1xuICAgICAgICAgIGlmIChjb250ZW50LmluY2x1ZGVzKHRvZGF5KSkge1xuICAgICAgICAgICAgZmlsZXNXaXRoVGFza3MucHVzaCh7IHBhdGg6IGZpbGUucGF0aCwgY29udGVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0YXNrcy5wdXNoKC4uLmNhbGVuZGFyRW5naW5lLmdldFRhc2tzUGx1Z2luVGFza3NGcm9tRmlsZXMoZmlsZXNXaXRoVGFza3MpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBPcHRpb24gQzogUXVpY2sgVGFza3MgXHUyMDE0IGFscmVhZHkgaGFuZGxlZCBieSBDYWxlbmRhckVuZ2luZS5nZXRBbGxUYXNrcygpXG4gICAgaWYgKHNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpIHtcbiAgICAgIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gICAgICBjb25zdCB0b2RheSA9IG5vdy50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIHRhc2tzLnB1c2goXG4gICAgICAgIC4uLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgICAgICAuZmlsdGVyKChxdCkgPT4gcXQuZGF0ZSA9PT0gdG9kYXkpXG4gICAgICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgICAgICBpZDogYHF0LSR7cXQuaWR9YCxcbiAgICAgICAgICAgIHRpdGxlOiBxdC50aXRsZSxcbiAgICAgICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgY29uc3QsXG4gICAgICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICAgICAgdGltZTogcXQudGltZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBxdC5kdXJhdGlvbixcbiAgICAgICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICAgICAgfSkpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIC8vIC0tLSBIYW5kbGVycyAtLS1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUVudGVyV29ya3NwYWNlKGFjdGl2aXR5SWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eUlkKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm47XG5cbiAgICBpZiAoYWN0aXZpdHkuaGFzV29ya3NwYWNlKSB7XG4gICAgICAvLyBPcGVuIG5hdGl2ZSBPbGVuIFdvcmtzcGFjZVZpZXdcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IHtcbiAgICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgZW1vamk6IGFjdGl2aXR5LmVtb2ppLFxuICAgICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICAgIHN0YXJ0VGltZTogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuICAgICAgICBza2lsbHM6IFtdLFxuICAgICAgICBoYXNXb3Jrc3BhY2U6IHRydWUsXG4gICAgICAgIHdvcmtzcGFjZUZvbGRlcjogYWN0aXZpdHkud29ya3NwYWNlRm9sZGVyLFxuICAgICAgICBza2lsbEZvbGRlcjogYWN0aXZpdHkuc2tpbGxGb2xkZXIsXG4gICAgICB9O1xuICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZVdvcmtzcGFjZVZpZXcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gTm9uLXdvcmtzcGFjZSBhY3Rpdml0aWVzOiBtYXJrIGRvbmUgaW1tZWRpYXRlbHlcbiAgICAgIGF3YWl0IHRoaXMubWFya0FjdGl2aXR5RG9uZShhY3Rpdml0eSk7XG4gICAgICBuZXcgTm90aWNlKGAke2FjdGl2aXR5LmVtb2ppfSAke2FjdGl2aXR5Lm5hbWV9IG1hcmtlZCBkb25lIWApO1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZVNraXBBY3Rpdml0eShhY3Rpdml0eUlkOiBzdHJpbmcsIGVuZ2luZTogT2xlbkVuZ2luZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIE1hcmsgYXMgc2tpcHBlZCBpbiB0aGUgZGF5IG1hcCAoZW5naW5lIHN0YXRlKVxuICAgIGNvbnN0IGRheU1hcCA9IGVuZ2luZS5nZXREYXlNYXAoKTtcbiAgICBjb25zdCBlbnRyeSA9IGRheU1hcC5maW5kKChlKSA9PiBlLmFjdGl2aXR5SWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgZW50cnkuc3RhdHVzID0gXCJza2lwcGVkXCI7XG4gICAgfVxuICAgIG5ldyBOb3RpY2UoXCJTa2lwcGVkXCIpO1xuICAgIGF3YWl0IHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZUNhbGVuZGFyVGFza0RvbmUoZW50cnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkRheU1hcEVudHJ5KTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayB8fCAhZW50cnkuY2FsZW5kYXJTb3VyY2UpIHJldHVybjtcblxuICAgIGNvbnN0IGNhbGVuZGFyRW5naW5lID0gbmV3IENhbGVuZGFyRW5naW5lKFxuICAgICAgdGhpcy5hcHAsXG4gICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncyxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKClcbiAgICApO1xuXG4gICAgc3dpdGNoIChlbnRyeS5jYWxlbmRhclNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjpcbiAgICAgICAgaWYgKGVudHJ5LmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgZW50cnkubGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUudG9nZ2xlRGFpbHlOb3RlVGFzayhlbnRyeS5maWxlUGF0aCwgZW50cnkubGluZU51bWJlciwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjpcbiAgICAgICAgaWYgKGVudHJ5LmZpbGVQYXRoICE9PSB1bmRlZmluZWQgJiYgZW50cnkubGluZU51bWJlciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgYXdhaXQgY2FsZW5kYXJFbmdpbmUudG9nZ2xlVGFza3NQbHVnaW5UYXNrKGVudHJ5LmZpbGVQYXRoLCBlbnRyeS5saW5lTnVtYmVyLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjoge1xuICAgICAgICBjb25zdCBxdElkID0gZW50cnkuY2FsZW5kYXJUYXNrSWQ/LnJlcGxhY2UoXCJxdC1cIiwgXCJcIik7XG4gICAgICAgIGNvbnN0IHF0ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIucXVpY2tUYXNrcy5maW5kKChxKSA9PiBxLmlkID09PSBxdElkKTtcbiAgICAgICAgaWYgKHF0KSB7XG4gICAgICAgICAgcXQuZG9uZSA9IHRydWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3IE5vdGljZShgXFx1MjcxMyAke2VudHJ5LmFjdGl2aXR5TmFtZX1gKTtcbiAgICBhd2FpdCB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBoYW5kbGVDYWxlbmRhclRhc2tQb3N0cG9uZShlbnRyeTogaW1wb3J0KFwiLi4vdHlwZXNcIikuRGF5TWFwRW50cnkpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIWVudHJ5LmlzQ2FsZW5kYXJUYXNrIHx8ICFlbnRyeS5jYWxlbmRhclNvdXJjZSkgcmV0dXJuO1xuXG4gICAgY29uc3QgY2FsZW5kYXJFbmdpbmUgPSBuZXcgQ2FsZW5kYXJFbmdpbmUoXG4gICAgICB0aGlzLmFwcCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLFxuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKVxuICAgICk7XG5cbiAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICA/IG5ldyBEYXRlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpXG4gICAgICA6IG5ldyBEYXRlKCk7XG5cbiAgICBjb25zdCB0YXNrOiBpbXBvcnQoXCIuLi90eXBlc1wiKS5DYWxlbmRhclRhc2sgPSB7XG4gICAgICBpZDogZW50cnkuY2FsZW5kYXJUYXNrSWQgPz8gZW50cnkuYWN0aXZpdHlJZCxcbiAgICAgIHRpdGxlOiBlbnRyeS5hY3Rpdml0eU5hbWUsXG4gICAgICBzb3VyY2U6IGVudHJ5LmNhbGVuZGFyU291cmNlLFxuICAgICAgZGF0ZTogbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLFxuICAgICAgZG9uZTogZmFsc2UsXG4gICAgICBmaWxlUGF0aDogZW50cnkuZmlsZVBhdGgsXG4gICAgICBsaW5lTnVtYmVyOiBlbnRyeS5saW5lTnVtYmVyLFxuICAgIH07XG5cbiAgICBhd2FpdCBjYWxlbmRhckVuZ2luZS5wb3N0cG9uZVRhc2sodGFzayk7XG4gICAgbmV3IE5vdGljZShgXFx1MjNFOSAke2VudHJ5LmFjdGl2aXR5TmFtZX0gcG9zdHBvbmVkIHRvIHRvbW9ycm93YCk7XG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgbWFya0FjdGl2aXR5RG9uZShhY3Rpdml0eTogeyBpZDogc3RyaW5nOyBmb2xkZXI6IHN0cmluZzsgcHJvcGVydHk6IHN0cmluZzsgY2F0ZWdvcnk6IGltcG9ydChcIi4uL3R5cGVzXCIpLkNhdGVnb3J5OyBkYW1hZ2VQZXJDb21wbGV0aW9uOiBudW1iZXIgfSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgdG9kYXkncyBmaWxlXG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCk7XG4gICAgY29uc3QgdG9kYXlGaWxlID0gZmlsZXMuZmluZChcbiAgICAgIChmKSA9PiAoZi5wYXRoID09PSBmb2xkZXIgfHwgZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikpICYmIGYuYmFzZW5hbWUgPT09IGRhdGVTdHJcbiAgICApO1xuXG4gICAgaWYgKHRvZGF5RmlsZSkge1xuICAgICAgYXdhaXQgdGhpcy5hcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKHRvZGF5RmlsZSwgKGZtKSA9PiB7XG4gICAgICAgIGZtW2FjdGl2aXR5LnByb3BlcnR5XSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsZVBhdGggPSBgJHtub3JtYWxpemVkRm9sZGVyfSR7ZGF0ZVN0cn0ubWRgO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBgLS0tXFxuJHthY3Rpdml0eS5wcm9wZXJ0eX06IHRydWVcXG4tLS1cXG5gKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBNYXkgYWxyZWFkeSBleGlzdFxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFhQICsgYm9zcyBkYW1hZ2VcbiAgICBjb25zdCB4cCA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb247XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFthY3Rpdml0eS5jYXRlZ29yeV0gKz0geHA7XG4gICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUCA9IE1hdGgubWF4KFxuICAgICAgMCxcbiAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLSBhY3Rpdml0eS5kYW1hZ2VQZXJDb21wbGV0aW9uXG4gICAgKTtcbiAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlVGVtcGxlVXBkYXRlKHRhc2tJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGFzayA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzLmZpbmQoKHQpID0+IHQuaWQgPT09IHRhc2tJZCk7XG4gICAgaWYgKCF0YXNrKSByZXR1cm47XG5cbiAgICB0YXNrLmxhc3RDb21wbGV0ZWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgbmV3IE5vdGljZShgJHt0YXNrLmVtb2ppfSAke3Rhc2submFtZX0gY29tcGxldGVkIWApO1xuXG4gICAgLy8gUmUtcmVuZGVyXG4gICAgYXdhaXQgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIC8vIC0tLSBUaGVtZSAtLS1cblxuICBwcml2YXRlIGFwcGx5VGhlbWVPdmVycmlkZXMocm9vdDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBvdmVycmlkZXMgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcztcbiAgICBpZiAoIW92ZXJyaWRlcykgcmV0dXJuO1xuXG4gICAgaWYgKG92ZXJyaWRlcy5iZ1ByaW1hcnkpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWJnLXByaW1hcnlcIiwgb3ZlcnJpZGVzLmJnUHJpbWFyeSk7XG4gICAgaWYgKG92ZXJyaWRlcy5jYXJkQmcpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWNhcmQtYmdcIiwgb3ZlcnJpZGVzLmNhcmRCZyk7XG4gICAgaWYgKG92ZXJyaWRlcy50ZXh0UHJpbWFyeSkgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0tdGV4dC1wcmltYXJ5XCIsIG92ZXJyaWRlcy50ZXh0UHJpbWFyeSk7XG4gICAgaWYgKG92ZXJyaWRlcy50ZXh0TXV0ZWQpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXRleHQtbXV0ZWRcIiwgb3ZlcnJpZGVzLnRleHRNdXRlZCk7XG4gICAgaWYgKG92ZXJyaWRlcy5hY2NlbnRHb2xkKSByb290LnN0eWxlLnNldFByb3BlcnR5KFwiLS1hY2NlbnQtZ29sZFwiLCBvdmVycmlkZXMuYWNjZW50R29sZCk7XG4gICAgaWYgKG92ZXJyaWRlcy5kYW5nZXIpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLWRhbmdlclwiLCBvdmVycmlkZXMuZGFuZ2VyKTtcbiAgICBpZiAob3ZlcnJpZGVzLnN1Y2Nlc3MpIHJvb3Quc3R5bGUuc2V0UHJvcGVydHkoXCItLXN1Y2Nlc3NcIiwgb3ZlcnJpZGVzLnN1Y2Nlc3MpO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIEVuZ2luZVxuLy8gUmVhZHMgYm9zcyBzdGF0ZSBhbmQgcHJvdmlkZXMgYm9zcy1yZWxhdGVkIGNhbGN1bGF0aW9uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBCb3NzRGVmaW5pdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQk9TU0VTLCBSQU5LX1RJRVJfQ09MT1JTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEJvc3NTdGF0dXMge1xuICBib3NzOiBCb3NzRGVmaW5pdGlvbjtcbiAgY3VycmVudEhQOiBudW1iZXI7XG4gIG1heEhQOiBudW1iZXI7XG4gIHBlcmNlbnQ6IG51bWJlcjtcbiAgdGllcjogbnVtYmVyO1xuICByYW5rOiBzdHJpbmc7XG4gIHRpZXJDb2xvcjogc3RyaW5nO1xuICBpblRhcnRhcnVzOiBib29sZWFuO1xuICBpc0RhbmdlclpvbmU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBCb3NzRW5naW5lIHtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gIH1cblxuICBnZXRCb3NzRm9yVGllcih0aWVyOiBudW1iZXIpOiBCb3NzRGVmaW5pdGlvbiB8IG51bGwge1xuICAgIHJldHVybiBCT1NTRVMuZmluZCgoYikgPT4gYi50aWVyID09PSB0aWVyKSA/PyBudWxsO1xuICB9XG5cbiAgZ2V0Q3VycmVudEJvc3MoKTogQm9zc0RlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb3NzRm9yVGllcih0aGlzLnNldHRpbmdzLmN1cnJlbnRUaWVyKTtcbiAgfVxuXG4gIGdldEJvc3NTdGF0dXMoKTogQm9zc1N0YXR1cyB7XG4gICAgY29uc3QgdGllciA9IHRoaXMuc2V0dGluZ3MuY3VycmVudFRpZXI7XG4gICAgY29uc3QgYm9zcyA9IHRoaXMuZ2V0Q3VycmVudEJvc3MoKSA/PyBCT1NTRVNbMF07XG4gICAgY29uc3QgY3VycmVudEhQID0gdGhpcy5zZXR0aW5ncy5ib3NzQ3VycmVudEhQO1xuICAgIGNvbnN0IG1heEhQID0gdGhpcy5zZXR0aW5ncy5ib3NzTWF4SFA7XG4gICAgY29uc3QgcGVyY2VudCA9IG1heEhQID4gMCA/IE1hdGgucm91bmQoKGN1cnJlbnRIUCAvIG1heEhQKSAqIDEwMCkgOiAwO1xuICAgIGNvbnN0IHRpZXJDb2xvciA9IFJBTktfVElFUl9DT0xPUlNbdGllcl0gPz8gXCIjNkI3MjgwXCI7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9zcyxcbiAgICAgIGN1cnJlbnRIUCxcbiAgICAgIG1heEhQLFxuICAgICAgcGVyY2VudCxcbiAgICAgIHRpZXIsXG4gICAgICByYW5rOiBib3NzLnJhbmssXG4gICAgICB0aWVyQ29sb3IsXG4gICAgICBpblRhcnRhcnVzOiB0aGlzLnNldHRpbmdzLmluVGFydGFydXMsXG4gICAgICBpc0RhbmdlclpvbmU6IHRoaXMuaXNEYW5nZXJab25lKCksXG4gICAgfTtcbiAgfVxuXG4gIGlzRGFuZ2VyWm9uZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB7IGJvc3NDdXJyZW50SFAsIGJvc3NNYXhIUCB9ID0gdGhpcy5zZXR0aW5ncztcbiAgICBpZiAoYm9zc01heEhQIDw9IDApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKGJvc3NDdXJyZW50SFAgLyBib3NzTWF4SFApIDwgMC4xNTtcbiAgfVxuXG4gIGlzSW5UYXJ0YXJ1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzO1xuICB9XG5cbiAgZ2V0SFBDb2xvcihwZXJjZW50OiBudW1iZXIpOiBzdHJpbmcge1xuICAgIGlmIChwZXJjZW50ID4gNjApIHJldHVybiBcIiMyMmM1NWVcIjtcbiAgICBpZiAocGVyY2VudCA+IDMwKSByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgaWYgKHBlcmNlbnQgPiAxNSkgcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQ29yZSBFbmdpbmVcbi8vIFByaW9yaXR5IGxvZ2ljLCBzdWdnZXN0aW9uIGFsZ29yaXRobSwgZGF5IG1hcCwgYW5hbHl0aWNzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUge1xuICBPbGVuU2V0dGluZ3MsXG4gIEFjdGl2aXR5Q29uZmlnLFxuICBDb21wbGV0aW9uLFxuICBDb21wbGV0aW9uTWFwLFxuICBEaXJlY3RpdmVTdWdnZXN0aW9uLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2F0ZWdvcnlMZXZlbCxcbiAgQ2F0ZWdvcnksXG4gIFByaW9yaXR5UmVhc29uLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIE5FR0xFQ1RfTE9SRSxcbiAgQ0hBUFRFUl9OQU1FUyxcbiAgU0lOR0xFX0RPTUlOQU5UX1RJVExFUyxcbiAgVFdPX0NBVEVHT1JZX1RJVExFUyxcbiAgQkFMQU5DRURfVElUTEVTLFxuICB0b1JvbWFuLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBCb3NzRW5naW5lIH0gZnJvbSBcIi4vQm9zc0VuZ2luZVwiO1xuXG5leHBvcnQgY2xhc3MgT2xlbkVuZ2luZSB7XG4gIHByaXZhdGUgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncztcbiAgcHJpdmF0ZSBjb21wbGV0aW9uczogQ29tcGxldGlvbk1hcDtcbiAgcHJpdmF0ZSBub3c6IERhdGU7XG4gIHByaXZhdGUgdG9kYXk6IHN0cmluZztcbiAgcHJpdmF0ZSBib3NzRW5naW5lOiBCb3NzRW5naW5lO1xuXG4gIGNvbnN0cnVjdG9yKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGNvbXBsZXRpb25zOiBDb21wbGV0aW9uTWFwLCBub3c6IERhdGUpIHtcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5jb21wbGV0aW9ucyA9IGNvbXBsZXRpb25zO1xuICAgIHRoaXMubm93ID0gbm93O1xuICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShub3cpO1xuICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgdGhpcy50b2RheSA9IGQudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG4gICAgdGhpcy5ib3NzRW5naW5lID0gbmV3IEJvc3NFbmdpbmUoc2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gLS0tIEVmZmVjdGl2ZSBEYXRlIChzdXBwb3J0cyBzaW11bGF0ZWQgZGF0ZSArIHBhdXNlKSAtLS1cblxuICBwcml2YXRlIGdldEVmZmVjdGl2ZU5vdygpOiBEYXRlIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zaW11bGF0ZWREYXRlKSB7XG4gICAgICBjb25zdCBzaW0gPSBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnNpbXVsYXRlZERhdGUpO1xuICAgICAgc2ltLnNldEhvdXJzKDEyLCAwLCAwLCAwKTtcbiAgICAgIHJldHVybiBzaW07XG4gICAgfVxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiICYmIHRoaXMuc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMubm93LmdldFRpbWUoKSAtIHRoaXMuc2V0dGluZ3MudG90YWxQYXVzZWRUaW1lKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RWZmZWN0aXZlVG9kYXkoKTogc3RyaW5nIHtcbiAgICBjb25zdCBkID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHJldHVybiBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIERhdGEgQWNjZXNzIC0tLVxuXG4gIGdldEVuYWJsZWRBY3Rpdml0aWVzKCk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiBhLmVuYWJsZWQpO1xuICB9XG5cbiAgZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkOiBzdHJpbmcpOiBDb21wbGV0aW9uW10ge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRpb25zW2FjdGl2aXR5SWRdID8/IFtdO1xuICB9XG5cbiAgZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHlJZDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eUlkKTtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHRvZGF5TXMgPSBuZXcgRGF0ZShlZmZlY3RpdmVOb3cpLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgY29uc3QgY29tcGxldGVkRGF0ZXMgPSBjb21wc1xuICAgICAgLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpXG4gICAgICAubWFwKChjKSA9PiBuZXcgRGF0ZShjLmRhdGUpLmdldFRpbWUoKSlcbiAgICAgIC5maWx0ZXIoKHQpID0+ICFpc05hTih0KSAmJiB0IDw9IHRvZGF5TXMpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYiAtIGEpO1xuXG4gICAgaWYgKGNvbXBsZXRlZERhdGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDk5OTtcblxuICAgIGNvbnN0IG1zUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcbiAgICByZXR1cm4gTWF0aC5mbG9vcigodG9kYXlNcyAtIGNvbXBsZXRlZERhdGVzWzBdKSAvIG1zUGVyRGF5KTtcbiAgfVxuXG4gIGlzRG9uZVRvZGF5KGFjdGl2aXR5SWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZVRvZGF5ID0gdGhpcy5nZXRFZmZlY3RpdmVUb2RheSgpO1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIHJldHVybiBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGVmZmVjdGl2ZVRvZGF5ICYmIGMuY29tcGxldGVkKTtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgUHJvZ3Jlc3MgLS0tXG5cbiAgZ2V0V2Vla2x5UHJvZ3Jlc3MoYWN0aXZpdHlJZDogc3RyaW5nKTogeyBkb25lOiBudW1iZXI7IHRhcmdldDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IGFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybiB7IGRvbmU6IDAsIHRhcmdldDogMCB9O1xuXG4gICAgY29uc3QgZWZmZWN0aXZlTm93ID0gdGhpcy5nZXRFZmZlY3RpdmVOb3coKTtcbiAgICBjb25zdCB3ZWVrU3RhcnQgPSB0aGlzLmdldFdlZWtTdGFydChlZmZlY3RpdmVOb3cpO1xuICAgIGNvbnN0IHdlZWtFbmQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgIHdlZWtFbmQuc2V0RGF0ZSh3ZWVrRW5kLmdldERhdGUoKSArIDcpO1xuXG4gICAgY29uc3QgY29tcHMgPSB0aGlzLmdldENvbXBsZXRpb25zRm9yQWN0aXZpdHkoYWN0aXZpdHlJZCk7XG4gICAgY29uc3QgZG9uZSA9IGNvbXBzLmZpbHRlcigoYykgPT4ge1xuICAgICAgaWYgKCFjLmNvbXBsZXRlZCkgcmV0dXJuIGZhbHNlO1xuICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKGMuZGF0ZSk7XG4gICAgICByZXR1cm4gZCA+PSB3ZWVrU3RhcnQgJiYgZCA8IHdlZWtFbmQ7XG4gICAgfSkubGVuZ3RoO1xuXG4gICAgcmV0dXJuIHsgZG9uZSwgdGFyZ2V0OiBhY3Rpdml0eS53ZWVrbHlUYXJnZXQgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0V2Vla1N0YXJ0KGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICBjb25zdCBkID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBjb25zdCBkYXkgPSBkLmdldERheSgpO1xuICAgIGNvbnN0IGRpZmYgPSBkLmdldERhdGUoKSAtIGRheSArIChkYXkgPT09IDAgPyAtNiA6IDEpOyAvLyBNb25kYXkgc3RhcnRcbiAgICBkLnNldERhdGUoZGlmZik7XG4gICAgcmV0dXJuIGQ7XG4gIH1cblxuICAvLyAtLS0gU3RyZWFrcyAtLS1cblxuICBnZXRBY3Rpdml0eVN0cmVhayhhY3Rpdml0eUlkOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZShlZmZlY3RpdmVOb3cpO1xuICAgIHRvZGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgY29uc3QgY29tcGxldGVkRGF0ZXMgPSBjb21wc1xuICAgICAgLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpXG4gICAgICAubWFwKChjKSA9PiB7XG4gICAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZShjLmRhdGUpO1xuICAgICAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pXG4gICAgICAuZmlsdGVyKChkKSA9PiAhaXNOYU4oZC5nZXRUaW1lKCkpICYmIGQgPD0gdG9kYXkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5nZXRUaW1lKCkgLSBhLmdldFRpbWUoKSk7XG5cbiAgICBpZiAoY29tcGxldGVkRGF0ZXMubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcblxuICAgIGxldCBzdHJlYWsgPSAwO1xuICAgIGNvbnN0IGNoZWNrRGF0ZSA9IG5ldyBEYXRlKGNvbXBsZXRlZERhdGVzWzBdKTtcbiAgICBmb3IgKGNvbnN0IGRhdGUgb2YgY29tcGxldGVkRGF0ZXMpIHtcbiAgICAgIGlmIChkYXRlLmdldFRpbWUoKSA9PT0gY2hlY2tEYXRlLmdldFRpbWUoKSkge1xuICAgICAgICBzdHJlYWsrKztcbiAgICAgICAgY2hlY2tEYXRlLnNldERhdGUoY2hlY2tEYXRlLmdldERhdGUoKSAtIDEpO1xuICAgICAgfSBlbHNlIGlmIChkYXRlIDwgY2hlY2tEYXRlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RyZWFrO1xuICB9XG5cbiAgZ2V0T3ZlcmFsbFN0cmVhaygpOiBudW1iZXIge1xuICAgIGNvbnN0IGFjdGl2aXRpZXMgPSB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCk7XG4gICAgY29uc3Qgc3RyZWFrcyA9IGFjdGl2aXRpZXMubWFwKChhKSA9PiB0aGlzLmdldEFjdGl2aXR5U3RyZWFrKGEuaWQpKTtcbiAgICByZXR1cm4gTWF0aC5tYXgoMCwgLi4uc3RyZWFrcyk7XG4gIH1cblxuICAvLyAtLS0gQW5hbHl0aWNzIC0tLVxuXG4gIGdldFRvdGFsQ29tcGxldGlvbnMoKTogbnVtYmVyIHtcbiAgICBsZXQgdG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICB0b3RhbCArPSBjb21wcy5maWx0ZXIoKGMpID0+IGMuY29tcGxldGVkKS5sZW5ndGg7XG4gICAgfVxuICAgIHJldHVybiB0b3RhbDtcbiAgfVxuXG4gIGdldERheXNPZlByZXNlbmNlKCk6IG51bWJlciB7XG4gICAgY29uc3QgZGF5c1NldCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgYWN0aXZpdHkgb2YgdGhpcy5nZXRFbmFibGVkQWN0aXZpdGllcygpKSB7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICBmb3IgKGNvbnN0IGMgb2YgY29tcHMpIHtcbiAgICAgICAgaWYgKGMuY29tcGxldGVkKSBkYXlzU2V0LmFkZChjLmRhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZGF5c1NldC5zaXplO1xuICB9XG5cbiAgLy8gLS0tIENhdGVnb3J5IFhQICYgTGV2ZWxzIC0tLVxuXG4gIGdldENhdGVnb3J5WFAoY2F0ZWdvcnk6IENhdGVnb3J5KTogbnVtYmVyIHtcbiAgICBjb25zdCB4cFBlciA9IHRoaXMuc2V0dGluZ3MuZGV2Q29uZmlnLnhwUGVyQ29tcGxldGlvbjtcbiAgICBsZXQgeHAgPSB0aGlzLnNldHRpbmdzLmNhdGVnb3J5WFBbY2F0ZWdvcnldID8/IDA7XG5cbiAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgaWYgKGFjdGl2aXR5LmNhdGVnb3J5ICE9PSBjYXRlZ29yeSkgY29udGludWU7XG4gICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICB4cCA9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aCAqIHhwUGVyO1xuICAgIH1cbiAgICByZXR1cm4geHA7XG4gIH1cblxuICBnZXRDYXRlZ29yeUxldmVsKGNhdGVnb3J5OiBDYXRlZ29yeSk6IENhdGVnb3J5TGV2ZWwge1xuICAgIGNvbnN0IHhwID0gdGhpcy5nZXRDYXRlZ29yeVhQKGNhdGVnb3J5KTtcbiAgICBjb25zdCBsZXZlbCA9IE1hdGguZmxvb3IoeHAgLyAxMDApO1xuICAgIGNvbnN0IHByb2dyZXNzVG9OZXh0ID0geHAgJSAxMDA7XG4gICAgcmV0dXJuIHsgY2F0ZWdvcnksIHhwLCBsZXZlbCwgcHJvZ3Jlc3NUb05leHQgfTtcbiAgfVxuXG4gIGdldEFsbENhdGVnb3J5TGV2ZWxzKCk6IENhdGVnb3J5TGV2ZWxbXSB7XG4gICAgcmV0dXJuIChbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKS5tYXAoKGMpID0+IHRoaXMuZ2V0Q2F0ZWdvcnlMZXZlbChjKSk7XG4gIH1cblxuICBnZXRFdWRhaW1vbmlhSW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wubGV2ZWwsIDApO1xuICB9XG5cbiAgZ2V0Q2hhcHRlcigpOiB7IG51bWJlcjogbnVtYmVyOyBuYW1lOiBzdHJpbmcgfSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuICAgIGNvbnN0IGNoYXB0ZXJOdW0gPSBNYXRoLm1pbigxMCwgTWF0aC5mbG9vcihpbmRleCAvIDEwKSArIDEpO1xuICAgIGNvbnN0IG5hbWUgPSBDSEFQVEVSX05BTUVTW2NoYXB0ZXJOdW1dID8/IFwiSW5pdGlhdGVcIjtcbiAgICByZXR1cm4geyBudW1iZXI6IGNoYXB0ZXJOdW0sIG5hbWUgfTtcbiAgfVxuXG4gIGdldEV1ZGFpbW9uaWFQcm9ncmVzcygpOiBudW1iZXIge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgICByZXR1cm4gKGluZGV4ICUgMTApICogMTA7IC8vIDAtMTAwIHByb2dyZXNzIHdpdGhpbiBjaGFwdGVyXG4gIH1cblxuICAvLyAtLS0gRHluYW1pYyBUaXRsZSAtLS1cblxuICBnZXREeW5hbWljVGl0bGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy50aXRsZU92ZXJyaWRlKSByZXR1cm4gdGhpcy5zZXR0aW5ncy50aXRsZU92ZXJyaWRlO1xuXG4gICAgY29uc3QgbGV2ZWxzID0gdGhpcy5nZXRBbGxDYXRlZ29yeUxldmVscygpO1xuICAgIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSB0aGlzLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcblxuICAgIGNvbnN0IGNhdGVnb3J5Q29tcGxldGlvbnM6IFJlY29yZDxDYXRlZ29yeSwgbnVtYmVyPiA9IHsgYm9keTogMCwgbWluZDogMCwgc3Bpcml0OiAwIH07XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiB0aGlzLmdldEVuYWJsZWRBY3Rpdml0aWVzKCkpIHtcbiAgICAgIGNvbnN0IGNvbXBzID0gdGhpcy5nZXRDb21wbGV0aW9uc0ZvckFjdGl2aXR5KGFjdGl2aXR5LmlkKTtcbiAgICAgIGNhdGVnb3J5Q29tcGxldGlvbnNbYWN0aXZpdHkuY2F0ZWdvcnldICs9IGNvbXBzLmZpbHRlcigoYykgPT4gYy5jb21wbGV0ZWQpLmxlbmd0aDtcbiAgICB9XG5cbiAgICBjb25zdCB0b3RhbCA9IE9iamVjdC52YWx1ZXMoY2F0ZWdvcnlDb21wbGV0aW9ucykucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgaWYgKHRvdGFsID09PSAwKSByZXR1cm4gXCJJbml0aWF0ZVwiO1xuXG4gICAgY29uc3Qgd2VpZ2h0czogUmVjb3JkPENhdGVnb3J5LCBudW1iZXI+ID0ge1xuICAgICAgYm9keTogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5ib2R5IC8gdG90YWwgOiAwLFxuICAgICAgbWluZDogdG90YWwgPiAwID8gY2F0ZWdvcnlDb21wbGV0aW9ucy5taW5kIC8gdG90YWwgOiAwLFxuICAgICAgc3Bpcml0OiB0b3RhbCA+IDAgPyBjYXRlZ29yeUNvbXBsZXRpb25zLnNwaXJpdCAvIHRvdGFsIDogMCxcbiAgICB9O1xuXG4gICAgY29uc3QgdGllciA9IHRvdGFsQ29tcGxldGlvbnMgPCA1MCA/IFwibGlnaHRcIiA6IHRvdGFsQ29tcGxldGlvbnMgPCAyMDAgPyBcIm1pZFwiIDogXCJoZWF2eVwiO1xuXG4gICAgLy8gQ2hlY2sgc2luZ2xlIGRvbWluYW50ICg+PSA3MCUpXG4gICAgZm9yIChjb25zdCBjYXQgb2YgW1wiYm9keVwiLCBcIm1pbmRcIiwgXCJzcGlyaXRcIl0gYXMgQ2F0ZWdvcnlbXSkge1xuICAgICAgaWYgKHdlaWdodHNbY2F0XSA+PSAwLjcwKSB7XG4gICAgICAgIHJldHVybiBTSU5HTEVfRE9NSU5BTlRfVElUTEVTW2NhdF0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgYmFsYW5jZWQgKGFsbCA+PSAyNSUpXG4gICAgaWYgKHdlaWdodHMuYm9keSA+PSAwLjI1ICYmIHdlaWdodHMubWluZCA+PSAwLjI1ICYmIHdlaWdodHMuc3Bpcml0ID49IDAuMjUpIHtcbiAgICAgIHJldHVybiBCQUxBTkNFRF9USVRMRVNbdGllcl0gPz8gXCJJbml0aWF0ZSBvZiBCYWxhbmNlXCI7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgdHdvLWNhdGVnb3J5IGNvbWJpbmF0aW9ucyAoZWFjaCA+PSAzMCUpXG4gICAgY29uc3QgY2F0cyA9IChbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXSBhcyBDYXRlZ29yeVtdKVxuICAgICAgLmZpbHRlcigoYykgPT4gd2VpZ2h0c1tjXSA+PSAwLjMwKVxuICAgICAgLnNvcnQoKTtcblxuICAgIGlmIChjYXRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgY29uc3Qga2V5ID0gY2F0cy5qb2luKFwiK1wiKTtcbiAgICAgIHJldHVybiBUV09fQ0FURUdPUllfVElUTEVTW2tleV0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2s6IHVzZSBkb21pbmFudCBjYXRlZ29yeVxuICAgIGNvbnN0IGRvbWluYW50ID0gKE9iamVjdC5lbnRyaWVzKHdlaWdodHMpIGFzIFtDYXRlZ29yeSwgbnVtYmVyXVtdKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGJbMV0gLSBhWzFdKVswXVswXTtcbiAgICByZXR1cm4gU0lOR0xFX0RPTUlOQU5UX1RJVExFU1tkb21pbmFudF0/Llt0aWVyXSA/PyBcIkluaXRpYXRlXCI7XG4gIH1cblxuICAvLyAtLS0gU3VnZ2VzdGlvbiBBbGdvcml0aG0gKFdhdGVyZmFsbCkgLS0tXG5cbiAgZ2V0U3VnZ2VzdGlvbigpOiBEaXJlY3RpdmVTdWdnZXN0aW9uIHwgbnVsbCB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcbiAgICBpZiAoYWN0aXZpdGllcy5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuXG4gICAgLy8gMS4gREVBVEggQ0hFQ0tcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5pblRhcnRhcnVzKSB7XG4gICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oYWN0aXZpdGllc1swXSwgXCJkZWF0aFwiLCBcIkVzY2FwZSBUYXJ0YXJ1cyBcdTIwMTQgY29tcGxldGUgeW91ciBwZW5hbmNlLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5mYWlsZWRUaHJlc2hvbGREYXlzID49IDIpIHtcbiAgICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKTtcbiAgICAgIGlmIChuZWdsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24obmVnbGVjdGVkWzBdLCBcImRlYXRoXCIsIFwiRGVhdGggbG9vbXMuIEFjdCBub3cgb3IgZGVzY2VuZCB0byBUYXJ0YXJ1cy5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMi4gQk9TUyBGSU5JU0hcbiAgICBpZiAodGhpcy5ib3NzRW5naW5lLmlzRGFuZ2VyWm9uZSgpKSB7XG4gICAgICBjb25zdCBiZXN0ID0gdGhpcy5nZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllcyk7XG4gICAgICBpZiAoYmVzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24oYmVzdCwgXCJib3NzXCIsIFwiT25lIGZpbmFsIGJsb3cgcmVtYWlucy4gRmluaXNoIHRoZSBiZWFzdC5cIik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gMy4gTkVHTEVDVCArIFBSSU9SSVRZXG4gICAgY29uc3QgbmVnbGVjdGVkID0gdGhpcy5nZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXMpO1xuICAgIGlmIChuZWdsZWN0ZWQubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wID0gdGhpcy5hcHBseVJ1bGVzKG5lZ2xlY3RlZCk7XG4gICAgICBpZiAodG9wKSB7XG4gICAgICAgIGNvbnN0IGRheXMgPSB0aGlzLmdldERheXNTaW5jZUxhc3REb25lKHRvcC5pZCk7XG4gICAgICAgIGNvbnN0IGxvcmUgPSBORUdMRUNUX0xPUkVbdG9wLmlkXSA/PyBgJHtkYXlzfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gO1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZFN1Z2dlc3Rpb24odG9wLCBcIm5lZ2xlY3RcIiwgbG9yZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gNC4gV0VFS0xZIENBVENILVVQXG4gICAgY29uc3QgYmVoaW5kU2NoZWR1bGUgPSB0aGlzLmdldEJlaGluZFNjaGVkdWxlQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAoYmVoaW5kU2NoZWR1bGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgdG9wID0gYmVoaW5kU2NoZWR1bGVbMF07XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMuZ2V0V2Vla2x5UHJvZ3Jlc3ModG9wLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0b3AsIFwid2Vla2x5XCIsIGBCZWhpbmQgc2NoZWR1bGU6ICR7cHJvZ3Jlc3MuZG9uZX0vJHtwcm9ncmVzcy50YXJnZXR9IHRoaXMgd2Vlay5gKTtcbiAgICB9XG5cbiAgICAvLyA1LiBDSEFJTiBDSEVDS1xuICAgIGNvbnN0IGNoYWluZWQgPSB0aGlzLmdldENoYWluZWRBY3Rpdml0aWVzKGFjdGl2aXRpZXMpO1xuICAgIGlmIChjaGFpbmVkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbihjaGFpbmVkWzBdLCBcImNoYWluXCIsIFwiWW91ciBwcmVyZXF1aXNpdGUgaXMgZG9uZS4gVGltZSBmb3IgdGhlIG5leHQgc3RlcC5cIik7XG4gICAgfVxuXG4gICAgLy8gNi4gVElNRS1CQVNFRFxuICAgIGNvbnN0IHRpbWVCYXNlZCA9IHRoaXMuZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzKTtcbiAgICBpZiAodGltZUJhc2VkLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0aGlzLmJ1aWxkU3VnZ2VzdGlvbih0aW1lQmFzZWRbMF0sIFwidGltZVwiLCBcIlRoZSB0aW1lIGlzIHJpZ2h0LiBCZWdpbi5cIik7XG4gICAgfVxuXG4gICAgLy8gNy4gQkFMQU5DRUQgRkFMTEJBQ0tcbiAgICBjb25zdCBsb25nZXN0R2FwID0gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkpXG4gICAgICAuc29ydCgoYSwgYikgPT4gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShiLmlkKSAtIHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYS5pZCkpO1xuXG4gICAgaWYgKGxvbmdlc3RHYXAubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMuYnVpbGRTdWdnZXN0aW9uKGxvbmdlc3RHYXBbMF0sIFwiYmFsYW5jZWRcIiwgXCJCYWxhbmNlIHlvdXIgcGF0aC4gVGhpcyBoYXMgd2FpdGVkIGxvbmdlc3QuXCIpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFN1Z2dlc3Rpb24oXG4gICAgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLFxuICAgIHJlYXNvbjogUHJpb3JpdHlSZWFzb24sXG4gICAgbG9yZVRleHQ6IHN0cmluZ1xuICApOiBEaXJlY3RpdmVTdWdnZXN0aW9uIHtcbiAgICByZXR1cm4ge1xuICAgICAgYWN0aXZpdHlJZDogYWN0aXZpdHkuaWQsXG4gICAgICBhY3Rpdml0eU5hbWU6IGFjdGl2aXR5Lm5hbWUsXG4gICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICBjYXRlZ29yeTogYWN0aXZpdHkuY2F0ZWdvcnksXG4gICAgICByZWFzb24sXG4gICAgICBkYXlzU2luY2VMYXN0RG9uZTogdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhY3Rpdml0eS5pZCksXG4gICAgICBsb3JlVGV4dCxcbiAgICAgIHByaW9yaXR5OiBhY3Rpdml0eS5wcmlvcml0eSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZWdsZWN0ZWRBY3Rpdml0aWVzU29ydGVkKGFjdGl2aXRpZXM6IEFjdGl2aXR5Q29uZmlnW10pOiBBY3Rpdml0eUNvbmZpZ1tdIHtcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4ge1xuICAgICAgICBjb25zdCBkYXlzID0gdGhpcy5nZXREYXlzU2luY2VMYXN0RG9uZShhLmlkKTtcbiAgICAgICAgcmV0dXJuIGRheXMgPj0gYS5uZWdsZWN0VGhyZXNob2xkICYmICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpO1xuICAgICAgfSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICBwcml2YXRlIGFwcGx5UnVsZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICAvLyBDaGVjayBhbHRlcm5hdGluZyBydWxlXG4gICAgICBpZiAoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpIHtcbiAgICAgICAgY29uc3QgYWx0RGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuYWx0ZXJuYXRlc1dpdGgpO1xuICAgICAgICBjb25zdCB0aGlzRGF5cyA9IHRoaXMuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgICAgICAvLyBJZiB0aGlzIHdhcyBkb25lIG1vcmUgcmVjZW50bHkgdGhhbiBhbHRlcm5hdGUsIHByZWZlciBhbHRlcm5hdGVcbiAgICAgICAgaWYgKHRoaXNEYXlzIDwgYWx0RGF5cykge1xuICAgICAgICAgIGNvbnN0IGFsdCA9IHRoaXMuc2V0dGluZ3MuYWN0aXZpdGllcy5maW5kKChhKSA9PiBhLmlkID09PSBhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCk7XG4gICAgICAgICAgaWYgKGFsdCAmJiBhbHQuZW5hYmxlZCAmJiAhdGhpcy5pc0RvbmVUb2RheShhbHQuaWQpKSByZXR1cm4gYWx0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoZWNrIGJsb2NraW5nIHJ1bGVzXG4gICAgICBpZiAoYWN0aXZpdHkuYmxvY2tzICYmIGFjdGl2aXR5LmJsb2Nrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRoaXMgYWN0aXZpdHkgYmxvY2tzIG90aGVycyB3aGVuIG5lZ2xlY3RlZCBcdTIwMTQgaXQgc2hvdWxkIGJlIHByaW9yaXRpemVkXG4gICAgICAgIHJldHVybiBhY3Rpdml0eTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjdGl2aXR5O1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZpdGllc1swXSA/PyBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIaWdoZXN0RGFtYWdlQWN0aXZpdHkoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnIHwgbnVsbCB7XG4gICAgY29uc3Qgbm90RG9uZSA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiAhdGhpcy5pc0RvbmVUb2RheShhLmlkKSk7XG4gICAgaWYgKG5vdERvbmUubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gbm90RG9uZS5zb3J0KChhLCBiKSA9PiBiLmRhbWFnZVBlckNvbXBsZXRpb24gLSBhLmRhbWFnZVBlckNvbXBsZXRpb24pWzBdO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRCZWhpbmRTY2hlZHVsZUFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIGNvbnN0IGVmZmVjdGl2ZU5vdyA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCk7XG4gICAgY29uc3QgZGF5T2ZXZWVrID0gZWZmZWN0aXZlTm93LmdldERheSgpOyAvLyAwPVN1blxuICAgIGNvbnN0IGFkanVzdGVkRGF5ID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlazsgLy8gTW9uPTFcbiAgICBjb25zdCByZW1haW5pbmdEYXlzID0gNyAtIGFkanVzdGVkRGF5ICsgMTtcblxuICAgIHJldHVybiBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gdGhpcy5nZXRXZWVrbHlQcm9ncmVzcyhhLmlkKTtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gcHJvZ3Jlc3MudGFyZ2V0IC0gcHJvZ3Jlc3MuZG9uZTtcbiAgICAgICAgcmV0dXJuIHJlbWFpbmluZyA+IDAgJiYgcmVtYWluaW5nID49IHJlbWFpbmluZ0RheXM7XG4gICAgICB9KVxuICAgICAgLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q2hhaW5lZEFjdGl2aXRpZXMoYWN0aXZpdGllczogQWN0aXZpdHlDb25maWdbXSk6IEFjdGl2aXR5Q29uZmlnW10ge1xuICAgIHJldHVybiBhY3Rpdml0aWVzLmZpbHRlcigoYSkgPT4ge1xuICAgICAgaWYgKCFhLmNoYWluQWZ0ZXIgfHwgdGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRoaXMuaXNEb25lVG9kYXkoYS5jaGFpbkFmdGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGltZUJhc2VkQWN0aXZpdGllcyhhY3Rpdml0aWVzOiBBY3Rpdml0eUNvbmZpZ1tdKTogQWN0aXZpdHlDb25maWdbXSB7XG4gICAgY29uc3QgaG91ciA9IHRoaXMuZ2V0RWZmZWN0aXZlTm93KCkuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IGN1cnJlbnRQZXJpb2QgPSBob3VyIDwgbW9ybmluZ0VuZCA/IFwibW9ybmluZ1wiIDpcbiAgICAgIGhvdXIgPCBhZnRlcm5vb25FbmQgPyBcImFmdGVybm9vblwiIDpcbiAgICAgIGhvdXIgPCBldmVuaW5nRW5kID8gXCJldmVuaW5nXCIgOiBcImFueXRpbWVcIjtcblxuICAgIC8vIEZpcnN0IGNoZWNrIHRpbWUgb3ZlcnJpZGVzXG4gICAgY29uc3Qgb3ZlcnJpZGRlbiA9IGFjdGl2aXRpZXMuZmlsdGVyKChhKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0RvbmVUb2RheShhLmlkKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgaWYgKCFhLnRpbWVPdmVycmlkZSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIGhvdXIgPj0gYS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyICYmIGhvdXIgPCBhLnRpbWVPdmVycmlkZS5lbmRIb3VyO1xuICAgIH0pO1xuICAgIGlmIChvdmVycmlkZGVuLmxlbmd0aCA+IDApIHJldHVybiBvdmVycmlkZGVuLnNvcnQoKGEsIGIpID0+IGIucHJpb3JpdHkgLSBhLnByaW9yaXR5KTtcblxuICAgIC8vIFRoZW4gY2hlY2sgcHJlZmVycmVkIHRpbWVcbiAgICByZXR1cm4gYWN0aXZpdGllc1xuICAgICAgLmZpbHRlcigoYSkgPT4gIXRoaXMuaXNEb25lVG9kYXkoYS5pZCkgJiYgKGEucHJlZmVycmVkVGltZSA9PT0gY3VycmVudFBlcmlvZCB8fCBhLnByZWZlcnJlZFRpbWUgPT09IFwiYW55dGltZVwiKSlcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBiLnByaW9yaXR5IC0gYS5wcmlvcml0eSk7XG4gIH1cblxuICAvLyAtLS0gRGF5IE1hcCBHZW5lcmF0aW9uIC0tLVxuXG4gIHByaXZhdGUgY2FsZW5kYXJFbnRyaWVzOiBEYXlNYXBFbnRyeVtdID0gW107XG5cbiAgc2V0Q2FsZW5kYXJFbnRyaWVzKGVudHJpZXM6IERheU1hcEVudHJ5W10pOiB2b2lkIHtcbiAgICB0aGlzLmNhbGVuZGFyRW50cmllcyA9IGVudHJpZXM7XG4gIH1cblxuICBnZXREYXlNYXAoKTogRGF5TWFwRW50cnlbXSB7XG4gICAgY29uc3QgYWN0aXZpdGllcyA9IHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKS5maWx0ZXIoKGEpID0+ICF0aGlzLmlzRG9uZVRvZGF5KGEuaWQpKTtcbiAgICBjb25zdCB7IG1vcm5pbmdTdGFydCwgbW9ybmluZ0VuZCwgYWZ0ZXJub29uRW5kLCBldmVuaW5nRW5kLCBidWZmZXJNaW51dGVzIH0gPSB0aGlzLnNldHRpbmdzLmRldkNvbmZpZztcblxuICAgIGNvbnN0IHRpbWVTbG90czogeyBwZXJpb2Q6IHN0cmluZzsgc3RhcnRIb3VyOiBudW1iZXI7IGVuZEhvdXI6IG51bWJlciB9W10gPSBbXG4gICAgICB7IHBlcmlvZDogXCJtb3JuaW5nXCIsIHN0YXJ0SG91cjogbW9ybmluZ1N0YXJ0LCBlbmRIb3VyOiBtb3JuaW5nRW5kIH0sXG4gICAgICB7IHBlcmlvZDogXCJhZnRlcm5vb25cIiwgc3RhcnRIb3VyOiBtb3JuaW5nRW5kLCBlbmRIb3VyOiBhZnRlcm5vb25FbmQgfSxcbiAgICAgIHsgcGVyaW9kOiBcImV2ZW5pbmdcIiwgc3RhcnRIb3VyOiBhZnRlcm5vb25FbmQsIGVuZEhvdXI6IGV2ZW5pbmdFbmQgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgZW50cmllczogRGF5TWFwRW50cnlbXSA9IFtdO1xuICAgIGNvbnN0IHNjaGVkdWxlZCA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuXG4gICAgLy8gMS4gUGxhY2UgdGltZS1vdmVycmlkZSBhY3Rpdml0aWVzIGZpcnN0XG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBhY3Rpdml0aWVzKSB7XG4gICAgICBpZiAoIWFjdGl2aXR5LnRpbWVPdmVycmlkZSkgY29udGludWU7XG4gICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICBhY3Rpdml0eUlkOiBhY3Rpdml0eS5pZCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiBhY3Rpdml0eS5uYW1lLFxuICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgIGNhdGVnb3J5OiBhY3Rpdml0eS5jYXRlZ29yeSxcbiAgICAgICAgc3RhcnRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuc3RhcnRIb3VyLFxuICAgICAgICBlbmRIb3VyOiBhY3Rpdml0eS50aW1lT3ZlcnJpZGUuZW5kSG91cixcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IGFjdGl2aXR5LmVzdGltYXRlZER1cmF0aW9uLFxuICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICBwcmlvcml0eVJlYXNvbjogXCJ0aW1lXCIsXG4gICAgICB9KTtcbiAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgIH1cblxuICAgIC8vIDIuIFBsYWNlIG5lZ2xlY3RlZCBhY3Rpdml0aWVzIGluIHRoZWlyIHByZWZlcnJlZCBzbG90c1xuICAgIGNvbnN0IG5lZ2xlY3RlZCA9IHRoaXMuZ2V0TmVnbGVjdGVkQWN0aXZpdGllc1NvcnRlZChhY3Rpdml0aWVzKVxuICAgICAgLmZpbHRlcigoYSkgPT4gIXNjaGVkdWxlZC5oYXMoYS5pZCkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiBuZWdsZWN0ZWQpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIm5lZ2xlY3RcIixcbiAgICAgICAgfSk7XG4gICAgICAgIHNjaGVkdWxlZC5hZGQoYWN0aXZpdHkuaWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDMuIFBsYWNlIHJlbWFpbmluZyB3ZWVrbHktdGFyZ2V0IGFjdGl2aXRpZXNcbiAgICBjb25zdCByZW1haW5pbmcgPSBhY3Rpdml0aWVzXG4gICAgICAuZmlsdGVyKChhKSA9PiAhc2NoZWR1bGVkLmhhcyhhLmlkKSlcbiAgICAgIC5maWx0ZXIoKGEpID0+IHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmdldFdlZWtseVByb2dyZXNzKGEuaWQpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3MuZG9uZSA8IHByb2dyZXNzLnRhcmdldDtcbiAgICAgIH0pXG4gICAgICAuc29ydCgoYSwgYikgPT4gYi5wcmlvcml0eSAtIGEucHJpb3JpdHkpO1xuXG4gICAgZm9yIChjb25zdCBhY3Rpdml0eSBvZiByZW1haW5pbmcpIHtcbiAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLmZpbmRTbG90Rm9yQWN0aXZpdHkoYWN0aXZpdHksIHRpbWVTbG90cywgZW50cmllcywgYnVmZmVyTWludXRlcyk7XG4gICAgICBpZiAoc2xvdCkge1xuICAgICAgICBlbnRyaWVzLnB1c2goe1xuICAgICAgICAgIGFjdGl2aXR5SWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgICAgIGFjdGl2aXR5TmFtZTogYWN0aXZpdHkubmFtZSxcbiAgICAgICAgICBlbW9qaTogYWN0aXZpdHkuZW1vamksXG4gICAgICAgICAgY2F0ZWdvcnk6IGFjdGl2aXR5LmNhdGVnb3J5LFxuICAgICAgICAgIHN0YXJ0SG91cjogc2xvdC5zdGFydEhvdXIsXG4gICAgICAgICAgZW5kSG91cjogc2xvdC5lbmRIb3VyLFxuICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbixcbiAgICAgICAgICBzdGF0dXM6IFwicGVuZGluZ1wiLFxuICAgICAgICAgIHByaW9yaXR5UmVhc29uOiBcIndlZWtseVwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2NoZWR1bGVkLmFkZChhY3Rpdml0eS5pZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWVyZ2UgY2FsZW5kYXIgdGFzayBlbnRyaWVzXG4gICAgZm9yIChjb25zdCBjYWxFbnRyeSBvZiB0aGlzLmNhbGVuZGFyRW50cmllcykge1xuICAgICAgZW50cmllcy5wdXNoKGNhbEVudHJ5KTtcbiAgICB9XG5cbiAgICAvLyBTb3J0IGJ5IHN0YXJ0IHRpbWVcbiAgICBlbnRyaWVzLnNvcnQoKGEsIGIpID0+IGEuc3RhcnRIb3VyIC0gYi5zdGFydEhvdXIpO1xuXG4gICAgLy8gTWFyayBkb25lIGFjdGl2aXRpZXMgKG9ubHkgZm9yIG5vbi1jYWxlbmRhciBlbnRyaWVzKVxuICAgIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgICAgaWYgKCFlbnRyeS5pc0NhbGVuZGFyVGFzayAmJiB0aGlzLmlzRG9uZVRvZGF5KGVudHJ5LmFjdGl2aXR5SWQpKSB7XG4gICAgICAgIGVudHJ5LnN0YXR1cyA9IFwiZG9uZVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kU2xvdEZvckFjdGl2aXR5KFxuICAgIGFjdGl2aXR5OiBBY3Rpdml0eUNvbmZpZyxcbiAgICB0aW1lU2xvdHM6IHsgcGVyaW9kOiBzdHJpbmc7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfVtdLFxuICAgIGV4aXN0aW5nOiBEYXlNYXBFbnRyeVtdLFxuICAgIGJ1ZmZlck1pbnV0ZXM6IG51bWJlclxuICApOiB7IHN0YXJ0SG91cjogbnVtYmVyOyBlbmRIb3VyOiBudW1iZXIgfSB8IG51bGwge1xuICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSBhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbiAvIDYwO1xuICAgIGNvbnN0IGJ1ZmZlckhvdXJzID0gYnVmZmVyTWludXRlcyAvIDYwO1xuXG4gICAgLy8gRmluZCBwcmVmZXJyZWQgc2xvdFxuICAgIGNvbnN0IHByZWZlcnJlZFNsb3QgPSB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IGFjdGl2aXR5LnByZWZlcnJlZFRpbWUpXG4gICAgICA/PyB0aW1lU2xvdHMuZmluZCgocykgPT4gcy5wZXJpb2QgPT09IFwiYW55dGltZVwiKVxuICAgICAgPz8gdGltZVNsb3RzWzBdO1xuXG4gICAgLy8gRmluZCBmaXJzdCBhdmFpbGFibGUgdGltZSBpbiBwcmVmZXJyZWQgc2xvdFxuICAgIGxldCBjYW5kaWRhdGVTdGFydCA9IHByZWZlcnJlZFNsb3Quc3RhcnRIb3VyO1xuXG4gICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgaWYgKGVudHJ5LnN0YXJ0SG91ciA8IHByZWZlcnJlZFNsb3QuZW5kSG91ciAmJiBlbnRyeS5lbmRIb3VyID4gY2FuZGlkYXRlU3RhcnQpIHtcbiAgICAgICAgY2FuZGlkYXRlU3RhcnQgPSBlbnRyeS5lbmRIb3VyICsgYnVmZmVySG91cnM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2FuZGlkYXRlRW5kID0gY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzO1xuICAgIGlmIChjYW5kaWRhdGVFbmQgPD0gcHJlZmVycmVkU2xvdC5lbmRIb3VyKSB7XG4gICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVFbmQgfTtcbiAgICB9XG5cbiAgICAvLyBUcnkgYW55IHNsb3RcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgdGltZVNsb3RzKSB7XG4gICAgICBpZiAoc2xvdCA9PT0gcHJlZmVycmVkU2xvdCkgY29udGludWU7XG4gICAgICBjYW5kaWRhdGVTdGFydCA9IHNsb3Quc3RhcnRIb3VyO1xuICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBleGlzdGluZy5zb3J0KChhLCBiKSA9PiBhLnN0YXJ0SG91ciAtIGIuc3RhcnRIb3VyKSkge1xuICAgICAgICBpZiAoZW50cnkuc3RhcnRIb3VyIDwgc2xvdC5lbmRIb3VyICYmIGVudHJ5LmVuZEhvdXIgPiBjYW5kaWRhdGVTdGFydCkge1xuICAgICAgICAgIGNhbmRpZGF0ZVN0YXJ0ID0gZW50cnkuZW5kSG91ciArIGJ1ZmZlckhvdXJzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoY2FuZGlkYXRlU3RhcnQgKyBkdXJhdGlvbkhvdXJzIDw9IHNsb3QuZW5kSG91cikge1xuICAgICAgICByZXR1cm4geyBzdGFydEhvdXI6IGNhbmRpZGF0ZVN0YXJ0LCBlbmRIb3VyOiBjYW5kaWRhdGVTdGFydCArIGR1cmF0aW9uSG91cnMgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIC0tLSBXZWVrbHkgRGF0YSBmb3IgQmFyIENoYXJ0IC0tLVxuXG4gIGdldFdlZWtseUNvbXBsZXRpb25zQnlEYXkoKTogQXJyYXk8eyBkYXk6IHN0cmluZzsgZGF0ZTogc3RyaW5nOyBjb21wbGV0aW9uczogTWFwPENhdGVnb3J5LCBudW1iZXI+IH0+IHtcbiAgICBjb25zdCBlZmZlY3RpdmVOb3cgPSB0aGlzLmdldEVmZmVjdGl2ZU5vdygpO1xuICAgIGNvbnN0IHdlZWtTdGFydCA9IHRoaXMuZ2V0V2Vla1N0YXJ0KGVmZmVjdGl2ZU5vdyk7XG4gICAgY29uc3QgZGF5cyA9IFtcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiLCBcIlN1blwiXTtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHsgZGF5OiBzdHJpbmc7IGRhdGU6IHN0cmluZzsgY29tcGxldGlvbnM6IE1hcDxDYXRlZ29yeSwgbnVtYmVyPiB9PiA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgRGF0ZSh3ZWVrU3RhcnQpO1xuICAgICAgZC5zZXREYXRlKGQuZ2V0RGF0ZSgpICsgaSk7XG4gICAgICBjb25zdCBkYXRlU3RyID0gZC50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbiAgICAgIGNvbnN0IGRheUNvbXBsZXRpb25zID0gbmV3IE1hcDxDYXRlZ29yeSwgbnVtYmVyPigpO1xuXG4gICAgICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIHRoaXMuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKSkge1xuICAgICAgICBjb25zdCBjb21wcyA9IHRoaXMuZ2V0Q29tcGxldGlvbnNGb3JBY3Rpdml0eShhY3Rpdml0eS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbmUgPSBjb21wcy5zb21lKChjKSA9PiBjLmRhdGUgPT09IGRhdGVTdHIgJiYgYy5jb21wbGV0ZWQpO1xuICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnQgPSBkYXlDb21wbGV0aW9ucy5nZXQoYWN0aXZpdHkuY2F0ZWdvcnkpID8/IDA7XG4gICAgICAgICAgZGF5Q29tcGxldGlvbnMuc2V0KGFjdGl2aXR5LmNhdGVnb3J5LCBjdXJyZW50ICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVzdWx0LnB1c2goeyBkYXk6IGRheXNbaV0sIGRhdGU6IGRhdGVTdHIsIGNvbXBsZXRpb25zOiBkYXlDb21wbGV0aW9ucyB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk6IG51bWJlciB7XG4gICAgY29uc3Qgd2Vla2x5ID0gdGhpcy5nZXRXZWVrbHlDb21wbGV0aW9uc0J5RGF5KCk7XG4gICAgcmV0dXJuIHdlZWtseS5maWx0ZXIoKGQpID0+IHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICByZXR1cm4gdG90YWwgPiAwO1xuICAgIH0pLmxlbmd0aDtcbiAgfVxuXG4gIGdldEJlc3REYXlUaGlzV2VlaygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHdlZWtseSA9IHRoaXMuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICAgIGxldCBiZXN0ID0gd2Vla2x5WzBdO1xuICAgIGxldCBiZXN0VG90YWwgPSAwO1xuICAgIGZvciAoY29uc3QgZCBvZiB3ZWVrbHkpIHtcbiAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICBkLmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgICBpZiAodG90YWwgPiBiZXN0VG90YWwpIHtcbiAgICAgICAgYmVzdFRvdGFsID0gdG90YWw7XG4gICAgICAgIGJlc3QgPSBkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYmVzdFRvdGFsID4gMCA/IGJlc3QuZGF5IDogXCItLVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBDYWxlbmRhciBFbmdpbmVcbi8vIFJlYWRzIHRhc2tzIGZyb20gRGFpbHkgTm90ZXMsIFRhc2tzIHBsdWdpbiwgYW5kIFF1aWNrIFRhc2tzXG4vLyBNZXJnZXMgdGhlbSBpbnRvIENhbGVuZGFyVGFza1tdIGZvciBEYXkgTWFwIGludGVncmF0aW9uXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgQXBwIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSB7XG4gIE9sZW5TZXR0aW5ncyxcbiAgQ2FsZW5kYXJUYXNrLFxuICBEYXlNYXBFbnRyeSxcbiAgQ2FsZW5kYXJUYXNrU291cmNlLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRW5naW5lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBzZXR0aW5nczogT2xlblNldHRpbmdzO1xuICBwcml2YXRlIHRvZGF5OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIG5vdzogRGF0ZSkge1xuICAgIHRoaXMuYXBwID0gYXBwO1xuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICBjb25zdCBkID0gbmV3IERhdGUobm93KTtcbiAgICBkLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRoaXMudG9kYXkgPSBkLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICB9XG5cbiAgLy8gLS0tIE1haW4gZW50cnk6IGdldCBhbGwgY2FsZW5kYXIgdGFza3MgZm9yIHRvZGF5IC0tLVxuXG4gIGdldEFsbFRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcblxuICAgIGlmICh0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZURhaWx5Tm90ZXMpIHtcbiAgICAgIHRhc2tzLnB1c2goLi4udGhpcy5nZXREYWlseU5vdGVUYXNrcygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVUYXNrc1BsdWdpbikge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFRhc2tzUGx1Z2luVGFza3MoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcykge1xuICAgICAgdGFza3MucHVzaCguLi50aGlzLmdldFF1aWNrVGFza3MoKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIENvbnZlcnQgQ2FsZW5kYXJUYXNrcyB0byBEYXlNYXBFbnRyaWVzIC0tLVxuXG4gIHRvRGF5TWFwRW50cmllcyh0YXNrczogQ2FsZW5kYXJUYXNrW10pOiBEYXlNYXBFbnRyeVtdIHtcbiAgICByZXR1cm4gdGFza3MubWFwKCh0YXNrKSA9PiB7XG4gICAgICBjb25zdCBzdGFydEhvdXIgPSB0YXNrLnRpbWUgPyB0aGlzLnBhcnNlVGltZVRvSG91cih0YXNrLnRpbWUpIDogOTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uSG91cnMgPSAodGFzay5kdXJhdGlvbiA/PyAzMCkgLyA2MDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgYWN0aXZpdHlJZDogYGNhbC0ke3Rhc2suaWR9YCxcbiAgICAgICAgYWN0aXZpdHlOYW1lOiB0YXNrLnRpdGxlLFxuICAgICAgICBlbW9qaTogdGhpcy5nZXRTb3VyY2VFbW9qaSh0YXNrLnNvdXJjZSksXG4gICAgICAgIGNhdGVnb3J5OiBcIm1pbmRcIiBhcyBjb25zdCwgLy8gY2FsZW5kYXIgdGFza3MgZGVmYXVsdCB0byBtaW5kXG4gICAgICAgIHN0YXJ0SG91cixcbiAgICAgICAgZW5kSG91cjogc3RhcnRIb3VyICsgZHVyYXRpb25Ib3VycyxcbiAgICAgICAgZXN0aW1hdGVkRHVyYXRpb246IHRhc2suZHVyYXRpb24gPz8gMzAsXG4gICAgICAgIHN0YXR1czogdGFzay5kb25lID8gXCJkb25lXCIgYXMgY29uc3QgOiBcInBlbmRpbmdcIiBhcyBjb25zdCxcbiAgICAgICAgaXNDYWxlbmRhclRhc2s6IHRydWUsXG4gICAgICAgIGNhbGVuZGFyU291cmNlOiB0YXNrLnNvdXJjZSxcbiAgICAgICAgY2FsZW5kYXJUYXNrSWQ6IHRhc2suaWQsXG4gICAgICAgIGZpbGVQYXRoOiB0YXNrLmZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiB0YXNrLmxpbmVOdW1iZXIsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBBOiBEYWlseSBOb3RlcyBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIGdldERhaWx5Tm90ZVRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBmb2xkZXIgPSB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLmRhaWx5Tm90ZXNGb2xkZXI7XG4gICAgaWYgKCFmb2xkZXIpIHJldHVybiBbXTtcblxuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXIuZW5kc1dpdGgoXCIvXCIpID8gZm9sZGVyIDogZm9sZGVyICsgXCIvXCI7XG5cbiAgICAvLyBGaW5kIHRvZGF5J3MgZGFpbHkgbm90ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IGRhaWx5Tm90ZSA9IGZpbGVzLmZpbmQoKGYpID0+IHtcbiAgICAgIGlmICghZi5wYXRoLnN0YXJ0c1dpdGgobm9ybWFsaXplZEZvbGRlcikgJiYgZi5wYXRoICE9PSBmb2xkZXIpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiBmLmJhc2VuYW1lID09PSB0aGlzLnRvZGF5O1xuICAgIH0pO1xuXG4gICAgaWYgKCFkYWlseU5vdGUpIHJldHVybiBbXTtcblxuICAgIC8vIFJlYWQgY2FjaGVkIGNvbnRlbnQgYW5kIHBhcnNlIHRhc2tzXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShkYWlseU5vdGUpO1xuICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgcmV0dXJuIFtdO1xuXG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGxpc3RJdGVtIG9mIGNhY2hlLmxpc3RJdGVtcykge1xuICAgICAgaWYgKGxpc3RJdGVtLnRhc2sgPT09IHVuZGVmaW5lZCkgY29udGludWU7IC8vIG5vdCBhIGNoZWNrYm94XG5cbiAgICAgIGNvbnN0IGxpbmVTdGFydCA9IGxpc3RJdGVtLnBvc2l0aW9uLnN0YXJ0LmxpbmU7XG5cbiAgICAgIC8vIFJlYWQgdGhlIGxpbmUgY29udGVudCBmcm9tIGNhY2hlIHNlY3Rpb25zXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRMaW5lQ29udGVudChkYWlseU5vdGUsIGxpbmVTdGFydCk7XG4gICAgICBpZiAoIWNvbnRlbnQpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUoY29udGVudCk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIHRhc2tzLnB1c2goe1xuICAgICAgICBpZDogYGRuLSR7ZGFpbHlOb3RlLnBhdGh9LUwke2xpbmVTdGFydH1gLFxuICAgICAgICB0aXRsZTogcGFyc2VkLnRpdGxlLFxuICAgICAgICBzb3VyY2U6IFwiZGFpbHktbm90ZVwiLFxuICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICB0aW1lOiBwYXJzZWQudGltZSxcbiAgICAgICAgZHVyYXRpb246IHBhcnNlZC5kdXJhdGlvbixcbiAgICAgICAgZG9uZTogbGlzdEl0ZW0udGFzayA9PT0gXCJ4XCIgfHwgbGlzdEl0ZW0udGFzayA9PT0gXCJYXCIsXG4gICAgICAgIGZpbGVQYXRoOiBkYWlseU5vdGUucGF0aCxcbiAgICAgICAgbGluZU51bWJlcjogbGluZVN0YXJ0LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gUGFyc2UgXCItIFsgXSBUYXNrIG5hbWUgQDE0OjAwIH4zMG1cIiBmb3JtYXRcbiAgcHJpdmF0ZSBwYXJzZVRhc2tMaW5lKGxpbmU6IHN0cmluZyk6IHsgdGl0bGU6IHN0cmluZzsgdGltZT86IHN0cmluZzsgZHVyYXRpb24/OiBudW1iZXIgfSB8IG51bGwge1xuICAgIC8vIFJlbW92ZSBjaGVja2JveCBwcmVmaXg6IFwiLSBbIF0gXCIgb3IgXCItIFt4XSBcIlxuICAgIGNvbnN0IG1hdGNoID0gbGluZS5tYXRjaCgvXlstKl1cXHMqXFxbLj9cXF1cXHMqKC4rKSQvKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcblxuICAgIGxldCB0ZXh0ID0gbWF0Y2hbMV0udHJpbSgpO1xuXG4gICAgLy8gRXh0cmFjdCBAdGltZSAoZS5nLiwgQDE0OjAwIG9yIEAycG0pXG4gICAgbGV0IHRpbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCB0aW1lTWF0Y2ggPSB0ZXh0Lm1hdGNoKC9AKFxcZHsxLDJ9KTooXFxkezJ9KVxcYi8pO1xuICAgIGlmICh0aW1lTWF0Y2gpIHtcbiAgICAgIHRpbWUgPSBgJHt0aW1lTWF0Y2hbMV0ucGFkU3RhcnQoMiwgXCIwXCIpfToke3RpbWVNYXRjaFsyXX1gO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSh0aW1lTWF0Y2hbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVHJ5IEAycG0gLyBAMTQgZm9ybWF0XG4gICAgICBjb25zdCBzaW1wbGVUaW1lID0gdGV4dC5tYXRjaCgvQChcXGR7MSwyfSlcXHMqKGFtfHBtKT9cXGIvaSk7XG4gICAgICBpZiAoc2ltcGxlVGltZSkge1xuICAgICAgICBsZXQgaG91ciA9IHBhcnNlSW50KHNpbXBsZVRpbWVbMV0pO1xuICAgICAgICBjb25zdCBwZXJpb2QgPSBzaW1wbGVUaW1lWzJdPy50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcInBtXCIgJiYgaG91ciA8IDEyKSBob3VyICs9IDEyO1xuICAgICAgICBpZiAocGVyaW9kID09PSBcImFtXCIgJiYgaG91ciA9PT0gMTIpIGhvdXIgPSAwO1xuICAgICAgICB0aW1lID0gYCR7U3RyaW5nKGhvdXIpLnBhZFN0YXJ0KDIsIFwiMFwiKX06MDBgO1xuICAgICAgICB0ZXh0ID0gdGV4dC5yZXBsYWNlKHNpbXBsZVRpbWVbMF0sIFwiXCIpLnRyaW0oKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBFeHRyYWN0IH5kdXJhdGlvbiAoZS5nLiwgfjMwbSwgfjFoLCB+MS41aClcbiAgICBsZXQgZHVyYXRpb246IG51bWJlciB8IHVuZGVmaW5lZDtcbiAgICBjb25zdCBkdXJhdGlvbk1hdGNoID0gdGV4dC5tYXRjaCgvfihcXGQrKD86XFwuXFxkKyk/KVxccyoobXxtaW58aHxocnxob3VyKXM/XFxiL2kpO1xuICAgIGlmIChkdXJhdGlvbk1hdGNoKSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHBhcnNlRmxvYXQoZHVyYXRpb25NYXRjaFsxXSk7XG4gICAgICBjb25zdCB1bml0ID0gZHVyYXRpb25NYXRjaFsyXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgZHVyYXRpb24gPSB1bml0LnN0YXJ0c1dpdGgoXCJoXCIpID8gTWF0aC5yb3VuZCh2YWx1ZSAqIDYwKSA6IE1hdGgucm91bmQodmFsdWUpO1xuICAgICAgdGV4dCA9IHRleHQucmVwbGFjZShkdXJhdGlvbk1hdGNoWzBdLCBcIlwiKS50cmltKCk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgYW55IHRyYWlsaW5nL2xlYWRpbmcgd2hpdGVzcGFjZSBvciBkYXNoZXNcbiAgICBjb25zdCB0aXRsZSA9IHRleHQucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpO1xuICAgIGlmICghdGl0bGUpIHJldHVybiBudWxsO1xuXG4gICAgcmV0dXJuIHsgdGl0bGUsIHRpbWUsIGR1cmF0aW9uIH07XG4gIH1cblxuICBwcml2YXRlIGdldExpbmVDb250ZW50KGZpbGU6IFRGaWxlLCBsaW5lTnVtYmVyOiBudW1iZXIpOiBzdHJpbmcgfCBudWxsIHtcbiAgICAvLyBVc2UgdGhlIG1ldGFkYXRhQ2FjaGUgc2VjdGlvbnMgdG8gcmVjb25zdHJ1Y3QgbGluZSBjb250ZW50XG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBpZiAoIWNhY2hlKSByZXR1cm4gbnVsbDtcblxuICAgIC8vIFdlIG5lZWQgdG8gcmVhZCBmcm9tIHRoZSB2YXVsdCBjYWNoZSBcdTIwMTQgdHJ5IGdldHRpbmcgY29udGVudCB2aWEgc2VjdGlvbnNcbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBzeW5jaHJvbm91c2x5IHJlYWQgZmlsZSBjb250ZW50LCB1c2UgdGhlIGNhY2hlZCBmcm9udG1hdHRlclxuICAgIC8vIGFuZCBsaXN0IGl0ZW1zIHRvIGJ1aWxkIHdoYXQgd2UgbmVlZFxuICAgIC8vIEFjdHVhbGx5LCBsaXN0IGl0ZW1zIGluIE9ic2lkaWFuIGNhY2hlIGRvbid0IGluY2x1ZGUgdGhlIHRleHQuXG4gICAgLy8gV2UnbGwgbmVlZCB0byByZWFkIHRoZSBmaWxlIGNvbnRlbnQuIFN0b3JlIGl0IGluIGEgbWFwIGR1cmluZyBnYXRoZXIgcGhhc2UuXG4gICAgLy8gRm9yIG5vdywgcmV0dXJuIG51bGwgXHUyMDE0IHRoZSBEYXNoYm9hcmRWaWV3IHdpbGwgcHJlLXJlYWQgZGFpbHkgbm90ZSBjb250ZW50XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBDYWxsZWQgYnkgRGFzaGJvYXJkVmlldyB3aXRoIHByZS1yZWFkIGZpbGUgY29udGVudFxuICBnZXREYWlseU5vdGVUYXNrc0Zyb21Db250ZW50KGNvbnRlbnQ6IHN0cmluZywgZmlsZVBhdGg6IHN0cmluZyk6IENhbGVuZGFyVGFza1tdIHtcbiAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAvLyBNYXRjaCB0YXNrIGxpbmVzOiAtIFsgXSBvciAtIFt4XVxuICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICBpZiAoIXBhcnNlZCkgY29udGludWU7XG5cbiAgICAgIGNvbnN0IGlzRG9uZSA9IC9eWy0qXVxccypcXFtbeFhdXFxdLy50ZXN0KGxpbmUpO1xuXG4gICAgICB0YXNrcy5wdXNoKHtcbiAgICAgICAgaWQ6IGBkbi0ke2ZpbGVQYXRofS1MJHtpfWAsXG4gICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJkYWlseS1ub3RlXCIsXG4gICAgICAgIGRhdGU6IHRoaXMudG9kYXksXG4gICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcGFyc2VkLmR1cmF0aW9uLFxuICAgICAgICBkb25lOiBpc0RvbmUsXG4gICAgICAgIGZpbGVQYXRoLFxuICAgICAgICBsaW5lTnVtYmVyOiBpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW4gSW50ZWdyYXRpb24gLS0tXG5cbiAgcHJpdmF0ZSBnZXRUYXNrc1BsdWdpblRhc2tzKCk6IENhbGVuZGFyVGFza1tdIHtcbiAgICAvLyBDaGVjayBpZiBUYXNrcyBwbHVnaW4gaXMgaW5zdGFsbGVkXG4gICAgY29uc3QgdGFza3NQbHVnaW4gPSAodGhpcy5hcHAgYXMgYW55KS5wbHVnaW5zPy5wbHVnaW5zPy5bXCJvYnNpZGlhbi10YXNrcy1wbHVnaW5cIl07XG4gICAgaWYgKCF0YXNrc1BsdWdpbikgcmV0dXJuIFtdO1xuXG4gICAgLy8gVGFza3MgcGx1Z2luIHN0b3JlcyB0YXNrcyB2aWEgbWV0YWRhdGEgY2FjaGVcbiAgICAvLyBXZSBzY2FuIGFsbCBmaWxlcyBmb3IgdGFza3Mgd2l0aCBkdWUgZGF0ZXMgbWF0Y2hpbmcgdG9kYXlcbiAgICBjb25zdCB0YXNrczogQ2FsZW5kYXJUYXNrW10gPSBbXTtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuYXBwLnZhdWx0LmdldE1hcmtkb3duRmlsZXMoKTtcblxuICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICAgIGlmICghY2FjaGU/Lmxpc3RJdGVtcykgY29udGludWU7XG5cbiAgICAgIGZvciAoY29uc3QgbGlzdEl0ZW0gb2YgY2FjaGUubGlzdEl0ZW1zKSB7XG4gICAgICAgIGlmIChsaXN0SXRlbS50YXNrID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIFRhc2tzIHBsdWdpbiB1c2VzIGVtb2ppLWJhc2VkIGRhdGVzIGluIHRoZSB0ZXh0OlxuICAgICAgICAvLyBcdUQ4M0RcdURDQzUgWVlZWS1NTS1ERCBmb3IgZHVlIGRhdGVcbiAgICAgICAgLy8gV2UgbmVlZCB0byByZWFkIHRoZSBmaWxlIHRvIGNoZWNrLCBidXQgd2UgY2FuIHVzZSB0aGUgZnJvbnRtYXR0ZXItYmFzZWRcbiAgICAgICAgLy8gYXBwcm9hY2ggb3IgdGhlIHBvc2l0aW9uIHRvIGdldCB0aGUgdGV4dC5cbiAgICAgICAgLy8gU2luY2Ugd2UgY2FuJ3Qgc3luYy1yZWFkLCB3ZSdsbCBjaGVjayBpZiBwb3NpdGlvbnMgbWVudGlvbiB0b2RheS5cbiAgICAgICAgLy8gRm9yIG5vdywgdGhpcyBpcyBhIGJlc3QtZWZmb3J0IGNoZWNrIHVzaW5nIGNhY2hlIGRhdGEuXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gQ2FsbGVkIGJ5IERhc2hib2FyZFZpZXcgd2l0aCBwcmUtc2Nhbm5lZCB0YXNrIGRhdGFcbiAgZ2V0VGFza3NQbHVnaW5UYXNrc0Zyb21GaWxlcyhmaWxlczogeyBwYXRoOiBzdHJpbmc7IGNvbnRlbnQ6IHN0cmluZyB9W10pOiBDYWxlbmRhclRhc2tbXSB7XG4gICAgY29uc3QgdGFza3M6IENhbGVuZGFyVGFza1tdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGNvbnN0IGxpbmVzID0gZmlsZS5jb250ZW50LnNwbGl0KFwiXFxuXCIpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGxpbmUgPSBsaW5lc1tpXTtcbiAgICAgICAgaWYgKCEvXlstKl1cXHMqXFxbLj9cXF1cXHMvLnRlc3QobGluZSkpIGNvbnRpbnVlO1xuXG4gICAgICAgIC8vIENoZWNrIGZvciBUYXNrcyBwbHVnaW4gZHVlIGRhdGU6IFx1RDgzRFx1RENDNSBZWVlZLU1NLUREXG4gICAgICAgIGNvbnN0IGR1ZU1hdGNoID0gbGluZS5tYXRjaCgvXFx1ezFGNEM1fVxccyooXFxkezR9LVxcZHsyfS1cXGR7Mn0pL3UpO1xuICAgICAgICBpZiAoIWR1ZU1hdGNoIHx8IGR1ZU1hdGNoWzFdICE9PSB0aGlzLnRvZGF5KSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnBhcnNlVGFza0xpbmUobGluZSk7XG4gICAgICAgIGlmICghcGFyc2VkKSBjb250aW51ZTtcblxuICAgICAgICAvLyBBbHNvIGNoZWNrIGZvciBzY2hlZHVsZWQgZGF0ZSBcdTIzRjNcbiAgICAgICAgY29uc3Qgc2NoZWR1bGVkTWF0Y2ggPSBsaW5lLm1hdGNoKC9cXHUyM0YzXFxzKihcXGR7NH0tXFxkezJ9LVxcZHsyfSkvdSk7XG4gICAgICAgIGlmIChzY2hlZHVsZWRNYXRjaCAmJiBzY2hlZHVsZWRNYXRjaFsxXSAhPT0gdGhpcy50b2RheSkgY29udGludWU7XG5cbiAgICAgICAgY29uc3QgaXNEb25lID0gL15bLSpdXFxzKlxcW1t4WF1cXF0vLnRlc3QobGluZSk7XG5cbiAgICAgICAgdGFza3MucHVzaCh7XG4gICAgICAgICAgaWQ6IGB0cC0ke2ZpbGUucGF0aH0tTCR7aX1gLFxuICAgICAgICAgIHRpdGxlOiBwYXJzZWQudGl0bGUucmVwbGFjZSgvW1xcdXsxRjRDNX1cXHUyM0YzXVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS9ndSwgXCJcIikudHJpbSgpLFxuICAgICAgICAgIHNvdXJjZTogXCJ0YXNrcy1wbHVnaW5cIixcbiAgICAgICAgICBkYXRlOiB0aGlzLnRvZGF5LFxuICAgICAgICAgIHRpbWU6IHBhcnNlZC50aW1lLFxuICAgICAgICAgIGR1cmF0aW9uOiBwYXJzZWQuZHVyYXRpb24sXG4gICAgICAgICAgZG9uZTogaXNEb25lLFxuICAgICAgICAgIGZpbGVQYXRoOiBmaWxlLnBhdGgsXG4gICAgICAgICAgbGluZU51bWJlcjogaSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgLy8gLS0tIE9wdGlvbiBDOiBCdWlsdC1pbiBRdWljayBUYXNrcyAtLS1cblxuICBwcml2YXRlIGdldFF1aWNrVGFza3MoKTogQ2FsZW5kYXJUYXNrW10ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3NcbiAgICAgIC5maWx0ZXIoKHF0KSA9PiBxdC5kYXRlID09PSB0aGlzLnRvZGF5KVxuICAgICAgLm1hcCgocXQpID0+ICh7XG4gICAgICAgIGlkOiBgcXQtJHtxdC5pZH1gLFxuICAgICAgICB0aXRsZTogcXQudGl0bGUsXG4gICAgICAgIHNvdXJjZTogXCJxdWljay10YXNrXCIgYXMgQ2FsZW5kYXJUYXNrU291cmNlLFxuICAgICAgICBkYXRlOiBxdC5kYXRlLFxuICAgICAgICB0aW1lOiBxdC50aW1lLFxuICAgICAgICBkdXJhdGlvbjogcXQuZHVyYXRpb24sXG4gICAgICAgIGRvbmU6IHF0LmRvbmUsXG4gICAgICB9KSk7XG4gIH1cblxuICAvLyAtLS0gQ29tcGxldGlvbiBoYW5kbGVycyAtLS1cblxuICAvLyBUb2dnbGUgYSBkYWlseSBub3RlIHRhc2sgZG9uZS91bmRvbmUgYnkgcmV3cml0aW5nIHRoZSBjaGVja2JveFxuICBhc3luYyB0b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoOiBzdHJpbmcsIGxpbmVOdW1iZXI6IG51bWJlciwgZG9uZTogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZmlsZVBhdGgpO1xuICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCB0aGlzLmFwcC52YXVsdC5yZWFkKGZpbGUpO1xuICAgIGNvbnN0IGxpbmVzID0gY29udGVudC5zcGxpdChcIlxcblwiKTtcblxuICAgIGlmIChsaW5lTnVtYmVyID49IGxpbmVzLmxlbmd0aCkgcmV0dXJuO1xuXG4gICAgY29uc3QgbGluZSA9IGxpbmVzW2xpbmVOdW1iZXJdO1xuICAgIGlmIChkb25lKSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiW3hdXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsaW5lc1tsaW5lTnVtYmVyXSA9IGxpbmUucmVwbGFjZSgvXFxbLlxcXS8sIFwiWyBdXCIpO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0Lm1vZGlmeShmaWxlLCBsaW5lcy5qb2luKFwiXFxuXCIpKTtcbiAgfVxuXG4gIC8vIFRvZ2dsZSBhIFRhc2tzIHBsdWdpbiB0YXNrXG4gIGFzeW5jIHRvZ2dsZVRhc2tzUGx1Z2luVGFzayhmaWxlUGF0aDogc3RyaW5nLCBsaW5lTnVtYmVyOiBudW1iZXIsIGRvbmU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBTYW1lIG1lY2hhbmlzbSBhcyBkYWlseSBub3RlcyBcdTIwMTQganVzdCB0b2dnbGUgdGhlIGNoZWNrYm94XG4gICAgYXdhaXQgdGhpcy50b2dnbGVEYWlseU5vdGVUYXNrKGZpbGVQYXRoLCBsaW5lTnVtYmVyLCBkb25lKTtcbiAgfVxuXG4gIC8vIFBvc3Rwb25lIGEgdGFzayB0byB0b21vcnJvd1xuICBhc3luYyBwb3N0cG9uZVRhc2sodGFzazogQ2FsZW5kYXJUYXNrKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZSh0aGlzLnRvZGF5KTtcbiAgICB0b21vcnJvdy5zZXREYXRlKHRvbW9ycm93LmdldERhdGUoKSArIDEpO1xuICAgIGNvbnN0IHRvbW9ycm93U3RyID0gdG9tb3Jyb3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICBpZiAodGFzay5zb3VyY2UgPT09IFwicXVpY2stdGFza1wiKSB7XG4gICAgICAvLyBVcGRhdGUgaW4gc2V0dGluZ3NcbiAgICAgIGNvbnN0IHF0ID0gdGhpcy5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbmQoXG4gICAgICAgIChxKSA9PiBgcXQtJHtxLmlkfWAgPT09IHRhc2suaWQgfHwgcS5pZCA9PT0gdGFzay5pZC5yZXBsYWNlKFwicXQtXCIsIFwiXCIpXG4gICAgICApO1xuICAgICAgaWYgKHF0KSB7XG4gICAgICAgIHF0LnBvc3Rwb25lZEZyb20gPSBxdC5wb3N0cG9uZWRGcm9tID8/IHF0LmRhdGU7XG4gICAgICAgIHF0LmRhdGUgPSB0b21vcnJvd1N0cjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRhc2suc291cmNlID09PSBcInRhc2tzLXBsdWdpblwiICYmIHRhc2suZmlsZVBhdGggIT09IHVuZGVmaW5lZCAmJiB0YXNrLmxpbmVOdW1iZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSBkdWUgZGF0ZSBpbiB0aGUgZmlsZVxuICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0YXNrLmZpbGVQYXRoKTtcbiAgICAgIGlmICghZmlsZSB8fCAhKGZpbGUgaW5zdGFuY2VvZiBURmlsZSkpIHJldHVybjtcblxuICAgICAgY29uc3QgY29udGVudCA9IGF3YWl0IHRoaXMuYXBwLnZhdWx0LnJlYWQoZmlsZSk7XG4gICAgICBjb25zdCBsaW5lcyA9IGNvbnRlbnQuc3BsaXQoXCJcXG5cIik7XG5cbiAgICAgIGlmICh0YXNrLmxpbmVOdW1iZXIgPCBsaW5lcy5sZW5ndGgpIHtcbiAgICAgICAgbGluZXNbdGFzay5saW5lTnVtYmVyXSA9IGxpbmVzW3Rhc2subGluZU51bWJlcl0ucmVwbGFjZShcbiAgICAgICAgICAvXFx1ezFGNEM1fVxccypcXGR7NH0tXFxkezJ9LVxcZHsyfS91LFxuICAgICAgICAgIGBcXHV7MUY0QzV9ICR7dG9tb3Jyb3dTdHJ9YFxuICAgICAgICApO1xuICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5tb2RpZnkoZmlsZSwgbGluZXMuam9pbihcIlxcblwiKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gLS0tIEhlbHBlcnMgLS0tXG5cbiAgcHJpdmF0ZSBwYXJzZVRpbWVUb0hvdXIodGltZTogc3RyaW5nKTogbnVtYmVyIHtcbiAgICBjb25zdCBbaCwgbV0gPSB0aW1lLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gaCArIChtID8/IDApIC8gNjA7XG4gIH1cblxuICBwcml2YXRlIGdldFNvdXJjZUVtb2ppKHNvdXJjZTogQ2FsZW5kYXJUYXNrU291cmNlKTogc3RyaW5nIHtcbiAgICBzd2l0Y2ggKHNvdXJjZSkge1xuICAgICAgY2FzZSBcImRhaWx5LW5vdGVcIjogcmV0dXJuIFwiXFx1ezFGNEREfVwiO1xuICAgICAgY2FzZSBcInRhc2tzLXBsdWdpblwiOiByZXR1cm4gXCJcXHUyNjExXFx1RkUwRlwiO1xuICAgICAgY2FzZSBcInF1aWNrLXRhc2tcIjogcmV0dXJuIFwiXFx1MjZBMVwiO1xuICAgIH1cbiAgfVxufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgSGVybyBDYXJkIENvbXBvbmVudFxuLy8gRnVsbC13aWR0aCBibHVycmVkIGJnIHdpdGggZ3JlZXRpbmcsIHJhbmsgYmFkZ2UsIGFjdGlvbiBidXR0b25zXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgT2xlbkVuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL09sZW5FbmdpbmVcIjtcbmltcG9ydCB7IEJvc3NFbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9Cb3NzRW5naW5lXCI7XG5pbXBvcnQgeyB0b1JvbWFuIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVySGVyb0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBoZXJvID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm9cIiB9KTtcbiAgaGVyby5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gQmFja2dyb3VuZCBpbWFnZVxuICBpZiAoc2V0dGluZ3MuaGVyb0JhY2tncm91bmQpIHtcbiAgICBjb25zdCBiZyA9IGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1iZ1wiIH0pO1xuICAgIGNvbnN0IHZhdWx0UGF0aCA9IHNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kO1xuICAgIGJnLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoXCIke3ZhdWx0UGF0aH1cIilgO1xuICB9XG5cbiAgLy8gRGFyayB2aWduZXR0ZSBvdmVybGF5XG4gIGhlcm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taGVyby1vdmVybGF5XCIgfSk7XG5cbiAgLy8gQ29udGVudFxuICBjb25zdCBjb250ZW50ID0gaGVyby5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1oZXJvLWNvbnRlbnRcIiB9KTtcblxuICAvLyBUaW1lLWJhc2VkIGdyZWV0aW5nXG4gIGNvbnN0IGdyZWV0aW5nID0gZ2V0R3JlZXRpbmcoc2V0dGluZ3MpO1xuICBjb250ZW50LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWdyZWV0aW5nXCIsXG4gICAgdGV4dDogYCR7Z3JlZXRpbmd9LCAke3NldHRpbmdzLnVzZXJOYW1lfS5gLFxuICB9KTtcblxuICAvLyBDb250ZXh0dWFsIHN1YnRpdGxlXG4gIGNvbnN0IHN1YnRpdGxlID0gZ2V0U3VidGl0bGUoc2V0dGluZ3MsIGVuZ2luZSk7XG4gIGNvbnRlbnQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tc3VidGl0bGVcIixcbiAgICB0ZXh0OiBzdWJ0aXRsZSxcbiAgfSk7XG5cbiAgLy8gUmFuayBiYWRnZSBwaWxsXG4gIGNvbnN0IHRpdGxlID0gZW5naW5lLmdldER5bmFtaWNUaXRsZSgpO1xuICBjb25zdCBldWRJbmRleCA9IGVuZ2luZS5nZXRFdWRhaW1vbmlhSW5kZXgoKTtcbiAgY29uc3QgYmFkZ2UgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tcmFuay1iYWRnZVwiIH0pO1xuICBiYWRnZS5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgIGNsczogXCJvbGVuLWhlcm8tcmFuay10ZXh0XCIsXG4gICAgdGV4dDogYCR7dGl0bGV9IFx1MDBCNyAke3RvUm9tYW4oZXVkSW5kZXgpfWAsXG4gIH0pO1xuXG4gIC8vIEFjdGlvbiBidXR0b25zXG4gIGNvbnN0IGFjdGlvbnMgPSBoZXJvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhlcm8tYWN0aW9uc1wiIH0pO1xuXG4gIGNvbnN0IHByb2dyZXNzQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4taGVyby1idG5cIixcbiAgICB0ZXh0OiBcIllvdXIgcHJvZ3Jlc3NcIixcbiAgfSk7XG4gIHByb2dyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgLy8gU2Nyb2xsIHRvIHRoZSBldWRhaW1vbmlhIHNlY3Rpb25cbiAgICBjb25zdCBldWRTZWN0aW9uID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIub2xlbi1jYXJkXCIpO1xuICAgIGlmIChldWRTZWN0aW9uKSBldWRTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlZmxlY3RCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZXJvLWJ0blwiLFxuICAgIHRleHQ6IFwiUmVmbGVjdFwiLFxuICB9KTtcbiAgcmVmbGVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIC8vIFNjcm9sbCB0byB0aGUgcXVvdGUgc2VjdGlvblxuICAgIGNvbnN0IHF1b3RlU2VjdGlvbiA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLm9sZW4tcXVvdGVcIik7XG4gICAgaWYgKHF1b3RlU2VjdGlvbikgcXVvdGVTZWN0aW9uLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRHcmVldGluZyhzZXR0aW5nczogT2xlblNldHRpbmdzKTogc3RyaW5nIHtcbiAgY29uc3QgbGFiZWxzID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscztcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcbiAgY29uc3QgaG91ciA9IG5vdy5nZXRIb3VycygpO1xuXG4gIGlmIChob3VyID49IDUgJiYgaG91ciA8IDEyKSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX21vcm5pbmcgPz8gXCJHb29kIG1vcm5pbmdcIjtcbiAgaWYgKGhvdXIgPj0gMTIgJiYgaG91ciA8IDE3KSByZXR1cm4gbGFiZWxzLmdyZWV0aW5nX2FmdGVybm9vbiA/PyBcIkdvb2QgYWZ0ZXJub29uXCI7XG4gIGlmIChob3VyID49IDE3ICYmIGhvdXIgPCAyMSkgcmV0dXJuIGxhYmVscy5ncmVldGluZ19ldmVuaW5nID8/IFwiR29vZCBldmVuaW5nXCI7XG4gIHJldHVybiBsYWJlbHMuZ3JlZXRpbmdfbmlnaHQgPz8gXCJHb29kIG5pZ2h0XCI7XG59XG5cbmZ1bmN0aW9uIGdldFN1YnRpdGxlKHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsIGVuZ2luZTogT2xlbkVuZ2luZSk6IHN0cmluZyB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG5cbiAgLy8gVGFydGFydXNcbiAgaWYgKHNldHRpbmdzLmluVGFydGFydXMpIHtcbiAgICByZXR1cm4gXCJUaGUgdW5kZXJ3b3JsZCBhd2FpdHMgeW91ciBwZW5hbmNlLlwiO1xuICB9XG5cbiAgLy8gQm9zcyBkYW5nZXIgem9uZVxuICBpZiAoYm9zc0VuZ2luZS5pc0RhbmdlclpvbmUoKSkge1xuICAgIHJldHVybiBcIk9uZSBmaW5hbCBibG93IHJlbWFpbnMuXCI7XG4gIH1cblxuICAvLyBBY3RpdmUgc3RyZWFrXG4gIGNvbnN0IHN0cmVhayA9IGVuZ2luZS5nZXRPdmVyYWxsU3RyZWFrKCk7XG4gIGlmIChzdHJlYWsgPj0gMykge1xuICAgIHJldHVybiBgJHtzdHJlYWt9IGRheXMgc3Ryb25nLiBLZWVwIHRoZSBmbGFtZS5gO1xuICB9XG5cbiAgLy8gRGVmYXVsdFxuICByZXR1cm4gXCJTdGVwIGJ5IHN0ZXAsIHlvdSBzaGFwZSB5b3VyIHBhdGguXCI7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBFdWRhaW1vbmlhIEJhciBDb21wb25lbnRcbi8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXIsIHN0YXQgY2FyZHMsIGNhdGVnb3J5IHJvd3Mgd2l0aCBpY29uc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuaW1wb3J0IHsgdG9Sb21hbiB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuY29uc3QgQ0FURUdPUllfSUNPTlM6IFJlY29yZDxDYXRlZ29yeSwgc3RyaW5nPiA9IHtcbiAgYm9keTogXCJcXHV7MUYzQ0J9XCIsIC8vIHdlaWdodGxpZnRlclxuICBtaW5kOiBcIlxcdXsxRjREQX1cIiwgLy8gYm9va3NcbiAgc3Bpcml0OiBcIlxcdXsxRjU0QX1cIiwgLy8gZG92ZVxufTtcblxuY29uc3QgVE9UQUxfU0VHTUVOVFMgPSAxMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFCYXIoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICAvLyAtLS0gMS4gRXVkYWltb25pYSBDYXJkIChzZWdtZW50ZWQgYmFyICsgY2hhcHRlcikgLS0tXG4gIHJlbmRlckV1ZGFpbW9uaWFDYXJkKGNvbnRhaW5lciwgc2V0dGluZ3MsIGVuZ2luZSwgc3RhZ2dlckluZGV4KTtcblxuICAvLyAtLS0gMi4gU3RhdCBDYXJkcyBSb3cgKHNlcGFyYXRlIGZyb20gdGhlIGNhcmQpIC0tLVxuICByZW5kZXJTdGF0Q2FyZHMoY29udGFpbmVyLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDEpO1xuXG4gIC8vIC0tLSAzLiBDYXRlZ29yaWVzIENhcmQgKGljb24gcm93cyB3aXRoIGJhcnMpIC0tLVxuICByZW5kZXJDYXRlZ29yaWVzQ2FyZChjb250YWluZXIsIHNldHRpbmdzLCBlbmdpbmUsIHN0YWdnZXJJbmRleCArIDIpO1xufVxuXG4vLyAtLS0tIEV1ZGFpbW9uaWEgQ2FyZCAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlckV1ZGFpbW9uaWFDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEhlYWRlcjogdGl0bGUgKyBYUFxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWV1ZGFpbW9uaWEtaGVhZGVyXCIgfSk7XG4gIGNvbnN0IGV1ZEluZGV4ID0gZW5naW5lLmdldEV1ZGFpbW9uaWFJbmRleCgpO1xuXG4gIGhlYWRlci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZXVkYWltb25pYS10aXRsZVwiLFxuICAgIHRleHQ6IGBFdWRhaW1vbmlhICR7dG9Sb21hbihldWRJbmRleCl9YCxcbiAgfSk7XG5cbiAgY29uc3QgdG90YWxYUCA9IGVuZ2luZS5nZXRBbGxDYXRlZ29yeUxldmVscygpLnJlZHVjZSgoc3VtLCBjbCkgPT4gc3VtICsgY2wueHAsIDApO1xuICBoZWFkZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWV1ZGFpbW9uaWEteHBcIixcbiAgICB0ZXh0OiBgJHt0b3RhbFhQfSBYUGAsXG4gIH0pO1xuXG4gIC8vIFNlZ21lbnRlZCBwcm9ncmVzcyBiYXJcbiAgY29uc3QgcHJvZ3Jlc3MgPSBlbmdpbmUuZ2V0RXVkYWltb25pYVByb2dyZXNzKCk7IC8vIDAtMTAwXG4gIGNvbnN0IGZpbGxlZFNlZ21lbnRzID0gTWF0aC5mbG9vcihwcm9ncmVzcyAvIFRPVEFMX1NFR01FTlRTKTtcbiAgY29uc3QgaGFzUGFydGlhbCA9IHByb2dyZXNzICUgVE9UQUxfU0VHTUVOVFMgPiAwO1xuXG4gIGNvbnN0IHNlZ21lbnRzID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRzXCIgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBUT1RBTF9TRUdNRU5UUzsgaSsrKSB7XG4gICAgbGV0IGNscyA9IFwib2xlbi1ldWRhaW1vbmlhLXNlZ21lbnRcIjtcbiAgICBpZiAoaSA8IGZpbGxlZFNlZ21lbnRzKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtZmlsbGVkXCI7XG4gICAgfSBlbHNlIGlmIChpID09PSBmaWxsZWRTZWdtZW50cyAmJiBoYXNQYXJ0aWFsKSB7XG4gICAgICBjbHMgKz0gXCIgb2xlbi1ldWRhaW1vbmlhLXNlZ21lbnQtcGFydGlhbFwiO1xuICAgIH1cbiAgICBzZWdtZW50cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gIH1cblxuICAvLyBDaGFwdGVyIGxhYmVsXG4gIGNvbnN0IGNoYXB0ZXIgPSBlbmdpbmUuZ2V0Q2hhcHRlcigpO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ldWRhaW1vbmlhLWNoYXB0ZXJcIixcbiAgICB0ZXh0OiBgQ2hhcHRlciAke3RvUm9tYW4oY2hhcHRlci5udW1iZXIpfTogJHtjaGFwdGVyLm5hbWV9YCxcbiAgfSk7XG59XG5cbi8vIC0tLS0gU3RhdCBDYXJkcyAtLS0tXG5cbmZ1bmN0aW9uIHJlbmRlclN0YXRDYXJkcyhcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGdyaWQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdHMtZ3JpZFwiIH0pO1xuICBncmlkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBjb25zdCB0b3RhbFRhc2tzID0gZW5naW5lLmdldFRvdGFsQ29tcGxldGlvbnMoKTtcbiAgY29uc3Qgc3RyZWFrID0gZW5naW5lLmdldE92ZXJhbGxTdHJlYWsoKTtcbiAgY29uc3QgcHJlc2VuY2UgPSBlbmdpbmUuZ2V0RGF5c09mUHJlc2VuY2UoKTtcblxuICAvLyBPYmplY3RpdmVzIGNhcmRcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUYzQUZ9XCIsIHRvdGFsVGFza3MsIFwiT2JqZWN0aXZlc1wiKTtcblxuICAvLyBTdHJlYWsgY2FyZCAod2l0aCBzdHJlYWsgZG90cylcbiAgY3JlYXRlU3RhdENhcmQoZ3JpZCwgXCJcXHV7MUY1MjV9XCIsIHN0cmVhaywgXCJTdHJlYWtcIiwgc3RyZWFrKTtcblxuICAvLyBDb25zaXN0ZW5jeSBjYXJkXG4gIGNyZWF0ZVN0YXRDYXJkKGdyaWQsIFwiXFx1ezI3Mjh9XCIsIHByZXNlbmNlLCBcIkNvbnNpc3RlbmN5XCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTdGF0Q2FyZChcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgaWNvbjogc3RyaW5nLFxuICB2YWx1ZTogbnVtYmVyLFxuICBsYWJlbDogc3RyaW5nLFxuICBzdHJlYWtEYXlzPzogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgY2FyZCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zdGF0LWNhcmRcIiB9KTtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWljb25cIiwgdGV4dDogaWNvbiB9KTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXN0YXQtY2FyZC12YWx1ZVwiLCB0ZXh0OiBTdHJpbmcodmFsdWUpIH0pO1xuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWxhYmVsXCIsIHRleHQ6IGxhYmVsIH0pO1xuXG4gIC8vIFN0cmVhayBkb3RzIChzaG93IGxhc3QgNyBkYXlzKVxuICBpZiAoc3RyZWFrRGF5cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG90cyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc3RhdC1jYXJkLWRvdHNcIiB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgbGV0IGNscyA9IFwib2xlbi1zdGF0LWRvdFwiO1xuICAgICAgaWYgKGkgPCBzdHJlYWtEYXlzKSB7XG4gICAgICAgIGNscyArPSBcIiBvbGVuLXN0YXQtZG90LWFjdGl2ZVwiO1xuICAgICAgfVxuICAgICAgZG90cy5jcmVhdGVEaXYoeyBjbHMgfSk7XG4gICAgfVxuICB9XG59XG5cbi8vIC0tLS0gQ2F0ZWdvcmllcyBDYXJkIC0tLS1cblxuZnVuY3Rpb24gcmVuZGVyQ2F0ZWdvcmllc0NhcmQoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmRcIiB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gRHluYW1pYyB0aXRsZVxuICBjb25zdCB0aXRsZSA9IGVuZ2luZS5nZXREeW5hbWljVGl0bGUoKTtcbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWR5bmFtaWMtdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG5cbiAgLy8gRGl2aWRlclxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICAvLyBDYXRlZ29yeSByb3dzXG4gIGNvbnN0IGdyaWQgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3JpZXMtZ3JpZFwiIH0pO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgeyBrZXk6IFwiYm9keVwiLCBsYWJlbDogXCJCb2R5XCIgfSxcbiAgICB7IGtleTogXCJtaW5kXCIsIGxhYmVsOiBcIk1pbmRcIiB9LFxuICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICBdO1xuXG4gIGZvciAoY29uc3QgY2F0IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBsZXZlbCA9IGVuZ2luZS5nZXRDYXRlZ29yeUxldmVsKGNhdC5rZXkpO1xuICAgIGNvbnN0IGNvbG9yID0gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0LmtleV07XG5cbiAgICBjb25zdCByb3cgPSBncmlkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LXJvd1wiIH0pO1xuXG4gICAgLy8gSWNvbiBib3hcbiAgICBjb25zdCBpY29uQm94ID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWljb25cIiB9KTtcbiAgICBpY29uQm94LnN0eWxlLmJhY2tncm91bmQgPSBgJHtjb2xvcn0yMmA7IC8vIDEzJSBvcGFjaXR5IHRpbnRcbiAgICBpY29uQm94LnRleHRDb250ZW50ID0gQ0FURUdPUllfSUNPTlNbY2F0LmtleV07XG5cbiAgICAvLyBJbmZvIGNvbHVtblxuICAgIGNvbnN0IGluZm8gPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktaW5mb1wiIH0pO1xuXG4gICAgLy8gTmFtZSArIGxldmVsIHJvd1xuICAgIGNvbnN0IG5hbWVSb3cgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LW5hbWUtcm93XCIgfSk7XG4gICAgbmFtZVJvdy5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi1jYXRlZ29yeS1uYW1lXCIsIHRleHQ6IGNhdC5sYWJlbCB9KTtcbiAgICBuYW1lUm93LmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1jYXRlZ29yeS1sZXZlbC10ZXh0XCIsXG4gICAgICB0ZXh0OiBgTHYgJHtsZXZlbC5sZXZlbH0gXHUwMEI3ICR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9LzEwMGAsXG4gICAgfSk7XG5cbiAgICAvLyBQcm9ncmVzcyBiYXJcbiAgICBjb25zdCBiYXIgPSBpbmZvLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhdGVnb3J5LWJhclwiIH0pO1xuICAgIGNvbnN0IGZpbGwgPSBiYXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2F0ZWdvcnktYmFyLWZpbGxcIiB9KTtcbiAgICBmaWxsLnN0eWxlLndpZHRoID0gYCR7bGV2ZWwucHJvZ3Jlc3NUb05leHR9JWA7XG4gICAgZmlsbC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IERpcmVjdGl2ZSBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBjYXJkIG9uIGRhc2hib2FyZCArIGV4cGFuZGVkIGJvdHRvbS1zaGVldCBvdmVybGF5XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFByaW9yaXR5UmVhc29uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEaXJlY3RpdmVDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvbkVudGVyV29ya3NwYWNlPzogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHN1Z2dlc3Rpb24gPSBlbmdpbmUuZ2V0U3VnZ2VzdGlvbigpO1xuICBpZiAoIXN1Z2dlc3Rpb24pIHJldHVybjtcblxuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMuZGlyZWN0aXZlX3RpdGxlID8/IFwiVEhFIERJUkVDVElWRVwiO1xuICBjb25zdCBiZWdpbkxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5iZWdpbl93b3Jrc3BhY2UgPz8gXCJFTlRFUiBXT1JLU1BBQ0VcIjtcbiAgY29uc3Qgbm90Tm93TGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLm5vdF9ub3cgPz8gXCJOT1QgTk9XXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ29tcGFjdCBjYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZCBvbGVuLWRpcmVjdGl2ZVwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBIZWFkZXIgd2l0aCBiYWRnZVxuICBjb25zdCBoZWFkZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpcmVjdGl2ZS1oZWFkZXJcIiB9KTtcbiAgaGVhZGVyLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICBjb25zdCBiYWRnZSA9IGhlYWRlci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXJlY3RpdmUtYmFkZ2VcIiB9KTtcbiAgYmFkZ2Uuc3R5bGUuYmFja2dyb3VuZCA9IGdldEJhZGdlQ29sb3Ioc3VnZ2VzdGlvbi5yZWFzb24pO1xuXG4gIC8vIEFjdGl2aXR5IGluZm9cbiAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGl2aXR5XCIsXG4gICAgdGV4dDogYCR7c3VnZ2VzdGlvbi5lbW9qaX0gJHtzdWdnZXN0aW9uLmFjdGl2aXR5TmFtZX1gLFxuICB9KTtcblxuICBjb25zdCBuZWdsZWN0VGV4dCA9IHN1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmUgPCA5OTlcbiAgICA/IGAke3N1Z2dlc3Rpb24uZGF5c1NpbmNlTGFzdERvbmV9IGRheXMgbmVnbGVjdGVkYFxuICAgIDogXCJOb3QgeWV0IHN0YXJ0ZWRcIjtcblxuICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLW5lZ2xlY3RcIiwgdGV4dDogbmVnbGVjdFRleHQgfSk7XG5cbiAgLy8gQWN0aW9uIGJ1dHRvbnNcbiAgY29uc3QgYWN0aW9ucyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICBjb25zdCBiZWdpbkJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1wcmltYXJ5XCIsXG4gICAgdGV4dDogYmVnaW5MYWJlbCxcbiAgfSk7XG4gIGJlZ2luQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgb25FbnRlcldvcmtzcGFjZT8uKHN1Z2dlc3Rpb24uYWN0aXZpdHlJZCk7XG4gIH0pO1xuXG4gIGNvbnN0IG5vdE5vd0J0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgIGNsczogXCJvbGVuLWJ0biBvbGVuLWJ0bi1zZWNvbmRhcnlcIixcbiAgICB0ZXh0OiBub3ROb3dMYWJlbCxcbiAgfSk7XG4gIG5vdE5vd0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIERpc21pc3MgdGhpcyBjYXJkIHdpdGggYSBmYWRlXG4gICAgY2FyZC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoLTEwcHgpXCI7XG4gICAgY2FyZC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zcyBlYXNlXCI7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYXJkLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9LCAzMDApO1xuICB9KTtcblxuICAvLyBUYXAgY2FyZCB0byBleHBhbmRcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHNob3dFeHBhbmRlZERpcmVjdGl2ZShjb250YWluZXIsIHNldHRpbmdzLCBzdWdnZXN0aW9uLCBiZWdpbkxhYmVsLCBub3ROb3dMYWJlbCwgb25FbnRlcldvcmtzcGFjZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93RXhwYW5kZWREaXJlY3RpdmUoXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN1Z2dlc3Rpb246IHsgYWN0aXZpdHlJZDogc3RyaW5nOyBhY3Rpdml0eU5hbWU6IHN0cmluZzsgZW1vamk6IHN0cmluZzsgcmVhc29uOiBQcmlvcml0eVJlYXNvbjsgZGF5c1NpbmNlTGFzdERvbmU6IG51bWJlcjsgbG9yZVRleHQ6IHN0cmluZyB9LFxuICBiZWdpbkxhYmVsOiBzdHJpbmcsXG4gIG5vdE5vd0xhYmVsOiBzdHJpbmcsXG4gIG9uRW50ZXJXb3Jrc3BhY2U/OiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkIHtcbiAgLy8gQ3JlYXRlIG92ZXJsYXlcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICBjb25zdCBzaGVldCA9IG92ZXJsYXkuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXRcIiB9KTtcblxuICAvLyBIYW5kbGUgYmFyXG4gIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gIC8vIFRpdGxlXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsXG4gICAgdGV4dDogc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5kaXJlY3RpdmVfdGl0bGUgPz8gXCJUSEUgRElSRUNUSVZFXCIsXG4gIH0pO1xuXG4gIC8vIEFjdGl2aXR5IG5hbWVcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWRpcmVjdGl2ZS1hY3Rpdml0eVwiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAyMnB4OyBtYXJnaW46IDE2cHggMCA4cHg7XCIgfSxcbiAgICB0ZXh0OiBgJHtzdWdnZXN0aW9uLmVtb2ppfSAke3N1Z2dlc3Rpb24uYWN0aXZpdHlOYW1lfWAsXG4gIH0pO1xuXG4gIC8vIE5lZ2xlY3QgZGVzY3JpcHRpb25cbiAgY29uc3QgbmVnbGVjdERlc2MgPSBzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lIDwgOTk5XG4gICAgPyBgJHtzdWdnZXN0aW9uLmRheXNTaW5jZUxhc3REb25lfSBkYXlzIHNpbmNlIHlvdSBsYXN0IHByYWN0aWNlZC4gVGhlIHNraWxsIGF0cm9waGllcy5gXG4gICAgOiBcIkEgbmV3IHBhdGggYXdhaXRzLiBUYWtlIHRoZSBmaXJzdCBzdGVwLlwiO1xuXG4gIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib2R5LWl0YWxpY1wiLFxuICAgIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTJweDtcIiB9LFxuICAgIHRleHQ6IG5lZ2xlY3REZXNjLFxuICB9KTtcblxuICAvLyBMb3JlIHRleHRcbiAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXNoZWV0LWxvcmVcIixcbiAgICB0ZXh0OiBgXCIke3N1Z2dlc3Rpb24ubG9yZVRleHR9XCJgLFxuICB9KTtcblxuICAvLyBSYW5kb20gcXVvdGVcbiAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICBjb25zdCBxdW90ZVNlY3Rpb24gPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldC1xdW90ZVwiIH0pO1xuICBxdW90ZVNlY3Rpb24uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIHRleHQ6IGBcIiR7cXVvdGUudGV4dH1cImAsXG4gICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgfSk7XG4gIHF1b3RlU2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgY2xzOiBcIm9sZW4tcXVvdGUtYXR0cmlidXRpb25cIixcbiAgICB0ZXh0OiBgXHUyMDE0ICR7cXVvdGUuYXR0cmlidXRpb259YCxcbiAgfSk7XG5cbiAgLy8gQWN0aW9uc1xuICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcbiAgYWN0aW9ucy5zdHlsZS5tYXJnaW5Ub3AgPSBcIjIwcHhcIjtcbiAgYWN0aW9ucy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbiAgY29uc3QgYmVnaW5CdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeVwiLFxuICAgIHRleHQ6IGJlZ2luTGFiZWwsXG4gIH0pO1xuICBiZWdpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNsb3NlU2hlZXQoKTtcbiAgICBvbkVudGVyV29ya3NwYWNlPy4oc3VnZ2VzdGlvbi5hY3Rpdml0eUlkKTtcbiAgfSk7XG5cbiAgY29uc3Qgbm90Tm93QnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgIHRleHQ6IG5vdE5vd0xhYmVsLFxuICB9KTtcbiAgbm90Tm93QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICAvLyBDbG9zZSBvbiBvdmVybGF5IHRhcFxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkgY2xvc2VTaGVldCgpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbG9zZVNoZWV0KCk6IHZvaWQge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICB9XG5cbiAgLy8gQXBwZW5kIGFuZCBhbmltYXRlIGluXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEJhZGdlQ29sb3IocmVhc29uOiBQcmlvcml0eVJlYXNvbik6IHN0cmluZyB7XG4gIHN3aXRjaCAocmVhc29uKSB7XG4gICAgY2FzZSBcImRlYXRoXCI6IHJldHVybiBcIiNlZjQ0NDRcIjtcbiAgICBjYXNlIFwiYm9zc1wiOiByZXR1cm4gXCIjZWFiMzA4XCI7XG4gICAgY2FzZSBcIm5lZ2xlY3RcIjogcmV0dXJuIFwiI2Y5NzMxNlwiO1xuICAgIGNhc2UgXCJ3ZWVrbHlcIjogcmV0dXJuIFwiIzNiODJmNlwiO1xuICAgIGNhc2UgXCJjaGFpblwiOiByZXR1cm4gXCIjOGI1Y2Y2XCI7XG4gICAgY2FzZSBcInRpbWVcIjogcmV0dXJuIFwiIzA2YjZkNFwiO1xuICAgIGNhc2UgXCJiYWxhbmNlZFwiOiByZXR1cm4gXCIjZmZmZmZmXCI7XG4gICAgZGVmYXVsdDogcmV0dXJuIFwiIzkyOGQ4NVwiO1xuICB9XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBCb3NzIFN0YXR1cyBDYXJkIENvbXBvbmVudFxuLy8gQ29tcGFjdCBib3NzIEhQIGJhciB3aXRoIHRpZXIgYW5kIHJhbmtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncyB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQm9zc0VuZ2luZSB9IGZyb20gXCIuLi9lbmdpbmVzL0Jvc3NFbmdpbmVcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckJvc3NTdGF0dXNDYXJkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlclxuKTogdm9pZCB7XG4gIGNvbnN0IGJvc3NFbmdpbmUgPSBuZXcgQm9zc0VuZ2luZShzZXR0aW5ncyk7XG4gIGNvbnN0IHN0YXR1cyA9IGJvc3NFbmdpbmUuZ2V0Qm9zc1N0YXR1cygpO1xuXG4gIGNvbnN0IGxhYmVsID0gc2V0dGluZ3MuZGV2Q29uZmlnLmxhYmVscy5ib3NzX3N0YXR1c190aXRsZSA/PyBcIkJPU1MgU1RBVFVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2FyZFxuICBjb25zdCBjYXJkQ2xzID0gc3RhdHVzLmluVGFydGFydXMgPyBcIm9sZW4tY2FyZC1jb21wYWN0IG9sZW4tY2FyZC10YXJ0YXJ1c1wiIDogXCJvbGVuLWNhcmQtY29tcGFjdFwiO1xuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogY2FyZENscyB9KTtcbiAgY2FyZC5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gUm93OiBlbW9qaSArIGluZm9cbiAgY29uc3Qgcm93ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1ib3NzLXJvd1wiIH0pO1xuXG4gIHJvdy5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWJvc3MtZW1vamlcIiwgdGV4dDogZ2V0Qm9zc0Vtb2ppKHN0YXR1cy50aWVyKSB9KTtcblxuICBjb25zdCBpbmZvID0gcm93LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWJvc3MtaW5mb1wiIH0pO1xuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYm9zcy1uYW1lXCIsIHRleHQ6IHN0YXR1cy5ib3NzLm5hbWUgfSk7XG4gIGluZm8uY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLWJvc3MtdGllclwiLFxuICAgIHRleHQ6IGBUaWVyICR7c3RhdHVzLnRpZXJ9IFx1MDBCNyAke3N0YXR1cy5yYW5rfWAsXG4gIH0pO1xuXG4gIC8vIEhQIGJhclxuICBjb25zdCBocEJhciA9IGluZm8uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4taHAtYmFyXCIgfSk7XG4gIGNvbnN0IGhwRmlsbCA9IGhwQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWhwLWJhci1maWxsXCIgfSk7XG4gIGhwRmlsbC5zdHlsZS53aWR0aCA9IGAke3N0YXR1cy5wZXJjZW50fSVgO1xuICBocEZpbGwuc3R5bGUuYmFja2dyb3VuZCA9IGJvc3NFbmdpbmUuZ2V0SFBDb2xvcihzdGF0dXMucGVyY2VudCk7XG5cbiAgLy8gSFAgdGV4dFxuICBpbmZvLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1ib3NzLWhwLXRleHRcIixcbiAgICB0ZXh0OiBgJHtzdGF0dXMuY3VycmVudEhQfS8ke3N0YXR1cy5tYXhIUH0gSFAgKCR7c3RhdHVzLnBlcmNlbnR9JSlgLFxuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Qm9zc0Vtb2ppKHRpZXI6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGVtb2ppczogUmVjb3JkPG51bWJlciwgc3RyaW5nPiA9IHtcbiAgICAxOiBcIlxcdXsxRjQ3Qn1cIiwgMjogXCJcXHV7MUY5REN9XCIsIDM6IFwiXFx1ezFGNDA5fVwiLCA0OiBcIlxcdXsxRjQwMn1cIixcbiAgICA1OiBcIlxcdXsxRjQwRH1cIiwgNjogXCJcXHV7MUY5ODF9XCIsIDc6IFwiXFx1ezFGNTI1fVwiLCA4OiBcIlxcdXsxRjQzQX1cIixcbiAgICA5OiBcIlxcdXsxRjMwQX1cIiwgMTA6IFwiXFx1ezFGNDdGfVwiLCAxMTogXCJcXHV7MUYzMjl9XCIsIDEyOiBcIlxcdTIzMUJcIixcbiAgICAxMzogXCJcXHV7MUYzMDB9XCIsXG4gIH07XG4gIHJldHVybiBlbW9qaXNbdGllcl0gPz8gXCJcXHUyNjk0XFx1RkUwRlwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgV2Vla2x5IFJoeXRobSBDb21wb25lbnRcbi8vIDctZGF5IGJhciBjaGFydCB3aXRoIGNhdGVnb3J5IHN0YWNraW5nICsgc3RhdHMgcm93XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXZWVrbHlSaHl0aG0oXG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIGVuZ2luZTogT2xlbkVuZ2luZSxcbiAgc3RhZ2dlckluZGV4OiBudW1iZXJcbik6IHZvaWQge1xuICBjb25zdCBsYWJlbCA9IHNldHRpbmdzLmRldkNvbmZpZy5sYWJlbHMud2Vla2x5X3JoeXRobV90aXRsZSA/PyBcIldFRUtMWSBSSFlUSE1cIjtcblxuICAvLyBTZWN0aW9uIHRpdGxlXG4gIGNvbnN0IHRpdGxlRWwgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2VjdGlvbi10aXRsZVwiIH0pO1xuICB0aXRsZUVsLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBsYWJlbCB9KTtcblxuICAvLyBDYXJkXG4gIGNvbnN0IGNhcmQgPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tY2FyZFwiIH0pO1xuICBjYXJkLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICAvLyBTdGF0cyByb3dcbiAgY29uc3Qgc3RhdHMgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1zdGF0c1wiIH0pO1xuXG4gIGNvbnN0IGFjdGl2ZURheXMgPSBlbmdpbmUuZ2V0QWN0aXZlRGF5c1RoaXNXZWVrKCk7XG4gIGNvbnN0IGJlc3REYXkgPSBlbmdpbmUuZ2V0QmVzdERheVRoaXNXZWVrKCk7XG4gIGNvbnN0IHRvdGFsQ29tcGxldGlvbnMgPSBlbmdpbmUuZ2V0VG90YWxDb21wbGV0aW9ucygpO1xuXG4gIGNyZWF0ZVdlZWtseVN0YXQoc3RhdHMsIFN0cmluZyhhY3RpdmVEYXlzKSArIFwiLzdcIiwgXCJBY3RpdmUgZGF5c1wiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgYmVzdERheSwgXCJCZXN0IGRheVwiKTtcbiAgY3JlYXRlV2Vla2x5U3RhdChzdGF0cywgU3RyaW5nKHRvdGFsQ29tcGxldGlvbnMpLCBcIlRvdGFsXCIpO1xuXG4gIC8vIERpdmlkZXJcbiAgY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1kaXZpZGVyXCIgfSk7XG5cbiAgLy8gQmFyIGNoYXJ0XG4gIGNvbnN0IHdlZWtseURhdGEgPSBlbmdpbmUuZ2V0V2Vla2x5Q29tcGxldGlvbnNCeURheSgpO1xuICBjb25zdCBub3cgPSBzZXR0aW5ncy5zaW11bGF0ZWREYXRlID8gbmV3IERhdGUoc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSkgOiBuZXcgRGF0ZSgpO1xuICBjb25zdCB0b2RheVN0ciA9IG5ldyBEYXRlKG5vdykudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgLy8gRmluZCBtYXggdG90YWwgZm9yIHNjYWxpbmdcbiAgbGV0IG1heFRvdGFsID0gMTtcbiAgZm9yIChjb25zdCBkYXkgb2Ygd2Vla2x5RGF0YSkge1xuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG4gICAgaWYgKHRvdGFsID4gbWF4VG90YWwpIG1heFRvdGFsID0gdG90YWw7XG4gIH1cblxuICBjb25zdCBiYXJzQ29udGFpbmVyID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyc1wiIH0pO1xuXG4gIGZvciAoY29uc3QgZGF5IG9mIHdlZWtseURhdGEpIHtcbiAgICBjb25zdCBjb2wgPSBiYXJzQ29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdlZWtseS1iYXItY29sXCIgfSk7XG5cbiAgICAvLyBTdGFja2VkIGJhclxuICAgIGxldCB0b3RhbCA9IDA7XG4gICAgZGF5LmNvbXBsZXRpb25zLmZvckVhY2goKHYpID0+IHsgdG90YWwgKz0gdjsgfSk7XG5cbiAgICBjb25zdCBiYXJIZWlnaHQgPSBtYXhUb3RhbCA+IDAgPyBNYXRoLm1heCg0LCAodG90YWwgLyBtYXhUb3RhbCkgKiAxMDApIDogNDtcbiAgICBjb25zdCBiYXJFbCA9IGNvbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyXCIgfSk7XG4gICAgYmFyRWwuc3R5bGUuaGVpZ2h0ID0gYCR7YmFySGVpZ2h0fXB4YDtcbiAgICBiYXJFbC5zdHlsZS5taW5IZWlnaHQgPSBcIjRweFwiO1xuXG4gICAgaWYgKGRheS5kYXRlID09PSB0b2RheVN0cikge1xuICAgICAgYmFyRWwuY2xhc3NMaXN0LmFkZChcIm9sZW4td2Vla2x5LWJhci10b2RheVwiKTtcbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgc3RhY2tlZCBzZWdtZW50c1xuICAgIGNvbnN0IGNhdGVnb3JpZXM6IENhdGVnb3J5W10gPSBbXCJib2R5XCIsIFwibWluZFwiLCBcInNwaXJpdFwiXTtcbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBjb25zdCBjYXRDb3VudCA9IGRheS5jb21wbGV0aW9ucy5nZXQoY2F0KSA/PyAwO1xuICAgICAgaWYgKGNhdENvdW50ID09PSAwKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHNlZ0hlaWdodCA9IHRvdGFsID4gMCA/IChjYXRDb3VudCAvIHRvdGFsKSAqIDEwMCA6IDA7XG4gICAgICBjb25zdCBzZWcgPSBiYXJFbC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktYmFyLXNlZ21lbnRcIiB9KTtcbiAgICAgIHNlZy5zdHlsZS5oZWlnaHQgPSBgJHtzZWdIZWlnaHR9JWA7XG4gICAgICBzZWcuc3R5bGUuYmFja2dyb3VuZCA9IGdldENhdGVnb3J5Q29sb3IoY2F0LCBzZXR0aW5ncyk7XG4gICAgfVxuXG4gICAgLy8gSWYgbm8gY29tcGxldGlvbnMsIHNob3cgZW1wdHkgYmFyXG4gICAgaWYgKHRvdGFsID09PSAwKSB7XG4gICAgICBiYXJFbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpXCI7XG4gICAgfVxuXG4gICAgLy8gRGF5IGxhYmVsXG4gICAgY29sLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LWRheS1sYWJlbFwiLCB0ZXh0OiBkYXkuZGF5LmNoYXJBdCgwKSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWVrbHlTdGF0KHBhcmVudDogSFRNTEVsZW1lbnQsIHZhbHVlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcpOiB2b2lkIHtcbiAgY29uc3Qgc3RhdCA9IHBhcmVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdFwiIH0pO1xuICBzdGF0LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4td2Vla2x5LXN0YXQtdmFsdWVcIiwgdGV4dDogdmFsdWUgfSk7XG4gIHN0YXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13ZWVrbHktc3RhdC1sYWJlbFwiLCB0ZXh0OiBsYWJlbCB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2F0ZWdvcnlDb2xvcihjYXRlZ29yeTogQ2F0ZWdvcnksIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MpOiBzdHJpbmcge1xuICByZXR1cm4gc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbY2F0ZWdvcnldID8/IFwiIzkyOGQ4NVwiO1xufVxuIiwgIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gT2xlbiBcdTIwMTQgQWN0aXZpdHkgR3JpZCBDb21wb25lbnRcbi8vIDItY29sdW1uIGdyaWQgb2YgYWN0aXZpdHkgY2FyZHMgd2l0aCBwcm9ncmVzcyByaW5nc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzLCBDYXRlZ29yeSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBPbGVuRW5naW5lIH0gZnJvbSBcIi4uL2VuZ2luZXMvT2xlbkVuZ2luZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyQWN0aXZpdHlHcmlkKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBlbmdpbmU6IE9sZW5FbmdpbmUsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyXG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmFjdGl2aXR5X2dyaWRfdGl0bGUgPz8gXCJBQ1RJVklUSUVTXCI7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gR3JpZCBjb250YWluZXJcbiAgY29uc3QgZ3JpZCA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1ncmlkXCIgfSk7XG4gIGdyaWQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIGNvbnN0IGNvbHVtbnMgPSBzZXR0aW5ncy5kZXZDb25maWcuYWN0aXZpdHlHcmlkQ29sdW1ucyA/PyAyO1xuICBncmlkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7Y29sdW1uc30sIDFmcilgO1xuXG4gIGNvbnN0IGFjdGl2aXRpZXMgPSBlbmdpbmUuZ2V0RW5hYmxlZEFjdGl2aXRpZXMoKTtcblxuICBmb3IgKGNvbnN0IGFjdGl2aXR5IG9mIGFjdGl2aXRpZXMpIHtcbiAgICBjb25zdCBjYXJkID0gZ3JpZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1jYXJkXCIgfSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgYmFyXG4gICAgY29uc3QgYWNjZW50ID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1hY3Rpdml0eS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2FjdGl2aXR5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcblxuICAgIC8vIFRvcCByb3c6IGVtb2ppICsgc3RhdHVzIGRvdFxuICAgIGNvbnN0IHRvcCA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktdG9wXCIgfSk7XG4gICAgdG9wLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktZW1vamlcIiwgdGV4dDogYWN0aXZpdHkuZW1vamkgfSk7XG5cbiAgICBjb25zdCBkYXlzU2luY2UgPSBlbmdpbmUuZ2V0RGF5c1NpbmNlTGFzdERvbmUoYWN0aXZpdHkuaWQpO1xuICAgIGNvbnN0IGRvdENscyA9IGdldERvdENsYXNzKGRheXNTaW5jZSk7XG4gICAgdG9wLmNyZWF0ZURpdih7IGNsczogYG9sZW4tYWN0aXZpdHktZG90ICR7ZG90Q2xzfWAgfSk7XG5cbiAgICAvLyBBY3Rpdml0eSBuYW1lXG4gICAgY2FyZC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWFjdGl2aXR5LW5hbWVcIiwgdGV4dDogYWN0aXZpdHkubmFtZSB9KTtcblxuICAgIC8vIFdlZWtseSBwcm9ncmVzc1xuICAgIGNvbnN0IHByb2dyZXNzID0gZW5naW5lLmdldFdlZWtseVByb2dyZXNzKGFjdGl2aXR5LmlkKTtcbiAgICBjb25zdCBwcm9ncmVzc1JvdyA9IGNhcmQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tYWN0aXZpdHktcHJvZ3Jlc3NcIiB9KTtcblxuICAgIC8vIFByb2dyZXNzIHJpbmcgKFNWRylcbiAgICBjb25zdCByaW5nID0gY3JlYXRlUHJvZ3Jlc3NSaW5nKHByb2dyZXNzLmRvbmUsIHByb2dyZXNzLnRhcmdldCwgc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbYWN0aXZpdHkuY2F0ZWdvcnldKTtcbiAgICBwcm9ncmVzc1Jvdy5hcHBlbmRDaGlsZChyaW5nKTtcblxuICAgIHByb2dyZXNzUm93LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWFjdGl2aXR5LXByb2dyZXNzLXRleHRcIixcbiAgICAgIHRleHQ6IGAke3Byb2dyZXNzLmRvbmV9IG9mICR7cHJvZ3Jlc3MudGFyZ2V0fWAsXG4gICAgfSk7XG5cbiAgICAvLyBTdHJlYWtcbiAgICBjb25zdCBzdHJlYWsgPSBlbmdpbmUuZ2V0QWN0aXZpdHlTdHJlYWsoYWN0aXZpdHkuaWQpO1xuICAgIGlmIChzdHJlYWsgPiAwKSB7XG4gICAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tYWN0aXZpdHktc3RyZWFrXCIsXG4gICAgICAgIHRleHQ6IGAke3N0cmVha30gZGF5IHN0cmVha2AsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RG90Q2xhc3MoZGF5c1NpbmNlOiBudW1iZXIpOiBzdHJpbmcge1xuICBpZiAoZGF5c1NpbmNlID09PSAwKSByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1ncmVlblwiO1xuICBpZiAoZGF5c1NpbmNlIDw9IDEpIHJldHVybiBcIm9sZW4tYWN0aXZpdHktZG90LXllbGxvd1wiO1xuICByZXR1cm4gXCJvbGVuLWFjdGl2aXR5LWRvdC1yZWRcIjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZ3Jlc3NSaW5nKGRvbmU6IG51bWJlciwgdGFyZ2V0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiBTVkdTVkdFbGVtZW50IHtcbiAgY29uc3Qgc2l6ZSA9IDI0O1xuICBjb25zdCBzdHJva2VXaWR0aCA9IDIuNTtcbiAgY29uc3QgcmFkaXVzID0gKHNpemUgLSBzdHJva2VXaWR0aCkgLyAyO1xuICBjb25zdCBjaXJjdW1mZXJlbmNlID0gMiAqIE1hdGguUEkgKiByYWRpdXM7XG4gIGNvbnN0IHBlcmNlbnQgPSB0YXJnZXQgPiAwID8gTWF0aC5taW4oMSwgZG9uZSAvIHRhcmdldCkgOiAwO1xuICBjb25zdCBkYXNoT2Zmc2V0ID0gY2lyY3VtZmVyZW5jZSAqICgxIC0gcGVyY2VudCk7XG5cbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBTdHJpbmcoc2l6ZSkpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFN0cmluZyhzaXplKSk7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIGAwIDAgJHtzaXplfSAke3NpemV9YCk7XG4gIHN2Zy5jbGFzc0xpc3QuYWRkKFwib2xlbi1hY3Rpdml0eS1wcm9ncmVzcy1yaW5nXCIpO1xuXG4gIC8vIEJhY2tncm91bmQgY2lyY2xlXG4gIGNvbnN0IGJnQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgYmdDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIGJnQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgXCJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpXCIpO1xuICBiZ0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHN2Zy5hcHBlbmRDaGlsZChiZ0NpcmNsZSk7XG5cbiAgLy8gUHJvZ3Jlc3MgY2lyY2xlXG4gIGNvbnN0IHByb2dyZXNzQ2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImN4XCIsIFN0cmluZyhzaXplIC8gMikpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBTdHJpbmcoc2l6ZSAvIDIpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwiclwiLCBTdHJpbmcocmFkaXVzKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2VcIiwgY29sb3IpO1xuICBwcm9ncmVzc0NpcmNsZS5zZXRBdHRyaWJ1dGUoXCJzdHJva2Utd2lkdGhcIiwgU3RyaW5nKHN0cm9rZVdpZHRoKSk7XG4gIHByb2dyZXNzQ2lyY2xlLnNldEF0dHJpYnV0ZShcInN0cm9rZS1kYXNoYXJyYXlcIiwgU3RyaW5nKGNpcmN1bWZlcmVuY2UpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWRhc2hvZmZzZXRcIiwgU3RyaW5nKGRhc2hPZmZzZXQpKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwic3Ryb2tlLWxpbmVjYXBcIiwgXCJyb3VuZFwiKTtcbiAgcHJvZ3Jlc3NDaXJjbGUuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIGByb3RhdGUoLTkwICR7c2l6ZSAvIDJ9ICR7c2l6ZSAvIDJ9KWApO1xuICBzdmcuYXBwZW5kQ2hpbGQocHJvZ3Jlc3NDaXJjbGUpO1xuXG4gIHJldHVybiBzdmc7XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBUZW1wbGUgQ2hpcHMgQ29tcG9uZW50XG4vLyBIb3Jpem9udGFsIHNjcm9sbGFibGUgY2hpcHMgZm9yIHNlbGYtY2FyZSB0YXNrIHRyYWNraW5nXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHR5cGUgeyBPbGVuU2V0dGluZ3MsIFRlbXBsZVRhc2sgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclRlbXBsZUNoaXBzKFxuICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgb25UZW1wbGVVcGRhdGU6ICh0YXNrSWQ6IHN0cmluZykgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGlmICghc2V0dGluZ3MudGVtcGxlVGFza3MgfHwgc2V0dGluZ3MudGVtcGxlVGFza3MubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLnRlbXBsZV90aXRsZSA/PyBcIlRIRSBURU1QTEVcIjtcbiAgY29uc3Qgbm93ID0gc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSA/IG5ldyBEYXRlKHNldHRpbmdzLnNpbXVsYXRlZERhdGUpIDogbmV3IERhdGUoKTtcblxuICAvLyBTZWN0aW9uXG4gIGNvbnN0IHNlY3Rpb24gPSBjb250YWluZXIuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGVtcGxlLXNlY3Rpb25cIiB9KTtcbiAgc2VjdGlvbi5zdHlsZS5zZXRQcm9wZXJ0eShcIi0taVwiLCBTdHJpbmcoc3RhZ2dlckluZGV4KSk7XG5cbiAgLy8gVGl0bGVcbiAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gQ2hpcHMgY29udGFpbmVyXG4gIGNvbnN0IGNoaXBzID0gc2VjdGlvbi5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGUtY2hpcHNcIiB9KTtcbiAgY2hpcHMuc3R5bGUubWFyZ2luVG9wID0gXCI4cHhcIjtcblxuICBmb3IgKGNvbnN0IHRhc2sgb2Ygc2V0dGluZ3MudGVtcGxlVGFza3MpIHtcbiAgICBjb25zdCBzdGF0dXMgPSBnZXRUYXNrU3RhdHVzKHRhc2ssIG5vdyk7XG5cbiAgICBjb25zdCBjaGlwQ2xzID0gYG9sZW4tdGVtcGxlLWNoaXAgJHtzdGF0dXMuY2hpcENsYXNzfWA7XG4gICAgY29uc3QgY2hpcCA9IGNoaXBzLmNyZWF0ZURpdih7IGNsczogY2hpcENscyB9KTtcblxuICAgIGNoaXAuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxlLWNoaXAtZW1vamlcIiwgdGV4dDogdGFzay5lbW9qaSB9KTtcbiAgICBjaGlwLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXRlbXBsZS1jaGlwLXRleHRcIiwgdGV4dDogYCR7dGFzay5uYW1lfSBcdTAwQjcgJHtzdGF0dXMudGV4dH1gIH0pO1xuXG4gICAgY2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgb25UZW1wbGVVcGRhdGUodGFzay5pZCk7XG4gICAgICAvLyBWaXN1YWwgZmVlZGJhY2tcbiAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJzY2FsZSgwLjkpXCI7XG4gICAgICBjaGlwLnN0eWxlLm9wYWNpdHkgPSBcIjAuNlwiO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNoaXAuc3R5bGUudHJhbnNmb3JtID0gXCJcIjtcbiAgICAgICAgY2hpcC5zdHlsZS5vcGFjaXR5ID0gXCJcIjtcbiAgICAgIH0sIDIwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFRhc2tTdGF0dXMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNoaXBDbGFzczogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRUYXNrU3RhdHVzKHRhc2s6IFRlbXBsZVRhc2ssIG5vdzogRGF0ZSk6IFRhc2tTdGF0dXMge1xuICBpZiAoIXRhc2subGFzdENvbXBsZXRlZCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGNvbnN0IGxhc3QgPSBuZXcgRGF0ZSh0YXNrLmxhc3RDb21wbGV0ZWQpO1xuICBjb25zdCBtc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG4gIGNvbnN0IGRheXNTaW5jZSA9IE1hdGguZmxvb3IoKG5vdy5nZXRUaW1lKCkgLSBsYXN0LmdldFRpbWUoKSkgLyBtc1BlckRheSk7XG4gIGNvbnN0IGRheXNVbnRpbER1ZSA9IHRhc2suaW50ZXJ2YWxEYXlzIC0gZGF5c1NpbmNlO1xuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMCkge1xuICAgIHJldHVybiB7IHRleHQ6IFwib3ZlcmR1ZVwiLCBjaGlwQ2xhc3M6IFwib2xlbi10ZW1wbGUtY2hpcC1vdmVyZHVlXCIgfTtcbiAgfVxuXG4gIGlmIChkYXlzVW50aWxEdWUgPD0gMSkge1xuICAgIHJldHVybiB7IHRleHQ6IFwiZHVlIHRvZGF5XCIsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLXdhcm5cIiB9O1xuICB9XG5cbiAgaWYgKGRheXNVbnRpbER1ZSA8PSAyKSB7XG4gICAgcmV0dXJuIHsgdGV4dDogYGR1ZSBpbiAke2RheXNVbnRpbER1ZX1kYCwgY2hpcENsYXNzOiBcIm9sZW4tdGVtcGxlLWNoaXAtd2FyblwiIH07XG4gIH1cblxuICByZXR1cm4geyB0ZXh0OiBgaW4gJHtkYXlzVW50aWxEdWV9ZGAsIGNoaXBDbGFzczogXCJvbGVuLXRlbXBsZS1jaGlwLW9rXCIgfTtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFF1b3RlIEZvb3RlciBDb21wb25lbnRcbi8vIFJvdGF0aW5nIHN0b2ljIHF1b3RlIGF0IHRoZSBib3R0b20gb2YgdGhlIGRhc2hib2FyZFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgVEZpbGUgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIHsgT2xlblNldHRpbmdzIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBGQUxMQkFDS19RVU9URVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJRdW90ZUZvb3RlcihcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIHN0YWdnZXJJbmRleDogbnVtYmVyLFxuICBvblNldHRpbmdzVXBkYXRlOiAoc2V0dGluZ3M6IFBhcnRpYWw8T2xlblNldHRpbmdzPikgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IHF1b3RlID0gZ2V0UXVvdGUoYXBwLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG5cbiAgY29uc3Qgc2VjdGlvbiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1xdW90ZVwiIH0pO1xuICBzZWN0aW9uLnN0eWxlLnNldFByb3BlcnR5KFwiLS1pXCIsIFN0cmluZyhzdGFnZ2VySW5kZXgpKTtcblxuICBzZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgdGV4dDogYFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgfSk7XG5cbiAgaWYgKHF1b3RlLmF0dHJpYnV0aW9uKSB7XG4gICAgc2VjdGlvbi5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFF1b3RlIHtcbiAgdGV4dDogc3RyaW5nO1xuICBhdHRyaWJ1dGlvbjogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRRdW90ZShcbiAgYXBwOiBBcHAsXG4gIHNldHRpbmdzOiBPbGVuU2V0dGluZ3MsXG4gIG9uU2V0dGluZ3NVcGRhdGU6IChzZXR0aW5nczogUGFydGlhbDxPbGVuU2V0dGluZ3M+KSA9PiB2b2lkXG4pOiBRdW90ZSB7XG4gIC8vIFRyeSB2YXVsdCBmb2xkZXIgcXVvdGVzIGZpcnN0XG4gIGlmIChzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpIHtcbiAgICBjb25zdCB2YXVsdFF1b3RlcyA9IGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwLCBzZXR0aW5ncy5xdW90ZUZvbGRlclBhdGgpO1xuICAgIGlmICh2YXVsdFF1b3Rlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gcGlja1F1b3RlKHZhdWx0UXVvdGVzLCBzZXR0aW5ncywgb25TZXR0aW5nc1VwZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gRmFsbGJhY2sgdG8gaGFyZGNvZGVkIHF1b3Rlc1xuICByZXR1cm4gcGlja1F1b3RlKEZBTExCQUNLX1FVT1RFUywgc2V0dGluZ3MsIG9uU2V0dGluZ3NVcGRhdGUpO1xufVxuXG5mdW5jdGlvbiBwaWNrUXVvdGUoXG4gIHF1b3RlczogUXVvdGVbXSxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgb25TZXR0aW5nc1VwZGF0ZTogKHNldHRpbmdzOiBQYXJ0aWFsPE9sZW5TZXR0aW5ncz4pID0+IHZvaWRcbik6IFF1b3RlIHtcbiAgaWYgKHF1b3Rlcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4geyB0ZXh0OiBcIlRoZSB1bmV4YW1pbmVkIGxpZmUgaXMgbm90IHdvcnRoIGxpdmluZy5cIiwgYXR0cmlidXRpb246IFwiU29jcmF0ZXNcIiB9O1xuICB9XG5cbiAgLy8gQXZvaWQgcmVjZW50bHkgc2hvd24gcXVvdGVzXG4gIGNvbnN0IHJlY2VudElkcyA9IHNldHRpbmdzLnJlY2VudFF1b3RlSWRzID8/IFtdO1xuICBjb25zdCBhdmFpbGFibGUgPSBxdW90ZXNcbiAgICAubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKVxuICAgIC5maWx0ZXIoKHsgaSB9KSA9PiAhcmVjZW50SWRzLmluY2x1ZGVzKGkpKTtcblxuICBjb25zdCBwb29sID0gYXZhaWxhYmxlLmxlbmd0aCA+IDAgPyBhdmFpbGFibGUgOiBxdW90ZXMubWFwKChxLCBpKSA9PiAoeyBxLCBpIH0pKTtcbiAgY29uc3QgcGljayA9IHBvb2xbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9vbC5sZW5ndGgpXTtcblxuICAvLyBUcmFjayByZWNlbnQgKGtlZXAgbGFzdCA1KVxuICBjb25zdCBuZXdSZWNlbnQgPSBbLi4ucmVjZW50SWRzLCBwaWNrLmldLnNsaWNlKC1NYXRoLm1pbig1LCBNYXRoLmZsb29yKHF1b3Rlcy5sZW5ndGggLyAyKSkpO1xuICBvblNldHRpbmdzVXBkYXRlKHtcbiAgICBsYXN0UXVvdGVJbmRleDogcGljay5pLFxuICAgIHJlY2VudFF1b3RlSWRzOiBuZXdSZWNlbnQsXG4gIH0pO1xuXG4gIHJldHVybiBwaWNrLnE7XG59XG5cbmZ1bmN0aW9uIGxvYWRRdW90ZXNGcm9tVmF1bHQoYXBwOiBBcHAsIGZvbGRlclBhdGg6IHN0cmluZyk6IFF1b3RlW10ge1xuICBjb25zdCBxdW90ZXM6IFF1b3RlW10gPSBbXTtcbiAgY29uc3QgYWJzdHJhY3RGaWxlID0gYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmb2xkZXJQYXRoKTtcbiAgaWYgKCFhYnN0cmFjdEZpbGUpIHJldHVybiBxdW90ZXM7XG5cbiAgY29uc3QgZmlsZXMgPSBhcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpLmZpbHRlcigoZikgPT5cbiAgICBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpXG4gICk7XG5cbiAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZmlsZSk7XG4gICAgaWYgKCFjYWNoZSkgY29udGludWU7XG5cbiAgICAvLyBPbmUgcXVvdGUgcGVyIGZpbGUgKGRlZmF1bHQgbW9kZSlcbiAgICBjb25zdCBuYW1lID0gZmlsZS5iYXNlbmFtZTtcbiAgICBjb25zdCBwYXJ0cyA9IHNwbGl0QXR0cmlidXRpb24obmFtZSk7XG4gICAgcXVvdGVzLnB1c2gocGFydHMpO1xuICB9XG5cbiAgcmV0dXJuIHF1b3Rlcztcbn1cblxuZnVuY3Rpb24gc3BsaXRBdHRyaWJ1dGlvbih0ZXh0OiBzdHJpbmcpOiBRdW90ZSB7XG4gIC8vIENoZWNrIGZvciBlbS1kYXNoIGF0dHJpYnV0aW9uXG4gIGNvbnN0IGRhc2hJbmRleCA9IHRleHQubGFzdEluZGV4T2YoXCIgXHUyMDE0IFwiKTtcbiAgaWYgKGRhc2hJbmRleCA+IDApIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGV4dDogdGV4dC5zbGljZSgwLCBkYXNoSW5kZXgpLnRyaW0oKSxcbiAgICAgIGF0dHJpYnV0aW9uOiB0ZXh0LnNsaWNlKGRhc2hJbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgaHlwaGVuSW5kZXggPSB0ZXh0Lmxhc3RJbmRleE9mKFwiIC0gXCIpO1xuICBpZiAoaHlwaGVuSW5kZXggPiB0ZXh0Lmxlbmd0aCAqIDAuNSkge1xuICAgIHJldHVybiB7XG4gICAgICB0ZXh0OiB0ZXh0LnNsaWNlKDAsIGh5cGhlbkluZGV4KS50cmltKCksXG4gICAgICBhdHRyaWJ1dGlvbjogdGV4dC5zbGljZShoeXBoZW5JbmRleCArIDMpLnRyaW0oKSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHsgdGV4dDogdGV4dC50cmltKCksIGF0dHJpYnV0aW9uOiBcIlwiIH07XG59XG4iLCAiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBPbGVuIFx1MjAxNCBEYXkgVGltZWxpbmUgQ29tcG9uZW50XG4vLyBWZXJ0aWNhbCBjb2xvcmVkIHRpbWVsaW5lIG9mIHRoZSBkYXkncyBwbGFubmVkIGFjdGl2aXRpZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgdHlwZSB7IE9sZW5TZXR0aW5ncywgRGF5TWFwRW50cnksIENhdGVnb3J5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IE9sZW5FbmdpbmUgfSBmcm9tIFwiLi4vZW5naW5lcy9PbGVuRW5naW5lXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEYXlUaW1lbGluZShcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgc2V0dGluZ3M6IE9sZW5TZXR0aW5ncyxcbiAgZW5naW5lOiBPbGVuRW5naW5lLFxuICBzdGFnZ2VySW5kZXg6IG51bWJlcixcbiAgY2FsbGJhY2tzOiB7XG4gICAgb25BY2NlcHQ6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25Ta2lwOiAoYWN0aXZpdHlJZDogc3RyaW5nKSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJEb25lPzogKGVudHJ5OiBEYXlNYXBFbnRyeSkgPT4gdm9pZDtcbiAgICBvbkNhbGVuZGFyUG9zdHBvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ3JlYXRlRXZlbnQ/OiAoKSA9PiB2b2lkO1xuICB9XG4pOiB2b2lkIHtcbiAgY29uc3QgbGFiZWwgPSBzZXR0aW5ncy5kZXZDb25maWcubGFiZWxzLmRheW1hcF90aXRsZSA/PyBcIllPVVIgREFZXCI7XG4gIGNvbnN0IG5vdyA9IHNldHRpbmdzLnNpbXVsYXRlZERhdGUgPyBuZXcgRGF0ZShzZXR0aW5ncy5zaW11bGF0ZWREYXRlKSA6IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldEhvdXJzKCkgKyBub3cuZ2V0TWludXRlcygpIC8gNjA7XG5cbiAgLy8gU2VjdGlvbiB0aXRsZVxuICBjb25zdCB0aXRsZUVsID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNlY3Rpb24tdGl0bGVcIiB9KTtcbiAgdGl0bGVFbC5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLWhlYWRpbmdcIiwgdGV4dDogbGFiZWwgfSk7XG5cbiAgLy8gVGltZWxpbmUgY2FyZFxuICBjb25zdCBjYXJkID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWNhcmQgb2xlbi10aW1lbGluZS1jYXJkXCIgfSk7XG4gIGNhcmQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWlcIiwgU3RyaW5nKHN0YWdnZXJJbmRleCkpO1xuXG4gIC8vIEdldCBkYXkgbWFwIGVudHJpZXNcbiAgY29uc3QgZW50cmllcyA9IGVuZ2luZS5nZXREYXlNYXAoKTtcblxuICBpZiAoZW50cmllcy5sZW5ndGggPT09IDApIHtcbiAgICBjYXJkLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWVtcHR5XCIsXG4gICAgICB0ZXh0OiBcIk5vIGFjdGl2aXRpZXMgc2NoZWR1bGVkLiBBIHJhcmUgZGF5IG9mIHJlc3QuXCIsXG4gICAgfSk7XG4gICAgcmVuZGVyVGltZWxpbmVGb290ZXIoY2FyZCwgc2V0dGluZ3MsIGN1cnJlbnRIb3VyLCBjYWxsYmFja3Mub25DcmVhdGVFdmVudCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gVGltZWxpbmUgY29udGFpbmVyXG4gIGNvbnN0IHRpbWVsaW5lID0gY2FyZC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZVwiIH0pO1xuXG4gIGZvciAoY29uc3QgZW50cnkgb2YgZW50cmllcykge1xuICAgIHJlbmRlclRpbWVsaW5lRW50cnkoXG4gICAgICB0aW1lbGluZSwgZW50cnksIHNldHRpbmdzLCBjdXJyZW50SG91ciwgY2FsbGJhY2tzXG4gICAgKTtcbiAgfVxuXG4gIC8vIEZvb3RlclxuICByZW5kZXJUaW1lbGluZUZvb3RlcihjYXJkLCBzZXR0aW5ncywgY3VycmVudEhvdXIsIGNhbGxiYWNrcy5vbkNyZWF0ZUV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVFbnRyeShcbiAgcGFyZW50OiBIVE1MRWxlbWVudCxcbiAgZW50cnk6IERheU1hcEVudHJ5LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBjYWxsYmFja3M6IHtcbiAgICBvbkFjY2VwdDogKGFjdGl2aXR5SWQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICBvblNraXA6IChhY3Rpdml0eUlkOiBzdHJpbmcpID0+IHZvaWQ7XG4gICAgb25DYWxlbmRhckRvbmU/OiAoZW50cnk6IERheU1hcEVudHJ5KSA9PiB2b2lkO1xuICAgIG9uQ2FsZW5kYXJQb3N0cG9uZT86IChlbnRyeTogRGF5TWFwRW50cnkpID0+IHZvaWQ7XG4gIH1cbik6IHZvaWQge1xuICBjb25zdCBpc0NhbGVuZGFyID0gZW50cnkuaXNDYWxlbmRhclRhc2sgPT09IHRydWU7XG4gIGNvbnN0IGNvbG9yID0gaXNDYWxlbmRhciA/IFwiIzVlN2E5YVwiIDogKHNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2VudHJ5LmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIik7XG4gIGNvbnN0IGlzQ3VycmVudCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LnN0YXJ0SG91ciAmJiBjdXJyZW50SG91ciA8IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzUGFzdCA9IGN1cnJlbnRIb3VyID49IGVudHJ5LmVuZEhvdXI7XG4gIGNvbnN0IGlzRG9uZSA9IGVudHJ5LnN0YXR1cyA9PT0gXCJkb25lXCI7XG4gIGNvbnN0IGlzU2tpcHBlZCA9IGVudHJ5LnN0YXR1cyA9PT0gXCJza2lwcGVkXCI7XG5cbiAgLy8gRGV0ZXJtaW5lIHZpc3VhbCBzdGF0ZVxuICBsZXQgc3RhdGVDbHMgPSBcIm9sZW4tdGltZWxpbmUtZW50cnlcIjtcbiAgaWYgKGlzQ2FsZW5kYXIpIHN0YXRlQ2xzICs9IFwiIG9sZW4tdGltZWxpbmUtY2FsZW5kYXJcIjtcbiAgaWYgKGlzRG9uZSkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1kb25lXCI7XG4gIGVsc2UgaWYgKGlzU2tpcHBlZCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1za2lwcGVkXCI7XG4gIGVsc2UgaWYgKGlzQ3VycmVudCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1jdXJyZW50XCI7XG4gIGVsc2UgaWYgKGlzUGFzdCkgc3RhdGVDbHMgKz0gXCIgb2xlbi10aW1lbGluZS1wYXN0XCI7XG5cbiAgY29uc3Qgcm93ID0gcGFyZW50LmNyZWF0ZURpdih7IGNsczogc3RhdGVDbHMgfSk7XG5cbiAgLy8gQ2F0ZWdvcnkgY29sb3IgYmFyIChjYWxlbmRhciB0YXNrcyBnZXQgYSBkaXN0aW5jdCBkYXNoZWQgc3R5bGUpXG4gIGNvbnN0IGJhciA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1iYXJcIiB9KTtcbiAgYmFyLnN0eWxlLmJhY2tncm91bmQgPSBjb2xvcjtcbiAgaWYgKGlzQ2FsZW5kYXIgJiYgIWlzRG9uZSkge1xuICAgIGJhci5jbGFzc0xpc3QuYWRkKFwib2xlbi10aW1lbGluZS1iYXItY2FsZW5kYXJcIik7XG4gIH1cbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBiYXIuc3R5bGUuYm94U2hhZG93ID0gYDAgMCAxMnB4ICR7Y29sb3J9YDtcbiAgfVxuXG4gIC8vIENvbnRlbnRcbiAgY29uc3QgY29udGVudCA9IHJvdy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10aW1lbGluZS1jb250ZW50XCIgfSk7XG5cbiAgLy8gVG9wIGxpbmU6IHRpbWUgKyBkdXJhdGlvbiArIHNvdXJjZSBiYWRnZSBmb3IgY2FsZW5kYXIgdGFza3NcbiAgY29uc3QgdGltZUxpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLXRpbWVcIiB9KTtcbiAgdGltZUxpbmUudGV4dENvbnRlbnQgPSBgJHtmb3JtYXRIb3VyKGVudHJ5LnN0YXJ0SG91cil9IFx1MjAxMyAke2Zvcm1hdEhvdXIoZW50cnkuZW5kSG91cil9IFx1MDBCNyAke2VudHJ5LmVzdGltYXRlZER1cmF0aW9ufW1gO1xuXG4gIGlmIChpc0NhbGVuZGFyICYmIGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgY29uc3QgYmFkZ2UgPSB0aW1lTGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1zb3VyY2UtYmFkZ2VcIiB9KTtcbiAgICBzd2l0Y2ggKGVudHJ5LmNhbGVuZGFyU291cmNlKSB7XG4gICAgICBjYXNlIFwiZGFpbHktbm90ZVwiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiTm90ZVwiOyBicmVhaztcbiAgICAgIGNhc2UgXCJ0YXNrcy1wbHVnaW5cIjogYmFkZ2UudGV4dENvbnRlbnQgPSBcIlRhc2tcIjsgYnJlYWs7XG4gICAgICBjYXNlIFwicXVpY2stdGFza1wiOiBiYWRnZS50ZXh0Q29udGVudCA9IFwiUXVpY2tcIjsgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gQWN0aXZpdHkgbGluZTogZW1vamkgKyBuYW1lXG4gIGNvbnN0IGFjdExpbmUgPSBjb250ZW50LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWFjdGl2aXR5XCIgfSk7XG4gIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtZW1vamlcIiwgdGV4dDogZW50cnkuZW1vamkgfSk7XG4gIGNvbnN0IG5hbWVFbCA9IGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICBjbHM6IFwib2xlbi10aW1lbGluZS1uYW1lXCIsXG4gICAgdGV4dDogZW50cnkuYWN0aXZpdHlOYW1lLFxuICB9KTtcblxuICAvLyBTdHJpa2V0aHJvdWdoIGZvciBkb25lL3NraXBwZWRcbiAgaWYgKGlzRG9uZSB8fCBpc1NraXBwZWQpIHtcbiAgICBuYW1lRWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgIG5hbWVFbC5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgfVxuXG4gIC8vIFN0YXR1cyBpbmRpY2F0b3JcbiAgaWYgKGlzRG9uZSkge1xuICAgIGFjdExpbmUuY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtY2hlY2tcIiwgdGV4dDogXCJcXHUyNzEzXCIgfSk7XG4gIH0gZWxzZSBpZiAoaXNTa2lwcGVkKSB7XG4gICAgYWN0TGluZS5jcmVhdGVFbChcInNwYW5cIiwgeyBjbHM6IFwib2xlbi10aW1lbGluZS1za2lwLW1hcmtcIiwgdGV4dDogXCJcXHUyMDEzXCIgfSk7XG4gIH1cblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBpZiAoIWlzRG9uZSAmJiAhaXNTa2lwcGVkKSB7XG4gICAgY29uc3QgYWN0aW9ucyA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtYWN0aW9uc1wiIH0pO1xuXG4gICAgaWYgKGlzQ2FsZW5kYXIpIHtcbiAgICAgIC8vIENhbGVuZGFyIHRhc2tzOiBEb25lICsgUG9zdHBvbmVcbiAgICAgIGNvbnN0IGRvbmVCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgZG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uQ2FsZW5kYXJEb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBvc3Rwb25lQnRuID0gYWN0aW9ucy5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWJ0biBvbGVuLXRpbWVsaW5lLWJ0bi1wb3N0cG9uZVwiLFxuICAgICAgICB0ZXh0OiBcIlxcdTIzRTlcIixcbiAgICAgICAgYXR0cjogeyB0aXRsZTogXCJQb3N0cG9uZSB0byB0b21vcnJvd1wiIH0sXG4gICAgICB9KTtcbiAgICAgIHBvc3Rwb25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25DYWxlbmRhclBvc3Rwb25lPy4oZW50cnkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFjdGl2aXR5IGVudHJpZXM6IEJlZ2luL0RvbmUgKyBTa2lwXG4gICAgICBjb25zdCBhY2NlcHRCdG4gPSBhY3Rpb25zLmNyZWF0ZUVsKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgY2xzOiBcIm9sZW4tdGltZWxpbmUtYnRuIG9sZW4tdGltZWxpbmUtYnRuLWFjY2VwdFwiLFxuICAgICAgICB0ZXh0OiBpc0N1cnJlbnQgPyBcIkJlZ2luXCIgOiBcIkRvbmVcIixcbiAgICAgIH0pO1xuICAgICAgYWNjZXB0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBjYWxsYmFja3Mub25BY2NlcHQoZW50cnkuYWN0aXZpdHlJZCk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3Qgc2tpcEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tc2tpcFwiLFxuICAgICAgICB0ZXh0OiBcIlNraXBcIixcbiAgICAgIH0pO1xuICAgICAgc2tpcEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgY2FsbGJhY2tzLm9uU2tpcChlbnRyeS5hY3Rpdml0eUlkKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIEN1cnJlbnQgdGltZSBpbmRpY2F0b3JcbiAgaWYgKGlzQ3VycmVudCAmJiAhaXNEb25lICYmICFpc1NraXBwZWQpIHtcbiAgICBjb25zdCBpbmRpY2F0b3IgPSByb3cuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tdGltZWxpbmUtbm93XCIgfSk7XG4gICAgY29uc3QgcHJvZ3Jlc3MgPSAoY3VycmVudEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpIC8gKGVudHJ5LmVuZEhvdXIgLSBlbnRyeS5zdGFydEhvdXIpO1xuICAgIGluZGljYXRvci5zdHlsZS50b3AgPSBgJHtNYXRoLm1pbigxMDAsIE1hdGgubWF4KDAsIHByb2dyZXNzICogMTAwKSl9JWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyVGltZWxpbmVGb290ZXIoXG4gIGNhcmQ6IEhUTUxFbGVtZW50LFxuICBzZXR0aW5nczogT2xlblNldHRpbmdzLFxuICBjdXJyZW50SG91cjogbnVtYmVyLFxuICBvbkNyZWF0ZUV2ZW50PzogKCkgPT4gdm9pZFxuKTogdm9pZCB7XG4gIGNvbnN0IGVuZE9mRGF5ID0gc2V0dGluZ3MuZGV2Q29uZmlnLmV2ZW5pbmdFbmQ7XG4gIGNvbnN0IHJlbWFpbmluZyA9IE1hdGgubWF4KDAsIGVuZE9mRGF5IC0gY3VycmVudEhvdXIpO1xuICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IocmVtYWluaW5nKTtcbiAgY29uc3QgbWlucyA9IE1hdGgucm91bmQoKHJlbWFpbmluZyAtIGhvdXJzKSAqIDYwKTtcblxuICBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRpdmlkZXJcIiB9KTtcblxuICBjb25zdCBmb290ZXIgPSBjYXJkLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3RlclwiIH0pO1xuICBmb290ZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgIGNsczogXCJvbGVuLXRpbWVsaW5lLWZvb3Rlci10ZXh0XCIsXG4gICAgdGV4dDogYEVuZCBvZiBkYXk6ICR7aG91cnN9aCAke21pbnN9bSByZW1haW5pbmdgLFxuICB9KTtcblxuICBpZiAob25DcmVhdGVFdmVudCkge1xuICAgIGNvbnN0IGJ0biA9IGZvb3Rlci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi10aW1lbGluZS1idG4gb2xlbi10aW1lbGluZS1idG4tY3JlYXRlXCIsXG4gICAgICB0ZXh0OiBcIisgQ3JlYXRlIGV2ZW50XCIsXG4gICAgfSk7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBvbkNyZWF0ZUV2ZW50KCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdEhvdXIoaDogbnVtYmVyKTogc3RyaW5nIHtcbiAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKGgpO1xuICBjb25zdCBtaW5zID0gTWF0aC5yb3VuZCgoaCAtIGhvdXJzKSAqIDYwKTtcbiAgY29uc3QgcGVyaW9kID0gaG91cnMgPj0gMTIgPyBcInBtXCIgOiBcImFtXCI7XG4gIGNvbnN0IGRpc3BsYXlIb3VyID0gaG91cnMgPiAxMiA/IGhvdXJzIC0gMTIgOiBob3VycyA9PT0gMCA/IDEyIDogaG91cnM7XG4gIGlmIChtaW5zID09PSAwKSByZXR1cm4gYCR7ZGlzcGxheUhvdXJ9JHtwZXJpb2R9YDtcbiAgcmV0dXJuIGAke2Rpc3BsYXlIb3VyfToke1N0cmluZyhtaW5zKS5wYWRTdGFydCgyLCBcIjBcIil9JHtwZXJpb2R9YDtcbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFdvcmtzcGFjZSBWaWV3XG4vLyBBY3RpdmUgd29ya3NwYWNlIHNjcmVlbiB3aXRoIHRpbWVyLCBza2lsbHMsIGZpbmlzaCBmbG93XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgSXRlbVZpZXcsIFdvcmtzcGFjZUxlYWYsIFRGaWxlLCBOb3RpY2UgfSBmcm9tIFwib2JzaWRpYW5cIjtcbmltcG9ydCB0eXBlIE9sZW5QbHVnaW4gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB0eXBlIHsgQWN0aXZlV29ya3NwYWNlLCBXb3Jrc3BhY2VUeXBlLCBXb3Jrc3BhY2VSZXN1bHQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IFZJRVdfVFlQRV9XT1JLU1BBQ0UsIEZBTExCQUNLX1FVT1RFUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcblxuZXhwb3J0IGNsYXNzIFdvcmtzcGFjZVZpZXcgZXh0ZW5kcyBJdGVtVmlldyB7XG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgcHJpdmF0ZSB0aW1lckludGVydmFsOiBudW1iZXIgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBzdGFydFRpbWU6IERhdGU7XG4gIHByaXZhdGUgZWxhcHNlZCA9IDA7IC8vIHNlY29uZHNcblxuICBjb25zdHJ1Y3RvcihsZWFmOiBXb3Jrc3BhY2VMZWFmLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICBzdXBlcihsZWFmKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICB0aGlzLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG4gIH1cblxuICBnZXRWaWV3VHlwZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBWSUVXX1RZUEVfV09SS1NQQUNFO1xuICB9XG5cbiAgZ2V0RGlzcGxheVRleHQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB3b3Jrc3BhY2UgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2U7XG4gICAgcmV0dXJuIHdvcmtzcGFjZSA/IGBXb3Jrc3BhY2U6ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX1gIDogXCJXb3Jrc3BhY2VcIjtcbiAgfVxuXG4gIGdldEljb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJ0aW1lclwiO1xuICB9XG5cbiAgYXN5bmMgb25PcGVuKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHdvcmtzcGFjZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZTtcbiAgICBpZiAoIXdvcmtzcGFjZSkge1xuICAgICAgdGhpcy5jb250ZW50RWwuY3JlYXRlRWwoXCJkaXZcIiwgeyB0ZXh0OiBcIk5vIGFjdGl2ZSB3b3Jrc3BhY2UuXCIgfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zdGFydFRpbWUgPSBuZXcgRGF0ZSh3b3Jrc3BhY2Uuc3RhcnRUaW1lKTtcbiAgICB0aGlzLnJlbmRlcih3b3Jrc3BhY2UpO1xuICAgIHRoaXMuc3RhcnRUaW1lcigpO1xuICB9XG5cbiAgYXN5bmMgb25DbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIHRoaXMuY29udGVudEVsLmVtcHR5KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0VGltZXIoKTogdm9pZCB7XG4gICAgdGhpcy50aW1lckludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZWxhcHNlZCA9IE1hdGguZmxvb3IoKERhdGUubm93KCkgLSB0aGlzLnN0YXJ0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XG4gICAgICBjb25zdCB0aW1lckVsID0gdGhpcy5jb250ZW50RWwucXVlcnlTZWxlY3RvcihcIi5vbGVuLXdvcmtzcGFjZS10aW1lclwiKTtcbiAgICAgIGlmICh0aW1lckVsKSB0aW1lckVsLnRleHRDb250ZW50ID0gdGhpcy5mb3JtYXRUaW1lKHRoaXMuZWxhcHNlZCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBwcml2YXRlIHN0b3BUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50aW1lckludGVydmFsICE9PSBudWxsKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXJJbnRlcnZhbCk7XG4gICAgICB0aGlzLnRpbWVySW50ZXJ2YWwgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5jb250ZW50RWw7XG4gICAgY29udGFpbmVyLmVtcHR5KCk7XG5cbiAgICBjb25zdCByb290ID0gY29udGFpbmVyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLWRhc2hib2FyZCBvbGVuLXdvcmtzcGFjZS1yb290XCIgfSk7XG5cbiAgICAvLyBUb3AgYmFyXG4gICAgY29uc3QgdG9wQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtdG9wYmFyXCIgfSk7XG5cbiAgICBjb25zdCBhY3RJbmZvID0gdG9wQmFyLmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY3QtaW5mb1wiIH0pO1xuICAgIGFjdEluZm8uY3JlYXRlRWwoXCJzcGFuXCIsIHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWVtb2ppXCIsIHRleHQ6IHdvcmtzcGFjZS5lbW9qaSB9KTtcbiAgICBhY3RJbmZvLmNyZWF0ZUVsKFwic3BhblwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY3QtbmFtZVwiLCB0ZXh0OiB3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lIH0pO1xuXG4gICAgY29uc3QgdGltZXJFbCA9IHRvcEJhci5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2UtdGltZXJcIixcbiAgICAgIHRleHQ6IFwiMDA6MDBcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbmlzaEJ0biA9IHRvcEJhci5jcmVhdGVFbChcImJ1dHRvblwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1idG4gb2xlbi1idG4tcHJpbWFyeSBvbGVuLXdvcmtzcGFjZS1maW5pc2gtYnRuXCIsXG4gICAgICB0ZXh0OiBcIkZJTklTSFwiLFxuICAgIH0pO1xuICAgIGZpbmlzaEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93RmluaXNoTW9kYWwod29ya3NwYWNlKSk7XG5cbiAgICAvLyBDYXRlZ29yeSBhY2NlbnQgbGluZVxuICAgIGNvbnN0IGFjY2VudENvbG9yID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlDb2xvcnNbd29ya3NwYWNlLmNhdGVnb3J5XSA/PyBcIiM5MjhkODVcIjtcbiAgICBjb25zdCBhY2NlbnQgPSByb290LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1hY2NlbnRcIiB9KTtcbiAgICBhY2NlbnQuc3R5bGUuYmFja2dyb3VuZCA9IGBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICR7YWNjZW50Q29sb3J9LCB0cmFuc3BhcmVudClgO1xuXG4gICAgLy8gTWFpbiBjb250ZW50IGFyZWFcbiAgICBjb25zdCBjb250ZW50ID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtY29udGVudFwiIH0pO1xuXG4gICAgLy8gU2tpbGxzIHNlY3Rpb25cbiAgICBjb25zdCBza2lsbHNTZWN0aW9uID0gY29udGVudC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzLXNlY3Rpb25cIiB9KTtcbiAgICBza2lsbHNTZWN0aW9uLmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4taGVhZGluZ1wiLCB0ZXh0OiBcIldPUktTUEFDRSBTS0lMTFNcIiB9KTtcblxuICAgIGNvbnN0IHNraWxsc0NvbnRhaW5lciA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXNraWxsc1wiIH0pO1xuXG4gICAgaWYgKHdvcmtzcGFjZS5za2lsbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBza2lsbHNDb250YWluZXIuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2Utbm8tc2tpbGxzXCIsXG4gICAgICAgIHRleHQ6IFwiTm8gc2tpbGxzIHRhZ2dlZCB5ZXRcIixcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHdvcmtzcGFjZS5za2lsbHMpIHtcbiAgICAgICAgY29uc3QgY2hpcCA9IHNraWxsc0NvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtY2hpcFwiIH0pO1xuICAgICAgICBjaGlwLnRleHRDb250ZW50ID0gc2tpbGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHNraWxscyBidXR0b25cbiAgICBjb25zdCBhZGRTa2lsbEJ0biA9IHNraWxsc1NlY3Rpb24uY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeSBvbGVuLXdvcmtzcGFjZS1hZGQtc2tpbGxcIixcbiAgICAgIHRleHQ6IFwiKyBBREQgU0tJTExcIixcbiAgICB9KTtcbiAgICBhZGRTa2lsbEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5zaG93U2tpbGxQaWNrZXIod29ya3NwYWNlKSk7XG5cbiAgICAvLyBGb2N1cyB6b25lIFx1MjAxNCBtb3RpdmF0aW9uYWwgYXJlYVxuICAgIGNvbnN0IGZvY3VzWm9uZSA9IGNvbnRlbnQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLWZvY3VzXCIgfSk7XG4gICAgY29uc3QgcXVvdGUgPSBGQUxMQkFDS19RVU9URVNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogRkFMTEJBQ0tfUVVPVEVTLmxlbmd0aCldO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS10ZXh0XCIsXG4gICAgICB0ZXh0OiBgXCIke3F1b3RlLnRleHR9XCJgLFxuICAgIH0pO1xuICAgIGZvY3VzWm9uZS5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICBjbHM6IFwib2xlbi1xdW90ZS1hdHRyaWJ1dGlvblwiLFxuICAgICAgdGV4dDogYFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgfSk7XG5cbiAgICAvLyBCb3R0b20gYmFyXG4gICAgY29uc3QgYm90dG9tQmFyID0gcm9vdC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2UtYm90dG9tYmFyXCIgfSk7XG4gICAgY29uc3QgY2F0TGFiZWwgPSB3b3Jrc3BhY2UuY2F0ZWdvcnkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3Jrc3BhY2UuY2F0ZWdvcnkuc2xpY2UoMSk7XG4gICAgYm90dG9tQmFyLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLXdvcmtzcGFjZS1jYXRlZ29yeS1sYWJlbFwiLFxuICAgICAgdGV4dDogY2F0TGFiZWwsXG4gICAgfSk7XG4gICAgYm90dG9tQmFyLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGFjY2VudENvbG9yO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93U2tpbGxQaWNrZXIod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICAvLyBQcm9tcHQgZm9yIHNraWxsIG5hbWUgdmlhIGEgc2ltcGxlIGlucHV0XG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBcIm9sZW4tc2hlZXQtb3ZlcmxheVwiO1xuXG4gICAgY29uc3Qgc2hlZXQgPSBvdmVybGF5LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0XCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tc2hlZXQtaGFuZGxlXCIgfSk7XG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiQUREIFNLSUxMXCIgfSk7XG5cbiAgICBjb25zdCBpbnB1dFdyYXAgPSBzaGVldC5jcmVhdGVEaXYoeyBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMjBweCAwO1wiIH0gfSk7XG4gICAgY29uc3QgaW5wdXQgPSBpbnB1dFdyYXAuY3JlYXRlRWwoXCJpbnB1dFwiLCB7XG4gICAgICBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtaW5wdXRcIixcbiAgICAgIGF0dHI6IHsgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcIlNraWxsIG5hbWUuLi5cIiB9LFxuICAgIH0pO1xuXG4gICAgLy8gSWYgc2tpbGwgZm9sZGVyIGV4aXN0cywgbG9hZCBleGlzdGluZyBza2lsbHNcbiAgICBpZiAod29ya3NwYWNlLnNraWxsRm9sZGVyKSB7XG4gICAgICBjb25zdCBza2lsbHMgPSB0aGlzLmxvYWRTa2lsbHNGcm9tRm9sZGVyKHdvcmtzcGFjZS5za2lsbEZvbGRlcik7XG4gICAgICBpZiAoc2tpbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBzaGVldC5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGxzXCIsIGF0dHI6IHsgc3R5bGU6IFwibWFyZ2luLWJvdHRvbTogMTZweDtcIiB9IH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHNraWxsIG9mIHNraWxscykge1xuICAgICAgICAgIGNvbnN0IGNoaXAgPSBleGlzdGluZy5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc2tpbGwtY2hpcCBvbGVuLWNsaWNrYWJsZVwiIH0pO1xuICAgICAgICAgIGNoaXAudGV4dENvbnRlbnQgPSBza2lsbDtcbiAgICAgICAgICBjaGlwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBhZGRTa2lsbChza2lsbCk7XG4gICAgICAgICAgICBjbG9zZVNoZWV0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25zID0gc2hlZXQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4tZGlyZWN0aXZlLWFjdGlvbnNcIiB9KTtcblxuICAgIGNvbnN0IGFkZEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXByaW1hcnlcIixcbiAgICAgIHRleHQ6IFwiQUREXCIsXG4gICAgfSk7XG4gICAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCB2YWwgPSBpbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICBpZiAodmFsKSB7XG4gICAgICAgIGFkZFNraWxsKHZhbCk7XG4gICAgICAgIGNsb3NlU2hlZXQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGFjdGlvbnMuY3JlYXRlRWwoXCJidXR0b25cIiwge1xuICAgICAgY2xzOiBcIm9sZW4tYnRuIG9sZW4tYnRuLXNlY29uZGFyeVwiLFxuICAgICAgdGV4dDogXCJDQU5DRUxcIixcbiAgICB9KTtcbiAgICBjYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNsb3NlU2hlZXQoKSk7XG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBvdmVybGF5KSBjbG9zZVNoZWV0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhZGRTa2lsbCA9IChuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghd29ya3NwYWNlLnNraWxscy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICB3b3Jrc3BhY2Uuc2tpbGxzLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2ZVdvcmtzcGFjZSA9IHdvcmtzcGFjZTtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKHdvcmtzcGFjZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNsb3NlU2hlZXQgPSAoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBvdmVybGF5LnJlbW92ZSgpLCAzNTApO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgICAgaW5wdXQuZm9jdXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZFNraWxsc0Zyb21Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRGb2xkZXIgPSBmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCI7XG4gICAgcmV0dXJuIGZpbGVzXG4gICAgICAuZmlsdGVyKChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChub3JtYWxpemVkRm9sZGVyKSlcbiAgICAgIC5tYXAoKGYpID0+IGYuYmFzZW5hbWUpXG4gICAgICAuc29ydCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93RmluaXNoTW9kYWwod29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGR1cmF0aW9uTWludXRlcyA9IE1hdGgucm91bmQoKGVuZFRpbWUuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUuZ2V0VGltZSgpKSAvIDYwMDAwKTtcblxuICAgIGNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG92ZXJsYXkuY2xhc3NOYW1lID0gXCJvbGVuLXNoZWV0LW92ZXJsYXlcIjtcblxuICAgIGNvbnN0IHNoZWV0ID0gb3ZlcmxheS5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi1zaGVldFwiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXNoZWV0LWhhbmRsZVwiIH0pO1xuXG4gICAgc2hlZXQuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi1oZWFkaW5nLWxnXCIsIHRleHQ6IFwiSE9XIERJRCBJVCBGRUVMP1wiIH0pO1xuICAgIHNoZWV0LmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIGNsczogXCJvbGVuLWJvZHktaXRhbGljXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcIm1hcmdpbjogMTJweCAwIDIwcHg7XCIgfSxcbiAgICAgIHRleHQ6IGAke3dvcmtzcGFjZS5lbW9qaX0gJHt3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lfSBcdTAwQjcgJHtkdXJhdGlvbk1pbnV0ZXN9IG1pbnV0ZXNgLFxuICAgIH0pO1xuXG4gICAgLy8gQ29tcGxldGlvbiBzdGF0ZSBidXR0b25zXG4gICAgY29uc3Qgc3RhdGVzID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maWx0ZXIoKHMpID0+IHMuZW5hYmxlZCk7XG4gICAgY29uc3Qgc3RhdGVzR3JpZCA9IHNoZWV0LmNyZWF0ZURpdih7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZXMtZ3JpZFwiIH0pO1xuXG4gICAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICAgIGNvbnN0IGJ0biA9IHN0YXRlc0dyaWQuY3JlYXRlRGl2KHsgY2xzOiBcIm9sZW4td29ya3NwYWNlLXN0YXRlLWJ0blwiIH0pO1xuICAgICAgYnRuLnN0eWxlLmJvcmRlckNvbG9yID0gc3RhdGUuY29sb3I7XG5cbiAgICAgIGJ0bi5jcmVhdGVFbChcImRpdlwiLCB7IGNsczogXCJvbGVuLXdvcmtzcGFjZS1zdGF0ZS1pY29uXCIsIHRleHQ6IHN0YXRlLmljb24gfSk7XG4gICAgICBidG4uY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi13b3Jrc3BhY2Utc3RhdGUtbmFtZVwiLCB0ZXh0OiBzdGF0ZS5uYW1lIH0pO1xuXG4gICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQgPSB7XG4gICAgICAgICAgYWN0aXZpdHlJZDogd29ya3NwYWNlLmFjdGl2aXR5SWQsXG4gICAgICAgICAgYWN0aXZpdHlOYW1lOiB3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lLFxuICAgICAgICAgIGNhdGVnb3J5OiB3b3Jrc3BhY2UuY2F0ZWdvcnksXG4gICAgICAgICAgdHlwZTogc3RhdGUuaWQsXG4gICAgICAgICAgc3RhcnRUaW1lOiB3b3Jrc3BhY2Uuc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWU6IGVuZFRpbWUudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICBkdXJhdGlvbk1pbnV0ZXMsXG4gICAgICAgICAgc2tpbGxzOiB3b3Jrc3BhY2Uuc2tpbGxzLFxuICAgICAgICB9O1xuXG4gICAgICAgIGF3YWl0IHRoaXMuZmluaXNoV29ya3NwYWNlKHJlc3VsdCwgd29ya3NwYWNlKTtcbiAgICAgICAgY2xvc2VTaGVldCgpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gb3ZlcmxheSkge1xuICAgICAgICAvLyBEb24ndCBjbG9zZSBvbiBvdmVybGF5IHRhcCBcdTIwMTQgdXNlciBtdXN0IGNob29zZVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY2xvc2VTaGVldCA9ICgpID0+IHtcbiAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IG92ZXJsYXkucmVtb3ZlKCksIDM1MCk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIikpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBmaW5pc2hXb3Jrc3BhY2UocmVzdWx0OiBXb3Jrc3BhY2VSZXN1bHQsIHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgLy8gMS4gQ3JlYXRlIHdvcmtzcGFjZSBtYXJrZG93biBmaWxlXG4gICAgaWYgKHdvcmtzcGFjZS53b3Jrc3BhY2VGb2xkZXIpIHtcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlV29ya3NwYWNlRmlsZShyZXN1bHQsIHdvcmtzcGFjZSk7XG4gICAgfVxuXG4gICAgLy8gMi4gVXBkYXRlIHRoZSBhY3Rpdml0eSdzIGRhaWx5IG5vdGUgZnJvbnRtYXR0ZXJcbiAgICBhd2FpdCB0aGlzLm1hcmtBY3Rpdml0eURvbmUod29ya3NwYWNlLCByZXN1bHQpO1xuXG4gICAgLy8gMy4gQXBwbHkgWFBcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLndvcmtzcGFjZUNvbXBsZXRpb25TdGF0ZXMuZmluZCgocykgPT4gcy5pZCA9PT0gcmVzdWx0LnR5cGUpO1xuICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS54cE11bHRpcGxpZXIgPiAwKSB7XG4gICAgICBjb25zdCB4cEdhaW4gPSBNYXRoLnJvdW5kKHRoaXMucGx1Z2luLnNldHRpbmdzLmRldkNvbmZpZy54cFBlckNvbXBsZXRpb24gKiBzdGF0ZS54cE11bHRpcGxpZXIpO1xuICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2F0ZWdvcnlYUFt3b3Jrc3BhY2UuY2F0ZWdvcnldICs9IHhwR2FpbjtcbiAgICB9XG5cbiAgICAvLyA0LiBBcHBseSBib3NzIGRhbWFnZSAodW5sZXNzIHNraXBwZWQpXG4gICAgaWYgKHJlc3VsdC50eXBlICE9PSBcInNraXBwZWRcIikge1xuICAgICAgY29uc3QgYWN0aXZpdHkgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLmZpbmQoKGEpID0+IGEuaWQgPT09IHdvcmtzcGFjZS5hY3Rpdml0eUlkKTtcbiAgICAgIGlmIChhY3Rpdml0eSkge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQID0gTWF0aC5tYXgoXG4gICAgICAgICAgMCxcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzQ3VycmVudEhQIC0gYWN0aXZpdHkuZGFtYWdlUGVyQ29tcGxldGlvblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIDUuIENsZWFyIGFjdGl2ZSB3b3Jrc3BhY2VcbiAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3RpdmVXb3Jrc3BhY2UgPSBudWxsO1xuICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuXG4gICAgLy8gNi4gU2hvdyBub3RpY2VcbiAgICBjb25zdCBzdGF0ZUxhYmVsID0gdGhpcy5wbHVnaW4uc2V0dGluZ3Mud29ya3NwYWNlQ29tcGxldGlvblN0YXRlcy5maW5kKChzKSA9PiBzLmlkID09PSByZXN1bHQudHlwZSk/Lm5hbWUgPz8gcmVzdWx0LnR5cGU7XG4gICAgbmV3IE5vdGljZShgJHt3b3Jrc3BhY2UuZW1vaml9ICR7d29ya3NwYWNlLmFjdGl2aXR5TmFtZX0gXHUyMDE0ICR7c3RhdGVMYWJlbH0gXHUwMEI3ICR7cmVzdWx0LmR1cmF0aW9uTWludXRlc31tYCk7XG5cbiAgICAvLyA3LiBTd2l0Y2ggYmFjayB0byBkYXNoYm9hcmRcbiAgICB0aGlzLnBsdWdpbi5hY3RpdmF0ZURhc2hib2FyZFZpZXcoKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlV29ya3NwYWNlRmlsZShyZXN1bHQ6IFdvcmtzcGFjZVJlc3VsdCwgd29ya3NwYWNlOiBBY3RpdmVXb3Jrc3BhY2UpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBmb2xkZXIgPSB3b3Jrc3BhY2Uud29ya3NwYWNlRm9sZGVyITtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gYWN0aXZpdHk/LnByb3BlcnR5ID8/IHdvcmtzcGFjZS5hY3Rpdml0eU5hbWU7XG5cbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUocmVzdWx0LmVuZFRpbWUpO1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKHJlc3VsdC5zdGFydFRpbWUpO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBlbmRUaW1lLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIC8vIE5hbWluZzogXCJXb3Jrc3BhY2UgWVlZWS1NTS1ERCBISE1NXCJcbiAgICBjb25zdCB0aW1lU3RyID0gYCR7U3RyaW5nKGVuZFRpbWUuZ2V0SG91cnMoKSkucGFkU3RhcnQoMiwgXCIwXCIpfSR7U3RyaW5nKGVuZFRpbWUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCBcIjBcIil9YDtcbiAgICBjb25zdCBmaWxlTmFtZSA9IGBXb3Jrc3BhY2UgJHtkYXRlU3RyfSAke3RpbWVTdHJ9YDtcbiAgICBjb25zdCBmaWxlUGF0aCA9IGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0ubWRgO1xuXG4gICAgLy8gQnVpbGQgdGltZXpvbmUtYXdhcmUgdGltZXN0YW1wXG4gICAgY29uc3QgdHpPZmZzZXQgPSAtc3RhcnRUaW1lLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgY29uc3QgdHpIb3VycyA9IFN0cmluZyhNYXRoLmZsb29yKE1hdGguYWJzKHR6T2Zmc2V0KSAvIDYwKSkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHR6TWlucyA9IFN0cmluZyhNYXRoLmFicyh0ek9mZnNldCkgJSA2MCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIGNvbnN0IHR6U2lnbiA9IHR6T2Zmc2V0ID49IDAgPyBcIitcIiA6IFwiLVwiO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9IHN0YXJ0VGltZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIC0xKSArIHR6U2lnbiArIHR6SG91cnMgKyBcIjpcIiArIHR6TWlucztcblxuICAgIGNvbnN0IGVuZFRpbWVzdGFtcCA9IGVuZFRpbWUudG9JU09TdHJpbmcoKS5zbGljZSgwLCAtMSkgKyB0elNpZ24gKyB0ekhvdXJzICsgXCI6XCIgKyB0ek1pbnM7XG5cbiAgICAvLyBQaWNrIGEgcXVvdGVcbiAgICBjb25zdCBxdW90ZSA9IEZBTExCQUNLX1FVT1RFU1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBGQUxMQkFDS19RVU9URVMubGVuZ3RoKV07XG5cbiAgICAvLyBDYXBpdGFsaXplIGNvbXBsZXRpb24gdHlwZSB0byBtYXRjaCBleGlzdGluZyBmb3JtYXQgKERpc2NpcGxpbmUvRmxvdy9Ta2lwcGVkKVxuICAgIGNvbnN0IHR5cGVOYW1lID0gcmVzdWx0LnR5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyByZXN1bHQudHlwZS5zbGljZSgxKTtcbiAgICBjb25zdCBkdXJhdGlvblN0ciA9IGAke01hdGguZmxvb3IocmVzdWx0LmR1cmF0aW9uTWludXRlcyAvIDYwKX1oICR7cmVzdWx0LmR1cmF0aW9uTWludXRlcyAlIDYwfW1gO1xuXG4gICAgLy8gQnVpbGQgZnJvbnRtYXR0ZXJcbiAgICBjb25zdCBmbUxpbmVzID0gW1xuICAgICAgXCItLS1cIixcbiAgICAgIFwiZWRpdG9yLXdpZHRoOiAxMDBcIixcbiAgICAgIGAke3Byb3BlcnR5fTogdHJ1ZWAsXG4gICAgICBgJHtwcm9wZXJ0eX0tVHlwZTogXCIke3R5cGVOYW1lfVwiYCxcbiAgICAgIGBUaW1lc3RhbXA6IFwiJHt0aW1lc3RhbXB9XCJgLFxuICAgICAgYGVuZFRpbWU6IFwiJHtlbmRUaW1lc3RhbXB9XCJgLFxuICAgICAgYGR1cmF0aW9uOiBcIiR7ZHVyYXRpb25TdHJ9XCJgLFxuICAgICAgYGNhdGVnb3J5OiBcIiR7d29ya3NwYWNlLmNhdGVnb3J5fVwiYCxcbiAgICAgIHJlc3VsdC5za2lsbHMubGVuZ3RoID4gMFxuICAgICAgICA/IGBza2lsbHM6IFske3Jlc3VsdC5za2lsbHMubWFwKChzKSA9PiBgXCIke3N9XCJgKS5qb2luKFwiLCBcIil9XWBcbiAgICAgICAgOiBcInNraWxsczogW11cIixcbiAgICAgIFwiY3NzY2xhc3NlczpcIixcbiAgICAgIFwiICAtIGhpZGUtcHJvcGVydGllc1wiLFxuICAgICAgXCItLS1cIixcbiAgICBdO1xuXG4gICAgY29uc3QgYm9keSA9IFtcbiAgICAgIFwiXCIsXG4gICAgICBgIyAke3dvcmtzcGFjZS5lbW9qaX0gJHt3b3Jrc3BhY2UuYWN0aXZpdHlOYW1lfSBXb3Jrc3BhY2VgLFxuICAgICAgXCJcIixcbiAgICAgIGA+IFwiJHtxdW90ZS50ZXh0fVwiYCxcbiAgICAgIGA+IFx1MjAxNCAke3F1b3RlLmF0dHJpYnV0aW9ufWAsXG4gICAgICBcIlwiLFxuICAgICAgXCIjIyBOb3Rlc1wiLFxuICAgICAgXCJcIixcbiAgICAgIFwiXCIsXG4gICAgXTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBbLi4uZm1MaW5lcywgLi4uYm9keV0uam9pbihcIlxcblwiKTtcblxuICAgIC8vIEVuc3VyZSBmb2xkZXIgZXhpc3RzXG4gICAgY29uc3QgYWJzdHJhY3RGb2xkZXIgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgoZm9sZGVyKTtcbiAgICBpZiAoIWFic3RyYWN0Rm9sZGVyKSB7XG4gICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5jcmVhdGVGb2xkZXIoZm9sZGVyKTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgZHVwbGljYXRlIGZpbGVuYW1lc1xuICAgIGxldCBmaW5hbFBhdGggPSBmaWxlUGF0aDtcbiAgICBjb25zdCBleGlzdGluZyA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aChmaWxlUGF0aCk7XG4gICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICBsZXQgY291bnRlciA9IDI7XG4gICAgICB3aGlsZSAodGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGAke2ZvbGRlcn0vJHtmaWxlTmFtZX0gKCR7Y291bnRlcn0pLm1kYCkpIHtcbiAgICAgICAgY291bnRlcisrO1xuICAgICAgfVxuICAgICAgZmluYWxQYXRoID0gYCR7Zm9sZGVyfS8ke2ZpbGVOYW1lfSAoJHtjb3VudGVyfSkubWRgO1xuICAgIH1cblxuICAgIGF3YWl0IHRoaXMuYXBwLnZhdWx0LmNyZWF0ZShmaW5hbFBhdGgsIGNvbnRlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBtYXJrQWN0aXZpdHlEb25lKHdvcmtzcGFjZTogQWN0aXZlV29ya3NwYWNlLCByZXN1bHQ/OiBXb3Jrc3BhY2VSZXN1bHQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAvLyBGaW5kIHRvZGF5J3Mgbm90ZSBpbiB0aGUgYWN0aXZpdHkgZm9sZGVyIGFuZCBzZXQgdGhlIHByb3BlcnR5IHRvIHRydWVcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZCgoYSkgPT4gYS5pZCA9PT0gd29ya3NwYWNlLmFjdGl2aXR5SWQpO1xuICAgIGlmICghYWN0aXZpdHkpIHJldHVybjtcblxuICAgIGNvbnN0IG5vdyA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnNpbXVsYXRlZERhdGVcbiAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgIDogbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXRlU3RyID0gbm93LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApO1xuICAgIGNvbnN0IGZvbGRlciA9IGFjdGl2aXR5LmZvbGRlcjtcbiAgICBjb25zdCBub3JtYWxpemVkRm9sZGVyID0gZm9sZGVyLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlciA6IGZvbGRlciArIFwiL1wiO1xuXG4gICAgLy8gTG9vayBmb3IgYSBmaWxlIG1hdGNoaW5nIHRvZGF5J3MgZGF0ZVxuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xuICAgIGNvbnN0IHRvZGF5RmlsZSA9IGZpbGVzLmZpbmQoXG4gICAgICAoZikgPT4gKGYucGF0aCA9PT0gZm9sZGVyIHx8IGYucGF0aC5zdGFydHNXaXRoKG5vcm1hbGl6ZWRGb2xkZXIpKSAmJiBmLmJhc2VuYW1lID09PSBkYXRlU3RyXG4gICAgKTtcblxuICAgIGlmICh0b2RheUZpbGUpIHtcbiAgICAgIC8vIFVwZGF0ZSBmcm9udG1hdHRlciBcdTIwMTQgc2V0IHByb3BlcnR5IGFuZCBjb21wbGV0aW9uIHR5cGVcbiAgICAgIGF3YWl0IHRoaXMuYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcih0b2RheUZpbGUsIChmcm9udG1hdHRlcikgPT4ge1xuICAgICAgICBmcm9udG1hdHRlclthY3Rpdml0eS5wcm9wZXJ0eV0gPSB0cnVlO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSByZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpO1xuICAgICAgICAgIGZyb250bWF0dGVyW2Ake2FjdGl2aXR5LnByb3BlcnR5fS1UeXBlYF0gPSB0eXBlTmFtZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZGFpbHkgbm90ZSB3aXRoIHRoZSBwcm9wZXJ0eSBzZXRcbiAgICAgIGNvbnN0IGZpbGVQYXRoID0gYCR7bm9ybWFsaXplZEZvbGRlcn0ke2RhdGVTdHJ9Lm1kYDtcbiAgICAgIGNvbnN0IHR5cGVMaW5lID0gcmVzdWx0XG4gICAgICAgID8gYFxcbiR7YWN0aXZpdHkucHJvcGVydHl9LVR5cGU6IFwiJHtyZXN1bHQudHlwZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlc3VsdC50eXBlLnNsaWNlKDEpfVwiYFxuICAgICAgICA6IFwiXCI7XG4gICAgICBjb25zdCBjb250ZW50ID0gYC0tLVxcbiR7YWN0aXZpdHkucHJvcGVydHl9OiB0cnVlJHt0eXBlTGluZX1cXG4tLS1cXG5gO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuY3JlYXRlKGZpbGVQYXRoLCBjb250ZW50KTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICAvLyBGaWxlIG1pZ2h0IGFscmVhZHkgZXhpc3Qgd2l0aCBhIGRpZmZlcmVudCBuYW1lXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRUaW1lKHNlY29uZHM6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgaCA9IE1hdGguZmxvb3Ioc2Vjb25kcyAvIDM2MDApO1xuICAgIGNvbnN0IG0gPSBNYXRoLmZsb29yKChzZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3QgcyA9IHNlY29uZHMgJSA2MDtcbiAgICBpZiAoaCA+IDApIHtcbiAgICAgIHJldHVybiBgJHtofToke1N0cmluZyhtKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7U3RyaW5nKHMpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7U3RyaW5nKG0pLnBhZFN0YXJ0KDIsIFwiMFwiKX06JHtTdHJpbmcocykucGFkU3RhcnQoMiwgXCIwXCIpfWA7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFNldHRpbmdzIFRhYlxuLy8gQ29sbGFwc2libGUgc2VjdGlvbnMgZm9yIGFsbCBwbHVnaW4gY29uZmlndXJhdGlvblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmltcG9ydCB7IEFwcCwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgVGV4dENvbXBvbmVudCwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgdHlwZSB7IEFjdGl2aXR5Q29uZmlnLCBDYXRlZ29yeSwgVGVtcGxlVGFzayB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgREVGQVVMVF9BQ1RJVklUSUVTLCBERUZBVUxUX0RFVl9DT05GSUcgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBPbGVuU2V0dGluZ1RhYiBleHRlbmRzIFBsdWdpblNldHRpbmdUYWIge1xuICBwbHVnaW46IE9sZW5QbHVnaW47XG5cbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIHBsdWdpbjogT2xlblBsdWdpbikge1xuICAgIHN1cGVyKGFwcCwgcGx1Z2luKTtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb250YWluZXJFbCB9ID0gdGhpcztcbiAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgIGNvbnRhaW5lckVsLmFkZENsYXNzKFwib2xlbi1zZXR0aW5nc1wiKTtcblxuICAgIC8vIEhlYWRlclxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiZGl2XCIsIHtcbiAgICAgIHRleHQ6IFwiT2xlblwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDEuNGVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiA0cHg7IHBhZGRpbmc6IDhweCAwO1wiIH0sXG4gICAgfSk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJkaXZcIiwge1xuICAgICAgdGV4dDogXCJNeXRob2xvZ2ljYWwgTGlmZS1PcGVyYXRpbmcgU3lzdGVtXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDE2cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIC8vIFF1aWNrIHN0YXR1cyBiYXJcbiAgICB0aGlzLnJlbmRlclN0YXR1c0Jhcihjb250YWluZXJFbCk7XG5cbiAgICAvLyBTZWN0aW9uc1xuICAgIHRoaXMucmVuZGVyUHJvZmlsZVNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQWN0aXZpdGllc1NlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyQ2F0ZWdvcmllc1NlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyVGVtcGxlU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJDYWxlbmRhclNlY3Rpb24oY29udGFpbmVyRWwpO1xuICAgIHRoaXMucmVuZGVyVGhlbWVTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgICB0aGlzLnJlbmRlckFkdmFuY2VkU2VjdGlvbihjb250YWluZXJFbCk7XG4gICAgdGhpcy5yZW5kZXJEZXZEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lckVsKTtcbiAgfVxuXG4gIC8vIC0tLSBDb2xsYXBzaWJsZSBTZWN0aW9uIEhlbHBlciAtLS1cblxuICBwcml2YXRlIGNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgaWNvbjogc3RyaW5nLFxuICAgIGRlZmF1bHRPcGVuID0gZmFsc2VcbiAgKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlY3Rpb24gPSBwYXJlbnQuY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBzZWN0aW9uLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYXJyb3cgPSBoZWFkZXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IGRlZmF1bHRPcGVuID8gXCJcXHUyNUJDXCIgOiBcIlxcdTI1QjZcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zaXplOiAxMHB4OyB3aWR0aDogMTJweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgaGVhZGVyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBpY29uID8gYCR7aWNvbn0gICR7dGl0bGV9YCA6IHRpdGxlLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOTVlbTtcIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgYm9keSA9IHNlY3Rpb24uY3JlYXRlRGl2KHtcbiAgICAgIGF0dHI6IHsgc3R5bGU6IGBwYWRkaW5nOiAwIDE2cHg7IGRpc3BsYXk6ICR7ZGVmYXVsdE9wZW4gPyBcImJsb2NrXCIgOiBcIm5vbmVcIn07YCB9LFxuICAgIH0pO1xuXG4gICAgaGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc09wZW4gPSBib2R5LnN0eWxlLmRpc3BsYXkgIT09IFwibm9uZVwiO1xuICAgICAgYm9keS5zdHlsZS5kaXNwbGF5ID0gaXNPcGVuID8gXCJub25lXCIgOiBcImJsb2NrXCI7XG4gICAgICBib2R5LnN0eWxlLnBhZGRpbmcgPSBpc09wZW4gPyBcIjAgMTZweFwiIDogXCIxMnB4IDE2cHhcIjtcbiAgICAgIGFycm93LnRleHRDb250ZW50ID0gaXNPcGVuID8gXCJcXHUyNUI2XCIgOiBcIlxcdTI1QkNcIjtcbiAgICB9KTtcblxuICAgIGlmIChkZWZhdWx0T3BlbikgYm9keS5zdHlsZS5wYWRkaW5nID0gXCIxMnB4IDE2cHhcIjtcbiAgICByZXR1cm4gYm9keTtcbiAgfVxuXG4gIC8vIC0tLSBTdGF0dXMgQmFyIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyU3RhdHVzQmFyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBocFBlcmNlbnQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFAgPiAwXG4gICAgICA/IE1hdGgucm91bmQoKHRoaXMucGx1Z2luLnNldHRpbmdzLmJvc3NDdXJyZW50SFAgLyB0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFApICogMTAwKVxuICAgICAgOiAwO1xuXG4gICAgY29uc3QgYmFyID0gY29udGFpbmVyLmNyZWF0ZURpdih7XG4gICAgICBhdHRyOiB7XG4gICAgICAgIHN0eWxlOiBgXG4gICAgICAgICAgZGlzcGxheTogZmxleDsgZ2FwOiAxMnB4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4OyBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTsgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHsgdGV4dDogYFRpZXIgJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5jdXJyZW50VGllcn0vMTNgIH0pO1xuICAgIGJhci5jcmVhdGVFbChcInNwYW5cIiwge1xuICAgICAgdGV4dDogYEhQICR7dGhpcy5wbHVnaW4uc2V0dGluZ3MuYm9zc0N1cnJlbnRIUH0vJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5ib3NzTWF4SFB9ICgke2hwUGVyY2VudH0lKWAsXG4gICAgfSk7XG5cbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmluVGFydGFydXNcbiAgICAgID8gXCJUQVJUQVJVU1wiXG4gICAgICA6IHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcInBhdXNlZFwiXG4gICAgICAgID8gXCJQQVVTRURcIlxuICAgICAgICA6IFwiQUNUSVZFXCI7XG4gICAgYmFyLmNyZWF0ZUVsKFwic3BhblwiLCB7XG4gICAgICB0ZXh0OiBzdGF0ZSxcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc3R5bGU6IGBmb250LXdlaWdodDogNjAwOyBjb2xvcjogJHt0aGlzLnBsdWdpbi5zZXR0aW5ncy5pblRhcnRhcnVzID8gXCJ2YXIoLS10ZXh0LWVycm9yKVwiIDogXCJ2YXIoLS10ZXh0LW5vcm1hbClcIn07YCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBiYXIuY3JlYXRlRWwoXCJzcGFuXCIsIHtcbiAgICAgIHRleHQ6IHRoaXMucGx1Z2luLnNldHRpbmdzLm1pZ3JhdGVkID8gXCJNaWdyYXRlZFwiIDogXCJOb3QgbWlncmF0ZWRcIixcbiAgICAgIGF0dHI6IHsgc3R5bGU6IFwiZm9udC1zdHlsZTogaXRhbGljO1wiIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyAtLS0gUHJvZmlsZSAtLS1cblxuICBwcml2YXRlIHJlbmRlclByb2ZpbGVTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIlByb2ZpbGVcIiwgXCJcXHV7MUY0NjR9XCIpO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiTmFtZVwiKVxuICAgICAgLnNldERlc2MoXCJZb3VyIG5hbWUgZm9yIHRoZSBkYXNoYm9hcmQgZ3JlZXRpbmdcIilcbiAgICAgIC5hZGRUZXh0KCh0ZXh0KSA9PlxuICAgICAgICB0ZXh0XG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZXJOYW1lKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnVzZXJOYW1lID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIk15IFdoeVwiKVxuICAgICAgLnNldERlc2MoXCJZb3VyIGNvcmUgbW90aXZhdGlvbiBcdTIwMTQgc2hvd24gcGVyaW9kaWNhbGx5IG9uIHRoZSBkYXNoYm9hcmRcIilcbiAgICAgIC5hZGRUZXh0QXJlYSgoYXJlYSkgPT5cbiAgICAgICAgYXJlYVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVdoeSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5teVdoeSA9IHZhbHVlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJIZXJvIGJhY2tncm91bmQgaW1hZ2VcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgcGF0aCB0byB0aGUgaGVybyBiYWNrZ3JvdW5kIGltYWdlIChlLmcuLCBpbWFnZXMvaGVyby5qcGcpXCIpXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dFxuICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcInBhdGgvdG8vaW1hZ2UuanBnXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmhlcm9CYWNrZ3JvdW5kID0gdmFsdWU7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBBY3Rpdml0aWVzIC0tLVxuXG4gIHByaXZhdGUgcmVuZGVyQWN0aXZpdGllc1NlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQWN0aXZpdGllc1wiLCBcIlxcdXsxRjNBRn1cIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGFjdGl2aXR5ID0gdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpXTtcbiAgICAgIHRoaXMucmVuZGVyQWN0aXZpdHlJdGVtKGJvZHksIGFjdGl2aXR5LCBpKTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYnV0dG9uXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBBY3Rpdml0eVwiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBjb25zdCBuZXdBY3Rpdml0eTogQWN0aXZpdHlDb25maWcgPSB7XG4gICAgICAgICAgICBpZDogYGN1c3RvbS0ke0RhdGUubm93KCl9YCxcbiAgICAgICAgICAgIG5hbWU6IFwiTmV3IEFjdGl2aXR5XCIsXG4gICAgICAgICAgICBlbW9qaTogXCJcXHUyQjUwXCIsXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJzcGlyaXRcIixcbiAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICBmb2xkZXI6IFwiXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJcIixcbiAgICAgICAgICAgIGRhbWFnZVBlckNvbXBsZXRpb246IDEsXG4gICAgICAgICAgICB3ZWVrbHlUYXJnZXQ6IDMsXG4gICAgICAgICAgICB0cmFja2luZ01vZGU6IFwiZGFpbHlcIixcbiAgICAgICAgICAgIGhhc1dvcmtzcGFjZTogZmFsc2UsXG4gICAgICAgICAgICBwcmlvcml0eTogNSxcbiAgICAgICAgICAgIG5lZ2xlY3RUaHJlc2hvbGQ6IDMsXG4gICAgICAgICAgICBwcmVmZXJyZWRUaW1lOiBcImFueXRpbWVcIixcbiAgICAgICAgICAgIGVzdGltYXRlZER1cmF0aW9uOiAzMCxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMucHVzaChuZXdBY3Rpdml0eSk7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJBY3Rpdml0eUl0ZW0oY29udGFpbmVyOiBIVE1MRWxlbWVudCwgYWN0aXZpdHk6IEFjdGl2aXR5Q29uZmlnLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgd3JhcHBlciA9IGNvbnRhaW5lci5jcmVhdGVEaXYoe1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgLy8gSGVhZGVyIHJvdyB3aXRoIHRvZ2dsZVxuICAgIG5ldyBTZXR0aW5nKHdyYXBwZXIpXG4gICAgICAuc2V0TmFtZShgJHthY3Rpdml0eS5lbW9qaX0gJHthY3Rpdml0eS5uYW1lfWApXG4gICAgICAuc2V0RGVzYyhgJHthY3Rpdml0eS5jYXRlZ29yeX0gXHUwMEI3ICR7YWN0aXZpdHkuZm9sZGVyIHx8IFwibm8gZm9sZGVyIHNldFwifWApXG4gICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgIHRvZ2dsZS5zZXRWYWx1ZShhY3Rpdml0eS5lbmFibGVkKS5vbkNoYW5nZShhc3luYyAodmFsdWUpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5lbmFibGVkID0gdmFsdWU7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gRXhwYW5kYWJsZSBkZXRhaWxzXG4gICAgY29uc3QgZGV0YWlsc1RvZ2dsZSA9IHdyYXBwZXIuY3JlYXRlRWwoXCJkZXRhaWxzXCIpO1xuICAgIGRldGFpbHNUb2dnbGUuY3JlYXRlRWwoXCJzdW1tYXJ5XCIsIHtcbiAgICAgIHRleHQ6IFwiQ29uZmlndXJlXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImN1cnNvcjogcG9pbnRlcjsgZm9udC1zaXplOiAwLjg1ZW07IGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTsgbWFyZ2luLWJvdHRvbTogOHB4O1wiIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXRhaWxzID0gZGV0YWlsc1RvZ2dsZS5jcmVhdGVEaXYoKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIk5hbWVcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PiB0LnNldFZhbHVlKGFjdGl2aXR5Lm5hbWUpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLm5hbWUgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVtb2ppXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5lbW9qaSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uZW1vamkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkNhdGVnb3J5XCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGQuYWRkT3B0aW9ucyh7IGJvZHk6IFwiQm9keVwiLCBtaW5kOiBcIk1pbmRcIiwgc3Bpcml0OiBcIlNwaXJpdFwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LmNhdGVnb3J5KVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uY2F0ZWdvcnkgPSB2IGFzIENhdGVnb3J5O1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJWYXVsdCBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiRm9sZGVyIHdpdGggWVlZWS1NTS1ERCBub3Rlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+IHQuc2V0VmFsdWUoYWN0aXZpdHkuZm9sZGVyKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5mb2xkZXIgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkZyb250bWF0dGVyIHByb3BlcnR5XCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT4gdC5zZXRWYWx1ZShhY3Rpdml0eS5wcm9wZXJ0eSkub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ucHJvcGVydHkgPSB2O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgIH0pKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIldlZWtseSB0YXJnZXRcIilcbiAgICAgIC5hZGRTbGlkZXIoKHMpID0+XG4gICAgICAgIHMuc2V0TGltaXRzKDEsIDcsIDEpXG4gICAgICAgICAgLnNldFZhbHVlKGFjdGl2aXR5LndlZWtseVRhcmdldClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud2Vla2x5VGFyZ2V0ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJpb3JpdHkgKDEtMTApXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxMCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJpb3JpdHkpXG4gICAgICAgICAgLnNldER5bmFtaWNUb29sdGlwKClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByaW9yaXR5ID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiUHJlZmVycmVkIHRpbWVcIilcbiAgICAgIC5hZGREcm9wZG93bigoZCkgPT5cbiAgICAgICAgZC5hZGRPcHRpb25zKHtcbiAgICAgICAgICBtb3JuaW5nOiBcIk1vcm5pbmdcIiwgYWZ0ZXJub29uOiBcIkFmdGVybm9vblwiLFxuICAgICAgICAgIGV2ZW5pbmc6IFwiRXZlbmluZ1wiLCBhbnl0aW1lOiBcIkFueXRpbWVcIixcbiAgICAgICAgfSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkucHJlZmVycmVkVGltZSlcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnByZWZlcnJlZFRpbWUgPSB2IGFzIGFueTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiTmVnbGVjdCB0aHJlc2hvbGQgKGRheXMpXCIpXG4gICAgICAuYWRkU2xpZGVyKChzKSA9PlxuICAgICAgICBzLnNldExpbWl0cygxLCAxNCwgMSlcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkubmVnbGVjdFRocmVzaG9sZClcbiAgICAgICAgICAuc2V0RHluYW1pY1Rvb2x0aXAoKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ubmVnbGVjdFRocmVzaG9sZCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkVzdGltYXRlZCBkdXJhdGlvbiAobWludXRlcylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKFN0cmluZyhhY3Rpdml0eS5lc3RpbWF0ZWREdXJhdGlvbikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHBhcnNlSW50KHYpO1xuICAgICAgICAgIGlmICghaXNOYU4obikgJiYgbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmVzdGltYXRlZER1cmF0aW9uID0gbjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJIYXMgd29ya3NwYWNlXCIpXG4gICAgICAuc2V0RGVzYyhcIk9wZW5zIHdvcmtzcGFjZSB2aWV3IHdpdGggdGltZXIgd2hlbiBzdGFydGVkLCBpbnN0ZWFkIG9mIG1hcmtpbmcgZG9uZSBpbW1lZGlhdGVseVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUoYWN0aXZpdHkuaGFzV29ya3NwYWNlKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmhhc1dvcmtzcGFjZSA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIHRlbXBsYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IHBhdGggdG8gLmpzIHRlbXBsYXRlIGZpbGUgKGUuZy4gVGVtcGxhdGVzL1dvcmtvdXQuanMpLiBMZWF2ZSBlbXB0eSBmb3Igbm8gY3VzdG9tIHdvcmtzcGFjZS5cIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiZS5nLiBUZW1wbGF0ZXMvV29ya291dC5qc1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS53b3Jrc3BhY2VUZW1wbGF0ZSA/PyBcIlwiKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0ud29ya3NwYWNlVGVtcGxhdGUgPSB2LnRyaW0oKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi50ZW1wbGF0ZUVuZ2luZS5pbnZhbGlkYXRlQ2FjaGUoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiV29ya3NwYWNlIGZvbGRlclwiKVxuICAgICAgLnNldERlc2MoXCJWYXVsdCBmb2xkZXIgd2hlcmUgd29ya3NwYWNlIGxvZyBmaWxlcyBhcmUgc2F2ZWQgYWZ0ZXIgY29tcGxldGluZ1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJlLmcuIEhvbWUvU3RhcnRzL0RyYXdpbmcvV29ya3NwYWNlc1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZShhY3Rpdml0eS53b3Jrc3BhY2VGb2xkZXIgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLndvcmtzcGFjZUZvbGRlciA9IHYudHJpbSgpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoZGV0YWlscylcbiAgICAgIC5zZXROYW1lKFwiU2tpbGwgZm9sZGVyXCIpXG4gICAgICAuc2V0RGVzYyhcIlZhdWx0IGZvbGRlciBjb250YWluaW5nIHNraWxsIHRyZWUgbm90ZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFBsYWNlaG9sZGVyKFwiZS5nLiBIb21lL1N0YXJ0cy9EcmF3aW5nL1NraWxsIHRyZWVcIilcbiAgICAgICAgICAuc2V0VmFsdWUoYWN0aXZpdHkuc2tpbGxGb2xkZXIgPz8gXCJcIilcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLnNraWxsRm9sZGVyID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLnNldE5hbWUoXCJCbG9ja3MgKGNvbW1hLXNlcGFyYXRlZCBhY3Rpdml0eSBJRHMpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZSgoYWN0aXZpdHkuYmxvY2tzID8/IFtdKS5qb2luKFwiLCBcIikpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuYWN0aXZpdGllc1tpbmRleF0uYmxvY2tzID0gdi5zcGxpdChcIixcIikubWFwKChzKSA9PiBzLnRyaW0oKSkuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkFsdGVybmF0ZXMgd2l0aCAoYWN0aXZpdHkgSUQpXCIpXG4gICAgICAuYWRkVGV4dCgodCkgPT5cbiAgICAgICAgdC5zZXRWYWx1ZShhY3Rpdml0eS5hbHRlcm5hdGVzV2l0aCA/PyBcIlwiKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXNbaW5kZXhdLmFsdGVybmF0ZXNXaXRoID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGRldGFpbHMpXG4gICAgICAuc2V0TmFtZShcIkNoYWluIGFmdGVyIChhY3Rpdml0eSBJRClcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0LnNldFZhbHVlKGFjdGl2aXR5LmNoYWluQWZ0ZXIgPz8gXCJcIikub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzW2luZGV4XS5jaGFpbkFmdGVyID0gdi50cmltKCkgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIERlbGV0ZSBidXR0b25cbiAgICBuZXcgU2V0dGluZyhkZXRhaWxzKVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG5cbiAgICAgICAgICAuc2V0QnV0dG9uVGV4dChcIkRlbGV0ZSBBY3Rpdml0eVwiKVxuICAgICAgICAgIC5zZXRXYXJuaW5nKClcbiAgICAgICAgICAub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5hY3Rpdml0aWVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIENhdGVnb3JpZXMgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJDYXRlZ29yaWVzU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJDYXRlZ29yaWVzXCIsIFwiXFx1ezFGM0E4fVwiKTtcblxuICAgIGNvbnN0IGNhdGVnb3JpZXM6IHsga2V5OiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZyB9W10gPSBbXG4gICAgICB7IGtleTogXCJib2R5XCIsIGxhYmVsOiBcIkJvZHlcIiB9LFxuICAgICAgeyBrZXk6IFwibWluZFwiLCBsYWJlbDogXCJNaW5kXCIgfSxcbiAgICAgIHsga2V5OiBcInNwaXJpdFwiLCBsYWJlbDogXCJTcGlyaXRcIiB9LFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IGNhdCBvZiBjYXRlZ29yaWVzKSB7XG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShgJHtjYXQubGFiZWx9IGNvbG9yYClcbiAgICAgICAgLmFkZENvbG9yUGlja2VyKChjcCkgPT5cbiAgICAgICAgICBjcFxuICAgICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldKVxuICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhdGVnb3J5Q29sb3JzW2NhdC5rZXldID0gdjtcbiAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlRpdGxlIG92ZXJyaWRlXCIpXG4gICAgICAuc2V0RGVzYyhcIk92ZXJyaWRlIHRoZSBkeW5hbWljIHRpdGxlIChsZWF2ZSBlbXB0eSBmb3IgYXV0bylcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnRpdGxlT3ZlcnJpZGUpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aXRsZU92ZXJyaWRlID0gdjtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIFRlbXBsZSAtLS1cblxuICBwcml2YXRlIHJlbmRlclRlbXBsZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiVGVtcGxlIFVwa2VlcFwiLCBcIlxcdXsxRjNEQn1cXHVGRTBGXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdGFzayA9IHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldO1xuXG4gICAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgICAuc2V0TmFtZShgJHt0YXNrLmVtb2ppfSAke3Rhc2submFtZX1gKVxuICAgICAgICAuc2V0RGVzYyhgRXZlcnkgJHt0YXNrLmludGVydmFsRGF5c30gZGF5KHMpYClcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIk5hbWVcIikuc2V0VmFsdWUodGFzay5uYW1lKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3NbaV0ubmFtZSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICAgIHQuc2V0UGxhY2Vob2xkZXIoXCJEYXlzXCIpLnNldFZhbHVlKFN0cmluZyh0YXNrLmludGVydmFsRGF5cykpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBuID0gcGFyc2VJbnQodik7XG4gICAgICAgICAgICBpZiAoIWlzTmFOKG4pICYmIG4gPiAwKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRlbXBsZVRhc2tzW2ldLmludGVydmFsRGF5cyA9IG47XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgICAgdC5zZXRQbGFjZWhvbGRlcihcIkVtb2ppXCIpLnNldFZhbHVlKHRhc2suZW1vamkpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50ZW1wbGVUYXNrc1tpXS5lbW9qaSA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBUZW1wbGUgVGFza1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MudGVtcGxlVGFza3MucHVzaCh7XG4gICAgICAgICAgaWQ6IGB0ZW1wbGUtJHtEYXRlLm5vdygpfWAsXG4gICAgICAgICAgbmFtZTogXCJOZXcgVGFza1wiLFxuICAgICAgICAgIGxhc3RDb21wbGV0ZWQ6IG51bGwsXG4gICAgICAgICAgaW50ZXJ2YWxEYXlzOiA3LFxuICAgICAgICAgIGVtb2ppOiBcIlxcdTI3MjhcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8vIC0tLSBDYWxlbmRhciBJbnRlZ3JhdGlvbiAtLS1cblxuICBwcml2YXRlIHJlbmRlckNhbGVuZGFyU2VjdGlvbihjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuY3JlYXRlQ29sbGFwc2libGVTZWN0aW9uKGNvbnRhaW5lciwgXCJDYWxlbmRhciBJbnRlZ3JhdGlvblwiLCBcIlxcdXsxRjRDNX1cIik7XG5cbiAgICBib2R5LmNyZWF0ZUVsKFwicFwiLCB7XG4gICAgICB0ZXh0OiBcIk1lcmdlIGV4dGVybmFsIHRhc2tzIGludG8geW91ciBEYXkgTWFwIHRpbWVsaW5lLlwiLFxuICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXNpemU6IDAuODVlbTsgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiA4cHg7XCIgfSxcbiAgICB9KTtcblxuICAgIC8vIE9wdGlvbiBBOiBEYWlseSBOb3Rlc1xuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIkRhaWx5IE5vdGVzIGludGVncmF0aW9uXCIpXG4gICAgICAuc2V0RGVzYyhcIlBhcnNlIHRhc2tzIGZyb20geW91ciBkYWlseSBub3RlcyAoLSBbIF0gVGFzayBAdGltZSB+MzBtKVwiKVxuICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlRGFpbHlOb3Rlcykub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVEYWlseU5vdGVzID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJEYWlseSBOb3RlcyBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGNvbnRhaW5pbmcgWVlZWS1NTS1ERC5tZCBub3Rlc1wiKVxuICAgICAgLmFkZFRleHQoKHQpID0+XG4gICAgICAgIHRcbiAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIoXCJEYWlseSBOb3Rlc1wiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5kYWlseU5vdGVzRm9sZGVyKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZGFpbHlOb3Rlc0ZvbGRlciA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIE9wdGlvbiBCOiBUYXNrcyBQbHVnaW5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJUYXNrcyBQbHVnaW4gaW50ZWdyYXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiUmVhZCB0YXNrcyB3aXRoIGR1ZSBkYXRlcyBmcm9tIHRoZSBUYXNrcyBwbHVnaW5cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luKS5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVRhc2tzUGx1Z2luID0gdjtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICAvLyBPcHRpb24gQzogUXVpY2sgVGFza3NcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJRdWljayBUYXNrc1wiKVxuICAgICAgLnNldERlc2MoXCJPbGVuJ3MgYnVpbHQtaW4gdGFzayBzeXN0ZW1cIilcbiAgICAgIC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT5cbiAgICAgICAgdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLmVuYWJsZVF1aWNrVGFza3MpLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MuY2FsZW5kYXIuZW5hYmxlUXVpY2tUYXNrcyA9IHY7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgLy8gUXVpY2sgVGFza3MgbGlzdFxuICAgIGlmICh0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5lbmFibGVRdWlja1Rhc2tzKSB7XG4gICAgICBjb25zdCBub3cgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlXG4gICAgICAgID8gbmV3IERhdGUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2ltdWxhdGVkRGF0ZSlcbiAgICAgICAgOiBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgdG9kYXkgPSBub3cudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMCk7XG5cbiAgICAgIGNvbnN0IHRvZGF5VGFza3MgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmZpbHRlcihcbiAgICAgICAgKHF0KSA9PiBxdC5kYXRlID09PSB0b2RheVxuICAgICAgKTtcblxuICAgICAgaWYgKHRvZGF5VGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBsaXN0RWwgPSBib2R5LmNyZWF0ZURpdih7XG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJtYXJnaW46IDhweCAwOyBwYWRkaW5nOiA4cHg7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtbW9kaWZpZXItYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogNnB4O1wiIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxpc3RFbC5jcmVhdGVFbChcImRpdlwiLCB7XG4gICAgICAgICAgdGV4dDogXCJUb2RheSdzIFF1aWNrIFRhc2tzXCIsXG4gICAgICAgICAgYXR0cjogeyBzdHlsZTogXCJmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuOWVtOyBtYXJnaW4tYm90dG9tOiA2cHg7XCIgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgcXQgPSB0aGlzLnBsdWdpbi5zZXR0aW5ncy5jYWxlbmRhci5xdWlja1Rhc2tzW2ldO1xuICAgICAgICAgIGlmIChxdC5kYXRlICE9PSB0b2RheSkgY29udGludWU7XG5cbiAgICAgICAgICBuZXcgU2V0dGluZyhsaXN0RWwpXG4gICAgICAgICAgICAuc2V0TmFtZShgJHtxdC5kb25lID8gXCJcXHUyNzEzXCIgOiBcIlxcdTI1Q0JcIn0gJHtxdC50aXRsZX1gKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgIFtxdC50aW1lLCBxdC5kdXJhdGlvbiA/IGAke3F0LmR1cmF0aW9ufW1gIDogXCJcIl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXHUwMEI3IFwiKSB8fCBcIk5vIHRpbWUgc2V0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJEZWxldGVcIikuc2V0V2FybmluZygpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLmNhbGVuZGFyLnF1aWNrVGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCIrIEFkZCBRdWljayBUYXNrXCIpLm9uQ2xpY2soKCkgPT4ge1xuICAgICAgICAgICh0aGlzLnBsdWdpbiBhcyBhbnkpLnNob3dRdWlja1Rhc2tEaWFsb2coKTtcbiAgICAgICAgICAvLyBDbG9zZSBzZXR0aW5ncyBcdTIwMTQgdGhlIGRpYWxvZyBhcHBlYXJzIG9uIHRvcFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvLyAtLS0gVGhlbWUgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJUaGVtZVNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiVGhlbWVcIiwgXCJcXHV7MUYzQTh9XCIpO1xuXG4gICAgY29uc3QgdGhlbWVGaWVsZHM6IHsga2V5OiBzdHJpbmc7IGxhYmVsOiBzdHJpbmc7IGRlZmF1bHRWYWw6IHN0cmluZyB9W10gPSBbXG4gICAgICB7IGtleTogXCJiZ1ByaW1hcnlcIiwgbGFiZWw6IFwiQmFja2dyb3VuZFwiLCBkZWZhdWx0VmFsOiBcIiMwYzBhMDlcIiB9LFxuICAgICAgeyBrZXk6IFwidGV4dFByaW1hcnlcIiwgbGFiZWw6IFwiVGV4dFwiLCBkZWZhdWx0VmFsOiBcIiNmNWYwZThcIiB9LFxuICAgICAgeyBrZXk6IFwidGV4dE11dGVkXCIsIGxhYmVsOiBcIk11dGVkIHRleHRcIiwgZGVmYXVsdFZhbDogXCIjOTI4ZDg1XCIgfSxcbiAgICAgIHsga2V5OiBcImFjY2VudEdvbGRcIiwgbGFiZWw6IFwiQWNjZW50IChnb2xkKVwiLCBkZWZhdWx0VmFsOiBcIiNjOWE4NGNcIiB9LFxuICAgICAgeyBrZXk6IFwiZGFuZ2VyXCIsIGxhYmVsOiBcIkRhbmdlclwiLCBkZWZhdWx0VmFsOiBcIiM4YjJkMzVcIiB9LFxuICAgICAgeyBrZXk6IFwic3VjY2Vzc1wiLCBsYWJlbDogXCJTdWNjZXNzXCIsIGRlZmF1bHRWYWw6IFwiI2Q0OTQwYVwiIH0sXG4gICAgXTtcblxuICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhlbWVGaWVsZHMpIHtcbiAgICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAgIC5zZXROYW1lKGZpZWxkLmxhYmVsKVxuICAgICAgICAuYWRkQ29sb3JQaWNrZXIoKGNwKSA9PlxuICAgICAgICAgIGNwXG4gICAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAgICh0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyBhcyBhbnkpPy5bZmllbGQua2V5XSA/PyBmaWVsZC5kZWZhdWx0VmFsXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgICAgKHRoaXMucGx1Z2luLnNldHRpbmdzLnRoZW1lT3ZlcnJpZGVzIGFzIGFueSlbZmllbGQua2V5XSA9IHY7XG4gICAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KS5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiUmVzZXQgdG8gRWx5c2lhbiBEYXJrXCIpLm9uQ2xpY2soYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy50aGVtZU92ZXJyaWRlcyA9IHt9O1xuICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgdGhpcy5kaXNwbGF5KCk7XG4gICAgICAgIG5ldyBOb3RpY2UoXCJUaGVtZSByZXNldCB0byBFbHlzaWFuIERhcmsgZGVmYXVsdHNcIik7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyAtLS0gQWR2YW5jZWQgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJBZHZhbmNlZFNlY3Rpb24oY29udGFpbmVyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmNyZWF0ZUNvbGxhcHNpYmxlU2VjdGlvbihjb250YWluZXIsIFwiQWR2YW5jZWRcIiwgXCJcXHUyNjk5XFx1RkUwRlwiKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlNpbXVsYXRlZCBkYXRlXCIpXG4gICAgICAuc2V0RGVzYyhcIk92ZXJyaWRlIHRvZGF5J3MgZGF0ZSBmb3IgdGVzdGluZyAoWVlZWS1NTS1ERClcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiWVlZWS1NTS1ERFwiKVxuICAgICAgICAgIC5zZXRWYWx1ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID8/IFwiXCIpXG4gICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaW11bGF0ZWREYXRlID0gdi50cmltKCkgfHwgbnVsbDtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5zZXROYW1lKFwiU3lzdGVtIHN0YXRlXCIpXG4gICAgICAuYWRkRHJvcGRvd24oKGQpID0+XG4gICAgICAgIGRcbiAgICAgICAgICAuYWRkT3B0aW9ucyh7IGFjdGl2ZTogXCJBY3RpdmVcIiwgcGF1c2VkOiBcIlBhdXNlZFwiIH0pXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlKVxuICAgICAgICAgIC5vbkNoYW5nZShhc3luYyAodikgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPSB2IGFzIFwiYWN0aXZlXCIgfCBcInBhdXNlZFwiO1xuICAgICAgICAgICAgaWYgKG5ld1N0YXRlID09PSBcInBhdXNlZFwiICYmIHRoaXMucGx1Z2luLnNldHRpbmdzLnN5c3RlbVN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnBhdXNlU3RhcnRUaW1lID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdTdGF0ZSA9PT0gXCJhY3RpdmVcIiAmJiB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9PT0gXCJwYXVzZWRcIikge1xuICAgICAgICAgICAgICBpZiAodGhpcy5wbHVnaW4uc2V0dGluZ3MucGF1c2VTdGFydFRpbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXVzZWRNcyA9IERhdGUubm93KCkgLSBuZXcgRGF0ZSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnRvdGFsUGF1c2VkVGltZSArPSBwYXVzZWRNcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5wYXVzZVN0YXJ0VGltZSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5zeXN0ZW1TdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJRdW90ZSBmb2xkZXJcIilcbiAgICAgIC5zZXREZXNjKFwiVmF1bHQgZm9sZGVyIGNvbnRhaW5pbmcgcXVvdGUgZmlsZXNcIilcbiAgICAgIC5hZGRUZXh0KCh0KSA9PlxuICAgICAgICB0XG4gICAgICAgICAgLnNldFBsYWNlaG9sZGVyKFwiUXVvdGVzL1N0b2ljXCIpXG4gICAgICAgICAgLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aClcbiAgICAgICAgICAub25DaGFuZ2UoYXN5bmMgKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnNldHRpbmdzLnF1b3RlRm9sZGVyUGF0aCA9IHY7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIG5ldyBTZXR0aW5nKGJvZHkpXG4gICAgICAuc2V0TmFtZShcIlJlLXJ1biBtaWdyYXRpb25cIilcbiAgICAgIC5zZXREZXNjKFwiUmUtaW1wb3J0IGRhdGEgZnJvbSB0aGUgTXl0aG9sb2dpY2FsIEhhYml0IFRyYWNrZXIgcGx1Z2luXCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiTWlncmF0ZVwiKS5zZXRXYXJuaW5nKCkub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wbHVnaW4uc2V0dGluZ3MubWlncmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAvLyBSZWxvYWQgdGhlIHBsdWdpbiB0byB0cmlnZ2VyIG1pZ3JhdGlvblxuICAgICAgICAgIGF3YWl0ICh0aGlzLnBsdWdpbiBhcyBhbnkpLm9ubG9hZCgpO1xuICAgICAgICAgIHRoaXMuZGlzcGxheSgpO1xuICAgICAgICAgIG5ldyBOb3RpY2UoXCJNaWdyYXRpb24gY29tcGxldGVcIik7XG4gICAgICAgIH0pXG4gICAgICApO1xuICB9XG5cbiAgLy8gLS0tIERldmVsb3BlciBEYXNoYm9hcmQgLS0tXG5cbiAgcHJpdmF0ZSByZW5kZXJEZXZEYXNoYm9hcmRTZWN0aW9uKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBib2R5ID0gdGhpcy5jcmVhdGVDb2xsYXBzaWJsZVNlY3Rpb24oY29udGFpbmVyLCBcIkRldmVsb3BlciBEYXNoYm9hcmRcIiwgXCJcXHV7MUY2RTB9XFx1RkUwRlwiKTtcblxuICAgIGJvZHkuY3JlYXRlRWwoXCJwXCIsIHtcbiAgICAgIHRleHQ6IFwiRWRpdCB0aGUgcmF3IGRldkNvbmZpZyBKU09OLiBDaGFuZ2VzIGFyZSBhcHBsaWVkIG9uIHNhdmUuXCIsXG4gICAgICBhdHRyOiB7IHN0eWxlOiBcImZvbnQtc2l6ZTogMC44NWVtOyBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7IG1hcmdpbi1ib3R0b206IDhweDtcIiB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgdGV4dGFyZWEgPSBib2R5LmNyZWF0ZUVsKFwidGV4dGFyZWFcIiwge1xuICAgICAgYXR0cjoge1xuICAgICAgICBzdHlsZTogYFxuICAgICAgICAgIHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OiAzMDBweDsgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTsgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7IGNvbG9yOiB2YXIoLS10ZXh0LW5vcm1hbCk7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1tb2RpZmllci1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgICAgcGFkZGluZzogMTBweDsgcmVzaXplOiB2ZXJ0aWNhbDtcbiAgICAgICAgYCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgdGV4dGFyZWEudmFsdWUgPSBKU09OLnN0cmluZ2lmeSh0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcsIG51bGwsIDIpO1xuXG4gICAgbmV3IFNldHRpbmcoYm9keSlcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJTYXZlIGRldkNvbmZpZ1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZSh0ZXh0YXJlYS52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcgPSBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgREVGQVVMVF9ERVZfQ09ORklHLFxuICAgICAgICAgICAgICBwYXJzZWRcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgIHRoaXMucGx1Z2luLnJlZnJlc2hEYXNoYm9hcmQoKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJkZXZDb25maWcgc2F2ZWQgYW5kIGFwcGxpZWRcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiSW52YWxpZCBKU09OIFx1MjAxNCBwbGVhc2UgY2hlY2sgc3ludGF4XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5hZGRCdXR0b24oKGJ0bikgPT5cbiAgICAgICAgYnRuLnNldEJ1dHRvblRleHQoXCJSZXNldCB0byBkZWZhdWx0c1wiKS5vbkNsaWNrKGFzeW5jICgpID0+IHtcbiAgICAgICAgICB0aGlzLnBsdWdpbi5zZXR0aW5ncy5kZXZDb25maWcgPSB7IC4uLkRFRkFVTFRfREVWX0NPTkZJRyB9O1xuICAgICAgICAgIGF3YWl0IHRoaXMucGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgIHRleHRhcmVhLnZhbHVlID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wbHVnaW4uc2V0dGluZ3MuZGV2Q29uZmlnLCBudWxsLCAyKTtcbiAgICAgICAgICBuZXcgTm90aWNlKFwiZGV2Q29uZmlnIHJlc2V0IHRvIGRlZmF1bHRzXCIpO1xuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIC8vIEV4cG9ydC9JbXBvcnRcbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJFeHBvcnQgYWxsIHNldHRpbmdzXCIpXG4gICAgICAuYWRkQnV0dG9uKChidG4pID0+XG4gICAgICAgIGJ0bi5zZXRCdXR0b25UZXh0KFwiQ29weSB0byBjbGlwYm9hcmRcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QganNvbiA9IEpTT04uc3RyaW5naWZ5KHRoaXMucGx1Z2luLnNldHRpbmdzLCBudWxsLCAyKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoanNvbik7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiU2V0dGluZ3MgY29waWVkIHRvIGNsaXBib2FyZFwiKTtcbiAgICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIC8vIEZhbGxiYWNrIGZvciBtb2JpbGUgXHUyMDE0IHNob3cgaW4gYSB0ZXh0YXJlYSBmb3IgbWFudWFsIGNvcHlcbiAgICAgICAgICAgIGNvbnN0IHRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICAgICAgdGEudmFsdWUgPSBqc29uO1xuICAgICAgICAgICAgdGEuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjUwJTt6LWluZGV4Ojk5OTk7Zm9udC1zaXplOjExcHg7XCI7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhKTtcbiAgICAgICAgICAgIHRhLnNlbGVjdCgpO1xuICAgICAgICAgICAgdGEuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgKCkgPT4gdGEucmVtb3ZlKCkpO1xuICAgICAgICAgICAgbmV3IE5vdGljZShcIlRhcCB0aGUgdGV4dCBhcmVhIGFuZCBjb3B5IG1hbnVhbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhib2R5KVxuICAgICAgLnNldE5hbWUoXCJJbXBvcnQgc2V0dGluZ3NcIilcbiAgICAgIC5hZGRUZXh0QXJlYSgoYXJlYSkgPT4ge1xuICAgICAgICBhcmVhLnNldFBsYWNlaG9sZGVyKFwiUGFzdGUgSlNPTiBoZXJlLi4uXCIpO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICAgICAgYXJlYS5pbnB1dEVsLnN0eWxlLm1pbkhlaWdodCA9IFwiODBweFwiO1xuICAgICAgICBhcmVhLmlucHV0RWwuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG4gICAgICAgIGFyZWEuaW5wdXRFbC5zdHlsZS5mb250U2l6ZSA9IFwiMTFweFwiO1xuXG4gICAgICAgIC8vIFN0b3JlIHJlZmVyZW5jZSBmb3IgdGhlIGltcG9ydCBidXR0b25cbiAgICAgICAgKGJvZHkgYXMgYW55KS5faW1wb3J0QXJlYSA9IGFyZWE7XG4gICAgICB9KVxuICAgICAgLmFkZEJ1dHRvbigoYnRuKSA9PlxuICAgICAgICBidG4uc2V0QnV0dG9uVGV4dChcIkltcG9ydFwiKS5zZXRXYXJuaW5nKCkub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGFyZWEgPSAoYm9keSBhcyBhbnkpLl9pbXBvcnRBcmVhO1xuICAgICAgICAgICAgaWYgKCFhcmVhKSByZXR1cm47XG4gICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBKU09OLnBhcnNlKGFyZWEuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMucGx1Z2luLnNldHRpbmdzLCBwYXJzZWQpO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5wbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UoXCJTZXR0aW5ncyBpbXBvcnRlZCBzdWNjZXNzZnVsbHlcIik7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBuZXcgTm90aWNlKFwiSW52YWxpZCBKU09OIFx1MjAxNCBwbGVhc2UgY2hlY2sgc3ludGF4XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cbn1cbiIsICIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIE9sZW4gXHUyMDE0IFRlbXBsYXRlIEVuZ2luZVxuLy8gTG9hZHMgLmpzIHRlbXBsYXRlIGZpbGVzIGZyb20gdmF1bHQsIGNyZWF0ZXMgYSBzYW5kYm94ZWRcbi8vIGV4ZWN1dGlvbiBjb250ZXh0IHdpdGggZGF0YS1iaW5kaW5nIHRvIG5vdGUgZnJvbnRtYXR0ZXIsXG4vLyBhbmQgcmVuZGVycyBVSSBpbnRvIGEgY29udGFpbmVyIGVsZW1lbnQuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuaW1wb3J0IHsgQXBwLCBURmlsZSwgTm90aWNlIH0gZnJvbSBcIm9ic2lkaWFuXCI7XG5pbXBvcnQgdHlwZSBPbGVuUGx1Z2luIGZyb20gXCIuLi9tYWluXCI7XG5cbi8qKlxuICogVGhlIGNvbnRleHQgb2JqZWN0IHBhc3NlZCB0byBldmVyeSB0ZW1wbGF0ZSBhdCBydW50aW1lLlxuICogVGVtcGxhdGVzIHJlY2VpdmUgdGhpcyBhcyBgY3R4YCBhbmQgdXNlIGl0IHRvIHJlYWQvd3JpdGVcbiAqIGZyb250bWF0dGVyIGFuZCBidWlsZCB0aGVpciBVSS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBUZW1wbGF0ZUNvbnRleHQge1xuICAvKiogT2JzaWRpYW4gQXBwIGluc3RhbmNlICovXG4gIGFwcDogQXBwO1xuICAvKiogT2xlbiBwbHVnaW4gcmVmZXJlbmNlICovXG4gIHBsdWdpbjogT2xlblBsdWdpbjtcbiAgLyoqIFRoZSBkYXRhIG5vdGUgY3VycmVudGx5IGJlaW5nIHZpZXdlZCAqL1xuICBmaWxlOiBURmlsZTtcbiAgLyoqIERPTSBjb250YWluZXIgdG8gcmVuZGVyIGludG8gKi9cbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcblxuICAvLyAtLS0gRGF0YSBCaW5kaW5nIC0tLVxuXG4gIC8qKiBTbmFwc2hvdCBvZiB0aGUgbm90ZSdzIGN1cnJlbnQgZnJvbnRtYXR0ZXIgKHJlYWQtb25seSBvYmplY3QpICovXG4gIGZyb250bWF0dGVyOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgLyoqIEdldCBhIHNpbmdsZSBmcm9udG1hdHRlciB2YWx1ZSwgb3IgYWxsIGZyb250bWF0dGVyIGlmIG5vIGtleSAqL1xuICBnZXREYXRhKGtleT86IHN0cmluZyk6IHVua25vd247XG4gIC8qKiBXcml0ZSBhIHNpbmdsZSBrZXkgYmFjayB0byB0aGUgbm90ZSdzIGZyb250bWF0dGVyICovXG4gIHNldERhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiB1bmtub3duKTogUHJvbWlzZTx2b2lkPjtcbiAgLyoqIEJhdGNoLXdyaXRlIG11bHRpcGxlIGtleXMgdG8gdGhlIG5vdGUncyBmcm9udG1hdHRlciAqL1xuICBzZXRNdWx0aXBsZURhdGEoZGF0YTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4pOiBQcm9taXNlPHZvaWQ+O1xuXG4gIC8vIC0tLSBWYXVsdCBIZWxwZXJzIC0tLVxuXG4gIC8qKiBSZWFkIHJhdyB0ZXh0IG9mIGFueSB2YXVsdCBmaWxlIGJ5IHBhdGggKi9cbiAgcmVhZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPjtcbiAgLyoqIEdldCBhbGwgbWFya2Rvd24gZmlsZXMgaW5zaWRlIGEgZm9sZGVyICovXG4gIGdldEZpbGVzSW5Gb2xkZXIoZm9sZGVyUGF0aDogc3RyaW5nKTogVEZpbGVbXTtcbiAgLyoqIEdldCBmcm9udG1hdHRlciBvZiBhbnkgZmlsZSBieSBwYXRoICovXG4gIGdldEZpbGVNZXRhZGF0YShwYXRoOiBzdHJpbmcpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB8IG51bGw7XG5cbiAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAvKiogT2JzaWRpYW4gTm90aWNlIGZvciB0b2FzdHMgKi9cbiAgbm90aWNlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IHZvaWQ7XG4gIC8qKiBtb21lbnQuanMgKHByb3ZpZGVkIGJ5IE9ic2lkaWFuIGdsb2JhbGx5KSAqL1xuICBtb21lbnQ6IHR5cGVvZiB3aW5kb3cubW9tZW50O1xuICAvKiogQ3JlYXRlIGFuIEhUTUwgZWxlbWVudCAoc2hvcnRoYW5kKSAqL1xuICBjcmVhdGVFbDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICB0YWc6IEssXG4gICAgYXR0cnM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS107XG59XG5cbi8qKlxuICogQ29yZSBlbmdpbmUgdGhhdCBtYW5hZ2VzIHRlbXBsYXRlIGxvb2t1cCwgbG9hZGluZywgYW5kIGV4ZWN1dGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRW5naW5lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcDtcbiAgcHJpdmF0ZSBwbHVnaW46IE9sZW5QbHVnaW47XG4gIC8qKiBDYWNoZSBvZiBsb2FkZWQgdGVtcGxhdGUgc291cmNlIGNvZGUgKHBhdGggXHUyMTkyIHNvdXJjZSkgKi9cbiAgcHJpdmF0ZSB0ZW1wbGF0ZUNhY2hlOiBNYXA8c3RyaW5nLCBzdHJpbmc+ID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IE9sZW5QbHVnaW4pIHtcbiAgICB0aGlzLmFwcCA9IGFwcDtcbiAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgfVxuXG4gIC8vIC0tLSBBY3Rpdml0eSBMb29rdXAgLS0tXG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIHdvcmtzcGFjZSB0ZW1wbGF0ZSBmb3IgYSBnaXZlbiBhY3Rpdml0eSB0eXBlLlxuICAgKiBMb29rcyB1cCB0aGUgYWN0aXZpdHkgYnkgSUQgaW4gc2V0dGluZ3MgYW5kIHJldHVybnMgaXRzIHdvcmtzcGFjZVRlbXBsYXRlIHBhdGguXG4gICAqL1xuICBmaW5kVGVtcGxhdGUoYWN0aXZpdHlUeXBlOiBzdHJpbmcpOiB7IHRlbXBsYXRlUGF0aDogc3RyaW5nIH0gfCBudWxsIHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IHRoaXMucGx1Z2luLnNldHRpbmdzLmFjdGl2aXRpZXMuZmluZChcbiAgICAgIChhKSA9PiBhLmlkID09PSBhY3Rpdml0eVR5cGUgJiYgYS5lbmFibGVkICYmIGEud29ya3NwYWNlVGVtcGxhdGUsXG4gICAgKTtcbiAgICBpZiAoIWFjdGl2aXR5KSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4geyB0ZW1wbGF0ZVBhdGg6IGFjdGl2aXR5LndvcmtzcGFjZVRlbXBsYXRlISB9O1xuICB9XG5cbiAgLy8gLS0tIFRlbXBsYXRlIExvYWRpbmcgLS0tXG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIHRlbXBsYXRlIHNvdXJjZSBmcm9tIHZhdWx0LiBDYWNoZXMgdW50aWwgaW52YWxpZGF0ZWQuXG4gICAqL1xuICBhc3luYyBsb2FkVGVtcGxhdGVTb3VyY2UodGVtcGxhdGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICAvLyBDaGVjayBjYWNoZSBmaXJzdFxuICAgIGlmICh0aGlzLnRlbXBsYXRlQ2FjaGUuaGFzKHRlbXBsYXRlUGF0aCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlQ2FjaGUuZ2V0KHRlbXBsYXRlUGF0aCkhO1xuICAgIH1cblxuICAgIC8vIE5vcm1hbGl6ZSBwYXRoIFx1MjAxNCBhZGQgLmpzIGlmIG1pc3NpbmdcbiAgICBsZXQgcmVzb2x2ZWRQYXRoID0gdGVtcGxhdGVQYXRoO1xuICAgIGlmICghcmVzb2x2ZWRQYXRoLmVuZHNXaXRoKFwiLmpzXCIpICYmICFyZXNvbHZlZFBhdGguZW5kc1dpdGgoXCIubWRcIikpIHtcbiAgICAgIHJlc29sdmVkUGF0aCArPSBcIi5qc1wiO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGUgPSB0aGlzLmFwcC52YXVsdC5nZXRBYnN0cmFjdEZpbGVCeVBhdGgocmVzb2x2ZWRQYXRoKTtcbiAgICBpZiAoIWZpbGUgfHwgIShmaWxlIGluc3RhbmNlb2YgVEZpbGUpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgc291cmNlID0gYXdhaXQgdGhpcy5hcHAudmF1bHQucmVhZChmaWxlKTtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5zZXQodGVtcGxhdGVQYXRoLCBzb3VyY2UpO1xuICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE9sZW4gVGVtcGxhdGVFbmdpbmU6IEZhaWxlZCB0byByZWFkIHRlbXBsYXRlICR7cmVzb2x2ZWRQYXRofTpgLCBlcnIpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEludmFsaWRhdGUgdGhlIGNhY2hlIGZvciBhIHNwZWNpZmljIHRlbXBsYXRlIChlLmcuIGFmdGVyIGVkaXRzKS5cbiAgICovXG4gIGludmFsaWRhdGVDYWNoZSh0ZW1wbGF0ZVBhdGg/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGVtcGxhdGVQYXRoKSB7XG4gICAgICB0aGlzLnRlbXBsYXRlQ2FjaGUuZGVsZXRlKHRlbXBsYXRlUGF0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGVtcGxhdGVDYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIC8vIC0tLSBDb250ZXh0IENyZWF0aW9uIC0tLVxuXG4gIC8qKlxuICAgKiBCdWlsZCB0aGUgVGVtcGxhdGVDb250ZXh0IHRoYXQgZ2V0cyBwYXNzZWQgdG8gdGhlIHRlbXBsYXRlIGZ1bmN0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBidWlsZENvbnRleHQoXG4gICAgZmlsZTogVEZpbGUsXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgICBmcm9udG1hdHRlcjogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4gICk6IFRlbXBsYXRlQ29udGV4dCB7XG4gICAgY29uc3QgYXBwID0gdGhpcy5hcHA7XG4gICAgY29uc3QgcGx1Z2luID0gdGhpcy5wbHVnaW47XG5cbiAgICByZXR1cm4ge1xuICAgICAgYXBwLFxuICAgICAgcGx1Z2luLFxuICAgICAgZmlsZSxcbiAgICAgIGNvbnRhaW5lcixcblxuICAgICAgLy8gLS0tIERhdGEgQmluZGluZyAtLS1cblxuICAgICAgZnJvbnRtYXR0ZXI6IHsgLi4uZnJvbnRtYXR0ZXIgfSxcblxuICAgICAgZ2V0RGF0YShrZXk/OiBzdHJpbmcpOiB1bmtub3duIHtcbiAgICAgICAgaWYgKCFrZXkpIHJldHVybiB7IC4uLmZyb250bWF0dGVyIH07XG4gICAgICAgIHJldHVybiBmcm9udG1hdHRlcltrZXldO1xuICAgICAgfSxcblxuICAgICAgYXN5bmMgc2V0RGF0YShrZXk6IHN0cmluZywgdmFsdWU6IHVua25vd24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgYXdhaXQgYXBwLmZpbGVNYW5hZ2VyLnByb2Nlc3NGcm9udE1hdHRlcihmaWxlLCAoZm0pID0+IHtcbiAgICAgICAgICBmbVtrZXldID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBVcGRhdGUgb3VyIGxvY2FsIHNuYXBzaG90XG4gICAgICAgIGZyb250bWF0dGVyW2tleV0gPSB2YWx1ZTtcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIHNldE11bHRpcGxlRGF0YShkYXRhOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBhd2FpdCBhcHAuZmlsZU1hbmFnZXIucHJvY2Vzc0Zyb250TWF0dGVyKGZpbGUsIChmbSkgPT4ge1xuICAgICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgICBmbVtrXSA9IHY7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVXBkYXRlIGxvY2FsIHNuYXBzaG90XG4gICAgICAgIGZvciAoY29uc3QgW2ssIHZdIG9mIE9iamVjdC5lbnRyaWVzKGRhdGEpKSB7XG4gICAgICAgICAgZnJvbnRtYXR0ZXJba10gPSB2O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvLyAtLS0gVmF1bHQgSGVscGVycyAtLS1cblxuICAgICAgYXN5bmMgcmVhZEZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgICAgIGNvbnN0IGYgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoIWYgfHwgIShmIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIGFwcC52YXVsdC5yZWFkKGYpO1xuICAgICAgfSxcblxuICAgICAgZ2V0RmlsZXNJbkZvbGRlcihmb2xkZXJQYXRoOiBzdHJpbmcpOiBURmlsZVtdIHtcbiAgICAgICAgcmV0dXJuIGFwcC52YXVsdC5nZXRNYXJrZG93bkZpbGVzKCkuZmlsdGVyKFxuICAgICAgICAgIChmKSA9PiBmLnBhdGguc3RhcnRzV2l0aChmb2xkZXJQYXRoLmVuZHNXaXRoKFwiL1wiKSA/IGZvbGRlclBhdGggOiBmb2xkZXJQYXRoICsgXCIvXCIpLFxuICAgICAgICApO1xuICAgICAgfSxcblxuICAgICAgZ2V0RmlsZU1ldGFkYXRhKHBhdGg6IHN0cmluZyk6IFJlY29yZDxzdHJpbmcsIHVua25vd24+IHwgbnVsbCB7XG4gICAgICAgIGNvbnN0IGYgPSBhcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKHBhdGgpO1xuICAgICAgICBpZiAoIWYgfHwgIShmIGluc3RhbmNlb2YgVEZpbGUpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgY29uc3QgY2FjaGUgPSBhcHAubWV0YWRhdGFDYWNoZS5nZXRGaWxlQ2FjaGUoZik7XG4gICAgICAgIHJldHVybiAoY2FjaGU/LmZyb250bWF0dGVyIGFzIFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA/PyBudWxsO1xuICAgICAgfSxcblxuICAgICAgLy8gLS0tIFV0aWxpdGllcyAtLS1cblxuICAgICAgbm90aWNlKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IHZvaWQge1xuICAgICAgICBuZXcgTm90aWNlKG1lc3NhZ2UsIHRpbWVvdXQpO1xuICAgICAgfSxcblxuICAgICAgbW9tZW50OiB3aW5kb3cubW9tZW50LFxuXG4gICAgICBjcmVhdGVFbDxLIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgICAgICAgdGFnOiBLLFxuICAgICAgICBhdHRycz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4gICAgICApOiBIVE1MRWxlbWVudFRhZ05hbWVNYXBbS10ge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcbiAgICAgICAgaWYgKGF0dHJzKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBbaywgdl0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cnMpKSB7XG4gICAgICAgICAgICBpZiAoayA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcImh0bWxcIikge1xuICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcImNsc1wiIHx8IGsgPT09IFwiY2xhc3NcIikge1xuICAgICAgICAgICAgICBlbC5jbGFzc05hbWUgPSB2O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChrID09PSBcInN0eWxlXCIpIHtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuY3NzVGV4dCA9IHY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoaywgdik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8vIC0tLSBSZW5kZXJpbmcgLS0tXG5cbiAgLyoqXG4gICAqIE1haW4gcmVuZGVyIG1ldGhvZC4gTG9hZHMgYSB0ZW1wbGF0ZSBhbmQgcmVuZGVycyBpdCBpbnRvIGEgY29udGFpbmVyXG4gICAqIGJvdW5kIHRvIHRoZSBnaXZlbiBub3RlJ3MgZnJvbnRtYXR0ZXIuXG4gICAqL1xuICBhc3luYyByZW5kZXIoXG4gICAgdGVtcGxhdGVQYXRoOiBzdHJpbmcsXG4gICAgZmlsZTogVEZpbGUsXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgLy8gMS4gTG9hZCB0ZW1wbGF0ZSBzb3VyY2VcbiAgICBjb25zdCBzb3VyY2UgPSBhd2FpdCB0aGlzLmxvYWRUZW1wbGF0ZVNvdXJjZSh0ZW1wbGF0ZVBhdGgpO1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGBUZW1wbGF0ZSBub3QgZm91bmQ6ICR7dGVtcGxhdGVQYXRofWAsXG4gICAgICAgIFwiQ3JlYXRlIHRoZSB0ZW1wbGF0ZSBmaWxlIGluIHlvdXIgdmF1bHQsIG9yIHVwZGF0ZSB0aGUgcGF0aCBpbiBPbGVuIFNldHRpbmdzIFx1MjE5MiBBY3Rpdml0aWVzIFx1MjE5MiBDb25maWd1cmUuXCIsXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDIuIEdldCBjdXJyZW50IGZyb250bWF0dGVyXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpbGVDYWNoZShmaWxlKTtcbiAgICBjb25zdCBmcm9udG1hdHRlciA9IChjYWNoZT8uZnJvbnRtYXR0ZXIgYXMgUmVjb3JkPHN0cmluZywgdW5rbm93bj4pID8/IHt9O1xuXG4gICAgLy8gMy4gQnVpbGQgY29udGV4dFxuICAgIGNvbnN0IGN0eCA9IHRoaXMuYnVpbGRDb250ZXh0KGZpbGUsIGNvbnRhaW5lciwgZnJvbnRtYXR0ZXIpO1xuXG4gICAgLy8gNC4gRXhlY3V0ZSB0ZW1wbGF0ZVxuICAgIHRyeSB7XG4gICAgICAvLyBXZSB3cmFwIHRoZSB0ZW1wbGF0ZSBzb3VyY2Ugc28gdGhhdCBgY3R4YCBpcyBhdmFpbGFibGUgYXMgYSBsb2NhbCB2YXJpYWJsZS5cbiAgICAgIC8vIFRoZSB0ZW1wbGF0ZSBjb2RlIGNhbiBkZXN0cnVjdHVyZSBmcm9tIGN0eCBvciB1c2UgaXQgZGlyZWN0bHkuXG4gICAgICBjb25zdCBmbiA9IG5ldyBGdW5jdGlvbihcImN0eFwiLCBzb3VyY2UpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZm4oY3R4KTtcblxuICAgICAgLy8gSWYgdGhlIHRlbXBsYXRlIHJldHVybnMgYSBwcm9taXNlIChhc3luYyB0ZW1wbGF0ZSksIGF3YWl0IGl0XG4gICAgICBpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGF3YWl0IHJlc3VsdDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBPbGVuIFRlbXBsYXRlRW5naW5lOiBFcnJvciBleGVjdXRpbmcgdGVtcGxhdGUgJHt0ZW1wbGF0ZVBhdGh9OmAsIGVycik7XG4gICAgICB0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICBjb250YWluZXIsXG4gICAgICAgIGBUZW1wbGF0ZSBlcnJvcjogJHsoZXJyIGFzIEVycm9yKS5tZXNzYWdlfWAsXG4gICAgICAgIGBJbiB0ZW1wbGF0ZTogJHt0ZW1wbGF0ZVBhdGh9YCxcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBlcnJvciBtZXNzYWdlIGluc2lkZSB0aGUgY29udGFpbmVyLlxuICAgKi9cbiAgcHJpdmF0ZSByZW5kZXJFcnJvcihjb250YWluZXI6IEhUTUxFbGVtZW50LCB0aXRsZTogc3RyaW5nLCBoaW50OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb250YWluZXIuZW1wdHkoKTtcbiAgICBjb25zdCBlcnJvckRpdiA9IGNvbnRhaW5lci5jcmVhdGVEaXYoeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvclwiIH0pO1xuICAgIGVycm9yRGl2LmNyZWF0ZUVsKFwiZGl2XCIsIHsgY2xzOiBcIm9sZW4tdGVtcGxhdGUtZXJyb3ItdGl0bGVcIiwgdGV4dDogdGl0bGUgfSk7XG4gICAgZXJyb3JEaXYuY3JlYXRlRWwoXCJkaXZcIiwgeyBjbHM6IFwib2xlbi10ZW1wbGF0ZS1lcnJvci1oaW50XCIsIHRleHQ6IGhpbnQgfSk7XG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBLElB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
