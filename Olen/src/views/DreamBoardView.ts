// ============================================================
// Olen — Dream Board View (My Why)
// Full-page vision board with aphorism, core motivation,
// structured goals with categories, subgoals, completion tracking
// ============================================================

import { ItemView, WorkspaceLeaf, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type {
  DreamBoardImage,
  Goal,
  SubGoal,
} from "../types";
import { VIEW_TYPE_DREAMBOARD } from "../constants";
import { THEME_PRESETS } from "../data/themes";
import { applyAccentColor } from "../utils/accentColor";
import { renderMementoMoriFull } from "../components/MementoMori";
import { createJournalEntry, getRecentJournalEntries } from "../utils/journal";
import { openFindingWhyModal } from "../modals/LifePhasesModal";

export class DreamBoardView extends ItemView {
  plugin: OlenPlugin;
  private activeTab: "goals" | "completed" = "goals";
  private expandedGoals: Set<string> = new Set();

  constructor(leaf: WorkspaceLeaf, plugin: OlenPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return VIEW_TYPE_DREAMBOARD;
  }

  getDisplayText(): string {
    return "My Why";
  }

  getIcon(): string {
    return "heart";
  }

  async onOpen(): Promise<void> {
    await this.render();
  }

  async onClose(): Promise<void> {
    // Move completed goals to completedGoals on close
    await this.moveCompletedGoals();
    this.contentEl.empty();
  }

  private async moveCompletedGoals(): Promise<void> {
    const settings = this.plugin.settings;
    const completed = settings.goals.filter((g) => g.completed);
    if (completed.length === 0) return;

    if (!settings.completedGoals) settings.completedGoals = [];
    settings.completedGoals.push(...completed);
    settings.goals = settings.goals.filter((g) => !g.completed);
    await this.plugin.saveSettings();
  }

  async render(): Promise<void> {
    const container = this.contentEl;
    container.empty();

    const settings = this.plugin.settings;
    const root = container.createDiv({ cls: "olen-dreamboard" });

    // Apply theme
    this.applyTheme(root);

    // Back button
    const nav = root.createDiv({ cls: "olen-dreamboard-nav" });
    const backBtn = nav.createEl("button", {
      cls: "olen-dreamboard-back",
      text: "\u2190 Dashboard",
    });
    backBtn.addEventListener("click", () => {
      this.plugin.activateDashboard();
    });

    // Header section
    const header = root.createDiv({ cls: "olen-dreamboard-header" });
    const titleRow = header.createDiv({ cls: "olen-dreamboard-title-row" });
    titleRow.createEl("div", {
      cls: "olen-dreamboard-title",
      text: "My Why",
    });
    const infoBtn = titleRow.createEl("button", {
      cls: "olen-dreamboard-title-info",
      attr: { "aria-label": "Finding Your Why guide" },
    });
    infoBtn.textContent = "\u24D8";
    infoBtn.addEventListener("click", () => openFindingWhyModal(this.plugin, () => this.render()));

    // Aphorism section
    this.renderAphorismSection(root, settings.aphorism ?? "");

    // Core motivation section
    this.renderMotivationSection(root, settings.myWhy);

    // Tab bar: Goals / Completed
    this.renderTabBar(root);

    if (this.activeTab === "goals") {
      // Goals section
      this.renderGoalsSection(root, settings.goals ?? []);
    } else {
      // Completed goals section with graph
      this.renderCompletedSection(root, settings.completedGoals ?? []);
    }

    // Memento Mori section
    renderMementoMoriFull(root, settings, 0, () => this.editLifeExpectancy());

    // Journal section
    this.renderJournalSection(root);

    // Dream board grid (images)
    this.renderImageBoard(root, settings.dreamBoardImages ?? []);

    // Add image button
    this.renderAddImageSection(root);
  }

  // ── Aphorism ──

  private renderAphorismSection(root: HTMLElement, aphorism: string): void {
    const section = root.createDiv({ cls: "olen-dreamboard-section" });

    const label = section.createDiv({ cls: "olen-dreamboard-section-label" });
    label.createEl("span", { text: "APHORISM" });

    const card = section.createDiv({ cls: "olen-dreamboard-motivation-card" });

    if (aphorism?.trim()) {
      card.createEl("div", {
        cls: "olen-dreamboard-motivation-text",
        text: `"${aphorism}"`,
      });
    } else {
      card.createEl("div", {
        cls: "olen-dreamboard-motivation-text olen-dreamboard-placeholder",
        text: "Tap to set your aphorism — shown on the dashboard...",
      });
    }

    card.addClass("olen-clickable");
    card.addEventListener("click", () => this.editAphorism(aphorism));
  }

  // ── Core Motivation ──

  private renderMotivationSection(root: HTMLElement, myWhy: string): void {
    const section = root.createDiv({ cls: "olen-dreamboard-section" });

    const label = section.createDiv({ cls: "olen-dreamboard-section-label" });
    label.createEl("span", { text: "CORE MOTIVATION" });

    const card = section.createDiv({ cls: "olen-dreamboard-motivation-card" });

    if (myWhy?.trim()) {
      card.createEl("div", {
        cls: "olen-dreamboard-motivation-text",
        text: `"${myWhy}"`,
      });
    } else {
      card.createEl("div", {
        cls: "olen-dreamboard-motivation-text olen-dreamboard-placeholder",
        text: "Tap to write your core motivation...",
      });
    }

    card.addClass("olen-clickable");
    card.addEventListener("click", () => this.editMotivation(myWhy));
  }

  // ── Tab Bar ──

  private renderTabBar(root: HTMLElement): void {
    const bar = root.createDiv({ cls: "olen-dreamboard-tabs" });

    const goalsTab = bar.createEl("button", {
      cls: `olen-dreamboard-tab ${this.activeTab === "goals" ? "olen-dreamboard-tab-active" : ""}`,
      text: "Goals",
    });
    goalsTab.addEventListener("click", () => {
      this.activeTab = "goals";
      this.render();
    });

    const completedTab = bar.createEl("button", {
      cls: `olen-dreamboard-tab ${this.activeTab === "completed" ? "olen-dreamboard-tab-active" : ""}`,
      text: "Completed",
    });
    completedTab.addEventListener("click", () => {
      this.activeTab = "completed";
      this.render();
    });
  }

  // ── Goals Section ──

  private renderGoalsSection(root: HTMLElement, goals: Goal[]): void {
    const section = root.createDiv({ cls: "olen-dreamboard-section" });

    const labelRow = section.createDiv({ cls: "olen-dreamboard-section-label" });
    labelRow.createEl("span", { text: "GOALS & ASPIRATIONS" });

    const addBtn = labelRow.createEl("button", {
      cls: "olen-dreamboard-add-inline",
      text: "+",
    });
    addBtn.addEventListener("click", () => this.addGoal());

    if (goals.length === 0) {
      const empty = section.createDiv({ cls: "olen-dreamboard-empty" });
      empty.createEl("div", { text: "No goals yet." });
      empty.createEl("div", {
        cls: "olen-dreamboard-empty-sub",
        text: "Tap + to add your first aspiration.",
      });
      return;
    }

    for (const goal of goals) {
      this.renderGoalRow(section, goal);
    }
  }

  private renderGoalRow(parent: HTMLElement, goal: Goal): void {
    const row = parent.createDiv({
      cls: `olen-dreamboard-goal-row ${goal.completed ? "olen-dreamboard-goal-completed" : ""}`,
    });

    // Completion checkbox
    const checkbox = row.createEl("button", {
      cls: `olen-dreamboard-goal-check ${goal.completed ? "olen-dreamboard-goal-check-done" : ""}`,
    });
    checkbox.textContent = goal.completed ? "\u2713" : "";
    checkbox.addEventListener("click", async (e) => {
      e.stopPropagation();
      await this.toggleGoalCompletion(goal);
    });

    // Goal text
    const textArea = row.createDiv({ cls: "olen-dreamboard-goal-content" });
    const textEl = textArea.createEl("span", {
      cls: `olen-dreamboard-goal-text ${goal.completed ? "olen-dreamboard-goal-text-done" : ""}`,
      text: goal.text,
    });

    // Tap text to edit
    textEl.addClass("olen-clickable");
    textEl.addEventListener("click", () => this.editGoal(goal));

    // Actions: expand subgoals, delete
    const actions = row.createDiv({ cls: "olen-dreamboard-goal-actions" });

    // Subgoal toggle
    const hasSubgoals = goal.subgoals && goal.subgoals.length > 0;
    const expandBtn = actions.createEl("button", {
      cls: "olen-dreamboard-goal-expand",
      text: this.expandedGoals.has(goal.id) ? "\u25BC" : `\u25B6${hasSubgoals ? ` ${goal.subgoals.length}` : ""}`,
    });
    expandBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (this.expandedGoals.has(goal.id)) {
        this.expandedGoals.delete(goal.id);
      } else {
        this.expandedGoals.add(goal.id);
      }
      this.render();
    });

    // Delete button
    const delBtn = actions.createEl("button", {
      cls: "olen-dreamboard-goal-delete",
      text: "\u00D7",
    });
    delBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      const idx = this.plugin.settings.goals.findIndex((g) => g.id === goal.id);
      if (idx !== -1) {
        this.plugin.settings.goals.splice(idx, 1);
        await this.plugin.saveSettings();
        await this.render();
      }
    });

    // Subgoals (if expanded)
    if (this.expandedGoals.has(goal.id)) {
      const subSection = parent.createDiv({ cls: "olen-dreamboard-subgoals" });

      for (let si = 0; si < (goal.subgoals ?? []).length; si++) {
        const sub = goal.subgoals[si];
        this.renderSubgoalRow(subSection, goal, sub, si);
      }

      // Add subgoal button
      const addSubBtn = subSection.createEl("button", {
        cls: "olen-dreamboard-add-subgoal",
        text: "+ Add subgoal",
      });
      addSubBtn.addEventListener("click", () => this.addSubgoal(goal));
    }
  }

  private renderSubgoalRow(
    parent: HTMLElement,
    parentGoal: Goal,
    sub: SubGoal,
    index: number
  ): void {
    const row = parent.createDiv({
      cls: `olen-dreamboard-subgoal-row ${sub.completed ? "olen-dreamboard-goal-completed" : ""}`,
    });

    // Checkbox
    const checkbox = row.createEl("button", {
      cls: `olen-dreamboard-goal-check olen-dreamboard-subgoal-check ${sub.completed ? "olen-dreamboard-goal-check-done" : ""}`,
    });
    checkbox.textContent = sub.completed ? "\u2713" : "";
    checkbox.addEventListener("click", async (e) => {
      e.stopPropagation();
      await this.toggleSubgoalCompletion(parentGoal, index);
    });

    // Text
    const textEl = row.createEl("span", {
      cls: `olen-dreamboard-goal-text ${sub.completed ? "olen-dreamboard-goal-text-done" : ""}`,
      text: sub.text,
    });
    textEl.addClass("olen-clickable");
    textEl.addEventListener("click", () => this.editSubgoal(parentGoal, index, sub));

    // Delete
    const delBtn = row.createEl("button", {
      cls: "olen-dreamboard-goal-delete",
      text: "\u00D7",
    });
    delBtn.addEventListener("click", async (e) => {
      e.stopPropagation();
      parentGoal.subgoals.splice(index, 1);
      await this.plugin.saveSettings();
      await this.render();
    });
  }

  // ── Completed Section ──

  private renderCompletedSection(root: HTMLElement, completed: Goal[]): void {
    const section = root.createDiv({ cls: "olen-dreamboard-section" });

    const labelRow = section.createDiv({ cls: "olen-dreamboard-section-label" });
    labelRow.createEl("span", { text: "COMPLETED GOALS" });

    if (completed.length === 0) {
      const empty = section.createDiv({ cls: "olen-dreamboard-empty" });
      empty.createEl("div", { text: "No completed goals yet." });
      empty.createEl("div", {
        cls: "olen-dreamboard-empty-sub",
        text: "Complete goals to see them here.",
      });
      return;
    }

    // Consistency graph
    this.renderConsistencyGraph(section, completed);

    // Completed goals list
    const list = section.createDiv({ cls: "olen-dreamboard-goals-list" });
    for (const goal of completed) {
      const row = list.createDiv({ cls: "olen-dreamboard-goal-row olen-dreamboard-goal-completed" });

      row.createEl("span", {
        cls: "olen-dreamboard-goal-check olen-dreamboard-goal-check-done",
        text: "\u2713",
      });

      const textArea = row.createDiv({ cls: "olen-dreamboard-goal-content" });
      const completedDate = goal.completedAt
        ? new Date(goal.completedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
        : "";

      textArea.createEl("span", {
        cls: "olen-dreamboard-goal-text olen-dreamboard-goal-text-done",
        text: goal.text,
      });

      if (completedDate) {
        const meta = textArea.createDiv({ cls: "olen-dreamboard-goal-meta" });
        meta.createEl("span", {
          cls: "olen-dreamboard-goal-date",
          text: completedDate,
        });

        // Show subgoal count
        if (goal.subgoals && goal.subgoals.length > 0) {
          meta.createEl("span", {
            cls: "olen-dreamboard-goal-sub-count",
            text: `${goal.subgoals.length} subgoal${goal.subgoals.length > 1 ? "s" : ""}`,
          });
        }
      }
    }
  }

  // ── Consistency Graph ──

  private renderConsistencyGraph(parent: HTMLElement, completed: Goal[]): void {
    if (completed.length === 0) return;

    const graphCard = parent.createDiv({ cls: "olen-dreamboard-graph-card" });
    graphCard.createEl("div", {
      cls: "olen-dreamboard-graph-title",
      text: "Goal Completion History",
    });

    // Collect all completion events
    const events: { date: Date; isSubgoal: boolean; text: string }[] = [];

    for (const goal of completed) {
      if (goal.completedAt) {
        events.push({ date: new Date(goal.completedAt), isSubgoal: false, text: goal.text });
      }
      for (const sub of goal.subgoals ?? []) {
        if (sub.completedAt) {
          events.push({ date: new Date(sub.completedAt), isSubgoal: true, text: sub.text });
        }
      }
    }

    // Also include in-progress subgoal completions
    for (const goal of this.plugin.settings.goals ?? []) {
      for (const sub of goal.subgoals ?? []) {
        if (sub.completedAt) {
          events.push({ date: new Date(sub.completedAt), isSubgoal: true, text: sub.text });
        }
      }
    }

    if (events.length === 0) return;
    events.sort((a, b) => a.date.getTime() - b.date.getTime());

    // Fixed 30-day window with year context
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const graphStart = thirtyDaysAgo.getTime();
    const graphEnd = now.getTime();
    const graphRange = graphEnd - graphStart;

    // Include all events (even older ones contribute to cumulative count)
    const allGoalEvents = events.filter((e) => !e.isSubgoal);
    const recentGoalEvents = allGoalEvents.filter((e) => e.date.getTime() >= graphStart);
    const olderGoalCount = allGoalEvents.filter((e) => e.date.getTime() < graphStart).length;
    const subEvents = events.filter((e) => e.isSubgoal && e.date.getTime() >= graphStart);

    // Graph dimensions
    const W = 400;
    const H = 180;
    const PAD_L = 10;
    const PAD_R = 10;
    const PAD_T = 40; // room for labels above
    const PAD_B = 20;
    const plotW = W - PAD_L - PAD_R;
    const plotH = H - PAD_T - PAD_B;

    const maxGoals = olderGoalCount + recentGoalEvents.length;

    // Resolve accent color from CSS custom properties (SVG attributes can't use var())
    const accentBright = getComputedStyle(graphCard).getPropertyValue("--accent-gold-bright").trim() || "#e8c35a";
    const textSecondary = getComputedStyle(graphCard).getPropertyValue("--text-secondary").trim() || "#c8c0b2";

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "olen-dreamboard-graph-svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);

    // Build step line
    let cumulative = olderGoalCount;
    const yScale = (val: number) => PAD_T + plotH - (val / Math.max(maxGoals, 1)) * plotH;
    const xScale = (t: number) => PAD_L + ((t - graphStart) / graphRange) * plotW;

    const points: string[] = [];
    // Start from left edge at the cumulative count from before the window
    points.push(`M ${PAD_L} ${yScale(cumulative)}`);

    for (const event of recentGoalEvents) {
      const x = xScale(event.date.getTime());
      // Flat line to this point
      points.push(`L ${x} ${yScale(cumulative)}`);
      cumulative++;
      // Jump up
      points.push(`L ${x} ${yScale(cumulative)}`);
    }

    // Extend to right edge
    points.push(`L ${PAD_L + plotW} ${yScale(cumulative)}`);

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", points.join(" "));
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", accentBright);
    path.setAttribute("stroke-width", "2.5");
    path.setAttribute("stroke-linecap", "round");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);

    // Draw goal markers with title + date labels
    let markerCumulative = olderGoalCount;
    for (const event of recentGoalEvents) {
      markerCumulative++;
      const x = xScale(event.date.getTime());
      const y = yScale(markerCumulative);

      // Marker circle
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", String(x));
      circle.setAttribute("cy", String(y));
      circle.setAttribute("r", "5");
      circle.setAttribute("fill", accentBright);
      svg.appendChild(circle);

      // Goal title above the marker
      const titleText = event.text.length > 20 ? event.text.slice(0, 18) + "..." : event.text;
      const titleLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
      titleLabel.setAttribute("x", String(x));
      titleLabel.setAttribute("y", String(Math.max(y - 16, 8)));
      titleLabel.setAttribute("text-anchor", "middle");
      titleLabel.setAttribute("fill", accentBright);
      titleLabel.setAttribute("font-size", "9");
      titleLabel.setAttribute("font-weight", "600");
      titleLabel.textContent = titleText;
      svg.appendChild(titleLabel);

      // Date below the title
      const dateStr = `${event.date.getDate()}/${event.date.getMonth() + 1}`;
      const dateLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
      dateLabel.setAttribute("x", String(x));
      dateLabel.setAttribute("y", String(Math.max(y - 7, 16)));
      dateLabel.setAttribute("text-anchor", "middle");
      dateLabel.setAttribute("fill", textSecondary);
      dateLabel.setAttribute("font-size", "8");
      dateLabel.textContent = dateStr;
      svg.appendChild(dateLabel);
    }

    // Draw subgoal markers (smaller dots along the bottom)
    for (const event of subEvents) {
      const x = xScale(event.date.getTime());
      const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", String(x));
      circle.setAttribute("cy", String(H - 8));
      circle.setAttribute("r", "2.5");
      circle.setAttribute("fill", textSecondary);
      svg.appendChild(circle);
    }

    // Year label at bottom-left
    const yearLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    yearLabel.setAttribute("x", String(PAD_L));
    yearLabel.setAttribute("y", String(H - 4));
    yearLabel.setAttribute("fill", textSecondary);
    yearLabel.setAttribute("font-size", "9");
    yearLabel.textContent = String(now.getFullYear());
    svg.appendChild(yearLabel);

    // "Last 30 days" label at bottom-right
    const rangeLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    rangeLabel.setAttribute("x", String(W - PAD_R));
    rangeLabel.setAttribute("y", String(H - 4));
    rangeLabel.setAttribute("text-anchor", "end");
    rangeLabel.setAttribute("fill", textSecondary);
    rangeLabel.setAttribute("font-size", "9");
    rangeLabel.textContent = "Last 30 days";
    svg.appendChild(rangeLabel);

    graphCard.appendChild(svg);

    // Stats line
    const stats = graphCard.createDiv({ cls: "olen-dreamboard-graph-stats" });
    stats.createEl("span", { text: `${completed.length} goal${completed.length !== 1 ? "s" : ""} achieved` });

    const totalSubs = completed.reduce((sum, g) => sum + (g.subgoals?.length ?? 0), 0);
    if (totalSubs > 0) {
      stats.createEl("span", { text: `${totalSubs} subgoal${totalSubs !== 1 ? "s" : ""} completed` });
    }
  }

  // ── Vision Board (kept) ──

  private renderImageBoard(root: HTMLElement, images: DreamBoardImage[]): void {
    const section = root.createDiv({ cls: "olen-dreamboard-section" });

    const labelRow = section.createDiv({ cls: "olen-dreamboard-section-label" });
    labelRow.createEl("span", { text: "VISION BOARD" });

    if (images.length === 0) {
      const empty = section.createDiv({ cls: "olen-dreamboard-empty" });
      empty.createEl("div", { text: "Your vision board is empty." });
      empty.createEl("div", {
        cls: "olen-dreamboard-empty-sub",
        text: "Add images that represent your dreams and goals.",
      });
      return;
    }

    const grid = section.createDiv({ cls: "olen-dreamboard-grid" });

    for (const img of images) {
      const cell = grid.createDiv({ cls: "olen-dreamboard-cell" });

      const imgEl = cell.createEl("div", { cls: "olen-dreamboard-img" });

      // Resolve vault path to resource URL
      const adapter = this.app.vault.adapter;
      const resourcePath = (adapter as any).getResourcePath
        ? (adapter as any).getResourcePath(img.src)
        : img.src;
      imgEl.style.backgroundImage = `url("${resourcePath}")`;

      // Category badge
      const badge = cell.createDiv({ cls: "olen-dreamboard-badge" });
      badge.textContent = img.category.toUpperCase();

      // Caption overlay
      if (img.caption) {
        const caption = cell.createDiv({ cls: "olen-dreamboard-caption" });
        caption.textContent = img.caption;
      }

      // Delete on long press / right click
      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        this.confirmDeleteImage(img.id);
      });

      // Long press for mobile
      let longPressTimer: ReturnType<typeof setTimeout>;
      cell.addEventListener(
        "touchstart",
        () => {
          longPressTimer = setTimeout(() => {
            this.confirmDeleteImage(img.id);
          }, 600);
        },
        { passive: true }
      );
      cell.addEventListener("touchend", () => clearTimeout(longPressTimer));
      cell.addEventListener("touchmove", () => clearTimeout(longPressTimer));
    }
  }

  private renderAddImageSection(root: HTMLElement): void {
    const section = root.createDiv({ cls: "olen-dreamboard-add-section" });

    const btn = section.createEl("button", {
      cls: "olen-dreamboard-add-btn",
    });
    btn.innerHTML = `<span class="olen-dreamboard-add-icon">+</span><span>Add to Vision Board</span>`;
    btn.addEventListener("click", () => this.showAddImageDialog());
  }

  // ── Completion Logic ──

  private async toggleGoalCompletion(goal: Goal): Promise<void> {
    const idx = this.plugin.settings.goals.findIndex((g) => g.id === goal.id);
    if (idx === -1) return;

    const g = this.plugin.settings.goals[idx];

    if (g.completed) {
      // Un-complete
      g.completed = false;
      g.completedAt = undefined;
      await this.plugin.saveSettings();
      await this.render();
      return;
    }

    // Check if all subgoals are complete
    if (g.subgoals && g.subgoals.length > 0) {
      const allSubsDone = g.subgoals.every((s) => s.completed);
      if (!allSubsDone) {
        new Notice("Complete all subgoals first");
        return;
      }
    }

    g.completed = true;
    g.completedAt = new Date().toISOString();
    await this.plugin.saveSettings();
    await this.render();
  }

  private async toggleSubgoalCompletion(parentGoal: Goal, subIndex: number): Promise<void> {
    const goal = this.plugin.settings.goals.find((g) => g.id === parentGoal.id);
    if (!goal || !goal.subgoals[subIndex]) return;

    const sub = goal.subgoals[subIndex];
    sub.completed = !sub.completed;
    sub.completedAt = sub.completed ? new Date().toISOString() : undefined;

    // Check if all subgoals now complete → prompt parent completion
    if (sub.completed && goal.subgoals.every((s) => s.completed)) {
      new Notice("All subgoals complete! You can now mark the parent goal as done.");
    }

    await this.plugin.saveSettings();
    await this.render();
  }

  // ── Dialogs ──

  private editAphorism(current: string): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Aphorism");

    sheet.createEl("div", {
      cls: "olen-dreamboard-dialog-hint",
      text: "This quote appears on your dashboard hero card.",
    });

    const textarea = sheet.createEl("textarea", {
      cls: "olen-dreamboard-input-area",
      attr: { placeholder: "Your favorite quote or mantra...", rows: "3" },
    });
    textarea.value = current ?? "";

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Save",
    });
    saveBtn.addEventListener("click", async () => {
      this.plugin.settings.aphorism = textarea.value.trim();
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      textarea.focus();
    });
  }

  private editMotivation(current: string): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Core Motivation");

    const textarea = sheet.createEl("textarea", {
      cls: "olen-dreamboard-input-area",
      attr: { placeholder: "I pursue discipline because...", rows: "4" },
    });
    textarea.value = current ?? "";

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Save",
    });
    saveBtn.addEventListener("click", async () => {
      this.plugin.settings.myWhy = textarea.value.trim();
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      textarea.focus();
    });
  }

  private addGoal(): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "New Goal");

    // Goal text
    const input = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "What do you aspire to?" },
    });

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Add",
    });
    saveBtn.addEventListener("click", async () => {
      const val = input.value.trim();
      if (!val) return;
      if (!this.plugin.settings.goals) this.plugin.settings.goals = [];

      const newGoal: Goal = {
        id: `goal-${Date.now()}`,
        text: val,
        type: "title",
        category: "personal-growth",
        completed: false,
        subgoals: [],
      };

      this.plugin.settings.goals.push(newGoal);
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  }

  private editGoal(goal: Goal): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Edit Goal");

    const input = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "Your aspiration..." },
    });
    input.value = goal.text;

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Save",
    });
    saveBtn.addEventListener("click", async () => {
      const val = input.value.trim();
      if (!val) return;
      const idx = this.plugin.settings.goals.findIndex((g) => g.id === goal.id);
      if (idx === -1) return;

      this.plugin.settings.goals[idx].text = val;
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  }

  private addSubgoal(parentGoal: Goal): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "New Subgoal");

    const input = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "Subgoal description..." },
    });

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Add",
    });
    saveBtn.addEventListener("click", async () => {
      const val = input.value.trim();
      if (!val) return;

      const goal = this.plugin.settings.goals.find((g) => g.id === parentGoal.id);
      if (!goal) return;
      if (!goal.subgoals) goal.subgoals = [];

      const newSub: SubGoal = {
        id: `sub-${Date.now()}`,
        text: val,
        type: "title",
        completed: false,
      };

      goal.subgoals.push(newSub);
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  }

  private editSubgoal(parentGoal: Goal, index: number, sub: SubGoal): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Edit Subgoal");

    const input = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "Subgoal description..." },
    });
    input.value = sub.text;

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Save",
    });
    saveBtn.addEventListener("click", async () => {
      const val = input.value.trim();
      if (!val) return;
      const goal = this.plugin.settings.goals.find((g) => g.id === parentGoal.id);
      if (!goal || !goal.subgoals[index]) return;

      goal.subgoals[index].text = val;
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  }

  private showAddImageDialog(): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Add Vision Image");

    // Image path
    sheet.createEl("label", { cls: "olen-dreamboard-label", text: "Image path" });
    const pathInput = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "path/to/image.jpg (vault path)" },
    });

    // Caption
    const capLabel = sheet.createEl("label", { cls: "olen-dreamboard-label", text: "Caption (optional)" });
    capLabel.style.marginTop = "12px";
    const capInput = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "What does this represent?" },
    });

    // Category
    const catLabel = sheet.createEl("label", { cls: "olen-dreamboard-label", text: "Category" });
    catLabel.style.marginTop = "12px";
    const catInput = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "e.g. Dream, Motivation, Goal..." },
    });

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Add",
    });
    saveBtn.addEventListener("click", async () => {
      const src = pathInput.value.trim();
      if (!src) {
        new Notice("Enter an image path");
        return;
      }

      const newImage: DreamBoardImage = {
        id: `dream-${Date.now()}`,
        src,
        caption: capInput.value.trim(),
        category: catInput.value.trim() || "dream",
        addedAt: new Date().toISOString(),
      };

      if (!this.plugin.settings.dreamBoardImages) {
        this.plugin.settings.dreamBoardImages = [];
      }
      this.plugin.settings.dreamBoardImages.push(newImage);
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      new Notice("Image added to vision board");
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      pathInput.focus();
    });
  }

  private async confirmDeleteImage(imageId: string): Promise<void> {
    const images = this.plugin.settings.dreamBoardImages ?? [];
    const idx = images.findIndex((i) => i.id === imageId);
    if (idx === -1) return;

    images.splice(idx, 1);
    await this.plugin.saveSettings();
    new Notice("Image removed from vision board");
    await this.render();
  }

  // ── Journal Section ──

  private renderJournalSection(root: HTMLElement): void {
    const section = root.createDiv({ cls: "olen-dreamboard-section" });

    const labelRow = section.createDiv({ cls: "olen-dreamboard-section-label" });
    labelRow.createEl("span", { text: "JOURNAL" });

    const writeBtn = labelRow.createEl("button", {
      cls: "olen-dreamboard-add-inline",
      text: "+",
    });
    writeBtn.addEventListener("click", () => this.openJournalEditor());

    // Recent entries
    const folder = this.plugin.settings.sundayCheckin?.journalFolder || "Journal";
    const entries = getRecentJournalEntries(this.app, folder, 5);

    if (entries.length === 0) {
      const empty = section.createDiv({ cls: "olen-dreamboard-empty" });
      empty.createEl("div", { text: "No journal entries yet." });
      empty.createEl("div", {
        cls: "olen-dreamboard-empty-sub",
        text: "Tap + to write your first reflection.",
      });
      return;
    }

    const list = section.createDiv({ cls: "olen-dreamboard-journal-list" });
    for (const entry of entries) {
      const row = list.createDiv({ cls: "olen-dreamboard-journal-row" });
      row.createEl("span", { cls: "olen-dreamboard-journal-date", text: entry.date });
      row.createEl("span", { cls: "olen-dreamboard-journal-name", text: entry.name });
      row.addEventListener("click", () => {
        const file = this.app.vault.getAbstractFileByPath(entry.path);
        if (file) {
          this.app.workspace.getLeaf("tab").openFile(file as any);
        }
      });
      row.addClass("olen-clickable");
    }
  }

  private openJournalEditor(): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Write in Journal");

    const titleInput = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: new Date().toISOString().slice(0, 10) },
    });

    const textarea = sheet.createEl("textarea", {
      cls: "olen-dreamboard-input-area",
      attr: { placeholder: "What's on your mind?", rows: "6" },
    });

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Save",
    });
    saveBtn.addEventListener("click", async () => {
      const content = textarea.value.trim();
      if (!content) return;

      const title = titleInput.value.trim() || new Date().toISOString().slice(0, 10);
      const folder = this.plugin.settings.sundayCheckin?.journalFolder || "Journal";
      await createJournalEntry(this.app, folder, title, content);
      new Notice("Journal entry saved");
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      textarea.focus();
    });
  }

  // ── Life Expectancy Override ──

  private editLifeExpectancy(): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Life Expectancy");

    sheet.createEl("div", {
      cls: "olen-dreamboard-dialog-hint",
      text: "Override the default life expectancy used for the Memento Mori visualization. Set to 0 for gender-based default.",
    });

    const input = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: {
        type: "number",
        placeholder: "e.g. 80",
        min: "0",
        max: "120",
        step: "0.1",
      },
    });
    input.value = String(this.plugin.settings.personalStats.lifeExpectancy || "");

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-primary",
      text: "Save",
    });
    saveBtn.addEventListener("click", async () => {
      const v = parseFloat(input.value);
      this.plugin.settings.personalStats.lifeExpectancy = isNaN(v) || v < 0 ? 0 : v;
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", {
      cls: "olen-dreamboard-btn-secondary",
      text: "Cancel",
    });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  }

  // ── Helpers ──

  private createOverlay(): HTMLElement {
    const overlay = document.createElement("div");
    overlay.className = "olen-modal-overlay";
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) this.closeOverlay(overlay);
    });
    return overlay;
  }

  private createSheet(overlay: HTMLElement, title: string): HTMLElement {
    const sheet = document.createElement("div");
    sheet.className = "olen-modal-sheet olen-dreamboard-sheet";
    overlay.appendChild(sheet);

    const handle = document.createElement("div");
    handle.className = "olen-modal-handle";
    sheet.appendChild(handle);

    const titleEl = document.createElement("div");
    titleEl.className = "olen-modal-title";
    titleEl.textContent = title;
    sheet.appendChild(titleEl);

    return sheet;
  }

  private closeOverlay(overlay: HTMLElement): void {
    overlay.classList.remove("visible");
    setTimeout(() => overlay.remove(), 300);
  }

  private applyTheme(root: HTMLElement): void {
    const mode = this.plugin.settings.themeMode ?? "dark";
    const preset = THEME_PRESETS[mode];
    const overrides = this.plugin.settings.themeOverrides ?? {};
    const theme = { ...preset, ...overrides };

    if (theme.bgPrimary) root.style.setProperty("--bg-primary", theme.bgPrimary);
    if (theme.bgSecondary) root.style.setProperty("--bg-secondary", theme.bgSecondary);
    if (theme.cardBg) root.style.setProperty("--card-bg", theme.cardBg);
    if (theme.cardBgSolid) root.style.setProperty("--card-bg-solid", theme.cardBgSolid);
    if (theme.cardBorder) root.style.setProperty("--card-border", theme.cardBorder);
    if (theme.textPrimary) root.style.setProperty("--text-primary", theme.textPrimary);
    if (theme.textSecondary) root.style.setProperty("--text-secondary", theme.textSecondary);
    if (theme.textMuted) root.style.setProperty("--text-muted", theme.textMuted);
    if (theme.textDim) root.style.setProperty("--text-dim", theme.textDim);
    if (theme.accentGold) root.style.setProperty("--accent-gold", theme.accentGold);
    if (theme.accentGoldBright) root.style.setProperty("--accent-gold-bright", theme.accentGoldBright);
    if (theme.shadowCard) root.style.setProperty("--shadow-card", theme.shadowCard);
    if (theme.danger) root.style.setProperty("--danger", theme.danger);
    if (theme.success) root.style.setProperty("--success", theme.success);

    // Override with Obsidian accent color
    if (this.plugin.obsidianAccentColor) {
      applyAccentColor(root, this.plugin.obsidianAccentColor);
    }
  }
}
