import Image, { getImageProps } from "next/image";
import {
  IconArrowRight,
  IconChevronRight,
  IconClock,
  IconReceipt,
  IconShieldCheck,
  IconStethoscope,
} from "@tabler/icons-react";

import { HomeDirections } from "@/components/site/home-directions";
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

export default function HomePage() {
  const { props: mobileHero } = getImageProps({
    src: "/brand/hero-devices-platform-mobile.png",
    alt: "Ноутбук, телефон и мандарин на фирменной оранжевой площадке",
    width: 921,
    height: 1708,
    sizes: "100vw",
  });
  const { props: tabletHero } = getImageProps({
    src: "/brand/hero-devices-platform-tablet.png",
    alt: "Ноутбук, телефон и мандарин на фирменной оранжевой площадке",
    width: 1536,
    height: 1024,
    sizes: "(min-width: 1024px) 928px, calc(100vw - 48px)",
  });
  return (
    <div id="top" className="min-w-[320px] overflow-x-clip transition-colors">
      <SiteHeader />
      <main>
        <section className="relative overflow-x-clip">
          <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-start gap-0 px-5 pt-4 md:px-6 md:pt-6 xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-6 xl:px-12 xl:pb-10">
            <div className="relative z-10 min-w-0 pt-2 pb-2 text-left md:text-center xl:pt-8 xl:text-left">
              <p className="mb-4 text-[11px] font-extrabold tracking-[0.06em] text-[#ef101c] uppercase md:mb-5 md:text-xs md:tracking-[0.14em] dark:text-[#ff2533]">
                Ремонт техники в Борисове
              </p>

              <h1 className="mx-auto max-w-[920px] text-[clamp(44px,12vw,60px)] leading-[0.98] font-extrabold tracking-[-0.055em] text-[#211a17] md:text-[52px] md:leading-[1.05] lg:text-[60px] xl:mx-0 xl:max-w-[590px] xl:text-[76px] xl:leading-[0.91] xl:tracking-[-0.07em] dark:text-[#fff7f0]">
                Техника{" "}
                <span className="block text-[#f04a00] md:inline xl:block dark:text-[#ff6107]">
                  снова
                </span>{" "}
                <span className="block text-[#dc0822] md:inline xl:block dark:text-[#ef232e]">
                  работает
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-[560px] text-base leading-7 text-[#6f625c] xl:mx-0 xl:mt-7 xl:max-w-[510px] xl:text-[17px] dark:text-[#c5b8b1]">
                Ремонт телефонов, ноутбуков и компьютеров с предварительным
                согласованием стоимости.
              </p>

              <div className="mt-5 flex flex-col items-start gap-1 md:mt-6 md:flex-row md:items-center md:justify-center md:gap-4 xl:mt-8 xl:justify-start">
                <a
                  href="tel:+375291506888"
                  className={cn(
                    buttonVariants({ variant: "brand", size: "xl" }),
                    "h-12 w-full bg-[#eb4900] px-6 text-sm text-white shadow-none hover:bg-[#d64000] md:h-14 md:w-auto dark:bg-[#f45500] dark:hover:bg-[#ff6508] has-data-[icon=inline-end]:pr-5",
                  )}
                >
                  Узнать стоимость
                  <IconArrowRight data-icon="inline-end" />
                </a>
                <a
                  href="https://wa.me/375291506888"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "xl" }),
                    "h-11 px-0 text-sm text-[#f04a00] hover:bg-[#f04a00]/8 md:h-14 md:px-6 dark:text-[#ff6800] dark:hover:bg-[#ff6800]/10 has-data-[icon=inline-end]:pr-0 md:has-data-[icon=inline-end]:pr-5",
                  )}
                >
                  Написать мастеру
                  <IconChevronRight data-icon="inline-end" />
                </a>
              </div>

              <div className="mt-7 hidden items-center justify-center divide-x divide-[#ff6a00]/35 md:flex xl:mt-12 xl:justify-start dark:divide-[#ff7a18]/45 [&>div]:px-5 [&>div:first-child]:pl-0 [&>div:last-child]:pr-0">
                <TrustItem icon={<IconClock />} label="От 20 минут" />
                <TrustItem
                  icon={<IconShieldCheck />}
                  label="Гарантия до года"
                />
                <TrustItem icon={<IconReceipt />} label="Цена до ремонта" />
              </div>
            </div>

            <div className="relative mx-auto mt-6 flex min-w-0 h-[calc(100vw*1.2)] w-full max-w-[928px] items-center justify-center md:-mt-4 md:h-auto xl:mx-0 xl:mt-0 xl:max-w-none xl:justify-start">
              <div className="absolute top-2 left-0 z-20 flex items-center gap-3 rounded-xl border border-[#eee7df] bg-[#fffefd] px-4 py-3 md:top-[14%] md:left-[4%] xl:top-10 xl:left-3 xl:gap-4 xl:px-5 xl:py-4 dark:border-[#78502d] dark:bg-[#211810]">
                <p className="text-sm leading-5 font-bold text-[#171717] dark:text-[#fff7f0]">
                  Диагностика при
                  <br />
                  ремонте — бесплатно
                </p>
                <span className="grid size-12 shrink-0 place-items-center rounded-full border border-[#7bb64b]/60 text-[#65a832] dark:border-[#83af3f]/50 dark:text-[#8ab943]">
                  <IconStethoscope
                    aria-hidden="true"
                    stroke={1.5}
                    className="size-7"
                  />
                </span>
              </div>
              <picture className="absolute top-[calc(-28vw_-_40px)] left-[-20px] z-0 block w-[calc(100%+40px)] shrink-0 md:relative md:top-auto md:left-auto md:z-10 md:w-full xl:w-[760px] xl:shrink-0">
                <source
                  media="(max-width: 767px)"
                  srcSet={mobileHero.srcSet}
                  sizes={mobileHero.sizes}
                  width={921}
                  height={1708}
                />
                <source
                  media="(max-width: 1279px)"
                  srcSet={tabletHero.srcSet}
                  sizes={tabletHero.sizes}
                  width={1536}
                  height={1024}
                />
                <Image
                  src="/brand/hero-devices-platform.png"
                  alt="Ноутбук, телефон и мандарин на фирменной оранжевой площадке"
                  width={1441}
                  height={1091}
                  sizes="(min-width: 1280px) 760px, calc(100vw - 48px)"
                  className="h-auto w-full object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
            <div className="relative z-20 -mt-[130px] mb-12 divide-y divide-dotted divide-[#ded8d2] rounded-xl border border-[#ece5df] bg-[#fffefd] px-4 md:hidden dark:divide-[#46301f] dark:border-[#46301f] dark:bg-[#15110e] [&>div]:py-3 [&_span:first-child]:bg-transparent [&_span:first-child]:text-current [&_svg]:size-6">
              <TrustItem icon={<IconClock />} label="От 20 минут" />
              <TrustItem icon={<IconShieldCheck />} label="Гарантия до года" />
              <TrustItem icon={<IconReceipt />} label="Цена до ремонта" />
            </div>
          </div>
        </section>
        <HomeDirections />
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
