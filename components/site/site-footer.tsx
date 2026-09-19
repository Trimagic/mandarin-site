import { IconBrandTelegram, IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";

const columns = [
  { title: "Услуги", links: [
    ["Ремонт телефонов", "#services"],
    ["Ремонт ноутбуков", "#services"],
    ["Ремонт компьютеров", "#services"],
    ["Установка Windows", "#prices"],
    ["Все услуги и цены", "#prices"],
  ] },
  { title: "Информация", links: [
    ["Как проходит ремонт", "#process"],
    ["Гарантия", "#warranty"],
    ["Отзывы", "#reviews"],
  ] },
  { title: "Компания", links: [
    ["О нас", "#warranty"],
    ["Контакты", "#contacts"],
    ["Адрес и режим работы", "#contacts"],
  ] },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1440px] px-12 pb-6">
      <div className="grid grid-cols-[1.35fr_0.9fr_0.9fr_0.95fr_1.25fr] gap-8 border-t border-[#e9e6e2] pt-7 dark:border-[#30251d]">
        <div>
          <a href="#top" aria-label="Mandarin Сервис — на главную" className="inline-flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800]">
            <span aria-hidden="true" className="relative grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#ff9b2f,#ff5a0a_55%,#df1831)]">
              <span className="absolute -top-1 left-1/2 h-3 w-5 -translate-x-1/2 -rotate-12 rounded-[100%_0_100%_0] bg-[#5e9f35]" />
              <span className="mt-1 text-lg font-black text-white">M</span>
            </span>
            <span className="leading-[0.95] font-extrabold tracking-[-0.035em]">
              <span className="block text-[#e7550d]">Mandarin</span>
              <span className="block text-[#df2034]">Сервис</span>
            </span>
          </a>
          <p className="mt-3 max-w-56 text-xs leading-5 text-[#79757a] dark:text-[#a79b8f]">
            Профессиональный ремонт телефонов, ноутбуков и компьютеров в Борисове.
          </p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} aria-label={`${column.title} — нижнее меню`}>
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
        <div className="text-right">
          <a href="tel:+375291506888" className="whitespace-nowrap text-lg font-extrabold tracking-[-0.025em] text-[#171717] hover:text-[#f04a00] dark:text-[#e2d3c2] dark:hover:text-[#ff6800]">+375 29 150-68-88</a>
          <div className="mt-4 flex justify-end gap-3">
            <a href="https://t.me/+375291506888" aria-label="Написать в Telegram" className="grid size-8 place-items-center rounded-full bg-[#08a9e6] text-white transition-opacity hover:opacity-80"><IconBrandTelegram aria-hidden="true" className="size-5" /></a>
            <a href="https://wa.me/375291506888" aria-label="Написать в WhatsApp" className="grid size-8 place-items-center rounded-full bg-[#16bc39] text-white transition-opacity hover:opacity-80"><IconBrandWhatsapp aria-hidden="true" className="size-5" /></a>
            <a href="viber://chat?number=%2B375291506888" aria-label="Написать в Viber" className="grid size-8 place-items-center rounded-full bg-[#8054c7] text-white transition-opacity hover:opacity-80"><IconPhone aria-hidden="true" className="size-5" /></a>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-between gap-6 text-xs text-[#898589] dark:text-[#a79b8f]">
        <p>© Mandarin Сервис, {new Date().getFullYear()}</p>
        <p>ИП Павловский Н. А. <span aria-hidden="true" className="mx-3">·</span> УНП 691381798</p>
      </div>
    </footer>
  );
}
