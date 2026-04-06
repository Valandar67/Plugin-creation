// ============================================================
// Olen Template — Music Practice v1.0
// Renders inside the Olen workspace for the "music" activity.
// All UI lives here — daily notes only store YAML frontmatter.
// Data is read/written via ctx.getData / ctx.setData.
// ============================================================

const { container, getData, setData, setMultipleData, app, moment, notice,
        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;

// ============================================================
// SETTINGS
// ============================================================
const _actConfig = ctx.plugin?.settings?.activities?.find(a => a.id === getData("activity") || a.workspaceTemplate === "music");
const SETTINGS = {
  musicFolder: _actConfig?.folder || "Activities/Music",
  sheetDbFolder: _actConfig?.exerciseDbFolder || "Sheet Music",
};

// ============================================================
// THEME — Dark monochrome, no accent colors
// ============================================================
const THEME = {
  color: "#888888",
  colorHover: "#999999",
  colorBorder: "#2a2a2a",
  colorBorderHover: "#3a3a3a",
  colorMuted: "#4d473e",
  colorLight: "#b0b0b0",
  colorDiscipline: "#888888",
  colorFlow: "#aaaaaa",
  systemGreen: "#7a9a7d",
};

// ============================================================
// STATE (from frontmatter)
// ============================================================
let sessionConfig = getData("sessionConfig") || null;
let practiceLog = getData("practiceLog") || [];
let currentSegmentIndex = getData("currentSegmentIndex") || 0;
let totalPracticeTime = getData("totalPracticeTime") || 0;
let recordings = getData("recordings") || [];
const isCompleted = getData("Music") === true;

// ============================================================
// STYLES
// ============================================================
if (!document.getElementById("olen-tpl-music-v1")) {
  const style = document.createElement("style");
  style.id = "olen-tpl-music-v1";
  style.textContent = `
    .otm-container * { box-sizing: border-box; }
    .otm-container { max-width: 500px; margin: 0 auto; padding: 10px 0 120px 0; font-family: Georgia, serif; color: #c8c0b2; }
    .otm-container button, .otm-container input, .otm-modal-overlay button, .otm-modal-overlay input { border-radius: 10px !important; -webkit-appearance: none; appearance: none; }
    .otm-container input[type="number"] { -moz-appearance: textfield; }
    @keyframes otm-breathe { 0%, 100% { box-shadow: inset 0 0 16px rgba(136,136,136,0.02); } 50% { box-shadow: inset 0 0 24px rgba(136,136,136,0.04); } }
    @keyframes otm-pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
    @keyframes otm-beat-flash { 0% { transform: scale(1); opacity: 0.3; } 15% { transform: scale(1.6); opacity: 1; } 100% { transform: scale(1); opacity: 0.3; } }
    .otm-card { background: rgba(0,0,0,0.6); backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%); border: 1px solid rgba(136,136,136,0.08); padding: 16px; position: relative; margin-bottom: 12px; border-radius: 16px; }
    .otm-card-breathe { animation: otm-breathe 6s ease-in-out infinite; }
    .otm-header { text-align: center; padding: 16px; }
    .otm-title { margin: 0; color: #888; font-size: 18px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }
    .otm-progress-label { color: #4d473e; font-size: 11px; margin-top: 6px; }
    .otm-section-label { color: #4d473e; font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-align: center; margin: 16px 0 8px; }
    .otm-week-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
    .otm-week-day { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 3px; background: rgba(0,0,0,0.4); border: 1px solid rgba(136,136,136,0.06); border-radius: 8px; }
    .otm-week-day.today { border-color: rgba(136,136,136,0.2); }
    .otm-week-day .otm-day-label { font-size: 8px; color: #4d473e; letter-spacing: 1px; text-transform: uppercase; }
    .otm-week-day .otm-day-num { font-size: 12px; font-weight: 600; color: #4d473e; }
    .otm-week-day .otm-day-icon { font-size: 13px; min-height: 16px; }
    .otm-week-day.done .otm-day-num { color: #888; }
    .otm-btn { padding: 12px 20px; border: none; border-radius: 10px !important; font-size: 12px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; -webkit-appearance: none; appearance: none; }
    .otm-btn-primary { background: linear-gradient(180deg, #888, #666); color: #0a0a0a; width: 100%; box-shadow: 0 2px 12px rgba(136,136,136,0.15); }
    .otm-btn-primary:active { transform: scale(0.98); box-shadow: 0 0 20px rgba(136,136,136,0.2); }
    .otm-btn-secondary { background: rgba(255,255,255,0.03); border: 1px solid rgba(136,136,136,0.1); color: #666; }
    .otm-btn-secondary:active { border-color: rgba(136,136,136,0.3); color: #888; }
    .otm-btn-finish { background: linear-gradient(180deg, #7a9a7d, #5a7a5d); color: #0a0a0a; box-shadow: 0 2px 12px rgba(122,154,125,0.15); }
    .otm-btn-dashed { width: 100%; background: transparent; border: 1px dashed rgba(136,136,136,0.1); color: #4d473e; border-radius: 10px !important; }
    .otm-btn-dashed:active { border-color: rgba(136,136,136,0.3); color: #888; }
    .otm-nav-row { display: flex; gap: 10px; margin-top: 20px; }
    .otm-nav-row .otm-btn { flex: 1; text-align: center; }
    .otm-input { padding: 6px; background: rgba(0,0,0,0.3); border: 1px solid rgba(136,136,136,0.1); border-radius: 8px !important; color: #888; text-align: center; font-size: 14px; font-weight: 600; width: 60px; -webkit-appearance: none; appearance: none; }
    .otm-ctrl-btn { width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; background: rgba(0,0,0,0.4); border: 1px solid rgba(136,136,136,0.08); border-radius: 8px !important; color: #888; cursor: pointer; font-size: 15px; flex-shrink: 0; -webkit-appearance: none; appearance: none; }
    .otm-ctrl-btn:active { background: rgba(136,136,136,0.2); }
    .otm-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.4s ease, backdrop-filter 0.4s ease; }
    .otm-modal-overlay.visible { background: rgba(0,0,0,0.85); backdrop-filter: blur(12px); }
    .otm-modal-content { background: rgba(0,0,0,0.95); backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%); padding: 24px 18px; border: 1px solid rgba(136,136,136,0.1); border-radius: 18px; max-width: 500px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 14px; position: relative; opacity: 0; transform: translateY(20px); transition: opacity 0.4s ease, transform 0.4s ease; overflow-y: auto; }
    .otm-modal-overlay.visible .otm-modal-content { opacity: 1; transform: translateY(0); }
    .otm-feel-btn { display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: rgba(0,0,0,0.4); border-radius: 12px; cursor: pointer; margin-bottom: 8px; transition: all 0.2s; border: 1px solid rgba(136,136,136,0.06); }
    .otm-feel-btn:active { background: rgba(136,136,136,0.08); }
    .otm-piece-card { padding: 12px 14px; background: rgba(0,0,0,0.4); border: 1px solid rgba(136,136,136,0.06); border-radius: 10px; cursor: pointer; transition: all 0.15s; margin-bottom: 6px; }
    .otm-piece-card:active { border-color: rgba(136,136,136,0.2); background: rgba(136,136,136,0.06); }
    .otm-preset-card { padding: 10px 14px; background: rgba(0,0,0,0.4); border: 1px solid rgba(136,136,136,0.06); border-radius: 10px; cursor: pointer; transition: all 0.15s; margin-bottom: 6px; }
    .otm-preset-card:active { border-color: rgba(136,136,136,0.2); }
    .otm-metronome-dot { width: 12px; height: 12px; border-radius: 50%; background: #555; transition: all 0.05s; }
    .otm-metronome-dot.active { background: #bbb; animation: otm-beat-flash 0.15s ease-out; }
    .otm-sheet-viewer { width: 100%; overflow: hidden; position: relative; border-radius: 10px; background: rgba(0,0,0,0.4); border: 1px solid rgba(136,136,136,0.06); }
    .otm-sheet-viewer img { width: 100%; display: block; transition: transform 0.1s linear; }
    .otm-transport { display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: rgba(0,0,0,0.8); backdrop-filter: blur(20px); border: 1px solid rgba(136,136,136,0.08); border-radius: 14px; position: sticky; bottom: 10px; z-index: 100; }
    .otm-transport-btn { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: rgba(136,136,136,0.1); border: 1px solid rgba(136,136,136,0.15); border-radius: 50% !important; color: #bbb; cursor: pointer; font-size: 16px; transition: all 0.15s; }
    .otm-transport-btn:active { background: rgba(136,136,136,0.25); }
    .otm-transport-btn.recording { background: rgba(180,60,60,0.2); border-color: rgba(180,60,60,0.4); color: #b44; }
    .otm-bpm-display { font-size: 16px; font-weight: 700; color: #888; letter-spacing: 1px; min-width: 50px; text-align: center; }
    .otm-timer { font-size: 13px; color: #666; font-variant-numeric: tabular-nums; letter-spacing: 1px; }
    .otm-anchor-marker { position: absolute; left: 0; width: 100%; height: 2px; background: rgba(136,136,136,0.3); pointer-events: none; z-index: 5; }
    .otm-anchor-marker::before { content: attr(data-beat); position: absolute; left: 4px; top: -8px; font-size: 8px; color: #666; }
    .otm-recording-indicator { display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 8px; font-size: 10px; font-weight: 700; letter-spacing: 1px; color: #b44; background: rgba(180,60,60,0.1); border: 1px solid rgba(180,60,60,0.2); }
    .otm-time-sig-btn { padding: 8px 14px; background: rgba(0,0,0,0.4); border: 1px solid rgba(136,136,136,0.08); border-radius: 8px !important; color: #666; font-size: 12px; cursor: pointer; transition: all 0.2s; }
    .otm-time-sig-btn.active { background: rgba(136,136,136,0.15); border-color: rgba(136,136,136,0.25); color: #aaa; }
  `;
  document.head.appendChild(style);
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function addCorners(el, color, size) {
  size = size || 14;
  ["TL", "TR", "BL", "BR"].forEach((pos) => {
    const c = document.createElement("div");
    const isTop = pos.includes("T"), isLeft = pos.includes("L");
    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;
    el.appendChild(c);
  });
}

function formatDuration(seconds) {
  if (!seconds || seconds <= 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ":" + (s < 10 ? "0" : "") + s;
}

function formatDurationLong(seconds) {
  if (!seconds || seconds <= 0) return "0m";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return h + "h " + m + "m";
  return m + "m";
}

// ============================================================
// SAVE STATE
// ============================================================

async function saveState() {
  await setMultipleData({
    sessionConfig: sessionConfig,
    practiceLog: practiceLog,
    currentSegmentIndex: currentSegmentIndex,
    totalPracticeTime: totalPracticeTime,
    recordings: recordings,
  });
}

// ============================================================
// MODAL SYSTEM
// ============================================================

let activeModal = null;

function closeModal() {
  if (!activeModal) return;
  activeModal.classList.remove("visible");
  setTimeout(() => {
    if (activeModal?.parentNode) activeModal.parentNode.removeChild(activeModal);
    activeModal = null;
  }, 500);
}

function createModal(title, contentBuilder) {
  if (activeModal) { activeModal.parentNode.removeChild(activeModal); activeModal = null; }
  const modal = document.createElement("div");
  modal.className = "otm-modal-overlay";
  activeModal = modal;
  const modalContent = document.createElement("div");
  modalContent.className = "otm-modal-content";
  modal.appendChild(modalContent);
  addCorners(modalContent, THEME.color);
  if (title) {
    const t = document.createElement("h2");
    t.textContent = title;
    t.style.cssText = `margin:0;color:${THEME.color};font-size:14px;font-weight:500;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;
    modalContent.appendChild(t);
    const d = document.createElement("div");
    d.style.cssText = `width:60px;height:1px;background:linear-gradient(90deg,transparent,${THEME.color},transparent);margin:0 auto 12px;`;
    modalContent.appendChild(d);
  }
  contentBuilder(modalContent);
  modal.onclick = (e) => { if (e.target === modal) closeModal(); };
  document.body.appendChild(modal);
  requestAnimationFrame(() => modal.classList.add("visible"));
  return modal;
}

// ============================================================
// POST-COMPLETION NAVIGATION
// ============================================================

function getReturnDestination() {
  const activityId = getData("activity");
  const activities = ctx.plugin?.settings?.activities;
  if (activities && activityId) {
    const actConfig = activities.find(a => a.id === activityId);
    if (actConfig?.completionReturnTo) return actConfig.completionReturnTo;
  }
  return "dashboard";
}

function navigateAfterCompletion() {
  const dest = getReturnDestination();
  if (dest === "stay") return;
  if (dest === "dashboard") {
    if (ctx.plugin?.activateDashboardView) {
      setTimeout(() => ctx.plugin.activateDashboardView(), 600);
    }
    return;
  }
  if (dest === "homepage") {
    const homepagePath = ctx.plugin?.settings?.homepage;
    if (!homepagePath) { notice("No homepage set"); return; }
    const targetFile = app.vault.getAbstractFileByPath(homepagePath);
    if (targetFile) {
      setTimeout(() => app.workspace.getLeaf(false).openFile(targetFile), 600);
    } else {
      notice("Homepage file not found: " + homepagePath);
    }
    return;
  }
}

// ============================================================
// FINISH SESSION — Plugin communication (XP, boss, workspace)
// ============================================================

async function finishSession(type) {
  await setMultipleData({
    Music: true,
    "Music-Type": type,
    Timestamp: moment().format(),
    sessionConfig: sessionConfig,
    practiceLog: practiceLog,
    currentSegmentIndex: currentSegmentIndex,
    totalPracticeTime: totalPracticeTime,
    recordings: recordings,
  });

  if (ctx.plugin?.settings) {
    const ws = ctx.plugin.settings.activeWorkspace;
    if (ws) {
      const actConfig = ctx.plugin.settings.activities?.find(a => a.id === ws.activityId);
      const wsType = type.toLowerCase();
      const state = ctx.plugin.settings.workspaceCompletionStates?.find(s => s.id === wsType);
      if (state && state.xpMultiplier > 0) {
        const xpGain = Math.round((ctx.plugin.settings.devConfig?.xpPerCompletion || 50) * state.xpMultiplier);
        if (ctx.plugin.settings.categoryXP?.[ws.category] !== undefined) {
          ctx.plugin.settings.categoryXP[ws.category] += xpGain;
        }
      }
      if (wsType !== "skipped" && actConfig) {
        ctx.plugin.settings.bossCurrentHP = Math.max(0, (ctx.plugin.settings.bossCurrentHP || 0) - (actConfig.damagePerCompletion || 0));
      }
      ctx.plugin.settings.activeWorkspace = null;
      if (ctx.plugin.saveSettings) await ctx.plugin.saveSettings();
    }
  }

  notice("Practice logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");
  navigateAfterCompletion();
}

// ============================================================
// FINISH MODAL
// ============================================================

function openFinishModal() {
  createModal(null, (content) => {
    const scroll = document.createElement("div");
    scroll.style.cssText = "overflow-y:auto;display:flex;flex-direction:column;gap:16px;flex:1;max-height:70vh;";
    content.appendChild(scroll);

    // Title
    const title = document.createElement("h2");
    title.textContent = "SESSION COMPLETE";
    title.style.cssText = `margin:0;color:${THEME.systemGreen};font-size:16px;font-weight:700;letter-spacing:3px;text-align:center;`;
    scroll.appendChild(title);

    // Summary card
    const sumCard = document.createElement("div");
    sumCard.style.cssText = `padding:14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:10px;`;
    scroll.appendChild(sumCard);

    const sumTitle = document.createElement("div");
    sumTitle.textContent = "SESSION SUMMARY";
    sumTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;margin-bottom:12px;`;
    sumCard.appendChild(sumTitle);

    const stats = [
      { label: "Piece", value: sessionConfig?.piece || "Free Practice" },
      { label: "Duration", value: formatDurationLong(totalPracticeTime) },
      { label: "BPM", value: sessionConfig?.bpm ? String(sessionConfig.bpm) : "—" },
      { label: "Time Sig", value: sessionConfig?.timeSignature || "—" },
      { label: "Segments", value: String(practiceLog.length) },
      { label: "Recordings", value: String(recordings.length) },
    ];
    for (const stat of stats) {
      const row = document.createElement("div");
      row.style.cssText = `display:flex;justify-content:space-between;padding:6px 0;border-bottom:1px solid ${THEME.colorBorder};`;
      const lbl = document.createElement("span");
      lbl.textContent = stat.label;
      lbl.style.cssText = `color:${THEME.colorMuted};font-size:12px;`;
      row.appendChild(lbl);
      const val = document.createElement("span");
      val.textContent = stat.value;
      val.style.cssText = `color:${THEME.color};font-size:12px;font-weight:600;`;
      row.appendChild(val);
      sumCard.appendChild(row);
    }

    // Practice log entries
    if (practiceLog.length > 0) {
      const logLabel = document.createElement("div");
      logLabel.textContent = "PRACTICE LOG";
      logLabel.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;`;
      scroll.appendChild(logLabel);

      for (const entry of practiceLog) {
        const logCard = document.createElement("div");
        logCard.style.cssText = `padding:10px 14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:10px;`;
        const logName = document.createElement("div");
        logName.textContent = entry.segment || entry.piece || "Practice";
        logName.style.cssText = `color:${THEME.color};font-size:13px;font-weight:600;`;
        logCard.appendChild(logName);
        const logMeta = document.createElement("div");
        logMeta.textContent = formatDurationLong(entry.duration) + (entry.bpm ? " \u00B7 " + entry.bpm + " BPM" : "");
        logMeta.style.cssText = `color:${THEME.colorMuted};font-size:11px;margin-top:4px;`;
        logCard.appendChild(logMeta);
        scroll.appendChild(logCard);
      }
    }

    // "How did it feel?" section
    const feelTitle = document.createElement("h3");
    feelTitle.textContent = "How did it feel?";
    feelTitle.style.cssText = `margin:8px 0 0 0;color:${THEME.color};font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;
    scroll.appendChild(feelTitle);

    const btns = document.createElement("div");
    btns.style.cssText = "display:flex;flex-direction:column;gap:10px;";
    scroll.appendChild(btns);

    // Discipline button
    const discBtn = document.createElement("div");
    discBtn.className = "otm-feel-btn";
    discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;
    discBtn.innerHTML = '<span style="font-size:24px;width:40px;text-align:center;">\u25C6</span><div style="flex:1;"><div style="color:' + THEME.colorDiscipline + ';font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through difficult passages</div></div><div style="color:#3a3a3a;font-size:18px;opacity:0.5;">\u2192</div>';
    discBtn.onclick = async () => { closeModal(); await finishSession("discipline"); };
    btns.appendChild(discBtn);

    // Flow button
    const flowBtn = document.createElement("div");
    flowBtn.className = "otm-feel-btn";
    flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;
    flowBtn.innerHTML = '<span style="font-size:24px;width:40px;text-align:center;">\u2248</span><div style="flex:1;"><div style="color:' + THEME.colorFlow + ';font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Lost in the music, effortless</div></div><div style="color:#3a3a3a;font-size:18px;opacity:0.5;">\u2192</div>';
    flowBtn.onclick = async () => { closeModal(); await finishSession("flow"); };
    btns.appendChild(flowBtn);
  });
}

// ============================================================
// DATA FUNCTIONS
// ============================================================

function getWeeklyCalendarData() {
  const today = moment().startOf("day");
  const weekStart = today.clone().startOf("isoWeek");
  const allFiles = getFilesInFolder(SETTINGS.musicFolder);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = weekStart.clone().add(i, "days");
    const dayStr = day.format("YYYY-MM-DD");
    const isToday = day.isSame(today, "day");
    const isPast = day.isBefore(today, "day");
    let status = null, type = null;
    for (const f of allFiles) {
      if (f.basename === dayStr) {
        const fm = getFileMetadata(f.path);
        if (fm && fm.Music === true) { status = "done"; type = fm["Music-Type"] || "done"; }
        break;
      }
    }
    days.push({ label: day.format("dd")[0], num: day.format("D"), isToday, isPast, status, type });
  }
  return days;
}

function getMonthlyStats() {
  const allFiles = getFilesInFolder(SETTINGS.musicFolder);
  const now = moment();
  const weekStart = now.clone().startOf("isoWeek");
  const monthStart = now.clone().startOf("month");
  let thisWeek = 0, thisMonth = 0, total = 0, totalTime = 0;
  for (const f of allFiles) {
    const fm = getFileMetadata(f.path);
    if (!fm || fm.Music !== true) continue;
    total++;
    totalTime += fm.totalPracticeTime || 0;
    const dateMatch = f.basename.match(/^(\d{4}-\d{2}-\d{2})/);
    if (!dateMatch) continue;
    const fileDate = moment(dateMatch[1], "YYYY-MM-DD");
    if (fileDate.isSameOrAfter(weekStart)) thisWeek++;
    if (fileDate.isSameOrAfter(monthStart)) thisMonth++;
  }
  return { thisWeek, thisMonth, total, totalTime };
}

function getRecentSessions(limit) {
  limit = limit || 4;
  const allFiles = getFilesInFolder(SETTINGS.musicFolder);
  const sorted = allFiles.sort(function(a, b) { return b.basename.localeCompare(a.basename); });
  const sessions = [];
  for (var i = 0; i < sorted.length; i++) {
    if (sessions.length >= limit) break;
    var f = sorted[i];
    if (f.path === file.path) continue;
    var fm = getFileMetadata(f.path);
    if (!fm || fm.Music !== true) continue;
    var dateMatch = f.basename.match(/^(\d{4}-\d{2}-\d{2})/);
    sessions.push({
      date: dateMatch ? dateMatch[1] : f.basename,
      type: fm["Music-Type"] || "done",
      piece: fm.sessionConfig?.piece || "Free Practice",
      duration: fm.totalPracticeTime || 0,
    });
  }
  return sessions;
}

function getPiecesFromDb() {
  const files = getFilesInFolder(SETTINGS.sheetDbFolder);
  return files.map(f => {
    const fm = getFileMetadata(f.path) || {};
    return {
      name: fm.title || f.basename,
      path: f.path,
      composer: fm.composer || "",
      instrument: fm.instrument || "",
      difficulty: fm.difficulty || "",
      defaultBpm: fm.defaultBpm || 120,
      timeSignature: fm.timeSignature || "4/4",
      barsPerRow: fm.barsPerRow || 4,
      rowsPerPage: fm.rowsPerPage || 4,
      sheetFile: fm.sheetFile || "",
      backingTrack: fm.backingTrack || "",
      segments: fm.segments || [],
      scrollAnchors: fm.scrollAnchors || [],
    };
  }).sort((a, b) => a.name.localeCompare(b.name));
}

// ============================================================
// METRONOME ENGINE
// ============================================================

let audioCtx = null;
let metronomeTimerId = null;
let isPlaying = false;
let currentBeat = 0;
let practiceTimerStart = null;
let practiceTimerElapsed = 0;
let practiceTimerInterval = null;
let beatDotEl = null;

function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function playClick(isDownbeat) {
  initAudio();
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.frequency.value = isDownbeat ? 880 : 440;
  gain.gain.value = isDownbeat ? 0.3 : 0.15;
  const dur = isDownbeat ? 0.03 : 0.02;
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
  osc.start(audioCtx.currentTime);
  osc.stop(audioCtx.currentTime + dur);
}

function flashBeatDot() {
  if (!beatDotEl) return;
  beatDotEl.classList.add("active");
  setTimeout(() => { if (beatDotEl) beatDotEl.classList.remove("active"); }, 100);
}

function playCountIn(bpm, beatsPerBar, callback) {
  initAudio();
  const interval = 60000 / bpm;
  let count = 0;
  const total = beatsPerBar;
  // Play first click immediately
  playClick(false);
  flashBeatDot();
  count++;
  if (count >= total) { callback(); return; }
  const cid = setInterval(() => {
    const isLast = count === total - 1;
    playClick(isLast);
    flashBeatDot();
    count++;
    if (count >= total) {
      clearInterval(cid);
      callback();
    }
  }, interval);
}

function startMetronome(bpm, beatsPerBar) {
  stopMetronome();
  initAudio();
  isPlaying = true;
  currentBeat = 0;
  const interval = 60000 / bpm;
  // First click immediately
  playClick(true);
  flashBeatDot();
  currentBeat++;
  metronomeTimerId = setInterval(() => {
    const isDownbeat = currentBeat % beatsPerBar === 0;
    playClick(isDownbeat);
    flashBeatDot();
    currentBeat++;
  }, interval);
}

function stopMetronome() {
  if (metronomeTimerId) { clearInterval(metronomeTimerId); metronomeTimerId = null; }
  isPlaying = false;
  currentBeat = 0;
}

function startPracticeTimer(timerEl) {
  practiceTimerStart = Date.now();
  practiceTimerInterval = setInterval(() => {
    const elapsed = practiceTimerElapsed + (Date.now() - practiceTimerStart) / 1000;
    if (timerEl) timerEl.textContent = formatDuration(Math.floor(elapsed));
  }, 500);
}

function stopPracticeTimer() {
  if (practiceTimerInterval) { clearInterval(practiceTimerInterval); practiceTimerInterval = null; }
  if (practiceTimerStart) {
    practiceTimerElapsed += (Date.now() - practiceTimerStart) / 1000;
    practiceTimerStart = null;
  }
  totalPracticeTime = Math.floor(practiceTimerElapsed);
}

// ============================================================
// AUTO-SCROLL WITH ANCHOR INTERPOLATION
// ============================================================

let scrollAnimFrame = null;
let scrollStartTime = null;

function getScrollPosition(elapsedBeats, anchors) {
  if (!anchors || anchors.length < 2) return 0;
  for (let i = 0; i < anchors.length - 1; i++) {
    if (elapsedBeats >= anchors[i].beat && elapsedBeats < anchors[i + 1].beat) {
      const progress = (elapsedBeats - anchors[i].beat) / (anchors[i + 1].beat - anchors[i].beat);
      return anchors[i].scrollY + progress * (anchors[i + 1].scrollY - anchors[i].scrollY);
    }
  }
  return anchors[anchors.length - 1].scrollY;
}

function generateUniformAnchors(barsPerRow, rowsPerPage, beatsPerBar) {
  const anchors = [];
  for (let row = 0; row <= rowsPerPage; row++) {
    anchors.push({
      beat: row * barsPerRow * beatsPerBar,
      scrollY: Math.min(1, row / rowsPerPage),
    });
  }
  return anchors;
}

function startAutoScroll(sheetContainer, imageEl, bpm, beatsPerBar, anchors) {
  stopAutoScroll();
  if (!anchors || anchors.length < 2) return;
  const beatsPerMs = bpm / 60000;
  scrollStartTime = performance.now();
  function tick() {
    const elapsed = performance.now() - scrollStartTime;
    const elapsedBeats = elapsed * beatsPerMs;
    const scrollY = getScrollPosition(elapsedBeats, anchors);
    const maxScroll = imageEl.naturalHeight - sheetContainer.clientHeight;
    if (maxScroll > 0) {
      imageEl.style.transform = "translateY(-" + (scrollY * maxScroll) + "px)";
    }
    scrollAnimFrame = requestAnimationFrame(tick);
  }
  scrollAnimFrame = requestAnimationFrame(tick);
}

function stopAutoScroll() {
  if (scrollAnimFrame) { cancelAnimationFrame(scrollAnimFrame); scrollAnimFrame = null; }
}

// ============================================================
// RECORDING SYSTEM
// ============================================================

let mediaRecorder = null;
let recordingChunks = [];
let isRecording = false;

async function startRecording() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder = new MediaRecorder(stream, { mimeType: "audio/webm;codecs=opus" });
    recordingChunks = [];
    mediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) recordingChunks.push(e.data); };
    mediaRecorder.onstop = async () => {
      const blob = new Blob(recordingChunks, { type: "audio/webm" });
      const timestamp = moment().format("YYYY-MM-DD_HH-mm-ss");
      const fileName = "recording-" + timestamp + ".webm";
      const folderPath = SETTINGS.musicFolder + "/Recordings";
      try {
        const folder = app.vault.getAbstractFileByPath(folderPath);
        if (!folder) await app.vault.createFolder(folderPath);
        const arrayBuffer = await blob.arrayBuffer();
        await app.vault.createBinary(folderPath + "/" + fileName, new Uint8Array(arrayBuffer));
        recordings.push({ file: folderPath + "/" + fileName, timestamp: timestamp, piece: sessionConfig?.piece || "Unknown", bpm: sessionConfig?.bpm || 0 });
        await saveState();
        notice("Recording saved: " + fileName);
      } catch (err) { notice("Failed to save recording: " + err.message); }
      stream.getTracks().forEach(function(t) { t.stop(); });
    };
    mediaRecorder.start();
    isRecording = true;
  } catch (err) {
    notice("Microphone access denied or unavailable");
    isRecording = false;
  }
}

function stopRecording() {
  if (mediaRecorder && mediaRecorder.state === "recording") {
    mediaRecorder.stop();
  }
  isRecording = false;
}

// ============================================================
// RENDER: STATS SECTION (weekly calendar + monthly stats)
// ============================================================

function renderStatsSection(root) {
  const weekData = getWeeklyCalendarData();
  const weekGrid = document.createElement("div");
  weekGrid.className = "otm-week-grid";
  root.appendChild(weekGrid);

  for (const day of weekData) {
    const cell = document.createElement("div");
    cell.className = "otm-week-day" + (day.isToday ? " today" : "") + (day.status ? " done" : "");
    const lbl = document.createElement("div");
    lbl.className = "otm-day-label";
    lbl.textContent = day.label;
    cell.appendChild(lbl);
    const num = document.createElement("div");
    num.className = "otm-day-num";
    num.textContent = day.num;
    cell.appendChild(num);
    const icon = document.createElement("div");
    icon.className = "otm-day-icon";
    if (day.status === "done") {
      if (day.type === "discipline") { icon.textContent = "\u25C6"; icon.style.color = "#888"; }
      else if (day.type === "flow") { icon.textContent = "\u2248"; icon.style.color = "#aaa"; }
      else { icon.textContent = "\u2713"; icon.style.color = THEME.systemGreen; }
    } else if (day.isToday) {
      icon.textContent = "\u2022"; icon.style.color = THEME.color; icon.style.animation = "otm-pulse-glow 2s ease-in-out infinite";
    } else if (day.isPast) {
      icon.textContent = "\u2014"; icon.style.color = "#2a2520";
    }
    cell.appendChild(icon);
    weekGrid.appendChild(cell);
  }

  // Monthly stats row
  const stats = getMonthlyStats();
  const statsRow = document.createElement("div");
  statsRow.style.cssText = "display:flex;justify-content:space-around;margin-top:12px;";
  root.appendChild(statsRow);

  const statItems = [
    { label: "THIS WEEK", value: String(stats.thisWeek) },
    { label: "THIS MONTH", value: String(stats.thisMonth) },
    { label: "TOTAL TIME", value: formatDurationLong(stats.totalTime) },
  ];
  for (const s of statItems) {
    const item = document.createElement("div");
    item.style.cssText = "text-align:center;";
    const val = document.createElement("div");
    val.textContent = s.value;
    val.style.cssText = "color:#888;font-size:16px;font-weight:700;";
    item.appendChild(val);
    const lbl = document.createElement("div");
    lbl.textContent = s.label;
    lbl.style.cssText = "color:#4d473e;font-size:8px;letter-spacing:2px;margin-top:2px;";
    item.appendChild(lbl);
    statsRow.appendChild(item);
  }
}

// ============================================================
// RENDER: RECENT SESSIONS
// ============================================================

function renderRecentSessions(root) {
  const sessions = getRecentSessions(4);
  if (sessions.length === 0) return;

  const label = document.createElement("div");
  label.className = "otm-section-label";
  label.textContent = "RECENT SESSIONS";
  root.appendChild(label);

  for (const s of sessions) {
    const card = document.createElement("div");
    card.className = "otm-preset-card";
    const topRow = document.createElement("div");
    topRow.style.cssText = "display:flex;justify-content:space-between;align-items:center;";
    const nameEl = document.createElement("span");
    nameEl.textContent = s.piece;
    nameEl.style.cssText = "color:#888;font-size:13px;font-weight:600;";
    topRow.appendChild(nameEl);
    const typeIcon = document.createElement("span");
    typeIcon.textContent = s.type === "discipline" ? "\u25C6" : s.type === "flow" ? "\u2248" : "\u2713";
    typeIcon.style.cssText = "color:#555;font-size:12px;";
    topRow.appendChild(typeIcon);
    card.appendChild(topRow);
    const metaEl = document.createElement("div");
    metaEl.textContent = s.date + " \u00B7 " + formatDurationLong(s.duration);
    metaEl.style.cssText = "color:#4d473e;font-size:11px;margin-top:4px;";
    card.appendChild(metaEl);
    root.appendChild(card);
  }
}

// ============================================================
// RENDER: LANDING PAGE
// ============================================================

async function renderLandingPage(root) {
  // Header
  const header = document.createElement("div");
  header.className = "otm-card otm-card-breathe otm-header";
  addCorners(header, THEME.color);
  const title = document.createElement("h2");
  title.className = "otm-title";
  title.textContent = "MUSIC";
  header.appendChild(title);
  const subtitle = document.createElement("div");
  subtitle.className = "otm-progress-label";
  subtitle.textContent = "Practice Session";
  header.appendChild(subtitle);
  root.appendChild(header);

  // Stats
  renderStatsSection(root);

  // Start button
  const startBtn = document.createElement("button");
  startBtn.textContent = "\u266A START SESSION";
  startBtn.className = "otm-btn otm-btn-primary";
  startBtn.style.cssText += "padding:16px 24px;font-size:15px;font-weight:700;margin-top:20px;";
  startBtn.onclick = () => openSessionSetup();
  root.appendChild(startBtn);

  // Quick free practice
  const freeBtn = document.createElement("button");
  freeBtn.textContent = "FREE PRACTICE (METRONOME ONLY)";
  freeBtn.className = "otm-btn otm-btn-secondary";
  freeBtn.style.cssText += "width:100%;margin-top:10px;padding:14px;font-size:11px;";
  freeBtn.onclick = async () => {
    sessionConfig = { piece: "Free Practice", bpm: 120, timeSignature: "4/4", beatsPerBar: 4, sheetFile: "", backingTrack: "", enableRecording: false, barsPerRow: 4, rowsPerPage: 4, scrollAnchors: [] };
    await setMultipleData({ sessionConfig: sessionConfig, Music: false, "Music-Type": "", Timestamp: moment().format() });
    render();
  };
  root.appendChild(freeBtn);

  // Pieces from DB
  const pieces = getPiecesFromDb();
  if (pieces.length > 0) {
    const pLabel = document.createElement("div");
    pLabel.className = "otm-section-label";
    pLabel.style.marginTop = "24px";
    pLabel.textContent = "YOUR PIECES";
    root.appendChild(pLabel);

    for (const piece of pieces) {
      const card = document.createElement("div");
      card.className = "otm-piece-card";
      const topRow = document.createElement("div");
      topRow.style.cssText = "display:flex;justify-content:space-between;align-items:center;";
      const nm = document.createElement("span");
      nm.textContent = piece.name;
      nm.style.cssText = "color:#888;font-size:13px;font-weight:600;";
      topRow.appendChild(nm);
      if (piece.difficulty) {
        const diff = document.createElement("span");
        diff.textContent = piece.difficulty;
        diff.style.cssText = "color:#555;font-size:10px;letter-spacing:1px;";
        topRow.appendChild(diff);
      }
      card.appendChild(topRow);
      const meta = document.createElement("div");
      meta.style.cssText = "color:#4d473e;font-size:11px;margin-top:4px;";
      const parts = [];
      if (piece.composer) parts.push(piece.composer);
      if (piece.instrument) parts.push(piece.instrument);
      parts.push(piece.defaultBpm + " BPM");
      parts.push(piece.timeSignature);
      meta.textContent = parts.join(" \u00B7 ");
      card.appendChild(meta);
      card.onclick = () => openSessionSetupWithPiece(piece);
      root.appendChild(card);
    }
  }

  // Recent sessions
  renderRecentSessions(root);
}

// ============================================================
// SESSION SETUP MODAL
// ============================================================

function parseTimeSignature(ts) {
  const parts = ts.split("/");
  return { beats: parseInt(parts[0]) || 4, noteValue: parseInt(parts[1]) || 4 };
}

function openSessionSetupWithPiece(piece) {
  openSessionSetup(piece);
}

function openSessionSetup(preselectedPiece) {
  const pieces = getPiecesFromDb();
  let selectedPiece = preselectedPiece || null;
  let bpm = preselectedPiece?.defaultBpm || 120;
  let timeSignature = preselectedPiece?.timeSignature || "4/4";
  let enableRecording = false;

  createModal("SESSION SETUP", (content) => {
    const form = document.createElement("div");
    form.style.cssText = "display:flex;flex-direction:column;gap:16px;";
    content.appendChild(form);

    // Piece selector (if not preselected)
    if (!preselectedPiece && pieces.length > 0) {
      const pieceLabel = document.createElement("div");
      pieceLabel.textContent = "Select a piece (or leave empty for free practice)";
      pieceLabel.style.cssText = "color:" + THEME.colorMuted + ";font-size:12px;";
      form.appendChild(pieceLabel);

      const pieceList = document.createElement("div");
      pieceList.style.cssText = "max-height:140px;overflow-y:auto;display:flex;flex-direction:column;gap:4px;";
      form.appendChild(pieceList);

      for (const p of pieces) {
        const item = document.createElement("div");
        item.style.cssText = "padding:8px 12px;font-size:12px;color:" + THEME.colorLight + ";cursor:pointer;background:rgba(0,0,0,0.3);border:1px solid rgba(136,136,136,0.06);border-radius:6px;transition:all 0.15s;";
        item.textContent = p.name + (p.composer ? " \u2014 " + p.composer : "");
        item.onclick = () => {
          selectedPiece = p;
          bpm = p.defaultBpm;
          timeSignature = p.timeSignature;
          bpmDisplay.textContent = String(bpm);
          // Update time sig buttons
          timeSigBtns.forEach(function(b) {
            if (b.dataset.ts === timeSignature) { b.classList.add("active"); } else { b.classList.remove("active"); }
          });
          // Highlight selected
          pieceList.querySelectorAll("div").forEach(function(d) { d.style.borderColor = "rgba(136,136,136,0.06)"; d.style.background = "rgba(0,0,0,0.3)"; });
          item.style.borderColor = THEME.color;
          item.style.background = "rgba(136,136,136,0.08)";
        };
        pieceList.appendChild(item);
      }
    } else if (preselectedPiece) {
      const selectedLabel = document.createElement("div");
      selectedLabel.textContent = preselectedPiece.name + (preselectedPiece.composer ? " \u2014 " + preselectedPiece.composer : "");
      selectedLabel.style.cssText = "color:#aaa;font-size:14px;font-weight:600;text-align:center;padding:8px;";
      form.appendChild(selectedLabel);
    }

    // BPM
    const bpmLabel = document.createElement("div");
    bpmLabel.textContent = "BPM";
    bpmLabel.style.cssText = "color:" + THEME.colorMuted + ";font-size:12px;";
    form.appendChild(bpmLabel);

    const bpmRow = document.createElement("div");
    bpmRow.style.cssText = "display:flex;align-items:center;justify-content:center;gap:12px;";
    form.appendChild(bpmRow);

    const bpmMinus = document.createElement("button");
    bpmMinus.className = "otm-ctrl-btn";
    bpmMinus.textContent = "\u2212";
    bpmMinus.onclick = () => { if (bpm > 20) { bpm -= 5; bpmDisplay.textContent = String(bpm); } };
    bpmRow.appendChild(bpmMinus);

    const bpmDisplay = document.createElement("div");
    bpmDisplay.className = "otm-bpm-display";
    bpmDisplay.textContent = String(bpm);
    bpmDisplay.style.fontSize = "24px";
    bpmRow.appendChild(bpmDisplay);

    const bpmPlus = document.createElement("button");
    bpmPlus.className = "otm-ctrl-btn";
    bpmPlus.textContent = "+";
    bpmPlus.onclick = () => { if (bpm < 300) { bpm += 5; bpmDisplay.textContent = String(bpm); } };
    bpmRow.appendChild(bpmPlus);

    // Tap tempo
    let tapTimes = [];
    const tapBtn = document.createElement("button");
    tapBtn.textContent = "TAP TEMPO";
    tapBtn.className = "otm-btn otm-btn-secondary";
    tapBtn.style.cssText += "width:100%;padding:10px;font-size:11px;";
    tapBtn.onclick = () => {
      const now = Date.now();
      tapTimes.push(now);
      if (tapTimes.length > 6) tapTimes = tapTimes.slice(-6);
      if (tapTimes.length >= 2) {
        let totalInterval = 0;
        for (let i = 1; i < tapTimes.length; i++) totalInterval += tapTimes[i] - tapTimes[i - 1];
        const avgInterval = totalInterval / (tapTimes.length - 1);
        bpm = Math.round(60000 / avgInterval);
        bpm = Math.max(20, Math.min(300, bpm));
        bpmDisplay.textContent = String(bpm);
      }
      // Reset if tap gap > 3 seconds
      setTimeout(() => { if (Date.now() - tapTimes[tapTimes.length - 1] > 3000) tapTimes = []; }, 3100);
    };
    form.appendChild(tapBtn);

    // Time signature
    const tsLabel = document.createElement("div");
    tsLabel.textContent = "TIME SIGNATURE";
    tsLabel.style.cssText = "color:" + THEME.colorMuted + ";font-size:12px;";
    form.appendChild(tsLabel);

    const tsRow = document.createElement("div");
    tsRow.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;justify-content:center;";
    form.appendChild(tsRow);

    const timeSigs = ["4/4", "3/4", "6/8", "5/4", "7/8", "2/4"];
    const timeSigBtns = [];
    for (const ts of timeSigs) {
      const btn = document.createElement("button");
      btn.className = "otm-time-sig-btn" + (ts === timeSignature ? " active" : "");
      btn.textContent = ts;
      btn.dataset.ts = ts;
      btn.onclick = () => {
        timeSignature = ts;
        timeSigBtns.forEach(function(b) { b.classList.remove("active"); });
        btn.classList.add("active");
      };
      tsRow.appendChild(btn);
      timeSigBtns.push(btn);
    }

    // Recording toggle
    const recRow = document.createElement("div");
    recRow.style.cssText = "display:flex;align-items:center;justify-content:space-between;padding:10px 0;";
    form.appendChild(recRow);

    const recLabel = document.createElement("span");
    recLabel.textContent = "Record audio";
    recLabel.style.cssText = "color:" + THEME.colorMuted + ";font-size:12px;";
    recRow.appendChild(recLabel);

    const recToggle = document.createElement("button");
    recToggle.className = "otm-btn otm-btn-secondary";
    recToggle.textContent = "OFF";
    recToggle.style.cssText += "padding:6px 16px;font-size:11px;min-width:60px;";
    recToggle.onclick = () => {
      enableRecording = !enableRecording;
      recToggle.textContent = enableRecording ? "ON" : "OFF";
      recToggle.style.borderColor = enableRecording ? "rgba(136,136,136,0.3)" : "rgba(136,136,136,0.1)";
      recToggle.style.color = enableRecording ? "#aaa" : "#666";
    };
    recRow.appendChild(recToggle);

    // Begin button
    const beginBtn = document.createElement("button");
    beginBtn.textContent = "BEGIN PRACTICE";
    beginBtn.className = "otm-btn otm-btn-primary";
    beginBtn.style.cssText += "margin-top:8px;padding:16px;font-size:14px;";
    beginBtn.onclick = async () => {
      const parsed = parseTimeSignature(timeSignature);
      sessionConfig = {
        piece: selectedPiece?.name || "Free Practice",
        piecePath: selectedPiece?.path || "",
        bpm: bpm,
        timeSignature: timeSignature,
        beatsPerBar: parsed.beats,
        sheetFile: selectedPiece?.sheetFile || "",
        backingTrack: selectedPiece?.backingTrack || "",
        enableRecording: enableRecording,
        barsPerRow: selectedPiece?.barsPerRow || 4,
        rowsPerPage: selectedPiece?.rowsPerPage || 4,
        scrollAnchors: selectedPiece?.scrollAnchors || [],
        segments: selectedPiece?.segments || [],
      };
      practiceLog = [];
      totalPracticeTime = 0;
      practiceTimerElapsed = 0;
      currentSegmentIndex = 0;

      await setMultipleData({
        sessionConfig: sessionConfig,
        practiceLog: practiceLog,
        totalPracticeTime: 0,
        currentSegmentIndex: 0,
        Music: false,
        "Music-Type": "",
        Timestamp: moment().format(),
      });

      closeModal();
      render();
    };
    form.appendChild(beginBtn);
  });
}

// ============================================================
// RENDER: PRACTICE VIEW
// ============================================================

async function renderPracticeView(root) {
  const bpm = sessionConfig.bpm || 120;
  const beatsPerBar = sessionConfig.beatsPerBar || 4;
  const anchors = (sessionConfig.scrollAnchors && sessionConfig.scrollAnchors.length >= 2)
    ? sessionConfig.scrollAnchors
    : generateUniformAnchors(sessionConfig.barsPerRow || 4, sessionConfig.rowsPerPage || 4, beatsPerBar);

  // Header
  const header = document.createElement("div");
  header.className = "otm-card otm-card-breathe otm-header";
  addCorners(header, THEME.color);
  const titleEl = document.createElement("h2");
  titleEl.className = "otm-title";
  titleEl.textContent = (sessionConfig.piece || "FREE PRACTICE").toUpperCase();
  header.appendChild(titleEl);
  const subEl = document.createElement("div");
  subEl.className = "otm-progress-label";
  subEl.textContent = bpm + " BPM \u00B7 " + (sessionConfig.timeSignature || "4/4");
  header.appendChild(subEl);
  root.appendChild(header);

  // Beat indicator row
  const beatRow = document.createElement("div");
  beatRow.style.cssText = "display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:12px;";
  root.appendChild(beatRow);

  // Beat dots for visual metronome
  const dots = [];
  for (let i = 0; i < beatsPerBar; i++) {
    const dot = document.createElement("div");
    dot.className = "otm-metronome-dot";
    if (i === 0) dot.style.width = dot.style.height = "14px";
    beatRow.appendChild(dot);
    dots.push(dot);
  }
  // The first dot is the main beat indicator
  beatDotEl = dots[0];

  // Sheet music viewer
  let sheetContainer = null;
  let imageEl = null;

  if (sessionConfig.sheetFile) {
    sheetContainer = document.createElement("div");
    sheetContainer.className = "otm-sheet-viewer";
    sheetContainer.style.height = "300px";
    root.appendChild(sheetContainer);

    // Load sheet image from vault
    try {
      const sheetPath = sessionConfig.sheetFile;
      const abstractFile = app.vault.getAbstractFileByPath(sheetPath);
      if (abstractFile) {
        const binary = await app.vault.readBinary(abstractFile);
        const blob = new Blob([binary]);
        const url = URL.createObjectURL(blob);
        imageEl = document.createElement("img");
        imageEl.src = url;
        imageEl.style.cssText = "width:100%;display:block;";
        sheetContainer.appendChild(imageEl);
      } else {
        const noFile = document.createElement("div");
        noFile.style.cssText = "padding:40px;text-align:center;color:" + THEME.colorMuted + ";font-size:12px;";
        noFile.textContent = "Sheet file not found: " + sheetPath;
        sheetContainer.appendChild(noFile);
      }
    } catch (err) {
      const errEl = document.createElement("div");
      errEl.style.cssText = "padding:40px;text-align:center;color:" + THEME.colorMuted + ";font-size:12px;";
      errEl.textContent = "Error loading sheet: " + err.message;
      sheetContainer.appendChild(errEl);
    }

    // Calibration button
    if (sessionConfig.piecePath) {
      const calBtn = document.createElement("button");
      calBtn.textContent = "CALIBRATE SCROLL";
      calBtn.className = "otm-btn otm-btn-secondary";
      calBtn.style.cssText += "width:100%;margin-top:6px;padding:8px;font-size:10px;";
      calBtn.onclick = () => openCalibrationMode(sheetContainer, imageEl);
      root.appendChild(calBtn);
    }
  }

  // Segments list (if piece has segments)
  if (sessionConfig.segments && sessionConfig.segments.length > 0) {
    const segLabel = document.createElement("div");
    segLabel.className = "otm-section-label";
    segLabel.textContent = "SEGMENTS";
    root.appendChild(segLabel);

    const segList = document.createElement("div");
    segList.style.cssText = "display:flex;flex-direction:column;gap:4px;";
    root.appendChild(segList);

    sessionConfig.segments.forEach(function(seg, idx) {
      const segCard = document.createElement("div");
      segCard.className = "otm-preset-card";
      segCard.style.borderLeft = idx === currentSegmentIndex ? "3px solid #888" : "3px solid transparent";
      const segName = document.createElement("div");
      segName.textContent = seg.name;
      segName.style.cssText = "color:" + (idx === currentSegmentIndex ? "#aaa" : "#666") + ";font-size:12px;font-weight:600;";
      segCard.appendChild(segName);
      if (seg.startBar && seg.endBar) {
        const segMeta = document.createElement("div");
        segMeta.textContent = "Bars " + seg.startBar + " \u2013 " + seg.endBar;
        segMeta.style.cssText = "color:#4d473e;font-size:10px;margin-top:2px;";
        segCard.appendChild(segMeta);
      }
      segCard.onclick = async () => {
        currentSegmentIndex = idx;
        await saveState();
        render();
      };
      segList.appendChild(segCard);
    });
  }

  // Timer display
  const timerCard = document.createElement("div");
  timerCard.className = "otm-card";
  timerCard.style.cssText += "text-align:center;padding:12px;";
  root.appendChild(timerCard);

  const timerEl = document.createElement("div");
  timerEl.className = "otm-timer";
  timerEl.style.fontSize = "24px";
  timerEl.textContent = formatDuration(Math.floor(practiceTimerElapsed || totalPracticeTime));
  timerCard.appendChild(timerEl);

  const timerLabel = document.createElement("div");
  timerLabel.textContent = "PRACTICE TIME";
  timerLabel.style.cssText = "color:#4d473e;font-size:8px;letter-spacing:2px;margin-top:4px;";
  timerCard.appendChild(timerLabel);

  // Recording indicator
  let recIndicator = null;
  if (sessionConfig.enableRecording) {
    recIndicator = document.createElement("div");
    recIndicator.className = "otm-recording-indicator";
    recIndicator.style.cssText += "margin:0 auto;display:" + (isRecording ? "inline-flex" : "none") + ";";
    recIndicator.textContent = "\u25CF REC";
    timerCard.appendChild(recIndicator);
  }

  // Transport bar (sticky bottom)
  const transport = document.createElement("div");
  transport.className = "otm-transport";
  root.appendChild(transport);

  // Play/Pause button
  let playing = false;
  const playBtn = document.createElement("div");
  playBtn.className = "otm-transport-btn";
  playBtn.textContent = "\u25B6";
  playBtn.style.fontSize = "18px";
  playBtn.onclick = () => {
    if (!playing) {
      // Start with count-in
      playBtn.textContent = "\u00B7\u00B7\u00B7";
      playCountIn(bpm, beatsPerBar, () => {
        playing = true;
        playBtn.textContent = "\u23F8";
        startMetronome(bpm, beatsPerBar);
        startPracticeTimer(timerEl);
        if (sheetContainer && imageEl && imageEl.naturalHeight) {
          startAutoScroll(sheetContainer, imageEl, bpm, beatsPerBar, anchors);
        }
        if (sessionConfig.enableRecording && !isRecording) {
          startRecording();
          if (recIndicator) recIndicator.style.display = "inline-flex";
        }
      });
    } else {
      // Pause
      playing = false;
      playBtn.textContent = "\u25B6";
      stopMetronome();
      stopPracticeTimer();
      stopAutoScroll();
    }
  };
  transport.appendChild(playBtn);

  // Stop button
  const stopBtn = document.createElement("div");
  stopBtn.className = "otm-transport-btn";
  stopBtn.textContent = "\u25A0";
  stopBtn.onclick = async () => {
    playing = false;
    stopMetronome();
    stopPracticeTimer();
    stopAutoScroll();
    if (isRecording) {
      stopRecording();
      if (recIndicator) recIndicator.style.display = "none";
    }
    // Log this segment
    const segName = sessionConfig.segments?.[currentSegmentIndex]?.name || sessionConfig.piece;
    practiceLog.push({
      segment: segName,
      piece: sessionConfig.piece,
      duration: Math.floor(practiceTimerElapsed),
      bpm: bpm,
      timestamp: moment().format(),
    });
    totalPracticeTime = Math.floor(practiceTimerElapsed);
    practiceTimerElapsed = 0;
    await saveState();
    playBtn.textContent = "\u25B6";
    timerEl.textContent = formatDuration(totalPracticeTime);
  };
  transport.appendChild(stopBtn);

  // BPM display with +/- in transport
  const bpmSection = document.createElement("div");
  bpmSection.style.cssText = "display:flex;align-items:center;gap:6px;margin-left:auto;";
  transport.appendChild(bpmSection);

  const bpmDown = document.createElement("div");
  bpmDown.className = "otm-transport-btn";
  bpmDown.style.cssText += "width:28px;height:28px;font-size:12px;";
  bpmDown.textContent = "\u2212";
  bpmDown.onclick = () => {
    if (sessionConfig.bpm > 20) {
      sessionConfig.bpm -= 5;
      bpmEl.textContent = sessionConfig.bpm;
      subEl.textContent = sessionConfig.bpm + " BPM \u00B7 " + (sessionConfig.timeSignature || "4/4");
      if (playing) { stopMetronome(); startMetronome(sessionConfig.bpm, beatsPerBar); }
    }
  };
  bpmSection.appendChild(bpmDown);

  const bpmEl = document.createElement("div");
  bpmEl.className = "otm-bpm-display";
  bpmEl.textContent = String(bpm);
  bpmEl.style.fontSize = "14px";
  bpmSection.appendChild(bpmEl);

  const bpmUp = document.createElement("div");
  bpmUp.className = "otm-transport-btn";
  bpmUp.style.cssText += "width:28px;height:28px;font-size:12px;";
  bpmUp.textContent = "+";
  bpmUp.onclick = () => {
    if (sessionConfig.bpm < 300) {
      sessionConfig.bpm += 5;
      bpmEl.textContent = sessionConfig.bpm;
      subEl.textContent = sessionConfig.bpm + " BPM \u00B7 " + (sessionConfig.timeSignature || "4/4");
      if (playing) { stopMetronome(); startMetronome(sessionConfig.bpm, beatsPerBar); }
    }
  };
  bpmSection.appendChild(bpmUp);

  // Finish button
  const finishBtn = document.createElement("button");
  finishBtn.textContent = "\u2713 FINISH SESSION";
  finishBtn.className = "otm-btn otm-btn-finish";
  finishBtn.style.cssText += "margin-top:16px;";
  finishBtn.onclick = () => {
    if (playing) {
      stopMetronome();
      stopPracticeTimer();
      stopAutoScroll();
      if (isRecording) stopRecording();
    }
    totalPracticeTime = Math.floor(practiceTimerElapsed || totalPracticeTime);
    openFinishModal();
  };
  root.appendChild(finishBtn);
}

// ============================================================
// SCROLL ANCHOR CALIBRATION UI
// ============================================================

function openCalibrationMode(existingSheetContainer, existingImageEl) {
  // Read existing anchors from piece metadata
  let pieceAnchors = [];
  if (sessionConfig.piecePath) {
    const pieceFm = getFileMetadata(sessionConfig.piecePath);
    if (pieceFm?.scrollAnchors) pieceAnchors = [...pieceFm.scrollAnchors];
  }
  if (pieceAnchors.length === 0 && sessionConfig.scrollAnchors?.length > 0) {
    pieceAnchors = [...sessionConfig.scrollAnchors];
  }

  const bpm = sessionConfig.bpm || 120;
  const beatsPerBar = sessionConfig.beatsPerBar || 4;

  createModal("SCROLL CALIBRATION", (content) => {
    content.style.maxHeight = "90vh";

    const instructions = document.createElement("div");
    instructions.style.cssText = "color:" + THEME.colorMuted + ";font-size:11px;text-align:center;line-height:1.5;margin-bottom:8px;";
    instructions.textContent = "Scroll the image to the right position, then tap SET ANCHOR to mark where the sheet should be at the current beat. Place at least a start and end anchor.";
    content.appendChild(instructions);

    // Beat counter
    let calibBeat = 0;
    let calibPlaying = false;
    let calibInterval = null;

    const beatDisplay = document.createElement("div");
    beatDisplay.style.cssText = "text-align:center;font-size:20px;font-weight:700;color:#888;margin:8px 0;font-variant-numeric:tabular-nums;";
    beatDisplay.textContent = "Beat: 0";
    content.appendChild(beatDisplay);

    // Metronome controls for calibration
    const calibControls = document.createElement("div");
    calibControls.style.cssText = "display:flex;gap:8px;justify-content:center;margin-bottom:12px;";
    content.appendChild(calibControls);

    const calibPlayBtn = document.createElement("button");
    calibPlayBtn.className = "otm-btn otm-btn-secondary";
    calibPlayBtn.textContent = "\u25B6 PLAY";
    calibPlayBtn.style.cssText += "padding:8px 16px;font-size:11px;";
    calibPlayBtn.onclick = () => {
      if (!calibPlaying) {
        calibPlaying = true;
        calibPlayBtn.textContent = "\u23F8 PAUSE";
        initAudio();
        const interval = 60000 / bpm;
        calibInterval = setInterval(() => {
          const isDownbeat = calibBeat % beatsPerBar === 0;
          playClick(isDownbeat);
          calibBeat++;
          beatDisplay.textContent = "Beat: " + calibBeat;
        }, interval);
        playClick(true);
        calibBeat++;
        beatDisplay.textContent = "Beat: " + calibBeat;
      } else {
        calibPlaying = false;
        calibPlayBtn.textContent = "\u25B6 PLAY";
        if (calibInterval) { clearInterval(calibInterval); calibInterval = null; }
      }
    };
    calibControls.appendChild(calibPlayBtn);

    const calibResetBtn = document.createElement("button");
    calibResetBtn.className = "otm-btn otm-btn-secondary";
    calibResetBtn.textContent = "RESET BEAT";
    calibResetBtn.style.cssText += "padding:8px 16px;font-size:11px;";
    calibResetBtn.onclick = () => {
      calibBeat = 0;
      beatDisplay.textContent = "Beat: 0";
    };
    calibControls.appendChild(calibResetBtn);

    // Scrollable image container for calibration
    const calSheet = document.createElement("div");
    calSheet.style.cssText = "width:100%;height:200px;overflow-y:scroll;border:1px solid rgba(136,136,136,0.1);border-radius:8px;background:rgba(0,0,0,0.4);position:relative;";
    content.appendChild(calSheet);

    // Clone the image for calibration
    if (existingImageEl && existingImageEl.src) {
      const calImg = document.createElement("img");
      calImg.src = existingImageEl.src;
      calImg.style.cssText = "width:100%;display:block;";
      calSheet.appendChild(calImg);

      // Draw existing anchor markers
      function renderAnchorMarkers() {
        calSheet.querySelectorAll(".otm-anchor-marker").forEach(function(m) { m.remove(); });
        if (!calImg.naturalHeight) return;
        for (const a of pieceAnchors) {
          const marker = document.createElement("div");
          marker.className = "otm-anchor-marker";
          marker.style.top = (a.scrollY * calImg.naturalHeight) + "px";
          marker.dataset.beat = "b" + a.beat;
          calSheet.appendChild(marker);
        }
      }
      calImg.onload = renderAnchorMarkers;
      if (calImg.complete) renderAnchorMarkers();
    }

    // Set Anchor button
    const setAnchorBtn = document.createElement("button");
    setAnchorBtn.textContent = "SET ANCHOR AT BEAT " + calibBeat;
    setAnchorBtn.className = "otm-btn otm-btn-primary";
    setAnchorBtn.style.cssText += "margin-top:12px;padding:12px;font-size:12px;";
    setAnchorBtn.onclick = () => {
      const scrollTop = calSheet.scrollTop;
      const scrollHeight = calSheet.scrollHeight - calSheet.clientHeight;
      const scrollY = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
      pieceAnchors.push({ beat: calibBeat, scrollY: Math.min(1, Math.max(0, scrollY)) });
      pieceAnchors.sort(function(a, b) { return a.beat - b.beat; });
      renderAnchorList();
      // Re-render markers on image
      if (existingImageEl && existingImageEl.src) {
        calSheet.querySelectorAll(".otm-anchor-marker").forEach(function(m) { m.remove(); });
        const calImg = calSheet.querySelector("img");
        if (calImg && calImg.naturalHeight) {
          for (const a of pieceAnchors) {
            const marker = document.createElement("div");
            marker.className = "otm-anchor-marker";
            marker.style.top = (a.scrollY * calImg.naturalHeight) + "px";
            marker.dataset.beat = "b" + a.beat;
            calSheet.appendChild(marker);
          }
        }
      }
    };
    content.appendChild(setAnchorBtn);

    // Update button text as beat changes
    const origSetText = setAnchorBtn.onclick;
    const beatObserver = setInterval(() => {
      setAnchorBtn.textContent = "SET ANCHOR AT BEAT " + calibBeat;
    }, 200);

    // Anchor list
    const anchorListContainer = document.createElement("div");
    anchorListContainer.style.cssText = "max-height:120px;overflow-y:auto;margin-top:12px;";
    content.appendChild(anchorListContainer);

    function renderAnchorList() {
      anchorListContainer.innerHTML = "";
      if (pieceAnchors.length === 0) {
        const empty = document.createElement("div");
        empty.textContent = "No anchors set yet";
        empty.style.cssText = "color:#4d473e;font-size:11px;text-align:center;padding:8px;";
        anchorListContainer.appendChild(empty);
        return;
      }
      for (let i = 0; i < pieceAnchors.length; i++) {
        const a = pieceAnchors[i];
        const row = document.createElement("div");
        row.style.cssText = "display:flex;justify-content:space-between;align-items:center;padding:6px 8px;border-bottom:1px solid " + THEME.colorBorder + ";";
        const info = document.createElement("span");
        info.textContent = "Beat " + a.beat + " \u2192 " + Math.round(a.scrollY * 100) + "%";
        info.style.cssText = "color:#888;font-size:11px;";
        row.appendChild(info);
        const delBtn = document.createElement("button");
        delBtn.textContent = "\u00D7";
        delBtn.style.cssText = "background:transparent;border:1px solid #3a2828;color:#6a4a4a;cursor:pointer;font-size:14px;width:24px;height:24px;border-radius:6px !important;";
        delBtn.onclick = () => {
          pieceAnchors.splice(i, 1);
          renderAnchorList();
        };
        row.appendChild(delBtn);
        anchorListContainer.appendChild(row);
      }
    }
    renderAnchorList();

    // Save & Exit
    const saveRow = document.createElement("div");
    saveRow.style.cssText = "display:flex;gap:8px;margin-top:12px;";
    content.appendChild(saveRow);

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "CANCEL";
    cancelBtn.className = "otm-btn otm-btn-secondary";
    cancelBtn.style.flex = "1";
    cancelBtn.onclick = () => {
      if (calibInterval) clearInterval(calibInterval);
      clearInterval(beatObserver);
      closeModal();
    };
    saveRow.appendChild(cancelBtn);

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "SAVE ANCHORS";
    saveBtn.className = "otm-btn otm-btn-primary";
    saveBtn.style.flex = "1";
    saveBtn.onclick = async () => {
      if (calibInterval) clearInterval(calibInterval);
      clearInterval(beatObserver);
      // Save anchors to session config
      sessionConfig.scrollAnchors = pieceAnchors;
      await saveState();
      // Also save to the piece's .md file if possible
      if (sessionConfig.piecePath) {
        try {
          const pieceFile = app.vault.getAbstractFileByPath(sessionConfig.piecePath);
          if (pieceFile) {
            await app.fileManager.processFrontMatter(pieceFile, (fm) => {
              fm.scrollAnchors = pieceAnchors;
            });
            notice("Scroll anchors saved to " + sessionConfig.piece);
          }
        } catch (err) {
          notice("Anchors saved to session only (couldn't update piece file)");
        }
      }
      closeModal();
      render();
    };
    saveRow.appendChild(saveBtn);
  });
}

// ============================================================
// RENDER: COMPLETED VIEW
// ============================================================

function renderCompletedView(root) {
  const wType = getData("Music-Type");
  const summaryCard = document.createElement("div");
  summaryCard.className = "otm-card otm-card-breathe";
  summaryCard.style.textAlign = "center";
  summaryCard.style.padding = "32px";
  addCorners(summaryCard, THEME.systemGreen);
  const iconEl = document.createElement("div");
  iconEl.style.cssText = "font-size:32px;margin-bottom:12px;";
  iconEl.textContent = wType === "discipline" ? "\u25C6" : "\u2248";
  summaryCard.appendChild(iconEl);
  const completeTitle = document.createElement("h2");
  completeTitle.style.cssText = "margin:0;color:" + THEME.systemGreen + ";font-size:16px;letter-spacing:3px;text-transform:uppercase;";
  completeTitle.textContent = "SESSION COMPLETE";
  summaryCard.appendChild(completeTitle);
  const typeLabel = document.createElement("div");
  typeLabel.style.cssText = "color:" + THEME.colorMuted + ";font-size:13px;margin-top:8px;font-style:italic;";
  typeLabel.textContent = wType === "discipline" ? "Discipline Win" : "Flow State";
  summaryCard.appendChild(typeLabel);
  const tsLabel = document.createElement("div");
  tsLabel.style.cssText = "color:" + THEME.colorMuted + ";font-size:11px;margin-top:16px;";
  tsLabel.textContent = moment(getData("Timestamp")).format("MMM D, YYYY \u2014 h:mm A");
  summaryCard.appendChild(tsLabel);
  root.appendChild(summaryCard);

  // Session summary card
  if (sessionConfig) {
    const sumCard = document.createElement("div");
    sumCard.className = "otm-card";
    addCorners(sumCard, THEME.color);
    const sumTitle = document.createElement("div");
    sumTitle.style.cssText = "color:" + THEME.colorMuted + ";font-size:11px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:12px;";
    sumTitle.textContent = "SESSION SUMMARY";
    sumCard.appendChild(sumTitle);

    const details = [
      { label: "Piece", value: sessionConfig.piece || "Free Practice" },
      { label: "Duration", value: formatDurationLong(totalPracticeTime) },
      { label: "BPM", value: String(sessionConfig.bpm || "—") },
      { label: "Segments", value: String(practiceLog.length) },
      { label: "Recordings", value: String(recordings.length) },
    ];
    for (const d of details) {
      const row = document.createElement("div");
      row.style.cssText = "display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid " + THEME.colorBorder + ";";
      const lbl = document.createElement("span");
      lbl.textContent = d.label;
      lbl.style.cssText = "color:" + THEME.color + ";font-weight:600;";
      row.appendChild(lbl);
      const val = document.createElement("span");
      val.textContent = d.value;
      val.style.cssText = "color:" + THEME.colorMuted + ";font-size:12px;";
      row.appendChild(val);
      sumCard.appendChild(row);
    }
    root.appendChild(sumCard);
  }
}

// ============================================================
// MAIN RENDER
// ============================================================

async function render() {
  // Clean up any running timers/audio
  stopMetronome();
  stopAutoScroll();
  if (practiceTimerInterval) { clearInterval(practiceTimerInterval); practiceTimerInterval = null; }
  beatDotEl = null;

  container.innerHTML = "";
  const root = document.createElement("div");
  root.className = "otm-container";
  container.appendChild(root);

  // Completed state
  if (isCompleted && getData("Music-Type")) {
    renderCompletedView(root);
    return;
  }

  // No session config — landing page
  if (!sessionConfig) {
    await renderLandingPage(root);
    return;
  }

  // Active practice session
  await renderPracticeView(root);
}

// ── Boot ──
return render();
