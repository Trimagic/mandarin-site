import type { Metadata } from "next";
import { DirectionPage } from "@/components/site/direction-page";
import { pageMetadata } from "@/lib/seo";
import { TvProblemIllustration } from "@/components/site/tv-problem-illustration";
import { tvRepairData } from "@/data/directions";

export const metadata: Metadata = pageMetadata({ ...tvRepairData.metadata, path: `/${tvRepairData.slug}/`, image: tvRepairData.hero.image });

export default function TvRepairPage() {
  return <DirectionPage data={tvRepairData} illustration={<TvProblemIllustration />} />;
}
