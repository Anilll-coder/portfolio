"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, GithubIcon, GlobeIcon } from "@/components/ui/Icons";
import { projects, type ProjectLink } from "@/data/projects";
import { CodeOrbitVisual } from "@/components/visuals/CodeOrbitVisual";
import { LawBotVisual, NextWorkVisual, ClickConnectVisual } from "@/components/visuals/ProjectVisuals";
import { fadeUp, viewportOnce } from "@/lib/motion";

const featured = projects.find((p) => p.size === "featured")!;
const medium = projects.filter((p) => p.size === "medium");

function VisualFor({ id, className }: { id: string; className?: string }) {
  if (id === "codeorbit") return <CodeOrbitVisual className={className} />;
  if (id === "lawbot") return <LawBotVisual className={className} />;
  if (id === "clickconnect") return <ClickConnectVisual className={className} />;
  return <NextWorkVisual className={className} />;
}

function ProjectLinkButton({ link }: { link: ProjectLink }) {
  const isLive = link.type === "live";
  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        isLive
          ? "focus-ring group inline-flex items-center gap-1.5 rounded-md bg-ink px-3.5 py-2 font-mono text-xs font-medium text-bg transition-colors duration-200 hover:bg-accent-strong"
          : "focus-ring group inline-flex items-center gap-1.5 rounded-md border border-border-strong px-3.5 py-2 font-mono text-xs font-medium text-ink transition-colors duration-200 hover:border-accent/60 hover:text-accent"
      }
    >
      {isLive ? <GlobeIcon size={13} /> : <GithubIcon size={13} />}
      {link.label}
      <ArrowUpRight
        size={12}
        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        index="03"
        eyebrow="Projects"
        title="Selected work"
        description="What I've built, and what I'm building now."
      />

      {/* Featured: CodeOrbit */}
      <motion.article
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="group relative overflow-hidden rounded-xl border border-border-strong bg-surface"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr]">
          <div className="flex flex-col justify-between p-8 sm:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="border-accent/40 text-accent">{featured.status}</Badge>
              </div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-1 font-mono text-sm text-accent">{featured.tagline}</p>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                {featured.description}
              </p>

              <ul className="mt-6 space-y-2.5">
                {featured.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {featured.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            {featured.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-6">
                {featured.links.map((link) => (
                  <ProjectLinkButton key={link.href} link={link} />
                ))}
              </div>
            )}
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center border-t border-border bg-bg p-8 lg:border-l lg:border-t-0">
            <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" />
            <VisualFor id={featured.id} className="relative h-full w-full max-w-md" />
          </div>
        </div>
      </motion.article>

      {/* Medium: LawBot + ClickConnect + NextWork */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {medium.map((project) => (
          <motion.article
            key={project.id}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong"
          >
            <div className="border-b border-border bg-bg p-6">
              <VisualFor id={project.id} className="h-40 w-full" />
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
                <Badge>{project.status}</Badge>
              </div>
              <p className="mt-1 font-mono text-xs text-accent">{project.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-ink-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                  {project.links.map((link) => (
                    <ProjectLinkButton key={link.href} link={link} />
                  ))}
                </div>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
