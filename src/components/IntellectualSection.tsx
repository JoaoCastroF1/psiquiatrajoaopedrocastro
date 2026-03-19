import { motion } from "framer-motion";
import jpCoat from "@/assets/jp-coat.jpg";

const IntellectualSection = () => {
  return (
    <section className="py-24 md:py-32 bg-graphite">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-5">
              Presença intelectual
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-primary-foreground leading-tight mb-8">
              Medicina, neurociência e uma{" "}
              <em className="text-lime">visão multidimensional</em> da saúde mental
            </h2>
            <div className="space-y-5 font-body text-base text-primary-foreground/75 leading-[1.8]">
              <p>
                João Pedro Castro é um profissional com formação de elite e uma visão contemporânea da saúde mental. Além da sólida base médica, ele é mestrando em Neurociências, aprofundando seus conhecimentos em psicopatologia, psicofarmacologia e novas abordagens terapêuticas.
              </p>
              <p>
                Sua prática clínica é informada por uma leitura ampla e interdisciplinar, integrando ciência, humanidades e uma compreensão profunda da condição humana. Essa perspectiva multidimensional se traduz em soluções elegantes e eficazes para os desafios enfrentados por seus pacientes.
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
                alt="Dr. João Pedro Castro"
                className="w-72 md:w-80 lg:w-[380px] aspect-[3/4] object-cover object-top grayscale-[15%] brightness-110"
              />
              <p className="font-body text-xs text-primary-foreground/40 mt-4 text-center italic">
                Um psiquiatra com formação de ponta e visão de futuro.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntellectualSection;
