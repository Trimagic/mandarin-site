import type { Metadata } from "next";
import { ServicePage } from "@/components/site/service-page";
import { appleRepairData } from "@/data/apple-repair";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({ ...appleRepairData.metadata, path: appleRepairData.path! });

export default function AppleRepairPage() {
  return <ServicePage data={appleRepairData} />;
}
