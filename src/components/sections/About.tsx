"use client";

import { motion } from "framer-motion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { profile } from "@/data/profile";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const FACTS = [
  { label: "Focus", value: "Software Engineering, AI/ML, Full-Stack" },
  { label: "CGPA", value: profile.cgpa },
  { label: "Based in", value: profile.location },
  { label: "Building", value: profile.currentlyBuilding },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading index="01" eyebrow="About" title="Builder first, student second." />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.3fr_1fr]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="space-y-5 text-lg leading-relaxed text-ink-muted"
        >
          <p>
            I&apos;m an engineering student at MVSR Engineering College, Hyderabad, holding a{" "}
            <span className="text-ink">9.04/10 CGPA</span> while spending most of my time outside
            class writing software — across AI/ML, full-stack web development, and developer
            tooling.
          </p>
          <p>
            I don&apos;t just study these technologies, I build with them. That means shipping
            projects end-to-end: designing the system, writing the code, deploying it, and
            iterating on it. Right now that&apos;s{" "}
            <span className="font-mono text-ink">{profile.currentlyBuilding}</span>, my major
            project for intelligent codebase analysis and developer productivity.
          </p>
          <p>
            I&apos;m drawn to the intersection of AI and software engineering — using LLMs and
            AI-assisted development to make developer tools smarter, and applying solid
            engineering fundamentals so those tools are actually reliable.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <p className="font-mono text-sm text-ink">
              Currently building: <span className="text-accent">{profile.currentlyBuilding}</span>
            </p>
          </div>
        </motion.div>

        <motion.dl
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={staggerContainer(0.08)}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-1"
        >
          {FACTS.map((fact) => (
            <motion.div key={fact.label} variants={staggerItem} className="bg-bg p-5">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                {fact.label}
              </dt>
              <dd className="mt-2 text-base text-ink">{fact.value}</dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </Section>
  );
}
