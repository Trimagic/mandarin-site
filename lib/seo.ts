import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  /** Path with a trailing slash, e.g. "/remont-telefonov/". */
  path: string;
};

/** Canonical URL, Open Graph and Twitter tags for a page. Relative URLs resolve against metadataBase. */
export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  // Every page shares the same cover, composed specifically for social previews.
  const ogImage = { url: siteConfig.defaultImage.src, width: siteConfig.defaultImage.width, height: siteConfig.defaultImage.height, alt: siteConfig.defaultImage.alt, type: "image/jpeg" };

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: path,
      title,
      description,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [{ url: ogImage.url, alt: ogImage.alt }] },
  };
}
