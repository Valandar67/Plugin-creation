// ============================================================
// Olen — Onboarding Wizard (9-screen flow)
// Screens 0-2 implemented; 3-8 placeholder stubs
// ============================================================

import { ItemView, WorkspaceLeaf, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { Category, Goal, WeightLogFrequency } from "../types";
import { VIEW_TYPE_ONBOARDING } from "../constants";
import { ONBOARDING_ACTIVITIES, buildActivityConfig, CATEGORY_META } from "../data/defaultActivities";

const SCREEN_LABELS = [
  "Identity", "Stats", "Domains", "Activities",
  "Routines", "Theme", "Calendar", "...", "Launch",
];
const TOTAL_SCREENS = SCREEN_LABELS.length;

export class OnboardingView extends ItemView {
  plugin: OlenPlugin;
  private currentScreen = 0;

  constructor(leaf: WorkspaceLeaf, plugin: OlenPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return VIEW_TYPE_ONBOARDING;
  }

  getDisplayText(): string {
    return "Welcome to Olen";
  }

  getIcon(): string {
    return "star";
  }

  async onOpen(): Promise<void> {
    this.renderScreen();
  }

  async onClose(): Promise<void> {
    this.contentEl.empty();
  }

  // ── Helpers ──────────────────────────────────────────────

  private goto(n: number): void {
    this.currentScreen = n;
    this.renderScreen();
  }

  private renderScreen(): void {
    this.contentEl.empty();
    const root = this.contentEl.createDiv({ cls: "olen-dashboard olen-onboarding" });

    this.renderProgressDots(root);

    switch (this.currentScreen) {
      case 0: this.renderScreen0_Identity(root); break;
      case 1: this.renderScreen1_Stats(root); break;
      case 2: this.renderScreen2_Domains(root); break;
      case 3: this.renderScreen3_Activities(root); break;
      case 4: this.renderScreen4_Routines(root); break;
      case 5: this.renderScreen5_Theme(root); break;
      case 6: this.renderScreen6_Calendar(root); break;
      case 7: this.renderScreen7_Personalizing(root); break;
      case 8: this.renderScreen8_Launch(root); break;
    }
  }

  private renderProgressDots(root: HTMLElement): void {
    const bar = root.createDiv({ cls: "olen-wizard-progress" });
    for (let i = 0; i < TOTAL_SCREENS; i++) {
      const dot = bar.createDiv({ cls: "olen-wizard-progress-dot" });
      if (i === this.currentScreen) dot.classList.add("olen-wizard-progress-dot-active");
      else if (i < this.currentScreen) dot.classList.add("olen-wizard-progress-dot-done");
      dot.setAttribute("aria-label", SCREEN_LABELS[i]);
    }
  }

  /** Standard Back / Skip / Continue navigation row */
  private renderNav(
    parent: HTMLElement,
    opts: {
      back?: number;
      skip?: number;
      next?: number;
      nextLabel?: string;
      onNext?: () => boolean | void; // return false to cancel
    },
  ): void {
    const actions = parent.createDiv({ cls: "olen-onboarding-actions" });

    if (opts.back !== undefined) {
      const backBtn = actions.createEl("button", {
        cls: "olen-btn olen-btn-secondary",
        text: "\u2190 BACK",
      });
      backBtn.addEventListener("click", () => this.goto(opts.back!));
    }

    if (opts.skip !== undefined) {
      const skipBtn = actions.createEl("button", {
        cls: "olen-btn olen-btn-ghost",
        text: "SKIP \u2192",
      });
      skipBtn.addEventListener("click", () => this.goto(opts.skip!));
    }

    if (opts.next !== undefined) {
      const nextBtn = actions.createEl("button", {
        cls: "olen-btn olen-btn-primary olen-btn-large",
        text: opts.nextLabel ?? "CONTINUE \u2192",
      });
      nextBtn.addEventListener("click", () => {
        if (opts.onNext) {
          const result = opts.onNext();
          if (result === false) return;
        }
        this.goto(opts.next!);
      });
    }
  }

  // ── Screen 0: "Who Are You Becoming?" (Identity) ────────

  private renderScreen0_Identity(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "Who Are You Becoming?",
      attr: { style: "text-align: center; margin-bottom: 32px;" },
    });

    // Name
    const nameField = content.createDiv({ cls: "olen-onboarding-field" });
    nameField.createEl("label", { cls: "olen-heading", text: "YOUR NAME" });
    const nameInput = nameField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: {
        type: "text",
        placeholder: "What should I call you?",
        value: this.plugin.settings.userName !== "User" ? this.plugin.settings.userName : "",
      },
    });

    // My Why
    const whyField = content.createDiv({ cls: "olen-onboarding-field" });
    whyField.createEl("label", { cls: "olen-heading", text: "MY WHY" });
    whyField.createEl("div", {
      cls: "olen-body-italic",
      text: "Your core motivation \u2014 the fire that drives your discipline.",
      attr: { style: "margin-bottom: 8px;" },
    });
    const whyInput = whyField.createEl("textarea", {
      cls: "olen-onboarding-textarea",
      attr: { placeholder: "I pursue discipline because...", rows: "3" },
    });
    whyInput.value = this.plugin.settings.myWhy ?? "";

    // Aphorism
    const aphField = content.createDiv({ cls: "olen-onboarding-field" });
    aphField.createEl("label", { cls: "olen-heading", text: "APHORISM" });
    aphField.createEl("div", {
      cls: "olen-body-italic",
      text: "A quote or mantra that drives you.",
      attr: { style: "margin-bottom: 8px;" },
    });
    const aphInput = aphField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: {
        type: "text",
        placeholder: "A quote or mantra that drives you...",
        value: this.plugin.settings.aphorism ?? "",
      },
    });

    // Goals
    const goalsField = content.createDiv({ cls: "olen-onboarding-field" });
    goalsField.createEl("label", { cls: "olen-heading", text: "GOALS" });
    goalsField.createEl("div", {
      cls: "olen-body-italic",
      text: "One goal per line. You can refine these later.",
      attr: { style: "margin-bottom: 8px;" },
    });
    const goalsInput = goalsField.createEl("textarea", {
      cls: "olen-onboarding-textarea",
      attr: { placeholder: "Run a marathon\nRead 30 books\nLearn Spanish", rows: "4" },
    });
    // Pre-fill from existing goals
    goalsInput.value = this.plugin.settings.goals.map((g) => g.text).join("\n");

    // Homepage
    const homeField = content.createDiv({ cls: "olen-onboarding-field" });
    homeField.createEl("label", { cls: "olen-heading", text: "HOMEPAGE" });
    homeField.createEl("div", {
      cls: "olen-body-italic",
      text: "Vault file to open from the dashboard.",
      attr: { style: "margin-bottom: 8px;" },
    });
    const homeInput = homeField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: {
        type: "text",
        placeholder: "e.g. Home.md",
        value: this.plugin.settings.homepage ?? "",
      },
    });

    // Navigation (screen 0: no back)
    this.renderNav(content, {
      skip: 1,
      next: 1,
      onNext: () => {
        const name = nameInput.value.trim();
        if (name) this.plugin.settings.userName = name;
        this.plugin.settings.myWhy = whyInput.value.trim();
        this.plugin.settings.aphorism = aphInput.value.trim();
        this.plugin.settings.homepage = homeInput.value.trim();

        // Parse goals
        const lines = goalsInput.value
          .split("\n")
          .map((l) => l.trim())
          .filter((l) => l.length > 0);
        const existingTexts = new Set(this.plugin.settings.goals.map((g) => g.text));
        for (const line of lines) {
          if (!existingTexts.has(line)) {
            this.plugin.settings.goals.push({
              id: crypto.randomUUID(),
              text: line,
              type: "title",
              category: "personal-growth",
              completed: false,
              subgoals: [],
            });
          }
        }

        this.plugin.saveSettings();
      },
    });
  }

  // ── Screen 1: "Know Yourself" (Personal Stats) ──────────

  private renderScreen1_Stats(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });
    const stats = this.plugin.settings.personalStats;

    content.createEl("div", {
      cls: "olen-display",
      text: "Know Yourself",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Used for weight tracking reminders and strength calculations. All optional.",
      attr: { style: "text-align: center; margin-bottom: 32px;" },
    });

    // Height
    const heightField = content.createDiv({ cls: "olen-onboarding-field" });
    heightField.createEl("label", { cls: "olen-heading", text: "HEIGHT (CM)" });
    const heightInput = heightField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "number", placeholder: "175", value: stats.height ? String(stats.height) : "" },
    });

    // Birthdate
    const birthField = content.createDiv({ cls: "olen-onboarding-field" });
    const birthLabel = birthField.createDiv({ cls: "olen-heading" });
    birthLabel.setText("BIRTHDATE");
    const ageSpan = birthLabel.createEl("span", {
      cls: "olen-data-sm",
      attr: { style: "margin-left: 8px; color: var(--olen-text-muted);" },
    });

    const birthInput = birthField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "text", placeholder: "YYYY-MM-DD", value: stats.birthdate ?? "" },
    });

    const updateAge = () => {
      const val = birthInput.value.trim();
      if (/^\d{4}-\d{2}-\d{2}$/.test(val)) {
        const born = new Date(val);
        const now = new Date();
        let age = now.getFullYear() - born.getFullYear();
        const m = now.getMonth() - born.getMonth();
        if (m < 0 || (m === 0 && now.getDate() < born.getDate())) age--;
        ageSpan.setText(`(${age} years old)`);
      } else {
        ageSpan.setText("");
      }
    };
    birthInput.addEventListener("input", updateAge);
    updateAge();

    // Current Weight
    const weightField = content.createDiv({ cls: "olen-onboarding-field" });
    weightField.createEl("label", { cls: "olen-heading", text: "CURRENT WEIGHT (KG)" });
    const weightInput = weightField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "number", placeholder: "75", value: stats.currentWeight ? String(stats.currentWeight) : "" },
    });

    // Weight Log Frequency
    const freqField = content.createDiv({ cls: "olen-onboarding-field" });
    freqField.createEl("label", { cls: "olen-heading", text: "WEIGHT LOG FREQUENCY" });
    const freqSelect = freqField.createEl("select", { cls: "olen-onboarding-input" });
    const freqOptions: { value: WeightLogFrequency; label: string }[] = [
      { value: "twice-a-week", label: "Twice a week" },
      { value: "every-week", label: "Every week" },
      { value: "every-2-weeks", label: "Every 2 weeks" },
      { value: "every-3-days", label: "Every 3 days" },
      { value: "every-5-days", label: "Every 5 days" },
    ];
    for (const opt of freqOptions) {
      const el = freqSelect.createEl("option", { text: opt.label, attr: { value: opt.value } });
      if (stats.weightLogFrequency === opt.value) el.selected = true;
    }

    // Sleep Time
    const sleepField = content.createDiv({ cls: "olen-onboarding-field" });
    const sleepLabel = sleepField.createDiv({ cls: "olen-heading" });
    sleepLabel.setText("SLEEP TIME");
    const sleepTimeSpan = sleepLabel.createEl("span", {
      cls: "olen-data-sm",
      attr: { style: "margin-left: 8px; color: var(--olen-text-muted);" },
    });

    const sleepInput = sleepField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "number", placeholder: "23", min: "0", max: "24", step: "0.5", value: stats.sleepTime ? String(stats.sleepTime) : "" },
    });

    const updateSleepLabel = () => {
      const val = parseFloat(sleepInput.value);
      if (!isNaN(val) && val >= 0 && val <= 24) {
        const h = Math.floor(val);
        const m = Math.round((val - h) * 60);
        const ampm = h >= 12 ? "pm" : "am";
        const h12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
        sleepTimeSpan.setText(`(${h12}:${String(m).padStart(2, "0")} ${ampm})`);
      } else {
        sleepTimeSpan.setText("");
      }
    };
    sleepInput.addEventListener("input", updateSleepLabel);
    updateSleepLabel();

    // Navigation
    this.renderNav(content, {
      back: 0,
      skip: 2,
      next: 2,
      onNext: () => {
        const h = parseInt(heightInput.value);
        if (!isNaN(h) && h > 0) stats.height = h;
        stats.birthdate = birthInput.value.trim();
        const w = parseFloat(weightInput.value);
        if (!isNaN(w) && w > 0) stats.currentWeight = w;
        stats.weightLogFrequency = freqSelect.value as WeightLogFrequency;
        const s = parseFloat(sleepInput.value);
        if (!isNaN(s) && s >= 0 && s <= 24) stats.sleepTime = s;
        this.plugin.saveSettings();
      },
    });
  }

  // ── Screen 2: "Choose Your Domains" (Categories) ────────

  private renderScreen2_Domains(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "Choose Your Domains",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Which paths do you walk?",
      attr: { style: "text-align: center; margin-bottom: 32px;" },
    });

    const categories: Category[] = ["body", "mind", "spirit"];
    const enabledCategories = new Set<Category>(categories);

    const grid = content.createDiv({ cls: "olen-onboarding-domains" });

    for (const cat of categories) {
      const meta = CATEGORY_META[cat];
      const card = grid.createDiv({ cls: "olen-onboarding-domain-card olen-onboarding-domain-active" });
      card.style.borderColor = meta.color;

      card.createEl("div", { cls: "olen-onboarding-domain-icon", text: meta.icon });
      card.createEl("div", { cls: "olen-onboarding-domain-label", text: meta.label });
      card.createEl("div", {
        cls: "olen-data-sm",
        text: cat.charAt(0).toUpperCase() + cat.slice(1),
      });

      // Activity preview under each card
      const groupActivities = ONBOARDING_ACTIVITIES.find((g) => g.category === cat);
      if (groupActivities) {
        const preview = groupActivities.activities.map((a) => `${a.emoji} ${a.name}`).join(", ");
        card.createEl("div", {
          cls: "olen-data-sm",
          text: preview,
          attr: { style: "margin-top: 8px; opacity: 0.6; font-size: 11px;" },
        });
      }

      card.addEventListener("click", () => {
        if (enabledCategories.has(cat)) {
          enabledCategories.delete(cat);
          card.classList.remove("olen-onboarding-domain-active");
          card.style.opacity = "0.4";
        } else {
          enabledCategories.add(cat);
          card.classList.add("olen-onboarding-domain-active");
          card.style.opacity = "1";
        }
      });
    }

    // Navigation
    this.renderNav(content, {
      back: 1,
      skip: 3,
      next: 3,
      onNext: () => {
        if (enabledCategories.size === 0) {
          new Notice("Select at least one domain");
          return false;
        }
        // Disable activities from unselected categories
        for (const activity of this.plugin.settings.activities) {
          if (!enabledCategories.has(activity.category)) {
            activity.enabled = false;
          }
        }
        this.plugin.saveSettings();
      },
    });
  }

  // ── Screens 3-8: Stubs (to be implemented) ──────────────

  private renderScreen3_Activities(root: HTMLElement): void {
    this.renderStubScreen(root, "Arm Your Activities", "Coming next \u2014 activity configuration.", 2, 4);
  }

  private renderScreen4_Routines(root: HTMLElement): void {
    this.renderStubScreen(root, "Routines", "Coming next \u2014 routine task setup.", 3, 5);
  }

  private renderScreen5_Theme(root: HTMLElement): void {
    this.renderStubScreen(root, "Choose Your Theme", "Coming next \u2014 theme selection.", 4, 6);
  }

  private renderScreen6_Calendar(root: HTMLElement): void {
    this.renderStubScreen(root, "Calendar", "Coming next \u2014 calendar integration.", 5, 7);
  }

  private renderScreen7_Personalizing(root: HTMLElement): void {
    this.renderStubScreen(root, "Personalizing...", "Coming next \u2014 the fun part.", 6, 8);
  }

  private renderScreen8_Launch(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen olen-onboarding-final" });

    content.createEl("div", {
      cls: "olen-display",
      text: "The Oracle Awakens",
      attr: { style: "text-align: center; margin-bottom: 16px; font-size: 40px;" },
    });

    content.createEl("div", {
      cls: "olen-body",
      text: `Welcome, ${this.plugin.settings.userName}. Your journey begins now.`,
      attr: { style: "text-align: center; margin-bottom: 8px;" },
    });

    if (this.plugin.settings.myWhy) {
      const whyCard = content.createDiv({ cls: "olen-card olen-onboarding-why-card" });
      whyCard.style.setProperty("--i", "0");
      whyCard.createEl("div", { cls: "olen-heading", text: "YOUR WHY" });
      whyCard.createEl("div", {
        cls: "olen-body-italic",
        text: `"${this.plugin.settings.myWhy}"`,
      });
    }

    const enabledCount = this.plugin.settings.activities.filter((a) => a.enabled).length;
    content.createEl("div", {
      cls: "olen-body",
      text: `${enabledCount} activities armed. The arena awaits.`,
      attr: { style: "text-align: center; margin: 24px 0;" },
    });

    // Navigation
    const actions = content.createDiv({ cls: "olen-onboarding-actions" });

    const backBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "\u2190 BACK",
    });
    backBtn.addEventListener("click", () => this.goto(7));

    const enterBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-btn-large",
      text: "ENTER THE ARENA",
    });
    enterBtn.addEventListener("click", async () => {
      this.plugin.settings.onboardingComplete = true;
      await this.plugin.saveSettings();
      new Notice("Welcome to Olen. Your journey begins.");
      this.leaf.detach();
      this.plugin.activateDashboard();
    });
  }

  /** Generic stub for screens not yet implemented */
  private renderStubScreen(
    root: HTMLElement,
    title: string,
    subtitle: string,
    back: number,
    next: number,
  ): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });
    content.createEl("div", {
      cls: "olen-display",
      text: title,
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: subtitle,
      attr: { style: "text-align: center; margin-bottom: 32px; opacity: 0.5;" },
    });

    this.renderNav(content, { back, skip: next, next });
  }
}
