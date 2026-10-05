import { process } from "@/data/portfolio";
export default function Process() {
  return (
    <section className="border-b border-white/[0.07]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10">
        <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
          04 — Cara saya bekerja
        </p>

        <h2 className="mb-10 max-w-xl text-3xl font-medium tracking-tight sm:text-4xl">
          Proses yang jelas. Hasil yang terukur.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {process.map((item) => (
            <article key={item.number}>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-[9px] md:text-xs text-[var(--accent)]">
                  {item.number}
                </span>

                <span className="text-xs md:text-sm text-[var(--text-muted)]">
                  ↗
                </span>
              </div>

              <h3 className="text-sm font-medium">{item.title}</h3>

              <p className="mt-3 text-[9px] md:text-xs leading-5 text-[var(--text-muted)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
