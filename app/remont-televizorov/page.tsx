import type { Metadata } from "next";
import { DirectionPage } from "@/components/site/direction-page";
import { TvProblemIllustration } from "@/components/site/tv-problem-illustration";
import { tvRepairData } from "@/data/directions";

export const metadata: Metadata = tvRepairData.metadata;

export default function TvRepairPage() {
  return <DirectionPage data={tvRepairData} illustration={<TvProblemIllustration />} />;
}
