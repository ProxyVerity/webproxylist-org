---
name: Decodo
domain: decodo.com
url: https://decodo.com/
category: Residential proxies and scraping APIs
countries: [United States, United Kingdom, Germany, France, Canada, Japan, Australia]
locations_claimed: 195+ locations (provider's figure)
protocols: [HTTP, HTTPS, SOCKS5]
pricing_from: "$2"
pricing_unit: per GB, residential at volume
rotation: Per request, or sticky for up to 30 minutes
api: true
summary: The provider formerly known as Smartproxy — residential, ISP, datacenter and mobile pools alongside scraping APIs, and the clearest published documentation of rotation and authentication in this directory.
kind: listing
updated: 2026-11-24
order: 40
---

## Formerly Smartproxy

Decodo is the same company that operated as Smartproxy; the rename took effect in **April
2025** and the old domain still appears in the footer. If you are reading older comparisons,
benchmarks or forum threads, they are describing this service under the previous name. That
matters when evaluating third-party reviews, since a 2024 verdict on Smartproxy is a verdict
on Decodo.

## What Decodo sells

Six self-service lines: **residential**, **ISP**, **mobile** and **datacenter** proxies, plus
**Site Unblocker** and a **Web Data API** exposing scrape, search, map and crawl endpoints. A
seventh line, High-Speed Proxies, is quoted as price on request.

The split between raw proxies and finished scraping endpoints is the structural choice here.
A proxy makes the request look different; an unblocker product takes responsibility for the
request succeeding. The second is more expensive per unit and removes a category of work from
your side. Decodo sells both and prices them separately, which makes the trade visible
instead of bundled.

## What it documents that others do not

Two facts are published here that most competitors leave unstated, and both are the ones that
decide whether a provider fits a given workflow.

**Rotation is specified.** You can rotate the address **per request**, or hold one for **up
to 30 minutes**. A stated ceiling on sticky duration is the single most useful number for
anyone running multi-step sequences — a login followed by a cart followed by a checkout
breaks if the address changes underneath it, and "sticky sessions supported" without a
duration is not an answer.

**Authentication is specified.** Both **username-and-password** and **IP whitelisting** are
offered. Credential authentication matters whenever your workers run on dynamic or ephemeral
addresses, where whitelisting is impractical.

Protocols are also stated plainly: **HTTP, HTTPS and SOCKS5**, with output available as
endpoint-and-port, HTTPS or SOCKS5.

Across the providers reviewed for this directory, Decodo is the only one whose own pages
answer all three questions without a support conversation.

## Network size and coverage

The homepage claims **125M+ IPs**; the residential pricing page says **115M+**. The two pages
disagree, and neither explains the gap. Both figures are large enough that the difference is
unlikely to affect a buying decision, but it is a reminder to treat pool sizes across this
industry as marketing rather than measurement.

Coverage is stated as **195+ locations**. Targeting is unusually granular: **continent,
country, state, city, ZIP code and ASN**. ASN targeting for datacenter and ISP products is
described as recently added.

## Pricing

Residential is sold on declining per-gigabyte tiers, published in full:

- 3 GB — **$3.75 per GB**
- 10 GB — **$3.50 per GB**
- 25 GB — **$3.25 per GB**
- 50 GB — **$3.00 per GB**
- 100 GB — **$2.75 per GB**
- 250 GB — **$2.50 per GB**
- 1,000 GB — **$2.00 per GB**

The headline "From $2/GB" therefore describes the thousand-gigabyte tier, not the entry
point. The practical entry price for a small buyer is $3.75 per GB on the 3 GB plan.

Other lines, as published: **ISP from $0.27 per IP**, **datacenter from $0.02 per IP**,
**mobile from $2.25 per GB**, **Site Unblocker from $0.95 per 1,000 requests**, and the **Web
Data API from $0.15 per 1,000**.

The datacenter rate is the striking one. At two cents per address, datacenter proxies are
cheap enough that the deciding factor is almost never price but whether your target tolerates
datacenter ranges at all.

## Pay as you go, and its restrictions

Pay-as-you-go residential is **$4 per GB** — above every monthly tier, which is the expected
premium for no commitment. Three restrictions apply and are easy to miss: it is **wallet-only**,
it is bought **one gigabyte at a time**, and it **cannot be combined with a monthly
subscription**. That last point rules out the common pattern of holding a small monthly plan
and topping up during spikes.

## Trials

Residential offers a **3-day free trial with 100 MB**. The Web Data API has a free starter
allocation of **$5 in testing credits, up to 10,000 requests**.

**A conflict to note.** The homepage footer advertises a **14-day free trial**, which does not
match the 3-day residential trial stated on the pricing page. They are probably describing
different products, or the footer may be stale. Confirm which applies to the product you
intend to test.

Self-service purchases carry a **14-day money-back** window, conditions applying.

## API and tooling

A single API key covers the Web Data API. Beyond the dashboard, Decodo publishes an **MCP
server**, a **CLI**, and **Python and TypeScript SDKs**. The SDK coverage is more complete
than most of this market offers and reduces the amount of glue code between a proxy purchase
and a working pipeline.

## Stated limits

The smallest residential monthly plan is **3 GB**. The free trial is **100 MB**.
Pay-as-you-go is **1 GB per purchase**. Concurrency limits are not stated on the pages
reviewed.

## Who it suits

Decodo suits buyers who want their questions answered before purchase rather than after.
Documented rotation ceilings, both authentication methods, explicit protocol support and a
fully published price ladder make it straightforward to evaluate on paper — which is not true
of most of this market.

It suits less well anyone needing pay-as-you-go flexibility alongside a monthly plan, since
the two cannot be combined, or anyone whose budget depends on the headline $2 rate without
committing to a thousand gigabytes.
