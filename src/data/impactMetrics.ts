export type ImpactMetric = {
  value: string;
  label: string;
};

export const impactMetrics: ImpactMetric[] = [
  { value: "70K+", label: "Customer accounts served" },
  { value: "33% ↓", label: "Real-time update latency" },
  { value: "~80% ↓", label: "Redundant WebSocket connections" },
  { value: "18% ↓", label: "Frontend bundle size" },
  { value: "28% ↑", label: "Rendering performance" },
  { value: "20% ↓", label: "L2 support tickets" },
];
