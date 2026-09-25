import type { Metadata } from "next";
import { DirectionHero } from "@/components/site/direction-hero";
import { RequestProvider } from "@/components/site/request-provider";
import { windowsRequestConfig } from "@/lib/request";
import { JsonLd } from "@/components/site/json-ld";
import { SiteHeader } from "@/components/site/site-header";
import { WindowsInstallationPackage } from "@/components/site/windows-installation-package";
import { WindowsAdditionalServices } from "@/components/site/windows-additional-services";
import { ServiceSymptoms } from "@/components/site/service-symptoms";
import { ServicePricing } from "@/components/site/service-pricing";
import { RepairProcess } from "@/components/site/repair-process";
import { CustomerReviews } from "@/components/site/customer-reviews";
import { RepairStories } from "@/components/site/repair-cases";
import { storiesForDirection, storyReviews, WINDOWS_STORY_DIRECTION } from "@/data/cases";
import { RelatedProblems } from "@/components/site/related-problems";
import { FrequentlyAskedQuestions } from "@/components/site/frequently-asked-questions";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";
import { windowsAdditionalServices, windowsInstallationData as data, windowsPageSections as sections } from "@/data/windows-installation";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbNode, faqNode, graph, standaloneServiceNode, webPageNode } from "@/lib/structured-data";

const path = `/${data.slug}/`;
const stories = storiesForDirection(WINDOWS_STORY_DIRECTION);

export const metadata: Metadata = pageMetadata({
  ...data.metadata,
  path,
});

export default function WindowsInstallationPage() {
  return (
    <RequestProvider config={windowsRequestConfig(data.metadata.title)}>
    <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip">
      <JsonLd data={graph([
        webPageNode({ path, ...data.metadata }),
        breadcrumbNode(path, data.breadcrumbs),
        standaloneServiceNode({
          path,
          name: `${data.hero.title} ${data.hero.accent}`,
          serviceType: "Установка Windows",
          description: data.metadata.description,
          catalog: { name: windowsAdditionalServices.title, items: [...windowsAdditionalServices.items] },
        }),
        faqNode(path, sections.faq),
      ])} />
      <SiteHeader homeLinks />
      <main>
        <DirectionHero data={data} />
        <WindowsInstallationPackage />
        <WindowsAdditionalServices />
        <ServiceSymptoms data={sections.tasks} columns={4} note="Если система не запускается, сначала проверим причину и обсудим сохранение данных." />
        <div id="prices" className="scroll-mt-24">
          <ServicePricing data={sections.pricing} />
        </div>
        <RepairProcess data={sections.process} variant="compact" />
        <RepairStories stories={stories} />
        <CustomerReviews items={storyReviews(stories)} />
        <RelatedProblems serviceHref={path} title="Когда поможет переустановка Windows" />
        <FrequentlyAskedQuestions data={sections.faq} />
        <ContactSection data={sections.contact} />
      </main>
      <SiteFooter />
    </div>
    </RequestProvider>
  );
}
