"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

const formacao = [
  {
    grau: "Graduação",
    titulo: "Engenharia da Computação",
    status: "Cursando",
  },
  {
    grau: "Pós-Graduação",
    titulo: "Inteligência Artificial e Machine Learning",
    status: "Concluído",
  },
  {
    grau: "MBA",
    titulo: "Gestão Estratégica de Compras",
    status: "Concluído",
  },
  {
    grau: "MBA",
    titulo: "Cybersecurity e Cybercrimes",
    status: "Concluído",
  },
];

const complementar = [
  "Power BI Data Analyst — Microsoft",
  "SAP MM/SRM — SAP SE",
  "Excel Expert — Microsoft",
  "SQL for Data Analysis",
  "React e Next.js — Múltiplas plataformas",
  "Python para Dados",
];

export default function CertificacoesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="formacao"
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
        <p className="label" style={{ marginBottom: "1.5rem" }}>Formação</p>
        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
          Educação e certificações
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Academic */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--navy-dark)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                paddingBottom: "0.875rem",
                marginBottom: "1.25rem",
                borderBottom: "2px solid var(--navy-dark)",
              }}
            >
              Formação Acadêmica
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {formacao.map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "1rem",
                    padding: "1rem 0",
                    borderBottom: i < formacao.length - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 600,
                        color: "var(--text-subtle)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {f.grau}
                    </p>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        color: "var(--navy-dark)",
                        lineHeight: 1.4,
                      }}
                    >
                      {f.titulo}
                    </p>
                  </div>
                  <span
                    style={{
                      flexShrink: 0,
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      padding: "3px 9px",
                      border: "1px solid",
                      borderRadius: 3,
                      color: f.status === "Cursando" ? "#1d4ed8" : "#166534",
                      borderColor: f.status === "Cursando" ? "#bfdbfe" : "#bbf7d0",
                      background: f.status === "Cursando" ? "#eff6ff" : "#f0fdf4",
                    }}
                  >
                    {f.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Complementar */}
          <div>
            <p
              style={{
                fontSize: "0.75rem",
                fontWeight: 700,
                color: "var(--navy-dark)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                paddingBottom: "0.875rem",
                marginBottom: "1.25rem",
                borderBottom: "2px solid var(--navy-dark)",
              }}
            >
              Cursos e Certificações
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
              {complementar.map((c, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-body)",
                    padding: "0.875rem 0",
                    borderBottom: i < complementar.length - 1 ? "1px solid var(--border)" : "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.625rem",
                  }}
                >
                  <span
                    style={{
                      width: 4,
                      height: 4,
                      borderRadius: "50%",
                      background: "var(--border-dark)",
                      flexShrink: 0,
                    }}
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
