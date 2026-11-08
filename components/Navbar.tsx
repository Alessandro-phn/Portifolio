"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const en = language === "en";
  const links = [
    { label: en ? "About" : "Sobre", href: "#sobre" },
    { label: en ? "Experience" : "Experiência", href: "#jornada" },
    { label: en ? "Projects" : "Projetos", href: "#projetos" },
    { label: en ? "Skills" : "Competências", href: "#competencias" },
    { label: en ? "Education" : "Formação", href: "#formacao" },
    { label: en ? "Contact" : "Contato", href: "#contato" },
  ];
  const resumeHref = en
    ? "/Alessandro_Guimaraes_Pereira_Resume_EN.pdf"
    : "/Alessandro_Guimaraes_Pereira_CV.pdf";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const languageButton = (
    <button
      type="button"
      onClick={() => setLanguage(en ? "pt" : "en")}
      aria-label={en ? "Mudar idioma para português" : "Switch language to English"}
      style={{ border: "1px solid var(--border-dark)", borderRadius: 4, padding: "5px 10px", background: "transparent", color: "var(--navy-dark)", fontSize: "0.75rem", fontWeight: 600, cursor: "pointer" }}
    >
      {en ? "PT" : "EN"}
    </button>
  );

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "#FFFFFF", borderBottom: scrolled ? "1px solid #E2E8F0" : "1px solid transparent", transition: "border-color 0.3s" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 2rem", minHeight: 56, display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
        <a href="#home" style={{ fontFamily: "var(--font-inter)", fontWeight: 600, fontSize: "0.875rem", color: "var(--navy-dark)", letterSpacing: "-0.01em", textDecoration: "none", whiteSpace: "nowrap" }}>
          Alessandro Pereira
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: "1.1rem" }} className="hidden lg:flex">
          {links.map((link) => <a key={link.href} href={link.href} style={{ fontSize: "0.8125rem", color: "var(--text-muted)", textDecoration: "none", fontWeight: 500 }}>{link.label}</a>)}
          {languageButton}
          <a href={resumeHref} download style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--navy-dark)", border: "1.5px solid var(--navy-dark)", borderRadius: 4, padding: "5px 14px", textDecoration: "none", whiteSpace: "nowrap" }}>
            {en ? "Download Resume" : "Baixar Currículo"}
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label={en ? (open ? "Close menu" : "Open menu") : (open ? "Fechar menu" : "Abrir menu")} style={{ color: "var(--navy-dark)", background: "none", border: "none", cursor: "pointer" }}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden" style={{ borderTop: "1px solid var(--border)", background: "#fff", padding: "1.25rem 2rem 1.5rem" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
            {links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} style={{ fontSize: "0.9375rem", color: "var(--text-body)", textDecoration: "none", fontWeight: 500 }}>{link.label}</a>)}
            {languageButton}
            <a href={resumeHref} download style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--navy-dark)", textDecoration: "none" }}>
              {en ? "Download Resume" : "Baixar Currículo"}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
