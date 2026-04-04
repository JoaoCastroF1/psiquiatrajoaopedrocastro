import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorityStrip from "@/components/AuthorityStrip";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import AudienceSection from "@/components/AudienceSection";
import StudentsLocalSection from "@/components/StudentsLocalSection";
import ServicesPreview from "@/components/ServicesPreview";
import DifferentialsPreview from "@/components/DifferentialsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AuthorityStrip />
      <AboutSection />
      <ApproachSection />
      <AudienceSection />
      <StudentsLocalSection />
      <ServicesPreview />
      <DifferentialsPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactFormSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
