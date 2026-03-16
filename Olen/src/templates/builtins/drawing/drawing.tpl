// ============================================================
// Olen — Drawing Session Template
// Converted from Drawing Session.md + Skill Selector.md
// Black & White Constellation Theme
// ============================================================

const { container, getData, setData, setMultipleData, app, moment, notice,
        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;

// ==========================================
// SETTINGS
// ==========================================
const SETTINGS = {
  sessionFolder: "Home/Starts/Drawing/Sessions",
};

// Get activity config for skill folder
const _activityId = getData("activity");
const _activities = ctx.plugin?.settings?.activities;
const _actConfig = _activities?.find(a => a.id === _activityId);
const SKILL_FOLDER = _actConfig?.skillFolder || "Home/Starts/Drawing/Skill tree";

// ==========================================
// THEME — Black & White Constellation
// ==========================================
const T = {
  color: "#888",
  colorHover: "#fff",
  colorBorder: "#222",
  colorBorderHover: "#444",
  colorMuted: "#555",
  colorAccent: "#fff",
  bg: "#000000",
  bgCard: "#0a0a0a",
  bgCardAlt: "#0f0f0f",
};

// ==========================================
// STATE (from frontmatter)
// ==========================================
let skills = getData("skills") || [];
const isCompleted = getData("Drawing") === true;
const drawingType = getData("Drawing-Type") || "";
const timestamp = getData("Timestamp") || "";

// ==========================================
// SVG ICON LIBRARY
// ==========================================
const ICONS = {
  default:     { vb: "0 0 24 24", p: '<circle cx="12" cy="12" r="3" fill="currentColor"/>' },
  core:        { vb: "0 0 24 24", p: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' },
  pencil:      { vb: "0 0 24 24", p: '<path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' },
  anatomy:     { vb: "0 0 24 24", p: '<circle cx="12" cy="5" r="3" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 8v4m-4 0h8m-6 0v8m4-8v8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' },
  gesture:     { vb: "0 0 24 24", p: '<path d="M6 18c0-3 2-6 6-9s6-6 6-6M4 12c2-2 4-3 6-3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="18" cy="3" r="2" fill="currentColor"/>' },
  muscle:      { vb: "0 0 24 24", p: '<path d="M4 15c2-4 5-5 8-3 3 2 5 1 8-3M4 11c2-4 5-5 8-3 3 2 5 1 8-3" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>' },
  bone:        { vb: "0 0 24 24", p: '<path d="M6 4a2 2 0 1 0 0 4 2 2 0 0 0 2-2l4 12a2 2 0 0 0-2 2 2 2 0 1 0 4 0 2 2 0 0 0-2-2l4-12a2 2 0 0 0 2 2 2 2 0 1 0 0-4 2 2 0 0 0-2 2H8a2 2 0 0 0-2-2z" stroke="currentColor" stroke-width="1.5" fill="none"/>' },
  line:        { vb: "0 0 24 24", p: '<path d="M4 20L20 4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="4" cy="20" r="2" fill="currentColor"/><circle cx="20" cy="4" r="2" fill="currentColor"/>' },
  shapes:      { vb: "0 0 24 24", p: '<rect x="3" y="11" width="8" height="8" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="16" cy="8" r="5" stroke="currentColor" stroke-width="2" fill="none"/><polygon points="12,3 16,10 8,10" stroke="currentColor" stroke-width="2" fill="none"/>' },
  cube:        { vb: "0 0 24 24", p: '<path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 22V12M12 12l9-5M12 12l-9-5" stroke="currentColor" stroke-width="2"/>' },
  contour:     { vb: "0 0 24 24", p: '<path d="M4 12c0-4 3-8 8-8s8 4 8 8-3 8-8 8" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-dasharray="4 2"/><path d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="4 2"/>' },
  eye:         { vb: "0 0 24 24", p: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" fill="none"/>' },
  negative:    { vb: "0 0 24 24", p: '<rect x="3" y="3" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 8h8v8H8z" fill="currentColor"/>' },
  grid:        { vb: "0 0 24 24", p: '<path d="M3 3v18h18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M7 21V7h14" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="2 2"/><path d="M11 21V11h10" stroke="currentColor" stroke-width="1.5" fill="none" stroke-dasharray="2 2"/>' },
  perspective: { vb: "0 0 24 24", p: '<path d="M2 20h20M12 4v4M4 20l8-12 8 12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="4" r="2" fill="currentColor"/>' },
  light:       { vb: "0 0 24 24", p: '<circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' },
  sphere:      { vb: "0 0 24 24", p: '<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/><ellipse cx="12" cy="12" rx="9" ry="3" stroke="currentColor" stroke-width="1" fill="none"/><path d="M12 3c-2 3-2 15 0 18" stroke="currentColor" stroke-width="1" fill="none"/>' },
  shadow:      { vb: "0 0 24 24", p: '<circle cx="10" cy="10" r="6" stroke="currentColor" stroke-width="2" fill="none"/><ellipse cx="14" cy="19" rx="6" ry="2" fill="currentColor" opacity="0.5"/>' },
  hatching:    { vb: "0 0 24 24", p: '<path d="M4 4l16 16M8 4l12 12M12 4l8 8M4 8l12 12M4 12l8 8M4 16l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>' },
  vase:        { vb: "0 0 24 24", p: '<path d="M9 3h6v3c2 1 4 4 4 8v2c0 2-1 4-4 5H9c-3-1-4-3-4-5v-2c0-4 2-7 4-8V3z" stroke="currentColor" stroke-width="2" fill="none"/>' },
  fruit:       { vb: "0 0 24 24", p: '<circle cx="12" cy="14" r="7" stroke="currentColor" stroke-width="2" fill="none"/><path d="M12 7V4M10 5c0-2 4-2 4 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' },
};

function iconSvg(name, size) {
  size = size || 24;
  const d = ICONS[name] || ICONS.default;
  return '<svg viewBox="' + d.vb + '" width="' + size + '" height="' + size + '" style="color:currentColor;">' + d.p + '</svg>';
}

// ==========================================
// STYLES
// ==========================================
if (!document.getElementById("olen-tpl-drawing-v1")) {
  const style = document.createElement("style");
  style.id = "olen-tpl-drawing-v1";
  style.textContent = `
    /* ===== Animations ===== */
    @keyframes otd-breathe {
      0%, 100% { box-shadow: inset 0 0 20px rgba(255,255,255,0.02); }
      50% { box-shadow: inset 0 0 40px rgba(255,255,255,0.05); }
    }
    @keyframes otd-fade-in {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes otd-float-up {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes otd-scanline {
      0% { top: -100%; opacity: 0; }
      50% { opacity: 0.4; }
      100% { top: 100%; opacity: 0; }
    }
    @keyframes otd-pulse-soft {
      0%, 100% { box-shadow: 0 0 15px rgba(255,255,255,0.3); }
      50% { box-shadow: 0 0 25px rgba(255,255,255,0.5); }
    }
    @keyframes otd-star-twinkle {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    @keyframes otd-spin {
      to { transform: rotate(360deg); }
    }

    /* ===== Container ===== */
    .otd-container {
      max-width: 500px;
      margin: 0 auto;
      padding: 20px 16px 120px 16px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      -webkit-user-select: none;
      user-select: none;
    }
    .otd-container *, .otd-container *::before, .otd-container *::after {
      box-sizing: border-box;
    }
    .otd-container button, .otd-container input, .otd-container select {
      border-radius: 0 !important;
      -webkit-appearance: none;
      appearance: none;
    }
    .otd-container input[type="number"] {
      -moz-appearance: textfield;
    }

    /* ===== Cards ===== */
    .otd-card {
      border: 1px solid ${T.colorBorder};
      background: ${T.bgCard};
      position: relative;
      overflow: hidden;
      animation: otd-breathe 8s ease-in-out infinite;
    }
    .otd-card-hover:hover {
      border-color: ${T.colorBorderHover} !important;
    }

    /* ===== Modal ===== */
    .otd-modal-overlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(0,0,0,0); display: flex; align-items: center;
      justify-content: center; z-index: 9999; backdrop-filter: blur(0px);
      transition: background 0.5s ease, backdrop-filter 0.5s ease;
    }
    .otd-modal-overlay.visible {
      background: rgba(0,0,0,0.95); backdrop-filter: blur(4px);
    }
    .otd-modal-content {
      background: ${T.bgCard}; padding: 32px; border: 1px solid ${T.colorBorder};
      max-width: 420px; max-height: 85vh; width: 90%;
      display: flex; flex-direction: column; align-items: center; gap: 20px;
      box-shadow: 0 40px 120px rgba(0,0,0,0.9); position: relative;
      opacity: 0; transform: translateY(30px);
      transition: opacity 0.5s ease, transform 0.5s ease;
      overflow-y: auto;
    }
    .otd-modal-overlay.visible .otd-modal-content {
      opacity: 1; transform: translateY(0);
    }

    /* ===== Skill Selector Grid ===== */
    .otd-selector-wrap {
      display: flex; flex-direction: column; align-items: center;
      min-height: 70vh; justify-content: center; gap: 24px;
      animation: otd-fade-in 0.6s ease;
    }
    .otd-skill-grid {
      display: flex; flex-wrap: wrap; gap: 30px;
      justify-content: center; max-width: 500px;
      max-height: 55vh; overflow-y: auto; padding: 10px 5px;
    }
    .otd-skill-node {
      width: 72px; height: 72px; border-radius: 50%;
      border: 1px solid ${T.colorBorder}; background: #111;
      display: flex; align-items: center; justify-content: center;
      cursor: pointer; transition: all 0.3s ease; position: relative;
    }
    .otd-skill-node:hover {
      border-color: ${T.colorBorderHover};
      box-shadow: 0 0 15px rgba(255,255,255,0.08);
    }
    .otd-skill-node.selected {
      border-color: #fff;
      background: #1a1a1a;
      box-shadow: 0 0 20px rgba(255,255,255,0.2);
      animation: otd-pulse-soft 3s ease-in-out infinite;
    }
    .otd-skill-node.selected svg { color: #fff !important; filter: drop-shadow(0 0 6px rgba(255,255,255,0.5)); }
    .otd-skill-label {
      position: absolute; bottom: -18px; left: 50%; transform: translateX(-50%);
      font-size: 9px; color: ${T.colorMuted}; font-family: "Courier New", monospace;
      white-space: nowrap; text-transform: uppercase; letter-spacing: 1px;
      transition: color 0.3s;
    }
    .otd-skill-node.selected .otd-skill-label { color: #ccc; }

    /* ===== Session Skills Display ===== */
    .otd-session-skill {
      display: flex; align-items: center; gap: 14px;
      padding: 14px 16px; background: #0f0f0f;
      border: 1px solid ${T.colorBorder}; margin-bottom: 0;
      transition: all 0.3s ease; cursor: pointer;
    }
    .otd-session-skill:hover { border-color: ${T.colorBorderHover}; }
    .otd-session-skill-icon {
      width: 40px; height: 40px; border-radius: 50%;
      border: 1px solid ${T.colorBorder}; display: flex;
      align-items: center; justify-content: center; color: ${T.color};
      flex-shrink: 0;
    }
    .otd-session-skill-name {
      color: ${T.color}; font-size: 12px;
      font-family: "Courier New", monospace; letter-spacing: 1px;
      text-transform: uppercase; flex: 1;
    }
    .otd-session-skill-remove {
      width: 24px; height: 24px; border: 1px solid ${T.colorBorder};
      display: flex; align-items: center; justify-content: center;
      color: ${T.colorMuted}; font-size: 12px; cursor: pointer;
      transition: all 0.3s ease; background: transparent; padding: 0;
    }
    .otd-session-skill-remove:hover {
      border-color: #c44; color: #f66;
    }
    .otd-session-skill-chevron {
      color: ${T.colorMuted}; font-size: 12px; transition: transform 0.3s ease;
      margin-left: 6px; flex-shrink: 0;
    }
    .otd-session-skill-chevron.open { transform: rotate(90deg); }

    /* ===== Scrollable Skill Embed ===== */
    .otd-skill-embed-wrap {
      margin-bottom: 12px; overflow: hidden;
    }
    .otd-skill-embed {
      max-height: 300px; overflow-y: auto; padding: 16px 20px;
      background: #060606; border: 1px solid ${T.colorBorder};
      border-top: none; position: relative;
      -webkit-user-select: text; user-select: text;
    }
    .otd-skill-embed::-webkit-scrollbar { width: 4px; }
    .otd-skill-embed::-webkit-scrollbar-track { background: transparent; }
    .otd-skill-embed::-webkit-scrollbar-thumb { background: ${T.colorBorder}; }
    .otd-skill-embed::-webkit-scrollbar-thumb:hover { background: ${T.colorBorderHover}; }
    /* Fade hint at bottom when scrollable */
    .otd-skill-embed-fade {
      position: absolute; bottom: 0; left: 0; right: 0; height: 40px;
      background: linear-gradient(transparent, #060606);
      pointer-events: none; transition: opacity 0.3s;
    }
    /* Override Obsidian rendered markdown to match theme */
    .otd-skill-embed .markdown-rendered {
      color: ${T.color} !important; font-size: 13px; line-height: 1.6;
    }
    .otd-skill-embed .markdown-rendered h1,
    .otd-skill-embed .markdown-rendered h2,
    .otd-skill-embed .markdown-rendered h3,
    .otd-skill-embed .markdown-rendered h4 {
      color: #ccc !important; font-family: "Courier New", monospace;
      border-bottom: 1px solid ${T.colorBorder}; padding-bottom: 4px;
    }
    .otd-skill-embed .markdown-rendered a { color: ${T.color} !important; }
    .otd-skill-embed .markdown-rendered img {
      max-width: 100%; border: 1px solid ${T.colorBorder};
    }
    .otd-skill-embed .markdown-rendered code {
      background: #111; color: #aaa; padding: 2px 4px;
    }
    .otd-skill-embed .markdown-rendered blockquote {
      border-left: 2px solid ${T.colorBorder}; padding-left: 12px;
      color: ${T.colorMuted}; font-style: italic;
    }
    .otd-skill-embed .markdown-rendered ul,
    .otd-skill-embed .markdown-rendered ol { padding-left: 20px; }
    .otd-skill-embed .markdown-rendered li { margin-bottom: 4px; }

    /* ===== Buttons ===== */
    .otd-btn {
      padding: 14px 24px; background: transparent;
      border: 1px solid ${T.colorBorder}; color: ${T.color};
      font-family: "Courier New", monospace; font-size: 10px;
      letter-spacing: 3px; text-transform: uppercase;
      cursor: pointer; transition: all 0.3s ease;
      position: relative; overflow: hidden; text-align: center;
    }
    .otd-btn:hover {
      border-color: ${T.colorHover}; color: ${T.colorHover};
      box-shadow: 0 0 20px rgba(255,255,255,0.05);
    }
    .otd-btn:active { transform: scale(0.98); }
    .otd-btn.primary {
      border-color: ${T.colorBorderHover}; color: ${T.colorHover};
    }
    .otd-btn.ready {
      border-color: #fff; color: #fff;
      box-shadow: 0 0 25px rgba(255,255,255,0.15);
    }
    .otd-btn:disabled {
      opacity: 0.3; pointer-events: none;
    }

    /* ===== Section Labels ===== */
    .otd-section-label {
      color: ${T.colorMuted}; font-size: 9px;
      font-family: "Courier New", monospace; letter-spacing: 3px;
      text-transform: uppercase; margin-bottom: 16px;
    }

    /* ===== Divider ===== */
    .otd-divider {
      width: 40px; height: 1px;
      background: linear-gradient(90deg, transparent, ${T.color}, transparent);
      margin: 4px auto;
    }

    /* ===== Completion Card ===== */
    .otd-complete-card {
      border: 1px solid ${T.colorBorder}; background: ${T.bgCard};
      padding: 32px 24px; text-align: center; position: relative;
      animation: otd-breathe 8s ease-in-out infinite;
    }

    /* ===== Feel Buttons ===== */
    .otd-feel-btn {
      flex: 1; padding: 16px; background: ${T.bgCardAlt};
      border: 1px solid ${T.colorBorder}; text-align: center;
      cursor: pointer; transition: all 0.2s ease;
    }
    .otd-feel-btn:hover { border-color: ${T.colorBorderHover}; background: #141414; }
    .otd-feel-btn.active { border-color: #fff; background: #141414; }
    .otd-feel-btn.active .otd-feel-label { color: #fff !important; }
  `;
  document.head.appendChild(style);
}

// ==========================================
// HELPER: Decorative corners
// ==========================================
function addCorners(el, color, size) {
  color = color || T.color;
  size = size || 14;
  ["TL","TR","BL","BR"].forEach(function(pos) {
    const c = document.createElement("div");
    const isTop = pos.includes("T");
    const isLeft = pos.includes("L");
    c.style.cssText = "position:absolute;" +
      (isTop ? "top:0;" : "bottom:0;") +
      (isLeft ? "left:0;" : "right:0;") +
      "width:" + size + "px;height:" + size + "px;" +
      "border-" + (isTop ? "top" : "bottom") + ":1px solid " + color + ";" +
      "border-" + (isLeft ? "left" : "right") + ":1px solid " + color + ";" +
      "z-index:10;pointer-events:none;transition:all 0.3s ease;";
    el.appendChild(c);
  });
}

// ==========================================
// HELPER: Modal system
// ==========================================
let activeModal = null;

function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove("visible");
  setTimeout(function() {
    if (activeModal && activeModal.parentNode) activeModal.parentNode.removeChild(activeModal);
    activeModal = null;
  }, 500);
}

function createModal(title, contentBuilder) {
  if (activeModal) { activeModal.parentNode.removeChild(activeModal); activeModal = null; }
  const modal = document.createElement("div");
  modal.className = "otd-modal-overlay";
  activeModal = modal;

  const mc = document.createElement("div");
  mc.className = "otd-modal-content";
  modal.appendChild(mc);
  addCorners(mc, T.color);

  if (title) {
    const t = document.createElement("div");
    t.textContent = title;
    t.style.cssText = "color:" + T.color + ";font-size:11px;font-family:'Courier New',monospace;letter-spacing:3px;text-transform:uppercase;text-align:center;";
    mc.appendChild(t);
    const d = document.createElement("div");
    d.className = "otd-divider";
    mc.appendChild(d);
  }

  contentBuilder(mc);

  modal.onclick = function(e) { if (e.target === modal) closeModal(); };
  document.body.appendChild(modal);
  requestAnimationFrame(function() { modal.classList.add("visible"); });
  return modal;
}

// ==========================================
// HELPER: State persistence
// ==========================================
async function saveState() {
  await setMultipleData({
    skills: skills,
  });
}

// ==========================================
// NAVIGATION: Post-completion
// ==========================================
function getReturnDestination() {
  const activityId = getData("activity");
  const activities = ctx.plugin?.settings?.activities;
  if (activities && activityId) {
    const actConfig = activities.find(function(a) { return a.id === activityId; });
    if (actConfig?.completionReturnTo) return actConfig.completionReturnTo;
  }
  return "dashboard";
}

function navigateAfterCompletion() {
  const dest = getReturnDestination();
  if (dest === "stay") return;
  if (dest === "dashboard") {
    if (ctx.plugin?.activateDashboardView) {
      setTimeout(function() { ctx.plugin.activateDashboardView(); }, 600);
    }
    return;
  }
  if (dest === "homepage") {
    const hp = ctx.plugin?.settings?.homepage;
    if (!hp) { notice("No homepage set in settings"); return; }
    const f = app.vault.getAbstractFileByPath(hp);
    if (f) {
      setTimeout(function() { app.workspace.getLeaf(false).openFile(f); }, 600);
    } else {
      notice("Homepage file not found: " + hp);
    }
  }
}

// ==========================================
// LOAD SKILLS from vault folder
// ==========================================
function loadAvailableSkills() {
  const files = getFilesInFolder(SKILL_FOLDER);
  const result = [];
  for (const f of files) {
    if (f.basename === "__root__") continue;
    const meta = getFileMetadata(f.path) || {};
    result.push({
      name: f.basename,
      icon: meta.icon || "default",
      order: meta.order || 999,
    });
  }
  result.sort(function(a, b) {
    if (a.order !== b.order) return a.order - b.order;
    return a.name.localeCompare(b.name);
  });
  return result;
}

// ==========================================
// HELPER: Render markdown into a container
// Uses Obsidian's MarkdownRenderer for full
// fidelity (images, links, formatting, etc.)
// ==========================================
let _MarkdownRenderer = null;
let _Component = null;

async function ensureMarkdownRenderer() {
  if (_MarkdownRenderer) return;
  try {
    const obsModule = await import("obsidian");
    _MarkdownRenderer = obsModule.MarkdownRenderer;
    _Component = obsModule.Component;
  } catch (e) {
    // Fallback: won't render markdown, will show raw text
  }
}

async function renderSkillEmbed(containerEl, skillName) {
  // Find the skill file path
  const normalizedFolder = SKILL_FOLDER.endsWith("/") ? SKILL_FOLDER : SKILL_FOLDER + "/";
  const filePath = normalizedFolder + skillName + ".md";
  const content = await readFile(filePath);
  if (!content) {
    containerEl.innerHTML = '<div style="color:' + T.colorMuted + ';font-size:11px;font-style:italic;padding:8px;">No content found</div>';
    return;
  }

  // Strip frontmatter before rendering
  let body = content;
  const fmMatch = content.match(/^---\n[\s\S]*?\n---\n?/);
  if (fmMatch) {
    body = content.substring(fmMatch[0].length).trim();
  }

  if (!body) {
    containerEl.innerHTML = '<div style="color:' + T.colorMuted + ';font-size:11px;font-style:italic;padding:8px;">Empty note</div>';
    return;
  }

  await ensureMarkdownRenderer();
  if (_MarkdownRenderer && _Component) {
    const component = new _Component();
    component.load();
    try {
      await _MarkdownRenderer.render(app, body, containerEl, filePath, component);
      // Resolve ![[image.png]] embeds into actual <img> tags
      const imgExts = /\.(png|jpg|jpeg|gif|webp|svg|bmp|avif)$/i;
      containerEl.querySelectorAll("span.internal-embed").forEach(function(span) {
        var src = span.getAttribute("src") || "";
        if (!imgExts.test(src)) return;
        var imgFile = app.metadataCache.getFirstLinkpathDest(src, filePath);
        if (!imgFile) return;
        var img = document.createElement("img");
        img.src = app.vault.adapter.getResourcePath(imgFile.path);
        img.alt = span.getAttribute("alt") || imgFile.basename;
        img.style.maxWidth = "100%";
        span.replaceWith(img);
      });
    } catch (e) {
      // Fallback to plain text on error
      const pre = document.createElement("pre");
      pre.style.cssText = "color:" + T.color + ";font-size:12px;white-space:pre-wrap;word-break:break-word;margin:0;";
      pre.textContent = body;
      containerEl.appendChild(pre);
    }
  } else {
    // No MarkdownRenderer available — show as plain text
    const pre = document.createElement("pre");
    pre.style.cssText = "color:" + T.color + ";font-size:12px;white-space:pre-wrap;word-break:break-word;margin:0;";
    pre.textContent = body;
    containerEl.appendChild(pre);
  }
}

// ==========================================
// FINISH MODAL: Mood + Duration
// ==========================================
function openFinishModal() {
  const startTimeStr = getData("Timestamp") || "";
  let startTime = null;
  let startDisplay = "—";

  if (startTimeStr) {
    startTime = new Date(startTimeStr);
    if (!isNaN(startTime.getTime())) {
      startDisplay = startTime.toTimeString().substring(0, 5);
    }
  }
  if (!startTime || isNaN(startTime.getTime())) {
    // Fallback to file creation time
    startTime = new Date(file.stat.ctime);
    startDisplay = startTime.toTimeString().substring(0, 5);
  }

  const now = new Date();
  const nowStr = now.toTimeString().substring(0, 5);
  let durationStr = "—";
  if (startTime) {
    const diffMs = now - startTime;
    const diffMins = Math.floor(diffMs / 60000);
    const hours = Math.floor(diffMins / 60);
    const mins = diffMins % 60;
    durationStr = hours > 0 ? hours + "h " + mins + "m" : mins + " min";
  }

  let selectedMood = null;

  createModal("Session Complete", function(mc) {
    // Time summary card
    const summary = document.createElement("div");
    summary.style.cssText = "width:100%;padding:16px;background:" + T.bgCardAlt + ";border:1px solid " + T.colorBorder + ";";
    summary.innerHTML =
      '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">' +
        '<span style="color:' + T.colorMuted + ';font-size:9px;font-family:Courier New,monospace;letter-spacing:1px;text-transform:uppercase;">Started</span>' +
        '<span style="color:' + T.color + ';font-size:13px;font-family:Courier New,monospace;">' + startDisplay + '</span></div>' +
      '<div style="display:flex;justify-content:space-between;margin-bottom:8px;">' +
        '<span style="color:' + T.colorMuted + ';font-size:9px;font-family:Courier New,monospace;letter-spacing:1px;text-transform:uppercase;">Finished</span>' +
        '<span style="color:' + T.color + ';font-size:13px;font-family:Courier New,monospace;">' + nowStr + '</span></div>' +
      '<div style="width:100%;height:1px;background:' + T.colorBorder + ';margin:8px 0;"></div>' +
      '<div style="display:flex;justify-content:space-between;">' +
        '<span style="color:' + T.colorMuted + ';font-size:9px;font-family:Courier New,monospace;letter-spacing:1px;text-transform:uppercase;">Duration</span>' +
        '<span style="color:#fff;font-size:16px;font-family:Courier New,monospace;font-weight:600;">' + durationStr + '</span></div>';
    mc.appendChild(summary);

    // "How did it feel?" label
    const feelLabel = document.createElement("div");
    feelLabel.textContent = "How did it feel?";
    feelLabel.style.cssText = "color:" + T.colorMuted + ";font-size:9px;font-family:'Courier New',monospace;letter-spacing:2px;text-transform:uppercase;";
    mc.appendChild(feelLabel);

    // Mood buttons
    const moodRow = document.createElement("div");
    moodRow.style.cssText = "display:flex;gap:12px;width:100%;";
    mc.appendChild(moodRow);

    const moodBtns = [];
    ["discipline", "flow"].forEach(function(mood) {
      const btn = document.createElement("div");
      btn.className = "otd-feel-btn";
      btn.innerHTML =
        '<div style="font-size:20px;margin-bottom:6px;">' + (mood === "discipline" ? "\u25C6" : "\u2248") + '</div>' +
        '<div class="otd-feel-label" style="color:' + T.colorMuted + ';font-size:8px;font-family:Courier New,monospace;letter-spacing:1px;text-transform:uppercase;">' + mood + '</div>';
      moodRow.appendChild(btn);
      moodBtns.push(btn);

      btn.onclick = function() {
        moodBtns.forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
        selectedMood = mood;
        confirmBtn.disabled = false;
        confirmBtn.classList.add("ready");
      };
    });

    // Confirm button
    const confirmBtn = document.createElement("button");
    confirmBtn.className = "otd-btn";
    confirmBtn.textContent = "Complete & Return";
    confirmBtn.disabled = true;
    confirmBtn.style.width = "100%";
    mc.appendChild(confirmBtn);

    confirmBtn.onclick = async function() {
      if (!selectedMood) return;
      confirmBtn.disabled = true;
      confirmBtn.textContent = "Saving...";

      await setMultipleData({
        Drawing: true,
        "Drawing-Type": selectedMood,
        Timestamp: timestamp || moment().format(),
        skills: skills,
        endTime: nowStr,
        duration: durationStr,
      });

      notice("Drawing session logged as " + (selectedMood === "discipline" ? "Discipline" : "Flow") + "!");
      closeModal();
      navigateAfterCompletion();
    };
  });
}

// ==========================================
// ADD SKILLS MODAL
// ==========================================
function openAddSkillsModal() {
  const allSkills = loadAvailableSkills();
  const available = allSkills.filter(function(s) {
    return !skills.includes(s.name);
  });

  if (available.length === 0) {
    notice("All skills already added to this session");
    return;
  }

  const selected = new Set();

  createModal("Add Skills", function(mc) {
    const grid = document.createElement("div");
    grid.style.cssText = "display:flex;flex-wrap:wrap;gap:24px;justify-content:center;padding:10px 0;max-height:50vh;overflow-y:auto;width:100%;";
    mc.appendChild(grid);

    available.forEach(function(skill) {
      const node = document.createElement("div");
      node.className = "otd-skill-node";
      node.innerHTML = '<div style="color:' + T.colorMuted + ';transition:color 0.3s;">' + iconSvg(skill.icon, 28) + '</div>';

      const label = document.createElement("div");
      label.className = "otd-skill-label";
      label.textContent = skill.name.length > 12 ? skill.name.substring(0, 11) + ".." : skill.name;
      label.title = skill.name;
      node.appendChild(label);
      grid.appendChild(node);

      node.onclick = function() {
        if (selected.has(skill.name)) {
          selected.delete(skill.name);
          node.classList.remove("selected");
        } else {
          selected.add(skill.name);
          node.classList.add("selected");
        }
        confirmBtn.disabled = selected.size === 0;
        if (selected.size > 0) confirmBtn.classList.add("ready");
        else confirmBtn.classList.remove("ready");
      };
    });

    const confirmBtn = document.createElement("button");
    confirmBtn.className = "otd-btn";
    confirmBtn.textContent = "Add Selected";
    confirmBtn.disabled = true;
    confirmBtn.style.width = "100%";
    mc.appendChild(confirmBtn);

    confirmBtn.onclick = async function() {
      if (selected.size === 0) return;
      skills = skills.concat(Array.from(selected));
      await saveState();
      closeModal();
      render();
    };
  });
}

// ==========================================
// SCREEN: Skill Selector (initial state)
// ==========================================
function renderSkillSelector(root) {
  const allSkills = loadAvailableSkills();

  const wrap = document.createElement("div");
  wrap.className = "otd-selector-wrap";
  root.appendChild(wrap);

  // Title
  const title = document.createElement("div");
  title.textContent = "Select Skills";
  title.style.cssText = "color:" + T.color + ";font-size:11px;font-family:'Courier New',monospace;letter-spacing:4px;text-transform:uppercase;";
  wrap.appendChild(title);

  // Decorative divider
  const d = document.createElement("div");
  d.className = "otd-divider";
  wrap.appendChild(d);

  // Subtitle
  const sub = document.createElement("div");
  sub.textContent = "Choose your focus for this session";
  sub.style.cssText = "color:" + T.colorMuted + ";font-size:12px;font-family:Georgia,serif;font-style:italic;margin-bottom:8px;";
  wrap.appendChild(sub);

  if (allSkills.length === 0) {
    const empty = document.createElement("div");
    empty.style.cssText = "color:" + T.colorMuted + ";font-size:12px;font-family:Georgia,serif;font-style:italic;padding:40px 0;text-align:center;";
    empty.innerHTML = '<div style="font-size:28px;margin-bottom:12px;opacity:0.3;">&#9998;</div>No skills found in<br><span style="font-family:Courier New,monospace;font-size:10px;color:' + T.color + ';">' + SKILL_FOLDER + '</span>';
    wrap.appendChild(empty);
    return;
  }

  const selected = new Set();

  // Top bar: select all toggle
  const topBar = document.createElement("div");
  topBar.style.cssText = "display:flex;justify-content:flex-end;width:100%;max-width:500px;";
  wrap.appendChild(topBar);

  let allSelected = false;
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "otd-btn";
  toggleBtn.textContent = "Select All";
  toggleBtn.style.cssText += "padding:6px 12px;font-size:8px;letter-spacing:2px;";
  topBar.appendChild(toggleBtn);

  // Skill grid
  const grid = document.createElement("div");
  grid.className = "otd-skill-grid";
  wrap.appendChild(grid);

  const nodeEls = [];

  allSkills.forEach(function(skill, index) {
    const node = document.createElement("div");
    node.className = "otd-skill-node";
    node.style.animation = "otd-float-up 0.4s ease forwards";
    node.style.animationDelay = (0.1 + index * 0.04) + "s";
    node.style.opacity = "0";

    const iconWrap = document.createElement("div");
    iconWrap.style.cssText = "color:" + T.colorMuted + ";transition:color 0.3s;display:flex;align-items:center;justify-content:center;";
    iconWrap.innerHTML = iconSvg(skill.icon, 30);
    node.appendChild(iconWrap);

    const label = document.createElement("div");
    label.className = "otd-skill-label";
    label.textContent = skill.name.length > 12 ? skill.name.substring(0, 11) + ".." : skill.name;
    label.title = skill.name;
    node.appendChild(label);
    grid.appendChild(node);
    nodeEls.push({ el: node, skill: skill });

    node.onclick = function() {
      if (selected.has(skill.name)) {
        selected.delete(skill.name);
        node.classList.remove("selected");
      } else {
        selected.add(skill.name);
        node.classList.add("selected");
      }
      updateBeginBtn();
    };
  });

  // Toggle all
  toggleBtn.onclick = function() {
    allSelected = !allSelected;
    nodeEls.forEach(function(item) {
      if (allSelected) {
        selected.add(item.skill.name);
        item.el.classList.add("selected");
      } else {
        selected.delete(item.skill.name);
        item.el.classList.remove("selected");
      }
    });
    toggleBtn.textContent = allSelected ? "Deselect All" : "Select All";
    updateBeginBtn();
  };

  // Begin button
  const beginRow = document.createElement("div");
  beginRow.style.cssText = "width:100%;max-width:500px;margin-top:8px;";
  wrap.appendChild(beginRow);

  const beginBtn = document.createElement("button");
  beginBtn.className = "otd-btn";
  beginBtn.textContent = "Begin Session";
  beginBtn.disabled = true;
  beginBtn.style.width = "100%";
  beginRow.appendChild(beginBtn);

  // Count badge
  const badge = document.createElement("span");
  badge.style.cssText = "display:inline-block;margin-left:8px;background:" + T.colorBorder + ";color:" + T.colorMuted + ";padding:2px 8px;font-size:9px;font-family:'Courier New',monospace;transition:all 0.3s;";
  badge.textContent = "0";
  beginBtn.appendChild(badge);

  function updateBeginBtn() {
    const n = selected.size;
    badge.textContent = String(n);
    beginBtn.disabled = n === 0;
    if (n > 0) {
      beginBtn.classList.add("ready");
      badge.style.background = "#fff";
      badge.style.color = "#000";
    } else {
      beginBtn.classList.remove("ready");
      badge.style.background = T.colorBorder;
      badge.style.color = T.colorMuted;
    }
  }

  // Free session button
  const freeBtn = document.createElement("button");
  freeBtn.className = "otd-btn";
  freeBtn.textContent = "Free Session";
  freeBtn.style.cssText += "width:100%;margin-top:8px;";
  beginRow.appendChild(freeBtn);

  const freeSub = document.createElement("div");
  freeSub.textContent = "Start with blank canvas, add skills later";
  freeSub.style.cssText = "color:" + T.colorMuted + ";font-size:10px;font-family:Georgia,serif;font-style:italic;text-align:center;margin-top:6px;";
  beginRow.appendChild(freeSub);

  // Begin click: save selected skills and transition to session view
  beginBtn.onclick = async function() {
    if (selected.size === 0) return;
    skills = Array.from(selected);

    // Set timestamp on session start
    await setMultipleData({
      skills: skills,
      Timestamp: moment().format(),
    });

    // Cosmic transition: flash white
    wrap.style.transition = "opacity 0.4s ease";
    wrap.style.opacity = "0";
    setTimeout(function() { render(); }, 450);
  };

  // Free session: start with no skills
  freeBtn.onclick = async function() {
    skills = [];
    await setMultipleData({
      skills: [],
      Timestamp: moment().format(),
      "Drawing-freeSession": true,
    });
    render();
  };
}

// ==========================================
// SCREEN: Active Session
// ==========================================
async function renderActiveSession(root) {
  // Header card
  const header = document.createElement("div");
  header.className = "otd-card";
  header.style.cssText += "padding:24px;margin-bottom:20px;";
  root.appendChild(header);
  addCorners(header, T.color);

  const headerIcon = document.createElement("div");
  headerIcon.innerHTML = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:' + T.color + ';"><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>';
  headerIcon.style.cssText = "text-align:center;margin-bottom:12px;";
  header.appendChild(headerIcon);

  const headerTitle = document.createElement("div");
  headerTitle.textContent = "Drawing Session";
  headerTitle.style.cssText = "text-align:center;color:" + T.color + ";font-size:11px;font-family:'Courier New',monospace;letter-spacing:3px;text-transform:uppercase;margin-bottom:4px;";
  header.appendChild(headerTitle);

  // Show session start time
  const ts = getData("Timestamp");
  if (ts) {
    const startTime = moment(ts);
    const timeStr = startTime.isValid() ? startTime.format("HH:mm") : "";
    if (timeStr) {
      const timeEl = document.createElement("div");
      timeEl.textContent = "Started " + timeStr;
      timeEl.style.cssText = "text-align:center;color:" + T.colorMuted + ";font-size:10px;font-family:Georgia,serif;font-style:italic;";
      header.appendChild(timeEl);
    }
  }

  // Skills section — scrollable embed blocks
  if (skills.length > 0) {
    const skillsSection = document.createElement("div");
    skillsSection.style.cssText = "margin-bottom:20px;";
    root.appendChild(skillsSection);

    const skillsLabel = document.createElement("div");
    skillsLabel.className = "otd-section-label";
    skillsLabel.textContent = "Session Skills (" + skills.length + ")";
    skillsSection.appendChild(skillsLabel);

    const allSkills = loadAvailableSkills();
    const skillMap = {};
    allSkills.forEach(function(s) { skillMap[s.name] = s; });

    // Track which embeds are open (all start expanded)
    const openEmbeds = new Set(skills);

    skills.forEach(function(skillName, index) {
      const skillData = skillMap[skillName] || { icon: "default" };

      // Wrapper for header + embed
      const wrap = document.createElement("div");
      wrap.className = "otd-skill-embed-wrap";
      wrap.style.animation = "otd-fade-in 0.3s ease forwards";
      wrap.style.animationDelay = (index * 0.05) + "s";
      wrap.style.opacity = "0";

      // Header row (clickable to toggle)
      const row = document.createElement("div");
      row.className = "otd-session-skill";

      const iconEl = document.createElement("div");
      iconEl.className = "otd-session-skill-icon";
      iconEl.innerHTML = iconSvg(skillData.icon, 20);
      row.appendChild(iconEl);

      const nameEl = document.createElement("div");
      nameEl.className = "otd-session-skill-name";
      nameEl.textContent = skillName;
      row.appendChild(nameEl);

      // Chevron toggle
      const chevron = document.createElement("span");
      chevron.className = "otd-session-skill-chevron open";
      chevron.innerHTML = "\u25B8"; // right triangle
      row.appendChild(chevron);

      const removeBtn = document.createElement("button");
      removeBtn.className = "otd-session-skill-remove";
      removeBtn.innerHTML = "&times;";
      removeBtn.title = "Remove skill";
      row.appendChild(removeBtn);

      removeBtn.onclick = async function(e) {
        e.stopPropagation();
        skills = skills.filter(function(s) { return s !== skillName; });
        await saveState();
        render();
      };

      wrap.appendChild(row);

      // Scrollable embed container
      const embedOuter = document.createElement("div");
      embedOuter.style.cssText = "position:relative;";

      const embed = document.createElement("div");
      embed.className = "otd-skill-embed";
      embedOuter.appendChild(embed);

      // Bottom fade hint
      const fade = document.createElement("div");
      fade.className = "otd-skill-embed-fade";
      embedOuter.appendChild(fade);

      // Hide fade when scrolled to bottom
      embed.addEventListener("scroll", function() {
        const atBottom = embed.scrollHeight - embed.scrollTop - embed.clientHeight < 10;
        fade.style.opacity = atBottom ? "0" : "1";
      });

      wrap.appendChild(embedOuter);

      // Toggle collapse on header click
      row.onclick = function() {
        if (openEmbeds.has(skillName)) {
          openEmbeds.delete(skillName);
          embedOuter.style.display = "none";
          chevron.classList.remove("open");
        } else {
          openEmbeds.add(skillName);
          embedOuter.style.display = "block";
          chevron.classList.add("open");
        }
      };

      skillsSection.appendChild(wrap);

      // Load and render the skill file content
      renderSkillEmbed(embed, skillName);
    });
  }

  // Add Skills button
  const addCard = document.createElement("div");
  addCard.className = "otd-card otd-card-hover";
  addCard.style.cssText += "padding:16px 20px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between;cursor:pointer;";
  root.appendChild(addCard);

  const addLabel = document.createElement("div");
  addLabel.innerHTML = '<span style="color:' + T.colorMuted + ';font-size:10px;font-family:Courier New,monospace;letter-spacing:2px;text-transform:uppercase;">Add More Skills</span>';
  addCard.appendChild(addLabel);

  const addIcon = document.createElement("div");
  addIcon.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="color:' + T.colorMuted + ';"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  addCard.appendChild(addIcon);

  addCard.onclick = function() { openAddSkillsModal(); };

  // Spacer
  const spacer = document.createElement("div");
  spacer.style.height = "20px";
  root.appendChild(spacer);

  // Finish Session button
  const finishCard = document.createElement("div");
  finishCard.className = "otd-card otd-card-hover";
  finishCard.style.cssText += "border-style:dashed;padding:24px;text-align:center;cursor:pointer;transition:all 0.4s ease;";
  root.appendChild(finishCard);
  addCorners(finishCard, T.color);

  const finishIcon = document.createElement("div");
  finishIcon.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" style="color:' + T.color + ';transition:color 0.3s;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>';
  finishIcon.style.marginBottom = "12px";
  finishCard.appendChild(finishIcon);

  const finishTitle = document.createElement("div");
  finishTitle.textContent = "Finish Session";
  finishTitle.style.cssText = "color:" + T.color + ";font-size:10px;font-family:'Courier New',monospace;letter-spacing:3px;text-transform:uppercase;margin-bottom:4px;transition:color 0.3s;";
  finishCard.appendChild(finishTitle);

  const finishSub = document.createElement("div");
  finishSub.textContent = "Log mood and track time";
  finishSub.style.cssText = "color:" + T.colorMuted + ";font-size:11px;font-family:Georgia,serif;font-style:italic;";
  finishCard.appendChild(finishSub);

  finishCard.onmouseenter = function() {
    finishCard.style.borderColor = T.colorHover;
    finishCard.style.borderStyle = "solid";
    finishTitle.style.color = T.colorHover;
    finishIcon.querySelector("svg").style.color = T.colorHover;
  };
  finishCard.onmouseleave = function() {
    finishCard.style.borderColor = T.colorBorder;
    finishCard.style.borderStyle = "dashed";
    finishTitle.style.color = T.color;
    finishIcon.querySelector("svg").style.color = T.color;
  };

  finishCard.onclick = function() { openFinishModal(); };
}

// ==========================================
// SCREEN: Completion Summary
// ==========================================
function renderCompletionSummary(root) {
  const card = document.createElement("div");
  card.className = "otd-complete-card";
  root.appendChild(card);
  addCorners(card, T.color);

  // Emoji
  const emoji = document.createElement("div");
  emoji.textContent = "\uD83C\uDFA8";
  emoji.style.cssText = "font-size:36px;margin-bottom:12px;";
  card.appendChild(emoji);

  // Title
  const title = document.createElement("div");
  title.textContent = "SESSION COMPLETE";
  title.style.cssText = "color:" + T.color + ";font-size:11px;font-family:'Courier New',monospace;letter-spacing:4px;text-transform:uppercase;margin-bottom:12px;";
  card.appendChild(title);

  // Divider
  const d = document.createElement("div");
  d.className = "otd-divider";
  card.appendChild(d);

  // Type
  if (drawingType) {
    const typeEl = document.createElement("div");
    const isDisc = drawingType === "discipline";
    typeEl.innerHTML = '<span style="font-size:16px;margin-right:6px;">' + (isDisc ? "\u25C6" : "\u2248") + '</span>' +
      (isDisc ? "Discipline" : "Flow");
    typeEl.style.cssText = "color:" + T.color + ";font-size:13px;font-family:'Courier New',monospace;letter-spacing:2px;text-transform:uppercase;margin-top:16px;";
    card.appendChild(typeEl);
  }

  // Duration
  const dur = getData("duration");
  if (dur) {
    const durEl = document.createElement("div");
    durEl.textContent = dur;
    durEl.style.cssText = "color:#fff;font-size:20px;font-family:'Courier New',monospace;font-weight:600;margin-top:8px;";
    card.appendChild(durEl);
  }

  // Time range
  const endTime = getData("endTime");
  if (timestamp && endTime) {
    const start = moment(timestamp);
    const startStr = start.isValid() ? start.format("HH:mm") : "?";
    const timeRange = document.createElement("div");
    timeRange.textContent = startStr + " \u2192 " + endTime;
    timeRange.style.cssText = "color:" + T.colorMuted + ";font-size:11px;font-family:'Courier New',monospace;margin-top:4px;";
    card.appendChild(timeRange);
  }

  // Skills practiced
  if (skills.length > 0) {
    const skillsWrap = document.createElement("div");
    skillsWrap.style.cssText = "margin-top:20px;width:100%;text-align:left;";
    card.appendChild(skillsWrap);

    const skillsLabel = document.createElement("div");
    skillsLabel.className = "otd-section-label";
    skillsLabel.style.textAlign = "center";
    skillsLabel.textContent = "Skills Practiced";
    skillsWrap.appendChild(skillsLabel);

    const allSkills = loadAvailableSkills();
    const skillMap = {};
    allSkills.forEach(function(s) { skillMap[s.name] = s; });

    const skillTags = document.createElement("div");
    skillTags.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;justify-content:center;";
    skillsWrap.appendChild(skillTags);

    skills.forEach(function(name) {
      const skillData = skillMap[name] || { icon: "default" };
      const tag = document.createElement("div");
      tag.style.cssText = "display:flex;align-items:center;gap:6px;padding:6px 12px;background:" + T.bgCardAlt + ";border:1px solid " + T.colorBorder + ";";
      tag.innerHTML = '<span style="color:' + T.colorMuted + ';">' + iconSvg(skillData.icon, 14) + '</span>' +
        '<span style="color:' + T.color + ';font-size:10px;font-family:Courier New,monospace;letter-spacing:1px;text-transform:uppercase;">' + name + '</span>';
      skillTags.appendChild(tag);
    });
  }
}

// ==========================================
// MAIN RENDER
// ==========================================
async function render() {
  container.innerHTML = "";

  const root = document.createElement("div");
  root.className = "otd-container";
  container.appendChild(root);

  // State 1: Completed — show summary
  if (isCompleted && drawingType) {
    renderCompletionSummary(root);
    return;
  }

  // State 2: No skills selected and not a free session — show selector
  const isFreeSession = getData("Drawing-freeSession") === true;
  if (skills.length === 0 && !isFreeSession) {
    renderSkillSelector(root);
    return;
  }

  // State 3: Active session (skills selected or free session)
  await renderActiveSession(root);
}

return render();
