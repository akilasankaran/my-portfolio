import { useMemo, useState } from "react";
import type { EngineeringNote, NoteCategory } from "../../data/engineeringNotes";
import { noteCategories } from "../../data/engineeringNotes";

type NotesFilterProps = {
  notes: EngineeringNote[];
};

function cn(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function NotesFilter({ notes }: NotesFilterProps) {
  const [activeCategory, setActiveCategory] = useState<NoteCategory | "All">("All");

  const filteredNotes = useMemo(() => {
    if (activeCategory === "All") return notes;
    return notes.filter((note) => note.categories.includes(activeCategory));
  }, [activeCategory, notes]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter engineering notes by category">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === "All"}
          onClick={() => setActiveCategory("All")}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
            activeCategory === "All"
              ? "bg-accent-muted text-text-primary"
              : "text-text-tertiary hover:text-text-secondary",
          )}
        >
          All
        </button>
        {noteCategories.map((category) => (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-300",
              activeCategory === category
                ? "bg-accent-muted text-text-primary"
                : "text-text-tertiary hover:text-text-secondary",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredNotes.map((note) => {
          const content = (
            <>
              <h3 className="font-heading text-lg font-semibold text-text-primary">{note.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">{note.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md border border-border-default bg-bg-subtle px-2.5 py-1 font-mono text-xs text-text-tertiary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          );

          const cardClassName = "glass block rounded-xl p-6 transition-colors duration-300 hover:border-accent/25";

          if (note.linkedinUrl) {
            return (
              <a
                key={note.title}
                href={note.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClassName}
              >
                {content}
              </a>
            );
          }

          return (
            <article key={note.title} className={cardClassName}>
              {content}
            </article>
          );
        })}
      </div>
    </div>
  );
}
