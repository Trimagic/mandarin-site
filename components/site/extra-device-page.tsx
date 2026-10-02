import { DirectionHero } from "@/components/site/direction-hero";
import { ServiceIncluded } from "@/components/site/service-included";
import { ServiceSymptoms } from "@/components/site/service-symptoms";
import { ServicePricing } from "@/components/site/service-pricing";
import { RepairProcess } from "@/components/site/repair-process";
import { FrequentlyAskedQuestions } from "@/components/site/frequently-asked-questions";
import { ContactSection } from "@/components/site/contact-section";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { RequestProvider } from "@/components/site/request-provider";
import { JsonLd } from "@/components/site/json-ld";
import type { ExtraDevicePageData } from "@/data/extra-device-services";
import { extraDeviceRequestConfig } from "@/lib/request";
import { breadcrumbNode, faqNode, graph, standaloneServiceNode, webPageNode } from "@/lib/structured-data";

export function ExtraDevicePage({ data }: { data: ExtraDevicePageData }) {
  const path = `/${data.slug}/`;
  return (
    <RequestProvider config={extraDeviceRequestConfig(data)}>
      <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip">
        <JsonLd data={graph([
          webPageNode({ path, ...data.metadata }), breadcrumbNode(path, data.breadcrumbs),
          standaloneServiceNode({ path, name: `${data.hero.title} ${data.hero.accent}`, serviceType: data.hero.title, description: data.metadata.description, catalog: { name: data.services.title, items: data.services.items } }),
          faqNode(path, data.faq),
        ])} />
        <SiteHeader />
        <main>
          <DirectionHero data={data} />
          <div id="services" className="scroll-mt-24"><ServiceIncluded data={data.services} columns={data.services.items.length === 3 ? 3 : 4} /></div>
          <ServiceSymptoms data={data.symptoms} columns={4} />
          <div id="prices" className="scroll-mt-24"><ServicePricing data={data.pricing} /></div>
          <RepairProcess data={data.process} variant="compact" />
          <FrequentlyAskedQuestions data={data.faq} />
          <ContactSection data={data.contact} />
        </main>
        <SiteFooter />
      </div>
    </RequestProvider>
  );
}
