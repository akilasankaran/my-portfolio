import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TypewriterRole } from "./TypewriterRole";

type HeroContentProps = {
  firstName: string;
  name: string;
  rolePhrases: readonly string[];
  resumeUrl: string;
};

export function HeroContent({ firstName, name, rolePhrases, resumeUrl }: HeroContentProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const initial = firstName.charAt(0).toUpperCase();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="group relative mb-8 cursor-default"
      >
        <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-violet-300/30 via-pink-300/20 to-cyan-300/30 opacity-70 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute -inset-3 rounded-full border border-violet-300/40"
        >
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(139,92,246,0.5)]" />
          <div className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-pink-400/70 shadow-[0_0_8px_rgba(236,72,153,0.4)]" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
          className="absolute -inset-6 rounded-full border border-border-default"
        >
          <div className="absolute right-0 top-1/2 h-1 w-1 translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/50" />
          <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/40" />
        </motion.div>

        <div className="relative z-10 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-2 border-border-default bg-white shadow-lg md:h-52 md:w-52">
          <span className="text-gradient text-4xl font-bold md:text-5xl">{initial}</span>
        </div>

        <div className="absolute bottom-1 right-1 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="h-3 w-3 rounded-full bg-success shadow-[0_0_12px_rgba(16,185,129,0.5)]"
          />
        </div>

        <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="glass whitespace-nowrap rounded-lg px-3 py-1.5 text-xs text-text-secondary">
            👋 That&apos;s me!
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="mb-6 text-center"
      >
        <h1 className="font-heading text-4xl font-extrabold leading-none tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I&apos;m <span className="text-gradient">{name}</span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <TypewriterRole phrases={rolePhrases} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
    </section>
  );
}
