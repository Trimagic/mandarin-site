import { getDirectionItemHref, laptopRepairData } from "@/data/directions";
import type { ServiceQualityData } from "@/data/services/types";
import type { ProblemPageData } from "./types";

// Source: концепт/content/site-pages.md. Prices, terms and warranty await confirmation by the workshop.
const directionSlug = laptopRepairData.slug;
const href = (slug: string) => getDirectionItemHref(directionSlug, slug);

function enquiry(message: string) {
  return `${laptopRepairData.hero.secondaryAction.href}?text=${encodeURIComponent(message)}`;
}

function breadcrumbs(label: string, slug: string) {
  return [...laptopRepairData.breadcrumbs, { label, href: href(slug) }];
}

function hero(title: string, accent: string, description: string, problem: string, image?: ProblemPageData["hero"]["image"]): ProblemPageData["hero"] {
  return {
    title,
    accent,
    description,
    image: image ?? laptopRepairData.hero.image,
    backgrounds: laptopRepairData.hero.backgrounds,
    primaryAction: { label: "Узнать стоимость", href: enquiry(`Здравствуйте! ${problem}. Хочу уточнить стоимость диагностики и ремонта. Модель ноутбука: `) },
    secondaryAction: laptopRepairData.hero.secondaryAction,
    benefits: [
      { title: "Диагностика от 5 BYN", description: "", icon: "diagnostics" },
      { title: "Цена до ремонта", description: "", icon: "price" },
      { title: "Гарантия на работы", description: "", icon: "shield" },
    ],
  };
}

const diagnosticsPrice = { id: "diagnostics", title: "Диагностика", price: "от 5 BYN", action: { label: "Подробнее", href: href("diagnostika") } };

function callout(problem: string) {
  return {
    title: "Точную цену назовём после диагностики",
    description: "Определим причину и согласуем стоимость до начала ремонта.",
    icon: "diagnostics" as const,
    action: { label: "Узнать стоимость", href: enquiry(`Здравствуйте! ${problem}. Хочу узнать стоимость ремонта. Модель ноутбука: `) },
  };
}

function process(first: string, second: string) {
  return {
    title: "Как проходит ремонт",
    items: [
      { title: "Обращение", text: first },
      { title: "Диагностика", text: second },
      { title: "Согласование", text: "Обсуждаем необходимые работы, стоимость и сроки ремонта." },
      { title: "Ремонт и выдача", text: "Выполняем ремонт и проверяем ноутбук под нагрузкой перед выдачей." },
    ],
  };
}

function contact(title: string, problem: string) {
  return {
    title,
    description: "Сообщите модель ноутбука и опишите проблему — подскажем следующий шаг и запишем на диагностику.",
    action: { label: "Написать мастеру", href: enquiry(`Здравствуйте! ${problem}. Модель ноутбука: `) },
  };
}

const quality: ServiceQualityData = {
  title: "Качество и гарантия",
  items: [
    { id: "warranty", title: "Гарантия на работы", description: "Условия на работы и запчасти сообщаем до ремонта.", icon: "warranty" },
    { id: "masters", title: "Точная диагностика", description: "Находим причину, а не меняем детали наугад.", icon: "master" },
    { id: "parts", title: "Совместимые детали", description: "Подбираем запчасти по модели и маркировке.", icon: "quality" },
    { id: "timing", title: "Согласованные сроки", description: "Обсуждаем время ремонта заранее.", icon: "clock" },
  ],
};

// Software causes belong to computer help, which has no page yet, so it is mentioned without a link.
export const laptopProblemPages: ProblemPageData[] = [
  {
    slug: "noutbuk-ne-vklyuchaetsya",
    directionSlug,
    metadata: {
      title: "Ноутбук не включается — ремонт в Борисове | Mandarin Сервис",
      description: "Ноутбук не включается и не реагирует на кнопку? Проверим блок питания, разъём, аккумулятор, BIOS и плату. Стоимость согласуем до ремонта.",
    },
    breadcrumbs: breadcrumbs("Не включается", "noutbuk-ne-vklyuchaetsya"),
    hero: hero("Ноутбук", "не включается", "Найдём причину: блок питания, разъём, аккумулятор, BIOS или плата. Согласуем стоимость до ремонта.", "Ноутбук не включается", { src: "/hero/laptop-wont-turn-on-v1.png", alt: "Ноутбук с полностью чёрным выключенным экраном" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "no-reaction", title: "Не реагирует на кнопку", icon: "laptop-off" },
        { id: "led", title: "Горят индикаторы, но экран чёрный", icon: "display-off" },
        { id: "fan", title: "Шумит кулер, нет загрузки", icon: "fan" },
        { id: "shutdown", title: "Включается и сразу гаснет", icon: "power" },
        { id: "charging", title: "Не реагирует на зарядку", icon: "charging" },
        { id: "liquid", title: "После залития или удара", icon: "water" },
      ],
    },
    causes: {
      title: "Почему ноутбук не включается",
      items: [
        { id: "power-supply", title: "Блок питания или разъём", description: "Неисправное зарядное устройство, кабель или гнездо питания.", icon: "power-supply" },
        { id: "battery", title: "Аккумулятор", description: "Глубоко разряженная или неисправная батарея блокирует запуск.", icon: "battery" },
        { id: "bios", title: "BIOS", description: "Сбой прошивки после обновления или скачка напряжения.", icon: "software" },
        { id: "board", title: "Материнская плата", description: "Повреждены цепи питания после залития, перегрева или удара.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice,
        { id: "connector", title: "Ремонт разъёма питания", price: "от 45 BYN", action: { label: "Подробнее", href: href("remont-razema-pitaniya") } },
        { id: "board", title: "Ремонт материнской платы", price: "от 45 BYN", action: { label: "Подробнее", href: href("remont-materinskoy-platy") } },
        { id: "liquid", title: "Ремонт после залития", price: "от 45 BYN", action: { label: "Подробнее", href: href("remont-posle-zalitiya") } },
      ],
      callout: callout("Ноутбук не включается"),
    },
    process: process("Сообщите модель ноутбука и что произошло перед поломкой. Приносите вместе с зарядкой.", "Проверяем блок питания, разъём, аккумулятор и цепи питания платы."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Проверьте индикатор на блоке питания и другую розетку.", "Отключите зарядку, зажмите кнопку питания на 30 секунд, затем подключите снова.", "Отключите все USB-устройства и флешки."], note: "Если ноутбук не ожил — нужна диагностика." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Ноутбук залили или уронили.", "Пахнет гарью или греется выключенный.", "Индикаторы мигают, но загрузки нет."], note: "После залития не включайте ноутбук и не подключайте зарядку." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему ноутбук не включается?", answer: "Частые причины — неисправный блок питания или разъём, разряженный аккумулятор, сбой BIOS или повреждение материнской платы. Точную причину определяем на диагностике." },
        { question: "Сохранятся ли файлы?", answer: "Если накопитель исправен, данные обычно сохраняются. При необходимости поможем скопировать важные файлы." },
        { question: "Сколько стоит ремонт?", answer: "Диагностика — от 5 BYN, ремонт разъёма и платы — от 45 BYN. Итоговую стоимость назовём после диагностики." },
        { question: "Нужно ли приносить зарядку?", answer: "Да, обязательно. Часто причина именно в блоке питания." },
      ],
    },
    contact: contact("Вернём ноутбук к работе", "Ноутбук не включается"),
  },
  {
    slug: "noutbuk-ne-zaryazhaetsya",
    directionSlug,
    metadata: {
      title: "Ноутбук не заряжается — ремонт в Борисове | Mandarin Сервис",
      description: "Ноутбук не заряжается или пишет «подключен, не заряжается»? Проверим адаптер, гнездо, батарею и контроллер заряда.",
    },
    breadcrumbs: breadcrumbs("Не заряжается", "noutbuk-ne-zaryazhaetsya"),
    hero: hero("Ноутбук", "не заряжается", "Проверим адаптер, гнездо питания, аккумулятор и контроллер заряда. Согласуем стоимость до ремонта.", "Ноутбук не заряжается", { src: "/hero/laptop-not-charging-v1.png", alt: "Ноутбук с подключённой зарядкой и значком пустой батареи на экране" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "not-charging", title: "«Подключен, не заряжается»", icon: "charging" },
        { id: "angle", title: "Заряжается под углом", icon: "power" },
        { id: "battery-only", title: "Работает только от сети", icon: "battery" },
        { id: "no-led", title: "Не горит индикатор зарядки", icon: "laptop-off" },
        { id: "usb-c", title: "Не заряжается по Type-C", icon: "usb" },
        { id: "slow", title: "Заряжается очень медленно", icon: "slow" },
      ],
    },
    causes: {
      title: "Почему ноутбук не заряжается",
      items: [
        { id: "charger", title: "Адаптер или кабель", description: "Неисправный или несовместимый блок питания, излом кабеля.", icon: "charger" },
        { id: "connector", title: "Гнездо питания", description: "Разболтанный, треснувший или отпаянный разъём.", icon: "connector" },
        { id: "battery", title: "Аккумулятор", description: "Изношенная батарея не принимает заряд.", icon: "battery" },
        { id: "board", title: "Контроллер заряда", description: "Неисправность цепей зарядки на материнской плате.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice,
        { id: "connector", title: "Ремонт разъёма питания", price: "от 45 BYN", action: { label: "Подробнее", href: href("remont-razema-pitaniya") } },
        { id: "board", title: "Ремонт цепей зарядки", price: "от 45 BYN", action: { label: "Подробнее", href: href("remont-materinskoy-platy") } },
        { id: "battery", title: "Замена аккумулятора", price: "По модели", action: { label: "Уточнить", href: enquiry("Здравствуйте! Ноутбук не заряжается. Интересует замена аккумулятора. Модель ноутбука: ") } },
      ],
      callout: callout("Ноутбук не заряжается"),
    },
    process: process("Сообщите модель ноутбука. Приносите его вместе с зарядкой.", "Проверяем блок питания, гнездо, аккумулятор и цепи зарядки."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Попробуйте другую розетку и проверьте кабель на изломы.", "Проверьте, что мощность зарядки соответствует ноутбуку.", "Перезагрузите ноутбук с подключённой зарядкой."], note: "Если не помогло — нужна проверка." },
        { id: "warning", tone: "warning", title: "Когда выключить ноутбук сразу", items: ["Разъём искрит или пахнет гарью.", "Штекер или аккумулятор сильно нагреваются.", "Аккумулятор вздулся, корпус разошёлся."], note: "Не пользуйтесь зарядкой до проверки." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Что значит «подключен, не заряжается»?", answer: "Ноутбук видит питание, но не заряжает батарею. Причина может быть в изношенном аккумуляторе, настройках производителя или контроллере заряда." },
        { question: "Может быть виновата зарядка?", answer: "Да, это частая причина. Приносите ноутбук вместе с блоком питания — проверим оба." },
        { question: "Сколько стоит ремонт?", answer: "Ремонт разъёма питания — от 45 BYN. Замену аккумулятора и ремонт платы оцениваем по модели и после диагностики." },
        { question: "Можно ли работать только от сети?", answer: "Можно, но при отключении света ноутбук выключится без сохранения данных. Вздутую батарею нужно снять как можно скорее." },
      ],
    },
    contact: contact("Вернём ноутбуку зарядку", "Ноутбук не заряжается"),
  },
  {
    slug: "noutbuk-greetsya",
    directionSlug,
    metadata: {
      title: "Ноутбук сильно греется — ремонт в Борисове | Mandarin Сервис",
      description: "Ноутбук перегревается, горячий корпус и тормоза под нагрузкой? Почистим охлаждение, заменим термопасту или кулер. Чистка от 35 BYN.",
    },
    breadcrumbs: breadcrumbs("Сильно греется", "noutbuk-greetsya"),
    hero: hero("Ноутбук", "сильно греется", "Чаще всего причина в пыли и высохшей термопасте. Почистим охлаждение и проверим температуры под нагрузкой.", "Ноутбук сильно греется", { src: "/hero/laptop-overheating-v1.png", alt: "Ноутбук с горячим воздухом из решётки и значком термометра на экране" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "hot", title: "Горячий корпус", icon: "heat" },
        { id: "noise", title: "Кулер работает на максимуме", icon: "noise" },
        { id: "slow", title: "Тормозит под нагрузкой", icon: "slow" },
        { id: "shutdown", title: "Выключается сам", icon: "power" },
        { id: "games", title: "Проседает FPS в играх", icon: "software" },
        { id: "fan", title: "Слабый поток воздуха", icon: "fan" },
      ],
    },
    causes: {
      title: "Почему ноутбук греется",
      items: [
        { id: "dust", title: "Пыль в радиаторе", description: "Пыль забивает радиатор, и воздух перестаёт охлаждать процессор.", icon: "dust" },
        { id: "paste", title: "Высохшая термопаста", description: "Со временем термопаста теряет свойства и хуже передаёт тепло.", icon: "heat" },
        { id: "fan", title: "Износ кулера", description: "Кулер крутится медленнее или останавливается.", icon: "fan" },
        { id: "pipe", title: "Тепловая трубка", description: "Повреждённая трубка или плохой прижим радиатора.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        { id: "cleaning", title: "Чистка и замена термопасты", price: "от 35 BYN", action: { label: "Подробнее", href: href("chistka-i-zamena-termopasty") } },
        { id: "cooling", title: "Ремонт системы охлаждения", price: "от 42 BYN", action: { label: "Подробнее", href: href("remont-sistemy-ohlazhdeniya") } },
        diagnosticsPrice,
      ],
      callout: callout("Ноутбук сильно греется"),
    },
    process: process("Сообщите модель ноутбука и когда он чистился последний раз.", "Проверяем температуры, кулер, радиатор и термоинтерфейс."),
    advice: {
      panels: [
        { id: "tips", tone: "help", title: "Что можно сделать самостоятельно", items: ["Не ставьте ноутбук на кровать, диван или колени.", "Проверьте, что вентиляционные решётки не закрыты.", "Закройте тяжёлые программы и проверьте автозагрузку."], note: "Если ноутбук не чистили больше года — скорее всего, пора." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Ноутбук выключается под нагрузкой.", "Кулер трещит, гудит или не крутится.", "Корпус горячий даже без нагрузки."], note: "Постоянный перегрев сокращает срок службы видеочипа и платы." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему ноутбук сильно греется?", answer: "Чаще всего из-за пыли в радиаторе и высохшей термопасты. Реже — из-за износа кулера или повреждённой тепловой трубки." },
        { question: "Поможет ли охлаждающая подставка?", answer: "Немного снизит температуру, но не решит проблему пыли и термопасты. Лучше провести чистку." },
        { question: "Сколько стоит чистка?", answer: "От 35 BYN, в зависимости от модели. Ремонт системы охлаждения — от 42 BYN." },
        { question: "Сохранятся ли файлы?", answer: "Чистка не затрагивает накопитель. Если ноутбук включается, всё же рекомендуем сделать резервную копию." },
      ],
    },
    contact: contact("Вернём ноутбуку нормальную температуру", "Ноутбук сильно греется"),
  },
  {
    slug: "noutbuk-shumit",
    directionSlug,
    metadata: {
      title: "Ноутбук сильно шумит — ремонт в Борисове | Mandarin Сервис",
      description: "Ноутбук громко шумит, гудит или трещит? Почистим радиатор, заменим кулер или найдём фоновую нагрузку. Чистка от 35 BYN.",
    },
    breadcrumbs: breadcrumbs("Шумит", "noutbuk-shumit"),
    hero: hero("Ноутбук", "сильно шумит", "Определим источник шума: пыль, изношенный кулер, жёсткий диск или фоновая нагрузка.", "Ноутбук сильно шумит", { src: "/hero/laptop-noisy-v1.png", alt: "Запылённый вентилятор ноутбука со снятой нижней крышкой" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "loud", title: "Громко гудит кулер", icon: "noise" },
        { id: "rattle", title: "Трещит или скрежещет", icon: "fan" },
        { id: "idle", title: "Шумит без нагрузки", icon: "software" },
        { id: "hdd", title: "Щёлкает жёсткий диск", icon: "storage" },
        { id: "heat", title: "Шумит и греется", icon: "heat" },
        { id: "slow", title: "Шумит и тормозит", icon: "slow" },
      ],
    },
    causes: {
      title: "Почему ноутбук шумит",
      items: [
        { id: "dust", title: "Забитый радиатор", description: "Кулеру приходится крутиться на максимуме, чтобы охладить процессор.", icon: "dust" },
        { id: "fan", title: "Износ кулера", description: "Изношенный подшипник трещит, гудит или вибрирует.", icon: "fan" },
        { id: "storage", title: "Жёсткий диск", description: "Щелчки и скрежет HDD — признак износа. Стоит сохранить данные.", icon: "storage" },
        { id: "apps", title: "Фоновая нагрузка", description: "Программы и вирусы загружают процессор. Это решает компьютерная помощь.", icon: "apps" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        { id: "cleaning", title: "Чистка и замена термопасты", price: "от 35 BYN", action: { label: "Подробнее", href: href("chistka-i-zamena-termopasty") } },
        { id: "cooling", title: "Замена кулера", price: "от 42 BYN", action: { label: "Подробнее", href: href("remont-sistemy-ohlazhdeniya") } },
        { id: "ssd", title: "Замена HDD на SSD", price: "от 35 BYN", action: { label: "Подробнее", href: href("modernizaciya-ssd-i-ram") } },
        diagnosticsPrice,
      ],
      callout: callout("Ноутбук сильно шумит"),
    },
    process: process("Сообщите модель ноутбука и опишите, когда появляется шум.", "Определяем источник шума: кулер, радиатор, диск или нагрузка."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Откройте диспетчер задач и проверьте загрузку процессора.", "Закройте лишние программы и вкладки браузера.", "Поставьте ноутбук на твёрдую поверхность."], note: "Если шум остаётся без нагрузки — нужна чистка или замена кулера." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Кулер трещит или скрежещет.", "Жёсткий диск щёлкает.", "Ноутбук шумит и выключается."], note: "При щелчках жёсткого диска сразу сделайте резервную копию." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему ноутбук шумит без нагрузки?", answer: "Чаще всего из-за пыли в радиаторе или износа кулера. Также проверьте диспетчер задач — фоновые процессы могут нагружать процессор." },
        { question: "Кулер трещит — это опасно?", answer: "Изношенный кулер может остановиться, и ноутбук начнёт перегреваться. Лучше заменить его." },
        { question: "Что делать, если щёлкает жёсткий диск?", answer: "Сразу сделайте резервную копию важных данных и замените диск. Установка SSD заодно ускорит ноутбук." },
        { question: "Сколько стоит ремонт?", answer: "Чистка — от 35 BYN, замена кулера — от 42 BYN, установка SSD — от 35 BYN плюс стоимость накопителя." },
      ],
    },
    contact: contact("Вернём ноутбуку тишину", "Ноутбук сильно шумит"),
  },
  {
    slug: "noutbuk-tormozit",
    directionSlug,
    metadata: {
      title: "Ноутбук медленно работает — ремонт в Борисове | Mandarin Сервис",
      description: "Ноутбук тормозит и долго загружается? Установим SSD и память, почистим охлаждение. Установка от 35 BYN.",
    },
    breadcrumbs: breadcrumbs("Медленно работает", "noutbuk-tormozit"),
    hero: hero("Ноутбук", "медленно работает", "Определим причину: старый жёсткий диск, мало памяти, перегрев или программы. Подскажем, как ускорить.", "Ноутбук медленно работает", { src: "/hero/laptop-slow-v1.png", alt: "Ноутбук со значком загрузки на экране" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "boot", title: "Долго загружается", icon: "slow" },
        { id: "apps", title: "Медленно открывает программы", icon: "software" },
        { id: "freeze", title: "Зависает", icon: "laptop-off" },
        { id: "browser", title: "Тормозит браузер", icon: "layers" },
        { id: "heat", title: "Тормозит при нагреве", icon: "heat" },
        { id: "disk", title: "Диск загружен на 100%", icon: "storage" },
      ],
    },
    causes: {
      title: "Почему ноутбук тормозит",
      items: [
        { id: "storage", title: "Медленный HDD", description: "Жёсткий диск — самое узкое место старых ноутбуков. SSD ускоряет в разы.", icon: "storage" },
        { id: "memory", title: "Мало памяти", description: "4–8 ГБ не хватает для современного браузера и программ.", icon: "memory" },
        { id: "heat", title: "Перегрев", description: "Процессор снижает частоту, чтобы не перегреться.", icon: "heat" },
        { id: "virus", title: "Программы и вирусы", description: "Автозагрузка и вредоносные программы. Это решает компьютерная помощь.", icon: "virus" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        { id: "ssd", title: "Установка SSD и памяти", price: "от 35 BYN", action: { label: "Подробнее", href: href("modernizaciya-ssd-i-ram") } },
        { id: "cleaning", title: "Чистка и замена термопасты", price: "от 35 BYN", action: { label: "Подробнее", href: href("chistka-i-zamena-termopasty") } },
        diagnosticsPrice,
      ],
      callout: {
        title: "Подскажем, как ускорить ноутбук",
        description: "Сообщите модель — оценим, что даст SSD, память или чистка.",
        action: { label: "Написать мастеру", href: enquiry("Здравствуйте! Ноутбук медленно работает. Хочу его ускорить. Модель ноутбука: ") },
      },
    },
    process: process("Сообщите модель ноутбука и для каких задач его используете.", "Проверяем накопитель, память, температуры и систему."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Уберите лишние программы из автозагрузки.", "Освободите место на системном диске.", "Проверьте, не загружен ли диск на 100% в диспетчере задач."], note: "Если диск постоянно загружен на 100%, скорее всего, поможет SSD." },
        { id: "software", tone: "warning", title: "Когда дело в системе", items: ["Всплывает реклама, меняется стартовая страница.", "Тормоза начались после установки программы.", "Windows выдаёт ошибки."], note: "Это программные проблемы — их решает компьютерная помощь: удаление вирусов, оптимизация, переустановка Windows." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Что лучше всего ускорит старый ноутбук?", answer: "Обычно установка SSD вместо жёсткого диска — эффект заметен сразу. Если памяти 4–8 ГБ, стоит добавить ещё." },
        { question: "Нужно ли переустанавливать Windows?", answer: "Не всегда. При установке SSD переносим систему. Если Windows работает со сбоями, может помочь переустановка — это относится к компьютерной помощи." },
        { question: "Сколько стоит ускорение?", answer: "Установка SSD или памяти — от 35 BYN плюс стоимость деталей. Чистка — от 35 BYN." },
        { question: "Сохранятся ли файлы?", answer: "Да, при установке SSD переносим систему и файлы." },
      ],
    },
    contact: contact("Ускорим ваш ноутбук", "Ноутбук медленно работает"),
  },
  {
    slug: "noutbuk-vyklyuchaetsya",
    directionSlug,
    metadata: {
      title: "Ноутбук сам выключается — ремонт в Борисове | Mandarin Сервис",
      description: "Ноутбук выключается сам, под нагрузкой или от батареи? Проверим охлаждение, питание, аккумулятор и плату.",
    },
    breadcrumbs: breadcrumbs("Сам выключается", "noutbuk-vyklyuchaetsya"),
    hero: hero("Ноутбук", "сам выключается", "Проверим охлаждение, питание, аккумулятор и плату. Согласуем стоимость до ремонта.", "Ноутбук сам выключается", { src: "/hero/laptop-shuts-down-v1.png", alt: "Экран ноутбука гаснет в момент внезапного выключения" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "load", title: "Под нагрузкой и в играх", icon: "heat" },
        { id: "battery", title: "При работе от батареи", icon: "battery" },
        { id: "random", title: "В случайный момент", icon: "power" },
        { id: "move", title: "При движении ноутбука", icon: "layers" },
        { id: "fan", title: "Сначала шумит кулер", icon: "fan" },
        { id: "liquid", title: "После залития", icon: "water" },
      ],
    },
    causes: {
      title: "Почему ноутбук выключается",
      items: [
        { id: "heat", title: "Перегрев", description: "Самая частая причина: пыль и высохшая термопаста. Ноутбук защищается отключением.", icon: "heat" },
        { id: "power-supply", title: "Питание", description: "Неисправный разъём или блок питания.", icon: "power-supply" },
        { id: "battery", title: "Аккумулятор", description: "Изношенная батарея не выдерживает нагрузку.", icon: "battery" },
        { id: "board", title: "Плата", description: "Неисправность цепей питания или последствия залития.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        { id: "cleaning", title: "Чистка и замена термопасты", price: "от 35 BYN", action: { label: "Подробнее", href: href("chistka-i-zamena-termopasty") } },
        { id: "cooling", title: "Ремонт системы охлаждения", price: "от 42 BYN", action: { label: "Подробнее", href: href("remont-sistemy-ohlazhdeniya") } },
        { id: "board", title: "Ремонт материнской платы", price: "от 45 BYN", action: { label: "Подробнее", href: href("remont-materinskoy-platy") } },
        diagnosticsPrice,
      ],
      callout: callout("Ноутбук сам выключается"),
    },
    process: process("Сообщите модель ноутбука и когда он выключается.", "Проверяем температуры, питание, аккумулятор и плату."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Обратите внимание, выключается ли ноутбук под нагрузкой — это признак перегрева.", "Проверьте, происходит ли это только от батареи.", "Поставьте ноутбук на твёрдую поверхность."], note: "Эти наблюдения помогут быстрее найти причину." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Ноутбук выключается всё чаще.", "Корпус горячий, кулер шумит на максимуме.", "Отключения начались после залития или удара."], note: "Регулярные аварийные отключения могут повредить файлы и накопитель." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему ноутбук выключается под нагрузкой?", answer: "Чаще всего из-за перегрева: процессор или видеочип достигают критической температуры, и ноутбук отключается для защиты. Поможет чистка и замена термопасты." },
        { question: "Выключается только от батареи — что это?", answer: "Скорее всего, изношен аккумулятор. Также возможна проблема с контроллером питания." },
        { question: "Сколько стоит ремонт?", answer: "Чистка — от 35 BYN, ремонт охлаждения — от 42 BYN, ремонт платы — от 45 BYN. Итоговую стоимость назовём после диагностики." },
        { question: "Сохранятся ли файлы?", answer: "Обычно да. Регулярные отключения могут повредить файлы — рекомендуем сделать резервную копию." },
      ],
    },
    contact: contact("Вернём ноутбуку стабильность", "Ноутбук сам выключается"),
  },
  {
    slug: "net-izobrazheniya",
    directionSlug,
    metadata: {
      title: "Нет изображения на ноутбуке — ремонт в Борисове | Mandarin Сервис",
      description: "Ноутбук включается, но экран чёрный? Проверим матрицу, шлейф, подсветку и видеочип. Стоимость согласуем до ремонта.",
    },
    breadcrumbs: breadcrumbs("Нет изображения", "net-izobrazheniya"),
    hero: hero("На ноутбуке", "нет изображения", "Проверим матрицу, шлейф, подсветку и видеочип. Определим причину и согласуем стоимость до ремонта.", "На ноутбуке нет изображения", { src: "/hero/laptop-no-image-v1.png", alt: "Ноутбук с горящим индикатором питания и чёрным экраном" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "black", title: "Экран чёрный, кулер шумит", icon: "display-off" },
        { id: "dim", title: "Изображение еле видно", icon: "laptop-off" },
        { id: "lines", title: "Полосы и артефакты", icon: "display-lines" },
        { id: "angle", title: "Пропадает при наклоне крышки", icon: "flicker" },
        { id: "external", title: "На мониторе изображение есть", icon: "device" },
        { id: "cracks", title: "Разбит экран", icon: "laptop-damaged" },
      ],
    },
    causes: {
      title: "Почему нет изображения",
      items: [
        { id: "matrix", title: "Матрица", description: "Повреждение после удара или давления на крышку.", icon: "matrix" },
        { id: "cable", title: "Шлейф", description: "Перетирается в петлях — изображение пропадает при наклоне крышки.", icon: "connection" },
        { id: "backlight", title: "Подсветка", description: "Изображение есть, но его почти не видно без фонарика.", icon: "backlight" },
        { id: "gpu", title: "Видеочип", description: "Нет изображения и на внешнем мониторе. Часто после перегрева.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice,
        { id: "matrix", title: "Замена матрицы", price: "от 180 BYN", action: { label: "Подробнее", href: href("zamena-matricy") } },
        { id: "board", title: "Ремонт платы и видеочипа", price: "от 45 BYN", action: { label: "Подробнее", href: href("remont-materinskoy-platy") } },
      ],
      callout: callout("На ноутбуке нет изображения"),
    },
    process: process("Сообщите модель ноутбука и опишите, как пропало изображение.", "Проверяем матрицу, шлейф, подсветку и видеочип."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Подключите ноутбук к монитору или телевизору по HDMI.", "Посветите фонариком на экран — видно ли изображение.", "Проверьте клавиши яркости и переключения экрана (Fn)."], note: "Результат этих проверок поможет быстрее определить причину." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Экран разбит или на нём пятна.", "Изображение пропадает при наклоне крышки.", "Нет изображения и на внешнем мониторе."], note: "Не давите на экран и не открывайте крышку резко, если шлейф уже барахлит." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Как понять, в чём причина?", answer: "Подключите внешний монитор. Если там изображение есть — дело в матрице, шлейфе или подсветке. Если нет — вероятно, в видеочипе или плате." },
        { question: "Сколько стоит ремонт?", answer: "Замена матрицы — от 180 BYN, ремонт платы — от 45 BYN. Точную стоимость назовём после диагностики." },
        { question: "Можно ли пользоваться ноутбуком с внешним монитором?", answer: "Да, если внешний монитор работает. Но если причина в видеочипе, неисправность может прогрессировать." },
        { question: "Сохранятся ли файлы?", answer: "Ремонт экрана не затрагивает накопитель. Файлы можно скопировать, подключив внешний монитор." },
      ],
    },
    contact: contact("Вернём изображение вашему ноутбуку", "На ноутбуке нет изображения"),
  },
];
