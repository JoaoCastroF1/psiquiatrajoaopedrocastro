import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

interface BlogSectionProps {
  showHeader?: boolean;
}

const BlogSection = ({ showHeader = true }: BlogSectionProps) => {
  const [featured, ...rest] = blogPosts;
  const listItems = rest.slice(0, 3);
  const smallItems = rest.slice(3, 6);
  const remaining = rest.slice(6);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-10"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Conteúdo
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Informação com <em>fundamento clínico</em>
            </h2>
          </motion.div>
        )}

        {/* Featured + list grid */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14 mb-10 lg:mb-12">
          <motion.article
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/blog/${featured.slug}`}
              className="group block bg-section-alt border border-border p-8 md:p-12 h-full hover:border-primary/20 transition-colors"
            >
              <p className="font-body text-[11px] uppercase tracking-[0.2em] text-deep-green mb-5">
                Em destaque · {featured.tag}
              </p>
              <h3 className="font-display text-2xl md:text-[2.25rem] font-normal text-foreground leading-[1.15] mb-5">
                {featured.title}
              </h3>
              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green group-hover:gap-3 transition-all">
                {featured.readTime} · {featured.date} · Ler artigo
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </motion.article>

          <div className="flex flex-col">
            {listItems.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block py-6 first:pt-0 border-b border-border last:border-b-0"
                >
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-deep-green mb-2">
                    {post.tag}
                  </p>
                  <h3 className="font-display text-lg md:text-xl font-normal text-foreground leading-snug mb-2 group-hover:text-deep-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground">
                    {post.readTime} · {post.date}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Small grid */}
        {smallItems.length > 0 && (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {smallItems.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block border-t-2 border-deep-green pt-5"
                >
                  <p className="font-body text-[10px] uppercase tracking-[0.2em] text-deep-green mb-2">
                    {post.tag}
                  </p>
                  <h3 className="font-display text-base md:text-lg font-normal text-foreground leading-snug mb-3 group-hover:text-deep-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground">
                    {post.readTime} · {post.date}
                  </p>
                </Link>
              </motion.article>
            ))}
          </div>
        )}

        {/* Remaining posts as compact grid (when on Blog page with full list) */}
        {!showHeader && remaining.length > 0 && (
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 pt-12 border-t border-border">
            {remaining.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block border border-border p-8 hover:border-primary/20 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-body text-[11px] uppercase tracking-[0.2em] text-graphite/70">
                      {post.tag}
                    </span>
                    <span className="font-body text-[11px] text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-medium text-foreground mt-1 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green group-hover:gap-3 transition-all">
                    Ler artigo <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
