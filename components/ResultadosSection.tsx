"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const kpis = [
  { value: 30, suffix: "%", label: "Redução em peças automotivas", desc: "via renegociação e curva ABC estratégica" },
  { value: 26, suffix: "%", label: "Economia em serviços mecânicos", desc: "através de homologação de novos fornecedores" },
  { value: 2.36, suffix: "%", label: "Redução média no diesel", desc: "por contrato de fornecimento negociado" },
  { value: 100, suffix: "%", label: "Nível de serviço mantido", desc: "OTD consistente durante os projetos de saving" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const isDecimal = !Number.isInteger(target);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, target);
      setCount(parseFloat(current.toFixed(isDecimal ? 2 : 0)));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, target, isDecimal]);

  return (
    <span className="display-heading gradient-text" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
      {isDecimal ? count.toFixed(2) : count.toFixed(0)}{suffix}
    </span>
  );
}

export default function ResultadosSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="resultados" className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background decorative */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.08) 0%, transparent 70%)",
        }}
      />

      <div ref={ref} className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="section-label">Resultados</span>
            <div className="h-px w-10 bg-gold-500" />
          </div>
          <h2 className="display-heading text-white text-4xl lg:text-5xl mb-4">
            Números que
            <em className="gradient-text not-italic"> comprovam</em>
          </h2>
          <p className="text-navy-100/50 text-lg max-w-xl mx-auto">
            Resultados reais, gerados ao longo de projetos de saving documentados
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="glass-card rounded-xl p-8 hover-card border border-navy-700/50 text-center group relative overflow-hidden"
            >
              {/* Glow background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(201,168,76,0.04) 0%, transparent 70%)" }} />

              <div className="relative z-10">
                <AnimatedCounter target={kpi.value} suffix={kpi.suffix} inView={inView} />
                <div className="mt-4 mb-2 text-sm font-semibold text-white/90 leading-tight">{kpi.label}</div>
                <div className="text-xs text-navy-100/40 leading-relaxed">{kpi.desc}</div>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="gold-divider max-w-xs mx-auto mb-8" />
          <blockquote className="text-navy-100/40 text-sm italic max-w-lg mx-auto">
            &ldquo;Saving não é sorte — é método, dados e negociação inteligente aplicados de forma consistente.&rdquo;
          </blockquote>
          <div className="text-gold-500/50 text-xs mt-3 tracking-widest uppercase">Alessandro G. Pereira</div>
        </motion.div>
      </div>
    </section>
  );
}
