import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-border-strong bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-ink-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
