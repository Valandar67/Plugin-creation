// ============================================================
// Olen — Journal Utility
// Shared by Sunday Check-in and DreamBoard "My Why"
// ============================================================

import type { App } from "obsidian";
import { toLocalDateStr } from "./completions";

/**
 * Create a journal entry as a markdown file.
 * If a file with the same name exists, appends a counter.
 */
export async function createJournalEntry(
  app: App,
  folder: string,
  title: string,
  content: string,
  frontmatter?: Record<string, string>,
): Promise<string> {
  // Ensure folder exists
  const normalizedFolder = folder.replace(/\/+$/, "");
  const abstractFolder = app.vault.getAbstractFileByPath(normalizedFolder);
  if (!abstractFolder) {
    await app.vault.createFolder(normalizedFolder);
  }

  // Build filename
  const today = toLocalDateStr(new Date());
  const baseName = title.trim() || today;
  const sanitized = baseName.replace(/[\\/:*?"<>|]/g, "-");

  let filePath = `${normalizedFolder}/${sanitized}.md`;
  let counter = 1;
  while (app.vault.getAbstractFileByPath(filePath)) {
    counter++;
    filePath = `${normalizedFolder}/${sanitized} (${counter}).md`;
  }

  // Build content
  let body = "";
  if (frontmatter && Object.keys(frontmatter).length > 0) {
    const fmLines = Object.entries(frontmatter)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    body = `---\n${fmLines}\n---\n\n`;
  }
  body += content;

  await app.vault.create(filePath, body);
  return filePath;
}

/**
 * Get recent journal entries from a folder.
 * Returns the last N entries sorted by modification time.
 */
export function getRecentJournalEntries(
  app: App,
  folder: string,
  limit = 5,
): { name: string; path: string; date: string }[] {
  const normalizedFolder = folder.replace(/\/+$/, "");
  const files = app.vault
    .getMarkdownFiles()
    .filter((f) => f.path.startsWith(normalizedFolder + "/"))
    .sort((a, b) => b.stat.mtime - a.stat.mtime)
    .slice(0, limit);

  return files.map((f) => ({
    name: f.basename,
    path: f.path,
    date: toLocalDateStr(new Date(f.stat.mtime)),
  }));
}
