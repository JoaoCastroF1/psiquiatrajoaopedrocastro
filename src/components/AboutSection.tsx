import { motion } from "framer-motion";
import { Check } from "lucide-react";
import jpWriting from "@/assets/jp-writing.jpg";

const credentials = [
  "Graduação em Medicina pela Universidade Federal de Minas Gerais (UFMG);",
  "Residência Médica em Psiquiatria pelo Hospital Municipal Odilon Behrens (HOB) — RQE 62148;",
  "Residência Médica em Psicogeriatria pelo Hospital das Clínicas da UFMG — RQE 66521;",
  "Mestrando em Neurociências pela Universidade Federal de Minas Gerais (UFMG), com pesquisa em psicopatologia e psicofarmacologia;",
  "Pós-graduação Lato Sensu em Terapia Cognitivo-Comportamental;",
  "Formação teórico-prática em Estimulação Magnética Transcraniana (Clínica Mangabeiras);",
  "Formação complementar em Psicogeriatria, Transtornos do Sono e Psicoterapia Assistida por Psicodélicos.",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img
                src={jpWriting}
                alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatra formado pela UFMG"
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
            <h2 className="font-display text-[1.75rem] md:text-4xl lg:text-[2.5rem] font-normal text-foreground leading-[1.15] mb-3">
              <em className="text-deep-green not-italic">Dr.</em> João Pedro Castro Martins Farias
            </h2>
            <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.15em] text-deep-green mb-8 md:mb-10">
              Psiquiatria · Psicogeriatria
              <span className="block md:inline md:ml-2 text-muted-foreground/80 mt-1 md:mt-0">
                CRM-MG 83920 · RQE 62148 · RQE 66521
              </span>
            </p>

            <ul className="space-y-3 md:space-y-4 mb-10">
              {credentials.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-3 font-body text-[15px] md:text-base text-foreground leading-[1.55]"
                >
                  <Check
                    className="w-4 h-4 md:w-5 md:h-5 text-deep-green shrink-0 mt-[5px] md:mt-1"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 md:space-y-5 font-body text-[15px] md:text-base text-muted-foreground leading-[1.7] md:leading-[1.8] border-t border-border pt-8">
              <p>
                Atuo na interface entre psiquiatria clínica e neurociências, com interesse particular em transtornos do humor, ansiedade, TDAH no adulto, esquizofrenia, neuropsiquiatria e síndromes demenciais. Minha prática integra rigor diagnóstico, psicofarmacologia baseada em evidências e investigação de quadros que frequentemente passam despercebidos em avaliações superficiais.
              </p>
              <p>
                Já realizei mais de 3.000 consultas psiquiátricas, com passagem por todos os níveis da Rede de Atenção Psicossocial de Belo Horizonte — urgência, ambulatório e consultório particular. Tenho produção científica publicada em periódicos nacionais e internacionais, incluindo trabalho apresentado no <em>International Psychogeriatrics Congress</em> em Buenos Aires.
              </p>
              <p>
                Acompanho a literatura em áreas ainda pouco exploradas na clínica convencional, como neuromodulação não invasiva e psicoterapia assistida por psicodélicos, e realizo consultas domiciliares para pacientes com dificuldade de deslocamento, especialmente idosos. O objetivo é sempre direto: que cada paciente, e quando necessário cada família, compreenda o que está acontecendo e encontre um caminho concreto de melhora.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
