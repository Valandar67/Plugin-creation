# Convert a standalone Obsidian script into an Olen Template

You are converting a standalone Obsidian dataviewjs script (a `.md` file with a `dataviewjs` code block) into a proper Olen plugin built-in template. Follow this guide precisely.

## What the user will provide

The user will specify which `.md` file (standalone script) to convert. If not specified, ask them.

## Step-by-step conversion process

### Phase 1: Analyze the source

1. Read the standalone `.md` file to understand all its functionality
2. Read `Olen/src/templates/TemplateEngine.ts` to understand the `ctx` API
3. Read `Olen/src/templates/builtins/index.ts` to understand template registration
4. Read `Olen/src/views/WorkspaceView.ts` to understand how templates are loaded, daily notes created, and completion detected
5. Read `Olen/esbuild.config.mjs` to confirm the `.tpl` text loader is present
6. Read `Olen/src/types.ts` for the `ActivityConfig` interface
7. Identify the activity's `property` field — this is the frontmatter key that triggers completion

### Phase 2: Understand the `ctx` object

The template receives a single `ctx` argument. Destructure what you need at the top:

```javascript
const { container, getData, setData, setMultipleData, app, moment, notice,
        createEl, file, readFile, getFilesInFolder, getFileMetadata } = ctx;
```

**Data binding:**
- `getData(key)` — read a single frontmatter value from the current daily note
- `getData()` — read all frontmatter as an object
- `setData(key, value)` — write a single frontmatter key (async)
- `setMultipleData({...})` — write multiple frontmatter keys at once (async)

**Vault helpers:**
- `readFile(path)` — read raw text of any vault file
- `getFilesInFolder(folderPath)` — get all markdown files in a folder
- `getFileMetadata(path)` — get frontmatter of any file by path

**Other:**
- `container` — DOM element to render into
- `file` — the current daily note TFile
- `app` — the Obsidian App instance (for anything not covered above)
- `moment` — moment.js instance
- `notice(msg)` — show an Obsidian toast notification
- `createEl(tag, attrs)` — create HTML elements
- `ctx.plugin` — the Olen plugin instance (access `settings`, `activateDashboardView()`, etc.)

### Phase 3: Port the code

Apply these mandatory transformations:

1. **Replace all direct Obsidian API calls with `ctx` helpers:**
   - `app.vault.getAbstractFileByPath(path)` → `getFileMetadata(path)` for frontmatter
   - `app.vault.read(file)` → `readFile(path)`
   - `app.vault.getMarkdownFiles().filter(...)` → `getFilesInFolder(folderPath)`
   - `app.metadataCache.getFileCache(file)?.frontmatter` → `getFileMetadata(path)`
   - `new Notice(msg)` → `notice(msg)`
   - `dv.el("div", ...)` → `document.createElement("div")` appended to `container`
   - `dv.current()` → `getData()`

2. **Replace all data writes with `setData()` / `setMultipleData()`** — never regex-replace file content

3. **Remove inline code generation** — delete any `generateXxxInlineCode()` function; the template IS the code

4. **Remove note creation logic** — Olen's `findOrCreateDailyNote()` handles this

5. **Remove hub/dashboard features** — Olen's dashboard replaces these

6. **Remove `window.location.href` navigation** — use `ctx.plugin.activateDashboardView()` or `app.workspace.getLeaf(false).openFile()`

7. **Add a `SETTINGS` block at the top** with vault-specific paths and defaults:
   ```javascript
   const SETTINGS = {
     // folder where daily notes for this activity are created
     activityFolder: "path/to/folder",
     // any other vault-specific paths or defaults
   };
   ```

8. **Read plugin-level settings via `ctx.plugin.settings`** (e.g., `personalStats`, `homepage`, `completionReturnTo`)

### Phase 4: Implement state management

- All persistent state goes into frontmatter via `setMultipleData()`
- Keep in-memory variables for UI responsiveness, sync to frontmatter on user actions
- The template's `render()` function must be callable multiple times (re-renders on navigation)
- Read initial state from `getData()` at the top of the template
- Create a `saveState()` function that persists current state:
  ```javascript
  async function saveState() {
    await setMultipleData({
      // all state variables that need to persist
    });
  }
  ```

### Phase 5: Implement completion

This is the most critical integration point.

1. The template MUST write `[property]: true` to frontmatter to trigger completion
2. It should also write `[property]-Type: "discipline"` or `"flow"` for XP multiplier
3. The property name must match `activity.property` in settings EXACTLY (case-sensitive)
4. Add post-completion navigation:
   ```javascript
   function getReturnDestination() {
     const activityId = getData("activity");
     const activities = ctx.plugin?.settings?.activities;
     const actConfig = activities.find(a => a.id === activityId);
     return actConfig?.completionReturnTo || "dashboard";
   }

   function navigateAfterCompletion() {
     const dest = getReturnDestination();
     if (dest === "dashboard") {
       setTimeout(() => ctx.plugin.activateDashboardView(), 600);
     } else if (dest === "homepage") {
       const hp = ctx.plugin.settings.homepage;
       if (hp) {
         const f = app.vault.getAbstractFileByPath(hp);
         if (f) app.workspace.getLeaf(false).openFile(f);
       }
     }
     // "stay" → do nothing
   }
   ```

### Phase 6: CSS

- Use a unique prefix for ALL CSS classes (e.g. `ot<initial>-` like `otw-` for workout)
- Wrap styles in an ID-checked `<style>` block to prevent duplicates:
  ```javascript
  if (!document.getElementById("olen-tpl-<name>-v1")) {
    const style = document.createElement("style");
    style.id = "olen-tpl-<name>-v1";
    style.textContent = `...`;
    document.head.appendChild(style);
  }
  ```
- Add to ALL buttons and inputs: `border-radius: 0 !important; -webkit-appearance: none; appearance: none;`
- Add to number inputs: `-moz-appearance: textfield;`
- Add global catch-all for the container and any modal overlays
- Add `padding-bottom: 120px` to the main container for Obsidian mobile nav bar

### Phase 7: Create the files

1. **Create the template source file**: `Templates/<Name>.js`
2. **Copy to builtins**: `Olen/src/templates/builtins/<name>.tpl`
3. **Register in `builtins/index.ts`**: Add import and entry to `BUILTIN_TEMPLATES`
4. **Update `types.ts`** if new settings fields are needed (add to `ActivityConfig` or `OlenSettings`)
5. **Update `constants.ts`** with default values for any new settings
6. **Update `OlenSettings.ts`** with UI controls for any new settings

### Phase 8: Build and verify

```bash
cp Templates/<Name>.js Olen/src/templates/builtins/<name>.tpl
cd Olen && npm run build
```

## Architecture rules

- **Daily notes are pure YAML data** — no code goes into daily notes
- **The template file IS the app** — all UI logic lives in the `.js` / `.tpl` file
- **`ctx` is your only API** — use ctx helpers instead of direct Obsidian/Dataview APIs
- **No `dv` (Dataview API)** — templates don't have access to Dataview
- **Don't mutate `getData()` results** — the frontmatter snapshot is a copy; mutations won't persist
- **Batch `setMultipleData()` calls** — it's async; rapid sequential calls can cause race conditions
- **Modals go on `document.body`** — they live outside the template container; clean them up properly
- **`file` from ctx** is the current daily note TFile (replaces `dv.current().file`)

## Common pitfalls to avoid

- Forgetting to copy `.js` to `.tpl` — the plugin bundles `.tpl`, not `.js`
- Forgetting `npm run build` — changes aren't reflected until rebuilt
- Property name mismatch — completion property must match `activity.property` exactly (case-sensitive)
- Using Dataview API (`dv.*`) — not available in templates
- Race conditions with rapid `setMultipleData` calls — batch all changes into one call

## Frontmatter structure

The daily note should have this general shape:
```yaml
---
activity: <template-id>
<Property>: false          # completion flag watched by WorkspaceView
<Property>-Type: ""        # "discipline" or "flow"
Timestamp: ""
# ... activity-specific data ...
---
```
