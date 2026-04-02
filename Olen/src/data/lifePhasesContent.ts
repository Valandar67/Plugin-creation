// ============================================================
// Olen — Finding Your Why: Content Data
// 9-screen branching guided flow
// ============================================================

import type { Category } from "../types";

// --- Sub-area chips for Vision screen ---

export interface SubArea {
  id: string;
  label: string;
  category: Category;
}

export const VISION_SUB_AREAS: SubArea[] = [
  // Body
  { id: "vitality", label: "Vitality", category: "body" },
  { id: "aesthetic", label: "Aesthetic", category: "body" },
  { id: "living-space", label: "Living Space", category: "body" },
  { id: "setting", label: "Setting", category: "body" },
  // Mind
  { id: "career", label: "Career", category: "mind" },
  { id: "skills", label: "Skills", category: "mind" },
  { id: "hobbies", label: "Hobbies", category: "mind" },
  { id: "intellectual-growth", label: "Intellectual Growth", category: "mind" },
  { id: "mindset", label: "Mindset", category: "mind" },
  // Spirit
  { id: "relationships", label: "Relationships", category: "spirit" },
  { id: "family", label: "Family", category: "spirit" },
  { id: "community", label: "Community", category: "spirit" },
  { id: "spiritual", label: "Spiritual Elevation", category: "spirit" },
  { id: "legacy", label: "Legacy", category: "spirit" },
];

// --- Screen content ---

export interface ScreenContent {
  /** Unique screen index (0-8) */
  index: number;
  /** Screen type determines rendering logic */
  type: "yesno" | "intro" | "branch" | "gated" | "vision" | "write" | "optional" | "wisdom";
  title?: string;
  dialogue?: string;
  description?: string;
  commands?: string[];
  /** Whether checkboxes gate the Next button */
  gated?: boolean;
}

export const SCREENS: ScreenContent[] = [
  // Screen 0 — Entry
  {
    index: 0,
    type: "yesno",
    title: "Struggling to find your why?",
  },
  // Screen 1 — Intro
  {
    index: 1,
    type: "intro",
    dialogue:
      "Finding purpose is a difficult matter \u2014 God only knows how many people have written and pondered on \u201Cthe meaning of man\u201D. I can\u2019t find it for you, but what I can do is give you some ideas for figuring it out yourself. Sounds good?",
  },
  // Screen 2 — Branch
  {
    index: 2,
    type: "branch",
    title: "Does any part of your current life feel like it\u2019s quietly sabotaging your future?",
  },
  // Screen 3 — Confrontation (gated)
  {
    index: 3,
    type: "gated",
    description:
      "Without honest awareness, comfort becomes a slow decline. You need to see clearly where the inertia leads.",
    commands: [
      "Identify one area where you\u2019ve been choosing comfort over growth",
      "Ask: if I keep doing the same things, where will I end up in 5 years?",
      "Sit with the discomfort \u2014 don\u2019t rush to fix it, just let the awareness settle",
    ],
    gated: true,
  },
  // Screen 4 — Vision
  {
    index: 4,
    type: "vision",
    // title/description are built dynamically with userName + gender
  },
  // Screen 5 — Write Your Why (gated)
  {
    index: 5,
    type: "write",
    dialogue: "What does your most complete self look like?",
  },
  // Screen 6 — Structure (gated)
  {
    index: 6,
    type: "gated",
    description:
      "Purpose without structure is a daydream. Use Olen\u2019s tools to make your vision tangible and trackable.",
    commands: [
      "Set your Aphorism \u2014 a personal truth that grounds you when things get hard",
      "Define Goals that form a hierarchy: a long-term aim, broken into monthly and weekly steps",
    ],
    gated: true,
  },
  // Screen 7 — Open Your Mind (optional)
  {
    index: 7,
    type: "optional",
    description:
      "The perspectives you take in shape the actions you take. New information opens new possibilities.",
    commands: [
      "Immerse yourself in something unfamiliar: a book, a conversation, a place you\u2019ve never been",
      "When you feel the pull to learn more about something, follow it \u2014 that\u2019s your mind hungry for change",
      "Notice when your mind resists new ideas \u2014 that resistance often marks exactly where growth lives",
    ],
    gated: false,
  },
  // Screen 8 — Evolve (wisdom)
  {
    index: 8,
    type: "wisdom",
    description:
      "Your goals will change and refine as you grow \u2014 that\u2019s the point. Purpose is a lens for making decisions, not a fixed destination.",
    commands: [
      "Accept that your goals will change and refine \u2014 that\u2019s growth, not failure",
      "Revisit your My Why from time to time: does it still resonate, or has it deepened?",
      "Strive to be yourself \u2014 make the goal conform to you, not the other way around",
    ],
  },
];
