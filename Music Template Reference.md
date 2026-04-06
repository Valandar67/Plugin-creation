# Music Template — Code Reference

> Quick-reference for `Olen/src/templates/builtins/music/music.tpl` (1640 lines)
> Use this instead of re-reading the file. Updated after each major change.

---

## File Layout (line ranges)

| Lines | Section | Description |
|-------|---------|-------------|
| 1-8 | **Header + Context** | Template comment, `ctx` destructuring |
| 10-17 | **SETTINGS** | `_actConfig` resolution, `SETTINGS.musicFolder`, `SETTINGS.sheetDbFolder` |
| 19-32 | **THEME** | Dark monochrome color constants (all grays, no accents) |
| 34-42 | **STATE** | Frontmatter reads: `sessionConfig`, `practiceLog`, `currentSegmentIndex`, `totalPracticeTime`, `recordings`, `isCompleted` |
| 44-112 | **CSS** | Style injection with ID `olen-tpl-music-v1`, all `.otm-` prefixed classes |
| 114-141 | **Utility Functions** | `addCorners()`, `formatDuration()`, `formatDurationLong()` |
| 143-155 | **saveState()** | Writes all mutable state to frontmatter via `setMultipleData` |
| 157-200 | **Modal System** | `activeModal`, `closeModal()`, `createModal(title, contentBuilder)` |
| 202-231 | **Post-Completion Nav** | `getReturnDestination()`, `navigateAfterCompletion()` |
| 233-271 | **finishSession(type)** | Writes `Music: true` + `Music-Type`, applies XP + boss damage, clears workspace, saves plugin settings |
| 273-370 | **openFinishModal()** | Session summary card + Discipline/Flow buttons |
| 372-410 | **getWeeklyCalendarData()** | Scans musicFolder for completed sessions this week |
| 412-440 | **getMonthlyStats()** | Counts: thisWeek, thisMonth, total, totalTime |
| 442-460 | **getRecentSessions(limit)** | Returns last N completed sessions with date, type, piece, duration |
| 462-490 | **getPiecesFromDb()** | Reads `.md` files from sheetDbFolder, parses frontmatter into piece objects |
| 492-540 | **Metronome: Audio** | `initAudio()`, `playClick(isDownbeat)`, `flashBeatDot()` |
| 542-570 | **Metronome: Count-In** | `playCountIn(bpm, beatsPerBar, callback)` — tone-based, plays N clicks then calls callback |
| 572-598 | **Metronome: Start/Stop** | `startMetronome(bpm, beatsPerBar)`, `stopMetronome()` |
| 600-620 | **Practice Timer** | `startPracticeTimer(timerEl)`, `stopPracticeTimer()` — tracks elapsed seconds |
| 622-660 | **Auto-Scroll** | `getScrollPosition(elapsedBeats, anchors)`, `generateUniformAnchors()`, `startAutoScroll()`, `stopAutoScroll()` |
| 662-710 | **Recording** | `startRecording()` (getUserMedia + MediaRecorder → .webm to vault), `stopRecording()` |
| 712-770 | **renderStatsSection(root)** | Weekly calendar grid + monthly stats row |
| 772-810 | **renderRecentSessions(root)** | Cards showing last 4 completed sessions |
| 812-860 | **renderLandingPage(root)** | Header, stats, START SESSION button, FREE PRACTICE button, piece library cards, recent sessions |
| 862-880 | **parseTimeSignature() + helpers** | Parses "4/4" → `{ beats: 4, noteValue: 4 }` |
| 882-1044 | **openSessionSetup(preselectedPiece)** | Modal: piece selector, BPM +/- with tap tempo, time signature buttons, recording toggle, BEGIN button |
| 1046-1320 | **renderPracticeView(root)** | Header, beat dots, sheet music viewer, segments list, timer, transport bar (play/pause/stop/BPM), finish button |
| 1322-1540 | **openCalibrationMode()** | Modal: beat counter with metronome, scrollable image, SET ANCHOR button, anchor list with delete, SAVE ANCHORS |
| 1542-1610 | **renderCompletedView(root)** | Read-only summary: completion icon, type, timestamp, session details |
| 1612-1640 | **Main render() + Boot** | Router: isCompleted → completed view; no sessionConfig → landing; else → practice. Cleans up timers on re-render. `return render();` |

---

## State Variables (in-memory, persisted to frontmatter)

| Variable | Type | Frontmatter Key | Description |
|----------|------|-----------------|-------------|
| `sessionConfig` | object \| null | `sessionConfig` | Current session: piece, bpm, timeSignature, beatsPerBar, sheetFile, backingTrack, enableRecording, barsPerRow, rowsPerPage, scrollAnchors, segments |
| `practiceLog` | array | `practiceLog` | Array of `{ segment, piece, duration, bpm, timestamp }` |
| `currentSegmentIndex` | number | `currentSegmentIndex` | Which segment is active |
| `totalPracticeTime` | number | `totalPracticeTime` | Total seconds practiced this session |
| `recordings` | array | `recordings` | Array of `{ file, timestamp, piece, bpm }` |
| `isCompleted` | boolean (const) | `Music` | Whether session is done (read-only after set) |
| — | string | `Music-Type` | "discipline" \| "flow" \| "skipped" |
| — | string | `Timestamp` | ISO timestamp of completion |
| — | string | `activity` | Activity ID (set by WorkspaceView, not by template) |

---

## Runtime Variables (not persisted)

| Variable | Type | Description |
|----------|------|-------------|
| `audioCtx` | AudioContext | Web Audio context for metronome + count-in |
| `metronomeTimerId` | interval ID | setInterval handle for metronome ticks |
| `isPlaying` | boolean | Whether metronome is running |
| `currentBeat` | number | Beat counter since metronome started |
| `practiceTimerStart` | timestamp | Date.now() when timer started |
| `practiceTimerElapsed` | number | Accumulated seconds (survives pause/resume) |
| `practiceTimerInterval` | interval ID | Timer display updater |
| `beatDotEl` | HTMLElement | Reference to the first beat dot for flash animation |
| `scrollAnimFrame` | rAF ID | requestAnimationFrame handle for auto-scroll |
| `scrollStartTime` | timestamp | performance.now() when scroll started |
| `mediaRecorder` | MediaRecorder | Active recorder instance |
| `recordingChunks` | Blob[] | Accumulated audio chunks |
| `isRecording` | boolean | Whether recording is active |
| `activeModal` | HTMLElement | Current open modal overlay |

---

## CSS Classes (`.otm-` prefix)

| Class | Used For |
|-------|----------|
| `.otm-container` | Root container (max-width 500px, centered) |
| `.otm-card` | Glassmorphism card (dark bg + blur) |
| `.otm-card-breathe` | Card with subtle breathing animation |
| `.otm-header` | Centered header card |
| `.otm-title` | Main title text (gray, uppercase, letter-spaced) |
| `.otm-progress-label` | Subtitle/progress text |
| `.otm-section-label` | Section headers (tiny uppercase) |
| `.otm-btn` | Base button style |
| `.otm-btn-primary` | Gray gradient button (main actions) |
| `.otm-btn-secondary` | Ghost/outline button |
| `.otm-btn-finish` | Green gradient button (finish session) |
| `.otm-btn-dashed` | Dashed-border button (add actions) |
| `.otm-nav-row` | Flex row for navigation buttons |
| `.otm-input` | Styled number/text input |
| `.otm-ctrl-btn` | Small square control button (+/- etc.) |
| `.otm-week-grid` | 7-column weekly calendar grid |
| `.otm-week-day` | Individual day cell in calendar |
| `.otm-modal-overlay` | Full-screen modal backdrop |
| `.otm-modal-content` | Modal content container |
| `.otm-feel-btn` | Discipline/Flow selection buttons |
| `.otm-piece-card` | Piece library card |
| `.otm-preset-card` | Preset/session history card |
| `.otm-metronome-dot` | Visual beat indicator dot |
| `.otm-sheet-viewer` | Sheet music image container |
| `.otm-transport` | Sticky bottom transport bar |
| `.otm-transport-btn` | Round transport control (play/stop/etc.) |
| `.otm-bpm-display` | BPM number display |
| `.otm-timer` | Timer display (tabular-nums) |
| `.otm-anchor-marker` | Horizontal line marker on sheet image |
| `.otm-recording-indicator` | Red "REC" badge |
| `.otm-time-sig-btn` | Time signature selector button |

### Animations

| Keyframe | Used By | Effect |
|----------|---------|--------|
| `otm-breathe` | `.otm-card-breathe` | Subtle box-shadow pulse (6s loop) |
| `otm-pulse-glow` | Today's calendar dot | Opacity pulse (2s loop) |
| `otm-beat-flash` | `.otm-metronome-dot.active` | Scale + opacity flash (0.15s) |

---

## Screen Flow

```
render() [line 1612]
  │
  ├── isCompleted? ──► renderCompletedView(root) [line 1542]
  │                     Shows: icon, "SESSION COMPLETE", type, timestamp, summary card
  │
  ├── no sessionConfig? ──► renderLandingPage(root) [line 812]
  │                          Shows: header, weekly calendar, stats, START button,
  │                          FREE PRACTICE button, piece library cards, recent sessions
  │                          │
  │                          ├── START SESSION ──► openSessionSetup() [line 882]
  │                          │                     Modal: piece picker, BPM, time sig,
  │                          │                     recording toggle, BEGIN button
  │                          │                     │
  │                          │                     └── BEGIN ──► sets sessionConfig, re-renders
  │                          │
  │                          ├── FREE PRACTICE ──► sets minimal sessionConfig, re-renders
  │                          │
  │                          └── Piece card click ──► openSessionSetupWithPiece(piece) [line 877]
  │
  └── has sessionConfig ──► renderPracticeView(root) [line 1046]
                             Shows: header (piece + BPM), beat dots, sheet viewer,
                             segments list, timer, transport bar
                             │
                             ├── ▶ Play ──► count-in → startMetronome + startPracticeTimer
                             │              + startAutoScroll + optional startRecording
                             │
                             ├── ⏸ Pause ──► stopMetronome + stopPracticeTimer + stopAutoScroll
                             │
                             ├── ■ Stop ──► stops everything, logs segment to practiceLog
                             │
                             ├── BPM +/- ──► adjusts bpm, restarts metronome if playing
                             │
                             ├── CALIBRATE SCROLL ──► openCalibrationMode() [line 1322]
                             │                        Modal: beat counter, scrollable image,
                             │                        set/delete anchors, preview, save
                             │
                             └── ✓ FINISH ──► openFinishModal() [line 273]
                                              Summary + Discipline/Flow buttons
                                              │
                                              └── finishSession(type) [line 233]
                                                   Writes Music: true, XP, boss, nav
```

---

## Plugin Communication (identical to workout.tpl)

| What | How | Where |
|------|-----|-------|
| **Read activity config** | `ctx.plugin.settings.activities.find(...)` | Line 13 |
| **Read frontmatter** | `getData(key)` | Lines 37-42 |
| **Write frontmatter** | `setMultipleData({...})` | `saveState()` line 147, `finishSession()` line 237 |
| **Completion marker** | `Music: true` in frontmatter | Line 238 (triggers WorkspaceView's metadataCache listener) |
| **XP gain** | `categoryXP[category] += xpGain` | Lines 251-255 |
| **Boss damage** | `bossCurrentHP -= damagePerCompletion` | Lines 257-259 |
| **Clear workspace** | `activeWorkspace = null` | Line 261 |
| **Save plugin settings** | `plugin.saveSettings()` | Line 262 |
| **Post-nav** | `completionReturnTo` → dashboard/homepage/stay | Lines 202-231 |
| **Notices** | `notice(message)` | Line 265 |
| **File access** | `readFile()`, `getFilesInFolder()`, `getFileMetadata()` | Data functions, piece DB |
| **Binary read** | `app.vault.readBinary()` | Sheet image loading, line ~1086 |
| **Binary write** | `app.vault.createBinary()` | Recording save, line ~690 |
| **Process frontmatter** | `app.fileManager.processFrontMatter()` | Calibration save, line ~1520 |

---

## Piece Frontmatter Schema (files in sheetDbFolder)

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
sheetFile: "attachments/moonlight-sonata.png"
backingTrack: "attachments/moonlight-backing.mp3"
segments:
  - name: "Exposition"
    startBar: 1
    endBar: 14
  - name: "Development"
    startBar: 15
    endBar: 28
scrollAnchors:
  - beat: 0
    scrollY: 0.0
  - beat: 16
    scrollY: 0.12
  - beat: 128
    scrollY: 1.0
---
```

---

## Key Differences from workout.tpl

| Aspect | Workout (.otw-) | Music (.otm-) |
|--------|-----------------|---------------|
| Property | `Workout` / `Workout-Type` | `Music` / `Music-Type` |
| Theme | Warm earth tones (#9a8c7a) | Dark monochrome (#888) |
| Style ID | `olen-tpl-workout-v6` | `olen-tpl-music-v1` |
| Resource DB | Exercise standards | Sheet music pieces |
| Real-time | Set tracking + timer | Metronome + auto-scroll + recording |
| Audio | None | AudioContext (clicks, count-in, recording) |
| Landing | Muscle group selection | Piece library + free practice |
| Session data | exercises[], muscleGroups[] | sessionConfig, practiceLog[] |
| Completion | Identical | Identical |
