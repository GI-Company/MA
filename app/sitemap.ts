import type { MetadataRoute } from "next";
import { ALL_ROUTES } from "../lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  return ALL_ROUTES.filter(route => !route.startsWith("/demos/")).map(route => ({
    url: "https://www.gicdesigns.space" + route,
    changeFrequency: "monthly" as const,
    priority: route === "/" ? 1 : 0.7,
  }));
}
