import { mkdirSync, writeFileSync } from "node:fs";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry =
  "The smart speaker whispered my name at 3 a.m. I bought it yesterday, and I never told it my name.";

// The gate allows at most 400 characters and exactly two sentences;
// fail loudly instead of submitting an entry the judge would reject.
if ([...entry].length > 400) {
  throw new Error(`entry is ${[...entry].length} characters, over the 400 cap`);
}
if ((entry.match(/[.!?](?=\s|$)/g) ?? []).length !== 2) {
  throw new Error("entry must be exactly two sentences");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
