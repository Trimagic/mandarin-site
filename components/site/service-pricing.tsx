import { IconCalculator, IconChevronRight, IconClipboardCheck } from "@tabler/icons-react";
import { useId } from "react";
import { buttonVariants } from "@/components/ui/button";
import type { ServicePricingData } from "@/data/services/types";
import { cn } from "@/lib/utils";

export function ServicePricing({ data }: { data: ServicePricingData }) {
  const headingId = useId();
  const CalloutIcon = data.callout?.icon === "diagnostics" ? IconClipboardCheck : IconCalculator;
  if (data.items.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <div className={cn("grid gap-5 lg:gap-8", data.callout && "lg:grid-cols-[1.05fr_1fr]")}>
        <div className="min-w-0">
          <h2 id={headingId} className="mb-4 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{data.title}</h2>
          <ul className="grid grid-cols-[minmax(0,1fr)_auto] divide-y divide-[#e6e2de] overflow-hidden rounded-[6px] border border-[#e6e2de] bg-[#fffefd] sm:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)_auto] dark:divide-[#46301f] dark:border-[#46301f] dark:bg-[#15110e]">
            {data.items.map((item) => (
              <li key={item.id} className="col-span-full grid grid-cols-subgrid items-center gap-x-4 gap-y-1 px-4 py-3 sm:px-5">
                <span className="text-sm leading-5 text-[#171717] dark:text-[#fff7f0]">{item.title}</span>
                <span className="col-start-1 text-xs leading-5 font-bold text-[#171717] sm:col-start-auto dark:text-[#fff7f0]">{item.price}</span>
                {item.action && <a href={item.action.href} aria-label={`${item.action.label}: ${item.title}`} className="col-start-2 row-start-1 row-end-3 inline-flex min-h-11 items-center gap-1 rounded-sm text-xs font-medium text-[#ff5000] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5000] sm:col-start-auto sm:row-auto">
                  {item.action.label}<IconChevronRight aria-hidden="true" className="size-4 shrink-0" />
                </a>}
              </li>
            ))}
          </ul>
        </div>
        {data.callout && <div className="relative isolate flex flex-col justify-center overflow-hidden rounded-[8px] bg-[#ff5000] p-6 text-white sm:p-8">
          <CalloutIcon aria-hidden="true" stroke={1} className="pointer-events-none absolute -right-3 bottom-3 -z-10 size-36 text-white/15 sm:right-4" />
          <h3 className="max-w-[340px] text-2xl leading-tight font-extrabold tracking-[-0.025em]">{data.callout.title}</h3>
          <p className="mt-3 max-w-[330px] text-sm leading-6">{data.callout.description}</p>
          <a href={data.callout.action.href} className={cn(buttonVariants({ variant: "secondary", size: "xl" }), "mt-5 h-11 w-fit max-w-full whitespace-normal rounded-md bg-white px-5 text-center text-xs text-[#e74700] hover:bg-[#fff3eb] focus-visible:ring-white/70")}>{data.callout.action.label}</a>
        </div>}
      </div>
    </section>
  );
}
