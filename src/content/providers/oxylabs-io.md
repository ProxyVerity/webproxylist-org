---
name: Oxylabs
domain: oxylabs.io
url: https://oxylabs.io/
category: Enterprise residential and scraping infrastructure
countries: [United States, United Kingdom, Germany, Japan, Canada, Australia, Netherlands]
locations_claimed: 195 locations (provider's figure)
protocols: [Not stated by the provider]
pricing_from: "$15"
pricing_unit: per month, Starter plan
rotation: Not stated by the provider
api: true
logo: /logos/oxylabs-io.png
screenshot: /shots/oxylabs-io.jpg
summary: Large-scale proxy and scraping infrastructure sold in monthly plan tiers from a $15 starter through enterprise contracts, with published per-gigabyte rates for each product line.
kind: listing
updated: 2026-11-24
order: 50
---

## What Oxylabs sells

Oxylabs — legally Oxylabs, UAB — runs one of the broadest product lines in this market.
Proxies come as **residential**, **mobile**, **ISP**, **dedicated ISP** and **datacenter**.
On top of those sit **Web Unblocker**, an **Agent Browser**, a **Web API** with search and
scrape endpoints, and prebuilt **Datasets** for buyers who want the data rather than the
means of collecting it.

The Datasets line is worth separating out mentally. Everything else on the list is
infrastructure you operate; Datasets is a finished product. If the question is "do we need a
proxy network", one honest answer is sometimes "no, we need the data someone already
collected", and relatively few proxy sellers will offer you that alternative.

## Network scale

The company advertises **177M+ IPs** overall, with **175M+** attributed to residential, and
page metadata citing **2M datacenter IP proxies**. Coverage is stated as **195 locations**.

Those figures place Oxylabs among the largest networks here by claimed size. As elsewhere in
this industry, the numbers are the provider's own and are not independently audited; treat
them as an indication of order of magnitude rather than a measurement.

## Pricing: plan tiers plus per-unit rates

Oxylabs prices in two layers at once, which takes a moment to parse. There are **monthly plan
tiers**:

- **Starter — $15 per month**
- **Basic — $100 per month**
- **Flexible — $500 per month**
- **Enterprise — from $2,500 per month**

And there are **per-unit rates** that decline with volume:

- **Residential:** $5 per GB up to 1 GB, falling to **$2 per GB** at 1,250 GB and above
- **ISP:** $1.50 per IP, up to 3 IPs
- **Datacenter, per IP:** $1 per IP, up to 5 IPs
- **Datacenter, per GB:** $0.60 per GB, up to 8.3 GB
- **Mobile:** $7.50 per GB, up to 0.7 GB
- **Web Unblocker:** $7.20 per GB
- **Agent Browser:** $8 per GB

The $15 Starter tier is a genuinely low entry point for a provider that also sells
$2,500-a-month enterprise contracts, and it means Oxylabs is not off the table for a small
team simply because its marketing speaks to large ones.

Note that the headline residential rate of $2 per GB requires over a terabyte of monthly
commitment. At the volumes a small team actually buys, the applicable figure is nearer $5.

**VAT may apply** on top of these prices, which the pricing page states explicitly. Payment
is accepted by card, wire transfer in dollars or euros, AliPay and PayPal.

## Getting started without committing

Oxylabs offers **$5 in welcome credits** toward any product, and a "start for free" path.
Accounts can be topped up from the dashboard. Pay-as-you-go is not named as such on the pages
reviewed, so if no-commitment buying is a requirement, confirm the mechanism.

## What is not published, and why it matters

Three things that a technical buyer needs are absent from the pages reviewed.

**Protocols are not stated.** Whether SOCKS5 is available alongside HTTP is not answered.

**Authentication is not stated.** Neither credential auth nor IP whitelisting is described.

**Rotation is not stated.** No per-request behaviour, no sticky session types, no maximum
session duration.

For a provider positioning itself at the top of this market, that is a conspicuous set of
omissions — these are exactly the parameters an engineer evaluates before a pilot. The
information certainly exists in the documentation and with the sales team; the point is that
it is not on the pages a buyer reads first, so budget a conversation before you can make a
technical decision.

## Targeting

Coverage of 195 locations is stated. **City-level targeting is not described** on the pages
reviewed, which is a gap relative to competitors that advertise ZIP-level control.

ASN targeting appears in product release notes rather than on the main pages: dedicated ISP
now includes named ASNs such as Internet Initiative Japan and Virgin Media in the UK. The
presence of specific named carriers suggests ASN selection is available on that product, but
the scope is not documented generally.

## API and tooling

The dashboard provides **real-time spending and usage data**, which is more useful than it
sounds for metered products where a misconfigured job can consume a month's budget overnight.
Beyond the Web API, Oxylabs publishes an **MCP server** and **Agent Skills** on GitHub,
aimed at driving the service from agent frameworks.

## How the company positions itself

In its own words: "industry-leading success rates". It also cites third-party recognition —
"Best Proxy for Businesses" from CNET and "Most Scalable Provider" from Proxyway. Success
rate is the right metric to lead with for an unblocking product, though published rates
across this industry are self-reported and measured against undisclosed target sets.

## Stated limits

Plan limits exist and are raised by contacting an account manager rather than through
self-service — the pricing page says so directly. Enterprise begins at **$2,500 per month**.
Bandwidth caps and concurrency limits are not stated.

The account-manager route for limit increases is the clearest signal of where this provider
sits: it is built around managed relationships, and the self-service tiers are an on-ramp to
that rather than the main product.

## Who it suits

Oxylabs fits teams that expect to scale into significant volume and want one vendor covering
proxies, unblocking, agent browsing and finished datasets. The $15 starter tier makes an
initial trial cheap, and the welcome credit makes it nearly free.

It fits less well a team that needs to settle protocol, authentication and session behaviour
from public documentation before talking to anyone. Those answers require contact here, and
if that is a blocker, a provider that publishes them will move faster.

## Compare with

- [Decodo](/decodo-com/) — publishes the protocol, authentication and rotation detail that
  Oxylabs leaves to a sales conversation.
- [Bright Data](/brightdata-com/) — the closest competitor on coverage and product range,
  with a far higher monthly entry point.
- [Webshare](/webshare-io/) — much narrower, but everything is self-service and priced in
  public.
