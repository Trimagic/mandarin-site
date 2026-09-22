"use client";

import Link from "next/link";
import { useEffect } from "react";
import { IconMenu2, IconMoon, IconPhone, IconSun } from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Mandarin Сервис — на главную">
      <span className="relative grid size-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(145deg,#ff9b2f,#ff5a0a_55%,#df1831)] shadow-[0_8px_22px_-10px_rgba(220,69,0,.9)]">
        <span className="absolute -top-1 left-1/2 h-3 w-5 -translate-x-1/2 -rotate-12 rounded-[100%_0_100%_0] bg-[#5e9f35]" />
        <span className="mt-1 text-lg font-black text-white">M</span>
      </span>
      <span className="leading-[0.95] font-extrabold tracking-[-0.035em]">
        <span className="block text-[#e7550d]">Mandarin</span>
        <span className="block text-[#df2034]">Сервис</span>
      </span>
    </Link>
  );
}

const navigation = [
  ["Услуги", "#services"],
  ["Цены", "#prices"],
  ["Как проходит ремонт", "#process"],
  ["Гарантия", "#warranty"],
  ["Контакты", "#contacts"],
] as const;

export function SiteHeader({ homeLinks = false }: { homeLinks?: boolean }) {
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("mandarin-theme");
    const useDarkTheme = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    document.documentElement.classList.toggle("dark", useDarkTheme);
  }, []);

  function toggleTheme() {
    const useDarkTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", useDarkTheme);
    window.localStorage.setItem("mandarin-theme", useDarkTheme ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#eee4de] bg-[#fffaf6]/92 backdrop-blur-xl transition-colors dark:border-[#382922] dark:bg-[#120d0b]/92">
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center px-5 md:h-20 md:px-6 xl:px-12">
        <Brand />

        <nav className="ml-20 hidden items-center gap-8 xl:flex" aria-label="Основная навигация">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={homeLinks ? `/${href}` : href}
              className="text-[13px] font-semibold text-[#5d514b] transition-colors hover:text-primary dark:text-[#c7b9b1] dark:hover:text-[#ff8a32]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 md:gap-5">
          <a href="tel:+375291506888" aria-label="Позвонить: +375 29 150-68-88" className="grid size-11 place-items-center rounded-full border border-[#eadbd1] text-sm font-extrabold tracking-[-0.02em] text-[#211a17] md:block md:size-auto md:rounded-none md:border-0 dark:border-[#49352d] dark:text-[#fff7f0]">
            <IconPhone aria-hidden="true" className="size-5 md:hidden" />
            <span className="hidden md:inline">+375 29 150-68-88</span>
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Переключить цветовую тему"
            title="Переключить цветовую тему"
            className="hidden size-11 place-items-center rounded-xl border border-[#eadbd1] bg-white text-[#443a35] transition-colors hover:border-primary hover:text-primary md:grid dark:border-[#49352d] dark:bg-[#211815] dark:text-[#fff7f0] dark:hover:border-[#ff7a18] dark:hover:text-[#ff9a3d]"
          >
            <IconMoon className="size-4 dark:hidden" />
            <IconSun className="hidden size-4 dark:block" />
          </button>
          <a
            href="tel:+375291506888"
            className={cn(
              buttonVariants({ variant: "brand-outline", size: "xl" }),
              "hidden h-11 px-5 xl:inline-flex dark:border-[#ff7a18]/55 dark:bg-transparent dark:text-[#fff7f0] dark:hover:bg-[#ff7a18]/12 dark:hover:text-[#ff9a3d]",
            )}
          >
            Записаться
          </a>
          <details className="group relative xl:hidden">
            <summary aria-label="Открыть меню" className="grid size-11 cursor-pointer list-none place-items-center rounded-xl border border-[#eadbd1] text-[#443a35] focus-visible:outline-2 focus-visible:outline-primary dark:border-[#49352d] dark:text-[#fff7f0] [&::-webkit-details-marker]:hidden">
              <IconMenu2 aria-hidden="true" className="size-5" />
            </summary>
            <nav aria-label="Компактная навигация" className="absolute top-14 right-0 w-64 max-w-[calc(100vw-40px)] rounded-xl border border-border bg-background p-2 shadow-lg">
              {navigation.map(([label, href]) => (
                <a key={href} href={homeLinks ? `/${href}` : href} onClick={(event) => { event.currentTarget.closest("details")?.removeAttribute("open"); }} className="block rounded-lg px-4 py-3 text-sm font-semibold hover:bg-secondary focus-visible:outline-2 focus-visible:outline-primary">
                  {label}
                </a>
              ))}
              <button type="button" onClick={toggleTheme} className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold hover:bg-secondary md:hidden">
                <IconMoon aria-hidden="true" className="size-4 dark:hidden" />
                <IconSun aria-hidden="true" className="hidden size-4 dark:block" />
                Переключить тему
              </button>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
