// ============================================================
// Olen — Built-in Template Registry
// Each template lives in its own folder: builtins/<name>/<name>.tpl
// Import new templates here and add them to the registry.
// ============================================================

import workoutSource from "./workout/workout.tpl";
import readingSource from "./reading/reading.tpl";
import drawingSource from "./drawing/drawing.tpl";

/**
 * Built-in templates bundled inside the plugin.
 * Keys are template IDs referenced in ActivityConfig.workspaceTemplate.
 * Values are the raw JS source executed via new Function("ctx", source).
 *
 * To add a new template:
 *   1. Create a folder: builtins/<name>/
 *   2. Add the template code as <name>.tpl
 *   3. Import above and add to this record.
 */
export const BUILTIN_TEMPLATES: Record<string, string> = {
  workout: workoutSource,
  reading: readingSource,
  drawing: drawingSource,
};

/** List of available built-in template IDs (for settings dropdowns) */
export const BUILTIN_TEMPLATE_IDS: string[] = Object.keys(BUILTIN_TEMPLATES);
