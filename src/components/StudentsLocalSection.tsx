import { motion } from "framer-motion";
import { MapPin, Brain, Moon, Clock3 } from "lucide-react";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const nearbyCourses = [
  "Hplus Med, Rua dos Timbiras, 1911, Lourdes",
  "Bernoulli, Rua Bernardo Guimarães, 1738, Lourdes",
  "Determinante, Rua da Bahia, 1762, Lourdes",
  "SOMA Pré-Vestibular, Rua dos Guajajaras, 591, Lourdes",
  "Acerta, Rua dos Guajajaras, 618, eixo Centro-Lourdes",
];

const clinicalPoints = [
  {
    icon: Brain,
    title: "Ansiedade e atenção",
    description:
      "Ansiedade intensa pode comprometer concentração, tolerância à pressão, memória de trabalho e constância de estudo.",
  },
  {
    icon: Clock3,
    title: "TDAH e organização",
    description:
      "Em alguns estudantes, o problema central está em desorganização persistente, procrastinação importante, dificuldade de sustentar foco e de concluir tarefas longas.",
  },
  {
    icon: Moon,
    title: "Sono e funcionamento",
    description:
      "Insônia e rotina desregulada costumam piorar atenção, clareza mental, regulação emocional e resistência ao desgaste.",
  },
];

const StudentsLocalSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Lourdes e região
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-6">
            Atendimento psiquiátrico perto dos principais{" "}
            <em className="text-deep-green">cursinhos de Lourdes</em>
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
            Se você estuda na região de Lourdes e sente que ansiedade,
            dificuldade de concentração, insônia, crise de pânico, suspeita de
            TDAH ou esgotamento estão atrapalhando sua rotina, uma avaliação
            psiquiátrica adequada pode ajudar a entender o que está acontecendo
            e indicar o tratamento mais apropriado para o seu caso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="border border-border/60 bg-card/40 p-8">
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="h-5 w-5 text-deep-green" />
                <h3 className="font-display text-xl md:text-2xl text-foreground">
                  Perto da sua rotina de estudos
                </h3>
              </div>

              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                O consultório está em uma região estratégica para quem circula
                por Lourdes e pelo eixo Centro-Lourdes. Isso facilita o cuidado
                com a saúde mental sem deslocamentos longos em fases exigentes
                de cursinho, simulados e revisão.
              </p>

              <ul className="space-y-3">
                {nearbyCourses.map((item, index) => (
                  <li
                    key={index}
                    className="font-body text-sm md:text-base text-foreground border-b border-border/50 pb-3 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mt-6">
                Se você estuda em um desses cursinhos ou em outras instituições
                da região, pode fazer sua avaliação psiquiátrica com mais
                praticidade perto da sua rotina.
              </p>
            </div>

            <div className="border-l-2 border-primary/30 pl-6">
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                Muitos estudantes passam meses tentando compensar no esforço
                algo que, na prática, também pode ter um componente clínico.
                Quando existe um quadro real de saúde mental, tratá-lo
                adequadamente pode ajudar a recuperar estabilidade, rotina e
                capacidade de estudo.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="space-y-5"
          >
            {clinicalPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="border border-border/60 bg-section-alt p-7"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="h-5 w-5 text-deep-green" />
                    <h3 className="font-display text-lg md:text-xl text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}

            <div className="bg-muted/40 p-6">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                O acompanhamento psiquiátrico não substitui estudo, organização
                pedagógica ou preparação acadêmica. Seu papel é avaliar e tratar
                condições de saúde mental que podem comprometer funcionamento,
                constância, sono e concentração quando existe indicação clínica.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Agendar consulta
              </a>

              <a
                href="#faq"
                className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] border border-foreground/20 text-foreground px-8 py-4 hover:bg-foreground/5 transition-colors"
              >
                Entender se meus sintomas merecem avaliação
              </a>
            </div>

            <p className="sr-only">
              Psiquiatra em Lourdes, perto do Bernoulli, Hplus Med, SOMA e
              outros cursinhos da região. Avaliação psiquiátrica para
              ansiedade, TDAH, insônia e sofrimento psíquico em estudantes e
              vestibulandos de Belo Horizonte.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StudentsLocalSection;
