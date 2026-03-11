// ============================================================
// Olen — Default Activity Definitions
// Pre-built activities organized by identity category
// ============================================================

import type { ActivityConfig, Category } from "../types";

/** Category metadata for identity domains */
export const CATEGORY_META: Record<
  Category,
  { label: string; icon: string; color: string }
> = {
  body: { label: "Warrior", icon: "⚔️", color: "#c9a84c" },
  mind: { label: "Scholar", icon: "📜", color: "#6b8cce" },
  spirit: { label: "Artisan", icon: "🔨", color: "#928d85" },
};

/** Pre-built activity templates users can toggle during onboarding */
export const ONBOARDING_ACTIVITIES: Array<{
  category: Category;
  activities: Array<{
    id: string;
    name: string;
    emoji: string;
    defaultFolder: string;
    defaultProperty: string;
    defaultWeeklyTarget: number;
    defaultDuration: number;
    defaultPreferredTime: "morning" | "afternoon" | "evening" | "anytime";
  }>;
}> = [
  {
    category: "body",
    activities: [
      { id: "workout", name: "Workout", emoji: "💪", defaultFolder: "Personal Life/01 Workout", defaultProperty: "Workout", defaultWeeklyTarget: 7, defaultDuration: 60, defaultPreferredTime: "morning" },
      { id: "cardio", name: "Cardio", emoji: "🏃", defaultFolder: "Personal Life/02 Cardio", defaultProperty: "Cardio", defaultWeeklyTarget: 4, defaultDuration: 30, defaultPreferredTime: "morning" },
      { id: "stretching", name: "Stretching", emoji: "🧘", defaultFolder: "Personal Life/Stretching", defaultProperty: "Stretching", defaultWeeklyTarget: 3, defaultDuration: 20, defaultPreferredTime: "morning" },
      { id: "sports", name: "Sports", emoji: "⚽", defaultFolder: "Personal Life/Sports", defaultProperty: "Sports", defaultWeeklyTarget: 2, defaultDuration: 90, defaultPreferredTime: "afternoon" },
    ],
  },
  {
    category: "mind",
    activities: [
      { id: "reading", name: "Reading", emoji: "📖", defaultFolder: "Personal Life/03 Reading", defaultProperty: "Reading", defaultWeeklyTarget: 6, defaultDuration: 45, defaultPreferredTime: "evening" },
      { id: "study", name: "Study", emoji: "📚", defaultFolder: "Personal Life/Study", defaultProperty: "Study", defaultWeeklyTarget: 5, defaultDuration: 60, defaultPreferredTime: "afternoon" },
      { id: "language", name: "Language", emoji: "🗣️", defaultFolder: "Personal Life/Language", defaultProperty: "Language", defaultWeeklyTarget: 5, defaultDuration: 30, defaultPreferredTime: "afternoon" },
      { id: "writing", name: "Writing", emoji: "✍️", defaultFolder: "Personal Life/Writing", defaultProperty: "Writing", defaultWeeklyTarget: 3, defaultDuration: 45, defaultPreferredTime: "evening" },
    ],
  },
  {
    category: "spirit",
    activities: [
      { id: "drawing", name: "Drawing", emoji: "🎨", defaultFolder: "Personal Life/07 Drawing", defaultProperty: "Drawing", defaultWeeklyTarget: 4, defaultDuration: 60, defaultPreferredTime: "afternoon" },
      { id: "drumming", name: "Drumming", emoji: "🥁", defaultFolder: "Personal Life/04 Drumming", defaultProperty: "Drumming", defaultWeeklyTarget: 6, defaultDuration: 45, defaultPreferredTime: "afternoon" },
      { id: "meditation", name: "Meditation", emoji: "🧘‍♂️", defaultFolder: "Personal Life/Meditation", defaultProperty: "Meditation", defaultWeeklyTarget: 7, defaultDuration: 15, defaultPreferredTime: "morning" },
      { id: "social", name: "Social", emoji: "🤝", defaultFolder: "Personal Life/06 Social", defaultProperty: "Social", defaultWeeklyTarget: 2, defaultDuration: 60, defaultPreferredTime: "evening" },
    ],
  },
];

/**
 * Build an ActivityConfig from an onboarding activity template.
 */
export function buildActivityConfig(
  template: (typeof ONBOARDING_ACTIVITIES)[number]["activities"][number],
  category: Category
): ActivityConfig {
  return {
    id: template.id,
    name: template.name,
    emoji: template.emoji,
    category,
    enabled: true,
    folder: template.defaultFolder,
    property: template.defaultProperty,
    damagePerCompletion: 1,
    weeklyTarget: template.defaultWeeklyTarget,
    trackingMode: "daily",
    hasWorkspace: true,
    priority: 5,
    neglectThreshold: 3,
    preferredTime: template.defaultPreferredTime,
    estimatedDuration: template.defaultDuration,
  };
}
