import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=dr+joao+pedro+castro+psiquiatra#ebo=0&mpd=~1888095813781975818/customers/reviews";

const testimonials = [
  {
    name: "Thalissa Geely",
    date: "18 de nov. de 2024",
    text: "Excelente profissional! Dr. João é um médico humano, que tem empatia sobre cada vírgula que a gente descreve, mas com um profissionalismo de um dos melhores doutores que já conheci em toda minha vida. Seu carisma e amor pela profissão me deu vida novamente; e literalmente. Suas técnicas, conhecimento sobre medicações e diagnósticos, foi o que solucionou meu impasse. Ele certamente é um médico necessário!",
  },
  {
    name: "Ana Rafaela Faria",
    date: "2024",
    text: "Sinto-me acolhida nas consultas com o Dr. João Pedro, que demonstra uma escuta atenta, curiosa e verdadeiramente interessada em entender e ajudar. Tenho experienciado bastante melhora nos sintomas e na qualidade de vida desde o início do acompanhamento. Os atendimentos são pontuais e ele demonstra muito conhecimento e dedicação em se manter atualizado no estudo da medicina e das inovações no campo da psiquiatria.",
  },
  {
    name: "Karina Matulevicius",
    date: "2025",
    text: "Super recomendo o Dr João! Super estudioso, atencioso e principalmente atualizado! Sabe tudo de novos estudos, novos remédios, tratamentos e afins. Acertou em todas as minhas medicações e sou uma pessoa muito melhor depois que comecei o tratamento com ele! 🙌",
  },
  {
    name: "Flavia Sampaio",
    date: "2025",
    text: "Um médico excepcional. Além de demonstrar um domínio técnico impressionante, é atencioso e realiza um atendimento humano e detalhado. Nota-se que busca constantes atualizações na área. Com certeza, o melhor psiquiatra que já consultei.",
  },
  {
    name: "Julia Abdalla",
    date: "18 de nov. de 2024",
    text: "Dr. João Pedro é um excelente médico! Quando eu o conheci, estava totalmente instável e passando por uma depressão muito difícil. Durante anos passei por vários médicos procurando pela estabilidade e só o Dr. João Pedro conseguiu estabilizar o meu humor. Hoje estou muito bem e sigo em acompanhamento! Sou muito grata!",
  },
  {
    name: "Marilia Madalena",
    date: "2024",
    text: "Ao procurar o Dr João Pedro Castro encontramos acolhimento, dedicação, explicações fáceis e didáticas. Conversas amenas que deixam o paciente confortável e à vontade para expressar sentimentos, dificuldades, medos. Diagnóstico realizado com calma, incluindo indicação de testes confiáveis. Agradeço profundamente por toda atenção recebida, tanto humanamente como profissionalmente.",
  },
];

const credentials = [
  "Atendimento particular",
  "Nota fiscal para reembolso",
  "Presencial, telemedicina e domiciliar",
  "Belo Horizonte — MG",
];

const Stars = ({ className = "" }: { className?: string }) => (
  <div className={`flex gap-0.5 ${className}`}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-4"
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
            Confiança
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
            O que dizem sobre{" "}
            <em className="text-deep-green">este trabalho</em>
          </h2>
        </motion.div>

        {/* Google rating badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-display text-2xl font-semibold text-foreground">5,0</span>
            <Stars />
          </div>
          <span className="font-body text-sm text-muted-foreground">(47 avaliações)</span>
        </motion.div>

        {/* Carousel */}
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full mb-10"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-card border border-border p-8 pt-12 h-full flex flex-col relative">
                  <span
                    aria-hidden="true"
                    className="font-display italic text-coral text-[5rem] md:text-[6rem] leading-[0.7] absolute top-4 left-6 select-none"
                  >
                    &ldquo;
                  </span>
                  <p className="font-display italic text-base md:text-[17px] text-foreground leading-relaxed mb-6 flex-1 mt-6">
                    {t.text}
                  </p>
                  <div className="flex items-end justify-between gap-4 pt-4 border-t border-border/50">
                    <div>
                      <p className="font-display italic text-sm text-foreground">
                        {t.name}
                      </p>
                      <p className="font-body italic text-xs text-muted-foreground">
                        {t.date}
                      </p>
                    </div>
                    <Stars />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0 translate-x-0" />
            <CarouselNext className="static translate-y-0 translate-x-0" />
          </div>
        </Carousel>

        {/* Ver mais link */}
        <div className="text-center mb-16">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-deep-green hover:underline transition-colors"
          >
            Ver todas as avaliações no Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 pt-8 border-t border-border"
        >
          {credentials.map((c, i) => (
            <span
              key={i}
              className="font-body text-xs uppercase tracking-[0.12em] text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
