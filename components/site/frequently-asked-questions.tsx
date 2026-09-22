import { IconChevronDown } from "@tabler/icons-react";
import type { DirectionPageData } from "@/data/directions";

type FrequentlyAskedQuestionsProps = {
  data: DirectionPageData["faq"];
  id?: string;
};

export function FrequentlyAskedQuestions({ data, id = "faq" }: FrequentlyAskedQuestionsProps) {
  if (!data.items.length) return null;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mx-auto w-full max-w-[1440px] scroll-mt-24 px-5 pb-10 md:px-6 xl:px-12">
      <h2 id={`${id}-heading`} className="mb-5 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
        {data.title}
      </h2>
      <div className="overflow-hidden rounded-[6px] border border-[#e6e2de] bg-[#fffefd] dark:border-[#46301f] dark:bg-[#15110e]">
        {data.items.map((item, index) => (
          <details key={item.question} name={`${id}-accordion`} open={index === 0} className="group border-b border-[#e6e2de] last:border-b-0 open:bg-[#fff3eb] dark:border-[#46301f] dark:open:bg-[#24170f]">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-5 px-5 py-3 text-sm leading-6 font-semibold text-[#171717] transition-colors hover:text-[#ff5000] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#ff5000] dark:text-[#fff7f0] [&::-webkit-details-marker]:hidden">
              {item.question}
              <IconChevronDown aria-hidden="true" stroke={1.5} className="size-5 shrink-0 transition-transform group-open:rotate-180 group-open:text-[#ff5000]" />
            </summary>
            <p className="px-5 pb-4 pr-14 text-sm leading-6 text-muted-foreground">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
