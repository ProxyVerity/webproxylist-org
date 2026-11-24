---
name: Bright Data
domain: brightdata.com
url: https://brightdata.com/
category: Enterprise web data infrastructure
countries: [United States, United Kingdom, Germany, India, Brazil, Japan, Australia]
locations_claimed: 195 countries (provider's figure)
protocols: [SOCKS5]
pricing_from: "$4.00"
pricing_unit: per GB, pay-as-you-go with coupon
rotation: Rotating residential with extended session control; durations not specified
api: true
summary: The largest claimed proxy network in this directory, sold with genuine no-commitment pay-as-you-go alongside monthly plans that start at several hundred dollars.
kind: listing
updated: 2026-11-24
order: 60
---

## What Bright Data sells

Bright Data describes itself as "the world's #1 web data infrastructure for humans and AI
agents", and the product list matches that scope. Proxies come as **residential**, **ISP**,
**datacenter** and **mobile**. Above them sits a layer of web access APIs — **Unlocker API**,
**SERP API**, **Browser API** and **Crawl API** — then **Scraper APIs**, prebuilt
**Datasets**, a **Web Archive** and **Data Feeds**.

That is four distinct levels of abstraction, from a raw address you route through yourself up
to a maintained feed delivered to you. Few competitors cover the whole range, and the
practical consequence is that you can start at one level and move without changing vendor.

## Network scale, and a caveat on the numbers

**400M+ proxy IPs across 195 countries** is the headline, with 400M+ attributed to monthly
residential and **7M+ mobile IPs**. That is the largest claim among the providers in this
directory by a wide margin.

**The ISP and datacenter figures do not reconcile.** The proxy network page lists
"1,300,000+ Datacenter IPs" in one block and "1.3M+ ISP IPs" in another; the homepage gives
1,300,000+ for ISP. The same number is attached to two different products on the same page,
which means at least one of them is wrong. If either product is what you are buying, get the
figure confirmed rather than relying on the page.

This is not a reason to dismiss the provider — it is a reason to treat published pool sizes
across this entire market as approximate. They are marketing figures, not audited counts, and
here the internal inconsistency makes that visible.

## Targeting

Targeting granularity differs by product, and Bright Data is unusually clear about the
difference:

- **Residential and mobile:** city, ASN and ZIP code level
- **Datacenter and ISP:** country and city level

ASN targeting on both residential and mobile is a meaningful capability for anyone who needs
traffic to appear to originate on a particular carrier rather than merely in a particular
place.

## Pricing

Two shapes, and the gap between them is wide.

**Pay as you go** is listed at **$8 per GB**, shown as **$4.00 per GB** with a coupon code.
There is no commitment. The company confirms directly that proxies can be bought without a
monthly commitment, on all proxy types.

**Monthly plans** for residential:

- **$499 per month** — 141 GB, about $3.50 per GB
- **$999 per month** — 332 GB, about $3.00 per GB
- **$1,999 per month** — 798 GB, about $2.50 per GB
- Above 1 TB — custom pricing

**Per-IP tiers:**

- 10 IPs — $1.80 per IP, $18 billed monthly
- 100 IPs — $1.45 per IP, $145
- 500 IPs — $1.40 per IP, $700
- 1,000 IPs — $1.30 per IP, $1,300

Two things to take from this. First, the **entry monthly plan is $499** — an order of
magnitude above the entry points at Webshare, IPRoyal or Decodo. This is priced for
organisations, and the pay-as-you-go route is the realistic option for anyone smaller.

Second, **the $4.00 per GB headline depends on a coupon**. The list rate is $8. Coupons come
and go; budget against the rate you can actually confirm at purchase, not the struck-through
one.

Note also that the main pricing page carries **no numbers at all** — it lists products with
links. The figures above come from the dedicated proxy network pricing page. If you looked at
the obvious page and concluded prices were hidden, that is why.

## Trials and credits

Free trials are offered **on all proxy types**, and the company advertises a **first deposit
match of up to $500**. For a provider whose entry plan is $499, a deposit match materially
changes the cost of a serious evaluation.

## Protocols, authentication and session control

**SOCKS5 is stated**, listed for each proxy type in conjunction with the Proxy Manager.
HTTP and HTTPS are not explicitly stated on the pages reviewed, which is an odd omission
given they are near-universal — assume they exist but confirm.

**Authentication is not stated.** Access is organised around a **Proxy Manager** and a
control panel with an API, rather than described in terms of credentials or IP whitelists.

Rotation is described as rotating residential with **extended session control**, and
developers are told they can take full control of IP rotation through the Proxy Manager.
**No session durations are given numerically.** As with most of this market, the specific
number you need is the one not published.

## Compliance

**KYC is required for residential and mobile** products. This is stricter than much of the
market and reflects the regulatory attention paid to residential proxy sourcing. Expect
verification friction at onboarding, and treat it as a quality signal rather than an
obstacle: networks that do not verify their customers accumulate the abuse that gets ranges
blocked.

## Controls and limits

Usage spend limits can be set **per zone**, by bandwidth in bytes or by money spent in
dollars. For a metered product bought by a team, this is the control that prevents a
misconfigured job from consuming the quarter's budget, and it is better than most competitors
offer. Monthly minimum account commitments apply on the listed plans. Concurrency limits are
not stated.

A **real-time network status page** is published, alongside the control panel and API.

## Who it suits

Bright Data suits organisations that need the widest geographic and product coverage
available and can absorb either the $499 monthly entry or the per-gigabyte pay-as-you-go
rate. The four-level product ladder means you are unlikely to outgrow it.

For small teams, the pay-as-you-go route is viable and the deposit match softens evaluation
costs — but at $8 per GB list, a cheaper provider will usually win on economics alone unless
you specifically need the coverage, the ASN targeting or the unblocking products.
