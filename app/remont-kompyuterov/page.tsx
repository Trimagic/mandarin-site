import type { Metadata } from "next";
import { ComputerProblemIllustration } from "@/components/site/computer-problem-illustration";
import { DirectionPage } from "@/components/site/direction-page";
import { computerRepairData } from "@/data/directions";

export const metadata: Metadata = computerRepairData.metadata;

export default function ComputerRepairPage() {
  return <DirectionPage data={computerRepairData} illustration={<ComputerProblemIllustration />} />;
}
