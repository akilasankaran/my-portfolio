export type WorkProject = {
  title: string;
  context: string;
  challenge: string;
  built: string;
  stack: string[];
  impact?: string | string[];
};

export const workProjects: WorkProject[] = [
  {
    title: "Real-Time Ticketing",
    context: "Freshworks · Enterprise Production System",
    challenge:
      "Keep ticket updates synchronized for support agents without requiring constant refreshes.",
    built:
      "Architected a real-time React micro-frontend with WebSocket-powered updates, advanced filtering, and complex UI-state handling.",
    stack: ["React", "TypeScript", "WebSockets", "Micro-frontends"],
    impact: "33% lower update latency",
  },
  {
    title: "Device42 × Freshservice",
    context: "Freshworks · Enterprise Integration · In Development",
    challenge: "",
    built:
      "Building the Device42 integration for Freshservice's Inventory Workflow Automator, bringing inventory data into automated IT asset-management workflows.",
    stack: ["Freshservice", "Device42", "Workflow Automation", "APIs"],
  },
  {
    title: "AI-Assisted Incident Resolution",
    context: "Freshworks · Production Automation",
    challenge:
      "Production incidents required repetitive investigation and significant L2 engineering effort.",
    built:
      "Created an AI-assisted workflow connecting Sentry, OpenAI APIs, and GitHub automation to accelerate incident analysis and remediation.",
    stack: ["OpenAI APIs", "Sentry", "GitHub Automation"],
    impact: "20% fewer L2 support tickets",
  },
  {
    title: "Telephony Integration Platform",
    context: "Freshworks · Enterprise Integration Platform",
    challenge: "",
    built:
      "Architected and scaled a shared marketplace experience integrating five telephony providers and supporting 400+ businesses.",
    stack: ["React", "APIs", "Integrations", "Platform Engineering"],
    impact: "45% lower integration time",
  },
  {
    title: "Cross-Tab WebSocket Architecture",
    context: "Freshworks · Production Architecture",
    challenge:
      "Multiple browser tabs created redundant socket connections and unnecessary heartbeat and memory overhead.",
    built:
      "Optimized WebSocket connection management to reuse connections across tabs and reduce redundant real-time infrastructure.",
    stack: ["WebSockets", "Browser APIs", "Performance"],
    impact: ["~80% fewer redundant connections", "60-70% lower socket-related overhead"],
  },
  {
    title: "Legacy React Modernization",
    context: "Freshworks · Enterprise Production System",
    challenge:
      "Modernize a 72K-line legacy React module while keeping it compatible with an existing Ember application.",
    built:
      "Migrated the legacy class-component application toward modular functional components and packaged it as a Web Component for integration with Ember.",
    stack: ["React", "Web Components", "Ember", "Frontend Architecture"],
    impact: "~30% lower maintenance effort",
  },
];
