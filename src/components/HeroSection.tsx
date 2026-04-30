import { motion } from "framer-motion";
import jpPortraitJpg from "@/assets/jp-portrait.jpg";
import jpPortraitWebp from "@/assets/jp-portrait.webp";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative flex items-center bg-background overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-6">
              Psiquiatra · Psicogeriatria · Belo Horizonte
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-normal leading-[1.1] text-foreground mb-8">
              Psiquiatria feita com ciência de ponta e a escuta que seu caso{" "}
              <em className="text-deep-green">precisa.</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-6">
              Para adultos que convivem com depressão, ansiedade, TDAH, bipolaridade ou transtornos do humor. E para famílias que acompanham o declínio cognitivo de alguém que amam. Diagnóstico preciso, farmacologia baseada em evidências e tempo de consulta suficiente para entender o que está acontecendo.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
              <span className="font-body text-xs uppercase tracking-[0.12em] text-steel">
                Atendimento particular
              </span>
              <span className="font-body text-xs uppercase tracking-[0.12em] text-steel">
                Nota fiscal emitida para reembolso em planos de saúde
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-all hover:shadow-lg"
              >
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] border border-foreground/20 text-foreground px-8 py-4 hover:bg-foreground/5 hover:border-foreground/30 transition-all"
              >
                Conheça minha abordagem
              </a>
            </div>
            <p className="font-body text-[11px] text-muted-foreground/60 mt-4 tracking-wide">
              Presencial em Belo Horizonte · Telemedicina · Consulta domiciliar
            </p>
            <p className="font-body text-[11px] text-muted-foreground/60 mt-1 tracking-wide">
              Atendimento em Lourdes, próximo aos principais cursinhos da região
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 md:w-80 lg:w-[420px]">
              <picture>
                <source srcSet={jpPortraitWebp} type="image/webp" />
                <img
                  src={jpPortraitJpg}
                  alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatra em Belo Horizonte"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full aspect-[3/4] object-cover object-top grayscale-[30%] contrast-[1.05]"
                />
              </picture>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground/40">
          Role para explorar
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-muted-foreground/30 to-transparent"
        />
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
