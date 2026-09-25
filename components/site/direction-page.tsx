import type { ReactNode } from "react";
import { DirectionHero } from "@/components/site/direction-hero";
import { DirectionServices } from "@/components/site/direction-services";
import { DirectionDevices } from "@/components/site/direction-devices";
import { DirectionConditions } from "@/components/site/direction-conditions";
import { DirectionProblems } from "@/components/site/direction-problems";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { RepairProcess } from "@/components/site/repair-process";
import { RepairWorks } from "@/components/site/repair-works";
import { CustomerReviews } from "@/components/site/customer-reviews";
import { FrequentlyAskedQuestions } from "@/components/site/frequently-asked-questions";
import { ContactSection } from "@/components/site/contact-section";
import { RequestProvider } from "@/components/site/request-provider";
import { RepairStories } from "@/components/site/repair-cases";
import { storiesForDirection, storyReviews } from "@/data/cases";
import { JsonLd } from "@/components/site/json-ld";
import type { DirectionPageData } from "@/data/directions";
import { directionRequestConfig } from "@/lib/request";
import { breadcrumbNode, directionServiceNode, faqNode, graph, webPageNode } from "@/lib/structured-data";


export function DirectionPage({ data, illustration }: { data: DirectionPageData; illustration?: ReactNode }) {
  const path = `/${data.slug}/`;
  const stories = storiesForDirection(data.slug);
  const reviews = [...data.reviews.items.map((review) => ({ name: review.author, text: review.text, rating: review.rating })), ...storyReviews(stories)];
  return (
    <RequestProvider config={directionRequestConfig(data.slug, { context: data.metadata.title })}>
    <div id="top" className="min-h-screen min-w-[320px] overflow-x-clip">
      <JsonLd data={graph([
        webPageNode({ path, ...data.metadata }),
        breadcrumbNode(path, data.breadcrumbs),
        directionServiceNode(data),
        faqNode(path, data.faq),
      ])} />
      <SiteHeader homeLinks />
      <main>
        <DirectionHero data={data} />
        <DirectionServices data={data} />
        <DirectionProblems data={data} illustration={illustration} />
        <DirectionDevices data={data} />
        <DirectionConditions data={data} />
        <RepairProcess data={data.process} variant="compact" />
        {stories.length > 0 ? <RepairStories stories={stories} /> : <RepairWorks data={data.works} />}
        {reviews.length > 0 && <CustomerReviews title={data.reviews.title} items={reviews} />}
        <FrequentlyAskedQuestions data={data.faq} />
        <ContactSection data={data.contact} />
      </main>
      <SiteFooter />
    </div>
    </RequestProvider>
  );
}
