import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Nothing is blocked: crawlers need /_next/ scripts, styles and images to render pages.
    rules: { userAgent: "*", allow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
