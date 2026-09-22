import Image from "next/image";
import type { DirectionPageData } from "@/data/directions";

export function RepairWorks({ data, id = "works" }: { data: DirectionPageData["works"]; id?: string }) {
  if (!data.items.length) return null;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-8 md:px-6 xl:px-12">
      <div className="border-b border-[#e6e2de] pb-6 dark:border-[#46301f]">
        <h2 id={`${id}-heading`} className="mb-5 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{data.title}</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {data.items.map((item) => (
            <figure key={item.image} className="overflow-hidden rounded-[6px] border border-[#e6e2de] bg-[#fffefd] dark:border-[#46301f] dark:bg-[#15110e]">
              <div className="relative aspect-[3/2] lg:aspect-[3/1]">
                <Image src={item.image} alt={item.alt} fill sizes="(min-width: 1440px) 660px, (min-width: 768px) 46vw, 100vw" className="object-cover" />
              </div>
              <figcaption className="px-4 py-3">
                <h3 className="text-sm leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                {item.description && <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.description}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
        {data.notice && <p className="mt-3 text-center text-xs leading-5 text-muted-foreground">{data.notice}</p>}
      </div>
    </section>
  );
}
