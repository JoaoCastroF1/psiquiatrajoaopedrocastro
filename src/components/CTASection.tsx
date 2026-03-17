import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contato" className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-primary-foreground max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Dê o primeiro passo para sua <span className="text-warm">saúde mental</span>
          </h2>
          <p className="font-body text-lg opacity-90 mb-10 leading-relaxed">
            Agende sua consulta e inicie uma jornada de autoconhecimento e bem-estar. 
            Estou aqui para te acolher.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-warm text-accent-foreground font-body font-bold px-10 py-5 rounded-xl text-xl hover:brightness-110 transition-all shadow-xl mb-12"
          >
            <Phone className="w-6 h-6" />
            Agendar pelo WhatsApp
          </a>

          <div className="grid sm:grid-cols-3 gap-8 mt-4">
            <div className="flex flex-col items-center gap-2 opacity-80">
              <MapPin className="w-5 h-5" />
              <p className="font-body text-sm">Consultório Centro Médico<br />Rua Exemplo, 123</p>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80">
              <Clock className="w-5 h-5" />
              <p className="font-body text-sm">Seg a Sex<br />8h às 18h</p>
            </div>
            <div className="flex flex-col items-center gap-2 opacity-80">
              <Phone className="w-5 h-5" />
              <p className="font-body text-sm">WhatsApp<br />(00) 00000-0000</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
