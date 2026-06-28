"use client";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-white font-semibold text-sm mb-1"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Alessandro G. Pereira
            </p>
            <p className="text-slate-400 text-xs">
              Compras Estratégicas · Supply Chain · Dados e Tecnologia
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Alessandro-phn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href="https://linkedin.com/in/a-g-pereira"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:pereira-cn@hotmail.com"
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="E-mail"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6">
          <p className="text-slate-500 text-xs text-center">
            © {year} Alessandro Guimarães Pereira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
