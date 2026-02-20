// ============================================================
// Olen — Embedded Markdown View
// Renders user's custom .md files (hub templates, session templates)
// inside the Olen shell with navigation chrome
// ============================================================

import { ItemView, WorkspaceLeaf, TFile, MarkdownRenderer, Notice } from "obsidian";
import type OlenPlugin from "../main";

export const VIEW_TYPE_EMBEDDED = "olen-embedded-view";

export interface EmbeddedViewState {
  filePath: string;
  activityId?: string;
  activityName?: string;
  activityEmoji?: string;
  mode: "hub" | "workspace";
}

export class EmbeddedMdView extends ItemView {
  plugin: OlenPlugin;
  private state: EmbeddedViewState | null = null;

  constructor(leaf: WorkspaceLeaf, plugin: OlenPlugin) {
    super(leaf);
    this.plugin = plugin;
  }

  getViewType(): string {
    return VIEW_TYPE_EMBEDDED;
  }

  getDisplayText(): string {
    if (this.state?.activityName) {
      return this.state.mode === "hub"
        ? `${this.state.activityName} Hub`
        : `${this.state.activityName} Session`;
    }
    return "Olen";
  }

  getIcon(): string {
    return this.state?.mode === "workspace" ? "timer" : "layout-dashboard";
  }

  async onOpen(): Promise<void> {
    // State is set externally before the view opens via setEmbeddedState()
    if (this.state) {
      await this.render();
    }
  }

  async onClose(): Promise<void> {
    this.contentEl.empty();
  }

  setEmbeddedState(state: EmbeddedViewState): void {
    this.state = state;
  }

  async render(): Promise<void> {
    const container = this.contentEl;
    container.empty();

    if (!this.state) {
      container.createEl("div", { text: "No file specified." });
      return;
    }

    const root = container.createDiv({ cls: "olen-dashboard olen-embedded-root" });

    // Navigation chrome — sticky top bar
    const navBar = root.createDiv({ cls: "olen-embedded-nav" });

    const backBtn = navBar.createEl("button", {
      cls: "olen-embedded-back",
      text: "\u2190 Back",
    });
    backBtn.addEventListener("click", () => {
      this.plugin.activateDashboardView();
    });

    if (this.state.activityEmoji || this.state.activityName) {
      const titleEl = navBar.createDiv({ cls: "olen-embedded-title" });
      if (this.state.activityEmoji) {
        titleEl.createEl("span", { text: this.state.activityEmoji + " " });
      }
      titleEl.createEl("span", {
        text: this.state.activityName ?? "Activity",
      });
    }

    const modeLabel = navBar.createEl("span", {
      cls: "olen-embedded-mode",
      text: this.state.mode === "hub" ? "HUB" : "SESSION",
    });

    // Content area — render the .md file
    const contentArea = root.createDiv({ cls: "olen-embedded-content" });

    // Find and render the file
    const filePath = this.state.filePath.endsWith(".md")
      ? this.state.filePath
      : this.state.filePath + ".md";

    const file = this.app.vault.getAbstractFileByPath(filePath);

    if (!file || !(file instanceof TFile)) {
      contentArea.createEl("div", {
        cls: "olen-embedded-error",
        text: `File not found: ${filePath}`,
      });
      contentArea.createEl("div", {
        cls: "olen-embedded-error-hint",
        text: "Check the file path in activity settings, or switch to Built-in mode.",
      });
      return;
    }

    try {
      const content = await this.app.vault.read(file);
      await MarkdownRenderer.render(
        this.app,
        content,
        contentArea,
        file.path,
        this
      );
    } catch (err) {
      console.error("Olen: Failed to render embedded .md:", err);
      contentArea.createEl("div", {
        cls: "olen-embedded-error",
        text: "Failed to render file. It may contain unsupported content.",
      });
    }
  }
}
