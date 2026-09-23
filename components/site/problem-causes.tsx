import {
  IconAntennaBarsOff, IconApps, IconBattery2, IconChargingPile, IconCpu, IconDeviceMobile,
  IconDeviceSim, IconDroplet, IconPlug, IconPower, IconSettings, IconSun, IconTemperature,
  IconBug, IconCpu2, IconDeviceFloppy, IconDeviceLaptop, IconPlugConnectedX, IconPropeller, IconWind,
  IconBrandWindows, IconComponents, IconDeviceDesktop,
  IconAntenna, IconBulb, IconCircuitCapacitor, IconDeviceSpeaker, IconLayoutRows, IconAdjustments,
} from "@tabler/icons-react";
import { useId } from "react";
import type { ProblemCauseIcon, ProblemCausesData } from "@/data/problems/types";

const causeIcons = {
  display: IconDeviceMobile,
  connection: IconPlug,
  backlight: IconSun,
  board: IconCpu,
  battery: IconBattery2,
  connector: IconPlug,
  charger: IconChargingPile,
  software: IconSettings,
  apps: IconApps,
  water: IconDroplet,
  heat: IconTemperature,
  sim: IconDeviceSim,
  antenna: IconAntennaBarsOff,
  button: IconPower,
  matrix: IconDeviceLaptop,
  dust: IconWind,
  fan: IconPropeller,
  storage: IconDeviceFloppy,
  memory: IconCpu2,
  virus: IconBug,
  "power-supply": IconPlugConnectedX,
  gpu: IconComponents,
  monitor: IconDeviceDesktop,
  system: IconBrandWindows,
  led: IconBulb,
  tcon: IconLayoutRows,
  speaker: IconDeviceSpeaker,
  tuner: IconAntenna,
  capacitor: IconCircuitCapacitor,
  settings: IconAdjustments,
} satisfies Record<ProblemCauseIcon, typeof IconCpu>;

export function ProblemCauses({ data }: { data: ProblemCausesData }) {
  const headingId = useId();
  if (data.items.length === 0) return null;

  return (
    <section aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <h2 id={headingId} className="mb-4 text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">{data.title}</h2>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
        {data.items.map((item) => {
          const Icon = causeIcons[item.icon];
          return (
            <li key={item.id} className="flex items-start gap-3 rounded-[6px] border border-[#e6e2de] bg-[#fffefd] p-5 dark:border-[#46301f] dark:bg-[#15110e]">
              <Icon aria-hidden="true" stroke={1.5} className="size-10 shrink-0 text-[#ff5000]" />
              <div className="min-w-0">
                <h3 className="text-sm leading-5 font-semibold text-[#171717] dark:text-[#fff7f0]">{item.title}</h3>
                <p className="mt-2 text-xs leading-5 text-muted-foreground">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
