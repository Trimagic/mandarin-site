import { DeviceProblemsTabs, type DeviceProblemsTab } from "@/components/site/device-problems-tabs";
import { getDirectionItemHref } from "@/data/directions";
import { getProblemPage } from "@/data/problems";
import { getServicePage } from "@/data/services";

// Symptoms such as "broken screen" live on service pages, so a slug may point to either kind of page.
const devices: { id: string; label: string; directionSlug: string; problems: { title: string; slug: string }[] }[] = [
  { id: "phone", label: "Телефон", directionSlug: "remont-telefonov", problems: [
    { title: "Не включается", slug: "telefon-ne-vklyuchaetsya" },
    { title: "Разбит экран", slug: "zamena-ekrana" },
    { title: "Нет изображения", slug: "net-izobrazheniya" },
    { title: "Быстро разряжается", slug: "bystro-razryazhaetsya" },
    { title: "Не заряжается", slug: "telefon-ne-zaryazhaetsya" },
    { title: "Проблемы со звуком", slug: "remont-dinamika-i-mikrofona" },
    { title: "Попала вода", slug: "remont-posle-vody" },
    { title: "Перезагружается", slug: "telefon-perezagruzhaetsya" },
  ] },
  { id: "laptop", label: "Ноутбук", directionSlug: "remont-noutbukov", problems: [
    { title: "Не включается", slug: "noutbuk-ne-vklyuchaetsya" },
    { title: "Разбит экран", slug: "zamena-matricy" },
    { title: "Перегревается", slug: "noutbuk-greetsya" },
    { title: "Не заряжается", slug: "noutbuk-ne-zaryazhaetsya" },
    { title: "Тормозит", slug: "noutbuk-tormozit" },
    { title: "Шумит", slug: "noutbuk-shumit" },
    { title: "Сам выключается", slug: "noutbuk-vyklyuchaetsya" },
    { title: "Залили жидкостью", slug: "remont-posle-zalitiya" },
  ] },
  { id: "desktop", label: "Компьютер", directionSlug: "remont-kompyuterov", problems: [
    { title: "Не включается", slug: "kompyuter-ne-vklyuchaetsya" },
    { title: "Нет изображения", slug: "net-izobrazheniya" },
    { title: "Перезагружается", slug: "kompyuter-perezagruzhaetsya" },
    { title: "Тормозит", slug: "kompyuter-tormozit" },
    { title: "Синий экран", slug: "siniy-ekran" },
    { title: "Сильно шумит", slug: "shumit-kompyuter" },
    { title: "Не загружается Windows", slug: "ne-zagruzhaetsya-windows" },
    { title: "Перегревается", slug: "chistka-i-obsluzhivanie" },
  ] },
  { id: "tv", label: "Телевизор", directionSlug: "remont-televizorov", problems: [
    { title: "Не включается", slug: "televizor-ne-vklyuchaetsya" },
    { title: "Есть звук, нет изображения", slug: "net-izobrazheniya-zvuk-est" },
    { title: "Полосы на экране", slug: "polosy-na-ekrane" },
    { title: "Нет звука", slug: "net-zvuka" },
    { title: "Сам выключается", slug: "vklyuchaetsya-i-vyklyuchaetsya" },
    { title: "Зависает и перезагружается", slug: "televizor-zavisaet" },
    { title: "Не видит HDMI или флешку", slug: "remont-razemov" },
    { title: "Не ловит каналы", slug: "remont-materinskoy-platy" },
  ] },
];

export function DeviceProblems() {
  const tabs: DeviceProblemsTab[] = devices.map((device) => ({
    id: device.id,
    label: device.label,
    otherHref: `/${device.directionSlug}/`,
    problems: device.problems.map(({ title, slug }) => {
      const hasPage = Boolean(getProblemPage(device.directionSlug, slug) ?? getServicePage(device.directionSlug, slug));
      // Until the page exists, offer a real enquiry instead of a 404.
      const enquiry = `https://wa.me/375291506888?text=${encodeURIComponent(`Здравствуйте! ${device.label}: ${title.toLowerCase()}. Подскажите, пожалуйста, по ремонту.`)}`;
      return { title, href: hasPage ? getDirectionItemHref(device.directionSlug, slug) : enquiry, external: !hasPage };
    }),
  }));

  return <DeviceProblemsTabs devices={tabs} />;
}
