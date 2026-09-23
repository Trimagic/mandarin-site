import type { DirectionPageData } from "./types";

// Source: концепт/content/site-pages.md. Prices await confirmation by the workshop.
export const laptopRepairData = {
  slug: "remont-noutbukov",
  metadata: {
    title: "Ремонт ноутбуков в Борисове — Mandarin Сервис",
    description: "Ремонт ноутбуков в Борисове: чистка и замена термопасты, замена матрицы и клавиатуры, ремонт разъёма питания и платы, установка SSD. Согласование стоимости до ремонта. Ул. Чапаева, 34.",
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Ремонт ноутбуков", href: "/remont-noutbukov/" },
  ],
  hero: {
    title: "Ремонт ноутбуков",
    accent: "в Борисове",
    description: "От чистки системы охлаждения до ремонта материнской платы. Согласуем стоимость до начала работ.",
    image: { src: "/hero/laptop-repair-cutout-v1.png", alt: "Открытый ноутбук с оранжевым экраном и мандарин с листиком" },
    backgrounds: {
      desktop: "/backgrounds/hero-background-empty-v1.png",
      tablet: "/backgrounds/hero-background-wide-draft.png",
      mobile: "/backgrounds/hero-background-mobile-v1.png",
    },
    badge: "Диагностика перед ремонтом",
    primaryAction: { label: "Узнать стоимость", href: "#services" },
    secondaryAction: { label: "Написать мастеру", href: "https://wa.me/375291506888" },
    benefits: [
      { title: "Своя мастерская", description: "Оборудование для ремонта плат" },
      { title: "Цена до ремонта", description: "Без неожиданных доплат" },
      { title: "Бережно к данным", description: "Обсуждаем сохранность файлов заранее" },
    ],
  },
  services: {
    title: "Услуги и цены",
    priceNotice: "Предварительные цены. Итоговая стоимость зависит от модели и согласуется после диагностики.",
    pricesVerified: false,
    items: [
      { slug: "diagnostika", title: "Диагностика ноутбука", description: "Проверка питания, температур, памяти, накопителя и платы. По результату согласуем ремонт.", price: { kind: "from", amount: 5, currency: "BYN" } },
      { slug: "chistka-i-zamena-termopasty", title: "Чистка и замена термопасты", description: "Разборка, чистка радиатора и кулера, замена термопасты и проверка температур под нагрузкой.", price: { kind: "from", amount: 35, currency: "BYN" } },
      { slug: "zamena-matricy", title: "Замена матрицы", description: "Подбор экрана по диагонали, разрешению и разъёму. Замена при трещинах, полосах и пятнах.", price: { kind: "from", amount: 180, currency: "BYN" } },
      { slug: "remont-klaviatury", title: "Ремонт клавиатуры", description: "Ремонт клавиш, замена модуля клавиатуры или топкейса, проверка тачпада.", price: { kind: "from", amount: 65, currency: "BYN" } },
      { slug: "remont-razema-pitaniya", title: "Ремонт разъёма питания", description: "Проверка зарядного устройства, кабеля и гнезда, ремонт цепей зарядки.", price: { kind: "from", amount: 45, currency: "BYN" } },
      { slug: "remont-sistemy-ohlazhdeniya", title: "Ремонт системы охлаждения", description: "Замена кулера, ремонт креплений, проверка тепловых трубок и радиатора.", price: { kind: "from", amount: 42, currency: "BYN" } },
      { slug: "remont-materinskoy-platy", title: "Ремонт материнской платы", description: "Цепи питания, прошивка BIOS, пайка компонентов и BGA. Объём работ определяем после диагностики.", price: { kind: "from", amount: 45, currency: "BYN", note: "BGA-пайка — от 135 BYN." } },
      { slug: "remont-posle-zalitiya", title: "Ремонт после залития", description: "Разборка, чистка коррозии и восстановление повреждённых компонентов. Результат зависит от повреждений.", price: { kind: "from", amount: 45, currency: "BYN", note: "Цена за чистку; необходимый ремонт оценивается отдельно." } },
      { slug: "modernizaciya-ssd-i-ram", title: "Установка SSD и памяти", description: "Подбор совместимых SSD и оперативной памяти, перенос системы и проверка скорости.", price: { kind: "from", amount: 35, currency: "BYN" } },
    ],
  },
  problems: {
    title: "Что случилось с ноутбуком?",
    items: [
      { slug: "noutbuk-ne-vklyuchaetsya", title: "Не включается", causes: "Блок питания, разъём, аккумулятор, BIOS или плата.", serviceSlugs: ["diagnostika", "remont-razema-pitaniya", "remont-materinskoy-platy"] },
      { slug: "noutbuk-ne-zaryazhaetsya", title: "Не заряжается", causes: "Адаптер, гнездо, батарея или контроллер заряда.", serviceSlugs: ["remont-razema-pitaniya", "remont-materinskoy-platy"] },
      { slug: "noutbuk-greetsya", title: "Сильно греется", causes: "Пыль, высохшая термопаста, кулер или тепловая трубка.", serviceSlugs: ["chistka-i-zamena-termopasty", "remont-sistemy-ohlazhdeniya"] },
      { slug: "noutbuk-shumit", title: "Шумит", causes: "Забитый радиатор, износ кулера или фоновая нагрузка. Программные причины решает компьютерная помощь.", serviceSlugs: ["chistka-i-zamena-termopasty", "remont-sistemy-ohlazhdeniya"] },
      { slug: "noutbuk-tormozit", title: "Медленно работает", causes: "Старый HDD, мало памяти, перегрев или вирусы. Программные причины решает компьютерная помощь.", serviceSlugs: ["modernizaciya-ssd-i-ram", "chistka-i-zamena-termopasty"] },
      { slug: "noutbuk-vyklyuchaetsya", title: "Сам выключается", causes: "Перегрев, питание, батарея или плата.", serviceSlugs: ["chistka-i-zamena-termopasty", "remont-sistemy-ohlazhdeniya", "remont-materinskoy-platy"] },
      { slug: "net-izobrazheniya", title: "Нет изображения", causes: "Матрица, шлейф, подсветка или видеочип.", serviceSlugs: ["zamena-matricy", "remont-materinskoy-platy", "diagnostika"] },
    ],
  },
  devices: {
    title: "Какие ноутбуки ремонтируем",
    brands: ["Asus", "Lenovo", "HP", "Acer", "Dell", "Apple", "MSI"],
    note: "Ремонтируем и другие марки. Возможность ремонта и наличие запчастей уточним по модели.",
  },
  conditions: {
    title: "Условия ремонта",
    items: [
      { title: "Диагностика", text: "Определяем причину неисправности. Условия и стоимость диагностики уточняем при приёме." },
      { title: "Согласование", text: "Обсуждаем работы, запчасти и стоимость до начала ремонта." },
      { title: "Сроки и гарантия", text: "Зависят от модели, вида работ и наличия деталей. Условия сообщаем перед ремонтом." },
      { title: "Ваши данные", text: "Заранее обсуждаем сохранение файлов. Если ноутбук работает, рекомендуем сделать резервную копию." },
    ],
  },
  process: {
    title: "Как проходит ремонт",
    items: [
      { title: "Обращение", text: "Сообщите модель ноутбука и опишите проблему удобным способом." },
      { title: "Диагностика", text: "Проверяем питание, температуры и компоненты, определяем причину." },
      { title: "Согласование", text: "Обсуждаем необходимые работы, стоимость и сроки." },
      { title: "Ремонт и выдача", text: "Выполняем работы и проверяем ноутбук под нагрузкой перед выдачей." },
    ],
  },
  works: { title: "Работы нашей мастерской", items: [] },
  reviews: { title: "Отзывы о ремонте ноутбуков", items: [] },
  faq: {
    title: "Частые вопросы",
    items: [
      { question: "Сколько стоит ремонт ноутбука?", answer: "Стоимость зависит от модели, неисправности и запчастей. В каталоге указаны предварительные цены. Итоговую сумму согласуем после диагностики до начала ремонта." },
      { question: "Как часто нужно чистить ноутбук?", answer: "Обычно раз в один-два года, чаще — если ноутбук работает на мягкой поверхности, есть домашние животные или он заметно греется и шумит." },
      { question: "Стоит ли модернизировать старый ноутбук?", answer: "Часто установка SSD и дополнительной памяти вместе с чисткой заметно ускоряют ноутбук и обходятся дешевле нового. Проверим совместимость и подскажем, есть ли смысл." },
      { question: "Что делать, если залили ноутбук?", answer: "Сразу выключите его, отключите зарядку и по возможности снимите аккумулятор. Не включайте ноутбук для проверки и не сушите феном — принесите на диагностику как можно скорее." },
      { question: "Сохранятся ли мои файлы?", answer: "Это зависит от неисправности и состояния накопителя. До ремонта обсудим риски. Если ноутбук работает, сделайте резервную копию важных данных." },
      { question: "Какая гарантия на ремонт?", answer: "Условия гарантии зависят от выполненных работ и установленных деталей. Уточним их при согласовании ремонта." },
    ],
  },
  contact: {
    title: "Не знаете, что сломалось?",
    description: "Напишите модель ноутбука и опишите проблему — подскажем следующий шаг и сориентируем по стоимости.",
    action: { label: "Написать мастеру", href: "https://wa.me/375291506888" },
  },
} satisfies DirectionPageData;
