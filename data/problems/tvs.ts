import { getDirectionItemHref, tvRepairData } from "@/data/directions";
import type { ServiceQualityData } from "@/data/services/types";
import type { ProblemPageData } from "./types";

// Source: концепт/content/site-pages.md. Hardware repair only; every price is set after diagnostics.
const directionSlug = tvRepairData.slug;
const href = (slug: string) => getDirectionItemHref(directionSlug, slug);

function enquiry(message: string) {
  return `${tvRepairData.hero.secondaryAction.href}?text=${encodeURIComponent(message)}`;
}

function breadcrumbs(label: string, slug: string) {
  return [...tvRepairData.breadcrumbs, { label, href: href(slug) }];
}

function hero(title: string, accent: string, description: string, problem: string): ProblemPageData["hero"] {
  return {
    title,
    accent,
    description,
    image: tvRepairData.hero.image,
    backgrounds: tvRepairData.hero.backgrounds,
    primaryAction: { label: "Узнать стоимость", href: enquiry(`Здравствуйте! ${problem}. Хочу уточнить стоимость ремонта. Модель и диагональ: `) },
    secondaryAction: tvRepairData.hero.secondaryAction,
    benefits: [
      { title: "Находим причину", description: "", icon: "diagnostics" },
      { title: "Цена до ремонта", description: "", icon: "price" },
      { title: "Гарантия на работы", description: "", icon: "shield" },
    ],
  };
}

function diagnosticsPrice(problem: string) {
  return { id: "diagnostics", title: "Диагностика", price: "Уточним при обращении", action: { label: "Записаться", href: enquiry(`Здравствуйте! ${problem}. Хочу записаться на диагностику. Модель и диагональ: `) } };
}

function service(id: string, title: string, slug: string) {
  return { id, title, price: "После диагностики", action: { label: "Подробнее", href: href(slug) } };
}

function callout(problem: string) {
  return {
    title: "Цену назовём после диагностики",
    description: "Определим причину и согласуем стоимость. Если ремонт невыгоден — скажем честно.",
    icon: "diagnostics" as const,
    action: { label: "Узнать стоимость", href: enquiry(`Здравствуйте! ${problem}. Хочу узнать стоимость ремонта. Модель и диагональ: `) },
  };
}

function process(second: string) {
  return {
    title: "Как проходит ремонт",
    items: [
      { title: "Обращение", text: "Сообщите модель и диагональ телевизора и опишите проблему." },
      { title: "Диагностика", text: second },
      { title: "Согласование", text: "Называем стоимость и сроки. Без согласия ремонт не начинаем." },
      { title: "Ремонт и проверка", text: "Выполняем ремонт и проверяем изображение и звук перед выдачей." },
    ],
  };
}

function contact(title: string, problem: string) {
  return {
    title,
    description: "Сообщите модель и диагональ телевизора и опишите проблему — подскажем следующий шаг.",
    action: { label: "Написать мастеру", href: enquiry(`Здравствуйте! ${problem}. Модель и диагональ: `) },
  };
}

const quality: ServiceQualityData = {
  title: "Качество и гарантия",
  items: [
    { id: "warranty", title: "Гарантия на работы", description: "Условия на работы и детали сообщаем до ремонта.", icon: "warranty" },
    { id: "masters", title: "Точная диагностика", description: "Находим неисправный узел, а не меняем платы наугад.", icon: "master" },
    { id: "parts", title: "Подбор по модели", description: "Подбираем детали по маркировке платы и панели.", icon: "quality" },
    { id: "price", title: "Честная оценка", description: "Если ремонт невыгоден, скажем об этом.", icon: "price" },
  ],
};

const logisticsFaq = { question: "Нужно ли привозить телевизор?", answer: "Формат ремонта — в мастерской или на выезде — и максимальную диагональ уточним при обращении." };

export const tvProblemPages: ProblemPageData[] = [
  {
    slug: "net-izobrazheniya-zvuk-est",
    directionSlug,
    metadata: {
      title: "Нет изображения на телевизоре, но звук есть — ремонт в Борисове | Mandarin Сервис",
      description: "Звук есть, а экран чёрный? Чаще всего это подсветка. Проверим подсветку, блок питания и плату телевизора.",
    },
    breadcrumbs: breadcrumbs("Нет изображения, звук есть", "net-izobrazheniya-zvuk-est"),
    hero: hero("Нет изображения,", "но звук есть", "Чаще всего это подсветка, реже — блок питания или плата. Найдём причину и вернём картинку.", "На телевизоре нет изображения, но звук есть"),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "black", title: "Чёрный экран, звук есть", icon: "backlight-off" },
        { id: "flashlight", title: "Изображение видно с фонариком", icon: "tv" },
        { id: "seconds", title: "Картинка гаснет через секунды", icon: "tv-off" },
        { id: "dim", title: "Экран стал тусклым", icon: "flicker" },
        { id: "menu", title: "Меню не видно", icon: "remote" },
        { id: "blink", title: "Экран мигает при включении", icon: "reboot" },
      ],
    },
    causes: {
      title: "Почему нет изображения",
      items: [
        { id: "led", title: "Подсветка", description: "Самая частая причина: вышли из строя светодиодные линейки.", icon: "led" },
        { id: "psu", title: "Блок питания", description: "Не подаётся питание на подсветку.", icon: "power-supply" },
        { id: "tcon", title: "Шлейф или T-Con", description: "Подсветка работает, но на экран не приходит сигнал.", icon: "tcon" },
        { id: "board", title: "Материнская плата", description: "Сбой платы или прошивки.", icon: "board" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice("Нет изображения, звук есть"),
        service("backlight", "Замена подсветки", "zamena-podsvetki"),
        service("psu", "Ремонт блока питания", "remont-bloka-pitaniya"),
      ],
      callout: callout("Нет изображения, звук есть"),
    },
    process: process("Проверяем подсветку, блок питания, T-Con и плату."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Как проверить подсветку", items: ["Включите телевизор в тёмной комнате.", "Посветите фонариком на экран под углом.", "Если видно тусклое изображение — скорее всего, это подсветка."], note: "Результат этой проверки поможет быстрее определить причину." },
        { id: "warning", tone: "warning", title: "Чего не делать", items: ["Не разбирайте телевизор самостоятельно — матрица очень хрупкая.", "Не стучите по корпусу.", "Не включайте телевизор много раз подряд."], note: "Повреждённую при разборке матрицу восстановить нельзя." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему звук есть, а изображения нет?", answer: "В большинстве случаев вышла из строя подсветка. Реже причина в блоке питания, T-Con или материнской плате." },
        { question: "Выгодно ли менять подсветку?", answer: "Обычно да — это дешевле нового телевизора. Назовём стоимость после диагностики." },
        { question: "Сколько стоит ремонт?", answer: "Зависит от модели и диагонали. Точную стоимость назовём после диагностики." },
        logisticsFaq,
      ],
    },
    contact: contact("Вернём изображение телевизору", "Нет изображения, звук есть"),
  },
  {
    slug: "televizor-ne-vklyuchaetsya",
    directionSlug,
    metadata: {
      title: "Телевизор не включается — ремонт в Борисове | Mandarin Сервис",
      description: "Телевизор не включается, не горит индикатор или не реагирует на пульт? Проверим блок питания и материнскую плату.",
    },
    breadcrumbs: breadcrumbs("Не включается", "televizor-ne-vklyuchaetsya"),
    hero: hero("Телевизор", "не включается", "Чаще всего причина в блоке питания или материнской плате. Найдём неисправность и согласуем стоимость.", "Телевизор не включается"),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "no-led", title: "Не горит индикатор", icon: "tv-off" },
        { id: "led-on", title: "Индикатор горит, не включается", icon: "power" },
        { id: "blinks", title: "Индикатор мигает", icon: "flicker" },
        { id: "remote", title: "Не реагирует на пульт", icon: "remote" },
        { id: "click", title: "Щёлкает и не включается", icon: "sound" },
        { id: "surge", title: "После грозы или скачка", icon: "charging" },
      ],
    },
    causes: {
      title: "Почему телевизор не включается",
      items: [
        { id: "psu", title: "Блок питания", description: "Самая частая причина, особенно после скачков напряжения.", icon: "power-supply" },
        { id: "capacitor", title: "Конденсаторы", description: "Вздутые конденсаторы на плате питания.", icon: "capacitor" },
        { id: "board", title: "Материнская плата", description: "Сбой прошивки или неисправность платы.", icon: "board" },
        { id: "remote", title: "Пульт или кнопка", description: "Иногда виноваты батарейки пульта или кнопка на корпусе.", icon: "button" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice("Телевизор не включается"),
        service("psu", "Ремонт блока питания", "remont-bloka-pitaniya"),
        service("board", "Ремонт материнской платы", "remont-materinskoy-platy"),
      ],
      callout: callout("Телевизор не включается"),
    },
    process: process("Проверяем блок питания, дежурное питание и материнскую плату."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что проверить самостоятельно", items: ["Замените батарейки в пульте.", "Нажмите кнопку питания на самом телевизоре.", "Подключите телевизор в другую розетку без удлинителя."], note: "Если не помогло — нужна диагностика." },
        { id: "warning", tone: "warning", title: "Когда отключить от сети", items: ["Пахнет гарью или слышен треск.", "Телевизор отключился во время грозы.", "Индикатор мигает, а телевизор не включается."], note: "Не включайте телевизор повторно — можно повредить другие платы." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему телевизор не включается?", answer: "Чаще всего неисправен блок питания, реже — материнская плата. Иногда причина в пульте или кнопке." },
        { question: "Что значит мигающий индикатор?", answer: "Телевизор сообщает об ошибке. Количество миганий у многих моделей — код неисправности, он помогает при диагностике." },
        { question: "Сколько стоит ремонт?", answer: "Зависит от модели и неисправности. Точную стоимость назовём после диагностики." },
        logisticsFaq,
      ],
    },
    contact: contact("Включим ваш телевизор", "Телевизор не включается"),
  },
  {
    slug: "vklyuchaetsya-i-vyklyuchaetsya",
    directionSlug,
    metadata: {
      title: "Телевизор включается и сразу выключается — ремонт в Борисове | Mandarin Сервис",
      description: "Телевизор включается и через несколько секунд гаснет? Проверим блок питания, подсветку и материнскую плату.",
    },
    breadcrumbs: breadcrumbs("Включается и выключается", "vklyuchaetsya-i-vyklyuchaetsya"),
    hero: hero("Телевизор включается", "и сразу выключается", "Проверим блок питания, подсветку и материнскую плату. Найдём, что вызывает защитное отключение.", "Телевизор включается и сразу выключается"),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "seconds", title: "Гаснет через несколько секунд", icon: "tv-off" },
        { id: "cycle", title: "Включается по кругу", icon: "reboot" },
        { id: "logo", title: "Гаснет на логотипе", icon: "tv" },
        { id: "blinks", title: "Мигает индикатор", icon: "flicker" },
        { id: "sound", title: "Звук есть, затем пропадает", icon: "speaker-off" },
        { id: "warm", title: "Работает только прогретый", icon: "heat" },
      ],
    },
    causes: {
      title: "Почему телевизор выключается",
      items: [
        { id: "psu", title: "Блок питания", description: "Плата питания не держит нагрузку при включении.", icon: "power-supply" },
        { id: "led", title: "Подсветка", description: "Замыкание в линейках подсветки вызывает защитное отключение.", icon: "led" },
        { id: "board", title: "Материнская плата", description: "Сбой прошивки или неисправность платы.", icon: "board" },
        { id: "capacitor", title: "Конденсаторы", description: "Изношенные конденсаторы работают только после прогрева.", icon: "capacitor" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice("Телевизор включается и сразу выключается"),
        service("psu", "Ремонт блока питания", "remont-bloka-pitaniya"),
        service("backlight", "Замена подсветки", "zamena-podsvetki"),
        service("board", "Ремонт материнской платы", "remont-materinskoy-platy"),
      ],
      callout: callout("Телевизор включается и сразу выключается"),
    },
    process: process("Проверяем блок питания, подсветку и материнскую плату."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что проверить самостоятельно", items: ["Отключите телевизор от сети на 10 минут.", "Отключите все внешние устройства и USB.", "Посчитайте мигания индикатора — это может быть код ошибки."], note: "Эти наблюдения помогут быстрее найти причину." },
        { id: "warning", tone: "warning", title: "Чего не делать", items: ["Не включайте телевизор много раз подряд.", "Не оставляйте его включаться по кругу.", "Не разбирайте корпус самостоятельно."], note: "Постоянные попытки включения могут повредить блок питания или подсветку." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему телевизор включается и сразу выключается?", answer: "Срабатывает защита: чаще из-за блока питания или подсветки, реже из-за материнской платы." },
        { question: "Поможет ли сброс настроек?", answer: "Если телевизор не успевает загрузиться, сброс не поможет. Если причина в прошивке — иногда да." },
        { question: "Сколько стоит ремонт?", answer: "Зависит от модели и найденной неисправности. Точную стоимость назовём после диагностики." },
        logisticsFaq,
      ],
    },
    contact: contact("Вернём телевизору стабильность", "Телевизор включается и сразу выключается"),
  },
  {
    slug: "polosy-na-ekrane",
    directionSlug,
    metadata: {
      title: "Полосы на экране телевизора — ремонт в Борисове | Mandarin Сервис",
      description: "Вертикальные или горизонтальные полосы на экране телевизора? Проверим шлейф и T-Con. Если матрица цела — отремонтируем.",
    },
    breadcrumbs: breadcrumbs("Полосы на экране", "polosy-na-ekrane"),
    hero: hero("Полосы на экране", "телевизора", "Если на экране нет трещин, причина часто в шлейфе или плате T-Con — их мы ремонтируем.", "Полосы на экране телевизора"),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "vertical", title: "Вертикальные полосы", icon: "display-lines" },
        { id: "horizontal", title: "Горизонтальные полосы", icon: "layers" },
        { id: "colors", title: "Искажены цвета", icon: "tv" },
        { id: "half", title: "Половина экрана тёмная", icon: "spot" },
        { id: "flicker", title: "Мерцание и рябь", icon: "flicker" },
        { id: "warm", title: "Пропадают после прогрева", icon: "heat" },
      ],
    },
    causes: {
      title: "Почему появляются полосы",
      items: [
        { id: "cable", title: "Шлейф", description: "Окислились или отошли контакты шлейфа матрицы.", icon: "connection" },
        { id: "tcon", title: "Плата T-Con", description: "Неисправна плата управления матрицей.", icon: "tcon" },
        { id: "board", title: "Материнская плата", description: "Полосы видны и в меню — возможна неисправность платы.", icon: "board" },
        { id: "matrix", title: "Матрица", description: "После удара или давления. Замену матрицы не выполняем.", icon: "display" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice("Полосы на экране"),
        service("tcon", "Замена шлейфа и T-Con", "zamena-shleyfa-i-t-con"),
        service("board", "Ремонт материнской платы", "remont-materinskoy-platy"),
      ],
      callout: callout("Полосы на экране"),
    },
    process: process("Проверяем шлейф, T-Con, плату и матрицу."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что проверить самостоятельно", items: ["Откройте меню телевизора — видны ли полосы поверх меню.", "Сфотографируйте экран.", "Проверьте, меняются ли полосы после прогрева."], note: "Фото экрана поможет подсказать причину ещё до визита." },
        { id: "warning", tone: "warning", title: "Когда ремонт невыгоден", items: ["На экране есть трещины.", "Растекающиеся пятна после удара.", "Полосы появились после падения."], note: "Это повреждение матрицы. Её замена стоит почти как новый телевизор, поэтому мы её не выполняем." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Полосы на экране — это матрица?", answer: "Не всегда. Если нет трещин и следов удара, причина часто в шлейфе или плате T-Con — их мы ремонтируем." },
        { question: "Меняете ли вы матрицу?", answer: "Нет. Замена матрицы стоит почти как новый телевизор, поэтому мы её не выполняем." },
        { question: "Сколько стоит ремонт?", answer: "Зависит от модели и причины. Точную стоимость назовём после диагностики." },
        logisticsFaq,
      ],
    },
    contact: contact("Уберём полосы с экрана", "Полосы на экране телевизора"),
  },
  {
    slug: "televizor-zavisaet",
    directionSlug,
    metadata: {
      title: "Телевизор зависает и перезагружается — ремонт в Борисове | Mandarin Сервис",
      description: "Smart TV зависает, тормозит или сам перезагружается? Проверим прошивку, память и материнскую плату.",
    },
    breadcrumbs: breadcrumbs("Зависает и перезагружается", "televizor-zavisaet"),
    hero: hero("Телевизор зависает", "и перезагружается", "Проверим прошивку, память и материнскую плату. Восстановим стабильную работу Smart TV.", "Телевизор зависает и перезагружается"),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "freeze", title: "Зависает", icon: "slow" },
        { id: "reboot", title: "Сам перезагружается", icon: "reboot" },
        { id: "logo", title: "Висит на логотипе", icon: "tv" },
        { id: "apps", title: "Вылетают приложения", icon: "software" },
        { id: "remote", title: "Долго реагирует на пульт", icon: "remote" },
        { id: "update", title: "После обновления", icon: "upgrade" },
      ],
    },
    causes: {
      title: "Почему телевизор зависает",
      items: [
        { id: "firmware", title: "Прошивка", description: "Сбой после обновления или повреждённое ПО.", icon: "software" },
        { id: "memory", title: "Память", description: "Износ встроенной памяти (eMMC) — частая причина у Smart TV.", icon: "memory" },
        { id: "board", title: "Материнская плата", description: "Перегрев или неисправность компонентов.", icon: "board" },
        { id: "settings", title: "Приложения и настройки", description: "Переполненная память приложениями и кэшем.", icon: "settings" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice("Телевизор зависает и перезагружается"),
        service("board", "Ремонт и прошивка платы", "remont-materinskoy-platy"),
      ],
      callout: callout("Телевизор зависает и перезагружается"),
    },
    process: process("Проверяем прошивку, память и материнскую плату."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что попробовать самостоятельно", items: ["Отключите телевизор от сети на 5 минут.", "Удалите неиспользуемые приложения и очистите кэш.", "Проверьте наличие официального обновления."], note: "Если зависания продолжаются — нужна диагностика." },
        { id: "warning", tone: "warning", title: "Чего не делать", items: ["Не выключайте телевизор во время обновления.", "Не устанавливайте неофициальные прошивки."], note: "Неудачная прошивка может полностью заблокировать загрузку телевизора." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему Smart TV тормозит?", answer: "Переполненная память, сбой прошивки или износ встроенной памяти. Реже — неисправность материнской платы." },
        { question: "Поможет ли сброс к заводским настройкам?", answer: "При программном сбое — часто да. Если изношена память или неисправна плата — нет." },
        { question: "Сколько стоит ремонт?", answer: "Зависит от модели и причины. Точную стоимость назовём после диагностики." },
        logisticsFaq,
      ],
    },
    contact: contact("Вернём телевизору стабильность", "Телевизор зависает и перезагружается"),
  },
  {
    slug: "net-zvuka",
    directionSlug,
    metadata: {
      title: "Нет звука на телевизоре — ремонт в Борисове | Mandarin Сервис",
      description: "Изображение есть, а звука нет? Проверим динамики, усилитель на плате и настройки звука телевизора.",
    },
    breadcrumbs: breadcrumbs("Нет звука", "net-zvuka"),
    hero: hero("Нет звука", "на телевизоре", "Проверим динамики, усилитель на плате и настройки. Определим причину и вернём звук.", "Нет звука на телевизоре"),
    symptoms: {
      title: "Как проявляется неисправность",
      items: [
        { id: "no-sound", title: "Звука нет совсем", icon: "speaker-off" },
        { id: "wheeze", title: "Хрипит", icon: "noise" },
        { id: "drops", title: "Звук пропадает", icon: "flicker" },
        { id: "quiet", title: "Очень тихо", icon: "sound-off" },
        { id: "source", title: "Нет звука с одного источника", icon: "hdmi" },
        { id: "headphones", title: "В наушниках звук есть", icon: "sound" },
      ],
    },
    causes: {
      title: "Почему нет звука",
      items: [
        { id: "speaker", title: "Динамики", description: "Порванный диффузор или обрыв катушки.", icon: "speaker" },
        { id: "board", title: "Усилитель на плате", description: "Неисправность усилителя звука на материнской плате.", icon: "board" },
        { id: "settings", title: "Настройки", description: "Звук выводится на внешнее устройство или отключён в настройках.", icon: "settings" },
        { id: "source", title: "Источник сигнала", description: "Проблема с разъёмом HDMI или приставкой.", icon: "connector" },
      ],
    },
    pricing: {
      title: "Стоимость ремонта",
      items: [
        diagnosticsPrice("Нет звука"),
        service("speakers", "Замена динамиков", "zamena-dinamikov"),
        service("board", "Ремонт усилителя на плате", "remont-materinskoy-platy"),
        service("connectors", "Ремонт разъёмов", "remont-razemov"),
      ],
      callout: callout("Нет звука на телевизоре"),
    },
    process: process("Проверяем настройки, динамики, усилитель и разъёмы."),
    advice: {
      panels: [
        { id: "self-check", tone: "help", title: "Что проверить самостоятельно", items: ["Проверьте, не выбран ли вывод звука на внешнее устройство.", "Отключите наушники, саундбар и Bluetooth.", "Проверьте звук на разных источниках: эфир, приложение, HDMI."], note: "Если звука нет нигде — нужна проверка." },
        { id: "warning", tone: "warning", title: "Когда нужен мастер", items: ["Звук хрипит на любой громкости.", "Звук есть в наушниках, но нет в динамиках.", "Звук пропал после скачка напряжения."], note: "При хрипе не выкручивайте громкость на максимум." },
      ],
    },
    quality,
    faq: {
      title: "Частые вопросы",
      items: [
        { question: "Почему пропал звук?", answer: "Причина может быть в динамиках, усилителе на плате, разъёме или настройках. Проверим и определим." },
        { question: "Звука нет только с приставки — это телевизор?", answer: "Возможно, проблема в разъёме HDMI или настройках приставки. Проверьте другой вход и кабель." },
        { question: "Сколько стоит ремонт?", answer: "Зависит от модели и причины. Точную стоимость назовём после диагностики." },
        logisticsFaq,
      ],
    },
    contact: contact("Вернём звук телевизору", "Нет звука на телевизоре"),
  },
];
