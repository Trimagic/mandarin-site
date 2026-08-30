"use client";

import Link from "next/link";
import { useEffect } from "react";
import { IconMoon, IconSun } from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function Brand() {
  return (
    <Link href="#top" className="flex items-center gap-3" aria-label="Mandarin Сервис — на главную">
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

export function SiteHeader() {
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
    <header className="sticky top-0 z-50 min-w-[1280px] border-b border-[#eee4de] bg-[#fffaf6]/92 backdrop-blur-xl transition-colors dark:border-[#382922] dark:bg-[#120d0b]/92">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center px-12">
        <Brand />

        <nav className="ml-20 flex items-center gap-8" aria-label="Основная навигация">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-[13px] font-semibold text-[#5d514b] transition-colors hover:text-primary dark:text-[#c7b9b1] dark:hover:text-[#ff8a32]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-5">
          <a href="tel:+375291506888" className="text-sm font-extrabold tracking-[-0.02em] text-[#211a17] dark:text-[#fff7f0]">
            +375 29 150-68-88
          </a>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Переключить цветовую тему"
            title="Переключить цветовую тему"
            className="grid size-11 place-items-center rounded-xl border border-[#eadbd1] bg-white text-[#443a35] transition-colors hover:border-primary hover:text-primary dark:border-[#49352d] dark:bg-[#211815] dark:text-[#fff7f0] dark:hover:border-[#ff7a18] dark:hover:text-[#ff9a3d]"
          >
            <IconMoon className="size-4 dark:hidden" />
            <IconSun className="hidden size-4 dark:block" />
          </button>
          <a
            href="tel:+375291506888"
            className={cn(
              buttonVariants({ variant: "brand-outline", size: "xl" }),
              "h-11 px-5 dark:border-[#ff7a18]/55 dark:bg-transparent dark:text-[#fff7f0] dark:hover:bg-[#ff7a18]/12 dark:hover:text-[#ff9a3d]",
            )}
          >
            Записаться
          </a>
        </div>
      </div>
    </header>
  );
}
