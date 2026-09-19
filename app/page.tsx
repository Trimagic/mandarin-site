import Image from "next/image";
import {
  IconArrowRight,
  IconBrandWindows,
  IconChevronRight,
  IconClock,
  IconDeviceDesktop,
  IconDeviceLaptop,
  IconDeviceMobile,
  IconReceipt,
  IconShieldCheck,
} from "@tabler/icons-react";

import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { DeviceProblems } from "@/components/site/device-problems";
import { PopularServices } from "@/components/site/popular-services";
import { WhyMandarin } from "@/components/site/why-mandarin";
import { RepairProcess } from "@/components/site/repair-process";
import { CustomerReviews } from "@/components/site/customer-reviews";
import { ContactSection } from "@/components/site/contact-section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const serviceDirections = [
  {
    title: "Ремонт телефонов",
    description: "Диагностика и ремонт смартфонов любых брендов",
    icon: IconDeviceMobile,
    color: "text-[#ff4b00] dark:text-[#ff6800]",
  },
  {
    title: "Ремонт ноутбуков",
    description: "Любая сложность, включая залитие и замену комплектующих",
    icon: IconDeviceLaptop,
    color: "text-[#ef172c] dark:text-[#ff293a]",
  },
  {
    title: "Ремонт компьютеров",
    description: "Настольные ПК, моноблоки и сборка под ваши задачи",
    icon: IconDeviceDesktop,
    color: "text-[#ff4b00] dark:text-[#ff6800]",
  },
  {
    title: "Установка Windows",
    description: "Установка и настройка Windows, драйверов и программ",
    icon: IconBrandWindows,
    color: "text-[#009cff] dark:text-[#00a6ff]",
  },
];

export default function HomePage() {
  return (
    <div id="top" className="min-w-[1280px] transition-colors">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[0.82fr_1.18fr] items-start gap-6 px-12 pt-6 pb-10">
            <div className="relative z-10 pt-8 pb-2">
              <p className="mb-5 text-xs font-extrabold tracking-[0.14em] text-[#ef101c] uppercase dark:text-[#ff2533]">
                Ремонт техники в Борисове
              </p>

              <h1 className="max-w-[590px] text-[76px] leading-[0.91] font-extrabold tracking-[-0.07em] text-[#211a17] dark:text-[#fff7f0]">
                Техника
                <span className="block text-[#f04a00] dark:text-[#ff6107]">
                  снова
                </span>
                <span className="block text-[#dc0822] dark:text-[#ef232e]">
                  работает
                </span>
              </h1>

              <p className="mt-7 max-w-[510px] text-[17px] leading-7 text-[#6f625c] dark:text-[#c5b8b1]">
                Ремонт телефонов, ноутбуков и компьютеров с предварительным
                согласованием стоимости.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="tel:+375291506888"
                  className={cn(
                    buttonVariants({ variant: "brand", size: "xl" }),
                    "h-14 bg-[#eb4900] px-6 text-sm text-white shadow-none hover:bg-[#d64000] dark:bg-[#f45500] dark:hover:bg-[#ff6508] has-data-[icon=inline-end]:pr-5",
                  )}
                >
                  Узнать стоимость
                  <IconArrowRight data-icon="inline-end" />
                </a>
                <a
                  href="https://wa.me/375291506888"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "xl" }),
                    "h-14 px-6 text-sm text-[#f04a00] hover:bg-[#f04a00]/8 dark:text-[#ff6800] dark:hover:bg-[#ff6800]/10 has-data-[icon=inline-end]:pr-5",
                  )}
                >
                  Написать мастеру
                  <IconChevronRight data-icon="inline-end" />
                </a>
              </div>

              <div className="mt-12 flex items-center divide-x divide-[#ff6a00]/35 dark:divide-[#ff7a18]/45 [&>div]:px-5 [&>div:first-child]:pl-0 [&>div:last-child]:pr-0">
                <TrustItem icon={<IconClock />} label="От 20 минут" />
                <TrustItem
                  icon={<IconShieldCheck />}
                  label="Гарантия до года"
                />
                <TrustItem icon={<IconReceipt />} label="Цена до ремонта" />
              </div>
            </div>

            <div className="relative flex items-center justify-end">
              <Image
                src="/brand/hero-devices-platform.png"
                alt="Ноутбук, телефон и мандарин на фирменной оранжевой площадке"
                width={1426}
                height={1103}
                sizes="(min-width: 1280px) 760px"
                className="relative z-10 h-auto w-[760px] max-w-none object-contain"
                priority
              />
            </div>
          </div>
        </section>
        <section
          id="services"
          aria-labelledby="services-heading"
          className="relative z-20 mx-auto -mt-16 w-full max-w-[1440px] scroll-mt-24 px-12 pb-10"
        >
          <h2 id="services-heading" className="sr-only">
            Основные направления ремонта
          </h2>
          <div className="grid grid-cols-4 gap-4">
            {serviceDirections.map(({ title, description, icon: Icon, color }) => (
              <article
                key={title}
                className="flex min-h-44 items-start gap-5 rounded-xl border border-[#ece5df] bg-[#fffefd] p-7 dark:border-[#46301f] dark:bg-[#15110e]"
              >
                <Icon
                  aria-hidden="true"
                  stroke={1.5}
                  className={cn("mt-1 size-11 shrink-0", color)}
                />
                <div>
                  <h3 className="max-w-40 text-lg leading-6 font-bold tracking-[-0.025em] text-[#171717] dark:text-[#fff7f0]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#393939] dark:text-[#d1c7bd]">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <DeviceProblems />
        <PopularServices />
        <WhyMandarin />
        <RepairProcess />
        <CustomerReviews />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap text-[13px] font-semibold text-[#443a35] dark:text-[#ddd0c8]">
      <span className="grid size-8 place-items-center rounded-full bg-[#fff0e5] text-primary dark:bg-[#ff7a18]/12 dark:text-[#ff9a3d] [&_svg]:size-4">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );
}
