# Finding Your Why — Implementation Plan

## Overview

A branching guided flow accessible via the `ⓘ` button inside the **My Why DreamBoard view**, next to the big "My Why" title (same color as the title). Replaces the current linear 3-step Life Phases modal with a 9-screen interactive experience that helps the user discover and articulate their purpose, then saves it directly into Olen's My Why system.

## Entry Point

The `ⓘ` button lives **inside the DreamBoard**, not on the dashboard hero.

**Location:** `src/views/DreamBoardView.ts`, line 83-88 — the "My Why" title header.

The current code:
```typescript
const header = root.createDiv({ cls: "olen-dreamboard-header" });
header.createEl("div", {
  cls: "olen-dreamboard-title",
  text: "My Why",
});
```

Becomes a flex row with the title + info button:
```typescript
const header = root.createDiv({ cls: "olen-dreamboard-header" });
const titleRow = header.createDiv({ cls: "olen-dreamboard-title-row" });
titleRow.createEl("div", { cls: "olen-dreamboard-title", text: "My Why" });
const infoBtn = titleRow.createEl("button", {
  cls: "olen-dreamboard-title-info",   // same color as --text-secondary (title color)
  attr: { "aria-label": "Finding Your Why guide" },
});
infoBtn.textContent = "ⓘ";
infoBtn.addEventListener("click", () => openFindingWhyModal(this.plugin));
```

The **hero card info button** (HeroCard.ts) will be **removed** since the guide now lives in DreamBoard.

## Visual Pattern: Sunday Modal

The modal uses the **Sunday check-in modal pattern** for visual consistency:

- **Overlay**: `olen-sunday-modal-overlay` — fixed, `rgba(0,0,0,0.8)`, `backdrop-filter: blur(12px)`
- **Visibility**: `.olen-sunday-modal-visible` / `.olen-sunday-modal-fading` for fade transitions
- **Container**: `olen-sunday-modal` — solid `var(--card-bg-solid)` background, `var(--card-border)` border, 22px radius, max-width 520px
- **Steps**: `olen-sunday-step` with `olenStepFadeIn` animation
- **Dialogue text**: `olen-sunday-dialogue` — Georgia serif, italic, `var(--accent-gold-bright)`
- **Inputs**: `olen-sunday-textarea` / `olen-sunday-input` — glass effect with gold focus border
- **Actions**: `olen-sunday-actions` — flex row for buttons

New CSS classes specific to Finding Your Why will use the prefix `olen-findwhy-*` and inherit the Sunday modal's visual language.

## Theme Support

Olen has 3 theme modes (`OlenThemeMode` in types.ts):

| Mode | Name | Key Difference |
|------|------|----------------|
| `dark` | Elysian Dark | Black bg, light text |
| `glass` | Glass (Grey) | Dark grey bg, subtle glass cards |
| `steamy` | Steamy Glass (White) | Warm white bg, dark text |

All colors flow through CSS variables set by `applyWidgetTheme()` in main.ts:
- `--bg-primary`, `--bg-secondary` — page background
- `--card-bg`, `--card-bg-solid`, `--card-border` — card surfaces
- `--text-primary`, `--text-secondary`, `--text-muted` — text hierarchy
- `--accent-gold`, `--accent-gold-bright` — accent colors
- `--danger`, `--success` — status colors
- `--body-color`, `--mind-color`, `--spirit-color` — category colors

**All Finding Your Why styles must use these CSS variables exclusively** — no hardcoded `rgba(255,255,255,...)` values. This ensures automatic theme adaptation.

Example conversions:
- `color: rgba(255, 255, 255, 0.75)` → `color: var(--text-primary)`
- `color: rgba(255, 255, 255, 0.45)` → `color: var(--text-muted)`
- `background: rgba(255, 255, 255, 0.08)` → `background: var(--card-bg)`
- `border: 1px solid rgba(255, 255, 255, 0.06)` → `border: 1px solid var(--card-border)`

## The Flow

```
Screen 1: "Struggling to find your why?"
  ├─ No  → closes modal
  └─ Yes → Screen 2

Screen 2: Intro
  "Finding purpose is a difficult manner,
   God only knows how many people have written and pondered on
   'the meaning of man'. I can't find it for you, but what I can
   do is give you some ideas for figuring it out yourself."
  └─ "Ok" → Screen 3

Screen 3: "Does any part of your current life feel like
           it's quietly sabotaging your future?"
  ├─ No  → Screen 5 (Vision) directly
  └─ Yes → Screen 4

Screen 4: Confrontation (GATED — all checkboxes required)
  *Without honest awareness, comfort becomes a slow decline.
   You need to see clearly where inertia leads.*
  - [ ] Identify one area where you've been choosing comfort over growth
  - [ ] Ask: if I keep doing the same things, where will I end up in 5 years?
  - [ ] Sit with the discomfort — don't rush to fix it, just let the
        awareness settle
  └─ "You found the problem, and that you need to solve it. To solve
      that inertia, we need to find your why." → Screen 5

Screen 5: Vision (personalized with userName + gender)
  "{userName}, close your eyes and envision the {man/woman} you want to be."
  *Not a title, not material wealth — someone living with
   purpose and beauty. Be precise.*
  Body / Mind / Spirit headers (with category colors)
  Flattened sub-area chips to select
  └─ Next (at least 1 chip selected) → Screen 6

Screen 6: "Now put it in your own words" (GATED — must write something)
  *What does your most complete self look like?*
  - Selected sub-areas shown as colored tags at top (visual reminder)
  - Text area for free-form writing
  - Saves text → settings.myWhy (Core Motivation)
  └─ Next → Screen 7

Screen 7: Structure (GATED — checkboxes required)
  *Purpose without structure is a daydream.
   Use Olen's tools to make your vision tangible and trackable.*
  - [ ] Set your Aphorism — a personal truth that grounds you when
        things get hard
  - [ ] Define Goals that form a hierarchy: a long-term aim, broken
        into monthly and weekly steps
  └─ Next → Screen 8

Screen 8: Open Your Mind (OPTIONAL checkboxes)
  *You act the way you do because of the information you've absorbed.
   New perspectives create new possibilities.*
  - [ ] Immerse yourself in something unfamiliar: a book, a conversation,
        a place you've never been
  - [ ] When you feel the pull to learn more about something, follow it
        — that's your mind hungry for change
  - [ ] Notice when your mind resists new ideas — that resistance often
        marks exactly where growth lives
  └─ Next → Screen 9

Screen 9: Let Your Purpose Evolve (OPTIONAL — closing wisdom)
  *The goal is not a fixed destination — it's a lens for making
   decisions. As you grow, your purpose grows with you.*
  - Accept that your goals will change — that's not failure,
    it's refinement
  - Revisit your My Why from time to time: does it still resonate,
    or has it deepened?
  - Remember: strive to be yourself — make the goal conform to you,
    not the other way around
  └─ "Done" → closes modal
```

## Personalization

- **User name**: `settings.userName` — used in Vision screen greeting
- **Gender**: `settings.personalStats.gender` — "male" → "man", "female" → "woman", other/unset → "person"
- **Category colors**: `settings.categoryColors.body/mind/spirit` — color the Body/Mind/Spirit headers and chips on Vision screen. Also available as CSS vars `--body-color`, `--mind-color`, `--spirit-color`.

## Gating Rules

| Screen | Gating |
|--------|--------|
| Screen 4 (Confrontation) | **Locked** — all checkboxes must be checked before Next appears |
| Screen 6 (Write Your Why) | **Locked** — text area must have content before Next appears |
| Screen 7 (Structure) | **Locked** — all checkboxes must be checked |
| Screen 8 (Open Mind) | **Optional** — checkboxes are suggestions, Next always visible |
| Screen 9 (Evolve) | **Optional** — just wisdom text, Done always visible |

## Data Persistence

### What gets saved to `data.json` (via OlenSettings)

**Existing fields (written to by the guide):**
- `settings.myWhy` — Core Motivation text from Screen 6

**New field — guide progress:**
```typescript
interface FindingWhyProgress {
  // Which screen the user last completed (0-8, or -1 if not started)
  lastCompletedScreen: number;

  // Which branching path they took (true = Yes on Screen 3, false = No)
  tookConfrontationPath: boolean;

  // Checked commands per screen (same pattern as current LifePhasesProgress)
  completedCommands: Record<number, number[]>;

  // Selected sub-areas from Vision screen (Screen 5)
  selectedSubAreas: string[];

  // Whether the full flow is complete
  flowComplete: boolean;
}
```

This replaces the current `lifePhasesProgress: LifePhasesProgress` field on OlenSettings.

### Re-entry behavior
- Completed screens are skipped when modal opens (lands on first incomplete)
- Previous button allows navigating back to completed screens
- Branching path is remembered (if user took Yes path, re-entry follows same path)

## Sub-Areas (Flattened)

Each chip belongs to a category and gets that category's color:

Deduplicated flat list (10 chips):
- **Body color** (`--body-color`): Location, Health
- **Mind color** (`--mind-color`): Career, Skills, Hobbies
- **Spirit color** (`--spirit-color`): Relationships, Family, Community, Spiritual Elevation, Legacy

## File Changes

### Modified Files

| File | Changes |
|------|---------|
| `src/types.ts` | Replace `LifePhasesProgress` with `FindingWhyProgress` interface. Update field on `OlenSettings`. |
| `src/constants.ts` | Replace default value for guide progress. |
| `src/main.ts` | Update deep-merge to use new progress structure. |
| `src/modals/LifePhasesModal.ts` | **Full rewrite** — becomes the branching flow with 9 screens, Yes/No routing, category chips, text area, gated/optional checkboxes. Uses Sunday modal visual pattern. |
| `src/data/lifePhasesContent.ts` | **Full rewrite** — new screen content, sub-area definitions with category mappings. |
| `src/styles.css` | Add `olen-findwhy-*` styles using CSS variables for theme support. Add `olen-dreamboard-title-row` and `olen-dreamboard-title-info` styles. Remove old `olen-lifephases-*` styles. |
| `src/components/HeroCard.ts` | **Remove** info button and `onLifePhasesGuide` callback (guide moves to DreamBoard). |
| `src/views/DashboardView.ts` | **Remove** `onLifePhasesGuide` callback and `openLifePhasesModal` import. |
| `src/views/DreamBoardView.ts` | **Add** info button next to "My Why" title. Import and wire `openFindingWhyModal`. |

### No New Files
Everything fits within the existing file structure.

## Screen-by-Screen Implementation Notes

### Screen 1 — Entry Question
- Simple centered text + two styled buttons (Yes/No) side by side
- "No" calls `closeModal()` immediately
- "Yes" advances to Screen 2
- Uses `olen-sunday-dialogue` class for the question text

### Screen 2 — Intro
- Olen's voice — humble, honest, uses `olen-sunday-dialogue` for the italic serif text
- Single "Ok" button advances to Screen 3
- No persistence needed

### Screen 3 — Branching Question
- Two buttons: Yes → saves `tookConfrontationPath = true`, advances to Screen 4
- No → saves `tookConfrontationPath = false`, skips to Screen 5
- On re-entry: uses saved path

### Screen 4 — Confrontation
- Description in `olen-sunday-dialogue` style (italic serif)
- 3 checkboxes, all required
- "Next" button only appears when all checked
- Transition text below checkboxes: "You found the problem, and that you need to solve it. To solve that inertia, we need to find your why."
- Advances to Screen 5

### Screen 5 — Vision
- Greeting: `"{userName}, close your eyes and envision the {man/woman} you want to be. Whether in 5 or 10 or 50 years. Be precise."`
- Subtitle: "Not a title, not material wealth — someone living with purpose and beauty."
- Gender from `settings.personalStats.gender`: "male" → "man", "female" → "woman", other/unset → "person"
- Three category headers colored with CSS vars (`--body-color`, `--mind-color`, `--spirit-color`)
- Chips under each header, tappable toggle (selected = filled with category color, unselected = outline with `var(--card-border)`)
- Selected chips saved to `progress.selectedSubAreas[]`
- Must select at least 1 chip to proceed

### Screen 6 — Write Your Why
- Top: selected sub-areas shown as small colored tags (read-only, visual reminder)
- Prompt in `olen-sunday-dialogue`: "What does your most complete self look like?"
- `<textarea>` using `olen-sunday-textarea` class, pre-filled with existing `settings.myWhy` if any
- On Next: saves textarea value to `settings.myWhy` + `plugin.saveSettings()`
- Must have non-empty text to proceed

### Screen 7 — Structure
- Description in `olen-sunday-dialogue` style
- 2 checkboxes, both required (gated)
- "Set your Aphorism" — references Olen's aphorism setting
- "Define Goals" — references Olen's goals system
- These are action items the user does in Olen's settings, not in-modal

### Screen 8 — Open Your Mind
- Description in `olen-sunday-dialogue` style
- 3 checkboxes, all optional
- Next button always visible
- Softer tone — suggestions, not commands

### Screen 9 — Evolve
- Description in `olen-sunday-dialogue` style
- 3 bullet points (not checkboxes — just wisdom text, styled as `var(--text-muted)`)
- "Done" button closes modal
- Marks `progress.flowComplete = true`

## CSS — New Classes (Theme-Aware)

All styles use CSS variables for full dark/glass/steamy theme support.

```css
/* DreamBoard title row */
.olen-dreamboard-title-row        /* flex row: title + info button */
.olen-dreamboard-title-info       /* ⓘ button, color: var(--text-secondary) to match title */

/* Finding Your Why — uses Sunday modal overlay + container */
.olen-findwhy-step                /* step container, inherits olenStepFadeIn */
.olen-findwhy-title               /* screen title, var(--text-primary) */
.olen-findwhy-description         /* italic description, var(--text-muted), Georgia serif */
.olen-findwhy-yesno               /* flex row for Yes/No buttons */
.olen-findwhy-btn                 /* Yes/No/Ok button base */
.olen-findwhy-chips               /* chip container per category */
.olen-findwhy-chip-header         /* "BODY" / "MIND" / "SPIRIT" label, colored */
.olen-findwhy-chip                /* pill chip: outline unselected, filled selected */
.olen-findwhy-chip.selected       /* filled with category color */
.olen-findwhy-tags                /* tag row on Screen 6 */
.olen-findwhy-tag                 /* small colored pill, non-interactive */
.olen-findwhy-command             /* checkbox + label row */
.olen-findwhy-command.checked     /* strikethrough + dim */
.olen-findwhy-wisdom              /* bullet point text (Screen 9) */
.olen-findwhy-nav                 /* Previous/Next button row */
.olen-findwhy-nav-btn             /* nav button, var(--accent-gold) border */
.olen-findwhy-nav-btn.disabled    /* dimmed, pointer-events: none */
.olen-findwhy-transition          /* affirming text between steps */
```

## Implementation Sequence

1. `src/types.ts` + `src/constants.ts` — new data structure
2. `src/main.ts` — deep-merge update
3. `src/data/lifePhasesContent.ts` — screen content + sub-area definitions
4. `src/modals/LifePhasesModal.ts` — the full branching modal (Sunday modal pattern)
5. `src/components/HeroCard.ts` — remove old info button
6. `src/views/DashboardView.ts` — remove old callback
7. `src/views/DreamBoardView.ts` — add info button next to title
8. `src/styles.css` — remove old `olen-lifephases-*` styles, add new `olen-findwhy-*` and title-row styles
9. Build (`npm run build`) and test
10. Commit and push
