"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, GitBranch, ExternalLink, CheckCircle, Target, Lightbulb, BookOpen } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectPageClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-navy-950 pt-24 pb-20">
      {/* Hero */}
      <div
        className="relative py-24 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}12 0%, rgba(10,22,40,0.98) 60%)`,
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{ background: `radial-gradient(ellipse 50% 60% at 80% 50%, ${project.color} 0%, transparent 70%)` }}
        />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/#projetos"
              className="inline-flex items-center gap-2 text-navy-100/40 hover:text-gold-400 text-sm mb-8 transition-colors">
              <ArrowLeft size={14} />
              Voltar aos Projetos
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{project.icon}</span>
              <div>
                <div className="section-label mb-1">{project.category}</div>
                <div
                  className="px-2.5 py-1 text-xs font-medium rounded-sm w-fit"
                  style={{
                    background: project.status === "Disponível" ? "rgba(74,139,92,0.15)" : "rgba(201,168,76,0.1)",
                    color: project.status === "Disponível" ? "#6BCF85" : "#C9A84C",
                    border: `1px solid ${project.status === "Disponível" ? "rgba(74,139,92,0.3)" : "rgba(201,168,76,0.2)"}`,
                  }}
                >
                  {project.status}
                </div>
              </div>
            </div>

            <h1 className="display-heading text-white text-4xl lg:text-6xl mb-4">{project.title}</h1>
            <p className="text-gold-400/70 text-xl mb-6">{project.subtitle}</p>
            <p className="text-navy-100/60 text-lg leading-relaxed max-w-2xl mb-8">{project.longDesc}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm rounded-sm"
                  style={{ background: "rgba(30,58,95,0.6)", color: "#7897C4", border: "1px solid rgba(90,127,184,0.2)" }}>
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 border border-navy-600 text-navy-100/70 hover:text-gold-400 hover:border-gold-500/40 text-sm font-medium rounded-sm transition-all">
                  <GitBranch size={14} />
                  GitHub
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm rounded-sm transition-all">
                  <ExternalLink size={14} />
                  Demo
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Problem */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-8 border border-navy-700/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                  <Target size={16} className="text-red-400" />
                </div>
                <h2 className="text-white font-bold text-lg">O Problema</h2>
              </div>
              <p className="text-navy-100/60 leading-relaxed">{project.problem}</p>
            </motion.div>

            {/* Solution */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-8 border border-navy-700/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
                  <Lightbulb size={16} className="text-green-400" />
                </div>
                <h2 className="text-white font-bold text-lg">A Solução</h2>
              </div>
              <p className="text-navy-100/60 leading-relaxed">{project.solution}</p>
            </motion.div>

            {/* Architecture */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-8 border border-navy-700/50">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <BookOpen size={16} className="text-blue-400" />
                </div>
                <h2 className="text-white font-bold text-lg">Arquitetura</h2>
              </div>
              <p className="text-navy-100/60 leading-relaxed">{project.architecture}</p>
            </motion.div>

            {/* Lessons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="glass-card rounded-xl p-8 border border-navy-700/50">
              <h2 className="text-white font-bold text-lg mb-5">Lições Aprendidas</h2>
              <ul className="space-y-3">
                {project.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start gap-3 text-navy-100/60 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    {lesson}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-6 border border-navy-700/50">
              <h3 className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-5">Destaques</h3>
              <ul className="space-y-3">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-navy-100/60">
                    <CheckCircle size={14} className="text-gold-500 mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}
              className="glass-card rounded-xl p-6 border border-navy-700/50">
              <h3 className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-5">Tecnologias</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs rounded-sm"
                    style={{ background: "rgba(30,58,95,0.6)", color: "#9FB5D5", border: "1px solid rgba(90,127,184,0.2)" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
