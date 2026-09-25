"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IconBrandWindows, IconDeviceDesktop, IconDeviceLaptop, IconDeviceMobile, IconDeviceTv, IconMenu2, IconMoon, IconPhone, IconSun } from "@tabler/icons-react";

import { buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { RequestTrigger } from "@/components/site/request-provider";
import { siteConfig } from "@/lib/site";
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

const headerAnchors = new Set(["#prices", "#contacts"]);

const directions = [
  { label: "Телефоны", href: "/remont-telefonov/", icon: IconDeviceMobile },
  { label: "Ноутбуки", href: "/remont-noutbukov/", icon: IconDeviceLaptop },
  { label: "Компьютеры", href: "/remont-kompyuterov/", icon: IconDeviceDesktop },
  { label: "Телевизоры", href: "/remont-televizorov/", icon: IconDeviceTv },
  { label: "Установка Windows", href: "/ustanovka-windows/", icon: IconBrandWindows },
];

export function SiteHeader({ homeLinks = false }: { homeLinks?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const pendingHash = useRef<string | null>(null);

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

        <nav className="ml-8 hidden items-center gap-5 xl:flex 2xl:ml-16 2xl:gap-8" aria-label="Основная навигация">
          {directions.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              className={cn(
                "text-[13px] font-semibold whitespace-nowrap transition-colors hover:text-primary dark:hover:text-[#ff8a32]",
                pathname.startsWith(href) ? "text-[#e74700] dark:text-[#ff8a32]" : "text-[#211a17] dark:text-[#fff7f0]",
              )}
            >
              {label}
            </Link>
          ))}
          <span aria-hidden="true" className="h-5 w-px bg-[#e6d9d0] dark:bg-[#49352d]" />
          {navigation.filter(([, href]) => headerAnchors.has(href)).map(([label, href]) => (
            <Link
              key={href}
              href={homeLinks ? `/${href}` : href}
              className="text-[13px] font-semibold whitespace-nowrap text-[#5d514b] transition-colors hover:text-primary dark:text-[#c7b9b1] dark:hover:text-[#ff8a32]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 pl-6 md:gap-5 xl:gap-4 2xl:gap-5">
          <a
            href="tel:+375291506888"
            aria-label={`Позвонить: +375 29 150-68-88, ${siteConfig.openingHours.label}`}
            className="group flex items-center gap-3 rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span aria-hidden="true" className="grid size-11 shrink-0 place-items-center rounded-full border border-[#ff5000]/30 bg-[#ff5000]/8 text-[#ff5000] transition-colors group-hover:border-[#ff5000] group-hover:bg-[#ff5000] group-hover:text-white md:size-10 xl:hidden 2xl:grid dark:border-[#ff7a18]/40 dark:bg-[#ff7a18]/12 dark:text-[#ff8a32] dark:group-hover:bg-[#ff7a18] dark:group-hover:text-[#1c1009]">
              <IconPhone stroke={1.75} className="size-5" />
            </span>
            <span aria-hidden="true" className="hidden leading-tight md:block">
              <span className="block text-[15px] font-extrabold tracking-[-0.02em] whitespace-nowrap text-[#211a17] transition-colors group-hover:text-[#e74700] dark:text-[#fff7f0] dark:group-hover:text-[#ff8a32]">
                +375 29 150-68-88
              </span>
              <span className="mt-0.5 block text-[11px] font-medium whitespace-nowrap text-[#8a7d76] dark:text-[#a79b8f]">{siteConfig.openingHours.label}</span>
            </span>
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
          <RequestTrigger
            fallbackHref="tel:+375291506888"
            className={cn(
              buttonVariants({ variant: "brand-outline", size: "xl" }),
              "hidden h-11 px-5 xl:inline-flex dark:border-[#ff7a18]/55 dark:bg-transparent dark:text-[#fff7f0] dark:hover:bg-[#ff7a18]/12 dark:hover:text-[#ff9a3d]",
            )}
          >
            Записаться
          </RequestTrigger>
          <Drawer
            swipeDirection="down"
            showSwipeHandle
            open={menuOpen}
            onOpenChange={setMenuOpen}
            onOpenChangeComplete={(open) => {
              // The drawer's scroll lock swallows anchor scrolling, so scroll again once it is released.
              if (!open && pendingHash.current) {
                document.getElementById(pendingHash.current)?.scrollIntoView();
                pendingHash.current = null;
              }
            }}
          >
            <DrawerTrigger aria-label="Открыть меню" className="grid size-11 cursor-pointer place-items-center rounded-xl border border-[#eadbd1] text-[#443a35] focus-visible:outline-2 focus-visible:outline-primary xl:hidden dark:border-[#49352d] dark:text-[#fff7f0]">
              <IconMenu2 aria-hidden="true" className="size-5" />
            </DrawerTrigger>
            <DrawerContent className="border-[#eee4de] bg-[#fffaf6] [--drawer-bleed-background:#fffaf6] dark:[--drawer-bleed-background:#120d0b] dark:border-[#382922] dark:bg-[#120d0b]">
              <div className="mx-auto flex w-full max-w-lg min-h-0 flex-col overflow-y-auto px-4 pt-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
                <DrawerTitle className="sr-only">Меню</DrawerTitle>
                <nav aria-label="Направления ремонта">
                  <p className="px-1 pb-2 text-xs font-semibold tracking-wide text-[#8a7d76] uppercase dark:text-[#a79b8f]">Ремонт</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {directions.map(({ label, href, icon: Icon }) => {
                      const current = pathname === href || pathname.startsWith(href);
                      return (
                        <li key={href} className="odd:last:col-span-2">
                          <Link
                            href={href}
                            onClick={() => setMenuOpen(false)}
                            aria-current={pathname === href ? "page" : undefined}
                            className={cn(
                              "flex min-h-14 items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-primary",
                              current
                                ? "border-[#ff5000]/50 bg-[#ff5000]/8 text-[#e74700] dark:text-[#ff8a32]"
                                : "border-[#eee4de] bg-white text-[#211a17] hover:border-[#ff5000]/50 dark:border-[#382922] dark:bg-[#1a1310] dark:text-[#fff7f0]",
                            )}
                          >
                            <Icon aria-hidden="true" stroke={1.5} className="size-6 shrink-0 text-[#ff5000]" />
                            {label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <nav aria-label="Компактная навигация" className="mt-4 grid grid-cols-2 gap-x-2 border-t border-[#eee4de] pt-2 dark:border-[#382922]">
                  {navigation.map(([label, href]) => {
                    const target = homeLinks ? `/${href}` : href;
                    return (
                      <a
                        key={href}
                        href={target}
                        onClick={(event) => {
                          event.preventDefault();
                          pendingHash.current = href.slice(1);
                          setMenuOpen(false);
                          router.push(target);
                        }}
                        className="rounded-lg px-1 py-2.5 text-sm font-semibold text-[#443a35] hover:text-primary focus-visible:outline-2 focus-visible:outline-primary dark:text-[#d9ccc4] dark:hover:text-[#ff8a32]"
                      >
                        {label}
                      </a>
                    );
                  })}
                </nav>
                <div className="mt-3 flex items-center gap-2 border-t border-[#eee4de] pt-4 dark:border-[#382922]">
                  <a
                    href="tel:+375291506888"
                    className={cn(buttonVariants({ variant: "brand", size: "xl" }), "h-12 flex-1 gap-2 rounded-md bg-[#ff5000] text-sm text-white shadow-none hover:bg-[#e74700]")}
                  >
                    <IconPhone aria-hidden="true" className="size-5" />
                    +375 29 150-68-88
                  </a>
                  <button type="button" onClick={toggleTheme} aria-label="Переключить цветовую тему" className="grid size-12 shrink-0 place-items-center rounded-md border border-[#eadbd1] text-[#443a35] hover:border-primary hover:text-primary dark:border-[#49352d] dark:text-[#fff7f0]">
                    <IconMoon aria-hidden="true" className="size-5 dark:hidden" />
                    <IconSun aria-hidden="true" className="hidden size-5 dark:block" />
                  </button>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
}
