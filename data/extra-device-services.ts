import type { DirectionPageData } from "@/data/directions";
import type { ServiceIncludedData, ServicePricingData, ServiceSymptomsData } from "@/data/services/types";

export type ExtraDevicePageData = Pick<DirectionPageData, "slug" | "metadata" | "breadcrumbs" | "hero" | "process" | "faq" | "contact"> & {
  deviceLabel: string;
  services: ServiceIncludedData;
  symptoms: ServiceSymptomsData;
  pricing: ServicePricingData;
};
const backgrounds = {
  desktop: "/backgrounds/hero-background-empty-v1.png",
  tablet: "/backgrounds/hero-background-wide-draft.png",
  mobile: "/backgrounds/hero-background-mobile-v1.png",
};
const whatsapp = "https://wa.me/375291506888";
const benefits: DirectionPageData["hero"]["benefits"] = [
  { title: "Цена до ремонта", description: "Стоимость согласуем заранее", icon: "price" },
  { title: "По вашей модели", description: "Подбор совместимых материалов", icon: "shield" },
  { title: "Проверка результата", description: "Перед выдачей устройства", icon: "diagnostics" },
];

export const speakerRepairData: ExtraDevicePageData = {
  slug: "remont-kolonok", deviceLabel: "Колонка",
  metadata: {
    title: "Ремонт колонок в Борисове — Mandarin Сервис",
    description: "Ремонт разъёмов и кнопок, замена аккумуляторов в колонках в Борисове. Проверим устройство и согласуем стоимость до ремонта. Ул. Чапаева, 34.",
  },
  breadcrumbs: [{ label: "Главная", href: "/" }, { label: "Ремонт колонок", href: "/remont-kolonok/" }],
  hero: {
    title: "Ремонт колонок", accent: "в Борисове",
    description: "Разъёмы, кнопки и аккумуляторы. Проверим колонку, подберём совместимые детали и согласуем стоимость до начала работ.",
    image: { src: "/hero/speaker-repair-cutout-v1.png", alt: "Две портативные беспроводные колонки" },
    backgrounds, benefits,
    primaryAction: { label: "Узнать стоимость", href: "#prices" },
    secondaryAction: { label: "Написать мастеру", href: whatsapp },
  },
  services: { title: "Что ремонтируем", items: [
    { id: "ports", title: "Ремонт разъёмов", description: "Проверим разъём зарядки и подключения. Восстановим контакт или заменим повреждённый разъём по модели.", icon: "ports" },
    { id: "buttons", title: "Ремонт кнопок", description: "Восстановим работу кнопок включения, громкости и управления после проверки неисправности.", icon: "buttons" },
    { id: "battery", title: "Замена аккумулятора", description: "Проверим батарею, подберём совместимый аккумулятор и проверим зарядку после замены.", icon: "battery" },
  ] },
  symptoms: { title: "Когда стоит обратиться", items: [
    { id: "charging", title: "Не заряжается или отходит кабель", icon: "charging" },
    { id: "buttons", title: "Кнопки не реагируют", icon: "power" },
    { id: "battery", title: "Быстро разряжается", icon: "battery" },
    { id: "off", title: "Не включается", icon: "sound-off" },
  ] },
  pricing: { title: "От чего зависит стоимость", items: [
    { id: "ports", title: "Ремонт разъёмов", price: "По модели и состоянию разъёма" },
    { id: "buttons", title: "Ремонт кнопок", price: "После проверки" },
    { id: "battery", title: "Замена аккумулятора", price: "По модели и типу батареи" },
  ], callout: { title: "Подскажем по вашей колонке", description: "Напишите модель и что случилось. Уточним возможность ремонта и согласуем стоимость после проверки.", icon: "diagnostics", action: { label: "Обсудить ремонт", href: whatsapp } } },
  process: { title: "Как проходит ремонт", items: [
    { title: "Обращение", text: "Сообщите модель колонки и опишите неисправность." },
    { title: "Проверка и согласование", text: "Проверим устройство, подберём детали и согласуем стоимость." },
    { title: "Ремонт", text: "Выполним согласованные работы с разъёмами, кнопками или аккумулятором." },
    { title: "Проверка и выдача", text: "Проверим зарядку и управление, покажем результат." },
  ] },
  faq: { title: "Частые вопросы", items: [
    { question: "Какие колонки можно принести?", answer: "Напишите модель или пришлите фотографию маркировки. Возможность ремонта и наличие подходящих деталей уточним для вашего устройства." },
    { question: "Можно заменить аккумулятор в портативной колонке?", answer: "Да, после проверки состояния батареи и возможности подобрать совместимую замену. Тип аккумулятора, объём работ и стоимость согласуем заранее." },
    { question: "Если колонка не заряжается, нужно менять разъём?", answer: "Не обязательно: причина может быть в кабеле, аккумуляторе или цепи питания. Сначала проверим устройство, затем предложим подходящий ремонт." },
    { question: "Сколько времени занимает ремонт?", answer: "Срок зависит от модели, сложности разборки и наличия деталей. Назовём его после проверки и согласования работ." },
  ] },
  contact: { title: "Вернём колонку в работу", description: "Напишите модель и опишите проблему с зарядкой, кнопками или аккумулятором — подскажем следующий шаг.", action: { label: "Написать мастеру", href: whatsapp } },
};

export const consoleMaintenanceData: ExtraDevicePageData = {
  slug: "obsluzhivanie-pristavok", deviceLabel: "Игровая приставка",
  metadata: {
    title: "Обслуживание игровых приставок в Борисове — Mandarin Сервис",
    description: "Техническое обслуживание игровых приставок в Борисове: чистка от пыли, замена термопасты и теплопроводящих материалов. Стоимость согласуем до работ.",
  },
  breadcrumbs: [{ label: "Главная", href: "/" }, { label: "Обслуживание приставок", href: "/obsluzhivanie-pristavok/" }],
  hero: {
    title: "Обслуживание приставок", accent: "в Борисове",
    description: "Чистка от пыли, замена термопасты и теплопроводящих материалов. Приведём систему охлаждения в порядок и проверим работу приставки.",
    image: { src: "/hero/console-maintenance-cutout-v1.png", alt: "Игровые приставки и беспроводной геймпад" },
    backgrounds, benefits,
    primaryAction: { label: "Узнать стоимость", href: "#prices" },
    secondaryAction: { label: "Написать мастеру", href: whatsapp },
  },
  services: { title: "Что входит в обслуживание", items: [
    { id: "maintenance", title: "Техническое обслуживание", description: "Проверим состояние системы охлаждения и согласуем необходимые работы по вашей модели.", icon: "diagnostics" },
    { id: "dust", title: "Чистка от пыли", description: "Очистим вентилятор, радиатор и доступные внутренние поверхности после разборки.", icon: "cleaning" },
    { id: "paste", title: "Замена термопасты", description: "Удалим старый состав и нанесём подходящую термопасту, если она предусмотрена конструкцией.", icon: "repair" },
    { id: "thermal", title: "Замена теплопроводников", description: "Проверим теплопроводящие материалы и заменим изношенные с учётом конструкции и толщины, требуемой для вашей модели.", icon: "component" },
  ] },
  symptoms: { title: "Когда пора проверить охлаждение", items: [
    { id: "noise", title: "Вентилятор стал громче", icon: "fan" },
    { id: "heat", title: "Появляется предупреждение о перегреве", icon: "heat" },
    { id: "off", title: "Выключается во время игры", icon: "power" },
    { id: "dust", title: "В вентиляции накопилась пыль", icon: "noise" },
  ] },
  pricing: { title: "От чего зависит стоимость", items: [
    { id: "maintenance", title: "Техническое обслуживание и чистка", price: "По модели и объёму работ" },
    { id: "paste", title: "Замена термопасты", price: "По конструкции охлаждения" },
    { id: "thermal", title: "Замена теплопроводников", price: "По типу и количеству материалов" },
  ], callout: { title: "Подберём обслуживание", description: "Сообщите модель приставки и симптомы. Проверим охлаждение и согласуем состав работ и стоимость до начала обслуживания.", icon: "diagnostics", action: { label: "Обсудить обслуживание", href: whatsapp } } },
  process: { title: "Как проходит обслуживание", items: [
    { title: "Обращение", text: "Назовите модель приставки и расскажите о шуме или перегреве." },
    { title: "Проверка и согласование", text: "Оценим состояние охлаждения, согласуем материалы и стоимость." },
    { title: "Чистка и обслуживание", text: "Удалим пыль и заменим согласованные теплопроводящие материалы." },
    { title: "Проверка и выдача", text: "Соберём приставку и проверим её работу после обслуживания." },
  ] },
  faq: { title: "Частые вопросы", items: [
    { question: "Какие приставки обслуживаете?", answer: "Напишите точную модель приставки или пришлите фотографию маркировки. Возможность обслуживания и подходящие материалы уточним по модели." },
    { question: "Нужно ли всегда менять термопасту и теплопроводники?", answer: "Нет, состав работ зависит от конструкции приставки и состояния материалов. Сначала проверим систему охлаждения и согласуем необходимое обслуживание." },
    { question: "Поможет ли чистка, если приставка выключается?", answer: "Если причина в перегреве из-за загрязнения охлаждения, обслуживание может помочь. Но выключения бывают связаны и с другими неисправностями — сначала нужна проверка." },
    { question: "Как часто нужно чистить приставку?", answer: "Это зависит от условий эксплуатации, количества пыли и нагрузки. Повод обратиться — заметно возросший шум, предупреждение о перегреве или загрязнение вентиляционных отверстий." },
  ] },
  contact: { title: "Подготовим приставку к игре", description: "Сообщите модель и опишите симптомы — обсудим чистку, материалы и удобное время для визита.", action: { label: "Написать мастеру", href: whatsapp } },
};
function enquiry(subject: string) {
  return `${whatsapp}?text=${encodeURIComponent(`Здравствуйте! Интересует ${subject}. Модель планшета: `)}`;
}

// Hybrid page: one tablet page, software and water-damage rows link to the phone service pages.
export const tabletRepairData: ExtraDevicePageData = {
  slug: "remont-planshetov", deviceLabel: "Планшет",
  metadata: {
    title: "Ремонт планшетов в Борисове — iPad, Samsung, Lenovo | Mandarin Сервис",
    description: "Ремонт планшетов в Борисове: замена экрана и тачскрина, аккумулятора, разъёма зарядки и кнопок, ремонт после воды. iPad, Samsung Galaxy Tab, Lenovo, Huawei. Ул. Чапаева, 34.",
  },
  breadcrumbs: [{ label: "Главная", href: "/" }, { label: "Ремонт планшетов", href: "/remont-planshetov/" }],
  hero: {
    title: "Ремонт планшетов", accent: "в Борисове",
    description: "Экран и тачскрин, аккумулятор, разъём зарядки и кнопки. iPad, Samsung Galaxy Tab, Lenovo, Huawei MatePad и другие — согласуем стоимость до начала работ.",
    image: { src: "/hero/tablet-repair-cutout-v1.png", alt: "Два планшета с графитовым корпусом и оранжевыми волнами на экране" },
    backgrounds, benefits,
    primaryAction: { label: "Узнать стоимость", href: "#prices" },
    secondaryAction: { label: "Написать мастеру", href: whatsapp },
  },
  services: { title: "Что ремонтируем", items: [
    { id: "screen", title: "Экран и тачскрин", description: "Меняем разбитое стекло, тачскрин или дисплей целиком — в зависимости от конструкции планшета.", icon: "part" },
    { id: "battery", title: "Замена аккумулятора", description: "Подберём аккумулятор по модели, заменим и проверим зарядку.", icon: "battery" },
    { id: "ports", title: "Разъём зарядки и кнопки", description: "Восстановим разъём зарядки, кнопки включения и громкости.", icon: "ports" },
    { id: "board", title: "После воды и плата", description: "Чистим плату после залития, ремонтируем цепи питания и компоненты.", icon: "repair" },
  ] },
  symptoms: { title: "Когда стоит обратиться", items: [
    { id: "cracked", title: "Разбит экран", icon: "device-damaged" },
    { id: "touch", title: "Не работает сенсор", icon: "touch" },
    { id: "drain", title: "Быстро разряжается", icon: "battery" },
    { id: "charging", title: "Не заряжается", icon: "charging" },
    { id: "off", title: "Не включается", icon: "power" },
    { id: "buttons", title: "Не работают кнопки", icon: "device" },
    { id: "water", title: "Попала вода", icon: "water" },
    { id: "software", title: "Завис или забыт пароль", icon: "lock" },
  ] },
  pricing: { title: "Стоимость", items: [
    { id: "screen", title: "Замена экрана или тачскрина", price: "По модели", action: { label: "Узнать для модели", href: enquiry("замена экрана планшета") } },
    { id: "battery", title: "Замена аккумулятора", price: "По модели", action: { label: "Узнать для модели", href: enquiry("замена аккумулятора планшета") } },
    { id: "ports", title: "Ремонт разъёма зарядки", price: "После проверки", action: { label: "Узнать для модели", href: enquiry("ремонт разъёма зарядки планшета") } },
    { id: "water", title: "Ремонт после воды", price: "от 45 BYN", action: { label: "Подробнее", href: "/remont-telefonov/remont-posle-vody/" } },
    { id: "firmware", title: "Прошивка и восстановление ПО", price: "от 40 BYN", action: { label: "Подробнее", href: "/remont-telefonov/proshivka-i-razblokirovka/" } },
    { id: "password", title: "Снятие пароля без потери данных", price: "от 120 BYN", action: { label: "Подробнее", href: "/remont-telefonov/zabyl-parol/" } },
  ], callout: { title: "Назовём цену для вашего планшета", description: "Напишите модель и что случилось — подберём запчасть и назовём стоимость и срок.", icon: "diagnostics", action: { label: "Написать мастеру", href: enquiry("ремонт планшета") } } },
  process: { title: "Как проходит ремонт", items: [
    { title: "Обращение", text: "Сообщите модель планшета и опишите неисправность." },
    { title: "Диагностика", text: "Проверим планшет и назовём причину, цену и срок." },
    { title: "Ремонт", text: "Подберём запчасть и выполним ремонт после вашего согласия." },
    { title: "Проверка и выдача", text: "Проверим экран, сенсор, зарядку и кнопки вместе с вами." },
  ] },
  faq: { title: "Частые вопросы", items: [
    { question: "Какие планшеты ремонтируете?", answer: "iPad, Samsung Galaxy Tab, Lenovo, Huawei MatePad, Honor, Xiaomi и другие. Возможность ремонта и наличие запчастей уточним по модели." },
    { question: "Можно заменить только стекло?", answer: "Зависит от конструкции: в одних планшетах стекло и тачскрин меняются отдельно от дисплея, в других — только модулем. Скажем после осмотра." },
    { question: "Сколько стоит ремонт планшета?", answer: "Цена зависит от модели и запчасти. Напишите модель — назовём стоимость до начала работ." },
    { question: "Сохранятся ли данные?", answer: "При замене экрана, аккумулятора или разъёма данные обычно сохраняются. Если работа может затронуть данные, предупредим заранее." },
    { question: "Можно ли не приезжать в мастерскую?", answer: "Да. Заберём планшет и привезём обратно после ремонта: по Борисову бесплатно, в Залинейный район — 5 BYN." },
  ] },
  contact: { title: "Вернём планшет в работу", description: "Напишите модель и опишите проблему — подскажем стоимость и срок.", action: { label: "Написать мастеру", href: enquiry("ремонт планшета") } },
};

export const extraDevicePages = [tabletRepairData, speakerRepairData, consoleMaintenanceData];
