import { motion } from "framer-motion";
import jpPortrait from "@/assets/jp-portrait.jpg";

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
              Psiquiatra · Psicogeriatra
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-medium leading-[1.1] text-foreground mb-8">
              Psiquiatria com
              <br />
              profundidade clínica,
              <br />
              <span className="italic">inteligência humana</span>
              <br />
              e visão contemporânea.
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-10">
              Cuidado em saúde mental com rigor científico, escuta sofisticada e leitura fina da singularidade de cada paciente. Psiquiatria e psicogeriatria para adultos, idosos e contextos que exigem presença médica real.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5500000000000"
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
                Conhecer a abordagem
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
                alt="Dr. João Pedro Castro Martins Farias — Psiquiatra e Psicogeriatra"
                className="w-full aspect-[3/4] object-cover object-top grayscale-[30%] contrast-[1.05]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};

export default HeroSection;
