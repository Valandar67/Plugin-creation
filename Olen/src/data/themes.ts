// ============================================================
// Olen — Theme Definitions
// Elysian Dark palette and variants
// ============================================================

import type { ElysianTheme } from "../types";

/** The default Elysian Dark theme */
export const ELYSIAN_DARK: ElysianTheme = {
  bgPrimary: "#000000",
  cardBg: "rgba(0, 0, 0, 0.85)",
  textPrimary: "#f5f0e8",
  textMuted: "#928d85",
  accentGold: "#c9a84c",
  danger: "#8b2d35",
  success: "#d4940a",
  bodyColor: "#c9a84c",
  mindColor: "#6b8cce",
  spiritColor: "#928d85",
};

/** Category color definitions matching the identity system */
export const CATEGORY_COLORS = {
  body: "#c9a84c",
  mind: "#6b8cce",
  spirit: "#928d85",
} as const;

/** Combination title pairs for display */
export const COMBINATION_TITLES: Record<string, string> = {
  "body+mind": "Philosopher-King",
  "body+spirit": "Templar",
  "mind+spirit": "Mystic Scholar",
  "body+mind+spirit": "Eudaimon",
};
