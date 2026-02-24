// ============================================================
// Olen — Constants & Defaults
// ============================================================

import type {
  BossDefinition,
  ActivityConfig,
  OlenSettings,
  DevConfig,
  ElysianTheme,
  WorkspaceCompletionState,
  CalendarSettings,
} from "./types";

// --- View Type ---

export const VIEW_TYPE_OLEN = "olen-dashboard-view";
export const VIEW_TYPE_WORKSPACE = "olen-workspace-view";

// --- Boss Definitions (13 tiers) ---

export const BOSSES: BossDefinition[] = [
  { tier: 1, name: "Shadow of Apathy", rank: "Doomscroller", description: "The weight of inertia that keeps you scrolling instead of starting", lore: "Born from forgotten promises and unopened gym bags, the Shadow feeds on potential unrealized.", hpFormula: "weeklyTarget × 1.1" },
  { tier: 2, name: "Siren's Call", rank: "Armchair General", description: "Distraction's sweet song that pulls focus from committed work", lore: "She sings of easier paths, of just one more video, of starting tomorrow instead.", hpFormula: "weeklyTarget × 1.2" },
  { tier: 3, name: "Hydra of Habits", rank: "Apprentice", description: "The complexity of managing multiple routines simultaneously", lore: "Cut one head and two grow back. Each habit demands its own attention.", hpFormula: "weeklyTarget × 1.3" },
  { tier: 4, name: "Minotaur's Maze", rank: "Citizen", description: "The confusion and routine that traps even dedicated practitioners", lore: "Lost in corridors of habit, the path forward is never clear.", hpFormula: "weeklyTarget × 1.7" },
  { tier: 5, name: "Medusa's Gaze", rank: "Scholar", description: "The paralysis that comes from overthinking or fear of failure", lore: "One glance and you are frozen, unable to act, unable to move.", hpFormula: "weeklyTarget × 1.9" },
  { tier: 6, name: "Nemean Lion", rank: "Samurai", description: "Seemingly invulnerable obstacles that require persistent effort", lore: "Its hide cannot be pierced by ordinary means. Only discipline cuts through.", hpFormula: "weeklyTarget × 2.1" },
  { tier: 7, name: "Chimera", rank: "Templar", description: "Multi-headed beast requiring balanced attention across all domains", lore: "Lion, goat, and serpent — each head demands mastery of a different art.", hpFormula: "weeklyTarget × 2.3" },
  { tier: 8, name: "Cerberus", rank: "Stoic", description: "Guardian of transformation testing if habits have become identity", lore: "Three heads, three tests. Past the gate lies transformation.", hpFormula: "weeklyTarget × 2.5" },
  { tier: 9, name: "Scylla & Charybdis", rank: "Olympian", description: "The impossible choice between competing priorities", lore: "Between the rock and the whirlpool, both must somehow be honored.", hpFormula: "weeklyTarget × 2.7" },
  { tier: 10, name: "The Furies", rank: "Sage", description: "Internal voices of guilt and shame attacking even the successful", lore: "They whisper your failures, remind you of every skip, every weakness.", hpFormula: "weeklyTarget × 2.9" },
  { tier: 11, name: "Typhon", rank: "Titan", description: "The force of chaos threatening to undo all progress", lore: "Father of all monsters, he seeks to return you to the beginning.", hpFormula: "weeklyTarget × 3.1" },
  { tier: 12, name: "Kronos", rank: "Archon", description: "Time itself as an enemy, testing sustained intensity", lore: "The Titan who devours his children. Can you maintain as weeks become months?", hpFormula: "weeklyTarget × 3.3" },
  { tier: 13, name: "Chaos Primordial", rank: "Master of All", description: "The ultimate test of unshakeable discipline", lore: "Before creation, before order, only Chaos. To master it is to master yourself.", hpFormula: "weeklyTarget × 3.6" },
];

export const RANK_TIER_COLORS: Record<number, string> = {
  1: "#6B7280", 2: "#EF4444", 3: "#F59E0B", 4: "#10B981",
  5: "#3B82F6", 6: "#8B5CF6", 7: "#EC4899", 8: "#F97316",
  9: "#06B6D4", 10: "#A855F7", 11: "#DC2626", 12: "#7C3AED",
  13: "#c9a227",
};

// --- Chapter Progression ---

export const CHAPTER_NAMES: Record<number, string> = {
  1: "Initiate",
  2: "Explorer",
  3: "Journeyman",
  4: "Adept",
  5: "Philosopher",
  6: "Master",
  7: "Sage",
  8: "Oracle",
  9: "Titan",
  10: "Olympian",
};

// --- Dynamic Title Tables ---

export const SINGLE_DOMINANT_TITLES: Record<string, Record<string, string>> = {
  body:   { light: "Athlete",   mid: "Warrior",  heavy: "Titan" },
  mind:   { light: "Student",   mid: "Scholar",  heavy: "Polymath" },
  spirit: { light: "Seeker",    mid: "Sage",     heavy: "Oracle" },
};

export const TWO_CATEGORY_TITLES: Record<string, Record<string, string>> = {
  "body+mind":    { light: "Disciplined Thinker", mid: "Philosopher-King", heavy: "Renaissance Titan" },
  "body+spirit":  { light: "Ascetic",             mid: "Templar",          heavy: "Olympian Monk" },
  "mind+spirit":  { light: "Contemplative",       mid: "Mystic Scholar",   heavy: "Enlightened One" },
};

export const BALANCED_TITLES: Record<string, string> = {
  light: "Initiate of Balance",
  mid: "Renaissance Soul",
  heavy: "Eudaimon",
};

// --- Default Activities ---

export const DEFAULT_ACTIVITIES: ActivityConfig[] = [
  {
    id: "workout", name: "Workout", emoji: "\u{1F4AA}", category: "body",
    enabled: true, folder: "Personal Life/01 Workout", property: "Workout",
    damagePerCompletion: 1, weeklyTarget: 7, trackingMode: "daily",
    hasWorkspace: true, workspaceTemplate: "workout",
    priority: 8, neglectThreshold: 2,
    preferredTime: "morning", estimatedDuration: 60,
  },
  {
    id: "cardio", name: "Cardio", emoji: "\u{1F3C3}", category: "body",
    enabled: true, folder: "Personal Life/02 Cardio", property: "Cardio",
    damagePerCompletion: 1, weeklyTarget: 4, trackingMode: "daily",
    hasWorkspace: true, priority: 7, neglectThreshold: 3,
    preferredTime: "morning", estimatedDuration: 30,
    alternatesWith: "workout",
  },
  {
    id: "reading", name: "Reading", emoji: "\u{1F4D6}", category: "mind",
    enabled: true, folder: "Personal Life/03 Reading", property: "Reading",
    damagePerCompletion: 1, weeklyTarget: 6, trackingMode: "daily",
    hasWorkspace: true, priority: 6, neglectThreshold: 3,
    preferredTime: "evening", estimatedDuration: 45,
  },
  {
    id: "drumming", name: "Drumming", emoji: "\u{1F941}", category: "spirit",
    enabled: true, folder: "Personal Life/04 Drumming", property: "Drumming",
    damagePerCompletion: 1, weeklyTarget: 6, trackingMode: "daily",
    hasWorkspace: true, priority: 6, neglectThreshold: 3,
    preferredTime: "afternoon", estimatedDuration: 45,
  },
  {
    id: "health-study", name: "Health Study", emoji: "\u{1F9EC}", category: "mind",
    enabled: true, folder: "Personal Life/05 Health Study", property: "Health Study",
    damagePerCompletion: 1, weeklyTarget: 3, trackingMode: "daily",
    hasWorkspace: true, priority: 4, neglectThreshold: 4,
    preferredTime: "afternoon", estimatedDuration: 30,
  },
  {
    id: "social", name: "Social", emoji: "\u{1F91D}", category: "spirit",
    enabled: true, folder: "Personal Life/06 Social", property: "Social",
    damagePerCompletion: 1, weeklyTarget: 2, trackingMode: "daily",
    hasWorkspace: true, priority: 5, neglectThreshold: 5,
    preferredTime: "evening", estimatedDuration: 60,
  },
  {
    id: "drawing", name: "Drawing", emoji: "\u{1F3A8}", category: "spirit",
    enabled: true, folder: "Personal Life/07 Drawing", property: "Drawing",
    damagePerCompletion: 1, weeklyTarget: 4, trackingMode: "daily",
    hasWorkspace: true, priority: 7, neglectThreshold: 3,
    preferredTime: "afternoon", estimatedDuration: 60,
  },
];

// --- Directive Lore Templates ---

export const NEGLECT_LORE: Record<string, string> = {
  workout: "Your muscles forget what they once knew. The body craves discipline — answer it.",
  cardio: "The heart grows sluggish without the pounding rhythm of effort.",
  reading: "The mind starves on distraction. Feed it with pages, not pixels.",
  drumming: "Silence is not rest — it is the death of rhythm. Pick up the sticks.",
  "health-study": "Knowledge of the body is power over it. Neglect invites ignorance.",
  social: "Even warriors need fellowship. Isolation breeds stagnation.",
  drawing: "The beast within you grows weak without the discipline of line and form.",
};

// --- Fallback Quotes ---

export const FALLBACK_QUOTES: Array<{ text: string; attribution: string }> = [
  { text: "You have power over your mind — not outside events. Realize this, and you will find strength.", attribution: "Marcus Aurelius" },
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
  { text: "The soul becomes dyed with the colour of its thoughts.", attribution: "Marcus Aurelius" },
];

// --- Roman Numerals Helper ---

export function toRoman(num: number): string {
  const vals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
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

// --- Default Workspace Completion States ---

export const DEFAULT_WORKSPACE_STATES: WorkspaceCompletionState[] = [
  { id: "discipline", name: "Discipline", icon: "\u25C6", color: "#928d85", enabled: true, quoteFolderPath: "", xpMultiplier: 1.0 },
  { id: "flow", name: "Flow", icon: "\u2248", color: "#c9a84c", enabled: true, quoteFolderPath: "", xpMultiplier: 1.5 },
  { id: "skipped", name: "Skipped", icon: "\u25CB", color: "#8b2d35", enabled: true, quoteFolderPath: "", xpMultiplier: 0 },
];

// --- Default Dev Config ---

export const DEFAULT_DEV_CONFIG: DevConfig = {
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
    not_now: "NOT NOW",
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
    "hero", "eudaimonia", "daymap", "directive", "boss",
    "weekly", "activities", "temple", "quote",
  ],
  hiddenSections: [],
  activityGridColumns: 2,
};

// --- Default Calendar Settings ---

export const DEFAULT_CALENDAR_SETTINGS: CalendarSettings = {
  enableDailyNotes: true,
  dailyNotesFolder: "",
  dailyNotesFormat: "YYYY-MM-DD",
  enableTasksPlugin: false,
  enableQuickTasks: true,
  quickTasks: [],
};

// --- Default Olen Settings ---

export const DEFAULT_OLEN_SETTINGS: OlenSettings = {
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
    spirit: "#8b7ec8",
  },
  titleOverride: "",

  // Eudaimonia
  categoryXP: {
    body: 0,
    mind: 0,
    spirit: 0,
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
    { id: "haircut", name: "Haircut", lastCompleted: null, intervalDays: 21, emoji: "\u{1F488}" },
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
  recentQuoteIds: [],
};
