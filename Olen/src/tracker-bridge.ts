// ============================================================
// Olen — TrackHabitRank Bridge
// Reads/writes state from the TrackHabitRank companion plugin
// ============================================================

import { App } from "obsidian";

export interface TrackerBridge {
  settings: any;
  save: () => Promise<void>;
  refresh: () => void;
}

/**
 * Attempt to access the TrackHabitRank plugin instance.
 * Returns a bridge object for reading/writing tracker state,
 * or null if the plugin is not installed/enabled.
 */
export function getTracker(app: App): TrackerBridge | null {
  const plugin = (app as any).plugins?.plugins?.["track-habit-rank"]
    ?? (app as any).plugins?.plugins?.["mythological-habit-tracker"];

  if (!plugin) return null;

  return {
    settings: plugin.settings,
    save: () => plugin.saveSettings?.() ?? plugin.saveData?.(plugin.settings),
    refresh: () => plugin.refreshRankView?.(),
  };
}

/**
 * Check if TrackHabitRank is installed and available.
 */
export function isTrackerAvailable(app: App): boolean {
  return getTracker(app) !== null;
}

/**
 * Read boss state from the tracker.
 */
export function getTrackerBossState(app: App): {
  currentTier: number;
  bossMaxHP: number;
  bossCurrentHP: number;
  inTartarus: boolean;
} | null {
  const tracker = getTracker(app);
  if (!tracker) return null;

  return {
    currentTier: tracker.settings.currentTier ?? 1,
    bossMaxHP: tracker.settings.bossMaxHP ?? 35,
    bossCurrentHP: tracker.settings.bossCurrentHP ?? 35,
    inTartarus: tracker.settings.inTartarus ?? false,
  };
}

/**
 * Sync boss damage from Olen to TrackHabitRank.
 */
export async function syncBossDamage(
  app: App,
  damage: number
): Promise<boolean> {
  const tracker = getTracker(app);
  if (!tracker) return false;

  tracker.settings.bossCurrentHP = Math.max(
    0,
    (tracker.settings.bossCurrentHP ?? 35) - damage
  );

  await tracker.save();
  tracker.refresh();
  return true;
}
