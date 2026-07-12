import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import PageHead from "@/components/PageHead";
import Breadcrumbs from "@/components/Breadcrumbs";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20em%20psicogeriatria.";

const signs = [
  {
    title: "Esquecimentos que progridem",
    description:
      "Esquecer onde deixou as chaves acontece com todo mundo. Repetir a mesma pergunta várias vezes no mesmo dia, perder-se em trajetos conhecidos ou esquecer nomes de pessoas próximas é diferente, e merece investigação.",
  },
  {
    title: "Mudança de comportamento ou personalidade",
    description:
      "A pessoa ficou desconfiada, irritável, desinibida ou apática de um jeito que não era. Mudanças de personalidade no envelhecimento raramente são apenas coisa da idade: costumam ter causa identificável.",
  },
  {
    title: "Tristeza e desânimo depois dos 60",
    description:
      "Depressão no idoso é frequente, subdiagnosticada e tratável. Muitas vezes aparece como queixa física, perda de apetite, lentidão ou falta de vontade, e não como tristeza declarada.",
  },
  {
    title: "Agitação, insônia ou confusão no fim do dia",
    description:
      "Em quadros demenciais, agitação vespertina, inversão do sono e episódios de confusão são comuns e desgastam a família inteira. Há manejo clínico específico para cada situação.",
  },
  {
    title: "Ansiedade que começou tarde",
    description:
      "Ansiedade intensa que surge pela primeira vez na terceira idade pede avaliação cuidadosa: pode ser transtorno de ansiedade, mas também sinal precoce de alteração cognitiva ou efeito de medicações.",
  },
  {
    title: "Declínio após perda, cirurgia ou internação",
    description:
      "Luto, hospitalizações e anestesias podem desencadear ou revelar quadros psiquiátricos e cognitivos no idoso. Quanto mais cedo a avaliação, melhores as possibilidades de recuperação.",
  },
];

const pillars = [
  {
    title: "Avaliação cognitiva e clínica completa",
    description:
      "Testes de rastreio cognitivo, anamnese detalhada com paciente e família, revisão de todas as medicações em uso e solicitação de exames laboratoriais e de imagem quando indicados, para diferenciar demência, depressão, delirium e causas reversíveis.",
  },
  {
    title: "A família participa do cuidado",
    description:
      "Em psicogeriatria, quem convive com o paciente é parte essencial do diagnóstico e do tratamento. A família recebe orientação clara sobre o que está acontecendo, o que esperar e como agir no dia a dia.",
  },
  {
    title: "Consulta domiciliar quando o deslocamento não é possível",
    description:
      "Pacientes com mobilidade reduzida, demência avançada ou resistência em sair de casa podem ser avaliados e acompanhados em domicílio, em Belo Horizonte.",
  },
  {
    title: "Formação específica para essa fase da vida",
    description:
      "Residência em Psicogeriatria pelo Hospital das Clínicas da UFMG e registro de especialista (RQE 66521). O envelhecimento cerebral tem particularidades que exigem treinamento dedicado, da escolha da medicação à dose.",
  },
];

const readings = [
  {
    slug: "o-que-e-psicogeriatria",
    title: "O que é psicogeriatria e por que ela importa depois dos 60",
  },
  {
    slug: "demencia-sinais-precoces",
    title: "Sinais precoces de demência: quando o esquecimento deixa de ser normal",
  },
];

const faqItems = [
  {
    q: "Qual a diferença entre psicogeriatra, geriatra e neurologista?",
    a: "O geriatra cuida da saúde global do idoso; o neurologista, das doenças do sistema nervoso. O psicogeriatra é o psiquiatra com formação específica em saúde mental do idoso: demências com sintomas comportamentais, depressão, ansiedade, psicose e insônia no envelhecimento. Na prática, as três especialidades frequentemente trabalham juntas, e a comunicação entre elas faz parte do cuidado.",
  },
  {
    q: "Esquecimento é sempre Alzheimer?",
    a: "Não. Esquecimentos podem vir de depressão, ansiedade, apneia do sono, deficiências vitamínicas, alterações da tireoide, efeito de medicações e outras causas, várias delas reversíveis. Por isso a avaliação estruturada importa: antes de concluir que é demência, é preciso excluir o que tem tratamento e cura.",
  },
  {
    q: "Como é a avaliação de memória?",
    a: "A primeira consulta inclui conversa detalhada com o paciente e com quem convive com ele, testes de rastreio cognitivo aplicados em consultório e revisão completa de medicações. Quando indicado, são solicitados exames de sangue e de imagem. O objetivo é chegar a um diagnóstico preciso, e não apenas a um rótulo.",
  },
  {
    q: "Vocês atendem em casa?",
    a: "Sim. Consultas domiciliares em Belo Horizonte estão disponíveis para pacientes com dificuldade de locomoção, quadros demenciais avançados ou forte resistência a sair de casa. A telemedicina também é uma opção para acompanhamento, quando clinicamente adequada.",
  },
  {
    q: "A família participa da consulta?",
    a: "Sim, e isso é parte do método. Em psicogeriatria, o relato de quem convive com o paciente é fundamental para o diagnóstico, e a orientação da família é parte do tratamento. O equilíbrio entre a autonomia do paciente e o envolvimento familiar é construído caso a caso.",
  },
  {
    q: "Meu familiar não aceita ir ao médico. O que fazer?",
    a: "É uma situação comum e há caminhos: a consulta domiciliar elimina a barreira do deslocamento, e a primeira conversa pode ser feita com a própria família, para orientar a aproximação. Forçar raramente funciona; estratégia e paciência costumam funcionar melhor.",
  },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Psicogeriatra em Belo Horizonte · Dr. João Pedro Castro",
  description:
    "Psicogeriatra titulado (RQE 66521) em Belo Horizonte. Avaliação de memória, demências, Alzheimer, depressão e ansiedade no idoso. Consultas presenciais, por telemedicina e domiciliares.",
  url: "https://www.drjoaopedrocastro.com.br/psicogeriatria",
  specialty: { "@type": "MedicalSpecialty", name: "Geriatric Psychiatry" },
  about: [
    { "@type": "MedicalCondition", name: "Doença de Alzheimer" },
    { "@type": "MedicalCondition", name: "Demência" },
    { "@type": "MedicalCondition", name: "Depressão no idoso" },
    { "@type": "MedicalCondition", name: "Ansiedade no idoso" },
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

const Psicogeriatria = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Psicogeriatra em Belo Horizonte · RQE 66521 | Dr. João Pedro Castro"
        description="Psicogeriatra titulado em BH: avaliação de memória, demências, Alzheimer, depressão e ansiedade no idoso. Consultas presenciais, por telemedicina e domiciliares. RQE 66521."
        url="https://www.drjoaopedrocastro.com.br/psicogeriatria"
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
            <Breadcrumbs items={[{ label: "Psicogeriatria" }]} />
            <p className="font-body text-xs uppercase tracking-[0.3em] text-deep-green mb-6 mt-2">
              Especialidade · Psicogeriatria · RQE 66521
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-foreground leading-[1.05] mb-8 -tracking-[0.005em]">
              A saúde mental de quem envelhece{" "}
              <em className="text-deep-green">pede um especialista.</em>
            </h1>
            <p className="font-display italic text-xl md:text-[1.4rem] text-foreground/85 leading-relaxed max-w-2xl mb-6">
              Para famílias que perceberam que algo mudou, na memória, no humor ou no comportamento. E para idosos que querem cuidar da mente com a mesma seriedade com que cuidam do corpo.
            </p>
            <p className="font-body text-base text-foreground/80 leading-relaxed max-w-2xl mb-4">
              Investigação e acompanhamento de Alzheimer e outras demências, depressão, ansiedade, psicose tardia e insônia no envelhecimento. Diagnóstico estruturado antes de qualquer prescrição.
            </p>
            <p className="font-body italic text-sm text-foreground/70">
              Presencial em Lourdes, por telemedicina ou em domicílio, em Belo Horizonte.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-10">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-sm px-8 py-4"
              >
                Agendar avaliação
              </a>
              <Link to="/alzheimer" className="btn btn-ghost text-sm px-8 py-4">
                Alzheimer e demências
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sinais */}
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
              Quando &ldquo;coisa da idade&rdquo; merece{" "}
              <em className="text-deep-green">investigação</em>
            </h2>
            <p className="font-body text-base text-foreground/80 leading-relaxed mt-5 max-w-xl">
              Nem toda mudança no envelhecimento é doença. Mas alguns sinais, quando persistem ou progridem, indicam que é hora de uma avaliação especializada.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signs.map((item, i) => {
              const cardBg = ["bg-card", "bg-background", "bg-salmon/25"][i % 3];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`p-6 md:p-8 ${cardBg}`}
                >
                  <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-foreground/85 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Como funciona o cuidado */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-14"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Como funciona
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Um cuidado que envolve o paciente{" "}
              <em className="text-deep-green">e quem vive com ele</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="border-l-2 border-deep-green/40 pl-8 py-2"
              >
                <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="font-body text-sm md:text-base text-foreground/85 leading-relaxed">
                  {p.description}
                </p>
              </motion.div>
            ))}
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
            className="max-w-2xl mb-12"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Dúvidas frequentes
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              O que as famílias costumam{" "}
              <em className="text-deep-green">perguntar</em>
            </h2>
          </motion.div>

          <div className="max-w-3xl space-y-8">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-b border-border pb-8"
              >
                <h3 className="font-display text-lg md:text-xl font-medium text-foreground mb-3">
                  {item.q}
                </h3>
                <p className="font-body text-sm md:text-base text-foreground/85 leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leituras */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-10"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Para entender melhor
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Leituras sobre <em className="text-deep-green">psicogeriatria</em>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {readings.map((r) => (
              <Link
                key={r.slug}
                to={`/blog/${r.slug}`}
                className="group flex items-start justify-between gap-4 p-6 md:p-8 bg-card hover:bg-secondary transition-colors"
              >
                <span className="font-display text-lg md:text-xl text-foreground leading-snug">
                  {r.title}
                </span>
                <ArrowRight
                  className="w-5 h-5 shrink-0 mt-1 text-deep-green transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
          <p className="font-body text-sm text-muted-foreground mt-8">
            Mais artigos no{" "}
            <Link
              to="/blog/tema/psicogeriatria"
              className="text-deep-green underline underline-offset-4 hover:no-underline"
            >
              tema Psicogeriatria do blog
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-primary-foreground leading-tight mb-6">
              Quanto antes a avaliação, <em>maiores as possibilidades.</em>
            </h2>
            <p className="font-body text-base md:text-lg text-primary-foreground/85 leading-relaxed mb-12 max-w-xl mx-auto">
              Se algo mudou na memória, no humor ou no comportamento de quem você ama, não espere piorar para investigar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lime text-sm px-10 py-4"
              >
                Agendar avaliação
              </a>
              <Link
                to="/avaliacao"
                className="btn text-sm px-10 py-4 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Como funciona a consulta
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

export default Psicogeriatria;
