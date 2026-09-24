import { DirectionHero } from "@/components/site/direction-hero";
import { SiteHeader } from "@/components/site/site-header";
import { ServiceSymptoms } from "@/components/site/service-symptoms";
import { ServiceIncluded } from "@/components/site/service-included";
import { ServicePricing } from "@/components/site/service-pricing";
import { ServiceComparison } from "@/components/site/service-comparison";
import { RepairProcess } from "@/components/site/repair-process";
import { ProblemAdvice } from "@/components/site/problem-advice";
import { ServiceBeforeAfter } from "@/components/site/service-before-after";
import { ServiceQuality } from "@/components/site/service-quality";
import { CustomerReviews } from "@/components/site/customer-reviews";
import { FrequentlyAskedQuestions } from "@/components/site/frequently-asked-questions";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";
import { JsonLd } from "@/components/site/json-ld";
import { getDirectionItemHref } from "@/data/directions";
import type { ServicePageData } from "@/data/services";
import { directionRequestConfig } from "@/lib/request";
import { breadcrumbNode, faqNode, graph, serviceNode, webPageNode } from "@/lib/structured-data";

export function ServicePage({ data }: { data: ServicePageData }) {
  const path = getDirectionItemHref(data.directionSlug, data.slug);
  return (
    <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip">
      <JsonLd data={graph([
        webPageNode({ path, ...data.metadata }),
        breadcrumbNode(path, data.breadcrumbs),
        serviceNode({ directionSlug: data.directionSlug, slug: data.slug, name: `${data.hero.title} ${data.hero.accent}`, description: data.metadata.description }),
        faqNode(path, data.faq),
      ])} />
      <SiteHeader homeLinks />
      <main>
        <DirectionHero
          data={data}
          request={directionRequestConfig(data.directionSlug, { context: data.metadata.title, problem: data.hero.title, extraProblems: [data.hero.title] })}
        />
        {data.symptoms && <ServiceSymptoms data={data.symptoms} overlapHero />}
        {data.included && <ServiceIncluded data={data.included} />}
        {data.pricing && <ServicePricing data={data.pricing} />}
        {data.comparison && <ServiceComparison data={data.comparison} />}
        {data.process && data.process.items.length > 0 && <RepairProcess data={data.process} variant="compact" />}
        {data.advice && <ProblemAdvice data={data.advice} />}
        {data.beforeAfter && <ServiceBeforeAfter data={data.beforeAfter} />}
        {data.quality && <ServiceQuality data={data.quality} />}
        {data.reviews && data.reviews.items.length > 0 && <CustomerReviews title={data.reviews.title} items={data.reviews.items.map((review) => ({ name: review.author, text: review.text, rating: review.rating }))} />}
        {data.faq && <FrequentlyAskedQuestions data={data.faq} />}
        {data.contact && <ContactSection data={data.contact} />}
      </main>
      <SiteFooter />
    </div>
  );
}
