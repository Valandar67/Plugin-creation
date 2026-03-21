import esbuild from "esbuild";
import process from "process";
import builtins from "builtin-modules";
import { copyFileSync, mkdirSync, readdirSync } from "fs";

const prod = process.argv[2] === "production";
const watch = process.argv.includes("--watch");

const context = await esbuild.context({
  entryPoints: ["src/main.ts"],
  bundle: true,
  loader: { ".tpl": "text" },
  external: [
    "obsidian",
    "electron",
    "@codemirror/autocomplete",
    "@codemirror/collab",
    "@codemirror/commands",
    "@codemirror/language",
    "@codemirror/lint",
    "@codemirror/search",
    "@codemirror/state",
    "@codemirror/view",
    "@lezer/common",
    "@lezer/highlight",
    "@lezer/lr",
    ...builtins,
  ],
  format: "cjs",
  target: "es2021",
  logLevel: "info",
  sourcemap: prod ? false : "inline",
  treeShaking: true,
  outfile: "main.js",
  minify: prod,
});

if (watch) {
  await context.watch();
} else {
  await context.rebuild();
  await context.dispose();
}

// Copy styles.css to plugin root
try {
  copyFileSync("src/styles.css", "styles.css");
  console.log("Copied styles.css to plugin root");
} catch (e) {
  console.warn("Could not copy styles.css:", e.message);
}

// Copy background images to plugin root
try {
  const imgDir = "src/images";
  for (const file of readdirSync(imgDir)) {
    if (/^Background-\d+\.(png|jpg|jpeg)$/i.test(file)) {
      copyFileSync(`${imgDir}/${file}`, file);
      console.log(`Copied ${file} to plugin root`);
    }
  }
} catch (e) {
  console.warn("Could not copy background images:", e.message);
}
