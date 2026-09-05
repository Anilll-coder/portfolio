export type SkillGroup = {
  id: string;
  label: string;
  description: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    description: "Core languages I write and think in",
    skills: ["Python", "Java", "C", "JavaScript", "TypeScript"],
  },
  {
    id: "ai-ml",
    label: "AI / ML",
    description: "Applied machine learning and AI-assisted engineering",
    skills: ["Machine Learning", "Artificial Intelligence", "LLMs", "Prompt Engineering", "AI-assisted Development"],
  },
  {
    id: "frontend",
    label: "Frontend",
    description: "Interfaces, from prototype to production",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    description: "APIs and services",
    skills: ["FastAPI", "Node.js"],
  },
  {
    id: "databases",
    label: "Databases",
    description: "Storage and data modeling",
    skills: ["SQL", "SQLite", "MongoDB", "Supabase"],
  },
  {
    id: "cloud-devops",
    label: "Cloud / DevOps",
    description: "Deployment and infrastructure",
    skills: ["AWS", "S3", "CloudFront", "Docker", "Git", "Linux"],
  },
  {
    id: "dev-tools",
    label: "Developer Tools",
    description: "Daily toolchain",
    skills: ["GitHub", "VS Code", "Jupyter Notebook", "Cursor", "Claude Code", "MCP"],
  },
];
