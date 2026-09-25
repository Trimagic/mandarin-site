import {
  IconArrowBigUpLines, IconBatteryCharging, IconBolt, IconBulb, IconCamera, IconChevronRight, IconCpu, IconCpu2, IconDeviceDesktop, IconDeviceLaptop,
  IconDeviceMobile, IconDeviceSdCard, IconDeviceSpeaker, IconDroplet, IconKeyboard, IconLayoutRows,
  IconPlug, IconPlugConnected, IconReplace, IconSettings, IconStethoscope, IconTemperature, IconVolume, IconTool, IconWind,
} from "@tabler/icons-react";
import { getDirectionItemHref, type DirectionPageData, type DirectionPrice } from "@/data/directions";
import { getServicePage } from "@/data/services";

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
  diagnostika: IconStethoscope,
  "chistka-i-zamena-termopasty": IconTemperature,
  "zamena-matricy": IconDeviceLaptop,
  "remont-klaviatury": IconKeyboard,
  "remont-razema-pitaniya": IconPlug,
  "remont-sistemy-ohlazhdeniya": IconWind,
  "remont-materinskoy-platy": IconCpu,
  "remont-posle-zalitiya": IconDroplet,
  "modernizaciya-ssd-i-ram": IconDeviceSdCard,
  "zamena-podsvetki": IconBulb,
  "remont-bloka-pitaniya": IconBolt,
  "zamena-shleyfa-i-t-con": IconLayoutRows,
  "remont-razemov": IconPlugConnected,
  "zamena-dinamikov": IconDeviceSpeaker,
  "diagnostika-pk": IconStethoscope,
  "sborka-pk": IconDeviceDesktop,
  "zamena-komplektuyushchih": IconReplace,
  "remont-videokarty": IconCpu2,
  "chistka-i-obsluzhivanie": IconWind,
  "modernizaciya-pk": IconArrowBigUpLines,
};

function priceLabel(price: DirectionPrice) {
  if (price.kind === "from") return `от ${price.amount} ${price.currency}`;
  if (price.kind === "negotiated") return "Договорная";
  return price.kind === "by-model" ? "По модели" : "После диагностики";
}

export function DirectionServices({ data }: { data: Pick<DirectionPageData, "slug" | "services" | "contact"> }) {
  const { slug, services, contact } = data;

  return (
    <section id="services" aria-labelledby="direction-services-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
        <h2 id="direction-services-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{services.title}</h2>
        <p className="max-w-[590px] text-xs leading-5 text-muted-foreground">{services.priceNotice}</p>
      </div>
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service) => {
          const Icon = serviceIcons[service.slug] ?? IconTool;
          const price = priceLabel(service.price);
          const hasPage = Boolean(getServicePage(slug, service.slug));
          // Until a service page exists, offer a real enquiry instead of a 404.
          const enquiry = new URL(contact.action.href);
          enquiry.searchParams.set("text", `Здравствуйте! Интересует услуга «${service.title}». Подскажите стоимость для моей модели.`);
          const href = hasPage ? getDirectionItemHref(slug, service.slug) : enquiry.toString();
          const note = service.price.kind === "from" ? service.price.note : undefined;
          const edge = "border-[#e6e2de] transition-colors duration-300 group-hover:border-[#ff5000]/50 dark:border-[#46301f] dark:group-hover:border-[#ff7a18]/50";

          return (
            <li key={service.slug}>
              {/* Ticket: the dashed tear line with notches separates the service from its price stub. */}
              <a
                href={href}
                aria-label={hasPage ? `${service.title}, ${price}` : `${service.title}, ${price}. Уточнить в WhatsApp`}
                className={`group relative flex h-full min-h-[88px] overflow-hidden rounded-xl border bg-[#fffefd] transition-colors duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-[#ff5000] after:transition-transform after:duration-300 hover:bg-[#fff6ef] hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5000] motion-reduce:after:transition-none dark:bg-[#15110e] dark:hover:bg-[#1d140e] dark:after:bg-[#ff7a18] border-[#e6e2de] hover:border-[#ff5000]/50 dark:border-[#46301f] dark:hover:border-[#ff7a18]/50`}
              >
                <div className="flex min-w-0 flex-1 items-center gap-4 px-4 py-4">
                  <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full border border-dashed border-[#ff5000]/45 text-[#ff5000] transition-[background-color,border-color,color,transform] duration-300 group-hover:rotate-6 group-hover:border-solid group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white motion-reduce:transform-none dark:border-[#ff7a18]/45 dark:text-[#ff8a32] dark:group-hover:bg-[#ff7a18] dark:group-hover:text-[#1c1009]">
                    <Icon stroke={1.5} className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{service.title}</h3>
                    {note && <p className="mt-1 text-[11px] leading-4 text-muted-foreground">{note}</p>}
                  </div>
                </div>
                <div className={`relative flex w-24 shrink-0 sm:w-[112px] flex-col items-center justify-center gap-1 border-l border-dashed px-2 text-center ${edge}`}>
                  <span aria-hidden="true" className={`absolute -top-2 -left-2 size-4 rounded-full border bg-[#fffaf6] dark:bg-[#130f0d] ${edge}`} />
                  <span aria-hidden="true" className={`absolute -bottom-2 -left-2 size-4 rounded-full border bg-[#fffaf6] dark:bg-[#130f0d] ${edge}`} />
                  <span className="text-[15px] leading-5 font-semibold text-[#e74700] dark:text-[#ff8a32]">{price}</span>
                  <IconChevronRight aria-hidden="true" stroke={1.5} className="size-4 text-[#c9b8ac] transition-[color,transform] duration-300 group-hover:translate-x-1 group-hover:text-[#ff5000] motion-reduce:transform-none dark:text-[#6b5647]" />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
