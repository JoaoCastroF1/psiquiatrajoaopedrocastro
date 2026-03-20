import { motion } from "framer-motion";
import jpPortrait from "@/assets/jp-portrait.jpg";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end md:items-center bg-background overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Psiquiatra · Psicogeriatria
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-normal leading-[1.1] text-foreground mb-8">
              Psiquiatria com a
              <br />
              profundidade clínica que
              <br />
              <em className="text-deep-green">sua saúde mental</em>
              <br />
              merece.
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-6">
              Cuidado especializado em depressão, ansiedade, TDAH, demências e muito mais. Com rigor científico, escuta ativa e soluções personalizadas.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              <span className="font-body text-xs uppercase tracking-[0.12em] text-warm">
                Apenas consultas particulares
              </span>
              <span className="font-body text-xs uppercase tracking-[0.12em] text-warm">
                Emitimos nota fiscal para reembolso em planos de saúde
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] border border-foreground/20 text-foreground px-8 py-4 hover:bg-foreground/5 transition-colors"
              >
                Conheça minha abordagem
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 md:w-80 lg:w-[420px]">
              <img
                src={jpPortrait}
                alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatria"
                className="w-full aspect-[3/4] object-cover object-top grayscale-[30%] contrast-[1.05]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
