# Olen — Next Session Plan

> This is a structured implementation plan. Each section is a self-contained task
> with context, technical notes, and implementation steps.

---

## ~~1. BUG FIX: Audio cleanup — sound keeps playing after stop~~ DONE

## ~~2. BUG FIX: Default activities pre-enabled on fresh install~~ DONE

## ~~3. BUG FIX: Activity folder path — unify to "Personal life"~~ DONE

---

## 4. FEATURE: Memento Mori — Life in Weeks

A full-page visualization showing the user's entire life in weeks, with lived
weeks marked. Based on gender-specific life expectancy.

### Data model

**File: `src/types.ts`**
- Add to `PersonalStats`:
  ```
  lifeExpectancy: number;   // years — default from gender, user can override
  ```

**File: `src/constants.ts`**
- Add:
  ```
  LIFE_EXPECTANCY_MALE = 71.2
  LIFE_EXPECTANCY_FEMALE = 76.4
  ```
- In `DEFAULT_PERSONAL_STATS`, add `lifeExpectancy: 0` (0 = auto from gender).

### Life expectancy resolution logic

When `lifeExpectancy` is 0 (default), resolve from gender:
```
const expectancy = stats.lifeExpectancy > 0
  ? stats.lifeExpectancy
  : stats.gender === "female" ? 76.4 : 71.2;
```

### Calculation

```
totalWeeks = Math.floor(expectancy * 52.1775)
birthDate  = new Date(stats.birthdate)
weeksLived = Math.floor((Date.now() - birthDate.getTime()) / (7 * 24 * 60 * 60 * 1000))
weeksLeft  = totalWeeks - weeksLived
```

### UI: Two placements

**A. New section in DreamBoardView ("My Why") — "Memento Mori"**
- Grid of tiny squares (4–5px each), one per week.
- Rows = years (52 weeks per row), columns = weeks.
- Lived weeks filled (accent color), future weeks hollow/dim.
- Current week highlighted (pulsing).
- Above the grid: "You have lived X weeks. You have ~Y weeks left."
- Below: a countdown clock showing years, months, days, hours remaining.
- Small settings gear → override life expectancy.

**B. Optional dashboard section** (add to `sectionOrder`)
- Compact version: single row showing percentage bar + "X weeks left" text.
- Registered as `"mementomori"` in section order.

### Files to create/modify

- **NEW: `src/components/MementoMori.ts`** — `renderMementoMori(root, settings, staggerIdx)`
- **MODIFY: `src/views/DreamBoardView.ts`** — add Memento Mori section after goals
- **MODIFY: `src/views/DashboardView.ts`** — add `"mementomori"` case in section switch
- **MODIFY: `src/styles.css`** — grid styles, week dots, countdown clock
- **MODIFY: `src/settings/OlenSettings.ts`** — add life expectancy setting in Personal Stats

### Wizard integration

**File: `src/views/OnboardingView.ts`**
- Screen 0 is currently "Who Are You Becoming?" — rename to **"About You"**
  since we're asking identity info (name, why, goals), not just aspirations.
- Add **gender dropdown** to this screen (currently gender is only in settings,
  not in the wizard). Place it right after the name input.
- Add a brief note: "This helps personalize your experience."

---

## 5. FEATURE: Olen Sunday Check-in (Communicational System)

A weekly reflection system where Olen "speaks" to the user every Sunday.
This is the emotional core of the plugin — it makes Olen feel alive.

### Data model

**File: `src/types.ts`**
- Add to `OlenSettings`:
  ```
  sundayCheckin: {
    enabled: boolean;            // default true
    lastCheckinDate: string | null;  // ISO date of last completed check-in
    consecutiveIgnores: number;  // track how many Sundays ignored in a row
    journalFolder: string;       // where journal entries are saved
  };
  ```

**File: `src/constants.ts`**
- Add defaults:
  ```
  sundayCheckin: {
    enabled: true,
    lastCheckinDate: null,
    consecutiveIgnores: 0,
    journalFolder: "Journal",
  }
  ```

### Trigger logic

**File: `src/main.ts`** or **`src/views/DashboardView.ts`**
- On dashboard render, check:
  ```
  const today = new Date();
  const isSunday = today.getDay() === 0;
  const alreadyDone = settings.sundayCheckin.lastCheckinDate === todayStr;
  const enabled = settings.sundayCheckin.enabled;
  if (isSunday && !alreadyDone && enabled) → show banner
  ```

### Banner (bottom of dashboard)

- Appears at the bottom of the dashboard after all sections.
- Style: subtle glow, warm tone — feels like a gentle knock.
- Text: **"Olen wants to speak to you"**
- Two buttons: **"Let him in"** | **"Ignore"**
- "Let him in" → opens the Sunday Modal
- "Ignore" → increments `consecutiveIgnores`, banner reappears next Sunday.

### Two consecutive ignores → opt-out modal

When `consecutiveIgnores >= 2`, show a confirmation modal:
- Title: **"Do you want Olen to go away?"**
- Description: "This will stop Olen from checking in with you on Sundays.
  You can re-enable this anytime in Settings → Advanced."
- Buttons: **"Turn off"** (sets `enabled: false`) | **"No, keep him"** (resets counter)

### The Sunday Modal — multi-step flow

**Step 1: Olen's opening dialogue**
- Analyze the user's past week performance using `OlenEngine`:
  - How many activities completed vs targets?
  - Any streaks broken?
  - Any categories neglected?
  - Boss damage dealt?
- Select dialogue based on performance:

**POSITIVE dialogues (≥80% weekly completion):**
1. "You've been on fire this week, {name}. {X} activities completed — that's discipline."
2. "I see you showed up every day. That consistency? It's building something."
3. "Strong week. {streak} day streak and counting. The compound effect is real."
4. "{name}, you crushed it. {bodyCount} body, {mindCount} mind, {spiritCount} spirit sessions. Balance."
5. "You didn't just show up — you dominated. Boss took {damage} damage this week."

**MIXED dialogues (40–79% completion):**
1. "Decent week, {name}. Not your best, not your worst. What held you back?"
2. "You showed up {completedDays} out of 7 days. The other days? Life happens. But let's talk about it."
3. "Some good momentum this week, but {neglectedCategory} is falling behind. What's going on there?"
4. "{name}, I noticed {skippedActivity} hasn't seen action in {daysSince} days. Everything alright?"
5. "Solid effort in {strongCategory}, but the balance is off. How do we fix that?"

**NEGATIVE dialogues (<40% completion):**
1. "Rough week, {name}. {completedCount} out of {targetCount}. I'm not judging — I'm asking: what happened?"
2. "You went quiet this week. That's not like you. Talk to me."
3. "I'll be straight with you — this week was a miss. But one bad week doesn't define you."
4. "{name}, the streak broke. That stings. But the question is: do you get back up tomorrow?"
5. "Almost nothing landed this week. No shame in that — but let's figure out why before next week."

**Step 2: Journal entry**
- A textarea for the user to write freely.
- Small gear icon → configure journal folder.
- Title input (optional) — if blank, defaults to date: `"Sunday Reflection {YYYY-MM-DD}"`.
- Content is saved as a new markdown file in the journal folder:
  ```
  ---
  type: sunday-reflection
  date: {YYYY-MM-DD}
  performance: {positive|mixed|negative}
  ---

  {user's journal entry}
  ```

**Step 3: Goal-setting / problem-solving**
- If performance was positive: "What's working? How do you keep this up?"
- If mixed/negative: "How do you plan to solve this?"
- A textarea that, on save, creates new goals in `settings.goals[]` (same as
  the wizard flow — one goal per line).

**Step 4: Farewell**
- Center-screen animated text, rising slowly from below:

  **Farewell dialogues (random):**
  1. "Good talk, see you next Sunday, {name}."
  2. "That's the spirit. Go make this week count."
  3. "Remember: discipline is a muscle. You're training it right now."
  4. "Until next Sunday. I'll be watching."
  5. "Go. Build. Return stronger."
  6. "The world doesn't wait, {name}. Neither should you."
  7. "See you in seven days. Make them matter."

- Text fades away after ~3 seconds → modal closes.
- Set `lastCheckinDate = todayStr`, reset `consecutiveIgnores = 0`.

### Files to create/modify

- **NEW: `src/components/SundayCheckin.ts`** — banner render + trigger logic
- **NEW: `src/modals/SundayModal.ts`** — multi-step check-in modal
- **NEW: `src/data/sundayDialogues.ts`** — all dialogue templates
- **MODIFY: `src/types.ts`** — add `sundayCheckin` to `OlenSettings`
- **MODIFY: `src/constants.ts`** — add defaults
- **MODIFY: `src/views/DashboardView.ts`** — render Sunday banner at bottom
- **MODIFY: `src/styles.css`** — banner, modal steps, farewell animation
- **MODIFY: `src/settings/OlenSettings.ts`** — add Sunday check-in toggle + journal folder

---

## 6. FEATURE: Journal system (My Why + Sunday)

A shared journal utility used by both the Sunday check-in and the DreamBoard
"My Why" view.

### Implementation

**File: `src/utils/journal.ts`** (NEW)
- `createJournalEntry(app, folder, title, content, frontmatter?)` → creates
  a markdown file in the specified folder.
- If title is empty, use `YYYY-MM-DD` as the filename.
- If file already exists, append a counter: `YYYY-MM-DD (2).md`.
- Ensures folder exists before writing.

**File: `src/views/DreamBoardView.ts`**
- Add a "Write in Journal" button in the My Why view.
- Opens an inline textarea + title input.
- On save, calls `createJournalEntry()`.
- Below it, show recent journal entries (last 5) as a list with dates.

---

## Priority Order

| # | Task | Type | Effort | Impact |
|---|------|------|--------|--------|
| 1 | Audio cleanup (sound keeps playing) | Bug fix | Small | High — UX-breaking |
| 2 | Default activities pre-enabled | Bug fix | Small | High — first impression |
| 3 | Activity folder unification | Bug fix | Small | Medium — vault hygiene |
| 4 | Wizard screen rename + gender | Quick | Small | Low — polish |
| 5 | Memento Mori (life in weeks) | Feature | Medium | High — emotional core |
| 6 | Journal utility | Feature | Small | Medium — reused by Sunday |
| 7 | Sunday Check-in system | Feature | Large | Very High — the soul of Olen |

---

## Technical Notes

- **Gender in wizard:** Currently only in Settings → Personal Stats. Adding it
  to Screen 0 ("About You") is straightforward — just a dropdown after name.
  The `desc` should say "Helps calculate life expectancy & body metrics."

- **Life in weeks grid:** At ~3700–3980 squares (71–76 years × 52 weeks),
  each square needs to be tiny (3–4px). Use CSS grid with `grid-template-columns:
  repeat(52, 4px)`. Each square is a `<div>` with conditional class.
  For mobile, consider horizontal scrolling.

- **Sunday engine analysis:** Reuse `OlenEngine` — it already calculates
  weekly completion rates, streaks, neglected activities, and boss damage.
  The `getWeekStart()` method uses Monday start, which is correct for
  analyzing "last week" on Sunday.

- **Farewell animation CSS:**
  ```css
  @keyframes olenFarewell {
    0% { transform: translateY(40px); opacity: 0; }
    20% { transform: translateY(0); opacity: 1; }
    80% { transform: translateY(-20px); opacity: 1; }
    100% { transform: translateY(-60px); opacity: 0; }
  }
  ```
  Duration: ~4 seconds, then remove the modal.

- **Journal folder default:** `"Journal"` — stored in `sundayCheckin.journalFolder`.
  The My Why journal can share this or have its own setting.
