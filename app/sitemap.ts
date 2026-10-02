import type { MetadataRoute } from "next";
import { directionPages, getDirectionItemHref } from "@/data/directions";
import { problemPages } from "@/data/problems";
import { servicePages } from "@/data/services";
import { absoluteUrl } from "@/lib/site";
import { repairStories, repairStoryHref } from "@/data/cases";
import { windowsInstallationData } from "@/data/windows-installation";
import { appleRepairData } from "@/data/apple-repair";
import { extraDevicePages } from "@/data/extra-device-services";

// Built from the same data as the routes, so every page is listed and nothing leads to a 404.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/o-nas/"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/soglasie-na-obrabotku-dannyh/"), lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl(`/${windowsInstallationData.slug}/`), lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...extraDevicePages.map((page) => ({ url: absoluteUrl(`/${page.slug}/`), lastModified, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...directionPages.map((page) => ({ url: absoluteUrl(`/${page.slug}/`), lastModified, changeFrequency: "weekly" as const, priority: 0.9 })),
    { url: absoluteUrl(appleRepairData.path!), lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...servicePages.map((page) => ({ url: absoluteUrl(getDirectionItemHref(page.directionSlug, page.slug)), lastModified, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...problemPages.map((page) => ({ url: absoluteUrl(getDirectionItemHref(page.directionSlug, page.slug)), lastModified, changeFrequency: "monthly" as const, priority: 0.7 })),
    // repairStories already drops drafts when HIDE_DRAFTS=1.
    ...(repairStories.length > 0 ? [{ url: absoluteUrl("/raboty/"), lastModified, changeFrequency: "weekly" as const, priority: 0.6 }] : []),
    ...repairStories.map((story) => ({ url: absoluteUrl(repairStoryHref(story.slug)), lastModified, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
