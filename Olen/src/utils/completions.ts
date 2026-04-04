// ============================================================
// Olen — Completion Utilities
// Shared logic for reading activity completions from vault files
// ============================================================

import type { App, TFile } from "obsidian";
import type { Completion } from "../types";

const DATE_REGEX = /\d{4}-\d{2}-\d{2}/;

/**
 * Get all completion records from files in a folder.
 * Purely content-based: checks the frontmatter property field,
 * and extracts the date from the Timestamp frontmatter field
 * (or file creation time as fallback). Filename is irrelevant.
 */
export function getCompletionsFromFolder(
  app: App,
  folderPath: string,
  fieldName: string,
): Completion[] {
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";

  return files
    .filter((file) => file.path === folderPath || file.path.startsWith(normalizedFolder))
    .map((file) => {
      const cache = app.metadataCache.getFileCache(file);
      const frontmatter = cache?.frontmatter;
      if (!frontmatter || typeof frontmatter[fieldName] !== "boolean") {
        return null;
      }

      const date = extractDateFromFile(file, frontmatter);
      if (!date) return null;

      return {
        date,
        completed: frontmatter[fieldName] === true,
      };
    })
    .filter((c): c is Completion => c !== null);
}

/**
 * Find any file in the activity folder that marks today as completed.
 * Checks both pure-date files and workspace files.
 */
export function findTodayCompletionFile(
  app: App,
  folderPath: string,
  fieldName: string,
  dateStr: string,
): TFile | null {
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";

  return files.find((file) => {
    if (file.path !== folderPath && !file.path.startsWith(normalizedFolder)) return false;

    const cache = app.metadataCache.getFileCache(file);
    const frontmatter = cache?.frontmatter;
    if (!frontmatter) return false;

    // Check if this file has the completion property set
    if (typeof frontmatter[fieldName] === "boolean") {
      const fileDate = extractDateFromFile(file, frontmatter);
      if (fileDate === dateStr) return true;
    }

    // Also match pure-date basename files that might not have the property yet
    if (file.basename === dateStr) return true;

    return false;
  }) ?? null;
}

/**
 * Check whether any file in the folder has the activity marked complete for a given date.
 */
export function isActivityDoneOnDate(
  app: App,
  folderPath: string,
  fieldName: string,
  dateStr: string,
): boolean {
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = folderPath.endsWith("/") ? folderPath : folderPath + "/";

  return files.some((file) => {
    if (file.path !== folderPath && !file.path.startsWith(normalizedFolder)) return false;

    const cache = app.metadataCache.getFileCache(file);
    const frontmatter = cache?.frontmatter;
    if (!frontmatter || frontmatter[fieldName] !== true) return false;

    const fileDate = extractDateFromFile(file, frontmatter);
    return fileDate === dateStr;
  });
}

/**
 * Extract a YYYY-MM-DD date string from a file.
 * Content-based: reads Timestamp from frontmatter first,
 * then falls back to file creation time. Filename is irrelevant.
 */
function extractDateFromFile(file: TFile, frontmatter: Record<string, unknown>): string | null {
  // 1. Timestamp frontmatter field (most reliable — set when file is created)
  const ts = frontmatter["Timestamp"];
  if (typeof ts === "string") {
    const match = ts.match(DATE_REGEX);
    if (match) return match[0];
  }

  // 2. Fall back to file creation time
  if (file.stat?.ctime) {
    return new Date(file.stat.ctime).toISOString().slice(0, 10);
  }

  return null;
}
