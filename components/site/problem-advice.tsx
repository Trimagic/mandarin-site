import { IconAlertCircle, IconAlertTriangle, IconCheck, IconTools } from "@tabler/icons-react";
import { useId } from "react";
import type { ProblemAdviceData } from "@/data/problems/types";
import { cn } from "@/lib/utils";

const tones = {
  help: {
    panel: "border-[#dfebd8] bg-[#f6faf3] dark:border-[#35472d] dark:bg-[#141c11]",
    icon: "text-[#65a832] dark:text-[#8cc65b]",
    decoration: "text-[#65a832]/[0.07] dark:text-[#8cc65b]/[0.08]",
    ListIcon: IconCheck,
    Decoration: IconTools,
  },
  warning: {
    panel: "border-[#f2dfdb] bg-[#fff7f5] dark:border-[#56322c] dark:bg-[#241513]",
    icon: "text-[#f04a00] dark:text-[#ff7848]",
    decoration: "text-[#f04a00]/[0.07] dark:text-[#ff7848]/[0.08]",
    ListIcon: IconAlertCircle,
    Decoration: IconAlertTriangle,
  },
};

export function ProblemAdvice({ data }: { data: ProblemAdviceData }) {
  const id = useId();
  if (data.panels.length === 0) return null;

  return (
    <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-4 px-5 pb-10 md:grid-cols-2 md:px-6 xl:gap-5 xl:px-12">
      {data.panels.map((panel) => {
        const { ListIcon, Decoration, ...style } = tones[panel.tone];
        const headingId = `${id}-${panel.id}`;
        return (
          <section key={panel.id} aria-labelledby={headingId} className={cn("relative isolate flex flex-col overflow-hidden rounded-xl border p-5 sm:p-6", style.panel)}>
            <Decoration aria-hidden="true" stroke={1.25} className={cn("pointer-events-none absolute right-3 bottom-3 -z-10 size-28", style.decoration)} />
            <h2 id={headingId} className="text-xl leading-7 font-extrabold tracking-[-0.025em] text-[#171717] dark:text-[#fff7f0]">{panel.title}</h2>
            {panel.items.length > 0 && <ul className="mt-4 space-y-3">
              {panel.items.map((item, index) => (
                <li key={`${panel.id}-${index}`} className="flex items-start gap-2 text-sm leading-6 text-[#54545d] dark:text-[#c5b8b1]">
                  <ListIcon aria-hidden="true" stroke={1.75} className={cn("mt-0.5 size-5 shrink-0", style.icon)} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>}
            {panel.note && <p className="mt-auto pt-6 text-xs leading-5 text-[#54545d] dark:text-[#c5b8b1]">{panel.note}</p>}
          </section>
        );
      })}
    </div>
  );
}
