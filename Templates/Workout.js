// ============================================================
// Olen Template — Workout Tracker v6.0
// Renders inside the Olen workspace for the "workout" activity.
// All UI lives here — daily notes only store YAML frontmatter.
// Data is read/written via ctx.getData / ctx.setData.
// Personal stats now read from plugin settings (personalStats).
// ============================================================

const { container, getData, setData, setMultipleData, app, moment, notice,
        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;

// ============================================================
// SETTINGS — Edit these to match your vault structure
// ============================================================
const SETTINGS = {
  // Where daily workout notes are stored
  workoutFolder: "Personal Life/01 Workout",
  // Folder containing exercise standard .md files (e.g. "Bench Press.md")
  exerciseDbFolder: "Home/Activities/Exercises database",
};

// Read personal stats from plugin settings (set in Olen Settings > Personal Stats)
const _pluginStats = ctx.plugin?.settings?.personalStats || {};
const PERSONAL = {
  weight: _pluginStats.currentWeight || 61,
  height: _pluginStats.height || 175,
  birthdate: _pluginStats.birthdate || "2005-11-29",
  gender: _pluginStats.gender || "male",
};

// Muscle groups available for selection, with optional subgroups
const MUSCLE_GROUPS = {
  "Neck":      { subgroups: null, icon: "\uD83E\uDDB4" },
  "Back":      { subgroups: ["Lats", "Traps", "Rhomboids", "Lower Back", "Rear Delts"], icon: "\uD83D\uDD19" },
  "Chest":     { subgroups: null, icon: "\uD83D\uDCAA" },
  "Shoulders": { subgroups: ["Front Delts", "Side Delts", "Rear Delts"], icon: "\uD83C\uDFAF" },
  "Core":      { subgroups: null, icon: "\uD83C\uDFAF" },
  "Legs":      { subgroups: ["Quads", "Hamstrings", "Glutes", "Calves", "Adductors"], icon: "\uD83E\uDDB5" },
  "Arms":      { subgroups: ["Biceps", "Triceps", "Forearms"], icon: "\uD83D\uDCAA" },
};

// ============================================================
// THEME & CONSTANTS
// ============================================================
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

// ============================================================
// STATE (from frontmatter)
// ============================================================
let exercises = getData("exercises") || [];
let muscleGroups = getData("muscleGroups") || [];
let currentMuscleIndex = getData("currentMuscleIndex") || 0;
const isCompleted = getData("Workout") === true;

// ============================================================
// STYLES
// ============================================================
if (!document.getElementById("olen-tpl-workout-v6")) {
  const style = document.createElement("style");
  style.id = "olen-tpl-workout-v6";
  style.textContent = `
    .otw-container * { box-sizing: border-box; }
    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0 120px 0; font-family: Georgia, serif; color: #c8c0b2; }
    .otw-container button, .otw-container input, .otw-modal-overlay button, .otw-modal-overlay input { border-radius: 10px !important; -webkit-appearance: none; appearance: none; }
    .otw-container input[type="number"] { -moz-appearance: textfield; }
    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 16px rgba(154,140,122,0.02); } 50% { box-shadow: inset 0 0 24px rgba(154,140,122,0.04); } }
    @keyframes otw-pulse-glow { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }
    .otw-card { background: rgba(12,10,16,0.6); backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%); border: 1px solid rgba(154,140,122,0.08); padding: 16px; position: relative; margin-bottom: 12px; border-radius: 16px; }
    .otw-card-breathe { animation: otw-breathe 6s ease-in-out infinite; }
    .otw-header { text-align: center; padding: 16px; }
    .otw-title { margin: 0; color: #9a8c7a; font-size: 18px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase; }
    .otw-progress-label { color: #4d473e; font-size: 11px; margin-top: 6px; }
    .otw-section-label { color: #4d473e; font-size: 9px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; text-align: center; margin: 16px 0 8px; }
    .otw-week-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
    .otw-week-day { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 6px 3px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.06); border-radius: 8px; }
    .otw-week-day.today { border-color: rgba(154,140,122,0.2); }
    .otw-week-day .otw-day-label { font-size: 8px; color: #4d473e; letter-spacing: 1px; text-transform: uppercase; }
    .otw-week-day .otw-day-num { font-size: 12px; font-weight: 600; color: #4d473e; }
    .otw-week-day .otw-day-icon { font-size: 13px; min-height: 16px; }
    .otw-week-day.done .otw-day-num { color: #9a8c7a; }
    .otw-heatmap-wrap { display: flex; justify-content: center; gap: 16px; padding: 8px 0; }
    .otw-heatmap-svg { width: 130px; height: auto; }
    .otw-heatmap-legend { display: flex; flex-wrap: wrap; justify-content: center; gap: 6px 12px; margin-top: 6px; padding: 0 8px; }
    .otw-heatmap-legend-item { display: flex; align-items: center; gap: 4px; font-size: 7px; color: #4d473e; letter-spacing: 1px; text-transform: uppercase; }
    .otw-heatmap-legend-dot { width: 6px; height: 6px; border-radius: 2px; }
    .otw-btn { padding: 12px 20px; border: none; border-radius: 10px !important; font-size: 12px; font-weight: 600; letter-spacing: 2px; cursor: pointer; transition: all 0.3s ease; text-transform: uppercase; -webkit-appearance: none; appearance: none; }
    .otw-btn-primary { background: linear-gradient(180deg, #9a8c7a, #7a6c5a); color: #0a0a0a; width: 100%; box-shadow: 0 2px 12px rgba(154,140,122,0.15); }
    .otw-btn-primary:active { transform: scale(0.98); box-shadow: 0 0 20px rgba(154,140,122,0.2); }
    .otw-btn-secondary { background: rgba(255,255,255,0.03); border: 1px solid rgba(154,140,122,0.1); color: #6a5a4a; }
    .otw-btn-secondary:active { border-color: rgba(154,140,122,0.3); color: #9a8c7a; }
    .otw-btn-finish { background: linear-gradient(180deg, #7a9a7d, #5a7a5d); color: #0a0a0a; box-shadow: 0 2px 12px rgba(122,154,125,0.15); }
    .otw-btn-dashed { width: 100%; background: transparent; border: 1px dashed rgba(154,140,122,0.1); color: #4d473e; border-radius: 10px !important; }
    .otw-btn-dashed:active { border-color: rgba(154,140,122,0.3); color: #9a8c7a; }
    .otw-nav-row { display: flex; gap: 10px; margin-top: 20px; }
    .otw-nav-row .otw-btn { flex: 1; text-align: center; }
    .otw-set-row { display: grid; grid-template-columns: auto 1fr auto auto; align-items: center; gap: 10px; padding: 10px 12px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.06); margin-bottom: 4px; border-radius: 10px; }
    .otw-set-row.completed { opacity: 0.5; }
    .otw-checkbox { width: 24px; height: 24px; border: 1px solid rgba(154,140,122,0.15); border-radius: 8px !important; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0a0a0a; font-weight: bold; transition: all 0.2s; flex-shrink: 0; }
    .otw-checkbox.checked { background: #7a9a7d; border-color: #7a9a7d; }
    .otw-input { padding: 6px; background: rgba(0,0,0,0.3); border: 1px solid rgba(154,140,122,0.1); border-radius: 8px !important; color: #9a8c7a; text-align: center; font-size: 14px; font-weight: 600; width: 50px; -webkit-appearance: none; appearance: none; }
    .otw-ctrl-btn { width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 8px !important; color: #9a8c7a; cursor: pointer; font-size: 15px; flex-shrink: 0; -webkit-appearance: none; appearance: none; }
    .otw-ctrl-btn:active { background: rgba(154,140,122,0.2); }
    .otw-warmup-badge { font-size: 9px; color: #6a8a9a; padding: 2px 6px; background: rgba(106,138,154,0.1); border-radius: 6px; }
    .otw-strength-bar { height: 4px; background: rgba(255,255,255,0.04); border-radius: 2px; overflow: hidden; margin-top: 6px; }
    .otw-strength-fill { height: 100%; border-radius: 2px; transition: width 0.6s cubic-bezier(0.4,0,0.2,1); }
    .otw-strength-badge { display: inline-flex; align-items: center; gap: 6px; padding: 5px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }
    .otw-pr-box { display: flex; flex-direction: column; gap: 4px; padding: 8px 10px; background: rgba(168,152,96,0.06); border: 1px solid rgba(168,152,96,0.15); border-radius: 8px; margin-top: 8px; }
    .otw-modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0); display: flex; align-items: center; justify-content: center; z-index: 9999; backdrop-filter: blur(0px); transition: background 0.4s ease, backdrop-filter 0.4s ease; }
    .otw-modal-overlay.visible { background: rgba(0,0,0,0.85); backdrop-filter: blur(12px); }
    .otw-modal-content { background: rgba(12,10,16,0.95); backdrop-filter: blur(40px) saturate(150%); -webkit-backdrop-filter: blur(40px) saturate(150%); padding: 24px 18px; border: 1px solid rgba(154,140,122,0.1); border-radius: 18px; max-width: 500px; width: 90%; max-height: 85vh; display: flex; flex-direction: column; gap: 14px; position: relative; opacity: 0; transform: translateY(20px); transition: opacity 0.4s ease, transform 0.4s ease; overflow-y: auto; }
    .otw-modal-overlay.visible .otw-modal-content { opacity: 1; transform: translateY(0); }
    .otw-feel-btn { display: flex; align-items: center; gap: 16px; padding: 14px 18px; background: rgba(12,10,16,0.4); border-radius: 12px; cursor: pointer; margin-bottom: 8px; transition: all 0.2s; border: 1px solid rgba(154,140,122,0.06); }
    .otw-feel-btn:active { background: rgba(154,140,122,0.08); }
    .otw-muscle-toggle { padding: 10px 16px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 10px !important; color: #9a8c7a; font-size: 12px; letter-spacing: 1px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }
    .otw-muscle-toggle.active { background: rgba(154,140,122,0.2) !important; border-color: rgba(154,140,122,0.3) !important; }
    .otw-muscle-toggle:active { transform: translateY(-1px); }
    .otw-subgroup-container { max-height: 0; overflow: hidden; transition: max-height 0.4s ease, opacity 0.3s ease, padding 0.3s ease; opacity: 0; padding: 0 12px; }
    .otw-subgroup-container.expanded { max-height: 200px; opacity: 1; padding: 12px; }
    .otw-sub-toggle { padding: 7px 12px; background: rgba(12,10,16,0.4); border: 1px solid rgba(154,140,122,0.08); border-radius: 8px !important; color: #6a5a4a; font-size: 11px; cursor: pointer; transition: all 0.3s ease; -webkit-appearance: none; appearance: none; }
    .otw-sub-toggle.active { background: rgba(154,140,122,0.15); border-color: rgba(154,140,122,0.25); color: #9a8c7a; }
  `;
  document.head.appendChild(style);
}

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

function addCorners(el, color, size = 14) {
  ["TL", "TR", "BL", "BR"].forEach((pos) => {
    const c = document.createElement("div");
    const isTop = pos.includes("T"), isLeft = pos.includes("L");
    c.style.cssText = `position:absolute;${isTop?"top:0":"bottom:0"};${isLeft?"left:0":"right:0"};width:${size}px;height:${size}px;border-${isTop?"top":"bottom"}:1px solid ${color};border-${isLeft?"left":"right"}:1px solid ${color};z-index:10;pointer-events:none;`;
    el.appendChild(c);
  });
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

// ============================================================
// SVG BODY FIGURE — Load actual Muscle Man/Woman SVG files
// ============================================================

let _cachedSvgContent = null;
let _cachedSvgGender = null;

async function loadBodySvg() {
  const gender = PERSONAL.gender || "male";
  if (_cachedSvgContent && _cachedSvgGender === gender) return _cachedSvgContent;
  const fileName = gender === "female" ? "Muscle Woman.svg" : "Muscle Man.svg";
  try {
    const content = await readFile(fileName);
    if (content) {
      _cachedSvgContent = content;
      _cachedSvgGender = gender;
      return content;
    }
  } catch (e) { /* file not found — fall back to programmatic */ }
  return null;
}

// Hotspot regions for muscle overlay on the actual SVG (percentage-based)
// Positioned relative to the SVG container (front view anatomical figure)
const SVG_HOTSPOTS = {
  front: {
    neck:       { top: 9,  left: 42, width: 16, height: 4  },
    front_delts:{ top: 15, left: 20, width: 12, height: 7  },
    chest:      { top: 19, left: 33, width: 34, height: 10 },
    biceps:     { top: 23, left: 14, width: 10, height: 12 },
    forearms:   { top: 37, left: 10, width: 10, height: 12 },
    core:       { top: 30, left: 38, width: 24, height: 14 },
    quads:      { top: 49, left: 32, width: 16, height: 18 },
    calves:     { top: 72, left: 34, width: 12, height: 14 },
  },
  // Mirror right side automatically
  rightMirror: {
    front_delts: { top: 15, left: 68, width: 12, height: 7  },
    biceps:      { top: 23, left: 76, width: 10, height: 12 },
    forearms:    { top: 37, left: 80, width: 10, height: 12 },
    quads:       { top: 49, left: 52, width: 16, height: 18 },
    calves:      { top: 72, left: 54, width: 12, height: 14 },
  },
  back: {
    traps:      { top: 13, left: 34, width: 32, height: 6  },
    rear_delts: { top: 15, left: 20, width: 12, height: 7  },
    lats:       { top: 20, left: 26, width: 48, height: 12 },
    triceps:    { top: 23, left: 14, width: 10, height: 12 },
    lower_back: { top: 33, left: 36, width: 28, height: 10 },
    glutes:     { top: 44, left: 34, width: 32, height: 8  },
    hamstrings: { top: 53, left: 32, width: 16, height: 16 },
  },
  backMirror: {
    rear_delts: { top: 15, left: 68, width: 12, height: 7  },
    triceps:    { top: 23, left: 76, width: 10, height: 12 },
    hamstrings: { top: 53, left: 52, width: 16, height: 16 },
  },
};

// ============================================================
// PERSONAL STATS & STRENGTH STANDARDS
// ============================================================

async function getPersonalStats() {
  // Read from plugin settings (Personal Stats section)
  return {
    weight: PERSONAL.weight,
    height: PERSONAL.height,
    birthdate: PERSONAL.birthdate,
  };
}

function calculateAge(bd) {
  if (!bd) return 20;
  const b = new Date(bd), t = new Date();
  let a = t.getFullYear() - b.getFullYear();
  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;
  return a;
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
  const filePath = SETTINGS.exerciseDbFolder + "/" + exerciseName + ".md";
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

// ============================================================
// WORKOUT DATA — PR lookup, previous exercise loading
// ============================================================

async function getExercisePR(name) {
  const std = await getStrengthStandard(name);
  const isBW = std?.isBodyweight || false;
  const files = getFilesInFolder(SETTINGS.workoutFolder);
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

function getLastWorkoutForMuscleGroup(muscleGroup) {
  const files = getFilesInFolder(SETTINGS.workoutFolder)
    .sort((a, b) => b.basename.localeCompare(a.basename));
  for (const f of files) {
    if (f.path === file.path) continue; // skip current note
    const fm = getFileMetadata(f.path);
    if (fm?.exercises && Array.isArray(fm.exercises)) {
      const relevant = fm.exercises.filter(ex => ex.muscle === muscleGroup || ex.muscleGroup === muscleGroup);
      if (relevant.length > 0) return { date: f.basename, exercises: relevant };
    }
  }
  return null;
}

function loadPreviousExercises(selectedMuscleGroups) {
  const exercisesArray = [];
  for (const muscle of selectedMuscleGroups) {
    const lastWorkout = getLastWorkoutForMuscleGroup(muscle);
    if (lastWorkout) {
      for (const ex of lastWorkout.exercises) {
        exercisesArray.push({
          name: ex.name,
          muscle: muscle,
          muscleGroup: muscle,
          sets: ex.sets ? ex.sets.map(s => ({
            weight: s.weight || 0,
            reps: s.reps || 10,
            completed: false,
            isWarmup: s.isWarmup || false
          })) : [{ weight: 0, reps: 10, completed: false, isWarmup: false }]
        });
      }
    }
  }
  return exercisesArray;
}

// ============================================================
// SAVE STATE
// ============================================================

async function saveState() {
  await setMultipleData({
    exercises: exercises,
    currentMuscleIndex: currentMuscleIndex,
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

// ============================================================
// POST-COMPLETION NAVIGATION
// ============================================================

function getReturnDestination() {
  // Look up the current activity's config from plugin settings
  const activityId = getData("activity");
  const activities = ctx.plugin?.settings?.activities;
  if (activities && activityId) {
    const actConfig = activities.find(a => a.id === activityId);
    if (actConfig?.completionReturnTo) return actConfig.completionReturnTo;
  }
  return "dashboard"; // default
}

function navigateAfterCompletion() {
  const dest = getReturnDestination();
  if (dest === "stay") return; // do nothing, stay on completion summary
  if (dest === "dashboard") {
    // Use Olen's built-in dashboard activation
    if (ctx.plugin?.activateDashboardView) {
      setTimeout(() => ctx.plugin.activateDashboardView(), 600);
    }
    return;
  }
  if (dest === "homepage") {
    // Open the global homepage file defined in Profile settings
    const homepagePath = ctx.plugin?.settings?.homepage;
    if (!homepagePath) { notice("No homepage set — go to Olen Settings > Profile to define one."); return; }
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
// FINISH WORKOUT
// ============================================================

async function finishWorkout(type) {
  await setMultipleData({
    Workout: true,
    "Workout-Type": type,
    Timestamp: moment().format(),
    exercises: exercises,
    currentMuscleIndex: currentMuscleIndex,
  });
  notice("Workout logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");
  navigateAfterCompletion();
}

async function openFinishModal() {
  // Build session analytics data
  const summaryData = [];
  for (const ex of exercises) {
    const completed = ex.sets.filter(s => !s.isWarmup && s.completed);
    if (completed.length > 0) {
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
      summaryData.push({ name: ex.name, muscle: ex.muscle || ex.muscleGroup, bestW, bestR, maxR, sessionBest, sl, pr, completedSets: completed.length, totalSets: ex.sets.filter(s => !s.isWarmup).length });
    }
  }

  createModal(null, (content) => {
    // Scrollable area
    const scroll = document.createElement("div");
    scroll.style.cssText = "overflow-y:auto;display:flex;flex-direction:column;gap:16px;flex:1;max-height:70vh;";
    content.appendChild(scroll);

    // Title
    const title = document.createElement("h2");
    title.textContent = "WORKOUT COMPLETE";
    title.style.cssText = `margin:0;color:${THEME.systemGreen};font-size:16px;font-weight:700;letter-spacing:3px;text-align:center;`;
    scroll.appendChild(title);

    // Session summary cards
    if (summaryData.length > 0) {
      const sec = document.createElement("div");
      sec.style.cssText = "display:flex;flex-direction:column;gap:12px;";
      scroll.appendChild(sec);

      const secTitle = document.createElement("div");
      secTitle.textContent = "SESSION SUMMARY";
      secTitle.style.cssText = `color:${THEME.colorMuted};font-size:11px;letter-spacing:2px;text-align:center;`;
      sec.appendChild(secTitle);

      for (const ex of summaryData) {
        const card = document.createElement("div");
        card.style.cssText = `padding:14px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};`;
        sec.appendChild(card);

        // Exercise name + strength badge
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
          badge.style.cssText = `display:inline-flex;align-items:center;gap:4px;padding:4px 10px;background:${ex.sl.color}20;border:1px solid ${ex.sl.color}50;color:${ex.sl.color};font-size:11px;font-weight:700;letter-spacing:1px;`;
          badge.textContent = (li?.icon || "\u25CB") + " " + ex.sl.level.toUpperCase();
          hdr.appendChild(badge);
        }

        // Best set + estimated 1RM
        const stats = document.createElement("div");
        stats.style.cssText = `display:flex;justify-content:space-between;margin-bottom:8px;font-size:12px;`;
        card.appendChild(stats);

        const setInfo = document.createElement("span");
        setInfo.textContent = ex.sl?.isBodyweight ? "Best: " + ex.maxR + " reps" : "Best: " + ex.bestW + "kg \u00D7 " + ex.bestR;
        setInfo.style.cssText = `color:${THEME.colorMuted};`;
        stats.appendChild(setInfo);

        if (ex.sl) {
          const rmInfo = document.createElement("span");
          rmInfo.textContent = ex.sl.displayLabel + ": " + ex.sl.currentValue + ex.sl.unit;
          rmInfo.style.cssText = `color:${THEME.color};font-weight:600;`;
          stats.appendChild(rmInfo);
        }

        // Sets completed
        const setsInfo = document.createElement("div");
        setsInfo.style.cssText = `font-size:11px;color:${THEME.colorMuted};margin-bottom:8px;`;
        setsInfo.textContent = ex.completedSets + "/" + ex.totalSets + " working sets completed";
        card.appendChild(setsInfo);

        // PR comparison
        if (ex.pr) {
          const prC = document.createElement("div");
          prC.style.cssText = `font-size:11px;margin-bottom:8px;padding:6px 8px;`;
          const cv = ex.sl?.currentValue || ex.sessionBest;
          if (cv > ex.pr.prValue) {
            prC.style.background = "rgba(122,154,125,0.15)";
            prC.innerHTML = '<span style="color:#7a9a7d;font-weight:700;">\uD83C\uDF89 NEW PR!</span> <span style="color:' + THEME.colorMuted + ';">Previous: ' + ex.pr.prValue + ' \u2192 Now: ' + cv + '</span>';
          } else if (cv === ex.pr.prValue) {
            prC.style.background = "rgba(168,152,96,0.1)";
            prC.innerHTML = '<span style="color:#a89860;">\uD83C\uDFC6 Matched PR:</span> <span style="color:' + THEME.colorMuted + ';">' + ex.pr.prValue + '</span>';
          } else {
            prC.style.background = "rgba(168,152,96,0.1)";
            prC.innerHTML = '<span style="color:' + THEME.colorMuted + ';">\uD83C\uDFC6 PR: ' + ex.pr.prValue + '</span> <span style="color:#6a6a6a;">(today: ' + cv + ')</span>';
          }
          card.appendChild(prC);
        }

        // Progress bar to next strength level
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
          ti.innerHTML = "<span>Current: " + ex.sl.currentValue + ex.sl.unit + "</span><span>Next: " + Math.round(ex.sl.nextTarget) + ex.sl.unit + "</span>";
          card.appendChild(ti);
        }
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
    discBtn.className = "otw-feel-btn";
    discBtn.style.borderLeft = `3px solid ${THEME.colorDiscipline}`;
    discBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\uD83D\uDC8E</span><div style="flex:1;"><div style="color:${THEME.colorDiscipline};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Discipline</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Pushed through resistance</div></div><div style="color:#4a4030;font-size:18px;opacity:0.5;">\u2192</div>`;
    discBtn.onclick = async () => { closeModal(); await finishWorkout("discipline"); };
    btns.appendChild(discBtn);

    // Flow button
    const flowBtn = document.createElement("div");
    flowBtn.className = "otw-feel-btn";
    flowBtn.style.borderLeft = `3px solid ${THEME.colorFlow}`;
    flowBtn.innerHTML = `<span style="font-size:24px;width:40px;text-align:center;">\uD83C\uDF0A</span><div style="flex:1;"><div style="color:${THEME.colorFlow};font-size:14px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:4px;">Flow</div><div style="color:#5a5a5a;font-size:11px;font-style:italic;">Felt natural and effortless</div></div><div style="color:#304050;font-size:18px;opacity:0.5;">\u2192</div>`;
    flowBtn.onclick = async () => { closeModal(); await finishWorkout("flow"); };
    btns.appendChild(flowBtn);
  });
}

// ============================================================
// ADD EXERCISE MODAL
// ============================================================

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
    yesBtn.onclick = () => { incWarmup = true; yesBtn.style.background = "rgba(154,140,122,0.2)"; yesBtn.style.borderColor = THEME.color; noBtn.style.background = "#0f0f0f"; noBtn.style.borderColor = THEME.colorBorder; };
    noBtn.onclick = () => { incWarmup = false; noBtn.style.background = "rgba(154,140,122,0.2)"; noBtn.style.borderColor = THEME.color; yesBtn.style.background = "#0f0f0f"; yesBtn.style.borderColor = THEME.colorBorder; };
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

// ============================================================
// RENDER: SET ROW
// ============================================================

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

// ============================================================
// RENDER: EXERCISE CARD
// ============================================================

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

// ============================================================
// STATISTICS & HEATMAP DATA
// ============================================================

// Map muscle/subgroup names → body regions for the heatmap
const MUSCLE_TO_REGION = {
  Neck: ["neck"], Chest: ["chest"], Core: ["core"],
  Back: ["lats", "traps", "lower_back"], Lats: ["lats"], Traps: ["traps"],
  Rhomboids: ["traps"], "Lower Back": ["lower_back"], "Rear Delts": ["rear_delts"],
  Shoulders: ["front_delts", "rear_delts"], "Front Delts": ["front_delts"],
  "Side Delts": ["front_delts"],
  Legs: ["quads", "hamstrings", "glutes", "calves"], Quads: ["quads"],
  Hamstrings: ["hamstrings"], Glutes: ["glutes"], Calves: ["calves"],
  Adductors: ["quads"],
  Arms: ["biceps", "triceps", "forearms"], Biceps: ["biceps"],
  Triceps: ["triceps"], Forearms: ["forearms"],
};

function getWeeklyCalendarData() {
  const today = moment().startOf("day");
  const weekStart = today.clone().startOf("isoWeek");
  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);
  const days = [];
  for (let i = 0; i < 7; i++) {
    const day = weekStart.clone().add(i, "days");
    const dayStr = day.format("YYYY-MM-DD");
    const isToday = day.isSame(today, "day");
    const isPast = day.isBefore(today, "day");
    let status = null, type = null;
    for (const wFile of allFiles) {
      if (wFile.basename === dayStr) {
        const fm = getFileMetadata(wFile.path);
        if (fm && fm.Workout === true) { status = "done"; type = fm["Workout-Type"] || "done"; }
        break;
      }
    }
    days.push({ label: day.format("dd")[0], num: day.format("D"), isToday, isPast, status, type });
  }
  return days;
}

function getMonthlyStats() {
  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);
  const now = moment();
  const weekStart = now.clone().startOf("isoWeek");
  const monthStart = now.clone().startOf("month");
  let thisWeek = 0, thisMonth = 0, total = 0, totalSets = 0, totalVolume = 0;
  for (const wFile of allFiles) {
    const fm = getFileMetadata(wFile.path);
    if (!fm || fm.Workout !== true) continue;
    total++;
    const dateMatch = wFile.basename.match(/^(\d{4}-\d{2}-\d{2})/);
    if (!dateMatch) continue;
    const fileDate = moment(dateMatch[1], "YYYY-MM-DD");
    if (fileDate.isSameOrAfter(weekStart)) thisWeek++;
    if (fileDate.isSameOrAfter(monthStart)) thisMonth++;
    if (Array.isArray(fm.exercises)) {
      for (const ex of fm.exercises) {
        if (!Array.isArray(ex.sets)) continue;
        for (const s of ex.sets) {
          if (s.completed && !s.isWarmup) { totalSets++; totalVolume += (s.weight || 0) * (s.reps || 0); }
        }
      }
    }
  }
  return { thisWeek, thisMonth, total, totalSets, totalVolume };
}

function getRecentSessions(limit) {
  limit = limit || 4;
  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);
  const sorted = allFiles.sort(function(a, b) { return b.basename.localeCompare(a.basename); });
  const sessions = [];
  for (var i = 0; i < sorted.length; i++) {
    if (sessions.length >= limit) break;
    var wFile = sorted[i];
    if (wFile.path === file.path) continue;
    var fm = getFileMetadata(wFile.path);
    if (!fm || fm.Workout !== true) continue;
    var dateMatch = wFile.basename.match(/^(\d{4}-\d{2}-\d{2})/);
    sessions.push({
      date: dateMatch ? dateMatch[1] : wFile.basename,
      type: fm["Workout-Type"] || "done",
      muscles: fm.muscleGroups || [],
    });
  }
  return sessions;
}

// Build strength level data per body region from ALL completed workouts
async function getMuscleLevelData() {
  const exerciseBest = {}; // exerciseName → { weight, reps, maxReps, muscle }
  const allFiles = getFilesInFolder(SETTINGS.workoutFolder);
  for (const wFile of allFiles) {
    if (wFile.path === file.path) continue;
    const fm = getFileMetadata(wFile.path);
    if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;
    for (const ex of fm.exercises) {
      const done = (ex.sets || []).filter(function(s) { return s.completed && !s.isWarmup; });
      if (done.length === 0) continue;
      let bestW = 0, bestR = 0, maxR = 0;
      for (const s of done) {
        if (s.reps > maxR) maxR = s.reps;
        if (s.weight > bestW || (s.weight === bestW && s.reps > bestR)) { bestW = s.weight; bestR = s.reps; }
      }
      const existing = exerciseBest[ex.name];
      if (!existing) {
        exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };
      } else {
        const oldVal = existing.weight > 0 ? calculate1RM(existing.weight, existing.reps) : existing.maxReps;
        const newVal = bestW > 0 ? calculate1RM(bestW, bestR) : maxR;
        if (newVal > oldVal) exerciseBest[ex.name] = { weight: bestW, reps: bestR, maxReps: maxR, muscle: ex.muscle || ex.muscleGroup };
      }
    }
  }
  // Calculate strength level per exercise, map to body regions
  const regionEntries = {};
  for (const [exName, data] of Object.entries(exerciseBest)) {
    const sl = await calculateStrengthLevel(exName, data.weight, data.reps, data.maxReps);
    if (!sl) continue;
    const regions = MUSCLE_TO_REGION[data.muscle] || [];
    for (const region of regions) {
      if (!regionEntries[region]) regionEntries[region] = [];
      regionEntries[region].push({ level: sl.level, color: sl.color, progress: sl.progress });
    }
  }
  // Pick the best strength level per region
  const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];
  const result = {};
  for (const [region, entries] of Object.entries(regionEntries)) {
    let best = entries[0], bestIdx = levelOrder.indexOf(entries[0].level);
    for (let i = 1; i < entries.length; i++) {
      const idx = levelOrder.indexOf(entries[i].level);
      if (idx > bestIdx) { bestIdx = idx; best = entries[i]; }
    }
    result[region] = best;
  }
  return result;
}

// ============================================================
// BODY HEATMAP SVG — Interactive with click-to-show-progress
// ============================================================

const REGION_LABELS = {
  neck: "Neck", chest: "Chest", front_delts: "Front Delts", rear_delts: "Rear Delts",
  biceps: "Biceps", triceps: "Triceps", forearms: "Forearms", core: "Core",
  quads: "Quads", calves: "Calves", traps: "Traps", lats: "Lats",
  lower_back: "Lower Back", glutes: "Glutes", hamstrings: "Hamstrings",
};

function buildSvgWithOverlay(svgContent, muscleLevels, onRegionClick) {
  // Container with actual SVG as background + clickable overlay hotspots
  const wrap = document.createElement("div");
  wrap.style.cssText = "position:relative;width:100%;max-width:240px;margin:0 auto;";

  // Insert actual SVG
  const svgHolder = document.createElement("div");
  svgHolder.style.cssText = "width:100%;opacity:0.85;filter:saturate(0.3) brightness(0.5);";
  svgHolder.innerHTML = svgContent;
  // Make embedded SVG responsive
  const svgEl = svgHolder.querySelector("svg");
  if (svgEl) {
    svgEl.style.width = "100%";
    svgEl.style.height = "auto";
    svgEl.style.display = "block";
  }
  wrap.appendChild(svgHolder);

  // Overlay container for hotspots (sits on top of SVG)
  const overlay = document.createElement("div");
  overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;";
  wrap.appendChild(overlay);

  // Create clickable hotspots for front view
  const hotspots = SVG_HOTSPOTS.front;
  const mirrors = SVG_HOTSPOTS.rightMirror;

  function createHotspot(region, bounds) {
    const hs = document.createElement("div");
    hs.style.cssText = `position:absolute;top:${bounds.top}%;left:${bounds.left}%;width:${bounds.width}%;height:${bounds.height}%;cursor:pointer;border-radius:4px;transition:background 0.15s;`;
    const levelData = muscleLevels[region];
    if (levelData) {
      hs.style.background = levelData.color + "30";
      hs.style.border = "1px solid " + levelData.color + "20";
    }
    hs.addEventListener("mouseenter", () => {
      hs.style.background = (levelData ? levelData.color : "#9a8c7a") + "50";
    });
    hs.addEventListener("mouseleave", () => {
      hs.style.background = levelData ? levelData.color + "30" : "transparent";
    });
    hs.addEventListener("click", (e) => {
      e.stopPropagation();
      if (onRegionClick) onRegionClick(region);
    });
    // Tooltip
    const label = REGION_LABELS[region] || region;
    hs.title = label + (levelData ? " — " + levelData.level : "");
    overlay.appendChild(hs);
  }

  for (const [region, bounds] of Object.entries(hotspots)) {
    createHotspot(region, bounds);
  }
  for (const [region, bounds] of Object.entries(mirrors)) {
    createHotspot(region, bounds);
  }

  return wrap;
}

// Fallback: simple programmatic SVG (if actual SVG files not found in vault)
function buildFallbackBodySvg(muscleLevels, onRegionClick) {
  const untrained = "#1a1816";
  function fill(region) {
    const d = muscleLevels[region];
    return d ? d.color + "90" : untrained;
  }
  function stroke(region) {
    const d = muscleLevels[region];
    return d ? d.color + "40" : "#2a2520";
  }
  const frontPaths = {
    neck:'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>',
    front_delts:'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>',
    chest:'<path d="M31,37 L49,37 L49,55 C49,57 42,60 33,58 L31,56 Z"/><path d="M51,37 L69,37 L69,56 L67,58 C58,60 51,57 51,55 Z"/>',
    biceps:'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>',
    forearms:'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>',
    core:'<path d="M33,58 L67,58 L65,82 L35,82 Z"/>',
    quads:'<path d="M35,84 L49,84 L48,136 L34,136 Z"/><path d="M51,84 L65,84 L66,136 L52,136 Z"/>',
    calves:'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>',
  };
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", "0 0 100 210");
  svg.setAttribute("class", "otw-heatmap-svg");
  const headG = document.createElementNS(ns, "g");
  headG.innerHTML = '<ellipse cx="50" cy="14" rx="10" ry="11" fill="#0c0c0c" stroke="#2a2520" stroke-width="0.8"/>';
  svg.appendChild(headG);
  for (const [region, pathData] of Object.entries(frontPaths)) {
    const g = document.createElementNS(ns, "g");
    g.setAttribute("fill", fill(region));
    g.setAttribute("stroke", stroke(region));
    g.setAttribute("stroke-width", "0.6");
    g.style.cursor = "pointer";
    g.style.transition = "opacity 0.15s";
    g.innerHTML = pathData;
    g.addEventListener("mouseenter", () => { g.style.opacity = "0.7"; });
    g.addEventListener("mouseleave", () => { g.style.opacity = "1"; });
    g.addEventListener("click", (e) => { e.stopPropagation(); if (onRegionClick) onRegionClick(region); });
    svg.appendChild(g);
  }
  return svg;
}

// ── Muscle Progress Popup (when clicking a muscle on the heatmap) ──

function showMuscleProgressPopup(regionId, muscleLevels) {
  const label = REGION_LABELS[regionId] || regionId;
  const levelData = muscleLevels[regionId];

  createModal(label.toUpperCase(), (content) => {
    // Current strength level
    if (levelData) {
      const li = STRENGTH_LEVELS[levelData.level];
      const badge = document.createElement("div");
      badge.className = "otw-strength-badge";
      badge.style.cssText = `background:${levelData.color}25;border:1px solid ${levelData.color}60;color:${levelData.color};margin:8px auto;display:inline-flex;`;
      badge.textContent = (li?.icon || "\u25CB") + " " + levelData.level.toUpperCase();
      content.appendChild(badge);

      if (levelData.progress !== undefined) {
        const pb = document.createElement("div");
        pb.className = "otw-strength-bar";
        pb.style.marginTop = "12px";
        content.appendChild(pb);
        const fill = document.createElement("div");
        fill.className = "otw-strength-fill";
        fill.style.cssText = `width:${Math.min(100, levelData.progress)}%;background:${levelData.color};`;
        pb.appendChild(fill);
      }
    } else {
      const noData = document.createElement("div");
      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-style:italic;padding:16px;font-size:12px;`;
      noData.textContent = "No workout data for this muscle yet";
      content.appendChild(noData);
    }

    // Monthly workout frequency chart
    const chartLabel = document.createElement("div");
    chartLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:20px;`;
    chartLabel.textContent = "MONTHLY FREQUENCY";
    content.appendChild(chartLabel);

    // Find workouts that targeted this region in the last 30 days
    const allFiles = getFilesInFolder(SETTINGS.workoutFolder);
    const reverseMap = {};
    for (const [muscle, regions] of Object.entries(MUSCLE_TO_REGION)) {
      for (const r of regions) {
        if (!reverseMap[r]) reverseMap[r] = [];
        reverseMap[r].push(muscle);
      }
    }
    const targetMuscles = reverseMap[regionId] || [];

    // Count workouts per week (last 4 weeks)
    const now = moment();
    const weekCounts = [0, 0, 0, 0];
    for (const wFile of allFiles) {
      const fm = getFileMetadata(wFile.path);
      if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;
      const dateMatch = wFile.basename.match(/^(\d{4}-\d{2}-\d{2})/);
      if (!dateMatch) continue;
      const fileDate = moment(dateMatch[1], "YYYY-MM-DD");
      const daysAgo = now.diff(fileDate, "days");
      if (daysAgo < 0 || daysAgo > 28) continue;
      const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));
      if (hasMuscle) {
        const weekIdx = Math.floor(daysAgo / 7);
        if (weekIdx < 4) weekCounts[3 - weekIdx]++;
      }
    }

    renderLineChart(content, ["W1", "W2", "W3", "W4"], weekCounts);

    // Toggle: monthly ↔ yearly view
    const toggleRow = document.createElement("div");
    toggleRow.style.cssText = "display:flex;gap:6px;justify-content:center;margin-top:12px;";
    content.appendChild(toggleRow);

    const monthBtn = document.createElement("button");
    monthBtn.textContent = "MONTHLY";
    monthBtn.className = "otw-btn otw-btn-primary";
    monthBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";

    const yearBtn = document.createElement("button");
    yearBtn.textContent = "YEARLY";
    yearBtn.className = "otw-btn otw-btn-secondary";
    yearBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";

    toggleRow.appendChild(monthBtn);
    toggleRow.appendChild(yearBtn);

    const chartContainer = document.createElement("div");
    content.appendChild(chartContainer);

    function showMonthly() {
      chartContainer.innerHTML = "";
      renderLineChart(chartContainer, ["W1", "W2", "W3", "W4"], weekCounts);
      monthBtn.className = "otw-btn otw-btn-primary";
      monthBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";
      yearBtn.className = "otw-btn otw-btn-secondary";
      yearBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";
    }

    function showYearly() {
      chartContainer.innerHTML = "";
      const monthCounts = new Array(12).fill(0);
      const monthLabels = ["J","F","M","A","M","J","J","A","S","O","N","D"];
      for (const wFile of allFiles) {
        const fm = getFileMetadata(wFile.path);
        if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;
        const dateMatch = wFile.basename.match(/^(\d{4}-\d{2}-\d{2})/);
        if (!dateMatch) continue;
        const fileDate = moment(dateMatch[1], "YYYY-MM-DD");
        if (now.diff(fileDate, "months") > 11) continue;
        const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));
        if (hasMuscle) monthCounts[fileDate.month()]++;
      }
      renderLineChart(chartContainer, monthLabels, monthCounts);
      yearBtn.className = "otw-btn otw-btn-primary";
      yearBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";
      monthBtn.className = "otw-btn otw-btn-secondary";
      monthBtn.style.cssText += "font-size:10px;padding:8px 16px;flex:1;";
    }

    monthBtn.onclick = showMonthly;
    yearBtn.onclick = showYearly;
  });
}

// ── Overall Progress Popup (both overall + per-muscle) ──

async function showOverallProgressPopup(muscleLevels) {
  createModal("STRENGTH PROGRESS", (content) => {
    // 1) Overall strength trend — average strength level across all regions
    const overLabel = document.createElement("div");
    overLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-bottom:8px;`;
    overLabel.textContent = "OVERALL STRENGTH";
    content.appendChild(overLabel);

    // Summarize current strength levels
    const levelOrder = ["Untrained", "Beginner", "Novice", "Intermediate", "Advanced", "Elite"];
    const regionLevels = Object.entries(muscleLevels);
    if (regionLevels.length === 0) {
      const noData = document.createElement("div");
      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-size:12px;font-style:italic;padding:12px;`;
      noData.textContent = "Complete some workouts to see your strength progress";
      content.appendChild(noData);
    } else {
      // Average progress value
      let totalProgress = 0;
      for (const [, data] of regionLevels) {
        const idx = levelOrder.indexOf(data.level);
        totalProgress += (idx / 5) * 100 + (data.progress || 0) * (1/5);
      }
      const avgProgress = totalProgress / regionLevels.length;
      const avgLevelIdx = Math.min(5, Math.floor(avgProgress / 20));
      const avgLevel = levelOrder[avgLevelIdx];
      const avgColor = STRENGTH_LEVELS[avgLevel]?.color || "#6a6a6a";

      const badge = document.createElement("div");
      badge.className = "otw-strength-badge";
      badge.style.cssText = `background:${avgColor}25;border:1px solid ${avgColor}60;color:${avgColor};margin:0 auto 12px;display:inline-flex;`;
      badge.textContent = avgLevel.toUpperCase() + " (avg)";
      content.appendChild(badge);

      const pb = document.createElement("div");
      pb.className = "otw-strength-bar";
      content.appendChild(pb);
      const fill = document.createElement("div");
      fill.className = "otw-strength-fill";
      fill.style.cssText = `width:${Math.min(100, avgProgress)}%;background:${avgColor};`;
      pb.appendChild(fill);
    }

    // Monthly completions chart (all workouts)
    const allFiles = getFilesInFolder(SETTINGS.workoutFolder);
    const now = moment();
    const weekCounts = [0, 0, 0, 0];
    for (const wFile of allFiles) {
      const fm = getFileMetadata(wFile.path);
      if (!fm || fm.Workout !== true) continue;
      const dateMatch = wFile.basename.match(/^(\d{4}-\d{2}-\d{2})/);
      if (!dateMatch) continue;
      const daysAgo = now.diff(moment(dateMatch[1], "YYYY-MM-DD"), "days");
      if (daysAgo < 0 || daysAgo > 28) continue;
      const weekIdx = Math.floor(daysAgo / 7);
      if (weekIdx < 4) weekCounts[3 - weekIdx]++;
    }

    // Chart 1: Overall strength curve (workouts per week as a trend)
    const c1Label = document.createElement("div");
    c1Label.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:16px;`;
    c1Label.textContent = "OVERALL STRENGTH";
    content.appendChild(c1Label);
    renderLineChart(content, ["W1", "W2", "W3", "W4"], weekCounts, THEME.color);

    // Chart 2: Per-muscle multi-line breakdown
    const musLabel = document.createElement("div");
    musLabel.style.cssText = `color:${THEME.colorMuted};font-size:10px;letter-spacing:2px;text-transform:uppercase;text-align:center;margin-top:20px;`;
    musLabel.textContent = "BY MUSCLE GROUP";
    content.appendChild(musLabel);

    // Build per-muscle workout frequency data (last 4 weeks)
    const muscleColors = ["#9a8c7a", "#a89860", "#7a9a7d", "#6a8a9a", "#8a7a9a", "#9a6a7a", "#6a5a4a"];
    const muscleSeriesData = [];
    let colorIdx = 0;
    const reverseMapAll = {};
    for (const [muscle, regions] of Object.entries(MUSCLE_TO_REGION)) {
      for (const r of regions) {
        if (!reverseMapAll[r]) reverseMapAll[r] = [];
        reverseMapAll[r].push(muscle);
      }
    }

    for (const [region, data] of regionLevels) {
      const targetMuscles = reverseMapAll[region] || [];
      const wkCounts = [0, 0, 0, 0];
      for (const wFile of allFiles) {
        const fm = getFileMetadata(wFile.path);
        if (!fm || fm.Workout !== true || !Array.isArray(fm.exercises)) continue;
        const dateMatch = wFile.basename.match(/^(\d{4}-\d{2}-\d{2})/);
        if (!dateMatch) continue;
        const daysAgo = now.diff(moment(dateMatch[1], "YYYY-MM-DD"), "days");
        if (daysAgo < 0 || daysAgo > 28) continue;
        const hasMuscle = fm.exercises.some(ex => targetMuscles.includes(ex.muscle || ex.muscleGroup));
        if (hasMuscle) {
          const weekIdx = Math.floor(daysAgo / 7);
          if (weekIdx < 4) wkCounts[3 - weekIdx]++;
        }
      }
      muscleSeriesData.push({
        name: REGION_LABELS[region] || region,
        values: wkCounts,
        color: muscleColors[colorIdx % muscleColors.length],
      });
      colorIdx++;
    }

    if (muscleSeriesData.length > 0) {
      renderMultiLineChart(content, ["W1", "W2", "W3", "W4"], muscleSeriesData);
    } else {
      const noData = document.createElement("div");
      noData.style.cssText = `color:${THEME.colorMuted};text-align:center;font-size:12px;font-style:italic;padding:12px;`;
      noData.textContent = "Complete some workouts to see per-muscle trends";
      content.appendChild(noData);
    }
  });
}

// ── Line chart helper (used in progress popups — smooth curve) ──

function renderLineChart(parent, labels, values, color) {
  color = color || THEME.color;
  const maxVal = Math.max(...values, 1);
  const ns = "http://www.w3.org/2000/svg";
  const w = 260, h = 80;
  const padL = 4, padR = 4, padT = 8, padB = 16;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.style.cssText = "width:100%;height:auto;display:block;margin:8px 0;";

  // Grid lines
  for (let g = 0; g <= 2; g++) {
    const gy = padT + (g / 2) * chartH;
    const line = document.createElementNS(ns, "line");
    line.setAttribute("x1", String(padL)); line.setAttribute("x2", String(w - padR));
    line.setAttribute("y1", String(gy)); line.setAttribute("y2", String(gy));
    line.setAttribute("stroke", "rgba(154,140,122,0.08)"); line.setAttribute("stroke-width", "0.5");
    svg.appendChild(line);
  }

  // Build points
  const points = values.map((v, i) => {
    const x = padL + (i / Math.max(1, values.length - 1)) * chartW;
    const y = padT + chartH - (v / maxVal) * chartH;
    return { x, y };
  });

  // Smooth curve (Catmull-Rom → cubic bezier)
  if (points.length > 1) {
    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[Math.max(0, i - 1)];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[Math.min(points.length - 1, i + 2)];
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y}`;
    }

    // Area fill
    const area = document.createElementNS(ns, "path");
    const areaD = d + ` L ${points[points.length-1].x} ${padT + chartH} L ${points[0].x} ${padT + chartH} Z`;
    area.setAttribute("d", areaD);
    area.setAttribute("fill", color); area.setAttribute("opacity", "0.08");
    svg.appendChild(area);

    // Curve line
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", color); path.setAttribute("stroke-width", "1.5");
    path.setAttribute("stroke-linecap", "round");
    svg.appendChild(path);
  }

  // Data dots
  for (const pt of points) {
    const dot = document.createElementNS(ns, "circle");
    dot.setAttribute("cx", String(pt.x)); dot.setAttribute("cy", String(pt.y));
    dot.setAttribute("r", "2.5"); dot.setAttribute("fill", color);
    svg.appendChild(dot);
  }

  // X-axis labels
  for (let i = 0; i < labels.length; i++) {
    const x = padL + (i / Math.max(1, labels.length - 1)) * chartW;
    const txt = document.createElementNS(ns, "text");
    txt.setAttribute("x", String(x)); txt.setAttribute("y", String(h - 2));
    txt.setAttribute("text-anchor", "middle");
    txt.setAttribute("fill", "rgba(154,140,122,0.4)"); txt.setAttribute("font-size", "7");
    txt.textContent = labels[i];
    svg.appendChild(txt);
  }

  parent.appendChild(svg);
}

// ── Multi-line chart helper (for per-muscle breakdown) ──

function renderMultiLineChart(parent, labels, series) {
  const allVals = series.flatMap(s => s.values);
  const maxVal = Math.max(...allVals, 1);
  const ns = "http://www.w3.org/2000/svg";
  const w = 260, h = 90;
  const padL = 4, padR = 4, padT = 8, padB = 16;
  const chartW = w - padL - padR;
  const chartH = h - padT - padB;

  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
  svg.style.cssText = "width:100%;height:auto;display:block;margin:8px 0;";

  for (const s of series) {
    const points = s.values.map((v, i) => ({
      x: padL + (i / Math.max(1, s.values.length - 1)) * chartW,
      y: padT + chartH - (v / maxVal) * chartH,
    }));
    if (points.length > 1) {
      let d = `M ${points[0].x} ${points[0].y}`;
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[Math.max(0, i - 1)];
        const p1 = points[i];
        const p2 = points[i + 1];
        const p3 = points[Math.min(points.length - 1, i + 2)];
        d += ` C ${p1.x+(p2.x-p0.x)/6} ${p1.y+(p2.y-p0.y)/6}, ${p2.x-(p3.x-p1.x)/6} ${p2.y-(p3.y-p1.y)/6}, ${p2.x} ${p2.y}`;
      }
      const path = document.createElementNS(ns, "path");
      path.setAttribute("d", d); path.setAttribute("fill", "none");
      path.setAttribute("stroke", s.color); path.setAttribute("stroke-width", "1.2");
      path.setAttribute("stroke-linecap", "round"); path.setAttribute("opacity", "0.8");
      svg.appendChild(path);
    }
  }

  // X-axis labels
  for (let i = 0; i < labels.length; i++) {
    const x = padL + (i / Math.max(1, labels.length - 1)) * chartW;
    const txt = document.createElementNS(ns, "text");
    txt.setAttribute("x", String(x)); txt.setAttribute("y", String(h - 2));
    txt.setAttribute("text-anchor", "middle");
    txt.setAttribute("fill", "rgba(154,140,122,0.4)"); txt.setAttribute("font-size", "7");
    txt.textContent = labels[i];
    svg.appendChild(txt);
  }
  parent.appendChild(svg);

  // Legend
  const legend = document.createElement("div");
  legend.style.cssText = "display:flex;flex-wrap:wrap;gap:6px 12px;justify-content:center;margin-top:4px;";
  for (const s of series) {
    const item = document.createElement("div");
    item.style.cssText = "display:flex;align-items:center;gap:4px;font-size:9px;color:#6a5a4a;";
    const dot = document.createElement("div");
    dot.style.cssText = `width:6px;height:6px;border-radius:50%;background:${s.color};`;
    item.appendChild(dot);
    const nm = document.createElement("span");
    nm.textContent = s.name;
    item.appendChild(nm);
    legend.appendChild(item);
  }
  parent.appendChild(legend);
}

// ============================================================
// RENDER: STATS DASHBOARD
// ============================================================

async function renderStatsSection(root) {
  // Minimal weekly calendar
  const weekData = getWeeklyCalendarData();
  const weekGrid = document.createElement("div");
  weekGrid.className = "otw-week-grid";
  root.appendChild(weekGrid);

  for (const day of weekData) {
    const cell = document.createElement("div");
    cell.className = "otw-week-day" + (day.isToday ? " today" : "") + (day.status ? " done" : "");
    const lbl = document.createElement("div");
    lbl.className = "otw-day-label";
    lbl.textContent = day.label;
    cell.appendChild(lbl);
    const num = document.createElement("div");
    num.className = "otw-day-num";
    num.textContent = day.num;
    cell.appendChild(num);
    const icon = document.createElement("div");
    icon.className = "otw-day-icon";
    if (day.status === "done") {
      if (day.type === "discipline") { icon.textContent = "\uD83D\uDC8E"; }
      else if (day.type === "flow") { icon.textContent = "\uD83C\uDF0A"; }
      else { icon.textContent = "\u2713"; icon.style.color = THEME.systemGreen; }
    } else if (day.isToday) {
      icon.textContent = "\u2022"; icon.style.color = THEME.color; icon.style.animation = "otw-pulse-glow 2s ease-in-out infinite";
    } else if (day.isPast) {
      icon.textContent = "\u2014"; icon.style.color = "#2a2520";
    }
    cell.appendChild(icon);
    weekGrid.appendChild(cell);
  }

  // Body Strength Heatmap — using actual SVG file
  const muscleLevels = await getMuscleLevelData();
  const svgContent = await loadBodySvg();

  if (svgContent) {
    // Use actual Muscle Man/Woman SVG with overlay hotspots
    const svgFigure = buildSvgWithOverlay(svgContent, muscleLevels, (region) => {
      showMuscleProgressPopup(region, muscleLevels);
    });
    svgFigure.style.margin = "16px auto 8px";
    root.appendChild(svgFigure);
  } else {
    // Fallback to programmatic SVG
    const hmWrap = document.createElement("div");
    hmWrap.className = "otw-heatmap-wrap";
    root.appendChild(hmWrap);
    const fallbackSvg = buildFallbackBodySvg(muscleLevels, (region) => {
      showMuscleProgressPopup(region, muscleLevels);
    });
    hmWrap.appendChild(fallbackSvg);
  }

  // Compact legend
  const legend = document.createElement("div");
  legend.className = "otw-heatmap-legend";
  const legendItems = [
    { label: "Untrained", color: "#6a6a6a" },
    { label: "Beginner", color: "#a89860" },
    { label: "Intermediate", color: "#6a8a9a" },
    { label: "Elite", color: "#9a6a7a" },
  ];
  for (const item of legendItems) {
    const li = document.createElement("div");
    li.className = "otw-heatmap-legend-item";
    const dot = document.createElement("div");
    dot.className = "otw-heatmap-legend-dot";
    dot.style.background = item.color;
    li.appendChild(dot);
    const txt = document.createElement("span");
    txt.textContent = item.label;
    li.appendChild(txt);
    legend.appendChild(li);
  }
  root.appendChild(legend);

  // "Progress" button
  const progressBtn = document.createElement("button");
  progressBtn.textContent = "PROGRESS";
  progressBtn.className = "otw-btn otw-btn-secondary";
  progressBtn.style.cssText += "width:100%;margin-top:8px;font-size:11px;padding:10px;";
  progressBtn.onclick = () => showOverallProgressPopup(muscleLevels);
  root.appendChild(progressBtn);
}

// ============================================================
// RENDER: MUSCLE GROUP SELECTION (first-time entry)
// ============================================================

async function renderMuscleSelection(root) {
  const selectedMuscles = new Set();
  const selectedSubgroups = new Map();

  // ── "Start New Workout" button HIGH at the top ──
  const startBtnTop = document.createElement("button");
  startBtnTop.textContent = "\uD83C\uDFCB\uFE0F START NEW WORKOUT";
  startBtnTop.className = "otw-btn otw-btn-primary";
  startBtnTop.style.cssText += "padding:14px 24px;font-size:14px;font-weight:700;width:100%;margin-bottom:16px;";
  startBtnTop.onclick = () => scrollToMuscleSelect();
  root.appendChild(startBtnTop);

  // Stats dashboard
  await renderStatsSection(root);

  // ── Muscle Selection Section ──
  const selAnchor = document.createElement("div");
  selAnchor.id = "otw-muscle-select";
  root.appendChild(selAnchor);

  function scrollToMuscleSelect() {
    selAnchor.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const selLabel = document.createElement("div");
  selLabel.className = "otw-section-label";
  selLabel.style.marginTop = "28px";
  selLabel.textContent = "SELECT MUSCLE GROUPS";
  root.appendChild(selLabel);

  const selDesc = document.createElement("div");
  selDesc.style.cssText = `color:${THEME.colorMuted};font-size:11px;text-align:center;margin-bottom:12px;`;
  selDesc.textContent = "Tap muscles on the figure or use the buttons below";
  root.appendChild(selDesc);

  // Region → parent muscle group mapping for the selector
  const REGION_TO_MUSCLE = {
    neck: "Neck", chest: "Chest", front_delts: "Shoulders", rear_delts: "Shoulders",
    biceps: "Arms", triceps: "Arms", forearms: "Arms", core: "Core",
    quads: "Legs", calves: "Legs", hamstrings: "Legs", glutes: "Legs",
    traps: "Back", lats: "Back", lower_back: "Back",
  };

  // Build interactive muscle selector with actual SVG
  const svgContent = await loadBodySvg();
  const selectorOverlayEls = []; // for visual updates

  if (svgContent) {
    // Use actual SVG with overlay hotspots for selection
    const selectorWrap = document.createElement("div");
    selectorWrap.style.cssText = "position:relative;width:100%;max-width:220px;margin:0 auto 12px;";

    const svgHolder = document.createElement("div");
    svgHolder.style.cssText = "width:100%;filter:saturate(0.15) brightness(0.4);transition:filter 0.3s;";
    svgHolder.innerHTML = svgContent;
    const svgEl = svgHolder.querySelector("svg");
    if (svgEl) { svgEl.style.width = "100%"; svgEl.style.height = "auto"; svgEl.style.display = "block"; }
    selectorWrap.appendChild(svgHolder);

    const overlay = document.createElement("div");
    overlay.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;";
    selectorWrap.appendChild(overlay);

    // Create hotspots for selection
    const allHotspots = { ...SVG_HOTSPOTS.front, ...SVG_HOTSPOTS.rightMirror };
    for (const [region, bounds] of Object.entries(allHotspots)) {
      const hs = document.createElement("div");
      hs.style.cssText = `position:absolute;top:${bounds.top}%;left:${bounds.left}%;width:${bounds.width}%;height:${bounds.height}%;cursor:pointer;border-radius:4px;transition:background 0.15s, border-color 0.15s;border:1px solid transparent;`;
      hs.dataset.region = region;
      selectorOverlayEls.push(hs);

      hs.addEventListener("click", (e) => {
        e.stopPropagation();
        const parentMuscle = REGION_TO_MUSCLE[region];
        if (!parentMuscle) return;
        if (selectedMuscles.has(parentMuscle)) {
          selectedMuscles.delete(parentMuscle);
        } else {
          selectedMuscles.add(parentMuscle);
        }
        updateSelectorVisuals();
        updateToggleButtons();
      });
      overlay.appendChild(hs);
    }

    root.appendChild(selectorWrap);
  } else {
    // Fallback: programmatic SVG selector
    const selectorWrap = document.createElement("div");
    selectorWrap.className = "otw-heatmap-wrap";
    selectorWrap.style.marginBottom = "12px";
    root.appendChild(selectorWrap);

    const ns = "http://www.w3.org/2000/svg";
    const frontPaths = {
      neck:'<path d="M44,24 L56,24 L55,31 L45,31 Z"/>',
      front_delts:'<path d="M31,33 C25,33 19,36 18,43 L26,43 L31,37 Z"/><path d="M69,33 C75,33 81,36 82,43 L74,43 L69,37 Z"/>',
      chest:'<path d="M31,37 L49,37 L49,55 C49,57 42,60 33,58 L31,56 Z"/><path d="M51,37 L69,37 L69,56 L67,58 C58,60 51,57 51,55 Z"/>',
      biceps:'<path d="M18,43 L26,43 L26,65 C25,67 19,67 18,65 Z"/><path d="M74,43 L82,43 L82,65 C81,67 75,67 74,65 Z"/>',
      forearms:'<path d="M18,68 L26,68 L24,96 L16,96 Z"/><path d="M74,68 L82,68 L84,96 L76,96 Z"/>',
      core:'<path d="M33,58 L67,58 L65,82 L35,82 Z"/>',
      quads:'<path d="M35,84 L49,84 L48,136 L34,136 Z"/><path d="M51,84 L65,84 L66,136 L52,136 Z"/>',
      calves:'<path d="M35,140 L48,140 L46,190 L37,190 Z"/><path d="M52,140 L65,140 L63,190 L54,190 Z"/>',
    };
    const svg = document.createElementNS(ns, "svg");
    svg.setAttribute("viewBox", "0 0 100 210");
    svg.setAttribute("class", "otw-heatmap-svg");
    const headG = document.createElementNS(ns, "g");
    headG.innerHTML = '<ellipse cx="50" cy="14" rx="10" ry="11" fill="#0c0c0c" stroke="#2a2520" stroke-width="0.8"/>';
    svg.appendChild(headG);
    for (const [region, pathData] of Object.entries(frontPaths)) {
      const g = document.createElementNS(ns, "g");
      g.setAttribute("fill", "#1a1816"); g.setAttribute("stroke", "#2a2520"); g.setAttribute("stroke-width", "0.6");
      g.style.cursor = "pointer"; g.style.transition = "fill 0.15s"; g.innerHTML = pathData;
      selectorOverlayEls.push(g);
      g.dataset.region = region;
      g.addEventListener("click", (e) => {
        e.stopPropagation();
        const parentMuscle = REGION_TO_MUSCLE[region];
        if (!parentMuscle) return;
        if (selectedMuscles.has(parentMuscle)) selectedMuscles.delete(parentMuscle);
        else selectedMuscles.add(parentMuscle);
        updateSelectorVisuals();
        updateToggleButtons();
      });
      svg.appendChild(g);
    }
    selectorWrap.appendChild(svg);
  }

  function updateSelectorVisuals() {
    for (const el of selectorOverlayEls) {
      const region = el.dataset.region;
      const parentMuscle = REGION_TO_MUSCLE[region];
      const isSelected = parentMuscle && selectedMuscles.has(parentMuscle);
      if (el.tagName === "DIV" || el.tagName === "div") {
        // Overlay hotspot div
        el.style.background = isSelected ? THEME.color + "40" : "transparent";
        el.style.borderColor = isSelected ? THEME.color + "60" : "transparent";
      } else {
        // SVG group
        el.setAttribute("fill", isSelected ? THEME.color + "80" : "#1a1816");
        el.setAttribute("stroke", isSelected ? THEME.color + "60" : "#2a2520");
      }
    }
  }

  // Muscle group toggle buttons (still available as secondary selection method)
  const muscleGrid = document.createElement("div");
  muscleGrid.style.cssText = "display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-bottom:8px;";
  root.appendChild(muscleGrid);

  const subgroupArea = document.createElement("div");
  subgroupArea.style.cssText = "display:flex;flex-direction:column;gap:8px;width:100%;";
  root.appendChild(subgroupArea);

  const toggleButtons = new Map();

  Object.entries(MUSCLE_GROUPS).forEach(([name, config]) => {
    const btn = document.createElement("button");
    btn.className = "otw-muscle-toggle";
    btn.textContent = `${config.icon} ${name}`;
    muscleGrid.appendChild(btn);
    toggleButtons.set(name, btn);

    let subgroupContainer = null;
    if (config.subgroups) {
      subgroupContainer = document.createElement("div");
      subgroupContainer.className = "otw-subgroup-container";
      subgroupContainer.style.cssText += `display:flex;flex-wrap:wrap;gap:8px;background:#0c0c0c;border:1px solid ${THEME.colorBorder};border-radius:4px;`;
      const subLabel = document.createElement("div");
      subLabel.style.cssText = `width:100%;color:${THEME.colorMuted};font-size:11px;margin-bottom:4px;`;
      subLabel.textContent = name + " subgroups:";
      subgroupContainer.appendChild(subLabel);
      selectedSubgroups.set(name, new Set());

      config.subgroups.forEach(sub => {
        const subBtn = document.createElement("button");
        subBtn.className = "otw-sub-toggle";
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
        selectedMuscles.delete(name);
        btn.classList.remove("active");
        if (subgroupContainer) subgroupContainer.classList.remove("expanded");
      } else {
        selectedMuscles.add(name);
        btn.classList.add("active");
        if (subgroupContainer) subgroupContainer.classList.add("expanded");
      }
      updateSelectorVisuals();
    };
  });

  function updateToggleButtons() {
    for (const [name, btn] of toggleButtons) {
      if (selectedMuscles.has(name)) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
  }

  // Start button (bottom)
  const startBtn = document.createElement("button");
  startBtn.textContent = "\uD83C\uDFCB\uFE0F START WORKOUT";
  startBtn.className = "otw-btn otw-btn-primary";
  startBtn.style.cssText += "padding:16px 24px;font-size:15px;font-weight:700;margin-top:16px;";
  startBtn.onclick = async () => {
    if (selectedMuscles.size === 0) { notice("Please select at least one muscle group"); return; }

    // Build final muscle list: use subgroups if selected, otherwise the parent group
    const muscleGroupsArray = [];
    selectedMuscles.forEach(muscle => {
      const subs = selectedSubgroups.get(muscle);
      if (subs && subs.size > 0) {
        subs.forEach(sub => muscleGroupsArray.push(sub));
      } else {
        muscleGroupsArray.push(muscle);
      }
    });

    // Load previous exercises for these muscle groups
    const loadedExercises = loadPreviousExercises(muscleGroupsArray);

    // Save to frontmatter and update local state
    muscleGroups = muscleGroupsArray;
    exercises = loadedExercises;
    currentMuscleIndex = 0;

    await setMultipleData({
      muscleGroups: muscleGroups,
      exercises: exercises,
      currentMuscleIndex: 0,
      Workout: false,
      "Workout-Type": "",
      Timestamp: moment().format(),
    });

    // Re-render — now we'll enter workout tracking mode
    render();
  };
  root.appendChild(startBtn);
}

// ============================================================
// MAIN RENDER
// ============================================================

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

  // No muscle groups selected yet — show selection screen
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
  const title = document.createElement("h2");
  title.className = "otw-title";
  title.textContent = currentMuscle.toUpperCase();
  header.appendChild(title);
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
