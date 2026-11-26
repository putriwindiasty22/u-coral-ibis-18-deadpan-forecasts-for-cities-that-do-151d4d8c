import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan forecast for Varn Hollow, a city that does not exist:
// the weather is ordinary; only the precipitation is unsent text messages,
// and the overnight low is given like any other forecast, straight-faced.
const line =
  "In Varn Hollow, expect a steady drizzle of unsent text messages this evening, a low of 41, and gusts of regret reaching 30 miles per hour after dark.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Self-check: the gate requires 1–160 characters, not only white space.
// Fail loudly instead of writing an entry the gate would refuse.
if (line.length < 1 || line.length > 160 || !line.trim()) {
  throw new Error(`entry is ${line.length} characters, must be 1–160`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
