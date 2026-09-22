import Image from "next/image";
import Link from "next/link";
import { IconArrowRight, IconChevronRight, IconMessage, IconReceipt, IconShieldCheck, IconStethoscope, IconTool } from "@tabler/icons-react";
import type { DirectionPageData } from "@/data/directions";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DirectionHeroProps = {
  data: Pick<DirectionPageData, "hero" | "breadcrumbs">;
  primaryHref?: string;
};

const benefitIcons = [IconTool, IconReceipt, IconShieldCheck];

export function DirectionHero({ data: { hero, breadcrumbs }, primaryHref }: DirectionHeroProps) {
  return (
    <section aria-labelledby="direction-heading" className="relative overflow-x-clip">
      <div className="mx-auto max-w-[1440px] px-5 md:px-6 xl:px-12">
        <nav aria-label="Хлебные крошки" className="relative z-20 pt-6 lg:pt-4 text-xs text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && <IconChevronRight aria-hidden="true" className="size-3" />}
                {index === breadcrumbs.length - 1 ? <span aria-current="page">{item.label}</span> : <Link href={item.href} className="hover:text-primary">{item.label}</Link>}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-6 pb-10 pt-7 lg:min-h-[480px] lg:grid-cols-[0.95fr_1.05fr] lg:gap-0 lg:py-0">
          <div className="relative z-10 lg:py-7">
            <h1 id="direction-heading" className="text-[42px] leading-[1.06] font-extrabold tracking-[-0.045em] text-[#171717] xl:text-[48px] dark:text-[#fff7f0]">
              {hero.title}
              <span className="mt-1 block text-[#ff5000]">{hero.accent}</span>
            </h1>
            <p className="mt-6 lg:mt-4 max-w-[430px] text-base leading-7 text-[#605952] lg:leading-6 xl:text-base dark:text-[#c5b8b1]">{hero.description}</p>
            <div className="mt-7 lg:mt-5 flex flex-wrap items-center gap-3">
              <a href={primaryHref ?? hero.primaryAction.href} className={cn(buttonVariants({ variant: "brand", size: "xl" }), "h-14 lg:h-12 rounded-md bg-[#ff5000] px-7 lg:px-6 text-sm text-white shadow-none hover:bg-[#e74700]")}>
                {hero.primaryAction.label}<IconArrowRight aria-hidden="true" className="ml-3 size-5" />
              </a>
              <a href={hero.secondaryAction.href} className={cn(buttonVariants({ variant: "ghost", size: "xl" }), "h-14 lg:h-12 gap-3 px-3 text-sm text-[#171717] hover:bg-[#ff5000]/5 dark:text-[#fff7f0]")}>
                <IconMessage aria-hidden="true" stroke={1.5} className="size-5 text-[#ff5000]" />{hero.secondaryAction.label}
              </a>
            </div>
            <ul className="mt-10 lg:mt-7 flex flex-wrap gap-y-4 divide-x divide-[#ded8d2] dark:divide-[#49352d]">
              {hero.benefits.map((benefit, index) => {
                const Icon = benefitIcons[index % benefitIcons.length];
                return (
                  <li key={benefit.title} className="flex min-w-0 flex-1 items-start gap-2 px-4 first:pl-0 last:pr-0">
                    <Icon aria-hidden="true" stroke={1.5} className="size-6 shrink-0 text-[#ff5000]" />
                    <div>
                      <p className="text-xs leading-5 font-semibold">{benefit.title}</p>
                      <p className="mt-1 max-w-[140px] text-[11px] leading-[1.5] text-muted-foreground">{benefit.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="relative isolate aspect-[1.3] w-full lg:aspect-auto lg:h-[480px] lg:ml-[-10px] lg:w-[calc(100%+58px)]">
            <Image src={hero.backgrounds.desktop} alt="" fill sizes="(min-width: 1440px) 748px, (min-width: 1024px) 55vw, 100vw" className="object-contain lg:origin-center lg:scale-x-[1.2]" loading="eager" />
            <div className="absolute inset-x-[3%] top-[7%] bottom-[5%] z-10 lg:-translate-x-[30px]">
              <Image src={hero.image.src} alt={hero.image.alt} fill sizes="(min-width: 1440px) 704px, (min-width: 1024px) 52vw, 94vw" className="object-contain" loading="eager" fetchPriority="high" />
            </div>
            <div className="absolute top-[8%] right-[3%] z-20 flex max-w-[190px] items-center gap-3 rounded-lg border border-[#ece5df] bg-[#fffefd] px-4 py-3 text-[#171717] dark:border-[#78502d] dark:bg-[#211810] dark:text-[#fff7f0]">
              <IconStethoscope aria-hidden="true" stroke={1.5} className="size-7 shrink-0 text-[#65a832]" />
              <span className="text-xs leading-5 font-bold">{hero.badge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
