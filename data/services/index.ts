import { computerServicePages } from "./computers";
import { laptopServicePages } from "./laptops";
import { phoneServicePages } from "./phones";
import { tvServicePages } from "./tvs";
import type { ServicePageData } from "./types";

export type { ServicePageData, ServiceSymptomsData, ServiceSymptomIcon, ServiceIncludedData, ServiceIncludedIcon, ServicePricingData, ServiceComparisonData } from "./types";

export const servicePages: ServicePageData[] = [...phoneServicePages, ...laptopServicePages, ...computerServicePages, ...tvServicePages];

export function getServicePage(directionSlug: string, slug: string) {
  return servicePages.find((page) => page.directionSlug === directionSlug && page.slug === slug);
}
