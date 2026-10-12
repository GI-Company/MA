import { readFileSync } from "node:fs";
import { join, posix } from "node:path";
import type { Metadata } from "next";

/** Allow-listed HTML5 documents, adapted as Next.js routes without visual regressions. */
export const SITE_ROUTES: Readonly<Record<string, string>> = {
  "/": "index.html",
  "/templates": "templates.html",
  "/industries": "industries.html",
  "/pricing": "pricing.html",
  "/contact": "contact.html",
  "/demos/automotive": "demos/automotive.html",
  "/demos/automotive/services": "demos/automotive-services.html",
  "/demos/automotive/about": "demos/automotive-about.html",
  "/demos/automotive/gallery": "demos/automotive-gallery.html",
  "/demos/automotive/contact": "demos/automotive-contact.html",
  "/demos/landscaping": "demos/landscaping.html",
  "/demos/landscaping/services": "demos/landscaping-services.html",
  "/demos/landscaping/about": "demos/landscaping-about.html",
  "/demos/landscaping/gallery": "demos/landscaping-gallery.html",
  "/demos/landscaping/contact": "demos/landscaping-contact.html",
  "/demos/pressure-washing": "demos/pressure-washing.html",
  "/demos/pressure-washing/services": "demos/pressure-washing-services.html",
  "/demos/pressure-washing/about": "demos/pressure-washing-about.html",
  "/demos/pressure-washing/gallery": "demos/pressure-washing-gallery.html",
  "/demos/pressure-washing/contact": "demos/pressure-washing-contact.html",
  "/demos/cafe": "demos/cafe.html",
  "/demos/cafe/services": "demos/cafe-services.html",
  "/demos/cafe/about": "demos/cafe-about.html",
  "/demos/cafe/gallery": "demos/cafe-gallery.html",
  "/demos/cafe/contact": "demos/cafe-contact.html"
};
export const ALL_ROUTES = Object.keys(SITE_ROUTES);
const FILE_TO_ROUTE = new Map(Object.entries(SITE_ROUTES).map(([route, file]) => [file, route]));
export const hasRoute = (route: string) => Object.prototype.hasOwnProperty.call(SITE_ROUTES, route);
const decode = (text: string) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
function cleanHref(href: string, filename: string): string {
  if (/^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(href)) return href;
  const match = /^([^?#]*)([?#].*)?$/.exec(href);
  if (!match || !match[1]) return href;
  const resolved = posix.normalize(posix.join(posix.dirname(filename), match[1]));
  const route = FILE_TO_ROUTE.get(resolved);
  if (route !== undefined) return route + (match[2] ?? "");
  if (resolved === "IMAGE_CREDITS.md") return "/IMAGE_CREDITS.md" + (match[2] ?? "");
  return href;
}
export function readPage(route: string) {
  const filename = SITE_ROUTES[route];
  if (!filename) throw new Error("Unrecognized site route: " + route);
  // Source paths come from this fixed map, never visitor input.
  const html = readFileSync(join(process.cwd(), filename), "utf8");
  const opening = html.match(/<body\b([^>]*)>/i)?.[1] ?? "";
  const classes = opening.match(/\bclass=["']([^"']*)["']/i)?.[1] ?? "";
  const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1];
  if (!body) throw new Error("Missing HTML body in " + filename);
  const markup = body.replace(/\bhref=(["'])([^"']*)\1/gi, (_full, quote: string, href: string) =>
    "href=" + quote + cleanHref(href, filename) + quote
  );
  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() ?? "GIC Designs");
  const description = decode(html.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i)?.[1] ??
    "Semantic, responsive websites for North Georgia businesses.");
  return { classes, markup, title, description, isDemo: route.startsWith("/demos/") };
}
export function metadataFor(route: string): Metadata {
  const page = readPage(route);
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: route },
    robots: page.isDemo ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: { title: page.title, description: page.description, url: route, siteName: "GIC Designs", type: "website" },
  };
}
