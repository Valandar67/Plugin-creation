// ============================================================
// Olen — Embedded Markdown View
// Renders custom .md files inside Olen's own plugin view
// with navigation chrome (back button, activity header)
// ============================================================

import { MarkdownRenderer, TFile, App, Component } from "obsidian";
import type OlenPlugin from "../main";

/**
 * Renders an .md file inside a container element, preserving
 * all dataviewjs blocks and interactive content.
 * Returns a cleanup function.
 */
export async function renderEmbeddedMd(
  app: App,
  plugin: OlenPlugin,
  mdPath: string,
  container: HTMLElement,
  onBack: () => void,
  headerText?: string,
  headerEmoji?: string
): Promise<Component> {
  const component = new Component();
  component.load();

  container.empty();
  container.addClass("olen-embedded-view");

  // Navigation chrome
  const nav = container.createDiv({ cls: "olen-embedded-nav" });

  const backBtn = nav.createEl("button", {
    cls: "olen-btn olen-btn-secondary olen-embedded-back",
    text: "← Back",
  });
  backBtn.addEventListener("click", onBack);

  if (headerEmoji || headerText) {
    const header = nav.createDiv({ cls: "olen-embedded-header" });
    if (headerEmoji) {
      header.createEl("span", { cls: "olen-embedded-emoji", text: headerEmoji });
    }
    if (headerText) {
      header.createEl("span", { cls: "olen-embedded-title", text: headerText });
    }
  }

  // Content area
  const contentArea = container.createDiv({ cls: "olen-embedded-content" });

  // Resolve file path (try with and without .md extension)
  let filePath = mdPath;
  if (!filePath.endsWith(".md")) filePath += ".md";

  const file = app.vault.getAbstractFileByPath(filePath);
  if (!(file instanceof TFile)) {
    contentArea.createEl("div", {
      cls: "olen-body-italic",
      text: `File not found: ${mdPath}`,
      attr: { style: "padding: 20px; text-align: center; color: var(--danger);" },
    });
    return component;
  }

  // Read and render the markdown content
  const content = await app.vault.read(file);

  await MarkdownRenderer.render(
    app,
    content,
    contentArea,
    file.path,
    component
  );

  return component;
}

/**
 * Creates a full embedded view wrapper with Olen styling.
 */
export function createEmbeddedWrapper(
  root: HTMLElement,
  activityName: string,
  activityEmoji: string,
  categoryColor: string
): { container: HTMLElement; contentEl: HTMLElement } {
  const wrapper = root.createDiv({ cls: "olen-dashboard olen-embedded-wrapper" });

  // Category accent
  const accent = wrapper.createDiv({ cls: "olen-embedded-accent" });
  accent.style.background = `linear-gradient(90deg, ${categoryColor}, transparent)`;

  const contentEl = wrapper.createDiv({ cls: "olen-embedded-body" });

  return { container: wrapper, contentEl };
}
