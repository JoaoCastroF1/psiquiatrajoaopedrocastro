import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd from "@/components/JsonLd";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blogPosts";

const blogListJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog — Dr. João Pedro Castro",
  description: "Artigos sobre saúde mental escritos com base na prática clínica e na literatura científica atual.",
  url: "https://drjoaopedrocastro.com.br/blog",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: blogPosts.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://drjoaopedrocastro.com.br/blog/${post.slug}`,
      name: post.title,
    })),
  },
};

const Blog = () => {
  return (
    <div className="min-h-screen">
      <JsonLd data={blogListJsonLd} />
      <Navbar />
      <section className="pt-28 md:pt-36 pb-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="font-body text-xs uppercase tracking-[0.25em] text-muted-foreground mb-5">
              Conteúdo
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-normal text-foreground leading-tight mb-6">
              Informação com{" "}
              <em className="text-deep-green">fundamento clínico</em>
            </h1>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Artigos sobre saúde mental escritos com base na prática clínica e na literatura científica atual.
            </p>
          </motion.div>
        </div>
      </section>

      <BlogSection showHeader={false} />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
