// Absolute URLs (canonical, Open Graph images, sitemap) must point at the deployed domain, or social
// crawlers fetch the preview image from a site that does not exist. Set NEXT_PUBLIC_SITE_URL in production;
// on Vercel the production domain is used as a fallback. The last value is only a placeholder.
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return "https://mandarin-service.by";
}

// Business facts shared by metadata, JSON-LD and the sitemap.
export const siteConfig = {
  name: "Mandarin Сервис",
  url: resolveSiteUrl().replace(/\/$/, ""),
  locale: "ru_BY",
  description: "Ремонт телефонов, ноутбуков, компьютеров и телевизоров в Борисове. Диагностика, согласование стоимости до ремонта, гарантия на работы.",
  telephone: "+375291506888",
  address: {
    streetAddress: "ул. Чапаева, 34",
    addressLocality: "Борисов",
    addressRegion: "Минская область",
    addressCountry: "BY",
  },
  landmark: "ТЦ «Мир Стиля», левый боковой вход",
  areaServed: "Борисов",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "10:00",
    closes: "19:00",
    label: "Пн–Пт 10:00–19:00",
    note: "Сб, Вс — выходной",
  },
  logo: "/brand/mandarin-mark.png",
  defaultImage: { src: "/brand/social-cover.jpg", width: 1200, height: 630, alt: "Mandarin Сервис — ноутбук, телефон и мандарин на оранжевом фоне" },
} as const;

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteConfig.url}/`).toString();
}
