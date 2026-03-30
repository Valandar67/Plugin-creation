// ============================================================
// Olen — Life Phases Guide Content
// 3-step framework for getting unstuck and building momentum
// ============================================================

export interface LifePhaseStep {
  title: string;
  description: string;
  commands: string[];
}

export const LIFE_PHASES_STEPS: LifePhaseStep[] = [
  {
    title: "Step 1: Collect Vision",
    description:
      "Your mind makes sense of the world in stories. You feel lost because you don\u2019t have a clear narrative. Strong goals emerge from negative outcomes you never want to relive.",
    commands: [
      "Give yourself permission to let life get worse",
      "Ask: if I keep doing the same things, where will my life end up?",
      "Find a problem to solve and an enemy to attack",
    ],
  },
  {
    title: "Step 2: Change Your Mind",
    description:
      "You act the way you do because you already have a goal\u2014often the unconscious goal of staying the same to avoid pain. Expose yourself to new perspectives until your mind is hungry to change.",
    commands: [
      "Immerse yourself in new information: books, people, podcasts, courses, travel",
      "When your mind wants to escape your current trajectory, true learning occurs",
    ],
  },
  {
    title: "Step 3: Gamify Your Life",
    description:
      "Turn your growth into a game with clear goals, direct feedback, and progressive challenge. Stay at the edge of the unknown\u2014too easy breeds boredom, too hard breeds anxiety.",
    commands: [
      "Create a hierarchy of goals: end goal \u2192 1-year \u2192 1-month \u2192 1-week \u2192 daily tasks",
      "Establish rules/constraints: what you won\u2019t sacrifice",
      "Use quantifiable daily tasks as feedback loops",
      "Create a tutorial phase: learn by doing, not just watching",
      "Stay at the edge of the unknown: gradually increase challenge",
    ],
  },
];
