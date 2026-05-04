import { useLocation, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHead from "@/components/PageHead";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getConditionBySlug, conditions, WA_LINK } from "@/data/conditions";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ConditionPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace("/", "");
  const condition = getConditionBySlug(slug);

  if (!condition) return <Navigate to="/atuacao" replace />;

  const relatedConditions = condition.relatedSlugs
    .map((s) => conditions.find((c) => c.slug === s))
    .filter(Boolean);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: condition.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const medicalJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: condition.metaTitle,
    description: condition.metaDescription,
    url: `https://drjoaopedrocastro.com.br/${condition.slug}`,
    author: {
      "@type": "Physician",
      name: "Dr. João Pedro Castro",
      medicalSpecialty: "Psychiatry",
    },
    about: {
      "@type": "MedicalCondition",
      name: condition.title,
    },
  };

  return (
    <div className="min-h-screen">
      <PageHead
        title={condition.metaTitle}
        description={condition.metaDescription}
        url={`https://drjoaopedrocastro.com.br/${condition.slug}`}
      />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={medicalJsonLd} />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Breadcrumbs
              items={[
                { label: "Áreas de atuação", href: "/atuacao" },
                { label: condition.title },
              ]}
            />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              {condition.tagLabel}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground leading-tight mb-4">
              {condition.headline}{" "}
              <em className="text-deep-green">{condition.headlineAccent}</em>
            </h1>
            <p className="font-body text-sm uppercase tracking-[0.15em] text-graphite/70 mb-8">
              {condition.subtitle}
            </p>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {condition.intro}
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-8 py-4 hover:opacity-90 transition-all hover:shadow-lg"
            >
              Agendar consulta
            </a>
          </motion.div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight mb-10">
              {condition.symptomsTitle}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {condition.symptoms.map((s, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-deep-green mt-0.5 flex-shrink-0" />
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {s}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight mb-10">
              {condition.approachTitle}
            </h2>
            <div className="space-y-6">
              {condition.approach.map((step, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <span className="font-display text-2xl text-primary/30 font-normal leading-none mt-1 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-body text-base text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentials */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight mb-8">
              Diagnóstico diferencial
            </h2>
            <div className="space-y-4">
              {condition.differentials.map((d, i) => (
                <div key={i} className="border-l-2 border-primary/20 pl-5">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight mb-10">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {condition.faq.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="border border-border px-6"
                >
                  <AccordionTrigger className="font-body text-sm md:text-base text-foreground text-left py-5">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
                    {f.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-normal text-primary-foreground leading-tight mb-6">
              O primeiro passo é uma avaliação com <em>tempo e profundidade</em>
            </h2>
            <p className="font-body text-base text-primary-foreground/70 leading-relaxed mb-10">
              Se você se identificou com o que leu, o caminho começa por uma
              consulta com espaço suficiente para entender o que está
              acontecendo.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-body text-sm uppercase tracking-[0.1em] bg-primary-foreground text-primary px-10 py-4 hover:opacity-90 transition-all hover:shadow-lg"
            >
              Agendar consulta
            </a>
          </motion.div>
        </div>
      </section>

      {/* Related Conditions */}
      {relatedConditions.length > 0 && (
        <section className="py-20 md:py-28 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-normal text-foreground leading-tight mb-10">
                Condições relacionadas
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedConditions.map((rc) =>
                  rc ? (
                    <Link
                      key={rc.slug}
                      to={`/${rc.slug}`}
                      className="group border border-border p-6 hover:border-primary/30 transition-colors"
                    >
                      <h3 className="font-display text-lg font-medium text-foreground mb-2">
                        {rc.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 font-body text-xs uppercase tracking-[0.15em] text-deep-green group-hover:gap-2 transition-all">
                        Saiba mais <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ) : null
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ConditionPage;
