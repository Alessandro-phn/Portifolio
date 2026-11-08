import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: "Alessandro Guimarães Pereira | Senior Buyer & Procurement Professional",
  description:
    "Senior Buyer based in Brazil with experience in strategic sourcing, supplier development, procurement analytics, Power BI, and SAP. Open to remote opportunities with U.S. teams hiring in Brazil.",
  keywords: [
    "Senior Buyer", "Procurement Analyst", "Strategic Sourcing", "Supply Chain",
    "Procurement Analytics", "Power BI", "SAP", "Alessandro Pereira",
    "remote procurement Brazil", "supplier development"
  ],
  authors: [{ name: "Alessandro Guimarães Pereira" }],
  creator: "Alessandro Guimarães Pereira",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portifolio-ten-nu-b9tokwo17n.vercel.app/",
    title: "Alessandro Guimarães Pereira | Senior Buyer & Procurement Professional",
    description: "Strategic sourcing, supplier development, procurement analytics, and supply chain experience.",
    siteName: "Alessandro G. Pereira — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alessandro Guimarães Pereira | Senior Buyer",
    description: "Senior Buyer with experience in strategic sourcing, procurement, and supply chain.",
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
