# Olen Setup Wizard — Implementation Plan

## Overview

Replace the existing 4-screen `OnboardingView` with a comprehensive **8-screen wizard** that configures every major Olen subsystem. The wizard uses the same `olen-onboarding` view type and CSS patterns but adds more screens, inline editing, and live previews.

The wizard runs on first launch (`!onboardingComplete && !migrated`) and is re-accessible via a command or settings button.

---

## Screen Flow

```
[1] Identity  →  [2] Body Stats  →  [3] Domains  →  [4] Activities
     ↓                                                      ↓
[8] Enter     ←  [7] Calendar    ←  [6] Theme     ←  [5] Temple
```

All screens have ← BACK / CONTINUE → navigation. Progress dots at the top show which step you're on.

---

## Screen-by-Screen Design

### Screen 1: "Who Are You Becoming?" (Identity)

**Existing fields (keep):**
- Name input (placeholder: "What should I call you?")
- My Why textarea (placeholder: "I pursue discipline because...")

**New fields:**
- Goals list — small multi-line input, comma-separated or one-per-line. Stored in `settings.goals[]`.
- Homepage path — text input for the vault file to open after completion (e.g. `Home.md`). Stored in `settings.homepage`.

**Validation:** Name required (or keeps default "Warrior"). Everything else optional.

---

### Screen 2: "Know Yourself" (Personal Stats)

Configure `settings.personalStats`:
- Gender dropdown (Male / Female) — affects strength heatmap figure
- Height (cm) — number input
- Birthdate (YYYY-MM-DD) — text input, shows calculated age live
- Current weight (kg) — number input
- Weight logging frequency — dropdown (twice-a-week, every-week, every-2-weeks, etc.)

All optional. Explain: "Used for the strength heatmap and weight tracking notifications."

---

### Screen 3: "Choose Your Domains" (Categories)

**Keep existing design** — three toggleable domain cards (Body/Mind/Spirit) with icons and colors.

**Enhancement:** Below each card, show a one-line preview of which activities belong to that domain, so the user understands the consequence.

---

### Screen 4: "Arm Your Activities" (Activities + Templates)

This is the most complex screen. Two sections:

#### Section A: Pre-built Activities
Show the togglable activity list (existing pattern), but **only for categories enabled in Screen 3**. Each row shows:
- Toggle checkbox
- Emoji + Name
- Brief stats: `4x/week · 60m · afternoon`

When an activity is toggled ON, expand an inline config panel below it:
- **Folder** — text input (pre-filled with default like `Personal Life/01 Workout`)
- **Frontmatter property** — text input (pre-filled)
- **Weekly target** — slider 1-7
- **Estimated duration** — number (minutes)
- **Preferred time** — dropdown (morning/afternoon/evening/anytime)
- **Workspace template** — dropdown:
  - `None (default timer)`
  - `Built-in: Workout` (only this one at release)
  - `Custom (vault path)` → reveals a text input for `.js` or `.md` path

The inline panel is collapsed by default — just the toggle + summary visible. Click "Configure" to expand.

#### Section B: Create Custom Activity
A "+ Create custom activity" button at the bottom. Clicking it opens an **inline form** (not a modal) with:
- Name, Emoji, Category dropdown
- Folder, Property, Weekly target, Duration, Preferred time
- Template selection (same as above)

On "Add", the activity is pushed to `settings.activities[]` and appears in the list above.

#### Template Note
For **Workout**, pre-select `Built-in: Workout` template by default.
All other pre-built activities default to `None (default timer)`.

---

### Screen 5: "The Temple" (Upkeep Tasks)

Configure `settings.templeTasks[]`. Show default tasks:
- 🚿 Bathing (every 1 day)
- 🪒 Facial hair (every 2 days)
- ✂️ Nails (every 7 days)
- 💈 Haircut (every 21 days)

Each row: emoji picker (text input), name, interval (days) — editable inline.

- "+ Add Temple Task" button to add custom upkeep tasks
- "Remove" button on each (except maybe warn if removing all)

Explain: "Temple tasks track personal upkeep — grooming, hygiene, recurring maintenance. The dashboard shows when each is due."

---

### Screen 6: "Choose Your Aesthetic" (Theme)

Configure `settings.themeMode` and visual settings:

**Theme selector** — Three large preview cards, one per theme:
1. **Elysian Dark** — "Pure black with warm amber glow"
2. **Glass** — "Cool grey frosted glass"
3. **Steamy Glass** — "Luminous white with warm steam"

Each card has a mini color swatch showing the key colors (bg, accent, text). Click to select. Active card gets a gold border.

**Background image** (optional):
- Text input for vault path to background image
- Darkness slider (0-100)

**Quote folder** (optional):
- Text input for vault folder containing quote .md files
- Explain: "Quotes rotate on your dashboard footer. Leave empty for built-in Stoic quotes."

---

### Screen 7: "Your Day" (Calendar Integration)

Configure `settings.calendar`:

Three toggle cards:
1. **Daily Notes** — toggle + folder path input + format input
   - Explain: "Parse `- [ ] Task @14:00 ~30m` from your daily notes"
2. **Tasks Plugin** — toggle
   - Explain: "Read tasks with `📅 YYYY-MM-DD` due dates"
3. **Quick Tasks** — toggle
   - Explain: "Olen's built-in task system with the ⚡ icon"

---

### Screen 8: "The Oracle Awakens" (Summary + Enter)

**Keep existing structure** with enhancements:

- "Welcome, {name}. Your journey begins now."
- My Why card (if set)
- Summary stats:
  - `{n} activities armed` with category breakdown
  - `{n} temple tasks` configured
  - Theme name
  - Calendar sources enabled
- Animated "ENTER THE ARENA" button
- Sets `onboardingComplete = true`, closes wizard, opens dashboard

---

## Implementation Details

### Files to Modify

1. **`src/views/OnboardingView.ts`** — Complete rewrite with 8 screens
2. **`src/settings/OlenSettings.ts`** — Add "Re-run Setup Wizard" button (alongside existing "Re-run migration")
3. **`src/main.ts`** — Add command to re-open wizard: `reopen-olen-wizard`
4. **`src/styles.css`** — Add new CSS for wizard enhancements (inline config panels, theme preview cards, progress dots)
5. **`src/data/defaultActivities.ts`** — No changes needed (already has all templates)
6. **`src/constants.ts`** — No changes needed

### New CSS Classes Needed

- `.olen-wizard-progress` — progress dot bar at top
- `.olen-wizard-progress-dot` / `.olen-wizard-progress-dot-active` — individual dots
- `.olen-wizard-inline-config` — expandable config panel within activity rows
- `.olen-wizard-theme-card` / `.olen-wizard-theme-card-active` — theme preview cards
- `.olen-wizard-toggle-card` — calendar integration toggle cards
- `.olen-wizard-custom-form` — inline custom activity creation form
- `.olen-wizard-summary-stat` — summary screen stat rows

### Data Flow

Every screen saves to `this.plugin.settings` and calls `this.plugin.saveSettings()` on CONTINUE (not on every keystroke — batch save per screen). This prevents excessive writes during setup.

### Re-entry

When re-running the wizard (from settings or command), all fields are pre-populated with current values. The wizard edits settings in-place — it does not reset anything unless the user changes it.

### Error Handling

- If no categories selected on Screen 3 → Notice "Select at least one domain"
- If a custom activity has no name → Notice "Give your activity a name"
- If a custom template path is entered but file doesn't exist → soft warning (yellow text below input), still allows proceeding

### Build Verification

After implementation, run `npm run build` to verify the TypeScript compiles and the bundle is produced correctly.
