"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { GitBranch, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjetosSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projetos" className="section-padding" style={{ background: "#080F1E" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="section-label">Projetos</span>
          </div>
          <h2 className="display-heading text-white text-4xl lg:text-5xl">
            Construído com{" "}
            <em className="gradient-text not-italic">propósito</em>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass-card rounded-xl overflow-hidden hover-card border border-navy-700/50 group flex flex-col"
            >
              {/* Project header / image placeholder */}
              <div
                className="h-48 flex items-center justify-center relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}18 0%, rgba(10,22,40,0.95) 100%)`,
                  borderBottom: `1px solid ${project.color}20`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-5"
                  style={{ background: `radial-gradient(ellipse at center, ${project.color} 0%, transparent 70%)` }}
                />
                <div className="text-6xl relative z-10">{project.icon}</div>
                
                {/* Status badge */}
                <div
                  className="absolute top-4 right-4 px-2.5 py-1 rounded-sm text-xs font-medium"
                  style={{
                    background: project.status === "Disponível" ? "rgba(74,139,92,0.2)" : "rgba(201,168,76,0.15)",
                    color: project.status === "Disponível" ? "#6BCF85" : "#C9A84C",
                    border: `1px solid ${project.status === "Disponível" ? "rgba(74,139,92,0.3)" : "rgba(201,168,76,0.25)"}`,
                  }}
                >
                  {project.status}
                </div>

                {/* Category */}
                <div className="absolute top-4 left-4 text-xs text-navy-100/40 tracking-widest uppercase">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-white font-bold text-lg mb-1">{project.title}</h3>
                <p className="text-gold-400/60 text-xs mb-3">{project.subtitle}</p>
                <p className="text-navy-100/55 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 text-xs rounded-sm"
                      style={{ background: "rgba(30,58,95,0.6)", color: "#7897C4", border: "1px solid rgba(90,127,184,0.2)" }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-0.5 text-xs rounded-sm text-navy-100/40">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-semibold tracking-wide rounded-sm transition-all duration-300"
                    style={{
                      background: `${project.color}18`,
                      color: project.color,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    Saiba Mais
                    <ArrowRight size={12} />
                  </Link>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-sm border border-navy-600/50 text-navy-100/40 hover:text-gold-400 hover:border-gold-500/40 transition-all">
                      <GitBranch size={14} />
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-sm border border-navy-600/50 text-navy-100/40 hover:text-gold-400 hover:border-gold-500/40 transition-all">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
