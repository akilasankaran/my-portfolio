import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    function handleMouseMove({ clientX, clientY }: MouseEvent) {
      mouseX.set(clientX);
      mouseY.set(clientY);
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 h-full w-full overflow-hidden bg-bg-base">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50/40 to-cyan-50/30 opacity-90" />
      <div className="bg-dot-pattern absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-100" />
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-violet-300/[0.08] blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-pulse rounded-full bg-pink-300/[0.07] blur-[100px] [animation-delay:2s]" />
      <div className="absolute left-1/2 top-3/4 h-[300px] w-[300px] animate-pulse rounded-full bg-sky-300/[0.07] blur-[80px] [animation-delay:4s]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg-base to-transparent" />
    </div>
  );
}
