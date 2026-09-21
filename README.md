# Mandarin Сервис

## Концепция и структура сайта

Актуальная спецификация: [реестр страниц](концепт/content/site-pages.md), обновлённый 21.09.2026. Планируется 73 страницы и пять направлений: телефоны, ноутбуки, компьютеры, компьютерная помощь и телевизоры. Реестр описывает целевую структуру, а не перечень уже реализованных страниц.

Услуги и неисправности имеют отдельные страницы непосредственно внутри направления, без сегментов `/uslugi/` и `/neispravnosti/`. Компьютерная помощь — одна страница с якорными разделами. Ремонт телевизоров — отдельное направление с шестью услугами и шестью неисправностями.

[Справочные сведения и черновики контента](концепт/content/site-content-plan.md). Предыдущие документы `site-architecture-hybrid.md` и `full-site-pages-plan.md` помечены как архивные; при расхождениях использовать новый реестр.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
