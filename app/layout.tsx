import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { JsonLd } from "@/components/site/json-ld";
import { siteConfig } from "@/lib/site";
import { businessNode, graph, websiteNode } from "@/lib/structured-data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

// Page-level metadata (title, canonical, Open Graph) comes from lib/seo.ts; these are site-wide defaults.
export const metadata: Metadata = {
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
    <html lang="ru" className={`${manrope.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col antialiased">
        <JsonLd data={graph([businessNode(), websiteNode()])} />
        {children}
      </body>
    </html>
  );
}
