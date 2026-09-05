// Data pulled from the GitHub REST API (api.github.com/users/Anilll-coder/repos).
// No stats are fabricated — stars/forks reflect the API response at time of writing.
// To refresh, re-fetch the API and update this file; the section is intentionally
// data-driven so it can be updated without touching component code.

export type GithubRepo = {
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
  url: string;
  homepage?: string | null;
  focus: "AI/ML" | "Full-Stack" | "Systems" | "Developer Tools" | "Web";
};

export const selectedRepos: GithubRepo[] = [
  {
    name: "hermes_agent",
    description: "AI agent project exploring autonomous task execution.",
    language: "HTML",
    stars: 0,
    forks: 0,
    updatedAt: "2026-08-28",
    url: "https://github.com/Anilll-coder/hermes_agent",
    focus: "AI/ML",
  },
  {
    name: "hermes-mcp-test",
    description: "Sandbox repo for MCP (Model Context Protocol) testing.",
    language: null,
    stars: 0,
    forks: 0,
    updatedAt: "2026-08-30",
    url: "https://github.com/Anilll-coder/hermes-mcp-test",
    focus: "Developer Tools",
  },
  {
    name: "Blog_writing_crew",
    description: "Multi-step AI workflow for automated blog content generation.",
    language: null,
    stars: 0,
    forks: 0,
    updatedAt: "2026-08-27",
    url: "https://github.com/Anilll-coder/Blog_writing_crew",
    focus: "AI/ML",
  },
  {
    name: "basic-e-commerce",
    description: "Full-stack e-commerce application.",
    language: "TypeScript",
    stars: 0,
    forks: 0,
    updatedAt: "2026-08-25",
    url: "https://github.com/Anilll-coder/basic-e-commerce",
    homepage: "https://basic-e-commerce-steel.vercel.app",
    focus: "Full-Stack",
  },
  {
    name: "CAP_Distributed_Systems",
    description: "Exploration of the CAP theorem in distributed systems.",
    language: "Python",
    stars: 0,
    forks: 0,
    updatedAt: "2026-08-16",
    url: "https://github.com/Anilll-coder/CAP_Distributed_Systems",
    focus: "Systems",
  },
  {
    name: "Udaan",
    description: "Game built for rural child education.",
    language: "JavaScript",
    stars: 0,
    forks: 0,
    updatedAt: "2026-03-22",
    url: "https://github.com/Anilll-coder/Udaan",
    homepage: "https://udaan-three.vercel.app",
    focus: "Full-Stack",
  },
];

export const githubProfile = {
  username: "Anilll-coder",
  url: "https://github.com/Anilll-coder",
};
