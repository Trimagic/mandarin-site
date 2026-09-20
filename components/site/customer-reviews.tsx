"use client";

import { useState } from "react";
import { IconChevronRight, IconStarFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

// Demonstration copy from the design; replace with verified reviews before publishing.
const reviews = [
  {
    name: "Алексей",
    date: "12 мар 2024",
    dateTime: "2024-03-12",
    text: "Заменили экран на Xiaomi быстро и качественно. Цена как сказали по телефону, так и осталась. Рекомендую!",
  },
  {
    name: "Ирина",
    date: "28 апреля 2024",
    dateTime: "2024-04-28",
    text: "Ноутбук сильно грелся. Сделали чистку, заменили термопасту — теперь тихо работает и не нагревается.",
  },
  {
    name: "Дмитрий",
    date: "3 мая 2024",
    dateTime: "2024-05-03",
    text: "Установили SSD и Windows. Всё летает! Отличный сервис и приятные ребята.",
  },
];

export function CustomerReviews() {
  const [page, setPage] = useState(0);
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-6 pb-10 xl:px-12">
      <div className="xl:rounded-xl xl:border xl:border-[#ece5df] xl:bg-[#fffefd] xl:p-6 xl:dark:border-[#46301f] xl:dark:bg-[#15110e]">
        <div className="mb-5 flex items-center justify-between gap-6">
          <h2 id="reviews-heading" className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
            Отзывы клиентов
          </h2>
          <button
            type="button"
            disabled
            title="Страница отзывов появится позже"
            className="hidden items-center gap-3 text-sm font-semibold text-[#f04a00] disabled:cursor-default xl:flex dark:text-[#ff6800]"
          >
            Смотреть все отзывы
            <IconChevronRight aria-hidden="true" className="size-4" />
          </button>
        </div>
        <div id="review-cards" className="grid grid-cols-2 gap-4 xl:grid-cols-3 xl:gap-6">
          {reviews.map((review, index) => (
            <figure key={review.name} className={cn("min-w-0 rounded-[6px] border border-[#e9e6e2] bg-[#fffefd] p-5 dark:border-[#3b2d22] dark:bg-[#15110e]", (index < page || index > page + 1) && "hidden xl:block")}>
              <figcaption className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#171717] dark:text-[#fff7f0]">{review.name}</span>
                <time dateTime={review.dateTime} className="text-xs text-[#898589] dark:text-[#a79b8f]">{review.date}</time>
              </figcaption>
              <div role="img" aria-label="Оценка: 5 из 5" className="mt-2 flex gap-0.5 text-[#ff4b00] dark:text-[#ff6800]">
                {Array.from({ length: 5 }, (_, index) => <IconStarFilled key={index} aria-hidden="true" className="size-4" />)}
              </div>
              <blockquote className="mt-3 text-sm leading-6 text-[#393939] dark:text-[#d1c7bd]">
                {review.text}
              </blockquote>
            </figure>
          ))}
        </div>
        <div className="mt-2 flex justify-center xl:hidden" role="group" aria-label="Переключение отзывов">
          {[0, 1].map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index)}
              aria-label={index === 0 ? "Отзывы Алексея и Ирины" : "Отзывы Ирины и Дмитрия"}
              aria-pressed={page === index}
              aria-controls="review-cards"
              className="grid size-11 place-items-center rounded-full focus-visible:outline-2 focus-visible:outline-[#ff6800]"
            >
              <span className={cn("size-2.5 rounded-full", page === index ? "bg-[#ff4b00] dark:bg-[#ff6800]" : "bg-[#d5d3d1] dark:bg-[#655449]")} />
            </button>
          ))}
        </div>
        <p aria-live="polite" className="sr-only xl:hidden">Показаны отзывы {page + 1} и {page + 2} из {reviews.length}.</p>
        <p className="mt-1 text-center text-xs text-[#898589] xl:mt-3 xl:text-left dark:text-[#a79b8f]">Примеры отзывов из макета.</p>
      </div>
    </section>
  );
}
