// ============================================================
// Olen — TartarusPlugin Bridge
// Reads/writes state from the TartarusPlugin companion plugin
// ============================================================

import { App } from "obsidian";

export interface TrackerBridge {
  settings: any;
  save: () => Promise<void>;
  refresh: () => void;
}

export interface TartarusBossState {
  currentTier: number;
  bossMaxHP: number;
  bossCurrentHP: number;
  bossName: string;
  bossRank: string;
  inTartarus: boolean;
  titansWrathApplied: boolean;
}

/** Boss names by tier — mirrors Tartarus's BOSSES array */
const TARTARUS_BOSSES: Record<number, { name: string; rank: string }> = {
  1:  { name: "The Sirens",    rank: "Doomscroller" },
  2:  { name: "Harpy",         rank: "Apprentice" },
  3:  { name: "Minotaur",      rank: "Citizen" },
  4:  { name: "Cyclops",       rank: "Scholar" },
  5:  { name: "Medusa",        rank: "Samurai" },
  6:  { name: "Scylla",        rank: "Templar" },
  7:  { name: "Charybdis",     rank: "Stoic" },
  8:  { name: "Nemean Lion",   rank: "Olympian" },
  9:  { name: "Lernaean Hydra",rank: "Sage" },
  10: { name: "Cerberus",      rank: "Titan" },
  11: { name: "The Furies",    rank: "Archon" },
  12: { name: "Typhon",        rank: "Grand Master" },
  13: { name: "Chaos",         rank: "Conqueror" },
  14: { name: "Tartarus",      rank: "Master of All" },
};

/**
 * Attempt to access the TartarusPlugin plugin instance.
 * Returns a bridge object for reading/writing tracker state,
 * or null if the plugin is not installed/enabled.
 */
export function getTracker(app: App): TrackerBridge | null {
  const plugin = (app as any).plugins?.plugins?.["tartarus"]
    ?? (app as any).plugins?.plugins?.["mythological-habit-tracker"];

  if (!plugin) return null;

  return {
    settings: plugin.settings,
    save: () => plugin.saveSettings?.() ?? plugin.saveData?.(plugin.settings),
    refresh: () => plugin.refreshRankView?.(),
  };
}

/**
 * Check if TartarusPlugin is installed and available.
 */
export function isTrackerAvailable(app: App): boolean {
  return getTracker(app) !== null;
}

/**
 * Read boss state from the tracker, including boss name and rank.
 */
export function getTrackerBossState(app: App): TartarusBossState | null {
  const tracker = getTracker(app);
  if (!tracker) return null;

  const s = tracker.settings;
  const tier = s.currentTier ?? 1;

  // Resolve boss name/rank: check customBosses overrides first, then built-in lookup
  const customOverride = Array.isArray(s.customBosses)
    ? s.customBosses.find((c: any) => c.tier === tier)
    : null;

  const baseBoss = TARTARUS_BOSSES[tier];
  const bossName = customOverride?.name || s.currentBossName || baseBoss?.name || `Tier ${tier} Boss`;
  const bossRank = customOverride?.rank || s.currentBossRank || baseBoss?.rank || `Tier ${tier}`;

  return {
    currentTier: tier,
    bossMaxHP: s.bossMaxHP ?? 35,
    bossCurrentHP: s.bossCurrentHP ?? 35,
    bossName,
    bossRank,
    inTartarus: s.inTartarus ?? false,
    titansWrathApplied: s.titansWrathApplied ?? false,
  };
}

/**
 * Sync boss damage from Olen to TartarusPlugin.
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
