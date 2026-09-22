import Link from "next/link";
import { IconBrandTelegram, IconBrandWhatsapp, IconChevronRight, IconPhone } from "@tabler/icons-react";

const columns = [
  { title: "Услуги", links: [
    ["Ремонт телефонов", "/remont-telefonov/"],
    ["Ремонт ноутбуков", "/#services"],
    ["Ремонт компьютеров", "/#services"],
    ["Установка Windows", "/#prices"],
    ["Все услуги и цены", "/#prices"],
  ] },
  { title: "Информация", links: [
    ["Как проходит ремонт", "/#process"],
    ["Гарантия", "/#warranty"],
    ["Отзывы", "/#reviews"],
  ] },
  { title: "Компания", links: [
    ["О нас", "/#warranty"],
    ["Контакты", "/#contacts"],
    ["Адрес и режим работы", "/#contacts"],
  ] },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-5 pb-6 md:px-6 xl:px-12">
      <div className="grid grid-cols-1 gap-4 border-t border-[#e9e6e2] pt-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)_minmax(0,1.2fr)] xl:grid-cols-[1.35fr_0.9fr_0.9fr_0.95fr_1.25fr] xl:gap-8 xl:pt-7 dark:border-[#30251d]">
        <div className="min-w-0">
          <Link href="/" aria-label="Mandarin Сервис — на главную" className="inline-flex items-center gap-2 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800] xl:gap-3">
            <span aria-hidden="true" className="relative grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#ff9b2f,#ff5a0a_55%,#df1831)]">
              <span className="absolute -top-1 left-1/2 h-3 w-5 -translate-x-1/2 -rotate-12 rounded-[100%_0_100%_0] bg-[#5e9f35]" />
              <span className="mt-1 text-lg font-black text-white">M</span>
            </span>
            <span className="text-sm leading-[0.95] font-extrabold tracking-[-0.035em] xl:text-base">
              <span className="block text-[#e7550d]">Mandarin</span>
              <span className="block text-[#df2034]">Сервис</span>
            </span>
          </Link>
          <p className="mt-3 max-w-80 text-sm leading-5 text-[#79757a] md:max-w-56 md:text-xs dark:text-[#a79b8f]">
            Профессиональный ремонт телефонов, ноутбуков и компьютеров в Борисове.
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={`${column.title} — нижнее меню`} className="hidden min-w-0 md:block">
            <h2 className="mb-2 text-xs font-bold text-[#171717] dark:text-[#fff7f0]">{column.title}</h2>
            <ul className="space-y-1">
              {column.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="rounded-sm text-xs leading-5 text-[#79757a] hover:text-[#f04a00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6800] dark:text-[#a79b8f] dark:hover:text-[#ff6800]">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className="divide-y divide-[#e9e6e2] border-y border-[#e9e6e2] md:hidden dark:divide-[#30251d] dark:border-[#30251d]">
          {columns.map((column) => (
            <details key={column.title} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                {column.title}<IconChevronRight aria-hidden="true" className="size-5 transition-transform group-open:rotate-90" />
              </summary>
              <nav aria-label={`${column.title} — мобильное нижнее меню`} className="pb-3">
                {column.links.map(([label, href]) => <a key={label} href={href} className="block rounded-sm py-3 text-sm text-muted-foreground hover:text-primary focus-visible:outline-2 focus-visible:outline-primary">{label}</a>)}
              </nav>
            </details>
          ))}
        </div>
        <div className="flex min-w-0 flex-wrap items-center justify-between gap-3 md:block md:text-right">
          <a href="tel:+375291506888" className="whitespace-nowrap text-sm font-extrabold tracking-[-0.025em] text-[#171717] hover:text-[#f04a00] xl:text-lg dark:text-[#e2d3c2] dark:hover:text-[#ff6800]">+375 29 150-68-88</a>
          <div className="flex justify-end gap-2 md:mt-4 xl:gap-3">
            <a href="https://t.me/+375291506888" aria-label="Написать в Telegram" className="grid size-8 place-items-center rounded-full bg-[#08a9e6] text-white transition-opacity hover:opacity-80"><IconBrandTelegram aria-hidden="true" className="size-5" /></a>
            <a href="https://wa.me/375291506888" aria-label="Написать в WhatsApp" className="grid size-8 place-items-center rounded-full bg-[#16bc39] text-white transition-opacity hover:opacity-80"><IconBrandWhatsapp aria-hidden="true" className="size-5" /></a>
            <a href="viber://chat?number=%2B375291506888" aria-label="Написать в Viber" className="grid size-8 place-items-center rounded-full bg-[#8054c7] text-white transition-opacity hover:opacity-80"><IconPhone aria-hidden="true" className="size-5" /></a>
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs text-[#898589] dark:text-[#a79b8f]">
        <p>© Mandarin Сервис, {new Date().getFullYear()}</p>
        <p>ИП Павловский Н. А. <span aria-hidden="true" className="mx-3">·</span> УНП 691381798</p>
      </div>
    </footer>
  );
}
