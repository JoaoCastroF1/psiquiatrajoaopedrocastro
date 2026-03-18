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
              Uma prática construída sobre consistência,{" "}
              <em className="text-lime">escuta e repertório</em>
            </h2>
            <div className="space-y-5 font-body text-base text-muted-foreground leading-[1.8]">
              <p>
                João Pedro Castro Martins Farias é médico psiquiatra e psicogeriatra formado pela Universidade Federal de Minas Gerais, com residência em Psiquiatria pelo Hospital Odilon Behrens. Aprovado em medicina aos 16 anos, construiu uma trajetória marcada por disciplina intelectual, sensibilidade clínica e curiosidade genuína pela complexidade humana.
              </p>
              <p>
                Sua prática não se limita ao manejo de sintomas. Cada atendimento integra diagnóstico, subjetividade, contexto biográfico, personalidade, sono, vínculos, trabalho, cognição e projeto de vida. É uma psiquiatria que lê o paciente — não apenas o transtorno.
              </p>
              <p>
                Além da clínica, atua como comunicador científico, palestrante para laboratórios farmacêuticos e criador de projetos em saúde mental corporativa e desenvolvimento humano. Sua abordagem une ciência, linguagem, visão estratégica e uma rara capacidade de articular o complexo com clareza.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
