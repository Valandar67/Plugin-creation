// ============================================================
// Olen — Embedded Markdown View
// Renders custom .md files inside Olen's own plugin view
// with navigation chrome (back button, activity header)
// ============================================================

import { MarkdownRenderer, TFile, App, Component } from "obsidian";
import type OlenPlugin from "../main";

const IMAGE_EXTS = /\.(png|jpg|jpeg|gif|webp|svg|bmp|avif)$/i;

/**
 * Post-process rendered markdown to resolve internal image embeds
 * (`![[image.png]]`) that MarkdownRenderer.render() leaves as
 * unresolved `<span class="internal-embed">` placeholders.
 */
export function resolveInternalImageEmbeds(
  app: App,
  container: HTMLElement,
  sourcePath: string,
): void {
  const embeds = container.querySelectorAll("span.internal-embed");
  for (const span of Array.from(embeds)) {
    const src = span.getAttribute("src") ?? "";
    if (!IMAGE_EXTS.test(src)) continue;

    const file = app.metadataCache.getFirstLinkpathDest(src, sourcePath);
    if (!file) continue;

    const resourcePath = app.vault.adapter.getResourcePath(file.path);
    const img = document.createElement("img");
    img.src = resourcePath;
    img.alt = span.getAttribute("alt") || file.basename;
    img.style.maxWidth = "100%";
    span.replaceWith(img);
  }
}

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

  // Resolve ![[image.png]] embeds that MarkdownRenderer leaves as placeholders
  resolveInternalImageEmbeds(app, contentArea, file.path);

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
