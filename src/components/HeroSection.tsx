import { motion } from "framer-motion";
import jpPortrait from "@/assets/jp-portrait.webp";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative flex items-center bg-background overflow-hidden pt-24 md:pt-28">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 md:order-1 md:col-span-7 lg:col-span-8"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-deep-green mb-8">
              Psiquiatra · Psicogeriatria · Belo Horizonte
            </p>
            <h1 className="font-display text-[2.75rem] md:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal leading-[1.05] text-foreground mb-10 -tracking-[0.005em]">
              Psiquiatria feita com{" "}
              <em className="text-deep-green whitespace-nowrap">ciência de ponta</em>
              {" "}e a <em className="text-deep-green">escuta</em> que o seu caso{" "}
              <em>precisa</em>.
            </h1>
            <p className="font-display italic text-lg md:text-xl lg:text-[1.4rem] text-foreground/85 leading-relaxed max-w-2xl mb-8">
              Para adultos que convivem com depressão, ansiedade, TDAH, bipolaridade ou transtornos do humor. E para famílias que acompanham o declínio cognitivo de alguém que amam.
            </p>
            <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Diagnóstico preciso, farmacologia baseada em evidências e tempo de consulta suficiente para entender o que está acontecendo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm px-8 py-4"
              >
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="btn btn-ghost text-sm px-8 py-4"
              >
                Conheça minha abordagem
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-6 border-t border-foreground/10">
              <span className="font-display italic text-xs lg:text-[13px] text-foreground/70 whitespace-nowrap">
                Atendimento particular
              </span>
              <span className="text-foreground/30">·</span>
              <span className="font-display italic text-xs lg:text-[13px] text-foreground/70 whitespace-nowrap">
                Nota fiscal para reembolso em planos
              </span>
              <span className="text-foreground/30">·</span>
              <span className="font-display italic text-xs lg:text-[13px] text-foreground/70 whitespace-nowrap">
                Presencial · Telemedicina · Domiciliar
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="order-1 md:order-2 md:col-span-5 lg:col-span-4 flex justify-center md:justify-end"
          >
            <div className="relative w-72 md:w-full md:max-w-[340px] lg:max-w-[400px]">
              <img
                src={jpPortrait}
                alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatra em Belo Horizonte"
                loading="eager"
                className="brand-photo w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
