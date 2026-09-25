import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { DirectionCardArt, type DirectionArt } from "@/components/site/direction-card-art";
import { cn } from "@/lib/utils";

const directions: { title: string; description: string; href: string; art: DirectionArt; color: string }[] = [
  { title: "Ремонт телефонов", description: "Экран, батарея, зарядка и восстановление после воды", href: "/remont-telefonov/", art: "phone", color: "text-[#ed510c] dark:text-[#ff8545]" },
  { title: "Ремонт ноутбуков", description: "От чистки охлаждения до ремонта платы", href: "/remont-noutbukov/", art: "laptop", color: "text-[#d34e45] dark:text-[#ff8278]" },
  { title: "Ремонт компьютеров", description: "Диагностика, ремонт и обновление комплектующих", href: "/remont-kompyuterov/", art: "computer", color: "text-[#b57024] dark:text-[#eab265]" },
  { title: "Ремонт телевизоров", description: "Изображение, подсветка, звук и питание", href: "/remont-televizorov/", art: "tv", color: "text-[#5c8a46] dark:text-[#98c47a]" },
  { title: "Установка Windows", description: "Установка системы, драйверов и нужных программ", href: "/ustanovka-windows/", art: "windows", color: "text-[#168dc3] dark:text-[#67c4ec]" },
];

export function HomeDirections({ className }: { className?: string }) {
  return (
    <section id="services" aria-labelledby="services-heading" className={cn("relative z-20 mx-auto -mt-10 w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:-mt-[104px] md:px-6 xl:-mt-16 xl:px-12", className)}>
      <h2 id="services-heading" className="sr-only">Основные направления ремонта</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {directions.map((direction, index) => (
          <Link key={direction.href} href={direction.href} className={cn("group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#ece2d9] bg-[#fffefd] p-5 transition duration-200 hover:-translate-y-1 hover:border-[#ff8545]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff5000] motion-reduce:transform-none md:p-6 dark:border-[#46301f] dark:bg-[#15110e]", index < 3 ? "md:col-span-2" : "md:col-span-3")}>
            <div className="mb-4 flex items-start justify-between gap-3">
              <div className={direction.color}><DirectionCardArt kind={direction.art} /></div>
              <span className="grid size-9 place-items-center rounded-full border border-[#eee3d8] text-[#a3988f] transition-colors group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white dark:border-[#49352d]"><IconArrowUpRight aria-hidden="true" className="size-5" /></span>
            </div>
            <h3 className="text-lg leading-6 font-bold tracking-[-0.025em] text-[#171717] dark:text-[#fff7f0]">{direction.title}</h3>
            <p className="mt-2 max-w-[350px] text-sm leading-6 text-[#6f625c] dark:text-[#c5b8b1]">{direction.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
