// ============================================================
// Olen — Hero Card Component
// Full-width blurred bg with greeting, rank badge
// "My Why" shown subtly under the subtitle — tap to edit
// ============================================================

import type { OlenSettings } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import { BossEngine } from "../engines/BossEngine";

export function renderHeroCard(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number,
  callbacks?: { onMyWhy?: () => void }
): void {
  const hero = container.createDiv({ cls: "olen-hero" });
  hero.style.setProperty("--i", String(staggerIndex));

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

  // Tappable area to open dream board (My Why)
  if (callbacks?.onMyWhy) {
    const whyArea = hero.createDiv({ cls: "olen-hero-why olen-clickable" });
    whyArea.createEl("div", {
      cls: "olen-hero-why-text olen-hero-why-placeholder",
      text: "My Why",
    });
    whyArea.addEventListener("click", () => callbacks.onMyWhy?.());
  }
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
  // Show user's aphorism if set
  const aphorism = settings.aphorism?.trim();
  if (aphorism) {
    return aphorism;
  }

  const bossEngine = new BossEngine(settings);

  // Tartarus
  if (settings.inTartarus && settings.enableTartarus !== false) {
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
