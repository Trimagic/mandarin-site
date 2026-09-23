"use client";

import Link from "next/link";
import { Tabs } from "@base-ui/react/tabs";
import { IconChevronRight } from "@tabler/icons-react";

export type DeviceProblemsTab = {
  id: string;
  label: string;
  otherHref: string;
  problems: { title: string; href: string; external: boolean }[];
};

const itemClassName = "flex min-h-14 min-w-0 items-center justify-between gap-2 rounded-lg border px-3 py-3 text-sm transition-colors hover:border-[#ff6800] hover:bg-[#ff6800]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6800] xl:gap-3 xl:px-4";

export function DeviceProblemsTabs({ devices }: { devices: DeviceProblemsTab[] }) {
  return (
    <section aria-labelledby="problems-heading" className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <div className="rounded-xl border border-[#ece5df] bg-[#fffefd] p-4 md:p-6 xl:p-7 dark:border-[#46301f] dark:bg-[#15110e]">
        <Tabs.Root defaultValue="phone" className="relative md:pr-40 lg:pr-48 xl:pr-64">
          <h2 id="problems-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
            Что случилось с техникой?
          </h2>
          <Tabs.List aria-label="Тип техники" className="mt-5 flex flex-wrap gap-x-4 gap-y-2 border-b border-[#e9e6e2] md:gap-x-6 xl:gap-x-8 dark:border-[#46301f]">
            {devices.map((device) => (
              <Tabs.Tab
                key={device.id}
                value={device.id}
                className="-mb-px cursor-pointer border-b-2 border-transparent px-0 pb-3 text-sm font-medium text-[#54545d] outline-offset-4 transition-colors hover:text-[#f04a00] focus-visible:outline-2 focus-visible:outline-[#ff6800] aria-selected:border-[#ff4b00] aria-selected:text-[#f04a00] dark:text-[#d1c7bd] dark:hover:text-[#ff6800] dark:aria-selected:border-[#ff6800] dark:aria-selected:text-[#ff6800]"
              >
                {device.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>
          {devices.map((device) => (
            <Tabs.Panel key={device.id} value={device.id} className="pt-6 outline-offset-4 focus-visible:outline-2 focus-visible:outline-[#ff6800]">
              <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4">
                {device.problems.map((problem) => {
                  const content = <>
                    {problem.title}
                    <IconChevronRight aria-hidden="true" className="size-4 shrink-0 text-[#ff4b00] dark:text-[#ff6800]" />
                  </>;
                  const className = `${itemClassName} border-[#e9e6e2] text-[#414149] dark:border-[#3b2d22] dark:text-[#e3d9ce]`;
                  return problem.external
                    ? <a key={problem.title} href={problem.href} aria-label={`${device.label}: ${problem.title}. Написать мастеру в WhatsApp`} className={className}>{content}</a>
                    : <Link key={problem.title} href={problem.href} className={className}>{content}</Link>;
                })}
                <Link
                  href={device.otherHref}
                  aria-label={`${device.label}: другая поломка. Все услуги и неисправности`}
                  className={`${itemClassName} border-dashed border-[#ffb58a] font-semibold text-[#f04a00] dark:border-[#78502d] dark:text-[#ff6800]`}
                >
                  Другая поломка
                  <IconChevronRight aria-hidden="true" className="size-4 shrink-0" />
                </Link>
              </div>
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
