// ============================================================
// Olen — Dream Board View (My Why)
// Full-page vision board with images, core motivation, goals
// Inspired by Purposa-style dream boards
// ============================================================

import { ItemView, WorkspaceLeaf, Notice } from "obsidian";
import type OlenPlugin from "../main";
import type { DreamBoardImage } from "../types";
import { VIEW_TYPE_DREAMBOARD } from "../constants";

export class DreamBoardView extends ItemView {
  plugin: OlenPlugin;

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
    this.contentEl.empty();
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
    header.createEl("div", {
      cls: "olen-dreamboard-title",
      text: "My Why",
    });
    header.createEl("div", {
      cls: "olen-dreamboard-subtitle",
      text: "Your vision. Your purpose. Your fire.",
    });

    // Core motivation section
    this.renderMotivationSection(root, settings.myWhy);

    // Goals section
    this.renderGoalsSection(root, settings.goals ?? []);

    // Dream board grid (images)
    this.renderImageBoard(root, settings.dreamBoardImages ?? []);

    // Add image button
    this.renderAddImageSection(root);
  }

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

  private renderGoalsSection(root: HTMLElement, goals: string[]): void {
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

    const list = section.createDiv({ cls: "olen-dreamboard-goals-list" });
    for (let i = 0; i < goals.length; i++) {
      const goal = goals[i];
      const row = list.createDiv({ cls: "olen-dreamboard-goal-row" });

      row.createEl("span", {
        cls: "olen-dreamboard-goal-bullet",
        text: "\u25C6",
      });
      const textEl = row.createEl("span", {
        cls: "olen-dreamboard-goal-text",
        text: goal,
      });

      // Tap to edit
      textEl.addClass("olen-clickable");
      textEl.addEventListener("click", () => this.editGoal(i, goal));

      // Delete button
      const delBtn = row.createEl("button", {
        cls: "olen-dreamboard-goal-delete",
        text: "\u00D7",
      });
      delBtn.addEventListener("click", async () => {
        this.plugin.settings.goals.splice(i, 1);
        await this.plugin.saveSettings();
        await this.render();
      });
    }
  }

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
      cell.addEventListener("touchstart", () => {
        longPressTimer = setTimeout(() => {
          this.confirmDeleteImage(img.id);
        }, 600);
      }, { passive: true });
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

  // ── Dialogs ──

  private editMotivation(current: string): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Core Motivation");

    const textarea = sheet.createEl("textarea", {
      cls: "olen-dreamboard-input-area",
      attr: { placeholder: "I pursue discipline because...", rows: "4" },
    });
    textarea.value = current ?? "";

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", { cls: "olen-dreamboard-btn-primary", text: "Save" });
    saveBtn.addEventListener("click", async () => {
      this.plugin.settings.myWhy = textarea.value.trim();
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", { cls: "olen-dreamboard-btn-secondary", text: "Cancel" });
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

    const input = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "What do you aspire to?" },
    });

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", { cls: "olen-dreamboard-btn-primary", text: "Add" });
    saveBtn.addEventListener("click", async () => {
      const val = input.value.trim();
      if (!val) return;
      if (!this.plugin.settings.goals) this.plugin.settings.goals = [];
      this.plugin.settings.goals.push(val);
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", { cls: "olen-dreamboard-btn-secondary", text: "Cancel" });
    cancelBtn.addEventListener("click", () => this.closeOverlay(overlay));

    document.body.appendChild(overlay);
    requestAnimationFrame(() => {
      overlay.classList.add("visible");
      input.focus();
    });
  }

  private editGoal(index: number, current: string): void {
    const overlay = this.createOverlay();
    const sheet = this.createSheet(overlay, "Edit Goal");

    const input = sheet.createEl("input", {
      cls: "olen-dreamboard-input",
      attr: { type: "text", placeholder: "Your aspiration..." },
    });
    input.value = current;

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", { cls: "olen-dreamboard-btn-primary", text: "Save" });
    saveBtn.addEventListener("click", async () => {
      const val = input.value.trim();
      if (!val) return;
      this.plugin.settings.goals[index] = val;
      await this.plugin.saveSettings();
      this.closeOverlay(overlay);
      await this.render();
    });

    const cancelBtn = actions.createEl("button", { cls: "olen-dreamboard-btn-secondary", text: "Cancel" });
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
    const pathLabel = sheet.createEl("label", { cls: "olen-dreamboard-label", text: "Image path" });
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
    const catSelect = sheet.createEl("select", { cls: "olen-dreamboard-select" });
    const categories = [
      { value: "dream", label: "Dream" },
      { value: "motivation", label: "Motivation" },
      { value: "goal", label: "Goal" },
    ];
    for (const cat of categories) {
      catSelect.createEl("option", { text: cat.label, attr: { value: cat.value } });
    }

    const actions = sheet.createDiv({ cls: "olen-dreamboard-dialog-actions" });

    const saveBtn = actions.createEl("button", { cls: "olen-dreamboard-btn-primary", text: "Add" });
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
        category: catSelect.value as "dream" | "motivation" | "goal",
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

    const cancelBtn = actions.createEl("button", { cls: "olen-dreamboard-btn-secondary", text: "Cancel" });
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
    const overrides = this.plugin.settings.themeOverrides;
    if (overrides) {
      if (overrides.bgPrimary) root.style.setProperty("--bg-primary", overrides.bgPrimary);
      if (overrides.textPrimary) root.style.setProperty("--text-primary", overrides.textPrimary);
      if (overrides.textMuted) root.style.setProperty("--text-muted", overrides.textMuted);
      if (overrides.accentGold) root.style.setProperty("--accent-gold", overrides.accentGold);
    }
  }
}
