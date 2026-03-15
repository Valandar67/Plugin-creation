// ============================================================
// Olen — Skill Heatmap Component
// Grid showing skill practice frequency for an activity
// ============================================================

import { App, TFile } from "obsidian";
import type { OlenSettings, ActivityConfig } from "../types";

interface SkillStats {
  name: string;
  count: number;
  lastPracticed: string | null;
  isNeglected: boolean;
}

export function renderSkillHeatmap(
  container: HTMLElement,
  app: App,
  activity: ActivityConfig,
  settings: OlenSettings,
  staggerIndex: number
): void {
  if (!activity.skillFolder) return;

  const card = container.createDiv({ cls: "olen-card olen-skill-heatmap" });
  card.style.setProperty("--i", String(staggerIndex));

  card.createEl("div", { cls: "olen-heading", text: "SKILL PRACTICE" });

  const stats = getSkillStats(app, activity);
  if (stats.length === 0) {
    card.createEl("div", { cls: "olen-body-italic", text: "No skills tracked yet." });
    return;
  }

  // Sort by frequency (most practiced first)
  stats.sort((a, b) => b.count - a.count);
  const maxCount = Math.max(1, stats[0].count);

  const grid = card.createDiv({ cls: "olen-skill-grid" });

  for (const skill of stats) {
    const item = grid.createDiv({
      cls: `olen-skill-grid-item ${skill.isNeglected ? "olen-skill-neglected" : ""}`,
    });

    // Skill name
    item.createEl("div", { cls: "olen-skill-name", text: skill.name });

    // Frequency bar
    const barWrap = item.createDiv({ cls: "olen-skill-bar-wrap" });
    const bar = barWrap.createDiv({ cls: "olen-skill-bar" });
    const width = Math.max(4, (skill.count / maxCount) * 100);
    bar.style.width = `${width}%`;

    if (skill.isNeglected) {
      bar.style.background = "var(--danger)";
    } else {
      const intensity = skill.count / maxCount;
      bar.style.background = `color-mix(in srgb, var(--accent-gold) ${Math.round((0.3 + intensity * 0.7) * 100)}%, transparent)`;
    }

    // Count
    item.createEl("div", { cls: "olen-data-sm olen-skill-count", text: String(skill.count) });

    // Neglected warning
    if (skill.isNeglected) {
      item.createEl("div", {
        cls: "olen-skill-neglect-badge",
        text: "2+ weeks",
      });
    }
  }
}

function getSkillStats(app: App, activity: ActivityConfig): SkillStats[] {
  const skillCounts = new Map<string, { count: number; lastDate: string | null }>();
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";
  const now = new Date();
  const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  // Scan session files for skills
  for (const file of files) {
    if (!file.path.startsWith(normalizedFolder) && file.path !== activity.folder) continue;

    const cache = app.metadataCache.getFileCache(file);
    const fm = cache?.frontmatter;
    if (!fm || !Array.isArray(fm.skills)) continue;

    const date = fm.Timestamp
      ? new Date(fm.Timestamp).toISOString().slice(0, 10)
      : file.basename;

    for (const skill of fm.skills) {
      const existing = skillCounts.get(skill);
      if (existing) {
        existing.count++;
        if (!existing.lastDate || date > existing.lastDate) {
          existing.lastDate = date;
        }
      } else {
        skillCounts.set(skill, { count: 1, lastDate: date });
      }
    }
  }

  // Also include skills from skill folder that haven't been practiced
  if (activity.skillFolder) {
    const skillNormalizedFolder = activity.skillFolder.endsWith("/")
      ? activity.skillFolder
      : activity.skillFolder + "/";
    const skillFiles = files.filter((f) => f.path.startsWith(skillNormalizedFolder));
    for (const sf of skillFiles) {
      if (!skillCounts.has(sf.basename)) {
        skillCounts.set(sf.basename, { count: 0, lastDate: null });
      }
    }
  }

  const result: SkillStats[] = [];
  for (const [name, data] of skillCounts) {
    result.push({
      name,
      count: data.count,
      lastPracticed: data.lastDate,
      isNeglected: !data.lastDate || data.lastDate < twoWeeksAgo,
    });
  }

  return result;
}
