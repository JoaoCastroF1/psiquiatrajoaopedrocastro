import { MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5531991315958?text=ol%C3%A1%2C%20vim%20do%20seu%20site%20e%20gostaria%20de%20agendar%20uma%20consulta.";

const WhatsAppButton = () => {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </a>
  );
};

export default WhatsAppButton;
