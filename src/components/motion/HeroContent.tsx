import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import { SocialIconLinks } from "./SocialIconLinks";

type HeroContentProps = {
  greeting: string;
  name: string;
  headline: string;
  intro: string;
  locationLine: string;
  ctaLabel: string;
  email: string;
  resumeUrl: string;
  linkedin: string;
  github: string;
};

function renderIntro(intro: string) {
  const parts = intro.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-text-primary">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

export function HeroContent({
  greeting,
  name,
  headline,
  intro,
  locationLine,
  ctaLabel,
  email,
  resumeUrl,
  linkedin,
  github,
}: HeroContentProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true });
  const staticPositioning = `${greeting} ${name}. ${headline}. ${intro.replace(/\*\*/g, "")} ${locationLine}`;

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center px-4 py-24"
    >
      <div className="relative z-10 w-full max-w-3xl">
        <p className="sr-only">{staticPositioning}</p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mb-3 text-lg text-text-secondary md:text-xl"
        >
          {greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl"
        >
          <span className="text-gradient">{name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-heading text-xl font-semibold text-text-primary sm:text-2xl"
        >
          {headline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-base leading-relaxed text-text-secondary md:text-lg"
        >
          {renderIntro(intro)}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 font-mono text-sm text-text-tertiary"
        >
          {locationLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center"
        >
          <a
            href="#work"
            className="btn-gradient group relative inline-flex overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]"
          >
            <span className="relative z-10 flex items-center gap-2">
              {ctaLabel}
              <svg className="h-4 w-4 transition-transform group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
            <div className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />
          </a>

          <SocialIconLinks email={email} resumeUrl={resumeUrl} linkedin={linkedin} github={github} />
        </motion.div>
      </div>
    </section>
  );
}
