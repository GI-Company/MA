# GIC Website Studio — Semantic Business Website Showcase

This repository's `main` branch is the GIC Website Studio: a reusable, mobile-friendly showcase of four **five-page fictional business websites**. The concepts demonstrate meaningful HTML5 structure, accessible controls and separate page URLs instead of a long single-screen pitch.

## Preserved Mountain Automotive demo

The previous personalized Mountain Automotive & Tire website, HTML/CSS/JavaScript, logo and all 20 original images remain preserved under [archive/mountain-automotive](https://github.com/GI-Company/MA/tree/archive/mountain-automotive). The main branch contains no Mountain Automotive client branding or media. **Do not delete the archive branch.**

## GIC portfolio

- `index.html` — Studio landing page.
- `templates.html` — Working template portfolio.
- `industries.html` — Industry examples.
- `pricing.html` — GIC introductory package pricing ($499 Starter, $750 Business, $1,000 Growth).
- `contact.html` — GIC inquiry composer (opens email application).

## Four complete five-page websites

Each demo has distinct semantic pages:

| Template | Home | Services | About | Gallery | Contact |
|---|---|---|---|---|---|
| Peak Auto & Tire | [Home](demos/automotive.html) | [Services](demos/automotive-services.html) | [About](demos/automotive-about.html) | [Gallery](demos/automotive-gallery.html) | [Contact](demos/automotive-contact.html) |
| Blue Ridge Lawn Co. | [Home](demos/landscaping.html) | [Services](demos/landscaping-services.html) | [About](demos/landscaping-about.html) | [Gallery](demos/landscaping-gallery.html) | [Contact](demos/landscaping-contact.html) |
| ClearLine Exterior Care | [Home](demos/pressure-washing.html) | [Services](demos/pressure-washing-services.html) | [About](demos/pressure-washing-about.html) | [Gallery](demos/pressure-washing-gallery.html) | [Contact](demos/pressure-washing-contact.html) |
| Juniper & Oak Coffee | [Home](demos/cafe.html) | [Services](demos/cafe-services.html) | [About](demos/cafe-about.html) | [Gallery](demos/cafe-gallery.html) | [Contact](demos/cafe-contact.html) |

The original home URL for each demo is preserved. Other pages use the same `demos/` directory with `-services`, `-about`, `-gallery`, and `-contact` suffixes.

- `demos/demo.css` — Shared responsive style system and differentiated theme variants.
- `demos/demo.js` — Dedicated accessible mobile navigation and transparent email inquiry flow.
- `SEMANTIC_STANDARDS.md` — Mandatory semantic, mobile and accessibility checks for all future GIC development.
- `IMAGE_CREDITS.md` — Source photo URLs and licensing notes.
- `styles.css` / `script.js` — Studio site assets (separate from demo-specific assets).

All fictional sites have a visible disclaimer, `noindex,nofollow` metadata, distinct titles/descriptions, unique H1 per page, skip link, header/navigation/main/footer landmarks, clear heading hierarchy, breadcrumb navigation on interior pages, accessible images, semantic service articles and figure-based galleries. Mobile DOM reading order places meaningful content before supporting images.

## Preview and deployment

Static HTML, CSS and vanilla JavaScript. Serve the repository directory on any standard static web host (Vercel or local `python3 -m http.server`). No build scripts or framework dependencies. Internet connectivity is needed for the linked Unsplash image assets and optional Google Fonts.

**Important:** This repository may still be connected to the old `mountinautomotivetire.vercel.app` Vercel project. The user plans to discontinue that URL. Connect to an appropriate GIC-branded deployment before marketing the studio.

## Inquiry behavior

Studio and demo forms create an email draft in the visitor's configured email application and do **not** transmit messages to a server. No private personal data is stored here. Replace with a privacy-conscious authenticated backend if a future client needs direct form submissions.

## Client handoff

Use `SEMANTIC_STANDARDS.md` as the required baseline before launching every GIC client site. Verify business identities, claims, and contact details before publishing. Sample packages are estimates only and require an agreed scope. No search ranking or other marketing outcome is guaranteed.

## October 2026 local business launch offer

- **Starter $499 one-time:** 3 dedicated pages, semantic/responsive markup and foundational metadata.
- **Business $750 one-time:** 5 dedicated pages, customized imagery/branding and verified local business structured data when appropriate.
- **Growth $1,000 one-time:** Up to 7 pages, analytics/contact setup and three months of light management included. After the included period management is optional at $125/month, not automatically billed.

Domain, hosting, third-party fees, added pages and expanded SEO are separately scoped and quoted. Prices refer to stated package scopes rather than invented prior prices. 

## Stripe-hosted payment setup (October 2026)

GIC Designs uses the existing **live Global Intent Company Stripe account** for web-design purchases. The `pricing.html` page links directly to Stripe-hosted standard Payments checkout; no card information is processed or stored by this static website. Customers must agree with GIC in writing on scope, delivery, content requirements and terms before paying.

| Product | Price | Live checkout |
| --- | --- | --- |
| Starter — 3 pages | $499 one-time | https://buy.stripe.com/28EfZ90S9c1cclQgck1sQ03 |
| Business — 5 pages | $750 one-time | https://buy.stripe.com/9B6dR130hc1cclQ3py1sQ04 |
| Growth — up to 7 pages + 3 months of light management | $1,000 one-time | https://buy.stripe.com/9B6eV5fN39T40D8f8g1sQ05 |
| Optional management (separate customer opt-in only) | $125 per month | https://buy.stripe.com/00w4gr30h3uG85A4tC1sQ06 |

Management is **not** added to any one-time checkout and must be separately authorized after agreeing to a scope. Each payment link has `managed_payments.enabled=false` to avoid the earlier Managed Payments incompatibility with web-design services. Automatic tax is disabled pending appropriate tax classification and setup: review any tax collection obligations before accepting payment. One-time packages are configured to generate post-purchase invoices in Stripe.

**Deployment check:** The source branch may deploy to an earlier Vercel project. Confirm that the production GIC Designs project `gicdesigns` serving `gicdesigns-one.vercel.app` is linked to this repository's `main` and verify the live price/checkout anchors; a Git commit by itself does not establish a production deployment.


## Next.js App Router rollout — October 2026

Source now runs **Next.js + TypeScript**, with all 25 existing semantic pages mapped to clean routes in `lib/site.ts`. The original `.html` files remain as version-controlled content templates, rendered inside trusted React Server Components; do not delete until replaced with native TSX. `next.config.mjs` permanently redirects every old `.html` page to its clean URL. All internal navigation links (including query strings) are normalized at render time.

Primary domain: **https://www.gicdesigns.space**. Vercel Web Analytics is instrumented through `@vercel/analytics/next`; enable Analytics in the Vercel Dashboard, then deploy. `RevealOnScroll` adds gentle fade-in/fade-out scroll transitions, with reduced-motion and no-JS fallbacks. Studio and individual demo CSS and scripts are preserved in `public/`, including four separate color themes, mobile menu controls, and transparent mailto inquiry forms. Stripe-hosted $499, $750, and $1,000 checkout links are untouched; monthly management remains a separate opt-in.

Install with `npm install`; test with `npm run build`. Deploy `main` as a Next.js project in Vercel, then verify `/templates`, `/pricing` and each demo, old URL redirects, mobile menu, and Stripe checkout. The repository update alone does not prove that Vercel production has finished deploying.


## Page differentiation update — October 2026

Home is now a focused business-value landing page with an overview, three website principles and a simple project process; it no longer repeats all four demo cards. Templates is the single location for browsing and comparing the four live five-page demos, with style jump navigation. Industries is an industry-needs matrix covering eight sectors and appropriate customer paths; it no longer duplicates the demo-gallery images or descriptions. The shared accessible navigation, HTML landmarks, Next.js routing, Stripe pricing and demo routes are unchanged. Responsive page-specific CSS is mirrored between styles.css and public/studio.css.
