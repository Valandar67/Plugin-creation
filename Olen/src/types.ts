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

  // Post-completion navigation
  // "dashboard" = return to Olen dashboard (default)
  // "stay"      = stay on the note (show completion summary)
  // any string  = vault file path to open (e.g. "Home.md")
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

// --- Boss ---

export interface BossDefinition {
  tier: number;
  name: string;
  rank: string;
  description: string;
  lore: string;
  hpFormula: string;
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
  startTime: string; // ISO
  skills: string[];
  hasWorkspace: boolean;
  skillFolder?: string;
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

// --- Theme ---

export interface ElysianTheme {
  bgPrimary: string;
  cardBg: string;
  textPrimary: string;
  textMuted: string;
  accentGold: string;
  danger: string;
  success: string;
  bodyColor: string;
  mindColor: string;
  spiritColor: string;
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
  heroBackground: string;

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

  // Boss (synced from TrackHabitRank)
  currentTier: number;
  bossMaxHP: number;
  bossCurrentHP: number;
  inTartarus: boolean;
  tartarusPenanceTasks: unknown[];
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
  themeOverrides: Partial<ElysianTheme>;

  // Dev Dashboard
  devConfig: DevConfig;

  // Workspace
  workspaceCompletionStates: WorkspaceCompletionState[];
  activeWorkspace: ActiveWorkspace | null;

  // Calendar
  calendar: CalendarSettings;

  // Quote
  quoteFolderPath: string;
  lastQuoteIndex: number;
  recentQuoteIds: number[];
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
  tartarusPenanceTasks: unknown[];
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
