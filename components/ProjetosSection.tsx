"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projetos = [
  {
    titulo: "Milk Run Manager Pro",
    categoria: "Supply Chain",
    objetivo:
      "Sistema web para gestão de rotas de Milk Run com otimização de coletas, controle de fornecedores e monitoramento de KPIs de OTD em tempo real.",
    tecnologias: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "Em desenvolvimento",
    github: "https://github.com/Alessandro-phn",
    demo: null,
  },
  {
    titulo: "Dashboard de Compras Executivo",
    categoria: "Analytics",
    objetivo:
      "Dashboard de procurement com curva ABC dinâmica, ranking de fornecedores, análise de saving e KPIs estratégicos para apresentação à liderança.",
    tecnologias: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    status: "Disponível",
    github: "https://github.com/Alessandro-phn",
    demo: "https://github.com/Alessandro-phn",
  },
  {
    titulo: "Procurement Analytics Dashboard",
    categoria: "BI & Dados",
    objetivo:
      "Plataforma de inteligência de compras com análise de spend por categoria, performance de fornecedores e alertas automáticos de desvio.",
    tecnologias: ["Power BI", "Python", "SQL", "DAX"],
    status: "Privado",
    github: null,
    demo: null,
  },
  {
    titulo: "SafraFácil",
    categoria: "Agronegócio",
    objetivo:
      "Aplicação web para gestão de safras, controle de insumos, custo por hectare e análise de produtividade voltada ao pequeno e médio produtor.",
    tecnologias: ["Next.js", "Supabase", "TypeScript", "Chart.js"],
    status: "Em desenvolvimento",
    github: "https://github.com/Alessandro-phn",
    demo: null,
  },
];

export default function ProjetosSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="projetos"
      ref={ref}
      style={{
        background: "var(--bg-alt)",
        borderBottom: "1px solid var(--border)",
        padding: "6rem 2rem",
        opacity: inView ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "1.5rem" }}>Projetos</p>
        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
          Projetos em destaque
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(440px, 1fr))",
            gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {projetos.map((p, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--navy-mid)",
                      display: "block",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {p.categoria}
                  </span>
                  <h3
                    style={{
                      fontSize: "0.9375rem",
                      fontWeight: 600,
                      color: "var(--navy-dark)",
                      lineHeight: 1.3,
                    }}
                  >
                    {p.titulo}
                  </h3>
                </div>
                <span
                  style={{
                    flexShrink: 0,
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    padding: "3px 10px",
                    border: "1px solid",
                    borderRadius: 3,
                    whiteSpace: "nowrap",
                    color:
                      p.status === "Disponível"
                        ? "#166534"
                        : p.status === "Privado"
                        ? "var(--text-subtle)"
                        : "var(--navy-mid)",
                    borderColor:
                      p.status === "Disponível"
                        ? "#bbf7d0"
                        : p.status === "Privado"
                        ? "var(--border)"
                        : "#bfdbfe",
                    background:
                      p.status === "Disponível"
                        ? "#f0fdf4"
                        : p.status === "Privado"
                        ? "var(--bg-alt)"
                        : "#eff6ff",
                  }}
                >
                  {p.status}
                </span>
              </div>

              {/* Objective */}
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "var(--text-muted)",
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {p.objetivo}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                {p.tecnologias.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.6875rem",
                      padding: "3px 8px",
                      border: "1px solid var(--border)",
                      borderRadius: 3,
                      color: "var(--text-muted)",
                      background: "var(--bg-alt)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div
                style={{
                  display: "flex",
                  gap: "1.25rem",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy-dark)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <Github size={13} /> GitHub
                  </a>
                ) : (
                  <span style={{ fontSize: "0.8125rem", color: "var(--text-subtle)" }}>
                    Repositório privado
                  </span>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      fontSize: "0.8125rem",
                      color: "var(--text-muted)",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy-dark)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  >
                    <ExternalLink size={13} /> Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
