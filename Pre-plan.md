Fix: 
# my why
The "The underworld awaits your penance" text area should change to a Aphorism the user chooses in the My why, and his "core motivation" should be kept there, and not be showed in the Olen dashboard.

- [ ] remove the yellow texts and recolor them to bold white/black (based on the theme)
- [ ] add an task-like function in goals, enabling to the user to mark "complete" to a goal
- [ ] once complete, after the user closes the my why dashboard, the goal moves to a new "Completed" place
- [ ] add a Field determining what type of goal is it, to determine how to call it. Is it gonna be a title? You'll use "became", is it gonna be a thing? You'll use "got" (e.g. a car)
- [ ] the user will be able to open the Completed tasks, showing a graph of his consistency in accomplishing goals, with marking in the graph when a goal was accomplished
- [ ] Support multiple goal categories (these are the other categories of goals that exist in personal development / vision apps). When the user creates or edits any goal, they must choose or create a custom category from this list (plus "Custom" option):
Health & Fitness, Financial Freedom, Career & Business, Relationships & Family, Personal Growth & Learning, Spiritual & Mindfulness, Adventure & Travel, Creative Expression & Hobbies, Contribution & Giving Back.
Goals must be filterable and grouped by category inside the My Why dashboard. The category should also appear in the Completed section and in the consistency graph.
- [ ] Add full support for subgoals. Any goal (in any category) can have unlimited nested subgoals. The user must be able to add, edit, delete, and reorder subgoals directly under the parent goal. Subgoals inherit the same "type" field (title → "became", thing → "got") and can be marked complete individually.
- [ ] Update the completion logic for the whole system:
A parent goal can ONLY be marked "complete" (manually or automatically) once EVERY single one of its subgoals is marked complete.
When the last subgoal is completed, the app must automatically prompt or auto-mark the parent goal as complete.
Only after the parent is complete and the user closes the My Why dashboard does the whole goal (with all its subgoals) move to the new "Completed" place.
The consistency graph in Completed tasks must also show subgoal completions (smaller dots or secondary line) so the user sees the full progress history.
- [ ] Make sure the "type" field (became / got) works on both main goals AND subgoals, and the final completion message in the Completed section uses the correct phrasing based on the parent goal’s type
![[Screenshot_20260318_145057_Samsung Notes.jpg]]









- [ ] add mini "widgets", such as ```olen-directive``` enabling the user to have the `DirectiveCard.ts` feature on his homepage... Do this for the most important components, especially the "YOUR DAY"
- Or a ```open-olen``` button that opens the Olen dashboard


# Theme
Fix this thing![[Screenshot_20260318_185256_Obsidian.jpg]]
And the activities on "YOUR DAY" should say "BEGIN", not "DONE"
