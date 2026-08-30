import Image from "next/image";
import {
  IconArrowRight,
  IconChevronRight,
  IconClock,
  IconReceipt,
  IconShieldCheck,
} from "@tabler/icons-react";

import { SiteHeader } from "@/components/site/site-header";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div id="top" className="min-w-[1280px] transition-colors">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1440px] grid-cols-[0.82fr_1.18fr] items-center gap-6 px-12 py-14">
            <div className="relative z-10 pb-2">
              <p className="mb-5 text-xs font-extrabold tracking-[0.14em] text-primary uppercase">
                Ремонт техники в Борисове
              </p>

              <h1 className="max-w-[590px] text-[76px] leading-[0.91] font-extrabold tracking-[-0.07em] text-[#211a17] dark:text-[#fff7f0]">
                Техника
                <span className="block text-[#eb550d] dark:text-[#ff7418]">снова</span>
                <span className="block text-[#df2034] dark:text-[#ff4054]">работает</span>
              </h1>

              <p className="mt-7 max-w-[510px] text-[17px] leading-7 text-[#6f625c] dark:text-[#c5b8b1]">
                Ремонт телефонов, ноутбуков и компьютеров с предварительным согласованием стоимости.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a href="tel:+375291506888" className={buttonVariants({ variant: "brand", size: "xl" })}>
                  Узнать стоимость
                  <IconArrowRight data-icon="inline-end" />
                </a>
                <a
                  href="https://wa.me/375291506888"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "xl" }),
                    "text-primary dark:text-[#ff9a3d] dark:hover:bg-white/6",
                  )}
                >
                  Написать мастеру
                  <IconChevronRight data-icon="inline-end" />
                </a>
              </div>

              <div className="mt-12 flex items-center gap-8 border-t border-[#eadbd1] pt-6 dark:border-[#3e2c25]">
                <TrustItem icon={<IconClock />} label="От 20 минут" />
                <TrustItem icon={<IconShieldCheck />} label="Гарантия до года" />
                <TrustItem icon={<IconReceipt />} label="Цена до ремонта" />
              </div>
            </div>

            <div className="relative flex min-h-[650px] items-center justify-end">
              <div className="absolute right-[-7%] bottom-[4%] h-32 w-[78%] rounded-full bg-[#ec3d14]/12 blur-3xl" />
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
      </main>
    </div>
  );
}

function TrustItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap text-[13px] font-semibold text-[#443a35] dark:text-[#ddd0c8]">
      <span className="grid size-8 place-items-center rounded-full bg-[#fff0e5] text-primary dark:bg-[#ff7a18]/12 dark:text-[#ff9a3d] [&_svg]:size-4">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
