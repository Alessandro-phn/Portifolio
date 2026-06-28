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
          <h2 className="section-heading">
            Profissional com trajetória sólida entre indústria, gestão e tecnologia
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <p className="body-text">
              Iniciei minha carreira em 1995 na indústria têxtil e, ao longo de três décadas,
              percorri um caminho que vai do chão de fábrica à gestão estratégica de compras.
              Passei pelo administrativo, liderei a área de faturamento por onze anos e migrei
              para compras, onde atuo há mais de dois anos com foco em negociação, redução de
              custos e gestão de fornecedores.
            </p>
            <p className="body-text">
              Desde 2024, desenvolvo competências em tecnologia e dados — Power BI, SQL,
              React e IA aplicada —, buscando conectar experiência de negócio com
              capacidade analítica para gerar valor real às organizações.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
