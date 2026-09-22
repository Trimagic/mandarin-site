import { phoneRepairData } from "@/data/directions";
import type { ProblemPageData } from "./types";

function displayEnquiry(subject: string) {
  return `${phoneRepairData.hero.secondaryAction.href}?text=${encodeURIComponent(`Здравствуйте! На телефоне нет изображения. Интересует ${subject}. Моя модель: `)}`;
}

export type { ProblemPageData, ProblemCausesData, ProblemCauseIcon, ProblemAdviceData } from "./types";

export const problemPages: ProblemPageData[] = [
  {
    slug: "net-izobrazheniya",
    directionSlug: "remont-telefonov",
    metadata: {
      title: "Нет изображения на дисплее телефона — ремонт в Борисове | Mandarin Сервис",
      description: "Чёрный экран телефона, есть звук, но нет изображения? Проверим дисплей, шлейф и плату. Согласуем стоимость ремонта до начала работ.",
    },
    breadcrumbs: [
      ...phoneRepairData.breadcrumbs,
      { label: "Нет изображения", href: "/remont-telefonov/net-izobrazheniya/" },
    ],
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "black-screen", title: "Экран чёрный", icon: "device" },
        { id: "sound-only", title: "Есть звук, но нет картинки", icon: "sound" },
        { id: "flickering", title: "Изображение мигает", icon: "flicker" },
        { id: "lines", title: "Появились полосы", icon: "display-lines" },
        { id: "touch-response", title: "Телефон реагирует на касания", icon: "touch" },
        { id: "impact-or-water", title: "После падения или воды", icon: "water" },
      ],
    },
    causes: {
      title: "Почему пропало изображение",
      items: [
        { id: "display", title: "Повреждён дисплей", description: "Трещины, сколы или внутренние повреждения матрицы.", icon: "display" },
        { id: "connection", title: "Проблема со шлейфом", description: "Шлейф мог отсоединиться или повредиться при ударе или падении.", icon: "connection" },
        { id: "backlight", title: "Неисправна подсветка", description: "На LCD-экране изображение может сохраняться, но без подсветки его почти не видно.", icon: "backlight" },
        { id: "board", title: "Сбой на плате", description: "Повреждены компоненты платы из-за влаги, удара или перегрева.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      // Preliminary prices from the mockup; confirm with the workshop before publishing.
      items: [
        { id: "diagnostics", title: "Диагностика", price: "Бесплатно", action: { label: "Подробнее", href: displayEnquiry("диагностика") } },
        { id: "display", title: "Замена дисплея", price: "от 120 BYN", action: { label: "Подробнее", href: "/remont-telefonov/zamena-ekrana/" } },
        { id: "cable", title: "Ремонт шлейфа", price: "от 70 BYN", action: { label: "Подробнее", href: displayEnquiry("ремонт шлейфа") } },
        { id: "board", title: "Ремонт платы", price: "от 90 BYN", action: { label: "Подробнее", href: displayEnquiry("ремонт платы") } },
      ],
      callout: {
        title: "Точную цену назовём после диагностики",
        description: "Оценим неисправность и предложим оптимальное решение.",
        icon: "diagnostics",
        action: { label: "Узнать стоимость", href: displayEnquiry("стоимость ремонта") },
      },
    },
    process: {
      title: "Как проходит ремонт",
      items: [
        { title: "Обращение", text: "Сообщите модель телефона и опишите, как пропало изображение." },
        { title: "Диагностика", text: "Проверяем дисплей, шлейф и плату, чтобы определить причину." },
        { title: "Согласование", text: "Обсуждаем необходимые работы, стоимость и сроки ремонта." },
        { title: "Ремонт и выдача", text: "Выполняем ремонт и проверяем изображение и сенсор перед выдачей." },
      ],
    },
    advice: {
      panels: [
        {
          id: "self-check",
          tone: "help",
          title: "Что можно сделать самостоятельно",
          items: [
            "Если изображение различимо, проверьте яркость экрана.",
            "Попробуйте перезагрузить телефон.",
            "Если не было воды, повреждений и перегрева, подключите зарядку на 15–20 минут.",
          ],
          note: "Если изображение не появилось — обратитесь к мастеру.",
        },
        {
          id: "professional-help",
          tone: "warning",
          title: "Когда нужен мастер",
          items: [
            "Телефон упал или в него попала вода.",
            "Экран чёрный, хотя есть звук и вибрация.",
            "Появились полосы, мерцание или затемнения.",
          ],
          note: "Не разбирайте устройство самостоятельно. После попадания воды не подключайте зарядку.",
        },
      ],
    },
    quality: {
      title: "Качество и гарантия",
      items: [
        { id: "warranty", title: "Гарантия до 12 месяцев", description: "Условия на работы и запчасти уточняем до ремонта.", icon: "warranty" },
        { id: "masters", title: "Мастера своего дела", description: "Проверяем дисплей, шлейф и компоненты платы.", icon: "master" },
        { id: "parts", title: "Качественные запчасти", description: "Используем проверенные комплектующие.", icon: "quality" },
        { id: "timing", title: "Согласованные сроки", description: "Обсуждаем время ремонта заранее.", icon: "clock" },
      ],
    },
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему пропало изображение, но телефон работает?", answer: "Причина может быть в дисплее, шлейфе, подсветке LCD-экрана или компонентах платы. Звук и вибрация помогают понять, что телефон включён, но точную причину определяем после диагностики." },
        { question: "Сколько стоит ремонт?", answer: "Стоимость зависит от модели и причины неисправности. В разделе стоимости указаны предварительные цены. После диагностики сообщим итоговую сумму и согласуем работы." },
        { question: "Сколько времени занимает ремонт?", answer: "Срок зависит от неисправности и наличия запчастей. Замену дисплея и ремонт платы выполняют по-разному — время сообщим после проверки телефона." },
        { question: "Сохранится ли информация на телефоне?", answer: "Замена дисплея обычно не требует удаления данных. При неисправностях платы или программного обеспечения возможны риски — обсудим их до ремонта. Если есть возможность, заранее сделайте резервную копию." },
      ],
    },
    contact: {
      title: "Вернём изображение вашему телефону",
      description: "Сообщите модель телефона и опишите проблему — подскажем следующий шаг и запишем на диагностику.",
      action: { label: "Написать мастеру", href: displayEnquiry("диагностика и ремонт") },
    },
    hero: {
      title: "Нет изображения",
      accent: "на дисплее телефона",
      description: "Определим, почему пропало изображение, и подберём решение. Согласуем стоимость до ремонта.",
      image: { src: "/hero/phone-no-image-v1.png", alt: "Телефон с чёрным экраном без изображения" },
      backgrounds: phoneRepairData.hero.backgrounds,
      primaryAction: {
        label: "Узнать стоимость",
        href: `${phoneRepairData.hero.secondaryAction.href}?text=${encodeURIComponent("Здравствуйте! На дисплее телефона нет изображения. Хочу уточнить стоимость диагностики и ремонта. Моя модель: ")}`,
      },
      secondaryAction: phoneRepairData.hero.secondaryAction,
      // Terms from the design mockup; confirm with the workshop before publishing.
      benefits: [
        { title: "Диагностика — бесплатно", description: "", icon: "diagnostics" },
        { title: "Цена до ремонта", description: "", icon: "price" },
        { title: "Гарантия до года", description: "", icon: "shield" },
      ],
    },
  },
];

export function getProblemPage(directionSlug: string, slug: string) {
  return problemPages.find((page) => page.directionSlug === directionSlug && page.slug === slug);
}
