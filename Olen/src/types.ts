// ============================================================
// Olen — Type Definitions
// ============================================================

export type Category = "body" | "mind" | "spirit";
export type PreferredTime = "morning" | "afternoon" | "evening" | "anytime";
export type SystemState = "active" | "paused";
export type DayMapStatus = "pending" | "done" | "skipped" | "active";
export type PriorityReason = "death" | "boss" | "neglect" | "weekly" | "chain" | "time" | "balanced";
export type WorkspaceType = "discipline" | "flow" | "skipped";
export type CalendarTaskSource = "daily-note" | "tasks-plugin" | "quick-task";

// --- Activity Configuration ---

export interface TimeOverride {
  startHour: number;
  endHour: number;
}

export interface PomodoroSettings {
  focusMinutes: number;       // default 25
  breakMinutes: number;       // default 5
  longBreakMinutes: number;   // default 15
  sessionsBeforeLong: number; // default 4
  autoStartFocus: boolean;    // auto-start work after break
  autoStartBreak: boolean;    // auto-start break after work
  soundEnabled: boolean;      // play alert sound on timer end
  soundFile?: string;         // vault path to custom sound file (empty = default beep)
  vibrationEnabled: boolean;  // vibrate on timer end
}

export interface ActivityConfig {
  id: string;
  name: string;
  emoji: string;
  category: Category;
  enabled: boolean;

  // Tracking
  folder: string;
  property: string;
  damagePerCompletion: number;
  weeklyTarget: number;
  trackingMode: "daily" | "weekly";
  hasWorkspace: boolean;
  workspaceTemplate?: string;
  skillFolder?: string;

  // Priority
  priority: number; // 1-10
  neglectThreshold: number; // days before warning

  // Scheduling
  preferredTime: PreferredTime;
  timeOverride?: TimeOverride;
  estimatedDuration: number; // minutes
  pomodoro?: boolean;
  pomodoroSettings?: PomodoroSettings;

  // === Screen Sources (§I dual system) ===
  dashboardSource?: "native" | "custom";
  dashboardCustomFile?: string;   // Vault path (without .md)
  workspaceSource?: "native" | "custom";
  workspaceCustomFile?: string;   // Vault path (without .md)

  // Post-completion navigation
  completionReturnTo?: string;

  // Advanced Rules
  blocks?: string[];
  alternatesWith?: string;
  chainAfter?: string;
}

// --- Completion Data ---

export interface Completion {
  date: string; // YYYY-MM-DD
  completed: boolean;
}

export interface CompletionMap {
  [activityId: string]: Completion[];
}

// --- Day Map ---

export interface DayMapEntry {
  activityId: string;
  activityName: string;
  emoji: string;
  category: Category;
  startHour: number;
  endHour: number;
  estimatedDuration: number;
  status: DayMapStatus;
  priorityReason?: PriorityReason;
  // Calendar task fields (when entry is from calendar integration)
  isCalendarTask?: boolean;
  calendarSource?: CalendarTaskSource;
  calendarTaskId?: string;
  filePath?: string;
  lineNumber?: number;
}

// --- Directive ---

export interface DirectiveSuggestion {
  activityId: string;
  activityName: string;
  emoji: string;
  category: Category;
  reason: PriorityReason;
  daysSinceLastDone: number;
  loreText: string;
  priority: number;
}

// --- Temple ---

export interface TempleTask {
  id: string;
  name: string;
  lastCompleted: string | null;
  intervalDays: number;
  emoji: string;
}

// --- Eudaimonia ---

export interface CategoryLevel {
  category: Category;
  xp: number;
  level: number;
  progressToNext: number; // 0-100
}

// --- Workspace ---

export interface WorkspaceCompletionState {
  id: WorkspaceType;
  name: string;
  icon: string;
  color: string;
  enabled: boolean;
  quoteFolderPath: string;
  xpMultiplier: number;
}

export interface ActiveWorkspace {
  activityId: string;
  activityName: string;
  emoji: string;
  category: Category;
  startTime: string; // ISO — start of current work/break interval
  skills: string[];
  hasWorkspace: boolean;
  skillFolder?: string;

  // Pomodoro state (persisted for background operation)
  pomodoroActive?: boolean;
  pomodoroRound?: number;        // 1-4
  pomodoroOnBreak?: boolean;
  pomodoroCountdownTotal?: number; // seconds for current interval
  pomodoroSettings?: PomodoroSettings; // per-activity settings snapshot
}

export interface WorkspaceResult {
  activityId: string;
  activityName: string;
  category: Category;
  type: WorkspaceType;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  skills: string[];
  quote?: { text: string; attribution: string };
}

// --- Calendar / Quick Tasks ---

export interface QuickTask {
  id: string;
  title: string;
  date: string;       // YYYY-MM-DD
  time?: string;       // HH:MM (24h)
  duration?: number;   // minutes
  done: boolean;
  postponedFrom?: string; // original date if postponed
}

export interface CalendarTask {
  id: string;
  title: string;
  source: CalendarTaskSource;
  date: string;        // YYYY-MM-DD
  time?: string;       // HH:MM (24h)
  duration?: number;   // minutes
  done: boolean;
  filePath?: string;   // source file for daily-note/tasks-plugin tasks
  lineNumber?: number; // line in the source file
}

export interface CalendarSettings {
  enableDailyNotes: boolean;
  dailyNotesFolder: string;     // vault folder for daily notes
  dailyNotesFormat: string;     // filename format, default "YYYY-MM-DD"

  enableTasksPlugin: boolean;

  enableQuickTasks: boolean;
  quickTasks: QuickTask[];
}

// --- Personal Stats ---

export type Gender = "male" | "female";

export type WeightLogFrequency =
  | "twice-a-week"
  | "every-week"
  | "every-2-weeks"
  | "every-3-days"
  | "every-5-days"
  | "custom";

export interface WeightEntry {
  date: string;      // YYYY-MM-DD
  weight: number;    // kg
}

export interface PersonalStats {
  gender: Gender;
  height: number;            // cm
  birthdate: string;         // YYYY-MM-DD
  currentWeight: number;     // kg
  weightLog: WeightEntry[];
  weightLogFrequency: WeightLogFrequency;
  weightLogCustomDays: number;   // used when frequency is "custom"
  lastWeightLogDate: string | null; // YYYY-MM-DD
  sleepTime: number;         // hour in 24h format (e.g. 22.5 = 10:30pm), 0 = disabled
  lifeExpectancy: number;    // years — default from gender, user can override (0 = auto)
}

// --- Sunday Check-in ---

export interface SundayCheckinSettings {
  enabled: boolean;
  lastCheckinDate: string | null;  // ISO date of last completed check-in
  consecutiveIgnores: number;
  journalFolder: string;
}

// --- Goals ---

export type GoalType = "title" | "thing"; // "title" → "became", "thing" → "got"

export type GoalCategory =
  | "health-fitness"
  | "financial-freedom"
  | "career-business"
  | "relationships-family"
  | "personal-growth"
  | "spiritual-mindfulness"
  | "adventure-travel"
  | "creative-expression"
  | "contribution-giving"
  | "custom";

export const GOAL_CATEGORY_LABELS: Record<GoalCategory, string> = {
  "health-fitness": "Health & Fitness",
  "financial-freedom": "Financial Freedom",
  "career-business": "Career & Business",
  "relationships-family": "Relationships & Family",
  "personal-growth": "Personal Growth & Learning",
  "spiritual-mindfulness": "Spiritual & Mindfulness",
  "adventure-travel": "Adventure & Travel",
  "creative-expression": "Creative Expression & Hobbies",
  "contribution-giving": "Contribution & Giving Back",
  "custom": "Custom",
};

export interface SubGoal {
  id: string;
  text: string;
  type: GoalType;
  completed: boolean;
  completedAt?: string; // ISO date
}

export interface Goal {
  id: string;
  text: string;
  type: GoalType;
  category: GoalCategory;
  customCategory?: string; // when category is "custom"
  completed: boolean;
  completedAt?: string; // ISO date
  subgoals: SubGoal[];
}

// --- Dream Board ---

export interface DreamBoardImage {
  id: string;
  src: string;        // vault path or URL
  caption: string;
  category: string;
  addedAt: string;    // ISO date
}

// --- Theme ---

export interface ElysianTheme {
  bgPrimary: string;
  bgSecondary: string;
  cardBg: string;
  cardBgSolid: string;
  cardBorder: string;
  cardBorderHover: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textDim: string;
  accentGold: string;
  accentGoldBright: string;
  accentGoldDim: string;
  accentAmber: string;
  accentWarm: string;
  danger: string;
  dangerDim: string;
  success: string;
  successDim: string;
  bodyColor: string;
  mindColor: string;
  spiritColor: string;
  cardBlur: string;
  glassSheen: string;
  divider: string;
  glowGold: string;
  glowGoldStrong: string;
  glowDanger: string;
  shadowCard: string;
  shadowDeep: string;
}

export type OlenThemeMode = "dark" | "glass" | "steamy";

// --- Tartarus Penance Task ---

export interface TartarusPenanceTask {
  id: string;
  description: string;
  completed: boolean;
}

// --- Reward (synced from TrackHabitRank) ---

export interface RewardOption {
  id: string;
  description: string;
  image: string;
  emoji: string;
}

export interface RewardPool {
  tier: string;
  options: RewardOption[];
}

export interface ClaimedReward {
  id: string;
  description: string;
  emoji: string;
  claimedAt: string;
  source: string;
}

// --- Dev Config ---

export interface DevConfig {
  // Naming
  labels: Record<string, string>;

  // Algorithmic constants
  xpPerCompletion: number;
  streakBonusMultiplier: number;
  bufferMinutes: number;
  morningStart: number;
  morningEnd: number;
  afternoonEnd: number;
  eveningEnd: number;

  // Visual overrides
  themeOverrides: Partial<ElysianTheme>;
  animationStaggerMs: number;
  heroHeight: number;

  // Structural
  sectionOrder: string[];
  hiddenSections: string[];
  activityGridColumns: number;
}

// --- Main Settings ---

export interface OlenSettings {
  // Profile
  userName: string;
  myWhy: string;
  aphorism: string;  // User-chosen aphorism shown on hero card subtitle
  goals: Goal[];     // Structured goals with categories, types, subgoals
  completedGoals: Goal[]; // Goals moved here after completion
  scrollingBackground: string; // Background image that scrolls with the dashboard
  backgroundDarkness: number;  // 0-100, how dark the background overlay is (default 75)
  homepage: string; // vault file path to open when "Open homepage" is selected (e.g. "Home.md")

  // Activities
  activities: ActivityConfig[];

  // Categories
  categoryColors: {
    body: string;
    mind: string;
    spirit: string;
  };
  titleOverride: string;

  // Eudaimonia
  categoryXP: {
    body: number;
    mind: number;
    spirit: number;
  };

  // Boss (synced from Tartarus)
  currentTier: number;
  bossMaxHP: number;
  bossCurrentHP: number;
  bossName: string;
  bossRank: string;
  inTartarus: boolean;
  titansWrathApplied: boolean;
  tartarusPenanceTasks: TartarusPenanceTask[];
  tartarusStartDate: string | null;
  failedThresholdDays: number;
  consecutivePerfectWeeks: number;

  // Temple
  templeTasks: TempleTask[];

  // Rewards (synced)
  pendingRewards: unknown[];
  claimedRewards: ClaimedReward[];
  bankedRewards: unknown[];

  // System
  systemState: SystemState;
  pauseStartTime: string | null;
  totalPausedTime: number;
  migrated: boolean;
  simulatedDate: string | null;

  // Theme
  themeMode: OlenThemeMode;
  themeOverrides: Partial<ElysianTheme>;

  // Dev Dashboard
  devConfig: DevConfig;

  // Workspace
  workspaceCompletionStates: WorkspaceCompletionState[];
  activeWorkspace: ActiveWorkspace | null;

  // Calendar
  calendar: CalendarSettings;

  // Personal Stats
  personalStats: PersonalStats;

  // Quote
  quoteFolderPath: string;
  lastQuoteIndex: number;
  recentQuoteIds: number[];
  quoteMaxLength: number;

  // Dream Board
  dreamBoardImages: DreamBoardImage[];

  // Day Map
  skippedToday: { date: string; activityIds: string[] };
  dayMapOrder: { date: string; order: string[] } | null;

  // Onboarding
  onboardingComplete: boolean;

  // Tartarus integration toggle
  enableTartarus: boolean;

  // Sunday Check-in
  sundayCheckin: SundayCheckinSettings;

  // Finding Your Why Guide
  findingWhyProgress: FindingWhyProgress;
}

export interface FindingWhyProgress {
  lastCompletedScreen: number;
  tookConfrontationPath: boolean;
  completedCommands: Record<number, number[]>;
  selectedSubAreas: string[];
  customSubAreas: Array<{ id: string; label: string; category: Category }>;
  flowComplete: boolean;
}

// --- TrackHabitRank data.json shape (for migration) ---

export interface TrackHabitRankData {
  enabledActivities: Record<string, boolean>;
  customHabits: Array<{
    id: string;
    name: string;
    folder: string;
    property: string;
    weeklyTarget: number;
    damagePerCompletion: number;
    emoji?: string;
  }>;
  activityOverrides: Array<{
    id: string;
    weeklyTarget?: number;
    damagePerCompletion?: number;
  }>;
  currentTier: number;
  bossMaxHP: number;
  bossCurrentHP: number;
  consecutivePerfectWeeks: number;
  inTartarus: boolean;
  tartarusPenanceTasks: TartarusPenanceTask[];
  tartarusStartDate: string | null;
  failedThresholdDays: number;
  templeTasks: TempleTask[];
  systemState: string;
  pauseStartTime: string | null;
  totalPausedTime: number;
  simulatedDate: string | null;
  pendingRewards: unknown[];
  claimedRewards: unknown[];
  bankedRewards: unknown[];
  dashboardBgImage: string;
  customTheme: {
    primary: string;
    secondary: string;
    accent: string;
    muted: string;
  };
  userPrimaryColor: string;
}
