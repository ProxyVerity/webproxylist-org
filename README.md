# webproxylist.org

A directory of commercial proxy providers. Static Astro site, deployed on Cloudflare Pages.
Operated by the team behind ProxyVerity; the ownership is disclosed on `/about/` and in the
footer of every page.

## Why static, and why Pages

The previous incarnation of this site was WordPress on a server that died. The domain stayed
delegated to Cloudflare with A records pointing at the dead origin, so every request got a
**526** (Cloudflare cannot validate the origin certificate) for months, until a partner
reported it.

Cloudflare Pages removes that failure mode by construction: pages are served by Cloudflare
itself, there is no origin and no origin certificate to expire. There is also no database, no
admin panel, no PHP at runtime and no plugins to patch.

## Adding a provider

One file in `src/content/providers/`, named for the slug. The slug is the provider's domain
with dots replaced by dashes, and it becomes the URL at the site root:

```
src/content/providers/mobileproxies-org.md  ->  https://webproxylist.org/mobileproxies-org/
```

Flat at the root, not under `/providers/` or `/reviews/`. That is not a style choice: the old
site used this scheme, and partners already link to those paths.

### The two kinds of entry

Declared in frontmatter as `kind`, and the schema enforces the difference:

| `kind` | What it is | `backlink` | Body text |
|---|---|---|---|
| `exchange` | a real placement swap — the provider published an article about ProxyVerity | **required** | supplied by the vendor |
| `listing` | a directory entry we wrote from the provider's public pages | **forbidden** | ours |

`kind: exchange` without `backlink` fails the build. `kind: listing` with `backlink` fails
the build. This is deliberate: six months from now nobody will remember which pages carried
an actual agreement, and `scripts/check-partners.mjs` relies on the distinction to know what
to check.

Pages with `kind: exchange` automatically carry the line *"Description supplied by the
vendor"* above the text. Listings do not, because their text is ours.

### Rules the build enforces

`npm run build` runs `scripts/check-content.mjs` first, so a violation cannot reach the site:

1. **Minimum length: 754 words per entry body.** That number is the measured length of the
   vendor copy supplied by mobileproxies.org — the requirement is that our entries are no
   shorter than the partner's, so the threshold is taken from their text rather than invented.
2. **No links inside entry bodies.** Every outbound link is rendered by
   `src/components/ProviderLink.astro`, which takes its `rel` from the single constant in
   `src/lib/rel.ts`. A Markdown link in a body would bypass that component and ship with no
   `rel` at all. The CTA at the top of each page is the outbound link; bodies carry prose.

## Logos and screenshots

Each entry carries two optional images, both served from `public/`:

- `logo:` → `/logos/<slug>.png` — taken from the provider's own `apple-touch-icon` where
  they publish one (usually 180x180), otherwise whatever icon their `<head>` declares.
- `screenshot:` → `/shots/<slug>.jpg` — their home page at 1280x800, captured in a browser.

Capturing a home page is not quite a screenshot button. Two things have to be dealt with
first, and both were hit on the initial pass:

1. **Consent banners and chat widgets.** Remove the fixed-position elements before the
   shot rather than clicking "Accept All" — the directory should not be consenting to
   anything on anyone's behalf, and a dismissed banner is a cookie set.
2. **Deliberate blur.** Bright Data's home page renders most of its hero behind a CSS
   `filter: blur(...)`, so the first capture came out soft everywhere except the headline.
   Scrolling to trigger reveal animations did not clear it; setting `filter: none` on the
   38 affected elements did.

Re-shoot when a provider redesigns, and move the entry's `updated` date with it — the
caption under each screenshot prints that date, so a stale image is self-reporting.

## Outbound links

One constant, `OUTBOUND_REL` in `src/lib/rel.ts`, value `noopener noreferrer`. It mirrors
byte for byte what mobileproxies.org puts on its link to proxyverity.com.

It is consumed only by `ProviderLink.astro`. Nothing else in the project writes a `rel`
attribute on an external link, because the one reliable way to end up with different `rel`
values on different pages is to type the attribute by hand N times.

**There is exactly one link to proxyverity.com on the whole site**, from `/about/`. Keep it
that way.

## Checking that the exchanges are still alive

```sh
npm run check:partners
```

Fetches the `backlink` page of every `kind: exchange` entry and reports HTTP status, whether
the link to proxyverity.com is still there, its exact `rel`, and whether the page has gone
`noindex`. Three states:

| State | Meaning | Exit code |
|---|---|---|
| `OK` | 200, link present, no `nofollow`, no `noindex` | 0 |
| `DEGRADED` | link present but `nofollow` appeared, or the page is `noindex` | 0, with a note |
| `BROKEN` | page is not 200, or the link is gone | **non-zero** |

`listing` entries are skipped by design and counted in one summary line — they have no
reciprocal link and never will, and complaining about them would bury the real signal.

The `noindex` check is not hypothetical. An article of ours on dev.to stayed up, kept its
link, and went `noindex`; nothing announced it.

## Commands

```sh
npm install
npm run dev              # local server
npm run build            # runs check-content, then builds to dist/
npm run check:content    # length + no-links gate, on its own
npm run check:partners   # exchange health
```

## Deployment

Cloudflare Pages, project `webproxylist-org`, build command `npm run build`, output `dist`.

`public/_redirects` holds 301s for the nine review URLs the WordPress site served in December
2024 (recovered from its access log) plus the theme leftovers. Those paths hold inbound links,
and the current model has no editorial free-list reviews to restore them to, so they point at
the directory root rather than 404. `/proxylib-com-review/` is deliberately not restored:
proxylib.com is a lost domain, now parked on spam.
