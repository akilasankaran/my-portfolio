export const noteCategories = [
  "APIs & Architecture",
  "Data & Databases",
  "Distributed Systems",
  "Performance & Reliability",
] as const;

export type NoteCategory = (typeof noteCategories)[number];

export type EngineeringNote = {
  title: string;
  description: string;
  categories: NoteCategory[];
  url?: string;
};

export const engineeringNotes: EngineeringNote[] = [
  {
    title: "Why Page 5,000 Freezes Your Database",
    description: "OFFSET vs keyset pagination and what happens as pagination gets deeper.",
    categories: ["Data & Databases", "Performance & Reliability"],
    url: "",
  },
  {
    title: "Kafka Writes to Disk. Why Is It Still Fast?",
    description: "Sequential writes, OS page cache, batching, and zero-copy.",
    categories: ["Distributed Systems"],
    url: "",
  },
  {
    title: "How Do You Shut Down a Server Without Killing Requests?",
    description:
      "Graceful shutdown, SIGTERM, load-balancer draining, health probes, and in-flight requests.",
    categories: ["Performance & Reliability"],
    url: "",
  },
  {
    title: "One Event. Five Actions. What Could Go Wrong?",
    description: "Synchronous coupling, Pub/Sub fan-out, and Saga orchestration.",
    categories: ["APIs & Architecture", "Distributed Systems"],
    url: "",
  },
  {
    title: 'The "Stateless JWT" Paradox',
    description: "Why token revocation complicates the idea of completely stateless authentication.",
    categories: ["APIs & Architecture"],
    url: "",
  },
  {
    title: "Delete 200M Rows Without Taking Production Down",
    description: "Batching, transaction logs, replica lag, throttling, and partitioning.",
    categories: ["Data & Databases", "Performance & Reliability"],
    url: "",
  },
];
