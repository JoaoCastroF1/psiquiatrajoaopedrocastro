import { motion } from "framer-motion";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";
const WA_LINK_PROJECTS =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20palestras%2C%20projetos%20ou%20parcerias.";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-tight mb-6">
            Psiquiatria com a{" "}
            <em className="text-deep-green">precisão que o seu caso merece</em>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
            Se você carrega sintomas sem resposta, quer revisar um tratamento que não está funcionando, ou acompanha alguém com declínio cognitivo sem saber o que esperar — o primeiro passo é uma avaliação com tempo e profundidade suficientes para entender o que está acontecendo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity"
            >
              Agendar consulta
            </a>
            <a
              href={WA_LINK_PROJECTS}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] border border-foreground/20 text-foreground px-10 py-4 hover:bg-foreground/5 transition-colors"
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
