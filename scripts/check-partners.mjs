#!/usr/bin/env node
/**
 * Placement-exchange health check.
 *
 * Looks ONLY at entries with kind: exchange. A `listing` entry is a catalogue
 * page we wrote ourselves; no reciprocal link exists and none is expected, so
 * reporting one as a failure would bury the real signal in noise. Listings are
 * counted in one summary line and otherwise ignored.
 *
 * For each exchange it fetches the partner page named in `backlink` and
 * reports three things that can each kill the placement silently:
 *   - the page still returning 200
 *   - a link to proxyverity.com still being present
 *   - that link not having acquired nofollow, and the page not noindex
 *
 * The last one is not hypothetical: an article of ours on dev.to stayed up,
 * kept its link, and went noindex. Nothing announced it.
 *
 * Exit code is non-zero only for BROKEN, so the weekly run fails when an
 * agreement is actually gone — not when a partner merely changed an attribute.
 */

import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIR = 'src/content/providers';
const TARGET = 'proxyverity.com';
const TIMEOUT_MS = 20000;
const UA = 'webproxylist-link-check/1.0';

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

function field(fm, name) {
  const m = new RegExp(`^${name}:\\s*(.+)$`, 'm').exec(fm);
  return m ? m[1].trim().replace(/^["']|["']$/g, '') : undefined;
}

/** The anchor pointing at TARGET, plus its rel, taken from raw HTML. */
function findLink(html) {
  const re = /<a\b([^>]*)>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const attrs = m[1];
    const href = /href\s*=\s*["']([^"']+)["']/i.exec(attrs);
    if (!href || !href[1].includes(TARGET)) continue;
    if (/^https?:\/\//i.test(href[1]) === false) continue; // skip local /ru/ variants
    const rel = /rel\s*=\s*["']([^"']*)["']/i.exec(attrs);
    return { href: href[1], rel: rel ? rel[1] : '' };
  }
  return null;
}

function hasNoindex(html) {
  const re = /<meta\b[^>]*name\s*=\s*["']robots["'][^>]*>/gi;
  return (html.match(re) ?? []).some((tag) => /noindex/i.test(tag));
}

const files = (await readdir(DIR)).filter((f) => f.endsWith('.md')).sort();

const exchanges = [];
let listings = 0;

for (const file of files) {
  const raw = await readFile(join(DIR, file), 'utf8');
  const fm = raw.match(FRONTMATTER)?.[1];
  if (!fm) continue;
  if (field(fm, 'kind') !== 'exchange') {
    listings += 1;
    continue;
  }
  exchanges.push({
    file,
    name: field(fm, 'name') ?? file,
    backlink: field(fm, 'backlink'),
  });
}

if (exchanges.length === 0) {
  console.log(`check-partners: no exchange entries. ${listings} listing(s) skipped by design.`);
  process.exit(0);
}

const rows = [];

for (const e of exchanges) {
  const row = { name: e.name, status: '-', link: '-', rel: '-', state: 'BROKEN', note: '' };
  try {
    const res = await fetch(e.backlink, {
      redirect: 'follow',
      headers: { 'user-agent': UA, accept: 'text/html' },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    row.status = String(res.status);
    const html = await res.text();

    if (!res.ok) {
      row.note = `page returned ${res.status}`;
    } else {
      const link = findLink(html);
      if (!link) {
        row.link = 'missing';
        row.note = `no link to ${TARGET} on the page`;
      } else {
        row.link = 'found';
        row.rel = link.rel || '(none)';
        const nofollow = /nofollow/i.test(link.rel);
        const noindex = hasNoindex(html);
        if (nofollow || noindex) {
          row.state = 'DEGRADED';
          row.note = [nofollow && 'link is nofollow', noindex && 'page is noindex']
            .filter(Boolean)
            .join('; ');
        } else {
          row.state = 'OK';
        }
      }
    }
  } catch (err) {
    row.note = `fetch failed: ${err.message}`;
  }
  rows.push(row);
}

const w = (key, head) => Math.max(head.length, ...rows.map((r) => String(r[key]).length));
const wn = w('name', 'PARTNER');
const wr = w('rel', 'REL');

console.log(`check-partners: ${rows.length} exchange(s) checked, ${listings} listing(s) skipped by design\n`);
console.log(
  `${'PARTNER'.padEnd(wn)}  ${'HTTP'.padStart(4)}  ${'LINK'.padEnd(7)}  ${'REL'.padEnd(wr)}  STATE`,
);
for (const r of rows) {
  console.log(
    `${r.name.padEnd(wn)}  ${r.status.padStart(4)}  ${r.link.padEnd(7)}  ${String(r.rel).padEnd(wr)}  ${r.state}`,
  );
}

const notes = rows.filter((r) => r.note);
if (notes.length > 0) {
  console.log('');
  for (const r of notes) console.log(`  ${r.state}  ${r.name}: ${r.note}`);
}

const broken = rows.filter((r) => r.state === 'BROKEN');
const degraded = rows.filter((r) => r.state === 'DEGRADED');

console.log(
  `\nsummary: ${rows.filter((r) => r.state === 'OK').length} ok, ` +
    `${degraded.length} degraded, ${broken.length} broken`,
);

process.exit(broken.length > 0 ? 1 : 0);
