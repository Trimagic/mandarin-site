import type { DirectionPageData } from "@/data/directions";
import type { ProblemAdviceData } from "@/data/problems/types";

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
  | "water"
  | "battery"
  | "battery-swollen"
  | "charging"
  | "power"
  | "reboot"
  | "heat"
  | "camera"
  | "blur"
  | "mic"
  | "sound-off"
  | "ear"
  | "sim"
  | "no-signal"
  | "lock"
  | "software"
  | "slow"
  | "laptop-off"
  | "laptop-damaged"
  | "keyboard"
  | "fan"
  | "noise"
  | "storage"
  | "usb"
  | "touchpad"
  | "pc-off"
  | "pc"
  | "bsod"
  | "windows"
  | "upgrade"
  | "tv-off"
  | "tv"
  | "remote"
  | "backlight-off"
  | "antenna"
  | "speaker-off"
  | "hdmi";

export type ServiceSymptomsData = {
  title: string;
  items: { id: string; title: string; icon: ServiceSymptomIcon }[];
};

export type ServiceIncludedIcon = "diagnostics" | "part" | "repair" | "check" | "cleaning" | "data" | "component" | "laptop" | "test" | "desktop" | "selection" | "tv" | "backlight";

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
  advice?: ProblemAdviceData;
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
