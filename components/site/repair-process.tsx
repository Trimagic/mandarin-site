import {
  IconFileCheck,
  IconMessageCircle,
  IconStethoscope,
  IconTools,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

const steps = [
  {
    title: "Обращение",
    description: "Свяжитесь с нами удобным способом",
    icon: IconMessageCircle,
  },
  {
    title: "Диагностика",
    description: "Находим причину и озвучиваем цену",
    icon: IconStethoscope,
  },
  {
    title: "Согласование",
    description: "Согласовываем стоимость и сроки ремонта",
    icon: IconFileCheck,
  },
  {
    title: "Ремонт и выдача",
    description: "Выполняем ремонт и проверяем устройство",
    icon: IconTools,
  },
];

export type RepairProcessData = {
  title: string;
  items: { title: string; text: string }[];
};

const defaultData: RepairProcessData = {
  title: "Как проходит ремонт",
  items: steps.map(({ title, description }) => ({ title, text: description })),
};

export function RepairProcess({ data = defaultData, variant = "default", id = "process" }: {
  data?: RepairProcessData;
  variant?: "default" | "compact";
  id?: string;
}) {
  const compact = variant === "compact";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12"
    >
      <h2
        id={`${id}-heading`}
        className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]"
      >
        {data.title}
      </h2>
      <ol className="mt-5 grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 md:gap-y-4 xl:mt-7 xl:grid-cols-4 xl:gap-8">
        {data.items.map(({ title, text }, index) => { const Icon = steps[index % steps.length].icon; return (
          <li key={title} className={cn("relative flex items-start gap-4", !compact && "xl:block")}>
            {index < data.items.length - 1 && (
              <span aria-hidden="true" className="absolute top-11 bottom-[-18px] left-[18px] flex -translate-x-1/2 flex-col items-center text-[#ff9b72] md:hidden dark:text-[#75401d]">
                <span className="w-px flex-1 border-l border-dotted border-current" />
                <svg viewBox="0 0 10 6" fill="none" className="-mt-px h-1.5 w-2.5 shrink-0">
                  <path d="m1 1 4 4 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            )}
            <div className="flex shrink-0 items-center gap-4 xl:gap-5">
              <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f04a00] text-lg font-bold text-white dark:bg-[#ff6107]">
                {index + 1}
              </span>
              {!compact && <Icon
                aria-hidden="true"
                stroke={1.5}
                className={cn(
                  "size-10 shrink-0",
                  index === 1
                    ? "text-[#65ad32] dark:text-[#82b741]"
                    : "text-[#ff6800]",
                )}
              />}
              {index < data.items.length - 1 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 96 12"
                  fill="none"
                  className={cn(
                    "ml-auto mr-3 hidden h-3 w-24 shrink-0 text-[#ff9b72] xl:block dark:text-[#75401d]", compact && "xl:absolute xl:top-3 xl:-right-5 xl:w-14",
                  )}
                >
                  <path d="M2 6H88" stroke="currentColor" strokeWidth="1.5" strokeDasharray="0.5 6" strokeLinecap="round" />
                  <path d="m86 2 4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className={cn("min-w-0", compact ? "xl:pr-8" : "xl:mt-3 xl:pl-14")}>
              <h3 className="text-sm leading-6 font-semibold text-[#171717] dark:text-[#fff7f0]">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-[#54545d] xl:max-w-52 dark:text-[#c5b8b1]">
                {text}
              </p>
            </div>
          </li>
        ); })}
      </ol>
    </section>
  );
}
