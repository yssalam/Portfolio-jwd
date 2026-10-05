import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="border-b border-white/[0.07]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_320px]">
          {/* Text */}
          <div>
            <div className="mb-5 flex items-center gap-2 text-[9px] uppercase tracking-[0.18em] text-[var(--accent)]">
              <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
              Terbuka untuk kolaborasi
            </div>

            <p className="mb-2 text-xs text-[var(--text-secondary)]">
              Halo, saya {profile.name}.
            </p>

            <h1 className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Kode yang rapi.
              <br />
              Pengalaman
              <br />
              yang berarti.
            </h1>

            <p className="mt-6 max-w-xl text-xs leading-6 text-[var(--text-secondary)] sm:text-sm">
              Web developer yang mengubah ide menjadi produk digital yang cepat,
              aksesibel, dan nyaman digunakan.
            </p>

            <div className="mt-7 text-[10px] md:text-sm flex flex-wrap gap-2">
              <a
                href="#projects"
                className="flex items-center gap-2 rounded bg-[var(--accent)] px-4 py-2.5  font-medium text-black transition hover:brightness-95"
              >
                Lihat proyek
                <ArrowUpRight size={13} />
              </a>

              <a
                href="/cv.pdf"
                download="Yoga-Subhi-Salam-CV.pdf"
                className="flex items-center gap-2 rounded border border-white/[0.1] px-4 py-2.5  text-white transition hover:border-white/30"
              >
                Unduh CV
                <ArrowDown size={13} />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2 text-[10px] text-[var(--text-muted)]">
              <MapPin size={11} />
              {profile.location}
              <span>•</span>
              Terbuka untuk remote
            </div>
          </div>

          {/* Profile */}
          <div className="mx-auto w-full max-w-[320px] lg:mx-0 lg:ml-auto">
            <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-[var(--surface)]">
              <div className="aspect-[4/5] bg-[#171a1d]">
                <img
                  src="src/images/profile.png"
                  alt={profile.name}
                  className="h-full w-full object-cover grayscale"
                />
              </div>

              <div className="absolute inset-x-3 bottom-3 rounded border border-white/[0.08] bg-black/60 p-3 backdrop-blur-md">
                <p className="text-sm font-medium">{profile.role}</p>

                <p className="mt-1 text-[9px] text-[var(--text-muted)]">
                  React · TypeScript · Fullstack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
