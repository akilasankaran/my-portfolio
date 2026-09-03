export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  stack: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    company: "Freshworks",
    role: "Lead Software Engineer",
    period: "Jul 2025 to Present",
    location: "Hyderabad",
    current: true,
    summary:
      "Architected a real-time React and TypeScript micro-frontend with WebSockets and client-side state management for live ticket updates, advanced filtering, and 33% lower update latency. Building Device42 integration for Freshservice's Inventory Workflow Automator. Built AI-assisted incident resolution with Sentry, OpenAI, and GitHub automation (20% fewer L2 tickets). Delivered WhatsApp Business API for Freshdesk (12% resolution lift). Built backend APIs with Node.js, TypeScript, REST, and serverless AWS. Mentoring 5 engineers and driving micro-frontend modernization with design system adoption.",
    stack: ["React", "TypeScript", "WebSockets", "Node.js", "AWS", "Sentry", "OpenAI"],
  },
  {
    company: "Freshworks",
    role: "Senior Software Engineer",
    period: "Oct 2021 to Jun 2025",
    location: "Hyderabad",
    summary:
      "Optimized WebSocket connection management (~80% fewer redundant connections, 60–70% less socket overhead). Cut bundle size ~18% and improved render performance ~28%. Resolved 180+ production incidents quarterly with 94.5% SLA compliance. Migrated a 72k-line React class codebase to hooks and web components in Ember (~30% less maintenance). Architected a telephony marketplace for 400+ businesses (45% faster integration). Supported 25+ enterprise Freshchat SDK integrations with 17% higher engagement.",
    stack: ["React", "TypeScript", "WebSockets", "Next.js", "Web Components", "Jest", "axe"],
  },
  {
    company: "Freshworks",
    role: "Software Engineer",
    period: "Sep 2019 to Sep 2021",
    location: "Chennai",
    summary:
      "Built Average Handling Time analytics in Freshdesk tied to $12.25K MRR churn prevention. Improved Jenkins CI/CD (250+ linter fixes, ~7 min faster builds), raised test coverage from ~40% to 100% on critical modules, and delivered AWS Lambda + API Gateway lead ingestion for Freshsales partners.",
    stack: ["React", "JavaScript", "Jest", "Mocha", "Jenkins", "AWS Lambda"],
  },
  {
    company: "Freshworks",
    role: "Web Developer",
    period: "Jun 2017 to Aug 2019",
    location: "Chennai",
    summary:
      "Implemented hreflang across 18+ language variants for international SEO and migrated 1,000+ static marketing pages to Apostrophe CMS with Node.js and MongoDB, enabling 60+ stakeholders to manage content with ~80% less dev maintenance.",
    stack: ["Node.js", "MongoDB", "Apostrophe CMS", "SEO", "JavaScript"],
  },
];
