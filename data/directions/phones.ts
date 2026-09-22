import type { DirectionPageData } from "./types";

// Source: концепт/content/site-pages.md. Prices await confirmation by the workshop.
export const phoneRepairData = {
  slug: "remont-telefonov",
  metadata: {
    title: "Ремонт телефонов в Борисове — Mandarin Сервис",
    description: "Ремонт телефонов в Борисове: замена экрана, аккумулятора и разъёма зарядки, восстановление после воды. Согласование стоимости до ремонта. Mandarin Сервис, ул. Чапаева, 34.",
  },
  breadcrumbs: [
    { label: "Главная", href: "/" },
    { label: "Ремонт телефонов", href: "/remont-telefonov/" },
  ],
  hero: {
    title: "Ремонт телефонов",
    accent: "в Борисове",
    description: "От замены экрана до ремонта платы. Согласуем стоимость до начала работ.",
    image: { src: "/hero/phone-repair-cutout-v1.png", alt: "Два смартфона и мандарин" },
    backgrounds: {
      desktop: "/backgrounds/hero-background-empty-v1.png",
      mobile: "/backgrounds/hero-background-mobile-v1.png",
    },
    badge: "Диагностика перед ремонтом",
    primaryAction: { label: "Узнать стоимость", href: "#services" },
    secondaryAction: { label: "Написать мастеру", href: "https://wa.me/375291506888" },
    benefits: [
      { title: "Своя мастерская", description: "Профессиональное оборудование" },
      { title: "Цена до ремонта", description: "Без неожиданных доплат" },
      { title: "Бережно к данным", description: "Ваши фото, файлы и контакты в безопасности" },
    ],
  },
  services: {
    title: "Услуги и цены",
    priceNotice: "Предварительные цены. Итоговая стоимость зависит от модели и согласуется после диагностики.",
    pricesVerified: false,
    items: [
      { slug: "zamena-ekrana", title: "Замена экрана", description: "Замена дисплейного модуля при разбитом экране, повреждении матрицы или неисправном сенсоре. Обсудим оригинал и совместимые аналоги.", price: { kind: "from", amount: 120, currency: "BYN" } },
      { slug: "zamena-stekla", title: "Замена стекла", description: "Переклейка стекла с сохранением дисплея, если матрица и сенсор исправны.", price: { kind: "from", amount: 105, currency: "BYN" } },
      { slug: "zamena-akkumulyatora", title: "Замена аккумулятора", description: "Диагностика батареи, подбор нового аккумулятора и проверка зарядки после установки.", price: { kind: "from", amount: 40, currency: "BYN" } },
      { slug: "zamena-razema-zaryadki", title: "Замена разъёма зарядки", description: "Проверка и ремонт разъёмов Micro-USB и Type-C. Если достаточно чистки, предложим её вместо замены.", price: { kind: "from", amount: 45, currency: "BYN", note: "Для флагманских моделей — от 65 BYN." } },
      { slug: "remont-dinamika-i-mikrofona", title: "Ремонт динамика и микрофона", description: "Диагностика тихого звука, хрипов и проблем со слышимостью. Проверка сеток, динамиков и микрофона.", price: { kind: "from", amount: 35, currency: "BYN" } },
      { slug: "remont-posle-vody", title: "Ремонт после воды", description: "Разборка, чистка платы и восстановление повреждённых компонентов. Возможность восстановления определяем после диагностики.", price: { kind: "from", amount: 45, currency: "BYN", note: "Цена за чистку; необходимый ремонт оценивается отдельно." } },
      { slug: "zamena-zadney-kryshki", title: "Замена задней крышки", description: "Замена стеклянных и пластиковых крышек, а также стекла камеры с подбором под модель.", price: { kind: "by-model" } },
      { slug: "remont-kamery", title: "Ремонт камеры", description: "Проверка основной и фронтальной камеры, автофокуса и защитного стекла.", price: { kind: "after-diagnosis" } },
      { slug: "proshivka-i-razblokirovka", title: "Прошивка и восстановление ПО", description: "Восстановление после программных сбоев и циклической загрузки. Работа с FRP и Mi Account — только при подтверждении владения. Возможна потеря данных.", price: { kind: "from", amount: 40, currency: "BYN" } },
    ],
  },
  problems: {
    title: "Что случилось с телефоном?",
    items: [
      { slug: "telefon-ne-vklyuchaetsya", title: "Не включается", causes: "Батарея, разъём, дисплей, прошивка, плата или последствия воды.", serviceSlugs: ["zamena-akkumulyatora", "zamena-razema-zaryadki", "zamena-ekrana", "proshivka-i-razblokirovka", "remont-posle-vody"] },
      { slug: "telefon-ne-zaryazhaetsya", title: "Не заряжается", causes: "Кабель, адаптер, загрязнение разъёма, батарея или контроллер питания.", serviceSlugs: ["zamena-razema-zaryadki", "zamena-akkumulyatora", "remont-posle-vody"] },
      { slug: "bystro-razryazhaetsya", title: "Быстро разряжается", causes: "Износ батареи, фоновые процессы или утечка на плате.", serviceSlugs: ["zamena-akkumulyatora", "proshivka-i-razblokirovka"] },
      { slug: "net-izobrazheniya", title: "Нет изображения", causes: "Дисплей, шлейф или плата.", serviceSlugs: ["zamena-ekrana", "remont-posle-vody"] },
      { slug: "telefon-ne-vidit-sim-kartu", title: "Не видит SIM-карту", causes: "SIM-карта, лоток, модемная часть или прошивка. Для определения причины нужна диагностика.", serviceSlugs: ["proshivka-i-razblokirovka"] },
      { slug: "telefon-perezagruzhaetsya", title: "Перезагружается", causes: "Батарея, память, обновление, кнопка питания или плата.", serviceSlugs: ["zamena-akkumulyatora", "proshivka-i-razblokirovka"] },
    ],
  },
  devices: {
    title: "Какие телефоны ремонтируем",
    brands: ["Apple", "Samsung", "Xiaomi", "Huawei", "Honor"],
    note: "Возможность ремонта вашей модели и наличие запчастей уточним при обращении.",
  },
  conditions: {
    title: "Условия ремонта",
    items: [
      { title: "Диагностика", text: "Определяем причину неисправности. Условия и стоимость диагностики уточняем при приёме." },
      { title: "Согласование", text: "Обсуждаем стоимость и варианты запчастей до начала работ." },
      { title: "Сроки и гарантия", text: "Зависят от модели, вида работ и наличия деталей. Условия сообщаем перед ремонтом." },
      { title: "Ваши данные", text: "Заранее обсуждаем сохранение информации. Если телефон работает, рекомендуем сделать резервную копию." },
    ],
  },
  process: {
    title: "Как проходит ремонт",
    items: [
      { title: "Обращение", text: "Сообщите модель телефона и опишите проблему удобным способом." },
      { title: "Диагностика", text: "Проверяем устройство и определяем причину неисправности." },
      { title: "Согласование", text: "Обсуждаем необходимые работы, стоимость и сроки." },
      { title: "Ремонт и выдача", text: "Выполняем согласованные работы и проверяем телефон перед выдачей." },
    ],
  },
  works: {
    title: "Работы нашей мастерской",
    notice: "Иллюстрации сгенерированы. Заменим их фотографиями реальных работ мастерской.",
    items: [
      { title: "Замена дисплейного модуля", description: "", image: "/works/phone-display-replacement.png", alt: "Иллюстрация: мастер меняет дисплей смартфона" },
      { title: "Диагностика платы", description: "", image: "/works/phone-board-diagnostics.png", alt: "Иллюстрация: проверка платы смартфона измерительными щупами" },
    ],
  },
  reviews: { title: "Отзывы о ремонте телефонов", items: [] },
  faq: {
    title: "Частые вопросы",
    items: [
      { question: "Сколько стоит ремонт телефона?", answer: "Стоимость зависит от модели, неисправности и выбранной запчасти. В каталоге указаны предварительные цены. Итоговую сумму согласуем после диагностики до начала ремонта." },
      { question: "Сохранятся ли мои данные?", answer: "Это зависит от неисправности и необходимых работ. До ремонта обсудим риски. Если устройство работает, сделайте резервную копию. При прошивке или сбросе данные могут быть удалены." },
      { question: "Какие запчасти вы используете?", answer: "В зависимости от модели и наличия обсудим оригинальную запчасть или совместимый аналог, их стоимость и особенности." },
      { question: "Можно ли принести телефон после воды?", answer: "Да. Выключите телефон, не подключайте зарядку и принесите устройство на диагностику. Не сушите его феном. Возможность восстановления и стоимость определяются после осмотра." },
      { question: "Какая гарантия на ремонт?", answer: "Условия гарантии зависят от выполненных работ и установленных деталей. Уточним их при согласовании ремонта." },
    ],
  },
  contact: {
    title: "Не знаете, что сломалось?",
    description: "Напишите модель телефона и опишите проблему — подскажем следующий шаг и сориентируем по стоимости.",
    action: { label: "Написать мастеру", href: "https://wa.me/375291506888" },
  },
} satisfies DirectionPageData;
