import type { ReactNode } from "react";
import {
  IconBattery, IconBolt, IconBrandWindows, IconChevronRight, IconHourglass, IconLayoutRows, IconMoodSad, IconPhoto, IconPlayerPause, IconPropeller,
  IconPlus, IconPower, IconRefresh, IconQuestionMark, IconDeviceSim, IconTemperaturePlus, IconVolume, IconVolumeOff,
} from "@tabler/icons-react";
import { getDirectionItemHref, type DirectionPageData } from "@/data/directions";
import { getProblemPage } from "@/data/problems";
import { RequestTrigger } from "@/components/site/request-provider";

const problemIcons: Record<string, typeof IconPower> = {
  "telefon-ne-vklyuchaetsya": IconPower,
  "telefon-ne-zaryazhaetsya": IconBolt,
  "bystro-razryazhaetsya": IconBattery,
  "net-izobrazheniya": IconPhoto,
  "telefon-ne-vidit-sim-kartu": IconDeviceSim,
  "telefon-perezagruzhaetsya": IconRefresh,
  "noutbuk-ne-vklyuchaetsya": IconPower,
  "noutbuk-ne-zaryazhaetsya": IconBolt,
  "noutbuk-greetsya": IconTemperaturePlus,
  "noutbuk-shumit": IconVolume,
  "noutbuk-tormozit": IconHourglass,
  "noutbuk-vyklyuchaetsya": IconPower,
  "net-izobrazheniya-zvuk-est": IconPhoto,
  "televizor-ne-vklyuchaetsya": IconPower,
  "vklyuchaetsya-i-vyklyuchaetsya": IconRefresh,
  "polosy-na-ekrane": IconLayoutRows,
  "televizor-zavisaet": IconPlayerPause,
  "net-zvuka": IconVolumeOff,
  "kompyuter-ne-vklyuchaetsya": IconPower,
  "kompyuter-tormozit": IconHourglass,
  "kompyuter-perezagruzhaetsya": IconRefresh,
  "siniy-ekran": IconMoodSad,
  "shumit-kompyuter": IconPropeller,
  "ne-zagruzhaetsya-windows": IconBrandWindows,
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
  data: Pick<DirectionPageData, "slug" | "problems" | "contact">;
  illustration?: ReactNode;
}) {
  return (
    <section id="problems" aria-labelledby="direction-problems-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="relative rounded-xl border border-[#e6e2de] bg-[#fffefd] p-6 xl:p-7 dark:border-[#46301f] dark:bg-[#15110e]">
        <div className={illustration ? "lg:pr-[225px]" : undefined}>
          <h2 id="direction-problems-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{data.problems.title}</h2>
          <ul className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
            {data.problems.items.map((problem) => {
              const Icon = problemIcons[problem.slug] ?? IconQuestionMark;
              const hasPage = Boolean(getProblemPage(data.slug, problem.slug));
              // Until a problem page exists, use the enquiry action instead of a 404.
              const enquiry = new URL(data.contact.action.href);
              enquiry.searchParams.set("text", `Здравствуйте! ${data.problems.title} ${problem.title}. Подскажите, пожалуйста, по ремонту.`);
              const href = hasPage ? getDirectionItemHref(data.slug, problem.slug) : enquiry.toString();
              return (
                <li key={problem.slug}>
                  <a
                    href={href}
                    aria-label={hasPage ? problem.title : `${problem.title}. Написать мастеру в WhatsApp`}
                    className="group relative flex h-full items-start gap-3 overflow-hidden rounded-xl border border-[#e6e2de] bg-[#fffefd] p-4 transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#ff5000] after:transition-transform after:duration-300 hover:border-[#ff5000]/50 hover:bg-[#fff6ef] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5000] motion-reduce:after:transition-none dark:border-[#46301f] dark:bg-[#15110e] dark:hover:border-[#ff7a18]/50 dark:hover:bg-[#1d140e] dark:after:bg-[#ff7a18]"
                  >
                    <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full border border-dashed border-[#ff5000]/45 text-[#ff5000] transition-[background-color,border-color,color,transform] duration-300 group-hover:rotate-6 group-hover:border-solid group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white motion-reduce:transform-none dark:border-[#ff7a18]/45 dark:text-[#ff8a32] dark:group-hover:bg-[#ff7a18] dark:group-hover:text-[#1c1009]">
                      <Icon stroke={1.5} className="size-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{problem.title}</span>
                      <span className="mt-1 line-clamp-2 block text-xs leading-5 text-[#6f625c] dark:text-[#b6a99b]">{problem.causes}</span>
                    </span>
                    <IconChevronRight aria-hidden="true" stroke={1.5} className="mt-2.5 size-4 shrink-0 text-[#c9b8ac] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-[#ff5000] motion-reduce:transform-none dark:text-[#6b5647]" />
                  </a>
                </li>
              );
            })}
            <li>
              <RequestTrigger
                fallbackHref={data.contact.action.href}
                className="group flex h-full w-full items-start gap-3 rounded-xl border border-dashed border-[#ff5000]/45 bg-transparent p-4 text-left transition-colors duration-300 hover:border-[#ff5000] hover:bg-[#ff5000]/5 dark:border-[#ff7a18]/45 dark:hover:border-[#ff7a18]"
              >
                <span aria-hidden="true" className="grid size-10 shrink-0 place-items-center rounded-full bg-[#ff5000]/10 text-[#ff5000] transition-colors duration-300 group-hover:bg-[#ff5000] group-hover:text-white dark:bg-[#ff7a18]/15 dark:text-[#ff8a32] dark:group-hover:bg-[#ff7a18] dark:group-hover:text-[#1c1009]">
                  <IconPlus stroke={1.5} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm leading-5 font-semibold text-[#e74700] dark:text-[#ff8a32]">Другая поломка</span>
                  <span className="mt-1 block text-xs leading-5 text-[#6f625c] dark:text-[#b6a99b]">Опишите, что случилось, — мастер подскажет причину и стоимость.</span>
                </span>
              </RequestTrigger>
            </li>
          </ul>
        </div>
        {illustration && <div aria-hidden="true" className="pointer-events-none absolute inset-y-4 right-7 hidden w-[180px] items-center lg:flex">{illustration}</div>}
      </div>
    </section>
  );
}
