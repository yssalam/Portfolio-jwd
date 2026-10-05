import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1fr_360px] lg:px-10">
        <div>
          <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
            06 / Mari berkolaborasi
          </p>

          <h2 className="max-w-lg text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            Punya ide?
            <br />
            Mari kita bangun.
          </h2>

          <p className="mt-5 max-w-md text-[10px] leading-5 text-[var(--text-secondary)]">
            Ceritakan proyek Anda. Kita mulai dari percakapan sederhana.
          </p>
        </div>

        <div className="lg:self-end">
          <p className="text-[8px] md:text-[10px] uppercase tracking-[0.15em] text-[var(--accent)]">
            Terbuka untuk proyek baru
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-4 flex items-center gap-2 text-lg tracking-tight transition hover:text-[var(--accent)]"
          >
            {profile.email}
            <ArrowUpRight size={15} />
          </a>

          <div className="mt-5 flex gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[8px] md:text-xs text-[var(--text-muted)] hover:text-white"
            >
              <FaGithub size={11} />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-[8px] md:text-xs text-[var(--text-muted)] hover:text-white"
            >
              <FaLinkedin size={11} />
              LinkedIn
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1 text-[8px] md:text-xs text-[var(--text-muted)] hover:text-white"
            >
              <Mail size={11} />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
