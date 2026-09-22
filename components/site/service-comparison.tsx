import { IconCheck } from "@tabler/icons-react";
import { useId } from "react";
import type { ServiceComparisonData } from "@/data/services/types";

export function ServiceComparison({ data }: { data: ServiceComparisonData }) {
  const headingId = useId();
  if (data.items.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <h2 id={headingId} className="mb-4 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
        {data.title}
      </h2>
      <ul className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {data.items.map((item) => (
          <li key={item.id} className="flex flex-col rounded-[6px] border border-[#e6e2de] bg-[#fffefd] p-5 dark:border-[#46301f] dark:bg-[#15110e]">
            <h3 className="text-base leading-6 font-bold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
            {item.features.length > 0 && <ul className="mt-3 space-y-2">
              {item.features.map((feature, index) => (
                <li key={`${index}-${feature}`} className="flex items-start gap-2 text-sm leading-5 text-muted-foreground">
                  <IconCheck aria-hidden="true" stroke={1.75} className="size-5 shrink-0 text-[#65a832] dark:text-[#8cc65b]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>}
            {item.note && <p className="mt-auto pt-4 text-sm leading-5 text-[#605952] dark:text-[#c5b8b1]">{item.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
