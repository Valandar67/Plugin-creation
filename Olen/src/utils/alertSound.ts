// ============================================================
// Olen — Alert Sound & Vibration Utilities
// Shared by WorkspaceView and background timer in main.ts
// ============================================================

import type { PomodoroSettings } from "../types";

/**
 * Play the default beep sound (880Hz sine wave, 1.5s fade).
 */
export function playDefaultBeep(): void {
  try {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 880;
    osc.type = "sine";
    gain.gain.value = 0.3;
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.5);
    osc.stop(ctx.currentTime + 1.5);
  } catch { /* Web Audio not available */ }
}

/**
 * Play a custom sound file from the vault using a resource path.
 */
export function playCustomSound(resourcePath: string): void {
  try {
    const audio = new Audio(resourcePath);
    audio.volume = 0.5;
    audio.play().catch(() => {/* playback not allowed */});
  } catch { /* Audio not available */ }
}

/**
 * Play alert sound based on pomodoro settings.
 * If no settings provided, plays the default beep.
 */
export function playAlertSound(settings?: PomodoroSettings, resolveResource?: (path: string) => string): void {
  if (settings && !settings.soundEnabled) return;
  if (settings?.soundFile && resolveResource) {
    playCustomSound(resolveResource(settings.soundFile));
  } else {
    playDefaultBeep();
  }
}

export function vibrateAlert(settings?: PomodoroSettings): void {
  if (settings && !settings.vibrationEnabled) return;
  (navigator as any).vibrate?.([200, 100, 200]);
}
