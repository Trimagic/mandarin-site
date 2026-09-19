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
      className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-12 pb-10"
    >
      <div className="grid grid-cols-[1.65fr_1fr] items-start gap-8 border-b border-[#e9e6e2] dark:border-[#30251d]">
        <div>
          <h2
            id="why-mandarin-heading"
            className="text-[28px] leading-tight font-extrabold tracking-[-0.035em] text-[#171717] dark:text-[#fff7f0]"
          >
            Почему Mandarin Сервис
          </h2>
          <div className="mt-8 grid grid-cols-4 gap-5">
            {advantages.map(({ title, description, icon: Icon, color }) => (
              <div key={title} className="flex items-start gap-3">
                <Icon
                  aria-hidden="true"
                  stroke={1.5}
                  className={cn("size-9 shrink-0", color)}
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
          sizes="(min-width: 1440px) 495px, 435px"
          className="h-auto w-full rounded-lg border border-[#ece5df] object-cover dark:border-[#46301f]"
        />
      </div>
    </section>
  );
}
