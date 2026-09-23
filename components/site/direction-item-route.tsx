import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProblemPage } from "@/components/site/problem-page";
import { ServicePage } from "@/components/site/service-page";
import { getDirectionItemHref } from "@/data/directions";
import { getProblemPage, problemPages } from "@/data/problems";
import { pageMetadata } from "@/lib/seo";
import { getServicePage, servicePages } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

/** Route handlers for /<direction>/<slug>/: service and problem pages share one URL level. */
export function createDirectionItemRoute(directionSlug: string) {
  function getPage(slug: string) {
    return getServicePage(directionSlug, slug) ?? getProblemPage(directionSlug, slug);
  }

  return {
    generateStaticParams() {
      return [...servicePages, ...problemPages].filter((page) => page.directionSlug === directionSlug).map(({ slug }) => ({ slug }));
    },
    async generateMetadata({ params }: Props): Promise<Metadata> {
      const data = getPage((await params).slug);
      if (!data) notFound();
      return pageMetadata({ ...data.metadata, path: getDirectionItemHref(directionSlug, data.slug), image: data.hero.image });
    },
    async Page({ params }: Props) {
      const { slug } = await params;
      const service = getServicePage(directionSlug, slug);
      if (service) return <ServicePage data={service} />;
      const problem = getProblemPage(directionSlug, slug);
      if (problem) return <ProblemPage data={problem} />;
      notFound();
    },
  };
}
