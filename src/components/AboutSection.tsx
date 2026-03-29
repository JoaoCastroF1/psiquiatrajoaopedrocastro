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
                alt="Dr. João Pedro Castro — Psiquiatra formado pela UFMG em atendimento clínico"
                className="w-full aspect-[4/5] object-cover grayscale-[20%]"
                loading="lazy"
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
              Formação sólida, visão contemporânea e uma prática clínica centrada na{" "}
              <em className="text-deep-green">singularidade de cada paciente</em>
            </h2>
            <div className="space-y-5 font-body text-base text-muted-foreground leading-[1.8]">
              <p>
                João Pedro Castro é médico psiquiatra e psicogeriatra, formado pela Universidade Federal de Minas Gerais. Realizou residência em Psiquiatria pelo Hospital Odilon Behrens e em Psicogeriatria pelo HC/UFMG, dois dos programas de referência em Minas Gerais. Atualmente é mestrando em Neurociências, com foco em psicopatologia, psicofarmacologia e novas abordagens terapêuticas.
              </p>
              <p>
                Com mais de 3.000 consultas psiquiátricas realizadas, sua trajetória inclui atuação em todos os níveis da Rede de Atenção Psicossocial de Belo Horizonte, supervisão de equipes multidisciplinares e experiência acumulada em urgência, ambulatório e consultório. Essa diversidade de cenários clínicos amplia o repertório diagnóstico e a capacidade de lidar com quadros que outros profissionais podem não reconhecer.
              </p>
              <p>
                Sua prática se distingue pela investigação cuidadosa dos diagnósticos diferenciais. Nem toda tristeza é depressão, nem todo esquecimento é demência, nem toda agitação tem a mesma causa. Essa precisão diagnóstica, aliada ao domínio da psicofarmacologia, permite construir tratamentos que funcionam no longo prazo.
              </p>
              <p>
                João Pedro integra medicação e psicoterapia de forma individualizada, acompanha a literatura científica em áreas ainda pouco exploradas na clínica convencional e realiza consultas domiciliares para pacientes com dificuldade de deslocamento, especialmente idosos. Seu objetivo é direto: que cada paciente, e quando necessário, cada família, compreenda o que está acontecendo e encontre um caminho concreto de melhora.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
