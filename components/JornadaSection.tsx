"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

const etapas = [
  {
    periodo: "1995 – 2004",
    fase: "Indústria",
    descricao:
      "Início de carreira no setor têxtil como Tecelão de Meias. Experiência direta com processos produtivos, qualidade e logística interna — base que moldou minha visão sobre operações e cadeia de suprimentos.",
  },
  {
    periodo: "2004 – 2009",
    fase: "Área Administrativa",
    descricao:
      "Migração para funções de escritório com foco em controles internos, relatórios gerenciais e suporte às áreas financeira e operacional. Desenvolveu visão sistêmica dos processos da empresa.",
  },
  {
    periodo: "2011 – 2022",
    fase: "Liderança em Faturamento",
    descricao:
      "Onze anos como Chefe de Faturamento: liderança de equipe, gestão de KPIs, integração com clientes e áreas operacionais. Mantive 100% de nível de serviço com o maior cliente durante períodos críticos.",
  },
  {
    periodo: "2022 – 2026",
    fase: "Compras Estratégicas",
    descricao:
      "Evolução para Comprador Estratégico com atuação em strategic sourcing, negociação de contratos, gestão de fornecedores e análise de dados. Resultados documentados de até 30% de redução de custos em categorias-chave.",
  },
  {
    periodo: "2024 – hoje",
    fase: "Dados e Tecnologia",
    descricao:
      "Aprofundamento em Power BI, SQL, React, Next.js e inteligência artificial aplicada a processos de compras e negócio. Desenvolvimento de soluções que conectam experiência operacional e capacidade analítica.",
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
        <p className="label" style={{ marginBottom: "1.5rem" }}>Jornada</p>
        <h2 className="section-heading" style={{ marginBottom: "3.5rem" }}>
          Três décadas de evolução contínua
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
                    background: i >= 2 ? "var(--navy-mid)" : "var(--border-dark)",
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
