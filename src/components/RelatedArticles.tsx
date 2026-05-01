import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { blogPosts, BlogPost } from "@/data/blogPosts";

interface RelatedArticlesProps {
  currentSlug: string;
  currentTag: string;
}

const RelatedArticles = ({ currentSlug, currentTag }: RelatedArticlesProps) => {
  // First try same tag, then fill with other posts
  const sameTag = blogPosts.filter(
    (p) => p.tag === currentTag && p.slug !== currentSlug
  );
  const others = blogPosts.filter(
    (p) => p.tag !== currentTag && p.slug !== currentSlug
  );
  const related = [...sameTag, ...others].slice(0, 3);

  if (related.length === 0) return null;

  return (
    <aside className="mt-16 pt-12 border-t border-border">
      <h2 className="font-display text-xl md:text-2xl text-foreground mb-8">
        Artigos relacionados
      </h2>
      <div className="grid gap-6">
        {related.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block border border-border p-6 hover:border-primary/20 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-body text-[11px] uppercase tracking-[0.2em] text-graphite/70">
                {post.tag}
              </span>
              <span className="font-body text-[11px] text-muted-foreground">
                {post.readTime}
              </span>
            </div>
            <h3 className="font-display text-lg font-medium text-foreground mb-2 leading-snug">
              {post.title}
            </h3>
            <span className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-deep-green group-hover:gap-3 transition-all">
              Ler artigo <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default RelatedArticles;
