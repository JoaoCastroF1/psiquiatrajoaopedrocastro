import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AuthorityStrip from "@/components/AuthorityStrip";
import HowItWorksSection from "@/components/HowItWorksSection";
import AboutSection from "@/components/AboutSection";
import AudienceSection from "@/components/AudienceSection";
import StudentsLocalSection from "@/components/StudentsLocalSection";
import ServicesPreview from "@/components/ServicesPreview";
import MethodSection from "@/components/MethodSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import CTASection from "@/components/CTASection";

import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como funciona a primeira consulta psiquiátrica?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A primeira consulta dura em torno de 1 hora e inclui anamnese detalhada, revisão de tratamentos anteriores, análise do contexto de vida e, quando indicado, solicitação de exames laboratoriais para diagnósticos diferenciais.",
      },
    },
    {
      "@type": "Question",
      name: "O atendimento aceita plano de saúde?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O atendimento é particular. Após cada consulta, é emitida nota fiscal que pode ser utilizada para solicitar reembolso ao plano de saúde, conforme as regras da operadora.",
      },
    },
    {
      "@type": "Question",
      name: "Qual a diferença entre psiquiatra e psicólogo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O psiquiatra é médico, com formação em Medicina e residência em Psiquiatria. Pode prescrever medicamentos, solicitar exames e investigar causas orgânicas dos sintomas. O psicólogo conduz psicoterapia.",
      },
    },
    {
      "@type": "Question",
      name: "A consulta pode ser feita por telemedicina?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Consultas por telemedicina estão disponíveis para pacientes em acompanhamento ou para primeiras avaliações, quando adequado ao caso clínico.",
      },
    },
    {
      "@type": "Question",
      name: "São realizadas consultas domiciliares?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Consultas domiciliares são disponibilizadas especialmente para pacientes idosos com dificuldade de deslocamento, quadros demenciais avançados ou outras condições.",
      },
    },
    {
      "@type": "Question",
      name: "Quando procurar um psicogeriatra?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quando há queixas de memória progressivas, mudança de comportamento no idoso, agitação, apatia, confusão mental ou suspeita de demência.",
      },
    },
    {
      "@type": "Question",
      name: "Como agendar uma consulta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O agendamento pode ser feito pelo WhatsApp (31) 99131-5958 ou pelo formulário de contato no site. O retorno é feito em horário comercial.",
      },
    },
    {
      "@type": "Question",
      name: "Ansiedade pode atrapalhar a rotina de estudos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Em alguns casos, ansiedade pode comprometer concentração, sono, resistência ao estresse e capacidade de manter constância sob pressão.",
      },
    },
    {
      "@type": "Question",
      name: "TDAH pode ser confundido com procrastinação ou desorganização?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Em muitos adultos jovens, o transtorno aparece como dificuldade persistente de foco, planejamento, gestão do tempo e conclusão de tarefas.",
      },
    },
    {
      "@type": "Question",
      name: "O tratamento psiquiátrico serve para melhorar nota?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O objetivo do tratamento não é aumentar nota artificialmente, e sim avaliar e tratar condições clínicas que podem estar atrapalhando funcionamento e rotina de estudos.",
      },
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Dr. João Pedro Castro · Psiquiatra e Psicogeriatra em BH"
        description="Psiquiatra e psicogeriatra em Belo Horizonte. Atendimento para depressão, ansiedade, TDAH, bipolaridade, demências e Alzheimer. CRM 83920."
        url="https://www.drjoaopedrocastro.com.br/"
      />
      <JsonLd data={faqJsonLd} />
      <Navbar />
      <HeroSection />
      <AuthorityStrip />
      <HowItWorksSection />
      <AboutSection />
      <TestimonialsSection />
      <AudienceSection />
      <StudentsLocalSection />
      <ServicesPreview />
      <MethodSection />
      <FAQSection />
      <BlogPreviewSection />
      <CTASection />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
