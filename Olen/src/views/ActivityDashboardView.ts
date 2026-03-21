// ============================================================
// Olen — Activity Dashboard View
// Per-activity dashboard with enhanced analytics (§V)
// ============================================================

import { ItemView, WorkspaceLeaf, TFile } from "obsidian";
import type OlenPlugin from "../main";
import type { ActivityConfig, CompletionMap, Completion } from "../types";
import { VIEW_TYPE_OLEN } from "../constants";
import { THEME_PRESETS } from "../data/themes";
import { applyAccentColor } from "../utils/accentColor";
import { OlenEngine } from "../engines/OlenEngine";
import { renderSessionPreview } from "../components/SessionPreview";
import { renderMomentumIndicator } from "../components/MomentumIndicator";
import { renderTimeAnalytics } from "../components/TimeAnalytics";
import { renderDisciplineFlowChart } from "../components/DisciplineFlowChart";
import { renderConsistencyCalendar } from "../components/ConsistencyCalendar";
import { renderSkillHeatmap } from "../components/SkillHeatmap";
import { renderPersonalRecords } from "../components/PersonalRecords";
import { renderEmbeddedMd } from "./EmbeddedMdView";

export const VIEW_TYPE_ACTIVITY_DASHBOARD = "olen-activity-dashboard-view";

export class ActivityDashboardView extends ItemView {
  plugin: OlenPlugin;
  private activityId: string = "";
  private embeddedComponent: import("obsidian").Component | null = null;

  constructor(leaf: WorkspaceLeaf, plugin: OlenPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return VIEW_TYPE_ACTIVITY_DASHBOARD;
  }

  getDisplayText(): string {
    const activity = this.getActivity();
    return activity ? `${activity.name} Dashboard` : "Activity Dashboard";
  }

  getIcon(): string {
    return "bar-chart";
  }

  setActivityId(id: string): void {
    this.activityId = id;
  }

  private getActivity(): ActivityConfig | undefined {
    return this.plugin.settings.activities.find((a) => a.id === this.activityId);
  }

  async onOpen(): Promise<void> {
    await this.render();
  }

  async onClose(): Promise<void> {
    this.embeddedComponent?.unload();
    this.embeddedComponent = null;
    this.contentEl.empty();
  }

  async render(): Promise<void> {
    this.embeddedComponent?.unload();
    this.embeddedComponent = null;

    const container = this.contentEl;
    container.empty();

    const activity = this.getActivity();
    if (!activity) {
      container.createEl("div", { text: "Activity not found." });
      return;
    }

    const settings = this.plugin.settings;

    // Check if using custom .md dashboard
    if (activity.dashboardSource === "custom" && activity.dashboardCustomFile) {
      this.embeddedComponent = await renderEmbeddedMd(
        this.app,
        this.plugin,
        activity.dashboardCustomFile,
        container,
        () => this.plugin.activateDashboard(),
        activity.name,
        activity.emoji
      );
      return;
    }

    // Native dashboard
    const root = container.createDiv({ cls: "olen-dashboard olen-activity-dashboard" });
    this.applyThemeOverrides(root);

    // Gather completion data
    const completionData = this.gatherCompletionData();
    const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
    const engine = new OlenEngine(settings, completionData, now);

    let staggerIdx = 0;

    // Navigation bar
    const nav = root.createDiv({ cls: "olen-activity-nav" });
    const backBtn = nav.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "← Back to Home",
    });
    backBtn.addEventListener("click", () => this.plugin.activateDashboard());

    const titleEl = nav.createDiv({ cls: "olen-activity-nav-title" });
    titleEl.createEl("span", { text: `${activity.emoji} ${activity.name}` });

    // Category accent
    const accentColor = settings.categoryColors[activity.category] ?? "#928d85";
    const accent = root.createDiv({ cls: "olen-workspace-accent" });
    accent.style.background = `linear-gradient(90deg, ${accentColor}, transparent)`;

    // 1. Session Preview Card (hero-sized)
    renderSessionPreview(root, this.app, activity, settings, staggerIdx++, (filePath) => {
      const file = this.app.vault.getAbstractFileByPath(filePath);
      if (file instanceof TFile) {
        this.app.workspace.getLeaf("tab").openFile(file);
      }
    });

    // 2. Quick Actions
    const actions = root.createDiv({ cls: "olen-card olen-activity-actions" });
    actions.style.setProperty("--i", String(staggerIdx++));

    const startBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-primary",
      text: "Start Session",
    });
    startBtn.addEventListener("click", () => this.handleStartSession(activity));

    const logBtn = actions.createEl("button", {
      cls: "olen-btn olen-btn-secondary",
      text: "Log",
    });
    logBtn.addEventListener("click", () => this.handleLogCompletion(activity));

    // 3. Stats Row
    const statsCard = root.createDiv({ cls: "olen-card olen-activity-stats-card" });
    statsCard.style.setProperty("--i", String(staggerIdx++));

    const progress = engine.getWeeklyProgress(activity.id);
    const streak = engine.getActivityStreak(activity.id);
    const daysSince = engine.getDaysSinceLastDone(activity.id);

    const statsGrid = statsCard.createDiv({ cls: "olen-activity-stats-grid" });
    this.addStatBlock(statsGrid, `${progress.done}/${progress.target}`, "This Week");
    this.addStatBlock(statsGrid, String(streak), "Streak");
    this.addStatBlock(statsGrid, daysSince < 999 ? `${daysSince}d` : "—", "Last Done");

    // 4. Momentum Indicator
    renderMomentumIndicator(root, activity, completionData, settings, staggerIdx++);

    // 5. Time Analytics
    renderTimeAnalytics(root, this.app, activity, settings, staggerIdx++);

    // 6. Discipline vs Flow
    renderDisciplineFlowChart(root, this.app, activity, settings, staggerIdx++);

    // 7. Weekly dot calendar (enhanced)
    this.renderWeeklyDots(root, activity, completionData, settings, engine, staggerIdx++);

    // 8. Consistency Calendar
    renderConsistencyCalendar(root, activity, completionData, settings, staggerIdx++);

    // 9. Skill Heatmap (if applicable)
    if (activity.skillFolder) {
      renderSkillHeatmap(root, this.app, activity, settings, staggerIdx++);
    }

    // 10. Personal Records
    renderPersonalRecords(root, this.app, activity, completionData, settings, staggerIdx++);

    // 11. Recent Sessions
    this.renderRecentSessions(root, activity, staggerIdx++);
  }

  // --- Helper: Stats block ---

  private addStatBlock(container: HTMLElement, value: string, label: string): void {
    const block = container.createDiv({ cls: "olen-activity-stat-block" });
    block.createEl("div", { cls: "olen-data", text: value });
    block.createEl("div", { cls: "olen-data-sm", text: label });
  }

  // --- Weekly Dots (enhanced: shows each day as dot) ---

  private renderWeeklyDots(
    container: HTMLElement,
    activity: ActivityConfig,
    completions: CompletionMap,
    settings: import("../types").OlenSettings,
    engine: OlenEngine,
    staggerIdx: number
  ): void {
    const card = container.createDiv({ cls: "olen-card olen-weekly-dots" });
    card.style.setProperty("--i", String(staggerIdx));

    card.createEl("div", { cls: "olen-heading", text: "THIS WEEK" });

    const now = settings.simulatedDate ? new Date(settings.simulatedDate) : new Date();
    const dayOfWeek = now.getDay();
    const adjustedDay = dayOfWeek === 0 ? 7 : dayOfWeek; // Monday=1

    const actCompletions = completions[activity.id] ?? [];
    const completedDates = new Set(actCompletions.filter((c) => c.completed).map((c) => c.date));

    const weekStart = new Date(now);
    weekStart.setDate(weekStart.getDate() - adjustedDay + 1);

    const dotsRow = card.createDiv({ cls: "olen-weekly-dots-row" });
    const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    for (let i = 0; i < 7; i++) {
      const d = new Date(weekStart);
      d.setDate(d.getDate() + i);
      const dateStr = d.toISOString().slice(0, 10);
      const isFuture = i + 1 > adjustedDay;
      const isDone = completedDates.has(dateStr);

      const dotCol = dotsRow.createDiv({ cls: "olen-weekly-dot-col" });
      const dot = dotCol.createDiv({
        cls: `olen-weekly-dot ${isDone ? "olen-weekly-dot-done" : isFuture ? "olen-weekly-dot-future" : "olen-weekly-dot-missed"}`,
      });

      if (isDone) {
        dot.style.background = settings.categoryColors[activity.category] ?? "#c9a84c";
      }

      dotCol.createEl("div", { cls: "olen-data-sm", text: dayNames[i] });
    }
  }

  // --- Recent Sessions ---

  private renderRecentSessions(container: HTMLElement, activity: ActivityConfig, staggerIdx: number): void {
    const card = container.createDiv({ cls: "olen-card" });
    card.style.setProperty("--i", String(staggerIdx));

    card.createEl("div", { cls: "olen-heading", text: "RECENT SESSIONS" });

    const files = this.app.vault.getMarkdownFiles();
    const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";

    const sessionFiles = files
      .filter((f) => {
        if (!f.path.startsWith(normalizedFolder) && f.path !== activity.folder) return false;
        const cache = this.app.metadataCache.getFileCache(f);
        return cache?.frontmatter?.[activity.property] === true;
      })
      .sort((a, b) => b.stat.mtime - a.stat.mtime)
      .slice(0, 10);

    if (sessionFiles.length === 0) {
      card.createEl("div", { cls: "olen-body-italic", text: "No sessions yet." });
      return;
    }

    const list = card.createDiv({ cls: "olen-recent-sessions-list" });

    for (const file of sessionFiles) {
      const cache = this.app.metadataCache.getFileCache(file);
      const fm = cache?.frontmatter;

      const row = list.createDiv({ cls: "olen-recent-session-row olen-clickable" });

      const type = (fm?.[`${activity.property}-Type`] as string) ?? "";
      const typeIcon = type.toLowerCase() === "discipline" ? "◆" : type.toLowerCase() === "flow" ? "≈" : "○";

      row.createEl("span", { cls: "olen-recent-session-type", text: typeIcon });
      row.createEl("span", { text: file.basename });

      if (fm?.duration) {
        row.createEl("span", { cls: "olen-data-sm", text: ` · ${fm.duration}` });
      }

      row.addEventListener("click", () => {
        this.app.workspace.getLeaf("tab").openFile(file);
      });
    }
  }

  // --- Handlers ---

  private async handleStartSession(activity: ActivityConfig): Promise<void> {
    this.plugin.settings.activeWorkspace = {
      activityId: activity.id,
      activityName: activity.name,
      emoji: activity.emoji,
      category: activity.category,
      startTime: new Date().toISOString(),
      skills: [],
      hasWorkspace: true,
      skillFolder: activity.skillFolder,
    };
    await this.plugin.saveSettings();
    this.plugin.activateWorkspaceView();
  }

  private async handleLogCompletion(activity: ActivityConfig): Promise<void> {
    const { showLogModal } = await import("../modals/LogModal");
    showLogModal(this.plugin, activity, async (result) => {
      // Mark done
      const now = this.plugin.settings.simulatedDate
        ? new Date(this.plugin.settings.simulatedDate)
        : new Date();
      const dateStr = now.toISOString().slice(0, 10);
      const folder = activity.folder;
      const normalizedFolder = folder.endsWith("/") ? folder : folder + "/";

      const files = this.app.vault.getMarkdownFiles();
      const todayFile = files.find(
        (f) => (f.path === folder || f.path.startsWith(normalizedFolder)) && f.basename === dateStr
      );

      if (todayFile) {
        await this.app.fileManager.processFrontMatter(todayFile, (fm) => {
          fm[activity.property] = true;
          fm[`${activity.property}-Type`] = result.type.charAt(0).toUpperCase() + result.type.slice(1);
        });
      } else {
        const filePath = `${normalizedFolder}${dateStr}.md`;
        const typeName = result.type.charAt(0).toUpperCase() + result.type.slice(1);
        const content = `---\n${activity.property}: true\n${activity.property}-Type: "${typeName}"\n---\n`;
        try {
          await this.app.vault.create(filePath, content);
        } catch {
          // May already exist
        }
      }

      // XP + Boss damage
      if (result.type !== "skipped") {
        const state = this.plugin.settings.workspaceCompletionStates.find((s) => s.id === result.type);
        if (state) {
          const xp = Math.round(this.plugin.settings.devConfig.xpPerCompletion * state.xpMultiplier);
          this.plugin.settings.categoryXP[activity.category] += xp;
        }
        this.plugin.settings.bossCurrentHP = Math.max(
          0,
          this.plugin.settings.bossCurrentHP - activity.damagePerCompletion
        );
      }

      await this.plugin.saveSettings();
      await this.render();
    });
  }

  // --- Data Gathering ---

  private gatherCompletionData(): CompletionMap {
    const data: CompletionMap = {};
    for (const activity of this.plugin.settings.activities) {
      if (!activity.enabled) continue;
      data[activity.id] = this.getCompletionsFromFolder(activity.folder, activity.property);
    }
    return data;
  }

  private applyThemeOverrides(root: HTMLElement): void {
    const mode = this.plugin.settings.themeMode ?? "dark";
    const preset = THEME_PRESETS[mode];
    const overrides = this.plugin.settings.themeOverrides ?? {};
    const theme = { ...preset, ...overrides };

    const cssMap: Record<string, string> = {
      bgPrimary: "--bg-primary", bgSecondary: "--bg-secondary",
      cardBg: "--card-bg", cardBgSolid: "--card-bg-solid",
      cardBorder: "--card-border", cardBorderHover: "--card-border-hover",
      textPrimary: "--text-primary", textSecondary: "--text-secondary",
      textMuted: "--text-muted", textDim: "--text-dim",
      accentGold: "--accent-gold", accentGoldBright: "--accent-gold-bright",
      accentGoldDim: "--accent-gold-dim", accentAmber: "--accent-amber",
      accentWarm: "--accent-warm",
      danger: "--danger", dangerDim: "--danger-dim",
      success: "--success", successDim: "--success-dim",
      bodyColor: "--body-color", mindColor: "--mind-color", spiritColor: "--spirit-color",
      cardBlur: "--card-blur", glassSheen: "--glass-sheen",
      divider: "--divider",
      glowGold: "--glow-gold", glowGoldStrong: "--glow-gold-strong",
      glowDanger: "--glow-danger",
      shadowCard: "--shadow-card", shadowDeep: "--shadow-deep",
    };

    for (const [key, prop] of Object.entries(cssMap)) {
      const val = (theme as any)[key];
      if (val) root.style.setProperty(prop, val);
    }

    // Override with Obsidian accent color
    if (this.plugin.obsidianAccentColor) {
      applyAccentColor(root, this.plugin.obsidianAccentColor);
    }
  }

  private getCompletionsFromFolder(folderPath: string, fieldName: string): Completion[] {
    const files = this.app.vault.getMarkdownFiles();
    const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";

    return files
      .filter((file) => file.path === folderPath || file.path.startsWith(normalizedFolder))
      .map((file) => {
        const cache = this.app.metadataCache.getFileCache(file);
        const frontmatter = cache?.frontmatter;
        if (!frontmatter || typeof frontmatter[fieldName] !== "boolean") return null;
        return { date: file.basename, completed: frontmatter[fieldName] === true };
      })
      .filter((c): c is Completion => c !== null);
  }
}
