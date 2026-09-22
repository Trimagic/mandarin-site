import { IconClock, IconFileDescription, IconSearch, IconShieldCheck } from "@tabler/icons-react";
import type { DirectionPageData } from "@/data/directions";

const conditionIcons = [IconSearch, IconFileDescription, IconClock, IconShieldCheck];

export function DirectionConditions({ data }: { data: Pick<DirectionPageData, "conditions"> }) {
  const { conditions } = data;

  return (
    <section id="conditions" aria-labelledby="direction-conditions-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-8 md:px-6 xl:px-12">
      <div className="border-b border-[#e6e2de] pb-8 dark:border-[#46301f]">
        <h2 id="direction-conditions-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
          {conditions.title}
        </h2>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:mt-6 xl:grid-cols-4 xl:gap-x-0 xl:gap-y-6 xl:divide-x xl:divide-[#ded8d2] dark:xl:divide-[#49352d]">
          {conditions.items.map((item, index) => {
            const Icon = conditionIcons[index % conditionIcons.length];
            return (
              <li key={item.title} className="flex items-start gap-3 rounded-xl border border-[#ece5df] bg-[#fffefd] p-4 md:gap-4 md:p-5 xl:rounded-none xl:border-0 xl:bg-transparent xl:px-6 xl:py-0 xl:first:pl-0 xl:last:pr-0 dark:border-[#46301f] dark:bg-[#15110e] dark:xl:bg-transparent">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#ff5000]/[0.07] xl:size-10 xl:rounded-none xl:bg-transparent">
                  <Icon aria-hidden="true" stroke={1.5} className="size-7 text-[#ff5000] xl:size-10" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm leading-5 font-bold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground xl:mt-2 xl:max-w-[235px]">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
