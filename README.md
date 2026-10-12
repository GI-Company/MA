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
