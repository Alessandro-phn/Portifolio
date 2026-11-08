"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function SobreSection() {
  const { language } = useLanguage();
  const en = language === "en";
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
        <p className="label" style={{ marginBottom: "1.5rem" }}>{en ? "About" : "Sobre"}</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}
        >
          <h2 className="section-heading">{en ? "Strategic procurement, operations, and technology" : "Compras estratégicas, operações e tecnologia aplicadas ao negócio"}</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p className="body-text">
              {en
                ? "From 2022 to 2026, I worked as a Senior Buyer at Diplomata Logística e Transportes, leading strategic sourcing, negotiations, supplier management, and contracts for fuel, parts, equipment, and services."
                : "Atuei como Comprador Sênior na Diplomata Logística e Transportes, de 2022 a 2026, conduzindo strategic sourcing, negociações, gestão de fornecedores e contratos para combustível, peças, equipamentos e serviços."}
            </p>
            <p className="body-text">
              {en
                ? "My approximately 15-year tenure with the organization also included billing roles and team leadership. In procurement, I achieved average cost reductions of 30% in truck parts, 26% in mechanical and electrical services, and 2.36% in diesel. My background combines procurement with computer engineering, data tools, SAP, and software development."
                : "Minha trajetória de aproximadamente 15 anos na organização também incluiu funções em faturamento e liderança de equipe. Em compras, alcancei reduções médias de custo de 30% em peças para caminhões, 26% em serviços mecânicos e elétricos e 2,36% em diesel. Minha formação combina compras, Engenharia da Computação, ferramentas de dados, SAP e desenvolvimento de sistemas."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
