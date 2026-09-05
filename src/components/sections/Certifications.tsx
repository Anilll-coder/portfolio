"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { certifications } from "@/data/education";
import { staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading index="07" eyebrow="Certifications" title="Coursework & credentials" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.07)}
        className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            variants={staggerItem}
            className="flex items-start justify-between gap-4 bg-bg p-6 transition-colors duration-300 hover:bg-surface"
          >
            <div>
              <h3 className="text-base font-medium text-ink">{cert.title}</h3>
              <p className="mt-1 text-sm text-ink-muted">{cert.issuer}</p>
            </div>
            {cert.note && (
              <span className="shrink-0 rounded-sm border border-accent/30 bg-accent-soft px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-accent">
                {cert.note}
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
