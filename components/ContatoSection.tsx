"use client";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContatoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ nome: "", email: "", assunto: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.assunto || "Contato via portfólio");
    const body = encodeURIComponent(
      `Nome: ${form.nome}\nE-mail: ${form.email}\n\nMensagem:\n${form.mensagem}`
    );
    // Create and click an <a> tag — more reliable than window.location.href
    const a = document.createElement("a");
    a.href = `mailto:pereira-cn@hotmail.com?subject=${subject}&body=${body}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setEnviado(true);
    setForm({ nome: "", email: "", assunto: "", mensagem: "" });
    setTimeout(() => setEnviado(false), 5000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    fontSize: "0.875rem",
    border: "1px solid var(--border)",
    borderRadius: 4,
    color: "var(--navy-dark)",
    background: "#fff",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "var(--font-inter)",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "var(--text-muted)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "0.4rem",
  };

  return (
    <section
      id="contato"
      ref={ref}
      style={{
        background: "#FFFFFF",
        padding: "6rem 2rem",
        opacity: inView ? 1 : 0,
        transition: "opacity 0.6s ease",
      }}
    >
      <div style={{ maxWidth: 1024, margin: "0 auto" }}>
        <p className="label" style={{ marginBottom: "1.5rem" }}>Contato</p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "start",
          }}
        >
          {/* Info */}
          <div>
            <h2 className="section-heading" style={{ marginBottom: "1rem" }}>
              Vamos conversar
            </h2>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                marginBottom: "2rem",
              }}
            >
              Aberto a oportunidades, parcerias e projetos. Localizado em Salto, SP —
              disponível para trabalho presencial, híbrido ou remoto.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: Mail, label: "pereira-cn@hotmail.com", href: "mailto:pereira-cn@hotmail.com" },
                { icon: Linkedin, label: "linkedin.com/in/a-g-pereira", href: "https://linkedin.com/in/a-g-pereira" },
                { icon: Github, label: "github.com/Alessandro-phn", href: "https://github.com/Alessandro-phn" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.625rem",
                    fontSize: "0.875rem",
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--navy-dark)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <Icon size={14} style={{ flexShrink: 0 }} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: 6,
              padding: "2rem",
              background: "var(--bg-alt)",
            }}
          >
            {enviado ? (
              <div
                style={{
                  minHeight: 200,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                  textAlign: "center",
                }}
              >
                <p style={{ fontWeight: 600, color: "var(--navy-dark)" }}>Mensagem enviada.</p>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  Responderei em até 24 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.125rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle}>Nome</label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={form.nome}
                      onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--navy-mid)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = "var(--navy-mid)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Assunto</label>
                  <input
                    type="text"
                    placeholder="Oportunidade / Parceria / Projeto"
                    value={form.assunto}
                    onChange={(e) => setForm({ ...form, assunto: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = "var(--navy-mid)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Mensagem</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Descreva a oportunidade ou projeto..."
                    value={form.mensagem}
                    onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--navy-mid)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    background: "var(--navy-dark)",
                    color: "#fff",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    border: "none",
                    borderRadius: 4,
                    cursor: "pointer",
                    transition: "background 0.2s",
                    fontFamily: "var(--font-inter)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--navy-mid)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--navy-dark)")}
                >
                  Enviar mensagem
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
