export type SkillIcon =
  | "frontend"
  | "architecture"
  | "backend"
  | "cloud"
  | "quality"
  | "ai";

export type SkillGroup = {
  category: string;
  items: string[];
  icon: SkillIcon;
};

export const skillsSubtitle =
  "Technologies and tools I work with across product development, architecture, delivery, and production.";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "frontend",
    items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Architecture",
    icon: "architecture",
    items: ["Micro-frontends", "Design Systems", "Web Components", "Monorepos", "Shared Libraries"],
  },
  {
    category: "Backend & APIs",
    icon: "backend",
    items: ["Node.js", "REST APIs", "GraphQL", "WebSockets", "MongoDB", "Python"],
  },
  {
    category: "Cloud & Delivery",
    icon: "cloud",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "CI/CD"],
  },
  {
    category: "Quality & Observability",
    icon: "quality",
    items: ["Jest", "Playwright", "React Testing Library", "Sentry", "Core Web Vitals"],
  },
  {
    category: "AI & Engineering Tools",
    icon: "ai",
    items: ["OpenAI APIs", "AI Agents", "Cursor", "GitHub Copilot", "Claude"],
  },
];

export const currentlyExploring = [
  {
    title: "AI Agents",
    text: "Tool use, structured outputs, orchestration, and production integration.",
  },
  {
    title: "Backend Engineering",
    text: "Node.js, Python/Django, APIs, and distributed-system fundamentals.",
  },
  {
    title: "Cloud Architecture",
    text: "AWS and scalable application architecture.",
  },
] as const;
