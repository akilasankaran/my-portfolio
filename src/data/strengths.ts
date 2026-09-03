export type StrengthCategory = {
  category: string;
  description: string;
  items: { name: string; evidence: string }[];
};

export const strengths: StrengthCategory[] = [
  {
    category: "Frontend",
    description: "Product UI at scale across support, field service, and integrations.",
    items: [
      { name: "React & Next.js", evidence: "QLV, FSM dashboards, enterprise Freshchat SDK work" },
      { name: "TypeScript", evidence: "Large React codebases, monorepos, and shared libraries" },
      { name: "Tailwind & CSS", evidence: "Design system components and consistent product UI" },
    ],
  },
  {
    category: "Architecture",
    description: "Incremental modernization without stopping the product line.",
    items: [
      { name: "Micro-frontends", evidence: "React MFEs embedded in legacy Ember with independent deploys" },
      { name: "Monorepos & design systems", evidence: "Shared components across product areas and teams" },
      { name: "Web Components", evidence: "72k-line React migration shipped into Ember shell" },
    ],
  },
  {
    category: "Performance & observability",
    description: "Speed and reliability measured in production, not slides.",
    items: [
      { name: "Bundle optimization", evidence: "~18% (~350 KB gzipped) reduction with lazy loading" },
      { name: "WebSockets", evidence: "Real-time tickets; ~80% fewer redundant connections" },
      { name: "Sentry", evidence: "Cross-MFE monitoring; 20% fewer L2 tickets" },
    ],
  },
  {
    category: "Platform, testing & AI",
    description: "Ship confidently with automation and modern tooling.",
    items: [
      { name: "Testing", evidence: "Jest, Playwright, RTL with coverage from ~40% to 100% on critical modules" },
      { name: "CI/CD", evidence: "Jenkins and GitHub Actions for faster builds and linter hygiene" },
      { name: "AI-assisted engineering", evidence: "Cursor, Claude, Copilot, OpenAI for RCA and PR automation" },
    ],
  },
];
