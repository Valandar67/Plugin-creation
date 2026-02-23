// ============================================================
// Olen Template — Workout Tracker v4.0
// Renders inside the Workspace view when the user enters
// a workout session. All data is read/written via ctx API.
// Settings-driven: no hardcoded paths.
// ============================================================

const { container, getData, setData, setMultipleData, app, plugin, moment,
        notice, createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;

// ── Settings (all configurable via Olen Settings > Workout) ──
const ws = plugin.settings.workoutSettings || {};
const workoutActivity = plugin.settings.activities.find(a => a.id === "workout") || {};
const WORKOUT_FOLDER = workoutActivity.folder || "Personal Life/01 Workout";
const STATS_FILE = ws.statsFile || "Personal Life/Personal Stats.md";
const EXERCISE_DB_FOLDER = ws.exerciseDbFolder || "Home/Activities/Exercises database";
const MUSCLE_GROUPS = ws.muscleGroups || {
  "Neck": { subgroups: null, icon: "\uD83E\uDDB4" },
  "Back": { subgroups: ["Lats", "Traps", "Rhomboids", "Lower Back", "Rear Delts"], icon: "\uD83D\uDD19" },
  "Chest": { subgroups: null, icon: "\uD83D\uDCAA" },
  "Shoulders": { subgroups: ["Front Delts", "Side Delts", "Rear Delts"], icon: "\uD83C\uDFAF" },
  "Core": { subgroups: null, icon: "\uD83C\uDFAF" },
  "Legs": { subgroups: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"], icon: "\uD83E\uDDB5" },
  "Arms": { subgroups: ["Biceps", "Triceps", "Forearms"], icon: "\uD83D\uDCAA" },
};

const THEME = {
  color: "#9a8c7a",
  colorHover: "#aa9c8a",
  colorBorder: "#3a342a",
  colorBorderHover: "#4a443a",
  colorMuted: "#6a5a4a",
  colorLight: "#b8a890",
  colorDiscipline: "#a89860",
  colorFlow: "#6a8a9a",
  systemGreen: "#7a9a7d"
};

const STRENGTH_LEVELS = {
  "Untrained":    { color: "#6a6a6a", icon: "\u25CB" },
  "Beginner":     { color: "#a89860", icon: "\u25D0" },
  "Novice":       { color: "#7a9a7d", icon: "\u25D1" },
  "Intermediate": { color: "#6a8a9a", icon: "\u25D5" },
  "Advanced":     { color: "#8a7a9a", icon: "\u25CF" },
  "Elite":        { color: "#9a6a7a", icon: "\u2605" }
};

// ── State (from frontmatter of the daily note) ──
let exercises = getData("exercises") || [];
let muscleGroups = getData("muscleGroups") || [];
let currentMuscleIndex = getData("currentMuscleIndex") || 0;
const isCompleted = getData("Workout") === true;

// ── Inject styles once ──
if (!document.getElementById("olen-tpl-workout-v4")) {
  const style = document.createElement("style");
  style.id = "olen-tpl-workout-v4";
  style.textContent = `
    .otw-container * { box-sizing: border-box; }
    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0; font-family: Georgia, serif; }
    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 20px rgba(154,140,122,0.03); } 50% { box-shadow: inset 0 0 40px rgba(154,140,122,0.08); } }
    @keyframes otw-float-up { 0% { transform: translateY(0); opacity: 0; } 10% { opacity: 0.4; } 90% { opacity: 0.4; } 100% { transform: translateY(-100px) translateX(20px); opacity: 0; } }
    .otw-card { background: #0a0a0a; border: 1px solid #3a342a; padding: 16px; position: relative; margin-bottom: 16px; }
    .otw-card-breathe { animation: otw-breathe 6s ease-in-out infinite; }
    .otw-header { text-align: center; padding: 20px; }
    .otw-title { margin: 0; color: #9a8c7a; font-size: 24px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }
    .otw-progress-label { color: #6a5a4a; font-size: 12px; margin-top: 8px; }
    .otw-btn { padding: 14px 24px; border: none; font-size: 13px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; }
    .otw-btn-primary { background: #9a8c7a; color: #0a0a0a; width: 100%; }
    .otw-btn-primary:active { transform: scale(0.98); }
    .otw-btn-secondary { background: #0f0f0f; border: 1px solid #3a342a; color: #6a5a4a; }
    .otw-btn-secondary:active { border-color: #9a8c7a; color: #9a8c7a; }
    .otw-btn-finish { background: #7a9a7d; color: #0a0a0a; }
    .otw-btn-dashed { width: 100%; background: transparent; border: 1px dashed #3a342a; color: #6a5a4a; }
    .otw-btn-dashed:active { border-color: #9a8c7a; color: #9a8c7a; }
    .otw-nav-row { display: flex; gap: 12px; margin-top: 24px; }
    .otw-nav-row .otw-btn { flex: 1; text-align: center; }
    .otw-set-row { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 12px; padding: 12px; background: #0f0f0f; border: 1px solid #3a342a; margin-bottom: 6px; }
    .otw-set-row.completed { opacity: 0.6; }
    .otw-checkbox { width: 24px; height: 24px; border: 2px solid #3a342a; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0a0a0a; font-weight: bold; transition: all 0.2s; flex-shrink: 0; }
    .otw-checkbox.checked { background: #7a9a7d; border-color: #7a9a7d; }
    .otw-input { padding: 6px; background: #0a0a0a; border: 1px solid #3a342a; color: #9a8c7a; text-align: center; font-size: 14px; font-weight: 600; width: 50px; }
    .otw-ctrl-btn { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: #0f0f0f; border: 1px solid #3a342a; color: #9a8c7a; cursor: pointer; font-size: 16px; flex-shrink: 0; }
    .otw-ctrl-btn:active { background: #9a8c7a; color: #0a0a0a; }
    .otw-warmup-badge { font-size: 9px; color: #6a8a9a; padding: 2px 6px; background: rgba(106,138,154,0.15); border-radius: 3px; }
    .otw-strength-bar { height: 6px; background: #1a1a1a; border-radius: 3px; overflow: hidden; margin-top: 6px; }
    .otw-strength-fill { height: 100%; border-radius: 3px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }
    .otw-strength-badge { display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
    .otw-pr-box { display: flex; flex-direction: column; gap: 4px; padding: 10px 12px; background: rgba(168,152,96,0.1); border: 1px solid rgba(168,152,96,0.3); border-radius: 4px; margin-top: 8px; }
    .otw-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.5s ease, backdrop-filter 0.5s ease; }
    .otw-modal-overlay.visible { background: rgba(0,0,0,0.95); backdrop-filter: blur(4px); }
    .otw-modal-content { background: #0a0a0a; padding: 28px 20px; border: 1px solid #3a342a; max-width: 550px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 16px; position: relative; opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease, transform 0.5s ease; overflow-y: auto; }
    .otw-modal-overlay.visible .otw-modal-content { opacity: 1; transform: translateY(0); }
    .otw-summary-complete { text-align: center; padding: 24px 0; }
    .otw-summary-complete h2 { margin: 0; color: #7a9a7d; font-size: 16px; font-weight: 700; letter-spacing: 3px; }
    .otw-feel-btn { display: flex; align-items: center; gap: 16px; padding: 16px 20px; background: #0c0c0c; cursor: pointer; margin-bottom: 10px; transition: all 0.2s; }
    .otw-feel-btn:active { background: #101010; }
    .otw-muscle-toggle { padding: 12px 18px; background: #0f0f0f; border: 1px solid #3a342a; color: #9a8c7a; font-size: 13px; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease; }
    .otw-muscle-toggle.active { background: rgba(154,140,122,0.3); border-color: #9a8c7a; }
    .otw-subgroup-container { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease; opacity: 0; padding: 0 12px; }
    .otw-subgroup-container.expanded { max-height: 300px; opacity: 1; padding: 12px; }
    .otw-subgroup-btn { padding: 8px 14px; background: #0f0f0f; border: 1px solid #3a342a; color: #6a5a4a; font-size: 12px; cursor: pointer; transition: all 0.3s ease; }
    .otw-subgroup-btn.active { background: rgba(154,140,122,0.3); border-color: #9a8c7a; color: #9a8c7a; }
  `;
  document.head.appendChild(style);
}

// ── Utility Functions ──

function addCorners(el, color, size = 14) {
  ["TL", "TR", "BL", "BR"].forEach((pos) => {
    const c = document.createElement("div");
    const isTop = pos.includes("T"), isLeft = pos.includes("L");
    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;
    el.appendChild(c);
  });
}

function addFloatingMotes(el, color, count = 3) {
  for (let i = 0; i < count; i++) {
    const mote = document.createElement("div");
    mote.style.cssText = `position:absolute;bottom:10%;left:${10 + Math.random() * 80}%;width:${1 + Math.random() * 2}px;height:${1 + Math.random() * 2}px;background:${color};border-radius:50%;opacity:0;pointer-events:none;animation:otw-float-up ${8 + Math.random() * 6}s ${Math.random() * 10}s ease-out infinite;z-index:1;`;
    el.appendChild(mote);
  }
}

function calculate1RM(weight, reps) {
  if (reps === 0 || weight === 0) return 0;
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}

function getFirstWorkingSetIndex(sets) {
  return sets.findIndex((s) => !s.isWarmup);
}

function updateWarmupWeights(ex, newW) {
  const warmups = ex.sets.filter((s) => s.isWarmup);
  [0.5, 0.7, 0.85].forEach((p, i) => {
    if (warmups[i]) warmups[i].weight = Math.round(newW * p);
  });
}

async function getPersonalStats() {
  const fm = getFileMetadata(STATS_FILE);
  if (!fm) return { weight: 61, height: 175, birthdate: "2005-11-29" };
  return { weight: fm.Weight || 61, height: fm.Height || 175, birthdate: fm.Birthdate || "2005-11-29" };
}

function calculateAge(bd) {
  if (!bd) return 20;
  const b = new Date(bd), t = new Date();
  let a = t.getFullYear() - b.getFullYear();
  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;
  return a;
}

function formatBirthdate(dateStr) {
  if (!dateStr) return "";
  return new Date(dateStr).toISOString().split("T")[0];
}

function parseStandardValue(val) {
  if (typeof val !== "string") val = String(val);
  val = val.trim();
  if (val.includes("<")) {
    const num = parseFloat(val.replace(/[<\s]/g, ""));
    return !isNaN(num) && num > 0 ? num * 0.5 : 0.1;
  }
  const num = parseFloat(val);
  return isNaN(num) ? 0 : num;
}

async function getStrengthStandard(exerciseName) {
  const filePath = EXERCISE_DB_FOLDER + "/" + exerciseName + ".md";
  const fm = getFileMetadata(filePath);
  const isBW = fm?.Type === "Bodyweight";
  const content = await readFile(filePath);
  if (!content) return null;
  const lines = content.split("\n");
  const bwTable = [], ageTable = [];
  let currentTable = null;
  for (const line of lines) {
    if (line.match(/\|\s*BW\s*\|/i)) { currentTable = "bw"; continue; }
    if (line.match(/\|\s*Age\s*\|/i)) { currentTable = "age"; continue; }
    if (line.startsWith("|---") || line.startsWith("| ---")) continue;
    const m = line.match(/\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|\s*([^|]+)\s*\|/);
    if (m) {
      const row = { key: parseStandardValue(m[1]), beginner: parseStandardValue(m[2]), novice: parseStandardValue(m[3]), intermediate: parseStandardValue(m[4]), advanced: parseStandardValue(m[5]), elite: parseStandardValue(m[6]) };
      if (row.key > 0 && (row.beginner > 0 || row.novice > 0 || row.intermediate > 0)) {
        if (currentTable === "bw") bwTable.push(row);
        else if (currentTable === "age") ageTable.push(row);
      }
    }
  }
  return { bwTable, ageTable, isBodyweight: isBW, hasValidData: bwTable.length > 0 || ageTable.length > 0 };
}

function interpolateStandard(table, value) {
  if (!table || table.length === 0) return null;
  const sorted = [...table].sort((a, b) => a.key - b.key);
  let lower = sorted[0], upper = sorted[sorted.length - 1];
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i].key <= value && sorted[i + 1].key >= value) { lower = sorted[i]; upper = sorted[i + 1]; break; }
  }
  if (value <= lower.key) return { ...lower };
  if (value >= upper.key) return { ...upper };
  const ratio = (value - lower.key) / (upper.key - lower.key);
  return { key: value, beginner: lower.beginner + ratio * (upper.beginner - lower.beginner), novice: lower.novice + ratio * (upper.novice - lower.novice), intermediate: lower.intermediate + ratio * (upper.intermediate - lower.intermediate), advanced: lower.advanced + ratio * (upper.advanced - lower.advanced), elite: lower.elite + ratio * (upper.elite - lower.elite) };
}

async function getAveragedStandards(std) {
  const stats = await getPersonalStats();
  const bw = interpolateStandard(std.bwTable, stats.weight);
  const ag = interpolateStandard(std.ageTable, calculateAge(stats.birthdate));
  if (bw && ag) return { beginner: (bw.beginner + ag.beginner) / 2, novice: (bw.novice + ag.novice) / 2, intermediate: (bw.intermediate + ag.intermediate) / 2, advanced: (bw.advanced + ag.advanced) / 2, elite: (bw.elite + ag.elite) / 2 };
  return bw || ag || null;
}

function determineStrengthLevel(cv, std) {
  if (!std || cv < 0) return { level: "Untrained", color: "#6a6a6a", progress: 0, nextTarget: std?.beginner || 1 };
  const { beginner, novice, intermediate, advanced, elite } = std;
  if (cv >= elite) return { level: "Elite", color: "#9a6a7a", progress: 100, nextTarget: null };
  if (cv >= advanced) return { level: "Advanced", color: "#8a7a9a", progress: ((cv - advanced) / (elite - advanced)) * 100, nextTarget: elite };
  if (cv >= intermediate) return { level: "Intermediate", color: "#6a8a9a", progress: ((cv - intermediate) / (advanced - intermediate)) * 100, nextTarget: advanced };
  if (cv >= novice) return { level: "Novice", color: "#7a9a7d", progress: ((cv - novice) / (intermediate - novice)) * 100, nextTarget: intermediate };
  if (cv >= beginner) return { level: "Beginner", color: "#a89860", progress: ((cv - beginner) / (novice - beginner)) * 100, nextTarget: novice };
  return { level: "Untrained", color: "#6a6a6a", progress: beginner > 0 ? Math.max(0, (cv / beginner) * 100) : 0, nextTarget: beginner };
}

async function calculateStrengthLevel(name, w, r, maxR) {
  const std = await getStrengthStandard(name);
  if (!std || !std.hasValidData) return null;
  const avg = await getAveragedStandards(std);
  if (!avg) return null;
  if (std.isBodyweight) {
    const eff = maxR !== null && maxR !== undefined ? Math.max(r, maxR) : r;
    const res = determineStrengthLevel(eff, avg);
    return { ...res, currentValue: eff, isBodyweight: true, unit: "reps", displayLabel: "Max Reps" };
  } else {
    if (w <= 0) return null;
    const est = calculate1RM(w, r);
    const res = determineStrengthLevel(est, avg);
    return { ...res, currentValue: est, isBodyweight: false, unit: "kg", displayLabel: "Est. 1RM" };
  }
}

async function hasStrengthStandard(name) {
  const std = await getStrengthStandard(name);
  return std !== null && std.hasValidData;
}

async function getExercisePR(name) {
  const std = await getStrengthStandard(name);
  const isBW = std?.isBodyweight || false;
  const files = getFilesInFolder(WORKOUT_FOLDER);
  let best = null, bestV = 0;
  for (const f of files) {
    const fm = getFileMetadata(f.path);
    if (fm?.exercises && Array.isArray(fm.exercises) && fm.Workout === true) {
      const ex = fm.exercises.find((e) => e.name === name);
      if (ex?.sets) {
        for (const set of ex.sets) {
          if (!set.isWarmup && set.completed) {
            if (isBW) {
              if (set.reps > bestV) { bestV = set.reps; best = { ...set, date: f.basename, prValue: bestV, isBodyweight: true }; }
            } else if (set.weight > 0) {
              const est = calculate1RM(set.weight, set.reps);
              if (est > bestV) { bestV = est; best = { ...set, date: f.basename, estimated1RM: est, prValue: est, isBodyweight: false }; }
            }
          }
        }
      }
    }
  }
  return best;
}

function getLastWorkoutForMuscleGroup(muscle) {
  const files = getFilesInFolder(WORKOUT_FOLDER).sort((a, b) => b.basename.localeCompare(a.basename));
  for (const f of files) {
    if (f.path === file.path) continue; // Skip the current daily note
    const fm = getFileMetadata(f.path);
    if (fm?.exercises && Array.isArray(fm.exercises)) {
      const relevant = fm.exercises.filter(ex => ex.muscle === muscle || ex.muscleGroup === muscle);
      if (relevant.length > 0) return { date: f.basename.match(/^(\d{4}-\d{2}-\d{2})/)?.[1], exercises: relevant, file: f };
    }
  }
  return null;
}

// ── Save current state to frontmatter ──
async function saveState() {
  await setMultipleData({
    exercises: exercises,
    currentMuscleIndex: currentMuscleIndex,
  });
}

// ── Personal Stats ──
async function updatePersonalStats(weight, height, birthdate) {
  const content = `---\nWeight: ${weight}\nHeight: ${height}\nBirthdate: "${birthdate}"\n---\n\n# Personal Stats\n\nUpdated: ${moment().format("YYYY-MM-DD HH:mm")}\n`;
  const statsFile = app.vault.getAbstractFileByPath(STATS_FILE);
  if (statsFile) { await app.vault.modify(statsFile, content); }
  else {
    const folder = STATS_FILE.substring(0, STATS_FILE.lastIndexOf("/"));
    if (!app.vault.getAbstractFileByPath(folder)) await app.vault.createFolder(folder);
    await app.vault.create(STATS_FILE, content);
  }
}

// ── Modal System ──
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
  modal.className = "otw-modal-overlay";
  activeModal = modal;
  const modalContent = document.createElement("div");
  modalContent.className = "otw-modal-content";
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

// ── Finish Workout ──
async function finishWorkout(type) {
  await setMultipleData({
    Workout: true,
    "Workout-Type": type,
    exercises: exercises,
    currentMuscleIndex: currentMuscleIndex,
  });
  notice("Workout logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");
  render();
}

function openFinishModal() {
  // Build summary data first
  const buildSummary = async () => {
    const summaryData = [];
    for (const ex of exercises) {
      const completed = ex.sets.filter(s => !s.isWarmup && s.completed);
      if (completed.length > 0) {
        const hasStd = await hasStrengthStandard(ex.name);
        const pr = await getExercisePR(ex.name);
        let bestW = 0, bestR = 0, maxR = 0, sessionBest = 0;
        for (const s of completed) {
          if (s.reps > maxR) maxR = s.reps;
          if (s.weight > 0) {
            const est = calculate1RM(s.weight, s.reps);
            if (est > sessionBest) { sessionBest = est; bestW = s.weight; bestR = s.reps; }
          } else if (s.reps > sessionBest) { sessionBest = s.reps; bestR = s.reps; }
        }
        const sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR);
        summaryData.push({ name: ex.name, muscle: ex.muscle, bestW, bestR, maxR, sessionBest, sl, hasStd, pr });
      }
    }
    return summaryData;
  };

  buildSummary().then(summaryData => {
    createModal("Workout Complete", (content) => {
      // Summary
      const summaryDiv = document.createElement("div");
      summaryDiv.className = "otw-summary-complete";
      summaryDiv.innerHTML = "<h2>WORKOUT COMPLETE</h2>";
      content.appendChild(summaryDiv);

      // Exercise summaries
      if (summaryData.length > 0) {
        const sec = document.createElement("div");
        sec.style.cssText = "display:flex;flex-direction:column;gap:12px;";
        content.appendChild(sec);

        const secTitle = document.createElement("div");
        secTitle.textContent = "SESSION SUMMARY";
        secTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;margin-bottom:4px;`;
        sec.appendChild(secTitle);

        for (const ex of summaryData) {
          const card = document.createElement("div");
          card.style.cssText = `padding:14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:6px;`;
          sec.appendChild(card);

          const hdr = document.createElement("div");
          hdr.style.cssText = "display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;";
          card.appendChild(hdr);

          const nm = document.createElement("span");
          nm.textContent = ex.name;
          nm.style.cssText = `color:${THEME.color};font-weight:600;font-size:14px;`;
          hdr.appendChild(nm);

          if (ex.sl) {
            const li = STRENGTH_LEVELS[ex.sl.level];
            const badge = document.createElement("span");
            badge.style.cssText = `display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:${ex.sl.color}20;border:1px solid ${ex.sl.color}50;border-radius:4px;color:${ex.sl.color};font-size:11px;font-weight:700;letter-spacing:1px;`;
            badge.textContent = (li?.icon || "\u25CB") + " " + ex.sl.level.toUpperCase();
            hdr.appendChild(badge);
          }

          const stats = document.createElement("div");
          stats.style.cssText = "display:flex;justify-content:space-between;margin-bottom:8px;font-size:12px;";
          card.appendChild(stats);

          const setI = document.createElement("span");
          setI.textContent = ex.sl?.isBodyweight ? "Best: " + ex.maxR + " reps" : "Best: " + ex.bestW + "kg \u00D7 " + ex.bestR;
          setI.style.cssText = `color:${THEME.colorMuted};`;
          stats.appendChild(setI);

          if (ex.sl) {
            const rmI = document.createElement("span");
            rmI.textContent = ex.sl.displayLabel + ": " + ex.sl.currentValue + ex.sl.unit;
            rmI.style.cssText = `color:${THEME.color};font-weight:600;`;
            stats.appendChild(rmI);
          }

          if (ex.pr) {
            const prC = document.createElement("div");
            prC.style.cssText = "font-size:11px;margin-bottom:8px;padding:6px 8px;background:rgba(168,152,96,0.1);border-radius:4px;";
            const cv = ex.sl?.currentValue || ex.sessionBest;
            if (cv > ex.pr.prValue) {
              prC.style.background = "rgba(122,154,125,0.15)";
              prC.innerHTML = `<span style="color:#7a9a7d;font-weight:700;">\uD83C\uDF89 NEW PR!</span> <span style="color:${THEME.colorMuted};">Previous: ${ex.pr.prValue} \u2192 Now: ${cv}</span>`;
            } else if (cv === ex.pr.prValue) {
              prC.innerHTML = `<span style="color:#a89860;">\uD83C\uDFC6 Matched PR:</span> <span style="color:${THEME.colorMuted};">${ex.pr.prValue}</span>`;
            } else {
              prC.innerHTML = `<span style="color:${THEME.colorMuted};">\uD83C\uDFC6 PR: ${ex.pr.prValue}</span> <span style="color:#6a6a6a;">(today: ${cv})</span>`;
            }
            card.appendChild(prC);
          }

          if (ex.sl && ex.sl.nextTarget) {
            const pb = document.createElement("div");
            pb.className = "otw-strength-bar";
            pb.style.marginTop = "8px";
            card.appendChild(pb);
            const fill = document.createElement("div");
            fill.className = "otw-strength-fill";
            fill.style.cssText = `width:${Math.min(100, ex.sl.progress)}%;background:${ex.sl.color};`;
            pb.appendChild(fill);
            const ti = document.createElement("div");
            ti.style.cssText = `display:flex;justify-content:space-between;font-size:9px;color:${THEME.colorMuted};margin-top:4px;`;
            ti.innerHTML = `<span>Current: ${ex.sl.currentValue}${ex.sl.unit}</span><span>Next: ${Math.round(ex.sl.nextTarget)}${ex.sl.unit}</span>`;
            card.appendChild(ti);
          }
        }
      }

      // Feel buttons
      const feelTitle = document.createElement("h3");
      feelTitle.textContent = "How did it feel?";
      feelTitle.style.cssText = `margin:12px 0;color:${THEME.color};font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;`;
      content.appendChild(feelTitle);

      // Discipline button
      const discBtn = document.createElement("div");
      discBtn.className = "otw-feel-btn";
      discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;
      discBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">&#x1F48E;</span><div style="flex:1;"><div style="color:${THEME.colorDiscipline};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through resistance</div></div><div style="color:#4a4030;font-size:18px;opacity:0.5;">\u2192</div>`;
      discBtn.onclick = async () => { closeModal(); await finishWorkout("discipline"); };
      content.appendChild(discBtn);

      // Flow button
      const flowBtn = document.createElement("div");
      flowBtn.className = "otw-feel-btn";
      flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;
      flowBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">&#x1F30A;</span><div style="flex:1;"><div style="color:${THEME.colorFlow};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Felt natural and effortless</div></div><div style="color:#304050;font-size:18px;opacity:0.5;">\u2192</div>`;
      flowBtn.onclick = async () => { closeModal(); await finishWorkout("flow"); };
      content.appendChild(flowBtn);
    });
  });
}

// ── Personal Stats Modal ──
async function openPersonalStatsModal() {
  const stats = await getPersonalStats();
  createModal("Personal Stats", (content) => {
    const form = document.createElement("div");
    form.style.cssText = "display:flex;flex-direction:column;gap:16px;";
    content.appendChild(form);

    // Birthdate
    const birthRow = document.createElement("div");
    birthRow.style.cssText = `display:flex;flex-direction:column;gap:8px;padding:12px 16px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};`;
    birthRow.innerHTML = `<span style="color:${THEME.colorMuted};font-size:12px;">Birthdate</span>`;
    const birthInputRow = document.createElement("div");
    birthInputRow.style.cssText = "display:flex;align-items:center;gap:12px;";
    const birthInput = document.createElement("input");
    birthInput.type = "date";
    birthInput.value = formatBirthdate(stats.birthdate);
    birthInput.style.cssText = `flex:1;padding:8px;background:#0a0a0a;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:1em;`;
    const ageDisplay = document.createElement("span");
    ageDisplay.textContent = `Age: ${calculateAge(stats.birthdate)}`;
    ageDisplay.style.cssText = `color:${THEME.color};font-size:1.1em;font-weight:600;min-width:80px;`;
    birthInput.onchange = () => { ageDisplay.textContent = `Age: ${calculateAge(birthInput.value)}`; };
    birthInputRow.appendChild(birthInput);
    birthInputRow.appendChild(ageDisplay);
    birthRow.appendChild(birthInputRow);
    form.appendChild(birthRow);

    // Weight
    const weightRow = document.createElement("div");
    weightRow.style.cssText = `display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};`;
    weightRow.innerHTML = `<span style="color:${THEME.colorMuted};">Weight (kg)</span>`;
    const weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.value = stats.weight;
    weightInput.style.cssText = `width:80px;padding:8px;background:#0a0a0a;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:1.1em;text-align:center;`;
    weightRow.appendChild(weightInput);
    form.appendChild(weightRow);

    // Height
    const heightRow = document.createElement("div");
    heightRow.style.cssText = `display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};`;
    heightRow.innerHTML = `<span style="color:${THEME.colorMuted};">Height (cm)</span>`;
    const heightInput = document.createElement("input");
    heightInput.type = "number";
    heightInput.value = stats.height;
    heightInput.style.cssText = `width:80px;padding:8px;background:#0a0a0a;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:1.1em;text-align:center;`;
    heightRow.appendChild(heightInput);
    form.appendChild(heightRow);

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "SAVE STATS";
    saveBtn.className = "otw-btn otw-btn-primary";
    saveBtn.onclick = async () => {
      await updatePersonalStats(parseFloat(weightInput.value) || 61, parseFloat(heightInput.value) || 175, birthInput.value || "2005-11-29");
      notice("Personal stats updated!");
      closeModal();
    };
    form.appendChild(saveBtn);
  });
}

// ── Add Exercise Modal ──
function openAddExerciseModal(muscle) {
  createModal("Add Exercise - " + muscle, (content) => {
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Exercise name...";
    nameInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;`;
    content.appendChild(nameInput);

    const warmupLabel = document.createElement("div");
    warmupLabel.textContent = "Include warmup sets?";
    warmupLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;
    content.appendChild(warmupLabel);

    let incWarmup = true;
    const warmupRow = document.createElement("div");
    warmupRow.style.cssText = "display:flex;gap:8px;margin-top:8px;";
    content.appendChild(warmupRow);

    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Yes (suggested)";
    yesBtn.className = "otw-btn otw-btn-secondary";
    yesBtn.style.cssText += `flex:1;background:rgba(154,140,122,0.2);border-color:${THEME.color};color:${THEME.color};`;
    const noBtn = document.createElement("button");
    noBtn.textContent = "No";
    noBtn.className = "otw-btn otw-btn-secondary";
    noBtn.style.flex = "1";
    yesBtn.onclick = () => { incWarmup = true; yesBtn.style.background = "rgba(154,140,122,0.2)"; yesBtn.style.borderColor = THEME.color; yesBtn.style.color = THEME.color; noBtn.style.background = "#0f0f0f"; noBtn.style.borderColor = THEME.colorBorder; noBtn.style.color = THEME.colorMuted; };
    noBtn.onclick = () => { incWarmup = false; noBtn.style.background = "rgba(154,140,122,0.2)"; noBtn.style.borderColor = THEME.color; noBtn.style.color = THEME.color; yesBtn.style.background = "#0f0f0f"; yesBtn.style.borderColor = THEME.colorBorder; yesBtn.style.color = THEME.colorMuted; };
    warmupRow.appendChild(yesBtn);
    warmupRow.appendChild(noBtn);

    const weightLabel = document.createElement("div");
    weightLabel.textContent = "Working weight (kg) - 0 for bodyweight";
    weightLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;margin-top:12px;`;
    content.appendChild(weightLabel);

    const weightInput = document.createElement("input");
    weightInput.type = "number";
    weightInput.placeholder = "0";
    weightInput.style.cssText = `width:100%;padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:14px;box-sizing:border-box;margin-top:8px;`;
    content.appendChild(weightInput);

    const btnRow = document.createElement("div");
    btnRow.style.cssText = "display:flex;gap:12px;margin-top:16px;";
    content.appendChild(btnRow);

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.className = "otw-btn otw-btn-secondary";
    cancelBtn.style.flex = "1";
    cancelBtn.onclick = () => closeModal();
    btnRow.appendChild(cancelBtn);

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add Exercise";
    addBtn.className = "otw-btn otw-btn-primary";
    addBtn.style.flex = "1";
    addBtn.onclick = async () => {
      const name = nameInput.value.trim();
      if (!name) { notice("Please enter an exercise name"); return; }
      const ww = parseFloat(weightInput.value) || 0;
      const sets = [];
      if (incWarmup && ww > 0) {
        sets.push({ weight: Math.round(ww * 0.5), reps: 10, completed: false, isWarmup: true });
        sets.push({ weight: Math.round(ww * 0.7), reps: 6, completed: false, isWarmup: true });
        sets.push({ weight: Math.round(ww * 0.85), reps: 3, completed: false, isWarmup: true });
      }
      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });
      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });
      sets.push({ weight: ww, reps: 10, completed: false, isWarmup: false });
      exercises.push({ name, muscle, muscleGroup: muscle, sets });
      closeModal();
      await saveState();
      render();
    };
    btnRow.appendChild(addBtn);

    setTimeout(() => nameInput.focus(), 100);
  });
}

// ── Add Strength Standard Modal ──
async function openAddStrengthStandardModal() {
  createModal("Add Strength Standard", (content) => {
    const form = document.createElement("div");
    form.style.cssText = "display:flex;flex-direction:column;gap:16px;";
    content.appendChild(form);

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.placeholder = "Exercise name (e.g., Dumbbell Curl)";
    nameInput.style.cssText = `padding:12px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.color};font-size:1em;`;
    form.appendChild(nameInput);

    let exerciseType = "Weighted";
    const typeContainer = document.createElement("div");
    typeContainer.style.cssText = "display:flex;gap:12px;";
    const weightedBtn = document.createElement("button");
    weightedBtn.textContent = "\uD83C\uDFCB\uFE0F Weighted";
    weightedBtn.style.cssText = `flex:1;padding:14px;background:rgba(154,140,122,0.2);border:1px solid ${THEME.color};color:${THEME.color};cursor:pointer;`;
    const bodyweightBtn = document.createElement("button");
    bodyweightBtn.textContent = "\uD83E\uDD38 Bodyweight";
    bodyweightBtn.style.cssText = `flex:1;padding:14px;background:#0f0f0f;border:1px solid ${THEME.colorBorder};color:${THEME.colorMuted};cursor:pointer;`;
    weightedBtn.onclick = () => { exerciseType = "Weighted"; weightedBtn.style.background = "rgba(154,140,122,0.2)"; weightedBtn.style.borderColor = THEME.color; weightedBtn.style.color = THEME.color; bodyweightBtn.style.background = "#0f0f0f"; bodyweightBtn.style.borderColor = THEME.colorBorder; bodyweightBtn.style.color = THEME.colorMuted; };
    bodyweightBtn.onclick = () => { exerciseType = "Bodyweight"; bodyweightBtn.style.background = "rgba(154,140,122,0.2)"; bodyweightBtn.style.borderColor = THEME.color; bodyweightBtn.style.color = THEME.color; weightedBtn.style.background = "#0f0f0f"; weightedBtn.style.borderColor = THEME.colorBorder; weightedBtn.style.color = THEME.colorMuted; };
    typeContainer.appendChild(weightedBtn);
    typeContainer.appendChild(bodyweightBtn);
    form.appendChild(typeContainer);

    const infoText = document.createElement("p");
    infoText.innerHTML = `<strong>Weighted:</strong> Standards in kg (1RM)<br><strong>Bodyweight:</strong> Standards in reps`;
    infoText.style.cssText = `color:${THEME.colorMuted};font-size:12px;line-height:1.6;`;
    form.appendChild(infoText);

    const createBtn = document.createElement("button");
    createBtn.textContent = "CREATE";
    createBtn.className = "otw-btn otw-btn-primary";
    createBtn.onclick = async () => {
      const exerciseName = nameInput.value.trim();
      if (!exerciseName) { notice("Please enter an exercise name"); return; }
      const filePath = `${EXERCISE_DB_FOLDER}/${exerciseName}.md`;
      const unitLabel = exerciseType === "Bodyweight" ? "reps" : "kg (1RM)";
      const fileContent = `---\nData: Strength Standard\nExercise: "${exerciseName}"\nType: ${exerciseType}\ncssclasses:\n  - hide-properties\n---\n\n# ${exerciseName} Strength Standards\n\n> Standards are in **${unitLabel}**\n\n## Bodyweight Table\n| BW  | Beg. | Nov. | Int. | Adv. | Elite |\n| --- | ---- | ---- | ---- | ---- | ----- |\n| 50  | 0    | 0    | 0    | 0    | 0     |\n| 60  | 0    | 0    | 0    | 0    | 0     |\n| 70  | 0    | 0    | 0    | 0    | 0     |\n| 80  | 0    | 0    | 0    | 0    | 0     |\n| 90  | 0    | 0    | 0    | 0    | 0     |\n\n## Age Table\n| Age | Beg. | Nov. | Int. | Adv. | Elite |\n| --- | ---- | ---- | ---- | ---- | ----- |\n| 15  | 0    | 0    | 0    | 0    | 0     |\n| 20  | 0    | 0    | 0    | 0    | 0     |\n| 30  | 0    | 0    | 0    | 0    | 0     |\n| 40  | 0    | 0    | 0    | 0    | 0     |\n| 50  | 0    | 0    | 0    | 0    | 0     |\n`;
      try {
        if (!app.vault.getAbstractFileByPath(EXERCISE_DB_FOLDER)) await app.vault.createFolder(EXERCISE_DB_FOLDER);
        if (!app.vault.getAbstractFileByPath(filePath)) await app.vault.create(filePath, fileContent);
        closeModal();
        notice(`Strength standard created for ${exerciseName}. Open the file to fill in the values.`);
      } catch (error) { notice(`Error: ${error.message}`); }
    };
    form.appendChild(createBtn);
  });
}

// ── Render a single set row ──
function renderSet(setsContainer, set, setIdx, ex, warmupRefs) {
  const row = document.createElement("div");
  row.className = "otw-set-row" + (set.completed ? " completed" : "");
  setsContainer.appendChild(row);
  const refs = { weightInput: null };

  // Checkbox
  const cb = document.createElement("div");
  cb.className = "otw-checkbox" + (set.completed ? " checked" : "");
  cb.textContent = set.completed ? "\u2713" : "";
  cb.onclick = async () => {
    set.completed = !set.completed;
    cb.className = "otw-checkbox" + (set.completed ? " checked" : "");
    cb.textContent = set.completed ? "\u2713" : "";
    row.className = "otw-set-row" + (set.completed ? " completed" : "");
    await saveState();
  };
  row.appendChild(cb);

  // Middle: weight + reps
  const mid = document.createElement("div");
  mid.style.cssText = "display:flex;align-items:center;gap:12px;flex-wrap:wrap;";
  row.appendChild(mid);

  // Weight input
  const wWrap = document.createElement("div");
  wWrap.style.cssText = "display:flex;align-items:center;gap:4px;";
  mid.appendChild(wWrap);
  const wInput = document.createElement("input");
  wInput.type = "number";
  wInput.value = set.weight;
  wInput.className = "otw-input";
  const firstW = getFirstWorkingSetIndex(ex.sets);
  const isFirst = !set.isWarmup && setIdx === firstW;
  wInput.onchange = async (e) => {
    const nw = parseFloat(e.target.value) || 0;
    set.weight = nw;
    if (isFirst) {
      updateWarmupWeights(ex, nw);
      const ws = ex.sets.filter((s) => s.isWarmup);
      warmupRefs.forEach((inp, i) => { if (ws[i]) inp.value = ws[i].weight; });
    }
    await saveState();
  };
  wWrap.appendChild(wInput);
  refs.weightInput = wInput;
  const kgLabel = document.createElement("span");
  kgLabel.textContent = "kg";
  kgLabel.style.cssText = `color:${THEME.colorMuted};font-size:12px;`;
  wWrap.appendChild(kgLabel);

  // Reps controls
  const rWrap = document.createElement("div");
  rWrap.style.cssText = "display:flex;align-items:center;gap:4px;";
  mid.appendChild(rWrap);
  const minusBtn = document.createElement("button");
  minusBtn.className = "otw-ctrl-btn";
  minusBtn.textContent = "\u2212";
  minusBtn.onclick = async () => { if (set.reps > 1) { set.reps--; rDisp.textContent = set.reps + "\u00D7"; await saveState(); } };
  rWrap.appendChild(minusBtn);
  const rDisp = document.createElement("span");
  rDisp.textContent = set.reps + "\u00D7";
  rDisp.style.cssText = `color:${THEME.color};font-size:14px;font-weight:600;min-width:30px;text-align:center;`;
  rWrap.appendChild(rDisp);
  const plusBtn = document.createElement("button");
  plusBtn.className = "otw-ctrl-btn";
  plusBtn.textContent = "+";
  plusBtn.onclick = async () => { set.reps++; rDisp.textContent = set.reps + "\u00D7"; await saveState(); };
  rWrap.appendChild(plusBtn);

  if (set.isWarmup) {
    const badge = document.createElement("span");
    badge.className = "otw-warmup-badge";
    badge.textContent = "\u26A1 Warmup";
    mid.appendChild(badge);
  }

  // Delete set button
  if (ex.sets.length > 1) {
    const delBtn = document.createElement("button");
    delBtn.textContent = "\u00D7";
    delBtn.style.cssText = `width:28px;height:28px;background:transparent;border:1px solid #3a2828;color:#6a4a4a;cursor:pointer;font-size:16px;`;
    delBtn.onclick = async () => { ex.sets.splice(setIdx, 1); await saveState(); render(); };
    row.appendChild(delBtn);
  } else {
    const ph = document.createElement("div");
    ph.style.width = "28px";
    row.appendChild(ph);
  }

  return refs;
}

// ── Render Exercise Card ──
async function renderExercise(exContainer, ex) {
  const card = document.createElement("div");
  card.className = "otw-card";
  exContainer.appendChild(card);
  addCorners(card, THEME.color, 12);

  const exHeader = document.createElement("div");
  exHeader.style.cssText = `display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;padding-bottom:12px;border-bottom:1px solid ${THEME.colorBorder};`;
  card.appendChild(exHeader);

  const leftCol = document.createElement("div");
  leftCol.style.flex = "1";
  exHeader.appendChild(leftCol);

  const exTitle = document.createElement("h3");
  exTitle.textContent = ex.name;
  exTitle.style.cssText = `margin:0 0 8px 0;color:${THEME.color};font-size:16px;letter-spacing:1px;`;
  leftCol.appendChild(exTitle);

  // Strength level + PR info
  const hasStd = await hasStrengthStandard(ex.name);
  const pr = await getExercisePR(ex.name);
  const workingSets = ex.sets.filter((s) => !s.isWarmup);
  let bestW = 0, bestR = 0, maxR = 0;
  workingSets.forEach((s) => { if (s.reps > maxR) maxR = s.reps; if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; } });

  if (hasStd) {
    let sl;
    if (pr) { sl = pr.isBodyweight ? await calculateStrengthLevel(ex.name, 0, pr.prValue, pr.prValue) : await calculateStrengthLevel(ex.name, pr.weight, pr.reps, null); }
    else if (bestW > 0 || maxR > 0) { sl = await calculateStrengthLevel(ex.name, bestW, bestR, maxR); }
    if (sl) {
      const li = STRENGTH_LEVELS[sl.level];
      const badge = document.createElement("div");
      badge.className = "otw-strength-badge";
      badge.style.cssText += `background:${sl.color}25;border:1px solid ${sl.color}60;color:${sl.color};`;
      badge.textContent = (li?.icon || "\u25CB") + " " + sl.level.toUpperCase();
      leftCol.appendChild(badge);

      const rmInfo = document.createElement("div");
      rmInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-top:6px;`;
      rmInfo.innerHTML = `<strong style="color:${THEME.color}">${sl.displayLabel}: ${sl.currentValue}${sl.unit}</strong>`;
      if (sl.nextTarget) rmInfo.innerHTML += ` \u2192 Next: ${Math.round(sl.nextTarget)}${sl.unit}`;
      leftCol.appendChild(rmInfo);

      const pb = document.createElement("div");
      pb.className = "otw-strength-bar";
      leftCol.appendChild(pb);
      const fill = document.createElement("div");
      fill.className = "otw-strength-fill";
      fill.style.cssText = `width:${Math.min(100, sl.progress)}%;background:${sl.color};`;
      pb.appendChild(fill);
    }
  }

  if (pr) {
    const prBox = document.createElement("div");
    prBox.className = "otw-pr-box";
    const prTitle = document.createElement("div");
    prTitle.style.cssText = "font-size:11px;color:#a89860;font-weight:700;letter-spacing:1px;";
    prTitle.textContent = pr.isBodyweight ? "\uD83C\uDFC6 ALL-TIME PR: " + pr.prValue + " reps" : "\uD83C\uDFC6 ALL-TIME PR: " + pr.estimated1RM + "kg (1RM)";
    prBox.appendChild(prTitle);
    const prDetail = document.createElement("div");
    prDetail.style.cssText = `font-size:10px;color:${THEME.colorMuted};`;
    prDetail.textContent = pr.isBodyweight ? "Best: " + pr.reps + " reps" : "Set: " + pr.weight + "kg \u00D7 " + pr.reps + " reps";
    prBox.appendChild(prDetail);
    leftCol.appendChild(prBox);
  }

  // Delete exercise button
  const delExBtn = document.createElement("button");
  delExBtn.textContent = "\uD83D\uDDD1\uFE0F";
  delExBtn.style.cssText = "background:transparent;border:none;cursor:pointer;font-size:14px;opacity:0.5;";
  delExBtn.onclick = async () => { const idx = exercises.indexOf(ex); if (idx > -1) { exercises.splice(idx, 1); await saveState(); render(); } };
  exHeader.appendChild(delExBtn);

  // Sets
  const setsContainer = document.createElement("div");
  setsContainer.style.cssText = "display:flex;flex-direction:column;gap:6px;";
  card.appendChild(setsContainer);
  const warmupRefs = [];
  ex.sets.forEach((set, setIdx) => {
    const refs = renderSet(setsContainer, set, setIdx, ex, warmupRefs);
    if (set.isWarmup && refs.weightInput) warmupRefs.push(refs.weightInput);
  });

  // Add set button
  const addSetBtn = document.createElement("button");
  addSetBtn.textContent = "+ Add Set";
  addSetBtn.className = "otw-btn otw-btn-dashed";
  addSetBtn.style.cssText += "margin-top:8px;padding:8px 12px;font-size:12px;";
  addSetBtn.onclick = async () => {
    const last = ex.sets[ex.sets.length - 1] || { weight: 0, reps: 10 };
    ex.sets.push({ weight: last.weight, reps: last.reps, completed: false, isWarmup: false });
    await saveState();
    render();
  };
  card.appendChild(addSetBtn);
}

// ════════════════════════════════════════
// MUSCLE GROUP SELECTION SCREEN
// Shows when no muscleGroups in frontmatter
// ════════════════════════════════════════
async function renderMuscleSelection(root) {
  const selectedMuscles = new Set();
  const selectedSubgroups = new Map();

  // Header
  const header = document.createElement("div");
  header.className = "otw-card otw-card-breathe otw-header";
  addCorners(header, THEME.color);
  addFloatingMotes(header, THEME.color, 3);
  const title = document.createElement("h2");
  title.className = "otw-title";
  title.textContent = "NEW WORKOUT";
  header.appendChild(title);
  const subtitle = document.createElement("div");
  subtitle.className = "otw-progress-label";
  subtitle.textContent = "Select muscle groups to train";
  header.appendChild(subtitle);
  root.appendChild(header);

  // Personal stats bar
  const stats = await getPersonalStats();
  const statsBar = document.createElement("div");
  statsBar.className = "otw-card";
  statsBar.style.cssText += "display:flex;justify-content:space-between;align-items:center;padding:12px 16px;";
  const age = calculateAge(stats.birthdate);
  statsBar.innerHTML = `<div><span style="color:${THEME.colorMuted};font-size:12px;">Age: <strong style="color:${THEME.color}">${age}</strong></span><span style="margin:0 12px;color:${THEME.colorBorder};">|</span><span style="color:${THEME.colorMuted};font-size:12px;">Weight: <strong style="color:${THEME.color}">${stats.weight}kg</strong></span><span style="margin:0 12px;color:${THEME.colorBorder};">|</span><span style="color:${THEME.colorMuted};font-size:12px;">Height: <strong style="color:${THEME.color}">${stats.height}cm</strong></span></div>`;
  const editStatsBtn = document.createElement("button");
  editStatsBtn.textContent = "\u270F\uFE0F";
  editStatsBtn.style.cssText = `padding:6px 10px;background:transparent;border:1px solid ${THEME.colorBorder};color:${THEME.colorMuted};cursor:pointer;font-size:12px;`;
  editStatsBtn.onclick = () => openPersonalStatsModal();
  statsBar.appendChild(editStatsBtn);
  root.appendChild(statsBar);

  // Muscle group selection grid
  const muscleGrid = document.createElement("div");
  muscleGrid.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:16px 0 8px;";
  root.appendChild(muscleGrid);

  const subgroupArea = document.createElement("div");
  subgroupArea.style.cssText = "display:flex;flex-direction:column;gap:8px;width:100%;";
  root.appendChild(subgroupArea);

  Object.entries(MUSCLE_GROUPS).forEach(([name, config]) => {
    const btn = document.createElement("button");
    btn.className = "otw-muscle-toggle";
    btn.textContent = `${config.icon} ${name}`;
    muscleGrid.appendChild(btn);

    let subgroupContainer = null;
    if (config.subgroups) {
      subgroupContainer = document.createElement("div");
      subgroupContainer.className = "otw-subgroup-container";
      subgroupContainer.style.cssText += `display:flex;flex-wrap:wrap;gap:8px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:4px;`;
      subgroupContainer.innerHTML = `<div style="width:100%;color:${THEME.colorMuted};font-size:11px;margin-bottom:4px;">${name} subgroups:</div>`;
      selectedSubgroups.set(name, new Set());
      config.subgroups.forEach(sub => {
        const subBtn = document.createElement("button");
        subBtn.className = "otw-subgroup-btn";
        subBtn.textContent = sub;
        subBtn.onclick = (e) => {
          e.stopPropagation();
          const subs = selectedSubgroups.get(name);
          if (subs.has(sub)) { subs.delete(sub); subBtn.classList.remove("active"); }
          else { subs.add(sub); subBtn.classList.add("active"); }
        };
        subgroupContainer.appendChild(subBtn);
      });
      subgroupArea.appendChild(subgroupContainer);
    }

    btn.onclick = () => {
      if (selectedMuscles.has(name)) {
        selectedMuscles.delete(name); btn.classList.remove("active");
        if (subgroupContainer) subgroupContainer.classList.remove("expanded");
      } else {
        selectedMuscles.add(name); btn.classList.add("active");
        if (subgroupContainer) subgroupContainer.classList.add("expanded");
      }
    };
  });

  // Quote
  const quote = document.createElement("div");
  quote.style.cssText = `padding:16px;background:#0c0c0c;border-left:2px solid ${THEME.color};margin:16px 0;`;
  quote.innerHTML = `<p style="color:${THEME.colorMuted};font-style:italic;font-size:12px;margin:0;">"There is a general principle here: <strong style="color:${THEME.color};">perform any amount of warming-up that you believe to be minimally required.</strong>"</p><p style="color:${THEME.colorMuted};font-size:11px;margin:8px 0 0 0;text-align:right;">\u2014 Mike Mentzer</p>`;
  root.appendChild(quote);

  // Secondary actions
  const secondaryRow = document.createElement("div");
  secondaryRow.style.cssText = "display:flex;gap:12px;margin-bottom:12px;";
  root.appendChild(secondaryRow);

  const addStandardBtn = document.createElement("button");
  addStandardBtn.textContent = "\uD83D\uDCCA Add Strength Standard";
  addStandardBtn.className = "otw-btn otw-btn-secondary";
  addStandardBtn.style.flex = "1";
  addStandardBtn.onclick = () => openAddStrengthStandardModal();
  secondaryRow.appendChild(addStandardBtn);

  // Start workout button
  const startBtn = document.createElement("button");
  startBtn.innerHTML = `<span style="font-size:20px;">\uD83C\uDFCB\uFE0F</span> START WORKOUT`;
  startBtn.className = "otw-btn otw-btn-primary";
  startBtn.style.cssText += "display:flex;align-items:center;justify-content:center;gap:12px;padding:20px 24px;font-size:15px;font-weight:700;";
  startBtn.onclick = async () => {
    if (selectedMuscles.size === 0) { notice("Please select at least one muscle group"); return; }

    // Build muscle groups array (with subgroups resolved)
    const muscleGroupsArray = [];
    selectedMuscles.forEach(muscle => {
      const subs = selectedSubgroups.get(muscle);
      if (subs && subs.size > 0) subs.forEach(sub => muscleGroupsArray.push(sub));
      else muscleGroupsArray.push(muscle);
    });

    // Load previous exercises for each muscle group
    const exercisesArray = [];
    muscleGroupsArray.forEach(muscle => {
      const lastWorkout = getLastWorkoutForMuscleGroup(muscle);
      if (lastWorkout) {
        lastWorkout.exercises.forEach(ex => {
          exercisesArray.push({
            name: ex.name, muscle, muscleGroup: muscle,
            sets: ex.sets ? ex.sets.map(s => ({
              weight: s.weight || 0, reps: s.reps || 10,
              completed: false, isWarmup: s.isWarmup || false
            })) : [{ weight: 0, reps: 10, completed: false, isWarmup: false }]
          });
        });
      }
    });

    // Save to frontmatter and update local state
    muscleGroups = muscleGroupsArray;
    exercises = exercisesArray;
    currentMuscleIndex = 0;

    await setMultipleData({
      muscleGroups: muscleGroups,
      exercises: exercises,
      currentMuscleIndex: 0,
      Workout: false,
      "Workout-Type": "",
      Timestamp: moment().format(),
    });

    // Re-render to show exercise tracking UI
    render();
  };
  root.appendChild(startBtn);
}

// ════════════════════════════════════════
// MAIN RENDER
// ════════════════════════════════════════
async function render() {
  container.innerHTML = "";
  const root = document.createElement("div");
  root.className = "otw-container";
  container.appendChild(root);

  // If workout is already completed, show summary
  if (isCompleted && getData("Workout-Type")) {
    const wType = getData("Workout-Type");
    const summaryCard = document.createElement("div");
    summaryCard.className = "otw-card otw-card-breathe";
    summaryCard.style.textAlign = "center";
    summaryCard.style.padding = "32px";
    addCorners(summaryCard, THEME.systemGreen);
    summaryCard.innerHTML = `
      <div style="font-size:32px;margin-bottom:12px;">${wType === "discipline" ? "\uD83D\uDC8E" : "\uD83C\uDF0A"}</div>
      <h2 style="margin:0;color:${THEME.systemGreen};font-size:16px;letter-spacing:3px;text-transform:uppercase;">WORKOUT COMPLETE</h2>
      <div style="color:${THEME.colorMuted};font-size:13px;margin-top:8px;font-style:italic;">${wType === "discipline" ? "Discipline Win" : "Flow State"}</div>
      <div style="color:${THEME.colorMuted};font-size:11px;margin-top:16px;">${moment(getData("Timestamp")).format("MMM D, YYYY \u2014 h:mm A")}</div>
    `;
    root.appendChild(summaryCard);

    // Show exercises summary
    if (exercises.length > 0) {
      const exSummary = document.createElement("div");
      exSummary.className = "otw-card";
      addCorners(exSummary, THEME.color);
      const exTitle = document.createElement("div");
      exTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:12px;`;
      exTitle.textContent = "SESSION SUMMARY";
      exSummary.appendChild(exTitle);
      for (const ex of exercises) {
        const completedSets = ex.sets.filter((s) => !s.isWarmup && s.completed).length;
        const totalSets = ex.sets.filter((s) => !s.isWarmup).length;
        const row = document.createElement("div");
        row.style.cssText = `display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid ${THEME.colorBorder};`;
        row.innerHTML = `<span style="color:${THEME.color};font-weight:600;">${ex.name}</span><span style="color:${THEME.colorMuted};font-size:12px;">${completedSets}/${totalSets} sets</span>`;
        exSummary.appendChild(row);
      }
      root.appendChild(exSummary);
    }
    return;
  }

  // ── No muscle groups yet → Show muscle selection screen ──
  if (muscleGroups.length === 0) {
    await renderMuscleSelection(root);
    return;
  }

  // ── Active Workout UI ──
  const currentMuscle = muscleGroups[currentMuscleIndex] || muscleGroups[0];
  const muscleExercises = exercises.filter((e) => e.muscle === currentMuscle || e.muscleGroup === currentMuscle);

  // Header
  const header = document.createElement("div");
  header.className = "otw-card otw-card-breathe otw-header";
  addCorners(header, THEME.color);
  const titleEl = document.createElement("h2");
  titleEl.className = "otw-title";
  titleEl.textContent = currentMuscle.toUpperCase();
  header.appendChild(titleEl);
  const progressLabel = document.createElement("div");
  progressLabel.className = "otw-progress-label";
  progressLabel.textContent = (currentMuscleIndex + 1) + " / " + muscleGroups.length;
  header.appendChild(progressLabel);
  root.appendChild(header);

  // Exercises
  const exContainer = document.createElement("div");
  exContainer.style.cssText = "display:flex;flex-direction:column;gap:16px;";
  root.appendChild(exContainer);

  if (muscleExercises.length === 0) {
    const empty = document.createElement("div");
    empty.style.cssText = `text-align:center;padding:40px 20px;background:#0f0f0f;border:1px dashed ${THEME.colorBorder};`;
    empty.innerHTML = `<p style="color:${THEME.colorMuted};margin:0;">No exercises for ${currentMuscle} yet.</p>`;
    exContainer.appendChild(empty);
  } else {
    for (const ex of muscleExercises) {
      await renderExercise(exContainer, ex);
    }
  }

  // Add exercise button
  const addExBtn = document.createElement("button");
  addExBtn.textContent = "+ ADD EXERCISE";
  addExBtn.className = "otw-btn otw-btn-dashed";
  addExBtn.style.marginTop = "16px";
  addExBtn.onclick = () => openAddExerciseModal(currentMuscle);
  root.appendChild(addExBtn);

  // Navigation
  const nav = document.createElement("div");
  nav.className = "otw-nav-row";
  root.appendChild(nav);

  if (currentMuscleIndex > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "\u2190 PREVIOUS";
    prevBtn.className = "otw-btn otw-btn-secondary";
    prevBtn.onclick = async () => { currentMuscleIndex--; await saveState(); render(); };
    nav.appendChild(prevBtn);
  }

  if (currentMuscleIndex < muscleGroups.length - 1) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "NEXT MUSCLE \u2192";
    nextBtn.className = "otw-btn otw-btn-primary";
    nextBtn.onclick = async () => { currentMuscleIndex++; await saveState(); render(); };
    nav.appendChild(nextBtn);
  } else {
    const finishBtn = document.createElement("button");
    finishBtn.textContent = "\u2713 FINISH WORKOUT";
    finishBtn.className = "otw-btn otw-btn-finish";
    finishBtn.onclick = () => openFinishModal();
    nav.appendChild(finishBtn);
  }
}

// ── Boot ──
return render();
