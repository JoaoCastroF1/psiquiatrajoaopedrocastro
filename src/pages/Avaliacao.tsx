import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, MessageCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageHead from "@/components/PageHead";

const WA_NUMBER = "5531991315958";

interface Question {
  id: string;
  text: string;
  options: { label: string; value: string; emoji: string }[];
}

const questions: Question[] = [
  {
    id: "humor",
    text: "Como você descreveria seu humor nas últimas duas semanas?",
    options: [
      { label: "Bem, sem queixas", value: "Humor estável", emoji: "😊" },
      { label: "Oscilando bastante", value: "Humor oscilante", emoji: "😐" },
      { label: "Triste ou desanimado na maior parte do tempo", value: "Humor deprimido", emoji: "😔" },
      { label: "Irritado ou ansioso com frequência", value: "Irritabilidade/ansiedade frequente", emoji: "😤" },
    ],
  },
  {
    id: "sono",
    text: "Como está a qualidade do seu sono?",
    options: [
      { label: "Durmo bem e acordo descansado", value: "Sono adequado", emoji: "😴" },
      { label: "Demoro para pegar no sono", value: "Insônia inicial", emoji: "🌙" },
      { label: "Acordo várias vezes durante a noite", value: "Sono fragmentado", emoji: "⏰" },
      { label: "Durmo demais e ainda assim sinto cansaço", value: "Hipersonia", emoji: "🛏️" },
    ],
  },
  {
    id: "concentracao",
    text: "Você tem sentido dificuldade de concentração?",
    options: [
      { label: "Não, consigo me concentrar normalmente", value: "Concentração preservada", emoji: "🎯" },
      { label: "Às vezes perco o foco, mas consigo retomar", value: "Dificuldade leve de concentração", emoji: "💭" },
      { label: "Tenho muita dificuldade para manter a atenção", value: "Dificuldade significativa de concentração", emoji: "🌀" },
      { label: "Não consigo concluir quase nenhuma tarefa", value: "Comprometimento funcional por desatenção", emoji: "📋" },
    ],
  },
  {
    id: "ansiedade",
    text: "Você sente ansiedade ou preocupação excessiva?",
    options: [
      { label: "Raramente", value: "Ansiedade ausente/leve", emoji: "✨" },
      { label: "Sim, mas consigo controlar", value: "Ansiedade moderada controlável", emoji: "🌊" },
      { label: "Sim, com sintomas físicos (coração acelerado, falta de ar)", value: "Ansiedade com sintomas somáticos", emoji: "💓" },
      { label: "Tenho crises intensas de ansiedade ou pânico", value: "Crises de pânico/ansiedade intensa", emoji: "⚡" },
    ],
  },
  {
    id: "motivacao",
    text: "Como está sua motivação e interesse por atividades do dia a dia?",
    options: [
      { label: "Mantenho interesse nas coisas que gosto", value: "Motivação preservada", emoji: "🌟" },
      { label: "Perdi um pouco do interesse", value: "Redução parcial de interesse", emoji: "📉" },
      { label: "Quase nada me dá prazer ou motivação", value: "Anedonia significativa", emoji: "🔇" },
      { label: "Sinto-me sem propósito", value: "Anedonia grave com desesperança", emoji: "🌑" },
    ],
  },
  {
    id: "relacoes",
    text: "Como estão seus relacionamentos e vida social?",
    options: [
      { label: "Normais, sem grandes mudanças", value: "Relações sociais estáveis", emoji: "👥" },
      { label: "Tenho me isolado um pouco mais", value: "Isolamento parcial", emoji: "🚪" },
      { label: "Estou muito irritado(a) com pessoas próximas", value: "Conflitos interpessoais por irritabilidade", emoji: "💢" },
      { label: "Evito contato social sempre que posso", value: "Evitação social significativa", emoji: "🏠" },
    ],
  },
];

const assessmentJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "Avaliação de Sintomas · Dr. João Pedro Castro",
  description:
    "Questionário de triagem para identificar sintomas que merecem avaliação psiquiátrica. Não substitui consulta médica.",
  url: "https://drjoaopedrocastro.com.br/avaliacao",
  author: {
    "@type": "Person",
    name: "Dr. João Pedro Castro Martins Farias",
    jobTitle: "Psiquiatra e Psicogeriatra",
  },
};

const Avaliacao = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);

  const totalSteps = questions.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;
  const currentQuestion = questions[currentStep];

  const handleSelect = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    // Auto-advance after brief delay
    setTimeout(() => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        setCompleted(true);
      }
    }, 400);
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep((s) => s - 1);
  };

  const buildWhatsAppMessage = () => {
    const lines = questions.map(
      (q) => `• ${q.text}\n  → ${answers[q.id] || "Não respondido"}`
    );
    const msg = `Olá Dr. João Pedro, fiz a avaliação de sintomas no site e gostaria de agendar uma consulta.\n\nMinhas respostas:\n\n${lines.join("\n\n")}`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setCompleted(false);
  };

  return (
    <div className="min-h-screen">
      <PageHead
        title="Avaliação de Sintomas · Dr. João Pedro Castro | Psiquiatra em BH"
        description="Faça uma avaliação rápida dos seus sintomas e descubra se é hora de procurar um psiquiatra. Questionário orientativo gratuito."
        url="https://drjoaopedrocastro.com.br/avaliacao"
      />
      <JsonLd data={assessmentJsonLd} />
      <Navbar />

      <section className="pt-28 md:pt-36 pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Breadcrumbs items={[{ label: "Avaliação de Sintomas" }]} />

            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-10"
            >
              <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">
                Triagem inicial
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight mb-4">
                Avaliação de{" "}
                <em className="text-deep-green">sintomas</em>
              </h1>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Responda às perguntas abaixo para nos ajudar a entender melhor o
                que você está sentindo. Este questionário{" "}
                <strong>não substitui uma consulta médica</strong>, mas facilita
                o primeiro contato.
              </p>
            </motion.div>

            {!completed ? (
              <>
                {/* Progress bar */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-xs text-muted-foreground">
                      Pergunta {currentStep + 1} de {totalSteps}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {Math.round(progress)}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-border overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h2 className="font-display text-xl md:text-2xl text-foreground mb-6 leading-snug">
                      {currentQuestion.text}
                    </h2>

                    <div className="space-y-3">
                      {currentQuestion.options.map((option) => {
                        const isSelected =
                          answers[currentQuestion.id] === option.value;
                        return (
                          <button
                            key={option.value}
                            onClick={() =>
                              handleSelect(currentQuestion.id, option.value)
                            }
                            className={`w-full text-left border p-4 md:p-5 transition-all duration-200 flex items-center gap-4 group ${
                              isSelected
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/30 bg-card"
                            }`}
                          >
                            <span className="text-xl flex-shrink-0">
                              {option.emoji}
                            </span>
                            <span className="font-body text-sm md:text-base text-foreground leading-snug">
                              {option.label}
                            </span>
                            {isSelected && (
                              <CheckCircle2 className="w-5 h-5 text-primary ml-auto flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between items-center mt-8">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={`inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] transition-colors ${
                      currentStep === 0
                        ? "text-muted-foreground/40 cursor-not-allowed"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    Voltar
                  </button>

                  {answers[currentQuestion.id] && (
                    <button
                      onClick={() => {
                        if (currentStep < totalSteps - 1) {
                          setCurrentStep((s) => s + 1);
                        } else {
                          setCompleted(true);
                        }
                      }}
                      className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green hover:gap-3 transition-all"
                    >
                      {currentStep < totalSteps - 1 ? "Próxima" : "Ver resultado"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </>
            ) : (
              /* Results */
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="border border-border p-8 md:p-10 bg-card mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <h2 className="font-display text-xl md:text-2xl text-foreground">
                      Avaliação concluída
                    </h2>
                  </div>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                    Obrigado por compartilhar essas informações. Com base nas
                    suas respostas, recomendamos uma consulta para avaliação
                    personalizada. Suas respostas serão enviadas diretamente ao
                    Dr. João Pedro para que ele possa se preparar para o
                    atendimento.
                  </p>

                  {/* Summary */}
                  <div className="space-y-3 mb-8">
                    {questions.map((q) => (
                      <div
                        key={q.id}
                        className="flex items-start gap-3 py-2 border-b border-border/50 last:border-0"
                      >
                        <span className="font-body text-xs text-muted-foreground min-w-[80px] uppercase tracking-[0.1em] pt-0.5">
                          {q.id === "humor"
                            ? "Humor"
                            : q.id === "sono"
                              ? "Sono"
                              : q.id === "concentracao"
                                ? "Foco"
                                : q.id === "ansiedade"
                                  ? "Ansiedade"
                                  : q.id === "motivacao"
                                    ? "Motivação"
                                    : "Social"}
                        </span>
                        <span className="font-body text-sm text-foreground">
                          {answers[q.id]}
                        </span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={buildWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-opacity w-full justify-center md:w-auto"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Agendar consulta via WhatsApp
                  </a>
                </div>

                <button
                  onClick={handleRestart}
                  className="font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Refazer avaliação
                </button>

                <div className="mt-10 p-6 bg-secondary/50 border border-border">
                  <p className="font-body text-xs text-muted-foreground leading-relaxed">
                    <strong>Aviso importante:</strong> Este questionário tem
                    caráter informativo e não constitui diagnóstico médico. Apenas
                    uma consulta presencial com um profissional qualificado pode
                    fornecer uma avaliação clínica adequada.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Avaliacao;
