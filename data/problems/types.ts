import type { DirectionPageData } from "@/data/directions";
import type { ServicePricingData, ServiceQualityData, ServiceSymptomsData } from "@/data/services/types";

export type ProblemCauseIcon = "display" | "connection" | "backlight" | "board";

export type ProblemCausesData = {
  title: string;
  items: { id: string; title: string; description: string; icon: ProblemCauseIcon }[];
};

export type ProblemPageData = Pick<DirectionPageData, "slug" | "metadata" | "breadcrumbs" | "hero"> & {
  directionSlug: string;
  symptoms?: ServiceSymptomsData;
  causes?: ProblemCausesData;
  pricing?: ServicePricingData;
  process?: DirectionPageData["process"];
  advice?: ProblemAdviceData;
  quality?: ServiceQualityData;
  faq?: DirectionPageData["faq"];
  contact?: DirectionPageData["contact"];
};

export type ProblemAdviceData = {
  panels: {
    id: string;
    tone: "help" | "warning";
    title: string;
    items: string[];
    note?: string;
  }[];
};
