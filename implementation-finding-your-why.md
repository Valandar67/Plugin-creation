# Finding Your Why — Implementation Plan

## Overview

A branching guided flow accessible via the `ⓘ` button next to "My Why" on the dashboard hero. Replaces the current linear 3-step Life Phases modal with a 9-screen interactive experience that helps the user discover and articulate their purpose, then saves it directly into Olen's My Why system.

## The Flow

```
Screen 1: "Struggling to find your why?"
  ├─ No  → closes modal
  └─ Yes → Screen 2

Screen 2: Intro
  "Finding purpose is a difficult manner..."
  └─ "Ok" → Screen 3

Screen 3: "Does any part of your current life feel like it's quietly sabotaging your future?"
  ├─ No  → Screen 5 (Vision) directly
  └─ Yes → Screen 4

Screen 4: Confrontation (GATED — all checkboxes required)
  - [ ] Identify one area where you've been choosing comfort over growth
  - [ ] Ask: if I keep doing the same things, where will I end up in 5 years?
  - [ ] Sit with the discomfort — don't rush to fix it
  └─ Affirming text → Screen 5

Screen 5: Vision (personalized with userName + gender)
  "{userName}, close your eyes and envision the man/woman you want to be."
  Body / Mind / Spirit headers (with category colors)
  Flattened sub-area chips to select:
    Body:   Location, Health, Career
    Mind:   Skills, Career, Hobbies
    Spirit: Relationships, Family, Community, Spiritual Elevation, Legacy, Contribution, Impact
  └─ Next → Screen 6

Screen 6: "Now put it in your own words" (GATED — must write something)
  - Selected sub-areas shown as tags at top (visual reminder)
  - Text area for free-form writing
  - Saves text → settings.myWhy (Core Motivation)
  └─ Next → Screen 7

Screen 7: Structure (GATED — checkboxes required)
  "Without structure, it's just a daydream."
  - [ ] Set your Aphorism — a personal truth that grounds you when things get hard
  - [ ] Define Goals: a long-term aim, broken into monthly and weekly steps
  └─ Next → Screen 8

Screen 8: Open Your Mind (OPTIONAL checkboxes)
  "New perspectives create new possibilities."
  - [ ] Immerse yourself in something unfamiliar: a book, a conversation, a place
  - [ ] Follow the pull when you feel it — that's your mind hungry for change
  - [ ] Notice when your mind resists new ideas — that's where growth lives
  └─ Next → Screen 9

Screen 9: Let Your Purpose Evolve (OPTIONAL — closing wisdom)
  "The goal is not a fixed destination — it's a lens for making decisions."
  - Accept that goals change and refine
  - Revisit your Why from time to time
  - Strive to be yourself — make the goal conform to you
  └─ "Done" → closes modal
```

## Personalization

- **User name**: `settings.userName` — used in Vision screen greeting
- **Gender**: `settings.personalStats.gender` — "man" vs "woman" in Vision prompt
- **Category colors**: `settings.categoryColors.body/mind/spirit` — color the Body/Mind/Spirit headers and chips on Vision screen

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

| Category | Sub-Areas |
|----------|-----------|
| Body | Location, Health, Career |
| Mind | Skills, Career, Hobbies |
| Spirit | Relationships, Family, Community, Spiritual Elevation, Legacy, Contribution, Impact |

Note: "Career" appears under both Body and Mind (physical livelihood vs intellectual growth). "Hobbies" appears under both Mind and Spirit. In the flattened UI these are shown once each but colored by their primary category.

Deduplicated flat list (10 chips):
- **Body color**: Location, Health
- **Mind color**: Career, Skills, Hobbies
- **Spirit color**: Relationships, Family, Community, Spiritual Elevation, Legacy

## File Changes

### Modified Files

| File | Changes |
|------|---------|
| `src/types.ts` | Replace `LifePhasesProgress` with `FindingWhyProgress` interface. Update field on `OlenSettings`. |
| `src/constants.ts` | Replace default value for guide progress. |
| `src/main.ts` | Update deep-merge to use new progress structure. Add migration: if old `lifePhasesProgress` exists, reset to new structure. |
| `src/modals/LifePhasesModal.ts` | **Full rewrite** — becomes the branching flow with 9 screens, Yes/No routing, category chips, text area, gated/optional checkboxes. |
| `src/data/lifePhasesContent.ts` | **Full rewrite** — new screen content, sub-area definitions with category mappings. |
| `src/styles.css` | Update/add styles: Yes/No buttons, category-colored chips, tag display, text area, gated vs optional checkbox styles, screen transitions. |
| `src/components/HeroCard.ts` | No change needed (info button already wired). |
| `src/views/DashboardView.ts` | No change needed (callback already wired). |

### No New Files
Everything fits within the existing file structure. The modal and content files get rewritten.

## Screen-by-Screen Implementation Notes

### Screen 1 — Entry Question
- Simple centered text + two buttons (Yes/No)
- "No" calls `closeModal()` immediately
- "Yes" advances to Screen 2

### Screen 2 — Intro
- Olen's voice — humble, honest
- Single "Ok" button advances to Screen 3
- No persistence needed

### Screen 3 — Branching Question
- Two buttons: Yes → saves `tookConfrontationPath = true`, advances to Screen 4
- No → saves `tookConfrontationPath = false`, skips to Screen 5
- On re-entry: uses saved path

### Screen 4 — Confrontation
- 3 checkboxes, all required
- "Next" button only appears when all checked
- Transition text: "You found the problem, and that you need to solve it, excellent. To solve that inertia, we need to find your why."
- Advances to Screen 5

### Screen 5 — Vision
- Greeting: `"{userName}, close your eyes and envision the {man/woman} you want to be. Whether in 5 or 10 or 50 years. Be precise."`
- Gender from `settings.personalStats.gender`: "male" → "man", "female" → "woman", other/unset → "person"
- Three category headers (Body/Mind/Spirit) colored with `settings.categoryColors`
- Chips under each header, tappable toggle (selected = filled with category color, unselected = outline)
- Selected chips saved to `progress.selectedSubAreas[]`
- Must select at least 1 chip to proceed

### Screen 6 — Write Your Why
- Top: selected sub-areas shown as small colored tags (read-only, visual reminder)
- Prompt: "Now put it in your own words — what does your complete self look like?"
- `<textarea>` pre-filled with existing `settings.myWhy` if any
- On Next: saves textarea value to `settings.myWhy` + `plugin.saveSettings()`
- Must have non-empty text to proceed

### Screen 7 — Structure
- 2 checkboxes, both required (gated)
- "Set your Aphorism" — references Olen's aphorism setting
- "Define Goals" — references Olen's goals system
- These are action items the user does in Olen's settings, not in-modal

### Screen 8 — Open Your Mind
- 3 checkboxes, all optional
- Next button always visible
- Softer tone — suggestions, not commands

### Screen 9 — Evolve
- 3 bullet points (not checkboxes — just wisdom text)
- "Done" button closes modal
- Marks `progress.flowComplete = true`

## CSS Considerations

- **Yes/No buttons**: Side-by-side, outlined style, same width
- **Category headers**: Use `settings.categoryColors` as text/border color
- **Chips**: Pill-shaped, outlined when unselected, filled with category color when selected
- **Tags on Screen 6**: Small, colored pills showing selected sub-areas (non-interactive)
- **Gated Next button**: Dim/disabled appearance when conditions not met, smooth transition to active
- **Text area**: Matches existing `olen-modal-textarea` style
- **Screen transitions**: Simple fade or no animation (keep it snappy on mobile)

## Implementation Sequence

1. `src/types.ts` + `src/constants.ts` — new data structure
2. `src/main.ts` — deep-merge + migration from old structure
3. `src/data/lifePhasesContent.ts` — screen content + sub-area definitions
4. `src/modals/LifePhasesModal.ts` — the full branching modal
5. `src/styles.css` — all new styles
6. Build (`npm run build`) and test
7. Commit and push
