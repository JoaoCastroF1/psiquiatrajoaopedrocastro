import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHead from "@/components/PageHead";
import {
  curriculumProfile,
  conferenceProceedings,
  journalArticles,
  monographs,
  scientificEvents,
} from "@/data/curriculum";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

const Curriculo = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Currículo — Dr. João Pedro Castro Martins Farias | Psiquiatria e Psicogeriatria"
        description="Formação, atuação institucional, palestras corporativas, produção científica e eventos científicos do Dr. João Pedro Castro Martins Farias. CRM-MG 83920, RQE 62148, RQE 66521."
        url="https://drjoaopedrocastro.com.br/curriculo"
      />
      <Navbar />

      <article>
        {/* Cabeçalho */}
        <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <Breadcrumbs items={[{ label: "Currículo" }]} />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Currículo profissional
            </p>
            <motion.h1
              {...fadeIn}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-normal text-foreground leading-[1.15] mb-4"
            >
              <em className="text-deep-green not-italic">Dr.</em> João Pedro
              Castro Martins Farias
            </motion.h1>
            <p className="font-body text-[11px] md:text-xs uppercase tracking-[0.18em] text-muted-foreground/85">
              Psiquiatria · Psicogeriatria
              <span className="block md:inline md:before:content-['__·__'] md:before:whitespace-pre">
                {curriculumProfile.crm} · {curriculumProfile.rqePsiquiatria} ·{" "}
                {curriculumProfile.rqePsicogeriatria}
              </span>
            </p>
          </div>
        </section>

        {/* Formação */}
        <section className="pb-16 md:pb-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-6">
                Formação
              </h2>
              <div className="space-y-5 font-body text-base text-foreground/85 leading-[1.75]">
                <p>
                  Graduação em Medicina pela Universidade Federal de Minas
                  Gerais entre 2014 e 2020. Em 2017, atuou como bolsista de
                  monitoria em Semiologia e Nosologia Psiquiátrica na própria
                  UFMG. Concluiu a Residência Médica em Psiquiatria pelo
                  Hospital Municipal Odilon Behrens entre 2021 e 2024 (RQE
                  62148) e a Residência Médica em Psicogeriatria pelo Hospital
                  das Clínicas da UFMG/Ebserh entre 2024 e 2025 (RQE 66521).
                </p>
                <p>
                  A formação complementar inclui pós-graduação Lato Sensu em
                  Terapia Cognitivo-Comportamental pelo Centro Universitário
                  União das Américas (Uniamérica/Descomplica), 390 horas,
                  concluída em 2023. Em psicogeriatria, o VII Curso de
                  Atualização em Psicogeriatria da UFMG, com 92 horas em 2024,
                  e o curso O Sono e seus Transtornos da UFMG, com 30 horas em
                  2023. Em neuromodulação, o Fellowship em Estimulação
                  Magnética Transcraniana, conduzido em parceria entre UFMG e
                  Clínica Mangabeiras em 2024, totalizou 60 horas entre teoria
                  e prática supervisionada, com avaliação de pacientes e
                  aplicação de protocolos de neuromodulação não invasiva em
                  transtornos neuropsiquiátricos. Há também formação em Saúde
                  Mental e Psicodélicos pelo Instituto Phaneros, em 2022, e
                  certificação ACLS pela American Heart Association, em 2020.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Atuação institucional */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-6">
                Atuação institucional
              </h2>
              <p className="font-body text-base text-foreground/85 leading-[1.75]">
                Mantém consultório particular na Rua dos Timbiras, 1940, sala
                1515, em Lourdes, Belo Horizonte, desde 2021. É vinculado à
                Clínica Mangabeiras, em Belo Horizonte, também desde 2021.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Áreas de atuação clínica */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-6">
                Áreas de atuação clínica
              </h2>
              <p className="font-body text-base text-foreground/85 leading-[1.75]">
                O acompanhamento clínico em consultório cobre transtornos do
                humor, com atenção particular a depressão e depressão resistente
                e a transtorno bipolar. Em ansiedade, conduz transtorno de
                ansiedade generalizada e os demais transtornos ansiosos.
                Acompanha esquizofrenia e transtornos psicóticos, TDAH em
                adultos e transtorno do espectro autista em adultos. A frente
                de psicogeriatria cobre síndromes demenciais e os demais
                transtornos neuropsiquiátricos do envelhecimento.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Palestras corporativas */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-6">
                Palestras corporativas
              </h2>
              <p className="font-body text-base text-foreground/85 leading-[1.75]">
                Atua como palestrante em ambientes corporativos e
                institucionais. Entre as palestras realizadas, destacam-se a
                apresentação no Project Management Institute (PMI), sobre
                burnout e saúde mental no trabalho, e a palestra{" "}
                <em>Mente em Movimento</em>, no Banco Fibra, sobre estresse,
                cortisol, eixo HPA e estratégias de regulação.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Produção científica */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-8">
                Produção científica
              </h2>

              <div className="mb-10">
                <h3 className="font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
                  Trabalho em anais de congresso internacional
                </h3>
                <ol className="list-decimal list-outside pl-5 space-y-4">
                  {conferenceProceedings.map((p, i) => (
                    <li
                      key={i}
                      className="font-body text-[15px] text-foreground/85 leading-[1.7]"
                    >
                      {p.authors}. {p.title}. {p.venue}, {p.year}. {p.details}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mb-10">
                <h3 className="font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
                  Artigo em periódico
                </h3>
                <ol className="list-decimal list-outside pl-5 space-y-4">
                  {journalArticles.map((p, i) => (
                    <li
                      key={i}
                      className="font-body text-[15px] text-foreground/85 leading-[1.7]"
                    >
                      {p.authors}. {p.title}. {p.journal}, {p.year}.
                    </li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="font-body text-[11px] uppercase tracking-[0.22em] text-muted-foreground mb-4">
                  Monografia de conclusão de residência
                </h3>
                <ol className="list-decimal list-outside pl-5 space-y-4">
                  {monographs.map((p, i) => (
                    <li
                      key={i}
                      className="font-body text-[15px] text-foreground/85 leading-[1.7]"
                    >
                      {p.authors}. {p.title}. {p.institution}, {p.year}.
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Eventos científicos */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-6">
                Eventos científicos
              </h2>
              <dl className="space-y-3">
                {scientificEvents.map((e, i) => (
                  <div key={i} className="flex gap-5 md:gap-7">
                    <dt className="font-body text-sm tabular-nums text-muted-foreground w-12 shrink-0 pt-[2px]">
                      {e.year}
                    </dt>
                    <dd className="font-body text-[15px] text-foreground/85 leading-[1.6]">
                      {e.name}
                    </dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </section>

        {/* Organização de evento */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-6">
                Organização de evento
              </h2>
              <p className="font-body text-base text-foreground/85 leading-[1.75]">
                Organizou a Jornada Acadêmica de Saúde Mental da UFMG, em 2018.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Idiomas */}
        <section className="py-16 md:py-20 bg-section-alt">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground mb-6">
                Idiomas
              </h2>
              <p className="font-body text-base text-foreground/85 leading-[1.75]">
                Português nativo. Inglês fluente, com certificação TOEIC obtida
                em 2020. Espanhol fluente.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Lattes */}
        <section className="py-16 md:py-20 bg-background border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <motion.div {...fadeIn}>
              <p className="font-body text-xs uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Currículo Lattes
              </p>
              <a
                href={curriculumProfile.lattesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-base text-foreground hover:text-deep-green transition-colors break-all"
              >
                lattes.cnpq.br/{curriculumProfile.lattesId}
              </a>
            </motion.div>
          </div>
        </section>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Curriculo;
