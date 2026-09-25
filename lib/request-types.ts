export const OTHER_PROBLEM = "other";

export type RequestDevice = { id: string; label: string; problems: string[] };

export type RequestFormConfig = {
  devices: RequestDevice[];
  /** Page belongs to one device: skip the device step. */
  deviceId?: string;
  problem?: string;
  /** Page the request was sent from, shown to the workshop. */
  context: string;
};

export type RequestFieldErrors = Partial<Record<"device" | "phone" | "problem" | "consent", string>>;

export type RequestState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string; fieldErrors?: RequestFieldErrors }
  | { status: "fallback"; message: string };

/** Messenger enquiry links open the request form; other links (pages, anchors) stay links. */
export function isEnquiryHref(href: string) {
  return href.startsWith("https://wa.me/");
}

/** "Write to the master" leads to the form now, so the label says what happens. */
export function requestLabel(label: string) {
  return label === "Написать мастеру" ? "Оставить заявку" : label;
}
