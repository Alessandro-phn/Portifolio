"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const grupos = [
  {
    categoria: "Compras e Supply Chain",
    itens: [
      "Strategic Sourcing", "Negociação", "Gestão de Fornecedores",
      "Curva ABC", "Spend Analysis", "Gestão de Contratos",
      "Supply Chain Management", "MRO", "OTD / Lead Time",
    ],
  },
  {
    categoria: "Dados e Tecnologia",
    itens: [
      "Power BI", "Excel Avançado", "SAP MM/SRM",
      "SQL", "Python (básico)", "React / Next.js",
      "TypeScript", "Git / GitHub", "IA Aplicada a Negócios",
    ],
  },
  {
    categoria: "Gestão e Processos",
    itens: [
      "Liderança de Equipe", "KPIs e Indicadores", "Controles Internos",
      "Melhoria de Processos", "Relatórios Gerenciais", "ERP",
    ],
  },
];

export default function CompetenciasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="competencias" className="py-20" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-5">Competências</p>
          <h2 className="display-heading text-3xl lg:text-4xl" style={{ color: "#0F172A" }}>
            Áreas de atuação
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {grupos.map((grupo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-4 pb-3 border-b border-slate-200">
                {grupo.categoria}
              </p>
              <div className="flex flex-wrap gap-2">
                {grupo.itens.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-2.5 py-1 rounded border border-slate-200 text-slate-600 bg-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
