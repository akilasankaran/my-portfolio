import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

type TypewriterRoleProps = {
  phrases: readonly string[];
};

export function TypewriterRole({ phrases }: TypewriterRoleProps) {
  const prefersReducedMotion = useReducedMotion();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(phrases[0] ?? "");
      return;
    }

    const current = phrases[phraseIndex] ?? "";
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && text === current) {
      const timeout = window.setTimeout(() => setIsDeleting(true), 2000);
      return () => window.clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = window.setTimeout(() => {
      setText((prev) => {
        if (isDeleting) return current.slice(0, prev.length - 1);
        return current.slice(0, prev.length + 1);
      });
    }, typingSpeed);

    return () => window.clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, prefersReducedMotion]);

  return (
    <div className="flex items-center justify-center gap-2 font-mono text-base text-text-secondary md:text-lg">
      <span className="text-accent">&gt;</span>
      <span>{text}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
        className="inline-block h-[1.2em] w-2.5 bg-accent"
      />
    </div>
  );
}
