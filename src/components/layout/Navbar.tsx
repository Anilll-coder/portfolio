"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/data/profile";
import { ScrollProgress } from "./ScrollProgress";
import { MenuIcon, CloseIcon } from "@/components/ui/Icons";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(
      (el): el is Element => !!el
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <ScrollProgress />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
          scrolled ? "border-b border-border bg-bg/85 backdrop-blur-md" : "border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8">
          <Link
            href="#top"
            className="focus-ring rounded-sm font-mono text-sm font-medium tracking-tight text-ink"
          >
            {profile.shortName.toUpperCase()}
            <span className="text-accent">.</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "focus-ring relative rounded-sm px-3 py-2 text-sm transition-colors duration-200",
                    active === item.href ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                  {active === item.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-x-3 -bottom-px h-px bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-md border border-border-strong text-ink md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <CloseIcon size={16} /> : <MenuIcon size={16} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-bg/95 backdrop-blur-sm md:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } } }}
              className="flex h-full flex-col items-center justify-center gap-2"
            >
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.35 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="focus-ring block px-6 py-3 text-2xl font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
