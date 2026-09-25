import Image from "next/image";
import { IconAward, IconClock, IconLock, IconShieldCheck, IconTag, IconUser } from "@tabler/icons-react";
import { useId } from "react";
import type { ServiceQualityData, ServiceQualityIcon } from "@/data/services/types";

const qualityIcons = {
  warranty: IconShieldCheck,
  quality: IconAward,
  privacy: IconLock,
  price: IconTag,
  master: IconUser,
  clock: IconClock,
} satisfies Record<ServiceQualityIcon, typeof IconShieldCheck>;

export function ServiceQuality({ data }: { data: ServiceQualityData }) {
  const headingId = useId();
  if (data.items.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <h2 id={headingId} className="mb-4 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{data.title}</h2>
      <div className="grid overflow-hidden rounded-xl border border-[#e6e2de] bg-[#fffefd] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] dark:border-[#46301f] dark:bg-[#15110e]">
        <div className="relative aspect-[1.9] lg:aspect-auto lg:min-h-[320px]">
          <Image src="/brand/workshop.png" alt="Рабочее место с микроскопом и инструментами для ремонта техники" fill sizes="(min-width: 1440px) 480px, (min-width: 1024px) 34vw, 100vw" className="object-cover" />
          <div aria-hidden="true" className="absolute bottom-4 left-4 grid size-28 -rotate-12 place-items-center rounded-full bg-[#ff5000] text-white shadow-[0_12px_30px_-12px_rgba(255,80,0,.8)] md:size-32">
            <div className="grid size-[calc(100%-12px)] place-items-center rounded-full border-2 border-dashed border-white/70 text-center">
              <div className="flex flex-col items-center gap-1">
                <IconShieldCheck stroke={1.5} className="size-7 md:size-8" />
                <span className="text-[10px] leading-3 font-extrabold tracking-[0.12em] uppercase md:text-[11px]">Гарантия<br />на работы</span>
              </div>
            </div>
          </div>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2">
          {data.items.map((item) => {
            const Icon = qualityIcons[item.icon];
            return (
              <li
                key={item.id}
                className="flex min-w-0 gap-4 border-dashed border-[#eadbd1] p-5 not-first:border-t sm:p-6 sm:not-first:border-t-0 sm:odd:border-r sm:nth-[n+3]:border-t dark:border-[#3b2d22]"
              >
                <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full border border-dashed border-[#ff5000]/45 text-[#ff5000] dark:border-[#ff7a18]/45 dark:text-[#ff8a32]">
                  <Icon stroke={1.5} className="size-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-[15px] leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-[#6f625c] dark:text-[#b6a99b]">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
