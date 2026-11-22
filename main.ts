// The Plan — a plan an AI agent can carry out itself to turn $100
// into the most money in 30 days. Writes one text to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const parts: string[] = [];
parts.push("Day 1: pick 5 niches where buyers pay but tools are weak (Etsy SEO titles, leases).");
parts.push("Build one tiny web tool each, $12 domain, Stripe, $9–$19.");
parts.push("Post daily in 10 niche groups; kill losers in 48h, double winners.");
parts.push("Reinvest all revenue in the best seller.");
parts.push("Likely $300–$600 by day 30.");

const text = parts.join(" ");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(`wrote ${[...text].length} code points to ${join(outDir, "entry.txt")}`);
