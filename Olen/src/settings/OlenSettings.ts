// ============================================================
// Olen — Settings Tab
// Collapsible sections for all plugin configuration
// ============================================================

import { App, PluginSettingTab, Setting, TextComponent, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { ActivityConfig, Category, TempleTask, Gender, WeightLogFrequency, OlenThemeMode } from "../types";
import { DEFAULT_ACTIVITIES, DEFAULT_DEV_CONFIG, DEFAULT_POMODORO_SETTINGS, LIFE_EXPECTANCY_MALE, LIFE_EXPECTANCY_FEMALE } from "../constants";
import { THEME_PRESETS, THEME_LABELS } from "../data/themes";
import { BUILTIN_TEMPLATE_IDS } from "../templates/builtins";
import { toLocalDateStr } from "../utils/completions";

export class OlenSettingTab extends PluginSettingTab {
  plugin: OlenPlugin;

  constructor(app: App, plugin: OlenPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.addClass("olen-settings");

    // Header
    containerEl.createEl("div", {
      text: "Olen",
      attr: { style: "font-size: 1.4em; font-weight: 700; margin-bottom: 4px; padding: 8px 0;" },
    });
    containerEl.createEl("div", {
      text: "Mythological Life-Operating System",
      attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 16px;" },
    });

    // Quick status bar
    this.renderStatusBar(containerEl);

    // Sections
    this.renderProfileSection(containerEl);
    this.renderPersonalStatsSection(containerEl);
    this.renderActivitiesSection(containerEl);
    this.renderCategoriesSection(containerEl);
    this.renderTempleSection(containerEl);
    this.renderCalendarSection(containerEl);
    this.renderThemeSection(containerEl);
    this.renderAdvancedSection(containerEl);
  }

  // --- Collapsible Section Helper ---

  private createCollapsibleSection(
    parent: HTMLElement,
    title: string,
    icon: string,
    defaultOpen = false
  ): HTMLElement {
    const section = parent.createDiv({
      attr: {
        style: `
          margin: 8px 0;
          border: 1px solid var(--background-modifier-border);
          border-radius: 8px;
          overflow: hidden;
        `,
      },
    });

    const header = section.createDiv({
      attr: {
        style: `
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 16px;
          background: var(--background-secondary);
          cursor: pointer;
          user-select: none;
          min-height: 44px;
        `,
      },
    });

    const arrow = header.createEl("span", {
      text: defaultOpen ? "\u25BC" : "\u25B6",
      attr: { style: "font-size: 10px; width: 12px;" },
    });

    header.createEl("span", {
      text: icon ? `${icon}  ${title}` : title,
      attr: { style: "font-weight: 600; font-size: 0.95em;" },
    });

    const body = section.createDiv({
      attr: { style: `padding: 0 16px; display: ${defaultOpen ? "block" : "none"};` },
    });

    header.addEventListener("click", () => {
      const isOpen = body.style.display !== "none";
      body.style.display = isOpen ? "none" : "block";
      body.style.padding = isOpen ? "0 16px" : "12px 16px";
      arrow.textContent = isOpen ? "\u25B6" : "\u25BC";
    });

    if (defaultOpen) body.style.padding = "12px 16px";
    return body;
  }

  // --- Status Bar ---

  private renderStatusBar(container: HTMLElement): void {
    const hpPercent = this.plugin.settings.bossMaxHP > 0
      ? Math.round((this.plugin.settings.bossCurrentHP / this.plugin.settings.bossMaxHP) * 100)
      : 0;

    const bar = container.createDiv({
      attr: {
        style: `
          display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;
          padding: 8px 12px; margin-bottom: 12px;
          background: var(--background-secondary); border-radius: 6px;
          font-size: 0.8em; color: var(--text-muted);
        `,
      },
    });

    bar.createEl("span", { text: `Tier ${this.plugin.settings.currentTier}/13` });
    bar.createEl("span", {
      text: `HP ${this.plugin.settings.bossCurrentHP}/${this.plugin.settings.bossMaxHP} (${hpPercent}%)`,
    });

    const state = this.plugin.settings.inTartarus
      ? "TARTARUS"
      : this.plugin.settings.systemState === "paused"
        ? "PAUSED"
        : "ACTIVE";
    bar.createEl("span", {
      text: state,
      attr: {
        style: `font-weight: 600; color: ${this.plugin.settings.inTartarus ? "var(--text-error)" : "var(--text-normal)"};`,
      },
    });

    bar.createEl("span", {
      text: this.plugin.settings.migrated ? "Migrated" : "Not migrated",
      attr: { style: "font-style: italic;" },
    });
  }

  // --- Wizard Actions ---

  // --- Profile ---

  private renderProfileSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Profile", "\u{1F464}");

    new Setting(body)
      .setName("Name")
      .setDesc("Your name for the dashboard greeting")
      .addText((text) =>
        text
          .setValue(this.plugin.settings.userName)
          .onChange(async (value) => {
            this.plugin.settings.userName = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Homepage")
      .setDesc("Vault file to open when activities are set to 'Open homepage' after completion (e.g. Home.md)")
      .addText((text) =>
        text
          .setPlaceholder("e.g. Home.md")
          .setValue(this.plugin.settings.homepage)
          .onChange(async (value) => {
            this.plugin.settings.homepage = value;
            await this.plugin.saveSettings();
          })
      );

    // Homepage widget keywords info
    const widgetInfo = body.createDiv({
      attr: { style: "padding: 12px 16px; margin-top: 8px; border-radius: 8px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);" },
    });
    widgetInfo.createEl("div", {
      text: "Homepage Widgets",
      attr: { style: "font-weight: 600; margin-bottom: 8px; font-size: 0.9em;" },
    });
    widgetInfo.createEl("div", {
      text: "Use these code block keywords in your homepage to embed mini widgets:",
      attr: { style: "font-size: 0.8em; color: var(--text-muted); margin-bottom: 8px;" },
    });
    const keywords = [
      { keyword: "olen-directive", desc: "Shows the current directive suggestion" },
      { keyword: "olen-day", desc: "Shows your day timeline" },
      { keyword: "olen-stats", desc: "Shows quick stats overview" },
      { keyword: "open-olen", desc: "Button to open the Olen dashboard" },
    ];
    for (const kw of keywords) {
      const row = widgetInfo.createDiv({ attr: { style: "display: flex; gap: 8px; margin-bottom: 4px; align-items: baseline;" } });
      row.createEl("code", { text: kw.keyword, attr: { style: "font-size: 0.8em; background: rgba(255,255,255,0.06); padding: 2px 6px; border-radius: 4px;" } });
      row.createEl("span", { text: `— ${kw.desc}`, attr: { style: "font-size: 0.78em; color: var(--text-muted);" } });
    }
  }

  // --- Personal Stats ---

  private renderPersonalStatsSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Personal Stats", "\u{1F4CA}");
    const stats = this.plugin.settings.personalStats;

    new Setting(body)
      .setName("Gender")
      .setDesc("Used to show the correct muscle figure on the heatmap")
      .addDropdown((d) =>
        d.addOptions({ male: "Male", female: "Female" })
          .setValue(stats.gender)
          .onChange(async (v) => {
            this.plugin.settings.personalStats.gender = v as Gender;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Height (cm)")
      .addText((t) =>
        t.setValue(stats.height ? String(stats.height) : "")
          .setPlaceholder("e.g. 175")
          .onChange(async (v) => {
            const n = parseInt(v);
            if (!isNaN(n) && n > 0) {
              this.plugin.settings.personalStats.height = n;
              await this.plugin.saveSettings();
            }
          })
      );

    new Setting(body)
      .setName("Birthdate")
      .setDesc("Used to calculate your age for the strength calculator")
      .addText((t) =>
        t.setValue(stats.birthdate)
          .setPlaceholder("YYYY-MM-DD")
          .onChange(async (v) => {
            if (/^\d{4}-\d{2}-\d{2}$/.test(v) || v === "") {
              this.plugin.settings.personalStats.birthdate = v;
              await this.plugin.saveSettings();
            }
          })
      );

    // Age display
    if (stats.birthdate) {
      const age = this.calculateAge(stats.birthdate);
      body.createEl("div", {
        text: `Age: ${age} years`,
        attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 12px; padding-left: 4px;" },
      });
    }

    // Weight section
    new Setting(body)
      .setName("Current weight (kg)")
      .addText((t) =>
        t.setValue(stats.currentWeight ? String(stats.currentWeight) : "")
          .setPlaceholder("e.g. 61")
          .onChange(async (v) => {
            const n = parseFloat(v);
            if (!isNaN(n) && n > 0) {
              this.plugin.settings.personalStats.currentWeight = n;
              await this.plugin.saveSettings();
            }
          })
      );

    new Setting(body)
      .setName("Weight logging frequency")
      .setDesc("How often you want to be reminded to log your weight")
      .addDropdown((d) =>
        d.addOptions({
          "twice-a-week": "Twice a week",
          "every-week": "Every week",
          "every-2-weeks": "Every 2 weeks",
          "every-3-days": "Every 3 days",
          "every-5-days": "Every 5 days",
          "custom": "Custom interval",
        })
          .setValue(stats.weightLogFrequency)
          .onChange(async (v) => {
            this.plugin.settings.personalStats.weightLogFrequency = v as WeightLogFrequency;
            await this.plugin.saveSettings();
            this.display();
          })
      );

    if (stats.weightLogFrequency === "custom") {
      new Setting(body)
        .setName("Custom interval (days)")
        .addText((t) =>
          t.setValue(String(stats.weightLogCustomDays))
            .onChange(async (v) => {
              const n = parseInt(v);
              if (!isNaN(n) && n > 0) {
                this.plugin.settings.personalStats.weightLogCustomDays = n;
                await this.plugin.saveSettings();
              }
            })
        );
    }

    // Log weight button
    new Setting(body)
      .setName("Log current weight")
      .setDesc("Save today's weight to your progress history")
      .addButton((btn) =>
        btn.setButtonText("Log Weight").onClick(async () => {
          const w = this.plugin.settings.personalStats.currentWeight;
          if (!w || w <= 0) {
            new Notice("Enter your current weight first");
            return;
          }
          const today = toLocalDateStr(new Date());
          // Avoid duplicate for today
          const existing = this.plugin.settings.personalStats.weightLog.find((e) => e.date === today);
          if (existing) {
            existing.weight = w;
          } else {
            this.plugin.settings.personalStats.weightLog.push({ date: today, weight: w });
          }
          this.plugin.settings.personalStats.lastWeightLogDate = today;
          await this.plugin.saveSettings();
          new Notice(`Weight logged: ${w} kg`);
          this.display();
        })
      );

    // Weight history (last 10 entries)
    const log = stats.weightLog;
    if (log.length > 0) {
      const historyEl = body.createDiv({
        attr: { style: "margin: 8px 0; padding: 8px; border: 1px solid var(--background-modifier-border); border-radius: 6px;" },
      });
      historyEl.createEl("div", {
        text: "Weight History",
        attr: { style: "font-weight: 600; font-size: 0.9em; margin-bottom: 6px;" },
      });

      const sorted = [...log].sort((a, b) => b.date.localeCompare(a.date));
      const recent = sorted.slice(0, 10);

      for (const entry of recent) {
        historyEl.createEl("div", {
          text: `${entry.date}: ${entry.weight} kg`,
          attr: { style: "font-size: 0.8em; color: var(--text-muted); padding: 2px 0;" },
        });
      }

      if (sorted.length > 10) {
        historyEl.createEl("div", {
          text: `... and ${sorted.length - 10} more entries`,
          attr: { style: "font-size: 0.75em; color: var(--text-muted); font-style: italic;" },
        });
      }
    }

    // Life expectancy override
    const currentExpectancy = stats.lifeExpectancy > 0
      ? stats.lifeExpectancy
      : stats.gender === "female" ? LIFE_EXPECTANCY_FEMALE : LIFE_EXPECTANCY_MALE;

    new Setting(body)
      .setName("Life expectancy (years)")
      .setDesc(`Used for Memento Mori. Default: ${currentExpectancy} (from gender). Set to override.`)
      .addText((t) =>
        t.setValue(stats.lifeExpectancy ? String(stats.lifeExpectancy) : "")
          .setPlaceholder(`${currentExpectancy} (auto)`)
          .onChange(async (v) => {
            const n = parseFloat(v);
            this.plugin.settings.personalStats.lifeExpectancy = (!isNaN(n) && n > 0) ? n : 0;
            await this.plugin.saveSettings();
          })
      );
  }

  private calculateAge(birthdate: string): number {
    const birth = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  // --- Activities ---

  private renderActivitiesSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Activities", "\u{1F3AF}");

    for (let i = 0; i < this.plugin.settings.activities.length; i++) {
      const activity = this.plugin.settings.activities[i];
      this.renderActivityItem(body, activity, i);
    }

    // Add button
    new Setting(body)
      .addButton((btn) =>
        btn.setButtonText("+ Add Activity").onClick(async () => {
          const newActivity: ActivityConfig = {
            id: `custom-${Date.now()}`,
            name: "New Activity",
            emoji: "\u2B50",
            category: "spirit",
            enabled: true,
            folder: "",
            property: "",
            damagePerCompletion: 1,
            weeklyTarget: 3,
            trackingMode: "daily",
            hasWorkspace: false,
            priority: 5,
            neglectThreshold: 3,
            preferredTime: "anytime",
            estimatedDuration: 30,
          };
          this.plugin.settings.activities.push(newActivity);
          await this.plugin.saveSettings();
          this.display();
        })
      );
  }

  private renderActivityItem(container: HTMLElement, activity: ActivityConfig, index: number): void {
    const wrapper = container.createDiv({
      attr: {
        style: `
          border: 1px solid var(--background-modifier-border);
          border-radius: 6px;
          padding: 10px;
          margin-bottom: 8px;
        `,
      },
    });

    // Header row with toggle
    new Setting(wrapper)
      .setName(`${activity.emoji} ${activity.name}`)
      .setDesc(`${activity.category} · ${activity.folder || "no folder set"}`)
      .addToggle((toggle) =>
        toggle.setValue(activity.enabled).onChange(async (value) => {
          this.plugin.settings.activities[index].enabled = value;
          await this.plugin.saveSettings();
        })
      );

    // Expandable details
    const detailsToggle = wrapper.createEl("details");
    detailsToggle.createEl("summary", {
      text: "Configure",
      attr: { style: "cursor: pointer; font-size: 0.85em; color: var(--text-muted); margin-bottom: 8px;" },
    });

    const details = detailsToggle.createDiv();

    new Setting(details)
      .setName("Name")
      .addText((t) => t.setValue(activity.name).onChange(async (v) => {
        this.plugin.settings.activities[index].name = v;
        await this.plugin.saveSettings();
      }));

    new Setting(details)
      .setName("Emoji")
      .addText((t) => t.setValue(activity.emoji).onChange(async (v) => {
        this.plugin.settings.activities[index].emoji = v;
        await this.plugin.saveSettings();
      }));

    new Setting(details)
      .setName("Category")
      .addDropdown((d) =>
        d.addOptions({ body: "Body", mind: "Mind", spirit: "Spirit" })
          .setValue(activity.category)
          .onChange(async (v) => {
            this.plugin.settings.activities[index].category = v as Category;
            await this.plugin.saveSettings();
          })
      );

    new Setting(details)
      .setName("Activity folder")
      .setDesc("Vault folder with YYYY-MM-DD notes and workspace logs")
      .addText((t) => t.setValue(activity.folder).onChange(async (v) => {
        this.plugin.settings.activities[index].folder = v;
        await this.plugin.saveSettings();
      }));

    new Setting(details)
      .setName("Frontmatter property")
      .addText((t) => t.setValue(activity.property).onChange(async (v) => {
        this.plugin.settings.activities[index].property = v;
        await this.plugin.saveSettings();
      }));

    new Setting(details)
      .setName("Weekly target")
      .addSlider((s) =>
        s.setLimits(1, 7, 1)
          .setValue(activity.weeklyTarget)
          .setDynamicTooltip()
          .onChange(async (v) => {
            this.plugin.settings.activities[index].weeklyTarget = v;
            await this.plugin.saveSettings();
          })
      );

    new Setting(details)
      .setName("Priority (1-10)")
      .addSlider((s) =>
        s.setLimits(1, 10, 1)
          .setValue(activity.priority)
          .setDynamicTooltip()
          .onChange(async (v) => {
            this.plugin.settings.activities[index].priority = v;
            await this.plugin.saveSettings();
          })
      );

    new Setting(details)
      .setName("Preferred time")
      .addDropdown((d) =>
        d.addOptions({
          morning: "Morning", afternoon: "Afternoon",
          evening: "Evening", anytime: "Anytime",
        })
          .setValue(activity.preferredTime)
          .onChange(async (v) => {
            this.plugin.settings.activities[index].preferredTime = v as any;
            await this.plugin.saveSettings();
          })
      );

    new Setting(details)
      .setName("Neglect threshold (days)")
      .addSlider((s) =>
        s.setLimits(1, 14, 1)
          .setValue(activity.neglectThreshold)
          .setDynamicTooltip()
          .onChange(async (v) => {
            this.plugin.settings.activities[index].neglectThreshold = v;
            await this.plugin.saveSettings();
          })
      );

    new Setting(details)
      .setName("Estimated duration (minutes)")
      .addText((t) =>
        t.setValue(String(activity.estimatedDuration)).onChange(async (v) => {
          const n = parseInt(v);
          if (!isNaN(n) && n > 0) {
            this.plugin.settings.activities[index].estimatedDuration = n;
            await this.plugin.saveSettings();
          }
        })
      );

    if (!activity.workspaceTemplate) {
      new Setting(details)
        .setName("Pomodoro mode")
        .setDesc("Use Pomodoro timer with work/break cycles")
        .addToggle((toggle) =>
          toggle.setValue(activity.pomodoro ?? false).onChange(async (v) => {
            this.plugin.settings.activities[index].pomodoro = v;
            await this.plugin.saveSettings();
            this.display(); // re-render to show/hide sub-settings
          })
        );

      if (activity.pomodoro) {
        const ps = activity.pomodoroSettings ?? { ...DEFAULT_POMODORO_SETTINGS };

        new Setting(details)
          .setName("Focus time (minutes)")
          .addText((text) =>
            text.setValue(String(ps.focusMinutes)).onChange(async (v) => {
              const n = parseInt(v) || 25;
              if (!this.plugin.settings.activities[index].pomodoroSettings) {
                this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
              }
              this.plugin.settings.activities[index].pomodoroSettings!.focusMinutes = Math.max(1, n);
              await this.plugin.saveSettings();
            })
          );

        new Setting(details)
          .setName("Break time (minutes)")
          .addText((text) =>
            text.setValue(String(ps.breakMinutes)).onChange(async (v) => {
              const n = parseInt(v) || 5;
              if (!this.plugin.settings.activities[index].pomodoroSettings) {
                this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
              }
              this.plugin.settings.activities[index].pomodoroSettings!.breakMinutes = Math.max(1, n);
              await this.plugin.saveSettings();
            })
          );

        new Setting(details)
          .setName("Long break (minutes)")
          .addText((text) =>
            text.setValue(String(ps.longBreakMinutes)).onChange(async (v) => {
              const n = parseInt(v) || 15;
              if (!this.plugin.settings.activities[index].pomodoroSettings) {
                this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
              }
              this.plugin.settings.activities[index].pomodoroSettings!.longBreakMinutes = Math.max(1, n);
              await this.plugin.saveSettings();
            })
          );

        new Setting(details)
          .setName("Sessions before long break")
          .addText((text) =>
            text.setValue(String(ps.sessionsBeforeLong)).onChange(async (v) => {
              const n = parseInt(v) || 4;
              if (!this.plugin.settings.activities[index].pomodoroSettings) {
                this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
              }
              this.plugin.settings.activities[index].pomodoroSettings!.sessionsBeforeLong = Math.max(2, n);
              await this.plugin.saveSettings();
            })
          );

        new Setting(details)
          .setName("Auto start focus")
          .setDesc("Start work session after break without interaction")
          .addToggle((toggle) =>
            toggle.setValue(ps.autoStartFocus).onChange(async (v) => {
              if (!this.plugin.settings.activities[index].pomodoroSettings) {
                this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
              }
              this.plugin.settings.activities[index].pomodoroSettings!.autoStartFocus = v;
              await this.plugin.saveSettings();
            })
          );

        new Setting(details)
          .setName("Auto start break")
          .setDesc("Start break after work session without interaction")
          .addToggle((toggle) =>
            toggle.setValue(ps.autoStartBreak).onChange(async (v) => {
              if (!this.plugin.settings.activities[index].pomodoroSettings) {
                this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
              }
              this.plugin.settings.activities[index].pomodoroSettings!.autoStartBreak = v;
              await this.plugin.saveSettings();
            })
          );

        new Setting(details)
          .setName("Sound")
          .setDesc("Play alert sound when timer ends")
          .addToggle((toggle) =>
            toggle.setValue(ps.soundEnabled).onChange(async (v) => {
              if (!this.plugin.settings.activities[index].pomodoroSettings) {
                this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
              }
              this.plugin.settings.activities[index].pomodoroSettings!.soundEnabled = v;
              await this.plugin.saveSettings();
              this.display();
            })
          );

        if (ps.soundEnabled) {
          new Setting(details)
            .setName("Custom sound file")
            .setDesc("Vault path to audio file (leave empty for default beep)")
            .addText((text) =>
              text
                .setPlaceholder("e.g. sounds/bell.mp3")
                .setValue(ps.soundFile ?? "")
                .onChange(async (v) => {
                  if (!this.plugin.settings.activities[index].pomodoroSettings) {
                    this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
                  }
                  this.plugin.settings.activities[index].pomodoroSettings!.soundFile = v || undefined;
                  await this.plugin.saveSettings();
                })
            );
        }

        new Setting(details)
          .setName("Vibration")
          .setDesc("Vibrate when timer ends")
          .addToggle((toggle) =>
            toggle.setValue(ps.vibrationEnabled).onChange(async (v) => {
              if (!this.plugin.settings.activities[index].pomodoroSettings) {
                this.plugin.settings.activities[index].pomodoroSettings = { ...DEFAULT_POMODORO_SETTINGS };
              }
              this.plugin.settings.activities[index].pomodoroSettings!.vibrationEnabled = v;
              await this.plugin.saveSettings();
            })
          );
      }
    }

    new Setting(details)
      .setName("Has workspace")
      .setDesc("Opens workspace view with timer when started, instead of marking done immediately")
      .addToggle((toggle) =>
        toggle.setValue(activity.hasWorkspace).onChange(async (v) => {
          this.plugin.settings.activities[index].hasWorkspace = v;
          await this.plugin.saveSettings();
        })
      );

    // Workspace template selector
    const templateSetting = new Setting(details)
      .setName("Workspace template")
      .setDesc("Built-in template, vault .js, or vault .md file");

    const currentTpl = activity.workspaceTemplate ?? "";
    const isBuiltin = BUILTIN_TEMPLATE_IDS.includes(currentTpl);
    const isCustom = currentTpl !== "" && !isBuiltin;

    templateSetting.addDropdown((d) => {
      d.addOption("", "None (default timer)");
      for (const id of BUILTIN_TEMPLATE_IDS) {
        d.addOption(id, `Built-in: ${id}`);
      }
      d.addOption("__custom__", "Custom (vault path)");
      d.setValue(isCustom ? "__custom__" : currentTpl);
      d.onChange(async (v) => {
        if (v === "__custom__") {
          // Set a placeholder so isCustom is true on re-render
          this.plugin.settings.activities[index].workspaceTemplate = "__custom__";
          await this.plugin.saveSettings();
          this.display();
          return;
        }
        this.plugin.settings.activities[index].workspaceTemplate = v || undefined;
        this.plugin.templateEngine.invalidateCache();
        await this.plugin.saveSettings();
        this.display();
      });
    });

    if (isCustom) {
      new Setting(details)
        .setName("Template vault path")
        .setDesc("Path to a .js or .md file in your vault")
        .addText((t) =>
          t.setPlaceholder("e.g. Templates/MyWorkout.js")
            .setValue(currentTpl === "__custom__" ? "" : currentTpl)
            .onChange(async (v) => {
              this.plugin.settings.activities[index].workspaceTemplate = v.trim() || undefined;
              this.plugin.templateEngine.invalidateCache();
              await this.plugin.saveSettings();
            })
        );
    }

    new Setting(details)
      .setName("After completion")
      .setDesc("Where to go after finishing this activity")
      .addDropdown((d) =>
        d.addOptions({
          dashboard: "Return to Olen Dashboard",
          stay: "Stay on note",
          homepage: "Open homepage",
        })
          .setValue(
            !activity.completionReturnTo || activity.completionReturnTo === "dashboard"
              ? "dashboard"
              : activity.completionReturnTo === "stay"
                ? "stay"
                : "homepage"
          )
          .onChange(async (v) => {
            this.plugin.settings.activities[index].completionReturnTo = v;
            await this.plugin.saveSettings();
          })
      );

    new Setting(details)
      .setName("Exercise database folder")
      .setDesc("Vault folder containing strength standard notes (e.g. Bench Press.md)")
      .addText((t) =>
        t.setPlaceholder("e.g. Exercises")
          .setValue(activity.exerciseDbFolder ?? "")
          .onChange(async (v) => {
            this.plugin.settings.activities[index].exerciseDbFolder = v.trim() || undefined;
            await this.plugin.saveSettings();
          })
      );

    new Setting(details)
      .setName("Blocks (comma-separated activity IDs)")
      .addText((t) =>
        t.setValue((activity.blocks ?? []).join(", ")).onChange(async (v) => {
          this.plugin.settings.activities[index].blocks = v.split(",").map((s) => s.trim()).filter(Boolean);
          await this.plugin.saveSettings();
        })
      );

    new Setting(details)
      .setName("Alternates with (activity ID)")
      .addText((t) =>
        t.setValue(activity.alternatesWith ?? "").onChange(async (v) => {
          this.plugin.settings.activities[index].alternatesWith = v.trim() || undefined;
          await this.plugin.saveSettings();
        })
      );

    new Setting(details)
      .setName("Chain after (activity ID)")
      .addText((t) =>
        t.setValue(activity.chainAfter ?? "").onChange(async (v) => {
          this.plugin.settings.activities[index].chainAfter = v.trim() || undefined;
          await this.plugin.saveSettings();
        })
      );

    // Delete button
    new Setting(details)
      .addButton((btn) =>
        btn
          .setButtonText("Delete Activity")
          .setWarning()
          .onClick(async () => {
            this.plugin.settings.activities.splice(index, 1);
            await this.plugin.saveSettings();
            this.display();
          })
      );
  }

  // --- Categories ---

  private renderCategoriesSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Categories", "\u{1F3A8}");

    const categories: { key: Category; label: string }[] = [
      { key: "body", label: "Body" },
      { key: "mind", label: "Mind" },
      { key: "spirit", label: "Spirit" },
    ];

    for (const cat of categories) {
      new Setting(body)
        .setName(`${cat.label} color`)
        .addColorPicker((cp) =>
          cp
            .setValue(this.plugin.settings.categoryColors[cat.key])
            .onChange(async (v) => {
              this.plugin.settings.categoryColors[cat.key] = v;
              await this.plugin.saveSettings();
            })
        );
    }

    new Setting(body)
      .setName("Title override")
      .setDesc("Override the dynamic title (leave empty for auto)")
      .addText((t) =>
        t
          .setValue(this.plugin.settings.titleOverride)
          .onChange(async (v) => {
            this.plugin.settings.titleOverride = v;
            await this.plugin.saveSettings();
          })
      );
  }

  // --- Temple ---

  private renderTempleSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Routines", "\u{1F3DB}\uFE0F");

    for (let i = 0; i < this.plugin.settings.templeTasks.length; i++) {
      const task = this.plugin.settings.templeTasks[i];

      new Setting(body)
        .setName(`${task.emoji} ${task.name}`)
        .setDesc(`Every ${task.intervalDays} day(s)`)
        .addText((t) =>
          t.setPlaceholder("Name").setValue(task.name).onChange(async (v) => {
            this.plugin.settings.templeTasks[i].name = v;
            await this.plugin.saveSettings();
          })
        )
        .addText((t) =>
          t.setPlaceholder("Days").setValue(String(task.intervalDays)).onChange(async (v) => {
            const n = parseInt(v);
            if (!isNaN(n) && n > 0) {
              this.plugin.settings.templeTasks[i].intervalDays = n;
              await this.plugin.saveSettings();
            }
          })
        )
        .addText((t) =>
          t.setPlaceholder("Emoji").setValue(task.emoji).onChange(async (v) => {
            this.plugin.settings.templeTasks[i].emoji = v;
            await this.plugin.saveSettings();
          })
        );
    }

    new Setting(body).addButton((btn) =>
      btn.setButtonText("+ Add Routine").onClick(async () => {
        this.plugin.settings.templeTasks.push({
          id: `temple-${Date.now()}`,
          name: "New Task",
          lastCompleted: null,
          intervalDays: 7,
          emoji: "\u2728",
        });
        await this.plugin.saveSettings();
        this.display();
      })
    );
  }

  // --- Calendar Integration ---

  private renderCalendarSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Calendar Integration", "\u{1F4C5}");

    body.createEl("p", {
      text: "Merge external tasks into your Day Map timeline.",
      attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 8px;" },
    });

    // Option A: Daily Notes
    new Setting(body)
      .setName("Daily Notes integration")
      .setDesc("Parse tasks from your daily notes (- [ ] Task @time ~30m)")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.calendar.enableDailyNotes).onChange(async (v) => {
          this.plugin.settings.calendar.enableDailyNotes = v;
          await this.plugin.saveSettings();
        })
      );

    new Setting(body)
      .setName("Daily Notes folder")
      .setDesc("Vault folder containing YYYY-MM-DD.md notes")
      .addText((t) =>
        t
          .setPlaceholder("Daily Notes")
          .setValue(this.plugin.settings.calendar.dailyNotesFolder)
          .onChange(async (v) => {
            this.plugin.settings.calendar.dailyNotesFolder = v;
            await this.plugin.saveSettings();
          })
      );

    // Option B: Tasks Plugin
    new Setting(body)
      .setName("Tasks Plugin integration")
      .setDesc("Read tasks with due dates from the Tasks plugin")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.calendar.enableTasksPlugin).onChange(async (v) => {
          this.plugin.settings.calendar.enableTasksPlugin = v;
          await this.plugin.saveSettings();
        })
      );

    // Option C: Quick Tasks
    new Setting(body)
      .setName("Quick Tasks")
      .setDesc("Olen's built-in task system")
      .addToggle((toggle) =>
        toggle.setValue(this.plugin.settings.calendar.enableQuickTasks).onChange(async (v) => {
          this.plugin.settings.calendar.enableQuickTasks = v;
          await this.plugin.saveSettings();
        })
      );

    // Quick Tasks list
    if (this.plugin.settings.calendar.enableQuickTasks) {
      const now = this.plugin.settings.simulatedDate
        ? new Date(this.plugin.settings.simulatedDate)
        : new Date();
      const today = toLocalDateStr(now);

      const todayTasks = this.plugin.settings.calendar.quickTasks.filter(
        (qt) => qt.date === today
      );

      if (todayTasks.length > 0) {
        const listEl = body.createDiv({
          attr: { style: "margin: 8px 0; padding: 8px; border: 1px solid var(--background-modifier-border); border-radius: 6px;" },
        });

        listEl.createEl("div", {
          text: "Today's Quick Tasks",
          attr: { style: "font-weight: 600; font-size: 0.9em; margin-bottom: 6px;" },
        });

        for (let i = 0; i < this.plugin.settings.calendar.quickTasks.length; i++) {
          const qt = this.plugin.settings.calendar.quickTasks[i];
          if (qt.date !== today) continue;

          new Setting(listEl)
            .setName(`${qt.done ? "\u2713" : "\u25CB"} ${qt.title}`)
            .setDesc(
              [qt.time, qt.duration ? `${qt.duration}m` : ""].filter(Boolean).join(" · ") || "No time set"
            )
            .addButton((btn) =>
              btn.setButtonText("Delete").setWarning().onClick(async () => {
                this.plugin.settings.calendar.quickTasks.splice(i, 1);
                await this.plugin.saveSettings();
                this.display();
              })
            );
        }
      }

      new Setting(body).addButton((btn) =>
        btn.setButtonText("+ Add Quick Task").onClick(() => {
          (this.plugin as any).showQuickTaskDialog();
          // Close settings — the dialog appears on top
        })
      );
    }
  }

  // --- Theme ---

  private renderThemeSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Theme", "\u{1F3A8}");

    // Theme mode picker
    new Setting(body)
      .setName("Theme")
      .setDesc("Choose the overall look and feel")
      .addDropdown((dd) => {
        for (const mode of Object.keys(THEME_LABELS) as OlenThemeMode[]) {
          dd.addOption(mode, THEME_LABELS[mode]);
        }
        dd.setValue(this.plugin.settings.themeMode ?? "dark");
        dd.onChange(async (v) => {
          this.plugin.settings.themeMode = v as OlenThemeMode;
          this.plugin.settings.themeOverrides = {};
          await this.plugin.saveSettings();
          this.plugin.refreshDashboard();
          this.display();
        });
      });

    // Color overrides (defaults come from active theme preset)
    const preset = THEME_PRESETS[this.plugin.settings.themeMode ?? "dark"];
    const themeFields: { key: string; label: string }[] = [
      { key: "bgPrimary", label: "Background" },
      { key: "textPrimary", label: "Text" },
      { key: "textMuted", label: "Muted text" },
      { key: "accentGold", label: "Accent (gold)" },
      { key: "danger", label: "Danger" },
      { key: "success", label: "Success" },
    ];

    for (const field of themeFields) {
      new Setting(body)
        .setName(field.label)
        .addColorPicker((cp) =>
          cp
            .setValue(
              (this.plugin.settings.themeOverrides as any)?.[field.key] ??
              (preset as any)[field.key]
            )
            .onChange(async (v) => {
              (this.plugin.settings.themeOverrides as any)[field.key] = v;
              await this.plugin.saveSettings();
              this.plugin.refreshDashboard();
            })
        );
    }

    // --- Background & Tab ---

    new Setting(body)
      .setName("Scrolling background image")
      .setDesc("Vault path to an image that scrolls with the dashboard")
      .addText((text) =>
        text
          .setPlaceholder("path/to/background.jpg")
          .setValue(this.plugin.settings.scrollingBackground ?? "")
          .onChange(async (value) => {
            this.plugin.settings.scrollingBackground = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Background darkness")
      .setDesc("How dark the background overlay is (0 = no overlay, 100 = fully black)")
      .addSlider((s) =>
        s
          .setLimits(0, 100, 5)
          .setValue(this.plugin.settings.backgroundDarkness ?? 75)
          .setDynamicTooltip()
          .onChange(async (v) => {
            this.plugin.settings.backgroundDarkness = v;
            await this.plugin.saveSettings();
            this.plugin.refreshDashboard();
          })
      );

    new Setting(body).addButton((btn) =>
      btn.setButtonText("Reset theme colors").onClick(async () => {
        this.plugin.settings.themeOverrides = {};
        await this.plugin.saveSettings();
        this.plugin.refreshDashboard();
        this.display();
        new Notice(`Theme reset to ${THEME_LABELS[this.plugin.settings.themeMode ?? "dark"]} defaults`);
      })
    );
  }

  // --- Advanced ---

  private renderAdvancedSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Advanced", "\u2699\uFE0F");

    new Setting(body)
      .setName("Simulated date")
      .setDesc("Override today's date for testing (YYYY-MM-DD)")
      .addText((t) =>
        t
          .setPlaceholder("YYYY-MM-DD")
          .setValue(this.plugin.settings.simulatedDate ?? "")
          .onChange(async (v) => {
            this.plugin.settings.simulatedDate = v.trim() || null;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("System state")
      .addDropdown((d) =>
        d
          .addOptions({ active: "Active", paused: "Paused" })
          .setValue(this.plugin.settings.systemState)
          .onChange(async (v) => {
            const newState = v as "active" | "paused";
            if (newState === "paused" && this.plugin.settings.systemState === "active") {
              this.plugin.settings.pauseStartTime = new Date().toISOString();
            } else if (newState === "active" && this.plugin.settings.systemState === "paused") {
              if (this.plugin.settings.pauseStartTime) {
                const pausedMs = Date.now() - new Date(this.plugin.settings.pauseStartTime).getTime();
                this.plugin.settings.totalPausedTime += pausedMs;
              }
              this.plugin.settings.pauseStartTime = null;
            }
            this.plugin.settings.systemState = newState;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Directive debug deck")
      .setDesc("Show debug panel below directive — reveals exactly what the completion pipeline sees")
      .addToggle((t) =>
        t
          .setValue(this.plugin.settings.devConfig.showDirectiveDebug ?? false)
          .onChange(async (v) => {
            this.plugin.settings.devConfig.showDirectiveDebug = v;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Quote folder")
      .setDesc("Vault folder containing quote files")
      .addText((t) =>
        t
          .setPlaceholder("Quotes/Stoic")
          .setValue(this.plugin.settings.quoteFolderPath)
          .onChange(async (v) => {
            this.plugin.settings.quoteFolderPath = v;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Max quote length")
      .setDesc("Quotes longer than this (in characters) won't appear. 0 = no limit.")
      .addText((t) =>
        t
          .setPlaceholder("0")
          .setValue(String(this.plugin.settings.quoteMaxLength ?? 0))
          .onChange(async (v) => {
            const n = parseInt(v);
            this.plugin.settings.quoteMaxLength = isNaN(n) || n < 0 ? 0 : n;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Resume Wizard")
      .setDesc("Continue the setup wizard where you left off")
      .addButton((btn) => {
        btn
          .setButtonText("Resume Wizard")
          .setCta()
          .onClick(() => {
            this.plugin.activateOnboarding();
          });
      });

    new Setting(body)
      .setName("Reset & Start Wizard")
      .setDesc("Delete all settings and start from scratch")
      .addButton((btn) => {
        btn
          .setButtonText("Reset & Start")
          .setWarning()
          .onClick(() => {
            this.plugin.confirmAndResetWizard();
          });
      });

    // --- Sunday Check-in ---

    new Setting(body)
      .setName("Sunday check-in")
      .setDesc("Olen checks in with you every Sunday to reflect on your week")
      .addToggle((t) =>
        t
          .setValue(this.plugin.settings.sundayCheckin?.enabled !== false)
          .onChange(async (v) => {
            if (!this.plugin.settings.sundayCheckin) {
              this.plugin.settings.sundayCheckin = { enabled: v, lastCheckinDate: null, consecutiveIgnores: 0, journalFolder: "Journal" };
            } else {
              this.plugin.settings.sundayCheckin.enabled = v;
            }
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Journal folder")
      .setDesc("Where Sunday reflections and journal entries are saved")
      .addText((t) =>
        t
          .setPlaceholder("Journal")
          .setValue(this.plugin.settings.sundayCheckin?.journalFolder || "Journal")
          .onChange(async (v) => {
            if (!this.plugin.settings.sundayCheckin) {
              this.plugin.settings.sundayCheckin = { enabled: true, lastCheckinDate: null, consecutiveIgnores: 0, journalFolder: v || "Journal" };
            } else {
              this.plugin.settings.sundayCheckin.journalFolder = v || "Journal";
            }
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Enable Tartarus system")
      .setDesc("When off, boss/Tartarus features are hidden from the dashboard")
      .addToggle((t) =>
        t
          .setValue(this.plugin.settings.enableTartarus !== false)
          .onChange(async (v) => {
            this.plugin.settings.enableTartarus = v;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Re-run migration")
      .setDesc("Re-import data from the Mythological Habit Tracker plugin")
      .addButton((btn) =>
        btn.setButtonText("Migrate").setWarning().onClick(async () => {
          this.plugin.settings.migrated = false;
          await this.plugin.saveSettings();
          // Reload the plugin to trigger migration
          await (this.plugin as any).onload();
          this.display();
          new Notice("Migration complete");
        })
      );
  }

}
