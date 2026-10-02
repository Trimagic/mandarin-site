import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { DirectionCardArt, type DirectionArt } from "@/components/site/direction-card-art";
import { cn } from "@/lib/utils";

const directions: { title: string; description: string; href: string; art: DirectionArt; color: string }[] = [
  { title: "Ремонт телефонов", description: "Экран, батарея, зарядка и восстановление после воды", href: "/remont-telefonov/", art: "phone", color: "text-[#ed510c] dark:text-[#ff8545]" },
  { title: "Ремонт ноутбуков", description: "От чистки охлаждения до ремонта платы", href: "/remont-noutbukov/", art: "laptop", color: "text-[#d34e45] dark:text-[#ff8278]" },
  { title: "Ремонт компьютеров", description: "Диагностика, ремонт и обновление комплектующих", href: "/remont-kompyuterov/", art: "computer", color: "text-[#b57024] dark:text-[#eab265]" },
  { title: "Ремонт телевизоров", description: "Изображение, подсветка, звук и питание", href: "/remont-televizorov/", art: "tv", color: "text-[#5c8a46] dark:text-[#98c47a]" },
  { title: "Ремонт планшетов", description: "Экран и тачскрин, аккумулятор, разъём и кнопки", href: "/remont-planshetov/", art: "tablet", color: "text-[#d34e45] dark:text-[#ff8278]" },
  { title: "Установка Windows", description: "Установка системы, драйверов и нужных программ", href: "/ustanovka-windows/", art: "windows", color: "text-[#168dc3] dark:text-[#67c4ec]" },
  { title: "Ремонт колонок", description: "Ремонт разъёмов и кнопок, замена аккумуляторов", href: "/remont-kolonok/", art: "speaker", color: "text-[#b57024] dark:text-[#eab265]" },
  { title: "Обслуживание приставок", description: "Чистка от пыли, замена термопасты и теплопроводников", href: "/obsluzhivanie-pristavok/", art: "console", color: "text-[#5c8a46] dark:text-[#98c47a]" },
];

export function HomeDirections({ className }: { className?: string }) {
  return (
    <section id="services" aria-labelledby="services-heading" className={cn("relative z-20 mx-auto -mt-10 w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:-mt-[104px] md:px-6 xl:-mt-16 xl:px-12", className)}>
      <h2 id="services-heading" className="sr-only">Основные направления ремонта</h2>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-12 xl:gap-4">
        {directions.map((direction, index) => (
          <Link key={direction.href} href={direction.href} className={cn(
            "group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border p-5 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5000] md:p-6",
            index === 0 ? "min-h-[350px] border-[#f3d4b8] bg-[#fff0df] hover:border-[#ff8545] md:col-span-2 md:min-h-[380px] xl:col-span-5 xl:row-span-2 dark:border-[#694025] dark:bg-[#2a1b10]" : "border-[#ece2d9] bg-[#fffefd] hover:border-[#ff8545]/60 dark:border-[#46301f] dark:bg-[#15110e]",
            index === 1 && "md:col-span-2 xl:col-span-7",
            (index === 2 || index === 3) && "xl:col-span-3",
            index === 3 && "xl:col-span-4",
            index > 3 && "xl:col-span-3",
          )}>
            <span className="absolute top-5 right-5 z-20 grid size-9 place-items-center rounded-full border border-[#dacfc5] bg-white/70 text-[#786557] transition-colors group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white dark:border-[#654932] dark:bg-[#23180f] dark:text-[#dfc2aa]"><IconArrowUpRight aria-hidden="true" className="size-5" /></span>
            {index === 0 ? <>
              <div className="relative z-10 max-w-[85%]">
                <p className="mb-3 text-[10px] font-bold tracking-[0.12em] text-[#bd4d0d] uppercase dark:text-[#ffa268]">Всегда на связи</p>
                <h3 className="text-3xl leading-tight font-extrabold tracking-[-0.04em] text-[#321e12] dark:text-[#fff7f0]">{direction.title}</h3>
                <p className="mt-3 max-w-64 text-sm leading-6 text-[#795d49] dark:text-[#d9bca6]">{direction.description}</p>
              </div>
              <div aria-hidden="true" className="relative mt-auto h-52 w-full max-w-80 self-end text-[#ed510c] md:absolute md:right-6 md:bottom-4 md:h-72 md:w-[44%] xl:right-3 xl:bottom-2 xl:h-56 xl:w-[80%] dark:text-[#ff8545]">
                <svg viewBox="0 0 320 240" fill="none" className="absolute inset-0 size-full" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="176" cy="128" r="100" fill="currentColor" fillOpacity=".035" stroke="none" />
                  <path d="M78 159a101 101 0 0 1 145-119M269 92a101 101 0 0 1-138 129" strokeOpacity=".16" strokeWidth="1.5" />
                  <path d="M54 117v-17a12 12 0 0 1 12-12h18M249 164h16a12 12 0 0 0 12-12v-18" strokeOpacity=".25" strokeWidth="2" />
                  <circle cx="54" cy="123" r="4" fill="currentColor" fillOpacity=".3" stroke="none" />
                  <circle cx="277" cy="127" r="4" fill="currentColor" fillOpacity=".3" stroke="none" />
                  <g transform="translate(61 163) rotate(-12)" strokeWidth="2" strokeOpacity=".5">
                    <rect width="34" height="22" rx="6" fill="currentColor" fillOpacity=".04" />
                    <path d="M34 7h3v8h-3M16 5l-4 7h8l-4 6" />
                  </g>
                  <g transform="translate(249 55) rotate(12)" strokeWidth="2" strokeOpacity=".4">
                    <path d="M-12 0c7-7 17-7 24 0M-8 6c5-5 11-5 16 0M-3 12c2-2 4-2 6 0" />
                    <circle cy="18" r="1.5" fill="currentColor" stroke="none" />
                  </g>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center [&>svg]:h-52 [&>svg]:w-72 md:[&>svg]:h-60 md:[&>svg]:w-80 xl:[&>svg]:h-52 xl:[&>svg]:w-72"><DirectionCardArt kind="phone" /></div>
              </div>
            </> : <>
              <div className={cn("mb-3 flex items-center gap-4 pr-10", index === 1 && "md:mb-0 md:flex-row-reverse md:justify-end md:gap-8")}>
                <div className={cn(direction.color, "shrink-0 [&>svg]:h-16 [&>svg]:w-24", index === 1 && "relative flex h-32 w-44 items-center justify-center md:h-36 md:w-52 [&>svg]:relative [&>svg]:z-10 [&>svg]:h-28 [&>svg]:w-40 md:[&>svg]:h-32 md:[&>svg]:w-48")}>
                  {index === 1 && <svg aria-hidden="true" viewBox="0 0 240 160" fill="none" className="absolute! inset-0 z-0! h-full! w-full!" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <ellipse cx="122" cy="85" rx="102" ry="67" fill="currentColor" fillOpacity=".035" stroke="none" />
                    <path d="M28 101a72 72 0 0 1 94-75M163 143a73 73 0 0 0 54-80" strokeOpacity=".16" strokeWidth="1.5" />
                    <path d="M18 63h17l12-12h13M180 120h16l12 12h16M182 36h15V21" strokeOpacity=".25" strokeWidth="1.5" />
                    <circle cx="18" cy="63" r="3" fill="currentColor" fillOpacity=".3" stroke="none" />
                    <circle cx="225" cy="132" r="3" fill="currentColor" fillOpacity=".3" stroke="none" />
                    <g transform="translate(198 44) rotate(12)" strokeOpacity=".45" strokeWidth="1.5">
                      <rect width="20" height="20" rx="4" fill="currentColor" fillOpacity=".04" />
                      <rect x="6" y="6" width="8" height="8" rx="1" />
                      <path d="M5-4v4m5-4v4m5-4v4M5 20v4m5-4v4m5-4v4M-4 5h4m-4 5h4m-4 5h4M20 5h4m-4 5h4m-4 5h4" />
                    </g>
                  </svg>}
                  <DirectionCardArt kind={direction.art} />
                </div>
                {index === 1 && <div className="hidden md:block"><h3 className="text-2xl font-extrabold tracking-[-0.035em] text-[#171717] dark:text-[#fff7f0]">{direction.title}</h3><p className="mt-2 max-w-80 text-sm leading-6 text-[#6f625c] dark:text-[#c5b8b1]">{direction.description}</p></div>}
              </div>
              <div className={index === 1 ? "md:hidden" : undefined}><h3 className="text-lg leading-6 font-bold tracking-[-0.025em] text-[#171717] dark:text-[#fff7f0]">{direction.title}</h3><p className="mt-2 max-w-[350px] text-sm leading-6 text-[#6f625c] dark:text-[#c5b8b1]">{direction.description}</p></div>
            </>}
          </Link>
        ))}
      </div>
    </section>
  );
}
