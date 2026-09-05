"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { education } from "@/data/education";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading index="06" eyebrow="Education" title="Academic record" />

      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.1)}
        className="space-y-0"
      >
        {education.map((item, i) => (
          <motion.li
            key={item.id}
            variants={staggerItem}
            className="flex flex-col gap-2 border-b border-border py-6 first:pt-0 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-medium text-ink">{item.degree}</h3>
                <p className="mt-0.5 text-sm text-ink-muted">
                  {item.institution}
                  {item.location ? ` — ${item.location}` : ""}
                </p>
              </div>
            </div>

            <div className="pl-8 sm:pl-0 sm:text-right">
              <p className="font-mono text-lg text-accent">{item.score}</p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                {item.scoreLabel}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ol>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mt-10 grid grid-cols-1 gap-6 border-t border-border pt-10 sm:grid-cols-2"
      >
      </motion.div>
    </Section>
  );
}