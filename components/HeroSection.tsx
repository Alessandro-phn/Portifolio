"use client";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#FFFFFF",
        borderBottom: "1px solid var(--border)",
        padding: "7rem 2rem 5rem",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          width: "100%",
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(16px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Label */}
        <p className="label" style={{ marginBottom: "2.5rem", color: "var(--text-subtle)" }}>
          Portfólio Profissional
        </p>

        {/* Name */}
        <h1
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(2.75rem, 7vw, 4.5rem)",
            fontWeight: 400,
            color: "var(--navy-dark)",
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
          }}
        >
          Alessandro<br />
          Guimarães Pereira
        </h1>

        {/* Title */}
        <p
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--navy-mid)",
            marginBottom: "1.75rem",
          }}
        >
          Compras Estratégicas&ensp;·&ensp;Supply Chain&ensp;·&ensp;Dados e Tecnologia
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.75,
            color: "var(--text-body)",
            maxWidth: 520,
            marginBottom: "2.5rem",
          }}
        >
          Uno experiência operacional, compras estratégicas e tecnologia
          para melhorar processos, reduzir custos e apoiar decisões.
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.5rem" }}>
          <a
            href="#projetos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 20px",
              background: "var(--navy-dark)",
              color: "#fff",
              fontSize: "0.8125rem",
              fontWeight: 600,
              borderRadius: 4,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--navy-mid)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--navy-dark)")}
          >
            Ver projetos <ArrowRight size={13} />
          </a>
          <a
            href="/Alessandro_Guimaraes_Pereira_CV.pdf"
            download
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "10px 20px",
              border: "1.5px solid var(--border-dark)",
              color: "var(--text-body)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              borderRadius: 4,
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--navy-dark)";
              e.currentTarget.style.color = "var(--navy-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-dark)";
              e.currentTarget.style.color = "var(--text-body)";
            }}
          >
            <Download size={13} /> Baixar currículo
          </a>
        </div>

        {/* Social */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          <a
            href="https://linkedin.com/in/a-g-pereira"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#0A66C2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <Linkedin size={14} /> LinkedIn
          </a>
          <a
            href="https://github.com/Alessandro-phn"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: "0.8125rem",
              color: "var(--text-muted)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy-dark)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
          >
            <Github size={14} /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
