import Navbar from "@/components/Navbar";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <div className="min-h-screen">
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
