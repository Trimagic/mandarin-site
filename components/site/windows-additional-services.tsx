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
              <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#e6e2de] bg-[#fffefd] transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#ff5000] after:transition-transform after:duration-300 hover:border-[#ff5000]/50 hover:bg-[#fff6ef] hover:after:scale-x-100 has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-[#ff5000] motion-reduce:after:transition-none dark:border-[#46301f] dark:bg-[#15110e] dark:hover:border-[#ff7a18]/50 dark:hover:bg-[#1d140e] dark:after:bg-[#ff7a18]">
                <div className="flex flex-1 items-start gap-4 p-5">
                  <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full border border-dashed border-[#ff5000]/45 text-[#ff5000] transition-[background-color,border-color,color,transform] duration-300 group-hover:rotate-6 group-hover:border-solid group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white motion-reduce:transform-none dark:border-[#ff7a18]/45 dark:text-[#ff8a32] dark:group-hover:bg-[#ff7a18] dark:group-hover:text-[#1c1009]">
                    <Icon stroke={1.5} className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[15px] leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#6f625c] dark:text-[#b6a99b]">{item.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-dashed border-[#eadbd1] px-5 py-3 transition-colors duration-300 group-hover:border-[#ff5000]/40 dark:border-[#3b2d22] dark:group-hover:border-[#ff7a18]/40">
                  {/* The button stretches over the whole card, so the card stays a heading-and-text block. */}
                  <ContactTrigger
                    href={`https://wa.me/${siteConfig.telephone.replace("+", "")}?text=${encodeURIComponent(message)}`}
                    aria-label={`Обсудить услугу «${item.title}»`}
                    className="text-sm font-semibold text-[#d94f00] outline-none after:absolute after:inset-0 after:rounded-xl dark:text-[#ff8a32]"
                  >
                    Обсудить услугу
                  </ContactTrigger>
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-dashed border-[#ff5000]/40 text-[#ff5000] transition-[background-color,border-color,color,transform] duration-300 group-hover:translate-x-0.5 group-hover:border-solid group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white motion-reduce:transform-none dark:border-[#ff7a18]/40 dark:text-[#ff8a32] dark:group-hover:bg-[#ff7a18] dark:group-hover:text-[#1c1009]">
                    <IconChevronRight stroke={1.75} className="size-4" />
                  </span>
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
