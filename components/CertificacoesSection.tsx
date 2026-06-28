"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const formacao = [
  { titulo: "Engenharia da Computação", tipo: "Graduação", status: "Cursando" },
  { titulo: "Pós-Graduação em Inteligência Artificial e Machine Learning", tipo: "Especialização", status: "Concluído" },
  { titulo: "MBA em Gestão Estratégica de Compras", tipo: "MBA", status: "Concluído" },
  { titulo: "MBA em Cybersecurity e Cybercrimes", tipo: "MBA", status: "Concluído" },
];

const cursos = [
  "Power BI Data Analyst — Microsoft",
  "SAP MM/SRM — SAP SE",
  "Excel Expert — Microsoft",
  "SQL for Data Analysis",
  "React / Next.js — Múltiplas plataformas",
  "Python para Dados — Múltiplas plataformas",
];

export default function CertificacoesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="formacao" className="py-20 bg-white" style={{ borderBottom: "1px solid #E2E8F0" }}>
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-5">Formação</p>
          <h2 className="display-heading text-3xl lg:text-4xl" style={{ color: "#0F172A" }}>
            Educação e certificações
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-5 pb-3 border-b border-slate-200">
              Formação Acadêmica
            </p>
            <div className="space-y-5">
              {formacao.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="flex items-start justify-between gap-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{f.titulo}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{f.tipo}</p>
                  </div>
                  <span
                    className="flex-shrink-0 text-xs px-2 py-0.5 rounded border"
                    style={{
                      color: f.status === "Cursando" ? "#1d4ed8" : "#15803d",
                      borderColor: f.status === "Cursando" ? "#bfdbfe" : "#bbf7d0",
                      background: f.status === "Cursando" ? "#eff6ff" : "#f0fdf4",
                    }}
                  >
                    {f.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-900 uppercase tracking-widest mb-5 pb-3 border-b border-slate-200">
              Cursos e Certificações
            </p>
            <ul className="space-y-3">
              {cursos.map((curso, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex items-start gap-2.5 text-sm text-slate-600"
                >
                  <span className="text-slate-300 mt-1.5 flex-shrink-0">—</span>
                  {curso}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
