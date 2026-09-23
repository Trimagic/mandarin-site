import Image, { getImageProps } from "next/image";
import Link from "next/link";
import {
  IconArrowRight,
  IconChevronRight,
  IconClock,
  IconMessage,
  IconReceipt,
  IconShieldCheck,
  IconStethoscope,
  IconTag,
  IconTool,
} from "@tabler/icons-react";
import type { DirectionPageData } from "@/data/directions";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DirectionHeroProps = {
  data: Pick<DirectionPageData, "hero" | "breadcrumbs">;
  primaryHref?: string;
  imageClassName?: string;
};

const benefitIcons = [IconTool, IconReceipt, IconShieldCheck];
const namedBenefitIcons = {
  price: IconTag,
  clock: IconClock,
  shield: IconShieldCheck,
  diagnostics: IconStethoscope,
};

export function DirectionHero({
  data: { hero, breadcrumbs },
  primaryHref,
  imageClassName,
}: DirectionHeroProps) {
  const { props: mobileBackground } = getImageProps({
    src: hero.backgrounds.mobile,
    alt: "",
    width: 921,
    height: 1708,
    sizes: "100vw",
  });
  const { props: tabletBackground } = getImageProps({
    src: hero.backgrounds.tablet,
    alt: "",
    width: 1536,
    height: 1024,
    sizes: "(min-width: 1024px) 928px, calc(100vw - 48px)",
  });
  const benefits = (mobile = false) => (
    <ul
      className={
        mobile
          ? "relative z-20 -mt-11 divide-y divide-dotted divide-[#ded8d2] rounded-xl border border-[#ece5df] bg-[#fffefd] px-4 md:hidden dark:divide-[#46301f] dark:border-[#46301f] dark:bg-[#15110e]"
          : "mt-7 hidden justify-center divide-x divide-[#ded8d2] md:flex xl:justify-start dark:divide-[#49352d]"
      }
    >
      {hero.benefits.map((benefit, index) => {
        const Icon = benefit.icon
          ? namedBenefitIcons[benefit.icon]
          : benefitIcons[index % benefitIcons.length];
        // Mobile rows match the home page trust panel: one line, icon in the text colour.
        if (mobile)
          return (
            <li
              key={benefit.title}
              className="flex items-center gap-2.5 py-3 text-[13px] font-semibold text-[#443a35] dark:text-[#ddd0c8]"
            >
              <Icon aria-hidden="true" stroke={1.5} className="size-6 shrink-0" />
              <span>{benefit.title}</span>
            </li>
          );
        return (
          <li
            key={benefit.title}
            className="flex min-w-0 items-start gap-2 px-4 text-left first:pl-0 last:pr-0"
          >
            <Icon
              aria-hidden="true"
              stroke={1.5}
              className="size-6 shrink-0 text-[#ff5000]"
            />
            <div>
              <p className="text-xs leading-5 font-semibold">{benefit.title}</p>
              {benefit.description && (
                <p className="mt-1 max-w-[140px] text-[11px] leading-[1.5] text-muted-foreground">
                  {benefit.description}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
  return (
    <section
      aria-labelledby="direction-heading"
      className="relative overflow-x-clip"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-6 xl:px-12">
        <nav
          aria-label="Хлебные крошки"
          className="relative z-20 pt-6 xl:pt-4 text-xs text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-2">
            {breadcrumbs.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 && (
                  <IconChevronRight aria-hidden="true" className="size-3" />
                )}
                {index === breadcrumbs.length - 1 ? (
                  <span aria-current="page">{item.label}</span>
                ) : (
                  <Link href={item.href} className="hover:text-primary">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="grid items-center gap-0 pb-10 pt-7 md:gap-6 xl:min-h-[480px] xl:grid-cols-[0.95fr_1.05fr] xl:gap-0 xl:py-0">
          <div className="relative z-10 min-w-0 md:text-center xl:py-7 xl:text-left">
            <h1
              id="direction-heading"
              className="text-[clamp(32px,8.8vw,42px)] leading-[1.06] font-extrabold tracking-[-0.045em] text-[#171717] md:text-[52px] xl:text-[48px] dark:text-[#fff7f0]"
            >
              {hero.title}
              <span className="mt-1 block text-[#ff5000]">{hero.accent}</span>
            </h1>
            <p className="mt-5 max-w-[560px] text-base leading-7 text-[#605952] md:mx-auto xl:mx-0 xl:mt-4 xl:max-w-[430px] xl:leading-6 dark:text-[#c5b8b1]">
              {hero.description}
            </p>
            <div className="mt-5 flex flex-col items-start gap-2 md:flex-row md:items-center md:justify-center md:gap-3 xl:justify-start">
              <a
                href={primaryHref ?? hero.primaryAction.href}
                className={cn(
                  buttonVariants({ variant: "brand", size: "xl" }),
                  "h-12 w-full md:w-auto md:h-14 xl:h-12 rounded-md bg-[#ff5000] px-7 xl:px-6 text-sm text-white shadow-none hover:bg-[#e74700]",
                )}
              >
                {hero.primaryAction.label}
                <IconArrowRight aria-hidden="true" className="ml-3 size-5" />
              </a>
              <a
                href={hero.secondaryAction.href}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "xl" }),
                  "h-14 xl:h-12 gap-3 px-3 text-sm text-[#171717] hover:bg-[#ff5000]/5 dark:text-[#fff7f0]",
                )}
              >
                <IconMessage
                  aria-hidden="true"
                  stroke={1.5}
                  className="size-5 text-[#ff5000]"
                />
                {hero.secondaryAction.label}
              </a>
            </div>
            {benefits()}
          </div>

          <div className="relative -mt-[41px] md:contents">
            <div className="relative isolate mx-auto aspect-square w-full md:aspect-[1.5] md:max-w-[928px] xl:aspect-auto xl:h-[480px] xl:ml-[-10px] xl:max-w-none xl:w-[calc(100%+58px)]">
              <div className="pointer-events-none absolute inset-x-0 -top-5 bottom-0 translate-y-[30px] md:inset-0 md:translate-y-0">
                <picture className="absolute -inset-x-5 -inset-y-[20%] md:inset-0">
                  <source
                    media="(max-width: 767px)"
                    srcSet={mobileBackground.srcSet}
                    sizes={mobileBackground.sizes}
                  />
                  <source
                    media="(max-width: 1279px)"
                    srcSet={tabletBackground.srcSet}
                    sizes={tabletBackground.sizes}
                  />
                  <Image
                    src={hero.backgrounds.desktop}
                    alt=""
                    fill
                    sizes="(min-width: 1440px) 748px, (min-width: 1280px) 55vw, (min-width: 1024px) 928px, 100vw"
                    className="object-fill md:object-contain xl:origin-center xl:scale-x-[1.2]"
                    loading="eager"
                  />
                </picture>
                <div className="absolute inset-x-0 top-0 bottom-0 z-10 md:inset-x-[3%] md:top-[7%] md:bottom-[5%] xl:-translate-x-[30px]">
                  <Image
                    src={hero.image.src}
                    alt={hero.image.alt}
                    fill
                    sizes="(min-width: 1440px) 704px, (min-width: 1280px) 52vw, (min-width: 1024px) 872px, 94vw"
                    className={cn("object-contain", imageClassName)}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                {hero.badge && (
                  // Same style as the home page badge: label first, stethoscope in a green ring.
                  <div className="absolute top-[8%] right-[3%] z-20 flex max-w-[210px] items-center gap-3 rounded-xl border border-[#eee7df] bg-[#fffefd] py-2.5 pr-2.5 pl-4 text-[#171717] md:gap-4 md:py-3 md:pr-3 md:pl-5 dark:border-[#78502d] dark:bg-[#211810] dark:text-[#fff7f0]">
                    <span className="text-xs leading-5 font-bold md:text-sm">
                      {hero.badge}
                    </span>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#7bb64b]/60 text-[#65a832] md:size-12 dark:border-[#83af3f]/50 dark:text-[#8ab943]">
                      <IconStethoscope aria-hidden="true" stroke={1.5} className="size-6 md:size-7" />
                    </span>
                  </div>
                )}
              </div>
            </div>
            {benefits(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
