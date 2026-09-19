import { IconChevronRight, IconStarFilled } from "@tabler/icons-react";

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
  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-12 pb-10">
      <div className="rounded-xl border border-[#ece5df] bg-[#fffefd] p-6 dark:border-[#46301f] dark:bg-[#15110e]">
        <div className="mb-5 flex items-center justify-between gap-6">
          <h2 id="reviews-heading" className="text-[28px] leading-tight font-extrabold tracking-[-0.035em] text-[#171717] dark:text-[#fff7f0]">
            Отзывы клиентов
          </h2>
          <button
            type="button"
            disabled
            title="Страница отзывов появится позже"
            className="flex items-center gap-3 text-sm font-semibold text-[#f04a00] disabled:cursor-default dark:text-[#ff6800]"
          >
            Смотреть все отзывы
            <IconChevronRight aria-hidden="true" className="size-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {reviews.map((review) => (
            <figure key={review.name} className="rounded-[6px] border border-[#e9e6e2] p-5 dark:border-[#3b2d22]">
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
        <p className="mt-3 text-xs text-[#898589] dark:text-[#a79b8f]">Примеры отзывов из макета.</p>
      </div>
    </section>
  );
}
