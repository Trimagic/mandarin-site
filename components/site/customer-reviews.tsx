"use client";

import { useEffect, useId, useState } from "react";
import { IconStarFilled } from "@tabler/icons-react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

export type CustomerReview = {
  name: string;
  text: string;
  date?: string;
  dateTime?: string;
  rating?: number;
};

const navButtonClass =
  "static inset-auto size-10 translate-none rounded-full border-[#eadbd1] bg-[#fffefd] text-[#443a35] hover:border-[#ff6800] hover:text-[#ff5000] disabled:opacity-40 dark:border-[#49352d] dark:bg-[#15110e] dark:text-[#fff7f0]";

/** Review carousel for any page: one card on phones, two on tablets, three on desktop. Renders nothing without reviews. */
export function CustomerReviews({ title = "Отзывы клиентов", items, notice, id = "reviews" }: {
  title?: string;
  items: CustomerReview[];
  notice?: string;
  id?: string;
}) {
  const headingId = useId();
  const [api, setApi] = useState<CarouselApi>();
  const [snaps, setSnaps] = useState(0);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setSnaps(api.scrollSnapList().length);
      setSelected(api.selectedScrollSnap());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
    };
  }, [api]);

  if (items.length === 0) return null;
  const hasNavigation = snaps > 1;

  return (
    <section id={id} aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="xl:rounded-xl xl:border xl:border-[#ece5df] xl:bg-[#fffefd] xl:p-6 xl:dark:border-[#46301f] xl:dark:bg-[#15110e]">
        <Carousel setApi={setApi} opts={{ align: "start" }} aria-labelledby={headingId}>
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 id={headingId} className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
              {title}
            </h2>
            {hasNavigation && (
              <div className="flex shrink-0 gap-2">
                <CarouselPrevious variant="outline" className={navButtonClass} />
                <CarouselNext variant="outline" className={navButtonClass} />
              </div>
            )}
          </div>
          <CarouselContent>
            {items.map((review, index) => (
              <CarouselItem key={`${review.name}-${index}`} className="md:basis-1/2 xl:basis-1/3">
                <figure className="flex h-full flex-col rounded-lg border border-[#e9e6e2] bg-[#fffefd] p-5 dark:border-[#3b2d22] dark:bg-[#15110e]">
                  <figcaption className="flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold text-[#171717] dark:text-[#fff7f0]">{review.name}</span>
                    {review.date && <time dateTime={review.dateTime} className="text-xs text-[#898589] dark:text-[#a79b8f]">{review.date}</time>}
                  </figcaption>
                  <div role="img" aria-label={`Оценка: ${review.rating ?? 5} из 5`} className="mt-2 flex gap-0.5 text-[#ff4b00] dark:text-[#ff6800]">
                    {Array.from({ length: 5 }, (_, star) => (
                      <IconStarFilled key={star} aria-hidden="true" className={cn("size-4", star >= Math.round(review.rating ?? 5) && "text-[#e2d6cc] dark:text-[#3b2d22]")} />
                    ))}
                  </div>
                  <blockquote className="mt-3 text-sm leading-6 text-[#393939] dark:text-[#d1c7bd]">{review.text}</blockquote>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          {hasNavigation && (
            <div className="mt-4 flex justify-center gap-1" role="group" aria-label="Переключение отзывов">
              {Array.from({ length: snaps }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => api?.scrollTo(index)}
                  aria-label={`Показать отзывы, страница ${index + 1} из ${snaps}`}
                  aria-current={selected === index ? "true" : undefined}
                  className="grid size-8 cursor-pointer place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-[#ff6800]"
                >
                  <span className={cn("h-2 rounded-full transition-all", selected === index ? "w-6 bg-[#ff4b00] dark:bg-[#ff6800]" : "w-2 bg-[#d5d3d1] dark:bg-[#655449]")} />
                </button>
              ))}
            </div>
          )}
        </Carousel>
        {notice && <p className="mt-3 text-center text-xs text-[#898589] xl:text-left dark:text-[#a79b8f]">{notice}</p>}
      </div>
    </section>
  );
}
