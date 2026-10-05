import { ArrowDown } from "lucide-react";

import { stats } from "@/data/portfolio";

export default function Stats() {
  return (
    <section className="border-b border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl items-center justify-center md:justify-between px-5 py-7 sm:px-8 lg:px-10">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-xl font-medium tracking-tight sm:text-2xl">
                {stat.value}
                <span className="text-[var(--accent)]">+</span>
              </p>

              <p className="mt-1 text-[8px] uppercase tracking-wider text-[var(--text-muted)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-2 text-[8px] uppercase tracking-wider text-[var(--text-muted)] md:flex">
          Scroll untuk mengenal
          <ArrowDown size={11} />
        </div>
      </div>
    </section>
  );
}
