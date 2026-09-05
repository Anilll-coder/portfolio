"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { skillGroups } from "@/data/skills";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function TechStack() {
  return (
    <Section id="skills">
      <SectionHeading
        index="02"
        eyebrow="Stack"
        title="Technology I reach for"
        description="Grouped by where it's actually used — not a wall of badges."
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.06)}
        className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.id}
            variants={staggerItem}
            className={cn(
              "group relative bg-bg p-6 transition-colors duration-300 hover:bg-surface",
              index === skillGroups.length - 1 && "sm:col-span-2 lg:col-span-3"
            )}
          >
            <div className="flex items-baseline justify-between">
              <h3 className="font-mono text-sm font-medium text-ink">{group.label}</h3>
              <span className="font-mono text-[10px] text-ink-faint">
                {String(group.skills.length).padStart(2, "0")}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-ink-faint">{group.description}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-sm border border-border-strong bg-surface px-2.5 py-1 text-xs text-ink-muted transition-all duration-200 group-hover:border-border-strong group-hover:text-ink hover:!border-accent/50 hover:!text-accent"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mt-8 font-mono text-xs text-ink-faint"
      >
        Every technology listed here has shipped in a real project — see below.
      </motion.p>
    </Section>
  );
}
