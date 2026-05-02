import { motion } from "framer-motion";
import jpCoat from "@/assets/jp-coat.jpg";

const credentials = [
  { area: "Medicina", school: "UFMG" },
  { area: "Psiquiatria", school: "Hospital Odilon Behrens" },
  { area: "Psicogeriatria", school: "HC / UFMG" },
  { area: "Mestrando", school: "Neurociências — UFMG" },
];

const IntellectualSection = () => {
  return (
    <section className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-start">
          {/* Photo on the LEFT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <img
              src={jpCoat}
              alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatra, jaleco branco"
              className="brand-photo w-full aspect-[3/4] object-cover object-top"
              loading="lazy"
            />
          </motion.div>

          {/* Body on the RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <p className="font-body text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-5">
              <span className="text-coral mr-2">II</span> · Sobre o médico
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-foreground leading-[1.1] mb-8">
              Dupla residência médica em{" "}
              <em className="text-deep-green">saúde mental.</em>
            </h2>

            <div className="space-y-5 font-body text-[15px] text-muted-foreground leading-[1.75] mb-10">
              <p>
                Psiquiatria pelo Hospital Odilon Behrens. Psicogeriatria pelo
                HC/UFMG. Mestrado em andamento em Neurociências na UFMG. A
                combinação de duas residências em saúde mental é rara no
                consultório particular: amplia o repertório diagnóstico,
                especialmente em quadros que transitam entre a psiquiatria
                geral e o envelhecimento.
              </p>
              <p>
                Tenho produção científica publicada em periódicos nacionais e
                internacionais, incluindo trabalho apresentado no{" "}
                <em>International Psychogeriatrics Congress</em> em Buenos
                Aires.
              </p>
            </div>

            {/* 2×2 credentials grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 pt-8 border-t border-border">
              {credentials.map((c) => (
                <div key={c.area} className="flex flex-col gap-1">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    {c.area}
                  </span>
                  <span className="font-display text-base text-foreground leading-snug">
                    {c.school}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntellectualSection;
