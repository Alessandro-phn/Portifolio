"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiencias = [
  {
    cargo: "Comprador Estratégico",
    periodo: "2022 – atual",
    local: "Salto, SP",
    resumo:
      "Atuação em strategic sourcing com foco em peças automotivas, combustíveis, lubrificantes e serviços mecânicos para frota. Responsável por negociação, qualificação de fornecedores e análise de dados para tomada de decisão.",
    responsabilidades: [
      "Strategic sourcing — seleção e homologação de fornecedores",
      "Negociação de contratos com ganhos documentados",
      "Análise de curva ABC e gestão de portfólio de fornecedores",
      "Uso de Power BI e SAP para acompanhamento de indicadores",
      "Controle de OTD, lead time e nível de serviço",
    ],
    resultados: [
      "30% de redução média em peças automotivas",
      "26% de redução média em serviços mecânicos e elétricos",
      "2,36% de redução média na compra de diesel",
    ],
  },
  {
    cargo: "Chefe de Faturamento",
    periodo: "2011 – 2022",
    local: "Salto, SP",
    resumo:
      "Liderança da equipe de faturamento com foco em controles, indicadores e integração com as áreas operacionais e financeiras. Responsável por processos de emissão de notas fiscais, conciliação e atendimento a clientes-chave.",
    responsabilidades: [
      "Gestão e desenvolvimento de equipe operacional",
      "Implementação de controles e redução de erros no processo",
      "Definição e acompanhamento de KPIs da área",
      "Relacionamento com clientes e integração com sistemas ERP",
      "Suporte à auditoria e às áreas financeira e contábil",
    ],
    resultados: [
      "100% de nível de serviço mantido com o maior cliente durante projetos críticos",
    ],
  },
];

export default function ExperienciaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experiencia" className="py-20 bg-white" style={{ borderBottom: "1px solid #E2E8F0" }}>
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-5">Experiência</p>
          <h2 className="display-heading text-3xl lg:text-4xl" style={{ color: "#0F172A" }}>
            Cargos e responsabilidades
          </h2>
        </motion.div>

        <div className="space-y-10">
          {experiencias.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-slate-200 rounded-lg p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{exp.cargo}</h3>
                  <p className="text-sm text-slate-500 mb-1">{exp.periodo}</p>
                  <p className="text-sm text-slate-400 mb-6">{exp.local}</p>

                  <div className="space-y-2">
                    {exp.resultados.map((r, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="text-blue-900 font-bold text-xs mt-0.5">↑</span>
                        <span className="text-sm text-slate-700">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 space-y-6">
                  <p className="text-slate-600 text-sm leading-relaxed">{exp.resumo}</p>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                      Responsabilidades
                    </p>
                    <ul className="space-y-2">
                      {exp.responsabilidades.map((r, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600">
                          <span className="text-slate-300 mt-1.5 flex-shrink-0">—</span>
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
