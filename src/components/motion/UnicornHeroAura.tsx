import { motion } from "framer-motion";

type UnicornHeroAuraProps = {
  active: boolean;
};

const STARDUST = [
  { x: "8%", y: "18%", size: 4, color: "#c4b5fd", delay: 0, duration: 5.5 },
  { x: "18%", y: "62%", size: 3, color: "#f9a8d4", delay: 0.8, duration: 6.2 },
  { x: "28%", y: "32%", size: 5, color: "#67e8f9", delay: 1.4, duration: 7 },
  { x: "72%", y: "24%", size: 4, color: "#a7f3d0", delay: 0.3, duration: 5.8 },
  { x: "84%", y: "58%", size: 3, color: "#c4b5fd", delay: 1.1, duration: 6.5 },
  { x: "92%", y: "38%", size: 4, color: "#f9a8d4", delay: 1.8, duration: 5.2 },
  { x: "42%", y: "12%", size: 3, color: "#67e8f9", delay: 2.2, duration: 6.8 },
  { x: "58%", y: "78%", size: 4, color: "#a7f3d0", delay: 0.5, duration: 7.2 },
  { x: "6%", y: "82%", size: 3, color: "#67e8f9", delay: 1.6, duration: 6 },
  { x: "48%", y: "88%", size: 5, color: "#c4b5fd", delay: 2.5, duration: 5.4 },
] as const;

const SPARKLES = [
  { x: "14%", y: "44%", delay: 0.2, duration: 4.8, scale: 0.55 },
  { x: "76%", y: "46%", delay: 1.3, duration: 5.6, scale: 0.65 },
  { x: "34%", y: "70%", delay: 0.9, duration: 4.2, scale: 0.5 },
  { x: "66%", y: "16%", delay: 2.1, duration: 5.1, scale: 0.6 },
  { x: "52%", y: "52%", delay: 1.7, duration: 6.3, scale: 0.45 },
] as const;

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 1.5 13.8 9.2 21.5 11 13.8 12.8 12 20.5 10.2 12.8 2.5 11 10.2 9.2 12 1.5Z" />
    </svg>
  );
}

export function UnicornHeroAura({ active }: UnicornHeroAuraProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-1/2 h-48 w-full -translate-y-1/2 opacity-70 md:h-56"
        fill="none"
      >
        <defs>
          <linearGradient id="mane-ribbon-a" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c4b5fd" stopOpacity="0" />
            <stop offset="25%" stopColor="#c4b5fd" stopOpacity="0.55" />
            <stop offset="50%" stopColor="#f9a8d4" stopOpacity="0.5" />
            <stop offset="75%" stopColor="#67e8f9" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="mane-ribbon-b" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#a7f3d0" stopOpacity="0" />
            <stop offset="30%" stopColor="#67e8f9" stopOpacity="0.4" />
            <stop offset="55%" stopColor="#f9a8d4" stopOpacity="0.35" />
            <stop offset="80%" stopColor="#c4b5fd" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0" />
          </linearGradient>
        </defs>

        <motion.path
          d="M -40 210 C 180 130, 320 250, 520 190 S 880 120, 1240 200"
          stroke="url(#mane-ribbon-a)"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            active
              ? {
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.55, 0.55, 0],
                  pathOffset: [0, 0, 0.15, 0.15],
                }
              : {}
          }
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.45, 0.55, 1],
          }}
        />

        <motion.path
          d="M -20 260 C 220 320, 420 180, 640 240 S 960 300, 1220 220"
          stroke="url(#mane-ribbon-b)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={
            active
              ? {
                  pathLength: [0, 1, 1, 0],
                  opacity: [0, 0.4, 0.4, 0],
                  pathOffset: [0.1, 0.1, 0.25, 0.25],
                }
              : {}
          }
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
            times: [0, 0.45, 0.55, 1],
          }}
        />
      </svg>

      {STARDUST.map((particle, index) => (
        <motion.span
          key={`dust-${index}`}
          className="absolute rounded-full blur-[0.5px]"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}55`,
          }}
          animate={
            active
              ? {
                  y: [0, -28, 0],
                  x: [0, index % 2 === 0 ? 6 : -6, 0],
                  opacity: [0.15, 0.75, 0.15],
                  scale: [1, 1.35, 1],
                }
              : {}
          }
          transition={{
            repeat: Infinity,
            duration: particle.duration,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {SPARKLES.map((sparkle, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute text-accent/50"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            transform: `scale(${sparkle.scale})`,
          }}
          animate={
            active
              ? {
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  opacity: [0.1, 0.7, 0.1],
                  scale: [sparkle.scale, sparkle.scale * 1.2, sparkle.scale],
                }
              : {}
          }
          transition={{
            repeat: Infinity,
            duration: sparkle.duration,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        >
          <SparkleIcon className="h-5 w-5" />
        </motion.div>
      ))}
    </div>
  );
}
