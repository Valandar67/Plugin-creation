// ============================================================
// Olen — Boss Engine
// Reads boss state from settings (synced from Tartarus)
// ============================================================

import type { OlenSettings } from "../types";

export interface BossStatus {
  name: string;
  rank: string;
  currentHP: number;
  maxHP: number;
  percent: number;
  tier: number;
  inTartarus: boolean;
  titansWrathApplied: boolean;
  isDangerZone: boolean;
}

export class BossEngine {
  private settings: OlenSettings;

  constructor(settings: OlenSettings) {
    this.settings = settings;
  }

  getBossStatus(): BossStatus {
    const tier = this.settings.currentTier;
    const currentHP = this.settings.bossCurrentHP;
    const maxHP = this.settings.bossMaxHP;
    const percent = maxHP > 0 ? Math.round((currentHP / maxHP) * 100) : 0;

    return {
      name: this.settings.bossName || `Tier ${tier} Boss`,
      rank: this.settings.bossRank || `Tier ${tier}`,
      currentHP,
      maxHP,
      percent,
      tier,
      inTartarus: this.settings.inTartarus,
      titansWrathApplied: this.settings.titansWrathApplied,
      isDangerZone: this.isDangerZone(),
    };
  }

  isDangerZone(): boolean {
    const { bossCurrentHP, bossMaxHP } = this.settings;
    if (bossMaxHP <= 0) return false;
    return (bossCurrentHP / bossMaxHP) < 0.15;
  }

  isInTartarus(): boolean {
    return this.settings.inTartarus;
  }

  getHPColor(percent: number): string {
    if (percent > 60) return "#22c55e";
    if (percent > 30) return "#eab308";
    if (percent > 15) return "#f97316";
    return "#ef4444";
  }
}
