import type { DirectionPageData } from "@/data/directions";

export type ServiceSymptomIcon =
  | "device-damaged"
  | "display-off"
  | "display-lines"
  | "touch"
  | "spot"
  | "layers"
  | "device"
  | "sound"
  | "flicker"
  | "water";

export type ServiceSymptomsData = {
  title: string;
  items: { id: string; title: string; icon: ServiceSymptomIcon }[];
};

export type ServiceIncludedIcon = "diagnostics" | "part" | "repair" | "check";

export type ServiceIncludedData = {
  title: string;
  items: { id: string; title: string; description: string; icon: ServiceIncludedIcon }[];
};

export type ServicePageData = Pick<DirectionPageData, "slug" | "metadata" | "breadcrumbs" | "hero"> & {
  directionSlug: string;
  symptoms?: ServiceSymptomsData;
  included?: ServiceIncludedData;
  pricing?: ServicePricingData;
  comparison?: ServiceComparisonData;
  process?: DirectionPageData["process"];
  beforeAfter?: ServiceBeforeAfterData;
  quality?: ServiceQualityData;
  reviews?: DirectionPageData["reviews"];
  faq?: DirectionPageData["faq"];
  contact?: DirectionPageData["contact"];
};

export type ServiceQualityIcon = "warranty" | "quality" | "privacy" | "price" | "master" | "clock";

export type ServiceQualityData = {
  title: string;
  items: { id: string; title: string; description: string; icon: ServiceQualityIcon }[];
};

export type ServiceBeforeAfterData = {
  title: string;
  image: { src: string; alt: string };
  beforeLabel: string;
  afterLabel: string;
  notice?: string;
};

export type ServiceComparisonData = {
  title: string;
  items: {
    id: string;
    title: string;
    features: string[];
    note?: string;
  }[];
};

export type ServicePricingData = {
  title: string;
  items: {
    id: string;
    title: string;
    price: string;
    action?: { label: string; href: string };
  }[];
  callout?: {
    title: string;
    description: string;
    icon?: "calculator" | "diagnostics";
    action: { label: string; href: string };
  };
};
