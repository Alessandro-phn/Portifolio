"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Clock } from "lucide-react";

const categories = ["Todos", "Compras", "Supply Chain", "Power BI", "SAP", "IA", "Carreira"];

const posts = [
  {
    category: "Compras",
    title: "Curva ABC na prática: como priorizei fornecedores e economizei 30%",
    excerpt: "A análise de Pareto em compras não é teoria — é o método que transformou minha gestão de fornecedores. Veja como implementar passo a passo.",
    readTime: "8 min",
    date: "Jun 2025",
    featured: true,
  },
  {
    category: "Power BI",
    title: "Dashboard executivo de procurement: do zero ao boardroom",
    excerpt: "Como construí um dashboard de compras que impressionou a diretoria e me valeu uma promoção. Código aberto no GitHub.",
    readTime: "12 min",
    date: "Mai 2025",
    featured: false,
  },
  {
    category: "IA",
    title: "IA aplicada a compras: o que funciona hoje (e o que é hype)",
    excerpt: "Testei IA generativa, modelos preditivos e automação em processos reais de procurement. Aqui está o que vale a pena.",
    readTime: "10 min",
    date: "Abr 2025",
    featured: false,
  },
  {
    category: "Supply Chain",
    title: "Milk Run: por que saí das planilhas e construí meu próprio sistema",
    excerpt: "A história de como um processo crítico gerenciado em Excel virou um projeto web com Python, SQL e dashboard em tempo real.",
    readTime: "15 min",
    date: "Mar 2025",
    featured: false,
  },
  {
    category: "Carreira",
    title: "De operador industrial a Comprador Estratégico: a jornada de 25 anos",
    excerpt: "O que aprendi navegando da fábrica ao board — e por que o conhecimento técnico sem visão de negócios não leva a lugar nenhum.",
    readTime: "7 min",
    date: "Fev 2025",
    featured: false,
  },
  {
    category: "SAP",
    title: "SAP MM para gestores: o que você precisa saber (sem virar consultor)",
    excerpt: "Guia prático de SAP MM focado em quem usa o sistema para decisões — não para configuração. Módulos essenciais para compradores.",
    readTime: "9 min",
    date: "Jan 2025",
    featured: false,
  },
];

const catColors: Record<string, string> = {
  Compras: "#C9A84C",
  "Supply Chain": "#3B67AB",
  "Power BI": "#F2C811",
  SAP: "#0FAAFF",
  IA: "#9B59B6",
  Carreira: "#27AE60",
};

export default function BlogSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-padding bg-navy-950 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="section-label">Blog</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="display-heading text-white text-4xl lg:text-5xl">
              Ideias &{" "}
              <em className="gradient-text not-italic">experiências</em>
            </h2>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className="px-3 py-1 text-xs font-medium tracking-wide rounded-sm border transition-all duration-200 hover:border-gold-500/60 hover:text-gold-400"
                  style={{ borderColor: "rgba(30,58,95,0.6)", color: "rgba(197,210,230,0.5)" }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`glass-card rounded-xl p-6 hover-card border border-navy-700/50 flex flex-col cursor-pointer group ${
                post.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className="px-2.5 py-1 text-xs font-medium rounded-sm"
                  style={{
                    background: `${catColors[post.category] || "#C9A84C"}15`,
                    color: catColors[post.category] || "#C9A84C",
                    border: `1px solid ${catColors[post.category] || "#C9A84C"}25`,
                  }}
                >
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5 text-navy-100/30 text-xs">
                  <Clock size={11} />
                  {post.readTime}
                </div>
              </div>

              <h3 className="text-white font-bold text-base leading-snug mb-3 group-hover:text-gold-300 transition-colors flex-1">
                {post.title}
              </h3>
              <p className="text-navy-100/50 text-sm leading-relaxed mb-5">{post.excerpt}</p>

              <div className="flex items-center justify-between mt-auto">
                <span className="text-navy-100/30 text-xs">{post.date}</span>
                <div className="flex items-center gap-1.5 text-gold-500/60 text-xs font-medium group-hover:text-gold-400 transition-colors">
                  Ler
                  <ArrowRight size={12} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
