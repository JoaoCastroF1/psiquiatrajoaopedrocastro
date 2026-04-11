import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain,
  Moon,
  Clock3,
  AlertCircle,
  MapPin,
  BookOpen,
  HeartPulse,
  ArrowRight,
  Zap,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20sou%20vestibulando%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const nearbyCourses = [
  { name: "Hplus Med", address: "Rua dos Timbiras, 1911, Lourdes" },
  { name: "Bernoulli", address: "Rua Bernardo Guimarães, 1738, Lourdes" },
  { name: "Determinante", address: "Rua da Bahia, 1762, Lourdes" },
  { name: "SOMA Pré-Vestibular", address: "Rua dos Guajajaras, 591, Lourdes" },
  { name: "Acerta", address: "Rua dos Guajajaras, 618, Centro-Lourdes" },
];

const symptoms = [
  {
    icon: Brain,
    title: "Ansiedade intensa antes de provas",
    description:
      "Taquicardia, tremores, brancos na hora da prova, sensação constante de que vai dar errado. A ansiedade de desempenho pode comprometer o rendimento mesmo de quem estudou bem.",
  },
  {
    icon: Clock3,
    title: "Dificuldade de concentração e organização",
    description:
      "Não conseguir manter o foco em aulas longas, procrastinar tarefas importantes, dificuldade de seguir cronogramas e completar simulados. Pode ser hábito — mas também pode indicar TDAH.",
  },
  {
    icon: Moon,
    title: "Insônia e rotina desregulada",
    description:
      "Dormir tarde, acordar exausto, noites de sono fragmentado. A privação de sono piora atenção, memória de trabalho, regulação emocional e tolerância ao estresse.",
  },
  {
    icon: HeartPulse,
    title: "Crises de pânico e somatização",
    description:
      "Episódios súbitos de medo intenso, falta de ar, dor no peito, tontura. Sintomas físicos sem causa médica aparente que se intensificam em períodos de pressão acadêmica.",
  },
  {
    icon: Zap,
    title: "Esgotamento e perda de motivação",
    description:
      "Sensação de não aguentar mais, perda de prazer em atividades que antes eram satisfatórias, irritabilidade constante. O esgotamento pode evoluir para um quadro depressivo.",
  },
  {
    icon: BookOpen,
    title: "Queda de rendimento inexplicável",
    description:
      "Estudar muito e não render, esquecer conteúdo já revisado, não conseguir articular raciocínios em redações ou questões abertas. Quando o esforço não se traduz em resultado, pode haver um componente clínico.",
  },
];

const differentials = [
  {
    title: "Avaliação com profundidade clínica",
    description:
      "Consulta com tempo suficiente para entender o que está acontecendo: ouvir sua história, seus sintomas, seu funcionamento e construir uma hipótese diagnóstica antes de qualquer prescrição.",
  },
  {
    title: "Farmacologia baseada em evidências",
    description:
      "Se houver indicação de medicação, ela será escolhida com base na melhor evidência científica disponível, considerando eficácia, perfil de efeitos colaterais e impacto no desempenho cognitivo.",
  },
  {
    title: "Articulação com outros profissionais",
    description:
      "Comunicação com psicólogos, pedagogos e outros profissionais que acompanham o estudante, quando necessário, para garantir um cuidado integrado.",
  },
];

const relatedArticles = [
  { slug: "ansiedade-no-vestibular", title: "Ansiedade no vestibular: quando preocupação vira transtorno" },
  { slug: "tdah-adultos-jovens-estudos", title: "TDAH em adultos jovens e o impacto nos estudos" },
  { slug: "sono-e-memoria-estudantes", title: "Sono e memória: o que estudantes precisam saber" },
  { slug: "crise-de-ansiedade-o-que-acontece-no-corpo", title: "Crise de ansiedade: o que acontece no corpo" },
  { slug: "como-saber-se-tenho-tdah", title: "Como saber se tenho TDAH?" },
  { slug: "burnout-esgotamento-profissional", title: "Burnout e esgotamento: sinais de alerta" },
];

const faqItems = [
  {
    q: "Preciso mesmo de um psiquiatra ou é só estresse de vestibular?",
    a: "Nem todo sofrimento durante o vestibular é doença. Mas quando ansiedade, insônia, dificuldade de concentração ou esgotamento passam a comprometer significativamente o funcionamento, o rendimento e a qualidade de vida, uma avaliação psiquiátrica ajuda a distinguir o que é reação normal de pressão do que é um quadro clínico que precisa de tratamento.",
  },
  {
    q: "Tomar medicação psiquiátrica vai me deixar lento ou prejudicar os estudos?",
    a: "Esse é um dos mitos mais comuns. A escolha do medicamento leva em conta justamente o impacto cognitivo. Em muitos casos, tratar adequadamente um quadro de ansiedade ou TDAH melhora — e não piora — a capacidade de concentração, memória e constância.",
  },
  {
    q: "Como funciona a primeira consulta?",
    a: "É uma avaliação ampla, com tempo suficiente para entender sua história, seus sintomas, seu funcionamento e o contexto da sua rotina de estudos. Nenhuma medicação é prescrita sem antes haver clareza sobre o que está acontecendo.",
  },
  {
    q: "Meus pais precisam participar da consulta?",
    a: "Para maiores de 18 anos, a consulta é individual e sigilosa. Para menores de idade, a presença de um responsável é necessária. Em qualquer caso, a participação da família pode ser combinada quando for clinicamente relevante.",
  },
  {
    q: "O consultório é perto do meu cursinho?",
    a: "O consultório fica na Rua dos Timbiras, 1940, sala 1515 — no coração de Lourdes, a poucos minutos do Bernoulli, Hplus Med, SOMA, Determinante e Acerta. A ideia é facilitar o cuidado com a saúde mental sem deslocamentos longos.",
  },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Saúde Mental para Vestibulandos e Estudantes — Dr. João Pedro Castro",
  description:
    "Atendimento psiquiátrico especializado para vestibulandos e universitários em Belo Horizonte. Ansiedade, TDAH, insônia, esgotamento e crises de pânico.",
  url: "https://drjoaopedrocastro.com.br/vestibulandos",
  specialty: { "@type": "MedicalSpecialty", name: "Psychiatry" },
  about: [
    { "@type": "MedicalCondition", name: "Ansiedade de desempenho" },
    { "@type": "MedicalCondition", name: "TDAH" },
    { "@type": "MedicalCondition", name: "Insônia" },
    { "@type": "MedicalCondition", name: "Síndrome de Burnout" },
  ],
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  },
};

const VestibulandoEspecialista = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Psiquiatra para Vestibulandos em BH — Ansiedade, TDAH, Insônia | Dr. João Pedro Castro"
        description="Atendimento psiquiátrico para vestibulandos e estudantes em Belo Horizonte. Avaliação de ansiedade, TDAH, insônia e esgotamento. Consultório em Lourdes, perto dos principais cursinhos."
        url="https://drjoaopedrocastro.com.br/vestibulandos"
      />
      <JsonLd data={pageJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Breadcrumbs items={[{ label: "Vestibulandos" }]} />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Saúde mental para estudantes
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-normal text-foreground leading-[1.1] mb-8">
              Quando a pressão do vestibular passa do limite,{" "}
              <em className="text-deep-green">é hora de avaliar.</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-4">
              Ansiedade, dificuldade de concentração, insônia e esgotamento são queixas frequentes entre vestibulandos e universitários. Quando esses sintomas comprometem o rendimento, o sono e a qualidade de vida, uma avaliação psiquiátrica pode ajudar a entender o que está acontecendo — e indicar se existe um quadro clínico que merece tratamento.
            </p>
            <p className="font-body text-sm text-muted-foreground">
              Consultório em Lourdes, perto dos principais cursinhos de BH.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <Button asChild size="lg">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                  Agendar consulta
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/avaliacao">Fazer avaliação de sintomas</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Sinais de alerta
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Quando o problema pode ser{" "}
              <em className="text-deep-green">mais do que estresse</em>
            </h2>
            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mt-5 max-w-xl">
              Alguns sintomas são esperados em fases de pressão. Mas quando se tornam persistentes, intensos ou incapacitantes, podem indicar um quadro que precisa de atenção clínica.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {symptoms.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-card border border-border p-6 md:p-8"
                >
                  <Icon className="h-5 w-5 text-deep-green mb-4" />
                  <h3 className="font-display text-lg font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-lg"
            >
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
                Abordagem clínica
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-6">
                Como funciona o{" "}
                <em className="text-deep-green">atendimento</em>
              </h2>
              <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
                O objetivo é entender o que está acontecendo antes de prescrever qualquer coisa. Uma avaliação bem feita evita diagnósticos precipitados, medicações desnecessárias e tratamentos genéricos.
              </p>

              <div className="mt-10 space-y-8">
                {differentials.map((d, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                  >
                    <h3 className="font-display text-base md:text-lg font-medium text-foreground mb-2">
                      {d.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">
                      {d.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Location card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              <div className="bg-card border border-border p-6 md:p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="h-5 w-5 text-deep-green" />
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground">
                    Perto da sua rotina de estudos
                  </h3>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                  O consultório fica na <strong>Rua dos Timbiras, 1940, sala 1515, Lourdes</strong> — a poucos minutos dos principais cursinhos da região, facilitando o cuidado com a saúde mental sem deslocamentos longos.
                </p>
                <ul className="space-y-3">
                  {nearbyCourses.map((course, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm font-body">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-deep-green shrink-0" />
                      <span>
                        <span className="font-medium text-foreground">{course.name}</span>
                        <span className="text-muted-foreground"> — {course.address}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ethical disclaimer */}
              <div className="flex gap-3 bg-muted/50 rounded-md p-4">
                <AlertCircle className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                <p className="font-body text-xs text-muted-foreground leading-relaxed">
                  O acompanhamento psiquiátrico não substitui estudo, organização pedagógica ou preparação acadêmica. Seu papel é avaliar e tratar condições de saúde mental que podem comprometer funcionamento, constância, sono e concentração quando existe indicação clínica.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Agendar consulta
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-section-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Dúvidas frequentes
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Perguntas de quem está{" "}
              <em className="text-deep-green">passando por isso</em>
            </h2>
          </motion.div>

          <div className="max-w-3xl space-y-6">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-border bg-card p-6 md:p-8"
              >
                <h3 className="font-display text-base md:text-lg font-medium text-foreground mb-3">
                  {item.q}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related articles */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Leitura recomendada
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight">
              Artigos para entender{" "}
              <em className="text-deep-green">o que você sente</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedArticles.map((article, i) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${article.slug}`}
                  className="group block border border-border p-6 hover:border-primary/20 transition-colors h-full"
                >
                  <h3 className="font-display text-base md:text-lg font-medium text-foreground mb-4 leading-snug">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green group-hover:gap-3 transition-all">
                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-primary-foreground leading-tight mb-6">
              Se os sintomas estão atrapalhando,{" "}
              <em className="text-lime">vale investigar.</em>
            </h2>
            <p className="font-body text-base md:text-lg text-primary-foreground/70 leading-relaxed mb-12 max-w-xl mx-auto">
              Uma avaliação psiquiátrica bem feita pode distinguir o que é esperado do que precisa de tratamento — e devolver estabilidade, foco e qualidade de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary-foreground text-primary px-10 py-4 hover:opacity-90 transition-all hover:shadow-lg"
              >
                Agendar consulta
              </a>
              <Link
                to="/avaliacao"
                className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] border border-primary-foreground/30 text-primary-foreground px-10 py-4 hover:bg-primary-foreground/10 transition-all"
              >
                Fazer avaliação de sintomas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default VestibulandoEspecialista;
