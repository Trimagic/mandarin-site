import {
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconChevronRight,
  IconClock,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

import { RequestTrigger } from "@/components/site/request-provider";
import { siteConfig } from "@/lib/site";
import { isEnquiryHref, requestLabel } from "@/lib/request-types";

const address = "Борисов, улица Чапаева, 34";
const mapQuery = encodeURIComponent(`${address}, Беларусь`);

export type ContactSectionData = {
  title: string;
  description: string;
  action: { label: string; href: string };
};

const defaultData: ContactSectionData = {
  title: "Не знаете, что именно сломалось?",
  description: "Опишите проблему — подскажем решение и ориентируем по стоимости.",
  action: { label: "Написать мастеру", href: "https://wa.me/375291506888" },
};

export function ContactSection({ data = defaultData, id = "contacts" }: { data?: ContactSectionData; id?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="grid grid-cols-1 items-stretch gap-3 xl:grid-cols-[1fr_1.05fr_1.1fr] xl:gap-6 xl:rounded-xl xl:border xl:border-[#ece5df] xl:bg-[#fffefd] xl:p-5 xl:dark:border-[#46301f] xl:dark:bg-[#15110e]">
        <div className="grid grid-cols-1 gap-5 rounded-xl border border-[#ece5df] bg-[#fffefd] p-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] md:p-5 xl:contents dark:border-[#46301f] dark:bg-[#15110e]">
        <div className="min-w-0 border-b border-[#e9e6e2] pt-1 pb-5 md:border-r md:border-b-0 md:py-1 md:pr-5 xl:pr-6 dark:border-[#3b2d22]">
          <h2 id={`${id}-heading`} className="max-w-80 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#242833] xl:text-[28px] dark:text-[#e2d3c2]">
            {data.title}
          </h2>
          <p className="mt-3 max-w-80 text-sm leading-6 text-[#393939] dark:text-[#d1c7bd]">
            {data.description}
          </p>
          <RequestTrigger fallbackHref={data.action.href} className="mt-4 inline-flex h-12 w-full items-center justify-center gap-5 rounded-[6px] bg-[#eb4900] px-5 text-sm font-semibold text-white hover:bg-[#d64000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800] md:w-auto dark:bg-[#f45500] dark:hover:bg-[#ff6508]">
            {isEnquiryHref(data.action.href) ? requestLabel(data.action.label) : data.action.label}
            <IconChevronRight aria-hidden="true" className="size-4" />
          </RequestTrigger>
        </div>
        <div className="flex min-w-0 flex-col justify-center py-1">
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
              </div>
            </div>
            <div className="flex items-start gap-4">
              <IconClock aria-hidden="true" stroke={1.5} className="mt-0.5 size-6 shrink-0 text-[#54545d] dark:text-[#c5b8b1]" />
              <div>
                <p className="font-semibold text-[#242833] dark:text-[#fff7f0]">{siteConfig.openingHours.label}</p>
                <p className="mt-1 text-xs leading-5 text-[#79757a] dark:text-[#b6a99b]">{siteConfig.openingHours.note}</p>
              </div>
            </div>
          </address>
          <div className="mt-5 flex flex-wrap gap-2 max-md:[&>a]:flex-1 max-md:[&>a]:gap-1 max-md:[&>a]:px-2 xl:mt-6 xl:flex-nowrap">
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
        </div>
        <div className="relative h-48 overflow-hidden rounded-lg border border-[#e9e6e2] bg-[#f1eee8] lg:h-56 xl:h-auto xl:min-h-56 dark:border-[#3b2d22]">
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
