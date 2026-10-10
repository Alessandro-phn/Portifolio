"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function SobreSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="sobre"
      ref={ref}
      style={{
        background: "#FFFFFF",
        borderBottom: "1px solid var(--border)",
        padding: "6rem 2rem",
        opacity: inView ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "1.5rem" }}>Sobre</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <h2 className="section-heading">Compras estratégicas, operações e tecnologia aplicadas ao negócio</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p className="body-text">
              Atualmente sou Analista de Compras na Gigtech. Antes, atuei como Comprador na Diplomata Logística e Transportes, conduzindo strategic sourcing, negociações, gestão de fornecedores e contratos para combustível, peças, equipamentos e serviços.
            </p>
            <p className="body-text">
              Minha trajetória também inclui mais de dez anos em faturamento e liderança de equipe. Em compras, alcancei reduções médias de custo de 30% em peças para caminhões, 26% em serviços mecânicos e elétricos e 2,36% em diesel. Complemento a experiência com formação em Engenharia da Computação, formação em Lean Manufacturing em andamento e conhecimentos de BI, SAP e desenvolvimento de sistemas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
