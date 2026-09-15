export type StackGroup = {
  category: string;
  items: string[];
};

export const techStack: StackGroup[] = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TanStack Query", "Zustand", "Tailwind CSS"],
  },
  {
    category: "Architecture",
    items: ["Micro-frontends", "Monorepos", "Design Systems", "Web Components"],
  },
  {
    category: "Backend & Integration",
    items: ["REST APIs", "GraphQL", "WebSockets", "Node.js", "Python", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Jenkins", "CI/CD"],
  },
  {
    category: "Testing",
    items: ["Jest", "Playwright", "React Testing Library", "E2E"],
  },
  {
    category: "Performance & AI",
    items: ["Core Web Vitals", "Bundle Optimization", "Sentry", "Cursor", "Claude", "Copilot"],
  },
];
