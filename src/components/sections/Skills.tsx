import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-white/[0.07]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <div className="mb-8 flex flex-col gap-4 ">
          <div>
            <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
              02 — Skills & Toolkit
            </p>

            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
              Alat yang saya andalkan.
            </h2>
          </div>

          <p className="max-w-xs text-[9px] md:text-xs leading-5 text-[var(--text-muted)]">
            Teknologi dipilih untuk kebutuhan produk, bukan sekadar tren.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="rounded-lg border border-white/[0.08] bg-[var(--surface)] p-4"
            >
              <span className="text-[var(--accent)]">
                {["▣", "▤", "♧", ">_"][index]}
              </span>

              <h3 className="mt-5 text-sm font-medium">{skill.title}</h3>

              <p className="mt-2 text-[9px] md:text-[10px] leading-5 text-[var(--text-muted)]">
                {skill.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-1">
                {skill.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded bg-white/[0.04] px-1.5 py-1 text-[7px] md:text-[9px] text-[var(--text-muted)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
