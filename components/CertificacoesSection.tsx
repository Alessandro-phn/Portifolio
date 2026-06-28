"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const certs = [
  { title: "Engenharia da Computação", institution: "Graduação", type: "Formação", year: "Cursando", highlight: true },
  { title: "MBA Gestão Estratégica de Compras", institution: "Pós-Graduação", type: "MBA", year: "Concluído", highlight: true },
  { title: "MBA Cybersecurity", institution: "Pós-Graduação", type: "MBA", year: "Concluído", highlight: true },
  { title: "Pós-Graduação em IA & Machine Learning", institution: "Especialização", type: "Pós", year: "Concluído", highlight: true },
  { title: "SAP MM/SRM", institution: "SAP SE", type: "Certificação", year: "Certificado", highlight: false },
  { title: "Power BI Data Analyst", institution: "Microsoft", type: "Certificação", year: "Certificado", highlight: false },
  { title: "Excel Expert", institution: "Microsoft", type: "Certificação", year: "Certificado", highlight: false },
  { title: "SQL for Data Analysis", institution: "Múltiplas plataformas", type: "Certificação", year: "Certificado", highlight: false },
];

export default function CertificacoesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certificacoes" className="section-padding" style={{ background: "#080F1E" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="section-label">Formação & Certificações</span>
          </div>
          <h2 className="display-heading text-white text-4xl lg:text-5xl">
            Aprendizado{" "}
            <em className="gradient-text not-italic">contínuo</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`glass-card rounded-xl p-6 hover-card border flex flex-col gap-4 ${
                cert.highlight
                  ? "border-gold-500/20"
                  : "border-navy-700/50"
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                cert.highlight
                  ? "bg-gold-500/15 text-gold-400"
                  : "bg-navy-700/50 text-navy-400"
              }`}>
                {cert.highlight ? <GraduationCap size={18} /> : <Award size={18} />}
              </div>
              <div>
                <div className={`text-xs font-semibold tracking-widest uppercase mb-2 ${
                  cert.highlight ? "text-gold-500/70" : "text-navy-100/40"
                }`}>
                  {cert.type}
                </div>
                <h3 className="text-white font-semibold text-sm leading-snug mb-1">{cert.title}</h3>
                <p className="text-navy-100/40 text-xs">{cert.institution}</p>
              </div>
              <div className={`mt-auto text-xs px-2.5 py-1 rounded-sm w-fit ${
                cert.highlight
                  ? "bg-gold-500/10 text-gold-400/70 border border-gold-500/20"
                  : "bg-navy-700/30 text-navy-100/40 border border-navy-600/30"
              }`}>
                {cert.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
