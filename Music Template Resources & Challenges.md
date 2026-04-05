# Music Template — Resources & Challenges

---

## Resources Needed

### Audio

| Resource | Purpose | Options |
|----------|---------|---------|
| **Metronome click** | Beat keeping during practice | Generate via `AudioContext` + `OscillatorNode` (no file needed). Short sine/square wave burst at 880Hz (downbeat) and 440Hz (off-beats). Works but sounds sterile. |
| **Metronome samples** | Higher quality clicks (wood block, rimshot, hi-hat) | Need `.wav` or `.mp3` samples (~5-10KB each). Could bundle as base64 strings inside the `.tpl` file, or ship as vault assets the user drops in a folder. |
| **Count-in voice** | Human voice saying "1, 2, 3, 4" before playback starts | `SpeechSynthesisUtterance` API — free, no files, but robotic and timing is unreliable (browser controls pacing, not us). Real human voice clips would need recording or sourcing royalty-free samples. |
| **Count-in tones** | Fallback for voice count-in | Generate ascending tones via `AudioContext` — e.g. 4 beeps with the last one higher pitched. Reliable timing, no external files. |

### Sheet Music Display

| Resource | Purpose | Options |
|----------|---------|---------|
| **PDF renderer** | Display PDF sheet music in the template | Obsidian bundles `pdf.js` internally but doesn't expose it to plugins cleanly. Would need to access `window.pdfjsLib` if available, or fall back to `<iframe>` / `<embed>`. |
| **Image files** | Display .png/.jpg sheet music | No special resource needed — standard `<img>` tag with vault binary read via `app.vault.readBinary()` → `URL.createObjectURL()`. |

### Data / Reference

| Resource | Purpose | Options |
|----------|---------|---------|
| **Song/piece database schema** | Structured metadata for each piece | User-created `.md` files with frontmatter (title, composer, BPM, time signature, segments). No external resource — just a documented format. |
| **Instrument list** | For tagging and filtering | Hardcoded array in the template. |

---

## Parts That Can't Be Implemented (or Are Hard)

### 1. Reliable Vocal Count-In

**Problem**: `SpeechSynthesis` API has unpredictable timing. The browser queues utterances and delivers them whenever it wants — you can't guarantee "say '1' exactly on beat 1, '2' exactly on beat 2." At 120 BPM that's 500ms per beat, and speech synthesis latency can vary by 50-200ms.

**Why it matters**: A count-in that drifts off the beat defeats its purpose.

**Possible solutions**:
- **Tone-based count-in** — generate 4 pitched beeps via `AudioContext` with precise `setTimeout` or `AudioContext.currentTime` scheduling. Reliable but not "human."
- **Pre-recorded voice clips** — 4 short `.wav` files ("one", "two", "three", "four") loaded as `AudioBuffer` and scheduled with `AudioContext.currentTime`. Precise timing, human voice, but needs the audio files.
- **Base64-encoded audio** — embed tiny voice clips as base64 strings in the `.tpl` file itself. Decode at runtime into `AudioBuffer`. No external files, precise timing, but adds ~20-40KB to the template source.
- **Hybrid** — use tones by default, let user drop voice clips into a vault folder if they want human voice.

**Recommendation**: Base64-encoded tones for v1. Document a "voice pack" folder convention for later.

---

### 2. PDF Rendering

**Problem**: Obsidian uses `pdf.js` internally but doesn't expose `pdfjsLib` as a public API. There's no guaranteed way to import it from a template running as `new Function()`. The library may or may not be on `window`.

**Why it matters**: Sheet music is most commonly distributed as PDF.

**Possible solutions**:
- **Check for `window.pdfjsLib`** — some Obsidian versions expose it. Use if available, fall back gracefully.
- **`<iframe>` embed** — create an iframe pointing to the vault file via `app.vault.getResourcePath()`. Obsidian's native PDF viewer may render it. No page-level control though (can't target specific bars).
- **`<embed>` / `<object>`** — similar to iframe, less control.
- **Image-only for v1** — require users to export sheet music as images (.png per page). Simpler, full control over scroll/position. PDF support added later.
- **Canvas with pdf.js CDN** — dynamically load pdf.js from CDN. Works but requires internet and adds load time.

**Recommendation**: Image-only for v1 (users export PDF pages as .png). Attempt `window.pdfjsLib` detection as a stretch goal.

---

### 3. Auto-Scroll Precision

**Problem**: `setTimeout`/`setInterval` in JavaScript are not precise — they can drift by 10-50ms per tick, and background tabs throttle timers aggressively (Chrome throttles to 1 tick/second for background tabs).

**Why it matters**: At 120 BPM, each beat is 500ms. If the scroll drifts even slightly from the metronome, the sheet music and clicks go out of sync.

**Possible solutions**:
- **`AudioContext.currentTime` as master clock** — `AudioContext` runs on a separate high-precision thread. Schedule metronome clicks using `oscillator.start(audioCtx.currentTime + offset)` and derive scroll position from `audioCtx.currentTime` rather than `setInterval`.
- **`requestAnimationFrame` loop** — poll `audioCtx.currentTime` every frame (~16ms) and update scroll position. Smooth and stays synced to audio.
- **Web Worker timer** — run a timing loop in a Web Worker (not throttled in background tabs). Post messages to main thread for scroll updates.

**Recommendation**: Use `AudioContext.currentTime` as the single source of truth. Run a `requestAnimationFrame` loop that reads `audioCtx.currentTime` and computes both metronome state and scroll position from it. This keeps audio and visuals locked together.

---

### 4. Audio Recording & Persistence

**Problem**: `MediaRecorder` produces `Blob` objects. Blob URLs are session-scoped — they die when Obsidian reloads. Storing raw audio in frontmatter (as base64) would bloat the markdown file massively (1 minute of audio ≈ 1MB of base64).

**Why it matters**: The "instrument-less mode + recording" feature needs recordings to survive across sessions.

**Possible solutions**:
- **Save to vault as binary** — use `app.vault.createBinary()` to write `.webm` or `.ogg` files to a `Recordings/` subfolder. Store only the file path in frontmatter.
- **Session-only playback** — recordings exist only during the current session. User is warned that closing = losing the recording. Simplest but least useful.
- **IndexedDB** — store audio blobs in browser IndexedDB keyed by session date. Survives reloads but not vault sync across devices.
- **Compressed format** — use `MediaRecorder` with `mimeType: 'audio/webm;codecs=opus'` for smaller files (~12KB/sec). A 5-minute recording ≈ 3.6MB, manageable as a vault file.

**Recommendation**: Write `.webm` files to vault via `app.vault.createBinary()`. Store path + metadata in frontmatter. This is the only option that survives reload AND syncs across devices.

---

### 5. Backing Tracks / Instrument-less Playback

**Problem**: The plan mentions "guitarless version" of a song — playing the song without one instrument. This requires either pre-made backing tracks or real-time audio stem separation, which is not feasible in a browser template.

**Why it matters**: This was a core feature idea.

**Possible solutions**:
- **User-provided backing tracks** — user drops a `.mp3`/`.ogg` file into the vault and references it in the piece's frontmatter (`backingTrack: "attachments/moonlight-backing.mp3"`). Template loads and plays it via `<audio>` element or `AudioContext`. This is the realistic path.
- **YouTube/external link** — open an external player. Loses sync control.
- **Tone.js / sampler** — could theoretically build MIDI playback with sampled instruments, but this is a massive scope expansion (need instrument soundfonts, MIDI parser, etc.).

**Recommendation**: User-provided backing track files for v1. The template plays the audio file synced to the metronome start. Document the expected folder/frontmatter convention. Anything beyond that is a separate project.

---

### 6. Bar-Level Navigation on Sheet Music

**Problem**: Auto-scroll needs to know where each bar starts/ends in the image. But a plain .png of sheet music has no structural data — it's just pixels. The template can't "see" where bar lines are.

**Why it matters**: Row-snap scrolling and segment jumping require knowing bar positions.

**Possible solutions**:
- **User-annotated metadata** — the piece's `.md` frontmatter includes `barsPerRow` and `rowsPerPage`. Template assumes uniform bar widths and equal row heights, then calculates pixel positions mathematically: `rowHeight = imageHeight / rowsPerPage`. Good enough for most printed sheet music.
- **Manual bar markers** — user defines pixel offsets for each row in frontmatter. Tedious but precise.
- **MusicXML** — if the user has MusicXML source, parse it for structural data. Very complex, huge scope.
- **Multiple images per row** — user splits sheet music into one image per row. Template displays them sequentially. Easier to scroll precisely.

**Recommendation**: Assume uniform layout + `barsPerRow` / `rowsPerPage` metadata for v1. The math is simple: divide image height by rows, divide row width by bars. This works for 90% of typeset sheet music.

---

### 7. Microphone Permissions

**Problem**: `navigator.mediaDevices.getUserMedia()` requires user permission. Obsidian is an Electron app — permission handling varies by platform. On some systems the prompt may not appear or may be blocked.

**Possible solutions**:
- **Graceful degradation** — wrap in try/catch. If permission denied, hide the recording button and show a notice explaining how to enable mic access.
- **Settings check** — on Electron, mic permissions can be pre-granted in app settings. Document this for users.

**Recommendation**: Try/catch with graceful fallback. Recording is a stretch feature anyway.

---

## Resource Summary

### Required for v1 (no external files)

| What | How |
|------|-----|
| Metronome audio | `AudioContext` + `OscillatorNode`, generated at runtime |
| Count-in | Pitched tones via `AudioContext`, 4 beeps before start |
| Sheet music display | `<img>` tag with vault binary read, user provides .png files |
| Timing/sync | `AudioContext.currentTime` + `requestAnimationFrame` loop |
| All styling | Injected `<style>` tag, dark monochrome, `.otm-` prefix |

### Required for v2 (user-provided files)

| What | How |
|------|-----|
| Higher quality metronome | User drops .wav samples into a designated folder |
| Human voice count-in | User drops voice clips into a "voice pack" folder |
| Backing tracks | User drops .mp3/.ogg per song, referenced in frontmatter |
| PDF sheet music | Attempt `window.pdfjsLib`, fall back to image |
| Recordings | Saved as .webm to vault via `app.vault.createBinary()` |

### Never feasible in-template

| What | Why |
|------|-----|
| Automatic stem separation | Requires ML models (Demucs, etc.) — not browser-viable |
| MIDI playback with instruments | Needs soundfonts + MIDI parser — separate project |
| OCR bar detection on images | Needs computer vision — separate project |
| Real-time pitch detection | Feasible but very complex; out of scope for a practice template |
