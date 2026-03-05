// ============================================================
// Olen — Session Preview Component
// Shows the most recent session for an activity with thumbnail
// ============================================================

import { App, TFile } from "obsidian";
import type { OlenSettings, ActivityConfig, Category } from "../types";

export interface SessionPreviewData {
  date: string;
  duration: string;
  type: string;
  skills: string[];
  filePath: string;
  imagePath?: string;
}

export function renderSessionPreview(
  container: HTMLElement,
  app: App,
  activity: ActivityConfig,
  settings: OlenSettings,
  staggerIndex: number,
  onTap?: (filePath: string) => void
): void {
  const preview = getLatestSession(app, activity);
  if (!preview) {
    const empty = container.createDiv({ cls: "olen-card olen-session-preview-empty" });
    empty.style.setProperty("--i", String(staggerIndex));
    empty.createEl("div", {
      cls: "olen-body-italic",
      text: "No sessions yet. Start your first one.",
    });
    return;
  }

  const card = container.createDiv({ cls: "olen-card olen-session-preview" });
  card.style.setProperty("--i", String(staggerIndex));

  // Image thumbnail (if available)
  if (preview.imagePath) {
    const imgWrap = card.createDiv({ cls: "olen-session-preview-img" });
    const resourcePath = app.vault.adapter.getResourcePath(preview.imagePath);
    imgWrap.style.backgroundImage = `url("${resourcePath}")`;
  }

  // Info section
  const info = card.createDiv({ cls: "olen-session-preview-info" });

  const header = info.createDiv({ cls: "olen-session-preview-header" });
  header.createEl("span", { cls: "olen-session-preview-emoji", text: activity.emoji });
  header.createEl("span", { text: `Last Session` });

  const meta = info.createDiv({ cls: "olen-session-preview-meta" });
  meta.createEl("div", { cls: "olen-data-sm", text: preview.date });

  if (preview.duration) {
    meta.createEl("span", { cls: "olen-data-sm", text: ` · ${preview.duration}` });
  }

  if (preview.type) {
    const typeBadge = meta.createEl("span", { cls: "olen-session-preview-type" });
    typeBadge.textContent = ` · ${preview.type}`;
  }

  // Skills
  if (preview.skills.length > 0) {
    const skillsRow = info.createDiv({ cls: "olen-session-preview-skills" });
    for (const skill of preview.skills.slice(0, 4)) {
      skillsRow.createEl("span", { cls: "olen-session-preview-skill-chip", text: skill });
    }
    if (preview.skills.length > 4) {
      skillsRow.createEl("span", {
        cls: "olen-session-preview-skill-chip",
        text: `+${preview.skills.length - 4}`,
      });
    }
  }

  // Tap to open
  if (onTap) {
    card.classList.add("olen-clickable");
    card.addEventListener("click", () => onTap(preview.filePath));
  }
}

function getLatestSession(app: App, activity: ActivityConfig): SessionPreviewData | null {
  const files = app.vault.getMarkdownFiles();
  const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";

  const sessionFiles = files
    .filter(
      (f) =>
        (f.path === activity.folder || f.path.startsWith(normalizedFolder)) &&
        f.basename.startsWith("Workspace")
    )
    .sort((a, b) => b.stat.mtime - a.stat.mtime);

  if (sessionFiles.length === 0) return null;

  const latest = sessionFiles[0];
  const cache = app.metadataCache.getFileCache(latest);
  const fm = cache?.frontmatter;

  // Try to find an image in the session note
  let imagePath: string | undefined;
  if (cache?.embeds) {
    const imgEmbed = cache.embeds.find((e) =>
      /\.(png|jpg|jpeg|gif|webp|svg)$/i.test(e.link)
    );
    if (imgEmbed) {
      const imgFile = app.metadataCache.getFirstLinkpathDest(imgEmbed.link, latest.path);
      if (imgFile) imagePath = imgFile.path;
    }
  }

  return {
    date: fm?.Timestamp
      ? new Date(fm.Timestamp).toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      : latest.basename.replace("Workspace ", ""),
    duration: (fm?.duration as string) ?? "",
    type: (fm?.[`${activity.property}-Type`] as string) ?? "",
    skills: Array.isArray(fm?.skills) ? fm.skills : [],
    filePath: latest.path,
    imagePath,
  };
}
