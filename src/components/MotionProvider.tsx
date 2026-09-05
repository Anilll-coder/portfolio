"use client";

import { MotionConfig } from "framer-motion";

// Centralizes prefers-reduced-motion handling via Framer Motion's own runtime
// check (applied after mount) instead of branching render output on
// `useReducedMotion()`, which would make server- and client-rendered HTML
// diverge and trigger a hydration mismatch.
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
