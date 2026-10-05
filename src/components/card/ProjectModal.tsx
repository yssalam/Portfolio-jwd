import { X, ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-white/[0.08] bg-[var(--surface)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-black/50 text-white transition hover:bg-white/10"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7">
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
            <span>{project.category}</span>
            <span>{project.date}</span>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h2 className="text-2xl font-medium tracking-tight text-[var(--text-primary)] sm:text-3xl">
                {project.title}
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)]">
                {project.description}
              </p>
            </div>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex shrink-0 items-center gap-2 rounded-md bg-[var(--accent)] px-4 py-2.5 text-xs font-medium text-black transition hover:opacity-90"
              >
                Visit project
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>

          {/* Technologies */}
          <div className="mt-6">
            <p className="mb-2 text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
              Technologies
            </p>

            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded border border-white/[0.07] bg-white/[0.02] px-2.5 py-1.5 text-[9px] text-[var(--text-muted)]"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
