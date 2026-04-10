import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHead from "@/components/PageHead";
import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const Atuacao = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Áreas de Atuação — Dr. João Pedro Castro | Psiquiatra em BH"
        description="Condições tratadas: depressão, ansiedade, TDAH, bipolaridade, demências e Alzheimer. Diagnóstico preciso e farmacologia baseada em evidências."
        url="https://drjoaopedrocastro.com.br/atuacao"
      />
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Breadcrumbs items={[{ label: "Áreas de atuação" }]} />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Áreas de atuação
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
              Condições tratadas com{" "}
              <em className="text-deep-green">profundidade clínica</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Cada quadro psiquiátrico tem especificidades que mudam o diagnóstico e o tratamento. Conheça as condições acompanhadas nesta prática clínica.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection showHeader={false} />
      <DifferentialsSection />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity"
          >
            Agendar consulta
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Atuacao;
