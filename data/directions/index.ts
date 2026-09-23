import { phoneRepairData } from "./phones";
import { laptopRepairData } from "./laptops";
import { computerRepairData } from "./computers";
import { tvRepairData } from "./tvs";
import type { DirectionPageData } from "./types";

export { phoneRepairData } from "./phones";
export { laptopRepairData } from "./laptops";
export { computerRepairData } from "./computers";
export { tvRepairData } from "./tvs";
export type { DirectionPageData, DirectionPrice, DirectionService } from "./types";

export const directionPages: DirectionPageData[] = [phoneRepairData, laptopRepairData, computerRepairData, tvRepairData];

export function getDirectionPage(slug: string): DirectionPageData | undefined {
  return directionPages.find((page) => page.slug === slug);
}

/** Child URLs follow the registry: no /uslugi/ or /neispravnosti/ segments. */
export function getDirectionItemHref(directionSlug: string, itemSlug: string) {
  return `/${directionSlug}/${itemSlug}/`;
}
