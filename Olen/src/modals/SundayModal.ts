// ============================================================
// Olen — Sunday Modal (Multi-step check-in)
// Step 1: Olen's opening dialogue + visual performance
// Step 2: Journal entry
// Step 3: Goal-setting / problem-solving (adaptive)
// Step 4: Farewell animation (tier-aware)
// ============================================================

import type { App } from "obsidian";
import type { OlenSettings, Category } from "../types";
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
import { toLocalDateStr } from "../utils/completions";

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

  // Fade in the overlay
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add("olen-sunday-modal-visible");
    });
  });

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
          // Complete — use simulated date if set so banner doesn't re-appear
          const effectiveDate = settings.simulatedDate
            ? new Date(settings.simulatedDate)
            : new Date();
          settings.sundayCheckin.lastCheckinDate = toLocalDateStr(effectiveDate);
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
  weekOverWeek: number;
  bestDay: string;
  byDay: Array<{ day: string; date: string; completions: Map<Category, number> }>;
  categoryCounts: Record<string, number>;
  categoryTargets: Record<string, number>;
  bossName: string;
  bossHpPercent: number;
  chapter: number;
  chapterName: string;
  eudaimoniaIndex: number;
  neglectedCategory: string;
  strongCategory: string;
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

  // Days and streak
  const completedDays = engine.getDaysOfPresence();
  const streak = engine.getOverallStreak();

  // Weekly stats (sparkline data, trend, best day)
  const weeklyStats = engine.getWeeklyStats();

  // Category balance
  const categoryRates = Object.entries(categoryCounts).map(([cat, done]) => ({
    cat,
    rate: categoryTargets[cat] > 0 ? done / categoryTargets[cat] : 1,
  }));
  categoryRates.sort((a, b) => a.rate - b.rate);
  const neglectedCategory = categoryRates[0]?.cat || "spirit";
  const strongCategory = categoryRates[categoryRates.length - 1]?.cat || "body";

  // Boss info
  const bossName = settings.bossName || `Tier ${settings.currentTier} Boss`;
  const bossHpPercent = settings.bossMaxHP > 0
    ? Math.round((settings.bossCurrentHP / settings.bossMaxHP) * 100)
    : 100;

  // Progression
  const chapter = engine.getChapter();
  const eudaimoniaIndex = engine.getEudaimoniaIndex();

  const damage = totalCompleted;
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
    completionRate,
    weekOverWeek: weeklyStats.weekOverWeek,
    bestDay: weeklyStats.bestDay,
    bossName,
    bossHpPercent,
    chapter: chapter.number,
    chapterName: chapter.name,
    eudaimoniaIndex,
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
    weekOverWeek: weeklyStats.weekOverWeek,
    bestDay: weeklyStats.bestDay,
    byDay: weeklyStats.byDay,
    categoryCounts,
    categoryTargets,
    bossName,
    bossHpPercent,
    chapter: chapter.number,
    chapterName: chapter.name,
    eudaimoniaIndex,
    neglectedCategory,
    strongCategory,
  };
}

// --- Step 1: Olen's Opening Dialogue + Visuals ---

function renderStep1(
  modal: HTMLElement,
  settings: OlenSettings,
  analysis: WeeklyAnalysis,
  onNext: () => void,
): void {
  modal.empty();
  modal.className = "olen-sunday-modal";

  const content = document.createElement("div");
  content.className = "olen-sunday-step";

  // Dialogue
  const dialogueEl = document.createElement("div");
  dialogueEl.className = "olen-sunday-dialogue";
  dialogueEl.textContent = analysis.dialogue;
  content.appendChild(dialogueEl);

  // Category bars
  const barsContainer = document.createElement("div");
  barsContainer.className = "olen-sunday-category-bars";

  const categories: Array<{ key: string; label: string }> = [
    { key: "body", label: "BODY" },
    { key: "mind", label: "MIND" },
    { key: "spirit", label: "SPIRIT" },
  ];

  for (const cat of categories) {
    const done = analysis.categoryCounts[cat.key] || 0;
    const target = analysis.categoryTargets[cat.key] || 1;
    const pct = Math.min(100, Math.round((done / target) * 100));
    const color = settings.categoryColors[cat.key as keyof typeof settings.categoryColors] ?? "#928d85";

    const row = document.createElement("div");
    row.className = "olen-sunday-bar-row";

    const label = document.createElement("span");
    label.className = "olen-sunday-bar-label";
    label.textContent = cat.label;
    row.appendChild(label);

    const track = document.createElement("div");
    track.className = "olen-sunday-bar-track";

    const fill = document.createElement("div");
    fill.className = "olen-sunday-bar-fill";
    fill.style.width = "0%";
    fill.style.background = color;
    track.appendChild(fill);
    row.appendChild(track);

    const value = document.createElement("span");
    value.className = "olen-sunday-bar-value";
    value.textContent = `${done}/${target}`;
    row.appendChild(value);

    barsContainer.appendChild(row);

    // Animate bars after render
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        fill.style.width = `${pct}%`;
      });
    });
  }
  content.appendChild(barsContainer);

  // 7-day sparkline
  const sparkline = document.createElement("div");
  sparkline.className = "olen-sunday-sparkline";

  // Find max daily total for scaling
  let maxDaily = 0;
  for (const day of analysis.byDay) {
    let dayTotal = 0;
    day.completions.forEach((v) => { dayTotal += v; });
    if (dayTotal > maxDaily) maxDaily = dayTotal;
  }
  if (maxDaily === 0) maxDaily = 1;

  for (const day of analysis.byDay) {
    let dayTotal = 0;
    day.completions.forEach((v) => { dayTotal += v; });

    const col = document.createElement("div");
    col.className = "olen-sunday-spark-col";

    const bar = document.createElement("div");
    bar.className = "olen-sunday-spark-bar";
    const heightPct = Math.max(5, (dayTotal / maxDaily) * 100);
    bar.style.height = "0%";
    bar.style.background = dayTotal > 0
      ? "var(--accent-gold, #d4a843)"
      : "rgba(255,255,255,0.08)";

    col.appendChild(bar);

    const dayLabel = document.createElement("span");
    dayLabel.className = "olen-sunday-spark-day";
    dayLabel.textContent = day.day.slice(0, 3);
    col.appendChild(dayLabel);

    sparkline.appendChild(col);

    // Animate sparkline bars
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        bar.style.height = `${heightPct}%`;
      });
    });
  }
  content.appendChild(sparkline);

  // Trend + streak row
  const metaRow = document.createElement("div");
  metaRow.className = "olen-sunday-meta-row";

  // Week-over-week trend
  if (analysis.weekOverWeek !== 0) {
    const trend = document.createElement("span");
    trend.className = `olen-sunday-trend ${analysis.weekOverWeek > 0 ? "up" : "down"}`;
    const arrow = analysis.weekOverWeek > 0 ? "↑" : "↓";
    const sign = analysis.weekOverWeek > 0 ? "+" : "";
    trend.textContent = `${arrow} ${sign}${analysis.weekOverWeek} vs last week`;
    metaRow.appendChild(trend);
  }

  // Streak badge
  if (analysis.streak > 0) {
    const badge = document.createElement("span");
    badge.className = "olen-sunday-streak-badge";
    badge.textContent = `🔥 ${analysis.streak}`;
    metaRow.appendChild(badge);
  }

  if (metaRow.childElementCount > 0) {
    content.appendChild(metaRow);
  }

  const nextBtn = document.createElement("button");
  nextBtn.className = "olen-btn olen-btn-primary olen-btn-large";
  nextBtn.textContent = "Continue →";
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
  titleInput.placeholder = `Sunday Reflection ${toLocalDateStr(new Date())}`;
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
        `Sunday Reflection ${toLocalDateStr(new Date())}`;
      await createJournalEntry(app, settings.sundayCheckin.journalFolder, title, journalContent, {
        type: "sunday-reflection",
        date: toLocalDateStr(new Date()),
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

// --- Step 3: Goal-setting / Problem-solving (Adaptive) ---

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

  // Adaptive heading + hint based on analysis
  const { heading, hint } = getAdaptiveStep3Content(analysis);

  const label = document.createElement("div");
  label.className = "olen-heading";
  label.textContent = heading;
  content.appendChild(label);

  const hintEl = document.createElement("div");
  hintEl.className = "olen-sunday-hint";
  hintEl.textContent = hint;
  content.appendChild(hintEl);

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

function getAdaptiveStep3Content(analysis: WeeklyAnalysis): { heading: string; hint: string } {
  // Check for neglected category
  const neglectRate = analysis.categoryTargets[analysis.neglectedCategory] > 0
    ? analysis.categoryCounts[analysis.neglectedCategory] / analysis.categoryTargets[analysis.neglectedCategory]
    : 1;

  if (analysis.tier === "positive") {
    return {
      heading: "WHAT'S WORKING?",
      hint: "You're in a flow state. What's your secret this week? How do you keep it going?",
    };
  }

  if (neglectRate < 0.3) {
    const cat = analysis.neglectedCategory.charAt(0).toUpperCase() + analysis.neglectedCategory.slice(1);
    return {
      heading: `${cat.toUpperCase()} NEEDS YOU`,
      hint: `Your ${analysis.neglectedCategory} is falling behind. What's one thing you can commit to this week?`,
    };
  }

  if (analysis.streak === 0) {
    return {
      heading: "REBUILD THE STREAK",
      hint: "The streak broke. What knocked you off track, and how do you prevent it next week?",
    };
  }

  return {
    heading: "HOW DO YOU FIX THIS?",
    hint: "What's one realistic change you can make this week? One goal per line.",
  };
}

// --- Step 4: Farewell (Tier-aware) ---

function renderStep4(
  modal: HTMLElement,
  overlay: HTMLElement,
  settings: OlenSettings,
  analysis: WeeklyAnalysis,
  onComplete: () => void,
): void {
  modal.empty();

  const content = document.createElement("div");
  content.className = "olen-sunday-step olen-sunday-farewell";

  const text = document.createElement("div");
  text.className = "olen-sunday-farewell-text";
  text.textContent = pickFarewell(settings.userName, analysis.tier);
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
