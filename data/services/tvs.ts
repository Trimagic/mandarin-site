import { getDirectionItemHref, tvRepairData } from "@/data/directions";
import type { ServicePageData, ServiceQualityData } from "./types";

// Source: концепт/content/site-pages.md. Hardware repair only; every price is set after diagnostics.
// Minsk reference prices in the registry are for checking the price list, not for publishing.
const directionSlug = tvRepairData.slug;
const href = (slug: string) => getDirectionItemHref(directionSlug, slug);

function enquiry(message: string) {
  return `${tvRepairData.hero.secondaryAction.href}?text=${encodeURIComponent(message)}`;
}

function modelEnquiry(subject: string) {
  return enquiry(`Здравствуйте! Интересует ${subject}. Модель и диагональ телевизора: `);
}

function breadcrumbs(label: string, slug: string) {
  return [...tvRepairData.breadcrumbs, { label, href: href(slug) }];
}

function hero(title: string, accent: string, description: string, subject: string): ServicePageData["hero"] {
  return {
    title,
    accent,
    description,
    image: tvRepairData.hero.image,
    backgrounds: tvRepairData.hero.backgrounds,
    primaryAction: { label: "Узнать стоимость", href: modelEnquiry(subject) },
    secondaryAction: tvRepairData.hero.secondaryAction,
    benefits: [
      { title: "Цена после диагностики", description: "", icon: "price" },
      { title: "Согласуем до ремонта", description: "", icon: "diagnostics" },
      { title: "Гарантия на работы", description: "", icon: "shield" },
    ],
  };
}

function diagnosticsPrice(subject: string) {
  return { id: "diagnostics", title: "Диагностика", price: "Уточним при обращении", action: { label: "Записаться", href: modelEnquiry(`диагностика телевизора: ${subject}`) } };
}

function callout(subject: string) {
  return {
    title: "Цену назовём после диагностики",
    description: "Стоимость зависит от модели и неисправности. Если ремонт невыгоден — скажем честно.",
    icon: "diagnostics" as const,
    action: { label: "Написать мастеру", href: modelEnquiry(subject) },
  };
}

function process(second: string, third: string) {
  return {
    title: "Как проходит ремонт",
    items: [
      { title: "Обращение", text: "Сообщите модель и диагональ телевизора и опишите проблему." },
      { title: "Диагностика", text: second },
      { title: "Согласование", text: "Называем стоимость и сроки. Без согласия ремонт не начинаем." },
      { title: "Ремонт и проверка", text: third },
    ],
  };
}

const quality: ServiceQualityData = {
  title: "Гарантия и качество",
  items: [
    { id: "warranty", title: "Гарантия на работы", description: "Срок зависит от вида работ и детали — сообщим до ремонта.", icon: "warranty" },
    { id: "master", title: "Ремонт на уровне плат", description: "Меняем неисправный узел, а не весь телевизор.", icon: "master" },
    { id: "parts", title: "Подбор по модели", description: "Подбираем детали по маркировке платы и панели.", icon: "quality" },
    { id: "price", title: "Честная оценка", description: "Если ремонт невыгоден, скажем об этом.", icon: "price" },
  ],
};

const logisticsFaq = { question: "Нужно ли привозить телевизор?", answer: "Формат ремонта — в мастерской или на выезде — и максимальную диагональ уточним при обращении." };
const matrixFaq = { question: "Меняете ли вы разбитый экран?", answer: "Нет. Замена матрицы стоит почти как новый телевизор, поэтому мы её не выполняем. Если на экране полосы или пятна без трещин, причина может быть в шлейфе или подсветке — их мы ремонтируем." };

export const tvServicePages: ServicePageData[] = [
  {
    slug: "zamena-podsvetki",
    directionSlug,
    metadata: {
      title: "Замена подсветки телевизора в Борисове — Mandarin Сервис",
      description: "Звук есть, а изображения нет? Заменим светодиодную подсветку телевизора в Борисове. Стоимость по модели после диагностики.",
    },
    breadcrumbs: breadcrumbs("Замена подсветки", "zamena-podsvetki"),
    hero: hero("Замена подсветки", "телевизора", "Звук есть, а изображения нет — чаще всего вышла из строя светодиодная подсветка. Заменим линейки и вернём картинку.", "замена подсветки телевизора"),
    symptoms: {
      title: "Когда нужна замена подсветки",
      items: [
        { id: "sound-only", title: "Звук есть, картинки нет", icon: "backlight-off" },
        { id: "flashlight", title: "Изображение видно только с фонариком", icon: "tv" },
        { id: "dim", title: "Экран стал тусклым", icon: "flicker" },
        { id: "spots", title: "Тёмные зоны и пятна", icon: "spot" },
        { id: "blink", title: "Подсветка мигает", icon: "reboot" },
        { id: "shutdown", title: "Экран гаснет через несколько секунд", icon: "tv-off" },
      ],
    },
    included: {
      title: "Что входит в услугу",
      items: [
        { id: "diagnostics", title: "Проверка", description: "Убеждаемся, что причина в подсветке, а не в блоке питания или плате.", icon: "diagnostics" },
        { id: "disassembly", title: "Разборка панели", description: "Аккуратно разбираем матрицу, чтобы добраться до светодиодных линеек.", icon: "tv" },
        { id: "replacement", title: "Замена линеек", description: "Меняем светодиодные линейки комплектом, чтобы яркость была равномерной.", icon: "backlight" },
        { id: "check", title: "Проверка", description: "Проверяем равномерность яркости и работу под нагрузкой.", icon: "check" },
      ],
    },
    pricing: {
      title: "Стоимость",
      items: [
        { id: "backlight", title: "Замена подсветки", price: "После диагностики", action: { label: "Узнать для модели", href: modelEnquiry("замена подсветки") } },
        { id: "psu", title: "Ремонт блока питания", price: "После диагностики", action: { label: "Подробнее", href: href("remont-bloka-pitaniya") } },
        diagnosticsPrice("нет изображения, звук есть"),
      ],
      callout: callout("замена подсветки"),
    },
    process: process("Проверяем подсветку, блок питания и плату.", "Меняем линейки и проверяем изображение перед выдачей."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Как проверить подсветку", items: ["Включите телевизор в тёмной комнате.", "Посветите фонариком на экран под углом.", "Если видно тусклое изображение — скорее всего, дело в подсветке."], note: "Это помогает отличить подсветку от неисправности платы." },
        { id: "warning", tone: "warning", title: "Почему менять комплектом", items: ["Линейки изнашиваются одновременно.", "Замена одной линейки даёт неравномерную яркость.", "Остальные быстро выходят из строя следом."], note: "Поэтому обычно меняем подсветку целиком." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Стоит ли менять подсветку или купить новый телевизор?", answer: "Обычно замена подсветки выгоднее нового телевизора. Назовём стоимость после диагностики — решение за вами." },
        { question: "Почему подсветка выходит из строя?", answer: "Светодиоды со временем деградируют, особенно при высокой яркости. Часто линейки выходят из строя одна за другой." },
        logisticsFaq,
        matrixFaq,
      ],
    },
    contact: {
      title: "Вернём изображение телевизору",
      description: "Сообщите модель и диагональ — подскажем, похоже ли это на подсветку.",
      action: { label: "Написать мастеру", href: modelEnquiry("замена подсветки") },
    },
  },
  {
    slug: "remont-bloka-pitaniya",
    directionSlug,
    metadata: {
      title: "Ремонт блока питания телевизора в Борисове — Mandarin Сервис",
      description: "Телевизор не включается после скачка напряжения? Ремонт или замена платы питания телевизора в Борисове.",
    },
    breadcrumbs: breadcrumbs("Ремонт блока питания", "remont-bloka-pitaniya"),
    hero: hero("Ремонт блока питания", "телевизора", "Скачки напряжения и вздутые конденсаторы — частые причины. Отремонтируем или заменим плату питания.", "ремонт блока питания телевизора"),
    symptoms: {
      title: "Когда нужен ремонт блока питания",
      items: [
        { id: "no-power", title: "Не включается", icon: "tv-off" },
        { id: "no-led", title: "Не горит индикатор", icon: "power" },
        { id: "cycle", title: "Включается и выключается", icon: "reboot" },
        { id: "click", title: "Щёлкает при включении", icon: "sound" },
        { id: "surge", title: "После скачка напряжения", icon: "charging" },
        { id: "slow-start", title: "Долго включается", icon: "slow" },
      ],
    },
    included: {
      title: "Что входит в услугу",
      items: [
        { id: "diagnostics", title: "Проверка", description: "Проверяем плату питания, дежурное питание и напряжения.", icon: "diagnostics" },
        { id: "repair", title: "Ремонт", description: "Меняем конденсаторы, предохранители и другие компоненты.", icon: "repair" },
        { id: "replacement", title: "Замена платы", description: "Если ремонт невыгоден — подбираем плату по маркировке.", icon: "component" },
        { id: "check", title: "Проверка", description: "Проверяем включение и работу под нагрузкой.", icon: "check" },
      ],
    },
    pricing: {
      title: "Стоимость",
      items: [
        { id: "repair", title: "Ремонт блока питания", price: "После диагностики", action: { label: "Узнать для модели", href: modelEnquiry("ремонт блока питания") } },
        { id: "replacement", title: "Замена платы питания", price: "По модели", action: { label: "Уточнить", href: modelEnquiry("замена платы питания") } },
        diagnosticsPrice("не включается"),
      ],
      callout: callout("ремонт блока питания"),
    },
    process: process("Проверяем блок питания и связанные узлы.", "Ремонтируем или меняем плату и проверяем телевизор."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что проверить самостоятельно", items: ["Подключите телевизор в другую розетку без удлинителя.", "Проверьте пульт — замените батарейки.", "Нажмите кнопку питания на самом телевизоре."], note: "Если не помогло — нужна диагностика." },
        { id: "warning", tone: "warning", title: "Когда отключить от сети", items: ["Пахнет гарью или слышен треск.", "Телевизор отключился во время грозы.", "Индикатор мигает, а телевизор не включается."], note: "Не включайте телевизор повторно — можно повредить другие платы." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему выходит из строя блок питания?", answer: "Скачки напряжения, износ конденсаторов, перегрев. Со временем конденсаторы вздуваются и теряют ёмкость." },
        { question: "Ремонтируете или меняете плату?", answer: "Сначала пробуем отремонтировать. Если ремонт невыгоден или невозможен, подбираем новую плату по маркировке." },
        { question: "Как защитить телевизор от скачков?", answer: "Используйте сетевой фильтр или стабилизатор и отключайте телевизор из розетки во время грозы." },
        logisticsFaq,
      ],
    },
    contact: {
      title: "Включим ваш телевизор",
      description: "Сообщите модель и опишите, что происходит при включении, — подскажем следующий шаг.",
      action: { label: "Написать мастеру", href: modelEnquiry("ремонт блока питания") },
    },
  },
  {
    slug: "remont-materinskoy-platy",
    directionSlug,
    metadata: {
      title: "Ремонт материнской платы телевизора в Борисове — Mandarin Сервис",
      description: "Телевизор зависает, не реагирует на пульт или не ловит каналы? Ремонт и прошивка материнской платы телевизора в Борисове.",
    },
    breadcrumbs: breadcrumbs("Ремонт материнской платы", "remont-materinskoy-platy"),
    hero: hero("Ремонт материнской", "платы телевизора", "Зависания, сбои прошивки, встроенный тюнер, нет реакции на пульт — отремонтируем или прошьём плату.", "ремонт материнской платы телевизора"),
    symptoms: {
      title: "Когда нужен ремонт платы",
      items: [
        { id: "freeze", title: "Зависает", icon: "slow" },
        { id: "logo", title: "Висит на логотипе", icon: "tv" },
        { id: "remote", title: "Не реагирует на пульт", icon: "remote" },
        { id: "channels", title: "Не ловит каналы", icon: "antenna" },
        { id: "no-sound", title: "Нет звука", icon: "speaker-off" },
        { id: "no-power", title: "Не включается", icon: "tv-off" },
      ],
    },
    included: {
      title: "Что входит в услугу",
      items: [
        { id: "diagnostics", title: "Диагностика", description: "Проверяем плату, память и прошивку.", icon: "diagnostics" },
        { id: "firmware", title: "Прошивка", description: "Восстанавливаем программное обеспечение платы.", icon: "component" },
        { id: "repair", title: "Ремонт", description: "Меняем повреждённые компоненты или плату целиком.", icon: "repair" },
        { id: "check", title: "Проверка", description: "Проверяем изображение, звук, каналы, пульт и входы.", icon: "check" },
      ],
    },
    pricing: {
      title: "Стоимость",
      items: [
        { id: "repair", title: "Ремонт материнской платы", price: "После диагностики", action: { label: "Узнать для модели", href: modelEnquiry("ремонт материнской платы") } },
        { id: "firmware", title: "Прошивка", price: "После диагностики", action: { label: "Уточнить", href: modelEnquiry("прошивка телевизора") } },
        { id: "replacement", title: "Замена платы", price: "По модели", action: { label: "Уточнить", href: modelEnquiry("замена материнской платы") } },
        diagnosticsPrice("проблема с платой"),
      ],
      callout: callout("ремонт материнской платы"),
    },
    process: process("Проверяем плату, прошивку и связанные узлы.", "Ремонтируем или прошиваем плату и проверяем все функции."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что попробовать самостоятельно", items: ["Отключите телевизор от сети на 5 минут и включите снова.", "Замените батарейки в пульте.", "Проверьте антенный кабель и выполните автопоиск каналов."], note: "Если проблема осталась — нужна диагностика." },
        { id: "warning", tone: "warning", title: "Чего не делать", items: ["Не прошивайте телевизор неофициальными прошивками.", "Не выключайте телевизор во время обновления."], note: "Неудачная прошивка может полностью заблокировать загрузку." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Телевизор не ловит каналы — это поломка?", answer: "Если автопоиск и кабель в порядке, причина может быть в тюнере на материнской плате. Настройку каналов мы не выполняем, а неисправность тюнера ремонтируем." },
        { question: "Поможет ли прошивка?", answer: "При зависаниях и циклической загрузке — часто да. При аппаратной неисправности потребуется ремонт компонентов." },
        { question: "Что выгоднее: ремонт или замена платы?", answer: "Зависит от неисправности и наличия платы. Назовём оба варианта после диагностики." },
        logisticsFaq,
      ],
    },
    contact: {
      title: "Отремонтируем плату телевизора",
      description: "Сообщите модель и опишите проблему — подскажем следующий шаг.",
      action: { label: "Написать мастеру", href: modelEnquiry("ремонт материнской платы") },
    },
  },
  {
    slug: "zamena-shleyfa-i-t-con",
    directionSlug,
    metadata: {
      title: "Замена шлейфа и T-Con телевизора в Борисове — Mandarin Сервис",
      description: "Полосы, мерцание или искажения на экране без трещин? Замена шлейфа и платы T-Con телевизора в Борисове.",
    },
    breadcrumbs: breadcrumbs("Замена шлейфа и T-Con", "zamena-shleyfa-i-t-con"),
    hero: hero("Замена шлейфа", "и T-Con телевизора", "Полосы, мерцание и искажения без трещин на экране часто вызывает шлейф или плата T-Con. Их мы ремонтируем.", "замена шлейфа или T-Con"),
    symptoms: {
      title: "Когда нужна замена",
      items: [
        { id: "lines", title: "Полосы на экране", icon: "display-lines" },
        { id: "flicker", title: "Мерцание", icon: "flicker" },
        { id: "colors", title: "Искажены цвета", icon: "layers" },
        { id: "half", title: "Половина экрана тёмная", icon: "spot" },
        { id: "noise", title: "Рябь и артефакты", icon: "tv" },
        { id: "white", title: "Белый или серый экран", icon: "backlight-off" },
      ],
    },
    included: {
      title: "Что входит в услугу",
      items: [
        { id: "diagnostics", title: "Проверка", description: "Определяем, виноваты шлейф, T-Con или сама матрица.", icon: "diagnostics" },
        { id: "part", title: "Подбор", description: "Подбираем шлейф или плату T-Con по маркировке.", icon: "component" },
        { id: "replacement", title: "Замена", description: "Меняем шлейф или плату и настраиваем изображение.", icon: "repair" },
        { id: "check", title: "Проверка", description: "Проверяем изображение на тестовых картинках.", icon: "check" },
      ],
    },
    pricing: {
      title: "Стоимость",
      items: [
        { id: "cable", title: "Замена шлейфа", price: "После диагностики", action: { label: "Узнать для модели", href: modelEnquiry("замена шлейфа") } },
        { id: "tcon", title: "Замена платы T-Con", price: "По модели", action: { label: "Узнать для модели", href: modelEnquiry("замена T-Con") } },
        diagnosticsPrice("полосы на экране"),
      ],
      callout: callout("замена шлейфа или T-Con"),
    },
    comparison: {
      title: "Шлейф, T-Con или матрица",
      items: [
        { id: "cable", title: "Шлейф", features: ["Полосы меняются при нажатии на рамку", "Мерцание зависит от прогрева", "Ремонтируем"], note: "Замена шлейфа" },
        { id: "tcon", title: "T-Con", features: ["Искажены цвета по всему экрану", "Рябь, двоение изображения", "Ремонтируем"], note: "Замена платы" },
        { id: "matrix", title: "Матрица", features: ["Трещины и растекающиеся пятна", "Вертикальные полосы после удара", "Не ремонтируем"], note: "Замена невыгодна" },
      ],
    },
    process: process("Проверяем шлейф, T-Con и матрицу.", "Меняем деталь и проверяем изображение на тестовых картинках."),
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Полосы на экране — это приговор?", answer: "Не всегда. Если нет трещин и пятен, причина часто в шлейфе или плате T-Con — их мы ремонтируем." },
        { question: "Что такое T-Con?", answer: "Плата управления матрицей. Она преобразует сигнал с материнской платы в изображение на экране." },
        matrixFaq,
        logisticsFaq,
      ],
    },
    contact: {
      title: "Уберём полосы с экрана",
      description: "Сообщите модель и пришлите фото экрана — подскажем, похоже ли это на шлейф или T-Con.",
      action: { label: "Написать мастеру", href: modelEnquiry("полосы на экране, пришлю фото") },
    },
  },
  {
    slug: "remont-razemov",
    directionSlug,
    metadata: {
      title: "Ремонт разъёмов телевизора в Борисове — Mandarin Сервис",
      description: "Не видит HDMI, флешку или приставку? Ремонт разъёмов HDMI, USB и антенного гнезда телевизора в Борисове.",
    },
    breadcrumbs: breadcrumbs("Ремонт разъёмов", "remont-razemov"),
    hero: hero("Ремонт разъёмов", "телевизора", "Нет сигнала, телевизор не видит флешку или приставку — отремонтируем HDMI, USB и антенное гнездо.", "ремонт разъёмов телевизора"),
    symptoms: {
      title: "Когда нужен ремонт",
      items: [
        { id: "hdmi", title: "Нет сигнала по HDMI", icon: "hdmi" },
        { id: "usb", title: "Не видит флешку", icon: "usb" },
        { id: "box", title: "Не видит приставку", icon: "tv" },
        { id: "antenna", title: "Не работает антенна", icon: "antenna" },
        { id: "loose", title: "Разъём болтается", icon: "layers" },
        { id: "broken", title: "Сломан разъём", icon: "device-damaged" },
      ],
    },
    included: {
      title: "Что входит в услугу",
      items: [
        { id: "diagnostics", title: "Проверка", description: "Проверяем разъём, кабель, устройство и цепи на плате.", icon: "diagnostics" },
        { id: "part", title: "Подбор разъёма", description: "Подбираем разъём по типу и креплению.", icon: "component" },
        { id: "replacement", title: "Замена", description: "Перепаиваем или меняем разъём.", icon: "repair" },
        { id: "check", title: "Проверка", description: "Проверяем подключение устройств на всех входах.", icon: "check" },
      ],
    },
    pricing: {
      title: "Стоимость",
      items: [
        { id: "hdmi", title: "Ремонт разъёма HDMI", price: "После диагностики", action: { label: "Уточнить", href: modelEnquiry("ремонт разъёма HDMI") } },
        { id: "usb", title: "Ремонт разъёма USB", price: "После диагностики", action: { label: "Уточнить", href: modelEnquiry("ремонт разъёма USB") } },
        { id: "antenna", title: "Ремонт антенного гнезда", price: "После диагностики", action: { label: "Уточнить", href: modelEnquiry("ремонт антенного гнезда") } },
        diagnosticsPrice("не работает разъём"),
      ],
      callout: callout("ремонт разъёмов"),
    },
    process: process("Проверяем разъём, кабель, подключаемое устройство и плату.", "Ремонтируем разъём и проверяем все входы."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что проверить самостоятельно", items: ["Попробуйте другой кабель и другой вход HDMI.", "Выберите правильный источник сигнала на пульте.", "Проверьте флешку на компьютере — формат FAT32 или exFAT."], note: "Если другое устройство тоже не работает — нужен ремонт." },
        { id: "warning", tone: "warning", title: "Чего не делать", items: ["Не подключайте HDMI при включённых устройствах во время грозы.", "Не вставляйте кабель с усилием.", "Не используйте повреждённые кабели."], note: "Горячее подключение HDMI иногда выжигает порт." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему перестал работать HDMI?", answer: "Механическое повреждение разъёма, выгорание порта при горячем подключении или неисправность цепей на плате." },
        { question: "Можно ли пользоваться другим входом?", answer: "Можно, если остальные входы работают. Но выгоревший порт иногда указывает на проблему с платой — лучше проверить." },
        { question: "Телевизор не ловит каналы — это разъём?", answer: "Возможно, повреждено антенное гнездо. Также причина может быть в тюнере на плате. Настройку каналов мы не выполняем." },
        logisticsFaq,
      ],
    },
    contact: {
      title: "Вернём разъёмы в строй",
      description: "Сообщите модель и какой разъём не работает — подскажем следующий шаг.",
      action: { label: "Написать мастеру", href: modelEnquiry("ремонт разъёмов") },
    },
  },
  {
    slug: "zamena-dinamikov",
    directionSlug,
    metadata: {
      title: "Замена динамиков телевизора в Борисове — Mandarin Сервис",
      description: "Нет звука, хрип или прерывистый звук? Замена динамиков телевизора в Борисове. Стоимость по модели.",
    },
    breadcrumbs: breadcrumbs("Замена динамиков", "zamena-dinamikov"),
    hero: hero("Замена динамиков", "телевизора", "Нет звука, хрипит или звук пропадает — проверим динамики и усилитель и заменим неисправное.", "замена динамиков телевизора"),
    symptoms: {
      title: "Когда нужна замена",
      items: [
        { id: "no-sound", title: "Нет звука", icon: "speaker-off" },
        { id: "wheeze", title: "Хрипит", icon: "noise" },
        { id: "drops", title: "Звук пропадает", icon: "flicker" },
        { id: "one-side", title: "Звук с одной стороны", icon: "sound" },
        { id: "quiet", title: "Очень тихо", icon: "sound-off" },
        { id: "rattle", title: "Дребезжит на басах", icon: "fan" },
      ],
    },
    included: {
      title: "Что входит в услугу",
      items: [
        { id: "diagnostics", title: "Проверка", description: "Определяем, виноваты динамики, усилитель или настройки.", icon: "diagnostics" },
        { id: "part", title: "Подбор", description: "Подбираем динамики по размеру и сопротивлению.", icon: "component" },
        { id: "replacement", title: "Замена", description: "Меняем динамики и проверяем крепление.", icon: "repair" },
        { id: "check", title: "Проверка", description: "Проверяем звук на разной громкости.", icon: "check" },
      ],
    },
    pricing: {
      title: "Стоимость",
      items: [
        { id: "speakers", title: "Замена динамиков", price: "По модели", action: { label: "Узнать для модели", href: modelEnquiry("замена динамиков") } },
        { id: "board", title: "Ремонт усилителя на плате", price: "После диагностики", action: { label: "Подробнее", href: href("remont-materinskoy-platy") } },
        diagnosticsPrice("нет звука"),
      ],
      callout: callout("замена динамиков"),
    },
    process: process("Проверяем динамики, усилитель и настройки звука.", "Меняем динамики и проверяем звук на разной громкости."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что проверить самостоятельно", items: ["Проверьте, не выбран ли вывод звука на внешнее устройство.", "Отключите наушники, саундбар и Bluetooth-устройства.", "Сбросьте настройки звука."], note: "Если звука нет на всех источниках — нужна проверка." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Звук хрипит на любой громкости.", "Звук пропадает при нагреве.", "Звука нет, хотя в наушниках есть."], note: "Не выкручивайте громкость на максимум при хрипе — динамик может порваться окончательно." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему пропал звук?", answer: "Причина может быть в динамиках, усилителе на материнской плате или настройках вывода звука. Проверим и определим." },
        { question: "Звук есть в наушниках, но нет в динамиках — что это?", answer: "Скорее всего, неисправны сами динамики или их подключение. Реже — усилитель на плате." },
        { question: "Можно ли подключить саундбар вместо ремонта?", answer: "Можно, если плата исправна и звук выводится на внешние устройства. Подскажем, какой вариант выгоднее." },
        logisticsFaq,
      ],
    },
    contact: {
      title: "Вернём звук телевизору",
      description: "Сообщите модель и опишите проблему со звуком — подскажем следующий шаг.",
      action: { label: "Написать мастеру", href: modelEnquiry("замена динамиков") },
    },
  },
];
