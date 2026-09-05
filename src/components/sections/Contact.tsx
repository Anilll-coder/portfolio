"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { ArrowUpRight, GithubIcon, LeetCodeIcon, CloudIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">08 / Contact</p>
        <h2 className="mt-5 text-3xl font-semibold tracking-tight text-ink text-balance sm:text-5xl">
          Let&apos;s build something useful.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted">
          Open to conversations about software engineering, AI/ML, and developer tooling — reach
          out directly by email.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <CopyEmailButton />
          <Button href={`tel:${profile.phone}`} variant="secondary">
            {profile.phone}
          </Button>
        </div>

        <div className="mx-auto mt-14 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
          <Button href={profile.links.github} variant="secondary" icon={<ArrowUpRight size={14} />}>
            <GithubIcon size={16} /> GitHub
          </Button>
          <Button href={profile.links.leetcode} variant="secondary" icon={<ArrowUpRight size={14} />}>
            <LeetCodeIcon size={16} /> LeetCode
          </Button>
          <Button href={profile.links.nextwork} variant="secondary" icon={<ArrowUpRight size={14} />}>
            <CloudIcon size={16} /> NextWork
          </Button>
        </div>
      </motion.div>
    </Section>
  );
}
