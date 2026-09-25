export type RepairCaseReview = {
  author: string;
  text: string;
  rating: number;
};

/** One repair inside a story. */
export type RepairCase = {
  id: string;
  serviceSlug: string;
  device: string;
  title: string;
  /** cutout: a transparent product render, shown whole on a warm backdrop instead of cropped like a photo. */
  image: { src: string; alt: string; cutout?: boolean };
  complaint: string;
  diagnosis: string;
  work: string;
  duration: string;
  price: string;
};

/** A workshop story: one kind of fault explained through several similar repairs. */
export type RepairStory = {
  slug: string;
  /** Sample content awaiting real data; shown unless HIDE_DRAFTS=1. */
  draft?: boolean;
  directionSlug: string;
  serviceSlugs: string[];
  problemSlugs: string[];
  title: string;
  excerpt: string;
  metadata: { title: string; description: string };
  intro: string;
  why: string[];
  cases: RepairCase[];
  reviews: RepairCaseReview[];
};
