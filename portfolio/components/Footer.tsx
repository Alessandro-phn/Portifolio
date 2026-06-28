"use client";
import { GitBranch, Link2, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-gold-500/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="monogram text-2xl mb-3">AGP</div>
            <p className="text-navy-100/40 text-sm leading-relaxed max-w-xs">
              Compras Estratégicas, Supply Chain e Tecnologia aplicada a resultados reais.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="text-xs font-semibold text-navy-100/40 tracking-widest uppercase mb-4">Navegação</div>
            <div className="grid grid-cols-2 gap-2">
              {["Sobre", "Experiência", "Resultados", "Projetos", "Competências", "Blog", "Contato"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm text-navy-100/40 hover:text-gold-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold text-navy-100/40 tracking-widest uppercase mb-4">Redes</div>
            <div className="space-y-3">
              <a href="https://github.com/Alessandro-phn" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-navy-100/40 hover:text-gold-400 transition-colors">
                <GitBranch size={14} /> github.com/Alessandro-phn
              </a>
              <a href="https://linkedin.com/in/a-g-pereira" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-navy-100/40 hover:text-gold-400 transition-colors">
                <Link2 size={14} /> linkedin.com/in/a-g-pereira
              </a>
              <a href="mailto:pereira-cn@hotmail.com"
                className="flex items-center gap-3 text-sm text-navy-100/40 hover:text-gold-400 transition-colors">
                <Mail size={14} /> pereira-cn@hotmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="gold-divider mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-navy-100/30 text-sm">
            Obrigado por visitar meu portfólio.
          </p>
          <p className="text-navy-100/20 text-xs flex items-center gap-1.5">
            © {year} Alessandro Guimarães Pereira. Todos os direitos reservados.
          </p>
          <p className="text-navy-100/20 text-xs flex items-center gap-1">
            Feito com <Heart size={11} className="text-gold-500/50 mx-0.5" /> e Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
