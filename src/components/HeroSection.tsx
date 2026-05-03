import { motion } from "framer-motion";
import jpPortrait from "@/assets/jp-portrait.jpg";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative flex items-center bg-background overflow-hidden pt-20 lg:pt-24">
      <div className="container mx-auto px-4 py-8 md:py-14 lg:py-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">
              Psiquiatra · Psicogeriatria · Belo Horizonte
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-normal leading-[0.98] text-foreground mb-6 -tracking-[0.005em]">
              Psiquiatria feita com <em>ciência de ponta</em> e a{" "}
              <em>escuta</em> que o seu caso <em>precisa</em>.
            </h1>
            <p className="font-display italic text-lg md:text-xl text-foreground/85 leading-relaxed max-w-2xl mb-5">
              Para adultos que convivem com depressão, ansiedade, TDAH, bipolaridade ou transtornos do humor. E para famílias que acompanham o declínio cognitivo de alguém que amam.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-7">
              Diagnóstico preciso, farmacologia baseada em evidências e tempo de consulta suficiente para entender o que está acontecendo.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm px-7 py-3.5"
              >
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="btn btn-ghost text-sm px-7 py-3.5"
              >
                Conheça minha abordagem
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-4 border-t border-foreground/10 max-w-xl">
              <span className="font-display italic text-xs md:text-sm text-foreground/70">
                Atendimento particular
              </span>
              <span className="text-foreground/30">·</span>
              <span className="font-display italic text-xs md:text-sm text-foreground/70">
                Nota fiscal para reembolso em planos
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
            className="order-1 lg:order-2 lg:col-span-5 flex justify-start lg:justify-end"
          >
            <div className="relative w-56 md:w-64 lg:w-full lg:max-w-[400px]">
              <img
                src={jpPortrait}
                alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatra em Belo Horizonte"
                loading="eager"
                className="brand-photo w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
