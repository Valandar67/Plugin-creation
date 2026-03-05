// ============================================================
// Olen — Onboarding View
// 4-screen first-launch flow (§III)
// ============================================================

import { ItemView, WorkspaceLeaf, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { ActivityConfig, Category } from "../types";
import { ONBOARDING_ACTIVITIES, buildActivityConfig, CATEGORY_META } from "../data/defaultActivities";
import { DEFAULT_ACTIVITIES } from "../constants";

export const VIEW_TYPE_ONBOARDING = "olen-onboarding-view";

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

  private renderScreen(): void {
    this.contentEl.empty();
    const root = this.contentEl.createDiv({ cls: "olen-dashboard olen-onboarding" });

    switch (this.currentScreen) {
      case 0:
        this.renderScreen1_Identity(root);
        break;
      case 1:
        this.renderScreen2_Domains(root);
        break;
      case 2:
        this.renderScreen3_Activities(root);
        break;
      case 3:
        this.renderScreen4_Enter(root);
        break;
    }
  }

  // --- Screen 1: "Who Are You Becoming?" ---

  private renderScreen1_Identity(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "Who Are You Becoming?",
      attr: { style: "text-align: center; margin-bottom: 32px;" },
    });

    // Name input
    const nameField = content.createDiv({ cls: "olen-onboarding-field" });
    nameField.createEl("label", { cls: "olen-heading", text: "YOUR NAME" });
    const nameInput = nameField.createEl("input", {
      cls: "olen-onboarding-input",
      attr: {
        type: "text",
        placeholder: "What should I call you?",
        value: this.plugin.settings.userName !== "Warrior" ? this.plugin.settings.userName : "",
      },
    });

    // My Why card
    const whyField = content.createDiv({ cls: "olen-onboarding-field" });
    whyField.createEl("label", { cls: "olen-heading", text: "MY WHY" });
    whyField.createEl("div", {
      cls: "olen-body-italic",
      text: "Your core motivation — the fire that drives your discipline.",
      attr: { style: "margin-bottom: 8px;" },
    });
    const whyInput = whyField.createEl("textarea", {
      cls: "olen-onboarding-textarea",
      attr: {
        placeholder: "I pursue discipline because...",
        rows: "3",
      },
    });
    whyInput.value = this.plugin.settings.myWhy ?? "";

    // Next button
    const actions = content.createDiv({ cls: "olen-onboarding-actions" });
    const nextBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-btn-large",
      text: "CONTINUE →",
    });
    nextBtn.addEventListener("click", () => {
      const name = nameInput.value.trim();
      if (name) this.plugin.settings.userName = name;
      this.plugin.settings.myWhy = whyInput.value.trim();
      this.plugin.saveSettings();
      this.currentScreen = 1;
      this.renderScreen();
    });
  }

  // --- Screen 2: Choose Domains ---

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
    const actions = content.createDiv({ cls: "olen-onboarding-actions" });

    const backBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "← BACK",
    });
    backBtn.addEventListener("click", () => {
      this.currentScreen = 0;
      this.renderScreen();
    });

    const nextBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-btn-large",
      text: "CONTINUE →",
    });
    nextBtn.addEventListener("click", () => {
      if (enabledCategories.size === 0) {
        new Notice("Select at least one domain");
        return;
      }
      // Store selected categories (disable activities from unselected)
      for (const activity of this.plugin.settings.activities) {
        if (!enabledCategories.has(activity.category)) {
          activity.enabled = false;
        }
      }
      this.plugin.saveSettings();
      this.currentScreen = 2;
      this.renderScreen();
    });
  }

  // --- Screen 3: Pick Activities & Choose Systems ---

  private renderScreen3_Activities(root: HTMLElement): void {
    const content = root.createDiv({ cls: "olen-onboarding-screen" });

    content.createEl("div", {
      cls: "olen-display",
      text: "Your Activities",
      attr: { style: "text-align: center; margin-bottom: 12px;" },
    });
    content.createEl("div", {
      cls: "olen-body-italic",
      text: "Toggle activities on or off. Customize settings later.",
      attr: { style: "text-align: center; margin-bottom: 24px;" },
    });

    // Build activity list from current settings + onboarding templates
    const existingIds = new Set(this.plugin.settings.activities.map((a) => a.id));

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
        const existing = this.plugin.settings.activities.find((a) => a.id === template.id);
        const isEnabled = existing ? existing.enabled : false;

        const row = groupEl.createDiv({ cls: "olen-onboarding-activity-row" });

        const toggle = row.createEl("input", {
          cls: "olen-onboarding-toggle",
          attr: { type: "checkbox" },
        }) as HTMLInputElement;
        toggle.checked = isEnabled;

        row.createEl("span", { text: `${template.emoji} ${template.name}` });
        row.createEl("span", {
          cls: "olen-data-sm",
          text: ` · ${template.defaultWeeklyTarget}x/week · ${template.defaultDuration}m`,
        });

        toggle.addEventListener("change", () => {
          if (existing) {
            existing.enabled = toggle.checked;
          } else if (toggle.checked) {
            // Add new activity
            this.plugin.settings.activities.push(
              buildActivityConfig(template, group.category)
            );
          }
        });
      }
    }

    // Navigation
    const actions = content.createDiv({ cls: "olen-onboarding-actions" });

    const backBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "← BACK",
    });
    backBtn.addEventListener("click", () => {
      this.currentScreen = 1;
      this.renderScreen();
    });

    const nextBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-btn-large",
      text: "CONTINUE →",
    });
    nextBtn.addEventListener("click", () => {
      this.plugin.saveSettings();
      this.currentScreen = 3;
      this.renderScreen();
    });
  }

  // --- Screen 4: "The Oracle Awakens" ---

  private renderScreen4_Enter(root: HTMLElement): void {
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

    // Summary
    const enabledCount = this.plugin.settings.activities.filter((a) => a.enabled).length;
    content.createEl("div", {
      cls: "olen-body",
      text: `${enabledCount} activities armed. The arena awaits.`,
      attr: { style: "text-align: center; margin: 24px 0;" },
    });

    // Enter button
    const actions = content.createDiv({ cls: "olen-onboarding-actions" });

    const backBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "← BACK",
    });
    backBtn.addEventListener("click", () => {
      this.currentScreen = 2;
      this.renderScreen();
    });

    const enterBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary olen-btn-large",
      text: "ENTER THE ARENA",
    });
    enterBtn.addEventListener("click", async () => {
      this.plugin.settings.onboardingComplete = true;
      await this.plugin.saveSettings();
      new Notice("Welcome to Olen. Your journey begins.");

      // Close onboarding and open dashboard
      this.leaf.detach();
      this.plugin.activateDashboard();
    });
  }
}
