import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedArticles from "@/components/RelatedArticles";
import { blogPosts } from "@/data/blogPosts";
import PageHead from "@/components/PageHead";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const postUrl = `https://drjoaopedrocastro.com.br/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: postUrl,
    image: "https://storage.googleapis.com/gpt-engineer-file-uploads/yFToYCs0UngFU2k1vSPCMcxcOri1/social-images/social-1774294559691-109195.webp",
    articleSection: post.tag,
    inLanguage: "pt-BR",
    author: {
      "@type": "Person",
      name: "Dr. João Pedro Castro Martins Farias",
      url: "https://drjoaopedrocastro.com.br",
      jobTitle: "Psiquiatra e Psicogeriatra",
      description: "CRM 83920 | RQE 62148 | RQE 66521",
    },
    publisher: {
      "@type": "Organization",
      name: "Dr. João Pedro Castro",
      url: "https://drjoaopedrocastro.com.br",
      logo: {
        "@type": "ImageObject",
        url: "https://storage.googleapis.com/gpt-engineer-file-uploads/yFToYCs0UngFU2k1vSPCMcxcOri1/social-images/social-1774294559691-109195.webp",
      },
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

  return (
    <div className="min-h-screen">
      <PageHead
        title={`${post.title} — Dr. João Pedro Castro`}
        description={post.excerpt}
        url={postUrl}
        type="article"
      />
      <JsonLd data={articleJsonLd} />
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
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-steel bg-secondary px-3 py-1">
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
              {post.date} · Dr. João Pedro Castro
            </p>

            <div className="space-y-6">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className={`font-body text-base md:text-[17px] text-foreground/85 leading-[1.85]${i === 0 ? " article-speakable-intro" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 border border-border p-8 md:p-10 bg-card">
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
