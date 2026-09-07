import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TypewriterRole } from "./TypewriterRole";
import { UnicornHeroAura } from "./UnicornHeroAura";

type HeroContentProps = {
  name: string;
  rolePhrases: readonly string[];
  resumeUrl: string;
};

export function HeroContent({ name, rolePhrases, resumeUrl }: HeroContentProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <UnicornHeroAura active={isInView} />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-center"
        >
          <h1 className="font-heading text-4xl font-extrabold leading-none tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">{name}</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <TypewriterRole phrases={rolePhrases} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="btn-gradient group relative overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              See my work
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass group flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-accent/30 hover:text-text-primary"
          >
            <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
