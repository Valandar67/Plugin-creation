- [x] **Take a look at the current system and note the changes**


**Changes:**
- [ ] Make the theme affect the reward log too

- [ ] Reduce the transition fade in the boss dashboard of background - boss images by 30%

- [ ] Remove the temple and Morpheus features entirely

- [ ] Make the boss health bar as good looking as the bar used in Tartarus penance for tasks, (keep the width as it is now).
- [ ] Remove my activity configurations, the plugin shouldn't have activities configured on its own.
- [ ] Same as above for Rewards and Tartarus penance tasks
- [ ] remove the tier figure feature
- [ ] **Boss Progression** "Auto-calculate HP" make sure it functions well



**Additions**
Add a feature that copies the configured activities from the "Olen" Plugin, and add the same setting abilities to the habits/activities of Tartarus: 100% customizable + delete button.

**Rebranding**
This plugin was created by tweaking a similar plugin called "Ranked Habit Tracker". That's where "TrackHabitRankPlugin" comes from, so we need to rename it to "TartarusPlugin".
Furthermore, in development I was referring to it as the Mythological Habit Tracker, now I'm renaming it to "Tartarus" cause it sounds cleaner.
So:
- [ ] "TrackHabitRankPlugin" to "TartarusPlugin"
- [ ] "Mythological Habit Tracker" to "Tartarus"
Be thorough to not mess this up.

Scrap the old bosses and put these:
1. The Sirens
2. Harpy
3. Minotaur
4. Cyclops
5. Medusa
6. Scylla
7. Charybdis
8. Nemean Lion
9. Lernaean Hydra
10. Cerberus
11. The Furies
12. Typhon
*Resting point*
Unlocks:
13. Chaos
(Double Rewards (all) for 1 month)
14. Tartarus
(Removes Tartarus mechanism, the user is free from punishments, option to keep him alive)

13 and 14 brackets are new features to implement.

Configure each boss with it's image, Tartarus/assets/bosses each boss has a PNG with his name

Configure the Tartarus background with Tartarus/assets/backgrounds/Tartarus-background.png and Tartarus image with Tartarus/assets/bosses/Tartarus.png

check the Tartarus folder and delete useless files from the previous plugin (TrackHabitRankPlugin)


To remember for later (Claude ignore this):
- [ ] the wizard should check for Olen's activity configuration if it exists, and copy it

---

## Claude's Implementation Phases

### Phase 1 — Foundation (Rebranding + Cleanup)
- [ ] Rename `TrackHabitRankPlugin` → `TartarusPlugin` everywhere in main.ts
- [ ] Rename `TrackRankView` → `TartarusView`
- [ ] Rename all "Mythological Habit Tracker" → "Tartarus" in UI strings & manifest
- [ ] Rename CSS classes from `track-habit-rank-*` → `tartarus-*`
- [ ] Remove Temple feature (tasks, UI, settings, commands)
- [ ] Remove Morpheus feature (modal, directive engine, commands, quotes)
- [ ] Remove default activities array (ACTIVITIES const at line 1642)
- [ ] Remove default reward pools (keep structure, empty the arrays)
- [ ] Remove default penance tasks (keep structure, empty the arrays)
- [ ] Remove tier figure feature
- [ ] Delete useless files (node_modules.bin-*, T file, etc.)
- [ ] Build and verify

### Phase 2 — Boss System Overhaul
- [ ] Replace 13 old bosses with 14 new ones (single-tier each, not double)
- [ ] Configure boss images from Tartarus/assets/bosses/ PNGs
- [ ] Configure Tartarus background image
- [ ] Redesign boss health bar to match penance bar style
- [ ] Reduce boss/background image transition fade by 30%
- [ ] Verify Auto-calculate HP works with new 14-tier system
- [ ] Update RANK_TIER_COLORS for 14 tiers

### Phase 3 — Features & Polish
- [ ] Theme the reward log modal
- [ ] Boss 13 (Chaos): Double rewards for 1 month
- [ ] Boss 14 (Tartarus): Remove punishment mechanism + option to keep
- [ ] Olen activity import feature
- [ ] Activity settings: full customization + delete button
