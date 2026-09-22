import { DirectionHero } from "@/components/site/direction-hero";
import { SiteHeader } from "@/components/site/site-header";
import { ServiceSymptoms } from "@/components/site/service-symptoms";
import { ServiceIncluded } from "@/components/site/service-included";
import { ServicePricing } from "@/components/site/service-pricing";
import { ServiceComparison } from "@/components/site/service-comparison";
import { RepairProcess } from "@/components/site/repair-process";
import { ServiceBeforeAfter } from "@/components/site/service-before-after";
import { ServiceQuality } from "@/components/site/service-quality";
import { CustomerReviews } from "@/components/site/customer-reviews";
import { FrequentlyAskedQuestions } from "@/components/site/frequently-asked-questions";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";
import type { ServicePageData } from "@/data/services";

export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip bg-[#fffdfb] dark:bg-[#0a0806]">
      <SiteHeader homeLinks />
      <main>
        <DirectionHero data={data} />
        {data.symptoms && <ServiceSymptoms data={data.symptoms} />}
        {data.included && <ServiceIncluded data={data.included} />}
        {data.pricing && <ServicePricing data={data.pricing} />}
        {data.comparison && <ServiceComparison data={data.comparison} />}
        {data.process && data.process.items.length > 0 && <RepairProcess data={data.process} variant="compact" />}
        {data.beforeAfter && <ServiceBeforeAfter data={data.beforeAfter} />}
        {data.quality && <ServiceQuality data={data.quality} />}
        {data.reviews && <CustomerReviews title={data.reviews.title} items={data.reviews.items.map((review) => ({ name: review.author, text: review.text, rating: review.rating }))} notice={data.reviews.items.length ? "" : "Места для отзывов — добавим реальные отзывы клиентов."} />}
        {data.faq && <FrequentlyAskedQuestions data={data.faq} />}
        {data.contact && <ContactSection data={data.contact} />}
      </main>
      <SiteFooter />
    </div>
  );
}
