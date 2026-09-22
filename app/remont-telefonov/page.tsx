import type { Metadata } from "next";
import { DirectionHero } from "@/components/site/direction-hero";
import { DirectionServices } from "@/components/site/direction-services";
import { DirectionDevices } from "@/components/site/direction-devices";
import { DirectionConditions } from "@/components/site/direction-conditions";
import { DirectionProblems, PhoneProblemIllustration } from "@/components/site/direction-problems";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { RepairProcess } from "@/components/site/repair-process";
import { RepairWorks } from "@/components/site/repair-works";
import { CustomerReviews } from "@/components/site/customer-reviews";
import { FrequentlyAskedQuestions } from "@/components/site/frequently-asked-questions";
import { ContactSection } from "@/components/site/contact-section";
import { phoneRepairData, type DirectionPageData } from "@/data/directions";

export const metadata: Metadata = phoneRepairData.metadata;

export default function PhoneRepairPage() {
  return (
    <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip bg-[#fffdfb] dark:bg-[#0a0806]">
      <SiteHeader homeLinks />
      <main>
        <DirectionHero data={phoneRepairData} />
        <DirectionServices data={phoneRepairData} />
        <DirectionProblems data={phoneRepairData} illustration={<PhoneProblemIllustration />} />
        <DirectionDevices data={phoneRepairData} />
        <DirectionConditions data={phoneRepairData} />
        <RepairProcess data={phoneRepairData.process} variant="compact" />
        <RepairWorks data={phoneRepairData.works} />
        <CustomerReviews title={phoneRepairData.reviews.title} items={(phoneRepairData.reviews.items as DirectionPageData["reviews"]["items"]).map((review) => ({ name: review.author, text: review.text, rating: review.rating }))} notice="Места для отзывов — добавим реальные отзывы клиентов о ремонте телефонов." />
        <FrequentlyAskedQuestions data={phoneRepairData.faq} />
        <ContactSection data={phoneRepairData.contact} />
      </main>
      <SiteFooter />
    </div>
  );
}
