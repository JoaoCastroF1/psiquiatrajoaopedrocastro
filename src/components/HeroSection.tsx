import { motion } from "framer-motion";
import jpPortrait from "@/assets/jp-portrait.jpg";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative flex items-center bg-primary text-primary-foreground overflow-hidden pt-24 lg:pt-28">
      {/* Subtle dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1 lg:col-span-7"
          >
            <p className="font-body text-xs uppercase tracking-[0.3em] text-lime mb-8">
              Psiquiatra · Psicogeriatria · Belo Horizonte
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] font-normal leading-[0.95] mb-10 -tracking-[0.005em]">
              Psiquiatria feita com{" "}
              <em className="text-lime">ciência de ponta</em>
              {" "}e a <em className="text-lime">escuta</em> que o seu caso{" "}
              <em>precisa</em>.
            </h1>
            <p className="font-display italic text-xl md:text-[1.4rem] text-primary-foreground/85 leading-relaxed max-w-2xl mb-8">
              Para adultos que convivem com depressão, ansiedade, TDAH, bipolaridade ou transtornos do humor. E para famílias que acompanham o declínio cognitivo de alguém que amam.
            </p>
            <p className="font-body text-base text-primary-foreground/70 leading-relaxed max-w-2xl mb-10">
              Diagnóstico preciso, farmacologia baseada em evidências e tempo de consulta suficiente para entender o que está acontecendo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime text-sm px-8 py-4"
              >
                Agendar consulta
              </a>
              <a
                href="#sobre"
                className="btn text-sm px-8 py-4 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Conheça minha abordagem
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-6 border-t border-primary-foreground/15 max-w-xl">
              <span className="font-display italic text-sm text-primary-foreground/65">
                Atendimento particular
              </span>
              <span className="text-primary-foreground/30">·</span>
              <span className="font-display italic text-sm text-primary-foreground/65">
                Nota fiscal para reembolso
              </span>
              <span className="text-primary-foreground/30">·</span>
              <span className="font-display italic text-sm text-primary-foreground/65">
                Presencial · Telemedicina · Domiciliar
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 md:w-80 lg:w-full lg:max-w-[440px]">
              <img
                src={jpPortrait}
                alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatra em Belo Horizonte"
                loading="eager"
                className="brand-photo w-full aspect-[3/4] object-cover object-top"
              />
              {/* Vignette para integrar com bg dark */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
