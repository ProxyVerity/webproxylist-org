#!/usr/bin/env node
/**
 * Build gate for provider entries. Runs as `prebuild`, so `npm run build`
 * cannot produce a site that violates either rule.
 *
 * Rule 1 — length. Owner's instruction, 24.11.2026: our entries must be no
 * shorter than the partner's own text. MIN_WORDS is not a round number picked
 * for comfort; it is the measured body length of the vendor copy supplied by
 * mobileproxies.org, so "no shorter than the partner" is enforced literally.
 *
 * Rule 2 — no EXTERNAL links in entry bodies. Every outbound link on this
 * site is rendered by src/components/ProviderLink.astro, which picks its rel
 * from src/lib/rel.ts according to the entry's kind. A Markdown link to
 * another site inside a body would bypass that component and ship with no rel
 * at all, quietly breaking the one invariant this project has about outbound
 * links. The CTA at the top of each page is the outbound link.
 *
 * Internal links — anything starting with "/" — are allowed and encouraged:
 * they are how one entry points at another, they stay on this origin, and rel
 * does not apply to them.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = 'src/content/providers';
const MIN_WORDS = 754;

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;
// A Markdown link whose target is not internal (does not begin with "/").
const MD_LINK = /\[[^\]]*\]\((?![/#])[^)]+\)/g;
const HTML_LINK = /<a\s[^>]*href=/gi;
const BARE_URL = /(?<![("[\w])https?:\/\/\S+/g;

function words(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

const files = (await readdir(DIR)).filter((f) => f.endsWith('.md')).sort();
if (files.length === 0) {
  console.error(`check-content: no entries found in ${DIR}`);
  process.exit(1);
}

const problems = [];
const report = [];

for (const file of files) {
  const raw = await readFile(join(DIR, file), 'utf8');
  const fm = raw.match(FRONTMATTER);
  if (!fm) {
    problems.push(`${file}: no frontmatter block`);
    continue;
  }
  const body = raw.slice(fm[0].length);
  const kind = /^kind:\s*(\S+)/m.exec(fm[1])?.[1] ?? '?';
  const count = words(body);

  const short = count < MIN_WORDS;
  if (short) {
    problems.push(
      `${file}: ${count} words, needs at least ${MIN_WORDS} ` +
        `(the partner's own entry length — see MIN_WORDS)`,
    );
  }

  const links = [
    ...(body.match(MD_LINK) ?? []),
    ...(body.match(HTML_LINK) ?? []),
    ...(body.match(BARE_URL) ?? []),
  ];
  if (links.length > 0) {
    problems.push(
      `${file}: ${links.length} external link(s) in the body — outbound links must go ` +
        `through ProviderLink.astro so they carry the right rel. Internal links starting ` +
        `with "/" are fine. First: ${links[0].slice(0, 60)}`,
    );
  }

  report.push({ file, kind, count, ok: !short && links.length === 0 });
}

const w = Math.max(...report.map((r) => r.file.length), 4);
console.log(`check-content: ${report.length} entr${report.length === 1 ? 'y' : 'ies'}, minimum ${MIN_WORDS} words\n`);
console.log(`${'FILE'.padEnd(w)}  ${'KIND'.padEnd(8)}  ${'WORDS'.padStart(6)}  STATUS`);
for (const r of report) {
  console.log(
    `${r.file.padEnd(w)}  ${r.kind.padEnd(8)}  ${String(r.count).padStart(6)}  ${r.ok ? 'ok' : 'FAIL'}`,
  );
}

if (problems.length > 0) {
  console.error(`\ncheck-content: ${problems.length} problem(s):`);
  for (const p of problems) console.error(`  - ${p}`);
  process.exit(1);
}
console.log('\ncheck-content: all entries pass.');
