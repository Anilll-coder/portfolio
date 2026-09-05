"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    mass: 0.2,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-px w-full origin-left bg-accent"
      aria-hidden="true"
    />
  );
}
