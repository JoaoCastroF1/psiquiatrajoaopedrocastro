import { Head } from "vite-react-ssg";
import jpPortrait from "@/assets/jp-portrait.webp";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const HeroSection = () => {
  return (
    <section className="relative flex items-center bg-background overflow-hidden pt-24 md:pt-28">
      <Head>
        <link rel="preload" as="image" href={jpPortrait} />
      </Head>
      <div className="container mx-auto px-4 py-8 md:py-20 lg:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-start">
          {/* No mobile a coluna vira flex com `order-*` para intercalar a foto
              e os CTAs na primeira dobra; em md+ o block restaura a ordem do DOM */}
          <div className="flex flex-col md:block md:col-span-7 lg:col-span-8">
            <p className="order-1 font-body text-xs uppercase tracking-[0.3em] text-deep-green mb-6 md:mb-8">
              Psiquiatra · Psicogeriatria · Belo Horizonte
            </p>
            <h1 className="order-2 font-display text-4xl md:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-normal leading-[1.08] md:leading-[1.05] text-foreground mb-6 md:mb-10 -tracking-[0.005em]">
              Psiquiatria feita com{" "}
              <em className="text-deep-green whitespace-nowrap">ciência de ponta</em>
              {" "}e a <em className="text-deep-green">escuta</em> que o seu caso{" "}
              <em>precisa</em>.
            </h1>
            <div className="order-3 md:hidden relative w-64 mx-auto mb-6">
              <img
                src={jpPortrait}
                alt="Dr. João Pedro Castro, Psiquiatra e Psicogeriatra em Belo Horizonte"
                loading="eager"
                className="brand-photo w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
            </div>
            <p className="order-5 font-display italic text-base md:text-xl lg:text-[1.4rem] text-foreground/85 leading-relaxed max-w-2xl mb-8">
              Para adultos que convivem com depressão, ansiedade, TDAH, bipolaridade ou transtornos do humor. E para famílias que acompanham o declínio cognitivo de alguém que amam.
            </p>
            <p className="order-6 hidden md:block font-body text-base text-muted-foreground leading-relaxed max-w-2xl mb-10">
              Diagnóstico preciso, farmacologia baseada em evidências e tempo de consulta suficiente para entender o que está acontecendo.
            </p>
            <div className="order-4 flex flex-col sm:flex-row gap-4 mb-8">
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
            <div className="order-7 flex flex-col items-start gap-y-1.5 md:flex-row md:flex-wrap md:items-center md:gap-x-3 md:gap-y-1 pt-6 border-t border-foreground/10">
              <a
                href="#depoimentos"
                className="font-display italic text-xs lg:text-[13px] text-foreground/80 whitespace-nowrap hover:text-deep-green transition-colors"
              >
                <span aria-hidden="true" className="not-italic text-deep-green">★</span> 5,0 nas
                avaliações do Google
              </a>
              <span className="hidden md:inline text-foreground/30">·</span>
              <span className="font-display italic text-xs lg:text-[13px] text-foreground/70 whitespace-nowrap">
                Atendimento particular
              </span>
              <span className="hidden md:inline text-foreground/30">·</span>
              <span className="font-display italic text-xs lg:text-[13px] text-foreground/70 whitespace-nowrap">
                Nota fiscal para reembolso em planos
              </span>
              <span className="hidden md:inline text-foreground/30">·</span>
              <span className="font-display italic text-xs lg:text-[13px] text-foreground/70 whitespace-nowrap">
                Presencial · Telemedicina · Domiciliar
              </span>
            </div>
          </div>

          <div className="hidden md:flex md:col-span-5 lg:col-span-4 justify-center md:justify-end">
            <div className="relative w-72 md:w-full md:max-w-[340px] lg:max-w-[400px]">
              <img
                src={jpPortrait}
                alt="Dr. João Pedro Castro, Psiquiatra e Psicogeriatra em Belo Horizonte"
                loading="eager"
                className="brand-photo w-full aspect-[3/4] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
