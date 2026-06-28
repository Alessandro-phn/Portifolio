"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const kpis = [
  { value: "30%", label: "Redução em peças automotivas", desc: "via renegociação e análise de curva ABC" },
  { value: "26%", label: "Redução em serviços mecânicos", desc: "através de homologação de novos fornecedores" },
  { value: "2,36%", label: "Redução média no custo de diesel", desc: "por contrato de fornecimento negociado" },
  { value: "100%", label: "Nível de serviço mantido", desc: "OTD consistente durante os projetos de saving" },
];

export default function ResultadosSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="resultados" className="py-20" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-5">Resultados</p>
          <h2 className="display-heading text-3xl lg:text-4xl" style={{ color: "#0F172A" }}>
            Números documentados
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white border border-slate-200 rounded-lg p-6"
            >
              <div
                className="text-3xl font-bold mb-3"
                style={{ fontFamily: "var(--font-playfair)", color: "#1E3A5F" }}
              >
                {kpi.value}
              </div>
              <div className="text-sm font-semibold text-slate-800 mb-1">{kpi.label}</div>
              <div className="text-xs text-slate-400 leading-relaxed">{kpi.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
