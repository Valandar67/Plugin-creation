// ============================================================
// Olen — Boss Status Card Component
// Compact boss HP bar with tier and rank
// ============================================================

import type { OlenSettings } from "../types";
import { BossEngine } from "../engines/BossEngine";

export function renderBossStatusCard(
  container: HTMLElement,
  settings: OlenSettings,
  staggerIndex: number
): void {
  const bossEngine = new BossEngine(settings);
  const status = bossEngine.getBossStatus();

  const label = settings.devConfig.labels.boss_status_title ?? "BOSS STATUS";

  // Section title
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });

  // Card
  const cardCls = status.inTartarus ? "olen-card-compact olen-card-tartarus" : "olen-card-compact";
  const card = container.createDiv({ cls: cardCls });
  card.style.setProperty("--i", String(staggerIndex));

  // Row: emoji + info
  const row = card.createDiv({ cls: "olen-boss-row" });

  row.createEl("div", { cls: "olen-boss-emoji", text: getBossEmoji(status.tier) });

  const info = row.createDiv({ cls: "olen-boss-info" });
  info.createEl("div", { cls: "olen-boss-name", text: status.boss.name });
  info.createEl("div", {
    cls: "olen-boss-tier",
    text: `Tier ${status.tier} · ${status.rank}`,
  });

  // HP bar
  const hpBar = info.createDiv({ cls: "olen-hp-bar" });
  const hpFill = hpBar.createDiv({ cls: "olen-hp-bar-fill" });
  hpFill.style.width = `${status.percent}%`;
  hpFill.style.background = bossEngine.getHPColor(status.percent);

  // HP text
  info.createEl("div", {
    cls: "olen-boss-hp-text",
    text: `${status.currentHP}/${status.maxHP} HP (${status.percent}%)`,
  });
}

function getBossEmoji(tier: number): string {
  const emojis: Record<number, string> = {
    1: "\u{1F47B}", 2: "\u{1F9DC}", 3: "\u{1F409}", 4: "\u{1F402}",
    5: "\u{1F40D}", 6: "\u{1F981}", 7: "\u{1F525}", 8: "\u{1F43A}",
    9: "\u{1F30A}", 10: "\u{1F47F}", 11: "\u{1F329}", 12: "\u231B",
    13: "\u{1F300}",
  };
  return emojis[tier] ?? "\u2694\uFE0F";
}
