"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, LeetCodeIcon } from "@/components/ui/Icons";
import { LeetCodeVisual } from "@/components/visuals/LeetCodeVisual";
import { profile } from "@/data/profile";
import { fadeUp, viewportOnce } from "@/lib/motion";

const FOCUS = ["Java", "JavaScript", "MySQL"];

export function LeetCodeSection() {
  return (
    <Section id="leetcode">
      <SectionHeading
        index="05"
        eyebrow="Problem Solving"
        title="Sharpening fundamentals"
        description="Data structures and algorithms practice, worked through consistently rather than in bursts."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="grid grid-cols-1 overflow-hidden rounded-xl border border-border bg-surface lg:grid-cols-[1fr_1fr]"
      >
        <div className="flex flex-col justify-center p-8 sm:p-10">
          <div className="flex items-center gap-2 text-ink">
            <LeetCodeIcon size={20} />
            <span className="font-mono text-sm">LeetCode</span>
          </div>
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink-muted">
            I work through algorithmic problems on LeetCode to keep core data-structures and
            problem-solving skills sharp — primarily in Java and JavaScript, with MySQL for
            database-oriented problems.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {FOCUS.map((f) => (
              <Badge key={f}>{f}</Badge>
            ))}
          </div>

          <div className="mt-8">
            <Button href={profile.links.leetcode} variant="secondary" icon={<ArrowUpRight size={14} />}>
              View LeetCode Profile
            </Button>
          </div>
        </div>

        <div className="relative flex min-h-[220px] items-center justify-center border-t border-border bg-bg p-8 lg:border-l lg:border-t-0">
          <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
          <LeetCodeVisual className="relative h-full w-full max-w-sm" />
        </div>
      </motion.div>
    </Section>
  );
}
