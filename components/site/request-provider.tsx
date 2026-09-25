"use client";

import { createContext, useContext, useEffect, useRef, useState, useSyncExternalStore, type ReactNode, type RefObject } from "react";
import { IconBrandTelegram, IconBrandWhatsapp, IconMessageCircle, IconPhone } from "@tabler/icons-react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { RequestForm } from "@/components/site/request-form";
import type { RequestFormConfig } from "@/lib/request-types";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const desktopQuery = "(min-width: 1280px)";

function subscribe(callback: () => void) {
  const media = window.matchMedia(desktopQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useIsDesktop() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(desktopQuery).matches, () => false);
}

type OpenSheet = (trigger: HTMLElement) => void;
type Sheet = "request" | "contact";

const RequestContext = createContext<{ openRequest: OpenSheet; openContact: (trigger: HTMLElement, href?: string) => void } | null>(null);

/** Modal on desktop, bottom sheet on tablets and phones. */
function ResponsiveSheet({ open, onOpenChange, returnFocus, title, description, wide = false, children }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocus: RefObject<HTMLElement | null>;
  title: string;
  description: string;
  wide?: boolean;
  children: ReactNode;
}) {
  const isDesktop = useIsDesktop();
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          finalFocus={returnFocus}
          className={cn(
            "max-h-[calc(100dvh-4rem)] gap-5 overflow-y-auto border-[#eee4de] bg-[#fffaf6] p-6 dark:border-[#382922] dark:bg-[#120d0b]",
            wide ? "sm:max-w-xl" : "sm:max-w-md",
          )}
        >
          <DialogHeader>
            <DialogTitle className="text-xl font-extrabold tracking-[-0.03em]">{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer open={open} onOpenChange={onOpenChange} swipeDirection="down" showSwipeHandle>
      <DrawerContent finalFocus={returnFocus} className="border-[#eee4de] bg-[#fffaf6] [--drawer-bleed-background:#fffaf6] dark:border-[#382922] dark:bg-[#120d0b] dark:[--drawer-bleed-background:#120d0b]">
        <div className="mx-auto flex w-full max-w-lg min-h-0 flex-col overflow-y-auto px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <DrawerHeader className="px-0 pt-3 pb-5 group-data-[swipe-axis=y]/drawer-popup:text-left">
            <DrawerTitle className="text-xl font-extrabold tracking-[-0.03em]">{title}</DrawerTitle>
            <DrawerDescription className="text-left">{description}</DrawerDescription>
          </DrawerHeader>
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const defaultWhatsappHref = "https://wa.me/375291506888";

const messengers = [
  { label: "WhatsApp", href: defaultWhatsappHref, icon: IconBrandWhatsapp, className: "bg-[#16bc39] hover:bg-[#12a532]" },
  { label: "Telegram", href: "https://t.me/+375291506888", icon: IconBrandTelegram, className: "bg-[#08a9e6] hover:bg-[#0797ce]" },
  { label: "Viber", href: "viber://chat?number=%2B375291506888", icon: IconMessageCircle, className: "bg-[#7d51c7] hover:bg-[#6d45b0]" },
];

function ContactOptions({ whatsappHref, onRequest }: { whatsappHref: string; onRequest: () => void }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {messengers.map(({ label, href, icon: Icon, className }) => {
          const target = label === "WhatsApp" ? whatsappHref : href;
          const external = target.startsWith("https://");
          return (
            <a
              key={label}
              href={target}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={cn("flex h-20 flex-col items-center justify-center gap-1.5 rounded-xl text-sm font-semibold text-white transition-colors", className)}
            >
              <Icon aria-hidden="true" className="size-7" />
              {label}
            </a>
          );
        })}
      </div>
      <a
        href={`tel:${siteConfig.telephone}`}
        className="flex h-14 items-center justify-center gap-3 rounded-xl border border-[#eadbd1] text-base font-extrabold tracking-[-0.02em] text-[#211a17] hover:border-primary hover:text-primary dark:border-[#49352d] dark:text-[#fff7f0]"
      >
        <IconPhone aria-hidden="true" className="size-5 text-[#ff5000]" />
        +375 29 150-68-88
      </a>
      <p className="text-center text-xs leading-5 text-[#79757a] dark:text-[#a79b8f]">
        {siteConfig.openingHours.label}, {siteConfig.openingHours.note.toLowerCase()}
      </p>
      <button type="button" onClick={onRequest} className="cursor-pointer text-sm font-semibold text-[#e74700] hover:underline dark:text-[#ff8a32]">
        Или оставьте заявку — мастер перезвонит
      </button>
    </div>
  );
}

/** One request form and one contact chooser per page; triggers inside open them. */
export function RequestProvider({ config, children }: { config: RequestFormConfig; children: ReactNode }) {
  const [active, setActive] = useState<Sheet | null>(null);
  const [whatsappHref, setWhatsappHref] = useState(defaultWhatsappHref);
  const returnFocus = useRef<HTMLElement | null>(null);
  const show = (sheet: Sheet, trigger: HTMLElement) => {
    returnFocus.current = trigger;
    setActive(sheet);
  };
  const openRequest: OpenSheet = (trigger) => show("request", trigger);
  const openContact = (trigger: HTMLElement, href?: string) => {
    setWhatsappHref(href?.startsWith("https://wa.me/") ? href : defaultWhatsappHref);
    show("contact", trigger);
  };
  const toggle = (sheet: Sheet) => (value: boolean) => setActive(value ? sheet : null);

  return (
    <RequestContext.Provider value={{ openRequest, openContact }}>
      {children}
      <MobileActionBar onRequest={openRequest} />
      <ResponsiveSheet
        open={active === "request"}
        onOpenChange={toggle("request")}
        returnFocus={returnFocus}
        title="Заявка на ремонт"
        description="Выберите поломку и оставьте телефон — мастер перезвонит и назовёт стоимость."
        wide
      >
        <RequestForm config={config} onDone={() => setActive(null)} />
      </ResponsiveSheet>
      <ResponsiveSheet
        open={active === "contact"}
        onOpenChange={toggle("contact")}
        returnFocus={returnFocus}
        title="Написать мастеру"
        description="Выберите, где удобнее: ответим в мессенджере или по телефону."
      >
        <ContactOptions whatsappHref={whatsappHref} onRequest={() => setActive("request")} />
      </ResponsiveSheet>
    </RequestContext.Provider>
  );
}

/** Opens the page's request form; outside a RequestProvider it falls back to a plain link. */
export function RequestTrigger({ fallbackHref, className, children, "aria-label": ariaLabel }: {
  fallbackHref: string;
  className?: string;
  children: ReactNode;
  "aria-label"?: string;
}) {
  const context = useContext(RequestContext);
  if (!context) return <a href={fallbackHref} aria-label={ariaLabel} className={className}>{children}</a>;
  return (
    <button type="button" aria-haspopup="dialog" aria-label={ariaLabel} onClick={(event) => context.openRequest(event.currentTarget)} className={cn("cursor-pointer", className)}>
      {children}
    </button>
  );
}

/** Opens the messenger and call chooser; a WhatsApp href keeps its prefilled text. */
export function ContactTrigger({ href, className, children }: { href: string; className?: string; children: ReactNode }) {
  const context = useContext(RequestContext);
  if (!context) return <a href={href} className={className}>{children}</a>;
  return (
    <button type="button" aria-haspopup="dialog" onClick={(event) => context.openContact(event.currentTarget, href)} className={cn("cursor-pointer", className)}>
      {children}
    </button>
  );
}

function MobileActionBar({ onRequest }: { onRequest: OpenSheet }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Appears once the hero call-to-action has scrolled away.
    const update = () => setVisible(window.scrollY > 480);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <div aria-hidden="true" className="h-[calc(4.75rem+env(safe-area-inset-bottom))] md:hidden" />
      <div
        inert={!visible}
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 border-t border-[#eee4de] bg-[#fffaf6]/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-300 md:hidden dark:border-[#382922] dark:bg-[#120d0b]/95",
          visible ? "translate-y-0" : "translate-y-full",
        )}
      >
        <div className="mx-auto grid max-w-lg grid-cols-[auto_1fr] gap-2">
          <a
            href="tel:+375291506888"
            aria-label="Позвонить: +375 29 150-68-88"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-[#eadbd1] px-4 text-sm font-semibold text-[#211a17] dark:border-[#49352d] dark:text-[#fff7f0]"
          >
            <IconPhone aria-hidden="true" className="size-5 text-[#ff5000]" />
            Позвонить
          </a>
          <button
            type="button"
            aria-haspopup="dialog"
            onClick={(event) => onRequest(event.currentTarget)}
            className="inline-flex h-12 cursor-pointer items-center justify-center rounded-lg bg-[#ff5000] px-4 text-sm font-semibold text-white hover:bg-[#e74700]"
          >
            Оставить заявку
          </button>
        </div>
      </div>
    </>
  );
}
