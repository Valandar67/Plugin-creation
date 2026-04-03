// ============================================================
// Olen — Onboarding Wizard (12-screen flow)
// 3 intro screens + 9 configuration screens
// ============================================================

import { ItemView, WorkspaceLeaf, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { Category, WeightLogFrequency, OlenThemeMode, PreferredTime } from "../types";
import { VIEW_TYPE_ONBOARDING } from "../constants";
import { ONBOARDING_ACTIVITIES, buildActivityConfig, CATEGORY_META } from "../data/defaultActivities";
import { THEME_PRESETS, THEME_LABELS } from "../data/themes";
import { applyAccentColor } from "../utils/accentColor";

const SCREEN_LABELS = [
  "Welcome", "How It Works", "Tartarus",
  "Identity", "Stats", "Domains", "Activities",
  "Routines", "Theme", "Calendar", "Personalizing", "Launch",
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

    // Apply user's Obsidian accent color
    if (this.plugin.obsidianAccentColor) {
      applyAccentColor(root, this.plugin.obsidianAccentColor);
    }

    this.renderProgressDots(root);

    switch (this.currentScreen) {
      case 0: this.renderIntro0_Welcome(root); break;
      case 1: this.renderIntro1_HowItWorks(root); break;
      case 2: this.renderIntro2_Tartarus(root); break;
      case 3: this.renderScreen0_Identity(root); break;
      case 4: this.renderScreen1_Stats(root); break;
      case 5: this.renderScreen2_Domains(root); break;
      case 6: this.renderScreen3_Activities(root); break;
      case 7: this.renderScreen4_Routines(root); break;
      case 8: this.renderScreen5_Theme(root); break;
      case 9: this.renderScreen6_Calendar(root); break;
      case 10: this.renderScreen7_Personalizing(root); break;
      case 11: this.renderScreen8_Launch(root); break;
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
        text: opts.nextLabel ?? "NEXT \u2192",
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

  // ── Intro 0: "Welcome to Olen" ───────────────────────────

  private renderIntro0_Welcome(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });
    content.setAttribute("style", "display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 450px; text-align: center;");

    content.createEl("div", {
      cls: "olen-display",
      text: "Welcome to Olen",
      attr: { style: "margin-bottom: 12px; font-size: 42px;" },
    });

    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Your life-operating system",
      attr: { style: "margin-bottom: 32px; font-size: 16px; opacity: 0.7;" },
    });

    content.createEl("div", {
      cls: "olen-body",
      text: "Olen helps you build discipline through habit tracking, daily planning, and progress visualization — all inside Obsidian.",
      attr: { style: "max-width: 400px; margin-bottom: 12px; line-height: 1.7;" },
    });

    content.createEl("div", {
      cls: "olen-body",
      text: "This wizard will walk you through setting up your activities, routines, theme, and more. You can always change these later in Settings.",
      attr: { style: "max-width: 400px; margin-bottom: 40px; line-height: 1.7; opacity: 0.6;" },
    });

    this.renderNav(content, { next: 1, nextLabel: "LET'S GO \u2192" });
  }

  // ── Intro 1: "How It Works" ────────────────────────────

  private renderIntro1_HowItWorks(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "How It Works",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Four pillars that power your daily system.",
      attr: { style: "text-align: center; margin-bottom: 32px;" },
    });

    const pillars = [
      { icon: "\u2694\uFE0F", title: "Activities", desc: "Track habits across Body, Mind, and Spirit domains. Set weekly targets and watch your consistency grow." },
      { icon: "\u{1F4C5}", title: "YOUR DAY", desc: "A daily schedule built from your activities and calendar. Know exactly what to do and when." },
      { icon: "\u{1F3AF}", title: "Workspaces", desc: "Focused sessions with timers and completion tracking. Enter a workspace, do the work, log the result." },
      { icon: "\u{1F4C8}", title: "Progress", desc: "XP, streaks, weekly rhythm, and analytics. See your discipline visualized over time." },
    ];

    const grid = content.createDiv({ cls: "olen-onboarding-domains", attr: { style: "grid-template-columns: repeat(2, 1fr);" } });

    for (const p of pillars) {
      const card = grid.createDiv({ cls: "olen-onboarding-domain-card olen-onboarding-domain-active" });
      card.style.cursor = "default";
      card.createEl("div", { cls: "olen-onboarding-domain-icon", text: p.icon });
      card.createEl("div", { cls: "olen-onboarding-domain-label", text: p.title, attr: { style: "font-weight: 600; margin-bottom: 6px;" } });
      card.createEl("div", { cls: "olen-data-sm", text: p.desc, attr: { style: "opacity: 0.7; line-height: 1.5;" } });
    }

    this.renderNav(content, {
      back: 0,
      next: 2,
    });
  }

  // ── Intro 2: "The Tartarus Game" ─────────────────────

  private renderIntro2_Tartarus(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "The Tartarus Game",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "In case you want to gamify your habit tracking, Tartarus turns it into a mythological RPG with real stakes and no unnecessary gimmicks.",
      attr: { style: "text-align: center; margin-bottom: 24px;" },
    });

    // Check if Tartarus is installed
    const tartarusPlugin = (this.app as any).plugins?.plugins?.["tartarus"]
      ?? (this.app as any).plugins?.plugins?.["mythological-habit-tracker"];
    const isTartarusInstalled = !!tartarusPlugin;

    // If Tartarus is not installed, ensure the setting is OFF
    if (!isTartarusInstalled) {
      this.plugin.settings.enableTartarus = false;
      this.plugin.saveSettings();
    }

    // Explanation card
    const card = content.createDiv({ cls: "olen-card", attr: { style: "padding: 20px; margin-bottom: 24px;" } });
    card.style.setProperty("--i", "0");

    if (!isTartarusInstalled) {
      card.createEl("div", {
        cls: "olen-body",
        text: "Tartarus is not currently installed. Install it to unlock boss fights, mythological ranks, and penance mechanics.",
        attr: { style: "margin-bottom: 16px; line-height: 1.7; opacity: 0.8;" },
      });
    } else {
      card.createEl("div", {
        cls: "olen-body",
        text: "Tartarus is installed and ready. Olen tracks your discipline. Tartarus turns it into a game.",
        attr: { style: "margin-bottom: 16px; line-height: 1.7;" },
      });
    }

    // Feature list
    const features = [
      "\u2694\uFE0F Boss fights tied to your weekly targets",
      "\u{1F3C6} 14 mythological ranks to climb",
      "\u{1F525} Neglect penalties and Tartarus penance mode",
      "\u{1F4A0} Dynamic titles based on your category balance",
    ];
    const featureList = card.createDiv({ attr: { style: "padding-left: 4px;" } });
    for (const f of features) {
      featureList.createEl("div", {
        cls: "olen-body",
        text: f,
        attr: { style: "margin-bottom: 8px; opacity: 0.8;" },
      });
    }

    if (!isTartarusInstalled) {
      // "View on GitHub" button — only when Tartarus is NOT installed
      content.createEl("a", {
        cls: "olen-onboarding-btn olen-onboarding-btn-secondary",
        text: "View on GitHub",
        attr: {
          href: "https://github.com/Val-49/Tartarus",
          target: "_blank",
          style: "display: inline-block; text-align: center; margin-bottom: 20px; text-decoration: none; cursor: pointer;",
        },
      });
    }

    if (isTartarusInstalled) {
      // Toggle — only when Tartarus IS installed
      const toggleRow = content.createDiv({
        attr: { style: "display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);" },
      });

      const toggleInfo = toggleRow.createDiv();
      toggleInfo.createEl("div", {
        cls: "olen-heading",
        text: "ENABLE TARTARUS",
      });
      toggleInfo.createEl("div", {
        cls: "olen-data-sm",
        text: "Turn off for a simpler experience without bosses or ranks.",
        attr: { style: "opacity: 0.6; margin-top: 4px;" },
      });

      const toggle = toggleRow.createEl("input", {
        attr: { type: "checkbox", style: "width: 20px; height: 20px; accent-color: var(--accent-gold, #d4a843); cursor: pointer; flex-shrink: 0; margin-left: 16px;" },
      }) as HTMLInputElement;
      toggle.checked = this.plugin.settings.enableTartarus !== false;
      toggle.addEventListener("change", () => {
        this.plugin.settings.enableTartarus = toggle.checked;
      });
    }

    this.renderNav(content, {
      back: 1,
      next: 3,
      onNext: () => {
        this.plugin.saveSettings();
      },
    });
  }

  // ── Screen 0: "About You" (Identity) ────────

  private renderScreen0_Identity(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "About You",
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
        value: (this.plugin.settings.userName && this.plugin.settings.userName !== "User" && this.plugin.settings.userName !== "Warrior") ? this.plugin.settings.userName : "",
      },
    });

    // Gender
    const genderField = content.createDiv({ cls: "olen-onboarding-field" });
    genderField.createEl("label", { cls: "olen-heading", text: "GENDER" });
    genderField.createEl("div", {
      cls: "olen-body-italic",
      text: "This helps personalize your experience.",
      attr: { style: "margin-bottom: 8px;" },
    });
    const genderSelect = genderField.createEl("select", { cls: "olen-onboarding-input" });
    const genderOptions: { value: string; label: string }[] = [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ];
    for (const opt of genderOptions) {
      const el = genderSelect.createEl("option", { text: opt.label, attr: { value: opt.value } });
      if (this.plugin.settings.personalStats.gender === opt.value) el.selected = true;
    }

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
      attr: { placeholder: "Get stronger\nLearn a new skill\nBuild a habit", rows: "4" },
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

    // Navigation
    this.renderNav(content, {
      back: 2,
      skip: 4,
      next: 4,
      onNext: () => {
        const name = nameInput.value.trim();
        if (name) this.plugin.settings.userName = name;
        this.plugin.settings.personalStats.gender = genderSelect.value as any;
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
      text: "Used for weight tracking, strength calculations, and Memento Mori. All optional.",
      attr: { style: "text-align: center; margin-bottom: 32px;" },
    });

    // Height
    const heightField = content.createDiv({ cls: "olen-onboarding-field" });
    heightField.createEl("label", { cls: "olen-heading", text: "HEIGHT (CM)" });
    const heightInput = heightField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "number", placeholder: "e.g. 170", value: stats.height ? String(stats.height) : "" },
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
      attr: { type: "number", placeholder: "e.g. 70", value: stats.currentWeight ? String(stats.currentWeight) : "" },
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

    // Memento Mori toggle
    const mementoField = content.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-top: 16px;" } });
    const mementoToggleRow = mementoField.createDiv({
      attr: { style: "display: flex; align-items: center; justify-content: space-between; padding: 16px 20px; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);" },
    });
    const mementoInfo = mementoToggleRow.createDiv();
    mementoInfo.createEl("div", { cls: "olen-heading", text: "MEMENTO MORI" });
    mementoInfo.createEl("div", {
      cls: "olen-data-sm",
      text: "A reality wake-up call showing how much of your life has passed. Turn this off if you find it too macabre.",
      attr: { style: "opacity: 0.6; margin-top: 4px; max-width: 260px;" },
    });
    const hidden = this.plugin.settings.devConfig.hiddenSections;
    const mementoToggle = mementoToggleRow.createEl("input", {
      attr: { type: "checkbox", style: "width: 20px; height: 20px; accent-color: var(--accent-gold, #d4a843); cursor: pointer; flex-shrink: 0; margin-left: 16px;" },
    }) as HTMLInputElement;
    mementoToggle.checked = !hidden.includes("mementomori");

    // Navigation
    this.renderNav(content, {
      back: 3,
      skip: 5,
      next: 5,
      onNext: () => {
        const h = parseInt(heightInput.value);
        if (!isNaN(h) && h > 0) stats.height = h;
        stats.birthdate = birthInput.value.trim();
        const w = parseFloat(weightInput.value);
        if (!isNaN(w) && w > 0) stats.currentWeight = w;
        stats.weightLogFrequency = freqSelect.value as WeightLogFrequency;
        const s = parseFloat(sleepInput.value);
        if (!isNaN(s) && s >= 0 && s <= 24) stats.sleepTime = s;

        // Memento Mori toggle
        const idx = this.plugin.settings.devConfig.hiddenSections.indexOf("mementomori");
        if (mementoToggle.checked && idx !== -1) {
          this.plugin.settings.devConfig.hiddenSections.splice(idx, 1);
        } else if (!mementoToggle.checked && idx === -1) {
          this.plugin.settings.devConfig.hiddenSections.push("mementomori");
        }

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
    const enabledCategories = new Set<Category>();

    const grid = content.createDiv({ cls: "olen-onboarding-domains" });

    for (const cat of categories) {
      const meta = CATEGORY_META[cat];
      const card = grid.createDiv({ cls: "olen-onboarding-domain-card" });
      card.style.borderColor = meta.color;
      card.style.opacity = "0.4";

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
      back: 4,
      skip: 6,
      next: 6,
      onNext: () => {
        if (enabledCategories.size === 0) {
          new Notice("Select at least one domain");
          return false;
        }
        // Pre-create activities for selected categories if they don't exist yet
        for (const group of ONBOARDING_ACTIVITIES) {
          if (!enabledCategories.has(group.category)) continue;
          for (const template of group.activities) {
            if (!this.plugin.settings.activities.some((a) => a.id === template.id)) {
              this.plugin.settings.activities.push(buildActivityConfig(template, group.category));
            }
          }
        }
        // Enable activities from selected categories, disable from unselected
        for (const activity of this.plugin.settings.activities) {
          if (enabledCategories.has(activity.category)) {
            activity.enabled = true;
          } else {
            activity.enabled = false;
          }
        }
        this.plugin.saveSettings();
      },
    });
  }

  // ── Screen 3: "Arm Your Activities" ──────────────────────

  private renderScreen3_Activities(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "Arm Your Activities",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Toggle activities on or off. Expand to configure.",
      attr: { style: "text-align: center; margin-bottom: 24px;" },
    });

    const activitiesEl = content.createDiv({ cls: "olen-onboarding-activities" });

    for (const group of ONBOARDING_ACTIVITIES) {
      const meta = CATEGORY_META[group.category];
      const groupEl = activitiesEl.createDiv({ cls: "olen-onboarding-activity-group" });
      groupEl.createEl("div", {
        cls: "olen-heading",
        text: `${meta.icon} ${meta.label}`,
        attr: { style: `color: ${meta.color}` },
      });

      for (const template of group.activities) {
        let existing = this.plugin.settings.activities.find((a) => a.id === template.id);
        const isEnabled = existing ? existing.enabled : false;

        // If not yet in settings, add it as disabled — user must opt in
        // Guard against duplicates from re-renders
        if (!existing) {
          const newActivity = buildActivityConfig(template, group.category);
          // Double-check before pushing (prevents duplicates on re-render)
          if (!this.plugin.settings.activities.some((a) => a.id === template.id)) {
            this.plugin.settings.activities.push(newActivity);
            existing = newActivity;
          }
        }

        const row = groupEl.createDiv({ cls: "olen-onboarding-activity-row" });

        const toggle = row.createEl("input", {
          cls: "olen-onboarding-toggle",
          attr: { type: "checkbox" },
        }) as HTMLInputElement;
        toggle.checked = isEnabled;

        row.createEl("span", { text: `${template.emoji} ${template.name}` });
        row.createEl("span", {
          cls: "olen-data-sm",
          text: ` \u00B7 ${template.defaultWeeklyTarget}x/week \u00B7 ${template.defaultDuration}m`,
        });

        // Configure button
        const configBtn = row.createEl("button", {
          cls: "olen-btn olen-btn-ghost",
          text: "Configure",
          attr: { style: "margin-left: auto; font-size: 11px; padding: 2px 8px;" },
        });

        // Inline config panel (hidden by default)
        const configPanel = groupEl.createDiv({
          cls: "olen-onboarding-activity-config",
          attr: { style: "display: none; padding: 8px 0 16px 28px;" },
        });

        const activity = this.plugin.settings.activities.find((a) => a.id === template.id)!;

        // Folder
        const folderRow = configPanel.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
        folderRow.createEl("label", { cls: "olen-data-sm", text: "Folder" });
        const folderInput = folderRow.createEl("input", {
          cls: "olen-onboarding-input",
          attr: { type: "text", value: activity.folder, style: "font-size: 12px; padding: 6px 10px;" },
        });

        // Property
        const propRow = configPanel.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
        propRow.createEl("label", { cls: "olen-data-sm", text: "Property" });
        const propInput = propRow.createEl("input", {
          cls: "olen-onboarding-input",
          attr: { type: "text", value: activity.property, style: "font-size: 12px; padding: 6px 10px;" },
        });

        // Weekly target (range 1-7)
        const targetRow = configPanel.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
        const targetLabel = targetRow.createDiv({ cls: "olen-data-sm" });
        targetLabel.setText(`Weekly target: ${activity.weeklyTarget}`);
        const targetRange = targetRow.createEl("input", {
          attr: { type: "range", min: "1", max: "7", value: String(activity.weeklyTarget), style: "width: 100%;" },
        }) as HTMLInputElement;
        targetRange.addEventListener("input", () => {
          targetLabel.setText(`Weekly target: ${targetRange.value}`);
        });

        // Duration
        const durRow = configPanel.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
        durRow.createEl("label", { cls: "olen-data-sm", text: "Duration (min)" });
        const durInput = durRow.createEl("input", {
          cls: "olen-onboarding-input",
          attr: { type: "number", value: String(activity.estimatedDuration), style: "font-size: 12px; padding: 6px 10px;" },
        });

        // Preferred time
        const timeRow = configPanel.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
        timeRow.createEl("label", { cls: "olen-data-sm", text: "Preferred time" });
        const timeSelect = timeRow.createEl("select", { cls: "olen-onboarding-input", attr: { style: "font-size: 12px; padding: 6px 10px;" } });
        for (const t of ["morning", "afternoon", "evening", "anytime"] as PreferredTime[]) {
          const opt = timeSelect.createEl("option", { text: t.charAt(0).toUpperCase() + t.slice(1), attr: { value: t } });
          if (activity.preferredTime === t) opt.selected = true;
        }

        configBtn.addEventListener("click", () => {
          const visible = configPanel.style.display !== "none";
          configPanel.style.display = visible ? "none" : "block";
          configBtn.setText(visible ? "Configure" : "Hide");
        });

        // Apply config changes on toggle
        const applyConfig = () => {
          activity.folder = folderInput.value.trim();
          activity.property = propInput.value.trim();
          activity.weeklyTarget = parseInt(targetRange.value);
          const dur = parseInt(durInput.value);
          if (!isNaN(dur) && dur > 0) activity.estimatedDuration = dur;
          activity.preferredTime = timeSelect.value as PreferredTime;
        };

        toggle.addEventListener("change", () => {
          activity.enabled = toggle.checked;
        });

        // Save config when panel inputs change
        for (const input of [folderInput, propInput, durInput, timeSelect, targetRange]) {
          input.addEventListener("change", () => applyConfig());
        }
      }
    }

    // --- Custom activity creation ---
    const addSection = content.createDiv({ attr: { style: "margin-top: 16px;" } });
    const addBtn = addSection.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "+ Create custom activity",
    });

    const customForm = addSection.createDiv({
      cls: "olen-onboarding-activity-config",
      attr: { style: "display: none; padding: 12px 0;" },
    });

    const makeField = (label: string, placeholder: string, type = "text") => {
      const f = customForm.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
      f.createEl("label", { cls: "olen-data-sm", text: label });
      return f.createEl("input", {
        cls: "olen-onboarding-input",
        attr: { type, placeholder, style: "font-size: 12px; padding: 6px 10px;" },
      });
    };

    const cName = makeField("Name", "e.g. Yoga");
    const cEmoji = makeField("Emoji", "e.g. \uD83E\uDDD8");
    const cCatField = customForm.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
    cCatField.createEl("label", { cls: "olen-data-sm", text: "Category" });
    const cCat = cCatField.createEl("select", { cls: "olen-onboarding-input", attr: { style: "font-size: 12px; padding: 6px 10px;" } });
    for (const c of ["body", "mind", "spirit"] as Category[]) {
      cCat.createEl("option", { text: c.charAt(0).toUpperCase() + c.slice(1), attr: { value: c } });
    }
    const cFolder = makeField("Folder", "Activities/Yoga");
    const cProp = makeField("Property", "Yoga");
    const cTarget = makeField("Weekly target", "3", "number");
    const cDur = makeField("Duration (min)", "30", "number");

    const saveCustomBtn = customForm.createEl("button", {
      cls: "olen-btn olen-btn-primary",
      text: "Add Activity",
      attr: { style: "margin-top: 8px;" },
    });

    addBtn.addEventListener("click", () => {
      customForm.style.display = customForm.style.display === "none" ? "block" : "none";
    });

    saveCustomBtn.addEventListener("click", () => {
      const name = cName.value.trim();
      if (!name) { new Notice("Activity name is required"); return; }
      const id = name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now();
      this.plugin.settings.activities.push({
        id,
        name,
        emoji: cEmoji.value.trim() || "\u2B50",
        category: cCat.value as Category,
        enabled: true,
        folder: cFolder.value.trim() || `Activities/${name}`,
        property: cProp.value.trim() || name,
        damagePerCompletion: 1,
        weeklyTarget: parseInt(cTarget.value) || 3,
        trackingMode: "daily",
        hasWorkspace: true,
        priority: 5,
        neglectThreshold: 3,
        preferredTime: "anytime",
        estimatedDuration: parseInt(cDur.value) || 30,
      });
      new Notice(`Added ${name}`);
      // Re-render to show the new activity
      this.renderScreen();
    });

    // Navigation
    this.renderNav(content, {
      back: 5,
      skip: 7,
      next: 7,
      onNext: () => {
        this.plugin.saveSettings();
      },
    });
  }

  private renderScreen4_Routines(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "Routines",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Routine tasks track personal upkeep \u2014 grooming, hygiene, recurring maintenance.",
      attr: { style: "text-align: center; margin-bottom: 24px;" },
    });

    const listEl = content.createDiv({ cls: "olen-onboarding-routines" });

    const renderRoutineList = () => {
      listEl.empty();
      const tasks = this.plugin.settings.templeTasks;

      for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const row = listEl.createDiv({
          cls: "olen-onboarding-activity-row",
          attr: { style: "align-items: center;" },
        });

        // Emoji input
        const emojiInput = row.createEl("input", {
          cls: "olen-onboarding-input",
          attr: { type: "text", value: task.emoji, style: "width: 44px; min-width: 44px; text-align: center; font-size: 16px; padding: 6px 4px; flex-shrink: 0;" },
        });
        emojiInput.addEventListener("change", () => { task.emoji = emojiInput.value.trim(); });

        // Name input
        const nameInput = row.createEl("input", {
          cls: "olen-onboarding-input",
          attr: { type: "text", value: task.name, style: "flex: 1; min-width: 100px; font-size: 13px; padding: 6px 10px;" },
        });
        nameInput.addEventListener("change", () => { task.name = nameInput.value.trim(); });

        // Interval
        row.createEl("span", { cls: "olen-data-sm", text: "every", attr: { style: "margin: 0 4px; flex-shrink: 0;" } });
        const intervalInput = row.createEl("input", {
          cls: "olen-onboarding-input",
          attr: { type: "number", value: String(task.intervalDays), min: "1", style: "width: 50px; min-width: 50px; font-size: 13px; padding: 6px; text-align: center; flex-shrink: 0;" },
        });
        row.createEl("span", { cls: "olen-data-sm", text: "d", attr: { style: "margin-left: 2px; flex-shrink: 0;" } });
        intervalInput.addEventListener("change", () => {
          const v = parseInt(intervalInput.value);
          if (!isNaN(v) && v > 0) task.intervalDays = v;
        });

        // Remove button
        const removeBtn = row.createEl("button", {
          cls: "olen-btn olen-btn-ghost",
          text: "\u2715",
          attr: { style: "margin-left: 8px; font-size: 14px; padding: 2px 6px; color: var(--olen-danger);" },
        });
        removeBtn.addEventListener("click", () => {
          tasks.splice(i, 1);
          renderRoutineList();
        });
      }
    };

    renderRoutineList();

    // Add routine button
    const addBtn = content.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "+ Add routine",
      attr: { style: "margin-top: 12px;" },
    });
    addBtn.addEventListener("click", () => {
      this.plugin.settings.templeTasks.push({
        id: "routine-" + Date.now(),
        name: "New routine",
        lastCompleted: null,
        intervalDays: 7,
        emoji: "\u2705",
      });
      renderRoutineList();
    });

    // Navigation
    this.renderNav(content, {
      back: 6,
      skip: 8,
      next: 8,
      onNext: () => {
        this.plugin.saveSettings();
      },
    });
  }

  private renderScreen5_Theme(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "Choose Your Theme",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Pick a visual style for your dashboard.",
      attr: { style: "text-align: center; margin-bottom: 24px;" },
    });

    let selectedTheme: OlenThemeMode = this.plugin.settings.themeMode;

    // Theme cards
    const themeGrid = content.createDiv({ cls: "olen-onboarding-domains" });
    const themeCards: HTMLElement[] = [];

    const themes: { mode: OlenThemeMode; subtitle: string }[] = [
      { mode: "dark", subtitle: "Pure black, warm amber glow" },
      { mode: "glass", subtitle: "Cool grey frosted glass" },
      { mode: "steamy", subtitle: "Luminous white, warm steam" },
    ];

    for (const { mode, subtitle } of themes) {
      const preset = THEME_PRESETS[mode];
      const card = themeGrid.createDiv({
        cls: "olen-onboarding-domain-card" + (selectedTheme === mode ? " olen-onboarding-domain-active" : ""),
        attr: { style: `border-color: ${preset.accentGold}; cursor: pointer;` },
      });

      card.createEl("div", {
        cls: "olen-onboarding-domain-label",
        text: THEME_LABELS[mode],
        attr: { style: "font-weight: 600; margin-bottom: 4px;" },
      });
      card.createEl("div", {
        cls: "olen-data-sm",
        text: subtitle,
        attr: { style: "margin-bottom: 8px;" },
      });

      // Color swatches
      const swatches = card.createDiv({ attr: { style: "display: flex; gap: 4px; justify-content: center;" } });
      for (const color of [preset.bgPrimary, preset.accentGold, preset.bodyColor, preset.mindColor, preset.spiritColor]) {
        swatches.createEl("div", {
          attr: { style: `width: 16px; height: 16px; border-radius: 50%; background: ${color}; border: 1px solid rgba(128,128,128,0.3);` },
        });
      }

      if (selectedTheme !== mode) card.style.opacity = "0.5";
      themeCards.push(card);

      card.addEventListener("click", () => {
        selectedTheme = mode;
        themeCards.forEach((c, idx) => {
          const isActive = themes[idx].mode === mode;
          c.classList.toggle("olen-onboarding-domain-active", isActive);
          c.style.opacity = isActive ? "1" : "0.5";
        });
      });
    }

    // Background image selection
    content.createEl("div", {
      cls: "olen-heading",
      text: "BACKGROUND IMAGE",
      attr: { style: "margin-top: 24px; margin-bottom: 8px;" },
    });

    // Images are copied to the plugin's install directory during build
    const pluginDir = this.plugin.manifest.dir ?? "";
    const bgImages = [
      { path: `${pluginDir}/Background-1.png`, label: "Background 1" },
      { path: `${pluginDir}/Background-2.png`, label: "Background 2" },
      { path: `${pluginDir}/Background-3.jpg`, label: "Background 3" },
    ];

    let selectedBg = this.plugin.settings.scrollingBackground;
    const bgGrid = content.createDiv({ attr: { style: "display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px;" } });
    const bgBtns: HTMLElement[] = [];

    const updateBgButtons = () => {
      bgBtns.forEach((b, idx) => {
        if (idx < bgImages.length) {
          b.className = "olen-btn " + (bgImages[idx].path === selectedBg ? "olen-btn-primary" : "olen-btn-secondary");
        }
      });
      noneBtn.className = "olen-btn " + (!selectedBg ? "olen-btn-primary" : "olen-btn-secondary");
    };

    for (const bg of bgImages) {
      const btn = bgGrid.createEl("button", {
        cls: "olen-btn " + (selectedBg === bg.path ? "olen-btn-primary" : "olen-btn-secondary"),
        text: bg.label,
        attr: { style: "font-size: 12px; padding: 6px 12px;" },
      });
      bgBtns.push(btn);

      btn.addEventListener("click", () => {
        selectedBg = bg.path;
        updateBgButtons();
        customBgInput.value = "";
      });
    }

    // None button
    const noneBtn = bgGrid.createEl("button", {
      cls: "olen-btn " + (!selectedBg ? "olen-btn-primary" : "olen-btn-secondary"),
      text: "None",
      attr: { style: "font-size: 12px; padding: 6px 12px;" },
    });
    noneBtn.addEventListener("click", () => {
      selectedBg = "";
      updateBgButtons();
      customBgInput.value = "";
    });

    // Custom path input
    const customBgInput = content.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "text", placeholder: "Or enter a custom vault path...", value: bgImages.some((b) => b.path === selectedBg) ? "" : selectedBg, style: "font-size: 12px; margin-bottom: 12px;" },
    });
    customBgInput.addEventListener("input", () => {
      const v = customBgInput.value.trim();
      if (v) {
        selectedBg = v;
        updateBgButtons();
      }
    });

    // Darkness slider
    const darknessField = content.createDiv({ cls: "olen-onboarding-field" });
    const darknessLabel = darknessField.createDiv({ cls: "olen-heading" });
    darknessLabel.setText(`BACKGROUND DARKNESS: ${this.plugin.settings.backgroundDarkness}%`);
    const darknessSlider = darknessField.createEl("input", {
      attr: { type: "range", min: "0", max: "100", value: String(this.plugin.settings.backgroundDarkness), style: "width: 100%;" },
    }) as HTMLInputElement;
    darknessSlider.addEventListener("input", () => {
      darknessLabel.setText(`BACKGROUND DARKNESS: ${darknessSlider.value}%`);
    });

    // Quote folder
    const quoteField = content.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-top: 12px;" } });
    quoteField.createEl("label", { cls: "olen-heading", text: "QUOTE FOLDER" });
    quoteField.createEl("div", {
      cls: "olen-body-italic",
      text: "Vault folder with .md quote files for the workspace completion screen.",
      attr: { style: "margin-bottom: 4px; font-size: 11px;" },
    });
    const quoteInput = quoteField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "text", placeholder: "e.g. Quotes/", value: this.plugin.settings.quoteFolderPath ?? "", style: "font-size: 12px;" },
    });

    // Navigation
    this.renderNav(content, {
      back: 7,
      skip: 9,
      next: 9,
      onNext: () => {
        this.plugin.settings.themeMode = selectedTheme;
        this.plugin.settings.scrollingBackground = selectedBg;
        this.plugin.settings.backgroundDarkness = parseInt(darknessSlider.value);
        this.plugin.settings.quoteFolderPath = quoteInput.value.trim();
        this.plugin.saveSettings();
      },
    });
  }

  private renderScreen6_Calendar(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });
    const cal = this.plugin.settings.calendar;

    content.createEl("div", {
      cls: "olen-display",
      text: "Calendar",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Connect your task sources to the daily schedule.",
      attr: { style: "text-align: center; margin-bottom: 24px;" },
    });

    const cardsGrid = content.createDiv({ cls: "olen-onboarding-domains" });

    // --- Daily Notes card ---
    const dnCard = cardsGrid.createDiv({
      cls: "olen-onboarding-domain-card" + (cal.enableDailyNotes ? " olen-onboarding-domain-active" : ""),
      attr: { style: "cursor: pointer;" },
    });
    dnCard.createEl("div", { cls: "olen-onboarding-domain-icon", text: "\uD83D\uDDD3\uFE0F" });
    dnCard.createEl("div", { cls: "olen-onboarding-domain-label", text: "Daily Notes" });
    if (!cal.enableDailyNotes) dnCard.style.opacity = "0.4";

    // Daily notes config (shown below grid)
    const dnConfig = content.createDiv({ attr: { style: cal.enableDailyNotes ? "margin-top: 16px;" : "display: none; margin-top: 16px;" } });
    const dnFolderField = dnConfig.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
    dnFolderField.createEl("label", { cls: "olen-data-sm", text: "Daily notes folder" });
    const dnFolderInput = dnFolderField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "text", placeholder: "e.g. Daily Notes/", value: cal.dailyNotesFolder, style: "font-size: 12px; padding: 6px 10px;" },
    });
    const dnFormatField = dnConfig.createDiv({ cls: "olen-onboarding-field", attr: { style: "margin-bottom: 8px;" } });
    dnFormatField.createEl("label", { cls: "olen-data-sm", text: "Filename format" });
    const dnFormatInput = dnFormatField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: { type: "text", placeholder: "YYYY-MM-DD", value: cal.dailyNotesFormat, style: "font-size: 12px; padding: 6px 10px;" },
    });

    dnCard.addEventListener("click", () => {
      cal.enableDailyNotes = !cal.enableDailyNotes;
      dnCard.classList.toggle("olen-onboarding-domain-active", cal.enableDailyNotes);
      dnCard.style.opacity = cal.enableDailyNotes ? "1" : "0.4";
      dnConfig.style.display = cal.enableDailyNotes ? "block" : "none";
    });

    // --- Tasks Plugin card ---
    const tpCard = cardsGrid.createDiv({
      cls: "olen-onboarding-domain-card" + (cal.enableTasksPlugin ? " olen-onboarding-domain-active" : ""),
      attr: { style: "cursor: pointer;" },
    });
    tpCard.createEl("div", { cls: "olen-onboarding-domain-icon", text: "\u2705" });
    tpCard.createEl("div", { cls: "olen-onboarding-domain-label", text: "Tasks Plugin" });
    tpCard.createEl("div", { cls: "olen-data-sm", text: "Obsidian Tasks integration", attr: { style: "opacity: 0.6;" } });
    if (!cal.enableTasksPlugin) tpCard.style.opacity = "0.4";

    tpCard.addEventListener("click", () => {
      cal.enableTasksPlugin = !cal.enableTasksPlugin;
      tpCard.classList.toggle("olen-onboarding-domain-active", cal.enableTasksPlugin);
      tpCard.style.opacity = cal.enableTasksPlugin ? "1" : "0.4";
    });

    // --- Quick Tasks card ---
    const qtCard = cardsGrid.createDiv({
      cls: "olen-onboarding-domain-card" + (cal.enableQuickTasks ? " olen-onboarding-domain-active" : ""),
      attr: { style: "cursor: pointer;" },
    });
    qtCard.createEl("div", { cls: "olen-onboarding-domain-icon", text: "\u26A1" });
    qtCard.createEl("div", { cls: "olen-onboarding-domain-label", text: "Quick Tasks" });
    qtCard.createEl("div", { cls: "olen-data-sm", text: "Inline quick-add tasks", attr: { style: "opacity: 0.6;" } });
    if (!cal.enableQuickTasks) qtCard.style.opacity = "0.4";

    qtCard.addEventListener("click", () => {
      cal.enableQuickTasks = !cal.enableQuickTasks;
      qtCard.classList.toggle("olen-onboarding-domain-active", cal.enableQuickTasks);
      qtCard.style.opacity = cal.enableQuickTasks ? "1" : "0.4";
    });

    // Navigation
    this.renderNav(content, {
      back: 8,
      skip: 10,
      next: 10,
      onNext: () => {
        cal.dailyNotesFolder = dnFolderInput.value.trim();
        cal.dailyNotesFormat = dnFormatInput.value.trim() || "YYYY-MM-DD";
        this.plugin.saveSettings();
      },
    });
  }

  // ── Screen 7: "Personalizing" (Funny fake loading) ──────

  private renderScreen7_Personalizing(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });
    content.setAttribute("style", "display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 400px;");

    const messages = [
      "Calibrating your discipline matrix...",
      "Synergizing your paradigms...",
      "Optimizing serotonin delivery pipeline...",
      "Monetizing your attention span...",
      "Injecting motivational nanobots...",
      "Deploying paywall in...",
    ];
    const TOTAL_STEPS = messages.length + 3; // +3 for the "3", "2", "1" countdown

    const statusEl = content.createEl("div", {
      cls: "olen-body",
      attr: { style: "text-align: center; margin-bottom: 16px; min-height: 24px;" },
    });

    // Countdown number (hidden initially)
    const countdownEl = content.createEl("div", {
      cls: "olen-display",
      attr: { style: "text-align: center; font-size: 48px; margin-bottom: 16px; opacity: 0; transition: opacity 0.3s ease;" },
    });

    // Progress bar container
    const barOuter = content.createDiv({
      attr: { style: "width: 280px; height: 8px; border-radius: 4px; background: rgba(255,255,255,0.08); overflow: hidden; margin-bottom: 24px;" },
    });
    const barInner = barOuter.createDiv({
      attr: { style: "width: 0%; height: 100%; border-radius: 4px; background: var(--accent-gold, #d4a843); transition: width 1.2s ease;" },
    });

    // Punchline area (hidden initially)
    const punchline = content.createDiv({
      attr: { style: "text-align: center; opacity: 0; transition: opacity 0.6s ease;" },
    });

    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // Animate through messages then countdown
    let i = 0;
    const step = () => {
      if (i < messages.length) {
        statusEl.setText(messages[i]);
        barInner.style.width = `${((i + 1) / TOTAL_STEPS) * 100}%`;
        i++;
        timeouts.push(setTimeout(step, 1200));
      } else if (i < messages.length + 3) {
        // Countdown: 3, 2, 1
        const num = messages.length + 3 - i; // 3, 2, 1
        countdownEl.style.opacity = "1";
        countdownEl.setText(String(num));
        barInner.style.width = `${((i + 1) / TOTAL_STEPS) * 100}%`;
        i++;
        timeouts.push(setTimeout(step, 800));
      } else {
        // Record-scratch moment
        statusEl.setText("");
        countdownEl.style.display = "none";
        barOuter.style.display = "none";
        punchline.style.opacity = "1";

        punchline.createEl("div", {
          cls: "olen-display",
          text: "Just kidding.",
          attr: { style: "font-size: 28px; margin-bottom: 12px;" },
        });
        punchline.createEl("div", {
          cls: "olen-body",
          text: "I actually saved your preferences. All of them. For free.",
          attr: { style: "margin-bottom: 4px;" },
        });
        punchline.createEl("div", {
          cls: "olen-body-italic",
          text: "Wild concept, right?",
          attr: { style: "margin-bottom: 24px; opacity: 0.6;" },
        });
        punchline.createEl("div", {
          cls: "olen-body",
          text: `You're good to go, ${this.plugin.settings.userName}.`,
          attr: { style: "font-weight: 600; margin-bottom: 24px;" },
        });

        // Manual advance only — no auto-timeout
        const actions = punchline.createDiv({ cls: "olen-onboarding-actions" });
        actions.style.justifyContent = "center";
        const nextBtn = actions.createEl("button", {
          cls: "olen-btn olen-btn-primary olen-btn-large",
          text: "NEXT \u2192",
        });
        nextBtn.style.flex = "0 1 auto";
        nextBtn.style.minWidth = "140px";
        nextBtn.addEventListener("click", () => {
          timeouts.forEach(clearTimeout);
          this.goto(11);
        });
      }
    };

    // Start the sequence
    timeouts.push(setTimeout(step, 500));
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
      text: `${enabledCount} activities armed. Olen awaits.`,
      attr: { style: "text-align: center; margin: 24px 0;" },
    });

    // Navigation
    const actions = content.createDiv({ cls: "olen-onboarding-actions" });

    const backBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "\u2190 BACK",
    });
    backBtn.addEventListener("click", () => this.goto(10));

    const enterBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-btn-large",
      text: "BEGIN",
    });
    enterBtn.addEventListener("click", async () => {
      this.plugin.settings.onboardingComplete = true;
      await this.plugin.saveSettings();
      new Notice("Welcome to Olen. Your journey begins.");
      this.leaf.detach();
      // Give workspace time to process leaf detachment before opening dashboard
      await new Promise(resolve => setTimeout(resolve, 50));
      await this.plugin.activateDashboard();
    });
  }

}
