"use client";
import { useEffect } from "react";

/** Motion is optional; visitors without JS can always see all content. */
export default function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    const selectors = [
      ".site-page .template-card", ".site-page .industry-row", ".site-page .plan",
      ".site-page .process-grid article", ".site-page .benefits-inner",
      ".site-page .tip-panel", ".site-page .care-strip", ".site-page .contact-layout",
      ".site-page .demo-card", ".site-page .demo-feature", ".site-page .demo-section",
      ".site-page .demo-grid > *", ".site-page .demo-gallery > *",
      ".site-page .demo-testimonial",
      ".site-page .home-focus", ".site-page .home-path-steps li",
      ".site-page .template-mood-links a", ".site-page .template-coverage li",
      ".site-page .sector-card", ".site-page .industry-principle-list article",
      ".site-page .concept-feature", ".site-page .concept-service-card",
      ".site-page .concept-gallery-photo", ".site-page .concept-values article"
    ].join(",");
    const items = Array.from(document.querySelectorAll<HTMLElement>(selectors));
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("reveal-visible", entry.isIntersecting);
      }
    }, { threshold: 0.06, rootMargin: "0px 0px -4% 0px" });
    for (const [index, item] of items.entries()) {
      const rect = item.getBoundingClientRect();
      item.classList.add("reveal-target");
      if (rect.top < window.innerHeight && rect.bottom > 0) item.classList.add("reveal-visible");
      item.style.setProperty("--reveal-delay", `${(index % 3) * 65}ms`);
      observer.observe(item);
    }
    return () => {
      observer.disconnect();
      for (const item of items) {
        item.classList.remove("reveal-target", "reveal-visible");
        item.style.removeProperty("--reveal-delay");
      }
    };
  }, []);
  return null;
}
