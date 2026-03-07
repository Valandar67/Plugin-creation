// ============================================================
// Olen — Directive Card Component
// Smart priority-ranked suggestion with "Not now" cycling
// ============================================================

import type { OlenSettings, PriorityReason, DirectiveSuggestion } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import { FALLBACK_QUOTES } from "../constants";

export function renderDirectiveCard(
  container: HTMLElement,
  settings: OlenSettings,
  engine: OlenEngine,
  staggerIndex: number,
  onEnterWorkspace?: (activityId: string) => void
): void {
  const suggestions = engine.getAllSuggestions();
  if (suggestions.length === 0) {
    // All done — show a congratulations card
    renderAllDoneCard(container, staggerIndex);
    return;
  }

  let currentIndex = 0;

  // Wrapper div so we can animate transitions
  const wrapper = container.createDiv({ cls: "olen-directive-wrapper" });
  wrapper.style.setProperty("--i", String(staggerIndex));

  function renderCurrent(): void {
    wrapper.empty();
    const suggestion = suggestions[currentIndex];

    // Reason label for context
    const reasonText = getReasonLabel(suggestion.reason);

    // Card
    const card = wrapper.createDiv({ cls: "olen-card olen-directive-v2" });

    // Top accent line colored by reason
    const accentColor = getReasonColor(suggestion.reason);
    const accent = card.createDiv({ cls: "olen-directive-accent" });
    accent.style.background = `linear-gradient(90deg, transparent, ${accentColor}, transparent)`;

    // Reason badge
    const reasonBadge = card.createDiv({ cls: "olen-directive-reason" });
    reasonBadge.style.color = accentColor;
    reasonBadge.textContent = reasonText;

    // Activity name
    const activityEl = card.createDiv({ cls: "olen-directive-activity-v2" });
    activityEl.createEl("span", { cls: "olen-directive-emoji", text: suggestion.emoji });
    activityEl.createEl("span", { text: suggestion.activityName });

    // Lore / context text
    card.createEl("div", {
      cls: "olen-directive-lore",
      text: suggestion.loreText,
    });

    // Neglect info or weekly progress
    const metaEl = card.createDiv({ cls: "olen-directive-meta" });
    if (suggestion.daysSinceLastDone < 999) {
      metaEl.textContent = `${suggestion.daysSinceLastDone}d since last session`;
    } else {
      metaEl.textContent = "Not yet started";
    }

    // Weekly progress inline
    const wp = engine.getWeeklyProgress(suggestion.activityId);
    if (wp.target > 0) {
      const wpEl = metaEl.createEl("span", {
        cls: "olen-directive-weekly-pill",
        text: ` ${wp.done}/${wp.target} this week`,
      });
    }

    // Action buttons
    const actions = card.createDiv({ cls: "olen-directive-actions-v2" });

    const beginBtn = actions.createEl("button", {
      cls: "olen-directive-begin",
      text: "BEGIN",
    });
    beginBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      onEnterWorkspace?.(suggestion.activityId);
    });

    const notNowBtn = actions.createEl("button", {
      cls: "olen-directive-skip",
      text: suggestions.length > 1 ? "NEXT" : "NOT NOW",
    });
    notNowBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (suggestions.length <= 1) {
        // Only one suggestion — dismiss
        wrapper.style.opacity = "0";
        wrapper.style.transform = "translateY(-8px)";
        wrapper.style.transition = "all 0.3s ease";
        setTimeout(() => wrapper.style.display = "none", 300);
        return;
      }
      // Cycle to next suggestion with a subtle transition
      card.style.opacity = "0";
      card.style.transform = "translateX(-20px)";
      card.style.transition = "all 0.2s ease";
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % suggestions.length;
        renderCurrent();
      }, 200);
    });

    // Position indicator dots (if multiple)
    if (suggestions.length > 1) {
      const dots = card.createDiv({ cls: "olen-directive-dots" });
      const maxDots = Math.min(suggestions.length, 7);
      for (let i = 0; i < maxDots; i++) {
        const dot = dots.createEl("span", { cls: "olen-directive-dot" });
        if (i === currentIndex % maxDots) dot.addClass("active");
      }
      if (suggestions.length > 7) {
        dots.createEl("span", { cls: "olen-directive-dot-more", text: `+${suggestions.length - 7}` });
      }
    }

    // Animate in
    requestAnimationFrame(() => {
      card.style.opacity = "1";
      card.style.transform = "translateX(0)";
    });
  }

  renderCurrent();

  // Tap card to show expanded view
  wrapper.addEventListener("click", () => {
    const suggestion = suggestions[currentIndex];
    showExpandedDirective(container, settings, suggestion, suggestions, currentIndex, onEnterWorkspace);
  });
}

function renderAllDoneCard(container: HTMLElement, staggerIndex: number): void {
  const card = container.createDiv({ cls: "olen-card olen-directive-v2 olen-directive-done" });
  card.style.setProperty("--i", String(staggerIndex));

  const accent = card.createDiv({ cls: "olen-directive-accent" });
  accent.style.background = "linear-gradient(90deg, transparent, rgba(74, 222, 128, 0.5), transparent)";

  card.createDiv({ cls: "olen-directive-reason", text: "ALL CLEAR" }).style.color = "#4ade80";
  card.createEl("div", {
    cls: "olen-directive-lore",
    text: "Everything is done for today. Rest, or push further.",
    attr: { style: "text-align: center; margin: 12px 0;" },
  });
}

function showExpandedDirective(
  container: HTMLElement,
  settings: OlenSettings,
  suggestion: DirectiveSuggestion,
  allSuggestions: DirectiveSuggestion[],
  currentIndex: number,
  onEnterWorkspace?: (activityId: string) => void
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sheet-overlay";

  const sheet = overlay.createDiv({ cls: "olen-sheet olen-directive-expanded" });
  sheet.createDiv({ cls: "olen-sheet-handle" });

  // Reason
  const reasonColor = getReasonColor(suggestion.reason);
  const reasonEl = sheet.createDiv({ cls: "olen-directive-reason" });
  reasonEl.style.color = reasonColor;
  reasonEl.textContent = getReasonLabel(suggestion.reason);

  // Activity name
  sheet.createEl("div", {
    cls: "olen-directive-activity-v2",
    attr: { style: "font-size: 22px; margin: 12px 0 8px; justify-content: center;" },
  }).innerHTML = `<span class="olen-directive-emoji">${suggestion.emoji}</span> ${suggestion.activityName}`;

  // Lore
  sheet.createEl("div", {
    cls: "olen-sheet-lore",
    text: `"${suggestion.loreText}"`,
  });

  // Random quote
  const quote = FALLBACK_QUOTES[Math.floor(Math.random() * FALLBACK_QUOTES.length)];
  const quoteSection = sheet.createDiv({ cls: "olen-sheet-quote" });
  quoteSection.createEl("div", { text: `"${quote.text}"` });
  quoteSection.createEl("div", {
    cls: "olen-quote-attribution",
    text: `\u2014 ${quote.attribution}`,
    attr: { style: "margin-top: 6px;" },
  });

  // Up-next preview (next 2 suggestions)
  if (allSuggestions.length > 1) {
    const upNext = sheet.createDiv({ cls: "olen-directive-upnext" });
    upNext.createEl("div", { cls: "olen-data-sm", text: "UP NEXT" });
    const nextItems = [];
    for (let i = 1; i <= Math.min(3, allSuggestions.length - 1); i++) {
      const idx = (currentIndex + i) % allSuggestions.length;
      nextItems.push(allSuggestions[idx]);
    }
    for (const item of nextItems) {
      const row = upNext.createDiv({ cls: "olen-directive-upnext-row" });
      row.createEl("span", { text: `${item.emoji} ${item.activityName}` });
      const badge = row.createEl("span", { cls: "olen-directive-upnext-badge", text: getReasonLabel(item.reason) });
      badge.style.color = getReasonColor(item.reason);
    }
  }

  // Actions
  const actions = sheet.createDiv({ cls: "olen-directive-actions-v2" });
  actions.style.marginTop = "20px";
  actions.style.justifyContent = "center";

  const beginBtn = actions.createEl("button", {
    cls: "olen-directive-begin",
    text: "BEGIN",
  });
  beginBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSheet();
    onEnterWorkspace?.(suggestion.activityId);
  });

  const dismissBtn = actions.createEl("button", {
    cls: "olen-directive-skip",
    text: "DISMISS",
  });
  dismissBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    closeSheet();
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeSheet();
  });

  function closeSheet(): void {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 350);
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("visible"));
}

function getReasonLabel(reason: PriorityReason): string {
  switch (reason) {
    case "death": return "CRITICAL";
    case "boss": return "BOSS KILL";
    case "neglect": return "NEGLECTED";
    case "weekly": return "BEHIND SCHEDULE";
    case "chain": return "CHAIN READY";
    case "time": return "RIGHT TIME";
    case "balanced": return "SUGGESTED";
    default: return "DIRECTIVE";
  }
}

function getReasonColor(reason: PriorityReason): string {
  switch (reason) {
    case "death": return "#ef4444";
    case "boss": return "#eab308";
    case "neglect": return "#f97316";
    case "weekly": return "#3b82f6";
    case "chain": return "#a78bfa";
    case "time": return "#06b6d4";
    case "balanced": return "rgba(255,255,255,0.5)";
    default: return "rgba(255,255,255,0.4)";
  }
}
