import { motion } from "framer-motion";
import jpWriting from "@/assets/jp-writing.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={jpWriting}
                alt="Dr. João Pedro Castro em consulta"
                className="w-full aspect-[4/5] object-cover grayscale-[20%]"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Sobre
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-foreground leading-tight mb-8">
              Um psiquiatra com formação de elite e{" "}
              <em className="text-deep-green">visão contemporânea</em>
            </h2>
            <div className="space-y-5 font-body text-base text-muted-foreground leading-[1.8]">
              <p>
                João Pedro Castro é médico psiquiatra e psicogeriatria, formado pela Universidade Federal de Minas Gerais. Ele possui residência em Psiquiatria pelo Hospital Odilon Behrens e em Psicogeriatria pelo HC/UFMG. Atualmente, é mestrando em Neurociências, aprofundando seus conhecimentos em psicopatologia, psicofarmacologia e novas abordagens terapêuticas.
              </p>
              <p>
                Sua prática clínica se destaca pela escuta ativa, empatia e grande domínio de psicofarmacologia e diagnósticos diferenciais. Além disso, integra com maestria diversas abordagens psicoterápicas, trazendo soluções personalizadas para cada paciente.
              </p>
              <p>
                Com atualização científica constante, João Pedro une rigor acadêmico, sensibilidade clínica e uma visão contemporânea da saúde mental. Seu objetivo é resolver os problemas de seus pacientes com eficácia, dedicação e uma abordagem elegante e sutil.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
