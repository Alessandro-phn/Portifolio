"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Jornada", href: "#jornada" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Competências", href: "#competencias" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b border-slate-200 shadow-sm"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-14">
        <Link
          href="/"
          className="font-semibold text-slate-900 tracking-tight text-sm hover:text-blue-900 transition-colors"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Alessandro G. Pereira
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="/cv-alessandro-pereira.pdf"
            download
            className="hidden md:inline-flex items-center px-4 py-1.5 text-xs font-semibold border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-200 rounded"
          >
            Download CV
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-700"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-slate-700 hover:text-slate-900 font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-slate-100 pt-4">
              <a
                href="/cv-alessandro-pereira.pdf"
                download
                className="text-sm font-semibold text-slate-900"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
