import { phoneRepairData } from "./phones";
import { computerRepairData } from "./computers";
export { computerRepairData } from "./computers";
import type { DirectionPageData } from "./types";

export { phoneRepairData } from "./phones";
export type { DirectionPageData, DirectionPrice, DirectionService } from "./types";

export const directionPages: DirectionPageData[] = [phoneRepairData, computerRepairData];

export function getDirectionPage(slug: string): DirectionPageData | undefined {
  return directionPages.find((page) => page.slug === slug);
}

/** Child URLs follow the registry: no /uslugi/ or /neispravnosti/ segments. */
export function getDirectionItemHref(directionSlug: string, itemSlug: string) {
  return `/${directionSlug}/${itemSlug}/`;
}
