import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "secondary", icon, external, className }: ButtonProps) {
  const isExternal = external ?? (href.startsWith("http") || href.startsWith("mailto:"));

  const base =
    "focus-ring group inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium transition-colors duration-200";

  const variants: Record<string, string> = {
    primary: "bg-ink text-bg hover:bg-accent-strong",
    secondary: "border border-border-strong text-ink hover:border-accent/60 hover:text-accent",
    ghost: "text-ink-muted hover:text-ink",
  };

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {icon ? (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      ) : null}
    </Link>
  );
}
