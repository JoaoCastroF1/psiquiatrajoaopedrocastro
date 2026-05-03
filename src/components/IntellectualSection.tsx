import { motion } from "framer-motion";
import jpCoat from "@/assets/jp-coat.jpg";

const IntellectualSection = () => {
  return (
    <section className="py-16 md:py-20 bg-graphite">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/80 mb-5">
              Presença intelectual
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-primary-foreground leading-tight mb-8">
              Medicina, neurociência e uma <em>visão multidimensional</em> da saúde mental
            </h2>
            <div className="space-y-5 font-body text-base text-primary-foreground/75 leading-[1.8]">
              <p>
                João Pedro Castro tem formação técnica de alto nível. O que diferencia sua prática clínica é a capacidade de integrar rigor científico com compreensão do contexto de cada paciente. Mestrando em Neurociências, acompanha de perto o que está sendo produzido nas fronteiras da psiquiatria: novos biomarcadores, farmacologia de precisão e abordagens psicoterápicas emergentes.
              </p>
              <p>
                Essa base se traduz em algo concreto para quem está em tratamento: um profissional que explica o raciocínio clínico em cada consulta, revisa hipóteses quando necessário e trata cada caso com a singularidade que ele merece. Dois pacientes com o mesmo diagnóstico raramente precisam do mesmo tratamento.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <img
                src={jpCoat}
                alt="Dr. João Pedro Castro — Mestrando em Neurociências pela UFMG, psiquiatra e psicogeriatra"
                className="brand-photo w-72 md:w-80 lg:w-[380px] aspect-[3/4] object-cover object-top"
                loading="lazy"
              />
              <p className="font-body text-xs text-primary-foreground/75 mt-4 text-center italic">
                Psiquiatra e psicogeriatra. Residências pelo Odilon Behrens e HC/UFMG. Mestrando em Neurociências.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntellectualSection;