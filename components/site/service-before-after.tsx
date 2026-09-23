import Image from "next/image";
import { IconChevronRight } from "@tabler/icons-react";
import { useId } from "react";
import type { ServiceBeforeAfterData } from "@/data/services/types";

/** The image contains an equal-width before/after pair, in that order. */
export function ServiceBeforeAfter({ data }: { data: ServiceBeforeAfterData }) {
  const headingId = useId();
  if (!data.image.src) return null;

  return (
    <section aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <h2 id={headingId} className="mb-4 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{data.title}</h2>
      <figure>
        <div className="relative overflow-hidden rounded-[6px] border border-[#e6e2de] bg-[#fffefd] dark:border-[#46301f] dark:bg-[#15110e]">
          <Image src={data.image.src} alt={data.image.alt} width={1536} height={512} sizes="(min-width: 1440px) 1344px, (min-width: 768px) 94vw, 100vw" className="block h-auto w-full" />
          <span className="absolute inset-y-0 left-1/2 w-1 -translate-x-1/2 bg-background" aria-hidden="true" />
          <IconChevronRight aria-hidden="true" stroke={1.5} className="absolute top-1/2 left-1/2 size-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fffdfb] p-1.5 text-[#ff5000] md:size-11 md:p-2 dark:bg-[#15110e]" />
          <span className="absolute bottom-2 left-2 rounded-md border border-white/30 bg-black/70 px-3 py-1 text-xs font-semibold text-white md:bottom-5 md:left-5 md:px-5 md:py-2 md:text-base">{data.beforeLabel}</span>
          <span className="absolute bottom-2 left-[calc(50%+0.5rem)] rounded-md border border-white/30 bg-black/70 px-3 py-1 text-xs font-semibold text-white md:bottom-5 md:left-[calc(50%+1.25rem)] md:px-5 md:py-2 md:text-base">{data.afterLabel}</span>
        </div>
        {data.notice && <figcaption className="mt-3 text-xs leading-5 text-muted-foreground">{data.notice}</figcaption>}
      </figure>
    </section>
  );
}
