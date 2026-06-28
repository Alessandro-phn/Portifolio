"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = {
  "Compras & Supply Chain": [
    { name: "Strategic Sourcing", level: 95 },
    { name: "Negociação", level: 92 },
    { name: "Gestão de Fornecedores", level: 90 },
    { name: "Curva ABC / Spend Analysis", level: 88 },
    { name: "Supply Chain Management", level: 85 },
    { name: "Gestão de Contratos", level: 85 },
  ],
  "Tecnologia & Dados": [
    { name: "Power BI", level: 88 },
    { name: "Excel Avançado", level: 92 },
    { name: "SAP MM/SRM", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Python (básico)", level: 65 },
    { name: "Git / GitHub", level: 70 },
  ],
  "Desenvolvimento Web": [
    { name: "React / Next.js", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "Tailwind CSS", level: 75 },
    { name: "Node.js", level: 65 },
    { name: "Docker", level: 60 },
    { name: "Vercel / Deploy", level: 78 },
  ],
  "Inteligência Artificial": [
    { name: "LLMs & Prompt Engineering", level: 82 },
    { name: "Machine Learning (conceitos)", level: 68 },
    { name: "IA aplicada a negócios", level: 85 },
    { name: "Automação com IA", level: 78 },
  ],
};

const certIcons = [
  { name: "Power BI", color: "#F2C811" },
  { name: "SAP", color: "#0FAAFF" },
  { name: "Excel", color: "#217346" },
  { name: "SQL", color: "#CC2927" },
  { name: "Next.js", color: "#FFFFFF" },
  { name: "React", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Git", color: "#F05032" },
  { name: "GitHub", color: "#FFFFFF" },
  { name: "Docker", color: "#2496ED" },
  { name: "Python", color: "#3776AB" },
  { name: "Vercel", color: "#FFFFFF" },
];

function SkillBar({ name, level, inView, delay }: { name: string; level: number; inView: boolean; delay: number }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-navy-100/70">{name}</span>
        <span className="text-xs text-gold-500/60 font-medium">{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </div>
  );
}

export default function CompetenciasSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="competencias" className="section-padding bg-navy-950 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="section-label">Competências</span>
          </div>
          <h2 className="display-heading text-white text-4xl lg:text-5xl">
            Stack técnica &{" "}
            <em className="gradient-text not-italic">habilidades</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {Object.entries(skills).map(([category, items], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass-card rounded-xl p-8 border border-navy-700/50"
            >
              <h3 className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-6">{category}</h3>
              <div className="space-y-5">
                {items.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    inView={inView}
                    delay={catIdx * 0.1 + i * 0.07}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech icons grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="text-center mb-10">
            <span className="section-label">Ferramentas & Tecnologias</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {certIcons.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.04 }}
                className="px-4 py-2 glass-card rounded-lg text-sm font-medium hover-card cursor-default"
                style={{ color: tech.color, borderColor: `${tech.color}20` }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
