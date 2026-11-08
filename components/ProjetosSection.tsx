"use client";
import { useRef } from "react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { Github, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { useLanguage } from "@/components/LanguageProvider";

export default function ProjetosSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { language } = useLanguage();
  const en = language === "en";
  const featured = projects.filter((project) => project.slug !== "campo-de-terra-fc");

  return (
    <section id="projetos" ref={ref} style={{ background: "var(--bg-alt)", borderBottom: "1px solid var(--border)", padding: "6rem 2rem", opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "1.5rem" }}>{en ? "Projects" : "Projetos"}</p>
        <h2 className="section-heading" style={{ marginBottom: "1rem" }}>{en ? "Selected procurement and technology projects" : "Projetos selecionados de compras e tecnologia"}</h2>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: 700 }}>
          {en ? "A selection of work and projects connecting procurement, supply chain, and data. Development status and data limitations are identified on each project." : "Uma seleção de trabalhos e projetos que conectam Compras, Supply Chain e dados. O status de desenvolvimento e as limitações dos dados são identificados em cada projeto."}
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", background: "var(--border)", border: "1px solid var(--border)" }}>
          {featured.map((project) => {
            const copy = en ? project.english : project;
            return (
              <article key={project.slug} style={{ background: "#FFFFFF", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem" }}>
                  <div>
                    <span style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--navy-mid)", display: "block", marginBottom: "0.3rem" }}>{copy.category}</span>
                    <h3 style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy-dark)", lineHeight: 1.3 }}>{copy.title}</h3>
                  </div>
                  <span style={{ flexShrink: 0, fontSize: "0.6875rem", fontWeight: 500, padding: "3px 8px", border: "1px solid var(--border)", borderRadius: 3, color: "var(--text-subtle)", whiteSpace: "nowrap" }}>{copy.status}</span>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, flexGrow: 1 }}>{copy.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem" }}>
                  {project.tags.map((tag) => <span key={tag} style={{ fontSize: "0.6875rem", padding: "3px 8px", border: "1px solid var(--border)", borderRadius: 3, color: "var(--text-muted)", background: "var(--bg-alt)" }}>{tag}</span>)}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", paddingTop: "0.75rem", borderTop: "1px solid var(--border)" }}>
                  <Link href={`/projetos/${project.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.8125rem", color: "var(--navy-dark)", textDecoration: "none", fontWeight: 600 }}>
                    {en ? "Project details" : "Detalhes do projeto"} <ArrowRight size={13} />
                  </Link>
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: "0.8125rem", color: "var(--text-muted)", textDecoration: "none" }}><Github size={13} /> {en ? "GitHub profile" : "Perfil no GitHub"}</a>}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
