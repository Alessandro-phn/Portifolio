"use client";
import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, ArrowDown, Download, ExternalLink } from "lucide-react";

const tags = [
  "Compras Estratégicas", "Supply Chain", "Strategic Sourcing",
  "Power BI", "SAP", "Análise de Dados", "IA Aplicada"
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(30,58,95,0.5) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Horizontal rule top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">

          {/* Left — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Gold ring */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, #C9A84C, transparent, #C9A84C)",
                  padding: "1px",
                  borderRadius: "18px",
                }}
              >
                <div className="w-full h-full bg-navy-950 rounded-2xl" />
              </div>

              {/* Photo placeholder — replace with real image */}
              <div
                className="relative z-10 w-72 h-80 lg:w-80 lg:h-96 rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(201,168,76,0.25)" }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(160deg, #162D4A 0%, #0E1F34 50%, #0A1628 100%)",
                  }}
                >
                  <div className="text-center">
                    <div className="monogram text-6xl mb-3">AGP</div>
                    <div className="text-navy-100/30 text-xs tracking-widest uppercase">
                      Foto Profissional
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass-card rounded-xl px-4 py-3 z-20"
              >
                <div className="text-xs text-navy-100/60 mb-1">Experiência</div>
                <div className="text-gold-400 font-bold text-xl font-display">25+</div>
                <div className="text-xs text-navy-100/60">anos</div>
              </motion.div>

              {/* Top badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-6 glass-card rounded-xl px-4 py-3 z-20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs text-navy-100/70">Disponível</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-10 bg-gold-500" />
              <span className="section-label">Portfólio Profissional</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h1 className="display-heading text-white" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 1.05 }}>
                Alessandro
                <br />
                <span className="gradient-text">Guimarães</span>
                <br />
                Pereira
              </h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-navy-100/70 text-lg leading-relaxed max-w-xl"
            >
              Transformando experiência operacional, compras estratégicas e tecnologia em{" "}
              <span className="text-gold-400 font-medium">resultados mensuráveis</span>{" "}
              para empresas.
            </motion.p>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.05 }}
                  className="px-3 py-1 text-xs font-medium tracking-wide rounded-sm"
                  style={{
                    background: "rgba(201,168,76,0.08)",
                    border: "1px solid rgba(201,168,76,0.2)",
                    color: "rgba(232,201,106,0.85)",
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projetos"
                className="flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-semibold text-sm tracking-wide rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
              >
                <ExternalLink size={14} />
                Ver Projetos
              </a>
              <a
                href="/cv-alessandro-pereira.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 border border-gold-500/40 hover:border-gold-500 text-gold-400 font-semibold text-sm tracking-wide rounded-sm transition-all duration-300 hover:bg-gold-500/10"
              >
                <Download size={14} />
                Download CV
              </a>
              <a
                href="#contato"
                className="flex items-center gap-2 px-6 py-3 border border-navy-600/60 hover:border-navy-500 text-navy-100/60 hover:text-navy-100 font-semibold text-sm tracking-wide rounded-sm transition-all duration-300"
              >
                <Mail size={14} />
                Contato
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex items-center gap-5 pt-2"
            >
              <span className="text-xs text-navy-100/30 tracking-widest uppercase">Redes</span>
              <div className="h-px flex-1 max-w-8 bg-navy-700" />
              <a
                href="https://github.com/Alessandro-phn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-100/40 hover:text-gold-400 transition-colors"
                aria-label="GitHub"
              >
                <GitBranch size={18} />
              </a>
              <a
                href="https://linkedin.com/in/a-g-pereira"
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy-100/40 hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Link2 size={18} />
              </a>
              <a
                href="mailto:pereira-cn@hotmail.com"
                className="text-navy-100/40 hover:text-gold-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-navy-100/30 tracking-widest uppercase">Explorar</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gold-500/50"
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
    </section>
  );
}
