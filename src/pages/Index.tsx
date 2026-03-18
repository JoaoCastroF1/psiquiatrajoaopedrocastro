import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorityStrip from "@/components/AuthorityStrip";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProjectsSection from "@/components/ProjectsSection";
import IntellectualSection from "@/components/IntellectualSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AuthorityStrip />
      <AboutSection />
      <AudienceSection />
      <ServicesSection />
      <DifferentialsSection />
      <ProjectsSection />
      <IntellectualSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
