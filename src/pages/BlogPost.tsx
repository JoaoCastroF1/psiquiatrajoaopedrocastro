import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";
import { blogPosts } from "@/data/blogPosts";
import { blogHubs } from "@/data/blogHubs";
import PageHead from "@/components/PageHead";
import { brDateToIso } from "@/lib/blogDates";
import jpAvatar from "@/assets/jp-portrait.jpg";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const SITE_URL = "https://drjoaopedrocastro.com.br";

const FAQ_SLUGS = new Set([
  "quando-procurar-psiquiatra-bh",
  "como-saber-se-tenho-tdah",
  "psiquiatra-ou-psicologo-qual-procurar",
  "ansiedade-e-doenca-ou-normal",
  "depressao-tem-cura-ou-tratamento",
  "qual-diferenca-tristeza-depressao-ansiedade",
  "como-funciona-consulta-psiquiatrica",
  "remedio-psiquiatrico-vicia",
  "quanto-tempo-demora-antidepressivo-fazer-efeito",
  "o-que-e-psicogeriatra-quando-consultar",
]);

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const postUrl = `${SITE_URL}/blog/${post.slug}`;
  const isoDate = brDateToIso(post.date);
  const hub = blogHubs.find((h) => h.tags.includes(post.tag));

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDate,
    dateModified: isoDate,
    inLanguage: "pt-BR",
    url: postUrl,
    specialty: {
      "@type": "MedicalSpecialty",
      name: "Psychiatry",
    },
    author: {
      "@type": "Person",
      name: "Dr. João Pedro Castro Martins Farias",
      url: `${SITE_URL}/#sobre`,
      jobTitle: "Psiquiatra e Psicogeriatra",
      description:
        "CRM-MG 83920 | RQE 62148 (Psiquiatria) | RQE 66521 (Psicogeriatria)",
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Universidade Federal de Minas Gerais",
      },
      sameAs: ["https://www.instagram.com/joaocastrof/"],
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. João Pedro Castro",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".article-speakable-intro", ".article-speakable-title"],
    },
  };

  const faqJsonLd = FAQ_SLUGS.has(post.slug)
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: post.title,
            acceptedAnswer: {
              "@type": "Answer",
              text: post.content.slice(0, 3).join(" "),
            },
          },
        ],
      }
    : null;

  return (
    <div className="min-h-screen">
      <PageHead
        title={`${post.metaTitle ?? post.title} — Dr. João Pedro Castro`}
        description={post.metaDescription ?? post.excerpt}
        url={postUrl}
        type="article"
      />
      <JsonLd data={articleJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <Navbar />

      <article className="pt-28 md:pt-36 pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Breadcrumbs
              items={[
                { label: "Blog", href: "/blog" },
                ...(hub
                  ? [{ label: hub.title, href: `/blog/tema/${hub.slug}` }]
                  : []),
                { label: post.title },
              ]}
            />

            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors mb-10"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Voltar ao blog
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground bg-secondary px-3 py-1">
                {post.tag}
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>

            <h1 className="article-speakable-title font-display text-3xl md:text-4xl lg:text-[2.75rem] font-normal text-foreground leading-tight mb-4">
              {post.title}
            </h1>

            <p className="font-body text-sm text-muted-foreground mb-12">
              <time dateTime={isoDate}>{post.date}</time> · Por{" "}
              <Link
                to="/#sobre"
                className="underline decoration-border underline-offset-2 hover:text-foreground transition-colors"
              >
                Dr. João Pedro Castro
              </Link>
              <span className="block mt-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground/70">
                Psiquiatra · Psicogeriatra · CRM-MG 83920 · RQE 62148 / 66521
              </span>
            </p>

            <div className="space-y-6">
              {post.content.map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl md:text-[1.75rem] font-normal text-foreground leading-tight pt-6 mb-1"
                    >
                      {paragraph.slice(3)}
                    </h2>
                  );
                }
                return (
                  <p
                    key={i}
                    className={`font-body text-base md:text-[17px] text-foreground/85 leading-[1.85]${i === 0 ? " article-speakable-intro" : ""}`}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* Author bio — E-E-A-T */}
            <aside className="mt-16 pt-10 border-t border-border">
              <p className="font-body text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Sobre o autor
              </p>
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                <img
                  src={jpAvatar}
                  alt="Dr. João Pedro Castro Martins Farias — Psiquiatra e Psicogeriatra em Belo Horizonte"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-lg md:text-xl text-foreground">
                    Dr. João Pedro Castro Martins Farias
                  </p>
                  <p className="font-body text-[11px] uppercase tracking-[0.18em] text-muted-foreground/80 mt-1">
                    Psiquiatra · Psicogeriatra · CRM-MG 83920 · RQE 62148 / 66521
                  </p>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">
                    Médico psiquiatra formado pela UFMG, com residências em Psiquiatria
                    (Hospital Odilon Behrens) e Psicogeriatria (HC/UFMG). Mestrando em
                    Neurociências pela UFMG, com produção científica publicada em periódicos
                    nacionais e internacionais. Atende em Belo Horizonte e atua na interface
                    entre psiquiatria clínica e neurociências.
                  </p>
                  <Link
                    to="/#sobre"
                    className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green hover:gap-3 transition-all mt-4"
                  >
                    Conhecer o consultório
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* CTA */}
            <div className="mt-12 border border-border p-8 md:p-10 bg-card">
              <p className="font-display text-xl md:text-2xl text-foreground mb-3">
                Precisa de avaliação?
              </p>
              <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                Se você se identificou com o conteúdo deste artigo, agende uma consulta para uma avaliação personalizada.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-sm uppercase tracking-[0.1em] bg-primary text-primary-foreground px-8 py-3.5 hover:opacity-90 transition-opacity"
              >
                Agendar consulta
              </a>
            </div>

            {/* Hub link */}
            {hub && (
              <div className="mt-10 text-center">
                <Link
                  to={`/blog/tema/${hub.slug}`}
                  className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  Ver todos os artigos sobre {hub.title}
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )}

            {/* Related Articles */}
            <RelatedArticles currentSlug={post.slug} currentTag={post.tag} />
          </motion.div>
        </div>
      </article>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPost;
