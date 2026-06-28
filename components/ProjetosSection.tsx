"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Milk Run Manager Pro",
    objective: "Sistema web para gestão de rotas de Milk Run com otimização de coletas, controle de fornecedores e KPIs de OTD em tempo real.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    status: "Em desenvolvimento",
    github: "https://github.com/Alessandro-phn",
    demo: null,
  },
  {
    title: "Dashboard de Compras Executivo",
    objective: "Dashboard de procurement com curva ABC dinâmica, ranking de fornecedores, análise de saving e KPIs estratégicos.",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    status: "Disponível",
    github: "https://github.com/Alessandro-phn",
    demo: "https://github.com/Alessandro-phn",
  },
  {
    title: "Procurement Analytics Dashboard",
    objective: "Plataforma de BI para compras com análise de spend por categoria, performance de fornecedores e alertas automáticos.",
    tags: ["Power BI", "Python", "SQL", "DAX"],
    status: "Privado",
    github: null,
    demo: null,
  },
  {
    title: "SafraFácil",
    objective: "App web para gestão de safras, controle de insumos, custo por hectare e análise de produtividade para o agronegócio.",
    tags: ["Next.js", "Supabase", "TypeScript", "Chart.js"],
    status: "Em desenvolvimento",
    github: "https://github.com/Alessandro-phn",
    demo: null,
  },
];

export default function ProjetosSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projetos" className="py-20 bg-white" style={{ borderBottom: "1px solid #E2E8F0" }}>
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="section-label mb-5">Projetos</p>
          <h2 className="display-heading text-3xl lg:text-4xl" style={{ color: "#0F172A" }}>
            Projetos em destaque
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="border border-slate-200 rounded-lg p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="font-bold text-slate-900 text-base leading-snug">{project.title}</h3>
                <span
                  className="flex-shrink-0 text-xs px-2 py-0.5 rounded border"
                  style={{
                    color: project.status === "Disponível" ? "#15803d" : "#64748B",
                    borderColor: project.status === "Disponível" ? "#bbf7d0" : "#E2E8F0",
                    background: project.status === "Disponível" ? "#f0fdf4" : "#F8FAFC",
                  }}
                >
                  {project.status}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-5 flex-1">{project.objective}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded border border-slate-200 text-slate-500 bg-slate-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <Github size={13} />
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors"
                  >
                    <ExternalLink size={13} />
                    Demo
                  </a>
                )}
                {!project.github && !project.demo && (
                  <span className="text-xs text-slate-400">Repositório privado</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
