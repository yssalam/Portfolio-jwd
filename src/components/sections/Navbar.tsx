import { ArrowUpRight } from "lucide-react";
import logo from "@/images/logo.png";
export default function Navbar() {
  return (
    <header className="border-b border-white/[0.07]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a
          href="#"
          className="flex items-center gap-2 text-m font-medium tracking-tight"
        >
          <img
            src={logo}
            alt="yssalam.dev"
            className="h-7 w-7 object-contain"
          />

          <span>
            <span className="mr-1 text-[var(--accent)]">yssalam</span>
            .dev
          </span>
        </a>

        <nav className="hidden text-xs items-center gap-6 md:flex">
          <a
            href="#about"
            className=" text-[var(--text-secondary)] transition hover:text-white"
          >
            Tentang
          </a>

          <a
            href="#skills"
            className=" text-[var(--text-secondary)] transition hover:text-white"
          >
            Skills
          </a>

          <a
            href="#projects"
            className=" text-[var(--text-secondary)] transition hover:text-white"
          >
            Proyek
          </a>

          <a
            href="#experience"
            className=" text-[var(--text-secondary)] transition hover:text-white"
          >
            Pengalaman
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 rounded border border-white/[0.1] px-3 py-2  transition hover:border-[var(--accent)]"
          >
            Mari bicara
            <ArrowUpRight size={12} />
          </a>
        </nav>

        <button type="button" className="md:hidden" aria-label="Open menu">
          <span className="text-sm">☰</span>
        </button>
      </div>
    </header>
  );
}
