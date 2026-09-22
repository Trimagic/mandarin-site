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
      <div className="grid items-center gap-5 rounded-xl border border-[#e6e2de] bg-[#fffefd] p-3 sm:p-4 lg:grid-cols-[0.9fr_2fr] lg:gap-6 dark:border-[#46301f] dark:bg-[#15110e]">
        <div className="relative aspect-[1.9] overflow-hidden rounded-[10px] lg:aspect-[1.6]">
          <Image src="/brand/workshop.png" alt="Рабочее место с микроскопом и инструментами для ремонта техники" fill sizes="(min-width: 1440px) 418px, (min-width: 1024px) 30vw, 100vw" className="object-cover" />
        </div>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {data.items.map((item) => {
            const Icon = qualityIcons[item.icon];
            return (
              <li key={item.id} className="flex min-h-[200px] min-w-0 flex-col items-center justify-center rounded-[10px] border border-[#eee5dc] bg-[#fffaf5] px-4 py-5 text-center dark:border-[#46301f] dark:bg-[#1c1510]">
                <span className="mb-3 flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#ff5000]/[0.08] dark:bg-[#ff5000]/[0.12]">
                  <Icon aria-hidden="true" stroke={1.5} className="size-8 text-[#ff5000]" />
                </span>
                <h3 className="flex min-h-10 items-center text-sm leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                <p className="mt-2 max-w-[210px] text-xs leading-5 text-muted-foreground">{item.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
