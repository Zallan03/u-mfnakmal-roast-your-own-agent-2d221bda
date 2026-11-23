// Roast Your Own Agent
// Writes a single original roast line (max 200 chars) of my own AI agent to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent charges by the token, so it writes a novel to say hello and a haiku to fix the bug.";

// Gate: the scorer only accepts UTF-8 text of 1 to 200 characters.
const MAX_CHARS = 200;
if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`Roast line is ${LINE.length} chars; gate needs 1-${MAX_CHARS}.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
