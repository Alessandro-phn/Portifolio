"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContatoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contato" className="py-20" style={{ background: "#F8FAFC" }}>
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label mb-5">Contato</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="display-heading text-3xl lg:text-4xl mb-4" style={{ color: "#0F172A" }}>
                Vamos conversar
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Aberto a oportunidades, parcerias e projetos. Localizado em Salto, SP —
                disponível para trabalho presencial, híbrido ou remoto.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:pereira-cn@hotmail.com"
                  className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <Mail size={16} className="text-slate-400" />
                  <span className="text-sm">pereira-cn@hotmail.com</span>
                </a>
                <a
                  href="https://github.com/Alessandro-phn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <Github size={16} className="text-slate-400" />
                  <span className="text-sm">github.com/Alessandro-phn</span>
                </a>
                <a
                  href="https://linkedin.com/in/a-g-pereira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-700 hover:text-slate-900 transition-colors"
                >
                  <Linkedin size={16} className="text-slate-400" />
                  <span className="text-sm">linkedin.com/in/a-g-pereira</span>
                </a>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8">
              <form
                onSubmit={(e) => e.preventDefault()}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded text-slate-900 placeholder-slate-300 outline-none focus:border-slate-400 transition-colors bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded text-slate-900 placeholder-slate-300 outline-none focus:border-slate-400 transition-colors bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Assunto</label>
                  <input
                    type="text"
                    placeholder="Ex: Oportunidade / Parceria / Projeto"
                    className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded text-slate-900 placeholder-slate-300 outline-none focus:border-slate-400 transition-colors bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1.5">Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Conte sobre a oportunidade ou projeto..."
                    className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded text-slate-900 placeholder-slate-300 outline-none focus:border-slate-400 transition-colors resize-none bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 text-white text-sm font-semibold rounded hover:bg-slate-700 transition-colors"
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
