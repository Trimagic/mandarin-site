import Image from "next/image";
import Link from "next/link";
import { IconBrandWindows, IconChevronRight, IconDeviceDesktop, IconDeviceLaptop, IconDeviceMobile, IconDeviceTv, IconTool } from "@tabler/icons-react";

import { repairStoryHref, type RepairCase, type RepairStory } from "@/data/cases";
import { cn } from "@/lib/utils";

const deviceIcons: Record<string, typeof IconDeviceMobile> = {
  "remont-telefonov": IconDeviceMobile,
  "remont-noutbukov": IconDeviceLaptop,
  "remont-kompyuterov": IconDeviceDesktop,
  "remont-televizorov": IconDeviceTv,
  "ustanovka-windows": IconBrandWindows,
};

export const cutoutBackdrop = "bg-[radial-gradient(circle_at_60%_40%,#ff8a3d,#ff5000_55%,#d93d00)]";

export function RepairCaseImage({ image, sizes, priority = false, className }: { image: RepairCase["image"]; sizes: string; priority?: boolean; className?: string }) {
  return (
    <div className={cn("relative aspect-[3/2] overflow-hidden", image.cutout ? cutoutBackdrop : "bg-[#e9e5df]", className)}>
      <Image src={image.src} alt={image.alt} fill priority={priority} sizes={sizes} className={image.cutout ? "object-contain p-3 md:p-5" : "object-cover"} />
    </div>
  );
}

function casesLabel(count: number) {
  const mod10 = count % 10;
  const mod100 = count % 100;
  if (mod10 === 1 && mod100 !== 11) return `${count} случай`;
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} случая`;
  return `${count} случаев`;
}

export function RepairStoryCard({ story, headingLevel = "h3" }: { story: RepairStory; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const cover = story.cases[0];
  const DeviceIcon = deviceIcons[story.directionSlug] ?? IconDeviceMobile;
  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-xl border border-[#ece5df] bg-[#fffefd] transition-colors hover:border-[#ff6800] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-4 has-[a:focus-visible]:outline-[#ff6800] dark:border-[#46301f] dark:bg-[#15110e]">
      {cover && <RepairCaseImage image={cover.image} sizes="(min-width: 1280px) 420px, (min-width: 768px) 45vw, 100vw" />}
      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><IconTool aria-hidden="true" className="size-4 text-[#ff5000]" />{casesLabel(story.cases.length)}</span>
          <span className="inline-flex min-w-0 items-center gap-1.5"><DeviceIcon aria-hidden="true" className="size-4 shrink-0 text-[#ff5000]" /><span className="truncate">{story.cases.map((item) => item.device).join(", ")}</span></span>
        </p>
        <Heading className="mt-2 text-base leading-6 font-bold text-[#171717] dark:text-[#fff7f0]">
          <Link href={repairStoryHref(story.slug)} className="after:absolute after:inset-0 focus-visible:outline-none">
            {story.title}
          </Link>
        </Heading>
        <p className="mt-2 text-sm leading-6 text-[#605952] dark:text-[#c5b8b1]">{story.excerpt}</p>
        <span aria-hidden="true" className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-[#e74700] dark:text-[#ff8a32]">
          Читать, как чинили
          <IconChevronRight className="size-4" />
        </span>
      </div>
    </article>
  );
}

/** Workshop stories for a page; hidden when there are none. */
export function RepairStories({ stories, title = "Работы нашей мастерской", showAllLink = true }: { stories: RepairStory[]; title?: string; showAllLink?: boolean }) {
  if (stories.length === 0) return null;
  return (
    <section id="works" aria-labelledby="works-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <h2 id="works-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{title}</h2>
        {showAllLink && (
          <Link href="/raboty/" className="flex items-center gap-2 rounded-sm text-sm font-semibold text-[#f04a00] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff6800] dark:text-[#ff6800]">
            Все работы
            <IconChevronRight aria-hidden="true" className="size-4" />
          </Link>
        )}
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {stories.slice(0, 3).map((story) => <RepairStoryCard key={story.slug} story={story} />)}
      </div>
    </section>
  );
}
