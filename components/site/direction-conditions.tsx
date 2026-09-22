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
        <ul className="mt-6 grid grid-cols-1 gap-y-6 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-[#ded8d2] dark:lg:divide-[#49352d]">
          {conditions.items.map((item, index) => {
            const Icon = conditionIcons[index % conditionIcons.length];
            return (
              <li key={item.title} className="flex items-start gap-4 md:pr-6 lg:px-6 lg:first:pl-0 lg:last:pr-0">
                <Icon aria-hidden="true" stroke={1.5} className="size-10 shrink-0 text-[#ff5000]" />
                <div className="min-w-0">
                  <h3 className="text-sm leading-5 font-bold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                  <p className="mt-2 max-w-[235px] text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
