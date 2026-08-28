# Ассеты для лендинга Mandarin Сервис

Все изображения — PNG с прозрачным фоном.

| Файл | Назначение |
|---|---|
| `hero-devices-desktop.png` | Основная композиция hero для десктопа и планшета |
| `hero-devices-mobile.png` | Компактная композиция hero для мобильных экранов |
| `hero-stage-desktop-light.png` | Полная hero-сцена с оранжевой панелью, тенями и отражениями для светлой темы |
| `hero-stage-desktop-dark.png` | Полная hero-сцена с оранжевой панелью, тенями и отражениями для тёмной темы |
| `hero-stage-mobile-light.png` | Компактная полная hero-сцена для светлой мобильной темы |
| `hero-stage-mobile-dark.png` | Компактная полная hero-сцена для тёмной мобильной темы |
| `logo-header.png` | Горизонтальный логотип для шапки сайта |
| `mandarin-mark.png` | Отдельный фирменный знак для favicon, иконки и декоративных акцентов |

## Рекомендуемое подключение hero

```html
<picture>
  <source media="(max-width: 640px)" srcset="/assets/landing-assets/hero-devices-mobile.png">
  <img
    src="/assets/landing-assets/hero-devices-desktop.png"
    alt="Смартфон, ноутбук и мандарин"
    width="1536"
    height="1024"
  >
</picture>
```

Файлы `hero-stage-*` уже включают оранжево-красную панель, сетку, контактные тени, отражения и свечение. Карточку диагностики и остальной интерфейс следует собирать средствами HTML/CSS.
