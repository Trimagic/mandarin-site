import Image from "next/image";
import { IconChevronRight } from "@tabler/icons-react";

const services = [
  { title: "Замена экрана телефона", image: "screen-repair", alt: "Смартфон с разбитым стеклом экрана", price: 120 },
  { title: "Замена аккумулятора телефона", image: "battery-replacement", alt: "Аккумулятор рядом с разобранным смартфоном", price: 70 },
  { title: "Замена разъёма зарядки", image: "charging-port", alt: "Разъём USB-C телефона и зарядный кабель", price: 80 },
  { title: "Чистка ноутбука от пыли", image: "laptop-cleaning", alt: "Вентилятор и система охлаждения открытого ноутбука", price: 90 },
  { title: "Установка SSD и апгрейд", image: "ssd-upgrade", alt: "Твердотельные накопители SSD двух форматов", price: 110 },
  { title: "Установка Windows", image: "windows-installation", alt: "Ноутбук с символом Windows на экране", price: 70 },
];

export function PopularServices() {
  return (
    <section id="prices" aria-labelledby="popular-services-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-12 pb-10">
      <div className="mb-5 flex items-center justify-between gap-6">
        <h2 id="popular-services-heading" className="text-[28px] leading-tight font-extrabold tracking-[-0.035em] text-[#171717] dark:text-[#fff7f0]">
          Популярные услуги
        </h2>
        <a href="https://wa.me/375291506888" className="flex items-center gap-3 rounded-sm text-sm font-semibold text-[#f04a00] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800] dark:text-[#ff6800]">
          Все услуги и цены
          <IconChevronRight aria-hidden="true" className="size-4" />
        </a>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {services.map((service) => (
          <a
            key={service.image}
            href={`https://wa.me/375291506888?text=${encodeURIComponent(`Здравствуйте! Интересует услуга «${service.title}». Подскажите стоимость для моей модели.`)}`}
            aria-label={`${service.title}, от ${service.price} BYN. Уточнить в WhatsApp`}
            className="group flex flex-col overflow-hidden rounded-[6px] border border-[#ece5df] bg-[#fffefd] transition-colors hover:border-[#ff6800] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800] dark:border-[#46301f] dark:bg-[#15110e]"
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-[#e9e5df]">
              <Image src={`/services/${service.image}.png`} alt={service.alt} fill sizes="(min-width: 1440px) 210px, 190px" className="object-cover" />
            </div>
            <div className="flex flex-1 flex-col p-4">
              <h3 className="text-sm leading-6 font-semibold text-[#171717] dark:text-[#fff7f0]">
                {service.title}
              </h3>
              <p className="mt-auto pt-3 text-base font-bold text-[#f04a00] dark:text-[#ff6800]">
                от {service.price} BYN
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
