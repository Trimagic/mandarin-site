import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

type PageSeo = {
  title: string;
  description: string;
  /** Path with a trailing slash, e.g. "/remont-telefonov/". */
  path: string;
  image?: { src: string; alt: string };
};

/** Canonical URL, Open Graph and Twitter tags for a page. Relative URLs resolve against metadataBase. */
export function pageMetadata({ title, description, path, image }: PageSeo): Metadata {
  // Social networks do not render SVG previews, so fall back to the brand photo.
  const ogImage = image && !image.src.endsWith(".svg")
    ? { url: image.src, alt: image.alt }
    : { url: siteConfig.defaultImage.src, width: siteConfig.defaultImage.width, height: siteConfig.defaultImage.height, alt: siteConfig.defaultImage.alt };

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
    twitter: { card: "summary_large_image", title, description, images: [ogImage.url] },
  };
}
