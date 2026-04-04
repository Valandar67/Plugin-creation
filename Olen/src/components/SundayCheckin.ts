// ============================================================
// Olen — Sunday Check-in Banner
// Appears at the bottom of the dashboard on Sundays
// ============================================================

import type { OlenSettings } from "../types";
import { toLocalDateStr } from "../utils/completions";

export interface SundayBannerCallbacks {
  onLetHimIn: () => void;
  onIgnore: () => void;
}

/**
 * Check whether the Sunday banner should be shown.
 */
export function shouldShowSundayBanner(settings: OlenSettings, now: Date): boolean {
  const checkin = settings.sundayCheckin;
  if (!checkin.enabled) return false;

  const isSunday = now.getDay() === 0;
  if (!isSunday) return false;

  const todayStr = toLocalDateStr(now);
  if (checkin.lastCheckinDate === todayStr) return false;

  return true;
}

/**
 * Render the Sunday check-in banner at the bottom of the dashboard.
 */
export function renderSundayBanner(
  root: HTMLElement,
  settings: OlenSettings,
  staggerIdx: number,
  callbacks: SundayBannerCallbacks,
): void {
  const banner = root.createDiv({ cls: "olen-card olen-sunday-banner" });
  banner.style.setProperty("--i", String(staggerIdx));

  const inner = banner.createDiv({ cls: "olen-sunday-banner-inner" });

  inner.createEl("div", {
    cls: "olen-sunday-banner-text",
    text: "Olen wants to speak to you",
  });

  const actions = inner.createDiv({ cls: "olen-sunday-banner-actions" });

  const dismissBanner = (callback: () => void) => {
    banner.classList.add("olen-sunday-banner-dismissing");
    setTimeout(callback, 400);
  };

  const letInBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-primary",
    text: "Let him in",
  });
  letInBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dismissBanner(() => callbacks.onLetHimIn());
  });

  const ignoreBtn = actions.createEl("button", {
    cls: "olen-btn olen-btn-ghost",
    text: "Ignore",
  });
  ignoreBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dismissBanner(() => callbacks.onIgnore());
  });
}

/**
 * Render the opt-out confirmation modal when user ignores 2+ times.
 */
export function renderOptOutModal(
  onTurnOff: () => void,
  onKeep: () => void,
): void {
  const overlay = document.createElement("div");
  overlay.className = "olen-sunday-optout-overlay";

  const sheet = document.createElement("div");
  sheet.className = "olen-sunday-optout-sheet";

  const title = document.createElement("div");
  title.className = "olen-sunday-optout-title";
  title.textContent = "Do you want Olen to go away?";
  sheet.appendChild(title);

  const desc = document.createElement("div");
  desc.className = "olen-sunday-optout-desc";
  desc.textContent =
    "This will stop Olen from checking in with you on Sundays. You can re-enable this anytime in Settings \u2192 Advanced.";
  sheet.appendChild(desc);

  const actions = document.createElement("div");
  actions.className = "olen-sunday-optout-actions";

  const dismissOverlay = (callback: () => void) => {
    overlay.style.opacity = "0";
    setTimeout(() => { overlay.remove(); callback(); }, 400);
  };

  const turnOffBtn = document.createElement("button");
  turnOffBtn.className = "olen-btn olen-btn-ghost";
  turnOffBtn.textContent = "Turn off";
  turnOffBtn.addEventListener("click", () => {
    dismissOverlay(onTurnOff);
  });
  actions.appendChild(turnOffBtn);

  const keepBtn = document.createElement("button");
  keepBtn.className = "olen-btn olen-btn-primary";
  keepBtn.textContent = "No, keep him";
  keepBtn.addEventListener("click", () => {
    dismissOverlay(onKeep);
  });
  actions.appendChild(keepBtn);

  sheet.appendChild(actions);
  overlay.appendChild(sheet);

  // Close on backdrop click
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      dismissOverlay(onKeep);
    }
  });

  document.body.appendChild(overlay);
}
