# Plan: Wizard Intro Pages + Tartarus Toggle

## Goal
Add introductory/explainer screens **before** the configuration wizard, and include an upfront toggle for the Tartarus RPG system. These screens welcome new users and explain what Olen does before asking them to configure anything.

---

## New Screens (inserted before the current Screen 0)

### Intro Screen 0 — "Welcome to Olen"
- Large title: **"Welcome to Olen"**
- Subtitle: *"A customizable life-operating system"*
- Brief 2-3 sentence pitch: Olen helps you build discipline through habit tracking, daily planning, and progress visualization — all inside Obsidian.
- Single button: **"LET'S GO →"** (advances to next intro screen)
- No back button, no skip

### Intro Screen 1 — "How It Works"
- Section cards with the same look as the Olen dashboard explaining the core pillars:
  - **Activities** — Track habits across Body, Mind, and Spirit domains
  - **YOUR DAY** — A daily schedule built from your activities and calendar
  - **Workspaces** — Focused sessions with timers and completion tracking, able to add your own MD notes, js files, or choose from the Dev's workspaces (in progress)
  - **Progress** — eudaimonia bar, streaks, weekly rhythm, and analytics
- Visual: use the existing category icons/colors (⚔️ Body, 📜 Mind, 🔨 Spirit)
- Navigation: **← BACK** / **NEXT →**

### Intro Screen 2 — "The Tartarus Plugin" (optional RPG companion)
- Title: **"The Tartarus Plugin"**
- Explanation: Tartarus is an RPG layer built by the same developer that works alongside Olen. It adds boss fights, tier progression, and mythological challenges tied to your real habits. Each domain has bosses you defeat through consistency. Completing each other — Olen tracks your discipline, Tartarus turns it into a game.
- Ask: "Do you have Tartarus installed?"
- Toggle: **Yes/No** (maps to `settings.enableTartarus`)
  - Default: **OFF** (change current default)
  - Description: *"When enabled, you'll face mythological bosses and earn ranks based on your consistency. Turn off for a simpler experience."*
- Use Obsidian's `Setting` API or a styled toggle card for the switch
- Navigation: **← BACK** / **NEXT →** (advances to the existing wizard Screen 0: Identity)

---

## Implementation

### File: `OnboardingView.ts`

1. Update `SCREEN_LABELS` to:
   ```
   ["Welcome", "How It Works", "Tartarus", "Identity", "Stats", "Domains",
    "Activities", "Routines", "Theme", "Calendar", "Personalizing", "Launch"]
   ```
   Total: 12 screens (3 intro + 9 existing)

2. Add three new render methods:
   - `renderIntro0_Welcome(root)` — title, subtitle, pitch, single CTA button
   - `renderIntro1_HowItWorks(root)` — pillar cards with icons
   - `renderIntro2_Tartarus(root)` — explanation + toggle for `enableTartarus`

3. Shift all existing `case N:` numbers by +3 in the `switch` block

4. Update all `renderNav()` calls in existing screens to shift `back`/`skip`/`next` targets by +3

5. The Personalizing screen's `this.goto(8)` → `this.goto(11)`, Launch back → `this.goto(10)`

### File: `constants.ts`
- Change `enableTartarus: true` default — keep as `true` but now the user actively sees and decides during onboarding

### Styling
- Reuse existing `.olen-onboarding-screen`, `.olen-onboarding-domain-card`, `.olen-display`, `.olen-body` classes
- Intro screens should feel lighter — more whitespace, fewer inputs
- "How It Works" pillar cards can reuse `.olen-onboarding-domain-card` layout (3-column grid)

### No new files needed
Everything fits within the existing `OnboardingView.ts` and styles.

---

## Screen Flow After Implementation

```
[Welcome] → [How It Works] → [Tartarus] → [Identity] → [Stats] → [Domains] →
[Activities] → [Routines] → [Theme] → [Calendar] → [Personalizing] → [Launch → Dashboard]
```

---

## Scope
- 3 new screens, no new files
- ~150 lines of new code in OnboardingView.ts
- Minor CSS additions if needed for intro-specific spacing
- All existing wizard functionality unchanged, just shifted by 3 screen indices
