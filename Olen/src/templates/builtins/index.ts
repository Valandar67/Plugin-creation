// ============================================================
// Olen — Built-in Template Registry
// Maps template IDs to their source code (bundled at build time).
// ============================================================

import workoutSource from "./Workout/workout.tpl";
import readingSource from "./Reading/reading.tpl";

/**
 * Built-in templates bundled inside the plugin.
 * Keys are template IDs referenced in ActivityConfig.workspaceTemplate.
 * Values are the raw JS source executed via new Function("ctx", source).
 */
export const BUILTIN_TEMPLATES: Record<string, string> = {
  workout: workoutSource,
  reading: readingSource,
};
