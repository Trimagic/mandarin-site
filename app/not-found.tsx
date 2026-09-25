import type { Metadata } from "next";
import Link from "next/link";
import { IconArrowRight, IconMessage } from "@tabler/icons-react";

import { HomeDirections } from "@/components/site/home-directions";
import { ContactTrigger, RequestProvider } from "@/components/site/request-provider";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { buttonVariants } from "@/components/ui/button";
import { homeRequestConfig } from "@/lib/request";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Страница не найдена",
  description: "Такой страницы нет. Выберите раздел ремонта или напишите мастеру.",
};

export default function NotFound() {
  return (
    <RequestProvider config={{ ...homeRequestConfig(), context: "Страница 404" }}>
      <div className="min-h-screen min-w-[320px] overflow-x-clip">
        <SiteHeader homeLinks />
        <main>
          <section aria-labelledby="not-found-heading" className="mx-auto w-full max-w-[1440px] px-5 pt-14 pb-12 text-center md:px-6 md:pt-20 xl:px-12 xl:pt-24">
            <p aria-hidden="true" className="text-[clamp(96px,28vw,180px)] leading-none font-extrabold tracking-[-0.06em] text-[#ff5000]">
              404
            </p>
            <h1 id="not-found-heading" className="mt-4 text-[clamp(28px,7vw,40px)] leading-tight font-extrabold tracking-[-0.04em] text-[#171717] dark:text-[#fff7f0]">
              Такой страницы нет
            </h1>
            <p className="mx-auto mt-4 max-w-[480px] text-base leading-7 text-[#605952] dark:text-[#c5b8b1]">
              Возможно, ссылка устарела или в адресе опечатка. Выберите нужный раздел ниже или напишите мастеру — подскажем.
            </p>
            <div className="mt-7 flex flex-col items-stretch justify-center gap-2 sm:flex-row sm:items-center sm:gap-3">
              <Link
                href="/"
                className={cn(buttonVariants({ variant: "brand", size: "xl" }), "h-12 rounded-md bg-[#ff5000] px-7 text-sm text-white shadow-none hover:bg-[#e74700]")}
              >
                На главную
                <IconArrowRight aria-hidden="true" className="ml-2 size-5" />
              </Link>
              <ContactTrigger
                href="https://wa.me/375291506888"
                className={cn(buttonVariants({ variant: "ghost", size: "xl" }), "h-12 gap-3 px-5 text-sm text-[#171717] hover:bg-[#ff5000]/5 dark:text-[#fff7f0]")}
              >
                <IconMessage aria-hidden="true" stroke={1.5} className="size-5 text-[#ff5000]" />
                Написать мастеру
              </ContactTrigger>
            </div>
          </section>
          <HomeDirections className="mt-0 md:mt-0 xl:mt-0" />
        </main>
        <SiteFooter />
      </div>
    </RequestProvider>
  );
}
