# Mountain Automotive & Tire — independent redesign concept

A five-page, responsive static website concept for Mountain Automotive & Tire, Cleveland, Georgia. **This is not the official business website and is not affiliated with or endorsed by the shop.**

## Website structure

- `index.html` — dedicated homepage with service overview, shop introduction, and contact summary
- `services.html` — tires, alignments, brakes, oil changes, suspension, and general repair
- `about.html` — About Us page featuring the newly supplied photo and logo, owner experience, shop history, amenities, and location
- `gallery.html` — original shop photo gallery with meaningful alt text
- `contact.html` — contact options, business hours, and driving directions
- `styles.css`, `script.js` — shared responsive styles and mobile navigation
- `assets/` — original uploaded photographic assets

Navigation uses ordinary relative `.html` links, so each page loads on static hosting without a rewrite framework. Pages include semantic landmarks, descriptive titles and meta descriptions, skip links, `aria-current` in navigation, and accessible image descriptions. The shop's hours are marked up as a description list. The directions and email links use darker text or high-contrast button styling on a white contact card.

## Photo assets

The original shop photos are stored under `assets/` and were organized from user-uploaded images. The hero uses `assets/2843.jpg` and the alignment card uses `assets/2835.jpg`; the original `2818.jpg` and `2822.jpg` were not included in the upload.

## Preview and deployment

Open `index.html` locally or deploy the repository to any static site host. No build tools or dependencies required. Every page uses relative links, so serving the project from a subdirectory is supported. If hosting at a public URL, obtain permission for business photographs and verify all listed business details.

## Contact behavior

Email quote requests open the visitor's email application; no backend form collection is implemented. Directions open Google Maps. Phone buttons use `tel:` links.

## Publication notes

Before making this concept an official website: obtain written permission for the photos and shop identity, confirm warranty terms and current business hours, and get owner approval for the copy.

## Brand and About Us imagery

The newly uploaded images were moved to `assets/about-us-photo.webp` and `assets/mountain-automotive-logo.webp` without re-encoding. The About Us page displays both; the navigation on every page also uses the business logo. The former “Our Shop” navigation label is now “About Us” across the site.
