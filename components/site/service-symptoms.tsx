import {
  IconAntennaBarsOff, IconBattery1, IconBatteryExclamation, IconBlur, IconCameraOff,
  IconCircleFilled, IconColumns3, IconDeviceMobileOff, IconDeviceSim, IconEarOff,
  IconDeviceMobileX, IconHandFinger, IconHourglass, IconLayersSubtract, IconLock,
  IconDeviceMobile, IconDeviceMobileVibration, IconDroplet, IconMicrophoneOff, IconPlugX,
  IconPower, IconRefresh, IconSettings, IconTemperature, IconVolume, IconVolumeOff,
  IconDeviceFloppy, IconDeviceLaptop, IconDeviceLaptopOff, IconHandClick, IconKeyboardOff, IconPropeller, IconUsb, IconWaveSine,
  IconAlertTriangle, IconArrowUpCircle, IconBrandWindows, IconDeviceDesktop, IconDeviceDesktopOff,
  IconAntenna, IconBulbOff, IconDeviceRemote, IconDeviceSpeakerOff, IconDeviceTv, IconDeviceTvOff, IconPlugConnected,
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
  battery: IconBattery1,
  "battery-swollen": IconBatteryExclamation,
  charging: IconPlugX,
  power: IconPower,
  reboot: IconRefresh,
  heat: IconTemperature,
  camera: IconCameraOff,
  blur: IconBlur,
  mic: IconMicrophoneOff,
  "sound-off": IconVolumeOff,
  ear: IconEarOff,
  sim: IconDeviceSim,
  "no-signal": IconAntennaBarsOff,
  lock: IconLock,
  software: IconSettings,
  slow: IconHourglass,
  "laptop-off": IconDeviceLaptopOff,
  "laptop-damaged": IconDeviceLaptop,
  keyboard: IconKeyboardOff,
  fan: IconPropeller,
  noise: IconWaveSine,
  storage: IconDeviceFloppy,
  usb: IconUsb,
  touchpad: IconHandClick,
  "pc-off": IconDeviceDesktopOff,
  pc: IconDeviceDesktop,
  bsod: IconAlertTriangle,
  windows: IconBrandWindows,
  upgrade: IconArrowUpCircle,
  "tv-off": IconDeviceTvOff,
  tv: IconDeviceTv,
  remote: IconDeviceRemote,
  "backlight-off": IconBulbOff,
  antenna: IconAntenna,
  "speaker-off": IconDeviceSpeakerOff,
  hdmi: IconPlugConnected,
} satisfies Record<ServiceSymptomIcon, typeof IconDeviceMobileOff>;

// Same layout as the Windows package block: one panel with open cells. Rows are separated by a gap,
// so the vertical column rules are short strokes that never meet. The row rules sit in that
// gap and stop short of the column rules. Lists always hold 4 or 6 items, so every row is full.
const itemLayout = {
  6: "sm:max-lg:[&:nth-child(odd)]:pl-0 sm:max-lg:[&:nth-child(even)]:border-l lg:px-6 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n+2)]:border-l lg:[&:nth-child(3n+3)]:border-l",
  4: "sm:max-lg:[&:nth-child(odd)]:pl-0 sm:max-lg:[&:nth-child(even)]:border-l lg:px-6 lg:[&:nth-child(4n+1)]:pl-0 lg:[&:nth-child(4n+2)]:border-l lg:[&:nth-child(4n+3)]:border-l lg:[&:nth-child(4n+4)]:border-l",
};

/** Rule above an item. Visible between list items on mobile and between rows from tablet up. */
function rowRuleClassName(index: number, perRow: number) {
  const tabletColumn = index % 2;
  const desktopColumn = index % perRow;
  return [
    "absolute inset-x-0 top-0 border-t border-[#e6e2de] sm:-top-4 dark:border-[#46301f]",
    index < 2 && "sm:max-lg:hidden",
    index < perRow && "lg:hidden",
    // Inset from the column rules so the lines never touch.
    tabletColumn === 0 ? "sm:max-lg:right-4" : "sm:max-lg:left-4",
    desktopColumn > 0 && "lg:left-6",
    desktopColumn < perRow - 1 && "lg:right-6",
  ].filter(Boolean).join(" ");
}

export function ServiceSymptoms({ data, columns = 6, note }: { data: ServiceSymptomsData; columns?: 4 | 6; note?: string }) {
  const headingId = useId();
  if (data.items.length === 0) return null;
  const perRow = columns === 4 ? 4 : 3;

  return (
    <section aria-labelledby={headingId} className="mx-auto w-full max-w-[1440px] px-5 pb-10 md:px-6 xl:px-12">
      <div className="rounded-lg border border-[#e6e2de] bg-[#fffefd] px-5 pt-5 md:px-7 md:pt-6 dark:border-[#46301f] dark:bg-[#15110e]">
        <h2 id={headingId} className="text-2xl leading-tight font-extrabold tracking-[-0.035em] text-[#171717] xl:text-[28px] dark:text-[#fff7f0]">
          {data.title}
        </h2>
        <ul className={`mt-4 grid grid-cols-1 border-t border-[#e6e2de] py-2 sm:grid-cols-2 sm:gap-y-8 sm:py-6 dark:border-[#46301f] ${columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {data.items.map((item, index) => {
            const Icon = symptomIcons[item.icon];
            return (
              <li key={item.id} className={`relative flex items-center gap-4 border-[#e6e2de] py-4 sm:px-4 sm:py-1 dark:border-[#46301f] ${itemLayout[columns]}`}>
                {index > 0 && <span aria-hidden="true" className={rowRuleClassName(index, perRow)} />}
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#ff5000]/[0.08] dark:bg-[#ff5000]/[0.12]">
                  <Icon aria-hidden="true" stroke={1.5} className={item.icon === "spot" ? "size-7 text-[#171717] dark:text-[#fff7f0]" : "size-7 text-[#ff5000]"} />
                </span>
                <span className="text-sm leading-5 font-bold text-[#171717] dark:text-[#fff7f0]">{item.title}</span>
              </li>
            );
          })}
        </ul>
        {note && <p className="border-t border-[#e6e2de] py-4 text-xs leading-5 text-muted-foreground dark:border-[#46301f]">{note}</p>}
      </div>
    </section>
  );
}
