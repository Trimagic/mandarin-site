import type { Metadata } from "next";
import { DirectionPage } from "@/components/site/direction-page";
import { LaptopProblemIllustration } from "@/components/site/laptop-problem-illustration";
import { laptopRepairData } from "@/data/directions";

export const metadata: Metadata = laptopRepairData.metadata;

export default function LaptopRepairPage() {
  return <DirectionPage data={laptopRepairData} illustration={<LaptopProblemIllustration />} />;
}
