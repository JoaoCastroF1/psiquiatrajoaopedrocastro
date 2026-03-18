import { motion } from "framer-motion";

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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-foreground leading-tight mb-6">
            Um cuidado em saúde mental à altura da{" "}
            <span className="italic">complexidade humana</span>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-12 max-w-xl mx-auto">
            Quando profundidade clínica e presença médica real fazem diferença. O primeiro passo é uma conversa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-10 py-4 hover:opacity-90 transition-opacity"
            >
              Agendar consulta
            </a>
            <a
              href="https://wa.me/5500000000000?text=Olá, gostaria de saber mais sobre palestras, projetos ou parcerias."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] border border-foreground/20 text-foreground px-10 py-4 hover:bg-foreground/5 transition-colors"
            >
              Palestras, empresas ou projetos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
