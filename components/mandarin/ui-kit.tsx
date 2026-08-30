import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-xs font-extrabold tracking-[0.12em] text-primary uppercase">{children}</p>;
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="text-balance text-3xl font-extrabold tracking-[-0.045em] text-foreground sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-pretty text-base leading-7 text-muted-foreground sm:text-lg">{description}</p> : null}
    </div>
  );
}

export function SurfaceCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-border bg-card text-card-foreground shadow-[0_18px_50px_-36px_rgba(74,35,16,.45)]", className)}>{children}</div>;
}

export function IconBox({ children, tone = "orange" }: { children: ReactNode; tone?: "orange" | "red" | "green" | "blue" }) {
  const tones = { orange: "bg-primary/10 text-primary", red: "bg-accent-red/10 text-accent-red", green: "bg-accent-green/10 text-accent-green", blue: "bg-accent-blue/10 text-accent-blue" };
  return <span className={cn("grid size-11 place-items-center rounded-xl", tones[tone])}>{children}</span>;
}

export function TrustItem({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return <div className="flex items-center gap-2.5 text-sm font-semibold text-foreground"><span className="text-primary">{icon}</span><span>{children}</span></div>;
}

export function Price({ children }: { children: ReactNode }) {
  return <span className="text-sm font-extrabold text-accent-red">{children}</span>;
}

export function MandarinBadge({ children }: { children: ReactNode }) {
  return <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/8 px-3 py-1 text-xs font-bold text-primary">{children}</span>;
}
