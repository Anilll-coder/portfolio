import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("relative py-24 sm:py-32 scroll-mt-20", className)}>
      <div className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-14 sm:mb-16">
      <div className="flex items-baseline gap-3 font-mono text-xs text-accent">
        <span>{index}</span>
        <span className="h-px w-8 bg-accent/40" />
        <span className="uppercase tracking-[0.2em] text-ink-faint">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-ink text-balance">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
