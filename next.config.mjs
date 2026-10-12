/** @type {import("next").NextConfig} */
const originalRoutes = {
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
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  redirects: async () => Object.entries(originalRoutes).map(([destination, file]) => ({
    source: "/" + file, destination, permanent: true,
  })),
};
export default nextConfig;
