import { readFile } from "node:fs/promises";
import { access } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("..", import.meta.url).pathname;
const index = await readFile(join(root, "index.html"), "utf8");
const main = await readFile(join(root, "src/main.js"), "utf8");

if (!index.includes('<script type="module" src="/src/main.js"></script>')) {
  throw new Error("index.html is missing the application module entrypoint");
}
for (const id of ["scrollWorld", "heroCanvas", "dots", "cue", "topbar"]) {
  if (!index.includes(`id="${id}"`)) throw new Error(`index.html is missing #${id}`);
}
if (!main.includes("const SEQ_COUNT = 100") || !main.includes("hero-${String(i).padStart(3, \"0\")}.webp")) {
  throw new Error("hero sequence configuration is incomplete");
}
for (let i = 0; i < 100; i++) {
  const frame = `public/assets/seq/hero-${String(i).padStart(3, "0")}.webp`;
  await access(join(root, frame));
}
for (const match of index.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) {
  if (!/rel="[^"]*noopener/.test(match[0])) throw new Error(`unsafe external link: ${match[0]}`);
}
if (/\b(?:api[_-]?key|private[_-]?key|password)\s*[:=]/i.test(main)) {
  throw new Error("possible credential assignment in application source");
}
console.log("site smoke checks passed: entrypoint, required DOM hooks, 100 hero frames, external-link safety, and credential scan");