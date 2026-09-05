"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { CopyIcon, CheckIcon } from "./Icons";
import { cn } from "@/lib/utils";

export function CopyEmailButton({ className }: { className?: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable — no-op, the email is still visible/selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "focus-ring group inline-flex items-center gap-2 rounded-md border border-border-strong px-5 py-3 font-mono text-sm text-ink transition-colors duration-200 hover:border-accent/60 hover:text-accent",
        className
      )}
      aria-live="polite"
    >
      <span>{profile.email}</span>
      {copied ? (
        <CheckIcon size={14} className="text-accent" />
      ) : (
        <CopyIcon size={14} className="text-ink-faint transition-colors group-hover:text-accent" />
      )}
      <span className="sr-only">{copied ? "Copied" : "Copy email address"}</span>
    </button>
  );
}
