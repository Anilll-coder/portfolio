"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, GithubIcon, StarIcon, ForkIcon } from "@/components/ui/Icons";
import { selectedRepos, githubProfile } from "@/data/github";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

const dateFormatter = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" });

export function GithubSection() {
  return (
    <Section id="github">
      <div className="mb-14 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          index="04"
          eyebrow="Open Source"
          title="Selected GitHub projects"
          description="Pulled from my public repositories — no fabricated stats, just what's actually there."
        />
        <Button
          href={githubProfile.url}
          variant="secondary"
          icon={<ArrowUpRight size={14} />}
          className="shrink-0"
        >
          <GithubIcon size={16} />
          @{githubProfile.username}
        </Button>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={staggerContainer(0.06)}
        className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {selectedRepos.map((repo) => (
          <motion.div key={repo.name} variants={staggerItem}>
            <Link
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group flex h-full flex-col bg-bg p-6 transition-colors duration-300 hover:bg-surface"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-mono text-sm font-medium text-ink group-hover:text-accent">
                  {repo.name}
                </h3>
                <ArrowUpRight size={14} className="shrink-0 text-ink-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
                {repo.description ?? "No description provided."}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] text-ink-faint">
                {repo.language && (
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-accent/70" />
                    {repo.language}
                  </span>
                )}
                <span className="flex items-center gap-1">
                  <StarIcon size={12} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <ForkIcon size={12} /> {repo.forks}
                </span>
                <span>{dateFormatter.format(new Date(repo.updatedAt))}</span>
              </div>

              <div className="mt-3">
                <Badge className="text-[10px]">{repo.focus}</Badge>
              </div>
            </Link>
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
        Star and fork counts reflect the public GitHub API at time of writing.
      </motion.p>
    </Section>
  );
}
