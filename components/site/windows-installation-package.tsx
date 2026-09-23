import {
  IconApps,
  IconBrandWindows,
  IconCircleCheck,
  IconDeviceLaptop,
  IconFiles,
  IconSettings,
} from "@tabler/icons-react";
import { windowsInstallationPackage as data } from "@/data/windows-installation";

const icons = {
  storage: IconDeviceLaptop,
  files: IconFiles,
  windows: IconBrandWindows,
  drivers: IconSettings,
  programs: IconApps,
  check: IconCircleCheck,
};

export function WindowsInstallationPackage() {
  return (
    <section
      id="included"
      aria-labelledby="windows-package-heading"
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12"
    >
      <div className="rounded-lg border border-[#e6e2de] bg-[#fffefd] px-5 pt-5 md:px-7 md:pt-6 dark:border-[#46301f] dark:bg-[#15110e]">
        <h2 id="windows-package-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
          {data.title}
        </h2>
        <p className="mt-4 text-base font-bold text-[#171717] dark:text-[#fff7f0]">{data.subtitle}</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">{data.description}</p>

        <ul className="mt-4 grid grid-cols-1 border-t border-[#e6e2de] py-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-6 lg:py-6 dark:border-[#46301f]">
          {data.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.id} className="flex items-start gap-4 border-b border-[#e6e2de] py-5 last:border-b-0 sm:border-b-0 sm:px-4 lg:py-1 lg:px-6 lg:[&:nth-child(3n+1)]:border-l-0 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+3)]:border-l dark:border-[#46301f]">
                <Icon aria-hidden="true" stroke={1.5} className="size-9 shrink-0 text-[#ff5000]" />
                <div className="min-w-0">
                  <h3 className="text-sm leading-5 font-bold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                  <p className="mt-1.5 max-w-[260px] text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="border-t border-[#e6e2de] py-4 text-xs leading-5 text-muted-foreground dark:border-[#46301f]">{data.notice}</p>
      </div>
    </section>
  );
}

