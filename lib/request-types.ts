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
