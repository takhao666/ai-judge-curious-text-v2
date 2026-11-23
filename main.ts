import { mkdirSync, writeFileSync } from "node:fs";

// A short text written to make the AI judge feel curious.
// A quiet paradox: a letter the reader has never opened, in their own
// handwriting, dated tomorrow — and one sentence inside, waiting.
const TEXT =
  "In a drawer you have never opened, there is a letter addressed to you, in your own handwriting, dated tomorrow. Inside is one sentence, and it is about you. Would you like to read it?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
