// ============================================================
// Olen — Completion Utilities
// Reads activity completions directly from file content.
// Does NOT rely on Obsidian's metadataCache (unreliable on mobile).
// ============================================================

import type { App, TFile } from "obsidian";
import type { Completion } from "../types";

const DATE_REGEX = /\d{4}-\d{2}-\d{2}/;

/** Format a Date as YYYY-MM-DD in LOCAL time (never UTC). */
export function toLocalDateStr(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
const FM_BOUNDARY = /^---\s*$/;

/**
 * Parse YAML frontmatter from raw file content.
 * Returns a simple key→value map, or null if no frontmatter block.
 */
function parseFrontmatter(content: string): Record<string, string> | null {
  const lines = content.split("\n");
  if (!FM_BOUNDARY.test(lines[0])) return null;

  const fm: Record<string, string> = {};
  for (let i = 1; i < lines.length; i++) {
    if (FM_BOUNDARY.test(lines[i])) break;
    const colon = lines[i].indexOf(":");
    if (colon === -1) continue;
    const key = lines[i].slice(0, colon).trim();
    const val = lines[i].slice(colon + 1).trim();
    fm[key] = val;
  }
  return fm;
}

/**
 * Check if a frontmatter value represents boolean true.
 * Handles: true, "true", 'true'
 */
function isTrueValue(val: string | undefined): boolean {
  if (!val) return false;
  const v = val.replace(/^["']|["']$/g, "").toLowerCase();
  return v === "true";
}

/**
 * Extract YYYY-MM-DD date from parsed frontmatter or file creation time.
 */
function extractDate(fm: Record<string, string>, file: TFile): string | null {
  // 1. Timestamp frontmatter field
  const ts = fm["Timestamp"];
  if (ts) {
    const clean = ts.replace(/^["']|["']$/g, "");
    const match = clean.match(DATE_REGEX);
    if (match) return match[0];
  }

  // 2. Fall back to file creation time (local timezone)
  if (file.stat?.ctime) {
    return toLocalDateStr(new Date(file.stat.ctime));
  }

  return null;
}

/**
 * Get files in a folder.
 */
function getFilesInFolder(app: App, folderPath: string): TFile[] {
  const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";
  return app.vault.getMarkdownFiles().filter(
    (file) => file.path.startsWith(normalizedFolder)
  );
}

/**
 * Get all completion records from files in a folder.
 * Reads file content directly — no metadata cache dependency.
 */
export async function getCompletionsFromFolder(
  app: App,
  folderPath: string,
  fieldName: string,
): Promise<Completion[]> {
  const files = getFilesInFolder(app, folderPath);
  const results: Completion[] = [];

  for (const file of files) {
    const content = await app.vault.cachedRead(file);
    const fm = parseFrontmatter(content);
    if (!fm || !isTrueValue(fm[fieldName])) continue;

    const date = extractDate(fm, file);
    if (!date) continue;

    results.push({ date, completed: true });
  }

  return results;
}

/**
 * Find any file in the activity folder that marks today as completed.
 * Reads file content directly.
 */
export async function findTodayCompletionFile(
  app: App,
  folderPath: string,
  fieldName: string,
  dateStr: string,
): Promise<TFile | null> {
  const files = getFilesInFolder(app, folderPath);

  for (const file of files) {
    const content = await app.vault.cachedRead(file);
    const fm = parseFrontmatter(content);
    if (!fm) continue;

    if (isTrueValue(fm[fieldName])) {
      const fileDate = extractDate(fm, file);
      if (fileDate === dateStr) return file;
    }
  }

  return null;
}

/**
 * Check whether any file in the folder has the activity marked complete for a given date.
 * Reads file content directly.
 */
export async function isActivityDoneOnDate(
  app: App,
  folderPath: string,
  fieldName: string,
  dateStr: string,
): Promise<boolean> {
  const files = getFilesInFolder(app, folderPath);

  for (const file of files) {
    const content = await app.vault.cachedRead(file);
    const fm = parseFrontmatter(content);
    if (!fm || !isTrueValue(fm[fieldName])) continue;

    const fileDate = extractDate(fm, file);
    if (fileDate === dateStr) return true;
  }

  return false;
}
