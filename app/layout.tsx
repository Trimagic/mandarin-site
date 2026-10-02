import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";
import { businessNode, graph, websiteNode } from "@/lib/structured-data";
import "./globals.css";

// Page-level metadata (title, canonical, Open Graph) comes from lib/seo.ts; these are site-wide defaults.
export const metadata: Metadata = {
  ...pageMetadata({ title: siteConfig.name, description: siteConfig.description, path: "/" }),
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s — ${siteConfig.name}` },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  // index/follow is the default, so it is not repeated here: 404 pages then carry only Next's own noindex.
  robots: { googleBot: { "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  formatDetection: { telephone: false },
  other: { "geo.region": "BY-MI", "geo.placename": siteConfig.address.addressLocality },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fffaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#130f0d" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/manrope/d3fe2f289711ac3f-s.p.2g9li78_0_it5.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/manrope/a343f882a40d2cc9-s.p.3259ncl47-hqj.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={graph([businessNode(), websiteNode()])} />
        {children}
      </body>
    </html>
  );
}
