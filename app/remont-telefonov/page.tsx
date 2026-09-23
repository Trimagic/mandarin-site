import type { Metadata } from "next";
import { DirectionPage } from "@/components/site/direction-page";
import { pageMetadata } from "@/lib/seo";
import { PhoneProblemIllustration } from "@/components/site/direction-problems";
import { phoneRepairData } from "@/data/directions";

export const metadata: Metadata = pageMetadata({ ...phoneRepairData.metadata, path: `/${phoneRepairData.slug}/` });

export default function PhoneRepairPage() {
  return <DirectionPage data={phoneRepairData} illustration={<PhoneProblemIllustration />} />;
}