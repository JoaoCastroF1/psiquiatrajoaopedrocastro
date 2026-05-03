import { motion } from "framer-motion";
import { SpiralScribble } from "@/components/brand/scribbles/SpiralScribble";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";
const WA_LINK_PROJECTS =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20palestras%2C%20projetos%20ou%20parcerias.";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-primary-foreground leading-tight mb-6">
            Psiquiatria com a <em>precisão que o seu caso merece</em>
          </h2>
          <p className="font-body text-base md:text-lg text-primary-foreground/70 leading-relaxed mb-8 max-w-xl mx-auto">
            Se você carrega sintomas sem resposta, quer revisar um tratamento que não está funcionando, ou acompanha alguém com declínio cognitivo sem saber o que esperar: o primeiro passo é uma avaliação com tempo e profundidade suficientes para entender o que está acontecendo.
          </p>

          <SpiralScribble className="text-primary-foreground/30 w-12 h-12 mx-auto mb-8" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lime text-sm px-10 py-4"
            >
              Agendar consulta
            </a>
            <a
              href={WA_LINK_PROJECTS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn text-sm px-10 py-4 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Empresas, palestras ou projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
