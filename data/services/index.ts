import { phoneRepairData } from "@/data/directions";
import type { ServicePageData } from "./types";

function screenEnquiry(subject: string) {
  return `${phoneRepairData.hero.secondaryAction.href}?text=${encodeURIComponent(`Здравствуйте! Интересует ${subject}. Моя модель телефона: `)}`;
}

export type { ServicePageData, ServiceSymptomsData, ServiceSymptomIcon, ServiceIncludedData, ServiceIncludedIcon, ServicePricingData, ServiceComparisonData } from "./types";

export const servicePages: ServicePageData[] = [
  {
    slug: "zamena-ekrana",
    directionSlug: "remont-telefonov",
    metadata: {
      title: "Замена экрана телефона в Борисове — Mandarin Сервис",
      description: "Замена экрана телефона в Борисове. Подберём дисплей, согласуем стоимость и проверим работу сенсора после ремонта.",
    },
    breadcrumbs: [
      ...phoneRepairData.breadcrumbs,
      { label: "Замена экрана", href: "/remont-telefonov/zamena-ekrana/" },
    ],
    symptoms: {
      title: "Когда нужна замена экрана",
      items: [
        { id: "cracks", title: "Трещины и сколы", icon: "device-damaged" },
        { id: "no-image", title: "Нет изображения", icon: "display-off" },
        { id: "lines", title: "Полосы на экране", icon: "display-lines" },
        { id: "touch", title: "Не работает сенсор", icon: "touch" },
        { id: "spots", title: "Чёрные пятна", icon: "spot" },
        { id: "peeling", title: "Экран отклеивается", icon: "layers" },
      ],
    },
    included: {
      title: "Что входит в услугу",
      items: [
        {
          id: "diagnostics",
          title: "Бесплатная диагностика",
          description: "Проверяем экран и другие компоненты устройства, чтобы точно определить проблему.",
          icon: "diagnostics",
        },
        {
          id: "display-selection",
          title: "Подбор дисплея",
          description: "Подбираем оптимальный экран под вашу модель: совместимый или оригинальный.",
          icon: "part",
        },
        {
          id: "replacement",
          title: "Аккуратная замена",
          description: "Профессионально заменяем экран с соблюдением всех технологий и стандартов.",
          icon: "repair",
        },
        {
          id: "verification",
          title: "Проверка устройства",
          description: "Проверяем работу дисплея, сенсора и всех функций. Даём рекомендации.",
          icon: "check",
        },
      ],
    },
    pricing: {
      title: "Варианты и стоимость",
      // Preliminary values from the mockup; confirm before publishing.
      items: [
        { id: "glass", title: "Замена стекла", price: "от 100 BYN", action: { label: "Подробнее", href: screenEnquiry("замена стекла") } },
        { id: "module", title: "Дисплейный модуль", price: "от 120 BYN", action: { label: "Подробнее", href: screenEnquiry("замена дисплейного модуля") } },
        { id: "original", title: "Оригинальный дисплей", price: "Цена после диагностики", action: { label: "Подробнее", href: screenEnquiry("оригинальный дисплей") } },
        { id: "diagnostics", title: "Диагностика", price: "Бесплатно", action: { label: "Подробнее", href: screenEnquiry("диагностика экрана") } },
      ],
      callout: {
        title: "Подберём оптимальный вариант экрана",
        description: "Уточним модель, проверим наличие и рассчитаем точную стоимость.",
        action: { label: "Рассчитать стоимость", href: screenEnquiry("расчёт стоимости замены экрана") },
      },
    },
    comparison: {
      title: "Какой дисплей выбрать",
      items: [
        {
          id: "compatible",
          title: "Совместимый",
          features: ["Отличное качество изображения", "Полная совместимость", "Доступная цена"],
          note: "Оптимальный выбор",
        },
        {
          id: "refurbished-original",
          title: "Оригинальный восстановленный",
          features: ["Снят с оригинального устройства", "Высокое качество и надёжность", "Выше стоимость"],
          note: "Баланс цены и качества",
        },
        {
          id: "original",
          title: "Оригинальный",
          features: ["100% оригинал производителя", "Максимальный ресурс и яркость", "Лучшая цветопередача"],
          note: "Премиум качество",
        },
      ],
    },
    process: {
      title: "Как проходит замена",
      items: [
        { title: "Обращение", text: "Свяжитесь с нами удобным способом." },
        { title: "Диагностика", text: "Проверяем устройство, подбираем экран и согласуем стоимость." },
        { title: "Замена экрана", text: "Аккуратно устанавливаем новый дисплей." },
        { title: "Проверка и выдача", text: "Проверяем работу телефона и отдаём устройство." },
      ],
    },
    beforeAfter: {
      title: "До и после ремонта",
      image: {
        src: "/works/phone-screen-before-after-v1.png",
        alt: "Иллюстрация замены экрана: слева телефон с разбитым стеклом, справа — тот же телефон с новым экраном.",
      },
      beforeLabel: "До",
      afterLabel: "После",
      notice: "Иллюстрации сгенерированы. Заменим их фотографиями реальной работы мастерской.",
    },
    quality: {
      title: "Гарантия и качество",
      items: [
        { id: "warranty", title: "Гарантия до 12 месяцев", description: "На экран и выполненные работы.", icon: "warranty" },
        { id: "parts", title: "Проверенные экраны", description: "Качественные дисплеи от надёжных поставщиков.", icon: "quality" },
        { id: "data", title: "Сохраняем данные", description: "Ваши данные остаются в безопасности.", icon: "privacy" },
        { id: "price", title: "Цена согласовывается", description: "Никаких скрытых платежей и доплат.", icon: "price" },
      ],
    },
    reviews: { title: "Отзывы клиентов", items: [] },
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Сколько времени занимает замена экрана?", answer: "Срок зависит от модели телефона и наличия дисплея. Уточним время замены после проверки устройства и подбора запчасти." },
        { question: "Останутся ли мои данные после замены?", answer: "Обычно замена экрана не требует удаления данных. До ремонта обсудим состояние устройства и возможные риски. Если телефон работает, рекомендуем заранее сделать резервную копию." },
        { question: "Какой экран лучше выбрать?", answer: "Подберём варианты под вашу модель и бюджет. Объясним различия совместимого, восстановленного оригинального и оригинального дисплея по качеству изображения, стоимости и наличию." },
        { question: "Есть ли гарантия на замену экрана?", answer: "Да. Срок и условия гарантии зависят от выбранного дисплея и выполненных работ — сообщим их при согласовании ремонта." },
      ],
    },
    contact: {
      title: "Заменим экран вашего телефона",
      description: "Сообщите модель телефона — подберём дисплей, уточним стоимость и запишем на ремонт.",
      action: { label: "Написать мастеру", href: screenEnquiry("замена экрана") },
    },
    hero: {
      title: "Замена экрана",
      accent: "телефона",
      description: "Установим новый дисплей, проверим работу сенсора и сохраним ваши данные.",
      image: { src: "/hero/phone-screen-replacement-v1.png", alt: "Телефон с разбитым экраном и новый дисплей для замены" },
      backgrounds: phoneRepairData.hero.backgrounds,
      primaryAction: {
        label: "Узнать стоимость",
        href: "https://wa.me/375291506888?text=" + encodeURIComponent("Здравствуйте! Хочу узнать стоимость замены экрана телефона. Моя модель: "),
      },
      secondaryAction: phoneRepairData.hero.secondaryAction,
      // Values from the design mockup; confirm with the workshop before publishing.
      benefits: [
        { title: "От 120 BYN", description: "", icon: "price" },
        { title: "От 60 минут", description: "", icon: "clock" },
        { title: "Гарантия до года", description: "", icon: "shield" },
      ],
    },
  },
];

export function getServicePage(directionSlug: string, slug: string) {
  return servicePages.find((page) => page.directionSlug === directionSlug && page.slug === slug);
}
