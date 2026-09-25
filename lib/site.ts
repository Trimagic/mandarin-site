// Business facts shared by metadata, JSON-LD and the sitemap.
// The domain in the concept docs is a placeholder: set NEXT_PUBLIC_SITE_URL to the real one before launch.
export const siteConfig = {
  name: "Mandarin Сервис",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://mandarin-service.by").replace(/\/$/, ""),
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
