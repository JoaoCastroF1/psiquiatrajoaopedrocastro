import { motion } from "framer-motion";
import { MapPin, Brain, Moon, Clock3, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const nearbyCourses = [
  { name: "Hplus Med", address: "Rua dos Timbiras, 1911, Lourdes" },
  { name: "Bernoulli", address: "Rua Bernardo Guimarães, 1738, Lourdes" },
  { name: "Determinante", address: "Rua da Bahia, 1762, Lourdes" },
  { name: "SOMA Pré-Vestibular", address: "Rua dos Guajajaras, 591, Lourdes" },
  { name: "Acerta", address: "Rua dos Guajajaras, 618, Centro-Lourdes" },
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
      "Desorganização persistente, procrastinação importante, dificuldade de sustentar foco e de concluir tarefas longas podem indicar TDAH e merecem avaliação clínica.",
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
    <section className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Lourdes e região
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            Atendimento psiquiátrico perto dos principais{" "}
            <em className="text-deep-green">cursinhos de Lourdes</em>
          </h2>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mt-6 max-w-xl">
            Se você estuda na região de Lourdes e sente que ansiedade,
            dificuldade de concentração, insônia, crise de pânico, suspeita de
            TDAH ou esgotamento estão atrapalhando sua rotina, uma avaliação
            psiquiátrica adequada pode ajudar a entender o que está acontecendo
            e indicar o tratamento mais apropriado para o seu caso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column — proximity + context */}
          <div className="space-y-10">
            {/* Nearby courses */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-lg p-6 md:p-8 border border-border"
            >
              <div className="flex items-center gap-3 mb-5">
                <MapPin className="h-5 w-5 text-deep-green" />
                <h3 className="font-display text-lg md:text-xl font-medium text-foreground">
                  Perto da sua rotina de estudos
                </h3>
              </div>

              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                O consultório está em uma região estratégica para quem circula
                por Lourdes e pelo eixo Centro-Lourdes, facilitando o cuidado
                com a saúde mental sem deslocamentos longos em fases exigentes
                de cursinho, simulados e revisão.
              </p>

              <ul className="space-y-3">
                {nearbyCourses.map((course, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm font-body"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-deep-green shrink-0" />
                    <span>
                      <span className="font-medium text-foreground">
                        {course.name}
                      </span>
                      <span className="text-muted-foreground">
                        {" "}— {course.address}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-body text-xs text-muted-foreground leading-relaxed mt-6 italic">
                Se você estuda em um desses cursinhos ou em outras instituições
                da região, pode fazer sua avaliação psiquiátrica com mais
                praticidade perto da sua rotina.
              </p>
            </motion.div>

            {/* Context paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-l-2 border-primary/30 pl-6"
            >
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                Muitos estudantes passam meses tentando compensar no esforço
                algo que, na prática, também pode ter um componente clínico.
                Quando existe um quadro real de saúde mental, tratá-lo
                adequadamente pode ajudar a recuperar estabilidade, rotina e
                capacidade de estudo.
              </p>
            </motion.div>
          </div>

          {/* Right column — clinical points + CTA */}
          <div className="space-y-6">
            {clinicalPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex gap-4"
                >
                  <div className="mt-1 shrink-0">
                    <Icon className="h-5 w-5 text-deep-green" />
                  </div>
                  <div>
                    <h4 className="font-display text-base md:text-lg font-medium text-foreground mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}

            {/* Ethical disclaimer */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex gap-3 bg-muted/50 rounded-md p-4 mt-4"
            >
              <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                O acompanhamento psiquiátrico não substitui estudo, organização
                pedagógica ou preparação acadêmica. Seu papel é avaliar e tratar
                condições de saúde mental que podem comprometer funcionamento,
                constância, sono e concentração quando existe indicação clínica.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <Button asChild size="lg">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar consulta
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contato">
                  Entender se meus sintomas merecem avaliação
                </a>
              </Button>
            </motion.div>

            {/* SEO-friendly hidden text */}
            <p className="font-body text-[11px] text-muted-foreground/60 leading-relaxed mt-6">
              Psiquiatra em Lourdes, perto do Bernoulli, Hplus Med, SOMA e
              outros cursinhos da região. Avaliação psiquiátrica para ansiedade,
              TDAH, insônia e sofrimento psíquico em estudantes e adultos jovens
              de Belo Horizonte.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentsLocalSection;
