// ============================================================
// Olen — Quote Footer Component
// Rotating stoic quote at the bottom of the dashboard
// ============================================================

import { App, TFile } from "obsidian";
import type { OlenSettings } from "../types";
import { FALLBACK_QUOTES } from "../constants";

export function renderQuoteFooter(
  container: HTMLElement,
  app: App,
  settings: OlenSettings,
  staggerIndex: number,
  onSettingsUpdate: (settings: Partial<OlenSettings>) => void
): void {
  const quote = getQuote(app, settings, onSettingsUpdate);

  const section = container.createDiv({ cls: "olen-quote" });
  section.style.setProperty("--i", String(staggerIndex));

  section.createEl("div", {
    cls: "olen-quote-text",
    text: `"${quote.text}"`,
  });

  if (quote.attribution) {
    section.createEl("div", {
      cls: "olen-quote-attribution",
      text: `— ${quote.attribution}`,
    });
  }
}

interface Quote {
  text: string;
  attribution: string;
}

function getQuote(
  app: App,
  settings: OlenSettings,
  onSettingsUpdate: (settings: Partial<OlenSettings>) => void
): Quote {
  // Try vault folder quotes first
  if (settings.quoteFolderPath) {
    const vaultQuotes = loadQuotesFromVault(app, settings.quoteFolderPath);
    if (vaultQuotes.length > 0) {
      return pickQuote(vaultQuotes, settings, onSettingsUpdate);
    }
  }

  // Fallback to hardcoded quotes
  return pickQuote(FALLBACK_QUOTES, settings, onSettingsUpdate);
}

function pickQuote(
  quotes: Quote[],
  settings: OlenSettings,
  onSettingsUpdate: (settings: Partial<OlenSettings>) => void
): Quote {
  if (quotes.length === 0) {
    return { text: "The unexamined life is not worth living.", attribution: "Socrates" };
  }

  // Avoid recently shown quotes
  const recentIds = settings.recentQuoteIds ?? [];
  const available = quotes
    .map((q, i) => ({ q, i }))
    .filter(({ i }) => !recentIds.includes(i));

  const pool = available.length > 0 ? available : quotes.map((q, i) => ({ q, i }));
  const pick = pool[Math.floor(Math.random() * pool.length)];

  // Track recent (keep last 5)
  const newRecent = [...recentIds, pick.i].slice(-Math.min(5, Math.floor(quotes.length / 2)));
  onSettingsUpdate({
    lastQuoteIndex: pick.i,
    recentQuoteIds: newRecent,
  });

  return pick.q;
}

function loadQuotesFromVault(app: App, folderPath: string): Quote[] {
  const quotes: Quote[] = [];
  const abstractFile = app.vault.getAbstractFileByPath(folderPath);
  if (!abstractFile) return quotes;

  const files = app.vault.getMarkdownFiles().filter((f) =>
    f.path.startsWith(folderPath.endsWith("/") ? folderPath : folderPath + "/")
  );

  for (const file of files) {
    const cache = app.metadataCache.getFileCache(file);
    if (!cache) continue;

    // One quote per file (default mode)
    const name = file.basename;
    const parts = splitAttribution(name);
    quotes.push(parts);
  }

  return quotes;
}

function splitAttribution(text: string): Quote {
  // Check for em-dash attribution
  const dashIndex = text.lastIndexOf(" — ");
  if (dashIndex > 0) {
    return {
      text: text.slice(0, dashIndex).trim(),
      attribution: text.slice(dashIndex + 3).trim(),
    };
  }

  const hyphenIndex = text.lastIndexOf(" - ");
  if (hyphenIndex > text.length * 0.5) {
    return {
      text: text.slice(0, hyphenIndex).trim(),
      attribution: text.slice(hyphenIndex + 3).trim(),
    };
  }

  return { text: text.trim(), attribution: "" };
}
