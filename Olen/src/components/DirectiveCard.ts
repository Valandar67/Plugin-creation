// ============================================================
// Olen — Directive Card Component
// Compact card on dashboard + expanded bottom-sheet overlay
// ============================================================

import type { OlenSettings, PriorityReason } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import { FALLBACK_QUOTES } from "../constants";

export function renderDirectiveCard(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number,
  onBeginSession?: (activityId: string) => void
): void {
  const suggestion = engine.getSuggestion();
  if (!suggestion) return;

  const label = settings.devConfig.labels.directive_title ?? "THE DIRECTIVE";
  const beginLabel = settings.devConfig.labels.begin_session ?? "BEGIN SESSION";
  const notNowLabel = settings.devConfig.labels.not_now ?? "NOT NOW";

  // Section title
  const titleEl = container.createDiv({ cls: "olen-section-title" });
  titleEl.createEl("div", { cls: "olen-heading", text: label });

  // Compact card
  const card = container.createDiv({ cls: "olen-card olen-directive" });
  card.style.setProperty("--i", String(staggerIndex));

  // Header with badge
  const header = card.createDiv({ cls: "olen-directive-header" });
  header.createEl("div", { cls: "olen-heading", text: label });

  const badge = header.createDiv({ cls: "olen-directive-badge" });
  badge.style.background = getBadgeColor(suggestion.reason);

  // Activity info
  card.createEl("div", {
    cls: "olen-directive-activity",
    text: `${suggestion.emoji} ${suggestion.activityName}`,
  });

  const neglectText = suggestion.daysSinceLastDone < 999
    ? `${suggestion.daysSinceLastDone} days neglected`
    : "Not yet started";

  card.createEl("div", { cls: "olen-directive-neglect", text: neglectText });

  // Action buttons
  const actions = card.createDiv({ cls: "olen-directive-actions" });

  const beginBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: beginLabel,
  });
  beginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    onBeginSession?.(suggestion.activityId);
  });

  const notNowBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: notNowLabel,
  });
  notNowBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // Dismiss this card with a fade
    card.style.opacity = "0";
    card.style.transform = "translateY(-10px)";
    card.style.transition = "all 0.3s ease";
    setTimeout(() => {
      card.style.display = "none";
    }, 300);
  });

  // Tap card to expand
  card.addEventListener("click", () => {
    showExpandedDirective(container, settings, suggestion, beginLabel, notNowLabel, onBeginSession);
  });
}

function showExpandedDirective(
  container: HTMLElement,
  settings: OlenSettings,
  suggestion: { activityId: string; activityName: string; emoji: string; reason: PriorityReason; daysSinceLastDone: number; loreText: string },
  beginLabel: string,
  notNowLabel: string,
  onBeginSession?: (activityId: string) => void
): void {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet" });

  // Handle bar
  sheet.createDiv({ cls: "olen-sheet-handle" });

  // Title
  sheet.createEl("div", {
    cls: "olen-heading-lg",
    text: settings.devConfig.labels.directive_title ?? "THE DIRECTIVE",
  });

  // Activity name
  sheet.createEl("div", {
    cls: "olen-directive-activity",
    attr: { style: "font-size: 22px; margin: 16px 0 8px;" },
    text: `${suggestion.emoji} ${suggestion.activityName}`,
  });

  // Neglect description
  const neglectDesc = suggestion.daysSinceLastDone < 999
    ? `${suggestion.daysSinceLastDone} days since you last practiced. The skill atrophies.`
    : "A new path awaits. Take the first step.";

  sheet.createEl("div", {
    cls: "olen-body-italic",
    attr: { style: "margin-bottom: 12px;" },
    text: neglectDesc,
  });

  // Lore text
  sheet.createEl("div", {
    cls: "olen-sheet-lore",
    text: `"${suggestion.loreText}"`,
  });

  // Random quote
  const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
  const quoteSection = sheet.createDiv({ cls: "olen-sheet-quote" });
  quoteSection.createEl("div", {
    text: `"${quote.text}"`,
    attr: { style: "margin-bottom: 6px;" },
  });
  quoteSection.createEl("div", {
    cls: "olen-quote-attribution",
    text: `— ${quote.attribution}`,
  });

  // Actions
  const actions = sheet.createDiv({ cls: "olen-directive-actions" });
  actions.style.marginTop = "20px";
  actions.style.justifyContent = "center";

  const beginBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: beginLabel,
  });
  beginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSheet();
    onBeginSession?.(suggestion.activityId);
  });

  const notNowBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-secondary",
    text: notNowLabel,
  });
  notNowBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSheet();
  });

  // Close on overlay tap
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSheet();
  });

  function closeSheet(): void {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }

  // Append and animate in
  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.classList.add("visible");
  });
}

function getBadgeColor(reason: PriorityReason): string {
  switch (reason) {
    case "death": return "#ef4444";
    case "boss": return "#eab308";
    case "neglect": return "#f97316";
    case "weekly": return "#3b82f6";
    case "chain": return "#8b5cf6";
    case "time": return "#06b6d4";
    case "balanced": return "#ffffff";
    default: return "#928d85";
  }
}
