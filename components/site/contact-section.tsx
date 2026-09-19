import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconChevronRight,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

const address = "Борисов, улица Чапаева, 34";
const mapQuery = encodeURIComponent(`${address}, Беларусь`);

export function ContactSection() {
  return (
    <section id="contacts" aria-labelledby="contact-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-12 pb-10">
      <div className="grid grid-cols-[1fr_1.05fr_1.1fr] items-stretch gap-6 rounded-xl border border-[#ece5df] bg-[#fffefd] p-5 dark:border-[#46301f] dark:bg-[#15110e]">
        <div className="border-r border-[#e9e6e2] py-1 pr-6 dark:border-[#3b2d22]">
          <h2 id="contact-heading" className="max-w-80 text-[28px] leading-tight font-extrabold tracking-[-0.035em] text-[#242833] dark:text-[#e2d3c2]">
            Не знаете, что именно сломалось?
          </h2>
          <p className="mt-3 max-w-80 text-sm leading-6 text-[#393939] dark:text-[#d1c7bd]">
            Опишите проблему — подскажем решение и ориентируем по стоимости.
          </p>
          <a href="https://wa.me/375291506888" className="mt-4 inline-flex h-12 items-center gap-5 rounded-[6px] bg-[#eb4900] px-5 text-sm font-semibold text-white hover:bg-[#d64000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800] dark:bg-[#f45500] dark:hover:bg-[#ff6508]">
            Написать мастеру
            <IconChevronRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <div className="flex flex-col justify-center py-1">
          <address className="space-y-5 text-sm not-italic">
            <div className="flex items-start gap-4">
              <IconMapPin aria-hidden="true" stroke={1.5} className="mt-0.5 size-6 shrink-0 text-[#54545d] dark:text-[#c5b8b1]" />
              <div>
                <a href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#242833] hover:underline dark:text-[#fff7f0]">
                  Борисов, ул. Чапаева, 34
                </a>
                <p className="mt-1 text-xs leading-5 text-[#79757a] dark:text-[#b6a99b]">ТЦ «Мир Стиля», левый боковой вход</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconPhone aria-hidden="true" stroke={1.5} className="mt-0.5 size-6 shrink-0 text-[#54545d] dark:text-[#c5b8b1]" />
              <div>
                <a href="tel:+375291506888" className="font-semibold text-[#242833] hover:underline dark:text-[#fff7f0]">+375 29 150-68-88</a>
                <p className="mt-1 text-xs leading-5 text-[#79757a] dark:text-[#b6a99b]">Время визита уточните по телефону</p>
              </div>
            </div>
          </address>
          <div className="mt-6 flex gap-2">
            <a href="viber://chat?number=%2B375291506888" className="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] border border-[#9975e0]/60 px-3 text-xs font-medium text-[#8254d0] hover:bg-[#8254d0]/5 dark:text-[#b38bed]">
              <IconPhone aria-hidden="true" className="size-4" />Viber
            </a>
            <a href="https://t.me/+375291506888" className="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] border border-[#25a4e3]/50 px-3 text-xs font-medium text-[#159bde] hover:bg-[#159bde]/5 dark:text-[#36b5f5]">
              <IconBrandTelegram aria-hidden="true" className="size-4" />Telegram
            </a>
            <a href="https://wa.me/375291506888" className="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] border border-[#40b951]/50 px-3 text-xs font-medium text-[#279e3b] hover:bg-[#279e3b]/5 dark:text-[#6cc952]">
              <IconBrandWhatsapp aria-hidden="true" className="size-4" />WhatsApp
            </a>
          </div>
        </div>
        <div className="relative min-h-56 overflow-hidden rounded-lg border border-[#e9e6e2] bg-[#f1eee8] dark:border-[#3b2d22]">
          <iframe
            title="Карта: Борисов, улица Чапаева, 34"
            src={`https://maps.google.com/maps?q=${mapQuery}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 h-full w-full border-0 dark:invert-[.9] dark:hue-rotate-180"
          />
        </div>
      </div>
    </section>
  );
}
