# Guide: Converting `Workout session.md` into an Olen Template

This document explains how the standalone `Workout session.md` (a dataviewjs script) was converted into `Workout.js` / `workout.tpl` — a proper built-in template for the Olen plugin. It covers the architecture, every decision made, every function required, and what to remember if you ever need to do this again for another activity.

---

## Table of Contents

1. [Understanding the Problem](#1-understanding-the-problem)
2. [How the Olen Template System Works](#2-how-the-olen-template-system-works)
3. [The Core Architectural Shift](#3-the-core-architectural-shift)
4. [The `ctx` Object — Your Only API](#4-the-ctx-object--your-only-api)
5. [File Structure and Build Pipeline](#5-file-structure-and-build-pipeline)
6. [Function-by-Function Breakdown](#6-function-by-function-breakdown)
7. [How State is Managed](#7-how-state-is-managed)
8. [How Completion Detection Works](#8-how-completion-detection-works)
9. [Post-Completion Navigation](#9-post-completion-navigation)
10. [CSS and Mobile Compatibility](#10-css-and-mobile-compatibility)
11. [Integration with Plugin Settings](#11-integration-with-plugin-settings)
12. [Checklist — What to Remember if Doing This Again](#12-checklist--what-to-remember-if-doing-this-again)

---

## 1. Understanding the Problem

### What `Workout session.md` was

`Workout session.md` was a standalone Obsidian note containing ~877 lines inside a single ` ```dataviewjs ``` ` code block. It was a full workout management hub that:

- Showed weekly stats, recent workout history, and action buttons
- Let you select muscle groups and start a new workout
- **Created a new daily note** (e.g. `2025-06-15.md`) with YAML frontmatter AND a ~600-line minified JavaScript block injected via `generateWorkoutInlineCode()`
- That daily note would then render its own UI: exercise cards, set tracking, finish modal

### The fundamental problem

Every daily workout note contained a **copy of the entire UI engine** as inline code. This meant:

- **Bloated daily notes**: Each workout file was thousands of lines
- **Duplicate code**: The same logic existed in every daily note
- **No centralized updates**: Fixing a bug required modifying every past note
- **Hardcoded vault paths**: Constants like `VAULT_NAME`, `WORKOUT_FOLDER`, `STATS_FILE`, and `EXERCISE_DB_FOLDER` were baked into the generated code with no way to change them from settings
- **Incompatible with Olen**: The Olen plugin has its own template system — this standalone approach couldn't plug into it

### The goal

Turn the workout into an **Olen template** where:

- The UI and all logic lives permanently in one file (`Workout.js` → `workout.tpl`)
- Daily notes only store **YAML frontmatter** (exercises, muscle groups, completion status)
- All vault paths are configurable via a `SETTINGS` block at the top
- The template integrates with Olen's workspace lifecycle (start activity → open workspace → detect completion → award XP)

---

## 2. How the Olen Template System Works

### The chain of events

```
User clicks "Enter Workspace" on Olen Dashboard
    ↓
WorkspaceView.onOpen() is called
    ↓
It checks: does this activity have a workspaceTemplate?
    ↓  YES
WorkspaceView.renderTemplateMode() runs
    ↓
It calls findOrCreateDailyNote() → creates "YYYY-MM-DD.md" in the activity folder
    ↓
TemplateEngine.render(templateId, file, container) is called
    ↓
TemplateEngine looks up the template:
  1. First checks BUILTIN_TEMPLATES[templateId] (e.g. "workout" → workout.tpl source)
  2. If not found, tries loading from vault as a .js file path
    ↓
Template source is executed via: new Function("ctx", source)(ctx)
    ↓
The template receives `ctx` and renders UI into ctx.container
    ↓
WorkspaceView watches metadata cache for changes to the daily note
    ↓
When the template sets the activity property to `true` in frontmatter
(e.g. Workout: true), WorkspaceView detects it and calls applyTemplateCompletion()
    ↓
XP is awarded, boss damage is applied, activeWorkspace is cleared
```

### Template registration

Built-in templates are registered in `Olen/src/templates/builtins/index.ts`:

```javascript
import workoutSource from "./workout.tpl";

export const BUILTIN_TEMPLATES: Record<string, string> = {
  workout: workoutSource,
};
```

The `.tpl` file is imported as raw text by esbuild using the text loader configured in `esbuild.config.mjs`:

```javascript
loader: { ".tpl": "text" }
```

This means `workout.tpl` is just a copy of `Workout.js` — they must always be kept in sync.

### Activity configuration

In Olen settings, an activity must have:

- `hasWorkspace: true` — so clicking "Enter Workspace" opens the WorkspaceView
- `workspaceTemplate: "workout"` — the template ID (matches the key in `BUILTIN_TEMPLATES`)
- `property: "Workout"` — the frontmatter key that WorkspaceView watches for completion
- `folder: "Personal Life/01 Workout"` — where daily notes are created

---

## 3. The Core Architectural Shift

### Before (Workout session.md)

```
Workout session.md (hub)
    ↓ user clicks "Start Workout"
    ↓ calls createWorkoutNote()
    ↓ calls generateWorkoutInlineCode() → ~600 lines of minified JS
    ↓
Creates: 2025-06-15.md
    ---
    Workout: false
    exercises: [...]
    muscleGroups: [...]
    ---
    ```dataviewjs
    // IN-WORKOUT TRACKER v3.7
    // ... 600 lines of minified code that renders the entire UI ...
    ```
```

The daily note **is** the app. It contains both the data AND the code.

### After (Olen template)

```
Olen Dashboard → "Enter Workspace" → WorkspaceView
    ↓ loads template "workout" via TemplateEngine
    ↓ creates or finds today's daily note
    ↓ renders Workout.js with ctx bound to that note
    ↓
Daily note only contains:
    ---
    activity: workout
    Workout: false
    exercises: [...]
    muscleGroups: [...]
    currentMuscleIndex: 0
    ---
```

The template lives forever in one place. Daily notes are pure data.

### What was removed from the original

| Feature | In original | In template | Why removed/changed |
|---------|------------|-------------|-------------------|
| `generateWorkoutInlineCode()` | Generates ~600 lines of inline JS | Deleted entirely | The template IS the code — no need to inject it |
| `createWorkoutNote()` | Creates daily note with inline code | `findOrCreateDailyNote()` in WorkspaceView | Olen handles note creation |
| `saveToFile()` via regex replace | Regex-replaces YAML in file content | `ctx.setMultipleData()` | Olen provides a proper frontmatter API |
| `dv.current()` / `dv.el()` | Dataview API | `ctx.getData()` / `ctx.container` | Template system replaces Dataview |
| `app.vault.getAbstractFileByPath()` | Direct Obsidian API | `ctx.getFileMetadata()` / `ctx.readFile()` | Template has wrapped helpers |
| `window.location.href = "obsidian://..."` | URL scheme navigation | `ctx.plugin.activateDashboardView()` | Plugin-internal navigation |
| Hub dashboard (weekly stats, recent history) | Full dashboard with stats cards | Not included | The Olen dashboard replaces this functionality |
| Personal stats modal | Edit weight/height/birthdate | Not included | Out of scope — personal stats are edited via the vault file |
| Add strength standard modal | Create exercise DB files | Not included | Out of scope — exercise files are created manually |

---

## 4. The `ctx` Object — Your Only API

When a template executes, it receives a single argument: `ctx`. This is your entire interface to Obsidian and the plugin. The template destructures it at the top:

```javascript
const { container, getData, setData, setMultipleData, app, moment, notice,
        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;
```

### Data binding

| Method | What it does |
|--------|-------------|
| `getData(key)` | Read a single frontmatter value from the current daily note |
| `getData()` | Read all frontmatter as an object |
| `setData(key, value)` | Write a single frontmatter key (async) |
| `setMultipleData({...})` | Write multiple frontmatter keys at once (async) |

These are backed by `app.fileManager.processFrontMatter()` internally, which properly handles YAML serialization — unlike the original's regex-based approach.

### Vault helpers

| Method | What it does | Original equivalent |
|--------|-------------|-------------------|
| `readFile(path)` | Read raw text content of any vault file | `app.vault.read(file)` |
| `getFilesInFolder(folderPath)` | Get all markdown files in a folder | `app.vault.getMarkdownFiles().filter(...)` |
| `getFileMetadata(path)` | Get frontmatter of any file by path | `app.metadataCache.getFileCache(file)?.frontmatter` |

### Other utilities

| Property | What it is |
|----------|-----------|
| `container` | The DOM element to render into |
| `file` | The current daily note `TFile` |
| `app` | The Obsidian `App` instance (for anything not covered above) |
| `moment` | The `moment.js` instance (provided by Obsidian) |
| `notice(msg)` | Show an Obsidian toast notification |
| `createEl(tag, attrs)` | Shorthand to create HTML elements |
| `ctx.plugin` | The Olen plugin instance — used to access `settings`, `activateDashboardView()`, etc. |

### Critical difference: `app` vs `ctx` helpers

You can still use `app.vault.getAbstractFileByPath()` directly — and the template does, in `navigateAfterCompletion()`. The `ctx` helpers are convenient wrappers but not mandatory. Use `app` when you need something the helpers don't cover.

---

## 5. File Structure and Build Pipeline

```
Plugin-creation/
├── Templates/
│   └── Workout.js              ← The source-of-truth template file
├── Olen/
│   ├── src/
│   │   ├── templates/
│   │   │   ├── TemplateEngine.ts    ← Loads and executes templates
│   │   │   └── builtins/
│   │   │       ├── index.ts         ← Registry: maps "workout" → workout.tpl
│   │   │       └── workout.tpl      ← COPY of Workout.js (bundled as text)
│   │   ├── views/
│   │   │   └── WorkspaceView.ts     ← Creates daily note, renders template, detects completion
│   │   ├── types.ts                 ← ActivityConfig interface (completionReturnTo field)
│   │   ├── constants.ts             ← DEFAULT_OLEN_SETTINGS (homepage default)
│   │   └── settings/
│   │       └── OlenSettings.ts      ← Settings UI (homepage, completion dropdown)
│   ├── esbuild.config.mjs          ← Build config with ".tpl": "text" loader
│   └── main.js                     ← Built output
└── Workout session.md               ← Original standalone (not modified, kept as reference)
```

### Build steps

```bash
# 1. Edit Templates/Workout.js (the source of truth)
# 2. Copy to the builtins folder
cp Templates/Workout.js Olen/src/templates/builtins/workout.tpl

# 3. Build the plugin
cd Olen && npm run build
```

The `.tpl` extension triggers esbuild's text loader, which imports the file as a raw string constant. This string is then used by `new Function("ctx", source)` at runtime.

---

## 6. Function-by-Function Breakdown

### Utility Functions

| Function | Purpose | Notes |
|----------|---------|-------|
| `addCorners(el, color, size)` | Decorative corner borders on cards | Purely visual — ported directly from original's `createCorners()` |
| `calculate1RM(weight, reps)` | Estimate 1-rep max using Epley formula | `weight * (1 + reps/30)` — identical to original |
| `getFirstWorkingSetIndex(sets)` | Find the index of the first non-warmup set | Used for auto-adjusting warmup weights |
| `updateWarmupWeights(ex, newW)` | Recalculate warmup set weights when working weight changes | Warmup percentages: 50%, 70%, 85% |

### Personal Stats & Strength Standards

| Function | Purpose | Key difference from original |
|----------|---------|----------------------------|
| `getPersonalStats()` | Read weight/height/birthdate from a vault file | Uses `getFileMetadata(SETTINGS.personalStatsFile)` instead of `app.vault.getAbstractFileByPath()` |
| `calculateAge(bd)` | Calculate age from birthdate string | Identical logic |
| `parseStandardValue(val)` | Parse strength standard table values (handles `< 1` syntax) | Identical logic |
| `getStrengthStandard(exerciseName)` | Load strength standards from exercise database files | Uses `readFile()` and `getFileMetadata()` from ctx instead of direct vault API. Reads markdown tables with BW and Age columns |
| `interpolateStandard(table, value)` | Linear interpolation between table rows | Identical logic — finds the two closest rows and interpolates |
| `getAveragedStandards(std)` | Average bodyweight and age standards for current user | Combines BW table + Age table interpolation results |
| `determineStrengthLevel(cv, std)` | Map a performance value to a strength tier | Returns `{ level, color, progress, nextTarget }` — tiers: Untrained → Beginner → Novice → Intermediate → Advanced → Elite |
| `calculateStrengthLevel(name, w, r, maxR)` | Full pipeline: load standards → interpolate → determine level | Handles both weighted (1RM) and bodyweight (max reps) exercises |
| `hasStrengthStandard(name)` | Check if an exercise has valid strength standard data | Quick boolean check |

### Workout Data

| Function | Purpose | Key difference from original |
|----------|---------|----------------------------|
| `getExercisePR(name)` | Scan all past workout notes to find the all-time best performance | Uses `getFilesInFolder(SETTINGS.workoutFolder)` and `getFileMetadata()` instead of `app.vault.getMarkdownFiles().filter()` |
| `getLastWorkoutForMuscleGroup(muscleGroup)` | Find the most recent workout that trained a specific muscle group | Sorts files by basename (descending date), skips current note via `file.path` |
| `loadPreviousExercises(selectedMuscleGroups)` | Load exercises from the last workout for each selected muscle group | Resets `completed: false` on all sets so you start fresh |

### State Management

| Function | Purpose |
|----------|---------|
| `saveState()` | Persist current `exercises` and `currentMuscleIndex` to frontmatter via `setMultipleData()` |

### Modal System

| Function | Purpose |
|----------|---------|
| `createModal(title, contentBuilder)` | Create a full-screen modal overlay with fade-in animation |
| `closeModal()` | Fade out and remove the active modal |

### Post-Completion Navigation

| Function | Purpose |
|----------|---------|
| `getReturnDestination()` | Look up the activity's `completionReturnTo` setting from plugin config |
| `navigateAfterCompletion()` | Navigate based on the destination: `"dashboard"` → activate dashboard view, `"stay"` → do nothing, `"homepage"` → open the global homepage file |

### Workout Lifecycle

| Function | Purpose |
|----------|---------|
| `finishWorkout(type)` | Set `Workout: true`, `Workout-Type`, `Timestamp`, save exercises, then navigate |
| `openFinishModal()` | Build session analytics (strength levels, PRs, progress bars) and show the discipline/flow choice |
| `openAddExerciseModal(muscle)` | Modal for adding a new exercise with warmup toggle and weight input |

### Render Functions

| Function | Purpose |
|----------|---------|
| `render()` | Main render — decides between 3 states: completed summary, muscle selection, or active workout |
| `renderMuscleSelection(root)` | First-time entry: toggle buttons for muscle groups with expandable subgroups |
| `renderExercise(exContainer, ex)` | Full exercise card: name, strength badge, PR info, progress bar, set rows, add/delete controls |
| `renderSet(setsContainer, set, setIdx, ex, warmupRefs)` | Individual set row: checkbox, weight input, reps +/- controls, warmup badge, delete button |

---

## 7. How State is Managed

### State flow

```
User interaction (tap checkbox, change weight, navigate)
    ↓
Update in-memory variables (exercises, currentMuscleIndex)
    ↓
Call saveState() → setMultipleData() → writes to YAML frontmatter
    ↓
Obsidian's metadata cache updates
    ↓
WorkspaceView's metadata watcher fires (if completion property changed)
```

### What lives in frontmatter

```yaml
---
activity: workout
Workout: false           # completion flag — watched by WorkspaceView
Workout-Type: ""         # "discipline" or "flow"
Timestamp: "2025-06-15T..."
muscleGroups:            # array of selected muscle group names
  - Chest
  - Biceps
exercises:               # array of exercise objects with full set data
  - name: Bench Press
    muscle: Chest
    muscleGroup: Chest
    sets:
      - weight: 30
        reps: 10
        completed: false
        isWarmup: true
      - weight: 60
        reps: 10
        completed: true
        isWarmup: false
currentMuscleIndex: 0    # which muscle group tab is active
---
```

### The original's regex-based save vs the template's frontmatter API

**Original** (`saveToFile()` in the inline code):
```javascript
let c = await app.vault.read(f);
c = c.replace(/exercises: \[.*?\](?=\n)/s, 'exercises: ' + JSON.stringify(exercises));
c = c.replace(/currentMuscleIndex: \d+/, 'currentMuscleIndex: ' + currentMuscleIndex);
await app.vault.modify(f, c);
```

This is fragile — regex on file content can break if the structure changes or if values contain special characters.

**Template** (`saveState()`):
```javascript
await setMultipleData({
  exercises: exercises,
  currentMuscleIndex: currentMuscleIndex,
});
```

This uses Obsidian's `processFrontMatter()` internally, which properly handles YAML serialization, nested arrays, objects, and special characters.

---

## 8. How Completion Detection Works

This is the most critical integration point. The entire Olen system (XP, boss damage, clearing the workspace) depends on detecting when a template's activity is "done."

### The mechanism

1. Template sets the activity property to `true` in frontmatter:
   ```javascript
   await setMultipleData({ Workout: true, "Workout-Type": type, ... });
   ```

2. Obsidian's `metadataCache` fires a `"changed"` event for the file.

3. WorkspaceView has a listener registered (in `renderTemplateMode()`):
   ```typescript
   this.registerEvent(
     this.app.metadataCache.on("changed", (changedFile) => {
       if (changedFile.path !== file.path) return;
       const fm = cache?.frontmatter;
       if (fm?.[activity.property] === true) {
         this.applyTemplateCompletion(workspace, activity, completionType);
       }
     })
   );
   ```

4. `applyTemplateCompletion()` then:
   - Determines the XP multiplier from the completion type (discipline/flow)
   - Awards category XP
   - Deals boss damage
   - Clears `activeWorkspace`
   - Saves settings

### Critical: the property name must match

The activity's `property` field in settings (e.g. `"Workout"`) must exactly match the frontmatter key the template writes. If the template writes `Workout: true` but the activity property is `"workout"` (lowercase), completion will never be detected.

### The `completionApplied` guard

WorkspaceView uses a boolean `completionApplied` to prevent double-processing. The metadata cache can fire multiple times for the same change, so this guard ensures XP/damage is only applied once.

---

## 9. Post-Completion Navigation

After the template marks the workout complete and WorkspaceView processes it, the template can also navigate the user somewhere. This is handled by `navigateAfterCompletion()`.

### Three destinations

| Value | Behavior |
|-------|----------|
| `"dashboard"` (default) | Calls `ctx.plugin.activateDashboardView()` after 600ms |
| `"stay"` | Does nothing — user stays on the completion summary |
| `"homepage"` | Reads `ctx.plugin.settings.homepage`, opens that file |

### How it reads the setting

```javascript
function getReturnDestination() {
  const activityId = getData("activity");  // from the daily note's frontmatter
  const activities = ctx.plugin?.settings?.activities;
  const actConfig = activities.find(a => a.id === activityId);
  return actConfig?.completionReturnTo || "dashboard";
}
```

The per-activity `completionReturnTo` is set in Olen Settings → Activities → Configure → "After completion" dropdown. The global `homepage` path is set in Olen Settings → Profile → "Homepage".

### Why 600ms delay?

```javascript
setTimeout(() => ctx.plugin.activateDashboardView(), 600);
```

This gives time for:
1. The frontmatter write to complete
2. WorkspaceView's completion handler to fire
3. The notice toast to display
4. A smooth visual transition

---

## 10. CSS and Mobile Compatibility

### Obsidian mobile styling issues

Obsidian mobile applies its own styles to buttons and inputs, including:
- `border-radius` (makes buttons circular/pill-shaped)
- Native form element appearance (changes input styling)

### The fix

Every interactive element class includes:
```css
border-radius: 0 !important;
-webkit-appearance: none;
appearance: none;
```

Plus a global catch-all:
```css
.otw-container button, .otw-container input,
.otw-modal-overlay button, .otw-modal-overlay input {
  border-radius: 0 !important;
  -webkit-appearance: none;
  appearance: none;
}
.otw-container input[type="number"] {
  -moz-appearance: textfield;
}
```

### Why inline `<style>` with a dedup check

```javascript
if (!document.getElementById("olen-tpl-workout-v4")) {
  const style = document.createElement("style");
  style.id = "olen-tpl-workout-v4";
  style.textContent = `...`;
  document.head.appendChild(style);
}
```

Templates can be re-rendered (e.g. navigating away and back). Without the ID check, duplicate `<style>` elements would accumulate. The versioned ID (`v4`) ensures old styles are replaced when the template version changes.

### All CSS classes use `otw-` prefix

To avoid conflicts with Obsidian's built-in styles or other plugins, all classes are prefixed with `otw-` (Olen Template Workout).

---

## 11. Integration with Plugin Settings

The template reads from two levels of settings:

### Template-level settings (SETTINGS block)

```javascript
const SETTINGS = {
  workoutFolder: "Personal Life/01 Workout",
  personalStatsFile: "Personal Life/Personal Stats.md",
  exerciseDbFolder: "Home/Activities/Exercises database",
  defaultWeight: 61,
  defaultHeight: 175,
  defaultBirthdate: "2005-11-29",
};
```

These are vault-specific paths and defaults. They're at the top of the file so users can easily find and edit them without touching any code.

### Plugin-level settings (accessed via ctx.plugin.settings)

| Setting | Where defined | How accessed |
|---------|--------------|-------------|
| `completionReturnTo` | `ActivityConfig` in types.ts | `ctx.plugin.settings.activities.find(a => a.id === activityId).completionReturnTo` |
| `homepage` | `OlenSettings` in types.ts | `ctx.plugin.settings.homepage` |

### Adding a new plugin setting (the pattern)

If you need a new setting the template can read:

1. **types.ts** — Add the field to the relevant interface (`OlenSettings` for global, `ActivityConfig` for per-activity)
2. **constants.ts** — Add a default value in `DEFAULT_OLEN_SETTINGS` or `DEFAULT_ACTIVITIES`
3. **OlenSettings.ts** — Add a UI control (text input, dropdown, toggle) in the appropriate section
4. **Template** — Read it via `ctx.plugin.settings.yourNewField`
5. **Copy + rebuild** — `cp Workout.js workout.tpl && npm run build`

---

## 12. Checklist — What to Remember if Doing This Again

### Before you start

- [ ] Read `TemplateEngine.ts` to understand the `ctx` object — this is your entire API
- [ ] Read `WorkspaceView.ts` to understand how templates are loaded, how daily notes are created, and how completion is detected
- [ ] Read `builtins/index.ts` to understand template registration
- [ ] Check `esbuild.config.mjs` — confirm the `.tpl` text loader is present
- [ ] Understand the activity's `property` field — this is the frontmatter key that triggers completion

### Porting the code

- [ ] **Replace all direct Obsidian API calls** with `ctx` helpers:
  - `app.vault.getAbstractFileByPath(path)` → `getFileMetadata(path)` for frontmatter
  - `app.vault.read(file)` → `readFile(path)`
  - `app.vault.getMarkdownFiles().filter(...)` → `getFilesInFolder(folderPath)`
  - `app.metadataCache.getFileCache(file)?.frontmatter` → `getFileMetadata(path)`
  - `new Notice(msg)` → `notice(msg)`
  - `dv.el("div", ...)` → `document.createElement("div")` appended to `container`
  - `dv.current()` → `getData()`
- [ ] **Replace all data writes** with `setData()` / `setMultipleData()` — never regex-replace file content
- [ ] **Remove inline code generation** — there should be no `generateXxxInlineCode()` function; the template IS the code
- [ ] **Remove note creation logic** — Olen's `findOrCreateDailyNote()` handles this
- [ ] **Remove hub/dashboard features** — Olen's dashboard replaces these
- [ ] **Remove `window.location.href` navigation** — use `ctx.plugin.activateDashboardView()` or `app.workspace.getLeaf(false).openFile()`

### Completion integration

- [ ] The template MUST write `[property]: true` to frontmatter to trigger completion
- [ ] It should also write `[property]-Type: "discipline"` or `"flow"` for XP multiplier
- [ ] The property name must match `activity.property` in settings EXACTLY (case-sensitive)
- [ ] Call `navigateAfterCompletion()` after writing completion data

### State architecture

- [ ] All persistent state goes into frontmatter via `setMultipleData()`
- [ ] Keep in-memory variables for UI responsiveness, sync to frontmatter on user actions
- [ ] The template's `render()` must be callable multiple times (re-renders on navigation)
- [ ] Read initial state from `getData()` at the top of the template

### CSS

- [ ] Use a unique prefix for all CSS classes (e.g. `otw-` for workout)
- [ ] Wrap styles in an ID-checked `<style>` block to prevent duplicates
- [ ] Add `border-radius: 0 !important; -webkit-appearance: none; appearance: none;` to ALL buttons and inputs
- [ ] Add `-moz-appearance: textfield;` to number inputs
- [ ] Test on Obsidian mobile — it applies its own aggressive styling

### Build pipeline

- [ ] Edit `Templates/YourTemplate.js` (source of truth)
- [ ] Copy to `Olen/src/templates/builtins/yourtemplate.tpl`
- [ ] Register in `builtins/index.ts`: `import source from "./yourtemplate.tpl"; export const BUILTIN_TEMPLATES = { ..., yourtemplate: source };`
- [ ] Run `cd Olen && npm run build`
- [ ] The built `main.js` is what Obsidian loads

### Settings integration

- [ ] Template-specific paths/defaults go in a `SETTINGS` block at the top of the template file
- [ ] Plugin-wide settings (homepage, completion behavior) go in `types.ts` + `constants.ts` + `OlenSettings.ts`
- [ ] Templates read plugin settings via `ctx.plugin.settings.*`
- [ ] Never hardcode vault paths in logic — always reference `SETTINGS.*`

### Common pitfalls

- **Forgetting to copy .js to .tpl**: The plugin bundles `.tpl`, not `.js`. If you edit `Workout.js` but don't copy it, the plugin uses the old version
- **Forgetting `npm run build`**: Changes to `.ts` files or `.tpl` files aren't reflected until rebuilt
- **Using `dv` (Dataview API)**: Templates don't have access to Dataview. Use `ctx` helpers instead
- **Mutating `getData()` result**: The frontmatter snapshot is a copy. Mutations won't persist — you must call `setData()` / `setMultipleData()`
- **Race conditions with `setMultipleData`**: It's async. If you call it twice rapidly, the second call might overwrite the first. Batch all changes into one `setMultipleData()` call
- **Modals appended to `document.body`**: Modals live outside the template container. They must be cleaned up on template close. The `closeModal()` function handles this, but be aware if you add new modal types
- **The `file` variable**: In the template, `file` refers to the current daily note `TFile`. The original used `dv.current().file` — in the template, it's just `file` (destructured from ctx)

---

## Summary

The conversion boils down to three mental shifts:

1. **Data layer**: Replace regex file manipulation with `ctx.setMultipleData()`. Daily notes are pure YAML.
2. **Code location**: The template file IS the app. No code goes into daily notes.
3. **Integration**: The template talks to Olen via `ctx.plugin` for settings, navigation, and completion — it's not a standalone island anymore.

Everything else — the exercise tracking UI, strength standards, PR lookups, modal system — is the same logic, just rewired to use `ctx` instead of direct Obsidian/Dataview APIs.

---

## Update Log — New Features

### Personal Stats System

A new **Personal Stats** section has been added to the plugin settings under Profile. It stores:

- **Gender** (male/female) — determines which muscle figure is shown on the Strength Heatmap
- **Height** (cm) — stored for user reference and future BMI calculations
- **Birthdate** (YYYY-MM-DD) — used to calculate the user's exact age, which feeds into the workout strength calculator
- **Weight** (kg) — current weight with a logging system
- **Weight Log** — historical weight entries with dates
- **Weight Log Frequency** — configurable reminder interval (twice a week, every week, every 2 weeks, every 3 days, every 5 days, or custom)

**Types**: `PersonalStats`, `WeightEntry`, `Gender`, `WeightLogFrequency` (in `types.ts`)
**Defaults**: `DEFAULT_PERSONAL_STATS` (in `constants.ts`)
**Settings UI**: `renderPersonalStatsSection()` (in `OlenSettings.ts`)

The weight logging system tracks when the user last logged their weight and compares it to their chosen frequency. When it's time to log, a notification card appears on the dashboard prompting them to record their weight. Weight history is displayed as a simple list in settings and can be used for trend graphs on the dashboard.

### Strength Heatmap

A new dashboard section (`heatmap` in the section order) shows two interactive muscle figures (front and back views). The figures are programmatic SVGs with clickable muscle group regions.

**Component**: `StrengthHeatmap.ts`
**Section key**: `"heatmap"` (add to `devConfig.sectionOrder`)

Features:
- **Gender-aware figures**: The silhouette adapts based on the user's gender setting (wider hips for female, wider shoulders for male)
- **Intensity coloring**: Muscle regions are colored based on recent workout activity (green → gold gradient)
- **Click any muscle** → popup appears showing monthly progress for that muscle group, with a toggle for yearly view
- **"Progress" button** → popup with two charts:
  1. Overall body strength trend (all body activities combined)
  2. Per-activity breakdown as multi-line chart
- **"Start New Workout" button** → opens a muscle selector popup where the user taps muscles to select them, then begins a workout

### Muscle Selector

The muscle selector (`showMuscleSelector()`) provides an interactive figure where users tap muscle regions to highlight them. Selected muscles appear as gold chips below the figure. Tapping "Begin Workout" starts the workout workspace.

### Mobile Scroll Fix

All dashboard screens now have `padding-bottom: 120px` to prevent content from being cut off by Obsidian's mobile navigation bar. This applies to:
- `.olen-dashboard` — the main dashboard view
- `.olen-template-root` — template-rendered views (workout, etc.)

### Workout Template v6.0 Changes

The workout template (`workout.tpl` / `Workout.js`) has been updated from v5.0 to v6.0 with major changes:

**Personal Stats from Plugin Settings**
- The template no longer reads from a separate `Personal Stats.md` file
- Instead, it reads from `ctx.plugin.settings.personalStats` (the Olen plugin settings)
- The `PERSONAL` object provides `weight`, `height`, `birthdate`, and `gender`
- `getPersonalStats()` now returns data from plugin settings directly
- This means the user only needs to configure their stats once in Olen Settings, not maintain a separate file

### Workout Template v7.0 Changes (Actual SVG Integration & Glassmorphism)

**Actual SVG File Integration**
- The template now loads the actual `Muscle Man.svg` or `Muscle Woman.svg` files from the vault using `readFile()`
- Gender from `personalStats.gender` determines which SVG file is loaded ("male" → Muscle Man.svg, "female" → Muscle Woman.svg)
- SVG content is cached after first load (`_cachedSvgContent`, `_cachedSvgGender`) for performance
- `buildSvgWithOverlay()` creates a container with the actual SVG (dimmed, desaturated) as background, with transparent clickable hotspot divs positioned over each muscle region
- `SVG_HOTSPOTS` defines percentage-based positions for front, back, and mirrored right-side regions
- Falls back to `buildFallbackBodySvg()` (simple programmatic SVG paths) if the SVG files are not found in the vault
- The same approach is used for both the stats section heatmap and the muscle selection screen

**Dashboard SVG Integration**
- `StrengthHeatmap.ts` now accepts an optional `app: App` parameter
- It attempts to load SVG files from the vault using `app.vault.adapter.read()`
- `renderSvgFigureWithOverlay()` creates a figure with the actual SVG and hotspot overlays
- `DashboardView.ts` passes `this.app` to `renderStrengthHeatmap()`

**Line/Curve Charts Replace Bar Charts**
- All progress charts now use smooth Catmull-Rom spline curves instead of bar charts
- `renderLineChart(parent, labels, values, color)` draws a single smooth curve with area fill, data dots, and x-axis labels
- `renderMultiLineChart(parent, labels, series)` draws multiple smooth curves on the same chart with a color legend
- The per-muscle breakdown in `showOverallProgressPopup()` now shows each muscle as a separate colored line rather than static bars
- The `StrengthHeatmap.ts` dashboard component also uses `drawLineChart()` (same Catmull-Rom algorithm) replacing the old `drawBarChart()`

**Muscle Click → Progress Popup (Improved)**
- Clicking a muscle in the heatmap shows a popup with monthly progress as a smooth curve
- Monthly ↔ Yearly toggle with two side-by-side buttons (instead of a single toggle)
- Yearly view shows 12-month data points as labeled curve (J, F, M, A, M, J, J, A, S, O, N, D)

**Overall Progress Popup (Improved)**
- "PROGRESS" button shows two charts:
  1. Overall Strength — smooth curve of combined workout frequency
  2. By Muscle Group — multi-line chart where each muscle group is a differently colored line with legend

**Stats Section Cleanup (Minimal)**
- Removed stat counter row (this week / this month / all time)
- Removed volume row (total kg / total sets)
- Removed "RECENT SESSIONS" list
- Reduced legend from 6 items to 4 (Untrained, Beginner, Intermediate, Elite)
- The view is now: weekly calendar → muscle figure → compact legend → Progress button

**SVG Muscle Selector (Actual SVG)**
- The muscle selection screen loads the actual SVG (gender-based) with overlay hotspots
- Selected muscles highlight with a semi-transparent gold overlay on the actual anatomical figure
- Falls back to programmatic SVG if files not found
- `updateSelectorVisuals()` handles both DOM div hotspots and SVG group elements depending on which mode is active

**Glassmorphism Aesthetic Overhaul**
- All `.otw-card` elements now use `backdrop-filter: blur(40px) saturate(150%)` with translucent backgrounds
- Buttons have `border-radius: 10px` with subtle gradients and box-shadows
- Primary buttons: linear gradient (#9a8c7a → #7a6c5a) with glow shadow
- Secondary buttons: translucent background (rgba 3%) with thin borders
- Modals use glass background: `rgba(12,10,16,0.95)` with `backdrop-filter: blur(40px)`
- Modal overlay: `backdrop-filter: blur(12px)` (up from 4px)
- Week grid cells: rounded (8px), softer borders (6% opacity)
- Set rows: rounded (10px), transparent backgrounds
- Inputs and controls: rounded (8px), subtle borders
- Overall color palette is darker with reduced contrast (muted colors like `#4d473e` instead of `#6a5a4a`)
- CSS style block ID changed from `olen-tpl-workout-v5` to `olen-tpl-workout-v6`

**Mobile Scroll Fix**
- `.otw-container` has `padding-bottom: 120px` to prevent Obsidian's mobile nav bar from cutting off content
