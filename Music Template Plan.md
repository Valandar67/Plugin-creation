# Music Practice Template — Implementation Plan

> Built-in template for Olen, following the same architecture as `workout.tpl`.
> File: `Olen/src/templates/builtins/music/music.tpl`

---

## 1. Overview

A **smart music stand / practice session tracker** that lives inside the Olen workspace system. It provides:

- A **metronome** with configurable BPM
- **Auto-scrolling sheet music** (PDF/image) synced to BPM, bars-per-row, and rows-per-page
- **Pre-configured sessions** (saved practice routines)
- A **practice mode** with play button, vocal count-in, and segment selection
- **Instrument-less playback** (e.g. guitarless backing track) with recording overlay
- A **finish modal** (Discipline / Flow / Skipped) that communicates completion to the Olen plugin
- **Dark theme** — monochrome, no accent colors

---

## 2. File Structure

```
Olen/src/templates/builtins/music/
  music.tpl          ← Main template (JS executed via new Function("ctx", source))
```

### Registration (builtins/index.ts)

```typescript
import musicSource from "./music/music.tpl";

export const BUILTIN_TEMPLATES: Record<string, string> = {
  workout: workoutSource,
  reading: readingSource,
  drawing: drawingSource,
  music: musicSource,          // ← Add
};
```

---

## 3. Template Context — Plugin Integration Points

The template receives `ctx: TemplateContext` and must use the same integration hooks as workout.tpl. Every integration point is listed below.

### 3.1 Context Destructuring

```javascript
const { container, getData, setData, setMultipleData, app, moment, notice,
        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;
```

### 3.2 Activity Config Resolution

```javascript
const _actConfig = ctx.plugin?.settings?.activities?.find(
  a => a.id === getData("activity") || a.workspaceTemplate === "music"
);
const SETTINGS = {
  musicFolder:    _actConfig?.folder || "Activities/Music",
  sheetDbFolder:  _actConfig?.exerciseDbFolder || "Sheet Music",
  // exerciseDbFolder is reused — it's a generic "resource DB" path
};
```

The user must create an Activity in Olen settings with:
- `hasWorkspace: true`
- `workspaceTemplate: "music"`
- `property: "Music"` (the frontmatter key that marks completion)
- `folder:` path to daily music notes
- `exerciseDbFolder:` path to sheet music / song files

### 3.3 Frontmatter Data Keys

| Key | Type | Purpose | When Set |
|-----|------|---------|----------|
| `activity` | string | Activity ID (set by WorkspaceView) | On workspace open |
| `Music` | boolean | Marks session as completed | `finishSession()` |
| `Music-Type` | string | `"discipline"` \| `"flow"` \| `"skipped"` | `finishSession()` |
| `Timestamp` | ISO string | Completion time | `finishSession()` |
| `sessionConfig` | object | BPM, piece, segments, etc. | `saveState()` |
| `practiceLog` | array | Array of practiced segments with durations | `saveState()` |
| `currentSegmentIndex` | number | Where user left off | `saveState()` |
| `totalPracticeTime` | number | Seconds practiced this session | `saveState()` |
| `recordings` | array | Metadata for recorded takes | `saveState()` |

### 3.4 Completion Detection (How WorkspaceView Knows We're Done)

WorkspaceView watches `metadataCache` for changes to the daily note file. When it sees:
- `fm["Music"] === true` → triggers `applyTemplateCompletion()`
- `fm["Music-Type"]` → maps to workspace completion state ("discipline", "flow", "skipped")

This is identical to the workout pattern — the property name comes from `ActivityConfig.property`.

### 3.5 Plugin Effects on Completion

Inside `finishSession(type)`, the template must:

1. **Write frontmatter**: `setMultipleData({ Music: true, "Music-Type": type, Timestamp, ... })`
2. **Apply XP**: Read `workspaceCompletionStates` to find multiplier, then increment `categoryXP[category]`
3. **Apply boss damage**: Decrement `bossCurrentHP` by `actConfig.damagePerCompletion`
4. **Clear workspace**: Set `plugin.settings.activeWorkspace = null`
5. **Save settings**: Call `plugin.saveSettings()`
6. **Navigate**: Call `navigateAfterCompletion()` which reads `actConfig.completionReturnTo`

This is copied verbatim from workout.tpl lines 491-526. Must remain identical to avoid divergence.

### 3.6 Post-Completion Navigation

```javascript
function navigateAfterCompletion() {
  const dest = getReturnDestination(); // reads actConfig.completionReturnTo
  if (dest === "stay") return;
  if (dest === "dashboard") ctx.plugin?.activateDashboardView?.();
  if (dest === "homepage") { /* open homepage file */ }
}
```

---

## 4. UI Architecture

### 4.1 Dark Theme (No Colors)

```javascript
const THEME = {
  bg:           "#0a0a0a",
  card:         "rgba(0,0,0,0.6)",
  border:       "rgba(255,255,255,0.06)",
  borderHover:  "rgba(255,255,255,0.12)",
  text:         "#c8c0b2",
  textMuted:    "#4d473e",
  textDim:      "#3a3a3a",
  accent:       "#888888",      // Neutral gray — no color
  accentHover:  "#999999",
  discipline:   "#888888",      // Gray tones only
  flow:         "#aaaaaa",
};
```

All cards use `backdrop-filter: blur(40px) saturate(150%)` + dark background, matching workout.tpl's glassmorphism.

### 4.2 CSS Injection

```javascript
if (!document.getElementById("olen-tpl-music-v1")) {
  const style = document.createElement("style");
  style.id = "olen-tpl-music-v1";
  style.textContent = `/* ... all music template styles ... */`;
  document.head.appendChild(style);
}
```

Uses `.otm-` prefix (Olen Template Music) to avoid collision with `.otw-` (workout).

### 4.3 Screen Flow

```
LANDING PAGE
  ├── Weekly calendar strip (same pattern as workout)
  ├── "Start New Session" button
  ├── Saved sessions / presets list
  └── Recent practice history
         │
         ▼
SESSION SETUP (modal or inline)
  ├── Select piece / sheet music (from sheetDbFolder)
  ├── Set BPM
  ├── Set bars-per-row, rows-per-page (for auto-scroll calc)
  ├── Select segment/section to practice
  └── Toggle: instrument-less mode + recording
         │
         ▼
PRACTICE VIEW (main session screen)
  ├── Sheet music viewer (PDF/image with auto-scroll)
  ├── Metronome (visual + audio)
  ├── Play / Pause / Stop controls
  ├── Vocal count-in (3-2-1 before starting)
  ├── Segment progress indicator
  ├── BPM adjustment (tap tempo option)
  ├── Timer showing practice duration
  └── [If recording mode] Record indicator + waveform
         │
         ▼
FINISH MODAL
  ├── "SESSION COMPLETE" title
  ├── Session summary (time practiced, segments covered, BPM range)
  ├── "How did it feel?" → Discipline / Flow buttons
  └── Calls finishSession(type)
```

---

## 5. Feature Specifications

### 5.1 Metronome

- **Audio**: Use `AudioContext` + `OscillatorNode` for click sounds (no external files needed)
  - Downbeat: higher pitch (880Hz), short duration (30ms)
  - Other beats: lower pitch (440Hz), short duration (20ms)
- **Visual**: Pulsing dot or pendulum animation synced to BPM
- **Time signature**: Configurable (4/4, 3/4, 6/8, etc.)
- **Tap tempo**: Tap a button rhythmically to set BPM from taps

### 5.2 Auto-Scroll Sheet Music

The core innovation. Given:
- `bpm` — beats per minute
- `beatsPerBar` — from time signature (e.g. 4 for 4/4)
- `barsPerRow` — how many bars fit in one row of the sheet
- `rowsPerPage` — how many rows per page/view

Calculate:
```
secondsPerBar = (beatsPerBar / bpm) * 60
secondsPerRow = secondsPerBar * barsPerRow
secondsPerPage = secondsPerRow * rowsPerPage
```

Scroll behavior:
- **Option A (smooth)**: CSS `transform: translateY()` at constant rate matching the BPM
- **Option B (row-snap)**: Jump to next row every `secondsPerRow` seconds with smooth transition

Sheet music display:
- Use `<img>` for image files (.png, .jpg)
- For PDFs: render via `<canvas>` using Obsidian's built-in PDF.js, or embed as `<iframe>`
- Read files from vault using `readFile()` or `app.vault.readBinary()`

### 5.3 Pre-Configured Sessions (Presets)

Stored as markdown files in the music folder with frontmatter:

```yaml
---
type: preset
piece: "Moonlight Sonata"
bpm: 72
timeSignature: "4/4"
barsPerRow: 4
rowsPerPage: 4
startBar: 1
endBar: 32
instrument: "piano"
---
```

Loaded via `getFilesInFolder()` + `getFileMetadata()` filtering for `type: preset`.

### 5.4 Practice Mode Flow

1. User presses **Play**
2. **Vocal count-in**: Use `SpeechSynthesisUtterance` or pre-generated audio tones for "1, 2, 3, 4" at the configured BPM
3. Sheet music starts auto-scrolling from the configured start point
4. Metronome begins clicking
5. Timer starts counting practice duration
6. On **Stop/Pause**: metronome stops, scroll pauses, timer pauses
7. User can navigate to different segments manually

### 5.5 Instrument-less Mode + Recording

- **Backing track concept**: The template doesn't generate backing tracks (that would require external audio files). Instead, it focuses on the **recording** aspect.
- **Recording**: Use `navigator.mediaDevices.getUserMedia({ audio: true })` + `MediaRecorder` API
- Save recordings as audio blobs, store metadata (timestamp, segment, BPM) in frontmatter
- Playback: Create `<audio>` elements from stored blobs
- Note: Recordings are session-scoped (blob URLs expire). For persistence, would need to write to vault as .webm files using `app.vault.createBinary()`.

### 5.6 Sheet Music Database

Files in `sheetDbFolder` (e.g., `Sheet Music/`):

```
Sheet Music/
  Moonlight Sonata.md
  Bach Cello Suite No 1.md
  ...
```

Each `.md` file has frontmatter:

```yaml
---
title: "Moonlight Sonata"
composer: "Beethoven"
instrument: "Piano"
difficulty: "Intermediate"
barsPerRow: 4
rowsPerPage: 4
defaultBpm: 72
timeSignature: "4/4"
sheetFile: "attachments/moonlight-sonata.pdf"
segments:
  - name: "Exposition"
    startBar: 1
    endBar: 14
  - name: "Development"
    startBar: 15
    endBar: 28
---
```

Template reads these via `getFileMetadata()` to populate the session setup screen.

---

## 6. State Management

### 6.1 In-Memory State

```javascript
let sessionConfig = getData("sessionConfig") || null;
let practiceLog   = getData("practiceLog") || [];
let currentSegmentIndex = getData("currentSegmentIndex") || 0;
let totalPracticeTime   = getData("totalPracticeTime") || 0;
let recordings    = getData("recordings") || [];
const isCompleted = getData("Music") === true;
```

### 6.2 Save State

```javascript
async function saveState() {
  await setMultipleData({
    sessionConfig,
    practiceLog,
    currentSegmentIndex,
    totalPracticeTime,
    recordings,
  });
}
```

Called on every meaningful state change (start, pause, segment change, recording save).

### 6.3 Resume Support

If the user leaves mid-session, the template re-reads frontmatter on next open and restores:
- Which piece was being practiced
- Current segment position
- Total accumulated practice time
- Previous recordings metadata

---

## 7. Finish Modal

Follows the exact same pattern as workout.tpl lines 528-679.

### 7.1 Session Summary

```javascript
async function openFinishModal() {
  const summary = {
    totalTime: formatDuration(totalPracticeTime),
    segmentsPracticed: practiceLog.length,
    bpmRange: getBpmRange(),       // min-max BPM used
    pieceName: sessionConfig?.piece || "Free Practice",
    recordingCount: recordings.length,
  };

  createModal(null, (content) => {
    // Scrollable area
    const scroll = createEl("div");
    scroll.style.cssText = "overflow-y:auto;display:flex;flex-direction:column;gap:16px;flex:1;max-height:70vh;";
    content.appendChild(scroll);

    // "SESSION COMPLETE" title
    const title = createEl("h2");
    title.textContent = "SESSION COMPLETE";
    title.style.cssText = "margin:0;color:#aaa;font-size:16px;font-weight:700;letter-spacing:3px;text-align:center;";
    scroll.appendChild(title);

    // Summary card (piece, time, segments, BPM, recordings)
    // ... build summary UI ...

    // Practice log cards (each segment practiced with duration)
    // ... build per-segment cards ...

    // "How did it feel?" section
    const feelTitle = createEl("h3");
    feelTitle.textContent = "How did it feel?";
    feelTitle.style.cssText = "margin:8px 0 0 0;color:#888;font-size:13px;letter-spacing:3px;text-align:center;text-transform:uppercase;opacity:0.8;";
    scroll.appendChild(feelTitle);

    const btns = createEl("div");
    btns.style.cssText = "display:flex;flex-direction:column;gap:10px;";
    scroll.appendChild(btns);

    // Discipline button
    buildFeelButton(btns, "discipline", "Discipline",
      "Pushed through difficult passages", "#888");

    // Flow button
    buildFeelButton(btns, "flow", "Flow",
      "Lost in the music, effortless", "#aaa");
  });
}
```

### 7.2 Finish Function (Critical — Plugin Communication)

```javascript
async function finishSession(type) {
  // 1. Write completion data to frontmatter
  await setMultipleData({
    Music: true,
    "Music-Type": type,
    Timestamp: moment().format(),
    sessionConfig,
    practiceLog,
    currentSegmentIndex,
    totalPracticeTime,
    recordings,
  });

  // 2. Apply plugin-level effects (XP, boss damage, clear workspace)
  //    IDENTICAL to workout.tpl lines 503-521
  if (ctx.plugin?.settings) {
    const ws = ctx.plugin.settings.activeWorkspace;
    if (ws) {
      const actConfig = ctx.plugin.settings.activities?.find(a => a.id === ws.activityId);
      const wsType = type.toLowerCase();
      const state = ctx.plugin.settings.workspaceCompletionStates?.find(s => s.id === wsType);

      // XP gain
      if (state && state.xpMultiplier > 0) {
        const xpGain = Math.round(
          (ctx.plugin.settings.devConfig?.xpPerCompletion || 50) * state.xpMultiplier
        );
        if (ctx.plugin.settings.categoryXP?.[ws.category] !== undefined) {
          ctx.plugin.settings.categoryXP[ws.category] += xpGain;
        }
      }

      // Boss damage
      if (wsType !== "skipped" && actConfig) {
        ctx.plugin.settings.bossCurrentHP = Math.max(
          0,
          (ctx.plugin.settings.bossCurrentHP || 0) - (actConfig.damagePerCompletion || 0)
        );
      }

      // Clear workspace
      ctx.plugin.settings.activeWorkspace = null;
      if (ctx.plugin.saveSettings) await ctx.plugin.saveSettings();
    }
  }

  notice("Practice logged as " + (type === "discipline" ? "Discipline Win" : "Flow State") + "!");
  navigateAfterCompletion();
}
```

---

## 8. Modal System

Reuse the same modal pattern as workout.tpl (lines 409-446):

```javascript
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
  // Same implementation as workout.tpl
}
```

---

## 9. Implementation Order

### Phase 1: Skeleton + Plugin Integration
1. Create `music.tpl` with context destructuring, settings resolution, theme constants
2. Register in `builtins/index.ts`
3. Implement CSS injection with `.otm-` prefix, dark monochrome theme
4. Implement `saveState()`, `finishSession(type)`, `navigateAfterCompletion()`
5. Implement modal system (createModal, closeModal)
6. Implement finish modal with Discipline/Flow buttons
7. **Test**: Verify that starting and completing a music session correctly triggers XP, boss damage, workspace clear, and navigation

### Phase 2: Landing Page
8. Weekly calendar strip (adapted from workout.tpl's `getWeeklyCalendarData()`)
9. "Start New Session" button
10. Saved presets list (read from folder)
11. Recent practice history (read past daily notes)

### Phase 3: Session Setup
12. Piece selector (reads sheet music DB files via `getFilesInFolder` + `getFileMetadata`)
13. BPM input + tap tempo
14. Time signature selector
15. Bars-per-row / rows-per-page configuration
16. Segment selector (from piece's frontmatter segments)

### Phase 4: Metronome
17. AudioContext-based click generator
18. Visual beat indicator (pulsing dot)
19. Time signature support (accent on downbeat)
20. Start/stop synchronized with practice controls

### Phase 5: Sheet Music Viewer + Auto-Scroll
21. Image rendering for .png/.jpg sheet music
22. PDF rendering (canvas-based or iframe)
23. Auto-scroll calculation based on BPM, bars, rows
24. Smooth scroll or row-snap mode
25. Manual scroll override

### Phase 6: Practice Controls
26. Play / Pause / Stop buttons
27. Vocal count-in (SpeechSynthesis or tone-based)
28. Practice timer
29. Segment navigation (next/prev)
30. BPM adjustment during practice

### Phase 7: Recording (Stretch)
31. getUserMedia audio capture
32. MediaRecorder integration
33. Recording playback within session
34. Save recording metadata to frontmatter
35. Optional: persist .webm to vault via `app.vault.createBinary()`

### Phase 8: Analytics (Stretch)
36. Total practice time trends (weekly/monthly)
37. Per-piece practice history
38. BPM progression tracking over time

---

## 10. Plugin Communication Checklist

Every integration point between the template and the Olen plugin:

- [ ] **Destructure `ctx`** — all TemplateContext methods
- [ ] **Resolve ActivityConfig** — find activity by `getData("activity")` or `workspaceTemplate === "music"`
- [ ] **Read settings** — `_actConfig.folder`, `_actConfig.exerciseDbFolder`, personal stats
- [ ] **Read frontmatter state** — `getData()` for all persisted keys
- [ ] **Write frontmatter state** — `setData()` / `setMultipleData()` for saves
- [ ] **Completion marker** — `setMultipleData({ Music: true, "Music-Type": type })` triggers WorkspaceView's metadataCache listener
- [ ] **XP calculation** — read `workspaceCompletionStates` for multiplier, increment `categoryXP[category]`
- [ ] **Boss damage** — decrement `bossCurrentHP` by `actConfig.damagePerCompletion`
- [ ] **Clear workspace** — set `activeWorkspace = null`
- [ ] **Save plugin settings** — call `plugin.saveSettings()`
- [ ] **Post-completion nav** — read `actConfig.completionReturnTo`, call `activateDashboardView()` or open homepage
- [ ] **Notices** — use `notice()` for user feedback
- [ ] **File access** — use `readFile()`, `getFilesInFolder()`, `getFileMetadata()` for sheet music DB
- [ ] **Vault operations** — use `app.vault` for binary reads (PDFs, images) and optional recording writes
- [ ] **CSS isolation** — unique style ID (`olen-tpl-music-v1`), unique class prefix (`.otm-`)
- [ ] **Error safety** — template execution is wrapped in try-catch by TemplateEngine, but internal errors should be caught gracefully
- [ ] **Completed state** — check `isCompleted = getData("Music") === true` and show read-only summary if already done
- [ ] **Resume support** — re-read all state from frontmatter on template load to resume mid-session

---

## 11. Key Differences from Workout Template

| Aspect | Workout | Music |
|--------|---------|-------|
| Property name | `Workout` / `Workout-Type` | `Music` / `Music-Type` |
| Resource DB | Exercise standards (.md) | Sheet music (.md with attached PDF/images) |
| Session data | exercises[], muscleGroups[] | sessionConfig, practiceLog[] |
| Real-time feature | Timer + set tracking | Metronome + auto-scroll |
| Media | None | Audio (metronome, recording), PDF/image display |
| Theme | Warm earth tones (#9a8c7a) | Dark monochrome (#888, #aaa, no color) |
| CSS prefix | `.otw-` | `.otm-` |
| Style ID | `olen-tpl-workout-v6` | `olen-tpl-music-v1` |
| Completion flow | Identical | Identical |
| Plugin communication | Identical | Identical |
