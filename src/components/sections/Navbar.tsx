"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

import logo from "@/images/logo.png";

const menus = [
  { label: "Tentang", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Proyek", href: "#projects" },
  { label: "Pengalaman", href: "#experience" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-[1000] border-b border-white/[0.07] bg-[#101416]/50 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <a
          href="#"
          onClick={closeMenu}
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

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-xs md:flex">
          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              className="text-[var(--text-secondary)] transition hover:text-white"
            >
              {menu.label}
            </a>
          ))}

          <a
            href="#contact"
            className="flex items-center gap-2 rounded border border-white/[0.1] px-3 py-2 transition hover:border-[var(--accent)]"
          >
            Mari bicara
            <ArrowUpRight size={12} />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md p-2 text-[var(--text-primary)] transition hover:bg-white/[0.05] md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Backdrop */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[999] flex h-dvh w-72 max-w-[85vw] flex-col border-l border-white/[0.08] bg-[#101416] p-5 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between">
          <a
            href="#"
            onClick={closeMenu}
            className="flex items-center gap-2 text-sm font-medium tracking-tight"
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

          <button
            type="button"
            onClick={closeMenu}
            className="rounded-md p-2 text-[var(--text-primary)] transition hover:bg-white/[0.05]"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="mt-12 flex flex-col gap-2">
          {menus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              onClick={closeMenu}
              className="rounded-md px-3 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-white/[0.04] hover:text-white"
            >
              {menu.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 flex items-center justify-center gap-2 rounded border border-white/[0.1] px-4 py-3 text-sm transition hover:border-[var(--accent)]"
          >
            Mari bicara
            <ArrowUpRight size={14} />
          </a>
        </nav>
      </aside>
    </header>
  );
}
