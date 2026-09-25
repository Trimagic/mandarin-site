"use client";

import Link from "next/link";
import { Tabs } from "@base-ui/react/tabs";
import { IconChevronRight, IconDeviceDesktop, IconDeviceLaptop, IconDeviceMobile, IconDeviceTv, IconPlus } from "@tabler/icons-react";

export type DeviceProblemsTab = {
  id: string;
  label: string;
  otherHref: string;
  problems: { title: string; href: string; external: boolean }[];
};

const deviceIcons: Record<string, typeof IconDeviceMobile> = {
  phone: IconDeviceMobile,
  laptop: IconDeviceLaptop,
  desktop: IconDeviceDesktop,
  tv: IconDeviceTv,
};

const itemClassName =
  "group relative flex h-full min-h-14 min-w-0 items-center gap-3 overflow-hidden rounded-xl border px-4 py-3 text-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6800]";

const problemClassName = `${itemClassName} border-[#e9e6e2] bg-[#fffefd] text-[#2c2622] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#ff5000] after:transition-transform after:duration-300 hover:border-[#ff5000]/50 hover:bg-[#fff6ef] hover:after:scale-x-100 motion-reduce:after:transition-none dark:border-[#3b2d22] dark:bg-[#15110e] dark:text-[#e3d9ce] dark:hover:border-[#ff7a18]/50 dark:hover:bg-[#1d140e] dark:after:bg-[#ff7a18]`;

function ProblemContent({ title }: { title: string }) {
  return (
    <>
      <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-[#ff5000]/35 transition-colors duration-300 group-hover:bg-[#ff5000] dark:bg-[#ff7a18]/40 dark:group-hover:bg-[#ff7a18]" />
      <span className="min-w-0 flex-1 font-medium">{title}</span>
      <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-dashed border-[#ff5000]/40 text-[#ff5000] transition-[background-color,border-color,color,transform] duration-300 group-hover:translate-x-0.5 group-hover:border-solid group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white motion-reduce:transform-none dark:border-[#ff7a18]/40 dark:text-[#ff8a32] dark:group-hover:bg-[#ff7a18] dark:group-hover:text-[#1c1009]">
        <IconChevronRight className="size-4" />
      </span>
    </>
  );
}

export function DeviceProblemsTabs({ devices }: { devices: DeviceProblemsTab[] }) {
  return (
    <section aria-labelledby="problems-heading" className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <div className="rounded-xl border border-[#ece5df] bg-[#fffefd] p-4 md:p-6 xl:p-7 dark:border-[#46301f] dark:bg-[#15110e]">
        <Tabs.Root defaultValue="phone" className="relative md:pr-40 lg:pr-48 xl:pr-64">
          <h2 id="problems-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
            Что случилось с техникой?
          </h2>
          <Tabs.List aria-label="Тип техники" className="mt-5 grid grid-cols-2 gap-2 sm:inline-flex sm:flex-wrap sm:rounded-full sm:border sm:border-dashed sm:border-[#eadbd1] sm:p-1 dark:sm:border-[#46301f]">
            {devices.map((device) => {
              const Icon = deviceIcons[device.id] ?? IconDeviceMobile;
              return (
                <Tabs.Tab
                  key={device.id}
                  value={device.id}
                  className="inline-flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#e9e6e2] px-4 text-sm font-semibold text-[#54545d] outline-offset-2 transition-colors hover:text-[#e74700] focus-visible:outline-2 focus-visible:outline-[#ff6800] aria-selected:border-[#ff5000]/40 aria-selected:bg-[#ff5000]/10 aria-selected:text-[#e74700] sm:h-10 sm:border-transparent dark:border-[#3b2d22] dark:text-[#d1c7bd] dark:hover:text-[#ff8a32] dark:aria-selected:border-[#ff7a18]/40 dark:aria-selected:bg-[#ff7a18]/15 dark:aria-selected:text-[#ff8a32] sm:dark:border-transparent"
                >
                  <Icon aria-hidden="true" stroke={1.5} className="size-5" />
                  {device.label}
                </Tabs.Tab>
              );
            })}
          </Tabs.List>
          {devices.map((device) => (
            <Tabs.Panel key={device.id} value={device.id} className="pt-5 outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#ff6800]">
              <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3">
                {device.problems.map((problem) => (
                  <li key={problem.title}>
                    {problem.external ? (
                      <a href={problem.href} aria-label={`${device.label}: ${problem.title}. Написать мастеру в WhatsApp`} className={problemClassName}>
                        <ProblemContent title={problem.title} />
                      </a>
                    ) : (
                      <Link href={problem.href} className={problemClassName}>
                        <ProblemContent title={problem.title} />
                      </Link>
                    )}
                  </li>
                ))}
                <li>
                  <Link
                    href={device.otherHref}
                    aria-label={`${device.label}: другая поломка. Все услуги и неисправности`}
                    className={`${itemClassName} border-dashed border-[#ff5000]/45 font-semibold text-[#e74700] hover:border-[#ff5000] hover:bg-[#ff5000]/5 dark:border-[#ff7a18]/45 dark:text-[#ff8a32] dark:hover:border-[#ff7a18]`}
                  >
                    <IconPlus aria-hidden="true" stroke={1.75} className="size-4 shrink-0" />
                    <span className="min-w-0 flex-1">Другая поломка</span>
                    <IconChevronRight aria-hidden="true" className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </li>
              </ul>
              <DeviceIllustration device={device.id} />
            </Tabs.Panel>
          ))}
        </Tabs.Root>
      </div>
    </section>
  );
}

function DeviceIllustration({ device }: { device: string }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-36 items-center justify-center md:flex lg:w-44 xl:w-56">
      <svg viewBox="0 0 220 240" className="h-auto w-full text-[#171717] dark:text-[#cec5bb]" fill="none">
        <circle cx="105" cy="127" r="76" className="fill-[#fff0e5] dark:fill-[#24170f]" />
        {Array.from({ length: 20 }, (_, i) => (
          <path key={i} d={`M${157 + (i % 4) * 14} ${49 + Math.floor(i / 4) * 14}h4m-2-2v4`} stroke="#ff6800" strokeOpacity=".35" />
        ))}
        {device === "phone" ? (
          <>
            <rect x="65" y="27" width="94" height="190" rx="15" className="fill-[#fffefd] dark:fill-[#15110e]" stroke="currentColor" strokeWidth="3" />
            <path d="M91 28h42v5a5 5 0 0 1-5 5H96a5 5 0 0 1-5-5z" fill="currentColor" />
          </>
        ) : (
          <>
            <rect x="29" y="57" width="166" height="111" rx="8" className="fill-[#fffefd] dark:fill-[#15110e]" stroke="currentColor" strokeWidth="3" />
            {device === "laptop" ? <path d="M29 169 14 184h196l-15-15M91 184h42" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" /> : device === "tv" ? <>
              <path d="m62 169-12 19m112-19 12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <rect x="36" y="64" width="152" height="95" rx="3" stroke="currentColor" strokeOpacity=".2" />
              <circle cx="112" cy="164" r="2" fill="#ff6800" />
            </> : <path d="M112 169v26m-34 0h68" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />}
          </>
        )}
        <text x="112" y="132" textAnchor="middle" fill="#ef232e" fontSize="48" fontWeight="800">?</text>
      </svg>
    </div>
  );
}
