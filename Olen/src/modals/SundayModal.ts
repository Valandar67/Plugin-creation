// ============================================================
// Olen — Sunday Modal (Multi-step check-in)
// Step 1: Olen's opening dialogue
// Step 2: Journal entry
// Step 3: Goal-setting / problem-solving
// Step 4: Farewell animation
// ============================================================

import type { App } from "obsidian";
import type { OlenSettings } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import type { CompletionMap } from "../types";
import {
  getPerformanceTier,
  pickDialogue,
  pickFarewell,
  type DialogueContext,
  type PerformanceTier,
} from "../data/sundayDialogues";
import { createJournalEntry } from "../utils/journal";

export interface SundayModalCallbacks {
  onComplete: () => void;
  onSaveSettings: () => Promise<void>;
}

export function openSundayModal(
  app: App,
  settings: OlenSettings,
  engine: OlenEngine,
  completionData: CompletionMap,
  callbacks: SundayModalCallbacks,
): void {
  // Analyze performance
  const analysis = analyzeWeeklyPerformance(settings, engine, completionData);

  const overlay = document.createElement("div");
  overlay.className = "olen-sunday-modal-overlay";

  const modal = document.createElement("div");
  modal.className = "olen-sunday-modal";

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  // Prevent backdrop close during flow
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      // Do nothing — must complete the flow
    }
  });

  renderStep1(modal, settings, analysis, () => {
    renderStep2(modal, app, settings, analysis, () => {
      renderStep3(modal, settings, analysis, callbacks.onSaveSettings, () => {
        renderStep4(modal, overlay, settings, analysis, () => {
          // Complete
          settings.sundayCheckin.lastCheckinDate = new Date().toISOString().slice(0, 10);
          settings.sundayCheckin.consecutiveIgnores = 0;
          callbacks.onSaveSettings().then(() => {
            overlay.remove();
            callbacks.onComplete();
          });
        });
      });
    });
  });
}

// --- Performance Analysis ---

interface WeeklyAnalysis {
  tier: PerformanceTier;
  dialogue: string;
  completedCount: number;
  targetCount: number;
  completedDays: number;
  streak: number;
  damage: number;
  completionRate: number;
}

function analyzeWeeklyPerformance(
  settings: OlenSettings,
  engine: OlenEngine,
  _completionData: CompletionMap,
): WeeklyAnalysis {
  const activities = engine.getEnabledActivities();

  let totalCompleted = 0;
  let totalTarget = 0;
  const categoryCounts: Record<string, number> = { body: 0, mind: 0, spirit: 0 };
  const categoryTargets: Record<string, number> = { body: 0, mind: 0, spirit: 0 };
  let maxDaysSince = 0;
  let mostNeglectedActivity = "";

  for (const activity of activities) {
    const progress = engine.getWeeklyProgress(activity.id);
    totalCompleted += progress.done;
    totalTarget += progress.target;
    categoryCounts[activity.category] += progress.done;
    categoryTargets[activity.category] += progress.target;

    const daysSince = engine.getDaysSinceLastDone(activity.id);
    if (daysSince > maxDaysSince) {
      maxDaysSince = daysSince;
      mostNeglectedActivity = activity.name;
    }
  }

  // Determine completion days (unique days with at least one completion)
  const completedDays = engine.getDaysOfPresence();
  const streak = engine.getOverallStreak();

  // Determine neglected/strong categories
  const categoryRates = Object.entries(categoryCounts).map(([cat, done]) => ({
    cat,
    rate: categoryTargets[cat] > 0 ? done / categoryTargets[cat] : 1,
  }));
  categoryRates.sort((a, b) => a.rate - b.rate);

  const neglectedCategory = categoryRates[0]?.cat || "spirit";
  const strongCategory = categoryRates[categoryRates.length - 1]?.cat || "body";

  // Boss damage this week
  const damage = totalCompleted; // Simplified: 1 damage per completion

  const completionRate = totalTarget > 0 ? totalCompleted / totalTarget : 0;
  const tier = getPerformanceTier(completionRate);

  const ctx: DialogueContext = {
    name: settings.userName,
    completedCount: totalCompleted,
    targetCount: totalTarget,
    completedDays: Math.min(completedDays, 7),
    streak,
    bodyCount: categoryCounts.body,
    mindCount: categoryCounts.mind,
    spiritCount: categoryCounts.spirit,
    damage,
    neglectedCategory,
    strongCategory,
    skippedActivity: mostNeglectedActivity || "an activity",
    daysSince: maxDaysSince,
  };

  const dialogue = pickDialogue(tier, ctx);

  return {
    tier,
    dialogue,
    completedCount: totalCompleted,
    targetCount: totalTarget,
    completedDays: Math.min(completedDays, 7),
    streak,
    damage,
    completionRate,
  };
}

// --- Step 1: Olen's Opening Dialogue ---

function renderStep1(
  modal: HTMLElement,
  _settings: OlenSettings,
  analysis: WeeklyAnalysis,
  onNext: () => void,
): void {
  modal.empty();
  modal.className = "olen-sunday-modal";

  const content = document.createElement("div");
  content.className = "olen-sunday-step";

  const dialogueEl = document.createElement("div");
  dialogueEl.className = "olen-sunday-dialogue";
  dialogueEl.textContent = analysis.dialogue;
  content.appendChild(dialogueEl);

  // Performance summary
  const summary = document.createElement("div");
  summary.className = "olen-sunday-summary";
  summary.innerHTML = `
    <div class="olen-sunday-summary-row">
      <span>${analysis.completedCount}/${analysis.targetCount}</span>
      <span class="olen-sunday-summary-label">activities</span>
    </div>
    <div class="olen-sunday-summary-row">
      <span>${analysis.completedDays}/7</span>
      <span class="olen-sunday-summary-label">active days</span>
    </div>
    <div class="olen-sunday-summary-row">
      <span>${analysis.streak}</span>
      <span class="olen-sunday-summary-label">day streak</span>
    </div>
  `;
  content.appendChild(summary);

  const nextBtn = document.createElement("button");
  nextBtn.className = "olen-btn olen-btn-primary olen-btn-large";
  nextBtn.textContent = "Continue \u2192";
  nextBtn.addEventListener("click", onNext);
  content.appendChild(nextBtn);

  modal.appendChild(content);
}

// --- Step 2: Journal Entry ---

function renderStep2(
  modal: HTMLElement,
  app: App,
  settings: OlenSettings,
  analysis: WeeklyAnalysis,
  onNext: () => void,
): void {
  modal.empty();

  const content = document.createElement("div");
  content.className = "olen-sunday-step";

  const label = document.createElement("div");
  label.className = "olen-heading";
  label.textContent = "JOURNAL";
  content.appendChild(label);

  const hint = document.createElement("div");
  hint.className = "olen-sunday-hint";
  hint.textContent = "Write freely. This will be saved as a journal entry.";
  content.appendChild(hint);

  // Title input
  const titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.className = "olen-sunday-input";
  titleInput.placeholder = `Sunday Reflection ${new Date().toISOString().slice(0, 10)}`;
  content.appendChild(titleInput);

  // Textarea
  const textarea = document.createElement("textarea");
  textarea.className = "olen-sunday-textarea";
  textarea.placeholder = "How was your week? What's on your mind?";
  textarea.rows = 6;
  content.appendChild(textarea);

  const actions = document.createElement("div");
  actions.className = "olen-sunday-actions";

  const skipBtn = document.createElement("button");
  skipBtn.className = "olen-btn olen-btn-ghost";
  skipBtn.textContent = "Skip";
  skipBtn.addEventListener("click", onNext);
  actions.appendChild(skipBtn);

  const saveBtn = document.createElement("button");
  saveBtn.className = "olen-btn olen-btn-primary";
  saveBtn.textContent = "Save & Continue";
  saveBtn.addEventListener("click", async () => {
    const journalContent = textarea.value.trim();
    if (journalContent) {
      const title = titleInput.value.trim() ||
        `Sunday Reflection ${new Date().toISOString().slice(0, 10)}`;
      await createJournalEntry(app, settings.sundayCheckin.journalFolder, title, journalContent, {
        type: "sunday-reflection",
        date: new Date().toISOString().slice(0, 10),
        performance: analysis.tier,
      });
    }
    onNext();
  });
  actions.appendChild(saveBtn);

  content.appendChild(actions);
  modal.appendChild(content);

  requestAnimationFrame(() => textarea.focus());
}

// --- Step 3: Goal-setting / Problem-solving ---

function renderStep3(
  modal: HTMLElement,
  settings: OlenSettings,
  analysis: WeeklyAnalysis,
  saveSettings: () => Promise<void>,
  onNext: () => void,
): void {
  modal.empty();

  const content = document.createElement("div");
  content.className = "olen-sunday-step";

  const label = document.createElement("div");
  label.className = "olen-heading";
  label.textContent = analysis.tier === "positive" ? "WHAT'S WORKING?" : "HOW DO YOU FIX THIS?";
  content.appendChild(label);

  const hint = document.createElement("div");
  hint.className = "olen-sunday-hint";
  hint.textContent = analysis.tier === "positive"
    ? "What's working? How do you keep this up?"
    : "How do you plan to solve this? One goal per line.";
  content.appendChild(hint);

  const textarea = document.createElement("textarea");
  textarea.className = "olen-sunday-textarea";
  textarea.placeholder = "One goal per line...";
  textarea.rows = 5;
  content.appendChild(textarea);

  const actions = document.createElement("div");
  actions.className = "olen-sunday-actions";

  const skipBtn = document.createElement("button");
  skipBtn.className = "olen-btn olen-btn-ghost";
  skipBtn.textContent = "Skip";
  skipBtn.addEventListener("click", onNext);
  actions.appendChild(skipBtn);

  const saveBtn = document.createElement("button");
  saveBtn.className = "olen-btn olen-btn-primary";
  saveBtn.textContent = "Save & Continue";
  saveBtn.addEventListener("click", async () => {
    const lines = textarea.value
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.length > 0);

    for (const line of lines) {
      settings.goals.push({
        id: crypto.randomUUID(),
        text: line,
        type: "title",
        category: "personal-growth",
        completed: false,
        subgoals: [],
      });
    }

    if (lines.length > 0) {
      await saveSettings();
    }
    onNext();
  });
  actions.appendChild(saveBtn);

  content.appendChild(actions);
  modal.appendChild(content);

  requestAnimationFrame(() => textarea.focus());
}

// --- Step 4: Farewell ---

function renderStep4(
  modal: HTMLElement,
  overlay: HTMLElement,
  settings: OlenSettings,
  _analysis: WeeklyAnalysis,
  onComplete: () => void,
): void {
  modal.empty();

  const content = document.createElement("div");
  content.className = "olen-sunday-step olen-sunday-farewell";

  const text = document.createElement("div");
  text.className = "olen-sunday-farewell-text";
  text.textContent = pickFarewell(settings.userName);
  content.appendChild(text);

  modal.appendChild(content);

  // Animate and then close
  setTimeout(() => {
    overlay.classList.add("olen-sunday-modal-fading");
    setTimeout(() => {
      onComplete();
    }, 1000);
  }, 3000);
}
