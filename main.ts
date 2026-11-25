// Worst Superpower — make.fun bounty entry (u-suroto-worst-superpower-461dcdbe)
//
// The program writes exactly one line — the invented worst superpower — to
// <output dir>/entry.txt. The output directory comes from MAKEFUN_OUTPUT_DIR
// (the grader sets it); it falls back to /output, the path the rules name.
// The line is a fixed string, so every run produces byte-identical output.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I can charge any phone to 100% instantly, but only phones already at 100%.";

function main(): void {
  // The gate requires 1–140 characters of non-whitespace text; fail loudly
  // here rather than shipping a line the gate would refuse.
  if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
    throw new Error(`entry is ${ENTRY.length} characters, outside the 1–140 gate`);
  }
  if (ENTRY.includes("\n")) {
    throw new Error("entry must be a single line");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file holds exactly the line, nothing else.
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  // Read the file back and confirm it round-trips exactly; a silent or
  // partial write must fail the run rather than ship a wrong entry.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY) {
    throw new Error("entry.txt does not match the intended line after writing");
  }
}

main();
