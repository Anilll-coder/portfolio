"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/Button";
import { GraphCanvas } from "@/components/visuals/GraphCanvas";
import { ArrowUpRight } from "@/components/ui/Icons";
import { EASE, staggerContainer, staggerItem } from "@/lib/motion";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 pb-24 pt-36 sm:px-8 sm:pb-32 sm:pt-44 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.09, 0.05)}
        >
          <motion.p
            variants={staggerItem}
            className="font-mono text-xs uppercase tracking-[0.25em] text-accent"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-5 font-mono text-sm text-ink-muted sm:text-base"
          >
            Software Developer <span className="text-border-strong">/</span> AI-ML{" "}
            <span className="text-border-strong">/</span> Full-Stack{" "}
            <span className="text-border-strong">/</span> Developer Tools
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            {profile.statement}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#projects" variant="primary" icon={<ArrowUpRight size={14} />}>
              View Projects
            </Button>
            <Button href={profile.links.github} variant="secondary">
              GitHub
            </Button>
            <Button href={profile.links.leetcode} variant="secondary">
              LeetCode
            </Button>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-14 flex items-center gap-4 border-t border-border pt-6 font-mono text-xs text-ink-faint"
          >
            <span>CGPA {profile.cgpa}</span>
            <span className="h-1 w-1 rounded-full bg-border-strong" />
            <span>
              Currently building{" "}
              <span className="text-ink">{profile.currentlyBuilding}</span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
          className="relative h-[320px] sm:h-[420px] lg:h-[480px]"
        >
          <div className="absolute inset-0 rounded-xl border border-border bg-surface/40" />
          <GraphCanvas className="absolute inset-0" />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.02]" />
          <div className="absolute bottom-4 left-4 font-mono text-[11px] text-ink-faint">
            dependency_graph.render()
          </div>
        </motion.div>
      </div>
    </section>
  );
}
