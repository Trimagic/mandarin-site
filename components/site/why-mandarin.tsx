import Image from "next/image";
import {
  IconBuildingStore,
  IconShieldCheck,
  IconShieldLock,
  IconTag,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

const advantages = [
  {
    title: "Собственная мастерская",
    description: "Профессиональное оборудование и опыт мастеров.",
    icon: IconBuildingStore,
    color: "text-[#ff4b00] dark:text-[#ff6800]",
  },
  {
    title: "Цена согласовывается",
    description: "Озвучиваем стоимость до начала ремонта. Без скрытых доплат.",
    icon: IconTag,
    color: "text-[#ff4b00] dark:text-[#ff6800]",
  },
  {
    title: "Сохраняем данные",
    description: "Бережно относимся к вашим данным и конфиденциальной информации.",
    icon: IconShieldLock,
    color: "text-[#65ad32] dark:text-[#82b741]",
  },
  {
    title: "Гарантия до 12 месяцев",
    description: "Гарантия на работы и установленные детали.",
    icon: IconShieldCheck,
    color: "text-[#ff4b00] dark:text-[#ff6800]",
  },
];

export function WhyMandarin() {
  return (
    <section
      id="warranty"
      aria-labelledby="why-mandarin-heading"
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-6 pb-10 xl:px-12"
    >
      <div className="grid grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)] items-center gap-5 border-b border-[#e9e6e2] pb-5 xl:items-start xl:gap-8 xl:pb-0 dark:border-[#30251d]">
        <div className="min-w-0">
          <h2
            id="why-mandarin-heading"
            className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]"
          >
            Почему Mandarin Сервис
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 xl:mt-8 xl:grid-cols-4 xl:gap-5">
            {advantages.map(({ title, description, icon: Icon, color }) => (
              <div key={title} className="flex min-w-0 items-start gap-2 xl:gap-3">
                <Icon
                  aria-hidden="true"
                  stroke={1.5}
                  className={cn("size-7 shrink-0 lg:size-9", color)}
                />
                <div>
                  <h3 className="text-sm leading-6 font-semibold text-[#171717] dark:text-[#fff7f0]">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-[#606066] dark:text-[#c5b8b1]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src="/brand/workshop.png"
          alt="Иллюстрация мастерской Mandarin Сервис: рабочий стол с паяльной станцией, инструментами и микроскопом"
          width={1728}
          height={910}
          sizes="(min-width: 1440px) 495px, (min-width: 1280px) calc((100vw - 128px) / 2.65), calc((100vw - 68px) / 2.65)"
          className="h-auto w-full rounded-lg border border-[#ece5df] object-cover dark:border-[#46301f]"
        />
      </div>
    </section>
  );
}
