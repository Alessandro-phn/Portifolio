"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const timeline = [
  { period: "1995 – 1997", role: "Tecelão de Meias", context: "Início de carreira na indústria têxtil" },
  { period: "1997 – 1998", role: "Auxiliar de Escritório", context: "Primeiro contato com processos administrativos" },
  { period: "1999 – 2002", role: "Tecelão de Meias", context: "Retorno à indústria; aprofundamento em processos de produção" },
  { period: "2002 – 2004", role: "Operações Industriais", context: "Diversificação de experiências no ambiente fabril" },
  { period: "2004 – 2009", role: "Área Administrativa", context: "Migração definitiva para escritório, controles e processos internos" },
  { period: "2011 – 2022", role: "Chefe de Faturamento", context: "Liderança de equipe, indicadores, integração financeira e operacional" },
  { period: "2022 – 2026", role: "Comprador Estratégico", context: "Strategic sourcing, negociação, redução de custos e gestão de fornecedores" },
  { period: "2024 – hoje", role: "Tecnologia & Dados", context: "Power BI, SQL, React, Next.js e IA aplicada a processos e decisões de negócio" },
];

export default function SobreSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      {/* Sobre */}
      <section id="sobre" className="py-20 bg-white" style={{ borderBottom: "1px solid #E2E8F0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <p className="section-label mb-5">Sobre</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="display-heading text-3xl lg:text-4xl mb-6" style={{ color: "#0F172A" }}>
                  Unindo operações, compras e tecnologia
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  Comecei minha trajetória no chão de fábrica em 1995 e, ao longo de três décadas,
                  migrei pelo administrativo, assumi a liderança de faturamento por onze anos e
                  evoluí para compras estratégicas, onde atuo há mais de dois anos com foco em
                  negociação, redução de custos e gestão de fornecedores.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Desde 2024, venho aprofundando minha atuação em tecnologia e dados — Power BI,
                  SQL, React e IA aplicada —, com o objetivo de entregar soluções que conectem
                  experiência de negócio e inteligência analítica.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jornada */}
      <section id="jornada" className="py-20" style={{ background: "#F8FAFC", borderBottom: "1px solid #E2E8F0" }}>
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="section-label mb-5">Jornada Profissional</p>
            <h2 className="display-heading text-3xl lg:text-4xl mb-12" style={{ color: "#0F172A" }}>
              30 anos de evolução contínua
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div
                className="absolute left-24 top-0 bottom-0 w-px hidden sm:block"
                style={{ background: "#E2E8F0" }}
              />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                    className="flex gap-8 items-start"
                  >
                    {/* Period */}
                    <div className="hidden sm:block w-20 flex-shrink-0 text-right">
                      <span className="text-xs font-semibold text-slate-400">{item.period}</span>
                    </div>

                    {/* Dot */}
                    <div className="hidden sm:flex flex-shrink-0 w-5 items-start justify-center pt-0.5">
                      <div
                        className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                        style={{
                          borderColor: i >= 5 ? "#1E3A5F" : "#CBD5E1",
                          background: i >= 5 ? "#1E3A5F" : "white",
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className="pb-2">
                      <div className="sm:hidden text-xs font-semibold text-slate-400 mb-1">{item.period}</div>
                      <div className="font-semibold text-slate-900 text-sm">{item.role}</div>
                      <div className="text-slate-500 text-sm mt-0.5">{item.context}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
