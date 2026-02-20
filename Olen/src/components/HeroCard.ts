// ============================================================
// Olen — Hero Card Component
// Full-width blurred bg with greeting, rank badge, action buttons
// ============================================================

import type { OlenSettings } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import { BossEngine } from "../engines/BossEngine";
import { toRoman } from "../constants";

export function renderHeroCard(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number
): void {
  const hero = container.createDiv({ cls: "olen-hero" });
  hero.style.setProperty("--i", String(staggerIndex));

  // Background image
  if (settings.heroBackground) {
    const bg = hero.createDiv({ cls: "olen-hero-bg" });
    const vaultPath = settings.heroBackground;
    bg.style.backgroundImage = `url("${vaultPath}")`;
  }

  // Dark vignette overlay
  hero.createDiv({ cls: "olen-hero-overlay" });

  // Content
  const content = hero.createDiv({ cls: "olen-hero-content" });

  // Time-based greeting
  const greeting = getGreeting(settings);
  content.createEl("div", {
    cls: "olen-hero-greeting",
    text: `${greeting}, ${settings.userName}.`,
  });

  // Contextual subtitle
  const subtitle = getSubtitle(settings, engine);
  content.createEl("div", {
    cls: "olen-hero-subtitle",
    text: subtitle,
  });

  // Rank badge pill
  const title = engine.getDynamicTitle();
  const eudIndex = engine.getEudaimoniaIndex();
  const badge = content.createDiv({ cls: "olen-hero-rank-badge" });
  badge.createEl("span", {
    cls: "olen-hero-rank-text",
    text: `${title} · ${toRoman(eudIndex)}`,
  });

  // Action buttons
  const actions = hero.createDiv({ cls: "olen-hero-actions" });

  const progressBtn = actions.createEl("button", {
    cls: "olen-hero-btn",
    text: "Your progress",
  });
  progressBtn.addEventListener("click", () => {
    // Scroll to the eudaimonia section
    const eudSection = container.querySelector(".olen-card");
    if (eudSection) eudSection.scrollIntoView({ behavior: "smooth" });
  });

  const reflectBtn = actions.createEl("button", {
    cls: "olen-hero-btn",
    text: "Reflect",
  });
  reflectBtn.addEventListener("click", () => {
    // Scroll to the quote section
    const quoteSection = container.querySelector(".olen-quote");
    if (quoteSection) quoteSection.scrollIntoView({ behavior: "smooth" });
  });
}

function getGreeting(settings: OlenSettings): string {
  const labels = settings.devConfig.labels;
  const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
  const hour = now.getHours();

  if (hour >= 5 && hour < 12) return labels.greeting_morning ?? "Good morning";
  if (hour >= 12 && hour < 17) return labels.greeting_afternoon ?? "Good afternoon";
  if (hour >= 17 && hour < 21) return labels.greeting_evening ?? "Good evening";
  return labels.greeting_night ?? "Good night";
}

function getSubtitle(settings: OlenSettings, engine: OlenEngine): string {
  const bossEngine = new BossEngine(settings);

  // Tartarus
  if (settings.inTartarus) {
    return "The underworld awaits your penance.";
  }

  // Boss danger zone
  if (bossEngine.isDangerZone()) {
    return "One final blow remains.";
  }

  // Active streak
  const streak = engine.getOverallStreak();
  if (streak >= 3) {
    return `${streak} days strong. Keep the flame.`;
  }

  // Default
  return "Step by step, you shape your path.";
}
