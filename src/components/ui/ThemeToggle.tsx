"use client";

import { useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "./Icons";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

function subscribe(callback: () => void) {
  window.addEventListener("themechange", callback);
  return () => window.removeEventListener("themechange", callback);
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const isLight = theme === "light";

  function toggle() {
    const next: Theme = isLight ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist.
    }
    window.dispatchEvent(new Event("themechange"));
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-strong text-ink-muted transition-colors duration-200 hover:border-accent/60 hover:text-ink",
        className
      )}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
    >
      {isLight ? <MoonIcon size={16} /> : <SunIcon size={16} />}
    </button>
  );
}
