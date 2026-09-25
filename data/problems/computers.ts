import { computerRepairData, getDirectionItemHref } from "@/data/directions";
import type { ServiceQualityData } from "@/data/services/types";
import type { ProblemPageData } from "./types";

// Source: концепт/content/site-pages.md. Prices, terms and warranty await confirmation by the workshop.
const directionSlug = computerRepairData.slug;
const href = (slug: string) => getDirectionItemHref(directionSlug, slug);

function enquiry(message: string) {
  return `${computerRepairData.hero.secondaryAction.href}?text=${encodeURIComponent(message)}`;
}

function breadcrumbs(label: string, slug: string) {
  return [...computerRepairData.breadcrumbs, { label, href: href(slug) }];
}

function hero(title: string, accent: string, description: string, problem: string, image?: ProblemPageData["hero"]["image"]): ProblemPageData["hero"] {
  return {
    title,
    accent,
    description,
    image: image ?? computerRepairData.hero.image,
    backgrounds: computerRepairData.hero.backgrounds,
    primaryAction: { label: "Узнать стоимость", href: enquiry(`Здравствуйте! ${problem}. Хочу уточнить стоимость диагностики и ремонта. Конфигурация: `) },
    secondaryAction: computerRepairData.hero.secondaryAction,
    benefits: [
      { title: "Диагностика от 5 BYN", description: "", icon: "diagnostics" },
      { title: "Цена до ремонта", description: "", icon: "price" },
      { title: "Гарантия на работы", description: "", icon: "shield" },
    ],
  };
}

const diagnosticsPrice = { id: "diagnostics", title: "Диагностика", price: "от 5 BYN", action: { label: "Подробнее", href: href("diagnostika-pk") } };

function callout(problem: string) {
  return {
    title: "Точную цену назовём после диагностики",
    description: "Определим причину и согласуем стоимость до начала ремонта.",
    icon: "diagnostics" as const,
    action: { label: "Узнать стоимость", href: enquiry(`Здравствуйте! ${problem}. Хочу узнать стоимость ремонта. Конфигурация: `) },
  };
}

function process(first: string, second: string) {
  return {
    title: "Как проходит ремонт",
    items: [
      { title: "Обращение", text: first },
      { title: "Диагностика", text: second },
      { title: "Согласование", text: "Обсуждаем необходимые работы, стоимость и сроки ремонта." },
      { title: "Ремонт и выдача", text: "Выполняем ремонт и проверяем компьютер под нагрузкой перед выдачей." },
    ],
  };
}

function contact(title: string, problem: string) {
  return {
    title,
    description: "Опишите поведение компьютера и его конфигурацию — подскажем следующий шаг и запишем на диагностику.",
    action: { label: "Написать мастеру", href: enquiry(`Здравствуйте! ${problem}. Конфигурация: `) },
  };
}

const quality: ServiceQualityData = {
  title: "Качество и гарантия",
  items: [
    { id: "warranty", title: "Гарантия на работы", description: "Условия на работы и комплектующие сообщаем до ремонта.", icon: "warranty" },
    { id: "masters", title: "Точная диагностика", description: "Находим причину, а не меняем детали наугад.", icon: "master" },
    { id: "parts", title: "Совместимые детали", description: "Проверяем совместимость перед заменой.", icon: "quality" },
    { id: "timing", title: "Согласованные сроки", description: "Обсуждаем время ремонта заранее.", icon: "clock" },
  ],
};

// Software causes belong to computer help, which has no page yet, so it is mentioned without a link.
export const computerProblemPages: ProblemPageData[] = [
  {
    slug: "kompyuter-ne-vklyuchaetsya",
    directionSlug,
    metadata: {
      title: "Компьютер не включается — ремонт в Борисове | Mandarin Сервис",
      description: "Компьютер не включается и не реагирует на кнопку? Проверим кабель, блок питания, кнопку и материнскую плату.",
    },
    breadcrumbs: breadcrumbs("Не включается", "kompyuter-ne-vklyuchaetsya"),
    hero: hero("Компьютер", "не включается", "Проверим кабель, блок питания, кнопку и материнскую плату. Согласуем стоимость до ремонта.", "Компьютер не включается", { src: "/hero/pc-wont-turn-on-v1.png", alt: "Системный блок без индикаторов и монитор с чёрным экраном" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "no-reaction", title: "Не реагирует на кнопку", icon: "pc-off" },
        { id: "fans", title: "Крутятся вентиляторы, нет загрузки", icon: "fan" },
        { id: "shutdown", title: "Включается и сразу гаснет", icon: "power" },
        { id: "beeps", title: "Пищит при включении", icon: "sound" },
        { id: "smell", title: "Запах гари", icon: "heat" },
        { id: "surge", title: "После скачка напряжения", icon: "charging" },
      ],
    },
    causes: {
      title: "Почему компьютер не включается",
      items: [
        { id: "cable", title: "Кабель и розетка", description: "Выключен тумблер блока питания, неисправен кабель или сетевой фильтр.", icon: "connection" },
        { id: "psu", title: "Блок питания", description: "Самая частая причина, особенно после скачка напряжения.", icon: "power-supply" },
        { id: "button", title: "Кнопка питания", description: "Неисправная кнопка или отошедший разъём на плате.", icon: "button" },
        { id: "board", title: "Материнская плата", description: "Вздутые конденсаторы или повреждение цепей питания.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice,
        { id: "parts", title: "Замена блока питания или платы", price: "от 35 BYN", action: { label: "Подробнее", href: href("zamena-komplektuyushchih") } },
      ],
      callout: callout("Компьютер не включается"),
    },
    process: process("Опишите, что происходит при нажатии кнопки, и конфигурацию компьютера.", "Проверяем блок питания, кнопку, плату и комплектующие."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Проверьте тумблер на задней стенке блока питания.", "Подключите компьютер к другой розетке без удлинителя.", "Проверьте, горят ли индикаторы на плате или корпусе."], note: "Если компьютер не включается — нужна диагностика." },
        { id: "warning", tone: "warning", title: "Когда отключить от сети", items: ["Пахнет гарью или виден дым.", "Блок питания щёлкает или искрит.", "Компьютер отключился после грозы или скачка напряжения."], note: "Не включайте компьютер повторно — можно повредить другие комплектующие." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему компьютер не включается?", answer: "Чаще всего причина в блоке питания, реже — в кнопке, материнской плате или комплектующих. Точную причину определим на диагностике." },
        { question: "Нужно ли приносить монитор?", answer: "Обычно достаточно системного блока с кабелем питания." },
        { question: "Сохранятся ли файлы?", answer: "Если накопитель исправен, данные сохраняются. При необходимости поможем их скопировать." },
        { question: "Сколько стоит ремонт?", answer: "Диагностика — от 5 BYN, замена блока питания или других деталей — от 35 BYN плюс стоимость детали." },
      ],
    },
    contact: contact("Вернём компьютер к работе", "Компьютер не включается"),
  },
  {
    slug: "net-izobrazheniya",
    directionSlug,
    metadata: {
      title: "Компьютер включается, но нет изображения — ремонт в Борисове | Mandarin Сервис",
      description: "Компьютер работает, а монитор чёрный? Проверим кабель, монитор, память, видеокарту и плату.",
    },
    breadcrumbs: breadcrumbs("Нет изображения", "net-izobrazheniya"),
    hero: hero("Компьютер включается,", "но нет изображения", "Проверим кабель, монитор, оперативную память, видеокарту и плату. Согласуем стоимость до ремонта.", "Компьютер включается, но нет изображения", { src: "/hero/pc-no-image-v1.png", alt: "Работающий системный блок с горящим индикатором и монитор с чёрным экраном" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "black", title: "Чёрный экран, вентиляторы крутятся", icon: "display-off" },
        { id: "no-signal", title: "Монитор пишет «нет сигнала»", icon: "pc" },
        { id: "beeps", title: "Пищит при включении", icon: "sound" },
        { id: "artifacts", title: "Артефакты и полосы", icon: "display-lines" },
        { id: "after-upgrade", title: "После замены деталей", icon: "upgrade" },
        { id: "sleep", title: "Не просыпается после сна", icon: "reboot" },
      ],
    },
    causes: {
      title: "Почему нет изображения",
      items: [
        { id: "cable", title: "Кабель и монитор", description: "Неисправный кабель, неверный вход монитора или подключение к плате вместо видеокарты.", icon: "monitor" },
        { id: "memory", title: "Оперативная память", description: "Окислились контакты или неисправен модуль.", icon: "memory" },
        { id: "gpu", title: "Видеокарта", description: "Неисправность видеокарты или её питания.", icon: "gpu" },
        { id: "board", title: "Материнская плата", description: "Сбой BIOS или повреждение платы.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice,
        { id: "gpu", title: "Ремонт видеокарты", price: "от 40 BYN", action: { label: "Подробнее", href: href("remont-videokarty") } },
        { id: "parts", title: "Замена памяти или платы", price: "от 35 BYN", action: { label: "Подробнее", href: href("zamena-komplektuyushchih") } },
      ],
      callout: callout("Компьютер включается, но нет изображения"),
    },
    process: process("Опишите, что показывает монитор, и конфигурацию компьютера.", "Проверяем кабель, память, видеокарту и плату."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Проверьте, что кабель подключён к видеокарте, а не к разъёму на плате.", "Выберите правильный вход на мониторе (HDMI, DisplayPort).", "Попробуйте другой кабель или монитор."], note: "Если изображения нет — нужна диагностика." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Компьютер пищит при включении.", "Проблема появилась после замены деталей или чистки.", "Артефакты появляются ещё до загрузки Windows."], note: "Писк при включении — код ошибки платы, он помогает найти причину." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему компьютер работает, а изображения нет?", answer: "Частые причины — кабель или монитор, оперативная память, видеокарта или материнская плата. Точную причину определим на диагностике." },
        { question: "Что значит писк при включении?", answer: "Это код ошибки материнской платы. Он часто указывает на память или видеокарту." },
        { question: "Нужно ли приносить монитор?", answer: "Если есть сомнения в мониторе — да, проверим и его." },
        { question: "Сколько стоит ремонт?", answer: "Диагностика — от 5 BYN, ремонт видеокарты — от 40 BYN, замена деталей — от 35 BYN." },
      ],
    },
    contact: contact("Вернём изображение", "Компьютер включается, но нет изображения"),
  },
  {
    slug: "kompyuter-tormozit",
    directionSlug,
    metadata: {
      title: "Компьютер медленно работает — ремонт в Борисове | Mandarin Сервис",
      description: "Компьютер тормозит и долго загружается? Установим SSD и память, почистим от пыли, найдём причину.",
    },
    breadcrumbs: breadcrumbs("Медленно работает", "kompyuter-tormozit"),
    hero: hero("Компьютер", "медленно работает", "Определим причину: накопитель, память, перегрев или программы. Подскажем, как ускорить.", "Компьютер медленно работает", { src: "/hero/pc-slow-v1.png", alt: "Монитор со значком песочных часов и системный блок" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "boot", title: "Долго загружается", icon: "slow" },
        { id: "apps", title: "Медленно открывает программы", icon: "software" },
        { id: "freeze", title: "Зависает", icon: "pc-off" },
        { id: "games", title: "Тормозит в играх", icon: "upgrade" },
        { id: "heat", title: "Тормозит при нагреве", icon: "heat" },
        { id: "disk", title: "Диск загружен на 100%", icon: "storage" },
      ],
    },
    causes: {
      title: "Почему компьютер тормозит",
      items: [
        { id: "storage", title: "Медленный накопитель", description: "Старый HDD — самое узкое место. SSD ускоряет систему в разы.", icon: "storage" },
        { id: "memory", title: "Мало памяти", description: "8 ГБ и меньше не хватает для браузера и современных программ.", icon: "memory" },
        { id: "heat", title: "Перегрев", description: "Пыль и высохшая термопаста — процессор снижает частоту.", icon: "heat" },
        { id: "virus", title: "Программы и вирусы", description: "Автозагрузка и вредоносные программы. Это решает компьютерная помощь.", icon: "virus" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        { id: "upgrade", title: "Модернизация: SSD и память", price: "Договорная", action: { label: "Подробнее", href: href("modernizaciya-pk") } },
        { id: "cleaning", title: "Чистка и замена термопасты", price: "от 35 BYN", action: { label: "Подробнее", href: href("chistka-i-obsluzhivanie") } },
        { id: "windows", title: "Установка Windows", price: "По составу комплекта", action: { label: "Подробнее", href: "/ustanovka-windows/" } },
        diagnosticsPrice,
      ],
      callout: {
        title: "Подскажем, как ускорить компьютер",
        description: "Сообщите конфигурацию — оценим, что даст SSD, память или чистка.",
        action: { label: "Написать мастеру", href: enquiry("Здравствуйте! Компьютер медленно работает. Хочу его ускорить. Конфигурация: ") },
      },
    },
    process: process("Опишите, когда компьютер тормозит, и его конфигурацию.", "Проверяем накопитель, память, температуры и систему."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Уберите лишние программы из автозагрузки.", "Освободите место на системном диске.", "Проверьте в диспетчере задач, что загружено: процессор, память или диск."], note: "Если диск постоянно загружен на 100%, скорее всего, поможет SSD." },
        { id: "software", tone: "warning", title: "Когда дело в системе", items: ["Всплывает реклама, меняется стартовая страница.", "Тормоза начались после установки программы.", "Windows выдаёт ошибки."], note: "Это программные проблемы — их решает компьютерная помощь: удаление вирусов, оптимизация, переустановка Windows." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Что лучше всего ускорит старый компьютер?", answer: "Обычно установка SSD вместо жёсткого диска. Если памяти 8 ГБ и меньше — добавить память." },
        { question: "Может, лучше купить новый?", answer: "Оценим конфигурацию и честно скажем, что выгоднее: обновление или сборка нового ПК." },
        { question: "Нужно ли переустанавливать Windows?", answer: "Не всегда. При установке SSD переносим систему. Если Windows работает со сбоями — это компьютерная помощь." },
        { question: "Сохранятся ли файлы?", answer: "Да, при установке SSD переносим систему и файлы." },
      ],
    },
    contact: contact("Ускорим ваш компьютер", "Компьютер медленно работает"),
  },
  {
    slug: "kompyuter-perezagruzhaetsya",
    directionSlug,
    metadata: {
      title: "Компьютер сам перезагружается — ремонт в Борисове | Mandarin Сервис",
      description: "Компьютер перезагружается или выключается сам? Проверим блок питания, температуры, память и драйверы.",
    },
    breadcrumbs: breadcrumbs("Перезагружается", "kompyuter-perezagruzhaetsya"),
    hero: hero("Компьютер сам", "перезагружается", "Проверим блок питания, температуры, память и драйверы. Согласуем стоимость до ремонта.", "Компьютер сам перезагружается", { src: "/hero/pc-restarts-v1.png", alt: "Монитор со значком перезагрузки и системный блок" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "load", title: "В играх и под нагрузкой", icon: "heat" },
        { id: "random", title: "В случайный момент", icon: "reboot" },
        { id: "boot", title: "При загрузке Windows", icon: "windows" },
        { id: "bsod", title: "С синим экраном", icon: "bsod" },
        { id: "noise", title: "Перед этим шумят вентиляторы", icon: "fan" },
        { id: "power", title: "Выключается без перезагрузки", icon: "pc-off" },
      ],
    },
    causes: {
      title: "Почему компьютер перезагружается",
      items: [
        { id: "psu", title: "Блок питания", description: "Не тянет нагрузку или изношен. Особенно при играх.", icon: "power-supply" },
        { id: "heat", title: "Перегрев", description: "Пыль, высохшая термопаста или неисправный вентилятор.", icon: "heat" },
        { id: "memory", title: "Оперативная память", description: "Неисправный модуль или неверные настройки разгона.", icon: "memory" },
        { id: "drivers", title: "Драйверы и система", description: "Сбои драйверов и обновлений. Это решает компьютерная помощь.", icon: "system" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice,
        { id: "cleaning", title: "Чистка и замена термопасты", price: "от 35 BYN", action: { label: "Подробнее", href: href("chistka-i-obsluzhivanie") } },
        { id: "parts", title: "Замена блока питания или памяти", price: "от 35 BYN", action: { label: "Подробнее", href: href("zamena-komplektuyushchih") } },
      ],
      callout: callout("Компьютер сам перезагружается"),
    },
    process: process("Опишите, когда компьютер перезагружается, и его конфигурацию.", "Проверяем блок питания, температуры, память и журнал ошибок."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Обратите внимание, перезагружается ли компьютер под нагрузкой.", "Проверьте, не забиты ли пылью решётки корпуса.", "Отключите разгон, если он включён в BIOS."], note: "Эти наблюдения помогут быстрее найти причину." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Перезагрузки становятся чаще.", "Блок питания щёлкает или гудит.", "Появляется синий экран."], note: "Регулярные аварийные перезагрузки могут повредить файлы и накопитель." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему компьютер перезагружается в играх?", answer: "Чаще всего блок питания не тянет нагрузку или перегреваются процессор и видеокарта." },
        { question: "Может ли это быть из-за Windows?", answer: "Да, сбои драйверов и обновлений тоже вызывают перезагрузки. Это программная проблема — компьютерная помощь." },
        { question: "Сколько стоит ремонт?", answer: "Диагностика — от 5 BYN, чистка — от 35 BYN, замена блока питания или памяти — от 35 BYN плюс стоимость детали." },
        { question: "Сохранятся ли файлы?", answer: "Обычно да. Рекомендуем сделать резервную копию — аварийные перезагрузки могут повредить данные." },
      ],
    },
    contact: contact("Вернём компьютеру стабильность", "Компьютер сам перезагружается"),
  },
  {
    slug: "siniy-ekran",
    directionSlug,
    metadata: {
      title: "Синий экран Windows — ремонт в Борисове | Mandarin Сервис",
      description: "Компьютер показывает синий экран смерти (BSOD)? Проверим драйверы, память, накопитель и температуры.",
    },
    breadcrumbs: breadcrumbs("Синий экран", "siniy-ekran"),
    hero: hero("Синий экран", "Windows", "Определим, что вызывает синий экран: драйверы, память, накопитель или перегрев.", "Синий экран Windows", { src: "/hero/pc-blue-screen-v1.png", alt: "Монитор с синим экраном ошибки Windows и системный блок" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "bsod", title: "Синий экран с ошибкой", icon: "bsod" },
        { id: "reboot", title: "Перезагрузка после ошибки", icon: "reboot" },
        { id: "games", title: "В играх и под нагрузкой", icon: "heat" },
        { id: "boot", title: "При загрузке Windows", icon: "windows" },
        { id: "new-device", title: "После установки устройства", icon: "upgrade" },
        { id: "storage", title: "Долго открываются файлы", icon: "storage" },
      ],
    },
    causes: {
      title: "Почему появляется синий экран",
      items: [
        { id: "drivers", title: "Драйверы", description: "Несовместимые или повреждённые драйверы. Это решает компьютерная помощь.", icon: "system" },
        { id: "memory", title: "Оперативная память", description: "Неисправный модуль памяти — одна из частых аппаратных причин.", icon: "memory" },
        { id: "storage", title: "Накопитель", description: "Сбойные секторы на диске или износ SSD.", icon: "storage" },
        { id: "heat", title: "Перегрев", description: "Процессор или видеокарта перегреваются под нагрузкой.", icon: "heat" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice,
        { id: "parts", title: "Замена памяти или накопителя", price: "от 35 BYN", action: { label: "Подробнее", href: href("zamena-komplektuyushchih") } },
        { id: "gpu", title: "Ремонт видеокарты", price: "от 40 BYN", action: { label: "Подробнее", href: href("remont-videokarty") } },
        { id: "windows", title: "Установка Windows", price: "По составу комплекта", action: { label: "Подробнее", href: "/ustanovka-windows/" } },
        { id: "cleaning", title: "Чистка и замена термопасты", price: "от 35 BYN", action: { label: "Подробнее", href: href("chistka-i-obsluzhivanie") } },
      ],
      callout: callout("Синий экран Windows"),
    },
    process: process("Сфотографируйте синий экран с кодом ошибки и опишите, когда он появляется.", "Проверяем память, накопитель, температуры и журнал ошибок."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Сфотографируйте экран с кодом ошибки — он подскажет причину.", "Вспомните, что устанавливали или меняли перед появлением ошибки.", "Сделайте резервную копию важных файлов."], note: "Код ошибки сильно ускоряет диагностику." },
        { id: "software", tone: "warning", title: "Аппаратная или программная причина", items: ["Ошибка после обновления или нового драйвера — скорее программная.", "Ошибка в случайные моменты и под нагрузкой — скорее аппаратная.", "Разные коды ошибок каждый раз — часто память."], note: "Программные причины решает компьютерная помощь, аппаратные — ремонт." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Что вызывает синий экран?", answer: "Драйверы, неисправная память, накопитель или перегрев. Код ошибки на экране помогает сузить круг причин." },
        { question: "Поможет ли переустановка Windows?", answer: "Если причина программная — да. Если в памяти или накопителе — нет. Поэтому сначала проводим диагностику." },
        { question: "Сохранятся ли файлы?", answer: "Если накопитель исправен — да. Если он сбоит, сделайте резервную копию как можно скорее." },
        { question: "Сколько стоит ремонт?", answer: "Диагностика — от 5 BYN, замена памяти или накопителя — от 35 BYN плюс стоимость детали." },
      ],
    },
    contact: contact("Избавим компьютер от синего экрана", "Синий экран Windows"),
  },
  {
    slug: "shumit-kompyuter",
    directionSlug,
    metadata: {
      title: "Компьютер сильно шумит — ремонт в Борисове | Mandarin Сервис",
      description: "Компьютер громко гудит или трещит? Почистим от пыли, заменим термопасту и вентиляторы. Чистка от 35 BYN.",
    },
    breadcrumbs: breadcrumbs("Сильно шумит", "shumit-kompyuter"),
    hero: hero("Компьютер", "сильно шумит", "Определим источник шума: пыль, вентиляторы, кулер видеокарты или блок питания.", "Компьютер сильно шумит", { src: "/hero/pc-noisy-v1.png", alt: "Запылённый вентилятор процессорного кулера в открытом системном блоке" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "loud", title: "Громко гудит", icon: "noise" },
        { id: "rattle", title: "Трещит или вибрирует", icon: "fan" },
        { id: "idle", title: "Шумит без нагрузки", icon: "pc" },
        { id: "games", title: "Очень громко в играх", icon: "heat" },
        { id: "psu", title: "Гудит блок питания", icon: "power" },
        { id: "hdd", title: "Щёлкает жёсткий диск", icon: "storage" },
      ],
    },
    causes: {
      title: "Почему компьютер шумит",
      items: [
        { id: "dust", title: "Пыль", description: "Забитые радиаторы — вентиляторам приходится крутиться быстрее.", icon: "dust" },
        { id: "fan", title: "Износ вентиляторов", description: "Изношенный подшипник трещит и вибрирует.", icon: "fan" },
        { id: "gpu", title: "Кулер видеокарты", description: "Высохшая термопаста и пыль на видеокарте.", icon: "gpu" },
        { id: "storage", title: "Жёсткий диск", description: "Щелчки и скрежет — признак износа. Сохраните данные.", icon: "storage" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        { id: "cleaning", title: "Чистка и замена термопасты", price: "от 35 BYN", action: { label: "Подробнее", href: href("chistka-i-obsluzhivanie") } },
        { id: "gpu", title: "Обслуживание видеокарты", price: "от 40 BYN", action: { label: "Подробнее", href: href("remont-videokarty") } },
        { id: "parts", title: "Замена вентиляторов или диска", price: "от 35 BYN", action: { label: "Подробнее", href: href("zamena-komplektuyushchih") } },
        diagnosticsPrice,
      ],
      callout: callout("Компьютер сильно шумит"),
    },
    process: process("Опишите, когда появляется шум, и когда компьютер чистили последний раз.", "Определяем источник шума: вентиляторы, видеокарта, блок питания или диск."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Проверьте в диспетчере задач, не загружен ли процессор в простое.", "Не ставьте системный блок на ковёр и вплотную к стене.", "Прислушайтесь, откуда идёт шум: сверху, снизу или от видеокарты."], note: "Это поможет быстрее найти причину." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Вентилятор трещит или скрежещет.", "Жёсткий диск щёлкает.", "Компьютер шумит и перезагружается."], note: "При щелчках жёсткого диска сразу сделайте резервную копию." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему компьютер шумит?", answer: "Чаще всего из-за пыли и высохшей термопасты. Реже — из-за изношенных вентиляторов или жёсткого диска." },
        { question: "Как часто нужна чистка?", answer: "Обычно раз в год, чаще — если есть домашние животные или компьютер стоит на полу." },
        { question: "Сколько стоит ремонт?", answer: "Чистка — от 35 BYN, обслуживание видеокарты — от 40 BYN, замена вентиляторов — от 35 BYN плюс стоимость детали." },
        { question: "Сохранятся ли файлы?", answer: "Чистка не затрагивает данные. Если щёлкает жёсткий диск, сделайте резервную копию сразу." },
      ],
    },
    contact: contact("Вернём компьютеру тишину", "Компьютер сильно шумит"),
  },
  {
    slug: "ne-zagruzhaetsya-windows",
    directionSlug,
    metadata: {
      title: "Не загружается Windows — ремонт в Борисове | Mandarin Сервис",
      description: "Windows не загружается, циклически перезагружается или висит на логотипе? Проверим накопитель и систему. Для ноутбуков причины те же.",
    },
    breadcrumbs: breadcrumbs("Не загружается Windows", "ne-zagruzhaetsya-windows"),
    hero: hero("Не загружается", "Windows", "Проверим, в чём причина: накопитель, обновление, загрузчик или система. Для ноутбуков всё так же.", "Не загружается Windows", { src: "/hero/pc-windows-not-loading-v1.png", alt: "Монитор с чёрным экраном и курсором, Windows не загружается" }),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "logo", title: "Висит на логотипе", icon: "windows" },
        { id: "loop", title: "Циклическая перезагрузка", icon: "reboot" },
        { id: "recovery", title: "Открывается восстановление", icon: "software" },
        { id: "no-disk", title: "«Не найдено загрузочное устройство»", icon: "storage" },
        { id: "bsod", title: "Синий экран при загрузке", icon: "bsod" },
        { id: "update", title: "После обновления", icon: "upgrade" },
      ],
    },
    causes: {
      title: "Почему не загружается Windows",
      items: [
        { id: "storage", title: "Накопитель", description: "Износ или повреждение диска. Важно сохранить данные.", icon: "storage" },
        { id: "update", title: "Обновление", description: "Прерванное или неудачное обновление Windows.", icon: "system" },
        { id: "bootloader", title: "Загрузчик", description: "Повреждён загрузчик после сбоя питания или установки второй системы.", icon: "software" },
        { id: "virus", title: "Вирусы", description: "Вредоносные программы повредили системные файлы.", icon: "virus" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice,
        { id: "storage", title: "Замена накопителя", price: "от 35 BYN", action: { label: "Подробнее", href: href("zamena-komplektuyushchih") } },
        { id: "software", title: "Восстановление или установка Windows", price: "По составу комплекта", action: { label: "Подробнее", href: "/ustanovka-windows/" } },
      ],
      callout: callout("Не загружается Windows"),
    },
    process: process("Опишите, что появляется на экране при загрузке. Для ноутбуков — модель.", "Проверяем накопитель, затем систему и загрузчик."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что можно сделать самостоятельно", items: ["Отключите флешки и внешние диски и перезагрузите компьютер.", "Если открылась среда восстановления — попробуйте «Восстановление при загрузке».", "Сфотографируйте сообщение об ошибке."], note: "Если не помогло — нужна диагностика." },
        { id: "warning", tone: "warning", title: "Чего не делать", items: ["Не переустанавливайте Windows, не сохранив файлы.", "Не запускайте проверку диска, если он щёлкает.", "Не выключайте компьютер во время обновления."], note: "Сначала проверим накопитель и сохраним данные, затем восстановим систему." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Сохранятся ли мои файлы?", answer: "Если накопитель исправен — да. Сначала проверяем диск и при необходимости копируем данные, затем восстанавливаем систему." },
        { question: "Это аппаратная или программная проблема?", answer: "Бывает и так, и так. Сначала проверяем накопитель. Если он исправен, восстановление системы относится к компьютерной помощи." },
        { question: "С ноутбуком то же самое?", answer: "Да, причины и порядок работ для ноутбуков такие же." },
        { question: "Сколько стоит ремонт?", answer: "Диагностика — от 5 BYN, замена накопителя — от 35 BYN плюс стоимость SSD. Программные работы согласуем отдельно." },
      ],
    },
    contact: contact("Вернём Windows к работе", "Не загружается Windows"),
  },
];
