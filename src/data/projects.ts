export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "realtime-ticket-mfe",
    title: "Real-Time Ticket Micro-Frontend",
    summary:
      "React and TypeScript micro-frontend with WebSockets and client-side state management. Supports live ticket updates, advanced filtering, and complex UI states, with 33% lower update latency across high-volume support workflows.",
    stack: ["React", "TypeScript", "WebSockets", "State Management", "Micro-frontends"],
    href: "#",
  },
  {
    slug: "device42-freshservice",
    title: "Device42 Integration (Freshservice)",
    summary:
      "Building the Device42 integration for Freshservice's Inventory Workflow Automator, connecting inventory data into automated IT asset management workflows for enterprise IT teams.",
    stack: ["React", "TypeScript", "REST APIs", "Node.js", "ITSM"],
    href: "#",
  },
  {
    slug: "ai-incident-resolution",
    title: "AI-Assisted Incident Resolution",
    summary:
      "Workflow integrating Sentry, OpenAI APIs, and GitHub automation to analyze production errors, reducing L2 support tickets by 20% and accelerating debugging and root-cause analysis.",
    stack: ["Sentry", "OpenAI", "GitHub Actions", "Node.js", "TypeScript"],
    href: "#",
  },
  {
    slug: "whatsapp-omnichannel",
    title: "WhatsApp Business API",
    summary:
      "Omnichannel integration for Freshdesk's support platform. Customers reach agents on WhatsApp, with a 12% improvement in ticket resolution efficiency within two months of launch.",
    stack: ["React", "TypeScript", "REST APIs", "Omnichannel"],
    href: "#",
  },
];
