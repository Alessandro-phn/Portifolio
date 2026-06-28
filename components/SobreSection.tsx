"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Factory, Briefcase, Users, ShoppingCart, Code2, Brain
} from "lucide-react";

const timeline = [
  {
    year: "1995",
    title: "Indústria",
    desc: "Início de carreira no chão de fábrica — aprendendo processos, qualidade e a linguagem dos negócios na prática.",
    icon: Factory,
    color: "#3B67AB",
  },
  {
    year: "2000",
    title: "Área Administrativa",
    desc: "Transição para funções administrativas, desenvolvendo visão sistêmica de processos e controles internos.",
    icon: Briefcase,
    color: "#5A7FB8",
  },
  {
    year: "2005",
    title: "Liderança",
    desc: "Assumindo a liderança do faturamento — gestão de equipes, indicadores e relacionamento com clientes e fornecedores.",
    icon: Users,
    color: "#C9A84C",
  },
  {
    year: "2012",
    title: "Compras Estratégicas",
    desc: "Evolução para Comprador Estratégico, com foco em negociação, curva ABC, gestão de fornecedores e redução de custos.",
    icon: ShoppingCart,
    color: "#E8C96A",
  },
  {
    year: "2020",
    title: "Tecnologia & Dados",
    desc: "Mergulho em Power BI, SAP, SQL e análise de dados — transformando informações em decisões de negócio.",
    icon: Code2,
    color: "#7897C4",
  },
  {
    year: "Hoje",
    title: "Inteligência Artificial",
    desc: "Unindo décadas de experiência a IA e Machine Learning para automatizar, analisar e gerar valor real às organizações.",
    icon: Brain,
    color: "#C9A84C",
  },
];

export default function SobreSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Side label */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-navy-800 font-display font-bold select-none pointer-events-none"
        style={{ fontSize: "7rem", letterSpacing: "-0.05em", transformOrigin: "left center", left: "-2rem" }}
      >
        Sobre
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="section-label">Trajetória</span>
          </div>
          <h2 className="display-heading text-white text-4xl lg:text-5xl mb-8 max-w-2xl">
            Vinte e cinco anos construindo{" "}
            <em className="gradient-text not-italic">expertise real</em>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
            <p className="text-navy-100/60 text-lg leading-relaxed">
              Comecei na indústria em 1995, aprendendo negócios de dentro para fora — no chão de fábrica, nos processos, na cadeia logística. Com o tempo, migrei para funções administrativas e depois para a liderança.
            </p>
            <p className="text-navy-100/60 text-lg leading-relaxed">
              Foram quinze anos de dedicação a uma mesma empresa, evoluindo de líder de faturamento a Comprador Estratégico. Hoje, uno essa experiência a tecnologia e Inteligência Artificial para transformar processos e apoiar decisões.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" />

          <div className="space-y-16">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 ${isLeft ? "" : "md:text-right"}`}
                >
                  {/* Left side */}
                  <div className={isLeft ? "md:pr-12" : "md:order-2 md:pl-12"}>
                    <div
                      className={`glass-card rounded-xl p-6 hover-card border border-navy-700/50 ${isLeft ? "" : "md:ml-auto"}`}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "" : "md:flex-row-reverse"}`}>
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                        >
                          <Icon size={18} style={{ color: item.color }} />
                        </div>
                        <div>
                          <div className="text-xs tracking-widest uppercase font-medium" style={{ color: item.color }}>
                            {item.year}
                          </div>
                          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                        </div>
                      </div>
                      <p className="text-navy-100/55 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="absolute left-1/2 top-6 -translate-x-1/2 hidden md:flex items-center justify-center w-10 h-10 rounded-full z-10"
                    style={{
                      background: "#0A1628",
                      border: `2px solid ${item.color}`,
                      boxShadow: `0 0 16px ${item.color}40`,
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                  </div>

                  {/* Right side spacer */}
                  <div className={isLeft ? "" : "md:order-1"} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
