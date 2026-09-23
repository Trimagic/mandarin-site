import type { MetadataRoute } from "next";
import { directionPages, getDirectionItemHref } from "@/data/directions";
import { problemPages } from "@/data/problems";
import { servicePages } from "@/data/services";
import { absoluteUrl } from "@/lib/site";
import { windowsInstallationData } from "@/data/windows-installation";

// Built from the same data as the routes, so every page is listed and nothing leads to a 404.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl(`/${windowsInstallationData.slug}/`), lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...directionPages.map((page) => ({ url: absoluteUrl(`/${page.slug}/`), lastModified, changeFrequency: "weekly" as const, priority: 0.9 })),
    ...servicePages.map((page) => ({ url: absoluteUrl(getDirectionItemHref(page.directionSlug, page.slug)), lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...problemPages.map((page) => ({ url: absoluteUrl(getDirectionItemHref(page.directionSlug, page.slug)), lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
