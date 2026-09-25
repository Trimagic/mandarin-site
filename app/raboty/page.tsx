import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconChevronRight } from "@tabler/icons-react";

import { ContactSection } from "@/components/site/contact-section";
import { JsonLd } from "@/components/site/json-ld";
import { RepairStoryCard } from "@/components/site/repair-cases";
import { RequestProvider } from "@/components/site/request-provider";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { repairStories } from "@/data/cases";
import { homeRequestConfig } from "@/lib/request";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbNode, graph, webPageNode } from "@/lib/structured-data";

const path = "/raboty/";
const seo = {
  title: "Наши работы — примеры ремонта в Борисове | Mandarin Сервис",
  description: "Примеры ремонтов из мастерской Mandarin Сервис: с чем пришли клиенты, что показала диагностика, что сделали, сколько заняло и стоило.",
};
const breadcrumbs = [{ label: "Главная", href: "/" }, { label: "Наши работы", href: path }];

export const metadata: Metadata = pageMetadata({ ...seo, path });

export default function WorksPage() {
  // The section only exists once there is at least one published repair.
  if (repairStories.length === 0) notFound();

  return (
    <RequestProvider config={{ ...homeRequestConfig(), context: "Наши работы" }}>
      <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip">
        <JsonLd data={graph([webPageNode({ path, ...seo }), breadcrumbNode(path, breadcrumbs)])} />
        <SiteHeader homeLinks />
        <main className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
          <nav aria-label="Хлебные крошки" className="pt-6 text-xs text-muted-foreground xl:pt-4">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link href="/" className="hover:text-primary">Главная</Link></li>
              <li className="flex items-center gap-2"><IconChevronRight aria-hidden="true" className="size-3" /><span aria-current="page">Наши работы</span></li>
            </ol>
          </nav>
          <h1 className="mt-6 text-[clamp(32px,8vw,48px)] leading-[1.06] font-extrabold tracking-[-0.045em] text-[#171717] dark:text-[#fff7f0]">
            Наши работы
          </h1>
          <p className="mt-4 max-w-[640px] text-base leading-7 text-[#605952] dark:text-[#c5b8b1]">
            Реальные ремонты из мастерской: с чем пришли, что нашли на диагностике, почему так бывает и во сколько обошёлся ремонт.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {repairStories.map((story) => <RepairStoryCard key={story.slug} story={story} headingLevel="h2" />)}
          </div>
        </main>
        <ContactSection />
        <SiteFooter />
      </div>
    </RequestProvider>
  );
}
