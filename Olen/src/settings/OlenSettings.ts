// ============================================================
// Olen — Settings Tab
// Collapsible sections for all plugin configuration
// ============================================================

import { App, PluginSettingTab, Setting, TextComponent, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { ActivityConfig, Category, TempleTask } from "../types";
import { DEFAULT_ACTIVITIES, DEFAULT_DEV_CONFIG } from "../constants";

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
    this.renderActivitiesSection(containerEl);
    this.renderCategoriesSection(containerEl);
    this.renderTempleSection(containerEl);
    this.renderCalendarSection(containerEl);
    this.renderThemeSection(containerEl);
    this.renderAdvancedSection(containerEl);
    this.renderDevDashboardSection(containerEl);
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
      .setName("My Why")
      .setDesc("Your core motivation — shown periodically on the dashboard")
      .addTextArea((area) =>
        area
          .setValue(this.plugin.settings.myWhy)
          .onChange(async (value) => {
            this.plugin.settings.myWhy = value;
            await this.plugin.saveSettings();
          })
      );

    new Setting(body)
      .setName("Hero background image")
      .setDesc("Vault path to the hero background image (e.g., images/hero.jpg)")
      .addText((text) =>
        text
          .setPlaceholder("path/to/image.jpg")
          .setValue(this.plugin.settings.heroBackground)
          .onChange(async (value) => {
            this.plugin.settings.heroBackground = value;
            await this.plugin.saveSettings();
          })
      );
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
            hasSession: false,
            priority: 5,
            neglectThreshold: 3,
            preferredTime: "anytime",
            estimatedDuration: 30,
            dashboardSource: "builtin",
            workspaceSource: "builtin",
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
      .setName("Vault folder")
      .setDesc("Folder with YYYY-MM-DD notes")
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

    new Setting(details)
      .setName("Has session view")
      .addToggle((toggle) =>
        toggle.setValue(activity.hasSession).onChange(async (v) => {
          this.plugin.settings.activities[index].hasSession = v;
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

    new Setting(details)
      .setName("Session folder")
      .setDesc("Vault folder for session files")
      .addText((t) =>
        t.setPlaceholder("e.g. Home/Starts/Drawing/Sessions")
          .setValue(activity.sessionFolder ?? "")
          .onChange(async (v) => {
            this.plugin.settings.activities[index].sessionFolder = v.trim() || undefined;
            await this.plugin.saveSettings();
          })
      );

    new Setting(details)
      .setName("Skill folder")
      .setDesc("Vault folder containing skill tree notes")
      .addText((t) =>
        t.setPlaceholder("e.g. Home/Starts/Drawing/Skill tree")
          .setValue(activity.skillFolder ?? "")
          .onChange(async (v) => {
            this.plugin.settings.activities[index].skillFolder = v.trim() || undefined;
            await this.plugin.saveSettings();
          })
      );

    // --- View Sources ---
    details.createEl("div", {
      text: "View Sources",
      attr: { style: "font-weight: 600; font-size: 0.9em; margin: 12px 0 4px; color: var(--text-normal);" },
    });
    details.createEl("div", {
      text: "Choose between built-in Olen UI or your own .md templates rendered inside Olen.",
      attr: { style: "font-size: 0.8em; color: var(--text-muted); margin-bottom: 8px;" },
    });

    // Dashboard source
    const dashPathSetting = new Setting(details)
      .setName("Dashboard .md path")
      .setDesc("Vault path to hub template (without .md extension)")
      .addText((t) =>
        t.setPlaceholder("Home/Hubs/Drawing hub")
          .setValue(activity.dashboardSource === "builtin" ? "" : (activity.dashboardSource ?? ""))
          .onChange(async (v) => {
            this.plugin.settings.activities[index].dashboardSource = v.trim() || "builtin";
            await this.plugin.saveSettings();
          })
      );

    const isDashCustom = activity.dashboardSource && activity.dashboardSource !== "builtin";
    dashPathSetting.settingEl.style.display = isDashCustom ? "" : "none";

    new Setting(details)
      .setName("Dashboard source")
      .setDesc("Hub view when you tap an activity")
      .addDropdown((d) =>
        d.addOptions({ builtin: "Built-in (Native)", custom: "Custom .md file" })
          .setValue(isDashCustom ? "custom" : "builtin")
          .onChange(async (v) => {
            if (v === "builtin") {
              this.plugin.settings.activities[index].dashboardSource = "builtin";
              dashPathSetting.settingEl.style.display = "none";
            } else {
              dashPathSetting.settingEl.style.display = "";
            }
            await this.plugin.saveSettings();
          })
      );

    // Re-insert path setting after dropdown (it was created first for reference)
    dashPathSetting.settingEl.remove();
    details.appendChild(dashPathSetting.settingEl);

    // Workspace source
    const wsPathSetting = new Setting(details)
      .setName("Workspace .md path")
      .setDesc("Vault path to session template (without .md extension)")
      .addText((t) =>
        t.setPlaceholder("Drawing Session")
          .setValue(activity.workspaceSource === "builtin" ? "" : (activity.workspaceSource ?? ""))
          .onChange(async (v) => {
            this.plugin.settings.activities[index].workspaceSource = v.trim() || "builtin";
            await this.plugin.saveSettings();
          })
      );

    const isWsCustom = activity.workspaceSource && activity.workspaceSource !== "builtin";
    wsPathSetting.settingEl.style.display = isWsCustom ? "" : "none";

    new Setting(details)
      .setName("Workspace source")
      .setDesc("Session view when you begin a session")
      .addDropdown((d) =>
        d.addOptions({ builtin: "Built-in (Native)", custom: "Custom .md file" })
          .setValue(isWsCustom ? "custom" : "builtin")
          .onChange(async (v) => {
            if (v === "builtin") {
              this.plugin.settings.activities[index].workspaceSource = "builtin";
              wsPathSetting.settingEl.style.display = "none";
            } else {
              wsPathSetting.settingEl.style.display = "";
            }
            await this.plugin.saveSettings();
          })
      );

    wsPathSetting.settingEl.remove();
    details.appendChild(wsPathSetting.settingEl);

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
    const body = this.createCollapsibleSection(container, "Temple Upkeep", "\u{1F3DB}\uFE0F");

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
      btn.setButtonText("+ Add Temple Task").onClick(async () => {
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
      const today = now.toISOString().slice(0, 10);

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

    const themeFields: { key: string; label: string; defaultVal: string }[] = [
      { key: "bgPrimary", label: "Background", defaultVal: "#0c0a09" },
      { key: "textPrimary", label: "Text", defaultVal: "#f5f0e8" },
      { key: "textMuted", label: "Muted text", defaultVal: "#928d85" },
      { key: "accentGold", label: "Accent (gold)", defaultVal: "#c9a84c" },
      { key: "danger", label: "Danger", defaultVal: "#8b2d35" },
      { key: "success", label: "Success", defaultVal: "#d4940a" },
    ];

    for (const field of themeFields) {
      new Setting(body)
        .setName(field.label)
        .addColorPicker((cp) =>
          cp
            .setValue(
              (this.plugin.settings.themeOverrides as any)?.[field.key] ?? field.defaultVal
            )
            .onChange(async (v) => {
              (this.plugin.settings.themeOverrides as any)[field.key] = v;
              await this.plugin.saveSettings();
            })
        );
    }

    new Setting(body).addButton((btn) =>
      btn.setButtonText("Reset to Elysian Dark").onClick(async () => {
        this.plugin.settings.themeOverrides = {};
        await this.plugin.saveSettings();
        this.display();
        new Notice("Theme reset to Elysian Dark defaults");
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

  // --- Developer Dashboard ---

  private renderDevDashboardSection(container: HTMLElement): void {
    const body = this.createCollapsibleSection(container, "Developer Dashboard", "\u{1F6E0}\uFE0F");

    body.createEl("p", {
      text: "Edit the raw devConfig JSON. Changes are applied on save.",
      attr: { style: "font-size: 0.85em; color: var(--text-muted); margin-bottom: 8px;" },
    });

    const textarea = body.createEl("textarea", {
      attr: {
        style: `
          width: 100%; min-height: 300px; font-family: monospace; font-size: 12px;
          background: var(--background-primary); color: var(--text-normal);
          border: 1px solid var(--background-modifier-border); border-radius: 6px;
          padding: 10px; resize: vertical;
        `,
      },
    });
    textarea.value = JSON.stringify(this.plugin.settings.devConfig, null, 2);

    new Setting(body)
      .addButton((btn) =>
        btn.setButtonText("Save devConfig").onClick(async () => {
          try {
            const parsed = JSON.parse(textarea.value);
            this.plugin.settings.devConfig = Object.assign(
              {},
              DEFAULT_DEV_CONFIG,
              parsed
            );
            await this.plugin.saveSettings();
            this.plugin.refreshDashboard();
            new Notice("devConfig saved and applied");
          } catch (err) {
            new Notice("Invalid JSON — please check syntax");
          }
        })
      )
      .addButton((btn) =>
        btn.setButtonText("Reset to defaults").onClick(async () => {
          this.plugin.settings.devConfig = { ...DEFAULT_DEV_CONFIG };
          await this.plugin.saveSettings();
          textarea.value = JSON.stringify(this.plugin.settings.devConfig, null, 2);
          new Notice("devConfig reset to defaults");
        })
      );

    // Export/Import
    new Setting(body)
      .setName("Export all settings")
      .addButton((btn) =>
        btn.setButtonText("Copy to clipboard").onClick(async () => {
          const json = JSON.stringify(this.plugin.settings, null, 2);
          try {
            await navigator.clipboard.writeText(json);
            new Notice("Settings copied to clipboard");
          } catch {
            // Fallback for mobile — show in a textarea for manual copy
            const ta = document.createElement("textarea");
            ta.value = json;
            ta.style.cssText = "position:fixed;top:0;left:0;width:100%;height:50%;z-index:9999;font-size:11px;";
            document.body.appendChild(ta);
            ta.select();
            ta.addEventListener("blur", () => ta.remove());
            new Notice("Tap the text area and copy manually");
          }
        })
      );

    new Setting(body)
      .setName("Import settings")
      .addTextArea((area) => {
        area.setPlaceholder("Paste JSON here...");
        area.inputEl.style.width = "100%";
        area.inputEl.style.minHeight = "80px";
        area.inputEl.style.fontFamily = "monospace";
        area.inputEl.style.fontSize = "11px";

        // Store reference for the import button
        (body as any)._importArea = area;
      })
      .addButton((btn) =>
        btn.setButtonText("Import").setWarning().onClick(async () => {
          try {
            const area = (body as any)._importArea;
            if (!area) return;
            const parsed = JSON.parse(area.getValue());
            Object.assign(this.plugin.settings, parsed);
            await this.plugin.saveSettings();
            this.display();
            new Notice("Settings imported successfully");
          } catch (err) {
            new Notice("Invalid JSON — please check syntax");
          }
        })
      );
  }
}
