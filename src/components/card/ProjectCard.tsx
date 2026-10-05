import type { Project } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className="group overflow-hidden rounded-lg border border-white/[0.08] bg-[var(--surface)]"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#191d20]">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100 ">
          <span className="flex items-center gap-2 rounded-md bg-[var(--accent)] px-3 py-2 text-xs font-medium text-black cursor-pointer">
            Lihat detail
            <ArrowUpRight size={14} />
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between gap-3 text-[9px] uppercase tracking-wider text-[var(--text-muted)]">
          <span>{project.category}</span>
          <span>{project.date}</span>
        </div>

        <h3 className="text-lg font-medium tracking-tight text-[var(--text-primary)]">
          {project.title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[9px] text-[var(--text-muted)]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
