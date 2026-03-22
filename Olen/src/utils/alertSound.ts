// ============================================================
// Olen — Alert Sound & Vibration Utilities
// Shared by WorkspaceView and background timer in main.ts
// ============================================================

import type { PomodoroSettings } from "../types";

// Module-level refs so we can stop audio on demand
let activeCtx: AudioContext | null = null;
let activeOsc: OscillatorNode | null = null;
let activeAudio: HTMLAudioElement | null = null;

/**
 * Stop any currently playing alert sound and cancel vibration.
 */
export function stopAlertSound(): void {
  if (activeOsc) {
    try { activeOsc.stop(); } catch { /* already stopped */ }
    activeOsc = null;
  }
  if (activeCtx) {
    try { activeCtx.close(); } catch { /* already closed */ }
    activeCtx = null;
  }
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
    activeAudio = null;
  }
  // Cancel any ongoing vibration
  (navigator as any).vibrate?.(0);
}

/**
 * Play the default beep sound (880Hz sine wave, 1.5s fade).
 */
function playDefaultBeep(): void {
  // Stop any previous sound first
  stopAlertSound();
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

    // Store refs for cancellation
    activeCtx = ctx;
    activeOsc = osc;

    // Auto-cleanup after the sound ends
    osc.onended = () => {
      activeOsc = null;
      activeCtx = null;
      try { ctx.close(); } catch { /* ignore */ }
    };
  } catch { /* Web Audio not available */ }
}

/**
 * Play a custom sound file from the vault using a resource path.
 */
function playCustomSound(resourcePath: string): void {
  stopAlertSound();
  try {
    const audio = new Audio(resourcePath);
    audio.volume = 0.5;
    activeAudio = audio;
    audio.play().catch(() => { /* playback not allowed */ });
    audio.onended = () => { activeAudio = null; };
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
