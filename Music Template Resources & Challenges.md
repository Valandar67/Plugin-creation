# Music Template — Resources & Challenges

---

## Resources Needed

### Audio — Metronome Sounds

These are generated at runtime via `AudioContext`, no files needed. But for higher quality, pre-recorded samples can be bundled as base64 or loaded from vault.

| Sound | Purpose | Generation | Sample Alternative |
|-------|---------|------------|--------------------|
| **Downbeat click** | First beat of each bar (accent) | `OscillatorNode` — 880Hz sine wave, 30ms duration, sharp attack | Wood block hit `.wav` (~3KB) |
| **Off-beat click** | Beats 2, 3, 4, etc. | `OscillatorNode` — 440Hz sine wave, 20ms duration | Rimshot or sidestick `.wav` (~3KB) |
| **Subdivision tick** (optional) | Eighth/sixteenth note subdivisions | `OscillatorNode` — 660Hz sine wave, 10ms, very quiet | Hi-hat closed `.wav` (~2KB) |

### Audio — Count-In Sounds

Pre-recorded or pre-generated audio clips loaded as `AudioBuffer` and scheduled with `AudioContext.currentTime` for precise beat-locked playback.

**Full count-in sound list:**

| Clip | Filename | Content | Duration | Notes |
|------|----------|---------|----------|-------|
| **"One"** | `count-1.mp3` | Human voice saying "one" | ~300ms | Needs to fit within one beat at up to 200 BPM (300ms) |
| **"Two"** | `count-2.mp3` | Human voice saying "two" | ~300ms | |
| **"Three"** | `count-3.mp3` | Human voice saying "three" | ~350ms | Longest word — may need to be trimmed tight |
| **"Four"** | `count-4.mp3` | Human voice saying "four" | ~300ms | |
| **"Five"** | `count-5.mp3` | Human voice saying "five" | ~300ms | For 5/4, 5/8 time signatures |
| **"Six"** | `count-6.mp3` | Human voice saying "six" | ~300ms | For 6/8, 6/4 time signatures |
| **"Seven"** | `count-7.mp3` | Human voice saying "seven" | ~350ms | For 7/8 time signatures |
| **"And"** | `count-and.mp3` | Human voice saying "and" | ~200ms | For compound count-ins: "1 and 2 and 3 and 4" |
| **Tone fallback — high** | (generated) | 880Hz beep, 50ms | ~50ms | Used if voice clips unavailable; accent on last count |
| **Tone fallback — low** | (generated) | 440Hz beep, 50ms | ~50ms | Used for non-accent count beats |

**Sourcing options for voice clips:**
- Record them yourself (cleanest, any voice/style)
- Generate via TTS tool offline, then trim and export as mp3
- Use royalty-free vocal count samples from sample packs

**Delivery method:** Base64-encode all clips and embed in the `.tpl` file (~5KB per clip, ~40-50KB total for all 8+2 clips). Decoded into `AudioBuffer` on first load. This avoids external file dependencies while keeping precise `AudioContext.currentTime` scheduling.

### Audio — Other Sounds

| Sound | Purpose | Source |
|-------|---------|--------|
| **Session start chime** (optional) | Audio cue that practice has begun after count-in | Generated tone — ascending two-note chime via `OscillatorNode` |
| **Session end chime** (optional) | Audio cue when user finishes | Generated tone — descending two-note chime |
| **Recording start beep** (optional) | Confirms recording has started | Single short 1000Hz beep |

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

### 1. Vocal Count-In — Timing Precision

**Problem**: `SpeechSynthesis` API has unpredictable timing (50-200ms latency variance). Can't use it for beat-locked count-ins.

**Solution**: Pre-recorded voice clips (see Audio section above) loaded as `AudioBuffer` and scheduled via `AudioContext.currentTime`. This gives sample-accurate timing. The clips are base64-encoded in the `.tpl` file so there are no external dependencies.

**Remaining challenge**: The word "three" and "seven" are longer than one beat at high tempos (200+ BPM = 300ms per beat). Clips must be trimmed to fit, which may sound clipped. At extreme tempos, fall back to tone-only count-in automatically.

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

- **Uniform layout assumption** — the piece's `.md` frontmatter includes `barsPerRow` and `rowsPerPage`. Template assumes equal bar widths and row heights. Simple math: `rowHeight = imageHeight / rowsPerPage`. Works for most typeset sheet music but fails for variable-width bars or different row heights.

- **User-transcribed scroll anchors (RECOMMENDED)** — the user manually maps time positions to scroll positions on the sheet image. This is a "scroll transcription" mode built into the template:

  **How it works:**
  1. User opens the piece in a **calibration/transcription mode**
  2. The sheet image is displayed with the metronome running
  3. User clicks/taps the image at key moments to set **anchors**: "at beat X, the sheet should be showing this position"
  4. At minimum, user sets a **start anchor** (where on the image playback begins) and an **end anchor** (where it ends)
  5. User can add as many **intermediate anchors** as needed — e.g. at the start of each row, at time signature changes, at repeats, at sections with different bar densities
  6. Template stores anchors as an array of `{ beat: number, scrollY: number }` (or `scrollY` as a percentage of total image height)
  7. During playback, template interpolates linearly between adjacent anchors to compute scroll position at any given beat

  **Anchor data structure (stored in piece frontmatter):**
  ```yaml
  scrollAnchors:
    - beat: 0
      scrollY: 0        # Top of image — start here
    - beat: 16
      scrollY: 0.12     # End of first row (4 bars × 4 beats)
    - beat: 32
      scrollY: 0.25     # End of second row
    - beat: 48
      scrollY: 0.40     # Third row is taller (wider bars)
    - beat: 128
      scrollY: 1.0      # Bottom of image — end
  ```

  **Interpolation during playback:**
  ```
  Given current beat B, find anchors A_prev and A_next where A_prev.beat ≤ B < A_next.beat
  progress = (B - A_prev.beat) / (A_next.beat - A_prev.beat)
  scrollY = A_prev.scrollY + progress * (A_next.scrollY - A_prev.scrollY)
  ```

  **Transcription UI:**
  - Split screen: sheet image on top, timeline/controls on bottom
  - "Set Anchor" button — locks current beat + current scroll position
  - Visual markers on the image showing where anchors are placed
  - Ability to delete/edit anchors
  - "Preview" mode — plays back with the anchored scroll to verify sync
  - Anchors saved to the piece's `.md` frontmatter via `setData()`

  **Advantages:** Works with any layout — irregular bars, multiple pages, coda jumps, repeats. The user knows their sheet music better than any algorithm.

- **MusicXML** — if the user has MusicXML source, parse it for structural data. Very complex, huge scope. Not planned.

**Recommendation**: Support both. Use uniform layout (`barsPerRow`/`rowsPerPage`) as a quick-start default for pieces where the user doesn't want to bother with calibration. Offer the **anchor transcription mode** for pieces where precision matters. The anchor system is the primary scroll method — the uniform assumption is just a convenience fallback that auto-generates evenly-spaced anchors.

---

### 7. Microphone Permissions

**Problem**: `navigator.mediaDevices.getUserMedia()` requires user permission. Obsidian is an Electron app — permission handling varies by platform. On some systems the prompt may not appear or may be blocked.

**Possible solutions**:
- **Graceful degradation** — wrap in try/catch. If permission denied, hide the recording button and show a notice explaining how to enable mic access.
- **Settings check** — on Electron, mic permissions can be pre-granted in app settings. Document this for users.

**Recommendation**: Try/catch with graceful fallback. Recording is a stretch feature anyway.

---

## Resource Summary

### Required for v1 (bundled in .tpl, no external files)

| What | How |
|------|-----|
| Metronome audio | `AudioContext` + `OscillatorNode`, generated at runtime |
| Count-in voice clips | Base64-encoded mp3s embedded in the `.tpl` (~40-50KB total for 8 clips) |
| Count-in tone fallback | Generated via `AudioContext` for extreme tempos |
| Sheet music display | `<img>` tag with vault binary read, user provides .png files |
| Scroll anchors UI | Built-in transcription/calibration mode for mapping beats → scroll positions |
| Timing/sync | `AudioContext.currentTime` + `requestAnimationFrame` loop |
| All styling | Injected `<style>` tag, dark monochrome, `.otm-` prefix |

### Audio files to create/source before implementation

| File | Content | Est. Size | Format |
|------|---------|-----------|--------|
| `count-1.mp3` | Voice: "one" | ~5KB | mp3, 44.1kHz mono |
| `count-2.mp3` | Voice: "two" | ~5KB | mp3, 44.1kHz mono |
| `count-3.mp3` | Voice: "three" | ~5KB | mp3, 44.1kHz mono |
| `count-4.mp3` | Voice: "four" | ~5KB | mp3, 44.1kHz mono |
| `count-5.mp3` | Voice: "five" | ~5KB | mp3, 44.1kHz mono |
| `count-6.mp3` | Voice: "six" | ~5KB | mp3, 44.1kHz mono |
| `count-7.mp3` | Voice: "seven" | ~5KB | mp3, 44.1kHz mono |
| `count-and.mp3` | Voice: "and" | ~3KB | mp3, 44.1kHz mono |
| **Total** | | **~38KB** | Embedded as base64 in .tpl |

### Required for v2 (user-provided files)

| What | How |
|------|-----|
| Higher quality metronome | User drops .wav samples into a designated folder |
| Custom voice count-in | User drops voice clips into a "voice pack" folder to override defaults |
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
