"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

const grupos = [
  {
    titulo: "Compras e Supply Chain",
    itens: [
      "Strategic Sourcing",
      "Negociação",
      "Gestão de Fornecedores",
      "Curva ABC",
      "Spend Analysis",
      "Gestão de Contratos",
      "Supply Chain Management",
      "MRO",
      "Controle de OTD",
    ],
  },
  {
    titulo: "Dados e Tecnologia",
    itens: [
      "Power BI",
      "Excel Avançado",
      "SAP MM/SRM",
      "SQL",
      "Python",
      "React / Next.js",
      "TypeScript",
      "Git / GitHub",
      "IA Aplicada a Negócios",
    ],
  },
  {
    titulo: "Gestão e Processos",
    itens: [
      "Liderança de Equipe",
      "KPIs e Indicadores",
      "Controles Internos",
      "Melhoria de Processos",
      "Relatórios Gerenciais",
      "Integração com ERP",
    ],
  },
];

export default function CompetenciasSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="competencias"
      ref={ref}
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid var(--border)",
        padding: "6rem 2rem",
        opacity: inView ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "1.5rem" }}>Competências</p>
        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
          Áreas de atuação
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {grupos.map((grupo, i) => (
            <div key={i}>
              <div
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "var(--navy-dark)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  paddingBottom: "0.875rem",
                  marginBottom: "1rem",
                  borderBottom: "2px solid var(--navy-dark)",
                }}
              >
                {grupo.titulo}
              </div>
              <ul
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  listStyle: "none",
                }}
              >
                {grupo.itens.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.875rem",
                      color: "var(--text-body)",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: "var(--border-dark)",
                        flexShrink: 0,
                        display: "inline-block",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
