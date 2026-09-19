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

export function RepairProcess() {
  return (
    <section
      id="process"
      aria-labelledby="repair-process-heading"
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-12 pb-10"
    >
      <h2
        id="repair-process-heading"
        className="text-[28px] leading-tight font-extrabold tracking-[-0.035em] text-[#171717] dark:text-[#fff7f0]"
      >
        Как проходит ремонт
      </h2>
      <ol className="mt-7 grid grid-cols-4 gap-8">
        {steps.map(({ title, description, icon: Icon }, index) => (
          <li key={title} className="relative">
            <div className="flex items-center gap-5">
              <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f04a00] text-lg font-bold text-white dark:bg-[#ff6107]">
                {index + 1}
              </span>
              <Icon
                aria-hidden="true"
                stroke={1.5}
                className={cn(
                  "size-10 shrink-0",
                  index === 1
                    ? "text-[#65ad32] dark:text-[#82b741]"
                    : "text-[#ff6800]",
                )}
              />
              {index < steps.length - 1 && (
                <svg
                  aria-hidden="true"
                  viewBox="0 0 96 12"
                  fill="none"
                  className="ml-auto mr-3 h-3 w-24 shrink-0 text-[#ff9b72] dark:text-[#75401d]"
                >
                  <path d="M2 6H88" stroke="currentColor" strokeWidth="1.5" strokeDasharray="0.5 6" strokeLinecap="round" />
                  <path d="m86 2 4 4-4 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="mt-3 pl-14">
              <h3 className="text-sm leading-6 font-semibold text-[#171717] dark:text-[#fff7f0]">
                {title}
              </h3>
              <p className="mt-1 max-w-52 text-sm leading-6 text-[#54545d] dark:text-[#c5b8b1]">
                {description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
