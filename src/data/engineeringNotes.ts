export const engineeringNotesLabel = "Full-Stack Engineering";

export const engineeringNotesDescription =
  "Notes on APIs, databases, distributed systems, reliability, caching, messaging, backend architecture, and the engineering decisions behind scalable applications.";

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
  tags: string[];
  categories: NoteCategory[];
  linkedinUrl?: string;
};

export const engineeringNotes: EngineeringNote[] = [
  {
    title: "Why Page 5,000 Freezes Your Database",
    description: "OFFSET vs keyset pagination and what happens as pagination gets deeper.",
    tags: ["Databases", "Performance"],
    categories: ["Data & Databases", "Performance & Reliability"],
    linkedinUrl:
      "https://www.linkedin.com/posts/akila-sankaran_becomingfullstack-systemdesign-database-activity-7497275020637945856-mxqx",
  },
  {
    title: "Kafka Writes to Disk. Why Is It Still Fast?",
    description: "Sequential writes, OS page cache, batching, and zero-copy.",
    tags: ["Kafka", "Distributed Systems"],
    categories: ["Distributed Systems"],
    linkedinUrl:
      "https://www.linkedin.com/posts/akila-sankaran_becomingfullstack-kafka-backend-activity-7498576932972969984-rp1l",
  },
  {
    title: "How Do You Shut Down a Server Without Killing Requests?",
    description:
      "Graceful shutdown, SIGTERM, load-balancer draining, health probes, and in-flight requests.",
    tags: ["Backend", "Reliability"],
    categories: ["Performance & Reliability"],
    linkedinUrl:
      "https://www.linkedin.com/posts/akila-sankaran_becomingfullstack-backend-systemdesign-activity-7499071043102326784-N7Ao",
  },
  {
    title: "One Event. Five Actions. What Could Go Wrong?",
    description: "Synchronous coupling, Pub/Sub fan-out, and Saga orchestration.",
    tags: ["Event-Driven Architecture", "Distributed Systems"],
    categories: ["APIs & Architecture", "Distributed Systems"],
    linkedinUrl:
      "https://www.linkedin.com/posts/akila-sankaran_becomingfullstack-systemdesign-microservices-activity-7495761399684657152-AKHE",
  },
  {
    title: 'The "Stateless JWT" Paradox',
    description: "Why token revocation complicates the idea of completely stateless authentication.",
    tags: ["Authentication", "Security"],
    categories: ["APIs & Architecture"],
    linkedinUrl:
      "https://www.linkedin.com/posts/akila-sankaran_becomingfullstack-backend-systemdesign-activity-7495526834735013888-GgF7",
  },
  {
    title: "Delete 200M Rows Without Taking Production Down",
    description: "Batching, transaction logs, replica lag, throttling, and partitioning.",
    tags: ["Databases", "Reliability"],
    categories: ["Data & Databases", "Performance & Reliability"],
    linkedinUrl:
      "https://www.linkedin.com/posts/akila-sankaran_becomingfullstack-systemdesign-database-activity-7496795604421853185-aPRR",
  },
];
