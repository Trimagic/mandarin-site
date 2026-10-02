import { getDirectionItemHref, phoneRepairData } from "@/data/directions";
import type { ServicePageData } from "@/data/services";

// Apple repair sits outside the direction catalogues: it spans phones, tablets and laptops.
// Screen, glass, battery and charging port of iPhone live on the phone service pages and are linked from here.
const path = "/remont-apple/";
const phone = (slug: string) => getDirectionItemHref(phoneRepairData.slug, slug);

function enquiry(subject: string) {
  return `${phoneRepairData.hero.secondaryAction.href}?text=${encodeURIComponent(`Здравствуйте! Интересует ${subject}. Модель устройства: `)}`;
}

export const appleRepairData: ServicePageData = {
  slug: "remont-apple",
  directionSlug: phoneRepairData.slug,
  path,
  metadata: {
    title: "Ремонт iPhone, iPad и MacBook в Борисове — Mandarin Сервис",
    description: "Ремонт техники Apple в Борисове: iPhone, iPad и MacBook. Face ID, экраны и аккумуляторы iPad, чистка, батарея и клавиатура MacBook. iCloud не снимаем.",
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Ремонт техники Apple", href: path },
  ],
  hero: {
    title: "Ремонт iPhone,",
    accent: "iPad и MacBook",
    description: "Ремонтируем технику Apple в своей мастерской в Борисове: все модели iPhone, iPad, MacBook Air и MacBook Pro. Цену называем до начала работ.",
    image: { src: "/hero/apple-repair-cutout-v1.png", alt: "Ноутбук, планшет и смартфон с оранжевыми волнами на экранах" },
    backgrounds: phoneRepairData.hero.backgrounds,
    primaryAction: { label: "Узнать стоимость", href: enquiry("ремонт техники Apple") },
    secondaryAction: phoneRepairData.hero.secondaryAction,
    benefits: [
      { title: "iPhone, iPad, MacBook", description: "", icon: "price" },
      { title: "Цена до ремонта", description: "", icon: "diagnostics" },
      { title: "Гарантия на работы", description: "", icon: "shield" },
    ],
  },
  symptoms: {
    title: "С чем обращаются",
    items: [
      { id: "face-id", title: "Не работает Face ID", icon: "lock" },
      { id: "ipad-screen", title: "Разбит экран iPad", icon: "device-damaged" },
      { id: "ipad-battery", title: "iPad быстро садится", icon: "battery" },
      { id: "macbook-heat", title: "MacBook греется и шумит", icon: "heat" },
      { id: "macbook-battery", title: "MacBook не держит заряд", icon: "battery-swollen" },
      { id: "macbook-keyboard", title: "Не работают клавиши MacBook", icon: "keyboard" },
    ],
  },
  included: {
    title: "Что ремонтируем",
    items: [
      { id: "iphone", title: "iPhone", description: "Все модели от iPhone 5s до iPhone 16 Pro Max: Face ID, плата, камера, динамики.", icon: "repair" },
      { id: "ipad", title: "iPad", description: "Замена экрана и аккумулятора, разъём зарядки, кнопки.", icon: "part" },
      { id: "macbook", title: "MacBook", description: "Чистка и замена термопасты, аккумулятор, клавиатура, ремонт после залития.", icon: "laptop" },
      { id: "check", title: "Проверка", description: "Проверяем все функции устройства после ремонта вместе с вами.", icon: "check" },
    ],
  },
  pricing: {
    title: "Стоимость",
    items: [
      { id: "face-id", title: "Ремонт Face ID", price: "после диагностики", action: { label: "Уточнить", href: enquiry("ремонт Face ID") } },
      { id: "ipad-screen", title: "Замена экрана iPad", price: "по модели", action: { label: "Узнать для модели", href: enquiry("замена экрана iPad") } },
      { id: "ipad-battery", title: "Замена аккумулятора iPad", price: "по модели", action: { label: "Узнать для модели", href: enquiry("замена аккумулятора iPad") } },
      { id: "macbook-cleaning", title: "Чистка MacBook, замена термопасты", price: "40–70 BYN", action: { label: "Записаться", href: enquiry("чистка MacBook") } },
      { id: "macbook-battery", title: "Замена аккумулятора MacBook", price: "по модели", action: { label: "Узнать для модели", href: enquiry("замена аккумулятора MacBook") } },
      { id: "macbook-keyboard", title: "Замена клавиатуры MacBook", price: "по модели", action: { label: "Узнать для модели", href: enquiry("замена клавиатуры MacBook") } },
      { id: "iphone-screen", title: "Замена экрана iPhone", price: "по модели", action: { label: "Подробнее", href: phone("zamena-ekrana") } },
      { id: "iphone-battery", title: "Замена аккумулятора iPhone", price: "по модели", action: { label: "Подробнее", href: phone("zamena-akkumulyatora") } },
    ],
    callout: {
      title: "Назовём цену для вашей модели",
      description: "Напишите модель iPhone, iPad или MacBook и что случилось — ответим со стоимостью и сроком.",
      icon: "calculator",
      action: { label: "Написать мастеру", href: enquiry("ремонт техники Apple") },
    },
  },
  process: {
    title: "Как проходит ремонт",
    items: [
      { title: "Обращение", text: "Сообщите модель устройства и что случилось." },
      { title: "Диагностика", text: "Находим причину и называем цену и срок." },
      { title: "Ремонт", text: "Ремонтируем только после вашего согласия." },
      { title: "Проверка и выдача", text: "Проверяем устройство вместе с вами." },
    ],
  },
  advice: {
    panels: [
      { id: "icloud", tone: "warning", title: "iCloud не снимаем", items: ["Блокировку активации iCloud и чужие Apple ID не снимаем.", "Перед ремонтом лучше выключить «Найти iPhone», если устройство включается."] },
      { id: "data", tone: "help", title: "Что с данными", items: ["Большинство ремонтов не затрагивает данные.", "Если телефон включается, сделайте резервную копию в iCloud заранее."], note: "О рисках для данных предупреждаем до начала работ." },
    ],
  },
  quality: {
    title: "Гарантия и качество",
    items: [
      { id: "warranty", title: "Гарантия на работы", description: "Срок зависит от вида работ и детали — сообщим до ремонта.", icon: "warranty" },
      { id: "parts", title: "Проверенные запчасти", description: "Обсуждаем варианты деталей и их различия заранее.", icon: "quality" },
      { id: "data", title: "Бережно к данным", description: "Заранее предупреждаем, если есть риск для информации.", icon: "privacy" },
      { id: "price", title: "Цена согласовывается", description: "Без скрытых платежей и доплат после ремонта.", icon: "price" },
    ],
  },
  faq: {
    title: "Частые вопросы",
    items: [
      { question: "Какие модели iPhone ремонтируете?", answer: "Все модели от iPhone 5s до iPhone 16 Pro Max." },
      { question: "Снимаете ли iCloud?", answer: "Нет. Блокировку активации iCloud и чужие Apple ID не снимаем." },
      { question: "Сколько стоит чистка MacBook?", answer: "40–70 BYN в зависимости от модели. Точную цену назовём до начала работ." },
      { question: "Где цены на экран и аккумулятор iPhone?", answer: "На страницах замены экрана и замены аккумулятора телефона — там же цены для iPhone." },
    ],
  },
  contact: {
    title: "Отремонтируем вашу технику Apple",
    description: "Сообщите модель и опишите проблему — подскажем стоимость и срок.",
    action: { label: "Написать мастеру", href: enquiry("ремонт техники Apple") },
  },
};
