// ============================================================
// Olen — Boss Engine
// Reads boss state and provides boss-related calculations
// ============================================================

import type { OlenSettings, BossDefinition } from "../types";
import { BOSSES, RANK_TIER_COLORS } from "../constants";

export interface BossStatus {
  boss: BossDefinition;
  currentHP: number;
  maxHP: number;
  percent: number;
  tier: number;
  rank: string;
  tierColor: string;
  inTartarus: boolean;
  isDangerZone: boolean;
}

export class BossEngine {
  private settings: OlenSettings;

  constructor(settings: OlenSettings) {
    this.settings = settings;
  }

  getBossForTier(tier: number): BossDefinition | null {
    return BOSSES.find((b) => b.tier === tier) ?? null;
  }

  getCurrentBoss(): BossDefinition | null {
    return this.getBossForTier(this.settings.currentTier);
  }

  getBossStatus(): BossStatus {
    const tier = this.settings.currentTier;
    const boss = this.getCurrentBoss() ?? BOSSES[0];
    const currentHP = this.settings.bossCurrentHP;
    const maxHP = this.settings.bossMaxHP;
    const percent = maxHP > 0 ? Math.round((currentHP / maxHP) * 100) : 0;
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
