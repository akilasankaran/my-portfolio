import { FadeIn } from "./FadeIn";
import type { ReactNode } from "react";

type HeroMotionProps = {
  children: ReactNode;
};

export function HeroMotion({ children }: HeroMotionProps) {
  return <FadeIn direction="up">{children}</FadeIn>;
}

export function HeroMetricsMotion({ children }: HeroMotionProps) {
  return (
    <FadeIn direction="up" delay={0.12}>
      {children}
    </FadeIn>
  );
}
