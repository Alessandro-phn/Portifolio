"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

const kpis = [
  {
    valor: "30%",
    label: "Redução em peças automotivas",
    detalhe: "via renegociação e análise de curva ABC",
  },
  {
    valor: "26%",
    label: "Redução em serviços mecânicos e elétricos",
    detalhe: "através de homologação de novos fornecedores",
  },
  {
    valor: "2,36%",
    label: "Redução média no custo de diesel",
    detalhe: "por contrato de fornecimento negociado",
  },
  {
    valor: "100%",
    label: "Nível de serviço com maior cliente",
    detalhe: "mantido durante projetos de saving simultâneos",
  },
];

export default function ResultadosSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="resultados"
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
        <p className="label" style={{ marginBottom: "1.5rem" }}>Resultados</p>
        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>
          Números documentados em compras
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5px",
            background: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          {kpis.map((kpi, i) => (
            <div
              key={i}
              style={{
                background: "#FFFFFF",
                padding: "2rem 1.75rem",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "2.75rem",
                  fontWeight: 400,
                  color: "var(--navy-dark)",
                  lineHeight: 1,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {kpi.valor}
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.8125rem",
                  color: "var(--navy-dark)",
                  marginBottom: "0.4rem",
                  lineHeight: 1.4,
                }}
              >
                {kpi.label}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-subtle)",
                  lineHeight: 1.5,
                }}
              >
                {kpi.detalhe}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
