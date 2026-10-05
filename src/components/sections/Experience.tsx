import { experiences } from "@/data/portfolio";
export default function Experience() {
  return (
    <section id="experience" className="border-b border-white/[0.07]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
          05 — Pengalaman
        </p>

        <h2 className="mb-10 text-3xl font-medium tracking-tight sm:text-4xl">
          Belajar di setiap perjalanan.
        </h2>

        <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {experiences.map((experience) => (
            <article
              key={`${experience.period}-${experience.position}`}
              className="grid gap-4 py-6 sm:grid-cols-[110px_1fr_1.2fr] sm:items-start"
            >
              <p className="text-[8px] md:text-xs text-[var(--accent)] ">
                {experience.period}
              </p>

              <div>
                <h3 className="text-sm font-medium">{experience.position}</h3>

                <p className="mt-1 text-[8px] md:text-xs text-[var(--text-muted)]">
                  {experience.company}
                </p>

                <p className="mt-1 text-[8px] md:text-xs text-[var(--text-muted)]">
                  {experience.type}
                </p>
              </div>

              <p className="text-[9px] md:text-xs leading-5 text-[var(--text-muted)]">
                {experience.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
