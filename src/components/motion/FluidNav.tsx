import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { site } from "../../data/site";

type AnchorNavItem = {
  type: "anchor";
  id: string;
  label: string;
};

type ExternalNavItem = {
  type: "external";
  href: string;
  label: string;
};

type NavItem = AnchorNavItem | ExternalNavItem;

const navItems: NavItem[] = [
  { type: "anchor", id: "hero", label: "Home" },
  { type: "anchor", id: "work", label: "Work" },
  { type: "anchor", id: "notes", label: "Notes" },
  { type: "anchor", id: "experience", label: "Experience" },
  { type: "anchor", id: "about", label: "About" },
  { type: "external", href: site.resumeUrl, label: "Resume" },
  { type: "anchor", id: "contact", label: "Contact" },
];

const anchorSections = navItems.filter(
  (item): item is AnchorNavItem => item.type === "anchor",
);

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function FluidNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = anchorSections.length - 1; i >= 0; i--) {
        const el = document.getElementById(anchorSections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(anchorSections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const renderDesktopNavItem = (item: NavItem) => {
    if (item.type === "external") {
      return (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium text-text-tertiary transition-colors duration-300 hover:text-text-secondary md:px-4"
        >
          {item.label}
        </a>
      );
    }

    const isActive = activeSection === item.id;
    return (
      <button
        key={item.id}
        type="button"
        onClick={() => scrollToSection(item.id)}
        className={cn(
          "relative cursor-pointer rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-300 md:px-4",
          isActive ? "text-text-primary" : "text-text-tertiary hover:text-text-secondary",
        )}
      >
        {isActive && (
          <motion.div
            layoutId="nav-pill"
            className="absolute inset-0 rounded-full bg-accent-muted"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        {isActive && (
          <motion.div
            layoutId="nav-glow"
            className="absolute inset-0 -z-10 rounded-full bg-accent/10 blur-md"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        <span className="relative z-10">{item.label}</span>
      </button>
    );
  };

  const renderMobileNavItem = (item: NavItem, index: number) => {
    if (item.type === "external") {
      return (
        <motion.a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="font-heading text-4xl font-bold tracking-tight text-text-primary transition-colors duration-300 hover:text-accent/80 sm:text-5xl"
        >
          {item.label}
        </motion.a>
      );
    }

    const isActive = activeSection === item.id;
    return (
      <motion.button
        key={item.id}
        type="button"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={() => scrollToSection(item.id)}
        className={cn(
          "font-heading text-4xl font-bold tracking-tight transition-colors duration-300 sm:text-5xl",
          isActive ? "text-accent" : "text-text-primary hover:text-accent/80",
        )}
      >
        {item.label}
      </motion.button>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "pointer-events-none fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all duration-500 md:px-8",
          scrolled ? "py-3" : "py-5",
        )}
      >
        <div className="pointer-events-auto z-50">
          <button
            type="button"
            onClick={() => scrollToSection("hero")}
            className="cursor-pointer text-left font-heading text-sm font-bold leading-tight tracking-tight text-text-primary transition-colors duration-300 hover:text-accent sm:text-base md:text-lg"
          >
            {site.name}
          </button>
        </div>

        <div className="pointer-events-auto z-50 md:hidden">
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="glass rounded-full p-2.5 text-text-secondary shadow-sm transition-all duration-300 hover:text-accent"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        <div className="glass pointer-events-auto hidden items-center gap-0.5 rounded-full px-1.5 py-1.5 md:flex">
          {navItems.map((item) => renderDesktopNavItem(item))}

          <div className="mx-1 h-5 w-px bg-border-default" />

          <div className="flex items-center gap-0.5">
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-1.5 text-text-tertiary transition-all duration-300 hover:bg-bg-subtle hover:text-accent"
              aria-label="LinkedIn"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full p-1.5 text-text-tertiary transition-all duration-300 hover:bg-bg-subtle hover:text-accent"
              aria-label="Email"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-1.5 text-text-tertiary transition-all duration-300 hover:bg-bg-subtle hover:text-accent"
              aria-label="Resume"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-auto fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/90 backdrop-blur-2xl"
          >
            <div className="flex w-full flex-col items-center gap-6 px-6 sm:gap-8">
              {navItems.map((item, index) => renderMobileNavItem(item, index))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
