import { profile } from "@/data/portfolio";
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-[8px] md:text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <a href="#" className="hover:text-white">
          Kembali ke atas ↑
        </a>
        <p>© 2026 {profile.proname}.</p>
      </div>
    </footer>
  );
}
