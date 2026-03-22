import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorityStrip from "@/components/AuthorityStrip";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import ServicesPreview from "@/components/ServicesPreview";
import DifferentialsPreview from "@/components/DifferentialsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AuthorityStrip />
      <AboutSection />
      <AudienceSection />
      <ServicesPreview />
      <DifferentialsPreview />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
