// ============================================================
// Olen — Directive Debug Deck
// Shows exactly what the completion detection pipeline sees
// ============================================================

import type { App, TFile } from "obsidian";
import type { OlenSettings, CompletionMap } from "../types";
import type { OlenEngine } from "../engines/OlenEngine";
import { toLocalDateStr } from "../utils/completions";

const DATE_REGEX = /\d{4}-\d{2}-\d{2}/;
const FM_BOUNDARY = /^---\s*$/;

interface FileDebugInfo {
  path: string;
  rawFrontmatter: string;
  parsedProperty: string;
  parsedTimestamp: string;
  extractedDate: string;
  ctime: string;
  matchesToday: boolean;
}

interface ActivityDebugInfo {
  name: string;
  emoji: string;
  id: string;
  folder: string;
  property: string;
  folderExists: boolean;
  filesInFolder: number;
  filesWithProperty: FileDebugInfo[];
  isDoneToday: boolean;
  completionsCount: number;
  engineSees: string;
}

function parseFmRaw(content: string): Record<string, string> | null {
  const lines = content.split("\n");
  if (!FM_BOUNDARY.test(lines[0])) return null;
  const fm: Record<string, string> = {};
  for (let i = 1; i < lines.length; i++) {
    if (FM_BOUNDARY.test(lines[i])) break;
    const colon = lines[i].indexOf(":");
    if (colon === -1) continue;
    fm[lines[i].slice(0, colon).trim()] = lines[i].slice(colon + 1).trim();
  }
  return fm;
}

export async function renderDirectiveDebug(
  container: HTMLElement,
  app: App,
  settings: OlenSettings,
  engine: OlenEngine,
  completionData: CompletionMap,
  staggerIdx: number,
): Promise<void> {
  const card = container.createDiv({ cls: "olen-card olen-debug-deck" });
  card.style.cssText = "padding:16px;margin:12px 0;border:1px solid var(--card-border, #333);border-radius:12px;background:var(--card-bg, #1a1a1a);font-family:monospace;font-size:12px;";

  const title = card.createEl("h3", { text: "DIRECTIVE DEBUG DECK" });
  title.style.cssText = "color:#ff6b6b;margin:0 0 12px 0;font-size:14px;";

  const today = engine.getEffectiveToday();
  card.createDiv({ text: `Effective today: ${today}` }).style.cssText = "color:#aaa;margin-bottom:8px;";
  card.createDiv({ text: `Now: ${new Date().toISOString()}` }).style.cssText = "color:#aaa;margin-bottom:12px;";

  const activities = settings.activities.filter((a) => a.enabled);

  for (const activity of activities) {
    const section = card.createDiv();
    section.style.cssText = "border:1px solid #333;border-radius:8px;padding:12px;margin:8px 0;";

    // Header
    const header = section.createDiv({ text: `${activity.emoji} ${activity.name}` });
    header.style.cssText = "font-weight:bold;font-size:13px;color:var(--text-primary, #eee);margin-bottom:6px;";

    // Config
    const config = section.createDiv();
    config.style.cssText = "color:#888;margin-bottom:8px;";
    config.createDiv({ text: `folder: "${activity.folder}"` });
    config.createDiv({ text: `property: "${activity.property}"` });

    // Check folder
    const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";
    const allMdFiles = app.vault.getMarkdownFiles();
    const filesInFolder = allMdFiles.filter((f) => f.path.startsWith(normalizedFolder));

    const folderInfo = section.createDiv();
    folderInfo.style.cssText = "margin-bottom:8px;";

    if (filesInFolder.length === 0) {
      folderInfo.createDiv({ text: `NO FILES found in "${normalizedFolder}"` }).style.color = "#ff6b6b";

      // Show what paths DO exist to help debug
      const similar = allMdFiles
        .filter((f) => f.path.toLowerCase().includes(activity.name.toLowerCase()))
        .slice(0, 3);
      if (similar.length > 0) {
        folderInfo.createDiv({ text: "Similar paths found:" }).style.color = "#f0ad4e";
        for (const f of similar) {
          folderInfo.createDiv({ text: `  ${f.path}` }).style.color = "#f0ad4e";
        }
      }
    } else {
      folderInfo.createDiv({ text: `${filesInFolder.length} files in folder` }).style.color = "#5cb85c";
    }

    // Scan each file
    let matchCount = 0;
    for (const file of filesInFolder) {
      let content: string;
      try {
        content = await app.vault.cachedRead(file);
      } catch {
        const errDiv = section.createDiv({ text: `  ERROR reading: ${file.path}` });
        errDiv.style.color = "#ff6b6b";
        continue;
      }

      const fm = parseFmRaw(content);
      if (!fm) continue; // skip files without frontmatter

      const propVal = fm[activity.property];
      const timestampVal = fm["Timestamp"];

      // Extract date same way as completions.ts
      let extractedDate = "NONE";
      if (timestampVal) {
        const clean = timestampVal.replace(/^["']|["']$/g, "");
        const m = clean.match(DATE_REGEX);
        if (m) extractedDate = m[0];
      }
      if (extractedDate === "NONE" && file.stat?.ctime) {
        extractedDate = toLocalDateStr(new Date(file.stat.ctime)) + " (from ctime)";
      }

      const propTrimmed = propVal ? propVal.replace(/^["']|["']$/g, "").toLowerCase() : "MISSING";
      const isTrue = propTrimmed === "true";
      const matchesToday = extractedDate.startsWith(today);

      // Only show files that have the property OR match today
      if (!propVal && !matchesToday) continue;

      matchCount++;
      const fileDiv = section.createDiv();
      fileDiv.style.cssText = "padding:6px 8px;margin:4px 0;border-radius:4px;background:rgba(255,255,255,0.03);";

      fileDiv.createDiv({ text: `${file.name}` }).style.cssText = "color:var(--text-primary, #eee);font-weight:bold;";
      fileDiv.createDiv({ text: `  ${activity.property}: ${propVal ?? "MISSING"}  →  isTrue: ${isTrue}` }).style.color = isTrue ? "#5cb85c" : "#ff6b6b";
      fileDiv.createDiv({ text: `  Timestamp: ${timestampVal ?? "MISSING"}` }).style.color = "#aaa";
      fileDiv.createDiv({ text: `  Extracted date: ${extractedDate}` }).style.color = matchesToday ? "#5cb85c" : "#aaa";
      fileDiv.createDiv({ text: `  ctime: ${file.stat?.ctime ? new Date(file.stat.ctime).toISOString() : "N/A"}` }).style.color = "#666";

      if (isTrue && matchesToday) {
        fileDiv.createDiv({ text: `  ✓ MATCHES TODAY` }).style.cssText = "color:#5cb85c;font-weight:bold;";
      } else if (isTrue && !matchesToday) {
        fileDiv.createDiv({ text: `  ✗ Property true but date ≠ today` }).style.color = "#f0ad4e";
      } else if (!isTrue && matchesToday) {
        fileDiv.createDiv({ text: `  ✗ Today's file but property not true` }).style.color = "#f0ad4e";
      }
    }

    if (matchCount === 0 && filesInFolder.length > 0) {
      section.createDiv({ text: `No files with "${activity.property}" property found` }).style.color = "#f0ad4e";
    }

    // Engine verdict
    const comps = completionData[activity.id] ?? [];
    const todayComps = comps.filter((c) => c.date === today && c.completed);
    const isDone = engine.isDoneToday(activity.id);

    const verdict = section.createDiv();
    verdict.style.cssText = "margin-top:8px;padding:6px 8px;border-radius:4px;";

    verdict.createDiv({ text: `CompletionMap entries: ${comps.length} total, ${todayComps.length} for today` }).style.color = "#aaa";
    if (todayComps.length > 0) {
      for (const c of todayComps) {
        verdict.createDiv({ text: `  → date="${c.date}" completed=${c.completed}` }).style.color = "#5cb85c";
      }
    }

    const result = verdict.createDiv({ text: `ENGINE isDoneToday("${activity.id}"): ${isDone}` });
    result.style.cssText = isDone
      ? "color:#5cb85c;font-weight:bold;font-size:13px;margin-top:4px;"
      : "color:#ff6b6b;font-weight:bold;font-size:13px;margin-top:4px;";
  }

  // Directive suggestions
  const sugSection = card.createDiv();
  sugSection.style.cssText = "border-top:1px solid #333;margin-top:12px;padding-top:12px;";
  sugSection.createEl("h4", { text: "SUGGESTION QUEUE" }).style.cssText = "color:#ff6b6b;margin:0 0 8px 0;";

  const suggestions = engine.getAllSuggestions();
  if (suggestions.length === 0) {
    sugSection.createDiv({ text: "No suggestions (all activities done or none enabled)" }).style.color = "#5cb85c";
  } else {
    for (let i = 0; i < suggestions.length; i++) {
      const s = suggestions[i];
      const line = sugSection.createDiv({ text: `${i + 1}. ${s.activityName} — reason: ${s.reason}` });
      line.style.color = i === 0 ? "#ff6b6b" : "#aaa";
    }
  }
}
