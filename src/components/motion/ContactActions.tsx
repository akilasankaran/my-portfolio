import { useState } from "react";

type ContactActionsProps = {
  email: string;
};

const secondaryButtonClassName =
  "glass inline-flex items-center gap-2 rounded-full border border-border-default px-4 py-2.5 text-sm font-medium text-text-secondary transition-all duration-300 hover:border-accent/30 hover:text-accent";

export function ContactActions({ email }: ContactActionsProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <div className="mt-8 flex flex-wrap items-center gap-4">
      <a
        href={`mailto:${email}`}
        className="btn-gradient group relative inline-flex overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.98]"
      >
        <span className="relative z-10">Get in touch</span>
        <div className="absolute inset-0 translate-y-full bg-white/30 transition-transform duration-300 ease-out group-hover:translate-y-0" />
      </a>

      <button
        type="button"
        onClick={copyEmail}
        aria-label={copied ? "Email copied" : "Copy email address"}
        className={secondaryButtonClassName}
      >
        {copied ? (
          <svg className="h-4 w-4 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        )}
        <span>{copied ? "Email copied" : "Copy email"}</span>
      </button>
    </div>
  );
}
