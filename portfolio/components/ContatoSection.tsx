"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, GitBranch, Link2, MessageCircle, Send, CheckCircle } from "lucide-react";

export default function ContatoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production: integrate with Resend / EmailJS / Formspree
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contacts = [
    { icon: Mail, label: "E-mail", value: "pereira-cn@hotmail.com", href: "mailto:pereira-cn@hotmail.com", color: "#C9A84C" },
    { icon: GitBranch, label: "GitHub", value: "Alessandro-phn", href: "https://github.com/Alessandro-phn", color: "#FFFFFF" },
    { icon: Link2, label: "LinkedIn", value: "a-g-pereira", href: "https://linkedin.com/in/a-g-pereira", color: "#0A66C2" },
  ];

  return (
    <section id="contato" className="section-padding" style={{ background: "#080F1E" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-gold-500" />
            <span className="section-label">Contato</span>
          </div>
          <h2 className="display-heading text-white text-4xl lg:text-5xl mb-4">
            Vamos{" "}
            <em className="gradient-text not-italic">conversar</em>
          </h2>
          <p className="text-navy-100/50 text-lg max-w-xl">
            Aberto a oportunidades, parcerias e projetos. Respondo em até 24 horas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-4">
              {contacts.map((c) => {
                const Icon = c.icon;
                return (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card border border-navy-700/50 group"
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                      <Icon size={16} style={{ color: c.color }} />
                    </div>
                    <div>
                      <div className="text-xs text-navy-100/40 uppercase tracking-widest">{c.label}</div>
                      <div className="text-sm text-white/80 group-hover:text-gold-400 transition-colors">{c.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(37,211,102,0.15) 0%, rgba(37,211,102,0.08) 100%)",
                border: "1px solid rgba(37,211,102,0.25)",
                color: "#25D366",
              }}
            >
              <MessageCircle size={18} />
              Enviar mensagem no WhatsApp
            </a>

            <div className="text-xs text-navy-100/30 leading-relaxed">
              Localizado em Salto, SP — Brasil.
              Disponível para oportunidades presenciais, híbridas e remotas.
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-xl p-8 border border-navy-700/50">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-64 gap-4">
                  <CheckCircle size={40} className="text-green-400" />
                  <div className="text-white font-semibold">Mensagem enviada com sucesso!</div>
                  <div className="text-navy-100/50 text-sm">Responderei em até 24 horas.</div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-navy-100/50 uppercase tracking-widest mb-2">Nome</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm text-sm text-white placeholder-navy-100/25 outline-none focus:border-gold-500/50 transition-colors"
                        style={{
                          background: "rgba(22,45,74,0.5)",
                          border: "1px solid rgba(30,58,95,0.8)",
                        }}
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-navy-100/50 uppercase tracking-widest mb-2">E-mail</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-sm text-sm text-white placeholder-navy-100/25 outline-none transition-colors"
                        style={{
                          background: "rgba(22,45,74,0.5)",
                          border: "1px solid rgba(30,58,95,0.8)",
                        }}
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-navy-100/50 uppercase tracking-widest mb-2">Assunto</label>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm text-sm text-white placeholder-navy-100/25 outline-none transition-colors"
                      style={{
                        background: "rgba(22,45,74,0.5)",
                        border: "1px solid rgba(30,58,95,0.8)",
                      }}
                      placeholder="Ex: Oportunidade / Parceria / Projeto"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-navy-100/50 uppercase tracking-widest mb-2">Mensagem</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm text-sm text-white placeholder-navy-100/25 outline-none transition-colors resize-none"
                      style={{
                        background: "rgba(22,45,74,0.5)",
                        border: "1px solid rgba(30,58,95,0.8)",
                      }}
                      placeholder="Conte sobre a oportunidade ou projeto..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm tracking-wide rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
                  >
                    <Send size={16} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
