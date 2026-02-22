// ============================================================
// Olen — Template Engine
// Loads .js template files from vault, creates a sandboxed
// execution context with data-binding to note frontmatter,
// and renders UI into a container element.
// ============================================================

import { App, TFile, Notice } from "obsidian";
import type OlenPlugin from "../main";
import { BUILTIN_TEMPLATES } from "./builtins";

/**
 * The context object passed to every template at runtime.
 * Templates receive this as `ctx` and use it to read/write
 * frontmatter and build their UI.
 */
export interface TemplateContext {
  /** Obsidian App instance */
  app: App;
  /** Olen plugin reference */
  plugin: OlenPlugin;
  /** The data note currently being viewed */
  file: TFile;
  /** DOM container to render into */
  container: HTMLElement;

  // --- Data Binding ---

  /** Snapshot of the note's current frontmatter (read-only object) */
  frontmatter: Record<string, unknown>;
  /** Get a single frontmatter value, or all frontmatter if no key */
  getData(key?: string): unknown;
  /** Write a single key back to the note's frontmatter */
  setData(key: string, value: unknown): Promise<void>;
  /** Batch-write multiple keys to the note's frontmatter */
  setMultipleData(data: Record<string, unknown>): Promise<void>;

  // --- Vault Helpers ---

  /** Read raw text of any vault file by path */
  readFile(path: string): Promise<string | null>;
  /** Get all markdown files inside a folder */
  getFilesInFolder(folderPath: string): TFile[];
  /** Get frontmatter of any file by path */
  getFileMetadata(path: string): Record<string, unknown> | null;

  // --- Utilities ---

  /** Obsidian Notice for toasts */
  notice(message: string, timeout?: number): void;
  /** moment.js (provided by Obsidian globally) */
  moment: typeof window.moment;
  /** Create an HTML element (shorthand) */
  createEl<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    attrs?: Record<string, string>,
  ): HTMLElementTagNameMap[K];
}

/**
 * Core engine that manages template lookup, loading, and execution.
 */
export class TemplateEngine {
  private app: App;
  private plugin: OlenPlugin;
  /** Cache of loaded template source code (path → source) */
  private templateCache: Map<string, string> = new Map();

  constructor(app: App, plugin: OlenPlugin) {
    this.app = app;
    this.plugin = plugin;
  }

  // --- Activity Lookup ---

  /**
   * Find the workspace template for a given activity type.
   * Looks up the activity by ID in settings and returns its workspaceTemplate ID.
   * The ID may refer to a built-in template (e.g. "workout") or a vault path.
   */
  findTemplate(activityType: string): { templateId: string } | null {
    const activity = this.plugin.settings.activities.find(
      (a) => a.id === activityType && a.enabled && a.workspaceTemplate,
    );
    if (!activity) return null;
    return { templateId: activity.workspaceTemplate! };
  }

  // --- Template Loading ---

  /**
   * Load the template source from vault. Caches until invalidated.
   */
  async loadTemplateSource(templatePath: string): Promise<string | null> {
    // Check cache first
    if (this.templateCache.has(templatePath)) {
      return this.templateCache.get(templatePath)!;
    }

    // Normalize path — add .js if missing
    let resolvedPath = templatePath;
    if (!resolvedPath.endsWith(".js") && !resolvedPath.endsWith(".md")) {
      resolvedPath += ".js";
    }

    const file = this.app.vault.getAbstractFileByPath(resolvedPath);
    if (!file || !(file instanceof TFile)) {
      return null;
    }

    try {
      const source = await this.app.vault.read(file);
      this.templateCache.set(templatePath, source);
      return source;
    } catch (err) {
      console.error(`Olen TemplateEngine: Failed to read template ${resolvedPath}:`, err);
      return null;
    }
  }

  /**
   * Invalidate the cache for a specific template (e.g. after edits).
   */
  invalidateCache(templatePath?: string): void {
    if (templatePath) {
      this.templateCache.delete(templatePath);
    } else {
      this.templateCache.clear();
    }
  }

  // --- Context Creation ---

  /**
   * Build the TemplateContext that gets passed to the template function.
   */
  private buildContext(
    file: TFile,
    container: HTMLElement,
    frontmatter: Record<string, unknown>,
  ): TemplateContext {
    const app = this.app;
    const plugin = this.plugin;

    return {
      app,
      plugin,
      file,
      container,

      // --- Data Binding ---

      frontmatter: { ...frontmatter },

      getData(key?: string): unknown {
        if (!key) return { ...frontmatter };
        return frontmatter[key];
      },

      async setData(key: string, value: unknown): Promise<void> {
        await app.fileManager.processFrontMatter(file, (fm) => {
          fm[key] = value;
        });
        // Update our local snapshot
        frontmatter[key] = value;
      },

      async setMultipleData(data: Record<string, unknown>): Promise<void> {
        await app.fileManager.processFrontMatter(file, (fm) => {
          for (const [k, v] of Object.entries(data)) {
            fm[k] = v;
          }
        });
        // Update local snapshot
        for (const [k, v] of Object.entries(data)) {
          frontmatter[k] = v;
        }
      },

      // --- Vault Helpers ---

      async readFile(path: string): Promise<string | null> {
        const f = app.vault.getAbstractFileByPath(path);
        if (!f || !(f instanceof TFile)) return null;
        return app.vault.read(f);
      },

      getFilesInFolder(folderPath: string): TFile[] {
        return app.vault.getMarkdownFiles().filter(
          (f) => f.path.startsWith(folderPath.endsWith("/") ? folderPath : folderPath + "/"),
        );
      },

      getFileMetadata(path: string): Record<string, unknown> | null {
        const f = app.vault.getAbstractFileByPath(path);
        if (!f || !(f instanceof TFile)) return null;
        const cache = app.metadataCache.getFileCache(f);
        return (cache?.frontmatter as Record<string, unknown>) ?? null;
      },

      // --- Utilities ---

      notice(message: string, timeout?: number): void {
        new Notice(message, timeout);
      },

      moment: window.moment,

      createEl<K extends keyof HTMLElementTagNameMap>(
        tag: K,
        attrs?: Record<string, string>,
      ): HTMLElementTagNameMap[K] {
        const el = document.createElement(tag);
        if (attrs) {
          for (const [k, v] of Object.entries(attrs)) {
            if (k === "text") {
              el.textContent = v;
            } else if (k === "html") {
              el.innerHTML = v;
            } else if (k === "cls" || k === "class") {
              el.className = v;
            } else if (k === "style") {
              el.style.cssText = v;
            } else {
              el.setAttribute(k, v);
            }
          }
        }
        return el;
      },
    };
  }

  // --- Rendering ---

  /**
   * Main render method. Resolves a template ID (built-in or vault path)
   * and renders it into a container bound to the given note's frontmatter.
   */
  async render(
    templateId: string,
    file: TFile,
    container: HTMLElement,
  ): Promise<boolean> {
    // 1. Resolve template source: check built-in templates first, then vault
    let source: string | null = BUILTIN_TEMPLATES[templateId] ?? null;

    if (!source) {
      // Fall back to loading from vault as a .js file path
      source = await this.loadTemplateSource(templateId);
    }

    if (!source) {
      this.renderError(
        container,
        `Template not found: ${templateId}`,
        "Check the template ID in Olen Settings → Activities → Configure. Built-in templates: workout.",
      );
      return false;
    }

    // 2. Get current frontmatter
    const cache = this.app.metadataCache.getFileCache(file);
    const frontmatter = (cache?.frontmatter as Record<string, unknown>) ?? {};

    // 3. Build context
    const ctx = this.buildContext(file, container, frontmatter);

    // 4. Execute template
    try {
      // We wrap the template source so that `ctx` is available as a local variable.
      // The template code can destructure from ctx or use it directly.
      const fn = new Function("ctx", source);
      const result = fn(ctx);

      // If the template returns a promise (async template), await it
      if (result && typeof result.then === "function") {
        await result;
      }

      return true;
    } catch (err) {
      console.error(`Olen TemplateEngine: Error executing template ${templateId}:`, err);
      this.renderError(
        container,
        `Template error: ${(err as Error).message}`,
        `In template: ${templateId}`,
      );
      return false;
    }
  }

  /**
   * Render an error message inside the container.
   */
  private renderError(container: HTMLElement, title: string, hint: string): void {
    container.empty();
    const errorDiv = container.createDiv({ cls: "olen-template-error" });
    errorDiv.createEl("div", { cls: "olen-template-error-title", text: title });
    errorDiv.createEl("div", { cls: "olen-template-error-hint", text: hint });
  }
}
