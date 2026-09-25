import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";

import { getDirectionItemHref } from "@/data/directions";
import { problemPages } from "@/data/problems";

/** Problem pages whose price list links to this service, so every problem → service link has a way back. */
function relatedProblems(serviceHref: string) {
  return problemPages
    .filter((page) => page.pricing?.items.some((item) => item.action?.href === serviceHref))
    .map((page) => ({ href: getDirectionItemHref(page.directionSlug, page.slug), title: `${page.hero.title} ${page.hero.accent}` }));
}

export function RelatedProblems({ serviceHref, title = "С какими поломками помогает" }: { serviceHref: string; title?: string }) {
  const problems = relatedProblems(serviceHref);
  if (problems.length === 0) return null;

  return (
    <section aria-labelledby="related-problems-heading" className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <h2 id="related-problems-heading" className="mb-4 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
        {title}
      </h2>
      <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 xl:gap-4">
        {problems.map((problem) => (
          <li key={problem.href}>
            <Link
              href={problem.href}
              className="flex min-h-14 min-w-0 items-center justify-between gap-2 rounded-lg border border-[#e9e6e2] bg-[#fffefd] px-3 py-3 text-sm text-[#414149] transition-colors hover:border-[#ff6800] hover:bg-[#ff6800]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff6800] xl:gap-3 xl:px-4 dark:border-[#3b2d22] dark:bg-[#15110e] dark:text-[#e3d9ce]"
            >
              {problem.title}
              <IconChevronRight aria-hidden="true" className="size-4 shrink-0 text-[#ff4b00] dark:text-[#ff6800]" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
