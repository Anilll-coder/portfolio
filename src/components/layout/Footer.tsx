import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-mono text-sm text-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-ink-faint">
            Software Development • AI/ML • Full-Stack
          </p>
        </div>

        <div className="flex items-center gap-5 font-mono text-xs text-ink-muted">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-sm transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <span className="text-border-strong">/</span>
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-sm transition-colors hover:text-accent"
          >
            LeetCode
          </a>
          <span className="text-border-strong">/</span>
          <a
            href={profile.links.nextwork}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring rounded-sm transition-colors hover:text-accent"
          >
            NextWork
          </a>
        </div>

        <p className="font-mono text-[11px] text-ink-faint">
          © {new Date().getFullYear()} — built by hand.
        </p>
      </div>
    </footer>
  );
}
