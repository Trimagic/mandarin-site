import { computerProblemPages } from "./computers";
import { laptopProblemPages } from "./laptops";
import { phoneProblemPages } from "./phones";
import { tvProblemPages } from "./tvs";
import type { ProblemPageData } from "./types";

export type { ProblemPageData, ProblemCausesData, ProblemCauseIcon, ProblemAdviceData } from "./types";

export const problemPages: ProblemPageData[] = [...phoneProblemPages, ...laptopProblemPages, ...computerProblemPages, ...tvProblemPages];

export function getProblemPage(directionSlug: string, slug: string) {
  return problemPages.find((page) => page.directionSlug === directionSlug && page.slug === slug);
}
