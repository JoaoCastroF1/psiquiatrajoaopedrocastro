import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "@/pages/NotFound";
import { blogIndex } from "@/data/blogIndex";
import { blogHubs } from "@/data/blogHubs";
import PageHead from "@/components/PageHead";

const BlogHub = () => {
  const { hubSlug } = useParams<{ hubSlug: string }>();
  const hub = blogHubs.find((h) => h.slug === hubSlug);

  if (!hub) return <NotFound />;

  const posts = blogIndex.filter((p) => hub.tags.includes(p.tag));
  const hubUrl = `https://www.drjoaopedrocastro.com.br/blog/tema/${hub.slug}`;

  const hubJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${hub.title} · Dr. João Pedro Castro`,
    description: hub.metaDescription,
    url: hubUrl,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `https://www.drjoaopedrocastro.com.br/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  // Group by tag for sections
  const grouped = hub.tags.reduce<Record<string, typeof posts>>((acc, tag) => {
    const tagPosts = posts.filter((p) => p.tag === tag);
    if (tagPosts.length > 0) acc[tag] = tagPosts;
    return acc;
  }, {});

  const otherHubs = blogHubs.filter((h) => h.slug !== hub.slug);

  return (
    <div className="min-h-screen">
      <PageHead
        title={`${hub.title} · Blog | Dr. João Pedro Castro`}
        description={hub.metaDescription}
        url={hubUrl}
        type="blog"
      />
      <JsonLd data={hubJsonLd} />
      <Navbar />

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
                { label: "Blog", href: "/blog" },
                { label: hub.title },
              ]}
            />
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              {hub.highlight}
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
              Artigos sobre{" "}
              <em className="text-deep-green">{hub.title.toLowerCase()}</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {hub.description}
            </p>
            <p className="font-body text-sm text-muted-foreground mt-4">
              {posts.length === 1 ? "1 artigo disponível" : `${posts.length} artigos disponíveis`}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          {Object.entries(grouped).map(([tag, tagPosts]) => (
            <div key={tag} className="mb-16 last:mb-0">
              {Object.keys(grouped).length > 1 && (
                <h2 className="font-display text-2xl md:text-3xl text-foreground mb-8">
                  {tag}
                </h2>
              )}
              <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                {tagPosts.map((post, i) => (
                  <motion.article
                    key={post.slug}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block border border-border p-8 md:p-10 hover:border-primary/20 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-body text-[11px] uppercase tracking-[0.2em] text-graphite/70">
                          {post.tag}
                        </span>
                        <span className="font-body text-[11px] text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl font-medium text-foreground mt-1 mb-4 leading-snug">
                        {post.title}
                      </h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green group-hover:gap-3 transition-all">
                        Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          ))}

          {/* Cross-linking to other hubs */}
          <div className="mt-20 pt-12 border-t border-border">
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-8">
              Explore outros temas
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {otherHubs.map((h) => (
                <Link
                  key={h.slug}
                  to={`/blog/tema/${h.slug}`}
                  className="group block border border-border p-6 hover:border-primary/20 transition-colors"
                >
                  <p className="font-body text-[11px] uppercase tracking-[0.2em] text-graphite/70 mb-2">
                    {h.highlight}
                  </p>
                  <h3 className="font-display text-lg font-medium text-foreground mb-2">
                    {h.title}
                  </h3>
                  <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green group-hover:gap-3 transition-all">
                    Ver artigos <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogHub;
