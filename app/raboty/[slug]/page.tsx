import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowRight, IconChevronRight, IconClock, IconMessageCircle, IconReceipt, IconStethoscope, IconTool } from "@tabler/icons-react";

import { ContactSection } from "@/components/site/contact-section";
import { CustomerReviews } from "@/components/site/customer-reviews";
import { JsonLd } from "@/components/site/json-ld";
import { RepairCaseImage, RepairStories } from "@/components/site/repair-cases";
import { RequestProvider, RequestTrigger } from "@/components/site/request-provider";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { buttonVariants } from "@/components/ui/button";
import { getRepairStory, repairStories, repairStoryHref, storyProblemRefs, storyReviews, WINDOWS_STORY_DIRECTION } from "@/data/cases";
import { getDirectionItemHref } from "@/data/directions";
import { getProblemPage } from "@/data/problems";
import { getServicePage } from "@/data/services";
import { directionRequestConfig, windowsRequestConfig } from "@/lib/request";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/structured-data";
import { cn } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return repairStories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = getRepairStory((await params).slug);
  if (!story) notFound();
  return pageMetadata({ ...story.metadata, path: repairStoryHref(story.slug) });
}

export default async function RepairStoryPage({ params }: Props) {
  const story = getRepairStory((await params).slug);
  if (!story) notFound();

  const path = repairStoryHref(story.slug);
  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Наши работы", href: "/raboty/" },
    { label: story.title, href: path },
  ];
  const isWindows = story.directionSlug === WINDOWS_STORY_DIRECTION;
  const services = isWindows
    ? [{ slug: WINDOWS_STORY_DIRECTION, label: "Установка Windows", href: `/${WINDOWS_STORY_DIRECTION}/` }]
    : story.serviceSlugs.flatMap((slug) => {
    const page = getServicePage(story.directionSlug, slug);
    return page ? [{ slug, label: `${page.hero.title} ${page.hero.accent}`, href: getDirectionItemHref(story.directionSlug, slug) }] : [];
  });
  const problems = storyProblemRefs(story).flatMap(({ directionSlug, slug }) => {
    const page = getProblemPage(directionSlug, slug);
    return page ? [{ label: `${page.hero.title} ${page.hero.accent}`, href: getDirectionItemHref(directionSlug, slug) }] : [];
  });
  const firstService = getServicePage(story.directionSlug, story.serviceSlugs[0] ?? "");
  const requestConfig = isWindows ? windowsRequestConfig(story.metadata.title) : directionRequestConfig(story.directionSlug, {
    context: story.metadata.title,
    problem: firstService?.hero.title,
    extraProblems: story.serviceSlugs.flatMap((slug) => getServicePage(story.directionSlug, slug)?.hero.title ?? []),
  });
  const otherStories = repairStories.filter((other) => other.slug !== story.slug && other.directionSlug === story.directionSlug);

  return (
    <RequestProvider config={requestConfig}>
      <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip">
        <JsonLd data={graph([webPageNode({ path, ...story.metadata }), breadcrumbNode(path, breadcrumbs)])} />
        <SiteHeader homeLinks />
        <main>
          <article className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
            <nav aria-label="Хлебные крошки" className="pt-6 text-xs text-muted-foreground xl:pt-4">
              <ol className="flex flex-wrap items-center gap-2">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.href} className="flex min-w-0 items-center gap-2">
                    {index > 0 && <IconChevronRight aria-hidden="true" className="size-3 shrink-0" />}
                    {index === breadcrumbs.length - 1 ? <span aria-current="page" className="line-clamp-1">{crumb.label}</span> : <Link href={crumb.href} className="hover:text-primary">{crumb.label}</Link>}
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-6 grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:gap-12">
              <div className="min-w-0">
                <h1 className="text-[clamp(28px,7vw,44px)] leading-[1.08] font-extrabold tracking-[-0.045em] text-[#171717] dark:text-[#fff7f0]">{story.title}</h1>
                <p className="mt-4 text-lg leading-8 text-[#443a35] dark:text-[#d9ccc4]">{story.intro}</p>

                <section aria-labelledby="why-heading" className="mt-8 rounded-xl border border-[#ece5df] bg-[#fffefd] p-5 md:p-6 dark:border-[#46301f] dark:bg-[#15110e]">
                  <h2 id="why-heading" className="text-xl leading-tight font-extrabold tracking-[-0.03em] text-[#171717] xl:text-2xl dark:text-[#fff7f0]">Почему так бывает</h2>
                  <ul className="mt-4 space-y-3">
                    {story.why.map((text) => (
                      <li key={text} className="flex gap-3 text-base leading-7 text-[#443a35] dark:text-[#d9ccc4]">
                        <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-[#ff5000]" />
                        {text}
                      </li>
                    ))}
                  </ul>
                </section>

                <div className="mt-10 space-y-12">
                  {story.cases.map((item, index) => {
                    const service = services.find((link) => link.slug === item.serviceSlug);
                    return (
                      <section key={item.id} id={item.id} aria-labelledby={`${item.id}-heading`} className="scroll-mt-28">
                        <p className="text-sm font-semibold text-[#e74700] dark:text-[#ff8a32]">Случай {index + 1} · {item.device}</p>
                        <h2 id={`${item.id}-heading`} className="mt-1 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] dark:text-[#fff7f0]">{item.title}</h2>
                        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                          {[
                            { icon: IconClock, label: "Срок", value: item.duration },
                            { icon: IconReceipt, label: "Стоимость", value: item.price },
                          ].map(({ icon: Icon, label, value }) => (
                            <div key={label} className="flex items-center gap-1.5">
                              <Icon aria-hidden="true" className="size-4 text-[#ff5000]" />
                              <dt className="text-muted-foreground">{label}:</dt>
                              <dd className="font-bold text-[#171717] dark:text-[#fff7f0]">{value}</dd>
                            </div>
                          ))}
                          {service && (
                            <div className="flex items-center gap-1.5">
                              <IconTool aria-hidden="true" className="size-4 text-[#ff5000]" />
                              <dt className="text-muted-foreground">Услуга:</dt>
                              <dd><Link href={service.href} className="font-bold text-[#e74700] hover:underline dark:text-[#ff8a32]">{service.label}</Link></dd>
                            </div>
                          )}
                        </dl>
                        <RepairCaseImage image={item.image} priority={index === 0} sizes="(min-width: 1440px) 900px, (min-width: 1280px) 62vw, 100vw" className="mt-5 rounded-xl border border-[#ece5df] dark:border-[#46301f]" />
                        <ol className="mt-6 max-w-[720px]">
                          {[
                            { label: "С чем обратились", text: item.complaint, icon: IconMessageCircle, tone: "text-[#8a7d76] dark:text-[#b6a99b]" },
                            { label: "Что нашли", text: item.diagnosis, icon: IconStethoscope, tone: "text-[#65a832] dark:text-[#8ab943]" },
                            { label: "Что сделали", text: item.work, icon: IconTool, tone: "text-[#ff5000] dark:text-[#ff7a18]" },
                          ].map(({ label, text, icon: Icon, tone }, step, steps) => (
                            <li key={label} className="relative flex gap-4 pb-6 last:pb-0">
                              {step < steps.length - 1 && <span aria-hidden="true" className="absolute top-10 bottom-1 left-[19px] w-px bg-[#eadbd1] dark:bg-[#3b2d22]" />}
                              <span aria-hidden="true" className={cn("grid size-10 shrink-0 place-items-center rounded-full border border-[#eadbd1] bg-[#fffefd] dark:border-[#3b2d22] dark:bg-[#15110e]", tone)}>
                                <Icon stroke={1.5} className="size-5" />
                              </span>
                              <div className="min-w-0 pt-1.5">
                                <h3 className={cn("text-xs font-bold tracking-wide uppercase", tone)}>{label}</h3>
                                <p className="mt-1.5 text-base leading-7 text-[#443a35] dark:text-[#d9ccc4]">{text}</p>
                              </div>
                            </li>
                          ))}
                        </ol>
                      </section>
                    );
                  })}
                </div>
              </div>

              <aside className="flex flex-col gap-4 xl:sticky xl:top-28 xl:self-start">
                <nav aria-label="Случаи в статье" className="rounded-xl border border-[#ece5df] bg-[#fffefd] p-4 dark:border-[#46301f] dark:bg-[#15110e]">
                  <p className="text-sm font-bold text-[#171717] dark:text-[#fff7f0]">В статье</p>
                  <ol className="mt-2 space-y-1">
                    {story.cases.map((item, index) => (
                      <li key={item.id}>
                        <a href={`#${item.id}`} className="flex gap-2 rounded-md px-2 py-1.5 text-sm text-[#443a35] hover:bg-[#ff5000]/8 hover:text-primary dark:text-[#d9ccc4]">
                          <span className="font-bold text-[#e74700] dark:text-[#ff8a32]">{index + 1}</span>
                          <span>{item.device}: {item.title.toLowerCase()}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
                <div className="rounded-xl bg-[#ff5000] p-6 text-white">
                  <p className="text-xl leading-tight font-extrabold tracking-[-0.025em]">Похожая поломка?</p>
                  <p className="mt-2 text-sm leading-6">Опишите, что случилось, — мастер перезвонит и назовёт стоимость для вашей модели.</p>
                  <RequestTrigger
                    fallbackHref="https://wa.me/375291506888"
                    className={cn(buttonVariants({ variant: "secondary", size: "xl" }), "mt-4 h-11 w-full rounded-md bg-white text-sm text-[#e74700] hover:bg-[#fff3eb]")}
                  >
                    Узнать стоимость
                    <IconArrowRight aria-hidden="true" className="ml-2 size-5" />
                  </RequestTrigger>
                </div>
                {services.length + problems.length > 0 && (
                  <nav aria-label="По теме" className="flex flex-col gap-2">
                    {[...services.map((link) => ({ ...link, note: "Услуга и цены" })), ...problems.map((link) => ({ ...link, note: "Причины и что делать" }))].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between gap-3 rounded-lg border border-[#e9e6e2] bg-[#fffefd] px-4 py-3 transition-colors hover:border-[#ff6800] hover:bg-[#ff6800]/5 dark:border-[#3b2d22] dark:bg-[#15110e]"
                      >
                        <span className="min-w-0">
                          <span className="block text-xs text-muted-foreground">{link.note}</span>
                          <span className="block text-sm font-semibold text-[#171717] dark:text-[#fff7f0]">{link.label}</span>
                        </span>
                        <IconChevronRight aria-hidden="true" className="size-4 shrink-0 text-[#ff4b00] dark:text-[#ff6800]" />
                      </Link>
                    ))}
                  </nav>
                )}
              </aside>
            </div>
          </article>
          <CustomerReviews items={storyReviews([story])} />
          <RepairStories stories={otherStories} title="Другие работы" />
          <ContactSection />
        </main>
        <SiteFooter />
      </div>
    </RequestProvider>
  );
}
