import {
  IconBriefcase,
  IconChevronRight,
  IconCpu,
  IconCube,
  IconDatabase,
  IconGauge,
  IconShieldCheck,
} from "@tabler/icons-react";
import { ContactTrigger } from "@/components/site/request-provider";
import { windowsAdditionalServices as data } from "@/data/windows-installation";
import { siteConfig } from "@/lib/site";

const icons = {
  office: IconBriefcase,
  professional: IconCube,
  protection: IconShieldCheck,
  speed: IconGauge,
  data: IconDatabase,
  hardware: IconCpu,
};

export function WindowsAdditionalServices() {
  return (
    <section id="additional-services" aria-labelledby="windows-additional-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <h2 id="windows-additional-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
        {data.title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{data.description}</p>

      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {data.items.map((item) => {
          const Icon = icons[item.icon];
          const message = `Здравствуйте! Интересует услуга «${item.title}». Подскажите состав работ и стоимость.`;
          return (
            <li key={item.id}>
              <div className="group relative flex h-full items-start gap-4 rounded-lg border border-[#e6e2de] bg-[#fffefd] p-5 transition-colors hover:border-[#ff5000]/60 hover:bg-[#fff7f0] has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-[#ff5000] dark:border-[#46301f] dark:bg-[#15110e] dark:hover:border-[#ff5000]/60 dark:hover:bg-[#211810]">
                <Icon aria-hidden="true" stroke={1.5} className="size-9 shrink-0 text-[#ff5000]" />
                <div className="flex min-w-0 flex-1 flex-col self-stretch">
                  <h3 className="text-sm leading-5 font-bold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  {/* The button stretches over the whole card, so the card stays a heading-and-text block. */}
                  <ContactTrigger
                    href={`https://wa.me/${siteConfig.telephone.replace("+", "")}?text=${encodeURIComponent(message)}`}
                    aria-label={`Обсудить услугу «${item.title}»`}
                    className="mt-auto inline-flex items-center gap-1 self-start pt-3 text-sm font-semibold text-[#d94f00] outline-none after:absolute after:inset-0 after:rounded-lg dark:text-[#ff8a32]"
                  >
                    Обсудить услугу
                    <IconChevronRight aria-hidden="true" stroke={1.5} className="size-4 transition-transform group-hover:translate-x-1" />
                  </ContactTrigger>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs leading-5 text-muted-foreground">{data.notice}</p>
    </section>
  );
}
