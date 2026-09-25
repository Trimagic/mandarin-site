import { computerStories } from "./computers";
import { laptopStories } from "./laptops";
import { phoneStories } from "./phones";
import { tvStories } from "./tvs";
import { windowsStories } from "./windows";
import type { RepairStory } from "./types";

export type { RepairCase, RepairCaseReview, RepairStory } from "./types";

// Draft stories and their reviews are sample content: they must never be published.
const showDrafts = process.env.NODE_ENV !== "production";

export const repairStories: RepairStory[] = [...phoneStories, ...laptopStories, ...computerStories, ...tvStories, ...windowsStories].filter((story) => showDrafts || !story.draft);

export function getRepairStory(slug: string) {
  return repairStories.find((story) => story.slug === slug);
}

export function repairStoryHref(slug: string) {
  return `/raboty/${slug}/`;
}

export function storiesForDirection(directionSlug: string) {
  return repairStories.filter((story) => story.directionSlug === directionSlug);
}

export function storiesForService(directionSlug: string, serviceSlug: string) {
  return repairStories.filter((story) => story.directionSlug === directionSlug && story.serviceSlugs.includes(serviceSlug));
}

/** Standalone service with its own page instead of a direction (Windows installation). */
export const WINDOWS_STORY_DIRECTION = "ustanovka-windows";

/** Pages of the services a story covers. */
export function storyServiceHrefs(story: RepairStory) {
  if (story.directionSlug === WINDOWS_STORY_DIRECTION) return [`/${WINDOWS_STORY_DIRECTION}/`];
  return story.serviceSlugs.map((slug) => `/${story.directionSlug}/${slug}/`);
}

/** Problem pages a story is about; "direction/slug" points to a problem in another direction. */
export function storyProblemRefs(story: RepairStory) {
  return story.problemSlugs.map((ref) => {
    const [directionSlug, slug] = ref.includes("/") ? ref.split("/") : [story.directionSlug, ref];
    return { directionSlug, slug };
  });
}

// Nearly every problem links to diagnostics, so it says nothing about which stories are relevant.
const genericServices = new Set(["diagnostika", "diagnostika-pk"]);

/**
 * Stories about this problem first, then stories about services the problem's price list links to
 * (Windows installation included), ordered by how many of those services they share.
 */
export function storiesForProblem(directionSlug: string, problemSlug: string, linkedHrefs: string[]) {
  const relevant = new Set(linkedHrefs.filter((href) => !genericServices.has(href.split("/").at(-2) ?? "")));
  return repairStories
    .map((story) => {
      const direct = storyProblemRefs(story).some((ref) => ref.directionSlug === directionSlug && ref.slug === problemSlug);
      const shared = storyServiceHrefs(story).filter((href) => relevant.has(href)).length;
      return { story, score: (direct ? 100 : 0) + shared };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .map(({ story }) => story);
}

/** Reviews taken round-robin, one per story at a time, so a long list covers different repairs. */
export function storyReviews(stories: RepairStory[], limit = 9) {
  const longest = Math.max(0, ...stories.map((story) => story.reviews.length));
  const reviews = Array.from({ length: longest }, (_, round) => stories.flatMap((story) => (story.reviews[round] ? [story.reviews[round]] : []))).flat();
  return reviews.slice(0, limit).map((review) => ({ name: review.author, text: review.text, rating: review.rating }));
}
