import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import ExperienciaSection from "@/components/ExperienciaSection";
import ResultadosSection from "@/components/ResultadosSection";
import ProjetosSection from "@/components/ProjetosSection";
import CompetenciasSection from "@/components/CompetenciasSection";
import CertificacoesSection from "@/components/CertificacoesSection";
import BlogSection from "@/components/BlogSection";
import ContatoSection from "@/components/ContatoSection";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <HeroSection />
      <SobreSection />
      <ExperienciaSection />
      <ResultadosSection />
      <ProjetosSection />
      <CompetenciasSection />
      <CertificacoesSection />
      <BlogSection />
      <ContatoSection />
    </>
  );
}
