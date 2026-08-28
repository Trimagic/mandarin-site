from pathlib import Path
from xml.sax.saxutils import escape

from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate, Frame, PageTemplate, Paragraph, Spacer, PageBreak,
    Table, TableStyle, Image, KeepTogether, HRFlowable
)
from PIL import Image as PILImage


ROOT = Path(r"C:\Users\aleks\Desktop\mandarin\концепт")
OUT = ROOT / "output" / "pdf" / "mandarin-site-concept-client.pdf"
OUT.parent.mkdir(parents=True, exist_ok=True)

FONT_REG = Path(r"C:\Windows\Fonts\arial.ttf")
FONT_BOLD = Path(r"C:\Windows\Fonts\arialbd.ttf")
pdfmetrics.registerFont(TTFont("Mandarin", str(FONT_REG)))
pdfmetrics.registerFont(TTFont("Mandarin-Bold", str(FONT_BOLD)))

ORANGE = HexColor("#FF5A00")
RED = HexColor("#E31E24")
INK = HexColor("#181512")
MUTED = HexColor("#65615D")
LINE = HexColor("#E8E1DB")
PAPER = HexColor("#FFFDFB")
SOFT = HexColor("#FFF3EB")
GREEN = HexColor("#4AAE45")

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
MARGIN_TOP = 18 * mm
MARGIN_BOTTOM = 16 * mm


styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name="CoverKicker", fontName="Mandarin-Bold", fontSize=11, leading=14,
    textColor=ORANGE, spaceAfter=7 * mm, uppercase=True,
))
styles.add(ParagraphStyle(
    name="CoverTitle", fontName="Mandarin-Bold", fontSize=31, leading=34,
    textColor=INK, spaceAfter=6 * mm,
))
styles.add(ParagraphStyle(
    name="CoverSub", fontName="Mandarin", fontSize=13, leading=19,
    textColor=MUTED, spaceAfter=8 * mm,
))
styles.add(ParagraphStyle(
    name="H1x", fontName="Mandarin-Bold", fontSize=23, leading=27,
    textColor=INK, spaceAfter=5 * mm,
))
styles.add(ParagraphStyle(
    name="H2x", fontName="Mandarin-Bold", fontSize=15, leading=19,
    textColor=INK, spaceBefore=3 * mm, spaceAfter=3 * mm,
))
styles.add(ParagraphStyle(
    name="H3x", fontName="Mandarin-Bold", fontSize=10.5, leading=14,
    textColor=INK, spaceAfter=1.5 * mm,
))
styles.add(ParagraphStyle(
    name="Bodyx", fontName="Mandarin", fontSize=9.2, leading=13.3,
    textColor=INK, spaceAfter=2.5 * mm,
))
styles.add(ParagraphStyle(
    name="Smallx", fontName="Mandarin", fontSize=7.7, leading=10.5,
    textColor=MUTED,
))
styles.add(ParagraphStyle(
    name="Bulletx", fontName="Mandarin", fontSize=8.8, leading=12.5,
    textColor=INK, leftIndent=4 * mm, firstLineIndent=-3.2 * mm,
    bulletIndent=0, spaceAfter=1.4 * mm,
))
styles.add(ParagraphStyle(
    name="CardNum", fontName="Mandarin-Bold", fontSize=20, leading=22,
    textColor=ORANGE, alignment=TA_CENTER,
))
styles.add(ParagraphStyle(
    name="CardLabel", fontName="Mandarin-Bold", fontSize=8, leading=10,
    textColor=INK, alignment=TA_CENTER,
))
styles.add(ParagraphStyle(
    name="Quote", fontName="Mandarin-Bold", fontSize=15, leading=21,
    textColor=INK, alignment=TA_LEFT,
))


def p(text, style="Bodyx"):
    return Paragraph(text, styles[style])


def bullet(text):
    return Paragraph("<font color='#FF5A00'>●</font>  " + escape(text), styles["Bulletx"])


def section_title(number, title, subtitle=None):
    items = [p(f"<font color='#FF5A00'>{number}</font>  {escape(title)}", "H1x")]
    if subtitle:
        items.append(p(escape(subtitle), "Bodyx"))
    items.append(Spacer(1, 2 * mm))
    return items


def fit_image(path, max_w, max_h):
    with PILImage.open(path) as im:
        w, h = im.size
    scale = min(max_w / w, max_h / h)
    return Image(str(path), width=w * scale, height=h * scale)


def card(title, body, accent=ORANGE):
    cell = [p(escape(title), "H3x"), p(escape(body), "Smallx")]
    t = Table([[cell]], colWidths=[78 * mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), PAPER),
        ("BOX", (0, 0), (-1, -1), 0.7, LINE),
        ("LINEBEFORE", (0, 0), (0, -1), 3, accent),
        ("LEFTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 3.5 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5 * mm),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ]))
    return t


def two_col_cards(items):
    rows = []
    for i in range(0, len(items), 2):
        left = card(*items[i])
        right = card(*items[i + 1]) if i + 1 < len(items) else ""
        rows.append([left, right])
    t = Table(rows, colWidths=[82 * mm, 82 * mm], hAlign="LEFT")
    t.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 2 * mm),
    ]))
    return t


def page_header_footer(canvas, doc):
    canvas.saveState()
    if doc.page > 1:
        canvas.setStrokeColor(LINE)
        canvas.setLineWidth(0.5)
        canvas.line(MARGIN_X, PAGE_H - 12 * mm, PAGE_W - MARGIN_X, PAGE_H - 12 * mm)
        canvas.setFont("Mandarin-Bold", 7.5)
        canvas.setFillColor(ORANGE)
        canvas.drawString(MARGIN_X, PAGE_H - 9.5 * mm, "MANDARIN СЕРВИС")
        canvas.setFont("Mandarin", 7.2)
        canvas.setFillColor(MUTED)
        canvas.drawRightString(PAGE_W - MARGIN_X, PAGE_H - 9.5 * mm, "Концепция многостраничного сайта")
        canvas.setFont("Mandarin", 7.2)
        canvas.drawString(MARGIN_X, 8 * mm, "+375 29 150-68-88  •  Борисов, ул. Чапаева, 34")
        canvas.drawRightString(PAGE_W - MARGIN_X, 8 * mm, str(doc.page))
    canvas.restoreState()


doc = BaseDocTemplate(
    str(OUT), pagesize=A4, leftMargin=MARGIN_X, rightMargin=MARGIN_X,
    topMargin=MARGIN_TOP, bottomMargin=MARGIN_BOTTOM,
    title="Концепция сайта Mandarin Сервис",
    author="Mandarin Сервис",
)
frame = Frame(MARGIN_X, MARGIN_BOTTOM, PAGE_W - 2 * MARGIN_X, PAGE_H - MARGIN_TOP - MARGIN_BOTTOM, id="normal")
doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=page_header_footer)])

story = []

# Cover
logo = ROOT / "assets" / "mandarin-service-logo-raster-v2.png"
full_home_light = ROOT / "assets" / "вариант 2 лендинг" / "главная страница светлая.png"
full_home_dark = ROOT / "assets" / "вариант 2 лендинг" / "главная страница темная.png"
if logo.exists():
    story.append(fit_image(logo, 48 * mm, 24 * mm))
story += [Spacer(1, 15 * mm), p("КОНЦЕПЦИЯ САЙТА", "CoverKicker")]
story.append(p("Mandarin Сервис", "CoverTitle"))
story.append(p("Многостраничный сайт для ремонта телефонов, ноутбуков и компьютеров в Борисове", "CoverSub"))
story.append(HRFlowable(width="100%", thickness=4, color=ORANGE, spaceBefore=2 * mm, spaceAfter=7 * mm))
story.append(p("Структура разделов, содержание страниц и логика взаимодействия с клиентом", "H2x"))
if full_home_light.exists() and full_home_dark.exists():
    story.append(Spacer(1, 4 * mm))
    cover_pages = Table([
        [p("Светлая тема", "CardLabel"), p("Тёмная тема", "CardLabel")],
        [fit_image(full_home_light, 72 * mm, 92 * mm), fit_image(full_home_dark, 72 * mm, 92 * mm)],
    ], colWidths=[82 * mm, 82 * mm])
    cover_pages.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 2 * mm),
        ("RIGHTPADDING", (0, 0), (-1, -1), 2 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 1 * mm),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 1 * mm),
    ]))
    story.append(cover_pages)
story.append(Spacer(1, 7 * mm))
story.append(p("Подготовлено для согласования концепции", "Smallx"))
story.append(PageBreak())

# Overview
story += section_title("01", "Общая идея", "Сайт помогает посетителю быстро выбрать направление, понять возможное решение и обратиться в мастерскую удобным способом.")
stats = [
    [p("4", "CardNum"), p("60+", "CardNum"), p("2", "CardNum"), p("1", "CardNum")],
    [p("основных направления", "CardLabel"), p("тематических страниц", "CardLabel"), p("цветовые темы", "CardLabel"), p("единая система", "CardLabel")],
]
t = Table(stats, colWidths=[41 * mm] * 4, rowHeights=[13 * mm, 13 * mm])
t.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), SOFT), ("BOX", (0, 0), (-1, -1), 0.7, LINE),
    ("INNERGRID", (0, 0), (-1, -1), 0.5, LINE), ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
]))
story += [t, Spacer(1, 7 * mm)]
story.append(two_col_cards([
    ("Понятный выбор", "Посетитель начинает с типа техники или сразу выбирает знакомую неисправность.", ORANGE),
    ("Коммерческие страницы", "Для каждой востребованной работы предусмотрена отдельная страница с результатом, составом услуги и стоимостью.", RED),
    ("Полезные объяснения", "Страницы неисправностей рассказывают о симптомах и возможных причинах простым языком.", GREEN),
    ("Быстрая связь", "Телефон, мессенджеры, форма записи, адрес и карта доступны во всех ключевых точках сайта.", ORANGE),
]))
story += [Spacer(1, 7 * mm), p("Визуальная идея", "H2x")]
for text in [
    "Светлая и тёмная темы в единой оранжево-красной палитре бренда.",
    "Реалистичные изображения техники и мастерской.",
    "Чёткая типографика, компактные карточки и заметные кнопки обращения.",
    "Единый дизайн главной, направлений, услуг и неисправностей.",
]:
    story.append(bullet(text))
story.append(PageBreak())

# Home
story += section_title("02", "Главная страница", "Главная остаётся компактной: она не повторяет весь каталог, а направляет посетителя в нужный раздел.")
home_rows = [
    ("Первый экран", "Ключевое обещание сервиса, основные направления ремонта, кнопки «Узнать стоимость» и «Написать мастеру»."),
    ("Направления", "Ремонт телефонов, ноутбуков, компьютеров и программная помощь."),
    ("Что случилось?", "Быстрый выбор по симптомам: не включается, разбит экран, не заряжается, греется, тормозит и другие."),
    ("Популярные услуги", "Короткая подборка наиболее востребованных работ с ориентировочной стоимостью."),
    ("Почему Mandarin Сервис", "Собственная мастерская, согласование цены, сохранность данных и гарантийные условия."),
    ("Как проходит ремонт", "Обращение, диагностика, согласование, ремонт и выдача."),
    ("Отзывы", "Несколько реальных отзывов с переходом в полный раздел."),
    ("Контакты", "Адрес, телефон, мессенджеры, карта и финальная кнопка обращения."),
]
home_visual = fit_image(full_home_light, 67 * mm, 151 * mm) if full_home_light.exists() else ""
home_blocks = []
for name, description in home_rows:
    home_blocks.extend([p(name, "H3x"), p(description, "Smallx"), Spacer(1, 2.2 * mm)])
home_layout = Table([[home_visual, home_blocks]], colWidths=[75 * mm, 89 * mm])
home_layout.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm),
]))
story.append(home_layout)
story += [Spacer(1, 4 * mm), p("Главный результат", "H2x"), p("Посетитель за несколько секунд понимает, что сервис ремонтирует его тип техники, видит основные преимущества и переходит к конкретной услуге или описанию проблемы.", "Bodyx")]
story.append(PageBreak())

# Directions
story += section_title("03", "Четыре основных направления")
story.append(two_col_cards([
    ("Ремонт телефонов", "Экраны и стекло, аккумуляторы, разъёмы, звук, камеры, последствия воды и программные сбои.", ORANGE),
    ("Ремонт ноутбуков", "Диагностика, чистка, матрицы, клавиатуры, питание, охлаждение, платы, залитие и модернизация.", RED),
    ("Ремонт компьютеров", "Диагностика комплектующих, сборка, замена деталей, видеокарты, чистка и обновление ПК.", GREEN),
    ("Программная помощь", "Windows, драйверы, программы, удаление вирусов, восстановление данных, оптимизация и интернет.", ORANGE),
]))
story += [Spacer(1, 7 * mm), p("Состав страницы направления", "H2x")]
for text in [
    "Первый экран с главным предложением направления.",
    "Популярные услуги и выбор по типичной проблеме.",
    "Ориентировочные цены и объяснение, от чего зависит итог.",
    "Поддерживаемые типы устройств и популярные бренды.",
    "Преимущества, этапы работы, отзывы и вопросы по категории.",
    "Контактный блок с записью и картой.",
]: story.append(bullet(text))
story += [Spacer(1, 5 * mm), p("Каждое направление выглядит как самостоятельный раздел, но остаётся частью одной общей системы Mandarin Сервис.", "Quote")]
story.append(PageBreak())


def category_page(number, title, intro, services, faults):
    story.extend(section_title(number, title, intro))
    story.append(p("Страницы услуг", "H2x"))
    rows = []
    for name, desc in services:
        rows.append([p(name, "H3x"), p(desc, "Smallx")])
    table = Table(rows, colWidths=[59 * mm, 105 * mm])
    table.setStyle(TableStyle([
        ("BOX", (0, 0), (-1, -1), 0.6, LINE), ("INNERGRID", (0, 0), (-1, -1), 0.45, LINE),
        ("BACKGROUND", (0, 0), (0, -1), SOFT), ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 3 * mm), ("RIGHTPADDING", (0, 0), (-1, -1), 3 * mm),
        ("TOPPADDING", (0, 0), (-1, -1), 2.2 * mm), ("BOTTOMPADDING", (0, 0), (-1, -1), 2.2 * mm),
    ]))
    story.append(table)
    story.extend([Spacer(1, 5 * mm), p("Страницы неисправностей", "H2x")])
    for f in faults:
        story.append(bullet(f))
    story.append(PageBreak())


category_page("04", "Ремонт телефонов", "Самый подробный раздел сайта: посетитель может выбрать конкретную работу или начать с симптома.", [
    ("Замена экрана", "Новый дисплей, проверка изображения и сенсора, выбор варианта детали."),
    ("Замена стекла", "Переклейка стекла с сохранением исправной матрицы, если это возможно."),
    ("Замена аккумулятора", "Диагностика батареи и потребления, установка и проверка зарядки."),
    ("Разъём зарядки", "Чистка или замена Micro-USB и USB Type-C, проверка цепей питания."),
    ("Динамик и микрофон", "Чистка сеток, замена модулей, диагностика аудиотракта."),
    ("После попадания воды", "Разборка, очистка коррозии и восстановление повреждённых цепей."),
    ("Задняя крышка и камера", "Замена повреждённых элементов и проверка функций камеры."),
    ("Прошивка", "Восстановление системы, устранение программных сбоев и циклической загрузки."),
], [
    "Телефон не включается или постоянно перезагружается.",
    "Телефон не заряжается или быстро разряжается.",
    "Разбит экран, нет изображения или не работает сенсор.",
    "Не работает динамик или микрофон.",
    "Телефон не видит SIM-карту.",
    "Телефон упал в воду.",
])

category_page("05", "Ремонт ноутбуков", "Раздел объединяет обслуживание, замену модулей, сложный аппаратный ремонт и модернизацию.", [
    ("Диагностика", "Питание, температуры, память, накопитель, экран и материнская плата."),
    ("Чистка и термопаста", "Очистка радиатора и кулера, обслуживание и температурный тест."),
    ("Замена матрицы", "Подбор экрана по диагонали, разрешению и типу подключения."),
    ("Ремонт клавиатуры", "Клавиши, модуль, топкейс и последствия попадания жидкости."),
    ("Разъём питания", "Проверка адаптера, гнезда и цепей зарядки."),
    ("Система охлаждения", "Кулер, радиатор, тепловые трубки и крепления."),
    ("Материнская плата", "Питание, BIOS, пайка компонентов и восстановление цепей."),
    ("После залития", "Срочная разборка, очистка и ремонт повреждений."),
    ("SSD и оперативная память", "Подбор, установка, перенос системы и тест скорости."),
], [
    "Ноутбук не включается или не заряжается.",
    "Ноутбук сильно греется, шумит или выключается.",
    "Ноутбук тормозит и долго загружается.",
    "Нет изображения или разбита матрица.",
    "Не работает клавиатура.",
    "На ноутбук попала жидкость.",
])

category_page("06", "Ремонт компьютеров", "Раздел помогает как при конкретной поломке, так и при желании обновить или собрать компьютер.", [
    ("Диагностика ПК", "Проверка блока питания, платы, RAM, видеокарты, накопителей и температур."),
    ("Сборка компьютера", "Подбор совместимых деталей под задачу и бюджет, сборка и тестирование."),
    ("Замена комплектующих", "Блок питания, плата, процессор, память и накопители."),
    ("Ремонт видеокарты", "Нет изображения, артефакты, перегрев и неисправности питания."),
    ("Чистка", "Обслуживание охлаждения и проверка под нагрузкой."),
    ("Модернизация", "SSD, RAM, видеокарта или процессор с оценкой целесообразности."),
], [
    "Компьютер не включается или сам перезагружается.",
    "Компьютер работает, но нет изображения.",
    "Компьютер тормозит или сильно шумит.",
    "Появляется синий экран.",
    "Не загружается Windows.",
])

category_page("07", "Программная помощь", "Отдельный раздел для установки, настройки и восстановления программной части техники.", [
    ("Установка Windows", "Проверка накопителя, сохранение файлов, система, драйверы и базовые программы."),
    ("Установка драйверов", "Видео, звук, сеть, чипсет и периферийные устройства."),
    ("Установка программ", "Базовое и профессиональное программное обеспечение."),
    ("Удаление вирусов", "Очистка системы, браузеров и автозагрузки, настройка защиты."),
    ("Восстановление данных", "Диагностика HDD, SSD и флешек, копирование доступных файлов."),
    ("Оптимизация Windows", "Автозагрузка, обновления, место на диске и системные ошибки."),
    ("Роутер и интернет", "Wi-Fi, безопасность, подключение устройств и локальная сеть."),
], [
    "Windows не загружается или выдаёт ошибку.",
    "Компьютер стал работать заметно медленнее.",
    "Пропал интернет или не определяется оборудование.",
    "Появилась реклама, вирусы или нежелательные программы.",
    "Нужно сохранить данные перед переустановкой системы.",
])

# Page examples
story += section_title("08", "Как выглядит страница услуги", "Пример: «Замена экрана телефона».")
service_img = ROOT / "assets" / "вариант 2 лендинг" / "страницы услуг" / "замена экрана телефона светлая.png"
fault_img = ROOT / "assets" / "вариант 2 лендинг" / "страницы неисправностей" / "нет изображения светлая.png"
left = fit_image(service_img, 67 * mm, 150 * mm) if service_img.exists() else ""
right_content = [
    p("Что получает посетитель", "H2x"),
    bullet("Понятное описание результата ремонта."),
    bullet("Признаки, когда услуга действительно нужна."),
    bullet("Состав работы и варианты запчастей."),
    bullet("Ориентировочная цена и срок."),
    bullet("Процесс замены и наглядное «до/после»."),
    bullet("Гарантия, отзывы и ответы на вопросы."),
    bullet("Запись, телефон, мессенджеры и карта."),
    Spacer(1, 5 * mm),
    p("Цель страницы", "H2x"),
    p("Дать клиенту достаточно информации для уверенного обращения, не перегружая его техническими подробностями.", "Bodyx"),
]
t = Table([[left, right_content]], colWidths=[75 * mm, 89 * mm])
t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm)]))
story.append(t)
story.append(PageBreak())

story += section_title("09", "Как выглядит страница неисправности", "Пример: «Нет изображения на телефоне».")
left = fit_image(fault_img, 67 * mm, 150 * mm) if fault_img.exists() else ""
right_content = [
    p("Что получает посетитель", "H2x"),
    bullet("Описание проявлений неисправности."),
    bullet("Перечень возможных причин без преждевременного диагноза."),
    bullet("Безопасные действия, которые можно попробовать самостоятельно."),
    bullet("Предупреждение о действиях, способных ухудшить состояние устройства."),
    bullet("Возможные варианты ремонта и диапазон стоимости."),
    bullet("Запись на диагностику и быстрый контакт с мастером."),
    Spacer(1, 5 * mm),
    p("Цель страницы", "H2x"),
    p("Помочь человеку понять ситуацию и перейти к наиболее подходящей услуге или диагностике.", "Bodyx"),
]
t = Table([[left, right_content]], colWidths=[75 * mm, 89 * mm])
t.setStyle(TableStyle([("VALIGN", (0, 0), (-1, -1), "TOP"), ("LEFTPADDING", (0, 0), (-1, -1), 0), ("RIGHTPADDING", (0, 0), (-1, -1), 4 * mm)]))
story.append(t)
story.append(PageBreak())

# General pages
story += section_title("10", "Общие страницы сайта")
story.append(two_col_cards([
    ("Цены", "Единый каталог ориентировочной стоимости с разделением по типу техники и переходами к услугам.", ORANGE),
    ("Как проходит ремонт", "Понятная схема от приёмки и диагностики до тестирования и выдачи устройства.", RED),
    ("Гарантия", "Условия гарантии на выполненные работы и установленные детали, порядок обращения.", GREEN),
    ("О сервисе", "Мастерская, оборудование, подход к ремонту, фотографии и реквизиты.", ORANGE),
    ("Портфолио", "Реальные случаи ремонта: модель, проблема, выполненная работа и результат.", RED),
    ("Отзывы", "Отзывы клиентов с датой и источником, разделённые по категориям техники.", GREEN),
    ("Частые вопросы", "Диагностика, сроки, стоимость, детали, гарантия, данные и выезд.", ORANGE),
    ("Контакты", "Телефон, мессенджеры, адрес, ориентир входа, карта и форма обращения.", RED),
    ("Полезные материалы", "Практические статьи об уходе за техникой, данных и действиях при поломке.", GREEN),
]))
story += [Spacer(1, 7 * mm), p("Все общие страницы поддерживают доверие к сервису и помогают человеку принять решение без повторения контента конкретных услуг.", "Quote")]
story.append(PageBreak())

# Journey
story += section_title("11", "Путь клиента по сайту", "Структура создаётся вокруг понятных жизненных сценариев.")
journeys = [
    ["01", "Не заряжается телефон", "Ремонт телефонов", "Причины неисправности", "Разъём или аккумулятор", "Запись"],
    ["02", "Разбит экран", "Ремонт телефонов", "Стекло или дисплей", "Выбор детали и цены", "Заявка"],
    ["03", "Греется ноутбук", "Ремонт ноутбуков", "Проверка симптомов", "Чистка или охлаждение", "Запись"],
    ["04", "Тормозит компьютер", "Ремонт ПК", "Поиск причины", "Чистка, SSD или система", "Связь"],
]
data = [[p("", "H3x"), p("Запрос", "H3x"), p("Раздел", "H3x"), p("Объяснение", "H3x"), p("Решение", "H3x"), p("Действие", "H3x")]]
for row in journeys:
    data.append([p(f"<font color='#FF5A00'><b>{row[0]}</b></font>", "Bodyx")] + [p(escape(x), "Smallx") for x in row[1:]])
t = Table(data, colWidths=[11 * mm, 32 * mm, 29 * mm, 32 * mm, 40 * mm, 20 * mm], repeatRows=1)
t.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), INK), ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
    ("BOX", (0, 0), (-1, -1), 0.6, LINE), ("INNERGRID", (0, 0), (-1, -1), 0.45, LINE),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 2 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 2 * mm), ("TOPPADDING", (0, 0), (-1, -1), 3 * mm),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 3 * mm),
]))
story += [t, Spacer(1, 8 * mm), p("Главный принцип", "H2x"), p("На каждой странице человек получает ответ на текущий вопрос и видит следующий логичный шаг: выбрать услугу, узнать ориентировочную стоимость, позвонить или написать мастеру.", "Quote")]
story.append(PageBreak())

# Trust content
story += section_title("12", "Контент, который формирует доверие")
story.append(two_col_cards([
    ("Собственная мастерская", "Фотографии рабочего места, инструментов и оборудования показывают реальную среду ремонта.", ORANGE),
    ("Прозрачный процесс", "Диагностика, согласование стоимости, ремонт, тестирование и выдача описаны заранее.", RED),
    ("Реальные работы", "Кейсы «проблема - решение - результат» подтверждают опыт лучше общих рекламных фраз.", GREEN),
    ("Понятные цены", "Ориентиры по основным работам и объяснение факторов итоговой стоимости.", ORANGE),
    ("Гарантия", "Условия по работе и детали изложены понятным языком в услугах и отдельном разделе.", RED),
    ("Удобная связь", "Клиент может выбрать телефон, Telegram, Viber или WhatsApp и сразу передать модель и симптомы.", GREEN),
]))
story.append(PageBreak())

# Final
story += section_title("13", "Итоговая концепция")
story.append(Spacer(1, 7 * mm))
story.append(p("Сайт Mandarin Сервис становится не одной длинной рекламной страницей, а удобной системой, в которой каждая проблема и услуга имеют своё понятное место.", "Quote"))
story.append(Spacer(1, 9 * mm))
final_items = [
    ("Для клиента", "Быстро найти свою проблему, понять возможное решение и связаться с мастерской."),
    ("Для сервиса", "Представить все направления без перегруженной главной страницы."),
    ("Для развития", "Добавлять новые услуги, неисправности, кейсы и полезные материалы в уже готовую структуру."),
    ("Для бренда", "Сохранить узнаваемую оранжево-красную палитру и единый образ на всех страницах."),
]
story.append(two_col_cards([(a, b, ORANGE if i % 2 == 0 else RED) for i, (a, b) in enumerate(final_items)]))
story.append(Spacer(1, 14 * mm))
cta = Table([[
    [p("Mandarin Сервис", "H1x"), p("Ремонт телефонов, ноутбуков и компьютеров в Борисове", "Bodyx")],
    [p("+375 29 150-68-88", "H2x"), p("ул. Чапаева, 34", "Bodyx")],
]], colWidths=[103 * mm, 61 * mm])
cta.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, -1), SOFT), ("BOX", (0, 0), (-1, -1), 1, ORANGE),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"), ("LEFTPADDING", (0, 0), (-1, -1), 6 * mm),
    ("RIGHTPADDING", (0, 0), (-1, -1), 6 * mm), ("TOPPADDING", (0, 0), (-1, -1), 6 * mm),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 6 * mm),
]))
story.append(cta)

doc.build(story)
print(OUT)
