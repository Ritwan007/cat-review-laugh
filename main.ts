import { mkdirSync, writeFileSync } from "node:fs";

// One-line cat review for make.fun:
// "Make the AI Judge Laugh: Cat Reviews Its Human" (max 200 chars, one line).
// The review keeps the deadpan shape of a real one-star review — stars,
// a specific service failure, an escalation — while the complaint is pure
// cat: an empty bowl, a dismissed witness, and a lawyer on retainer.
// Nine minutes is doing the comic work: a precise, petty, very feline
// measurement of a crime no human would even register as an event.
const LINE =
  "1 star. Bowl stood empty for nine full minutes. Staff looked at me, said 'you just ate,' and returned to the glowing rectangle. I have contacted my lawyer.";

// Self-check the gate before writing: UTF-8 text, 1-200 chars,
// a single line, not only whitespace. Fail loudly rather than
// shipping an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Review is ${LINE.length} chars; gate requires 1-200.`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("Review must be one non-blank line.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
