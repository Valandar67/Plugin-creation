// ============================================================
// Olen — Alert Sound & Vibration Utilities
// Shared by WorkspaceView and background timer in main.ts
// ============================================================

export function playAlertSound(): void {
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

export function vibrateAlert(): void {
  (navigator as any).vibrate?.([200, 100, 200]);
}
