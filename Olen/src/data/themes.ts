// ============================================================
// Olen — Theme Definitions
// Elysian Dark · Glass (Grey) · Steamy Glass (White)
// ============================================================

import type { ElysianTheme, OlenThemeMode } from "../types";

/** The default Elysian Dark theme — pure black, warm amber glow */
export const ELYSIAN_DARK: ElysianTheme = {
  bgPrimary: "#000000",
  bgSecondary: "#0a0a0a",
  cardBg: "rgba(0, 0, 0, 0.55)",
  cardBgSolid: "#0a0a0a",
  cardBorder: "rgba(255, 255, 255, 0.06)",
  cardBorderHover: "rgba(255, 255, 255, 0.12)",
  textPrimary: "#f2ece0",
  textSecondary: "#c8c0b2",
  textMuted: "#7e7769",
  textDim: "#4d473e",
  accentGold: "#d4a843",
  accentGoldBright: "#e8c35a",
  accentGoldDim: "rgba(212, 168, 67, 0.18)",
  accentAmber: "#c48820",
  accentWarm: "rgba(212, 168, 67, 0.06)",
  danger: "#a83240",
  dangerDim: "rgba(168, 50, 64, 0.25)",
  success: "#d49b0a",
  successDim: "rgba(212, 155, 10, 0.15)",
  bodyColor: "#d4a843",
  mindColor: "#7b9de0",
  spiritColor: "#928d85",
  cardBlur: "blur(60px) saturate(180%)",
  glassSheen: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.02) 100%)",
  divider: "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), rgba(255,255,255,0.03), transparent)",
  glowGold: "0 0 30px rgba(255,255,255,0.04), 0 0 80px rgba(255,255,255,0.02)",
  glowGoldStrong: "0 0 20px rgba(255,255,255,0.08), 0 0 60px rgba(255,255,255,0.04)",
  glowDanger: "0 0 30px rgba(168,50,64,0.2), 0 0 80px rgba(168,50,64,0.1)",
  shadowCard: "0 4px 24px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)",
  shadowDeep: "0 8px 40px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
};

/** Glass — cool grey frosted glass, soft neutral tones */
export const ELYSIAN_GLASS: ElysianTheme = {
  bgPrimary: "#1a1a1e",
  bgSecondary: "#222228",
  cardBg: "rgba(40, 40, 48, 0.55)",
  cardBgSolid: "#28282f",
  cardBorder: "rgba(255, 255, 255, 0.08)",
  cardBorderHover: "rgba(255, 255, 255, 0.16)",
  textPrimary: "#e8e6e1",
  textSecondary: "#b8b4ac",
  textMuted: "#85817a",
  textDim: "#55524c",
  accentGold: "#c0a050",
  accentGoldBright: "#d4b464",
  accentGoldDim: "rgba(192, 160, 80, 0.16)",
  accentAmber: "#b89030",
  accentWarm: "rgba(192, 160, 80, 0.06)",
  danger: "#b04050",
  dangerDim: "rgba(176, 64, 80, 0.22)",
  success: "#80a858",
  successDim: "rgba(128, 168, 88, 0.15)",
  bodyColor: "#c0a050",
  mindColor: "#7898d0",
  spiritColor: "#908880",
  cardBlur: "blur(50px) saturate(160%)",
  glassSheen: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.03) 100%)",
  divider: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), rgba(255,255,255,0.04), transparent)",
  glowGold: "0 0 30px rgba(192,160,80,0.06), 0 0 80px rgba(192,160,80,0.03)",
  glowGoldStrong: "0 0 20px rgba(192,160,80,0.12), 0 0 60px rgba(192,160,80,0.06)",
  glowDanger: "0 0 30px rgba(176,64,80,0.2), 0 0 80px rgba(176,64,80,0.1)",
  shadowCard: "0 4px 24px rgba(0,0,0,0.25), 0 1px 4px rgba(0,0,0,0.18)",
  shadowDeep: "0 8px 40px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.25)",
};

/** Steamy Glass — luminous white, warm steam, frosted light */
export const ELYSIAN_STEAMY: ElysianTheme = {
  bgPrimary: "#f0ece4",
  bgSecondary: "#e6e1d8",
  cardBg: "rgba(255, 255, 255, 0.55)",
  cardBgSolid: "#f5f2ec",
  cardBorder: "rgba(0, 0, 0, 0.06)",
  cardBorderHover: "rgba(0, 0, 0, 0.12)",
  textPrimary: "#2a2520",
  textSecondary: "#504840",
  textMuted: "#8a8278",
  textDim: "#b8b0a5",
  accentGold: "#a88530",
  accentGoldBright: "#c49a3a",
  accentGoldDim: "rgba(168, 133, 48, 0.14)",
  accentAmber: "#9a7520",
  accentWarm: "rgba(168, 133, 48, 0.06)",
  danger: "#b83848",
  dangerDim: "rgba(184, 56, 72, 0.12)",
  success: "#5a8a38",
  successDim: "rgba(90, 138, 56, 0.12)",
  bodyColor: "#a88530",
  mindColor: "#5878b8",
  spiritColor: "#908878",
  cardBlur: "blur(50px) saturate(140%)",
  glassSheen: "linear-gradient(135deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.3) 100%)",
  divider: "linear-gradient(90deg, transparent, rgba(0,0,0,0.06), rgba(0,0,0,0.03), transparent)",
  glowGold: "0 0 30px rgba(168,133,48,0.08), 0 0 80px rgba(168,133,48,0.04)",
  glowGoldStrong: "0 0 20px rgba(168,133,48,0.15), 0 0 60px rgba(168,133,48,0.08)",
  glowDanger: "0 0 30px rgba(184,56,72,0.15), 0 0 80px rgba(184,56,72,0.08)",
  shadowCard: "0 4px 24px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.05)",
  shadowDeep: "0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
};

/** Map theme mode to preset */
export const THEME_PRESETS: Record<OlenThemeMode, ElysianTheme> = {
  dark: ELYSIAN_DARK,
  glass: ELYSIAN_GLASS,
  steamy: ELYSIAN_STEAMY,
};

/** Display labels for the theme picker */
export const THEME_LABELS: Record<OlenThemeMode, string> = {
  dark: "Elysian Dark",
  glass: "Glass (Grey)",
  steamy: "Steamy Glass (White)",
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
