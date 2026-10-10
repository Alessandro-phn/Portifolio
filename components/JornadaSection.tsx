"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

const etapas = [
  {
    periodo: "09/2026 – atual",
    fase: "Analista de Compras | Gigtech",
    descricao:
      "Atuação em processos de compras, cotações, negociação com fornecedores e acompanhamento de pedidos, apoiando as demandas de Suprimentos e Operações.",
  },
  {
    periodo: "05/2022 – 05/2026",
    fase: "Comprador | Diplomata Logística e Transportes",
    descricao:
      "Administração do departamento de compras, governança de dados em Excel, onboarding e prospecção de fornecedores, strategic sourcing, pesquisa de mercado e negociação de contratos de combustível, peças, equipamentos e serviços.",
  },
  {
    periodo: "03/2022 – 05/2022",
    fase: "Especialista em Faturamento | Diplomata Logística e Transportes",
    descricao:
      "Gestão do processo completo de faturamento, conciliação de valores e provisões, relatórios mensais de indicadores e apoio a auditorias e controles de qualidade.",
  },
  {
    periodo: "05/2011 – 03/2022",
    fase: "Chefe de Faturamento | Diplomata Logística e Transportes",
    descricao:
      "Liderança de equipe de cinco pessoas, revisão de relatórios diários e integração com Vendas, Operações e Finanças. Alinhamento da equipe e das áreas para manter 100% de nível de serviço com o maior cliente.",
  },
];

export default function JornadaSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="jornada"
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
        <p className="label" style={{ marginBottom: "1.5rem" }}>Experiência</p>
        <h2 className="section-heading" style={{ marginBottom: "3.5rem" }}>
          Experiência profissional
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {etapas.map((etapa, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "9rem 1fr",
                gap: "2rem",
                padding: "1.75rem 0",
                borderTop: "1px solid var(--border)",
                alignItems: "start",
              }}
            >
              {/* Period */}
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--text-subtle)",
                    letterSpacing: "0.04em",
                    display: "block",
                    marginBottom: "0.25rem",
                  }}
                >
                  {etapa.periodo}
                </span>
                <span
                  style={{
                    display: "inline-block",
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--navy-mid)" : "var(--border-dark)",
                    marginTop: 2,
                  }}
                />
              </div>

              {/* Content */}
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    fontSize: "0.9375rem",
                    color: "var(--navy-dark)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {etapa.fase}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                  }}
                >
                  {etapa.descricao}
                </p>
              </div>
            </div>
          ))}

          {/* Final border */}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </div>
      </div>
    </section>
  );
}
