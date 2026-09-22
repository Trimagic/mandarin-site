import type { Metadata } from "next";
import { DirectionPage } from "@/components/site/direction-page";
import { PhoneProblemIllustration } from "@/components/site/direction-problems";
import { phoneRepairData } from "@/data/directions";

export const metadata: Metadata = phoneRepairData.metadata;

export default function PhoneRepairPage() {
  return <DirectionPage data={phoneRepairData} illustration={<PhoneProblemIllustration />} showReviewPlaceholders />;
}