---
name: Webshare
domain: webshare.io
url: https://www.webshare.io/
category: Datacenter and residential proxies
countries: [United States, United Kingdom, Germany, France, Canada, Japan, Brazil]
locations_claimed: 195 countries (provider's figure)
protocols: [HTTP, SOCKS5]
pricing_from: "$2.99"
pricing_unit: per month, 100 datacenter proxies
rotation: Not stated by the provider
api: true
summary: Self-service datacenter, static ISP and rotating residential proxies with unusually granular plan sizing, published per-unit prices and a permanent free tier.
kind: listing
updated: 2026-11-24
order: 20
---

## What Webshare sells

Webshare runs three product lines rather than one pool with options. **Proxy Server** is its
datacenter product, sold by the proxy rather than by the gigabyte. **Static Residential** is
an ISP product, also sold per proxy, where the address stays the same between requests.
**Rotating Residential** is the per-gigabyte residential pool. Both the datacenter and static
residential lines are offered in shared, private and dedicated variants, which is the lever
that moves price most on those products.

The split matters when comparing against providers who quote a single per-gigabyte rate,
because two of Webshare's three products are not priced that way at all. A fixed set of
datacenter proxies at a flat monthly cost behaves very differently in a budget from metered
residential bandwidth, and Webshare is one of the few providers that will sell either shape
without a sales conversation.

## Network size and coverage

The company advertises **80M+ IPs across 195 countries** for residential, and **400K+**
addresses for the datacenter product. Per-country counts are published on the front page
rather than hidden — the United States figure is listed as 6,652,539 addresses, which is the
kind of number most providers round off or omit entirely.

**One figure to treat carefully.** The homepage says 195 countries, while the pricing page
describes the Proxy Endpoints and Locations options as covering **50+ countries**. These are
almost certainly describing different products — the 195 belongs to the residential pool and
the 50+ to datacenter endpoints — but the pages do not say so, and the two numbers sit close
enough together to mislead. If geography is the deciding factor for your use case, confirm
the list for the specific product you intend to buy rather than the headline figure.

## Targeting

Webshare offers filtering by country, state, city and ZIP code. The rotating residential
product adds ASN-level targeting on top of those, which is the control you want when the
destination treats particular carriers or hosting networks differently. ZIP-level targeting
is less common than city-level at this price point and is worth noting for anyone verifying
locally-targeted advertising or regional storefronts.

## Protocols and authentication

**HTTP and SOCKS5** are both supported, stated on the pricing page under Proxy Endpoints and
repeated in the free-plan documentation. SOCKS5 availability on the cheapest tier is not
universal in this market, so it is worth registering.

Authentication is documented as **IP authorisation**: you whitelist the addresses that are
allowed to use your proxies. Username-and-password authentication is not stated on the pages
reviewed. That distinction matters operationally — IP whitelisting is awkward when your
workers run on dynamic addresses or on ephemeral cloud instances, and if you need credential
auth you should confirm it before committing.

## Pricing

Webshare publishes per-unit prices rather than requiring a quote, which makes it one of the
easier providers in this directory to budget against.

- **Proxy Server (datacenter):** from **$2.99 per month** for 100 proxies, which works out to
  roughly $0.0299 per proxy per month.
- **Static Residential (ISP):** from **$6 per month** for 20 proxies, around $0.30 per proxy.
- **Rotating Residential:** **$3.50 per GB** on a 1 GB plan, declining to **$1.40 per GB** at
  the 3,000 GB tier.

The company describes its own approach as "Most Customizable Pricing" and lets you choose
proxy count, bandwidth and location independently rather than picking from fixed bundles.
That is the genuine differentiator here: most competitors sell tiers, and Webshare sells
dimensions.

**A second figure to treat carefully.** The homepage shows "$3.50/month" for Rotating
Residential, while the documentation describes $3.50 as a **per-gigabyte** rate. Those are
very different commitments. Read the plan builder before assuming the monthly reading.

## The free plan

There is a **permanent free tier**: 10 proxies with 1 GB of monthly bandwidth, no credit card
required. It is not a time-limited trial that expires into a paywall, which makes Webshare
unusually practical for evaluating whether a proxy layer solves your problem before any
spending decision. Plans can be changed mid-month, and cancelling is done by switching back
down to the free plan rather than through a support request.

## API and tooling

A documented REST API covers proxy management programmatically, alongside a dashboard with
plan and usage statistics, a browser extension, and a published MCP server for driving the
service from AI agent tooling. The MCP server is a recent addition across this market and its
presence suggests the company is tracking agent-driven workloads rather than only classic
scraping.

## Limits worth knowing before you buy

Bandwidth on the Proxy Server and Static Residential plans is quoted as a range from **250 GB
to unlimited**, with "unlimited" explicitly **subject to a fair usage policy** — so it is not
unlimited in the literal sense, and the ceiling is not published. Concurrency is quoted as
**500 to 3,000 threads** depending on plan.

Refunds are available only **within two days** of purchase and only below certain usage
thresholds, which is tighter than the fourteen-day money-back windows some competitors offer.
The free plan is capped at 1 GB per month. No minimum contract term beyond monthly billing is
stated.

## Who it suits

Webshare fits developers and small teams who want to buy a specific, modest quantity of
proxies without talking to anyone, and who would rather read a price than request a quote.
The free tier makes it a sensible first stop for testing. Teams that need credential-based
authentication, a contractual bandwidth ceiling, or documented rotation behaviour should
confirm those points directly, because the public pages do not cover them.

Rotation behaviour in particular is not described on the pages reviewed — neither per-request
rotation nor sticky session durations are stated — and for residential work that is usually
the first thing you need to know.
