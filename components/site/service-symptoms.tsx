import {
  IconCircleFilled, IconColumns3, IconDeviceMobileOff,
  IconDeviceMobileX, IconHandFinger, IconLayersSubtract,
  IconDeviceMobile, IconDeviceMobileVibration, IconDroplet, IconVolume,
} from "@tabler/icons-react";
import { useId } from "react";
import type { ServiceSymptomIcon, ServiceSymptomsData } from "@/data/services/types";

const symptomIcons = {
  "device-damaged": IconDeviceMobileOff,
  "display-off": IconDeviceMobileX,
  "display-lines": IconColumns3,
  touch: IconHandFinger,
  spot: IconCircleFilled,
  layers: IconLayersSubtract,
  device: IconDeviceMobile,
  sound: IconVolume,
  flicker: IconDeviceMobileVibration,
  water: IconDroplet,
} satisfies Record<ServiceSymptomIcon, typeof IconDeviceMobileOff>;

export function ServiceSymptoms({ data }: { data: ServiceSymptomsData }) {
  const headingId = useId();
  if (data.items.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <h2 id={headingId} className="mb-4 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
        {data.title}
      </h2>
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
        {data.items.map((item) => {
          const Icon = symptomIcons[item.icon];
          return (
            <li key={item.id} className="flex min-h-[144px] flex-col items-center justify-center gap-4 rounded-[6px] border border-[#e6e2de] bg-[#fffefd] px-4 py-5 text-center dark:border-[#46301f] dark:bg-[#15110e]">
              <Icon aria-hidden="true" stroke={1.5} className={item.icon === "spot" ? "size-10 text-[#171717] dark:text-[#fff7f0]" : "size-10 text-[#ff5000]"} />
              <span className="max-w-[125px] text-sm leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
