"use client";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContatoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { language } = useLanguage();
  const en = language === "en";
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [draftOpened, setDraftOpened] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(form.subject || (en ? "Portfolio inquiry" : "Contato via portfólio"));
    const body = encodeURIComponent(`${en ? "Name" : "Nome"}: ${form.name}\nEmail: ${form.email}\n\n${en ? "Message" : "Mensagem"}:\n${form.message}`);
    const link = document.createElement("a");
    link.href = `mailto:pereira-cn@hotmail.com?subject=${subject}&body=${body}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDraftOpened(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    window.setTimeout(() => setDraftOpened(false), 7000);
  };

  const inputStyle: React.CSSProperties = { width: "100%", padding: "10px 12px", fontSize: "0.875rem", border: "1px solid var(--border)", borderRadius: 4, color: "var(--navy-dark)", background: "#fff", outline: "none", transition: "border-color 0.2s", fontFamily: "var(--font-inter)" };
  const labelStyle: React.CSSProperties = { display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "0.4rem" };

  return (
    <section id="contato" ref={ref} style={{ background: "#FFFFFF", padding: "6rem 2rem", opacity: inView ? 1 : 0, transition: "opacity 0.6s ease" }}>
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "1.5rem" }}>{en ? "Contact" : "Contato"}</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", alignItems: "start" }}>
          <div>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>{en ? "Let’s connect" : "Vamos conversar"}</h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "2rem" }}>
              {en ? "Based in Salto, São Paulo, Brazil. Open to remote opportunities with U.S.-based teams that hire in Brazil." : "Baseado em Salto, São Paulo. Aberto a oportunidades remotas com equipes dos EUA que contratam no Brasil."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Mail, label: "pereira-cn@hotmail.com", href: "mailto:pereira-cn@hotmail.com" },
                { icon: Linkedin, label: "linkedin.com/in/a-g-pereira", href: "https://linkedin.com/in/a-g-pereira" },
                { icon: Github, label: "github.com/Alessandro-phn", href: "https://github.com/Alessandro-phn" },
              ].map(({ icon: Icon, label, href }) => <a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.625rem", fontSize: "0.875rem", color: "var(--text-muted)", textDecoration: "none" }}><Icon size={14} style={{ flexShrink: 0 }} />{label}</a>)}
            </div>
          </div>

          <div style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "2rem", background: "var(--bg-alt)" }}>
            {draftOpened ? (
              <div style={{ minHeight: 200, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem", textAlign: "center" }}>
                <p style={{ fontWeight: 600, color: "var(--navy-dark)" }}>{en ? "Email draft opened" : "Rascunho de e-mail aberto"}</p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>{en ? "Review and send it from your email app." : "Revise e envie a mensagem pelo seu aplicativo de e-mail."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }}>
                  <div><label htmlFor="contact-name" style={labelStyle}>{en ? "Name" : "Nome"}</label><input id="contact-name" type="text" required placeholder={en ? "Your name" : "Seu nome"} value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} style={inputStyle} /></div>
                  <div><label htmlFor="contact-email" style={labelStyle}>Email</label><input id="contact-email" type="email" required placeholder="you@example.com" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} style={inputStyle} /></div>
                </div>
                <div><label htmlFor="contact-subject" style={labelStyle}>{en ? "Subject" : "Assunto"}</label><input id="contact-subject" type="text" placeholder={en ? "Opportunity / Project" : "Oportunidade / Projeto"} value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} style={inputStyle} /></div>
                <div><label htmlFor="contact-message" style={labelStyle}>{en ? "Message" : "Mensagem"}</label><textarea id="contact-message" required rows={4} placeholder={en ? "Write your message..." : "Escreva sua mensagem..."} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} style={{ ...inputStyle, resize: "vertical" }} /></div>
                <button type="submit" style={{ padding: "10px 20px", background: "var(--navy-dark)", color: "#fff", fontSize: "0.8125rem", fontWeight: 600, border: "none", borderRadius: 4, cursor: "pointer", fontFamily: "var(--font-inter)" }}>{en ? "Open email draft" : "Abrir rascunho de e-mail"}</button>
                <p style={{ margin: 0, fontSize: "0.75rem", color: "var(--text-subtle)" }}>{en ? "This form opens a draft in your email app; it does not send a message from this website." : "Este formulário abre um rascunho no seu aplicativo de e-mail; o site não envia a mensagem diretamente."}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
