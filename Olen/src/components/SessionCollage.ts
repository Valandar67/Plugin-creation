// ============================================================
// Olen — Session Collage Component
// Last 5 sessions across all activities, scattered photo cards
// ============================================================

import { App, TFile } from "obsidian";
import type { OlenSettings, Category } from "../types";

export function renderSessionCollage(
  container: HTMLElement,
  app: App,
  settings: OlenSettings,
  staggerIndex: number
): void {
  const card = container.createDiv({ cls: "olen-card olen-session-collage" });
  card.style.setProperty("--i", String(staggerIndex));

  card.createEl("div", { cls: "olen-heading", text: "RECENT SESSIONS" });

  const collageContainer = card.createDiv({ cls: "olen-collage-grid" });

  // Find the last 5 workspace files across all activity folders
  const recentSessions = getRecentSessions(app, settings, 5);

  if (recentSessions.length === 0) {
    collageContainer.createEl("div", {
      cls: "olen-body-italic",
      text: "No sessions yet. Begin your journey.",
    });
    return;
  }

  for (let i = 0; i < recentSessions.length; i++) {
    const session = recentSessions[i];
    const sessionCard = collageContainer.createDiv({ cls: "olen-collage-card" });

    // Session info
    const info = sessionCard.createDiv({ cls: "olen-collage-info" });
    info.createEl("div", {
      cls: "olen-collage-emoji",
      text: session.emoji,
    });
    info.createEl("div", {
      cls: "olen-collage-name",
      text: session.activityName,
    });
    info.createEl("div", {
      cls: "olen-data-sm",
      text: session.date,
    });

    if (session.type) {
      const typeBadge = info.createDiv({ cls: "olen-collage-type" });
      typeBadge.textContent = session.type;
    }

    if (session.duration) {
      info.createEl("div", {
        cls: "olen-data-sm",
        text: session.duration,
      });
    }
  }
}

interface RecentSession {
  activityName: string;
  emoji: string;
  category: Category;
  date: string;
  type?: string;
  duration?: string;
  filePath: string;
}

function getRecentSessions(app: App, settings: OlenSettings, limit: number): RecentSession[] {
  const sessions: RecentSession[] = [];
  const files = app.vault.getMarkdownFiles();

  for (const activity of settings.activities) {
    if (!activity.enabled) continue;
    const normalizedFolder = activity.folder.endsWith("/") ? activity.folder : activity.folder + "/";

    const activityFiles = files.filter(
      (f) =>
        (f.path === activity.folder || f.path.startsWith(normalizedFolder)) &&
        f.basename.startsWith("Workspace")
    );

    for (const file of activityFiles) {
      const cache = app.metadataCache.getFileCache(file);
      const fm = cache?.frontmatter;
      if (!fm) continue;

      sessions.push({
        activityName: activity.name,
        emoji: activity.emoji,
        category: activity.category,
        date: fm.Timestamp
          ? new Date(fm.Timestamp).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          : file.basename.replace("Workspace ", ""),
        type: fm[`${activity.property}-Type`] as string | undefined,
        duration: fm.duration as string | undefined,
        filePath: file.path,
      });
    }
  }

  // Sort by modification time, most recent first
  sessions.sort((a, b) => {
    const fa = app.vault.getAbstractFileByPath(a.filePath);
    const fb = app.vault.getAbstractFileByPath(b.filePath);
    const ta = fa instanceof TFile ? fa.stat.mtime : 0;
    const tb = fb instanceof TFile ? fb.stat.mtime : 0;
    return tb - ta;
  });

  return sessions.slice(0, limit);
}
