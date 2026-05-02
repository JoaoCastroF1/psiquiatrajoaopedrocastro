import { motion } from "framer-motion";
import { Check } from "lucide-react";
import jpWriting from "@/assets/jp-writing.jpg";

const credentials = [
  "Graduação em Medicina pela UFMG",
  "Residência em Psiquiatria — Hospital Odilon Behrens (RQE 62148)",
  "Residência em Psicogeriatria — HC/UFMG (RQE 66521)",
  "Mestrando em Neurociências — UFMG, com pesquisa em psicopatologia e psicofarmacologia",
  "Pós-graduação Lato Sensu em Terapia Cognitivo-Comportamental",
  "Formação teórico-prática em Estimulação Magnética Transcraniana (Clínica Mangabeiras)",
  "Formação complementar em Psicogeriatria, Transtornos do Sono e Psicoterapia Assistida por Psicodélicos",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header — full width, antes da foto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-10 md:mb-14"
        >
          <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
            <span className="text-coral mr-2">I</span> · Sobre o trabalho
          </p>
          <h2 className="font-display text-[1.65rem] md:text-4xl lg:text-5xl font-normal text-foreground leading-[1.15] mb-3">
            <em className="text-deep-green not-italic">Dr.</em> João Pedro Castro
          </h2>
          <p className="font-body text-[10.5px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
            Psiquiatria · Psicogeriatria
            <span className="block md:inline md:before:content-['__·__'] md:before:whitespace-pre">
              CRM-MG 83920 · RQE 62148 · RQE 66521
            </span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[5fr_7fr] gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={jpWriting}
              alt="Dr. João Pedro Castro — Psiquiatra e Psicogeriatra formado pela UFMG"
              className="brand-photo w-full aspect-[4/5] object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <ul className="space-y-3 md:space-y-3.5 mb-10">
              {credentials.map((item, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 md:gap-3 font-body text-[14px] md:text-[15px] text-foreground leading-[1.5]"
                >
                  <Check
                    className="w-4 h-4 text-deep-green shrink-0 mt-[3px]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="space-y-4 font-body text-[14px] md:text-[15px] text-muted-foreground leading-[1.7] border-t border-border pt-6 md:pt-8">
              <p className="first-letter:font-display first-letter:text-[3.5rem] md:first-letter:text-[4.5rem] first-letter:float-left first-letter:leading-[0.85] first-letter:mr-2.5 first-letter:mt-1 first-letter:text-deep-green">
                Atuo na interface entre psiquiatria clínica e neurociências, com interesse particular em transtornos do humor, ansiedade, TDAH no adulto, esquizofrenia, neuropsiquiatria e síndromes demenciais. Minha prática integra rigor diagnóstico, psicofarmacologia baseada em evidências e investigação de quadros que frequentemente passam despercebidos em avaliações superficiais.
              </p>
              <p>
                Tenho produção científica publicada em periódicos nacionais e internacionais, incluindo trabalho apresentado no <em>International Psychogeriatrics Congress</em> em Buenos Aires.
              </p>
            </div>

            {/* 3.000+ pull stat — Manuscript horizontal rule */}
            <div className="my-10 md:my-12 py-7 md:py-8 border-y border-border grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-5 md:gap-10 items-baseline">
              <span
                aria-hidden="true"
                className="font-display text-[3.5rem] md:text-[5rem] leading-[0.85] text-coral -tracking-[0.02em]"
              >
                3.000+
              </span>
              <p className="font-body text-[13px] md:text-sm text-muted-foreground leading-snug max-w-md">
                consultas psiquiátricas realizadas em urgência, ambulatório e consultório particular.
              </p>
              <p className="font-body text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70 whitespace-nowrap">
                CRM-MG 83920 · RQE 62148 · RQE 66521
              </p>
            </div>

            <div className="space-y-4 font-body text-[14px] md:text-[15px] text-muted-foreground leading-[1.7]">
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
