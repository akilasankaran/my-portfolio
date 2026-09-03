export type WritingItem = {
  title: string;
  date: string;
  excerpt: string;
  tag: string;
  href: string;
  readingTime: string;
};

export const writing: WritingItem[] = [
  {
    title: "React micro-frontends inside legacy Ember",
    date: "2025",
    excerpt:
      "Incremental modernization with QLV using shared libraries, independent deploys, and real-time ticket workflows without a big-bang rewrite.",
    tag: "Architecture",
    href: "#work",
    readingTime: "Focus",
  },
  {
    title: "WebSocket efficiency at high traffic",
    date: "2024",
    excerpt:
      "Connection pooling and deduplication that cut redundant sockets ~80% and lowered memory and heartbeat overhead on busy support pages.",
    tag: "Performance",
    href: "#work",
    readingTime: "Focus",
  },
  {
    title: "Observability and automated incident response",
    date: "2025",
    excerpt:
      "Centralized Sentry across MFEs, webhook-driven RCA, and OpenAI-assisted draft PRs to shrink time-to-fix.",
    tag: "Reliability",
    href: "#work",
    readingTime: "Focus",
  },
  {
    title: "AI-assisted engineering on frontend teams",
    date: "2025",
    excerpt:
      "Cursor, Claude, and Copilot for debugging, refactoring, and reviews, adopted team-wide without replacing code ownership.",
    tag: "AI Tooling",
    href: "#about",
    readingTime: "Focus",
  },
];
