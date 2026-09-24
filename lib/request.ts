import { directionPages } from "@/data/directions";

import type { RequestDevice, RequestFormConfig } from "@/lib/request-types";

const deviceLabels: Record<string, string> = {
  "remont-telefonov": "Телефон",
  "remont-noutbukov": "Ноутбук",
  "remont-kompyuterov": "Компьютер",
  "remont-televizorov": "Телевизор",
};

const devices: RequestDevice[] = directionPages.map((page) => ({
  id: page.slug,
  label: deviceLabels[page.slug] ?? page.hero.title,
  problems: page.problems.items.map((item) => item.title),
}));

export function homeRequestConfig(): RequestFormConfig {
  return { devices, context: "Главная страница" };
}

export function directionRequestConfig(
  directionSlug: string,
  { context, problem, extraProblems = [] }: { context: string; problem?: string; extraProblems?: string[] },
): RequestFormConfig {
  const device = devices.find((item) => item.id === directionSlug);
  if (!device) return { devices, context };
  const problems = [...extraProblems, ...device.problems.filter((item) => !extraProblems.includes(item))];
  return { devices: [{ ...device, problems }], deviceId: device.id, problem, context };
}

export function problemTitle(directionSlug: string, problemSlug: string) {
  return directionPages.find((page) => page.slug === directionSlug)?.problems.items.find((item) => item.slug === problemSlug)?.title;
}

export function windowsRequestConfig(context: string): RequestFormConfig {
  return {
    devices: [{ id: "windows", label: "Компьютер или ноутбук", problems: ["Установка Windows", "Переустановка с сохранением файлов", "Windows не загружается"] }],
    deviceId: "windows",
    problem: "Установка Windows",
    context,
  };
}
