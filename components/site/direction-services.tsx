import {
  IconBatteryCharging, IconCamera, IconChevronRight, IconDeviceMobile,
  IconDroplet, IconPlug, IconSettings, IconVolume, IconTool,
} from "@tabler/icons-react";
import type { DirectionPageData, DirectionPrice } from "@/data/directions";

const serviceIcons: Record<string, typeof IconTool> = {
  "zamena-ekrana": IconDeviceMobile,
  "zamena-stekla": IconDeviceMobile,
  "zamena-akkumulyatora": IconBatteryCharging,
  "zamena-razema-zaryadki": IconPlug,
  "remont-dinamika-i-mikrofona": IconVolume,
  "remont-posle-vody": IconDroplet,
  "zamena-zadney-kryshki": IconDeviceMobile,
  "remont-kamery": IconCamera,
  "proshivka-i-razblokirovka": IconSettings,
};

function priceLabel(price: DirectionPrice) {
  if (price.kind === "from") return `от ${price.amount} ${price.currency}`;
  if (price.kind === "negotiated") return "Договорная";
  return price.kind === "by-model" ? "По модели" : "После диагностики";
}

export function DirectionServices({ data }: { data: Pick<DirectionPageData, "services" | "contact"> }) {
  const { services, contact } = data;

  return (
    <section id="services" aria-labelledby="direction-services-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <h2 id="direction-services-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{services.title}</h2>
        <p className="max-w-[590px] text-xs leading-5 text-muted-foreground">{services.priceNotice}</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service) => {
          const Icon = serviceIcons[service.slug] ?? IconTool;
          const price = priceLabel(service.price);
          // Service routes are not built yet; offer a real enquiry instead of a 404.
          const href = new URL(contact.action.href);
          href.searchParams.set("text", `Здравствуйте! Интересует услуга «${service.title}». Подскажите стоимость для моей модели.`);

          return (
            <a key={service.slug} href={href.toString()} aria-label={`${service.title}, ${price}. Уточнить в WhatsApp`} className="group flex min-h-[88px] items-center gap-5 rounded-[6px] border border-[#e6e2de] bg-[#fffefd] px-5 py-4 transition-colors hover:border-[#ff5000] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5000] dark:border-[#46301f] dark:bg-[#15110e]">
              <Icon aria-hidden="true" stroke={1.5} className="size-9 shrink-0 text-[#ff5000]" />
              <div className="min-w-0 flex-1">
                <h3 className="text-sm leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{service.title}</h3>
                <p className="mt-1 text-base leading-6 font-bold text-[#ff5000]">{price}</p>
                {service.price.kind === "from" && service.price.note && <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{service.price.note}</p>}
              </div>
              <IconChevronRight aria-hidden="true" stroke={1.5} className="size-5 shrink-0 text-[#ff5000] transition-transform group-hover:translate-x-0.5" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
