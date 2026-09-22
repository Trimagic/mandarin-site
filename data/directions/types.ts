export type PageLink = { label: string; href: string };

export type DirectionPrice =
  | { kind: "from"; amount: number; currency: "BYN"; note?: string }
  | { kind: "by-model" | "after-diagnosis" | "negotiated" };

export type DirectionService = {
  slug: string;
  title: string;
  description: string;
  price: DirectionPrice;
};

export type DirectionPageData = {
  slug: string;
  metadata: { title: string; description: string };
  breadcrumbs: PageLink[];
  hero: {
    title: string;
    accent: string;
    description: string;
    image: { src: string; alt: string };
    backgrounds: { desktop: string; tablet: string; mobile: string };
    badge?: string;
    primaryAction: PageLink;
    secondaryAction: PageLink;
    benefits: { title: string; description: string; icon?: "price" | "clock" | "shield" | "diagnostics" }[];
  };
  services: {
    title: string;
    priceNotice: string;
    pricesVerified: boolean;
    items: DirectionService[];
  };
  problems: {
    title: string;
    items: { slug: string; title: string; causes: string; serviceSlugs: string[] }[];
  };
  devices: { title: string; brands: string[]; note: string };
  conditions: { title: string; items: { title: string; text: string }[] };
  process: { title: string; items: { title: string; text: string }[] };
  // Empty collections are hidden by the template until real materials are supplied.
  works: { title: string; notice?: string; items: { title: string; description: string; image: string; alt: string }[] };
  reviews: { title: string; items: { author: string; text: string; rating: number; sourceUrl?: string }[] };
  faq: { title: string; items: { question: string; answer: string }[] };
  contact: { title: string; description: string; action: PageLink };
};
