import type { ReactNode } from "react";
import {
  IconBattery, IconBolt, IconChevronRight, IconPhoto,
  IconPower, IconRefresh, IconQuestionMark, IconDeviceSim,
} from "@tabler/icons-react";
import type { DirectionPageData } from "@/data/directions";

const problemIcons: Record<string, typeof IconPower> = {
  "telefon-ne-vklyuchaetsya": IconPower,
  "telefon-ne-zaryazhaetsya": IconBolt,
  "bystro-razryazhaetsya": IconBattery,
  "net-izobrazheniya": IconPhoto,
  "telefon-ne-vidit-sim-kartu": IconDeviceSim,
  "telefon-perezagruzhaetsya": IconRefresh,
};

export function PhoneProblemIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 180 220" fill="none" className="w-full text-[#242424] dark:text-[#e3d9ce]">
      <g transform="rotate(5 90 110)">
        <rect x="45" y="14" width="91" height="187" rx="15" stroke="currentColor" strokeWidth="3" className="fill-[#fffefd] dark:fill-[#15110e]" />
        <rect x="50" y="20" width="81" height="175" rx="11" stroke="currentColor" strokeOpacity=".15" />
        <path d="M70 15h42v5a6 6 0 0 1-6 6H76a6 6 0 0 1-6-6z" fill="currentColor" />
        <text x="90" y="135" textAnchor="middle" fill="#ff5000" fontSize="70" fontWeight="700">?</text>
      </g>
      <path d="m148 54 8-12m-4 35 15-4m-18 24 12 7" stroke="#ff5000" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function DirectionProblems({ data, illustration }: {
  data: Pick<DirectionPageData, "problems" | "contact">;
  illustration?: ReactNode;
}) {
  return (
    <section id="problems" aria-labelledby="direction-problems-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="relative rounded-[6px] border border-[#e6e2de] bg-[#fffefd] p-6 xl:p-7 dark:border-[#46301f] dark:bg-[#15110e]">
        <div className={illustration ? "lg:pr-[225px]" : undefined}>
          <h2 id="direction-problems-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{data.problems.title}</h2>
          <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.problems.items.map((problem) => {
              const Icon = problemIcons[problem.slug] ?? IconQuestionMark;
              // Use the enquiry action until the individual problem routes exist.
              const href = new URL(data.contact.action.href);
              href.searchParams.set("text", `Здравствуйте! ${data.problems.title} ${problem.title}. Подскажите, пожалуйста, по ремонту.`);
              return (
                <a key={problem.slug} href={href.toString()} aria-label={`${problem.title}. Написать мастеру в WhatsApp`} className="group flex min-h-[68px] items-center gap-3 rounded-[6px] border border-[#e6e2de] px-4 py-3 text-sm text-[#171717] transition-colors hover:border-[#ff5000] hover:bg-[#ff5000]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5000] dark:border-[#46301f] dark:text-[#fff7f0]">
                  <Icon aria-hidden="true" stroke={1.5} className="size-7 shrink-0 text-[#ff5000]" />
                  <span className="flex-1">{problem.title}</span>
                  <IconChevronRight aria-hidden="true" stroke={1.5} className="size-4 shrink-0 text-[#ff5000] transition-transform group-hover:translate-x-0.5" />
                </a>
              );
            })}
          </div>
        </div>
        {illustration && <div aria-hidden="true" className="pointer-events-none absolute inset-y-4 right-7 hidden w-[180px] items-center lg:flex">{illustration}</div>}
      </div>
    </section>
  );
}
