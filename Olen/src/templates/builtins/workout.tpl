// ============================================================
// Olen Template — Workout Tracker
// Renders inside any note with `activity: workout` in frontmatter.
// All data is read/written via ctx.getData / ctx.setData — the
// note body stays empty; the UI is generated entirely here.
// ============================================================

const { container, getData, setData, setMultipleData, app, moment, notice,
        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;

// ── Configuration ──
const WORKOUT_FOLDER = "Personal Life/01 Workout";
const STATS_FILE = "Personal Life/Personal Stats.md";
const EXERCISE_DB_FOLDER = "Home/Activities/Exercises database";

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
  "Untrained": { color: "#6a6a6a", icon: "\u25CB" },
  "Beginner":  { color: "#a89860", icon: "\u25D0" },
  "Novice":    { color: "#7a9a7d", icon: "\u25D1" },
  "Intermediate": { color: "#6a8a9a", icon: "\u25D5" },
  "Advanced":  { color: "#8a7a9a", icon: "\u25CF" },
  "Elite":     { color: "#9a6a7a", icon: "\u2605" }
};

// ── State (from frontmatter) ──
let exercises = getData("exercises") || [];
let muscleGroups = getData("muscleGroups") || [];
let currentMuscleIndex = getData("currentMuscleIndex") || 0;
const isCompleted = getData("Workout") === true;

// ── Inject styles once ──
if (!document.getElementById("olen-tpl-workout-v1")) {
  const style = document.createElement("style");
  style.id = "olen-tpl-workout-v1";
  style.textContent = `
    .otw-container * { box-sizing: border-box; }
    .otw-container { max-width: 500px; margin: 0 auto; padding: 10px 0; font-family: Georgia, serif; }
    @keyframes otw-breathe { 0%, 100% { box-shadow: inset 0 0 20px rgba(154,140,122,0.03); } 50% { box-shadow: inset 0 0 40px rgba(154,140,122,0.08); } }
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
    .otw-corners { position: absolute; pointer-events: none; }
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

// ── Save current state to frontmatter ──
async function saveState() {
  await setMultipleData({
    exercises: exercises,
    currentMuscleIndex: currentMuscleIndex,
  });
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
  // Re-render to show completion state
  render();
}

function openFinishModal() {
  createModal("Workout Complete", (content) => {
    const summaryDiv = document.createElement("div");
    summaryDiv.className = "otw-summary-complete";
    summaryDiv.innerHTML = "<h2>WORKOUT COMPLETE</h2>";
    content.appendChild(summaryDiv);

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

// ── Main Render ──
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

  // ── Active Workout UI ──
  if (muscleGroups.length === 0) {
    // No muscle groups selected — show empty state
    const empty = document.createElement("div");
    empty.className = "otw-card";
    empty.style.textAlign = "center";
    empty.style.padding = "40px 20px";
    addCorners(empty, THEME.color);
    empty.innerHTML = `
      <div style="font-size:32px;margin-bottom:12px;">\uD83C\uDFCB\uFE0F</div>
      <h2 style="margin:0;color:${THEME.color};font-size:16px;letter-spacing:3px;">WORKOUT</h2>
      <p style="color:${THEME.colorMuted};font-size:13px;margin-top:12px;font-style:italic;">This note has activity: workout but no muscle groups defined.</p>
      <p style="color:${THEME.colorMuted};font-size:12px;margin-top:8px;">Add <code>muscleGroups</code> to the frontmatter to begin tracking.</p>
    `;
    root.appendChild(empty);
    return;
  }

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
