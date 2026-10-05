export default function About() {
  return (
    <section id="about" className="border-b border-white/[0.07]">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="mb-4 text-[9px] uppercase tracking-[0.2em] text-[var(--accent)]">
            01 — Tentang saya
          </p>

          <h2 className="max-w-md text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Bukan hanya berjalan.
            <br />
            Tapi bekerja dengan baik.
          </h2>
        </div>

        <div className="max-w-xl">
          <p className="text-xs md:text-sm leading-7 text-[var(--text-secondary)]">
            Saya percaya website yang baik ada di pertemuan antara desain yang
            jernih dan engineering yang solid.
          </p>

          <p className="mt-5 text-xs md:text-sm leading-6 text-[var(--text-secondary)]">
            Berbasis di Bandung, saya terbiasa membangun dan mengembangkan
            pengalaman web dari nol hingga siap digunakan. Fokus saya ada pada
            detail antarmuka, performa, dan kode yang mudah dikembangkan.
          </p>

          <p className="mt-5 flex items-center gap-2 text-[9px] md:text-[10px] text-[var(--accent)]">
            <span>✣</span>
            Saat ini: mengembangkan web yang lebih accessible.
          </p>
        </div>
      </div>
    </section>
  );
}
