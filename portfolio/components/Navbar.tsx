"use client";
import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Resultados", href: "#resultados" },
  { label: "Projetos", href: "#projetos" },
  { label: "Competências", href: "#competencias" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-gold-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Monogram */}
        <Link href="/" className="monogram text-xl tracking-tight hover:opacity-80 transition-opacity">
          AGP
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="animated-underline text-xs font-medium tracking-widest uppercase text-navy-100/70 hover:text-gold-400 transition-colors duration-200 dark:text-navy-100/70"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-gold-500/20 flex items-center justify-center text-gold-400 hover:bg-gold-500/10 transition-all duration-200"
            aria-label="Alternar tema"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          {/* CV button */}
          <a
            href="/cv-alessandro-pereira.pdf"
            download
            className="hidden md:flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-900 transition-all duration-300 rounded-sm"
          >
            CV
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-navy-100"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-gold-500/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-navy-100/70 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="gold-divider mt-2" />
            <a
              href="/cv-alessandro-pereira.pdf"
              download
              className="text-sm font-semibold text-gold-400"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
