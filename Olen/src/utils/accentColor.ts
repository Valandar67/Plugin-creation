// ============================================================
// Olen — Accent Color Utility
// Reads the user's Obsidian accent color and derives variants
// ============================================================

import type { App } from "obsidian";

/** Parse a hex color to RGB components */
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.match(/^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (!m) return null;
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

/** Convert RGB to hex */
function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (v: number) => Math.max(0, Math.min(255, Math.round(v)));
  return `#${[clamp(r), clamp(g), clamp(b)].map(v => v.toString(16).padStart(2, "0")).join("")}`;
}

/** Lighten a color by a factor (0-1) */
function lighten(hex: string, amount: number): string {
  const c = hexToRgb(hex);
  if (!c) return hex;
  return rgbToHex(
    c.r + (255 - c.r) * amount,
    c.g + (255 - c.g) * amount,
    c.b + (255 - c.b) * amount,
  );
}

/** Darken a color by a factor (0-1) */
function darken(hex: string, amount: number): string {
  const c = hexToRgb(hex);
  if (!c) return hex;
  return rgbToHex(c.r * (1 - amount), c.g * (1 - amount), c.b * (1 - amount));
}

/** Create an rgba string from hex + alpha */
function hexToRgba(hex: string, alpha: number): string {
  const c = hexToRgb(hex);
  if (!c) return `rgba(0,0,0,${alpha})`;
  return `rgba(${c.r}, ${c.g}, ${c.b}, ${alpha})`;
}

export interface AccentColorVariants {
  accentGold: string;
  accentGoldBright: string;
  accentGoldDim: string;
  accentAmber: string;
  accentWarm: string;
  success: string;
  successDim: string;
  bodyColor: string;
}

/** Perceived brightness (0-255) using ITU-R BT.601 weights */
function perceivedBrightness(hex: string): number {
  const c = hexToRgb(hex);
  if (!c) return 128;
  return 0.299 * c.r + 0.587 * c.g + 0.114 * c.b;
}

/** Ensure a color meets a minimum brightness for readability on dark backgrounds */
function ensureMinBrightness(hex: string, minBrightness: number): string {
  let color = hex;
  let attempts = 0;
  while (perceivedBrightness(color) < minBrightness && attempts < 20) {
    color = lighten(color, 0.1);
    attempts++;
  }
  return color;
}

// Minimum perceived brightness for text on dark backgrounds (~120 is comfortably readable)
const MIN_TEXT_BRIGHTNESS = 120;

/** Derive all accent color variants from a single base hex color */
export function deriveAccentVariants(baseHex: string): AccentColorVariants {
  const safeBase = ensureMinBrightness(baseHex, MIN_TEXT_BRIGHTNESS);
  return {
    accentGold: safeBase,
    accentGoldBright: ensureMinBrightness(lighten(baseHex, 0.25), MIN_TEXT_BRIGHTNESS),
    accentGoldDim: hexToRgba(safeBase, 0.18),
    accentAmber: darken(safeBase, 0.2),
    accentWarm: hexToRgba(safeBase, 0.06),
    success: safeBase,
    successDim: hexToRgba(safeBase, 0.15),
    bodyColor: safeBase,
  };
}

/** Read the user's Obsidian accent color from .obsidian/appearance.json */
export async function readObsidianAccentColor(app: App): Promise<string | null> {
  try {
    const path = `${app.vault.configDir}/appearance.json`;
    const adapter = app.vault.adapter;
    if (await adapter.exists(path)) {
      const raw = await adapter.read(path);
      const data = JSON.parse(raw);
      if (data.accentColor && typeof data.accentColor === "string") {
        return data.accentColor;
      }
    }
  } catch {
    // Silently fail — use theme defaults
  }
  return null;
}

/**
 * Apply accent color CSS custom properties to an element.
 * Call this AFTER applying theme vars so accent overrides them.
 */
export function applyAccentColor(root: HTMLElement, accentHex: string): void {
  const v = deriveAccentVariants(accentHex);
  root.style.setProperty("--accent-gold", v.accentGold);
  root.style.setProperty("--accent-gold-bright", v.accentGoldBright);
  root.style.setProperty("--accent-gold-dim", v.accentGoldDim);
  root.style.setProperty("--accent-amber", v.accentAmber);
  root.style.setProperty("--accent-warm", v.accentWarm);
  root.style.setProperty("--success", v.success);
  root.style.setProperty("--success-dim", v.successDim);
  root.style.setProperty("--body-color", v.bodyColor);
}
