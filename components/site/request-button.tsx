"use client";

import { useRef, useState, useSyncExternalStore, type ReactNode } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { RequestForm } from "@/components/site/request-form";
import type { RequestFormConfig } from "@/lib/request-types";

const desktopQuery = "(min-width: 1280px)";

function subscribe(callback: () => void) {
  const media = window.matchMedia(desktopQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function useIsDesktop() {
  return useSyncExternalStore(subscribe, () => window.matchMedia(desktopQuery).matches, () => false);
}

const title = "Заявка на ремонт";
const description = "Выберите поломку и оставьте телефон — мастер перезвонит и назовёт стоимость.";

export function RequestButton({ config, className, children }: { config: RequestFormConfig; className?: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const isDesktop = useIsDesktop();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const form = <RequestForm config={config} onDone={() => setOpen(false)} />;

  return (
    <>
      <button ref={triggerRef} type="button" onClick={() => setOpen(true)} aria-haspopup="dialog" className={className}>
        {children}
      </button>
      {isDesktop ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent finalFocus={triggerRef} className="max-h-[calc(100dvh-4rem)] gap-5 overflow-y-auto border-[#eee4de] bg-[#fffaf6] p-6 sm:max-w-xl dark:border-[#382922] dark:bg-[#120d0b]">
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold tracking-[-0.03em]">{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            {form}
          </DialogContent>
        </Dialog>
      ) : (
        <Drawer open={open} onOpenChange={setOpen} swipeDirection="down" showSwipeHandle>
          <DrawerContent finalFocus={triggerRef} className="border-[#eee4de] bg-[#fffaf6] [--drawer-bleed-background:#fffaf6] dark:border-[#382922] dark:bg-[#120d0b] dark:[--drawer-bleed-background:#120d0b]">
            <div className="mx-auto flex w-full max-w-lg min-h-0 flex-col overflow-y-auto px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <DrawerHeader className="px-0 pt-3 pb-5 group-data-[swipe-axis=y]/drawer-popup:text-left">
                <DrawerTitle className="text-xl font-extrabold tracking-[-0.03em]">{title}</DrawerTitle>
                <DrawerDescription className="text-left">{description}</DrawerDescription>
              </DrawerHeader>
              {form}
            </div>
          </DrawerContent>
        </Drawer>
      )}
    </>
  );
}
