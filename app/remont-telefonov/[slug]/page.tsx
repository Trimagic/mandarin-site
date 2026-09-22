import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/site/service-page";
import { getServicePage, servicePages } from "@/data/services";
import { ProblemPage } from "@/components/site/problem-page";
import { getProblemPage, problemPages } from "@/data/problems";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [...servicePages, ...problemPages].filter((page) => page.directionSlug === "remont-telefonov").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = getServicePage("remont-telefonov", slug) ?? getProblemPage("remont-telefonov", slug);
  if (!data) notFound();
  return data.metadata;
}

export default async function PhoneDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServicePage("remont-telefonov", slug);
  if (service) return <ServicePage data={service} />;
  const problem = getProblemPage("remont-telefonov", slug);
  if (problem) return <ProblemPage data={problem} />;
  notFound();
}
