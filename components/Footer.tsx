"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "var(--navy-dark)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        padding: "2.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1024,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 400,
            fontSize: "0.9375rem",
            color: "rgba(255,255,255,0.75)",
            letterSpacing: "-0.01em",
          }}
        >
          Alessandro G. Pereira
        </p>

        <div style={{ display: "flex", gap: "2rem" }}>
          {[
            { label: "LinkedIn", href: "https://linkedin.com/in/a-g-pereira" },
            { label: "GitHub", href: "https://github.com/Alessandro-phn" },
            { label: "E-mail", href: "mailto:pereira-cn@hotmail.com" },
          ].map(({ label, href }) => (
            <a
              key={href}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              style={{
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.4)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.9)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
            >
              {label}
            </a>
          ))}
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          © {year} Alessandro Guimarães Pereira
        </p>
      </div>
    </footer>
  );
}
