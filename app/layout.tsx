import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alessandro Guimarães Pereira | Analista de Compras e Comprador PL",
  description:
    "Analista de Compras e Comprador PL com experiência em compras industriais, strategic sourcing, supply chain, Power BI e SAP.",
  keywords: [
    "compras estratégicas", "supply chain", "strategic sourcing", "Power BI",
    "SAP", "procurement", "análise de dados", "inteligência artificial",
    "Alessandro Pereira", "analista de compras", "comprador pleno"
  ],
  authors: [{ name: "Alessandro Guimarães Pereira" }],
  creator: "Alessandro Guimarães Pereira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://portifolio-ten-nu-b9tokwo17n.vercel.app/",
    title: "Alessandro Guimarães Pereira | Analista de Compras e Comprador PL",
    description: "Experiência em compras industriais, negociação, strategic sourcing, supply chain, Power BI e SAP.",
    siteName: "Alessandro G. Pereira — Portfólio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessandro Guimarães Pereira | Analista de Compras e Comprador PL",
    description: "Analista de Compras e Comprador PL com experiência em compras industriais e supply chain.",
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
    <html lang="pt-BR" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
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
