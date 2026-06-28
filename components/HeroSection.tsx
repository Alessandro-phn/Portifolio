"use client";
import { Github, Linkedin, Mail, Download, ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white"
      style={{ borderBottom: "1px solid #E2E8F0" }}
    >
      <div className="max-w-5xl mx-auto px-6 pt-20 pb-20 w-full">
        <div className="max-w-2xl">
          <p className="section-label mb-6">Portfólio Profissional</p>

          <h1
            className="display-heading mb-5"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", color: "#0F172A" }}
          >
            Alessandro<br />
            Guimarães Pereira
          </h1>

          <p className="text-base font-medium text-slate-500 mb-3 tracking-wide">
            Compras Estratégicas · Supply Chain · Power BI · Dados e Tecnologia
          </p>

          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
            Experiência prática em operações, compras e tecnologia para transformar
            dados em decisões e resultados.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projetos"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded hover:bg-slate-700 transition-colors"
            >
              Ver projetos
              <ArrowRight size={14} />
            </a>
            <a
              href="/cv-alessandro-pereira.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-700 text-sm font-semibold rounded hover:border-slate-500 transition-colors"
            >
              <Download size={14} />
              Baixar currículo
            </a>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/in/a-g-pereira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-700 transition-colors"
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Alessandro-phn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Github size={15} />
              GitHub
            </a>
            <a
              href="mailto:pereira-cn@hotmail.com"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
            >
              <Mail size={15} />
              pereira-cn@hotmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
