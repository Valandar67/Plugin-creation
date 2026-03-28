// ============================================================
// Olen — Boss Status Card Component
// Compact boss HP bar with tier and rank (no emoji)
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

  // Row: info only (no emoji)
  const row = card.createDiv({ cls: "olen-boss-row" });

  const info = row.createDiv({ cls: "olen-boss-info" });
  info.createEl("div", { cls: "olen-boss-name", text: status.name });
  let tierText = `Tier ${status.tier} · ${status.rank}`;
  if (status.titansWrathApplied) {
    tierText += ` · +Titan's Wrath`;
  }
  info.createEl("div", {
    cls: "olen-boss-tier",
    text: tierText,
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
