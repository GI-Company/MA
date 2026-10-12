# GIC Website Studio — Local Business Showcase

This repository's `main` branch is the GIC Website Studio: a reusable, mobile-friendly portfolio of four **working fictional business websites**. It is designed to pitch website design and customization to local businesses without borrowing the identities, photos, or trademarks of actual prospects.

## Important: Archived Mountain Automotive demo

The previous personalized Mountain Automotive & Tire website, its HTML/CSS/JavaScript, logo, and original photographs are **preserved on the separate branch** [archive/mountain-automotive](https://github.com/GI-Company/MA/tree/archive/mountain-automotive). That branch restores all 20 original media files. This main branch intentionally contains no Mountain Automotive business material. Please don't delete the archive branch.

## Showcase structure

- `index.html`: Landing page with live template previews and GIC studio introduction.
- `templates.html`: Four working template cards.
- `industries.html`: Industry-specific portfolio with previews.
- `pricing.html`: Sample one-time packages and optional ongoing management.
- `contact.html`: Functional mailto inquiry form (uses the visitor's mail app; no server submission).
- `demos/automotive.html`: **Peak Auto & Tire**, industrial automotive concept.
- `demos/landscaping.html`: **Blue Ridge Lawn Co.**, inviting lawn-care concept.
- `demos/pressure-washing.html`: **ClearLine Exterior Care**, exterior-cleaning concept.
- `demos/cafe.html`: **Juniper & Oak Coffee**, editorial café concept.
- `styles.css`: Studio design system.
- `demos/demo.css`: Template-specific layouts and theme variants.
- `script.js`: Accessible mobile menus and mailto inquiry helper.
- `IMAGE_CREDITS.md`: Verified source photos, attribution and license notes.

The four demonstration businesses are fictional. Demo pages are marked `noindex,nofollow`, display obvious fictional-business notices, and link back to the GIC studio.

## Local preview

Open `index.html` in a browser or host the static directory on Vercel / any other static web host. Navigation uses relative file paths; no build step, JavaScript framework, backend, API keys or npm dependencies. Photo URLs currently load from images.unsplash.com and require an Internet connection.

## Customize

Replace demo branding, claims, and image URLs only with approved client assets and verified business details. Remove the fictional-business disclaimer only after the resulting site is authorized by the real owner.

## Contact and pricing

GIC contact: cory.tortorici@globalintentcompany.space. The contact form opens a draft email via `mailto:` with the visitor's chosen template and project details; it does not collect or persist personal data on the server.

Pricing is illustrative, subject to a written quote. No search-engine position, lead count or business outcome is guaranteed.

## Deployment warning

This GitHub repo was previously connected to a Vercel project with the **Mountain Automotive demo URL**. If that integration still exists, pushes to `main` may deploy the generic studio to the old project. Migrate or disconnect the old Vercel project and use a suitable new GIC-branded domain before advertising the showcase.
