import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const WA_LINK =
  "https://wa.me/5531991315958?text=Ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      onClick={() => trackEvent("cta_whatsapp_click", { location: "floating_button" })}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.4, type: "spring" }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full px-5 py-3.5 md:px-6"
    >
      <MessageCircle className="w-5 h-5 fill-current flex-shrink-0" />
      <span className="hidden md:inline font-body text-sm font-medium">
        Agendar consulta
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
