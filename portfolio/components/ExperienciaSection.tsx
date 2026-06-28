"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, TrendingUp } from "lucide-react";

const experiencias = [
  {
    cargo: "Comprador Estratégico",
    empresa: "Empresa de Grande Porte",
    periodo: "2012 – Presente",
    local: "São Paulo, SP",
    tipo: "CLT",
    resumo: "Gestão estratégica de compras de peças automotivas, lubrificantes, combustíveis e serviços mecânicos para frota. Implementação de curva ABC, análise de spend e negociações de alto impacto.",
    responsabilidades: [
      "Strategic Sourcing — seleção, avaliação e homologação de fornecedores",
      "Negociação de contratos com ganhos documentados acima de 25%",
      "Gestão de curva ABC e otimização do portfólio de fornecedores",
      "Análise de dados com Power BI e SAP para tomada de decisão",
      "Controle de OTD, lead time e nível de serviço",
      "Gestão de MRO, sole source e criticidade de itens",
    ],
    resultados: ["Redução de 30% em peças automotivas", "Economia de 26% em serviços mecânicos", "Redução de 2,36% no custo médio de diesel"],
  },
  {
    cargo: "Líder de Faturamento",
    empresa: "Empresa de Grande Porte",
    periodo: "2005 – 2012",
    local: "São Paulo, SP",
    tipo: "CLT",
    resumo: "Liderança da equipe de faturamento e controle de processos de emissão de notas fiscais, conciliação e relacionamento com clientes.",
    responsabilidades: [
      "Gestão e desenvolvimento de equipe de 8 colaboradores",
      "Implementação de controles de processos e redução de erros",
      "Relacionamento estratégico com clientes-chave",
      "Implantação de indicadores de desempenho (KPIs)",
      "Integração com os sistemas ERP da empresa",
    ],
    resultados: ["100% de acurácia nas emissões", "Redução de 40% no tempo de ciclo"],
  },
  {
    cargo: "Auxiliar Administrativo → Analista",
    empresa: "Empresa de Grande Porte",
    periodo: "1998 – 2005",
    local: "São Paulo, SP",
    tipo: "CLT",
    resumo: "Evolução de auxiliar a analista administrativo, com atuação em controles internos, conciliação, relatórios gerenciais e suporte à gestão.",
    responsabilidades: [
      "Elaboração de relatórios gerenciais e dashboards manuais",
      "Controles de contas a pagar e a receber",
      "Suporte aos processos de auditoria interna",
      "Manutenção e melhoria de planilhas de controle",
    ],
    resultados: ["Promoção a Analista em 3 anos", "Reconhecimento como referência técnica na área"],
  },
  {
    cargo: "Operador Industrial",
    empresa: "Indústria Manufatureira",
    periodo: "1995 – 1998",
    local: "Interior de SP",
    tipo: "CLT",
    resumo: "Início de carreira no setor industrial, com atuação em linha de produção, controle de qualidade e logística interna.",
    responsabilidades: [
      "Operação de equipamentos industriais",
      "Controle de qualidade na linha de produção",
      "Logística interna e movimentação de materiais",
      "Participação em programas de melhoria contínua",
    ],
    resultados: ["Base sólida em processos industriais e cadeia de suprimentos"],
  },
];

export default function ExperienciaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experiencia" className="section-padding relative overflow-hidden" style={{ background: "#080F1E" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="section-label">Experiência Profissional</span>
          </div>
          <h2 className="display-heading text-white text-4xl lg:text-5xl">
            Carreira construída com{" "}
            <em className="gradient-text not-italic">consistência</em>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experiencias.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 hover-card border border-navy-700/50 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left info */}
                <div className="lg:col-span-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-sm text-xs font-medium mb-4"
                    style={{ background: "rgba(201,168,76,0.1)", color: "#C9A84C", border: "1px solid rgba(201,168,76,0.2)" }}>
                    {exp.tipo}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">{exp.cargo}</h3>
                  <p className="text-gold-400/70 font-medium text-sm mb-4">{exp.empresa}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-navy-100/40 text-xs">
                      <Calendar size={12} />
                      <span>{exp.periodo}</span>
                    </div>
                    <div className="flex items-center gap-2 text-navy-100/40 text-xs">
                      <MapPin size={12} />
                      <span>{exp.local}</span>
                    </div>
                  </div>
                  {/* Results */}
                  <div className="mt-6 space-y-2">
                    {exp.resultados.map((r, j) => (
                      <div key={j} className="flex items-start gap-2 text-xs">
                        <TrendingUp size={11} className="text-gold-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gold-400/70">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right details */}
                <div className="lg:col-span-2 space-y-4">
                  <p className="text-navy-100/60 text-sm leading-relaxed">{exp.resumo}</p>
                  <div>
                    <div className="text-xs font-semibold text-navy-100/40 tracking-widest uppercase mb-3">
                      Responsabilidades
                    </div>
                    <ul className="space-y-2">
                      {exp.responsabilidades.map((r, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-navy-100/60">
                          <span className="w-1 h-1 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
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
