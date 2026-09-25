import Image from "next/image";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import { getDirectionItemHref, getDirectionPage } from "@/data/directions";
import { getServicePage } from "@/data/services";

type PopularService = { title: string; image: string; alt: string } & ({ directionSlug: string; slug: string } | { href: string; fallbackPrice: number });

// Prices and links come from the direction catalogues, so the home page always matches the service pages.
const services: PopularService[] = [
  { title: "Замена экрана телефона", image: "screen-repair", alt: "Смартфон с разбитым стеклом экрана", directionSlug: "remont-telefonov", slug: "zamena-ekrana" },
  { title: "Замена аккумулятора телефона", image: "battery-replacement", alt: "Аккумулятор рядом с разобранным смартфоном", directionSlug: "remont-telefonov", slug: "zamena-akkumulyatora" },
  { title: "Замена разъёма зарядки", image: "charging-port", alt: "Разъём USB-C телефона и зарядный кабель", directionSlug: "remont-telefonov", slug: "zamena-razema-zaryadki" },
  { title: "Чистка ноутбука от пыли", image: "laptop-cleaning", alt: "Вентилятор и система охлаждения открытого ноутбука", directionSlug: "remont-noutbukov", slug: "chistka-i-zamena-termopasty" },
  { title: "Установка SSD и апгрейд", image: "ssd-upgrade", alt: "Твердотельные накопители SSD двух форматов", directionSlug: "remont-noutbukov", slug: "modernizaciya-ssd-i-ram" },
  // The Windows page has no price catalogue yet; the price is the registry value awaiting confirmation.
  { title: "Установка Windows", image: "windows-installation", alt: "Ноутбук с символом Windows на экране", href: "/ustanovka-windows/", fallbackPrice: 40 },
];

function resolve(service: PopularService) {
  if (!("slug" in service)) return { href: service.href, price: service.fallbackPrice };
  const price = getDirectionPage(service.directionSlug)?.services.items.find((item) => item.slug === service.slug)?.price;
  return {
    href: getServicePage(service.directionSlug, service.slug) ? getDirectionItemHref(service.directionSlug, service.slug) : undefined,
    price: price?.kind === "from" ? price.amount : undefined,
  };
}

const cardClassName = "group relative flex flex-col overflow-hidden rounded-xl border border-[#ece5df] bg-[#fffefd] transition-colors duration-300 hover:border-[#ff5000]/50 hover:bg-[#fff6ef] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800] dark:border-[#46301f] dark:bg-[#15110e] dark:hover:border-[#ff7a18]/50 dark:hover:bg-[#1d140e]";

// Edge colour shared by the card border, the tear line and its notches so they change together on hover.
const edge = "border-[#ece5df] transition-colors duration-300 group-hover:border-[#ff5000]/50 dark:border-[#46301f] dark:group-hover:border-[#ff7a18]/50";

export function PopularServices() {
  return (
    <section id="prices" aria-labelledby="popular-services-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 md:gap-6">
        <h2 id="popular-services-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
          Популярные услуги
        </h2>
        <a href="#services" className="flex items-center gap-3 rounded-sm text-sm font-semibold text-[#f04a00] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800] dark:text-[#ff6800]">
          Все услуги и цены
          <IconChevronRight aria-hidden="true" className="size-4" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-6">
        {services.map((service) => {
          const { href, price } = resolve(service);
          const priceLabel = price === undefined ? "Цена по запросу" : `от ${price} BYN`;
          const content = <>
            <div className="relative aspect-[3/2] overflow-hidden bg-[#e9e5df]">
              <Image src={`/services/${service.image}.png`} alt={service.alt} fill sizes="(min-width: 1440px) 210px, (min-width: 1280px) calc((100vw - 176px) / 6), (min-width: 768px) calc((100vw - 80px) / 3), calc((100vw - 52px) / 2)" className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none" />
            </div>
            <h3 className="flex-1 p-3 text-sm leading-5 font-semibold text-[#171717] md:px-4 md:pt-4 dark:text-[#fff7f0]">
              {service.title}
            </h3>
            {/* Ticket tear line: dashed rule with notches cut into both card edges. */}
            <div className={`relative border-t border-dashed ${edge}`}>
              <span aria-hidden="true" className={`absolute -top-2 -left-2 size-4 rounded-full border bg-[#fffaf6] dark:bg-[#130f0d] ${edge}`} />
              <span aria-hidden="true" className={`absolute -top-2 -right-2 size-4 rounded-full border bg-[#fffaf6] dark:bg-[#130f0d] ${edge}`} />
            </div>
            <div className="flex items-center justify-between gap-2 px-3 py-2.5 md:px-4 md:py-3">
              <span className="text-[15px] leading-5 font-semibold text-[#e74700] dark:text-[#ff8a32]">{priceLabel}</span>
              <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-dashed border-[#ff5000]/40 text-[#ff5000] transition-[background-color,border-color,color,transform] duration-300 group-hover:translate-x-0.5 group-hover:border-solid group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white motion-reduce:transform-none dark:border-[#ff7a18]/40 dark:text-[#ff8a32] dark:group-hover:bg-[#ff7a18] dark:group-hover:text-[#1c1009]">
                <IconChevronRight className="size-4" />
              </span>
            </div>
          </>;

          // Until a service page exists, offer a real enquiry instead of a 404.
          return href
            ? <Link key={service.image} href={href} className={cardClassName}>{content}</Link>
            : <a
                key={service.image}
                href={`https://wa.me/375291506888?text=${encodeURIComponent(`Здравствуйте! Интересует услуга «${service.title}». Подскажите стоимость для моей модели.`)}`}
                aria-label={`${service.title}, ${priceLabel}. Уточнить в WhatsApp`}
                className={cardClassName}
              >{content}</a>;
        })}
      </div>
    </section>
  );
}
