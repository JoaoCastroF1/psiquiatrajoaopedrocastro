import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import doctorImg from "@/assets/doctor-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            <p className="font-body text-sm uppercase tracking-[0.2em] mb-4 opacity-80">
              Psiquiatra · Psicogeriatra · CRM XXXXX
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Dr. João Pedro
              <br />
              <span className="text-warm">Castro</span>
            </h1>
            <p className="font-body text-lg md:text-xl leading-relaxed mb-8 opacity-90 max-w-lg">
              Cuidado humanizado em saúde mental para todas as idades.
              Especialista em psiquiatria geriátrica e transtornos do humor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-warm text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg text-lg hover:brightness-110 transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground font-body font-medium px-8 py-4 rounded-lg text-lg hover:bg-primary-foreground/10 transition-all"
              >
                Saiba Mais
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl">
                <img
                  src={doctorImg}
                  alt="Dr. João Pedro Castro - Psiquiatra"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card text-foreground px-6 py-3 rounded-xl shadow-lg font-body font-semibold">
                +15 anos de experiência
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
