import { DirectionHero } from "@/components/site/direction-hero";
import { SiteHeader } from "@/components/site/site-header";
import { ServiceSymptoms } from "@/components/site/service-symptoms";
import { ProblemCauses } from "@/components/site/problem-causes";
import { ServicePricing } from "@/components/site/service-pricing";
import { RepairProcess } from "@/components/site/repair-process";
import { ProblemAdvice } from "@/components/site/problem-advice";
import { ServiceQuality } from "@/components/site/service-quality";
import { FrequentlyAskedQuestions } from "@/components/site/frequently-asked-questions";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/site-footer";
import type { ProblemPageData } from "@/data/problems";

export function ProblemPage({ data }: { data: ProblemPageData }) {
  return (
    <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip bg-[#fffdfb] dark:bg-[#0a0806]">
      <SiteHeader homeLinks />
      <main>
        <DirectionHero data={data} />
        {data.symptoms && <ServiceSymptoms data={data.symptoms} />}
        {data.causes && <ProblemCauses data={data.causes} />}
        {data.pricing && <ServicePricing data={data.pricing} />}
        {data.process && data.process.items.length > 0 && <RepairProcess data={data.process} variant="compact" />}
        {data.advice && <ProblemAdvice data={data.advice} />}
        {data.quality && <ServiceQuality data={data.quality} />}
        {data.faq && <FrequentlyAskedQuestions data={data.faq} />}
        {data.contact && <ContactSection data={data.contact} />}
      </main>
      <SiteFooter />
    </div>
  );
}
