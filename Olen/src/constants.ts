// ============================================================
// Olen — Constants & Defaults
// ============================================================

import type {
  ActivityConfig,
  OlenSettings,
  DevConfig,
  ElysianTheme,
  WorkspaceCompletionState,
  CalendarSettings,
  PersonalStats,
  PomodoroSettings,
  SundayCheckinSettings,
} from "./types";

// --- Life Expectancy Defaults ---

export const LIFE_EXPECTANCY_MALE = 71.2;
export const LIFE_EXPECTANCY_FEMALE = 76.4;

export const DEFAULT_POMODORO_SETTINGS: PomodoroSettings = {
  focusMinutes: 25,
  breakMinutes: 5,
  longBreakMinutes: 15,
  sessionsBeforeLong: 4,
  autoStartFocus: false,
  autoStartBreak: false,
  soundEnabled: true,
  vibrationEnabled: true,
};

// --- View Type ---

export const VIEW_TYPE_OLEN = "olen-dashboard-view";
export const VIEW_TYPE_WORKSPACE = "olen-workspace-view";
export const VIEW_TYPE_ACTIVITY_DASHBOARD = "olen-activity-dashboard-view";
export const VIEW_TYPE_ONBOARDING = "olen-onboarding-view";
export const VIEW_TYPE_DREAMBOARD = "olen-dreamboard-view";

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
  body:   { light: "Athlete",   mid: "Champion", heavy: "Titan" },
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

export const DEFAULT_ACTIVITIES: ActivityConfig[] = [];

// --- Directive Lore Templates ---

/** Category-level neglect lore — used when no activity-specific lore exists */
export const NEGLECT_LORE: Record<string, string> = {
  body: "The body craves discipline — answer it. Stagnation is decay.",
  mind: "The mind starves on distraction. Feed it with purpose, not pixels.",
  spirit: "The soul grows dim without expression. Create, connect, be present.",
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
    analytics_title: "PROGRESS",
    activity_grid_title: "ACTIVITIES",
    temple_title: "ROUTINES",
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
    "hero", "heatmap", "statsrow", "eudaimonia", "directive", "daymap", "boss",
    "weekly", "analytics", "activities", "monthlyheatmap", "temple", "quote",
  ],
  hiddenSections: [],
  activityGridColumns: 2,
};

// --- Default Personal Stats ---

export const DEFAULT_PERSONAL_STATS: PersonalStats = {
  gender: "" as any,
  height: 0,
  birthdate: "",
  currentWeight: 0,
  weightLog: [],
  weightLogFrequency: "every-week",
  weightLogCustomDays: 7,
  lastWeightLogDate: null,
  sleepTime: 0,
  lifeExpectancy: 0,
};

// --- Default Sunday Check-in Settings ---

export const DEFAULT_SUNDAY_CHECKIN: SundayCheckinSettings = {
  enabled: true,
  lastCheckinDate: null,
  consecutiveIgnores: 0,
  journalFolder: "Journal",
};

// --- Muscle Group Definitions ---

export const MUSCLE_GROUPS = [
  "chest", "back", "shoulders", "biceps", "triceps", "forearms",
  "abs", "obliques", "quads", "hamstrings", "glutes", "calves",
  "traps", "lats", "neck",
] as const;

export type MuscleGroupId = typeof MUSCLE_GROUPS[number];

export const MUSCLE_GROUP_LABELS: Record<MuscleGroupId, string> = {
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
  neck: "Neck",
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
  userName: "User",
  myWhy: "",
  aphorism: "",
  goals: [],
  completedGoals: [],
  scrollingBackground: "",
  backgroundDarkness: 75,
  homepage: "",

  // Activities
  activities: DEFAULT_ACTIVITIES,

  // Categories
  categoryColors: {
    body: "#c9a84c",
    mind: "#6b8cce",
    spirit: "#928d85",
  },
  titleOverride: "",

  // Eudaimonia
  categoryXP: {
    body: 0,
    mind: 0,
    spirit: 0,
  },

  // Boss (synced from Tartarus)
  currentTier: 1,
  bossMaxHP: 35,
  bossCurrentHP: 35,
  bossName: "",
  bossRank: "",
  inTartarus: false,
  titansWrathApplied: false,
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
  themeMode: "dark" as const,
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
  recentQuoteIds: [],
  quoteMaxLength: 0,

  // Dream Board
  dreamBoardImages: [],

  // Day Map
  skippedToday: { date: "", activityIds: [] },
  dayMapOrder: null,

  // Onboarding
  onboardingComplete: false,

  // Tartarus
  enableTartarus: true,

  // Sunday Check-in
  sundayCheckin: DEFAULT_SUNDAY_CHECKIN,

  // Finding Your Why Guide
  findingWhyProgress: {
    lastCompletedScreen: -1,
    tookConfrontationPath: false,
    completedCommands: {},
    selectedSubAreas: [],
    customSubAreas: [],
    flowComplete: false,
  },
};
