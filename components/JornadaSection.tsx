"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const etapas = {
  en: [
    {
      periodo: "May 2022 – May 2026",
      fase: "Senior Buyer | Diplomata Logística e Transportes",
      descricao: "Managed the procurement department, Excel data governance, supplier onboarding and sourcing, market research, and contract negotiations for fuel, parts, equipment, and services.",
    },
    {
      periodo: "Mar 2022 – May 2022",
      fase: "Billing Specialist | Diplomata Logística e Transportes",
      descricao: "Managed the billing process, reconciled billed amounts and accruals, prepared monthly KPI reports, and supported audits and quality controls.",
    },
    {
      periodo: "May 2011 – Mar 2022",
      fase: "Billing Supervisor | Diplomata Logística e Transportes",
      descricao: "Led a five-person team, reviewed daily reports, and coordinated with Sales, Operations, and Finance. Helped maintain a 100% service level with the largest customer.",
    },
  ],
  pt: [
  {
    periodo: "05/2022 – 05/2026",
    fase: "Comprador Sênior | Diplomata Logística e Transportes",
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
  ],
};

export default function JornadaSection() {
  const { language } = useLanguage();
  const en = language === "en";
  const etapasAtuais = en ? etapas.en : etapas.pt;
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
        <p className="label" style={{ marginBottom: "1.5rem" }}>{en ? "Experience" : "Experiência"}</p>
        <h2 className="section-heading" style={{ marginBottom: "3.5rem" }}>
          {en ? "Professional experience" : "Experiência profissional"}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {etapasAtuais.map((etapa, i) => (
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
