- [x] **Take a look at the current system and note the changes**


**Changes:**
- [x] Make the theme affect the reward log too
- [x] Reduce the transition fade in the boss dashboard of background - boss images by 30%
- [x] Remove the temple and Morpheus features entirely
- [x] Make the boss health bar as good looking as the bar used in Tartarus penance for tasks, (keep the width as it is now).
- [x] Remove my activity configurations, the plugin shouldn't have activities configured on its own.
- [x] Same as above for Rewards and Tartarus penance tasks
- [x] remove the tier figure feature
- [x] **Boss Progression** "Auto-calculate HP" make sure it functions well


**Additions**
- [x] Add a feature that copies the configured activities from the "Olen" Plugin, and add the same setting abilities to the habits/activities of Tartarus: 100% customizable + delete button.

**Rebranding**
- [x] "TrackHabitRankPlugin" to "TartarusPlugin"
- [x] "Mythological Habit Tracker" to "Tartarus"

**Bosses**
- [x] Scrap old bosses and replace with 14 new mythology-themed bosses (Sirens → Tartarus)
- [x] Configure each boss with its image from Tartarus/assets/bosses/
- [x] Configure Tartarus background image
- [x] Boss 13 (Chaos): Double rewards for 1 month on defeat
- [x] Boss 14 (Tartarus): Removes punishment mechanism, option to keep alive

**Files cleaned up:**
- [x] Deleted: main.ts, engine.ts, node_modules.bin-*, package-lock.json, package.json, tsconfig.json, assets/bosses/T

---

## Claude's Implementation Phases

### Phase 1 — Foundation (Rebranding + Cleanup) ✓
- [x] Rename `TrackHabitRankPlugin` → `TartarusPlugin` everywhere
- [x] Rename `TrackRankView` → `TartarusView`
- [x] Rename all "Mythological Habit Tracker" → "Tartarus" in UI strings & manifest
- [x] Rename CSS classes from `track-habit-rank-*` → `tartarus-*`
- [x] Remove Temple feature (tasks, UI, settings, commands)
- [x] Remove Morpheus feature (modal, directive engine, commands, quotes)
- [x] Remove default activities array (ACTIVITIES = [])
- [x] Remove default reward pools (keep structure, empty the arrays)
- [x] Remove default penance tasks (keep structure, empty the arrays)
- [x] Remove tier figure feature
- [x] Delete useless files
- [x] Build and verify

### Phase 2 — Boss System Overhaul ✓
- [x] Replace 13 old bosses with 14 new ones (single-tier each)
- [x] Configure boss images from Tartarus/assets/bosses/ PNGs
- [x] Configure Tartarus background image
- [x] Redesign boss health bar to match penance bar style (6px, border-radius, gradient)
- [x] Reduce boss/background image transition fade by 30%
- [x] Verify Auto-calculate HP works with new 14-tier system
- [x] Update RANK_TIER_COLORS for 14 tiers
- [x] Update maxTier default from 13 to 14
- [x] Update migration code for 14-tier system

### Phase 3 — Features & Polish ✓
- [x] Theme the reward log modal (+ BossRewardModal, RewardSelectionModal, reward section)
- [x] Extracted theme resolution to global `resolveThemeColors()` function
- [x] Boss 13 (Chaos): Double rewards for 1 month (`chaosDoubleRewardsUntil` setting)
- [x] Boss 14 (Tartarus): Remove punishment mechanism + option to keep (`tartarusFreedom`, `tartarusFreedomKeepAlive`)
- [x] Fixed final boss detection (tier 14 = maxTier edge case)
- [x] Olen activity import feature (reads Olen's data.json, imports as customHabits)
- [x] Activity settings: full customization + delete button (already existed in customHabits)
- [x] Removed dead Activity Editor section (ACTIVITIES is empty)
