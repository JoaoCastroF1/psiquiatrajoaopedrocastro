import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogIndex } from "@/data/blogIndex";
import { brDateToIso } from "@/lib/blogDates";

const recentPosts = [...blogIndex]
  .sort((a, b) => brDateToIso(b.date).localeCompare(brDateToIso(a.date)))
  .slice(0, 3);

const BlogPreviewSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-end justify-between gap-6 mb-12"
        >
          <div className="max-w-2xl">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Do blog
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground leading-tight">
              Informação com <em className="text-deep-green">fundamento clínico</em>
            </h2>
          </div>
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 font-body text-sm text-deep-green hover:underline underline-offset-4"
          >
            Ver todos os artigos
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="group block h-full p-6 md:p-8 bg-card hover:bg-secondary transition-colors"
              >
                <p className="font-body text-[10px] uppercase tracking-[0.18em] text-deep-green mb-4">
                  {post.tag} · {post.readTime}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-normal text-foreground leading-snug mb-3 group-hover:underline underline-offset-4">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-foreground/80 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
