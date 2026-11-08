"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

const education = {
  en: [
    { degree: "Bachelor's Degree", title: "Computer Engineering — UNIVESP (2024)", status: "Completed" },
    { degree: "Postgraduate Certificate", title: "Artificial Intelligence and Machine Learning — Anhanguera (2025)", status: "Completed" },
    { degree: "MBA", title: "Strategic Procurement Management — Anhanguera (2026)", status: "Completed" },
    { degree: "MBA", title: "Cybersecurity and Cybercrime — Anhanguera (2026)", status: "Completed" },
    { degree: "MBA", title: "Lean Manufacturing — Anhanguera", status: "In progress" },
  ],
  pt: [
    { degree: "Graduação", title: "Engenharia da Computação — UNIVESP (2024)", status: "Concluído" },
    { degree: "Pós-Graduação", title: "Inteligência Artificial e Machine Learning — Anhanguera (2025)", status: "Concluído" },
    { degree: "MBA", title: "Gestão Estratégica em Compras — Anhanguera (2026)", status: "Concluído" },
    { degree: "MBA", title: "Cybersecurity e Cybercrimes — Anhanguera (2026)", status: "Concluído" },
    { degree: "MBA", title: "Lean Manufacturing — Anhanguera", status: "Cursando" },
  ],
};

const additionalTraining = {
  en: [
    "Power BI for Business Intelligence and Data Science — Data Science Academy (2025)",
    "Procurement Management and Operational Processes — Estácio (2024)",
    "Procurement Management and Strategic Negotiation — Udemy (2025)",
    "SAP S/4HANA Cloud Private Edition, Sourcing & Procurement — SAP (in progress)",
    "Database Administration — Fundação Bradesco (2022)",
    "SAP for Beginners — Grandes Projetos (2026)",
    "NR-10 Electrical Safety — SESI/SC (2024)",
    "Low-Voltage Electrical Installations — Anhanguera (2024)",
  ],
  pt: [
    "Power BI para Business Intelligence e Data Science — Data Science Academy (2025)",
    "Gestão de Compras e Processos Operacionais — Estácio (2024)",
    "Gestão de Compras e Negociação Estratégica — Udemy (2025)",
    "SAP S/4HANA Cloud Private Edition, Sourcing & Procurement — SAP (cursando)",
    "Administração de Banco de Dados — Fundação Bradesco (2022)",
    "SAP para Iniciantes — Grandes Projetos (2026)",
    "NR-10 — SESI/SC (2024)",
    "Instalações Elétricas de Baixa Tensão — Anhanguera (2024)",
  ],
};

export default function CertificacoesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { language } = useLanguage();
  const en = language === "en";
  const educationList = en ? education.en : education.pt;
  const trainingList = en ? additionalTraining.en : additionalTraining.pt;
  const completedLabel = en ? "Completed" : "Concluído";

  return (
    <section id="formacao" ref={ref} style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)", padding: "6rem 2rem", opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "1.5rem" }}>{en ? "Education" : "Formação"}</p>
        <h2 className="section-heading" style={{ marginBottom: "3rem" }}>{en ? "Education and certifications" : "Educação e certificações"}</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "3rem" }}>
          <div>
            <SectionLabel>{en ? "Academic Education" : "Formação Acadêmica"}</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {educationList.map((item, index) => (
                <div key={item.title} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", padding: "1rem 0", borderBottom: index < educationList.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div>
                    <p style={{ fontSize: "0.6875rem", fontWeight: 600, color: "var(--text-subtle)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.2rem" }}>{item.degree}</p>
                    <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--navy-dark)", lineHeight: 1.4 }}>{item.title}</p>
                  </div>
                  <span style={{ flexShrink: 0, fontSize: "0.6875rem", fontWeight: 500, padding: "3px 9px", border: "1px solid", borderRadius: 3, color: item.status === completedLabel ? "#166534" : "#1d4ed8", borderColor: item.status === completedLabel ? "#bbf7d0" : "#bfdbfe", background: item.status === completedLabel ? "#f0fdf4" : "#eff6ff" }}>{item.status}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel>{en ? "Additional Training" : "Cursos e Certificações"}</SectionLabel>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column" }}>
              {trainingList.map((item, index) => (
                <li key={item} style={{ fontSize: "0.875rem", color: "var(--text-body)", padding: "0.875rem 0", borderBottom: index < trainingList.length - 1 ? "1px solid var(--border)" : "none", display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--border-dark)", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--navy-dark)", letterSpacing: "0.1em", textTransform: "uppercase", paddingBottom: "0.875rem", marginBottom: "1.25rem", borderBottom: "2px solid var(--navy-dark)" }}>{children}</p>;
}
