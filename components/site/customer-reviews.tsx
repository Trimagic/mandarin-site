"use client";

import { useState } from "react";
import { IconStarFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

export type CustomerReview = {
  name: string;
  text: string;
  date?: string;
  dateTime?: string;
  rating?: number;
};

/** Shows only real, verifiable reviews; with none the block is not rendered at all. */
export function CustomerReviews({ title = "Отзывы клиентов", items, notice }: {
  title?: string;
  items: CustomerReview[];
  notice?: string;
}) {
  const reviews = items;
  const [page, setPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  if (reviews.length === 0) return null;
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <div className="xl:rounded-xl xl:border xl:border-[#ece5df] xl:bg-[#fffefd] xl:p-6 xl:dark:border-[#46301f] xl:dark:bg-[#15110e]">
        <h2 id="reviews-heading" className="mb-5 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
          {title}
        </h2>
        <div id="review-cards" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {reviews.map((review, index) => (
            <figure key={review.name} className={cn("min-w-0 rounded-[6px] border border-[#e9e6e2] bg-[#fffefd] p-5 dark:border-[#3b2d22] dark:bg-[#15110e]", index !== mobilePage && "max-md:hidden", (index < page || index > page + 1) && "md:max-xl:hidden")}>
              <figcaption className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#171717] dark:text-[#fff7f0]">{review.name}</span>
                {review.date && <time dateTime={review.dateTime} className="text-xs text-[#898589] dark:text-[#a79b8f]">{review.date}</time>}
              </figcaption>
              <div role="img" aria-label={`Оценка: ${review.rating ?? 5} из 5`} className="mt-2 flex gap-0.5 text-[#ff4b00] dark:text-[#ff6800]">
                {Array.from({ length: Math.max(0, Math.min(5, Math.round(review.rating ?? 5))) }, (_, index) => <IconStarFilled key={index} aria-hidden="true" className="size-4" />)}
              </div>
              <blockquote className="mt-3 text-sm leading-6 text-[#393939] dark:text-[#d1c7bd]">
                {review.text}
              </blockquote>
            </figure>
          ))}
        </div>
        <div className="mt-2 hidden justify-center md:flex xl:hidden" role="group" aria-label="Переключение отзывов">
          {Array.from({ length: Math.max(1, reviews.length - 1) }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              aria-label={`Отзывы ${index + 1}–${Math.min(index + 2, reviews.length)}`}
              aria-pressed={page === index}
              aria-controls="review-cards"
              className="grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-[#ff6800]"
            >
              <span className={cn("size-2.5 rounded-full", page === index ? "bg-[#ff4b00] dark:bg-[#ff6800]" : "bg-[#d5d3d1] dark:bg-[#655449]")} />
            </button>
          ))}
        </div>
        <div className="mt-2 flex justify-center md:hidden" role="group" aria-label="Переключение отзывов">
          {reviews.map((review, index) => (
            <button key={review.name} type="button" onClick={() => setMobilePage(index)} aria-label={`Отзыв: ${review.name}`} aria-pressed={mobilePage === index} aria-controls="review-cards" className="grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-[#ff6800]">
              <span className={cn("size-2.5 rounded-full", mobilePage === index ? "bg-[#ff4b00] dark:bg-[#ff6800]" : "bg-[#d5d3d1] dark:bg-[#655449]")} />
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only hidden md:block xl:hidden">Показаны отзывы {page + 1} и {page + 2} из {reviews.length}.</p>
        <p aria-live="polite" className="sr-only md:hidden">Отзыв {mobilePage + 1} из {reviews.length}: {reviews[mobilePage].name}.</p>
        {notice && <p className="mt-1 text-center text-xs text-[#898589] xl:mt-3 xl:text-left dark:text-[#a79b8f]">{notice}</p>}
      </div>
    </section>
  );
}
