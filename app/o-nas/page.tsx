import Image from "next/image";
import Link from "next/link";
import { IconArrowUpRight, IconMapPin, IconShieldCheck, IconReceipt, IconTools } from "@tabler/icons-react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { ContactSection } from "@/components/site/contact-section";
import { RepairProcess } from "@/components/site/repair-process";
import { RequestProvider, RequestTrigger } from "@/components/site/request-provider";
import { JsonLd } from "@/components/site/json-ld";
import { homeRequestConfig } from "@/lib/request";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { breadcrumbNode, graph, webPageNode } from "@/lib/structured-data";

const seo = { title: "О нас — Mandarin Сервис в Борисове", description: "Мастерская Mandarin Сервис в Борисове: ремонт техники, согласование стоимости до начала работ и гарантия. Наш подход, услуги и контакты.", path: "/o-nas/" };
export const metadata = pageMetadata(seo);
const services = [
  ["Телефоны", "/remont-telefonov/"], ["Ноутбуки", "/remont-noutbukov/"],
  ["Компьютеры", "/remont-kompyuterov/"], ["Телевизоры", "/remont-televizorov/"],
  ["Техника Apple", "/remont-apple/"], ["Колонки", "/remont-kolonok/"],
  ["Игровые приставки", "/obsluzhivanie-pristavok/"], ["Установка Windows", "/ustanovka-windows/"],
];
const principles = [
  { icon: IconTools, title: "Разбираемся в причине", text: "Начинаем с диагностики: выясняем, что мешает устройству работать, и объясняем, какой ремонт нужен." },
  { icon: IconReceipt, title: "Сначала согласовываем", text: "Обсуждаем стоимость и сроки до начала работ. Вы понимаете, за что платите, и принимаете решение." },
  { icon: IconShieldCheck, title: "Проверяем результат", text: "После ремонта проверяем работу устройства. Гарантия на работы и установленные детали — до 12 месяцев; условия зависят от ремонта." },
];

export default function AboutPage() {
  return (
    <RequestProvider config={homeRequestConfig()}>
      <SiteHeader homeLinks />
      <main>
        <JsonLd data={graph([{ ...webPageNode(seo), "@type": "AboutPage" }, breadcrumbNode(seo.path, [{ label: "Главная", href: "/" }, { label: "О нас", href: seo.path }])])} />
        <section className="mx-auto max-w-[1440px] px-5 pt-4 pb-10 md:px-6 xl:px-12">
          <nav aria-label="Хлебные крошки" className="mb-6 text-sm text-muted-foreground"><Link href="/" className="hover:text-primary">Главная</Link><span aria-hidden="true" className="mx-3">/</span><span aria-current="page">О нас</span></nav>
          <div className="grid items-center gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
            <div className="py-3 lg:py-8">
              <p className="mb-5 flex items-center gap-2 text-xs font-bold tracking-[0.12em] text-[#e74700] uppercase dark:text-[#ff8a32]"><span aria-hidden="true" className="size-2 rounded-full bg-[#f04a00]" />Мастерская в Борисове</p>
              <h1 className="max-w-xl text-[clamp(40px,5.3vw,70px)] leading-[1.03] font-extrabold tracking-[-0.055em]">Ремонтируем технику.<br /><span className="text-[#f04a00] dark:text-[#ff8a32]">Бережём ваше доверие.</span></h1>
              <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground">Mandarin Сервис — мастерская, где за каждой поломкой видят вашу повседневную жизнь. Связь с близкими, рабочие задачи и важные файлы.</p>
              <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">Находим причину, понятно объясняем решение и согласовываем стоимость до ремонта. После — проверяем, чтобы техникой снова было удобно пользоваться.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <RequestTrigger fallbackHref={`tel:${siteConfig.telephone}`} className="inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#eb4900] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#d64000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">Обсудить ремонт<IconArrowUpRight aria-hidden="true" className="size-5" /></RequestTrigger>
                <a href="#contacts" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-3 text-sm font-semibold hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"><IconMapPin aria-hidden="true" className="size-5 text-primary" />Как нас найти</a>
              </div>
              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 border-t border-[#ece5df] pt-5 text-xs font-semibold text-muted-foreground dark:border-[#46301f]"><span>Цена до ремонта</span><span>Проверка перед выдачей</span><span>Гарантия на работы</span></div>
            </div>
            <figure className="relative isolate m-0 overflow-hidden rounded-2xl bg-[#2c2119] shadow-[0_20px_50px_-30px_rgba(80,35,10,0.4)]">
              <div className="relative aspect-[3/2] lg:aspect-[1.05/1]">
                <Image src="/brand/about-workshop-hero-v1.webp" alt="Иллюстрация ремонта: руки мастера, разобранный смартфон и инструменты на рабочем столе" fill sizes="(min-width: 1440px) 650px, (min-width: 1024px) 50vw, calc(100vw - 40px)" className="object-cover" loading="eager" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#1b100b]/90 via-transparent to-transparent" />
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                <p className="mb-2 text-[10px] font-medium tracking-[0.15em] text-white/65 uppercase">Иллюстрация ремонта</p>
                <p className="text-xl font-bold tracking-tight">Внимание к каждой детали</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-white/85"><IconMapPin aria-hidden="true" className="size-4 shrink-0" />Борисов, ул. Чапаева, 34</p>
              </figcaption>
            </figure>
          </div>
        </section>
        <section className="mx-auto max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12" aria-labelledby="approach-title">
          <h2 id="approach-title" className="mb-5 text-2xl font-extrabold tracking-tight md:text-3xl">Понятный ремонт начинается с доверия</h2>
          <div className="grid gap-4 md:grid-cols-3">{principles.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-xl border border-[#ece5df] bg-[#fffefd] p-6 dark:border-[#46301f] dark:bg-[#15110e]"><Icon aria-hidden="true" stroke={1.5} className="mb-5 size-9 text-primary" /><h3 className="text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
        </section>
        <section className="mx-auto max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12" aria-labelledby="devices-title">
          <h2 id="devices-title" className="mb-3 text-2xl font-extrabold tracking-tight md:text-3xl">С чем к нам обращаются</h2>
          <p className="mb-5 max-w-2xl text-sm leading-6 text-muted-foreground">От замены экрана и аккумулятора до обслуживания ноутбука или приставки. Выберите устройство, чтобы посмотреть услуги и подробности ремонта.</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{services.map(([label, href]) => <Link key={href} href={href} className="flex min-h-16 items-center justify-between gap-3 rounded-xl border border-[#ece5df] p-4 text-sm font-semibold transition-colors hover:border-primary hover:text-primary dark:border-[#46301f]">{label}<IconArrowUpRight aria-hidden="true" className="size-5 shrink-0" /></Link>)}</div>
        </section>
        <RepairProcess variant="compact" />
        <section className="mx-auto max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12" aria-labelledby="instagram-title">
          <div className="relative isolate overflow-hidden rounded-2xl bg-[#f45113] text-white">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff9e28] via-transparent to-[#db301d]" />
            <div className="relative grid lg:grid-cols-[1fr_1.05fr]">
              <div className="relative z-10 p-6 pb-0 md:p-10 md:pb-0 lg:p-12 xl:p-14">
                <p className="flex items-center gap-2 text-xs font-bold tracking-[0.12em] uppercase"><span aria-hidden="true" className="size-2 rounded-full bg-white" />Mandarin в Instagram</p>
                <h2 id="instagram-title" className="mt-6 text-[clamp(48px,8vw,88px)] leading-[0.95] font-extrabold tracking-[-0.06em]">Ремонт<br /><span className="text-[#50200e]">изнутри.</span></h2>
                <p className="mt-6 max-w-sm text-base leading-7 text-white/90">Что было сломано. Как нашли причину. Что получилось после ремонта.</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">Показываем нашу работу и будни мастерской в Instagram.</p>
                <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="group mt-7 inline-flex min-h-14 w-full items-center justify-between gap-5 rounded-xl bg-[#fffaf5] px-5 text-sm font-bold text-[#2d1c13] shadow-lg shadow-[#7e220c]/10 transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto">
                  <Image src="/brand/instagram-glyph-gradient.svg" alt="" width={24} height={24} className="size-6 shrink-0" unoptimized />
                  @mandarin_borisov
                  <IconArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <div className="relative flex min-h-[300px] items-center justify-center px-4 pt-6 pb-8 md:min-h-[400px] lg:min-h-[500px] lg:px-0" aria-hidden="true">
                <div className="absolute top-[12%] left-[12%] size-[280px] rounded-full border border-white/25 md:size-[380px] lg:left-[8%]" />
                <div className="absolute top-[18%] left-[18%] size-[230px] rounded-full bg-[#ffcf72]/25 md:size-[320px] lg:left-[14%]" />
                <p className="absolute top-8 right-7 -rotate-6 text-sm font-semibold tracking-widest text-white/70 uppercase lg:top-12">За кадром сервиса</p>
                <Image src="/hero/apple-repair-cutout-v1.png" alt="" width={1447} height={1087} sizes="(min-width: 1024px) 650px, 90vw" className="relative z-10 h-auto w-full max-w-[640px] -rotate-6 drop-shadow-[0_24px_16px_rgba(92,25,8,0.25)]" />
                <span className="absolute right-5 bottom-6 z-20 rotate-3 rounded-lg border border-white/60 bg-[#fffaf5] px-4 py-3 text-xs font-bold tracking-widest text-[#d84410] uppercase shadow-lg md:right-10 lg:bottom-12">Техника снова работает</span>
              </div>
            </div>
          </div>
        </section>
        <ContactSection />
      </main>
      <SiteFooter />
    </RequestProvider>
  );
}
