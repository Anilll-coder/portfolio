export type ProjectLink = { label: string; href: string; type: "live" | "github" };

export type Project = {
  id: string;
  title: string;
  tagline: string;
  status: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
  size: "featured" | "medium";
  visual: "codeorbit" | "lawbot" | "nextwork" | "clickconnect";
};

export const projects: Project[] = [
  {
    id: "codeorbit",
    title: "CodeOrbit",
    tagline: "AI-Powered Codebase Intelligence",
    status: "Major Project — Currently Building",
    description:
      "CodeOrbit is my major project, built to help developers understand large and complex software repositories. It analyzes a codebase and constructs a structured map of how files, classes, functions, imports, dependencies, APIs, and modules relate to one another — turning an unfamiliar repository into something navigable.",
    highlights: [
      "Codebase intelligence & dependency analysis",
      "Code graphs across files, functions, and modules",
      "Impact / blast-radius analysis for proposed changes",
      "AI-assisted code review with bug and risk identification",
      "Patch generation with automated verification",
    ],
    tech: ["Python", "AI / LLMs", "Code Graphs", "FastAPI", "AST Analysis"],
    links: [],
    size: "featured",
    visual: "codeorbit",
  },
  {
    id: "lawbot",
    title: "LawBot",
    tagline: "AI Legal Information Application",
    status: "Project",
    description:
      "An AI-powered legal information application pairing a client-facing chat experience with a lawyer-oriented workflow. Legal source material is retrieved with vector search so responses stay grounded in relevant context rather than open-ended generation. LawBot surfaces legal information — it is not a substitute for professional legal advice.",
    highlights: [
      "Client-facing conversational interface",
      "Lawyer-oriented workflow tooling",
      "Vector search over legal information sources",
      "Context-aware, retrieval-grounded responses",
    ],
    tech: ["Next.js", "React", "JavaScript", "Vector Search", "AI / LLMs", "Docker"],
    links: [
      { label: "Live Demo", href: "https://lawbot-kqqb.onrender.com", type: "live" },
      { label: "GitHub", href: "https://github.com/Anilll-coder/LawBot", type: "github" },
    ],
    size: "medium",
    visual: "lawbot",
  },
  {
    id: "clickconnect",
    title: "ClickConnect",
    tagline: "Social Feed & Community App",
    status: "Project",
    description:
      "A social media web app for sharing posts and connecting with a community. Alongside a public feed with likes, comments, and shares, it supports anonymous posting, saved posts, and a built-in AI chatbot on top of the usual notifications, search, and profile tooling.",
    highlights: [
      "Public feed with likes, comments & shares",
      "Anonymous posting mode",
      "Saved posts & personal post history",
      "Built-in AI chatbot",
      "Search across people and posts",
    ],
    tech: ["JavaScript", "Python", "AI Chatbot", "Docker"],
    links: [
      { label: "Live Demo", href: "https://click-connect-1.onrender.com", type: "live" },
      { label: "GitHub", href: "https://github.com/Anilll-coder/click_connect", type: "github" },
    ],
    size: "medium",
    visual: "clickconnect",
  },
  {
    id: "nextwork",
    title: "AI & Cloud Projects",
    tagline: "Hands-on builds — NextWork",
    status: "Ongoing — Collection",
    description:
      "A running collection of hands-on projects covering AI-assisted development and cloud infrastructure — deploying static and dynamic apps with AWS S3 and CloudFront, working with Supabase and MCP, and building with AI pair-programming tools like Cursor and Claude Code. Presented as a body of practice rather than a single application.",
    highlights: [
      "AWS S3 & CloudFront deployments",
      "Supabase-backed data workflows",
      "AI-assisted development with Cursor & Claude Code",
      "Model Context Protocol (MCP) experimentation",
    ],
    tech: ["AWS", "S3", "CloudFront", "Cursor", "Claude Code", "Supabase", "MCP"],
    links: [
      {
        label: "View Portfolio",
        href: "https://nextwork.ai/portfolio/lighthearted_brown_festive_penguin",
        type: "live",
      },
    ],
    size: "medium",
    visual: "nextwork",
  },
];
