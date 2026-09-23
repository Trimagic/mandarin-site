import type { Metadata } from "next";
import { DirectionPage } from "@/components/site/direction-page";
import { pageMetadata } from "@/lib/seo";
import { LaptopProblemIllustration } from "@/components/site/laptop-problem-illustration";
import { laptopRepairData } from "@/data/directions";

export const metadata: Metadata = pageMetadata({ ...laptopRepairData.metadata, path: `/${laptopRepairData.slug}/` });

export default function LaptopRepairPage() {
  return <DirectionPage data={laptopRepairData} illustration={<LaptopProblemIllustration />} />;
}
