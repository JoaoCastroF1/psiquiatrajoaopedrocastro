import { motion } from "framer-motion";
import jpPortrait from "@/assets/jp-portrait.jpg";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative flex items-center bg-background overflow-hidden pt-20 md:pt-24 lg:pt-28">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 md:order-1 md:col-span-7 flex flex-col justify-center"
          >
            <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.3em] text-deep-green mb-6 md:mb-8">
              Psiquiatra · Psicogeriatria · Belo Horizonte
            </p>
            <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-[2.75rem] lg:text-6xl xl:text-[5rem] font-normal leading-[0.98] text-foreground mb-6 md:mb-8 lg:mb-10 -tracking-[0.005em]">
              Psiquiatria feita com{" "}
              <em className="text-deep-green">ciência de ponta</em>
              {" "}e a <em className="text-deep-green">escuta</em> que o seu caso{" "}
              <em>precisa</em>.
            </h1>
            <p className="font-display italic text-lg md:text-xl lg:text-[1.4rem] text-foreground/85 leading-relaxed max-w-2xl mb-6 md:mb-8">
              Para adultos que convivem com depressão, ansiedade, TDAH, bipolaridade ou transtornos do humor. E para famílias que acompanham o declínio cognitivo de alguém que amam.
            </p>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mb-8 md:mb-10">
              Diagnóstico preciso, farmacologia baseada em evidências e tempo de consulta suficiente para entender o que está acontecendo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6 md:mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm px-6 md:px-8 py-3.5 md:py-4"
              >
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="btn btn-ghost text-sm px-6 md:px-8 py-3.5 md:py-4"
              >
                Conheça minha abordagem
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 md:gap-x-5 gap-y-2 pt-5 md:pt-6 border-t border-foreground/10 max-w-xl">
              <span className="font-display italic text-xs md:text-sm text-foreground/70">
                Atendimento particular
              </span>
              <span className="text-foreground/30">·</span>
              <span className="font-display italic text-xs md:text-sm text-foreground/70">
                Nota fiscal para reembolso
              </span>
              <span className="text-foreground/30">·</span>
              <span className="font-display italic text-xs md:text-sm text-foreground/70">
                Presencial · Telemedicina · Domiciliar
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="order-1 md:order-2 md:col-span-5 flex"
          >
            <div className="relative w-full">
              <img
                src={jpPortrait}
                alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatra em Belo Horizonte"
                loading="eager"
                className="brand-photo w-full h-full min-h-[320px] md:min-h-full aspect-[3/4] md:aspect-auto object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
