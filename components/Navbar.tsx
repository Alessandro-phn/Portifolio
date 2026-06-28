"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Sobre", href: "#sobre" },
  { label: "Jornada", href: "#jornada" },
  { label: "Projetos", href: "#projetos" },
  { label: "Competências", href: "#competencias" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#FFFFFF",
        borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent",
        transition: "border-color 0.3s",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          padding: "0 2rem",
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <a
          href="#home"
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            fontSize: "0.875rem",
            color: "var(--navy-dark)",
            letterSpacing: "-0.01em",
            textDecoration: "none",
          }}
        >
          Alessandro Pereira
        </a>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy-dark)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/cv-alessandro-pereira.pdf"
            download
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              color: "var(--navy-dark)",
              border: "1.5px solid var(--navy-dark)",
              borderRadius: 4,
              padding: "5px 14px",
              textDecoration: "none",
              letterSpacing: "0.03em",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--navy-dark)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--navy-dark)";
            }}
          >
            Download CV
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ color: "var(--navy-dark)", background: "none", border: "none", cursor: "pointer" }}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            background: "#fff",
            padding: "1.25rem 2rem 1.5rem",
          }}
          className="md:hidden"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-body)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {l.label}
              </a>
            ))}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
              <a
                href="/cv-alessandro-pereira.pdf"
                download
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--navy-dark)",
                  textDecoration: "none",
                }}
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
