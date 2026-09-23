import { IconBulb, IconCloudUpload, IconCpu, IconDeviceDesktop, IconDeviceTv, IconDeviceLaptop, IconDeviceMobile, IconDeviceMobileCheck, IconGauge, IconListCheck, IconSearch, IconSparkles, IconTools } from "@tabler/icons-react";
import { useId } from "react";
import type { ServiceIncludedData, ServiceIncludedIcon } from "@/data/services/types";

const includedIcons = {
  diagnostics: IconSearch,
  part: IconDeviceMobile,
  repair: IconTools,
  check: IconDeviceMobileCheck,
  cleaning: IconSparkles,
  data: IconCloudUpload,
  component: IconCpu,
  laptop: IconDeviceLaptop,
  test: IconGauge,
  desktop: IconDeviceDesktop,
  selection: IconListCheck,
  tv: IconDeviceTv,
  backlight: IconBulb,
} satisfies Record<ServiceIncludedIcon, typeof IconSearch>;

export function ServiceIncluded({ data }: { data: ServiceIncludedData }) {
  const headingId = useId();
  if (data.items.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <h2 id={headingId} className="mb-4 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
        {data.title}
      </h2>
      <ol className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {data.items.map((item, index) => {
          const Icon = includedIcons[item.icon];
          return (
            <li key={item.id} className="rounded-[6px] border border-[#e6e2de] bg-[#fffefd] p-5 dark:border-[#46301f] dark:bg-[#15110e]">
              <div aria-hidden="true" className="mb-4 flex items-center gap-4">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#ff5000] text-base font-bold text-white">{index + 1}</span>
                <Icon stroke={1.5} className="size-9 text-[#ff5000]" />
              </div>
              <div className="pl-[52px]">
                <h3 className="text-sm leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
