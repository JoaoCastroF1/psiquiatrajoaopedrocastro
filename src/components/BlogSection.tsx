import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

interface BlogSectionProps {
  showHeader?: boolean;
}

const BlogSection = ({ showHeader = true }: BlogSectionProps) => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-16"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Conteúdo
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Informação com{" "}
              <em className="text-deep-green">fundamento clínico</em>
            </h2>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
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
    </section>
  );
};

export default BlogSection;
