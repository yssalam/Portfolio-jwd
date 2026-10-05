"use client";

import { ArrowUpRight } from "lucide-react";
import ProjectCard from "@/components/card/ProjectCard";
import ProjectModal from "@/components/card/ProjectModal";
import { profile, projects, type Project } from "@/data/portfolio";
import { useState } from "react";

export default function Project() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      className="border-b border-white/[0.07] bg-[#0e1012]"
    >
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-8">
          <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
            03 — Project pilihan
          </p>

          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                Ide menjadi sesuatu yang nyata.
              </h2>

              <p className="mt-3 max-w-xl text-[10px] md:text-xs leading-5 text-[var(--text-muted)]">
                Pilihan karya yang mempertemukan desain, teknologi, dan
                kebutuhan pengguna.
              </p>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[9px] md:text-xs text-[var(--text-secondary)] hover:text-white"
            >
              Explore GitHub
              <ArrowUpRight size={11} />
            </a>
          </div>
        </div>

        {/* <div className="mb-6 flex gap-2 overflow-x-auto">
          <button className="rounded bg-[var(--accent)] px-3 py-1.5 text-[8px] font-medium text-black">
            Semua
          </button>

          <button className="rounded border border-white/[0.08] px-3 py-1.5 text-[8px] text-[var(--text-muted)]">
            Web App
          </button>

          <button className="rounded border border-white/[0.08] px-3 py-1.5 text-[8px] text-[var(--text-muted)]">
            Website
          </button>
        </div> */}

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              onClick={() => setSelectedProject(project)}
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        <p className="mt-6 text-[8px] md:text-[9px] text-[var(--text-muted)]">
          + Selalu ada ide baru yang sedang dibangun.
        </p>
      </div>
    </section>
  );
}
