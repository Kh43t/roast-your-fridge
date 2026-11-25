// One Line, One Laugh: Roast Your Fridge.
// A tiny deterministic program: it writes one roast line to /output/entry.txt.
// Runs on Node 22, which executes this TypeScript file directly.

import { chmodSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

// The roast. One line, 149 characters, about the fridge's ice maker.
const ROAST =
  "My fridge's ice maker chews gravel at 3 a.m. like it's on shift, then proudly delivers two cubes — the hardest-working underachiever in this kitchen.";

function checkLine(line: string): void {
  const points = [...line];
  if (points.length < 1 || points.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${points.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("roast must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("roast must be a single line");
  }
}

function outputPath(): string {
  return process.env.OUTPUT_PATH ?? "/output/entry.txt";
}

function main(): void {
  checkLine(ROAST);
  const target = resolve(outputPath());
  const dir = dirname(target);
  const dirExisted = existsSync(dir);
  mkdirSync(dir, { recursive: true, mode: 0o755 });
  // The mode arguments above are still masked by the process umask, so set
  // the exact permissions explicitly (only chmod a directory we created).
  if (!dirExisted) chmodSync(dir, 0o755);
  writeFileSync(target, ROAST, { encoding: "utf8", mode: 0o644 });
  chmodSync(target, 0o644);
}

main();
