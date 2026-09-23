import type { DirectionPageData } from "@/data/directions";
import { siteConfig } from "@/lib/site";
import type { ServicePricingData, ServiceSymptomsData } from "@/data/services/types";

export const windowsInstallationData = {
  slug: "ustanovka-windows",
  metadata: {
    title: "Установка Windows и программ в Борисове — Mandarin Сервис",
    description:
      "Установка Windows, драйверов и программ в Борисове. Подготовим компьютер к работе, согласуем сохранение файлов и состав комплекта. В мастерской и с выездом.",
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Установка Windows", href: "/ustanovka-windows/" },
  ],
  hero: {
    title: "Установка Windows",
    accent: "и программ",
    description:
      "Полный комплект для работы: система, драйверы и нужные программы. Настроим компьютер под ваши задачи.",
    image: {
      src: "/hero/windows-installation-cutout-v1.png",
      alt: "Ноутбук с Windows и объёмный синий знак Windows",
    },
    backgrounds: {
      desktop: "/backgrounds/hero-background-empty-v1.png",
      tablet: "/backgrounds/hero-background-wide-draft.png",
      mobile: "/backgrounds/hero-background-mobile-v1.png",
    },
    primaryAction: {
      label: "Подобрать комплект",
      href: `tel:${siteConfig.telephone}`,
    },
    secondaryAction: {
      label: "Написать мастеру",
      href: "https://wa.me/375291506888",
    },
    benefits: [
      { title: "Состав согласуем", description: "", icon: "price" },
      { title: "Сохранение файлов", description: "Обсудим до установки", icon: "shield" },
      { title: "В мастерской и на выезде", description: "", icon: "diagnostics" },
    ],
  },
} satisfies Pick<DirectionPageData, "slug" | "metadata" | "breadcrumbs" | "hero">;

export const windowsInstallationPackage = {
  title: "Что входит в комплект",
  subtitle: "Windows под ключ",
  description: "От проверки накопителя до готового рабочего стола",
  items: [
    { id: "storage", icon: "storage", title: "Проверка HDD / SSD", description: "Проверим накопитель перед установкой." },
    { id: "files", icon: "files", title: "Сохранение файлов", description: "Согласуем, какие данные перенести." },
    { id: "windows", icon: "windows", title: "Установка Windows", description: "Подберём версию под ваше устройство." },
    { id: "drivers", icon: "drivers", title: "Драйверы и обновления", description: "Настроим звук, сеть и подключённые устройства." },
    { id: "programs", icon: "programs", title: "Базовые программы", description: "Установим браузер, архиватор и кодеки." },
    { id: "check", icon: "check", title: "Проверка работы", description: "Проверим запуск и работу системы перед выдачей." },
  ],
  notice: "Состав комплекта и стоимость согласуем до начала работ.",
} as const;

export const windowsAdditionalServices = {
  title: "Дополнительные услуги",
  description: "Добавьте к установке Windows или закажите отдельно",
  items: [
    { id: "office", icon: "office", title: "Microsoft Office", description: "Установка и настройка для работы и учёбы." },
    { id: "professional", icon: "professional", title: "Профессиональные программы", description: "Adobe, AutoCAD, КОМПАС-3D — под ваши задачи." },
    { id: "viruses", icon: "protection", title: "Удаление вирусов", description: "Очистка системы и настройка защиты." },
    { id: "optimization", icon: "speed", title: "Оптимизация Windows", description: "Автозагрузка, службы и свободное место на диске." },
    { id: "recovery", icon: "data", title: "Восстановление данных", description: "Проверка носителя и оценка возможности восстановления." },
    { id: "upgrade", icon: "hardware", title: "Установка SSD и RAM", description: "Подбор совместимых компонентов и перенос системы." },
  ],
  notice: "Дополнительные работы оплачиваются отдельно. Платное ПО — с лицензией клиента.",
} as const;

export const windowsPageSections = {
  tasks: {
    title: "С какой задачей помочь?",
    items: [
      { id: "new", title: "Новый компьютер", icon: "pc" },
      { id: "startup", title: "Windows не загружается", icon: "windows" },
      { id: "slow", title: "Компьютер тормозит", icon: "slow" },
      { id: "software", title: "Нужны программы", icon: "software" },
    ],
  },
  pricing: {
    title: "От чего зависит стоимость",
    items: [
      { id: "windows", title: "Установка Windows", price: "По составу комплекта" },
      { id: "software", title: "Программы и настройка", price: "По списку задач" },
      { id: "hardware", title: "SSD, RAM и перенос данных", price: "После проверки устройства" },
    ],
    callout: {
      title: "Подберём ваш комплект",
      description: "Уточним задачи, обсудим сохранение файлов и согласуем стоимость до начала работ.",
      action: { label: "Обсудить установку", href: "https://wa.me/375291506888" },
    },
  },
  process: {
    title: "Как проходит установка",
    items: [
      { title: "Обращение", text: "Расскажите, что нужно для работы, учёбы или дома." },
      { title: "Проверка и согласование", text: "Проверим компьютер, обсудим данные, состав комплекта и стоимость." },
      { title: "Установка и настройка", text: "Установим Windows, драйверы и согласованные программы." },
      { title: "Проверка и выдача", text: "Проверим работу системы и покажем результат." },
    ],
  },
  faq: {
    title: "Частые вопросы",
    items: [
      { question: "Сохранятся ли мои файлы?", answer: "До установки обсудим, какие файлы нужно сохранить, и проверим состояние накопителя. Если компьютер работает, заранее сделайте резервную копию важных данных. При неисправном накопителе возможность восстановления оценивается отдельно." },
      { question: "Можно заказать только установку программ?", answer: "Да. Office, профессиональные программы, настройку защиты и оптимизацию можно заказать отдельно, без переустановки Windows. Список программ и стоимость согласуем заранее. Для платного ПО нужна лицензия клиента." },
      { question: "Какая версия Windows подойдёт?", answer: "Проверим характеристики компьютера, совместимость оборудования и требования ваших программ. После этого предложим подходящую версию и обсудим условия лицензирования." },
      { question: "Можно вызвать мастера на дом?", answer: "Программная помощь доступна в мастерской и с выездом по Борисову и району. Адрес, время, возможность выполнить задачу на месте и стоимость выезда согласуем при обращении." },
      { question: "Нужна ли переустановка, если Windows не загружается?", answer: "Не всегда. Причина может быть в загрузчике, обновлении или накопителе. Сначала проверим устройство и обсудим сохранение данных, затем предложим подходящий способ восстановления работы." },
    ],
  },
  contact: {
    title: "Подготовим компьютер к работе",
    description: "Расскажите о своих задачах — подберём комплект и договоримся о визите в мастерскую или выезде.",
    action: { label: "Написать мастеру", href: "https://wa.me/375291506888" },
  },
} satisfies {
  tasks: ServiceSymptomsData;
  pricing: ServicePricingData;
  process: DirectionPageData["process"];
  faq: DirectionPageData["faq"];
  contact: DirectionPageData["contact"];
};
