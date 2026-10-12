# Global Intent Company — Semantic Website Standards

These are requirements for **every** site, including previews, proposals and production client projects.

## Structure and content

1. Use the correct HTML5 doctype and language on `<html>`, with a responsive viewport and unique title and description for every page.
2. Use meaningful landmarks: exactly one `<main>`, a site `<header>`, primary `<nav>`, and `<footer>`. A skip-to-main-content link precedes navigation.
3. Use one descriptive `<h1>` per page, followed by an ordered `<h2>` / `<h3>` hierarchy that reflects actual content; never choose a heading level based on font size.
4. Use `<section aria-labelledby="...">` for labeled topical sections, `<article>` for self-contained cards, `<figure>` / `<figcaption>` for meaningful images, `<ol>`/`<ul>` for real lists, and `<address>` only for genuine contact information.
5. Give Home, Services, About, Gallery and Contact their own URLs and document titles; do not substitute in-page scroll anchors for site navigation.
6. Maintain logical *source and reading order* on mobile. Desktop visuals can use CSS grid placement without rearranging the source document.

## Accessibility and responsive behavior

7. All navigation items and controls are keyboard reachable, with clear focus indicators, active-page indication via `aria-current="page"`, and menu toggle state via `aria-expanded` and `aria-controls`.
8. Mobile navigation must open and close consistently with touch and keyboard, including Escape and outside clicks.
9. Phone layouts use a readable single column for main content, fluid heading sizes, no content clipping and touch-friendly controls. Check at 320, 375, 390, 430, 768 and 1024 CSS-pixel widths.
10. Photos require accurate alt text when informative; purely decorative images should have empty alt text. Meaningful figures have captions. Width and height attributes reserve layout space.
11. Every form input has a visible label, appropriate type, browser validation and a truthful submission/success message. Never claim a submission was received before a backend verifies it.
12. Contrast, zoom/reflow, reduced motion and link-purpose clarity should satisfy WCAG 2.2 AA as a design goal. Run Lighthouse/axe and a real-device keyboard test before client handoff; markup checks alone do not certify accessibility.

## Truthfulness and production standards

13. Fictional sites carry a clear demo disclaimer on every page and `noindex,nofollow` to avoid search-index confusion.
14. Do not invent reviews, guarantees, service areas, real phone numbers, addresses, business hours, certification status or results.
15. Only use photos with an appropriate license and keep credits and original source URLs. Replace with approved client media when commissioned.
16. Use meaningful links between real pages. Validate all relative URLs and unique heading/landmark IDs before release.
17. For commissioned business sites, add verified NAP details, relevant structured data, sitemap, robots, canonical URLs and customer-owned accounts as appropriate, only after business information is confirmed.
18. Do not consider a redesign complete until its content hierarchy, keyboard interaction, mobile reading order and production deployment have been checked.

## Current demo coverage

All four templates now have five distinct pages:

| Template | Home | Services | About | Gallery | Contact |
|---|---|---|---|---|---|
| Peak Auto & Tire | automotive.html | automotive-services.html | automotive-about.html | automotive-gallery.html | automotive-contact.html |
| Blue Ridge Lawn Co. | landscaping.html | landscaping-services.html | landscaping-about.html | landscaping-gallery.html | landscaping-contact.html |
| ClearLine Exterior Care | pressure-washing.html | pressure-washing-services.html | pressure-washing-about.html | pressure-washing-gallery.html | pressure-washing-contact.html |
| Juniper & Oak Coffee | cafe.html | cafe-services.html | cafe-about.html | cafe-gallery.html | cafe-contact.html |

The demo contact form opens a draft to GIC through the visitor's email app. It is **not** an API-backed submission mechanism and makes that limitation clear. No fictional-business contact identities are presented as real.
