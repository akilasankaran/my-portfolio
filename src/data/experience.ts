export type ExperienceRole = {
  role: string;
  period: string;
  areas: string;
  current?: boolean;
};

export const experienceCompany = "Freshworks";

export const experienceRoles: ExperienceRole[] = [
  {
    role: "Lead Software Engineer",
    period: "Jul 2025 – Present",
    areas:
      "Frontend Architecture · Freshservice · Workflow Automation · Enterprise Integrations · Technical Leadership",
    current: true,
  },
  {
    role: "Senior Software Engineer",
    period: "Oct 2021 – Jun 2025",
    areas: "Real-Time Systems · Platform Modernization · Performance · Marketplace Integrations",
  },
  {
    role: "Software Engineer",
    period: "Sep 2019 – Sep 2021",
    areas: "Analytics · Authentication · Testing · Serverless Integrations",
  },
  {
    role: "Web Developer",
    period: "Jun 2017 – Aug 2019",
    areas: "Web Platforms · CMS · Internationalization",
  },
];
