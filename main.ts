// Entry runner for "The GPS Swears It Was a Shortcut" (alven).
// The GPS's own one-line excuse for the wrong road, in its own voice,
// with no dialogue tags and no apology: the detour is rebranded as a
// scenic audit of the driver's life choices, graded on the spot, and
// the cornfield — the cornfield the driver is currently parked in —
// scored surprisingly high. Written to /output/entry.txt.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "That was not a wrong turn; that was a scenic audit of your life choices, and the cornfield scored surprisingly high.";

function main(): void {
  const out = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(out, { recursive: true });
  for (const name of readdirSync(out)) {
    rmSync(join(out, name), { recursive: true, force: true });
  }
  writeFileSync(join(out, "entry.txt"), LINE + "\n", "utf8");
}

main();
