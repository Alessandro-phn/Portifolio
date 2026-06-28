import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Alessandro Guimarães Pereira | Compras Estratégicas & Supply Chain",
  description:
    "Profissional com mais de 25 anos de experiência em Compras Estratégicas, Supply Chain, Power BI, SAP e Inteligência Artificial aplicada a negócios.",
  keywords: [
    "compras estratégicas", "supply chain", "strategic sourcing", "Power BI",
    "SAP", "procurement", "análise de dados", "inteligência artificial",
    "Alessandro Pereira", "gestor de compras"
  ],
  authors: [{ name: "Alessandro Guimarães Pereira" }],
  creator: "Alessandro Guimarães Pereira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://alessandro-phn.vercel.app",
    title: "Alessandro Guimarães Pereira | Compras Estratégicas & Supply Chain",
    description: "Transformando experiência operacional, compras estratégicas e tecnologia em resultados para empresas.",
    siteName: "Alessandro G. Pereira — Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessandro Guimarães Pereira | Compras Estratégicas & Supply Chain",
    description: "Transformando experiência operacional, compras estratégicas e tecnologia em resultados.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
